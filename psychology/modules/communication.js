// Communication Psychology - Interpersonal skills
const communicationData = {
    'active-listening': {
        icon: '👂',
        title: 'Lắng Nghe Chủ Động',
        category: 'communication',
        level: 'beginner',
        connections: ['body-language', 'conflict-resolution', 'persuasion'],
        simple: `
            <h3>👂 Lắng nghe chủ động</h3>
            <p><strong>Active listening</strong> là lắng nghe với <em>toàn bộ sự chú ý</em>, không chỉ nghe từ ngữ mà còn hiểu cảm xúc.</p>
            <div class="example-box">
                <strong>Kỹ thuật cơ bản:</strong><br>
                👁️ Nhìn vào mắt người nói<br>
                🔄 Nhắc lại ý chính: "Ý bạn là..."<br>
                ❓ Hỏi để hiểu thêm: "Bạn có thể nói rõ hơn?"<br>
                💭 Không ngắt lời, không phán xét
            </div>
        `,
        detail: `
            <h3>📊 Kỹ thuật lắng nghe chủ động</h3>
            <table>
                <tr><th>Kỹ thuật</th><th>Cách làm</th><th>Ví dụ</th></tr>
                <tr><td>Paraphrasing</td><td>Nói lại bằng từ của bạn</td><td>"Vậy là bạn cảm thấy áp lực từ deadline?"</td></tr>
                <tr><td>Reflecting</td><td>Phản ánh cảm xúc</td><td>"Có vẻ bạn đang thất vọng về điều đó"</td></tr>
                <tr><td>Summarizing</td><td>Tóm tắt những điểm chính</td><td>"Tóm lại, bạn muốn thay đổi 3 điều..."</td></tr>
                <tr><td>Open questions</td><td>Hỏi mở, không Yes/No</td><td>"Bạn cảm thấy thế nào?" thay vì "Bạn ổn chứ?"</td></tr>
            </table>
            <h4>Rào cản lắng nghe</h4>
            <ul>
                <li><strong>Chuẩn bị trả lời:</strong> Nghĩ câu trả lời thay vì nghe</li>
                <li><strong>Phán xét:</strong> Đánh giá ngay khi chưa nghe hết</li>
                <li><strong>Lời khuyên sớm:</strong> Đưa giải pháp khi người ta chỉ cần được nghe</li>
                <li><strong>So sánh:</strong> "Tôi cũng từng..." chuyển focus về mình</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 Empathic Listening (Carl Rogers)</h3>
            <h4>3 điều kiện cốt lõi</h4>
            <ul>
                <li><strong>Chấp nhận vô điều kiện:</strong> Không phán xét, chấp nhận cảm xúc của họ là hợp lệ</li>
                <li><strong>Đồng cảm chính xác:</strong> Hiểu thế giới từ góc nhìn của họ</li>
                <li><strong>Chân thực:</strong> Thể hiện sự quan tâm thật sự, không giả tạo</li>
            </ul>
            <h4>Motivational Interviewing</h4>
            <p>Kỹ thuật lắng nghe trong tư vấn, giúp người khác tự tìm ra động lực thay đổi:</p>
            <ul>
                <li><strong>OARS:</strong> Open questions, Affirming, Reflecting, Summarizing</li>
                <li>Không thuyết phục, để họ tự khám phá lý do thay đổi</li>
            </ul>
            <div class="tip-box">
                <strong>💡 Quy tắc 80/20:</strong> Trong giao tiếp hiệu quả, hãy nghe 80% và nói 20%. Người giỏi nhất không phải người nói hay, mà là người nghe giỏi.
            </div>
        `
    },
    'persuasion': {
        icon: '🗣️',
        title: 'Thuyết Phục & Ảnh Hưởng',
        category: 'communication',
        level: 'intermediate',
        connections: ['active-listening', 'social-influence', 'negotiation'],
        simple: `
            <h3>🗣️ Nghệ thuật thuyết phục</h3>
            <p><strong>Thuyết phục</strong> là khả năng thay đổi suy nghĩ hoặc hành vi người khác một cách có đạo đức.</p>
            <div class="example-box">
                <strong>6 nguyên tắc Cialdini:</strong><br>
                🔄 Reciprocity (Có qua có lại)<br>
                🏆 Commitment (Cam kết & nhất quán)<br>
                👥 Social Proof (Bằng chứng xã hội)<br>
                ❤️ Liking (Thiện cảm)<br>
                👔 Authority (Uy quyền)<br>
                ⏰ Scarcity (Khan hiếm)
            </div>
        `,
        detail: `
            <h3>📊 6 nguyên tắc Cialdini chi tiết</h3>
            <table>
                <tr><th>Nguyên tắc</th><th>Cách hoạt động</th><th>Ví dụ</th></tr>
                <tr><td>Reciprocity</td><td>Cho trước, nhận sau</td><td>Tặng mẫu thử → khách hàng mua nhiều hơn</td></tr>
                <tr><td>Commitment</td><td>Đã nói sẽ làm</td><td>"Bạn cam kết chứ?" → tăng tỷ lệ thực hiện</td></tr>
                <tr><td>Social Proof</td><td>Người khác đã làm</td><td>"Best seller", "10,000 người đã mua"</td></tr>
                <tr><td>Liking</td><td>Thích ai thì nghe</td><td>Bạn bè giới thiệu > quảng cáo</td></tr>
                <tr><td>Authority</td><td>Tin chuyên gia</td><td>"Bác sĩ khuyên dùng", "Theo nghiên cứu..."</td></tr>
                <tr><td>Scarcity</td><td>Hiếm = giá trị</td><td>"Chỉ còn 3 sản phẩm", "Flash sale 2 giờ"</td></tr>
            </table>
        `,
        advanced: `
            <h3>🎓 Thuyết phục nâng cao</h3>
            <h4>Foot-in-the-Door</h4>
            <p>Yêu cầu nhỏ trước → yêu cầu lớn sau. Nghiên cứu: người đồng ý treo biển nhỏ → 76% đồng ý treo biển lớn (vs 17%).</p>
            <h4>Door-in-the-Face</h4>
            <p>Yêu cầu lớn (bị từ chối) → yêu cầu nhỏ hơn (đồng ý). Tâm lý nhượng bộ qua lại.</p>
            <h4>NLP cơ bản trong thuyết phục</h4>
            <ul>
                <li><strong>Rapport:</strong> Tạo sự đồng điệu bằng mirror & match</li>
                <li><strong>Pacing & Leading:</strong> Đồng bộ trước, dẫn dắt sau</li>
                <li><strong>Reframing:</strong> Đổi khung nhìn cho tình huống</li>
            </ul>
            <div class="warning-box">
                <strong>⚠️ Đạo đức:</strong> Thuyết phục ≠ Thao túng. Thuyết phục tôn trọng quyền từ chối, minh bạch ý đồ, và mang lại lợi ích cho cả hai bên.
            </div>
        `
    },
    'conflict-resolution': {
        icon: '⚖️',
        title: 'Giải Quyết Xung Đột',
        category: 'communication',
        level: 'intermediate',
        connections: ['active-listening', 'negotiation', 'attachment'],
        simple: `
            <h3>⚖️ Giải quyết xung đột</h3>
            <p><strong>Xung đột</strong> là điều tự nhiên. Quan trọng là cách bạn <em>xử lý</em> nó.</p>
            <div class="example-box">
                <strong>5 phong cách Thomas-Kilmann:</strong><br>
                🦈 Cạnh tranh - Tôi thắng, bạn thua<br>
                🐢 Né tránh - Không ai thắng<br>
                🧸 Nhượng bộ - Bạn thắng, tôi thua<br>
                🤝 Hợp tác - Cả hai thắng<br>
                ⚖️ Thỏa hiệp - Mỗi người nhường một chút
            </div>
        `,
        detail: `
            <h3>📊 5 phong cách chi tiết</h3>
            <table>
                <tr><th>Phong cách</th><th>Khi nào dùng</th><th>Khi nào tránh</th></tr>
                <tr><td>Cạnh tranh</td><td>Khẩn cấp, vấn đề quan trọng</td><td>Quan hệ dài hạn</td></tr>
                <tr><td>Hợp tác</td><td>Cả hai bên quan trọng</td><td>Vấn đề nhỏ, gấp</td></tr>
                <tr><td>Thỏa hiệp</td><td>Cần giải pháp nhanh</td><td>Có thể win-win</td></tr>
                <tr><td>Né tránh</td><td>Vấn đề nhỏ, cần hạ nhiệt</td><td>Vấn đề quan trọng</td></tr>
                <tr><td>Nhượng bộ</td><td>Sai rồi, quan hệ quan trọng hơn</td><td>Vấn đề nguyên tắc</td></tr>
            </table>
            <h4>Công thức "I-Message"</h4>
            <p>Thay vì "Anh luôn về muộn!" → "Em cảm thấy lo lắng (cảm xúc) khi anh về muộn (hành vi) vì em sợ có chuyện gì (lý do)."</p>
        `,
        advanced: `
            <h3>🎓 De-escalation & Win-Win</h3>
            <h4>Kỹ thuật De-escalation</h4>
            <ol>
                <li><strong>Hạ giọng:</strong> Nói chậm, nhẹ nhàng, không defensive</li>
                <li><strong>Validate:</strong> "Tôi hiểu bạn đang tức giận, điều đó hợp lý"</li>
                <li><strong>Tách vấn đề khỏi con người:</strong> "Chúng ta vs vấn đề", không phải "Tôi vs bạn"</li>
                <li><strong>Tìm điểm chung:</strong> "Cả hai chúng ta đều muốn..."</li>
            </ol>
            <h4>Interest-Based Negotiation</h4>
            <p>Phân biệt Position (lập trường) vs Interest (nhu cầu thật):</p>
            <div class="example-box">
                <strong>Ví dụ hai chị em tranh nhau quả cam:</strong><br>
                Position: "Tôi muốn quả cam!" vs "Tôi muốn quả cam!"<br>
                Interest: Chị cần nước cam uống, Em cần vỏ cam làm bánh → Cả hai đều được!
            </div>
            <h4>Nonviolent Communication (NVC - Marshall Rosenberg)</h4>
            <p>4 bước: Quan sát (không đánh giá) → Cảm xúc → Nhu cầu → Yêu cầu cụ thể</p>
        `
    },
    'negotiation': {
        icon: '🤝',
        title: 'Đàm Phán',
        category: 'communication',
        level: 'advanced',
        connections: ['persuasion', 'conflict-resolution', 'decision-psychology'],
        simple: `
            <h3>🤝 Đàm phán là gì?</h3>
            <p><strong>Đàm phán</strong> là quá trình hai bên tìm thỏa thuận chung khi có lợi ích khác nhau.</p>
            <div class="example-box">
                <strong>Nguyên tắc cơ bản:</strong><br>
                🎯 Biết mình muốn gì trước khi vào bàn<br>
                🔍 Hiểu đối phương muốn gì<br>
                ⚖️ Tìm giải pháp cả hai đều chấp nhận được<br>
                🚶 Sẵn sàng bỏ đi nếu cần
            </div>
        `,
        detail: `
            <h3>📊 Kỹ thuật đàm phán</h3>
            <h4>BATNA - Phương án thay thế tốt nhất</h4>
            <p><strong>BATNA</strong> (Best Alternative To a Negotiated Agreement) là "lá bài" quan trọng nhất. BATNA mạnh = vị thế mạnh.</p>
            <table>
                <tr><th>Kỹ thuật</th><th>Mô tả</th></tr>
                <tr><td>Anchoring</td><td>Đưa ra con số đầu tiên để "neo" đàm phán</td></tr>
                <tr><td>Silence</td><td>Im lặng sau khi đưa ra đề nghị, để đối phương phản ứng</td></tr>
                <tr><td>Flinch</td><td>Phản ứng "sốc" với đề nghị đầu tiên</td></tr>
                <tr><td>Bracketing</td><td>Đưa ra khoảng chứa mục tiêu thật</td></tr>
            </table>
            <h4>Harvard Method (Getting to Yes)</h4>
            <ul>
                <li>Tách con người khỏi vấn đề</li>
                <li>Tập trung vào lợi ích, không phải lập trường</li>
                <li>Tạo ra nhiều lựa chọn cùng có lợi</li>
                <li>Dùng tiêu chuẩn khách quan</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 Đàm phán nâng cao</h3>
            <h4>Chiến thuật tâm lý</h4>
            <ul>
                <li><strong>Loss framing:</strong> "Bạn sẽ mất X" mạnh hơn "Bạn sẽ được X"</li>
                <li><strong>Deadline pressure:</strong> Tạo áp lực thời gian (cẩn thận khi bị áp dụng lên mình)</li>
                <li><strong>Good cop/Bad cop:</strong> Một người cứng, một người mềm</li>
                <li><strong>Nibbling:</strong> Xin thêm điều nhỏ sau khi đã thỏa thuận xong</li>
            </ul>
            <h4>Chris Voss - Never Split the Difference</h4>
            <ul>
                <li><strong>Tactical empathy:</strong> Thể hiện hiểu, không nhất thiết đồng ý</li>
                <li><strong>Labeling:</strong> "Có vẻ như bạn đang cảm thấy..."</li>
                <li><strong>Calibrated questions:</strong> "Làm thế nào tôi có thể..." thay vì "Tại sao?"</li>
            </ul>
            <div class="tip-box">
                <strong>💡 Quy tắc vàng:</strong> Người nắm thông tin nhiều hơn thường thắng. Hãy hỏi nhiều, nói ít, và đừng bao giờ tiết lộ BATNA quá sớm.
            </div>
        `
    },
    'manipulation-detect': {
        icon: '🚩',
        title: 'Nhận Diện Thao Túng',
        category: 'communication',
        level: 'advanced',
        connections: ['persuasion', 'dark-psychology', 'body-language'],
        simple: `
            <h3>🚩 Nhận diện thao túng</h3>
            <p><strong>Thao túng tâm lý</strong> là cách ai đó kiểm soát bạn thông qua <em>lừa dối</em> và <em>khai thác cảm xúc</em>.</p>
            <div class="example-box">
                <strong>Red flags phổ biến:</strong><br>
                🔥 Love-bombing: Yêu thương "bom tấn" ngay từ đầu<br>
                💨 Gaslighting: "Bạn tưởng tượng ra thôi"<br>
                😢 Guilt-tripping: "Nếu bạn yêu tôi thì..."<br>
                🎭 Silent treatment: Im lặng để trừng phạt
            </div>
        `,
        detail: `
            <h3>📊 Các kỹ thuật thao túng</h3>
            <table>
                <tr><th>Kỹ thuật</th><th>Cách hoạt động</th><th>Dấu hiệu nhận biết</th></tr>
                <tr><td>Gaslighting</td><td>Phủ nhận thực tế của bạn</td><td>Bạn bắt đầu nghi ngờ chính mình</td></tr>
                <tr><td>Love-bombing</td><td>Tặng quà, khen quá mức từ đầu</td><td>Quá nhanh, quá nhiều, quá sớm</td></tr>
                <tr><td>Guilt-tripping</td><td>Dùng cảm giác tội lỗi để kiểm soát</td><td>Bạn luôn cảm thấy mình là người xấu</td></tr>
                <tr><td>Moving goalposts</td><td>Luôn đổi yêu cầu</td><td>Không bao giờ đủ tốt</td></tr>
                <tr><td>DARVO</td><td>Deny, Attack, Reverse Victim & Offender</td><td>Khi bị chỉ ra lỗi, họ trở thành nạn nhân</td></tr>
            </table>
            <h4>Chu kỳ thao túng</h4>
            <p>Idealize (tôn sùng) → Devalue (hạ thấp) → Discard (bỏ rơi) → Hoover (kéo lại)</p>
        `,
        advanced: `
            <h3>🎓 Cách tự vệ trước thao túng</h3>
            <h4>Kỹ thuật phòng vệ</h4>
            <ul>
                <li><strong>Grey Rock:</strong> Trở nên nhàm chán, không phản ứng cảm xúc</li>
                <li><strong>Broken Record:</strong> Lặp lại ranh giới: "Tôi không đồng ý với điều đó"</li>
                <li><strong>JADE (Tránh):</strong> Không Justify, Argue, Defend, Explain</li>
                <li><strong>No Contact:</strong> Cắt liên lạc hoàn toàn nếu cần</li>
            </ul>
            <h4>Thiết lập ranh giới</h4>
            <div class="tip-box">
                <strong>💡 Công thức ranh giới:</strong> "Khi bạn [hành vi], tôi cảm thấy [cảm xúc]. Tôi cần [nhu cầu]. Nếu tiếp tục, tôi sẽ [hậu quả]."
            </div>
            <h4>Khi nào cần chuyên gia?</h4>
            <div class="warning-box">
                <strong>⚠️ Tìm sự giúp đỡ khi:</strong> Bạn cảm thấy mất kiểm soát, tự nghi ngờ liên tục, bị cô lập khỏi bạn bè/gia đình, hoặc có dấu hiệu trầm cảm/lo âu. Hotline tư vấn tâm lý: 1800 599 920 (miễn phí).
            </div>
        `
    }
};
