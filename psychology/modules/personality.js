// Personality Psychology - Types and traits
const personalityData = {
    'mbti': {
        icon: '🎭',
        title: '16 Kiểu Tính Cách MBTI',
        category: 'personality',
        level: 'beginner',
        connections: ['big-five', 'enneagram', 'temperament'],
        simple: `
            <h3>🎭 MBTI là gì?</h3>
            <p><strong>MBTI</strong> (Myers-Briggs Type Indicator) phân loại tính cách thành <em>16 kiểu</em> dựa trên 4 chiều.</p>
            <div class="example-box">
                <strong>4 chiều MBTI:</strong><br>
                • E (Hướng ngoại) vs I (Hướng nội)<br>
                • S (Giác quan) vs N (Trực giác)<br>
                • T (Lý trí) vs F (Cảm xúc)<br>
                • J (Nguyên tắc) vs P (Linh hoạt)
            </div>
        `,
        detail: `
            <h3>📊 16 kiểu tính cách</h3>
            <h4>Nhóm Phân tích (NT)</h4>
            <table>
                <tr><th>Kiểu</th><th>Biệt danh</th><th>Đặc điểm</th></tr>
                <tr><td>INTJ</td><td>Chiến lược gia</td><td>Tầm nhìn xa, độc lập, quyết đoán</td></tr>
                <tr><td>INTP</td><td>Nhà logic</td><td>Tò mò, phân tích, sáng tạo</td></tr>
                <tr><td>ENTJ</td><td>Chỉ huy</td><td>Lãnh đạo, hiệu quả, tự tin</td></tr>
                <tr><td>ENTP</td><td>Nhà tranh luận</td><td>Nhanh trí, thẳng thắn, sáng tạo</td></tr>
            </table>
            <h4>Nhóm Ngoại giao (NF)</h4>
            <table>
                <tr><th>Kiểu</th><th>Biệt danh</th><th>Đặc điểm</th></tr>
                <tr><td>INFJ</td><td>Người ủng hộ</td><td>Sâu sắc, lý tưởng, quyết tâm</td></tr>
                <tr><td>INFP</td><td>Người hòa giải</td><td>Lý tưởng, trung thành, nhạy cảm</td></tr>
                <tr><td>ENFJ</td><td>Người cho đi</td><td>Lôi cuốn, đồng cảm, lãnh đạo</td></tr>
                <tr><td>ENFP</td><td>Người truyền cảm hứng</td><td>Nhiệt tình, sáng tạo, xã hội</td></tr>
            </table>
        `,
        advanced: `
            <h3>🎓 MBTI nâng cao</h3>
            <h4>Cognitive Functions (Chức năng nhận thức)</h4>
            <p>Mỗi kiểu MBTI có 4 chức năng xếp theo thứ tự ưu tiên:</p>
            <ul>
                <li><strong>Dominant:</strong> Chức năng mạnh nhất, dùng tự nhiên</li>
                <li><strong>Auxiliary:</strong> Hỗ trợ, phát triển ở tuổi thiếu niên</li>
                <li><strong>Tertiary:</strong> Yếu hơn, phát triển ở tuổi trưởng thành</li>
                <li><strong>Inferior:</strong> Yếu nhất, "gót chân Achilles"</li>
            </ul>
            <div class="warning-box">
                <strong>⚠️ Hạn chế của MBTI:</strong> MBTI không được cộng đồng tâm lý học chính thống công nhận hoàn toàn vì thiếu độ tin cậy test-retest. Big Five được coi là mô hình khoa học hơn.
            </div>
            <h4>Ví dụ: INTJ Stack</h4>
            <p>Ni (Introverted Intuition) → Te (Extraverted Thinking) → Fi (Introverted Feeling) → Se (Extraverted Sensing)</p>
        `
    },
    'big-five': {
        icon: '📊',
        title: 'Big Five (OCEAN)',
        category: 'personality',
        level: 'intermediate',
        connections: ['mbti', 'enneagram', 'emotional-intelligence'],
        simple: `
            <h3>📊 Big Five là gì?</h3>
            <p><strong>Big Five</strong> (OCEAN) là mô hình 5 yếu tố tính cách được khoa học công nhận rộng rãi nhất.</p>
            <div class="example-box">
                <strong>5 yếu tố OCEAN:</strong><br>
                • <strong>O</strong>penness - Cởi mở<br>
                • <strong>C</strong>onscientiousness - Tận tâm<br>
                • <strong>E</strong>xtraversion - Hướng ngoại<br>
                • <strong>A</strong>greeableness - Dễ chịu<br>
                • <strong>N</strong>euroticism - Bất ổn cảm xúc
            </div>
        `,
        detail: `
            <h3>📊 Chi tiết 5 yếu tố</h3>
            <table>
                <tr><th>Yếu tố</th><th>Điểm cao</th><th>Điểm thấp</th></tr>
                <tr><td>Openness</td><td>Sáng tạo, tò mò, thích trải nghiệm mới</td><td>Thực tế, thích routine</td></tr>
                <tr><td>Conscientiousness</td><td>Có tổ chức, kỷ luật, đáng tin cậy</td><td>Linh hoạt, tự phát</td></tr>
                <tr><td>Extraversion</td><td>Năng động, nói nhiều, tìm kích thích</td><td>Trầm tính, thích một mình</td></tr>
                <tr><td>Agreeableness</td><td>Tốt bụng, hợp tác, tin tưởng</td><td>Cạnh tranh, hoài nghi</td></tr>
                <tr><td>Neuroticism</td><td>Dễ lo lắng, nhạy cảm, hay thay đổi</td><td>Bình tĩnh, ổn định</td></tr>
            </table>
            <h4>Tại sao Big Five tốt hơn MBTI?</h4>
            <ul>
                <li>Dùng thang liên tục (0-100) thay vì nhị phân</li>
                <li>Độ tin cậy test-retest cao</li>
                <li>Được xác nhận xuyên văn hóa</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 Big Five và dự đoán hành vi</h3>
            <h4>Nghiên cứu cho thấy:</h4>
            <ul>
                <li><strong>Conscientiousness cao:</strong> Dự đoán tốt nhất thành công nghề nghiệp và tuổi thọ</li>
                <li><strong>Neuroticism cao:</strong> Liên quan đến trầm cảm, lo âu</li>
                <li><strong>Agreeableness cao:</strong> Quan hệ tốt nhưng thu nhập thấp hơn</li>
                <li><strong>Openness cao:</strong> Sáng tạo nhưng dễ bị nghiện chất</li>
            </ul>
            <h4>Di truyền vs Môi trường</h4>
            <div class="tip-box">
                <strong>💡 Nghiên cứu sinh đôi:</strong> Khoảng 40-60% tính cách Big Five có yếu tố di truyền. Phần còn lại chịu ảnh hưởng từ môi trường và trải nghiệm cá nhân.
            </div>
            <h4>Thay đổi theo tuổi</h4>
            <p>Agreeableness và Conscientiousness tăng dần theo tuổi. Neuroticism và Extraversion giảm dần. Openness giảm nhẹ sau tuổi trung niên.</p>
        `
    },
    'enneagram': {
        icon: '🔢',
        title: 'Enneagram - 9 Loại Người',
        category: 'personality',
        level: 'intermediate',
        connections: ['mbti', 'big-five', 'motivation'],
        simple: `
            <h3>🔢 Enneagram là gì?</h3>
            <p><strong>Enneagram</strong> chia tính cách thành <em>9 loại</em>, mỗi loại có một động lực cốt lõi khác nhau.</p>
            <div class="example-box">
                <strong>9 kiểu Enneagram:</strong><br>
                1️⃣ Người hoàn hảo • 2️⃣ Người giúp đỡ • 3️⃣ Người thành đạt<br>
                4️⃣ Người cá tính • 5️⃣ Người quan sát • 6️⃣ Người trung thành<br>
                7️⃣ Người nhiệt huyết • 8️⃣ Người thách thức • 9️⃣ Người hòa bình
            </div>
        `,
        detail: `
            <h3>📊 Chi tiết 9 kiểu</h3>
            <table>
                <tr><th>Kiểu</th><th>Động lực cốt lõi</th><th>Nỗi sợ cốt lõi</th></tr>
                <tr><td>1 - Hoàn hảo</td><td>Muốn làm đúng</td><td>Sợ sai lầm</td></tr>
                <tr><td>2 - Giúp đỡ</td><td>Muốn được yêu</td><td>Sợ không được cần</td></tr>
                <tr><td>3 - Thành đạt</td><td>Muốn được ngưỡng mộ</td><td>Sợ thất bại</td></tr>
                <tr><td>4 - Cá tính</td><td>Muốn độc đáo</td><td>Sợ tầm thường</td></tr>
                <tr><td>5 - Quan sát</td><td>Muốn hiểu biết</td><td>Sợ bất lực</td></tr>
                <tr><td>6 - Trung thành</td><td>Muốn an toàn</td><td>Sợ không được hỗ trợ</td></tr>
                <tr><td>7 - Nhiệt huyết</td><td>Muốn hạnh phúc</td><td>Sợ đau khổ</td></tr>
                <tr><td>8 - Thách thức</td><td>Muốn kiểm soát</td><td>Sợ bị tổn thương</td></tr>
                <tr><td>9 - Hòa bình</td><td>Muốn hòa hợp</td><td>Sợ xung đột</td></tr>
            </table>
        `,
        advanced: `
            <h3>🎓 Hệ thống Enneagram nâng cao</h3>
            <h4>Cánh (Wings)</h4>
            <p>Mỗi kiểu chịu ảnh hưởng từ 1 trong 2 kiểu bên cạnh. Ví dụ: Kiểu 1 có thể là 1w9 (hòa bình hơn) hoặc 1w2 (giúp đỡ hơn).</p>
            <h4>Hướng tích hợp & tan rã</h4>
            <ul>
                <li><strong>Tích hợp (stress giảm):</strong> Di chuyển về kiểu tích cực<br>
                1→7, 2→4, 3→6, 4→1, 5→8, 6→9, 7→5, 8→2, 9→3</li>
                <li><strong>Tan rã (stress tăng):</strong> Di chuyển về kiểu tiêu cực<br>
                1→4, 2→8, 3→9, 4→2, 5→7, 6→3, 7→1, 8→5, 9→6</li>
            </ul>
            <h4>3 Trung tâm</h4>
            <ul>
                <li><strong>Trung tâm Bản năng (8,9,1):</strong> Phản ứng bằng hành động</li>
                <li><strong>Trung tâm Cảm xúc (2,3,4):</strong> Phản ứng bằng tình cảm</li>
                <li><strong>Trung tâm Tư duy (5,6,7):</strong> Phản ứng bằng suy nghĩ</li>
            </ul>
        `
    },
    'attachment': {
        icon: '🔗',
        title: 'Kiểu Gắn Bó',
        category: 'personality',
        level: 'intermediate',
        connections: ['emotions', 'conflict-resolution', 'mbti'],
        simple: `
            <h3>🔗 Kiểu gắn bó là gì?</h3>
            <p><strong>Attachment style</strong> là cách bạn kết nối cảm xúc với người khác, hình thành từ thời thơ ấu.</p>
            <div class="example-box">
                <strong>4 kiểu gắn bó:</strong><br>
                ✅ Secure (An toàn) - Thoải mái với sự gần gũi<br>
                😰 Anxious (Lo lắng) - Sợ bị bỏ rơi<br>
                🚫 Avoidant (Né tránh) - Sợ gần gũi<br>
                😵 Disorganized (Hỗn loạn) - Vừa muốn vừa sợ
            </div>
        `,
        detail: `
            <h3>📊 4 kiểu gắn bó chi tiết</h3>
            <table>
                <tr><th>Kiểu</th><th>Trong tình yêu</th><th>Nguyên nhân</th></tr>
                <tr><td>Secure (56%)</td><td>Tin tưởng, thoải mái, hỗ trợ</td><td>Bố mẹ nhạy cảm, đáp ứng</td></tr>
                <tr><td>Anxious (20%)</td><td>Cần xác nhận liên tục, ghen tuông</td><td>Bố mẹ không nhất quán</td></tr>
                <tr><td>Avoidant (23%)</td><td>Giữ khoảng cách, độc lập quá mức</td><td>Bố mẹ lạnh lùng, từ chối</td></tr>
                <tr><td>Disorganized (1%)</td><td>Mâu thuẫn, sợ hãi khi gần gũi</td><td>Bố mẹ bạo lực, chấn thương</td></tr>
            </table>
            <h4>Kết hợp trong tình yêu</h4>
            <ul>
                <li><strong>Secure + Secure:</strong> Lý tưởng nhất</li>
                <li><strong>Anxious + Avoidant:</strong> Phổ biến nhưng đau khổ (vòng lặp đuổi-trốn)</li>
                <li><strong>Secure + bất kỳ:</strong> Giúp đối phương an toàn hơn</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 Thay đổi kiểu gắn bó</h3>
            <h4>Earned Secure Attachment</h4>
            <p>Tin tốt: Kiểu gắn bó có thể thay đổi thông qua:</p>
            <ul>
                <li><strong>Trị liệu:</strong> Nhận biết pattern, xử lý chấn thương</li>
                <li><strong>Mối quan hệ an toàn:</strong> Bạn đời secure giúp "chữa lành"</li>
                <li><strong>Tự nhận thức:</strong> Hiểu trigger của mình</li>
            </ul>
            <h4>Protest Behaviors (Anxious)</h4>
            <div class="warning-box">
                <strong>⚠️ Nhận biết:</strong> Gọi liên tục, "test" tình cảm, đe dọa chia tay, ghen tuông vô cớ, stalking mạng xã hội. Đây là phản ứng tự động, không phải cố tình.
            </div>
            <h4>Deactivating Strategies (Avoidant)</h4>
            <p>Tập trung vào khuyết điểm đối phương, nhớ về tình cũ, tránh cam kết, "cần không gian" liên tục.</p>
        `
    },
    'temperament': {
        icon: '🌡️',
        title: '4 Nhóm Khí Chất',
        category: 'personality',
        level: 'beginner',
        connections: ['mbti', 'big-five', 'emotions'],
        simple: `
            <h3>🌡️ 4 nhóm khí chất</h3>
            <p><strong>Khí chất</strong> là đặc điểm tính cách bẩm sinh, đã được biết từ thời Hippocrates.</p>
            <div class="example-box">
                <strong>4 nhóm:</strong><br>
                🩸 Sanguine (Linh hoạt) - Vui vẻ, xã hội, lạc quan<br>
                🔥 Choleric (Nóng nảy) - Mạnh mẽ, lãnh đạo, quyết đoán<br>
                💧 Melancholic (Ưu tư) - Chi tiết, cẩn thận, sâu sắc<br>
                🌊 Phlegmatic (Điềm tĩnh) - Bình tĩnh, kiên nhẫn, hòa nhã
            </div>
        `,
        detail: `
            <h3>📊 Chi tiết 4 nhóm khí chất</h3>
            <table>
                <tr><th>Khí chất</th><th>Ưu điểm</th><th>Nhược điểm</th></tr>
                <tr><td>Sanguine</td><td>Năng lượng cao, kết nối nhanh, sáng tạo</td><td>Hời hợt, khó tập trung, hay quên</td></tr>
                <tr><td>Choleric</td><td>Lãnh đạo giỏi, hiệu quả, quyết đoán</td><td>Nóng tính, kiểm soát, thiếu kiên nhẫn</td></tr>
                <tr><td>Melancholic</td><td>Tỉ mỉ, trung thành, sâu sắc</td><td>Bi quan, cầu toàn, khó thích nghi</td></tr>
                <tr><td>Phlegmatic</td><td>Ổn định, đáng tin, hòa bình</td><td>Thụ động, lười biếng, tránh xung đột</td></tr>
            </table>
            <h4>Kết hợp trong nhóm</h4>
            <ul>
                <li><strong>Choleric + Phlegmatic:</strong> Lãnh đạo và hỗ trợ tốt</li>
                <li><strong>Sanguine + Melancholic:</strong> Bù trừ nhau nhưng dễ xung đột</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 Khí chất và khoa học hiện đại</h3>
            <h4>Cơ sở sinh học</h4>
            <ul>
                <li><strong>Sanguine:</strong> Dopamine cao → tìm kiếm phần thưởng</li>
                <li><strong>Choleric:</strong> Testosterone/Norepinephrine → hành động nhanh</li>
                <li><strong>Melancholic:</strong> Serotonin thấp → nhạy cảm, cẩn trọng</li>
                <li><strong>Phlegmatic:</strong> Serotonin + Oxytocin → bình tĩnh, gắn kết</li>
            </ul>
            <h4>Liên hệ với Big Five</h4>
            <table>
                <tr><th>Khí chất</th><th>Big Five tương ứng</th></tr>
                <tr><td>Sanguine</td><td>Extraversion cao, Neuroticism thấp</td></tr>
                <tr><td>Choleric</td><td>Extraversion cao, Agreeableness thấp</td></tr>
                <tr><td>Melancholic</td><td>Neuroticism cao, Conscientiousness cao</td></tr>
                <tr><td>Phlegmatic</td><td>Agreeableness cao, Extraversion thấp</td></tr>
            </table>
        `
    }
};
