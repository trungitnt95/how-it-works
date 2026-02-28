// ==================== DECISION SCENARIOS MODULE ====================
// Các kịch bản thực tế để thực hành ra quyết định

const scenariosData = {
    career: {
        title: '💼 Quyết định nghề nghiệp',
        icon: '💼',
        scenarios: [
            {
                id: 'job-offer',
                title: 'Nên nhận việc mới không?',
                difficulty: 'beginner',
                situation: `
                    <p>Bạn đang làm việc ổn định với lương 20 triệu/tháng. Một công ty khác mời bạn với mức lương 28 triệu, nhưng:</p>
                    <ul>
                        <li>Phải đi xa hơn 30 phút</li>
                        <li>Công ty mới, chưa ổn định</li>
                        <li>Công nghệ mới, phải học lại</li>
                        <li>Nhưng có cơ hội thăng tiến tốt hơn</li>
                    </ul>
                `,
                options: [
                    { label: 'Nhận việc mới', value: 'accept' },
                    { label: 'Ở lại công việc cũ', value: 'stay' },
                    { label: 'Đàm phán thêm', value: 'negotiate' }
                ],
                analysis: {
                    accept: {
                        pros: ['Lương cao hơn 40%', 'Học kỹ năng mới', 'Cơ hội thăng tiến'],
                        cons: ['Rủi ro công ty mới', 'Đi xa hơn', 'Áp lực học lại'],
                        biases: ['Overconfidence - Có thể đánh giá thấp khó khăn của việc mới'],
                        recommendation: 'Nếu bạn trẻ (<35 tuổi) và không có nhiều ràng buộc, đây có thể là cơ hội tốt để phát triển.'
                    },
                    stay: {
                        pros: ['An toàn, ổn định', 'Đã quen công việc', 'Gần nhà'],
                        cons: ['Mất cơ hội tăng lương', 'Có thể hối tiếc', 'Ít thử thách'],
                        biases: ['Status Quo Bias - Có thể bạn đang sợ thay đổi?', 'Loss Aversion - Sợ mất điều đang có'],
                        recommendation: 'Chỉ nên ở lại nếu thực sự thấy công việc hiện tại phù hợp với mục tiêu dài hạn.'
                    },
                    negotiate: {
                        pros: ['Có thể được cả hai', 'Thể hiện giá trị', 'Không đốt cầu'],
                        cons: ['Mất thời gian', 'Có thể mất offer', 'Không chắc chắn'],
                        biases: [],
                        recommendation: 'Đây thường là lựa chọn thông minh - bạn có thể dùng offer để đàm phán với cả hai bên.'
                    }
                },
                toolsToUse: ['pros-cons', 'decision-matrix', 'ten-ten-ten', 'opportunity-cost'],
                lessons: [
                    'Đừng chỉ nhìn vào lương - xét tổng thể compensation và growth',
                    'Tính cả chi phí cơ hội của việc ở lại',
                    'Dùng 10/10/10 để có perspective dài hạn'
                ]
            },
            {
                id: 'startup-or-corporate',
                title: 'Startup hay tập đoàn lớn?',
                difficulty: 'intermediate',
                situation: `
                    <p>Vừa tốt nghiệp, bạn có 2 offer:</p>
                    <ul>
                        <li><strong>Startup:</strong> Lương 15 triệu + cổ phần, đội nhỏ 10 người, làm đa dạng việc</li>
                        <li><strong>Tập đoàn:</strong> Lương 22 triệu, quy trình rõ ràng, training bài bản</li>
                    </ul>
                `,
                options: [
                    { label: 'Chọn Startup', value: 'startup' },
                    { label: 'Chọn Tập đoàn', value: 'corporate' }
                ],
                analysis: {
                    startup: {
                        pros: ['Học nhanh', 'Tự do sáng tạo', 'Tiềm năng lớn nếu thành công', 'Network với founders'],
                        cons: ['Không ổn định', 'Lương thấp', 'Có thể phải làm nhiều giờ', '90% startup thất bại'],
                        biases: ['Optimism Bias - Có thể đánh giá cao xác suất thành công'],
                        recommendation: 'Phù hợp nếu bạn trẻ, không có nhiều ràng buộc tài chính, và muốn học nhanh.'
                    },
                    corporate: {
                        pros: ['Ổn định', 'Training tốt', 'CV đẹp', 'Work-life balance tốt hơn'],
                        cons: ['Có thể nhàm chán', 'Thăng tiến chậm', 'Ít tự do'],
                        biases: ['Status Quo Bias - Có thể chọn vì an toàn thay vì phù hợp'],
                        recommendation: 'Phù hợp nếu bạn muốn foundation vững chắc và đang học hỏi.'
                    }
                },
                toolsToUse: ['decision-matrix', 'ten-ten-ten', 'reversibility'],
                lessons: [
                    'Không có lựa chọn đúng/sai - phụ thuộc vào giai đoạn cuộc đời',
                    'Cả hai đều là "cửa hai chiều" - có thể thay đổi sau',
                    'Xem xét risk tolerance cá nhân'
                ]
            }
        ]
    },
    
    finance: {
        title: '💰 Quyết định tài chính',
        icon: '💰',
        scenarios: [
            {
                id: 'invest-or-save',
                title: 'Đầu tư hay để tiết kiệm?',
                difficulty: 'beginner',
                situation: `
                    <p>Bạn có 100 triệu dư và đang phân vân:</p>
                    <ul>
                        <li>Gửi tiết kiệm ngân hàng: 6%/năm, an toàn</li>
                        <li>Đầu tư chứng khoán: Có thể lãi 15-20%, nhưng cũng có thể mất 20-30%</li>
                        <li>Giữ tiền mặt: Phòng khi cần gấp</li>
                    </ul>
                `,
                options: [
                    { label: 'Tiết kiệm 100%', value: 'savings' },
                    { label: 'Đầu tư 100%', value: 'invest-all' },
                    { label: 'Chia đều 50-50', value: 'split' },
                    { label: 'Tiết kiệm khẩn cấp + Đầu tư phần còn lại', value: 'emergency-first' }
                ],
                analysis: {
                    savings: {
                        pros: ['An toàn 100%', 'Thanh khoản cao', 'Không stress'],
                        cons: ['Lạm phát ăn mòn', 'Mất cơ hội sinh lời', 'Tiền không làm việc cho bạn'],
                        biases: ['Loss Aversion - Sợ mất nên không dám đầu tư'],
                        recommendation: 'Chỉ phù hợp cho tiền cần dùng trong 1-2 năm tới.'
                    },
                    'invest-all': {
                        pros: ['Tiềm năng sinh lời cao', 'Tiền làm việc cho bạn'],
                        cons: ['Rủi ro mất tiền', 'Không có tiền khẩn cấp', 'Stress khi thị trường xuống'],
                        biases: ['Overconfidence - Có thể đánh giá thấp rủi ro'],
                        recommendation: 'Quá rủi ro nếu chưa có quỹ khẩn cấp.'
                    },
                    split: {
                        pros: ['Cân bằng rủi ro', 'Có cả an toàn và tăng trưởng'],
                        cons: ['Chưa tối ưu', 'Vẫn thiếu kế hoạch rõ ràng'],
                        biases: [],
                        recommendation: 'Tốt hơn, nhưng nên có kế hoạch cụ thể hơn.'
                    },
                    'emergency-first': {
                        pros: ['An tâm với quỹ khẩn cấp', 'Phần còn lại tăng trưởng', 'Chiến lược bài bản'],
                        cons: ['Cần kỷ luật', 'Mất thời gian xây dựng'],
                        biases: [],
                        recommendation: 'Đây là chiến lược được khuyên dùng: 3-6 tháng chi phí làm quỹ khẩn cấp, phần còn lại đầu tư dài hạn.'
                    }
                },
                toolsToUse: ['expected-value', 'opportunity-cost', 'reversibility'],
                lessons: [
                    'Luôn có quỹ khẩn cấp 3-6 tháng chi phí',
                    'Đa dạng hóa để giảm rủi ro',
                    'Đầu tư dài hạn, không đầu cơ ngắn hạn'
                ]
            },
            {
                id: 'buy-house-or-rent',
                title: 'Mua nhà hay thuê nhà?',
                difficulty: 'advanced',
                situation: `
                    <p>Bạn 30 tuổi, thu nhập 40 triệu/tháng, đang thuê nhà 10 triệu/tháng. Có 500 triệu tiết kiệm.</p>
                    <ul>
                        <li>Mua căn hộ 2 tỷ: Trả trước 500 triệu, vay 1.5 tỷ (lãi ~10%/năm, trả góp 25 triệu/tháng trong 10 năm)</li>
                        <li>Tiếp tục thuê: 10 triệu/tháng, đầu tư 500 triệu vào chứng khoán (~12%/năm)</li>
                    </ul>
                `,
                options: [
                    { label: 'Mua nhà', value: 'buy' },
                    { label: 'Tiếp tục thuê và đầu tư', value: 'rent-invest' }
                ],
                analysis: {
                    buy: {
                        pros: ['Tài sản của mình', 'Ổn định tâm lý', 'Bất động sản có thể tăng giá', 'Bắt buộc tiết kiệm'],
                        cons: ['Nợ lớn 10 năm', 'Ít linh hoạt', 'Chi phí bảo trì', 'Mất thanh khoản'],
                        biases: ['Status Quo Bias - "Ai cũng mua nhà"', 'Anchoring - So sánh với giá thuê hiện tại'],
                        recommendation: 'Phù hợp nếu bạn chắc chắn ở một chỗ 10+ năm và có thu nhập ổn định.'
                    },
                    'rent-invest': {
                        pros: ['Linh hoạt di chuyển', 'Tiền đầu tư có thể sinh lời cao hơn', 'Ít rủi ro nợ'],
                        cons: ['Không có tài sản cố định', 'Giá thuê có thể tăng', 'Cần kỷ luật đầu tư'],
                        biases: ['Overconfidence - Có thể đánh giá cao khả năng đầu tư'],
                        recommendation: 'Phù hợp nếu bạn còn trẻ, chưa chắc chắn về vị trí sống, hoặc có kỹ năng đầu tư tốt.'
                    }
                },
                toolsToUse: ['decision-matrix', 'expected-value', 'opportunity-cost', 'ten-ten-ten'],
                lessons: [
                    'Mua nhà không phải lúc nào cũng là đầu tư tốt nhất',
                    'Tính tổng chi phí thực (lãi vay, bảo trì, thuế...)',
                    'Xem xét lifestyle và mục tiêu dài hạn'
                ]
            }
        ]
    },

    relationships: {
        title: '❤️ Quyết định mối quan hệ',
        icon: '❤️',
        scenarios: [
            {
                id: 'end-relationship',
                title: 'Nên tiếp tục hay chia tay?',
                difficulty: 'advanced',
                situation: `
                    <p>Bạn đã yêu 3 năm, nhưng gần đây có nhiều vấn đề:</p>
                    <ul>
                        <li>Mục tiêu cuộc sống khác nhau</li>
                        <li>Hay cãi nhau về các vấn đề nhỏ</li>
                        <li>Vẫn còn tình cảm</li>
                        <li>Gia đình hai bên đã quen biết</li>
                    </ul>
                `,
                options: [
                    { label: 'Tiếp tục và cố gắng', value: 'stay' },
                    { label: 'Chia tay', value: 'breakup' },
                    { label: 'Tạm nghỉ để suy nghĩ', value: 'break' }
                ],
                analysis: {
                    stay: {
                        pros: ['Không mất đi 3 năm', 'Có thể thay đổi', 'Không phải bắt đầu lại'],
                        cons: ['Có thể tiếp tục không hạnh phúc', 'Mất thêm thời gian', 'Vấn đề core không đổi'],
                        biases: ['Sunk Cost Fallacy - "Đã yêu 3 năm rồi"', 'Status Quo Bias - Sợ thay đổi'],
                        recommendation: 'Chỉ nên tiếp tục nếu CẢ HAI cam kết thay đổi và có kế hoạch cụ thể.'
                    },
                    breakup: {
                        pros: ['Giải phóng cho cả hai', 'Cơ hội tìm người phù hợp hơn', 'Trung thực với bản thân'],
                        cons: ['Đau khổ ngắn hạn', 'Mất thời gian để hồi phục', 'Không chắc sẽ tốt hơn'],
                        biases: ['Availability Heuristic - Có thể bị ảnh hưởng bởi cãi vã gần đây'],
                        recommendation: 'Nếu mục tiêu cuộc sống khác nhau fundamentally, chia tay sớm tốt hơn chia tay muộn.'
                    },
                    break: {
                        pros: ['Có thời gian suy nghĩ', 'Không quyết định vội', 'Thấy rõ cảm giác khi xa nhau'],
                        cons: ['Không giải quyết vấn đề', 'Có thể kéo dài đau khổ', 'Mập mờ'],
                        biases: ['Analysis Paralysis - Trì hoãn quyết định khó'],
                        recommendation: 'Có thể hữu ích, nhưng cần có thời hạn rõ ràng (1-3 tháng) và mục tiêu cụ thể.'
                    }
                },
                toolsToUse: ['ten-ten-ten', 'premortem', 'reversibility'],
                lessons: [
                    'Sunk cost fallacy: 3 năm đã qua không nên ảnh hưởng quyết định tương lai',
                    'Hỏi: "Nếu bắt đầu lại, tôi có chọn người này không?"',
                    'Quyết định mối quan hệ nên dựa trên compatibility và happiness, không phải thời gian đã đầu tư'
                ]
            }
        ]
    },

    daily: {
        title: '🌅 Quyết định hàng ngày',
        icon: '🌅',
        scenarios: [
            {
                id: 'buy-expensive-item',
                title: 'Có nên mua món đồ đắt tiền?',
                difficulty: 'beginner',
                situation: `
                    <p>Bạn thấy một chiếc laptop mới giá 30 triệu, laptop hiện tại vẫn chạy được nhưng hơi chậm.</p>
                    <ul>
                        <li>Laptop mới nhanh hơn 50%</li>
                        <li>Laptop cũ vẫn dùng được 1-2 năm nữa</li>
                        <li>Bạn có đủ tiền nhưng sẽ ảnh hưởng quỹ tiết kiệm</li>
                    </ul>
                `,
                options: [
                    { label: 'Mua ngay', value: 'buy-now' },
                    { label: 'Đợi thêm', value: 'wait' },
                    { label: 'Mua loại rẻ hơn', value: 'buy-cheaper' }
                ],
                analysis: {
                    'buy-now': {
                        pros: ['Có ngay máy mới', 'Năng suất cao hơn', 'Công nghệ mới nhất'],
                        cons: ['Ảnh hưởng tiết kiệm', 'Máy cũ vẫn dùng được', 'Có thể là want, không phải need'],
                        biases: ['Instant Gratification - Muốn có ngay', 'Lifestyle Inflation'],
                        recommendation: 'Chỉ nên mua nếu laptop chậm thực sự ảnh hưởng đến thu nhập (làm việc).'
                    },
                    wait: {
                        pros: ['Tiết kiệm tiền', 'Giá có thể giảm', 'Có thời gian suy nghĩ'],
                        cons: ['Tiếp tục dùng máy chậm', 'Có thể hết hàng'],
                        biases: [],
                        recommendation: 'Dùng quy tắc 48h hoặc 30 ngày: nếu vẫn muốn sau thời gian đó, có thể mua.'
                    },
                    'buy-cheaper': {
                        pros: ['Tiết kiệm tiền', 'Vẫn được nâng cấp', 'Cân bằng giữa want và need'],
                        cons: ['Có thể không đủ tốt', 'Có thể phải thay sớm hơn'],
                        biases: [],
                        recommendation: 'Xác định nhu cầu thực sự, chọn sản phẩm đáp ứng 80% nhu cầu với 50% giá.'
                    }
                },
                toolsToUse: ['pros-cons', 'opportunity-cost', 'ten-ten-ten'],
                lessons: [
                    'Phân biệt "want" và "need"',
                    'Quy tắc 48h/30 ngày cho mua sắm lớn',
                    'Tính chi phí cơ hội của việc không tiết kiệm'
                ]
            }
        ]
    }
};

// Function to get all scenarios as flat array
function getAllScenarios() {
    const allScenarios = [];
    Object.keys(scenariosData).forEach(category => {
        scenariosData[category].scenarios.forEach(scenario => {
            allScenarios.push({
                ...scenario,
                category: category,
                categoryTitle: scenariosData[category].title
            });
        });
    });
    return allScenarios;
}

// Function to get scenario by ID
function getScenarioById(id) {
    for (const category of Object.values(scenariosData)) {
        const scenario = category.scenarios.find(s => s.id === id);
        if (scenario) return scenario;
    }
    return null;
}
