// ==================== APPLICATIONS MODULE ====================
// Ứng dụng tư duy ngược trong thực tế

const applicationsData = {
    'inversion-business': {
        icon: '🏢',
        title: 'Tư Duy Ngược Trong Kinh Doanh',
        subtitle: 'Phòng tránh thất bại doanh nghiệp',
        order: 11,
        category: 'applications',
        level: 'intermediate',
        connections: ['charlie-munger', 'pre-mortem', 'risk-inversion'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> Thay vì hỏi "Làm sao để doanh nghiệp thành công?", hãy hỏi "Làm sao để doanh nghiệp CHẮC CHẮN phá sản?"</p>
            <div class="example-box">
                <strong>Cách phá sản nhanh nhất:</strong><br>
                ❌ Không lắng nghe khách hàng<br>
                ❌ Chi tiêu nhiều hơn thu nhập<br>
                ❌ Tuyển người sai<br>
                ❌ Không theo dõi đối thủ<br>
                ❌ Ignore cash flow<br>
                → Tránh TẤT CẢ điều trên = tăng cơ hội thành công!
            </div>
        `,
        detail: `
            <h4>📝 Top 10 nguyên nhân startup thất bại (CB Insights):</h4>
            <ol>
                <li>Không có nhu cầu thị trường (42%)</li>
                <li>Hết tiền (29%)</li>
                <li>Đội ngũ sai (23%)</li>
                <li>Bị đối thủ vượt mặt (19%)</li>
                <li>Giá sai (18%)</li>
                <li>Sản phẩm tệ (17%)</li>
                <li>Không có business model (17%)</li>
                <li>Marketing kém (14%)</li>
                <li>Ignore khách hàng (14%)</li>
                <li>Timing sai (13%)</li>
            </ol>
            <div class="tip-box">
                💡 Đảo ngược mỗi điều trên = có checklist thành công!
            </div>
        `,
        advanced: `
            <h4>🧠 Amazon's "Working Backwards":</h4>
            <p>Jeff Bezos yêu cầu team viết Press Release cho sản phẩm thất bại trước khi bắt đầu. Nếu không thể viết PR hấp dẫn = không nên làm.</p>
            
            <h4>Ứng dụng cho mỗi phòng ban:</h4>
            <table>
                <tr><th>Phòng ban</th><th>Câu hỏi ngược</th></tr>
                <tr><td>Sales</td><td>Làm sao để MẤT khách hàng nhanh nhất?</td></tr>
                <tr><td>Product</td><td>Làm sao để USER ghét sản phẩm?</td></tr>
                <tr><td>HR</td><td>Làm sao để nhân viên nghỉ hàng loạt?</td></tr>
                <tr><td>Finance</td><td>Làm sao để công ty hết tiền nhanh nhất?</td></tr>
            </table>
        `
    },

    'inversion-career': {
        icon: '💼',
        title: 'Tư Duy Ngược Trong Sự Nghiệp',
        subtitle: 'Tránh sai lầm nghề nghiệp',
        order: 12,
        category: 'applications',
        level: 'beginner',
        connections: ['anti-goals', 'fear-setting', 'avoid-failure'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> Thay vì "Làm sao để thăng tiến?", hãy hỏi "Làm sao để CHẮC CHẮN bị đuổi việc?"</p>
            <div class="example-box">
                <strong>Cách bị đuổi việc nhanh nhất:</strong><br>
                ❌ Đi muộn thường xuyên<br>
                ❌ Không bao giờ học skill mới<br>
                ❌ Nói xấu đồng nghiệp<br>
                ❌ Không hoàn thành deadline<br>
                ❌ Không chịu nhận feedback<br>
                → Tránh tất cả = bạn đã tốt hơn 80% người khác!
            </div>
        `,
        detail: `
            <h4>📝 Anti-Resume - Liệt kê thất bại:</h4>
            <p>Viết ra những thất bại lớn nhất trong sự nghiệp, phân tích nguyên nhân:</p>
            <div class="example-box">
                <strong>Thất bại 1:</strong> Bị từ chối thăng chức<br>
                → Nguyên nhân: Không networking, chỉ focus kỹ thuật<br>
                → Bài học ngược: Visibility quan trọng không kém competence<br><br>
                <strong>Thất bại 2:</strong> Dự án failed<br>
                → Nguyên nhân: Không communicate risk sớm<br>
                → Bài học ngược: Bad news must travel fast
            </div>
        `,
        advanced: `
            <h4>🧠 Career Inversion Framework:</h4>
            <ol>
                <li><strong>Định nghĩa "sự nghiệp tồi tệ" cho bạn:</strong> Viết chi tiết</li>
                <li><strong>Xác định pattern:</strong> Những thói quen nào dẫn đến đó?</li>
                <li><strong>Tạo guardrails:</strong> Quy tắc cứng để tránh</li>
                <li><strong>Review hàng quý:</strong> Mình có đang đi về hướng xấu không?</li>
            </ol>
            
            <h4>Sai lầm career không thể đảo ngược:</h4>
            <ul>
                <li>Burn bridges với boss/đồng nghiệp</li>
                <li>Fraud/dishonesty (mất uy tín vĩnh viễn)</li>
                <li>Không upskill trong 5+ năm</li>
                <li>All-in vào 1 ngành đang chết</li>
            </ul>
        `
    },

    'inversion-investing': {
        icon: '📈',
        title: 'Tư Duy Ngược Trong Đầu Tư',
        subtitle: 'Tránh mất tiền trước, kiếm tiền sau',
        order: 13,
        category: 'applications',
        level: 'intermediate',
        connections: ['charlie-munger', 'avoid-failure', 'worst-case'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> Warren Buffett có 2 quy tắc đầu tư: Quy tắc 1 - Đừng mất tiền. Quy tắc 2 - Đừng quên quy tắc 1.</p>
            <div class="example-box">
                <strong>Tư duy ngược khi đầu tư:</strong><br>
                ❌ Thay vì: "Cổ phiếu này sẽ lên bao nhiêu?"<br>
                ✅ Hỏi: "Cổ phiếu này có thể mất bao nhiêu? Tôi chịu được không?"
            </div>
        `,
        detail: `
            <h4>📝 Checklist đảo ngược cho đầu tư:</h4>
            <p><strong>Hỏi trước khi mua:</strong></p>
            <ul>
                <li>Điều gì có thể khiến công ty này phá sản?</li>
                <li>Ai đang BÁN cổ phiếu này và tại sao?</li>
                <li>Nếu tôi sai, tôi mất tối đa bao nhiêu?</li>
                <li>Tôi có đang bị FOMO không?</li>
                <li>Nếu cổ phiếu giảm 50%, tôi có mua thêm không?</li>
            </ul>
            
            <div class="warning-box">
                ⚠️ Quy tắc đảo ngược: Nếu bạn không sẵn sàng giữ cổ phiếu 10 năm, đừng mua dù chỉ 10 phút. — Warren Buffett
            </div>
        `,
        advanced: `
            <h4>🧠 Margin of Safety - Biên an toàn:</h4>
            <p>Benjamin Graham (thầy của Buffett) dạy: Luôn mua với giá THẤP HƠN giá trị thực. Khoảng cách đó gọi là Margin of Safety.</p>
            
            <h4>Inversion Checklist của Munger cho đầu tư:</h4>
            <ol>
                <li>Liệt kê 5 cách mất tiền với khoản đầu tư này</li>
                <li>Xác suất mỗi cách xảy ra?</li>
                <li>Nếu 2/5 xảy ra cùng lúc, portfolio ảnh hưởng thế nào?</li>
                <li>Tôi có "skin in the game" quá nhiều không?</li>
                <li>Đây có phải "cổ phiếu tuyệt vời" hay chỉ "cổ phiếu rẻ"?</li>
            </ol>
        `
    },

    'inversion-relationships': {
        icon: '💑',
        title: 'Tư Duy Ngược Trong Mối Quan Hệ',
        subtitle: 'Tránh phá hỏng các mối quan hệ',
        order: 14,
        category: 'applications',
        level: 'beginner',
        connections: ['what-is-inversion', 'anti-goals', 'inversion-career'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> Thay vì "Làm sao có mối quan hệ tốt?", hãy hỏi "Làm sao để PHÁ HỦY mọi mối quan hệ?"</p>
            <div class="example-box">
                <strong>Cách phá hủy mối quan hệ:</strong><br>
                ❌ Nói dối thường xuyên<br>
                ❌ Chỉ nói về bản thân<br>
                ❌ Không giữ lời hứa<br>
                ❌ Không lắng nghe<br>
                ❌ Chỉ liên lạc khi cần nhờ<br>
                → Tránh tất cả = mối quan hệ bền vững!
            </div>
        `,
        detail: `
            <h4>📝 John Gottman's "4 Horsemen" (4 kỵ sĩ hủy diệt):</h4>
            <p>Nhà nghiên cứu hôn nhân John Gottman có thể dự đoán ly hôn với 90% chính xác bằng cách tìm 4 hành vi:</p>
            <ol>
                <li><strong>Criticism (Chỉ trích):</strong> Tấn công nhân cách, không phải hành vi</li>
                <li><strong>Contempt (Khinh thường):</strong> Mỉa mai, giễu nhạo, coi thường</li>
                <li><strong>Defensiveness (Phòng thủ):</strong> Đổ lỗi, không nhận trách nhiệm</li>
                <li><strong>Stonewalling (Phớt lờ):</strong> Rút lui, cold shoulder</li>
            </ol>
            <div class="tip-box">
                💡 Tránh 4 điều này quan trọng hơn bất kỳ "mẹo tán tỉnh" nào!
            </div>
        `,
        advanced: `
            <h4>🧠 Negativity Bias trong mối quan hệ:</h4>
            <p>Nghiên cứu cho thấy cần tỉ lệ 5:1 (5 tương tác tích cực cho mỗi 1 tiêu cực) để duy trì mối quan hệ khỏe mạnh.</p>
            
            <h4>Inversion cho networking:</h4>
            <ul>
                <li><strong>Thay vì:</strong> "Làm sao để có network tốt?"</li>
                <li><strong>Hỏi:</strong> "Làm sao để không ai muốn giúp mình?"</li>
                <li>→ Chỉ nhận không cho, không nhớ tên người khác, không follow up, chỉ nói chuyện khi cần</li>
                <li>→ Tránh hết = network tự nhiên phát triển</li>
            </ul>
        `
    },

    'inversion-health': {
        icon: '🏃',
        title: 'Tư Duy Ngược Trong Sức Khỏe',
        subtitle: 'Tránh bệnh tật thay vì tìm thuốc bổ',
        order: 15,
        category: 'applications',
        level: 'beginner',
        connections: ['subtract-not-add', 'avoid-failure', 'anti-goals'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> Thay vì "Làm sao để khỏe mạnh?", hãy hỏi "Làm sao để BỊ BỆNH chắc chắn?"</p>
            <div class="example-box">
                <strong>Cách bị bệnh nhanh nhất:</strong><br>
                ❌ Không ngủ đủ giấc<br>
                ❌ Ăn toàn junk food<br>
                ❌ Không bao giờ vận động<br>
                ❌ Stress liên tục, không nghỉ ngơi<br>
                ❌ Uống rượu bia thường xuyên<br>
                → Tránh 5 điều này = đã khỏe hơn 80% dân số!
            </div>
        `,
        detail: `
            <h4>📝 Peter Attia về Longevity Inversion:</h4>
            <p>Bác sĩ Peter Attia (chuyên gia tuổi thọ) dùng tư duy ngược: Xác định 4 "kẻ giết người" (diseases of aging) và tránh chúng:</p>
            <ol>
                <li><strong>Tim mạch:</strong> Tránh bằng tập thể dục, kiểm soát lipid</li>
                <li><strong>Ung thư:</strong> Tránh bằng tầm soát sớm, không hút thuốc</li>
                <li><strong>Alzheimer's:</strong> Tránh bằng ngủ đủ, tập não, kiểm soát đường huyết</li>
                <li><strong>Tiểu đường:</strong> Tránh bằng tập thể dục, ăn uống hợp lý</li>
            </ol>
            <div class="tip-box">
                💡 "Đừng tìm thuốc trường sinh. Hãy tránh những thứ GIẾT BẠN SỚM." — Peter Attia
            </div>
        `,
        advanced: `
            <h4>🧠 Via Negativa trong y học:</h4>
            <p>Nassim Taleb lập luận rằng y học hiện đại quá focus vào "thêm thuốc" thay vì "bỏ bớt thứ hại":</p>
            <ul>
                <li>Bỏ thuốc lá hiệu quả hơn uống vitamin</li>
                <li>Bỏ đường tinh luyện hiệu quả hơn ăn superfood</li>
                <li>Bỏ ngồi nhiều hiệu quả hơn tập gym 1 tiếng rồi ngồi 8 tiếng</li>
            </ul>
            
            <h4>80/20 Health:</h4>
            <p>20% thói quen xấu gây ra 80% bệnh tật. Bỏ 20% đó hiệu quả hơn thêm hàng chục thói quen tốt.</p>
        `
    }
};
