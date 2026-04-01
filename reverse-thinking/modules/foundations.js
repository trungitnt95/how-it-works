// ==================== FOUNDATIONS MODULE ====================
// Nền tảng tư duy ngược

const foundationsData = {
    'what-is-inversion': {
        icon: '🔄',
        title: 'Inversion Thinking là gì?',
        subtitle: 'Tư duy ngược - nghĩ từ kết quả xấu',
        order: 1,
        category: 'foundations',
        level: 'beginner',
        connections: ['avoid-failure', 'charlie-munger', 'pre-mortem'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> Thay vì hỏi "Làm sao để thành công?", hãy hỏi "Làm sao để CHẮC CHẮN thất bại?" rồi tránh những điều đó.</p>
            <div class="example-box">
                <strong>Ví dụ nhanh:</strong><br>
                ❌ Câu hỏi thường: "Làm sao để có mối quan hệ tốt?"<br>
                ✅ Câu hỏi ngược: "Làm sao để phá hủy mọi mối quan hệ?" → Nói dối, ích kỷ, không lắng nghe → Tránh những điều này!
            </div>
            <div class="tip-box">
                💡 "Nói cho tôi biết tôi sẽ chết ở đâu, để tôi không bao giờ đến đó." — Charlie Munger
            </div>
        `,
        detail: `
            <h4>📝 Tư duy ngược hoạt động như thế nào?</h4>
            <ol>
                <li><strong>Xác định mục tiêu:</strong> Bạn muốn đạt được gì?</li>
                <li><strong>Đảo ngược:</strong> Hỏi "Làm gì để CHẮC CHẮN thất bại?"</li>
                <li><strong>Liệt kê:</strong> Viết ra tất cả cách để thất bại</li>
                <li><strong>Tránh:</strong> Đảm bảo bạn KHÔNG làm những điều đó</li>
            </ol>
            
            <h4>📊 So sánh 2 cách tư duy:</h4>
            <table>
                <tr><th>Tư duy thuận</th><th>Tư duy ngược</th></tr>
                <tr><td>Làm sao để giàu?</td><td>Làm sao để nghèo mãi?</td></tr>
                <tr><td>Làm sao để khỏe mạnh?</td><td>Làm sao để bệnh tật?</td></tr>
                <tr><td>Làm sao để hạnh phúc?</td><td>Làm sao để khổ sở?</td></tr>
                <tr><td>Làm sao để dự án thành công?</td><td>Làm sao để dự án thất bại?</td></tr>
            </table>
            
            <div class="tip-box">
                💡 Tư duy ngược không thay thế tư duy thuận, mà BỔ SUNG cho nó. Dùng cả hai sẽ cho kết quả tốt nhất.
            </div>
        `,
        advanced: `
            <h4>🧠 Tại sao tư duy ngược hiệu quả?</h4>
            <ul>
                <li><strong>Bias correction:</strong> Não bộ dễ thấy rủi ro hơn cơ hội (loss aversion) → Tận dụng điều này</li>
                <li><strong>Giảm overconfidence:</strong> Buộc phải nghĩ đến kịch bản xấu</li>
                <li><strong>Via Negativa:</strong> Triết lý cổ đại - thành công bằng cách loại bỏ cái xấu, không chỉ thêm cái tốt</li>
                <li><strong>80/20:</strong> Tránh 20% sai lầm lớn nhất tạo ra 80% kết quả xấu</li>
            </ul>
            
            <h4>📚 Nguồn gốc lịch sử:</h4>
            <ul>
                <li><strong>Carl Jacobi (1804-1851):</strong> Nhà toán học Đức, nổi tiếng với câu "Man muss immer umkehren" (Hãy luôn đảo ngược)</li>
                <li><strong>Stoicism:</strong> Premeditatio malorum - tập suy ngẫm về điều xấu trước</li>
                <li><strong>Charlie Munger:</strong> Phổ biến hóa tư duy ngược trong kinh doanh và đầu tư</li>
            </ul>
        `
    },

    'avoid-failure': {
        icon: '🛡️',
        title: 'Tránh Thất Bại > Tìm Thành Công',
        subtitle: 'Via Negativa - Loại bỏ cái xấu',
        order: 2,
        category: 'foundations',
        level: 'beginner',
        connections: ['what-is-inversion', 'charlie-munger', 'subtract-not-add'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> Bạn không cần phải thiên tài mới thành công. Chỉ cần tránh làm những điều ngu ngốc là đủ tốt rồi!</p>
            <div class="example-box">
                <strong>Ví dụ đơn giản:</strong><br>
                🏥 Bác sĩ giỏi không phải là người chữa được bệnh nan y, mà là người KHÔNG gây thêm bệnh cho bệnh nhân (do no harm).<br><br>
                💰 Nhà đầu tư giỏi không phải lúc nào cũng chọn đúng cổ phiếu, mà là người TRÁNH được những lỗi lớn.
            </div>
        `,
        detail: `
            <h4>📝 Via Negativa - Triết lý loại bỏ:</h4>
            <p>Nassim Taleb giới thiệu khái niệm "Via Negativa" - thành công bằng cách BỎ BỚT thay vì thêm vào.</p>
            
            <div class="example-box">
                <strong>Sức khỏe:</strong> Bỏ đồ ăn nhanh hiệu quả hơn uống thực phẩm bổ sung.<br>
                <strong>Đầu tư:</strong> Tránh lỗ 50% quan trọng hơn tìm lãi 100%.<br>
                <strong>Hạnh phúc:</strong> Bỏ thói quen xấu hiệu quả hơn tìm thêm niềm vui mới.
            </div>
            
            <h4>📊 Toán học đằng sau:</h4>
            <div class="warning-box">
                ⚠️ Mất 50% cần lãi 100% mới hòa vốn!<br>
                • Có 100 triệu → mất 50% = 50 triệu<br>
                • 50 triệu × 2 (lãi 100%) = 100 triệu (mới hòa vốn!)<br>
                → Tránh lỗ lớn QUAN TRỌNG HƠN nhiều so với tìm lãi lớn.
            </div>
        `,
        advanced: `
            <h4>🧠 Asymmetry of losses - Sự bất đối xứng:</h4>
            <p>Trong hầu hết mọi lĩnh vực, mất mát có tác động lớn hơn so với thu được cùng mức:</p>
            <ul>
                <li>Mất 1 khách hàng trung thành khó bù hơn có thêm 1 khách mới</li>
                <li>1 review xấu hại nhiều hơn 5 review tốt</li>
                <li>1 scandal phá hủy uy tín nhanh hơn 10 năm xây dựng</li>
            </ul>
            
            <h4>Ứng dụng trong quản trị rủi ro:</h4>
            <ul>
                <li><strong>Antifragile:</strong> Thiết kế hệ thống chịu được shock thay vì tối ưu cho trường hợp lý tưởng</li>
                <li><strong>Margin of safety:</strong> Luôn có buffer cho sai số</li>
                <li><strong>Black Swan protection:</strong> Chuẩn bị cho sự kiện cực đoan</li>
            </ul>
        `
    },

    'charlie-munger': {
        icon: '👴',
        title: 'Charlie Munger & Inversion',
        subtitle: 'Bậc thầy tư duy ngược',
        order: 3,
        category: 'foundations',
        level: 'beginner',
        connections: ['what-is-inversion', 'avoid-failure', 'mental-models'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> Charlie Munger - phó chủ tịch Berkshire Hathaway, đối tác của Warren Buffett - là người nổi tiếng nhất với triết lý tư duy ngược.</p>
            <div class="tip-box">
                💡 Câu nói nổi tiếng của Munger:<br>
                "Tất cả những gì tôi muốn biết là TÔI SẼ CHẾT Ở ĐÂU, để tôi không bao giờ đến đó."
            </div>
            <div class="example-box">
                <strong>Cách Munger tư duy về đầu tư:</strong><br>
                ❌ Không hỏi: "Cổ phiếu nào sẽ tăng?"<br>
                ✅ Mà hỏi: "Cổ phiếu nào CHẮC CHẮN sẽ giảm?" → Tránh chúng!
            </div>
        `,
        detail: `
            <h4>📝 Bài diễn thuyết nổi tiếng: "How to Be Miserable"</h4>
            <p>Trong bài nói tại Harvard, Munger chia sẻ cách ĐẢM BẢO khổ sở suốt đời:</p>
            <ol>
                <li>Dùng chất kích thích (rượu, thuốc)</li>
                <li>Ghen tị với người khác</li>
                <li>Oán giận dai dẳng</li>
                <li>Không đáng tin cậy</li>
                <li>Không bao giờ học hỏi từ sai lầm</li>
                <li>Không bao giờ đọc sách</li>
            </ol>
            <div class="tip-box">
                💡 Đảo ngược danh sách này → Bạn có công thức hạnh phúc!
            </div>
            
            <h4>Munger về kinh doanh:</h4>
            <div class="example-box">
                "Muốn có doanh nghiệp thành công? Hãy nghĩ xem doanh nghiệp nào CHẮC CHẮN phá sản, rồi tránh những đặc điểm đó."
            </div>
        `,
        advanced: `
            <h4>🧠 Mental Models của Munger:</h4>
            <p>Munger kết hợp tư duy ngược với hệ thống "lattice of mental models" - một mạng lưới các mô hình tư duy từ nhiều ngành:</p>
            <ul>
                <li><strong>Toán học:</strong> Inversion (đảo ngược vấn đề)</li>
                <li><strong>Vật lý:</strong> Suy nghĩ từ first principles</li>
                <li><strong>Tâm lý:</strong> Nhận biết cognitive biases</li>
                <li><strong>Sinh học:</strong> Hệ thống thích nghi</li>
                <li><strong>Kinh tế:</strong> Incentive structures</li>
            </ul>
            
            <h4>Checklist đảo ngược của Munger:</h4>
            <ol>
                <li>Liệt kê những gì có thể đi sai</li>
                <li>Xác định xác suất của từng rủi ro</li>
                <li>Đánh giá mức độ nghiêm trọng</li>
                <li>Tìm cách ngăn ngừa hoặc giảm thiểu</li>
                <li>Chỉ hành động khi đã xử lý rủi ro lớn nhất</li>
            </ol>
        `
    },

    'subtract-not-add': {
        icon: '➖',
        title: 'Bớt Đi Thay Vì Thêm Vào',
        subtitle: 'Subtraction mindset',
        order: 4,
        category: 'foundations',
        level: 'intermediate',
        connections: ['avoid-failure', 'what-is-inversion', 'simplify'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> Khi gặp vấn đề, bản năng con người là THÊM thứ gì đó. Nhưng thường BỎBỚT mới là giải pháp tốt hơn.</p>
            <div class="example-box">
                <strong>Ví dụ:</strong><br>
                🍽️ Muốn giảm cân? Đừng thêm bài tập phức tạp → Bỏ bớt đồ ăn vặt<br>
                📅 Quá bận? Đừng thêm app quản lý → Bỏ bớt meeting không cần thiết<br>
                💻 Code chậm? Đừng thêm server → Bỏ bớt code thừa
            </div>
        `,
        detail: `
            <h4>📝 Nghiên cứu khoa học:</h4>
            <p>Nghiên cứu từ Đại học Virginia (2021) cho thấy khi giải quyết vấn đề, con người có xu hướng THÊM (addition bias) thay vì BỎ BỚT, ngay cả khi bỏ bớt là giải pháp tốt hơn.</p>
            
            <h4>Ứng dụng thực tế:</h4>
            <table>
                <tr><th>Lĩnh vực</th><th>Thêm vào (thường)</th><th>Bớt đi (tốt hơn)</th></tr>
                <tr><td>Sản phẩm</td><td>Thêm tính năng</td><td>Bỏ tính năng ít dùng</td></tr>
                <tr><td>Quy trình</td><td>Thêm bước kiểm tra</td><td>Bỏ bước không cần thiết</td></tr>
                <tr><td>Cuộc sống</td><td>Thêm cam kết mới</td><td>Bỏ cam kết không quan trọng</td></tr>
                <tr><td>Code</td><td>Thêm layer/abstraction</td><td>Xóa dead code, simplify</td></tr>
            </table>
        `,
        advanced: `
            <h4>🧠 Addition Bias - Thiên kiến thêm vào:</h4>
            <p>Nghiên cứu của Gabrielle Adams et al. (Nature, 2021) chỉ ra rằng con người thiên về giải pháp "thêm vào" vì:</p>
            <ul>
                <li><strong>Visibility:</strong> Thêm thứ gì dễ thấy hơn bỏ bớt</li>
                <li><strong>Credit:</strong> Người tạo ra cái mới được công nhận nhiều hơn người bỏ bớt</li>
                <li><strong>Loss aversion:</strong> Sợ mất những gì đã có</li>
                <li><strong>Sunk cost:</strong> "Đã đầu tư vào rồi, bỏ thì phí"</li>
            </ul>
            
            <h4>Steve Jobs về subtraction:</h4>
            <div class="tip-box">
                💡 "People think focus means saying yes to the thing you've got to focus on. But it means saying no to the hundred other good ideas." — Steve Jobs
            </div>
        `
    }
};
