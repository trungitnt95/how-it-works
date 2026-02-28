// Advanced Probability Concepts
const probabilityConceptsData = {
    'conditional': {
        icon: '🔗',
        title: 'Xác Suất Có Điều Kiện',
        category: 'concepts',
        level: 'intermediate',
        connections: ['bayes-theorem', 'independence', 'probability-rules'],
        simple: `
            <h3>🔗 Xác suất có điều kiện</h3>
            <p>Xác suất A xảy ra <strong>khi biết B đã xảy ra</strong>.</p>
            <div class="formula-box">
                P(A|B) = P(A và B) / P(B)
            </div>
            <div class="example-box">
                <strong>Ví dụ:</strong> Xác suất là lập trình viên giỏi, biết người đó thích đọc sách?
            </div>
        `,
        detail: `
            <h3>📊 Chi tiết xác suất có điều kiện</h3>
            <h4>Ví dụ cụ thể</h4>
            <p>Rút 2 lá bài từ bộ 52 lá (không hoàn lại):</p>
            <ul>
                <li>P(lá 2 là Át | lá 1 là Át) = 3/51</li>
                <li>P(cả 2 là Át) = 4/52 × 3/51</li>
            </ul>
            <h4>Bảng xác suất có điều kiện</h4>
            <table>
                <tr><th></th><th>B</th><th>B'</th><th>Tổng</th></tr>
                <tr><td>A</td><td>P(A∩B)</td><td>P(A∩B')</td><td>P(A)</td></tr>
                <tr><td>A'</td><td>P(A'∩B)</td><td>P(A'∩B')</td><td>P(A')</td></tr>
                <tr><td>Tổng</td><td>P(B)</td><td>P(B')</td><td>1</td></tr>
            </table>
        `,
        advanced: `
            <h3>🎓 Ứng dụng nâng cao</h3>
            <h4>Chuỗi xác suất có điều kiện</h4>
            <div class="formula-box">
                P(A∩B∩C) = P(A) × P(B|A) × P(C|A∩B)
            </div>
            <h4>Ứng dụng thực tế</h4>
            <ul>
                <li>Xét nghiệm y tế</li>
                <li>Lọc spam email</li>
                <li>Dự báo thời tiết</li>
            </ul>
        `
    },
    'bayes-theorem': {
        icon: '🔄',
        title: 'Định Lý Bayes',
        category: 'concepts',
        level: 'advanced',
        connections: ['conditional', 'probability-rules'],
        simple: `
            <h3>🔄 Định lý Bayes đơn giản</h3>
            <p>Cập nhật niềm tin khi có thông tin mới.</p>
            <div class="formula-box">
                P(Nguyên nhân | Kết quả) = ?
            </div>
            <div class="example-box">
                Xét nghiệm dương tính → Xác suất thực sự bị bệnh là bao nhiêu?
            </div>
        `,
        detail: `
            <h3>📊 Công thức Bayes</h3>
            <div class="formula-box">
                P(A|B) = P(B|A) × P(A) / P(B)
            </div>
            <h4>Các thành phần</h4>
            <ul>
                <li><strong>P(A):</strong> Prior - Xác suất tiên nghiệm</li>
                <li><strong>P(B|A):</strong> Likelihood - Khả năng</li>
                <li><strong>P(A|B):</strong> Posterior - Xác suất hậu nghiệm</li>
            </ul>
            <h4>Ví dụ xét nghiệm</h4>
            <ul>
                <li>Tỷ lệ bệnh: 1%</li>
                <li>Độ nhạy: 99% (dương khi có bệnh)</li>
                <li>Đặc hiệu: 95% (âm khi không bệnh)</li>
                <li>→ P(bệnh | dương tính) ≈ 17%</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 Bayes nâng cao</h3>
            <h4>Cập nhật liên tục</h4>
            <p>Posterior hôm nay = Prior ngày mai</p>
            <h4>Ứng dụng Machine Learning</h4>
            <ul>
                <li>Naive Bayes Classifier</li>
                <li>Bayesian Networks</li>
                <li>MCMC Sampling</li>
            </ul>
        `
    },
    'independence': {
        icon: '🔓',
        title: 'Sự Kiện Độc Lập',
        category: 'concepts',
        level: 'intermediate',
        connections: ['conditional', 'probability-rules'],
        simple: `
            <h3>🔓 Sự kiện độc lập</h3>
            <p>A và B độc lập khi <strong>A xảy ra không ảnh hưởng đến B</strong>.</p>
            <div class="formula-box">
                P(A và B) = P(A) × P(B)
            </div>
            <div class="example-box">
                Tung đồng xu 2 lần: Kết quả lần 1 không ảnh hưởng lần 2.
            </div>
        `,
        detail: `
            <h3>📊 Kiểm tra tính độc lập</h3>
            <p>A và B độc lập khi và chỉ khi:</p>
            <ul>
                <li>P(A∩B) = P(A) × P(B)</li>
                <li>P(A|B) = P(A)</li>
                <li>P(B|A) = P(B)</li>
            </ul>
            <div class="warning-box">
                ⚠️ <strong>Lưu ý:</strong> Xung khắc ≠ Độc lập
            </div>
        `,
        advanced: `
            <h3>🎓 Độc lập có điều kiện</h3>
            <p>A và B độc lập có điều kiện với C:</p>
            <div class="formula-box">
                P(A∩B|C) = P(A|C) × P(B|C)
            </div>
        `
    },
    'expected-value': {
        icon: '📈',
        title: 'Kỳ Vọng (Expected Value)',
        category: 'concepts',
        level: 'intermediate',
        connections: ['variance', 'distributions'],
        simple: `
            <h3>📈 Kỳ vọng là gì?</h3>
            <p><strong>Kỳ vọng</strong> là giá trị trung bình "dài hạn" của biến ngẫu nhiên.</p>
            <div class="formula-box">
                E(X) = Σ xᵢ × P(xᵢ)
            </div>
            <div class="example-box">
                Tung xúc xắc: E(X) = (1+2+3+4+5+6)/6 = 3.5
            </div>
        `,
        detail: `
            <h3>📊 Tính kỳ vọng</h3>
            <h4>Tính chất</h4>
            <ul>
                <li>E(aX + b) = a×E(X) + b</li>
                <li>E(X + Y) = E(X) + E(Y)</li>
                <li>E(XY) = E(X)×E(Y) nếu độc lập</li>
            </ul>
            <h4>Ứng dụng</h4>
            <ul>
                <li>Đánh giá đầu tư</li>
                <li>Bảo hiểm</li>
                <li>Game theory</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 Kỳ vọng có điều kiện</h3>
            <div class="formula-box">
                E(X|Y) = Σ x × P(X=x|Y)
            </div>
            <h4>Law of Total Expectation</h4>
            <div class="formula-box">
                E(X) = E[E(X|Y)]
            </div>
        `
    },
    'variance': {
        icon: '📊',
        title: 'Phương Sai & Độ Lệch Chuẩn',
        category: 'concepts',
        level: 'intermediate',
        connections: ['expected-value', 'normal-distribution'],
        simple: `
            <h3>📊 Phương sai là gì?</h3>
            <p><strong>Phương sai</strong> đo mức độ "trải rộng" của dữ liệu.</p>
            <div class="formula-box">
                Var(X) = E[(X - μ)²]
            </div>
            <p><strong>Độ lệch chuẩn:</strong> σ = √Var(X)</p>
        `,
        detail: `
            <h3>📊 Công thức tính</h3>
            <div class="formula-box">
                Var(X) = E(X²) - [E(X)]²
            </div>
            <h4>Tính chất</h4>
            <ul>
                <li>Var(aX + b) = a² × Var(X)</li>
                <li>Var(X + Y) = Var(X) + Var(Y) nếu độc lập</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 Covariance & Correlation</h3>
            <div class="formula-box">
                Cov(X,Y) = E(XY) - E(X)E(Y)
            </div>
            <div class="formula-box">
                Corr(X,Y) = Cov(X,Y) / (σₓ × σᵧ)
            </div>
        `
    }
};
