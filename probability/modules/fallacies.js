// Probability Fallacies - Common mistakes
const probabilityFallaciesData = {
    'gamblers-fallacy': {
        icon: '🎰',
        title: "Ngụy Biện Con Bạc",
        category: 'fallacies',
        level: 'beginner',
        connections: ['independence', 'hot-hand'],
        simple: `
            <h3>🎰 Ngụy biện con bạc</h3>
            <p>Tin rằng kết quả trước đó <strong>ảnh hưởng</strong> đến kết quả tiếp theo (trong sự kiện độc lập).</p>
            <div class="example-box">
                ❌ "Ra đỏ 10 lần rồi, lần sau chắc chắn ra đen!"<br>
                ✅ Mỗi lần quay đều độc lập, P(đỏ) = P(đen) = 50%
            </div>
        `,
        detail: `
            <h3>📊 Tại sao sai?</h3>
            <ul>
                <li>Mỗi sự kiện là <strong>độc lập</strong></li>
                <li>Đồng xu không có "trí nhớ"</li>
                <li>Xác suất không "cân bằng" theo thời gian ngắn</li>
            </ul>
            <h4>Ví dụ khác</h4>
            <ul>
                <li>Sau 5 con trai, chắc lần này là con gái</li>
                <li>Số xổ số này lâu không ra, chắc sắp ra</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 Luật số lớn</h3>
            <p>Chỉ khi n → ∞, tỷ lệ mới tiến về xác suất lý thuyết.</p>
            <div class="warning-box">
                ⚠️ Luật số lớn KHÔNG có nghĩa kết quả tương lai sẽ "bù" cho quá khứ.
            </div>
        `
    },
    'base-rate-neglect': {
        icon: '📊',
        title: 'Bỏ Qua Tỷ Lệ Nền',
        category: 'fallacies',
        level: 'intermediate',
        connections: ['bayes-theorem', 'conditional'],
        simple: `
            <h3>📊 Base Rate Neglect</h3>
            <p>Bỏ qua tỷ lệ cơ sở khi đánh giá xác suất.</p>
            <div class="example-box">
                Xét nghiệm độ chính xác 99%.<br>
                Nhưng nếu bệnh chỉ có 1/10000 người...<br>
                Dương tính giả có thể nhiều hơn dương thật!
            </div>
        `,
        detail: `
            <h3>📊 Ví dụ chi tiết</h3>
            <p>Bệnh X: 1/10,000 người có bệnh</p>
            <p>Xét nghiệm: 99% chính xác</p>
            <h4>Trong 10,000 người:</h4>
            <ul>
                <li>1 người có bệnh → dương tính</li>
                <li>9,999 không bệnh → 100 dương tính giả (1%)</li>
                <li>→ P(bệnh | dương tính) = 1/101 ≈ 1%</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 Giải pháp: Dùng Bayes</h3>
            <p>Luôn cân nhắc:</p>
            <ul>
                <li>Prior probability (tỷ lệ nền)</li>
                <li>Sensitivity (độ nhạy)</li>
                <li>Specificity (độ đặc hiệu)</li>
            </ul>
        `
    },
    'conjunction-fallacy': {
        icon: '🔗',
        title: 'Ngụy Biện Kết Hợp',
        category: 'fallacies',
        level: 'intermediate',
        connections: ['probability-rules'],
        simple: `
            <h3>🔗 Conjunction Fallacy</h3>
            <p>Tin rằng hai sự kiện xảy ra đồng thời <strong>có xác suất cao hơn</strong> một sự kiện đơn lẻ.</p>
            <div class="example-box">
                Linda là người hoạt động xã hội tích cực.<br>
                ❌ "Linda là nhân viên ngân hàng VÀ feminist" có vẻ đúng hơn<br>
                ✅ Thực tế: P(A và B) ≤ P(A) luôn đúng
            </div>
        `,
        detail: `
            <h3>📊 Tại sao ta mắc lỗi?</h3>
            <ul>
                <li>Representativeness heuristic</li>
                <li>Chi tiết thêm làm "có vẻ đúng hơn"</li>
                <li>Bỏ qua logic xác suất</li>
            </ul>
            <div class="formula-box">
                P(A ∩ B) ≤ P(A) và P(A ∩ B) ≤ P(B)
            </div>
        `,
        advanced: `
            <h3>🎓 Phòng tránh</h3>
            <ul>
                <li>Nhớ quy tắc nhân xác suất</li>
                <li>Thêm điều kiện = giảm xác suất</li>
                <li>Cảnh giác với câu chuyện "hợp lý"</li>
            </ul>
        `
    },
    'hot-hand': {
        icon: '🔥',
        title: 'Hot Hand Fallacy',
        category: 'fallacies',
        level: 'intermediate',
        connections: ['gamblers-fallacy', 'independence'],
        simple: `
            <h3>🔥 Hot Hand Fallacy</h3>
            <p>Tin rằng chuỗi thành công sẽ <strong>tiếp tục</strong> (ngược với Gambler's Fallacy).</p>
            <div class="example-box">
                "Cầu thủ đang trên đà, sẽ tiếp tục ghi bàn!"<br>
                Thực tế: Mỗi cú sút có thể độc lập thống kê.
            </div>
        `,
        detail: `
            <h3>📊 Nghiên cứu</h3>
            <ul>
                <li>Nghiên cứu bóng rổ: Không có "bàn tay nóng"</li>
                <li>Nhưng: Một số sport có thể có hiệu ứng thật</li>
                <li>Quan trọng: Phân biệt <em>kỹ năng</em> vs <em>may mắn</em></li>
            </ul>
        `,
        advanced: `
            <h3>🎓 Khi nào "hot hand" có thật?</h3>
            <ul>
                <li>Khi có yếu tố tâm lý (tự tin)</li>
                <li>Khi có momentum thực sự</li>
                <li>Cần dữ liệu để kiểm chứng</li>
            </ul>
        `
    },
    'survivorship-bias': {
        icon: '✈️',
        title: 'Survivorship Bias',
        category: 'fallacies',
        level: 'advanced',
        connections: ['base-rate-neglect'],
        simple: `
            <h3>✈️ Survivorship Bias</h3>
            <p>Chỉ nhìn vào những "người sống sót" và bỏ qua những người thất bại.</p>
            <div class="example-box">
                "Bill Gates bỏ học và thành công!"<br>
                ❌ Bỏ qua hàng triệu người bỏ học và thất bại.
            </div>
        `,
        detail: `
            <h3>📊 Ví dụ kinh điển</h3>
            <h4>Máy bay WWII</h4>
            <ul>
                <li>Đề xuất: Gia cố chỗ bị bắn nhiều nhất</li>
                <li>Thực tế: Nên gia cố chỗ KHÔNG bị bắn</li>
                <li>Vì: Máy bay bị bắn chỗ đó đã... rơi!</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 Phòng tránh</h3>
            <ul>
                <li>Tìm dữ liệu về người "không sống sót"</li>
                <li>Hỏi: "Những ai đã thất bại?"</li>
                <li>Cẩn thận với "success stories"</li>
            </ul>
        `
    },
    'regression-mean': {
        icon: '📉',
        title: 'Regression to the Mean',
        category: 'fallacies',
        level: 'advanced',
        connections: ['expected-value', 'variance'],
        simple: `
            <h3>📉 Hồi quy về trung bình</h3>
            <p>Giá trị cực đoan có xu hướng <strong>quay về trung bình</strong> ở lần đo tiếp theo.</p>
            <div class="example-box">
                Học sinh thi rất cao → Lần sau có thể thấp hơn<br>
                Không phải vì học kém đi, mà vì lần trước may mắn!
            </div>
        `,
        detail: `
            <h3>📊 Ví dụ</h3>
            <ul>
                <li>"Sports Illustrated Jinx" - Cầu thủ lên bìa → thành tích giảm</li>
                <li>Bệnh nhân rất nặng → có vẻ khỏe hơn sau "trị liệu" bất kỳ</li>
                <li>Công ty quý trước lãi khủng → quý sau "bình thường"</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 Ứng dụng</h3>
            <ul>
                <li>Đánh giá hiệu quả can thiệp cần control group</li>
                <li>Cẩn thận kết luận nhân quả</li>
                <li>Hiểu đây là hiện tượng thống kê tự nhiên</li>
            </ul>
        `
    }
};
