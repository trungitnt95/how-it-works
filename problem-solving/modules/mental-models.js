// Mental Models for Problem Solving
const mentalModelsData = {
    'inversion': {
        icon: '🔄',
        title: 'Inversion',
        category: 'mental-models',
        level: 'intermediate',
        connections: ['first-principles', 'premortem'],
        simple: `
            <h3>🔄 Inversion</h3>
            <p>Thay vì hỏi "Làm sao thành công?", hỏi <strong>"Làm sao tránh thất bại?"</strong></p>
            <div class="example-box">
                ❌ "Làm sao sống khỏe?"<br>
                ✅ "Làm sao KHÔNG sống khỏe?" → Tránh những thứ đó!
            </div>
        `,
        detail: `
            <h3>📋 Áp dụng</h3>
            <h4>Charlie Munger:</h4>
            <p><em>"Tôi chỉ muốn biết tôi sẽ chết ở đâu, để không bao giờ đến đó."</em></p>
            <h4>Các bước:</h4>
            <ol>
                <li>Xác định mục tiêu</li>
                <li>Liệt kê tất cả cách để THẤT BẠI</li>
                <li>Tránh những điều đó</li>
            </ol>
        `,
        advanced: `
            <h3>🎓 Ví dụ thực tế</h3>
            <ul>
                <li><strong>Đầu tư:</strong> Tránh mất tiền > Cố kiếm lợi nhuận cao</li>
                <li><strong>Sức khỏe:</strong> Tránh thói quen xấu > Tìm "bí quyết"</li>
                <li><strong>Quan hệ:</strong> Tránh làm tổn thương > Làm hài lòng</li>
            </ul>
        `
    },
    'second-order': {
        icon: '🎯',
        title: 'Second-Order Thinking',
        category: 'mental-models',
        level: 'advanced',
        connections: ['systems-thinking', 'inversion'],
        simple: `
            <h3>🎯 Second-Order Thinking</h3>
            <p>Suy nghĩ về <strong>hậu quả của hậu quả</strong>.</p>
            <div class="example-box">
                Giảm giá sản phẩm:<br>
                1st order: Bán nhiều hơn ✅<br>
                2nd order: Khách quen chờ sale, giảm lợi nhuận ❌
            </div>
        `,
        detail: `
            <h3>📋 Câu hỏi</h3>
            <ul>
                <li>"Và rồi sao?"</li>
                <li>"Hậu quả của hậu quả?"</li>
                <li>"Trong 1 năm, 5 năm, 10 năm?"</li>
            </ul>
            <h4>Ví dụ:</h4>
            <p>Cho phép làm việc từ xa:</p>
            <ul>
                <li>1st: Nhân viên vui hơn</li>
                <li>2nd: Có thể thuê toàn cầu</li>
                <li>3rd: Cạnh tranh lương với thế giới</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 Kết hợp với Game Theory</h3>
            <p>Người khác sẽ phản ứng thế nào với quyết định của bạn?</p>
        `
    },
    'systems-thinking': {
        icon: '🔗',
        title: 'Systems Thinking',
        category: 'mental-models',
        level: 'advanced',
        connections: ['second-order', 'feedback-loops'],
        simple: `
            <h3>🔗 Systems Thinking</h3>
            <p>Nhìn vấn đề như một <strong>hệ thống</strong> với các phần liên kết.</p>
            <div class="tip-box">
                💡 Thay đổi 1 phần có thể ảnh hưởng toàn bộ hệ thống!
            </div>
        `,
        detail: `
            <h3>📋 Khái niệm chính</h3>
            <ul>
                <li><strong>Elements:</strong> Các thành phần</li>
                <li><strong>Interconnections:</strong> Mối liên hệ</li>
                <li><strong>Purpose:</strong> Mục đích của hệ thống</li>
            </ul>
            <h4>Feedback Loops:</h4>
            <ul>
                <li><strong>Reinforcing:</strong> Tăng cường (lãi kép)</li>
                <li><strong>Balancing:</strong> Cân bằng (thermostat)</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 Leverage Points</h3>
            <p>Điểm can thiệp có ảnh hưởng lớn nhất:</p>
            <ol>
                <li>Paradigms (mạnh nhất)</li>
                <li>Goals of the system</li>
                <li>Rules</li>
                <li>Feedback loops</li>
                <li>Parameters (yếu nhất)</li>
            </ol>
        `
    },
    'occams-razor': {
        icon: '✂️',
        title: "Occam's Razor",
        category: 'mental-models',
        level: 'beginner',
        connections: ['first-principles'],
        simple: `
            <h3>✂️ Occam's Razor</h3>
            <p>Giải thích <strong>đơn giản nhất</strong> thường là đúng nhất.</p>
            <div class="example-box">
                Nghe tiếng vó ở Texas → Nghĩ đến ngựa, không phải ngựa vằn.
            </div>
        `,
        detail: `
            <h3>📋 Ứng dụng</h3>
            <ul>
                <li>Debug: Kiểm tra lỗi đơn giản trước</li>
                <li>Chẩn đoán: Bệnh phổ biến trước bệnh hiếm</li>
                <li>Design: Giải pháp đơn giản trước phức tạp</li>
            </ul>
            <div class="warning-box">
                ⚠️ Không phải luôn đúng! Chỉ là heuristic.
            </div>
        `,
        advanced: `
            <h3>🎓 Hanlon's Razor</h3>
            <p><em>"Đừng gán cho ác ý những gì có thể giải thích bằng sự ngu ngốc."</em></p>
        `
    },
    'pareto': {
        icon: '📊',
        title: 'Pareto Principle (80/20)',
        category: 'mental-models',
        level: 'beginner',
        connections: ['prioritization', 'leverage'],
        simple: `
            <h3>📊 Quy tắc 80/20</h3>
            <p>~80% kết quả đến từ ~20% nguyên nhân.</p>
            <div class="example-box">
                • 20% khách hàng → 80% doanh thu<br>
                • 20% bug → 80% crashes<br>
                • 20% nỗ lực → 80% kết quả
            </div>
        `,
        detail: `
            <h3>📋 Ứng dụng</h3>
            <ol>
                <li>Xác định 20% quan trọng nhất</li>
                <li>Tập trung nguồn lực vào đó</li>
                <li>Cắt giảm hoặc ủy quyền 80% còn lại</li>
            </ol>
            <h4>Ví dụ cá nhân:</h4>
            <ul>
                <li>20% thói quen → 80% sức khỏe</li>
                <li>20% mối quan hệ → 80% hạnh phúc</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 Pareto trong Pareto</h3>
            <p>20% của 20% = 4% → 64% kết quả</p>
            <p>Tìm điểm leverage cao nhất!</p>
        `
    },
    'feedback-loops': {
        icon: '🔁',
        title: 'Feedback Loops',
        category: 'mental-models',
        level: 'intermediate',
        connections: ['systems-thinking', 'second-order'],
        simple: `
            <h3>🔁 Feedback Loops</h3>
            <p>Output của hệ thống ảnh hưởng ngược lại input.</p>
            <h4>2 loại:</h4>
            <ul>
                <li><strong>Positive:</strong> Tăng cường (viral growth)</li>
                <li><strong>Negative:</strong> Cân bằng (điều hòa nhiệt độ)</li>
            </ul>
        `,
        detail: `
            <h3>📋 Ví dụ</h3>
            <h4>Positive Loop (Vicious/Virtuous Cycle):</h4>
            <p>Học nhiều → Giỏi hơn → Tự tin hơn → Học nhiều hơn</p>
            <h4>Negative Loop (Balancing):</h4>
            <p>Đói → Ăn → No → Ngừng ăn → Đói lại</p>
        `,
        advanced: `
            <h3>🎓 Delays trong Feedback</h3>
            <p>Delay làm hệ thống khó điều khiển:</p>
            <ul>
                <li>Chính sách kinh tế: Delay nhiều tháng</li>
                <li>Tập gym: Delay nhiều tuần mới thấy kết quả</li>
            </ul>
        `
    },
    'circle-competence': {
        icon: '⭕',
        title: 'Circle of Competence',
        category: 'mental-models',
        level: 'intermediate',
        connections: ['pareto', 'occams-razor'],
        simple: `
            <h3>⭕ Circle of Competence</h3>
            <p>Biết rõ bạn <strong>giỏi gì</strong> và <strong>không giỏi gì</strong>.</p>
            <div class="tip-box">
                💡 "Biết những gì mình không biết" = Lợi thế lớn
            </div>
        `,
        detail: `
            <h3>📋 3 Zones</h3>
            <ul>
                <li><strong>Trong vòng:</strong> Biết rõ, tự tin quyết định</li>
                <li><strong>Rìa vòng:</strong> Biết ít, cần học thêm</li>
                <li><strong>Ngoài vòng:</strong> Không biết, cần chuyên gia</li>
            </ul>
            <h4>Cách mở rộng:</h4>
            <ul>
                <li>Học liên tục</li>
                <li>Thực hành có chủ đích</li>
                <li>Nhận feedback</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 Warren Buffett</h3>
            <p><em>"Rủi ro đến từ việc không biết mình đang làm gì."</em></p>
            <p>Ông chỉ đầu tư trong circle of competence.</p>
        `
    }
};
