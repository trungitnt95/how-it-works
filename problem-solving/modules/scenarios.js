// Problem Solving - Tình huống nhiều bước (case study)
// Mỗi bước: chọn 1 phương án → nhận phản hồi. Điểm: 2 = tối ưu, 1 = tạm được, 0 = chưa tốt.
// Các bước đi tuần tự; bối cảnh của bước sau giả định bạn đã đi theo hướng tốt nhất ở bước trước.
// Schema: { id, title, icon, domain, level, tools: [concept id], situation (HTML),
//           steps: [{ title, context?, question, options: [{ text, score, feedback }] }], debrief (HTML), lessons: [] }
const psCaseStudies = [
    {
        id: 'case-team-productivity',
        title: 'Năng suất đội giảm 30%',
        icon: '📉',
        domain: 'Công việc',
        level: 'beginner',
        tools: ['ps-process', 'define-problem', 'fishbone', '5-whys', 'pdca', 'jumping-solutions'],
        situation: `
            <p>Bạn là trưởng nhóm của một đội phát triển phần mềm 6 người. Ba tháng gần đây, số task hoàn thành mỗi sprint giảm từ khoảng 40 xuống 28. Ba bản phát hành liên tiếp bị trễ. Sếp yêu cầu bạn trình kế hoạch trong 2 tuần.</p>
        `,
        steps: [
            {
                title: 'Định nghĩa vấn đề',
                question: 'Việc đầu tiên bạn làm là gì?',
                options: [
                    { text: 'Yêu cầu cả đội tăng ca 2 tuần để bắt kịp tiến độ', score: 0, feedback: 'Tăng ca xử lý triệu chứng và thường làm vấn đề nặng thêm: mệt mỏi → nhiều lỗi → càng chậm. Bạn còn chưa biết vì sao năng suất giảm.' },
                    { text: 'Thu thập dữ liệu (task theo loại, thời gian cho từng loại việc, điều gì thay đổi trong 3 tháng) và viết problem statement có số liệu', score: 2, feedback: 'Chính xác. Hiểu rõ vấn đề bằng dữ liệu trước khi bàn giải pháp — "velocity giảm 30% từ tháng 6, 3 bản phát hành trễ trung bình 9 ngày".' },
                    { text: 'Đề xuất tuyển thêm 2 lập trình viên', score: 0, feedback: 'Giải pháp trước khi hiểu vấn đề. Thêm người vào dự án đang trễ còn có thể làm chậm thêm vì tốn công hướng dẫn người mới (định luật Brooks).' },
                    { text: 'Họp cả đội và hỏi: "Tại sao các bạn làm chậm vậy?"', score: 1, feedback: 'Hỏi đội là đúng hướng — họ có thông tin. Nhưng câu hỏi quy lỗi cho cá nhân sẽ khiến mọi người phòng thủ. Hỏi về quy trình và dữ liệu: "Điều gì đang lấy thời gian của chúng ta?"' }
                ]
            },
            {
                title: 'Chẩn đoán nguyên nhân',
                context: `<p><strong>Dữ liệu thu được:</strong> thời gian sửa bug tăng từ 15% lên 35% tổng thời gian · giờ họp tăng từ 5 lên 11 giờ/người/tuần · 2 thành viên chủ chốt phải hỗ trợ dự án khác 50% thời gian · số yêu cầu thay đổi giữa sprint tăng gấp 3.</p>`,
                question: 'Bước chẩn đoán tiếp theo phù hợp nhất?',
                options: [
                    { text: 'Kết luận nguyên nhân là 2 người bị điều đi, xin sếp trả họ về', score: 1, feedback: 'Có thể là một nguyên nhân thật, nhưng bạn đang chốt sớm một nhánh và bỏ qua dữ liệu về bug và họp — hai yếu tố cũng rất lớn.' },
                    { text: 'Vẽ Fishbone cùng đội (Con người, Quy trình, Công cụ, Yêu cầu), rồi dùng 5 Whys cho các nhánh có dữ liệu mạnh nhất', score: 2, feedback: 'Tốt. Fishbone cho độ rộng (không bỏ sót), 5 Whys cho độ sâu. Làm cùng đội giúp có thông tin thực tế và sự đồng thuận.' },
                    { text: 'Đo năng suất từng người để tìm ai đang làm chậm', score: 0, feedback: 'Biến chẩn đoán thành săn lỗi cá nhân — phá tâm lý an toàn, mọi người sẽ giấu vấn đề. Dữ liệu đã chỉ ra nguyên nhân mang tính hệ thống.' },
                    { text: 'Chuyển sang công cụ quản lý task mới', score: 0, feedback: 'Bẫy "cái búa": dữ liệu không cho thấy công cụ là vấn đề.' }
                ]
            },
            {
                title: 'Chọn giải pháp',
                context: `<p><strong>Kết quả phân tích:</strong> bug tăng vì khi gấp, đội bỏ qua code review (gốc: không có "Definition of Done" bắt buộc) · họp tăng vì mỗi bên liên quan tự đặt họp riêng · thay đổi giữa sprint vì không có người gác cổng ưu tiên.</p>`,
                question: 'Bộ giải pháp nào tốt nhất?',
                options: [
                    { text: 'Yêu cầu mọi người cẩn thận hơn khi code', score: 0, feedback: 'Biện pháp yếu nhất: phụ thuộc vào trí nhớ và thiện chí, không thay đổi hệ thống.' },
                    { text: 'Definition of Done bắt buộc review + test; gom họp vào 2 khung giờ cố định; Product Owner là cửa duy nhất nhận thay đổi giữa sprint', score: 2, feedback: 'Mỗi biện pháp nhắm đúng một nguyên nhân gốc và thay đổi cấu trúc (quy tắc, quy trình), không chỉ kêu gọi.' },
                    { text: 'Cấm hoàn toàn họp trong 1 tháng', score: 1, feedback: 'Giảm họp là đúng hướng nhưng cực đoan — mất phối hợp cần thiết, và chưa xử lý bug hay thay đổi giữa sprint.' },
                    { text: 'Tổ chức tăng ca cuối tuần để trả nợ bug', score: 0, feedback: 'Mẫu "giải pháp phản tác dụng": giảm triệu chứng ngắn hạn, không ngăn bug mới phát sinh, làm đội kiệt sức.' }
                ]
            },
            {
                title: 'Triển khai & rút kinh nghiệm',
                question: 'Bạn triển khai bộ giải pháp thế nào?',
                options: [
                    { text: 'Áp dụng ngay cho toàn bộ phòng 30 người', score: 1, feedback: 'Có thể hiệu quả, nhưng rủi ro: nếu có biện pháp sai, cả phòng chịu ảnh hưởng và khó biết biện pháp nào tạo ra kết quả.' },
                    { text: 'Thử 2 sprint trong đội, viết dự đoán trước (bug < 20% thời gian, họp < 6 giờ/tuần, velocity > 35), review kết quả rồi chuẩn hoá', score: 2, feedback: 'Đúng tinh thần PDCA: thử nhỏ, có dự đoán đo được, kiểm tra, rồi mới chuẩn hoá và mở rộng.' },
                    { text: 'Triển khai và không cần đo vì chắc chắn hiệu quả', score: 0, feedback: 'Không đo thì không biết giải pháp thật sự hiệu quả hay chỉ là may mắn — và không phát hiện được tác dụng phụ.' }
                ]
            }
        ],
        debrief: `
            <p>Năng suất giảm hiếm khi do "mọi người lười". Trong tình huống này, ba nguyên nhân hệ thống (bỏ review khi gấp, họp phân tán, thiếu người gác cổng ưu tiên) cùng lúc ăn mòn thời gian của đội. Các giải pháp "hiển nhiên" — tăng ca, tuyển thêm người — đều không chạm vào chúng.</p>
        `,
        lessons: [
            'Định nghĩa vấn đề bằng dữ liệu trước khi bàn giải pháp',
            'Tìm nguyên nhân ở quy trình, không săn lỗi cá nhân',
            'Biện pháp mạnh thay đổi cấu trúc (quy tắc, quy trình), không chỉ kêu gọi',
            'Thử nhỏ, đo lường, rồi mới chuẩn hoá'
        ]
    },
    {
        id: 'case-complaints',
        title: 'Khiếu nại khách hàng tăng 200%',
        icon: '📞',
        domain: 'Kinh doanh',
        level: 'beginner',
        tools: ['ps-process', 'root-cause', 'pareto', 'symptom-fixing', 'second-order'],
        situation: `
            <p>Bạn là trưởng bộ phận vận hành của một shop online. Khiếu nại tháng này tăng từ 150 lên 450. Đội chăm sóc khách hàng (CS) 5 người quá tải: thời gian phản hồi tăng từ 2 giờ lên 26 giờ. Điểm đánh giá trên sàn giảm từ 4,8 xuống 4,3.</p>
        `,
        steps: [
            {
                title: 'Khống chế',
                question: 'Trong 48 giờ đầu, bạn làm gì?',
                options: [
                    { text: 'Tập trung phân tích nguyên nhân, để đội CS tự xoay xở', score: 1, feedback: 'Phân tích là cần, nhưng trong lúc đó khách vẫn chờ 26 giờ và điểm đánh giá tiếp tục giảm. Cần khống chế song song.' },
                    { text: 'Khống chế: tạm mượn người hỗ trợ CS, soạn câu trả lời mẫu cho câu hỏi phổ biến, ưu tiên ca nghiêm trọng — song song bắt đầu phân loại khiếu nại', score: 2, feedback: 'Đúng: biện pháp tạm thời để chặn thiệt hại, đồng thời khởi động việc tìm nguyên nhân gốc.' },
                    { text: 'Tuyển ngay 5 nhân viên CS mới', score: 0, feedback: 'Tuyển và đào tạo mất nhiều tuần — không kịp khống chế. Và có thể không cần nữa khi nguyên nhân gốc được xử lý.' },
                    { text: 'Tạm tắt chat trên sàn để giảm tải', score: 0, feedback: 'Khách không liên hệ được sẽ bực hơn, để lại đánh giá xấu hơn. Đây là che giấu triệu chứng.' }
                ]
            },
            {
                title: 'Phân tích Pareto',
                context: `<p><strong>Phân loại 450 khiếu nại:</strong> Giao trễ 190 · Hỏi tình trạng đơn 110 · Giao sai hàng 70 · Hàng lỗi 40 · Khác 40.</p>`,
                question: 'Nhận định nào đúng nhất?',
                options: [
                    { text: 'Mỗi loại đều quan trọng, nên phân bổ nguồn lực đều cho cả 5 loại', score: 0, feedback: 'Dàn trải khiến không giải quyết dứt điểm được loại nào. Dữ liệu cho thấy phân bố rất lệch.' },
                    { text: 'Giao trễ + hỏi tình trạng đơn chiếm ~67% và có thể cùng một gốc (giao trễ → khách hỏi) — tập trung vào đó trước', score: 2, feedback: 'Pareto + nhận ra mối liên hệ giữa hai nhóm: khách hỏi tình trạng đơn chủ yếu vì đơn đến trễ và không được cập nhật.' },
                    { text: 'Tập trung vào giao sai hàng vì nghiêm trọng nhất với khách', score: 1, feedback: 'Giao sai hàng nghiêm trọng thật và cần theo dõi, nhưng tập trung vào nó trước bỏ qua 2/3 khối lượng khiếu nại.' }
                ]
            },
            {
                title: 'Tìm nguyên nhân gốc',
                context: `<p><strong>Điều tra thêm:</strong> giao trễ bắt đầu từ ngày chuyển sang đơn vị vận chuyển mới (rẻ hơn 15%). Đơn vị mới chỉ lấy hàng 1 lần/ngày thay vì 2. Hệ thống không tự gửi mã vận đơn và trạng thái cho khách.</p>`,
                question: 'Biện pháp gốc hợp lý nhất?',
                options: [
                    { text: 'Xin lỗi khách và tặng voucher', score: 1, feedback: 'Cần làm để giữ khách — nhưng đây là xử lý hậu quả, không ngăn giao trễ tái diễn.' },
                    { text: 'Đàm phán lấy hàng 2 lần/ngày hoặc chia đơn cho 2 đơn vị theo khu vực; tích hợp gửi mã vận đơn + trạng thái tự động cho khách', score: 2, feedback: 'Xử lý cả hai gốc: năng lực lấy hàng và thiếu thông tin cho khách — nhóm "hỏi tình trạng đơn" sẽ giảm mạnh.' },
                    { text: 'Quay lại đơn vị vận chuyển cũ bất kể chi phí', score: 1, feedback: 'Có thể là phương án đúng, nhưng chưa cân nhắc các lựa chọn cân bằng chi phí – chất lượng, và vẫn chưa xử lý việc khách không được cập nhật trạng thái.' },
                    { text: 'Đào tạo CS trả lời nhanh hơn', score: 0, feedback: 'Chữa triệu chứng — số khiếu nại không giảm, chỉ xử lý nhanh hơn một chút.' }
                ]
            },
            {
                title: 'Đo lường & phòng ngừa',
                question: 'Làm sao biết vấn đề đã được giải quyết, và không tái diễn?',
                options: [
                    { text: 'Khi đội CS thấy bớt bận', score: 1, feedback: 'Cảm nhận là một tín hiệu, nhưng không đủ để biết từng loại khiếu nại đã giảm bao nhiêu.' },
                    { text: 'Theo dõi hằng tuần: khiếu nại theo loại, tỷ lệ giao đúng hạn, thời gian phản hồi, điểm đánh giá — so với mốc trước sự cố; thêm quy trình thử nghiệm và ngưỡng cảnh báo khi đổi đối tác', score: 2, feedback: 'Có chỉ số cụ thể để kiểm chứng, và một biện pháp phòng ngừa cho lần đổi nhà cung cấp tiếp theo.' },
                    { text: 'Hỏi ý kiến sếp xem đã ổn chưa', score: 0, feedback: 'Không có cơ sở đo lường khách quan.' }
                ]
            }
        ],
        debrief: `
            <p>Đổi sang đơn vị vận chuyển rẻ hơn 15% là quyết định "tốt" ở bậc một. Hậu quả bậc hai — khiếu nại, chi phí CS, điểm đánh giá, khách rời đi — có thể đắt hơn nhiều so với khoản tiết kiệm. Pareto giúp thấy ngay vài nhóm khiếu nại lớn nhất, và điều tra theo thời gian (khiếu nại bắt đầu tăng khi nào?) chỉ thẳng tới thay đổi gây ra vấn đề.</p>
        `,
        lessons: [
            'Khống chế thiệt hại song song với phân tích',
            'Dùng Pareto để tập trung, và tìm liên hệ giữa các nhóm',
            'Hỏi "điều gì đã thay đổi đúng lúc vấn đề bắt đầu?"',
            'Tính hậu quả bậc hai của các quyết định cắt giảm chi phí'
        ]
    },
    {
        id: 'case-slow-website',
        title: 'Website chậm 8 giây',
        icon: '🐢',
        domain: 'Kỹ thuật',
        level: 'intermediate',
        tools: ['divide-conquer', 'constraints', 'pareto', 'hammer-nail', 'occams-razor'],
        situation: `
            <p>Bạn là tech lead. Trang sản phẩm mất 8 giây để tải (mục tiêu dưới 2 giây). Tỷ lệ chuyển đổi giảm 20% trong 2 tháng. CEO đề nghị: "Mua server mạnh gấp đôi đi."</p>
        `,
        steps: [
            {
                title: 'Phản hồi đề nghị',
                question: 'Bạn phản hồi đề nghị của CEO thế nào?',
                options: [
                    { text: 'Mua ngay vì CEO yêu cầu', score: 0, feedback: 'Có thể tốn tiền mà không cải thiện gì — chưa ai biết server có phải là nút thắt hay không.' },
                    { text: 'Xin 2–3 ngày để đo đạc: chưa biết thời gian tải bị mất ở đâu, server có thể không phải nút thắt', score: 2, feedback: 'Đo trước khi tối ưu. Nếu server không phải nút thắt, nâng cấp nó là "một giờ tiết kiệm ảo".' },
                    { text: 'Đề xuất viết lại toàn bộ bằng framework mới', score: 0, feedback: 'Bẫy "cái búa" và nhảy vào giải pháp — đắt, lâu, rủi ro, và có thể không giải quyết nguyên nhân thật.' },
                    { text: 'Đề nghị cả đội tối ưu code', score: 1, feedback: 'Hướng hợp lý hơn mua server, nhưng tối ưu chỗ nào? Không đo thì dễ tối ưu nhầm chỗ.' }
                ]
            },
            {
                title: 'Chẩn đoán',
                question: 'Bạn chẩn đoán thế nào?',
                options: [
                    { text: 'Chia đôi đường đi của request: đo frontend (tải tài nguyên, render) và backend (API, database); tiếp tục chia nhỏ phần chiếm nhiều thời gian nhất', score: 2, feedback: 'Divide & conquer có hệ thống: mỗi lần đo loại được một nửa không gian tìm kiếm.' },
                    { text: 'Đọc toàn bộ code để tìm chỗ chưa tối ưu', score: 0, feedback: 'Tốn rất nhiều thời gian và dễ tối ưu những chỗ không đáng kể.' },
                    { text: 'Hỏi cả đội ai nghĩ chỗ nào chậm rồi bỏ phiếu', score: 1, feedback: 'Kinh nghiệm của đội hữu ích để đặt giả thuyết, nhưng vẫn phải đo để kiểm chứng.' }
                ]
            },
            {
                title: 'Tối ưu gì trước?',
                context: `<p><strong>Kết quả đo:</strong> API backend 0,4 giây · tải ảnh sản phẩm 5,5 giây (ảnh gốc 4–6 MB, không nén) · JavaScript 1,5 giây · còn lại 0,6 giây.</p>`,
                question: 'Nên tối ưu phần nào trước?',
                options: [
                    { text: 'Tối ưu backend vì đó là thế mạnh của đội', score: 0, feedback: 'Backend chỉ chiếm 0,4/8 giây. Chọn việc theo sở trường thay vì theo dữ liệu là bẫy "cái búa".' },
                    { text: 'Nén và đổi định dạng ảnh, tải ảnh theo nhu cầu (lazy-load), dùng CDN — phần này chiếm ~70% thời gian', score: 2, feedback: 'Tấn công đúng nút thắt lớn nhất — Pareto và Theory of Constraints cùng chỉ về đây.' },
                    { text: 'Tối ưu JavaScript trước vì dễ làm', score: 1, feedback: 'Có ích (1,5 giây), nhưng chưa phải phần lớn nhất. Nên làm sau ảnh.' },
                    { text: 'Mua server gấp đôi', score: 0, feedback: 'Dữ liệu cho thấy server/backend không phải nút thắt.' }
                ]
            },
            {
                title: 'Sau lần tối ưu đầu tiên',
                context: `<p>Sau khi tối ưu ảnh: thời gian tải còn <strong>2,6 giây</strong>.</p>`,
                question: 'Bước tiếp theo?',
                options: [
                    { text: 'Dừng lại, gần đạt mục tiêu rồi', score: 1, feedback: 'Cải thiện lớn, nhưng chưa đạt mục tiêu 2 giây — và chưa có gì ngăn ảnh nặng được tải lên lại.' },
                    { text: 'Đo lại: nút thắt mới là JavaScript (1,5 giây) → tối ưu tiếp; đồng thời tự động nén/giới hạn kích thước ảnh khi tải lên và thêm kiểm tra hiệu năng vào quy trình CI', score: 2, feedback: 'Nút thắt đã dịch chuyển — quay lại bước 1. Và biến bài học thành cơ chế tự động để không tái diễn.' },
                    { text: 'Giờ mới mua server để chắc ăn', score: 0, feedback: 'Vẫn chưa có dữ liệu cho thấy server là vấn đề.' }
                ]
            }
        ],
        debrief: `
            <p>Giải pháp "mua server" nghe hợp lý nhưng nhắm vào 5% thời gian tải. Đo lường cho thấy 70% nằm ở ảnh — sửa rẻ và nhanh. Sau mỗi lần cải thiện, nút thắt dịch chuyển; và cách phòng ngừa tốt nhất là biến bài học thành kiểm tra tự động.</p>
        `,
        lessons: [
            'Đo trước khi tối ưu',
            'Chia đôi để khoanh vùng nhanh',
            'Tấn công nút thắt lớn nhất trước, không chọn việc theo sở trường',
            'Đo lại sau mỗi cải thiện — nút thắt dịch chuyển',
            'Biến bài học thành cơ chế tự động'
        ]
    },
    {
        id: 'case-career-change',
        title: 'Kế toán muốn chuyển sang công nghệ',
        icon: '🔄',
        domain: 'Cá nhân',
        level: 'intermediate',
        tools: ['define-problem', 'circle-competence', 'decision-matrix', 'analysis-paralysis', 'second-order'],
        situation: `
            <p>Bạn 30 tuổi, làm kế toán 6 năm, lương 20 triệu/tháng. Có gia đình và khoản trả góp nhà 8 triệu/tháng. Bạn thấy chán công việc hiện tại và muốn chuyển sang ngành công nghệ.</p>
        `,
        steps: [
            {
                title: 'Định nghĩa vấn đề',
                question: 'Câu hỏi nào nên trả lời đầu tiên?',
                options: [
                    { text: '"Ngôn ngữ lập trình nào đang hot nhất?"', score: 0, feedback: 'Bắt đầu từ giải pháp. Bạn còn chưa biết mình muốn làm công việc gì trong ngành công nghệ.' },
                    { text: '"Chính xác mình muốn gì từ việc chuyển ngành — công việc cụ thể nào, vì sao, và ràng buộc tài chính tối thiểu là gì?"', score: 2, feedback: 'Định nghĩa rõ mục tiêu và ràng buộc (ví dụ thu nhập không dưới 15 triệu trong giai đoạn chuyển đổi) trước khi chọn con đường.' },
                    { text: '"Nên nghỉ việc khi nào?"', score: 0, feedback: 'Câu hỏi về cách thực hiện, khi chưa rõ mục tiêu và phương án.' },
                    { text: '"Vị trí nào trong ngành công nghệ lương cao nhất?"', score: 1, feedback: 'Thông tin hữu ích, nhưng lương cao không nói lên vị trí đó có phù hợp với bạn không.' }
                ]
            },
            {
                title: 'Vòng tròn năng lực',
                context: `<p>Bạn nhận ra điều mình thích nhất là làm việc với dữ liệu và tự động hoá: bạn từng viết macro Excel, học SQL cơ bản, và thường là người làm báo cáo phân tích cho phòng.</p>`,
                question: 'Hướng nào tận dụng tốt nhất vòng tròn năng lực?',
                options: [
                    { text: 'Lập trình game', score: 0, feedback: 'Hoàn toàn ngoài vòng tròn, không tận dụng được kinh nghiệm nào — rủi ro và thời gian chuyển đổi dài nhất.' },
                    { text: 'Phân tích dữ liệu tài chính / chuyên viên dữ liệu trong fintech, ngân hàng', score: 2, feedback: 'Kết hợp kiến thức kế toán (trong vòng) với kỹ năng dữ liệu (ở rìa, đang mở rộng) — lợi thế hiếm và chuyển đổi nhanh hơn.' },
                    { text: 'Nghiên cứu AI', score: 0, feedback: 'Đòi hỏi nền tảng toán và nghiên cứu sâu — quá xa vòng tròn hiện tại.' },
                    { text: 'Lập trình web nói chung', score: 1, feedback: 'Khả thi, nhưng bỏ phí 6 năm hiểu biết về tài chính — bạn sẽ cạnh tranh ngang với người mới hoàn toàn.' }
                ]
            },
            {
                title: 'Chọn con đường',
                question: 'Bạn quyết định thế nào?',
                options: [
                    { text: 'Nghỉ việc ngay, học bootcamp toàn thời gian 6 tháng', score: 0, feedback: 'Với khoản trả góp và gia đình, đây là quyết định "cửa một chiều" rủi ro cao — trong khi có những phương án đảo ngược được.' },
                    { text: 'Dùng ma trận quyết định so sánh: học buổi tối giữ việc · xin chuyển nội bộ sang vị trí phân tích tài chính · nghỉ học toàn thời gian — tiêu chí: rủi ro tài chính, tốc độ chuyển đổi, mức phù hợp thế mạnh; ưu tiên phương án đảo ngược được', score: 2, feedback: 'So sánh có hệ thống, và nhận ra giá trị của các phương án "cửa hai chiều" khi có ràng buộc tài chính.' },
                    { text: 'Chờ thêm 1–2 năm nghiên cứu cho chắc chắn rồi mới tính', score: 0, feedback: 'Analysis paralysis — thời gian trôi qua là chi phí. Thử nghiệm nhỏ cho thông tin tốt hơn nghiên cứu thêm.' }
                ]
            },
            {
                title: 'Thử nghiệm nhỏ',
                context: `<p>Bạn chọn: học buổi tối + tìm vị trí chuyển tiếp trong công ty hiện tại.</p>`,
                question: 'Bước tiếp theo trong 3 tháng tới?',
                options: [
                    { text: 'Đăng ký 10 khoá học online cùng lúc', score: 0, feedback: 'Dàn trải, dễ bỏ dở — và học không kèm thực hành ít giá trị khi xin việc.' },
                    { text: 'Hoàn thành 1 khoá SQL/Python cho phân tích dữ liệu, làm 2 dự án thật với dữ liệu công ty (được phép), trò chuyện với 5 người làm dữ liệu trong fintech; viết trước tiêu chí để quyết định bước tiếp', score: 2, feedback: 'Học có trọng tâm, có sản phẩm thật, có thông tin từ người trong nghề, và có tiêu chí quyết định — đúng tinh thần PDCA cho sự nghiệp.' },
                    { text: 'Nộp CV ngay vào vị trí Senior Data Analyst', score: 0, feedback: 'Chưa đủ kinh nghiệm cho vị trí senior — nhiều khả năng bị từ chối và mất tự tin.' },
                    { text: 'Chờ công ty mở vị trí phù hợp', score: 1, feedback: 'Thụ động. Chủ động làm dự án dữ liệu và cho quản lý thấy năng lực sẽ tạo ra cơ hội nhanh hơn.' }
                ]
            }
        ],
        debrief: `
            <p>"Chuyển sang công nghệ" không phải một vấn đề cụ thể. Khi định nghĩa rõ (thích dữ liệu và tự động hoá, cần giữ thu nhập tối thiểu) và soi vào vòng tròn năng lực, con đường tốt nhất hiện ra: không phải bỏ hết làm lại, mà <em>kết hợp</em> chuyên môn cũ với kỹ năng mới. Về dài hạn (tư duy bậc hai), người hiểu cả tài chính lẫn dữ liệu là nguồn nhân lực hiếm.</p>
        `,
        lessons: [
            'Định nghĩa mục tiêu và ràng buộc trước khi chọn con đường',
            'Tận dụng vòng tròn năng lực thay vì bắt đầu từ số 0',
            'Ưu tiên phương án đảo ngược được khi rủi ro cao',
            'Thử nghiệm nhỏ có tiêu chí thay vì chờ chắc chắn'
        ]
    },
    {
        id: 'case-saas-churn',
        title: 'Phần mềm SaaS: tỷ lệ rời bỏ tăng gấp đôi',
        icon: '🚪',
        domain: 'Kinh doanh',
        level: 'advanced',
        tools: ['hypothesis-driven', 'confirmation-bias', 'reframing', 'cynefin', 'issue-tree'],
        situation: `
            <p>Bạn là Head of Product của một phần mềm quản lý bán hàng cho cửa hàng nhỏ (5.000 khách trả phí). Tỷ lệ khách rời bỏ hằng tháng tăng từ 3% lên 6% trong 4 tháng. CEO tin chắc: <em>"Là do đối thủ mới giảm giá 30%."</em></p>
        `,
        steps: [
            {
                title: 'Xử lý giả thuyết của CEO',
                question: 'Bạn phản hồi thế nào?',
                options: [
                    { text: 'Đồng ý và đề xuất giảm giá 30% ngay', score: 0, feedback: 'Chấp nhận giả thuyết chưa kiểm chứng chỉ vì người nói có quyền lực. Nếu sai, giảm giá làm mất 30% doanh thu mà không giữ được khách.' },
                    { text: 'Coi đây là một giả thuyết: viết ra dữ liệu nào sẽ xác nhận/bác bỏ, và thêm 2–3 giả thuyết cạnh tranh để kiểm tra song song', score: 2, feedback: 'Tôn trọng trực giác của CEO nhưng biến nó thành kế hoạch kiểm chứng — và tránh thiên kiến xác nhận bằng các giả thuyết cạnh tranh.' },
                    { text: 'Phản bác CEO vì không có dữ liệu', score: 1, feedback: 'Đúng là cần dữ liệu, nhưng cách đối đầu dễ khiến CEO phòng thủ. Đề xuất cách kiểm chứng sẽ hiệu quả hơn.' },
                    { text: 'Khảo sát khách: "Bạn có thấy giá của chúng tôi cao hơn đối thủ không?"', score: 0, feedback: 'Câu hỏi dẫn dắt — gần như chắc chắn cho ra câu trả lời xác nhận giả thuyết giá.' }
                ]
            },
            {
                title: 'Đọc dữ liệu',
                context: `<p><strong>Dữ liệu:</strong> 70% khách rời bỏ đã dùng dưới 6 tháng; khách lâu năm có tỷ lệ rời bỏ không đổi · Khảo sát rời bỏ: 18% nhắc tới giá, 45% "không thấy hiệu quả / không dùng hết tính năng", 20% "đóng cửa hàng" · 4 tháng trước, đội đã thay luồng hướng dẫn ban đầu (onboarding) mới.</p>`,
                question: 'Nhận định nào tốt nhất?',
                options: [
                    { text: 'Giả thuyết về giá bị bác bỏ hoàn toàn', score: 1, feedback: 'Không hẳn — 18% nhắc tới giá là có thật. Nhưng giá không phải lý do chính, và không giải thích vì sao chỉ khách mới rời đi.' },
                    { text: 'Dữ liệu nghiêng về vấn đề khách mới không nhận được giá trị (onboarding) — cần kiểm chứng: khách qua onboarding mới và cũ có khác biệt về tỷ lệ thiết lập xong và tỷ lệ rời bỏ không?', score: 2, feedback: 'Đọc đúng tín hiệu (chỉ khách mới, "không thấy hiệu quả", thời điểm trùng với onboarding mới) và đặt bước kiểm chứng tiếp theo.' },
                    { text: 'Kết luận ngay do onboarding mới, quay lại bản cũ', score: 1, feedback: 'Hướng hợp lý nhưng kết luận khi chưa kiểm chứng — có thể mất những cải tiến tốt của bản mới.' },
                    { text: 'Do kinh tế khó khăn, cửa hàng đóng cửa nhiều', score: 0, feedback: 'Chỉ giải thích 20% và không giải thích vì sao khách lâu năm không bị ảnh hưởng.' }
                ]
            },
            {
                title: 'Chọn hướng giải quyết',
                context: `<p><strong>So sánh theo nhóm (cohort):</strong> khách qua onboarding mới chỉ 35% thiết lập xong kho hàng trong 7 ngày (bản cũ: 62%). Khách không thiết lập kho trong 7 ngày có tỷ lệ rời bỏ sau 3 tháng cao gấp 4 lần.</p>`,
                question: 'Hướng giải quyết tốt nhất?',
                options: [
                    { text: 'Quay lại toàn bộ onboarding cũ', score: 1, feedback: 'Nhanh và an toàn, nhưng bỏ luôn những điểm tốt của bản mới và không tìm cách làm tốt hơn cả bản cũ.' },
                    { text: 'Đổi mục tiêu thành "khách thiết lập kho và bán đơn đầu tiên trong 7 ngày"; thử song song 2–3 can thiệp nhỏ (nhập kho từ Excel, gọi hỗ trợ ngày thứ 2, checklist trong app) bằng A/B test, khuếch đại cái hiệu quả', score: 2, feedback: 'Reframe về kết quả của khách hàng, và xử lý như vấn đề phức hợp: nhiều thử nghiệm nhỏ an toàn, học từ dữ liệu.' },
                    { text: 'Giảm giá 30% cho khách mới', score: 0, feedback: 'Không chạm vào nguyên nhân: khách rời đi vì chưa thấy giá trị, không phải vì giá.' }
                ]
            },
            {
                title: 'Nhóm khách nhắc tới giá',
                question: 'Ngoài sửa onboarding, bạn làm gì với 18% khách nhắc tới giá?',
                options: [
                    { text: 'Bỏ qua vì không phải nguyên nhân chính', score: 0, feedback: 'Không phải nguyên nhân chính không có nghĩa là không đáng quan tâm — có thể có một phân khúc chưa được phục vụ tốt.' },
                    { text: 'Phân tích nhóm này (có phải cửa hàng rất nhỏ?) — nếu đúng, thử một gói nhẹ hơn như một giả thuyết riêng, không giảm giá đại trà', score: 2, feedback: 'Xử lý như một giả thuyết riêng với phân khúc rõ ràng, tránh giảm giá toàn bộ làm mất doanh thu từ khách hài lòng.' },
                    { text: 'Giảm giá cho tất cả khách hàng', score: 0, feedback: 'Mất doanh thu từ 82% khách không coi giá là vấn đề.' },
                    { text: 'Tặng 1 tháng miễn phí cho ai doạ huỷ', score: 1, feedback: 'Giữ được một số khách trước mắt, nhưng là chữa triệu chứng và có thể tạo động cơ lệch: khách học được rằng doạ huỷ sẽ được quà.' }
                ]
            }
        ],
        debrief: `
            <p>Giả thuyết của CEO nghe rất hợp lý và có một phần sự thật — đó chính là lý do nó nguy hiểm. Biến nó thành giả thuyết có thể kiểm chứng, thêm giả thuyết cạnh tranh, và phân tích theo nhóm khách đã cho thấy nguyên nhân chính nằm ở trải nghiệm ban đầu. Vì hành vi khách hàng là hệ thống phức hợp, cách tốt nhất là chạy nhiều thử nghiệm nhỏ thay vì đặt cược vào một giải pháp.</p>
        `,
        lessons: [
            'Giả thuyết của sếp vẫn là giả thuyết — biến nó thành kế hoạch kiểm chứng',
            'Luôn có giả thuyết cạnh tranh để chống thiên kiến xác nhận',
            'Phân tích theo nhóm (cohort) để thấy ai thực sự bị ảnh hưởng',
            'Vấn đề phức hợp → nhiều thử nghiệm nhỏ song song'
        ]
    },
    {
        id: 'case-midnight-outage',
        title: 'Hệ thống sập lúc nửa đêm',
        icon: '🚨',
        domain: 'Kỹ thuật',
        level: 'advanced',
        tools: ['cynefin', 'root-cause', '5-whys', 'symptom-fixing', 'systems-thinking'],
        situation: `
            <p>23h40 tối thứ Sáu, bạn là kỹ sư trực. Ví điện tử của công ty báo lỗi 60% giao dịch; mạng xã hội bắt đầu có phàn nàn. Bản cập nhật gần nhất được triển khai lúc 22h.</p>
        `,
        steps: [
            {
                title: 'Phản ứng đầu tiên',
                question: 'Việc đầu tiên bạn làm?',
                options: [
                    { text: 'Mở code của bản cập nhật 22h và đọc kỹ để tìm lỗi', score: 0, feedback: 'Đây là vùng Hỗn loạn — mỗi phút phân tích là hàng nghìn giao dịch lỗi. Ổn định trước, phân tích sau.' },
                    { text: 'Rollback bản cập nhật 22h (hoặc tắt tính năng mới), gọi đội trực và báo trạng thái sự cố — ổn định trước', score: 2, feedback: 'Act → Sense → Respond. Rollback là hành động nhanh nhất có khả năng cao ổn định hệ thống, vì sự cố bắt đầu ngay sau bản cập nhật.' },
                    { text: 'Chờ sáng mai cả đội vào xử lý', score: 0, feedback: 'Thiệt hại tiếp diễn cả đêm — tiền của khách, niềm tin, và có thể vi phạm cam kết dịch vụ.' },
                    { text: 'Viết bài xin lỗi trên mạng xã hội', score: 1, feedback: 'Truyền thông cần làm, nhưng song song và bởi người phụ trách — việc đầu tiên của kỹ sư trực là ổn định hệ thống.' }
                ]
            },
            {
                title: 'Sau khi ổn định',
                context: `<p>Rollback xong lúc 00h10, tỷ lệ lỗi về 0,5% (mức bình thường).</p>`,
                question: 'Tiếp theo?',
                options: [
                    { text: 'Đi ngủ, coi như xong', score: 0, feedback: 'Còn giao dịch treo, khách bị trừ tiền, và bằng chứng (log) có thể bị ghi đè nếu không lưu lại.' },
                    { text: 'Ghi lại dòng thời gian, lưu log làm bằng chứng, kiểm tra giao dịch treo, lập danh sách khách bị ảnh hưởng để hoàn tiền; hẹn buổi postmortem trong 48 giờ', score: 2, feedback: 'Khống chế trọn vẹn (cả hậu quả với khách) và chuẩn bị dữ liệu cho phân tích nguyên nhân gốc.' },
                    { text: 'Tìm người viết đoạn code lỗi để kỷ luật', score: 0, feedback: 'Văn hoá đổ lỗi khiến mọi người giấu thông tin — tổ chức mất khả năng học từ sự cố.' }
                ]
            },
            {
                title: 'Postmortem',
                context: `<p><strong>Nguyên nhân trực tiếp:</strong> trong bản cập nhật, một cấu hình timeout bị đổi từ 30 giây xuống 3 giây.</p>`,
                question: 'Cách phân tích nào tốt nhất?',
                options: [
                    { text: 'Kết luận "kỹ sư A cấu hình sai" và nhắc nhở', score: 0, feedback: 'Dừng ở lỗi cá nhân. Con người luôn có lúc sai — câu hỏi là vì sao hệ thống để lỗi lọt qua.' },
                    { text: '3 × 5 Whys: vì sao cấu hình sai được đưa vào? vì sao test/staging không phát hiện? vì sao hệ thống không tự ngăn sự cố lan rộng?', score: 2, feedback: 'Phân tích ba lớp — xảy ra, không phát hiện, không ngăn chặn — tìm ra lỗ hổng ở nhiều lớp phòng vệ (mô hình pho mát Thuỵ Sĩ).' },
                    { text: 'Ra quy định cấm triển khai vào thứ Sáu', score: 1, feedback: 'Có thể giảm rủi ro ngoài giờ, nhưng không xử lý nguyên nhân gốc — lỗi tương tự vẫn xảy ra vào thứ Ba.' }
                ]
            },
            {
                title: 'Biện pháp phòng ngừa',
                context: `<p><strong>Phân tích cho thấy:</strong> cấu hình không được review như code · môi trường staging không có tải thật nên timeout 3 giây vẫn qua · không có triển khai từng phần (canary) · cảnh báo chỉ kích hoạt khi lỗi trên 80%.</p>`,
                question: 'Bộ biện pháp nào mạnh nhất?',
                options: [
                    { text: 'Đào tạo lại cả đội về cấu hình', score: 1, feedback: 'Có ích nhưng là biện pháp yếu — phụ thuộc vào trí nhớ con người.' },
                    { text: 'Quản lý cấu hình như code (review bắt buộc, tự động kiểm tra giá trị hợp lệ); triển khai canary 5% lưu lượng với tự động rollback khi lỗi tăng; hạ ngưỡng cảnh báo', score: 2, feedback: 'Vá lỗ hổng ở cả ba lớp phòng vệ bằng biện pháp mạnh (tự động, thiết kế lại) — lỗi tương tự sẽ bị chặn hoặc chỉ ảnh hưởng 5% trong vài phút.' },
                    { text: 'Thêm bước giám đốc phê duyệt cho mọi lần triển khai', score: 1, feedback: 'Tạo nút thắt chính sách làm chậm mọi thứ, trong khi giám đốc khó phát hiện một giá trị timeout sai.' }
                ]
            }
        ],
        debrief: `
            <p>Trong khủng hoảng, hành động trước để ổn định là đúng — phân tích tại chỗ là sai. Nhưng sau khi ổn định, phải quay lại phân tích kỹ và không đổ lỗi: sự cố xảy ra vì nhiều lớp phòng vệ cùng có lỗ. Biện pháp mạnh nhất là những thứ tự động chặn lỗi, không phải lời nhắc nhở hay thêm thủ tục phê duyệt.</p>
        `,
        lessons: [
            'Hỗn loạn: hành động để ổn định trước, phân tích sau',
            'Khống chế trọn vẹn, kể cả hậu quả với khách hàng',
            'Postmortem không đổ lỗi, phân tích nhiều lớp phòng vệ',
            'Ưu tiên biện pháp tự động, thiết kế lại hơn đào tạo, phê duyệt'
        ]
    },
    {
        id: 'case-overdue-project',
        title: 'Dự án trễ 5 tháng, đã tiêu 70% ngân sách',
        icon: '🏗️',
        domain: 'Công việc',
        level: 'advanced',
        tools: ['sunk-cost', 'groupthink', 'decision-matrix', 'premortem', 'second-order'],
        situation: `
            <p>Bạn vừa được giao quản lý dự án xây hệ thống CRM nội bộ. Kế hoạch ban đầu: 6 tháng, 3 tỷ đồng. Thực tế: đã chạy 11 tháng, tiêu 2,1 tỷ (70%), mới hoàn thành khoảng 40% tính năng. Nhóm dự án vẫn nói "sắp xong rồi".</p>
        `,
        steps: [
            {
                title: 'Buổi họp đầu tiên',
                question: 'Trong buổi họp đầu tiên với nhóm, bạn làm gì?',
                options: [
                    { text: 'Tuyên bố tiếp tục và yêu cầu mọi người tăng tốc', score: 0, feedback: 'Quyết định khi chưa có thông tin, và "tăng tốc" không phải là kế hoạch.' },
                    { text: 'Yêu cầu mỗi người tự viết ước tính riêng về thời gian và chi phí còn lại trước khi thảo luận, rồi mở ra cùng lúc', score: 2, feedback: 'Thu thập ước tính độc lập chống groupthink — những nghi ngờ bị giấu kín sẽ lộ ra.' },
                    { text: 'Hỏi: "Mọi người đều tin dự án sẽ xong trong 2 tháng nữa, đúng không?"', score: 0, feedback: 'Câu hỏi dẫn dắt trong không khí nhóm — gần như chắc chắn nhận được cái gật đầu tập thể.' },
                    { text: 'Tuyên bố huỷ dự án ngay', score: 1, feedback: 'Có thể là quyết định đúng, nhưng đưa ra khi chưa có thông tin và chưa xét các phương án khác.' }
                ]
            },
            {
                title: 'Đánh giá tình hình',
                context: `<p><strong>Ước tính riêng</strong> của nhóm: từ 4 đến 12 tháng nữa, trung vị 8 tháng; cần thêm khoảng 1,8 tỷ. Một phần mềm CRM dạng SaaS có sẵn đáp ứng khoảng 85% nhu cầu, 400 triệu/năm, triển khai trong 2 tháng. Trưởng nhóm kỹ thuật: <em>"Đã đổ 2,1 tỷ vào rồi, bỏ là phí!"</em></p>`,
                question: 'Cách đánh giá đúng là gì?',
                options: [
                    { text: 'Tiếp tục vì đã đầu tư 2,1 tỷ', score: 0, feedback: 'Bẫy chi phí chìm: 2,1 tỷ đã mất dù chọn phương án nào.' },
                    { text: 'So sánh các phương án từ hôm nay trở đi: chi phí và thời gian còn lại, rủi ro, mức đáp ứng nhu cầu — 2,1 tỷ đã chi là như nhau ở mọi phương án', score: 2, feedback: 'Chỉ chi phí và lợi ích tương lai mới quan trọng. Tiếp tục = +1,8 tỷ và ~8 tháng (có thể 12); SaaS = 400 triệu/năm và 2 tháng, thiếu 15% nhu cầu.' },
                    { text: 'Chọn SaaS vì rẻ nhất', score: 1, feedback: 'Có thể đúng, nhưng cần xét 15% nhu cầu còn thiếu có quan trọng không, chi phí dài hạn, và phương án kết hợp.' }
                ]
            },
            {
                title: 'Tổ chức ra quyết định',
                question: 'Bạn tổ chức việc ra quyết định thế nào?',
                options: [
                    { text: 'Ma trận quyết định cho 3 phương án (tiếp tục · chuyển SaaS · lai: SaaS + tự phát triển phần đặc thù 15%), tiêu chí và trọng số chốt trước; mời một chuyên gia bên ngoài đánh giá độc lập', score: 2, feedback: 'Quy trình minh bạch, có phương án sáng tạo (lai), và góc nhìn độc lập giảm thiên kiến của những người đã gắn bó với dự án.' },
                    { text: 'Để nhóm dự án bỏ phiếu công khai', score: 0, feedback: 'Nhóm đã đầu tư cảm xúc vào dự án, dễ bị chi phí chìm và groupthink chi phối.' },
                    { text: 'Giao quyết định cho trưởng nhóm kỹ thuật vì hiểu hệ thống nhất', score: 0, feedback: 'Xung đột lợi ích: người gắn bó nhất với quyết định ban đầu thường khó đánh giá khách quan việc có nên tiếp tục.' }
                ]
            },
            {
                title: 'Trước khi triển khai',
                context: `<p>Quyết định: chọn phương án <strong>lai</strong> — dùng SaaS, tự phát triển phần tích hợp đặc thù.</p>`,
                question: 'Trước khi triển khai, bạn làm gì?',
                options: [
                    { text: 'Pre-mortem: "6 tháng sau, phương án lai đã thất bại — vì sao?"; đặt tiêu chí dừng và tín hiệu cảnh báo sớm', score: 2, feedback: 'Học từ chính dự án cũ: có tiêu chí dừng từ đầu sẽ tránh được việc kéo dài thêm 5 tháng như trước.' },
                    { text: 'Bắt đầu ngay, không cần họp thêm', score: 1, feedback: 'Tốc độ là tốt, nhưng bỏ lỡ cơ hội rẻ để tìm rủi ro (ví dụ: SaaS không tích hợp được với hệ thống kế toán).' },
                    { text: 'Chuyển toàn bộ nhóm cũ sang dự án khác mà không giải thích', score: 0, feedback: 'Mất kiến thức về nghiệp vụ đã tích luỹ và làm tổn thương tinh thần — hậu quả bậc hai cho các dự án sau.' }
                ]
            }
        ],
        debrief: `
            <p>Dự án trễ hiếm khi được dừng đúng lúc, vì ba lực cùng kéo: chi phí chìm ("bỏ thì phí"), groupthink ("ai cũng nói sắp xong"), và xung đột lợi ích (người ra quyết định ban đầu đánh giá chính quyết định của mình). Ước tính độc lập, so sánh từ hôm nay trở đi, góc nhìn bên ngoài và tiêu chí dừng viết trước là bộ công cụ chống lại cả ba.</p>
        `,
        lessons: [
            'Thu thập ước tính độc lập trước khi thảo luận nhóm',
            'So sánh phương án từ hôm nay trở đi, bỏ qua chi phí chìm',
            'Tìm phương án thứ ba (lai) thay vì chỉ "tiếp tục hay huỷ"',
            'Đặt tiêu chí dừng từ đầu cho dự án mới'
        ]
    },
    {
        id: 'case-school-traffic',
        title: 'Kẹt xe cổng trường giờ tan học',
        icon: '🏫',
        domain: 'Cộng đồng',
        level: 'intermediate',
        tools: ['reframing', 'abstraction', 'second-order', 'systems-thinking', 'pdca'],
        situation: `
            <p>Bạn ở trong ban đại diện phụ huynh của một trường tiểu học 1.200 học sinh nằm trên con đường nhỏ. Giờ tan học 16h30, phụ huynh đỗ xe tràn ra lòng đường, kẹt xe khoảng 40 phút, đã có vài vụ va quẹt. Đề xuất ban đầu trong nhóm phụ huynh: <em>"Làm đơn xin phường mở rộng đường."</em></p>
        `,
        steps: [
            {
                title: 'Nhìn lại vấn đề',
                question: 'Bạn phản hồi đề xuất mở rộng đường thế nào?',
                options: [
                    { text: 'Ủng hộ và viết đơn ngay', score: 0, feedback: 'Mở rộng đường rất tốn kém, mất nhiều năm, không chắc được duyệt — và có thể chỉ thu hút thêm xe (nhu cầu cảm ứng).' },
                    { text: 'Đổi cách nhìn: vấn đề là "quá nhiều xe cùng tới một chỗ trong cùng 15 phút" — liệt kê nhiều cách đặt vấn đề trước khi chọn giải pháp', score: 2, feedback: 'Reframe từ "đường hẹp" sang "đỉnh tải" mở ra nhiều giải pháp rẻ và nhanh hơn hẳn.' },
                    { text: 'Đề nghị cấm phụ huynh đi ô tô đến trường', score: 1, feedback: 'Có thể là một phần của giải pháp, nhưng cực đoan và khó thực thi khi chưa hiểu rõ vấn đề.' }
                ]
            },
            {
                title: 'Trừu tượng hoá',
                question: 'Trừu tượng hoá lên, đây là dạng bài toán nào và gợi ý giải pháp gì?',
                options: [
                    { text: 'Bài toán hàng đợi / đỉnh tải: làm phẳng đỉnh (tan học lệch giờ theo khối), tăng "quầy phục vụ" (nhiều điểm đón), giảm thời gian phục vụ mỗi xe (đón nhanh, không xuống xe)', score: 2, feedback: 'Nhận ra dạng bài giúp mượn ngay bộ giải pháp đã biết từ các bài toán hàng đợi khác.' },
                    { text: 'Bài toán truyền thông — cần tuyên truyền ý thức phụ huynh', score: 0, feedback: 'Kêu gọi ý thức là biện pháp yếu; cấu trúc (mọi người cùng tới một lúc, một chỗ) vẫn nguyên.' },
                    { text: 'Bài toán an ninh — thuê thêm bảo vệ điều tiết', score: 1, feedback: 'Hỗ trợ điều phối có ích, nhưng không thay đổi bản chất đỉnh tải.' }
                ]
            },
            {
                title: 'Hậu quả bậc hai',
                context: `<p><strong>Giải pháp được chọn thử:</strong> tan học lệch giờ thành 3 khung (16h15 / 16h30 / 16h45) + làn "đón nhanh" (học sinh chờ sẵn theo số thẻ, phụ huynh không xuống xe).</p>`,
                question: 'Hậu quả bậc hai nào cần lường trước?',
                options: [
                    { text: 'Không có, giải pháp rõ ràng là tốt', score: 0, feedback: 'Mọi can thiệp vào hệ thống đều có phản ứng — đặc biệt khi liên quan tới hàng nghìn người.' },
                    { text: 'Gia đình có con ở nhiều khối phải chờ lâu hơn; phụ huynh tới sớm đỗ chờ từ 16h lại gây tắc; giáo viên phải trực thêm → cho anh chị em về cùng khung muộn nhất, quy định không dừng đỗ trước khung giờ, xoay ca giáo viên', score: 2, feedback: 'Dự đoán phản ứng của từng nhóm liên quan và thiết kế biện pháp đi kèm ngay từ đầu.' },
                    { text: 'Phụ huynh sẽ phàn nàn', score: 1, feedback: 'Đúng nhưng quá chung chung — cần chỉ ra ai, vì sao, và làm gì.' }
                ]
            },
            {
                title: 'Duy trì bền vững',
                question: 'Để giải pháp hiệu quả lâu dài, cần gì?',
                options: [
                    { text: 'Thông báo một lần vào đầu năm học', score: 1, feedback: 'Cần thông báo, nhưng không có đo lường và điều chỉnh thì khó biết giải pháp có hiệu quả không.' },
                    { text: 'Đo thời gian kẹt xe trước/sau mỗi tuần, lấy ý kiến phụ huynh sau 1 tháng, điều chỉnh (PDCA); thêm dòng thông tin: bảng hiển thị số thẻ học sinh đã sẵn sàng', score: 2, feedback: 'Vòng PDCA giúp cải tiến liên tục; thông tin kịp thời là một điểm đòn bẩy rẻ mà mạnh trong hệ thống.' },
                    { text: 'Phạt tiền phụ huynh đỗ xe sai quy định', score: 0, feedback: 'Cẩn thận hậu quả bậc hai: nghiên cứu ở các nhà trẻ Israel (Gneezy & Rustichini, 2000) cho thấy sau khi áp phạt tiền đón con muộn, số phụ huynh đón muộn lại <em>tăng</em> — tiền phạt biến thành "phí dịch vụ" và xoá cảm giác áy náy.' }
                ]
            }
        ],
        debrief: `
            <p>"Đường hẹp" là cách nhìn dẫn tới giải pháp đắt và chậm. "Quá nhiều xe cùng lúc" là cách nhìn mở ra giải pháp rẻ, làm được ngay tuần sau. Nhưng mọi can thiệp vào hệ thống có con người đều tạo phản ứng — lường trước hậu quả bậc hai và đo lường liên tục giúp giải pháp không tự phá vỡ chính nó.</p>
        `,
        lessons: [
            'Reframe trước khi chọn giải pháp đắt tiền',
            'Trừu tượng hoá để mượn lời giải có sẵn (hàng đợi)',
            'Lường trước phản ứng của từng nhóm liên quan',
            'Cẩn thận với biện pháp phạt — có thể phản tác dụng'
        ]
    }
];
