// Game Theory - Practice question bank (multiple choice)
// Each question provides: correct answer, explanation, and consequences per wrong choice.

const gameTheoryPracticeBank = [
    {
        id: 'q-foundations-players-1',
        category: 'foundations',
        level: 'beginner',
        prompt: `
            <p>Bạn đang phân tích một tình huống chiến lược. Câu nào dưới đây mô tả <strong>đúng nhất</strong> “người chơi” trong game theory?</p>
        `,
        choices: [
            { id: 'a', text: 'Chỉ là những cá nhân trực tiếp ra quyết định.' },
            { id: 'b', text: 'Bất kỳ tác nhân nào có lựa chọn và payoff, có thể là cá nhân, nhóm, công ty, quốc gia hoặc thuật toán.' },
            { id: 'c', text: 'Chỉ là đối thủ cạnh tranh của bạn.' },
            { id: 'd', text: 'Chỉ là người có nhiều quyền lực nhất.' }
        ],
        correctChoiceId: 'b',
        explanation: `
            <p><strong>Đúng:</strong> “Người chơi” là bất kỳ tác nhân nào có thể lựa chọn chiến lược và có payoff (mục tiêu) trong trò chơi.</p>
            <p>Trong thực tế, người chơi có thể là phòng ban, regulator, nền tảng, bot pricing, cộng đồng mạng hoặc thuật toán recommendation.</p>
        `,
        consequences: {
            a: '<p>Bạn sẽ bỏ sót các “người chơi ẩn” như regulator/thuật toán, dẫn đến chiến lược tối ưu trên giấy nhưng thất bại khi triển khai.</p>',
            c: '<p>Bạn sẽ nhìn quá hẹp, bỏ qua đồng minh/khách hàng/nền tảng. Kết quả là tối ưu sai đối tượng và bị “đánh úp” từ phía không dự đoán.</p>',
            d: '<p>Bạn sẽ quy mọi thứ về “quyền lực”, bỏ qua incentives và ràng buộc. Dễ đưa ra giải pháp cảm tính, không tự thực thi.</p>'
        },
        related: ['players-strategies-payoffs', 'what-is-game-theory']
    },
    {
        id: 'q-foundations-strategy-1',
        category: 'foundations',
        level: 'beginner',
        prompt: `
            <p>Trong trò chơi tuần tự, “chiến lược” khác “hành động” ở điểm nào?</p>
        `,
        choices: [
            { id: 'a', text: 'Không khác nhau, chỉ là cách gọi.' },
            { id: 'b', text: 'Chiến lược là một hành động ngẫu nhiên theo xác suất.' },
            { id: 'c', text: 'Chiến lược là kế hoạch đầy đủ cho mọi tình huống có thể xảy ra, kể cả nhánh không đi tới.' },
            { id: 'd', text: 'Chiến lược chỉ áp dụng cho trò chơi tổng bằng không.' }
        ],
        correctChoiceId: 'c',
        explanation: `
            <p><strong>Đúng:</strong> Trong extensive-form game, chiến lược là <em>kế hoạch hoàn chỉnh</em> cho mọi information set mà người chơi có thể gặp.</p>
            <p>Hành động chỉ là lựa chọn tại một nút cụ thể. Chiến lược nói “nếu X thì làm gì, nếu Y thì làm gì”.</p>
        `,
        consequences: {
            a: '<p>Bạn sẽ không giải được trò chơi tuần tự đúng cách: bỏ qua các nhánh rẽ và đe dọa không đáng tin.</p>',
            b: '<p>Bạn nhầm giữa “chiến lược” và “chiến lược hỗn hợp”. Random hóa chỉ là một trường hợp.</p>',
            d: '<p>Bạn sẽ áp dụng sai bối cảnh: chiến lược tồn tại trong mọi loại trò chơi, không chỉ zero-sum.</p>'
        },
        related: ['normal-extensive-form', 'subgame-perfect']
    },
    {
        id: 'q-foundations-payoff-1',
        category: 'foundations',
        level: 'beginner',
        prompt: `
            <p>Khi mô hình hóa payoff, nguyên tắc thực dụng nào giúp giảm sai số lớn nhất?</p>
        `,
        choices: [
            { id: 'a', text: 'Chỉ dùng tiền vì dễ đo.' },
            { id: 'b', text: 'Dùng cùng một thang đo nhất quán cho các kết quả và phản ánh đúng thứ người chơi tối ưu.' },
            { id: 'c', text: 'Cứ đặt payoff theo cảm tính miễn là hợp lý.' },
            { id: 'd', text: 'Payoff không quan trọng, chỉ cần chiến lược.' }
        ],
        correctChoiceId: 'b',
        explanation: `
            <p><strong>Đúng:</strong> Payoff có thể là tiền, danh tiếng, an toàn, quyền lực… nhưng phải <strong>nhất quán</strong> và phản ánh đúng mục tiêu thật.</p>
            <p>Nhiều phân tích sai vì giả định đối phương tối ưu tiền trong khi họ tối ưu KPI, uy tín, hoặc rủi ro pháp lý.</p>
        `,
        consequences: {
            a: '<p>Bạn sẽ bỏ qua công bằng/danh tiếng/rủi ro. Dẫn đến dự đoán hành vi lệch, đặc biệt trong đàm phán và chính sách công.</p>',
            c: '<p>Payoff “mơ hồ” khiến kết luận không kiểm chứng được. Dễ tự thuyết phục và khó sửa khi thực tế phản bác.</p>',
            d: '<p>Bạn sẽ tối ưu mù: chiến lược chỉ có nghĩa khi biết nó tối ưu mục tiêu nào.</p>'
        },
        related: ['players-strategies-payoffs', 'utility-preferences']
    },
    {
        id: 'q-classic-pd-1',
        category: 'classic-games',
        level: 'beginner',
        prompt: `
            <p>Trong song đề tù nhân chuẩn, vì sao “phản bội” thường xuất hiện ở cân bằng Nash?</p>
        `,
        choices: [
            { id: 'a', text: 'Vì người chơi xấu tính nên phản bội.' },
            { id: 'b', text: 'Vì phản bội là chiến lược trội: trong mọi trường hợp, phản bội cho payoff cao hơn hợp tác.' },
            { id: 'c', text: 'Vì hợp tác là bất hợp pháp.' },
            { id: 'd', text: 'Vì trò chơi luôn lặp lại vô hạn.' }
        ],
        correctChoiceId: 'b',
        explanation: `
            <p><strong>Đúng:</strong> Trong PD chuẩn, phản bội là <strong>dominant strategy</strong>. Mỗi người, nhìn riêng, luôn có lợi khi phản bội.</p>
            <p>Điều này tạo bẫy: lựa chọn hợp lý cá nhân tạo kết quả tệ tập thể.</p>
        `,
        consequences: {
            a: '<p>Bạn sẽ đổ lỗi đạo đức thay vì sửa incentives. Kết quả: giải pháp “kêu gọi” thất bại và bẫy lặp lại.</p>',
            c: '<p>Bạn sẽ nhầm vấn đề luật với vấn đề cơ chế. PD có thể xảy ra hoàn toàn hợp pháp.</p>',
            d: '<p>Bạn sẽ bỏ qua điểm mấu chốt của PD một lần. Lặp lại có thể thay đổi kết quả, nhưng không phải giả định mặc định.</p>'
        },
        related: ['prisoners-dilemma', 'dominant-dominated', 'nash-equilibrium']
    },
    {
        id: 'q-equilibria-nash-1',
        category: 'equilibria',
        level: 'beginner',
        prompt: `
            <p>Phát biểu nào mô tả đúng nhất về <strong>cân bằng Nash</strong>?</p>
        `,
        choices: [
            { id: 'a', text: 'Kết quả tốt nhất cho xã hội.' },
            { id: 'b', text: 'Kết quả công bằng nhất.' },
            { id: 'c', text: 'Không ai có lợi khi đổi chiến lược một mình, giả định các bên giữ nguyên chiến lược của mình.' },
            { id: 'd', text: 'Luôn là duy nhất trong mọi trò chơi.' }
        ],
        correctChoiceId: 'c',
        explanation: `
            <p><strong>Đúng:</strong> Nash là khái niệm về <strong>ổn định trước thay đổi đơn phương</strong>.</p>
            <p>Nash không đảm bảo tối ưu xã hội hay công bằng. Có trò chơi nhiều Nash, hoặc không có Nash thuần.</p>
        `,
        consequences: {
            a: '<p>Bạn sẽ nhầm Nash với tối ưu xã hội, dễ chấp nhận một trạng thái “kẹt” mà đáng lẽ cần đổi luật chơi.</p>',
            b: '<p>Bạn sẽ kỳ vọng công bằng từ một khái niệm ổn định. Hậu quả: thất vọng và thiết kế cơ chế sai.</p>',
            d: '<p>Bạn sẽ bỏ qua bài toán “chọn cân bằng”. Trong thực tế, focal point, lịch sử, quyền lực… quyết định cân bằng nào xảy ra.</p>'
        },
        related: ['nash-equilibrium', 'best-response', 'pareto-optimality']
    },
    {
        id: 'q-equilibria-pareto-1',
        category: 'equilibria',
        level: 'beginner',
        prompt: `
            <p>Một kết quả “tối ưu Pareto” có nghĩa là gì?</p>
        `,
        choices: [
            { id: 'a', text: 'Nó là kết quả công bằng nhất.' },
            { id: 'b', text: 'Không thể làm ai tốt hơn mà không làm ít nhất một người khác tệ hơn.' },
            { id: 'c', text: 'Nó luôn trùng với cân bằng Nash.' },
            { id: 'd', text: 'Nó chỉ áp dụng cho trò chơi tổng bằng không.' }
        ],
        correctChoiceId: 'b',
        explanation: `
            <p><strong>Đúng:</strong> Pareto nói về <strong>hiệu quả</strong>: không còn cải thiện “không ai thiệt”.</p>
            <p>Nó không nói về công bằng. Một kết quả rất bất bình đẳng vẫn có thể Pareto optimal.</p>
        `,
        consequences: {
            a: '<p>Bạn sẽ nhầm “hiệu quả” với “công bằng”, dẫn đến tranh luận sai mục tiêu khi thiết kế chính sách hoặc chia thưởng.</p>',
            c: '<p>Bạn sẽ bỏ qua sự khác biệt lớn giữa “ổn định” và “hiệu quả”. PD là phản ví dụ kinh điển: Nash có thể không Pareto optimal.</p>',
            d: '<p>Bạn sẽ bỏ lỡ ứng dụng Pareto trong đàm phán và thiết kế cơ chế positive-sum.</p>'
        },
        related: ['pareto-optimality', 'nash-equilibrium']
    },
    {
        id: 'q-equilibria-mixed-1',
        category: 'equilibria',
        level: 'intermediate',
        prompt: `
            <p>Trong cân bằng chiến lược hỗn hợp, điều kiện cốt lõi là gì?</p>
        `,
        choices: [
            { id: 'a', text: 'Mỗi người random tùy thích.' },
            { id: 'b', text: 'Xác suất được chọn sao cho đối thủ “indifferent” giữa các lựa chọn trong support của họ.' },
            { id: 'c', text: 'Luôn có thể tìm bằng cách loại chiến lược trội.' },
            { id: 'd', text: 'Chỉ xuất hiện trong trò chơi hợp tác.' }
        ],
        correctChoiceId: 'b',
        explanation: `
            <p><strong>Đúng:</strong> Mixed strategy equilibrium chọn xác suất sao cho đối thủ không có động cơ lệch: các lựa chọn mà họ thực sự chơi có cùng expected payoff.</p>
            <p>Random “đúng” là random có tính toán, không phải cảm tính.</p>
        `,
        consequences: {
            a: '<p>Random sai xác suất sẽ bị khai thác. Trong môi trường đối kháng (bảo mật, thể thao), bạn sẽ bị “bắt bài”.</p>',
            c: '<p>Nhiều trò chơi không có chiến lược trội. Nếu bạn chỉ dùng dominance, bạn sẽ “kẹt” và kết luận sai rằng không có lời giải.</p>',
            d: '<p>Mixed strategy thường gặp trong đối kháng/zero-sum, không chỉ hợp tác.</p>'
        },
        related: ['mixed-strategy', 'matching-pennies', 'nash-equilibrium']
    },
    {
        id: 'q-strategies-repeated-1',
        category: 'strategies',
        level: 'intermediate',
        prompt: `
            <p>Điều nào <strong>tăng khả năng</strong> hợp tác trong trò chơi lặp lại?</p>
        `,
        choices: [
            { id: 'a', text: 'Người chơi biết chắc đây là vòng cuối.' },
            { id: 'b', text: 'Hành vi của nhau quan sát được và có cơ chế thưởng/phạt trong tương lai.' },
            { id: 'c', text: 'Người chơi không bao giờ gặp lại.' },
            { id: 'd', text: 'Payoff không liên quan đến tương lai.' }
        ],
        correctChoiceId: 'b',
        explanation: `
            <p><strong>Đúng:</strong> “Bóng của tương lai” + quan sát được hành vi + khả năng trả đũa/thưởng làm hợp tác trở nên hợp lý.</p>
        `,
        consequences: {
            a: '<p>Biết chắc vòng cuối thường kích hoạt “rã ngược” hợp tác: vòng cuối phản bội, rồi vòng trước phản bội…</p>',
            c: '<p>Nếu không lặp lại, danh tiếng yếu, hợp tác khó tự duy trì trừ khi có hợp đồng/cưỡng chế.</p>',
            d: '<p>Nếu tương lai không đáng giá, trừng phạt không hiệu quả. Hợp tác dễ sụp vì discount factor thấp.</p>'
        },
        related: ['repeated-games', 'tit-for-tat', 'prisoners-dilemma']
    },
    {
        id: 'q-strategies-commitment-1',
        category: 'strategies',
        level: 'intermediate',
        prompt: `
            <p>Một “đe dọa” trở nên <strong>đáng tin (credible)</strong> khi nào?</p>
        `,
        choices: [
            { id: 'a', text: 'Khi nó được nói to và chắc chắn.' },
            { id: 'b', text: 'Khi thực hiện nó sẽ khiến người đe dọa thiệt hại nặng hơn.' },
            { id: 'c', text: 'Khi có ràng buộc/chi phí khiến người đe dọa vẫn muốn (hoặc buộc phải) thực hiện khi tới thời điểm.' },
            { id: 'd', text: 'Khi đối thủ yếu hơn.' }
        ],
        correctChoiceId: 'c',
        explanation: `
            <p><strong>Đúng:</strong> Credible nghĩa là <strong>khi tới lượt thật, bạn vẫn có động cơ</strong> (hoặc bị ràng buộc) để làm.</p>
            <p>Hợp đồng, đặt cọc, đầu tư không thể đảo ngược, cam kết công khai… biến lời nói thành ràng buộc.</p>
        `,
        consequences: {
            a: '<p>Nói lớn không thay đổi incentives. Đối thủ sẽ thử “call bluff” và bạn mất uy tín dài hạn.</p>',
            b: '<p>Nếu bạn càng làm càng thiệt, đe dọa không credible. Đối thủ sẽ chờ bạn tự rút.</p>',
            d: '<p>Chênh lệch sức mạnh không đủ: nếu hành động gây hại cho chính bạn, bạn vẫn khó thực hiện.</p>'
        },
        related: ['credible-commitment', 'subgame-perfect', 'backward-induction']
    },
    {
        id: 'q-strategies-signaling-1',
        category: 'strategies',
        level: 'intermediate',
        prompt: `
            <p>Trong signaling, một tín hiệu được xem là “đáng tin” chủ yếu vì lý do nào?</p>
        `,
        choices: [
            { id: 'a', text: 'Vì nó được đăng trên mạng xã hội.' },
            { id: 'b', text: 'Vì nó rẻ và ai cũng làm được.' },
            { id: 'c', text: 'Vì nó tốn kém hoặc khó giả mạo hơn đối với type “xấu”, nên giúp phân tách type.' },
            { id: 'd', text: 'Vì nó được nói bằng giọng tự tin.' }
        ],
        correctChoiceId: 'c',
        explanation: `
            <p><strong>Đúng:</strong> Tín hiệu đáng tin thường có <strong>chi phí phân tách</strong>: người chất lượng thấp khó bắt chước với chi phí tương tự.</p>
            <p>Ví dụ: bảo hành dài với sản phẩm kém sẽ rất tốn, nên bảo hành có thể là tín hiệu chất lượng.</p>
        `,
        consequences: {
            a: '<p>Bạn sẽ nhầm “lan truyền” với “đáng tin”. Kết quả: bị thao túng bởi PR và tín hiệu rẻ.</p>',
            b: '<p>Tín hiệu rẻ dễ thành “pooling”: ai cũng làm nên không phân loại được, dẫn đến adverse selection.</p>',
            d: '<p>Tự tin là tín hiệu yếu vì dễ giả. Bạn dễ bị lừa bởi overconfidence và thao túng.</p>'
        },
        related: ['signaling-screening', 'bayesian-games', 'job-market-signaling']
    },
    {
        id: 'q-strategies-mechanism-1',
        category: 'strategies',
        level: 'advanced',
        prompt: `
            <p>Mệnh đề nào mô tả đúng nhất về <strong>mechanism design</strong>?</p>
        `,
        choices: [
            { id: 'a', text: 'Tối ưu chiến lược của mình trong luật chơi có sẵn.' },
            { id: 'b', text: 'Thiết kế luật chơi để hành vi tối ưu cá nhân dẫn tới kết quả mong muốn.' },
            { id: 'c', text: 'Tìm cách thuyết phục mọi người “tự giác”.' },
            { id: 'd', text: 'Chỉ dùng trong đấu giá.' }
        ],
        correctChoiceId: 'b',
        explanation: `
            <p><strong>Đúng:</strong> Mechanism design “đảo chiều” game theory: thay vì dự đoán hành vi, ta thiết kế rule/incentives để hành vi ích kỷ tạo kết quả tốt.</p>
            <p>Ví dụ: thiết kế thuế carbon, cơ chế đấu giá quảng cáo, matching học sinh-trường, KPI nội bộ…</p>
        `,
        consequences: {
            a: '<p>Bạn sẽ tối ưu cục bộ, nhưng vẫn mắc kẹt trong luật chơi tệ. Nhiều vấn đề cần đổi luật, không phải tối ưu trong luật.</p>',
            c: '<p>Tự giác yếu nếu payoff chống lại. Không sửa incentives sẽ khiến hệ thống “game” chính sách.</p>',
            d: '<p>Bạn sẽ bỏ lỡ ứng dụng rộng: governance, phân bổ ngân sách, chống gian lận, điều phối giao thông, nền tảng số.</p>'
        },
        related: ['mechanism-design', 'auctions', 'public-goods']
    },
    {
        id: 'q-app-pricing-1',
        category: 'applications',
        level: 'beginner',
        prompt: `
            <p>Trong chiến tranh giá giữa hai đối thủ, sai lầm nào dưới đây thường khiến cả ngành “đua xuống đáy”?</p>
        `,
        choices: [
            { id: 'a', text: 'Tập trung khác biệt hóa để giảm so sánh trực tiếp.' },
            { id: 'b', text: 'Phản ứng giảm giá ngay lập tức trong mọi tình huống mà không xét vòng lặp dài hạn.' },
            { id: 'c', text: 'Đo unit economics theo cohort và retention.' },
            { id: 'd', text: 'Bundle giá trị thay vì chỉ giảm giá.' }
        ],
        correctChoiceId: 'b',
        explanation: `
            <p><strong>Đúng:</strong> Phản ứng giảm giá theo phản xạ làm trò chơi chuyển thành negative-sum. Khi đối thủ giảm theo, lợi nhuận biến mất mà thị phần không tăng đủ.</p>
        `,
        consequences: {
            a: '<p>Đây là hướng đúng để tránh chiến tranh giá; chọn sai sẽ khiến bạn bỏ lỡ cơ hội thoát bẫy.</p>',
            c: '<p>Đây là cách đo đúng để tránh tăng trưởng giả. Nếu bỏ qua, bạn dễ “thắng” KPI ngắn hạn nhưng lỗ dài hạn.</p>',
            d: '<p>Bundle giá trị giúp thay payoff, giảm cạnh tranh trực diện. Bỏ qua sẽ khiến bạn chỉ còn công cụ giảm giá.</p>'
        },
        related: ['business-pricing', 'prisoners-dilemma', 'repeated-games']
    },
    {
        id: 'q-app-traffic-1',
        category: 'applications',
        level: 'intermediate',
        prompt: `
            <p>Vì sao “mỗi người chọn đường nhanh nhất cho mình” có thể làm tổng giao thông tệ hơn?</p>
        `,
        choices: [
            { id: 'a', text: 'Vì tài xế không biết lái.' },
            { id: 'b', text: 'Vì tối ưu cá nhân tạo cân bằng ổn định nhưng không tối ưu toàn hệ thống (externality).' },
            { id: 'c', text: 'Vì luôn có một đường bí mật nhanh hơn.' },
            { id: 'd', text: 'Vì đèn giao thông không liên quan.' }
        ],
        correctChoiceId: 'b',
        explanation: `
            <p><strong>Đúng:</strong> Đây là vấn đề externality: lựa chọn của bạn làm tăng tắc nghẽn cho người khác, nhưng chi phí này không được “tính” đầy đủ vào payoff cá nhân.</p>
            <p>Kết quả có thể ổn định kiểu Wardrop nhưng kém tối ưu xã hội; đôi khi còn xảy ra Braess paradox.</p>
        `,
        consequences: {
            a: '<p>Đổ lỗi năng lực cá nhân khiến giải pháp sai: cần cơ chế điều phối (phí tắc nghẽn, tín hiệu, phân luồng), không chỉ tuyên truyền.</p>',
            c: '<p>Tìm “đường bí mật” không giải được bản chất. Khi nhiều người đổ vào đường đó, nó lại tắc.</p>',
            d: '<p>Bỏ qua tín hiệu chung (đèn) khiến phối hợp thất bại và tăng tai nạn/tắc nghẽn.</p>'
        },
        related: ['traffic-routing', 'correlated-equilibrium', 'mechanism-design']
    },
    {
        id: 'q-cases-ultimatum-1',
        category: 'cases',
        level: 'intermediate',
        prompt: `
            <p>Trong Ultimatum Game, vì sao người nhận thường <strong>từ chối</strong> offer quá thấp dù mất tiền?</p>
        `,
        choices: [
            { id: 'a', text: 'Vì họ không hiểu luật chơi.' },
            { id: 'b', text: 'Vì payoff của họ bao gồm công bằng/nhân phẩm và động cơ trừng phạt hành vi bất công.' },
            { id: 'c', text: 'Vì họ luôn giàu hơn người đề nghị.' },
            { id: 'd', text: 'Vì đây là trò chơi zero-sum nên phải từ chối.' }
        ],
        correctChoiceId: 'b',
        explanation: `
            <p><strong>Đúng:</strong> Thực nghiệm cho thấy con người có social preferences: ghét bất công và sẵn sàng chịu chi phí để trừng phạt.</p>
            <p>Vì vậy mô hình payoff chỉ bằng tiền thường dự đoán sai hành vi trong thương lượng thực.</p>
        `,
        consequences: {
            a: '<p>Giả định “không hiểu” khiến bạn bỏ qua yếu tố công bằng. Trong quản trị, điều này làm chính sách thất bại dù tính toán đúng tiền.</p>',
            c: '<p>So sánh tài sản không giải thích nhất quán. Bạn sẽ đưa ra lời giải dựa trên “định kiến” thay vì cơ chế.</p>',
            d: '<p>Ultimatum không phải zero-sum theo nghĩa hành vi: lựa chọn từ chối tạo kết quả tệ cho cả hai nhưng vẫn xảy ra vì utility không chỉ là tiền.</p>'
        },
        related: ['ultimatum-game', 'behavioral-applications', 'utility-preferences']
    },
    {
        id: 'q-cases-beauty-1',
        category: 'cases',
        level: 'intermediate',
        prompt: `
            <p>Trong “beauty contest” (Keynes), người chơi tối ưu bằng cách nào?</p>
        `,
        choices: [
            { id: 'a', text: 'Chọn thứ mình thích nhất.' },
            { id: 'b', text: 'Chọn thứ mình nghĩ người khác thích nhất.' },
            { id: 'c', text: 'Chọn thứ mình nghĩ người khác nghĩ người khác sẽ chọn.' },
            { id: 'd', text: 'Chọn ngẫu nhiên để tránh bị bắt bài.' }
        ],
        correctChoiceId: 'c',
        explanation: `
            <p><strong>Đúng:</strong> Beauty contest là suy luận nhiều cấp: dự đoán kỳ vọng của kỳ vọng. Điều này mô hình hóa thị trường ngắn hạn và xu hướng.</p>
        `,
        consequences: {
            a: '<p>Bạn sẽ thua trong trò chơi “kỳ vọng đám đông”: đúng gu cá nhân nhưng sai về dự đoán hành vi tập thể.</p>',
            b: '<p>Level 1 thường chưa đủ. Nếu phần lớn người chơi suy luận sâu hơn, bạn sẽ lệch nhịp.</p>',
            d: '<p>Random không giải đúng cấu trúc nếu đối thủ suy luận. Bạn sẽ có expected payoff thấp hơn chiến lược có tính toán.</p>'
        },
        related: ['beauty-contest', 'level-k-thinking', 'finance-markets']
    },
    {
        id: 'q-foundations-normal-vs-extensive-1',
        category: 'foundations',
        level: 'beginner',
        prompt: `
            <p>Khi nào bạn nên dùng <strong>dạng cây (extensive form)</strong> thay vì dạng ma trận?</p>
        `,
        choices: [
            { id: 'a', text: 'Khi hai bên chọn đồng thời và không quan sát nhau.' },
            { id: 'b', text: 'Khi có thứ tự hành động theo bước và phản ứng của người đi sau phụ thuộc hành động người đi trước.' },
            { id: 'c', text: 'Khi trò chơi luôn zero-sum.' },
            { id: 'd', text: 'Khi payoff không quan trọng.' }
        ],
        correctChoiceId: 'b',
        explanation: `
            <p><strong>Đúng:</strong> Extensive form phù hợp khi có <strong>thứ tự hành động</strong> (sequential move), thông tin theo thời điểm, và bạn cần xét “đe dọa có đáng tin không”.</p>
        `,
        consequences: {
            a: '<p>Bạn sẽ làm mô hình phức tạp không cần thiết, dễ rối và khó giải, trong khi ma trận đã đủ.</p>',
            c: '<p>Bạn sẽ nhầm tiêu chí chọn biểu diễn. Thứ tự hành động mới là lý do chính, không phải tổng bằng không.</p>',
            d: '<p>Bỏ payoff làm mô hình vô nghĩa: không thể xác định best response hay cân bằng.</p>'
        },
        related: ['normal-extensive-form', 'backward-induction']
    },
    {
        id: 'q-foundations-info-asymmetry-1',
        category: 'foundations',
        level: 'intermediate',
        prompt: `
            <p>Tình huống nào là <strong>thông tin bất cân xứng</strong> điển hình?</p>
        `,
        choices: [
            { id: 'a', text: 'Hai người chơi cờ vua, nhìn thấy toàn bộ bàn cờ.' },
            { id: 'b', text: 'Người bán xe cũ biết xe có lỗi, người mua không biết.' },
            { id: 'c', text: 'Hai công ty biết rõ chi phí của nhau như nhau.' },
            { id: 'd', text: 'Hai bên bỏ phiếu kín nhưng đều biết kết quả trước.' }
        ],
        correctChoiceId: 'b',
        explanation: `
            <p><strong>Đúng:</strong> Một bên giữ thông tin riêng (quality/cost/type), bên kia không quan sát trực tiếp được.</p>
            <p>Đây là nền cho adverse selection và signaling/screening.</p>
        `,
        consequences: {
            a: '<p>Đây là thông tin hoàn hảo, không bất cân xứng. Nhầm lẫn sẽ khiến bạn dùng sai công cụ (signaling thay vì backward induction).</p>',
            c: '<p>Nếu thông tin đối xứng, nhiều cơ chế sàng lọc là thừa. Thiết kế screening khi không cần sẽ tăng ma sát không đáng.</p>',
            d: '<p>Nếu “đều biết trước”, vấn đề lại là gian lận/cấu kết, không phải bất cân xứng thông tin theo nghĩa kinh điển.</p>'
        },
        related: ['information-timing', 'signaling-screening', 'bayesian-games']
    },
    {
        id: 'q-classic-stag-hunt-1',
        category: 'classic-games',
        level: 'beginner',
        prompt: `
            <p>Stag Hunt thường “kẹt” ở cân bằng kém hơn chủ yếu vì lý do nào?</p>
        `,
        choices: [
            { id: 'a', text: 'Vì người chơi không muốn lợi ích lớn.' },
            { id: 'b', text: 'Vì thiếu niềm tin/phối hợp: sợ người kia không cùng hợp tác nên chọn phương án an toàn.' },
            { id: 'c', text: 'Vì luôn có chiến lược trội.' },
            { id: 'd', text: 'Vì trò chơi chỉ xảy ra một lần.' }
        ],
        correctChoiceId: 'b',
        explanation: `
            <p><strong>Đúng:</strong> Stag Hunt có nhiều cân bằng. Cân bằng “an toàn” có thể risk-dominant khi niềm tin thấp.</p>
        `,
        consequences: {
            a: '<p>Bạn sẽ đổ lỗi “tham ít” thay vì sửa cơ chế tin cậy. Giải pháp sẽ sai và không chuyển được sang cân bằng tốt.</p>',
            c: '<p>Nếu bạn tìm chiến lược trội trong Stag Hunt, bạn sẽ kết luận sai. Trò chơi này thường không có dominance rõ ràng.</p>',
            d: '<p>Một lần hay lặp lại ảnh hưởng, nhưng gốc rễ của Stag Hunt là phối hợp/niềm tin, không phải số vòng.</p>'
        },
        related: ['stag-hunt', 'coordination-games']
    },
    {
        id: 'q-classic-chicken-1',
        category: 'classic-games',
        level: 'intermediate',
        prompt: `
            <p>Trong trò chơi Chicken, chiến thuật nào thường được dùng để tăng cơ hội “thắng”?</p>
        `,
        choices: [
            { id: 'a', text: 'Tăng khả năng nhượng bộ vào phút chót.' },
            { id: 'b', text: 'Tạo cam kết đáng tin (credible commitment) rằng mình sẽ không nhường.' },
            { id: 'c', text: 'Giữ mọi thứ bí mật tuyệt đối, không gửi tín hiệu.' },
            { id: 'd', text: 'Luôn chọn hợp tác trước.' }
        ],
        correctChoiceId: 'b',
        explanation: `
            <p><strong>Đúng:</strong> Chicken là trò chơi leo thang. Cam kết đáng tin (đốt cầu rút, công khai lập trường, ràng buộc) có thể buộc đối phương nhượng.</p>
        `,
        consequences: {
            a: '<p>Nếu bạn “luôn nhượng phút chót”, đối phương sẽ học và khai thác. Bạn mất uy tín đàm phán về dài hạn.</p>',
            c: '<p>Không tín hiệu khiến cả hai khó xuống thang và tăng nguy cơ “tai nạn” (cùng cứng). Tín hiệu kín qua backchannel đôi khi quan trọng.</p>',
            d: '<p>Chicken không giống PD: “hợp tác trước” không giải bài toán mất mặt/cứng-rắn. Bạn dễ bị ép.</p>'
        },
        related: ['chicken-game', 'credible-commitment', 'brinkmanship']
    },
    {
        id: 'q-equilibria-subgame-1',
        category: 'equilibria',
        level: 'advanced',
        prompt: `
            <p>Subgame Perfect Equilibrium giúp loại bỏ điều gì?</p>
        `,
        choices: [
            { id: 'a', text: 'Các chiến lược hỗn hợp.' },
            { id: 'b', text: 'Các đe dọa không đáng tin (non-credible threats) trong trò chơi tuần tự.' },
            { id: 'c', text: 'Mọi cân bằng Nash.' },
            { id: 'd', text: 'Mọi trò chơi có thông tin bất cân xứng.' }
        ],
        correctChoiceId: 'b',
        explanation: `
            <p><strong>Đúng:</strong> SPE yêu cầu hợp lý tuần tự trong mọi subgame, nên loại các lời đe dọa “nói vậy thôi” mà tới lúc thật không ai muốn thực hiện.</p>
        `,
        consequences: {
            a: '<p>Bạn sẽ dùng sai khái niệm. Mixed strategy vẫn có thể xuất hiện trong SPE tùy trò chơi.</p>',
            c: '<p>SPE là một refinement của Nash trong extensive form, không “xóa Nash”. Nhầm lẫn này làm bạn bỏ qua phân tích đúng.</p>',
            d: '<p>SPE chủ yếu xử lý thứ tự hành động và credible threats. Thông tin bất cân xứng cần Bayesian analysis/signaling.</p>'
        },
        related: ['subgame-perfect', 'backward-induction', 'credible-commitment']
    },
    {
        id: 'q-strategies-batna-1',
        category: 'strategies',
        level: 'intermediate',
        prompt: `
            <p>Trong đàm phán, yếu tố nào thường quyết định “sức mạnh” của bạn nhất?</p>
        `,
        choices: [
            { id: 'a', text: 'Bạn nói tự tin đến đâu.' },
            { id: 'b', text: 'BATNA: lựa chọn tốt nhất nếu không đạt thỏa thuận.' },
            { id: 'c', text: 'Bạn là người nói trước.' },
            { id: 'd', text: 'Bạn luôn phải cứng rắn.' }
        ],
        correctChoiceId: 'b',
        explanation: `
            <p><strong>Đúng:</strong> BATNA đặt “điểm bất đồng”. BATNA càng tốt, bạn càng ít bị ép.</p>
        `,
        consequences: {
            a: '<p>Tự tin không thay payoff. Nếu BATNA yếu, đối phương có thể “gọi bluff” và bạn phải nhượng.</p>',
            c: '<p>Nói trước có thể tạo anchor, nhưng BATNA mới quyết định bạn có thể rời bàn đàm phán hay không.</p>',
            d: '<p>Cứng rắn khi BATNA yếu làm đàm phán đổ vỡ và bạn thiệt hơn. Cứng rắn là chiến thuật, không phải nền tảng sức mạnh.</p>'
        },
        related: ['negotiation-bargaining', 'salary-negotiation']
    },
    {
        id: 'q-strategies-winners-curse-1',
        category: 'strategies',
        level: 'advanced',
        prompt: `
            <p>“Winner’s curse” trong đấu giá thường xảy ra mạnh nhất khi nào?</p>
        `,
        choices: [
            { id: 'a', text: 'Khi giá trị là “common value” (giống nhau về bản chất) nhưng mọi người ước tính sai khác nhau.' },
            { id: 'b', text: 'Khi ai cũng biết chính xác giá trị thật.' },
            { id: 'c', text: 'Khi đấu giá chỉ có 1 người tham gia.' },
            { id: 'd', text: 'Khi đấu giá là second-price sealed bid.' }
        ],
        correctChoiceId: 'a',
        explanation: `
            <p><strong>Đúng:</strong> Khi giá trị thật là common value (mỏ dầu, thị trường tiềm năng, tài sản khó định giá), người thắng thường là người ước tính lạc quan nhất.</p>
        `,
        consequences: {
            b: '<p>Nếu ai cũng biết thật, winner’s curse gần như không có. Nhầm lẫn khiến bạn bỏ qua điều chỉnh quan trọng trong bidding.</p>',
            c: '<p>Không có cạnh tranh thì không có “curse”. Nhầm lẫn khiến bạn tối ưu sai môi trường và đặt chiến thuật không liên quan.</p>',
            d: '<p>Second-price khuyến khích bid gần giá trị riêng, nhưng winner’s curse vẫn có thể tồn tại trong common value nếu định giá sai.</p>'
        },
        related: ['auctions', 'bayesian-games']
    },
    {
        id: 'q-app-cyber-random-1',
        category: 'applications',
        level: 'intermediate',
        prompt: `
            <p>Trong an ninh mạng, vì sao “random hóa” (kiểm tra/tuần tra) có thể hiệu quả?</p>
        `,
        choices: [
            { id: 'a', text: 'Vì random luôn tốt hơn mọi chiến lược khác.' },
            { id: 'b', text: 'Vì nó làm attacker khó dự đoán và tối ưu hóa theo pattern phòng thủ.' },
            { id: 'c', text: 'Vì attacker không bao giờ quan sát được gì.' },
            { id: 'd', text: 'Vì random hóa giúp giảm chi phí về 0.' }
        ],
        correctChoiceId: 'b',
        explanation: `
            <p><strong>Đúng:</strong> Trong trò chơi đối kháng, nếu phòng thủ có pattern cố định, attacker sẽ né. Random hóa đúng cách là mixed strategy để tránh bị khai thác.</p>
        `,
        consequences: {
            a: '<p>Random không đúng xác suất sẽ bị khai thác. Bạn cần random theo rủi ro/tác động, không random mù.</p>',
            c: '<p>Attacker thường quan sát qua thời gian (phản hồi, logs, timing). Giả định họ “mù” sẽ làm bạn phòng thủ chủ quan.</p>',
            d: '<p>Random hóa không làm chi phí về 0; nó phân bổ chi phí hữu hạn thông minh hơn.</p>'
        },
        related: ['cybersecurity-games', 'mixed-strategy']
    },
    {
        id: 'q-equilibria-correlated-1',
        category: 'equilibria',
        level: 'advanced',
        prompt: `
            <p>Ví dụ nào minh họa tốt nhất cho <strong>correlated equilibrium</strong>?</p>
        `,
        choices: [
            { id: 'a', text: 'Hai người random độc lập 50/50 mà không có tín hiệu chung.' },
            { id: 'b', text: 'Đèn giao thông gửi tín hiệu chung (xanh/đỏ) và mọi người làm theo, không ai có lợi khi tự ý lệch.' },
            { id: 'c', text: 'Một người luôn chọn chiến lược trội.' },
            { id: 'd', text: 'Một trò chơi chỉ có 1 cân bằng Nash thuần.' }
        ],
        correctChoiceId: 'b',
        explanation: `
            <p><strong>Đúng:</strong> Correlated equilibrium cho phép một “tín hiệu” (mediator) tạo tương quan giữa hành động của người chơi.</p>
            <p>Khác với mixed strategy độc lập, correlated equilibrium dùng tín hiệu chung để phối hợp.</p>
        `,
        consequences: {
            a: '<p>Bạn sẽ nhầm correlated equilibrium với mixed strategy. Kết quả: bỏ lỡ cách “điều phối” bằng tín hiệu chung.</p>',
            c: '<p>Dominance không liên quan trực tiếp. Bạn sẽ áp sai công cụ và không hiểu vai trò của mediator.</p>',
            d: '<p>Số lượng Nash không quyết định correlated equilibrium. Nhầm lẫn khiến bạn đánh giá sai thiết kế điều phối.</p>'
        },
        related: ['correlated-equilibrium', 'traffic-routing']
    },
    {
        id: 'q-equilibria-ess-1',
        category: 'equilibria',
        level: 'advanced',
        prompt: `
            <p>Một chiến lược là <strong>ESS (Evolutionary Stable Strategy)</strong> khi nào?</p>
        `,
        choices: [
            { id: 'a', text: 'Khi nó cho payoff cao nhất trong một vòng.' },
            { id: 'b', text: 'Khi nó không thể bị một chiến lược hiếm mới “xâm nhập” và thay thế trong quần thể.' },
            { id: 'c', text: 'Khi nó luôn là chiến lược trội.' },
            { id: 'd', text: 'Khi mọi người đồng ý bằng miệng.' }
        ],
        correctChoiceId: 'b',
        explanation: `
            <p><strong>Đúng:</strong> ESS là khái niệm ổn định trong động lực học học hỏi/bắt chước: chiến lược mới xuất hiện hiếm không thể “ăn” chiến lược hiện hữu.</p>
        `,
        consequences: {
            a: '<p>Bạn sẽ tối ưu ngắn hạn và bỏ qua tính bền. Chiến lược thắng một vòng có thể thua khi người khác thích nghi.</p>',
            c: '<p>Nhiều ESS không phải chiến lược trội. Nếu bạn chờ dominance, bạn sẽ kết luận sai rằng không có ổn định.</p>',
            d: '<p>Đồng ý miệng không tạo ổn định nếu payoff khuyến khích phá luật. Văn hóa bền cần incentives lặp lại.</p>'
        },
        related: ['evolutionary-stable', 'repeated-games']
    },
    {
        id: 'q-strategies-signaling-vs-screening-1',
        category: 'strategies',
        level: 'intermediate',
        prompt: `
            <p>Phân biệt đúng giữa <strong>signaling</strong> và <strong>screening</strong> là gì?</p>
        `,
        choices: [
            { id: 'a', text: 'Signaling là bên thiếu thông tin gửi tín hiệu; screening là bên có thông tin tự đánh giá.' },
            { id: 'b', text: 'Signaling là bên có thông tin riêng phát tín hiệu; screening là bên thiếu thông tin thiết kế cơ chế để phân loại.' },
            { id: 'c', text: 'Hai khái niệm giống nhau.' },
            { id: 'd', text: 'Chỉ áp dụng trong marketing.' }
        ],
        correctChoiceId: 'b',
        explanation: `
            <p><strong>Đúng:</strong> Bên có thông tin riêng (type) có thể <strong>signal</strong>. Bên thiếu thông tin có thể <strong>screen</strong> bằng bài test/gói lựa chọn/hợp đồng.</p>
        `,
        consequences: {
            a: '<p>Đảo vai sẽ làm bạn thiết kế sai. Ví dụ tuyển dụng: ứng viên signal, công ty screen. Nhầm sẽ tạo quy trình không phân loại được.</p>',
            c: '<p>Bạn sẽ bỏ lỡ công cụ mạnh để xử lý adverse selection, dẫn tới chất lượng thị trường giảm.</p>',
            d: '<p>Ứng dụng rộng: bảo hiểm, tín dụng, tuyển dụng, marketplace, an ninh… Nhầm phạm vi làm bạn bỏ lỡ cơ chế quan trọng.</p>'
        },
        related: ['signaling-screening', 'bayesian-games']
    },
    {
        id: 'q-app-climate-1',
        category: 'applications',
        level: 'intermediate',
        prompt: `
            <p>Trong hợp tác khí hậu toàn cầu, cấu trúc trò chơi thường giống gì nhất?</p>
        `,
        choices: [
            { id: 'a', text: 'Trò chơi phối hợp thuần (coordination) không có free rider.' },
            { id: 'b', text: 'Hàng hóa công + free rider: mỗi nước hưởng lợi nếu mọi nước giảm phát thải, nhưng từng nước muốn trì hoãn để tránh chi phí.' },
            { id: 'c', text: 'Zero-sum: nước này giảm thì nước kia tăng.' },
            { id: 'd', text: 'Không phải trò chơi vì chỉ có tự nhiên.' }
        ],
        correctChoiceId: 'b',
        explanation: `
            <p><strong>Đúng:</strong> Khí hậu ổn định là hàng hóa công toàn cầu. Incentive cá nhân và tập thể lệch nhau tạo free rider.</p>
        `,
        consequences: {
            a: '<p>Bỏ qua free rider khiến bạn thiết kế chính sách quá “ngây thơ”, thiếu cơ chế giám sát và ràng buộc.</p>',
            c: '<p>Nhìn zero-sum làm bạn bỏ lỡ giải pháp positive-sum: công nghệ sạch, liên kết thương mại, quỹ chuyển đổi.</p>',
            d: '<p>Dù tự nhiên là nền, nhưng hành vi quốc gia/doanh nghiệp tạo kết quả. Bỏ game theory làm bạn không xử lý được incentives.</p>'
        },
        related: ['public-policy-climate', 'public-goods', 'tragedy-of-commons']
    },
    {
        id: 'q-cases-open-source-1',
        category: 'cases',
        level: 'intermediate',
        prompt: `
            <p>Vấn đề “open source commons” thường thất bại vì lý do nào?</p>
        `,
        choices: [
            { id: 'a', text: 'Vì open source luôn kém chất lượng.' },
            { id: 'b', text: 'Vì free rider: nhiều bên hưởng lợi nhưng không đóng góp, khiến gánh bảo trì rơi vào số ít.' },
            { id: 'c', text: 'Vì không có người dùng.' },
            { id: 'd', text: 'Vì không có license.' }
        ],
        correctChoiceId: 'b',
        explanation: `
            <p><strong>Đúng:</strong> Đây là cấu trúc hàng hóa công: giá trị phân tán, chi phí bảo trì tập trung. Nếu không có cơ chế tài trợ/governance, dự án dễ kiệt sức.</p>
        `,
        consequences: {
            a: '<p>Đổ lỗi chất lượng khiến bạn bỏ qua incentives. Giải pháp đúng thường là tài trợ, governance, security process, không phải “chê”.</p>',
            c: '<p>Thường dự án có nhiều người dùng. Vấn đề là bảo trì và tài trợ, không phải adoption.</p>',
            d: '<p>License quan trọng pháp lý, nhưng free rider vẫn tồn tại dù license rõ. Nhầm lẫn làm bạn chữa sai bệnh.</p>'
        },
        related: ['open-source-commons-case', 'public-goods', 'mechanism-design']
    },
    {
        id: 'q-cases-cartel-1',
        category: 'cases',
        level: 'advanced',
        prompt: `
            <p>Trong cartel/quota, vì sao thỏa thuận thường dễ bị phá vỡ?</p>
        `,
        choices: [
            { id: 'a', text: 'Vì không ai muốn lợi nhuận.' },
            { id: 'b', text: 'Vì mỗi thành viên có động cơ lén vượt quota để hưởng lợi khi người khác vẫn giữ kỷ luật.' },
            { id: 'c', text: 'Vì đó luôn là coordination game thuần.' },
            { id: 'd', text: 'Vì trò chơi không lặp lại.' }
        ],
        correctChoiceId: 'b',
        explanation: `
            <p><strong>Đúng:</strong> Đây là song đề tù nhân trong trò chơi lặp lại. Mỗi bên muốn “ăn gian” một chút nếu tin người khác vẫn hợp tác.</p>
        `,
        consequences: {
            a: '<p>Đổ lỗi cảm xúc khiến bạn bỏ qua incentives và cơ chế giám sát/trừng phạt.</p>',
            c: '<p>Không chỉ phối hợp, còn có cám dỗ phá vỡ. Nhầm loại trò chơi làm bạn đánh giá sai tính bền.</p>',
            d: '<p>Cartel thường lặp lại. Vấn đề là discount factor, quan sát và trừng phạt, không phải “không lặp lại”.</p>'
        },
        related: ['opec-cartel-case', 'repeated-games', 'prisoners-dilemma']
    },
    {
        id: 'q-cases-ad-auction-1',
        category: 'cases',
        level: 'advanced',
        prompt: `
            <p>Trong đấu giá quảng cáo, vì sao nền tảng thường không chỉ chọn người <strong>bid cao nhất</strong>?</p>
        `,
        choices: [
            { id: 'a', text: 'Vì nền tảng không muốn kiếm tiền.' },
            { id: 'b', text: 'Vì chất lượng/relevance ảnh hưởng trải nghiệm người dùng, CTR và doanh thu dài hạn nên cơ chế kết hợp bid với quality score.' },
            { id: 'c', text: 'Vì bid cao luôn là spam.' },
            { id: 'd', text: 'Vì đấu giá quảng cáo là zero-sum nên không cần chất lượng.' }
        ],
        correctChoiceId: 'b',
        explanation: `
            <p><strong>Đúng:</strong> Nếu quảng cáo kém liên quan luôn thắng, người dùng rời bỏ, làm doanh thu dài hạn giảm. Cơ chế tốt căn chỉnh incentives để advertiser tối ưu cả bid và chất lượng.</p>
        `,
        consequences: {
            a: '<p>Bạn sẽ hiểu sai mục tiêu nền tảng và tối ưu sai chiến lược (chỉ tăng bid) thay vì tối ưu relevance/conversion.</p>',
            c: '<p>Bid cao không đồng nghĩa spam. Nếu bạn định kiến vậy, bạn sẽ bỏ lỡ phân tích cơ chế và cải thiện chất lượng.</p>',
            d: '<p>Bỏ chất lượng làm cơ chế tự phá doanh thu dài hạn. Đây là bài toán incentive alignment, không chỉ zero-sum.</p>'
        },
        related: ['ad-auctions-case', 'auctions', 'mechanism-design']
    },
    {
        id: 'q-app-bank-run-1',
        category: 'applications',
        level: 'advanced',
        prompt: `
            <p>Bank run thường được xem là trò chơi gì?</p>
        `,
        choices: [
            { id: 'a', text: 'Trò chơi phối hợp: nếu bạn tin người khác rút tiền, rút sớm là best response dù ngân hàng có thể ổn nếu mọi người bình tĩnh.' },
            { id: 'b', text: 'Trò chơi zero-sum: tiền của bạn là tiền của người khác.' },
            { id: 'c', text: 'Không phải trò chơi vì ngân hàng quyết định hết.' },
            { id: 'd', text: 'Song đề tù nhân một lần luôn dẫn tới phản bội.' }
        ],
        correctChoiceId: 'a',
        explanation: `
            <p><strong>Đúng:</strong> Bank run là coordination failure. Kỳ vọng tự củng cố làm cân bằng xấu xuất hiện.</p>
        `,
        consequences: {
            b: '<p>Nhìn zero-sum khiến bạn bỏ lỡ biện pháp tạo common knowledge (bảo hiểm tiền gửi, thông tin minh bạch, lender of last resort).</p>',
            c: '<p>Bạn sẽ bỏ qua động lực kỳ vọng của người gửi tiền. Giải pháp chỉ dựa “mệnh lệnh” thường không đủ.</p>',
            d: '<p>Bank run giống Stag Hunt/coordination hơn PD. Nhầm lẫn làm bạn thiết kế sai cơ chế ổn định.</p>'
        },
        related: ['coordination-games', 'information-timing']
    }
];
