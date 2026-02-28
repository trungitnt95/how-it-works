// Bagua - Eight Trigrams and Directions
const baguaData = {
    'bagua-map': {
        icon: '🗺️',
        title: 'Bát Quái',
        category: 'bagua',
        level: 'beginner',
        connections: ['directions', 'lo-shu', 'five-elements'],
        simple: `
            <h3>🗺️ Bát Quái là gì?</h3>
            <p><strong>Bát Quái</strong> (八卦) là hệ thống 8 quẻ, mỗi quẻ đại diện cho một phương vị và khía cạnh cuộc sống.</p>
            <div class="example-box">
                <strong>8 Quẻ:</strong><br>
                ☰ Càn (Trời) • ☷ Khôn (Đất) • ☵ Khảm (Nước) • ☲ Ly (Lửa)<br>
                ☳ Chấn (Sấm) • ☴ Tốn (Gió) • ☶ Cấn (Núi) • ☱ Đoài (Đầm)
            </div>
        `,
        detail: `
            <h3>📊 Chi tiết 8 Quẻ</h3>
            <table>
                <tr><th>Quẻ</th><th>Tên</th><th>Hướng</th><th>Ý nghĩa</th></tr>
                <tr><td>☰</td><td>Càn</td><td>Tây Bắc</td><td>Quý nhân, cha, lãnh đạo</td></tr>
                <tr><td>☷</td><td>Khôn</td><td>Tây Nam</td><td>Mẹ, hôn nhân, đất đai</td></tr>
                <tr><td>☵</td><td>Khảm</td><td>Bắc</td><td>Sự nghiệp, trí tuệ</td></tr>
                <tr><td>☲</td><td>Ly</td><td>Nam</td><td>Danh tiếng, ánh sáng</td></tr>
                <tr><td>☳</td><td>Chấn</td><td>Đông</td><td>Sức khỏe, gia đình</td></tr>
                <tr><td>☴</td><td>Tốn</td><td>Đông Nam</td><td>Tài lộc, thịnh vượng</td></tr>
                <tr><td>☶</td><td>Cấn</td><td>Đông Bắc</td><td>Học vấn, trí thức</td></tr>
                <tr><td>☱</td><td>Đoài</td><td>Tây</td><td>Con cái, sáng tạo</td></tr>
            </table>
        `,
        advanced: `
            <h3>🎓 Bát Quái nâng cao</h3>
            <h4>Tiên Thiên vs Hậu Thiên Bát Quái</h4>
            <ul>
                <li><strong>Tiên Thiên (Phục Hy):</strong> Bát Quái nguyên thủy, thể hiện trạng thái lý tưởng</li>
                <li><strong>Hậu Thiên (Văn Vương):</strong> Bát Quái thực dụng, dùng trong phong thủy nhà ở</li>
            </ul>
            <div class="warning-box">
                <strong>Lưu ý:</strong> Phong thủy nhà ở chủ yếu dùng Hậu Thiên Bát Quái. Tiên Thiên dùng cho phong thủy âm trạch (mộ phần).
            </div>
            <h4>Áp dụng Bát Quái lên mặt bằng</h4>
            <ol>
                <li>Xác định hướng cửa chính bằng la bàn</li>
                <li>Đặt trung tâm Bát Quái vào trung tâm nhà</li>
                <li>Chia nhà thành 9 cung (8 quẻ + trung tâm)</li>
                <li>Phân tích từng khu vực tương ứng</li>
            </ol>
        `
    },
    'directions': {
        icon: '🧭',
        title: '8 Hướng & Ý Nghĩa',
        category: 'bagua',
        level: 'intermediate',
        connections: ['bagua-map', 'entrance', 'desk-placement'],
        simple: `
            <h3>🧭 8 Hướng cơ bản</h3>
            <p>Mỗi hướng mang một năng lượng riêng, ảnh hưởng đến các khía cạnh cuộc sống khác nhau.</p>
            <div class="example-box">
                <strong>4 hướng chính:</strong><br>
                🔴 Nam — Danh tiếng<br>
                ⚫ Bắc — Sự nghiệp<br>
                🟢 Đông — Sức khỏe<br>
                ⚪ Tây — Con cái
            </div>
        `,
        detail: `
            <h3>📊 Chi tiết 8 hướng</h3>
            <table>
                <tr><th>Hướng</th><th>Hành</th><th>Lĩnh vực</th><th>Màu tốt</th></tr>
                <tr><td>Bắc</td><td>Thủy</td><td>Sự nghiệp</td><td>Đen, xanh dương</td></tr>
                <tr><td>Nam</td><td>Hỏa</td><td>Danh tiếng</td><td>Đỏ, cam</td></tr>
                <tr><td>Đông</td><td>Mộc</td><td>Sức khỏe, gia đình</td><td>Xanh lá</td></tr>
                <tr><td>Tây</td><td>Kim</td><td>Con cái, sáng tạo</td><td>Trắng, bạc</td></tr>
                <tr><td>Đông Nam</td><td>Mộc</td><td>Tài lộc</td><td>Tím, xanh lá</td></tr>
                <tr><td>Tây Nam</td><td>Thổ</td><td>Hôn nhân</td><td>Hồng, vàng đất</td></tr>
                <tr><td>Đông Bắc</td><td>Thổ</td><td>Học vấn</td><td>Vàng, nâu</td></tr>
                <tr><td>Tây Bắc</td><td>Kim</td><td>Quý nhân</td><td>Xám, trắng</td></tr>
            </table>
        `,
        advanced: `
            <h3>🎓 Hướng nhà nâng cao</h3>
            <h4>Cách xác định hướng chính xác</h4>
            <ol>
                <li>Dùng la bàn (ứng dụng điện thoại cũng được)</li>
                <li>Đứng ở cửa chính, quay mặt ra ngoài</li>
                <li>Hướng bạn nhìn ra = Hướng nhà (Hướng)</li>
                <li>Hướng sau lưng = Tọa nhà (Tọa)</li>
            </ol>
            <div class="formula-box">
                Nhà tọa Bắc hướng Nam = Tọa Khảm hướng Ly
            </div>
            <div class="tip-box">
                <strong>Mẹo:</strong> Khi đo hướng, tránh đứng gần vật kim loại lớn vì ảnh hưởng đến la bàn. Đo ít nhất 3 lần và lấy trung bình.
            </div>
        `
    },
    'lo-shu': {
        icon: '📐',
        title: 'Lạc Thư & Cửu Cung',
        category: 'bagua',
        level: 'intermediate',
        connections: ['bagua-map', 'flying-stars', 'directions'],
        simple: `
            <h3>📐 Lạc Thư là gì?</h3>
            <p><strong>Lạc Thư</strong> là ma trận 3×3 thần bí, tổng mỗi hàng/cột/đường chéo đều bằng 15.</p>
            <div class="formula-box">
                4  9  2<br>
                3  5  7<br>
                8  1  6
            </div>
            <p>Đây là nền tảng của <strong>Cửu Cung</strong> — chia không gian thành 9 khu vực.</p>
        `,
        detail: `
            <h3>📊 Cửu Cung chi tiết</h3>
            <h4>9 Cung và ý nghĩa</h4>
            <table>
                <tr><th>Số</th><th>Hướng</th><th>Sao</th><th>Ý nghĩa</th></tr>
                <tr><td>1</td><td>Bắc</td><td>Nhất Bạch</td><td>Tài lộc, quý nhân</td></tr>
                <tr><td>2</td><td>Tây Nam</td><td>Nhị Hắc</td><td>Bệnh tật (xấu)</td></tr>
                <tr><td>3</td><td>Đông</td><td>Tam Bích</td><td>Thị phi, tranh cãi</td></tr>
                <tr><td>4</td><td>Đông Nam</td><td>Tứ Lục</td><td>Văn xương, học vấn</td></tr>
                <tr><td>5</td><td>Trung tâm</td><td>Ngũ Hoàng</td><td>Tai họa (rất xấu)</td></tr>
                <tr><td>6</td><td>Tây Bắc</td><td>Lục Bạch</td><td>Quyền lực, quý nhân</td></tr>
                <tr><td>7</td><td>Tây</td><td>Thất Xích</td><td>Phá bại, trộm cắp</td></tr>
                <tr><td>8</td><td>Đông Bắc</td><td>Bát Bạch</td><td>Tài lộc lớn (tốt nhất)</td></tr>
                <tr><td>9</td><td>Nam</td><td>Cửu Tử</td><td>Hỷ khánh, may mắn</td></tr>
            </table>
        `,
        advanced: `
            <h3>🎓 Lạc Thư nâng cao</h3>
            <h4>Từ Lạc Thư đến Flying Stars</h4>
            <p>Lạc Thư là "bản đồ gốc" (元旦盤). Các sao di chuyển theo quy luật:</p>
            <ul>
                <li><strong>Thuận phi:</strong> Sao di chuyển theo thứ tự 1→2→3→...→9</li>
                <li><strong>Nghịch phi:</strong> Sao di chuyển ngược 9→8→7→...→1</li>
            </ul>
            <div class="warning-box">
                <strong>Quan trọng:</strong> Sao Ngũ Hoàng (5) và Nhị Hắc (2) là hai sao xấu nhất. Khi bay đến cung nào, cung đó cần hóa giải.
            </div>
            <h4>Hà Đồ vs Lạc Thư</h4>
            <ul>
                <li><strong>Hà Đồ:</strong> Biểu thị quy luật sinh (Tiên Thiên)</li>
                <li><strong>Lạc Thư:</strong> Biểu thị quy luật khắc (Hậu Thiên)</li>
            </ul>
        `
    },
    'flying-stars': {
        icon: '⭐',
        title: 'Phi Tinh (Huyền Không)',
        category: 'bagua',
        level: 'advanced',
        connections: ['lo-shu', 'bagua-map', 'annual-fengshui'],
        simple: `
            <h3>⭐ Phi Tinh là gì?</h3>
            <p><strong>Phi Tinh</strong> (Flying Stars) là phương pháp phong thủy cao cấp, phân tích năng lượng thay đổi theo thời gian.</p>
            <div class="example-box">
                <strong>Ý tưởng chính:</strong> Năng lượng không cố định — nó thay đổi theo năm, tháng, ngày, thậm chí từng giờ.
            </div>
        `,
        detail: `
            <h3>📊 Hệ thống Phi Tinh</h3>
            <h4>9 Sao và tính chất</h4>
            <table>
                <tr><th>Sao</th><th>Tên</th><th>Hành</th><th>Tốt/Xấu</th></tr>
                <tr><td>1</td><td>Tham Lang</td><td>Thủy</td><td>✅ Tốt</td></tr>
                <tr><td>2</td><td>Cự Môn</td><td>Thổ</td><td>❌ Xấu (bệnh)</td></tr>
                <tr><td>3</td><td>Lộc Tồn</td><td>Mộc</td><td>❌ Xấu (thị phi)</td></tr>
                <tr><td>4</td><td>Văn Xương</td><td>Mộc</td><td>✅ Tốt (học vấn)</td></tr>
                <tr><td>5</td><td>Liêm Trinh</td><td>Thổ</td><td>❌ Rất xấu</td></tr>
                <tr><td>6</td><td>Vũ Khúc</td><td>Kim</td><td>✅ Tốt (quyền lực)</td></tr>
                <tr><td>7</td><td>Phá Quân</td><td>Kim</td><td>❌ Xấu (phá bại)</td></tr>
                <tr><td>8</td><td>Tả Phù</td><td>Thổ</td><td>✅ Rất tốt (tài lộc)</td></tr>
                <tr><td>9</td><td>Hữu Bật</td><td>Hỏa</td><td>✅ Tốt (hỷ khánh)</td></tr>
            </table>
        `,
        advanced: `
            <h3>🎓 Phi Tinh chuyên sâu</h3>
            <h4>Lập bàn Phi Tinh</h4>
            <ol>
                <li>Xác định vận nhà (năm xây dựng/sửa chữa lớn)</li>
                <li>Xác định Tọa-Hướng chính xác</li>
                <li>Tra sao Vận Tinh (基星) theo vận</li>
                <li>Phi Sơn Tinh (山星) và Hướng Tinh (向星)</li>
                <li>Kết hợp với Niên Tinh (年星) và Nguyệt Tinh (月星)</li>
            </ol>
            <div class="formula-box">
                Phi Tinh bàn = Vận Tinh + Sơn Tinh + Hướng Tinh
            </div>
            <h4>Các cách cục đặc biệt</h4>
            <ul>
                <li><strong>Vượng Sơn Vượng Hướng:</strong> Cách cục tốt nhất — sao tốt ở cả Sơn và Hướng</li>
                <li><strong>Thượng Sơn Hạ Thủy:</strong> Cách cục xấu nhất — sao tốt đặt sai vị trí</li>
                <li><strong>Song Tinh Đáo Hướng:</strong> Hai sao vượng cùng ở Hướng — tốt cho tài lộc</li>
            </ul>
        `
    }
};
