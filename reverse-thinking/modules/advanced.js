// ==================== ADVANCED CONCEPTS MODULE ====================
// Khái niệm nâng cao về tư duy ngược

const advancedData = {
    'mental-models': {
        icon: '🧩',
        title: 'Mental Models & Inversion',
        subtitle: 'Kết hợp nhiều mô hình tư duy',
        order: 16,
        category: 'advanced',
        level: 'advanced',
        connections: ['charlie-munger', 'what-is-inversion', 'second-order'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> Tư duy ngược mạnh nhất khi KẾT HỢP với các mô hình tư duy khác.</p>
            <div class="example-box">
                <strong>Ví dụ kết hợp:</strong><br>
                🔄 Inversion + 🎯 First Principles = Phân tích vấn đề từ gốc rễ, đảo ngược để kiểm tra<br>
                🔄 Inversion + 📊 80/20 = Tìm 20% lỗi gây 80% thiệt hại<br>
                🔄 Inversion + 🧠 Second Order = Nghĩ ngược VÀ nghĩ sâu
            </div>
        `,
        detail: `
            <h4>📝 Munger's Lattice of Mental Models:</h4>
            <p>Charlie Munger khuyên nên có ~100 mental models từ nhiều ngành. Inversion là 1 trong những quan trọng nhất:</p>
            <table>
                <tr><th>Ngành</th><th>Mental Model</th><th>Kết hợp Inversion</th></tr>
                <tr><td>Toán</td><td>Xác suất</td><td>Tính xác suất THẤT BẠI thay vì thành công</td></tr>
                <tr><td>Vật lý</td><td>Entropy</td><td>Mọi thứ xu hướng hỗn loạn → Phải chủ động chống</td></tr>
                <tr><td>Sinh học</td><td>Evolution</td><td>Loại bỏ yếu tố yếu kém (natural selection)</td></tr>
                <tr><td>Tâm lý</td><td>Cognitive biases</td><td>Liệt kê biases để TRÁNH</td></tr>
            </table>
        `,
        advanced: `
            <h4>🧠 Bayesian Inversion:</h4>
            <p>Kết hợp tư duy ngược với Bayes' Theorem:</p>
            <ul>
                <li>P(Failure | Data) = Xác suất thất bại khi biết dữ liệu</li>
                <li>Cập nhật liên tục: Khi có thông tin mới, tính lại xác suất thất bại</li>
                <li>Nếu P(Failure) tăng → Điều chỉnh kế hoạch ngay</li>
            </ul>
            
            <h4>Systems Thinking + Inversion:</h4>
            <p>Trong hệ thống phức tạp, feedback loops có thể khuếch đại thất bại. Tìm và phá vỡ negative feedback loops.</p>
        `
    },

    'second-order': {
        icon: '🔗',
        title: 'Second-Order Thinking',
        subtitle: 'Nghĩ đến hệ quả của hệ quả',
        order: 17,
        category: 'advanced',
        level: 'advanced',
        connections: ['mental-models', 'what-is-inversion', 'inversion-business'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> Khi đảo ngược, đừng chỉ hỏi "Điều xấu gì sẽ xảy ra?" mà còn "Và SAU ĐÓ điều gì sẽ xảy ra tiếp?"</p>
            <div class="example-box">
                <strong>Ví dụ:</strong><br>
                1st order: Giảm giá sản phẩm 50% → Bán được nhiều hơn ✅<br>
                2nd order: Khách quen chờ giảm giá mới mua 😰<br>
                3rd order: Thương hiệu bị coi là "hàng rẻ" 💀
            </div>
        `,
        detail: `
            <h4>📝 Howard Marks về Second-Order Thinking:</h4>
            <p>"First-level thinking là đơn giản và nông cạn. Second-level thinking là sâu sắc và phức tạp."</p>
            
            <h4>Áp dụng inversion ở nhiều tầng:</h4>
            <ol>
                <li><strong>Level 1:</strong> Hành động này có thể thất bại thế nào?</li>
                <li><strong>Level 2:</strong> Nếu thất bại, hệ quả gì xảy ra tiếp?</li>
                <li><strong>Level 3:</strong> Hệ quả đó ảnh hưởng gì đến mục tiêu dài hạn?</li>
            </ol>
            
            <div class="warning-box">
                ⚠️ Cobra Effect: Chính phủ Ấn Độ trả tiền cho mỗi con rắn hổ mang chết → Người dân nuôi rắn để giết → Nhiều rắn hơn!<br>
                → Second-order thinking giúp tránh unintended consequences.
            </div>
        `,
        advanced: `
            <h4>🧠 Chesterton's Fence:</h4>
            <p>"Đừng phá hàng rào nếu bạn không biết tại sao nó được dựng lên."</p>
            <p>Trước khi BỎ BỚT (subtraction), hãy hiểu TẠI SAO nó tồn tại. Có thể nó đang ngăn ngừa vấn đề bạn chưa thấy.</p>
            
            <h4>Inversion của Inversion:</h4>
            <p>Đôi khi cần đảo ngược CẢ tư duy ngược:</p>
            <ul>
                <li>Tư duy ngược: "Tránh thất bại"</li>
                <li>Meta-inversion: "Quá sợ thất bại = không dám hành động = THẤT BẠI lớn hơn!"</li>
                <li>→ Cần cân bằng giữa thận trọng và dám làm</li>
            </ul>
        `
    },

    'simplify': {
        icon: '✂️',
        title: 'Simplify by Inversion',
        subtitle: 'Đơn giản hóa bằng loại bỏ',
        order: 18,
        category: 'advanced',
        level: 'intermediate',
        connections: ['subtract-not-add', 'anti-goals', 'avoid-failure'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> Thay vì thêm quy tắc, hãy BỎ BỚT thứ không cần. Sự đơn giản đến từ việc loại bỏ, không phải thêm vào.</p>
            <div class="example-box">
                <strong>Leonardo da Vinci:</strong><br>
                "Sự đơn giản là đỉnh cao của sự tinh tế."<br><br>
                <strong>Antoine de Saint-Exupéry:</strong><br>
                "Sự hoàn hảo đạt được không phải khi không còn gì để thêm, mà khi không còn gì để bỏ."
            </div>
        `,
        detail: `
            <h4>📝 Razor Principles (Nguyên tắc dao cạo):</h4>
            <ul>
                <li><strong>Occam's Razor:</strong> Giải thích đơn giản nhất thường đúng nhất</li>
                <li><strong>Hanlon's Razor:</strong> Đừng quy kết ác ý khi sự ngu dốt giải thích được</li>
                <li><strong>Hitchens' Razor:</strong> Khẳng định không có bằng chứng có thể bị bác bỏ không cần bằng chứng</li>
            </ul>
            
            <h4>Ứng dụng trong thiết kế sản phẩm:</h4>
            <div class="example-box">
                <strong>Apple:</strong> Bỏ nút Home, bỏ jack tai nghe, bỏ cổng USB → Sản phẩm đơn giản, thanh thoát hơn<br>
                <strong>Google Search:</strong> Trang chủ chỉ có 1 ô tìm kiếm → Hiệu quả nhất thế giới
            </div>
        `,
        advanced: `
            <h4>🧠 KISS, YAGNI, và Inversion trong Engineering:</h4>
            <ul>
                <li><strong>KISS:</strong> Keep It Simple, Stupid</li>
                <li><strong>YAGNI:</strong> You Ain't Gonna Need It - BỎ tính năng chưa cần</li>
                <li><strong>DRY → WET:</strong> Đôi khi Write Everything Twice tốt hơn abstraction sớm</li>
            </ul>
            
            <h4>Simplification Framework:</h4>
            <ol>
                <li>Liệt kê TẤT CẢ thành phần hiện tại</li>
                <li>Với mỗi thành phần, hỏi: "Nếu xóa, điều gì xảy ra?"</li>
                <li>Nếu câu trả lời là "không sao cả" → Xóa</li>
                <li>Lặp lại cho đến khi không thể xóa gì nữa</li>
            </ol>
        `
    },

    'stoic-inversion': {
        icon: '🏛️',
        title: 'Stoicism & Negative Visualization',
        subtitle: 'Triết học khắc kỷ và tưởng tượng tiêu cực',
        order: 19,
        category: 'advanced',
        level: 'advanced',
        connections: ['fear-setting', 'worst-case', 'what-is-inversion'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> Các triết gia Stoic tập thói quen tưởng tượng MẤT MÁT mỗi ngày - không phải để buồn, mà để TRÂN TRỌNG và chuẩn bị.</p>
            <div class="example-box">
                <strong>Bài tập Stoic hàng ngày:</strong><br>
                "Hôm nay có thể là ngày cuối cùng tôi..."<br>
                • Được nói chuyện với bạn thân<br>
                • Được ôm con<br>
                • Được làm công việc mình yêu<br>
                → Kết quả: Trân trọng hiện tại hơn!
            </div>
        `,
        detail: `
            <h4>📝 Premeditatio Malorum (Pre-meditation of Evils):</h4>
            <p>Kỹ thuật Stoic cổ đại: Mỗi sáng, tưởng tượng những điều tệ có thể xảy ra trong ngày.</p>
            
            <h4>Các triết gia và tư duy ngược:</h4>
            <ul>
                <li><strong>Seneca:</strong> "Chúng ta đau khổ trong tưởng tượng nhiều hơn thực tế. Vậy hãy tưởng tượng có chủ đích để chuẩn bị."</li>
                <li><strong>Marcus Aurelius:</strong> Mỗi sáng nhắc mình sẽ gặp người khó chịu, giả dối, ghen tị → Chuẩn bị tâm lý</li>
                <li><strong>Epictetus:</strong> "Không phải sự việc làm ta buồn, mà là CÁCH TA NGHĨ về sự việc"</li>
            </ul>
            
            <div class="tip-box">
                💡 Memento Mori - Nhớ rằng bạn sẽ chết. Không phải để sợ, mà để sống có ý nghĩa hơn.
            </div>
        `,
        advanced: `
            <h4>🧠 Negative Visualization vs Positive Visualization:</h4>
            <table>
                <tr><th>Positive Visualization</th><th>Negative Visualization</th></tr>
                <tr><td>Tưởng tượng thành công</td><td>Tưởng tượng mất mát</td></tr>
                <tr><td>Tạo động lực</td><td>Tạo sự trân trọng + chuẩn bị</td></tr>
                <tr><td>Có thể gây overconfidence</td><td>Giảm hedonic adaptation</td></tr>
                <tr><td>Phổ biến trong self-help</td><td>Phổ biến trong Stoicism</td></tr>
            </table>
            
            <h4>Hedonic Adaptation và vai trò của Negative Visualization:</h4>
            <p>Con người nhanh chóng quen với điều tốt (hedonic treadmill). Tưởng tượng MẤT giúp "reset" và lại thấy biết ơn.</p>
        `
    }
};
