// Economics - Economic systems and concepts
const economicsData = {
    'gdp-economics': {
        icon: '📈',
        title: 'GDP & Kinh Tế Vĩ Mô',
        category: 'economics',
        level: 'beginner',
        connections: ['supply-demand', 'money-creation'],
        simple: `
            <h3>📈 GDP là gì?</h3>
            <p><strong>GDP (Gross Domestic Product)</strong> = Tổng sản phẩm quốc nội. Đây là con số đo lường <em>tổng giá trị hàng hóa và dịch vụ</em> một quốc gia sản xuất trong một năm.</p>
            <div class="formula-box">
                GDP = C + I + G + (X - M)
            </div>
            <h4>Các thành phần của GDP</h4>
            <ul>
                <li><strong>C (Consumption):</strong> Chi tiêu hộ gia đình - mua sắm, ăn uống, giải trí (~60-70% GDP)</li>
                <li><strong>I (Investment):</strong> Đầu tư doanh nghiệp - nhà máy, máy móc, R&D (~15-20%)</li>
                <li><strong>G (Government):</strong> Chi tiêu chính phủ - cơ sở hạ tầng, giáo dục, quốc phòng (~15-20%)</li>
                <li><strong>NX (Net Exports):</strong> Xuất khẩu - Nhập khẩu (có thể âm)</li>
            </ul>
            <div class="example-box">
                <strong>Ví dụ:</strong> GDP Việt Nam 2023 ≈ 430 tỷ USD. GDP/người ≈ 4,300 USD. So sánh: Mỹ ~76,000 USD/người, Nhật ~34,000 USD/người.
            </div>
            <div class="tip-box">
                <strong>💡 Nhớ:</strong> GDP cao không có nghĩa là dân giàu. GDP/người mới phản ánh mức sống. GDP cũng không đo hạnh phúc, sức khỏe, hay bất bình đẳng.
            </div>
        `,
        detail: `
            <h3>📊 Kinh tế vĩ mô chi tiết</h3>

            <h4>GDP Danh nghĩa vs GDP Thực</h4>
            <table>
                <tr><th>Loại</th><th>Mô tả</th><th>Dùng khi</th></tr>
                <tr><td>GDP Danh nghĩa</td><td>Tính theo giá hiện tại</td><td>So sánh quy mô kinh tế</td></tr>
                <tr><td>GDP Thực (Real)</td><td>Đã loại bỏ lạm phát</td><td>So sánh tăng trưởng qua các năm</td></tr>
                <tr><td>GDP PPP</td><td>Theo sức mua tương đương</td><td>So sánh mức sống giữa các nước</td></tr>
            </table>

            <h4>Lạm phát (Inflation)</h4>
            <p>Giá cả tăng liên tục theo thời gian. Đo bằng CPI (Consumer Price Index).</p>
            <ul>
                <li><strong>2-3%/năm:</strong> Lành mạnh, kinh tế phát triển tốt</li>
                <li><strong>> 10%:</strong> Nguy hiểm, đời sống khó khăn</li>
                <li><strong>> 50%/tháng:</strong> Hyperinflation - Zimbabwe, Venezuela</li>
                <li><strong>< 0%:</strong> Deflation - nguy hiểm vì mọi người trì hoãn chi tiêu</li>
            </ul>

            <h4>Chu kỳ kinh tế (Business Cycle)</h4>
            <div class="example-box">
                <strong>4 giai đoạn:</strong><br>
                1. <strong>Expansion</strong> (Mở rộng): GDP tăng, việc làm tăng, lạc quan<br>
                2. <strong>Peak</strong> (Đỉnh): Kinh tế "nóng", lạm phát tăng<br>
                3. <strong>Recession</strong> (Suy thoái): GDP giảm 2 quý liên tiếp, thất nghiệp tăng<br>
                4. <strong>Trough</strong> (Đáy): Kinh tế yếu nhất, chuẩn bị phục hồi
            </div>

            <h4>Thất nghiệp</h4>
            <ul>
                <li><strong>Frictional:</strong> Tạm thời giữa 2 công việc (bình thường)</li>
                <li><strong>Structural:</strong> Kỹ năng không phù hợp thị trường (nghiêm trọng)</li>
                <li><strong>Cyclical:</strong> Do suy thoái kinh tế (tạm thời)</li>
            </ul>
        `,
        advanced: `
            <h3>🔬 Kinh tế vĩ mô nâng cao</h3>

            <h4>Chính sách tài khóa (Fiscal Policy)</h4>
            <p>Chính phủ dùng thuế và chi tiêu để điều tiết kinh tế:</p>
            <table>
                <tr><th>Tình huống</th><th>Chính sách</th><th>Cơ chế</th></tr>
                <tr><td>Suy thoái</td><td>Mở rộng (Expansionary)</td><td>Tăng chi tiêu, giảm thuế → kích cầu</td></tr>
                <tr><td>Lạm phát cao</td><td>Thắt chặt (Contractionary)</td><td>Giảm chi tiêu, tăng thuế → hạ nhiệt</td></tr>
            </table>

            <h4>Chính sách tiền tệ (Monetary Policy)</h4>
            <p>Ngân hàng trung ương điều chỉnh lãi suất và cung tiền:</p>
            <ul>
                <li><strong>Giảm lãi suất:</strong> Vay dễ hơn → đầu tư/chi tiêu tăng → kinh tế nóng lên</li>
                <li><strong>Tăng lãi suất:</strong> Vay đắt hơn → chi tiêu giảm → kinh tế hạ nhiệt</li>
                <li><strong>QE (Quantitative Easing):</strong> In tiền mua trái phiếu → bơm tiền vào hệ thống</li>
            </ul>

            <h4>Keynesian vs Monetarist vs Austrian</h4>
            <table>
                <tr><th>Trường phái</th><th>Quan điểm</th><th>Chính sách ưa thích</th></tr>
                <tr><td>Keynesian</td><td>Thị trường có thể thất bại, cần can thiệp</td><td>Chính phủ chi tiêu kích cầu</td></tr>
                <tr><td>Monetarist (Friedman)</td><td>Lạm phát luôn là hiện tượng tiền tệ</td><td>Kiểm soát cung tiền ổn định</td></tr>
                <tr><td>Austrian (Hayek)</td><td>Can thiệp gây méo mó, thị trường tự sửa</td><td>Tối thiểu can thiệp</td></tr>
            </table>

            <h4>Phillips Curve & Sacrifice Ratio</h4>
            <p>Mối quan hệ nghịch giữa lạm phát và thất nghiệp. Muốn giảm lạm phát 1% → cần chấp nhận GDP giảm ~2-5% (sacrifice ratio). Stagflation (thập niên 1970) chứng minh mối quan hệ này không phải lúc nào cũng đúng.</p>

            <div class="example-box">
                <strong>Impossible Trinity:</strong> Một quốc gia không thể đồng thời có: (1) Tỷ giá cố định, (2) Tự do luân chuyển vốn, (3) Chính sách tiền tệ độc lập. Phải chọn 2 trong 3.
            </div>
        `
    },
    'money-creation': {
        icon: '🏦',
        title: 'Tiền Được Tạo Ra Thế Nào',
        category: 'economics',
        level: 'intermediate',
        connections: ['gdp-economics', 'debt-crisis'],
        simple: `
            <h3>🏦 Tiền được tạo ra thế nào?</h3>
            <p>Hầu hết mọi người nghĩ chỉ chính phủ in tiền. Sự thật: <strong>~90% tiền trong nền kinh tế được tạo bởi ngân hàng thương mại</strong> thông qua cho vay.</p>
            <div class="example-box">
                <strong>Cách ngân hàng "tạo tiền":</strong><br>
                1. Bạn gửi 100 triệu vào ngân hàng<br>
                2. Ngân hàng giữ 10% (10 triệu) dự trữ, cho người khác vay 90 triệu<br>
                3. Người vay chi tiêu, tiền lại được gửi vào ngân hàng khác<br>
                4. Ngân hàng đó giữ 10%, cho vay 81 triệu<br>
                5. Lặp lại... → Từ 100 triệu ban đầu tạo ra ~1 tỷ tiền trong nền kinh tế!
            </div>
            <h4>Hai loại "tiền"</h4>
            <ul>
                <li><strong>Base Money (M0):</strong> Tiền mặt thật sự do ngân hàng trung ương in (~10%)</li>
                <li><strong>Broad Money (M2):</strong> Tiền trong tài khoản ngân hàng = "lời hứa trả" (~90%)</li>
            </ul>
            <div class="warning-box">
                <strong>⚠️ Sự thật đáng sợ:</strong> Nếu tất cả mọi người rút tiền cùng lúc (bank run), ngân hàng sẽ không có đủ tiền. Đây gọi là Fractional Reserve Banking.
            </div>
        `,
        detail: `
            <h3>📊 Hệ thống tiền tệ chi tiết</h3>

            <h4>Fractional Reserve Banking</h4>
            <p>Ngân hàng chỉ giữ một phần nhỏ tiền gửi làm dự trữ:</p>
            <div class="formula-box">
                Money Multiplier = 1 / Reserve Ratio<br>
                Nếu Reserve Ratio = 10% → Multiplier = 10x
            </div>

            <h4>Ngân hàng Trung ương (Central Bank)</h4>
            <p>Là "ngân hàng của các ngân hàng" - kiểm soát cung tiền và lãi suất:</p>
            <table>
                <tr><th>Công cụ</th><th>Cách hoạt động</th><th>Khi nào dùng</th></tr>
                <tr><td>Lãi suất điều hành</td><td>Thay đổi chi phí vay giữa các ngân hàng</td><td>Điều tiết kinh tế hàng ngày</td></tr>
                <tr><td>Dự trữ bắt buộc</td><td>Thay đổi tỷ lệ dự trữ tối thiểu</td><td>Kiểm soát cung tiền</td></tr>
                <tr><td>Open Market Operations</td><td>Mua/bán trái phiếu chính phủ</td><td>Bơm/rút tiền khỏi hệ thống</td></tr>
                <tr><td>Quantitative Easing (QE)</td><td>Mua tài sản quy mô lớn bằng tiền mới tạo</td><td>Khủng hoảng - lãi suất đã = 0</td></tr>
            </table>

            <h4>M1 và M2</h4>
            <ul>
                <li><strong>M0:</strong> Tiền mặt lưu thông + dự trữ tại ngân hàng trung ương</li>
                <li><strong>M1:</strong> M0 + tiền gửi không kỳ hạn (thanh toán ngay được)</li>
                <li><strong>M2:</strong> M1 + tiền gửi có kỳ hạn, tiền tiết kiệm</li>
            </ul>

            <div class="example-box">
                <strong>Ví dụ thực tế:</strong> Sau COVID-19, Fed (Mỹ) tăng M2 thêm ~40% trong 2 năm (2020-2022). Hệ quả: lạm phát tăng từ 1.4% lên 9.1% vào tháng 6/2022.
            </div>

            <h4>Lãi suất và nền kinh tế</h4>
            <p>Lãi suất là "giá của tiền" - ảnh hưởng mọi quyết định kinh tế:</p>
            <ul>
                <li>Lãi suất thấp → vay dễ → đầu tư/bất động sản tăng → bong bóng?</li>
                <li>Lãi suất cao → vay khó → kinh tế chậm lại → thất nghiệp tăng?</li>
            </ul>
        `,
        advanced: `
            <h3>🔬 Hệ thống tiền tệ nâng cao</h3>

            <h4>Modern Monetary Theory (MMT)</h4>
            <p>Lý thuyết gây tranh cãi: Chính phủ có chủ quyền tiền tệ (in tiền riêng) thì <em>không bao giờ vỡ nợ</em>. Giới hạn duy nhất là lạm phát, không phải ngân sách.</p>
            <div class="warning-box">
                <strong>⚠️ Tranh cãi:</strong> Phần lớn kinh tế gia chính thống phản đối MMT vì lo ngại hyperinflation. Nhưng sau 2008 và COVID, ranh giới giữa MMT và chính sách thực tế ngày càng mờ.
            </div>

            <h4>Eurodollar System</h4>
            <p>~80% giao dịch quốc tế bằng USD, nhưng phần lớn USD này tồn tại ngoài nước Mỹ (eurodollars). Hệ thống shadow banking này tạo ra tín dụng khổng lồ ngoài tầm kiểm soát của bất kỳ ngân hàng trung ương nào.</p>

            <h4>Triffin's Dilemma</h4>
            <div class="formula-box">
                Đồng tiền dự trữ thế giới phải thâm hụt thương mại để cung cấp thanh khoản toàn cầu, nhưng thâm hụt quá nhiều sẽ làm mất niềm tin vào đồng tiền đó.
            </div>
            <p>Đây là mâu thuẫn cốt lõi của hệ thống USD - giải thích tại sao Mỹ luôn thâm hụt thương mại nhưng vẫn là nền kinh tế mạnh nhất.</p>

            <h4>CBDC (Central Bank Digital Currency)</h4>
            <p>Tiền kỹ thuật số của ngân hàng trung ương - tương lai của tiền tệ:</p>
            <ul>
                <li><strong>Trung Quốc:</strong> Digital Yuan (e-CNY) đã thí điểm với hàng triệu người</li>
                <li><strong>EU:</strong> Digital Euro đang nghiên cứu</li>
                <li><strong>Ưu điểm:</strong> Kiểm soát tiền tệ tốt hơn, giảm chi phí giao dịch</li>
                <li><strong>Rủi ro:</strong> Giám sát tài chính toàn diện, quyền riêng tư bị xâm phạm</li>
            </ul>

            <div class="example-box">
                <strong>Bitcoin vs Hệ thống ngân hàng:</strong> Bitcoin ra đời 2009 như phản ứng với bailout ngân hàng. Ý tưởng: tiền không cần "trusted third party" (ngân hàng/chính phủ). Nhưng Bitcoin có vấn đề riêng: volatility, energy, scalability.
            </div>
        `
    },
    'trade-globalization': {
        icon: '🌐',
        title: 'Thương Mại & Toàn Cầu Hóa',
        category: 'economics',
        level: 'intermediate',
        connections: ['gdp-economics', 'inequality'],
        simple: `
            <h3>🌐 Thương mại quốc tế là gì?</h3>
            <p><strong>Toàn cầu hóa</strong> là quá trình các nền kinh tế trở nên liên kết chặt chẽ thông qua thương mại, đầu tư, và công nghệ. Tại sao các nước buôn bán với nhau? Vì <em>lợi thế so sánh</em>.</p>
            <div class="example-box">
                <strong>Lợi thế so sánh (Comparative Advantage):</strong><br>
                Việt Nam giỏi sản xuất gạo, Nhật giỏi sản xuất ô tô. Thay vì cả hai tự làm tất cả, mỗi nước tập trung vào thế mạnh rồi trao đổi → cả hai đều có lợi.
            </div>
            <h4>Tại sao toàn cầu hóa quan trọng?</h4>
            <ul>
                <li><strong>Giá rẻ hơn:</strong> Quần áo "Made in Vietnam/Bangladesh" rẻ hơn sản xuất tại Mỹ/EU</li>
                <li><strong>Đa dạng hơn:</strong> Bạn có thể ăn avocado Mexico, dùng iPhone Mỹ, đi xe Nhật</li>
                <li><strong>Giàu hơn:</strong> Các nước mở cửa thương mại phát triển nhanh hơn (VD: Trung Quốc sau 1978)</li>
            </ul>
            <div class="tip-box">
                <strong>💡 Nhớ:</strong> Chiếc iPhone chứa linh kiện từ 40+ quốc gia. Không nước nào có thể tự sản xuất mọi thứ hiệu quả.
            </div>
        `,
        detail: `
            <h3>📊 Thương mại chi tiết</h3>

            <h4>Các tổ chức và hiệp định</h4>
            <table>
                <tr><th>Tổ chức</th><th>Vai trò</th><th>Thành viên</th></tr>
                <tr><td>WTO</td><td>Thiết lập luật thương mại toàn cầu</td><td>164 nước</td></tr>
                <tr><td>EU</td><td>Thị trường chung châu Âu</td><td>27 nước</td></tr>
                <tr><td>CPTPP</td><td>FTA Thái Bình Dương (có VN)</td><td>11 nước</td></tr>
                <tr><td>RCEP</td><td>FTA lớn nhất thế giới (có VN)</td><td>15 nước châu Á-TBD</td></tr>
            </table>

            <h4>Chuỗi cung ứng toàn cầu (Global Supply Chain)</h4>
            <p>Sản phẩm hiện đại đi qua hàng chục quốc gia trước khi đến tay bạn:</p>
            <div class="example-box">
                <strong>Chuỗi cung ứng Samsung Galaxy:</strong><br>
                • Chip: thiết kế ở Hàn Quốc, sản xuất ở Mỹ/Đài Loan<br>
                • Màn hình: Hàn Quốc<br>
                • Pin: Trung Quốc<br>
                • Lắp ráp: Việt Nam (Bắc Ninh, Thái Nguyên)<br>
                • Bán: toàn thế giới
            </div>

            <h4>Protectionism vs Free Trade</h4>
            <table>
                <tr><th>Bảo hộ (Protectionism)</th><th>Tự do (Free Trade)</th></tr>
                <tr><td>Thuế nhập khẩu, quota, trợ cấp</td><td>Giảm/bỏ rào cản thương mại</td></tr>
                <tr><td>Bảo vệ công nghiệp nội địa</td><td>Cạnh tranh → hiệu quả hơn</td></tr>
                <tr><td>Giữ việc làm trong nước</td><td>Giá rẻ hơn cho người tiêu dùng</td></tr>
                <tr><td>An ninh quốc gia</td><td>Hòa bình thông qua thương mại</td></tr>
            </table>

            <h4>Outsourcing</h4>
            <p>Chuyển sản xuất ra nước ngoài để giảm chi phí. VD: Call center ở Ấn Độ, lắp ráp ở Trung Quốc, phần mềm ở Việt Nam.</p>
            <div class="warning-box">
                <strong>⚠️ Mặt trái:</strong> Mất việc ở nước giàu, bóc lột lao động ở nước nghèo, ô nhiễm "xuất khẩu" sang nước đang phát triển.
            </div>
        `,
        advanced: `
            <h3>🔬 Toàn cầu hóa nâng cao</h3>

            <h4>Trade Wars (Chiến tranh thương mại)</h4>
            <p>Khi các nước dùng thuế quan và trừng phạt để gây áp lực kinh tế lên nhau:</p>
            <div class="example-box">
                <strong>US-China Trade War (2018-):</strong><br>
                • Trump áp thuế lên 360 tỷ USD hàng Trung Quốc<br>
                • Trung Quốc trả đũa thuế lên hàng Mỹ<br>
                • Mục đích: giảm thâm hụt thương mại, bảo vệ IP, kiềm chế Trung Quốc<br>
                • Kết quả: chuỗi cung ứng dịch chuyển (VN hưởng lợi), giá tăng cho người tiêu dùng Mỹ
            </div>

            <h4>Deglobalization & Friendshoring</h4>
            <p>Sau COVID và chiến tranh Ukraine, xu hướng mới:</p>
            <ul>
                <li><strong>Nearshoring:</strong> Chuyển sản xuất về gần hơn (Mexico thay vì Trung Quốc cho Mỹ)</li>
                <li><strong>Friendshoring:</strong> Chỉ làm ăn với "đồng minh" (Mỹ + EU + Nhật + Hàn vs Trung Quốc + Nga)</li>
                <li><strong>China+1:</strong> Không rời Trung Quốc hoàn toàn, nhưng đa dạng hóa (thêm VN, Ấn Độ, Indonesia)</li>
            </ul>

            <h4>Heckscher-Ohlin vs New Trade Theory</h4>
            <table>
                <tr><th>Lý thuyết</th><th>Giải thích</th></tr>
                <tr><td>H-O Model</td><td>Nước giàu lao động xuất khẩu hàng thâm dụng lao động</td></tr>
                <tr><td>New Trade (Krugman)</td><td>Economies of scale + network effects → nước nào làm trước chiếm lĩnh</td></tr>
                <tr><td>Gravity Model</td><td>Thương mại tỷ lệ với GDP, nghịch với khoảng cách</td></tr>
            </table>

            <h4>Dutch Disease</h4>
            <p>Khi một nước xuất khẩu tài nguyên (dầu, khí) quá nhiều → đồng tiền tăng giá → các ngành khác mất cạnh tranh → kinh tế phụ thuộc một nguồn → dễ tổn thương khi giá tài nguyên giảm.</p>
            <div class="warning-box">
                <strong>⚠️ VD:</strong> Venezuela phụ thuộc 95% doanh thu xuất khẩu từ dầu → giá dầu giảm 2014 → sụp đổ kinh tế → khủng hoảng nhân đạo.
            </div>
        `
    },
    'inequality': {
        icon: '⚖️',
        title: 'Bất Bình Đẳng',
        category: 'economics',
        level: 'intermediate',
        connections: ['trade-globalization', 'governance'],
        simple: `
            <h3>⚖️ Bất bình đẳng là gì?</h3>
            <p><strong>Bất bình đẳng</strong> là sự chênh lệch về thu nhập, tài sản, cơ hội giữa các nhóm người trong xã hội. Đây là một trong những vấn đề gây tranh cãi nhất thế giới.</p>
            <div class="example-box">
                <strong>Con số gây sốc:</strong><br>
                • 26 người giàu nhất sở hữu tài sản bằng 3.8 tỷ người nghèo nhất (Oxfam)<br>
                • Top 1% chiếm ~46% tài sản toàn cầu<br>
                • Bottom 50% chỉ sở hữu ~1% tài sản toàn cầu
            </div>
            <h4>Đo lường bất bình đẳng</h4>
            <p><strong>Gini Coefficient:</strong> Từ 0 (bình đẳng tuyệt đối) đến 1 (bất bình đẳng tuyệt đối).</p>
            <ul>
                <li>🇩🇰 Đan Mạch: ~0.28 (bình đẳng cao)</li>
                <li>🇺🇸 Mỹ: ~0.39 (bất bình đẳng cao cho nước giàu)</li>
                <li>🇧🇷 Brazil: ~0.53 (rất bất bình đẳng)</li>
                <li>🇿🇦 Nam Phi: ~0.63 (cao nhất thế giới)</li>
            </ul>
            <div class="tip-box">
                <strong>💡 Phân biệt:</strong> Bất bình đẳng thu nhập (income) vs bất bình đẳng tài sản (wealth). Tài sản luôn bất bình đẳng hơn thu nhập nhiều lần.
            </div>
        `,
        detail: `
            <h3>📊 Bất bình đẳng chi tiết</h3>

            <h4>Nguyên nhân chính</h4>
            <table>
                <tr><th>Nguyên nhân</th><th>Cơ chế</th></tr>
                <tr><td>Giáo dục</td><td>Bằng đại học → thu nhập cao hơn 80%, nhưng học phí đắt → người nghèo khó tiếp cận</td></tr>
                <tr><td>Công nghệ</td><td>AI/tự động hóa thay thế lao động tay chân, tăng giá trị lao động tri thức</td></tr>
                <tr><td>Toàn cầu hóa</td><td>Lao động nước giàu cạnh tranh với lao động giá rẻ nước nghèo</td></tr>
                <tr><td>Thừa kế</td><td>Người giàu truyền tài sản qua thế hệ → bất bình đẳng cơ hội</td></tr>
                <tr><td>Chính sách thuế</td><td>Thuế vốn thấp hơn thuế lao động → người giàu (sống bằng vốn) có lợi</td></tr>
            </table>

            <h4>Piketty: r > g</h4>
            <div class="formula-box">
                r > g → Bất bình đẳng tự tăng theo thời gian<br>
                r = tỷ suất lợi nhuận vốn, g = tốc độ tăng trưởng kinh tế
            </div>
            <p>Thomas Piketty trong <em>"Capital in the 21st Century"</em> chứng minh: khi lợi nhuận từ vốn (cổ phiếu, bất động sản) tăng nhanh hơn lương → người có vốn ngày càng giàu, người chỉ có lương ngày càng tụt lại.</p>

            <h4>Social Mobility (Dịch chuyển xã hội)</h4>
            <p>Khả năng một người sinh ra nghèo có thể trở nên giàu có:</p>
            <ul>
                <li>🇩🇰 Bắc Âu: Cao nhất (giáo dục miễn phí, y tế miễn phí, an sinh tốt)</li>
                <li>🇺🇸 Mỹ: Thấp bất ngờ - "American Dream" ngày càng khó thực hiện</li>
                <li>🇮🇳 Ấn Độ: Rất thấp (hệ thống đẳng cấp, thiếu cơ hội giáo dục)</li>
            </ul>

            <div class="warning-box">
                <strong>⚠️ Hệ quả:</strong> Bất bình đẳng cao → bất ổn xã hội, tội phạm, dân túy, suy giảm niềm tin vào thể chế. Đây là lý do nhiều quốc gia đang gặp khủng hoảng chính trị.
            </div>
        `,
        advanced: `
            <h3>🔬 Bất bình đẳng nâng cao</h3>

            <h4>Elephant Curve (Branko Milanovic)</h4>
            <p>Biểu đồ cho thấy ai được/mất từ toàn cầu hóa 1988-2008:</p>
            <ul>
                <li><strong>Tầng lớp trung lưu châu Á:</strong> Tăng thu nhập mạnh nhất (+80%) - đặc biệt Trung Quốc</li>
                <li><strong>Tầng lớp trung lưu phương Tây:</strong> Gần như không tăng (0-5%) - "left behind"</li>
                <li><strong>Top 1% toàn cầu:</strong> Tăng mạnh (+60%)</li>
                <li><strong>Người nghèo nhất:</strong> Tăng ít nhất</li>
            </ul>

            <h4>Giải pháp đang được thảo luận</h4>
            <table>
                <tr><th>Giải pháp</th><th>Ủng hộ</th><th>Phản đối</th></tr>
                <tr><td>UBI (Universal Basic Income)</td><td>Đảm bảo mức sống tối thiểu</td><td>Tốn kém, giảm động lực làm việc</td></tr>
                <tr><td>Wealth Tax (Thuế tài sản)</td><td>Giảm tập trung tài sản</td><td>Khó thực hiện, người giàu trốn thuế</td></tr>
                <tr><td>Giáo dục miễn phí</td><td>Tăng social mobility</td><td>Chi phí cao, không đảm bảo việc làm</td></tr>
                <tr><td>Progressive Taxation</td><td>Ai giàu hơn đóng tỷ lệ cao hơn</td><td>Cản trở đầu tư, brain drain</td></tr>
            </table>

            <h4>Kuznets Curve</h4>
            <p>Simon Kuznets (1955) cho rằng bất bình đẳng tăng khi nước nghèo công nghiệp hóa, rồi giảm khi đạt trình độ phát triển cao (hình chữ U ngược). Tuy nhiên, từ 1980, bất bình đẳng tăng lại ở các nước phát triển → Kuznets curve có thể sai.</p>

            <h4>Rent-Seeking vs Value Creation</h4>
            <p>Phần lớn sự giàu có ở top không đến từ <em>tạo giá trị</em> mà từ <em>rent-seeking</em>:</p>
            <ul>
                <li>Lobbying để có luật có lợi</li>
                <li>Độc quyền bằng sáng chế (pharma)</li>
                <li>Đầu cơ bất động sản</li>
                <li>Tài chính hóa (financialization) - kiếm tiền từ tiền thay vì sản xuất</li>
            </ul>

            <div class="example-box">
                <strong>Case Study - Nordic Model:</strong> Bắc Âu kết hợp kinh tế thị trường tự do VỚI phúc lợi xã hội mạnh. Kết quả: GDP/người cao, bất bình đẳng thấp, hạnh phúc cao. Nhưng đòi hỏi: thuế cao (~50% GDP), niềm tin xã hội cao, dân số nhỏ đồng nhất.
            </div>
        `
    },
    'debt-crisis': {
        icon: '💣',
        title: 'Nợ & Khủng Hoảng',
        category: 'economics',
        level: 'advanced',
        connections: ['money-creation', 'gdp-economics'],
        simple: `
            <h3>💣 Nợ và khủng hoảng là gì?</h3>
            <p>Nợ không xấu - nó giúp đầu tư và phát triển. Nhưng khi nợ <strong>quá nhiều</strong> và <strong>không trả được</strong>, khủng hoảng tài chính xảy ra, gây suy thoái kinh tế nghiêm trọng.</p>
            <div class="example-box">
                <strong>Ví dụ đơn giản:</strong><br>
                Bạn vay 1 tỷ mua nhà, lương 20 triệu/tháng. Trả lãi 10 triệu/tháng → OK.<br>
                Nhưng nếu lãi suất tăng → trả 15 triệu/tháng → khó khăn.<br>
                Mất việc → không trả được → bán nhà → giá nhà giảm → ngân hàng lỗ → ngân hàng không cho vay → doanh nghiệp khác cũng gặp khó → suy thoái!
            </div>
            <h4>Các khủng hoảng nổi tiếng</h4>
            <ul>
                <li><strong>1997 - Khủng hoảng châu Á:</strong> Thái Lan, Indonesia, Hàn Quốc sụp đổ vì nợ ngoại tệ</li>
                <li><strong>2008 - Khủng hoảng tài chính toàn cầu:</strong> Bong bóng bất động sản Mỹ → Lehman Brothers phá sản</li>
                <li><strong>2010 - Khủng hoảng nợ châu Âu:</strong> Hy Lạp, Tây Ban Nha, Bồ Đào Nha gần vỡ nợ</li>
            </ul>
            <div class="warning-box">
                <strong>⚠️ Quy luật:</strong> Khủng hoảng tài chính xảy ra trung bình 10-15 năm một lần. Không phải "nếu" mà là "khi nào".
            </div>
        `,
        detail: `
            <h3>📊 Chu kỳ nợ chi tiết</h3>

            <h4>Ray Dalio: Chu kỳ nợ ngắn hạn (5-8 năm)</h4>
            <div class="example-box">
                1. <strong>Tín dụng mở rộng:</strong> Lãi suất thấp → mọi người vay mượn → chi tiêu tăng<br>
                2. <strong>Bùng nổ:</strong> Kinh tế tăng trưởng → tài sản tăng giá → lạm phát<br>
                3. <strong>Thắt chặt:</strong> Ngân hàng trung ương tăng lãi suất → vay khó hơn<br>
                4. <strong>Suy thoái:</strong> Chi tiêu giảm → thất nghiệp → giá tài sản giảm<br>
                5. <strong>Phục hồi:</strong> Lãi suất giảm trở lại → chu kỳ mới bắt đầu
            </div>

            <h4>Chu kỳ nợ dài hạn (75-100 năm)</h4>
            <p>Khi nhiều chu kỳ ngắn chồng lên nhau, nợ tổng ngày càng lớn → đến mức không thể giảm lãi suất thêm (= 0%) → "deleveraging" đau đớn:</p>
            <table>
                <tr><th>Giai đoạn</th><th>Mô tả</th></tr>
                <tr><td>Depression</td><td>Nợ quá cao, lãi suất đã = 0, không ai muốn cho vay</td></tr>
                <tr><td>Beautiful Deleveraging</td><td>Kết hợp: cắt giảm chi tiêu + tái cấu trúc nợ + in tiền + phân phối lại</td></tr>
                <tr><td>Ugly Deleveraging</td><td>In tiền quá nhiều → hyperinflation hoặc cắt giảm quá mạnh → depression kéo dài</td></tr>
            </table>

            <h4>Bong bóng tài chính (Bubbles)</h4>
            <ul>
                <li><strong>Minsky Moment:</strong> Khi thị trường chuyển từ ổn định sang bất ổn đột ngột</li>
                <li><strong>Giai đoạn bong bóng:</strong> Displacement → Boom → Euphoria → Profit Taking → Panic</li>
                <li><strong>Tâm lý đám đông:</strong> FOMO (sợ bỏ lỡ) → mua tăng → giá tăng → nhiều người mua hơn → bong bóng to hơn</li>
            </ul>

            <div class="warning-box">
                <strong>⚠️ Dấu hiệu bong bóng:</strong> "Lần này khác" (This time is different) - khi mọi người nói câu này, thường là bong bóng sắp vỡ.
            </div>
        `,
        advanced: `
            <h3>🔬 Nợ & Khủng hoảng nâng cao</h3>

            <h4>Khủng hoảng 2008 chi tiết</h4>
            <p>Chuỗi sự kiện: Subprime mortgages → MBS/CDO → Credit Default Swaps → Lehman Brothers phá sản → Global Financial Crisis:</p>
            <ol>
                <li>Ngân hàng cho người yếu tài chính vay mua nhà (subprime)</li>
                <li>Đóng gói các khoản vay thành chứng khoán (MBS) và bán cho nhà đầu tư</li>
                <li>Rating agencies chấm AAA (an toàn) → nhà đầu tư mua ồ ạt</li>
                <li>Giá nhà giảm → người vay không trả được → MBS mất giá trị</li>
                <li>AIG bảo hiểm hàng trăm tỷ CDS → không đủ tiền trả → phá sản nếu không có bailout</li>
                <li>Chính phủ Mỹ cứu các ngân hàng "too big to fail" bằng 700 tỷ USD TARP</li>
            </ol>

            <h4>Creative Destruction (Schumpeter)</h4>
            <p>Khủng hoảng cũng có mặt tích cực: doanh nghiệp yếu bị loại bỏ, tài nguyên được phân bổ lại cho doanh nghiệp hiệu quả hơn. Nhưng chi phí xã hội rất cao (thất nghiệp, nghèo đói).</p>

            <h4>Debt-to-GDP Ratio</h4>
            <table>
                <tr><th>Quốc gia</th><th>Nợ/GDP</th><th>Tình trạng</th></tr>
                <tr><td>🇯🇵 Nhật</td><td>~260%</td><td>Cao nhất nhưng ổn (nợ nội địa)</td></tr>
                <tr><td>🇺🇸 Mỹ</td><td>~120%</td><td>Tăng nhanh sau COVID</td></tr>
                <tr><td>🇨🇳 Trung Quốc</td><td>~77% (chính phủ) nhưng tổng ~300%</td><td>Nợ ẩn trong SOE và địa phương</td></tr>
                <tr><td>🇻🇳 Việt Nam</td><td>~37%</td><td>Tương đối an toàn</td></tr>
            </table>

            <h4>Systemic Risk</h4>
            <p>Khi hệ thống tài chính quá liên kết, sự sụp đổ của một thực thể kéo theo cả hệ thống (domino effect):</p>
            <div class="formula-box">
                Too Big to Fail → Too Connected to Fail → Too Complex to Regulate
            </div>

            <div class="example-box">
                <strong>Khủng hoảng châu Á 1997:</strong> Thái Lan thả nổi đồng Baht → mất giá 50% → doanh nghiệp vay USD không trả được → lan sang Indonesia, Hàn Quốc, Malaysia. IMF can thiệp với điều kiện cải cách khắc nghiệt → GDP giảm 10-15%. Bài học: nợ ngoại tệ là bom hẹn giờ.
            </div>
        `
    }
};
