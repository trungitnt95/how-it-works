// Tour for Problem Solving
const tourSteps = {
    beginner: [
        { title: 'Chào mừng!', description: 'Problem solving là kỹ năng quan trọng nhất. Hãy bắt đầu!', target: null },
        { title: 'Định nghĩa vấn đề', description: 'Bước đầu tiên: Hiểu rõ vấn đề là gì.', target: '[data-component="define-problem"]' },
        { title: '5 Whys', description: 'Hỏi "Tại sao?" liên tục để tìm nguyên nhân gốc.', target: '[data-component="5-whys"]' },
        { title: 'Brainstorming', description: 'Tạo nhiều ý tưởng trước, đánh giá sau.', target: '[data-component="brainstorming"]' },
        { title: 'Pareto 80/20', description: '20% effort → 80% result. Focus vào những gì quan trọng.', target: '[data-component="pareto"]' },
        { title: 'Jumping to Solutions', description: 'Bẫy phổ biến: Giải quyết trước khi hiểu!', target: '[data-component="jumping-solutions"]' },
        { title: 'Hoàn thành!', description: 'Bạn đã có nền tảng. Hãy thực hành!', target: null }
    ],
    intermediate: [
        { title: 'Lên cấp!', description: 'Học các frameworks và mental models mạnh mẽ hơn.', target: null },
        { title: 'Root Cause Analysis', description: 'Đào sâu tìm nguyên nhân thực sự.', target: '[data-component="root-cause"]' },
        { title: 'Fishbone Diagram', description: 'Phân tích nhiều nhóm nguyên nhân cùng lúc.', target: '[data-component="fishbone"]' },
        { title: 'Design Thinking', description: 'Quy trình sáng tạo lấy người dùng làm trung tâm.', target: '[data-component="design-thinking"]' },
        { title: 'Inversion', description: '"Làm sao để thất bại?" → Tránh những điều đó.', target: '[data-component="inversion"]' },
        { title: 'Six Hats', description: '6 góc nhìn để phân tích toàn diện.', target: '[data-component="six-hats"]' },
        { title: 'Tốt lắm!', description: 'Bạn có nhiều công cụ hơn rồi!', target: null }
    ],
    advanced: [
        { title: 'Master level!', description: 'Tư duy hệ thống và mental models nâng cao.', target: null },
        { title: 'First Principles', description: 'Phân tích từ nguyên lý cơ bản nhất.', target: '[data-component="first-principles"]' },
        { title: 'Systems Thinking', description: 'Nhìn vấn đề như một hệ thống phức tạp.', target: '[data-component="systems-thinking"]' },
        { title: 'Second-Order Thinking', description: 'Hậu quả của hậu quả là gì?', target: '[data-component="second-order"]' },
        { title: 'Feedback Loops', description: 'Hiểu vòng phản hồi trong hệ thống.', target: '[data-component="feedback-loops"]' },
        { title: 'Master!', description: 'Bạn đã có toolkit hoàn chỉnh!', target: null }
    ]
};

const quickTips = [
    { icon: '🎯', text: 'Định nghĩa vấn đề trước khi giải quyết' },
    { icon: '❓', text: 'Hỏi "Tại sao?" ít nhất 5 lần' },
    { icon: '📊', text: '80% kết quả từ 20% effort' },
    { icon: '🔄', text: 'Nghĩ ngược: Làm sao để thất bại?' },
    { icon: '✂️', text: 'Chia vấn đề lớn thành nhỏ' },
    { icon: '🧠', text: 'Quantity before quality khi brainstorm' }
];

const problemSolvingChecklist = [
    'Đã định nghĩa vấn đề rõ ràng chưa?',
    'Đã tìm root cause chưa? (5 Whys)',
    'Có bằng chứng/data không?',
    'Đã xem xét nhiều góc nhìn chưa?',
    'Giải pháp có giải quyết root cause?',
    'Hậu quả bậc 2, bậc 3 là gì?',
    'Có thể test/prototype không?',
    'Criteria đánh giá thành công?'
];
