// Game Theory - shared catalog, tour, and simulator presets

const gameTheoryCategories = [
    {
        id: 'foundations',
        icon: '🧱',
        title: 'Nền Tảng',
        description: 'Người chơi, chiến lược, payoff, thông tin, dạng biểu diễn và giả định lý trí.'
    },
    {
        id: 'classic-games',
        icon: '🎲',
        title: 'Trò Chơi Kinh Điển',
        description: 'Những mô hình mẫu giúp nhận diện xung đột, hợp tác và phối hợp trong thực tế.'
    },
    {
        id: 'equilibria',
        icon: '⚖️',
        title: 'Cân Bằng & Lời Giải',
        description: 'Nash, Pareto, chiến lược hỗn hợp, subgame perfect, Bayesian và tiến hóa.'
    },
    {
        id: 'strategies',
        icon: '♟️',
        title: 'Chiến Lược & Cơ Chế',
        description: 'Cam kết, tín hiệu, đấu giá, mặc cả, trò chơi lặp lại và thiết kế luật chơi.'
    },
    {
        id: 'applications',
        icon: '🌐',
        title: 'Ứng Dụng',
        description: 'Kinh doanh, đàm phán, chính sách công, an ninh mạng, tài chính, AI và đời sống.'
    },
    {
        id: 'cases',
        icon: '🔍',
        title: 'Case Study',
        description: 'Các tình huống thực tế để luyện cách dựng trò chơi và chọn chiến lược.'
    }
];

const quickTips = [
    {
        icon: '🎯',
        text: 'Luôn hỏi: ai là người chơi, họ có lựa chọn nào, họ biết gì, và họ muốn tối đa hóa điều gì?'
    },
    {
        icon: '🧮',
        text: 'Đừng chỉ nhìn payoff của mình. Hãy nhìn payoff của người kia để đoán phản ứng của họ.'
    },
    {
        icon: '🔁',
        text: 'Một trò chơi chơi một lần rất khác trò chơi lặp lại. Tương lai làm hợp tác dễ xuất hiện hơn.'
    },
    {
        icon: '🧩',
        text: 'Nếu kết quả xấu cứ lặp lại, thường vấn đề không nằm ở đạo đức cá nhân mà ở luật chơi và incentives.'
    }
];

const tourSteps = {
    beginner: [
        {
            target: '[data-component="what-is-game-theory"]',
            title: 'Bắt đầu từ định nghĩa',
            description: 'Lý thuyết trò chơi không chỉ nói về game giải trí, mà nói về mọi tình huống chiến lược có nhiều người ra quyết định.'
        },
        {
            target: '[data-component="players-strategies-payoffs"]',
            title: 'Nhìn đủ ba mảnh',
            description: 'Một trò chơi tối thiểu cần người chơi, lựa chọn chiến lược và payoff cho từng kết quả.'
        },
        {
            target: '[data-component="prisoners-dilemma"]',
            title: 'Học từ song đề tù nhân',
            description: 'Đây là ví dụ nền tảng cho việc lợi ích cá nhân có thể kéo cả nhóm đến kết quả xấu.'
        },
        {
            target: '[data-component="dominant-dominated"]',
            title: 'Loại chiến lược yếu',
            description: 'Nếu một chiến lược luôn tệ hơn chiến lược khác, hãy loại nó trước khi phân tích sâu.'
        }
    ],
    intermediate: [
        {
            target: '[data-component="nash-equilibrium"]',
            title: 'Tìm cân bằng Nash',
            description: 'Cân bằng Nash là nơi không ai muốn đổi chiến lược một mình khi đã biết lựa chọn của người khác.'
        },
        {
            target: '[data-component="mixed-strategy"]',
            title: 'Khi không có lựa chọn cố định tốt nhất',
            description: 'Một số trò chơi yêu cầu ngẫu nhiên hóa để đối thủ không khai thác được pattern.'
        },
        {
            target: '[data-component="repeated-games"]',
            title: 'Đưa tương lai vào luật chơi',
            description: 'Khi còn gặp lại nhau, danh tiếng và trả đũa có thể biến phản bội thành lựa chọn đắt đỏ.'
        },
        {
            target: '[data-component="signaling-screening"]',
            title: 'Phân tích thông tin bất cân xứng',
            description: 'Tín hiệu đáng tin phải tốn kém hoặc khó giả mạo với người chất lượng thấp.'
        }
    ],
    advanced: [
        {
            target: '[data-component="bayesian-games"]',
            title: 'Thêm niềm tin và thông tin riêng',
            description: 'Bayesian games dùng xác suất để mô hình hóa việc mỗi người không biết chính xác loại của đối phương.'
        },
        {
            target: '[data-component="mechanism-design"]',
            title: 'Thiết kế luật chơi',
            description: 'Thay vì chỉ chọn chiến lược trong luật có sẵn, mechanism design hỏi phải thiết kế luật thế nào để hành vi ích kỷ tạo kết quả tốt.'
        },
        {
            target: '[data-component="public-policy-climate"]',
            title: 'Ứng dụng vào vấn đề công',
            description: 'Khí hậu, thuế, giao thông, vaccine và tài nguyên chung đều có cấu trúc free rider hoặc coordination.'
        },
        {
            target: '[data-component="ai-multi-agent"]',
            title: 'Đọc hệ thống nhiều tác nhân',
            description: 'AI agent, bot giao dịch và thuật toán đề xuất tạo ra môi trường chiến lược mới, nơi hành vi của máy ảnh hưởng đến người và ngược lại.'
        }
    ]
};

const gameTheoryPresets = [
    {
        id: 'prisoners',
        title: 'Song đề tù nhân',
        rowPlayer: 'A',
        colPlayer: 'B',
        rowStrategies: ['Hợp tác', 'Phản bội'],
        colStrategies: ['Hợp tác', 'Phản bội'],
        payoffs: [
            [[3, 3], [0, 5]],
            [[5, 0], [1, 1]]
        ],
        note: 'Cả hai phản bội là cân bằng Nash, dù cả hai hợp tác đem lại tổng lợi ích cao hơn.'
    },
    {
        id: 'stag-hunt',
        title: 'Stag Hunt',
        rowPlayer: 'A',
        colPlayer: 'B',
        rowStrategies: ['Săn hươu', 'Săn thỏ'],
        colStrategies: ['Săn hươu', 'Săn thỏ'],
        payoffs: [
            [[4, 4], [0, 3]],
            [[3, 0], [3, 3]]
        ],
        note: 'Có hai cân bằng: phối hợp cùng săn hươu tốt hơn, nhưng săn thỏ an toàn hơn nếu thiếu tin tưởng.'
    },
    {
        id: 'chicken',
        title: 'Chicken',
        rowPlayer: 'A',
        colPlayer: 'B',
        rowStrategies: ['Lấn tới', 'Nhường'],
        colStrategies: ['Lấn tới', 'Nhường'],
        payoffs: [
            [[-5, -5], [5, 0]],
            [[0, 5], [2, 2]]
        ],
        note: 'Hai cân bằng bất đối xứng: một bên lấn tới, bên kia nhường. Nếu cả hai cùng cứng, cả hai thiệt nặng.'
    },
    {
        id: 'matching-pennies',
        title: 'Matching Pennies',
        rowPlayer: 'A',
        colPlayer: 'B',
        rowStrategies: ['Ngửa', 'Sấp'],
        colStrategies: ['Ngửa', 'Sấp'],
        payoffs: [
            [[1, -1], [-1, 1]],
            [[-1, 1], [1, -1]]
        ],
        note: 'Không có cân bằng Nash thuần. Cân bằng hỗn hợp là mỗi bên random 50/50.'
    }
];
