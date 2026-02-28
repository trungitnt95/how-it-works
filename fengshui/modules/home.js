// Home Feng Shui - Residential applications
const homeFengshuiData = {
    'entrance': {
        icon: '🚪',
        title: 'Cổng & Cửa Chính',
        category: 'home',
        level: 'beginner',
        connections: ['chi-energy', 'directions', 'living-room'],
        simple: `
            <h3>🚪 Cổng & Cửa Chính</h3>
            <p>Cửa chính là <strong>"miệng"</strong> của ngôi nhà — nơi Khí đi vào. Cửa tốt = Khí tốt vào nhà.</p>
            <div class="example-box">
                <strong>3 nguyên tắc cơ bản:</strong><br>
                1. Cửa phải mở được hoàn toàn (không bị vướng)<br>
                2. Trước cửa phải thoáng (minh đường)<br>
                3. Cửa sạch sẽ, sáng sủa
            </div>
        `,
        detail: `
            <h3>📊 Cửa chính chi tiết</h3>
            <h4>Minh Đường (明堂)</h4>
            <p>Khoảng trống trước cửa chính — càng rộng thoáng càng tốt, giúp tụ Khí.</p>
            <h4>Những điều NÊN làm</h4>
            <ul>
                <li>Đèn sáng ở cửa chính (kích hoạt Khí)</li>
                <li>Cây xanh hai bên cửa (dẫn Khí)</li>
                <li>Thảm chùi chân sạch sẽ</li>
                <li>Số nhà rõ ràng, dễ đọc</li>
            </ul>
            <h4>Những điều TRÁNH</h4>
            <ul>
                <li>❌ Cửa đối diện cầu thang (Khí rơi xuống)</li>
                <li>❌ Gương đối diện cửa (đẩy Khí ra ngoài)</li>
                <li>❌ Cửa thẳng ra cửa sau (xuyên đường — Khí không tụ)</li>
                <li>❌ Giày dép bừa bộn trước cửa</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 Cửa chính nâng cao</h3>
            <h4>Hướng cửa và Bát Trạch</h4>
            <p>Trong hệ thống Bát Trạch, hướng cửa quyết định nhà thuộc nhóm Đông Tứ Trạch hay Tây Tứ Trạch:</p>
            <table>
                <tr><th>Nhóm</th><th>Hướng tốt</th></tr>
                <tr><td>Đông Tứ Trạch</td><td>Bắc, Nam, Đông, Đông Nam</td></tr>
                <tr><td>Tây Tứ Trạch</td><td>Tây, Tây Bắc, Tây Nam, Đông Bắc</td></tr>
            </table>
            <h4>Hóa giải cửa xấu</h4>
            <ul>
                <li><strong>Cửa đối cầu thang:</strong> Đặt bình phong hoặc kệ ngăn</li>
                <li><strong>Xuyên đường:</strong> Đặt bình phong, rèm cửa, tủ kệ</li>
                <li><strong>Góc nhọn chĩa vào:</strong> Treo gương bát quái lõm hoặc đặt cây xanh</li>
            </ul>
        `
    },
    'living-room': {
        icon: '🛋️',
        title: 'Phòng Khách',
        category: 'home',
        level: 'beginner',
        connections: ['entrance', 'five-elements', 'colors-materials'],
        simple: `
            <h3>🛋️ Phòng Khách</h3>
            <p>Phòng khách là <strong>trung tâm</strong> của ngôi nhà — nơi gia đình tụ họp và tiếp khách.</p>
            <div class="example-box">
                <strong>Nguyên tắc vàng:</strong> Ghế sofa nên tựa lưng vào tường, nhìn ra cửa chính. Đây là "vị trí quyền lực".
            </div>
            <ul>
                <li>✅ Ánh sáng đầy đủ, thoáng mát</li>
                <li>✅ Cây xanh ở góc phòng</li>
                <li>✅ Tranh phong cảnh tươi đẹp</li>
            </ul>
        `,
        detail: `
            <h3>📊 Bố trí phòng khách</h3>
            <h4>Vị trí sofa</h4>
            <ul>
                <li><strong>Tốt:</strong> Tựa tường, nhìn ra cửa, hình chữ L hoặc U</li>
                <li><strong>Xấu:</strong> Quay lưng ra cửa, đặt giữa phòng không tựa</li>
            </ul>
            <h4>Bàn thờ gia tiên</h4>
            <ul>
                <li>Đặt ở vị trí trang trọng nhất</li>
                <li>Không đặt dưới cầu thang hoặc dầm ngang</li>
                <li>Hướng bàn thờ ra cửa chính hoặc hướng tốt</li>
            </ul>
            <h4>Tranh ảnh & Trang trí</h4>
            <ul>
                <li>✅ Tranh sơn thủy (núi phía sau, nước phía trước)</li>
                <li>✅ Tranh hoa mẫu đơn (phú quý)</li>
                <li>❌ Tranh thú dữ nhìn vào nhà</li>
                <li>❌ Tranh cảnh buồn, hoang vắng</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 Phòng khách nâng cao</h3>
            <h4>Phong thủy theo Ngũ Hành</h4>
            <p>Tùy thuộc hướng phòng khách, chọn màu sắc và vật liệu phù hợp:</p>
            <table>
                <tr><th>Hướng phòng</th><th>Hành</th><th>Nên dùng</th></tr>
                <tr><td>Đông, Đông Nam</td><td>Mộc</td><td>Cây xanh, đồ gỗ, màu xanh lá</td></tr>
                <tr><td>Nam</td><td>Hỏa</td><td>Đèn sáng, màu đỏ, nến</td></tr>
                <tr><td>Tây Nam, Đông Bắc</td><td>Thổ</td><td>Đồ gốm, đá, màu vàng đất</td></tr>
                <tr><td>Tây, Tây Bắc</td><td>Kim</td><td>Đồ kim loại, màu trắng/bạc</td></tr>
                <tr><td>Bắc</td><td>Thủy</td><td>Bể cá, đài phun, màu xanh dương</td></tr>
            </table>
            <div class="tip-box">
                <strong>Mẹo:</strong> Trung tâm phòng khách thuộc Thổ — nên để trống hoặc đặt đèn pha lê để kích hoạt năng lượng.
            </div>
        `
    },
    'bedroom': {
        icon: '🛏️',
        title: 'Phòng Ngủ',
        category: 'home',
        level: 'intermediate',
        connections: ['yin-yang', 'directions', 'colors-materials'],
        simple: `
            <h3>🛏️ Phòng Ngủ</h3>
            <p>Phòng ngủ cần năng lượng <strong>Âm</strong> — yên tĩnh, dịu dàng để nghỉ ngơi tốt.</p>
            <div class="example-box">
                <strong>Quy tắc đặt giường:</strong> Đầu giường tựa tường, nhìn thấy cửa nhưng không đối diện trực tiếp.
            </div>
            <ul>
                <li>✅ Màu pastel nhẹ nhàng</li>
                <li>✅ Đèn dịu, không quá sáng</li>
                <li>❌ Không gương đối diện giường</li>
            </ul>
        `,
        detail: `
            <h3>📊 Phòng ngủ chi tiết</h3>
            <h4>Vị trí đặt giường</h4>
            <ul>
                <li><strong>Tốt nhất:</strong> Đầu giường tựa tường chắc, chéo góc so với cửa</li>
                <li><strong>Tránh:</strong> Đầu giường kê sát cửa sổ, dưới dầm ngang</li>
                <li><strong>Tránh:</strong> Chân giường hướng thẳng ra cửa ("vị trí quan tài")</li>
            </ul>
            <h4>Gương trong phòng ngủ</h4>
            <div class="warning-box">
                <strong>⚠️ Tránh:</strong> Gương phản chiếu giường khi ngủ. Gương hoạt động như "cửa sổ năng lượng", gây mất ngủ, bất an.
            </div>
            <h4>Màu sắc phù hợp</h4>
            <ul>
                <li>💗 Hồng nhạt: Tăng tình cảm đôi lứa</li>
                <li>💙 Xanh nhạt: Thư giãn, dễ ngủ</li>
                <li>🤍 Kem/trắng ngà: Sạch sẽ, thanh tịnh</li>
                <li>❌ Đỏ chói, đen đậm: Quá kích thích hoặc u ám</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 Phòng ngủ nâng cao</h3>
            <h4>Hướng nằm theo Bát Trạch</h4>
            <p>Dựa trên năm sinh, mỗi người có 4 hướng tốt và 4 hướng xấu:</p>
            <table>
                <tr><th>Hướng tốt</th><th>Ý nghĩa</th></tr>
                <tr><td>Sinh Khí</td><td>Tốt nhất — sinh lực, phát triển</td></tr>
                <tr><td>Thiên Y</td><td>Sức khỏe, chữa bệnh</td></tr>
                <tr><td>Diên Niên</td><td>Hôn nhân, quan hệ</td></tr>
                <tr><td>Phục Vị</td><td>Ổn định, bình an</td></tr>
            </table>
            <div class="tip-box">
                <strong>Mẹo:</strong> Nếu vợ chồng khác nhóm (Đông/Tây), ưu tiên hướng tốt cho người vợ vì phòng ngủ thuộc Âm.
            </div>
        `
    },
    'kitchen': {
        icon: '🍳',
        title: 'Nhà Bếp',
        category: 'home',
        level: 'intermediate',
        connections: ['five-elements', 'directions', 'bathroom'],
        simple: `
            <h3>🍳 Nhà Bếp</h3>
            <p>Bếp đại diện cho <strong>Hỏa</strong> và là nơi nuôi dưỡng gia đình. Bếp tốt = sức khỏe tốt, tài lộc vượng.</p>
            <div class="example-box">
                <strong>Quy tắc quan trọng nhất:</strong> Bếp (Hỏa) không đối diện trực tiếp bồn rửa (Thủy) — Thủy khắc Hỏa.
            </div>
        `,
        detail: `
            <h3>📊 Nhà bếp chi tiết</h3>
            <h4>Nguyên tắc Ngũ Hành trong bếp</h4>
            <table>
                <tr><th>Vật dụng</th><th>Hành</th><th>Lưu ý</th></tr>
                <tr><td>Bếp gas/điện</td><td>Hỏa</td><td>Không kề sát tủ lạnh, bồn rửa</td></tr>
                <tr><td>Bồn rửa</td><td>Thủy</td><td>Không đối diện bếp</td></tr>
                <tr><td>Tủ lạnh</td><td>Thủy/Kim</td><td>Cách xa bếp ít nhất 60cm</td></tr>
            </table>
            <h4>Vị trí bếp</h4>
            <ul>
                <li>✅ Người nấu nhìn thấy cửa bếp</li>
                <li>✅ Bếp ở hướng tốt theo Bát Trạch</li>
                <li>❌ Bếp không đặt dưới nhà vệ sinh tầng trên</li>
                <li>❌ Bếp không đối diện cửa chính</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 Nhà bếp nâng cao</h3>
            <h4>Hóa giải xung khắc Thủy-Hỏa</h4>
            <p>Khi bếp và bồn rửa quá gần nhau (phổ biến ở chung cư):</p>
            <ul>
                <li><strong>Cách 1:</strong> Đặt cây xanh nhỏ giữa bếp và bồn rửa (Mộc thông quan: Thủy sinh Mộc sinh Hỏa)</li>
                <li><strong>Cách 2:</strong> Dùng thớt gỗ đặt giữa (Mộc hóa giải)</li>
                <li><strong>Cách 3:</strong> Bố trí hình tam giác (bếp-bồn rửa-tủ lạnh) thay vì thẳng hàng</li>
            </ul>
            <div class="tip-box">
                <strong>Mẹo:</strong> Bếp sạch sẽ = tài lộc vượng. Bếp bẩn, hư hỏng = tiêu hao tài chính. Luôn giữ bếp hoạt động tốt.
            </div>
        `
    },
    'bathroom': {
        icon: '🚿',
        title: 'Phòng Tắm & Vệ Sinh',
        category: 'home',
        level: 'intermediate',
        connections: ['chi-energy', 'kitchen', 'entrance'],
        simple: `
            <h3>🚿 Phòng Tắm & Vệ Sinh</h3>
            <p>Nhà vệ sinh là nơi <strong>thoát Khí</strong> — năng lượng rò rỉ ra ngoài. Cần kiểm soát để không ảnh hưởng toàn nhà.</p>
            <div class="example-box">
                <strong>Quy tắc cơ bản:</strong> Luôn đóng nắp bồn cầu và đóng cửa nhà vệ sinh khi không dùng.
            </div>
        `,
        detail: `
            <h3>📊 Phòng vệ sinh chi tiết</h3>
            <h4>Vị trí NÊN TRÁNH</h4>
            <ul>
                <li>❌ Ở trung tâm nhà (Khí xấu lan ra khắp nhà)</li>
                <li>❌ Đối diện cửa chính (tài lộc rò rỉ)</li>
                <li>❌ Phía trên bếp (Thủy khắc Hỏa)</li>
                <li>❌ Cạnh phòng thờ</li>
            </ul>
            <h4>Cách hạn chế tác hại</h4>
            <ul>
                <li>✅ Luôn đóng cửa và nắp bồn cầu</li>
                <li>✅ Thông gió tốt, quạt hút mạnh</li>
                <li>✅ Cây xanh nhỏ trong nhà vệ sinh (hấp thụ Khí xấu)</li>
                <li>✅ Giữ sạch sẽ, khô ráo, sáng sủa</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 Hóa giải nhà vệ sinh xấu</h3>
            <h4>Khi nhà vệ sinh ở vị trí xấu</h4>
            <table>
                <tr><th>Vấn đề</th><th>Hóa giải</th></tr>
                <tr><td>WC ở trung tâm nhà</td><td>Đèn sáng 24/7, cây xanh, đá thạch anh</td></tr>
                <tr><td>WC đối diện cửa chính</td><td>Bình phong ngăn, rèm cửa, cây lớn</td></tr>
                <tr><td>WC trên bếp</td><td>Treo hồ lô đồng ở trần bếp</td></tr>
                <tr><td>WC cạnh phòng ngủ</td><td>Đóng cửa, đặt đá muối, cây lưỡi hổ</td></tr>
            </table>
            <div class="tip-box">
                <strong>Mẹo:</strong> Màu xanh lá và cây xanh là giải pháp phổ biến nhất cho nhà vệ sinh vì Mộc hấp thụ Thủy và tạo Sinh Khí.
            </div>
        `
    }
};
