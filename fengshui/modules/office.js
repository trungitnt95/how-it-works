// Office Feng Shui - Workplace applications
const officeFengshuiData = {
    'desk-placement': {
        icon: '💼',
        title: 'Bàn Làm Việc',
        category: 'office',
        level: 'beginner',
        connections: ['directions', 'chi-energy', 'office-layout'],
        simple: `
            <h3>💼 Bàn Làm Việc</h3>
            <p>Vị trí bàn làm việc ảnh hưởng trực tiếp đến <strong>năng suất</strong> và <strong>sự nghiệp</strong>.</p>
            <div class="example-box">
                <strong>Vị trí quyền lực (Command Position):</strong><br>
                Ngồi nhìn thấy cửa, lưng tựa tường chắc, không ngồi quay lưng ra cửa.
            </div>
            <ul>
                <li>✅ Nhìn thấy cửa phòng</li>
                <li>✅ Tựa lưng vào tường hoặc tủ cao</li>
                <li>❌ Không ngồi dưới dầm ngang</li>
            </ul>
        `,
        detail: `
            <h3>📊 Bàn làm việc chi tiết</h3>
            <h4>Bố trí trên bàn</h4>
            <table>
                <tr><th>Vị trí</th><th>Nên đặt</th><th>Ý nghĩa</th></tr>
                <tr><td>Trái (Thanh Long)</td><td>Đồ cao hơn</td><td>Quý nhân hỗ trợ</td></tr>
                <tr><td>Phải (Bạch Hổ)</td><td>Đồ thấp hơn</td><td>Tránh thị phi</td></tr>
                <tr><td>Trước mặt</td><td>Để trống</td><td>Minh đường — cơ hội</td></tr>
                <tr><td>Phía sau</td><td>Tường/tủ</td><td>Hậu thuẫn vững chắc</td></tr>
            </table>
            <h4>Hướng ngồi tốt</h4>
            <ul>
                <li>Dựa trên bản mệnh cá nhân (Bát Trạch)</li>
                <li>Ưu tiên hướng Sinh Khí hoặc Thiên Y</li>
                <li>Tránh ngồi hướng Ngũ Quỷ, Tuyệt Mệnh</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 Bàn làm việc nâng cao</h3>
            <h4>Vật phẩm phong thủy trên bàn</h4>
            <ul>
                <li><strong>Cây xanh nhỏ (trái):</strong> Tăng Mộc khí, hỗ trợ phát triển</li>
                <li><strong>Đèn bàn (trái):</strong> Kích hoạt Hỏa, tăng năng lượng</li>
                <li><strong>Pha lê (phải hoặc trước):</strong> Thu hút năng lượng tích cực</li>
                <li><strong>Bể cá nhỏ (trước):</strong> Tài lộc (nếu hợp mệnh Thủy)</li>
            </ul>
            <div class="warning-box">
                <strong>Tránh:</strong> Xương rồng, cây gai trên bàn — tạo Sát Khí, gây xung đột với đồng nghiệp.
            </div>
        `
    },
    'office-layout': {
        icon: '🏢',
        title: 'Bố Trí Văn Phòng',
        category: 'office',
        level: 'intermediate',
        connections: ['desk-placement', 'chi-energy', 'colors-materials'],
        simple: `
            <h3>🏢 Bố Trí Văn Phòng</h3>
            <p>Văn phòng cần <strong>luồng Khí thông thoáng</strong> để nhân viên làm việc hiệu quả.</p>
            <div class="example-box">
                <strong>Nguyên tắc:</strong> Khí phải chảy tự do từ cửa vào, lượn quanh các bàn làm việc, không bị tắc nghẽn.
            </div>
        `,
        detail: `
            <h3>📊 Bố trí văn phòng chi tiết</h3>
            <h4>Nguyên tắc bố trí</h4>
            <ul>
                <li><strong>Sếp/Giám đốc:</strong> Ở vị trí xa cửa nhất, nhìn bao quát toàn phòng</li>
                <li><strong>Nhân viên:</strong> Không ngồi quay lưng ra lối đi chính</li>
                <li><strong>Lối đi:</strong> Rộng rãi, không bị chắn bởi đồ đạc</li>
            </ul>
            <h4>Yếu tố quan trọng</h4>
            <table>
                <tr><th>Yếu tố</th><th>Tốt</th><th>Xấu</th></tr>
                <tr><td>Ánh sáng</td><td>Tự nhiên, đều</td><td>Tối, đèn nhấp nháy</td></tr>
                <tr><td>Cây xanh</td><td>Góc phòng, cạnh cửa</td><td>Héo úa, giả</td></tr>
                <tr><td>Không khí</td><td>Thông thoáng</td><td>Bí bách, ẩm mốc</td></tr>
                <tr><td>Âm thanh</td><td>Yên tĩnh vừa phải</td><td>Quá ồn, quá tĩnh</td></tr>
            </table>
        `,
        advanced: `
            <h3>🎓 Văn phòng nâng cao</h3>
            <h4>Phong thủy phòng họp</h4>
            <ul>
                <li>Bàn tròn hoặc oval tốt hơn bàn vuông (Khí lưu thông)</li>
                <li>Người chủ trì ngồi đối diện cửa</li>
                <li>Tránh cột, dầm ngang phía trên bàn họp</li>
            </ul>
            <h4>Ngũ Hành trong văn phòng</h4>
            <ul>
                <li><strong>Sáng tạo:</strong> Thêm Hỏa (đèn, màu đỏ cam)</li>
                <li><strong>Ổn định:</strong> Thêm Thổ (đá, gốm, màu vàng)</li>
                <li><strong>Tập trung:</strong> Thêm Kim (đồ kim loại, màu trắng)</li>
                <li><strong>Giao tiếp:</strong> Thêm Thủy (đài phun nhỏ, màu xanh)</li>
                <li><strong>Phát triển:</strong> Thêm Mộc (cây xanh, đồ gỗ)</li>
            </ul>
        `
    },
    'business-fengshui': {
        icon: '💰',
        title: 'Phong Thủy Kinh Doanh',
        category: 'office',
        level: 'intermediate',
        connections: ['entrance', 'directions', 'office-layout'],
        simple: `
            <h3>💰 Phong Thủy Kinh Doanh</h3>
            <p>Mặt tiền cửa hàng và văn phòng quyết định <strong>thu hút khách hàng</strong> và <strong>tài lộc</strong>.</p>
            <div class="example-box">
                <strong>Quy tắc vàng:</strong> Cửa hàng cần mặt tiền rộng, sáng, dễ nhìn thấy từ xa — Minh Đường tốt = khách đông.
            </div>
        `,
        detail: `
            <h3>📊 Kinh doanh chi tiết</h3>
            <h4>Mặt tiền cửa hàng</h4>
            <ul>
                <li>✅ Biển hiệu sáng, rõ ràng</li>
                <li>✅ Cửa mở rộng, đón khách</li>
                <li>✅ Sạch sẽ, gọn gàng, hấp dẫn</li>
                <li>❌ Cột điện, cây lớn chắn trước cửa</li>
            </ul>
            <h4>Vị trí két sắt/quỹ tiền</h4>
            <ul>
                <li>Đặt ở góc kín, không ai nhìn thấy</li>
                <li>Hướng két mở vào trong nhà (tiền vào)</li>
                <li>Không đặt két trong nhà vệ sinh hoặc dưới cầu thang</li>
                <li>Tốt nhất ở hướng Tài Lộc theo bản mệnh</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 Kinh doanh nâng cao</h3>
            <h4>Phong thủy theo ngành nghề</h4>
            <table>
                <tr><th>Ngành</th><th>Hành</th><th>Hướng tốt</th><th>Vật phẩm</th></tr>
                <tr><td>Nhà hàng</td><td>Hỏa</td><td>Nam</td><td>Đèn đỏ, bếp mạnh</td></tr>
                <tr><td>Ngân hàng</td><td>Kim</td><td>Tây, Tây Bắc</td><td>Đồ kim loại</td></tr>
                <tr><td>Giáo dục</td><td>Mộc</td><td>Đông</td><td>Cây xanh, sách</td></tr>
                <tr><td>Spa, nước</td><td>Thủy</td><td>Bắc</td><td>Đài phun, bể cá</td></tr>
            </table>
            <div class="tip-box">
                <strong>Mẹo:</strong> Đặt Tỳ Hưu (貔貅) quay mặt ra cửa — linh vật thu hút tài lộc, chỉ ăn không nhả.
            </div>
        `
    },
    'colors-materials': {
        icon: '🎨',
        title: 'Màu Sắc & Vật Liệu',
        category: 'office',
        level: 'intermediate',
        connections: ['five-elements', 'living-room', 'bedroom'],
        simple: `
            <h3>🎨 Màu Sắc & Vật Liệu</h3>
            <p>Mỗi màu sắc và vật liệu thuộc một <strong>Hành</strong> trong Ngũ Hành, ảnh hưởng đến năng lượng không gian.</p>
            <div class="example-box">
                <strong>Nhớ nhanh:</strong><br>
                🟢 Xanh lá = Mộc • 🔴 Đỏ = Hỏa • 🟡 Vàng = Thổ<br>
                ⚪ Trắng = Kim • ⚫ Đen = Thủy
            </div>
        `,
        detail: `
            <h3>📊 Màu sắc chi tiết</h3>
            <h4>Bảng màu Ngũ Hành</h4>
            <table>
                <tr><th>Hành</th><th>Màu chính</th><th>Vật liệu</th><th>Hình dạng</th></tr>
                <tr><td>🌳 Mộc</td><td>Xanh lá, xanh ngọc</td><td>Gỗ, tre, mây</td><td>Hình trụ, cao</td></tr>
                <tr><td>🔥 Hỏa</td><td>Đỏ, cam, hồng</td><td>Nến, đèn, da</td><td>Tam giác, nhọn</td></tr>
                <tr><td>🏔️ Thổ</td><td>Vàng, nâu, be</td><td>Gốm, đá, gạch</td><td>Vuông, phẳng</td></tr>
                <tr><td>🪙 Kim</td><td>Trắng, bạc, vàng kim</td><td>Thép, đồng, nhôm</td><td>Tròn, cong</td></tr>
                <tr><td>💧 Thủy</td><td>Đen, xanh dương</td><td>Kính, gương, nước</td><td>Lượn sóng</td></tr>
            </table>
            <h4>Cách chọn màu cho phòng</h4>
            <ul>
                <li>Xác định Hành của hướng phòng</li>
                <li>Dùng màu Hành tương sinh (hỗ trợ)</li>
                <li>Tránh màu Hành tương khắc</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 Ứng dụng nâng cao</h3>
            <h4>Chọn màu theo bản mệnh</h4>
            <p>Ngoài hướng phòng, bản mệnh cá nhân cũng quan trọng:</p>
            <ul>
                <li><strong>Mệnh Mộc:</strong> Hợp xanh lá, đen (Thủy sinh Mộc). Kỵ trắng (Kim khắc Mộc)</li>
                <li><strong>Mệnh Hỏa:</strong> Hợp đỏ, xanh lá (Mộc sinh Hỏa). Kỵ đen (Thủy khắc Hỏa)</li>
                <li><strong>Mệnh Thổ:</strong> Hợp vàng, đỏ (Hỏa sinh Thổ). Kỵ xanh lá (Mộc khắc Thổ)</li>
                <li><strong>Mệnh Kim:</strong> Hợp trắng, vàng (Thổ sinh Kim). Kỵ đỏ (Hỏa khắc Kim)</li>
                <li><strong>Mệnh Thủy:</strong> Hợp đen, trắng (Kim sinh Thủy). Kỵ vàng (Thổ khắc Thủy)</li>
            </ul>
            <div class="tip-box">
                <strong>Mẹo:</strong> Khi hai người sống chung có mệnh khắc nhau, dùng màu của Hành trung gian. VD: Mộc và Kim → thêm Thủy (đen/xanh dương).
            </div>
        `
    }
};
