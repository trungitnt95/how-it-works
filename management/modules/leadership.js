// Leadership - Leadership concepts
const leadershipData = {
    'leadership-types': {
        icon: '👑',
        title: 'Các Kiểu Lãnh Đạo',
        category: 'leadership',
        level: 'beginner',
        connections: ['management-styles', 'emotional-intelligence', 'communication'],
        simple: `
            <h3>👑 Các kiểu lãnh đạo</h3>
            <p><strong>Lãnh đạo</strong> là khả năng <em>ảnh hưởng và truyền cảm hứng</em> cho người khác hướng đến mục tiêu chung.</p>
            <div class="example-box">
                <strong>Các kiểu phổ biến:</strong><br>
                • 🦁 <strong>Chuyển đổi:</strong> Truyền cảm hứng thay đổi lớn<br>
                • 📋 <strong>Giao dịch:</strong> Thưởng phạt rõ ràng<br>
                • 🤝 <strong>Phục vụ:</strong> Đặt nhu cầu đội ngũ lên trước
            </div>
        `,
        detail: `
            <h3>📊 Chi tiết các kiểu lãnh đạo</h3>
            <table>
                <tr><th>Kiểu</th><th>Đặc điểm</th><th>Ví dụ</th></tr>
                <tr><td>Chuyển đổi (Transformational)</td><td>Tầm nhìn lớn, truyền cảm hứng</td><td>Steve Jobs, Elon Musk</td></tr>
                <tr><td>Giao dịch (Transactional)</td><td>Quy tắc rõ, thưởng phạt</td><td>Quản lý dây chuyền sản xuất</td></tr>
                <tr><td>Phục vụ (Servant)</td><td>Hỗ trợ đội ngũ phát triển</td><td>Satya Nadella tại Microsoft</td></tr>
                <tr><td>Authentic</td><td>Chân thật, minh bạch</td><td>Lãnh đạo startup</td></tr>
            </table>
            <div class="tip-box">
                <strong>💡 Mẹo:</strong> Lãnh đạo ≠ Quản lý. Lãnh đạo là "làm đúng việc", quản lý là "làm việc đúng cách".
            </div>
        `,
        advanced: `
            <h3>🎓 Lãnh đạo thích ứng</h3>
            <h4>Mô hình 5 cấp độ lãnh đạo (John Maxwell)</h4>
            <ol>
                <li><strong>Vị trí:</strong> Người ta theo vì bạn có chức danh</li>
                <li><strong>Sự cho phép:</strong> Theo vì họ muốn</li>
                <li><strong>Sản xuất:</strong> Theo vì những gì bạn đã làm cho tổ chức</li>
                <li><strong>Phát triển con người:</strong> Theo vì bạn đã làm cho họ</li>
                <li><strong>Đỉnh cao:</strong> Theo vì bạn là ai và bạn đại diện cho điều gì</li>
            </ol>
            <div class="warning-box">
                <strong>⚠️ Lưu ý:</strong> Lãnh đạo giỏi không phải lúc nào cũng là người giỏi nhất trong phòng, mà là người khiến mọi người trong phòng giỏi hơn.
            </div>
        `
    },
    'emotional-intelligence': {
        icon: '❤️',
        title: 'Trí Tuệ Cảm Xúc',
        category: 'leadership',
        level: 'intermediate',
        connections: ['leadership-types', 'communication', 'conflict-resolution'],
        simple: `
            <h3>❤️ Trí tuệ cảm xúc (EQ)</h3>
            <p><strong>EQ</strong> là khả năng <em>nhận biết, hiểu và quản lý</em> cảm xúc của bản thân và người khác.</p>
            <div class="example-box">
                <strong>5 thành phần (Daniel Goleman):</strong><br>
                • Tự nhận thức<br>
                • Tự điều chỉnh<br>
                • Động lực nội tại<br>
                • Đồng cảm<br>
                • Kỹ năng xã hội
            </div>
        `,
        detail: `
            <h3>📊 Chi tiết EQ trong quản lý</h3>
            <table>
                <tr><th>Thành phần</th><th>Biểu hiện</th><th>Cách rèn luyện</th></tr>
                <tr><td>Tự nhận thức</td><td>Biết điểm mạnh, yếu</td><td>Viết nhật ký, xin feedback</td></tr>
                <tr><td>Tự điều chỉnh</td><td>Kiểm soát cảm xúc</td><td>Thiền, đếm đến 10</td></tr>
                <tr><td>Động lực</td><td>Đam mê nội tại</td><td>Đặt mục tiêu cá nhân</td></tr>
                <tr><td>Đồng cảm</td><td>Hiểu cảm xúc người khác</td><td>Lắng nghe chủ động</td></tr>
                <tr><td>Kỹ năng xã hội</td><td>Xây dựng quan hệ</td><td>Networking, teamwork</td></tr>
            </table>
            <div class="tip-box">
                <strong>💡 Nghiên cứu:</strong> EQ chiếm 58% hiệu suất công việc ở mọi vị trí. 90% top performers có EQ cao.
            </div>
        `,
        advanced: `
            <h3>🎓 EQ trong lãnh đạo</h3>
            <h4>Ứng dụng EQ cho quản lý</h4>
            <ul>
                <li><strong>Phản hồi khó:</strong> Dùng mô hình SBI (Situation-Behavior-Impact)</li>
                <li><strong>Quản lý stress:</strong> Nhận biết trigger, có kế hoạch ứng phó</li>
                <li><strong>Xây dựng trust:</strong> Nhất quán giữa lời nói và hành động</li>
            </ul>
            <h4>Đo lường EQ</h4>
            <ul>
                <li>EQ-i 2.0 Assessment</li>
                <li>MSCEIT (Mayer-Salovey-Caruso)</li>
                <li>360-degree feedback</li>
            </ul>
            <div class="warning-box">
                <strong>⚠️ Lưu ý:</strong> EQ có thể được phát triển ở mọi lứa tuổi, nhưng cần thực hành liên tục và phản hồi trung thực.
            </div>
        `
    },
    'communication': {
        icon: '🗣️',
        title: 'Giao Tiếp Hiệu Quả',
        category: 'leadership',
        level: 'beginner',
        connections: ['leadership-types', 'emotional-intelligence', 'conflict-resolution'],
        simple: `
            <h3>🗣️ Giao tiếp hiệu quả</h3>
            <p><strong>Giao tiếp</strong> là kỹ năng quan trọng nhất của người quản lý.</p>
            <div class="example-box">
                <strong>Nguyên tắc 7-38-55:</strong><br>
                • 7% = Nội dung lời nói<br>
                • 38% = Giọng điệu<br>
                • 55% = Ngôn ngữ cơ thể
            </div>
            <h4>Lắng nghe chủ động</h4>
            <ul>
                <li>👂 Tập trung vào người nói</li>
                <li>🔄 Phản hồi lại ý chính</li>
                <li>❓ Đặt câu hỏi mở</li>
            </ul>
        `,
        detail: `
            <h3>📊 Các kênh giao tiếp</h3>
            <table>
                <tr><th>Kênh</th><th>Ưu điểm</th><th>Nhược điểm</th><th>Phù hợp</th></tr>
                <tr><td>Gặp mặt</td><td>Phong phú nhất</td><td>Tốn thời gian</td><td>Vấn đề nhạy cảm</td></tr>
                <tr><td>Video call</td><td>Thấy biểu cảm</td><td>Cần công nghệ</td><td>Team từ xa</td></tr>
                <tr><td>Email</td><td>Có bằng chứng</td><td>Dễ hiểu nhầm</td><td>Thông tin chính thức</td></tr>
                <tr><td>Chat</td><td>Nhanh, tiện</td><td>Thiếu context</td><td>Trao đổi nhanh</td></tr>
            </table>
            <h4>Framework giao tiếp PREP</h4>
            <ul>
                <li><strong>P</strong>oint: Nêu ý chính trước</li>
                <li><strong>R</strong>eason: Giải thích lý do</li>
                <li><strong>E</strong>xample: Cho ví dụ cụ thể</li>
                <li><strong>P</strong>oint: Nhắc lại ý chính</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 Giao tiếp nâng cao</h3>
            <h4>Difficult Conversations</h4>
            <ul>
                <li><strong>Bước 1:</strong> Chuẩn bị - Xác định mục tiêu cuộc trò chuyện</li>
                <li><strong>Bước 2:</strong> Mở đầu trung lập - Mô tả sự kiện, không đánh giá</li>
                <li><strong>Bước 3:</strong> Lắng nghe - Hiểu góc nhìn đối phương</li>
                <li><strong>Bước 4:</strong> Cùng tìm giải pháp</li>
            </ul>
            <h4>Giao tiếp với stakeholders</h4>
            <ul>
                <li><strong>Lên trên:</strong> Ngắn gọn, focus vào kết quả và rủi ro</li>
                <li><strong>Ngang hàng:</strong> Hợp tác, win-win</li>
                <li><strong>Xuống dưới:</strong> Rõ ràng, hỗ trợ, context đầy đủ</li>
            </ul>
        `
    },
    'conflict-resolution': {
        icon: '⚖️',
        title: 'Giải Quyết Xung Đột',
        category: 'leadership',
        level: 'intermediate',
        connections: ['emotional-intelligence', 'communication', 'team-building'],
        simple: `
            <h3>⚖️ Giải quyết xung đột</h3>
            <p><strong>Xung đột</strong> là điều tự nhiên trong mọi nhóm. Quan trọng là cách bạn xử lý nó.</p>
            <div class="example-box">
                <strong>5 cách xử lý xung đột:</strong><br>
                • 🏆 Cạnh tranh: Thắng-Thua<br>
                • 🤝 Hợp tác: Thắng-Thắng<br>
                • 🔄 Thỏa hiệp: Đôi bên nhượng bộ<br>
                • 🏃 Né tránh: Bỏ qua<br>
                • 🎁 Nhượng bộ: Hy sinh lợi ích mình
            </div>
        `,
        detail: `
            <h3>📊 Mô hình Thomas-Kilmann</h3>
            <table>
                <tr><th>Phong cách</th><th>Khi nào dùng</th><th>Rủi ro</th></tr>
                <tr><td>Cạnh tranh</td><td>Vấn đề khẩn cấp, quan trọng</td><td>Gây oán giận</td></tr>
                <tr><td>Hợp tác</td><td>Cả hai bên quan trọng</td><td>Tốn thời gian</td></tr>
                <tr><td>Thỏa hiệp</td><td>Cần giải pháp nhanh</td><td>Không ai hài lòng 100%</td></tr>
                <tr><td>Né tránh</td><td>Vấn đề nhỏ, cần thời gian</td><td>Vấn đề tích tụ</td></tr>
                <tr><td>Nhượng bộ</td><td>Mối quan hệ quan trọng hơn</td><td>Mất lợi ích</td></tr>
            </table>
            <h4>Quy trình giải quyết</h4>
            <ol>
                <li>Xác định nguyên nhân gốc</li>
                <li>Lắng nghe tất cả các bên</li>
                <li>Tìm điểm chung</li>
                <li>Đề xuất giải pháp win-win</li>
                <li>Theo dõi sau giải quyết</li>
            </ol>
        `,
        advanced: `
            <h3>🎓 Xung đột mang tính xây dựng</h3>
            <h4>Xung đột tốt vs xấu</h4>
            <ul>
                <li><strong>Tốt (Task conflict):</strong> Tranh luận về ý tưởng, cách làm → Sáng tạo hơn</li>
                <li><strong>Xấu (Relationship conflict):</strong> Công kích cá nhân → Phá hủy đội ngũ</li>
            </ul>
            <h4>Tạo môi trường "an toàn tâm lý"</h4>
            <ul>
                <li>Khuyến khích bất đồng ý kiến về công việc</li>
                <li>Tách biệt con người khỏi vấn đề</li>
                <li>Dùng "Tôi thấy..." thay vì "Bạn sai..."</li>
                <li>Thiết lập quy tắc tranh luận rõ ràng</li>
            </ul>
            <div class="tip-box">
                <strong>💡 Insight:</strong> Nhóm có hiệu suất cao thường có mức xung đột task vừa phải, nhưng xung đột relationship rất thấp.
            </div>
        `
    },
    'delegation': {
        icon: '🤝',
        title: 'Ủy Quyền',
        category: 'leadership',
        level: 'intermediate',
        connections: ['management-styles', 'team-building', 'time-management'],
        simple: `
            <h3>🤝 Ủy quyền</h3>
            <p><strong>Ủy quyền</strong> là giao việc và trách nhiệm cho người khác để bạn tập trung vào việc quan trọng hơn.</p>
            <div class="example-box">
                <strong>Công thức 70%:</strong> Nếu ai đó có thể làm được 70% so với bạn → Hãy ủy quyền!
            </div>
            <h4>Tại sao cần ủy quyền?</h4>
            <ul>
                <li>⏰ Giải phóng thời gian cho việc chiến lược</li>
                <li>📈 Phát triển năng lực đội ngũ</li>
                <li>💪 Tăng động lực và sự chủ động</li>
            </ul>
        `,
        detail: `
            <h3>📊 Framework ủy quyền</h3>
            <h4>Các cấp độ ủy quyền</h4>
            <table>
                <tr><th>Cấp độ</th><th>Mô tả</th><th>Ví dụ</th></tr>
                <tr><td>1. Điều tra</td><td>"Tìm hiểu và báo cáo lại"</td><td>Nghiên cứu công cụ mới</td></tr>
                <tr><td>2. Đề xuất</td><td>"Đề xuất phương án, tôi quyết"</td><td>Chọn nhà cung cấp</td></tr>
                <tr><td>3. Tham vấn</td><td>"Quyết định sau khi hỏi tôi"</td><td>Thay đổi quy trình nhỏ</td></tr>
                <tr><td>4. Đồng thuận</td><td>"Quyết cùng nhau"</td><td>Tuyển dụng thành viên</td></tr>
                <tr><td>5. Toàn quyền</td><td>"Tự quyết, báo kết quả"</td><td>Quản lý dự án nhỏ</td></tr>
            </table>
        `,
        advanced: `
            <h3>🎓 Ủy quyền nâng cao</h3>
            <h4>Sai lầm phổ biến</h4>
            <ul>
                <li><strong>Ủy quyền ngược:</strong> Nhân viên "trả" việc lại cho bạn</li>
                <li><strong>Micro-management:</strong> Giao việc nhưng kiểm soát từng bước</li>
                <li><strong>Chỉ giao việc nhỏ:</strong> Không cho cơ hội phát triển</li>
            </ul>
            <h4>Checklist ủy quyền hiệu quả</h4>
            <ol>
                <li>✅ Kết quả mong đợi rõ ràng (What)</li>
                <li>✅ Deadline cụ thể (When)</li>
                <li>✅ Quyền hạn được xác định (Authority)</li>
                <li>✅ Nguồn lực đầy đủ (Resources)</li>
                <li>✅ Điểm check-in đã thỏa thuận (Follow-up)</li>
            </ol>
            <div class="warning-box">
                <strong>⚠️ Nguyên tắc vàng:</strong> Ủy quyền nhiệm vụ, KHÔNG ủy quyền trách nhiệm. Bạn vẫn chịu trách nhiệm cuối cùng.
            </div>
        `
    },
    'mentoring': {
        icon: '🌱',
        title: 'Mentoring & Coaching',
        category: 'leadership',
        level: 'advanced',
        connections: ['leadership-types', 'emotional-intelligence', 'team-culture'],
        simple: `
            <h3>🌱 Mentoring & Coaching</h3>
            <p><strong>Mentoring</strong> là chia sẻ kinh nghiệm dài hạn. <strong>Coaching</strong> là hướng dẫn kỹ năng cụ thể.</p>
            <div class="example-box">
                <strong>Sự khác biệt:</strong><br>
                • 🧓 <strong>Mentor:</strong> "Khi tôi gặp tình huống này, tôi đã làm..."<br>
                • 🏋️ <strong>Coach:</strong> "Bạn nghĩ mình nên làm gì tiếp theo?"
            </div>
        `,
        detail: `
            <h3>📊 So sánh Mentoring vs Coaching</h3>
            <table>
                <tr><th>Khía cạnh</th><th>Mentoring</th><th>Coaching</th></tr>
                <tr><td>Thời gian</td><td>Dài hạn (6-12 tháng)</td><td>Ngắn hạn (theo dự án)</td></tr>
                <tr><td>Phương pháp</td><td>Chia sẻ kinh nghiệm</td><td>Đặt câu hỏi, hướng dẫn</td></tr>
                <tr><td>Mục tiêu</td><td>Phát triển sự nghiệp</td><td>Cải thiện kỹ năng cụ thể</td></tr>
                <tr><td>Mối quan hệ</td><td>Đàn anh - đàn em</td><td>Chuyên gia - người học</td></tr>
            </table>
            <h4>Mô hình GROW (Coaching)</h4>
            <ul>
                <li><strong>G</strong>oal: Mục tiêu bạn muốn đạt?</li>
                <li><strong>R</strong>eality: Tình hình hiện tại thế nào?</li>
                <li><strong>O</strong>ptions: Có những lựa chọn nào?</li>
                <li><strong>W</strong>ill: Bạn sẽ làm gì cụ thể?</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 Xây dựng chương trình Mentoring</h3>
            <h4>Cấu trúc chương trình</h4>
            <ol>
                <li>Xác định mục tiêu chương trình</li>
                <li>Ghép cặp mentor-mentee phù hợp</li>
                <li>Đào tạo mentor về kỹ năng coaching</li>
                <li>Thiết lập lịch gặp định kỳ</li>
                <li>Đánh giá tiến độ hàng quý</li>
            </ol>
            <h4>Coaching theo tình huống</h4>
            <ul>
                <li><strong>Nhân viên mới:</strong> Directive coaching - Hướng dẫn cụ thể</li>
                <li><strong>Nhân viên giỏi:</strong> Non-directive - Đặt câu hỏi để tự tìm ra</li>
                <li><strong>Nhân viên gặp khó:</strong> Supportive - Lắng nghe và hỗ trợ</li>
            </ul>
            <div class="tip-box">
                <strong>💡 Insight:</strong> Quản lý dành 30% thời gian coaching sẽ thấy hiệu suất nhóm tăng 20-30% trong 6 tháng.
            </div>
        `
    }
};
