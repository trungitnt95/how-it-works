// Game Theory - Foundations

const gameTheoryFoundations = [
    {
        id: 'what-is-game-theory',
        icon: '♟️',
        title: 'Lý thuyết trò chơi là gì?',
        subtitle: 'Khoa học của quyết định chiến lược',
        category: 'foundations',
        level: 'beginner',
        connections: ['players-strategies-payoffs', 'normal-extensive-form', 'nash-equilibrium'],
        simple: `
            <p><strong>Lý thuyết trò chơi</strong> nghiên cứu những tình huống mà kết quả của một người phụ thuộc vào lựa chọn của nhiều người khác.</p>
            <div class="example-box">
                <strong>Ví dụ đời thường:</strong> Bạn định giảm giá sản phẩm. Kết quả không chỉ phụ thuộc vào giá mới của bạn, mà còn phụ thuộc vào đối thủ có giảm theo không, khách hàng có chờ khuyến mãi tiếp không, và nhà cung cấp có đổi điều khoản không.
            </div>
            <p>Nó không hỏi "quyết định nào tốt nhất trong chân không?", mà hỏi "quyết định nào tốt nhất khi người khác cũng đang suy nghĩ và phản ứng?".</p>
        `,
        detail: `
            <h4>Một tình huống trở thành "trò chơi" khi có đủ 4 yếu tố</h4>
            <ol>
                <li><strong>Nhiều tác nhân:</strong> ít nhất hai người, công ty, quốc gia, thuật toán hoặc nhóm lợi ích.</li>
                <li><strong>Lựa chọn chiến lược:</strong> mỗi bên có nhiều hành động khả thi.</li>
                <li><strong>Phụ thuộc lẫn nhau:</strong> kết quả của bạn phụ thuộc vào lựa chọn của bên kia.</li>
                <li><strong>Payoff:</strong> mỗi kết quả đem lại lợi ích, chi phí, rủi ro hoặc uy tín khác nhau.</li>
            </ol>
            <h4>Khác với ra quyết định thông thường</h4>
            <table>
                <tr><th>Ra quyết định cá nhân</th><th>Ra quyết định chiến lược</th></tr>
                <tr><td>Thời tiết xấu thì mang ô.</td><td>Đối thủ giảm giá thì mình phản ứng thế nào?</td></tr>
                <tr><td>Xác suất đến từ tự nhiên.</td><td>Xác suất đến từ hành vi người khác.</td></tr>
                <tr><td>Tối ưu theo dữ liệu.</td><td>Tối ưu theo phản ứng dự đoán.</td></tr>
            </table>
            <div class="tip-box">
                <strong>Câu hỏi lõi:</strong> Nếu tôi chọn A, người kia sẽ muốn làm gì? Nếu họ làm vậy, tôi còn muốn chọn A nữa không?
            </div>
        `,
        advanced: `
            <h4>Ba lớp phân tích</h4>
            <ul>
                <li><strong>Descriptive:</strong> mô tả vì sao người chơi đang hành xử như hiện tại.</li>
                <li><strong>Predictive:</strong> dự đoán kết quả ổn định nếu mọi bên tiếp tục tối ưu.</li>
                <li><strong>Prescriptive:</strong> đề xuất đổi chiến lược hoặc đổi luật chơi để có kết quả tốt hơn.</li>
            </ul>
            <h4>Điểm mạnh và giới hạn</h4>
            <p>Lý thuyết trò chơi mạnh khi incentives rõ, lựa chọn hữu hạn và người chơi có khả năng phản ứng. Nó yếu hơn khi cảm xúc, chuẩn mực xã hội, thiếu thông tin, nhận thức sai lệch hoặc ràng buộc tổ chức chi phối quá lớn.</p>
            <div class="warning-box">
                <strong>Không nên dùng máy móc:</strong> mô hình là bản đồ, không phải lãnh thổ. Payoff sai hoặc bỏ sót người chơi ẩn sẽ dẫn tới kết luận sai.
            </div>
        `
    },
    {
        id: 'players-strategies-payoffs',
        icon: '🧩',
        title: 'Người chơi, chiến lược, payoff',
        subtitle: 'Ba khối xây dựng cơ bản nhất',
        category: 'foundations',
        level: 'beginner',
        connections: ['what-is-game-theory', 'utility-preferences', 'normal-extensive-form'],
        simple: `
            <p>Mọi phân tích game theory bắt đầu bằng ba câu hỏi: <strong>ai chơi</strong>, <strong>họ có thể làm gì</strong>, và <strong>mỗi kết quả đáng giá bao nhiêu</strong>.</p>
            <div class="formula-box">
                Trò chơi = Người chơi + Chiến lược + Payoff + Thông tin + Thứ tự hành động
            </div>
            <p>Nếu bạn chưa viết rõ ba phần đầu, mọi kết luận phía sau chỉ là cảm tính.</p>
        `,
        detail: `
            <h4>1. Người chơi</h4>
            <p>Người chơi có thể là cá nhân, công ty, phòng ban, quốc gia, cộng đồng, bot giao dịch hoặc thuật toán đề xuất.</p>
            <h4>2. Chiến lược</h4>
            <p>Chiến lược là kế hoạch hành động, không chỉ một hành động lẻ. Trong trò chơi nhiều bước, chiến lược phải nói rõ sẽ làm gì trong từng tình huống.</p>
            <h4>3. Payoff</h4>
            <p>Payoff là thứ người chơi muốn tối đa hóa: tiền, thị phần, phiếu bầu, an toàn, danh tiếng, thời gian, quyền lực, hoặc sự ổn định.</p>
            <table>
                <tr><th>Ví dụ</th><th>Người chơi</th><th>Chiến lược</th><th>Payoff</th></tr>
                <tr><td>Đàm phán lương</td><td>Ứng viên, công ty</td><td>Offer cao/thấp, chấp nhận/từ chối</td><td>Lương, chi phí, thiện chí</td></tr>
                <tr><td>Chiến tranh giá</td><td>Hai đối thủ</td><td>Giữ giá, giảm giá</td><td>Lợi nhuận, thị phần</td></tr>
                <tr><td>Giao thông</td><td>Tài xế</td><td>Đi đúng luật, chen lấn</td><td>Thời gian, phạt, an toàn</td></tr>
            </table>
        `,
        advanced: `
            <h4>Payoff không nhất thiết là tiền</h4>
            <p>Trong nhiều trò chơi thực, payoff là vector gồm nhiều mục tiêu. Ví dụ một chính trị gia tối đa hóa cả phiếu bầu, tài trợ, quyền lực nội bộ và hình ảnh công chúng.</p>
            <h4>Người chơi ẩn</h4>
            <p>Phân tích sai thường đến từ việc quên người chơi ẩn: regulator, nhà cung cấp, nhân viên vận hành, cộng đồng mạng, cổ đông, báo chí hoặc thuật toán nền tảng.</p>
            <div class="tip-box">
                <strong>Mẹo:</strong> Nếu hành vi của ai đó làm bạn thấy "phi lý", có thể bạn đang đo sai payoff của họ.
            </div>
        `
    },
    {
        id: 'information-timing',
        icon: '⏱️',
        title: 'Thông tin & thứ tự hành động',
        subtitle: 'Ai biết gì, biết khi nào, và ai đi trước?',
        category: 'foundations',
        level: 'beginner',
        connections: ['normal-extensive-form', 'bayesian-games', 'signaling-screening'],
        simple: `
            <p>Cùng một payoff nhưng khác thông tin hoặc khác thứ tự hành động sẽ tạo ra trò chơi hoàn toàn khác.</p>
            <div class="example-box">
                <strong>Ví dụ:</strong> Người bán biết xe cũ có lỗi hay không, người mua không biết. Đây là thông tin bất cân xứng, nên người mua sẽ ép giá hoặc đòi bảo hành.
            </div>
        `,
        detail: `
            <h4>Các kiểu thông tin quan trọng</h4>
            <ul>
                <li><strong>Thông tin hoàn hảo:</strong> người chơi quan sát được mọi hành động trước đó, như cờ vua.</li>
                <li><strong>Thông tin không hoàn hảo:</strong> người chơi không thấy đầy đủ hành động hoặc trạng thái, như bài poker.</li>
                <li><strong>Thông tin đầy đủ:</strong> mọi người biết payoff và loại của nhau.</li>
                <li><strong>Thông tin không đầy đủ:</strong> có người giữ thông tin riêng, như chất lượng sản phẩm, năng lực ứng viên, ý định thật.</li>
            </ul>
            <h4>Thứ tự hành động</h4>
            <p>Người đi trước có thể tạo cam kết, chiếm vị trí, phát tín hiệu. Người đi sau có lợi thế quan sát và phản ứng. Vì vậy "first mover advantage" không phải lúc nào cũng đúng.</p>
            <table>
                <tr><th>Tình huống</th><th>Đi trước có lợi khi</th><th>Đi sau có lợi khi</th></tr>
                <tr><td>Sản phẩm mới</td><td>Có network effect, patent, thương hiệu</td><td>Có thể học từ lỗi người đi trước</td></tr>
                <tr><td>Đàm phán</td><td>Anchor được kỳ vọng</td><td>Quan sát ngân sách và áp lực đối phương</td></tr>
                <tr><td>Chiến lược quân sự</td><td>Chiếm vị trí khó thay đổi</td><td>Tránh lộ ý định quá sớm</td></tr>
            </table>
        `,
        advanced: `
            <h4>Information set</h4>
            <p>Trong dạng cây, information set gom các nút mà người chơi không phân biệt được. Nếu không biết mình đang ở nút nào, chiến lược phải hợp lý cho toàn bộ tập thông tin đó.</p>
            <h4>Common knowledge</h4>
            <p>Không chỉ cần "mọi người biết", mà còn cần mọi người biết rằng mọi người biết, và cứ thế. Nhiều thất bại phối hợp xảy ra vì thiếu common knowledge.</p>
            <div class="warning-box">
                <strong>Bẫy phân tích:</strong> đừng giả định đối thủ biết điều bạn biết. Trong thị trường thật, độ trễ thông tin, nhiễu truyền thông và niềm tin sai tạo ra hành vi khác mô hình chuẩn.
            </div>
        `
    },
    {
        id: 'normal-extensive-form',
        icon: '🧮',
        title: 'Dạng ma trận & dạng cây',
        subtitle: 'Hai cách biểu diễn trò chơi',
        category: 'foundations',
        level: 'beginner',
        connections: ['players-strategies-payoffs', 'information-timing', 'subgame-perfect'],
        simple: `
            <p><strong>Dạng ma trận</strong> phù hợp khi người chơi chọn đồng thời. <strong>Dạng cây</strong> phù hợp khi hành động diễn ra theo thứ tự.</p>
            <div class="example-box">
                Giảm giá cùng lúc thường vẽ bằng ma trận. Đàm phán nhiều vòng, ra mắt sản phẩm rồi đối thủ phản ứng, hoặc kiện tụng theo bước thường vẽ bằng cây.
            </div>
        `,
        detail: `
            <h4>Dạng ma trận, hay normal form</h4>
            <p>Mỗi hàng là chiến lược của người chơi A, mỗi cột là chiến lược của người chơi B, mỗi ô là payoff của cả hai.</p>
            <table>
                <tr><th></th><th>B giữ giá</th><th>B giảm giá</th></tr>
                <tr><td><strong>A giữ giá</strong></td><td>5, 5</td><td>1, 7</td></tr>
                <tr><td><strong>A giảm giá</strong></td><td>7, 1</td><td>2, 2</td></tr>
            </table>
            <h4>Dạng cây, hay extensive form</h4>
            <p>Dùng khi có thứ tự hành động. Mỗi nút là một thời điểm ra quyết định, mỗi nhánh là một hành động, mỗi lá là kết quả cuối.</p>
            <div class="diagram-box">
                <span>A ra giá cao/thấp</span>
                <span>→</span>
                <span>B chấp nhận/từ chối</span>
                <span>→</span>
                <span>Payoff cuối</span>
            </div>
        `,
        advanced: `
            <h4>Chiến lược trong dạng cây rộng hơn hành động</h4>
            <p>Nếu B có thể phải phản ứng ở nhiều nút khác nhau, chiến lược của B là một kế hoạch đầy đủ cho mọi nút có thể tới, kể cả nút thực tế không xảy ra.</p>
            <h4>Backward induction</h4>
            <p>Với trò chơi tuần tự có thông tin hoàn hảo, thường giải từ cuối về đầu: người cuối sẽ chọn gì, người trước biết vậy nên chọn gì, cứ lùi dần đến bước đầu tiên.</p>
            <div class="tip-box">
                <strong>Mẹo chọn biểu diễn:</strong> nếu câu hỏi là "nếu cả hai chọn cùng lúc thì sao?", dùng ma trận. Nếu câu hỏi là "ai đi trước tạo áp lực thế nào?", dùng cây.
            </div>
        `
    },
    {
        id: 'utility-preferences',
        icon: '🎚️',
        title: 'Utility, sở thích & lý trí',
        subtitle: 'Người chơi đang tối đa hóa điều gì?',
        category: 'foundations',
        level: 'intermediate',
        connections: ['players-strategies-payoffs', 'bounded-rationality', 'mechanism-design'],
        simple: `
            <p><strong>Utility</strong> là cách mô hình hóa mức độ người chơi thích một kết quả. Payoff càng cao thì kết quả càng hấp dẫn.</p>
            <p>Nhưng con người không chỉ tối đa hóa tiền. Họ còn quan tâm đến công bằng, danh tiếng, rủi ro, cảm xúc và quyền kiểm soát.</p>
        `,
        detail: `
            <h4>Utility giúp so sánh lựa chọn</h4>
            <p>Nếu kết quả A có utility 10 và kết quả B có utility 6, mô hình nói người chơi thích A hơn B. Con số không cần là tiền thật, nhưng thứ tự ưu tiên phải nhất quán.</p>
            <h4>Rationality trong game theory</h4>
            <ul>
                <li>Người chơi có mục tiêu tương đối ổn định.</li>
                <li>Người chơi chọn chiến lược tốt nhất theo niềm tin của họ.</li>
                <li>Người chơi hiểu rằng người khác cũng đang tối ưu.</li>
            </ul>
            <div class="warning-box">
                <strong>Lưu ý:</strong> "Lý trí" không có nghĩa là đạo đức, thông minh hay đúng. Một người có mục tiêu xấu vẫn có thể hành động lý trí theo mục tiêu đó.
            </div>
        `,
        advanced: `
            <h4>Risk attitude</h4>
            <p>Cùng một expected value nhưng người sợ rủi ro, trung lập rủi ro và thích rủi ro sẽ chọn khác nhau. Vì vậy payoff nên phản ánh utility, không chỉ tiền kỳ vọng.</p>
            <h4>Social preferences</h4>
            <p>Trong ultimatum game, nhiều người từ chối offer quá thấp dù mất tiền, vì payoff của họ bao gồm công bằng và trừng phạt hành vi thiếu tôn trọng.</p>
            <h4>Behavioral game theory</h4>
            <p>Nhánh này đưa tâm lý học vào game theory: loss aversion, framing, reciprocity, overconfidence, bounded rationality và learning dynamics.</p>
        `
    },
    {
        id: 'dominant-dominated',
        icon: '🏆',
        title: 'Chiến lược trội & bị thống trị',
        subtitle: 'Bước lọc đầu tiên khi đọc ma trận',
        category: 'foundations',
        level: 'beginner',
        connections: ['prisoners-dilemma', 'nash-equilibrium', 'pareto-optimality'],
        simple: `
            <p>Một <strong>chiến lược trội</strong> là chiến lược tốt hơn các lựa chọn khác bất kể đối phương làm gì. Một chiến lược <strong>bị thống trị</strong> luôn tệ hơn chiến lược khác.</p>
            <div class="example-box">
                Trong song đề tù nhân chuẩn, "phản bội" là chiến lược trội cho mỗi tù nhân: nếu người kia im lặng, phản bội tốt hơn; nếu người kia phản bội, phản bội vẫn tốt hơn.
            </div>
        `,
        detail: `
            <h4>Cách kiểm tra</h4>
            <ol>
                <li>Giữ nguyên từng lựa chọn của đối phương.</li>
                <li>So payoff của các chiến lược của mình trong từng cột hoặc từng tình huống.</li>
                <li>Nếu một chiến lược luôn cao hơn, nó trội nghiêm ngặt.</li>
                <li>Nếu một chiến lược luôn thấp hơn, nó bị thống trị và có thể loại bỏ.</li>
            </ol>
            <h4>Iterated elimination</h4>
            <p>Sau khi loại một chiến lược bị thống trị, ma trận nhỏ lại. Việc này có thể làm lộ thêm chiến lược bị thống trị khác.</p>
            <div class="tip-box">
                <strong>Ứng dụng:</strong> trong đàm phán, nếu một lựa chọn luôn làm bạn tệ hơn lựa chọn khác, đừng giữ nó chỉ vì "có thêm option".
            </div>
        `,
        advanced: `
            <h4>Strict vs weak dominance</h4>
            <p>Strict dominance nghĩa là luôn tốt hơn hẳn. Weak dominance nghĩa là không bao giờ tệ hơn và đôi khi tốt hơn. Loại weakly dominated strategy cần cẩn thận vì thứ tự loại có thể ảnh hưởng kết quả.</p>
            <h4>Dominance không giải được mọi trò chơi</h4>
            <p>Nhiều trò chơi không có chiến lược trội. Khi đó cần dùng best response, Nash equilibrium, mixed strategy hoặc mô hình động.</p>
        `
    },
    {
        id: 'bounded-rationality',
        icon: '🧠',
        title: 'Lý trí giới hạn',
        subtitle: 'Con người tối ưu trong giới hạn thông tin và năng lực',
        category: 'foundations',
        level: 'intermediate',
        connections: ['utility-preferences', 'level-k-thinking', 'behavioral-applications'],
        simple: `
            <p>Trong đời thực, người chơi không tính toán hoàn hảo. Họ dùng kinh nghiệm, cảm xúc, thói quen, chuẩn mực và thông tin không đầy đủ.</p>
            <p><strong>Lý trí giới hạn</strong> giúp giải thích vì sao hành vi thật lệch khỏi mô hình "người tối ưu tuyệt đối".</p>
        `,
        detail: `
            <h4>Các giới hạn phổ biến</h4>
            <ul>
                <li><strong>Giới hạn thông tin:</strong> không biết hết payoff, ý định, năng lực của người khác.</li>
                <li><strong>Giới hạn tính toán:</strong> không thể xét mọi phản ứng nhiều bước.</li>
                <li><strong>Giới hạn chú ý:</strong> bị ảnh hưởng bởi framing, cảm xúc, thời gian, áp lực xã hội.</li>
                <li><strong>Giới hạn học hỏi:</strong> học từ mẫu nhỏ, phản hồi chậm hoặc dữ liệu nhiễu.</li>
            </ul>
            <div class="example-box">
                <strong>Ví dụ:</strong> Trong chiến tranh giá, lãnh đạo có thể biết giảm giá làm cả ngành thiệt, nhưng vẫn giảm vì áp lực quý hiện tại, KPI thị phần và sợ đối thủ đi trước.
            </div>
        `,
        advanced: `
            <h4>Level-k thinking</h4>
            <p>Level 0 chọn ngẫu nhiên hoặc theo thói quen. Level 1 tối ưu trước Level 0. Level 2 tối ưu trước Level 1. Nhiều trò chơi thực không đạt common knowledge of rationality nên level-k dự đoán tốt hơn Nash.</p>
            <h4>Satisficing</h4>
            <p>Thay vì tối ưu tuyệt đối, người chơi chọn phương án "đủ tốt" khi chi phí tìm kiếm thêm vượt lợi ích kỳ vọng.</p>
            <div class="tip-box">
                <strong>Khi áp dụng:</strong> hãy phân tích cả mô hình chuẩn lẫn hành vi thực tế. Một chiến lược thắng trên giấy có thể thua nếu đối phương không hiểu hoặc không tin luật chơi.
            </div>
        `
    }
];
