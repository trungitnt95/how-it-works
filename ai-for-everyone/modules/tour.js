// Tour and learning guide for AI for Everyone
const tourSteps = {
    beginner: [
        { title: 'Chào mừng!', description: 'Khám phá thế giới AI - từ cơ bản đến thực hành!', target: null },
        { title: 'AI Là Gì?', description: 'Bắt đầu với khái niệm cơ bản: AI là trí tuệ nhân tạo.', target: '[data-component="what-is-ai"]' },
        { title: 'Prompting Cơ Bản', description: 'Học cách "nói chuyện" với AI hiệu quả.', target: '[data-component="basic-prompting"]' },
        { title: 'Kiểm Tra Thông Tin', description: 'Luôn verify thông tin AI đưa ra.', target: '[data-component="fact-checking"]' },
        { title: 'Free Tier', description: 'Tận dụng các dịch vụ AI miễn phí.', target: '[data-component="free-tiers"]' },
        { title: 'Hoàn thành!', description: 'Bạn đã nắm được cơ bản. Hãy thực hành thêm!', target: null }
    ],
    intermediate: [
        { title: 'Lên cấp!', description: 'Học các kỹ thuật sử dụng AI hiệu quả hơn.', target: null },
        { title: 'Chain of Thought', description: 'Yêu cầu AI suy nghĩ từng bước.', target: '[data-component="chain-of-thought"]' },
        { title: 'Context Window', description: 'Hiểu giới hạn bộ nhớ của AI.', target: '[data-component="context-window"]' },
        { title: 'Multi Account', description: 'Chiến lược quản lý nhiều tài khoản AI.', target: '[data-component="multi-account-strategy"]' },
        { title: 'AI Workflow', description: 'Tự động hóa công việc với AI.', target: '[data-component="ai-workflow"]' },
        { title: 'Open Source AI', description: 'AI miễn phí, tự do sử dụng.', target: '[data-component="open-source-ai"]' },
        { title: 'Tiến bộ tốt!', description: 'Bạn đã biết cách dùng AI hiệu quả.', target: null }
    ],
    advanced: [
        { title: 'Nâng cao!', description: 'Trở thành power user AI.', target: null },
        { title: 'Advanced Prompting', description: 'Kỹ thuật prompt chuyên sâu.', target: '[data-component="advanced-prompting"]' },
        { title: 'API Integration', description: 'Tích hợp AI vào ứng dụng.', target: '[data-component="api-integration"]' },
        { title: 'Local LLM', description: 'Chạy AI trên máy cá nhân.', target: '[data-component="local-llm"]' },
        { title: 'AI Agents', description: 'AI tự lập kế hoạch và hành động.', target: '[data-component="ai-agents"]' },
        { title: 'Fine-tuning', description: 'Huấn luyện AI theo nhu cầu riêng.', target: '[data-component="fine-tuning"]' },
        { title: 'Master!', description: 'Bạn đã sẵn sàng tận dụng AI tối đa!', target: null }
    ]
};

const quickTips = [
    { icon: '🎯', text: 'Prompt càng cụ thể, kết quả càng tốt' },
    { icon: '🔍', text: 'Luôn kiểm tra lại thông tin từ AI' },
    { icon: '🆓', text: 'Hầu hết AI đều có bản miễn phí' },
    { icon: '🔄', text: 'Thử nhiều AI khác nhau cho cùng 1 việc' },
    { icon: '📝', text: 'Lưu lại những prompt hay để dùng lại' },
    { icon: '🤖', text: 'AI là trợ lý, không phải chuyên gia tuyệt đối' }
];

const aiChecklist = [
    'Hiểu AI là gì và cách hoạt động',
    'Tạo tài khoản ChatGPT và Claude',
    'Viết được prompt cơ bản hiệu quả',
    'Biết cách dùng Role Prompting',
    'Kiểm tra thông tin AI trả về',
    'Tận dụng free tier của ít nhất 3 dịch vụ',
    'Thử Chain of Thought prompting',
    'Setup browser profiles cho multi-account',
    'Tạo 1 AI workflow tự động',
    'Thử ít nhất 1 AI coding tool'
];
