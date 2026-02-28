// Algebra - Practical algebra applications
const algebraData = {
    'equations-daily': {
        icon: '🔢',
        title: 'Phương Trình Hàng Ngày',
        category: 'algebra',
        level: 'beginner',
        connections: ['mental-math', 'compound-interest', 'budgeting'],
        simple: `
            <h3>🔢 Phương trình hàng ngày</h3>
            <p><strong>Phương trình</strong> giúp bạn tìm ra đáp án khi biết một số thông tin. Bạn dùng nó hàng ngày mà không biết!</p>
            <div class="example-box">
                <strong>Ví dụ:</strong> Bạn có 500k, mua áo 200k, còn lại bao nhiêu?<br>
                500 - 200 = x → x = 300k
            </div>
            <h4>Phương trình trong cuộc sống</h4>
            <ul>
                <li>Tính tiền thối khi mua hàng</li>
                <li>Chia bill nhà hàng cho nhóm bạn</li>
                <li>Tính xem còn đủ tiền không cuối tháng</li>
            </ul>
        `,
        detail: `
            <h3>📊 Phương trình ứng dụng</h3>
            <h4>Bài toán chia đều</h4>
            <div class="example-box">
                <strong>Chia bill:</strong> Tổng hóa đơn 1.200k cho 4 người, 1 người không uống rượu (300k).<br>
                • Phần rượu: 300k ÷ 3 = 100k/người<br>
                • Phần ăn: (1.200k - 300k) ÷ 4 = 225k/người<br>
                • Người uống: 225k + 100k = 325k<br>
                • Người không uống: 225k
            </div>
            <h4>Bài toán tốc độ - thời gian</h4>
            <div class="formula-box">
                Quãng đường = Vận tốc × Thời gian<br>
                S = V × T
            </div>
            <div class="example-box">
                Đi làm 15km, tốc độ 30km/h → Mất 15/30 = 0.5 giờ = 30 phút
            </div>
        `,
        advanced: `
            <h3>🎓 Hệ phương trình thực tế</h3>
            <h4>Bài toán tối ưu mua hàng</h4>
            <div class="example-box">
                <strong>Combo ăn trưa:</strong><br>
                • Cơm gà: 45k, Cơm sườn: 50k<br>
                • Mua 10 suất, tổng 475k<br>
                • x + y = 10 và 45x + 50y = 475<br>
                • Giải: x = 5 suất gà, y = 5 suất sườn
            </div>
            <h4>Ứng dụng trong kinh doanh</h4>
            <ul>
                <li><strong>Break-even:</strong> Doanh thu = Chi phí cố định + Chi phí biến đổi</li>
                <li><strong>Lợi nhuận:</strong> P = (Giá bán - Giá vốn) × Số lượng - Chi phí cố định</li>
                <li><strong>Điểm hòa vốn:</strong> Q = Chi phí cố định / (Giá bán - Chi phí biến đổi)</li>
            </ul>
        `
    },
    'compound-interest': {
        icon: '💵',
        title: 'Lãi Kép',
        category: 'algebra',
        level: 'intermediate',
        connections: ['percentages', 'exponential-growth', 'investment-math', 'loan-calculation'],
        simple: `
            <h3>💵 Lãi kép - Kỳ quan thứ 8</h3>
            <p><strong>Lãi kép</strong> là khi tiền lãi được cộng vào gốc và sinh ra lãi tiếp.</p>
            <div class="example-box">
                <strong>Gửi 10 triệu, lãi 10%/năm:</strong><br>
                • Năm 1: 10tr → 11tr (lãi 1tr)<br>
                • Năm 2: 11tr → 12.1tr (lãi 1.1tr)<br>
                • Năm 3: 12.1tr → 13.31tr (lãi 1.21tr)
            </div>
            <p>Lãi mỗi năm tăng dần vì lãi cũ cũng sinh lãi!</p>
        `,
        detail: `
            <h3>📊 Công thức lãi kép</h3>
            <div class="formula-box">
                A = P × (1 + r/n)^(n×t)<br><br>
                A = Số tiền cuối cùng<br>
                P = Số tiền gốc<br>
                r = Lãi suất/năm<br>
                n = Số lần ghép lãi/năm<br>
                t = Số năm
            </div>
            <h4>So sánh lãi đơn vs lãi kép</h4>
            <table>
                <tr><th>Năm</th><th>Lãi đơn (10tr, 10%)</th><th>Lãi kép (10tr, 10%)</th></tr>
                <tr><td>5</td><td>15 triệu</td><td>16.1 triệu</td></tr>
                <tr><td>10</td><td>20 triệu</td><td>25.9 triệu</td></tr>
                <tr><td>20</td><td>30 triệu</td><td>67.3 triệu</td></tr>
                <tr><td>30</td><td>40 triệu</td><td>174.5 triệu</td></tr>
            </table>
            <div class="tip-box">
                <strong>💡 Quy tắc 72:</strong> Số năm để tiền gấp đôi ≈ 72 / lãi suất%. Lãi 8% → 72/8 = 9 năm.
            </div>
        `,
        advanced: `
            <h3>🎓 Lãi kép nâng cao</h3>
            <h4>Lãi kép liên tục</h4>
            <div class="formula-box">
                A = P × e^(r×t)
            </div>
            <h4>Ảnh hưởng của tần suất ghép lãi</h4>
            <table>
                <tr><th>Ghép lãi</th><th>10tr sau 10 năm (8%)</th></tr>
                <tr><td>Hàng năm</td><td>21.589.250</td></tr>
                <tr><td>Hàng quý</td><td>21.911.231</td></tr>
                <tr><td>Hàng tháng</td><td>22.196.402</td></tr>
                <tr><td>Liên tục</td><td>22.255.409</td></tr>
            </table>
            <div class="warning-box">
                <strong>⚠️ Mặt trái:</strong> Lãi kép cũng áp dụng cho NỢ. Nợ thẻ tín dụng lãi 2%/tháng = 26.8%/năm (lãi kép)!
            </div>
        `
    },
    'exponential-growth': {
        icon: '📈',
        title: 'Tăng Trưởng Lũy Thừa',
        category: 'algebra',
        level: 'intermediate',
        connections: ['compound-interest', 'sequences', 'inflation-math'],
        simple: `
            <h3>📈 Tăng trưởng lũy thừa</h3>
            <p><strong>Tăng trưởng lũy thừa</strong> là khi một đại lượng tăng theo tỉ lệ phần trăm cố định.</p>
            <div class="example-box">
                <strong>Gấp giấy:</strong> Một tờ giấy dày 0.1mm, gấp đôi 42 lần sẽ đạt... khoảng cách từ Trái Đất đến Mặt Trăng!
            </div>
            <h4>Đặc điểm</h4>
            <ul>
                <li>Ban đầu tăng chậm, sau đó tăng rất nhanh</li>
                <li>Con người rất khó hình dung tốc độ này</li>
                <li>2, 4, 8, 16, 32, 64, 128, 256, 512, 1024...</li>
            </ul>
        `,
        detail: `
            <h3>📊 Mô hình tăng trưởng lũy thừa</h3>
            <div class="formula-box">
                y = a × b^x<br>
                a = giá trị ban đầu, b = hệ số tăng trưởng
            </div>
            <h4>Ví dụ thực tế</h4>
            <table>
                <tr><th>Hiện tượng</th><th>Tốc độ</th><th>Thời gian gấp đôi</th></tr>
                <tr><td>Dân số thế giới</td><td>~1.1%/năm</td><td>~65 năm</td></tr>
                <tr><td>Định luật Moore</td><td>~100%/18 tháng</td><td>18 tháng</td></tr>
                <tr><td>Lạm phát 5%</td><td>5%/năm</td><td>~14 năm</td></tr>
            </table>
            <div class="warning-box">
                <strong>⚠️ Bẫy lũy thừa:</strong> Lan truyền virus, nợ xấu, và tin giả đều tăng theo lũy thừa. Phản ứng chậm có thể gây hậu quả khủng khiếp.
            </div>
        `,
        advanced: `
            <h3>🎓 Ứng dụng nâng cao</h3>
            <h4>Tăng trưởng vs Phân rã</h4>
            <ul>
                <li><strong>Tăng trưởng:</strong> y = a × e^(kt), k > 0</li>
                <li><strong>Phân rã:</strong> y = a × e^(-kt), k > 0</li>
            </ul>
            <h4>Giới hạn tăng trưởng (Logistic)</h4>
            <div class="formula-box">
                y = K / (1 + e^(-r(t-t₀)))<br>
                K = giới hạn tối đa (carrying capacity)
            </div>
            <p>Trong thực tế, không có gì tăng mãi. Thị trường, dân số đều có giới hạn và chuyển sang mô hình logistic (hình chữ S).</p>
        `
    },
    'linear-programming': {
        icon: '📉',
        title: 'Quy Hoạch Tuyến Tính',
        category: 'algebra',
        level: 'advanced',
        connections: ['equations-daily', 'cost-benefit', 'algorithm-thinking'],
        simple: `
            <h3>📉 Quy hoạch tuyến tính</h3>
            <p><strong>Quy hoạch tuyến tính</strong> giúp tìm phương án tốt nhất khi có nhiều ràng buộc.</p>
            <div class="example-box">
                <strong>Ví dụ:</strong> Một tiệm bánh có 100kg bột và 50kg đường.<br>
                Bánh A cần 2kg bột + 1kg đường, lãi 50k<br>
                Bánh B cần 1kg bột + 1kg đường, lãi 40k<br>
                → Làm bao nhiêu bánh A, B để lãi nhiều nhất?
            </div>
        `,
        detail: `
            <h3>📊 Phương pháp giải</h3>
            <h4>Bước giải quy hoạch tuyến tính</h4>
            <ol>
                <li>Xác định biến quyết định (x, y)</li>
                <li>Viết hàm mục tiêu (maximize/minimize)</li>
                <li>Viết các ràng buộc (bất phương trình)</li>
                <li>Vẽ miền nghiệm</li>
                <li>Tìm nghiệm tối ưu tại đỉnh</li>
            </ol>
            <div class="formula-box">
                Max Z = 50x + 40y<br>
                2x + y ≤ 100 (bột)<br>
                x + y ≤ 50 (đường)<br>
                x, y ≥ 0
            </div>
            <div class="tip-box">
                <strong>💡 Mẹo:</strong> Nghiệm tối ưu luôn nằm tại một đỉnh của miền nghiệm khả thi.
            </div>
        `,
        advanced: `
            <h3>🎓 Ứng dụng thực tế</h3>
            <h4>Trong doanh nghiệp</h4>
            <ul>
                <li><strong>Sản xuất:</strong> Phân bổ nguyên liệu tối ưu</li>
                <li><strong>Vận tải:</strong> Tìm tuyến đường ngắn nhất</li>
                <li><strong>Nhân sự:</strong> Xếp lịch làm việc hiệu quả</li>
                <li><strong>Đầu tư:</strong> Phân bổ danh mục đầu tư</li>
            </ul>
            <h4>Phương pháp Simplex</h4>
            <p>Thuật toán giải quy hoạch tuyến tính cho bài toán nhiều biến, được George Dantzig phát triển năm 1947. Đây là nền tảng của ngành vận trù học hiện đại.</p>
        `
    },
    'sequences': {
        icon: '🔢',
        title: 'Dãy Số & Quy Luật',
        category: 'algebra',
        level: 'intermediate',
        connections: ['compound-interest', 'exponential-growth', 'golden-ratio'],
        simple: `
            <h3>🔢 Dãy số & Quy luật</h3>
            <p><strong>Dãy số</strong> là tập hợp các số theo một quy luật nhất định.</p>
            <div class="example-box">
                <strong>Dãy cộng:</strong> 2, 5, 8, 11, 14... (cộng 3)<br>
                <strong>Dãy nhân:</strong> 3, 6, 12, 24, 48... (nhân 2)<br>
                <strong>Fibonacci:</strong> 1, 1, 2, 3, 5, 8, 13... (cộng 2 số trước)
            </div>
        `,
        detail: `
            <h3>📊 Hai loại dãy số chính</h3>
            <h4>Cấp số cộng (Arithmetic)</h4>
            <div class="formula-box">
                aₙ = a₁ + (n-1) × d<br>
                Tổng n số = n × (a₁ + aₙ) / 2
            </div>
            <div class="example-box">
                <strong>Tiết kiệm tăng dần:</strong> Tháng 1 tiết kiệm 1tr, mỗi tháng tăng 500k.<br>
                Tháng 12: 1tr + 11 × 0.5tr = 6.5tr<br>
                Tổng năm: 12 × (1 + 6.5) / 2 = 45 triệu
            </div>
            <h4>Cấp số nhân (Geometric)</h4>
            <div class="formula-box">
                aₙ = a₁ × r^(n-1)<br>
                Tổng n số = a₁ × (r^n - 1) / (r - 1)
            </div>
        `,
        advanced: `
            <h3>🎓 Dãy số trong thực tế</h3>
            <h4>Dãy Fibonacci trong tự nhiên</h4>
            <ul>
                <li>Số cánh hoa: 3, 5, 8, 13, 21...</li>
                <li>Xoắn ốc vỏ sò, hướng dương</li>
                <li>Phân nhánh cây, tĩnh mạch lá</li>
            </ul>
            <h4>Ứng dụng dãy số</h4>
            <ul>
                <li><strong>Lãi kép:</strong> Cấp số nhân với r = 1 + lãi suất</li>
                <li><strong>Khấu hao:</strong> Giá trị giảm theo cấp số nhân</li>
                <li><strong>Dân số:</strong> Tăng theo cấp số nhân (ngắn hạn)</li>
                <li><strong>Trả nợ:</strong> Dư nợ giảm theo dãy đặc biệt</li>
            </ul>
        `
    }
};
