// Tour and learning guide for Probability
const tourSteps = {
    beginner: [
        { title: 'Chào mừng!', description: 'Xác suất thống kê giúp bạn hiểu và dự đoán thế giới ngẫu nhiên.', target: null },
        { title: 'Xác suất là gì?', description: 'Bắt đầu với khái niệm cơ bản: Xác suất đo lường khả năng xảy ra.', target: '[data-component="what-is-probability"]' },
        { title: 'Không gian mẫu', description: 'Tất cả các kết quả có thể xảy ra.', target: '[data-component="sample-space"]' },
        { title: 'Z-Score', description: 'Cách đo vị trí của một giá trị so với trung bình.', target: '[data-component="z-score"]' },
        { title: 'Ngụy biện con bạc', description: 'Sai lầm phổ biến nhất về xác suất!', target: '[data-component="gamblers-fallacy"]' },
        { title: 'Hoàn thành!', description: 'Bạn đã nắm được cơ bản. Hãy explore thêm!', target: null }
    ],
    intermediate: [
        { title: 'Lên cấp!', description: 'Bạn sẽ học các khái niệm quan trọng hơn.', target: null },
        { title: 'Xác suất có điều kiện', description: 'P(A|B) - Xác suất A khi biết B đã xảy ra.', target: '[data-component="conditional"]' },
        { title: 'Kỳ vọng', description: 'Giá trị trung bình "dài hạn" của biến ngẫu nhiên.', target: '[data-component="expected-value"]' },
        { title: 'Phân phối chuẩn', description: 'Phân phối quan trọng nhất trong thống kê.', target: '[data-component="normal-distribution"]' },
        { title: 'Phân phối nhị thức', description: 'Đếm số lần thành công trong n lần thử.', target: '[data-component="binomial"]' },
        { title: 'Base Rate Neglect', description: 'Tại sao xét nghiệm 99% chính xác có thể sai nhiều hơn đúng.', target: '[data-component="base-rate-neglect"]' },
        { title: 'Tiến bộ tốt!', description: 'Bạn đã hiểu sâu hơn về xác suất.', target: null }
    ],
    advanced: [
        { title: 'Nâng cao!', description: 'Các công cụ mạnh mẽ cho phân tích thực tế.', target: null },
        { title: 'Định lý Bayes', description: 'Cập nhật niềm tin khi có thông tin mới.', target: '[data-component="bayes-theorem"]' },
        { title: 'Central Limit Theorem', description: 'Tại sao phân phối chuẩn xuất hiện khắp nơi.', target: '[data-component="central-limit"]' },
        { title: 'Kiểm định giả thuyết', description: 'Dùng dữ liệu để kiểm tra tuyên bố.', target: '[data-component="hypothesis-testing"]' },
        { title: 'Monte Carlo', description: 'Mô phỏng để giải quyết bài toán phức tạp.', target: '[data-component="monte-carlo"]' },
        { title: 'Survivorship Bias', description: 'Cẩn thận với những gì bạn KHÔNG thấy.', target: '[data-component="survivorship-bias"]' },
        { title: 'Master!', description: 'Bạn đã có nền tảng vững về xác suất thống kê!', target: null }
    ]
};

const quickTips = [
    { icon: '🎲', text: 'Xác suất từ 0 (không thể) đến 1 (chắc chắn)' },
    { icon: '🔢', text: 'P(A) + P(không A) = 1' },
    { icon: '⚡', text: 'Độc lập ≠ Xung khắc' },
    { icon: '📊', text: '68-95-99.7 rule cho phân phối chuẩn' },
    { icon: '🎰', text: 'Quá khứ không ảnh hưởng sự kiện độc lập' },
    { icon: '🧠', text: 'Luôn hỏi: "Tỷ lệ nền là bao nhiêu?"' }
];

const probabilityChecklist = [
    'Xác định không gian mẫu',
    'Kiểm tra sự kiện có độc lập không',
    'Tính xác suất đúng công thức',
    'Cân nhắc tỷ lệ nền (base rate)',
    'Tránh các ngụy biện phổ biến',
    'Hiểu ý nghĩa của kết quả',
    'Biết giới hạn của ước lượng',
    'Xác định sample size phù hợp'
];
