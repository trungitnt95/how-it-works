// Game Theory - Classic games

const gameTheoryClassicGames = [
    {
        id: 'prisoners-dilemma',
        icon: '🚔',
        title: 'Song đề tù nhân',
        subtitle: 'Khi lợi ích cá nhân phá kết quả tập thể',
        category: 'classic-games',
        level: 'beginner',
        connections: ['dominant-dominated', 'nash-equilibrium', 'repeated-games', 'public-goods'],
        simple: `
            <p>Hai người cùng có lợi nếu hợp tác, nhưng mỗi người lại có động cơ phản bội để tự cứu mình. Kết quả thường là cả hai cùng phản bội và cùng tệ hơn.</p>
            <table>
                <tr><th></th><th>B hợp tác</th><th>B phản bội</th></tr>
                <tr><td><strong>A hợp tác</strong></td><td>3, 3</td><td>0, 5</td></tr>
                <tr><td><strong>A phản bội</strong></td><td>5, 0</td><td>1, 1</td></tr>
            </table>
        `,
        detail: `
            <h4>Logic của bẫy</h4>
            <p>Nếu B hợp tác, A phản bội được 5 thay vì 3. Nếu B phản bội, A phản bội được 1 thay vì 0. Vậy phản bội là chiến lược trội của A. B suy nghĩ tương tự. Cân bằng là phản bội/phản bội.</p>
            <h4>Ứng dụng</h4>
            <ul>
                <li>Hai công ty cùng giảm giá dù giữ giá tốt hơn cho cả hai.</li>
                <li>Hai quốc gia chạy đua vũ trang dù cùng giải trừ tốt hơn.</li>
                <li>Nhân viên giữ thông tin để bảo vệ vị trí dù chia sẻ giúp cả nhóm làm tốt hơn.</li>
                <li>Người dùng xả rác hoặc trốn phí vì lợi ích cá nhân nhỏ trong khi cộng đồng chịu thiệt.</li>
            </ul>
            <div class="warning-box">
                <strong>Điểm quan trọng:</strong> kết quả xấu không nhất thiết do người chơi ngu hay xấu. Nó có thể là sản phẩm hợp lý của incentives sai.
            </div>
        `,
        advanced: `
            <h4>Cách thoát song đề tù nhân</h4>
            <ul>
                <li><strong>Lặp lại trò chơi:</strong> phản bội hôm nay bị trả đũa ngày mai.</li>
                <li><strong>Tăng minh bạch:</strong> hành vi xấu dễ bị phát hiện.</li>
                <li><strong>Hợp đồng và phạt:</strong> làm phản bội đắt hơn hợp tác.</li>
                <li><strong>Danh tiếng:</strong> phản bội làm mất cơ hội tương lai.</li>
                <li><strong>Thiết kế nhóm nhỏ:</strong> dễ giám sát và duy trì chuẩn mực.</li>
            </ul>
            <p>Trong trò chơi lặp lại vô hạn hoặc không biết khi nào kết thúc, hợp tác có thể là cân bằng nếu người chơi đủ coi trọng tương lai.</p>
        `
    },
    {
        id: 'stag-hunt',
        icon: '🦌',
        title: 'Stag Hunt',
        subtitle: 'Tin tưởng để đạt phần thưởng lớn',
        category: 'classic-games',
        level: 'beginner',
        connections: ['coordination-games', 'nash-equilibrium', 'public-policy-climate'],
        simple: `
            <p>Hai thợ săn có thể cùng săn hươu để được phần thưởng lớn, nhưng nếu một người bỏ cuộc thì người kia trắng tay. Săn thỏ ít hơn nhưng an toàn.</p>
            <p>Đây là trò chơi của <strong>niềm tin, phối hợp và rủi ro khi hợp tác</strong>.</p>
        `,
        detail: `
            <h4>Ma trận mẫu</h4>
            <table>
                <tr><th></th><th>B săn hươu</th><th>B săn thỏ</th></tr>
                <tr><td><strong>A săn hươu</strong></td><td>4, 4</td><td>0, 3</td></tr>
                <tr><td><strong>A săn thỏ</strong></td><td>3, 0</td><td>3, 3</td></tr>
            </table>
            <p>Có hai cân bằng Nash: cùng săn hươu và cùng săn thỏ. Cùng săn hươu tốt hơn, nhưng cùng săn thỏ an toàn hơn nếu thiếu tin cậy.</p>
            <h4>Ứng dụng</h4>
            <ul>
                <li>Startup cùng xây chuẩn chung thay vì mỗi bên làm hệ riêng.</li>
                <li>Các nước cùng cắt khí thải nếu tin nước khác cũng làm.</li>
                <li>Cả team cùng áp dụng quy trình code review nghiêm túc.</li>
            </ul>
        `,
        advanced: `
            <h4>Risk-dominant vs payoff-dominant</h4>
            <p>Kết quả săn hươu là payoff-dominant vì tốt nhất cho cả hai. Kết quả săn thỏ có thể risk-dominant vì ít rủi ro hơn khi không chắc đối phương hợp tác.</p>
            <h4>Cách chuyển từ cân bằng an toàn sang cân bằng tốt</h4>
            <ul>
                <li>Tạo cam kết công khai.</li>
                <li>Chia nhỏ thử nghiệm để giảm chi phí thất bại.</li>
                <li>Dùng bảo hiểm, bảo lãnh hoặc quỹ bù rủi ro.</li>
                <li>Thiết lập milestone và kiểm chứng từng bước.</li>
            </ul>
        `
    },
    {
        id: 'chicken-game',
        icon: '🏁',
        title: 'Chicken',
        subtitle: 'Ai nhường trước thì thua mặt mũi, ai không nhường có thể cùng vỡ',
        category: 'classic-games',
        level: 'intermediate',
        connections: ['credible-commitment', 'brinkmanship', 'negotiation-bargaining'],
        simple: `
            <p>Hai bên lao vào nhau. Ai nhường thì mất mặt, ai không nhường thì thắng, nhưng nếu cả hai đều cứng thì cả hai thiệt nặng.</p>
            <p>Chicken giải thích nhiều tình huống leo thang: đình công, đàm phán ngân sách, khủng hoảng chính trị, cạnh tranh pháp lý.</p>
        `,
        detail: `
            <h4>Ma trận mẫu</h4>
            <table>
                <tr><th></th><th>B cứng</th><th>B nhường</th></tr>
                <tr><td><strong>A cứng</strong></td><td>-5, -5</td><td>5, 0</td></tr>
                <tr><td><strong>A nhường</strong></td><td>0, 5</td><td>2, 2</td></tr>
            </table>
            <p>Không có cân bằng đối xứng tốt trong chiến lược thuần. Hai cân bằng là A cứng/B nhường hoặc A nhường/B cứng.</p>
            <h4>Chiến thuật thường thấy</h4>
            <ul>
                <li>Đốt cầu rút lui để làm cam kết trở nên credible.</li>
                <li>Công khai lập trường để tăng chi phí nhượng bộ.</li>
                <li>Tạo deadline để ép bên kia quyết định.</li>
                <li>Dùng bên thứ ba làm trọng tài để thoát bẫy mất mặt.</li>
            </ul>
        `,
        advanced: `
            <h4>Brinkmanship</h4>
            <p>Brinkmanship là chiến thuật đẩy tình huống đến sát mép thảm họa để buộc đối phương nhượng bộ. Nó có thể hiệu quả nhưng rủi ro lớn vì sai số, hiểu lầm hoặc áp lực nội bộ có thể làm cả hai rơi xuống vực.</p>
            <h4>Cách giảm nguy cơ</h4>
            <ul>
                <li>Giữ kênh liên lạc kín để nhượng bộ không mất mặt.</li>
                <li>Thiết kế lối thoát cùng thắng.</li>
                <li>Chia vấn đề thành nhiều gói trao đổi.</li>
                <li>Đặt quy tắc giảm leo thang trước khi khủng hoảng xảy ra.</li>
            </ul>
        `
    },
    {
        id: 'coordination-games',
        icon: '🤝',
        title: 'Trò chơi phối hợp',
        subtitle: 'Đôi khi vấn đề không phải xung đột mà là chọn cùng nhau',
        category: 'classic-games',
        level: 'beginner',
        connections: ['stag-hunt', 'network-effects-platforms', 'correlated-equilibrium'],
        simple: `
            <p>Trong trò chơi phối hợp, mọi người muốn chọn giống nhau hoặc tương thích với nhau. Vấn đề là chọn chuẩn nào.</p>
            <div class="example-box">
                Bàn phím QWERTY, cổng sạc, chuẩn file, app chat, múi giờ, phía đường để lái xe đều có yếu tố phối hợp.
            </div>
        `,
        detail: `
            <h4>Vì sao phối hợp khó?</h4>
            <ul>
                <li>Nhiều cân bằng cùng tồn tại.</li>
                <li>Người chơi sợ chọn chuẩn không ai dùng.</li>
                <li>Chi phí chuyển đổi làm chuẩn cũ sống lâu dù không tối ưu.</li>
                <li>Network effect làm lựa chọn phổ biến càng phổ biến hơn.</li>
            </ul>
            <h4>Focal point</h4>
            <p>Focal point là lựa chọn nổi bật tự nhiên mà mọi người có xu hướng chọn khi không giao tiếp được. Ví dụ hẹn gặp ở thành phố lớn mà không nói địa điểm, nhiều người sẽ nghĩ đến một quảng trường hoặc ga trung tâm nổi tiếng.</p>
        `,
        advanced: `
            <h4>Path dependence</h4>
            <p>Lịch sử ban đầu có thể khóa hệ thống vào một cân bằng. Một chuẩn thắng không hẳn vì tốt nhất, mà vì đi trước, được phân phối rộng hoặc được tổ chức lớn chống lưng.</p>
            <h4>Can thiệp chính sách</h4>
            <p>Nhà nước hoặc tổ chức tiêu chuẩn có thể tạo common knowledge bằng luật, chuẩn kỹ thuật, deadline chuyển đổi, trợ cấp hoặc yêu cầu tương thích.</p>
        `
    },
    {
        id: 'battle-of-sexes',
        icon: '🎭',
        title: 'Battle of the Sexes',
        subtitle: 'Cùng muốn ở bên nhau nhưng thích lựa chọn khác nhau',
        category: 'classic-games',
        level: 'intermediate',
        connections: ['coordination-games', 'mixed-strategy', 'negotiation-bargaining'],
        simple: `
            <p>Hai người muốn đi cùng nhau, nhưng một người thích xem phim, người kia thích xem bóng đá. Phối hợp quan trọng hơn lựa chọn riêng, nhưng xung đột nằm ở việc chọn phương án nào.</p>
        `,
        detail: `
            <h4>Ma trận mẫu</h4>
            <table>
                <tr><th></th><th>B chọn phim</th><th>B chọn bóng đá</th></tr>
                <tr><td><strong>A chọn phim</strong></td><td>3, 2</td><td>0, 0</td></tr>
                <tr><td><strong>A chọn bóng đá</strong></td><td>0, 0</td><td>2, 3</td></tr>
            </table>
            <p>Có hai cân bằng thuần và một cân bằng hỗn hợp. Vấn đề không phải có hợp tác hay không, mà là phân chia lợi ích từ hợp tác.</p>
            <h4>Ứng dụng</h4>
            <ul>
                <li>Hai công ty muốn tiêu chuẩn chung nhưng mỗi bên muốn chuẩn của mình.</li>
                <li>Phòng ban muốn cùng dùng một công cụ nhưng tranh luận chọn tool nào.</li>
                <li>Các quốc gia muốn hiệp định chung nhưng khác ưu tiên nội dung.</li>
            </ul>
        `,
        advanced: `
            <h4>Giải bằng luân phiên hoặc side payment</h4>
            <p>Nếu trò chơi lặp lại, có thể luân phiên thắng lợi. Nếu có thể chuyển lợi ích, bên được ưu tiên có thể bù cho bên còn lại.</p>
            <h4>Bài học</h4>
            <p>Khi mục tiêu chung rõ nhưng lựa chọn cụ thể gây tranh cãi, hãy tách "có phối hợp" khỏi "phối hợp theo chuẩn nào". Đôi khi một cơ chế chọn chuẩn công bằng quan trọng hơn tranh luận kỹ thuật.</p>
        `
    },
    {
        id: 'matching-pennies',
        icon: '🪙',
        title: 'Matching Pennies',
        subtitle: 'Zero-sum và chiến lược hỗn hợp',
        category: 'classic-games',
        level: 'intermediate',
        connections: ['zero-sum-games', 'mixed-strategy', 'cybersecurity-games'],
        simple: `
            <p>Một người thắng khi hai đồng xu giống nhau, người kia thắng khi khác nhau. Không ai muốn để lộ pattern, nên cả hai phải random.</p>
            <p>Đây là ví dụ đơn giản cho trò chơi tổng bằng không và cân bằng hỗn hợp.</p>
        `,
        detail: `
            <h4>Ma trận mẫu</h4>
            <table>
                <tr><th></th><th>B ngửa</th><th>B sấp</th></tr>
                <tr><td><strong>A ngửa</strong></td><td>1, -1</td><td>-1, 1</td></tr>
                <tr><td><strong>A sấp</strong></td><td>-1, 1</td><td>1, -1</td></tr>
            </table>
            <p>Không có cân bằng Nash thuần: nếu A chọn ngửa cố định, B chọn sấp; nếu B chọn sấp, A muốn đổi sang sấp; vòng lặp tiếp tục.</p>
            <h4>Ứng dụng</h4>
            <ul>
                <li>Đá penalty: thủ môn và cầu thủ đều random hướng.</li>
                <li>An ninh mạng: đội phòng thủ random lịch kiểm tra.</li>
                <li>Marketing cạnh tranh: đối thủ không muốn lịch campaign quá dễ đoán.</li>
            </ul>
        `,
        advanced: `
            <h4>Minimax</h4>
            <p>Trong zero-sum game, chiến lược tối ưu thường là tối đa hóa payoff tối thiểu mà đối thủ có thể ép bạn nhận. Đây là trực giác của minimax.</p>
            <h4>Random không có nghĩa là tùy tiện</h4>
            <p>Mixed strategy là random có xác suất được tính để làm đối thủ indifferent. Nếu random lệch khỏi xác suất tối ưu, đối thủ có thể khai thác.</p>
        `
    },
    {
        id: 'public-goods',
        icon: '🏞️',
        title: 'Public Goods & Free Rider',
        subtitle: 'Ai cũng hưởng lợi nhưng không ai muốn trả đủ',
        category: 'classic-games',
        level: 'intermediate',
        connections: ['prisoners-dilemma', 'tragedy-of-commons', 'public-policy-climate'],
        simple: `
            <p>Hàng hóa công là thứ nhiều người cùng hưởng, khó loại trừ người không trả tiền: không khí sạch, quốc phòng, tri thức mở, đường phố an toàn.</p>
            <p><strong>Free rider</strong> là người hưởng lợi nhưng đóng góp ít hoặc không đóng góp.</p>
        `,
        detail: `
            <h4>Vấn đề incentives</h4>
            <p>Mỗi cá nhân nghĩ đóng góp của mình nhỏ, nên muốn người khác trả. Nếu ai cũng nghĩ vậy, hàng hóa công bị thiếu hụt.</p>
            <h4>Ứng dụng</h4>
            <ul>
                <li>Team cần tài liệu chung nhưng ít người chịu viết.</li>
                <li>Cộng đồng cần moderation nhưng ai cũng muốn người khác làm.</li>
                <li>Doanh nghiệp cùng ngành cần chuẩn an toàn nhưng từng bên ngại chi phí.</li>
                <li>Khí hậu ổn định có lợi cho mọi nước nhưng giảm phát thải tốn chi phí riêng.</li>
            </ul>
        `,
        advanced: `
            <h4>Cơ chế xử lý free rider</h4>
            <ul>
                <li>Thuế hoặc phí bắt buộc.</li>
                <li>Quy định tiêu chuẩn tối thiểu.</li>
                <li>Đóng góp theo điều kiện: tôi góp nếu đủ nhiều người cùng góp.</li>
                <li>Danh tiếng và ghi nhận công khai.</li>
                <li>Chia nhóm nhỏ để tăng giám sát ngang hàng.</li>
            </ul>
            <p>Trong nhiều tổ chức, vấn đề hàng hóa công không cần giải bằng lời kêu gọi đạo đức mà bằng cơ chế phân bổ công sức và ghi nhận.</p>
        `
    },
    {
        id: 'tragedy-of-commons',
        icon: '🌊',
        title: 'Bi kịch tài nguyên chung',
        subtitle: 'Lợi ích riêng ngắn hạn phá tài sản chung dài hạn',
        category: 'classic-games',
        level: 'intermediate',
        connections: ['public-goods', 'public-policy-climate', 'mechanism-design'],
        simple: `
            <p>Khi nhiều người cùng khai thác một tài nguyên hữu hạn, mỗi người có động cơ lấy thêm một chút. Tổng các "một chút" có thể phá hỏng tài nguyên chung.</p>
            <div class="example-box">
                Đồng cỏ chung, nguồn cá, đường phố, băng thông, môi trường, attention của người dùng đều có thể bị khai thác quá mức.
            </div>
        `,
        detail: `
            <h4>Cấu trúc payoff</h4>
            <p>Lợi ích của việc khai thác thêm thuộc về cá nhân, còn chi phí suy giảm tài nguyên bị chia cho cả cộng đồng. Vì vậy cá nhân thấy khai thác thêm là hợp lý, dù kết quả tập thể là tệ.</p>
            <h4>Không phải cứ tư hữu hóa mới giải được</h4>
            <p>Có nhiều cách quản trị commons: quyền sở hữu rõ, quota, giám sát cộng đồng, phạt vi phạm, quy tắc địa phương, thị trường hạn ngạch, hoặc tổ chức tự quản.</p>
        `,
        advanced: `
            <h4>Thiết kế bền vững</h4>
            <ul>
                <li>Đo được mức khai thác và tốc độ tái tạo.</li>
                <li>Quy định quyền tiếp cận rõ ràng.</li>
                <li>Phạt nhanh và đủ chắc thay vì phạt cực nặng nhưng hiếm.</li>
                <li>Cho người chịu ảnh hưởng tham gia đặt luật.</li>
                <li>Tạo cơ chế xử lý tranh chấp chi phí thấp.</li>
            </ul>
            <p>Bài học lớn: một hệ thống cần feedback đúng tốc độ. Nếu tài nguyên suy giảm chậm nhưng hành vi khai thác thưởng ngay, commons dễ sụp đổ.</p>
        `
    },
    {
        id: 'zero-sum-games',
        icon: '⚔️',
        title: 'Zero-sum vs Positive-sum',
        subtitle: 'Không phải mọi cạnh tranh đều có tổng bằng không',
        category: 'classic-games',
        level: 'beginner',
        connections: ['matching-pennies', 'pareto-optimality', 'business-pricing'],
        simple: `
            <p><strong>Zero-sum</strong> nghĩa là người này được bao nhiêu thì người kia mất bấy nhiêu. <strong>Positive-sum</strong> nghĩa là hợp tác hoặc đổi luật chơi có thể làm tổng lợi ích tăng.</p>
        `,
        detail: `
            <h4>Phân biệt nhanh</h4>
            <table>
                <tr><th>Loại</th><th>Đặc điểm</th><th>Ví dụ</th></tr>
                <tr><td>Zero-sum</td><td>Tổng payoff cố định</td><td>Poker, thể thao loại trực tiếp, một số đấu giá</td></tr>
                <tr><td>Negative-sum</td><td>Cả hai có thể cùng thiệt vì xung đột</td><td>Chiến tranh giá kéo dài, kiện tụng hủy giá trị</td></tr>
                <tr><td>Positive-sum</td><td>Có thể tạo thêm giá trị</td><td>Thương mại, chuẩn chung, hợp tác R&D</td></tr>
            </table>
            <p>Nhiều sai lầm chiến lược đến từ việc nhìn nhầm trò chơi positive-sum thành zero-sum, khiến các bên bỏ lỡ cơ hội cùng thắng.</p>
        `,
        advanced: `
            <h4>Chiến lược phụ thuộc loại trò chơi</h4>
            <ul>
                <li>Zero-sum: bảo vệ thông tin, random hóa, minimax, khai thác điểm yếu.</li>
                <li>Positive-sum: xây niềm tin, chia sẻ thông tin chọn lọc, hợp đồng, tiêu chuẩn chung.</li>
                <li>Negative-sum: giảm leo thang, tạo trọng tài, thay đổi payoff để tránh phá hủy giá trị.</li>
            </ul>
            <div class="tip-box">
                <strong>Câu hỏi thực dụng:</strong> Có cách nào tăng kích thước chiếc bánh trước khi tranh phần bánh không?
            </div>
        `
    }
];
