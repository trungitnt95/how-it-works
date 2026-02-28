// Psychology Basics - Core concepts
const psychologyBasicsData = {
    'what-is-psychology': {
        icon: '🧠',
        title: 'Tâm Lý Học Là Gì',
        category: 'basics',
        level: 'beginner',
        connections: ['consciousness', 'emotions', 'motivation'],
        simple: `
            <h3>🧠 Tâm lý học là gì?</h3>
            <p><strong>Tâm lý học</strong> là khoa học nghiên cứu về <em>tâm trí và hành vi</em> con người.</p>
            <div class="example-box">
                <strong>Ví dụ:</strong> Tại sao bạn sợ khi xem phim kinh dị? Tâm lý học giải thích cơ chế cảm xúc phía sau.
            </div>
            <h4>Tâm lý học nghiên cứu gì?</h4>
            <ul>
                <li><strong>Suy nghĩ:</strong> Cách chúng ta xử lý thông tin</li>
                <li><strong>Cảm xúc:</strong> Tại sao ta vui, buồn, sợ hãi</li>
                <li><strong>Hành vi:</strong> Tại sao ta hành động như vậy</li>
            </ul>
        `,
        detail: `
            <h3>📊 Các trường phái chính</h3>
            <table>
                <tr><th>Trường phái</th><th>Người sáng lập</th><th>Trọng tâm</th></tr>
                <tr><td>Phân tâm học</td><td>Sigmund Freud</td><td>Vô thức, bản năng</td></tr>
                <tr><td>Hành vi học</td><td>B.F. Skinner</td><td>Hành vi quan sát được</td></tr>
                <tr><td>Nhân văn</td><td>Carl Rogers</td><td>Tiềm năng con người</td></tr>
                <tr><td>Nhận thức</td><td>Jean Piaget</td><td>Quá trình tư duy</td></tr>
            </table>
            <h4>Ứng dụng thực tế</h4>
            <ul>
                <li><strong>Lâm sàng:</strong> Điều trị rối loạn tâm lý</li>
                <li><strong>Tổ chức:</strong> Quản lý nhân sự, môi trường làm việc</li>
                <li><strong>Giáo dục:</strong> Phương pháp dạy và học hiệu quả</li>
                <li><strong>Marketing:</strong> Hiểu hành vi người tiêu dùng</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 Phương pháp nghiên cứu tâm lý</h3>
            <h4>Phương pháp khoa học</h4>
            <ol>
                <li><strong>Quan sát:</strong> Ghi nhận hành vi tự nhiên</li>
                <li><strong>Thí nghiệm:</strong> Kiểm soát biến số, nhóm đối chứng</li>
                <li><strong>Khảo sát:</strong> Bảng hỏi, phỏng vấn quy mô lớn</li>
                <li><strong>Nghiên cứu trường hợp:</strong> Phân tích sâu một cá nhân</li>
            </ol>
            <h4>Tâm lý học hiện đại</h4>
            <ul>
                <li><strong>Tâm lý học thần kinh:</strong> Não bộ ảnh hưởng hành vi</li>
                <li><strong>Tâm lý tiến hóa:</strong> Hành vi từ góc độ tiến hóa</li>
                <li><strong>Tâm lý tích cực:</strong> Nghiên cứu hạnh phúc và sức mạnh</li>
            </ul>
            <div class="tip-box">
                <strong>💡 Lưu ý:</strong> Tâm lý học là khoa học thực chứng, khác với "đọc vị" hay bói toán.
            </div>
        `
    },
    'consciousness': {
        icon: '💭',
        title: 'Ý Thức & Vô Thức',
        category: 'basics',
        level: 'beginner',
        connections: ['what-is-psychology', 'emotions', 'cognitive-therapy'],
        simple: `
            <h3>💭 Ý thức và vô thức</h3>
            <p><strong>Ý thức</strong> là những gì bạn đang nhận biết ngay lúc này. <strong>Vô thức</strong> là phần tâm trí ẩn giấu bên dưới.</p>
            <div class="example-box">
                <strong>Hình ảnh tảng băng:</strong><br>
                • Phần nổi (10%) = Ý thức: suy nghĩ, nhận thức hiện tại<br>
                • Phần chìm (90%) = Vô thức: ký ức, bản năng, ham muốn
            </div>
        `,
        detail: `
            <h3>📊 Mô hình Freud - 3 tầng tâm trí</h3>
            <table>
                <tr><th>Tầng</th><th>Mô tả</th><th>Ví dụ</th></tr>
                <tr><td>Ý thức</td><td>Nhận biết ngay lúc này</td><td>Bạn đang đọc dòng chữ này</td></tr>
                <tr><td>Tiềm thức</td><td>Có thể gợi nhớ lại</td><td>Số điện thoại nhà bạn</td></tr>
                <tr><td>Vô thức</td><td>Không thể truy cập trực tiếp</td><td>Chấn thương thời thơ ấu</td></tr>
            </table>
            <h4>Id - Ego - Superego</h4>
            <ul>
                <li><strong>Id (Bản năng):</strong> "Tôi muốn ngay!" - ham muốn nguyên thủy</li>
                <li><strong>Ego (Bản ngã):</strong> "Hãy thực tế" - cân bằng giữa ham muốn và thực tế</li>
                <li><strong>Superego (Siêu ngã):</strong> "Phải đúng đắn!" - đạo đức, chuẩn mực</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 Giấc mơ và vô thức</h3>
            <h4>Phân tích giấc mơ (Freud)</h4>
            <ul>
                <li><strong>Nội dung biểu hiện:</strong> Những gì bạn nhớ khi thức dậy</li>
                <li><strong>Nội dung tiềm ẩn:</strong> Ý nghĩa ẩn giấu phía sau</li>
            </ul>
            <h4>Quan điểm hiện đại</h4>
            <ul>
                <li><strong>Vô thức thích nghi:</strong> Xử lý thông tin tự động (Malcolm Gladwell - Blink)</li>
                <li><strong>Priming:</strong> Kích thích vô thức ảnh hưởng hành vi</li>
                <li><strong>Implicit bias:</strong> Thiên kiến không ý thức được</li>
            </ul>
            <div class="warning-box">
                <strong>⚠️ Lưu ý:</strong> Nhiều ý tưởng của Freud đã bị phản bác, nhưng khái niệm vô thức vẫn được công nhận dưới dạng khác.
            </div>
        `
    },
    'emotions': {
        icon: '❤️',
        title: 'Cảm Xúc Con Người',
        category: 'basics',
        level: 'beginner',
        connections: ['what-is-psychology', 'consciousness', 'emotional-intelligence', 'micro-expressions'],
        simple: `
            <h3>❤️ Cảm xúc con người</h3>
            <p><strong>Cảm xúc</strong> là phản ứng tự nhiên giúp chúng ta thích nghi với môi trường.</p>
            <div class="example-box">
                <strong>6 cảm xúc cơ bản (Paul Ekman):</strong><br>
                😊 Vui vẻ • 😢 Buồn bã • 😠 Tức giận<br>
                😨 Sợ hãi • 😮 Ngạc nhiên • 🤢 Ghê tởm
            </div>
            <h4>Tại sao có cảm xúc?</h4>
            <ul>
                <li><strong>Sinh tồn:</strong> Sợ hãi giúp tránh nguy hiểm</li>
                <li><strong>Giao tiếp:</strong> Biểu cảm truyền đạt ý nghĩa</li>
                <li><strong>Ra quyết định:</strong> Cảm xúc hướng dẫn lựa chọn</li>
            </ul>
        `,
        detail: `
            <h3>📊 Cơ chế cảm xúc</h3>
            <h4>Cơ thể phản ứng như thế nào?</h4>
            <table>
                <tr><th>Cảm xúc</th><th>Phản ứng cơ thể</th><th>Chức năng</th></tr>
                <tr><td>Sợ hãi</td><td>Tim đập nhanh, đổ mồ hôi</td><td>Fight or Flight</td></tr>
                <tr><td>Tức giận</td><td>Cơ căng, mặt đỏ</td><td>Bảo vệ ranh giới</td></tr>
                <tr><td>Vui vẻ</td><td>Cơ mặt thả lỏng, năng lượng</td><td>Gắn kết xã hội</td></tr>
                <tr><td>Buồn bã</td><td>Mệt mỏi, thu mình</td><td>Tìm kiếm hỗ trợ</td></tr>
            </table>
            <h4>Vòng tròn cảm xúc (Plutchik)</h4>
            <p>Robert Plutchik mở rộng thành 8 cảm xúc cơ bản, mỗi cảm xúc có cường độ khác nhau. Ví dụ: khó chịu → tức giận → thịnh nộ.</p>
        `,
        advanced: `
            <h3>🎓 Lý thuyết cảm xúc nâng cao</h3>
            <h4>Các lý thuyết chính</h4>
            <ul>
                <li><strong>James-Lange:</strong> Cơ thể phản ứng trước → não diễn giải thành cảm xúc</li>
                <li><strong>Cannon-Bard:</strong> Cơ thể và cảm xúc xảy ra đồng thời</li>
                <li><strong>Schachter-Singer:</strong> Kích thích sinh lý + nhận thức = cảm xúc</li>
            </ul>
            <h4>Quản lý cảm xúc</h4>
            <ul>
                <li><strong>Nhận diện:</strong> Gọi tên cảm xúc (affect labeling)</li>
                <li><strong>Điều chỉnh nhận thức:</strong> Thay đổi cách nghĩ về tình huống</li>
                <li><strong>Kỹ thuật cơ thể:</strong> Hít thở sâu, thư giãn cơ tiến triển</li>
            </ul>
            <div class="tip-box">
                <strong>💡 Mẹo:</strong> Nghiên cứu cho thấy chỉ cần gọi tên cảm xúc đã giúp giảm cường độ cảm xúc tiêu cực.
            </div>
        `
    },
    'motivation': {
        icon: '🔥',
        title: 'Động Lực & Nhu Cầu',
        category: 'basics',
        level: 'intermediate',
        connections: ['what-is-psychology', 'emotions', 'stress-management'],
        simple: `
            <h3>🔥 Động lực là gì?</h3>
            <p><strong>Động lực</strong> là lực thúc đẩy bạn hành động để đạt mục tiêu.</p>
            <div class="example-box">
                <strong>Tháp nhu cầu Maslow (từ dưới lên):</strong><br>
                5. 🌟 Tự thực hiện<br>
                4. 🏆 Được tôn trọng<br>
                3. ❤️ Tình yêu & thuộc về<br>
                2. 🔒 An toàn<br>
                1. 🍞 Sinh lý (ăn, uống, ngủ)
            </div>
        `,
        detail: `
            <h3>📊 Các lý thuyết động lực</h3>
            <h4>1. Tháp Maslow chi tiết</h4>
            <table>
                <tr><th>Tầng</th><th>Nhu cầu</th><th>Ví dụ</th></tr>
                <tr><td>Sinh lý</td><td>Thức ăn, nước, giấc ngủ</td><td>Đói thì không thể tập trung</td></tr>
                <tr><td>An toàn</td><td>Nhà ở, công việc ổn định</td><td>Lo lắng mất việc → stress</td></tr>
                <tr><td>Thuộc về</td><td>Bạn bè, gia đình, tình yêu</td><td>Cô đơn → trầm cảm</td></tr>
                <tr><td>Tôn trọng</td><td>Thành tựu, được công nhận</td><td>Thăng chức, khen ngợi</td></tr>
                <tr><td>Tự thực hiện</td><td>Phát triển tiềm năng tối đa</td><td>Theo đuổi đam mê</td></tr>
            </table>
            <h4>2. Động lực nội tại vs ngoại tại</h4>
            <ul>
                <li><strong>Nội tại:</strong> Làm vì thích, tò mò, đam mê</li>
                <li><strong>Ngoại tại:</strong> Làm vì tiền, điểm, khen thưởng</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 Lý thuyết tự quyết định (SDT)</h3>
            <p>Deci & Ryan cho rằng con người cần 3 nhu cầu tâm lý cơ bản:</p>
            <ul>
                <li><strong>Tự chủ (Autonomy):</strong> Cảm giác kiểm soát hành động của mình</li>
                <li><strong>Năng lực (Competence):</strong> Cảm giác có khả năng làm tốt</li>
                <li><strong>Kết nối (Relatedness):</strong> Cảm giác thuộc về, được quan tâm</li>
            </ul>
            <h4>Hiệu ứng phá hoại động lực</h4>
            <div class="warning-box">
                <strong>⚠️ Overjustification Effect:</strong> Thưởng tiền cho việc ai đó đã thích làm → họ mất hứng thú khi không còn thưởng. Nghiên cứu cho thấy trẻ em được trả tiền để vẽ → vẽ ít hơn khi không còn tiền.
            </div>
            <h4>Flow State (Csikszentmihalyi)</h4>
            <p>Trạng thái "dòng chảy" xảy ra khi thử thách vừa khớp với kỹ năng. Quá dễ → chán, quá khó → lo lắng.</p>
        `
    }
};
