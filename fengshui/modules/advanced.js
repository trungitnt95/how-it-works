// Advanced Feng Shui - Expert topics
const advancedFengshuiData = {
    'birth-element': {
        icon: '📅',
        title: 'Bản Mệnh & Tuổi',
        category: 'advanced',
        level: 'beginner',
        connections: ['five-elements', 'directions', 'colors-materials'],
        simple: `
            <h3>📅 Bản Mệnh & Tuổi</h3>
            <p>Mỗi người sinh ra thuộc một <strong>Hành</strong> (Mệnh) dựa trên năm sinh, quyết định hợp/kỵ với các yếu tố phong thủy.</p>
            <div class="example-box">
                <strong>5 Mệnh:</strong><br>
                🪙 Kim • 🌳 Mộc • 💧 Thủy • 🔥 Hỏa • 🏔️ Thổ
            </div>
            <p>Biết mệnh mình để chọn hướng nhà, màu sắc, vật phẩm phù hợp.</p>
        `,
        detail: `
            <h3>📊 Xác định bản mệnh</h3>
            <h4>Bảng Nạp Âm (rút gọn)</h4>
            <p>Bản mệnh tính theo <strong>cặp năm sinh</strong> trong chu kỳ 60 năm (Lục Thập Hoa Giáp):</p>
            <table>
                <tr><th>Năm sinh</th><th>Mệnh</th><th>Nạp Âm</th></tr>
                <tr><td>1990, 1991</td><td>Thổ</td><td>Lộ Bàng Thổ</td></tr>
                <tr><td>1992, 1993</td><td>Kim</td><td>Kiếm Phong Kim</td></tr>
                <tr><td>1994, 1995</td><td>Hỏa</td><td>Sơn Đầu Hỏa</td></tr>
                <tr><td>1996, 1997</td><td>Thủy</td><td>Giản Hạ Thủy</td></tr>
                <tr><td>1998, 1999</td><td>Thổ</td><td>Thành Đầu Thổ</td></tr>
                <tr><td>2000, 2001</td><td>Kim</td><td>Bạch Lạp Kim</td></tr>
            </table>
            <h4>Hợp & Kỵ cơ bản</h4>
            <ul>
                <li><strong>Hợp:</strong> Hành sinh cho mệnh, cùng hành</li>
                <li><strong>Kỵ:</strong> Hành khắc mệnh</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 Bản mệnh nâng cao</h3>
            <h4>Quái số theo Bát Trạch</h4>
            <p>Ngoài Nạp Âm, còn có <strong>Quái số</strong> (Cung Mệnh) để xác định 4 hướng tốt và 4 hướng xấu:</p>
            <div class="formula-box">
                Nam: (100 - 2 số cuối năm sinh) ÷ 9 → lấy số dư<br>
                Nữ: (2 số cuối năm sinh - 4) ÷ 9 → lấy số dư
            </div>
            <table>
                <tr><th>Quái số</th><th>Cung</th><th>Nhóm</th></tr>
                <tr><td>1</td><td>Khảm</td><td>Đông Tứ Mệnh</td></tr>
                <tr><td>2</td><td>Khôn</td><td>Tây Tứ Mệnh</td></tr>
                <tr><td>3</td><td>Chấn</td><td>Đông Tứ Mệnh</td></tr>
                <tr><td>4</td><td>Tốn</td><td>Đông Tứ Mệnh</td></tr>
                <tr><td>6</td><td>Càn</td><td>Tây Tứ Mệnh</td></tr>
                <tr><td>7</td><td>Đoài</td><td>Tây Tứ Mệnh</td></tr>
                <tr><td>8</td><td>Cấn</td><td>Tây Tứ Mệnh</td></tr>
                <tr><td>9</td><td>Ly</td><td>Đông Tứ Mệnh</td></tr>
            </table>
        `
    },
    'annual-fengshui': {
        icon: '📆',
        title: 'Phong Thủy Theo Năm',
        category: 'advanced',
        level: 'intermediate',
        connections: ['flying-stars', 'lo-shu', 'remedies'],
        simple: `
            <h3>📆 Phong Thủy Theo Năm</h3>
            <p>Năng lượng phong thủy <strong>thay đổi hàng năm</strong> — vị trí tốt năm nay có thể xấu năm sau.</p>
            <div class="example-box">
                <strong>Ví dụ:</strong> Sao Ngũ Hoàng (tai họa) mỗi năm bay đến một cung khác nhau. Cung đó cần được hóa giải.
            </div>
        `,
        detail: `
            <h3>📊 Phong thủy hàng năm chi tiết</h3>
            <h4>Các sao cần chú ý mỗi năm</h4>
            <table>
                <tr><th>Sao</th><th>Tính chất</th><th>Hóa giải</th></tr>
                <tr><td>⭐ Ngũ Hoàng</td><td>Tai họa nặng</td><td>Chuông gió kim loại, đồ Kim</td></tr>
                <tr><td>⭐ Nhị Hắc</td><td>Bệnh tật</td><td>Hồ lô đồng, 6 đồng tiền</td></tr>
                <tr><td>⭐ Tam Bích</td><td>Thị phi</td><td>Đèn đỏ, vật Hỏa</td></tr>
                <tr><td>⭐ Thất Xích</td><td>Trộm cắp</td><td>Bình nước tĩnh</td></tr>
            </table>
            <h4>Nguyên tắc cơ bản</h4>
            <ul>
                <li>Đầu năm (sau Tết Nguyên Đán) cập nhật vị trí sao</li>
                <li>Không động thổ, sửa chữa ở cung sao xấu</li>
                <li>Kích hoạt cung có sao tốt (Bát Bạch, Nhất Bạch, Cửu Tử)</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 Niên tinh nâng cao</h3>
            <h4>Thái Tuế (太歲)</h4>
            <p><strong>Thái Tuế</strong> là vị thần cai quản năm đó. Hướng Thái Tuế <strong>không được động thổ</strong>.</p>
            <div class="warning-box">
                <strong>Quy tắc Thái Tuế:</strong>
                <ul>
                    <li>Không đào đất, xây dựng ở hướng Thái Tuế</li>
                    <li>Không ngồi quay lưng về hướng Thái Tuế</li>
                    <li>Tuổi xung Thái Tuế cần đeo bùa hóa giải</li>
                </ul>
            </div>
            <h4>Tam Sát (三煞)</h4>
            <p>Ba hướng xấu mỗi năm, tuyệt đối không động thổ:</p>
            <ul>
                <li><strong>Năm Thân-Tý-Thìn:</strong> Tam Sát ở Nam</li>
                <li><strong>Năm Dần-Ngọ-Tuất:</strong> Tam Sát ở Bắc</li>
                <li><strong>Năm Tỵ-Dậu-Sửu:</strong> Tam Sát ở Đông</li>
                <li><strong>Năm Hợi-Mão-Mùi:</strong> Tam Sát ở Tây</li>
            </ul>
        `
    },
    'land-form': {
        icon: '⛰️',
        title: 'Loan Đầu (Hình Thế)',
        category: 'advanced',
        level: 'advanced',
        connections: ['chi-energy', 'directions', 'water-placement'],
        simple: `
            <h3>⛰️ Loan Đầu là gì?</h3>
            <p><strong>Loan Đầu</strong> là trường phái phong thủy dựa trên <strong>hình thế đất đai</strong> — núi, sông, đường xá xung quanh.</p>
            <div class="example-box">
                <strong>Tứ Linh:</strong> Bốn hướng bảo vệ ngôi nhà<br>
                🐉 Thanh Long (trái) • 🐅 Bạch Hổ (phải)<br>
                🐦 Châu Tước (trước) • 🐢 Huyền Vũ (sau)
            </div>
        `,
        detail: `
            <h3>📊 Tứ Linh chi tiết</h3>
            <table>
                <tr><th>Linh vật</th><th>Vị trí</th><th>Đặc điểm lý tưởng</th></tr>
                <tr><td>🐢 Huyền Vũ</td><td>Phía sau</td><td>Núi/tòa nhà cao, vững chắc — chỗ tựa</td></tr>
                <tr><td>🐦 Châu Tước</td><td>Phía trước</td><td>Thấp, thoáng, có nước — minh đường</td></tr>
                <tr><td>🐉 Thanh Long</td><td>Bên trái</td><td>Cao hơn bên phải — quý nhân</td></tr>
                <tr><td>🐅 Bạch Hổ</td><td>Bên phải</td><td>Thấp hơn bên trái — thuần phục</td></tr>
            </table>
            <h4>Áp dụng trong đô thị</h4>
            <ul>
                <li><strong>Huyền Vũ:</strong> Tòa nhà cao phía sau</li>
                <li><strong>Châu Tước:</strong> Công viên, sân rộng phía trước</li>
                <li><strong>Thanh Long:</strong> Nhà/tòa nhà bên trái cao hơn bên phải</li>
                <li><strong>Đường:</strong> Đường cong bao quanh tốt hơn đường thẳng chĩa vào</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 Loan Đầu nâng cao</h3>
            <h4>Các hình thế đất xấu</h4>
            <ul>
                <li><strong>Lộ xung (路沖):</strong> Đường thẳng chĩa vào nhà — Sát Khí mạnh</li>
                <li><strong>Phản cung (反弓):</strong> Nhà ở mặt lồi của đường cong — bị "bắn" Khí</li>
                <li><strong>Thiên trảm sát:</strong> Khe hẹp giữa hai tòa nhà cao chĩa vào nhà</li>
                <li><strong>Cô phong sát:</strong> Nhà cao đứng một mình, không có tựa</li>
            </ul>
            <div class="warning-box">
                <strong>Lộ xung</strong> là hình thế xấu phổ biến nhất ở đô thị. Hóa giải bằng: tường rào, cây xanh dày, gương bát quái, bình phong đá.
            </div>
            <h4>Long mạch (龍脈)</h4>
            <p>Trong phong thủy cổ, dãy núi được ví như <strong>rồng</strong>, và năng lượng chảy theo sống núi gọi là Long mạch. Nơi Long mạch kết tụ (huyệt) là đất tốt nhất.</p>
        `
    },
    'water-placement': {
        icon: '💧',
        title: 'Thủy Pháp',
        category: 'advanced',
        level: 'advanced',
        connections: ['chi-energy', 'five-elements', 'land-form'],
        simple: `
            <h3>💧 Thủy Pháp là gì?</h3>
            <p><strong>Thủy Pháp</strong> là nghệ thuật đặt nước trong phong thủy. Nước = Tài lộc — đặt đúng giàu, đặt sai mất.</p>
            <div class="example-box">
                <strong>Nguyên tắc:</strong> "Sơn quản nhân đinh, Thủy quản tài" — Núi quản con người, Nước quản tiền tài.
            </div>
        `,
        detail: `
            <h3>📊 Thủy Pháp chi tiết</h3>
            <h4>Nguyên tắc đặt nước</h4>
            <ul>
                <li>✅ Nước chảy vào nhà (tài vào)</li>
                <li>✅ Nước sạch, trong, chảy nhẹ nhàng</li>
                <li>✅ Đặt ở phía trước nhà (minh đường)</li>
                <li>❌ Nước chảy ra khỏi nhà (tài đi)</li>
                <li>❌ Nước đọng, bẩn, hôi</li>
                <li>❌ Nước quá mạnh, ồn ào</li>
            </ul>
            <h4>Các dạng nước trong nhà</h4>
            <table>
                <tr><th>Loại</th><th>Tốt cho</th><th>Lưu ý</th></tr>
                <tr><td>Bể cá</td><td>Tài lộc</td><td>Số cá lẻ, cá khỏe mạnh</td></tr>
                <tr><td>Đài phun</td><td>Kích hoạt Khí</td><td>Nước chảy vào trong</td></tr>
                <tr><td>Thác nước mini</td><td>Sinh Khí</td><td>Đặt ở hướng Tài</td></tr>
            </table>
        `,
        advanced: `
            <h3>🎓 Thủy Pháp nâng cao</h3>
            <h4>Thủy pháp theo Phi Tinh</h4>
            <p>Vị trí đặt nước phải phù hợp với <strong>Hướng Tinh vượng</strong> (sao tài lộc) trong bàn Phi Tinh.</p>
            <div class="formula-box">
                Nước đặt ở cung có Hướng Tinh 8 (Bát Bạch) = Đại tài
            </div>
            <h4>Quy tắc dòng chảy</h4>
            <ul>
                <li><strong>Thu thủy:</strong> Nước từ hướng Sinh chảy đến hướng Vượng</li>
                <li><strong>Phóng thủy:</strong> Nước thoát ra ở hướng Tử/Tuyệt</li>
                <li><strong>Minh đường tụ thủy:</strong> Nước tụ lại ở minh đường trước nhà</li>
            </ul>
            <div class="warning-box">
                <strong>Cảnh báo:</strong> Đặt nước sai vị trí có thể gây phá tài, bệnh tật. Nếu không chắc chắn, nên tham khảo chuyên gia.
            </div>
        `
    },
    'remedies': {
        icon: '🔮',
        title: 'Hóa Giải & Vật Phẩm',
        category: 'advanced',
        level: 'intermediate',
        connections: ['five-elements', 'annual-fengshui', 'chi-energy'],
        simple: `
            <h3>🔮 Hóa Giải & Vật Phẩm</h3>
            <p>Khi phong thủy có vấn đề, dùng <strong>vật phẩm phong thủy</strong> để hóa giải và cải thiện năng lượng.</p>
            <div class="example-box">
                <strong>Vật phẩm phổ biến:</strong><br>
                🦁 Tỳ Hưu • 🌿 Cây phong thủy • 🪞 Gương Bát Quái<br>
                🔔 Chuông gió • 🐢 Rùa đầu rồng • 💎 Pha lê
            </div>
        `,
        detail: `
            <h3>📊 Vật phẩm chi tiết</h3>
            <h4>Vật phẩm theo mục đích</h4>
            <table>
                <tr><th>Mục đích</th><th>Vật phẩm</th><th>Cách đặt</th></tr>
                <tr><td>Thu hút tài lộc</td><td>Tỳ Hưu, Thiềm Thừ</td><td>Quay mặt ra cửa</td></tr>
                <tr><td>Bảo vệ, trấn trạch</td><td>Gương Bát Quái, Sư tử đá</td><td>Treo/đặt ngoài cửa</td></tr>
                <tr><td>Hóa giải sát khí</td><td>Chuông gió, Hồ lô đồng</td><td>Treo ở cung sao xấu</td></tr>
                <tr><td>Sức khỏe</td><td>Hồ lô, Ngọc bội</td><td>Đầu giường, trên người</td></tr>
                <tr><td>Học vấn</td><td>Tháp Văn Xương</td><td>Bàn học, góc Đông Bắc</td></tr>
            </table>
            <h4>Cây phong thủy</h4>
            <ul>
                <li>🌿 <strong>Kim tiền:</strong> Thu hút tài lộc</li>
                <li>🎋 <strong>Phát tài:</strong> Thịnh vượng, phát triển</li>
                <li>🌱 <strong>Lưỡi hổ:</strong> Hấp thụ khí xấu, bảo vệ</li>
                <li>🪴 <strong>Vạn niên thanh:</strong> Sức khỏe, trường thọ</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 Hóa giải nâng cao</h3>
            <h4>Nguyên tắc hóa giải theo Ngũ Hành</h4>
            <p>Mọi hóa giải đều dựa trên nguyên lý <strong>Tương Sinh-Tương Khắc</strong> của Ngũ Hành:</p>
            <ul>
                <li><strong>Sao Thổ xấu (2, 5):</strong> Dùng Kim hóa giải (chuông gió kim loại, 6 đồng tiền)</li>
                <li><strong>Sao Mộc xấu (3):</strong> Dùng Hỏa hóa giải (đèn đỏ, nến)</li>
                <li><strong>Sao Kim xấu (7):</strong> Dùng Thủy hóa giải (bình nước tĩnh)</li>
            </ul>
            <div class="warning-box">
                <strong>Lưu ý quan trọng:</strong>
                <ul>
                    <li>Gương Bát Quái chỉ treo NGOÀI nhà, không bao giờ treo trong nhà</li>
                    <li>Tỳ Hưu không đặt trong phòng ngủ</li>
                    <li>Vật phẩm hư hỏng, nứt vỡ phải thay thế ngay</li>
                    <li>Không đặt quá nhiều vật phẩm — gây loạn Khí</li>
                </ul>
            </div>
            <div class="tip-box">
                <strong>Mẹo:</strong> Hiệu quả nhất là giữ nhà sạch sẽ, gọn gàng, thông thoáng. Vật phẩm chỉ hỗ trợ thêm, không thể thay thế nền tảng tốt.
            </div>
        `
    }
};
