// Problem Solving - Ngân hàng câu hỏi trắc nghiệm
// Schema: { id, concept, type, q, choices: [4 lựa chọn], answer: index đúng, explain }
// type: 'concept' (hiểu khái niệm) | 'apply' (áp dụng) | 'tool' (chọn công cụ) | 'spot' (nhận diện bẫy)
// Vị trí đáp án được xáo trộn khi hiển thị, nên thứ tự ở đây không quan trọng.
const psQuizBank = [
    // ===== Quy trình giải quyết vấn đề =====
    {
        id: 'q-process-1', concept: 'ps-process', type: 'concept',
        q: 'Trong khung 6 bước, việc nên làm <strong>ngay sau</strong> khi đã định nghĩa vấn đề rõ ràng là gì?',
        choices: ['Brainstorm thật nhiều giải pháp', 'Chẩn đoán nguyên nhân gốc bằng dữ liệu', 'Chọn phương án bằng ma trận quyết định', 'Triển khai thử nghiệm ngay'],
        answer: 1,
        explain: 'Sau Định nghĩa là <strong>Chẩn đoán</strong>. Nếu brainstorm giải pháp khi chưa biết nguyên nhân, ta dễ giải sai vấn đề hoặc chỉ chữa triệu chứng.'
    },
    {
        id: 'q-process-2', concept: 'ps-process', type: 'apply',
        q: 'Nhóm bạn vừa triển khai giải pháp giảm thời gian chờ ở phòng khám. Việc quan trọng nhất tiếp theo là gì?',
        choices: ['Đo lại chỉ số so với mục tiêu, hiệu quả thì chuẩn hoá', 'Chuyển ngay sang vấn đề tiếp theo vì giải pháp đã triển khai xong', 'Viết báo cáo mô tả chi tiết giải pháp đã làm để gửi cấp trên', 'Tăng thêm nguồn lực cho giải pháp để chắc chắn nó phát huy tác dụng'],
        answer: 0,
        explain: 'Bước 6 — <strong>Rút kinh nghiệm</strong>: đo lại để biết giải pháp có thực sự hiệu quả, rồi chuẩn hoá để kết quả không trôi về như cũ. Bỏ bước này là lý do nhiều cải tiến "biến mất" sau vài tháng.'
    },
    {
        id: 'q-process-3', concept: 'ps-process', type: 'concept',
        q: 'Trường hợp nào <strong>không nên</strong> đi tuần tự đủ 6 bước trước khi hành động?',
        choices: ['Vấn đề lặp đi lặp lại nhiều lần trong năm', 'Vấn đề liên quan tới nhiều phòng ban cùng lúc', 'Sự cố khẩn cấp đang gây thiệt hại từng phút', 'Vấn đề tốn nhiều chi phí và nguồn lực'],
        answer: 2,
        explain: 'Khi đang khủng hoảng, cần <strong>khống chế thiệt hại trước</strong> (rollback, tạm dừng, thông báo), phân tích sau. Các trường hợp còn lại chính là lúc quy trình đầy đủ phát huy giá trị.'
    },
    {
        id: 'q-process-4', concept: 'ps-process', type: 'spot',
        q: 'Trong cuộc họp: "Doanh số giảm rồi, chạy chương trình giảm giá 30% đi!" Nhóm đang bỏ qua những bước nào?',
        choices: ['Triển khai và rút kinh nghiệm', 'Định nghĩa và chẩn đoán', 'Chỉ bước quyết định', 'Không bỏ bước nào, đây là cách làm nhanh hợp lý'],
        answer: 1,
        explain: 'Nhóm nhảy thẳng từ triệu chứng ("doanh số giảm") tới giải pháp. Chưa biết giảm ở đâu, bao nhiêu, vì sao — giảm giá có thể không liên quan tới nguyên nhân thật và làm mất biên lợi nhuận.'
    },

    // ===== Định nghĩa vấn đề =====
    {
        id: 'q-define-1', concept: 'define-problem', type: 'concept',
        q: 'Câu nào là <strong>problem statement tốt nhất</strong>?',
        choices: ['"Chúng ta cần triển khai hệ thống CRM mới để quản lý khách hàng tốt hơn."', '"Nhân viên sales lười cập nhật thông tin nên khách hàng bị bỏ sót nhiều."', '"30% khách tiềm năng không được liên hệ lại trong 48 giờ (mục tiêu: dưới 5%)."', '"Quy trình bán hàng hiện tại đang có nhiều vấn đề cần được cải thiện."'],
        answer: 2,
        explain: 'Câu đúng <strong>cụ thể, đo được, có mục tiêu</strong>, và không chứa giải pháp hay đổ lỗi. "Cần CRM" là giải pháp đội lốt vấn đề; "sales lười" là giả thuyết đổ lỗi; "có vấn đề" quá mơ hồ.'
    },
    {
        id: 'q-define-2', concept: 'define-problem', type: 'apply',
        q: 'Phân tích Is / Is Not: lỗi đăng nhập <em>chỉ</em> xảy ra với người dùng ở Đà Nẵng, <em>không</em> xảy ra ở Hà Nội và TP.HCM, bắt đầu từ thứ Ba. Manh mối nào đáng kiểm tra đầu tiên?',
        choices: ['Kỹ năng dùng app của người dùng Đà Nẵng có gì khác so với nơi khác', 'Thay đổi nào từ thứ Ba chỉ ảnh hưởng riêng khu vực Đà Nẵng', 'Rà soát lại toàn bộ mã nguồn tính năng đăng nhập từ đầu đến cuối', 'Thời tiết và tình trạng mất điện ở Đà Nẵng trong tuần này ra sao'],
        answer: 1,
        explain: 'Giá trị của Is / Is Not nằm ở <strong>sự khác biệt</strong> giữa hai cột: cái gì khác biệt ở Đà Nẵng (máy chủ khu vực, nhà mạng, CDN…), bắt đầu từ thứ Ba? Nếu lỗi nằm ở mã nguồn chung thì Hà Nội và TP.HCM cũng bị.'
    },
    {
        id: 'q-define-3', concept: 'define-problem', type: 'concept',
        q: 'Vì sao <strong>không nên</strong> đưa giải pháp vào câu mô tả vấn đề (ví dụ "vấn đề là chưa có chatbot")?',
        choices: ['Vì câu mô tả sẽ trở nên quá dài và khó nhớ', 'Vì nó thu hẹp lựa chọn và che giấu vấn đề thật', 'Vì cấp trên thường không thích nghe đề xuất sớm', 'Không sao cả, nêu giải pháp sớm giúp tiết kiệm thời gian'],
        answer: 1,
        explain: 'Khi giải pháp đã nằm trong câu vấn đề, mọi người chỉ bàn "làm chatbot thế nào" thay vì "khách thực sự cần gì" — có thể vấn đề thật giải bằng một trang FAQ, hoặc nằm ở chỗ khác hoàn toàn.'
    },
    {
        id: 'q-define-4', concept: 'define-problem', type: 'concept',
        q: 'Trong 5W2H, câu hỏi <strong>"How much"</strong> giúp làm rõ điều gì?',
        choices: ['Giải pháp dự kiến sẽ tốn bao nhiêu tiền để triển khai', 'Quy mô, mức thiệt hại của vấn đề', 'Có bao nhiêu người cần tham gia vào nhóm giải quyết', 'Ngân sách tối đa mà ban lãnh đạo sẵn sàng phê duyệt'],
        answer: 1,
        explain: '"How much" đo <strong>độ lớn của vấn đề</strong>: mất bao nhiêu khách, bao nhiêu tiền, bao nhiêu giờ. Con số này quyết định mức đầu tư hợp lý cho việc giải quyết.'
    },

    // ===== 5 Whys =====
    {
        id: 'q-5whys-1', concept: '5-whys', type: 'spot',
        q: 'Chuỗi 5 Whys của một nhóm kết thúc ở: "…Tại sao thiếu index? → Vì bạn Nam quên thêm." Vấn đề của chuỗi này là gì?',
        choices: ['Chuỗi chưa hỏi đủ đúng 5 lần nên chưa đạt chuẩn của phương pháp', 'Dừng ở lỗi cá nhân, chưa hỏi vì sao quy trình để lỗi lọt qua', 'Không có vấn đề gì — đã xác định rõ người chịu trách nhiệm', 'Nên hỏi "Ai gây ra?" thay vì "Tại sao?" để tìm ra nhanh hơn'],
        answer: 1,
        explain: 'Con người luôn có lúc quên. Nguyên nhân gốc là <strong>lỗ hổng hệ thống</strong>: không có code review/kiểm thử tải chặn lỗi. Dừng ở "Nam quên" thì lần sau người khác cũng sẽ quên.'
    },
    {
        id: 'q-5whys-2', concept: '5-whys', type: 'concept',
        q: 'Khi nào nên <strong>dừng</strong> hỏi "Tại sao?"',
        choices: ['Khi đã hỏi đủ đúng 5 lần, vì con số này đã được Toyota kiểm chứng', 'Khi đã tìm ra được người trực tiếp gây ra lỗi', 'Khi chạm tới nguyên nhân kiểm soát được, loại bỏ thì hết tái diễn', 'Khi mọi người trong phòng họp đều đồng ý với câu trả lời cuối cùng'],
        answer: 2,
        explain: 'Con số 5 chỉ là gợi ý. Tiêu chí dừng là nguyên nhân <strong>hành động được</strong> và <strong>loại bỏ thì hết tái diễn</strong>. Hỏi tiếp quá mức sẽ ra ngoài phạm vi (luật pháp, thời tiết…).'
    },
    {
        id: 'q-5whys-3', concept: '5-whys', type: 'tool',
        q: 'Vấn đề có vẻ do nhiều nguyên nhân đan xen từ con người, máy móc, nguyên liệu, môi trường. Nên dùng công cụ nào <strong>trước</strong> khi đào sâu bằng 5 Whys?',
        choices: ['Fishbone Diagram', 'Ma trận Eisenhower', 'SCAMPER', 'Ước lượng Fermi'],
        answer: 0,
        explain: '5 Whys chỉ đi theo một nhánh. <strong>Fishbone</strong> giúp liệt kê rộng theo nhóm để không bỏ sót, rồi mới dùng 5 Whys đào sâu vài nguyên nhân hàng đầu.'
    },

    // ===== PDCA =====
    {
        id: 'q-pdca-1', concept: 'pdca', type: 'concept',
        q: 'Vì sao cần viết <strong>dự đoán cụ thể</strong> ở bước Plan của PDCA?',
        choices: ['Để có số liệu đẹp khi báo cáo kết quả với cấp trên sau này', 'Để bước Check có cơ sở so sánh và rút ra bài học', 'Vì các tiêu chuẩn chất lượng như ISO bắt buộc phải có dự đoán', 'Để tạo áp lực, buộc cả nhóm cố đạt được con số đã hứa'],
        answer: 1,
        explain: 'PDCA là thí nghiệm. Dự đoán ("thời gian chờ giảm xuống dưới 7 phút") biến kết quả thành bài học: đúng thì giữ, sai thì hiểu vì sao sai.'
    },
    {
        id: 'q-pdca-2', concept: 'pdca', type: 'apply',
        q: 'Thử nghiệm order qua QR giảm thời gian chờ từ 12 xuống 8 phút (mục tiêu dưới 7), đồng thời quầy pha chế trở thành nơi ùn ứ. Bước Act hợp lý nhất là gì?',
        choices: ['Bỏ QR vì không đạt mục tiêu dưới 7 phút như đã đặt ra', 'Chuẩn hoá QR, vòng PDCA mới nhắm vào khâu pha chế', 'Chạy lại đúng thử nghiệm cũ thêm một tháng để có thêm dữ liệu', 'Tuyển thêm một thu ngân để giảm tải cho quầy giờ cao điểm'],
        answer: 1,
        explain: 'QR đã cải thiện rõ rệt → giữ và chuẩn hoá. Nút thắt đã dịch chuyển sang pha chế → vòng PDCA tiếp theo nhắm vào đó. "Chưa đạt mục tiêu" không có nghĩa là thất bại.'
    },
    {
        id: 'q-pdca-3', concept: 'pdca', type: 'spot',
        q: 'Một nhà máy cải tiến quy trình thành công, nhưng 6 tháng sau mọi thứ quay về như cũ. Nhiều khả năng họ đã bỏ sót điều gì?',
        choices: ['Bước Plan — kế hoạch ban đầu chưa đủ chi tiết', 'Bước Act — chuẩn hoá thành quy trình, đào tạo', 'Thuê chuyên gia tư vấn bên ngoài giám sát lâu dài', 'Đầu tư máy móc mới để thay thế thao tác thủ công'],
        answer: 1,
        explain: 'Không chuẩn hoá thì mỗi người lại làm theo thói quen cũ. Đây là lý do Toyota nhấn mạnh <strong>SDCA</strong>: giữ vững chuẩn mới trước khi cải tiến tiếp.'
    },

    // ===== Root Cause Analysis =====
    {
        id: 'q-rca-1', concept: 'root-cause', type: 'concept',
        q: 'Tỷ lệ giao sai hàng tăng gấp 3. Đâu là <strong>nguyên nhân gốc</strong>?',
        choices: ['Khách hàng nhận được sản phẩm khác với sản phẩm đã đặt', 'Nhân viên kho lấy nhầm mã hàng vì làm việc thiếu tập trung', 'Mã dễ nhầm đặt cạnh nhau, không có bước quét mã xác nhận', 'Khách hàng phàn nàn và đánh giá thấp trên mạng xã hội'],
        answer: 2,
        explain: '"Khách nhận sai" là triệu chứng, "lấy nhầm" là nguyên nhân trực tiếp, "phàn nàn" là hậu quả. Nguyên nhân gốc là <strong>điều kiện hệ thống</strong> cho phép lỗi xảy ra và lọt qua.'
    },
    {
        id: 'q-rca-2', concept: 'root-cause', type: 'concept',
        q: 'Biện pháp nào <strong>mạnh nhất</strong> để lỗi không tái diễn?',
        choices: ['Họp nhắc nhở toàn bộ nhân viên phải cẩn thận hơn khi làm việc', 'Tổ chức đào tạo lại toàn bộ nhân viên về quy trình đóng gói', 'Máy quét chặn đóng gói nếu sai mã (lỗi không thể xảy ra)', 'Phạt người mắc lỗi để làm gương, răn đe những người khác'],
        answer: 2,
        explain: 'Biện pháp <strong>thiết kế lại/loại bỏ</strong> (poka-yoke) không phụ thuộc vào trí nhớ hay sự chú ý của con người. Nhắc nhở và đào tạo là biện pháp yếu; phạt còn khiến mọi người giấu lỗi.'
    },
    {
        id: 'q-rca-3', concept: 'root-cause', type: 'apply',
        q: 'Sự cố đang diễn ra: nhiều khách hàng bị trừ tiền hai lần. Việc làm <strong>đầu tiên</strong> là gì?',
        choices: ['Họp nhóm phân tích nguyên nhân gốc bằng Fishbone ngay lập tức', 'Khống chế: tạm dừng tính năng lỗi, chuẩn bị hoàn tiền, báo khách', 'Tìm xem ai đã deploy code gần nhất để yêu cầu giải trình', 'Chờ thêm dữ liệu vài giờ để chắc chắn đây là lỗi hệ thống'],
        answer: 1,
        explain: 'Bước 1 của RCA là <strong>khống chế (containment)</strong>. Mỗi phút phân tích khi thiệt hại còn lan là thêm khách bị ảnh hưởng.'
    },
    {
        id: 'q-rca-4', concept: 'root-cause', type: 'concept',
        q: 'Theo mô hình pho mát Thuỵ Sĩ (James Reason), sự cố nghiêm trọng thường xảy ra khi nào?',
        choices: ['Khi có một nhân viên đặc biệt bất cẩn trong ca làm', 'Khi lỗ hổng ở nhiều lớp phòng vệ cùng "thẳng hàng"', 'Khi tổ chức thiếu ngân sách cho hoạt động an toàn', 'Khi quy trình có quá nhiều bước kiểm tra chồng chéo'],
        answer: 1,
        explain: 'Mỗi lớp phòng vệ (thiết kế, quy trình, giám sát, đào tạo) đều có lỗ. Sự cố lọt qua khi các lỗ trùng nhau — vì vậy thường không có "một" nguyên nhân duy nhất và không nên đổ lỗi một người.'
    },

    // ===== Fishbone =====
    {
        id: 'q-fish-1', concept: 'fishbone', type: 'concept',
        q: 'Mục đích chính của sơ đồ xương cá là gì?',
        choices: ['Chứng minh nguyên nhân gốc bằng số liệu thống kê cụ thể', 'Liệt kê nguyên nhân khả dĩ theo nhóm để không bỏ sót', 'Lập kế hoạch triển khai giải pháp theo từng giai đoạn', 'Xếp hạng các giải pháp theo chi phí và thời gian thực hiện'],
        answer: 1,
        explain: 'Fishbone là công cụ <strong>mở rộng</strong> — tạo danh sách giả thuyết đầy đủ. Việc chứng minh cần dữ liệu (Pareto, kiểm tra thực tế) ở bước sau.'
    },
    {
        id: 'q-fish-2', concept: 'fishbone', type: 'spot',
        q: 'Vẽ xong fishbone, nhóm kết luận ngay nguyên nhân là "ly giấy mỏng" và đặt mua ly mới. Sai ở đâu?',
        choices: ['Nên dùng bộ nhóm 8P thay vì 6M cho ngành dịch vụ đồ uống', 'Các xương chỉ là giả thuyết, phải kiểm chứng bằng dữ liệu trước', 'Sơ đồ còn quá ít nhánh, cần vẽ thêm trước khi kết luận', 'Không sai — ly mỏng rõ ràng làm cà phê nguội nhanh hơn'],
        answer: 1,
        explain: 'Trong ví dụ cà phê nguội, dữ liệu cho thấy 70% phàn nàn đến từ đơn chờ shipper quá 10 phút — nguyên nhân chính là <strong>thời điểm pha</strong>, không phải ly. Hành động trên giả thuyết chưa kiểm chứng rất dễ tốn tiền vô ích.'
    },
    {
        id: 'q-fish-3', concept: 'fishbone', type: 'concept',
        q: 'Bộ nhóm nguyên nhân <strong>6M</strong> trong sản xuất gồm những gì?',
        choices: ['Money, Market, Media, Management, Mission, Model — 6 yếu tố kinh doanh', 'Man, Machine, Method, Material, Measurement, Mother Nature', 'Plan, Do, Check, Act, Standardize, Improve — 6 bước cải tiến', 'Product, Price, Place, Promotion, People, Process — nhóm marketing'],
        answer: 1,
        explain: '6M: Con người, Máy móc, Phương pháp, Vật liệu, Đo lường, Môi trường. Phương án cuối là một phần của bộ 8P dùng cho marketing/dịch vụ.'
    },

    // ===== Issue Tree & MECE =====
    {
        id: 'q-tree-1', concept: 'issue-tree', type: 'spot',
        q: 'Cách chia nào <strong>vi phạm MECE</strong>?',
        choices: ['Doanh thu = Số khách × Giá trị đơn trung bình', 'Khách hàng: dưới 25 tuổi / 25–40 tuổi / trên 40 tuổi', 'Doanh thu giảm vì: Marketing kém / Quảng cáo ít / Giá cao', 'Chi phí: cố định / biến đổi'],
        answer: 2,
        explain: '"Quảng cáo ít" nằm trong "Marketing kém" → <strong>trùng lặp</strong> (vi phạm ME). Cách chia này cũng <strong>bỏ sót</strong> sản phẩm, đối thủ, mùa vụ… (vi phạm CE).'
    },
    {
        id: 'q-tree-2', concept: 'issue-tree', type: 'concept',
        q: '"CE" trong MECE có nghĩa là gì?',
        choices: ['Các nhánh không chồng lấn, mỗi yếu tố chỉ thuộc một nhánh', 'Các nhánh cộng lại bao phủ toàn bộ vấn đề', 'Mỗi nhánh đều phải có dữ liệu định lượng đi kèm', 'Cây phải có đúng 3 tầng để đảm bảo đủ chi tiết'],
        answer: 1,
        explain: '<strong>Collectively Exhaustive</strong> = không bỏ sót. <strong>Mutually Exclusive</strong> = không trùng lặp. Cả hai cùng đảm bảo phân tích vừa đủ vừa không lãng phí.'
    },
    {
        id: 'q-tree-3', concept: 'issue-tree', type: 'apply',
        q: 'Với cây "Lợi nhuận = Doanh thu − Chi phí", dữ liệu cho thấy doanh thu gần như không đổi trong khi lợi nhuận giảm 15%. Bước hợp lý tiếp theo?',
        choices: ['Phân tích đều cả hai nhánh để chắc chắn không bỏ sót gì', 'Đào sâu nhánh chi phí, tạm gác nhánh doanh thu', 'Làm thêm khảo sát khách hàng để hiểu vì sao họ ít mua', 'Tăng ngân sách marketing để kéo doanh thu lên bù lại'],
        answer: 1,
        explain: 'Issue tree cho phép <strong>cắt tỉa</strong> nhánh đã được dữ liệu loại trừ. Đó là cách tiết kiệm thời gian — thay vì phân tích đều tay mọi thứ.'
    },

    // ===== Design Thinking =====
    {
        id: 'q-dt-1', concept: 'design-thinking', type: 'concept',
        q: 'Thứ tự 5 bước Design Thinking theo mô hình của Stanford d.school là gì?',
        choices: ['Define → Empathize → Prototype → Ideate → Test', 'Empathize → Define → Ideate → Prototype → Test', 'Ideate → Prototype → Test → Define → Empathize', 'Research → Build → Sell → Measure → Scale'],
        answer: 1,
        explain: 'Thấu hiểu → Định nghĩa → Tạo ý tưởng → Làm mẫu thử → Thử nghiệm. Thực tế có thể quay lui giữa các bước, nhưng luôn bắt đầu từ con người.'
    },
    {
        id: 'q-dt-2', concept: 'design-thinking', type: 'spot',
        q: 'Khi test prototype với người dùng, câu hỏi nào <strong>kém hiệu quả nhất</strong>?',
        choices: ['"Bạn đang nghĩ gì khi nhìn màn hình này?"', '"Bạn có thích tính năng này không?"', '"Hãy thử đặt một lịch khám cho tuần sau."', '"Lần gần nhất bạn đặt lịch khám, chuyện gì đã xảy ra?"'],
        answer: 1,
        explain: 'Câu hỏi "có thích không" dẫn dắt và người dùng thường trả lời lịch sự "có". <strong>Quan sát hành vi</strong> và hỏi về trải nghiệm thật cho thông tin đáng tin hơn nhiều.'
    },
    {
        id: 'q-dt-3', concept: 'design-thinking', type: 'apply',
        q: 'Muốn kiểm tra nhanh ý tưởng "đặt lịch khám bằng một nút gọi" cho người cao tuổi. Prototype nào phù hợp nhất giai đoạn đầu?',
        choices: ['App hoàn chỉnh chạy được trên cả iOS và Android', 'Bản phác giấy hoặc mockup bấm được, làm trong vài giờ', 'Hợp đồng thử nghiệm 3 tháng với một tổng đài bên ngoài', 'Bản đặc tả chi tiết 50 trang để đội kỹ thuật ước lượng'],
        answer: 1,
        explain: 'Prototype nên <strong>rẻ nhất có thể</strong> để trả lời câu hỏi cần kiểm chứng. Làm quá đẹp, quá đắt thì ngại vứt bỏ khi phát hiện sai.'
    },

    // ===== Tư duy giả thuyết =====
    {
        id: 'q-hypo-1', concept: 'hypothesis-driven', type: 'concept',
        q: 'Giả thuyết nào <strong>tốt nhất</strong> để bắt đầu phân tích việc khách hàng mới rời bỏ?',
        choices: ['"Trải nghiệm người dùng của chúng ta hiện chưa thật sự tốt."', '"Khách mới rời bỏ vì đơn đầu tiên giao mất hơn 45 phút."', '"Có thể có rất nhiều lý do khác nhau khiến khách rời bỏ."', '"Đối thủ cạnh tranh đang làm mọi thứ tốt hơn chúng ta."'],
        answer: 1,
        explain: 'Giả thuyết tốt phải <strong>cụ thể và bác bỏ được</strong>: có thể kiểm tra bằng dữ liệu thời gian giao và tỷ lệ quay lại. Các câu còn lại quá mơ hồ để chứng minh hay bác bỏ.'
    },
    {
        id: 'q-hypo-2', concept: 'hypothesis-driven', type: 'concept',
        q: 'Vì sao nên viết trước <strong>dữ liệu nào sẽ bác bỏ</strong> giả thuyết, trước khi thu thập dữ liệu?',
        choices: ['Để kế hoạch phân tích trông chuyên nghiệp hơn khi trình bày', 'Để tránh "dời cột gôn" khi dữ liệu bất lợi', 'Để giảm lượng dữ liệu cần thu thập xuống mức tối thiểu', 'Không cần thiết — cứ xem dữ liệu trước rồi mới diễn giải'],
        answer: 1,
        explain: 'Nếu không cam kết trước, khi dữ liệu nói "không", ta dễ tìm lý do để bỏ qua nó. Tiêu chí viết trước giữ cho phân tích trung thực.'
    },
    {
        id: 'q-hypo-3', concept: 'hypothesis-driven', type: 'apply',
        q: 'A/B test cho thấy miễn phí giao hàng đơn đầu gần như không cải thiện tỷ lệ quay lại. Phản ứng đúng là gì?',
        choices: ['Chạy test thêm vài tháng cho tới khi thấy kết quả tốt hơn', 'Ghi nhận bị bác bỏ, lập giả thuyết mới từ dữ liệu vừa có', 'Kết luận dữ liệu A/B test có lỗi vì trái với kỳ vọng ban đầu', 'Vẫn triển khai miễn phí giao hàng vì đã có kế hoạch từ trước'],
        answer: 1,
        explain: 'Bác bỏ giả thuyết sau vài tuần là <strong>thành công</strong> của phương pháp — rẻ hơn nhiều so với chạy sai chương trình cả năm. Hãy dùng dữ liệu mới (ví dụ khảo sát) để lập giả thuyết tiếp theo.'
    },

    // ===== Cynefin =====
    {
        id: 'q-cyn-1', concept: 'cynefin', type: 'apply',
        q: 'Hệ thống thanh toán sập toàn bộ lúc 20h tối Black Friday. Theo Cynefin, cách tiếp cận đúng là?',
        choices: ['Phân tích kỹ log để hiểu rõ nguyên nhân trước khi làm gì', 'Hành động ngay để ổn định (rollback, dự phòng), phân tích sau', 'Chạy nhiều thử nghiệm nhỏ song song để xem cách nào hiệu quả', 'Làm theo quy trình chuẩn và chờ ca trực sau tiếp nhận xử lý'],
        answer: 1,
        explain: 'Đây là vùng <strong>Hỗn loạn</strong>: Act → Sense → Respond. Ổn định trước để đưa tình huống về vùng có thể phân tích.'
    },
    {
        id: 'q-cyn-2', concept: 'cynefin', type: 'apply',
        q: 'Ban lãnh đạo muốn nhân viên chủ động chia sẻ kiến thức với nhau hơn (thay đổi văn hoá). Vấn đề này thuộc vùng nào?',
        choices: ['Rõ ràng — ban hành quy định bắt buộc chia sẻ là giải quyết xong', 'Phức tạp — thuê chuyên gia phân tích để tìm ra đáp án đúng', 'Phức hợp — thử nghiệm nhỏ an toàn, khuếch đại cái hiệu quả', 'Hỗn loạn — cần hành động ngay lập tức trước khi quá muộn'],
        answer: 2,
        explain: 'Văn hoá là hệ thống <strong>phức hợp</strong>: con người tương tác, thích nghi, kết quả chỉ thấy khi thử. Không có "best practice" nào chắc chắn chạy — cần Probe → Sense → Respond.'
    },
    {
        id: 'q-cyn-3', concept: 'cynefin', type: 'apply',
        q: 'Máy phát điện của nhà máy hỏng, cần tìm lỗi và sửa. Đây là vùng nào?',
        choices: ['Rõ ràng (Clear)', 'Phức tạp (Complicated)', 'Phức hợp (Complex)', 'Hỗn loạn (Chaotic)'],
        answer: 1,
        explain: 'Quan hệ nhân–quả tồn tại và <strong>chuyên gia có thể phân tích</strong> ra đáp án: Sense → Analyze → Respond. Máy móc có thể tháo ra, hiểu từng bộ phận.'
    },
    {
        id: 'q-cyn-4', concept: 'cynefin', type: 'spot',
        q: 'Công ty sao chép nguyên xi chiến lược ra mắt của đối thủ để vào một thị trường hoàn toàn mới, tin rằng "họ làm thành công thì mình cũng vậy". Sai lầm là gì?',
        choices: ['Áp dụng best practice cho vấn đề phức hợp', 'Phân tích quá lâu khi đang hỗn loạn', 'Không thuê chuyên gia', 'Không có sai lầm, học đối thủ là tốt'],
        answer: 0,
        explain: 'Thị trường mới là vùng <strong>phức hợp</strong> — điều hiệu quả ở bối cảnh này chưa chắc hiệu quả ở bối cảnh khác. Nên chạy các thử nghiệm nhỏ để học trước khi đặt cược lớn.'
    },

    // ===== First Principles =====
    {
        id: 'q-fp-1', concept: 'first-principles', type: 'concept',
        q: 'Điểm khác biệt cốt lõi giữa suy luận từ nguyên lý đầu tiên và suy luận loại suy là gì?',
        choices: ['Nguyên lý đầu tiên luôn nhanh hơn vì bỏ qua được bước nghiên cứu', 'Một bên dựa vào "người khác làm thế", một bên phân rã tới sự thật cơ bản', 'Loại suy chỉ dùng trong khoa học, nguyên lý đầu tiên dùng trong kinh doanh', 'Hai cách giống nhau về bản chất, chỉ khác nhau ở tên gọi'],
        answer: 1,
        explain: 'Loại suy nhanh nhưng giữ ta trong giới hạn của cái đã có. First principles chậm, tốn công, nhưng có thể tạo đột phá (như bài toán giá pin xe điện).'
    },
    {
        id: 'q-fp-2', concept: 'first-principles', type: 'concept',
        q: 'Nguyên tắc "Hàng rào của Chesterton" khuyên gì trước khi bỏ một quy định có vẻ vô lý?',
        choices: ['Bỏ ngay vì mọi quy định cũ đều lạc hậu', 'Tìm hiểu vì sao nó được đặt ra trước đã', 'Giữ nguyên mọi quy định để an toàn', 'Hỏi ý kiến số đông rồi bỏ phiếu'],
        answer: 1,
        explain: 'First principles không có nghĩa là phá bỏ mọi quy ước. Hiểu <strong>lý do tồn tại</strong> của hàng rào rồi mới quyết định giữ hay dỡ.'
    },
    {
        id: 'q-fp-3', concept: 'first-principles', type: 'tool',
        q: 'Bạn muốn giảm chi phí sản xuất một sản phẩm đi <strong>10 lần</strong> (không phải 10%), và ai cũng nói "ngành này vốn đắt". Cách tư duy phù hợp nhất?',
        choices: ['Benchmark với đối thủ rồi cắt giảm 10%', 'First Principles Thinking', 'Pareto 80/20', 'Six Thinking Hats'],
        answer: 1,
        explain: 'Mục tiêu đột phá + niềm tin "vốn dĩ là vậy" là tín hiệu dùng <strong>first principles</strong>: sản phẩm làm từ gì, chi phí thật của từng phần là bao nhiêu, phần chênh lệch đến từ đâu?'
    },

    // ===== Brainstorming =====
    {
        id: 'q-brain-1', concept: 'brainstorming', type: 'concept',
        q: 'Theo nghiên cứu tâm lý học, cách tổ chức nào thường tạo ra <strong>nhiều ý tưởng hơn</strong>?',
        choices: ['Cả nhóm nói to tự do ngay từ đầu', 'Mỗi người nghĩ riêng trước, sau đó gộp và chia sẻ', 'Chỉ trưởng nhóm đưa ý tưởng, các thành viên góp ý', 'Tranh luận để chọn ý tưởng tốt nhất ngay'],
        answer: 1,
        explain: 'Nhóm nói to bị "chặn sản xuất" (chờ lượt thì quên ý), sợ bị đánh giá và ỷ lại. <strong>Nghĩ riêng trước</strong> rồi gộp lại cho nhiều ý tưởng hơn và đa dạng hơn.'
    },
    {
        id: 'q-brain-2', concept: 'brainstorming', type: 'spot',
        q: 'Mở đầu buổi brainstorm, trưởng phòng nói: "Tôi nghĩ nên làm TikTok. Mọi người thấy sao?" Vấn đề là gì?',
        choices: ['TikTok không phù hợp với mọi ngành hàng nên cần cân nhắc thêm', 'Sếp nói trước khiến mọi người neo theo, ngại đưa hướng khác', 'Nên dùng Facebook vì có tệp khách hàng lớn tuổi hơn TikTok', 'Không có vấn đề gì, sếp chỉ đang gợi ý để khởi động buổi họp'],
        answer: 1,
        explain: 'Ý kiến đầu tiên, nhất là của sếp, trở thành <strong>mỏ neo</strong>. Người lãnh đạo nên nói sau cùng, hoặc cả nhóm viết ý tưởng riêng trước.'
    },
    {
        id: 'q-brain-3', concept: 'brainstorming', type: 'concept',
        q: 'Điều nào <strong>không phải</strong> là một trong 4 quy tắc brainstorming của Alex Osborn?',
        choices: ['Hoãn phê bình', 'Số lượng trước chất lượng', 'Chỉ đưa ra ý tưởng khả thi', 'Kết hợp và phát triển ý tưởng của người khác'],
        answer: 2,
        explain: 'Ngược lại, Osborn <strong>khuyến khích ý tưởng "điên"</strong> — dễ thuần hoá một ý tưởng táo bạo hơn là làm một ý tưởng nhạt trở nên táo bạo.'
    },

    // ===== Mind Mapping =====
    {
        id: 'q-mind-1', concept: 'mind-mapping', type: 'tool',
        q: 'Bạn vừa nhận một chủ đề mới còn mơ hồ và muốn nhanh chóng khám phá mọi khía cạnh liên quan trước khi phân tích chặt chẽ. Công cụ phù hợp nhất?',
        choices: ['Mind Map', 'Ma trận quyết định', 'Pre-mortem', 'Biểu đồ Pareto'],
        answer: 0,
        explain: '<strong>Mind map</strong> tự do, liên tưởng — hợp với giai đoạn khám phá. Khi cần phân tích nghiêm ngặt, chuyển sang Issue tree.'
    },
    {
        id: 'q-mind-2', concept: 'mind-mapping', type: 'concept',
        q: 'Nguyên tắc viết nội dung trên mỗi nhánh mind map là gì?',
        choices: ['Viết câu đầy đủ để người khác hiểu', 'Một từ khoá ngắn cho mỗi nhánh', 'Càng nhiều chữ càng tốt', 'Chỉ dùng hình vẽ, không dùng chữ'],
        answer: 1,
        explain: 'Từ khoá ngắn giúp nhìn tổng thể nhanh và kích thích liên tưởng. Câu dài biến mind map thành một văn bản rối rắm.'
    },
    {
        id: 'q-mind-3', concept: 'mind-mapping', type: 'concept',
        q: 'Khác biệt chính giữa mind map và issue tree là gì?',
        choices: ['Mind map chỉ dành cho học sinh, issue tree dành cho người đi làm', 'Mind map tự do liên tưởng; issue tree tuân thủ MECE', 'Issue tree bắt buộc phải vẽ bằng phần mềm chuyên dụng', 'Không có khác biệt, chỉ là hai tên gọi của cùng một công cụ'],
        answer: 1,
        explain: 'Hai công cụ bổ sung nhau: mind map để <strong>khám phá</strong> lúc đầu, issue tree để <strong>phân tích</strong> chặt chẽ sau đó.'
    },

    // ===== Divide & Conquer =====
    {
        id: 'q-divide-1', concept: 'divide-conquer', type: 'apply',
        q: 'App bắt đầu lỗi sau khi gộp 128 commit. Dùng phương pháp chia đôi (bisection), cần kiểm tra <strong>tối đa</strong> bao nhiêu lần để tìm commit gây lỗi?',
        choices: ['7 lần', '64 lần', '128 lần', '12 lần'],
        answer: 0,
        explain: 'Mỗi lần kiểm tra loại bỏ một nửa khả năng: 128 → 64 → 32 → 16 → 8 → 4 → 2 → 1, tức <strong>7 lần</strong> (2⁷ = 128).'
    },
    {
        id: 'q-divide-2', concept: 'divide-conquer', type: 'spot',
        q: 'Mỗi phòng ban đều đạt KPI riêng xuất sắc, nhưng lợi nhuận toàn công ty lại giảm. Đây là rủi ro nào của việc chia nhỏ vấn đề?',
        choices: ['Vấn đề chưa được chia đủ nhỏ nên mỗi phòng ban vẫn quá tải', 'Tối ưu cục bộ làm hỏng tổng thể — thiếu bước ghép', 'Chia theo thời gian thay vì theo chức năng nên bị lệch', 'Nhân viên các phòng ban chưa đủ năng lực chuyên môn'],
        answer: 1,
        explain: 'Các phần tốt không đảm bảo tổng thể tốt. Ví dụ sales đạt doanh số bằng giảm giá sâu, kho tối ưu bằng cách ít nhập hàng → mất đơn. Luôn cần bước <strong>Combine</strong>.'
    },
    {
        id: 'q-divide-3', concept: 'divide-conquer', type: 'concept',
        q: 'Dấu hiệu cho thấy một việc đã được chia <strong>đủ nhỏ</strong>?',
        choices: ['Nó mất ít nhất một tuần để đảm bảo đủ ý nghĩa', 'Bắt tay làm được ngay hôm nay, biết khi nào xong', 'Nó có tên gọi nghe đủ chuyên nghiệp để báo cáo', 'Cần ít nhất 3 người cùng phối hợp thực hiện'],
        answer: 1,
        explain: '"Viết luận văn" không bắt đầu được; "đọc 3 bài báo về chủ đề X trong 2 giờ" thì được. Việc đủ nhỏ giúp vượt qua trì hoãn và ước lượng chính xác hơn.'
    },

    // ===== Ma trận ưu tiên =====
    {
        id: 'q-prio-1', concept: 'prioritization', type: 'apply',
        q: 'Việc nào thuộc ô <strong>"Hố tiền"</strong> (tác động thấp, công sức cao) trong ma trận Impact–Effort?',
        choices: ['Sửa lỗi chính tả ở trang thanh toán — 10 phút', 'Xây lại toàn bộ trang quản trị nội bộ chỉ 3 người dùng, mất 4 tháng', 'Thêm ví điện tử phổ biến vào thanh toán — 1 tuần, tăng chuyển đổi rõ rệt', 'Xây hệ thống gợi ý sản phẩm — 3 tháng, dự kiến tăng doanh thu 15%'],
        answer: 1,
        explain: 'Tốn 4 tháng cho 3 người dùng là <strong>hố tiền</strong> → bỏ. Phương án 1 là việc lấp chỗ trống, phương án 3 là quick win, phương án 4 là dự án lớn.'
    },
    {
        id: 'q-prio-2', concept: 'prioritization', type: 'apply',
        q: 'Tính điểm RICE: Reach = 1.000 người, Impact = 2, Confidence = 50%, Effort = 2 người-tháng.',
        choices: ['500', '1.000', '2.000', '250'],
        answer: 0,
        explain: 'RICE = Reach × Impact × Confidence ÷ Effort = 1.000 × 2 × 0,5 ÷ 2 = <strong>500</strong>.'
    },
    {
        id: 'q-prio-3', concept: 'prioritization', type: 'concept',
        q: 'Theo ma trận Eisenhower, việc "quan trọng nhưng không khẩn cấp" (tập thể dục, học kỹ năng mới, phòng ngừa sự cố) nên xử lý thế nào?',
        choices: ['Làm ngay lập tức, gác lại mọi việc khác đang làm', 'Lên lịch cụ thể — vùng tạo giá trị lâu dài', 'Uỷ quyền cho người khác làm để tiết kiệm thời gian', 'Bỏ qua vì không gấp, khi nào gấp hãy làm'],
        answer: 1,
        explain: 'Việc quan trọng mà không gấp luôn bị việc gấp lấn át nếu không được <strong>lên lịch cụ thể</strong>. Đầu tư vào vùng này làm giảm số khủng hoảng về sau.'
    },
    {
        id: 'q-prio-4', concept: 'prioritization', type: 'tool',
        q: 'Nhóm có 15 ý tưởng cải tiến, nguồn lực chỉ đủ làm 3–4 cái trong quý. Cần chọn nhanh, cả nhóm cùng tham gia. Công cụ nào phù hợp nhất?',
        choices: ['Ma trận Impact–Effort', 'First Principles Thinking', 'Chuỗi 5 Whys cho từng ý tưởng', 'Sơ đồ Fishbone'],
        answer: 0,
        explain: '<strong>Impact–Effort</strong> nhanh, trực quan, dễ làm theo nhóm — hợp để lọc danh sách dài. Khi còn 2–3 phương án khó chọn, có thể dùng thêm ma trận quyết định.'
    },

    // ===== Ma trận quyết định =====
    {
        id: 'q-dm-1', concept: 'decision-matrix', type: 'spot',
        q: 'Chấm điểm xong, nhóm thấy phương án mình thích bị thua, bèn tăng trọng số cho tiêu chí mà phương án đó mạnh. Sai lầm gì?',
        choices: ['Tính tổng điểm có trọng số bị sai công thức', 'Chỉnh trọng số sau khi chấm điểm để hợp thức hoá lựa chọn', 'Dùng quá ít tiêu chí nên bảng chưa đủ toàn diện', 'Không có sai lầm, trọng số có thể thay đổi bất kỳ lúc nào'],
        answer: 1,
        explain: 'Trọng số phải được chốt <strong>trước</strong> khi chấm điểm. Chỉnh sau là dùng công cụ để hợp thức hoá cảm tính — mất hết ý nghĩa của ma trận.'
    },
    {
        id: 'q-dm-2', concept: 'decision-matrix', type: 'apply',
        q: 'Ba tiêu chí có trọng số 50%, 30%, 20%. Phương án X được chấm lần lượt 4, 2, 5 (thang 1–5). Tổng điểm có trọng số của X?',
        choices: ['3,6', '3,7', '11', '3,0'],
        answer: 0,
        explain: '0,5 × 4 + 0,3 × 2 + 0,2 × 5 = 2 + 0,6 + 1 = <strong>3,6</strong>.'
    },
    {
        id: 'q-dm-3', concept: 'decision-matrix', type: 'concept',
        q: 'Mục đích của <strong>phân tích độ nhạy</strong> trong ma trận quyết định là gì?',
        choices: ['Kiểm tra xem các con số trong bảng có bị nhập sai không', 'Xem kết quả có đảo khi đổi trọng số một chút không', 'Tăng số lượng tiêu chí để đánh giá được toàn diện hơn', 'Loại bỏ các phương án có tổng điểm thấp hơn trung bình'],
        answer: 1,
        explain: 'Nếu kết quả thay đổi khi trọng số dịch 10%, quyết định thực chất phụ thuộc vào câu hỏi "ta coi trọng điều gì hơn" — đó mới là cuộc thảo luận cần có.'
    },
    {
        id: 'q-dm-4', concept: 'decision-matrix', type: 'tool',
        q: 'Bạn cần chọn 1 trong 4 nhà cung cấp dựa trên giá, chất lượng, thời gian giao và dịch vụ hậu mãi — và phải giải thích rõ lựa chọn cho ban giám đốc. Công cụ phù hợp nhất?',
        choices: ['Ma trận quyết định có trọng số', 'Mind map các yếu tố liên quan', 'Ước lượng Fermi cho từng nhà cung cấp', 'SCAMPER để cải tiến từng phương án'],
        answer: 0,
        explain: 'Nhiều phương án × nhiều tiêu chí đánh đổi nhau + cần minh bạch → <strong>ma trận quyết định</strong>.'
    },

    // ===== SCAMPER =====
    {
        id: 'q-scamper-1', concept: 'scamper', type: 'apply',
        q: 'Hãng hàng không giá rẻ bỏ suất ăn miễn phí và hạng thương gia để giảm giá vé. Đây là chữ nào trong SCAMPER?',
        choices: ['S — Substitute (thay thế)', 'C — Combine (kết hợp)', 'E — Eliminate (loại bỏ)', 'R — Rearrange (sắp xếp lại)'],
        answer: 2,
        explain: '<strong>Eliminate</strong> — loại bỏ những thành phần không thiết yếu để tạo ra mô hình kinh doanh mới.'
    },
    {
        id: 'q-scamper-2', concept: 'scamper', type: 'apply',
        q: 'Airbnb biến phòng trống trong nhà dân thành chỗ ở cho du khách. Đây là chữ nào?',
        choices: ['P — Put to other use (dùng vào việc khác)', 'M — Modify (biến đổi, phóng to/thu nhỏ)', 'A — Adapt (điều chỉnh từ ý tưởng khác)', 'C — Combine (kết hợp hai thứ với nhau)'],
        answer: 0,
        explain: '<strong>Put to other use</strong> — dùng một tài nguyên sẵn có (phòng trống) cho mục đích khác.'
    },
    {
        id: 'q-scamper-3', concept: 'scamper', type: 'tool',
        q: 'Bạn muốn tìm ý tưởng cải tiến cho một sản phẩm đang bán, nhưng buổi brainstorm cứ quanh quẩn vài ý quen thuộc. Công cụ nào giúp tạo ý tưởng có hệ thống?',
        choices: ['SCAMPER', '5 Whys', 'Pareto', 'Cynefin'],
        answer: 0,
        explain: '<strong>SCAMPER</strong> cung cấp 7 góc biến đổi có sẵn cho một đối tượng đã tồn tại — rất hợp khi brainstorm bị cạn ý.'
    },

    // ===== Six Hats =====
    {
        id: 'q-hats-1', concept: 'six-hats', type: 'apply',
        q: 'Câu "Theo số liệu quý trước, 40% khách hàng dùng tính năng này ít nhất một lần/tuần" thuộc chiếc mũ nào?',
        choices: ['⚪ Trắng', '🟡 Vàng', '🔴 Đỏ', '🟢 Xanh lá'],
        answer: 0,
        explain: 'Mũ <strong>Trắng</strong> — dữ kiện, thông tin khách quan, không kèm đánh giá tốt/xấu.'
    },
    {
        id: 'q-hats-2', concept: 'six-hats', type: 'concept',
        q: 'Vì sao <strong>không nên</strong> gán cố định mỗi người một chiếc mũ trong suốt buổi họp?',
        choices: ['Vì số người trong nhóm thường không bằng số mũ', 'Vì mọi người lại đối đầu theo vai được gán', 'Vì tốn nhiều thời gian phân vai ở đầu buổi họp', 'Không có lý do — gán cố định là cách làm chuẩn'],
        answer: 1,
        explain: 'Tinh thần của Six Hats là <strong>cả nhóm cùng nhìn một hướng tại một thời điểm</strong>. Gán cố định thì người đội mũ Đen luôn phản đối, người đội mũ Vàng luôn ủng hộ — lại thành tranh cãi.'
    },
    {
        id: 'q-hats-3', concept: 'six-hats', type: 'tool',
        q: 'Mỗi lần đánh giá đề xuất mới, cuộc họp lại thành cuộc cãi vã giữa "phe lạc quan" và "phe thận trọng". Kỹ thuật nào phù hợp nhất?',
        choices: ['Six Thinking Hats', 'Fermi', 'Divide & Conquer', 'Mind map'],
        answer: 0,
        explain: '<strong>Six Hats</strong> tách các góc nhìn theo lượt: ai cũng nói lợi ích (Vàng), rồi ai cũng nói rủi ro (Đen) — thay vì hai phe công kích nhau.'
    },

    // ===== Reframing =====
    {
        id: 'q-reframe-1', concept: 'reframing', type: 'apply',
        q: 'Cư dân phàn nàn thang máy chậm. Cách đặt vấn đề nào dẫn tới giải pháp rẻ là treo gương cạnh thang?',
        choices: ['"Thang máy chạy quá chậm"', '"Việc chờ đợi gây khó chịu"', '"Toà nhà thiếu thang máy"', '"Cư dân quá khó tính"'],
        answer: 1,
        explain: 'Đổi frame từ "tốc độ thang" sang "trải nghiệm chờ" mở ra cả nhóm giải pháp về <strong>cảm nhận</strong>: gương, màn hình, nhạc — rẻ hơn nhiều so với thay động cơ.'
    },
    {
        id: 'q-reframe-2', concept: 'reframing', type: 'spot',
        q: 'Câu hỏi "How Might We" nào <strong>đã chứa sẵn giải pháp</strong> (quá hẹp)?',
        choices: ['"Làm thế nào để khách tìm được câu trả lời mà không cần gọi tổng đài?"', '"Làm thế nào để thêm chatbot vào website?"', '"Làm thế nào để khách biết tình trạng đơn hàng mọi lúc?"', '"Làm thế nào để giảm số cuộc gọi hỏi lại về cùng một vấn đề?"'],
        answer: 1,
        explain: '"Thêm chatbot" là một giải pháp cụ thể — câu hỏi chỉ còn bàn cách làm chatbot, bỏ qua các lựa chọn khác như FAQ, thông báo tự động, sửa quy trình.'
    },
    {
        id: 'q-reframe-3', concept: 'reframing', type: 'concept',
        q: 'Dự án chống suy dinh dưỡng của Jerry và Monique Sternin ở Việt Nam (thập niên 1990) bắt đầu từ câu hỏi nào?',
        choices: ['"Vì sao trẻ em ở vùng này bị suy dinh dưỡng nhiều?"', '"Vì sao một số trẻ nhà nghèo vẫn khoẻ mạnh?"', '"Cần bao nhiêu tiền viện trợ lương thực mỗi năm?"', '"Chính quyền địa phương nên làm gì để hỗ trợ?"'],
        answer: 1,
        explain: 'Tìm <strong>điểm sáng</strong> (positive deviance): các gia đình nghèo có con khoẻ mạnh đã cho trẻ ăn thêm tôm, cua nhỏ và rau khoai lang, chia nhiều bữa nhỏ — giải pháp sẵn có, rẻ, phù hợp văn hoá địa phương.'
    },

    // ===== Pre-mortem =====
    {
        id: 'q-pre-1', concept: 'premortem', type: 'concept',
        q: 'Câu mở đầu đúng của một buổi pre-mortem là gì?',
        choices: ['"Mọi người thấy kế hoạch này có rủi ro gì không?"', '"12 tháng sau, dự án đã thất bại hoàn toàn. Vì sao?"', '"Nếu dự án thất bại, ai sẽ là người chịu trách nhiệm?"', '"Hãy liệt kê tất cả các điểm mạnh của kế hoạch này."'],
        answer: 1,
        explain: 'Giả định thất bại <strong>đã xảy ra</strong> ("prospective hindsight") khiến việc tìm lý do trở thành nhiệm vụ, và nghiên cứu cho thấy giúp nêu lý do tốt hơn so với hỏi "có rủi ro không".'
    },
    {
        id: 'q-pre-2', concept: 'premortem', type: 'concept',
        q: 'Vì sao pre-mortem thường hiệu quả hơn câu hỏi "Có rủi ro gì không?"',
        choices: ['Vì nó mất ít thời gian hơn một buổi họp đánh giá rủi ro thông thường', 'Vì biến việc tìm lý do thất bại thành nhiệm vụ, ai cũng dám nói', 'Vì nó không cần người điều phối, ai cũng tự làm được', 'Vì nó chỉ tập trung vào rủi ro kỹ thuật, dễ đo lường hơn'],
        answer: 1,
        explain: 'Trong không khí lạc quan chung, nêu rủi ro là "phá đám". Pre-mortem <strong>cho phép</strong> và thậm chí yêu cầu mọi người nghĩ tiêu cực có cấu trúc.'
    },
    {
        id: 'q-pre-3', concept: 'premortem', type: 'spot',
        q: 'Sau pre-mortem, nhóm có danh sách 30 rủi ro, lưu vào thư mục chung rồi bắt đầu dự án như kế hoạch cũ. Thiếu gì?',
        choices: ['Thiếu thêm rủi ro — 30 rủi ro là chưa đủ cho dự án lớn', 'Chuyển top rủi ro thành biện pháp, người theo dõi, tín hiệu sớm', 'Thiếu chữ ký phê duyệt của giám đốc vào danh sách rủi ro', 'Không thiếu gì — lưu lại để tra cứu khi có sự cố là đủ'],
        answer: 1,
        explain: 'Danh sách rủi ro không hành động chỉ là giấy. Giá trị của pre-mortem nằm ở việc <strong>thay đổi kế hoạch</strong>.'
    },
    {
        id: 'q-pre-4', concept: 'premortem', type: 'tool',
        q: 'Dự án lớn sắp khởi động, cả nhóm cực kỳ hào hứng và chưa ai nêu lo ngại nào. Nên làm gì trước khi bắt đầu?',
        choices: ['Tổ chức pre-mortem', 'Vẽ mind map', 'Tính RICE', 'Không cần gì, tinh thần tốt là đủ'],
        answer: 0,
        explain: 'Đồng thuận quá nhanh là tín hiệu nguy cơ groupthink và lạc quan quá mức. <strong>Pre-mortem</strong> là liều thuốc có cấu trúc cho tình huống này.'
    },

    // ===== Abstraction =====
    {
        id: 'q-abs-1', concept: 'abstraction', type: 'apply',
        q: 'Bệnh nhân chờ khám lâu, tổng đài để khách chờ lâu, thang máy chờ lâu. Trừu tượng hoá lên, cả ba cùng là dạng bài toán nào?',
        choices: ['Bài toán hàng đợi', 'Bài toán tối đa lợi nhuận', 'Bài toán marketing', 'Bài toán tuyển dụng'],
        answer: 0,
        explain: 'Cả ba là <strong>hàng đợi</strong>: khách đến → chờ → được phục vụ. Các đòn bẩy đã biết (giảm thời gian phục vụ, thêm quầy, đặt lịch, phân luồng, quản lý cảm nhận) áp dụng được cho cả ba.'
    },
    {
        id: 'q-abs-2', concept: 'abstraction', type: 'spot',
        q: 'Sau khi phân tích, nhóm kết luận: "Vấn đề cốt lõi là con người." Điều gì chưa ổn?',
        choices: ['Kết luận quá cụ thể, cần khái quát hoá thêm một bậc nữa', 'Trừu tượng quá cao, không chỉ ra hành động cụ thể nào', 'Kết luận thiếu số liệu tài chính để thuyết phục lãnh đạo', 'Không có vấn đề gì — con người luôn là gốc của mọi vấn đề'],
        answer: 1,
        explain: 'Trừu tượng hoá giúp thấy dạng bài, nhưng phải <strong>cụ thể hoá lại</strong> để hành động: người nào, hành vi nào, trong bối cảnh nào.'
    },
    {
        id: 'q-abs-3', concept: 'abstraction', type: 'concept',
        q: 'Trong thang trừu tượng, hỏi "Tại sao?" đưa ta đi về đâu, hỏi "Như thế nào?" đưa ta đi về đâu?',
        choices: ['Cả hai câu hỏi đều đưa ta đi xuống mức chi tiết hơn', '"Tại sao?" lên mục tiêu khái quát; "Như thế nào?" xuống hành động', '"Tại sao?" xuống chi tiết; "Như thế nào?" lên mức khái quát hơn', 'Hai câu hỏi này không liên quan gì đến thang trừu tượng'],
        answer: 1,
        explain: '"Vì sao cần xe hơi?" → "để đi làm" → "để có thu nhập" (lên cao). "Đi làm như thế nào?" → xe buýt, xe máy, làm từ xa (xuống thấp, nhiều lựa chọn hơn).'
    },

    // ===== Analogy =====
    {
        id: 'q-ana-1', concept: 'analogy', type: 'concept',
        q: 'Lời giải bài toán khối u của Duncker, gợi ý từ câu chuyện vị tướng tấn công pháo đài, là gì?',
        choices: ['Dùng một tia cực mạnh trong thời gian thật ngắn', 'Dùng nhiều tia yếu từ nhiều hướng, hội tụ tại khối u', 'Phẫu thuật mở để đưa nguồn phát tia lại gần khối u', 'Dùng tia yếu liên tục trong nhiều tháng cho tới khi u nhỏ lại'],
        answer: 1,
        explain: 'Cấu trúc chung: <strong>chia lực mạnh thành nhiều phần yếu đi theo nhiều ngả, hội tụ tại đích</strong>. Đây cũng là nguyên lý của phương pháp xạ phẫu "dao gamma".'
    },
    {
        id: 'q-ana-2', concept: 'analogy', type: 'concept',
        q: 'Loại tương đồng nào tạo nên loại suy mạnh nhất?',
        choices: ['Tương đồng bề mặt — hai thứ trông giống nhau', 'Tương đồng cấu trúc — cùng quan hệ bên trong', 'Tương đồng về tên gọi hoặc thuật ngữ chuyên ngành', 'Tương đồng về thời điểm xảy ra trong lịch sử'],
        answer: 1,
        explain: 'Khối u và pháo đài trông chẳng liên quan, nhưng cùng <strong>cấu trúc</strong>. Tương đồng bề mặt dễ thấy hơn nhưng dễ dẫn tới loại suy sai.'
    },
    {
        id: 'q-ana-3', concept: 'analogy', type: 'apply',
        q: 'Bệnh viện nhi Great Ormond Street (London) cải thiện quy trình chuyển bệnh nhân từ phòng mổ sang ICU bằng cách học từ đâu?',
        choices: ['Đội thay lốp pit-stop đua xe F1', 'Quy trình lên máy bay của hãng giá rẻ', 'Bếp của chuỗi nhà hàng thức ăn nhanh', 'Quy trình sơ tán thương binh của quân đội'],
        answer: 0,
        explain: 'Cấu trúc chung: chuyển giao nhanh, nhiều người phối hợp, không được sai sót. Đội <strong>pit-stop F1</strong> là chuyên gia của đúng cấu trúc đó — một loại suy xa rất hiệu quả.'
    },

    // ===== Fermi =====
    {
        id: 'q-fermi-1', concept: 'fermi', type: 'concept',
        q: 'Mục tiêu chính của ước lượng Fermi là gì?',
        choices: ['Tính ra con số chính xác tuyệt đối mà không cần dữ liệu', 'Có con số đúng bậc độ lớn, đủ để ra quyết định', 'Thay thế hoàn toàn việc thu thập dữ liệu thực tế', 'Gây ấn tượng về khả năng tính nhẩm trong phỏng vấn'],
        answer: 1,
        explain: 'Nhiều quyết định chỉ cần biết <strong>bậc độ lớn</strong>. Fermi cho câu trả lời "đủ tốt" trong vài phút, khi dữ liệu chưa có hoặc đắt.'
    },
    {
        id: 'q-fermi-2', concept: 'fermi', type: 'apply',
        q: 'Bạn chỉ biết một đại lượng nằm đâu đó trong khoảng từ 100 đến 10.000. Dùng trung bình nhân, ước tính giữa hợp lý là bao nhiêu?',
        choices: ['1.000', '5.050', '100', '10.000'],
        answer: 0,
        explain: '√(100 × 10.000) = <strong>1.000</strong>. Khi khoảng trải dài nhiều bậc, trung bình nhân hợp lý hơn trung bình cộng (5.050).'
    },
    {
        id: 'q-fermi-3', concept: 'fermi', type: 'apply',
        q: 'Một thành phố có 2 triệu hộ gia đình; khoảng 30% hộ có máy lọc nước; mỗi máy thay 3 lõi lọc mỗi năm. Ước tính số lõi lọc bán ra mỗi năm?',
        choices: ['Khoảng 1,8 triệu', 'Khoảng 600 nghìn', 'Khoảng 6 triệu', 'Khoảng 180 nghìn'],
        answer: 0,
        explain: '2.000.000 × 30% × 3 = <strong>1.800.000</strong> lõi/năm. Đừng quên kiểm tra chéo bằng một cách khác (ví dụ từ doanh số các nhà phân phối lớn).'
    },
    {
        id: 'q-fermi-4', concept: 'fermi', type: 'spot',
        q: 'Sau ước lượng Fermi với các giả định sai số ±50%, bạn báo cáo: "Thị trường có đúng 9.583 tiệm." Vấn đề là gì?',
        choices: ['Con số quá nhỏ so với quy mô thị trường thực tế', 'Chính xác giả tạo — nên làm tròn và nêu khoảng', 'Nên dùng đơn vị "nghìn tiệm" để dễ đọc hơn', 'Không có vấn đề, càng chính xác càng thuyết phục'],
        answer: 1,
        explain: 'Độ chính xác của kết quả không thể cao hơn độ chính xác của giả định. Nên báo "<strong>khoảng 10.000</strong>, dao động 5.000–20.000".'
    },

    // ===== Occam's Razor =====
    {
        id: 'q-occam-1', concept: 'occams-razor', type: 'apply',
        q: 'Doanh số online giảm 50% đột ngột ngay sau khi website được cập nhật tối qua. Nên kiểm tra điều gì <strong>đầu tiên</strong>?',
        choices: ['Đối thủ có đang chạy chiến dịch phá giá bí mật không', 'Tracking hoặc trang thanh toán có lỗi sau bản cập nhật không', 'Thói quen mua sắm online của khách hàng có đang thay đổi không', 'Nền kinh tế có đang bước vào giai đoạn suy thoái không'],
        answer: 1,
        explain: 'Giải thích cần ít giả định nhất và khớp thời điểm: <strong>bản cập nhật tối qua</strong> gây lỗi đo lường hoặc lỗi thanh toán. Kiểm tra cái rẻ và có khả năng cao trước.'
    },
    {
        id: 'q-occam-2', concept: 'occams-razor', type: 'concept',
        q: "Trong giải quyết vấn đề, Occam's Razor chủ yếu giúp quyết định điều gì?",
        choices: ['Giải thích nào chắc chắn đúng, không cần kiểm chứng thêm', 'Thứ tự kiểm tra giả thuyết — đơn giản trước', 'Nên phân bổ bao nhiêu ngân sách cho việc điều tra', 'Ai là người phải chịu trách nhiệm cho sự cố'],
        answer: 1,
        explain: 'Occam là <strong>heuristic chọn thứ tự</strong>, không phải định luật. Nếu dữ liệu bác bỏ giải thích đơn giản, phải chuyển sang giải thích phức tạp hơn.'
    },
    {
        id: 'q-occam-3', concept: 'occams-razor', type: 'apply',
        q: "Đồng nghiệp gửi thiếu tài liệu trước cuộc họp quan trọng. Theo Hanlon's Razor, cách diễn giải hợp lý nhất?",
        choices: ['Họ cố tình làm vậy để bạn gặp khó trong cuộc họp', 'Nhiều khả năng họ quên — hỏi lại nhẹ nhàng', 'Họ đang muốn cạnh tranh vị trí với bạn trong nhóm', 'Họ không coi trọng cuộc họp và công việc của bạn'],
        answer: 1,
        explain: 'Đừng gán cho ác ý những gì có thể giải thích bằng <strong>sơ suất</strong>. Cách nghĩ này giữ quan hệ làm việc tốt và thường đúng hơn.'
    },

    // ===== Pareto =====
    {
        id: 'q-pareto-1', concept: 'pareto', type: 'apply',
        q: 'Khiếu nại tháng này: Giao trễ 42%, Giao sai hàng 24%, Hàng hư hỏng 14%, Thái độ nhân viên 8%, Hoàn tiền chậm 6%, Khác 6%. Nên tập trung vào đâu trước?',
        choices: ['Chia đều nguồn lực cho cả 6 nhóm để công bằng', 'Ba nhóm đầu — chiếm 80% khiếu nại', 'Thái độ nhân viên, vì ảnh hưởng trực tiếp tới hình ảnh', 'Nhóm "Khác", vì chưa rõ bên trong có vấn đề gì'],
        answer: 1,
        explain: 'Ba nhóm đầu cộng dồn <strong>80%</strong> và đều thuộc khâu kho vận — tập trung vào đây cho tác động lớn nhất với nguồn lực có hạn.'
    },
    {
        id: 'q-pareto-2', concept: 'pareto', type: 'concept',
        q: 'Phát biểu nào về nguyên tắc 80/20 là <strong>đúng</strong>?',
        choices: ['Luôn đúng chính xác: đúng 80% kết quả đến từ đúng 20% nguyên nhân', 'Là hình ảnh cho phân bố lệch; tỷ lệ thật phải kiểm bằng dữ liệu', 'Hai con số luôn phải cộng lại bằng 100, như 70/30 hay 90/10', 'Chỉ áp dụng được trong kinh tế học và kinh doanh'],
        answer: 1,
        explain: 'Thực tế có thể là 90/10, 70/30… và có những hệ thống phân bố khá đều. <strong>Dữ liệu</strong> quyết định, không phải con số thần kỳ.'
    },
    {
        id: 'q-pareto-3', concept: 'pareto', type: 'spot',
        q: 'Công ty quyết định bỏ qua nhóm lỗi bảo mật vì "chỉ chiếm 1% tổng số sự cố — theo Pareto thì không đáng ưu tiên". Sai ở đâu?',
        choices: ['Tính phần trăm sai, lỗi bảo mật thực ra chiếm nhiều hơn 1%', 'Bỏ qua lỗi hiếm nhưng nghiêm trọng — Pareto không đo mức độ', 'Nên dùng tỷ lệ 70/30 thay vì 80/20 cho lỗi phần mềm', 'Không sai — nguồn lực có hạn thì phải bỏ qua lỗi hiếm'],
        answer: 1,
        explain: 'Pareto nên xét cả <strong>mức độ nghiêm trọng</strong>, không chỉ số lần. Một lỗi bảo mật có thể gây thiệt hại lớn hơn hàng nghìn lỗi giao diện.'
    },
    {
        id: 'q-pareto-4', concept: 'pareto', type: 'tool',
        q: 'Có 500 khiếu nại chia thành 12 loại, nguồn lực chỉ đủ xử lý tận gốc vài loại. Công cụ phù hợp để chọn loại cần tập trung?',
        choices: ['Phân tích Pareto', 'SCAMPER', 'Design Thinking', 'Six Thinking Hats'],
        answer: 0,
        explain: 'Sắp xếp theo tần suất, tính % tích luỹ, chọn nhóm đầu chiếm phần lớn — đúng công việc của <strong>phân tích Pareto</strong>.'
    },

    // ===== Inversion =====
    {
        id: 'q-inv-1', concept: 'inversion', type: 'apply',
        q: 'Áp dụng inversion cho mục tiêu "giữ chân khách hàng", câu hỏi phù hợp là?',
        choices: ['"Làm sao để thu hút thêm thật nhiều khách hàng mới?"', '"Làm sao để khách chắc chắn rời bỏ chúng ta?"', '"Đối thủ đang giữ chân khách hàng bằng cách nào?"', '"Nhóm khách hàng trung thành nhất của ta là ai?"'],
        answer: 1,
        explain: 'Đảo ngược mục tiêu → liệt kê những cách chắc chắn làm khách rời đi (trả lời chậm, tính phí ẩn, đổi giao diện đột ngột…) → kiểm tra mình có đang làm không → tránh.'
    },
    {
        id: 'q-inv-2', concept: 'inversion', type: 'concept',
        q: 'Câu nói của Charlie Munger "Tất cả những gì tôi muốn biết là tôi sẽ chết ở đâu, để không bao giờ đến đó" minh hoạ điều gì?',
        choices: ['Tư duy bậc hai — nghĩ tới hậu quả của hậu quả', 'Inversion — tránh thất bại thay vì chỉ tìm thành công', 'Circle of Competence — biết giới hạn hiểu biết của mình', 'Nguyên tắc Pareto — tập trung vào số ít quan trọng'],
        answer: 1,
        explain: 'Đó là tinh thần <strong>đảo ngược</strong>: xác định rõ những điều dẫn tới thất bại để tránh chúng.'
    },
    {
        id: 'q-inv-3', concept: 'inversion', type: 'concept',
        q: 'Sau khi liệt kê danh sách "cách để chắc chắn thất bại", bước quan trọng tiếp theo là gì?',
        choices: ['Lưu danh sách lại để tham khảo khi gặp khó khăn', 'Đối chiếu với việc đang làm, biến thành quy tắc', 'Chia sẻ danh sách với mọi người để cùng góp ý', 'Tiếp tục bổ sung cho danh sách dài nhất có thể'],
        answer: 1,
        explain: 'Giá trị của inversion đến từ phát hiện "mình đang làm đúng điều dẫn tới thất bại" — và <strong>dừng lại</strong>.'
    },

    // ===== Feedback Loops =====
    {
        id: 'q-loop-1', concept: 'feedback-loops', type: 'concept',
        q: 'Một vòng nhân quả có <strong>2 dấu "−"</strong> (và các mũi tên còn lại là "+"). Đây là loại vòng nào?',
        choices: ['Vòng cân bằng (B)', 'Vòng tăng cường (R)', 'Không xác định được', 'Vòng trễ'],
        answer: 1,
        explain: 'Số dấu "−" <strong>chẵn → tăng cường</strong>, lẻ → cân bằng. Hai lần đảo chiều triệt tiêu nhau, nên tổng thể vòng tự khuếch đại.'
    },
    {
        id: 'q-loop-2', concept: 'feedback-loops', type: 'apply',
        q: 'Nợ kỹ thuật tăng → nhiều bug → tốn thời gian sửa bug → ít thời gian cải thiện code → nợ kỹ thuật tăng. Đây là gì?',
        choices: ['Vòng cân bằng có lợi, tự điều chỉnh về mức ổn định', 'Vòng tăng cường có hại (vòng luẩn quẩn)', 'Quan hệ nhân quả một chiều, không tạo thành vòng', 'Hiệu ứng mạng lưới giữa các thành viên nhóm'],
        answer: 1,
        explain: 'Vòng tự khuếch đại theo hướng xấu. Cách cắt vòng: dành cố định một phần thời gian mỗi sprint để trả nợ kỹ thuật, bất kể áp lực.'
    },
    {
        id: 'q-loop-3', concept: 'feedback-loops', type: 'concept',
        q: 'Vì sao khi chỉnh vòi sen nóng lạnh, ta hay bị nóng quá rồi lại lạnh quá?',
        choices: ['Vì vòi sen bị hỏng van điều chỉnh nhiệt độ', 'Vì độ trễ khiến ta phản ứng quá đà', 'Vì bình nóng lạnh hết nước nóng giữa chừng', 'Vì đây là một vòng tăng cường tự khuếch đại'],
        answer: 1,
        explain: '<strong>Độ trễ</strong> trong vòng cân bằng gây dao động. Bài học cho quản lý: sau khi can thiệp, chờ đủ lâu để thấy tác động trước khi can thiệp tiếp.'
    },

    // ===== Circle of Competence =====
    {
        id: 'q-circle-1', concept: 'circle-competence', type: 'apply',
        q: 'Một kỹ sư phần mềm muốn mở quán cà phê; mảng vận hành F&B nằm ngoài vòng tròn năng lực. Cách xử lý hợp lý nhất?',
        choices: ['Tự học qua video vài tuần rồi ký hợp đồng thuê mặt bằng 5 năm', 'Hợp tác người có kinh nghiệm F&B, thử mô hình pop-up trước', 'Từ bỏ ý định vì không có kinh nghiệm trong ngành F&B', 'Tin vào khả năng học nhanh của mình, cứ làm rồi sẽ biết'],
        answer: 1,
        explain: 'Ngoài vòng tròn → <strong>tìm người có năng lực</strong> và giảm rủi ro bằng thử nghiệm nhỏ, dễ đảo ngược, trước khi cam kết lớn.'
    },
    {
        id: 'q-circle-2', concept: 'circle-competence', type: 'concept',
        q: 'Theo Warren Buffett, điều gì quan trọng nhất về vòng tròn năng lực?',
        choices: ['Vòng tròn phải đủ lớn, bao phủ nhiều ngành', 'Biết rõ ranh giới của vòng tròn', 'Chỉ nên đầu tư vào ngành công nghệ', 'Giữ nguyên vòng tròn, không học thêm lĩnh vực mới'],
        answer: 1,
        explain: '"Kích thước vòng tròn không quá quan trọng; biết <strong>ranh giới</strong> của nó mới là điều sống còn."'
    },
    {
        id: 'q-circle-3', concept: 'circle-competence', type: 'spot',
        q: 'Một CEO thành công trong ngành bán lẻ tự tin rót phần lớn tài sản vào một startup công nghệ sinh học vì "kinh doanh ngành nào cũng thế thôi". Bẫy gì?',
        choices: ['Đánh giá quá cao vòng tròn năng lực của mình', 'Sunk cost fallacy — tiếc khoản đã đầu tư', 'Analysis paralysis — phân tích quá lâu', 'Không phải bẫy — người giỏi làm gì cũng giỏi'],
        answer: 0,
        explain: 'Công nghệ sinh học có rủi ro, chu kỳ, quy định rất khác bán lẻ. Thành công ở một lĩnh vực dễ khiến ta <strong>tưởng vòng tròn năng lực của mình rộng hơn thực tế</strong> — đây chính là lúc cần chuyên gia và thử nhỏ.'
    },

    // ===== Theory of Constraints =====
    {
        id: 'q-toc-1', concept: 'constraints', type: 'apply',
        q: 'Quy trình: Dev làm được 20 tính năng/tuần → QA test được 8/tuần → Deploy được 15/tuần. Đầu ra của cả hệ thống là bao nhiêu?',
        choices: ['8 tính năng/tuần', '15 tính năng/tuần', '20 tính năng/tuần', '43 tính năng/tuần'],
        answer: 0,
        explain: 'Hệ thống chỉ nhanh bằng khâu chậm nhất — <strong>nút thắt QA (8)</strong>.'
    },
    {
        id: 'q-toc-2', concept: 'constraints', type: 'apply',
        q: 'Vẫn quy trình trên, công ty tuyển thêm 3 lập trình viên. Điều gì xảy ra?',
        choices: ['Đầu ra tăng khoảng 50% nhờ có thêm người', 'Đầu ra không đổi, hàng chờ test dài thêm', 'Đầu ra giảm hẳn vì đội mất thời gian hướng dẫn', 'QA sẽ tự động làm nhanh hơn để theo kịp dev'],
        answer: 1,
        explain: 'Tăng năng lực ở chỗ không phải nút thắt chỉ tạo thêm <strong>hàng tồn đọng</strong>. Kể cả khi dev chậm lại một chút vì phải hướng dẫn người mới, họ vẫn làm nhanh hơn 8 tính năng/tuần — đầu ra vẫn do QA quyết định. Cần khai thác và nâng cấp chính khâu QA.'
    },
    {
        id: 'q-toc-3', concept: 'constraints', type: 'concept',
        q: 'Bước "Khai thác" (Exploit) trong 5 bước tập trung của Theory of Constraints nghĩa là gì?',
        choices: ['Mua thêm máy móc, thiết bị cho khâu nút thắt ngay', 'Tận dụng tối đa nút thắt hiện có trước khi đầu tư', 'Yêu cầu nhân viên ở nút thắt làm thêm giờ mỗi ngày', 'Tìm kiếm nút thắt mới ở các khâu còn lại'],
        answer: 1,
        explain: 'Khai thác là cách <strong>rẻ nhất</strong>: đảm bảo nút thắt luôn có việc, chỉ làm việc giá trị, đầu vào đã được kiểm tra chất lượng. Đầu tư (Elevate) là bước 4.'
    },
    {
        id: 'q-toc-4', concept: 'constraints', type: 'concept',
        q: 'Nút thắt "mọi khoản chi trên 5 triệu đồng phải chờ giám đốc duyệt, giám đốc chỉ duyệt vào thứ Sáu" thuộc loại nào?',
        choices: ['Nút thắt máy móc', 'Nút thắt chính sách', 'Nút thắt thị trường', 'Không phải nút thắt'],
        answer: 1,
        explain: 'Goldratt cho rằng phần lớn nút thắt trong tổ chức là <strong>chính sách</strong> — rẻ để gỡ nhất nhưng khó thấy nhất vì "vẫn luôn như vậy".'
    },

    // ===== Second-Order Thinking =====
    {
        id: 'q-second-1', concept: 'second-order', type: 'apply',
        q: 'Bộ phận CS được thưởng theo "số ticket đóng mỗi ngày". Hậu quả bậc hai khả dĩ nhất là gì?',
        choices: ['Nhân viên giải quyết vấn đề kỹ lưỡng và triệt để hơn', 'Ticket bị đóng vội, khách phải liên hệ lại nhiều lần', 'Khách hàng hài lòng hơn vì được phản hồi nhanh chóng', 'Không có tác động đáng kể nào tới chất lượng dịch vụ'],
        answer: 1,
        explain: 'Người ta tối ưu cho chỉ số được thưởng. Bậc 3: tổng khối lượng việc tăng, hài lòng giảm. Nên đo thêm tỷ lệ giải quyết ngay lần đầu và mức hài lòng.'
    },
    {
        id: 'q-second-2', concept: 'second-order', type: 'concept',
        q: 'Định luật Goodhart phát biểu điều gì?',
        choices: ['Mọi hệ thống đều bị giới hạn bởi một nút thắt duy nhất', 'Khi chỉ số trở thành mục tiêu, nó không còn là chỉ số tốt', 'Khoảng 80% kết quả đến từ khoảng 20% nguyên nhân', 'Giải thích đơn giản nhất thường là giải thích đúng nhất'],
        answer: 1,
        explain: 'Con người phản ứng lại chỉ số được dùng để thưởng phạt, làm méo chính chỉ số đó — một dạng hậu quả bậc hai điển hình.'
    },
    {
        id: 'q-second-3', concept: 'second-order', type: 'apply',
        q: 'Một cửa hàng giảm giá sâu vào mỗi cuối tuần để tăng doanh số. Hậu quả bậc hai đáng lo nhất?',
        choices: ['Doanh số các ngày cuối tuần tăng lên rõ rệt', 'Khách quen chờ cuối tuần mới mua, biên lợi nhuận giảm', 'Nhân viên có thêm động lực làm việc vào cuối tuần', 'Hàng tồn kho được giải phóng nhanh hơn trước'],
        answer: 1,
        explain: 'Bậc 1 (doanh số cuối tuần tăng) là điều ai cũng thấy. Bậc 2: <strong>khách thay đổi hành vi</strong> — chờ giảm giá; đối thủ có thể giảm theo → cuộc chiến giá.'
    },

    // ===== Systems Thinking =====
    {
        id: 'q-sys-1', concept: 'systems-thinking', type: 'apply',
        q: '"Để kịp deadline, cả đội tăng ca → mệt mỏi, nhiều lỗi → phải sửa lỗi → càng trễ deadline → tăng ca nhiều hơn." Đây là mẫu hệ thống nào?',
        choices: ['Giải pháp phản tác dụng (Fixes that Fail)', 'Bi kịch tài nguyên chung (Tragedy of the Commons)', 'Leo thang (Escalation)', 'Thành công cho người thành công (Success to the Successful)'],
        answer: 0,
        explain: 'Giải pháp nhanh (tăng ca) giảm triệu chứng tạm thời nhưng tạo tác dụng phụ (lỗi) làm vấn đề nặng hơn về sau.'
    },
    {
        id: 'q-sys-2', concept: 'systems-thinking', type: 'apply',
        q: '"Mỗi lần có sự cố, công ty lại nhờ anh Tuấn — người hùng chữa cháy. Không ai sửa quy trình, và công ty ngày càng phụ thuộc vào anh Tuấn." Mẫu hệ thống nào?',
        choices: ['Giới hạn tăng trưởng (Limits to Growth)', 'Chuyển gánh nặng (Shifting the Burden)', 'Leo thang (Escalation)', 'Bi kịch tài nguyên chung (Tragedy of the Commons)'],
        answer: 1,
        explain: 'Giải pháp triệu chứng (người hùng) làm <strong>teo dần năng lực giải quyết gốc</strong> (quy trình), khiến hệ thống càng phụ thuộc vào giải pháp triệu chứng.'
    },
    {
        id: 'q-sys-3', concept: 'systems-thinking', type: 'concept',
        q: 'Theo Donella Meadows, can thiệp nào thường có đòn bẩy <strong>mạnh nhất</strong>?',
        choices: ['Tăng ngân sách', 'Thay đổi mục tiêu của hệ thống', 'Thêm nhân sự', 'Điều chỉnh các con số, tham số'],
        answer: 1,
        explain: 'Tham số (tiền, người, con số) dễ chỉnh nhất nhưng tác động yếu nhất. <strong>Mục tiêu</strong> và mô thức tư duy của hệ thống khó đổi nhưng tạo thay đổi sâu nhất.'
    },
    {
        id: 'q-sys-4', concept: 'systems-thinking', type: 'concept',
        q: 'Trong mô hình tảng băng (Sự kiện → Xu hướng → Cấu trúc → Mô hình tư duy), phản ứng ở tầng nào ít tạo thay đổi bền vững nhất?',
        choices: ['Sự kiện', 'Cấu trúc', 'Mô hình tư duy', 'Cả ba như nhau'],
        answer: 0,
        explain: 'Phản ứng với <strong>sự kiện</strong> (la mắng khi trễ, chữa cháy) chỉ xử lý phần nổi. Đòn bẩy nằm ở cấu trúc và niềm tin tạo ra xu hướng.'
    },

    // ===== Nhảy vào giải pháp =====
    {
        id: 'q-jump-1', concept: 'jumping-solutions', type: 'spot',
        q: 'Doanh số quý giảm. Ngay đầu cuộc họp, giám đốc nói: "Tuyển thêm 5 nhân viên sales ngay!" Đây là bẫy nào?',
        choices: ['Nhảy vào giải pháp', 'Analysis paralysis', 'Sunk cost', 'Circle of competence'],
        answer: 0,
        explain: 'Chưa biết doanh số giảm ở đâu (kênh nào, sản phẩm nào, khách nào) và vì sao — có thể vấn đề ở sản phẩm, giá hay giao hàng, không phải số lượng sales.'
    },
    {
        id: 'q-jump-2', concept: 'jumping-solutions', type: 'concept',
        q: 'Quy tắc họp nào giúp chống bẫy nhảy vào giải pháp hiệu quả nhất?',
        choices: ['Ai có ý tưởng hay thì được trình bày trước tiên', '15 phút đầu chỉ bàn vấn đề và dữ liệu, chưa bàn giải pháp', 'Giám đốc quyết định nhanh để tiết kiệm thời gian cho cả nhóm', 'Ưu tiên dùng lại giải pháp đã thành công ở lần trước'],
        answer: 1,
        explain: 'Tách rõ thời gian cho <strong>hiểu vấn đề</strong> trước khi bàn giải pháp. Kèm theo đó là yêu cầu có số liệu hiện trạng.'
    },
    {
        id: 'q-jump-3', concept: 'jumping-solutions', type: 'apply',
        q: 'Công ty tăng lương 10% toàn bộ để giảm nghỉ việc, nhưng sau 6 tháng tỷ lệ nghỉ việc không đổi. Bài học chính?',
        choices: ['Nên tăng 20% thay vì 10% để đủ sức giữ chân', 'Phải tìm hiểu nguyên nhân (phỏng vấn nghỉ việc) trước', 'Nghỉ việc là xu hướng chung, không thể tránh được', 'Nên giảm thưởng của những người có ý định nghỉ'],
        answer: 1,
        explain: 'Trong ví dụ, lý do chính là quản lý trực tiếp và thiếu lộ trình phát triển — tăng lương không chạm tới nguyên nhân. Hiểu vấn đề trước rẻ hơn nhiều.'
    },

    // ===== Chữa triệu chứng =====
    {
        id: 'q-symptom-1', concept: 'symptom-fixing', type: 'spot',
        q: 'Server chậm dần mỗi ngày; đội vận hành cài lịch khởi động lại lúc 3h sáng và duy trì suốt 6 tháng. Vấn đề là gì?',
        choices: ['Nên khởi động lại 2 lần/ngày để hệ thống ổn định hơn', 'Chữa triệu chứng — workaround che giấu nguyên nhân gốc', 'Không có vấn đề vì hệ thống vẫn chạy ổn suốt 6 tháng', 'Nên mua server mạnh hơn để không phải khởi động lại'],
        answer: 1,
        explain: 'Workaround che giấu nguyên nhân gốc cho tới một ngày tải cao đột biến — hệ thống sập đúng lúc quan trọng nhất.'
    },
    {
        id: 'q-symptom-2', concept: 'symptom-fixing', type: 'concept',
        q: 'Với sự cố cần xử lý gấp, cách làm đúng là gì?',
        choices: ['Chỉ làm biện pháp tạm thời cho nhanh, sửa gốc khi rảnh', 'Chỉ làm biện pháp gốc, chấp nhận thiệt hại trong lúc chờ', 'Tạm thời ngay + biện pháp gốc có người phụ trách, hạn chót', 'Chờ phân tích xong nguyên nhân gốc rồi mới làm bất cứ gì'],
        answer: 2,
        explain: 'Cả hai loại đều cần. Bẫy là khi biện pháp tạm thời "đủ tốt" khiến mọi người quên biện pháp gốc — nên phải có <strong>người và hạn chót</strong>.'
    },
    {
        id: 'q-symptom-3', concept: 'symptom-fixing', type: 'concept',
        q: '"Bẫy năng lực" (capability trap) mô tả vòng luẩn quẩn nào?',
        choices: ['Chữa cháy nhiều → không còn thời gian cải tiến → càng nhiều sự cố', 'Năng lực nhân viên quá cao nên họ chán việc và nghỉ', 'Đào tạo quá nhiều làm giảm năng suất làm việc thực tế', 'Thiếu năng lực nội bộ nên thuê ngoài, càng thuê càng phụ thuộc'],
        answer: 0,
        explain: 'Repenning & Sterman: "Không ai được khen vì sửa những vấn đề chưa từng xảy ra." Phải chủ động dành thời gian cải tiến để thoát vòng.'
    },

    // ===== Confirmation Bias =====
    {
        id: 'q-confirm-1', concept: 'confirmation-bias', type: 'apply',
        q: 'Trong thí nghiệm 2-4-6, bạn đang có giả thuyết "các số chẵn tăng dần 2 đơn vị". Dãy thử nào cho <strong>nhiều thông tin nhất</strong>?',
        choices: ['8-10-12', '20-22-24', '1-2-3', '100-102-104'],
        answer: 2,
        explain: '"1-2-3" <em>vi phạm</em> giả thuyết của bạn — nếu nó vẫn được trả lời "đúng", giả thuyết sai. Các dãy khác chỉ xác nhận lại điều bạn đã tin, không kiểm tra được gì mới.'
    },
    {
        id: 'q-confirm-2', concept: 'confirmation-bias', type: 'spot',
        q: 'Câu hỏi khảo sát: "Bạn có đồng ý rằng giá sản phẩm của chúng tôi hơi cao không?" Vấn đề gì?',
        choices: ['Câu hỏi quá ngắn, cần thêm bối cảnh cho khách', 'Câu hỏi dẫn dắt, gợi sẵn câu trả lời mong muốn', 'Nên hỏi bằng tiếng Anh để khảo sát chuyên nghiệp hơn', 'Không có vấn đề, câu hỏi rõ ràng và dễ trả lời'],
        answer: 1,
        explain: 'Câu hỏi trung lập hơn: "Điều gì khiến bạn cân nhắc khi quyết định mua?" hoặc cho thang đánh giá giá cả từ "rất rẻ" tới "rất đắt".'
    },
    {
        id: 'q-confirm-3', concept: 'confirmation-bias', type: 'concept',
        q: 'Trong phương pháp Phân tích giả thuyết cạnh tranh (ACH), nên chọn giả thuyết nào?',
        choices: ['Có nhiều bằng chứng ủng hộ nhất', 'Ít bằng chứng mâu thuẫn nhất', 'Được sếp ủng hộ', 'Được đưa ra đầu tiên'],
        answer: 1,
        explain: 'Một bằng chứng có thể ủng hộ nhiều giả thuyết cùng lúc, nên đếm "ủng hộ" dễ gây hiểu lầm. Bằng chứng <strong>mâu thuẫn</strong> mới có sức loại trừ.'
    },

    // ===== Analysis Paralysis =====
    {
        id: 'q-paralysis-1', concept: 'analysis-paralysis', type: 'concept',
        q: 'Quyết định kiểu "cửa hai chiều" (có thể đảo ngược với chi phí thấp) nên được xử lý thế nào?',
        choices: ['Phân tích kỹ lưỡng như mọi quyết định quan trọng khác', 'Quyết nhanh, theo dõi kết quả và điều chỉnh sau', 'Chuyển lên hội đồng quản trị để có quyết định chung', 'Hoãn lại cho tới khi có đủ 100% thông tin cần thiết'],
        answer: 1,
        explain: 'Với cửa hai chiều, chi phí của việc chờ đợi thường lớn hơn chi phí của một quyết định chưa hoàn hảo. Dành phân tích kỹ cho <strong>cửa một chiều</strong>.'
    },
    {
        id: 'q-paralysis-2', concept: 'analysis-paralysis', type: 'apply',
        q: 'Team 5 người đã so sánh 12 công cụ quản lý công việc trong 3 tuần mà chưa chọn được. Cách thoát bế tắc tốt nhất?',
        choices: ['So sánh thêm 5 công cụ nữa để chắc chắn không bỏ sót lựa chọn tốt', 'Đặt 3–4 tiêu chí "đủ tốt", chọn cái đầu tiên đạt, dùng thử', 'Tự xây một công cụ riêng phù hợp nhu cầu của team', 'Tiếp tục dùng Excel cho tới khi tìm được công cụ hoàn hảo'],
        answer: 1,
        explain: '<strong>Satisficing</strong> + thử nghiệm. Công cụ quản lý công việc là quyết định dễ đảo ngược — dùng thử cho nhiều thông tin hơn đọc thêm review.'
    },
    {
        id: 'q-paralysis-3', concept: 'analysis-paralysis', type: 'concept',
        q: 'Jeff Bezos gợi ý hầu hết quyết định nên được đưa ra khi có khoảng bao nhiêu phần trăm thông tin mong muốn?',
        choices: ['30%', '70%', '95%', '100%'],
        answer: 1,
        explain: 'Khoảng <strong>70%</strong>. Chờ tới 90% thì thường đã quá chậm — và bạn cần giỏi nhận ra, sửa quyết định sai nhanh chóng.'
    },

    // ===== XY Problem =====
    {
        id: 'q-xy-1', concept: 'xy-problem', type: 'spot',
        q: 'Khách hàng hỏi: "Làm sao để tắt tính năng tự động lưu?" Cách phản hồi tốt nhất là gì?',
        choices: ['Gửi ngay hướng dẫn tắt tự động lưu cho khách', 'Hỏi lại: "Anh/chị muốn đạt điều gì khi tắt?"', 'Giải thích rằng không nên tắt vì sẽ mất dữ liệu', 'Chuyển yêu cầu cho bộ phận kỹ thuật xử lý'],
        answer: 1,
        explain: 'Có thể mục tiêu thật (X) là "không muốn bản nháp dở lưu đè bản chính" — giải pháp tốt hơn là tính năng lịch sử phiên bản, không phải tắt tự động lưu (Y).'
    },
    {
        id: 'q-xy-2', concept: 'xy-problem', type: 'apply',
        q: 'Lập trình viên hỏi: "Làm sao lấy 3 ký tự cuối của tên file?" Mục đích thật là xác định loại file. Vì sao cách Y (lấy 3 ký tự cuối) có vấn đề?',
        choices: ['Vì cắt chuỗi ký tự làm chương trình chạy chậm hơn', 'Vì phần mở rộng có thể dài 4 ký tự (.docx) hoặc không có', 'Vì tên file trên Windows luôn được viết hoa toàn bộ', 'Không có vấn đề gì, đây là cách làm rất phổ biến'],
        answer: 1,
        explain: 'Biết được X (xác định loại file) mới thấy Y (lấy 3 ký tự cuối) là cách không đáng tin cậy. Cách tốt hơn: dùng hàm lấy phần mở rộng có sẵn, hoặc kiểm tra kiểu nội dung (MIME type) nếu cần chắc chắn — ví dụ kinh điển của XY problem.'
    },
    {
        id: 'q-xy-3', concept: 'xy-problem', type: 'concept',
        q: 'Mẫu viết yêu cầu nào giúp tránh XY problem?',
        choices: ['"Làm cho tôi tính năng X trước thứ Sáu."', '"Là [ai], tôi muốn [gì], để [mục đích gì]."', '"Giống như app của đối thủ."', '"Càng nhanh càng tốt."'],
        answer: 1,
        explain: 'Mẫu <strong>user story</strong> buộc người yêu cầu nêu mục đích — phần "để [mục đích]" chính là X giúp người làm tìm cách tốt nhất.'
    },

    // ===== Sunk Cost =====
    {
        id: 'q-sunk-1', concept: 'sunk-cost', type: 'apply',
        q: 'Đã chi 2 tỷ cho phần mềm nội bộ, cần thêm 1,5 tỷ và 8 tháng. Một SaaS có sẵn đáp ứng 90% nhu cầu với 300 triệu/năm. Cách suy nghĩ đúng?',
        choices: ['Tiếp tục vì đã lỡ đầu tư 2 tỷ, bỏ bây giờ thì phí', 'So sánh từ hôm nay — 2 tỷ đã chi như nhau ở mọi lựa chọn', 'Dừng ngay và kỷ luật người đã đề xuất dự án ban đầu', 'Đầu tư thêm để dự án hoàn thành nhanh hơn dự kiến'],
        answer: 1,
        explain: 'Chi phí chìm không thu hồi được dù chọn gì. Chỉ <strong>chi phí và lợi ích tương lai</strong> nên quyết định.'
    },
    {
        id: 'q-sunk-2', concept: 'sunk-cost', type: 'concept',
        q: 'Trong thí nghiệm vé trượt tuyết của Arkes & Blumer, đa số người tham gia đã chọn thế nào?',
        choices: ['Đi nơi họ thích hơn, dù vé chỉ 50 USD', 'Đi nơi có vé đắt hơn dù kém thích hơn', 'Không đi đâu cả vì thấy tiếc tiền', 'Bán lại cả hai vé cho người khác'],
        answer: 1,
        explain: 'Tiền đã trả cho cả hai vé đều mất như nhau. Chọn nơi kém thích hơn chỉ vì vé đắt hơn là minh hoạ kinh điển của <strong>sunk cost fallacy</strong>.'
    },
    {
        id: 'q-sunk-3', concept: 'sunk-cost', type: 'spot',
        q: 'Bạn đã xem 1 tiếng của bộ phim rất dở và nghĩ: "Đã mua vé rồi, xem nốt cho khỏi phí." Đây là bẫy gì?',
        choices: ['Confirmation bias', 'Sunk cost fallacy', 'Groupthink', 'XY problem'],
        answer: 1,
        explain: 'Tiền vé đã mất dù bạn ở lại hay về. Ở lại chỉ tốn thêm thời gian — tài nguyên duy nhất còn quyết định được.'
    },

    // ===== Law of the Instrument =====
    {
        id: 'q-hammer-1', concept: 'hammer-nail', type: 'spot',
        q: 'Khi doanh số giảm, IT đề xuất làm app mới, Marketing đề xuất tăng quảng cáo, Sales đề xuất giảm giá. Hiện tượng gì?',
        choices: ['Law of the Instrument (cái búa và cái đinh)', 'Groupthink (tư duy bầy đàn)', 'Analysis paralysis (tê liệt vì phân tích)', 'Sunk cost fallacy (bẫy chi phí chìm)'],
        answer: 0,
        explain: 'Mỗi người rút "cái búa" của mình — <strong>Law of the Instrument</strong>. Trong ví dụ, nguyên nhân thật (kho quá tải, giao chậm) không thuộc chuyên môn của ai trong phòng.'
    },
    {
        id: 'q-hammer-2', concept: 'hammer-nail', type: 'concept',
        q: 'Câu hỏi nào giúp phá bẫy "cái búa và cái đinh"?',
        choices: ['"Làm sao áp dụng công nghệ mới nhất vào bài toán này?"', '"Nếu không được dùng công cụ quen thuộc, ta giải thế nào?"', '"Đối thủ của chúng ta đang dùng công cụ gì để giải?"', '"Ai là chuyên gia giỏi nhất về công cụ này trong công ty?"'],
        answer: 1,
        explain: 'Cấm tạm thời công cụ quen buộc não tìm hướng khác — và thường lộ ra giải pháp đơn giản, phù hợp hơn.'
    },
    {
        id: 'q-hammer-3', concept: 'hammer-nail', type: 'apply',
        q: 'Đội muốn xây mô hình machine learning để phân loại yêu cầu hỗ trợ; dữ liệu cho thấy 85% yêu cầu thuộc 5 loại có từ khoá rất rõ. Nên làm gì?',
        choices: ['Vẫn xây mô hình ML vì là hướng hiện đại, lâu dài', 'Bắt đầu bằng bộ quy tắc từ khoá, ML chỉ khi cần', 'Thuê thêm người để phân loại thủ công cho chắc', 'Bỏ qua việc phân loại vì không quá quan trọng'],
        answer: 1,
        explain: 'Bắt đầu bằng <strong>giải pháp đơn giản nhất</strong> làm mốc so sánh. Công cụ "xịn" chỉ đáng dùng khi nó giải quyết được điều giải pháp đơn giản không làm được.'
    },

    // ===== Groupthink =====
    {
        id: 'q-group-1', concept: 'groupthink', type: 'concept',
        q: 'Biện pháp nào giúp chống groupthink trong cuộc họp quyết định?',
        choices: ['Lãnh đạo nêu quan điểm đầu tiên để cả nhóm có định hướng', 'Viết ý kiến riêng trước, lãnh đạo phát biểu sau cùng', 'Chỉ mời những người đồng quan điểm để buổi họp nhanh gọn', 'Bỏ phiếu công khai bằng cách giơ tay ngay đầu buổi họp'],
        answer: 1,
        explain: 'Thu thập ý kiến <strong>độc lập</strong> trước khi thảo luận và để người có quyền lực nói sau cùng giúp lộ ra những nghi ngờ bị giấu kín.'
    },
    {
        id: 'q-group-2', concept: 'groupthink', type: 'apply',
        q: 'Giám đốc hào hứng chốt deadline 6 tuần, cả phòng gật đầu. Ra quán cà phê, từng người thừa nhận nghĩ cần ít nhất 12 tuần. Triệu chứng groupthink nào rõ nhất?',
        choices: ['Tự kiểm duyệt và ảo tưởng nhất trí', 'Định kiến về đối thủ', 'Tin vào đạo đức vốn có của nhóm', 'Có người gác cổng thông tin'],
        answer: 0,
        explain: 'Mỗi người <strong>tự kiểm duyệt</strong> nghi ngờ của mình, và im lặng của cả phòng được hiểu là đồng ý (<strong>ảo tưởng nhất trí</strong>).'
    },
    {
        id: 'q-group-3', concept: 'groupthink', type: 'concept',
        q: 'Nghịch lý Abilene mô tả tình huống nào?',
        choices: ['Nhóm cãi nhau không dứt và không ra được quyết định', 'Cả nhóm làm điều không ai muốn, vì tưởng người khác muốn', 'Một người có quyền lực quyết định thay cho cả nhóm', 'Nhóm quá đông nên không thể thống nhất được ý kiến'],
        answer: 1,
        explain: 'Gia đình lái xe hàng chục cây số giữa trời nóng đi ăn tối — về nhà mới biết không ai muốn đi. Im lặng và phỏng đoán ý người khác tạo ra quyết định tệ.'
    },

    // ===== Lối mòn tư duy =====
    {
        id: 'q-set-1', concept: 'mental-set', type: 'concept',
        q: 'Trong bài toán cây nến của Duncker (nến, hộp đinh ghim, diêm), lời giải là gì?',
        choices: ['Hơ nóng đáy nến để sáp dính nến lên tường', 'Đổ ghim ra, ghim hộp lên tường làm giá đỡ', 'Dùng đinh ghim xuyên qua thân nến vào tường', 'Đặt nến lên bàn và lót giấy bên dưới'],
        answer: 1,
        explain: 'Người ta khó thấy chiếc hộp là "giá đỡ" vì nó đang đóng vai "đồ đựng ghim" — hiện tượng <strong>cố định chức năng</strong>.'
    },
    {
        id: 'q-set-2', concept: 'mental-set', type: 'concept',
        q: 'Hiệu ứng Einstellung (thí nghiệm bình nước của Luchins) là gì?',
        choices: ['Quên dần cách giải cũ sau một thời gian không dùng', 'Dùng tiếp cách quen dù có cách đơn giản hơn', 'Luôn tìm ra cách giải đơn giản nhất nhờ kinh nghiệm', 'Cảm giác lo lắng, sợ hãi khi phải giải toán'],
        answer: 1,
        explain: 'Sau vài bài giải bằng công thức dài B − A − 2C, người tham gia tiếp tục dùng nó cho bài giải được bằng A − C — kinh nghiệm tạo ra <strong>lối mòn</strong>.'
    },
    {
        id: 'q-set-3', concept: 'mental-set', type: 'apply',
        q: 'Để phá cố định chức năng theo kỹ thuật "bộ phận chung" (generic parts), bạn nên mô tả một chiếc hộp đựng ghim như thế nào?',
        choices: ['"Hộp đựng ghim bấm văn phòng"', '"Mảnh bìa cứng, phẳng, xuyên ghim được"', '"Đồ dùng văn phòng phẩm bằng giấy"', '"Vật không liên quan tới cây nến"'],
        answer: 1,
        explain: 'Mô tả theo <strong>vật liệu và hình dạng</strong> thay vì công dụng giúp não thấy khả năng mới — ở đây là một chiếc giá đỡ gắn tường.'
    }
];
