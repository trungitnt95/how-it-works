// World Basics - Core concepts
const worldBasicsData = {
    'systems-thinking': {
        icon: '🔄',
        title: 'Tư Duy Hệ Thống',
        category: 'basics',
        level: 'beginner',
        connections: ['network-effects', 'supply-demand'],
        simple: `
            <h3>🔄 Tư duy hệ thống là gì?</h3>
            <p><strong>Tư duy hệ thống</strong> là cách nhìn thế giới như một <em>mạng lưới liên kết</em> thay vì các phần rời rạc. Mọi thứ đều kết nối và ảnh hưởng lẫn nhau.</p>
            <div class="example-box">
                <strong>Ví dụ đời thường:</strong> Bạn ngủ muộn → mệt mỏi → làm việc kém → stress → lại ngủ muộn. Đây là một <em>feedback loop</em> (vòng phản hồi).
            </div>
            <h4>Các ý tưởng cốt lõi</h4>
            <ul>
                <li><strong>Hệ thống</strong> = Tập hợp các phần tử liên kết với nhau tạo thành một tổng thể</li>
                <li><strong>Feedback loop</strong> = Kết quả đầu ra quay lại ảnh hưởng đầu vào</li>
                <li><strong>Emergence</strong> = Tổng thể lớn hơn tổng các phần (ví dụ: đàn kiến thông minh hơn 1 con kiến)</li>
                <li><strong>Butterfly Effect</strong> = Thay đổi nhỏ có thể gây hậu quả lớn</li>
            </ul>
            <div class="tip-box">
                <strong>💡 Mẹo:</strong> Khi gặp vấn đề, đừng chỉ nhìn triệu chứng. Hãy hỏi: "Cái gì gây ra cái gì? Vòng lặp ở đâu?"
            </div>
        `,
        detail: `
            <h3>📊 Tư duy hệ thống chi tiết</h3>
            <p>Tư duy hệ thống được phát triển bởi Jay Forrester tại MIT từ những năm 1950, và phổ biến qua cuốn <em>"Thinking in Systems"</em> của Donella Meadows.</p>

            <h4>Hai loại Feedback Loop</h4>
            <table>
                <tr><th>Loại</th><th>Mô tả</th><th>Ví dụ</th></tr>
                <tr><td><strong>Positive (Reinforcing)</strong></td><td>Tăng cường - càng nhiều càng nhiều</td><td>Lãi kép: tiền sinh tiền sinh thêm tiền</td></tr>
                <tr><td><strong>Negative (Balancing)</strong></td><td>Cân bằng - tự điều chỉnh</td><td>Điều hòa: nóng → bật lạnh → mát → tắt</td></tr>
            </table>

            <h4>Stocks và Flows</h4>
            <p><strong>Stock</strong> là lượng tích lũy (nước trong bồn tắm), <strong>Flow</strong> là tốc độ thay đổi (vòi nước chảy vào, cống thoát ra).</p>
            <div class="example-box">
                <strong>Ví dụ kinh tế:</strong><br>
                • Stock: Dân số một thành phố = 10 triệu<br>
                • Inflow: Sinh + Nhập cư = +200,000/năm<br>
                • Outflow: Tử + Di cư = -150,000/năm<br>
                • Net flow: +50,000/năm → Dân số tăng dần
            </div>

            <h4>Mental Models quan trọng</h4>
            <ul>
                <li><strong>First-order thinking</strong>: Nếu A thì B</li>
                <li><strong>Second-order thinking</strong>: Nếu A thì B, nhưng B gây ra C, và C ảnh hưởng ngược lại A</li>
                <li><strong>Leverage points</strong>: Điểm mà thay đổi nhỏ tạo tác động lớn nhất</li>
            </ul>

            <div class="warning-box">
                <strong>⚠️ Cảnh báo:</strong> Con người có xu hướng nghĩ tuyến tính (A→B) nhưng thế giới vận hành phi tuyến tính. Đó là lý do ta thường dự đoán sai.
            </div>
        `,
        advanced: `
            <h3>🔬 Tư duy hệ thống nâng cao</h3>
            <p>Ở cấp độ cao, tư duy hệ thống giúp phân tích các <em>complex adaptive systems</em> (hệ thống thích nghi phức tạp) - từ nền kinh tế đến hệ sinh thái.</p>

            <h4>12 Leverage Points (Donella Meadows)</h4>
            <p>Xếp từ ít hiệu quả đến hiệu quả nhất:</p>
            <ol>
                <li>Hằng số, thông số, con số (ít ảnh hưởng nhất)</li>
                <li>Kích thước của buffers và stocks</li>
                <li>Cấu trúc stocks và flows vật lý</li>
                <li>Độ trễ (delays) trong hệ thống</li>
                <li>Sức mạnh của negative feedback loops</li>
                <li>Tốc độ tăng trưởng của positive feedback loops</li>
                <li>Cấu trúc luồng thông tin</li>
                <li>Quy tắc của hệ thống (luật, khuyến khích)</li>
                <li>Quyền tự tổ chức của hệ thống</li>
                <li>Mục tiêu của hệ thống</li>
                <li>Mindset hoặc paradigm của hệ thống</li>
                <li>Khả năng vượt qua paradigm (hiệu quả nhất)</li>
            </ol>

            <h4>Complexity Theory</h4>
            <p>Các hệ thống phức tạp có những đặc tính chung:</p>
            <ul>
                <li><strong>Non-linearity</strong>: Đầu ra không tỷ lệ với đầu vào</li>
                <li><strong>Emergence</strong>: Hành vi mới xuất hiện ở cấp cao hơn</li>
                <li><strong>Self-organization</strong>: Tự sắp xếp mà không cần chỉ huy</li>
                <li><strong>Edge of chaos</strong>: Hệ thống sáng tạo nhất khi ở ranh giới giữa trật tự và hỗn loạn</li>
                <li><strong>Path dependence</strong>: Lịch sử quan trọng - cùng điều kiện nhưng khác quá khứ sẽ cho kết quả khác</li>
            </ul>

            <div class="formula-box">
                Cynefin Framework: Simple → Complicated → Complex → Chaotic → Disorder
            </div>

            <div class="example-box">
                <strong>Ứng dụng thực tế:</strong> COVID-19 là ví dụ hoàn hảo của tư duy hệ thống - virus (sinh học) → lockdown (chính trị) → suy thoái (kinh tế) → bất ổn xã hội → thay đổi hành vi → ảnh hưởng ngược lại sự lây lan virus. Mỗi can thiệp đều có hệ quả bậc hai, bậc ba.
            </div>
        `
    },
    'supply-demand': {
        icon: '📊',
        title: 'Cung & Cầu',
        category: 'basics',
        level: 'beginner',
        connections: ['systems-thinking', 'gdp-economics'],
        simple: `
            <h3>📊 Cung & Cầu là gì?</h3>
            <p><strong>Quy luật Cung Cầu</strong> là nền tảng cơ bản nhất của kinh tế học. Nó giải thích <em>tại sao giá cả thay đổi</em> và <em>ai quyết định giá</em>.</p>
            <div class="example-box">
                <strong>Ví dụ:</strong> Mùa hè nóng → mọi người muốn mua kem nhiều hơn (cầu tăng) → giá kem tăng. Nếu nhiều hàng kem mở (cung tăng) → giá giảm lại.
            </div>
            <h4>Hai quy luật cơ bản</h4>
            <ul>
                <li><strong>Luật Cầu:</strong> Giá tăng → người mua ít hơn. Giá giảm → người mua nhiều hơn.</li>
                <li><strong>Luật Cung:</strong> Giá tăng → người bán muốn bán nhiều hơn. Giá giảm → người bán muốn bán ít hơn.</li>
            </ul>
            <h4>Điểm cân bằng</h4>
            <p>Khi cung = cầu, thị trường đạt <strong>giá cân bằng</strong>. Đây là giá mà cả người mua lẫn người bán đều "chấp nhận được".</p>
            <div class="tip-box">
                <strong>💡 Nhớ:</strong> "Bàn tay vô hình" (Adam Smith) = thị trường tự điều chỉnh thông qua cung cầu mà không cần ai chỉ huy.
            </div>
        `,
        detail: `
            <h3>📈 Cung Cầu chi tiết</h3>

            <h4>Độ co giãn của cầu (Price Elasticity)</h4>
            <p>Đo lường mức độ phản ứng của người mua khi giá thay đổi:</p>
            <div class="formula-box">
                Elasticity = % thay đổi lượng cầu / % thay đổi giá
            </div>
            <table>
                <tr><th>Loại</th><th>Elasticity</th><th>Ví dụ</th></tr>
                <tr><td>Co giãn (Elastic)</td><td>> 1</td><td>Du lịch sang trọng, xe hơi đắt tiền</td></tr>
                <tr><td>Đơn vị (Unit)</td><td>= 1</td><td>Quần áo thời trang</td></tr>
                <tr><td>Không co giãn (Inelastic)</td><td>< 1</td><td>Xăng, thuốc chữa bệnh, gạo</td></tr>
            </table>

            <h4>Giá trần và giá sàn</h4>
            <ul>
                <li><strong>Giá trần (Price Ceiling):</strong> Chính phủ đặt giá tối đa → thường gây thiếu hụt. VD: kiểm soát giá thuê nhà</li>
                <li><strong>Giá sàn (Price Floor):</strong> Chính phủ đặt giá tối thiểu → thường gây dư thừa. VD: lương tối thiểu</li>
            </ul>

            <h4>Dịch chuyển đường cung/cầu</h4>
            <p>Đường cung/cầu dịch chuyển khi có thay đổi ngoài giá:</p>
            <div class="example-box">
                <strong>Cầu dịch phải (tăng):</strong> Thu nhập tăng, thị hiếu thay đổi, dân số tăng<br>
                <strong>Cung dịch phải (tăng):</strong> Công nghệ cải tiến, chi phí giảm, nhiều nhà cung cấp hơn
            </div>

            <div class="warning-box">
                <strong>⚠️ Lưu ý:</strong> Thay đổi giá = di chuyển DỌC theo đường cung/cầu. Thay đổi yếu tố khác = DỊCH CHUYỂN cả đường. Đây là lỗi phổ biến nhất khi học kinh tế.
            </div>
        `,
        advanced: `
            <h3>🔬 Cung Cầu nâng cao</h3>

            <h4>Thặng dư người tiêu dùng & người sản xuất</h4>
            <p><strong>Consumer Surplus</strong> = Số tiền sẵn sàng trả - Số tiền thực trả. <strong>Producer Surplus</strong> = Số tiền nhận được - Chi phí sản xuất.</p>
            <div class="formula-box">
                Total Welfare = Consumer Surplus + Producer Surplus
            </div>

            <h4>Deadweight Loss</h4>
            <p>Khi thị trường bị can thiệp (thuế, giá trần/sàn, độc quyền), một phần welfare bị mất đi mà không ai nhận được = <strong>deadweight loss</strong> (tổn thất vô ích).</p>

            <h4>Thất bại thị trường (Market Failure)</h4>
            <table>
                <tr><th>Loại</th><th>Mô tả</th><th>Ví dụ</th></tr>
                <tr><td>Externalities</td><td>Chi phí/lợi ích ảnh hưởng bên thứ ba</td><td>Ô nhiễm (negative), giáo dục (positive)</td></tr>
                <tr><td>Public Goods</td><td>Không loại trừ, không cạnh tranh</td><td>Quốc phòng, đèn đường</td></tr>
                <tr><td>Asymmetric Info</td><td>Một bên biết nhiều hơn bên kia</td><td>Xe cũ (Akerlof), bảo hiểm</td></tr>
                <tr><td>Monopoly</td><td>Một người bán thống trị</td><td>Điện, nước, mạng xã hội</td></tr>
            </table>

            <h4>Lý thuyết trò chơi trong cung cầu</h4>
            <p>Khi có ít người chơi (oligopoly), quy luật cung cầu đơn giản không đủ. Cần dùng <strong>Game Theory</strong>:</p>
            <ul>
                <li><strong>Nash Equilibrium</strong>: Không ai lợi hơn khi đơn phương thay đổi chiến lược</li>
                <li><strong>Cartel</strong>: Các công ty thỏa thuận giá (VD: OPEC với dầu mỏ)</li>
                <li><strong>Price War</strong>: Cạnh tranh giảm giá đến khi lợi nhuận = 0</li>
            </ul>

            <div class="example-box">
                <strong>Case Study - OPEC:</strong> Các nước dầu mỏ thỏa thuận giảm sản lượng (cung giảm) → giá dầu tăng. Nhưng luôn có nước "gian lận" bơm thêm dầu vì incentive cá nhân mâu thuẫn với lợi ích tập thể → đây chính là Prisoner's Dilemma.
            </div>
        `
    },
    'incentives': {
        icon: '🎯',
        title: 'Động Lực & Khuyến Khích',
        category: 'basics',
        level: 'beginner',
        connections: ['supply-demand', 'governance'],
        simple: `
            <h3>🎯 Incentives là gì?</h3>
            <p><strong>Incentive</strong> (động lực/khuyến khích) là bất cứ thứ gì thúc đẩy con người hành động theo một cách nào đó. Hiểu incentives = hiểu tại sao mọi người làm những gì họ làm.</p>
            <div class="example-box">
                <strong>Charlie Munger nói:</strong> "Show me the incentives and I will show you the outcome." (Cho tôi thấy incentives, tôi sẽ cho bạn thấy kết quả.)
            </div>
            <h4>Ba loại incentives cơ bản</h4>
            <ul>
                <li><strong>Kinh tế:</strong> Tiền, thưởng, phạt → VD: tăng lương để nhân viên làm chăm hơn</li>
                <li><strong>Xã hội:</strong> Danh tiếng, sự tôn trọng, áp lực đồng trang lứa → VD: share bài từ thiện trên Facebook</li>
                <li><strong>Đạo đức:</strong> Cảm giác đúng/sai, lương tâm → VD: trả lại ví nhặt được</li>
            </ul>
            <h4>Tại sao incentives quan trọng?</h4>
            <p>Hầu hết vấn đề trong xã hội đều bắt nguồn từ incentives sai lệch. Khi bạn thắc mắc "tại sao họ lại làm vậy?", câu trả lời thường là: vì incentives khuyến khích họ làm vậy.</p>
            <div class="tip-box">
                <strong>💡 Mẹo:</strong> Đừng đổ lỗi cho con người. Hãy đổ lỗi cho hệ thống incentives. Thay đổi incentives = thay đổi hành vi.
            </div>
        `,
        detail: `
            <h3>📊 Incentives chi tiết</h3>

            <h4>Perverse Incentives (Incentives phản tác dụng)</h4>
            <p>Khi một chính sách tạo ra incentives ngược lại mục đích ban đầu:</p>
            <div class="warning-box">
                <strong>Cobra Effect:</strong> Thời thuộc địa Anh ở Ấn Độ, chính phủ trả thưởng cho mỗi con rắn hổ mang bị giết → người dân nuôi rắn để lấy tiền thưởng → khi chương trình kết thúc, họ thả rắn ra → rắn nhiều hơn trước!
            </div>

            <h4>Unintended Consequences (Hệ quả ngoài ý muốn)</h4>
            <table>
                <tr><th>Chính sách</th><th>Mục đích</th><th>Hệ quả ngoài ý muốn</th></tr>
                <tr><td>Cấm rượu (Prohibition)</td><td>Giảm tệ nạn xã hội</td><td>Mafia phát triển, rượu lậu</td></tr>
                <tr><td>Welfare quá hào phóng</td><td>Giúp người nghèo</td><td>Giảm động lực làm việc</td></tr>
                <tr><td>Chấm điểm giáo viên theo điểm HS</td><td>Nâng chất lượng giáo dục</td><td>Giáo viên dạy để thi, không dạy để học</td></tr>
                <tr><td>Thưởng theo số bug fix</td><td>Giảm bugs</td><td>Lập trình viên tạo bugs để fix</td></tr>
            </table>

            <h4>Principal-Agent Problem</h4>
            <p>Khi người thuê (principal) và người được thuê (agent) có incentives khác nhau:</p>
            <ul>
                <li><strong>Bác sĩ - Bệnh nhân:</strong> Bác sĩ có incentive kê nhiều thuốc/xét nghiệm hơn cần thiết</li>
                <li><strong>Cổ đông - CEO:</strong> CEO có incentive tối đa hóa lương thưởng ngắn hạn thay vì giá trị dài hạn</li>
                <li><strong>Chính trị gia - Cử tri:</strong> Chính trị gia có incentive hứa hẹn ngắn hạn để được bầu</li>
            </ul>

            <div class="example-box">
                <strong>Giải pháp:</strong> Alignment of incentives - làm sao để incentives của agent trùng với principal. VD: trả CEO bằng cổ phiếu thay vì lương cứng.
            </div>
        `,
        advanced: `
            <h3>🔬 Incentives nâng cao</h3>

            <h4>Mechanism Design (Thiết kế cơ chế)</h4>
            <p>Là "reverse game theory" - thay vì phân tích trò chơi, bạn <em>thiết kế luật chơi</em> để đạt kết quả mong muốn. Nobel Prize 2007 cho Leonid Hurwicz, Eric Maskin, Roger Myerson.</p>

            <h4>Goodhart's Law</h4>
            <div class="formula-box">
                "Khi một chỉ số trở thành mục tiêu, nó không còn là chỉ số tốt nữa."
            </div>
            <p>VD: Khi GDP trở thành mục tiêu quốc gia → chính phủ tập trung tăng GDP bằng mọi cách (kể cả xây cầu rồi phá đi xây lại) → GDP không còn phản ánh đúng sức khỏe kinh tế.</p>

            <h4>Nudge Theory (Richard Thaler - Nobel 2017)</h4>
            <p>Thay vì cấm/phạt, hãy thiết kế "cú hích" nhẹ nhàng thay đổi hành vi:</p>
            <ul>
                <li><strong>Default options:</strong> Đăng ký hiến tạng tự động (opt-out thay vì opt-in) → tỷ lệ tăng từ 15% lên 85%</li>
                <li><strong>Social proof:</strong> "80% khách hàng chọn gói này" → mọi người theo đám đông</li>
                <li><strong>Framing:</strong> "90% sống sót" vs "10% tử vong" - cùng thông tin nhưng phản ứng khác</li>
                <li><strong>Choice architecture:</strong> Đặt rau quả ở ngang tầm mắt trong căn-tin → học sinh ăn healthy hơn</li>
            </ul>

            <h4>Moral Hazard</h4>
            <p>Khi được bảo vệ khỏi rủi ro, người ta chấp nhận rủi ro nhiều hơn:</p>
            <div class="example-box">
                <strong>Ngân hàng "too big to fail":</strong> Biết chính phủ sẽ cứu → đầu tư liều lĩnh hơn → tạo bong bóng → khủng hoảng 2008. Incentive sai lệch ở cấp hệ thống.
            </div>

            <h4>Crowding Out</h4>
            <p>Incentives ngoại tại có thể phá hủy incentives nội tại:</p>
            <ul>
                <li>Trả tiền cho trẻ đọc sách → trẻ đọc vì tiền, không vì yêu thích → khi ngừng trả, trẻ ngừng đọc</li>
                <li>Phạt phụ huynh đón trẻ muộn → biến nghĩa vụ đạo đức thành giao dịch → đón muộn nhiều hơn</li>
            </ul>
        `
    },
    'network-effects': {
        icon: '🕸️',
        title: 'Hiệu Ứng Mạng',
        category: 'basics',
        level: 'intermediate',
        connections: ['systems-thinking', 'social-media'],
        simple: `
            <h3>🕸️ Hiệu ứng mạng là gì?</h3>
            <p><strong>Hiệu ứng mạng</strong> (Network Effects) xảy ra khi một sản phẩm/dịch vụ trở nên <em>có giá trị hơn khi có nhiều người dùng hơn</em>.</p>
            <div class="example-box">
                <strong>Ví dụ:</strong> Facebook có giá trị vì bạn bè bạn ở đó. Nếu chỉ có 10 người dùng, Facebook vô nghĩa. Với 3 tỷ người dùng, nó gần như không thể thay thế.
            </div>
            <h4>Tại sao quan trọng?</h4>
            <ul>
                <li>Giải thích tại sao một số công ty <strong>thống trị tuyệt đối</strong> (Google, Facebook, Amazon)</li>
                <li>Giải thích tại sao <strong>winner takes all</strong> trong nhiều ngành</li>
                <li>Giải thích tại sao các nền tảng <strong>rất khó bị lật đổ</strong></li>
            </ul>
            <h4>Metcalfe's Law</h4>
            <div class="formula-box">
                Giá trị mạng ≈ n² (n = số người dùng)
            </div>
            <p>Mạng 10 người: giá trị ~100. Mạng 100 người: giá trị ~10,000. Tăng 10x người dùng = tăng 100x giá trị!</p>
            <div class="tip-box">
                <strong>💡 Mẹo:</strong> Khi thấy một sản phẩm mà "mọi người đều dùng", đó là hiệu ứng mạng đang hoạt động.
            </div>
        `,
        detail: `
            <h3>📊 Hiệu ứng mạng chi tiết</h3>

            <h4>Phân loại hiệu ứng mạng</h4>
            <table>
                <tr><th>Loại</th><th>Mô tả</th><th>Ví dụ</th></tr>
                <tr><td><strong>Direct</strong></td><td>Cùng loại người dùng → giá trị tăng</td><td>Điện thoại, mạng xã hội</td></tr>
                <tr><td><strong>Indirect</strong></td><td>Nhiều người dùng → nhiều nhà phát triển → sản phẩm tốt hơn</td><td>iOS/Android apps, Windows</td></tr>
                <tr><td><strong>Two-sided</strong></td><td>Hai nhóm hưởng lợi lẫn nhau</td><td>Uber (tài xế ↔ hành khách), Airbnb</td></tr>
                <tr><td><strong>Data</strong></td><td>Nhiều data → sản phẩm AI tốt hơn → nhiều người dùng</td><td>Google Search, Netflix recommendations</td></tr>
            </table>

            <h4>Tipping Point (Điểm bùng phát)</h4>
            <p>Là ngưỡng mà khi vượt qua, hiệu ứng mạng tự duy trì và tăng tốc theo hàm mũ. Trước tipping point, tăng trưởng chậm; sau đó, bùng nổ.</p>
            <div class="example-box">
                <strong>Ví dụ:</strong> TikTok mất 2 năm đầu để đạt 100 triệu users, nhưng chỉ 1 năm tiếp theo để đạt 1 tỷ. Tipping point ≈ 100 triệu.
            </div>

            <h4>Lock-in Effects (Hiệu ứng khóa)</h4>
            <p>Khi bạn đã "đầu tư" vào một nền tảng, chi phí chuyển đổi (switching cost) rất cao:</p>
            <ul>
                <li><strong>Data lock-in:</strong> Toàn bộ ảnh, tin nhắn, kỷ niệm trên Facebook</li>
                <li><strong>Social lock-in:</strong> Bạn bè, gia đình đều dùng Zalo</li>
                <li><strong>Learning lock-in:</strong> Đã quen dùng Microsoft Office, học lại khó</li>
                <li><strong>Complementary lock-in:</strong> Mua iPhone → mua AirPods → mua MacBook → Apple ecosystem</li>
            </ul>

            <div class="warning-box">
                <strong>⚠️ Cẩn trọng:</strong> Hiệu ứng mạng tạo ra xu hướng monopoly tự nhiên. Điều này tốt cho hiệu quả nhưng xấu cho cạnh tranh và đổi mới.
            </div>
        `,
        advanced: `
            <h3>🔬 Hiệu ứng mạng nâng cao</h3>

            <h4>Platform Economics</h4>
            <p>Kinh tế nền tảng là mô hình kinh doanh dựa trên hiệu ứng mạng. Các nền tảng không tạo ra giá trị trực tiếp mà <em>tạo điều kiện cho người khác tạo giá trị</em>.</p>

            <h4>Chicken-and-Egg Problem</h4>
            <p>Vấn đề cốt lõi của mọi nền tảng: không có người bán thì không có người mua, không có người mua thì không có người bán.</p>
            <table>
                <tr><th>Chiến lược</th><th>Mô tả</th><th>Ví dụ</th></tr>
                <tr><td>Subsidize one side</td><td>Cho miễn phí một bên để thu hút bên kia</td><td>Uber trợ giá tài xế khi mới vào thị trường</td></tr>
                <tr><td>Single-player mode</td><td>Sản phẩm có giá trị ngay cả khi chỉ 1 người dùng</td><td>Instagram: chỉnh ảnh + chia sẻ</td></tr>
                <tr><td>Piggybacking</td><td>Tận dụng mạng lưới có sẵn</td><td>PayPal tận dụng eBay users</td></tr>
                <tr><td>Marquee users</td><td>Thu hút người dùng nổi tiếng trước</td><td>Clubhouse mời celebrities đầu tiên</td></tr>
            </table>

            <h4>Network Effects vs Scale Effects</h4>
            <ul>
                <li><strong>Scale:</strong> Sản xuất nhiều hơn → chi phí đơn vị giảm (supply-side). VD: nhà máy Toyota</li>
                <li><strong>Network:</strong> Nhiều người dùng hơn → giá trị cho mỗi người tăng (demand-side). VD: WhatsApp</li>
                <li>Công ty có CẢ HAI (Amazon) gần như bất khả chiến bại</li>
            </ul>

            <h4>Disintermediation & Re-intermediation</h4>
            <p>Internet ban đầu hứa hẹn loại bỏ trung gian (disintermediation). Thực tế, nó tạo ra trung gian MỚI mạnh hơn (re-intermediation): Google, Amazon, Facebook trở thành "gatekeepers" mới.</p>

            <div class="example-box">
                <strong>Power Law Distribution:</strong> Trong hệ thống có network effects, phân phối giá trị tuân theo power law: #1 chiếm 50%+, #2 chiếm 20%, phần còn lại chia nhau. Đây là lý do "winner takes most" chứ không phải "winner takes all".
            </div>
        `
    }
};
