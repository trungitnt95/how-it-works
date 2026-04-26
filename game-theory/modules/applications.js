// Game Theory - Applications

const gameTheoryApplications = [
    {
        id: 'business-pricing',
        icon: '🏷️',
        title: 'Cạnh tranh giá trong kinh doanh',
        subtitle: 'Vì sao giảm giá dễ thành cuộc đua xuống đáy',
        category: 'applications',
        level: 'beginner',
        connections: ['prisoners-dilemma', 'zero-sum-games', 'price-war-case'],
        simple: `
            <p>Khi một công ty giảm giá, đối thủ có thể giảm theo. Khách hàng được lợi ngắn hạn, nhưng lợi nhuận ngành giảm và cả hai bên có thể mắc kẹt.</p>
            <p>Đây là ứng dụng kinh điển của song đề tù nhân và trò chơi lặp lại.</p>
        `,
        detail: `
            <h4>Ma trận trực giác</h4>
            <table>
                <tr><th></th><th>Đối thủ giữ giá</th><th>Đối thủ giảm giá</th></tr>
                <tr><td><strong>Bạn giữ giá</strong></td><td>Lợi nhuận tốt</td><td>Mất thị phần</td></tr>
                <tr><td><strong>Bạn giảm giá</strong></td><td>Tăng thị phần</td><td>Lợi nhuận cả hai thấp</td></tr>
            </table>
            <h4>Cách tránh chiến tranh giá</h4>
            <ul>
                <li>Khác biệt hóa sản phẩm để giảm so sánh trực tiếp.</li>
                <li>Bundle, loyalty, dịch vụ hậu mãi thay vì giảm giá đơn giản.</li>
                <li>Phân khúc khách hàng và gói giá rõ.</li>
                <li>Tập trung unit economics thay vì thị phần mọi giá.</li>
            </ul>
        `,
        advanced: `
            <h4>Luật cạnh tranh</h4>
            <p>Game theory giúp hiểu vì sao các công ty muốn phối hợp giữ giá, nhưng thông đồng giá là bất hợp pháp ở nhiều nơi. Chiến lược hợp pháp phải dựa trên khác biệt hóa, hiệu quả vận hành và thiết kế gói, không phải thỏa thuận ngầm.</p>
            <h4>Repeated pricing</h4>
            <p>Trong thị trường có giá công khai và tương tác lặp lại, doanh nghiệp có thể học cách tránh phá giá quá mức. Nhưng thuật toán pricing tự động cũng có thể tạo kết quả khó kiểm soát nếu phản ứng quá nhanh với nhau.</p>
        `
    },
    {
        id: 'network-effects-platforms',
        icon: '🌐',
        title: 'Nền tảng & network effects',
        subtitle: 'Giá trị tăng khi có thêm người tham gia',
        category: 'applications',
        level: 'intermediate',
        connections: ['coordination-games', 'evolutionary-stable', 'platform-subsidy-case'],
        simple: `
            <p>Một nền tảng như mạng xã hội, marketplace, ví điện tử hay app gọi xe có giá trị hơn khi nhiều người dùng hơn. Đây là trò chơi phối hợp ở quy mô thị trường.</p>
        `,
        detail: `
            <h4>Hai mặt của nền tảng</h4>
            <p>Marketplace cần cả người mua và người bán. App gọi xe cần cả tài xế và khách. Nếu thiếu một bên, bên kia cũng không muốn tham gia.</p>
            <h4>Chiến lược phổ biến</h4>
            <ul>
                <li>Trợ giá một phía để kéo phía còn lại.</li>
                <li>Tập trung một thị trường ngách trước để đạt mật độ.</li>
                <li>Giảm chi phí chuyển đổi hoặc tạo tích hợp sâu để giữ người dùng.</li>
                <li>Dùng tiêu chuẩn mở để tăng adoption hoặc tiêu chuẩn đóng để giữ quyền kiểm soát.</li>
            </ul>
        `,
        advanced: `
            <h4>Chicken-and-egg problem</h4>
            <p>Nền tảng mới mắc kẹt vì người bán không vào nếu thiếu người mua, người mua không vào nếu thiếu người bán. Giải pháp là seed supply, độc quyền nội dung, trợ cấp, hoặc tạo utility độc lập trước khi network đủ lớn.</p>
            <h4>Multi-homing</h4>
            <p>Nếu người dùng dễ dùng nhiều nền tảng cùng lúc, quyền lực nền tảng yếu hơn. Nếu switching cost cao hoặc dữ liệu tích lũy mạnh, winner-take-most dễ xuất hiện.</p>
        `
    },
    {
        id: 'salary-negotiation',
        icon: '💼',
        title: 'Đàm phán lương',
        subtitle: 'BATNA, tín hiệu và phân chia surplus',
        category: 'applications',
        level: 'beginner',
        connections: ['negotiation-bargaining', 'signaling-screening', 'credible-commitment'],
        simple: `
            <p>Đàm phán lương là trò chơi giữa ứng viên và công ty. Cả hai muốn hợp tác nếu có surplus, nhưng mỗi bên muốn phần chia tốt hơn.</p>
            <p>Sức mạnh chính đến từ BATNA: bạn có lựa chọn khác tốt đến đâu nếu thỏa thuận thất bại.</p>
        `,
        detail: `
            <h4>Cách nhìn bằng game theory</h4>
            <ul>
                <li><strong>Người chơi:</strong> ứng viên, hiring manager, HR, đôi khi team hiện tại.</li>
                <li><strong>Chiến lược:</strong> nêu kỳ vọng, trì hoãn, yêu cầu thêm equity, bonus, remote, title.</li>
                <li><strong>Payoff:</strong> lương, chi phí tuyển dụng, thời gian fill role, động lực, công bằng nội bộ.</li>
                <li><strong>Thông tin:</strong> ứng viên biết BATNA thật; công ty biết budget thật.</li>
            </ul>
            <h4>Chiến lược thực dụng</h4>
            <ul>
                <li>Cải thiện BATNA trước khi đàm phán.</li>
                <li>Dùng dữ liệu thị trường để làm anchor đáng tin.</li>
                <li>Đàm phán tổng package, không chỉ base salary.</li>
                <li>Giữ thái độ hợp tác để bảo toàn trò chơi lặp lại sau khi vào làm.</li>
            </ul>
        `,
        advanced: `
            <h4>Screening từ phía công ty</h4>
            <p>Công ty có thể dùng offer structure để phân loại ứng viên: base cao hơn, bonus theo hiệu suất, equity vesting, thử việc. Mỗi cấu trúc hấp dẫn các type khác nhau.</p>
            <h4>Signaling từ phía ứng viên</h4>
            <p>Portfolio, offer cạnh tranh, reference mạnh và hiểu biết rõ về vai trò là tín hiệu đáng tin hơn lời tự nhận. Nhưng bluff quá mức có thể phá niềm tin trong trò chơi lặp lại.</p>
        `
    },
    {
        id: 'public-policy-climate',
        icon: '🌍',
        title: 'Chính sách công & khí hậu',
        subtitle: 'Free rider, commons và phối hợp quốc tế',
        category: 'applications',
        level: 'intermediate',
        connections: ['public-goods', 'tragedy-of-commons', 'mechanism-design'],
        simple: `
            <p>Khí hậu ổn định là hàng hóa công toàn cầu. Mỗi nước hưởng lợi nếu mọi nước giảm phát thải, nhưng từng nước có động cơ trì hoãn để tránh chi phí riêng.</p>
        `,
        detail: `
            <h4>Cấu trúc trò chơi</h4>
            <ul>
                <li><strong>Người chơi:</strong> quốc gia, doanh nghiệp, cử tri, ngành năng lượng, tổ chức quốc tế.</li>
                <li><strong>Chiến lược:</strong> giảm phát thải, trì hoãn, đầu tư công nghệ sạch, đánh thuế carbon, trợ cấp.</li>
                <li><strong>Payoff:</strong> tăng trưởng, sức khỏe, rủi ro khí hậu, phiếu bầu, cạnh tranh công nghiệp.</li>
            </ul>
            <h4>Công cụ chính sách</h4>
            <ul>
                <li>Thuế carbon hoặc cap-and-trade để nội hóa chi phí ngoại tác.</li>
                <li>Tiêu chuẩn kỹ thuật và deadline chuyển đổi.</li>
                <li>Quỹ hỗ trợ nước nghèo để tăng participation.</li>
                <li>Minh bạch đo lường để giảm gian lận.</li>
            </ul>
        `,
        advanced: `
            <h4>Issue linkage</h4>
            <p>Hợp tác khí hậu có thể được liên kết với thương mại, chuyển giao công nghệ, an ninh năng lượng hoặc tài chính phát triển để thay đổi payoff.</p>
            <h4>Enforcement problem</h4>
            <p>Không có chính phủ toàn cầu đủ mạnh, nên thỏa thuận quốc tế cần cơ chế tự thực thi: giám sát, trừng phạt thương mại, danh tiếng, tài chính và lợi ích công nghệ.</p>
        `
    },
    {
        id: 'cybersecurity-games',
        icon: '🛡️',
        title: 'An ninh mạng',
        subtitle: 'Attacker và defender cùng thích nghi',
        category: 'applications',
        level: 'intermediate',
        connections: ['mixed-strategy', 'matching-pennies', 'signaling-screening'],
        simple: `
            <p>An ninh mạng là trò chơi đối kháng: phòng thủ vá lỗi, giám sát và phân bổ ngân sách; attacker chọn mục tiêu, thời điểm và kỹ thuật.</p>
        `,
        detail: `
            <h4>Vì sao cần game theory?</h4>
            <ul>
                <li>Defender không thể bảo vệ mọi nơi như nhau.</li>
                <li>Attacker quan sát pattern và chuyển mục tiêu.</li>
                <li>Random hóa audit và deception làm attacker khó tối ưu.</li>
                <li>Honeypot, fake asset và moving target defense thay đổi payoff của attacker.</li>
            </ul>
            <h4>Ví dụ chiến lược</h4>
            <p>Nếu lịch kiểm tra cố định vào thứ Sáu, attacker sẽ né. Nếu kiểm tra random theo rủi ro, attacker khó dự đoán hơn.</p>
        `,
        advanced: `
            <h4>Security games</h4>
            <p>Security game thường dùng để phân bổ nguồn lực phòng thủ hữu hạn cho nhiều mục tiêu. Defender cam kết một phân phối tuần tra hoặc kiểm tra; attacker quan sát một phần và chọn mục tiêu.</p>
            <h4>Adversarial ML</h4>
            <p>Khi model ML được dùng để phát hiện gian lận, attacker học cách tạo input né detector. Đây là trò chơi lặp lại giữa detection, adaptation và retraining.</p>
        `
    },
    {
        id: 'finance-markets',
        icon: '📈',
        title: 'Tài chính & thị trường',
        subtitle: 'Kỳ vọng về kỳ vọng của người khác',
        category: 'applications',
        level: 'advanced',
        connections: ['level-k-thinking', 'beauty-contest', 'auctions'],
        simple: `
            <p>Trong thị trường tài chính, giá không chỉ phản ánh giá trị nội tại mà còn phản ánh kỳ vọng của nhà đầu tư về kỳ vọng của những người khác.</p>
        `,
        detail: `
            <h4>Game theory trong thị trường</h4>
            <ul>
                <li>Trader không chỉ hỏi tài sản đáng giá bao nhiêu, mà hỏi người khác sẽ trả bao nhiêu sau đó.</li>
                <li>Bank run là trò chơi phối hợp: nếu mọi người tin người khác rút tiền, họ cũng rút.</li>
                <li>Short squeeze phụ thuộc vào vị thế, thanh khoản, timing và kỳ vọng đám đông.</li>
                <li>Market maker chơi trò chơi thông tin với trader có thông tin và trader nhiễu.</li>
            </ul>
            <div class="warning-box">
                <strong>Lưu ý:</strong> đây là giải thích cơ chế, không phải lời khuyên đầu tư.
            </div>
        `,
        advanced: `
            <h4>Beauty contest của Keynes</h4>
            <p>Keynes ví thị trường như cuộc thi chọn gương mặt mà người khác sẽ chọn, không phải gương mặt mình thấy đẹp nhất. Điều này tạo lớp suy luận chiến lược nhiều cấp.</p>
            <h4>Liquidity games</h4>
            <p>Nhiều khủng hoảng là trò chơi phối hợp xấu: nếu mọi người tin thanh khoản cạn, họ bán trước, làm thanh khoản thật sự cạn.</p>
        `
    },
    {
        id: 'ai-multi-agent',
        icon: '🤖',
        title: 'AI nhiều tác nhân',
        subtitle: 'Khi thuật toán cũng là người chơi chiến lược',
        category: 'applications',
        level: 'advanced',
        connections: ['mechanism-design', 'cybersecurity-games', 'traffic-routing'],
        simple: `
            <p>Khi nhiều AI agent, bot giao dịch, hệ thống đề xuất hoặc thuật toán pricing cùng tương tác, chúng tạo thành một trò chơi nhiều tác nhân.</p>
            <p>Vấn đề không chỉ là model tốt riêng lẻ, mà là hành vi tập thể khi các model phản ứng lẫn nhau.</p>
        `,
        detail: `
            <h4>Ví dụ</h4>
            <ul>
                <li>Bot pricing tự động có thể kéo giá lên/xuống qua phản ứng lặp lại.</li>
                <li>Hệ thống recommendation cạnh tranh attention và làm người sáng tạo tối ưu nội dung theo thuật toán.</li>
                <li>AI agent thương lượng lịch, giá hoặc tài nguyên cloud.</li>
                <li>Robot hoặc xe tự hành cần phối hợp trên đường.</li>
            </ul>
            <h4>Rủi ro</h4>
            <p>Emergent behavior, collusion không chủ ý, feedback loop, reward hacking và thao túng tín hiệu.</p>
        `,
        advanced: `
            <h4>Multi-agent reinforcement learning</h4>
            <p>Trong MARL, môi trường của một agent bao gồm các agent khác cũng đang học. Điều này làm bài toán không còn stationary như RL đơn tác nhân.</p>
            <h4>Thiết kế cơ chế cho AI</h4>
            <p>Cần đặt constraint, audit, logging, sandbox và rule rõ để agent tối ưu mục tiêu riêng không phá mục tiêu hệ thống.</p>
        `
    },
    {
        id: 'traffic-routing',
        icon: '🚦',
        title: 'Giao thông & định tuyến',
        subtitle: 'Lựa chọn cá nhân có thể làm mạng lưới tắc hơn',
        category: 'applications',
        level: 'intermediate',
        connections: ['correlated-equilibrium', 'tragedy-of-commons', 'mechanism-design'],
        simple: `
            <p>Mỗi tài xế chọn đường nhanh nhất cho mình. Nhưng nếu ai cũng chọn cùng một đường "nhanh", nó có thể trở thành đường chậm nhất.</p>
        `,
        detail: `
            <h4>Wardrop equilibrium</h4>
            <p>Trong cân bằng giao thông, không tài xế nào có thể tự đổi tuyến để giảm thời gian của mình. Nhưng cân bằng này có thể kém tối ưu toàn hệ thống.</p>
            <h4>Công cụ điều phối</h4>
            <ul>
                <li>Đèn giao thông và làn ưu tiên.</li>
                <li>Phí tắc nghẽn theo giờ cao điểm.</li>
                <li>Thông tin định tuyến phân tán qua app.</li>
                <li>Giới hạn xe vào khu vực hoặc khuyến khích phương tiện công cộng.</li>
            </ul>
        `,
        advanced: `
            <h4>Braess paradox</h4>
            <p>Thêm một con đường mới đôi khi làm giao thông tệ hơn vì thay đổi incentives định tuyến của mọi người. Đây là ví dụ mạnh cho việc tối ưu cá nhân không đảm bảo tối ưu hệ thống.</p>
            <h4>Platform routing</h4>
            <p>App bản đồ có thể đóng vai mediator, nhưng nếu nhiều app tối ưu riêng hoặc tài xế không tuân theo, kết quả vẫn có thể lệch khỏi tối ưu xã hội.</p>
        `
    },
    {
        id: 'behavioral-applications',
        icon: '🧠',
        title: 'Behavioral Game Theory',
        subtitle: 'Khi công bằng, cảm xúc và thiên kiến đi vào trò chơi',
        category: 'applications',
        level: 'advanced',
        connections: ['utility-preferences', 'bounded-rationality', 'ultimatum-game'],
        simple: `
            <p>Behavioral game theory nghiên cứu cách người thật chơi game, thay vì giả định họ luôn tối ưu lạnh lùng như mô hình chuẩn.</p>
        `,
        detail: `
            <h4>Các yếu tố hành vi</h4>
            <ul>
                <li><strong>Công bằng:</strong> người chơi có thể hy sinh tiền để phạt chia bất công.</li>
                <li><strong>Reciprocity:</strong> tốt đáp tốt, xấu đáp xấu.</li>
                <li><strong>Loss aversion:</strong> sợ mất nhiều hơn thích được.</li>
                <li><strong>Overconfidence:</strong> đánh giá quá cao khả năng thắng.</li>
                <li><strong>Framing:</strong> cùng payoff nhưng cách trình bày đổi hành vi.</li>
            </ul>
            <h4>Ứng dụng thiết kế</h4>
            <p>Chính sách, sản phẩm và cơ chế nội bộ nên tính đến người thật: mặc định, chuẩn mực, feedback, cảm giác công bằng và khả năng hiểu luật.</p>
        `,
        advanced: `
            <h4>Quantal response</h4>
            <p>Thay vì luôn chọn best response tuyệt đối, người chơi chọn chiến lược tốt hơn với xác suất cao hơn nhưng vẫn có lỗi. Mô hình này đôi khi dự đoán dữ liệu thực nghiệm tốt hơn Nash thuần.</p>
            <h4>Thiết kế thực tế</h4>
            <p>Nếu cơ chế quá phức tạp, người chơi không hiểu incentives và hành vi thật sẽ khác mô hình. Cơ chế tốt không chỉ đúng về toán mà còn dễ hiểu, dễ tin và dễ thực hiện.</p>
        `
    },
    {
        id: 'job-market-signaling',
        icon: '🎓',
        title: 'Tín hiệu trong thị trường lao động',
        subtitle: 'Bằng cấp, portfolio và chi phí chứng minh năng lực',
        category: 'applications',
        level: 'intermediate',
        connections: ['signaling-screening', 'salary-negotiation', 'bayesian-games'],
        simple: `
            <p>Nhà tuyển dụng không quan sát trực tiếp năng lực thật. Ứng viên dùng bằng cấp, kinh nghiệm, dự án, chứng chỉ và network để phát tín hiệu.</p>
        `,
        detail: `
            <h4>Tín hiệu tốt cần phân tách được type</h4>
            <p>Nếu ai cũng dễ có chứng chỉ, chứng chỉ yếu dần. Nếu portfolio thật khó làm giả và phản ánh năng lực, nó là tín hiệu mạnh hơn.</p>
            <h4>Screening từ công ty</h4>
            <ul>
                <li>Bài test thực tế gần công việc.</li>
                <li>Phỏng vấn tình huống.</li>
                <li>Thử việc có trả phí.</li>
                <li>Reference từ người có uy tín.</li>
            </ul>
        `,
        advanced: `
            <h4>Separating cost</h4>
            <p>Một tín hiệu giúp phân loại khi chi phí tạo tín hiệu thấp với người giỏi và cao với người yếu. Ví dụ dự án open-source chất lượng cao tốn ít hơn với người thật sự có kỹ năng.</p>
            <h4>Rủi ro credential inflation</h4>
            <p>Khi quá nhiều người dùng cùng tín hiệu, thị trường đòi tín hiệu cao hơn mà năng suất thật không tăng tương ứng. Đây là trò chơi leo thang tín hiệu.</p>
        `
    }
];
