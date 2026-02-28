// Probability Distributions
const distributionsData = {
    'binomial': {
        icon: '🎯',
        title: 'Phân Phối Nhị Thức',
        category: 'distributions',
        level: 'intermediate',
        connections: ['normal-distribution', 'expected-value'],
        simple: `
            <h3>🎯 Phân phối nhị thức</h3>
            <p>Số lần thành công trong n lần thử <strong>độc lập</strong>, mỗi lần có xác suất p.</p>
            <div class="example-box">
                Tung đồng xu 10 lần, đếm số lần ngửa.<br>
                X ~ Binomial(n=10, p=0.5)
            </div>
        `,
        detail: `
            <h3>📊 Công thức</h3>
            <div class="formula-box">
                P(X=k) = C(n,k) × pᵏ × (1-p)ⁿ⁻ᵏ
            </div>
            <h4>Đặc trưng</h4>
            <ul>
                <li><strong>Kỳ vọng:</strong> E(X) = n×p</li>
                <li><strong>Phương sai:</strong> Var(X) = n×p×(1-p)</li>
            </ul>
            <h4>Ví dụ</h4>
            <p>Tung 5 xúc xắc, xác suất được đúng 2 số 6:</p>
            <p>P(X=2) = C(5,2) × (1/6)² × (5/6)³ ≈ 16%</p>
        `,
        advanced: `
            <h3>🎓 Xấp xỉ và mở rộng</h3>
            <ul>
                <li>Khi n lớn → xấp xỉ Normal</li>
                <li>Khi n lớn, p nhỏ → xấp xỉ Poisson</li>
            </ul>
        `
    },
    'normal-distribution': {
        icon: '📈',
        title: 'Phân Phối Chuẩn',
        category: 'distributions',
        level: 'intermediate',
        connections: ['variance', 'z-score', 'central-limit'],
        simple: `
            <h3>📈 Phân phối chuẩn (Normal)</h3>
            <p>Phân phối hình chuông, đối xứng quanh trung bình.</p>
            <div class="tip-box">
                💡 <strong>Quy tắc 68-95-99.7:</strong><br>
                • 68% dữ liệu trong ±1σ<br>
                • 95% dữ liệu trong ±2σ<br>
                • 99.7% dữ liệu trong ±3σ
            </div>
        `,
        detail: `
            <h3>📊 Phân phối chuẩn chi tiết</h3>
            <div class="formula-box">
                X ~ N(μ, σ²)
            </div>
            <h4>Đặc điểm</h4>
            <ul>
                <li>Đối xứng quanh μ</li>
                <li>Mean = Median = Mode</li>
                <li>Diện tích dưới đường cong = 1</li>
            </ul>
            <h4>Phân phối chuẩn tắc</h4>
            <p>Z ~ N(0, 1) - Standard Normal</p>
            <div class="formula-box">
                Z = (X - μ) / σ
            </div>
        `,
        advanced: `
            <h3>🎓 Ứng dụng nâng cao</h3>
            <ul>
                <li>Kiểm định giả thuyết</li>
                <li>Khoảng tin cậy</li>
                <li>Phân tích hồi quy</li>
            </ul>
        `
    },
    'poisson': {
        icon: '⏱️',
        title: 'Phân Phối Poisson',
        category: 'distributions',
        level: 'advanced',
        connections: ['binomial', 'expected-value'],
        simple: `
            <h3>⏱️ Phân phối Poisson</h3>
            <p>Đếm số sự kiện xảy ra trong một khoảng thời gian/không gian cố định.</p>
            <div class="example-box">
                Số cuộc gọi đến tổng đài mỗi giờ<br>
                Số lỗi chính tả trên mỗi trang sách
            </div>
        `,
        detail: `
            <h3>📊 Công thức Poisson</h3>
            <div class="formula-box">
                P(X=k) = (λᵏ × e⁻λ) / k!
            </div>
            <h4>Đặc trưng</h4>
            <ul>
                <li><strong>Kỳ vọng:</strong> E(X) = λ</li>
                <li><strong>Phương sai:</strong> Var(X) = λ</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 Ứng dụng</h3>
            <ul>
                <li>Queueing theory</li>
                <li>Phân tích rủi ro</li>
                <li>Epidemiology</li>
            </ul>
        `
    },
    'z-score': {
        icon: '📏',
        title: 'Z-Score',
        category: 'distributions',
        level: 'beginner',
        connections: ['normal-distribution', 'variance'],
        simple: `
            <h3>📏 Z-Score là gì?</h3>
            <p>Cho biết một giá trị cách trung bình <strong>bao nhiêu độ lệch chuẩn</strong>.</p>
            <div class="formula-box">
                Z = (X - μ) / σ
            </div>
            <div class="example-box">
                IQ = 130, μ = 100, σ = 15<br>
                Z = (130-100)/15 = 2 → Cao hơn 2 độ lệch chuẩn
            </div>
        `,
        detail: `
            <h3>📊 Ý nghĩa Z-Score</h3>
            <table>
                <tr><th>Z-Score</th><th>Phần trăm dưới</th></tr>
                <tr><td>-2</td><td>2.3%</td></tr>
                <tr><td>-1</td><td>15.9%</td></tr>
                <tr><td>0</td><td>50%</td></tr>
                <tr><td>1</td><td>84.1%</td></tr>
                <tr><td>2</td><td>97.7%</td></tr>
            </table>
        `,
        advanced: `
            <h3>🎓 Ứng dụng</h3>
            <ul>
                <li>So sánh dữ liệu từ phân phối khác nhau</li>
                <li>Phát hiện outliers (|Z| > 3)</li>
                <li>Kiểm định thống kê</li>
            </ul>
        `
    },
    'central-limit': {
        icon: '🎲',
        title: 'Định Lý Giới Hạn Trung Tâm',
        category: 'distributions',
        level: 'advanced',
        connections: ['normal-distribution', 'expected-value'],
        simple: `
            <h3>🎲 Central Limit Theorem</h3>
            <p>Trung bình mẫu sẽ tiến về <strong>phân phối chuẩn</strong> khi n đủ lớn.</p>
            <div class="tip-box">
                💡 Dù dữ liệu gốc có phân phối gì, trung bình của nhiều mẫu sẽ có dạng hình chuông!
            </div>
        `,
        detail: `
            <h3>📊 Chi tiết CLT</h3>
            <p>Nếu X₁, X₂, ..., Xₙ độc lập, cùng phân phối với E(X)=μ, Var(X)=σ²:</p>
            <div class="formula-box">
                X̄ ~ N(μ, σ²/n) khi n → ∞
            </div>
            <h4>Ý nghĩa</h4>
            <ul>
                <li>n ≥ 30 thường đủ</li>
                <li>Cơ sở cho suy diễn thống kê</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 Ứng dụng</h3>
            <ul>
                <li>Ước lượng khoảng tin cậy</li>
                <li>Kiểm định giả thuyết</li>
                <li>Quality control</li>
            </ul>
        `
    }
};
