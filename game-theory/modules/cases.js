// Game Theory - Case studies and practice scenarios

const gameTheoryCases = [
    {
        id: 'price-war-case',
        icon: '🔥',
        title: 'Case: Chiến tranh giá',
        subtitle: 'Từ tăng trưởng thị phần đến bào mòn lợi nhuận',
        category: 'cases',
        level: 'beginner',
        connections: ['business-pricing', 'prisoners-dilemma', 'repeated-games'],
        simple: `
            <p>Hai thương hiệu cùng bán sản phẩm tương tự. Một bên giảm giá để giành thị phần. Bên kia giảm theo. Sau vài vòng, cả hai bán rẻ hơn nhưng lượng khách không tăng đủ để bù lợi nhuận mất đi.</p>
        `,
        detail: `
            <h4>Dựng trò chơi</h4>
            <ul>
                <li><strong>Người chơi:</strong> thương hiệu A và B.</li>
                <li><strong>Chiến lược:</strong> giữ giá, giảm nhẹ, giảm sâu, bundle, khác biệt hóa.</li>
                <li><strong>Payoff:</strong> lợi nhuận, thị phần, nhận thức thương hiệu, khả năng giữ khách.</li>
                <li><strong>Thông tin:</strong> giá công khai, chi phí thật không hoàn toàn công khai.</li>
            </ul>
            <h4>Chẩn đoán</h4>
            <p>Nếu khách hàng xem hai sản phẩm gần như giống nhau, giảm giá có payoff ngắn hạn cao. Nhưng khi đối thủ phản ứng, kết quả là negative-sum.</p>
        `,
        advanced: `
            <h4>Hướng thoát</h4>
            <ul>
                <li>Chuyển trò chơi từ giá sang giá trị: bảo hành, tốc độ, chất lượng, bundle.</li>
                <li>Phân khúc khách hàng để không cạnh tranh trực diện mọi phân khúc.</li>
                <li>Thiết kế loyalty làm trò chơi lặp lại với khách hàng, không chỉ với đối thủ.</li>
                <li>Đo contribution margin theo cohort để tránh mua tăng trưởng giả.</li>
            </ul>
        `
    },
    {
        id: 'platform-subsidy-case',
        icon: '🚗',
        title: 'Case: Trợ giá nền tảng',
        subtitle: 'Kéo hai phía của marketplace vào cùng lúc',
        category: 'cases',
        level: 'intermediate',
        connections: ['network-effects-platforms', 'coordination-games', 'mechanism-design'],
        simple: `
            <p>Một app marketplace mới cần cả người mua và người bán. Nếu không có người bán, người mua không vào; nếu không có người mua, người bán không vào.</p>
            <p>Trợ giá là cách tạm thời thay đổi payoff để phá bẫy phối hợp.</p>
        `,
        detail: `
            <h4>Dựng trò chơi</h4>
            <ul>
                <li><strong>Người chơi:</strong> nền tảng, người mua, người bán, đối thủ.</li>
                <li><strong>Chiến lược nền tảng:</strong> trợ giá mua, trợ giá bán, độc quyền nguồn cung, tập trung ngách.</li>
                <li><strong>Payoff người dùng:</strong> giá, lựa chọn, độ tin cậy, chi phí chuyển đổi.</li>
            </ul>
            <h4>Câu hỏi chiến lược</h4>
            <p>Trợ giá phía nào tạo network effect mạnh hơn? Khi ngừng trợ giá, payoff tự nhiên đã đủ giữ người dùng chưa?</p>
        `,
        advanced: `
            <h4>Rủi ro subsidy trap</h4>
            <p>Nếu người dùng chỉ ở lại vì trợ giá, nền tảng chưa tạo cân bằng bền. Khi burn rate giảm, cả hai phía có thể rời đi cùng lúc.</p>
            <h4>Thiết kế bền hơn</h4>
            <ul>
                <li>Tạo công cụ vận hành cho người bán để tăng switching cost tích cực.</li>
                <li>Tập trung mật độ địa lý/ngách thay vì phủ rộng mỏng.</li>
                <li>Đo liquidity: thời gian match, tỷ lệ giao dịch thành công, repeat usage.</li>
            </ul>
        `
    },
    {
        id: 'ad-auctions-case',
        icon: '📢',
        title: 'Case: Đấu giá quảng cáo',
        subtitle: 'Vì sao bid cao nhất chưa chắc thắng đơn giản',
        category: 'cases',
        level: 'advanced',
        connections: ['auctions', 'mechanism-design', 'business-pricing'],
        simple: `
            <p>Quảng cáo tìm kiếm và social ads thường dùng cơ chế đấu giá. Nhà quảng cáo bid để giành vị trí, nhưng nền tảng còn tính chất lượng, tỷ lệ click và trải nghiệm người dùng.</p>
        `,
        detail: `
            <h4>Người chơi và payoff</h4>
            <ul>
                <li><strong>Nhà quảng cáo:</strong> muốn conversion với chi phí hợp lý.</li>
                <li><strong>Nền tảng:</strong> muốn doanh thu dài hạn và giữ người dùng.</li>
                <li><strong>Người dùng:</strong> muốn kết quả liên quan, ít spam.</li>
            </ul>
            <h4>Vì sao không chỉ bán cho người bid cao nhất?</h4>
            <p>Nếu quảng cáo kém liên quan nhưng bid cao luôn thắng, người dùng mất niềm tin, CTR giảm, doanh thu dài hạn giảm. Vì vậy cơ chế thường kết hợp bid và quality score.</p>
        `,
        advanced: `
            <h4>Incentive alignment</h4>
            <p>Cơ chế tốt buộc nhà quảng cáo tối ưu cả bid lẫn chất lượng landing page, creative và relevance. Khi chất lượng làm giảm giá phải trả hoặc tăng xác suất thắng, advertiser có động cơ cải thiện trải nghiệm.</p>
            <h4>Chiến lược advertiser</h4>
            <ul>
                <li>Không chỉ tăng bid; cải thiện conversion và relevance.</li>
                <li>Phân tách campaign để bid theo giá trị thật của từng segment.</li>
                <li>Hiểu auction dynamics: cạnh tranh, ngân sách, pacing và learning phase.</li>
            </ul>
        `
    },
    {
        id: 'beauty-contest',
        icon: '👑',
        title: 'Case: Beauty Contest',
        subtitle: 'Dự đoán người khác sẽ dự đoán gì',
        category: 'cases',
        level: 'intermediate',
        connections: ['level-k-thinking', 'finance-markets', 'bounded-rationality'],
        simple: `
            <p>Trong beauty contest, mục tiêu không phải chọn thứ bạn thích nhất, mà chọn thứ bạn nghĩ người khác sẽ nghĩ là người khác thích nhất.</p>
            <p>Đây là mô hình nhỏ cho thị trường, xu hướng mạng xã hội và suy luận nhiều cấp.</p>
        `,
        detail: `
            <h4>Trò chơi số 2/3 trung bình</h4>
            <p>Mọi người chọn số 0-100. Ai gần 2/3 của trung bình nhất thắng. Nếu mọi người chọn ngẫu nhiên quanh 50, đáp án tốt là 33. Nếu mọi người nghĩ vậy, đáp án tốt là 22. Nếu tiếp tục vô hạn, Nash là 0.</p>
            <h4>Điều quan sát được</h4>
            <p>Người thật thường không chọn 0 ngay. Kết quả phản ánh phân phối cấp suy luận trong nhóm.</p>
        `,
        advanced: `
            <h4>Bài học đầu tư và sản phẩm</h4>
            <p>Nếu thành công phụ thuộc vào kỳ vọng đám đông, bạn cần biết mình đang chơi cấp nào. Đúng về giá trị nội tại nhưng sai về timing và kỳ vọng xã hội vẫn có thể thua trong ngắn hạn.</p>
            <h4>Bẫy overthinking</h4>
            <p>Suy luận quá sâu trước một đám đông suy luận nông cũng sai. Chiến lược tốt phải khớp độ sâu thực tế của thị trường.</p>
        `
    },
    {
        id: 'ultimatum-game',
        icon: '⚖️',
        title: 'Case: Ultimatum Game',
        subtitle: 'Công bằng có thể đánh bại tiền kỳ vọng',
        category: 'cases',
        level: 'intermediate',
        connections: ['behavioral-applications', 'utility-preferences', 'negotiation-bargaining'],
        simple: `
            <p>Một người chia tiền, người kia chỉ được chấp nhận hoặc từ chối. Nếu từ chối, cả hai mất hết. Mô hình lý trí hẹp dự đoán người nhận chấp nhận mọi khoản dương, nhưng thực nghiệm thường khác.</p>
        `,
        detail: `
            <h4>Điều xảy ra trong thực nghiệm</h4>
            <p>Offer quá thấp thường bị từ chối. Người nhận sẵn sàng mất tiền để phạt chia bất công. Điều này cho thấy payoff bao gồm công bằng, tôn trọng và trừng phạt.</p>
            <h4>Ứng dụng</h4>
            <ul>
                <li>Đàm phán lương quá ép có thể làm ứng viên từ chối dù offer dương.</li>
                <li>Chia thưởng thiếu công bằng phá động lực đội nhóm.</li>
                <li>Chính sách công bị phản đối nếu người dân thấy quy trình bất công.</li>
            </ul>
        `,
        advanced: `
            <h4>Reciprocity và inequity aversion</h4>
            <p>Các mô hình hành vi thêm thành phần ghét bất bình đẳng hoặc muốn đáp trả hành vi tốt/xấu. Nhờ vậy dự đoán tốt hơn mô hình tiền thuần túy.</p>
            <h4>Bài học thiết kế cơ chế</h4>
            <p>Đừng chỉ tối ưu payout. Hãy tối ưu cả cảm nhận công bằng, minh bạch quy trình và khả năng giải thích quyết định.</p>
        `
    },
    {
        id: 'opec-cartel-case',
        icon: '🛢️',
        title: 'Case: Cartel & quota',
        subtitle: 'Thỏa thuận sản lượng luôn bị cám dỗ phá vỡ',
        category: 'cases',
        level: 'advanced',
        connections: ['prisoners-dilemma', 'repeated-games', 'credible-commitment'],
        simple: `
            <p>Các bên trong cartel muốn cùng hạn chế sản lượng để giữ giá cao. Nhưng từng bên có động cơ bán vượt quota để kiếm thêm khi người khác vẫn giữ kỷ luật.</p>
        `,
        detail: `
            <h4>Cấu trúc song đề tù nhân</h4>
            <p>Nếu mọi người giữ quota, giá cao. Nếu một bên lén vượt quota, bên đó được lợi. Nếu ai cũng vượt, giá giảm và cartel yếu đi.</p>
            <h4>Điều kiện duy trì</h4>
            <ul>
                <li>Khả năng quan sát sản lượng đủ tốt.</li>
                <li>Trừng phạt người vi phạm đủ nhanh.</li>
                <li>Số lượng thành viên không quá lớn.</li>
                <li>Nhu cầu thị trường không biến động quá mạnh.</li>
            </ul>
        `,
        advanced: `
            <h4>Cartel instability</h4>
            <p>Cartel dễ bất ổn khi có shock nhu cầu, thành viên có chi phí khác nhau, hoặc có người cần tiền ngắn hạn hơn lợi ích dài hạn. Đây là vấn đề discount factor trong trò chơi lặp lại.</p>
            <h4>Góc nhìn pháp lý</h4>
            <p>Trong kinh doanh thông thường, thỏa thuận hạn chế cạnh tranh thường vi phạm luật. Phân tích game theory ở đây để hiểu incentives, không phải khuyến nghị thực hiện thông đồng.</p>
        `
    },
    {
        id: 'open-source-commons-case',
        icon: '🧑‍💻',
        title: 'Case: Open source commons',
        subtitle: 'Ai hưởng lợi từ phần mềm mở, ai bảo trì?',
        category: 'cases',
        level: 'intermediate',
        connections: ['public-goods', 'tragedy-of-commons', 'mechanism-design'],
        simple: `
            <p>Phần mềm open source tạo giá trị lớn cho cộng đồng và doanh nghiệp. Nhưng bảo trì, triage issue, viết docs và xử lý bảo mật thường rơi vào số ít maintainer.</p>
        `,
        detail: `
            <h4>Free rider trong open source</h4>
            <p>Nhiều công ty dùng thư viện miễn phí nhưng không đóng góp lại. Với từng công ty, không đóng góp là tiết kiệm chi phí. Với hệ sinh thái, thiếu bảo trì tạo rủi ro chung.</p>
            <h4>Cơ chế cải thiện</h4>
            <ul>
                <li>Tài trợ maintainer trực tiếp.</li>
                <li>Quỹ bảo mật và bug bounty.</li>
                <li>Governance rõ ràng cho dự án lớn.</li>
                <li>Yêu cầu doanh nghiệp đóng góp khi phụ thuộc sâu.</li>
            </ul>
        `,
        advanced: `
            <h4>Incentive-compatible contribution</h4>
            <p>Đóng góp nên tạo payoff rõ cho người đóng góp: giảm rủi ro vận hành, ảnh hưởng roadmap, tăng danh tiếng kỹ thuật, tuyển dụng tốt hơn hoặc đáp ứng compliance.</p>
            <h4>Bài học</h4>
            <p>Hàng hóa công bền không chỉ cần lòng tốt. Nó cần cơ chế chuyển một phần giá trị người dùng nhận được thành nguồn lực bảo trì.</p>
        `
    }
];
