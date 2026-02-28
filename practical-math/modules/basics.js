// Math Basics - Core practical math concepts
const mathBasicsData = {
    'mental-math': {
        icon: '🧠',
        title: 'Tính Nhẩm Nhanh',
        category: 'basics',
        level: 'beginner',
        connections: ['estimation', 'percentages', 'equations-daily'],
        simple: `
            <h3>🧠 Tính nhẩm nhanh</h3>
            <p><strong>Tính nhẩm</strong> là kỹ năng tính toán trong đầu mà không cần máy tính hay giấy bút.</p>
            <div class="example-box">
                <strong>Ví dụ:</strong> Nhân nhanh với 11: 23 × 11 = 253 (2_3, chèn 2+3=5 vào giữa)
            </div>
            <h4>Mẹo tính nhẩm cơ bản</h4>
            <ul>
                <li><strong>Nhân 9:</strong> 7 × 9 = 7 × 10 - 7 = 63</li>
                <li><strong>Nhân 5:</strong> 48 × 5 = 48 ÷ 2 × 10 = 240</li>
                <li><strong>Cộng nhanh:</strong> 97 + 56 = 100 + 56 - 3 = 153</li>
            </ul>
        `,
        detail: `
            <h3>📊 Kỹ thuật tính nhẩm chi tiết</h3>
            <h4>Phương pháp bù số</h4>
            <p>Làm tròn số rồi bù lại phần dư:</p>
            <div class="formula-box">
                98 × 7 = 100 × 7 - 2 × 7 = 700 - 14 = 686
            </div>
            <h4>Phương pháp tách số</h4>
            <table>
                <tr><th>Phép tính</th><th>Cách tách</th><th>Kết quả</th></tr>
                <tr><td>23 × 4</td><td>(20 + 3) × 4</td><td>80 + 12 = 92</td></tr>
                <tr><td>15 × 16</td><td>15 × (10 + 6)</td><td>150 + 90 = 240</td></tr>
                <tr><td>25 × 32</td><td>25 × 4 × 8</td><td>100 × 8 = 800</td></tr>
            </table>
            <h4>Nhân hai số gần nhau</h4>
            <div class="formula-box">
                a × b = ((a+b)/2)² - ((a-b)/2)²
            </div>
            <div class="example-box">
                <strong>Ví dụ:</strong> 48 × 52 = 50² - 2² = 2500 - 4 = 2496
            </div>
        `,
        advanced: `
            <h3>🎓 Tính nhẩm nâng cao</h3>
            <h4>Phương pháp Vedic Math</h4>
            <p>Hệ thống tính nhẩm cổ đại từ Ấn Độ với 16 phương pháp cơ bản.</p>
            <h4>Nhân số gần 100</h4>
            <div class="example-box">
                <strong>97 × 96:</strong><br>
                • 97 thiếu 3, 96 thiếu 4<br>
                • Phần đầu: 97 - 4 = 93 (hoặc 96 - 3 = 93)<br>
                • Phần cuối: 3 × 4 = 12<br>
                • Kết quả: 9312
            </div>
            <h4>Ứng dụng trong đời sống</h4>
            <ul>
                <li><strong>Mua sắm:</strong> Tính nhanh tổng tiền, tiền thối</li>
                <li><strong>Tip nhà hàng:</strong> 10% rồi nhân đôi cho 20%</li>
                <li><strong>Chia bill:</strong> Làm tròn rồi chia đều</li>
                <li><strong>So sánh giá:</strong> Quy về đơn giá/kg hoặc /lít</li>
            </ul>
        `
    },
    'estimation': {
        icon: '🎯',
        title: 'Ước Lượng',
        category: 'basics',
        level: 'beginner',
        connections: ['mental-math', 'percentages', 'averages'],
        simple: `
            <h3>🎯 Ước lượng là gì?</h3>
            <p><strong>Ước lượng</strong> là kỹ năng đoán gần đúng một con số mà không cần tính chính xác.</p>
            <div class="example-box">
                <strong>Ví dụ:</strong> Siêu thị mua 3 món giá 48k, 73k, 29k → Ước lượng: 50 + 70 + 30 = 150k
            </div>
            <h4>Khi nào cần ước lượng?</h4>
            <ul>
                <li>Kiểm tra hóa đơn có đúng không</li>
                <li>Lên kế hoạch chi tiêu nhanh</li>
                <li>Đánh giá khoảng cách, thời gian</li>
            </ul>
        `,
        detail: `
            <h3>📊 Kỹ thuật ước lượng</h3>
            <h4>Ước lượng Fermi</h4>
            <p>Phương pháp ước lượng bậc độ lớn (order of magnitude) cho các câu hỏi tưởng như không thể trả lời.</p>
            <div class="example-box">
                <strong>Có bao nhiêu thợ cắt tóc ở Hà Nội?</strong><br>
                • Dân số Hà Nội: ~8 triệu<br>
                • Tỉ lệ cắt tóc: 1 lần/tháng<br>
                • Mỗi thợ cắt: 10 người/ngày × 25 ngày = 250 người/tháng<br>
                • Số thợ: 8.000.000 / 250 ≈ 32.000 thợ
            </div>
            <h4>Quy tắc làm tròn</h4>
            <table>
                <tr><th>Số gốc</th><th>Làm tròn</th><th>Sai số</th></tr>
                <tr><td>487</td><td>500</td><td>~3%</td></tr>
                <tr><td>2.340</td><td>2.300</td><td>~2%</td></tr>
                <tr><td>9.876</td><td>10.000</td><td>~1%</td></tr>
            </table>
        `,
        advanced: `
            <h3>🎓 Ước lượng nâng cao</h3>
            <h4>Phương pháp Back-of-Envelope</h4>
            <p>Dùng trong kinh doanh và khoa học để ước lượng nhanh quy mô thị trường, chi phí dự án.</p>
            <h4>Kỹ thuật anchoring</h4>
            <ul>
                <li>Bắt đầu từ một con số đã biết (anchor)</li>
                <li>Điều chỉnh lên/xuống dựa trên thông tin mới</li>
                <li>Kiểm tra kết quả bằng cách tiếp cận khác</li>
            </ul>
            <div class="warning-box">
                <strong>⚠️ Cẩn thận:</strong> Ước lượng sai 10x (bậc độ lớn) có thể dẫn đến quyết định sai lầm nghiêm trọng trong kinh doanh.
            </div>
        `
    },
    'percentages': {
        icon: '%',
        title: 'Phần Trăm Trong Đời Sống',
        category: 'basics',
        level: 'beginner',
        connections: ['mental-math', 'ratios', 'budgeting', 'compound-interest'],
        simple: `
            <h3>% Phần trăm trong đời sống</h3>
            <p><strong>Phần trăm</strong> là cách biểu diễn một phần của 100. Nó xuất hiện khắp nơi trong cuộc sống.</p>
            <div class="example-box">
                <strong>Giảm giá 30%:</strong> Áo giá 500k, giảm 30% → Tiết kiệm 150k, trả 350k
            </div>
            <h4>Phần trăm phổ biến</h4>
            <ul>
                <li><strong>10%</strong> = chia cho 10 (dễ tính nhẩm)</li>
                <li><strong>25%</strong> = chia cho 4</li>
                <li><strong>50%</strong> = chia đôi</li>
                <li><strong>1%</strong> = chia cho 100</li>
            </ul>
        `,
        detail: `
            <h3>📊 Phần trăm chi tiết</h3>
            <h4>Tính phần trăm nhanh</h4>
            <div class="formula-box">
                x% của A = A × x / 100
            </div>
            <h4>Các bài toán phần trăm thường gặp</h4>
            <table>
                <tr><th>Tình huống</th><th>Công thức</th><th>Ví dụ</th></tr>
                <tr><td>Tăng x%</td><td>Giá × (1 + x/100)</td><td>100k tăng 20% = 120k</td></tr>
                <tr><td>Giảm x%</td><td>Giá × (1 - x/100)</td><td>100k giảm 20% = 80k</td></tr>
                <tr><td>Tỉ lệ phần trăm</td><td>(Phần / Tổng) × 100</td><td>30/150 = 20%</td></tr>
            </table>
            <div class="warning-box">
                <strong>⚠️ Bẫy phần trăm:</strong> Tăng 50% rồi giảm 50% KHÔNG trở về ban đầu! 100 → 150 → 75
            </div>
        `,
        advanced: `
            <h3>🎓 Phần trăm nâng cao</h3>
            <h4>Phần trăm chồng phần trăm</h4>
            <p>Khi áp dụng nhiều phần trăm liên tiếp, phải nhân chứ không cộng:</p>
            <div class="formula-box">
                Giảm 20% rồi giảm thêm 30% ≠ Giảm 50%<br>
                = (1 - 0.2) × (1 - 0.3) = 0.8 × 0.7 = 0.56 → Giảm 44%
            </div>
            <h4>Ứng dụng thực tế</h4>
            <ul>
                <li><strong>Thuế VAT:</strong> Giá gốc × 1.1 (VAT 10%)</li>
                <li><strong>Lương thực nhận:</strong> Lương gross × (1 - thuế% - BHXH%)</li>
                <li><strong>Lãi suất thực:</strong> Lãi suất danh nghĩa - Tỷ lệ lạm phát</li>
            </ul>
        `
    },
    'ratios': {
        icon: '⚖️',
        title: 'Tỉ Lệ & Tỉ Số',
        category: 'basics',
        level: 'intermediate',
        connections: ['percentages', 'golden-ratio', 'budgeting'],
        simple: `
            <h3>⚖️ Tỉ lệ & Tỉ số</h3>
            <p><strong>Tỉ lệ</strong> cho biết mối quan hệ về số lượng giữa hai hay nhiều đại lượng.</p>
            <div class="example-box">
                <strong>Pha cà phê:</strong> Tỉ lệ cà phê:nước = 1:15 (1g cà phê cho 15ml nước)
            </div>
            <h4>Tỉ lệ trong đời sống</h4>
            <ul>
                <li><strong>Nấu ăn:</strong> 1 phần gạo : 1.5 phần nước</li>
                <li><strong>Bản đồ:</strong> 1:100.000 (1cm = 1km)</li>
                <li><strong>Pha sơn:</strong> 3 phần sơn : 1 phần nước</li>
            </ul>
        `,
        detail: `
            <h3>📊 Tỉ lệ chi tiết</h3>
            <h4>Quy tắc tam suất</h4>
            <div class="formula-box">
                Nếu A → B thì C → C × B / A
            </div>
            <div class="example-box">
                <strong>Ví dụ:</strong> 5 công nhân xây 1 bức tường trong 8 ngày.<br>
                3 công nhân xây mất: 8 × 5 / 3 ≈ 13.3 ngày
            </div>
            <h4>Tỉ lệ nghịch vs Tỉ lệ thuận</h4>
            <table>
                <tr><th>Loại</th><th>Đặc điểm</th><th>Ví dụ</th></tr>
                <tr><td>Tỉ lệ thuận</td><td>Cùng tăng cùng giảm</td><td>Nhiều hàng → nhiều tiền</td></tr>
                <tr><td>Tỉ lệ nghịch</td><td>Tăng ↔ Giảm</td><td>Nhiều người → ít thời gian</td></tr>
            </table>
        `,
        advanced: `
            <h3>🎓 Tỉ lệ nâng cao</h3>
            <h4>Tỉ lệ trong tài chính</h4>
            <ul>
                <li><strong>P/E Ratio:</strong> Giá cổ phiếu / Lợi nhuận mỗi cổ phiếu</li>
                <li><strong>Debt-to-Equity:</strong> Nợ / Vốn chủ sở hữu</li>
                <li><strong>ROI:</strong> (Lợi nhuận - Chi phí) / Chi phí × 100%</li>
            </ul>
            <h4>Tỉ lệ trong khoa học</h4>
            <ul>
                <li><strong>BMI:</strong> Cân nặng(kg) / Chiều cao(m)²</li>
                <li><strong>Nồng độ:</strong> Chất tan / Dung dịch</li>
                <li><strong>Mật độ dân số:</strong> Số dân / Diện tích</li>
            </ul>
        `
    }
};
