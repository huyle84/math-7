import { io, Socket } from 'socket.io-client';

// Kết nối động tới Backend (Cùng IP với Frontend nhưng PORT 3005)
const URL = `http://${window.location.hostname}:3005`;

export const socket: Socket = io(URL, {
  autoConnect: true,
  transports: ['websocket', 'polling']
});
