// Geometry - Practical geometry applications
const geometryData = {
    'area-volume': {
        icon: '📦',
        title: 'Diện Tích & Thể Tích',
        category: 'geometry',
        level: 'beginner',
        connections: ['symmetry', 'architecture-math', 'estimation'],
        simple: `
            <h3>📦 Diện tích & Thể tích</h3>
            <p>Diện tích và thể tích giúp bạn đo lường không gian trong đời sống hàng ngày.</p>
            <div class="example-box">
                <strong>Sơn phòng:</strong> Phòng 4m × 5m, tường cao 3m<br>
                Diện tích tường = 2 × (4+5) × 3 = 54 m²<br>
                Cần: 54 / 10 ≈ 5.4 lít sơn (1 lít/10m²)
            </div>
            <h4>Công thức hay dùng</h4>
            <ul>
                <li><strong>Hình chữ nhật:</strong> S = dài × rộng</li>
                <li><strong>Hình tròn:</strong> S = π × r²</li>
                <li><strong>Hộp chữ nhật:</strong> V = dài × rộng × cao</li>
            </ul>
        `,
        detail: `
            <h3>📊 Công thức chi tiết</h3>
            <table>
                <tr><th>Hình</th><th>Diện tích</th><th>Ứng dụng</th></tr>
                <tr><td>Hình chữ nhật</td><td>a × b</td><td>Sàn nhà, thảm</td></tr>
                <tr><td>Tam giác</td><td>½ × đáy × cao</td><td>Mái nhà</td></tr>
                <tr><td>Hình tròn</td><td>π × r²</td><td>Pizza, bánh</td></tr>
                <tr><td>Hình thang</td><td>½ × (a+b) × h</td><td>Mảnh đất</td></tr>
            </table>
            <h4>Thể tích thường gặp</h4>
            <table>
                <tr><th>Hình</th><th>Thể tích</th><th>Ứng dụng</th></tr>
                <tr><td>Hộp</td><td>a × b × c</td><td>Thùng hàng, phòng</td></tr>
                <tr><td>Trụ</td><td>π × r² × h</td><td>Lon nước, bể nước</td></tr>
                <tr><td>Cầu</td><td>4/3 × π × r³</td><td>Bóng, quả địa cầu</td></tr>
            </table>
        `,
        advanced: `
            <h3>🎓 Ứng dụng nâng cao</h3>
            <h4>Tối ưu hóa hình dạng</h4>
            <p>Trong cùng chu vi, hình tròn có diện tích lớn nhất. Trong cùng diện tích bề mặt, hình cầu có thể tích lớn nhất.</p>
            <div class="example-box">
                <strong>Thiết kế bao bì:</strong> Lon hình trụ thể tích 330ml.<br>
                Tối ưu: h = 2r (chiều cao = đường kính) → Tiết kiệm vật liệu nhất.
            </div>
            <h4>Định lý Pick</h4>
            <p>Tính diện tích đa giác trên lưới ô vuông:</p>
            <div class="formula-box">
                S = I + B/2 - 1<br>
                I = điểm bên trong, B = điểm trên biên
            </div>
        `
    },
    'golden-ratio': {
        icon: '🌀',
        title: 'Tỉ Lệ Vàng',
        category: 'geometry',
        level: 'intermediate',
        connections: ['ratios', 'symmetry', 'architecture-math', 'sequences'],
        simple: `
            <h3>🌀 Tỉ lệ vàng</h3>
            <p><strong>Tỉ lệ vàng (φ ≈ 1.618)</strong> là tỉ lệ được coi là đẹp nhất trong tự nhiên và nghệ thuật.</p>
            <div class="example-box">
                <strong>Ví dụ:</strong> Thẻ tín dụng có tỉ lệ dài/rộng ≈ 1.618 (tỉ lệ vàng)
            </div>
            <h4>Ở đâu có tỉ lệ vàng?</h4>
            <ul>
                <li>Khuôn mặt được coi là đẹp</li>
                <li>Xoắn ốc vỏ ốc sên</li>
                <li>Hạt hướng dương xếp theo xoắn ốc</li>
                <li>Logo Apple, Twitter, Pepsi</li>
            </ul>
        `,
        detail: `
            <h3>📊 Tỉ lệ vàng chi tiết</h3>
            <div class="formula-box">
                φ = (1 + √5) / 2 ≈ 1.6180339887...<br>
                a/b = (a+b)/a = φ
            </div>
            <h4>Hình chữ nhật vàng</h4>
            <p>Hình chữ nhật có tỉ lệ cạnh dài/cạnh ngắn = φ. Khi cắt bỏ hình vuông, phần còn lại vẫn là hình chữ nhật vàng.</p>
            <h4>Fibonacci và tỉ lệ vàng</h4>
            <p>Tỉ số hai số Fibonacci liên tiếp tiến dần đến φ:</p>
            <table>
                <tr><th>Fibonacci</th><th>Tỉ số</th></tr>
                <tr><td>3/2</td><td>1.500</td></tr>
                <tr><td>5/3</td><td>1.667</td></tr>
                <tr><td>8/5</td><td>1.600</td></tr>
                <tr><td>13/8</td><td>1.625</td></tr>
                <tr><td>21/13</td><td>1.615</td></tr>
            </table>
        `,
        advanced: `
            <h3>🎓 Ứng dụng tỉ lệ vàng</h3>
            <h4>Trong thiết kế</h4>
            <ul>
                <li><strong>Web design:</strong> Chia layout theo tỉ lệ 1:1.618</li>
                <li><strong>Typography:</strong> Cỡ chữ tiêu đề/nội dung ≈ φ</li>
                <li><strong>Nhiếp ảnh:</strong> Xoắn ốc vàng thay cho quy tắc 1/3</li>
            </ul>
            <h4>Trong tài chính</h4>
            <p>Fibonacci Retracement dùng các mức 23.6%, 38.2%, 50%, 61.8% (dựa trên tỉ lệ vàng) để dự đoán mức hỗ trợ/kháng cự trong giao dịch chứng khoán.</p>
        `
    },
    'navigation': {
        icon: '🗺️',
        title: 'Định Vị & Bản Đồ',
        category: 'geometry',
        level: 'intermediate',
        connections: ['area-volume', 'estimation', 'architecture-math'],
        simple: `
            <h3>🗺️ Định vị & Bản đồ</h3>
            <p>Toán học là nền tảng của mọi hệ thống bản đồ và định vị mà bạn dùng hàng ngày.</p>
            <div class="example-box">
                <strong>GPS:</strong> Dùng tọa độ (vĩ độ, kinh độ) để xác định vị trí chính xác trên Trái Đất.
            </div>
            <h4>Toán trong bản đồ</h4>
            <ul>
                <li>Tỉ lệ bản đồ (1:50.000)</li>
                <li>Khoảng cách giữa hai điểm</li>
                <li>Hướng đi (góc phương vị)</li>
            </ul>
        `,
        detail: `
            <h3>📊 Toán trong định vị</h3>
            <h4>Khoảng cách hai điểm</h4>
            <div class="formula-box">
                d = √[(x₂-x₁)² + (y₂-y₁)²]
            </div>
            <h4>Công thức Haversine</h4>
            <p>Tính khoảng cách giữa hai điểm trên bề mặt Trái Đất (hình cầu):</p>
            <div class="example-box">
                <strong>Hà Nội → TP.HCM:</strong><br>
                Tọa độ HN: (21.03°N, 105.85°E)<br>
                Tọa độ HCM: (10.82°N, 106.63°E)<br>
                Khoảng cách: ~1.138 km (đường chim bay)
            </div>
            <h4>Tam giác đạc</h4>
            <p>Phương pháp đo khoảng cách bằng cách đo góc từ hai điểm đã biết, ứng dụng trong khảo sát địa hình.</p>
        `,
        advanced: `
            <h3>🎓 Hệ thống định vị hiện đại</h3>
            <h4>GPS hoạt động thế nào?</h4>
            <ul>
                <li>Cần tín hiệu từ tối thiểu 4 vệ tinh</li>
                <li>Tính khoảng cách dựa trên thời gian truyền sóng</li>
                <li>Giao điểm 4 hình cầu → tọa độ chính xác</li>
                <li>Dùng thuyết tương đối để hiệu chỉnh thời gian</li>
            </ul>
            <h4>Phép chiếu bản đồ</h4>
            <p>Không thể biểu diễn chính xác bề mặt cầu lên mặt phẳng. Mỗi phép chiếu (Mercator, Robinson...) đều có sai số riêng.</p>
        `
    },
    'architecture-math': {
        icon: '🏛️',
        title: 'Toán Trong Kiến Trúc',
        category: 'geometry',
        level: 'advanced',
        connections: ['area-volume', 'golden-ratio', 'symmetry'],
        simple: `
            <h3>🏛️ Toán trong kiến trúc</h3>
            <p>Mọi công trình từ nhà ở đến tòa nhà chọc trời đều dựa trên toán học.</p>
            <div class="example-box">
                <strong>Cầu thang:</strong> Mỗi bậc cao 17cm, rộng 28cm.<br>
                Lên tầng 3m cần: 3000/170 ≈ 18 bậc<br>
                Chiều dài cầu thang: 18 × 28cm = 5.04m
            </div>
        `,
        detail: `
            <h3>📊 Toán kiến trúc chi tiết</h3>
            <h4>Kết cấu tam giác</h4>
            <p>Tam giác là hình ổn định nhất trong kết cấu. Mái nhà, giàn cầu đều dùng cấu trúc tam giác.</p>
            <h4>Định lý Pythagoras trong xây dựng</h4>
            <div class="formula-box">
                a² + b² = c²
            </div>
            <div class="example-box">
                <strong>Kiểm tra vuông góc:</strong> Đo 3m-4m-5m. Nếu 3² + 4² = 5² (9+16=25) → góc vuông chính xác.
            </div>
            <h4>Vòm và mái cong</h4>
            <p>Đường parabol và catenary (đường dây xích) là hình dạng tối ưu cho vòm chịu lực.</p>
        `,
        advanced: `
            <h3>🎓 Toán kiến trúc nâng cao</h3>
            <h4>Mặt cong trong kiến trúc hiện đại</h4>
            <ul>
                <li><strong>Hyperboloid:</strong> Tháp làm mát nhà máy điện</li>
                <li><strong>Paraboloid:</strong> Anten parabol, đèn pha</li>
                <li><strong>Mặt tối thiểu:</strong> Mái kính cong tiết kiệm vật liệu</li>
            </ul>
            <h4>Fractal trong thiết kế</h4>
            <p>Kiến trúc fractal lặp lại mẫu hình ở nhiều tỉ lệ khác nhau, tạo cảm giác hài hòa tự nhiên. Ví dụ: Nhà thờ Sagrada Familia (Barcelona).</p>
        `
    },
    'symmetry': {
        icon: '🦋',
        title: 'Đối Xứng Trong Tự Nhiên',
        category: 'geometry',
        level: 'beginner',
        connections: ['golden-ratio', 'area-volume', 'architecture-math'],
        simple: `
            <h3>🦋 Đối xứng trong tự nhiên</h3>
            <p><strong>Đối xứng</strong> là khi một vật trông giống nhau khi lật, xoay hoặc lặp lại.</p>
            <div class="example-box">
                <strong>Ví dụ:</strong> Bướm có hai cánh đối xứng qua trục giữa cơ thể.
            </div>
            <h4>Đối xứng quanh ta</h4>
            <ul>
                <li>🦋 Côn trùng: đối xứng gương</li>
                <li>❄️ Bông tuyết: đối xứng 6 trục</li>
                <li>🌻 Hướng dương: đối xứng xoay</li>
                <li>🏠 Kiến trúc: đối xứng tạo vẻ đẹp hài hòa</li>
            </ul>
        `,
        detail: `
            <h3>📊 Các loại đối xứng</h3>
            <table>
                <tr><th>Loại</th><th>Mô tả</th><th>Ví dụ</th></tr>
                <tr><td>Đối xứng gương</td><td>Lật qua trục</td><td>Khuôn mặt, bướm</td></tr>
                <tr><td>Đối xứng xoay</td><td>Xoay một góc</td><td>Hoa, bánh xe</td></tr>
                <tr><td>Đối xứng tịnh tiến</td><td>Di chuyển lặp lại</td><td>Gạch lát sàn, hàng rào</td></tr>
                <tr><td>Đối xứng phóng đại</td><td>Thu phóng lặp lại</td><td>Fractal, bông cải</td></tr>
            </table>
            <h4>Tại sao tự nhiên ưa đối xứng?</h4>
            <p>Đối xứng thường phản ánh sức khỏe và hiệu quả di truyền. Trong vật lý, các định luật bảo toàn liên quan trực tiếp đến đối xứng (Định lý Noether).</p>
        `,
        advanced: `
            <h3>🎓 Đối xứng nâng cao</h3>
            <h4>Nhóm đối xứng</h4>
            <p>Toán học phân loại mọi loại đối xứng bằng lý thuyết nhóm. Chỉ có đúng 17 nhóm đối xứng mặt phẳng (wallpaper groups).</p>
            <h4>Phá vỡ đối xứng</h4>
            <ul>
                <li><strong>Vật lý:</strong> Phá vỡ đối xứng tạo ra khối lượng (Higgs boson)</li>
                <li><strong>Sinh học:</strong> Bất đối xứng trái-phải ở nội tạng</li>
                <li><strong>Nghệ thuật:</strong> Phá vỡ đối xứng nhẹ tạo sự thú vị</li>
            </ul>
            <h4>Lát gạch Penrose</h4>
            <p>Cách lát gạch không tuần hoàn nhưng có đối xứng 5 chiều. Ứng dụng trong vật liệu quasicrystal (giải Nobel Hóa học 2011).</p>
        `
    }
};
