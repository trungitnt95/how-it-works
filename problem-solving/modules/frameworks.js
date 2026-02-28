// Problem Solving Frameworks
const frameworksData = {
    'define-problem': {
        icon: '🎯',
        title: 'Định Nghĩa Vấn Đề',
        category: 'frameworks',
        level: 'beginner',
        connections: ['root-cause', '5-whys', 'problem-statement'],
        simple: `
            <h3>🎯 Định nghĩa vấn đề</h3>
            <p>Bước đầu tiên và <strong>quan trọng nhất</strong>: Hiểu rõ vấn đề là gì.</p>
            <div class="tip-box">
                💡 "Một vấn đề được định nghĩa đúng = Đã giải quyết 50%"
            </div>
            <h4>Câu hỏi cần trả lời:</h4>
            <ul>
                <li>Vấn đề cụ thể là gì?</li>
                <li>Ai bị ảnh hưởng?</li>
                <li>Từ khi nào?</li>
                <li>Mức độ nghiêm trọng?</li>
            </ul>
        `,
        detail: `
            <h3>📋 Problem Statement Template</h3>
            <div class="example-box">
                <strong>Mẫu:</strong> [Ai] đang gặp [vấn đề gì] khi [làm gì], dẫn đến [hậu quả].
            </div>
            <h4>Ví dụ:</h4>
            <p><em>"Khách hàng mới đang gặp khó khăn khi đăng ký tài khoản, dẫn đến tỷ lệ bỏ cuộc 60%."</em></p>
            <h4>Kiểm tra Problem Statement:</h4>
            <ul>
                <li>✅ Cụ thể (không mơ hồ)</li>
                <li>✅ Đo lường được</li>
                <li>✅ Không chứa giải pháp</li>
                <li>✅ Tập trung vào 1 vấn đề</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 Problem Framing</h3>
            <h4>Reframe vấn đề</h4>
            <p>Cùng 1 tình huống, frame khác nhau → giải pháp khác nhau:</p>
            <ul>
                <li>"Làm sao giảm chi phí?" vs "Làm sao tăng giá trị?"</li>
                <li>"Làm sao ngăn lỗi?" vs "Làm sao phục hồi nhanh?"</li>
            </ul>
            <div class="tip-box">
                💡 Thử frame vấn đề theo 3-5 cách khác nhau trước khi giải quyết.
            </div>
        `
    },
    '5-whys': {
        icon: '❓',
        title: '5 Whys',
        category: 'frameworks',
        level: 'beginner',
        connections: ['root-cause', 'define-problem', 'fishbone'],
        simple: `
            <h3>❓ 5 Whys - 5 Lần Hỏi "Tại Sao"</h3>
            <p>Hỏi "Tại sao?" liên tục để tìm <strong>nguyên nhân gốc rễ</strong>.</p>
            <div class="example-box">
                <strong>Ví dụ:</strong><br>
                1. Tại sao xe không nổ máy? → Hết bình<br>
                2. Tại sao hết bình? → Quên sạc<br>
                3. Tại sao quên sạc? → Không có thói quen<br>
                4. Tại sao không có thói quen? → Mới mua xe<br>
                5. Tại sao? → Chưa đọc hướng dẫn
            </div>
        `,
        detail: `
            <h3>📋 Hướng dẫn thực hành</h3>
            <h4>Quy tắc:</h4>
            <ol>
                <li>Bắt đầu từ vấn đề cụ thể</li>
                <li>Hỏi "Tại sao?" và ghi câu trả lời</li>
                <li>Lặp lại với câu trả lời vừa có</li>
                <li>Dừng khi tìm thấy nguyên nhân có thể hành động</li>
            </ol>
            <div class="warning-box">
                ⚠️ Không nhất thiết phải đúng 5 lần. Có thể nhiều hơn hoặc ít hơn.
            </div>
        `,
        advanced: `
            <h3>🎓 Hạn chế của 5 Whys</h3>
            <ul>
                <li>Chỉ đi theo 1 nhánh nguyên nhân</li>
                <li>Phụ thuộc người hỏi</li>
                <li>Không phù hợp vấn đề phức tạp</li>
            </ul>
            <p>→ Kết hợp với Fishbone hoặc Fault Tree Analysis.</p>
        `
    },
    'root-cause': {
        icon: '🌳',
        title: 'Root Cause Analysis',
        category: 'frameworks',
        level: 'intermediate',
        connections: ['5-whys', 'fishbone', 'define-problem'],
        simple: `
            <h3>🌳 Root Cause Analysis (RCA)</h3>
            <p>Tìm <strong>nguyên nhân gốc rễ</strong> thay vì chỉ xử lý triệu chứng.</p>
            <div class="example-box">
                ❌ Triệu chứng: Server chậm → Khởi động lại<br>
                ✅ Gốc rễ: Memory leak → Sửa code
            </div>
        `,
        detail: `
            <h3>📋 Phân loại nguyên nhân</h3>
            <table>
                <tr><th>Loại</th><th>Mô tả</th></tr>
                <tr><td>Physical</td><td>Thiết bị, vật lý hỏng</td></tr>
                <tr><td>Human</td><td>Lỗi con người</td></tr>
                <tr><td>Organizational</td><td>Quy trình, chính sách</td></tr>
            </table>
            <h4>Các công cụ RCA:</h4>
            <ul>
                <li>5 Whys</li>
                <li>Fishbone Diagram</li>
                <li>Fault Tree Analysis</li>
                <li>Pareto Analysis</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 Systemic RCA</h3>
            <p>Tìm nguyên nhân trong <strong>hệ thống</strong>, không đổ lỗi cá nhân.</p>
            <div class="tip-box">
                💡 "Mỗi lỗi người là cơ hội cải thiện hệ thống."
            </div>
        `
    },
    'fishbone': {
        icon: '🐟',
        title: 'Fishbone Diagram',
        category: 'frameworks',
        level: 'intermediate',
        connections: ['root-cause', '5-whys'],
        simple: `
            <h3>🐟 Fishbone Diagram (Ishikawa)</h3>
            <p>Sơ đồ hình xương cá để phân tích <strong>nhiều nhóm nguyên nhân</strong>.</p>
            <h4>6M Categories:</h4>
            <ul>
                <li><strong>Man</strong> - Con người</li>
                <li><strong>Machine</strong> - Máy móc</li>
                <li><strong>Method</strong> - Phương pháp</li>
                <li><strong>Material</strong> - Nguyên liệu</li>
                <li><strong>Measurement</strong> - Đo lường</li>
                <li><strong>Mother Nature</strong> - Môi trường</li>
            </ul>
        `,
        detail: `
            <h3>📋 Cách vẽ Fishbone</h3>
            <ol>
                <li>Viết vấn đề ở đầu cá (bên phải)</li>
                <li>Vẽ xương sống ngang</li>
                <li>Vẽ các xương chính (6M categories)</li>
                <li>Brainstorm nguyên nhân cụ thể cho mỗi category</li>
                <li>Đánh dấu nguyên nhân quan trọng nhất</li>
            </ol>
        `,
        advanced: `
            <h3>🎓 Variations</h3>
            <ul>
                <li><strong>8P (Services):</strong> Product, Price, Place, Promotion, People, Process, Physical evidence, Productivity</li>
                <li><strong>4S (Services):</strong> Surroundings, Suppliers, Systems, Skills</li>
            </ul>
        `
    },
    'design-thinking': {
        icon: '💡',
        title: 'Design Thinking',
        category: 'frameworks',
        level: 'intermediate',
        connections: ['define-problem', 'first-principles', 'brainstorming'],
        simple: `
            <h3>💡 Design Thinking</h3>
            <p>Quy trình sáng tạo <strong>lấy con người làm trung tâm</strong>.</p>
            <h4>5 Bước:</h4>
            <ol>
                <li><strong>Empathize</strong> - Thấu hiểu người dùng</li>
                <li><strong>Define</strong> - Định nghĩa vấn đề</li>
                <li><strong>Ideate</strong> - Brainstorm ý tưởng</li>
                <li><strong>Prototype</strong> - Tạo mẫu thử</li>
                <li><strong>Test</strong> - Thử nghiệm</li>
            </ol>
        `,
        detail: `
            <h3>📋 Chi tiết từng bước</h3>
            <h4>1. Empathize</h4>
            <ul>
                <li>Phỏng vấn người dùng</li>
                <li>Quan sát hành vi thực tế</li>
                <li>Đặt mình vào vị trí họ</li>
            </ul>
            <h4>2. Define</h4>
            <p>Tạo "Point of View" statement:</p>
            <div class="example-box">
                [User] cần [need] vì [insight].
            </div>
        `,
        advanced: `
            <h3>🎓 Double Diamond</h3>
            <p>Mô hình mở rộng với 2 giai đoạn diverge-converge:</p>
            <ol>
                <li><strong>Diamond 1:</strong> Discover → Define (Tìm đúng vấn đề)</li>
                <li><strong>Diamond 2:</strong> Develop → Deliver (Tìm đúng giải pháp)</li>
            </ol>
        `
    },
    'first-principles': {
        icon: '⚛️',
        title: 'First Principles Thinking',
        category: 'frameworks',
        level: 'advanced',
        connections: ['define-problem', 'reframing'],
        simple: `
            <h3>⚛️ First Principles Thinking</h3>
            <p>Phân tích vấn đề về <strong>các nguyên lý cơ bản nhất</strong>, không dựa vào giả định.</p>
            <div class="example-box">
                <strong>Elon Musk & Pin xe điện:</strong><br>
                ❌ "Pin đắt vì thị trường nói vậy"<br>
                ✅ "Pin gồm những gì? Giá thành phần trên thị trường?"
            </div>
        `,
        detail: `
            <h3>📋 Quy trình</h3>
            <ol>
                <li>Xác định giả định hiện tại</li>
                <li>Phân tách thành phần cơ bản</li>
                <li>Kiểm tra từng phần có đúng không</li>
                <li>Xây dựng lại từ đầu</li>
            </ol>
            <h4>Câu hỏi:</h4>
            <ul>
                <li>"Điều gì chắc chắn đúng?"</li>
                <li>"Tại sao mọi người tin điều này?"</li>
                <li>"Nếu bắt đầu từ 0, ta sẽ làm thế nào?"</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 Khi nào dùng?</h3>
            <ul>
                <li>Đổi mới đột phá (không cải tiến từ từ)</li>
                <li>Thách thức status quo</li>
                <li>Giải quyết vấn đề "không thể"</li>
            </ul>
            <div class="warning-box">
                ⚠️ Tốn thời gian và năng lượng. Không cần cho mọi vấn đề.
            </div>
        `
    }
};
