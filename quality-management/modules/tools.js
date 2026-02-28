// Quality Tools
const qualityToolsData = {
    'seven-tools': {
        icon: '🔧',
        title: '7 Công Cụ QC',
        category: 'tools',
        level: 'beginner',
        connections: ['spc', 'root-cause'],
        simple: `
            <h3>🔧 7 Công cụ QC cơ bản</h3>
            <p><strong>7 công cụ kiểm soát chất lượng</strong> là bộ công cụ cơ bản mà mọi người làm chất lượng cần nắm vững:</p>
            <ol>
                <li><strong>📊 Biểu đồ Pareto:</strong> 80% vấn đề đến từ 20% nguyên nhân</li>
                <li><strong>🐟 Biểu đồ nhân quả (Ishikawa):</strong> Xương cá - tìm nguyên nhân gốc</li>
                <li><strong>📈 Biểu đồ tần suất (Histogram):</strong> Phân bố dữ liệu</li>
                <li><strong>📉 Biểu đồ kiểm soát (Control Chart):</strong> Theo dõi quá trình theo thời gian</li>
                <li><strong>⬡ Biểu đồ phân tán (Scatter):</strong> Mối quan hệ giữa 2 biến</li>
                <li><strong>🔀 Lưu đồ (Flowchart):</strong> Trực quan hóa quy trình</li>
                <li><strong>✅ Phiếu kiểm tra (Check Sheet):</strong> Thu thập dữ liệu có hệ thống</li>
            </ol>
            <div class="tip-box">
                <strong>💡 Ghi nhớ:</strong> Kaoru Ishikawa tin rằng 95% vấn đề có thể giải quyết bằng 7 công cụ đơn giản này.
            </div>
        `,
        detail: `
            <h3>📊 Chi tiết từng công cụ</h3>
            <h4>1. Biểu đồ Pareto</h4>
            <p>Biểu đồ cột sắp xếp giảm dần + đường tích lũy. Giúp xác định "vital few" - những nguyên nhân quan trọng nhất.</p>
            <div class="example-box">
                <strong>Khi nào dùng:</strong> Xác định ưu tiên cải tiến, phân bổ nguồn lực hiệu quả.
            </div>
            <h4>2. Biểu đồ Ishikawa (Xương cá)</h4>
            <p>6M: Man, Machine, Method, Material, Measurement, Mother Nature (Environment). Brainstorm nguyên nhân theo từng nhánh.</p>
            <h4>3. Histogram</h4>
            <p>Biểu đồ tần suất cho thấy phân bố dữ liệu: trung tâm, độ rộng, hình dạng (chuông, lệch trái/phải, hai đỉnh).</p>
            <h4>4. Control Chart (Biểu đồ kiểm soát)</h4>
            <p>Theo dõi biến động quá trình theo thời gian với 3 đường: UCL (Upper Control Limit), CL (Center Line), LCL (Lower Control Limit).</p>
            <h4>5. Scatter Diagram</h4>
            <p>Xác định mối tương quan giữa 2 biến: dương, âm, không tương quan.</p>
            <h4>6. Flowchart</h4>
            <p>Trực quan hóa các bước trong quy trình, xác định điểm nghẽn và cơ hội cải tiến.</p>
            <h4>7. Check Sheet</h4>
            <p>Mẫu thu thập dữ liệu có cấu trúc. Ghi nhận tần suất, vị trí, loại lỗi một cách hệ thống.</p>
        `,
        advanced: `
            <h3>🎓 7 Công cụ quản lý mới</h3>
            <p>Ngoài 7 QC tools, còn có <strong>7 Management & Planning Tools</strong> (7 New QC Tools):</p>
            <table>
                <tr><th>Công cụ</th><th>Mục đích</th></tr>
                <tr><td><strong>Affinity Diagram</strong></td><td>Nhóm ý tưởng/dữ liệu theo chủ đề</td></tr>
                <tr><td><strong>Relations Diagram</strong></td><td>Xác định mối quan hệ nhân quả phức tạp</td></tr>
                <tr><td><strong>Tree Diagram</strong></td><td>Phân rã mục tiêu thành hành động cụ thể</td></tr>
                <tr><td><strong>Matrix Diagram</strong></td><td>Phân tích mối quan hệ giữa các nhóm yếu tố</td></tr>
                <tr><td><strong>Matrix Data Analysis</strong></td><td>Phân tích dữ liệu ma trận (PCA)</td></tr>
                <tr><td><strong>Arrow Diagram</strong></td><td>Lập lịch trình dự án (CPM/PERT)</td></tr>
                <tr><td><strong>PDPC</strong></td><td>Process Decision Program Chart - lập kế hoạch dự phòng</td></tr>
            </table>
            <h4>Kết hợp công cụ</h4>
            <div class="example-box">
                <strong>Quy trình giải quyết vấn đề:</strong>
                <ol>
                    <li><strong>Check Sheet</strong> → Thu thập dữ liệu</li>
                    <li><strong>Pareto</strong> → Xác định vấn đề ưu tiên</li>
                    <li><strong>Ishikawa</strong> → Phân tích nguyên nhân</li>
                    <li><strong>Scatter</strong> → Xác minh mối quan hệ</li>
                    <li><strong>Histogram</strong> → Phân tích phân bố</li>
                    <li><strong>Control Chart</strong> → Kiểm soát sau cải tiến</li>
                    <li><strong>Flowchart</strong> → Chuẩn hóa quy trình mới</li>
                </ol>
            </div>
        `
    },
    'spc': {
        icon: '📈',
        title: 'Kiểm Soát Quá Trình (SPC)',
        category: 'tools',
        level: 'intermediate',
        connections: ['seven-tools', 'six-sigma'],
        simple: `
            <h3>📈 SPC là gì?</h3>
            <p><strong>SPC (Statistical Process Control)</strong> là việc sử dụng phương pháp thống kê để <em>giám sát và kiểm soát</em> quá trình sản xuất.</p>
            <h4>Khái niệm cốt lõi</h4>
            <ul>
                <li><strong>Biến động thường:</strong> Do nguyên nhân chung (random), luôn tồn tại, ổn định</li>
                <li><strong>Biến động đặc biệt:</strong> Do nguyên nhân đặc biệt, cần tìm và loại bỏ</li>
            </ul>
            <div class="example-box">
                <strong>Ví dụ:</strong> Máy đóng chai nước 500ml. Biến động thường: mỗi chai chênh lệch ±2ml. Biến động đặc biệt: đột nhiên các chai chỉ có 480ml → máy bị lỗi!
            </div>
            <h4>Biểu đồ kiểm soát</h4>
            <ul>
                <li><strong>UCL:</strong> Giới hạn kiểm soát trên</li>
                <li><strong>CL:</strong> Đường trung tâm (trung bình)</li>
                <li><strong>LCL:</strong> Giới hạn kiểm soát dưới</li>
            </ul>
        `,
        detail: `
            <h3>📊 Các loại biểu đồ kiểm soát</h3>
            <h4>Dữ liệu biến (Variables)</h4>
            <table>
                <tr><th>Biểu đồ</th><th>Đo gì</th><th>Khi nào dùng</th></tr>
                <tr><td><strong>X̄-R</strong></td><td>Trung bình và khoảng</td><td>n < 10, phổ biến nhất</td></tr>
                <tr><td><strong>X̄-S</strong></td><td>Trung bình và độ lệch chuẩn</td><td>n ≥ 10</td></tr>
                <tr><td><strong>I-MR</strong></td><td>Giá trị cá thể và Moving Range</td><td>n = 1 (mỗi lần đo 1 mẫu)</td></tr>
            </table>
            <h4>Dữ liệu thuộc tính (Attributes)</h4>
            <table>
                <tr><th>Biểu đồ</th><th>Đo gì</th><th>Khi nào dùng</th></tr>
                <tr><td><strong>p</strong></td><td>Tỷ lệ lỗi</td><td>Cỡ mẫu thay đổi</td></tr>
                <tr><td><strong>np</strong></td><td>Số lỗi</td><td>Cỡ mẫu cố định</td></tr>
                <tr><td><strong>c</strong></td><td>Số khuyết tật</td><td>Vùng kiểm tra cố định</td></tr>
                <tr><td><strong>u</strong></td><td>Tỷ lệ khuyết tật</td><td>Vùng kiểm tra thay đổi</td></tr>
            </table>
            <h4>Chỉ số năng lực quá trình</h4>
            <div class="formula-box">
                Cp = (USL - LSL) / 6σ<br>
                Cpk = min[(USL - X̄) / 3σ, (X̄ - LSL) / 3σ]
            </div>
            <ul>
                <li><strong>Cp ≥ 1.33:</strong> Quá trình đủ năng lực</li>
                <li><strong>Cpk ≥ 1.33:</strong> Quá trình đủ năng lực và nằm giữa</li>
                <li><strong>Cp > Cpk:</strong> Quá trình bị lệch tâm</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 SPC nâng cao</h3>
            <h4>Western Electric Rules</h4>
            <p>Các quy tắc phát hiện quá trình mất kiểm soát (ngoài việc điểm nằm ngoài UCL/LCL):</p>
            <ol>
                <li><strong>Rule 1:</strong> 1 điểm ngoài giới hạn 3σ</li>
                <li><strong>Rule 2:</strong> 9 điểm liên tiếp cùng phía trung bình</li>
                <li><strong>Rule 3:</strong> 6 điểm liên tiếp tăng hoặc giảm</li>
                <li><strong>Rule 4:</strong> 14 điểm liên tiếp dao động lên xuống xen kẽ</li>
                <li><strong>Rule 5:</strong> 2/3 điểm ngoài giới hạn 2σ (cùng phía)</li>
                <li><strong>Rule 6:</strong> 4/5 điểm ngoài giới hạn 1σ (cùng phía)</li>
                <li><strong>Rule 7:</strong> 15 điểm liên tiếp trong giới hạn 1σ (hai phía)</li>
                <li><strong>Rule 8:</strong> 8 điểm liên tiếp ngoài giới hạn 1σ (hai phía)</li>
            </ol>
            <h4>Pp/Ppk vs Cp/Cpk</h4>
            <table>
                <tr><th>Chỉ số</th><th>Dùng khi</th><th>Tính σ bằng</th></tr>
                <tr><td><strong>Cp/Cpk</strong></td><td>Quá trình ổn định (within)</td><td>σ từ R̄/d₂ hoặc S̄/c₄</td></tr>
                <tr><td><strong>Pp/Ppk</strong></td><td>Đánh giá tổng thể (overall)</td><td>σ từ toàn bộ dữ liệu</td></tr>
            </table>
            <div class="warning-box">
                <strong>⚠️ Sai lầm phổ biến trong SPC:</strong>
                <ul>
                    <li>Nhầm giới hạn kiểm soát (control limits) với giới hạn kỹ thuật (spec limits)</li>
                    <li>Tính giới hạn kiểm soát từ quá ít dữ liệu (cần ≥25 subgroups)</li>
                    <li>Phản ứng quá mức với biến động thường (tampering)</li>
                    <li>Không cập nhật giới hạn kiểm soát sau khi cải tiến</li>
                </ul>
            </div>
        `
    },
    'fmea': {
        icon: '⚠️',
        title: 'FMEA - Phân Tích Lỗi',
        category: 'tools',
        level: 'intermediate',
        connections: ['root-cause', 'iso-9001'],
        simple: `
            <h3>⚠️ FMEA là gì?</h3>
            <p><strong>FMEA (Failure Mode and Effects Analysis)</strong> là công cụ phân tích để <em>dự đoán và phòng ngừa</em> các lỗi tiềm ẩn trước khi chúng xảy ra.</p>
            <h4>3 câu hỏi của FMEA</h4>
            <ol>
                <li><strong>Cái gì có thể sai?</strong> (Failure Mode)</li>
                <li><strong>Hậu quả là gì?</strong> (Effect)</li>
                <li><strong>Nguyên nhân là gì?</strong> (Cause)</li>
            </ol>
            <h4>Chỉ số RPN</h4>
            <div class="formula-box">
                RPN = Severity × Occurrence × Detection<br>
                (Mức nghiêm trọng × Tần suất × Khả năng phát hiện)
            </div>
            <p>Mỗi yếu tố đánh giá từ 1-10. RPN cao nhất = ưu tiên xử lý trước.</p>
            <div class="example-box">
                <strong>Ví dụ:</strong> Lỗi rò rỉ van nước: Severity=8 (ngập nhà), Occurrence=3 (hiếm), Detection=7 (khó phát hiện) → RPN = 168.
            </div>
        `,
        detail: `
            <h3>📊 Các loại FMEA</h3>
            <h4>DFMEA (Design FMEA)</h4>
            <p>Phân tích lỗi tiềm ẩn trong thiết kế sản phẩm:</p>
            <ul>
                <li>Thực hiện trong giai đoạn thiết kế</li>
                <li>Tập trung vào chức năng sản phẩm</li>
                <li>Xem xét điều kiện sử dụng và môi trường</li>
                <li>Output: Thay đổi thiết kế, thêm kiểm tra</li>
            </ul>
            <h4>PFMEA (Process FMEA)</h4>
            <p>Phân tích lỗi tiềm ẩn trong quy trình sản xuất:</p>
            <ul>
                <li>Thực hiện trước khi sản xuất hàng loạt</li>
                <li>Phân tích từng bước trong quy trình</li>
                <li>Xem xét con người, máy móc, phương pháp</li>
                <li>Output: Cải tiến quy trình, thêm Poka-Yoke</li>
            </ul>
            <h4>Bảng đánh giá Severity</h4>
            <table>
                <tr><th>Điểm</th><th>Mức nghiêm trọng</th><th>Mô tả</th></tr>
                <tr><td>1</td><td>Không đáng kể</td><td>Khách hàng không nhận thấy</td></tr>
                <tr><td>2-3</td><td>Nhẹ</td><td>Gây khó chịu nhẹ</td></tr>
                <tr><td>4-6</td><td>Trung bình</td><td>Giảm hiệu suất, khách không hài lòng</td></tr>
                <tr><td>7-8</td><td>Cao</td><td>Mất chức năng, khách rất không hài lòng</td></tr>
                <tr><td>9-10</td><td>Rất cao/Nguy hiểm</td><td>Nguy hiểm cho người dùng, vi phạm pháp luật</td></tr>
            </table>
        `,
        advanced: `
            <h3>🎓 FMEA theo AIAG-VDA (2019)</h3>
            <h4>Thay đổi quan trọng</h4>
            <p>Phiên bản AIAG-VDA 2019 đã thay thế RPN bằng <strong>AP (Action Priority)</strong>:</p>
            <table>
                <tr><th>Cũ (RPN)</th><th>Mới (AP)</th></tr>
                <tr><td>RPN = S × O × D</td><td>AP = Bảng tra (S, O, D)</td></tr>
                <tr><td>Nhược điểm: 6×4×2=48, 2×4×6=48 (cùng RPN nhưng rủi ro khác nhau)</td><td>Ưu tiên Severity trước, sau đó Occurrence, cuối cùng Detection</td></tr>
            </table>
            <h4>3 mức Action Priority</h4>
            <ul>
                <li><strong>🔴 High (H):</strong> Bắt buộc hành động ngay</li>
                <li><strong>🟡 Medium (M):</strong> Nên hành động</li>
                <li><strong>🟢 Low (L):</strong> Có thể hành động hoặc chấp nhận</li>
            </ul>
            <h4>7 bước FMEA (AIAG-VDA)</h4>
            <ol>
                <li><strong>Planning & Preparation:</strong> Xác định phạm vi, team, timeline</li>
                <li><strong>Structure Analysis:</strong> Phân tích cấu trúc sản phẩm/quy trình</li>
                <li><strong>Function Analysis:</strong> Xác định chức năng và yêu cầu</li>
                <li><strong>Failure Analysis:</strong> Xác định failure modes, effects, causes</li>
                <li><strong>Risk Analysis:</strong> Đánh giá S, O, D và xác định AP</li>
                <li><strong>Optimization:</strong> Lập và thực hiện hành động khắc phục</li>
                <li><strong>Results Documentation:</strong> Ghi nhận kết quả và cập nhật FMEA</li>
            </ol>
            <div class="warning-box">
                <strong>⚠️ Lưu ý:</strong> FMEA là tài liệu sống (living document) - phải cập nhật khi có thay đổi thiết kế, quy trình, hoặc sau sự cố.
            </div>
        `
    },
    'root-cause': {
        icon: '🔍',
        title: 'Phân Tích Nguyên Nhân Gốc',
        category: 'tools',
        level: 'intermediate',
        connections: ['seven-tools', 'fmea'],
        simple: `
            <h3>🔍 Phân tích nguyên nhân gốc (RCA)</h3>
            <p><strong>Root Cause Analysis</strong> là quá trình tìm ra <em>nguyên nhân gốc rễ</em> của vấn đề, không chỉ xử lý triệu chứng bề mặt.</p>
            <h4>Tại sao cần RCA?</h4>
            <ul>
                <li>Xử lý triệu chứng = vấn đề tái diễn</li>
                <li>Tìm nguyên nhân gốc = giải quyết vĩnh viễn</li>
            </ul>
            <div class="example-box">
                <strong>Ví dụ:</strong> Máy dừng đột ngột → Tại sao? Ổ bi hỏng → Tại sao? Thiếu dầu bôi trơn → Tại sao? Không có lịch bảo trì → Tại sao? Chưa xây dựng hệ thống bảo trì → <strong>ĐÓ là nguyên nhân gốc!</strong>
            </div>
            <h4>Phương pháp phổ biến</h4>
            <ul>
                <li><strong>5 Whys:</strong> Hỏi "Tại sao?" 5 lần</li>
                <li><strong>Ishikawa (Xương cá):</strong> Phân loại nguyên nhân theo 6M</li>
                <li><strong>Fault Tree Analysis:</strong> Phân tích cây lỗi</li>
            </ul>
        `,
        detail: `
            <h3>📊 Phương pháp 5 Whys</h3>
            <p>Đơn giản nhưng hiệu quả - hỏi liên tiếp "Tại sao?" để đi sâu vào nguyên nhân:</p>
            <div class="example-box">
                <strong>Ví dụ - Tượng đài Jefferson bị ăn mòn:</strong>
                <ol>
                    <li>Tại sao bị ăn mòn? → Rửa bằng hóa chất mạnh thường xuyên</li>
                    <li>Tại sao rửa thường xuyên? → Nhiều phân chim bồ câu</li>
                    <li>Tại sao nhiều bồ câu? → Nhiều nhện (thức ăn)</li>
                    <li>Tại sao nhiều nhện? → Nhiều côn trùng nhỏ bị thu hút</li>
                    <li>Tại sao côn trùng bị thu hút? → <strong>Đèn chiếu sáng bật sớm</strong></li>
                </ol>
                <p><strong>Giải pháp:</strong> Bật đèn muộn hơn 1 giờ → Giảm 90% côn trùng → Giảm chi phí vệ sinh.</p>
            </div>
            <h4>Biểu đồ Ishikawa (6M)</h4>
            <table>
                <tr><th>Nhánh</th><th>Tiếng Việt</th><th>Ví dụ nguyên nhân</th></tr>
                <tr><td><strong>Man</strong></td><td>Con người</td><td>Kỹ năng, đào tạo, kinh nghiệm, thái độ</td></tr>
                <tr><td><strong>Machine</strong></td><td>Máy móc</td><td>Hao mòn, hiệu chuẩn, bảo trì, tuổi thọ</td></tr>
                <tr><td><strong>Method</strong></td><td>Phương pháp</td><td>Quy trình, hướng dẫn, tiêu chuẩn</td></tr>
                <tr><td><strong>Material</strong></td><td>Nguyên vật liệu</td><td>Chất lượng NVL, nhà cung cấp, bảo quản</td></tr>
                <tr><td><strong>Measurement</strong></td><td>Đo lường</td><td>Thiết bị đo, phương pháp đo, hiệu chuẩn</td></tr>
                <tr><td><strong>Mother Nature</strong></td><td>Môi trường</td><td>Nhiệt độ, độ ẩm, ánh sáng, bụi</td></tr>
            </table>
        `,
        advanced: `
            <h3>🎓 RCA nâng cao</h3>
            <h4>8D Problem Solving</h4>
            <p>Phương pháp 8 bước giải quyết vấn đề có hệ thống (phổ biến trong ngành ô tô):</p>
            <table>
                <tr><th>Bước</th><th>Tên</th><th>Mô tả</th></tr>
                <tr><td><strong>D0</strong></td><td>Chuẩn bị</td><td>Đánh giá sơ bộ, quyết định có cần 8D không</td></tr>
                <tr><td><strong>D1</strong></td><td>Thành lập nhóm</td><td>Chọn nhóm đa chức năng</td></tr>
                <tr><td><strong>D2</strong></td><td>Mô tả vấn đề</td><td>IS/IS NOT, 5W2H</td></tr>
                <tr><td><strong>D3</strong></td><td>Hành động tạm thời</td><td>Containment - ngăn lỗi đến khách hàng</td></tr>
                <tr><td><strong>D4</strong></td><td>Nguyên nhân gốc</td><td>5 Whys, Ishikawa, FTA</td></tr>
                <tr><td><strong>D5</strong></td><td>Hành động khắc phục</td><td>Xác minh giải pháp permanent</td></tr>
                <tr><td><strong>D6</strong></td><td>Triển khai</td><td>Implement và verify hiệu quả</td></tr>
                <tr><td><strong>D7</strong></td><td>Phòng ngừa tái diễn</td><td>Cập nhật FMEA, control plan, training</td></tr>
                <tr><td><strong>D8</strong></td><td>Ghi nhận</td><td>Khen thưởng nhóm, chia sẻ bài học</td></tr>
            </table>
            <h4>Fault Tree Analysis (FTA)</h4>
            <p>Phương pháp top-down, sử dụng logic gates (AND/OR) để phân tích các tổ hợp nguyên nhân dẫn đến sự cố:</p>
            <ul>
                <li><strong>OR gate:</strong> Bất kỳ nguyên nhân nào cũng gây lỗi</li>
                <li><strong>AND gate:</strong> Phải có TẤT CẢ nguyên nhân mới gây lỗi</li>
                <li>Tính xác suất sự cố từ xác suất từng nguyên nhân</li>
            </ul>
            <div class="tip-box">
                <strong>💡 Best Practice:</strong> Kết hợp nhiều phương pháp: 5 Whys cho phân tích nhanh, Ishikawa cho brainstorm nhóm, FTA cho hệ thống phức tạp, 8D cho vấn đề khách hàng.
            </div>
        `
    },
    'measurement': {
        icon: '📏',
        title: 'Hệ Thống Đo Lường (MSA)',
        category: 'tools',
        level: 'advanced',
        connections: ['spc', 'six-sigma'],
        simple: `
            <h3>📏 MSA là gì?</h3>
            <p><strong>MSA (Measurement System Analysis)</strong> là phương pháp đánh giá xem hệ thống đo lường có <em>đáng tin cậy</em> hay không.</p>
            <h4>Tại sao cần MSA?</h4>
            <p>Nếu hệ thống đo lường sai, mọi quyết định dựa trên dữ liệu đó đều sai!</p>
            <ul>
                <li><strong>Accuracy (Độ chính xác):</strong> Đo gần giá trị thật</li>
                <li><strong>Precision (Độ chụm):</strong> Đo lặp lại cho kết quả giống nhau</li>
            </ul>
            <div class="example-box">
                <strong>Ví dụ:</strong> Bắn súng: Accuracy = bắn trúng tâm. Precision = các viên đạn gần nhau. Lý tưởng: vừa chính xác vừa chụm.
            </div>
            <h4>5 đặc tính MSA</h4>
            <ul>
                <li><strong>Bias:</strong> Sai lệch so với giá trị chuẩn</li>
                <li><strong>Linearity:</strong> Bias thay đổi theo dải đo</li>
                <li><strong>Stability:</strong> Kết quả ổn định theo thời gian</li>
                <li><strong>Repeatability:</strong> Cùng người đo cùng chi tiết → kết quả giống nhau</li>
                <li><strong>Reproducibility:</strong> Người khác đo cùng chi tiết → kết quả giống nhau</li>
            </ul>
        `,
        detail: `
            <h3>📊 Gage R&R Study</h3>
            <p>Gage R&R (Repeatability & Reproducibility) là phương pháp phổ biến nhất trong MSA:</p>
            <h4>Thiết kế nghiên cứu</h4>
            <ul>
                <li>Chọn <strong>10 chi tiết</strong> đại diện cho biến động quá trình</li>
                <li>Chọn <strong>3 người đo</strong> (operators)</li>
                <li>Mỗi người đo mỗi chi tiết <strong>3 lần</strong> (trials)</li>
                <li>Tổng: 10 × 3 × 3 = 90 phép đo (ngẫu nhiên, mù)</li>
            </ul>
            <h4>Phân tích kết quả</h4>
            <table>
                <tr><th>%GRR</th><th>Đánh giá</th></tr>
                <tr><td><strong>< 10%</strong></td><td>✅ Hệ thống đo chấp nhận được</td></tr>
                <tr><td><strong>10-30%</strong></td><td>⚠️ Có thể chấp nhận tùy ứng dụng</td></tr>
                <tr><td><strong>> 30%</strong></td><td>❌ Không chấp nhận, cần cải tiến</td></tr>
            </table>
            <h4>Phân tích ANOVA cho GRR</h4>
            <div class="formula-box">
                Tổng biến động = Biến động chi tiết + Biến động đo lường<br>
                Biến động đo lường = Repeatability + Reproducibility
            </div>
            <p>Phương pháp ANOVA chính xác hơn phương pháp X̄&R vì tách được interaction giữa operator và part.</p>
        `,
        advanced: `
            <h3>🎓 MSA nâng cao</h3>
            <h4>MSA cho thuộc tính (Attribute MSA)</h4>
            <p>Khi đánh giá Pass/Fail, Good/Bad, dùng <strong>Attribute Agreement Analysis</strong>:</p>
            <ul>
                <li><strong>Within Appraiser:</strong> Cùng người đánh giá có nhất quán không?</li>
                <li><strong>Between Appraiser:</strong> Các người đánh giá có đồng ý không?</li>
                <li><strong>Appraiser vs Standard:</strong> Kết quả có đúng với chuẩn không?</li>
                <li>Kappa ≥ 0.75: Tốt. Kappa ≥ 0.90: Xuất sắc</li>
            </ul>
            <h4>Hiệu chuẩn (Calibration)</h4>
            <table>
                <tr><th>Khái niệm</th><th>Mô tả</th></tr>
                <tr><td><strong>Calibration</strong></td><td>So sánh thiết bị đo với chuẩn, ghi nhận sai lệch</td></tr>
                <tr><td><strong>Adjustment</strong></td><td>Điều chỉnh thiết bị về giá trị chuẩn</td></tr>
                <tr><td><strong>Traceability</strong></td><td>Chuỗi liên kết đến chuẩn quốc tế (NIST, PTB)</td></tr>
                <tr><td><strong>Uncertainty</strong></td><td>Độ không đảm bảo đo - mọi phép đo đều có</td></tr>
            </table>
            <h4>Number of Distinct Categories (ndc)</h4>
            <div class="formula-box">
                ndc = 1.41 × (σ_part / σ_measurement)
            </div>
            <p>ndc cho biết hệ thống đo phân biệt được bao nhiêu "nhóm" khác nhau. Yêu cầu: ndc ≥ 5.</p>
            <div class="warning-box">
                <strong>⚠️ Thực tế:</strong> MSA thường bị bỏ qua nhưng cực kỳ quan trọng. Nếu %GRR > 30%, tất cả phân tích SPC, capability study đều không đáng tin cậy.
            </div>
        `
    }
};
