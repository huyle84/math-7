export const questions = [
  // Chủ đề: Đại học Tân Tạo (TTU)
  { id: "attu_1", category: "TTU", image: "/images/ttu.png", question: "Đại học Tân Tạo được thành lập vào năm nào?", options: [{ id: "A", text: "2008", isCorrect: false }, { id: "B", text: "2010", isCorrect: true }, { id: "C", text: "2012", isCorrect: false }, { id: "D", text: "2015", isCorrect: false }], timeLimit: 20 },
  { id: "attu_2", category: "TTU", image: "/images/ttu.png", question: "Ai là người sáng lập Đại học Tân Tạo?", options: [{ id: "A", text: "GS. TS. Đặng Thị Hoàng Yến", isCorrect: true }, { id: "B", text: "Bà Nguyễn Phương Thảo", isCorrect: false }, { id: "C", text: "Ông Phạm Nhật Vượng", isCorrect: false }, { id: "D", text: "Bà Thái Hương", isCorrect: false }], timeLimit: 20 },
  { id: "attu_3", category: "TTU", image: "/images/ttu.png", question: "Biểu tượng nổi bật của TTU là gì?", options: [{ id: "A", text: "Toà nhà hình chiếc lá", isCorrect: false }, { id: "B", text: "Toà nhà Gillis", isCorrect: true }, { id: "C", text: "Tháp tri thức", isCorrect: false }, { id: "D", text: "Hồ bơi vô cực", isCorrect: false }], timeLimit: 20 },
  { id: "attu_4", category: "TTU", image: "/images/ttu.png", question: "Triết lý giáo dục của TTU nhấn mạnh yếu tố nào?", options: [{ id: "A", text: "Học đi đôi với hành", isCorrect: false }, { id: "B", text: "Khai phóng và Học suốt đời", isCorrect: true }, { id: "C", text: "Đề cao lý thuyết", isCorrect: false }, { id: "D", text: "Tự do tuyệt đối", isCorrect: false }], timeLimit: 20 },

  // Chủ đề: Khoa Công Nghệ Thông Tin
  { id: "it_1", category: "IT", image: "/images/it.png", question: "Khoa Công nghệ Thông tin hiện nay đào tạo mấy chuyên ngành cử nhân?", options: [{ id: "A", text: "4", isCorrect: true }, { id: "B", text: "3", isCorrect: false }, { id: "C", text: "2", isCorrect: false }, { id: "D", text: "1", isCorrect: false }], timeLimit: 20 },
  { id: "it_2", category: "IT", image: "/images/it.png", question: "Tiền thân Khoa CNTT có tên là gì?", options: [{ id: "A", text: "Khoa Máy tính", isCorrect: false }, { id: "B", text: "Khoa Kỹ thuật", isCorrect: true }, { id: "C", text: "Khoa Công nghệ", isCorrect: false }, { id: "D", text: "Khoa Trí tuệ Nhân tạo", isCorrect: false }], timeLimit: 20 },
  {
    id: "it_3_v2",
    category: "IT", image: "/images/it.png", question: "Sinh viên IT tại TTU được tiếp cận công nghệ nào sau đây để tối ưu hóa quy trình lập trình và nghiên cứu?",
    options: [
      { id: "A", text: "Các hệ điều hành lỗi thời", isCorrect: false },
      { id: "B", text: "Môi trường phát triển tích hợp AI (Agentic IDE)", isCorrect: true },
      { id: "C", text: "Viết mã nguồn trên giấy", isCorrect: false },
      { id: "D", text: "Chỉ sử dụng trình soạn thảo văn bản đơn thuần", isCorrect: false }
    ],
    timeLimit: 20
  },

  // Chủ đề: Các Ngành Đào Tạo
  { id: "major_1", category: "Majors", image: "/images/majors.png", question: "Khoa Y Đại học Tân Tạo nổi bật với chương trình đào tạo theo tiêu chuẩn nào?", options: [{ id: "A", text: "Tiêu chuẩn Châu Âu", isCorrect: false }, { id: "B", text: "Tiêu chuẩn Mỹ (USMLE)", isCorrect: true }, { id: "C", text: "Tiêu chuẩn Nhật Bản", isCorrect: false }, { id: "D", text: "Tiêu chuẩn Úc", isCorrect: false }], timeLimit: 20 },
  { id: "major_2", category: "Majors", image: "/images/majors.png", question: "Ngoài Y khoa và CNTT, nhóm ngành nào sau đây đang được đào tạo tại TTU?", options: [{ id: "A", text: "Nhóm ngành Kinh tế - Kinh doanh - Luật", isCorrect: false }, { id: "B", text: "Công nghệ Sinh học", isCorrect: false }, { id: "C", text: "Nhóm ngành Ngôn ngữ ", isCorrect: false }, { id: "D", text: "Tất cả các đáp án trên", isCorrect: true }], timeLimit: 20 },
  { id: "major_3", category: "Majors", image: "/images/majors.png", question: "Ngoại ngữ của sinh viên TTU được chú trọng nhờ?", options: [{ id: "A", text: "Các lớp tăng cường Tiếng Anh", isCorrect: false }, { id: "B", text: "Các lớp luyện thi TOEIC, IELTS", isCorrect: false }, { id: "C", text: "Các môn học với giáo trình quốc tế", isCorrect: false }, { id: "D", text: "Tất cả A, B, C đều đúng", isCorrect: true }], timeLimit: 20 },

  // Chủ đề: Toán học Đố Vui
  { id: "math_1", category: "Math", image: "/images/math.png", question: "Một nửa của 2 mũ 20 là bao nhiêu?", options: [{ id: "A", text: "1 mũ 10", isCorrect: false }, { id: "B", text: "2 mũ 10", isCorrect: false }, { id: "C", text: "2 mũ 19", isCorrect: true }, { id: "D", text: "1 mũ 20", isCorrect: false }], timeLimit: 20 },
  { id: "math_2", category: "Math", image: "/images/math.png", question: "Có bao nhiêu số 9 trong dãy số từ 1 đến 100?", options: [{ id: "A", text: "10", isCorrect: false }, { id: "B", text: "19", isCorrect: false }, { id: "C", text: "20", isCorrect: true }, { id: "D", text: "21", isCorrect: false }], timeLimit: 20 },
  { id: "math_3", category: "Math", image: "/images/math.png", question: "Một con ốc sên trèo lên cột cao 10m. Ngày trèo 3m, đêm tụt 2m. Mất bao lâu để lên tới đỉnh?", options: [{ id: "A", text: "10 ngày", isCorrect: false }, { id: "B", text: "9 ngày", isCorrect: false }, { id: "C", text: "8 ngày", isCorrect: true }, { id: "D", text: "7 ngày", isCorrect: false }], timeLimit: 20 },

  // Chủ đề: Tuyển sinh Thạc sĩ (TSThS)
  { id: "it_master_name", category: "IT", image: "/images/it.png", question: "Ngành đào tạo Thạc sĩ của Khoa CNTT là gì?", options: [{ id: "A", text: "Khoa học Máy tính", isCorrect: true }, { id: "B", text: "Trí tuệ nhân tạo", isCorrect: false }, { id: "C", text: "Công nghệ Thông tin", isCorrect: false }, { id: "D", text: "Tất cả 03 ngành trên", isCorrect: false }], timeLimit: 20 },
  { id: "master_1", category: "Admission", image: "/images/admission.png", question: "Chương trình Thạc sĩ tại TTU thường yêu cầu điều kiện gì để ứng tuyển?", options: [{ id: "A", text: "Tốt nghiệp THPT", isCorrect: false }, { id: "B", text: "Tốt nghiệp Đại học khối ngành phù hợp", isCorrect: true }, { id: "C", text: "Đã có bằng Tiến sĩ", isCorrect: false }, { id: "D", text: "Chưa từng đi làm", isCorrect: false }], timeLimit: 20 },
  { id: "master_2", category: "Admission", image: "/images/admission.png", question: "Thời gian đào tạo chuẩn cho chương trình Thạc sĩ thường kéo dài bao lâu?", options: [{ id: "A", text: "6 tháng - 1 năm", isCorrect: false }, { id: "B", text: "1.5 năm - 2 năm", isCorrect: true }, { id: "C", text: "4 năm", isCorrect: false }, { id: "D", text: "5 năm", isCorrect: false }], timeLimit: 20 },
  { id: "master_3", category: "Admission", image: "/images/admission.png", question: "Thí sinh có cần chứng chỉ ngoại ngữ để xét tuyển Thạc sĩ theo quy định hiện hành không?", options: [{ id: "A", text: "Bắt buộc có Bậc 3 (B1) trở lên", isCorrect: true }, { id: "B", text: "Không cần chứng chỉ ngoại ngữ", isCorrect: false }, { id: "C", text: "Chỉ cần thi Nói", isCorrect: false }, { id: "D", text: "Cần IELTS 8.0 trở lên", isCorrect: false }], timeLimit: 20 },

  // Chủ đề: AI và Công cụ Toán học (AI & Math Tools)
  {
    id: "ai_tool_1",
    category: "AI & Math", image: "/images/math.png", question: "Công cụ AI nào sau đây hỗ trợ giải toán và vẽ đồ thị hàm số mạnh mẽ nhất?",
    options: [
      { id: "A", text: "WolframAlpha", isCorrect: true },
      { id: "B", text: "PowerPoint", isCorrect: false },
      { id: "C", text: "Photoshop", isCorrect: false },
      { id: "D", text: "Spotify", isCorrect: false }
    ],
    timeLimit: 20
  },
  {
    id: "ai_tool_2",
    category: "AI & Math", image: "/images/math.png", question: "Trong nghiên cứu Toán học và CNTT, hệ soạn thảo văn bản nào thường được dùng để viết công thức Toán phức tạp?",
    options: [
      { id: "A", text: "Notepad", isCorrect: false },
      { id: "B", text: "Microsoft Paint", isCorrect: false },
      { id: "C", text: "LaTeX", isCorrect: true },
      { id: "D", text: "Google Keep", isCorrect: false }
    ],
    timeLimit: 20
  },
  {
    id: "ai_tool_3",
    category: "AI & Math", image: "/images/math.png", question: "Mô hình ngôn ngữ lớn (LLM) nổi tiếng do Google phát triển có tên là gì?",
    options: [
      { id: "A", text: "Siri", isCorrect: false },
      { id: "B", text: "Gemini", isCorrect: true },
      { id: "C", text: "ChatGPT", isCorrect: false },
      { id: "D", text: "Grok", isCorrect: false }
    ],
    timeLimit: 20
  },
  {
    id: "ai_tool_4",
    category: "AI & Math", image: "/images/math.png", question: "Công cụ nào của Google cho phép chạy code Python trực tiếp trên trình duyệt, thường dùng để huấn luyện AI?",
    options: [
      { id: "A", text: "Google Drive", isCorrect: false },
      { id: "B", text: "Google Meet", isCorrect: false },
      { id: "C", text: "Google Colab", isCorrect: true },
      { id: "D", text: "Google Sheets", isCorrect: false }
    ],
    timeLimit: 20
  },
  {
    id: "ai_tool_5",
    category: "AI & Math", image: "/images/math.png", question: "Thuật ngữ 'Deep Learning' thuộc lĩnh vực nào sau đây?",
    options: [
      { id: "A", text: "Sinh học phân tử", isCorrect: false },
      { id: "B", text: "Trí tuệ nhân tạo (AI)", isCorrect: true },
      { id: "C", text: "Khảo cổ học", isCorrect: false },
      { id: "D", text: "Kế toán tài chính", isCorrect: false }
    ],
    timeLimit: 20
  },
  {
    id: "ai_tool_6",
    category: "AI & Math", image: "/images/math.png", question: "Phần mềm hình học động phổ biến giúp trực quan hóa các bài toán hình học và đại số là?",
    options: [
      { id: "A", text: "GeoGebra", isCorrect: true },
      { id: "B", text: "AutoCAD", isCorrect: false },
      { id: "C", text: "VLC Player", isCorrect: false },
      { id: "D", text: "Skype", isCorrect: false }
    ],
    timeLimit: 20
  }
];