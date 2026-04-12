import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import { questions } from './questions';

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

interface Player {
  id: string;
  name: string;
  score: number;
}

interface Room {
  roomId: string;
  hostId: string;
  players: Record<string, Player>;
  gameState: 'lobby' | 'question' | 'result' | 'podium';
  selectedQuestions: any[]; // Lưu trữ 10 câu hỏi ngẫu nhiên cho ván này
  currentQuestionIndex: number;
  questionStartTime: number;
  answeredCount: number;
  timerId?: NodeJS.Timeout;
}

const rooms: Record<string, Room> = {};

const generateRoomId = () => Math.floor(1000 + Math.random() * 9000).toString();

const forceShowResult = (roomId: string) => {
  const room = rooms[roomId];
  if (room && room.gameState === 'question') {
    if (room.timerId) clearTimeout(room.timerId);
    room.gameState = 'result';
    const question = room.selectedQuestions[room.currentQuestionIndex];
    if (!question) return;
    const correctOption = question.options.find((o:any) => o.isCorrect)?.id;
    const sortedPlayers = Object.values(room.players).sort((a, b) => b.score - a.score);
    const playerRanks: Record<string, number> = {};
    sortedPlayers.forEach((p, i) => { playerRanks[p.id] = i + 1; });
    
    io.to(roomId).emit('question-result', { 
      correctOption, 
      leaderboard: sortedPlayers.slice(0, 5),
      playerRanks,
      totalPlayers: sortedPlayers.length
    });
  }
};

io.on('connection', (socket) => {
  console.log(`User connected: ${socket.id}`);

  socket.on('host:create-room', () => {
    let roomId = generateRoomId();
    while (rooms[roomId]) { roomId = generateRoomId(); }
    rooms[roomId] = {
      roomId, hostId: socket.id, players: {},
      gameState: 'lobby', selectedQuestions: [], currentQuestionIndex: -1,
      questionStartTime: 0, answeredCount: 0
    };
    socket.join(roomId);
    socket.emit('room-created', roomId);
    console.log(`Room created: ${roomId}`);
  });

  socket.on('host:start-game', (roomId) => {
    const room = rooms[roomId];
    if (room && room.hostId === socket.id) {
      // Logic chọn 10 câu ngẫu nhiên: Lấy tất cả chủ đề, mỗi chủ đề ngẫu nhiên 2 câu
      const categories = ['TTU', 'IT', 'Majors', 'Math', 'Admission'];
      let gameQuestions: any[] = [];
      
      categories.forEach(cat => {
        const catQuestions = questions.filter(q => q.category === cat);
        const shuffled = catQuestions.sort(() => 0.5 - Math.random());
        gameQuestions.push(...shuffled.slice(0, 2));
      });
      // Xáo trộn 10 câu này
      room.selectedQuestions = gameQuestions.sort(() => 0.5 - Math.random());

      room.currentQuestionIndex = 0;
      room.gameState = 'question';
      room.questionStartTime = Date.now();
      room.answeredCount = 0;
      const question = room.selectedQuestions[room.currentQuestionIndex];
      if (!question) return;
      
      // Bắt đầu đếm ngược thời gian ở Backend
      if (room.timerId) clearTimeout(room.timerId);
      room.timerId = setTimeout(() => forceShowResult(roomId), question.timeLimit * 1000);

      const sanitizedQuestion = { ...question, options: question.options.map((o:any) => ({ id: o.id, text: o.text })) };
      io.to(roomId).emit('game-started');
      io.to(roomId).emit('new-question', sanitizedQuestion);
    }
  });

  socket.on('host:next-question', (roomId) => {
    const room = rooms[roomId];
    if (room && room.hostId === socket.id) {
      if (room.currentQuestionIndex < room.selectedQuestions.length - 1) {
        room.currentQuestionIndex++;
        room.gameState = 'question';
        room.questionStartTime = Date.now();
        room.answeredCount = 0;
        const question = room.selectedQuestions[room.currentQuestionIndex];
        if (!question) return;

        if (room.timerId) clearTimeout(room.timerId);
        room.timerId = setTimeout(() => forceShowResult(roomId), question.timeLimit * 1000);

        const sanitizedQuestion = { ...question, options: question.options.map((o:any) => ({ id: o.id, text: o.text })) };
        io.to(roomId).emit('new-question', sanitizedQuestion);
      } else {
        room.gameState = 'podium';
        const sortedPlayers = Object.values(room.players).sort((a, b) => b.score - a.score);
        const playerRanks: Record<string, number> = {};
        sortedPlayers.forEach((p, i) => { playerRanks[p.id] = i + 1; });
        io.to(roomId).emit('game-over', { leaderboard: sortedPlayers.slice(0, 5), playerRanks, totalPlayers: sortedPlayers.length });
      }
    }
  });

  socket.on('host:show-result', (roomId) => {
    const room = rooms[roomId];
    if (room && room.hostId === socket.id) {
      forceShowResult(roomId);
    }
  });

  socket.on('player:join', ({ roomId, name }) => {
    const room = rooms[roomId];
    if (room && room.gameState === 'lobby') {
      room.players[socket.id] = { id: socket.id, name, score: 0 };
      socket.join(roomId);
      socket.emit('joined-success', { id: socket.id, name });
      io.to(roomId).emit('update-players', Object.values(room.players));
    } else {
      socket.emit('join-error', 'Phòng không tồn tại hoặc trò chơi đã bắt đầu.');
    }
  });

  socket.on('player:submit-answer', ({ roomId, answerId }) => {
    const room = rooms[roomId];
    if (room && room.players[socket.id] && room.gameState === 'question') {
      const question = room.selectedQuestions[room.currentQuestionIndex];
      if (!question) return;
      const timeLimitMs = question.timeLimit * 1000;
      const timeTaken = Date.now() - room.questionStartTime;
      const correctOption = question.options.find((o:any) => o.isCorrect)?.id;
      
      let pointsEarned = 0;
      if (answerId === correctOption) {
        const timeRatio = Math.max(0, 1 - (timeTaken / timeLimitMs));
        pointsEarned = 500 + Math.round(500 * timeRatio);
      }

      room.players[socket.id]!.score += pointsEarned;
      room.answeredCount++;
      
      socket.emit('answer-received', { pointsEarned, isCorrect: answerId===correctOption });
      
      // Tự động chuyển qua kết quả nếu tất cả đều nộp bài xong
      if (room.answeredCount >= Object.keys(room.players).length) {
        io.to(room.hostId).emit('player-answered', { 
          totalPlayers: Object.keys(room.players).length, 
          answeredCount: room.answeredCount 
        });
        setTimeout(() => forceShowResult(roomId), 1500);
      } else {
        io.to(room.hostId).emit('player-answered', { 
          totalPlayers: Object.keys(room.players).length, 
          answeredCount: room.answeredCount 
        });
      }
    }
  });

  socket.on('disconnect', () => {
    for (const roomId in rooms) {
      const room = rooms[roomId];
      if (!room) continue;
      if (room.hostId === socket.id) {
        io.to(roomId).emit('host-disconnected');
        delete rooms[roomId];
      } else if (room.players[socket.id]) {
        delete room.players[socket.id];
        io.to(roomId).emit('update-players', Object.values(room.players));
      }
    }
  });
});

const PORT = 3005;
server.listen(PORT, '0.0.0.0', () => {
  console.log(`Socket.io Server is running on port ${PORT}`);
});
