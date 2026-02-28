// Real-world Applications
const probabilityApplicationsData = {
    'risk-assessment': {
        icon: '⚠️',
        title: 'Đánh Giá Rủi Ro',
        category: 'applications',
        level: 'intermediate',
        connections: ['expected-value', 'variance'],
        simple: `
            <h3>⚠️ Đánh giá rủi ro</h3>
            <p>Dùng xác suất để ước lượng và quản lý rủi ro.</p>
            <div class="formula-box">
                Rủi ro = Xác suất × Tác động
            </div>
            <div class="example-box">
                Xác suất tai nạn: 1%<br>
                Thiệt hại: 100 triệu<br>
                Rủi ro kỳ vọng: 1 triệu
            </div>
        `,
        detail: `
            <h3>📊 Ma trận rủi ro</h3>
            <table>
                <tr><th></th><th>Thấp</th><th>Trung bình</th><th>Cao</th></tr>
                <tr><td>Cao</td><td>Theo dõi</td><td>Hành động</td><td>Khẩn cấp</td></tr>
                <tr><td>TB</td><td>Chấp nhận</td><td>Theo dõi</td><td>Hành động</td></tr>
                <tr><td>Thấp</td><td>Bỏ qua</td><td>Chấp nhận</td><td>Theo dõi</td></tr>
            </table>
        `,
        advanced: `
            <h3>🎓 Value at Risk (VaR)</h3>
            <p>Mức lỗ tối đa với độ tin cậy nhất định.</p>
            <div class="example-box">
                VaR 95% = 10 triệu<br>
                → Có 95% tin rằng lỗ không quá 10 triệu
            </div>
        `
    },
    'ab-testing': {
        icon: '🔬',
        title: 'A/B Testing',
        category: 'applications',
        level: 'intermediate',
        connections: ['hypothesis-testing', 'normal-distribution'],
        simple: `
            <h3>🔬 A/B Testing</h3>
            <p>So sánh 2 phiên bản để xem phiên bản nào <strong>tốt hơn</strong>.</p>
            <div class="example-box">
                Website A: Nút xanh - 5% click<br>
                Website B: Nút đỏ - 6% click<br>
                → B tốt hơn? Cần kiểm định thống kê!
            </div>
        `,
        detail: `
            <h3>📊 Quy trình A/B Test</h3>
            <ol>
                <li>Đặt giả thuyết H₀ và H₁</li>
                <li>Chọn significance level (thường 5%)</li>
                <li>Tính sample size cần thiết</li>
                <li>Chạy test và thu thập dữ liệu</li>
                <li>Tính p-value và kết luận</li>
            </ol>
        `,
        advanced: `
            <h3>🎓 Statistical Power</h3>
            <ul>
                <li><strong>Power:</strong> Khả năng phát hiện effect thật</li>
                <li><strong>Type I Error:</strong> False positive (α)</li>
                <li><strong>Type II Error:</strong> False negative (β)</li>
            </ul>
        `
    },
    'hypothesis-testing': {
        icon: '🎯',
        title: 'Kiểm Định Giả Thuyết',
        category: 'applications',
        level: 'advanced',
        connections: ['normal-distribution', 'central-limit'],
        simple: `
            <h3>🎯 Kiểm định giả thuyết</h3>
            <p>Dùng dữ liệu để kiểm tra một <strong>tuyên bố</strong> có đúng không.</p>
            <div class="example-box">
                H₀: Thuốc mới không hiệu quả<br>
                H₁: Thuốc mới có hiệu quả<br>
                → Thu thập dữ liệu để bác bỏ hoặc chấp nhận H₀
            </div>
        `,
        detail: `
            <h3>📊 Các bước kiểm định</h3>
            <ol>
                <li>Đặt H₀ (null) và H₁ (alternative)</li>
                <li>Chọn α (thường 0.05)</li>
                <li>Tính test statistic</li>
                <li>Tính p-value</li>
                <li>So sánh p-value với α</li>
            </ol>
            <div class="tip-box">
                p-value < α → Bác bỏ H₀
            </div>
        `,
        advanced: `
            <h3>🎓 Các loại kiểm định</h3>
            <ul>
                <li>t-test (so sánh 2 nhóm)</li>
                <li>Chi-square (dữ liệu phân loại)</li>
                <li>ANOVA (nhiều nhóm)</li>
                <li>Regression tests</li>
            </ul>
        `
    },
    'confidence-interval': {
        icon: '📏',
        title: 'Khoảng Tin Cậy',
        category: 'applications',
        level: 'intermediate',
        connections: ['normal-distribution', 'central-limit'],
        simple: `
            <h3>📏 Khoảng tin cậy</h3>
            <p>Khoảng giá trị <strong>có khả năng chứa</strong> tham số thực.</p>
            <div class="example-box">
                Trung bình mẫu: 50<br>
                CI 95%: [45, 55]<br>
                → 95% tin rằng trung bình thực nằm trong [45, 55]
            </div>
        `,
        detail: `
            <h3>📊 Công thức CI</h3>
            <div class="formula-box">
                CI = x̄ ± z × (σ/√n)
            </div>
            <h4>Giá trị z phổ biến</h4>
            <ul>
                <li>90% CI: z = 1.645</li>
                <li>95% CI: z = 1.96</li>
                <li>99% CI: z = 2.576</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 Hiểu đúng CI</h3>
            <div class="warning-box">
                ⚠️ CI 95% KHÔNG có nghĩa "95% tham số nằm trong khoảng".<br>
                Mà là: Nếu lặp lại nhiều lần, 95% các CI sẽ chứa tham số thực.
            </div>
        `
    },
    'monte-carlo': {
        icon: '🎲',
        title: 'Monte Carlo Simulation',
        category: 'applications',
        level: 'advanced',
        connections: ['expected-value', 'distributions'],
        simple: `
            <h3>🎲 Monte Carlo</h3>
            <p>Dùng <strong>mô phỏng ngẫu nhiên</strong> để ước lượng kết quả.</p>
            <div class="example-box">
                Muốn tính π?<br>
                → Ném "điểm" ngẫu nhiên vào hình vuông<br>
                → Đếm tỷ lệ rơi vào hình tròn nội tiếp
            </div>
        `,
        detail: `
            <h3>📊 Quy trình Monte Carlo</h3>
            <ol>
                <li>Định nghĩa mô hình</li>
                <li>Xác định phân phối đầu vào</li>
                <li>Chạy nhiều lần mô phỏng (1000+)</li>
                <li>Phân tích phân phối kết quả</li>
            </ol>
        `,
        advanced: `
            <h3>🎓 Ứng dụng</h3>
            <ul>
                <li>Định giá quyền chọn (Options)</li>
                <li>Phân tích rủi ro tài chính</li>
                <li>Dự báo dự án</li>
                <li>Physics simulations</li>
            </ul>
        `
    },
    'decision-under-uncertainty': {
        icon: '🤔',
        title: 'Quyết Định Trong Bất Định',
        category: 'applications',
        level: 'intermediate',
        connections: ['expected-value', 'risk-assessment'],
        simple: `
            <h3>🤔 Quyết định khi không chắc chắn</h3>
            <p>Dùng xác suất để ra quyết định <strong>tốt nhất có thể</strong>.</p>
            <div class="example-box">
                Mang ô không?<br>
                • P(mưa) = 30%<br>
                • Chi phí nếu ướt > Bất tiện mang ô<br>
                → Nên mang ô!
            </div>
        `,
        detail: `
            <h3>📊 Expected Utility</h3>
            <div class="formula-box">
                EU = Σ P(outcome) × Utility(outcome)
            </div>
            <h4>Quy tắc</h4>
            <ul>
                <li>Chọn phương án có EU cao nhất</li>
                <li>Cân nhắc risk aversion cá nhân</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 Decision Trees</h3>
            <p>Vẽ cây quyết định với xác suất và payoff ở mỗi nhánh.</p>
            <ul>
                <li>Square: Decision node</li>
                <li>Circle: Chance node</li>
                <li>Calculate backwards</li>
            </ul>
        `
    }
};
