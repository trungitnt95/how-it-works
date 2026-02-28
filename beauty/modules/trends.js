// Beauty Trends - Xu hướng làm đẹp
const beautyTrendsData = {
    'korean-beauty': {
        icon: '🇰🇷',
        title: 'K-Beauty',
        category: 'trends',
        level: 'beginner',
        connections: ['beauty-routine', 'cleansing', 'moisturizing', 'natural-beauty'],
        simple: `
            <h3>🇰🇷 K-Beauty</h3>
            <p><strong>K-Beauty</strong> (Korean Beauty) là xu hướng chăm sóc da từ Hàn Quốc, nổi tiếng với quy trình nhiều bước.</p>
            <div class="example-box">
                <strong>Triết lý K-Beauty:</strong><br>
                • Phòng ngừa hơn chữa trị<br>
                • Da glass skin (trong suốt, căng bóng)<br>
                • Chăm sóc da = ritual hàng ngày<br>
                • Thành phần tự nhiên, dịu nhẹ
            </div>
        `,
        detail: `
            <h3>📊 Quy trình 10 bước K-Beauty</h3>
            <ol>
                <li><strong>Oil cleanser</strong> - Tẩy trang dầu</li>
                <li><strong>Water cleanser</strong> - Sữa rửa mặt</li>
                <li><strong>Exfoliator</strong> - Tẩy tế bào chết (2x/tuần)</li>
                <li><strong>Toner</strong> - Cân bằng pH</li>
                <li><strong>Essence</strong> - Cấp ẩm, tái tạo</li>
                <li><strong>Serum/Ampoule</strong> - Điều trị chuyên sâu</li>
                <li><strong>Sheet mask</strong> - Mặt nạ giấy (2-3x/tuần)</li>
                <li><strong>Eye cream</strong> - Kem mắt</li>
                <li><strong>Moisturizer</strong> - Dưỡng ẩm</li>
                <li><strong>Sunscreen</strong> - Chống nắng (AM)</li>
            </ol>
            <h4>Sản phẩm K-Beauty đặc trưng</h4>
            <ul>
                <li><strong>Essence:</strong> Sáng chế Hàn Quốc, giữa toner và serum</li>
                <li><strong>Sheet mask:</strong> Phổ biến nhờ tiện lợi, hiệu quả</li>
                <li><strong>Cushion compact:</strong> BB cream trong hộp phấn</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 K-Beauty: Xu hướng mới</h3>
            <h4>Skip-Care (Bỏ bớt bước)</h4>
            <p>Xu hướng mới: giảm bớt số bước, tập trung vào sản phẩm đa năng.</p>
            <h4>Thành phần K-Beauty nổi bật</h4>
            <table>
                <tr><th>Thành phần</th><th>Nguồn gốc</th><th>Tác dụng</th></tr>
                <tr><td>Snail mucin</td><td>Dịch ốc sên</td><td>Phục hồi, dưỡng ẩm</td></tr>
                <tr><td>Centella Asiatica</td><td>Rau má</td><td>Kháng viêm, chữa lành</td></tr>
                <tr><td>Propolis</td><td>Keo ong</td><td>Kháng khuẩn, dưỡng ẩm</td></tr>
                <tr><td>Rice extract</td><td>Gạo</td><td>Sáng da, mịn da</td></tr>
                <tr><td>Mugwort</td><td>Ngải cứu</td><td>Kháng viêm, làm dịu</td></tr>
            </table>
            <div class="tip-box">
                <strong>💡 Xu hướng:</strong> "Skinimalism" - chọn ít sản phẩm nhưng chất lượng cao, phù hợp nhất với da mình.
            </div>
        `
    },
    'natural-beauty': {
        icon: '🌿',
        title: 'Mỹ Phẩm Tự Nhiên',
        category: 'trends',
        level: 'beginner',
        connections: ['ingredients-101', 'korean-beauty', 'sustainable-beauty'],
        simple: `
            <h3>🌿 Mỹ phẩm tự nhiên</h3>
            <p><strong>Mỹ phẩm tự nhiên</strong> sử dụng nguyên liệu từ thiên nhiên, ít hóa chất.</p>
            <div class="example-box">
                <strong>Nguyên liệu tự nhiên phổ biến:</strong><br>
                • Dầu dừa - dưỡng ẩm<br>
                • Mật ong - kháng khuẩn<br>
                • Nha đam - làm dịu<br>
                • Trà xanh - chống oxy hóa<br>
                • Nghệ - kháng viêm
            </div>
        `,
        detail: `
            <h3>📊 Natural vs Clean vs Organic</h3>
            <table>
                <tr><th>Thuật ngữ</th><th>Ý nghĩa</th><th>Chứng nhận</th></tr>
                <tr><td>Natural</td><td>Từ thiên nhiên, ít chế biến</td><td>Không bắt buộc</td></tr>
                <tr><td>Clean</td><td>Không chứa thành phần "có hại"</td><td>Không tiêu chuẩn chung</td></tr>
                <tr><td>Organic</td><td>Nguyên liệu hữu cơ, không thuốc trừ sâu</td><td>USDA, Ecocert</td></tr>
                <tr><td>Vegan</td><td>Không nguyên liệu động vật</td><td>Leaping Bunny, PETA</td></tr>
            </table>
            <h4>DIY mỹ phẩm tự nhiên</h4>
            <ul>
                <li><strong>Mặt nạ mật ong:</strong> Mật ong + bột nghệ - kháng khuẩn, sáng da</li>
                <li><strong>Toner hoa hồng:</strong> Nước hoa hồng + glycerin - cân bằng, dưỡng ẩm</li>
                <li><strong>Scrub cà phê:</strong> Bã cà phê + dầu dừa - tẩy tế bào chết body</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 Sự thật về "tự nhiên"</h3>
            <h4>Natural ≠ An toàn</h4>
            <div class="warning-box">
                <strong>⚠️ Lưu ý:</strong>
                <ul>
                    <li>Tinh dầu nguyên chất có thể gây kích ứng nghiêm trọng</li>
                    <li>Chanh + nắng = phytophotodermatitis (bỏng da)</li>
                    <li>Baking soda có pH 9 - phá hủy hàng rào da</li>
                    <li>"Natural" không có định nghĩa pháp lý rõ ràng</li>
                </ul>
            </div>
            <h4>Preservative Paradox</h4>
            <p>Mỹ phẩm tự nhiên "không chất bảo quản" có nguy cơ:</p>
            <ul>
                <li>Vi khuẩn, nấm mốc phát triển</li>
                <li>Oxy hóa, mất hiệu lực</li>
                <li>Hạn sử dụng rất ngắn</li>
            </ul>
            <div class="tip-box">
                <strong>💡 Cân bằng:</strong> Chọn sản phẩm với thành phần tự nhiên HIỆU QUẢ + chất bảo quản AN TOÀN (như phenoxyethanol, potassium sorbate).
            </div>
        `
    },
    'tech-beauty': {
        icon: '🔬',
        title: 'Công Nghệ Làm Đẹp',
        category: 'trends',
        level: 'advanced',
        connections: ['anti-aging', 'sustainable-beauty', 'ingredients-101'],
        simple: `
            <h3>🔬 Công nghệ làm đẹp</h3>
            <p><strong>Công nghệ</strong> đang cách mạng hóa ngành làm đẹp.</p>
            <div class="example-box">
                <strong>Công nghệ làm đẹp phổ biến:</strong><br>
                • LED therapy - liệu pháp ánh sáng<br>
                • Microcurrent - kích thích cơ mặt<br>
                • AI skin analysis - phân tích da bằng AI<br>
                • Personalized skincare - mỹ phẩm cá nhân hóa
            </div>
        `,
        detail: `
            <h3>📊 Thiết bị làm đẹp tại nhà</h3>
            <table>
                <tr><th>Thiết bị</th><th>Công nghệ</th><th>Tác dụng</th></tr>
                <tr><td>LED Mask</td><td>Red/Blue/NIR light</td><td>Collagen, trị mụn</td></tr>
                <tr><td>Microcurrent</td><td>Dòng điện vi mô</td><td>Nâng cơ, săn chắc</td></tr>
                <tr><td>Derma roller</td><td>Microneedling</td><td>Kích thích collagen</td></tr>
                <tr><td>Ultrasonic</td><td>Sóng siêu âm</td><td>Làm sạch sâu, thẩm thấu</td></tr>
                <tr><td>IPL device</td><td>Intense Pulsed Light</td><td>Triệt lông, trẻ hóa</td></tr>
            </table>
            <h4>LED Light Therapy</h4>
            <ul>
                <li><strong>Red (630-660nm):</strong> Kích thích collagen, chống lão hóa</li>
                <li><strong>Blue (415-445nm):</strong> Diệt vi khuẩn P. acnes, trị mụn</li>
                <li><strong>NIR (830nm):</strong> Giảm viêm, phục hồi sâu</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 Tương lai của làm đẹp</h3>
            <h4>Biotech Ingredients</h4>
            <ul>
                <li><strong>Lab-grown collagen:</strong> Collagen nuôi cấy trong phòng thí nghiệm, không từ động vật</li>
                <li><strong>Biomimetic peptides:</strong> Peptide mô phỏng tín hiệu tế bào</li>
                <li><strong>Epigenetics skincare:</strong> Tác động lên biểu hiện gen, không thay đổi DNA</li>
                <li><strong>Microbiome skincare:</strong> Prebiotics/Probiotics cho hệ vi sinh da</li>
            </ul>
            <h4>AI & Personalization</h4>
            <table>
                <tr><th>Công nghệ</th><th>Ứng dụng</th></tr>
                <tr><td>AI Skin Analysis</td><td>Phân tích da qua ảnh, đề xuất sản phẩm</td></tr>
                <tr><td>DNA-based skincare</td><td>Tùy chỉnh theo gen di truyền</td></tr>
                <tr><td>3D-printed makeup</td><td>Foundation pha riêng theo tone da</td></tr>
                <tr><td>Smart mirrors</td><td>AR try-on, theo dõi da theo thời gian</td></tr>
            </table>
            <div class="tip-box">
                <strong>💡 Xu hướng:</strong> Tương lai là "precision beauty" - mỹ phẩm chính xác, cá nhân hóa dựa trên dữ liệu sinh học của mỗi người.
            </div>
        `
    },
    'sustainable-beauty': {
        icon: '♻️',
        title: 'Làm Đẹp Bền Vững',
        category: 'trends',
        level: 'intermediate',
        connections: ['natural-beauty', 'tech-beauty', 'korean-beauty'],
        simple: `
            <h3>♻️ Làm đẹp bền vững</h3>
            <p><strong>Sustainable beauty</strong> là làm đẹp có trách nhiệm với môi trường.</p>
            <div class="example-box">
                <strong>Nguyên tắc bền vững:</strong><br>
                • Bao bì tái chế/tái sử dụng<br>
                • Thành phần có nguồn gốc bền vững<br>
                • Không thử nghiệm trên động vật<br>
                • Giảm thiểu carbon footprint
            </div>
            <div class="tip-box">
                <strong>💡 Mẹo:</strong> Mua ít hơn, chọn tốt hơn, dùng hết sản phẩm trước khi mua mới.
            </div>
        `,
        detail: `
            <h3>📊 Thực hành làm đẹp bền vững</h3>
            <h4>Bao bì xanh</h4>
            <table>
                <tr><th>Loại</th><th>Ví dụ</th><th>Tác động</th></tr>
                <tr><td>Refillable</td><td>Bao bì nạp lại</td><td>Giảm 70% nhựa</td></tr>
                <tr><td>Waterless</td><td>Sản phẩm dạng rắn</td><td>Giảm vận chuyển, bao bì</td></tr>
                <tr><td>PCR Plastic</td><td>Nhựa tái chế</td><td>Giảm nhựa nguyên sinh</td></tr>
                <tr><td>Glass/Aluminum</td><td>Thủy tinh, nhôm</td><td>Tái chế vô hạn</td></tr>
            </table>
            <h4>Chứng nhận cần tìm</h4>
            <ul>
                <li><strong>Leaping Bunny:</strong> Không thử nghiệm động vật</li>
                <li><strong>B Corp:</strong> Doanh nghiệp có trách nhiệm</li>
                <li><strong>Ecocert/COSMOS:</strong> Organic/Natural</li>
                <li><strong>Fair Trade:</strong> Thương mại công bằng</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 Tác động môi trường của ngành mỹ phẩm</h3>
            <h4>Con số đáng suy nghĩ</h4>
            <ul>
                <li>120 tỷ bao bì mỹ phẩm/năm toàn cầu</li>
                <li>Phần lớn KHÔNG được tái chế</li>
                <li>Microplastics trong scrub gây ô nhiễm đại dương</li>
                <li>Palm oil - nguyên liệu phổ biến, liên quan đến phá rừng</li>
            </ul>
            <h4>Greenwashing - Rửa xanh</h4>
            <div class="warning-box">
                <strong>⚠️ Cẩn thận với:</strong>
                <ul>
                    <li>"100% natural" nhưng chỉ 1 thành phần natural</li>
                    <li>Bao bì xanh lá nhưng không thực sự eco</li>
                    <li>"Clean" không có tiêu chuẩn pháp lý</li>
                    <li>Quảng cáo "không paraben" nhưng thay bằng chất bảo quản tệ hơn</li>
                </ul>
            </div>
            <h4>Circular Beauty</h4>
            <p>Mô hình kinh tế tuần hoàn trong mỹ phẩm:</p>
            <ol>
                <li><strong>Design:</strong> Thiết kế để tái chế từ đầu</li>
                <li><strong>Produce:</strong> Sản xuất sạch, nguồn gốc bền vững</li>
                <li><strong>Use:</strong> Sản phẩm đa năng, dùng hết</li>
                <li><strong>Return:</strong> Thu hồi bao bì, tái chế/upcycle</li>
            </ol>
        `
    }
};
