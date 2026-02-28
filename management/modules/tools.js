// Tools - Management tools and frameworks
const toolsData = {
    'agile-scrum': {
        icon: '🔄',
        title: 'Agile & Scrum',
        category: 'tools',
        level: 'beginner',
        connections: ['kanban', 'project-planning', 'team-building'],
        simple: `
            <h3>🔄 Agile & Scrum</h3>
            <p><strong>Agile</strong> là tư duy linh hoạt. <strong>Scrum</strong> là framework thực hiện Agile.</p>
            <div class="example-box">
                <strong>Agile vs Waterfall:</strong><br>
                • 🌊 <strong>Waterfall:</strong> Làm xong tất cả rồi mới giao<br>
                • 🔄 <strong>Agile:</strong> Giao từng phần nhỏ, nhận feedback, cải thiện
            </div>
            <h4>Scrum cơ bản</h4>
            <ul>
                <li>📅 <strong>Sprint:</strong> Chu kỳ 2-4 tuần</li>
                <li>📋 <strong>Backlog:</strong> Danh sách việc cần làm</li>
                <li>🗣️ <strong>Daily standup:</strong> Họp 15 phút mỗi ngày</li>
                <li>🔍 <strong>Retrospective:</strong> Rút kinh nghiệm sau sprint</li>
            </ul>
        `,
        detail: `
            <h3>📊 Chi tiết Scrum</h3>
            <h4>3 vai trò trong Scrum</h4>
            <table>
                <tr><th>Vai trò</th><th>Trách nhiệm</th></tr>
                <tr><td>Product Owner</td><td>Quyết định làm gì, ưu tiên backlog</td></tr>
                <tr><td>Scrum Master</td><td>Đảm bảo quy trình, gỡ blocker</td></tr>
                <tr><td>Development Team</td><td>Thực hiện công việc</td></tr>
            </table>
            <h4>5 sự kiện Scrum</h4>
            <ol>
                <li><strong>Sprint Planning:</strong> Lên kế hoạch sprint</li>
                <li><strong>Daily Scrum:</strong> Đồng bộ hàng ngày</li>
                <li><strong>Sprint Review:</strong> Demo kết quả</li>
                <li><strong>Sprint Retrospective:</strong> Cải tiến quy trình</li>
                <li><strong>Backlog Refinement:</strong> Làm rõ yêu cầu</li>
            </ol>
        `,
        advanced: `
            <h3>🎓 Agile ở quy mô lớn</h3>
            <h4>Scaling Frameworks</h4>
            <ul>
                <li><strong>SAFe:</strong> Scaled Agile Framework - Cho doanh nghiệp lớn</li>
                <li><strong>LeSS:</strong> Large-Scale Scrum - Đơn giản hóa Scrum lớn</li>
                <li><strong>Spotify Model:</strong> Squads, Tribes, Chapters, Guilds</li>
            </ul>
            <h4>Agile Metrics</h4>
            <ul>
                <li><strong>Velocity:</strong> Story points hoàn thành/sprint</li>
                <li><strong>Cycle Time:</strong> Thời gian từ bắt đầu đến hoàn thành</li>
                <li><strong>Lead Time:</strong> Thời gian từ yêu cầu đến giao hàng</li>
                <li><strong>Burndown Chart:</strong> Biểu đồ tiến độ sprint</li>
            </ul>
            <div class="warning-box">
                <strong>⚠️ Lưu ý:</strong> Agile là mindset, không phải quy trình. Đừng "làm Agile" mà hãy "sống Agile".
            </div>
        `
    },
    'kanban': {
        icon: '📋',
        title: 'Kanban',
        category: 'tools',
        level: 'beginner',
        connections: ['agile-scrum', 'time-management', 'project-planning'],
        simple: `
            <h3>📋 Kanban</h3>
            <p><strong>Kanban</strong> là phương pháp quản lý công việc bằng <em>bảng trực quan</em>.</p>
            <div class="example-box">
                <strong>Bảng Kanban đơn giản:</strong><br>
                📝 To Do → 🔨 Doing → ✅ Done
            </div>
            <h4>3 nguyên tắc Kanban</h4>
            <ul>
                <li>👁️ <strong>Trực quan hóa:</strong> Thấy được tất cả công việc</li>
                <li>🚦 <strong>Giới hạn WIP:</strong> Không làm quá nhiều việc cùng lúc</li>
                <li>🔄 <strong>Cải tiến liên tục:</strong> Tối ưu flow</li>
            </ul>
        `,
        detail: `
            <h3>📊 Chi tiết Kanban</h3>
            <h4>Cột Kanban mở rộng</h4>
            <table>
                <tr><th>Cột</th><th>Mô tả</th><th>WIP Limit</th></tr>
                <tr><td>Backlog</td><td>Tất cả ý tưởng</td><td>Không giới hạn</td></tr>
                <tr><td>Selected</td><td>Đã chọn để làm</td><td>5</td></tr>
                <tr><td>In Progress</td><td>Đang làm</td><td>3</td></tr>
                <tr><td>Review</td><td>Đang review</td><td>2</td></tr>
                <tr><td>Done</td><td>Hoàn thành</td><td>Không giới hạn</td></tr>
            </table>
            <h4>WIP Limit là gì?</h4>
            <p><strong>Work In Progress Limit</strong> - Số việc tối đa được phép làm cùng lúc.</p>
            <div class="tip-box">
                <strong>💡 Tại sao quan trọng?</strong> "Stop starting, start finishing." - Multitasking giảm hiệu quả 40%.
            </div>
        `,
        advanced: `
            <h3>🎓 Kanban nâng cao</h3>
            <h4>Kanban Metrics</h4>
            <ul>
                <li><strong>Lead Time:</strong> Từ request → delivery</li>
                <li><strong>Cycle Time:</strong> Từ bắt đầu làm → hoàn thành</li>
                <li><strong>Throughput:</strong> Số item hoàn thành/tuần</li>
                <li><strong>CFD (Cumulative Flow Diagram):</strong> Biểu đồ dòng chảy</li>
            </ul>
            <h4>Kanban vs Scrum</h4>
            <table>
                <tr><th>Khía cạnh</th><th>Kanban</th><th>Scrum</th></tr>
                <tr><td>Chu kỳ</td><td>Liên tục</td><td>Sprint cố định</td></tr>
                <tr><td>Vai trò</td><td>Linh hoạt</td><td>PO, SM, Dev</td></tr>
                <tr><td>Thay đổi</td><td>Bất cứ lúc nào</td><td>Giữa sprint</td></tr>
                <tr><td>Phù hợp</td><td>Ops, support</td><td>Product dev</td></tr>
            </table>
        `
    },
    'okr': {
        icon: '🎯',
        title: 'OKR',
        category: 'tools',
        level: 'intermediate',
        connections: ['goal-setting', 'kpi', 'strategic-thinking'],
        simple: `
            <h3>🎯 OKR (Objectives and Key Results)</h3>
            <p><strong>OKR</strong> là framework đặt mục tiêu: <em>Objective</em> (muốn đạt gì) + <em>Key Results</em> (đo bằng gì).</p>
            <div class="example-box">
                <strong>Ví dụ OKR:</strong><br>
                🎯 <strong>Objective:</strong> Trở thành ứng dụng #1 về trải nghiệm người dùng<br>
                📊 <strong>KR1:</strong> NPS score từ 30 lên 50<br>
                📊 <strong>KR2:</strong> Giảm thời gian phản hồi xuống < 2 giờ<br>
                📊 <strong>KR3:</strong> 90% user đánh giá 4+ sao
            </div>
        `,
        detail: `
            <h3>📊 Cách viết OKR tốt</h3>
            <h4>Objective</h4>
            <ul>
                <li>Truyền cảm hứng, tham vọng</li>
                <li>Định tính (không phải con số)</li>
                <li>Dễ hiểu, dễ nhớ</li>
                <li>3-5 objectives mỗi quý</li>
            </ul>
            <h4>Key Results</h4>
            <ul>
                <li>Đo lường được (con số cụ thể)</li>
                <li>2-5 KR cho mỗi Objective</li>
                <li>Có thể đạt được 70% là tốt</li>
                <li>Tập trung vào outcome, không phải output</li>
            </ul>
            <table>
                <tr><th>Tốt ✅</th><th>Không tốt ❌</th></tr>
                <tr><td>Tăng retention từ 60% lên 80%</td><td>Cải thiện retention</td></tr>
                <tr><td>Ra mắt 3 tính năng mới</td><td>Làm nhiều tính năng hơn</td></tr>
            </table>
        `,
        advanced: `
            <h3>🎓 OKR trong tổ chức</h3>
            <h4>Cascade OKR</h4>
            <ul>
                <li><strong>Company OKR:</strong> CEO đặt, toàn công ty hướng đến</li>
                <li><strong>Team OKR:</strong> Phòng ban đóng góp vào company OKR</li>
                <li><strong>Individual OKR:</strong> Cá nhân đóng góp vào team OKR</li>
            </ul>
            <h4>OKR Review Cycle</h4>
            <ol>
                <li>Đầu quý: Đặt OKR</li>
                <li>Giữa quý: Check-in, điều chỉnh</li>
                <li>Cuối quý: Score (0-1.0) và retrospective</li>
            </ol>
            <h4>Scoring OKR</h4>
            <div class="formula-box">
                0.0-0.3 = 🔴 Thất bại<br>
                0.4-0.6 = 🟡 Có tiến bộ<br>
                0.7-1.0 = 🟢 Thành công
            </div>
            <div class="tip-box">
                <strong>💡 Google:</strong> OKR đạt 0.6-0.7 là lý tưởng. Nếu luôn đạt 1.0, mục tiêu chưa đủ tham vọng.
            </div>
        `
    },
    'kpi': {
        icon: '📈',
        title: 'KPI & Metrics',
        category: 'tools',
        level: 'intermediate',
        connections: ['okr', 'performance-review', 'resource-allocation'],
        simple: `
            <h3>📈 KPI & Metrics</h3>
            <p><strong>KPI</strong> (Key Performance Indicator) là chỉ số đo lường hiệu quả hoạt động.</p>
            <div class="example-box">
                <strong>Ví dụ KPI theo phòng ban:</strong><br>
                • 💰 Sales: Doanh thu, tỷ lệ chuyển đổi<br>
                • 👥 HR: Tỷ lệ nghỉ việc, thời gian tuyển<br>
                • 💻 Tech: Uptime, bug rate
            </div>
        `,
        detail: `
            <h3>📊 Thiết kế KPI hiệu quả</h3>
            <h4>KPI tốt phải</h4>
            <ul>
                <li>Liên kết với mục tiêu kinh doanh</li>
                <li>Đo lường được chính xác</li>
                <li>Có thể hành động (actionable)</li>
                <li>Có target rõ ràng</li>
                <li>Được review định kỳ</li>
            </ul>
            <h4>KPI phổ biến</h4>
            <table>
                <tr><th>Loại</th><th>KPI</th><th>Mục tiêu</th></tr>
                <tr><td>Tài chính</td><td>Revenue Growth</td><td>+20% YoY</td></tr>
                <tr><td>Khách hàng</td><td>NPS</td><td>> 50</td></tr>
                <tr><td>Vận hành</td><td>Cycle Time</td><td>< 2 ngày</td></tr>
                <tr><td>Nhân sự</td><td>Employee Engagement</td><td>> 80%</td></tr>
            </table>
            <div class="warning-box">
                <strong>⚠️ Goodhart's Law:</strong> "Khi một chỉ số trở thành mục tiêu, nó không còn là chỉ số tốt." - Cẩn thận gaming metrics.
            </div>
        `,
        advanced: `
            <h3>🎓 Data-Driven Management</h3>
            <h4>Leading vs Lagging Indicators</h4>
            <table>
                <tr><th>Leading (Dẫn đầu)</th><th>Lagging (Kết quả)</th></tr>
                <tr><td>Số cuộc gọi sales/ngày</td><td>Doanh thu tháng</td></tr>
                <tr><td>Số feature shipped</td><td>User satisfaction</td></tr>
                <tr><td>Training hours</td><td>Employee performance</td></tr>
            </table>
            <h4>Dashboard Design</h4>
            <ul>
                <li><strong>Tầng 1 (CEO):</strong> 5-7 KPI chiến lược</li>
                <li><strong>Tầng 2 (VP):</strong> 10-15 KPI phòng ban</li>
                <li><strong>Tầng 3 (Manager):</strong> 15-20 KPI vận hành</li>
            </ul>
            <h4>Balanced Scorecard</h4>
            <p>Cân bằng 4 góc nhìn: Tài chính, Khách hàng, Quy trình, Học hỏi & Phát triển.</p>
        `
    },
    'swot': {
        icon: '🔍',
        title: 'Phân Tích SWOT',
        category: 'tools',
        level: 'beginner',
        connections: ['strategic-thinking', 'competitive-analysis', 'risk-management'],
        simple: `
            <h3>🔍 Phân tích SWOT</h3>
            <p><strong>SWOT</strong> là công cụ phân tích 4 yếu tố:</p>
            <ul>
                <li>💪 <strong>S</strong>trengths: Điểm mạnh</li>
                <li>😰 <strong>W</strong>eaknesses: Điểm yếu</li>
                <li>🌟 <strong>O</strong>pportunities: Cơ hội</li>
                <li>⚡ <strong>T</strong>hreats: Thách thức</li>
            </ul>
            <div class="example-box">
                <strong>S & W:</strong> Bên trong tổ chức (kiểm soát được)<br>
                <strong>O & T:</strong> Bên ngoài (không kiểm soát được)
            </div>
        `,
        detail: `
            <h3>📊 SWOT chi tiết</h3>
            <h4>Ví dụ: Startup công nghệ</h4>
            <table>
                <tr><th>Strengths 💪</th><th>Weaknesses 😰</th></tr>
                <tr><td>Team kỹ thuật giỏi</td><td>Ít kinh nghiệm business</td></tr>
                <tr><td>Sản phẩm sáng tạo</td><td>Ngân sách hạn chế</td></tr>
                <tr><th>Opportunities 🌟</th><th>Threats ⚡</th></tr>
                <tr><td>Thị trường đang tăng</td><td>Đối thủ lớn gia nhập</td></tr>
                <tr><td>Xu hướng digital</td><td>Thay đổi quy định</td></tr>
            </table>
            <h4>Câu hỏi gợi ý</h4>
            <ul>
                <li><strong>S:</strong> Chúng ta giỏi nhất ở đâu? Lợi thế cạnh tranh?</li>
                <li><strong>W:</strong> Đâu cần cải thiện? Thiếu gì?</li>
                <li><strong>O:</strong> Xu hướng nào có lợi? Thị trường nào mới?</li>
                <li><strong>T:</strong> Đối thủ đang làm gì? Rủi ro bên ngoài?</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 SWOT nâng cao - TOWS Matrix</h3>
            <p>Kết hợp SWOT để tạo chiến lược:</p>
            <table>
                <tr><th></th><th>Opportunities</th><th>Threats</th></tr>
                <tr><td>Strengths</td><td><strong>SO:</strong> Dùng S tận dụng O</td><td><strong>ST:</strong> Dùng S chống T</td></tr>
                <tr><td>Weaknesses</td><td><strong>WO:</strong> Khắc phục W bằng O</td><td><strong>WT:</strong> Giảm W, tránh T</td></tr>
            </table>
            <h4>Khi nào dùng SWOT?</h4>
            <ul>
                <li>Lập chiến lược kinh doanh</li>
                <li>Đánh giá dự án mới</li>
                <li>Phân tích đối thủ</li>
                <li>Review định kỳ (hàng quý)</li>
            </ul>
            <div class="tip-box">
                <strong>💡 Mẹo:</strong> SWOT hiệu quả nhất khi làm cùng nhóm đa dạng (cross-functional team) để có nhiều góc nhìn.
            </div>
        `
    }
};
