// Finance Math - Practical financial mathematics
const financeMathData = {
    'budgeting': {
        icon: '👛',
        title: 'Lập Ngân Sách',
        category: 'finance',
        level: 'beginner',
        connections: ['percentages', 'ratios', 'tax-calculation', 'loan-calculation'],
        simple: `
            <h3>👛 Lập ngân sách</h3>
            <p><strong>Ngân sách</strong> là kế hoạch phân bổ tiền vào các mục đích khác nhau.</p>
            <div class="example-box">
                <strong>Quy tắc 50/30/20:</strong><br>
                • 50% cho nhu cầu thiết yếu (nhà, ăn, đi lại)<br>
                • 30% cho mong muốn (giải trí, mua sắm)<br>
                • 20% cho tiết kiệm/đầu tư
            </div>
            <h4>Bước lập ngân sách</h4>
            <ul>
                <li>Ghi lại thu nhập hàng tháng</li>
                <li>Liệt kê chi phí cố định</li>
                <li>Ước tính chi phí biến đổi</li>
                <li>Phân bổ theo quy tắc</li>
            </ul>
        `,
        detail: `
            <h3>📊 Ngân sách chi tiết</h3>
            <h4>Ví dụ ngân sách tháng (lương 15 triệu)</h4>
            <table>
                <tr><th>Hạng mục</th><th>Tỉ lệ</th><th>Số tiền</th></tr>
                <tr><td>Nhà ở</td><td>25%</td><td>3.750.000</td></tr>
                <tr><td>Ăn uống</td><td>15%</td><td>2.250.000</td></tr>
                <tr><td>Đi lại</td><td>10%</td><td>1.500.000</td></tr>
                <tr><td>Giải trí</td><td>10%</td><td>1.500.000</td></tr>
                <tr><td>Mua sắm</td><td>10%</td><td>1.500.000</td></tr>
                <tr><td>Tiết kiệm</td><td>15%</td><td>2.250.000</td></tr>
                <tr><td>Đầu tư</td><td>10%</td><td>1.500.000</td></tr>
                <tr><td>Dự phòng</td><td>5%</td><td>750.000</td></tr>
            </table>
            <div class="tip-box">
                <strong>💡 Mẹo:</strong> Trả cho bản thân trước (Pay Yourself First) - Tiết kiệm ngay khi nhận lương, không đợi cuối tháng.
            </div>
        `,
        advanced: `
            <h3>🎓 Quản lý tài chính nâng cao</h3>
            <h4>Quỹ khẩn cấp</h4>
            <p>Nên có quỹ khẩn cấp = 3-6 tháng chi phí sinh hoạt. Đặt trong tài khoản tiết kiệm dễ rút.</p>
            <h4>Zero-based budgeting</h4>
            <p>Mỗi đồng thu nhập đều được phân bổ: Thu nhập - Chi tiêu = 0. Không có tiền "dư" không rõ mục đích.</p>
            <h4>Envelope method</h4>
            <ul>
                <li>Chia tiền mặt vào các phong bì theo hạng mục</li>
                <li>Hết phong bì = không chi tiêu thêm</li>
                <li>Phiên bản số: Dùng app chia thành nhiều "ví"</li>
            </ul>
        `
    },
    'loan-calculation': {
        icon: '🏦',
        title: 'Tính Lãi Vay',
        category: 'finance',
        level: 'intermediate',
        connections: ['compound-interest', 'budgeting', 'investment-math'],
        simple: `
            <h3>🏦 Tính lãi vay</h3>
            <p>Hiểu cách tính lãi vay giúp bạn tránh nợ xấu và chọn khoản vay tốt nhất.</p>
            <div class="example-box">
                <strong>Vay 100 triệu, lãi 10%/năm, 12 tháng:</strong><br>
                • Lãi tổng: ~100tr × 10% = 10 triệu<br>
                • Trả mỗi tháng: ~9.17 triệu
            </div>
            <h4>Hai cách tính lãi</h4>
            <ul>
                <li><strong>Dư nợ giảm dần:</strong> Lãi tính trên dư nợ còn lại → TỐT HƠN</li>
                <li><strong>Dư nợ ban đầu:</strong> Lãi tính trên toàn bộ gốc → MẮC HƠN</li>
            </ul>
        `,
        detail: `
            <h3>📊 Công thức tính lãi vay</h3>
            <h4>Trả góp đều (Annuity)</h4>
            <div class="formula-box">
                PMT = P × r × (1+r)^n / [(1+r)^n - 1]<br><br>
                PMT = Số tiền trả mỗi kỳ<br>
                P = Gốc vay<br>
                r = Lãi suất mỗi kỳ<br>
                n = Số kỳ trả
            </div>
            <h4>So sánh hai phương pháp (vay 500tr, 8%/năm, 20 năm)</h4>
            <table>
                <tr><th>Phương pháp</th><th>Trả/tháng đầu</th><th>Tổng lãi</th></tr>
                <tr><td>Dư nợ giảm dần</td><td>5.42 triệu</td><td>~401 triệu</td></tr>
                <tr><td>Trả đều (annuity)</td><td>4.18 triệu</td><td>~503 triệu</td></tr>
            </table>
            <div class="warning-box">
                <strong>⚠️ Cẩn thận:</strong> Lãi suất "ưu đãi" năm đầu có thể tăng gấp đôi từ năm thứ 2. Luôn hỏi lãi suất thả nổi sau ưu đãi.
            </div>
        `,
        advanced: `
            <h3>🎓 Phân tích nợ nâng cao</h3>
            <h4>APR vs Lãi suất danh nghĩa</h4>
            <p>APR (Annual Percentage Rate) bao gồm các phí phát sinh, phản ánh chi phí thực sự của khoản vay.</p>
            <h4>Chiến lược trả nợ</h4>
            <ul>
                <li><strong>Avalanche:</strong> Trả nợ lãi suất cao nhất trước → Tiết kiệm lãi nhất</li>
                <li><strong>Snowball:</strong> Trả nợ nhỏ nhất trước → Tạo động lực tâm lý</li>
            </ul>
            <h4>Refinancing</h4>
            <p>Khi lãi suất thị trường giảm, tái cấu trúc nợ (refinance) có thể tiết kiệm hàng trăm triệu cho khoản vay dài hạn.</p>
        `
    },
    'investment-math': {
        icon: '📈',
        title: 'Toán Đầu Tư',
        category: 'finance',
        level: 'intermediate',
        connections: ['compound-interest', 'loan-calculation', 'inflation-math', 'probability-daily'],
        simple: `
            <h3>📈 Toán đầu tư</h3>
            <p>Hiểu toán đầu tư giúp bạn đánh giá cơ hội và rủi ro một cách khách quan.</p>
            <div class="example-box">
                <strong>ROI (Return on Investment):</strong><br>
                Đầu tư 10 triệu, sau 1 năm có 12 triệu<br>
                ROI = (12 - 10) / 10 × 100% = 20%
            </div>
            <h4>Các chỉ số cơ bản</h4>
            <ul>
                <li><strong>ROI:</strong> Lợi nhuận / Vốn đầu tư</li>
                <li><strong>Lãi kép:</strong> Lãi sinh lãi theo thời gian</li>
                <li><strong>Đa dạng hóa:</strong> Không bỏ trứng vào 1 giỏ</li>
            </ul>
        `,
        detail: `
            <h3>📊 Các công cụ đánh giá đầu tư</h3>
            <h4>NPV (Net Present Value)</h4>
            <div class="formula-box">
                NPV = Σ [CFₜ / (1+r)^t] - Vốn ban đầu<br>
                NPV > 0 → Đầu tư có lãi
            </div>
            <h4>Quy tắc 72</h4>
            <table>
                <tr><th>Lãi suất</th><th>Thời gian gấp đôi</th></tr>
                <tr><td>6%</td><td>72/6 = 12 năm</td></tr>
                <tr><td>8%</td><td>72/8 = 9 năm</td></tr>
                <tr><td>10%</td><td>72/10 = 7.2 năm</td></tr>
                <tr><td>12%</td><td>72/12 = 6 năm</td></tr>
            </table>
            <h4>DCA (Dollar Cost Averaging)</h4>
            <p>Đầu tư đều đặn mỗi tháng, bất kể giá lên hay xuống. Giúp giảm rủi ro và tận dụng lãi kép.</p>
        `,
        advanced: `
            <h3>🎓 Đầu tư nâng cao</h3>
            <h4>Sharpe Ratio</h4>
            <div class="formula-box">
                Sharpe = (Rₚ - Rₓ) / σₚ<br>
                Rₚ = lợi nhuận danh mục, Rₓ = lãi suất phi rủi ro, σₚ = độ lệch chuẩn
            </div>
            <p>Sharpe Ratio > 1 là tốt, > 2 là rất tốt. Đo lường lợi nhuận theo đơn vị rủi ro.</p>
            <h4>Modern Portfolio Theory</h4>
            <ul>
                <li>Đa dạng hóa giảm rủi ro phi hệ thống</li>
                <li>Đường biên hiệu quả (Efficient Frontier)</li>
                <li>Tương quan âm giữa các tài sản giúp giảm rủi ro tổng thể</li>
            </ul>
        `
    },
    'tax-calculation': {
        icon: '🧾',
        title: 'Tính Thuế',
        category: 'finance',
        level: 'intermediate',
        connections: ['percentages', 'budgeting', 'loan-calculation'],
        simple: `
            <h3>🧾 Tính thuế</h3>
            <p>Hiểu cách tính thuế giúp bạn biết lương thực nhận và quyền lợi của mình.</p>
            <div class="example-box">
                <strong>Thuế TNCN Việt Nam:</strong> Áp dụng theo bậc lũy tiến.<br>
                Thu nhập 20 triệu/tháng (sau giảm trừ):<br>
                • 5tr đầu: 5% = 250k<br>
                • 5tr tiếp: 10% = 500k<br>
                • 10tr tiếp: 15% = 1.500k<br>
                Tổng thuế: 2.250k
            </div>
        `,
        detail: `
            <h3>📊 Bảng thuế TNCN Việt Nam</h3>
            <table>
                <tr><th>Bậc</th><th>Thu nhập chịu thuế/tháng</th><th>Thuế suất</th></tr>
                <tr><td>1</td><td>Đến 5 triệu</td><td>5%</td></tr>
                <tr><td>2</td><td>5 - 10 triệu</td><td>10%</td></tr>
                <tr><td>3</td><td>10 - 18 triệu</td><td>15%</td></tr>
                <tr><td>4</td><td>18 - 32 triệu</td><td>20%</td></tr>
                <tr><td>5</td><td>32 - 52 triệu</td><td>25%</td></tr>
                <tr><td>6</td><td>52 - 80 triệu</td><td>30%</td></tr>
                <tr><td>7</td><td>Trên 80 triệu</td><td>35%</td></tr>
            </table>
            <h4>Giảm trừ gia cảnh</h4>
            <ul>
                <li>Bản thân: 11 triệu/tháng</li>
                <li>Mỗi người phụ thuộc: 4.4 triệu/tháng</li>
            </ul>
            <div class="tip-box">
                <strong>💡 Lưu ý:</strong> Thuế lũy tiến nghĩa là KHÔNG PHẢI toàn bộ thu nhập đều chịu cùng mức thuế. Chỉ phần vượt mỗi bậc mới chịu thuế suất cao hơn.
            </div>
        `,
        advanced: `
            <h3>🎓 Tối ưu thuế</h3>
            <h4>Các khoản được giảm trừ</h4>
            <ul>
                <li>Bảo hiểm xã hội, y tế, thất nghiệp</li>
                <li>Đóng góp từ thiện, nhân đạo</li>
                <li>Bảo hiểm nhân thọ (có giới hạn)</li>
            </ul>
            <h4>Thuế suất hiệu dụng (Effective Tax Rate)</h4>
            <div class="formula-box">
                ETR = Tổng thuế phải nộp / Tổng thu nhập × 100%
            </div>
            <p>ETR luôn thấp hơn thuế suất biên (marginal rate). Thu nhập 30tr/tháng (sau giảm trừ) có ETR chỉ ~12%, không phải 20%.</p>
        `
    },
    'inflation-math': {
        icon: '🔥',
        title: 'Lạm Phát & Giá Trị Tiền',
        category: 'finance',
        level: 'advanced',
        connections: ['compound-interest', 'investment-math', 'exponential-growth'],
        simple: `
            <h3>🔥 Lạm phát & Giá trị tiền</h3>
            <p><strong>Lạm phát</strong> là sự tăng giá chung theo thời gian, làm đồng tiền mất giá trị.</p>
            <div class="example-box">
                <strong>Ví dụ:</strong> Tô phở năm 2000: 5.000đ → Năm 2024: 50.000đ<br>
                Tăng 10 lần trong 24 năm ≈ lạm phát ~10%/năm
            </div>
            <h4>Tác động</h4>
            <ul>
                <li>Tiền gửi ngân hàng có thể mất giá trị thực</li>
                <li>Lương tăng nhưng sức mua không tăng</li>
                <li>Nợ dài hạn "rẻ" hơn theo thời gian</li>
            </ul>
        `,
        detail: `
            <h3>📊 Tính toán lạm phát</h3>
            <h4>Giá trị thực vs Giá trị danh nghĩa</h4>
            <div class="formula-box">
                Giá trị thực = Giá trị danh nghĩa / (1 + lạm phát)^n
            </div>
            <div class="example-box">
                <strong>100 triệu sau 10 năm (lạm phát 4%):</strong><br>
                Giá trị thực = 100 / (1.04)^10 = 67.6 triệu<br>
                → Mất 32.4% sức mua!
            </div>
            <h4>Lãi suất thực</h4>
            <div class="formula-box">
                Lãi suất thực ≈ Lãi suất danh nghĩa - Tỉ lệ lạm phát
            </div>
            <table>
                <tr><th>Lãi suất gửi tiết kiệm</th><th>Lạm phát</th><th>Lãi suất thực</th></tr>
                <tr><td>6%</td><td>4%</td><td>~2%</td></tr>
                <tr><td>6%</td><td>7%</td><td>~-1% (mất tiền!)</td></tr>
            </table>
        `,
        advanced: `
            <h3>🎓 Phân tích lạm phát nâng cao</h3>
            <h4>Các loại lạm phát</h4>
            <ul>
                <li><strong>Demand-pull:</strong> Cầu tăng nhanh hơn cung</li>
                <li><strong>Cost-push:</strong> Chi phí sản xuất tăng</li>
                <li><strong>Monetary:</strong> In quá nhiều tiền</li>
            </ul>
            <h4>Chiến lược chống lạm phát</h4>
            <ul>
                <li><strong>Bất động sản:</strong> Giá trị thường tăng theo lạm phát</li>
                <li><strong>Cổ phiếu:</strong> Doanh nghiệp điều chỉnh giá bán</li>
                <li><strong>Vàng:</strong> Lưu giữ giá trị truyền thống</li>
                <li><strong>TIPS/Trái phiếu liên kết lạm phát:</strong> Bảo vệ vốn gốc</li>
            </ul>
            <div class="warning-box">
                <strong>⚠️ Siêu lạm phát:</strong> Khi lạm phát > 50%/tháng. Zimbabwe (2008): 79.6 tỉ %/tháng - giá nhân đôi mỗi 24 giờ!
            </div>
        `
    }
};
