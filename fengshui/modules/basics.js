// Feng Shui Basics - Core concepts
const fengshuiBasicsData = {
    'what-is-fengshui': {
        icon: '☯️',
        title: 'Phong Thủy Là Gì',
        category: 'basics',
        level: 'beginner',
        connections: ['yin-yang', 'chi-energy', 'five-elements'],
        simple: `
            <h3>☯️ Phong Thủy là gì?</h3>
            <p><strong>Phong Thủy</strong> (風水) nghĩa đen là "gió và nước" — là nghệ thuật sắp xếp không gian sống hài hòa với dòng chảy năng lượng tự nhiên.</p>
            <div class="example-box">
                <strong>Ví dụ đơn giản:</strong> Bạn cảm thấy thoải mái hơn khi ngồi quay lưng vào tường thay vì quay lưng ra cửa — đó chính là phong thủy!
            </div>
            <h4>Mục đích của phong thủy</h4>
            <ul>
                <li><strong>Sức khỏe:</strong> Tạo không gian sống lành mạnh</li>
                <li><strong>Tài lộc:</strong> Thu hút năng lượng thịnh vượng</li>
                <li><strong>Hòa hợp:</strong> Cân bằng các yếu tố trong không gian</li>
            </ul>
        `,
        detail: `
            <h3>📜 Lịch sử Phong Thủy</h3>
            <p>Phong Thủy có nguồn gốc hơn <strong>3.000 năm</strong> từ Trung Quốc cổ đại, ban đầu dùng để chọn vị trí xây dựng cung điện và mộ phần.</p>
            <h4>Hai trường phái chính</h4>
            <table>
                <tr><th>Trường phái</th><th>Đặc điểm</th></tr>
                <tr><td>Loan Đầu (Hình Thế)</td><td>Dựa trên địa hình, núi non, sông ngòi</td></tr>
                <tr><td>Lý Khí</td><td>Dựa trên la bàn, hướng, thời gian</td></tr>
            </table>
            <h4>Triết lý nền tảng</h4>
            <ul>
                <li><strong>Khí (氣):</strong> Năng lượng vũ trụ chảy khắp nơi</li>
                <li><strong>Âm Dương:</strong> Hai lực đối lập bổ sung nhau</li>
                <li><strong>Ngũ Hành:</strong> Năm yếu tố tạo nên vạn vật</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 Phong Thủy trong bối cảnh hiện đại</h3>
            <h4>Phong Thủy vs Khoa học</h4>
            <p>Nhiều nguyên tắc phong thủy trùng khớp với nghiên cứu tâm lý môi trường:</p>
            <ul>
                <li><strong>Ánh sáng tự nhiên:</strong> Nghiên cứu chứng minh tăng năng suất 15-20%</li>
                <li><strong>Cây xanh:</strong> Giảm stress, lọc không khí (NASA Clean Air Study)</li>
                <li><strong>Bố trí bàn:</strong> "Command position" giảm lo âu theo tâm lý học</li>
            </ul>
            <h4>Các hệ thống phong thủy</h4>
            <ul>
                <li><strong>Bát Trạch:</strong> Dựa trên năm sinh, 8 nhóm hướng tốt/xấu</li>
                <li><strong>Huyền Không (Flying Stars):</strong> Kết hợp thời gian + không gian</li>
                <li><strong>Bát Tự (Tứ Trụ):</strong> Ngày giờ tháng năm sinh</li>
            </ul>
            <div class="tip-box">
                <strong>Lưu ý:</strong> Phong thủy tốt nhất khi kết hợp nhiều trường phái, không nên dựa vào một phương pháp duy nhất.
            </div>
        `
    },
    'yin-yang': {
        icon: '☯️',
        title: 'Âm Dương',
        category: 'basics',
        level: 'beginner',
        connections: ['what-is-fengshui', 'chi-energy', 'five-elements'],
        simple: `
            <h3>☯️ Âm Dương là gì?</h3>
            <p><strong>Âm Dương</strong> là hai lực đối lập nhưng bổ sung cho nhau, tạo nên sự cân bằng trong vũ trụ.</p>
            <div class="example-box">
                <strong>Ví dụ:</strong><br>
                • Sáng (Dương) ↔ Tối (Âm)<br>
                • Nóng (Dương) ↔ Lạnh (Âm)<br>
                • Động (Dương) ↔ Tĩnh (Âm)
            </div>
            <h4>Trong nhà ở</h4>
            <ul>
                <li><strong>Phòng khách:</strong> Dương — sáng, động, ấm</li>
                <li><strong>Phòng ngủ:</strong> Âm — tối, tĩnh, mát</li>
            </ul>
        `,
        detail: `
            <h3>📊 Nguyên lý Âm Dương chi tiết</h3>
            <h4>4 Nguyên tắc cơ bản</h4>
            <ol>
                <li><strong>Đối lập:</strong> Âm và Dương luôn đối nghịch (nóng-lạnh, sáng-tối)</li>
                <li><strong>Hỗ căn:</strong> Không có Âm thì không có Dương và ngược lại</li>
                <li><strong>Tiêu trưởng:</strong> Âm Dương luôn biến đổi, khi Âm tăng thì Dương giảm</li>
                <li><strong>Chuyển hóa:</strong> Âm cực sinh Dương, Dương cực sinh Âm</li>
            </ol>
            <h4>Bảng phân loại</h4>
            <table>
                <tr><th>Dương</th><th>Âm</th></tr>
                <tr><td>Mặt trời, lửa</td><td>Mặt trăng, nước</td></tr>
                <tr><td>Hướng Nam</td><td>Hướng Bắc</td></tr>
                <tr><td>Số lẻ</td><td>Số chẵn</td></tr>
                <tr><td>Màu sáng, ấm</td><td>Màu tối, lạnh</td></tr>
            </table>
        `,
        advanced: `
            <h3>🎓 Ứng dụng Âm Dương nâng cao</h3>
            <h4>Cân bằng Âm Dương trong không gian</h4>
            <p>Một không gian quá Dương (quá sáng, quá ồn) gây căng thẳng. Quá Âm (quá tối, quá tĩnh) gây trì trệ.</p>
            <div class="warning-box">
                <strong>Dấu hiệu mất cân bằng:</strong>
                <ul>
                    <li>Quá Dương: Hay cãi nhau, mất ngủ, nóng nảy</li>
                    <li>Quá Âm: Buồn chán, thiếu động lực, hay ốm</li>
                </ul>
            </div>
            <h4>Cách điều chỉnh</h4>
            <ul>
                <li><strong>Tăng Dương:</strong> Thêm ánh sáng, màu ấm, âm nhạc, cây hoa</li>
                <li><strong>Tăng Âm:</strong> Rèm cửa, đèn dịu, nước, đá tự nhiên</li>
            </ul>
        `
    },
    'chi-energy': {
        icon: '🌀',
        title: 'Khí (Chi/Qi)',
        category: 'basics',
        level: 'beginner',
        connections: ['what-is-fengshui', 'yin-yang', 'entrance'],
        simple: `
            <h3>🌀 Khí là gì?</h3>
            <p><strong>Khí (氣)</strong> là năng lượng sống chảy khắp vũ trụ và trong mọi không gian. Phong thủy tập trung vào việc dẫn dắt dòng Khí tốt vào nhà.</p>
            <div class="example-box">
                <strong>Hình dung:</strong> Khí giống như dòng nước — chảy nhẹ nhàng qua nhà bạn, mang theo năng lượng tốt lành.
            </div>
            <h4>3 loại Khí</h4>
            <ul>
                <li><strong>Sinh Khí (吉氣):</strong> Năng lượng tốt, mang lại may mắn</li>
                <li><strong>Sát Khí (煞氣):</strong> Năng lượng xấu, gây hại</li>
                <li><strong>Tử Khí (死氣):</strong> Năng lượng tù đọng, trì trệ</li>
            </ul>
        `,
        detail: `
            <h3>📊 Dòng chảy Khí chi tiết</h3>
            <h4>Tụ Khí vs Tán Khí</h4>
            <table>
                <tr><th>Tụ Khí (tốt)</th><th>Tán Khí (xấu)</th></tr>
                <tr><td>Không gian rộng, thoáng</td><td>Cửa trước thẳng cửa sau</td></tr>
                <tr><td>Đường cong uốn lượn</td><td>Đường thẳng dài (sát khí)</td></tr>
                <tr><td>Cây xanh, nước chảy</td><td>Góc nhọn chĩa vào nhà</td></tr>
            </table>
            <h4>Dấu hiệu nhận biết</h4>
            <ul>
                <li><strong>Khí tốt:</strong> Cảm giác thoải mái, dễ chịu khi vào phòng</li>
                <li><strong>Khí xấu:</strong> Cảm giác nặng nề, bức bối, không muốn ở lâu</li>
                <li><strong>Khí tù:</strong> Không khí ẩm mốc, bụi bặm, đồ đạc bừa bộn</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 Khí trong phong thủy nâng cao</h3>
            <h4>Nguyên tắc "Khí thuận phong tắc tán, giới thủy tắc chỉ"</h4>
            <p>Câu nói nền tảng của phong thủy: <em>"Khí gặp gió thì tán, gặp nước thì dừng."</em></p>
            <div class="formula-box">
                Mục tiêu: Tàng phong tụ khí (藏風聚氣) — Che gió, tụ khí
            </div>
            <h4>Cách điều chỉnh dòng Khí</h4>
            <ul>
                <li><strong>Gương:</strong> Phản xạ và hướng dẫn Khí</li>
                <li><strong>Cây xanh:</strong> Lọc Khí xấu, tạo Sinh Khí</li>
                <li><strong>Nước chảy:</strong> Giữ Khí, tạo năng lượng động</li>
                <li><strong>Chuông gió:</strong> Phân tán Sát Khí thành Sinh Khí</li>
                <li><strong>Ánh sáng:</strong> Kích hoạt và tăng cường Khí</li>
            </ul>
        `
    },
    'five-elements': {
        icon: '🔥',
        title: 'Ngũ Hành',
        category: 'basics',
        level: 'intermediate',
        connections: ['yin-yang', 'bagua-map', 'colors-materials', 'kitchen'],
        simple: `
            <h3>🔥 Ngũ Hành là gì?</h3>
            <p><strong>Ngũ Hành</strong> gồm 5 yếu tố: Kim (🪙), Mộc (🌳), Thủy (💧), Hỏa (🔥), Thổ (🏔️) — tạo nên mọi thứ trong vũ trụ.</p>
            <div class="example-box">
                <strong>Nhớ dễ:</strong> Thủy sinh Mộc → Mộc sinh Hỏa → Hỏa sinh Thổ → Thổ sinh Kim → Kim sinh Thủy
            </div>
        `,
        detail: `
            <h3>📊 Ngũ Hành chi tiết</h3>
            <h4>Tương Sinh (hỗ trợ)</h4>
            <ul>
                <li>💧 Thủy sinh 🌳 Mộc (nước nuôi cây)</li>
                <li>🌳 Mộc sinh 🔥 Hỏa (gỗ cháy thành lửa)</li>
                <li>🔥 Hỏa sinh 🏔️ Thổ (tro tàn thành đất)</li>
                <li>🏔️ Thổ sinh 🪙 Kim (đất chứa khoáng sản)</li>
                <li>🪙 Kim sinh 💧 Thủy (kim loại ngưng tụ nước)</li>
            </ul>
            <h4>Tương Khắc (xung đột)</h4>
            <ul>
                <li>💧 Thủy khắc 🔥 Hỏa (nước dập lửa)</li>
                <li>🔥 Hỏa khắc 🪙 Kim (lửa nấu chảy kim loại)</li>
                <li>🪙 Kim khắc 🌳 Mộc (rìu chặt cây)</li>
                <li>🌳 Mộc khắc 🏔️ Thổ (rễ cây phá đất)</li>
                <li>🏔️ Thổ khắc 💧 Thủy (đê ngăn nước)</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 Ứng dụng Ngũ Hành nâng cao</h3>
            <h4>Bảng thuộc tính Ngũ Hành</h4>
            <table>
                <tr><th>Hành</th><th>Hướng</th><th>Màu</th><th>Hình dạng</th><th>Mùa</th></tr>
                <tr><td>🌳 Mộc</td><td>Đông</td><td>Xanh lá</td><td>Hình trụ</td><td>Xuân</td></tr>
                <tr><td>🔥 Hỏa</td><td>Nam</td><td>Đỏ</td><td>Tam giác</td><td>Hạ</td></tr>
                <tr><td>🏔️ Thổ</td><td>Trung tâm</td><td>Vàng</td><td>Vuông</td><td>Cuối hạ</td></tr>
                <tr><td>🪙 Kim</td><td>Tây</td><td>Trắng</td><td>Tròn</td><td>Thu</td></tr>
                <tr><td>💧 Thủy</td><td>Bắc</td><td>Đen</td><td>Lượn sóng</td><td>Đông</td></tr>
            </table>
            <div class="tip-box">
                <strong>Mẹo:</strong> Để hóa giải xung khắc, thêm hành trung gian. VD: Kim khắc Mộc → thêm Thủy (Kim sinh Thủy sinh Mộc).
            </div>
        `
    }
};
