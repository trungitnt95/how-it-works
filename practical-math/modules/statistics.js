// Statistics - Practical statistics applications
const statisticsData = {
    'averages': {
        icon: '📊',
        title: 'Trung Bình & Ý Nghĩa',
        category: 'statistics',
        level: 'beginner',
        connections: ['misleading-stats', 'data-visualization', 'estimation'],
        simple: `
            <h3>📊 Trung bình & Ý nghĩa</h3>
            <p><strong>Trung bình</strong> tóm tắt một nhóm số bằng một con số đại diện.</p>
            <div class="example-box">
                <strong>Ví dụ:</strong> Lương 5 người: 8tr, 9tr, 10tr, 11tr, 62tr<br>
                Trung bình = 20tr → Nhưng 4/5 người lương dưới 20tr!
            </div>
            <h4>3 loại trung bình</h4>
            <ul>
                <li><strong>Mean (trung bình cộng):</strong> Tổng / Số lượng</li>
                <li><strong>Median (trung vị):</strong> Số ở giữa khi sắp xếp = 10tr</li>
                <li><strong>Mode (yếu vị):</strong> Số xuất hiện nhiều nhất</li>
            </ul>
        `,
        detail: `
            <h3>📊 Khi nào dùng loại nào?</h3>
            <table>
                <tr><th>Loại</th><th>Dùng khi</th><th>Ví dụ</th></tr>
                <tr><td>Mean</td><td>Dữ liệu phân bố đều</td><td>Điểm thi lớp</td></tr>
                <tr><td>Median</td><td>Có giá trị ngoại lai</td><td>Thu nhập, giá nhà</td></tr>
                <tr><td>Mode</td><td>Dữ liệu phân loại</td><td>Cỡ giày bán chạy</td></tr>
            </table>
            <h4>Các đại lượng bổ sung</h4>
            <ul>
                <li><strong>Khoảng biến thiên:</strong> Max - Min</li>
                <li><strong>Phương sai:</strong> Đo mức phân tán</li>
                <li><strong>Độ lệch chuẩn:</strong> √Phương sai</li>
                <li><strong>Phần tư vị:</strong> Q1, Q2 (median), Q3</li>
            </ul>
            <div class="tip-box">
                <strong>💡 Mẹo:</strong> Khi ai đó nói "trung bình", hãy hỏi "mean hay median?" - Sự khác biệt có thể rất lớn!
            </div>
        `,
        advanced: `
            <h3>🎓 Trung bình nâng cao</h3>
            <h4>Trung bình có trọng số</h4>
            <div class="formula-box">
                Weighted Mean = Σ(wᵢ × xᵢ) / Σwᵢ
            </div>
            <div class="example-box">
                <strong>GPA:</strong> Môn 3 tín chỉ điểm 8, môn 2 tín chỉ điểm 9<br>
                GPA = (3×8 + 2×9) / (3+2) = 42/5 = 8.4
            </div>
            <h4>Paradox Simpson</h4>
            <p>Xu hướng trong từng nhóm nhỏ có thể đảo ngược khi gộp các nhóm lại. Đây là bẫy thống kê nguy hiểm khi phân tích dữ liệu.</p>
        `
    },
    'data-visualization': {
        icon: '📉',
        title: 'Trực Quan Hóa Dữ Liệu',
        category: 'statistics',
        level: 'intermediate',
        connections: ['averages', 'misleading-stats', 'correlation'],
        simple: `
            <h3>📉 Trực quan hóa dữ liệu</h3>
            <p>Biểu đồ giúp biến những con số khô khan thành hình ảnh dễ hiểu.</p>
            <div class="example-box">
                <strong>Ví dụ:</strong> Thay vì đọc bảng doanh thu 12 tháng, biểu đồ cột cho thấy ngay tháng nào bán chạy nhất.
            </div>
            <h4>Biểu đồ phổ biến</h4>
            <ul>
                <li><strong>📊 Biểu đồ cột:</strong> So sánh các nhóm</li>
                <li><strong>📈 Biểu đồ đường:</strong> Xu hướng theo thời gian</li>
                <li><strong>🥧 Biểu đồ tròn:</strong> Tỉ lệ phần trăm</li>
                <li><strong>📉 Biểu đồ phân tán:</strong> Mối quan hệ 2 biến</li>
            </ul>
        `,
        detail: `
            <h3>📊 Chọn biểu đồ phù hợp</h3>
            <table>
                <tr><th>Mục đích</th><th>Biểu đồ</th><th>Ví dụ</th></tr>
                <tr><td>So sánh</td><td>Cột, thanh</td><td>Doanh thu theo vùng</td></tr>
                <tr><td>Xu hướng</td><td>Đường</td><td>Giá cổ phiếu</td></tr>
                <tr><td>Tỉ lệ</td><td>Tròn, donut</td><td>Cơ cấu chi tiêu</td></tr>
                <tr><td>Phân phối</td><td>Histogram, box plot</td><td>Phân bố điểm thi</td></tr>
                <tr><td>Tương quan</td><td>Scatter plot</td><td>Chiều cao vs cân nặng</td></tr>
            </table>
            <h4>Nguyên tắc thiết kế tốt</h4>
            <ul>
                <li>Bắt đầu trục Y từ 0 (trừ khi có lý do)</li>
                <li>Ghi rõ đơn vị và nguồn dữ liệu</li>
                <li>Không dùng quá nhiều màu</li>
                <li>Đơn giản hóa - ít hơn là nhiều hơn</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 Trực quan hóa nâng cao</h3>
            <h4>Các kỹ thuật nâng cao</h4>
            <ul>
                <li><strong>Heatmap:</strong> Ma trận màu thể hiện cường độ</li>
                <li><strong>Treemap:</strong> Diện tích thể hiện giá trị</li>
                <li><strong>Sankey diagram:</strong> Dòng chảy và chuyển đổi</li>
                <li><strong>Network graph:</strong> Mối quan hệ giữa các thực thể</li>
            </ul>
            <h4>Nguyên tắc của Edward Tufte</h4>
            <ul>
                <li><strong>Data-ink ratio:</strong> Tối đa hóa dữ liệu, tối thiểu hóa trang trí</li>
                <li><strong>Chartjunk:</strong> Tránh hiệu ứng 3D, đổ bóng không cần thiết</li>
                <li><strong>Lie factor:</strong> Tỉ lệ giữa hiệu ứng hình ảnh và dữ liệu thực</li>
            </ul>
        `
    },
    'correlation': {
        icon: '🔗',
        title: 'Tương Quan và Nhân Quả',
        category: 'statistics',
        level: 'intermediate',
        connections: ['averages', 'misleading-stats', 'sampling'],
        simple: `
            <h3>🔗 Tương quan và nhân quả</h3>
            <p><strong>Tương quan</strong> là khi hai sự việc có vẻ liên quan. Nhưng tương quan ≠ nhân quả!</p>
            <div class="example-box">
                <strong>Ví dụ nực cười:</strong> Doanh số kem tăng cùng lúc với số vụ đuối nước tăng.<br>
                → Ăn kem gây đuối nước? KHÔNG! Cả hai đều tăng vì mùa hè nóng.
            </div>
            <h4>Nhớ quy tắc</h4>
            <ul>
                <li>Tương quan: A và B cùng thay đổi</li>
                <li>Nhân quả: A thực sự GÂY RA B</li>
            </ul>
        `,
        detail: `
            <h3>📊 Hệ số tương quan</h3>
            <h4>Hệ số tương quan Pearson (r)</h4>
            <table>
                <tr><th>Giá trị r</th><th>Ý nghĩa</th></tr>
                <tr><td>+1.0</td><td>Tương quan thuận hoàn hảo</td></tr>
                <tr><td>+0.7 đến +0.9</td><td>Tương quan thuận mạnh</td></tr>
                <tr><td>+0.3 đến +0.7</td><td>Tương quan thuận vừa</td></tr>
                <tr><td>-0.3 đến +0.3</td><td>Tương quan yếu/không có</td></tr>
                <tr><td>-1.0</td><td>Tương quan nghịch hoàn hảo</td></tr>
            </table>
            <h4>Biến ẩn (Confounding Variable)</h4>
            <p>Biến thứ ba ảnh hưởng đến cả A và B, tạo ra tương quan giả. Ví dụ: Tuổi ảnh hưởng cả kinh nghiệm lẫn lương.</p>
        `,
        advanced: `
            <h3>🎓 Phân tích nhân quả</h3>
            <h4>Cách xác định nhân quả</h4>
            <ul>
                <li><strong>Thí nghiệm ngẫu nhiên (RCT):</strong> Gold standard</li>
                <li><strong>Kiểm soát biến ẩn:</strong> Phân tích đa biến</li>
                <li><strong>Tiêu chí Bradford Hill:</strong> 9 tiêu chí đánh giá nhân quả</li>
            </ul>
            <h4>Sai lầm phổ biến</h4>
            <ul>
                <li><strong>Spurious correlation:</strong> Tương quan ngẫu nhiên vô nghĩa</li>
                <li><strong>Reverse causation:</strong> Nhầm nguyên nhân và kết quả</li>
                <li><strong>Ecological fallacy:</strong> Suy từ nhóm ra cá nhân</li>
            </ul>
        `
    },
    'sampling': {
        icon: '🔍',
        title: 'Lấy Mẫu & Khảo Sát',
        category: 'statistics',
        level: 'intermediate',
        connections: ['averages', 'correlation', 'misleading-stats'],
        simple: `
            <h3>🔍 Lấy mẫu & Khảo sát</h3>
            <p><strong>Lấy mẫu</strong> là chọn một nhóm nhỏ để đại diện cho cả tập lớn.</p>
            <div class="example-box">
                <strong>Ví dụ:</strong> Muốn biết 80% người Việt thích phở → Không thể hỏi 100 triệu người.<br>
                Chỉ cần hỏi ~1.000 người được chọn ngẫu nhiên.
            </div>
            <h4>Tại sao phải lấy mẫu?</h4>
            <ul>
                <li>Tiết kiệm thời gian và chi phí</li>
                <li>Không thể kiểm tra toàn bộ</li>
                <li>Mẫu tốt có thể đại diện tốt</li>
            </ul>
        `,
        detail: `
            <h3>📊 Phương pháp lấy mẫu</h3>
            <table>
                <tr><th>Phương pháp</th><th>Cách làm</th><th>Ưu điểm</th></tr>
                <tr><td>Ngẫu nhiên đơn</td><td>Rút thăm, bốc số</td><td>Không thiên lệch</td></tr>
                <tr><td>Phân tầng</td><td>Chia nhóm rồi lấy mẫu</td><td>Đại diện các nhóm</td></tr>
                <tr><td>Hệ thống</td><td>Chọn mỗi k người</td><td>Dễ thực hiện</td></tr>
                <tr><td>Chùm</td><td>Chọn ngẫu nhiên nhóm</td><td>Tiết kiệm chi phí</td></tr>
            </table>
            <h4>Cỡ mẫu</h4>
            <div class="formula-box">
                n ≈ (Z² × p × (1-p)) / E²<br>
                Z ≈ 1.96 (tin cậy 95%), p = tỉ lệ, E = sai số
            </div>
            <div class="tip-box">
                <strong>💡 Quy tắc nhanh:</strong> Mẫu 1.000 người cho sai số khoảng ±3% (tin cậy 95%).
            </div>
        `,
        advanced: `
            <h3>🎓 Lấy mẫu nâng cao</h3>
            <h4>Sai lệch chọn mẫu (Selection Bias)</h4>
            <ul>
                <li><strong>Survivorship bias:</strong> Chỉ thấy "người sống sót"</li>
                <li><strong>Self-selection:</strong> Người tự nguyện khác người không</li>
                <li><strong>Non-response bias:</strong> Người không trả lời khác người trả lời</li>
            </ul>
            <h4>Ví dụ lịch sử nổi tiếng</h4>
            <div class="warning-box">
                <strong>Bầu cử Mỹ 1936:</strong> Tạp chí Literary Digest khảo sát 2.4 triệu người nhưng dự đoán sai, vì mẫu chỉ gồm người giàu (có điện thoại, ô tô). George Gallup chỉ hỏi 50.000 người nhưng đúng vì lấy mẫu đại diện.
            </div>
        `
    },
    'misleading-stats': {
        icon: '⚠️',
        title: 'Thống Kê Gây Hiểu Lầm',
        category: 'statistics',
        level: 'beginner',
        connections: ['averages', 'data-visualization', 'correlation'],
        simple: `
            <h3>⚠️ Thống kê gây hiểu lầm</h3>
            <p>Số liệu có thể bị trình bày sai lệch, dù không sai về mặt kỹ thuật.</p>
            <div class="example-box">
                <strong>"9/10 nha sĩ khuyên dùng"</strong><br>
                → Hỏi 10 nha sĩ, 9 người đồng ý? Hay hỏi 1000 người và chọn nhóm có kết quả tốt nhất?
            </div>
            <h4>Mánh khóe phổ biến</h4>
            <ul>
                <li>Trục Y không bắt đầu từ 0</li>
                <li>Chọn khoảng thời gian có lợi</li>
                <li>Dùng mean thay vì median</li>
                <li>Cỡ mẫu quá nhỏ</li>
            </ul>
        `,
        detail: `
            <h3>📊 Các chiêu trò thống kê</h3>
            <h4>1. Biểu đồ gây hiểu lầm</h4>
            <div class="warning-box">
                <strong>Trục Y cắt xén:</strong> Biến đổi 1% trông như 100% bằng cách bắt đầu trục Y từ 99% thay vì 0%.
            </div>
            <h4>2. Cherry-picking dữ liệu</h4>
            <p>Chọn đúng khoảng thời gian để kết quả có vẻ tốt hơn thực tế.</p>
            <h4>3. Tương quan giả</h4>
            <table>
                <tr><th>Sự kiện A</th><th>Sự kiện B</th><th>Thực tế</th></tr>
                <tr><td>Ăn kem tăng</td><td>Đuối nước tăng</td><td>Do mùa hè</td></tr>
                <tr><td>Doanh thu TV</td><td>Tỉ lệ ly hôn</td><td>Trùng hợp ngẫu nhiên</td></tr>
            </table>
            <div class="tip-box">
                <strong>💡 Cách tự bảo vệ:</strong> Luôn hỏi: Ai thực hiện? Cỡ mẫu? Ai tài trợ? Đã peer-review chưa?
            </div>
        `,
        advanced: `
            <h3>🎓 Phân tích phê phán thống kê</h3>
            <h4>P-hacking</h4>
            <p>Thử nhiều biến số/phương pháp khác nhau cho đến khi tìm được kết quả "có ý nghĩa thống kê" (p < 0.05).</p>
            <h4>Câu hỏi cần đặt ra</h4>
            <ul>
                <li>Nghiên cứu có được nhân bản (replicate) không?</li>
                <li>Kích thước hiệu ứng (effect size) là bao nhiêu?</li>
                <li>Khoảng tin cậy rộng hay hẹp?</li>
                <li>Có xung đột lợi ích không?</li>
            </ul>
            <h4>Cuốn sách nên đọc</h4>
            <p>"How to Lie with Statistics" (Darrell Huff, 1954) - Cuốn sách kinh điển về nhận biết thống kê sai lệch, vẫn còn nguyên giá trị sau 70 năm.</p>
        `
    }
};
