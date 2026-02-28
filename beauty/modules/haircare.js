// Hair Care - Chăm sóc tóc
const hairCareData = {
    'hair-types': {
        icon: '💇',
        title: 'Các Loại Tóc',
        category: 'haircare',
        level: 'beginner',
        connections: ['hair-washing', 'hair-treatment', 'hair-styling'],
        simple: `
            <h3>💇 Các loại tóc</h3>
            <p>Hiểu loại tóc giúp bạn chăm sóc đúng cách.</p>
            <div class="example-box">
                <strong>4 loại tóc chính:</strong><br>
                • Type 1: Tóc thẳng<br>
                • Type 2: Tóc gợn sóng<br>
                • Type 3: Tóc xoăn<br>
                • Type 4: Tóc xoắn
            </div>
            <div class="tip-box">
                <strong>💡 Mẹo:</strong> Xác định loại tóc khi tóc khô tự nhiên, không dùng sản phẩm tạo kiểu.
            </div>
        `,
        detail: `
            <h3>📊 Phân loại tóc chi tiết</h3>
            <h4>Theo cấu trúc (Andre Walker System)</h4>
            <table>
                <tr><th>Loại</th><th>Phân loại</th><th>Đặc điểm</th></tr>
                <tr><td>1A</td><td>Thẳng mềm</td><td>Mỏng, dễ bết</td></tr>
                <tr><td>1B</td><td>Thẳng trung bình</td><td>Giữ kiểu tốt hơn</td></tr>
                <tr><td>2A-2C</td><td>Gợn sóng</td><td>S-wave, xù nhẹ</td></tr>
                <tr><td>3A-3C</td><td>Xoăn</td><td>Lọn xoăn rõ ràng</td></tr>
                <tr><td>4A-4C</td><td>Xoắn</td><td>Xoắn chặt, co lại nhiều</td></tr>
            </table>
            <h4>Theo độ dày sợi tóc</h4>
            <ul>
                <li><strong>Fine (mảnh):</strong> Sợi nhỏ, dễ gãy</li>
                <li><strong>Medium (trung bình):</strong> Phổ biến nhất</li>
                <li><strong>Coarse (thô):</strong> Sợi to, khó tạo kiểu</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 Cấu trúc sợi tóc</h3>
            <h4>3 lớp của sợi tóc</h4>
            <ul>
                <li><strong>Cuticle (lớp vảy):</strong> Lớp bảo vệ ngoài cùng, như ngói xếp chồng</li>
                <li><strong>Cortex (lớp vỏ):</strong> Chứa keratin, melanin, quyết định màu sắc và độ bền</li>
                <li><strong>Medulla (lõi):</strong> Lớp trong cùng, không phải sợi nào cũng có</li>
            </ul>
            <h4>Độ xốp (Porosity)</h4>
            <table>
                <tr><th>Loại</th><th>Đặc điểm</th><th>Chăm sóc</th></tr>
                <tr><td>Low porosity</td><td>Cuticle đóng chặt, khó hấp thụ</td><td>Sản phẩm nhẹ, nhiệt giúp mở cuticle</td></tr>
                <tr><td>Normal porosity</td><td>Cân bằng</td><td>Duy trì cơ bản</td></tr>
                <tr><td>High porosity</td><td>Cuticle mở, mất ẩm nhanh</td><td>Protein treatment, seal bằng oil</td></tr>
            </table>
            <div class="tip-box">
                <strong>💡 Test porosity:</strong> Thả sợi tóc sạch vào cốc nước. Nổi = low, giữa = normal, chìm = high.
            </div>
        `
    },
    'hair-washing': {
        icon: '🚿',
        title: 'Gội Đầu Đúng Cách',
        category: 'haircare',
        level: 'beginner',
        connections: ['hair-types', 'hair-treatment'],
        simple: `
            <h3>🚿 Gội đầu đúng cách</h3>
            <p>Cách gội đầu ảnh hưởng lớn đến sức khỏe tóc.</p>
            <div class="example-box">
                <strong>Các bước gội đầu:</strong><br>
                1. Xả nước ấm, ướt tóc hoàn toàn<br>
                2. Gội shampoo ở da đầu, massage nhẹ<br>
                3. Xả sạch<br>
                4. Dầu xả ở thân và đuôi tóc<br>
                5. Xả lại bằng nước mát
            </div>
            <div class="tip-box">
                <strong>💡 Mẹo:</strong> Gội 2-3 lần/tuần là đủ. Gội hàng ngày có thể làm khô da đầu.
            </div>
        `,
        detail: `
            <h3>📊 Chọn shampoo phù hợp</h3>
            <table>
                <tr><th>Loại tóc/da đầu</th><th>Shampoo phù hợp</th><th>Tần suất</th></tr>
                <tr><td>Da đầu dầu</td><td>Clarifying, tea tree</td><td>2-3 ngày/lần</td></tr>
                <tr><td>Da đầu khô</td><td>Moisturizing, sulfate-free</td><td>3-4 ngày/lần</td></tr>
                <tr><td>Tóc nhuộm</td><td>Color-safe, sulfate-free</td><td>2-3 ngày/lần</td></tr>
                <tr><td>Tóc xoăn</td><td>Co-wash hoặc sulfate-free</td><td>Tùy nhu cầu</td></tr>
            </table>
            <h4>Conditioner đúng cách</h4>
            <ul>
                <li>Chỉ thoa từ <strong>giữa thân đến đuôi tóc</strong></li>
                <li>Không thoa lên da đầu (gây bết)</li>
                <li>Để 2-3 phút cho thấm</li>
                <li>Xả bằng nước mát để đóng cuticle</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 Khoa học gội đầu</h3>
            <h4>Sulfate vs Sulfate-free</h4>
            <ul>
                <li><strong>Sulfate (SLS, SLES):</strong> Tẩy rửa mạnh, tạo bọt nhiều, có thể strip dầu tự nhiên</li>
                <li><strong>Sulfate-free:</strong> Dịu nhẹ hơn, giữ ẩm tốt hơn, ít bọt</li>
            </ul>
            <h4>pH Shampoo</h4>
            <div class="formula-box">
                pH lý tưởng cho shampoo: 4.5 - 5.5<br>
                (Gần với pH tự nhiên của da đầu)
            </div>
            <h4>Co-wash (Conditioner wash)</h4>
            <p>Gội bằng dầu xả, phù hợp cho tóc xoăn/xoắn:</p>
            <ul>
                <li>Làm sạch nhẹ nhàng mà không mất ẩm</li>
                <li>Giữ lọn xoăn defined</li>
                <li>Xen kẽ với shampoo clarifying 1-2 lần/tháng</li>
            </ul>
        `
    },
    'hair-treatment': {
        icon: '💆',
        title: 'Phục Hồi Tóc',
        category: 'haircare',
        level: 'intermediate',
        connections: ['hair-types', 'hair-coloring', 'hair-washing'],
        simple: `
            <h3>💆 Phục hồi tóc</h3>
            <p><strong>Phục hồi tóc</strong> giúp tóc hư tổn trở nên khỏe mạnh.</p>
            <div class="example-box">
                <strong>Dấu hiệu tóc hư tổn:</strong><br>
                • Chẻ ngọn, gãy rụng<br>
                • Khô, xơ, không bóng<br>
                • Rối, khó chải<br>
                • Mất đàn hồi
            </div>
            <div class="tip-box">
                <strong>💡 Mẹo:</strong> Đắp mặt nạ tóc 1 lần/tuần để duy trì sức khỏe tóc.
            </div>
        `,
        detail: `
            <h3>📊 Các phương pháp phục hồi</h3>
            <table>
                <tr><th>Phương pháp</th><th>Tác dụng</th><th>Tần suất</th></tr>
                <tr><td>Hair mask</td><td>Dưỡng ẩm sâu</td><td>1 lần/tuần</td></tr>
                <tr><td>Protein treatment</td><td>Bổ sung keratin</td><td>1-2 lần/tháng</td></tr>
                <tr><td>Hot oil treatment</td><td>Nuôi dưỡng, bóng tóc</td><td>1-2 lần/tháng</td></tr>
                <tr><td>Leave-in conditioner</td><td>Bảo vệ hàng ngày</td><td>Mỗi lần gội</td></tr>
                <tr><td>Hair serum/oil</td><td>Seal ẩm, chống xù</td><td>Hàng ngày</td></tr>
            </table>
            <h4>Dầu dưỡng tóc</h4>
            <ul>
                <li><strong>Argan oil:</strong> Đa năng, mọi loại tóc</li>
                <li><strong>Coconut oil:</strong> Thấm sâu, giảm mất protein</li>
                <li><strong>Jojoba oil:</strong> Nhẹ, giống sebum tự nhiên</li>
                <li><strong>Castor oil:</strong> Dày tóc, kích thích mọc</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 Protein-Moisture Balance</h3>
            <h4>Cân bằng Protein - Ẩm</h4>
            <p>Tóc khỏe cần cân bằng giữa protein (cấu trúc) và ẩm (mềm mại):</p>
            <ul>
                <li><strong>Thừa protein:</strong> Tóc cứng, giòn, dễ gãy</li>
                <li><strong>Thiếu protein:</strong> Tóc nhũn, không giữ kiểu</li>
                <li><strong>Thừa ẩm:</strong> Tóc bết, nặng, không bounce</li>
                <li><strong>Thiếu ẩm:</strong> Tóc khô, xù, chẻ ngọn</li>
            </ul>
            <div class="formula-box">
                Test: Kéo sợi tóc ướt<br>
                Giãn và đàn hồi → cân bằng tốt<br>
                Giãn không đàn hồi → thừa ẩm/thiếu protein<br>
                Đứt ngay → thiếu ẩm/thừa protein
            </div>
            <h4>Keratin Treatment</h4>
            <p>Liệu pháp phủ keratin lên sợi tóc:</p>
            <ul>
                <li>Làm mượt, giảm xù 3-6 tháng</li>
                <li>Chứa formaldehyde (một số loại) - cần cẩn thận</li>
                <li>Không phải "chữa" mà là "phủ" tạm thời</li>
            </ul>
        `
    },
    'hair-styling': {
        icon: '✂️',
        title: 'Tạo Kiểu Tóc',
        category: 'haircare',
        level: 'intermediate',
        connections: ['hair-types', 'hair-treatment', 'hair-coloring'],
        simple: `
            <h3>✂️ Tạo kiểu tóc</h3>
            <p><strong>Tạo kiểu</strong> giúp thay đổi diện mạo và thể hiện cá tính.</p>
            <div class="example-box">
                <strong>Công cụ tạo kiểu phổ biến:</strong><br>
                • Máy sấy tóc<br>
                • Máy uốn tóc (curling iron)<br>
                • Máy ép tóc (flat iron)<br>
                • Lô cuốn (rollers)
            </div>
            <div class="tip-box">
                <strong>💡 Mẹo:</strong> Luôn dùng xịt bảo vệ nhiệt trước khi dùng máy sấy/uốn/ép!
            </div>
        `,
        detail: `
            <h3>📊 Kỹ thuật tạo kiểu</h3>
            <h4>Sấy tóc đúng cách</h4>
            <ol>
                <li>Thấm khô bằng khăn (không xoa mạnh)</li>
                <li>Xịt heat protectant</li>
                <li>Sấy hướng xuống theo chiều tóc</li>
                <li>Nhiệt trung bình, cách tóc 15cm</li>
                <li>Sấy mát cuối cùng để set kiểu</li>
            </ol>
            <h4>Sản phẩm tạo kiểu</h4>
            <table>
                <tr><th>Sản phẩm</th><th>Tác dụng</th><th>Tóc phù hợp</th></tr>
                <tr><td>Mousse</td><td>Tạo phồng, giữ nếp</td><td>Tóc mỏng, gợn sóng</td></tr>
                <tr><td>Gel</td><td>Giữ nếp mạnh, wet look</td><td>Tóc ngắn, xoăn</td></tr>
                <tr><td>Wax</td><td>Texture, tách lọn</td><td>Tóc ngắn, trung bình</td></tr>
                <tr><td>Sea salt spray</td><td>Texture bờ biển</td><td>Tóc sóng, dài</td></tr>
                <tr><td>Hair spray</td><td>Cố định cuối cùng</td><td>Mọi loại</td></tr>
            </table>
        `,
        advanced: `
            <h3>🎓 Nhiệt và tóc</h3>
            <h4>Nhiệt độ an toàn</h4>
            <table>
                <tr><th>Loại tóc</th><th>Nhiệt độ tối đa</th></tr>
                <tr><td>Mảnh, hư tổn</td><td>120-150°C</td></tr>
                <tr><td>Trung bình, khỏe</td><td>150-180°C</td></tr>
                <tr><td>Thô, dày</td><td>180-210°C</td></tr>
            </table>
            <div class="warning-box">
                <strong>⚠️ Tổn thương nhiệt:</strong> Trên 150°C, nước trong tóc bốc hơi tạo "bong bóng" trong cortex, gây gãy không thể phục hồi.
            </div>
            <h4>Heat protectant hoạt động thế nào</h4>
            <ul>
                <li><strong>Silicones:</strong> Tạo lớp phủ cách nhiệt</li>
                <li><strong>Keratin/Protein:</strong> Bổ sung cấu trúc</li>
                <li><strong>Panthenol:</strong> Giữ ẩm, linh hoạt</li>
            </ul>
        `
    },
    'hair-coloring': {
        icon: '🎨',
        title: 'Nhuộm Tóc',
        category: 'haircare',
        level: 'advanced',
        connections: ['hair-types', 'hair-treatment', 'hair-styling'],
        simple: `
            <h3>🎨 Nhuộm tóc</h3>
            <p><strong>Nhuộm tóc</strong> thay đổi màu sắc để tạo phong cách mới.</p>
            <div class="example-box">
                <strong>Các loại nhuộm:</strong><br>
                • Nhuộm tạm thời - rửa là bay<br>
                • Nhuộm bán vĩnh viễn - 6-12 lần gội<br>
                • Nhuộm vĩnh viễn - không phai<br>
                • Tẩy tóc - loại bỏ melanin
            </div>
        `,
        detail: `
            <h3>📊 Các kỹ thuật nhuộm</h3>
            <table>
                <tr><th>Kỹ thuật</th><th>Mô tả</th><th>Bảo trì</th></tr>
                <tr><td>Single process</td><td>Nhuộm toàn bộ một màu</td><td>4-6 tuần</td></tr>
                <tr><td>Highlights</td><td>Nhuộm sáng từng lọn</td><td>8-12 tuần</td></tr>
                <tr><td>Balayage</td><td>Quét tay tự do, tự nhiên</td><td>12-16 tuần</td></tr>
                <tr><td>Ombre</td><td>Gradient tối → sáng</td><td>12-16 tuần</td></tr>
                <tr><td>Color melt</td><td>Blend mượt nhiều tông</td><td>8-12 tuần</td></tr>
            </table>
            <h4>Chăm sóc tóc nhuộm</h4>
            <ul>
                <li>Dùng shampoo sulfate-free</li>
                <li>Nước lạnh khi gội để giữ màu</li>
                <li>Hair mask dưỡng ẩm 1 lần/tuần</li>
                <li>Tránh nhiệt quá nhiều</li>
                <li>Purple shampoo cho tóc tẩy (khử vàng)</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 Hóa học nhuộm tóc</h3>
            <h4>Cơ chế nhuộm vĩnh viễn</h4>
            <ol>
                <li><strong>Ammonia/MEA:</strong> Mở cuticle tóc</li>
                <li><strong>Hydrogen peroxide:</strong> Oxy hóa melanin tự nhiên</li>
                <li><strong>Phân tử màu nhỏ:</strong> Thâm nhập vào cortex</li>
                <li><strong>Phản ứng oxy hóa:</strong> Phân tử phình to, kẹt trong cortex</li>
            </ol>
            <h4>Levels & Tones</h4>
            <table>
                <tr><th>Level</th><th>Mô tả</th></tr>
                <tr><td>1-3</td><td>Đen - Nâu rất đậm</td></tr>
                <tr><td>4-6</td><td>Nâu trung bình - Nâu sáng</td></tr>
                <tr><td>7-9</td><td>Vàng sẫm - Vàng sáng</td></tr>
                <tr><td>10</td><td>Vàng rất sáng (platinum)</td></tr>
            </table>
            <div class="warning-box">
                <strong>⚠️ Tẩy tóc:</strong> Mỗi lần tẩy nâng 1-2 level. Tẩy quá mức phá hủy liên kết disulfide trong keratin → tóc giống "bông gòn", không phục hồi được.
            </div>
        `
    }
};
