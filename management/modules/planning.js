// Planning - Planning and resource management
const planningData = {
    'goal-setting': {
        icon: '🎯',
        title: 'Đặt Mục Tiêu SMART',
        category: 'planning',
        level: 'beginner',
        connections: ['management-functions', 'project-planning', 'okr'],
        simple: `
            <h3>🎯 Đặt mục tiêu SMART</h3>
            <p>Mục tiêu tốt phải theo tiêu chí <strong>SMART</strong>:</p>
            <ul>
                <li><strong>S</strong>pecific: Cụ thể - "Tăng doanh thu" → "Tăng doanh thu 20%"</li>
                <li><strong>M</strong>easurable: Đo được - Có con số cụ thể</li>
                <li><strong>A</strong>chievable: Khả thi - Thực tế, có thể đạt được</li>
                <li><strong>R</strong>elevant: Phù hợp - Liên quan đến mục tiêu lớn</li>
                <li><strong>T</strong>ime-bound: Có thời hạn - Deadline rõ ràng</li>
            </ul>
            <div class="example-box">
                <strong>❌ Mục tiêu mơ hồ:</strong> "Cải thiện website"<br>
                <strong>✅ Mục tiêu SMART:</strong> "Tăng tốc độ tải trang xuống dưới 2 giây trước ngày 30/6"
            </div>
        `,
        detail: `
            <h3>📊 Áp dụng SMART</h3>
            <table>
                <tr><th>Tiêu chí</th><th>Câu hỏi kiểm tra</th><th>Ví dụ tốt</th></tr>
                <tr><td>Specific</td><td>Ai? Cái gì? Ở đâu?</td><td>Team A tăng retention rate</td></tr>
                <tr><td>Measurable</td><td>Bao nhiêu? Đo bằng gì?</td><td>Từ 60% lên 80%</td></tr>
                <tr><td>Achievable</td><td>Có đủ nguồn lực?</td><td>Với budget hiện tại</td></tr>
                <tr><td>Relevant</td><td>Tại sao quan trọng?</td><td>Giảm chi phí tuyển dụng</td></tr>
                <tr><td>Time-bound</td><td>Khi nào hoàn thành?</td><td>Trong Q2/2024</td></tr>
            </table>
            <h4>Phân cấp mục tiêu</h4>
            <ul>
                <li><strong>Tầm nhìn:</strong> 5-10 năm</li>
                <li><strong>Mục tiêu chiến lược:</strong> 1-3 năm</li>
                <li><strong>Mục tiêu chiến thuật:</strong> 3-12 tháng</li>
                <li><strong>Mục tiêu hoạt động:</strong> Tuần/Tháng</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 Beyond SMART</h3>
            <h4>OKR vs SMART</h4>
            <ul>
                <li><strong>SMART:</strong> Phù hợp cho mục tiêu cá nhân, cụ thể</li>
                <li><strong>OKR:</strong> Phù hợp cho mục tiêu tổ chức, tham vọng</li>
            </ul>
            <h4>Sai lầm phổ biến</h4>
            <ul>
                <li>Đặt quá nhiều mục tiêu (nên 3-5 mục tiêu quan trọng)</li>
                <li>Không review định kỳ</li>
                <li>Mục tiêu output thay vì outcome</li>
                <li>Không liên kết mục tiêu cá nhân với tổ chức</li>
            </ul>
            <div class="tip-box">
                <strong>💡 Mẹo:</strong> Sử dụng "leading indicators" (chỉ số dẫn đầu) thay vì chỉ "lagging indicators" (chỉ số kết quả).
            </div>
        `
    },
    'project-planning': {
        icon: '📅',
        title: 'Lập Kế Hoạch Dự Án',
        category: 'planning',
        level: 'intermediate',
        connections: ['goal-setting', 'risk-management', 'resource-allocation', 'agile-scrum'],
        simple: `
            <h3>📅 Lập kế hoạch dự án</h3>
            <p><strong>Kế hoạch dự án</strong> là bản đồ chi tiết từ ý tưởng đến hoàn thành.</p>
            <div class="example-box">
                <strong>5 bước cơ bản:</strong><br>
                1. 🎯 Xác định mục tiêu<br>
                2. 📋 Liệt kê công việc (WBS)<br>
                3. ⏰ Ước lượng thời gian<br>
                4. 👥 Phân công người<br>
                5. 📊 Theo dõi tiến độ
            </div>
        `,
        detail: `
            <h3>📊 Chi tiết lập kế hoạch</h3>
            <h4>Work Breakdown Structure (WBS)</h4>
            <p>Chia dự án thành các phần nhỏ, dễ quản lý:</p>
            <ul>
                <li><strong>Cấp 1:</strong> Dự án tổng thể</li>
                <li><strong>Cấp 2:</strong> Các giai đoạn chính</li>
                <li><strong>Cấp 3:</strong> Các nhiệm vụ cụ thể</li>
                <li><strong>Cấp 4:</strong> Các bước thực hiện</li>
            </ul>
            <h4>Gantt Chart</h4>
            <p>Biểu đồ thời gian hiển thị:</p>
            <ul>
                <li>Thứ tự các công việc</li>
                <li>Thời gian dự kiến</li>
                <li>Sự phụ thuộc giữa các việc</li>
                <li>Đường găng (Critical Path)</li>
            </ul>
            <div class="tip-box">
                <strong>💡 Mẹo:</strong> Luôn thêm buffer 20-30% vào ước lượng thời gian. Mọi thứ luôn lâu hơn bạn nghĩ (Luật Hofstadter).
            </div>
        `,
        advanced: `
            <h3>🎓 Quản lý dự án nâng cao</h3>
            <h4>Critical Path Method (CPM)</h4>
            <p>Xác định chuỗi công việc dài nhất quyết định thời gian dự án:</p>
            <ul>
                <li>Liệt kê tất cả hoạt động</li>
                <li>Xác định phụ thuộc</li>
                <li>Tìm đường đi dài nhất</li>
                <li>Tối ưu hóa đường găng</li>
            </ul>
            <h4>Earned Value Management (EVM)</h4>
            <div class="formula-box">
                CPI = EV / AC (Cost Performance Index)<br>
                SPI = EV / PV (Schedule Performance Index)
            </div>
            <p>CPI > 1: Dưới ngân sách | SPI > 1: Trước deadline</p>
        `
    },
    'risk-management': {
        icon: '⚠️',
        title: 'Quản Lý Rủi Ro',
        category: 'planning',
        level: 'intermediate',
        connections: ['project-planning', 'decision-making', 'strategic-thinking'],
        simple: `
            <h3>⚠️ Quản lý rủi ro</h3>
            <p><strong>Rủi ro</strong> là sự kiện có thể xảy ra và gây ảnh hưởng tiêu cực đến dự án hoặc tổ chức.</p>
            <div class="example-box">
                <strong>Quy trình đơn giản:</strong><br>
                1. 🔍 Nhận diện rủi ro<br>
                2. 📊 Đánh giá mức độ<br>
                3. 🛡️ Lên kế hoạch ứng phó<br>
                4. 👀 Theo dõi liên tục
            </div>
        `,
        detail: `
            <h3>📊 Ma trận rủi ro</h3>
            <p>Đánh giá rủi ro theo 2 yếu tố: <strong>Xác suất xảy ra</strong> × <strong>Mức độ ảnh hưởng</strong></p>
            <table>
                <tr><th></th><th>Ảnh hưởng thấp</th><th>Ảnh hưởng trung bình</th><th>Ảnh hưởng cao</th></tr>
                <tr><td>Xác suất cao</td><td>🟡 Trung bình</td><td>🟠 Cao</td><td>🔴 Rất cao</td></tr>
                <tr><td>Xác suất TB</td><td>🟢 Thấp</td><td>🟡 Trung bình</td><td>🟠 Cao</td></tr>
                <tr><td>Xác suất thấp</td><td>🟢 Rất thấp</td><td>🟢 Thấp</td><td>🟡 Trung bình</td></tr>
            </table>
            <h4>4 chiến lược ứng phó</h4>
            <ul>
                <li><strong>Né tránh:</strong> Loại bỏ nguyên nhân rủi ro</li>
                <li><strong>Giảm thiểu:</strong> Giảm xác suất hoặc ảnh hưởng</li>
                <li><strong>Chuyển giao:</strong> Bảo hiểm, outsource</li>
                <li><strong>Chấp nhận:</strong> Chuẩn bị kế hoạch dự phòng</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 Quản lý rủi ro doanh nghiệp</h3>
            <h4>Enterprise Risk Management (ERM)</h4>
            <ul>
                <li><strong>Rủi ro chiến lược:</strong> Thay đổi thị trường, cạnh tranh</li>
                <li><strong>Rủi ro tài chính:</strong> Tỷ giá, lãi suất, thanh khoản</li>
                <li><strong>Rủi ro vận hành:</strong> Quy trình, nhân sự, công nghệ</li>
                <li><strong>Rủi ro tuân thủ:</strong> Pháp luật, quy định</li>
            </ul>
            <h4>Phân tích kịch bản</h4>
            <ul>
                <li><strong>Best case:</strong> Mọi thứ tốt nhất</li>
                <li><strong>Most likely:</strong> Kịch bản thực tế nhất</li>
                <li><strong>Worst case:</strong> Mọi thứ xấu nhất</li>
            </ul>
            <div class="warning-box">
                <strong>⚠️ Nguyên tắc:</strong> "Hy vọng điều tốt nhất, chuẩn bị cho điều xấu nhất." Luôn có Plan B.
            </div>
        `
    },
    'resource-allocation': {
        icon: '💰',
        title: 'Phân Bổ Nguồn Lực',
        category: 'planning',
        level: 'intermediate',
        connections: ['project-planning', 'time-management', 'kpi'],
        simple: `
            <h3>💰 Phân bổ nguồn lực</h3>
            <p><strong>Nguồn lực</strong> bao gồm: người, tiền, thời gian, thiết bị.</p>
            <div class="example-box">
                <strong>Nguyên tắc:</strong> Đặt nguồn lực đúng chỗ, đúng lúc, đúng lượng.
            </div>
            <h4>3 loại nguồn lực chính</h4>
            <ul>
                <li>👥 <strong>Nhân lực:</strong> Kỹ năng, kinh nghiệm</li>
                <li>💰 <strong>Tài chính:</strong> Ngân sách, chi phí</li>
                <li>⏰ <strong>Thời gian:</strong> Deadline, lịch trình</li>
            </ul>
        `,
        detail: `
            <h3>📊 Phương pháp phân bổ</h3>
            <h4>Ma trận Eisenhower cho nguồn lực</h4>
            <table>
                <tr><th></th><th>Khẩn cấp</th><th>Không khẩn cấp</th></tr>
                <tr><td>Quan trọng</td><td>🔴 Làm ngay (40%)</td><td>🟡 Lên kế hoạch (40%)</td></tr>
                <tr><td>Không quan trọng</td><td>🟠 Ủy quyền (15%)</td><td>🟢 Loại bỏ (5%)</td></tr>
            </table>
            <h4>Capacity Planning</h4>
            <ul>
                <li>Đánh giá năng lực hiện tại</li>
                <li>Dự báo nhu cầu tương lai</li>
                <li>Xác định gap (thiếu hụt)</li>
                <li>Lên kế hoạch bù đắp</li>
            </ul>
            <div class="tip-box">
                <strong>💡 Quy tắc 80/20:</strong> 80% kết quả đến từ 20% nguồn lực. Tìm và tối ưu 20% đó.
            </div>
        `,
        advanced: `
            <h3>🎓 Tối ưu hóa nguồn lực</h3>
            <h4>Resource Leveling</h4>
            <p>Cân bằng tải công việc để tránh quá tải hoặc lãng phí:</p>
            <ul>
                <li>Không ai làm việc > 100% capacity</li>
                <li>Minimized idle time</li>
                <li>Smooth workload distribution</li>
            </ul>
            <h4>Portfolio Management</h4>
            <ul>
                <li><strong>Must-do:</strong> Dự án bắt buộc (compliance, maintenance)</li>
                <li><strong>Should-do:</strong> Dự án cải tiến (efficiency, growth)</li>
                <li><strong>Nice-to-do:</strong> Dự án thử nghiệm (innovation)</li>
            </ul>
            <div class="formula-box">
                ROI = (Lợi ích - Chi phí) / Chi phí × 100%
            </div>
        `
    },
    'time-management': {
        icon: '⏰',
        title: 'Quản Lý Thời Gian',
        category: 'planning',
        level: 'beginner',
        connections: ['delegation', 'resource-allocation', 'goal-setting'],
        simple: `
            <h3>⏰ Quản lý thời gian</h3>
            <p><strong>Quản lý thời gian</strong> là sử dụng thời gian hiệu quả để hoàn thành các mục tiêu quan trọng.</p>
            <div class="example-box">
                <strong>Kỹ thuật Pomodoro:</strong><br>
                🍅 Làm việc 25 phút → Nghỉ 5 phút → Lặp lại<br>
                Sau 4 pomodoro → Nghỉ dài 15-30 phút
            </div>
            <h4>3 nguyên tắc vàng</h4>
            <ul>
                <li>🎯 <strong>Ưu tiên:</strong> Làm việc quan trọng trước</li>
                <li>📋 <strong>Lập danh sách:</strong> Viết ra tất cả việc cần làm</li>
                <li>🚫 <strong>Nói không:</strong> Từ chối việc không quan trọng</li>
            </ul>
        `,
        detail: `
            <h3>📊 Các framework quản lý thời gian</h3>
            <h4>Ma trận Eisenhower</h4>
            <table>
                <tr><th></th><th>Khẩn cấp</th><th>Không khẩn cấp</th></tr>
                <tr><td>Quan trọng</td><td>✅ Làm ngay</td><td>📅 Lên lịch</td></tr>
                <tr><td>Không QT</td><td>🤝 Ủy quyền</td><td>🗑️ Loại bỏ</td></tr>
            </table>
            <h4>Time Blocking</h4>
            <ul>
                <li><strong>Deep Work:</strong> 2-3 khối 90 phút cho công việc sâu</li>
                <li><strong>Admin:</strong> 1 khối cho email, tin nhắn</li>
                <li><strong>Meeting:</strong> Gộp meeting vào 1-2 ngày</li>
                <li><strong>Buffer:</strong> Dự phòng 20% cho việc bất ngờ</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 Quản lý thời gian cho quản lý</h3>
            <h4>Maker's Schedule vs Manager's Schedule</h4>
            <ul>
                <li><strong>Maker:</strong> Cần khối thời gian dài liên tục (4+ giờ)</li>
                <li><strong>Manager:</strong> Chia ngày thành nhiều slot 30-60 phút</li>
            </ul>
            <h4>Tối ưu lịch quản lý</h4>
            <ul>
                <li>Batch similar tasks (gộp việc giống nhau)</li>
                <li>No-meeting days (ngày không họp)</li>
                <li>Office hours (giờ tiếp nhân viên)</li>
                <li>Weekly review (tổng kết tuần)</li>
            </ul>
            <div class="tip-box">
                <strong>💡 Quy tắc 2 phút:</strong> Nếu việc mất dưới 2 phút → Làm ngay. Đừng lên lịch hay ghi chú.
            </div>
        `
    }
};
