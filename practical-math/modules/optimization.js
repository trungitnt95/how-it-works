// Optimization - Practical optimization and decision making
const optimizationData = {
    'time-optimization': {
        icon: '⏰',
        title: 'Tối Ưu Thời Gian',
        category: 'optimization',
        level: 'beginner',
        connections: ['cost-benefit', 'algorithm-thinking', 'equations-daily'],
        simple: `
            <h3>⏰ Tối ưu thời gian</h3>
            <p>Toán học giúp bạn sắp xếp công việc hiệu quả hơn.</p>
            <div class="example-box">
                <strong>Nấu ăn song song:</strong> Thay vì luộc rau xong mới chiên cá:<br>
                • Song song: Luộc rau (10 phút) + Chiên cá (15 phút) = 15 phút<br>
                • Tuần tự: 10 + 15 = 25 phút<br>
                → Tiết kiệm 10 phút!
            </div>
            <h4>Nguyên tắc cơ bản</h4>
            <ul>
                <li>Làm song song khi có thể</li>
                <li>Việc quan trọng làm trước</li>
                <li>Gộp việc nhỏ lại</li>
            </ul>
        `,
        detail: `
            <h3>📊 Phương pháp tối ưu thời gian</h3>
            <h4>Ma trận Eisenhower</h4>
            <table>
                <tr><th></th><th>Khẩn cấp</th><th>Không khẩn cấp</th></tr>
                <tr><td><strong>Quan trọng</strong></td><td>LÀM NGAY</td><td>LÊN LỊCH</td></tr>
                <tr><td><strong>Không quan trọng</strong></td><td>ỦY THÁC</td><td>LOẠI BỎ</td></tr>
            </table>
            <h4>Quy tắc Pareto (80/20)</h4>
            <p>80% kết quả đến từ 20% nỗ lực. Tìm và tập trung vào 20% quan trọng nhất.</p>
            <h4>Pomodoro Technique</h4>
            <ul>
                <li>Tập trung 25 phút → Nghỉ 5 phút</li>
                <li>Sau 4 chu kỳ → Nghỉ dài 15-30 phút</li>
                <li>Mỗi ngày hoàn thành 8-12 pomodoro</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 Tối ưu hóa nâng cao</h3>
            <h4>Critical Path Method (CPM)</h4>
            <p>Tìm đường dài nhất trong chuỗi công việc phụ thuộc. Đường này quyết định thời gian tối thiểu để hoàn thành dự án.</p>
            <h4>Bài toán Scheduling</h4>
            <div class="example-box">
                <strong>Shortest Job First:</strong> Xếp việc ngắn nhất trước sẽ giảm thời gian chờ trung bình.<br>
                Ví dụ: Việc 2 phút, 5 phút, 8 phút<br>
                • SJF: Chờ TB = (0 + 2 + 7)/3 = 3 phút<br>
                • Ngược: Chờ TB = (0 + 8 + 13)/3 = 7 phút
            </div>
            <h4>Giá trị của thời gian</h4>
            <p>Nếu lương 30tr/tháng ≈ 170k/giờ. Thuê người giúp việc 50k/giờ giúp bạn tiết kiệm 120k/giờ để làm việc chuyên môn.</p>
        `
    },
    'cost-benefit': {
        icon: '⚖️',
        title: 'Phân Tích Chi Phí - Lợi Ích',
        category: 'optimization',
        level: 'intermediate',
        connections: ['time-optimization', 'investment-math', 'game-theory', 'linear-programming'],
        simple: `
            <h3>⚖️ Phân tích chi phí - lợi ích</h3>
            <p>So sánh cái được và cái mất để đưa ra quyết định tốt hơn.</p>
            <div class="example-box">
                <strong>Mua xe máy hay đi Grab?</strong><br>
                • Xe máy: 30tr + xăng 500k/tháng + bảo trì 2tr/năm<br>
                • Grab: 3tr/tháng<br>
                → Nếu dùng 3 năm: Xe máy rẻ hơn từ tháng 12 trở đi
            </div>
            <h4>Các loại chi phí</h4>
            <ul>
                <li><strong>Chi phí tài chính:</strong> Tiền bỏ ra</li>
                <li><strong>Chi phí cơ hội:</strong> Cái bạn mất khi không chọn phương án khác</li>
                <li><strong>Chi phí thời gian:</strong> Thời gian bỏ ra</li>
            </ul>
        `,
        detail: `
            <h3>📊 Phương pháp phân tích</h3>
            <h4>Bước phân tích CBA</h4>
            <ol>
                <li>Liệt kê tất cả chi phí (cả ẩn)</li>
                <li>Liệt kê tất cả lợi ích (cả vô hình)</li>
                <li>Quy đổi về cùng đơn vị (tiền)</li>
                <li>Tính NPV hoặc BCR</li>
                <li>Ra quyết định</li>
            </ol>
            <div class="formula-box">
                BCR = Tổng lợi ích / Tổng chi phí<br>
                BCR > 1 → Nên làm
            </div>
            <h4>Chi phí cơ hội</h4>
            <div class="example-box">
                <strong>Học thạc sĩ 2 năm:</strong><br>
                • Chi phí: 200tr học phí + 2 năm lương mất đi (15tr × 24 = 360tr)<br>
                • Tổng chi phí thực: 560 triệu<br>
                • Lợi ích: Lương tăng 5tr/tháng → Hoàn vốn sau 560/5 = 112 tháng ≈ 9.3 năm
            </div>
        `,
        advanced: `
            <h3>🎓 CBA nâng cao</h3>
            <h4>Phân tích độ nhạy (Sensitivity Analysis)</h4>
            <p>Thay đổi các giả định để xem kết quả thay đổi thế nào. Giúp đánh giá mức độ chắc chắn của quyết định.</p>
            <h4>Discount Rate</h4>
            <p>Tiền trong tương lai giá trị thấp hơn tiền hiện tại. Phải chiết khấu lợi ích/chi phí tương lai về hiện tại.</p>
            <h4>Giá trị vô hình</h4>
            <ul>
                <li>Sức khỏe, hạnh phúc</li>
                <li>Mối quan hệ, uy tín</li>
                <li>Cơ hội học hỏi, phát triển</li>
                <li>Giảm stress, tự do thời gian</li>
            </ul>
            <div class="tip-box">
                <strong>💡 Ghi nhớ:</strong> Không phải mọi thứ quan trọng đều đo được bằng tiền. CBA là công cụ hỗ trợ, không phải câu trả lời duy nhất.
            </div>
        `
    },
    'game-theory': {
        icon: '♟️',
        title: 'Lý Thuyết Trò Chơi',
        category: 'optimization',
        level: 'advanced',
        connections: ['cost-benefit', 'probability-daily', 'algorithm-thinking'],
        simple: `
            <h3>♟️ Lý thuyết trò chơi</h3>
            <p><strong>Lý thuyết trò chơi</strong> nghiên cứu chiến lược khi kết quả phụ thuộc vào quyết định của nhiều người.</p>
            <div class="example-box">
                <strong>Thế tiến thoái lưỡng nan của tù nhân:</strong><br>
                Hai người bị bắt. Nếu cả hai im lặng: mỗi người 1 năm tù.<br>
                Nếu 1 người khai: người khai được thả, người kia 10 năm.<br>
                Nếu cả hai khai: mỗi người 5 năm.<br>
                → Cả hai đều khai dù im lặng tốt hơn cho cả hai!
            </div>
        `,
        detail: `
            <h3>📊 Các khái niệm cơ bản</h3>
            <h4>Cân bằng Nash</h4>
            <p>Trạng thái mà không ai có lợi khi đổi chiến lược một mình. Đặt tên theo John Nash (phim A Beautiful Mind).</p>
            <h4>Ma trận payoff</h4>
            <table>
                <tr><th></th><th>B hợp tác</th><th>B phản bội</th></tr>
                <tr><td><strong>A hợp tác</strong></td><td>(3, 3)</td><td>(0, 5)</td></tr>
                <tr><td><strong>A phản bội</strong></td><td>(5, 0)</td><td>(1, 1)</td></tr>
            </table>
            <h4>Ứng dụng thực tế</h4>
            <ul>
                <li><strong>Đàm phán giá:</strong> Người mua vs Người bán</li>
                <li><strong>Cạnh tranh kinh doanh:</strong> Giảm giá vs Giữ giá</li>
                <li><strong>Đấu giá:</strong> Chiến lược đặt giá tối ưu</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 Lý thuyết trò chơi nâng cao</h3>
            <h4>Trò chơi lặp lại</h4>
            <p>Khi chơi nhiều lần, chiến lược "ăn miếng trả miếng" (Tit-for-Tat) thường thắng: hợp tác trước, sau đó bắt chước đối thủ.</p>
            <h4>Chiến lược hỗn hợp</h4>
            <p>Ngẫu nhiên hóa quyết định theo xác suất tối ưu. Ví dụ: Trong bóng đá, penalty nên sút trái/phải/giữa với tỉ lệ nhất định.</p>
            <h4>Thiết kế cơ chế (Mechanism Design)</h4>
            <p>Thiết kế "luật chơi" sao cho mọi người hành động vì lợi ích cá nhân nhưng kết quả tốt cho cả xã hội. Giải Nobel Kinh tế 2007.</p>
        `
    },
    'probability-daily': {
        icon: '🎲',
        title: 'Xác Suất Hàng Ngày',
        category: 'optimization',
        level: 'intermediate',
        connections: ['game-theory', 'cost-benefit', 'investment-math', 'misleading-stats'],
        simple: `
            <h3>🎲 Xác suất hàng ngày</h3>
            <p>Xác suất giúp bạn đánh giá rủi ro và ra quyết định tốt hơn mỗi ngày.</p>
            <div class="example-box">
                <strong>Dự báo thời tiết 70% mưa:</strong><br>
                → Có nghĩa trong 10 ngày điều kiện tương tự, khoảng 7 ngày sẽ mưa.<br>
                → Nên mang ô!
            </div>
            <h4>Xác suất đời thường</h4>
            <ul>
                <li><strong>Xổ số:</strong> 1/45 triệu → Gần như không thể</li>
                <li><strong>Tai nạn xe:</strong> ~1/10.000/năm → Nên cẩn thận</li>
                <li><strong>Sét đánh:</strong> 1/1.200.000 → Đừng lo quá</li>
            </ul>
        `,
        detail: `
            <h3>📊 Tư duy xác suất</h3>
            <h4>Giá trị kỳ vọng</h4>
            <div class="formula-box">
                EV = Σ (Xác suất × Kết quả)
            </div>
            <div class="example-box">
                <strong>Mua bảo hiểm xe 2 triệu/năm:</strong><br>
                • Xác suất tai nạn: 5%<br>
                • Chi phí tai nạn: 50 triệu<br>
                • EV không mua = 5% × (-50tr) = -2.5 triệu<br>
                • EV mua = -2 triệu (chắc chắn)<br>
                → Mua bảo hiểm hợp lý vì giảm rủi ro lớn
            </div>
            <h4>Sai lầm phổ biến</h4>
            <ul>
                <li><strong>Ngụy biện con bạc:</strong> "Đã thua 5 lần, lần sau chắc thắng"</li>
                <li><strong>Bỏ qua tỉ lệ nền:</strong> Xét nghiệm 99% chính xác nhưng bệnh hiếm</li>
                <li><strong>Quá tự tin:</strong> Đánh giá thấp rủi ro xấu</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 Xác suất ứng dụng nâng cao</h3>
            <h4>Định lý Bayes trong đời sống</h4>
            <div class="formula-box">
                P(A|B) = P(B|A) × P(A) / P(B)
            </div>
            <div class="example-box">
                <strong>Xét nghiệm ung thư:</strong><br>
                • Tỉ lệ mắc bệnh: 1% (P(A) = 0.01)<br>
                • Xét nghiệm đúng khi có bệnh: 90% (P(B|A) = 0.9)<br>
                • Xét nghiệm sai dương tính: 5% (P(B|¬A) = 0.05)<br>
                • P(bệnh | dương tính) = 0.9×0.01 / (0.9×0.01 + 0.05×0.99) ≈ 15.4%<br>
                → Dương tính nhưng chỉ 15% thực sự có bệnh!
            </div>
            <h4>Kelly Criterion</h4>
            <p>Công thức tối ưu kích cỡ đặt cược: f* = (bp - q) / b, trong đó b = tỉ lệ thắng/thua, p = xác suất thắng, q = 1-p.</p>
        `
    },
    'algorithm-thinking': {
        icon: '⚙️',
        title: 'Tư Duy Thuật Toán',
        category: 'optimization',
        level: 'advanced',
        connections: ['time-optimization', 'game-theory', 'linear-programming'],
        simple: `
            <h3>⚙️ Tư duy thuật toán</h3>
            <p><strong>Thuật toán</strong> là tập hợp các bước cụ thể để giải quyết một vấn đề.</p>
            <div class="example-box">
                <strong>Thuật toán tìm tất trong tủ:</strong><br>
                1. Mở ngăn đầu tiên<br>
                2. Tìm tất phù hợp<br>
                3. Nếu tìm thấy → Lấy ra, XONG<br>
                4. Nếu không → Mở ngăn tiếp theo, quay lại bước 2<br>
                5. Nếu hết ngăn → Không có tất
            </div>
        `,
        detail: `
            <h3>📊 Thuật toán trong đời sống</h3>
            <h4>Tìm kiếm nhị phân</h4>
            <div class="example-box">
                <strong>Đoán số từ 1-100:</strong><br>
                Thay vì đoán từng số (tối đa 100 lần), chia đôi mỗi lần:<br>
                50 → 75 → 63 → 69 → 66 → 67 ✓<br>
                Chỉ cần tối đa 7 lần! (log₂(100) ≈ 7)
            </div>
            <h4>Thuật toán sắp xếp</h4>
            <table>
                <tr><th>Thuật toán</th><th>Ứng dụng</th><th>Hiệu quả</th></tr>
                <tr><td>Bubble Sort</td><td>Sắp xếp bài</td><td>Chậm</td></tr>
                <tr><td>Quick Sort</td><td>Sắp xếp dữ liệu</td><td>Nhanh</td></tr>
                <tr><td>Merge Sort</td><td>Gộp danh sách</td><td>Ổn định</td></tr>
            </table>
            <h4>Quy tắc 37% (Secretary Problem)</h4>
            <p>Khi phải chọn 1 từ nhiều ứng viên tuần tự: Xem qua 37% đầu (chỉ xem, không chọn), sau đó chọn người đầu tiên tốt hơn tất cả những người đã xem.</p>
        `,
        advanced: `
            <h3>🎓 Tư duy thuật toán nâng cao</h3>
            <h4>Độ phức tạp (Big O)</h4>
            <table>
                <tr><th>Ký hiệu</th><th>Ý nghĩa</th><th>Ví dụ</th></tr>
                <tr><td>O(1)</td><td>Hằng số</td><td>Tra từ điển theo trang</td></tr>
                <tr><td>O(log n)</td><td>Logarit</td><td>Tìm nhị phân</td></tr>
                <tr><td>O(n)</td><td>Tuyến tính</td><td>Đọc sách từ đầu đến cuối</td></tr>
                <tr><td>O(n²)</td><td>Bình phương</td><td>So sánh mọi cặp</td></tr>
                <tr><td>O(2^n)</td><td>Mũ</td><td>Thử mọi tổ hợp</td></tr>
            </table>
            <h4>Bài toán NP-hard</h4>
            <p>Một số bài toán (như Travelling Salesman) không có thuật toán nhanh. Với 20 thành phố có 20! ≈ 2.4 × 10^18 đường đi. Cần dùng heuristic (xấp xỉ) thay vì tìm chính xác.</p>
            <h4>Ứng dụng</h4>
            <ul>
                <li><strong>Google Maps:</strong> Dijkstra/A* cho đường đi ngắn nhất</li>
                <li><strong>Netflix:</strong> Collaborative filtering cho gợi ý phim</li>
                <li><strong>Grab:</strong> Matching algorithm ghép tài xế-khách</li>
            </ul>
        `
    }
};
