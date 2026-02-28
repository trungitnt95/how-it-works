// Quality Methodologies
const methodologiesData = {
    'six-sigma': {
        icon: '📊',
        title: 'Six Sigma',
        category: 'methodologies',
        level: 'intermediate',
        connections: ['lean', 'spc'],
        simple: `
            <h3>📊 Six Sigma là gì?</h3>
            <p><strong>Six Sigma</strong> là phương pháp cải tiến chất lượng nhằm giảm thiểu khuyết tật xuống mức <em>3.4 lỗi trên 1 triệu cơ hội</em> (DPMO).</p>
            <div class="formula-box">
                6σ = 99.99966% sản phẩm đạt yêu cầu = 3.4 DPMO
            </div>
            <h4>Các cấp độ Sigma</h4>
            <ul>
                <li><strong>1σ:</strong> 691,462 DPMO (30.9% đạt) - Rất kém</li>
                <li><strong>2σ:</strong> 308,538 DPMO (69.1% đạt)</li>
                <li><strong>3σ:</strong> 66,807 DPMO (93.3% đạt) - Trung bình</li>
                <li><strong>4σ:</strong> 6,210 DPMO (99.4% đạt)</li>
                <li><strong>5σ:</strong> 233 DPMO (99.98% đạt)</li>
                <li><strong>6σ:</strong> 3.4 DPMO (99.99966% đạt) - Xuất sắc</li>
            </ul>
            <div class="tip-box">
                <strong>💡 Ví dụ:</strong> Ở mức 3σ, bưu điện sẽ thất lạc 20,000 lá thư mỗi giờ. Ở mức 6σ, chỉ mất 1 lá thư mỗi giờ.
            </div>
        `,
        detail: `
            <h3>📊 Phương pháp DMAIC</h3>
            <p>DMAIC là phương pháp luận cốt lõi của Six Sigma cho cải tiến quy trình hiện tại:</p>
            <h4>D - Define (Xác định)</h4>
            <ul>
                <li>Xác định vấn đề và phạm vi dự án</li>
                <li>Lập Project Charter (Hiến chương dự án)</li>
                <li>Xác định VOC (Voice of Customer)</li>
                <li>Sơ đồ SIPOC (Supplier-Input-Process-Output-Customer)</li>
            </ul>
            <h4>M - Measure (Đo lường)</h4>
            <ul>
                <li>Xác định các chỉ số CTQ (Critical to Quality)</li>
                <li>Thu thập dữ liệu hiện trạng</li>
                <li>Đánh giá hệ thống đo lường (MSA)</li>
                <li>Tính mức sigma hiện tại</li>
            </ul>
            <h4>A - Analyze (Phân tích)</h4>
            <ul>
                <li>Phân tích nguyên nhân gốc</li>
                <li>Kiểm định giả thuyết thống kê</li>
                <li>Xác định biến số quan trọng (vital few)</li>
            </ul>
            <h4>I - Improve (Cải tiến)</h4>
            <ul>
                <li>Tạo và đánh giá giải pháp</li>
                <li>Thiết kế thử nghiệm (DOE)</li>
                <li>Triển khai thí điểm</li>
            </ul>
            <h4>C - Control (Kiểm soát)</h4>
            <ul>
                <li>Lập kế hoạch kiểm soát</li>
                <li>Biểu đồ kiểm soát SPC</li>
                <li>Chuẩn hóa quy trình mới</li>
                <li>Bàn giao cho Process Owner</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 Six Sigma nâng cao</h3>
            <h4>Hệ thống Belt</h4>
            <table>
                <tr><th>Belt</th><th>Vai trò</th><th>Đào tạo</th></tr>
                <tr><td><strong>Yellow Belt</strong></td><td>Thành viên dự án, hiểu cơ bản</td><td>1-2 ngày</td></tr>
                <tr><td><strong>Green Belt</strong></td><td>Dẫn dắt dự án nhỏ, part-time</td><td>2-3 tuần</td></tr>
                <tr><td><strong>Black Belt</strong></td><td>Dẫn dắt dự án phức tạp, full-time</td><td>4-5 tuần</td></tr>
                <tr><td><strong>Master Black Belt</strong></td><td>Huấn luyện, coaching, chiến lược</td><td>Kinh nghiệm + chứng nhận</td></tr>
            </table>
            <h4>DMAIC vs DMADV (DFSS)</h4>
            <p><strong>DMADV</strong> (Define-Measure-Analyze-Design-Verify) dùng cho thiết kế sản phẩm/quy trình mới, trong khi DMAIC dùng cho cải tiến quy trình hiện có.</p>
            <h4>Công cụ thống kê trong Six Sigma</h4>
            <ul>
                <li><strong>Process Capability:</strong> Cp, Cpk, Pp, Ppk</li>
                <li><strong>Hypothesis Testing:</strong> t-test, ANOVA, Chi-square</li>
                <li><strong>Regression:</strong> Phân tích hồi quy tuyến tính, đa biến</li>
                <li><strong>DOE:</strong> Full factorial, fractional factorial, Taguchi</li>
            </ul>
            <div class="example-box">
                <strong>Case study - GE:</strong> Jack Welch triển khai Six Sigma tại GE năm 1996. Trong 5 năm đầu, GE tiết kiệm được hơn 12 tỷ USD. Mỗi Black Belt tiết kiệm trung bình 230,000 USD/dự án.
            </div>
        `
    },
    'lean': {
        icon: '🏭',
        title: 'Lean Manufacturing',
        category: 'methodologies',
        level: 'intermediate',
        connections: ['six-sigma', 'kaizen'],
        simple: `
            <h3>🏭 Lean Manufacturing</h3>
            <p><strong>Lean</strong> là triết lý sản xuất tập trung vào việc <em>loại bỏ lãng phí</em> (Muda) và tối đa hóa giá trị cho khách hàng.</p>
            <h4>7 loại lãng phí (TIMWOOD)</h4>
            <ol>
                <li><strong>T - Transport:</strong> Vận chuyển không cần thiết</li>
                <li><strong>I - Inventory:</strong> Tồn kho quá mức</li>
                <li><strong>M - Motion:</strong> Chuyển động thừa của người/máy</li>
                <li><strong>W - Waiting:</strong> Chờ đợi (nguyên liệu, phê duyệt, máy)</li>
                <li><strong>O - Overproduction:</strong> Sản xuất thừa (lãng phí lớn nhất!)</li>
                <li><strong>O - Over-processing:</strong> Gia công quá mức cần thiết</li>
                <li><strong>D - Defects:</strong> Sản phẩm lỗi, phế phẩm</li>
            </ol>
            <div class="tip-box">
                <strong>💡 Ghi nhớ:</strong> TIMWOOD - 7 loại lãng phí. Một số thêm loại thứ 8: <strong>Skills</strong> (không tận dụng tài năng nhân viên).
            </div>
        `,
        detail: `
            <h3>📊 Công cụ Lean</h3>
            <h4>Value Stream Mapping (VSM)</h4>
            <p>Sơ đồ dòng giá trị giúp trực quan hóa toàn bộ quy trình từ nguyên liệu đến khách hàng, xác định hoạt động tạo giá trị và lãng phí.</p>
            <ul>
                <li><strong>Current State Map:</strong> Bản đồ hiện trạng</li>
                <li><strong>Future State Map:</strong> Bản đồ mục tiêu cải tiến</li>
                <li>Đo Lead Time, Cycle Time, Takt Time</li>
            </ul>
            <h4>Just-in-Time (JIT)</h4>
            <p>Sản xuất đúng sản phẩm, đúng số lượng, đúng thời điểm. Giảm tồn kho, tăng tốc độ phản hồi.</p>
            <ul>
                <li><strong>Pull System:</strong> Sản xuất khi có nhu cầu (không đẩy hàng)</li>
                <li><strong>Kanban:</strong> Hệ thống thẻ tín hiệu điều phối sản xuất</li>
                <li><strong>One-Piece Flow:</strong> Dòng chảy từng sản phẩm một</li>
            </ul>
            <h4>Các công cụ khác</h4>
            <ul>
                <li><strong>5S:</strong> Sàng lọc, Sắp xếp, Sạch sẽ, Săn sóc, Sẵn sàng</li>
                <li><strong>Poka-Yoke:</strong> Thiết bị chống sai lỗi</li>
                <li><strong>SMED:</strong> Chuyển đổi nhanh (Single Minute Exchange of Die)</li>
                <li><strong>TPM:</strong> Bảo trì năng suất toàn diện</li>
                <li><strong>Visual Management:</strong> Quản lý trực quan (bảng Andon, KPI board)</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 Lean nâng cao</h3>
            <h4>Toyota Production System (TPS)</h4>
            <p>TPS là nền tảng của Lean, được xây dựng trên 2 trụ cột:</p>
            <table>
                <tr><th>Trụ cột</th><th>Ý nghĩa</th><th>Công cụ</th></tr>
                <tr><td><strong>Just-in-Time</strong></td><td>Sản xuất kéo, dòng chảy liên tục</td><td>Kanban, Heijunka, Takt Time</td></tr>
                <tr><td><strong>Jidoka</strong></td><td>Tự động hóa thông minh, dừng khi có lỗi</td><td>Andon, Poka-Yoke, Root Cause</td></tr>
            </table>
            <p>Nền tảng: <strong>Heijunka</strong> (cân bằng sản xuất), <strong>Standardized Work</strong>, <strong>Kaizen</strong>.</p>
            <h4>Lean Six Sigma</h4>
            <p>Kết hợp Lean (tốc độ, loại bỏ lãng phí) + Six Sigma (giảm biến động, dữ liệu thống kê):</p>
            <ul>
                <li>Lean giải quyết: Tốc độ, dòng chảy, lãng phí</li>
                <li>Six Sigma giải quyết: Biến động, khuyết tật, độ chính xác</li>
                <li>Kết hợp → Nhanh hơn + Chính xác hơn</li>
            </ul>
            <div class="example-box">
                <strong>Takt Time:</strong> Nhịp sản xuất = Thời gian làm việc khả dụng / Nhu cầu khách hàng. Ví dụ: 480 phút/ngày ÷ 240 sản phẩm = 2 phút/sản phẩm.
            </div>
            <h4>Lean trong dịch vụ</h4>
            <p>Lean không chỉ cho sản xuất. Áp dụng trong bệnh viện (giảm thời gian chờ), ngân hàng (đơn giản hóa quy trình), IT (Agile/DevOps), và hành chính công.</p>
        `
    },
    'tqm': {
        icon: '🌐',
        title: 'TQM - Quản Lý CL Toàn Diện',
        category: 'methodologies',
        level: 'intermediate',
        connections: ['quality-principles', 'kaizen'],
        simple: `
            <h3>🌐 TQM là gì?</h3>
            <p><strong>TQM (Total Quality Management)</strong> là triết lý quản lý toàn diện, trong đó <em>mọi thành viên</em> tổ chức đều tham gia vào việc cải tiến liên tục.</p>
            <h4>Đặc điểm chính của TQM</h4>
            <ul>
                <li><strong>Total (Toàn diện):</strong> Mọi bộ phận, mọi người, mọi quy trình</li>
                <li><strong>Quality (Chất lượng):</strong> Đáp ứng và vượt kỳ vọng khách hàng</li>
                <li><strong>Management (Quản lý):</strong> Lãnh đạo cam kết, hệ thống quản lý</li>
            </ul>
            <div class="example-box">
                <strong>Ví dụ:</strong> Tại Toyota, từ công nhân đến CEO đều có quyền dừng dây chuyền khi phát hiện lỗi (hệ thống Andon). Đó là tinh thần TQM.
            </div>
        `,
        detail: `
            <h3>📊 Nguyên tắc TQM</h3>
            <h4>8 yếu tố then chốt của TQM</h4>
            <ol>
                <li><strong>Hướng vào khách hàng:</strong> Khách hàng là trung tâm mọi hoạt động</li>
                <li><strong>Sự tham gia toàn diện:</strong> Mọi nhân viên đều là "chủ sở hữu" chất lượng</li>
                <li><strong>Tiếp cận theo quá trình:</strong> Tập trung vào cải tiến quá trình, không đổ lỗi cá nhân</li>
                <li><strong>Hệ thống tích hợp:</strong> Kết nối các bộ phận thành một hệ thống thống nhất</li>
                <li><strong>Chiến lược và hệ thống:</strong> Chất lượng là chiến lược kinh doanh cốt lõi</li>
                <li><strong>Cải tiến liên tục:</strong> Không bao giờ ngừng cải tiến (Kaizen)</li>
                <li><strong>Ra QĐ dựa trên dữ liệu:</strong> Thu thập, phân tích dữ liệu để ra quyết định</li>
                <li><strong>Giao tiếp:</strong> Minh bạch thông tin ở mọi cấp</li>
            </ol>
            <h4>Deming's 14 Points (tóm tắt)</h4>
            <ul>
                <li>Tạo sự kiên định về mục đích cải tiến</li>
                <li>Áp dụng triết lý mới</li>
                <li>Chấm dứt phụ thuộc vào kiểm tra hàng loạt</li>
                <li>Không chọn nhà cung cấp chỉ dựa vào giá</li>
                <li>Cải tiến liên tục mọi quá trình</li>
                <li>Đào tạo tại chỗ</li>
                <li>Thiết lập sự lãnh đạo</li>
                <li>Xóa bỏ nỗi sợ hãi</li>
                <li>Phá bỏ rào cản giữa các bộ phận</li>
                <li>Loại bỏ khẩu hiệu rỗng</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 TQM nâng cao</h3>
            <h4>Mô hình EFQM Excellence</h4>
            <p>European Foundation for Quality Management cung cấp framework đánh giá tổ chức:</p>
            <table>
                <tr><th>Nhóm</th><th>Tiêu chí</th><th>Trọng số</th></tr>
                <tr><td rowspan="5"><strong>Enablers (50%)</strong></td><td>1. Leadership</td><td>10%</td></tr>
                <tr><td>2. Strategy</td><td>10%</td></tr>
                <tr><td>3. People</td><td>10%</td></tr>
                <tr><td>4. Partnerships & Resources</td><td>10%</td></tr>
                <tr><td>5. Processes, Products & Services</td><td>10%</td></tr>
                <tr><td rowspan="4"><strong>Results (50%)</strong></td><td>6. Customer Results</td><td>15%</td></tr>
                <tr><td>7. People Results</td><td>10%</td></tr>
                <tr><td>8. Society Results</td><td>10%</td></tr>
                <tr><td>9. Business Results</td><td>15%</td></tr>
            </table>
            <h4>Malcolm Baldrige Award</h4>
            <p>Giải thưởng chất lượng quốc gia Mỹ với 7 tiêu chí: Leadership, Strategy, Customers, Measurement, Workforce, Operations, Results.</p>
            <h4>TQM trong thực tế</h4>
            <div class="warning-box">
                <strong>⚠️ Tại sao TQM thất bại?</strong>
                <ul>
                    <li>Thiếu cam kết từ lãnh đạo cấp cao</li>
                    <li>Chỉ áp dụng hình thức, không thay đổi văn hóa</li>
                    <li>Kỳ vọng kết quả nhanh chóng</li>
                    <li>Không đầu tư đào tạo đầy đủ</li>
                    <li>Thiếu đo lường và theo dõi tiến độ</li>
                </ul>
            </div>
        `
    },
    'kaizen': {
        icon: '📈',
        title: 'Kaizen - Cải Tiến Liên Tục',
        category: 'methodologies',
        level: 'beginner',
        connections: ['pdca-cycle', 'lean'],
        simple: `
            <h3>📈 Kaizen là gì?</h3>
            <p><strong>Kaizen</strong> (改善) là triết lý cải tiến liên tục của Nhật Bản. <em>Kai</em> = Thay đổi, <em>Zen</em> = Tốt hơn.</p>
            <h4>Nguyên tắc Kaizen</h4>
            <ul>
                <li><strong>Cải tiến nhỏ, liên tục:</strong> Mỗi ngày tốt hơn 1% = sau 1 năm tốt hơn 37 lần</li>
                <li><strong>Mọi người tham gia:</strong> Từ CEO đến công nhân tuyến đầu</li>
                <li><strong>Chi phí thấp:</strong> Dùng trí tuệ thay vì tiền bạc</li>
                <li><strong>Gemba:</strong> Đi đến nơi làm việc thực tế để hiểu vấn đề</li>
            </ul>
            <div class="example-box">
                <strong>Ví dụ:</strong> Một công nhân đề xuất xoay vị trí đặt linh kiện để giảm 2 giây/thao tác. Nhỏ? Nhưng với 1000 lần/ngày = tiết kiệm 33 phút/ngày!
            </div>
        `,
        detail: `
            <h3>📊 5S - Nền tảng Kaizen</h3>
            <p>5S là hệ thống tổ chức nơi làm việc, nền tảng cho mọi hoạt động cải tiến:</p>
            <table>
                <tr><th>Tiếng Nhật</th><th>Tiếng Việt</th><th>Ý nghĩa</th></tr>
                <tr><td><strong>Seiri</strong> (整理)</td><td>Sàng lọc</td><td>Loại bỏ vật không cần thiết</td></tr>
                <tr><td><strong>Seiton</strong> (整頓)</td><td>Sắp xếp</td><td>Mỗi thứ một chỗ, mỗi chỗ một thứ</td></tr>
                <tr><td><strong>Seiso</strong> (清掃)</td><td>Sạch sẽ</td><td>Vệ sinh nơi làm việc, kiểm tra bất thường</td></tr>
                <tr><td><strong>Seiketsu</strong> (清潔)</td><td>Săn sóc</td><td>Chuẩn hóa 3S đầu, tạo quy tắc</td></tr>
                <tr><td><strong>Shitsuke</strong> (躾)</td><td>Sẵn sàng</td><td>Duy trì kỷ luật, thành thói quen</td></tr>
            </table>
            <h4>Gemba Walk</h4>
            <p>Lãnh đạo đi đến hiện trường (Gemba) để quan sát trực tiếp, đặt câu hỏi, và hiểu vấn đề thực tế.</p>
            <ul>
                <li>Đi đến nơi xảy ra vấn đề (Go to Gemba)</li>
                <li>Quan sát hiện vật (Gembutsu)</li>
                <li>Kiểm tra thực tế (Genjitsu)</li>
            </ul>
            <h4>Kaizen Event (Kaizen Blitz)</h4>
            <p>Sự kiện cải tiến tập trung trong 3-5 ngày với nhóm đa chức năng:</p>
            <ol>
                <li>Ngày 1: Đào tạo và phân tích hiện trạng</li>
                <li>Ngày 2-3: Brainstorm và triển khai giải pháp</li>
                <li>Ngày 4: Kiểm tra và điều chỉnh</li>
                <li>Ngày 5: Chuẩn hóa và trình bày kết quả</li>
            </ol>
        `,
        advanced: `
            <h3>🎓 Kaizen nâng cao</h3>
            <h4>Văn hóa Kaizen tại Nhật Bản</h4>
            <p>Kaizen không chỉ là công cụ mà là <strong>triết lý sống</strong>. Tại Nhật Bản, mỗi nhân viên Toyota đề xuất trung bình <strong>10-12 ý tưởng cải tiến/năm</strong>, tỷ lệ thực hiện >90%.</p>
            <h4>Kaizen vs Innovation</h4>
            <table>
                <tr><th>Tiêu chí</th><th>Kaizen</th><th>Innovation</th></tr>
                <tr><td>Quy mô</td><td>Nhỏ, liên tục</td><td>Lớn, đột phá</td></tr>
                <tr><td>Rủi ro</td><td>Thấp</td><td>Cao</td></tr>
                <tr><td>Chi phí</td><td>Thấp</td><td>Cao</td></tr>
                <tr><td>Người tham gia</td><td>Mọi người</td><td>Chuyên gia, R&D</td></tr>
                <tr><td>Kết quả</td><td>Dần dần, bền vững</td><td>Nhanh, có thể không bền</td></tr>
                <tr><td>Phù hợp</td><td>Kinh tế tăng trưởng chậm</td><td>Kinh tế tăng trưởng nhanh</td></tr>
            </table>
            <div class="tip-box">
                <strong>💡 Bài học:</strong> Tổ chức xuất sắc kết hợp cả Kaizen (cải tiến liên tục) và Innovation (đổi mới đột phá).
            </div>
            <h4>Hệ thống đề xuất (Suggestion System)</h4>
            <ul>
                <li><strong>Bước 1:</strong> Khuyến khích mọi nhân viên đề xuất</li>
                <li><strong>Bước 2:</strong> Đánh giá nhanh (trong 48 giờ)</li>
                <li><strong>Bước 3:</strong> Thực hiện ngay các đề xuất đơn giản</li>
                <li><strong>Bước 4:</strong> Khen thưởng (không nhất thiết bằng tiền)</li>
                <li><strong>Bước 5:</strong> Chia sẻ kết quả (Yokoten - nhân rộng)</li>
            </ul>
            <div class="example-box">
                <strong>Toyota:</strong> Từ 1951-2021, nhân viên Toyota đã đề xuất hơn 40 triệu ý tưởng cải tiến. Đây là sức mạnh thực sự của Kaizen.
            </div>
        `
    },
    'agile-quality': {
        icon: '🔄',
        title: 'Chất Lượng Trong Agile',
        category: 'methodologies',
        level: 'advanced',
        connections: ['six-sigma', 'software-quality'],
        simple: `
            <h3>🔄 Chất lượng trong Agile</h3>
            <p>Trong phát triển phần mềm Agile, chất lượng được <strong>tích hợp vào mọi bước</strong> thay vì kiểm tra ở cuối.</p>
            <h4>Nguyên tắc chất lượng Agile</h4>
            <ul>
                <li><strong>Definition of Done (DoD):</strong> Tiêu chí rõ ràng để hoàn thành</li>
                <li><strong>Test-Driven Development:</strong> Viết test trước khi viết code</li>
                <li><strong>Continuous Integration:</strong> Tích hợp và kiểm tra liên tục</li>
                <li><strong>Retrospective:</strong> Nhìn lại và cải tiến mỗi sprint</li>
            </ul>
            <div class="tip-box">
                <strong>💡 Shift-Left Testing:</strong> Kiểm tra sớm nhất có thể - phát hiện lỗi sớm = sửa rẻ hơn.
            </div>
        `,
        detail: `
            <h3>📊 Testing Pyramid</h3>
            <p>Kim tự tháp kiểm thử định nghĩa tỷ lệ các loại test:</p>
            <table>
                <tr><th>Tầng</th><th>Loại test</th><th>Tỷ lệ</th><th>Tốc độ</th></tr>
                <tr><td>🔺 Đỉnh</td><td>E2E / UI Tests</td><td>~10%</td><td>Chậm</td></tr>
                <tr><td>🔶 Giữa</td><td>Integration Tests</td><td>~20%</td><td>Trung bình</td></tr>
                <tr><td>🟩 Đáy</td><td>Unit Tests</td><td>~70%</td><td>Nhanh</td></tr>
            </table>
            <h4>CI/CD Quality Gates</h4>
            <ul>
                <li><strong>Build Gate:</strong> Code phải compile thành công</li>
                <li><strong>Test Gate:</strong> Tất cả tests phải pass</li>
                <li><strong>Coverage Gate:</strong> Code coverage ≥ 80%</li>
                <li><strong>Quality Gate:</strong> Không có critical bugs (SonarQube)</li>
                <li><strong>Security Gate:</strong> Không có vulnerabilities nghiêm trọng</li>
                <li><strong>Performance Gate:</strong> Response time ≤ threshold</li>
            </ul>
            <h4>Definition of Done (DoD)</h4>
            <p>Checklist mẫu cho mỗi user story:</p>
            <ul>
                <li>✅ Code reviewed bởi ít nhất 1 người</li>
                <li>✅ Unit tests viết và pass (coverage ≥ 80%)</li>
                <li>✅ Integration tests pass</li>
                <li>✅ Không có bugs blocking/critical</li>
                <li>✅ Documentation cập nhật</li>
                <li>✅ Deploy thành công lên staging</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 DevOps Quality Practices</h3>
            <h4>Shift-Left & Shift-Right</h4>
            <table>
                <tr><th>Hướng</th><th>Ý nghĩa</th><th>Thực hành</th></tr>
                <tr><td><strong>Shift-Left</strong></td><td>Kiểm tra sớm hơn trong SDLC</td><td>TDD, pair programming, static analysis, security scanning</td></tr>
                <tr><td><strong>Shift-Right</strong></td><td>Kiểm tra trong production</td><td>Canary deployment, A/B testing, monitoring, chaos engineering</td></tr>
            </table>
            <h4>Quality as Code</h4>
            <p>Mọi tiêu chuẩn chất lượng được code hóa và tự động hóa:</p>
            <ul>
                <li><strong>Infrastructure as Code:</strong> Terraform, Ansible - đảm bảo môi trường nhất quán</li>
                <li><strong>Policy as Code:</strong> OPA, Sentinel - kiểm tra tuân thủ tự động</li>
                <li><strong>Test as Code:</strong> Automated test suites chạy trong pipeline</li>
                <li><strong>Monitoring as Code:</strong> Alerts và dashboards version-controlled</li>
            </ul>
            <h4>Metrics chất lượng phần mềm</h4>
            <ul>
                <li><strong>DORA Metrics:</strong> Deployment frequency, Lead time, Change failure rate, MTTR</li>
                <li><strong>Technical Debt Ratio:</strong> Tỷ lệ nợ kỹ thuật so với effort phát triển</li>
                <li><strong>Defect Density:</strong> Số lỗi trên 1000 dòng code</li>
                <li><strong>Escaped Defects:</strong> Lỗi lọt đến production</li>
            </ul>
            <div class="warning-box">
                <strong>⚠️ Cảnh báo:</strong> Đo lường để cải tiến, không phải để trừng phạt. "Goodhart's Law": Khi một chỉ số trở thành mục tiêu, nó không còn là chỉ số tốt nữa.
            </div>
        `
    }
};
