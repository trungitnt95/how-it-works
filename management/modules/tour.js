// Tour and learning guide for Management
const tourSteps = {
    beginner: [
        { title: 'Chào mừng!', description: 'Quản lý là kỹ năng giúp bạn dẫn dắt đội ngũ và đạt mục tiêu hiệu quả.', target: null },
        { title: 'Quản lý là gì?', description: 'Bắt đầu với khái niệm cơ bản: Lập kế hoạch, Tổ chức, Lãnh đạo, Kiểm soát.', target: '[data-component="what-is-management"]' },
        { title: 'Phong cách quản lý', description: 'Mỗi tình huống cần phong cách khác nhau. Không có phong cách nào hoàn hảo.', target: '[data-component="management-styles"]' },
        { title: 'Giao tiếp hiệu quả', description: 'Kỹ năng quan trọng nhất: Lắng nghe chủ động và truyền đạt rõ ràng.', target: '[data-component="communication"]' },
        { title: 'Xây dựng nhóm', description: 'Mọi nhóm đều trải qua 4 giai đoạn: Hình thành, Xung đột, Chuẩn hóa, Hoạt động.', target: '[data-component="team-building"]' },
        { title: 'Hoàn thành!', description: 'Bạn đã nắm được cơ bản về quản lý. Hãy khám phá thêm!', target: null }
    ],
    intermediate: [
        { title: 'Lên cấp!', description: 'Bạn sẽ học các kỹ năng quản lý quan trọng hơn.', target: null },
        { title: 'Ra quyết định', description: 'Phương pháp ra quyết định hiệu quả và tránh bẫy tâm lý.', target: '[data-component="decision-making"]' },
        { title: 'Trí tuệ cảm xúc', description: 'EQ chiếm 58% hiệu suất công việc. Hãy phát triển nó!', target: '[data-component="emotional-intelligence"]' },
        { title: 'OKR', description: 'Framework đặt mục tiêu mạnh mẽ: Objectives and Key Results.', target: '[data-component="okr"]' },
        { title: 'Quản lý rủi ro', description: 'Nhận diện, đánh giá và lên kế hoạch ứng phó với rủi ro.', target: '[data-component="risk-management"]' },
        { title: 'Tạo động lực', description: 'Hiểu lý thuyết Maslow, Herzberg và Daniel Pink để tạo động lực bền vững.', target: '[data-component="motivation"]' },
        { title: 'Tiến bộ tốt!', description: 'Bạn đã hiểu sâu hơn về quản lý hiệu quả.', target: null }
    ],
    advanced: [
        { title: 'Nâng cao!', description: 'Chiến lược và tư duy lãnh đạo ở cấp độ cao.', target: null },
        { title: 'Tư duy chiến lược', description: 'Porter\'s Five Forces, Blue Ocean Strategy và First Principles Thinking.', target: '[data-component="strategic-thinking"]' },
        { title: 'Quản lý thay đổi', description: '8 bước Kotter để dẫn dắt tổ chức qua thay đổi.', target: '[data-component="change-management"]' },
        { title: 'Đổi mới & Sáng tạo', description: 'Design Thinking, Lean Startup và xây dựng văn hóa đổi mới.', target: '[data-component="innovation"]' },
        { title: 'Mở rộng quy mô', description: 'Scaling từ startup đến doanh nghiệp: Quy trình, Văn hóa, Hệ thống.', target: '[data-component="scaling"]' },
        { title: 'Văn hóa nhóm', description: 'Văn hóa ăn chiến lược vào bữa sáng. Xây dựng văn hóa bền vững.', target: '[data-component="team-culture"]' },
        { title: 'Master!', description: 'Bạn đã có nền tảng vững chắc về quản lý và lãnh đạo!', target: null }
    ]
};

const quickTips = [
    { icon: '📋', text: 'Quản lý = Lập kế hoạch + Tổ chức + Lãnh đạo + Kiểm soát' },
    { icon: '🗣️', text: 'Lắng nghe nhiều hơn nói. 80% giao tiếp là lắng nghe' },
    { icon: '🎯', text: 'Mục tiêu SMART: Specific, Measurable, Achievable, Relevant, Time-bound' },
    { icon: '🤝', text: 'Ủy quyền không phải bỏ mặc. Giao việc + Hỗ trợ + Theo dõi' },
    { icon: '❤️', text: 'EQ quan trọng hơn IQ trong quản lý' },
    { icon: '🔄', text: 'Không có phong cách quản lý tốt nhất, chỉ có phong cách phù hợp nhất' }
];

const managementChecklist = [
    'Hiểu 4 chức năng quản lý cơ bản',
    'Biết các phong cách quản lý và khi nào dùng',
    'Đặt được mục tiêu SMART',
    'Thực hành lắng nghe chủ động',
    'Biết cách ủy quyền hiệu quả',
    'Hiểu cách giải quyết xung đột',
    'Sử dụng ít nhất 1 framework (OKR/KPI/SWOT)',
    'Tạo được 1-on-1 routine với team'
];
