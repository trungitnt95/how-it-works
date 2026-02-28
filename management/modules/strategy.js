// Strategy - Strategic management concepts
const strategyData = {
    'strategic-thinking': {
        icon: '🧠',
        title: 'Tư Duy Chiến Lược',
        category: 'strategy',
        level: 'intermediate',
        connections: ['decision-making', 'competitive-analysis', 'swot'],
        simple: `
            <h3>🧠 Tư duy chiến lược</h3>
            <p><strong>Tư duy chiến lược</strong> là khả năng nhìn xa, thấy bức tranh toàn cảnh và lên kế hoạch dài hạn.</p>
            <div class="example-box">
                <strong>Chiến thuật vs Chiến lược:</strong><br>
                • 🔨 <strong>Chiến thuật:</strong> "Hôm nay mình code tính năng gì?"<br>
                • 🧠 <strong>Chiến lược:</strong> "3 năm nữa sản phẩm sẽ ở đâu?"
            </div>
            <h4>3 câu hỏi chiến lược</h4>
            <ul>
                <li>🎯 <strong>Đâu?</strong> Chúng ta muốn đến đâu?</li>
                <li>📍 <strong>Hiện tại?</strong> Chúng ta đang ở đâu?</li>
                <li>🛤️ <strong>Cách nào?</strong> Làm sao để đến đó?</li>
            </ul>
        `,
        detail: `
            <h3>📊 Framework tư duy chiến lược</h3>
            <h4>Porter's Five Forces</h4>
            <ul>
                <li><strong>Đối thủ cạnh tranh:</strong> Mức độ cạnh tranh hiện tại</li>
                <li><strong>Khách hàng:</strong> Sức mạnh đàm phán của khách</li>
                <li><strong>Nhà cung cấp:</strong> Sức mạnh đàm phán của supplier</li>
                <li><strong>Sản phẩm thay thế:</strong> Nguy cơ bị thay thế</li>
                <li><strong>Đối thủ mới:</strong> Rào cản gia nhập thị trường</li>
            </ul>
            <h4>Blue Ocean Strategy</h4>
            <table>
                <tr><th>Red Ocean 🔴</th><th>Blue Ocean 🔵</th></tr>
                <tr><td>Cạnh tranh trong thị trường hiện có</td><td>Tạo thị trường mới</td></tr>
                <tr><td>Đánh bại đối thủ</td><td>Làm đối thủ không liên quan</td></tr>
                <tr><td>Khai thác nhu cầu hiện tại</td><td>Tạo nhu cầu mới</td></tr>
            </table>
        `,
        advanced: `
            <h3>🎓 Chiến lược nâng cao</h3>
            <h4>First Principles Thinking</h4>
            <p>Phân tích vấn đề đến yếu tố cơ bản nhất, không dựa trên giả định:</p>
            <ol>
                <li>Xác định giả định hiện tại</li>
                <li>Phân tách thành yếu tố cơ bản</li>
                <li>Xây dựng lại từ đầu</li>
            </ol>
            <h4>Second-Order Thinking</h4>
            <ul>
                <li><strong>First-order:</strong> "Nếu ta giảm giá, sẽ bán nhiều hơn"</li>
                <li><strong>Second-order:</strong> "Đối thủ cũng giảm giá → chiến tranh giá → margin giảm"</li>
                <li><strong>Third-order:</strong> "Margin giảm → ít tiền R&D → sản phẩm kém đi"</li>
            </ul>
            <div class="tip-box">
                <strong>💡 Insight:</strong> Người bình thường suy nghĩ first-order. Chiến lược gia suy nghĩ second và third-order.
            </div>
        `
    },
    'competitive-analysis': {
        icon: '🏆',
        title: 'Phân Tích Cạnh Tranh',
        category: 'strategy',
        level: 'advanced',
        connections: ['strategic-thinking', 'swot', 'innovation'],
        simple: `
            <h3>🏆 Phân tích cạnh tranh</h3>
            <p><strong>Phân tích cạnh tranh</strong> là hiểu đối thủ để tìm lợi thế cho mình.</p>
            <div class="example-box">
                <strong>Cần biết về đối thủ:</strong><br>
                • 🎯 Họ đang nhắm khách hàng nào?<br>
                • 💪 Điểm mạnh của họ là gì?<br>
                • 😰 Điểm yếu họ chưa khắc phục?<br>
                • 📈 Chiến lược tăng trưởng?
            </div>
        `,
        detail: `
            <h3>📊 Framework phân tích cạnh tranh</h3>
            <h4>Competitive Matrix</h4>
            <table>
                <tr><th>Tiêu chí</th><th>Chúng ta</th><th>Đối thủ A</th><th>Đối thủ B</th></tr>
                <tr><td>Giá</td><td>⭐⭐⭐</td><td>⭐⭐</td><td>⭐⭐⭐⭐</td></tr>
                <tr><td>Chất lượng</td><td>⭐⭐⭐⭐</td><td>⭐⭐⭐⭐⭐</td><td>⭐⭐⭐</td></tr>
                <tr><td>UX</td><td>⭐⭐⭐⭐⭐</td><td>⭐⭐⭐</td><td>⭐⭐⭐</td></tr>
                <tr><td>Hỗ trợ</td><td>⭐⭐⭐</td><td>⭐⭐⭐⭐</td><td>⭐⭐</td></tr>
            </table>
            <h4>Nguồn thông tin</h4>
            <ul>
                <li>Website, blog, social media của đối thủ</li>
                <li>Review từ khách hàng</li>
                <li>Báo cáo ngành (industry reports)</li>
                <li>Job postings (hiểu chiến lược tuyển dụng)</li>
                <li>Patent filings (hướng đi tương lai)</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 Chiến lược cạnh tranh (Michael Porter)</h3>
            <h4>3 chiến lược generic</h4>
            <ul>
                <li><strong>Cost Leadership:</strong> Giá thấp nhất (Walmart, Ryanair)</li>
                <li><strong>Differentiation:</strong> Khác biệt, premium (Apple, Tesla)</li>
                <li><strong>Focus:</strong> Tập trung niche (Rolls-Royce, Shopify)</li>
            </ul>
            <h4>Competitive Moat (Warren Buffett)</h4>
            <ul>
                <li><strong>Network Effects:</strong> Càng nhiều user, càng giá trị (Facebook)</li>
                <li><strong>Switching Cost:</strong> Chi phí chuyển đổi cao (SAP, Salesforce)</li>
                <li><strong>Brand:</strong> Thương hiệu mạnh (Coca-Cola)</li>
                <li><strong>Scale:</strong> Lợi thế quy mô (Amazon)</li>
                <li><strong>IP/Patents:</strong> Sở hữu trí tuệ (Qualcomm)</li>
            </ul>
            <div class="warning-box">
                <strong>⚠️ Lưu ý:</strong> Đừng chỉ nhìn đối thủ trực tiếp. Disruption thường đến từ ngành khác hoàn toàn.
            </div>
        `
    },
    'change-management': {
        icon: '🔄',
        title: 'Quản Lý Thay Đổi',
        category: 'strategy',
        level: 'advanced',
        connections: ['leadership-types', 'team-culture', 'strategic-thinking'],
        simple: `
            <h3>🔄 Quản lý thay đổi</h3>
            <p><strong>Quản lý thay đổi</strong> là quá trình dẫn dắt tổ chức từ trạng thái hiện tại sang trạng thái mới.</p>
            <div class="example-box">
                <strong>Tại sao thay đổi thất bại?</strong><br>
                • 70% dự án thay đổi thất bại<br>
                • Nguyên nhân #1: Kháng cự từ nhân viên<br>
                • Nguyên nhân #2: Thiếu support từ leadership
            </div>
        `,
        detail: `
            <h3>📊 Mô hình thay đổi Kotter (8 bước)</h3>
            <ol>
                <li><strong>Tạo cảm giác cấp bách:</strong> Tại sao phải thay đổi NGAY?</li>
                <li><strong>Xây dựng liên minh:</strong> Tập hợp người ủng hộ</li>
                <li><strong>Tầm nhìn chiến lược:</strong> Thay đổi sẽ dẫn đến đâu?</li>
                <li><strong>Truyền thông tầm nhìn:</strong> Nói đi nói lại nhiều lần</li>
                <li><strong>Trao quyền hành động:</strong> Loại bỏ rào cản</li>
                <li><strong>Chiến thắng ngắn hạn:</strong> Quick wins để tạo momentum</li>
                <li><strong>Duy trì đà:</strong> Không dừng sau chiến thắng đầu</li>
                <li><strong>Neo giữ vào văn hóa:</strong> Biến thay đổi thành thói quen</li>
            </ol>
        `,
        advanced: `
            <h3>🎓 Quản lý kháng cự thay đổi</h3>
            <h4>Đường cong thay đổi (Kübler-Ross)</h4>
            <ul>
                <li><strong>Sốc:</strong> "Không thể tin được!"</li>
                <li><strong>Phủ nhận:</strong> "Sẽ không ảnh hưởng đến tôi"</li>
                <li><strong>Tức giận:</strong> "Tại sao lại thay đổi?"</li>
                <li><strong>Thương lượng:</strong> "Có thể chỉ thay đổi phần này?"</li>
                <li><strong>Trầm cảm:</strong> "Mọi thứ quá khó"</li>
                <li><strong>Chấp nhận:</strong> "OK, thử xem sao"</li>
                <li><strong>Tích hợp:</strong> "Thay đổi này thực sự tốt"</li>
            </ul>
            <h4>ADKAR Model</h4>
            <ul>
                <li><strong>A</strong>wareness: Nhận thức cần thay đổi</li>
                <li><strong>D</strong>esire: Mong muốn tham gia</li>
                <li><strong>K</strong>nowledge: Kiến thức để thay đổi</li>
                <li><strong>A</strong>bility: Khả năng thực hiện</li>
                <li><strong>R</strong>einforcement: Củng cố để duy trì</li>
            </ul>
            <div class="tip-box">
                <strong>💡 Insight:</strong> Thay đổi thành công khi: Pain of staying > Pain of changing. Nhiệm vụ của leader là giúp mọi người thấy điều này.
            </div>
        `
    },
    'innovation': {
        icon: '💡',
        title: 'Đổi Mới & Sáng Tạo',
        category: 'strategy',
        level: 'advanced',
        connections: ['strategic-thinking', 'competitive-analysis', 'team-culture'],
        simple: `
            <h3>💡 Đổi mới & Sáng tạo</h3>
            <p><strong>Đổi mới</strong> là biến ý tưởng sáng tạo thành giá trị thực tế.</p>
            <div class="example-box">
                <strong>Sáng tạo vs Đổi mới:</strong><br>
                • 💭 <strong>Sáng tạo:</strong> Nghĩ ra ý tưởng mới<br>
                • 💡 <strong>Đổi mới:</strong> Biến ý tưởng thành sản phẩm/dịch vụ
            </div>
            <h4>Loại đổi mới</h4>
            <ul>
                <li>🔄 <strong>Cải tiến:</strong> Tốt hơn cái đang có</li>
                <li>💥 <strong>Đột phá:</strong> Tạo ra cái hoàn toàn mới</li>
            </ul>
        `,
        detail: `
            <h3>📊 Framework đổi mới</h3>
            <h4>Design Thinking</h4>
            <ol>
                <li><strong>Empathize:</strong> Thấu hiểu người dùng</li>
                <li><strong>Define:</strong> Xác định vấn đề cốt lõi</li>
                <li><strong>Ideate:</strong> Brainstorm giải pháp</li>
                <li><strong>Prototype:</strong> Tạo mẫu thử</li>
                <li><strong>Test:</strong> Thử nghiệm và học hỏi</li>
            </ol>
            <h4>Innovation Portfolio</h4>
            <table>
                <tr><th>Loại</th><th>% Đầu tư</th><th>Ví dụ</th></tr>
                <tr><td>Core (Cải tiến)</td><td>70%</td><td>Nâng cấp sản phẩm hiện có</td></tr>
                <tr><td>Adjacent (Mở rộng)</td><td>20%</td><td>Sản phẩm cho thị trường mới</td></tr>
                <tr><td>Transformational (Đột phá)</td><td>10%</td><td>Sản phẩm hoàn toàn mới</td></tr>
            </table>
        `,
        advanced: `
            <h3>🎓 Xây dựng văn hóa đổi mới</h3>
            <h4>Lean Startup</h4>
            <div class="formula-box">
                Build → Measure → Learn → (Lặp lại)
            </div>
            <ul>
                <li><strong>MVP:</strong> Minimum Viable Product - Sản phẩm tối thiểu</li>
                <li><strong>Pivot:</strong> Thay đổi hướng khi giả thuyết sai</li>
                <li><strong>Validated Learning:</strong> Học hỏi có kiểm chứng</li>
            </ul>
            <h4>Tạo môi trường sáng tạo</h4>
            <ul>
                <li>Cho phép thất bại (fail fast, learn fast)</li>
                <li>20% time cho dự án cá nhân (Google model)</li>
                <li>Hackathon định kỳ</li>
                <li>Cross-functional teams</li>
                <li>Budget cho thử nghiệm</li>
            </ul>
            <div class="warning-box">
                <strong>⚠️ Innovator's Dilemma:</strong> Công ty thành công thường bị disrupt vì quá tập trung vào khách hàng hiện tại, bỏ qua thị trường mới.
            </div>
        `
    },
    'scaling': {
        icon: '📈',
        title: 'Mở Rộng Quy Mô',
        category: 'strategy',
        level: 'advanced',
        connections: ['strategic-thinking', 'change-management', 'resource-allocation'],
        simple: `
            <h3>📈 Mở rộng quy mô</h3>
            <p><strong>Scaling</strong> là phát triển tổ chức từ nhỏ lên lớn mà vẫn giữ được hiệu quả.</p>
            <div class="example-box">
                <strong>Thách thức khi mở rộng:</strong><br>
                • 👥 10 → 50 người: Cần quy trình<br>
                • 👥 50 → 200 người: Cần văn hóa<br>
                • 👥 200+ người: Cần hệ thống
            </div>
        `,
        detail: `
            <h3>📊 Các giai đoạn mở rộng</h3>
            <h4>Greiner's Growth Model</h4>
            <table>
                <tr><th>Giai đoạn</th><th>Tăng trưởng bằng</th><th>Khủng hoảng</th></tr>
                <tr><td>1. Sáng tạo</td><td>Creativity</td><td>Leadership crisis</td></tr>
                <tr><td>2. Hướng dẫn</td><td>Direction</td><td>Autonomy crisis</td></tr>
                <tr><td>3. Ủy quyền</td><td>Delegation</td><td>Control crisis</td></tr>
                <tr><td>4. Phối hợp</td><td>Coordination</td><td>Red tape crisis</td></tr>
                <tr><td>5. Cộng tác</td><td>Collaboration</td><td>Growth crisis</td></tr>
            </table>
            <h4>Dấu hiệu cần mở rộng</h4>
            <ul>
                <li>Team quá tải liên tục</li>
                <li>Quyết định bị chậm</li>
                <li>Chất lượng giảm</li>
                <li>Khách hàng phải chờ</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 Scaling nâng cao</h3>
            <h4>Organizational Design</h4>
            <ul>
                <li><strong>Functional:</strong> Theo chức năng (Sales, Engineering, Marketing)</li>
                <li><strong>Divisional:</strong> Theo sản phẩm/thị trường</li>
                <li><strong>Matrix:</strong> Kết hợp functional + divisional</li>
                <li><strong>Network:</strong> Các team tự quản (Holacracy)</li>
            </ul>
            <h4>Scaling Playbook</h4>
            <ol>
                <li><strong>Document:</strong> Viết lại mọi quy trình hoạt động</li>
                <li><strong>Automate:</strong> Tự động hóa việc lặp lại</li>
                <li><strong>Delegate:</strong> Xây dựng layer quản lý</li>
                <li><strong>Measure:</strong> KPI cho mọi thứ</li>
                <li><strong>Iterate:</strong> Cải tiến liên tục</li>
            </ol>
            <div class="tip-box">
                <strong>💡 Reid Hoffman:</strong> "Nếu bạn không xấu hổ với phiên bản đầu tiên, bạn đã ra mắt quá muộn." - Áp dụng cả cho tổ chức.
            </div>
        `
    }
};
