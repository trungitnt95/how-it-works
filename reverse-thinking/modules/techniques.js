// ==================== TECHNIQUES MODULE ====================
// Các kỹ thuật tư duy ngược

const techniquesData = {
    'pre-mortem': {
        icon: '💀',
        title: 'Pre-Mortem Analysis',
        subtitle: 'Phân tích trước thất bại',
        order: 5,
        category: 'techniques',
        level: 'beginner',
        connections: ['what-is-inversion', 'fear-setting', 'risk-inversion'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> Trước khi bắt đầu dự án, hãy tưởng tượng nó ĐÃ THẤT BẠI hoàn toàn, rồi tìm lý do TẠI SAO.</p>
            <div class="example-box">
                <strong>Cách làm:</strong><br>
                1. Tưởng tượng: "Bây giờ là 1 năm sau, dự án đã thất bại thảm hại"<br>
                2. Hỏi: "Điều gì đã xảy ra? Tại sao?"<br>
                3. Liệt kê TẤT CẢ lý do có thể<br>
                4. Tìm cách ngăn chặn từng lý do
            </div>
            <div class="tip-box">
                💡 Pre-mortem được phát minh bởi Gary Klein, nhà tâm lý học nổi tiếng. Nó hiệu quả vì cho phép mọi người nói lên lo ngại mà không bị xem là "tiêu cực".
            </div>
        `,
        detail: `
            <h4>📝 Quy trình Pre-Mortem 5 bước:</h4>
            <ol>
                <li><strong>Tập hợp nhóm:</strong> Mọi người liên quan đến dự án</li>
                <li><strong>Đặt bối cảnh:</strong> "Hãy tưởng tượng bây giờ là [tương lai], dự án đã hoàn toàn thất bại"</li>
                <li><strong>Viết riêng:</strong> Mỗi người tự viết ra lý do thất bại (tránh groupthink)</li>
                <li><strong>Chia sẻ & thảo luận:</strong> Đọc lần lượt, gom nhóm các lý do</li>
                <li><strong>Lập kế hoạch phòng ngừa:</strong> Cho từng rủi ro lớn nhất</li>
            </ol>
            
            <div class="example-box">
                <strong>Ví dụ: Pre-mortem cho startup app đặt đồ ăn:</strong><br>
                • "Thất bại vì không đủ nhà hàng đối tác" → Ký hợp đồng 50 nhà hàng trước khi launch<br>
                • "Thất bại vì giao hàng chậm" → Test logistics 3 tháng trước launch<br>
                • "Thất bại vì hết tiền" → Dự trù runway 18 tháng
            </div>
        `,
        advanced: `
            <h4>🧠 Tại sao Pre-Mortem hiệu quả hơn Risk Assessment thông thường?</h4>
            <ul>
                <li><strong>Prospective hindsight:</strong> Nghiên cứu cho thấy tưởng tượng sự kiện ĐÃ XẢY RA giúp tìm ra nguyên nhân chính xác hơn 30%</li>
                <li><strong>Psychological safety:</strong> Nói "tôi nghĩ sẽ thất bại vì..." dễ hơn "tôi không đồng ý với kế hoạch"</li>
                <li><strong>Giảm planning fallacy:</strong> Buộc phải nghĩ đến kịch bản xấu</li>
            </ul>
            
            <h4>Pre-mortem vs Post-mortem:</h4>
            <table>
                <tr><th>Pre-Mortem</th><th>Post-Mortem</th></tr>
                <tr><td>TRƯỚC khi làm</td><td>SAU khi xong</td></tr>
                <tr><td>Phòng ngừa</td><td>Học từ sai lầm</td></tr>
                <tr><td>Tưởng tượng thất bại</td><td>Phân tích thất bại thực</td></tr>
                <tr><td>Rẻ hơn</td><td>Đã mất chi phí</td></tr>
            </table>
        `
    },

    'fear-setting': {
        icon: '😱',
        title: 'Fear Setting',
        subtitle: 'Xác định nỗi sợ - Tim Ferriss',
        order: 6,
        category: 'techniques',
        level: 'beginner',
        connections: ['pre-mortem', 'what-is-inversion', 'worst-case'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> Thay vì hỏi "Nếu thành công thì sao?", hãy hỏi "Điều tệ nhất có thể xảy ra là gì?" rồi lên kế hoạch đối phó.</p>
            <div class="example-box">
                <strong>Fear Setting 3 cột:</strong><br>
                📋 <strong>Define:</strong> Điều tệ nhất là gì?<br>
                🛡️ <strong>Prevent:</strong> Làm gì để ngăn ngừa?<br>
                🔧 <strong>Repair:</strong> Nếu xảy ra, sửa thế nào?
            </div>
            <div class="tip-box">
                💡 Tim Ferriss sử dụng kỹ thuật này trước mỗi quyết định lớn trong cuộc đời, từ nghỉ việc đến đầu tư.
            </div>
        `,
        detail: `
            <h4>📝 Bài tập Fear Setting đầy đủ:</h4>
            <p><strong>Trang 1: Define → Prevent → Repair</strong></p>
            <table>
                <tr><th>Nỗi sợ (Define)</th><th>Ngăn ngừa (Prevent)</th><th>Sửa chữa (Repair)</th></tr>
                <tr><td>Mất thu nhập 6 tháng</td><td>Để dành 6 tháng lương trước</td><td>Freelance, xin việc mới</td></tr>
                <tr><td>Thất bại và XẤU HỔ</td><td>Nhắc bản thân ai cũng từng thất bại</td><td>Viết bài học, chia sẻ kinh nghiệm</td></tr>
                <tr><td>Mất mối quan hệ</td><td>Giao tiếp minh bạch từ đầu</td><td>Xin lỗi chân thành, kết nối lại</td></tr>
            </table>
            
            <p><strong>Trang 2: Chi phí của KHÔNG hành động</strong></p>
            <div class="warning-box">
                ⚠️ Hỏi: "Nếu tôi KHÔNG làm gì, cuộc sống sẽ như thế nào sau 6 tháng, 1 năm, 3 năm?"<br>
                → Thường thì CHI PHÍ KHÔNG HÀNH ĐỘNG lớn hơn nhiều so với rủi ro hành động!
            </div>
        `,
        advanced: `
            <h4>🧠 Stoicism và Fear Setting:</h4>
            <p>Fear Setting có gốc từ Stoicism cổ đại, cụ thể là kỹ thuật "Premeditatio Malorum" (pre-meditation of evils) của Seneca:</p>
            <ul>
                <li><strong>Seneca:</strong> "Chúng ta thường đau khổ trong tưởng tượng nhiều hơn thực tế"</li>
                <li><strong>Marcus Aurelius:</strong> Mỗi sáng tưởng tượng mọi thứ xấu có thể xảy ra trong ngày</li>
                <li><strong>Epictetus:</strong> Phân biệt giữa điều kiểm soát được và không</li>
            </ul>
            
            <h4>Nghiên cứu về exposure therapy:</h4>
            <p>Tâm lý học hiện đại gọi đây là "exposure therapy" - đối mặt với nỗi sợ sẽ giảm bớt nỗi sợ. Viết ra nỗi sợ = bước đầu đối mặt.</p>
        `
    },

    'worst-case': {
        icon: '⚡',
        title: 'Worst Case Scenario',
        subtitle: 'Kịch bản xấu nhất',
        order: 7,
        category: 'techniques',
        level: 'beginner',
        connections: ['fear-setting', 'pre-mortem', 'risk-inversion'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> Hỏi "Điều tồi tệ NHẤT có thể xảy ra là gì?" → Nếu bạn chấp nhận được điều đó, hãy làm!</p>
            <div class="example-box">
                <strong>Ví dụ - Muốn nghỉ việc để khởi nghiệp:</strong><br>
                Xấu nhất: Thất bại sau 1 năm, mất tiết kiệm, phải xin việc lại<br>
                → Có chấp nhận được không? Có! Vì bạn có kỹ năng, có thể tìm việc mới.<br>
                → Vậy thì đáng để thử!
            </div>
        `,
        detail: `
            <h4>📝 Framework phân tích Worst Case:</h4>
            <ol>
                <li><strong>Xác định worst case:</strong> Thực sự tệ nhất là gì? (Thường ít tệ hơn tưởng tượng)</li>
                <li><strong>Đánh giá xác suất:</strong> Khả năng xảy ra bao nhiêu %?</li>
                <li><strong>Đánh giá khả năng phục hồi:</strong> Nếu xảy ra, mất bao lâu phục hồi?</li>
                <li><strong>So sánh với best case:</strong> Nếu mọi thứ thuận lợi thì sao?</li>
                <li><strong>Quyết định:</strong> Expected value có dương không?</li>
            </ol>
            
            <div class="tip-box">
                💡 Jeff Bezos dùng "Regret Minimization Framework": "Khi 80 tuổi, tôi có hối tiếc vì đã KHÔNG thử không?"
            </div>
        `,
        advanced: `
            <h4>🧠 Catastrophizing vs Realistic Worst Case:</h4>
            <p>Cần phân biệt giữa:</p>
            <ul>
                <li><strong>Catastrophizing (xấu):</strong> "Tôi sẽ mất HẾT, mọi người sẽ GHÉT tôi, đời tôi sẽ KẾT THÚC" → Phi lý</li>
                <li><strong>Realistic worst case (tốt):</strong> "Tôi có thể mất X triệu, cần Y tháng để phục hồi" → Cụ thể, thực tế</li>
            </ul>
            
            <h4>Expected Value Analysis kết hợp:</h4>
            <p>EV = Σ(Probability × Outcome)</p>
            <div class="example-box">
                Worst case (20%): Mất 100tr → -100 × 0.2 = -20<br>
                Most likely (60%): Lãi 50tr → 50 × 0.6 = +30<br>
                Best case (20%): Lãi 500tr → 500 × 0.2 = +100<br>
                <strong>EV = -20 + 30 + 100 = +110 triệu</strong> → Đáng làm!
            </div>
        `
    },

    'risk-inversion': {
        icon: '🎯',
        title: 'Risk Inversion',
        subtitle: 'Đảo ngược rủi ro',
        order: 8,
        category: 'techniques',
        level: 'intermediate',
        connections: ['pre-mortem', 'worst-case', 'failure-mapping'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> Thay vì hỏi "Rủi ro là gì?", hãy hỏi "Nếu tôi ĐẦU TƯ VÌ rủi ro này, tôi sẽ đặt cược thế nào?"</p>
            <div class="example-box">
                <strong>Ví dụ:</strong><br>
                Rủi ro: Đối thủ ra sản phẩm mới<br>
                Đảo ngược: "Nếu tôi là đối thủ, tôi sẽ tấn công công ty mình ở đâu?"<br>
                → Phát hiện điểm yếu mà mình không nhận ra!
            </div>
        `,
        detail: `
            <h4>📝 Kỹ thuật Red Team:</h4>
            <p>Quân đội Mỹ sử dụng "Red Team" - một nhóm chuyên TẤN CÔNG kế hoạch của chính mình:</p>
            <ol>
                <li>Lập kế hoạch</li>
                <li>Giao cho Red Team tìm cách PHÁ kế hoạch</li>
                <li>Sửa kế hoạch dựa trên lỗ hổng tìm được</li>
                <li>Lặp lại</li>
            </ol>
            
            <div class="example-box">
                <strong>Ứng dụng trong kinh doanh:</strong><br>
                Amazon có nhóm "Working Backwards" - bắt đầu từ press release của sản phẩm thất bại, rồi tìm lý do.
            </div>
        `,
        advanced: `
            <h4>🧠 Adversarial Thinking:</h4>
            <p>Trong cybersecurity, "think like a hacker" là nguyên tắc cốt lõi. Áp dụng cho kinh doanh:</p>
            <ul>
                <li>Nếu bạn là đối thủ, bạn sẽ tấn công mình ở đâu?</li>
                <li>Nếu bạn là khách hàng khó tính nhất, bạn sẽ phàn nàn gì?</li>
                <li>Nếu bạn là nhà đầu tư nghi ngờ, bạn sẽ hỏi gì?</li>
                <li>Nếu bạn là nhà báo viết bài tiêu cực, bạn sẽ nói gì?</li>
            </ul>
        `
    },

    'failure-mapping': {
        icon: '🗺️',
        title: 'Failure Mapping',
        subtitle: 'Bản đồ thất bại',
        order: 9,
        category: 'techniques',
        level: 'intermediate',
        connections: ['pre-mortem', 'risk-inversion', 'anti-goals'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> Vẽ bản đồ TẤT CẢ các cách có thể thất bại, phân loại theo xác suất và mức độ ảnh hưởng.</p>
            <div class="example-box">
                <strong>Ma trận 2×2:</strong><br>
                📊 Trục X: Xác suất (Thấp → Cao)<br>
                📊 Trục Y: Mức ảnh hưởng (Thấp → Cao)<br><br>
                🔴 Cao-Cao: Phải xử lý NGAY<br>
                🟡 Cao-Thấp: Theo dõi<br>
                🟠 Thấp-Cao: Chuẩn bị kế hoạch B<br>
                🟢 Thấp-Thấp: Chấp nhận
            </div>
        `,
        detail: `
            <h4>📝 Quy trình Failure Mapping:</h4>
            <ol>
                <li><strong>Brain dump:</strong> Liệt kê TẤT CẢ cách thất bại</li>
                <li><strong>Phân loại:</strong> Nhóm theo nguyên nhân (con người, kỹ thuật, thị trường, tài chính)</li>
                <li><strong>Đánh giá:</strong> Cho điểm xác suất (1-5) và mức ảnh hưởng (1-5)</li>
                <li><strong>Ưu tiên:</strong> Risk Score = Xác suất × Ảnh hưởng</li>
                <li><strong>Hành động:</strong> Lập kế hoạch cho top 5 rủi ro</li>
            </ol>
        `,
        advanced: `
            <h4>🧠 FMEA - Failure Mode and Effects Analysis:</h4>
            <p>Kỹ thuật từ NASA và ngành ô tô, áp dụng cho mọi lĩnh vực:</p>
            <table>
                <tr><th>Failure Mode</th><th>Severity (1-10)</th><th>Occurrence (1-10)</th><th>Detection (1-10)</th><th>RPN</th></tr>
                <tr><td>Server sập</td><td>9</td><td>3</td><td>2</td><td>54</td></tr>
                <tr><td>Data leak</td><td>10</td><td>2</td><td>5</td><td>100</td></tr>
                <tr><td>UX khó dùng</td><td>7</td><td>6</td><td>4</td><td>168</td></tr>
            </table>
            <p>RPN = Severity × Occurrence × Detection → Ưu tiên xử lý RPN cao nhất</p>
        `
    },

    'anti-goals': {
        icon: '🚫',
        title: 'Anti-Goals',
        subtitle: 'Mục tiêu ngược',
        order: 10,
        category: 'techniques',
        level: 'intermediate',
        connections: ['what-is-inversion', 'failure-mapping', 'simplify'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> Thay vì chỉ đặt mục tiêu "muốn đạt được gì", hãy viết ra danh sách "KHÔNG MUỐN gì".</p>
            <div class="example-box">
                <strong>Anti-Goals cho công việc:</strong><br>
                🚫 Không muốn: Họp quá 2 tiếng/ngày<br>
                🚫 Không muốn: Check email sau 8 giờ tối<br>
                🚫 Không muốn: Làm việc với người toxic<br>
                🚫 Không muốn: Hy sinh sức khỏe vì deadline
            </div>
        `,
        detail: `
            <h4>📝 Cách viết Anti-Goals hiệu quả:</h4>
            <ol>
                <li><strong>Nghĩ về ngày tồi tệ nhất:</strong> Mô tả chi tiết 1 ngày làm việc kinh khủng</li>
                <li><strong>Liệt kê elements:</strong> Những yếu tố tạo nên ngày đó</li>
                <li><strong>Đảo ngược:</strong> Mỗi element xấu → 1 anti-goal</li>
                <li><strong>Thiết kế hệ thống:</strong> Tạo quy tắc/thói quen để tránh</li>
            </ol>
            
            <div class="example-box">
                <strong>Andrew Wilkinson (CEO Tiny):</strong><br>
                Anti-goals: Không họp trước 11h, không email cuối tuần, không làm với người mình không thích, không business cần quản lý >50 nhân viên trực tiếp.
            </div>
        `,
        advanced: `
            <h4>🧠 Anti-Goals trong Various Domains:</h4>
            
            <p><strong>Đầu tư:</strong></p>
            <ul>
                <li>🚫 Không đầu tư vào thứ không hiểu</li>
                <li>🚫 Không dùng leverage quá 2x</li>
                <li>🚫 Không để 1 vị thế > 10% portfolio</li>
            </ul>
            
            <p><strong>Startup:</strong></p>
            <ul>
                <li>🚫 Không build tính năng chưa ai yêu cầu</li>
                <li>🚫 Không hire nhanh chỉ vì có tiền</li>
                <li>🚫 Không ignore unit economics</li>
            </ul>
            
            <p><strong>Sức khỏe:</strong></p>
            <ul>
                <li>🚫 Không ngồi liên tục > 2 tiếng</li>
                <li>🚫 Không ăn sau 9 giờ tối</li>
                <li>🚫 Không ngủ < 7 tiếng</li>
            </ul>
        `
    }
};
