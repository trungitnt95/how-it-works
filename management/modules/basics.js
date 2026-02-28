// Management Basics - Core concepts
const managementBasicsData = {
    'what-is-management': {
        icon: '📋',
        title: 'Quản Lý Là Gì',
        category: 'basics',
        level: 'beginner',
        connections: ['management-styles', 'management-functions', 'leadership-types'],
        simple: `
            <h3>📋 Quản lý là gì?</h3>
            <p><strong>Quản lý</strong> là quá trình <em>lập kế hoạch, tổ chức, lãnh đạo và kiểm soát</em> các nguồn lực để đạt được mục tiêu.</p>
            <div class="example-box">
                <strong>Ví dụ:</strong> Quản lý một quán cà phê = Lên menu (kế hoạch) + Phân công nhân viên (tổ chức) + Động viên đội ngũ (lãnh đạo) + Kiểm tra chất lượng (kiểm soát)
            </div>
            <h4>Tại sao cần quản lý?</h4>
            <ul>
                <li><strong>Định hướng:</strong> Biết đi đâu và làm gì</li>
                <li><strong>Hiệu quả:</strong> Dùng nguồn lực tốt nhất</li>
                <li><strong>Phối hợp:</strong> Mọi người cùng hướng đến mục tiêu</li>
            </ul>
        `,
        detail: `
            <h3>📊 Chi tiết về quản lý</h3>
            <p>Quản lý bao gồm 4 chức năng chính theo Henri Fayol:</p>
            <table>
                <tr><th>Chức năng</th><th>Mô tả</th><th>Ví dụ</th></tr>
                <tr><td>Lập kế hoạch</td><td>Xác định mục tiêu và cách đạt được</td><td>Kế hoạch kinh doanh quý</td></tr>
                <tr><td>Tổ chức</td><td>Phân bổ nguồn lực và cấu trúc</td><td>Sơ đồ tổ chức công ty</td></tr>
                <tr><td>Lãnh đạo</td><td>Hướng dẫn và động viên nhân viên</td><td>Họp 1-on-1 hàng tuần</td></tr>
                <tr><td>Kiểm soát</td><td>Đo lường và điều chỉnh kết quả</td><td>Báo cáo KPI hàng tháng</td></tr>
            </table>
            <h4>Các cấp quản lý</h4>
            <ul>
                <li><strong>Quản lý cấp cao:</strong> CEO, CTO - Chiến lược tổng thể</li>
                <li><strong>Quản lý cấp trung:</strong> Trưởng phòng - Triển khai chiến lược</li>
                <li><strong>Quản lý cấp cơ sở:</strong> Team lead - Giám sát công việc hàng ngày</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 Lý thuyết quản lý hiện đại</h3>
            <h4>Các trường phái quản lý</h4>
            <ul>
                <li><strong>Quản lý khoa học (Taylor):</strong> Tối ưu hóa quy trình, đo lường hiệu suất</li>
                <li><strong>Quản lý hành chính (Fayol):</strong> 14 nguyên tắc quản lý</li>
                <li><strong>Quan hệ con người (Mayo):</strong> Yếu tố xã hội ảnh hưởng năng suất</li>
                <li><strong>Quản lý hệ thống:</strong> Tổ chức như một hệ thống phức tạp</li>
            </ul>
            <h4>Quản lý trong thời đại số</h4>
            <ul>
                <li>Quản lý từ xa và hybrid</li>
                <li>Ra quyết định dựa trên dữ liệu</li>
                <li>Agile và linh hoạt</li>
                <li>Quản lý đa văn hóa</li>
            </ul>
            <div class="tip-box">
                <strong>💡 Insight:</strong> Quản lý tốt = 20% kỹ thuật + 80% con người. Kỹ năng mềm quan trọng hơn bạn nghĩ.
            </div>
        `
    },
    'management-styles': {
        icon: '🎭',
        title: 'Các Phong Cách Quản Lý',
        category: 'basics',
        level: 'beginner',
        connections: ['what-is-management', 'leadership-types', 'delegation'],
        simple: `
            <h3>🎭 Các phong cách quản lý</h3>
            <p>Mỗi người quản lý có <strong>phong cách riêng</strong> để dẫn dắt đội ngũ.</p>
            <div class="example-box">
                <strong>3 phong cách phổ biến:</strong><br>
                • 👨‍✈️ <strong>Chỉ đạo:</strong> "Làm theo cách này"<br>
                • 🤝 <strong>Dân chủ:</strong> "Mọi người nghĩ sao?"<br>
                • 🕊️ <strong>Tự do:</strong> "Tự quyết định đi"
            </div>
        `,
        detail: `
            <h3>📊 Chi tiết phong cách quản lý</h3>
            <table>
                <tr><th>Phong cách</th><th>Ưu điểm</th><th>Nhược điểm</th><th>Phù hợp khi</th></tr>
                <tr><td>Chỉ đạo</td><td>Nhanh, rõ ràng</td><td>Ít sáng tạo</td><td>Khẩn cấp, nhân viên mới</td></tr>
                <tr><td>Dân chủ</td><td>Sáng tạo, gắn kết</td><td>Chậm hơn</td><td>Nhóm có kinh nghiệm</td></tr>
                <tr><td>Tự do</td><td>Tự chủ cao</td><td>Thiếu kiểm soát</td><td>Chuyên gia, senior</td></tr>
                <tr><td>Huấn luyện</td><td>Phát triển người</td><td>Tốn thời gian</td><td>Đào tạo nhân viên</td></tr>
                <tr><td>Phục vụ</td><td>Tin tưởng cao</td><td>Khó mở rộng</td><td>Nhóm tự quản</td></tr>
            </table>
            <div class="tip-box">
                <strong>💡 Mẹo:</strong> Không có phong cách nào tốt nhất. Quản lý giỏi biết chuyển đổi phong cách theo tình huống.
            </div>
        `,
        advanced: `
            <h3>🎓 Quản lý tình huống (Situational Leadership)</h3>
            <h4>Mô hình Hersey-Blanchard</h4>
            <p>Chọn phong cách dựa trên <strong>năng lực</strong> và <strong>cam kết</strong> của nhân viên:</p>
            <ul>
                <li><strong>S1 - Chỉ đạo:</strong> Năng lực thấp, cam kết cao → Hướng dẫn cụ thể</li>
                <li><strong>S2 - Huấn luyện:</strong> Năng lực trung bình, cam kết thấp → Giải thích và thuyết phục</li>
                <li><strong>S3 - Hỗ trợ:</strong> Năng lực cao, cam kết không ổn định → Lắng nghe và khuyến khích</li>
                <li><strong>S4 - Ủy quyền:</strong> Năng lực cao, cam kết cao → Giao toàn quyền</li>
            </ul>
            <div class="warning-box">
                <strong>⚠️ Lưu ý:</strong> Phong cách quản lý cũng cần phù hợp với văn hóa tổ chức và ngành nghề.
            </div>
        `
    },
    'management-functions': {
        icon: '⚙️',
        title: 'Chức Năng Quản Lý',
        category: 'basics',
        level: 'beginner',
        connections: ['what-is-management', 'goal-setting', 'project-planning'],
        simple: `
            <h3>⚙️ 4 chức năng quản lý</h3>
            <p>Mọi hoạt động quản lý đều xoay quanh <strong>4 chức năng cốt lõi</strong>:</p>
            <ul>
                <li>📝 <strong>Lập kế hoạch:</strong> Xác định "Đi đâu?" và "Làm thế nào?"</li>
                <li>🏗️ <strong>Tổ chức:</strong> Sắp xếp người và nguồn lực</li>
                <li>🎯 <strong>Lãnh đạo:</strong> Truyền cảm hứng và dẫn dắt</li>
                <li>📊 <strong>Kiểm soát:</strong> Theo dõi và điều chỉnh</li>
            </ul>
            <div class="example-box">
                <strong>Ví dụ tổ chức tiệc:</strong> Lên danh sách khách (kế hoạch) → Phân công mua đồ (tổ chức) → Động viên mọi người (lãnh đạo) → Kiểm tra tiến độ (kiểm soát)
            </div>
        `,
        detail: `
            <h3>📊 Chi tiết từng chức năng</h3>
            <h4>1. Lập kế hoạch (Planning)</h4>
            <ul>
                <li>Đặt mục tiêu SMART</li>
                <li>Phân tích môi trường (SWOT)</li>
                <li>Xây dựng chiến lược</li>
                <li>Lập ngân sách</li>
            </ul>
            <h4>2. Tổ chức (Organizing)</h4>
            <ul>
                <li>Thiết kế cơ cấu tổ chức</li>
                <li>Phân công nhiệm vụ</li>
                <li>Xác định quyền hạn</li>
            </ul>
            <h4>3. Lãnh đạo (Leading)</h4>
            <ul>
                <li>Giao tiếp hiệu quả</li>
                <li>Tạo động lực</li>
                <li>Giải quyết xung đột</li>
            </ul>
            <h4>4. Kiểm soát (Controlling)</h4>
            <ul>
                <li>Đặt tiêu chuẩn đo lường</li>
                <li>So sánh kết quả thực tế</li>
                <li>Hành động điều chỉnh</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 Mô hình PDCA</h3>
            <p>Chu trình cải tiến liên tục của Deming:</p>
            <div class="formula-box">
                Plan → Do → Check → Act → (Lặp lại)
            </div>
            <h4>Áp dụng PDCA</h4>
            <ul>
                <li><strong>Plan:</strong> Xác định vấn đề, đặt mục tiêu, lên phương án</li>
                <li><strong>Do:</strong> Thực hiện thử nghiệm nhỏ</li>
                <li><strong>Check:</strong> Đo lường kết quả, so sánh với mục tiêu</li>
                <li><strong>Act:</strong> Chuẩn hóa nếu thành công, điều chỉnh nếu thất bại</li>
            </ul>
            <div class="tip-box">
                <strong>💡 Insight:</strong> PDCA là nền tảng của Kaizen (cải tiến liên tục) và Lean Management.
            </div>
        `
    },
    'decision-making': {
        icon: '🎯',
        title: 'Ra Quyết Định',
        category: 'basics',
        level: 'intermediate',
        connections: ['management-functions', 'risk-management', 'strategic-thinking'],
        simple: `
            <h3>🎯 Ra quyết định</h3>
            <p><strong>Ra quyết định</strong> là quá trình chọn phương án tốt nhất trong các lựa chọn có sẵn.</p>
            <div class="example-box">
                <strong>Quy trình đơn giản:</strong><br>
                1. Xác định vấn đề<br>
                2. Liệt kê các lựa chọn<br>
                3. Đánh giá ưu nhược<br>
                4. Chọn và thực hiện
            </div>
        `,
        detail: `
            <h3>📊 Các phương pháp ra quyết định</h3>
            <table>
                <tr><th>Phương pháp</th><th>Mô tả</th><th>Khi nào dùng</th></tr>
                <tr><td>Ma trận quyết định</td><td>Cho điểm từng tiêu chí</td><td>Nhiều lựa chọn phức tạp</td></tr>
                <tr><td>Cây quyết định</td><td>Vẽ sơ đồ các nhánh</td><td>Quyết định tuần tự</td></tr>
                <tr><td>Phân tích chi phí-lợi ích</td><td>So sánh cost vs benefit</td><td>Đầu tư, mua sắm</td></tr>
                <tr><td>Brainstorming</td><td>Thu thập ý tưởng nhóm</td><td>Cần sáng tạo</td></tr>
            </table>
            <h4>Bẫy tâm lý khi ra quyết định</h4>
            <ul>
                <li><strong>Confirmation bias:</strong> Chỉ tìm thông tin ủng hộ</li>
                <li><strong>Sunk cost fallacy:</strong> Tiếc chi phí đã bỏ ra</li>
                <li><strong>Analysis paralysis:</strong> Phân tích quá nhiều, không hành động</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 Ra quyết định dựa trên dữ liệu</h3>
            <h4>Framework RAPID</h4>
            <ul>
                <li><strong>R</strong>ecommend: Ai đề xuất?</li>
                <li><strong>A</strong>gree: Ai cần đồng ý?</li>
                <li><strong>P</strong>erform: Ai thực hiện?</li>
                <li><strong>I</strong>nput: Ai cung cấp thông tin?</li>
                <li><strong>D</strong>ecide: Ai quyết định cuối cùng?</li>
            </ul>
            <h4>Quyết định trong bất định</h4>
            <p>Khi không đủ thông tin, sử dụng:</p>
            <ul>
                <li>Phân tích kịch bản (Scenario Analysis)</li>
                <li>Quyết định ngược (Reversible Decision)</li>
                <li>Nguyên tắc 70%: Đủ 70% thông tin → quyết định</li>
            </ul>
            <div class="warning-box">
                <strong>⚠️ Jeff Bezos:</strong> "Hầu hết quyết định nên được đưa ra với khoảng 70% thông tin bạn muốn có. Nếu đợi 90%, bạn đã quá chậm."
            </div>
        `
    }
};
