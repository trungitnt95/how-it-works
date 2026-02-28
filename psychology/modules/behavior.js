// Behavior Psychology - Actions and patterns
const behaviorData = {
    'body-language': {
        icon: '👀',
        title: 'Ngôn Ngữ Cơ Thể',
        category: 'behavior',
        level: 'beginner',
        connections: ['micro-expressions', 'active-listening', 'manipulation-detect'],
        simple: `
            <h3>👀 Ngôn ngữ cơ thể</h3>
            <p><strong>Ngôn ngữ cơ thể</strong> chiếm tới <em>55% giao tiếp</em> (Albert Mehrabian). Cơ thể "nói" nhiều hơn lời nói.</p>
            <div class="example-box">
                <strong>Tín hiệu cơ bản:</strong><br>
                • 👁️ Nhìn thẳng = Tự tin, quan tâm<br>
                • 🤷 Khoanh tay = Phòng thủ, không thoải mái<br>
                • 😊 Nghiêng đầu = Lắng nghe, quan tâm<br>
                • 🚶 Tư thế mở = Sẵn sàng, thân thiện
            </div>
        `,
        detail: `
            <h3>📊 Đọc ngôn ngữ cơ thể</h3>
            <h4>Ánh mắt</h4>
            <table>
                <tr><th>Tín hiệu</th><th>Ý nghĩa</th></tr>
                <tr><td>Nhìn thẳng 60-70% thời gian</td><td>Quan tâm, chú ý</td></tr>
                <tr><td>Nhìn xuống</td><td>Xấu hổ, phục tùng</td></tr>
                <tr><td>Nhìn sang bên</td><td>Đang suy nghĩ hoặc không thoải mái</td></tr>
                <tr><td>Đồng tử giãn</td><td>Hứng thú, bị thu hút</td></tr>
            </table>
            <h4>Tư thế & Cử chỉ</h4>
            <ul>
                <li><strong>Mirror (Phản chiếu):</strong> Bắt chước tư thế = đồng cảm, thích</li>
                <li><strong>Hướng bàn chân:</strong> Chân hướng về ai = quan tâm người đó</li>
                <li><strong>Chạm mặt:</strong> Lo lắng, không thoải mái hoặc đang nghĩ</li>
                <li><strong>Bàn tay mở:</strong> Trung thực, cởi mở</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 Body Language nâng cao</h3>
            <h4>Baseline Reading</h4>
            <p>Luôn quan sát hành vi bình thường của người đó trước. Sự thay đổi từ baseline mới là tín hiệu quan trọng.</p>
            <h4>Cluster Reading</h4>
            <div class="warning-box">
                <strong>⚠️ Quy tắc quan trọng:</strong> Không bao giờ kết luận từ MỘT tín hiệu. Phải đọc theo cụm (cluster) ít nhất 3 tín hiệu cùng lúc. Ví dụ: khoanh tay + tránh mắt + nghiêng người ra xa = có thể không thoải mái.
            </div>
            <h4>Power Posing (Amy Cuddy)</h4>
            <ul>
                <li><strong>Tư thế quyền lực:</strong> Mở rộng cơ thể → tăng testosterone, giảm cortisol</li>
                <li><strong>Tư thế yếu:</strong> Co mình → ngược lại</li>
            </ul>
            <div class="tip-box">
                <strong>💡 Ứng dụng:</strong> Trước buổi phỏng vấn, đứng tư thế "Wonder Woman" 2 phút để tăng tự tin.
            </div>
        `
    },
    'micro-expressions': {
        icon: '🔍',
        title: 'Vi Biểu Cảm',
        category: 'behavior',
        level: 'intermediate',
        connections: ['body-language', 'emotions', 'manipulation-detect'],
        simple: `
            <h3>🔍 Vi biểu cảm là gì?</h3>
            <p><strong>Vi biểu cảm</strong> là biểu cảm khuôn mặt xuất hiện trong <em>1/25 giây</em>, không thể kiểm soát ý thức.</p>
            <div class="example-box">
                <strong>7 vi biểu cảm (Paul Ekman):</strong><br>
                😊 Vui • 😢 Buồn • 😠 Giận • 😨 Sợ<br>
                😮 Ngạc nhiên • 🤢 Ghê tởm • 😤 Khinh thường
            </div>
            <p>Vi biểu cảm tiết lộ cảm xúc thật ngay cả khi người đó đang cố giấu.</p>
        `,
        detail: `
            <h3>📊 Nhận diện 7 vi biểu cảm</h3>
            <table>
                <tr><th>Cảm xúc</th><th>Dấu hiệu khuôn mặt</th></tr>
                <tr><td>Vui</td><td>Khóe miệng nâng, nhăn đuôi mắt (Duchenne smile)</td></tr>
                <tr><td>Buồn</td><td>Khóe miệng kéo xuống, lông mày nhíu giữa</td></tr>
                <tr><td>Giận</td><td>Lông mày hạ, môi mím, mắt nheo</td></tr>
                <tr><td>Sợ</td><td>Lông mày nâng kéo lại, mắt mở to, miệng hé</td></tr>
                <tr><td>Ngạc nhiên</td><td>Lông mày nâng, mắt mở to, miệng há</td></tr>
                <tr><td>Ghê tởm</td><td>Nhăn mũi, môi trên nâng</td></tr>
                <tr><td>Khinh thường</td><td>Một bên miệng nâng (bất đối xứng)</td></tr>
            </table>
            <h4>Duchenne Smile vs Fake Smile</h4>
            <ul>
                <li><strong>Cười thật:</strong> Cơ quanh mắt co lại (orbicularis oculi) → nhăn đuôi mắt</li>
                <li><strong>Cười giả:</strong> Chỉ có cơ miệng hoạt động, mắt không thay đổi</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 Phát hiện nói dối qua vi biểu cảm</h3>
            <h4>Dấu hiệu có thể nói dối</h4>
            <ul>
                <li><strong>Biểu cảm không đồng bộ:</strong> Nói vui nhưng thoáng buồn/sợ</li>
                <li><strong>Thời gian sai:</strong> Biểu cảm xuất hiện sau lời nói (thường phải cùng lúc)</li>
                <li><strong>Bất đối xứng:</strong> Cảm xúc thật thường đối xứng 2 bên mặt</li>
            </ul>
            <div class="warning-box">
                <strong>⚠️ Cảnh báo:</strong> Độ chính xác phát hiện nói dối qua vi biểu cảm chỉ khoảng 54% (gần như đoán mò). Không nên dùng làm bằng chứng duy nhất. Paul Ekman cũng thừa nhận cần kết hợp nhiều phương pháp.
            </div>
            <h4>FACS (Facial Action Coding System)</h4>
            <p>Hệ thống mã hóa 44 Action Units (đơn vị hành động) trên khuôn mặt. Được sử dụng trong FBI, CIA và nghiên cứu tâm lý.</p>
        `
    },
    'habits': {
        icon: '🔄',
        title: 'Thói Quen & Hành Vi',
        category: 'behavior',
        level: 'intermediate',
        connections: ['motivation', 'stress-management', 'cognitive-therapy'],
        simple: `
            <h3>🔄 Thói quen hoạt động như thế nào?</h3>
            <p><strong>Thói quen</strong> là hành vi lặp lại tự động, chiếm <em>40-45%</em> hành vi hàng ngày.</p>
            <div class="example-box">
                <strong>Vòng lặp thói quen (Charles Duhigg):</strong><br>
                🔔 Gợi ý (Cue) → 🔄 Thói quen (Routine) → 🎁 Phần thưởng (Reward)
            </div>
            <h4>Ví dụ:</h4>
            <ul>
                <li>🔔 Stress → 🔄 Lướt điện thoại → 🎁 Giảm căng thẳng tạm thời</li>
                <li>🔔 Sáng dậy → 🔄 Uống cà phê → 🎁 Tỉnh táo, năng lượng</li>
            </ul>
        `,
        detail: `
            <h3>📊 Tạo và bỏ thói quen</h3>
            <h4>Tạo thói quen mới (Atomic Habits - James Clear)</h4>
            <table>
                <tr><th>Bước</th><th>Chiến lược</th><th>Ví dụ</th></tr>
                <tr><td>Rõ ràng</td><td>Xác định thời gian + địa điểm</td><td>"7h sáng, tại phòng khách, tập 10 phút"</td></tr>
                <tr><td>Hấp dẫn</td><td>Gắn với thứ bạn thích</td><td>Nghe podcast yêu thích khi tập</td></tr>
                <tr><td>Dễ dàng</td><td>Bắt đầu nhỏ, giảm ma sát</td><td>Bắt đầu với 2 phút thay vì 1 giờ</td></tr>
                <tr><td>Thỏa mãn</td><td>Thưởng ngay lập tức</td><td>Đánh dấu X vào lịch mỗi ngày</td></tr>
            </table>
            <h4>Bỏ thói quen xấu</h4>
            <ul>
                <li><strong>Vô hình:</strong> Loại bỏ gợi ý (cất điện thoại xa tầm tay)</li>
                <li><strong>Không hấp dẫn:</strong> Liên kết với hậu quả xấu</li>
                <li><strong>Khó làm:</strong> Tăng ma sát (xóa app mạng xã hội)</li>
                <li><strong>Không thỏa mãn:</strong> Tìm accountability partner</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 Khoa học thần kinh về thói quen</h3>
            <h4>Basal Ganglia</h4>
            <p>Thói quen được lưu trữ trong hạch nền (basal ganglia), khác với ký ức thông thường (hippocampus). Đó là lý do người mất trí nhớ vẫn giữ thói quen cũ.</p>
            <h4>Quy tắc 21/66/254 ngày</h4>
            <ul>
                <li><strong>21 ngày:</strong> Myth phổ biến, thực tế không chính xác</li>
                <li><strong>66 ngày:</strong> Trung bình để hình thành thói quen (nghiên cứu UCL)</li>
                <li><strong>18-254 ngày:</strong> Khoảng dao động thực tế tùy độ phức tạp</li>
            </ul>
            <div class="tip-box">
                <strong>💡 Habit Stacking:</strong> Gắn thói quen mới vào thói quen đã có. "Sau khi [thói quen cũ], tôi sẽ [thói quen mới]". Ví dụ: "Sau khi rót cà phê, tôi sẽ viết nhật ký 5 phút."
            </div>
            <h4>Identity-Based Habits</h4>
            <p>Thay vì "Tôi muốn chạy bộ", hãy nghĩ "Tôi là người chạy bộ". Thay đổi danh tính → thay đổi hành vi bền vững hơn.</p>
        `
    },
    'decision-psychology': {
        icon: '🎯',
        title: 'Tâm Lý Ra Quyết Định',
        category: 'behavior',
        level: 'advanced',
        connections: ['social-influence', 'cognitive-therapy', 'habits'],
        simple: `
            <h3>🎯 Tâm lý ra quyết định</h3>
            <p>Con người <strong>không hợp lý</strong> như ta nghĩ. Chúng ta dùng "đường tắt" (heuristics) và mắc nhiều <em>thiên kiến</em> (bias).</p>
            <div class="example-box">
                <strong>System 1 vs System 2 (Daniel Kahneman):</strong><br>
                ⚡ System 1: Nhanh, tự động, trực giác<br>
                🧠 System 2: Chậm, cân nhắc, logic
            </div>
        `,
        detail: `
            <h3>📊 Các thiên kiến phổ biến</h3>
            <table>
                <tr><th>Thiên kiến</th><th>Mô tả</th><th>Ví dụ</th></tr>
                <tr><td>Anchoring</td><td>Bị ảnh hưởng bởi số đầu tiên</td><td>Giá gốc 500k → sale 200k cảm thấy rẻ</td></tr>
                <tr><td>Confirmation</td><td>Tìm bằng chứng ủng hộ niềm tin</td><td>Chỉ đọc tin phù hợp quan điểm mình</td></tr>
                <tr><td>Availability</td><td>Đánh giá dựa trên dễ nhớ</td><td>Sợ máy bay hơn ô tô (vì tin tức)</td></tr>
                <tr><td>Sunk Cost</td><td>Tiếp tục vì đã đầu tư</td><td>Xem phim dở hết vì đã mua vé</td></tr>
                <tr><td>Dunning-Kruger</td><td>Càng ít biết càng tự tin</td><td>Mới học 1 tuần nghĩ mình giỏi</td></tr>
            </table>
            <h4>Heuristics (Đường tắt tư duy)</h4>
            <ul>
                <li><strong>Representativeness:</strong> Đánh giá theo khuôn mẫu</li>
                <li><strong>Availability:</strong> Đánh giá theo dễ nhớ</li>
                <li><strong>Affect:</strong> Quyết định dựa trên cảm xúc</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 Thinking, Fast and Slow</h3>
            <h4>System 1 - Tư duy nhanh</h4>
            <ul>
                <li>Hoạt động tự động, không tốn sức</li>
                <li>Dựa trên pattern recognition và trải nghiệm</li>
                <li>Hiệu quả 95% thời gian, nhưng dễ mắc bias</li>
            </ul>
            <h4>System 2 - Tư duy chậm</h4>
            <ul>
                <li>Cần nỗ lực ý thức, tốn năng lượng</li>
                <li>Logic, phân tích, tính toán</li>
                <li>Chính xác hơn nhưng chậm và "lười"</li>
            </ul>
            <h4>Prospect Theory (Kahneman & Tversky)</h4>
            <div class="formula-box">
                Mất 100đ đau gấp 2 lần vui khi được 100đ
            </div>
            <p><strong>Loss Aversion:</strong> Con người sợ mất hơn thích được. Đây là nền tảng của kinh tế học hành vi.</p>
            <div class="tip-box">
                <strong>💡 Ứng dụng:</strong> Khi cần ra quyết định quan trọng, hãy "kích hoạt" System 2: viết ra giấy, phân tích ưu nhược, cho mình thời gian suy nghĩ.
            </div>
        `
    },
    'social-influence': {
        icon: '👥',
        title: 'Ảnh Hưởng Xã Hội',
        category: 'behavior',
        level: 'advanced',
        connections: ['decision-psychology', 'persuasion', 'crowd-psychology'],
        simple: `
            <h3>👥 Ảnh hưởng xã hội</h3>
            <p>Con người <strong>bị ảnh hưởng mạnh</strong> bởi người khác, thường không nhận ra.</p>
            <div class="example-box">
                <strong>3 loại ảnh hưởng chính:</strong><br>
                🐑 Conformity - Tuân theo đám đông<br>
                👮 Obedience - Vâng lời quyền lực<br>
                🤝 Compliance - Đồng ý theo yêu cầu
            </div>
        `,
        detail: `
            <h3>📊 Các thí nghiệm kinh điển</h3>
            <h4>Thí nghiệm Asch (Conformity)</h4>
            <p>75% người tham gia đồng ý với câu trả lời SAI của nhóm ít nhất 1 lần, dù đáp án rõ ràng.</p>
            <h4>Thí nghiệm Milgram (Obedience)</h4>
            <p>65% người tham gia sẵn sàng gây sốc điện 450V cho người lạ khi được "chuyên gia" yêu cầu.</p>
            <h4>Bystander Effect</h4>
            <table>
                <tr><th>Tình huống</th><th>Xác suất giúp</th></tr>
                <tr><td>Bạn là người duy nhất</td><td>85%</td></tr>
                <tr><td>Có 2 người khác</td><td>62%</td></tr>
                <tr><td>Có 4 người khác</td><td>31%</td></tr>
            </table>
            <div class="warning-box">
                <strong>⚠️ Bài học:</strong> Khi cần giúp đỡ, hãy chỉ đích danh: "Anh áo xanh, gọi 115 giúp!" thay vì "Ai đó gọi 115!"
            </div>
        `,
        advanced: `
            <h3>🎓 Cơ chế ảnh hưởng xã hội</h3>
            <h4>Tại sao ta tuân theo?</h4>
            <ul>
                <li><strong>Informational influence:</strong> Tin rằng nhóm biết đúng hơn (tình huống mơ hồ)</li>
                <li><strong>Normative influence:</strong> Muốn được chấp nhận, sợ bị tẩy chay</li>
            </ul>
            <h4>Stanford Prison Experiment</h4>
            <p>Zimbardo (1971): Sinh viên bình thường đóng vai tù nhân/cai ngục → cai ngục trở nên tàn bạo chỉ sau 6 ngày. Cho thấy sức mạnh của vai trò xã hội.</p>
            <h4>Social Proof trong thời đại số</h4>
            <ul>
                <li><strong>Reviews/Ratings:</strong> 90% đọc review trước khi mua</li>
                <li><strong>FOMO:</strong> Fear of Missing Out do mạng xã hội</li>
                <li><strong>Echo Chambers:</strong> Thuật toán tạo "buồng vọng" ý kiến</li>
            </ul>
            <div class="tip-box">
                <strong>💡 Phòng vệ:</strong> Tự hỏi "Nếu không ai nghĩ vậy, tôi có vẫn tin điều này không?" trước khi đưa ra quyết định.
            </div>
        `
    }
};
