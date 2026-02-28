// Society - Social systems and institutions
const societyData = {
    'education-system': {
        icon: '📚',
        title: 'Hệ Thống Giáo Dục',
        category: 'society',
        level: 'beginner',
        connections: ['social-media', 'inequality'],
        simple: `
            <h3>📚 Giáo dục để làm gì?</h3>
            <p>Hệ thống giáo dục có <strong>ba mục đích chính</strong> mà ít người nhận ra đầy đủ:</p>
            <ul>
                <li><strong>Human Capital:</strong> Dạy kiến thức và kỹ năng để làm việc hiệu quả</li>
                <li><strong>Socialization:</strong> Dạy cách sống trong xã hội - quy tắc, giá trị, văn hóa</li>
                <li><strong>Sorting/Signaling:</strong> Phân loại người giỏi/kém để nhà tuyển dụng dễ chọn</li>
            </ul>
            <div class="example-box">
                <strong>Câu hỏi thú vị:</strong> Bằng đại học có giá trị vì bạn HỌC được gì, hay vì nó CHỨNG MINH bạn đủ thông minh/chăm chỉ để hoàn thành 4 năm? (Bryan Caplan - "The Case Against Education")
            </div>
            <h4>Các mô hình nổi bật</h4>
            <ul>
                <li>🇫🇮 <strong>Phần Lan:</strong> Ít bài tập, không thi chuẩn hóa, giáo viên được tôn trọng cao → xếp hạng PISA top</li>
                <li>🇸🇬 <strong>Singapore:</strong> Kỷ luật cao, thi cử nặng, STEM mạnh → xếp hạng PISA #1</li>
                <li>🇰🇷 <strong>Hàn Quốc:</strong> Áp lực thi cử cực độ, học thêm (hagwon) → kết quả cao nhưng stress cao</li>
            </ul>
            <div class="tip-box">
                <strong>💡 Xu hướng:</strong> Thế giới đang chuyển từ "học thuộc kiến thức" sang "học cách học" vì AI có thể tra cứu mọi thứ.
            </div>
        `,
        detail: `
            <h3>📊 Hệ thống giáo dục chi tiết</h3>

            <h4>PISA - So sánh quốc tế</h4>
            <p>PISA (Programme for International Student Assessment) đánh giá học sinh 15 tuổi ở 80+ quốc gia:</p>
            <table>
                <tr><th>Quốc gia</th><th>Toán</th><th>Đọc</th><th>Khoa học</th></tr>
                <tr><td>🇸🇬 Singapore</td><td>#1</td><td>#2</td><td>#1</td></tr>
                <tr><td>🇯🇵 Nhật</td><td>#5</td><td>#3</td><td>#2</td></tr>
                <tr><td>🇫🇮 Phần Lan</td><td>#16</td><td>#6</td><td>#6</td></tr>
                <tr><td>🇺🇸 Mỹ</td><td>#34</td><td>#6</td><td>#16</td></tr>
                <tr><td>🇻🇳 Việt Nam</td><td>~#30</td><td>~#30</td><td>~#30</td></tr>
            </table>

            <h4>Credentialism (Bệnh bằng cấp)</h4>
            <p>Khi bằng cấp trở thành yêu cầu bắt buộc cho mọi công việc, kể cả không cần:</p>
            <ul>
                <li>Nhiều công việc yêu cầu bằng ĐH nhưng không dùng kiến thức ĐH</li>
                <li>Credential inflation: Thạc sĩ trở thành "bằng ĐH mới"</li>
                <li>Nợ sinh viên Mỹ: 1.7 nghìn tỷ USD - khủng hoảng xã hội</li>
            </ul>

            <h4>Future of Education</h4>
            <div class="example-box">
                <strong>Các xu hướng:</strong><br>
                • <strong>Online Learning:</strong> MOOCs (Coursera, edX), Khan Academy - truy cập miễn phí kiến thức world-class<br>
                • <strong>Micro-credentials:</strong> Chứng chỉ ngắn hạn thay bằng ĐH 4 năm<br>
                • <strong>AI Tutoring:</strong> Giáo viên AI cá nhân hóa cho từng học sinh<br>
                • <strong>Project-based Learning:</strong> Học qua làm thay vì nghe giảng
            </div>

            <div class="warning-box">
                <strong>⚠️ Digital Divide:</strong> Giáo dục online tuyệt vời cho ai có internet tốt + máy tính + kỷ luật tự học. Nhưng hàng tỷ người thiếu những thứ này → bất bình đẳng giáo dục tăng.
            </div>
        `,
        advanced: `
            <h3>🔬 Giáo dục nâng cao</h3>

            <h4>Hidden Curriculum (Chương trình ẩn)</h4>
            <p>Ngoài kiến thức chính thức, trường học DẠY NGẦM:</p>
            <ul>
                <li>Tuân thủ quyền lực (nghe lời thầy cô)</li>
                <li>Chấp nhận hệ thống phân cấp (điểm số, xếp hạng)</li>
                <li>Ngồi yên trong thời gian dài (chuẩn bị cho văn phòng)</li>
                <li>Cạnh tranh cá nhân (thay vì hợp tác)</li>
            </ul>

            <h4>Signaling Model (Bryan Caplan)</h4>
            <div class="formula-box">
                Giá trị bằng ĐH ≈ 80% Signaling + 20% Human Capital
            </div>
            <p>Nếu đúng, xã hội đang lãng phí KHỔNG LỒ tiền và thời gian cho giáo dục. Bằng chứng: sinh viên bỏ ngang năm cuối (có kiến thức nhưng không có bằng) kiếm ít hơn NHIỀU so với người tốt nghiệp.</p>

            <h4>Education and Economic Growth</h4>
            <table>
                <tr><th>Mô hình</th><th>Quan điểm</th></tr>
                <tr><td>Human Capital (Becker)</td><td>Giáo dục tăng năng suất → tăng trưởng kinh tế</td></tr>
                <tr><td>Signaling (Spence)</td><td>Giáo dục chỉ là bộ lọc, không tạo năng suất thật</td></tr>
                <tr><td>Endogenous Growth (Romer)</td><td>Giáo dục tạo innovation → tăng trưởng dài hạn</td></tr>
            </table>

            <h4>Meritocracy Trap</h4>
            <p>Michael Sandel ("The Tyranny of Merit"): Xã hội dựa trên thành tích tạo ra vấn đề mới - những người "thành công" nghĩ mình xứng đáng 100%, không thừa nhận vai trò may mắn → khinh thường người thất bại → chia rẽ xã hội.</p>

            <div class="example-box">
                <strong>Case Study - Phần Lan:</strong> Thành công của Phần Lan không chỉ do chính sách giáo dục mà còn: xã hội bình đẳng (Gini thấp), trust cao, giáo viên thạc sĩ bắt buộc + lương tốt + tự chủ cao, ít poverty stress. Khó copy sang nước khác vì bối cảnh khác.
            </div>
        `
    },
    'healthcare-system': {
        icon: '🏥',
        title: 'Hệ Thống Y Tế',
        category: 'society',
        level: 'intermediate',
        connections: ['governance', 'inequality'],
        simple: `
            <h3>🏥 Hệ thống y tế hoạt động thế nào?</h3>
            <p>Mỗi quốc gia có cách tổ chức y tế khác nhau. Câu hỏi cốt lõi: <strong>Ai trả tiền? Ai cung cấp dịch vụ? Ai được chăm sóc?</strong></p>
            <h4>4 mô hình y tế chính</h4>
            <ul>
                <li><strong>🇬🇧 Beveridge (Anh):</strong> Chính phủ trả tiền VÀ cung cấp dịch vụ. Thuế → NHS (miễn phí cho mọi người)</li>
                <li><strong>🇩🇪 Bismarck (Đức):</strong> Bảo hiểm bắt buộc do chủ lao động + nhân viên đóng. Bệnh viện tư nhân hoạt động phi lợi nhuận</li>
                <li><strong>🇨🇦 NHI (Canada, Đài Loan):</strong> Chính phủ trả tiền (single-payer) nhưng bệnh viện tư nhân cung cấp dịch vụ</li>
                <li><strong>🇮🇳 Out-of-Pocket (nhiều nước ĐPT):</strong> Ai có tiền thì được chữa. Nghèo = không được chữa</li>
            </ul>
            <div class="example-box">
                <strong>So sánh chi phí:</strong> Mỹ chi 18% GDP cho y tế (~$12,500/người/năm) nhưng tuổi thọ thấp hơn hầu hết nước giàu. Nhật chi 11% GDP (~$4,700/người) nhưng tuổi thọ cao nhất thế giới.
            </div>
            <div class="tip-box">
                <strong>💡 Nghịch lý Mỹ:</strong> Mỹ có công nghệ y tế tốt nhất nhưng hệ thống y tế tệ nhất trong các nước giàu - vì for-profit + phức tạp + thiếu universal coverage.
            </div>
        `,
        detail: `
            <h3>📊 Y tế chi tiết</h3>

            <h4>So sánh hệ thống y tế</h4>
            <table>
                <tr><th>Tiêu chí</th><th>Beveridge (UK)</th><th>Bismarck (Đức)</th><th>NHI (Canada)</th><th>Mỹ</th></tr>
                <tr><td>Chi trả</td><td>Thuế</td><td>Bảo hiểm bắt buộc</td><td>Thuế (single-payer)</td><td>Hỗn hợp phức tạp</td></tr>
                <tr><td>Universal?</td><td>Có</td><td>Có</td><td>Có</td><td>Không (~27M không có BH)</td></tr>
                <tr><td>Ưu điểm</td><td>Bình đẳng, rẻ</td><td>Chất lượng cao, chọn bác sĩ</td><td>Đơn giản, công bằng</td><td>Đổi mới, chất lượng top</td></tr>
                <tr><td>Nhược điểm</td><td>Chờ đợi lâu</td><td>Phức tạp, đắt</td><td>Chờ đợi, ít chọn lựa</td><td>Đắt nhất, bất bình đẳng</td></tr>
            </table>

            <h4>Universal Healthcare (Y tế toàn dân)</h4>
            <p>Hầu hết nước phát triển có universal healthcare - mọi người được chăm sóc bất kể giàu nghèo. Ngoại lệ lớn nhất: Mỹ.</p>

            <h4>Ngành dược phẩm (Big Pharma)</h4>
            <ul>
                <li><strong>Vấn đề patent:</strong> Thuốc generic rẻ 80-90% nhưng patent kéo dài 20 năm → giá cao</li>
                <li><strong>Evergreening:</strong> Thay đổi nhỏ để gia hạn patent → giữ giá cao mãi mãi</li>
                <li><strong>Marketing > R&D:</strong> Big Pharma chi nhiều tiền marketing hơn nghiên cứu</li>
            </ul>

            <div class="example-box">
                <strong>Insulin Case:</strong> Insulin phát minh 1921 (bán patent $1). Ngày nay, 1 lọ insulin ở Mỹ: $300+. Cùng lọ đó ở Canada: $30. Ở Ấn Độ: $5. Vì sao? Market power + lobby + hệ thống bảo hiểm phức tạp.
            </div>

            <div class="warning-box">
                <strong>⚠️ Antimicrobial Resistance:</strong> Vi khuẩn kháng thuốc (superbugs) có thể giết 10 triệu người/năm vào 2050. Nhưng ngành dược không có incentive phát triển kháng sinh mới (lợi nhuận thấp hơn thuốc mãn tính).
            </div>
        `,
        advanced: `
            <h3>🔬 Y tế nâng cao</h3>

            <h4>Health Economics</h4>
            <p>Y tế vi phạm hầu hết giả định của thị trường tự do:</p>
            <ul>
                <li><strong>Asymmetric information:</strong> Bác sĩ biết nhiều hơn bệnh nhân → moral hazard (kê thuốc/xét nghiệm thừa)</li>
                <li><strong>Adverse selection:</strong> Người khỏe mạnh không mua bảo hiểm → chỉ người ốm mua → giá tăng → death spiral</li>
                <li><strong>Inelastic demand:</strong> Bạn PHẢI chữa bệnh bất kể giá → không thể "mặc cả" khi đang cấp cứu</li>
                <li><strong>Externalities:</strong> Tiêm vaccine bảo vệ cả cộng đồng (herd immunity)</li>
            </ul>

            <h4>QALY và Cost-Effectiveness</h4>
            <div class="formula-box">
                QALY = Quality-Adjusted Life Year<br>
                1 QALY = 1 năm sống khỏe mạnh hoàn toàn
            </div>
            <p>UK (NICE) dùng QALY để quyết định thuốc nào NHS chi trả. Ngưỡng: £20,000-30,000/QALY. Nếu thuốc đắt hơn → không được phê duyệt. Tranh cãi đạo đức: có nên đặt giá trị tiền cho mạng người?</p>

            <h4>Social Determinants of Health</h4>
            <p>Y tế chỉ quyết định ~20% sức khỏe. 80% còn lại:</p>
            <table>
                <tr><th>Yếu tố</th><th>% ảnh hưởng</th><th>Ví dụ</th></tr>
                <tr><td>Hành vi</td><td>~30%</td><td>Hút thuốc, ăn uống, tập thể dục</td></tr>
                <tr><td>Xã hội/kinh tế</td><td>~40%</td><td>Thu nhập, giáo dục, nghề nghiệp</td></tr>
                <tr><td>Môi trường</td><td>~10%</td><td>Ô nhiễm, nước sạch, nhà ở</td></tr>
                <tr><td>Y tế</td><td>~20%</td><td>Bác sĩ, thuốc, bệnh viện</td></tr>
            </table>

            <div class="example-box">
                <strong>Paradox:</strong> Mỹ chi nhiều nhất cho y tế nhưng ít nhất cho social services (housing, education, welfare) so với GDP. Ngược lại, Bắc Âu chi ít hơn cho y tế nhưng nhiều hơn cho social services → sức khỏe tổng thể tốt hơn. → Phòng bệnh hơn chữa bệnh.
            </div>
        `
    },
    'social-media': {
        icon: '📱',
        title: 'Mạng Xã Hội & Thuật Toán',
        category: 'society',
        level: 'beginner',
        connections: ['network-effects', 'propaganda'],
        simple: `
            <h3>📱 Mạng xã hội hoạt động thế nào?</h3>
            <p>Mạng xã hội không miễn phí - <strong>bạn là sản phẩm</strong>. Nền tảng bán sự chú ý của bạn cho nhà quảng cáo. Để giữ bạn online lâu hơn, họ dùng <em>thuật toán</em>.</p>
            <div class="example-box">
                <strong>Attention Economy:</strong><br>
                • Facebook/TikTok/YouTube kiếm tiền từ quảng cáo<br>
                • Quảng cáo cần sự chú ý → giữ bạn cuộn (scroll) lâu nhất có thể<br>
                • Thuật toán học thói quen bạn → cho bạn xem nội dung gây nghiện nhất<br>
                • Nội dung gây tranh cãi/phẫn nộ → engagement cao → thuật toán đẩy mạnh
            </div>
            <h4>Vòng lặp Dopamine</h4>
            <ul>
                <li><strong>Like/Comment:</strong> Tạo cảm giác được chấp nhận → dopamine → muốn thêm</li>
                <li><strong>Infinite scroll:</strong> Không có "kết thúc" → luôn có thêm nội dung</li>
                <li><strong>Notifications:</strong> Variable reward (phần thưởng bất ngờ) → nghiện như slot machine</li>
                <li><strong>FOMO:</strong> Sợ bỏ lỡ → kiểm tra liên tục</li>
            </ul>
            <div class="warning-box">
                <strong>⚠️ Thống kê:</strong> Người trung bình dùng 2.5 giờ/ngày mạng xã hội = 38 ngày/năm = ~5 NĂM trong đời. Thanh thiếu niên dùng nhiều gấp đôi.
            </div>
        `,
        detail: `
            <h3>📊 Thuật toán chi tiết</h3>

            <h4>Recommendation Algorithm hoạt động thế nào?</h4>
            <ol>
                <li><strong>Thu thập data:</strong> Bạn xem gì, like gì, comment gì, dừng ở đâu bao lâu</li>
                <li><strong>Tạo profile:</strong> Sở thích, tính cách, nhân khẩu học, quan điểm chính trị</li>
                <li><strong>Collaborative filtering:</strong> "Người giống bạn cũng thích X" → đề xuất X</li>
                <li><strong>A/B testing liên tục:</strong> Test hàng nghìn biến thể để tối ưu engagement</li>
            </ol>

            <h4>Echo Chambers & Filter Bubbles</h4>
            <table>
                <tr><th>Khái niệm</th><th>Mô tả</th><th>Hệ quả</th></tr>
                <tr><td>Filter Bubble</td><td>Thuật toán chỉ cho xem nội dung phù hợp quan điểm</td><td>Không tiếp xúc quan điểm khác</td></tr>
                <tr><td>Echo Chamber</td><td>Cộng đồng online củng cố niềm tin sẵn có</td><td>Cực đoan hóa, confirmation bias</td></tr>
                <tr><td>Radicalization Pipeline</td><td>Thuật toán đưa dần đến nội dung cực đoan hơn</td><td>YouTube: video nhẹ → ngày càng cực đoan</td></tr>
            </table>

            <h4>Surveillance Capitalism (Shoshana Zuboff)</h4>
            <p>Mô hình kinh doanh mới: Hành vi con người là "nguyên liệu thô" được khai thác để dự đoán và ảnh hưởng hành vi tương lai:</p>
            <div class="example-box">
                <strong>Google biết về bạn:</strong> Bạn ở đâu (GPS), bạn tìm gì (Search), bạn email ai (Gmail), bạn xem gì (YouTube), bạn mua gì (Google Pay), bạn khỏe không (Fitbit). Tổng hợp = profile chi tiết hơn bạn biết về chính mình.
            </div>

            <h4>Data Privacy</h4>
            <ul>
                <li><strong>GDPR (EU):</strong> Luật bảo vệ data nghiêm ngặt nhất - quyền xóa data, đồng ý rõ ràng</li>
                <li><strong>CCPA (California):</strong> Tương tự nhưng yếu hơn</li>
                <li><strong>Trung Quốc:</strong> Data protection mạnh VỚI ngoại lệ cho chính phủ (Social Credit System)</li>
            </ul>

            <div class="warning-box">
                <strong>⚠️ The Social Dilemma:</strong> Cựu nhân viên Facebook, Google, Twitter cảnh báo: "Nếu bạn không trả tiền cho sản phẩm, BẠN là sản phẩm."
            </div>
        `,
        advanced: `
            <h3>🔬 Mạng xã hội nâng cao</h3>

            <h4>Engagement Maximization vs Truth</h4>
            <p>Nghiên cứu MIT (2018): Tin giả lan truyền nhanh hơn 6 lần so với tin thật trên Twitter. Lý do: tin giả gây bất ngờ, phẫn nộ → engagement cao → thuật toán đẩy mạnh.</p>

            <h4>Platform Power</h4>
            <p>Mạng xã hội trở thành "public square" nhưng do tư nhân kiểm soát:</p>
            <ul>
                <li><strong>Content moderation:</strong> Ai quyết định gì là "vi phạm"? Một công ty nên có quyền "cấm" Tổng thống không?</li>
                <li><strong>Section 230 (Mỹ):</strong> Platform không chịu trách nhiệm cho nội dung user đăng → tranh cãi sửa đổi</li>
                <li><strong>Algorithmic transparency:</strong> Thuật toán ảnh hưởng hàng tỷ người nhưng là "hộp đen" bí mật</li>
            </ul>

            <h4>Impact on Mental Health</h4>
            <table>
                <tr><th>Đối tượng</th><th>Ảnh hưởng</th><th>Bằng chứng</th></tr>
                <tr><td>Thanh thiếu niên nữ</td><td>Trầm cảm, body image, self-harm tăng</td><td>Facebook internal research (Frances Haugen leak)</td></tr>
                <tr><td>Thanh thiếu niên nam</td><td>Nghiện gaming, cô lập xã hội</td><td>Tỷ lệ "không có bạn thân" tăng 3x</td></tr>
                <tr><td>Người lớn</td><td>Lo âu, so sánh xã hội, giảm attention span</td><td>Attention span trung bình: 8.25 giây (2015) vs 12 giây (2000)</td></tr>
            </table>

            <h4>Digital Wellbeing</h4>
            <p>Các giải pháp đang được thử:</p>
            <ul>
                <li><strong>Cá nhân:</strong> Screen time limits, grayscale mode, app blockers</li>
                <li><strong>Platform:</strong> "Take a break" reminders, hiding like counts (Instagram test)</li>
                <li><strong>Chính phủ:</strong> Cấm trẻ em dưới 13 (COPPA), EU Digital Services Act</li>
            </ul>

            <div class="example-box">
                <strong>Paradox:</strong> Mạng xã hội vừa là công cụ giải phóng (Arab Spring, Hong Kong protests) vừa là công cụ kiểm soát (Trung Quốc Great Firewall, Myanmar genocide). Cùng công nghệ, khác mục đích sử dụng.
            </div>
        `
    },
    'urbanization': {
        icon: '🏙️',
        title: 'Đô Thị Hóa',
        category: 'society',
        level: 'intermediate',
        connections: ['gdp-economics', 'climate-system'],
        simple: `
            <h3>🏙️ Tại sao mọi người đổ về thành phố?</h3>
            <p><strong>Đô thị hóa</strong> là quá trình dân số chuyển từ nông thôn sang thành thị. Năm 2023, <em>56% dân số thế giới sống ở thành phố</em>. Dự kiến 2050: 68%.</p>
            <div class="example-box">
                <strong>Tại sao thành phố hấp dẫn?</strong><br>
                • <strong>Việc làm:</strong> Nhà máy, công ty, dịch vụ tập trung ở thành phố<br>
                • <strong>Giáo dục:</strong> Trường tốt, đại học, cơ hội học tập<br>
                • <strong>Y tế:</strong> Bệnh viện lớn, bác sĩ chuyên khoa<br>
                • <strong>Giải trí:</strong> Nhà hàng, rạp phim, sự kiện văn hóa<br>
                • <strong>Kết nối:</strong> Gặp gỡ người mới, cơ hội networking
            </div>
            <h4>Megacities (> 10 triệu dân)</h4>
            <ul>
                <li>🇯🇵 Tokyo: 37 triệu - lớn nhất thế giới</li>
                <li>🇮🇳 Delhi: 32 triệu - tăng nhanh nhất</li>
                <li>🇨🇳 Shanghai: 29 triệu</li>
                <li>🇧🇷 São Paulo: 22 triệu</li>
                <li>🇻🇳 TP.HCM: ~13 triệu (vùng metro)</li>
            </ul>
            <div class="tip-box">
                <strong>💡 Agglomeration Effect:</strong> Thành phố lớn → nhiều người tài → nhiều ý tưởng → nhiều đổi mới → thu hút thêm người tài → vòng lặp tăng trưởng.
            </div>
        `,
        detail: `
            <h3>📊 Đô thị hóa chi tiết</h3>

            <h4>Smart Cities (Thành phố thông minh)</h4>
            <p>Dùng công nghệ (IoT, AI, Big Data) để quản lý thành phố hiệu quả hơn:</p>
            <table>
                <tr><th>Lĩnh vực</th><th>Ứng dụng</th><th>Ví dụ</th></tr>
                <tr><td>Giao thông</td><td>Đèn giao thông AI, xe tự lái</td><td>Singapore: ERP (Electronic Road Pricing)</td></tr>
                <tr><td>Năng lượng</td><td>Smart grid, solar panels</td><td>Seoul: mái nhà solar bắt buộc</td></tr>
                <tr><td>An ninh</td><td>Camera AI, dự đoán tội phạm</td><td>Trung Quốc: facial recognition</td></tr>
                <tr><td>Quản lý</td><td>E-government, digital services</td><td>Estonia: 99% dịch vụ công online</td></tr>
            </table>

            <h4>Housing Crisis (Khủng hoảng nhà ở)</h4>
            <p>Ở hầu hết thành phố lớn, nhà quá đắt so với thu nhập:</p>
            <div class="example-box">
                <strong>Tỷ lệ giá nhà/thu nhập:</strong><br>
                • Hong Kong: 20.7x (đắt nhất thế giới)<br>
                • Sydney: 13.3x<br>
                • London: 8.3x<br>
                • TP.HCM: ~25x (rất cao so với thu nhập)<br>
                • "Affordable": < 3x (gần như không còn thành phố nào)
            </div>

            <h4>Urban Planning Approaches</h4>
            <ul>
                <li><strong>Transit-Oriented Development (TOD):</strong> Xây dựng quanh ga tàu/bus → giảm ô tô → giảm ô nhiễm</li>
                <li><strong>15-Minute City:</strong> Mọi nhu cầu trong 15 phút đi bộ/xe đạp (Paris)</li>
                <li><strong>Mixed-Use Zoning:</strong> Kết hợp nhà ở + thương mại + văn phòng trong cùng khu vực</li>
                <li><strong>Green Infrastructure:</strong> Công viên, hành lang xanh, mái xanh</li>
            </ul>

            <div class="warning-box">
                <strong>⚠️ Urban Heat Island:</strong> Thành phố nóng hơn vùng nông thôn xung quanh 3-5°C vì bê tông/nhựa đường hấp thụ nhiệt, ít cây xanh, tỏa nhiệt từ xe/máy lạnh.
            </div>
        `,
        advanced: `
            <h3>🔬 Đô thị hóa nâng cao</h3>

            <h4>Zipf's Law & City Sizes</h4>
            <div class="formula-box">
                Thành phố lớn thứ n có dân số ≈ Thành phố lớn nhất / n
            </div>
            <p>VD: Nếu thành phố lớn nhất có 10 triệu, thì #2 ≈ 5 triệu, #3 ≈ 3.3 triệu. Quy luật này đúng đáng kinh ngạc ở hầu hết quốc gia.</p>

            <h4>Scaling Laws of Cities (Geoffrey West)</h4>
            <p>Khi thành phố tăng gấp đôi dân số:</p>
            <ul>
                <li><strong>Hạ tầng tăng ~85%</strong> (sublinear) - đường xá, dây điện, ống nước → economies of scale</li>
                <li><strong>Sáng tạo tăng ~115%</strong> (superlinear) - patent, startups, thu nhập → agglomeration effects</li>
                <li><strong>Vấn đề tăng ~115%</strong> (superlinear) - tội phạm, bệnh tật, kẹt xe → chi phí của mật độ</li>
            </ul>

            <h4>Informal Settlements (Khu ổ chuột)</h4>
            <p>~1 tỷ người sống trong slums/informal settlements. Đặc điểm: không có quyền sở hữu đất, thiếu hạ tầng cơ bản (nước, điện, vệ sinh), nhưng thường có kinh tế phi chính thức sôi động.</p>

            <h4>Sustainability & Climate</h4>
            <table>
                <tr><th>Vấn đề</th><th>Thách thức</th><th>Giải pháp</th></tr>
                <tr><td>Ô nhiễm không khí</td><td>Xe cộ + công nghiệp + xây dựng</td><td>EV, công nghiệp xanh, transit</td></tr>
                <tr><td>Nước ngập</td><td>Bê tông hóa → nước không thấm</td><td>Sponge city (TQ), permeable surfaces</td></tr>
                <tr><td>Rác thải</td><td>Đô thị tạo 70% rác toàn cầu</td><td>Circular economy, zero waste</td></tr>
                <tr><td>Sea level rise</td><td>Nhiều megacity ven biển</td><td>Seawalls, managed retreat, floating cities</td></tr>
            </table>

            <div class="example-box">
                <strong>Case Study - Jakarta:</strong> Jakarta (Indonesia) đang chìm 25cm/năm vì khai thác nước ngầm + nước biển dâng. Giải pháp cực đoan: dời thủ đô sang Nusantara (Kalimantan). Chi phí: $32 tỷ. Đây là tương lai của nhiều thành phố ven biển.
            </div>
        `
    },
    'religion-culture': {
        icon: '🛕',
        title: 'Tôn Giáo & Văn Hóa',
        category: 'society',
        level: 'advanced',
        connections: ['governance', 'education-system'],
        simple: `
            <h3>🛕 Vai trò của tôn giáo & văn hóa</h3>
            <p><strong>Tôn giáo</strong> và <strong>văn hóa</strong> định hình cách con người nhìn nhận thế giới, đạo đức, và hành vi. ~84% dân số thế giới theo một tôn giáo nào đó.</p>
            <h4>Các tôn giáo lớn</h4>
            <ul>
                <li><strong>Kitô giáo:</strong> ~2.4 tỷ (31%) - Chúa Jesus, Kinh Thánh, phương Tây + toàn cầu</li>
                <li><strong>Hồi giáo:</strong> ~1.9 tỷ (25%) - Muhammad, Quran, Trung Đông + Đông Nam Á + châu Phi</li>
                <li><strong>Hindu:</strong> ~1.2 tỷ (15%) - Nhiều thần, luân hồi, Ấn Độ + Nepal</li>
                <li><strong>Phật giáo:</strong> ~500 triệu (7%) - Thích Ca, giác ngộ, Đông/Đông Nam Á</li>
                <li><strong>Không tôn giáo:</strong> ~1.2 tỷ (16%) - Tăng nhanh ở phương Tây</li>
            </ul>
            <div class="example-box">
                <strong>Tôn giáo làm gì cho xã hội?</strong><br>
                • Tạo cộng đồng và kết nối xã hội<br>
                • Cung cấp hệ thống đạo đức và ý nghĩa cuộc sống<br>
                • Giúp đối mặt với khổ đau và cái chết<br>
                • Nhưng cũng: xung đột, phân biệt, cản trở tiến bộ khoa học
            </div>
            <div class="tip-box">
                <strong>💡 Nhớ:</strong> Văn hóa ≠ Tôn giáo. Nhật Bản ít tôn giáo nhưng văn hóa rất mạnh. Văn hóa bao gồm ngôn ngữ, thói quen, giá trị, nghệ thuật, ẩm thực.
            </div>
        `,
        detail: `
            <h3>📊 Văn hóa chi tiết</h3>

            <h4>Hofstede's Cultural Dimensions</h4>
            <p>Geert Hofstede phân tích 6 chiều văn hóa quốc gia:</p>
            <table>
                <tr><th>Chiều</th><th>Ví dụ cao</th><th>Ví dụ thấp</th></tr>
                <tr><td>Power Distance (khoảng cách quyền lực)</td><td>Malaysia, Philippines</td><td>Đan Mạch, Áo</td></tr>
                <tr><td>Individualism (chủ nghĩa cá nhân)</td><td>Mỹ, UK</td><td>Trung Quốc, VN</td></tr>
                <tr><td>Masculinity (nam tính)</td><td>Nhật, Hungary</td><td>Thụy Điển, Na Uy</td></tr>
                <tr><td>Uncertainty Avoidance (tránh bất định)</td><td>Hy Lạp, Nhật</td><td>Singapore, Jamaica</td></tr>
                <tr><td>Long-term Orientation (dài hạn)</td><td>Trung Quốc, Nhật</td><td>Nigeria, Colombia</td></tr>
                <tr><td>Indulgence (hưởng thụ)</td><td>Mexico, Nigeria</td><td>Pakistan, Ai Cập</td></tr>
            </table>

            <h4>Clash of Civilizations (Samuel Huntington, 1996)</h4>
            <p>Xung đột tương lai sẽ dựa trên <em>văn minh/tôn giáo</em>, không phải ý thức hệ (tư bản vs cộng sản):</p>
            <ul>
                <li>Western vs Islamic (phương Tây vs Hồi giáo) - xung đột nổi bật nhất</li>
                <li>Western vs Sinic (phương Tây vs Trung Hoa)</li>
                <li>Ranh giới văn minh = ranh giới xung đột</li>
            </ul>

            <h4>Cultural Globalization</h4>
            <p>Toàn cầu hóa văn hóa qua truyền thông và internet:</p>
            <div class="example-box">
                <strong>Soft Power:</strong><br>
                • 🇺🇸 Mỹ: Hollywood, McDonald's, Coca-Cola, English → văn hóa thống trị toàn cầu<br>
                • 🇰🇷 Hàn Quốc: K-pop (BTS), K-drama (Squid Game), K-beauty → Korean Wave (Hallyu)<br>
                • 🇯🇵 Nhật: Anime, manga, sushi, Nintendo → Cool Japan
            </div>

            <div class="warning-box">
                <strong>⚠️ Phản ứng:</strong> Toàn cầu hóa văn hóa gây phản ứng ngược: chủ nghĩa dân tộc, bảo vệ "bản sắc", anti-Western sentiment. VD: Pháp giới hạn phim Mỹ trên TV, Trung Quốc hạn chế "ảnh hưởng phương Tây" trong giáo dục.
            </div>
        `,
        advanced: `
            <h3>🔬 Tôn giáo & Văn hóa nâng cao</h3>

            <h4>Secularization Thesis</h4>
            <p>Giả thuyết: xã hội hiện đại hóa → tôn giáo suy giảm. Bằng chứng:</p>
            <ul>
                <li>🇬🇧 Anh: Kitô giáo giảm từ 72% (2001) xuống 46% (2021)</li>
                <li>🇺🇸 Mỹ: "Nones" (không tôn giáo) tăng từ 5% (1972) lên 30% (2023)</li>
                <li>Nhưng: Hồi giáo tăng nhanh, Evangelical Christianity tăng ở châu Phi/Nam Mỹ, tâm linh "new age" tăng</li>
            </ul>

            <h4>Weber: Protestant Ethic & Capitalism</h4>
            <div class="formula-box">
                Đạo đức Tin Lành (làm việc chăm chỉ, tiết kiệm, kỷ luật) → Thúc đẩy chủ nghĩa tư bản ở phương Tây
            </div>
            <p>Max Weber cho rằng văn hóa tôn giáo ảnh hưởng kinh tế. Nhưng bị phản bác: Nho giáo ở Đông Á cũng tạo kinh tế mạnh, Vatican (Công giáo) phản đối capitalism nhưng Italy vẫn giàu.</p>

            <h4>Cultural Evolution</h4>
            <p>Văn hóa tiến hóa tương tự sinh học (Richard Dawkins - "meme" concept):</p>
            <ul>
                <li><strong>Memes:</strong> Đơn vị văn hóa tự nhân bản - ý tưởng, hành vi, trend</li>
                <li><strong>Selection:</strong> Memes "hấp dẫn" lan truyền, memes "nhàm chán" biến mất</li>
                <li><strong>Mutation:</strong> Memes thay đổi khi truyền từ người sang người</li>
                <li><strong>Cultural fitness:</strong> Tôn giáo/văn hóa nào giúp nhóm sinh sản/sống sót tốt hơn sẽ lan rộng</li>
            </ul>

            <h4>WEIRD Problem</h4>
            <p>Hầu hết nghiên cứu tâm lý/xã hội dựa trên người WEIRD (Western, Educated, Industrialized, Rich, Democratic) = 12% dân số nhưng chiếm 96% sample. Kết quả có thể không áp dụng cho 88% còn lại.</p>

            <div class="example-box">
                <strong>Inglehart-Welzel Cultural Map:</strong> Bản đồ văn hóa thế giới dựa trên 2 trục:<br>
                • Trục X: Survival values ↔ Self-expression values<br>
                • Trục Y: Traditional values ↔ Secular-rational values<br>
                Các nước gần nhau trên bản đồ = văn hóa tương đồng. VD: Bắc Âu (secular + self-expression), Châu Phi (traditional + survival), Mỹ (unusual: secular thấp + self-expression cao cho nước giàu).
            </div>
        `
    }
};
