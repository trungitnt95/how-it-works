// Skincare - Chăm sóc da
const skincareData = {
    'cleansing': {
        icon: '🧼',
        title: 'Làm Sạch Da',
        category: 'skincare',
        level: 'beginner',
        connections: ['skin-types', 'beauty-routine', 'moisturizing'],
        simple: `
            <h3>🧼 Làm sạch da</h3>
            <p><strong>Làm sạch</strong> là bước quan trọng nhất trong chăm sóc da.</p>
            <div class="example-box">
                <strong>Các loại sản phẩm làm sạch:</strong><br>
                • Sữa rửa mặt dạng gel - da dầu<br>
                • Sữa rửa mặt dạng sữa - da khô<br>
                • Nước tẩy trang (micellar) - mọi loại da<br>
                • Dầu tẩy trang - tẩy makeup
            </div>
            <div class="tip-box">
                <strong>💡 Mẹo:</strong> Rửa mặt 2 lần/ngày. Nước ấm, không nóng!
            </div>
        `,
        detail: `
            <h3>📊 Phương pháp Double Cleansing</h3>
            <p><strong>Double cleansing</strong> (rửa mặt kép) là phương pháp 2 bước:</p>
            <ol>
                <li><strong>Bước 1 - Dầu:</strong> Tẩy trang dầu/balm hòa tan makeup, kem chống nắng</li>
                <li><strong>Bước 2 - Nước:</strong> Sữa rửa mặt loại bỏ bụi bẩn, bã nhờn</li>
            </ol>
            <h4>Chọn sữa rửa mặt theo loại da</h4>
            <table>
                <tr><th>Loại da</th><th>Sản phẩm phù hợp</th><th>pH lý tưởng</th></tr>
                <tr><td>Da dầu</td><td>Gel, foam có Salicylic Acid</td><td>5.0 - 5.5</td></tr>
                <tr><td>Da khô</td><td>Cream, milk cleanser</td><td>5.0 - 6.0</td></tr>
                <tr><td>Da nhạy cảm</td><td>Micellar, cream không mùi</td><td>5.0 - 5.5</td></tr>
                <tr><td>Da hỗn hợp</td><td>Gel nhẹ nhàng</td><td>5.0 - 5.5</td></tr>
            </table>
        `,
        advanced: `
            <h3>🎓 Khoa học làm sạch da</h3>
            <h4>Surfactants (chất hoạt động bề mặt)</h4>
            <p>Phân tử có 2 đầu: ưa nước + ưa dầu, giúp cuốn trôi bụi bẩn.</p>
            <ul>
                <li><strong>SLS/SLES:</strong> Mạnh, tạo bọt nhiều nhưng có thể kích ứng</li>
                <li><strong>Cocamidopropyl Betaine:</strong> Dịu nhẹ, phổ biến</li>
                <li><strong>Decyl Glucoside:</strong> Từ thực vật, rất dịu</li>
            </ul>
            <div class="warning-box">
                <strong>⚠️ Sai lầm phổ biến:</strong> Rửa mặt quá kỹ → phá hủy hàng rào da → da tiết dầu nhiều hơn (phản ứng bù).
            </div>
            <h4>Thời gian rửa mặt tối ưu</h4>
            <p>Massage nhẹ nhàng <strong>60 giây</strong> để sữa rửa mặt có thời gian hoạt động, nhưng không lâu hơn để tránh mất ẩm.</p>
        `
    },
    'moisturizing': {
        icon: '💧',
        title: 'Dưỡng Ẩm',
        category: 'skincare',
        level: 'beginner',
        connections: ['skin-structure', 'cleansing', 'serums', 'ingredients-101'],
        simple: `
            <h3>💧 Dưỡng ẩm</h3>
            <p><strong>Dưỡng ẩm</strong> giúp da mềm mại, khỏe mạnh và ngăn ngừa lão hóa.</p>
            <div class="example-box">
                <strong>Mọi loại da đều cần dưỡng ẩm!</strong><br>
                • Da dầu → Gel dưỡng ẩm nhẹ<br>
                • Da khô → Cream dưỡng ẩm đậm<br>
                • Da hỗn hợp → Lotion hoặc gel-cream
            </div>
            <div class="tip-box">
                <strong>💡 Mẹo:</strong> Thoa dưỡng ẩm khi da còn hơi ẩm để khóa nước!
            </div>
        `,
        detail: `
            <h3>📊 Các loại dưỡng ẩm</h3>
            <h4>3 cơ chế dưỡng ẩm</h4>
            <table>
                <tr><th>Loại</th><th>Cơ chế</th><th>Thành phần</th></tr>
                <tr><td>Humectant</td><td>Hút nước từ không khí</td><td>Hyaluronic Acid, Glycerin</td></tr>
                <tr><td>Emollient</td><td>Làm mềm, lấp đầy kẽ hở</td><td>Squalane, Ceramides</td></tr>
                <tr><td>Occlusive</td><td>Khóa ẩm, ngăn bay hơi</td><td>Petrolatum, Beeswax</td></tr>
            </table>
            <h4>Cách chọn theo loại da</h4>
            <ul>
                <li><strong>Da dầu:</strong> Ưu tiên humectant + emollient nhẹ</li>
                <li><strong>Da khô:</strong> Cần cả 3 loại, đặc biệt occlusive</li>
                <li><strong>Da nhạy cảm:</strong> Ceramides + ít thành phần</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 Khoa học dưỡng ẩm</h3>
            <h4>TEWL (Transepidermal Water Loss)</h4>
            <p>Lượng nước bốc hơi qua da. TEWL cao = hàng rào da yếu.</p>
            <div class="formula-box">
                Da khỏe: TEWL < 10 g/m²/h<br>
                Da tổn thương: TEWL > 25 g/m²/h
            </div>
            <h4>Hyaluronic Acid - Phân tử kỳ diệu</h4>
            <ul>
                <li><strong>High MW (>1000 kDa):</strong> Ở trên bề mặt, tạo màng ẩm</li>
                <li><strong>Low MW (<500 kDa):</strong> Thấm sâu hơn, dưỡng ẩm từ bên trong</li>
                <li><strong>Nano HA:</strong> Kích thước siêu nhỏ, thấm tốt nhất</li>
            </ul>
            <div class="warning-box">
                <strong>⚠️ Lưu ý:</strong> Ở nơi độ ẩm thấp (<40%), HA có thể hút ẩm từ da thay vì không khí. Cần kết hợp với occlusive.
            </div>
        `
    },
    'sunscreen': {
        icon: '☀️',
        title: 'Chống Nắng',
        category: 'skincare',
        level: 'beginner',
        connections: ['beauty-routine', 'anti-aging', 'skin-structure'],
        simple: `
            <h3>☀️ Chống nắng</h3>
            <p><strong>Kem chống nắng</strong> là sản phẩm quan trọng nhất để bảo vệ da.</p>
            <div class="example-box">
                <strong>Tại sao phải chống nắng?</strong><br>
                • Ngăn cháy nắng, ung thư da<br>
                • Ngăn nám, tàn nhang<br>
                • Ngăn lão hóa sớm (80% lão hóa do UV!)
            </div>
            <div class="tip-box">
                <strong>💡 Quy tắc:</strong> SPF 30+ mỗi ngày, kể cả trời mây. Thoa lại mỗi 2 giờ khi ở ngoài.
            </div>
        `,
        detail: `
            <h3>📊 Hiểu về chống nắng</h3>
            <h4>SPF là gì?</h4>
            <p><strong>Sun Protection Factor</strong> - chỉ số bảo vệ khỏi UVB:</p>
            <table>
                <tr><th>SPF</th><th>% UVB bị chặn</th><th>Phù hợp</th></tr>
                <tr><td>15</td><td>93%</td><td>Trong nhà</td></tr>
                <tr><td>30</td><td>97%</td><td>Hàng ngày</td></tr>
                <tr><td>50</td><td>98%</td><td>Ngoài trời</td></tr>
            </table>
            <h4>2 loại kem chống nắng</h4>
            <ul>
                <li><strong>Chemical (hóa học):</strong> Hấp thụ UV, nhẹ, dễ thoa. VD: Avobenzone, Octinoxate</li>
                <li><strong>Physical (vật lý):</strong> Phản xạ UV, an toàn hơn. VD: Zinc Oxide, Titanium Dioxide</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 Khoa học chống nắng</h3>
            <h4>UVA vs UVB vs UVC</h4>
            <table>
                <tr><th>Loại</th><th>Bước sóng</th><th>Tác hại</th></tr>
                <tr><td>UVA</td><td>320-400nm</td><td>Lão hóa, nám, xuyên qua kính</td></tr>
                <tr><td>UVB</td><td>280-320nm</td><td>Cháy nắng, ung thư da</td></tr>
                <tr><td>UVC</td><td>100-280nm</td><td>Bị tầng ozone chặn</td></tr>
            </table>
            <h4>Lượng thoa đủ</h4>
            <div class="formula-box">
                2mg/cm² = khoảng 1/4 thìa cà phê cho mặt<br>
                (Quy tắc 2 ngón tay)
            </div>
            <h4>PA System (Nhật Bản)</h4>
            <ul>
                <li><strong>PA+:</strong> Bảo vệ UVA thấp</li>
                <li><strong>PA++:</strong> Trung bình</li>
                <li><strong>PA+++:</strong> Cao</li>
                <li><strong>PA++++:</strong> Rất cao</li>
            </ul>
        `
    },
    'serums': {
        icon: '💎',
        title: 'Serum & Tinh Chất',
        category: 'skincare',
        level: 'intermediate',
        connections: ['ingredients-101', 'moisturizing', 'anti-aging', 'beauty-routine'],
        simple: `
            <h3>💎 Serum & tinh chất</h3>
            <p><strong>Serum</strong> là sản phẩm có nồng độ hoạt chất cao, thấm sâu vào da.</p>
            <div class="example-box">
                <strong>Serum phổ biến:</strong><br>
                • Vitamin C - sáng da, chống oxy hóa<br>
                • Hyaluronic Acid - dưỡng ẩm sâu<br>
                • Niacinamide - se lỗ chân lông<br>
                • Retinol - chống lão hóa
            </div>
        `,
        detail: `
            <h3>📊 Hướng dẫn chọn serum</h3>
            <table>
                <tr><th>Vấn đề da</th><th>Serum phù hợp</th><th>Nồng độ</th></tr>
                <tr><td>Da xỉn màu</td><td>Vitamin C</td><td>10-20%</td></tr>
                <tr><td>Da khô</td><td>Hyaluronic Acid</td><td>1-2%</td></tr>
                <tr><td>Lỗ chân lông to</td><td>Niacinamide</td><td>5-10%</td></tr>
                <tr><td>Nếp nhăn</td><td>Retinol</td><td>0.025-1%</td></tr>
                <tr><td>Mụn</td><td>Salicylic Acid</td><td>0.5-2%</td></tr>
                <tr><td>Thâm mụn</td><td>Alpha Arbutin</td><td>1-2%</td></tr>
            </table>
            <h4>Cách dùng serum đúng</h4>
            <ol>
                <li>Sau toner, trước dưỡng ẩm</li>
                <li>2-3 giọt cho toàn mặt</li>
                <li>Vỗ nhẹ, không xoa mạnh</li>
                <li>Đợi 1-2 phút cho thấm</li>
            </ol>
        `,
        advanced: `
            <h3>🎓 Serum nâng cao</h3>
            <h4>Vitamin C - Các dạng</h4>
            <ul>
                <li><strong>L-Ascorbic Acid:</strong> Mạnh nhất, pH <3.5, dễ oxy hóa</li>
                <li><strong>Ascorbyl Glucoside:</strong> Ổn định, nhẹ nhàng hơn</li>
                <li><strong>Ethyl Ascorbic Acid:</strong> Ổn định + hiệu quả</li>
                <li><strong>Ascorbyl Tetraisopalmitate:</strong> Tan trong dầu, ít kích ứng</li>
            </ul>
            <h4>Kết hợp serum thông minh</h4>
            <div class="tip-box">
                <strong>✅ Kết hợp tốt:</strong>
                <ul>
                    <li>Vitamin C + Vitamin E + Ferulic Acid (tăng hiệu quả 8 lần)</li>
                    <li>Niacinamide + Hyaluronic Acid</li>
                    <li>Peptides + Hyaluronic Acid</li>
                </ul>
            </div>
            <div class="warning-box">
                <strong>❌ Không kết hợp:</strong>
                <ul>
                    <li>Vitamin C (acid) + Niacinamide (cùng lúc, có thể kích ứng)</li>
                    <li>AHA/BHA + Retinol (quá mạnh)</li>
                </ul>
            </div>
        `
    },
    'exfoliation': {
        icon: '✨',
        title: 'Tẩy Tế Bào Chết',
        category: 'skincare',
        level: 'intermediate',
        connections: ['cleansing', 'serums', 'skin-structure'],
        simple: `
            <h3>✨ Tẩy tế bào chết</h3>
            <p><strong>Tẩy tế bào chết</strong> loại bỏ lớp da chết, giúp da sáng mịn hơn.</p>
            <div class="example-box">
                <strong>2 loại tẩy tế bào chết:</strong><br>
                • Vật lý (Physical): Hạt scrub, bàn chải<br>
                • Hóa học (Chemical): AHA, BHA, PHA
            </div>
            <div class="tip-box">
                <strong>💡 Mẹo:</strong> Tẩy tế bào chết 1-2 lần/tuần. Không lạm dụng!
            </div>
        `,
        detail: `
            <h3>📊 So sánh chi tiết</h3>
            <table>
                <tr><th>Loại</th><th>Ưu điểm</th><th>Nhược điểm</th></tr>
                <tr><td>AHA (Glycolic, Lactic)</td><td>Sáng da, giữ ẩm</td><td>Tăng nhạy cảm UV</td></tr>
                <tr><td>BHA (Salicylic)</td><td>Thông lỗ chân lông, trị mụn</td><td>Có thể khô da</td></tr>
                <tr><td>PHA (Gluconolactone)</td><td>Dịu nhẹ, chống oxy hóa</td><td>Hiệu quả thấp hơn</td></tr>
                <tr><td>Scrub vật lý</td><td>Kết quả tức thì</td><td>Dễ gây tổn thương micro</td></tr>
            </table>
            <h4>Nồng độ khuyến nghị</h4>
            <ul>
                <li><strong>Glycolic Acid:</strong> 5-10% (tại nhà), 30-70% (clinic)</li>
                <li><strong>Salicylic Acid:</strong> 0.5-2%</li>
                <li><strong>Lactic Acid:</strong> 5-10%</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 Cơ chế tẩy tế bào chết</h3>
            <h4>AHA - Alpha Hydroxy Acids</h4>
            <p>Tan trong nước, hoạt động trên bề mặt da:</p>
            <ul>
                <li>Phá vỡ liên kết desmosomes giữa tế bào sừng</li>
                <li>Kích thích sản xuất collagen</li>
                <li>Tăng độ dày lớp hạ bì</li>
            </ul>
            <h4>BHA - Beta Hydroxy Acids</h4>
            <p>Tan trong dầu, xâm nhập vào lỗ chân lông:</p>
            <ul>
                <li>Hòa tan bã nhờn bên trong lỗ chân lông</li>
                <li>Kháng viêm tự nhiên</li>
                <li>Lý tưởng cho da dầu, mụn</li>
            </ul>
            <div class="warning-box">
                <strong>⚠️ Quá tẩy (Over-exfoliation):</strong> Da đỏ, rát, bong tróc, nhạy cảm. Ngừng tẩy, tập trung phục hồi hàng rào da.
            </div>
        `
    },
    'anti-aging': {
        icon: '⏳',
        title: 'Chống Lão Hóa',
        category: 'skincare',
        level: 'advanced',
        connections: ['serums', 'sunscreen', 'collagen', 'ingredients-101'],
        simple: `
            <h3>⏳ Chống lão hóa</h3>
            <p><strong>Lão hóa da</strong> là quá trình tự nhiên, nhưng có thể làm chậm lại.</p>
            <div class="example-box">
                <strong>Dấu hiệu lão hóa:</strong><br>
                • Nếp nhăn, rãnh nhăn<br>
                • Da chảy xệ, mất đàn hồi<br>
                • Đốm nâu, xỉn màu<br>
                • Lỗ chân lông to hơn
            </div>
            <div class="tip-box">
                <strong>💡 Bí quyết #1:</strong> Kem chống nắng là sản phẩm chống lão hóa tốt nhất!
            </div>
        `,
        detail: `
            <h3>📊 Chiến lược chống lão hóa</h3>
            <h4>Top thành phần chống lão hóa</h4>
            <table>
                <tr><th>Thành phần</th><th>Tác dụng</th><th>Bắt đầu từ tuổi</th></tr>
                <tr><td>Retinol/Retinoid</td><td>Kích thích collagen, tái tạo</td><td>25-30</td></tr>
                <tr><td>Vitamin C</td><td>Chống oxy hóa, sáng da</td><td>20+</td></tr>
                <tr><td>Peptides</td><td>Tín hiệu sản xuất collagen</td><td>30+</td></tr>
                <tr><td>Niacinamide</td><td>Cải thiện texture, đều màu</td><td>20+</td></tr>
                <tr><td>Sunscreen</td><td>Ngăn 80% lão hóa ngoại sinh</td><td>Mọi tuổi</td></tr>
            </table>
            <h4>Quy trình anti-aging</h4>
            <ol>
                <li>Sáng: Vitamin C → Dưỡng ẩm → SPF</li>
                <li>Tối: Retinol → Peptides → Dưỡng ẩm đậm</li>
            </ol>
        `,
        advanced: `
            <h3>🎓 Khoa học lão hóa da</h3>
            <h4>Lão hóa nội sinh vs Ngoại sinh</h4>
            <ul>
                <li><strong>Nội sinh (Intrinsic):</strong> Do gen, thời gian - không thể tránh</li>
                <li><strong>Ngoại sinh (Extrinsic):</strong> UV, ô nhiễm, hút thuốc - có thể phòng ngừa</li>
            </ul>
            <h4>Retinoids - Tiêu chuẩn vàng</h4>
            <p>Thứ tự mạnh dần:</p>
            <ol>
                <li>Retinyl Palmitate (nhẹ nhất)</li>
                <li>Retinol</li>
                <li>Retinaldehyde</li>
                <li>Adapalene (kê đơn)</li>
                <li>Tretinoin (kê đơn, mạnh nhất)</li>
            </ol>
            <div class="tip-box">
                <strong>💡 Quy tắc bắt đầu Retinol:</strong> Thấp và chậm. Bắt đầu 0.025%, 2 lần/tuần, tăng dần.
            </div>
            <h4>Gốc tự do & Chống oxy hóa</h4>
            <p>UV tạo gốc tự do → phá hủy collagen, DNA → lão hóa. Chống oxy hóa (Vit C, E, Ferulic Acid) trung hòa gốc tự do.</p>
        `
    }
};
