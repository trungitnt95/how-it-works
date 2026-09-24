// Problem Solving - Techniques (kỹ thuật tạo ý tưởng, phân tích & ra quyết định)
// Cùng schema với frameworks.js
const techniquesData = {
    'brainstorming': {
        icon: '🧠',
        title: 'Brainstorming',
        category: 'techniques',
        level: 'beginner',
        connections: ['scamper', 'six-hats', 'mind-mapping', 'groupthink', 'reframing'],
        summary: 'Tạo ra thật nhiều ý tưởng trước, đánh giá sau. Làm đúng cách (nghĩ riêng trước, chia sẻ sau, không phê bình sớm) thì hiệu quả hơn nhiều so với một buổi "ai nghĩ gì nói nấy".',
        origin: 'Alex Osborn, giám đốc quảng cáo người Mỹ, phổ biến từ thập niên 1940–1950 (sách "Applied Imagination", 1953).',
        what: `
            <p>Brainstorming tách hai hoạt động mà não thường làm lẫn lộn: <strong>tạo ý tưởng</strong> (mở rộng) và <strong>đánh giá ý tưởng</strong> (thu hẹp). Khi vừa nghĩ vừa chê, ý tưởng mới bị bóp chết từ trong trứng.</p>
            <h5>4 quy tắc gốc của Osborn</h5>
            <ul>
                <li>🚫 <strong>Hoãn phê bình</strong> — không đánh giá trong lúc tạo ý tưởng.</li>
                <li>📈 <strong>Số lượng trước chất lượng</strong> — ý tưởng tốt thường xuất hiện ở nửa sau danh sách.</li>
                <li>🚀 <strong>Hoan nghênh ý tưởng "điên"</strong> — dễ "thuần hoá" ý tưởng táo bạo hơn là làm ý tưởng nhạt trở nên táo bạo.</li>
                <li>🔗 <strong>Kết hợp và phát triển</strong> ý tưởng của người khác ("Có, và…").</li>
            </ul>
            <div class="warning-box">⚠️ Nghiên cứu (Diehl & Stroebe, 1987 và nhiều nghiên cứu sau) cho thấy nhóm brainstorm nói to thường tạo <strong>ít ý tưởng hơn</strong> so với cùng số người nghĩ riêng rồi gộp lại. Lý do: chờ lượt nói nên quên ý (production blocking), sợ bị đánh giá, và ỷ lại người khác. → Luôn cho <strong>nghĩ riêng trước</strong>.</div>
        `,
        when: {
            use: [
                'Bước tạo phương án, khi cần nhiều lựa chọn',
                'Khi nhóm bị kẹt với một vài ý tưởng quen thuộc',
                'Tìm nguyên nhân khả dĩ (kết hợp với Fishbone)'
            ],
            avoid: [
                'Khi vấn đề chưa được định nghĩa — ý tưởng sẽ lan man',
                'Khi cần một đáp án kỹ thuật chính xác (tính toán, tra cứu)'
            ]
        },
        steps: [
            'Nêu câu hỏi rõ ràng dạng "Làm thế nào chúng ta có thể…?" và đặt giới hạn thời gian (15–25 phút).',
            '<strong>Nghĩ riêng, im lặng</strong> 5–10 phút: mỗi ý tưởng một tờ giấy nhớ.',
            'Chia sẻ lần lượt từng người; không bình luận, chỉ hỏi để làm rõ; khuyến khích phát triển ý của nhau.',
            '<strong>Gom nhóm</strong> các ý tưởng giống nhau (affinity mapping) và đặt tên nhóm.',
            'Chọn lọc: mỗi người bỏ 3 phiếu (dot voting), hoặc đánh giá theo tiêu chí đã thống nhất.',
            'Chọn 2–3 ý tưởng để phát triển tiếp, giao người phụ trách và bước tiếp theo.'
        ],
        example: `
            <p><strong>HMW:</strong> Làm thế nào để giảm phàn nàn về thời gian chờ thang máy trong toà nhà văn phòng?</p>
            <p><strong>Ý tưởng sau 10 phút (một phần):</strong> thêm thang máy · thang chỉ dừng tầng chẵn/lẻ · giờ làm lệch nhau giữa các công ty · khuyến khích đi thang bộ 1–2 tầng · màn hình hiển thị thời gian chờ · treo gương cạnh thang · đặt TV tin tức · app gọi thang trước · ưu tiên người mang đồ nặng…</p>
            <p><strong>Gom nhóm:</strong> Kỹ thuật (thang mới, thuật toán điều phối) · Vận hành (giờ lệch) · Hành vi (thang bộ) · <em>Cảm nhận</em> (gương, màn hình, TV).</p>
            <p>Nhóm "Cảm nhận" rẻ nhất và nhanh nhất — gương cạnh thang máy là giải pháp kinh điển giúp giảm phàn nàn vì người ta bận nhìn mình, không thấy chờ lâu.</p>
        `,
        mistakes: [
            'Sếp phát biểu đầu tiên → mọi người neo theo ý sếp',
            'Phê bình ngay khi ý tưởng vừa nói ra',
            'Không giới hạn thời gian → buổi họp kéo dài, năng lượng giảm',
            'Có danh sách dài nhưng không có bước chọn lọc và hành động',
            'Câu hỏi quá mơ hồ ("Cải thiện công ty thế nào?")'
        ],
        advanced: `
            <h5>Các biến thể</h5>
            <table>
                <tr><th>Kỹ thuật</th><th>Cách làm</th><th>Khi nào dùng</th></tr>
                <tr><td>Brainwriting 6-3-5</td><td>6 người × 3 ý tưởng × 5 phút, chuyền giấy 6 vòng → tới 108 ý tưởng</td><td>Nhóm có người lấn át, người ngại nói</td></tr>
                <tr><td>Reverse brainstorming</td><td>"Làm sao để vấn đề TỆ HƠN?" rồi đảo ngược từng ý</td><td>Khi bí ý tưởng, cần góc nhìn mới</td></tr>
                <tr><td>Starbursting</td><td>Chỉ đặt câu hỏi Who/What/When/Where/Why/How, chưa trả lời</td><td>Khám phá một ý tưởng trước khi triển khai</td></tr>
                <tr><td>Crazy 8s</td><td>Gấp giấy 8 ô, phác 8 ý tưởng trong 8 phút</td><td>Thiết kế sản phẩm, giao diện</td></tr>
                <tr><td>Worst possible idea</td><td>Cố tình nghĩ ý tưởng tệ nhất, rồi tìm điểm hay trong đó</td><td>Phá băng, giảm áp lực</td></tr>
            </table>
            <h5>Ràng buộc kích thích sáng tạo</h5>
            <p>Thêm câu hỏi ràng buộc để thoát lối mòn: "Nếu ngân sách bằng 0?", "Nếu phải xong trong 1 ngày?", "Nếu Apple/Grab/một đứa trẻ giải bài này?"</p>
        `,
        checklist: [
            'Câu hỏi HMW rõ ràng?',
            'Có thời gian nghĩ riêng trước khi chia sẻ?',
            'Không ai phê bình trong pha tạo ý tưởng?',
            'Có bước chọn lọc và hành động cụ thể?'
        ]
    },

    'mind-mapping': {
        icon: '🗺️',
        title: 'Mind Mapping',
        category: 'techniques',
        level: 'beginner',
        connections: ['brainstorming', 'issue-tree', 'divide-conquer'],
        summary: 'Sơ đồ tư duy: chủ đề ở trung tâm, các ý liên quan toả ra thành nhánh. Tự do, trực quan, giúp khám phá và sắp xếp ý nghĩ trước khi phân tích chặt chẽ.',
        origin: 'Tony Buzan phổ biến rộng rãi từ thập niên 1970, dù các dạng sơ đồ toả tia đã có từ rất lâu trước đó.',
        what: `
            <p>Mind map mô phỏng cách não liên tưởng: một ý gợi ra nhiều ý khác. Nhờ nhìn thấy cả bức tranh trên một trang, ta dễ phát hiện nhánh còn trống, mối liên hệ chéo và điểm quan trọng.</p>
            <table>
                <tr><th></th><th>Mind map</th><th>Issue tree</th></tr>
                <tr><td>Mục đích</td><td>Khám phá, ghi chú, liên tưởng</td><td>Phân tích chặt chẽ</td></tr>
                <tr><td>Quy tắc</td><td>Tự do</td><td>MECE, logic nhất quán mỗi tầng</td></tr>
                <tr><td>Giai đoạn</td><td>Đầu — khi còn mơ hồ</td><td>Sau — khi cần hệ thống hoá</td></tr>
            </table>
        `,
        when: {
            use: [
                'Bắt đầu tìm hiểu một vấn đề mới, còn mơ hồ',
                'Ghi chú cuộc họp, bài giảng, sách',
                'Lên kế hoạch dự án/sự kiện ở mức tổng quan'
            ],
            avoid: [
                'Khi cần phân tích nghiêm ngặt, không trùng lặp — dùng Issue tree',
                'Quy trình có thứ tự chặt chẽ — dùng flowchart'
            ]
        },
        steps: [
            'Viết chủ đề (hoặc vấn đề) ở giữa trang, có thể kèm hình vẽ.',
            'Vẽ 4–7 nhánh chính cho các khía cạnh lớn.',
            'Thêm nhánh con — mỗi nhánh <strong>một từ khoá</strong>, không viết câu dài.',
            'Dùng màu sắc/biểu tượng khác nhau cho mỗi nhánh chính.',
            'Vẽ đường nối giữa các nhánh có liên quan (liên kết chéo thường là insight).',
            'Rà soát: nhánh nào còn mỏng? Điều gì quan trọng nhất? Đánh dấu để hành động.'
        ],
        example: `
            <p><strong>Chủ đề:</strong> "Sức khoẻ sa sút mấy tháng gần đây"</p>
            <ul class="tree">
                <li>😴 Ngủ <ul><li>Ngủ sau 1h sáng</li><li>Dùng điện thoại trên giường</li></ul></li>
                <li>🍜 Ăn uống <ul><li>Bỏ bữa sáng</li><li>Trà sữa hằng ngày</li></ul></li>
                <li>🏃 Vận động <ul><li>Ngồi 10 tiếng/ngày</li><li>Bỏ đá bóng từ khi đổi việc</li></ul></li>
                <li>😰 Căng thẳng <ul><li>Dự án mới, OT nhiều</li></ul></li>
                <li>🩺 Khám bệnh <ul><li>2 năm chưa khám tổng quát</li></ul></li>
            </ul>
            <p><strong>Liên kết chéo:</strong> "Dự án mới" → OT → ngủ muộn → bỏ bữa sáng → trà sữa để tỉnh táo. Một nguyên nhân kéo theo cả chuỗi — gợi ý nơi can thiệp hiệu quả nhất.</p>
        `,
        mistakes: [
            'Viết cả câu dài ở mỗi nhánh → rối, khó nhìn tổng thể',
            'Quá nhiều nhánh chính (10–15) → mất trọng tâm',
            'Mải làm cho đẹp thay vì dùng để suy nghĩ',
            'Dùng mind map khi thực ra cần phân tích MECE'
        ],
        advanced: `
            <h5>Concept map</h5>
            <p>Giống mind map nhưng các đường nối có <strong>nhãn quan hệ</strong> ("gây ra", "là một loại", "phụ thuộc vào"). Mạnh hơn cho việc hiểu hệ thống.</p>
            <h5>Mind map để học</h5>
            <p>Sau khi đọc, gập sách lại và vẽ mind map từ trí nhớ (active recall) rồi mới so với sách — hiệu quả ghi nhớ cao hơn nhiều so với đọc lại.</p>
            <h5>Công cụ</h5>
            <p>Giấy và bút màu (nhanh nhất để nghĩ), Miro/FigJam (làm nhóm), XMind/MindMeister (lưu trữ, trình bày).</p>
        `,
        checklist: [
            'Chủ đề trung tâm rõ ràng?',
            'Mỗi nhánh là một từ khoá ngắn?',
            'Đã tìm liên kết chéo giữa các nhánh?',
            'Đã đánh dấu điều cần hành động?'
        ]
    },

    'divide-conquer': {
        icon: '✂️',
        title: 'Divide and Conquer',
        category: 'techniques',
        level: 'beginner',
        connections: ['issue-tree', 'mind-mapping', 'constraints', 'systems-thinking'],
        summary: 'Chia vấn đề lớn thành các phần nhỏ, gần như độc lập, đủ nhỏ để giải quyết — rồi ghép lại. Biến thể mạnh nhất khi tìm lỗi: chia đôi không gian tìm kiếm liên tục (bisection).',
        what: `
            <p>Vấn đề lớn gây quá tải vì não chỉ giữ được vài thứ cùng lúc. Chia nhỏ giúp: giảm tải nhận thức, phân công được, làm song song được, và dễ ước lượng.</p>
            <p>Ba pha:</p>
            <ol>
                <li><strong>Divide:</strong> chia thành bài toán con.</li>
                <li><strong>Conquer:</strong> giải từng bài toán con.</li>
                <li><strong>Combine:</strong> ghép lời giải và kiểm tra tổng thể.</li>
            </ol>
            <h5>Chia đôi để tìm lỗi (bisection)</h5>
            <p>Khi cần tìm "chỗ hỏng" trong một chuỗi dài, kiểm tra điểm giữa: lỗi ở nửa trước hay nửa sau? Lặp lại. Với 64 khả năng, chỉ cần tối đa <strong>6 lần</strong> kiểm tra (2⁶ = 64) thay vì 64 lần.</p>
        `,
        when: {
            use: [
                'Vấn đề quá lớn để xử lý một lần (dự án, luận văn, dọn nhà)',
                'Tìm điểm hỏng trong chuỗi dài (code, mạng, quy trình, dây điện)',
                'Các phần có thể giải tương đối độc lập hoặc song song'
            ],
            avoid: [
                'Vấn đề mà các phần liên kết chặt, thay đổi phần này ảnh hưởng phần kia — cần tư duy hệ thống',
                'Vấn đề đã đủ nhỏ — chia thêm chỉ tốn công quản lý'
            ]
        },
        steps: [
            'Xác định ranh giới vấn đề và đầu ra mong muốn.',
            'Chọn trục chia phù hợp: theo chức năng, thời gian, không gian, bước quy trình, hoặc thành phần.',
            'Kiểm tra: các phần có đủ độc lập? Mỗi phần có đủ nhỏ để bắt tay vào ngay hôm nay?',
            'Sắp xếp thứ tự theo phụ thuộc và rủi ro (phần rủi ro cao nên làm sớm để học sớm).',
            'Giải từng phần.',
            '<strong>Ghép lại và kiểm tra tổng thể</strong> — các phần tốt chưa chắc tạo ra tổng thể tốt.'
        ],
        example: `
            <h5>Tìm lỗi bằng chia đôi</h5>
            <p>App bị lỗi sau khi gộp 64 commit. Thay vì xem từng commit, dùng <code>git bisect</code>: kiểm tra commit thứ 32 — còn lỗi không? Có → lỗi nằm ở 1–32; không → 33–64. Sau tối đa 6 lần là tìm ra commit gây lỗi.</p>
            <h5>Mất mạng ở nhà</h5>
            <p>Máy tính → Wi-Fi → router → modem → cáp → nhà mạng. Kiểm tra ở giữa trước: điện thoại có vào mạng qua Wi-Fi không? Không → lỗi từ router trở ra; có → lỗi ở máy tính.</p>
            <h5>Viết luận văn 80 trang</h5>
            <p>Luận văn → 5 chương → mỗi chương 3–4 mục → mỗi mục các task 2 giờ ("đọc 3 bài báo về X", "viết nháp mục 2.1"). Task 2 giờ thì bắt đầu được ngay; "viết luận văn" thì không.</p>
        `,
        mistakes: [
            'Chia theo trục mà các phần phụ thuộc chéo nhau → không làm song song được',
            'Tối ưu từng phần làm hỏng tổng thể (mỗi phòng ban tối ưu KPI riêng)',
            'Quên bước ghép và kiểm tra tổng thể',
            'Chia quá vụn → tốn công quản lý hơn công làm'
        ],
        advanced: `
            <h5>Work Breakdown Structure (WBS)</h5>
            <p>Trong quản lý dự án: <strong>quy tắc 100%</strong> — các phần con phải bao phủ đúng 100% công việc của phần cha (tương tự MECE). <strong>Quy tắc 8/80</strong> — mỗi gói việc nhỏ nhất nên mất từ 8 đến 80 giờ.</p>
            <h5>Trong lập trình</h5>
            <p>Merge sort, quick sort, binary search đều là chia để trị. Ở tầng kiến trúc: separation of concerns, module, microservices.</p>
            <h5>Làm phần khó trước hay phần dễ trước?</h5>
            <p>Phần rủi ro/không chắc chắn nhất nên làm sớm để phát hiện vấn đề khi còn thời gian điều chỉnh. Phần dễ có thể làm xen kẽ để giữ động lực.</p>
        `,
        checklist: [
            'Mỗi phần đủ nhỏ để bắt đầu ngay?',
            'Các phần có đủ độc lập với nhau?',
            'Đang tìm lỗi? Đã thử chia đôi chưa?',
            'Đã kiểm tra tổng thể sau khi ghép?'
        ]
    },

    'prioritization': {
        icon: '🗂️',
        title: 'Ma Trận Ưu Tiên',
        category: 'techniques',
        level: 'beginner',
        connections: ['pareto', 'decision-matrix', 'constraints', 'analysis-paralysis'],
        summary: 'Không thể giải mọi vấn đề cùng lúc. Ma trận Impact–Effort, Eisenhower và điểm RICE/ICE giúp chọn việc đáng làm trước dựa trên tác động, công sức và mức độ chắc chắn.',
        what: `
            <h5>Ma trận Impact – Effort (Tác động – Công sức)</h5>
            <div class="matrix-2x2">
                <div class="m-cell good"><strong>⚡ Quick wins</strong><span>Tác động cao · Công sức thấp</span><em>→ Làm ngay</em></div>
                <div class="m-cell plan"><strong>🏗️ Dự án lớn</strong><span>Tác động cao · Công sức cao</span><em>→ Lên kế hoạch, chia nhỏ</em></div>
                <div class="m-cell meh"><strong>🧩 Việc lấp chỗ trống</strong><span>Tác động thấp · Công sức thấp</span><em>→ Làm khi rảnh</em></div>
                <div class="m-cell bad"><strong>🕳️ Hố tiền</strong><span>Tác động thấp · Công sức cao</span><em>→ Bỏ</em></div>
            </div>
            <h5>Ma trận Eisenhower (Khẩn cấp – Quan trọng)</h5>
            <table>
                <tr><th></th><th>Khẩn cấp</th><th>Không khẩn cấp</th></tr>
                <tr><td><strong>Quan trọng</strong></td><td>Làm ngay (khủng hoảng, deadline)</td><td>Lên lịch (phòng ngừa, học tập, sức khoẻ) — <em>vùng tạo giá trị lâu dài</em></td></tr>
                <tr><td><strong>Không quan trọng</strong></td><td>Uỷ quyền (phần lớn email, cuộc gọi)</td><td>Loại bỏ</td></tr>
            </table>
            <h5>Chấm điểm RICE và ICE</h5>
            <ul>
                <li><strong>RICE</strong> = Reach (bao nhiêu người) × Impact (tác động mỗi người) × Confidence (độ chắc chắn %) ÷ Effort (công sức).</li>
                <li><strong>ICE</strong> = Impact × Confidence × Ease (mỗi yếu tố 1–10) — nhanh hơn, dùng khi thiếu dữ liệu.</li>
            </ul>
        `,
        when: {
            use: [
                'Danh sách việc/ý tưởng/vấn đề dài hơn nguồn lực',
                'Nhóm tranh cãi nên làm gì trước',
                'Lập kế hoạch quý, sprint, tuần'
            ],
            avoid: [
                'Chỉ có 1–2 lựa chọn — cứ so sánh trực tiếp',
                'Quyết định phức tạp nhiều tiêu chí — dùng Ma trận quyết định'
            ]
        },
        steps: [
            'Liệt kê tất cả lựa chọn.',
            'Định nghĩa rõ "tác động" (theo mục tiêu nào, đo gì?) và "công sức" (người-ngày, tiền).',
            'Ước lượng <strong>tương đối</strong> — so sánh các lựa chọn với nhau, nhanh, cả nhóm cùng làm.',
            'Đặt lên ma trận hoặc tính điểm.',
            'Quyết định: làm quick wins, lên kế hoạch dự án lớn, loại bỏ hố tiền — và nói rõ những gì <em>không</em> làm.',
            'Xem lại định kỳ vì tác động và công sức thay đổi theo thời gian.'
        ],
        example: `
            <p><strong>Tính RICE cho 2 tính năng</strong> (mỗi quý):</p>
            <table>
                <tr><th></th><th>Reach</th><th>Impact</th><th>Confidence</th><th>Effort</th><th>RICE</th></tr>
                <tr><td>A: Đăng nhập bằng Google</td><td>2.000</td><td>2</td><td>80%</td><td>4 người-tháng</td><td>2000×2×0,8÷4 = <strong>800</strong></td></tr>
                <tr><td>B: Gợi ý sản phẩm AI</td><td>500</td><td>3</td><td>50%</td><td>1 người-tháng</td><td>500×3×0,5÷1 = <strong>750</strong></td></tr>
            </table>
            <p>A nhỉnh hơn dù B "hấp dẫn" hơn. Và nếu độ chắc chắn của B tăng lên 80% (sau khi làm khảo sát), B sẽ vượt lên (1.200). → Đôi khi việc ưu tiên nhất là <em>tăng độ chắc chắn</em> bằng một thử nghiệm nhỏ.</p>
        `,
        mistakes: [
            'Đánh giá tác động theo cảm tính, không gắn với mục tiêu cụ thể',
            'Đánh giá thấp công sức (planning fallacy) — hầu hết việc tốn gấp 1,5–2 lần dự kiến',
            'Chỉ làm quick wins, không bao giờ đụng tới dự án lớn mang tính chiến lược',
            'Để việc "khẩn cấp" lấn át mãi việc "quan trọng"'
        ],
        advanced: `
            <h5>Cost of Delay & WSJF</h5>
            <p>Mỗi tuần chưa làm, ta mất bao nhiêu giá trị? <strong>WSJF</strong> (Weighted Shortest Job First) = Chi phí của sự chậm trễ ÷ Độ lớn công việc — ưu tiên việc vừa đắt khi chờ vừa nhanh xong.</p>
            <h5>MoSCoW</h5>
            <p>Must have / Should have / Could have / Won't have (lần này). Hữu ích khi thương lượng phạm vi với khách hàng.</p>
            <h5>Kết hợp với Pareto</h5>
            <p>Dùng Pareto để tìm vài vấn đề gây phần lớn thiệt hại, rồi dùng Impact–Effort để chọn giải pháp cho từng vấn đề.</p>
        `,
        checklist: [
            '"Tác động" đo theo mục tiêu nào?',
            'Có hệ số độ chắc chắn trong đánh giá?',
            'Đã nói rõ việc gì KHÔNG làm?',
            'Có hẹn ngày xem lại danh sách?'
        ]
    },

    'decision-matrix': {
        icon: '⚖️',
        title: 'Ma Trận Quyết Định',
        category: 'techniques',
        level: 'intermediate',
        connections: ['prioritization', 'six-hats', 'second-order', 'confirmation-bias', 'analysis-paralysis'],
        summary: 'So sánh nhiều phương án theo nhiều tiêu chí có trọng số để quyết định minh bạch, ít cảm tính. Giá trị thật nằm ở cuộc thảo luận về tiêu chí và trọng số, không phải con số cuối cùng.',
        origin: 'Còn gọi là Weighted Scoring Model; biến thể Pugh matrix do kỹ sư Stuart Pugh phát triển cho thiết kế kỹ thuật.',
        what: `
            <p>Khi phải chọn giữa nhiều phương án, não thường bị cuốn theo một vài yếu tố nổi bật (giá rẻ, thương hiệu, cảm giác). Ma trận quyết định buộc ta:</p>
            <ul>
                <li>Nêu rõ <strong>tiêu chí</strong> quan trọng.</li>
                <li>Thống nhất <strong>trọng số</strong> (mức quan trọng) <em>trước</em> khi chấm điểm.</li>
                <li>Chấm điểm từng phương án một cách nhất quán.</li>
            </ul>
            <div class="tip-box">💡 Tách <strong>tiêu chí bắt buộc</strong> (must-have — không đạt là loại) khỏi <strong>tiêu chí mong muốn</strong> (chấm điểm). Đừng để một phương án vi phạm điều bắt buộc được "cứu" nhờ điểm cao ở chỗ khác.</div>
        `,
        when: {
            use: [
                'Chọn giữa 3–6 phương án với nhiều tiêu chí đánh đổi nhau',
                'Quyết định nhóm cần minh bạch, giải thích được',
                'Khi đang phân vân mãi vì mỗi phương án có ưu điểm riêng'
            ],
            avoid: [
                'Quyết định nhỏ, dễ đảo ngược — mất công hơn giá trị',
                'Khi tiêu chí chủ yếu là cảm xúc khó định lượng (chọn người yêu 😅)'
            ]
        },
        steps: [
            'Liệt kê phương án — nên có cả phương án "giữ nguyên hiện trạng".',
            'Xác định 5–7 tiêu chí; lọc trước bằng các tiêu chí bắt buộc.',
            'Gán trọng số (tổng 100%) <strong>trước khi chấm điểm</strong>.',
            'Chấm điểm từng phương án theo từng tiêu chí (thang 1–5), định nghĩa trước 1 điểm và 5 điểm nghĩa là gì.',
            'Tính tổng có trọng số = Σ (điểm × trọng số).',
            '<strong>Phân tích độ nhạy:</strong> thay đổi trọng số ±10%, kết quả có đảo không?',
            'Đối chiếu với trực giác: nếu kết quả "sai sai", hỏi vì sao — thường là thiếu một tiêu chí quan trọng.'
        ],
        example: `
            <p><strong>Chọn địa điểm văn phòng mới</strong> (thang 1–5):</p>
            <table>
                <tr><th>Tiêu chí (trọng số)</th><th>A: Trung tâm</th><th>B: Ven đô</th><th>C: Khu mới</th></tr>
                <tr><td>Chi phí thuê (30%)</td><td>2</td><td>5</td><td>4</td></tr>
                <tr><td>Di chuyển của nhân viên (25%)</td><td>4</td><td>2</td><td>4</td></tr>
                <tr><td>Gần khách hàng (20%)</td><td>5</td><td>2</td><td>3</td></tr>
                <tr><td>Tiện ích xung quanh (15%)</td><td>5</td><td>3</td><td>3</td></tr>
                <tr><td>Khả năng mở rộng (10%)</td><td>2</td><td>5</td><td>4</td></tr>
                <tr><th>Tổng có trọng số</th><th>3,55</th><th>3,35</th><th>3,65 ✅</th></tr>
            </table>
            <p><strong>Độ nhạy:</strong> nếu "Gần khách hàng" quan trọng hơn (30%) và "Chi phí" giảm xuống 20%, A đạt 3,85 còn C chỉ 3,55 → A thắng. Kết luận: quyết định phụ thuộc vào câu hỏi <em>"Chúng ta coi trọng khách hàng hay chi phí hơn?"</em> — đó mới là cuộc thảo luận cần có.</p>
        `,
        mistakes: [
            'Chỉnh trọng số sau khi đã "thích" một phương án để nó thắng',
            'Quá nhiều tiêu chí (15–20) → mỗi tiêu chí chỉ vài %, kết quả vô nghĩa',
            'Tiêu chí chồng chéo ("Giá" và "Chi phí sở hữu") → đếm hai lần',
            'Coi con số cuối cùng là chân lý tuyệt đối',
            'Bỏ quên tiêu chí bắt buộc'
        ],
        advanced: `
            <h5>Pugh method</h5>
            <p>Chọn một phương án làm mốc (baseline). So sánh mỗi phương án khác với mốc theo từng tiêu chí: tốt hơn (+), như nhau (0), kém hơn (−). Nhanh, hợp khi chưa đủ dữ liệu để chấm điểm chi tiết.</p>
            <h5>Kepner-Tregoe Decision Analysis</h5>
            <p>Tách MUSTs (bắt buộc) và WANTs (mong muốn, có trọng số), sau đó thêm một bước quan trọng: <strong>đánh giá hậu quả bất lợi</strong> của phương án thắng — rủi ro gì có thể xảy ra nếu chọn nó?</p>
            <h5>Quyết định đảo ngược được hay không</h5>
            <p>Với quyết định dễ đảo ngược, ma trận đơn giản là đủ. Với quyết định khó đảo ngược, thêm pre-mortem và tư duy bậc hai.</p>
        `,
        checklist: [
            'Có phương án "giữ nguyên"?',
            'Trọng số được chốt trước khi chấm điểm?',
            'Đã lọc bằng tiêu chí bắt buộc?',
            'Đã kiểm tra độ nhạy của trọng số?'
        ]
    },

    'scamper': {
        icon: '🔧',
        title: 'SCAMPER',
        category: 'techniques',
        level: 'intermediate',
        connections: ['brainstorming', 'analogy', 'mental-set', 'first-principles'],
        summary: 'Bộ 7 câu hỏi (Thay thế, Kết hợp, Điều chỉnh, Biến đổi, Dùng vào việc khác, Loại bỏ, Đảo ngược) để tạo ý tưởng mới một cách có hệ thống từ sản phẩm, dịch vụ hay quy trình sẵn có.',
        origin: 'Bob Eberle đưa ra năm 1971, dựa trên danh sách câu hỏi kích thích ý tưởng của Alex Osborn (cha đẻ brainstorming).',
        what: `
            <table>
                <tr><th>Chữ</th><th>Câu hỏi gợi ý</th><th>Ví dụ thực tế</th></tr>
                <tr><td><strong>S</strong>ubstitute — Thay thế</td><td>Thay vật liệu, người, bước, địa điểm nào?</td><td>Netflix: thay thuê đĩa bằng streaming</td></tr>
                <tr><td><strong>C</strong>ombine — Kết hợp</td><td>Gộp chức năng, dịch vụ, đối tượng nào?</td><td>Smartphone = điện thoại + máy nghe nhạc + internet</td></tr>
                <tr><td><strong>A</strong>dapt — Điều chỉnh</td><td>Học ý tưởng nào từ ngành/bối cảnh khác?</td><td>Dây chuyền lắp ráp ô tô học từ dây chuyền lò mổ</td></tr>
                <tr><td><strong>M</strong>odify — Biến đổi</td><td>Phóng to, thu nhỏ, đổi hình dạng, màu, tần suất?</td><td>Gói dầu gội nhỏ dùng một lần cho thị trường thu nhập thấp</td></tr>
                <tr><td><strong>P</strong>ut to other use — Dùng vào việc khác</td><td>Dùng cho ai khác, mục đích khác?</td><td>Airbnb: phòng trống thành chỗ cho thuê</td></tr>
                <tr><td><strong>E</strong>liminate — Loại bỏ</td><td>Bỏ bớt bước, tính năng, chi phí nào?</td><td>Hãng bay giá rẻ bỏ suất ăn, ghế hạng thương gia</td></tr>
                <tr><td><strong>R</strong>earrange/Reverse — Sắp xếp lại/Đảo ngược</td><td>Đổi thứ tự, đảo vai trò?</td><td>IKEA: khách tự lắp ráp đồ nội thất</td></tr>
            </table>
        `,
        when: {
            use: [
                'Cải tiến sản phẩm/dịch vụ/quy trình đang có',
                'Brainstorm bị cạn ý tưởng',
                'Tìm cách tạo khác biệt với đối thủ'
            ],
            avoid: [
                'Khi chưa hiểu vấn đề — SCAMPER tạo ý tưởng, không tìm nguyên nhân',
                'Tạo thứ hoàn toàn mới chưa có "vật liệu" ban đầu để biến đổi'
            ]
        },
        steps: [
            'Chọn đối tượng cụ thể để cải tiến (sản phẩm, dịch vụ, quy trình, trải nghiệm).',
            'Đi lần lượt từng chữ, dành 3–5 phút cho mỗi chữ, ghi mọi ý tưởng dù thấy vô lý.',
            'Không đánh giá trong lúc làm.',
            'Sau khi đủ 7 chữ, lọc ý tưởng theo tính khả thi và giá trị (Impact–Effort).',
            'Chọn 1–2 ý tưởng để làm prototype hoặc thử nhỏ.'
        ],
        example: `
            <p><strong>Áp dụng SCAMPER cho một quán cà phê truyền thống gần trường đại học:</strong></p>
            <ul>
                <li><strong>S:</strong> thay ly nhựa bằng ly khách tự mang → giảm giá 5.000đ.</li>
                <li><strong>C:</strong> cà phê + không gian học nhóm có ổ cắm, đặt chỗ theo giờ.</li>
                <li><strong>A:</strong> học mô hình drive-thru → cửa sổ lấy nhanh cho khách đi xe máy.</li>
                <li><strong>M:</strong> ly "size thi cử" siêu lớn mùa thi; hoặc shot espresso mini giá rẻ.</li>
                <li><strong>P:</strong> bã cà phê đóng gói làm phân bón tặng khách.</li>
                <li><strong>E:</strong> bỏ quầy thu ngân — order và trả tiền qua QR tại bàn.</li>
                <li><strong>R:</strong> đảo vai: buổi workshop khách tự pha dưới hướng dẫn barista.</li>
            </ul>
            <p>Lọc bằng Impact–Effort: QR tại bàn (E) và không gian học nhóm (C) là quick wins phù hợp với sinh viên.</p>
        `,
        mistakes: [
            'Chỉ dùng 1–2 chữ quen thuộc rồi dừng',
            'Đánh giá ý tưởng ngay khi nghĩ ra',
            'Áp dụng lên đối tượng quá chung chung ("cải thiện công ty")',
            'Không có bước lọc và thử nghiệm sau đó'
        ],
        advanced: `
            <h5>SCAMPER đối thủ</h5>
            <p>Áp SCAMPER lên sản phẩm của đối thủ để tìm khoảng trống thị trường: họ chưa loại bỏ gì? chưa kết hợp gì?</p>
            <h5>TRIZ</h5>
            <p>Phương pháp sáng tạo của Genrich Altshuller, rút ra từ việc phân tích hàng trăm nghìn bằng sáng chế: 40 nguyên tắc sáng tạo (phân đoạn, đảo ngược, làm trước, dùng trung gian…) và cách giải "mâu thuẫn kỹ thuật" (cải thiện A thì B xấu đi). Có thể xem SCAMPER là phiên bản rút gọn, dễ dùng.</p>
        `,
        checklist: [
            'Đối tượng cải tiến đủ cụ thể?',
            'Đã đi qua đủ 7 chữ?',
            'Có bước lọc ý tưởng sau khi tạo?',
            'Đã chọn ý tưởng để thử nhỏ?'
        ]
    },

    'six-hats': {
        icon: '🎩',
        title: 'Six Thinking Hats',
        category: 'techniques',
        level: 'intermediate',
        connections: ['brainstorming', 'groupthink', 'decision-matrix', 'premortem'],
        summary: 'Cả nhóm cùng "đội" một chiếc mũ tư duy tại một thời điểm — dữ kiện, cảm xúc, rủi ro, lợi ích, sáng tạo, điều phối — để nhìn vấn đề toàn diện thay vì tranh cãi đối đầu.',
        origin: 'Edward de Bono, nhà tư tưởng người Malta, giới thiệu năm 1985.',
        what: `
            <p>Trong cuộc họp thông thường, người lạc quan và người thận trọng cãi nhau vì đang nhìn <em>cùng lúc từ các hướng khác nhau</em>. Six Hats áp dụng <strong>tư duy song song</strong>: mọi người cùng nhìn một hướng, rồi cùng chuyển hướng.</p>
            <table>
                <tr><th>Mũ</th><th>Góc nhìn</th><th>Câu hỏi</th></tr>
                <tr><td>⚪ Trắng</td><td>Dữ kiện, thông tin</td><td>Ta biết gì? Còn thiếu dữ liệu gì?</td></tr>
                <tr><td>🔴 Đỏ</td><td>Cảm xúc, trực giác</td><td>Tôi cảm thấy thế nào? (không cần giải thích)</td></tr>
                <tr><td>⚫ Đen</td><td>Thận trọng, rủi ro</td><td>Điều gì có thể sai? Vì sao không nên?</td></tr>
                <tr><td>🟡 Vàng</td><td>Lạc quan, lợi ích</td><td>Lợi ích gì? Vì sao có thể thành công?</td></tr>
                <tr><td>🟢 Xanh lá</td><td>Sáng tạo, phương án</td><td>Còn cách nào khác? Cải tiến ra sao?</td></tr>
                <tr><td>🔵 Xanh dương</td><td>Điều phối quá trình</td><td>Mục tiêu? Thứ tự các mũ? Kết luận và bước tiếp?</td></tr>
            </table>
        `,
        when: {
            use: [
                'Đánh giá một ý tưởng/đề xuất quan trọng',
                'Cuộc họp hay biến thành tranh cãi đối đầu',
                'Nhóm có người luôn tiêu cực hoặc luôn lạc quan'
            ],
            avoid: [
                'Quyết định đơn giản, ít tranh cãi',
                'Khi thiếu người điều phối (mũ Xanh dương)'
            ]
        },
        steps: [
            '🔵 <strong>Xanh dương mở đầu:</strong> nêu mục tiêu buổi họp và thứ tự các mũ.',
            '⚪ <strong>Trắng:</strong> mọi người chia sẻ dữ kiện đã biết và thông tin còn thiếu.',
            '🟢 <strong>Xanh lá:</strong> đưa ra các phương án, ý tưởng.',
            '🟡 <strong>Vàng:</strong> tìm lợi ích và giá trị của từng phương án.',
            '⚫ <strong>Đen:</strong> xác định rủi ro, điểm yếu, điều kiện thất bại.',
            '🔴 <strong>Đỏ:</strong> mỗi người nói nhanh cảm nhận trực giác (khoảng 30 giây, không cần lý lẽ).',
            '🔵 <strong>Xanh dương kết thúc:</strong> tổng hợp, quyết định, phân công bước tiếp. Giới hạn 3–10 phút mỗi mũ.'
        ],
        example: `
            <p><strong>Đề xuất:</strong> Công ty chuyển sang làm việc 4 ngày/tuần.</p>
            <ul>
                <li>⚪ Hiện tại 20% nhân viên nghỉ việc/năm; các thử nghiệm ở Anh (2022) báo cáo năng suất giữ nguyên ở phần lớn công ty tham gia; ta chưa có số liệu về ảnh hưởng tới khách hàng.</li>
                <li>🟢 Thử với một phòng ban; 4 ngày nhưng xoay ca để luôn có người trực; 4,5 ngày.</li>
                <li>🟡 Giữ chân và thu hút nhân tài; giảm burnout; thương hiệu tuyển dụng.</li>
                <li>⚫ Khách hàng cần hỗ trợ ngày thứ Sáu; áp lực dồn việc vào 4 ngày; khó áp dụng cho bộ phận bán hàng.</li>
                <li>🔴 "Hào hứng nhưng lo" · "Nghi ngờ với bộ phận CS".</li>
                <li>🔵 Quyết định: thử 3 tháng với đội kỹ thuật, đo năng suất + mức hài lòng khách hàng, CS xoay ca.</li>
            </ul>
        `,
        mistakes: [
            'Gán cố định mỗi người một mũ → mất tác dụng "cùng nhìn một hướng"',
            'Đội mũ Đen quá sớm → giết ý tưởng từ trứng nước',
            'Bỏ mũ Đỏ vì nghĩ cảm xúc "không chuyên nghiệp" — cảm xúc vẫn ảnh hưởng quyết định, tốt hơn là nói ra',
            'Không có người giữ mũ Xanh dương → lộn xộn, quá giờ'
        ],
        advanced: `
            <h5>Thứ tự mũ theo mục đích</h5>
            <ul>
                <li><strong>Tạo ý tưởng:</strong> Xanh dương → Trắng → Xanh lá → Xanh dương.</li>
                <li><strong>Đánh giá nhanh:</strong> Vàng → Đen → Đỏ.</li>
                <li><strong>Giải quyết vấn đề:</strong> Trắng → Xanh lá → Đen → Vàng → Đỏ → Xanh dương.</li>
            </ul>
            <h5>Mũ Đen: quý nhưng dễ lạm dụng</h5>
            <p>De Bono coi mũ Đen là mũ hữu ích nhất — nhưng cũng bị lạm dụng nhiều nhất. Đặt nó <em>sau</em> mũ Vàng và Xanh lá để ý tưởng kịp được phát triển trước khi bị phê bình. Kết hợp với Pre-mortem để mũ Đen có cấu trúc.</p>
        `,
        checklist: [
            'Có người điều phối (mũ Xanh dương)?',
            'Cả nhóm cùng đội một mũ tại một thời điểm?',
            'Mũ Đen được đặt sau mũ Xanh lá và Vàng?',
            'Có kết luận và bước tiếp theo?'
        ]
    },

    'reframing': {
        icon: '🖼️',
        title: 'Reframing & "How Might We"',
        category: 'techniques',
        level: 'intermediate',
        connections: ['define-problem', 'design-thinking', 'abstraction', 'first-principles', 'xy-problem'],
        summary: 'Cách đặt vấn đề quyết định những giải pháp ta có thể nghĩ ra. Đổi khung nhìn — lên cao hơn, sang góc khác, tìm ngoại lệ tích cực — thường mở ra giải pháp rẻ và hay hơn hẳn.',
        origin: 'Thomas Wedell-Wedellsborg hệ thống hoá trong bài báo HBR "Are You Solving the Right Problems?" (2017) và sách "What\'s Your Problem?"; câu hỏi "How Might We" bắt nguồn từ P&G, được IDEO phổ biến.',
        what: `
            <div class="example-box"><strong>Câu chuyện thang máy chậm:</strong> Cư dân một toà nhà phàn nàn thang máy quá chậm. Nếu frame là "thang máy chậm" → giải pháp là thay động cơ, lắp thêm thang: rất đắt. Một người đổi frame thành "việc chờ đợi khó chịu" → giải pháp: <strong>treo gương cạnh thang máy</strong>. Phàn nàn giảm hẳn vì người chờ bận ngắm mình.</div>
            <p>Reframing không phải tìm "vấn đề thật" duy nhất, mà là <strong>xem xét nhiều cách hiểu</strong> rồi chọn cách hứa hẹn nhất.</p>
            <h5>6 cách đổi khung</h5>
            <ul>
                <li><strong>Nhìn ra ngoài khung:</strong> điều gì đang bị bỏ qua?</li>
                <li><strong>Xem lại mục tiêu:</strong> mục tiêu thật sự là gì? (hỏi "để làm gì?")</li>
                <li><strong>Tìm điểm sáng:</strong> khi nào/ở đâu vấn đề <em>không</em> xảy ra?</li>
                <li><strong>Đổi người nhìn:</strong> các bên liên quan khác thấy vấn đề thế nào?</li>
                <li><strong>Đổi quy mô / thời gian / ràng buộc:</strong> nếu gấp 10 lần? nếu chỉ có 1 ngày?</li>
                <li><strong>Nhìn lại chính mình:</strong> mình có đang góp phần tạo ra vấn đề?</li>
            </ul>
            <h5>Thang "Tại sao – Như thế nào"</h5>
            <p>Hỏi <strong>"Tại sao?"</strong> để đi lên (khung rộng hơn, mục tiêu gốc); hỏi <strong>"Như thế nào?"</strong> để đi xuống (khung cụ thể hơn, hành động).</p>
        `,
        when: {
            use: [
                'Giải pháp hiển nhiên quá đắt hoặc bất khả thi',
                'Đã thử nhiều giải pháp mà không hiệu quả',
                'Trước khi brainstorm, để chọn đúng câu hỏi'
            ],
            avoid: [
                'Khi vấn đề đã rõ và giải pháp đã được kiểm chứng',
                'Dùng để né tránh vấn đề khó ("thực ra đây không phải vấn đề")'
            ]
        },
        steps: [
            'Viết frame ban đầu của vấn đề.',
            'Hỏi "Tại sao điều này quan trọng?" 2–3 lần để lên mức mục tiêu.',
            'Liệt kê 3–5 cách hiểu khác nhau về cùng tình huống.',
            'Tìm điểm sáng: nơi/khi nào vấn đề không xảy ra, người nào đã tự giải được?',
            'Viết câu hỏi "Làm thế nào chúng ta có thể…?" (HMW) cho mỗi frame.',
            'Chọn frame hứa hẹn nhất (hoặc kết hợp vài frame) để chuyển sang tạo phương án.'
        ],
        example: `
            <p><strong>Frame ban đầu:</strong> "Nhân viên không chịu dùng phần mềm quản lý mới."</p>
            <table>
                <tr><th>Frame khác</th><th>Hướng giải pháp mở ra</th></tr>
                <tr><td>Đào tạo chưa đủ</td><td>Video hướng dẫn, người hỗ trợ tại chỗ</td></tr>
                <tr><td>Phần mềm khó dùng cho công việc thực tế</td><td>Quan sát công việc, tuỳ chỉnh giao diện</td></tr>
                <tr><td>Không có lý do để đổi — phần mềm cũ vẫn chạy</td><td>Tắt phần mềm cũ theo lộ trình</td></tr>
                <tr><td>Quản lý cũng không dùng</td><td>Quản lý dùng trước, họp dựa trên dữ liệu từ phần mềm mới</td></tr>
                <tr><td>Quy trình được thiết kế khác quy trình thực tế</td><td>Thiết kế lại quy trình cùng người làm</td></tr>
            </table>
            <h5>Câu hỏi HMW — độ rộng vừa phải</h5>
            <ul>
                <li>❌ Quá rộng: "Làm thế nào để công ty chuyển đổi số?"</li>
                <li>❌ Quá hẹp (chứa sẵn giải pháp): "Làm thế nào để thêm nút hướng dẫn vào phần mềm?"</li>
                <li>✅ Vừa: "Làm thế nào để nhân viên bán hàng cập nhật đơn trong 30 giây ngay sau cuộc gọi?"</li>
            </ul>
        `,
        mistakes: [
            'Reframe mãi không hành động',
            'Reframe để né vấn đề thật ("khách phàn nàn thì là khách khó tính")',
            'HMW quá rộng hoặc chứa sẵn giải pháp',
            'Chỉ tìm frame trong chuyên môn của mình'
        ],
        advanced: `
            <h5>Điểm sáng — câu chuyện suy dinh dưỡng ở Việt Nam</h5>
            <p>Đầu thập niên 1990, Jerry và Monique Sternin (tổ chức Save the Children) làm việc ở nông thôn Việt Nam (Thanh Hoá) với tỷ lệ trẻ suy dinh dưỡng cao. Thay vì hỏi "vì sao trẻ suy dinh dưỡng?" (đáp án: nghèo, thiếu nước sạch — không giải ngay được), họ hỏi <strong>"vì sao một số trẻ nhà nghèo vẫn khoẻ mạnh?"</strong>. Họ phát hiện các gia đình này cho trẻ ăn thêm tôm, cua nhỏ bắt ngoài ruộng và rau khoai lang, chia nhiều bữa nhỏ trong ngày. Phổ biến các thực hành này cho cộng đồng đã cải thiện rõ rệt tình trạng dinh dưỡng — cách tiếp cận này được gọi là <em>positive deviance</em> (độ lệch tích cực).</p>
            <h5>Upstream thinking</h5>
            <p>Dan Heath: thay vì liên tục "vớt người chết đuối" ở hạ nguồn, hãy đi ngược lên thượng nguồn xem ai đang đẩy họ xuống sông. Reframe từ phản ứng sang phòng ngừa.</p>
        `,
        checklist: [
            'Đã viết ít nhất 3 frame khác nhau?',
            'Đã hỏi "để làm gì?" để lên mức mục tiêu?',
            'Đã tìm điểm sáng / ngoại lệ tích cực?',
            'HMW không quá rộng, không chứa giải pháp?'
        ]
    },

    'premortem': {
        icon: '🔮',
        title: 'Pre-mortem',
        category: 'techniques',
        level: 'intermediate',
        connections: ['inversion', 'groupthink', 'second-order', 'six-hats', 'confirmation-bias'],
        summary: 'Trước khi bắt đầu, tưởng tượng dự án đã thất bại thảm hại và hỏi "vì sao?". Cách này giúp nhóm nói ra rủi ro mà bình thường ai cũng ngại nói, và biến chúng thành biện pháp phòng ngừa.',
        origin: 'Nhà tâm lý học Gary Klein giới thiệu trên Harvard Business Review năm 2007, dựa trên nghiên cứu về "prospective hindsight" (Mitchell, Russo & Pennington, 1989): tưởng tượng một sự kiện <em>đã</em> xảy ra giúp tăng khoảng 30% khả năng nêu đúng lý do.',
        what: `
            <p><strong>Post-mortem</strong> (khám nghiệm tử thi) giúp học sau khi dự án chết — nhưng lúc đó đã muộn. <strong>Pre-mortem</strong> "khám nghiệm" trước khi dự án bắt đầu.</p>
            <p>Vì sao hiệu quả hơn câu hỏi "Có rủi ro gì không?":</p>
            <ul>
                <li>Hỏi "có rủi ro gì không?" → mọi người ngại làm người phá đám, và bị cuốn theo sự lạc quan chung.</li>
                <li>Nói "dự án <em>đã</em> thất bại, hãy giải thích vì sao" → việc tìm lý do thất bại trở thành nhiệm vụ, người thận trọng được "cho phép" lên tiếng.</li>
            </ul>
        `,
        when: {
            use: [
                'Trước khi triển khai dự án, sản phẩm, chiến dịch quan trọng',
                'Kế hoạch nhận được sự đồng thuận "quá nhanh"',
                'Quyết định khó đảo ngược'
            ],
            avoid: [
                'Việc nhỏ, rủi ro thấp',
                'Khi kế hoạch chưa đủ cụ thể để hình dung cách nó thất bại'
            ]
        },
        steps: [
            'Trình bày ngắn gọn kế hoạch cho cả nhóm.',
            'Tuyên bố: <em>"Hãy tưởng tượng 12 tháng sau, dự án đã thất bại hoàn toàn."</em>',
            'Mỗi người <strong>tự viết im lặng</strong> (5–10 phút) mọi lý do có thể dẫn tới thất bại.',
            'Lần lượt từng người nêu một lý do (vòng tròn) cho tới khi hết; người điều phối ghi lại.',
            'Gom nhóm, đánh giá theo khả năng xảy ra × mức tác động.',
            'Với các rủi ro hàng đầu: biện pháp phòng ngừa, <strong>tín hiệu cảnh báo sớm</strong>, người theo dõi.',
            'Cập nhật kế hoạch; xem lại danh sách rủi ro ở các mốc dự án.'
        ],
        example: `
            <p><strong>Kế hoạch:</strong> Ngân hàng ra mắt app mới thay app cũ vào ngày 1/1.</p>
            <p><strong>"App đã thất bại vì…"</strong></p>
            <ul>
                <li>Chuyển dữ liệu lỗi, khách thấy sai số dư → khủng hoảng niềm tin.</li>
                <li>Khách lớn tuổi không tìm thấy chức năng quen thuộc.</li>
                <li>Tổng đài quá tải tuần đầu.</li>
                <li>Bắt đăng nhập lại và xác thực lại → hàng nghìn review 1 sao.</li>
                <li>Ra mắt đúng dịp cuối năm, lượng giao dịch cao nhất năm.</li>
            </ul>
            <p><strong>Biện pháp:</strong> chạy song song app cũ 3 tháng; beta với 5% khách trước; đối soát dữ liệu tự động; tăng gấp đôi tổng đài 2 tuần đầu; dời ngày ra mắt sang giữa tháng 1; tín hiệu cảnh báo: tỷ lệ đăng nhập thất bại > 3% thì tạm dừng mở rộng.</p>
        `,
        mistakes: [
            'Làm cho có, không chuyển rủi ro thành hành động',
            'Lãnh đạo nói trước → mọi người chỉ lặp lại',
            'Chỉ nghĩ rủi ro kỹ thuật, bỏ quên con người, thị trường, pháp lý',
            'Biến thành buổi "dội nước lạnh" làm mất tinh thần — cần kết thúc bằng hành động'
        ],
        advanced: `
            <h5>Pre-parade</h5>
            <p>Phiên bản ngược: "Tưởng tượng dự án thành công vượt mong đợi — điều gì đã tạo nên thành công đó?" Giúp tìm yếu tố cần đầu tư thêm.</p>
            <h5>Kill criteria</h5>
            <p>Kết hợp pre-mortem với <em>tiêu chí dừng</em> viết trước: "Nếu sau 3 tháng tỷ lệ chuyển đổi dưới 2%, ta dừng." Chống lại bẫy chi phí chìm về sau.</p>
            <h5>Red team</h5>
            <p>Với quyết định rất quan trọng, giao hẳn một nhóm độc lập nhiệm vụ "đánh bại" kế hoạch — tìm mọi cách nó có thể thất bại.</p>
        `,
        checklist: [
            'Mọi người viết riêng trước khi chia sẻ?',
            'Có rủi ro về con người, thị trường, không chỉ kỹ thuật?',
            'Top rủi ro có biện pháp và người theo dõi?',
            'Có tín hiệu cảnh báo sớm và tiêu chí dừng?'
        ]
    },

    'abstraction': {
        icon: '🔭',
        title: 'Abstraction',
        category: 'techniques',
        level: 'intermediate',
        connections: ['analogy', 'first-principles', 'reframing', 'divide-conquer'],
        summary: 'Lược bỏ chi tiết bề mặt để thấy cấu trúc cốt lõi của vấn đề — nhờ đó nhận ra nó giống bài toán đã có lời giải — rồi cụ thể hoá lời giải trở lại bối cảnh của mình.',
        what: `
            <p>Bản đồ tàu điện ngầm là ví dụ kinh điển: nó bỏ qua khoảng cách thật, đường phố, toà nhà — chỉ giữ lại <em>các ga, các tuyến và điểm đổi tàu</em>. Nhờ vậy nó hữu ích hơn một bản đồ chính xác.</p>
            <p>Trong giải quyết vấn đề, trừu tượng hoá giúp:</p>
            <ul>
                <li><strong>Nhận ra dạng bài:</strong> vấn đề "phòng khám đông", "tổng đài quá tải", "thang máy chờ lâu" đều là bài toán <em>hàng đợi</em>.</li>
                <li><strong>Mượn lời giải:</strong> dạng bài đã có lời giải ở lĩnh vực khác.</li>
                <li><strong>Giao tiếp:</strong> nói chuyện ở mức phù hợp với người nghe (lãnh đạo cần mức cao, kỹ sư cần mức thấp).</li>
            </ul>
            <p><strong>Thang trừu tượng:</strong> lên cao = khái quát, thấy mục đích và pattern; xuống thấp = cụ thể, hành động được. Người giải quyết vấn đề giỏi di chuyển lên xuống thang này liên tục.</p>
        `,
        when: {
            use: [
                'Bị sa lầy trong chi tiết, không thấy bức tranh chung',
                'Muốn tìm lời giải từ lĩnh vực khác',
                'Giải thích vấn đề phức tạp cho người khác'
            ],
            avoid: [
                'Khi chi tiết chính là mấu chốt (lỗi nằm ở một dòng code cụ thể)',
                'Khi cần hành động ngay — trừu tượng quá cao không hành động được'
            ]
        },
        steps: [
            'Mô tả vấn đề cụ thể như bạn đang gặp.',
            'Loại bỏ chi tiết bề mặt: tên riêng, ngành nghề, con số cụ thể.',
            'Diễn đạt lại dưới dạng tổng quát: "phân bổ nguồn lực hạn chế", "hàng đợi", "tìm kiếm", "ghép cặp", "lan truyền"…',
            'Hỏi: dạng tổng quát này đã được giải ở đâu? (thuật toán, mô hình, ngành khác)',
            'Cụ thể hoá lời giải trở lại bối cảnh của mình.',
            'Kiểm tra: chi tiết nào bị lược bỏ có thể khiến lời giải không áp dụng được?'
        ],
        example: `
            <p><strong>Ba vấn đề cụ thể:</strong> bệnh nhân chờ khám 2 tiếng · tổng đài để khách chờ 15 phút · khách chờ thang máy lâu.</p>
            <p><strong>Trừu tượng hoá:</strong> đều là <em>hàng đợi</em> — khách đến → chờ → được phục vụ.</p>
            <p><strong>Các đòn bẩy đã biết của bài toán hàng đợi:</strong></p>
            <ul>
                <li>Giảm thời gian phục vụ mỗi khách (chuẩn bị hồ sơ trước khi khám).</li>
                <li>Tăng số "quầy" vào giờ cao điểm.</li>
                <li>Làm đều lượng khách đến (đặt lịch hẹn theo khung giờ).</li>
                <li>Phân luồng (khám nhanh / khám tổng quát; câu hỏi đơn giản → chatbot).</li>
                <li>Quản lý cảm nhận chờ đợi (hiển thị số thứ tự, thời gian dự kiến, gương, TV).</li>
            </ul>
            <p>Một danh sách giải pháp có hệ thống — thay vì nghĩ từ đầu cho từng vấn đề.</p>
        `,
        mistakes: [
            'Trừu tượng quá cao ("vấn đề là con người") → không hành động được',
            'Lược bỏ chi tiết quan trọng → lời giải mượn về không chạy',
            'Quên cụ thể hoá lại, dừng ở mức lý thuyết'
        ],
        advanced: `
            <h5>"Mọi mô hình đều sai, nhưng một số hữu ích"</h5>
            <p>Câu nói của nhà thống kê George Box nhắc rằng mọi trừu tượng đều bỏ bớt thực tế. Câu hỏi không phải "mô hình có đúng không" mà "nó có đủ tốt cho mục đích này không".</p>
            <h5>Trừu tượng bị rò rỉ (leaky abstraction)</h5>
            <p>Trong phần mềm, lớp trừu tượng che giấu chi tiết — cho tới khi chi tiết đó gây lỗi và ta buộc phải hiểu tầng bên dưới. Tương tự trong đời sống: "cứ làm theo quy trình" chạy tốt cho tới khi gặp trường hợp quy trình không lường trước.</p>
            <h5>Câu hỏi của George Pólya</h5>
            <p>Trong "How to Solve It" (1945): <em>"Bạn có biết bài toán nào liên quan không? Bạn có biết bài toán nào có cùng ẩn số không?"</em> — đó chính là trừu tượng hoá để tìm dạng bài.</p>
        `,
        checklist: [
            'Đã diễn đạt vấn đề ở dạng tổng quát?',
            'Đã tìm lời giải có sẵn cho dạng đó?',
            'Đã cụ thể hoá lời giải về bối cảnh thực?',
            'Chi tiết bị lược bỏ có làm lời giải sai không?'
        ]
    },

    'analogy': {
        icon: '🔗',
        title: 'Analogy & Biomimicry',
        category: 'techniques',
        level: 'intermediate',
        connections: ['abstraction', 'scamper', 'first-principles', 'mental-set'],
        summary: 'Mượn lời giải từ lĩnh vực khác (kể cả thiên nhiên) cho một vấn đề có cùng cấu trúc. Loại suy xa — giữa các ngành rất khác nhau — thường tạo ra ý tưởng đột phá nhất.',
        origin: 'Nghiên cứu của Gick & Holyoak (1980) về "chuyển giao loại suy"; thuật ngữ Biomimicry được Janine Benyus phổ biến năm 1997.',
        what: `
            <p>Hai loại tương đồng:</p>
            <ul>
                <li><strong>Tương đồng bề mặt:</strong> trông giống nhau (hai công ty cùng ngành).</li>
                <li><strong>Tương đồng cấu trúc:</strong> cùng mối quan hệ bên trong dù trông rất khác (khối u và pháo đài — xem ví dụ).</li>
            </ul>
            <p>Loại suy mạnh đến từ tương đồng <em>cấu trúc</em>. Nhưng thí nghiệm cho thấy con người rất khó tự nhận ra loại suy cấu trúc nếu không được gợi ý — vì vậy cần chủ động tìm kiếm.</p>
            <div class="example-box">
                <strong>Bài toán khối u của Duncker:</strong> Một bệnh nhân có khối u trong dạ dày. Tia phóng xạ cường độ mạnh diệt được u nhưng phá huỷ mô lành trên đường đi; tia yếu thì an toàn nhưng không diệt được u. Làm sao?<br><br>
                <strong>Câu chuyện pháo đài:</strong> Một vị tướng muốn tấn công pháo đài; các con đường dẫn tới đều có mìn, đoàn quân lớn đi qua sẽ kích nổ. Ông chia quân thành nhiều nhóm nhỏ, tiến từ nhiều ngả và hội tụ tại pháo đài.<br><br>
                <strong>Lời giải:</strong> Dùng nhiều tia yếu từ nhiều hướng, hội tụ tại khối u. Gick & Holyoak thấy rất ít người tự giải được; nhiều người hơn giải được sau khi đọc câu chuyện pháo đài, và tỷ lệ tăng mạnh khi được gợi ý rằng câu chuyện có liên quan. (Đây cũng là nguyên lý của phương pháp xạ phẫu "dao gamma".)
            </div>
        `,
        when: {
            use: [
                'Bí ý tưởng trong ngành của mình',
                'Vấn đề có cấu trúc rõ (vận chuyển, lọc, bám dính, phân phối, làm mát…)',
                'Muốn tạo đột phá thay vì cải tiến nhỏ'
            ],
            avoid: [
                'Dùng loại suy như bằng chứng trong tranh luận ("công ty là gia đình, nên…")',
                'Khi điểm khác biệt giữa hai lĩnh vực là then chốt'
            ]
        },
        steps: [
            'Trừu tượng hoá vấn đề thành cấu trúc: "cần lực mạnh tại một điểm mà không phá huỷ vùng xung quanh".',
            'Hỏi: ai khác, ngành nào, sinh vật nào đã giải bài toán có cấu trúc này?',
            'Nghiên cứu kỹ lời giải đó.',
            '<strong>Ánh xạ:</strong> thành phần nào bên kia tương ứng với thành phần nào bên mình?',
            'Điều chỉnh cho bối cảnh; kiểm tra điểm khác biệt quan trọng.',
            'Thử nghiệm nhỏ.'
        ],
        example: `
            <table>
                <tr><th>Đổi mới</th><th>Mượn từ</th><th>Cấu trúc chung</th></tr>
                <tr><td>Khoá dán Velcro (George de Mestral, 1941)</td><td>Quả ké (ngưu bàng) bám vào lông chó</td><td>Móc nhỏ bám vào vòng nhỏ</td></tr>
                <tr><td>Mũi tàu Shinkansen 500 series</td><td>Mỏ chim bói cá lao xuống nước ít bắn tung toé</td><td>Vật thể chuyển nhanh giữa hai môi trường có áp suất khác nhau (giảm tiếng nổ khi tàu ra khỏi hầm)</td></tr>
                <tr><td>Toà nhà Eastgate, Harare (Zimbabwe)</td><td>Tổ mối tự thông gió</td><td>Làm mát thụ động bằng đối lưu không khí</td></tr>
                <tr><td>Dây chuyền lắp ráp của Ford</td><td>"Dây chuyền tháo rời" ở lò mổ Chicago</td><td>Vật di chuyển, người đứng yên làm một việc</td></tr>
                <tr><td>Quy trình chuyển bệnh nhân từ phòng mổ sang ICU (bệnh viện Great Ormond Street, London)</td><td>Đội thay lốp pit-stop đua xe F1</td><td>Chuyển giao nhanh, nhiều người, không được sai sót</td></tr>
            </table>
        `,
        mistakes: [
            'Loại suy bề mặt: giống vẻ ngoài nhưng khác cấu trúc bên trong',
            'Ép loại suy dù có khác biệt then chốt',
            'Chỉ tìm loại suy trong cùng ngành (loại suy gần) → ý tưởng ít mới',
            'Dùng loại suy để thuyết phục thay vì để khám phá'
        ],
        advanced: `
            <h5>Loại suy gần và xa</h5>
            <p>Loại suy gần (cùng ngành) dễ tìm, dễ áp dụng, nhưng ý tưởng ít mới. Loại suy xa (khác hẳn lĩnh vực) khó tìm hơn nhưng thường tạo đột phá. Mẹo: hỏi "Thiên nhiên giải bài này thế nào?" hoặc "Ngành y/quân sự/game giải bài này thế nào?"</p>
            <h5>TRIZ</h5>
            <p>Altshuller cho rằng các bằng sáng chế ở những ngành rất khác nhau thường dùng lại cùng một số nguyên tắc — tức là loại suy có hệ thống ở quy mô lớn.</p>
            <h5>Asknature.org</h5>
            <p>Cơ sở dữ liệu các "chiến lược" của sinh vật, tra theo chức năng (bám dính, lọc nước, chống thấm…) — công cụ thực hành biomimicry.</p>
        `,
        checklist: [
            'Đã diễn đạt vấn đề thành cấu trúc tổng quát?',
            'Đã tìm ở lĩnh vực xa, không chỉ cùng ngành?',
            'Đã ánh xạ rõ từng thành phần?',
            'Đã kiểm tra khác biệt then chốt?'
        ]
    },

    'fermi': {
        icon: '🧮',
        title: 'Ước Lượng Fermi',
        category: 'techniques',
        level: 'advanced',
        connections: ['issue-tree', 'divide-conquer', 'hypothesis-driven', 'first-principles'],
        summary: 'Ước tính nhanh một đại lượng khó đo bằng cách phân rã thành các thừa số có thể đoán hợp lý rồi nhân lại. Mục tiêu là đúng bậc độ lớn — đủ để ra quyết định mà không cần chờ dữ liệu hoàn hảo.',
        origin: 'Đặt theo tên nhà vật lý Enrico Fermi, nổi tiếng với các ước lượng nhanh — ví dụ ước tính sức nổ của vụ thử bom nguyên tử Trinity (1945) bằng cách quan sát những mẩu giấy bị sóng xung kích thổi bay.',
        what: `
            <p>Nhiều quyết định chỉ cần biết con số là <strong>100, 1.000 hay 10.000</strong> — không cần chính xác đến hàng đơn vị. Ước lượng Fermi giúp có câu trả lời "đủ tốt" trong vài phút.</p>
            <p><strong>Vì sao nó chính xác bất ngờ?</strong> Khi nhân nhiều thừa số, sai số ở các thừa số thường <em>bù trừ nhau</em>: chỗ này đoán cao, chỗ kia đoán thấp.</p>
            <p>Ứng dụng: ước tính quy mô thị trường, chi phí dự án, năng lực hệ thống, kiểm tra nhanh một con số ai đó đưa ra ("con số này có hợp lý không?"), và phỏng vấn tư vấn/sản phẩm.</p>
        `,
        when: {
            use: [
                'Cần con số để quyết định nhưng chưa có dữ liệu',
                'Kiểm tra tính hợp lý của một số liệu (sanity check)',
                'Ước tính quy mô thị trường, tải hệ thống, ngân sách sơ bộ'
            ],
            avoid: [
                'Khi dữ liệu thật dễ tra cứu — tra luôn',
                'Khi cần độ chính xác cao (tính lương, kế toán, liều thuốc)'
            ]
        },
        steps: [
            'Định nghĩa rõ đại lượng cần ước tính: đơn vị, phạm vi, thời gian.',
            'Phân rã thành công thức gồm các thừa số (như một issue tree định lượng).',
            'Ước lượng từng thừa số bằng hiểu biết chung và các "mốc neo" đã biết; dùng số tròn.',
            'Nhân lại để có kết quả.',
            '<strong>Kiểm tra chéo:</strong> ước tính lại bằng một cách phân rã khác (từ trên xuống vs từ dưới lên); so với dữ kiện đã biết.',
            'Nêu rõ giả định và khoảng dao động (ví dụ: "từ 5.000 đến 20.000, khả năng cao nhất khoảng 10.000").'
        ],
        example: `
            <p><strong>Câu hỏi:</strong> Hà Nội có khoảng bao nhiêu tiệm cắt tóc?</p>
            <h5>Cách 1 — từ nhu cầu</h5>
            <ul>
                <li>Dân số ~8,5 triệu → nam ~4,25 triệu, cắt tóc khoảng 1 lần/tháng → ~4,25 triệu lượt/tháng.</li>
                <li>Nữ ~4,25 triệu, ra tiệm khoảng 3 tháng/lần → ~1,4 triệu lượt/tháng.</li>
                <li>Tổng nhu cầu ≈ 5,7 triệu lượt/tháng.</li>
            </ul>
            <h5>Năng lực mỗi tiệm</h5>
            <ul><li>2 thợ × 12 khách/ngày × 26 ngày ≈ 600 lượt/tháng.</li></ul>
            <p><strong>Kết quả:</strong> 5,7 triệu ÷ 600 ≈ 9.500 → <strong>khoảng 10.000 tiệm</strong> (bậc 10⁴).</p>
            <h5>Kiểm tra chéo — từ nguồn cung</h5>
            <p>Quan sát khu dân cư: cứ vài con phố/ngõ lớn lại có một tiệm, mỗi tiệm phục vụ khoảng 700–1.000 người dân quanh đó → 8,5 triệu ÷ 850 ≈ 10.000 tiệm. Hai cách cho cùng bậc độ lớn → tự tin hơn vào kết quả.</p>
        `,
        mistakes: [
            'Không định nghĩa rõ đại lượng (tiệm cắt tóc có tính salon làm đẹp không?)',
            'Một thừa số sai hẳn bậc (gấp 10 lần) → toàn bộ kết quả sai bậc',
            'Không kiểm tra chéo bằng cách khác',
            'Chính xác giả tạo: báo "9.583 tiệm" khi các giả định chỉ đúng ±50%'
        ],
        advanced: `
            <h5>Trung bình nhân cho khoảng ước lượng</h5>
            <p>Nếu chỉ biết đại lượng nằm đâu đó giữa 100 và 10.000, dùng trung bình nhân √(100 × 10.000) = 1.000 làm ước tính giữa — hợp lý hơn trung bình cộng (5.050) khi khoảng trải dài nhiều bậc.</p>
            <h5>Quy mô thị trường: TAM – SAM – SOM</h5>
            <p>TAM (toàn bộ thị trường) → SAM (phần bạn có thể phục vụ) → SOM (phần bạn thực tế giành được trong vài năm). Nhà đầu tư thường tin ước lượng <em>từ dưới lên</em> (số khách × giá × tần suất) hơn con số từ trên xuống ("thị trường 1 tỷ USD, ta chiếm 1%").</p>
            <h5>Superforecasting</h5>
            <p>Nghiên cứu của Philip Tetlock: những người dự báo giỏi nhất thường "Fermi hoá" câu hỏi — chia câu hỏi lớn thành các câu hỏi nhỏ ước lượng được, bắt đầu từ tỷ lệ nền (base rate) rồi điều chỉnh.</p>
        `,
        checklist: [
            'Đại lượng được định nghĩa rõ?',
            'Mỗi thừa số có căn cứ hoặc mốc neo?',
            'Đã kiểm tra chéo bằng cách thứ hai?',
            'Kết quả được làm tròn và nêu khoảng dao động?'
        ]
    }
};
