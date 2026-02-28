// Beauty Basics - Core concepts
const beautyBasicsData = {
    'skin-structure': {
        icon: '🧬',
        title: 'Da Hoạt Động Như Thế Nào',
        category: 'basics',
        level: 'beginner',
        connections: ['skin-types', 'beauty-routine', 'moisturizing'],
        simple: `
            <h3>🧬 Da hoạt động như thế nào?</h3>
            <p><strong>Da</strong> là cơ quan lớn nhất cơ thể, bảo vệ bạn khỏi môi trường bên ngoài.</p>
            <div class="example-box">
                <strong>3 lớp da chính:</strong><br>
                • Biểu bì (Epidermis) - lớp ngoài cùng<br>
                • Hạ bì (Dermis) - chứa collagen, elastin<br>
                • Mô dưới da (Hypodermis) - lớp mỡ
            </div>
            <h4>Chức năng của da</h4>
            <ul>
                <li><strong>Bảo vệ:</strong> Ngăn vi khuẩn, tia UV</li>
                <li><strong>Điều hòa:</strong> Giữ nhiệt độ cơ thể</li>
                <li><strong>Cảm giác:</strong> Nhận biết nóng, lạnh, đau</li>
            </ul>
        `,
        detail: `
            <h3>📊 Cấu trúc da chi tiết</h3>
            <h4>Biểu bì (Epidermis)</h4>
            <p>Lớp ngoài cùng, liên tục tái tạo mỗi 28 ngày.</p>
            <ul>
                <li><strong>Lớp sừng:</strong> Tế bào chết bảo vệ</li>
                <li><strong>Lớp hạt:</strong> Sản xuất keratin</li>
                <li><strong>Lớp gai:</strong> Tế bào Langerhans (miễn dịch)</li>
                <li><strong>Lớp đáy:</strong> Tế bào gốc, melanocyte</li>
            </ul>
            <h4>Hạ bì (Dermis)</h4>
            <table>
                <tr><th>Thành phần</th><th>Chức năng</th></tr>
                <tr><td>Collagen</td><td>Độ săn chắc, cấu trúc</td></tr>
                <tr><td>Elastin</td><td>Độ đàn hồi</td></tr>
                <tr><td>Hyaluronic acid</td><td>Giữ nước, dưỡng ẩm</td></tr>
            </table>
        `,
        advanced: `
            <h3>🎓 Sinh học da nâng cao</h3>
            <h4>Hàng rào bảo vệ da (Skin Barrier)</h4>
            <p>Cấu trúc "gạch và vữa" của lớp sừng:</p>
            <ul>
                <li><strong>Gạch:</strong> Tế bào sừng (corneocytes)</li>
                <li><strong>Vữa:</strong> Ceramides, cholesterol, fatty acids</li>
            </ul>
            <div class="warning-box">
                <strong>⚠️ Khi hàng rào da bị hỏng:</strong> Da khô, kích ứng, viêm, mụn, lão hóa sớm.
            </div>
            <h4>pH da</h4>
            <p>Da khỏe có pH khoảng <strong>4.5 - 5.5</strong> (hơi acid). Sử dụng sản phẩm có pH phù hợp giúp duy trì hàng rào bảo vệ.</p>
            <h4>Chu kỳ tái tạo da</h4>
            <ul>
                <li>Tuổi 20: ~28 ngày</li>
                <li>Tuổi 30: ~35-40 ngày</li>
                <li>Tuổi 40+: ~45-60 ngày</li>
            </ul>
        `
    },
    'skin-types': {
        icon: '🔍',
        title: 'Các Loại Da',
        category: 'basics',
        level: 'beginner',
        connections: ['skin-structure', 'beauty-routine', 'cleansing'],
        simple: `
            <h3>🔍 Các loại da</h3>
            <p>Hiểu loại da giúp bạn chọn sản phẩm phù hợp.</p>
            <div class="example-box">
                <strong>5 loại da chính:</strong><br>
                • Da thường (Normal)<br>
                • Da dầu (Oily)<br>
                • Da khô (Dry)<br>
                • Da hỗn hợp (Combination)<br>
                • Da nhạy cảm (Sensitive)
            </div>
            <div class="tip-box">
                <strong>💡 Mẹo:</strong> Rửa mặt, đợi 30 phút không thoa gì. Quan sát da để xác định loại da.
            </div>
        `,
        detail: `
            <h3>📊 Chi tiết từng loại da</h3>
            <table>
                <tr><th>Loại da</th><th>Đặc điểm</th><th>Chăm sóc</th></tr>
                <tr><td>Da thường</td><td>Cân bằng, ít vấn đề</td><td>Duy trì cơ bản</td></tr>
                <tr><td>Da dầu</td><td>Lỗ chân lông to, bóng nhờn</td><td>Làm sạch kỹ, dưỡng ẩm nhẹ</td></tr>
                <tr><td>Da khô</td><td>Căng, bong tróc, xỉn màu</td><td>Dưỡng ẩm sâu, tránh tẩy mạnh</td></tr>
                <tr><td>Da hỗn hợp</td><td>Dầu vùng T, khô hai bên</td><td>Chăm sóc theo vùng</td></tr>
                <tr><td>Da nhạy cảm</td><td>Dễ đỏ, kích ứng</td><td>Sản phẩm dịu nhẹ, ít thành phần</td></tr>
            </table>
            <h4>Yếu tố ảnh hưởng loại da</h4>
            <ul>
                <li><strong>Di truyền:</strong> Quyết định phần lớn</li>
                <li><strong>Hormone:</strong> Thay đổi theo tuổi, chu kỳ</li>
                <li><strong>Môi trường:</strong> Thời tiết, ô nhiễm</li>
                <li><strong>Lối sống:</strong> Ăn uống, giấc ngủ, stress</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 Phân tích da chuyên sâu</h3>
            <h4>Thang Fitzpatrick (Phototype)</h4>
            <p>Phân loại da theo phản ứng với tia UV:</p>
            <table>
                <tr><th>Type</th><th>Đặc điểm</th><th>Phản ứng UV</th></tr>
                <tr><td>I</td><td>Rất trắng</td><td>Luôn cháy, không rám</td></tr>
                <tr><td>II</td><td>Trắng</td><td>Dễ cháy, ít rám</td></tr>
                <tr><td>III</td><td>Trung bình</td><td>Đôi khi cháy, rám dần</td></tr>
                <tr><td>IV</td><td>Olive</td><td>Ít cháy, dễ rám</td></tr>
                <tr><td>V-VI</td><td>Nâu-Đen</td><td>Hiếm cháy, rám đậm</td></tr>
            </table>
            <h4>Tình trạng da vs Loại da</h4>
            <p><strong>Loại da</strong> ít thay đổi, nhưng <strong>tình trạng da</strong> (mụn, nám, lão hóa) có thể cải thiện bằng chăm sóc đúng cách.</p>
        `
    },
    'beauty-routine': {
        icon: '📋',
        title: 'Quy Trình Chăm Sóc Cơ Bản',
        category: 'basics',
        level: 'beginner',
        connections: ['cleansing', 'moisturizing', 'sunscreen', 'skin-types'],
        simple: `
            <h3>📋 Quy trình chăm sóc cơ bản</h3>
            <p>Một quy trình đơn giản nhưng hiệu quả cho mọi loại da.</p>
            <div class="example-box">
                <strong>Buổi sáng:</strong><br>
                1. Rửa mặt → 2. Dưỡng ẩm → 3. Chống nắng<br><br>
                <strong>Buổi tối:</strong><br>
                1. Tẩy trang → 2. Rửa mặt → 3. Dưỡng ẩm
            </div>
            <div class="tip-box">
                <strong>💡 Nguyên tắc vàng:</strong> Đơn giản, kiên trì, và luôn dùng kem chống nắng!
            </div>
        `,
        detail: `
            <h3>📊 Quy trình chi tiết</h3>
            <h4>Buổi sáng (AM Routine)</h4>
            <ol>
                <li><strong>Làm sạch:</strong> Sữa rửa mặt dịu nhẹ</li>
                <li><strong>Toner:</strong> Cân bằng pH (tùy chọn)</li>
                <li><strong>Serum:</strong> Vitamin C chống oxy hóa</li>
                <li><strong>Dưỡng ẩm:</strong> Cream hoặc gel tùy da</li>
                <li><strong>Chống nắng:</strong> SPF 30+ (bắt buộc!)</li>
            </ol>
            <h4>Buổi tối (PM Routine)</h4>
            <ol>
                <li><strong>Tẩy trang:</strong> Dầu/nước tẩy trang</li>
                <li><strong>Rửa mặt:</strong> Sữa rửa mặt</li>
                <li><strong>Toner:</strong> Cân bằng, cấp ẩm</li>
                <li><strong>Serum/Treatment:</strong> Retinol, AHA/BHA</li>
                <li><strong>Dưỡng ẩm:</strong> Cream dưỡng ban đêm</li>
            </ol>
        `,
        advanced: `
            <h3>🎓 Tùy chỉnh quy trình nâng cao</h3>
            <h4>Nguyên tắc layering (xếp lớp)</h4>
            <p>Thoa từ lỏng → đặc, từ pH thấp → cao:</p>
            <ol>
                <li>Tẩy trang dầu (oil-based)</li>
                <li>Sữa rửa mặt (water-based)</li>
                <li>Toner/Essence</li>
                <li>Serum (active ingredients)</li>
                <li>Eye cream</li>
                <li>Moisturizer</li>
                <li>Face oil (seal)</li>
                <li>Sunscreen (AM only)</li>
            </ol>
            <div class="warning-box">
                <strong>⚠️ Không nên kết hợp:</strong>
                <ul>
                    <li>Vitamin C + Niacinamide (cùng lúc)</li>
                    <li>AHA/BHA + Retinol (cùng lúc)</li>
                    <li>Benzoyl Peroxide + Retinol</li>
                </ul>
            </div>
        `
    },
    'ingredients-101': {
        icon: '🧪',
        title: 'Thành Phần Mỹ Phẩm',
        category: 'basics',
        level: 'intermediate',
        connections: ['serums', 'moisturizing', 'anti-aging'],
        simple: `
            <h3>🧪 Thành phần mỹ phẩm cơ bản</h3>
            <p>Hiểu thành phần giúp bạn chọn sản phẩm thông minh.</p>
            <div class="example-box">
                <strong>Các thành phần phổ biến:</strong><br>
                • Hyaluronic Acid - giữ ẩm<br>
                • Niacinamide - làm sáng, se lỗ chân lông<br>
                • Retinol - chống lão hóa<br>
                • Vitamin C - chống oxy hóa, sáng da
            </div>
        `,
        detail: `
            <h3>📊 Bảng thành phần chi tiết</h3>
            <table>
                <tr><th>Thành phần</th><th>Công dụng</th><th>Phù hợp</th></tr>
                <tr><td>Hyaluronic Acid</td><td>Giữ ẩm gấp 1000 lần</td><td>Mọi loại da</td></tr>
                <tr><td>Niacinamide (B3)</td><td>Se lỗ chân lông, sáng da</td><td>Da dầu, hỗn hợp</td></tr>
                <tr><td>Retinol (Vit A)</td><td>Chống lão hóa, tái tạo</td><td>Da trưởng thành</td></tr>
                <tr><td>Vitamin C</td><td>Chống oxy hóa, đều màu</td><td>Mọi loại da</td></tr>
                <tr><td>Salicylic Acid</td><td>Trị mụn, thông thoáng</td><td>Da dầu, mụn</td></tr>
                <tr><td>Ceramides</td><td>Phục hồi hàng rào da</td><td>Da khô, nhạy cảm</td></tr>
            </table>
        `,
        advanced: `
            <h3>🎓 Đọc bảng thành phần (INCI)</h3>
            <h4>Quy tắc đọc INCI</h4>
            <ul>
                <li>Thành phần liệt kê từ <strong>nhiều → ít</strong></li>
                <li>Dưới 1% có thể liệt kê tùy ý</li>
                <li>Tên Latin = thành phần tự nhiên</li>
            </ul>
            <h4>Thành phần cần tránh</h4>
            <ul>
                <li><strong>Paraben:</strong> Chất bảo quản gây tranh cãi</li>
                <li><strong>SLS/SLES:</strong> Tạo bọt mạnh, có thể kích ứng</li>
                <li><strong>Fragrance:</strong> Hương liệu tổng hợp, dễ gây dị ứng</li>
                <li><strong>Alcohol denat:</strong> Làm khô da (khác fatty alcohol)</li>
            </ul>
            <div class="tip-box">
                <strong>💡 Phân biệt:</strong> Cetyl alcohol, cetearyl alcohol là <em>fatty alcohols</em>, tốt cho da. Chỉ tránh alcohol denat, SD alcohol.
            </div>
        `
    }
};
