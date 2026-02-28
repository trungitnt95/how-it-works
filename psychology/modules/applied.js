// Applied Psychology - Practical applications
const appliedPsychData = {
    'stress-management': {
        icon: '😤',
        title: 'Quản Lý Stress',
        category: 'applied',
        level: 'beginner',
        connections: ['emotions', 'cognitive-therapy', 'motivation'],
        simple: `
            <h3>😤 Stress là gì?</h3>
            <p><strong>Stress</strong> là phản ứng của cơ thể trước thử thách. Stress vừa phải giúp bạn tập trung, nhưng quá nhiều sẽ gây hại.</p>
            <div class="example-box">
                <strong>2 loại stress:</strong><br>
                ✅ Eustress (Stress tốt): Deadline hợp lý → tập trung, hiệu quả<br>
                ❌ Distress (Stress xấu): Áp lực quá mức → kiệt sức, bệnh
            </div>
            <h4>Kỹ thuật thư giãn nhanh</h4>
            <ul>
                <li>🫁 Hít thở 4-7-8: Hít 4s, giữ 7s, thở ra 8s</li>
                <li>🧊 Cầm đá lạnh 30 giây: Kích hoạt phản xạ "lặn"</li>
                <li>🚶 Đi bộ 10 phút: Giảm cortisol tức thì</li>
            </ul>
        `,
        detail: `
            <h3>📊 Cơ chế stress</h3>
            <h4>HPA Axis (Trục stress)</h4>
            <p>Hypothalamus → Pituitary → Adrenal → Cortisol + Adrenaline</p>
            <table>
                <tr><th>Hormone</th><th>Tác dụng ngắn hạn</th><th>Tác hại dài hạn</th></tr>
                <tr><td>Cortisol</td><td>Tăng đường huyết, năng lượng</td><td>Suy giảm miễn dịch, tăng cân</td></tr>
                <tr><td>Adrenaline</td><td>Tim đập nhanh, phản xạ nhanh</td><td>Mất ngủ, lo âu mãn tính</td></tr>
            </table>
            <h4>Dấu hiệu stress mãn tính</h4>
            <ul>
                <li><strong>Cơ thể:</strong> Đau đầu, mệt mỏi, đau dạ dày</li>
                <li><strong>Cảm xúc:</strong> Cáu gắt, lo lắng, buồn bã</li>
                <li><strong>Nhận thức:</strong> Khó tập trung, hay quên</li>
                <li><strong>Hành vi:</strong> Ăn quá nhiều/ít, cô lập, dùng chất kích thích</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 Quản lý stress chuyên sâu</h3>
            <h4>Mô hình Yerkes-Dodson</h4>
            <div class="formula-box">
                Hiệu suất = f(Stress) → Hình chữ U ngược
            </div>
            <p>Stress quá thấp → chán, stress vừa → hiệu suất tối ưu, stress quá cao → kiệt sức.</p>
            <h4>Chiến lược dài hạn</h4>
            <ul>
                <li><strong>Problem-focused coping:</strong> Giải quyết nguyên nhân gốc</li>
                <li><strong>Emotion-focused coping:</strong> Quản lý phản ứng cảm xúc</li>
                <li><strong>Meaning-focused coping:</strong> Tìm ý nghĩa trong khó khăn</li>
            </ul>
            <h4>Burnout (Kiệt sức)</h4>
            <div class="warning-box">
                <strong>⚠️ 3 dấu hiệu burnout (WHO):</strong><br>
                1. Kiệt sức năng lượng<br>
                2. Cynicism - Thờ ơ, tiêu cực về công việc<br>
                3. Giảm hiệu suất chuyên môn<br>
                Burnout không phải lỗi cá nhân, mà thường do hệ thống.
            </div>
        `
    },
    'cognitive-therapy': {
        icon: '💡',
        title: 'Tư Duy Tích Cực',
        category: 'applied',
        level: 'intermediate',
        connections: ['consciousness', 'emotions', 'stress-management'],
        simple: `
            <h3>💡 CBT - Liệu pháp nhận thức hành vi</h3>
            <p><strong>CBT</strong> dạy bạn rằng: <em>Suy nghĩ → Cảm xúc → Hành vi</em>. Thay đổi suy nghĩ = thay đổi cảm xúc.</p>
            <div class="example-box">
                <strong>Ví dụ:</strong><br>
                Sự kiện: Bạn không reply tin nhắn<br>
                ❌ Suy nghĩ: "Họ ghét mình" → Buồn, lo<br>
                ✅ Suy nghĩ: "Họ có thể bận" → Bình tĩnh
            </div>
        `,
        detail: `
            <h3>📊 Cognitive Distortions (Bóp méo nhận thức)</h3>
            <table>
                <tr><th>Loại</th><th>Mô tả</th><th>Ví dụ</th></tr>
                <tr><td>All-or-Nothing</td><td>Trắng hoặc đen</td><td>"Không hoàn hảo = thất bại"</td></tr>
                <tr><td>Catastrophizing</td><td>Tưởng tượng kịch bản tệ nhất</td><td>"Nếu thi rớt, đời tôi coi như xong"</td></tr>
                <tr><td>Mind Reading</td><td>Đoán suy nghĩ người khác</td><td>"Chắc họ nghĩ mình ngu"</td></tr>
                <tr><td>Overgeneralization</td><td>Khái quát hóa quá mức</td><td>"Tôi LUÔN thất bại"</td></tr>
                <tr><td>Personalization</td><td>Nhận lỗi về mình</td><td>"Họ buồn chắc tại mình"</td></tr>
                <tr><td>Should Statements</td><td>"Phải", "nên", "đáng lẽ"</td><td>"Mình phải hoàn hảo"</td></tr>
            </table>
            <h4>Kỹ thuật Reframing</h4>
            <p>Đặt lại "khung" cho tình huống. Thay vì "Tôi thất bại" → "Tôi học được một bài học quý giá."</p>
        `,
        advanced: `
            <h3>🎓 CBT nâng cao</h3>
            <h4>Thought Record (Nhật ký suy nghĩ)</h4>
            <ol>
                <li><strong>Tình huống:</strong> Chuyện gì xảy ra?</li>
                <li><strong>Suy nghĩ tự động:</strong> Bạn nghĩ gì ngay lập tức?</li>
                <li><strong>Cảm xúc:</strong> Bạn cảm thấy gì? (0-100)</li>
                <li><strong>Bằng chứng ủng hộ:</strong> Có gì chứng minh suy nghĩ đó đúng?</li>
                <li><strong>Bằng chứng chống lại:</strong> Có gì chứng minh suy nghĩ đó sai?</li>
                <li><strong>Suy nghĩ cân bằng:</strong> Cách nhìn hợp lý hơn?</li>
                <li><strong>Cảm xúc mới:</strong> Bạn cảm thấy gì bây giờ? (0-100)</li>
            </ol>
            <h4>Behavioral Activation</h4>
            <p>Khi trầm cảm, não nói "không muốn làm gì" → càng không làm → càng buồn. CBT: hành động TRƯỚC, cảm xúc theo SAU.</p>
            <div class="tip-box">
                <strong>💡 Quy tắc 5 phút:</strong> Cam kết chỉ làm 5 phút. Thường sau 5 phút bạn sẽ tiếp tục. Đây là cách phá vòng lặp trì hoãn.
            </div>
        `
    },
    'emotional-intelligence': {
        icon: '🌟',
        title: 'Trí Tuệ Cảm Xúc (EQ)',
        category: 'applied',
        level: 'intermediate',
        connections: ['emotions', 'active-listening', 'big-five'],
        simple: `
            <h3>🌟 EQ là gì?</h3>
            <p><strong>Trí tuệ cảm xúc (EQ)</strong> là khả năng nhận biết, hiểu và quản lý cảm xúc của mình và người khác.</p>
            <div class="example-box">
                <strong>EQ vs IQ:</strong><br>
                🧠 IQ: Giỏi toán, logic, kiến thức<br>
                ❤️ EQ: Giỏi hiểu người, quản lý cảm xúc<br>
                → Nghiên cứu: EQ dự đoán thành công nghề nghiệp tốt hơn IQ!
            </div>
        `,
        detail: `
            <h3>📊 5 thành phần EQ (Daniel Goleman)</h3>
            <table>
                <tr><th>Thành phần</th><th>Mô tả</th><th>Ví dụ</th></tr>
                <tr><td>Self-awareness</td><td>Nhận biết cảm xúc của mình</td><td>"Tôi đang tức giận vì bị phê bình"</td></tr>
                <tr><td>Self-regulation</td><td>Kiểm soát cảm xúc</td><td>Hít thở sâu thay vì la mắng</td></tr>
                <tr><td>Motivation</td><td>Tự thúc đẩy bản thân</td><td>Kiên trì dù thất bại</td></tr>
                <tr><td>Empathy</td><td>Hiểu cảm xúc người khác</td><td>"Tôi hiểu bạn đang lo lắng"</td></tr>
                <tr><td>Social skills</td><td>Quản lý quan hệ</td><td>Giải quyết xung đột, teamwork</td></tr>
            </table>
            <h4>Tại sao EQ quan trọng?</h4>
            <ul>
                <li>90% top performers có EQ cao</li>
                <li>EQ ảnh hưởng 58% hiệu suất công việc</li>
                <li>Lãnh đạo EQ cao → nhân viên gắn bó hơn 20%</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 Phát triển EQ</h3>
            <h4>Emotional Granularity</h4>
            <p>Càng nhiều từ vựng cảm xúc → EQ càng cao. Thay vì "buồn", phân biệt: thất vọng, cô đơn, tủi thân, nuối tiếc, chán nản, bất lực.</p>
            <h4>3 loại Empathy</h4>
            <ul>
                <li><strong>Cognitive empathy:</strong> Hiểu suy nghĩ (perspective-taking)</li>
                <li><strong>Emotional empathy:</strong> Cảm nhận cảm xúc (đồng cảm)</li>
                <li><strong>Compassionate empathy:</strong> Hiểu + cảm nhận + hành động giúp</li>
            </ul>
            <div class="warning-box">
                <strong>⚠️ Empathy fatigue:</strong> Đồng cảm quá nhiều → kiệt sức cảm xúc. Đặc biệt ở ngành y tế, tâm lý, xã hội. Cần biết đặt ranh giới và tự chăm sóc bản thân.
            </div>
            <h4>Bài tập phát triển EQ</h4>
            <ul>
                <li>Viết nhật ký cảm xúc mỗi tối</li>
                <li>Trước khi phản ứng, đếm đến 10</li>
                <li>Thực hành "perspective taking" với người khác quan điểm</li>
            </ul>
        `
    },
    'dark-psychology': {
        icon: '🌑',
        title: 'Tâm Lý Học Tối',
        category: 'applied',
        level: 'advanced',
        connections: ['manipulation-detect', 'social-influence', 'crowd-psychology'],
        simple: `
            <h3>🌑 Dark Triad là gì?</h3>
            <p><strong>Dark Triad</strong> là 3 đặc điểm tính cách "tối" thường xuất hiện cùng nhau.</p>
            <div class="example-box">
                <strong>Dark Triad:</strong><br>
                🪞 Narcissism - Ái kỷ: Tự cao, cần được ngưỡng mộ<br>
                🎭 Machiavellianism - Mưu mô: Thao túng, tính toán<br>
                💀 Psychopathy - Phản xã hội: Thiếu đồng cảm, liều lĩnh
            </div>
        `,
        detail: `
            <h3>📊 Chi tiết Dark Triad</h3>
            <table>
                <tr><th>Đặc điểm</th><th>Ưu điểm (bề ngoài)</th><th>Mặt tối</th></tr>
                <tr><td>Narcissism</td><td>Tự tin, lôi cuốn, tham vọng</td><td>Khai thác người khác, cần ngưỡng mộ, dễ giận</td></tr>
                <tr><td>Machiavellianism</td><td>Chiến lược, thực tế, kiên nhẫn</td><td>Lừa dối, thao túng, không đáng tin</td></tr>
                <tr><td>Psychopathy</td><td>Bình tĩnh, dũng cảm, quyết đoán</td><td>Vô cảm, bốc đồng, bạo lực</td></tr>
            </table>
            <h4>Nhận biết Narcissist</h4>
            <ul>
                <li>Nói về bản thân liên tục</li>
                <li>Phản ứng quá mạnh khi bị phê bình</li>
                <li>Thiếu empathy thật sự</li>
                <li>Gaslighting khi bị chỉ ra lỗi</li>
                <li>Love-bombing → Devaluing cycle</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 Dark Triad trong xã hội</h3>
            <h4>Dark Triad tại nơi làm việc</h4>
            <p>Nghiên cứu cho thấy Dark Triad chiếm tỷ lệ cao hơn ở vị trí lãnh đạo (CEO: ~4x trung bình). Họ thăng tiến nhanh nhưng thường gây hại lâu dài.</p>
            <h4>Dark Tetrad</h4>
            <p>Gần đây, các nhà nghiên cứu thêm đặc điểm thứ 4:</p>
            <ul>
                <li><strong>Sadism:</strong> Thích gây đau khổ cho người khác, tận hưởng sự thống trị</li>
            </ul>
            <h4>Subclinical vs Clinical</h4>
            <div class="warning-box">
                <strong>⚠️ Quan trọng:</strong> Dark Triad tồn tại trên một phổ liên tục. Hầu hết mọi người có một số đặc điểm ở mức nhẹ. Chỉ khi ở mức cao mới gây hại nghiêm trọng. Đừng "chẩn đoán" người khác - chỉ chuyên gia mới đủ tư cách.
            </div>
            <h4>Tự bảo vệ</h4>
            <ul>
                <li>Tin vào hành vi, không phải lời nói</li>
                <li>Duy trì mạng lưới xã hội đa dạng</li>
                <li>Thiết lập ranh giới rõ ràng và nhất quán</li>
            </ul>
        `
    },
    'crowd-psychology': {
        icon: '🌊',
        title: 'Tâm Lý Đám Đông',
        category: 'applied',
        level: 'advanced',
        connections: ['social-influence', 'dark-psychology', 'decision-psychology'],
        simple: `
            <h3>🌊 Tâm lý đám đông</h3>
            <p>Trong đám đông, con người <strong>hành xử khác</strong> so với khi ở một mình.</p>
            <div class="example-box">
                <strong>Hiện tượng phổ biến:</strong><br>
                🐑 Mob mentality: Làm theo đám đông<br>
                🤐 Groupthink: Nhóm ra quyết định sai<br>
                😈 Deindividuation: Mất danh tính → giảm kiểm soát
            </div>
        `,
        detail: `
            <h3>📊 Hiện tượng đám đông</h3>
            <h4>Groupthink (Irving Janis)</h4>
            <p>Nhóm ưu tiên sự đồng thuận hơn quyết định đúng.</p>
            <table>
                <tr><th>Dấu hiệu</th><th>Ví dụ</th></tr>
                <tr><td>Ảo tưởng bất khả chiến bại</td><td>"Nhóm mình không thể sai"</td></tr>
                <tr><td>Áp lực tuân thủ</td><td>Im lặng khi không đồng ý</td></tr>
                <tr><td>Tự kiểm duyệt</td><td>Không dám nói ý kiến khác</td></tr>
                <tr><td>Ảo tưởng đồng thuận</td><td>"Ai cũng đồng ý mà"</td></tr>
            </table>
            <h4>Deindividuation</h4>
            <p>Khi ẩn danh trong đám đông, người ta dễ:</p>
            <ul>
                <li>Hành động bạo lực hơn</li>
                <li>Phá hoại tài sản</li>
                <li>Nói lời tàn nhẫn (online trolling)</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 Tâm lý đám đông thời đại số</h3>
            <h4>Social Media Psychology</h4>
            <ul>
                <li><strong>Echo Chambers:</strong> Thuật toán chỉ cho thấy ý kiến tương tự → phân cực</li>
                <li><strong>Viral outrage:</strong> Nội dung gây phẫn nộ lan nhanh nhất (cao hơn vui vẻ 20%)</li>
                <li><strong>Cancel culture:</strong> Tâm lý đám đông online + deindividuation</li>
                <li><strong>Doomscrolling:</strong> Lướt tin xấu liên tục → cortisol tăng</li>
            </ul>
            <h4>Phòng tránh Groupthink</h4>
            <ol>
                <li>Chỉ định "devil's advocate" trong mỗi cuộc họp</li>
                <li>Khuyến khích ý kiến trái chiều</li>
                <li>Viết ý kiến riêng trước khi thảo luận nhóm</li>
                <li>Mời chuyên gia bên ngoài đánh giá</li>
            </ol>
            <div class="tip-box">
                <strong>💡 Digital Wellness:</strong> Giới hạn thời gian mạng xã hội, tắt notification, follow đa dạng nguồn tin, nhận biết khi nào bạn đang bị "đám đông online" ảnh hưởng.
            </div>
            <h4>Gustave Le Bon - The Crowd (1895)</h4>
            <p>"Trong đám đông, cá nhân bị cuốn vào tâm trí tập thể. Trí tuệ giảm, cảm xúc lây lan, và gợi ý trở thành mệnh lệnh."</p>
        `
    }
};
