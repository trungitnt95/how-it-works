// Problem Solving Techniques
const techniquesData = {
    'brainstorming': {
        icon: '🧠',
        title: 'Brainstorming',
        category: 'techniques',
        level: 'beginner',
        connections: ['scamper', 'mind-mapping', 'six-hats'],
        simple: `
            <h3>🧠 Brainstorming</h3>
            <p>Tạo ra <strong>nhiều ý tưởng nhất có thể</strong> trước khi đánh giá.</p>
            <h4>4 Quy tắc:</h4>
            <ul>
                <li>🚫 Không phê phán</li>
                <li>📈 Số lượng trước chất lượng</li>
                <li>🚀 Khuyến khích ý tưởng "điên rồ"</li>
                <li>🔗 Xây dựng trên ý tưởng khác</li>
            </ul>
        `,
        detail: `
            <h3>📋 Các hình thức Brainstorming</h3>
            <h4>1. Classic Brainstorming</h4>
            <p>Nhóm cùng đưa ra ý tưởng tự do.</p>
            <h4>2. Brainwriting</h4>
            <p>Viết ý tưởng ra giấy, truyền vòng.</p>
            <h4>3. Reverse Brainstorming</h4>
            <p>"Làm thế nào để vấn đề TỒI HƠN?"</p>
            <h4>4. Starbursting</h4>
            <p>Tập trung vào câu hỏi: Who, What, When, Where, Why, How.</p>
        `,
        advanced: `
            <h3>🎓 Tối ưu Brainstorming</h3>
            <ul>
                <li>Cá nhân brainstorm trước → Nhóm sau</li>
                <li>Giới hạn thời gian (15-20 phút)</li>
                <li>Facilitator giữ nhịp</li>
                <li>Ghi lại TẤT CẢ ý tưởng</li>
            </ul>
        `
    },
    'scamper': {
        icon: '🔄',
        title: 'SCAMPER',
        category: 'techniques',
        level: 'intermediate',
        connections: ['brainstorming', 'first-principles'],
        simple: `
            <h3>🔄 SCAMPER</h3>
            <p>7 cách biến đổi ý tưởng/sản phẩm hiện có:</p>
            <ul>
                <li><strong>S</strong>ubstitute - Thay thế</li>
                <li><strong>C</strong>ombine - Kết hợp</li>
                <li><strong>A</strong>dapt - Điều chỉnh</li>
                <li><strong>M</strong>odify - Thay đổi</li>
                <li><strong>P</strong>ut to other use - Dùng khác</li>
                <li><strong>E</strong>liminate - Loại bỏ</li>
                <li><strong>R</strong>earrange - Sắp xếp lại</li>
            </ul>
        `,
        detail: `
            <h3>📋 Ví dụ với Smartphone</h3>
            <table>
                <tr><th>Kỹ thuật</th><th>Câu hỏi</th></tr>
                <tr><td>Substitute</td><td>Thay nút vật lý bằng gì?</td></tr>
                <tr><td>Combine</td><td>Kết hợp với wallet?</td></tr>
                <tr><td>Adapt</td><td>Học từ máy ảnh?</td></tr>
                <tr><td>Modify</td><td>Làm gập được?</td></tr>
                <tr><td>Put to other use</td><td>Dùng làm remote?</td></tr>
                <tr><td>Eliminate</td><td>Bỏ notch?</td></tr>
                <tr><td>Rearrange</td><td>Camera ở giữa?</td></tr>
            </table>
        `,
        advanced: `
            <h3>🎓 Tips</h3>
            <ul>
                <li>Áp dụng từng chữ một cách có hệ thống</li>
                <li>Không cần ý tưởng khả thi ngay</li>
                <li>Ghi lại mọi ý tưởng để lọc sau</li>
            </ul>
        `
    },
    'mind-mapping': {
        icon: '🗺️',
        title: 'Mind Mapping',
        category: 'techniques',
        level: 'beginner',
        connections: ['brainstorming', 'fishbone'],
        simple: `
            <h3>🗺️ Mind Mapping</h3>
            <p>Sơ đồ tư duy: Chủ đề ở giữa, nhánh ra các ý liên quan.</p>
            <h4>Lợi ích:</h4>
            <ul>
                <li>Tổ chức thông tin trực quan</li>
                <li>Thấy mối liên hệ</li>
                <li>Dễ mở rộng ý tưởng</li>
            </ul>
        `,
        detail: `
            <h3>📋 Cách tạo Mind Map</h3>
            <ol>
                <li>Đặt chủ đề chính ở giữa</li>
                <li>Vẽ nhánh chính (categories)</li>
                <li>Thêm nhánh phụ (details)</li>
                <li>Dùng màu sắc và hình ảnh</li>
                <li>Sử dụng từ khóa, không câu dài</li>
            </ol>
            <h4>Công cụ:</h4>
            <ul>
                <li>Giấy + bút màu</li>
                <li>Miro, Figma</li>
                <li>XMind, MindMeister</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 Ứng dụng</h3>
            <ul>
                <li>Note-taking</li>
                <li>Project planning</li>
                <li>Problem decomposition</li>
                <li>Studying/Review</li>
            </ul>
        `
    },
    'six-hats': {
        icon: '🎩',
        title: 'Six Thinking Hats',
        category: 'techniques',
        level: 'intermediate',
        connections: ['brainstorming', 'decision-matrix'],
        simple: `
            <h3>🎩 Six Thinking Hats (Edward de Bono)</h3>
            <p>6 góc nhìn khác nhau để phân tích vấn đề:</p>
            <ul>
                <li>⚪ <strong>Trắng:</strong> Dữ kiện, thông tin</li>
                <li>🔴 <strong>Đỏ:</strong> Cảm xúc, trực giác</li>
                <li>⚫ <strong>Đen:</strong> Phê phán, rủi ro</li>
                <li>🟡 <strong>Vàng:</strong> Lạc quan, lợi ích</li>
                <li>🟢 <strong>Xanh lá:</strong> Sáng tạo</li>
                <li>🔵 <strong>Xanh dương:</strong> Điều phối</li>
            </ul>
        `,
        detail: `
            <h3>📋 Chi tiết từng mũ</h3>
            <table>
                <tr><th>Mũ</th><th>Câu hỏi</th></tr>
                <tr><td>⚪</td><td>Dữ liệu nói gì?</td></tr>
                <tr><td>🔴</td><td>Tôi cảm thấy thế nào?</td></tr>
                <tr><td>⚫</td><td>Rủi ro gì? Tại sao thất bại?</td></tr>
                <tr><td>🟡</td><td>Lợi ích gì? Tại sao thành công?</td></tr>
                <tr><td>🟢</td><td>Còn cách nào khác?</td></tr>
                <tr><td>🔵</td><td>Tổng kết? Bước tiếp?</td></tr>
            </table>
        `,
        advanced: `
            <h3>🎓 Cách sử dụng trong nhóm</h3>
            <ul>
                <li>Tất cả đội một mũ cùng lúc</li>
                <li>Chuyển mũ theo thứ tự</li>
                <li>Tránh tranh luận (ai cũng cùng góc nhìn)</li>
            </ul>
        `
    },
    'divide-conquer': {
        icon: '✂️',
        title: 'Divide and Conquer',
        category: 'techniques',
        level: 'beginner',
        connections: ['decomposition', 'prioritization'],
        simple: `
            <h3>✂️ Divide and Conquer</h3>
            <p>Chia vấn đề lớn thành <strong>nhiều phần nhỏ</strong> dễ giải quyết.</p>
            <div class="example-box">
                Dọn nhà → Chia theo phòng → Chia theo khu vực → Chia theo loại đồ
            </div>
        `,
        detail: `
            <h3>📋 Quy trình</h3>
            <ol>
                <li><strong>Divide:</strong> Chia thành sub-problems</li>
                <li><strong>Conquer:</strong> Giải quyết từng phần</li>
                <li><strong>Combine:</strong> Ghép lại thành giải pháp tổng</li>
            </ol>
            <h4>Khi nào dùng?</h4>
            <ul>
                <li>Vấn đề quá lớn để xử lý một lần</li>
                <li>Có thể chia thành phần độc lập</li>
                <li>Các phần có thể giải song song</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 Trong lập trình</h3>
            <ul>
                <li>Merge Sort, Quick Sort</li>
                <li>Binary Search</li>
                <li>Microservices architecture</li>
            </ul>
        `
    },
    'abstraction': {
        icon: '🔭',
        title: 'Abstraction',
        category: 'techniques',
        level: 'intermediate',
        connections: ['first-principles', 'analogy'],
        simple: `
            <h3>🔭 Abstraction</h3>
            <p>Bỏ qua chi tiết không cần thiết, tập trung vào <strong>bản chất vấn đề</strong>.</p>
            <div class="example-box">
                Bản đồ metro: Không cần tỷ lệ chính xác, chỉ cần biết đi đâu, đổi tàu ở đâu.
            </div>
        `,
        detail: `
            <h3>📋 Levels of Abstraction</h3>
            <ul>
                <li><strong>High:</strong> Khái quát, big picture</li>
                <li><strong>Medium:</strong> Components, modules</li>
                <li><strong>Low:</strong> Chi tiết cụ thể</li>
            </ul>
            <h4>Lợi ích:</h4>
            <ul>
                <li>Giảm cognitive load</li>
                <li>Thấy pattern</li>
                <li>Giao tiếp dễ hơn</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 Ứng dụng</h3>
            <ul>
                <li>API design (hide implementation)</li>
                <li>System architecture</li>
                <li>Teaching/Explaining</li>
            </ul>
        `
    },
    'analogy': {
        icon: '🔗',
        title: 'Analogy & Metaphor',
        category: 'techniques',
        level: 'intermediate',
        connections: ['abstraction', 'reframing'],
        simple: `
            <h3>🔗 Analogy</h3>
            <p>Dùng vấn đề/giải pháp từ <strong>lĩnh vực khác</strong> để áp dụng.</p>
            <div class="example-box">
                Velcro lấy ý tưởng từ... hạt cỏ dính vào quần!
            </div>
        `,
        detail: `
            <h3>📋 Cách sử dụng</h3>
            <ol>
                <li>Hiểu bản chất vấn đề</li>
                <li>Tìm vấn đề tương tự ở lĩnh vực khác</li>
                <li>Phân tích cách giải quyết ở đó</li>
                <li>Điều chỉnh và áp dụng</li>
            </ol>
            <h4>Nguồn analogies:</h4>
            <ul>
                <li>Tự nhiên (Biomimicry)</li>
                <li>Ngành khác</li>
                <li>Lịch sử</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 Biomimicry Examples</h3>
            <ul>
                <li>Bullet train ← Kingfisher beak</li>
                <li>Cooling systems ← Termite mounds</li>
                <li>Wind turbines ← Whale fins</li>
            </ul>
        `
    }
};
