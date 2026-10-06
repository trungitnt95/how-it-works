// Guided tour for English Grammar.
// siteTourSteps: how to use the page (same for every level) - this is what the "🎓 Hướng dẫn" button runs.
const siteTourSteps = [
    { title: 'Chào mừng', description: 'Trang gồm các chủ điểm ngữ pháp xếp theo chuẩn CEFR (A1-C2). Hướng dẫn nhanh này đi qua 8 phần chính của trang.', target: null },
    { title: '⚙️ Chọn trình độ', description: 'Bấm ⚙️ để đổi trình độ A1-C2. Danh sách chủ điểm, tiến độ và bài tập sẽ theo trình độ bạn chọn; bạn đổi lại bất cứ lúc nào.', target: '#changeLevelBtn' },
    { title: '📈 Tiến độ của bạn', description: 'Xem số chủ điểm đã thuộc, số câu cần ôn hôm nay và chuỗi ngày học liên tiếp. Hai nút ngay đây: "Ôn câu hay sai" và "Luyện 10 câu nhanh".', target: '#studyDashboard' },
    { title: '🔍 Tìm và lọc', description: 'Gõ tiếng Việt hoặc tiếng Anh để tìm chủ điểm. Lọc theo nhóm (Nền tảng, 12 thì, Mẫu câu...) hoặc theo "Đúng trình độ", "Chưa thuộc", "⭐ Đã lưu".', target: '#studyToolbar' },
    { title: '📚 Các chủ điểm', description: 'Bấm một thẻ để mở bài: tab Lý thuyết (tổng quan, công thức, cách dùng, lỗi thường gặp) và tab Bài tập. Tích vào ô vuông trên thẻ, hoặc bấm "Đánh dấu đã thuộc" trong bài, để tính vào tiến độ; ⭐ để lưu bài.', target: '#conceptsGrid' },
    { title: '📝 Bài tập', description: 'Luyện trắc nghiệm theo phạm vi: đúng trình độ, toàn bộ ngân hàng câu, câu hay sai / đến hạn ôn, hoặc chủ điểm đang mở. Chọn 10, 20 hoặc 40 câu; câu sai sẽ được nhắc ôn lại.', target: '#exerciseBtn' },
    { title: '📖 Câu ví dụ', description: 'Bảng tổng hợp câu ví dụ trong tab Bài tập của mọi chủ điểm, tiện để đọc nhiều câu mẫu một lúc.', target: '#examplesLink' },
    { title: '🕸️ Đồ thị ngữ pháp', description: 'Xem các khái niệm nối với nhau thế nào (Chủ ngữ, Động từ, Mệnh đề...). Bấm vào một nút để xem chi tiết và mở đúng bài học; nút ❓ trong đồ thị giải thích cách đọc.', target: '#graphLink' }
];

const quickTips = [
    { icon: '🧭', text: 'Muốn sửa câu nhanh, hãy tìm Subject và Verb trước rồi mới kiểm tra phần còn lại.' },
    { icon: '⏰', text: 'Chọn thì bằng câu hỏi: hành động lặp lại, đang diễn ra, đã kết thúc, hay còn ảnh hưởng tới hiện tại?' },
    { icon: '📰', text: 'Trước mỗi danh từ, tự hỏi: đếm được hay không, số ít hay số nhiều, xác định hay chưa.' },
    { icon: '❓', text: 'Có do/does/did rồi thì động từ chính quay về nguyên mẫu.' },
    { icon: '📍', text: 'Học giới từ theo cụm như interested in, depend on, good at thay vì học rời.' },
    { icon: '🔄', text: 'Gerund và infinitive nên học bằng ví dụ hoàn chỉnh, không chỉ học danh sách khô.' },
    { icon: '🧩', text: 'Khi câu dài, tách xem đâu là mệnh đề chính, đâu là mệnh đề phụ.' },
    { icon: '🗣️', text: 'Tra từ mới bằng IPA sẽ chính xác hơn rất nhiều so với việc đoán cách phát âm theo chữ cái.' },
    { icon: '✍️', text: 'Rà bài theo 3 lượt: verb forms, articles/quantifiers, rồi punctuation.' }
];
