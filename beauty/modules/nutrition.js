// Nutrition & Beauty - Dinh dưỡng và làm đẹp
const nutritionBeautyData = {
    'vitamins-beauty': {
        icon: '💊',
        title: 'Vitamin Cho Làm Đẹp',
        category: 'nutrition',
        level: 'beginner',
        connections: ['collagen', 'antioxidants', 'diet-skin'],
        simple: `
            <h3>💊 Vitamin cho làm đẹp</h3>
            <p><strong>Vitamin</strong> là chất thiết yếu giúp da, tóc, móng khỏe đẹp từ bên trong.</p>
            <div class="example-box">
                <strong>Vitamin quan trọng:</strong><br>
                • Vitamin A - tái tạo da<br>
                • Vitamin C - sáng da, collagen<br>
                • Vitamin E - chống oxy hóa<br>
                • Vitamin D - sức khỏe da<br>
                • Biotin (B7) - tóc, móng
            </div>
        `,
        detail: `
            <h3>📊 Chi tiết từng vitamin</h3>
            <table>
                <tr><th>Vitamin</th><th>Tác dụng làm đẹp</th><th>Nguồn thực phẩm</th></tr>
                <tr><td>A (Retinol)</td><td>Tái tạo tế bào, chống lão hóa</td><td>Cà rốt, gan, trứng</td></tr>
                <tr><td>C</td><td>Collagen, sáng da, chống nắng</td><td>Cam, kiwi, ớt</td></tr>
                <tr><td>E</td><td>Chống oxy hóa, dưỡng ẩm</td><td>Hạnh nhân, bơ, dầu olive</td></tr>
                <tr><td>D</td><td>Sức khỏe da, miễn dịch</td><td>Ánh nắng, cá hồi</td></tr>
                <tr><td>B7 (Biotin)</td><td>Tóc, móng chắc khỏe</td><td>Trứng, các loại hạt</td></tr>
                <tr><td>B3 (Niacin)</td><td>Sáng da, se lỗ chân lông</td><td>Gà, cá ngừ, nấm</td></tr>
            </table>
            <h4>Liều lượng khuyến nghị hàng ngày</h4>
            <ul>
                <li>Vitamin A: 700-900 mcg RAE</li>
                <li>Vitamin C: 75-90 mg</li>
                <li>Vitamin E: 15 mg</li>
                <li>Biotin: 30 mcg</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 Vitamin dùng ngoài da vs uống</h3>
            <h4>Topical (thoa) vs Oral (uống)</h4>
            <table>
                <tr><th>Vitamin</th><th>Thoa ngoài</th><th>Uống</th></tr>
                <tr><td>Vitamin C</td><td>Trực tiếp chống oxy hóa da</td><td>Hỗ trợ collagen toàn thân</td></tr>
                <tr><td>Vitamin A</td><td>Retinol/Tretinoin mạnh mẽ</td><td>Quá liều gây độc</td></tr>
                <tr><td>Vitamin E</td><td>Dưỡng ẩm, chữa lành</td><td>Chống oxy hóa tổng thể</td></tr>
                <tr><td>Niacinamide</td><td>Hiệu quả cao khi thoa</td><td>An toàn cả hai cách</td></tr>
            </table>
            <div class="warning-box">
                <strong>⚠️ Cảnh báo:</strong> Uống quá nhiều Vitamin A có thể gây ngộ độc (hypervitaminosis A). Không vượt quá 3000 mcg/ngày.
            </div>
            <div class="tip-box">
                <strong>💡 Tip:</strong> Kết hợp cả thoa và uống vitamin cho hiệu quả tối đa, nhưng luôn ưu tiên từ thực phẩm trước khi dùng supplement.
            </div>
        `
    },
    'collagen': {
        icon: '🥩',
        title: 'Collagen & Protein',
        category: 'nutrition',
        level: 'intermediate',
        connections: ['anti-aging', 'vitamins-beauty', 'diet-skin'],
        simple: `
            <h3>🥩 Collagen & Protein</h3>
            <p><strong>Collagen</strong> là protein chiếm 75% cấu trúc da, giữ da săn chắc.</p>
            <div class="example-box">
                <strong>Tại sao collagen quan trọng?</strong><br>
                • Giữ da săn chắc, đàn hồi<br>
                • Từ tuổi 25, mất ~1% collagen/năm<br>
                • Nếp nhăn, chảy xệ do mất collagen
            </div>
            <div class="tip-box">
                <strong>💡 Mẹo:</strong> Uống nước hầm xương là nguồn collagen tự nhiên tuyệt vời!
            </div>
        `,
        detail: `
            <h3>📊 Các loại collagen</h3>
            <table>
                <tr><th>Loại</th><th>Vị trí</th><th>Tác dụng</th></tr>
                <tr><td>Type I</td><td>Da, xương, gân</td><td>Chống lão hóa da (phổ biến nhất)</td></tr>
                <tr><td>Type II</td><td>Sụn</td><td>Sức khỏe khớp</td></tr>
                <tr><td>Type III</td><td>Da, mạch máu</td><td>Đàn hồi, phục hồi</td></tr>
            </table>
            <h4>Nguồn bổ sung collagen</h4>
            <ul>
                <li><strong>Thực phẩm:</strong> Nước hầm xương, da gà, da cá, chân gà</li>
                <li><strong>Supplement:</strong> Bột collagen peptide, viên uống</li>
                <li><strong>Hỗ trợ tổng hợp:</strong> Vitamin C, proline, glycine</li>
            </ul>
            <h4>Protein cho tóc & móng</h4>
            <p>Keratin (protein của tóc, móng) cần đủ protein từ ăn uống:</p>
            <ul>
                <li>Tối thiểu <strong>0.8g protein/kg cơ thể/ngày</strong></li>
                <li>Nguồn: Thịt, cá, trứng, đậu, sữa</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 Khoa học collagen</h3>
            <h4>Collagen peptide có thực sự hiệu quả?</h4>
            <p>Nghiên cứu cho thấy collagen peptide uống:</p>
            <ul>
                <li>Được hấp thụ dưới dạng di-peptide và tri-peptide</li>
                <li>Kích thích fibroblast sản xuất collagen mới</li>
                <li>Tăng độ đàn hồi da sau 4-8 tuần sử dụng</li>
                <li>Liều hiệu quả: <strong>2.5-10g/ngày</strong></li>
            </ul>
            <h4>Yếu tố phá hủy collagen</h4>
            <ul>
                <li><strong>UV:</strong> Kích hoạt MMP (matrix metalloproteinases) phân hủy collagen</li>
                <li><strong>Đường:</strong> Glycation - đường gắn vào collagen làm nó cứng, giòn</li>
                <li><strong>Hút thuốc:</strong> Giảm lưu thông máu + tạo gốc tự do</li>
                <li><strong>Stress:</strong> Cortisol tăng → phân hủy collagen</li>
            </ul>
            <div class="formula-box">
                AGEs (Advanced Glycation End-products)<br>
                Đường + Protein → AGEs → Collagen cứng, đổi màu → Nếp nhăn, xỉn da
            </div>
        `
    },
    'antioxidants': {
        icon: '🫐',
        title: 'Chất Chống Oxy Hóa',
        category: 'nutrition',
        level: 'intermediate',
        connections: ['vitamins-beauty', 'anti-aging', 'diet-skin'],
        simple: `
            <h3>🫐 Chất chống oxy hóa</h3>
            <p><strong>Chất chống oxy hóa</strong> bảo vệ tế bào khỏi gốc tự do gây lão hóa.</p>
            <div class="example-box">
                <strong>Top chất chống oxy hóa:</strong><br>
                • Vitamin C - cam, kiwi<br>
                • Vitamin E - hạnh nhân, bơ<br>
                • Polyphenol - trà xanh, berries<br>
                • Lycopene - cà chua<br>
                • Astaxanthin - cá hồi
            </div>
        `,
        detail: `
            <h3>📊 Chống oxy hóa chi tiết</h3>
            <h4>Gốc tự do là gì?</h4>
            <p>Phân tử thiếu electron, "ăn cắp" electron từ tế bào → tổn thương DNA, protein, lipid.</p>
            <h4>Nguồn gốc tự do</h4>
            <ul>
                <li>Tia UV</li>
                <li>Ô nhiễm môi trường</li>
                <li>Hút thuốc</li>
                <li>Stress</li>
                <li>Chế độ ăn không lành mạnh</li>
            </ul>
            <h4>Top thực phẩm giàu chống oxy hóa</h4>
            <table>
                <tr><th>Thực phẩm</th><th>Chất chống oxy hóa</th><th>ORAC Score</th></tr>
                <tr><td>Blueberry</td><td>Anthocyanins</td><td>Rất cao</td></tr>
                <tr><td>Dark chocolate</td><td>Flavonoids</td><td>Rất cao</td></tr>
                <tr><td>Trà xanh</td><td>EGCG, Catechins</td><td>Cao</td></tr>
                <tr><td>Cà chua</td><td>Lycopene</td><td>Cao</td></tr>
                <tr><td>Rau bina</td><td>Lutein, Zeaxanthin</td><td>Cao</td></tr>
            </table>
        `,
        advanced: `
            <h3>🎓 Cơ chế chống oxy hóa</h3>
            <h4>Antioxidant Network</h4>
            <p>Các chất chống oxy hóa hoạt động theo mạng lưới, tái tạo lẫn nhau:</p>
            <ol>
                <li>Vitamin C trung hòa gốc tự do → bị oxy hóa</li>
                <li>Vitamin E tái tạo Vitamin C</li>
                <li>Glutathione tái tạo Vitamin E</li>
                <li>Alpha-lipoic acid tái tạo Glutathione</li>
            </ol>
            <h4>EGCG trong trà xanh</h4>
            <p>Epigallocatechin gallate - chống oxy hóa mạnh gấp 100 lần Vitamin C:</p>
            <ul>
                <li>Bảo vệ collagen khỏi UV</li>
                <li>Kháng viêm</li>
                <li>Ức chế MMP (enzyme phân hủy collagen)</li>
            </ul>
            <div class="tip-box">
                <strong>💡 Synergy:</strong> Kết hợp nhiều loại chống oxy hóa (Vit C + E + Polyphenol) hiệu quả hơn dùng đơn lẻ.
            </div>
        `
    },
    'water-intake': {
        icon: '💧',
        title: 'Nước & Độ Ẩm',
        category: 'nutrition',
        level: 'beginner',
        connections: ['moisturizing', 'vitamins-beauty', 'diet-skin'],
        simple: `
            <h3>💧 Nước & Độ ẩm</h3>
            <p><strong>Nước</strong> chiếm 64% thành phần da. Uống đủ nước là nền tảng của làn da đẹp.</p>
            <div class="example-box">
                <strong>Dấu hiệu cơ thể thiếu nước:</strong><br>
                • Da khô, bong tróc<br>
                • Môi nứt nẻ<br>
                • Quầng mắt thâm hơn<br>
                • Da kém đàn hồi
            </div>
            <div class="tip-box">
                <strong>💡 Mẹo:</strong> Uống 2-2.5 lít nước/ngày. Thêm chanh hoặc dưa chuột cho dễ uống!
            </div>
        `,
        detail: `
            <h3>📊 Nước và làn da</h3>
            <h4>Lượng nước khuyến nghị</h4>
            <table>
                <tr><th>Cân nặng</th><th>Lượng nước/ngày</th></tr>
                <tr><td>45-55 kg</td><td>1.8 - 2.2 lít</td></tr>
                <tr><td>55-70 kg</td><td>2.2 - 2.8 lít</td></tr>
                <tr><td>70-85 kg</td><td>2.8 - 3.4 lít</td></tr>
            </table>
            <h4>Thực phẩm giàu nước</h4>
            <ul>
                <li><strong>Dưa chuột:</strong> 96% nước</li>
                <li><strong>Dưa hấu:</strong> 92% nước</li>
                <li><strong>Cà chua:</strong> 94% nước</li>
                <li><strong>Rau xà lách:</strong> 96% nước</li>
                <li><strong>Cam:</strong> 87% nước</li>
            </ul>
            <h4>Đồ uống nên hạn chế</h4>
            <ul>
                <li><strong>Cà phê quá nhiều:</strong> Lợi tiểu, mất nước</li>
                <li><strong>Rượu bia:</strong> Dehydration nghiêm trọng</li>
                <li><strong>Nước ngọt:</strong> Đường gây glycation</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 Hydration vs Moisturizing</h3>
            <h4>Sự khác biệt quan trọng</h4>
            <table>
                <tr><th>Hydration (cấp nước)</th><th>Moisturizing (dưỡng ẩm)</th></tr>
                <tr><td>Đưa nước VÀO da</td><td>Giữ nước TRONG da</td></tr>
                <tr><td>Humectants: HA, Glycerin</td><td>Occlusives: Petrolatum, Oils</td></tr>
                <tr><td>Uống nước, serum cấp nước</td><td>Kem dưỡng, face oil</td></tr>
            </table>
            <h4>NMF (Natural Moisturizing Factor)</h4>
            <p>Hỗn hợp tự nhiên trong da giữ ẩm:</p>
            <ul>
                <li>Amino acids (40%)</li>
                <li>PCA (12%)</li>
                <li>Lactate (12%)</li>
                <li>Urea (7%)</li>
                <li>Các ion, đường, và acid khác</li>
            </ul>
            <div class="tip-box">
                <strong>💡 Kết luận:</strong> Da đẹp cần CẢ hydration (uống đủ nước + serum HA) VÀ moisturizing (kem dưỡng ẩm khóa nước lại).
            </div>
        `
    },
    'diet-skin': {
        icon: '🥗',
        title: 'Thực Phẩm & Làn Da',
        category: 'nutrition',
        level: 'intermediate',
        connections: ['vitamins-beauty', 'collagen', 'antioxidants', 'water-intake'],
        simple: `
            <h3>🥗 Thực phẩm & làn da</h3>
            <p>Bạn ăn gì sẽ thể hiện trên da. <strong>"You are what you eat!"</strong></p>
            <div class="example-box">
                <strong>Thực phẩm tốt cho da:</strong><br>
                • Cá hồi - Omega-3, astaxanthin<br>
                • Bơ - Vitamin E, healthy fats<br>
                • Berries - Chống oxy hóa<br>
                • Rau xanh đậm - Vitamin A, K<br>
                • Các loại hạt - Kẽm, selenium
            </div>
        `,
        detail: `
            <h3>📊 Dinh dưỡng cho từng vấn đề da</h3>
            <table>
                <tr><th>Vấn đề da</th><th>Ăn nhiều</th><th>Tránh/Giảm</th></tr>
                <tr><td>Mụn</td><td>Kẽm, Omega-3, rau xanh</td><td>Đường, sữa, GI cao</td></tr>
                <tr><td>Khô da</td><td>Omega-3, Vitamin E, nước</td><td>Rượu, caffeine quá nhiều</td></tr>
                <tr><td>Lão hóa</td><td>Chống oxy hóa, collagen</td><td>Đường, thức ăn chế biến</td></tr>
                <tr><td>Xỉn màu</td><td>Vitamin C, berries</td><td>Hút thuốc, ít ngủ</td></tr>
                <tr><td>Viêm da</td><td>Probiotics, Omega-3</td><td>Gluten (nếu nhạy cảm), dairy</td></tr>
            </table>
            <h4>Omega-3 Fatty Acids</h4>
            <ul>
                <li><strong>EPA:</strong> Kháng viêm, giảm mụn</li>
                <li><strong>DHA:</strong> Cấu trúc màng tế bào</li>
                <li><strong>Nguồn:</strong> Cá hồi, cá thu, hạt chia, hạt lanh</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 Gut-Skin Axis</h3>
            <h4>Đường ruột - Da: Liên kết bất ngờ</h4>
            <p>Hệ vi sinh đường ruột (gut microbiome) ảnh hưởng trực tiếp đến da:</p>
            <ul>
                <li><strong>Dysbiosis (mất cân bằng):</strong> → Viêm → Mụn, eczema, rosacea</li>
                <li><strong>Leaky gut:</strong> → Toxin vào máu → Viêm da</li>
                <li><strong>Probiotics:</strong> Cải thiện cả đường ruột lẫn da</li>
            </ul>
            <h4>Glycemic Index và mụn</h4>
            <p>Thực phẩm GI cao → Insulin spike → IGF-1 tăng → Bã nhờn tăng → Mụn.</p>
            <div class="formula-box">
                High GI foods → ↑ Insulin → ↑ IGF-1 → ↑ Sebum + ↑ Inflammation → Acne
            </div>
            <h4>Intermittent Fasting và da</h4>
            <p>Nhịn ăn gián đoạn có thể kích hoạt <strong>autophagy</strong> - quá trình tế bào "dọn dẹp" các thành phần hư hỏng, có thể cải thiện chất lượng da.</p>
        `
    }
};
