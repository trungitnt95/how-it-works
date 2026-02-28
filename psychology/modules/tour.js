// Tour and learning guide for Psychology
const tourSteps = {
    beginner: [
        { title: 'Chào mừng!', description: 'Tâm lý học giúp bạn hiểu chính mình và mọi người xung quanh.', target: null },
        { title: 'Tâm lý học là gì?', description: 'Khoa học nghiên cứu tâm trí và hành vi con người.', target: '[data-component="what-is-psychology"]' },
        { title: 'Cảm xúc', description: '6 cảm xúc cơ bản mà ai cũng có.', target: '[data-component="emotions"]' },
        { title: 'MBTI', description: '16 kiểu tính cách phổ biến nhất thế giới.', target: '[data-component="mbti"]' },
        { title: 'Ngôn ngữ cơ thể', description: 'Đọc hiểu người khác qua cử chỉ và ánh mắt.', target: '[data-component="body-language"]' },
        { title: 'Hoàn thành!', description: 'Bạn đã nắm được cơ bản. Hãy khám phá thêm!', target: null }
    ],
    intermediate: [
        { title: 'Lên cấp!', description: 'Bạn sẽ học sâu hơn về tâm lý con người.', target: null },
        { title: 'Big Five', description: 'Mô hình 5 yếu tố tính cách được khoa học công nhận.', target: '[data-component="big-five"]' },
        { title: 'Kiểu gắn bó', description: 'Hiểu cách bạn yêu và gắn kết với người khác.', target: '[data-component="attachment"]' },
        { title: 'Vi biểu cảm', description: 'Biểu cảm khuôn mặt 1/25 giây tiết lộ cảm xúc thật.', target: '[data-component="micro-expressions"]' },
        { title: 'Thuyết phục', description: '6 nguyên tắc Cialdini giúp bạn thuyết phục hiệu quả.', target: '[data-component="persuasion"]' },
        { title: 'EQ', description: 'Trí tuệ cảm xúc - chìa khóa thành công.', target: '[data-component="emotional-intelligence"]' },
        { title: 'Tiến bộ tốt!', description: 'Bạn đã hiểu sâu hơn về tâm lý học.', target: null }
    ],
    advanced: [
        { title: 'Nâng cao!', description: 'Khám phá mặt tối và ứng dụng chuyên sâu.', target: null },
        { title: 'Tâm lý ra quyết định', description: 'System 1 vs System 2 - Tại sao ta hay sai.', target: '[data-component="decision-psychology"]' },
        { title: 'Ảnh hưởng xã hội', description: 'Milgram, Asch, và sức mạnh của đám đông.', target: '[data-component="social-influence"]' },
        { title: 'Đàm phán', description: 'BATNA, Harvard method, và nghệ thuật đàm phán.', target: '[data-component="negotiation"]' },
        { title: 'Nhận diện thao túng', description: 'Gaslighting, love-bombing, và cách tự vệ.', target: '[data-component="manipulation-detect"]' },
        { title: 'Dark Psychology', description: 'Dark Triad - mặt tối của tính cách con người.', target: '[data-component="dark-psychology"]' },
        { title: 'Master!', description: 'Bạn đã có nền tảng vững về tâm lý học!', target: null }
    ]
};

const quickTips = [
    { icon: '🧠', text: 'Tâm lý học là khoa học, không phải bói toán hay đọc vị' },
    { icon: '🎭', text: 'Không ai thuần 1 kiểu tính cách - mọi người đều là sự pha trộn' },
    { icon: '👀', text: 'Đọc ngôn ngữ cơ thể theo cụm (cluster), không từng tín hiệu đơn lẻ' },
    { icon: '❤️', text: 'EQ quan trọng hơn IQ trong dự đoán thành công nghề nghiệp' },
    { icon: '🔄', text: 'Thói quen chiếm 40-45% hành vi hàng ngày của bạn' },
    { icon: '⚡', text: 'System 1 (nhanh) quyết định 95% - hãy kích hoạt System 2 khi cần' }
];

const psychologyChecklist = [
    'Hiểu 6 cảm xúc cơ bản và cách nhận biết',
    'Biết kiểu tính cách MBTI của mình',
    'Nhận biết kiểu gắn bó (attachment style) của mình',
    'Nắm vững kỹ thuật lắng nghe chủ động',
    'Hiểu các thiên kiến nhận thức phổ biến',
    'Biết cách quản lý stress cơ bản',
    'Nhận diện được các dấu hiệu thao túng tâm lý',
    'Thực hành reframing cho suy nghĩ tiêu cực'
];
