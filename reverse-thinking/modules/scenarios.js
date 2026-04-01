// ==================== SCENARIOS MODULE ====================
// Các kịch bản thực hành tư duy ngược

const scenariosData = {
    personal: {
        title: '🧑 Cuộc sống cá nhân',
        icon: '🧑',
        scenarios: [
            {
                id: 'new-year-resolutions',
                title: 'Giữ cam kết năm mới',
                difficulty: 'beginner',
                situation: `
                    <p>Bạn muốn giữ được resolution năm mới: tập gym, đọc sách, tiết kiệm tiền. Mỗi năm đều thất bại.</p>
                `,
                options: [
                    { label: 'Thêm động lực, tìm partner', value: 'add-motivation' },
                    { label: 'Dùng tư duy ngược: liệt kê cách thất bại', value: 'inversion' },
                    { label: 'Đặt mục tiêu nhỏ hơn', value: 'smaller-goals' }
                ],
                analysis: {
                    'add-motivation': {
                        pros: ['Có accountability partner', 'Thêm nguồn năng lượng'],
                        cons: ['Motivation không bền vững', 'Phụ thuộc người khác'],
                        biases: ['Optimism bias - Tin motivation sẽ kéo dài'],
                        recommendation: 'Motivation giúp bắt đầu, nhưng không giúp duy trì.'
                    },
                    'inversion': {
                        pros: ['Tìm ra rào cản THỰC SỰ', 'Thiết kế hệ thống tránh thất bại', 'Bền vững'],
                        cons: ['Cần tư duy sâu', 'Có thể mất thời gian phân tích'],
                        biases: [],
                        recommendation: 'Cách tốt nhất! Hỏi: "Làm sao để CHẮC CHẮN bỏ gym?" → Đăng ký gym xa nhà, không chuẩn bị đồ, không có lịch cố định → Tránh hết!'
                    },
                    'smaller-goals': {
                        pros: ['Dễ bắt đầu', 'Ít áp lực'],
                        cons: ['Có thể quá nhỏ, không tạo impact', 'Vẫn có thể bỏ'],
                        biases: ['Thiếu ambition có thể dẫn đến kết quả tầm thường'],
                        recommendation: 'Kết hợp mục tiêu nhỏ VỚI tư duy ngược để hiệu quả tối đa.'
                    }
                },
                toolsToUse: ['what-is-inversion', 'anti-goals', 'avoid-failure'],
                lessons: [
                    'Hỏi "Làm sao để CHẮC CHẮN thất bại?" rồi tránh',
                    'Thiết kế môi trường (environment design) > Ý chí',
                    'Bỏ rào cản quan trọng hơn thêm động lực'
                ]
            }
        ]
    },
    
    career: {
        title: '💼 Sự nghiệp',
        icon: '💼',
        scenarios: [
            {
                id: 'project-launch',
                title: 'Chuẩn bị ra mắt dự án quan trọng',
                difficulty: 'intermediate',
                situation: `
                    <p>Team bạn chuẩn bị launch sản phẩm mới trong 3 tháng. CEO rất kỳ vọng.</p>
                `,
                options: [
                    { label: 'Tập trung planning chi tiết', value: 'detailed-plan' },
                    { label: 'Làm Pre-Mortem trước', value: 'pre-mortem' },
                    { label: 'Agile - làm nhanh, sửa sau', value: 'agile' }
                ],
                analysis: {
                    'detailed-plan': {
                        pros: ['Có roadmap rõ ràng', 'Mọi người biết việc'],
                        cons: ['Planning fallacy - lạc quan quá', 'Không dự phòng rủi ro', 'Plan vs Reality gap'],
                        biases: ['Planning fallacy', 'Overconfidence'],
                        recommendation: 'Plan chi tiết tốt nhưng thiếu risk mitigation.'
                    },
                    'pre-mortem': {
                        pros: ['Phát hiện rủi ro sớm', 'Team aligned on risks', 'Có kế hoạch B', 'Tăng confidence thực sự'],
                        cons: ['Mất 1-2 ngày nhưng tiết kiệm weeks'],
                        biases: [],
                        recommendation: 'Kết hợp Pre-Mortem VỚI planning = combo mạnh nhất!'
                    },
                    'agile': {
                        pros: ['Linh hoạt', 'Ship nhanh', 'Learn from users'],
                        cons: ['Có thể ship lỗi lớn', 'CEO không vui nếu launch fail', 'Reactive thay vì proactive'],
                        biases: ['Survivorship bias - Chỉ thấy startup agile thành công'],
                        recommendation: 'Agile tốt nhưng cần Pre-Mortem cho milestone lớn.'
                    }
                },
                toolsToUse: ['pre-mortem', 'failure-mapping', 'risk-inversion'],
                lessons: [
                    'Pre-Mortem trước launch = bảo hiểm miễn phí',
                    'Tìm 10 cách project có thể fail → Plan cho top 3',
                    '"What could go wrong?" là câu hỏi mạnh nhất'
                ]
            }
        ]
    },

    finance: {
        title: '💰 Tài chính',
        icon: '💰',
        scenarios: [
            {
                id: 'investment-decision',
                title: 'Quyết định đầu tư lớn',
                difficulty: 'intermediate',
                situation: `
                    <p>Bạn có 500 triệu và đang xem xét đầu tư vào bất động sản. Môi giới nói "cơ hội nghìn năm có một".</p>
                `,
                options: [
                    { label: 'Tin môi giới, mua ngay', value: 'buy-now' },
                    { label: 'Dùng tư duy ngược: tìm lý do KHÔNG nên mua', value: 'inversion' },
                    { label: 'Chờ thêm thông tin', value: 'wait' }
                ],
                analysis: {
                    'buy-now': {
                        pros: ['Không bỏ lỡ nếu thật sự tốt'],
                        cons: ['FOMO-driven', 'Không phân tích kỹ', 'Conflict of interest - môi giới muốn bạn mua'],
                        biases: ['FOMO', 'Authority bias', 'Scarcity bias'],
                        recommendation: 'Rất nguy hiểm! "Cơ hội nghìn năm" = Red flag kinh điển.'
                    },
                    'inversion': {
                        pros: ['Tìm ra rủi ro ẩn', 'Quyết định sáng suốt', 'Tránh regret'],
                        cons: ['Có thể bỏ lỡ nếu over-analyze'],
                        biases: [],
                        recommendation: 'Hỏi: "Tại sao deal này CÓ THỂ LÀ TỆ?" → Pháp lý? Thanh khoản? Giá ảo? → Nếu qua hết filter = đáng mua.'
                    },
                    'wait': {
                        pros: ['Thêm thời gian suy nghĩ', 'Có thể tìm deal tốt hơn'],
                        cons: ['Nếu tốt thật thì mất cơ hội', 'Analysis paralysis'],
                        biases: ['Status quo bias'],
                        recommendation: 'Chờ tốt hơn vội, nhưng cần có deadline cho quyết định.'
                    }
                },
                toolsToUse: ['inversion-investing', 'worst-case', 'fear-setting'],
                lessons: [
                    'Khi ai đó nói "cơ hội nghìn năm" → Dùng tư duy ngược ngay',
                    'Luôn hỏi: "Tại sao người BÁN muốn bán?"',
                    'Margin of Safety: Chỉ mua khi giá < 70% giá trị thực'
                ]
            }
        ]
    }
};

// Checklist tư duy ngược
const inversionChecklist = [
    '🔄 Tôi đã hỏi "Điều gì có thể đi sai?" chưa?',
    '💀 Tôi đã làm Pre-Mortem chưa? (Tưởng tượng dự án đã thất bại)',
    '🚫 Tôi đã viết Anti-Goals chưa? (Những gì KHÔNG muốn)',
    '😱 Tôi đã làm Fear Setting chưa? (Define-Prevent-Repair)',
    '⚡ Tôi đã xem xét Worst Case chưa? (Tệ nhất là gì?)',
    '➖ Tôi có thể BỎ BỚT gì thay vì thêm vào?',
    '🗺️ Tôi đã map hết các cách thất bại chưa?',
    '🎯 Tôi đã "đóng vai đối thủ" để tìm điểm yếu chưa?',
    '🔗 Tôi đã nghĩ đến hệ quả bậc 2, bậc 3 chưa?',
    '🛡️ Tôi đã có Margin of Safety chưa? (Buffer cho sai lầm)',
    '👴 Charlie Munger sẽ hỏi gì về quyết định này?',
    '📊 Expected value có dương không khi tính CẢ worst case?'
];

// Quick tips
const quickTips = [
    { icon: '🔄', text: 'Mỗi khi đặt mục tiêu, hãy viết thêm "Anti-Goal" bên cạnh' },
    { icon: '💀', text: 'Trước mọi dự án lớn, dành 30 phút làm Pre-Mortem' },
    { icon: '❌', text: 'Mỗi tuần, hỏi: "Tuần này tôi đã TRÁNH được gì?"' },
    { icon: '📝', text: 'Viết nhật ký "Near Misses" - những lần SUÝT thất bại' },
    { icon: '🎯', text: '"Nói cho tôi tôi sẽ chết ở đâu, để tôi không đến đó" — Munger' },
    { icon: '➖', text: 'Trước khi thêm gì, hỏi: "Bỏ bớt gì có hiệu quả hơn?"' }
];
