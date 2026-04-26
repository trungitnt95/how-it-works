// Game Theory - Equilibria and solution concepts

const gameTheoryEquilibria = [
    {
        id: 'nash-equilibrium',
        icon: '⚖️',
        title: 'Cân bằng Nash',
        subtitle: 'Không ai muốn đổi một mình',
        category: 'equilibria',
        level: 'beginner',
        connections: ['prisoners-dilemma', 'mixed-strategy', 'pareto-optimality'],
        simple: `
            <p><strong>Cân bằng Nash</strong> là trạng thái mà mỗi người đang chọn phản ứng tốt nhất với lựa chọn của người khác. Không ai có lợi khi đổi chiến lược một mình.</p>
            <div class="example-box">
                Nếu cả hai công ty đều giảm giá, mỗi bên có thể ghét lợi nhuận thấp. Nhưng nếu một bên tăng giá một mình, khách chạy sang bên kia. Vì vậy cả hai mắc kẹt ở giảm giá.
            </div>
        `,
        detail: `
            <h4>Cách tìm Nash trong ma trận 2 người</h4>
            <ol>
                <li>Với mỗi cột, tìm hàng đem payoff cao nhất cho người chơi hàng.</li>
                <li>Với mỗi hàng, tìm cột đem payoff cao nhất cho người chơi cột.</li>
                <li>Ô nào là best response của cả hai cùng lúc là Nash equilibrium.</li>
            </ol>
            <h4>Ý nghĩa đúng</h4>
            <p>Nash không có nghĩa là tốt, công bằng, tối ưu xã hội hay ổn về đạo đức. Nó chỉ có nghĩa là ổn định trước việc đổi đơn phương.</p>
            <div class="warning-box">
                <strong>Bẫy phổ biến:</strong> nếu có một kết quả tốt hơn cho cả hai nhưng cần cả hai cùng đổi, kết quả Nash vẫn có thể giữ mọi người ở trạng thái tệ.
            </div>
        `,
        advanced: `
            <h4>Tồn tại và đa trị</h4>
            <p>Nhiều trò chơi có nhiều Nash equilibrium. Một số không có Nash thuần nhưng có Nash hỗn hợp nếu cho phép random hóa chiến lược.</p>
            <h4>Equilibrium selection</h4>
            <p>Khi có nhiều cân bằng, câu hỏi chuyển thành: cân bằng nào sẽ được chọn? Focal point, lịch sử, chuẩn mực, quyền lực, thông tin và cam kết có thể quyết định kết quả.</p>
        `
    },
    {
        id: 'best-response',
        icon: '🎯',
        title: 'Best Response',
        subtitle: 'Phản ứng tốt nhất trước lựa chọn của người khác',
        category: 'equilibria',
        level: 'beginner',
        connections: ['nash-equilibrium', 'dominant-dominated', 'mixed-strategy'],
        simple: `
            <p><strong>Best response</strong> là chiến lược đem payoff cao nhất cho bạn nếu đối phương chọn một chiến lược cụ thể.</p>
            <p>Nash equilibrium là nơi các best response gặp nhau.</p>
        `,
        detail: `
            <h4>Vì sao best response quan trọng?</h4>
            <p>Nó buộc bạn phân tích theo góc nhìn đối phương. Bạn không chỉ hỏi "tôi thích gì", mà hỏi "nếu tôi làm vậy, phản ứng hợp lý của họ là gì?".</p>
            <h4>Ví dụ trong kinh doanh</h4>
            <ul>
                <li>Nếu bạn giảm giá, best response của đối thủ có thể là giảm theo.</li>
                <li>Nếu bạn nâng chất lượng, best response của đối thủ có thể là nhấn mạnh bảo hành.</li>
                <li>Nếu bạn khóa khách bằng hợp đồng dài hạn, best response của đối thủ có thể là trợ giá chuyển đổi.</li>
            </ul>
        `,
        advanced: `
            <h4>Best response correspondence</h4>
            <p>Khi có nhiều chiến lược cùng payoff cao nhất, best response không phải một điểm mà là một tập lựa chọn. Điều này thường tạo ra nhiều cân bằng.</p>
            <h4>Dynamic best response</h4>
            <p>Trong thị trường thật, người chơi có thể điều chỉnh dần theo best response qua nhiều vòng. Quá trình này có thể hội tụ, dao động hoặc hỗn loạn tùy cấu trúc payoff.</p>
        `
    },
    {
        id: 'mixed-strategy',
        icon: '🎲',
        title: 'Chiến lược hỗn hợp',
        subtitle: 'Random hóa để không bị khai thác',
        category: 'equilibria',
        level: 'intermediate',
        connections: ['matching-pennies', 'nash-equilibrium', 'cybersecurity-games'],
        simple: `
            <p>Khi chọn cố định sẽ bị đối thủ bắt bài, người chơi có thể random hóa giữa nhiều chiến lược theo xác suất nhất định.</p>
            <div class="example-box">
                Đá penalty: nếu cầu thủ luôn sút góc trái, thủ môn sẽ đoán được. Nếu thủ môn luôn bay phải, cầu thủ sẽ khai thác. Cả hai phải pha trộn lựa chọn.
            </div>
        `,
        detail: `
            <h4>Không phải random bừa</h4>
            <p>Trong cân bằng hỗn hợp, xác suất được chọn sao cho đối thủ indifferent giữa các lựa chọn của họ. Nếu đối thủ vẫn thích rõ một lựa chọn, bạn chưa random đúng.</p>
            <h4>Ứng dụng</h4>
            <ul>
                <li>Kiểm toán random để nhân viên không biết hồ sơ nào bị kiểm.</li>
                <li>Bảo mật random thời gian scan và honeypot.</li>
                <li>Thể thao random chiến thuật để đối thủ khó đọc bài.</li>
                <li>Đàm phán giữ một phần thông tin không chắc chắn để tránh bị ép.</li>
            </ul>
        `,
        advanced: `
            <h4>Support của mixed strategy</h4>
            <p>Support là tập chiến lược được chọn với xác suất dương. Trong cân bằng, mọi chiến lược trong support đem lại expected payoff bằng nhau.</p>
            <h4>Behavioral note</h4>
            <p>Con người thường random kém: tránh lặp quá nhiều, tạo pattern giả, hoặc bị cảm xúc kéo lệch. Trong môi trường đối kháng nghiêm túc, dùng cơ chế random thật có thể tốt hơn cảm tính.</p>
        `
    },
    {
        id: 'pareto-optimality',
        icon: '📈',
        title: 'Tối ưu Pareto',
        subtitle: 'Không thể làm ai tốt hơn mà không làm ai khác tệ hơn',
        category: 'equilibria',
        level: 'beginner',
        connections: ['nash-equilibrium', 'zero-sum-games', 'mechanism-design'],
        simple: `
            <p>Một kết quả là <strong>Pareto optimal</strong> nếu không thể cải thiện cho một người mà không làm ít nhất một người khác tệ hơn.</p>
            <p>Song đề tù nhân cho thấy Nash equilibrium có thể không Pareto optimal.</p>
        `,
        detail: `
            <h4>Pareto improvement</h4>
            <p>Nếu chuyển từ kết quả A sang B làm ít nhất một người tốt hơn và không ai tệ hơn, B là cải thiện Pareto so với A.</p>
            <h4>Ý nghĩa trong thực tế</h4>
            <ul>
                <li>Thương lượng nên tìm các cải thiện Pareto trước khi tranh phần chia.</li>
                <li>Quy trình nội bộ tốt có thể giảm chi phí cho nhiều bên cùng lúc.</li>
                <li>Chuẩn chung có thể tăng lợi ích toàn ngành dù từng bên vẫn cạnh tranh.</li>
            </ul>
            <div class="warning-box">
                <strong>Pareto không giải quyết công bằng:</strong> một kết quả rất bất bình đẳng vẫn có thể Pareto optimal nếu không thể giúp bên yếu hơn mà không làm bên mạnh hơn mất gì.
            </div>
        `,
        advanced: `
            <h4>Efficiency vs distribution</h4>
            <p>Pareto nói về hiệu quả phân bổ, không nói về phân phối. Chính sách công thường phải cân bằng giữa tổng phúc lợi, công bằng và tính khả thi chính trị.</p>
            <h4>Kaldor-Hicks</h4>
            <p>Một thay đổi có thể được xem là hiệu quả nếu người được lợi có thể bù cho người bị thiệt và vẫn còn lợi. Vấn đề là "có thể bù" khác với "thực sự bù".</p>
        `
    },
    {
        id: 'subgame-perfect',
        icon: '🌳',
        title: 'Subgame Perfect Equilibrium',
        subtitle: 'Cân bằng đáng tin trong từng nhánh của trò chơi',
        category: 'equilibria',
        level: 'advanced',
        connections: ['normal-extensive-form', 'credible-commitment', 'backward-induction'],
        simple: `
            <p>Trong trò chơi tuần tự, một lời đe dọa có thể tạo Nash trên giấy nhưng không đáng tin khi tới lượt thật. <strong>Subgame perfect</strong> loại các đe dọa không credible.</p>
        `,
        detail: `
            <h4>Ví dụ đe dọa không đáng tin</h4>
            <p>Công ty lớn nói sẽ giảm giá đến lỗ để đuổi startup. Nhưng nếu startup đã vào thị trường và việc giảm giá làm công ty lớn lỗ nặng, lời đe dọa có thể không credible.</p>
            <h4>Backward induction</h4>
            <p>Giải từ cuối về đầu. Ở mỗi subgame, người chơi phải chọn tối ưu tại chính thời điểm đó, không chỉ tuyên bố trước.</p>
            <div class="tip-box">
                <strong>Ứng dụng:</strong> Khi nghe một lời đe dọa, hỏi: "Khi tới thời điểm thực hiện, họ còn muốn làm điều đó không?"
            </div>
        `,
        advanced: `
            <h4>Sequential rationality</h4>
            <p>Subgame perfect equilibrium yêu cầu chiến lược tối ưu trong mọi subgame. Nó mạnh hơn Nash equilibrium trong extensive-form games.</p>
            <h4>Cam kết làm thay đổi lời giải</h4>
            <p>Nếu người chơi có thể tự ràng buộc trước bằng hợp đồng, đầu tư không thể đảo ngược, cơ chế tự động hoặc cam kết công khai, một đe dọa trước đây không credible có thể trở nên credible.</p>
        `
    },
    {
        id: 'bayesian-games',
        icon: '🃏',
        title: 'Bayesian Games',
        subtitle: 'Trò chơi có thông tin riêng và niềm tin xác suất',
        category: 'equilibria',
        level: 'advanced',
        connections: ['information-timing', 'signaling-screening', 'auctions'],
        simple: `
            <p>Trong Bayesian game, người chơi không biết chắc đối phương thuộc loại nào: mạnh hay yếu, thật hay giả, rủi ro cao hay thấp. Họ dùng xác suất để hình thành niềm tin.</p>
        `,
        detail: `
            <h4>Thành phần thêm vào</h4>
            <ul>
                <li><strong>Type:</strong> thông tin riêng của người chơi, như chi phí thật, chất lượng thật, mức sẵn lòng trả.</li>
                <li><strong>Prior belief:</strong> niềm tin ban đầu về xác suất từng type.</li>
                <li><strong>Strategy by type:</strong> mỗi type có thể chọn hành vi khác nhau.</li>
                <li><strong>Update:</strong> quan sát tín hiệu rồi cập nhật niềm tin.</li>
            </ul>
            <h4>Ví dụ</h4>
            <p>Nhà tuyển dụng không biết ứng viên giỏi hay trung bình. Bằng cấp, portfolio, thử việc và reference là tín hiệu để cập nhật niềm tin.</p>
        `,
        advanced: `
            <h4>Bayesian Nash equilibrium</h4>
            <p>Mỗi type của mỗi người chơi chọn chiến lược tối ưu theo niềm tin về type của người khác và chiến lược của các type đó.</p>
            <h4>Ứng dụng mạnh</h4>
            <ul>
                <li>Đấu giá khi người mua có định giá riêng.</li>
                <li>Bảo hiểm khi khách hàng biết rủi ro của mình hơn công ty.</li>
                <li>Tín dụng khi ngân hàng không biết chất lượng người vay.</li>
                <li>An ninh khi phòng thủ không biết năng lực attacker.</li>
            </ul>
        `
    },
    {
        id: 'correlated-equilibrium',
        icon: '📡',
        title: 'Correlated Equilibrium',
        subtitle: 'Tín hiệu chung giúp người chơi phối hợp',
        category: 'equilibria',
        level: 'advanced',
        connections: ['coordination-games', 'traffic-routing', 'mechanism-design'],
        simple: `
            <p>Correlated equilibrium xuất hiện khi người chơi quan sát một tín hiệu chung và dùng nó để phối hợp, miễn là sau khi nhận tín hiệu không ai muốn lệch khỏi khuyến nghị.</p>
        `,
        detail: `
            <h4>Ví dụ trực quan</h4>
            <p>Đèn giao thông là tín hiệu chung. Nếu bạn thấy xanh và người khác thấy đỏ, cả hai làm theo tín hiệu sẽ tốt hơn tự đoán. Không ai muốn tự ý phá nếu luật và rủi ro đủ mạnh.</p>
            <h4>Khác mixed strategy</h4>
            <p>Mixed strategy thường là mỗi người random độc lập. Correlated equilibrium cho phép random có tương quan qua một tín hiệu chung.</p>
        `,
        advanced: `
            <h4>Mediator</h4>
            <p>Có thể hiểu như một mediator gửi khuyến nghị riêng cho từng người chơi. Nếu mỗi người tin mediator và làm theo là tối ưu sau khi nhận khuyến nghị, ta có correlated equilibrium.</p>
            <h4>Ứng dụng</h4>
            <ul>
                <li>Hệ thống định tuyến giao thông phân bổ luồng xe.</li>
                <li>Thị trường điện hoặc logistics cần điều phối tải.</li>
                <li>Nền tảng matching ghép tài xế, khách và tuyến đường.</li>
            </ul>
        `
    },
    {
        id: 'evolutionary-stable',
        icon: '🧬',
        title: 'Evolutionary Stable Strategy',
        subtitle: 'Chiến lược bền khi bị chiến lược mới xâm nhập',
        category: 'equilibria',
        level: 'advanced',
        connections: ['repeated-games', 'behavioral-applications', 'network-effects-platforms'],
        simple: `
            <p>Một chiến lược là ổn định tiến hóa nếu một nhóm đang dùng nó không dễ bị chiến lược hiếm mới xâm nhập và đánh bại.</p>
            <p>Nó hữu ích khi người chơi không tính toán hoàn hảo mà học, bắt chước và chọn lọc qua thời gian.</p>
        `,
        detail: `
            <h4>Từ sinh học sang xã hội</h4>
            <p>Khái niệm này xuất phát từ sinh học tiến hóa nhưng áp dụng được cho chuẩn mực xã hội, hành vi thị trường, giao thức kỹ thuật và văn hóa tổ chức.</p>
            <h4>Ví dụ</h4>
            <ul>
                <li>Một chuẩn giao tiếp trong công ty bền nếu người dùng chuẩn khác khó phối hợp.</li>
                <li>Một chiến lược pricing bền nếu đối thủ thử lệch hướng không có lợi lâu dài.</li>
                <li>Một quy tắc cộng đồng bền nếu người phá luật bị cô lập hoặc không được thưởng.</li>
            </ul>
        `,
        advanced: `
            <h4>Replicator dynamics</h4>
            <p>Chiến lược có payoff cao hơn trung bình sẽ tăng tỷ trọng trong quần thể. Qua thời gian, hệ có thể hội tụ về ESS, dao động hoặc phân mảnh thành nhiều nhóm.</p>
            <h4>Bài học quản trị</h4>
            <p>Muốn thay đổi văn hóa, không chỉ ra quy định. Cần làm cho hành vi mới có payoff xã hội cao hơn hành vi cũ trong các tương tác lặp lại.</p>
        `
    },
    {
        id: 'level-k-thinking',
        icon: '🪜',
        title: 'Level-k Thinking',
        subtitle: 'Tôi nghĩ anh nghĩ tôi nghĩ...',
        category: 'equilibria',
        level: 'intermediate',
        connections: ['bounded-rationality', 'beauty-contest', 'negotiation-bargaining'],
        simple: `
            <p>Level-k thinking mô hình hóa độ sâu suy luận chiến lược. Người chơi không phải ai cũng suy nghĩ vô hạn cấp như Nash chuẩn.</p>
            <ul>
                <li>Level 0: chọn theo bản năng hoặc ngẫu nhiên.</li>
                <li>Level 1: tối ưu trước Level 0.</li>
                <li>Level 2: tối ưu trước Level 1.</li>
            </ul>
        `,
        detail: `
            <h4>Beauty contest game</h4>
            <p>Nếu mọi người chọn số từ 0 đến 100, ai gần 2/3 trung bình nhất sẽ thắng. Level 0 có thể chọn 50. Level 1 chọn 33. Level 2 chọn 22. Nash lý thuyết là 0, nhưng người thật thường không đi đến vô hạn cấp.</p>
            <h4>Ứng dụng</h4>
            <ul>
                <li>Dự đoán thị trường ngắn hạn: người mua không chỉ hỏi giá trị thật mà hỏi người khác sẽ nghĩ gì.</li>
                <li>Đàm phán: không phải ai cũng đọc được mọi lớp chiến lược.</li>
                <li>Thiết kế UX: người dùng không tối ưu sâu, họ chọn theo mặc định và tín hiệu nổi bật.</li>
            </ul>
        `,
        advanced: `
            <h4>Cognitive hierarchy</h4>
            <p>Mô hình cognitive hierarchy giả định có phân phối người chơi ở các level khác nhau. Người level cao phản ứng với hỗn hợp người level thấp hơn.</p>
            <h4>Bài học</h4>
            <p>Đừng overfit vào đối thủ siêu lý trí nếu thị trường gồm nhiều người chơi giới hạn. Chiến lược tốt phải đúng với phân phối thực tế của cấp suy luận.</p>
        `
    }
];
