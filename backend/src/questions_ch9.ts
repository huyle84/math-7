export const questions_ch9 = [
  // BÀI 1: Làm quen với biến cố ngẫu nhiên
  { 
    id: "ch9_1_1", category: "Chương 9 - Bài 1", image: "/images/math7.png", timeLimit: 30, 
    question: "Biến cố nào dưới đây là biến cố chắc chắn?", 
    options: [
      { id: "A", text: "Đồng xu gieo 2 lần đều ra sấp", isCorrect: false }, 
      { id: "B", text: "Xúc xắc ra mặt 7 chấm", isCorrect: false }, 
      { id: "C", text: "Ngày mai mặt trời mọc ở hướng Đông", isCorrect: true }, 
      { id: "D", text: "Ngày mai trời mưa", isCorrect: false }
    ] 
  },
  { 
    id: "ch9_1_2", category: "Chương 9 - Bài 1", image: "/images/math7.png", timeLimit: 30, 
    question: "Lấy ngẫu nhiên 1 quả bóng từ hộp có 5 bóng đỏ và 3 bóng xanh. Biến cố 'Lấy được bóng vàng' là biến cố:", 
    options: [
      { id: "A", text: "Ngẫu nhiên", isCorrect: false }, 
      { id: "B", text: "Không thể", isCorrect: true }, 
      { id: "C", text: "Chắc chắn", isCorrect: false }, 
      { id: "D", text: "Có thể", isCorrect: false }
    ] 
  },
  { 
    id: "ch9_1_3", category: "Chương 9 - Bài 1", image: "/images/math7.png", timeLimit: 30, 
    question: "Gieo một con xúc xắc cân đối. Biến cố 'Mặt xuất hiện có số chấm là số nguyên tố' là biến cố:", 
    options: [
      { id: "A", text: "Chắc chắn", isCorrect: false }, 
      { id: "B", text: "Không thể", isCorrect: false }, 
      { id: "C", text: "Xác suất là $0$", isCorrect: false }, 
      { id: "D", text: "Ngẫu nhiên", isCorrect: true }
    ] 
  },
  { 
    id: "ch9_1_4", category: "Chương 9 - Bài 1", image: "/images/math7.png", timeLimit: 30, 
    question: "Từ 'Toán học' có 7 chữ cái. Rút ngẫu nhiên một thẻ chữ. Biến cố rút được chữ 'a' là:", 
    options: [
      { id: "A", text: "Biến cố chắc chắn", isCorrect: false }, 
      { id: "B", text: "Biến cố không thể", isCorrect: false }, 
      { id: "C", text: "Biến cố ngẫu nhiên", isCorrect: true }, 
      { id: "D", text: "Không có tên gọi", isCorrect: false }
    ] 
  },
  { 
    id: "ch9_1_5", category: "Chương 9 - Bài 1", image: "/images/math7.png", timeLimit: 30, 
    question: "Biến cố không thể là biến cố như thế nào?", 
    options: [
      { id: "A", text: "Có thể xảy ra", isCorrect: false }, 
      { id: "B", text: "Chắc chắn không xảy ra", isCorrect: true }, 
      { id: "C", text: "Chắc chắn xảy ra", isCorrect: false }, 
      { id: "D", text: "Xảy ra với tần suất cao", isCorrect: false }
    ] 
  },
  { 
    id: "ch9_1_6", category: "Chương 9 - Bài 1", image: "/images/math7.png", timeLimit: 30, 
    question: "Gieo 1 xúc xắc 6 mặt, biến cố 'Số chấm xuất hiện nhỏ hơn 7' là:", 
    options: [
      { id: "A", text: "Biến cố không thể", isCorrect: false }, 
      { id: "B", text: "Biến cố ngẫu nhiên", isCorrect: false }, 
      { id: "C", text: "Thiếu dữ kiện", isCorrect: false }, 
      { id: "D", text: "Biến cố chắc chắn", isCorrect: true }
    ] 
  },
  { 
    id: "ch9_1_7", category: "Chương 9 - Bài 1", image: "/images/math7.png", timeLimit: 30, 
    question: "Trong các phát biểu sau, phát biểu nào mô tả một hiện tượng ngẫu nhiên?", 
    options: [
      { id: "A", text: "$1 + 1 = 2$", isCorrect: false }, 
      { id: "B", text: "Kết quả của việc tung một đồng xu", isCorrect: true }, 
      { id: "C", text: "Nước sôi ở $100^\\circ C$", isCorrect: false }, 
      { id: "D", text: "Một tuần lễ có 7 ngày", isCorrect: false }
    ] 
  },
  { 
    id: "ch9_1_8", category: "Chương 9 - Bài 1", image: "/images/math7.png", timeLimit: 30, 
    question: "Nhặt một thẻ từ bộ bài chuẩn 52 lá (không tính lá joker), biến cố 'Lấy được lá joker' là:", 
    options: [
      { id: "A", text: "Chắc chắn", isCorrect: false }, 
      { id: "B", text: "Ngẫu nhiên", isCorrect: false }, 
      { id: "C", text: "Biến cố không thể", isCorrect: true }, 
      { id: "D", text: "Thiếu dữ kiện", isCorrect: false }
    ] 
  },
  { 
    id: "ch9_1_9", category: "Chương 9 - Bài 1", image: "/images/math7.png", timeLimit: 30, 
    question: "Bắn cung vào bia hình tròn. Biến cố mũi tên cắm vào đúng vòng 10 điểm là:", 
    options: [
      { id: "A", text: "Không thể", isCorrect: false }, 
      { id: "B", text: "Chắc chắn", isCorrect: false }, 
      { id: "C", text: "Luôn đúng", isCorrect: false }, 
      { id: "D", text: "Biến cố ngẫu nhiên", isCorrect: true }
    ] 
  },
  { 
    id: "ch9_1_10", category: "Chương 9 - Bài 1", image: "/images/math7.png", timeLimit: 30, 
    question: "Chọn ngẫu nhiên 1 ngày trong tuần. Biến cố 'Ngày đó là Chủ Nhật' thuộc loại biến cố nào?", 
    options: [
      { id: "A", text: "Biến cố chắc chắn", isCorrect: false }, 
      { id: "B", text: "Biến cố ngẫu nhiên", isCorrect: true }, 
      { id: "C", text: "Biến cố không thể", isCorrect: false }, 
      { id: "D", text: "Tất cả đều sai", isCorrect: false }
    ] 
  },

  // BÀI 2: Làm quen với xác suất của biến cố ngẫu nhiên
  { 
    id: "ch9_2_1", category: "Chương 9 - Bài 2", image: "/images/math7.png", timeLimit: 30, 
    question: "Xác suất của biến cố không thể và biến cố chắc chắn lần lượt là:", 
    options: [
      { id: "A", text: "1 và 0", isCorrect: false }, 
      { id: "B", text: "0,5 và 1", isCorrect: false }, 
      { id: "C", text: "0 và 1", isCorrect: true }, 
      { id: "D", text: "0 và 100", isCorrect: false }
    ] 
  },
  { 
    id: "ch9_2_2", category: "Chương 9 - Bài 2", image: "/images/math7.png", timeLimit: 45, 
    question: "Gieo một đồng xu cân đối và đồng chất 1 lần. Xác suất xuất hiện mặt ngửa là:", 
    options: [
      { id: "A", text: "$1$", isCorrect: false }, 
      { id: "B", text: "$0$", isCorrect: false }, 
      { id: "C", text: "$\\frac{1}{4}$", isCorrect: false }, 
      { id: "D", text: "$\\frac{1}{2}$", isCorrect: true }
    ] 
  },
  { 
    id: "ch9_2_3", category: "Chương 9 - Bài 2", image: "/images/math7.png", timeLimit: 45, 
    question: "Gieo xúc xắc 6 mặt cân đối. Xác suất xuất hiện số chấm lớn hơn 4 là:", 
    options: [
      { id: "A", text: "$\\frac{1}{6}$", isCorrect: false }, 
      { id: "B", text: "$\\frac{1}{3}$", isCorrect: true }, 
      { id: "C", text: "$\\frac{1}{2}$", isCorrect: false }, 
      { id: "D", text: "$0$", isCorrect: false }
    ] 
  },
  { 
    id: "ch9_2_4", category: "Chương 9 - Bài 2", image: "/images/math7.png", timeLimit: 45, 
    question: "Chọn ngẫu nhiên 1 số từ 1 đến 10. Xác suất chọn được số chia hết cho 3 là:", 
    options: [
      { id: "A", text: "$0,5$", isCorrect: false }, 
      { id: "B", text: "$0,2$", isCorrect: false }, 
      { id: "C", text: "$0,3$", isCorrect: true }, 
      { id: "D", text: "$0,4$", isCorrect: false }
    ] 
  },
  { 
    id: "ch9_2_5", category: "Chương 9 - Bài 2", image: "/images/math7.png", timeLimit: 45, 
    question: "Trong hộp có 3 bi đỏ, 2 bi vàng và 5 bi xanh. Xác suất lấy được bi vàng là:", 
    options: [
      { id: "A", text: "$50\\%$", isCorrect: false }, 
      { id: "B", text: "$30\\%$", isCorrect: false }, 
      { id: "C", text: "$10\\%$", isCorrect: false }, 
      { id: "D", text: "$20\\%$", isCorrect: true }
    ] 
  },
  { 
    id: "ch9_2_6", category: "Chương 9 - Bài 2", image: "/images/math7.png", timeLimit: 45, 
    question: "Công thức cơ bản của xác suất $P(A)$ được xác định bằng tỉ số giữa:", 
    options: [
      { id: "A", text: "Số lần lặp lại thí nghiệm", isCorrect: false }, 
      { id: "B", text: "Số kết quả thuận lợi cho A / Tổng số kết quả có thể xảy ra", isCorrect: true }, 
      { id: "C", text: "Tổng kết quả / Số biến cố thuận lợi", isCorrect: false }, 
      { id: "D", text: "Kết quả đúng / Số biến cố không thể", isCorrect: false }
    ] 
  },
  { 
    id: "ch9_2_7", category: "Chương 9 - Bài 2", image: "/images/math7.png", timeLimit: 45, 
    question: "Xác suất của một biến cố $A$ bất kỳ luôn thỏa mãn điều kiện nào?", 
    options: [
      { id: "A", text: "$P(A) > 1$", isCorrect: false }, 
      { id: "B", text: "$P(A) < 0$", isCorrect: false }, 
      { id: "C", text: "$0 \\le P(A) \\le 1$", isCorrect: true }, 
      { id: "D", text: "$-1 \\le P(A) \\le 1$", isCorrect: false }
    ] 
  },
  { 
    id: "ch9_2_8", category: "Chương 9 - Bài 2", image: "/images/math7.png", timeLimit: 45, 
    question: "Một lớp có 15 học sinh nam và 25 học sinh nữ. Chọn ngẫu nhiên 1 lớp trưởng. Xác suất chọn được 1 bạn nữ là:", 
    options: [
      { id: "A", text: "$\\frac{3}{8}$", isCorrect: false }, 
      { id: "B", text: "$\\frac{1}{25}$", isCorrect: false }, 
      { id: "C", text: "$0,5$", isCorrect: false }, 
      { id: "D", text: "$\\frac{5}{8}$", isCorrect: true }
    ] 
  },
  { 
    id: "ch9_2_9", category: "Chương 9 - Bài 2", image: "/images/math7.png", timeLimit: 45, 
    question: "Một thẻ ghi một trong các chữ 'M', 'A', 'T', 'H'. Rút ngẫu nhiên 1 thẻ. Xác suất rút được phụ âm bằng:", 
    options: [
      { id: "A", text: "$\\frac{1}{4}$", isCorrect: false }, 
      { id: "B", text: "$\\frac{3}{4}$", isCorrect: true }, 
      { id: "C", text: "$\\frac{1}{2}$", isCorrect: false }, 
      { id: "D", text: "$0$", isCorrect: false }
    ] 
  },
  { 
    id: "ch9_2_10", category: "Chương 9 - Bài 2", image: "/images/math7.png", timeLimit: 45, 
    question: "Tung đồng thời 2 đồng xu cân đối. Xác suất xuất hiện 1 mặt sấp và 1 mặt ngửa là:", 
    options: [
      { id: "A", text: "$\\frac{1}{4}$", isCorrect: false }, 
      { id: "B", text: "$\\frac{3}{4}$", isCorrect: false }, 
      { id: "C", text: "$\\frac{1}{2}$", isCorrect: true }, 
      { id: "D", text: "$1$", isCorrect: false }
    ] 
  }
];