// Industry Quality Applications
const industryQualityData = {
    'manufacturing-quality': {
        icon: '🏭',
        title: 'CL Sản Xuất',
        category: 'industry',
        level: 'beginner',
        connections: ['seven-tools', 'spc'],
        simple: `
            <h3>🏭 Chất lượng trong sản xuất</h3>
            <p>Quản lý chất lượng sản xuất bao gồm việc <strong>kiểm soát từ đầu vào đến đầu ra</strong> để đảm bảo sản phẩm đáp ứng yêu cầu.</p>
            <h4>3 giai đoạn kiểm tra</h4>
            <ul>
                <li><strong>IQC (Incoming Quality Control):</strong> Kiểm tra nguyên vật liệu đầu vào từ nhà cung cấp</li>
                <li><strong>IPQC (In-Process Quality Control):</strong> Kiểm tra trong quá trình sản xuất</li>
                <li><strong>OQC (Outgoing Quality Control):</strong> Kiểm tra sản phẩm trước khi giao hàng</li>
            </ul>
            <div class="example-box">
                <strong>Ví dụ:</strong> Nhà máy sản xuất điện thoại: IQC kiểm tra linh kiện nhập, IPQC kiểm tra từng công đoạn lắp ráp, OQC kiểm tra chức năng và ngoại quan trước đóng gói.
            </div>
            <h4>AQL - Mức chất lượng chấp nhận</h4>
            <p><strong>AQL (Acceptable Quality Level)</strong> là tỷ lệ lỗi tối đa được chấp nhận. Ví dụ: AQL 2.5 = chấp nhận 2.5% sản phẩm lỗi trong lô hàng.</p>
        `,
        detail: `
            <h3>📊 Lấy mẫu và kiểm tra</h3>
            <h4>Sampling Plans (Kế hoạch lấy mẫu)</h4>
            <p>Theo tiêu chuẩn <strong>ISO 2859-1 (MIL-STD-1916)</strong>:</p>
            <table>
                <tr><th>Loại kiểm tra</th><th>Khi nào dùng</th></tr>
                <tr><td><strong>Normal</strong></td><td>Mặc định, bắt đầu từ đây</td></tr>
                <tr><td><strong>Tightened</strong></td><td>Khi 2/5 lô liên tiếp bị reject</td></tr>
                <tr><td><strong>Reduced</strong></td><td>Khi 10 lô liên tiếp pass + chất lượng tốt</td></tr>
            </table>
            <h4>Bảng AQL phổ biến</h4>
            <table>
                <tr><th>Loại lỗi</th><th>AQL thường dùng</th></tr>
                <tr><td><strong>Critical (Nguy hiểm)</strong></td><td>0 (không chấp nhận)</td></tr>
                <tr><td><strong>Major (Nghiêm trọng)</strong></td><td>1.0 - 2.5</td></tr>
                <tr><td><strong>Minor (Nhẹ)</strong></td><td>2.5 - 4.0</td></tr>
            </table>
            <h4>Quality Control Station</h4>
            <ul>
                <li><strong>First Article Inspection:</strong> Kiểm tra sản phẩm đầu tiên mỗi ca/lô</li>
                <li><strong>Patrol Inspection:</strong> Kiểm tra tuần tra định kỳ</li>
                <li><strong>Final Inspection:</strong> Kiểm tra cuối cùng 100% hoặc sampling</li>
                <li><strong>Special Inspection:</strong> Khi có sự cố hoặc thay đổi</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 CL sản xuất nâng cao</h3>
            <h4>Overall Equipment Effectiveness (OEE)</h4>
            <div class="formula-box">
                OEE = Availability × Performance × Quality<br>
                World-class OEE ≥ 85%
            </div>
            <table>
                <tr><th>Yếu tố</th><th>Công thức</th><th>World-class</th></tr>
                <tr><td><strong>Availability</strong></td><td>Thời gian chạy / Thời gian kế hoạch</td><td>≥ 90%</td></tr>
                <tr><td><strong>Performance</strong></td><td>Tốc độ thực tế / Tốc độ thiết kế</td><td>≥ 95%</td></tr>
                <tr><td><strong>Quality</strong></td><td>SP đạt / Tổng SP</td><td>≥ 99.9%</td></tr>
            </table>
            <h4>6 Big Losses (TPM)</h4>
            <ul>
                <li><strong>Availability:</strong> Hỏng máy đột ngột, Setup & Adjustment</li>
                <li><strong>Performance:</strong> Dừng máy ngắn (jams), chạy chậm</li>
                <li><strong>Quality:</strong> Phế phẩm khi chạy, phế phẩm khi khởi động</li>
            </ul>
            <h4>Industry 4.0 & Quality</h4>
            <ul>
                <li><strong>IoT Sensors:</strong> Giám sát chất lượng real-time</li>
                <li><strong>AI/ML:</strong> Dự đoán lỗi trước khi xảy ra (predictive quality)</li>
                <li><strong>Digital Twin:</strong> Mô phỏng quá trình sản xuất</li>
                <li><strong>Vision Inspection:</strong> Kiểm tra tự động bằng camera AI</li>
            </ul>
            <div class="tip-box">
                <strong>💡 Xu hướng:</strong> Chuyển từ QC (kiểm tra) → QA (đảm bảo) → Quality 4.0 (dự đoán và tự điều chỉnh).
            </div>
        `
    },
    'software-quality': {
        icon: '💻',
        title: 'CL Phần Mềm',
        category: 'industry',
        level: 'intermediate',
        connections: ['agile-quality', 'iso-9001'],
        simple: `
            <h3>💻 Chất lượng phần mềm</h3>
            <p>Chất lượng phần mềm được đo bằng mức độ phần mềm đáp ứng <strong>yêu cầu chức năng</strong> và <strong>yêu cầu phi chức năng</strong>.</p>
            <h4>Các cấp độ kiểm thử</h4>
            <ol>
                <li><strong>Unit Testing:</strong> Kiểm thử từng hàm/module riêng lẻ</li>
                <li><strong>Integration Testing:</strong> Kiểm thử tương tác giữa các module</li>
                <li><strong>System Testing:</strong> Kiểm thử toàn bộ hệ thống</li>
                <li><strong>UAT (User Acceptance Testing):</strong> Người dùng kiểm tra và chấp nhận</li>
            </ol>
            <div class="example-box">
                <strong>Ví dụ:</strong> Ứng dụng ngân hàng: Unit test cho hàm tính lãi suất, Integration test cho luồng chuyển tiền, System test cho toàn bộ app, UAT cho nhân viên ngân hàng thử nghiệm.
            </div>
            <h4>Code Review</h4>
            <p>Đánh giá mã nguồn bởi đồng nghiệp để phát hiện lỗi, cải thiện chất lượng code và chia sẻ kiến thức.</p>
        `,
        detail: `
            <h3>📊 Mô hình chất lượng phần mềm</h3>
            <h4>ISO 25010 (SQuaRE)</h4>
            <p>8 đặc tính chất lượng phần mềm:</p>
            <table>
                <tr><th>Đặc tính</th><th>Mô tả</th></tr>
                <tr><td><strong>Functional Suitability</strong></td><td>Đầy đủ, chính xác, phù hợp chức năng</td></tr>
                <tr><td><strong>Performance Efficiency</strong></td><td>Thời gian phản hồi, tài nguyên sử dụng</td></tr>
                <tr><td><strong>Compatibility</strong></td><td>Tương thích với hệ thống khác</td></tr>
                <tr><td><strong>Usability</strong></td><td>Dễ sử dụng, dễ học</td></tr>
                <tr><td><strong>Reliability</strong></td><td>Ổn định, khả năng phục hồi</td></tr>
                <tr><td><strong>Security</strong></td><td>Bảo mật, quyền riêng tư</td></tr>
                <tr><td><strong>Maintainability</strong></td><td>Dễ bảo trì, sửa đổi, test</td></tr>
                <tr><td><strong>Portability</strong></td><td>Dễ di chuyển, cài đặt, thay thế</td></tr>
            </table>
            <h4>CMMI Levels</h4>
            <ol>
                <li><strong>Initial:</strong> Quy trình hỗn loạn, phụ thuộc cá nhân</li>
                <li><strong>Managed:</strong> Quy trình cơ bản cho dự án</li>
                <li><strong>Defined:</strong> Quy trình chuẩn cho tổ chức</li>
                <li><strong>Quantitatively Managed:</strong> Đo lường và kiểm soát bằng thống kê</li>
                <li><strong>Optimizing:</strong> Cải tiến liên tục dựa trên dữ liệu</li>
            </ol>
            <h4>Technical Debt (Nợ kỹ thuật)</h4>
            <p>Code xấu, shortcuts, thiếu test = nợ kỹ thuật. Giống vay nợ: nhanh trước mắt nhưng trả "lãi" (chi phí bảo trì) lâu dài.</p>
        `,
        advanced: `
            <h3>🎓 CL phần mềm nâng cao</h3>
            <h4>Static Analysis Tools</h4>
            <table>
                <tr><th>Công cụ</th><th>Ngôn ngữ</th><th>Tính năng</th></tr>
                <tr><td><strong>SonarQube</strong></td><td>25+ ngôn ngữ</td><td>Bugs, vulnerabilities, code smells, coverage</td></tr>
                <tr><td><strong>ESLint</strong></td><td>JavaScript</td><td>Linting, coding standards</td></tr>
                <tr><td><strong>Checkstyle</strong></td><td>Java</td><td>Coding conventions</td></tr>
                <tr><td><strong>Pylint</strong></td><td>Python</td><td>Code quality, error detection</td></tr>
            </table>
            <h4>Mutation Testing</h4>
            <p>Đo chất lượng test bằng cách thay đổi code (mutants) và kiểm tra test có phát hiện không. Mutation score = mutants killed / total mutants.</p>
            <h4>Chaos Engineering</h4>
            <p>Netflix's Chaos Monkey: cố ý gây lỗi trong production để kiểm tra khả năng chịu lỗi (resilience) của hệ thống.</p>
            <ul>
                <li>Inject latency (tăng độ trễ)</li>
                <li>Kill processes/containers</li>
                <li>Simulate network failures</li>
                <li>Fill up disk space</li>
            </ul>
            <div class="warning-box">
                <strong>⚠️ Metrics cần theo dõi:</strong>
                <ul>
                    <li><strong>Defect Density:</strong> Số lỗi trên KLOC (1000 dòng code). Industry average: 15-50/KLOC. Top teams: 0-1/KLOC</li>
                    <li><strong>Code Coverage:</strong> Mục tiêu 80%+ (nhưng 100% không nghĩa là bug-free)</li>
                    <li><strong>MTTR:</strong> Mean Time To Recovery < 1 giờ</li>
                    <li><strong>Change Failure Rate:</strong> < 15% deployments gây incident</li>
                </ul>
            </div>
        `
    },
    'service-quality': {
        icon: '🛎️',
        title: 'CL Dịch Vụ',
        category: 'industry',
        level: 'intermediate',
        connections: ['tqm', 'iso-9001'],
        simple: `
            <h3>🛎️ Chất lượng dịch vụ</h3>
            <p>Chất lượng dịch vụ được đo bằng khoảng cách giữa <strong>kỳ vọng</strong> và <strong>trải nghiệm thực tế</strong> của khách hàng.</p>
            <h4>Đặc điểm riêng của dịch vụ</h4>
            <ul>
                <li><strong>Vô hình (Intangible):</strong> Không thể sờ, nếm, nhìn trước khi mua</li>
                <li><strong>Không tách rời (Inseparable):</strong> Sản xuất và tiêu dùng đồng thời</li>
                <li><strong>Không đồng nhất (Variable):</strong> Chất lượng thay đổi theo người phục vụ, thời điểm</li>
                <li><strong>Không lưu trữ (Perishable):</strong> Không thể tồn kho</li>
            </ul>
            <div class="example-box">
                <strong>Ví dụ:</strong> Hai lần đến cùng một nhà hàng có thể có trải nghiệm hoàn toàn khác nhau - đó là thách thức của quản lý chất lượng dịch vụ.
            </div>
        `,
        detail: `
            <h3>📊 Mô hình SERVQUAL</h3>
            <p>SERVQUAL đo lường chất lượng dịch vụ qua <strong>5 chiều (RATER)</strong>:</p>
            <table>
                <tr><th>Chiều</th><th>Tiếng Việt</th><th>Ví dụ</th></tr>
                <tr><td><strong>Reliability</strong></td><td>Độ tin cậy</td><td>Thực hiện đúng cam kết, đúng hẹn</td></tr>
                <tr><td><strong>Assurance</strong></td><td>Đảm bảo</td><td>Kiến thức, lịch sự, tạo niềm tin</td></tr>
                <tr><td><strong>Tangibles</strong></td><td>Hữu hình</td><td>Cơ sở vật chất, trang thiết bị, ngoại hình nhân viên</td></tr>
                <tr><td><strong>Empathy</strong></td><td>Đồng cảm</td><td>Quan tâm cá nhân, hiểu nhu cầu riêng</td></tr>
                <tr><td><strong>Responsiveness</strong></td><td>Phản hồi</td><td>Sẵn sàng giúp đỡ, phục vụ nhanh chóng</td></tr>
            </table>
            <h4>5 Gap Model</h4>
            <ol>
                <li><strong>Gap 1:</strong> Khoảng cách giữa kỳ vọng KH và nhận thức của quản lý</li>
                <li><strong>Gap 2:</strong> Khoảng cách giữa nhận thức quản lý và tiêu chuẩn DV</li>
                <li><strong>Gap 3:</strong> Khoảng cách giữa tiêu chuẩn DV và thực hiện DV</li>
                <li><strong>Gap 4:</strong> Khoảng cách giữa thực hiện DV và truyền thông</li>
                <li><strong>Gap 5:</strong> Khoảng cách giữa DV kỳ vọng và DV trải nghiệm (= Gap 1+2+3+4)</li>
            </ol>
        `,
        advanced: `
            <h3>🎓 Đo lường CL dịch vụ nâng cao</h3>
            <h4>Các chỉ số đo lường</h4>
            <table>
                <tr><th>Chỉ số</th><th>Công thức</th><th>Ý nghĩa</th></tr>
                <tr><td><strong>NPS</strong></td><td>% Promoters - % Detractors</td><td>Khả năng giới thiệu (0-10 scale)</td></tr>
                <tr><td><strong>CSAT</strong></td><td>% khách hài lòng / tổng khảo sát</td><td>Hài lòng tổng thể</td></tr>
                <tr><td><strong>CES</strong></td><td>Điểm trung bình nỗ lực</td><td>Mức độ dễ dàng sử dụng DV</td></tr>
                <tr><td><strong>FCR</strong></td><td>% giải quyết lần đầu</td><td>First Contact Resolution</td></tr>
            </table>
            <h4>Mystery Shopping</h4>
            <p>Khách hàng bí ẩn - phương pháp đánh giá chất lượng dịch vụ bằng cách cử người đóng vai khách hàng thực tế:</p>
            <ul>
                <li>Đánh giá quy trình phục vụ thực tế</li>
                <li>Kiểm tra tuân thủ tiêu chuẩn</li>
                <li>Phát hiện điểm yếu không nhìn thấy từ báo cáo</li>
            </ul>
            <h4>Service Blueprinting</h4>
            <p>Bản thiết kế dịch vụ - sơ đồ trực quan hóa toàn bộ quy trình phục vụ:</p>
            <ul>
                <li><strong>Customer Actions:</strong> Hành động của khách hàng</li>
                <li><strong>Onstage Actions:</strong> Nhân viên tương tác trực tiếp</li>
                <li><strong>Backstage Actions:</strong> Hoạt động hậu trường</li>
                <li><strong>Support Processes:</strong> Quy trình hỗ trợ</li>
            </ul>
            <div class="tip-box">
                <strong>💡 Service Recovery Paradox:</strong> Khách hàng được xử lý tốt sau sự cố có thể trung thành hơn khách hàng chưa bao giờ gặp vấn đề. Đây là cơ hội biến "crisis" thành "loyalty".
            </div>
        `
    },
    'healthcare-quality': {
        icon: '🏥',
        title: 'CL Y Tế',
        category: 'industry',
        level: 'advanced',
        connections: ['iso-9001', 'haccp'],
        simple: `
            <h3>🏥 Chất lượng y tế</h3>
            <p>Chất lượng y tế đảm bảo dịch vụ chăm sóc sức khỏe <strong>an toàn, hiệu quả</strong> và <strong>lấy bệnh nhân làm trung tâm</strong>.</p>
            <h4>6 chiều chất lượng y tế (IOM)</h4>
            <ul>
                <li><strong>Safe:</strong> An toàn - không gây hại cho bệnh nhân</li>
                <li><strong>Effective:</strong> Hiệu quả - dựa trên bằng chứng khoa học</li>
                <li><strong>Patient-centered:</strong> Lấy bệnh nhân làm trung tâm</li>
                <li><strong>Timely:</strong> Kịp thời - giảm chờ đợi</li>
                <li><strong>Efficient:</strong> Hiệu suất - tránh lãng phí</li>
                <li><strong>Equitable:</strong> Công bằng - cho mọi người</li>
            </ul>
            <div class="warning-box">
                <strong>⚠️ Thực tế:</strong> Theo WHO, 1 trong 10 bệnh nhân bị tổn hại trong quá trình chăm sóc y tế. Sai sót y khoa là nguyên nhân tử vong thứ 3 tại Mỹ.
            </div>
        `,
        detail: `
            <h3>📊 Hệ thống quản lý CL y tế</h3>
            <h4>GMP (Good Manufacturing Practice)</h4>
            <p>Thực hành sản xuất tốt cho dược phẩm:</p>
            <ul>
                <li>Kiểm soát nguyên liệu, quy trình, thiết bị</li>
                <li>Phòng sạch (cleanroom) theo ISO 14644</li>
                <li>Validation quy trình sản xuất</li>
                <li>Truy xuất nguồn gốc mọi lô sản xuất</li>
            </ul>
            <h4>GDP (Good Distribution Practice)</h4>
            <p>Thực hành phân phối tốt - đảm bảo chất lượng thuốc trong suốt chuỗi cung ứng (cold chain, bảo quản, vận chuyển).</p>
            <h4>JCI Accreditation</h4>
            <p>Joint Commission International - tiêu chuẩn kiểm định bệnh viện quốc tế:</p>
            <ul>
                <li><strong>IPSG:</strong> International Patient Safety Goals (6 mục tiêu an toàn)</li>
                <li>Xác định đúng bệnh nhân</li>
                <li>Cải thiện giao tiếp hiệu quả</li>
                <li>An toàn thuốc</li>
                <li>Phẫu thuật an toàn</li>
                <li>Giảm nhiễm khuẩn bệnh viện</li>
                <li>Giảm nguy cơ ngã</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 CL y tế nâng cao</h3>
            <h4>FDA Regulations (Mỹ)</h4>
            <table>
                <tr><th>Quy định</th><th>Phạm vi</th></tr>
                <tr><td><strong>21 CFR Part 210/211</strong></td><td>GMP cho dược phẩm</td></tr>
                <tr><td><strong>21 CFR Part 820</strong></td><td>QSR cho thiết bị y tế</td></tr>
                <tr><td><strong>21 CFR Part 11</strong></td><td>Hồ sơ điện tử, chữ ký điện tử</td></tr>
            </table>
            <h4>ISO 13485 - Thiết bị y tế</h4>
            <p>QMS dành riêng cho thiết bị y tế, nhấn mạnh an toàn bệnh nhân, truy xuất nguồn gốc, và quản lý rủi ro (ISO 14971).</p>
            <h4>Clinical Audit</h4>
            <p>Đánh giá thực hành lâm sàng so với tiêu chuẩn/hướng dẫn điều trị:</p>
            <ol>
                <li>Chọn chủ đề và tiêu chuẩn</li>
                <li>Thu thập dữ liệu thực tế</li>
                <li>So sánh với tiêu chuẩn</li>
                <li>Thực hiện thay đổi</li>
                <li>Re-audit sau 6-12 tháng</li>
            </ol>
            <h4>Patient Safety Culture</h4>
            <ul>
                <li><strong>Just Culture:</strong> Phân biệt lỗi do hệ thống vs hành vi cẩu thả</li>
                <li><strong>Reporting Culture:</strong> Khuyến khích báo cáo sự cố không trừng phạt</li>
                <li><strong>Learning Culture:</strong> Học từ sai sót để cải tiến</li>
            </ul>
            <div class="example-box">
                <strong>Swiss Cheese Model (James Reason):</strong> Tai nạn xảy ra khi các "lỗ hổng" trong nhiều lớp bảo vệ thẳng hàng. Mỗi lớp (quy trình, đào tạo, thiết bị, giám sát) đều có lỗ hổng. Giải pháp: tăng số lớp bảo vệ.
            </div>
        `
    },
    'construction-quality': {
        icon: '🏗️',
        title: 'CL Xây Dựng',
        category: 'industry',
        level: 'advanced',
        connections: ['iso-9001', 'measurement'],
        simple: `
            <h3>🏗️ Chất lượng xây dựng</h3>
            <p>Quản lý chất lượng xây dựng đảm bảo công trình <strong>an toàn, bền vững</strong> và đáp ứng <strong>thiết kế, tiêu chuẩn</strong>.</p>
            <h4>3 giai đoạn quản lý CL</h4>
            <ul>
                <li><strong>Trước thi công:</strong> Kiểm tra thiết kế, vật liệu, năng lực nhà thầu</li>
                <li><strong>Trong thi công:</strong> Giám sát, kiểm tra nghiệm thu từng hạng mục</li>
                <li><strong>Sau thi công:</strong> Nghiệm thu hoàn thành, bảo hành, bảo trì</li>
            </ul>
            <div class="example-box">
                <strong>Ví dụ:</strong> Đổ bê tông cột: kiểm tra cốt thép (vị trí, đường kính, mối nối), ván khuôn, độ sụt bê tông, mẫu thí nghiệm, quá trình đổ và bảo dưỡng.
            </div>
            <h4>TCVN - Tiêu chuẩn Việt Nam</h4>
            <p>Hệ thống tiêu chuẩn kỹ thuật quốc gia cho xây dựng, vật liệu, và nghiệm thu công trình.</p>
        `,
        detail: `
            <h3>📊 Kiểm tra và nghiệm thu</h3>
            <h4>Quy trình nghiệm thu theo TCVN</h4>
            <table>
                <tr><th>Giai đoạn</th><th>Nội dung kiểm tra</th></tr>
                <tr><td><strong>Vật liệu</strong></td><td>Chứng chỉ xuất xứ, thí nghiệm mẫu (bê tông, thép, gạch)</td></tr>
                <tr><td><strong>Nền móng</strong></td><td>Khảo sát địa chất, thí nghiệm cọc, kiểm tra hố đào</td></tr>
                <tr><td><strong>Kết cấu</strong></td><td>Cốt thép, ván khuôn, đổ bê tông, bảo dưỡng</td></tr>
                <tr><td><strong>Hoàn thiện</strong></td><td>Tường, trần, sàn, hệ thống M&E</td></tr>
                <tr><td><strong>Tổng thể</strong></td><td>Vận hành thử, nghiệm thu hoàn thành</td></tr>
            </table>
            <h4>Thí nghiệm vật liệu</h4>
            <ul>
                <li><strong>Bê tông:</strong> Thí nghiệm nén mẫu 7 ngày, 28 ngày (TCVN 3118)</li>
                <li><strong>Thép:</strong> Thí nghiệm kéo, uốn (TCVN 197)</li>
                <li><strong>Đất nền:</strong> SPT, CPT, thí nghiệm cố kết</li>
                <li><strong>Cọc:</strong> Thí nghiệm tải tĩnh, PDA, PIT</li>
            </ul>
            <h4>Hệ thống giám sát</h4>
            <ul>
                <li><strong>Tư vấn giám sát:</strong> Đại diện chủ đầu tư tại hiện trường</li>
                <li><strong>QA/QC nhà thầu:</strong> Bộ phận kiểm soát CL nội bộ</li>
                <li><strong>Kiểm tra Nhà nước:</strong> Cơ quan quản lý xây dựng</li>
                <li><strong>Kiểm định độc lập:</strong> Bên thứ 3 kiểm tra khi cần</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 CL xây dựng nâng cao</h3>
            <h4>BIM và Quản lý CL</h4>
            <p>Building Information Modeling (BIM) cải thiện CL xây dựng:</p>
            <ul>
                <li><strong>Clash Detection:</strong> Phát hiện xung đột giữa các hệ thống trước khi thi công</li>
                <li><strong>4D/5D BIM:</strong> Tích hợp tiến độ và chi phí</li>
                <li><strong>Quality Tracking:</strong> Theo dõi CL từng cấu kiện trong mô hình</li>
                <li><strong>As-built Model:</strong> Mô hình hoàn công chính xác</li>
            </ul>
            <h4>NDT - Kiểm tra không phá hủy</h4>
            <table>
                <tr><th>Phương pháp</th><th>Ứng dụng</th></tr>
                <tr><td><strong>Ultrasonic Testing</strong></td><td>Kiểm tra mối hàn, chiều dày thép</td></tr>
                <tr><td><strong>Radiographic Testing</strong></td><td>Chụp X-ray mối hàn</td></tr>
                <tr><td><strong>Magnetic Particle</strong></td><td>Phát hiện vết nứt bề mặt</td></tr>
                <tr><td><strong>Rebound Hammer</strong></td><td>Đánh giá cường độ bê tông</td></tr>
                <tr><td><strong>Ground Penetrating Radar</strong></td><td>Xác định vị trí cốt thép trong bê tông</td></tr>
            </table>
            <h4>Tiêu chuẩn quốc tế trong xây dựng</h4>
            <ul>
                <li><strong>Eurocode:</strong> Tiêu chuẩn thiết kế kết cấu châu Âu</li>
                <li><strong>ACI:</strong> American Concrete Institute</li>
                <li><strong>AISC:</strong> American Institute of Steel Construction</li>
                <li><strong>FIDIC:</strong> Hợp đồng xây dựng quốc tế</li>
            </ul>
            <div class="warning-box">
                <strong>⚠️ Bài học từ sự cố:</strong> Vụ sập cầu Morandi (Italy, 2018) - 43 người tử vong. Nguyên nhân: thiếu bảo trì, không phát hiện xuống cấp kết cấu. Nhấn mạnh tầm quan trọng của kiểm tra và bảo trì định kỳ.
            </div>
        `
    }
};
