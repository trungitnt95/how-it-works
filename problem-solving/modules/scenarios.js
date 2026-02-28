// Problem Solving Scenarios
const problemSolvingScenarios = {
    work: [
        {
            id: 'team-productivity',
            title: 'Năng suất đội giảm sút',
            situation: 'Đội bạn 6 người, 3 tháng gần đây năng suất giảm 30%. Deadline liên tục trễ. Bạn là team lead.',
            options: ['Làm việc overtime', 'Thuê thêm người', 'Phân tích nguyên nhân gốc'],
            analysis: [
                { pros: ['Nhanh, trực tiếp'], cons: ['Không bền vững, burnout'], recommendation: 'Chỉ là symptom treatment' },
                { pros: ['Thêm nguồn lực'], cons: ['Tốn tiền, mất thời gian onboard'], recommendation: 'Có thể không giải quyết root cause' },
                { pros: ['Giải quyết tận gốc'], cons: ['Mất thời gian ban đầu'], recommendation: 'Nên làm: Dùng 5 Whys, Fishbone' }
            ],
            toolsToUse: ['5-whys', 'root-cause', 'fishbone'],
            lessons: ['Không nhảy vào solution ngay', 'Tìm root cause trước', 'Data-driven decision']
        },
        {
            id: 'customer-complaints',
            title: 'Khiếu nại khách hàng tăng đột biến',
            situation: 'Khiếu nại tăng 200% trong tháng. CS team overwhelmed. Bạn cần đưa ra action plan.',
            options: ['Tăng nhân sự CS', 'Tạo FAQ/Chatbot', 'Phân tích pattern khiếu nại'],
            analysis: [
                { pros: ['Xử lý được backlog'], cons: ['Chi phí cao, không bền vững'], recommendation: 'Short-term fix' },
                { pros: ['Scalable, 24/7'], cons: ['Mất thời gian build, có thể làm khách bực hơn'], recommendation: 'Medium-term solution' },
                { pros: ['Tìm được root cause'], cons: ['Cần data, thời gian'], recommendation: 'Best approach: Pareto analysis' }
            ],
            toolsToUse: ['pareto', 'root-cause', 'define-problem'],
            lessons: ['80/20: 20% vấn đề gây 80% complaints', 'Fix upstream problem', 'Measure before/after']
        }
    ],
    personal: [
        {
            id: 'career-change',
            title: 'Muốn đổi nghề',
            situation: 'Làm kế toán 5 năm, muốn chuyển sang tech. Có gia đình, lương không thể giảm nhiều.',
            options: ['Nghỉ việc học full-time', 'Học part-time, giữ việc', 'Tìm role chuyển tiếp'],
            analysis: [
                { pros: ['Tập trung 100%'], cons: ['Rủi ro tài chính cao'], recommendation: 'Risky với gia đình' },
                { pros: ['An toàn tài chính'], cons: ['Chậm, mệt'], recommendation: 'Safe nhưng cần discipline' },
                { pros: ['Leverage kỹ năng cũ'], cons: ['Giới hạn lựa chọn'], recommendation: 'Best: Kế toán → Fintech, Data' }
            ],
            toolsToUse: ['define-problem', 'second-order', 'circle-competence'],
            lessons: ['Define rõ: Muốn gì từ tech?', 'Leverage strengths', 'Second-order: Hậu quả dài hạn']
        }
    ],
    technical: [
        {
            id: 'system-slow',
            title: 'Hệ thống chậm',
            situation: 'Website load 8 giây (target 2 giây). Khách phàn nàn, conversion giảm. Bạn là tech lead.',
            options: ['Upgrade server', 'Optimize code', 'Profile và phân tích'],
            analysis: [
                { pros: ['Nhanh implement'], cons: ['Tốn tiền, có thể không giải quyết'], recommendation: 'Throwing money at problem' },
                { pros: ['Free/cheap'], cons: ['Optimize cái gì? Cần biết bottleneck'], recommendation: 'Cần data trước' },
                { pros: ['Data-driven'], cons: ['Mất thời gian ban đầu'], recommendation: 'Best: Profile first, optimize later' }
            ],
            toolsToUse: ['root-cause', 'pareto', 'divide-conquer'],
            lessons: ['Measure before optimize', '80/20: Tìm bottleneck lớn nhất', 'Divide: Frontend vs Backend vs DB']
        }
    ]
};

function getAllPSScenarios() {
    return Object.values(problemSolvingScenarios).flat();
}

function getPSScenarioById(id) {
    return getAllPSScenarios().find(s => s.id === id);
}
