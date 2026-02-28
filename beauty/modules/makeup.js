// Makeup - Trang điểm
const makeupData = {
    'base-makeup': {
        icon: '🎨',
        title: 'Nền Trang Điểm',
        category: 'makeup',
        level: 'beginner',
        connections: ['skin-types', 'lip-makeup', 'contouring'],
        simple: `
            <h3>🎨 Nền trang điểm</h3>
            <p><strong>Lớp nền</strong> là bước đầu tiên tạo nên một makeup look hoàn chỉnh.</p>
            <div class="example-box">
                <strong>Các bước tạo nền:</strong><br>
                1. Primer (lót) - giữ makeup lâu<br>
                2. Foundation (kem nền) - đều màu da<br>
                3. Concealer (che khuyết điểm)<br>
                4. Powder (phấn phủ) - kiềm dầu
            </div>
            <div class="tip-box">
                <strong>💡 Mẹo:</strong> Chọn kem nền đúng tone bằng cách test ở đường viền hàm, không phải tay!
            </div>
        `,
        detail: `
            <h3>📊 Các loại kem nền</h3>
            <table>
                <tr><th>Loại</th><th>Độ che phủ</th><th>Phù hợp</th></tr>
                <tr><td>Tinted Moisturizer</td><td>Rất nhẹ</td><td>Da đẹp, thường ngày</td></tr>
                <tr><td>BB/CC Cream</td><td>Nhẹ - Trung bình</td><td>Da ít khuyết điểm</td></tr>
                <tr><td>Liquid Foundation</td><td>Trung bình - Cao</td><td>Đa dạng loại da</td></tr>
                <tr><td>Powder Foundation</td><td>Nhẹ - Trung bình</td><td>Da dầu</td></tr>
                <tr><td>Stick Foundation</td><td>Cao</td><td>Che phủ tốt, dễ mang</td></tr>
            </table>
            <h4>Finish (kết cấu)</h4>
            <ul>
                <li><strong>Matte:</strong> Lì, kiềm dầu - da dầu</li>
                <li><strong>Dewy:</strong> Căng bóng, tươi tắn - da khô</li>
                <li><strong>Satin:</strong> Tự nhiên, giữa matte và dewy</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 Kỹ thuật nền chuyên nghiệp</h3>
            <h4>Công cụ tán nền</h4>
            <ul>
                <li><strong>Beauty sponge:</strong> Finish tự nhiên, thấm bớt product</li>
                <li><strong>Cọ nền:</strong> Che phủ tốt hơn, tiết kiệm</li>
                <li><strong>Tay:</strong> Ấm giúp tan chảy vào da, tự nhiên nhất</li>
            </ul>
            <h4>Undertone - Tông da</h4>
            <table>
                <tr><th>Undertone</th><th>Đặc điểm</th><th>Tông kem nền</th></tr>
                <tr><td>Warm</td><td>Tĩnh mạch xanh lá, da ánh vàng</td><td>Yellow, golden</td></tr>
                <tr><td>Cool</td><td>Tĩnh mạch xanh/tím, da ánh hồng</td><td>Pink, red</td></tr>
                <tr><td>Neutral</td><td>Hỗn hợp cả hai</td><td>Beige, buff</td></tr>
            </table>
            <div class="tip-box">
                <strong>💡 Pro tip:</strong> Mix 2 shade kem nền (sáng + tối) để có màu hoàn hảo theo mùa.
            </div>
        `
    },
    'eye-makeup': {
        icon: '👁️',
        title: 'Trang Điểm Mắt',
        category: 'makeup',
        level: 'intermediate',
        connections: ['base-makeup', 'color-theory', 'contouring'],
        simple: `
            <h3>👁️ Trang điểm mắt</h3>
            <p><strong>Mắt</strong> là điểm nhấn quan trọng nhất trên gương mặt.</p>
            <div class="example-box">
                <strong>Các sản phẩm trang điểm mắt:</strong><br>
                • Eyeshadow (phấn mắt)<br>
                • Eyeliner (kẻ mắt)<br>
                • Mascara (chuốt mi)<br>
                • Eyebrow (kẻ mày)
            </div>
            <div class="tip-box">
                <strong>💡 Mẹo:</strong> Luôn dùng primer mắt để phấn bám tốt và không bị chảy!
            </div>
        `,
        detail: `
            <h3>📊 Kỹ thuật trang điểm mắt</h3>
            <h4>Bản đồ mắt cơ bản</h4>
            <ul>
                <li><strong>Brow bone:</strong> Highlight nhẹ, sáng</li>
                <li><strong>Crease:</strong> Màu trung bình, tạo chiều sâu</li>
                <li><strong>Lid:</strong> Màu chủ đạo</li>
                <li><strong>Inner corner:</strong> Shimmer/sáng, mở to mắt</li>
                <li><strong>Outer V:</strong> Màu tối, tạo hình</li>
            </ul>
            <h4>Kẻ mắt theo dáng mắt</h4>
            <table>
                <tr><th>Dáng mắt</th><th>Kỹ thuật</th></tr>
                <tr><td>Mắt tròn</td><td>Wing kéo dài ra ngoài</td></tr>
                <tr><td>Mắt một mí</td><td>Kẻ dày hơn, eyeliner đậm</td></tr>
                <tr><td>Mắt cụp</td><td>Wing hướng lên trên</td></tr>
                <tr><td>Mắt to</td><td>Kẻ đậm toàn bộ mí</td></tr>
            </table>
        `,
        advanced: `
            <h3>🎓 Kỹ thuật nâng cao</h3>
            <h4>Cut Crease</h4>
            <p>Kỹ thuật tạo đường nét rõ ràng ở nếp gấp mắt:</p>
            <ol>
                <li>Blend màu tối ở crease</li>
                <li>Dùng concealer cắt đường nét</li>
                <li>Phủ màu sáng/shimmer lên mí</li>
            </ol>
            <h4>Smokey Eye</h4>
            <ol>
                <li>Sáng ở inner corner</li>
                <li>Trung bình ở lid</li>
                <li>Tối ở outer V và lash line</li>
                <li>Blend mượt mà, không ranh giới</li>
            </ol>
            <div class="tip-box">
                <strong>💡 Quy tắc blend:</strong> "Blend cho đến khi bạn nghĩ đủ, rồi blend thêm 2 phút nữa."
            </div>
        `
    },
    'lip-makeup': {
        icon: '💋',
        title: 'Trang Điểm Môi',
        category: 'makeup',
        level: 'beginner',
        connections: ['base-makeup', 'color-theory'],
        simple: `
            <h3>💋 Trang điểm môi</h3>
            <p><strong>Son môi</strong> là sản phẩm trang điểm được sử dụng phổ biến nhất.</p>
            <div class="example-box">
                <strong>Các loại son:</strong><br>
                • Son thỏi (Lipstick) - kinh điển<br>
                • Son kem (Liquid lipstick) - lâu trôi<br>
                • Son bóng (Lip gloss) - bóng, căng mọng<br>
                • Son dưỡng (Lip balm) - dưỡng ẩm, nhẹ màu
            </div>
        `,
        detail: `
            <h3>📊 Chọn son theo tone da</h3>
            <table>
                <tr><th>Tone da</th><th>Màu son phù hợp</th><th>Màu nên tránh</th></tr>
                <tr><td>Da trắng</td><td>Hồng, cam nhạt, nude hồng</td><td>Nâu quá đậm</td></tr>
                <tr><td>Da trung bình</td><td>Đỏ, hồng đào, cam</td><td>Nude quá nhạt</td></tr>
                <tr><td>Da ngăm</td><td>Đỏ đậm, berry, plum</td><td>Hồng nhạt</td></tr>
            </table>
            <h4>Finish son môi</h4>
            <ul>
                <li><strong>Matte:</strong> Lì, sang trọng, lâu trôi</li>
                <li><strong>Satin:</strong> Mịn, tự nhiên</li>
                <li><strong>Glossy:</strong> Bóng, căng mọng, trẻ trung</li>
                <li><strong>Velvet:</strong> Mịn như nhung, không bóng</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 Kỹ thuật môi nâng cao</h3>
            <h4>Ombre Lips (Môi gradient)</h4>
            <ol>
                <li>Che phủ môi bằng concealer</li>
                <li>Tô màu đậm ở giữa môi</li>
                <li>Blend ra ngoài viền</li>
                <li>Giữ viền môi nhạt hơn</li>
            </ol>
            <h4>Overlining - Môi dày hơn</h4>
            <ul>
                <li>Dùng lip liner màu nude vẽ ngoài viền tự nhiên 1-2mm</li>
                <li>Tập trung vào cung cupid (giữa môi trên)</li>
                <li>Kết hợp gloss ở giữa môi dưới để tạo ảo giác</li>
            </ul>
            <div class="warning-box">
                <strong>⚠️ Lưu ý:</strong> Overlining quá mức sẽ trông thiếu tự nhiên. Chỉ vẽ thêm tối đa 2mm.
            </div>
        `
    },
    'contouring': {
        icon: '🖌️',
        title: 'Tạo Khối',
        category: 'makeup',
        level: 'intermediate',
        connections: ['base-makeup', 'color-theory', 'eye-makeup'],
        simple: `
            <h3>🖌️ Tạo khối</h3>
            <p><strong>Contouring</strong> dùng ánh sáng và bóng tối để tạo chiều sâu cho khuôn mặt.</p>
            <div class="example-box">
                <strong>Nguyên tắc:</strong><br>
                • Tối (contour): Thu nhỏ, tạo bóng<br>
                • Sáng (highlight): Phóng to, nổi bật<br>
                • Hồng (blush): Tạo sắc hồng tự nhiên
            </div>
        `,
        detail: `
            <h3>📊 Vị trí tạo khối</h3>
            <h4>Contour (tối)</h4>
            <ul>
                <li>Dưới xương gò má (hóp má)</li>
                <li>Hai bên sống mũi (mũi thon)</li>
                <li>Đường viền hàm (V-line)</li>
                <li>Thái dương (thu hẹp trán)</li>
            </ul>
            <h4>Highlight (sáng)</h4>
            <ul>
                <li>Sống mũi</li>
                <li>Xương gò má cao</li>
                <li>Cung cupid (môi trên)</li>
                <li>Giữa trán</li>
            </ul>
            <h4>Sản phẩm</h4>
            <table>
                <tr><th>Dạng</th><th>Ưu điểm</th><th>Phù hợp</th></tr>
                <tr><td>Powder</td><td>Dễ dùng, kiềm dầu</td><td>Da dầu, người mới</td></tr>
                <tr><td>Cream</td><td>Tự nhiên, blend mượt</td><td>Da khô, chuyên nghiệp</td></tr>
                <tr><td>Stick</td><td>Tiện lợi, chính xác</td><td>Touch-up, đi du lịch</td></tr>
            </table>
        `,
        advanced: `
            <h3>🎓 Tạo khối theo dáng mặt</h3>
            <table>
                <tr><th>Dáng mặt</th><th>Mục tiêu</th><th>Kỹ thuật</th></tr>
                <tr><td>Tròn</td><td>Thon dài hơn</td><td>Contour mạnh ở má, hàm</td></tr>
                <tr><td>Vuông</td><td>Mềm mại hơn</td><td>Contour góc hàm, thái dương</td></tr>
                <tr><td>Dài</td><td>Ngắn hơn</td><td>Contour trán + cằm, blush ngang</td></tr>
                <tr><td>Trái tim</td><td>Cân đối hơn</td><td>Contour thái dương, highlight cằm</td></tr>
                <tr><td>Oval</td><td>Duy trì</td><td>Nhẹ nhàng, tự nhiên</td></tr>
            </table>
            <h4>Draping - Blush tạo khối</h4>
            <p>Dùng blush thay contour, mềm mại và tự nhiên hơn:</p>
            <ol>
                <li>Blush đậm ở hóp má (thay contour)</li>
                <li>Blush nhạt ở gò má cao</li>
                <li>Blend hai tông vào nhau</li>
            </ol>
        `
    },
    'color-theory': {
        icon: '🌈',
        title: 'Lý Thuyết Màu Sắc',
        category: 'makeup',
        level: 'advanced',
        connections: ['eye-makeup', 'lip-makeup', 'contouring', 'base-makeup'],
        simple: `
            <h3>🌈 Lý thuyết màu sắc</h3>
            <p>Hiểu <strong>màu sắc</strong> giúp bạn phối đồ trang điểm hoàn hảo.</p>
            <div class="example-box">
                <strong>Bánh xe màu cơ bản:</strong><br>
                • Màu bổ sung (đối diện): tương phản mạnh<br>
                • Màu liền kề: hài hòa, an toàn<br>
                • Màu tam giác: năng động, nổi bật
            </div>
        `,
        detail: `
            <h3>📊 Áp dụng vào trang điểm</h3>
            <h4>Color Correcting</h4>
            <table>
                <tr><th>Vấn đề</th><th>Màu bổ sung</th><th>Sản phẩm</th></tr>
                <tr><td>Quầng thâm (tím/xanh)</td><td>Cam/Đào</td><td>Corrector cam</td></tr>
                <tr><td>Đỏ (mụn, rosacea)</td><td>Xanh lá</td><td>Green primer</td></tr>
                <tr><td>Xỉn vàng</td><td>Tím/Lavender</td><td>Purple primer</td></tr>
                <tr><td>Nám nâu</td><td>Hồng</td><td>Pink corrector</td></tr>
            </table>
            <h4>Phối màu mắt</h4>
            <ul>
                <li><strong>Mắt nâu:</strong> Tím, xanh dương, vàng gold</li>
                <li><strong>Mắt đen:</strong> Hầu hết các màu, đặc biệt jewel tones</li>
                <li><strong>Mắt xanh:</strong> Cam, đồng, nâu ấm</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 Lý thuyết màu nâng cao</h3>
            <h4>Seasonal Color Analysis</h4>
            <p>Phân loại tông màu theo mùa:</p>
            <table>
                <tr><th>Mùa</th><th>Đặc điểm</th><th>Màu phù hợp</th></tr>
                <tr><td>Spring (Xuân)</td><td>Ấm, sáng</td><td>Peach, coral, warm gold</td></tr>
                <tr><td>Summer (Hè)</td><td>Lạnh, nhẹ</td><td>Rose, lavender, soft pink</td></tr>
                <tr><td>Autumn (Thu)</td><td>Ấm, trầm</td><td>Terracotta, olive, burnt orange</td></tr>
                <tr><td>Winter (Đông)</td><td>Lạnh, đậm</td><td>Berry, plum, cool red</td></tr>
            </table>
            <h4>Munsell Color System</h4>
            <ul>
                <li><strong>Hue (sắc):</strong> Tên màu (đỏ, xanh, vàng...)</li>
                <li><strong>Value (giá trị):</strong> Sáng hay tối</li>
                <li><strong>Chroma (độ bão hòa):</strong> Đậm hay nhạt</li>
            </ul>
            <div class="tip-box">
                <strong>💡 Pro tip:</strong> Trong trang điểm, quan trọng nhất là value (sáng/tối), sau đó mới đến hue (màu).
            </div>
        `
    }
};
