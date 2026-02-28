// Tour and learning guide for Practical Math
const tourSteps = {
    beginner: [
        { title: 'Chào mừng!', description: 'Toán học thực tế giúp bạn giải quyết vấn đề hàng ngày hiệu quả hơn.', target: null },
        { title: 'Tính nhẩm nhanh', description: 'Bắt đầu với kỹ năng tính nhẩm - nền tảng của mọi tính toán.', target: '[data-component="mental-math"]' },
        { title: 'Phần trăm', description: 'Phần trăm xuất hiện khắp nơi: giảm giá, thuế, lãi suất...', target: '[data-component="percentages"]' },
        { title: 'Diện tích & Thể tích', description: 'Tính toán không gian cho nhà cửa, nội thất, sơn tường.', target: '[data-component="area-volume"]' },
        { title: 'Lập ngân sách', description: 'Quản lý tiền bạc với quy tắc 50/30/20.', target: '[data-component="budgeting"]' },
        { title: 'Hoàn thành!', description: 'Bạn đã nắm được cơ bản. Hãy khám phá thêm!', target: null }
    ],
    intermediate: [
        { title: 'Lên cấp!', description: 'Bạn sẽ học các công cụ toán mạnh mẽ hơn.', target: null },
        { title: 'Lãi kép', description: 'Kỳ quan thứ 8 của thế giới - Einstein. Hiểu lãi kép để làm giàu.', target: '[data-component="compound-interest"]' },
        { title: 'Tương quan vs Nhân quả', description: 'Không phải cứ A đi kèm B nghĩa là A gây ra B.', target: '[data-component="correlation"]' },
        { title: 'Tính lãi vay', description: 'Hiểu cách ngân hàng tính lãi để tránh nợ xấu.', target: '[data-component="loan-calculation"]' },
        { title: 'Xác suất hàng ngày', description: 'Đánh giá rủi ro và cơ hội bằng xác suất.', target: '[data-component="probability-daily"]' },
        { title: 'Phân tích chi phí', description: 'So sánh được-mất trước mọi quyết định lớn.', target: '[data-component="cost-benefit"]' },
        { title: 'Tiến bộ tốt!', description: 'Bạn đã có công cụ toán mạnh mẽ cho cuộc sống.', target: null }
    ],
    advanced: [
        { title: 'Nâng cao!', description: 'Các mô hình toán mạnh mẽ cho quyết định phức tạp.', target: null },
        { title: 'Quy hoạch tuyến tính', description: 'Tối ưu hóa khi có nhiều ràng buộc cùng lúc.', target: '[data-component="linear-programming"]' },
        { title: 'Lý thuyết trò chơi', description: 'Chiến lược khi kết quả phụ thuộc người khác.', target: '[data-component="game-theory"]' },
        { title: 'Tư duy thuật toán', description: 'Giải quyết vấn đề một cách có hệ thống.', target: '[data-component="algorithm-thinking"]' },
        { title: 'Toán kiến trúc', description: 'Toán học đằng sau mọi công trình.', target: '[data-component="architecture-math"]' },
        { title: 'Lạm phát', description: 'Hiểu giá trị thực của tiền theo thời gian.', target: '[data-component="inflation-math"]' },
        { title: 'Master!', description: 'Bạn đã có nền tảng toán thực tế vững chắc!', target: null }
    ]
};

const quickTips = [
    { icon: '🧠', text: 'Nhân 9: lấy số × 10 rồi trừ đi chính nó' },
    { icon: '💡', text: 'Quy tắc 72: 72 ÷ lãi suất = số năm tiền gấp đôi' },
    { icon: '📊', text: 'Median (trung vị) tốt hơn Mean khi có giá trị ngoại lai' },
    { icon: '⚖️', text: 'Luôn tính chi phí cơ hội trước khi quyết định' },
    { icon: '📐', text: 'Tam giác 3-4-5 để kiểm tra góc vuông' },
    { icon: '🎲', text: 'Tương quan ≠ Nhân quả - đừng nhầm lẫn!' }
];

const mathChecklist = [
    'Tính nhẩm nhanh phép cộng, trừ, nhân',
    'Tính phần trăm giảm giá, thuế',
    'Ước lượng chi phí khi mua sắm',
    'Hiểu lãi đơn và lãi kép',
    'Lập ngân sách cá nhân hàng tháng',
    'Phân biệt tương quan và nhân quả',
    'Đọc hiểu biểu đồ thống kê',
    'Tính diện tích, thể tích cơ bản',
    'So sánh chi phí-lợi ích trước quyết định lớn',
    'Nhận biết thống kê gây hiểu lầm'
];
