// Team - Team management concepts
const teamData = {
    'team-building': {
        icon: '👥',
        title: 'Xây Dựng Nhóm',
        category: 'team',
        level: 'beginner',
        connections: ['leadership-types', 'communication', 'motivation'],
        simple: `
            <h3>👥 Xây dựng nhóm</h3>
            <p><strong>Xây dựng nhóm</strong> là quá trình tạo ra một đội ngũ gắn kết, hiệu quả.</p>
            <div class="example-box">
                <strong>Mô hình Tuckman (4 giai đoạn):</strong><br>
                1. 🤝 <strong>Hình thành:</strong> Mọi người làm quen<br>
                2. ⚡ <strong>Xung đột:</strong> Bất đồng nảy sinh<br>
                3. 📏 <strong>Chuẩn hóa:</strong> Thống nhất cách làm<br>
                4. 🚀 <strong>Hoạt động:</strong> Hiệu suất cao
            </div>
        `,
        detail: `
            <h3>📊 Chi tiết xây dựng nhóm</h3>
            <h4>Vai trò trong nhóm (Belbin)</h4>
            <table>
                <tr><th>Vai trò</th><th>Đặc điểm</th></tr>
                <tr><td>🧠 Plant</td><td>Sáng tạo, đưa ra ý tưởng mới</td></tr>
                <tr><td>🔍 Monitor Evaluator</td><td>Phân tích, đánh giá khách quan</td></tr>
                <tr><td>🤝 Coordinator</td><td>Điều phối, phân công</td></tr>
                <tr><td>💪 Implementer</td><td>Thực thi, biến ý tưởng thành hành động</td></tr>
                <tr><td>✅ Completer Finisher</td><td>Kiểm tra chi tiết, hoàn thiện</td></tr>
            </table>
            <h4>Quy tắc nhóm hiệu quả</h4>
            <ul>
                <li>Mục tiêu chung rõ ràng</li>
                <li>Vai trò được phân công hợp lý</li>
                <li>Giao tiếp mở và minh bạch</li>
                <li>Tin tưởng và tôn trọng lẫn nhau</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 Nhóm hiệu suất cao</h3>
            <h4>5 yếu tố (Patrick Lencioni)</h4>
            <p>5 rào cản cần vượt qua:</p>
            <ol>
                <li><strong>Thiếu tin tưởng:</strong> → Xây dựng vulnerability-based trust</li>
                <li><strong>Sợ xung đột:</strong> → Khuyến khích tranh luận lành mạnh</li>
                <li><strong>Thiếu cam kết:</strong> → Đảm bảo mọi người được lắng nghe</li>
                <li><strong>Né tránh trách nhiệm:</strong> → Peer accountability</li>
                <li><strong>Không chú ý kết quả:</strong> → Focus vào kết quả nhóm</li>
            </ol>
            <h4>An toàn tâm lý (Psychological Safety)</h4>
            <p>Yếu tố #1 quyết định hiệu suất nhóm (nghiên cứu Project Aristotle của Google):</p>
            <ul>
                <li>Mọi người dám nói ra ý kiến</li>
                <li>Sai lầm được xem là cơ hội học</li>
                <li>Không ai bị phạt vì đặt câu hỏi</li>
            </ul>
        `
    },
    'motivation': {
        icon: '🔥',
        title: 'Tạo Động Lực',
        category: 'team',
        level: 'intermediate',
        connections: ['team-building', 'performance-review', 'leadership-types'],
        simple: `
            <h3>🔥 Tạo động lực</h3>
            <p><strong>Động lực</strong> là lý do khiến người ta muốn làm việc và cống hiến.</p>
            <div class="example-box">
                <strong>2 loại động lực:</strong><br>
                • 💰 <strong>Bên ngoài:</strong> Lương, thưởng, thăng chức<br>
                • ❤️ <strong>Bên trong:</strong> Đam mê, ý nghĩa, phát triển
            </div>
            <div class="tip-box">
                <strong>💡 Quan trọng:</strong> Động lực bên trong bền vững hơn bên ngoài rất nhiều!
            </div>
        `,
        detail: `
            <h3>📊 Lý thuyết động lực</h3>
            <h4>Maslow - Tháp nhu cầu</h4>
            <ol>
                <li><strong>Sinh lý:</strong> Lương đủ sống</li>
                <li><strong>An toàn:</strong> Công việc ổn định</li>
                <li><strong>Xã hội:</strong> Thuộc về nhóm</li>
                <li><strong>Tôn trọng:</strong> Được công nhận</li>
                <li><strong>Tự thực hiện:</strong> Phát triển tiềm năng</li>
            </ol>
            <h4>Herzberg - 2 yếu tố</h4>
            <table>
                <tr><th>Yếu tố duy trì (Hygiene)</th><th>Yếu tố thúc đẩy (Motivator)</th></tr>
                <tr><td>Lương cơ bản</td><td>Thành tựu</td></tr>
                <tr><td>Điều kiện làm việc</td><td>Được công nhận</td></tr>
                <tr><td>Chính sách công ty</td><td>Công việc thú vị</td></tr>
                <tr><td>Mối quan hệ đồng nghiệp</td><td>Cơ hội phát triển</td></tr>
            </table>
        `,
        advanced: `
            <h3>🎓 Tạo động lực trong thực tế</h3>
            <h4>Mô hình DRIVE (Daniel Pink)</h4>
            <ul>
                <li><strong>Autonomy:</strong> Tự chủ trong cách làm việc</li>
                <li><strong>Mastery:</strong> Cơ hội nâng cao kỹ năng</li>
                <li><strong>Purpose:</strong> Kết nối với mục đích lớn hơn</li>
            </ul>
            <h4>Chiến thuật cụ thể</h4>
            <ul>
                <li>🎯 Cho phép chọn dự án (20% time)</li>
                <li>📈 Lộ trình phát triển rõ ràng</li>
                <li>🏆 Công nhận kịp thời và cụ thể</li>
                <li>🤝 1-on-1 thường xuyên</li>
                <li>📚 Budget cho học tập</li>
            </ul>
            <div class="warning-box">
                <strong>⚠️ Lưu ý:</strong> Thưởng tiền cho công việc sáng tạo có thể GIẢM động lực nội tại (Overjustification Effect).
            </div>
        `
    },
    'performance-review': {
        icon: '📊',
        title: 'Đánh Giá Hiệu Suất',
        category: 'team',
        level: 'intermediate',
        connections: ['motivation', 'goal-setting', 'kpi'],
        simple: `
            <h3>📊 Đánh giá hiệu suất</h3>
            <p><strong>Đánh giá hiệu suất</strong> là quá trình đo lường và phản hồi về kết quả công việc.</p>
            <div class="example-box">
                <strong>Không chỉ đánh giá cuối năm!</strong><br>
                ✅ Phản hồi liên tục (weekly/bi-weekly)<br>
                ✅ Check-in mục tiêu hàng tháng<br>
                ✅ Review chính thức hàng quý
            </div>
        `,
        detail: `
            <h3>📊 Phương pháp đánh giá</h3>
            <table>
                <tr><th>Phương pháp</th><th>Mô tả</th><th>Ưu điểm</th></tr>
                <tr><td>OKR Review</td><td>Đánh giá theo mục tiêu</td><td>Rõ ràng, đo lường được</td></tr>
                <tr><td>360 Feedback</td><td>Phản hồi từ mọi phía</td><td>Toàn diện</td></tr>
                <tr><td>Peer Review</td><td>Đồng nghiệp đánh giá</td><td>Công bằng hơn</td></tr>
                <tr><td>Self Assessment</td><td>Tự đánh giá</td><td>Phát triển tự nhận thức</td></tr>
            </table>
            <h4>Mô hình SBI cho phản hồi</h4>
            <ul>
                <li><strong>S</strong>ituation: "Trong cuộc họp hôm qua..."</li>
                <li><strong>B</strong>ehavior: "Bạn đã trình bày rất rõ ràng..."</li>
                <li><strong>I</strong>mpact: "Giúp cả team hiểu được vấn đề"</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 Hệ thống đánh giá hiện đại</h3>
            <h4>Continuous Performance Management</h4>
            <ul>
                <li><strong>Weekly check-in:</strong> 15 phút, focus vào blocker</li>
                <li><strong>Monthly 1-on-1:</strong> 30-60 phút, phát triển cá nhân</li>
                <li><strong>Quarterly review:</strong> Đánh giá OKR, điều chỉnh</li>
                <li><strong>Annual review:</strong> Tổng kết, lộ trình sự nghiệp</li>
            </ul>
            <h4>Calibration Session</h4>
            <p>Quản lý cùng cấp họp để đảm bảo đánh giá công bằng:</p>
            <ul>
                <li>So sánh tiêu chuẩn giữa các team</li>
                <li>Loại bỏ bias cá nhân</li>
                <li>Thống nhất kỳ vọng</li>
            </ul>
            <div class="tip-box">
                <strong>💡 Insight:</strong> Phản hồi tốt nhất là cụ thể, kịp thời, và hướng đến hành vi có thể thay đổi.
            </div>
        `
    },
    'remote-team': {
        icon: '🌐',
        title: 'Quản Lý Từ Xa',
        category: 'team',
        level: 'intermediate',
        connections: ['communication', 'team-building', 'team-culture'],
        simple: `
            <h3>🌐 Quản lý từ xa</h3>
            <p><strong>Quản lý từ xa</strong> là dẫn dắt đội ngũ không cùng văn phòng, qua các công cụ trực tuyến.</p>
            <div class="example-box">
                <strong>3 thách thức lớn nhất:</strong><br>
                • 🗣️ Giao tiếp khó hơn<br>
                • 👀 Khó theo dõi tiến độ<br>
                • 🤝 Khó xây dựng gắn kết
            </div>
        `,
        detail: `
            <h3>📊 Framework quản lý từ xa</h3>
            <h4>Công cụ cần thiết</h4>
            <table>
                <tr><th>Mục đích</th><th>Công cụ</th></tr>
                <tr><td>Giao tiếp</td><td>Slack, Teams, Discord</td></tr>
                <tr><td>Video call</td><td>Zoom, Google Meet</td></tr>
                <tr><td>Quản lý dự án</td><td>Jira, Trello, Asana</td></tr>
                <tr><td>Tài liệu</td><td>Notion, Confluence, Google Docs</td></tr>
                <tr><td>Whiteboard</td><td>Miro, FigJam</td></tr>
            </table>
            <h4>Nguyên tắc remote</h4>
            <ul>
                <li><strong>Async-first:</strong> Ưu tiên giao tiếp bất đồng bộ</li>
                <li><strong>Document everything:</strong> Viết ra thay vì nói miệng</li>
                <li><strong>Over-communicate:</strong> Giao tiếp nhiều hơn bình thường</li>
                <li><strong>Trust by default:</strong> Tin tưởng mặc định</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 Remote team hiệu suất cao</h3>
            <h4>Cấu trúc họp remote</h4>
            <ul>
                <li><strong>Daily standup:</strong> 15 phút, async hoặc sync</li>
                <li><strong>Weekly sync:</strong> 30-60 phút, video call</li>
                <li><strong>Virtual coffee:</strong> Chat random để kết nối</li>
                <li><strong>Quarterly offsite:</strong> Gặp trực tiếp định kỳ</li>
            </ul>
            <h4>Quản lý múi giờ</h4>
            <ul>
                <li>Xác định "overlap hours" - giờ chung</li>
                <li>Xoay vòng giờ họp công bằng</li>
                <li>Record mọi cuộc họp quan trọng</li>
                <li>Dùng công cụ quản lý múi giờ (World Time Buddy)</li>
            </ul>
            <div class="tip-box">
                <strong>💡 Insight:</strong> Team remote hiệu quả thường có "team handbook" - tài liệu mô tả cách team hoạt động.
            </div>
        `
    },
    'team-culture': {
        icon: '🏛️',
        title: 'Văn Hóa Nhóm',
        category: 'team',
        level: 'advanced',
        connections: ['team-building', 'motivation', 'mentoring'],
        simple: `
            <h3>🏛️ Văn hóa nhóm</h3>
            <p><strong>Văn hóa</strong> là tập hợp các giá trị, niềm tin và hành vi chung của nhóm.</p>
            <div class="example-box">
                <strong>Peter Drucker:</strong> "Văn hóa ăn chiến lược vào bữa sáng."<br>
                Nghĩa là: Văn hóa quan trọng hơn cả chiến lược!
            </div>
        `,
        detail: `
            <h3>📊 Xây dựng văn hóa</h3>
            <h4>Các yếu tố văn hóa</h4>
            <table>
                <tr><th>Yếu tố</th><th>Ví dụ</th></tr>
                <tr><td>Giá trị cốt lõi</td><td>Minh bạch, đổi mới, khách hàng trước</td></tr>
                <tr><td>Nghi lễ</td><td>Demo Friday, Hackathon, Team dinner</td></tr>
                <tr><td>Biểu tượng</td><td>Logo, mascot, slogan</td></tr>
                <tr><td>Câu chuyện</td><td>Lịch sử công ty, thành tích đáng nhớ</td></tr>
                <tr><td>Hành vi mẫu</td><td>Lãnh đạo làm gương</td></tr>
            </table>
            <h4>Thay đổi văn hóa</h4>
            <ul>
                <li>Xác định văn hóa hiện tại (As-Is)</li>
                <li>Định nghĩa văn hóa mong muốn (To-Be)</li>
                <li>Xác định gap và hành động cụ thể</li>
                <li>Lãnh đạo phải là người đầu tiên thay đổi</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 Văn hóa tổ chức học hỏi</h3>
            <h4>Growth Mindset Culture</h4>
            <ul>
                <li><strong>Thất bại = Học hỏi:</strong> Blameless postmortem</li>
                <li><strong>Feedback = Quà tặng:</strong> Khuyến khích phản hồi</li>
                <li><strong>Thử nghiệm = Giá trị:</strong> Cho phép fail fast</li>
            </ul>
            <h4>Mô hình Competing Values Framework</h4>
            <ul>
                <li><strong>Clan (Gia đình):</strong> Hợp tác, gắn kết</li>
                <li><strong>Adhocracy (Sáng tạo):</strong> Đổi mới, linh hoạt</li>
                <li><strong>Market (Thị trường):</strong> Cạnh tranh, kết quả</li>
                <li><strong>Hierarchy (Thứ bậc):</strong> Ổn định, quy trình</li>
            </ul>
            <div class="warning-box">
                <strong>⚠️ Lưu ý:</strong> Văn hóa không thể bị ép buộc. Nó được xây dựng qua hành động hàng ngày, đặc biệt từ leadership.
            </div>
        `
    }
};
