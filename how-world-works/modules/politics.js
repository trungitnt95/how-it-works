// Politics - Governance and geopolitics
const politicsData = {
    'governance': {
        icon: '🏛️',
        title: 'Các Hình Thức Cai Trị',
        category: 'politics',
        level: 'beginner',
        connections: ['incentives', 'power-structures'],
        simple: `
            <h3>🏛️ Hình thức cai trị là gì?</h3>
            <p>Mọi xã hội cần một hệ thống ra quyết định tập thể. <strong>Hình thức cai trị</strong> (governance) là cách một quốc gia tổ chức quyền lực và đưa ra quyết định.</p>
            <h4>Các hình thức chính</h4>
            <ul>
                <li><strong>Dân chủ (Democracy):</strong> Quyền lực thuộc về nhân dân, bầu cử tự do. VD: Mỹ, Pháp, Hàn Quốc</li>
                <li><strong>Chuyên chế (Autocracy):</strong> Một người hoặc nhóm nhỏ nắm toàn quyền. VD: Triều Tiên, Saudi Arabia</li>
                <li><strong>Quân chủ (Monarchy):</strong> Vua/nữ hoàng đứng đầu - có thể tuyệt đối hoặc lập hiến. VD: UK (lập hiến), Brunei (tuyệt đối)</li>
                <li><strong>Thần quyền (Theocracy):</strong> Tôn giáo là nền tảng cai trị. VD: Iran, Vatican</li>
            </ul>
            <div class="example-box">
                <strong>Dân chủ trực tiếp vs Đại diện:</strong><br>
                • <strong>Trực tiếp:</strong> Dân bỏ phiếu mọi vấn đề (Thụy Sĩ - trưng cầu dân ý)<br>
                • <strong>Đại diện:</strong> Dân bầu đại biểu, đại biểu quyết định (hầu hết nước dân chủ)
            </div>
            <div class="tip-box">
                <strong>💡 Nhớ:</strong> Không có hình thức nào hoàn hảo. Churchill nói: "Dân chủ là hình thức cai trị tệ nhất - ngoại trừ tất cả các hình thức khác."
            </div>
        `,
        detail: `
            <h3>📊 Hệ thống cai trị chi tiết</h3>

            <h4>So sánh các hệ thống</h4>
            <table>
                <tr><th>Tiêu chí</th><th>Dân chủ</th><th>Chuyên chế</th></tr>
                <tr><td>Quyền lực</td><td>Phân chia (lập pháp/hành pháp/tư pháp)</td><td>Tập trung một nơi</td></tr>
                <tr><td>Ra quyết định</td><td>Chậm nhưng có đồng thuận</td><td>Nhanh nhưng thiếu phản biện</td></tr>
                <tr><td>Tự do cá nhân</td><td>Cao (tự do ngôn luận, báo chí)</td><td>Thấp (kiểm duyệt, đàn áp)</td></tr>
                <tr><td>Ổn định</td><td>Dài hạn ổn định, ngắn hạn có thể bất ổn</td><td>Ngắn hạn ổn, dài hạn rủi ro cao</td></tr>
                <tr><td>Kinh tế</td><td>Trung bình giàu hơn (nhưng không phải luôn)</td><td>Có thể phát triển nhanh (Trung Quốc, Singapore)</td></tr>
            </table>

            <h4>Liên bang vs Đơn nhất</h4>
            <ul>
                <li><strong>Liên bang (Federal):</strong> Quyền lực chia sẻ giữa trung ương và địa phương. VD: Mỹ (50 bang), Đức, Ấn Độ</li>
                <li><strong>Đơn nhất (Unitary):</strong> Quyền lực tập trung ở trung ương. VD: Pháp, Nhật, Việt Nam</li>
            </ul>

            <h4>Cộng hòa (Republic)</h4>
            <p>Quốc gia không có vua - nguyên thủ quốc gia được bầu. Cộng hòa có thể là dân chủ (Mỹ) hoặc không (Trung Quốc).</p>

            <h4>Selectorate Theory (Bueno de Mesquita)</h4>
            <p>Bất kỳ lãnh đạo nào cũng cần giữ "winning coalition" (nhóm ủng hộ cốt lõi) hài lòng:</p>
            <div class="example-box">
                • <strong>Dân chủ:</strong> Coalition lớn = hàng triệu cử tri → phải cung cấp public goods (đường xá, y tế)<br>
                • <strong>Chuyên chế:</strong> Coalition nhỏ = quân đội, gia đình → chỉ cần chia tiền/quyền cho nhóm nhỏ
            </div>

            <div class="warning-box">
                <strong>⚠️ Democratic Backsliding:</strong> Nhiều nước dân chủ đang "thoái trào" - tự do báo chí giảm, kiểm soát tư pháp tăng, phe đối lập bị đàn áp nhẹ nhàng. VD: Hungary, Turkey, Philippines.
            </div>
        `,
        advanced: `
            <h3>🔬 Cai trị nâng cao</h3>

            <h4>Institutional Design (Thiết kế thể chế)</h4>
            <p>Thể chế tốt quan trọng hơn lãnh đạo tốt (Acemoglu & Robinson - "Why Nations Fail"):</p>
            <ul>
                <li><strong>Inclusive institutions:</strong> Phân phối quyền lực rộng, bảo vệ quyền sở hữu, cơ hội bình đẳng → phát triển bền vững</li>
                <li><strong>Extractive institutions:</strong> Quyền lực tập trung, bóc lột nhiều → giàu ngắn hạn nhưng sụp đổ dài hạn</li>
            </ul>

            <h4>Separation of Powers</h4>
            <table>
                <tr><th>Nhánh</th><th>Vai trò</th><th>Kiểm soát bởi</th></tr>
                <tr><td>Lập pháp (Legislature)</td><td>Làm luật</td><td>Tư pháp phán vi hiến</td></tr>
                <tr><td>Hành pháp (Executive)</td><td>Thực thi luật</td><td>Lập pháp giám sát, luận tội</td></tr>
                <tr><td>Tư pháp (Judiciary)</td><td>Xét xử, giải thích luật</td><td>Hành pháp bổ nhiệm, lập pháp phê chuẩn</td></tr>
            </table>

            <h4>Arrow's Impossibility Theorem</h4>
            <div class="formula-box">
                Không tồn tại hệ thống bỏ phiếu hoàn hảo thỏa mãn mọi tiêu chí công bằng cùng lúc.
            </div>
            <p>Mọi hệ thống bầu cử đều có nhược điểm: đa số thắng (majority rule) bỏ qua thiểu số, tỷ lệ đại diện (proportional) gây bất ổn chính phủ, ranked choice phức tạp khó hiểu.</p>

            <h4>Polyarchy (Robert Dahl)</h4>
            <p>Dân chủ thật sự (lý tưởng) không tồn tại. Thực tế là "polyarchy" - nhiều nhóm quyền lực cạnh tranh, thỏa hiệp, và kiểm soát lẫn nhau. Mức độ dân chủ là phổ (spectrum), không phải nhị phân.</p>

            <div class="example-box">
                <strong>Singapore Puzzle:</strong> Singapore là autocracy "mềm" (PAP cầm quyền từ 1959) nhưng cực kỳ phát triển, ít tham nhũng, hiệu quả cao. Điều này thách thức quan điểm "dân chủ = phát triển". Giải thích: thể chế inclusive + lãnh đạo có năng lực + nhà nước nhỏ dễ quản lý.
            </div>
        `
    },
    'geopolitics': {
        icon: '🗺️',
        title: 'Địa Chính Trị',
        category: 'politics',
        level: 'intermediate',
        connections: ['governance', 'war-peace'],
        simple: `
            <h3>🗺️ Địa chính trị là gì?</h3>
            <p><strong>Địa chính trị</strong> = Địa lý + Chính trị. Nó giải thích tại sao <em>vị trí địa lý quyết định vận mệnh quốc gia</em> - ai mạnh, ai yếu, ai đánh ai, ai làm bạn với ai.</p>
            <div class="example-box">
                <strong>Ví dụ:</strong> Tại sao Mỹ là siêu cường?<br>
                • Hai đại dương bảo vệ (Thái Bình Dương + Đại Tây Dương)<br>
                • Đất đai màu mỡ (Great Plains)<br>
                • Sông ngòi giao thông (Mississippi)<br>
                • Láng giềng yếu (Canada, Mexico)
            </div>
            <h4>Tại sao địa lý quan trọng?</h4>
            <ul>
                <li><strong>Tài nguyên:</strong> Dầu mỏ ở Trung Đông = quyền lực + xung đột</li>
                <li><strong>Eo biển chiến lược:</strong> Ai kiểm soát eo biển = kiểm soát thương mại</li>
                <li><strong>Khí hậu:</strong> Nước quá nóng/lạnh/khô khó phát triển</li>
                <li><strong>Biên giới:</strong> Núi, sông, biển tạo ranh giới tự nhiên bảo vệ</li>
            </ul>
            <div class="tip-box">
                <strong>💡 Quy tắc:</strong> "Bản đồ không nói dối." Muốn hiểu tại sao một nước hành động thế nào, hãy nhìn bản đồ trước.
            </div>
        `,
        detail: `
            <h3>📊 Địa chính trị chi tiết</h3>

            <h4>Các eo biển chiến lược (Chokepoints)</h4>
            <table>
                <tr><th>Eo biển</th><th>Tầm quan trọng</th><th>Kiểm soát bởi</th></tr>
                <tr><td>Malacca</td><td>80% dầu nhập khẩu của Trung Quốc/Nhật qua đây</td><td>Singapore/Malaysia</td></tr>
                <tr><td>Hormuz</td><td>20% dầu thế giới (30 triệu thùng/ngày)</td><td>Iran/Oman</td></tr>
                <tr><td>Suez</td><td>12% thương mại toàn cầu</td><td>Ai Cập</td></tr>
                <tr><td>Bab el-Mandeb</td><td>Kết nối Địa Trung Hải - Ấn Độ Dương</td><td>Yemen/Djibouti</td></tr>
                <tr><td>GIUK Gap</td><td>Kiểm soát tàu ngầm Nga vào Đại Tây Dương</td><td>UK/Iceland/NATO</td></tr>
            </table>

            <h4>Các khối quyền lực</h4>
            <ul>
                <li><strong>NATO:</strong> 31 nước - liên minh quân sự do Mỹ dẫn đầu</li>
                <li><strong>EU:</strong> 27 nước - liên minh kinh tế/chính trị châu Âu</li>
                <li><strong>BRICS:</strong> Brazil, Nga, Ấn Độ, Trung Quốc, Nam Phi + thành viên mới - đối trọng phương Tây</li>
                <li><strong>ASEAN:</strong> 10 nước Đông Nam Á - trung lập, cân bằng giữa Mỹ-Trung</li>
                <li><strong>QUAD:</strong> Mỹ, Nhật, Úc, Ấn Độ - kiềm chế Trung Quốc ở Indo-Pacific</li>
            </ul>

            <h4>Resource Curse (Lời nguyền tài nguyên)</h4>
            <p>Nghịch lý: Nước giàu tài nguyên thiên nhiên thường NGHÈO hơn nước không có:</p>
            <div class="example-box">
                • 🇳🇴 Na Uy (có dầu) → giàu vì quản lý tốt (quỹ sovereign wealth $1.4 nghìn tỷ)<br>
                • 🇻🇪 Venezuela (có dầu) → nghèo vì tham nhũng, quản lý kém<br>
                • 🇯🇵 Nhật (không tài nguyên) → giàu nhờ con người và công nghệ
            </div>

            <div class="warning-box">
                <strong>⚠️ Thucydides Trap:</strong> Khi cường quốc mới nổi (Trung Quốc) thách thức cường quốc thống trị (Mỹ), chiến tranh có xu hướng xảy ra. 12/16 lần trong lịch sử → chiến tranh. Liệu lần này có khác?
            </div>
        `,
        advanced: `
            <h3>🔬 Địa chính trị nâng cao</h3>

            <h4>Các lý thuyết địa chính trị cổ điển</h4>
            <table>
                <tr><th>Lý thuyết</th><th>Tác giả</th><th>Nội dung</th></tr>
                <tr><td>Heartland Theory</td><td>Mackinder (1904)</td><td>"Ai kiểm soát Heartland (Đông Âu/Trung Á) kiểm soát thế giới"</td></tr>
                <tr><td>Rimland Theory</td><td>Spykman (1942)</td><td>"Ai kiểm soát Rimland (vành đai ven biển Á-Âu) kiểm soát thế giới"</td></tr>
                <tr><td>Sea Power</td><td>Mahan (1890)</td><td>Kiểm soát đại dương = siêu cường (giải thích sức mạnh Anh, rồi Mỹ)</td></tr>
            </table>

            <h4>Great Power Competition hiện tại</h4>
            <p>Thế giới đang chuyển từ unipolar (Mỹ thống trị sau 1991) sang multipolar:</p>
            <ul>
                <li><strong>Mỹ:</strong> Quân sự #1, công nghệ #1, USD là đồng tiền dự trữ</li>
                <li><strong>Trung Quốc:</strong> GDP #2, sản xuất #1, BRI (Vành đai Con đường), quân sự tăng nhanh</li>
                <li><strong>Nga:</strong> Tài nguyên + vũ khí hạt nhân + sẵn sàng dùng vũ lực</li>
                <li><strong>EU:</strong> Kinh tế lớn nhưng quân sự yếu, phụ thuộc Mỹ</li>
                <li><strong>Ấn Độ:</strong> Dân số #1, tăng trưởng nhanh, vị trí chiến lược</li>
            </ul>

            <h4>Biển Đông - Case Study</h4>
            <div class="example-box">
                Tại sao Biển Đông quan trọng?<br>
                • 1/3 thương mại hàng hải thế giới đi qua đây<br>
                • Trữ lượng dầu khí lớn<br>
                • Trung Quốc tuyên bố "đường 9 đoạn" → tranh chấp với VN, Philippines, Malaysia, Brunei, Đài Loan<br>
                • Mỹ tuần tra "tự do hàng hải" → nguy cơ xung đột trực tiếp
            </div>

            <h4>Weaponization of Everything</h4>
            <p>Chiến tranh hiện đại không chỉ quân sự:</p>
            <ul>
                <li><strong>Sanctions:</strong> Đóng băng tài sản, cắt SWIFT (Nga 2022)</li>
                <li><strong>Cyber warfare:</strong> Hack hạ tầng, thông tin, bầu cử</li>
                <li><strong>Economic coercion:</strong> Trung Quốc phạt kinh tế Úc vì ủng hộ điều tra COVID</li>
                <li><strong>Information warfare:</strong> Troll farms, fake news, social media manipulation</li>
            </ul>
        `
    },
    'propaganda': {
        icon: '📺',
        title: 'Tuyên Truyền & Truyền Thông',
        category: 'politics',
        level: 'intermediate',
        connections: ['social-media', 'governance'],
        simple: `
            <h3>📺 Tuyên truyền là gì?</h3>
            <p><strong>Tuyên truyền (Propaganda)</strong> là việc sử dụng thông tin một cách có chủ đích để <em>ảnh hưởng đến suy nghĩ và hành vi</em> của đám đông. Mọi chính phủ, doanh nghiệp, và tổ chức đều dùng nó.</p>
            <div class="example-box">
                <strong>Ví dụ quen thuộc:</strong><br>
                • Quảng cáo: "Bạn xứng đáng được sở hữu" (tạo nhu cầu)<br>
                • Chính trị: "Chỉ tôi mới giải quyết được vấn đề" (tạo phụ thuộc)<br>
                • Chiến tranh: "Họ là kẻ thù, họ không phải người" (dehumanize)
            </div>
            <h4>Các kỹ thuật tuyên truyền phổ biến</h4>
            <ul>
                <li><strong>Appeal to Fear:</strong> Dùng nỗi sợ để thuyết phục ("nếu không bầu tôi, đất nước sẽ sụp đổ")</li>
                <li><strong>Bandwagon:</strong> "Mọi người đều làm vậy" → bạn cũng nên</li>
                <li><strong>Whataboutism:</strong> Bị chỉ trích → chỉ lại lỗi người khác</li>
                <li><strong>Repetition:</strong> Nói đi nói lại → mọi người tin (Big Lie technique)</li>
            </ul>
            <div class="warning-box">
                <strong>⚠️ Quan trọng:</strong> Propaganda không phải lúc nào cũng xấu. Chiến dịch chống COVID, tiết kiệm năng lượng, bảo vệ môi trường cũng là propaganda - nhưng vì mục đích tốt.
            </div>
        `,
        detail: `
            <h3>📊 Truyền thông chi tiết</h3>

            <h4>Manufacturing Consent (Noam Chomsky)</h4>
            <p>Mô hình "propaganda" trong xã hội dân chủ - truyền thông không bị kiểm duyệt nhưng vẫn bị kiểm soát qua 5 "bộ lọc":</p>
            <ol>
                <li><strong>Ownership:</strong> Truyền thông thuộc sở hữu tập đoàn lớn → phục vụ lợi ích chủ sở hữu</li>
                <li><strong>Advertising:</strong> Quảng cáo là nguồn thu chính → không đăng nội dung làm mất quảng cáo</li>
                <li><strong>Sourcing:</strong> Phụ thuộc nguồn tin từ chính phủ/doanh nghiệp → thiên vị</li>
                <li><strong>Flak:</strong> Áp lực từ giới quyền lực khi bị chỉ trích → tự kiểm duyệt</li>
                <li><strong>Common enemy:</strong> Tạo "kẻ thù" chung để đoàn kết dư luận</li>
            </ol>

            <h4>Media Bias (Thiên vị truyền thông)</h4>
            <table>
                <tr><th>Loại</th><th>Mô tả</th><th>Ví dụ</th></tr>
                <tr><td>Selection bias</td><td>Chọn tin gì để đăng</td><td>Tin xấu &gt; tin tốt (vì view cao hơn)</td></tr>
                <tr><td>Framing</td><td>Cách đặt góc nhìn cho tin</td><td>"Protesters" vs "Rioters" - cùng sự kiện, khác từ</td></tr>
                <tr><td>Omission</td><td>Bỏ qua thông tin quan trọng</td><td>Chỉ đưa tin về một phía tranh chấp</td></tr>
                <tr><td>False balance</td><td>Cho hai bên "cân bằng" dù một bên sai</td><td>Biến đổi khí hậu: 97% nhà khoa học vs 3%, nhưng truyền thông cho 50-50</td></tr>
            </table>

            <h4>Filter Bubbles & Echo Chambers</h4>
            <p>Thuật toán mạng xã hội chỉ cho bạn thấy nội dung phù hợp với quan điểm → bạn nghĩ mọi người đều nghĩ giống mình → phân cực xã hội.</p>
            <div class="tip-box">
                <strong>💡 Media Literacy:</strong> Luôn hỏi: Ai viết? Động cơ? Nguồn tin? Ai hưởng lợi? Phía bên kia nói gì?
            </div>
        `,
        advanced: `
            <h3>🔬 Tuyên truyền nâng cao</h3>

            <h4>Information Warfare (Chiến tranh thông tin)</h4>
            <p>Trong thế kỷ 21, thông tin là vũ khí mạnh ngang bom đạn:</p>
            <ul>
                <li><strong>Russia's IRA (Internet Research Agency):</strong> Troll farm can thiệp bầu cử Mỹ 2016 bằng fake accounts, memes, chia rẽ xã hội</li>
                <li><strong>Cambridge Analytica:</strong> Thu thập data Facebook 87 triệu người → nhắm mục tiêu quảng cáo chính trị</li>
                <li><strong>Deepfake:</strong> AI tạo video giả chân thực → không biết tin gì là thật</li>
            </ul>

            <h4>Firehose of Falsehood (Mô hình Nga)</h4>
            <div class="example-box">
                Thay vì bảo vệ MỘT câu chuyện, bơm HÀNG TRĂM câu chuyện mâu thuẫn nhau:<br>
                • "MH17 bị Ukraine bắn" + "MH17 bị CIA bắn" + "MH17 không tồn tại"<br>
                • Mục đích: không phải thuyết phục, mà làm mọi người HOANG MANG → không tin bất cứ điều gì → không hành động
            </div>

            <h4>Attention Economy</h4>
            <p>Truyền thông hiện đại cạnh tranh vì <em>sự chú ý</em> của bạn, không phải sự thật:</p>
            <table>
                <tr><th>Metric</th><th>Incentive</th><th>Hệ quả</th></tr>
                <tr><td>Clicks/Views</td><td>Tiêu đề giật gân (clickbait)</td><td>Thông tin méo mó</td></tr>
                <tr><td>Engagement</td><td>Nội dung gây tranh cãi/phẫn nộ</td><td>Phân cực xã hội</td></tr>
                <tr><td>Time on site</td><td>Rabbit holes, autoplay</td><td>Nghiện, lo âu, trầm cảm</td></tr>
            </table>

            <h4>Post-Truth Era</h4>
            <p>Oxford Dictionary chọn "post-truth" là từ của năm 2016. Đặc điểm:</p>
            <ul>
                <li>Cảm xúc và niềm tin cá nhân quan trọng hơn sự thật khách quan</li>
                <li>Bất cứ ai cũng có thể tạo "tin tức" → biên giới giữa tin thật/giả mờ nhạt</li>
                <li>Epistemic crisis: xã hội không thể đồng ý về sự thật cơ bản</li>
            </ul>

            <div class="warning-box">
                <strong>⚠️ Giải pháp?</strong> Chưa ai có câu trả lời hoàn hảo. Fact-checking giúp ích nhưng chậm. Platform regulation khó không vi phạm tự do ngôn luận. Giáo dục media literacy là giải pháp dài hạn nhất nhưng cũng chậm nhất.
            </div>
        `
    },
    'war-peace': {
        icon: '⚔️',
        title: 'Chiến Tranh & Hòa Bình',
        category: 'politics',
        level: 'advanced',
        connections: ['geopolitics', 'power-structures'],
        simple: `
            <h3>⚔️ Tại sao chiến tranh xảy ra?</h3>
            <p>Chiến tranh là khi các quốc gia hoặc nhóm sử dụng <strong>bạo lực có tổ chức</strong> để giải quyết xung đột. Dù kinh khủng, chiến tranh vẫn xảy ra vì nhiều lý do.</p>
            <h4>Nguyên nhân chính</h4>
            <ul>
                <li><strong>Tài nguyên:</strong> Tranh giành dầu, nước, đất đai. VD: Iraq 2003, xung đột Sudan</li>
                <li><strong>Ý thức hệ:</strong> Dân chủ vs Cộng sản (Chiến tranh Lạnh), tôn giáo (Thập tự chinh)</li>
                <li><strong>An ninh:</strong> Nước A vũ trang → nước B lo sợ → nước B cũng vũ trang → ai cũng sợ hơn (Security Dilemma)</li>
                <li><strong>Danh dự/Quyền lực:</strong> Lãnh đạo muốn thể hiện sức mạnh, bảo vệ "vùng ảnh hưởng"</li>
            </ul>
            <div class="example-box">
                <strong>Prisoner's Dilemma:</strong> Hai nước cùng có lợi nếu hòa bình, nhưng cả hai đều sợ bên kia tấn công trước → cả hai chuẩn bị chiến tranh → chiến tranh xảy ra dù không ai thực sự muốn.
            </div>
            <div class="tip-box">
                <strong>💡 Tin tốt:</strong> Tỷ lệ chết vì chiến tranh đang ở mức thấp nhất lịch sử (Steven Pinker). Thương mại, vũ khí hạt nhân, và các tổ chức quốc tế giúp duy trì "Long Peace" từ 1945.
            </div>
        `,
        detail: `
            <h3>📊 Chiến tranh chi tiết</h3>

            <h4>Game Theory và chiến tranh</h4>
            <table>
                <tr><th>Khái niệm</th><th>Giải thích</th><th>Ví dụ</th></tr>
                <tr><td>Prisoner's Dilemma</td><td>Cả hai cùng thua nếu không tin tưởng nhau</td><td>Chạy đua vũ trang</td></tr>
                <tr><td>Chicken Game</td><td>Ai "nhường" trước sẽ thua, nhưng không nhường thì cùng chết</td><td>Khủng hoảng tên lửa Cuba 1962</td></tr>
                <tr><td>Brinkmanship</td><td>Đẩy đối thủ đến bờ vực để ép nhượng bộ</td><td>Triều Tiên thử tên lửa</td></tr>
                <tr><td>Credible Commitment</td><td>Cam kết phải đáng tin để răn đe hiệu quả</td><td>NATO Article 5</td></tr>
            </table>

            <h4>MAD - Mutually Assured Destruction</h4>
            <p>Vũ khí hạt nhân tạo ra nghịch lý: vũ khí hủy diệt nhất lại <em>ngăn chặn</em> chiến tranh. Nếu cả hai có hạt nhân, tấn công = tự sát → không ai dám tấn công.</p>
            <div class="warning-box">
                <strong>⚠️ Rủi ro:</strong> MAD dựa trên giả định LÝ TRÍ. Nhưng nếu lãnh đạo bị điên? Nếu tín hiệu bị nhầm? Nếu hacker chiếm quyền? Nhiều lần thế giới suýt hủy diệt vì lỗi kỹ thuật (VD: Stanislav Petrov 1983).
            </div>

            <h4>Các tổ chức quốc tế</h4>
            <ul>
                <li><strong>Liên Hợp Quốc (UN):</strong> 193 nước, Hội đồng Bảo an (5 nước quyền phủ quyết P5), gìn giữ hòa bình</li>
                <li><strong>Tòa án Hình sự Quốc tế (ICC):</strong> Xét xử tội ác chiến tranh, diệt chủng</li>
                <li><strong>Luật Quốc tế:</strong> Geneva Conventions, luật chiến tranh, quyền tù binh</li>
            </ul>

            <h4>Diplomacy (Ngoại giao)</h4>
            <p>Công cụ giải quyết xung đột không bạo lực:</p>
            <ul>
                <li><strong>Bilateral:</strong> Đàm phán trực tiếp giữa 2 nước</li>
                <li><strong>Multilateral:</strong> Nhiều nước cùng đàm phán (G7, G20)</li>
                <li><strong>Track II:</strong> Kênh không chính thức (học giả, doanh nhân) khi kênh chính thức bế tắc</li>
            </ul>
        `,
        advanced: `
            <h3>🔬 Chiến tranh nâng cao</h3>

            <h4>Hybrid Warfare (Chiến tranh lai)</h4>
            <p>Chiến tranh hiện đại không chỉ là xe tăng và bom. Hybrid warfare kết hợp:</p>
            <ul>
                <li><strong>Conventional:</strong> Quân sự truyền thống</li>
                <li><strong>Irregular:</strong> Du kích, khủng bố, lính đánh thuê</li>
                <li><strong>Cyber:</strong> Hack hạ tầng, gián điệp kỹ thuật số</li>
                <li><strong>Information:</strong> Propaganda, fake news, kích động nội bộ</li>
                <li><strong>Economic:</strong> Sanctions, cấm vận, chiến tranh thương mại</li>
            </ul>

            <h4>Case Study: Ukraine-Russia (2022-)</h4>
            <div class="example-box">
                Kết hợp TẤT CẢ yếu tố địa chính trị:<br>
                • <strong>Lịch sử:</strong> NATO mở rộng → Nga cảm thấy bị đe dọa<br>
                • <strong>Địa lý:</strong> Ukraine là "buffer zone" giữa Nga và phương Tây<br>
                • <strong>Năng lượng:</strong> Nga dùng khí đốt như vũ khí chống EU<br>
                • <strong>Nuclear:</strong> Nga đe dọa hạt nhân → NATO không can thiệp trực tiếp<br>
                • <strong>Info War:</strong> Cả hai bên propaganda mạnh mẽ<br>
                • <strong>Economic:</strong> Sanctions chưa từng có vs pivot sang Trung Quốc/Ấn Độ
            </div>

            <h4>Just War Theory</h4>
            <table>
                <tr><th>Nguyên tắc</th><th>Mô tả</th></tr>
                <tr><td>Jus ad bellum (Quyền chiến tranh)</td><td>Nguyên nhân chính đáng, phương sách cuối cùng, tuyên bố bởi quyền lực hợp pháp</td></tr>
                <tr><td>Jus in bello (Trong chiến tranh)</td><td>Tương xứng (không dùng lực quá mức), phân biệt dân sự-quân sự</td></tr>
                <tr><td>Jus post bellum (Sau chiến tranh)</td><td>Hòa bình công bằng, không trả thù, tái thiết</td></tr>
            </table>

            <h4>Democratic Peace Theory</h4>
            <p>Hai nước dân chủ gần như KHÔNG BAO GIỜ chiến tranh với nhau (Kant, 1795). Lý do: dân chúng chịu hậu quả nên phản đối chiến tranh, thể chế tạo minh bạch. Phản biện: "dân chủ" là khái niệm mơ hồ, correlation ≠ causation.</p>

            <div class="formula-box">
                Clausewitz: "Chiến tranh là sự tiếp nối của chính trị bằng phương tiện khác"
            </div>
        `
    },
    'power-structures': {
        icon: '👑',
        title: 'Cấu Trúc Quyền Lực',
        category: 'politics',
        level: 'advanced',
        connections: ['governance', 'inequality'],
        simple: `
            <h3>👑 Ai thực sự nắm quyền?</h3>
            <p>Trong mọi xã hội, quyền lực không chỉ nằm ở tay chính phủ. Có những <strong>cấu trúc quyền lực ẩn</strong> ảnh hưởng đến quyết định quan trọng mà bạn không thấy.</p>
            <h4>Các tầng quyền lực</h4>
            <ul>
                <li><strong>Chính phủ:</strong> Quyền lực chính thức - luật pháp, quân đội, thuế</li>
                <li><strong>Doanh nghiệp lớn:</strong> Tiền = ảnh hưởng - lobby, tài trợ chiến dịch, việc làm</li>
                <li><strong>Truyền thông:</strong> Kiểm soát thông tin = kiểm soát tư duy</li>
                <li><strong>Quân đội:</strong> Sức mạnh cuối cùng - đặc biệt ở nước đang phát triển</li>
                <li><strong>Tôn giáo:</strong> Ảnh hưởng đạo đức và văn hóa</li>
            </ul>
            <div class="example-box">
                <strong>Ví dụ:</strong> Ở Mỹ, ngành dược chi 300 triệu USD/năm lobby → luật không cho phép chính phủ đàm phán giá thuốc → giá thuốc Mỹ cao gấp 2-5 lần các nước khác. Quyền lực thật nằm ở tiền.
            </div>
            <div class="tip-box">
                <strong>💡 Câu hỏi then chốt:</strong> "Ai hưởng lợi?" (Cui bono?) - Muốn hiểu quyền lực, hãy theo dõi tiền và lợi ích.
            </div>
        `,
        detail: `
            <h3>📊 Cấu trúc quyền lực chi tiết</h3>

            <h4>Power Elite (C. Wright Mills, 1956)</h4>
            <p>Ba nhóm elite liên kết và luân chuyển giữa nhau:</p>
            <table>
                <tr><th>Nhóm</th><th>Quyền lực</th><th>Ví dụ</th></tr>
                <tr><td>Corporate Elite</td><td>Kiểm soát kinh tế</td><td>CEO Fortune 500, Wall Street</td></tr>
                <tr><td>Military Elite</td><td>Kiểm soát bạo lực</td><td>Generals, Pentagon</td></tr>
                <tr><td>Political Elite</td><td>Kiểm soát luật pháp</td><td>Tổng thống, Quốc hội, Tòa án tối cao</td></tr>
            </table>

            <h4>Revolving Door (Cửa xoay)</h4>
            <p>Người liên tục luân chuyển giữa chính phủ và doanh nghiệp:</p>
            <ul>
                <li>CEO Goldman Sachs → Bộ trưởng Tài chính Mỹ (Hank Paulson)</li>
                <li>Tướng quân đội → Board thành viên Lockheed Martin</li>
                <li>Quan chức FDA → VP công ty dược phẩm</li>
            </ul>
            <div class="warning-box">
                <strong>⚠️ Vấn đề:</strong> Khi regulator (người quản lý) và regulated (người bị quản lý) là CÙNG MỘT NGƯỜI ở thời điểm khác nhau, ai bảo vệ công chúng?
            </div>

            <h4>Lobbying (Vận động hành lang)</h4>
            <p>Hợp pháp ở Mỹ - các công ty chi tiền ảnh hưởng quyết định chính trị:</p>
            <div class="example-box">
                Top ngành lobby Mỹ (2023):<br>
                • Dược phẩm: $374M<br>
                • Bảo hiểm: $175M<br>
                • Điện tử & CNTT: $169M<br>
                • Dầu khí: $125M<br>
                • Ngân hàng: $69M
            </div>

            <h4>Military-Industrial Complex</h4>
            <p>Eisenhower cảnh báo (1961): Liên minh giữa quân đội, nhà thầu quốc phòng, và chính trị gia tạo incentive duy trì chiến tranh vĩnh viễn vì lợi nhuận.</p>
        `,
        advanced: `
            <h3>🔬 Quyền lực nâng cao</h3>

            <h4>Deep State (Nhà nước ngầm)</h4>
            <p>Khái niệm gây tranh cãi: Bộ máy quan liêu (intelligence, quân đội, ngân hàng trung ương) có agenda riêng bất kể ai cầm quyền. Không phải conspiracy theory - đây là hiện thực ở nhiều nước:</p>
            <ul>
                <li><strong>Thổ Nhĩ Kỳ:</strong> Quân đội đảo chính 4 lần (1960, 1971, 1980, 1997) khi không đồng ý với chính phủ dân cử</li>
                <li><strong>Pakistan:</strong> ISI (tình báo) thường xuyên can thiệp chính trị</li>
                <li><strong>Mỹ:</strong> CIA operations mà Tổng thống có thể không biết (Iran-Contra)</li>
            </ul>

            <h4>Think Tanks & Shadow Power</h4>
            <table>
                <tr><th>Tổ chức</th><th>Xu hướng</th><th>Ảnh hưởng</th></tr>
                <tr><td>RAND Corporation</td><td>Quốc phòng/an ninh</td><td>Chiến lược quân sự Mỹ</td></tr>
                <tr><td>Brookings Institution</td><td>Trung tả</td><td>Chính sách nội địa và đối ngoại</td></tr>
                <tr><td>Heritage Foundation</td><td>Bảo thủ</td><td>Project 2025, chính sách Republican</td></tr>
                <tr><td>World Economic Forum</td><td>Globalist</td><td>Davos, "Great Reset"</td></tr>
            </table>

            <h4>Oligarchy (Chính quyền nhóm nhỏ)</h4>
            <p>Gilens & Page (Princeton, 2014) phân tích 1,779 chính sách Mỹ kết luận: ý kiến của tầng lớp giàu có ảnh hưởng mạnh đến chính sách, ý kiến của dân thường gần như KHÔNG có ảnh hưởng → Mỹ hoạt động giống oligarchy hơn democracy.</p>

            <h4>Foucault: Power is Everywhere</h4>
            <div class="formula-box">
                "Quyền lực không phải thứ sở hữu, mà là thứ thực thi. Nó không ở trung tâm mà ở khắp nơi."
            </div>
            <p>Quyền lực không chỉ ở chính phủ hay doanh nghiệp mà trong mọi mối quan hệ: bác sĩ-bệnh nhân, giáo viên-học sinh, cha mẹ-con cái. Ngôn ngữ, chuẩn mực, "kiến thức" đều là công cụ quyền lực.</p>

            <div class="example-box">
                <strong>Regulatory Capture:</strong> Khi cơ quan quản lý bị "bắt" bởi chính ngành họ quản lý. VD: SEC (cơ quan chứng khoán Mỹ) có văn hóa phạt nhẹ Wall Street vì nhân viên SEC muốn được thuê bởi Wall Street sau khi nghỉ việc.
            </div>
        `
    }
};
