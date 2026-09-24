// Problem Solving - Bài tập tự luận (tự làm → xem gợi ý → so với đáp án mẫu → tự chấm theo tiêu chí)
// Schema: { id, title, concepts: [id], level, time, task (HTML), hints: [], sample (HTML), rubric: [] }
const psExercises = [
    {
        id: 'ex-rewrite-statement',
        title: 'Viết lại 3 problem statement',
        concepts: ['define-problem'],
        level: 'beginner',
        time: '10 phút',
        task: `
            <p>Viết lại 3 câu mô tả vấn đề dưới đây cho <strong>cụ thể, đo được, không chứa giải pháp, không đổ lỗi</strong>. Bạn có thể tự giả định số liệu hợp lý.</p>
            <ol>
                <li>"Nhân viên kho làm ăn cẩu thả."</li>
                <li>"Chúng ta cần làm lại website."</li>
                <li>"Sinh viên không thích môn học này."</li>
            </ol>
        `,
        hints: [
            'Hỏi: hiện tượng quan sát được là gì? Đo bằng chỉ số nào? So với mục tiêu/chuẩn nào?',
            'Với câu 2, hỏi "làm lại website để giải quyết điều gì?" — câu trả lời đó mới là vấn đề.',
            'Mẫu: [Ai] đang gặp [vấn đề, đo bằng gì] khi [bối cảnh], so với [mục tiêu], dẫn đến [hậu quả].'
        ],
        sample: `
            <ol>
                <li>"Tỷ lệ đơn đóng gói sai tăng từ 0,5% lên 2,1% trong tháng 8 (mục tiêu dưới 0,5%), gây 180 đơn đổi trả và khoảng 40 triệu đồng chi phí vận chuyển lại."</li>
                <li>"Tỷ lệ chuyển đổi trên mobile chỉ 0,8% so với 2,5% trên desktop; 65% người dùng mobile thoát ở bước nhập địa chỉ giao hàng."</li>
                <li>"Tỷ lệ sinh viên đi học môn X giảm từ 85% xuống 50% sau tuần 4; điểm đánh giá môn học 2,1/5 so với trung bình khoa 3,8/5."</li>
            </ol>
            <p>Lưu ý: không có câu nào chứa giải pháp ("làm lại website", "đổi giảng viên") hay nhận xét về con người ("cẩu thả", "lười").</p>
        `,
        rubric: [
            'Mỗi câu có ít nhất một con số hiện trạng',
            'Có mục tiêu hoặc mốc so sánh',
            'Không chứa giải pháp',
            'Không đổ lỗi hay nhận xét tính cách',
            'Nêu được hậu quả/tác động'
        ]
    },
    {
        id: 'ex-is-isnot',
        title: 'Phân tích Is / Is Not',
        concepts: ['define-problem', 'root-cause'],
        level: 'intermediate',
        time: '15 phút',
        task: `
            <p>Chuỗi nhà thuốc nhận được nhiều phàn nàn "máy POS tính sai tiền". Dữ kiện:</p>
            <ul>
                <li>Lỗi xảy ra ở 6/40 cửa hàng: cả 6 đều ở khu vực phía Nam.</li>
                <li>Chỉ xảy ra với hoá đơn có sản phẩm đang khuyến mãi "mua 2 tặng 1".</li>
                <li>Bắt đầu từ ngày 12/9. Chương trình khuyến mãi bắt đầu từ ngày 1/9.</li>
                <li>Các cửa hàng phía Nam được cập nhật phần mềm POS phiên bản 4.2 vào tối 11/9; phía Bắc vẫn dùng 4.1.</li>
                <li>Hoá đơn không có khuyến mãi tính đúng ở mọi cửa hàng.</li>
            </ul>
            <p><strong>Yêu cầu:</strong> (1) Lập bảng Is / Is Not. (2) Nêu giả thuyết nguyên nhân mạnh nhất. (3) Đề xuất cách kiểm chứng nhanh và biện pháp tạm thời.</p>
        `,
        hints: [
            'Chia bảng theo các chiều: Ở đâu? Khi nào? Loại giao dịch nào?',
            'Tìm điểm khác biệt: điều gì đúng với nhóm lỗi mà không đúng với nhóm không lỗi? Điều gì thay đổi đúng lúc lỗi bắt đầu?',
            'Khuyến mãi có từ 1/9 nhưng lỗi từ 12/9 → khuyến mãi một mình không đủ giải thích.'
        ],
        sample: `
            <table>
                <tr><th></th><th>IS</th><th>IS NOT</th><th>Khác biệt</th></tr>
                <tr><td>Ở đâu</td><td>6 cửa hàng phía Nam</td><td>34 cửa hàng còn lại</td><td>Phía Nam chạy POS 4.2</td></tr>
                <tr><td>Khi nào</td><td>Từ 12/9</td><td>1/9 – 11/9 (dù đã có khuyến mãi)</td><td>Cập nhật 4.2 tối 11/9</td></tr>
                <tr><td>Giao dịch</td><td>Có sản phẩm "mua 2 tặng 1"</td><td>Hoá đơn không khuyến mãi</td><td>Logic tính khuyến mãi</td></tr>
            </table>
            <p><strong>Giả thuyết mạnh nhất:</strong> POS 4.2 có lỗi trong logic tính khuyến mãi "mua 2 tặng 1". Giả thuyết này giải thích <em>mọi</em> dữ kiện: vì sao chỉ phía Nam, vì sao từ 12/9, vì sao chỉ hoá đơn khuyến mãi.</p>
            <p><strong>Kiểm chứng:</strong> tạo hoá đơn thử "mua 2 tặng 1" trên máy 4.1 và 4.2 trong môi trường thử nghiệm; hoặc xem ghi chú thay đổi của bản 4.2 liên quan tới khuyến mãi.</p>
            <p><strong>Tạm thời:</strong> quay lại bản 4.1 ở 6 cửa hàng, hoặc tạm tính khuyến mãi thủ công; rà soát và hoàn tiền cho các hoá đơn sai từ 12/9.</p>
        `,
        rubric: [
            'Bảng có ít nhất 3 chiều (ở đâu, khi nào, loại giao dịch)',
            'Chỉ ra được điểm khác biệt giữa IS và IS NOT',
            'Giả thuyết giải thích được tất cả dữ kiện, kể cả việc khuyến mãi có từ 1/9',
            'Có cách kiểm chứng cụ thể',
            'Có biện pháp tạm thời và xử lý khách bị ảnh hưởng'
        ]
    },
    {
        id: 'ex-5whys-onboarding',
        title: '5 Whys: nhân viên mới nghỉ việc sớm',
        concepts: ['5-whys', 'root-cause'],
        level: 'beginner',
        time: '15 phút',
        task: `
            <p>Công ty phần mềm 80 người: trong 6 tháng qua, <strong>5/12 nhân viên mới nghỉ việc trong 3 tháng đầu</strong>. Phỏng vấn nghỉ việc cho thấy các ý kiến lặp lại: "không biết phải làm gì tuần đầu", "hỏi thì ngại vì ai cũng bận", "tới tháng thứ 2 mới được giao việc thật".</p>
            <p><strong>Yêu cầu:</strong> Viết chuỗi 5 Whys từ vấn đề tới nguyên nhân gốc mang tính hệ thống. Sau đó đề xuất 1 biện pháp tạm thời và 2 biện pháp gốc.</p>
        `,
        hints: [
            'Bắt đầu bằng vấn đề có số liệu: "42% nhân viên mới nghỉ trong 3 tháng đầu".',
            'Nếu câu trả lời là "vì quản lý không quan tâm" — hỏi tiếp: vì sao hệ thống không đảm bảo sự quan tâm đó?',
            'Kiểm tra ngược bằng "…vì vậy…" từ dưới lên.'
        ],
        sample: `
            <ol>
                <li><strong>Tại sao 42% nhân viên mới nghỉ trong 3 tháng?</strong> → Họ cảm thấy lạc lõng, không đóng góp được gì trong những tuần đầu.</li>
                <li><strong>Tại sao lạc lõng?</strong> → Không có kế hoạch công việc cho tuần đầu, không biết hỏi ai.</li>
                <li><strong>Tại sao không có kế hoạch?</strong> → Việc đón nhân viên mới do từng trưởng nhóm tự lo, tuỳ người.</li>
                <li><strong>Tại sao tuỳ người?</strong> → Công ty chưa có quy trình onboarding chuẩn và không ai chịu trách nhiệm chính.</li>
                <li><strong>Tại sao chưa có?</strong> → Công ty tăng từ 30 lên 80 người trong 1 năm; quy trình tuyển dụng được đầu tư nhưng quy trình sau tuyển dụng thì chưa, và không có chỉ số nào theo dõi trải nghiệm nhân viên mới.</li>
            </ol>
            <p><strong>Kiểm tra ngược:</strong> Không theo dõi & không có người chịu trách nhiệm → vì vậy không có quy trình → vì vậy mỗi nhóm một kiểu → vì vậy nhiều người không có kế hoạch tuần đầu → vì vậy lạc lõng → vì vậy nghỉ sớm. ✅</p>
            <p><strong>Tạm thời:</strong> gán ngay một "buddy" cho mỗi nhân viên mới đang làm việc.</p>
            <p><strong>Gốc:</strong> (1) Quy trình onboarding 30-60-90 ngày chuẩn, có task thật được giao ngay tuần 1; (2) giao HR chịu trách nhiệm và theo dõi chỉ số "tỷ lệ ở lại sau 90 ngày" hằng quý.</p>
        `,
        rubric: [
            'Vấn đề ban đầu có số liệu',
            'Mỗi bước là hệ quả logic của bước trước (qua được kiểm tra ngược)',
            'Nguyên nhân cuối là hệ thống/quy trình, không phải một cá nhân',
            'Có biện pháp tạm thời',
            'Biện pháp gốc thay đổi cấu trúc (quy trình, trách nhiệm, chỉ số)'
        ]
    },
    {
        id: 'ex-fishbone-course',
        title: 'Fishbone: học viên bỏ khoá học online',
        concepts: ['fishbone', 'brainstorming'],
        level: 'intermediate',
        time: '20 phút',
        task: `
            <p>Một nền tảng học online có <strong>70% học viên bỏ dở khoá học trước bài 5</strong> (tổng 20 bài).</p>
            <p><strong>Yêu cầu:</strong> (1) Chọn bộ nhóm nguyên nhân phù hợp (tự định nghĩa 5–6 nhóm). (2) Liệt kê ít nhất 2 nguyên nhân khả dĩ cho mỗi nhóm. (3) Chọn 3 nguyên nhân bạn nghi ngờ nhất và nêu <em>dữ liệu nào</em> sẽ giúp kiểm chứng từng nguyên nhân.</p>
        `,
        hints: [
            'Với dịch vụ số, có thể dùng các nhóm: Học viên, Nội dung, Nền tảng/Công nghệ, Giá & Cam kết, Hỗ trợ, Bối cảnh bên ngoài.',
            'Đừng quên nhóm "Học viên": động lực, kỳ vọng, thời gian — nhưng mô tả trung lập, không đổ lỗi.',
            'Dữ liệu kiểm chứng có thể là: tỷ lệ rời ở từng bài, thời lượng video, thiết bị, khảo sát ngắn, so sánh khoá trả phí/miễn phí.'
        ],
        sample: `
            <ul>
                <li><strong>Học viên:</strong> kỳ vọng "học nhanh" không khớp thực tế; thiếu thời gian sau giờ làm; không có mục tiêu cụ thể.</li>
                <li><strong>Nội dung:</strong> bài 1–4 nặng lý thuyết, chưa có kết quả thấy được; video dài 40 phút; độ khó tăng đột ngột ở bài 3.</li>
                <li><strong>Nền tảng:</strong> app mobile hay lỗi phát video; không nhớ vị trí đang xem; không có nhắc nhở.</li>
                <li><strong>Giá & cam kết:</strong> khoá miễn phí/giảm giá sâu → cam kết thấp; không có hạn hoàn thành.</li>
                <li><strong>Hỗ trợ:</strong> câu hỏi không được trả lời; không có cộng đồng học cùng.</li>
                <li><strong>Bối cảnh:</strong> mùa cao điểm công việc cuối năm; nhiều khoá mua theo trào lưu.</li>
            </ul>
            <p><strong>3 nguyên nhân nghi ngờ nhất & dữ liệu kiểm chứng:</strong></p>
            <ol>
                <li><em>Bài 3 khó đột ngột</em> → biểu đồ tỷ lệ rời theo từng bài: nếu rớt mạnh ở bài 3 → ủng hộ.</li>
                <li><em>Video quá dài</em> → so tỷ lệ xem hết giữa video &lt;15 phút và &gt;30 phút.</li>
                <li><em>Cam kết thấp do mua giá rẻ</em> → so tỷ lệ hoàn thành giữa người mua giá gốc và người mua khuyến mãi.</li>
            </ol>
        `,
        rubric: [
            'Có 5–6 nhóm nguyên nhân phù hợp với dịch vụ online',
            'Mỗi nhóm có ít nhất 2 nguyên nhân cụ thể',
            'Nhóm "Học viên" được mô tả trung lập, không đổ lỗi',
            'Chọn ra top 3 nguyên nhân',
            'Mỗi nguyên nhân có dữ liệu kiểm chứng cụ thể'
        ]
    },
    {
        id: 'ex-issue-tree-gym',
        title: 'Issue tree: phòng gym vắng khách',
        concepts: ['issue-tree', 'hypothesis-driven'],
        level: 'intermediate',
        time: '20 phút',
        task: `
            <p>Chủ một phòng gym: "Doanh thu tháng này giảm 25% so với cùng kỳ năm ngoái."</p>
            <p><strong>Phần A:</strong> Xây issue tree 3 tầng cho câu hỏi "Vì sao doanh thu giảm 25%?" theo nguyên tắc MECE.</p>
            <p><strong>Phần B:</strong> Cây sau đây của một bạn khác vi phạm MECE ở đâu?</p>
            <div class="example-box">Doanh thu giảm vì: (1) Khách hàng ít đi · (2) Đối thủ mới mở gần đây · (3) Marketing kém · (4) Hội viên không gia hạn</div>
        `,
        hints: [
            'Thử chia theo công thức: Doanh thu = Số hội viên trả phí × Doanh thu trung bình mỗi hội viên (+ doanh thu khác như PT, đồ uống).',
            'Số hội viên = hội viên mới + hội viên gia hạn. Doanh thu mỗi hội viên = giá gói × cơ cấu gói…',
            'Với phần B: "Hội viên không gia hạn" có nằm trong "Khách hàng ít đi" không? "Đối thủ" và "Marketing" là nguyên nhân hay là một nhánh cùng cấp?'
        ],
        sample: `
            <p><strong>Phần A:</strong></p>
            <ul class="tree">
                <li>Doanh thu từ gói tập giảm?
                    <ul>
                        <li>Số hội viên giảm? <ul><li>Hội viên mới ít hơn?</li><li>Tỷ lệ gia hạn thấp hơn?</li></ul></li>
                        <li>Doanh thu mỗi hội viên giảm? <ul><li>Chuyển sang gói rẻ hơn / gói dài hạn giảm giá?</li><li>Khuyến mãi nhiều hơn?</li></ul></li>
                    </ul>
                </li>
                <li>Doanh thu dịch vụ khác giảm?
                    <ul><li>Doanh thu PT (huấn luyện viên cá nhân)?</li><li>Doanh thu đồ uống, thực phẩm bổ sung?</li></ul>
                </li>
            </ul>
            <p><strong>Phần B:</strong></p>
            <ul>
                <li><strong>Trùng lặp:</strong> "Hội viên không gia hạn" là một phần của "Khách hàng ít đi".</li>
                <li><strong>Trộn tầng:</strong> "Đối thủ mới" và "Marketing kém" là <em>nguyên nhân</em> có thể giải thích vì sao khách ít đi — không cùng cấp với "khách ít đi".</li>
                <li><strong>Bỏ sót:</strong> không xét doanh thu mỗi hội viên và các nguồn thu khác.</li>
            </ul>
        `,
        rubric: [
            'Cây dùng một logic chia nhất quán ở mỗi tầng (ví dụ công thức)',
            'Không có nhánh trùng lặp',
            'Không bỏ sót nguồn doanh thu quan trọng',
            'Chỉ ra được lỗi trùng lặp trong phần B',
            'Chỉ ra được lỗi trộn tầng/bỏ sót trong phần B'
        ]
    },
    {
        id: 'ex-pareto-defects',
        title: 'Phân tích Pareto lỗi sản phẩm',
        concepts: ['pareto', 'prioritization'],
        level: 'beginner',
        time: '10 phút',
        task: `
            <p>Xưởng may ghi nhận 400 sản phẩm lỗi trong tháng:</p>
            <table>
                <tr><th>Loại lỗi</th><th>Số lượng</th></tr>
                <tr><td>Đường may lệch</td><td>44</td></tr>
                <tr><td>Chỉ thừa</td><td>152</td></tr>
                <tr><td>Sai kích cỡ</td><td>24</td></tr>
                <tr><td>Vết bẩn</td><td>96</td></tr>
                <tr><td>Thiếu cúc</td><td>60</td></tr>
                <tr><td>Khác</td><td>24</td></tr>
            </table>
            <p><strong>Yêu cầu:</strong> (1) Sắp xếp giảm dần, tính % và % tích luỹ. (2) Nên tập trung vào những loại lỗi nào? (3) Có loại lỗi nào ít nhưng vẫn cần chú ý không, vì sao?</p>
        `,
        hints: [
            'Tính % = số lượng ÷ 400. Cộng dồn từ trên xuống để ra % tích luỹ.',
            'Tìm điểm mà % tích luỹ chạm khoảng 75–80%.',
            'Nghĩ về mức độ nghiêm trọng với khách hàng: lỗi nào khiến sản phẩm không dùng được?'
        ],
        sample: `
            <table>
                <tr><th>Loại</th><th>SL</th><th>%</th><th>% tích luỹ</th></tr>
                <tr><td>Chỉ thừa</td><td>152</td><td>38%</td><td>38%</td></tr>
                <tr><td>Vết bẩn</td><td>96</td><td>24%</td><td>62%</td></tr>
                <tr><td>Thiếu cúc</td><td>60</td><td>15%</td><td>77%</td></tr>
                <tr><td>Đường may lệch</td><td>44</td><td>11%</td><td>88%</td></tr>
                <tr><td>Sai kích cỡ</td><td>24</td><td>6%</td><td>94%</td></tr>
                <tr><td>Khác</td><td>24</td><td>6%</td><td>100%</td></tr>
            </table>
            <p><strong>Tập trung:</strong> chỉ thừa, vết bẩn, thiếu cúc — 3/6 loại chiếm 77% lỗi. "Chỉ thừa" riêng nó đã 38% → thường do khâu cắt chỉ cuối chuyền thiếu người hoặc dụng cụ, sửa khá rẻ.</p>
            <p><strong>Ít nhưng quan trọng:</strong> "Sai kích cỡ" chỉ 6% nhưng khiến khách không mặc được, gây đổi trả và đánh giá xấu — cần xử lý song song dù không nằm trong nhóm 80%.</p>
        `,
        rubric: [
            'Sắp xếp đúng thứ tự giảm dần',
            'Tính đúng % và % tích luỹ',
            'Chọn đúng nhóm "số ít quan trọng"',
            'Nhận ra lỗi hiếm nhưng nghiêm trọng (sai kích cỡ)'
        ]
    },
    {
        id: 'ex-decision-job',
        title: 'Ma trận quyết định: chọn lời mời làm việc',
        concepts: ['decision-matrix', 'second-order'],
        level: 'intermediate',
        time: '20 phút',
        task: `
            <p>Bạn có 3 lời mời làm việc:</p>
            <ul>
                <li><strong>A — Tập đoàn lớn:</strong> lương 25 triệu, ổn định, quy trình chặt, học chậm, đi lại 45 phút.</li>
                <li><strong>B — Startup:</strong> lương 22 triệu + cổ phần, học rất nhanh, rủi ro đóng cửa, đi lại 15 phút.</li>
                <li><strong>C — Công ty vừa, làm từ xa:</strong> lương 28 triệu, học trung bình, không đi lại, ít tương tác đồng nghiệp.</li>
            </ul>
            <p><strong>Yêu cầu:</strong> (1) Xác định 4–5 tiêu chí và trọng số (tổng 100%) phản ánh ưu tiên của <em>bạn</em>. (2) Chấm điểm 1–5, tính tổng có trọng số. (3) Thử đổi trọng số của 1 tiêu chí quan trọng nhất ±10%: kết quả có đảo không? (4) Nêu một hậu quả bậc hai của lựa chọn thắng.</p>
        `,
        hints: [
            'Tiêu chí gợi ý: thu nhập, tốc độ học/phát triển, ổn định, thời gian đi lại/cân bằng cuộc sống, môi trường/đồng nghiệp.',
            'Chốt trọng số TRƯỚC khi chấm điểm. Nếu có tiêu chí bắt buộc (ví dụ lương tối thiểu), lọc trước.',
            'Hậu quả bậc hai: sau 2–3 năm, lựa chọn này mở ra/đóng lại cơ hội gì?'
        ],
        sample: `
            <p><em>Ví dụ cho một người 25 tuổi ưu tiên phát triển:</em></p>
            <table>
                <tr><th>Tiêu chí (trọng số)</th><th>A</th><th>B</th><th>C</th></tr>
                <tr><td>Tốc độ học (35%)</td><td>2</td><td>5</td><td>3</td></tr>
                <tr><td>Thu nhập (25%)</td><td>3</td><td>3</td><td>5</td></tr>
                <tr><td>Ổn định (15%)</td><td>5</td><td>2</td><td>4</td></tr>
                <tr><td>Cân bằng cuộc sống (15%)</td><td>2</td><td>4</td><td>5</td></tr>
                <tr><td>Đồng nghiệp/mạng lưới (10%)</td><td>4</td><td>4</td><td>2</td></tr>
                <tr><th>Tổng</th><th>2,90</th><th>3,80</th><th>3,85</th></tr>
            </table>
            <p><strong>Độ nhạy:</strong> B và C gần như hoà (chênh 0,05). Tăng "Tốc độ học" lên 45% (giảm "Thu nhập" xuống 15%) → B = 4,00, C = 3,65: B thắng rõ. Ngược lại nếu thu nhập quan trọng hơn → C thắng. Quyết định thực chất là câu hỏi: <em>"2 năm tới tôi ưu tiên học hay ưu tiên thu nhập?"</em></p>
            <p><strong>Hậu quả bậc hai (nếu chọn B):</strong> nếu startup đóng cửa sau 18 tháng, bạn vẫn có kinh nghiệm đa dạng, dễ tìm việc mới với mức lương cao hơn; nhưng cần quỹ dự phòng 6 tháng chi tiêu để chịu được rủi ro.</p>
        `,
        rubric: [
            'Có 4–5 tiêu chí không chồng chéo',
            'Trọng số tổng 100%, phản ánh ưu tiên cá nhân',
            'Tính đúng tổng có trọng số',
            'Có thử phân tích độ nhạy',
            'Nêu được hậu quả bậc hai và cách giảm rủi ro'
        ]
    },
    {
        id: 'ex-impact-effort',
        title: 'Xếp 8 ý tưởng vào ma trận Impact–Effort',
        concepts: ['prioritization'],
        level: 'beginner',
        time: '10 phút',
        task: `
            <p>Mục tiêu của một quán ăn: <strong>tăng số khách quay lại trong 3 tháng</strong>. Xếp các ý tưởng sau vào 4 ô (Quick win / Dự án lớn / Lấp chỗ trống / Hố tiền), giải thích ngắn gọn:</p>
            <ol>
                <li>Thẻ tích điểm giấy: 10 lần ăn tặng 1 suất</li>
                <li>Xây app đặt món riêng của quán</li>
                <li>Nhắn tin cảm ơn + mã giảm giá sau lần ăn đầu (qua Zalo)</li>
                <li>Sửa lại toàn bộ nội thất</li>
                <li>Đổi màu logo</li>
                <li>Giữ chất lượng món ổn định bằng công thức chuẩn cho mọi đầu bếp</li>
                <li>Thêm 2 món mới mỗi tháng dựa trên góp ý khách</li>
                <li>Chạy quảng cáo TV</li>
            </ol>
        `,
        hints: [
            'Tác động đo theo mục tiêu "khách quay lại" — không phải "khách mới" hay "đẹp hơn".',
            'Quảng cáo TV có thể có tác động lớn tới khách mới, nhưng với mục tiêu khách quay lại thì sao?'
        ],
        sample: `
            <ul>
                <li><strong>⚡ Quick win:</strong> (1) thẻ tích điểm, (3) nhắn tin cảm ơn + mã giảm giá — rẻ, nhanh, tác động trực tiếp tới việc quay lại.</li>
                <li><strong>🏗️ Dự án lớn:</strong> (6) chuẩn hoá công thức — công sức đáng kể nhưng chất lượng ổn định là lý do cốt lõi khiến khách quay lại; (7) món mới hằng tháng — cần thử nghiệm liên tục.</li>
                <li><strong>🧩 Lấp chỗ trống:</strong> (5) đổi màu logo — rẻ nhưng gần như không ảnh hưởng việc quay lại.</li>
                <li><strong>🕳️ Hố tiền (với mục tiêu này):</strong> (2) app riêng — đắt, khách ít chịu tải app quán nhỏ; (4) sửa nội thất — đắt, tác động gián tiếp; (8) quảng cáo TV — rất đắt và chủ yếu nhắm khách mới.</li>
            </ul>
            <p>Điểm mấu chốt: cùng một ý tưởng có thể là quick win với mục tiêu này nhưng là hố tiền với mục tiêu khác — <strong>luôn định nghĩa tác động theo mục tiêu cụ thể</strong>.</p>
        `,
        rubric: [
            'Tác động được đánh giá theo đúng mục tiêu "khách quay lại"',
            'Xếp đúng ít nhất 6/8 ý tưởng so với đáp án mẫu (hoặc có lập luận hợp lý)',
            'Nhận ra quảng cáo TV và app riêng không phù hợp mục tiêu',
            'Có giải thích ngắn cho mỗi lựa chọn'
        ]
    },
    {
        id: 'ex-scamper-umbrella',
        title: 'SCAMPER cho chiếc ô (dù)',
        concepts: ['scamper', 'brainstorming'],
        level: 'beginner',
        time: '15 phút',
        task: `
            <p>Áp dụng đủ 7 chữ SCAMPER để tạo ý tưởng cải tiến <strong>chiếc ô đi mưa</strong> cho người đi xe máy/đi bộ ở thành phố Việt Nam. Mỗi chữ ít nhất 1 ý tưởng. Sau đó chọn 1 ý tưởng bạn thấy đáng thử nhất và giải thích.</p>
        `,
        hints: [
            'S: thay vật liệu, thay cách cầm? C: kết hợp với áo mưa, đèn, túi? A: học từ lá sen, từ mái hiên?',
            'M: to hơn, nhỏ hơn, gập kiểu khác? P: dùng ô khi trời nắng, làm gậy? E: bỏ tay cầm? R: đảo ngược cách gấp (gấp ngược để nước không chảy ra sàn)?'
        ],
        sample: `
            <ul>
                <li><strong>S:</strong> thay vải thường bằng vải phủ chống thấm dạng lá sen — lắc nhẹ là khô.</li>
                <li><strong>C:</strong> ô + đèn LED viền để an toàn khi đi bộ ban đêm; ô + túi đựng ô chống nhỏ nước.</li>
                <li><strong>A:</strong> học từ mái hiên: ô vành rộng phía sau để che ba lô.</li>
                <li><strong>M:</strong> ô siêu nhỏ gập 5 khúc vừa túi quần; hoặc ô "đôi" cho 2 người.</li>
                <li><strong>P:</strong> ô chống tia UV dùng cả trời nắng; tay cầm kiêm gậy chụp ảnh.</li>
                <li><strong>E:</strong> bỏ tay cầm — ô đội đầu kiểu nón rảnh tay (cho người bán hàng, shipper khi dừng đỗ).</li>
                <li><strong>R:</strong> gấp ngược (mặt ướt quay vào trong) — không nhỏ nước khi vào nhà, xe; tự đứng được khi gấp.</li>
            </ul>
            <p><strong>Đáng thử nhất:</strong> ô gấp ngược — giải quyết một khó chịu thực tế (nước nhỏ khi lên xe, vào thang máy), sản xuất không phức tạp, dễ làm prototype.</p>
        `,
        rubric: [
            'Đủ 7 chữ, mỗi chữ ít nhất 1 ý tưởng',
            'Ý tưởng gắn với bối cảnh người dùng cụ thể',
            'Có ít nhất 1–2 ý tưởng "táo bạo"',
            'Chọn 1 ý tưởng và giải thích bằng giá trị/khả thi'
        ]
    },
    {
        id: 'ex-six-hats-pets',
        title: 'Six Hats: cho mang thú cưng tới văn phòng',
        concepts: ['six-hats'],
        level: 'intermediate',
        time: '15 phút',
        task: `
            <p>Công ty 60 người đang cân nhắc chính sách <strong>"Pet-friendly Friday"</strong> — nhân viên được mang chó/mèo tới văn phòng vào thứ Sáu.</p>
            <p><strong>Yêu cầu:</strong> Viết 1–2 câu cho mỗi chiếc mũ theo thứ tự: 🔵 → ⚪ → 🟢 → 🟡 → ⚫ → 🔴 → 🔵 (kết luận).</p>
        `,
        hints: [
            '⚪ chỉ nêu dữ kiện và thông tin còn thiếu, không đánh giá.',
            '🔴 là cảm xúc/trực giác, không cần lý lẽ. 🔵 cuối cùng phải có quyết định hoặc bước tiếp theo cụ thể.'
        ],
        sample: `
            <ul>
                <li>🔵 <strong>Mở đầu:</strong> Mục tiêu: quyết định có thử chính sách không, trong 30 phút.</li>
                <li>⚪ <strong>Trắng:</strong> 18/60 người nuôi thú cưng (khảo sát); văn phòng thuê, hợp đồng chưa rõ điều khoản vật nuôi; chưa biết bao nhiêu người dị ứng.</li>
                <li>🟢 <strong>Xanh lá:</strong> thử 1 khu vực riêng; giới hạn 3 thú cưng/ngày theo lịch đăng ký; chỉ chó mèo đã tiêm phòng.</li>
                <li>🟡 <strong>Vàng:</strong> tăng gắn kết, giảm căng thẳng; lợi thế tuyển dụng; nhân viên không phải vội về cho thú cưng ăn.</li>
                <li>⚫ <strong>Đen:</strong> người dị ứng/sợ chó; tiếng ồn khi có cuộc gọi khách hàng; hư hỏng tài sản; vi phạm hợp đồng thuê.</li>
                <li>🔴 <strong>Đỏ:</strong> "Thích nhưng lo ồn" · "Hơi sợ chó lớn" · "Rất hào hứng".</li>
                <li>🔵 <strong>Kết luận:</strong> Kiểm tra hợp đồng thuê và khảo sát dị ứng trong tuần này; nếu ổn, thử 1 tháng ở khu vực riêng với quy định đăng ký, rồi đánh giá lại.</li>
            </ul>
        `,
        rubric: [
            'Mỗi mũ đúng vai trò (Trắng không đánh giá, Đỏ không cần lý lẽ…)',
            'Mũ Đen nêu rủi ro cụ thể',
            'Mũ Xanh lá có phương án thay thế/cải tiến, không chỉ "làm hoặc không"',
            'Mũ Xanh dương cuối có quyết định/bước tiếp theo cụ thể'
        ]
    },
    {
        id: 'ex-reframe-email',
        title: 'Reframe: sinh viên không đọc email nhà trường',
        concepts: ['reframing', 'design-thinking'],
        level: 'intermediate',
        time: '15 phút',
        task: `
            <p>Phòng đào tạo phàn nàn: <strong>"Sinh viên không đọc email của nhà trường"</strong> — nhiều bạn lỡ hạn đăng ký học phần.</p>
            <p><strong>Yêu cầu:</strong> (1) Viết ít nhất 4 cách đặt vấn đề (frame) khác nhau. (2) Tìm một "điểm sáng" có thể có. (3) Viết 2 câu hỏi "How might we" có độ rộng vừa phải.</p>
        `,
        hints: [
            'Hỏi "để làm gì?": nhà trường gửi email để làm gì? Mục tiêu thật là sinh viên đọc email, hay là sinh viên không lỡ hạn?',
            'Nhìn từ góc sinh viên: họ nhận bao nhiêu email mỗi tuần? Họ dùng kênh nào hằng ngày?',
            'Điểm sáng: lớp/khoa nào gần như không ai lỡ hạn? Họ làm gì khác?'
        ],
        sample: `
            <p><strong>Frame khác nhau:</strong></p>
            <ol>
                <li>Mục tiêu thật là <em>không lỡ hạn</em>, không phải <em>đọc email</em> → nhắc hạn qua kênh sinh viên hay dùng (Zalo/app), hoặc lịch tự động.</li>
                <li>Quá nhiều email không quan trọng → email quan trọng bị chìm (vấn đề tín hiệu/nhiễu).</li>
                <li>Tiêu đề email không cho biết cần làm gì và hạn khi nào.</li>
                <li>Quy trình đăng ký phức tạp nên sinh viên trì hoãn rồi quên.</li>
                <li>Hạn đăng ký trùng mùa thi.</li>
            </ol>
            <p><strong>Điểm sáng:</strong> lớp có cán bộ lớp nhắc trong nhóm chat thì tỷ lệ lỡ hạn gần 0% → tận dụng mạng lưới cán bộ lớp.</p>
            <p><strong>HMW:</strong></p>
            <ul>
                <li>"Làm thế nào để mọi sinh viên biết hạn đăng ký ít nhất 3 ngày trước, qua kênh họ xem hằng ngày?"</li>
                <li>"Làm thế nào để email quan trọng của trường nổi bật giữa hàng chục email khác?"</li>
            </ul>
        `,
        rubric: [
            'Có ít nhất 4 frame thực sự khác nhau',
            'Có frame xem lại mục tiêu gốc (không lỡ hạn thay vì đọc email)',
            'Tìm được điểm sáng hợp lý',
            'HMW không quá rộng, không chứa sẵn giải pháp'
        ]
    },
    {
        id: 'ex-premortem-event',
        title: 'Pre-mortem: sự kiện 500 người',
        concepts: ['premortem', 'inversion'],
        level: 'intermediate',
        time: '15 phút',
        task: `
            <p>Bạn phụ trách tổ chức <strong>hội thảo 500 người</strong> tại một khách sạn sau 6 tuần nữa, có livestream.</p>
            <p><strong>Yêu cầu:</strong> Tưởng tượng sự kiện đã thất bại thảm hại. (1) Liệt kê ít nhất 8 lý do thuộc nhiều nhóm khác nhau. (2) Chọn 3 rủi ro hàng đầu (khả năng × tác động). (3) Với mỗi rủi ro: biện pháp phòng ngừa + tín hiệu cảnh báo sớm.</p>
        `,
        hints: [
            'Nhóm rủi ro: người tham dự, diễn giả, địa điểm, kỹ thuật, truyền thông, thời tiết/giao thông, ngân sách, pháp lý/an toàn.',
            'Tín hiệu cảnh báo sớm là con số/sự kiện có thể theo dõi trước ngày diễn ra, ví dụ "2 tuần trước còn dưới 200 người đăng ký".'
        ],
        sample: `
            <p><strong>Lý do thất bại:</strong> chỉ 150 người tới (đăng ký nhiều nhưng không đến) · diễn giả chính huỷ phút chót · wifi/livestream sập · âm thanh rè · kẹt xe, khách tới muộn · thiếu đồ ăn/nước · check-in xếp hàng 30 phút · chương trình trễ 1 tiếng · sự cố y tế không có phương án · vượt ngân sách vì phát sinh.</p>
            <p><strong>Top 3 và biện pháp:</strong></p>
            <table>
                <tr><th>Rủi ro</th><th>Phòng ngừa</th><th>Tín hiệu sớm</th></tr>
                <tr><td>Người đăng ký không đến</td><td>Thu phí giữ chỗ nhỏ; email nhắc 7 ngày & 1 ngày trước; mời dư 30%</td><td>1 tuần trước tỷ lệ xác nhận dưới 60%</td></tr>
                <tr><td>Livestream sập</td><td>Đường truyền riêng + 4G dự phòng; chạy thử đầy đủ hôm trước; ghi hình để đăng lại</td><td>Buổi chạy thử có gián đoạn</td></tr>
                <tr><td>Diễn giả chính huỷ</td><td>Hợp đồng rõ ràng; diễn giả dự phòng; có phương án kết nối online</td><td>Diễn giả chậm gửi slide quá hạn</td></tr>
            </table>
        `,
        rubric: [
            'Có ít nhất 8 lý do thuộc nhiều nhóm khác nhau',
            'Chọn top 3 có cân nhắc khả năng và tác động',
            'Mỗi rủi ro có biện pháp phòng ngừa cụ thể',
            'Có tín hiệu cảnh báo sớm đo được'
        ]
    },
    {
        id: 'ex-inversion-english',
        title: 'Inversion: học tiếng Anh trong 1 năm',
        concepts: ['inversion', 'pdca'],
        level: 'beginner',
        time: '10 phút',
        task: `
            <p>Mục tiêu: <strong>giao tiếp tiếng Anh tự tin trong công việc sau 12 tháng</strong>.</p>
            <p><strong>Yêu cầu:</strong> (1) Đảo ngược: liệt kê ít nhất 8 cách "chắc chắn thất bại". (2) Đánh dấu những điều bạn (hoặc người quen) đang làm. (3) Biến 4 điều quan trọng nhất thành quy tắc hành động cụ thể.</p>
        `,
        hints: [
            'Nghĩ về: mục tiêu, thói quen, phương pháp, môi trường, cách đo tiến độ, động lực.',
            'Quy tắc tốt cụ thể tới mức biết ngay mình có làm hay không: "nói tiếng Anh 20 phút mỗi ngày", không phải "cố gắng luyện nói".'
        ],
        sample: `
            <p><strong>Cách chắc chắn thất bại:</strong> chỉ học ngữ pháp, không bao giờ nói · học dồn 5 tiếng cuối tuần rồi bỏ cả tuần · mua 5 khoá học cùng lúc · không có mục tiêu đo được · sợ sai nên không nói · chỉ học một mình, không ai kiểm tra · đổi phương pháp mỗi tuần · học từ vựng không liên quan công việc · không bao giờ nghe người bản xứ.</p>
            <p><strong>Quy tắc hành động:</strong></p>
            <ol>
                <li>Mỗi ngày 20 phút, cố định sau bữa sáng — không bù dồn cuối tuần.</li>
                <li>Mỗi tuần 2 buổi nói 30 phút với giáo viên/bạn học — sai thoải mái.</li>
                <li>Chỉ 1 khoá học chính trong 3 tháng; đánh giá lại sau mỗi quý (PDCA).</li>
                <li>Mỗi tháng tự ghi âm 3 phút giới thiệu dự án bằng tiếng Anh và so với tháng trước.</li>
            </ol>
        `,
        rubric: [
            'Có ít nhất 8 cách thất bại cụ thể',
            'Có tự soi lại hành vi hiện tại',
            'Quy tắc cụ thể, kiểm tra được có làm hay không',
            'Có cách đo tiến độ định kỳ'
        ]
    },
    {
        id: 'ex-second-order-parking',
        title: 'Tư duy bậc hai: thưởng theo số dòng code',
        concepts: ['second-order', 'systems-thinking'],
        level: 'intermediate',
        time: '15 phút',
        task: `
            <p>Một giám đốc đề xuất: <strong>"Thưởng cho lập trình viên theo số dòng code viết ra mỗi tháng"</strong> để tăng năng suất.</p>
            <p><strong>Yêu cầu:</strong> (1) Phân tích hậu quả bậc 1, bậc 2, bậc 3. (2) Những bên nào sẽ phản ứng và phản ứng ra sao? (3) Đề xuất cách đo năng suất ít tác dụng phụ hơn.</p>
        `,
        hints: [
            'Người ta sẽ tối ưu cho đúng chỉ số được thưởng. Viết nhiều dòng code dễ nhất bằng cách nào?',
            'Nghĩ tới: chất lượng code, bảo trì, review, tinh thần những người làm việc khó nhưng ít dòng (sửa bug, tối ưu, thiết kế).',
            'Định luật Goodhart — nên dùng nhiều chỉ số cân bằng và gắn với kết quả cho người dùng.'
        ],
        sample: `
            <ul>
                <li><strong>Bậc 1:</strong> số dòng code tăng mạnh ✅ (trên giấy).</li>
                <li><strong>Bậc 2:</strong> code dài dòng, copy-paste thay vì tái sử dụng; ngại xoá code thừa (vì bị "trừ điểm"); ít người nhận việc sửa bug khó, tối ưu hiệu năng.</li>
                <li><strong>Bậc 3:</strong> hệ thống phình to, khó bảo trì, nhiều lỗi → tốc độ phát triển thực tế <em>giảm</em>; người giỏi làm việc khó cảm thấy bất công và nghỉ việc.</li>
            </ul>
            <p><strong>Phản ứng các bên:</strong> lập trình viên tối ưu con số; reviewer bị quá tải; quản lý nhận báo cáo đẹp nhưng sản phẩm chậm; khách hàng gặp nhiều lỗi hơn.</p>
            <p><strong>Cách đo tốt hơn:</strong> kết hợp nhiều chỉ số — tần suất phát hành, thời gian từ commit tới production, tỷ lệ lỗi sau phát hành, thời gian khôi phục sự cố (bộ chỉ số DORA) — cộng đánh giá định tính từ đồng nghiệp và mức độ đạt mục tiêu sản phẩm.</p>
        `,
        rubric: [
            'Phân biệt rõ bậc 1, bậc 2, bậc 3',
            'Nêu được hành vi "chơi chỉ số" cụ thể',
            'Xét phản ứng của ít nhất 2 bên liên quan',
            'Đề xuất đo lường cân bằng nhiều chỉ số, gắn với kết quả thật'
        ]
    },
    {
        id: 'ex-feedback-restaurant',
        title: 'Vẽ vòng phản hồi: nhà hàng đông khách',
        concepts: ['feedback-loops', 'systems-thinking'],
        level: 'advanced',
        time: '20 phút',
        task: `
            <p>Một nhà hàng mới nổi tiếng nhờ review trên mạng. Khách tăng nhanh. Sau 4 tháng: thời gian chờ món tăng, nhân viên kiệt sức và nghỉ việc, chất lượng món giảm, review xấu xuất hiện, khách bắt đầu giảm.</p>
            <p><strong>Yêu cầu:</strong> (1) Mô tả ít nhất 1 vòng tăng cường và 1 vòng cân bằng (ghi rõ các biến và dấu +/−). (2) Chỉ ra độ trễ quan trọng. (3) Xác định mẫu hệ thống (archetype). (4) Đề xuất 2 điểm can thiệp.</p>
        `,
        hints: [
            'Vòng R: review tốt → khách → … → review tốt. Vòng B: khách → tải công việc → chất lượng → review → khách.',
            'Độ trễ: từ lúc chất lượng giảm tới lúc review xấu đủ nhiều để ảnh hưởng khách.',
            'Mẫu "Giới hạn tăng trưởng": vòng tăng trưởng gặp một giới hạn năng lực.'
        ],
        sample: `
            <p><strong>Vòng R (tăng trưởng):</strong> Review tốt (+)→ Số khách (+)→ Doanh thu/độ nổi tiếng (+)→ Review tốt. Không có dấu "−" → tăng cường.</p>
            <p><strong>Vòng B (giới hạn):</strong> Số khách (+)→ Tải công việc (−)→ Chất lượng món & phục vụ (+)→ Review tốt (+)→ Số khách. Một dấu "−" → cân bằng.</p>
            <p><strong>Vòng R có hại:</strong> Tải công việc (+)→ Nhân viên nghỉ việc (+)→ Tải trên người còn lại (+)→ Nhân viên nghỉ việc.</p>
            <p><strong>Độ trễ:</strong> chất lượng giảm hôm nay, review xấu tích luỹ sau vài tuần; tuyển và đào tạo nhân viên mới mất 1–2 tháng → chủ quán phản ứng muộn.</p>
            <p><strong>Mẫu hệ thống:</strong> Giới hạn tăng trưởng (Limits to Growth) — giới hạn là năng lực bếp và nhân sự.</p>
            <p><strong>Điểm can thiệp:</strong> (1) chủ động giới hạn tăng trưởng: đặt bàn trước, giới hạn số suất mỗi ngày để giữ chất lượng; (2) tăng năng lực <em>trước</em> khi quá tải: tuyển và đào tạo sớm, rút gọn thực đơn để bếp nhanh hơn.</p>
        `,
        rubric: [
            'Có ít nhất 1 vòng R và 1 vòng B với biến đo được',
            'Dấu +/− và loại vòng xác định đúng',
            'Chỉ ra độ trễ và hệ quả của nó',
            'Nhận diện đúng mẫu Giới hạn tăng trưởng',
            'Can thiệp tác động vào giới hạn, không chỉ đẩy mạnh tăng trưởng'
        ]
    },
    {
        id: 'ex-fermi-milktea',
        title: 'Fermi: trà sữa bán ra mỗi ngày',
        concepts: ['fermi', 'issue-tree'],
        level: 'advanced',
        time: '15 phút',
        task: `
            <p>Ước tính <strong>số ly trà sữa bán ra mỗi ngày ở TP.HCM</strong>. Trình bày công thức phân rã, giả định cho từng thừa số, kết quả, và một cách kiểm tra chéo.</p>
        `,
        hints: [
            'Từ phía cầu: dân số × tỷ lệ người uống trà sữa × số ly mỗi tuần ÷ 7.',
            'Từ phía cung: số cửa hàng × số ly mỗi cửa hàng mỗi ngày.',
            'Làm tròn, nêu khoảng dao động. Hai cách nên cho cùng bậc độ lớn.'
        ],
        sample: `
            <p><strong>Cách 1 — từ nhu cầu:</strong></p>
            <ul>
                <li>Dân số ~9 triệu người (làm tròn).</li>
                <li>Nhóm tuổi hay uống (khoảng 12–40 tuổi) ~50% → 4,5 triệu.</li>
                <li>Trong nhóm này ~50% có uống trà sữa → 2,25 triệu người.</li>
                <li>Trung bình ~1,5 ly/tuần → 2,25 triệu × 1,5 ÷ 7 ≈ <strong>480.000 ly/ngày</strong>.</li>
            </ul>
            <p><strong>Cách 2 — từ nguồn cung:</strong></p>
            <ul>
                <li>Giả định ~3.000 điểm bán (chuỗi lớn, quán nhỏ, xe đẩy).</li>
                <li>Trung bình ~150 ly/điểm/ngày → <strong>450.000 ly/ngày</strong>.</li>
            </ul>
            <p><strong>Kết luận:</strong> khoảng <strong>400.000–500.000 ly/ngày</strong> (bậc vài trăm nghìn). Hai cách cùng bậc độ lớn → khá tin cậy. Giả định nhạy nhất: tỷ lệ người uống và tần suất — nếu cần chính xác hơn, khảo sát nhanh 100 người là cách rẻ nhất để thu hẹp khoảng.</p>
        `,
        rubric: [
            'Có công thức phân rã rõ ràng',
            'Mỗi thừa số có giả định hợp lý, dùng số tròn',
            'Có cách kiểm tra chéo thứ hai',
            'Kết quả được làm tròn và nêu khoảng',
            'Chỉ ra giả định nhạy nhất'
        ]
    },
    {
        id: 'ex-first-principles-wedding',
        title: 'First principles: chi phí đám cưới',
        concepts: ['first-principles', 'reframing'],
        level: 'advanced',
        time: '20 phút',
        task: `
            <p>Một cặp đôi nói: <strong>"Đám cưới ở thành phố phải tốn ít nhất 400 triệu, ai cũng vậy."</strong></p>
            <p><strong>Yêu cầu:</strong> (1) Liệt kê các giả định ẩn trong câu nói. (2) Phân rã đám cưới thành các "nhu cầu cơ bản" thật sự của cặp đôi và gia đình. (3) Xây dựng lại ít nhất 2 phương án đáp ứng các nhu cầu đó với chi phí khác hẳn. (4) Nêu ràng buộc thực tế (văn hoá, gia đình) cần tôn trọng.</p>
        `,
        hints: [
            'Giả định ẩn: số khách phải đông? Phải tổ chức ở nhà hàng lớn? Phải có đủ mọi hạng mục như mọi người?',
            'Nhu cầu cơ bản có thể là: công bố với cộng đồng, nghi lễ với gia đình hai bên, kỷ niệm đẹp, cảm ơn người thân, không nợ nần…',
            'Đừng quên hàng rào Chesterton: vì sao có những nghi thức đó? Cái nào quan trọng với bố mẹ?'
        ],
        sample: `
            <p><strong>Giả định ẩn:</strong> phải mời 400–500 khách; phải ở nhà hàng tiệc cưới; phải có đủ ảnh cưới studio, xe hoa, MC, ban nhạc; tiền mừng sẽ bù phần lớn; "ai cũng vậy" nên mình cũng phải vậy.</p>
            <p><strong>Nhu cầu cơ bản:</strong> (1) nghi lễ gia tiên trang trọng với hai gia đình; (2) cảm ơn và chia vui với người thân thiết; (3) có kỷ niệm đẹp; (4) bố mẹ không mất mặt với họ hàng; (5) không mang nợ bước vào hôn nhân.</p>
            <p><strong>Phương án xây lại:</strong></p>
            <ul>
                <li><strong>A:</strong> lễ gia tiên đầy đủ tại nhà + tiệc thân mật 120 khách ở nhà hàng vừa, chụp ảnh phóng sự ngày cưới thay ảnh studio → khoảng 150–180 triệu.</li>
                <li><strong>B:</strong> lễ gia tiên + tiệc lớn do bố mẹ chủ trì ở quê cho họ hàng (chi phí thấp hơn nhiều so với thành phố) + tiệc nhỏ cho bạn bè ở thành phố → khoảng 200 triệu.</li>
            </ul>
            <p><strong>Ràng buộc cần tôn trọng:</strong> nghi lễ gia tiên, danh sách khách quan trọng của bố mẹ, phong tục địa phương. First principles không có nghĩa là bỏ hết nghi thức — mà hiểu nghi thức nào phục vụ nhu cầu thật.</p>
        `,
        rubric: [
            'Nêu được ít nhất 3 giả định ẩn',
            'Phân rã thành nhu cầu cơ bản, không phải hạng mục chi tiêu',
            'Có ít nhất 2 phương án xây lại từ nhu cầu',
            'Tôn trọng ràng buộc văn hoá/gia đình (hàng rào Chesterton)'
        ]
    },
    {
        id: 'ex-toc-bakery',
        title: 'Tìm nút thắt: tiệm bánh online',
        concepts: ['constraints', 'pdca'],
        level: 'intermediate',
        time: '15 phút',
        task: `
            <p>Tiệm bánh online có quy trình mỗi ngày (năng lực tối đa):</p>
            <ul>
                <li>Nhận đơn qua fanpage: 200 đơn</li>
                <li>Nướng bánh: 1 lò, 120 đơn</li>
                <li>Trang trí: 2 người, 150 đơn</li>
                <li>Đóng gói: 180 đơn</li>
                <li>Giao hàng: đối tác, không giới hạn</li>
            </ul>
            <p>Chủ tiệm định chi 30 triệu chạy quảng cáo để tăng đơn lên 250/ngày.</p>
            <p><strong>Yêu cầu:</strong> (1) Nút thắt ở đâu, đầu ra thực tế là bao nhiêu? (2) Quảng cáo có giúp tăng doanh thu không? (3) Đề xuất hành động theo 5 bước tập trung. (4) Sau khi giải, nút thắt tiếp theo có thể là gì?</p>
        `,
        hints: [
            'Đầu ra = năng lực của khâu chậm nhất.',
            'Khai thác trước khi đầu tư: lò có đang chạy 100% thời gian không? Có thể nướng ca đêm, nướng sẵn đế bánh?',
            'Sau khi lò tăng lên, so sánh các khâu còn lại.'
        ],
        sample: `
            <p><strong>(1)</strong> Nút thắt: <strong>nướng bánh (120 đơn)</strong>. Đầu ra thực tế tối đa 120 đơn/ngày.</p>
            <p><strong>(2)</strong> Không. Hiện nhận được 200 đơn mà chỉ làm được 120 → quảng cáo thêm chỉ làm tăng đơn phải từ chối/trễ, gây review xấu.</p>
            <p><strong>(3)</strong></p>
            <ul>
                <li><strong>Xác định:</strong> lò nướng.</li>
                <li><strong>Khai thác:</strong> lò chạy liên tục (thêm ca sáng sớm), chuẩn bị bột trước để lò không phải chờ, nướng sẵn đế bánh phổ biến.</li>
                <li><strong>Đồng bộ:</strong> chỉ nhận số đơn lò làm được, đặt lịch giao trước 1–2 ngày để làm đều tải.</li>
                <li><strong>Nâng cấp:</strong> dùng 30 triệu mua lò thứ hai thay vì chạy quảng cáo → năng lực nướng lên ~240.</li>
                <li><strong>Lặp lại:</strong> xác định nút thắt mới.</li>
            </ul>
            <p><strong>(4)</strong> Khi lò đạt ~240, nút thắt chuyển sang <strong>trang trí (150)</strong>, sau đó là đóng gói (180). Lúc đó mới cân nhắc thêm người trang trí — và chỉ khi các khâu đều trên 200 mới nên chạy quảng cáo.</p>
        `,
        rubric: [
            'Xác định đúng nút thắt (nướng) và đầu ra 120',
            'Giải thích vì sao quảng cáo chưa giúp ích',
            'Có bước khai thác trước khi đầu tư',
            'Dự đoán đúng nút thắt tiếp theo (trang trí)'
        ]
    },
    {
        id: 'ex-hypothesis-trial',
        title: 'Cây giả thuyết: trial không chuyển sang trả phí',
        concepts: ['hypothesis-driven', 'issue-tree', 'confirmation-bias'],
        level: 'advanced',
        time: '20 phút',
        task: `
            <p>Một phần mềm SaaS cho dùng thử 14 ngày. Tỷ lệ chuyển từ dùng thử sang trả phí giảm từ 12% xuống 7% trong 3 tháng qua.</p>
            <p><strong>Yêu cầu:</strong> (1) Đưa ra giả thuyết "ngày đầu" của bạn. (2) Viết 3 điều kiện "để giả thuyết đúng thì phải đúng". (3) Với mỗi điều kiện: dữ liệu nào xác nhận, dữ liệu nào bác bỏ. (4) Nêu 1 giả thuyết cạnh tranh và cách phân biệt hai giả thuyết.</p>
        `,
        hints: [
            'Giả thuyết cụ thể: "…vì người dùng thử không hoàn thành bước thiết lập X trong 3 ngày đầu" hoặc "…vì thay đổi bảng giá tháng Y".',
            'Điều gì đã thay đổi 3 tháng trước? (bảng giá, onboarding, nguồn khách, đối thủ)',
            'Viết trước ngưỡng: "nếu chênh lệch dưới 2 điểm % thì coi như bác bỏ".'
        ],
        sample: `
            <p><strong>Giả thuyết ngày đầu:</strong> Tỷ lệ chuyển đổi giảm vì <em>nguồn người dùng thử thay đổi</em> — chiến dịch quảng cáo mới mang về nhiều người dùng không đúng đối tượng.</p>
            <p><strong>Để đúng, cần:</strong></p>
            <ol>
                <li>Tỷ trọng người dùng thử từ kênh quảng cáo mới tăng mạnh trong 3 tháng. <br><em>Xác nhận:</em> tỷ trọng tăng từ 20% lên 50%. <em>Bác bỏ:</em> tỷ trọng gần như không đổi.</li>
                <li>Người từ kênh mới có tỷ lệ chuyển đổi thấp hơn hẳn. <br><em>Xác nhận:</em> kênh mới dưới 4%, kênh cũ vẫn khoảng 12%. <em>Bác bỏ:</em> mọi kênh đều giảm như nhau.</li>
                <li>Loại bỏ kênh mới thì tỷ lệ chuyển đổi quay về gần 12%. <br><em>Xác nhận:</em> tính lại trên nhóm kênh cũ ≈ 11–12%. <em>Bác bỏ:</em> nhóm kênh cũ cũng chỉ 7–8%.</li>
            </ol>
            <p><strong>Giả thuyết cạnh tranh:</strong> luồng onboarding mới (ra mắt cùng thời điểm) khiến người dùng không đạt được "khoảnh khắc giá trị" đầu tiên. <br><strong>Phân biệt:</strong> nếu tỷ lệ giảm ở <em>mọi kênh</em>, và người dùng trải qua onboarding mới có tỷ lệ hoàn thành bước thiết lập thấp hơn → nghiêng về giả thuyết onboarding. Nếu chỉ kênh mới giảm → nghiêng về giả thuyết nguồn khách.</p>
        `,
        rubric: [
            'Giả thuyết cụ thể, bác bỏ được',
            'Có 3 điều kiện "phải đúng" logic',
            'Mỗi điều kiện có dữ liệu xác nhận và dữ liệu bác bỏ',
            'Có giả thuyết cạnh tranh',
            'Có cách phân biệt hai giả thuyết bằng dữ liệu'
        ]
    },
    {
        id: 'ex-cynefin-classify',
        title: 'Phân loại 6 tình huống theo Cynefin',
        concepts: ['cynefin'],
        level: 'advanced',
        time: '10 phút',
        task: `
            <p>Xếp mỗi tình huống vào vùng Cynefin (Rõ ràng / Phức tạp / Phức hợp / Hỗn loạn) và nêu cách tiếp cận:</p>
            <ol>
                <li>Khách hàng yêu cầu đổi hàng trong 7 ngày theo chính sách.</li>
                <li>Cháy kho hàng lúc nửa đêm.</li>
                <li>Hệ thống chạy chậm khi có trên 10.000 người dùng đồng thời.</li>
                <li>Ra mắt sản phẩm ở một quốc gia mới hoàn toàn.</li>
                <li>Sáp nhập văn hoá của hai công ty sau khi M&A.</li>
                <li>Tính thuế thu nhập cá nhân cho nhân viên theo luật hiện hành.</li>
            </ol>
        `,
        hints: [
            'Hỏi: nhân–quả có rõ với mọi người không? Chuyên gia có thể phân tích ra đáp án trước không? Hay chỉ thử mới biết?',
            'Tình huống nào cần hành động ngay trước khi hiểu?'
        ],
        sample: `
            <ol>
                <li><strong>Rõ ràng</strong> — làm theo chính sách (nhận biết → phân loại → xử lý).</li>
                <li><strong>Hỗn loạn</strong> — hành động ngay: gọi cứu hoả, sơ tán, cô lập khu vực; phân tích nguyên nhân sau.</li>
                <li><strong>Phức tạp</strong> — kỹ sư profile, đo đạc, phân tích bottleneck rồi tối ưu.</li>
                <li><strong>Phức hợp</strong> — thử nghiệm nhỏ ở vài thành phố/phân khúc, học và khuếch đại cái hiệu quả.</li>
                <li><strong>Phức hợp</strong> — con người tương tác và thích nghi; thử các sáng kiến nhỏ, lắng nghe phản hồi, điều chỉnh liên tục.</li>
                <li><strong>Rõ ràng</strong> (hoặc Phức tạp với trường hợp đặc biệt) — áp dụng quy định, dùng phần mềm tính thuế; hỏi chuyên gia thuế khi có thu nhập phức tạp.</li>
            </ol>
        `,
        rubric: [
            'Phân loại đúng ít nhất 5/6 tình huống',
            'Nhận ra tình huống hỗn loạn cần hành động trước',
            'Phân biệt được Phức tạp và Phức hợp',
            'Nêu đúng cách tiếp cận cho từng vùng'
        ]
    },
    {
        id: 'ex-sunk-cost-course',
        title: 'Gỡ bẫy chi phí chìm',
        concepts: ['sunk-cost', 'decision-matrix'],
        level: 'intermediate',
        time: '10 phút',
        task: `
            <p>Minh đã học 2 năm ngành Kế toán (đã tốn khoảng 80 triệu học phí và 2 năm thời gian). Minh nhận ra mình không thích và không giỏi kế toán, nhưng rất thích và có năng khiếu thiết kế đồ hoạ (đã làm freelance nhỏ, được khách khen). Minh nói: <strong>"Đã học 2 năm rồi, bỏ thì phí, cố thêm 2 năm cho xong."</strong></p>
            <p><strong>Yêu cầu:</strong> (1) Chỉ ra phần lập luận mắc bẫy chi phí chìm. (2) Viết lại câu hỏi quyết định theo hướng tương lai. (3) Đề xuất ít nhất 3 phương án (không chỉ "bỏ" hay "học tiếp") và một cách thử nhỏ, ít rủi ro.</p>
        `,
        hints: [
            '80 triệu và 2 năm đã qua có thay đổi được dù Minh chọn gì không?',
            'Câu hỏi làm lại từ đầu: "Nếu hôm nay mới bắt đầu, biết những gì đã biết, mình có chọn…?"',
            'Phương án kết hợp: học tiếp nhưng đồng thời…? Chuyển ngành có được bảo lưu tín chỉ không?'
        ],
        sample: `
            <p><strong>(1)</strong> "Đã học 2 năm, bỏ thì phí" — 80 triệu và 2 năm là <strong>chi phí chìm</strong>, không lấy lại được dù Minh học tiếp hay dừng. Học tiếp chỉ tốn thêm 2 năm và học phí nữa.</p>
            <p><strong>(2)</strong> "Từ hôm nay, trong 2 năm tới, con đường nào cho mình kỹ năng, thu nhập và sự hài lòng tốt hơn — và chi phí thêm của mỗi con đường là bao nhiêu?"</p>
            <p><strong>(3) Phương án:</strong></p>
            <ul>
                <li>Học tiếp kế toán (thêm 2 năm), sau đó chuyển sang thiết kế.</li>
                <li>Chuyển sang ngành thiết kế/truyền thông đa phương tiện, bảo lưu các tín chỉ đại cương đã học.</li>
                <li>Hoàn thành bằng kế toán theo lộ trình nhẹ hơn trong khi học thiết kế bài bản bên ngoài và nhận thêm dự án.</li>
                <li>Kết hợp: hướng tới thiết kế cho mảng tài chính (báo cáo, infographic dữ liệu) — tận dụng cả hai.</li>
            </ul>
            <p><strong>Thử nhỏ:</strong> trong 3 tháng tới, học một khoá thiết kế chuyên sâu và nhận 3 dự án có trả phí; đặt tiêu chí trước (ví dụ "thu nhập ≥ 5 triệu/tháng và vẫn thấy hứng thú") để quyết định chuyển ngành ở kỳ sau.</p>
        `,
        rubric: [
            'Chỉ đúng phần lập luận dựa trên chi phí chìm',
            'Câu hỏi mới hướng về tương lai, có chi phí thêm và lợi ích',
            'Có ít nhất 3 phương án, không chỉ nhị phân',
            'Có thử nghiệm nhỏ với tiêu chí quyết định viết trước'
        ]
    },
    {
        id: 'ex-xy-requests',
        title: 'Tìm X đằng sau Y',
        concepts: ['xy-problem', 'define-problem'],
        level: 'beginner',
        time: '10 phút',
        task: `
            <p>Với mỗi yêu cầu dưới đây, viết (a) câu hỏi bạn sẽ hỏi lại, (b) một mục tiêu thật (X) có thể có, (c) một giải pháp khác có thể tốt hơn yêu cầu ban đầu.</p>
            <ol>
                <li>Sếp: "Em thêm cột 'Ghi chú' vào tất cả các báo cáo nhé."</li>
                <li>Khách hàng: "Cho tôi tắt thông báo email của hệ thống."</li>
                <li>Đồng nghiệp: "Làm sao để in trang web này ra thành 50 file PDF?"</li>
            </ol>
        `,
        hints: [
            'Câu hỏi mở: "Anh/chị sẽ dùng nó để làm gì?", "Điều gì khiến anh/chị cần điều này?"',
            'Giải pháp khác có thể không cần làm đúng thứ được yêu cầu.'
        ],
        sample: `
            <ol>
                <li>(a) "Anh muốn ghi chú điều gì, và ai sẽ đọc?" (b) Sếp muốn biết lý do các số liệu bất thường mỗi tuần. (c) Thêm mục "Điểm bất thường & giải thích" ở đầu báo cáo tuần thay vì một cột ghi chú ở mọi báo cáo.</li>
                <li>(a) "Thông báo nào đang gây phiền cho anh/chị?" (b) Khách bị ngập email vì mỗi thay đổi nhỏ đều gửi một email. (c) Gộp thông báo thành bản tổng hợp hằng ngày và cho chọn loại thông báo muốn nhận — vẫn giữ các cảnh báo quan trọng.</li>
                <li>(a) "Bạn cần 50 file PDF để làm gì?" (b) Gửi tài liệu cho đối tác đọc offline. (c) Dùng chức năng xuất toàn bộ tài liệu thành một file, hoặc chia sẻ đường link có quyền xem offline.</li>
            </ol>
        `,
        rubric: [
            'Câu hỏi lại là câu hỏi mở về mục đích',
            'Mục tiêu X hợp lý, khác với yêu cầu Y',
            'Giải pháp thay thế đáp ứng X tốt hơn hoặc rẻ hơn Y'
        ]
    },
    {
        id: 'ex-archetype-support',
        title: 'Nhận diện mẫu hệ thống & điểm đòn bẩy',
        concepts: ['systems-thinking', 'symptom-fixing'],
        level: 'advanced',
        time: '15 phút',
        task: `
            <p>Đội IT nội bộ 5 người của một công ty 300 nhân viên. Mỗi khi phần mềm kế toán gặp lỗi, anh Hùng — người duy nhất hiểu hệ thống cũ — xử lý rất nhanh. Công ty đã 3 lần lên kế hoạch viết tài liệu và đào tạo người thứ hai, nhưng lần nào cũng bị hoãn vì "anh Hùng đang bận sửa lỗi". Số lỗi tăng dần mỗi quý. Anh Hùng bắt đầu kiệt sức.</p>
            <p><strong>Yêu cầu:</strong> (1) Xác định mẫu hệ thống. (2) Mô tả vòng giải pháp triệu chứng và vòng giải pháp gốc. (3) Đề xuất 2 điểm đòn bẩy, trong đó ít nhất 1 điểm ở tầng luật chơi/mục tiêu (không chỉ "thuê thêm người").</p>
        `,
        hints: [
            'Giải pháp triệu chứng: anh Hùng sửa nhanh. Giải pháp gốc: tài liệu, đào tạo, nâng cấp hệ thống.',
            'Giải pháp triệu chứng làm giảm áp lực phải làm giải pháp gốc — và năng lực giải pháp gốc teo dần.',
            'Đòn bẩy luật chơi: ví dụ quy định dành cố định thời gian cho việc chuyển giao, đo lường "số người xử lý được lỗi".'
        ],
        sample: `
            <p><strong>(1)</strong> Mẫu <strong>Chuyển gánh nặng</strong> (Shifting the Burden), kèm vòng tăng cường "người hùng kiệt sức".</p>
            <p><strong>(2)</strong></p>
            <ul>
                <li><strong>Vòng triệu chứng (B):</strong> lỗi → anh Hùng sửa → lỗi được xử lý → áp lực giảm. Chạy nhanh, hiệu quả trước mắt.</li>
                <li><strong>Vòng gốc (B, có độ trễ):</strong> lỗi → viết tài liệu, đào tạo, nâng cấp → nhiều người xử lý được, ít lỗi hơn. Chậm, cần đầu tư trước.</li>
                <li><strong>Tác dụng phụ:</strong> càng dựa vào anh Hùng → càng không có thời gian đào tạo → càng phụ thuộc anh Hùng; đồng thời anh kiệt sức → rủi ro nghỉ việc (khi đó hệ thống rơi vào khủng hoảng).</li>
            </ul>
            <p><strong>(3) Điểm đòn bẩy:</strong></p>
            <ul>
                <li><strong>Luật chơi:</strong> dành cứng 1 ngày/tuần của anh Hùng cho chuyển giao; lỗi không khẩn cấp trong ngày đó do người thứ hai xử lý với anh Hùng hướng dẫn — kể cả khi chậm hơn.</li>
                <li><strong>Mục tiêu/thông tin:</strong> thêm chỉ số "số người có thể xử lý lỗi cấp 1" vào mục tiêu quý của đội IT, báo cáo lên ban giám đốc cùng với chỉ số rủi ro phụ thuộc vào một người.</li>
            </ul>
        `,
        rubric: [
            'Nhận diện đúng mẫu Chuyển gánh nặng',
            'Mô tả được cả vòng triệu chứng và vòng gốc',
            'Nêu tác dụng phụ làm teo năng lực giải pháp gốc',
            'Có đòn bẩy ở tầng luật chơi hoặc mục tiêu, không chỉ tham số'
        ]
    },
    {
        id: 'ex-pdca-routine',
        title: 'Thiết kế một vòng PDCA cho bản thân',
        concepts: ['pdca', 'hypothesis-driven'],
        level: 'beginner',
        time: '10 phút',
        task: `
            <p>Chọn một thói quen bạn muốn cải thiện (ngủ sớm hơn, giảm thời gian lướt điện thoại, tập thể dục đều…). Thiết kế một vòng PDCA 2 tuần: mục tiêu đo được, giả thuyết, thử nghiệm cụ thể, cách đo, và tiêu chí quyết định ở bước Act.</p>
        `,
        hints: [
            'Giả thuyết dạng: "Nếu tôi làm X thì chỉ số Y sẽ thay đổi từ A thành B."',
            'Chỉ thay đổi MỘT biến mỗi vòng để biết cái gì tạo ra kết quả.',
            'Tiêu chí Act viết trước: đạt bao nhiêu thì giữ, dưới bao nhiêu thì đổi cách.'
        ],
        sample: `
            <ul>
                <li><strong>Vấn đề:</strong> thời gian dùng điện thoại trung bình 5 giờ/ngày (theo thống kê máy), mất ngủ vì lướt tới 1h sáng.</li>
                <li><strong>Plan:</strong> Giả thuyết: "Nếu để điện thoại sạc ngoài phòng ngủ từ 22h30, tôi sẽ ngủ trước 23h30 ít nhất 10/14 đêm và thời gian dùng giảm xuống dưới 3,5 giờ/ngày."</li>
                <li><strong>Do:</strong> 14 ngày, mua đồng hồ báo thức riêng; ghi giờ ngủ mỗi sáng.</li>
                <li><strong>Check:</strong> so số đêm ngủ trước 23h30 và thời gian dùng máy với dự đoán; ghi lại những đêm thất bại và lý do.</li>
                <li><strong>Act:</strong> ≥ 10 đêm → giữ thành thói quen, vòng tiếp theo nhắm vào buổi sáng. &lt; 10 đêm → xem lý do thất bại phổ biến (ví dụ cần điện thoại để nghe podcast) và điều chỉnh (dùng loa riêng).</li>
            </ul>
        `,
        rubric: [
            'Mục tiêu/chỉ số đo được',
            'Giả thuyết cụ thể dạng "nếu… thì…"',
            'Chỉ thay đổi một biến chính',
            'Có tiêu chí quyết định viết trước cho bước Act'
        ]
    },
    {
        id: 'ex-mindmap-trip',
        title: 'Mind map: tổ chức chuyến du lịch công ty',
        concepts: ['mind-mapping', 'divide-conquer'],
        level: 'beginner',
        time: '10 phút',
        task: `
            <p>Bạn được giao tổ chức <strong>chuyến du lịch 3 ngày 2 đêm cho 40 nhân viên</strong>, ngân sách 160 triệu, sau 6 tuần nữa.</p>
            <p><strong>Yêu cầu:</strong> (1) Vẽ mind map (có thể viết dạng danh sách lồng nhau) với 5–7 nhánh chính, mỗi nhánh 2–3 nhánh con, mỗi nhánh chỉ dùng từ khoá. (2) Tìm ít nhất 2 liên kết chéo giữa các nhánh. (3) Đánh dấu 3 việc cần làm ngay trong tuần này.</p>
        `,
        hints: [
            'Nhánh chính gợi ý: Điểm đến, Di chuyển, Lưu trú, Ăn uống, Hoạt động, Ngân sách, Con người/An toàn.',
            'Liên kết chéo: quyết định ở nhánh này ảnh hưởng nhánh khác — ví dụ điểm đến quyết định phương tiện và chi phí.',
            'Việc cần làm ngay thường là những việc chặn các việc khác (phải có trước thì mới làm tiếp được).'
        ],
        sample: `
            <ul class="tree">
                <li>📍 Điểm đến <ul><li>Biển gần (≤ 4h xe)</li><li>Khảo sát sở thích</li></ul></li>
                <li>🚌 Di chuyển <ul><li>Xe 45 chỗ</li><li>Giờ xuất phát</li></ul></li>
                <li>🏨 Lưu trú <ul><li>Resort có hội trường</li><li>Phòng đôi / phòng gia đình</li></ul></li>
                <li>🍽️ Ăn uống <ul><li>Gala dinner</li><li>Người ăn chay, dị ứng</li></ul></li>
                <li>🎯 Hoạt động <ul><li>Team building</li><li>Thời gian tự do</li></ul></li>
                <li>💰 Ngân sách <ul><li>4 triệu/người</li><li>Dự phòng 10%</li></ul></li>
                <li>🩺 An toàn <ul><li>Bảo hiểm du lịch</li><li>Danh sách liên hệ khẩn cấp</li></ul></li>
            </ul>
            <p><strong>Liên kết chéo:</strong> Điểm đến ↔ Di chuyển ↔ Ngân sách (đi xa hơn → chi phí xe và thời gian tăng); Lưu trú ↔ Hoạt động (resort có hội trường mới làm được team building khi trời mưa).</p>
            <p><strong>3 việc làm ngay:</strong> khảo sát sở thích và ngày thuận tiện · chốt điểm đến trong ngân sách · đặt cọc resort (mùa cao điểm dễ hết phòng).</p>
        `,
        rubric: [
            'Có 5–7 nhánh chính bao quát các mảng quan trọng',
            'Nhánh dùng từ khoá ngắn, không phải câu dài',
            'Có ít nhất 2 liên kết chéo hợp lý',
            '3 việc làm ngay là những việc "chặn" các việc khác'
        ]
    },
    {
        id: 'ex-analogy-canteen',
        title: 'Loại suy: căng tin giờ trưa quá tải',
        concepts: ['analogy', 'abstraction'],
        level: 'intermediate',
        time: '15 phút',
        task: `
            <p>Căng tin một nhà máy 600 người: từ 12h00 đến 12h30, hàng người xếp dài, mỗi người chờ khoảng 20 phút; nhiều người bỏ ra ngoài ăn và vào ca muộn.</p>
            <p><strong>Yêu cầu:</strong> (1) Trừu tượng hoá cấu trúc của vấn đề thành một câu. (2) Tìm ít nhất 3 lĩnh vực khác đã giải bài toán có cấu trúc tương tự và ánh xạ lời giải của họ về căng tin. (3) Chỉ ra ít nhất 2 điểm khác biệt quan trọng khiến lời giải phải điều chỉnh.</p>
        `,
        hints: [
            'Cấu trúc: rất nhiều người cần được phục vụ trong một khung thời gian ngắn, qua một điểm phục vụ duy nhất.',
            'Nơi nào khác cũng đông đúc theo đợt? Sân bay, công viên giải trí, đường cao tốc, nhà hàng buffet, ngân hàng…',
            'Khác biệt: đồ ăn cần nóng, bữa trưa còn là thời gian giao lưu, giờ nghỉ do ca làm quy định.'
        ],
        sample: `
            <p><strong>(1) Cấu trúc:</strong> Nhiều người cùng đến một điểm phục vụ duy nhất trong khung giờ ngắn → đỉnh tải vượt năng lực phục vụ.</p>
            <p><strong>(2) Loại suy và ánh xạ:</strong></p>
            <table>
                <tr><th>Lĩnh vực</th><th>Lời giải của họ</th><th>Áp dụng cho căng tin</th></tr>
                <tr><td>Sân bay</td><td>Check-in online trước, quầy chỉ để gửi hành lý</td><td>Đặt món trước qua app/phiếu, đến chỉ nhận khay</td></tr>
                <tr><td>Nhà hàng buffet</td><td>Nhiều trạm song song thay vì một hàng</td><td>Chia 3 quầy: cơm, món nước, suất đóng hộp</td></tr>
                <tr><td>Công viên giải trí</td><td>Vé giờ hẹn (xếp hàng ảo)</td><td>Giờ ăn lệch theo phân xưởng: 11h45 / 12h00 / 12h15</td></tr>
                <tr><td>Đường cao tốc</td><td>Làn thu phí tự động không dừng</td><td>Làn nhanh cho suất cố định, thanh toán bằng thẻ nhân viên</td></tr>
            </table>
            <p><strong>(3) Khác biệt cần điều chỉnh:</strong> đồ ăn phải còn nóng → đặt trước chỉ nên chốt trước 30–60 phút; bữa trưa là lúc giao lưu → giờ lệch nên theo nhóm làm việc cùng nhau; giờ nghỉ gắn với ca và dây chuyền → cần thống nhất với quản đốc trước khi đổi.</p>
        `,
        rubric: [
            'Câu mô tả cấu trúc bỏ được chi tiết bề mặt (không nhắc "căng tin")',
            'Có ít nhất 3 lĩnh vực khác nhau',
            'Mỗi loại suy có ánh xạ cụ thể về căng tin',
            'Chỉ ra ít nhất 2 khác biệt then chốt và cách điều chỉnh'
        ]
    },
    {
        id: 'ex-mental-set-uses',
        title: 'Phá lối mòn: công dụng mới cho thứ quen thuộc',
        concepts: ['mental-set', 'scamper'],
        level: 'intermediate',
        time: '15 phút',
        task: `
            <p><strong>Phần A:</strong> Dùng kỹ thuật "bộ phận chung": mô tả một <strong>chai nhựa 1,5 lít</strong> theo từng bộ phận, chất liệu và hình dạng (không nhắc công dụng). Từ đó liệt kê ít nhất 8 công dụng khác ngoài "đựng nước uống".</p>
            <p><strong>Phần B:</strong> Áp dụng cho công việc: công ty có một <strong>phòng họp lớn gần như bỏ trống sau 17h</strong> và một kho <strong>dữ liệu phản hồi khách hàng 3 năm</strong> chưa ai phân tích. Đề xuất ít nhất 2 cách dùng mới cho mỗi tài nguyên.</p>
        `,
        hints: [
            'Chai gồm: thân nhựa trong, mỏng, dẻo, hình trụ · nắp vặn nhỏ, kín · đáy có gờ · có thể cắt được.',
            'Với từng thuộc tính, hỏi: "thuộc tính này hữu ích cho việc gì?" — trong suốt, kín nước, nổi, cắt được…',
            'Phần B: tài nguyên "chỉ dùng để họp" hay "chỉ để lưu trữ" — hãy mô tả chúng theo thuộc tính (không gian rộng có máy chiếu, văn bản thật của khách hàng).'
        ],
        sample: `
            <p><strong>Phần A — mô tả theo bộ phận:</strong> thân nhựa trong suốt, mỏng, dẻo, hình trụ, nổi trên nước · nắp vặn kín, nhỏ · đáy cứng có gờ · cắt được bằng kéo.</p>
            <p><strong>Công dụng mới:</strong> chậu trồng rau (cắt ngang) · phễu (nửa trên) · hệ thống tưới nhỏ giọt (đục lỗ nắp) · phao cứu sinh tạm (nhiều chai kín buộc lại) · đèn khuếch tán ánh sáng (chai nước + đèn pin) · hộp đựng bút · bẫy côn trùng · xẻng xúc đất (cắt chéo) · tạ tập tay (đổ đầy cát).</p>
            <p><strong>Phần B:</strong></p>
            <ul>
                <li><strong>Phòng họp sau 17h:</strong> lớp học nội bộ/chia sẻ kiến thức buổi tối; cho câu lạc bộ nhân viên (yoga, tiếng Anh) mượn; cho các nhóm khởi nghiệp đối tác thuê theo giờ.</li>
                <li><strong>Dữ liệu phản hồi 3 năm:</strong> phân tích Pareto các phàn nàn lặp lại để ưu tiên cải tiến sản phẩm; tạo bộ tình huống thật để đào tạo nhân viên CS mới; tìm "điểm sáng" — khách hài lòng nhất nói gì — làm thông điệp marketing.</li>
            </ul>
        `,
        rubric: [
            'Phần A mô tả theo chất liệu, hình dạng, không nhắc công dụng',
            'Có ít nhất 8 công dụng mới, phần lớn xuất phát từ thuộc tính đã mô tả',
            'Phần B có ít nhất 2 cách dùng mới cho mỗi tài nguyên',
            'Ít nhất một ý tưởng vượt ra ngoài công dụng "hiển nhiên"'
        ]
    }
];
