// Problem Solving - Mental Models (mô hình tư duy)
// Cùng schema với frameworks.js
const mentalModelsData = {
    'occams-razor': {
        icon: '🪒',
        title: "Occam's Razor",
        category: 'mental-models',
        level: 'beginner',
        connections: ['hypothesis-driven', 'root-cause', 'confirmation-bias'],
        summary: 'Khi nhiều giải thích cùng khớp với dữ kiện, hãy ưu tiên kiểm tra giải thích cần ít giả định nhất trước. Đây là quy tắc chọn thứ tự kiểm tra, không phải định luật về sự thật.',
        origin: 'William of Ockham, nhà triết học thế kỷ 14: "Không nên nhân lên các thực thể quá mức cần thiết."',
        what: `
            <p>Mỗi giả định thêm vào là một chỗ có thể sai. Giải thích cần 1 giả định có nhiều khả năng đúng hơn giải thích cần 5 giả định cùng đúng một lúc.</p>
            <div class="example-box">🐴 Câu dạy sinh viên y khoa (Theodore Woodward, thập niên 1940): <em>"Khi nghe tiếng vó ngựa, hãy nghĩ tới ngựa, đừng nghĩ tới ngựa vằn."</em> — Bệnh phổ biến giải thích triệu chứng thường xuyên hơn bệnh hiếm.</div>
            <p>Trong giải quyết vấn đề, Occam's Razor chủ yếu quyết định <strong>thứ tự kiểm tra</strong>: kiểm tra giải thích đơn giản, phổ biến, rẻ trước — nếu dữ liệu không khớp, mới chuyển sang giải thích phức tạp hơn.</p>
        `,
        when: {
            use: [
                'Chẩn đoán lỗi (debug, sửa máy, khám bệnh)',
                'Chọn giữa nhiều giả thuyết khi dữ liệu còn ít',
                'Khi bản thân hoặc nhóm bắt đầu nghĩ tới "thuyết âm mưu"'
            ],
            avoid: [
                'Khi dữ liệu đã bác bỏ giải thích đơn giản — đừng cố giữ nó',
                'Hệ thống phức hợp nơi nguyên nhân thật sự đan xen nhiều yếu tố'
            ]
        },
        steps: [
            'Liệt kê các giải thích khả dĩ.',
            'Với mỗi giải thích, đếm xem cần bao nhiêu giả định phải cùng đúng.',
            'Xét tần suất: tình huống này thường do nguyên nhân nào (tỷ lệ nền)?',
            'Kiểm tra giải thích đơn giản/phổ biến/rẻ nhất trước.',
            'Nếu dữ liệu không khớp, loại nó và chuyển sang giải thích tiếp theo.'
        ],
        example: `
            <h5>Máy in không in</h5>
            <p>Kiểm tra theo thứ tự: cắm điện chưa? → hết giấy/kẹt giấy? → chọn đúng máy in chưa? → driver? — trước khi nghĩ "máy in bị virus tấn công".</p>
            <h5>Doanh số tuần này giảm 30%</h5>
            <p>Trước khi kết luận "đối thủ phá giá" (cần nhiều giả định: đối thủ biết, đã hành động, khách đã chuyển…), hãy kiểm tra: code tracking có lỗi sau lần cập nhật website không? Tuần này có ngày lễ không? Kho có hết hàng bán chạy không?</p>
            <div class="tip-box">💡 Trong thực tế, "lỗi đo lường" là một trong những nguyên nhân phổ biến nhất khiến số liệu thay đổi đột ngột — luôn kiểm tra nó trước.</div>
        `,
        mistakes: [
            'Nhầm "đơn giản" với "quen thuộc" hoặc "dễ chịu với mình"',
            'Dùng Occam để bác bỏ giải thích phức tạp khi dữ liệu đòi hỏi nó',
            'Dừng ở giải thích đơn giản mà không kiểm chứng',
            'Đơn giản hoá quá mức hệ thống vốn phức tạp'
        ],
        advanced: `
            <h5>Các "dao cạo" họ hàng</h5>
            <ul>
                <li><strong>Hanlon's Razor:</strong> đừng gán cho ác ý những gì có thể giải thích bằng sơ suất hay thiếu thông tin. Rất hữu ích khi làm việc nhóm — đồng nghiệp gửi thiếu file thường là quên, không phải phá.</li>
                <li><strong>Hitchens's Razor:</strong> điều được khẳng định mà không có bằng chứng thì có thể bác bỏ mà không cần bằng chứng.</li>
            </ul>
            <h5>Liên hệ với xác suất</h5>
            <p>Giải thích "đơn giản" thường là giải thích có <em>tỷ lệ nền</em> (prior) cao. Nhưng ngựa vằn vẫn tồn tại: bác sĩ giỏi kiểm tra bệnh phổ biến trước <em>và</em> biết khi nào dữ liệu đủ bất thường để nghĩ tới bệnh hiếm.</p>
            <p><em>"Mọi thứ nên được làm đơn giản nhất có thể, nhưng không đơn giản hơn."</em> — thường được gán cho Einstein.</p>
        `,
        checklist: [
            'Đã liệt kê nhiều giải thích?',
            'Đã kiểm tra giải thích đơn giản, phổ biến trước?',
            'Đã loại trừ lỗi đo lường/dữ liệu?',
            'Giải thích được chọn có khớp mọi dữ kiện?'
        ]
    },

    'pareto': {
        icon: '📊',
        title: 'Pareto Principle (80/20)',
        category: 'mental-models',
        level: 'beginner',
        connections: ['prioritization', 'fishbone', 'root-cause', 'constraints'],
        summary: 'Một số ít nguyên nhân thường tạo ra phần lớn kết quả. Tìm "số ít quan trọng" đó để tập trung nguồn lực, thay vì dàn trải đều cho mọi thứ.',
        origin: 'Nhà kinh tế Vilfredo Pareto (1896) quan sát khoảng 80% đất đai ở Ý thuộc về khoảng 20% dân số. Joseph Juran, chuyên gia chất lượng, khái quát thành nguyên tắc "số ít quan trọng, số nhiều tầm thường".',
        what: `
            <p>Trong nhiều hệ thống, kết quả phân bố <strong>lệch</strong>, không đều:</p>
            <ul>
                <li>Một số ít khách hàng tạo phần lớn doanh thu.</li>
                <li>Một số ít loại lỗi gây phần lớn sự cố.</li>
                <li>Một số ít tính năng được dùng nhiều nhất.</li>
            </ul>
            <div class="warning-box">⚠️ 80/20 là hình ảnh minh hoạ, không phải hằng số. Thực tế có thể là 90/10, 70/30 hoặc 95/5 — và hai con số <em>không cần</em> cộng lại thành 100. Có những hệ thống phân bố khá đều, không có "số ít quan trọng". Luôn kiểm tra bằng dữ liệu.</div>
        `,
        when: {
            use: [
                'Nhiều loại vấn đề/nguyên nhân, nguồn lực có hạn',
                'Phân tích khiếu nại, lỗi, chi phí, doanh thu',
                'Quyết định tập trung vào khách hàng/sản phẩm nào'
            ],
            avoid: [
                'Những vấn đề "nhỏ về tần suất" nhưng nghiêm trọng (an toàn, pháp lý) — không được bỏ qua',
                'Khi dữ liệu cho thấy phân bố đều'
            ]
        },
        steps: [
            'Chọn kết quả cần phân tích (số khiếu nại, chi phí, thời gian chết…).',
            'Thu thập dữ liệu và phân loại theo nguyên nhân/nhóm.',
            'Sắp xếp các nhóm theo thứ tự giảm dần.',
            'Tính phần trăm và phần trăm tích luỹ.',
            'Vẽ biểu đồ Pareto (cột giảm dần + đường tích luỹ).',
            'Tập trung vào các nhóm đầu chiếm khoảng 80% tích luỹ; sau khi giải xong, phân tích lại.'
        ],
        example: `
            <p><strong>500 khiếu nại khách hàng trong tháng:</strong></p>
            <table class="pareto-table">
                <tr><th>Loại</th><th>Số lượng</th><th>%</th><th>% tích luỹ</th></tr>
                <tr><td>Giao trễ</td><td>210</td><td><span class="pbar" style="--w:42%"></span>42%</td><td>42%</td></tr>
                <tr><td>Giao sai hàng</td><td>120</td><td><span class="pbar" style="--w:24%"></span>24%</td><td>66%</td></tr>
                <tr><td>Hàng hư hỏng</td><td>70</td><td><span class="pbar" style="--w:14%"></span>14%</td><td><strong>80%</strong></td></tr>
                <tr><td>Thái độ nhân viên</td><td>40</td><td><span class="pbar" style="--w:8%"></span>8%</td><td>88%</td></tr>
                <tr><td>Hoàn tiền chậm</td><td>30</td><td><span class="pbar" style="--w:6%"></span>6%</td><td>94%</td></tr>
                <tr><td>Khác</td><td>30</td><td><span class="pbar" style="--w:6%"></span>6%</td><td>100%</td></tr>
            </table>
            <p>→ 3 trên 6 nhóm chiếm 80% khiếu nại, và cả 3 đều liên quan tới <em>khâu kho vận</em>. Tập trung cải thiện kho vận trước thay vì đào tạo lại toàn bộ đội CS.</p>
        `,
        mistakes: [
            'Phân loại dữ liệu quá thô ("lỗi hệ thống") hoặc sai → Pareto vô nghĩa',
            'Bỏ qua các vấn đề hiếm nhưng nghiêm trọng',
            'Máy móc áp con số 80/20 mà không nhìn dữ liệu thật',
            'Làm Pareto một lần rồi thôi — sau khi giải nhóm lớn nhất, thứ tự thay đổi'
        ],
        advanced: `
            <h5>Pareto trong Pareto</h5>
            <p>Nếu phân bố thật sự theo 80/20, áp dụng lần hai: 20% của 20% (tức 4%) tạo ra 80% của 80% (tức 64%) kết quả. Tìm "hạt nhân" nhỏ nhất có tác động lớn nhất.</p>
            <h5>Luật lũy thừa và cái đuôi dài</h5>
            <p>Nhiều hiện tượng (thu nhập, lượt xem video, quy mô thành phố) tuân theo phân phối luỹ thừa — vài phần tử khổng lồ và rất nhiều phần tử nhỏ. Hiểu điều này giúp tránh dùng "trung bình" cho dữ liệu lệch.</p>
            <h5>Pareto của công sức</h5>
            <p>Hoàn thành 80% đầu của một việc thường chỉ tốn 20% thời gian; 20% cuối (đánh bóng, trường hợp đặc biệt) tốn phần lớn thời gian. Biết khi nào "đủ tốt" là một kỹ năng.</p>
        `,
        checklist: [
            'Có dữ liệu thật để sắp xếp?',
            'Cách phân loại có đủ cụ thể để hành động?',
            'Đã tính % tích luỹ?',
            'Có vấn đề hiếm nhưng nghiêm trọng bị bỏ qua không?'
        ]
    },

    'inversion': {
        icon: '🙃',
        title: 'Inversion',
        category: 'mental-models',
        level: 'intermediate',
        connections: ['premortem', 'second-order', 'brainstorming', 'first-principles'],
        summary: 'Giải bài toán theo chiều ngược: thay vì hỏi "làm sao để thành công?", hỏi "điều gì chắc chắn dẫn đến thất bại?" rồi tránh những điều đó. Tránh sai lầm lớn thường dễ và hiệu quả hơn cố làm điều xuất sắc.',
        origin: 'Nhà toán học Carl Jacobi: "Hãy đảo ngược, luôn đảo ngược." Charlie Munger (đối tác của Warren Buffett) phổ biến trong kinh doanh và đầu tư.',
        what: `
            <div class="example-box">💬 Charlie Munger: <em>"Tất cả những gì tôi muốn biết là tôi sẽ chết ở đâu, để tôi không bao giờ đến đó."</em></div>
            <p>Não người giỏi phát hiện nguy hiểm hơn là tưởng tượng thành công. Khi hỏi "làm sao để thất bại?", danh sách tuôn ra rất nhanh và cụ thể — và nhiều mục trong đó ta đang vô tình làm.</p>
            <p>Hai dạng đảo ngược:</p>
            <ul>
                <li><strong>Đảo ngược mục tiêu:</strong> "Làm sao để chắc chắn thất bại?" → tránh.</li>
                <li><strong>Đi ngược từ đích:</strong> bắt đầu từ kết quả mong muốn và hỏi "ngay trước đó phải có điều gì?" lùi dần về hiện tại.</li>
            </ul>
        `,
        when: {
            use: [
                'Lập kế hoạch dự án, mục tiêu cá nhân, chiến lược',
                'Khi bí ý tưởng theo chiều thuận',
                'Quản trị rủi ro: tài chính, sức khoẻ, an toàn'
            ],
            avoid: [
                'Dùng làm công cụ duy nhất — tránh thất bại chưa đủ để thành công lớn',
                'Khi dễ biến thành bi quan, sợ hãi không hành động'
            ]
        },
        steps: [
            'Xác định mục tiêu rõ ràng.',
            'Đảo ngược: "Làm thế nào để chắc chắn thất bại / làm tệ nhất có thể?"',
            'Liệt kê càng nhiều càng tốt — cụ thể, thậm chí phóng đại.',
            'Soi lại hiện tại: mình đang làm những điều nào trong danh sách?',
            'Biến mỗi mục thành quy tắc "không làm" hoặc biện pháp phòng ngừa.',
            'Kết hợp với kế hoạch "tiến tới" thông thường.'
        ],
        example: `
            <h5>Mục tiêu: xây dựng đội ngũ gắn kết</h5>
            <p><strong>Đảo ngược: "Làm sao để nhân viên nghỉ việc hàng loạt?"</strong></p>
            <ul>
                <li>Sếp nhận công, đổ lỗi cho cấp dưới.</li>
                <li>Họp nhiều, không ra quyết định.</li>
                <li>Không ai biết lộ trình thăng tiến của mình.</li>
                <li>Trả lương thấp hơn thị trường, không giải thích.</li>
                <li>Kiểm soát từng chi tiết, không tin tưởng.</li>
                <li>Hứa rồi không làm.</li>
            </ul>
            <p><strong>Soi lại:</strong> đội đang có họp dài không quyết định và chưa có lộ trình rõ → hai hành động cụ thể đầu tiên.</p>
            <h5>Tài chính cá nhân: "Làm sao để phá sản?"</h5>
            <p>Vay tiêu dùng lãi cao cho đồ không cần; không có quỹ khẩn cấp; dồn hết tiền vào một khoản đầu tư "chắc thắng" do người quen giới thiệu; không có bảo hiểm sức khoẻ. → Quy tắc: không vay tiêu dùng, quỹ khẩn cấp 6 tháng chi tiêu, đa dạng hoá, mua bảo hiểm.</p>
        `,
        mistakes: [
            'Liệt kê xong rồi dừng, không đối chiếu với hành động hiện tại',
            'Rơi vào bi quan, chỉ thấy rủi ro',
            'Quên rằng tránh thất bại là điều kiện cần, chưa phải điều kiện đủ'
        ],
        advanced: `
            <h5>Via negativa</h5>
            <p>Nassim Taleb: nhiều cải thiện đến từ việc <strong>bớt đi</strong> — bỏ thói quen xấu, bỏ tính năng thừa, bỏ cuộc họp vô ích — thay vì thêm vào.</p>
            <h5>Working backwards (Amazon)</h5>
            <p>Trước khi xây sản phẩm, đội ngũ viết <em>thông cáo báo chí và FAQ</em> như thể sản phẩm đã ra mắt. Nếu không viết được một thông cáo hấp dẫn, sản phẩm có lẽ không đáng làm.</p>
            <h5>Chứng minh phản chứng</h5>
            <p>Trong toán học: giả sử điều ngược lại đúng, rồi chỉ ra nó dẫn tới mâu thuẫn. Cùng tinh thần đảo ngược.</p>
            <p>Pre-mortem là inversion được "thể chế hoá" thành một buổi họp có quy trình.</p>
        `,
        checklist: [
            'Đã hỏi "làm sao để chắc chắn thất bại?"',
            'Danh sách có cụ thể, không chung chung?',
            'Đã đối chiếu với việc đang làm?',
            'Mỗi mục đã thành quy tắc hoặc hành động?'
        ]
    },

    'feedback-loops': {
        icon: '🔁',
        title: 'Feedback Loops',
        category: 'mental-models',
        level: 'intermediate',
        connections: ['systems-thinking', 'second-order', 'symptom-fixing', 'constraints'],
        summary: 'Kết quả của hệ thống quay lại tác động lên chính nó. Vòng tăng cường khuếch đại (tăng trưởng hoặc sụp đổ), vòng cân bằng kéo hệ thống về mục tiêu. Độ trễ trong vòng phản hồi là nguồn gốc của phản ứng quá đà.',
        what: `
            <table>
                <tr><th></th><th>Vòng tăng cường (R)</th><th>Vòng cân bằng (B)</th></tr>
                <tr><td>Hành vi</td><td>Tự khuếch đại: càng nhiều càng nhiều (hoặc càng ít càng ít)</td><td>Tự điều chỉnh về một mức mục tiêu</td></tr>
                <tr><td>Tên khác</td><td>Positive feedback, vòng xoáy (tốt: virtuous / xấu: vicious)</td><td>Negative feedback</td></tr>
                <tr><td>Ví dụ</td><td>Lãi kép; hiệu ứng mạng lưới; tin đồn lan truyền</td><td>Máy điều hoà; cơn đói; cung – cầu</td></tr>
            </table>
            <div class="warning-box">⚠️ "Positive/negative" <strong>không có nghĩa là tốt/xấu</strong>. "Positive" là cùng chiều khuếch đại — nợ nần chồng chất cũng là vòng positive.</div>
            <p><strong>Độ trễ (delay):</strong> khi tác động mất thời gian mới thấy, ta dễ phản ứng quá đà. Ví dụ vòi sen nóng lạnh: vặn nóng chưa thấy nóng → vặn thêm → bỏng → vặn lạnh quá tay → lạnh cóng…</p>
        `,
        when: {
            use: [
                'Vấn đề cứ quay lại hoặc ngày càng tệ theo kiểu "vòng xoáy"',
                'Tăng trưởng đột ngột chững lại',
                'Hệ thống dao động lên xuống (tồn kho, tuyển dụng, giá)'
            ],
            avoid: [
                'Sự kiện đơn lẻ, không lặp lại — không có "vòng" để phân tích'
            ]
        },
        steps: [
            'Chọn các biến quan trọng — danh từ đo được ("số người dùng", "nợ kỹ thuật", "độ hài lòng").',
            'Vẽ mũi tên nhân–quả giữa các biến; ghi dấu <strong>+</strong> (cùng chiều) hoặc <strong>−</strong> (ngược chiều).',
            'Tìm các vòng khép kín.',
            'Đếm số dấu − trong vòng: <strong>chẵn → R</strong> (tăng cường), <strong>lẻ → B</strong> (cân bằng).',
            'Đánh dấu chỗ có độ trễ.',
            'Tìm điểm can thiệp: tăng sức mạnh vòng tốt, cắt vòng xấu, rút ngắn độ trễ, thêm vòng cân bằng.'
        ],
        example: `
            <h5>🔺 Vòng tăng cường có lợi — hiệu ứng mạng lưới</h5>
            <p>Nhiều người dùng → nhiều nội dung → nền tảng hấp dẫn hơn → nhiều người dùng hơn.</p>
            <h5>🔻 Vòng tăng cường có hại — nợ kỹ thuật</h5>
            <p>Nợ kỹ thuật ↑ → bug ↑ → thời gian sửa bug ↑ → thời gian cải thiện code ↓ → nợ kỹ thuật ↑ … Can thiệp: dành cố định 20% thời gian mỗi sprint cho việc trả nợ để cắt vòng.</p>
            <h5>⚖️ Vòng cân bằng có độ trễ — tồn kho</h5>
            <p>Tồn kho thấp → đặt hàng nhiều → (2 tuần sau hàng về) → tồn kho quá cao → ngưng đặt → tồn kho tụt → đặt hoảng loạn… Trong chuỗi cung ứng nhiều tầng, dao động khuếch đại dần về phía thượng nguồn — gọi là <em>hiệu ứng roi da (bullwhip effect)</em>.</p>
        `,
        mistakes: [
            'Chỉ nghĩ nhân–quả một chiều, không thấy kết quả quay lại tác động',
            'Bỏ qua độ trễ → phản ứng quá đà, dao động',
            'Tin rằng vòng tăng cường sẽ tăng mãi — luôn có vòng cân bằng giới hạn nó',
            'Hiểu "positive feedback" là "phản hồi tích cực/tốt"'
        ],
        advanced: `
            <h5>Beer Game (MIT)</h5>
            <p>Trò chơi mô phỏng chuỗi cung ứng bia gồm nhà bán lẻ, bán buôn, phân phối, nhà máy. Dù nhu cầu khách chỉ thay đổi một lần nhỏ, người chơi gần như luôn tạo ra dao động tồn kho khổng lồ — vì độ trễ và vì mỗi người chỉ nhìn thấy phần của mình. Bài học: cấu trúc hệ thống tạo ra hành vi, không phải do người chơi kém.</p>
            <h5>Vòng phản hồi và chỉ số</h5>
            <p>Khi một chỉ số được dùng để thưởng phạt, con người phản ứng lại chỉ số đó — tạo vòng phản hồi làm méo chỉ số (Định luật Goodhart). Thiết kế KPI là thiết kế vòng phản hồi.</p>
            <h5>Rút ngắn vòng phản hồi để học nhanh</h5>
            <p>Deploy hằng ngày thay vì hằng quý, khảo sát khách hằng tuần thay vì hằng năm: vòng phản hồi ngắn giúp phát hiện sai và sửa sớm.</p>
        `,
        checklist: [
            'Đã tìm thấy vòng khép kín nào?',
            'Là vòng R hay B?',
            'Có độ trễ nào đang khiến phản ứng quá đà?',
            'Điểm can thiệp là gì?'
        ]
    },

    'circle-competence': {
        icon: '⭕',
        title: 'Circle of Competence',
        category: 'mental-models',
        level: 'intermediate',
        connections: ['hammer-nail', 'occams-razor', 'confirmation-bias'],
        summary: 'Biết rõ ranh giới hiểu biết của mình: trong vòng thì tự tin quyết định, ở rìa thì thử nhỏ và học thêm, ngoài vòng thì tìm chuyên gia. Kích thước vòng không quan trọng bằng việc biết nó dừng ở đâu.',
        origin: 'Warren Buffett (thư gửi cổ đông năm 1996): nhà đầu tư chỉ cần đánh giá đúng những doanh nghiệp nằm trong vòng tròn năng lực của mình — "kích thước vòng tròn không quá quan trọng; biết ranh giới của nó mới là điều sống còn".',
        what: `
            <ul>
                <li>🟢 <strong>Trong vòng:</strong> hiểu sâu, có kinh nghiệm, từng đúng nhiều lần, giải thích được cho người khác → tự tin quyết định.</li>
                <li>🟡 <strong>Rìa vòng:</strong> biết một chút, đủ để nguy hiểm → quyết định nhỏ, thử nghiệm, hỏi ý kiến, học thêm.</li>
                <li>🔴 <strong>Ngoài vòng:</strong> không biết (và có thể không biết là mình không biết) → tìm chuyên gia hoặc tránh.</li>
            </ul>
            <p>Nguy hiểm nhất là vùng rìa: đủ hiểu biết để tự tin, không đủ để thấy rủi ro. Người mới học một lĩnh vực thường đánh giá quá cao hiểu biết của mình.</p>
        `,
        when: {
            use: [
                'Trước quyết định quan trọng ở lĩnh vực mới (đầu tư, kinh doanh, sức khoẻ, pháp lý)',
                'Khi quyết định có vẻ "quá dễ" hoặc "chắc thắng"',
                'Phân công vấn đề cho đúng người'
            ],
            avoid: [
                'Dùng làm lý do để không bao giờ học hay thử điều mới'
            ]
        },
        steps: [
            'Liệt kê các lĩnh vực kiến thức mà vấn đề đòi hỏi.',
            'Tự đánh giá thẳng thắn cho từng lĩnh vực: <em>Tôi có giải thích được cho người khác? Tôi từng đúng/sai bao nhiêu lần ở đây? Tôi có biết mình chưa biết gì?</em>',
            'Xếp từng lĩnh vực vào trong / rìa / ngoài vòng.',
            'Trong vòng: tự quyết. Rìa: thử nhỏ, có người phản biện. Ngoài: thuê/hợp tác chuyên gia hoặc tránh.',
            'Ghi nhật ký quyết định (dự đoán vs kết quả) để hiệu chỉnh cảm nhận về vòng tròn của mình theo thời gian.'
        ],
        example: `
            <p><strong>Một kỹ sư phần mềm giỏi muốn mở quán cà phê:</strong></p>
            <table>
                <tr><th>Lĩnh vực</th><th>Vùng</th><th>Cách xử lý</th></tr>
                <tr><td>Website, app order, hệ thống bán hàng</td><td>🟢 Trong</td><td>Tự làm</td></tr>
                <tr><td>Marketing online</td><td>🟡 Rìa</td><td>Học thêm, thử ngân sách nhỏ</td></tr>
                <tr><td>Vận hành F&B, nhân sự ca kíp</td><td>🔴 Ngoài</td><td>Hợp tác với người đã quản lý quán</td></tr>
                <tr><td>Chọn mặt bằng, hợp đồng thuê, giấy phép</td><td>🔴 Ngoài</td><td>Tư vấn người có kinh nghiệm/luật sư</td></tr>
            </table>
            <p>Quyết định: chạy thử quán pop-up 3 tháng trước khi ký hợp đồng thuê mặt bằng 5 năm.</p>
        `,
        mistakes: [
            'Thành công ở lĩnh vực A nên tự tin thái quá ở lĩnh vực B',
            'Nhầm "đọc nhiều về nó" với "có năng lực trong nó"',
            'Ngại hỏi chuyên gia vì sợ bị coi là kém',
            'Không bao giờ mở rộng vòng tròn'
        ],
        advanced: `
            <h5>Ma trận biết – không biết</h5>
            <table>
                <tr><th></th><th>Biết là mình biết</th><th>Biết là mình không biết</th></tr>
                <tr><td>Hành động</td><td>Dùng tự tin</td><td>Học, hỏi, thử nhỏ</td></tr>
            </table>
            <p>Nguy hiểm nhất là <strong>"không biết là mình không biết"</strong> (unknown unknowns). Cách giảm: hỏi người trong nghề "Người mới hay mắc sai lầm gì?", "Điều gì tôi chưa hỏi mà lẽ ra nên hỏi?"</p>
            <h5>Mở rộng vòng tròn có chủ đích</h5>
            <p>Munger khuyên xây dựng "mạng lưới các mô hình tư duy" từ nhiều ngành (tâm lý, kinh tế, vật lý, sinh học…) — không để trở thành chuyên gia mọi thứ, mà để nhận ra khi nào mình đang đứng ở rìa.</p>
        `,
        checklist: [
            'Vấn đề này thuộc vùng nào của mình?',
            'Mình có đang tự tin quá mức ở vùng rìa?',
            'Đã hỏi "người mới hay sai ở đâu?"',
            'Cần chuyên gia nào?'
        ]
    },

    'constraints': {
        icon: '🚧',
        title: 'Nút Thắt Cổ Chai (Theory of Constraints)',
        category: 'mental-models',
        level: 'intermediate',
        connections: ['pareto', 'systems-thinking', 'divide-conquer', 'pdca', 'feedback-loops'],
        summary: 'Mọi hệ thống bị giới hạn bởi một (hoặc rất ít) nút thắt. Cải thiện bất kỳ chỗ nào khác ngoài nút thắt đều không tăng được đầu ra — chỉ tạo thêm hàng tồn đọng.',
        origin: 'Eliyahu Goldratt, nhà vật lý người Israel, trình bày qua tiểu thuyết kinh doanh "The Goal" (1984).',
        what: `
            <p>Một sợi xích chỉ chắc bằng mắt xích yếu nhất. Một quy trình chỉ nhanh bằng khâu chậm nhất.</p>
            <div class="flow-row">
                <div class="flow-step">Dev<br><strong>20</strong>/tuần</div>
                <div class="flow-arrow">→</div>
                <div class="flow-step bottleneck">QA test<br><strong>8</strong>/tuần</div>
                <div class="flow-arrow">→</div>
                <div class="flow-step">Deploy<br><strong>15</strong>/tuần</div>
            </div>
            <p>Đầu ra của cả hệ thống = <strong>8 tính năng/tuần</strong>. Tuyển thêm dev chỉ làm hàng chờ test dài thêm. Tối ưu deploy cũng vô ích.</p>
            <div class="tip-box">💡 Goldratt: "Một giờ tiết kiệm được ở chỗ không phải nút thắt là một ảo ảnh."</div>
        `,
        when: {
            use: [
                'Quy trình nhiều bước, đầu ra thấp hơn mong muốn',
                'Đã thêm nguồn lực mà kết quả không tăng',
                'Hàng chờ/việc tồn đọng chất đống ở một chỗ'
            ],
            avoid: [
                'Hệ thống không có dòng chảy tuần tự rõ ràng',
                'Khi vấn đề là chất lượng chứ không phải năng lực/tốc độ'
            ]
        },
        steps: [
            '<strong>Xác định</strong> nút thắt: nơi hàng chờ dồn ứ, tài nguyên luôn bận 100%, mọi người hay phải chờ.',
            '<strong>Khai thác</strong> tối đa nút thắt hiện có: không để nó ngồi không, bỏ việc không cần thiết khỏi nó, kiểm tra chất lượng <em>trước</em> khi vào nút thắt.',
            '<strong>Đồng bộ</strong> mọi thứ khác theo nhịp nút thắt: không đẩy việc vào nhiều hơn nó xử lý được.',
            '<strong>Nâng cấp</strong> năng lực nút thắt (đầu tư, tuyển người, tự động hoá) nếu các bước trên chưa đủ.',
            '<strong>Lặp lại:</strong> nút thắt đã dịch chuyển → quay về bước 1. Đừng để quán tính trở thành nút thắt mới.'
        ],
        example: `
            <p><strong>Tiếp ví dụ phần mềm:</strong></p>
            <ul>
                <li><strong>Khai thác:</strong> QA chỉ tập trung test, chuyển việc viết báo cáo cho người khác; dev tự kiểm tra cơ bản trước khi chuyển sang QA để giảm vòng trả lại.</li>
                <li><strong>Đồng bộ:</strong> giới hạn số tính năng đang làm dở (WIP limit) — dev rảnh thì hỗ trợ viết test tự động thay vì bắt đầu tính năng mới.</li>
                <li><strong>Nâng cấp:</strong> đầu tư test tự động, tuyển thêm 1 QA.</li>
                <li><strong>Lặp lại:</strong> QA tăng lên 18/tuần → nút thắt chuyển sang Deploy (15/tuần) → vòng cải tiến tiếp theo tập trung vào deploy.</li>
            </ul>
            <h5>Ví dụ đời thường</h5>
            <p>Bếp nhà hàng: bếp nóng nấu được 60 món/giờ, nhưng chỉ có 1 người ra món (trang trí, kiểm tra) làm được 35 món/giờ → thêm đầu bếp không giúp gì, cần thêm người ra món hoặc đơn giản hoá khâu trang trí.</p>
        `,
        mistakes: [
            'Tối ưu cục bộ ở những khâu không phải nút thắt',
            'Thêm người vào khâu đông người nhất thay vì khâu chậm nhất',
            'Quên rằng nút thắt dịch chuyển sau khi được giải',
            'Không nhận ra nút thắt là một <em>chính sách</em> (quy định phê duyệt, họp hằng tuần) chứ không phải máy móc hay con người'
        ],
        advanced: `
            <h5>Định luật Little</h5>
            <p><strong>Số việc dở dang = Tốc độ ra × Thời gian chờ</strong>. Muốn giảm thời gian từ lúc bắt đầu đến lúc xong mà không tăng năng lực? Giảm số việc làm dở cùng lúc.</p>
            <h5>Nút thắt chính sách</h5>
            <p>Goldratt cho rằng phần lớn nút thắt trong tổ chức là chính sách: "mọi chi phí trên 5 triệu phải giám đốc duyệt", "chỉ deploy vào thứ Năm". Loại nút thắt này rẻ để gỡ nhất nhưng khó thấy nhất.</p>
            <h5>Năng suất cá nhân</h5>
            <p>Với nhiều người làm tri thức, nút thắt là <em>thời gian tập trung sâu</em> hoặc năng lượng ra quyết định — không phải số giờ làm việc. Bảo vệ nút thắt đó (chặn họp buổi sáng, gom việc vặt) hiệu quả hơn làm thêm giờ.</p>
        `,
        checklist: [
            'Nút thắt hiện tại ở đâu? Có dữ liệu không?',
            'Nút thắt có đang bị lãng phí thời gian?',
            'Có đang đẩy việc vào nhiều hơn nút thắt xử lý được?',
            'Sau cải tiến, nút thắt đã chuyển đi đâu?'
        ]
    },

    'second-order': {
        icon: '♟️',
        title: 'Second-Order Thinking',
        category: 'mental-models',
        level: 'advanced',
        connections: ['systems-thinking', 'feedback-loops', 'inversion', 'premortem', 'symptom-fixing'],
        summary: 'Không dừng ở hậu quả trực tiếp của một quyết định mà hỏi tiếp "và rồi sao?" — hậu quả của hậu quả, phản ứng của người khác, và tác động theo thời gian.',
        origin: 'Nhà đầu tư Howard Marks phổ biến thuật ngữ trong sách "The Most Important Thing". Ý tưởng cốt lõi có từ nhà kinh tế Frédéric Bastiat (1850) với tiểu luận "Điều thấy được và điều không thấy được".',
        what: `
            <table>
                <tr><th>Tư duy bậc nhất</th><th>Tư duy bậc hai</th></tr>
                <tr><td>"Giảm giá thì bán được nhiều hơn"</td><td>"…nhưng khách sẽ quen chờ giảm giá, đối thủ giảm theo, biên lợi nhuận cả ngành giảm"</td></tr>
                <tr><td>Nhanh, hiển nhiên, ai cũng nghĩ ra</td><td>Chậm hơn, cần hỏi tiếp — và là nơi tạo lợi thế</td></tr>
                <tr><td>Hỏi: "Điều này có giải quyết vấn đề không?"</td><td>Hỏi: "Và sau đó thì sao? Ai sẽ phản ứng thế nào?"</td></tr>
            </table>
            <p>Nhiều quyết định có hậu quả bậc nhất tốt nhưng bậc hai xấu (ăn đồ ngọt, vay nợ tiêu dùng, sửa nhanh bằng workaround). Ngược lại, nhiều quyết định có bậc nhất khó chịu nhưng bậc hai tốt (tập thể dục, đầu tư vào đào tạo, trả nợ kỹ thuật).</p>
        `,
        when: {
            use: [
                'Quyết định có tác động dài hạn hoặc khó đảo ngược',
                'Thiết kế chính sách, KPI, cơ chế thưởng phạt',
                'Quyết định có tác động tới nhiều bên (đối thủ, khách hàng, nhân viên)'
            ],
            avoid: [
                'Quyết định nhỏ, dễ đảo ngược — phân tích sâu tốn thời gian hơn giá trị',
                'Phân tích tới bậc 5, 6 dựa trên suy đoán chồng suy đoán'
            ]
        },
        steps: [
            'Nêu quyết định.',
            'Liệt kê hậu quả bậc 1 (trực tiếp, ngay lập tức).',
            'Với mỗi hậu quả, hỏi "và rồi sao?" để ra bậc 2, bậc 3.',
            'Hỏi: <em>những người/hệ thống khác sẽ phản ứng thế nào?</em> (đối thủ, nhân viên, khách hàng, cơ quan quản lý)',
            'Xét theo nhiều khung thời gian: 10 phút, 10 tháng, 10 năm sau.',
            'Cân nhắc: lợi ích ngắn hạn có đáng với chi phí dài hạn? Có cách nào giữ lợi ích mà giảm tác dụng phụ?'
        ],
        example: `
            <h5>KPI "số ticket đóng mỗi ngày" cho bộ phận CS</h5>
            <ul>
                <li><strong>Bậc 1:</strong> nhân viên đóng ticket nhanh hơn ✅</li>
                <li><strong>Bậc 2:</strong> đóng vội khi chưa giải quyết xong; chia nhỏ một vấn đề thành nhiều ticket để "đẹp số" ❌</li>
                <li><strong>Bậc 3:</strong> khách phải liên hệ lại nhiều lần → tổng khối lượng việc tăng, mức hài lòng giảm, khách rời đi ❌</li>
            </ul>
            <p>→ Thiết kế tốt hơn: đo tỷ lệ giải quyết ngay lần đầu + mức hài lòng, không chỉ số lượng.</p>
            <h5>Hiệu ứng rắn hổ mang</h5>
            <p>Câu chuyện kinh điển (có thể đã được kể phóng đại): chính quyền thuộc địa ở Delhi thưởng tiền cho mỗi con rắn hổ mang chết. Người dân bắt đầu <em>nuôi</em> rắn để lấy thưởng. Khi chương trình bị huỷ, rắn nuôi bị thả ra — số rắn còn nhiều hơn trước.</p>
        `,
        mistakes: [
            'Phân tích quá xa đến mức tê liệt, không quyết định',
            'Chỉ nghĩ hậu quả xấu — hậu quả bậc hai cũng có thể là cơ hội',
            'Bỏ qua phản ứng của người khác, coi họ đứng yên',
            'Coi hậu quả dự đoán là chắc chắn thay vì khả năng'
        ],
        advanced: `
            <h5>Định luật Goodhart</h5>
            <p><em>"Khi một chỉ số trở thành mục tiêu, nó không còn là một chỉ số tốt."</em> Con người tối ưu cho con số chứ không cho mục đích đằng sau nó. Giải pháp: dùng nhiều chỉ số cân bằng nhau, kết hợp đánh giá định tính, thay đổi chỉ số định kỳ.</p>
            <h5>Hậu quả ngoài ý muốn</h5>
            <p>Nhà xã hội học Robert Merton (1936) chỉ ra các nguồn gây hậu quả ngoài ý muốn: thiếu hiểu biết, sai sót, lợi ích trước mắt che khuất lợi ích lâu dài, và chính việc dự đoán làm thay đổi hành vi.</p>
            <h5>Kết hợp với lý thuyết trò chơi</h5>
            <p>Tư duy bậc hai về người khác chính là suy nghĩ chiến lược: "Nếu tôi làm A, đối thủ sẽ làm gì? Và khi đó tôi nên làm gì?"</p>
        `,
        checklist: [
            'Đã hỏi "và rồi sao?" ít nhất 2 lần?',
            'Đã nghĩ đến phản ứng của các bên khác?',
            'Đã xét khung 10 phút / 10 tháng / 10 năm?',
            'KPI/cơ chế có tạo động cơ lệch lạc không?'
        ]
    },

    'systems-thinking': {
        icon: '🕸️',
        title: 'Systems Thinking',
        category: 'mental-models',
        level: 'advanced',
        connections: ['feedback-loops', 'second-order', 'constraints', 'symptom-fixing', 'root-cause', 'cynefin'],
        summary: 'Nhìn vấn đề như một hệ thống gồm các phần tử, mối liên kết và mục đích. Hành vi lặp lại của hệ thống do cấu trúc của nó tạo ra — muốn thay đổi kết quả bền vững, phải thay đổi cấu trúc chứ không chỉ phản ứng với sự kiện.',
        origin: 'Jay Forrester (MIT) phát triển ngành động lực học hệ thống từ thập niên 1950; Donella Meadows ("Thinking in Systems") và Peter Senge ("The Fifth Discipline") phổ biến rộng rãi.',
        what: `
            <p><strong>Hệ thống</strong> = phần tử + mối liên kết + mục đích. Thay một cầu thủ, đội bóng vẫn là đội bóng; thay luật chơi hay mục tiêu, nó trở thành thứ khác hẳn — liên kết và mục đích quan trọng hơn phần tử.</p>
            <h5>Mô hình tảng băng</h5>
            <table>
                <tr><th>Tầng</th><th>Câu hỏi</th><th>Ví dụ: đội liên tục trễ deadline</th></tr>
                <tr><td>Sự kiện (nhìn thấy)</td><td>Chuyện gì đã xảy ra?</td><td>Dự án X trễ 2 tuần</td></tr>
                <tr><td>Xu hướng</td><td>Điều gì lặp lại theo thời gian?</td><td>6 dự án gần nhất đều trễ 20–40%</td></tr>
                <tr><td>Cấu trúc</td><td>Điều gì tạo ra xu hướng?</td><td>Ước lượng do sales hứa với khách; không có thời gian dự phòng; ưu tiên thay đổi giữa chừng</td></tr>
                <tr><td>Mô hình tư duy</td><td>Niềm tin nào duy trì cấu trúc?</td><td>"Hứa nhanh mới giữ được khách", "ước lượng cao là lười"</td></tr>
            </table>
            <p>Phản ứng ở tầng sự kiện (la mắng, tăng ca) chỉ chữa cháy. Đòn bẩy nằm ở các tầng dưới.</p>
        `,
        when: {
            use: [
                'Vấn đề lặp lại dù đã "giải" nhiều lần',
                'Giải pháp ở chỗ này gây vấn đề ở chỗ khác',
                'Vấn đề liên quan nhiều bộ phận, nhiều bên'
            ],
            avoid: [
                'Sự cố đơn lẻ có nguyên nhân rõ ràng',
                'Khi cần hành động khẩn cấp — ổn định trước, phân tích hệ thống sau'
            ]
        },
        steps: [
            'Mô tả sự kiện gây chú ý.',
            'Vẽ biểu đồ hành vi theo thời gian để thấy xu hướng (tăng, giảm, dao động).',
            'Vẽ sơ đồ vòng nhân quả: các biến, mũi tên, vòng tăng cường/cân bằng, độ trễ.',
            'Đối chiếu với các "mẫu hệ thống" (archetype) quen thuộc.',
            'Tìm điểm đòn bẩy — nơi thay đổi nhỏ tạo tác động lớn và bền vững.',
            'Can thiệp thử ở quy mô nhỏ, quan sát cả tác dụng phụ.'
        ],
        example: `
            <h5>Các mẫu hệ thống thường gặp</h5>
            <table>
                <tr><th>Mẫu</th><th>Cơ chế</th><th>Ví dụ</th></tr>
                <tr><td><strong>Giải pháp phản tác dụng</strong></td><td>Sửa nhanh làm giảm triệu chứng nhưng gây tác dụng phụ khiến vấn đề nặng hơn về sau</td><td>Tăng ca để kịp deadline → mệt mỏi, nhiều lỗi → càng trễ</td></tr>
                <tr><td><strong>Chuyển gánh nặng</strong></td><td>Dựa mãi vào giải pháp triệu chứng khiến năng lực giải quyết gốc teo dần</td><td>Luôn nhờ "người hùng" chữa cháy → không ai sửa quy trình → càng phụ thuộc người hùng</td></tr>
                <tr><td><strong>Giới hạn tăng trưởng</strong></td><td>Vòng tăng trưởng gặp một vòng cân bằng kìm hãm</td><td>Startup tăng khách nhanh → chất lượng hỗ trợ giảm → khách rời đi</td></tr>
                <tr><td><strong>Bi kịch tài nguyên chung</strong></td><td>Mỗi cá nhân khai thác hợp lý với mình nhưng cả nhóm làm cạn tài nguyên</td><td>Đánh bắt cá quá mức; mọi team đều dùng chung một server test</td></tr>
                <tr><td><strong>Leo thang</strong></td><td>Hai bên đáp trả nhau, mỗi lần mạnh hơn</td><td>Cuộc chiến giảm giá giữa hai đối thủ</td></tr>
            </table>
            <h5>Tắc đường và "nhu cầu cảm ứng"</h5>
            <p>Mở rộng đường → đi lại nhanh hơn → nhiều người chọn đi ô tô, chuyển nhà xa hơn → vài năm sau đường lại tắc. Đòn bẩy thực sự thường nằm ở giá (phí vào nội đô), giao thông công cộng và quy hoạch — không phải số làn đường.</p>
        `,
        mistakes: [
            'Vẽ hệ thống vô biên — cần đặt ranh giới phù hợp với câu hỏi',
            'Đổ lỗi cho cá nhân trong khi cấu trúc tạo ra hành vi',
            'Can thiệp vào tham số (thêm tiền, thêm người) và kỳ vọng thay đổi lớn',
            'Bỏ qua độ trễ — kết luận "không hiệu quả" quá sớm hoặc can thiệp quá tay'
        ],
        advanced: `
            <h5>Điểm đòn bẩy — từ yếu đến mạnh (rút gọn từ danh sách 12 điểm của Donella Meadows)</h5>
            <ol>
                <li><strong>Tham số, con số</strong> (ngân sách, thuế, số người) — dễ chỉnh nhất, tác động yếu nhất</li>
                <li>Kích thước bộ đệm, cấu trúc dòng chảy vật chất</li>
                <li>Độ dài các độ trễ</li>
                <li>Sức mạnh các vòng phản hồi</li>
                <li><strong>Dòng thông tin</strong> — ai biết gì, khi nào</li>
                <li><strong>Luật chơi</strong> — khuyến khích, ràng buộc, hình phạt</li>
                <li>Khả năng tự tổ chức, tự thay đổi cấu trúc</li>
                <li><strong>Mục tiêu</strong> của hệ thống</li>
                <li><strong>Mô thức tư duy</strong> (paradigm) — khó thay đổi nhất, tác động mạnh nhất</li>
            </ol>
            <div class="tip-box">💡 Ví dụ về dòng thông tin: đặt đồng hồ điện ở hành lang (thay vì trong tầng hầm) giúp các hộ gia đình tự giảm tiêu thụ — không cần thay đổi giá điện.</div>
            <p><em>"Mọi hệ thống được thiết kế hoàn hảo để tạo ra đúng kết quả mà nó đang tạo ra."</em> Muốn kết quả khác, phải thiết kế lại hệ thống.</p>
        `,
        checklist: [
            'Vấn đề có lặp lại theo xu hướng không?',
            'Đã vẽ các vòng phản hồi và độ trễ?',
            'Có khớp với mẫu hệ thống quen thuộc nào?',
            'Can thiệp đang ở tầng tham số hay tầng cấu trúc?'
        ]
    }
};
