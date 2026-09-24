// Problem Solving - Pitfalls (bẫy tư duy)
// Schema riêng cho bẫy (renderer tự bỏ qua trường không có):
//   what, signs (dấu hiệu), causes (vì sao mắc), example, antidotes (cách phòng tránh), advanced, checklist
const pitfallsData = {
    'jumping-solutions': {
        icon: '🦘',
        title: 'Nhảy Vào Giải Pháp',
        category: 'pitfalls',
        level: 'beginner',
        connections: ['define-problem', 'ps-process', 'xy-problem', 'mental-set'],
        summary: 'Đề xuất và triển khai giải pháp trước khi hiểu rõ vấn đề. Đây là bẫy phổ biến nhất — và đắt nhất, vì ta có thể giải xuất sắc một vấn đề không tồn tại.',
        what: `
            <p>Não người thích hành động và khó chịu với sự mơ hồ. Khi gặp vấn đề, nó lập tức với lấy giải pháp gần nhất — thường là giải pháp đã dùng lần trước hoặc thuộc chuyên môn của mình.</p>
            <div class="example-box">🗣️ Dấu hiệu ngôn ngữ: "Chúng ta cần…", "Cứ làm X là xong", "Vấn đề là chưa có Y" — câu mô tả vấn đề đã chứa sẵn giải pháp.</div>
        `,
        signs: [
            'Cuộc họp mở đầu bằng "Chúng ta nên làm…"',
            'Problem statement chứa sẵn giải pháp ("vấn đề là thiếu app")',
            'Không ai có số liệu về hiện trạng',
            'Tranh luận giữa các giải pháp thay vì về vấn đề',
            '"Lần trước cũng thế, cứ làm như lần trước"'
        ],
        causes: [
            'Áp lực thời gian và thiên hướng hành động — "làm gì đó" cảm giác tốt hơn "suy nghĩ thêm"',
            'Vấn đề trông quen, nhận diện sai là vấn đề cũ',
            'Muốn thể hiện năng lực, nhanh nhạy trước sếp/đồng nghiệp',
            'Văn hoá tổ chức khen thưởng người chữa cháy hơn người phòng cháy'
        ],
        example: `
            <p><strong>Tình huống:</strong> tỷ lệ nghỉ việc tăng → ban lãnh đạo quyết định tăng lương 10% toàn công ty (tốn nhiều tỷ đồng/năm). Sáu tháng sau, tỷ lệ nghỉ việc gần như không đổi.</p>
            <p><strong>Nếu hiểu vấn đề trước:</strong> phỏng vấn nghỉ việc cho thấy 70% người rời đi thuộc 3 phòng ban có cùng một kiểu quản lý; lý do hàng đầu là "quản lý trực tiếp" và "không thấy lộ trình phát triển". Giải pháp đúng: đào tạo/thay đổi quản lý và xây lộ trình nghề nghiệp — rẻ hơn nhiều và hiệu quả hơn.</p>
        `,
        antidotes: [
            'Bắt buộc viết problem statement có số liệu trước khi bàn giải pháp',
            'Quy tắc họp: 15 phút đầu chỉ nói về vấn đề và dữ liệu',
            'Hỏi: "Làm sao ta biết đây là vấn đề thật?" và "Nếu giải pháp thành công, chỉ số nào sẽ thay đổi?"',
            'Luôn tạo ít nhất 3 phương án trước khi chọn',
            'Viết ra các giả định của giải pháp và kiểm tra giả định rủi ro nhất'
        ],
        advanced: `
            <h5>Khi nào hành động nhanh là đúng?</h5>
            <p>Với vấn đề "rõ ràng" (theo Cynefin) — đã gặp nhiều lần, giải pháp đã được kiểm chứng — hoặc khủng hoảng cần khống chế, hành động nhanh là hợp lý. Bẫy nằm ở chỗ <em>tưởng</em> vấn đề là rõ ràng trong khi không phải.</p>
            <h5>Hội tụ sớm</h5>
            <p>Trong nhóm, khi một giải pháp được nêu ra sớm, các cuộc thảo luận sau thường xoay quanh nó (hiệu ứng mỏ neo). Tạo phương án riêng rẽ trước khi chia sẻ giúp tránh hội tụ quá sớm.</p>
        `,
        checklist: [
            'Đã có problem statement không chứa giải pháp?',
            'Có dữ liệu về hiện trạng chưa?',
            'Đã có ít nhất 3 phương án?',
            'Biết chỉ số nào sẽ thay đổi nếu thành công?'
        ]
    },

    'symptom-fixing': {
        icon: '🩹',
        title: 'Chữa Triệu Chứng',
        category: 'pitfalls',
        level: 'beginner',
        connections: ['root-cause', '5-whys', 'systems-thinking', 'second-order'],
        summary: 'Xử lý biểu hiện bề mặt mà không động tới nguyên nhân — vấn đề quay lại, thậm chí nặng hơn. Biện pháp tạm thời là cần thiết, nhưng chỉ khi đi kèm kế hoạch xử lý gốc.',
        what: `
            <p>Phân biệt hai loại hành động — cả hai đều cần, nhưng không được nhầm lẫn:</p>
            <table>
                <tr><th></th><th>Biện pháp tạm thời (khống chế)</th><th>Biện pháp gốc (vĩnh viễn)</th></tr>
                <tr><td>Mục đích</td><td>Ngăn thiệt hại ngay</td><td>Ngăn tái diễn</td></tr>
                <tr><td>Ví dụ</td><td>Khởi động lại server</td><td>Sửa memory leak</td></tr>
                <tr><td>Rủi ro nếu chỉ làm cái này</td><td>Vấn đề quay lại, chi phí tăng dần</td><td>Thiệt hại tiếp diễn trong lúc chờ sửa</td></tr>
            </table>
            <p>Bẫy xảy ra khi biện pháp tạm thời "đủ tốt" để mọi người quên luôn biện pháp gốc — và workaround dần trở thành quy trình chính thức.</p>
        `,
        signs: [
            'Cùng một sự cố lặp đi lặp lại',
            'Đội ngũ liên tục "chữa cháy", không có thời gian cải tiến',
            'Giải pháp quen thuộc là "khởi động lại", "thêm người", "nhắc nhở"',
            'Chi phí xử lý tăng dần theo thời gian',
            'Workaround được ghi vào tài liệu hướng dẫn như cách làm chuẩn'
        ],
        causes: [
            'Triệu chứng dễ thấy, nguyên nhân khó thấy',
            'Áp lực kết quả ngắn hạn',
            'Người chữa cháy được khen, người phòng cháy không ai thấy',
            'Độ trễ giữa nguyên nhân và kết quả khiến liên hệ bị che khuất'
        ],
        example: `
            <p><strong>Server chậm dần mỗi ngày:</strong> đội vận hành cài lịch khởi động lại lúc 3h sáng. Chạy ổn 6 tháng. Rồi đến ngày khuyến mãi lớn, lượng truy cập gấp 5 lần — bộ nhớ cạn ngay trong giờ cao điểm, hệ thống sập. Nguyên nhân thật: một memory leak có từ 6 tháng trước, bị việc khởi động lại hằng đêm che giấu.</p>
            <p><strong>Đời thường:</strong> uống thuốc giảm đau lưng mỗi ngày thay vì chỉnh tư thế ngồi và bàn ghế làm việc.</p>
        `,
        antidotes: [
            'Luôn tách 2 loại biện pháp: tạm thời + gốc, và đặt hạn chót cho biện pháp gốc',
            'Theo dõi tần suất tái diễn — sự cố lặp lại từ lần thứ 2 phải có phân tích nguyên nhân',
            'Hỏi: "Nếu chỉ làm thế này, 3 tháng nữa vấn đề còn không?"',
            'Dành thời gian cố định (ví dụ 20% mỗi sprint) cho việc sửa gốc',
            'Ghi nhận và khen thưởng những người ngăn được sự cố, không chỉ người dập lửa'
        ],
        advanced: `
            <h5>Mẫu hệ thống "Chuyển gánh nặng"</h5>
            <p>Mỗi lần dùng giải pháp triệu chứng, áp lực phải sửa gốc giảm đi — và năng lực sửa gốc teo dần. Tổ chức ngày càng phụ thuộc vào giải pháp tạm thời.</p>
            <h5>Bẫy năng lực (capability trap)</h5>
            <p>Nghiên cứu của Repenning & Sterman: khi quá bận chữa cháy, tổ chức cắt giảm thời gian cải tiến → năng lực giảm → nhiều sự cố hơn → càng bận chữa cháy. Tiêu đề bài báo của họ nói lên tất cả: <em>"Không ai được khen vì sửa những vấn đề chưa từng xảy ra."</em></p>
        `,
        checklist: [
            'Đây là biện pháp tạm thời hay gốc?',
            'Biện pháp gốc có người và hạn chót chưa?',
            'Sự cố này đã xảy ra bao nhiêu lần?',
            'Có workaround nào đang thành "chuẩn"?'
        ]
    },

    'confirmation-bias': {
        icon: '🔍',
        title: 'Confirmation Bias',
        category: 'pitfalls',
        level: 'beginner',
        connections: ['hypothesis-driven', 'groupthink', 'premortem', 'six-hats'],
        summary: 'Xu hướng tìm kiếm, diễn giải và ghi nhớ thông tin xác nhận điều mình đã tin. Trong giải quyết vấn đề, nó khiến ta "chứng minh" được nguyên nhân mình đoán từ đầu — kể cả khi sai.',
        origin: 'Nhà tâm lý học Peter Wason nghiên cứu qua thí nghiệm "2-4-6" (1960) và bài toán chọn thẻ (1966).',
        what: `
            <div class="example-box">
                <strong>Thí nghiệm 2-4-6:</strong> Người thí nghiệm nói có một quy tắc, và dãy "2-4-6" thoả quy tắc đó. Người tham gia đưa ra các dãy khác để thử, được trả lời "đúng/sai", rồi đoán quy tắc.<br><br>
                Đa số thử "8-10-12", "20-22-24"… — toàn các dãy <em>xác nhận</em> giả thuyết "số chẵn tăng dần 2 đơn vị" — nhận được "đúng" liên tục, và tự tin công bố quy tắc đó. <strong>Sai.</strong> Quy tắc thật là "ba số tăng dần bất kỳ". Chỉ ai thử những dãy có thể <em>bác bỏ</em> giả thuyết (như "1-2-3" hay "5-10-100") mới tìm ra.
            </div>
            <p>Bài học: bằng chứng xác nhận dễ tìm và dễ chịu, nhưng thường ít giá trị thông tin. Một bằng chứng bác bỏ có thể đáng giá hơn mười bằng chứng xác nhận.</p>
        `,
        signs: [
            'Chỉ tìm dữ liệu ủng hộ giả thuyết của mình',
            'Dữ liệu trái ngược bị gạt đi là "ngoại lệ", "dữ liệu lỗi"',
            'Đặt câu hỏi khảo sát dẫn dắt ("Bạn có đồng ý rằng giá quá cao?")',
            'Chỉ hỏi ý kiến những người đồng quan điểm',
            'Càng tìm hiểu càng chắc chắn, dù không có dữ liệu mới đáng kể'
        ],
        causes: [
            'Tiết kiệm năng lượng nhận thức — xác nhận dễ hơn xem xét lại',
            'Cái tôi: muốn mình đúng, ngại thừa nhận sai',
            'Thông tin xác nhận dễ nhớ và dễ chịu hơn',
            'Môi trường "buồng vang": mạng xã hội, nhóm đồng nhất'
        ],
        example: `
            <p><strong>Tình huống:</strong> Một PM tin rằng tính năng mới ít người dùng vì giao diện rối. Chị xem heatmap, thấy người dùng click lung tung → "đúng rồi, UI rối". Chị đề xuất thiết kế lại toàn bộ.</p>
            <p><strong>Dữ liệu bị bỏ qua:</strong> 70% người dùng chưa từng mở màn hình chứa tính năng — họ không biết nó tồn tại. Heatmap chỉ ghi nhận 30% người đã vào. Vấn đề thật là <em>khả năng khám phá</em>, không phải giao diện.</p>
            <p><strong>Câu hỏi đáng lẽ nên đặt:</strong> "Dữ liệu nào sẽ cho thấy UI <em>không</em> phải vấn đề?"</p>
        `,
        antidotes: [
            'Chủ động hỏi: "Điều gì sẽ chứng minh tôi sai?" và đi tìm nó',
            'Viết tiêu chí đánh giá trước khi xem dữ liệu',
            'Đưa ra nhiều giả thuyết cạnh tranh và kiểm tra song song',
            'Chỉ định người đóng vai phản biện (devil\'s advocate) hoặc nhóm "đỏ"',
            'Hỏi ý kiến người có quan điểm khác; dùng câu hỏi khảo sát trung lập'
        ],
        advanced: `
            <h5>Phân tích giả thuyết cạnh tranh (ACH)</h5>
            <p>Phương pháp của Richards Heuer (CIA): liệt kê mọi giả thuyết thành cột, mọi bằng chứng thành hàng; đánh giá mỗi bằng chứng <em>nhất quán</em> hay <em>mâu thuẫn</em> với từng giả thuyết. Chọn giả thuyết <strong>ít mâu thuẫn nhất</strong>, không phải giả thuyết có nhiều bằng chứng ủng hộ nhất — vì một bằng chứng có thể ủng hộ nhiều giả thuyết cùng lúc.</p>
            <h5>Tính bác bỏ được (Karl Popper)</h5>
            <p>Một lý thuyết khoa học phải chỉ ra được điều gì sẽ bác bỏ nó. Áp dụng cho giả thuyết kinh doanh: nếu mọi kết quả đều "phù hợp" với giả thuyết, nó không nói lên gì cả.</p>
            <h5>Lý luận có động cơ</h5>
            <p>Khi kết luận ảnh hưởng tới lợi ích hay danh tính, người ta dùng trí thông minh để bảo vệ niềm tin thay vì tìm sự thật — người càng giỏi lập luận càng giỏi bào chữa.</p>
        `,
        checklist: [
            'Đã tìm bằng chứng có thể bác bỏ giả thuyết?',
            'Tiêu chí được đặt trước khi xem dữ liệu?',
            'Có ít nhất 2 giả thuyết cạnh tranh?',
            'Đã hỏi người có quan điểm khác?'
        ]
    },

    'analysis-paralysis': {
        icon: '⏳',
        title: 'Analysis Paralysis',
        category: 'pitfalls',
        level: 'beginner',
        connections: ['prioritization', 'decision-matrix', 'pareto', 'cynefin'],
        summary: 'Phân tích mãi, chờ thêm dữ liệu mãi, không quyết định — trong khi cơ hội trôi qua. Không quyết định cũng là một quyết định, và thường là quyết định tệ.',
        what: `
            <p>Phân tích kỹ là tốt — cho tới khi <strong>chi phí của việc chờ đợi</strong> lớn hơn giá trị của thông tin thêm. Nhiều quyết định có thể đảo ngược; với chúng, hành động và học nhanh thường tốt hơn phân tích thêm.</p>
            <div class="example-box">💬 Jeff Bezos (thư cổ đông 2016): hầu hết quyết định nên được đưa ra khi có khoảng <strong>70%</strong> thông tin mong muốn. Chờ tới 90% thì trong đa số trường hợp là đã quá chậm.</div>
        `,
        signs: [
            'Liên tục "cần thêm dữ liệu" nhưng không nói rõ dữ liệu nào sẽ thay đổi quyết định',
            'Cùng một cuộc thảo luận lặp lại qua nhiều cuộc họp',
            'Danh sách lựa chọn ngày càng dài thay vì ngắn đi',
            'Deadline trôi qua mà vẫn "đang cân nhắc"',
            'Cảm giác kiệt sức, lo âu khi phải chọn'
        ],
        causes: [
            'Sợ sai và sợ chịu trách nhiệm',
            'Cầu toàn: luôn muốn phương án "tốt nhất" thay vì "đủ tốt"',
            'Quá nhiều lựa chọn — thí nghiệm nổi tiếng về mứt (Iyengar & Lepper, 2000): quầy bày 24 loại thu hút nhiều người xem hơn, nhưng quầy chỉ bày 6 loại bán được nhiều hơn hẳn',
            'Không phân biệt quyết định đảo ngược được và không đảo ngược được',
            'Không có tiêu chí và deadline rõ ràng'
        ],
        example: `
            <p><strong>Tình huống:</strong> Một startup 5 người mất 4 tháng so sánh 3 công nghệ để xây sản phẩm, làm benchmark, đọc hàng trăm bài viết. Trong thời gian đó, đối thủ ra mắt và có 10.000 người dùng đầu tiên.</p>
            <p><strong>Nhìn lại:</strong> cả 3 công nghệ đều đủ tốt cho quy mô 100.000 người dùng đầu tiên; lựa chọn này có thể thay đổi sau (chi phí chuyển đổi vừa phải). Đây là "cửa hai chiều" — nên quyết trong 1 tuần.</p>
        `,
        antidotes: [
            'Phân loại quyết định: <strong>cửa hai chiều</strong> (đảo ngược được) → quyết nhanh, sửa sau; <strong>cửa một chiều</strong> → cân nhắc kỹ',
            '<strong>Satisficing:</strong> đặt tiêu chí "đủ tốt" trước, chọn phương án đầu tiên đạt tiêu chí',
            'Đặt deadline cho quyết định (timebox) và người chốt cuối cùng',
            'Giới hạn số lựa chọn so sánh (tối đa 3–4)',
            'Hỏi: "Dữ liệu nào sẽ làm tôi đổi ý?" — nếu không có, hãy quyết định',
            'Thử nghiệm nhỏ thay vì phân tích thêm'
        ],
        advanced: `
            <h5>Satisficing (Herbert Simon)</h5>
            <p>Nhà kinh tế đoạt giải Nobel Herbert Simon chỉ ra con người có "lý trí giới hạn" — không thể xét mọi phương án. Chiến lược hợp lý là "satisfice" (satisfy + suffice): chọn phương án đủ tốt đầu tiên. Nghiên cứu của Barry Schwartz cho thấy người "tối đa hoá" thường đạt kết quả khách quan tốt hơn một chút nhưng kém hài lòng hơn đáng kể.</p>
            <h5>Giá trị của thông tin</h5>
            <p>Thông tin chỉ có giá trị nếu nó có thể thay đổi quyết định. Trước khi thu thập thêm, hỏi: kết quả nào của phân tích này sẽ khiến tôi chọn khác?</p>
            <h5>"Disagree and commit"</h5>
            <p>Trong nhóm, không cần mọi người đồng ý mới hành động. Sau khi thảo luận đủ, người có thẩm quyền chốt; những người không đồng ý vẫn cam kết thực hiện hết sức — và cả nhóm đánh giá lại ở mốc đã hẹn.</p>
        `,
        checklist: [
            'Đây là cửa một chiều hay hai chiều?',
            'Tiêu chí "đủ tốt" là gì?',
            'Hạn chót quyết định là khi nào?',
            'Dữ liệu nào sẽ thay đổi quyết định? Nếu không có — quyết đi.'
        ]
    },

    'xy-problem': {
        icon: '🔀',
        title: 'XY Problem',
        category: 'pitfalls',
        level: 'intermediate',
        connections: ['define-problem', 'jumping-solutions', 'reframing', 'design-thinking'],
        summary: 'Người hỏi muốn giải vấn đề X, tự nghĩ ra cách Y, gặp khó với Y và chỉ hỏi về Y. Mọi người tốn công giúp Y — trong khi có cách tốt hơn nhiều cho X nếu biết được mục tiêu thật.',
        origin: 'Thuật ngữ phổ biến trong cộng đồng lập trình và diễn đàn hỗ trợ kỹ thuật, nhưng hiện tượng xảy ra ở mọi nơi có người yêu cầu và người thực hiện.',
        what: `
            <ol>
                <li>Người dùng muốn làm <strong>X</strong>.</li>
                <li>Họ không biết cách làm X, nhưng nghĩ rằng <strong>Y</strong> sẽ giúp.</li>
                <li>Họ không biết cách làm Y.</li>
                <li>Họ hỏi về Y.</li>
                <li>Người khác cố giúp Y, bối rối vì Y có vẻ kỳ lạ.</li>
                <li>Sau nhiều trao đổi mới lộ ra X — và Y hoá ra không phải cách phù hợp.</li>
            </ol>
            <p>Với người thực hiện (kỹ sư, nhà tư vấn, nhân viên hỗ trợ), bẫy là <strong>làm đúng yêu cầu nhưng sai nhu cầu</strong>.</p>
        `,
        signs: [
            'Câu hỏi "làm sao để [thao tác kỹ thuật lạ]" không kèm mục đích',
            'Giải pháp được yêu cầu nghe phức tạp hoặc kỳ quặc bất thường',
            'Yêu cầu từ khách hàng dạng tính năng cụ thể ("thêm nút xuất Excel") mà không nói để làm gì',
            'Sau khi giao đúng yêu cầu, người yêu cầu vẫn không hài lòng'
        ],
        causes: [
            'Người hỏi đã tự chọn giải pháp và nghĩ bối cảnh không liên quan',
            'Ngại giải thích dài hoặc sợ bị cho là không biết',
            'Biểu mẫu yêu cầu chỉ có ô "cần gì", không có ô "để làm gì"',
            'Người thực hiện ngại hỏi lại vì sợ bị coi là chậm hiểu'
        ],
        example: `
            <h5>Kỹ thuật</h5>
            <p>❓ "Làm sao lấy 3 ký tự cuối của tên file?"<br>
            🎯 Mục đích thật: xác định loại file.<br>
            ⚠️ Nhưng phần mở rộng có thể dài 4 ký tự (.docx, .jpeg) hoặc không có. → Dùng hàm lấy phần mở rộng có sẵn, hoặc kiểm tra kiểu nội dung (MIME type) nếu cần chắc chắn.</p>
            <h5>Kinh doanh</h5>
            <p>❓ Khách hàng yêu cầu: "Thêm chức năng xuất báo cáo ra Excel."<br>
            🎯 Hỏi lại: "Anh/chị sẽ làm gì với file Excel đó?" → "Mỗi sáng thứ Hai tôi tổng hợp số liệu tuần gửi sếp."<br>
            ✅ Giải pháp tốt hơn: email tự động gửi báo cáo tổng hợp mỗi sáng thứ Hai — tiết kiệm cho khách 1 giờ mỗi tuần thay vì chỉ cho họ một file.</p>
        `,
        antidotes: [
            '<strong>Khi hỏi:</strong> nêu mục tiêu cuối (X) + cách đã thử (Y) + vì sao chọn Y',
            '<strong>Khi được hỏi:</strong> "Anh/chị đang muốn đạt điều gì?" / "Làm xong việc này thì sẽ dùng nó để làm gì?"',
            'Dùng mẫu yêu cầu "Là [ai], tôi muốn [gì], để [mục đích]" (user story)',
            'Trước khi làm yêu cầu kỳ lạ, dành 2 phút hỏi bối cảnh'
        ],
        advanced: `
            <h5>Nhu cầu – yêu cầu – giải pháp</h5>
            <p>Trong phân tích nghiệp vụ, phân biệt ba tầng: <strong>nhu cầu</strong> (vấn đề cần giải), <strong>yêu cầu</strong> (điều kiện giải pháp phải đáp ứng), <strong>giải pháp</strong> (cách cụ thể). Khách hàng thường nói ở tầng giải pháp; người làm giỏi kéo cuộc trò chuyện về tầng nhu cầu.</p>
            <h5>"Con ngựa nhanh hơn"</h5>
            <p>Câu "Nếu tôi hỏi khách muốn gì, họ sẽ nói một con ngựa nhanh hơn" thường được gán cho Henry Ford (không có bằng chứng ông từng nói). Dù vậy nó minh hoạ XY problem: "ngựa nhanh hơn" là Y; X là "đi từ A đến B nhanh hơn".</p>
            <h5>Jobs To Be Done</h5>
            <p>Hỏi về "công việc" khách hàng muốn hoàn thành thay vì tính năng họ yêu cầu — một cách hệ thống để tránh XY problem trong phát triển sản phẩm.</p>
        `,
        checklist: [
            'Đã biết mục tiêu cuối của yêu cầu này chưa?',
            'Yêu cầu có vẻ kỳ lạ? Đã hỏi "để làm gì?"',
            'Có cách nào đơn giản hơn để đạt mục tiêu cuối?'
        ]
    },

    'sunk-cost': {
        icon: '💸',
        title: 'Sunk Cost Fallacy',
        category: 'pitfalls',
        level: 'intermediate',
        connections: ['second-order', 'premortem', 'decision-matrix', 'confirmation-bias'],
        summary: 'Tiếp tục đổ tiền, thời gian, công sức vào một hướng đi chỉ vì đã lỡ đầu tư nhiều — dù nhìn về phía trước, dừng lại mới là lựa chọn tốt hơn. Chi phí đã bỏ ra không lấy lại được, nên không nên quyết định thay ta.',
        origin: 'Nghiên cứu kinh điển của Arkes & Blumer (1985). Còn gọi là "Concorde fallacy" — Anh và Pháp tiếp tục rót tiền vào máy bay siêu thanh Concorde dù đã thấy rõ nó khó có lãi.',
        what: `
            <p><strong>Chi phí chìm</strong> = chi phí đã bỏ ra và không thể thu hồi dù quyết định tiếp theo là gì. Vì nó giống nhau ở mọi phương án, về lý thuyết nó không nên ảnh hưởng quyết định. Chỉ <strong>chi phí và lợi ích tương lai</strong> mới quan trọng.</p>
            <div class="example-box"><strong>Thí nghiệm vé trượt tuyết (Arkes & Blumer):</strong> Bạn đã mua vé 100 USD đi khu trượt tuyết A, rồi mua thêm vé 50 USD đi khu B — nơi bạn thích hơn. Sau đó phát hiện hai chuyến trùng ngày, vé không hoàn được. Đa số người tham gia chọn đi A — nơi họ <em>kém thích hơn</em> — chỉ vì vé đắt hơn.</div>
        `,
        signs: [
            '"Đã lỡ bỏ ra nhiều thế rồi…"',
            '"Bỏ bây giờ thì phí công sức trước giờ"',
            'Tiếp tục dự án dù mọi chỉ số đều xấu đi',
            'Tăng đầu tư sau mỗi lần thất bại để "gỡ lại"',
            'Ngại thừa nhận sai lầm công khai'
        ],
        causes: [
            'Né tránh thua lỗ: nỗi đau mất mát mạnh hơn niềm vui được cùng mức (Kahneman & Tversky)',
            'Muốn giữ hình ảnh nhất quán, không muốn bị coi là đã quyết định sai',
            'Hy vọng "sắp thành công rồi"',
            'Người ra quyết định ban đầu cũng là người đánh giá có nên tiếp tục'
        ],
        example: `
            <p><strong>Tình huống:</strong> Công ty đã chi 2 tỷ đồng xây phần mềm quản lý nội bộ; cần thêm 1,5 tỷ và 8 tháng nữa. Một phần mềm SaaS có sẵn đáp ứng 90% nhu cầu với giá 300 triệu/năm, triển khai trong 1 tháng.</p>
            <p><strong>Lập luận sai:</strong> "Đã đầu tư 2 tỷ rồi, bỏ thì phí."</p>
            <p><strong>Lập luận đúng:</strong> 2 tỷ đã chi là như nhau ở cả hai phương án. So sánh <em>từ hôm nay trở đi</em>: 1,5 tỷ + 8 tháng chờ + rủi ro trễ tiếp, so với 300 triệu/năm + chấp nhận thiếu 10% tính năng. Nếu SaaS tốt hơn cho tương lai → chuyển.</p>
        `,
        antidotes: [
            '<strong>Câu hỏi làm lại từ đầu:</strong> "Nếu hôm nay bắt đầu từ con số 0, biết những gì đã biết, tôi có chọn đầu tư vào đây không?"',
            'Đặt <strong>tiêu chí dừng</strong> trước khi bắt đầu dự án ("nếu sau 3 tháng không đạt X, dừng")',
            'Tách người ra quyết định ban đầu khỏi người đánh giá có nên tiếp tục',
            'Bình thường hoá việc dừng dự án — coi đó là quyết định tốt, không phải thất bại cá nhân',
            'Luôn tính chi phí cơ hội: nguồn lực này nếu dùng chỗ khác thì được gì?'
        ],
        advanced: `
            <h5>Leo thang cam kết (Barry Staw)</h5>
            <p>Khi một quyết định bắt đầu cho kết quả xấu, người ra quyết định có xu hướng <em>tăng</em> đầu tư để chứng minh mình đúng — đặc biệt khi họ chịu trách nhiệm cá nhân về quyết định ban đầu.</p>
            <h5>Kiên trì hay chi phí chìm?</h5>
            <p>Không phải cứ tiếp tục là sai. Kiên trì hợp lý khi <em>đánh giá hướng tới tương lai</em> vẫn cho thấy hướng đi đúng (có tiến bộ, có tín hiệu tốt). Chi phí chìm là khi lý do duy nhất để tiếp tục là quá khứ.</p>
            <h5>Giá trị của việc bỏ cuộc</h5>
            <p>Annie Duke (sách "Quit") lập luận rằng bỏ cuộc đúng lúc là một kỹ năng: người giỏi đặt tiêu chí dừng từ trước và tôn trọng chúng, vì khi đang ở trong cuộc, cảm xúc gần như luôn thúc ta tiếp tục.</p>
        `,
        checklist: [
            'Lý do tiếp tục có dựa trên tương lai hay quá khứ?',
            'Nếu bắt đầu lại từ đầu, tôi có chọn thế này?',
            'Đã đặt tiêu chí dừng chưa?',
            'Chi phí cơ hội là gì?'
        ]
    },

    'hammer-nail': {
        icon: '🔨',
        title: 'Law of the Instrument',
        category: 'pitfalls',
        level: 'intermediate',
        connections: ['circle-competence', 'mental-set', 'jumping-solutions', 'first-principles'],
        summary: '"Nếu chỉ có cái búa, mọi thứ trông như cái đinh." Ta có xu hướng định nghĩa vấn đề theo công cụ và chuyên môn quen thuộc — và bỏ lỡ giải pháp phù hợp hơn.',
        origin: 'Nhà tâm lý học Abraham Maslow (1966): "Tôi cho rằng thật hấp dẫn khi đối xử với mọi thứ như cái đinh, nếu công cụ duy nhất bạn có là cái búa." Abraham Kaplan mô tả ý tương tự năm 1964.',
        what: `
            <p>Chuyên môn là tài sản — nhưng nó cũng là lăng kính. Người ta thấy vấn đề qua thứ mình giỏi, và vô thức định nghĩa vấn đề sao cho khớp với công cụ mình có.</p>
            <div class="example-box">
                <strong>Doanh số giảm — mỗi phòng ban một "cái búa":</strong><br>
                💻 IT: "Cần app mới." · 📣 Marketing: "Cần tăng quảng cáo." · 💰 Sales: "Cần giảm giá." · 📊 Tài chính: "Cần cắt chi phí."<br>
                🔎 Nguyên nhân thật (sau khi phân tích dữ liệu): giao hàng chậm vì kho quá tải — không nằm trong chuyên môn của ai trong phòng họp.
            </div>
        `,
        signs: [
            'Giải pháp luôn nằm trong chuyên môn của người đề xuất',
            'Câu hỏi "làm sao áp dụng X vào đây?" xuất hiện trước câu hỏi "vấn đề là gì?"',
            'Một framework/công nghệ được dùng cho mọi dự án',
            'Từ chối giải pháp đơn giản vì "không đủ chuyên nghiệp" hay "không đủ hiện đại"'
        ],
        causes: [
            'Công cụ quen thuộc luôn hiện ra đầu tiên trong đầu',
            'Đã đầu tư nhiều để học công cụ → muốn dùng',
            'Bản sắc nghề nghiệp gắn với công cụ',
            'Động cơ lợi ích: nhà tư vấn/nhà cung cấp bán thứ họ có'
        ],
        example: `
            <p><strong>Cơn sốt công nghệ:</strong> một đội muốn dùng machine learning để phân loại yêu cầu hỗ trợ khách hàng. Sau khi phân tích, 85% yêu cầu rơi vào 5 loại có từ khoá rất rõ ràng — một bộ quy tắc đơn giản giải quyết được trong 2 ngày, thay vì 3 tháng xây mô hình.</p>
            <p><strong>Ngược lại:</strong> một kế toán giỏi Excel cố làm hệ thống quản lý kho cho 5 chi nhánh bằng file Excel chia sẻ — cho tới khi dữ liệu bị ghi đè hằng tuần. Lúc này "cái búa" quen thuộc đã không còn phù hợp.</p>
        `,
        antidotes: [
            'Định nghĩa vấn đề độc lập với bất kỳ công cụ nào',
            'Hỏi: "Nếu không được dùng [công cụ quen thuộc], mình sẽ giải thế nào?"',
            'Bắt đầu với giải pháp đơn giản nhất có thể làm mốc so sánh',
            'Thành lập nhóm đa chuyên môn cho vấn đề quan trọng',
            'Chủ động học công cụ từ các lĩnh vực khác để mở rộng "hộp đồ nghề"'
        ],
        advanced: `
            <h5>"Hội chứng người cầm búa" (Munger)</h5>
            <p>Charlie Munger cho rằng liều thuốc là xây dựng một "mạng lưới mô hình tư duy" từ nhiều ngành — không cần sâu tất cả, nhưng đủ để nhận ra khi vấn đề nằm ngoài chuyên môn của mình.</p>
            <h5>Golden hammer trong phần mềm</h5>
            <p>Một anti-pattern kinh điển: dùng một công nghệ quen thuộc (một database, một framework) cho mọi bài toán, kể cả khi nó không phù hợp.</p>
            <h5>Chuyên gia và người tổng quát</h5>
            <p>Chuyên gia giải sâu, người tổng quát nhận diện đúng loại vấn đề. Nhóm mạnh cần cả hai — và cần người đặt câu hỏi "đây thực sự là vấn đề gì?" trước khi các chuyên gia rút búa.</p>
        `,
        checklist: [
            'Giải pháp này có trùng với chuyên môn của người đề xuất?',
            'Đã thử nghĩ giải pháp không dùng công cụ quen thuộc?',
            'Giải pháp đơn giản nhất là gì?',
            'Có góc nhìn từ chuyên môn khác chưa?'
        ]
    },

    'groupthink': {
        icon: '🐑',
        title: 'Groupthink',
        category: 'pitfalls',
        level: 'intermediate',
        connections: ['six-hats', 'premortem', 'confirmation-bias', 'brainstorming'],
        summary: 'Nhóm gắn kết ưu tiên sự đồng thuận hơn đánh giá thực tế: không ai muốn phá bầu không khí, lo ngại bị giữ trong lòng, và nhóm tự tin đi tới một quyết định mà nhiều thành viên thầm nghi ngờ.',
        origin: 'Nhà tâm lý học Irving Janis (1972), qua phân tích các thất bại chính sách như cuộc đổ bộ Vịnh Con Lợn (1961).',
        what: `
            <p>Đồng thuận nhanh <strong>không</strong> đồng nghĩa với quyết định tốt. Nhóm càng gắn kết, lãnh đạo càng mạnh, áp lực thời gian càng cao thì nguy cơ groupthink càng lớn.</p>
            <div class="example-box"><strong>Vịnh Con Lợn (1961):</strong> Tổng thống Kennedy và nhóm cố vấn tài năng thông qua kế hoạch đổ bộ lên Cuba với những giả định sai rõ ràng. Nhiều cố vấn có nghi ngờ nhưng im lặng. Một năm sau, trong Khủng hoảng tên lửa Cuba, Kennedy thay đổi cách làm: cố ý vắng mặt ở một số cuộc họp, chia nhóm thảo luận độc lập, mời chuyên gia bên ngoài, giao người đóng vai phản biện — và cách xử lý khủng hoảng được đánh giá tốt hơn hẳn.</div>
        `,
        signs: [
            'Ảo tưởng bất khả chiến bại — quá lạc quan, coi thường rủi ro',
            'Hợp lý hoá tập thể — gạt đi các cảnh báo',
            'Tin vào "đạo đức vốn có" của nhóm',
            'Định kiến về bên ngoài — đối thủ "yếu", người phản đối "không hiểu"',
            'Áp lực trực tiếp lên người có ý kiến khác',
            'Tự kiểm duyệt — không nói ra nghi ngờ',
            'Ảo tưởng nhất trí — im lặng được hiểu là đồng ý',
            'Có người tự nhận vai "gác cổng", chặn thông tin trái chiều'
        ],
        causes: [
            'Nhóm quá gắn kết và đồng nhất về xuất thân, quan điểm',
            'Lãnh đạo nêu quan điểm trước',
            'Áp lực thời gian, căng thẳng cao',
            'Nhóm cô lập với bên ngoài',
            'Không có quy trình ra quyết định rõ ràng'
        ],
        example: `
            <p><strong>Cuộc họp dự án:</strong> Giám đốc hào hứng: "Chúng ta sẽ ra mắt trong 6 tuần!" Cả phòng gật đầu. Sau buổi họp, ở quán cà phê, từng người lần lượt thừa nhận họ nghĩ cần ít nhất 12 tuần — nhưng không ai muốn là người "dội nước lạnh" khi ai cũng có vẻ đồng ý.</p>
            <p><strong>Nếu dùng quy trình tốt hơn:</strong> trước khi giám đốc công bố mục tiêu, mỗi người tự viết ước tính riêng rồi mở ra cùng lúc → khoảng ước tính 8–16 tuần lộ ra ngay, và cuộc thảo luận chuyển sang "điều gì khiến ước tính khác nhau?".</p>
        `,
        antidotes: [
            'Lãnh đạo phát biểu <strong>sau cùng</strong>',
            'Mỗi người viết ý kiến/ước tính riêng trước khi thảo luận; bình chọn ẩn danh',
            'Luân phiên giao người đóng vai phản biện (devil\'s advocate)',
            'Mời chuyên gia hoặc người ngoài đánh giá kế hoạch',
            'Chia thành các nhóm nhỏ độc lập cùng phân tích',
            'Tổ chức "cuộc họp cơ hội thứ hai" trước khi chốt quyết định lớn',
            'Xây dựng an toàn tâm lý — người nói ra lo ngại được cảm ơn, không bị phạt'
        ],
        advanced: `
            <h5>Nghịch lý Abilene</h5>
            <p>Jerry Harvey kể: một gia đình lái xe 80 km giữa trời nóng tới thị trấn Abilene ăn tối. Về nhà mới phát hiện <em>không ai</em> muốn đi — mỗi người tưởng những người khác muốn. Nhóm có thể cùng làm điều mà không thành viên nào muốn.</p>
            <h5>An toàn tâm lý</h5>
            <p>Amy Edmondson (Harvard) định nghĩa là niềm tin rằng nhóm an toàn để chấp nhận rủi ro giữa các cá nhân — nói ra lo ngại, đặt câu hỏi, thừa nhận sai lầm. Nghiên cứu Project Aristotle của Google tìm thấy đây là yếu tố quan trọng nhất phân biệt các đội hiệu quả cao.</p>
        `,
        checklist: [
            'Lãnh đạo đã nói trước chưa?',
            'Có ai đóng vai phản biện?',
            'Ý kiến được thu thập riêng trước khi thảo luận?',
            'Im lặng có đang bị hiểu là đồng ý?'
        ]
    },

    'mental-set': {
        icon: '🕯️',
        title: 'Lối Mòn Tư Duy',
        category: 'pitfalls',
        level: 'advanced',
        connections: ['hammer-nail', 'first-principles', 'analogy', 'scamper', 'reframing'],
        summary: 'Kinh nghiệm khiến ta cứ lặp lại cách giải quen thuộc dù có cách đơn giản hơn (hiệu ứng Einstellung), và chỉ nhìn đồ vật, tài nguyên theo công dụng thông thường của chúng (cố định chức năng).',
        origin: 'Abraham Luchins (1942) với thí nghiệm bình nước; Karl Duncker (1945) với bài toán cây nến.',
        what: `
            <h5>Hiệu ứng Einstellung — thí nghiệm bình nước</h5>
            <p>Người tham gia giải một loạt bài đong nước bằng 3 bình A, B, C. Các bài đầu đều giải bằng cùng công thức dài <strong>B − A − 2C</strong>. Sau đó là bài có thể giải bằng cách đơn giản hơn nhiều (như <strong>A − C</strong>). Phần lớn vẫn dùng công thức dài; khi gặp bài <em>chỉ</em> giải được bằng cách đơn giản, nhiều người bế tắc. Nhóm không làm các bài "mồi" thì tìm ra cách đơn giản ngay.</p>
            <h5>Cố định chức năng — bài toán cây nến</h5>
            <p>Cho một cây nến, một hộp đinh ghim và bao diêm. Nhiệm vụ: gắn nến lên tường sao cho sáp không nhỏ xuống bàn. Lời giải: <strong>đổ ghim ra, ghim chiếc hộp lên tường làm giá đỡ</strong>. Khi hộp đựng đầy ghim, người ta chỉ thấy nó là "đồ đựng ghim"; khi ghim được để riêng bên ngoài, nhiều người giải được hơn hẳn.</p>
        `,
        signs: [
            '"Chúng ta vẫn luôn làm thế này"',
            'Giải pháp mới giống hệt giải pháp cho vấn đề cũ',
            'Người mới hoặc người ngoài ngành thấy cách đơn giản mà chuyên gia bỏ lỡ',
            'Tài nguyên sẵn có bị bỏ qua vì "nó không dùng để làm việc đó"'
        ],
        causes: [
            'Kinh nghiệm tự động hoá suy nghĩ để tiết kiệm năng lượng',
            'Thành công trong quá khứ củng cố cách làm cũ',
            'Chuyên môn sâu: càng giỏi một cách, càng khó thấy cách khác',
            'Áp lực thời gian khiến não chọn con đường quen'
        ],
        example: `
            <p><strong>Cờ vua:</strong> nghiên cứu của Bilalić và cộng sự (2008) cho thấy khi thế cờ có một đòn chiếu hết quen thuộc (5 nước), nhiều kỳ thủ giỏi tìm ra nó — rồi bỏ lỡ cách chiếu hết ngắn hơn (3 nước) ngay trên bàn cờ. Theo dõi chuyển động mắt, họ vẫn nghĩ mình đang tìm cách tốt hơn, nhưng mắt cứ quay về các ô của lời giải quen.</p>
            <p><strong>Doanh nghiệp:</strong> Kodak có một kỹ sư chế tạo máy ảnh kỹ thuật số đầu tiên từ năm 1975, nhưng tư duy "chúng ta kiếm tiền từ phim" khiến công ty chậm chuyển đổi trong nhiều năm.</p>
            <p><strong>Đời thường:</strong> dùng đồng xu làm tua vít, dùng thẻ nhựa để cạo băng dính, dùng ấm siêu tốc luộc trứng khi đi công tác — là phá vỡ cố định chức năng.</p>
        `,
        antidotes: [
            'Tạm rời vấn đề (đi dạo, ngủ một giấc) rồi quay lại — giai đoạn "ủ" giúp não thoát lối mòn',
            'Giải thích vấn đề cho người mới hoặc người ngoài ngành',
            'Mô tả đồ vật theo thuộc tính (chất liệu, hình dạng) thay vì công dụng: "hộp giấy cứng phẳng" thay vì "hộp đựng ghim"',
            'Đặt ràng buộc giả định: "Nếu không được dùng cách cũ, mình sẽ làm gì?"',
            'Hỏi: "Cách đơn giản nhất có thể là gì?" ngay cả khi đã có lời giải'
        ],
        advanced: `
            <h5>Kỹ thuật "bộ phận chung" (generic parts)</h5>
            <p>Tony McCaffrey đề xuất phân rã mỗi đồ vật thành các bộ phận và mô tả mỗi bộ phận bằng vật liệu và hình dạng, không nhắc công dụng. Trong thí nghiệm của ông, người được hướng dẫn kỹ thuật này giải các bài toán kiểu cây nến tốt hơn rõ rệt.</p>
            <h5>Tâm trí người mới (Shoshin)</h5>
            <p>Thiền sư Shunryu Suzuki: <em>"Trong tâm trí người mới có nhiều khả năng; trong tâm trí chuyên gia chỉ có ít."</em> Chủ động đặt câu hỏi ngây thơ ("vì sao phải làm bước này?") là cách giữ tâm trí người mới.</p>
            <h5>Lời nguyền kiến thức</h5>
            <p>Khi đã biết điều gì, ta khó tưởng tượng được góc nhìn của người chưa biết — khiến chuyên gia khó giải thích, và khó thấy giải pháp mà người mới thấy.</p>
        `,
        checklist: [
            'Mình có đang dùng lại cách cũ theo quán tính?',
            'Đã thử mô tả tài nguyên theo thuộc tính, không theo công dụng?',
            'Đã hỏi người ngoài ngành?',
            'Cách đơn giản nhất là gì?'
        ]
    }
};
