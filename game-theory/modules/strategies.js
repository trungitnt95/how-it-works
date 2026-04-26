// Game Theory - Strategies and mechanism design

const gameTheoryStrategies = [
    {
        id: 'repeated-games',
        icon: '🔁',
        title: 'Trò chơi lặp lại',
        subtitle: 'Tương lai thay đổi hành vi hiện tại',
        category: 'strategies',
        level: 'intermediate',
        connections: ['prisoners-dilemma', 'tit-for-tat', 'evolutionary-stable'],
        simple: `
            <p>Khi người chơi gặp nhau nhiều lần, phản bội hôm nay có thể bị trả đũa ngày mai. Vì vậy hợp tác có thể trở thành chiến lược hợp lý.</p>
            <div class="example-box">
                Nhà cung cấp giao hàng đúng hẹn không chỉ vì đơn hiện tại, mà vì muốn giữ hợp đồng dài hạn.
            </div>
        `,
        detail: `
            <h4>Một lần vs lặp lại</h4>
            <table>
                <tr><th>Trò chơi một lần</th><th>Trò chơi lặp lại</th></tr>
                <tr><td>Danh tiếng ít quan trọng.</td><td>Danh tiếng là tài sản.</td></tr>
                <tr><td>Phản bội khó bị phạt.</td><td>Phản bội có thể bị trả đũa.</td></tr>
                <tr><td>Tối ưu ngắn hạn mạnh.</td><td>Tối ưu dài hạn có trọng lượng.</td></tr>
            </table>
            <h4>Điều kiện giúp hợp tác</h4>
            <ul>
                <li>Người chơi kỳ vọng còn gặp lại nhau.</li>
                <li>Hành vi có thể quan sát đủ rõ.</li>
                <li>Có khả năng thưởng/phạt trong tương lai.</li>
                <li>Người chơi coi trọng tương lai đủ lớn.</li>
            </ul>
        `,
        advanced: `
            <h4>Folk theorem</h4>
            <p>Trong trò chơi lặp lại vô hạn, nhiều kết quả hợp tác có thể được duy trì như cân bằng nếu người chơi đủ kiên nhẫn và có cơ chế trừng phạt đáng tin.</p>
            <h4>Shadow of the future</h4>
            <p>Bóng của tương lai càng dài, hành vi hiện tại càng hợp tác. Nếu mọi người biết trò chơi sắp kết thúc, hợp tác có thể sụp ngược từ vòng cuối về vòng đầu.</p>
        `
    },
    {
        id: 'tit-for-tat',
        icon: '🔄',
        title: 'Tit-for-Tat',
        subtitle: 'Hợp tác trước, sau đó đáp lại như đối phương',
        category: 'strategies',
        level: 'intermediate',
        connections: ['repeated-games', 'prisoners-dilemma', 'evolutionary-stable'],
        simple: `
            <p><strong>Tit-for-Tat</strong> bắt đầu bằng hợp tác, sau đó lặp lại hành vi trước đó của đối phương: họ hợp tác thì mình hợp tác, họ phản bội thì mình trả đũa.</p>
            <p>Nó đơn giản, dễ hiểu, dễ dự đoán và khuyến khích đối phương quay lại hợp tác.</p>
        `,
        detail: `
            <h4>Vì sao Tit-for-Tat mạnh?</h4>
            <ul>
                <li><strong>Nice:</strong> không phản bội trước.</li>
                <li><strong>Retaliatory:</strong> phản bội bị phạt.</li>
                <li><strong>Forgiving:</strong> nếu đối phương quay lại hợp tác, mình cũng quay lại.</li>
                <li><strong>Clear:</strong> đối phương dễ học quy tắc.</li>
            </ul>
            <h4>Điểm yếu</h4>
            <p>Nếu có lỗi quan sát, hai bên có thể rơi vào vòng trả đũa lẫn nhau dù không ai cố ý phản bội.</p>
        `,
        advanced: `
            <h4>Generous Tit-for-Tat</h4>
            <p>Phiên bản hào phóng đôi khi bỏ qua một lần phản bội để tránh chuỗi trả đũa do nhiễu. Trong môi trường có sai số, chiến lược này thường bền hơn Tit-for-Tat cứng.</p>
            <h4>Bài học tổ chức</h4>
            <p>Quy tắc hợp tác nên có ba đặc tính: thưởng nhanh hành vi tốt, phạt đủ rõ hành vi xấu, và có đường quay lại cho người sửa sai.</p>
        `
    },
    {
        id: 'credible-commitment',
        icon: '🔒',
        title: 'Cam kết đáng tin',
        subtitle: 'Làm cho lời nói trở thành hành động khó đảo ngược',
        category: 'strategies',
        level: 'intermediate',
        connections: ['chicken-game', 'subgame-perfect', 'brinkmanship'],
        simple: `
            <p>Một cam kết đáng tin là cam kết mà khi tới lúc hành động, bạn thật sự có động cơ hoặc bị ràng buộc để làm đúng như đã nói.</p>
            <div class="example-box">
                Đặt cọc không hoàn lại làm lời hứa mua nhà đáng tin hơn câu "tôi chắc chắn sẽ mua".
            </div>
        `,
        detail: `
            <h4>Cách tạo cam kết</h4>
            <ul>
                <li><strong>Hợp đồng:</strong> phạt nếu không làm.</li>
                <li><strong>Đầu tư không thể thu hồi:</strong> xây nhà máy, mua máy móc, tích hợp hệ thống.</li>
                <li><strong>Công khai:</strong> làm chi phí mất mặt tăng nếu rút lui.</li>
                <li><strong>Ủy quyền:</strong> giao quyết định cho người/thuật toán bị ràng buộc bởi quy tắc.</li>
                <li><strong>Đốt cầu:</strong> tự loại bỏ đường quay lại, dùng cẩn thận vì rủi ro cao.</li>
            </ul>
            <h4>Ứng dụng</h4>
            <p>Cam kết giúp đàm phán, pricing, tuyển dụng, chống gian lận và chiến lược thị trường. Nhưng cam kết quá cứng có thể làm bạn mất linh hoạt.</p>
        `,
        advanced: `
            <h4>Commitment device</h4>
            <p>Commitment device không chỉ dùng để đối phó người khác mà còn để đối phó chính mình: khóa tiền tiết kiệm, đặt deadline công khai, ký hợp đồng phạt nếu không hoàn thành.</p>
            <h4>Strategic rigidity</h4>
            <p>Trong game theory, đôi khi mất lựa chọn lại tăng sức mạnh mặc cả. Nếu bạn không thể nhượng bộ, đối phương phải điều chỉnh. Nhưng nếu bối cảnh đổi, sự cứng nhắc có thể biến thành thảm họa.</p>
        `
    },
    {
        id: 'brinkmanship',
        icon: '⚡',
        title: 'Brinkmanship',
        subtitle: 'Chiến thuật leo thang tới sát mép rủi ro',
        category: 'strategies',
        level: 'advanced',
        connections: ['chicken-game', 'credible-commitment', 'public-policy-climate'],
        simple: `
            <p>Brinkmanship là cố tình đẩy tình huống đến gần điểm nguy hiểm để buộc đối phương nhượng bộ. Nó thường xuất hiện trong khủng hoảng chính trị, đình công, kiện tụng và đàm phán cứng.</p>
        `,
        detail: `
            <h4>Vì sao nó có tác dụng?</h4>
            <p>Nếu đối phương tin bạn sẵn sàng chịu rủi ro lớn, họ có thể nhượng bộ để tránh thảm họa chung. Nhưng nếu cả hai cùng dùng brinkmanship, xác suất tai nạn tăng nhanh.</p>
            <h4>Rủi ro</h4>
            <ul>
                <li>Tín hiệu bị hiểu sai.</li>
                <li>Người trong cuộc bị áp lực danh dự, không xuống thang được.</li>
                <li>Deadline kỹ thuật hoặc pháp lý kích hoạt hậu quả tự động.</li>
                <li>Bên thứ ba can thiệp làm payoff đổi đột ngột.</li>
            </ul>
        `,
        advanced: `
            <h4>Chiến thuật giảm nguy cơ</h4>
            <ul>
                <li>Giữ hotline hoặc kênh sau hậu trường.</li>
                <li>Tách nhượng bộ thực chất khỏi tuyên bố công khai.</li>
                <li>Dùng mediator để tạo gói thỏa thuận không bên nào mất mặt.</li>
                <li>Đặt nguyên tắc xuống thang trước khi bắt đầu leo thang.</li>
            </ul>
            <p>Brinkmanship có thể thắng một vòng nhưng phá niềm tin nhiều vòng sau. Phải tính payoff lặp lại, không chỉ payoff của cuộc đối đầu hiện tại.</p>
        `
    },
    {
        id: 'signaling-screening',
        icon: '📣',
        title: 'Signaling & Screening',
        subtitle: 'Gửi tín hiệu và lọc thông tin trong thế giới bất cân xứng',
        category: 'strategies',
        level: 'intermediate',
        connections: ['bayesian-games', 'utility-preferences', 'job-market-signaling'],
        simple: `
            <p><strong>Signaling</strong> là bên có thông tin riêng cố chứng minh type của mình. <strong>Screening</strong> là bên thiếu thông tin thiết kế bài kiểm tra để phân loại người khác.</p>
            <div class="example-box">
                Ứng viên dùng portfolio để phát tín hiệu năng lực. Công ty dùng bài test, thử việc và reference để sàng lọc.
            </div>
        `,
        detail: `
            <h4>Tín hiệu đáng tin cần gì?</h4>
            <p>Tín hiệu đáng tin phải khó giả mạo hoặc tốn kém hơn với người chất lượng thấp.</p>
            <ul>
                <li>Bảo hành dài hạn đáng tin hơn quảng cáo nếu sản phẩm kém sẽ tốn chi phí bảo hành.</li>
                <li>Portfolio thật đáng tin hơn lời tự nhận vì có sản phẩm kiểm chứng.</li>
                <li>Đặt cọc giúp chứng minh người mua nghiêm túc.</li>
            </ul>
            <h4>Screening</h4>
            <p>Screening tốt khiến các type tự chọn vào các gói khác nhau. Ví dụ bảo hiểm có deductible cao/thấp, SaaS có nhiều tier giá, tuyển dụng có nhiều vòng đánh giá.</p>
        `,
        advanced: `
            <h4>Separating vs pooling equilibrium</h4>
            <p>Separating equilibrium xảy ra khi các type khác nhau gửi tín hiệu khác nhau nên được phân biệt. Pooling equilibrium xảy ra khi nhiều type gửi tín hiệu giống nhau nên thị trường không phân biệt được.</p>
            <h4>Adverse selection</h4>
            <p>Nếu người mua không phân biệt được hàng tốt/xấu, họ trả giá trung bình. Người bán hàng tốt rời thị trường, làm chất lượng trung bình giảm tiếp. Đây là logic "market for lemons".</p>
        `
    },
    {
        id: 'mechanism-design',
        icon: '🏗️',
        title: 'Mechanism Design',
        subtitle: 'Thiết kế luật chơi để incentives tự dẫn tới kết quả mong muốn',
        category: 'strategies',
        level: 'advanced',
        connections: ['pareto-optimality', 'auctions', 'public-goods', 'traffic-routing'],
        simple: `
            <p>Game theory thường hỏi: trong luật chơi này, người chơi sẽ làm gì? <strong>Mechanism design</strong> hỏi ngược lại: muốn kết quả X, phải thiết kế luật chơi thế nào?</p>
        `,
        detail: `
            <h4>Tư duy thiết kế cơ chế</h4>
            <ol>
                <li>Xác định kết quả xã hội mong muốn.</li>
                <li>Xác định thông tin riêng và động cơ gian lận.</li>
                <li>Thiết kế rule, thưởng, phạt, giá, quota hoặc matching.</li>
                <li>Kiểm tra người chơi có tự nguyện tham gia không.</li>
                <li>Kiểm tra nói thật hoặc hành vi mong muốn có phải chiến lược tốt nhất không.</li>
            </ol>
            <h4>Ứng dụng</h4>
            <ul>
                <li>Đấu giá quảng cáo và tần số viễn thông.</li>
                <li>Matching học sinh-trường học, bác sĩ-bệnh viện.</li>
                <li>Thiết kế thuế carbon và thị trường hạn ngạch.</li>
                <li>Chia ngân sách nội bộ, thưởng KPI, chống gian lận.</li>
            </ul>
        `,
        advanced: `
            <h4>Incentive compatibility</h4>
            <p>Một cơ chế tốt làm cho hành vi mong muốn trở thành tối ưu cá nhân. Nếu muốn người chơi nói thật, cơ chế phải khiến nói thật có payoff cao hơn nói dối.</p>
            <h4>Participation constraint</h4>
            <p>Người chơi phải thấy tham gia tốt hơn không tham gia. Một cơ chế hiệu quả nhưng ép buộc quá mạnh có thể thất bại về chính trị, pháp lý hoặc đạo đức.</p>
            <div class="warning-box">
                <strong>Bẫy KPI:</strong> nếu đo sai payoff, người chơi tối ưu chỉ số thay vì tối ưu mục tiêu thật. Cơ chế sai tạo gaming.
            </div>
        `
    },
    {
        id: 'auctions',
        icon: '🔨',
        title: 'Lý thuyết đấu giá',
        subtitle: 'Chiến lược khi phải trả giá dưới cạnh tranh và thiếu thông tin',
        category: 'strategies',
        level: 'advanced',
        connections: ['bayesian-games', 'mechanism-design', 'ad-auctions-case'],
        simple: `
            <p>Đấu giá là game theory ứng dụng rất trực tiếp: nhiều người cùng muốn một tài sản, mỗi người có định giá riêng, và luật đấu giá quyết định cách họ bid.</p>
        `,
        detail: `
            <h4>Các dạng đấu giá phổ biến</h4>
            <table>
                <tr><th>Dạng</th><th>Cách hoạt động</th><th>Chiến lược trực giác</th></tr>
                <tr><td>English auction</td><td>Giá tăng dần, ai còn lại cuối thắng</td><td>Dừng gần giá trị thật</td></tr>
                <tr><td>Dutch auction</td><td>Giá giảm dần, ai nhận trước thắng</td><td>Cân bằng giữa chờ rẻ và sợ mất</td></tr>
                <tr><td>First-price sealed bid</td><td>Bid kín, người cao nhất thắng và trả bid của mình</td><td>Bid thấp hơn giá trị thật</td></tr>
                <tr><td>Second-price sealed bid</td><td>Người cao nhất thắng, trả giá cao thứ hai</td><td>Bid gần giá trị thật</td></tr>
            </table>
            <h4>Winner's curse</h4>
            <p>Trong common value auction, người thắng thường là người ước tính quá cao nhất. Nếu không điều chỉnh, thắng thầu có thể là tin xấu.</p>
        `,
        advanced: `
            <h4>Revenue equivalence</h4>
            <p>Trong một số giả định chuẩn, nhiều dạng đấu giá tạo doanh thu kỳ vọng giống nhau. Nhưng đời thực có rủi ro, bất cân xứng thông tin, thông đồng, ngân sách giới hạn và hành vi phi lý nên thiết kế cụ thể rất quan trọng.</p>
            <h4>Ứng dụng hiện đại</h4>
            <ul>
                <li>Quảng cáo tìm kiếm và programmatic ads.</li>
                <li>Đấu giá tần số viễn thông.</li>
                <li>Đấu thầu xây dựng, mua sắm công.</li>
                <li>Marketplace logistics và phân bổ tài nguyên cloud.</li>
            </ul>
        `
    },
    {
        id: 'negotiation-bargaining',
        icon: '🤝',
        title: 'Đàm phán & mặc cả',
        subtitle: 'Chia giá trị sau khi tạo giá trị',
        category: 'strategies',
        level: 'intermediate',
        connections: ['battle-of-sexes', 'credible-commitment', 'salary-negotiation'],
        simple: `
            <p>Đàm phán là trò chơi vừa hợp tác vừa cạnh tranh: hai bên có thể cùng tạo giá trị, nhưng vẫn tranh nhau phần chia.</p>
            <p>Game theory giúp tách hai câu hỏi: làm sao tăng tổng lợi ích, và chia tổng lợi ích đó thế nào?</p>
        `,
        detail: `
            <h4>Khái niệm cốt lõi</h4>
            <ul>
                <li><strong>BATNA:</strong> phương án tốt nhất nếu không đạt thỏa thuận.</li>
                <li><strong>Reservation value:</strong> mức thấp nhất/cao nhất bạn còn chấp nhận.</li>
                <li><strong>ZOPA:</strong> vùng có thể thỏa thuận giữa hai reservation value.</li>
                <li><strong>Anchor:</strong> con số đầu tiên định khung kỳ vọng.</li>
            </ul>
            <h4>Chiến lược</h4>
            <ul>
                <li>Cải thiện BATNA trước khi đàm phán.</li>
                <li>Tìm khác biệt ưu tiên để trade-off.</li>
                <li>Dùng điều khoản phụ để tạo gói cùng thắng.</li>
                <li>Không nhầm cứng rắn với hiệu quả.</li>
            </ul>
        `,
        advanced: `
            <h4>Nash bargaining solution</h4>
            <p>Một mô hình chuẩn chọn thỏa thuận tối đa hóa tích lợi ích tăng thêm của các bên so với điểm bất đồng. Nó nhấn mạnh sức mạnh của outside option.</p>
            <h4>Hold-up problem</h4>
            <p>Nếu một bên phải đầu tư trước vào tài sản chuyên biệt rồi mới đàm phán, bên kia có thể ép lại sau khi đầu tư đã chìm. Hợp đồng trước và cam kết giúp giảm hold-up.</p>
        `
    },
    {
        id: 'backward-induction',
        icon: '⏪',
        title: 'Backward Induction',
        subtitle: 'Giải trò chơi tuần tự từ cuối về đầu',
        category: 'strategies',
        level: 'intermediate',
        connections: ['subgame-perfect', 'normal-extensive-form', 'credible-commitment'],
        simple: `
            <p>Backward induction là phương pháp nhìn bước cuối trước: người cuối sẽ làm gì? Biết vậy, người trước nên làm gì? Cứ lùi về hiện tại.</p>
        `,
        detail: `
            <h4>Ví dụ</h4>
            <p>A có thể kiện B hoặc thương lượng. Nếu kiện, B có thể dàn xếp hoặc ra tòa. Nếu ra tòa rất tốn cho cả hai, A phải dự đoán B có thật sự ra tòa không hay chỉ đe dọa.</p>
            <h4>Các bước</h4>
            <ol>
                <li>Vẽ cây quyết định.</li>
                <li>Ghi payoff ở các lá.</li>
                <li>Tại mỗi nút cuối, chọn hành động tối ưu của người tới lượt.</li>
                <li>Thay nhánh đó bằng payoff tương ứng.</li>
                <li>Lặp lại cho tới nút đầu.</li>
            </ol>
        `,
        advanced: `
            <h4>Giới hạn</h4>
            <p>Backward induction cần thông tin khá rõ và giả định người chơi lý trí ở mọi bước. Trong trò chơi dài, bounded rationality, cảm xúc và khả năng cam kết có thể làm dự đoán lệch.</p>
            <h4>Centipede game</h4>
            <p>Một ví dụ nổi tiếng cho thấy backward induction dự đoán dừng rất sớm, nhưng người thật thường tiếp tục hợp tác vài vòng vì tin tưởng, học hỏi hoặc chuẩn mực công bằng.</p>
        `
    }
];
