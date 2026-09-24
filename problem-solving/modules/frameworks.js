// Problem Solving - Frameworks (quy trình & khung giải quyết vấn đề)
// Schema mỗi concept (dùng chung cho mọi module lý thuyết):
//   icon, title, category, level, connections: [id]
//   summary   - 1–2 câu tóm tắt (hiện trên thẻ + đầu tab Lý thuyết)
//   origin    - nguồn gốc (HTML, tuỳ chọn)
//   what      - hiểu đúng khái niệm (HTML)
//   when      - { use: [], avoid: [] }
//   steps     - các bước thực hiện (mảng HTML)
//   example   - ví dụ minh hoạ (HTML)
//   mistakes  - sai lầm thường gặp (mảng)
//   advanced  - kiến thức nâng cao (HTML)
//   checklist - tự kiểm tra nhanh (mảng)
const frameworksData = {
    'ps-process': {
        icon: '🧭',
        title: 'Quy Trình Giải Quyết Vấn Đề',
        category: 'frameworks',
        level: 'beginner',
        connections: ['define-problem', 'root-cause', 'brainstorming', 'decision-matrix', 'pdca', 'jumping-solutions'],
        summary: 'Khung 6 bước xuyên suốt: Định nghĩa → Chẩn đoán → Tạo phương án → Quyết định → Triển khai → Rút kinh nghiệm. Mọi công cụ khác trên trang này đều phục vụ một bước trong khung này.',
        what: `
            <p>Giải quyết vấn đề không phải năng khiếu bẩm sinh mà là <strong>một quy trình học được</strong>. Người giỏi khác người thường ở chỗ họ biết <em>mình đang ở bước nào</em> và dùng <em>đúng công cụ cho bước đó</em>.</p>
            <p><strong>Vấn đề</strong> = khoảng cách (gap) giữa <em>hiện trạng</em> và <em>trạng thái mong muốn</em>. Không có mục tiêu rõ thì cũng không có vấn đề rõ.</p>
            <div class="tip-box">💡 Nhịp chung của mọi bước: <strong>mở rộng</strong> (liệt kê nhiều khả năng) rồi <strong>thu hẹp</strong> (chọn lọc bằng dữ liệu, tiêu chí). Trộn lẫn hai nhịp này — vừa nghĩ ý tưởng vừa chê — là nguyên nhân phổ biến khiến buổi họp bế tắc.</div>
            <table>
                <tr><th>Bước</th><th>Câu hỏi then chốt</th><th>Công cụ gợi ý</th><th>Đầu ra</th></tr>
                <tr><td>1. Định nghĩa</td><td>Chính xác thì vấn đề là gì? Gap bao nhiêu?</td><td>Problem statement, 5W2H, Is/Is Not, Reframing</td><td>Câu mô tả vấn đề có số liệu</td></tr>
                <tr><td>2. Chẩn đoán</td><td>Vì sao nó xảy ra?</td><td>5 Whys, Fishbone, Issue tree, Pareto</td><td>Nguyên nhân gốc đã kiểm chứng</td></tr>
                <tr><td>3. Tạo phương án</td><td>Có những cách nào?</td><td>Brainstorming, SCAMPER, Analogy, First principles</td><td>Danh sách ≥ 3 phương án</td></tr>
                <tr><td>4. Quyết định</td><td>Chọn cách nào, rủi ro gì?</td><td>Decision matrix, Impact–Effort, Pre-mortem, Second-order</td><td>Phương án được chọn + lý do</td></tr>
                <tr><td>5. Triển khai</td><td>Ai làm gì, khi nào, đo bằng gì?</td><td>PDCA, pilot, kế hoạch hành động</td><td>Kế hoạch + chỉ số theo dõi</td></tr>
                <tr><td>6. Rút kinh nghiệm</td><td>Có hiệu quả không? Học được gì?</td><td>Retrospective, blameless postmortem</td><td>Chuẩn hoá hoặc vòng lặp mới</td></tr>
            </table>
        `,
        when: {
            use: [
                'Vấn đề quan trọng, tốn kém hoặc lặp lại nhiều lần',
                'Nhiều người/bộ phận liên quan, cần ngôn ngữ chung',
                'Đã thử "sửa nhanh" nhưng vấn đề vẫn quay lại'
            ],
            avoid: [
                'Sự cố khẩn cấp đang gây thiệt hại: khống chế trước, phân tích sau',
                'Việc nhỏ, rẻ, dễ đảo ngược: cứ làm và điều chỉnh (đừng "quy trình hoá" mọi thứ)'
            ]
        },
        steps: [
            '<strong>Định nghĩa:</strong> mô tả hiện trạng và mục tiêu bằng số liệu, xác định ai bị ảnh hưởng và phạm vi. Chưa nói đến giải pháp.',
            '<strong>Chẩn đoán:</strong> liệt kê rộng các nguyên nhân khả dĩ, rồi dùng dữ liệu để thu hẹp và đào tới nguyên nhân gốc.',
            '<strong>Tạo phương án:</strong> đưa ra ít nhất 3 phương án (kể cả "giữ nguyên"). Tách việc nghĩ ý tưởng khỏi việc đánh giá.',
            '<strong>Quyết định:</strong> đặt tiêu chí trước, so sánh phương án, nghĩ đến rủi ro và hậu quả dài hạn.',
            '<strong>Triển khai:</strong> thử nhỏ trước nếu được; có người chịu trách nhiệm, mốc thời gian và chỉ số thành công.',
            '<strong>Rút kinh nghiệm:</strong> so kết quả với mục tiêu. Thành công → chuẩn hoá (quy trình, checklist). Chưa đạt → quay lại bước 2 với dữ liệu mới.'
        ],
        example: `
            <p><strong>Tình huống:</strong> Doanh số online của một shop thời trang giảm 20% trong quý.</p>
            <ol>
                <li><strong>Định nghĩa:</strong> "Doanh thu kênh website giảm từ 1,2 tỷ xuống 960 triệu/tháng trong Q3, trong khi kênh cửa hàng ổn định."</li>
                <li><strong>Chẩn đoán:</strong> Tách doanh thu = lượt truy cập × tỷ lệ chuyển đổi × giá trị đơn. Dữ liệu cho thấy lượt truy cập giữ nguyên, <em>tỷ lệ chuyển đổi trên mobile</em> giảm mạnh sau khi đổi trang thanh toán.</li>
                <li><strong>Phương án:</strong> quay về trang cũ; sửa các bước gây rớt; thêm ví điện tử; giảm số trường phải nhập.</li>
                <li><strong>Quyết định:</strong> sửa trang mới (giữ lợi ích bảo mật) + giảm trường nhập — tác động cao, công sức vừa phải.</li>
                <li><strong>Triển khai:</strong> A/B test 2 tuần với 50% lượng truy cập, theo dõi tỷ lệ chuyển đổi mobile.</li>
                <li><strong>Rút kinh nghiệm:</strong> chuyển đổi phục hồi 90% → áp dụng toàn bộ; bổ sung quy tắc "mọi thay đổi trang thanh toán phải A/B test".</li>
            </ol>
        `,
        mistakes: [
            'Nhảy thẳng từ bước 1 sang bước 5 ("biết rồi, làm luôn") — bỏ qua chẩn đoán',
            'Bỏ bước 6: không đo lại nên không biết giải pháp có hiệu quả hay chỉ là may mắn',
            'Coi quy trình là tuyến tính cứng nhắc; thực tế thường phải quay lui khi có dữ liệu mới',
            'Dùng quá nhiều công cụ cho một vấn đề nhỏ — công cụ phục vụ tư duy, không thay thế tư duy'
        ],
        advanced: `
            <h5>Các khung tương đương trong từng ngành</h5>
            <ul>
                <li><strong>PDCA</strong> (quản lý chất lượng), <strong>DMAIC</strong> (Six Sigma: Define–Measure–Analyze–Improve–Control)</li>
                <li><strong>8D</strong> (ngành ô tô: 8 bước từ lập đội đến ghi nhận), <strong>A3</strong> (Toyota: cả quy trình trên một tờ giấy A3)</li>
                <li><strong>McKinsey 7 bước</strong>: định nghĩa → chia nhỏ (issue tree) → ưu tiên → lập kế hoạch phân tích → phân tích → tổng hợp → truyền đạt</li>
                <li><strong>OODA</strong> (quân sự: Observe–Orient–Decide–Act) cho môi trường thay đổi nhanh</li>
            </ul>
            <h5>Điều chỉnh công sức theo mức độ</h5>
            <p>Mức đầu tư vào quy trình nên tỉ lệ với <em>tầm quan trọng</em> và <em>độ khó đảo ngược</em> của quyết định. Đổi màu nút bấm: vài phút. Đóng cửa một nhà máy: vài tuần phân tích.</p>
            <div class="tip-box">💡 Phân bổ thời gian gợi ý cho vấn đề khó: ~40% định nghĩa + chẩn đoán, ~20% tạo phương án, ~15% quyết định, còn lại cho triển khai và học.</div>
        `,
        checklist: [
            'Tôi đang ở bước nào trong 6 bước?',
            'Đã có câu mô tả vấn đề với số liệu chưa?',
            'Nguyên nhân đã được kiểm chứng hay mới là phỏng đoán?',
            'Đã có ít nhất 3 phương án để so sánh chưa?',
            'Đã hẹn ngày đo lại kết quả chưa?'
        ]
    },

    'define-problem': {
        icon: '🎯',
        title: 'Định Nghĩa Vấn Đề',
        category: 'frameworks',
        level: 'beginner',
        connections: ['ps-process', '5-whys', 'reframing', 'jumping-solutions', 'xy-problem'],
        summary: 'Mô tả chính xác khoảng cách giữa hiện trạng và mục tiêu — cụ thể, đo được, không chứa sẵn giải pháp hay đổ lỗi. Vấn đề được định nghĩa đúng là đã giải được một nửa.',
        origin: 'Câu "Nếu có 1 giờ để giải quyết vấn đề, tôi dành 55 phút để hiểu vấn đề" thường được gán cho Einstein nhưng không có nguồn xác thực — dù vậy tinh thần của nó được mọi phương pháp giải quyết vấn đề thừa nhận.',
        what: `
            <p>Một vấn đề được định nghĩa tốt có 4 đặc điểm:</p>
            <ul>
                <li><strong>Cụ thể:</strong> nói rõ cái gì, ở đâu, với ai — không phải "doanh nghiệp đang gặp khó".</li>
                <li><strong>Đo được:</strong> có con số hiện trạng và mục tiêu, nhờ đó biết khi nào đã giải xong.</li>
                <li><strong>Trung lập về giải pháp:</strong> "Chúng ta thiếu phần mềm CRM" là <em>giải pháp đội lốt vấn đề</em>.</li>
                <li><strong>Không đổ lỗi/đoán nguyên nhân:</strong> "Nhân viên lười" là một giả thuyết (thường sai), không phải vấn đề.</li>
            </ul>
            <div class="example-box"><strong>Mẫu problem statement:</strong> [Ai] đang gặp [vấn đề gì, đo bằng gì] khi [bối cảnh], so với [mục tiêu/chuẩn], dẫn đến [hậu quả].</div>
            <p>Phân biệt 3 thứ hay bị lẫn: <strong>triệu chứng</strong> (điều ta thấy: khách phàn nàn), <strong>vấn đề</strong> (gap đo được: 35% đơn giao trễ so với cam kết 5%), <strong>nguyên nhân</strong> (vì sao gap tồn tại: tìm ở bước chẩn đoán).</p>
        `,
        when: {
            use: [
                'Bắt đầu bất kỳ dự án/cuộc họp giải quyết vấn đề nào',
                'Khi mọi người tranh cãi về giải pháp mà chưa thống nhất vấn đề',
                'Khi nhận yêu cầu dạng "làm cho tôi cái X" — cần hiểu X để giải quyết điều gì'
            ],
            avoid: [
                'Không có trường hợp nào nên bỏ qua hoàn toàn — chỉ điều chỉnh độ sâu (vài giây cho việc nhỏ, vài ngày cho việc lớn)'
            ]
        },
        steps: [
            '<strong>Mô tả hiện trạng bằng dữ kiện</strong> (số liệu, quan sát), không phải cảm nhận: "35% đơn giao trễ" thay vì "giao hàng tệ".',
            '<strong>Mô tả trạng thái mong muốn</strong> (mục tiêu đo được) → xác định độ lớn của gap.',
            '<strong>Trả lời 5W2H:</strong> What (hiện tượng gì), Who (ai bị ảnh hưởng), Where (ở đâu), When (từ khi nào, tần suất), Why it matters (vì sao quan trọng), How (biểu hiện ra sao), How much (thiệt hại bao nhiêu).',
            '<strong>Phân tích Is / Is Not:</strong> vấn đề xảy ra ở đâu, khi nào, với ai — và <em>không</em> xảy ra ở đâu dù có thể xảy ra. Sự khác biệt giữa hai cột là manh mối cực mạnh cho bước chẩn đoán.',
            '<strong>Viết problem statement</strong> theo mẫu, rồi soát: có chữ nào là giải pháp hay nguyên nhân giả định không? Xoá đi.',
            '<strong>Kiểm tra với người liên quan:</strong> "Nếu giải được đúng điều này, anh/chị có hài lòng không?" Nếu câu trả lời là "chưa", định nghĩa còn thiếu.'
        ],
        example: `
            <h5>Viết lại problem statement</h5>
            <table>
                <tr><th>❌ Chưa tốt</th><th>✅ Tốt hơn</th></tr>
                <tr><td>"Nhân viên lười, deadline toàn trễ."</td><td>"Tỷ lệ task trễ hạn của team A tăng từ 10% lên 35% trong Q2, làm 3 bản phát hành bị lùi lịch."</td></tr>
                <tr><td>"Cần làm app chăm sóc khách hàng."</td><td>"40% cuộc gọi hotline chỉ để hỏi tình trạng đơn hàng, chiếm 60% thời gian của đội CS."</td></tr>
                <tr><td>"Website dở quá."</td><td>"Tỷ lệ bỏ giỏ hàng trên mobile là 78% (desktop 55%) kể từ khi đổi trang thanh toán ngày 3/3."</td></tr>
            </table>
            <h5>Is / Is Not — lỗi thanh toán</h5>
            <table>
                <tr><th></th><th>IS (có xảy ra)</th><th>IS NOT (không xảy ra)</th></tr>
                <tr><td>Thiết bị</td><td>Android</td><td>iOS, desktop</td></tr>
                <tr><td>Thời điểm</td><td>Từ 3/3</td><td>Trước 3/3</td></tr>
                <tr><td>Phương thức</td><td>Thẻ nội địa</td><td>Thẻ quốc tế, ví điện tử</td></tr>
            </table>
            <p>→ Điểm khác biệt chỉ ra manh mối: bản cập nhật SDK cổng thẻ nội địa trên Android phát hành ngày 3/3. Chưa cần đoán mò hàng chục nguyên nhân.</p>
        `,
        mistakes: [
            'Định nghĩa quá rộng ("tăng trưởng chậm") — không biết bắt đầu từ đâu',
            'Nhét giải pháp vào câu vấn đề ("vấn đề là chưa có chatbot")',
            'Đổ lỗi cho người ("do sale kém") thay vì mô tả hiện tượng',
            'Không có số liệu → không biết khi nào đã giải xong',
            'Một người tự định nghĩa rồi áp cho cả nhóm, không hỏi người bị ảnh hưởng'
        ],
        advanced: `
            <h5>Câu hỏi SMART cho vấn đề</h5>
            <p>Diễn đạt vấn đề thành câu hỏi hành động: <em>"Làm thế nào để [mục tiêu đo được] trong [ràng buộc] trước [thời hạn]?"</em> — ví dụ: "Làm thế nào để giảm tỷ lệ bỏ giỏ trên mobile từ 78% xuống 60% trong 2 tháng mà không tăng chi phí cổng thanh toán?"</p>
            <h5>Phạm vi (scope)</h5>
            <p>Ghi rõ cái gì <strong>trong</strong> và <strong>ngoài</strong> phạm vi. Rất nhiều dự án thất bại vì phạm vi phình dần ("tiện thì sửa luôn cái này").</p>
            <h5>SCQ của Barbara Minto</h5>
            <p><strong>Situation</strong> (bối cảnh ổn định) → <strong>Complication</strong> (điều gì thay đổi, gây ra vấn đề) → <strong>Question</strong> (câu hỏi cần trả lời). Cách này giúp trình bày vấn đề cho người khác một cách mạch lạc.</p>
            <h5>Wicked problems</h5>
            <p>Một số vấn đề (biến đổi khí hậu, chính sách giáo dục) <em>không có định nghĩa cuối cùng</em> — mỗi lần thử giải lại làm thay đổi vấn đề (Rittel & Webber, 1973). Với loại này, định nghĩa là việc lặp đi lặp lại, không làm một lần.</p>
        `,
        checklist: [
            'Có số liệu hiện trạng và mục tiêu?',
            'Không chứa giải pháp, không đổ lỗi?',
            'Biết ai bị ảnh hưởng và từ khi nào?',
            'Đã làm Is / Is Not để tìm manh mối?',
            'Người liên quan đồng ý đây đúng là vấn đề?'
        ]
    },

    '5-whys': {
        icon: '❓',
        title: '5 Whys',
        category: 'frameworks',
        level: 'beginner',
        connections: ['root-cause', 'fishbone', 'symptom-fixing', 'define-problem'],
        summary: 'Hỏi "Tại sao?" liên tiếp (khoảng 5 lần) để đi từ triệu chứng xuống nguyên nhân gốc — thường là một lỗ hổng trong quy trình chứ không phải lỗi của một cá nhân.',
        origin: 'Sakichi Toyoda (người sáng lập Toyota) phát triển; Taiichi Ohno phổ biến như một phần của Toyota Production System.',
        what: `
            <p>Mỗi câu trả lời "vì…" trở thành đối tượng của câu hỏi "tại sao" tiếp theo. Càng hỏi sâu, ta càng rời xa <em>triệu chứng</em> và tiến gần <em>cơ chế</em> tạo ra nó.</p>
            <div class="tip-box">💡 Con số 5 chỉ là gợi ý. Có vấn đề chỉ cần 3 lần, có vấn đề cần 7. Dừng khi tìm được nguyên nhân <strong>hành động được</strong> và <strong>loại bỏ nó thì vấn đề không tái diễn</strong>.</div>
            <p>Điểm mạnh: đơn giản, không cần công cụ, cả nhóm cùng làm được trong 15 phút. Điểm yếu: chỉ đi theo <em>một nhánh</em>, phụ thuộc vào kiến thức người hỏi.</p>
        `,
        when: {
            use: [
                'Sự cố có chuỗi nhân quả tương đối tuyến tính',
                'Vấn đề lặp lại, cần tìm lỗ hổng quy trình',
                'Họp retrospective/postmortem nhanh'
            ],
            avoid: [
                'Vấn đề có nhiều nguyên nhân đan xen — dùng Fishbone hoặc Issue tree trước',
                'Khi không ai trong phòng có dữ liệu/hiểu biết thực tế — câu trả lời sẽ là đoán mò'
            ]
        },
        steps: [
            'Viết vấn đề cụ thể, có số liệu (kết quả của bước định nghĩa).',
            'Hỏi "Tại sao điều này xảy ra?" — trả lời bằng <strong>dữ kiện đã kiểm chứng</strong>, không phải phỏng đoán.',
            'Lấy câu trả lời làm vấn đề mới và hỏi tiếp.',
            'Dừng khi chạm tới nguyên nhân: (a) nằm trong tầm kiểm soát, (b) loại bỏ nó thì vấn đề không tái diễn, (c) hỏi tiếp sẽ ra ngoài phạm vi (thời tiết, luật pháp…).',
            '<strong>Kiểm tra ngược</strong> ("therefore test"): đọc từ dưới lên bằng chữ "…vì vậy…". Nếu chuỗi không logic, có mắt xích bị nhảy cóc.',
            'Đề xuất hai loại hành động: <strong>tạm thời</strong> (chặn triệu chứng ngay) và <strong>vĩnh viễn</strong> (xử lý nguyên nhân gốc).'
        ],
        example: `
            <p><strong>Vấn đề:</strong> Website bán hàng sập 30 phút lúc 20h ngày khuyến mãi.</p>
            <ol>
                <li><strong>Tại sao sập?</strong> → Database hết kết nối (connection pool cạn).</li>
                <li><strong>Tại sao hết kết nối?</strong> → Lượng truy cập gấp 8 lần ngày thường và mỗi request giữ kết nối rất lâu.</li>
                <li><strong>Tại sao giữ lâu?</strong> → Trang danh sách sản phẩm chạy một truy vấn thiếu index, mất ~3 giây/lần.</li>
                <li><strong>Tại sao truy vấn thiếu index lọt lên production?</strong> → Không có bước kiểm thử tải trước đợt khuyến mãi.</li>
                <li><strong>Tại sao không có bước đó?</strong> → Quy trình phát hành không có checklist riêng cho sự kiện lớn.</li>
            </ol>
            <p>✅ <strong>Tạm thời:</strong> thêm index, tăng pool. <strong>Vĩnh viễn:</strong> đưa load test + checklist sự kiện vào quy trình phát hành.</p>
            <div class="warning-box">⚠️ Chuỗi <em>sai</em> hay gặp: "Tại sao thiếu index? → Vì bạn Nam quên." Dừng ở đây là đổ lỗi, và lần sau người khác cũng sẽ "quên". Hãy hỏi tiếp: <em>tại sao quy trình cho phép việc quên lọt qua?</em></div>
        `,
        mistakes: [
            'Dừng ở "lỗi con người" — con người luôn mắc lỗi, hệ thống phải chặn được lỗi',
            'Trả lời bằng phỏng đoán thay vì dữ kiện đã kiểm chứng',
            'Chỉ đi một nhánh trong khi vấn đề có nhiều nguyên nhân song song',
            'Nhảy cóc logic (từ "server sập" nhảy thẳng tới "thiếu ngân sách")',
            'Hỏi "Tại sao BẠN làm vậy?" khiến người khác phòng thủ — hãy hỏi về quy trình, không về người'
        ],
        advanced: `
            <h5>5 Whys nhiều nhánh</h5>
            <p>Khi một câu hỏi có 2–3 câu trả lời đúng, vẽ thành cây (why-tree) thay vì chọn đại một nhánh. Đây là cầu nối giữa 5 Whys và Issue tree.</p>
            <h5>3 × 5 Whys</h5>
            <p>Hỏi chuỗi "tại sao" cho ba câu hỏi khác nhau:</p>
            <ol>
                <li>Tại sao sự cố <strong>xảy ra</strong>?</li>
                <li>Tại sao nó <strong>không được phát hiện</strong> sớm hơn?</li>
                <li>Tại sao hệ thống <strong>không ngăn được</strong> nó?</li>
            </ol>
            <p>Cách này thường tìm ra lỗ hổng ở khâu giám sát và phòng ngừa — nơi 5 Whys một chiều hay bỏ sót.</p>
            <h5>Giới hạn</h5>
            <p>Hai nhóm khác nhau phân tích cùng một sự cố có thể ra hai chuỗi khác nhau. Vì vậy với sự cố nghiêm trọng, hãy kết hợp Fishbone (độ rộng) + 5 Whys (độ sâu) + dữ liệu kiểm chứng.</p>
        `,
        checklist: [
            'Mỗi câu trả lời có dữ kiện chứng minh?',
            'Có đọc ngược "…vì vậy…" thấy logic?',
            'Nguyên nhân cuối nằm trong tầm kiểm soát?',
            'Không dừng ở lỗi cá nhân?',
            'Có cả hành động tạm thời và vĩnh viễn?'
        ]
    },

    'pdca': {
        icon: '♻️',
        title: 'PDCA & Cải Tiến Liên Tục',
        category: 'frameworks',
        level: 'beginner',
        connections: ['ps-process', 'hypothesis-driven', 'constraints', 'symptom-fixing'],
        summary: 'Vòng lặp Plan – Do – Check – Act: thử giải pháp ở quy mô nhỏ, đo kết quả so với dự đoán, rồi chuẩn hoá hoặc điều chỉnh. Cải tiến bằng nhiều vòng nhỏ thay vì một cú đặt cược lớn.',
        origin: 'Walter Shewhart (thập niên 1930) đề xuất; W. Edwards Deming phổ biến tại Nhật sau Thế chiến II (Deming thích gọi là PDSA — Study thay vì Check).',
        what: `
            <p>PDCA biến việc giải quyết vấn đề thành <strong>thí nghiệm có kiểm soát</strong>. Thay vì tin rằng giải pháp chắc chắn đúng, ta coi nó là giả thuyết cần kiểm chứng.</p>
            <ul>
                <li><strong>Plan:</strong> hiểu vấn đề, nguyên nhân; đặt giả thuyết "Nếu làm X thì chỉ số Y sẽ cải thiện Z%"; lên kế hoạch thử nhỏ.</li>
                <li><strong>Do:</strong> thực hiện thử nghiệm quy mô nhỏ, ghi lại mọi quan sát (kể cả điều bất ngờ).</li>
                <li><strong>Check:</strong> so sánh kết quả với dự đoán. Khác ở đâu? Vì sao?</li>
                <li><strong>Act:</strong> hiệu quả → chuẩn hoá (quy trình, checklist, đào tạo) và mở rộng. Không hiệu quả → điều chỉnh giả thuyết, bắt đầu vòng mới.</li>
            </ul>
            <div class="tip-box">💡 <strong>Kaizen</strong> (cải tiến liên tục) = chạy PDCA liên tục với những cải tiến nhỏ, do chính người làm việc đề xuất. Nhiều cải tiến 1% cộng dồn thành khác biệt lớn.</div>
        `,
        when: {
            use: [
                'Cải tiến quy trình lặp lại hằng ngày/tuần',
                'Khi chưa chắc giải pháp nào hiệu quả',
                'Khi có thể thử nhỏ với chi phí thấp'
            ],
            avoid: [
                'Sự cố khẩn cấp cần hành động ngay',
                'Quyết định một lần, không thể thử nhỏ (ví dụ: sáp nhập công ty)'
            ]
        },
        steps: [
            '<strong>Plan:</strong> mô tả vấn đề và mục tiêu đo được; chọn nguyên nhân cần tác động; viết dự đoán cụ thể ("thời gian chờ giảm từ 12 xuống dưới 7 phút"); xác định cách đo và phạm vi thử.',
            '<strong>Do:</strong> thử ở một nhóm/khu vực/khung giờ nhỏ trong thời gian giới hạn; ghi nhật ký quan sát.',
            '<strong>Check:</strong> so số liệu với dự đoán và với nhóm không thay đổi (nếu có). Tìm hiểu vì sao lệch.',
            '<strong>Act:</strong> quyết định giữ – sửa – bỏ. Nếu giữ: viết thành chuẩn mới, đào tạo, mở rộng. Rồi chọn vấn đề tiếp theo.'
        ],
        example: `
            <p><strong>Quán cà phê:</strong> giờ cao điểm buổi sáng, khách chờ trung bình 12 phút; nhiều khách bỏ về.</p>
            <ul>
                <li><strong>Plan:</strong> quan sát thấy khách dồn ở quầy thu ngân. Giả thuyết: "Cho order trước qua mã QR sẽ giảm thời gian chờ xuống dưới 7 phút." Thử 1 tuần, 7–9h sáng.</li>
                <li><strong>Do:</strong> dán QR ở cửa và bàn; nhân viên ghi lại thời gian chờ của mỗi đơn.</li>
                <li><strong>Check:</strong> thời gian chờ còn 8 phút — cải thiện nhưng chưa đạt. Quan sát mới: quầy pha chế giờ trở thành nơi ùn ứ.</li>
                <li><strong>Act:</strong> giữ QR (chuẩn hoá, in bảng hướng dẫn). Vòng PDCA tiếp theo tập trung khâu pha chế: chuẩn bị sẵn nguyên liệu cho 3 món bán chạy nhất.</li>
            </ul>
            <p>Lưu ý: vòng 1 "chưa đạt mục tiêu" nhưng <em>không thất bại</em> — nó cho ta biết nút thắt đã dịch chuyển.</p>
        `,
        mistakes: [
            '"Plan – Do – Plan – Do": bỏ qua bước Check nên không học được gì',
            'Không viết dự đoán trước → kết quả nào cũng có thể "giải thích được"',
            'Thử quá lớn: thất bại thì tốn kém, thành công thì không biết nhờ yếu tố nào',
            'Không chuẩn hoá sau khi thành công → vài tháng sau mọi thứ quay về như cũ'
        ],
        advanced: `
            <h5>SDCA — giữ vững trước khi cải tiến</h5>
            <p>Standardize – Do – Check – Act: khi quy trình chưa ổn định, việc đầu tiên là chuẩn hoá cách làm hiện tại. Không thể cải tiến thứ mà mỗi người làm một kiểu.</p>
            <h5>A3 report (Toyota)</h5>
            <p>Toàn bộ PDCA trên một tờ A3: bối cảnh → hiện trạng → mục tiêu → phân tích nguyên nhân → biện pháp → kế hoạch → theo dõi. Giới hạn một trang buộc người viết phải tư duy rõ ràng.</p>
            <h5>Họ hàng của PDCA</h5>
            <ul>
                <li><strong>DMAIC</strong> (Six Sigma) — PDCA với nhiều thống kê hơn</li>
                <li><strong>Build – Measure – Learn</strong> (Lean Startup) — PDCA cho sản phẩm mới</li>
                <li><strong>Phương pháp khoa học</strong> — giả thuyết → thí nghiệm → phân tích → kết luận</li>
            </ul>
        `,
        checklist: [
            'Có dự đoán cụ thể, đo được trước khi thử?',
            'Phạm vi thử đủ nhỏ để thất bại không đau?',
            'Có so sánh kết quả với dự đoán?',
            'Thành công đã được chuẩn hoá thành quy trình?'
        ]
    },

    'root-cause': {
        icon: '🌳',
        title: 'Root Cause Analysis',
        category: 'frameworks',
        level: 'intermediate',
        connections: ['5-whys', 'fishbone', 'symptom-fixing', 'pareto', 'systems-thinking'],
        summary: 'Quy trình có hệ thống để tìm và kiểm chứng nguyên nhân gốc của sự cố, rồi đưa ra biện pháp khiến nó không tái diễn — thay vì chỉ xử lý triệu chứng hay tìm người để trách.',
        origin: 'Phát triển từ các ngành đòi hỏi an toàn cao: hàng không, hạt nhân, y tế, sản xuất. Ngày nay phổ biến trong phần mềm với "blameless postmortem" (Google SRE).',
        what: `
            <p>Ba tầng nguyên nhân cần phân biệt:</p>
            <table>
                <tr><th>Tầng</th><th>Ý nghĩa</th><th>Ví dụ (giao sai hàng)</th></tr>
                <tr><td>Triệu chứng</td><td>Điều ta nhìn thấy</td><td>Khách nhận sai sản phẩm</td></tr>
                <tr><td>Nguyên nhân trực tiếp</td><td>Sự kiện ngay trước đó</td><td>Nhân viên kho lấy nhầm mã hàng</td></tr>
                <tr><td>Nguyên nhân gốc</td><td>Điều kiện hệ thống cho phép sự kiện xảy ra</td><td>Hai mã gần giống nằm cạnh nhau, không có bước quét mã xác nhận</td></tr>
            </table>
            <p><strong>Ba phép thử nguyên nhân gốc:</strong></p>
            <ol>
                <li>Loại bỏ nó thì vấn đề <em>không tái diễn</em> (hoặc giảm rõ rệt)?</li>
                <li>Nó nằm trong <em>tầm kiểm soát</em> của tổ chức?</li>
                <li>Nó <em>giải thích được mọi dữ kiện</em> đã quan sát (kể cả cột "Is Not")?</li>
            </ol>
            <div class="tip-box">💡 Nguyên nhân gốc thường nằm ở tầng <strong>tổ chức</strong>: quy trình, thiết kế, chính sách, khuyến khích (KPI), đào tạo — ít khi là "một người bất cẩn".</div>
        `,
        when: {
            use: [
                'Sự cố nghiêm trọng (mất tiền, mất an toàn, mất khách)',
                'Sự cố lặp lại từ 2 lần trở lên',
                'Khi cần báo cáo và cam kết biện pháp phòng ngừa'
            ],
            avoid: [
                'Sự cố nhỏ, một lần, chi phí phân tích lớn hơn thiệt hại',
                'Đang trong khủng hoảng: khống chế thiệt hại trước, RCA sau'
            ]
        },
        steps: [
            '<strong>Khống chế (containment):</strong> ngăn thiệt hại lan rộng — thu hồi hàng lỗi, rollback, thông báo khách.',
            '<strong>Thu thập dữ kiện:</strong> dòng thời gian (timeline), log, số liệu, phỏng vấn người trong cuộc, bảng Is/Is Not.',
            '<strong>Mở rộng:</strong> liệt kê mọi nguyên nhân khả dĩ theo nhóm (Fishbone).',
            '<strong>Thu hẹp:</strong> kiểm chứng từng giả thuyết bằng dữ liệu; dùng Pareto để tập trung vào nhóm nguyên nhân lớn nhất.',
            '<strong>Đào sâu:</strong> với nguyên nhân còn lại, dùng 5 Whys cho tới tầng hệ thống.',
            '<strong>Xác minh:</strong> tái hiện lỗi, hoặc loại bỏ nguyên nhân và xem vấn đề có biến mất không.',
            '<strong>Biện pháp khắc phục & phòng ngừa (CAPA)</strong>, giao người chịu trách nhiệm, hạn chót và cách đo hiệu quả.'
        ],
        example: `
            <p><strong>Sự cố:</strong> Tỷ lệ đơn giao sai hàng tăng gấp 3 sau khi kho được sắp xếp lại.</p>
            <ul>
                <li><strong>Dữ kiện:</strong> 80% lỗi rơi vào 12 cặp mã hàng; các cặp này có tên gần giống và nằm cạnh nhau; lỗi tăng vào ca tối.</li>
                <li><strong>Nguyên nhân gốc (nhiều yếu tố):</strong> bố trí kệ mới đặt mã giống nhau cạnh nhau; nhãn chữ nhỏ; KPI chỉ tính tốc độ lấy hàng; không có bước quét mã vạch xác nhận; ca tối thiếu ánh sáng.</li>
                <li><strong>Biện pháp:</strong> bắt buộc quét mã vạch trước khi đóng gói (máy báo lỗi nếu sai); tách vị trí các mã dễ nhầm; KPI tính cả độ chính xác; bổ sung đèn.</li>
            </ul>
            <h5>Biện pháp mạnh và yếu</h5>
            <table>
                <tr><th>Mức</th><th>Loại biện pháp</th><th>Ví dụ</th></tr>
                <tr><td>💪 Mạnh</td><td>Loại bỏ / thiết kế lại để lỗi không thể xảy ra</td><td>Máy quét chặn đóng gói nếu sai mã (poka-yoke)</td></tr>
                <tr><td>👌 Trung bình</td><td>Tự động hoá, chuẩn hoá, checklist bắt buộc</td><td>Tách vị trí mã dễ nhầm, checklist ca</td></tr>
                <tr><td>🥀 Yếu</td><td>Nhắc nhở, đào tạo lại, "cẩn thận hơn"</td><td>Họp nhắc nhân viên chú ý</td></tr>
            </table>
        `,
        mistakes: [
            'Kết luận "lỗi con người" rồi kỷ luật — lần sau mọi người giấu lỗi',
            'Tin rằng chỉ có đúng một nguyên nhân; sự cố lớn thường do nhiều yếu tố cùng lúc',
            'Không kiểm chứng: nguyên nhân "nghe hợp lý" nhưng không giải thích được dữ liệu',
            'Chỉ dùng biện pháp yếu (nhắc nhở, đào tạo) → sự cố quay lại sau vài tháng',
            'Không theo dõi sau khi triển khai biện pháp'
        ],
        advanced: `
            <h5>Mô hình pho mát Thuỵ Sĩ (James Reason)</h5>
            <p>Mỗi lớp phòng vệ (thiết kế, quy trình, đào tạo, giám sát) giống một lát pho mát có lỗ. Sự cố chỉ xảy ra khi các lỗ <em>thẳng hàng</em>. Vì vậy câu hỏi đúng không phải "ai sai?" mà là "lớp phòng vệ nào có lỗ, và vì sao?".</p>
            <h5>Blameless postmortem & Just culture</h5>
            <p>Nếu phân tích sự cố dẫn đến trừng phạt, mọi người sẽ che giấu thông tin — và tổ chức mất khả năng học. Văn hoá "không đổ lỗi" không có nghĩa là không có trách nhiệm: vi phạm cố ý vẫn bị xử lý, còn lỗi vô ý được xem là tín hiệu về hệ thống.</p>
            <h5>Fault Tree Analysis</h5>
            <p>Phân tích từ trên xuống bằng cổng logic AND/OR: sự cố xảy ra khi (A <strong>và</strong> B) <strong>hoặc</strong> C. Giúp thấy tổ hợp điều kiện nào gây sự cố và lớp phòng vệ nào quan trọng nhất.</p>
        `,
        checklist: [
            'Đã khống chế thiệt hại trước khi phân tích?',
            'Có timeline và dữ liệu, không chỉ lời kể?',
            'Nguyên nhân gốc qua được 3 phép thử?',
            'Biện pháp thuộc loại mạnh hay chỉ là nhắc nhở?',
            'Có người chịu trách nhiệm và ngày kiểm tra lại?'
        ]
    },

    'fishbone': {
        icon: '🐟',
        title: 'Fishbone Diagram',
        category: 'frameworks',
        level: 'intermediate',
        connections: ['root-cause', '5-whys', 'brainstorming', 'pareto'],
        summary: 'Sơ đồ xương cá (Ishikawa) sắp xếp các nguyên nhân khả dĩ theo nhóm (6M…) để cả nhóm nhìn vấn đề đủ rộng trước khi đào sâu — chống việc chốt vội vào một nguyên nhân.',
        origin: 'Kaoru Ishikawa, chuyên gia quản lý chất lượng Nhật Bản, phát triển và phổ biến từ thập niên 1960.',
        what: `
            <p>Đầu cá là <strong>vấn đề</strong>, các xương lớn là <strong>nhóm nguyên nhân</strong>, xương nhỏ là <strong>nguyên nhân cụ thể</strong>. Giá trị lớn nhất: buộc nhóm xem xét <em>mọi</em> nhóm nguyên nhân thay vì chỉ nhóm quen thuộc.</p>
            <div class="diagram-box">
                <svg viewBox="0 0 520 220" role="img" aria-label="Sơ đồ xương cá với 6 nhóm nguyên nhân">
                    <line x1="30" y1="110" x2="400" y2="110" class="d-line" stroke-width="3"/>
                    <rect x="400" y="85" width="110" height="50" rx="8" class="d-head"/>
                    <text x="455" y="107" class="d-text-strong" text-anchor="middle">VẤN ĐỀ</text>
                    <text x="455" y="124" class="d-text" text-anchor="middle">35% đơn nguội</text>
                    <line x1="90" y1="30" x2="140" y2="110" class="d-line"/><text x="70" y="24" class="d-text">Con người</text>
                    <line x1="210" y1="30" x2="260" y2="110" class="d-line"/><text x="190" y="24" class="d-text">Phương pháp</text>
                    <line x1="330" y1="30" x2="380" y2="110" class="d-line"/><text x="310" y="24" class="d-text">Máy móc</text>
                    <line x1="90" y1="190" x2="140" y2="110" class="d-line"/><text x="70" y="206" class="d-text">Vật liệu</text>
                    <line x1="210" y1="190" x2="260" y2="110" class="d-line"/><text x="190" y="206" class="d-text">Đo lường</text>
                    <line x1="330" y1="190" x2="380" y2="110" class="d-line"/><text x="310" y="206" class="d-text">Môi trường</text>
                </svg>
            </div>
            <h5>Các bộ nhóm nguyên nhân phổ biến</h5>
            <table>
                <tr><th>Bộ</th><th>Dùng cho</th><th>Nhóm</th></tr>
                <tr><td>6M</td><td>Sản xuất</td><td>Man (con người), Machine (máy móc), Method (phương pháp), Material (vật liệu), Measurement (đo lường), Mother Nature (môi trường)</td></tr>
                <tr><td>8P</td><td>Marketing, dịch vụ</td><td>Product, Price, Place, Promotion, People, Process, Physical evidence, Productivity</td></tr>
                <tr><td>4S</td><td>Dịch vụ</td><td>Surroundings, Suppliers, Systems, Skills</td></tr>
                <tr><td>Phần mềm</td><td>Sự cố kỹ thuật</td><td>Con người, Quy trình, Code, Hạ tầng, Dữ liệu, Bên thứ ba</td></tr>
            </table>
        `,
        when: {
            use: [
                'Vấn đề có thể có nhiều nguyên nhân từ nhiều phía',
                'Họp nhóm đa chức năng — mỗi người thấy một mảnh',
                'Khi nhóm đang cãi nhau về "thủ phạm" duy nhất'
            ],
            avoid: [
                'Nguyên nhân đã rõ và đã kiểm chứng — không cần vẽ cho đủ thủ tục',
                'Khi không có ai hiểu thực tế quy trình tham gia'
            ]
        },
        steps: [
            'Viết vấn đề ở đầu cá — cụ thể, có số liệu ("35% đơn cà phê giao tới bị nguội", không phải "cà phê tệ").',
            'Chọn bộ nhóm nguyên nhân phù hợp (6M, 8P, 4S hoặc tự định nghĩa) làm các xương lớn.',
            'Brainstorm nguyên nhân cho từng nhóm: "Điều gì thuộc nhóm này có thể gây ra vấn đề?" — ghi hết, chưa đánh giá.',
            'Với mỗi nguyên nhân, hỏi "tại sao?" để thêm xương nhỏ hơn.',
            'Cả nhóm bình chọn 3–5 nguyên nhân khả dĩ nhất (dot voting).',
            '<strong>Kiểm chứng bằng dữ liệu</strong> trước khi hành động — sơ đồ chỉ là danh sách giả thuyết.'
        ],
        example: `
            <p><strong>Vấn đề:</strong> 35% đơn cà phê giao tận nơi bị khách phàn nàn là nguội.</p>
            <ul>
                <li><strong>Con người:</strong> shipper nhận nhiều đơn một lượt; nhân viên pha trước khi shipper tới.</li>
                <li><strong>Phương pháp:</strong> pha ngay khi có đơn thay vì khi shipper đến gần; không ưu tiên đơn xa.</li>
                <li><strong>Máy móc:</strong> máy pha chậm giờ cao điểm.</li>
                <li><strong>Vật liệu:</strong> ly giấy một lớp, không có nắp giữ nhiệt.</li>
                <li><strong>Đo lường:</strong> không đo thời gian từ lúc pha đến lúc giao.</li>
                <li><strong>Môi trường:</strong> mùa mưa, tắc đường; bán kính giao lên tới 7 km.</li>
            </ul>
            <p>Bình chọn + kiểm tra dữ liệu: đơn chờ shipper > 10 phút chiếm 70% phàn nàn → nguyên nhân chính là <em>thời điểm pha</em> (Phương pháp), không phải ly (Vật liệu) như nhiều người đoán.</p>
        `,
        mistakes: [
            'Coi sơ đồ là kết luận — thực ra mỗi xương là một giả thuyết cần kiểm chứng',
            'Đầu cá mơ hồ → nguyên nhân lan man',
            'Chỉ nhánh "Con người" được lấp đầy → biến thành buổi đổ lỗi',
            'Vẽ xong rồi cất đi, không chọn nguyên nhân để kiểm chứng và hành động'
        ],
        advanced: `
            <h5>Quy trình kết hợp mạnh nhất</h5>
            <p><strong>Fishbone</strong> (liệt kê rộng) → <strong>bình chọn</strong> → <strong>thu thập dữ liệu</strong> → <strong>Pareto</strong> (xếp hạng theo tần suất) → <strong>5 Whys</strong> cho 1–2 nguyên nhân hàng đầu.</p>
            <h5>Biến thể</h5>
            <ul>
                <li><strong>CEDAC:</strong> fishbone dán trên tường, bên trái ghi nguyên nhân, bên phải ghi ý tưởng cải tiến — cả nhóm bổ sung dần theo thời gian.</li>
                <li><strong>Process fishbone:</strong> xương lớn là các bước của quy trình thay vì các nhóm — hữu ích khi quy trình dài.</li>
            </ul>
        `,
        checklist: [
            'Đầu cá cụ thể và có số liệu?',
            'Mọi nhóm đều được xem xét, không chỉ "Con người"?',
            'Đã chọn ra top nguyên nhân?',
            'Top nguyên nhân đã được kiểm chứng bằng dữ liệu?'
        ]
    },

    'issue-tree': {
        icon: '🌲',
        title: 'Issue Tree & MECE',
        category: 'frameworks',
        level: 'intermediate',
        connections: ['divide-conquer', 'hypothesis-driven', 'pareto', 'fermi', 'mind-mapping'],
        summary: 'Chia một câu hỏi lớn thành cây câu hỏi con theo nguyên tắc MECE — không trùng lặp, không bỏ sót — để phân tích có hệ thống và phân công được.',
        origin: 'Công cụ cốt lõi của các công ty tư vấn chiến lược như McKinsey; nguyên tắc MECE được Barbara Minto phổ biến trong "The Pyramid Principle".',
        what: `
            <p><strong>MECE</strong> = <em>Mutually Exclusive, Collectively Exhaustive</em>:</p>
            <ul>
                <li><strong>ME — không trùng lặp:</strong> mỗi yếu tố chỉ thuộc về một nhánh → không đếm hai lần, không phân tích hai lần.</li>
                <li><strong>CE — không bỏ sót:</strong> các nhánh cộng lại bao phủ toàn bộ vấn đề → không có "điểm mù".</li>
            </ul>
            <p>Hai loại cây chính:</p>
            <table>
                <tr><th>Loại</th><th>Câu hỏi</th><th>Dùng khi</th></tr>
                <tr><td>Cây chẩn đoán (Why tree)</td><td>"Tại sao X xảy ra?"</td><td>Bước chẩn đoán nguyên nhân</td></tr>
                <tr><td>Cây giải pháp (How tree)</td><td>"Làm thế nào để đạt Y?"</td><td>Bước tạo phương án</td></tr>
            </table>
            <h5>5 cách chia nhánh MECE</h5>
            <ul>
                <li><strong>Công thức:</strong> Lợi nhuận = Doanh thu − Chi phí; Doanh thu = Số khách × Giá trị đơn.</li>
                <li><strong>Quy trình:</strong> theo các bước khách hàng đi qua (biết đến → cân nhắc → mua → dùng → quay lại).</li>
                <li><strong>Phân đoạn:</strong> theo khu vực, nhóm tuổi, sản phẩm, kênh…</li>
                <li><strong>Đối lập:</strong> nội bộ / bên ngoài; cung / cầu; có thể kiểm soát / không thể.</li>
                <li><strong>Ma trận 2×2:</strong> kết hợp hai tiêu chí.</li>
            </ul>
        `,
        when: {
            use: [
                'Vấn đề lớn, mơ hồ, cần chia nhỏ để phân tích và phân công',
                'Khi cần trình bày lập luận chặt chẽ cho lãnh đạo/khách hàng',
                'Khi muốn chắc chắn không bỏ sót hướng nào'
            ],
            avoid: [
                'Vấn đề nhỏ, rõ ràng',
                'Giai đoạn cần sáng tạo tự do — MECE quá sớm có thể bóp nghẹt ý tưởng (dùng mind map trước)'
            ]
        },
        steps: [
            'Viết <strong>câu hỏi gốc</strong> cụ thể ở đỉnh cây (một câu hỏi, không phải một chủ đề).',
            'Chia nhánh cấp 1 theo <strong>một logic MECE</strong> (công thức, quy trình, phân đoạn…). Không trộn nhiều logic ở cùng một tầng.',
            'Tiếp tục chia 3–4 cấp cho tới khi mỗi "lá" là một câu hỏi <strong>trả lời được bằng dữ liệu hoặc phân tích cụ thể</strong>.',
            'Kiểm tra MECE ở từng tầng: có nhánh nào chồng lên nhau? Còn thiếu khả năng nào?',
            'Ưu tiên: đánh dấu nhánh có khả năng lớn nhất / tác động lớn nhất (80/20). Không phân tích đều tay mọi nhánh.',
            'Gắn cho mỗi lá: dữ liệu cần thu thập, người phụ trách, hạn chót.'
        ],
        example: `
            <p><strong>Câu hỏi gốc:</strong> Vì sao lợi nhuận chuỗi cửa hàng giảm 15% so với cùng kỳ?</p>
            <ul class="tree">
                <li>Doanh thu giảm?
                    <ul>
                        <li>Số khách giảm?
                            <ul><li>Khách mới ít hơn?</li><li>Khách cũ quay lại ít hơn?</li></ul>
                        </li>
                        <li>Giá trị đơn trung bình giảm?
                            <ul><li>Số món mỗi đơn giảm?</li><li>Giá bán trung bình giảm (khuyến mãi, cơ cấu món)?</li></ul>
                        </li>
                    </ul>
                </li>
                <li>Chi phí tăng?
                    <ul>
                        <li>Chi phí cố định (mặt bằng, lương cứng, khấu hao)?</li>
                        <li>Chi phí biến đổi (nguyên liệu, vận chuyển, phí nền tảng giao hàng)?</li>
                    </ul>
                </li>
            </ul>
            <p>Dữ liệu cho thấy doanh thu gần như không đổi → cắt bỏ nửa cây trái, tập trung vào chi phí. Trong chi phí biến đổi, phí nền tảng giao hàng tăng mạnh do tỷ trọng đơn online tăng từ 20% lên 45%.</p>
            <div class="warning-box">⚠️ Ví dụ vi phạm MECE: chia "Doanh thu giảm vì: Marketing kém / Quảng cáo ít / Giá cao". "Quảng cáo ít" nằm trong "Marketing kém" (trùng lặp), và thiếu hẳn các yếu tố như sản phẩm, đối thủ, mùa vụ (bỏ sót).</div>
        `,
        mistakes: [
            'Nhánh chồng chéo, dẫn tới phân tích trùng và kết luận rối',
            'Bỏ sót (chia khách hàng thành "trẻ" và "già" — còn trung niên thì sao?)',
            'Trộn cây "tại sao" và cây "làm thế nào" trong cùng một cây',
            'Lá quá chung chung ("vấn đề con người") — không kiểm chứng được',
            'Phân tích đều mọi nhánh thay vì ưu tiên'
        ],
        advanced: `
            <h5>Hypothesis tree</h5>
            <p>Thay vì câu hỏi trung lập, mỗi nhánh là một giả thuyết cần chứng minh/bác bỏ. Nhanh hơn khi đã có kinh nghiệm về lĩnh vực (xem Tư duy giả thuyết).</p>
            <h5>Driver tree / KPI tree</h5>
            <p>Cây công thức định lượng (ví dụ Doanh thu = Traffic × Conversion × AOV) cho phép tính <em>độ nhạy</em>: tăng 10% nhánh nào tạo tác động lớn nhất?</p>
            <h5>Pyramid Principle — trình bày kết quả</h5>
            <p>Phân tích đi từ dưới lên, nhưng trình bày từ trên xuống: <strong>kết luận trước</strong>, rồi 3 luận điểm MECE hỗ trợ, rồi dữ liệu cho từng luận điểm.</p>
            <div class="tip-box">💡 MECE hoàn hảo đôi khi không thể — mục tiêu là "đủ MECE để hữu ích", không phải bài tập logic.</div>
        `,
        checklist: [
            'Đỉnh cây là một câu hỏi cụ thể?',
            'Mỗi tầng dùng một logic chia duy nhất?',
            'Không trùng lặp, không bỏ sót?',
            'Mỗi lá kiểm chứng được bằng dữ liệu?',
            'Đã ưu tiên nhánh quan trọng?'
        ]
    },

    'design-thinking': {
        icon: '💡',
        title: 'Design Thinking',
        category: 'frameworks',
        level: 'intermediate',
        connections: ['reframing', 'brainstorming', 'pdca', 'xy-problem', 'define-problem'],
        summary: 'Quy trình giải quyết vấn đề lấy con người làm trung tâm: thấu hiểu người dùng thật → định nghĩa đúng nhu cầu → tạo ý tưởng → làm mẫu thử rẻ → thử với người thật, rồi lặp lại.',
        origin: 'Mô hình 5 bước được Stanford d.school và công ty thiết kế IDEO phổ biến; mô hình Double Diamond do UK Design Council đưa ra năm 2005.',
        what: `
            <p>Design Thinking phù hợp với vấn đề mà <strong>nhu cầu thực của con người chưa rõ</strong>. Thay vì đoán người dùng muốn gì, ta quan sát họ và thử nghiệm nhanh.</p>
            <ol>
                <li><strong>Empathize — Thấu hiểu:</strong> phỏng vấn, quan sát, trải nghiệm cùng người dùng.</li>
                <li><strong>Define — Định nghĩa:</strong> tổng hợp thành nhu cầu và insight.</li>
                <li><strong>Ideate — Tạo ý tưởng:</strong> mở rộng nhiều giải pháp.</li>
                <li><strong>Prototype — Làm mẫu thử:</strong> rẻ, nhanh, đủ để thử.</li>
                <li><strong>Test — Thử nghiệm:</strong> quan sát người thật dùng mẫu thử, học và lặp lại.</li>
            </ol>
            <div class="tip-box">💡 Các bước <strong>không tuyến tính</strong>: test có thể cho thấy ta định nghĩa sai vấn đề và phải quay về empathize.</div>
        `,
        when: {
            use: [
                'Thiết kế sản phẩm, dịch vụ, trải nghiệm cho con người',
                'Khi người dùng nói một đằng làm một nẻo, hoặc không nói được nhu cầu',
                'Vấn đề mới, chưa có giải pháp mẫu'
            ],
            avoid: [
                'Vấn đề kỹ thuật thuần tuý đã rõ yêu cầu (tối ưu một truy vấn database)',
                'Khi không thể tiếp cận người dùng thật'
            ]
        },
        steps: [
            '<strong>Empathize:</strong> phỏng vấn 5–10 người dùng bằng câu hỏi mở ("Kể lần gần nhất bạn…"), quan sát họ làm việc thật. Ghi lại lời nói, hành động, cảm xúc (empathy map: Nói – Nghĩ – Làm – Cảm thấy).',
            '<strong>Define:</strong> viết Point of View: <em>[Người dùng] cần [nhu cầu] vì [insight]</em>; chuyển thành câu hỏi "Làm thế nào chúng ta có thể…?"',
            '<strong>Ideate:</strong> brainstorm nhiều ý tưởng (Crazy 8s, SCAMPER), chọn vài ý tưởng để thử.',
            '<strong>Prototype:</strong> làm mẫu rẻ nhất có thể trả lời câu hỏi cần kiểm chứng: phác giấy, mockup Figma, đóng vai, hoặc "Wizard of Oz" (người thật đứng sau giả làm hệ thống).',
            '<strong>Test:</strong> đưa cho người thật dùng, <em>im lặng quan sát</em>, hỏi "Bạn đang nghĩ gì?" thay vì "Bạn có thích không?". Ghi lại, rồi lặp lại.'
        ],
        example: `
            <p><strong>Bài toán:</strong> Người cao tuổi ít dùng app đặt lịch khám của phòng khám.</p>
            <ul>
                <li><strong>Empathize:</strong> quan sát tại phòng khám — nhiều cụ không đọc được chữ nhỏ, sợ bấm nhầm "mất tiền", quen gọi điện, thường nhờ con cháu đặt hộ.</li>
                <li><strong>Define:</strong> "Người trên 65 tuổi cần đặt lịch khám mà không sợ thao tác sai, vì họ thiếu tự tin với smartphone."</li>
                <li><strong>HMW:</strong> "Làm thế nào để đặt lịch chỉ với một thao tác?" / "…để con cháu đặt hộ dễ dàng?"</li>
                <li><strong>Prototype:</strong> màn hình chỉ có một nút lớn "Gọi để đặt lịch" + tin nhắn xác nhận bằng giọng nói; và tính năng "chia sẻ cho con đặt hộ".</li>
                <li><strong>Test:</strong> 8/10 cụ đặt thành công, so với 3/10 trên app cũ.</li>
            </ul>
        `,
        mistakes: [
            'Bỏ qua Empathize, dựa vào giả định của đội ngũ',
            'Làm prototype quá đẹp, quá đắt → ngại vứt bỏ khi sai',
            'Test bằng câu hỏi dẫn dắt "Bạn có thích tính năng này không?"',
            'Coi là quy trình một chiều, làm xong 5 bước là hết',
            'Biến thành buổi workshop dán giấy nhớ vui vẻ nhưng không dẫn đến hành động'
        ],
        advanced: `
            <h5>Double Diamond</h5>
            <p>Hai viên kim cương, mỗi viên có pha mở rộng rồi thu hẹp: <strong>Discover → Define</strong> (tìm đúng vấn đề), <strong>Develop → Deliver</strong> (tìm đúng giải pháp). Nhấn mạnh rằng nửa đầu thời gian là để tìm đúng vấn đề.</p>
            <h5>Jobs To Be Done</h5>
            <p>Người dùng "thuê" sản phẩm để hoàn thành một "công việc": <em>"Khi [tình huống], tôi muốn [động cơ], để [kết quả mong muốn]."</em> Giúp nhìn qua tính năng tới động cơ thật.</p>
            <h5>Độ rộng của câu hỏi HMW</h5>
            <p>Quá rộng: "…làm người già hạnh phúc?" Quá hẹp: "…thêm nút gọi màu đỏ?" (đã chứa giải pháp). Vừa: "…giúp người già đặt lịch mà không sợ sai?"</p>
        `,
        checklist: [
            'Đã gặp và quan sát người dùng thật?',
            'Point of View có insight (không chỉ nhu cầu hiển nhiên)?',
            'Prototype đủ rẻ để sẵn sàng vứt bỏ?',
            'Test bằng quan sát hành vi, không hỏi dẫn dắt?'
        ]
    },

    'hypothesis-driven': {
        icon: '🔬',
        title: 'Tư Duy Giả Thuyết',
        category: 'frameworks',
        level: 'advanced',
        connections: ['issue-tree', 'confirmation-bias', 'pdca', 'cynefin'],
        summary: 'Đưa ra câu trả lời giả định sớm, rồi thiết kế phân tích để chứng minh hoặc bác bỏ nó — thay vì thu thập mọi dữ liệu rồi mới nghĩ. Nhanh hơn, tập trung hơn, miễn là sẵn sàng bỏ giả thuyết khi dữ liệu nói khác.',
        origin: 'Bắt nguồn từ phương pháp khoa học; là cách làm việc tiêu chuẩn của các công ty tư vấn chiến lược (McKinsey, BCG).',
        what: `
            <p>Có hai cách tiếp cận một vấn đề phân tích:</p>
            <table>
                <tr><th>Quy nạp thuần tuý</th><th>Dựa trên giả thuyết</th></tr>
                <tr><td>Thu thập mọi dữ liệu → tìm pattern → kết luận</td><td>Giả thuyết sớm → dữ liệu nào chứng minh/bác bỏ → kiểm chứng → cập nhật</td></tr>
                <tr><td>Dễ "đun sôi cả đại dương", chậm</td><td>Tập trung, nhanh, nhưng dễ dính thiên kiến xác nhận</td></tr>
            </table>
            <p><strong>Giả thuyết tốt</strong> phải:</p>
            <ul>
                <li><strong>Cụ thể:</strong> "Khách rời bỏ vì phí giao hàng ở đơn đầu tiên", không phải "vì trải nghiệm chưa tốt".</li>
                <li><strong>Bác bỏ được (falsifiable):</strong> nói rõ dữ liệu nào sẽ cho thấy nó sai.</li>
                <li><strong>Gắn với hành động:</strong> nếu đúng thì ta sẽ làm gì khác đi.</li>
            </ul>
        `,
        when: {
            use: [
                'Thời gian có hạn, không thể phân tích mọi thứ',
                'Đã có chút hiểu biết/kinh nghiệm về lĩnh vực',
                'Dữ liệu đắt hoặc chậm để thu thập'
            ],
            avoid: [
                'Lĩnh vực hoàn toàn mới, chưa có cơ sở để đoán — khám phá trước',
                'Khi nhóm có xu hướng bảo vệ giả thuyết bằng mọi giá (văn hoá không chấp nhận sai)'
            ]
        },
        steps: [
            'Định nghĩa câu hỏi chính (SMART).',
            'Đưa ra <strong>"câu trả lời ngày đầu"</strong> — giả thuyết tốt nhất dựa trên hiểu biết hiện có.',
            'Chia thành giả thuyết con: <em>"Để điều này đúng, những gì phải đúng?"</em>',
            'Với mỗi giả thuyết con: viết trước <strong>dữ liệu nào sẽ xác nhận, dữ liệu nào sẽ bác bỏ</strong>, và ngưỡng quyết định.',
            'Thu thập dữ liệu theo thứ tự: rẻ nhất và có khả năng thay đổi kết luận nhiều nhất trước.',
            'Cập nhật: giữ, sửa, hoặc bỏ giả thuyết — không gắn bó cảm xúc.',
            'Tổng hợp thành khuyến nghị, nêu rõ mức độ chắc chắn.'
        ],
        example: `
            <p><strong>Bối cảnh:</strong> Ứng dụng giao đồ ăn thấy tỷ lệ giữ chân khách mới (quay lại trong 30 ngày) giảm từ 40% xuống 28%.</p>
            <p><strong>Giả thuyết ngày đầu:</strong> "Khách mới rời bỏ vì phí giao hàng cao ở đơn đầu tiên."</p>
            <p><strong>Để đúng, cần:</strong></p>
            <ol>
                <li>Khách rời bỏ trả phí giao trung bình cao hơn khách ở lại.</li>
                <li>Khách được miễn phí giao đơn đầu quay lại nhiều hơn.</li>
                <li>Trong khảo sát rời bỏ, "phí giao" là lý do hàng đầu.</li>
            </ol>
            <p><strong>Kiểm chứng:</strong> phân tích cohort (1), A/B test miễn phí giao 2 tuần (2), khảo sát 200 khách (3).</p>
            <p><strong>Kết quả:</strong> (1) không khác biệt đáng kể; (2) chỉ tăng 2 điểm %; (3) lý do số 1 là <em>thời gian giao trên 45 phút</em>. → Bỏ giả thuyết cũ, lập giả thuyết mới về tốc độ giao ở các khu vực mới mở rộng.</p>
            <div class="tip-box">💡 Giả thuyết bị bác bỏ sau 1 tuần là <strong>thành công</strong> của phương pháp — rẻ hơn nhiều so với chạy chương trình miễn phí giao hàng cả năm.</div>
        `,
        mistakes: [
            'Giả thuyết mơ hồ đến mức dữ liệu nào cũng "phù hợp"',
            'Chỉ tìm dữ liệu ủng hộ (thiên kiến xác nhận)',
            'Không viết trước tiêu chí bác bỏ → dời cột gôn khi dữ liệu bất lợi',
            'Trình bày giả thuyết như thể đã là kết luận'
        ],
        advanced: `
            <h5>"Điều gì phải đúng?"</h5>
            <p>Thay vì tranh luận phương án nào đúng, hỏi: <em>"Để phương án A là lựa chọn tốt nhất, những điều gì phải đúng?"</em> — rồi kiểm tra điều khó tin nhất trước. Cách này biến tranh cãi thành kế hoạch kiểm chứng.</p>
            <h5>Giá trị của thông tin</h5>
            <p>Chỉ thu thập dữ liệu nếu nó <strong>có thể thay đổi quyết định</strong>. Nếu dù kết quả ra sao ta vẫn làm như nhau, đừng tốn công.</p>
            <h5>Cập nhật kiểu Bayes</h5>
            <p>Mỗi bằng chứng mới không "chứng minh" hay "bác bỏ" tuyệt đối mà làm <em>tăng hoặc giảm độ tin</em>. Hãy ghi độ tin ban đầu (ví dụ 60%) và cập nhật dần.</p>
            <p><em>"Strong opinions, weakly held"</em> (Paul Saffo): đủ mạnh dạn để đưa ra giả thuyết, đủ khiêm tốn để bỏ nó.</p>
        `,
        checklist: [
            'Giả thuyết cụ thể và bác bỏ được?',
            'Đã viết trước dữ liệu nào sẽ bác bỏ nó?',
            'Đang kiểm tra điều rẻ nhất, quyết định nhất trước?',
            'Sẵn sàng bỏ giả thuyết nếu dữ liệu nói khác?'
        ]
    },

    'cynefin': {
        icon: '🌀',
        title: 'Phân Loại Vấn Đề (Cynefin)',
        category: 'frameworks',
        level: 'advanced',
        connections: ['ps-process', 'hypothesis-driven', 'systems-thinking', 'pdca'],
        summary: 'Không phải vấn đề nào cũng giải bằng một cách. Cynefin chia tình huống thành Rõ ràng, Phức tạp, Phức hợp, Hỗn loạn theo mức độ rõ ràng của quan hệ nhân–quả, và mỗi loại cần một cách tiếp cận khác.',
        origin: 'Dave Snowden phát triển năm 1999 khi làm việc tại IBM. "Cynefin" là từ tiếng xứ Wales, nghĩa gần với "môi trường sống, nơi chốn quen thuộc".',
        what: `
            <table>
                <tr><th>Loại</th><th>Đặc điểm</th><th>Cách tiếp cận</th><th>Ví dụ</th></tr>
                <tr><td><strong>Rõ ràng</strong> (Clear)</td><td>Nhân–quả hiển nhiên, ai cũng thấy; có "best practice"</td><td>Nhận biết → Phân loại → Làm theo quy trình</td><td>Xử lý hoàn tiền theo chính sách</td></tr>
                <tr><td><strong>Phức tạp</strong> (Complicated)</td><td>Nhân–quả tồn tại nhưng cần chuyên gia phân tích; có nhiều đáp án tốt</td><td>Nhận biết → Phân tích → Hành động</td><td>Sửa động cơ máy bay, tối ưu hiệu năng database</td></tr>
                <tr><td><strong>Phức hợp</strong> (Complex)</td><td>Nhân–quả chỉ thấy được khi nhìn lại; kết quả "nổi lên" từ tương tác</td><td>Thăm dò (thử nghiệm nhỏ) → Nhận biết → Khuếch đại cái hiệu quả</td><td>Thay đổi văn hoá công ty, tìm product–market fit</td></tr>
                <tr><td><strong>Hỗn loạn</strong> (Chaotic)</td><td>Không có quan hệ nhân–quả rõ; khẩn cấp</td><td>Hành động ngay để ổn định → Nhận biết → Phản ứng</td><td>Khủng hoảng truyền thông, hệ thống sập toàn bộ</td></tr>
                <tr><td><strong>Không xác định</strong> (Confused)</td><td>Chưa biết mình đang ở loại nào</td><td>Chia nhỏ tình huống, xếp từng phần vào loại phù hợp</td><td>Giai đoạn đầu của một biến cố lớn</td></tr>
            </table>
            <div class="warning-box">⚠️ Lỗi phổ biến nhất: coi vấn đề <strong>phức hợp</strong> như vấn đề <strong>phức tạp</strong> — tin rằng chỉ cần thêm dữ liệu và chuyên gia là tìm ra "đáp án đúng", trong khi thực tế phải thử nghiệm mới biết.</div>
        `,
        when: {
            use: [
                'Trước khi chọn phương pháp giải quyết vấn đề',
                'Khi phương pháp quen thuộc liên tục thất bại',
                'Trong khủng hoảng, để quyết định nên hành động hay phân tích'
            ],
            avoid: [
                'Không dùng để "dán nhãn" rồi dừng — giá trị nằm ở việc chọn cách hành động'
            ]
        },
        steps: [
            'Hỏi: <em>Quan hệ nhân–quả có rõ với mọi người không?</em> Có → Rõ ràng.',
            'Nếu không: <em>Chuyên gia có thể phân tích ra đáp án trước khi làm không?</em> Có → Phức tạp.',
            'Nếu không: <em>Có thể thử nghiệm an toàn và học từ phản hồi không?</em> Có → Phức hợp.',
            'Nếu tình huống đang mất kiểm soát, gây thiệt hại từng phút → Hỗn loạn: hành động để ổn định trước.',
            'Chia vấn đề lớn thành các phần; mỗi phần có thể thuộc loại khác nhau.',
            'Theo dõi sự dịch chuyển: tình huống có thể chuyển từ loại này sang loại khác.'
        ],
        example: `
            <p><strong>Ngày ra mắt sản phẩm mới của một startup</strong> có đủ cả 4 loại:</p>
            <ul>
                <li>🔥 <strong>Hỗn loạn:</strong> server sập khi lượng truy cập tăng vọt → bật chế độ bảo trì, tăng máy chủ ngay; phân tích sau.</li>
                <li>📋 <strong>Rõ ràng:</strong> khách yêu cầu hoàn tiền → làm theo chính sách đã có.</li>
                <li>🔧 <strong>Phức tạp:</strong> tối ưu hiệu năng để chịu tải gấp 10 → kỹ sư profile, phân tích, sửa.</li>
                <li>🌱 <strong>Phức hợp:</strong> tìm ra nhóm khách hàng thực sự trả tiền → chạy nhiều thử nghiệm nhỏ song song (giá, thông điệp, kênh), khuếch đại cái hiệu quả.</li>
            </ul>
        `,
        mistakes: [
            'Áp best practice cho vấn đề phức hợp ("công ty X làm vậy thành công")',
            'Ngồi phân tích khi đang hỗn loạn — mỗi phút chờ là thêm thiệt hại',
            'Coi mọi thứ là "phức tạp" và tin rằng thêm dữ liệu sẽ ra đáp án',
            'Tự mãn ở vùng Rõ ràng: quy trình cứng nhắc khiến tổ chức rơi thẳng vào Hỗn loạn khi môi trường thay đổi'
        ],
        advanced: `
            <h5>Thử nghiệm an toàn để thất bại (safe-to-fail probes)</h5>
            <p>Với vấn đề phức hợp, chạy nhiều thử nghiệm nhỏ song song. Mỗi thử nghiệm cần: dấu hiệu thành công, dấu hiệu thất bại, cách <em>khuếch đại</em> nếu tốt và cách <em>dập tắt</em> nếu xấu. Thất bại của một thử nghiệm là thông tin, không phải thảm hoạ.</p>
            <h5>"Vách đá" giữa Rõ ràng và Hỗn loạn</h5>
            <p>Tổ chức quá tự tin vào quy trình (vùng Rõ ràng) thường không nhận ra môi trường đã đổi — và rơi thẳng vào khủng hoảng thay vì chuyển dần. Nokia, Kodak là ví dụ hay được nhắc.</p>
            <h5>Phức tạp ≠ Phức hợp</h5>
            <p>Chiếc đồng hồ cơ là phức tạp: tháo ra, lắp lại được, hiểu được từng bộ phận. Một khu rừng, một thị trường, một đội ngũ là phức hợp: các phần tương tác và thích nghi, tổng thể không bằng tổng các phần.</p>
        `,
        checklist: [
            'Nhân–quả ở đây rõ, cần phân tích, hay chỉ thấy khi thử?',
            'Có đang dùng best practice cho vấn đề phức hợp?',
            'Nếu đang khủng hoảng: đã ổn định trước chưa?',
            'Đã chia vấn đề lớn thành các phần khác loại?'
        ]
    },

    'first-principles': {
        icon: '⚛️',
        title: 'First Principles Thinking',
        category: 'frameworks',
        level: 'advanced',
        connections: ['analogy', 'abstraction', 'reframing', 'mental-set'],
        summary: 'Phân rã vấn đề đến những sự thật cơ bản nhất không thể chối cãi, rồi xây dựng lại giải pháp từ đó — thay vì suy luận bằng cách "người khác vẫn làm thế".',
        origin: 'Aristotle mô tả "nguyên lý đầu tiên" là cơ sở nền tảng mà từ đó mọi thứ khác được hiểu. Trong kinh doanh, Elon Musk là người hay nhắc đến cách tư duy này.',
        what: `
            <p>Phần lớn thời gian chúng ta suy luận bằng <strong>loại suy</strong> (analogy): "Pin xe điện đắt vì trước giờ vẫn đắt", "Đám cưới phải tốn 500 triệu vì ai cũng vậy". Cách này nhanh nhưng giữ ta trong giới hạn của những gì đã có.</p>
            <p><strong>First principles</strong> hỏi: <em>Điều gì chắc chắn đúng ở đây?</em> — định luật vật lý, chi phí nguyên vật liệu, nhu cầu thật của con người — và xây dựng lại từ đó.</p>
            <table>
                <tr><th>Suy luận loại suy</th><th>Suy luận từ nguyên lý</th></tr>
                <tr><td>"Tên lửa đắt vì ngành hàng không vũ trụ vốn đắt"</td><td>"Tên lửa làm từ gì? Nguyên liệu chiếm bao nhiêu % giá? Phần còn lại vì sao?"</td></tr>
                <tr><td>Cải tiến từ từ (+10%)</td><td>Có thể tạo đột phá (10×)</td></tr>
                <tr><td>Nhanh, ít tốn năng lượng</td><td>Chậm, tốn nhiều công sức</td></tr>
            </table>
        `,
        when: {
            use: [
                'Muốn đột phá thay vì cải tiến dần',
                'Mọi người nói "không thể" hoặc "vốn dĩ là vậy"',
                'Chi phí/giá thành có vẻ vô lý so với giá trị'
            ],
            avoid: [
                'Vấn đề hằng ngày có giải pháp tốt sẵn — dùng lại cho nhanh',
                'Khi thiếu kiến thức nền để biết đâu là "sự thật cơ bản"'
            ]
        },
        steps: [
            'Nêu vấn đề và niềm tin hiện tại ("Pin xe điện quá đắt và sẽ luôn như vậy").',
            'Liệt kê các <strong>giả định ẩn</strong> trong niềm tin đó.',
            'Chất vấn từng giả định: <em>Tại sao tôi tin điều này? Bằng chứng là gì? Nếu điều ngược lại đúng thì sao?</em>',
            'Phân rã đến các thành phần cơ bản đã được kiểm chứng (vật lý, toán học, chi phí thực, nhu cầu thực).',
            'Xây dựng lại giải pháp từ các thành phần đó, <strong>bỏ qua cách mọi người vẫn làm</strong>.',
            'Kiểm tra ràng buộc thực tế (luật, con người, thời gian) trước khi triển khai.'
        ],
        example: `
            <h5>Pin xe điện</h5>
            <p>Khoảng năm 2012, pin lithium-ion được bán với giá ~600 USD/kWh và nhiều người cho rằng khó giảm nhiều. Musk phân rã: pin gồm cobalt, nickel, nhôm, carbon, polymer, vỏ thép… Nếu mua nguyên liệu trên sàn giao dịch kim loại, tổng chỉ khoảng ~80 USD/kWh. → Vấn đề nằm ở <em>cách sản xuất và kết hợp</em>, không phải bản chất vật liệu. Tesla đầu tư nhà máy pin quy mô lớn để kéo giá xuống.</p>
            <h5>Ví dụ đời thường: "Tôi cần mua ô tô để đi làm"</h5>
            <ul>
                <li><strong>Sự thật cơ bản:</strong> cần di chuyển 12 km mỗi chiều, an toàn, dưới 40 phút, chi phí dưới 5 triệu/tháng, trời mưa không ướt.</li>
                <li><strong>Xây dựng lại:</strong> xe máy điện + áo mưa tốt; xe buýt + xe đạp; làm việc từ xa 2 ngày/tuần + gọi xe; thuê nhà gần công ty hơn…</li>
            </ul>
            <p>"Ô tô" chỉ là một giải pháp; nhu cầu gốc mở ra nhiều lựa chọn hơn.</p>
        `,
        mistakes: [
            'Dùng cho mọi vấn đề → kiệt sức và chậm chạp',
            'Dừng phân rã quá sớm, nhầm giả định với sự thật ("khách hàng muốn rẻ nhất")',
            'Bỏ qua ràng buộc thực tế như pháp luật, văn hoá, thói quen người dùng',
            'Coi thường kinh nghiệm tích luỹ — nhiều "quy ước" tồn tại vì lý do chính đáng'
        ],
        advanced: `
            <h5>Hàng rào của Chesterton</h5>
            <p>Nếu thấy một hàng rào giữa đường và không hiểu vì sao nó ở đó, <em>đừng dỡ nó</em> cho tới khi tìm ra lý do. First principles không có nghĩa là phá bỏ mọi quy ước — mà là hiểu vì sao quy ước tồn tại, rồi quyết định giữ hay bỏ.</p>
            <h5>Câu hỏi Socratic để phân rã</h5>
            <ul>
                <li>Làm rõ: "Chính xác thì ý mình là gì?"</li>
                <li>Chất vấn giả định: "Điều gì khiến mình nghĩ vậy?"</li>
                <li>Tìm bằng chứng: "Làm sao mình biết? Nguồn nào?"</li>
                <li>Góc nhìn khác: "Người phản đối sẽ nói gì?"</li>
                <li>Hệ quả: "Nếu đúng vậy thì điều gì xảy ra tiếp?"</li>
            </ul>
            <h5>Kết hợp với loại suy</h5>
            <p>Dùng first principles để tìm hướng đột phá, dùng loại suy (học từ người đi trước) để triển khai nhanh các phần không cần phát minh lại.</p>
        `,
        checklist: [
            'Đã liệt kê các giả định ẩn?',
            'Mỗi "sự thật" có bằng chứng thật sự?',
            'Có đang dỡ "hàng rào" mà chưa hiểu lý do?',
            'Vấn đề này có đáng công phân tích từ gốc?'
        ]
    }
};
