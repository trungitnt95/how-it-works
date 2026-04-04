// ==================== POPUP ENHANCEMENTS ====================

const popupEnhancements = {
    'hunting-gathering': {
        deepDive: `Điểm cốt lõi của mô hình này là người lao động và "tài sản tạo thu nhập" là một. Không có kho hàng, máy móc, thương hiệu hay hệ thống làm việc thay bạn. Khi bạn ngừng săn, ngừng hái, dòng thu nhập gần như dừng ngay lập tức. Vì vậy đây là mô hình tốt để hiểu giới hạn của thu nhập không có đòn bẩy.`,
        examples: [
            { title: '🐟 Làng chài ven biển', desc: `Ngư dân đi biển trong ngày, đánh được bao nhiêu thì bán bấy nhiêu. Hôm biển động hoặc hỏng lưới là thu nhập gần như bằng 0, cho thấy mô hình phụ thuộc trực tiếp vào công sức hàng ngày.` }
        ],
        whoFits: [
            'Phù hợp khi mục tiêu chỉ là sinh tồn ngắn hạn, có gì làm nấy trong ngày.',
            'Hữu ích như mô hình nền để thấy vì sao con người luôn tìm cách tích lũy, lưu trữ và tạo đòn bẩy.'
        ],
        watchouts: [
            'Không có buffer: ốm đau, thời tiết xấu hoặc cạn tài nguyên là thu nhập sụp rất nhanh.',
            'Không tạo tài sản tích lũy, nên rất khó đi từ "đủ sống" sang "giàu có".'
        ]
    },
    farming: {
        deepDive: `Nông nghiệp vượt trội hơn săn bắt ở một điểm: tạo được THẶNG DƯ và có thể lưu trữ. Khi đã có dư lúa, dư gia súc, con người mới có thứ để trao đổi, thuê người, đóng thuế và tích lũy tài sản qua nhiều mùa. Đây là bước đầu tiên chuyển từ "kiếm ăn hôm nay" sang "xây nền kinh tế".`,
        examples: [
            { title: '🚜 Trang trại sữa gia đình', desc: `Một hộ sở hữu đàn bò sữa có thể bán sữa mỗi ngày, bán bê giống và tận dụng phân bón cho đồng cỏ. Thu nhập không còn đến từ một vụ mùa duy nhất mà từ nhiều đầu ra quanh năm.` }
        ],
        whoFits: [
            'Phù hợp với người kiểm soát được đất, nguồn nước hoặc tài nguyên sinh học.',
            'Mạnh khi bạn có thể tái đầu tư qua nhiều mùa thay vì tiêu hết sản lượng ngay.'
        ],
        watchouts: [
            'Rủi ro tập trung vào đất đai, thời tiết, dịch bệnh và chu kỳ giá nông sản.',
            'Tài sản thường kém thanh khoản, quay vòng vốn chậm hơn thương mại hoặc dịch vụ.'
        ]
    },
    barter: {
        deepDive: `Barter kiếm tiền bằng cách giải quyết "sự lệch pha nhu cầu". Một bên dư thứ này nhưng thiếu thứ kia, và người trung gian hiểu rõ hai phía sẽ capture phần giá trị chênh lệch đó. Về bản chất, đây là phiên bản sơ khai của arbitrage, môi giới và marketplace hiện đại.`,
        examples: [
            { title: '📦 Đổi tồn kho lấy dịch vụ', desc: `Một cửa hàng dư hàng chậm bán có thể đổi cho agency để lấy dịch vụ marketing. Agency sau đó đổi tiếp hoặc bán lại hàng cho đúng tệp khách, biến sự lệch pha nhu cầu thành lợi nhuận.` }
        ],
        whoFits: [
            'Phù hợp với người giỏi quan sát thị trường, thương lượng và biết ai đang thừa hoặc thiếu thứ gì.',
            'Rất mạnh trong môi trường thiếu thanh khoản hoặc khi tiền mặt khó lưu thông.'
        ],
        watchouts: [
            'Định giá rất dễ sai vì mỗi bên cảm nhận giá trị khác nhau.',
            'Nếu không có chuẩn đo lường chung, bạn tốn nhiều thời gian tìm đúng đối tác giao dịch.'
        ]
    },
    craftsmanship: {
        deepDive: `Thủ công tạo tiền nhờ ba thứ cộng dồn: tay nghề, danh tiếng và độ khó thay thế. Khách hàng không chỉ mua nguyên liệu, họ mua độ chính xác, gu thẩm mỹ, độ bền và sự tin cậy. Vì vậy người làm nghề giỏi thường có biên lợi nhuận cao hơn hẳn người chỉ bán thời gian lao động phổ thông.`,
        examples: [
            { title: '👔 Thợ may bespoke', desc: `Một bộ suit may đo cao cấp có thể giá gấp nhiều lần suit may sẵn vì khách trả tiền cho số đo chuẩn, vải chọn riêng và tay nghề hoàn thiện. Biên lợi nhuận nằm ở độ hiếm kỹ năng, không nằm ở tiền vải.` }
        ],
        whoFits: [
            'Phù hợp với người chấp nhận học nghề lâu, thích tích lũy tay nghề theo chiều sâu.',
            'Mạnh khi thị trường đánh giá cao chất lượng, độ bền và sự cá nhân hóa.'
        ],
        watchouts: [
            'Danh tiếng mất rất chậm để xây nhưng có thể mất rất nhanh chỉ sau vài sản phẩm lỗi.',
            'Nếu không chuyển tay nghề thành hệ thống, thu nhập vẫn bị khóa bởi thời gian cá nhân.'
        ]
    },
    'taxation-tribute': {
        deepDive: `Mô hình này không dựa vào tạo giá trị trực tiếp mà dựa vào khả năng THU PHÍ bắt buộc trên một lãnh thổ hoặc hệ sinh thái. Sức mạnh của nó nằm ở quy mô: một trung tâm quyền lực có thể thu từ hàng triệu người mà chi phí thu trên mỗi người ngày càng thấp. Vì vậy ngày nay nguyên lý này thường xuất hiện dưới dạng phí nền tảng, phí cổng vào và độc quyền hạ tầng.`,
        examples: [
            { title: '📱 "Thuế" trên chợ ứng dụng', desc: `Khi một nền tảng kiểm soát đường vào khách hàng, họ có thể thu phí trên gần như mọi giao dịch đi qua hệ sinh thái đó. Người làm ra sản phẩm vẫn phải chia doanh thu để được tiếp cận người dùng.` }
        ],
        whoFits: [
            'Phù hợp để hiểu các mô hình quyền lực quy mô lớn như nhà nước, platform hoặc hạ tầng thiết yếu.',
            'Đây không phải mô hình cá nhân "khởi nghiệp từ số 0", mà là mô hình của người giữ cổng phân phối.'
        ],
        watchouts: [
            'Dễ sinh phản kháng nếu mức phí cao hơn giá trị hệ thống thực sự tạo ra.',
            'Quyền lực thu phí thường đi kèm rủi ro chính trị, pháp lý và cạnh tranh từ mô hình mở hơn.'
        ]
    },
    'merchant-trade': {
        deepDive: `Buôn bán mạnh ở chỗ nó tách việc kiếm tiền khỏi sản xuất. Bạn không cần trồng gia vị hay dệt vải, bạn chỉ cần biết nơi nào giá thấp, nơi nào nhu cầu cao và dòng hàng vận hành ra sao. Lợi nhuận lớn nhất thường nằm ở thông tin, logistics, tốc độ quay vòng vốn và khả năng kiểm soát rủi ro tồn kho.`,
        examples: [
            { title: '📱 Nhà nhập khẩu hàng điện tử', desc: `Một thương nhân nhập phụ kiện điện thoại giá sỉ từ nhà máy, đóng gói lại và phân phối qua đại lý địa phương. Giá trị không nằm ở sản xuất mà ở chọn mẫu đúng, giao hàng nhanh và quản trị vốn lưu động.` }
        ],
        whoFits: [
            'Phù hợp với người nhạy thị trường, giỏi đàm phán và chịu được áp lực dòng tiền.',
            'Mạnh khi bạn tiếp cận được nguồn hàng tốt hơn hoặc phân phối hiệu quả hơn đối thủ.'
        ],
        watchouts: [
            'Sai một khâu logistics hoặc dự báo nhu cầu là hàng tồn và vốn chết ngay.',
            'Biên lợi nhuận rất dễ bị bào mòn nếu thị trường trở nên minh bạch và ai cũng nhập được cùng nguồn.'
        ]
    },
    'money-lending': {
        deepDive: `Cho vay kiếm tiền nhờ định giá thời gian và rủi ro. Người vay cần tiền ngay, nên chấp nhận trả thêm để có quyền sử dụng vốn trước. Người cho vay thắng khi họ chọn đúng người vay, giữ tỷ lệ nợ xấu thấp và quay vòng vốn đủ lâu để lãi kép phát huy tác dụng.`,
        examples: [
            { title: '🏪 Tiệm cầm đồ', desc: `Tiệm cầm đồ nhận tài sản thế chấp và cho vay ngắn hạn với lãi suất cao hơn ngân hàng vì phục vụ nhu cầu gấp và rủi ro lớn hơn. Biên lợi nhuận đến từ tốc độ xử lý và khả năng kiểm soát nợ xấu.` }
        ],
        whoFits: [
            'Phù hợp với người có vốn nhàn rỗi và kỷ luật thẩm định rủi ro tốt.',
            'Mạnh khi bạn hiểu rõ người vay hơn thị trường chung và có cơ chế bảo toàn vốn.'
        ],
        watchouts: [
            'Lãi suất cao không cứu được danh mục nếu chọn sai người vay hoặc quản trị nợ lỏng lẻo.',
            'Đây là mô hình bị ràng buộc pháp lý mạnh; thiếu kiểm soát rất dễ chuyển thành tín dụng độc hại.'
        ]
    },
    'landlord-rent': {
        deepDive: `Cho thuê kiếm tiền bằng cách bán QUYỀN SỬ DỤNG chứ không bán luôn tài sản. Điều này tạo ra hai lớp lợi ích cùng lúc: dòng tiền định kỳ và khả năng tăng giá của tài sản gốc. Người làm tốt mô hình này thường không chỉ nhìn giá thuê, mà nhìn cả công suất sử dụng, chi phí vốn và khả năng tăng giá trị tài sản theo thời gian.`,
        examples: [
            { title: '🚜 Cho thuê máy móc', desc: `Một doanh nghiệp sở hữu xe nâng hoặc máy xúc có thể cho các công trình thuê theo ca hoặc theo tháng. Tài sản làm việc cho nhiều khách khác nhau mà quyền sở hữu vẫn nằm trong tay chủ máy.` }
        ],
        whoFits: [
            'Phù hợp với người muốn tích lũy tài sản bền và ưu tiên dòng tiền định kỳ.',
            'Mạnh khi bạn chọn tài sản có nhu cầu thuê ổn định và quản lý vận hành tốt.'
        ],
        watchouts: [
            'Sai ở đòn bẩy nợ hoặc vị trí tài sản có thể biến dòng tiền dương thành áp lực lãi vay.',
            'Tài sản xuống cấp, trống công suất hoặc khách thuê xấu đều ăn mòn lợi nhuận nhanh hơn nhiều người nghĩ.'
        ]
    },
    'guild-monopoly': {
        deepDive: `Độc quyền tạo tiền bằng cách hạn chế nguồn cung hoặc hạn chế người được tham gia cuộc chơi. Khi rào cản gia nhập đủ cao, người trong hệ thống có quyền giữ giá, giữ biên lợi nhuận và bảo vệ vị thế lâu hơn. Đây là lý do nhiều ngành giàu tiền luôn cố xây "moat" bằng giấy phép, tiêu chuẩn, dữ liệu hay mạng lưới phân phối.`,
        examples: [
            { title: '🚕 Taxi medallion', desc: `Khi số giấy phép hoạt động bị giới hạn, giá trị của giấy phép tăng rất cao vì ai muốn vào nghề cũng phải mua quyền tiếp cận thị trường. Lợi nhuận không chỉ nằm ở dịch vụ chạy xe mà còn nằm ở việc sở hữu quyền vào cuộc chơi.` }
        ],
        whoFits: [
            'Phù hợp với tổ chức hoặc cá nhân giữ được giấy phép, chứng chỉ hoặc quyền phân phối hiếm.',
            'Mạnh trong ngành mà khách hàng coi sự tin cậy và tiêu chuẩn là bắt buộc.'
        ],
        watchouts: [
            'Công nghệ mới thường phá monopoly nhanh hơn người trong cuộc dự đoán.',
            'Nếu đặc quyền quá lộ liễu, áp lực pháp lý và phản ứng xã hội sẽ tăng mạnh.'
        ]
    },
    'factory-production': {
        deepDive: `Sản xuất công nghiệp thắng nhờ biến chi phí cố định lớn thành chi phí đơn vị nhỏ. Máy móc, nhà xưởng và quy trình càng được lấp đầy công suất, mỗi sản phẩm càng rẻ. Vì vậy người vận hành giỏi luôn ám ảnh bởi ba câu hỏi: công suất có đầy không, lỗi có thấp không và đầu ra có đủ lớn để tiêu thụ sản lượng không.`,
        examples: [
            { title: '👕 Xưởng may xuất khẩu', desc: `Một xưởng may lời không phải vì từng chiếc áo đắt, mà vì chạy số lượng lớn với quy trình ổn định. Sai hỏng 2-3% ở quy mô hàng trăm nghìn sản phẩm đã là chênh lệch lợi nhuận rất lớn.` }
        ],
        whoFits: [
            'Phù hợp với người có khả năng vận hành, kiểm soát quy trình và huy động vốn lớn.',
            'Mạnh khi thị trường đủ rộng để hấp thụ quy mô và bạn tối ưu được chuỗi cung ứng.'
        ],
        watchouts: [
            'Công suất thừa, tồn kho và lỗi chất lượng là ba thứ giết chết nhà máy nhanh nhất.',
            'Mô hình này khó xoay trở nếu nhu cầu đổi nhanh mà dây chuyền quá cứng.'
        ]
    },
    'wage-labor': {
        deepDive: `Làm thuê là mô hình đánh đổi upside để lấy sự chắc chắn. Bạn giao quyền sở hữu kết quả dài hạn cho doanh nghiệp, đổi lại nhận thu nhập đều, quy trình rõ và ít biến động hơn. Đây là mô hình tốt để học, tích lũy vốn và quan sát hệ thống lớn, nhưng nó hiếm khi là điểm cuối nếu mục tiêu là tự do tài chính mạnh.`,
        examples: [
            { title: '💻 Kỹ sư phần mềm', desc: `Một kỹ sư có thể nhận lương cao hơn mặt bằng nhờ kỹ năng hiếm, nhưng trần thu nhập vẫn gắn với số giờ làm và cấu trúc lương thưởng của công ty. Bước nhảy lớn thường chỉ xuất hiện khi có equity hoặc chuyển sang mô hình leverage hơn.` }
        ],
        whoFits: [
            'Phù hợp để xây kỹ năng, tích lũy vốn ban đầu và giảm rủi ro tài chính cá nhân.',
            'Mạnh với người ưu tiên ổn định, lộ trình rõ và không muốn tự gánh toàn bộ rủi ro kinh doanh.'
        ],
        watchouts: [
            'Dễ rơi vào cảm giác an toàn giả nếu chi phí sống tăng nhanh hơn tốc độ tăng lương.',
            'Nếu không tích lũy kỹ năng và tài sản ngoài lương, bạn rất dễ mắc kẹt trong trần thu nhập tuyến tính.'
        ]
    },
    'stock-investment': {
        deepDive: `Đầu tư cổ phần cho phép bạn sở hữu cỗ máy tạo lợi nhuận mà không trực tiếp vận hành. Điểm mạnh thật sự không chỉ là giá cổ phiếu tăng, mà là quyền hưởng phần tăng trưởng của doanh nghiệp, cộng thêm lãi kép từ việc tái đầu tư cổ tức và lợi nhuận chưa phân phối. Người thắng dài hạn thường mua chất lượng và chờ đợi, không phải giao dịch liên tục.`,
        examples: [
            { title: '📦 Nhà đầu tư ETF chỉ số', desc: `Một người đều đặn mua quỹ chỉ số hàng tháng đang sở hữu hàng trăm doanh nghiệp cùng lúc. Họ không cần chọn từng mã, nhưng vẫn hưởng tăng trưởng chung của nền kinh tế qua thời gian dài.` }
        ],
        whoFits: [
            'Phù hợp với người có thu nhập đều, kỷ luật dài hạn và không cần tiền gấp.',
            'Mạnh khi bạn ưu tiên tích lũy tài sản hơn là tiêu tiền ngay vào lối sống hiện tại.'
        ],
        watchouts: [
            'Biến động ngắn hạn rất dễ ép nhà đầu tư bán đúng lúc tệ nhất nếu không có kế hoạch.',
            'Đòn bẩy tài chính và đầu cơ ngắn hạn có thể biến mô hình tốt thành trò chơi xác suất xấu.'
        ]
    },
    'insurance-risk': {
        deepDive: `Bảo hiểm là kinh doanh xác suất cộng với quản trị vốn. Công ty thắng khi dữ liệu đủ tốt để định giá phí sát hơn rủi ro thật, đồng thời giữ được lượng tiền thu trước đủ lâu để đầu tư. Vì thế biên lợi nhuận không chỉ đến từ underwriting mà còn đến từ cách họ dùng "float" an toàn và hiệu quả.`,
        examples: [
            { title: '🌾 Bảo hiểm mùa vụ', desc: `Nông dân đóng phí nhỏ để phòng mất mùa. Công ty bảo hiểm dùng dữ liệu khí hậu, khu vực và lịch sử mùa vụ để tính phí sao cho số đông bù cho số ít bị thiệt hại nặng.` }
        ],
        whoFits: [
            'Phù hợp với tổ chức mạnh về dữ liệu, vốn dự phòng và quản trị rủi ro.',
            'Mạnh ở quy mô lớn vì càng nhiều người tham gia thì xác suất càng dễ dự báo.'
        ],
        watchouts: [
            'Một sự kiện tail risk như thiên tai lớn hoặc đại dịch có thể phá mọi giả định mô hình.',
            'Nếu chạy theo tăng trưởng phí mà định giá sai rủi ro, lợi nhuận sẽ biến mất rất nhanh.'
        ]
    },
    franchise: {
        deepDive: `Franchise thực chất là bán HỆ THỐNG đã được kiểm chứng. Người mua franchise không chỉ trả cho logo, họ trả cho menu, SOP, đào tạo, marketing, thiết kế cửa hàng và xác suất thành công cao hơn tự làm từ đầu. Đây là cách biến một doanh nghiệp vận hành tốt thành một cỗ máy nhân bản vốn của người khác.`,
        examples: [
            { title: '🏪 Cửa hàng tiện lợi', desc: `Một mô hình convenience store thành công có thể được đóng gói thành franchise: layout, sản phẩm chủ lực, quy trình nhập hàng, công thức khuyến mãi. Chủ thương hiệu mở rộng nhanh mà không phải tự bỏ vốn cho từng điểm bán.` }
        ],
        whoFits: [
            'Phù hợp với người đã có mô hình thắng lặp lại và muốn mở rộng bằng hệ thống.',
            'Phù hợp với người mua franchise nếu họ muốn giảm sai lầm khởi nghiệp ban đầu.'
        ],
        watchouts: [
            'Nếu unit economics của cửa hàng gốc chưa thực sự khỏe, nhân bản chỉ làm lỗi lan rộng hơn.',
            'Kiểm soát chất lượng yếu sẽ làm thương hiệu hỏng trên toàn mạng lưới.'
        ]
    },
    'intellectual-property': {
        deepDive: `IP mạnh vì nó tách hoàn toàn khâu tạo ra khỏi khâu phân phối. Bạn sáng tạo một lần, nhưng có thể đóng gói thành nhiều định dạng và bán ở nhiều kênh: bản gốc, license, thương hiệu phụ, merchandise, chuyển thể. Khi chi phí sao chép gần bằng 0, phần lớn lợi nhuận nằm ở quyền sở hữu chứ không nằm ở công sức sản xuất thêm.`,
        examples: [
            { title: '🎵 Nhạc sĩ nhận royalty', desc: `Một ca khúc thành công có thể tạo tiền từ streaming, biểu diễn, quảng cáo, phim và bản cover. Bài hát được viết một lần nhưng mỗi lần phát sinh lượt nghe hoặc cấp phép lại tạo thêm dòng thu nhập.` }
        ],
        whoFits: [
            'Phù hợp với người sáng tạo có khả năng tạo thứ khó thay thế và có thể được bảo hộ hoặc ghi nhận quyền sở hữu.',
            'Mạnh nhất khi bạn biết biến một IP thành nhiều lớp sản phẩm thay vì chỉ bán một lần.'
        ],
        watchouts: [
            'Tác phẩm hay chưa đủ; nếu không có phân phối, marketing và bảo hộ thì IP rất dễ bị sao chép mà không capture được giá trị.',
            'Nhiều IP không chết vì kém chất lượng mà vì chủ sở hữu không mở rộng được vòng đời thương mại của nó.'
        ]
    },
    'consulting-expertise': {
        deepDive: `Tư vấn kiếm tiền từ việc rút ngắn thời gian ra quyết định và giảm chi phí sai lầm cho khách hàng. Khách không mua số giờ, họ mua xác suất thành công cao hơn và tốc độ giải quyết vấn đề nhanh hơn. Vì vậy consultant giỏi thường tăng giá không phải bằng làm nhiều hơn, mà bằng xử lý các vấn đề đắt tiền hơn.`,
        examples: [
            { title: '🔐 Tư vấn an ninh mạng', desc: `Một chuyên gia giúp doanh nghiệp vá lỗ hổng trước khi bị tấn công. Phí tư vấn có thể rất cao vì cái khách hàng đang mua là tránh một tổn thất lớn hơn nhiều lần so với phí trả.` }
        ],
        whoFits: [
            'Phù hợp với người có chuyên môn sâu, uy tín cao và khả năng chẩn đoán vấn đề nhanh.',
            'Mạnh khi bạn giải quyết được bài toán có giá trị tài chính lớn hoặc rủi ro cao.'
        ],
        watchouts: [
            'Nếu không đóng gói tri thức thành phương pháp, team hoặc sản phẩm, bạn vẫn bị khóa trong lịch cá nhân.',
            'Uy tín là tài sản chính; một vài case thất bại hoặc lời khuyên yếu sẽ làm giá trị thương hiệu giảm mạnh.'
        ]
    },
    'network-mlm': {
        deepDive: `MLM hấp dẫn vì nó hứa hẹn đòn bẩy đội nhóm, nhưng chất lượng mô hình phụ thuộc hoàn toàn vào câu hỏi: tiền đến từ sản phẩm hay đến từ việc kéo người mới vào hệ thống? Nếu sản phẩm không có sức mua thật ngoài nội bộ, cấu trúc thường sụp khi tốc độ tuyển dụng chậm lại. Vì vậy phải nhìn dòng tiền thật, không nhìn slide thu nhập.`,
        examples: [
            { title: '🧴 Direct selling mỹ phẩm', desc: `Một số mạng lưới bán mỹ phẩm hoặc đồ gia dụng có sản phẩm thật, doanh số thật và hoa hồng đội nhóm. Tuy nhiên phần lớn thu nhập vẫn tập trung vào số ít người tuyển được mạng lưới lớn và giữ chân được khách lặp lại.` }
        ],
        whoFits: [
            'Chỉ phù hợp nếu sản phẩm có giá trị thật, bạn hiểu rõ chính sách trả thưởng và chấp nhận mô hình bán hàng trực tiếp.',
            'Có thể hợp với người rất mạnh về xây cộng đồng và quản lý đội nhóm bán hàng.'
        ],
        watchouts: [
            'Nếu thu nhập trên giấy đến chủ yếu từ tuyển người mới, rủi ro pyramid là rất cao.',
            'Chi phí cơ hội lớn: bạn có thể bỏ nhiều thời gian xã hội nhưng không xây được tài sản bền như brand, code hay equity.'
        ]
    },
    'platform-marketplace': {
        deepDive: `Marketplace thắng vì nó gom thanh khoản. Khi người mua tin rằng "lên đây là có hàng", còn người bán tin rằng "lên đây là có khách", nền tảng bắt đầu tự hút tăng trưởng. Từ thời điểm đó, lợi nhuận không còn đến từ từng sản phẩm riêng lẻ mà đến từ việc kiểm soát luồng giao dịch, dữ liệu và hành vi của cả thị trường.`,
        examples: [
            { title: '🛵 Ứng dụng gọi xe', desc: `Một app gọi xe không sở hữu xe nhưng kiểm soát nơi cung gặp cầu. Mỗi cuốc xe tạo một khoản phí nhỏ, nhưng hàng triệu cuốc/ngày biến nó thành doanh thu cực lớn.` }
        ],
        whoFits: [
            'Phù hợp với người giải được bài toán hai phía thị trường và có khả năng đốt lực cho giai đoạn đầu.',
            'Mạnh nhất khi thị trường phân mảnh, người mua và người bán khó tìm nhau nếu không có nền tảng.'
        ],
        watchouts: [
            'Cold start là tử huyệt: không có người bán thì không có người mua, và ngược lại.',
            'Nếu platform không khóa được network effect, người dùng có thể multi-home và biên lợi nhuận sẽ yếu.'
        ]
    },
    'saas-subscription': {
        deepDive: `SaaS mạnh vì nó biến một vấn đề lặp đi lặp lại của khách thành dòng tiền lặp đi lặp lại cho bạn. Một khi sản phẩm đã gắn vào workflow, chi phí chuyển đổi của khách tăng lên và doanh thu trở nên dễ dự báo hơn nhiều so với bán từng dự án lẻ. Chìa khóa thật sự không phải chỉ là có thêm khách mới, mà là giữ churn thấp và mở rộng doanh thu trên mỗi khách theo thời gian.`,
        examples: [
            { title: '🛍️ Shopify cho cửa hàng online', desc: `Chủ shop trả phí hàng tháng để dùng hạ tầng bán hàng thay vì tự viết website. Khi cửa hàng đã có dữ liệu, giao diện, quy trình thanh toán và app tích hợp, khả năng rời nền tảng sẽ giảm rất mạnh.` }
        ],
        whoFits: [
            'Phù hợp với người nhìn thấy một pain point lặp lại và có thể biến nó thành phần mềm hoặc dịch vụ chuẩn hóa.',
            'Mạnh khi sản phẩm gắn chặt vào workflow hoặc dữ liệu quan trọng của khách hàng.'
        ],
        watchouts: [
            'Nhiều SaaS chết không phải vì thiếu tính năng, mà vì không giải quyết pain đủ đau để khách trả định kỳ.',
            'Nếu CAC cao hơn nhiều so với LTV hoặc churn cao, doanh thu tăng nhưng công ty vẫn không khỏe.'
        ]
    },
    'creator-economy': {
        deepDive: `Creator economy kiếm tiền bằng cách biến attention thành trust, rồi biến trust thành nhiều dòng doanh thu. Ads thường chỉ là lớp ngoài cùng; tiền lớn hơn thường nằm ở tài trợ, sản phẩm riêng, cộng đồng trả phí và sức mạnh phân phối. Vì vậy creator bền không chỉ là người làm nội dung hay, mà là người biết chuyển khán giả thành tài sản kinh doanh.`,
        examples: [
            { title: '📰 Newsletter chuyên ngành', desc: `Một người viết bản tin về tài chính hoặc công nghệ có thể bắt đầu miễn phí để xây tệp độc giả, sau đó bán sponsorship, bản trả phí hoặc khóa học. Cùng một nội dung nhưng có nhiều tầng kiếm tiền khác nhau.` }
        ],
        whoFits: [
            'Phù hợp với người có góc nhìn rõ, chịu được nhịp sản xuất nội dung dài hạn và biết xây quan hệ với khán giả.',
            'Mạnh khi bạn tập trung vào một niche đủ hẹp để khác biệt nhưng đủ lớn để có cầu chi tiền.'
        ],
        watchouts: [
            'Thuật toán có thể đẩy hoặc bóp reach rất nhanh, nên lệ thuộc một platform là rủi ro lớn.',
            'Nếu không chuyển audience thành email list, sản phẩm hoặc cộng đồng riêng, bạn đang xây nhà trên đất thuê.'
        ]
    },
    'crypto-web3': {
        deepDive: `Crypto mở ra các dòng thu nhập mới vì quyền sở hữu, giao dịch và phân phối giá trị được mã hóa trực tiếp trong mạng lưới. Nhưng chính vì tài sản chạy 24/7, thanh khoản toàn cầu và rào cản thấp nên tốc độ tạo cơ hội cũng đi kèm tốc độ hủy vốn rất nhanh. Trong mảng này, quản trị rủi ro thường quan trọng hơn việc chọn đúng câu chuyện hot.`,
        examples: [
            { title: '⛓️ Ethereum staking', desc: `Người nắm giữ ETH có thể khóa tài sản để hỗ trợ mạng lưới và nhận phần thưởng định kỳ. Đây là ví dụ rõ nhất của việc kiếm tiền nhờ tham gia vận hành một hạ tầng số, nhưng lợi nhuận thực vẫn phụ thuộc vào giá tài sản và rủi ro nền tảng.` }
        ],
        whoFits: [
            'Phù hợp với người hiểu rõ rủi ro kỹ thuật, thanh khoản và chấp nhận biến động lớn.',
            'Mạnh hơn nếu bạn tiếp cận như một danh mục thử nghiệm có kỷ luật, không phải vé số làm giàu nhanh.'
        ],
        watchouts: [
            'Yield cao bất thường thường là dấu hiệu rủi ro cao bất thường.',
            'Sai ví, sai chain, smart contract lỗi hoặc lưu ký kém có thể làm mất vốn dù nhận định thị trường đúng.'
        ]
    },
    'ai-automation': {
        deepDive: `AI tạo tiền khi nó biến tri thức và thao tác lặp thành quy trình có thể chạy gần như không giới hạn. Phần giá trị lớn nhất không nằm ở bản thân model, mà nằm ở workflow, dữ liệu, integration và kết quả cuối cùng mà khách hàng nhận được. Người thắng không nhất thiết là người tự huấn luyện model, mà là người gắn AI vào đúng chỗ để cắt chi phí hoặc tăng doanh thu rõ rệt.`,
        examples: [
            { title: '📩 Tự động hóa chăm sóc khách hàng', desc: `Một doanh nghiệp nhỏ dùng chatbot AI để trả lời FAQ, phân loại lead và chuyển các case khó cho người thật. Kết quả là cùng một team nhưng xử lý được nhiều khách hơn và phản hồi nhanh hơn 24/7.` }
        ],
        whoFits: [
            'Phù hợp với người hiểu pain point kinh doanh và biết đóng gói AI thành kết quả đo được.',
            'Mạnh khi bạn sở hữu workflow, dữ liệu riêng hoặc kênh phân phối chứ không chỉ dùng tool giống mọi người.'
        ],
        watchouts: [
            'Nếu chỉ làm wrapper mỏng không có dữ liệu, thương hiệu hay integration sâu, lợi thế sẽ bị copy rất nhanh.',
            'Đầu ra AI vẫn cần kiểm soát chất lượng; tự động hóa sai quy trình chỉ khiến lỗi lan rộng nhanh hơn.'
        ]
    },
    'formula-time-money': {
        deepDive: `Linear income không xấu, nhưng nó có trần rất rõ. Mỗi lần bạn tăng thu nhập, thường sẽ phải tăng kỹ năng, tăng giờ hoặc tăng mức căng thẳng đi kèm. Vì vậy công thức này phù hợp để xây nền, nhưng muốn bứt phá thì bạn gần như luôn phải kết hợp thêm leverage hoặc tài sản.`,
        examples: [
            { title: '🦷 Nha sĩ theo ca', desc: `Một nha sĩ có thể có thu nhập cao trên mỗi giờ, nhưng số ca khám vẫn bị giới hạn bởi lịch làm việc. Khi muốn tăng mạnh thu nhập, họ thường phải mở phòng khám, tuyển người hoặc bán gói dịch vụ thay vì chỉ tự làm nhiều ca hơn.` }
        ],
        whoFits: [
            'Phù hợp để kiếm tiền sớm, dễ hiểu và dễ dự báo dòng tiền cá nhân.',
            'Rất tốt cho giai đoạn tích lũy vốn, kinh nghiệm và quan hệ ban đầu.'
        ],
        watchouts: [
            'Tăng rate thường khó hơn bạn nghĩ vì thị trường luôn so sánh bạn với lựa chọn thay thế.',
            'Nếu chỉ tối ưu công thức tuyến tính quá lâu, bạn sẽ bỏ lỡ thời gian xây leverage dài hạn.'
        ]
    },
    'formula-leverage': {
        deepDive: `Leverage là cách bẻ cong trần thu nhập. Thay vì mỗi đơn vị đầu vào tạo ra một đơn vị đầu ra, bạn thiết kế để một quyết định, một dòng code hoặc một mẩu nội dung tạo ra kết quả cho rất nhiều người cùng lúc. Đây là điểm phân biệt lớn nhất giữa người "làm chăm chỉ" và người xây hệ thống giàu có.`,
        examples: [
            { title: '🏘️ Đòn bẩy vốn trong BĐS', desc: `Một nhà đầu tư dùng một phần vốn tự có cộng vốn vay để mua tài sản cho thuê. Nếu tài sản tạo dòng tiền ổn và tăng giá, tỷ suất trên vốn tự có có thể cao hơn nhiều so với mua hoàn toàn bằng tiền mặt.` }
        ],
        whoFits: [
            'Phù hợp với người đã có kỹ năng cốt lõi và muốn nhân kết quả lên thay vì chỉ làm nhiều hơn.',
            'Mạnh nhất khi leverage đi cùng kiểm soát rủi ro, không phải chỉ tối đa hóa quy mô.'
        ],
        watchouts: [
            'Leverage khuếch đại cả kết quả tốt lẫn sai lầm; dùng sai là gãy rất nhanh.',
            'Nhiều người tìm leverage trước khi có năng lực nền, nên scale được cả hệ thống yếu.'
        ]
    },
    'formula-passive': {
        deepDive: `Passive income nên được hiểu là "thu nhập không cần sự hiện diện liên tục", chứ không phải "không cần làm gì". Mọi dòng thu nhập thụ động chất lượng đều đòi hỏi giai đoạn xây tài sản trước: vốn, nội dung, phần mềm, hệ thống vận hành hoặc quyền sở hữu. Sau đó phần thưởng là thời gian được mua lại dần dần.`,
        examples: [
            { title: '🧩 Bán template số', desc: `Một designer tạo bộ template Notion hoặc Figma một lần rồi bán qua chợ số. Mỗi đơn hàng sau gần như không cần thêm công sức sản xuất, nên biên lợi nhuận rất cao.` }
        ],
        whoFits: [
            'Phù hợp với người sẵn sàng hy sinh công sức hoặc vốn trước để đổi lấy tự do sau.',
            'Mạnh khi bạn liên tục tái đầu tư dòng tiền thụ động thành tài sản mới.'
        ],
        watchouts: [
            'Passive giả rất nhiều: nhiều mô hình được gọi là thụ động nhưng thực tế vẫn đòi hỏi chăm sóc thường xuyên.',
            'Nếu chasing yield quá cao, bạn có thể đổi "thu nhập thụ động" lấy rủi ro mất gốc chủ động.'
        ]
    },
    'formula-value-creation': {
        deepDive: `Đây là công thức gốc vì nó ép bạn nhìn thẳng vào bản chất: tiền chỉ là cách thị trường ghi nhận giá trị đã được tạo ra và capture. Hai người cùng làm 8 giờ nhưng người giải quyết vấn đề đắt tiền hơn sẽ được trả cao hơn. Muốn tăng thu nhập bền, bạn phải hoặc giải quyết vấn đề lớn hơn, hoặc giữ lại tỷ lệ giá trị cao hơn, hoặc phục vụ nhiều người hơn.`,
        examples: [
            { title: '🔧 Người thợ sửa ống nước', desc: `Khách hàng không trả tiền cho 30 phút thao tác, họ trả tiền cho việc ngăn căn nhà bị ngập và tránh hư hại lớn. Giá trị thật nằm ở hậu quả được tránh đi, không nằm ở thời gian thao tác thuần túy.` }
        ],
        whoFits: [
            'Phù hợp cho mọi mô hình vì đây là lăng kính để đánh giá một cơ hội có bền hay không.',
            'Đặc biệt hữu ích khi bạn muốn định giá sản phẩm, dịch vụ hoặc chọn thị trường để đi vào.'
        ],
        watchouts: [
            'Nhiều người chỉ tập trung vào "mình thích làm gì" mà quên hỏi thị trường thực sự đang trả tiền cho vấn đề nào.',
            'Tạo giá trị chưa đủ nếu bạn không có cơ chế capture như pricing, thương hiệu, hợp đồng hoặc quyền sở hữu.'
        ]
    }
};

const popupDetailedExampleSets = {
    'hunting-gathering': [
        { title: '🦀 Bắt cua đêm', desc: `Một gia đình sống gần đầm phá đi bắt cua mỗi tối và sáng sớm mang ra chợ bán. Có mẻ trúng thì tiền mặt về ngay, nhưng chỉ cần mưa lớn hoặc triều xấu là cả ngày gần như không có thu nhập.` },
        { title: '🍄 Mùa nấm rừng', desc: `Nhóm dân bản vào rừng hái nấm, măng, dược liệu đúng mùa rồi bán cho thương lái. Thu nhập tăng mạnh vài tuần cao điểm nhưng không bền vì tài nguyên cạn nhanh nếu khai thác quá mức.` },
        { title: '🍯 Săn mật ong rừng', desc: `Người săn mật ong lời nhờ kỹ năng trèo, định vị tổ ong và chấp nhận rủi ro cao. Giá bán mỗi lít mật khá tốt, nhưng một tai nạn hoặc chuyến đi thất bại là công sức cả tuần mất sạch.` },
        { title: '🐚 Lặn bắt sò, nhum', desc: `Người lặn mò sò huyết hay nhum biển kiếm tiền trực tiếp từ sức khỏe và kinh nghiệm đọc con nước. Thu nhập có thể cao trong ngày đẹp trời, nhưng gần như không có tài sản nào tiếp tục tạo tiền khi họ nghỉ.` },
        { title: '🪵 Gom củi bán chợ', desc: `Ở vùng núi, một số hộ chặt củi khô hoặc lấy tre nứa rồi gùi ra chợ phiên bán. Công việc ít vốn nhưng biên lợi nhuận mỏng vì giá trị gần như bằng công vận chuyển và rủi ro cạn nguồn khai thác.` },
        { title: '🐟 Đánh cá ven bờ', desc: `Thuyền nhỏ ra khơi gần bờ từ sáng sớm, bán cá ngay khi cập bến để có tiền mặt trong ngày. Mô hình chỉ khá lên khi chủ thuyền tích lũy được lưới tốt hơn hoặc thuê thêm người, nếu không vẫn rất tuyến tính.` },
        { title: '🏹 Săn theo nhóm', desc: `Một nhóm thợ săn chia vai trò dò dấu, dồn thú và xử lý con mồi rồi chia phần chiến lợi phẩm. Sự phối hợp làm sản lượng tăng hơn làm một mình, nhưng tổng thu nhập vẫn dừng ngay khi nhóm ngừng lao động.` }
    ],
    farming: [
        { title: '🌾 Ruộng lúa hai vụ', desc: `Một hộ có 2-3 hecta ruộng lúa có thể thu hoạch đều hơn nhờ làm hai vụ mỗi năm. Tiền không về hàng ngày như săn bắt, nhưng khi năng suất ổn định họ bắt đầu có thặng dư để mua máy cày hoặc thuê thêm đất.` },
        { title: '☕ Vườn cà phê Tây Nguyên', desc: `Cà phê cho thấy sức mạnh của nông nghiệp hàng hóa: bỏ công quanh năm, thu tiền lớn vào mùa thu hoạch. Chủ vườn thắng khi kiểm soát được năng suất, giá phân bón và thời điểm bán chứ không chỉ nhờ diện tích đất.` },
        { title: '🦐 Ao tôm ven biển', desc: `Nuôi tôm có thể tạo dòng tiền cao hơn trồng lúa trên cùng diện tích, nhưng chi phí con giống, điện nước và rủi ro dịch bệnh cũng lớn hơn nhiều. Một vụ thắng có thể bù vài vụ thường, còn một vụ bệnh nặng có thể xóa sạch lợi nhuận cả năm.` },
        { title: '🐓 Trại gà đẻ trứng', desc: `Một trang trại gà đẻ tạo doanh thu đều mỗi ngày thay vì chờ một mùa gặt. Giá trị của mô hình nằm ở việc biến tài sản sinh học thành sản lượng lặp lại, nhưng lợi nhuận phụ thuộc mạnh vào giá cám và tỷ lệ hao hụt đàn.` },
        { title: '🥬 Nhà màng rau sạch', desc: `Nhà màng giúp người trồng chủ động hơn về chất lượng, sản lượng và lịch giao hàng cho siêu thị. So với canh tác ngoài trời, vốn đầu tư ban đầu cao hơn nhưng khả năng bán giá tốt và tái canh nhanh cũng tăng rõ rệt.` },
        { title: '🐄 Trang trại bò sữa', desc: `Bò sữa tạo nhiều dòng tiền cùng lúc: sữa hàng ngày, bê giống và phân chuồng. Tuy nhiên mô hình chỉ khỏe khi chủ trại tối ưu được thức ăn, sản lượng sữa và đầu ra dài hạn với nhà máy thu mua.` },
        { title: '🌳 Vườn sầu riêng', desc: `Cây lâu năm như sầu riêng cần nhiều năm chăm sóc trước khi cho trái, nên đây là mô hình hy sinh hiện tại để lấy dòng tiền lớn về sau. Ai đủ vốn đi qua giai đoạn đầu thường hưởng lợi lớn hơn người chỉ làm cây ngắn ngày.` }
    ],
    barter: [
        { title: '🔧 Đổi sửa xe lấy nông sản', desc: `Một người thợ sửa máy nông nghiệp ở vùng quê có thể nhận lúa hoặc gà thay cho tiền mặt khi nông dân chưa bán vụ mùa. Anh ta sau đó dùng số hàng đó đổi tiếp với cửa hàng tạp hóa hoặc thương lái để capture giá trị từ kỹ năng của mình.` },
        { title: '🧱 Đổi vật liệu lấy nhân công', desc: `Chủ nhà dư vật liệu xây dựng nhưng thiếu thợ, còn đội thợ cần vật liệu để nhận công trình khác. Hai bên đổi trực tiếp giúp giảm áp lực tiền mặt, miễn là mỗi bên tin mình nhận được thứ có thể dùng ngay.` },
        { title: '🐟 Đổi hải sản lấy đá lạnh', desc: `Ngư dân có cá tươi sau chuyến biển nhưng cần đá, nhiên liệu và gạo cho chuyến sau. Đại lý ven cảng nhận cá rồi đổi lại nhu yếu phẩm, tạo thành một chuỗi barter gần như khép kín trước khi mọi thứ được quy đổi ra tiền.` },
        { title: '📦 Đổi tồn kho lấy marketing', desc: `Một shop thời trang có hàng tồn cuối mùa có thể đổi cho agency để lấy gói chụp ảnh hoặc quảng cáo. Agency bán lại hoặc dùng làm quà tặng cho chiến dịch khác, biến hàng chậm luân chuyển thành dịch vụ có ích thật.` },
        { title: '🛏️ Khách sạn đổi phòng lấy truyền thông', desc: `Một khách sạn boutique tặng số đêm ở miễn phí cho nhiếp ảnh gia hoặc travel creator để đổi lấy bộ ảnh và nội dung quảng bá. Đây là barter hiện đại khi mỗi bên dùng tài sản sẵn có để lấy thứ mình thiếu mà không phải chi tiền mặt.` },
        { title: '🚚 Đổi vận chuyển lấy nguồn hàng', desc: `Chủ xe tải nhận chở miễn phí cho một đầu mối nông sản trong vài chuyến đầu để đổi lấy quyền ưu tiên mua hàng giá tốt. Thu nhập không đến ngay bằng tiền, nhưng anh ta mua được vị thế tốt hơn trong chuỗi cung ứng.` },
        { title: '🐄 Đổi gia súc lấy đất canh tác', desc: `Ở nhiều cộng đồng nông thôn, một gia đình có thể đổi vài con bò lấy quyền sử dụng mảnh đất hoặc phần mùa vụ trong vài năm. Bản chất vẫn là đổi thặng dư của tài sản này sang tài sản khác có giá trị sử dụng cao hơn với mình.` }
    ],
    craftsmanship: [
        { title: '💍 Thợ kim hoàn theo đơn', desc: `Một tiệm kim hoàn nhỏ lời chủ yếu ở công chế tác và thiết kế riêng, không phải ở giá vàng. Khách chấp nhận trả cao vì họ mua độ tinh xảo, độ tin cậy và khả năng làm đúng một món có ý nghĩa cá nhân.` },
        { title: '🪑 Xưởng mộc nội thất đặt riêng', desc: `Xưởng mộc làm tủ bếp hoặc bàn ăn custom thường có biên lợi nhuận tốt hơn hàng sản xuất đại trà vì khách trả cho kích thước vừa nhà và gu thẩm mỹ. Điểm nghẽn lại nằm ở tay nghề thợ chính và khả năng giữ chất lượng đồng đều.` },
        { title: '👞 Thợ đóng giày da', desc: `Một đôi giày đóng tay có thể bán gấp nhiều lần giày công nghiệp nếu form ôm chân, da tốt và sửa được lâu dài. Thu nhập cao đến từ độ hiếm kỹ năng, nhưng công suất rất khó tăng nếu chỉ có một người thợ chính.` },
        { title: '🥁 Thợ làm nhạc cụ', desc: `Người làm đàn guitar, violin hay trống thủ công kiếm tiền từ tai nghe, cảm giác vật liệu và danh tiếng trong cộng đồng chơi nhạc. Mỗi sản phẩm giống như một tác phẩm bán kèm niềm tin, nên uy tín thường quan trọng hơn quảng cáo.` },
        { title: '🧵 Thêu áo dài cưới', desc: `Một nghệ nhân thêu áo dài cao cấp không cạnh tranh bằng giá vải mà cạnh tranh bằng đường kim, bố cục và khả năng cá nhân hóa. Cùng là áo, nhưng sản phẩm thủ công có thể được định giá như một vật phẩm nghi lễ chứ không chỉ là quần áo.` },
        { title: '🪚 Phục chế đồ gỗ cổ', desc: `Người phục chế bàn ghế cổ tạo giá trị bằng cách giữ linh hồn món đồ trong khi kéo dài tuổi thọ thêm nhiều năm. Khách trả tiền cho việc tránh phải mua mới hoàn toàn và cho cảm giác giữ được câu chuyện gắn với tài sản cũ.` },
        { title: '🔪 Thợ rèn dao bếp', desc: `Dao bếp thủ công bán tốt khi người thợ hiểu nhu cầu thật của đầu bếp: độ cân bằng, độ giữ bén và cảm giác cầm. Một con dao tốt có thể được truyền miệng trong giới rất nhanh, khiến thương hiệu cá nhân trở thành đòn bẩy lớn nhất.` }
    ],
    'taxation-tribute': [
        { title: '🛣️ Phí qua trạm BOT', desc: `Người vận hành trạm thu phí không tạo ra hàng hóa mới mỗi lần xe đi qua, nhưng họ kiểm soát cổng hạ tầng nên có thể thu một phần dòng lưu thông. Đây là dạng quyền lực thu phí hiện đại rất gần với logic cống nạp xưa.` },
        { title: '📱 Phí chợ ứng dụng', desc: `Một app tạo doanh thu tốt vẫn phải chia phần cho kho ứng dụng vì đó là cửa ngõ tiếp cận người dùng. Chủ chợ số nắm quyền phân phối nên có thể áp mức phí đồng loạt trên hàng nghìn nhà phát triển cùng lúc.` },
        { title: '💳 Phí cổng thanh toán', desc: `Mỗi giao dịch thẻ hay ví điện tử đều để lại một phần nhỏ cho đơn vị xử lý thanh toán. Tỷ lệ nhỏ trên từng giao dịch nghe không lớn, nhưng ở quy mô hàng triệu giao dịch nó trở thành dòng tiền khổng lồ và rất đều.` },
        { title: '🎮 Phí nền tảng game', desc: `Nhà phát hành console hoặc kho game số thu phí mỗi bản game bán ra vì họ kiểm soát hệ sinh thái và lượng người chơi. Studio tạo nội dung chính, nhưng người giữ cổng vẫn capture được phần đáng kể của dòng doanh thu.` },
        { title: '🏬 Phí thuê sạp chợ đầu mối', desc: `Ban quản lý chợ không trực tiếp trồng rau hay nuôi cá, nhưng họ thu tiền từ mọi tiểu thương muốn vào điểm mua bán có lưu lượng cao. Giá trị nằm ở việc kiểm soát vị trí và trật tự giao dịch chứ không nằm ở sản phẩm.` },
        { title: '🎟️ Phí dịch vụ bán vé', desc: `Một nền tảng ticketing thường thu thêm phí xử lý trên mỗi vé hòa nhạc, hội thảo hoặc sự kiện thể thao. Khi khán giả và nhà tổ chức đều phải đi qua hệ thống đó, phí nhỏ trở thành dạng thuế mềm trên dòng giao dịch.` },
        { title: '☁️ Phí hạ tầng số bắt buộc', desc: `Doanh nghiệp SaaS đôi khi phải trả thêm cho nền tảng email, SMS hay bản đồ để sản phẩm vận hành được. Bản chất đây là mô hình "thu phí trên đường ống", rất giống người thu tô trên một tuyến thương mại không thể bỏ qua.` }
    ],
    'merchant-trade': [
        { title: '🚚 Thu mua nông sản xuất khẩu', desc: `Một thương lái gom xoài hoặc thanh long từ nhiều vườn nhỏ, phân loại lại rồi bán cho đơn vị xuất khẩu với giá cao hơn. Giá trị anh ta tạo ra nằm ở khâu gom hàng, chuẩn hóa chất lượng và chấp nhận rủi ro hư hỏng ngắn hạn.` },
        { title: '🧴 Nhập mỹ phẩm chính ngạch', desc: `Doanh nghiệp nhỏ nhập mỹ phẩm từ Hàn Quốc về, lo giấy tờ, nhãn phụ và phân phối cho spa trong nước. Họ không sản xuất sản phẩm nào, nhưng kiếm biên lợi nhuận từ việc giải quyết logistics, pháp lý và niềm tin thị trường.` },
        { title: '🧊 Thương lái thủy sản', desc: `Đầu mối hải sản mua hàng ngay tại cảng khi ngư dân cần tiền mặt gấp rồi chở thẳng đến nhà hàng hoặc chợ sỉ. Tốc độ và quan hệ giúp họ chốt được hàng tốt trước đối thủ, nhưng chỉ cần chậm lạnh chuỗi là lãi biến thành lỗ.` },
        { title: '📦 Amazon FBA seller', desc: `Một seller chọn sản phẩm ngách, đặt hàng từ xưởng và dùng hệ thống fulfillment của Amazon để bán toàn quốc. Dù diễn ra trên nền tảng số, bản chất vẫn là buôn bán cổ điển: mua sỉ, tối ưu gói hàng, bán lẻ với markup hợp lý.` },
        { title: '🏗️ Phân phối vật liệu xây dựng', desc: `Nhà phân phối xi măng, thép hoặc gạch ốp lời nhờ quay vòng kho nhanh và cấp hàng đúng thời điểm công trình cần. Lợi thế nằm ở mạng lưới nhà thầu, dòng vốn lưu động và khả năng chịu công nợ tốt hơn cửa hàng nhỏ.` },
        { title: '👟 Mua hàng outlet bán lại', desc: `Một người chuyên săn hàng outlet hoặc clearance ở nước ngoài rồi bán lại trong nước đang làm đúng logic merchant trade. Chênh lệch đến từ thông tin, nguồn mua và kỹ năng chọn món có nhu cầu thực chứ không phải chỉ từ may mắn.` },
        { title: '🪵 Buôn gỗ hợp pháp theo vùng', desc: `Có nơi nguồn gỗ nguyên liệu dồi dào nhưng xưởng tiêu thụ lại nằm ở tỉnh khác. Thương nhân kiểm soát giấy tờ, vận chuyển và lịch giao sẽ capture phần chênh lệch giữa nơi thừa nguồn và nơi thiếu hàng.` }
    ],
    'money-lending': [
        { title: '🧾 Bao thanh toán hóa đơn', desc: `Một công ty tài chính mua lại hóa đơn chưa đến hạn của doanh nghiệp với mức chiết khấu nhỏ. Doanh nghiệp có tiền mặt ngay để quay vòng, còn bên cho vay kiếm lời nhờ hiểu rõ chất lượng khách hàng phải thu.` },
        { title: '🚜 Vay mùa vụ cho nông dân', desc: `Nông dân cần tiền mua giống và phân trước khi có thu hoạch, nên chấp nhận trả lãi để có vốn đúng lúc. Bên cho vay thắng nếu họ hiểu chu kỳ mùa vụ, định giá đúng rủi ro và không dồn vốn quá nhiều vào một vùng dịch bệnh.` },
        { title: '🏪 Vay quay vòng cho tiểu thương', desc: `Chủ sạp chợ có dòng tiền đều hàng ngày nhưng thiếu vốn nhập hàng đầu buổi sáng. Một khoản vay ngắn hạn nhỏ, giải ngân cực nhanh, có thể mang lợi suất tốt cho người cho vay nếu kiểm soát chặt uy tín và lịch sử bán hàng.` },
        { title: '💳 Mô hình thẻ tín dụng', desc: `Ngân hàng tạm ứng sức mua cho khách hàng trước và thu lãi, phí từ nhóm trả chậm. Lợi nhuận rất lớn khi danh mục được quản trị tốt, nhưng chỉ cần kiểm soát nợ xấu lỏng là mô hình vỡ ngay vì lãi cao không bù nổi mất vốn.` },
        { title: '📦 Tài trợ nhập hàng cho seller', desc: `Một nhà bán lẻ online có dữ liệu đơn cũ đẹp nhưng thiếu tiền nhập lô hàng kế tiếp trước mùa cao điểm. Bên cấp vốn có thể cho vay ngắn hạn dựa trên vòng quay tồn kho và thu hồi nợ ngay khi doanh thu về.` },
        { title: '🏠 Cho vay thế chấp mua nhà', desc: `Khoản vay mua nhà là ví dụ rõ nhất của việc dùng tài sản bảo đảm để kéo dài thời gian hoàn vốn. Người cho vay chấp nhận lãi suất thấp hơn tín chấp vì có tài sản giữ lại làm hàng rào bảo vệ vốn.` },
        { title: '🤝 P2P lending có chọn lọc', desc: `Nền tảng P2P kết nối người có tiền nhàn rỗi với người vay nhỏ lẻ và thu phí môi giới hoặc chênh lệch lãi suất. Mô hình chỉ bền khi tiêu chuẩn thẩm định nghiêm; nếu tăng trưởng bằng cách nới điều kiện vay, nợ xấu sẽ phá hỏng niềm tin rất nhanh.` }
    ],
    'landlord-rent': [
        { title: '🚚 Cho thuê xe tải theo ngày', desc: `Chủ xe tải nhỏ có thể cho các shop hoặc đội chuyển nhà thuê theo ca thay vì tự lái toàn thời gian. Dòng tiền đến từ quyền sử dụng tài sản, còn chi phí chính là khấu hao, bảo dưỡng và thời gian xe nằm bãi không có khách.` },
        { title: '🎥 Cho thuê thiết bị quay phim', desc: `Một bộ máy quay, ống kính và đèn có thể kiếm tiền nhiều lần nếu được freelancer hoặc studio nhỏ thuê luân phiên. Người thắng ở mô hình này không chỉ sở hữu đồ tốt mà còn quản lý lịch thuê, cọc và tình trạng thiết bị rất chặt.` },
        { title: '🏢 Văn phòng mini chia phòng', desc: `Một chủ nhà thuê dài hạn nguyên tầng rồi chia thành phòng nhỏ cho startup và freelancer thuê lại. Bản chất đây là kiếm tiền từ tối ưu công suất sử dụng của cùng một mặt bằng chứ không đơn thuần là cho thuê trống.` },
        { title: '📦 Kho mini self-storage', desc: `Kho mini cho phép nhiều khách thuê diện tích nhỏ theo tháng để cất hàng hoặc đồ cá nhân. Một mặt bằng được chia càng hợp lý thì doanh thu trên mỗi mét vuông càng cao, miễn là tỷ lệ lấp đầy và an ninh được giữ tốt.` },
        { title: '🏡 Homestay vùng du lịch', desc: `Ngôi nhà ở vị trí đẹp có thể cho thuê ngắn ngày với doanh thu cao hơn cho thuê tháng nếu công suất phòng đủ tốt. Tuy nhiên mô hình chỉ thật sự lời khi chủ tối ưu được vận hành dọn phòng, check-in và mùa thấp điểm.` },
        { title: '🛠️ Cho thuê máy khoan, máy cắt', desc: `Cửa hàng thiết bị xây dựng nhỏ có thể mua máy dùng chuyên dụng rồi cho thợ và chủ nhà thuê theo ngày. Một món máy được dùng bởi nhiều khách khác nhau nên lợi nhuận phụ thuộc vào tần suất quay vòng hơn là giá thuê đơn lẻ.` },
        { title: '🖥️ Cho thuê máy chủ GPU', desc: `Trong thời đại số, tài sản cho thuê không chỉ là nhà đất mà còn có thể là máy chủ hoặc GPU cho các team AI nhỏ. Chủ tài sản kiếm tiền từ việc người khác cần năng lực tính toán ngay nhưng chưa muốn bỏ vốn lớn để sở hữu toàn bộ hạ tầng.` }
    ],
    'guild-monopoly': [
        { title: '⚕️ Giấy phép hành nghề y', desc: `Không phải ai giỏi sinh học cũng được mở phòng khám; giấy phép và chuẩn hành nghề tạo rào cản rất cao. Người trong cuộc vừa bảo vệ được chất lượng thị trường, vừa hưởng mức thu nhập tốt hơn nhờ nguồn cung bị giới hạn.` },
        { title: '🚖 Hạn ngạch taxi', desc: `Khi số xe được cấp phép hoạt động ở một đô thị bị giới hạn, quyền vào thị trường tự nó trở thành tài sản có giá. Lợi nhuận không chỉ nằm ở việc chở khách mà còn ở đặc quyền được pháp luật bảo vệ trước đối thủ mới.` },
        { title: '🧪 Patent thuốc mới', desc: `Một hãng dược bỏ chi phí R&D rất lớn để phát minh thuốc và sau đó được độc quyền khai thác trong thời gian bảo hộ. Trong giai đoạn đó họ có thể giữ biên lợi nhuận cao vì chưa có thuốc generic cùng hoạt chất cạnh tranh trực diện.` },
        { title: '🛰️ Giấy phép phổ tần viễn thông', desc: `Nhà mạng trả rất nhiều tiền để giành quyền sử dụng phổ tần vì đó là tài nguyên hữu hạn và được quản lý chặt. Quyền này trở thành moat thật sự vì đối thủ không thể đơn giản nhân bản hạ tầng nếu thiếu tần số hoạt động.` },
        { title: '📺 Bản quyền phát sóng thể thao', desc: `Ai nắm độc quyền giải đấu hấp dẫn có quyền quyết định giá bán thuê bao hoặc giá quảng cáo quanh nội dung đó. Người xem không trả cho tín hiệu video thuần túy, họ trả cho quyền truy cập thứ không thể xem ở nơi khác.` },
        { title: '🚰 Độc quyền hạ tầng tiện ích', desc: `Một hệ thống cấp nước, điện địa phương thường có tính độc quyền tự nhiên vì chi phí xây song song quá lớn. Khi đã kiểm soát đường ống hoặc lưới điện, đơn vị vận hành có vị thế mạnh hơn nhiều mô hình kinh doanh cạnh tranh thông thường.` },
        { title: '🗂️ Chuẩn bắt buộc trong ngành', desc: `Có những công ty sở hữu chuẩn dữ liệu, chứng nhận hoặc hệ thống bắt buộc dùng nếu muốn tham gia một chuỗi cung ứng lớn. Khi chuẩn đó được chấp nhận rộng, họ gần như trở thành guild hiện đại: quyết định ai được vào và ai phải trả phí để tương thích.` }
    ],
    'factory-production': [
        { title: '🧃 Nhà máy nước giải khát', desc: `Một nhà máy đồ uống phải đầu tư mạnh vào dây chuyền chiết rót, nhưng khi chạy gần đầy công suất thì chi phí trên mỗi chai giảm rất nhanh. Lợi nhuận đến từ việc bán số lượng cực lớn với sai lỗi rất thấp, chứ không phải từ từng chai riêng lẻ.` },
        { title: '📱 Xưởng lắp ráp điện tử', desc: `Xưởng OEM kiếm tiền nhờ khả năng lặp lại quy trình chính xác trên hàng chục nghìn thiết bị giống nhau. Khách hàng chọn họ không chỉ vì giá rẻ mà vì đúng deadline, tỷ lệ lỗi thấp và khả năng scale nhanh cho mùa cao điểm.` },
        { title: '🧴 Sản xuất mỹ phẩm contract', desc: `Một công ty mỹ phẩm có thể không sở hữu nhà máy riêng mà dùng đơn vị gia công đạt chuẩn để ra sản phẩm hàng loạt. Nhà máy lời nhờ phục vụ nhiều thương hiệu cùng một hạ tầng, còn thương hiệu lời nhờ tập trung vào marketing và phân phối.` },
        { title: '🍞 Bếp trung tâm cho chuỗi bánh', desc: `Thay vì mỗi cửa hàng tự làm từ đầu, một bếp trung tâm chuẩn hóa công thức rồi giao bán thành phẩm đến nhiều điểm bán. Cách này giảm chi phí lao động tay nghề cao ở từng cửa hàng và giữ chất lượng ổn định hơn khi mở rộng nhanh.` },
        { title: '🧱 Nhà máy gạch block', desc: `Mỗi viên gạch có giá trị đơn lẻ thấp nên chỉ mô hình sản xuất quy mô lớn mới lời. Chủ nhà máy phải ám ảnh với công suất, tiêu hao nguyên liệu và tỷ lệ hàng hỏng vì sai số nhỏ thôi cũng ăn hết biên lợi nhuận.` },
        { title: '🪑 Xưởng nội thất module', desc: `Khi nội thất được thiết kế theo module tiêu chuẩn, xưởng có thể cắt, khoan và lắp hàng loạt thay vì làm từng món một. Giá bán không cần quá cao, nhưng tốc độ giao hàng và khả năng tái sử dụng linh kiện giúp tổng lợi nhuận vượt xưởng thủ công.` },
        { title: '🔋 Lắp ráp pin hoặc pack điện', desc: `Đây là ví dụ điển hình của mô hình công nghiệp hiện đại: vốn máy móc lớn, yêu cầu kiểm soát chất lượng rất chặt và lợi nhuận phụ thuộc mạnh vào số lượng đơn hàng. Khi có hợp đồng dài hạn, quy mô biến thành lợi thế; khi mất đơn, chi phí cố định trở thành gánh nặng ngay.` }
    ],
    'wage-labor': [
        { title: '👨‍💻 Lập trình viên remote', desc: `Một dev remote có thể nâng thu nhập bằng cách bán kỹ năng cho thị trường tốt hơn mà không đổi nơi ở. Tuy nhiên tổng tiền vẫn gắn với số giờ họ thực sự làm và mức lương công ty chấp nhận trả, nên trần thu nhập vẫn hữu hình.` },
        { title: '🏥 Điều dưỡng theo ca', desc: `Điều dưỡng nhận lương ổn định, phụ cấp trực đêm và chế độ rõ ràng hơn nhiều nghề tự doanh. Điểm đánh đổi là lịch làm nặng và thu nhập gần như ngừng lại nếu phải nghỉ dài ngày vì sức khỏe hoặc gia đình.` },
        { title: '🧑‍🏫 Giáo viên tiếng Anh', desc: `Người dạy tiếng Anh có thể tăng thu nhập bằng lớp nhóm, chứng chỉ cao hơn hoặc học viên cao cấp hơn. Dù vậy, nếu không tạo khóa học hoặc trung tâm riêng, mô hình vẫn chủ yếu là đổi từng giờ giảng lấy tiền.` },
        { title: '🚗 Tài xế công nghệ', desc: `Ride-hailing cho cảm giác linh hoạt vì có thể bật ứng dụng bất cứ lúc nào, nhưng bản chất vẫn là wage labor theo chuyến. Thu nhập tăng khi chạy nhiều giờ cao điểm hơn, nhưng cũng giảm rất nhanh khi sức khỏe xuống hoặc nền tảng đổi chính sách thưởng.` },
        { title: '🧾 Kế toán nội bộ', desc: `Kế toán công ty thường có dòng tiền đều, kỹ năng tích lũy và ít rủi ro kinh doanh cá nhân. Mô hình khỏe để xây nền tài chính gia đình, nhưng bứt phá mạnh thường chỉ xảy ra khi chuyển sang tư vấn, quản lý hoặc mở dịch vụ riêng.` },
        { title: '🧑‍🍳 Bếp chính nhà hàng', desc: `Một bếp chính giỏi có thể được trả cao vì ảnh hưởng trực tiếp đến trải nghiệm khách và chi phí món ăn. Nhưng ngay cả khi rất giỏi, thu nhập vẫn bị giới hạn bởi số ca làm, quy mô nhà hàng và ngân sách nhân sự của chủ quán.` },
        { title: '🛒 Nhân viên sales lương + commission', desc: `Sales là dạng wage labor có biến số, vì thu nhập gồm phần cố định cộng thưởng theo kết quả. Nó cho upside tốt hơn lương cứng thuần túy, nhưng nếu bạn không sở hữu khách hàng, funnel hay sản phẩm thì phần lớn giá trị dài hạn vẫn thuộc về công ty.` }
    ],
    'stock-investment': [
        { title: '🧺 DCA vào quỹ chỉ số', desc: `Một người đi làm trích đều tiền mỗi tháng mua ETF chỉ số đang dùng kỷ luật thay cho khả năng dự đoán thị trường. Họ không cần bắt đúng đáy, chỉ cần duy trì đủ lâu để tăng trưởng doanh nghiệp và lãi kép làm phần còn lại.` },
        { title: '🏦 Mua cổ phiếu ngân hàng lấy cổ tức', desc: `Nhà đầu tư chọn doanh nghiệp dòng tiền ổn định, chia cổ tức đều để tạo nguồn thu bán thụ động hàng năm. Mô hình này ít kịch tính hơn cổ phiếu tăng trưởng, nhưng lại phù hợp với người muốn tích lũy tài sản và ngủ ngon hơn.` },
        { title: '🧑‍💼 Chương trình ESOP/ESPP', desc: `Một nhân viên mua cổ phiếu công ty mình với giá ưu đãi đang biến công sức lao động thành quyền sở hữu. Nếu doanh nghiệp tăng trưởng tốt, họ hưởng lợi kép: lương hiện tại và giá trị vốn tích lũy về sau.` },
        { title: '🏭 Mua doanh nghiệp chu kỳ lúc xấu', desc: `Nhà đầu tư giỏi đôi khi kiếm tiền lớn bằng cách mua công ty sản xuất, vận tải hay nguyên liệu khi ngành đang bị ghét nhưng nền tảng tài chính vẫn ổn. Phần thưởng đến từ việc thị trường định giá lại khi chu kỳ hồi phục, không phải từ giao dịch liên tục.` },
        { title: '📉 Hoảng loạn rồi bán đáy', desc: `Đây cũng là ví dụ quan trọng của mô hình cổ phần: cùng một tài sản tốt, người có kế hoạch sẽ giàu lên còn người bán trong hoảng loạn sẽ mất lợi thế lãi kép. Kiếm tiền từ cổ phiếu không chỉ là chọn mã mà còn là quản trị hành vi của chính mình.` },
        { title: '🏢 Đầu tư REIT niêm yết', desc: `REIT cho phép một nhà đầu tư nhỏ sở hữu gián tiếp danh mục văn phòng, kho bãi hay trung tâm thương mại mà không phải tự mua tài sản. Họ hưởng cổ tức và thanh khoản của thị trường chứng khoán, đổi lại phải chấp nhận biến động giá hàng ngày.` },
        { title: '🩺 Mua doanh nghiệp tăng trưởng dài hạn', desc: `Một công ty y tế, phần mềm hay hàng tiêu dùng tốt có thể tái đầu tư lợi nhuận nhiều năm liên tục và kéo giá trị doanh nghiệp lên mạnh. Người mua sớm và giữ đủ lâu đang sở hữu một cỗ máy mở rộng lợi nhuận thay vì chỉ mua một tờ giấy để lướt sóng.` }
    ],
    'insurance-risk': [
        { title: '🚗 Bảo hiểm xe cơ giới', desc: `Hàng triệu chủ xe đóng phí nhỏ để phòng một số ít tai nạn lớn, tạo ra đúng cấu trúc mà ngành bảo hiểm yêu thích. Nếu công ty định phí chuẩn và kiểm soát gian lận tốt, khoản chênh giữa tổng phí thu và bồi thường sẽ rất hấp dẫn.` },
        { title: '🏥 Bảo hiểm sức khỏe nhóm', desc: `Doanh nghiệp mua gói cho cả công ty giúp nhà bảo hiểm có tập khách lớn và dữ liệu rủi ro dễ dự báo hơn từng cá nhân lẻ. Lợi nhuận không chỉ đến từ phí mà còn từ khả năng đàm phán mạng lưới bệnh viện và quản lý tần suất khám không cần thiết.` },
        { title: '✈️ Bảo hiểm trễ chuyến bay', desc: `Parametric insurance trả tiền tự động khi dữ liệu công khai xác nhận chuyến bay trễ quá ngưỡng. Loại sản phẩm này giảm chi phí xử lý hồ sơ và gian lận, cho thấy tiền lớn trong bảo hiểm cũng nằm ở thiết kế vận hành chứ không chỉ ở toán xác suất.` },
        { title: '🚢 Bảo hiểm hàng hải', desc: `Một lô hàng xuất khẩu có thể chịu rủi ro chìm tàu, ẩm mốc, hư hỏng hoặc chậm giao. Nhà bảo hiểm thu phí từ rất nhiều lô hàng tương tự và chỉ bồi thường cho số ít sự cố thật, miễn là họ hiểu rõ tuyến vận tải và giá trị hàng hóa.` },
        { title: '🌪️ Tái bảo hiểm thiên tai', desc: `Công ty bảo hiểm gốc thường chuyển bớt rủi ro lớn cho đơn vị tái bảo hiểm khi gặp vùng bão lũ hoặc động đất. Đây là mô hình kiếm tiền từ xác suất ở cấp độ cao hơn, nơi vốn mạnh và khả năng định giá tail risk là lợi thế quyết định.` },
        { title: '📱 Gói bảo hành điện tử mở rộng', desc: `Khi mua điện thoại hay laptop, khách nhiều khi chấp nhận trả thêm để yên tâm trước rơi vỡ hoặc lỗi bất ngờ. Nhà cung cấp gói bảo hành thắng nếu dữ liệu cho thấy phần lớn khách sẽ không dùng hết quyền lợi đã mua.` },
        { title: '🚚 Bảo hiểm cho tài xế nền tảng', desc: `Các nền tảng giao hàng hoặc gọi xe có thể gắn sẵn bảo hiểm tai nạn siêu nhỏ vào từng chuyến đi. Phí trên mỗi chuyến rất nhỏ nhưng tần suất giao dịch cao khiến đây thành một lớp doanh thu bền, miễn là quyền lợi được thiết kế vừa đủ và xử lý minh bạch.` }
    ],
    franchise: [
        { title: '🍗 Chuỗi gà rán địa phương', desc: `Một quán gà rán thành công ở một quận có thể được đóng gói thành franchise khi menu, định lượng và vận hành bếp đã ổn. Chủ thương hiệu thu phí đầu vào và royalty, còn đối tác bỏ vốn mặt bằng và nhân sự.` },
        { title: '🧋 Franchise trà sữa', desc: `Khách mua vì brand, hương vị quen thuộc và cảm giác nhất quán giữa các điểm bán. Khi công thức, nguồn hàng và thiết kế cửa hàng được chuẩn hóa, thương hiệu mở nhanh hơn nhiều so với tự mở từng chi nhánh.` },
        { title: '🏋️ Phòng gym nhượng quyền', desc: `Gym franchise không chỉ bán máy tập mà bán luôn quy trình sales membership, app tập luyện và nhận diện thương hiệu. Người nhận quyền trả tiền để mua xác suất vận hành tốt hơn chứ không phải chỉ thuê tên.` },
        { title: '🧼 Tiệm giặt sấy chuỗi', desc: `Mô hình giặt sấy dễ nhân bản khi layout, giá và quy trình chăm khách rõ ràng. Chủ thương hiệu thắng nếu cung ứng máy móc, marketing địa phương và SOP đủ tốt để từng điểm đạt hòa vốn nhanh.` },
        { title: '🧒 Trung tâm kỹ năng trẻ em', desc: `Một chương trình học có giáo án, cách tuyển sinh và đo đầu ra rõ ràng có thể nhượng quyền tốt hơn nhiều mô hình phụ thuộc giáo viên ngôi sao. Giá trị franchise nằm ở hệ thống học thuật và cách vận hành, không chỉ biển hiệu.` },
        { title: '🚗 Car wash', desc: `Rửa xe chuỗi nghe đơn giản nhưng lại rất hợp franchise vì quy trình ngắn, lặp lại và dễ đo năng suất. Chủ thương hiệu kiếm tiền từ phí, hóa chất, phần mềm thành viên và khả năng đàm phán nguồn cung cho toàn mạng lưới.` },
        { title: '🍞 Tiệm bánh kiosk', desc: `Một kiosk nhỏ gần trường học hoặc văn phòng có thể nhân bản nhanh nếu menu tinh gọn và nguyên liệu được chuẩn bị tập trung. Franchisee trả tiền để rút ngắn giai đoạn thử-sai và tận dụng thương hiệu có sẵn.` }
    ],
    'intellectual-property': [
        { title: '🎓 Khóa học online', desc: `Một chuyên gia quay khóa học một lần rồi bán cho hàng nghìn học viên qua nhiều năm. Chi phí tạo ban đầu cao, nhưng mỗi đơn sau gần như chỉ tốn băng thông, hỗ trợ và marketing.` },
        { title: '📸 Bộ ảnh stock', desc: `Nhiếp ảnh gia chụp một bộ ảnh doanh nghiệp chất lượng cao rồi bán license nhiều lần trên các chợ ảnh. Cùng một tệp ảnh có thể kiếm tiền từ nhiều khách ở nhiều quốc gia mà không cần sản xuất lại.` },
        { title: '🧸 Nhân vật hoạt hình', desc: `Một mascot đáng nhớ có thể được dùng trên truyện tranh, đồ chơi, áo thun và chiến dịch quảng cáo. Giá trị IP tăng mạnh khi cùng một hình tượng được mở rộng sang nhiều kênh thay vì sống ở một sản phẩm duy nhất.` },
        { title: '🎮 Plugin cho game engine', desc: `Một developer viết plugin giải quyết lỗi đau cho cộng đồng Unity hoặc Unreal rồi bán license cho studio khác. Công sức lớn nằm ở việc tạo ra giải pháp lần đầu; doanh thu mở rộng nhờ khả năng bán lại vô số lần.` },
        { title: '🎼 Beat hoặc sound pack', desc: `Nhạc sĩ tạo bộ beat, sound effect hoặc sample pack rồi cấp phép cho creator và studio nhỏ. Mỗi giấy phép mang về khoản thu nhỏ, nhưng tệp khách rất rộng và chi phí nhân bản gần như bằng 0.` },
        { title: '🧴 Công thức thương hiệu được license', desc: `Một chủ thương hiệu mỹ phẩm hoặc đồ uống có thể license công thức, bao bì và nhãn hiệu cho nhà sản xuất ở thị trường khác. Họ không cần tự mở nhà máy tại mọi nơi mà vẫn capture được một phần doanh thu.` },
        { title: '🧠 Patent công nghệ', desc: `Một nhóm R&D phát minh cảm biến, vật liệu hoặc thuật toán tối ưu rồi không tự sản xuất đại trà, thay vào đó cấp phép cho nhiều hãng cùng dùng. Đây là cách biến tri thức kỹ thuật thành dòng royalty dài hạn.` }
    ],
    'consulting-expertise': [
        { title: '📈 Tư vấn CRO cho website', desc: `Một chuyên gia tối ưu chuyển đổi có thể tăng vài phần trăm tỷ lệ mua hàng cho shop online, nhưng vài phần trăm đó tương đương doanh thu thêm rất lớn. Vì vậy phí tư vấn được định giá theo giá trị kinh doanh tạo ra chứ không theo số slide trình bày.` },
        { title: '⚙️ Lean consultant cho nhà máy', desc: `Chuyên gia lean vào xưởng, giảm lãng phí, thời gian chờ và tỷ lệ lỗi rồi để lại SOP mới cho đội vận hành. Khách hàng trả tiền không phải để nghe lý thuyết mà để giảm chi phí thật trên từng dây chuyền.` },
        { title: '👩‍⚖️ Tư vấn due diligence pháp lý', desc: `Khi doanh nghiệp chuẩn bị M&A, một lỗi hợp đồng nhỏ có thể khiến thương vụ đổ vỡ hoặc giảm giá trị lớn. Lawyer giỏi kiếm tiền vì họ phát hiện rủi ro đắt đỏ trước khi nó thành thiệt hại không thể sửa.` },
        { title: '🧠 Executive coach', desc: `Một founder hoặc giám đốc cấp cao trả phí lớn cho coach nếu người đó giúp họ ra quyết định tốt hơn, tuyển đúng người hơn hoặc thoát một nút thắt lãnh đạo. Khách mua chất lượng tư duy và tốc độ trưởng thành, không chỉ mua cuộc trò chuyện.` },
        { title: '🛒 Tư vấn tăng trưởng e-commerce', desc: `Consultant phân tích funnel, ads, retention và biên lợi nhuận để chỉ ra đâu là đòn bẩy tăng GMV mà không đốt thêm ngân sách vô ích. Khi tác động lên doanh thu đo được, mức phí dễ tăng rất nhanh.` },
        { title: '🏥 Tư vấn vận hành phòng khám', desc: `Một chuyên gia có thể giúp phòng khám giảm thời gian chờ, tăng công suất bác sĩ và chuẩn hóa quy trình chăm sóc sau điều trị. Giá trị nằm ở việc cùng số nhân sự nhưng phục vụ được nhiều bệnh nhân hơn và trải nghiệm tốt hơn.` },
        { title: '🌍 Tư vấn vào thị trường mới', desc: `Công ty muốn vào quốc gia khác nhưng chưa hiểu pháp lý, kênh phân phối và hành vi khách hàng địa phương. Consultant giỏi kiếm tiền nhờ rút ngắn nhiều tháng thử sai và ngăn doanh nghiệp đốt vốn vào giả định sai.` }
    ],
    'network-mlm': [
        { title: '🥤 Mạng lưới thực phẩm bổ sung', desc: `Một distributor kiếm tiền từ bán lẻ sản phẩm cho khách thật và thêm một lớp hoa hồng từ đội nhóm bên dưới. Mô hình chỉ khỏe khi doanh số lặp lại đến từ người dùng cuối chứ không phải từ việc ép thành viên ôm hàng.` },
        { title: '🧼 Hàng gia dụng bán theo cộng đồng', desc: `Người tham gia tổ chức workshop nhỏ tại nhà để bán nước giặt, nước rửa chén hay đồ dùng gia đình. Nếu sản phẩm thực sự tốt và mua lại cao, mạng lưới có thể tồn tại; nếu chỉ sống nhờ tuyển người mới, nó sẽ gãy rất nhanh.` },
        { title: '🧴 Skincare qua cộng đồng online', desc: `Một leader dùng Facebook hoặc Telegram để đào tạo người mới bán bộ skincare theo kịch bản chung. Thu nhập tầng trên tăng mạnh khi đội nhóm tự bán được hàng, nhưng cũng dễ ảo nếu phần lớn đơn là nội bộ giữa các thành viên.` },
        { title: '👥 Thu nhập từ training, event', desc: `Ở nhiều hệ thống MLM, top leader không chỉ kiếm từ commission mà còn từ vé sự kiện, khóa huấn luyện hoặc công cụ bán hàng. Điều này cho thấy phải nhìn toàn bộ dòng tiền, không chỉ slide hứa hẹn hoa hồng từ sản phẩm.` },
        { title: '⚠️ Ôm tồn kho để giữ hạng', desc: `Một rủi ro phổ biến là thành viên mua thêm hàng cuối tháng chỉ để giữ cấp bậc hoặc đạt thưởng. Về ngắn hạn doanh số nhìn đẹp, nhưng nếu hàng không ra được người dùng cuối thì lợi nhuận thực của mạng lưới rất yếu.` },
        { title: '🤝 Direct selling lành mạnh', desc: `Ở phiên bản tốt hơn, người bán tập trung như một đội sales phân tán: hiểu sản phẩm, phục vụ tệp riêng và được thưởng giới thiệu minh bạch. Đây là lý do một số mô hình referral hoặc affiliate online thừa hưởng logic MLM nhưng ít độc hại hơn.` },
        { title: '🧱 Trần tăng trưởng xã hội', desc: `Ngay cả khi hợp pháp, MLM vẫn có trần tự nhiên vì bạn đang dùng quan hệ cá nhân làm kênh phân phối chính. Một khi mạng lưới đã khai thác gần hết vòng quen biết, tăng trưởng sẽ chậm lại trừ khi có thương hiệu và sản phẩm đủ mạnh để bán ra ngoài.` }
    ],
    'platform-marketplace': [
        { title: '🍜 Ứng dụng giao đồ ăn', desc: `App food delivery kết nối quán ăn, tài xế và khách, rồi thu phí trên mỗi đơn hoặc từ quảng cáo hiển thị. Khi lượng đơn đủ lớn, nền tảng không cần nấu món nào vẫn capture được một phần rất đáng kể của cả ngành ăn uống.` },
        { title: '👨‍🔧 Marketplace freelancer', desc: `Một nền tảng kết nối designer, dev, marketer với khách toàn cầu và thu phí từ hợp đồng hoặc gói membership. Giá trị nằm ở việc giảm ma sát tìm việc, thanh toán và đánh giá uy tín giữa hai bên chưa từng gặp nhau.` },
        { title: '🚚 Sàn ghép xe tải', desc: `Doanh nghiệp vận tải có xe rỗng chiều về còn nhà máy lại cần chở hàng gấp. Nền tảng ghép chuyến giúp lấp công suất trống và kiếm tiền từ phí giao dịch hoặc gói dữ liệu cho nhà xe lớn.` },
        { title: '🧳 OTA du lịch', desc: `Website đặt phòng hoặc vé máy bay gom rất nhiều lựa chọn vào một nơi, giúp khách so nhanh và đặt ngay. Họ không sở hữu khách sạn hay máy bay, nhưng nhờ kiểm soát luồng tìm kiếm nên có thể thu hoa hồng trên mỗi booking.` },
        { title: '🏪 Sàn B2B cho cửa hàng tạp hóa', desc: `Một chợ sỉ số hóa giúp cửa hàng nhỏ đặt hàng từ nhiều nhà cung cấp qua một ứng dụng duy nhất. Nền tảng thắng khi rút ngắn chu kỳ nhập hàng và giữ được dữ liệu mua bán có giá trị cao cho tín dụng hoặc tối ưu tồn kho.` },
        { title: '🎟️ Chợ vé thứ cấp', desc: `Marketplace vé cho phép người mua tiếp cận nguồn cung mà kênh chính thức đã hết, còn người bán dễ thanh khoản hơn. Nền tảng kiếm tiền từ phí giao dịch, miễn là họ xử lý được bài toán vé giả và hoàn tiền minh bạch.` },
        { title: '🩺 Nền tảng đặt lịch khám', desc: `App đặt lịch bác sĩ giúp phòng khám lấp lịch trống còn bệnh nhân đỡ phải gọi điện nhiều nơi. Khi cả hai phía quen dùng, nền tảng có thể mở rộng sang nhắc lịch, hồ sơ bệnh án và thanh toán để tăng doanh thu trên mỗi phiên.` }
    ],
    'saas-subscription': [
        { title: '🧾 Phần mềm kế toán cho SME', desc: `Một doanh nghiệp nhỏ sẵn sàng trả phí hàng tháng nếu phần mềm giúp họ xuất hóa đơn, theo dõi công nợ và chốt sổ nhanh hơn. Giá trị SaaS nằm ở việc giải quyết công việc lặp lại tốt hơn Excel chứ không phải khoe thật nhiều tính năng.` },
        { title: '👥 HRM chấm công cho chuỗi cửa hàng', desc: `Chuỗi bán lẻ nhiều ca làm cần hệ thống theo dõi chấm công, đổi ca và bảng lương ở nhiều điểm bán. Một khi dữ liệu nhân sự đã nằm trong hệ thống, khả năng rời khỏi sản phẩm sẽ giảm mạnh vì chi phí chuyển đổi khá đau.` },
        { title: '🛍️ Email marketing tool', desc: `Tool gửi email cho shop online thường thu theo số contact hoặc số chiến dịch và kiếm thêm từ các tính năng automation. Khách hàng ở lại không chỉ vì gửi thư được, mà vì doanh thu lặp lại từ các flow bán hàng cũ quá đáng giá để bỏ.` },
        { title: '🏥 SaaS quản lý phòng khám', desc: `Phòng khám dùng phần mềm để đặt lịch, lưu hồ sơ, in toa và theo dõi tái khám. Khi sản phẩm gắn vào quy trình vận hành mỗi ngày và chứa dữ liệu bệnh nhân, churn thường thấp hơn nhiều SaaS kiểu nice-to-have.` },
        { title: '🧑‍⚖️ Quản lý hợp đồng doanh nghiệp', desc: `Bộ phận pháp chế hoặc mua sắm dùng SaaS để theo dõi hạn hợp đồng, điều khoản rủi ro và quy trình phê duyệt. Đây là ví dụ rõ của software bán sự an tâm và kiểm soát hơn là bán giao diện đẹp.` },
        { title: '🏗️ SaaS cho nhà thầu xây dựng', desc: `Một phần mềm theo dõi tiến độ công trình, vật tư và nghiệm thu có thể tiết kiệm rất nhiều lỗi phối hợp ngoài hiện trường. Khi chi phí sai sót của khách hàng lớn, giá thuê tháng vài trăm đô trở nên quá rẻ so với giá trị mang lại.` },
        { title: '🍽️ POS subscription cho quán ăn', desc: `POS cho nhà hàng không chỉ là phần mềm tính tiền; nó kéo theo tồn kho, báo cáo ca, CRM và tích điểm. Vì dữ liệu bán hàng là mạch máu vận hành, mô hình thu phí định kỳ trở nên rất bền nếu sản phẩm đủ ổn định.` }
    ],
    'creator-economy': [
        { title: '🎙️ Podcast ngách B2B', desc: `Một host nói chuyện đều đặn về logistics, SaaS hay tài chính có thể chưa có hàng triệu lượt nghe nhưng vẫn kiếm tốt từ sponsor chất lượng cao. Trong creator economy, tệp nhỏ nhưng đúng người mua thường đáng giá hơn tệp lớn nhưng hời hợt.` },
        { title: '📧 Newsletter chuyên ngành', desc: `Người viết bản tin chuyên sâu về chứng khoán, marketing hoặc AI có thể kiếm từ tài trợ, subscription trả phí và sản phẩm riêng. Email list mạnh vì creator không còn phụ thuộc hoàn toàn vào reach thất thường của mạng xã hội.` },
        { title: '🎓 Cohort course', desc: `Một creator dạy theo khóa có lịch khai giảng cố định có thể bán mức giá cao hơn khóa record sẵn, vì người học trả cho phản hồi trực tiếp và cộng đồng cùng tiến. Đây là ví dụ attention được chuyển thành trust rồi thành sản phẩm premium.` },
        { title: '🛒 Merch drop giới hạn', desc: `Khi một kênh có cộng đồng trung thành, việc bán áo, sách ký tên hay vật phẩm giới hạn trở thành nguồn thu lợi nhuận cao hơn ads. Người mua không chỉ mua món đồ mà mua cảm giác thuộc về nhóm và ủng hộ creator.` },
        { title: '📸 UGC creator cho brand', desc: `Không phải creator nào cũng cần xây kênh khổng lồ; nhiều người kiếm tốt bằng cách quay nội dung cho thương hiệu dùng chạy ads. Họ bán kỹ năng kể chuyện trước camera và hiểu ngôn ngữ nền tảng chứ không bán reach của chính mình.` },
        { title: '🧑‍🏫 Livestream dạy kỹ năng', desc: `Một giáo viên dạy tiếng Anh, đầu tư hay nấu ăn có thể livestream miễn phí để thu hút người xem rồi upsell khóa học, nhóm kín hoặc buổi 1-1. Dòng tiền mạnh hơn khi nội dung miễn phí chỉ là đầu phễu cho sản phẩm sở hữu riêng.` },
        { title: '🌱 Faceless channel', desc: `Kênh không lộ mặt dùng script, voiceover và hệ thống hóa sản xuất để đăng đều nhiều video mỗi tuần. Mô hình này cho thấy creator economy có thể vận hành như một media business chứ không nhất thiết phải phụ thuộc cá tính công khai của một cá nhân.` }
    ],
    'crypto-web3': [
        { title: '💧 Cung cấp thanh khoản DEX', desc: `Người dùng gửi cặp token vào pool để giúp người khác giao dịch và nhận phí swap. Thu nhập nghe hấp dẫn, nhưng chỉ thật sự ổn khi họ hiểu impermanent loss, thanh khoản mỏng và nguy cơ token đối ứng giảm giá mạnh.` },
        { title: '🏦 Cho vay stablecoin', desc: `Một holder stablecoin có thể gửi tài sản vào giao thức lending để nhận lãi thay vì để tiền đứng yên. Đây là hình thức gần nhất với thu nhập cố định trong crypto, nhưng vẫn phụ thuộc vào rủi ro đối tác, smart contract và depeg.` },
        { title: '⛏️ Mining quy mô nhỏ', desc: `Một nhóm nhỏ đặt máy đào tại nơi điện rẻ đang cố biến chênh lệch giá điện thành coin. Mô hình chỉ khỏe khi họ tính được khấu hao máy, độ khó mạng và khả năng bán coin ra để chi trả chi phí định kỳ.` },
        { title: '🎁 Săn airdrop có chiến lược', desc: `Nhiều người dùng sớm giao thức, bridge hoặc test sản phẩm để kỳ vọng nhận token thưởng khi dự án phát hành. Đây là cách kiếm tiền từ thời gian và mức chấp nhận rủi ro, nhưng lợi nhuận rất không chắc chắn và dễ bị pha loãng nếu quá đông người tham gia.` },
        { title: '🧾 Validator hoặc staking service', desc: `Người vận hành node hoặc dịch vụ staking kiếm phí từ việc giúp mạng lưới xác thực giao dịch. Lợi thế nằm ở uptime, uy tín kỹ thuật và khả năng quản trị vận hành 24/7 chứ không chỉ ở việc nắm token.` },
        { title: '🎮 GameFi vòng đời ngắn', desc: `Có game blockchain bùng nổ nhanh vì phần thưởng token cao, rồi sụp cũng nhanh khi lượng người mới chậm lại. Ví dụ này cho thấy trong crypto, yield hấp dẫn thường chỉ bền khi có nhu cầu sử dụng thật chứ không chỉ do token thưởng bơm ra.` },
        { title: '🧠 Dịch vụ dữ liệu on-chain', desc: `Một team không trực tiếp trade coin nhưng bán dashboard, cảnh báo ví lớn và phân tích dòng tiền on-chain cho nhà đầu tư. Đây là ví dụ tốt của việc kiếm tiền trong crypto bằng hạ tầng và insight thay vì chỉ đầu cơ giá.` }
    ],
    'ai-automation': [
        { title: '📄 AI xử lý chứng từ kế toán', desc: `Một doanh nghiệp dùng AI đọc hóa đơn, trích dữ liệu và đẩy vào phần mềm kế toán để giảm hàng giờ nhập liệu thủ công. Tiền kiếm được không nằm ở model, mà ở số giờ nhân sự tiết kiệm và tốc độ chốt sổ nhanh hơn.` },
        { title: '🛒 AI viết mô tả sản phẩm hàng loạt', desc: `Shop nhiều SKU có thể dùng AI tạo tiêu đề, mô tả, tag SEO và bản dịch cho hàng nghìn sản phẩm trong vài giờ. Khi kết hợp thêm kiểm duyệt và workflow chuẩn, một team nhỏ vẫn vận hành catalog lớn như doanh nghiệp lớn.` },
        { title: '🧑‍💼 AI sàng lọc lead outbound', desc: `AI đọc website, hồ sơ công ty và tín hiệu mua hàng để chấm điểm lead trước khi đội sales gọi. Nếu hệ thống giúp nhân viên chỉ tập trung vào nhóm có xác suất chốt cao nhất, doanh thu tăng mà không cần tuyển thêm nhiều người.` },
        { title: '🎧 Tóm tắt cuộc gọi chăm sóc khách hàng', desc: `Call center dùng AI để tóm tắt nội dung, gắn nhãn vấn đề và đề xuất bước tiếp theo sau mỗi cuộc gọi. Giá trị đến từ việc supervisor kiểm soát chất lượng tốt hơn và agent giảm rất nhiều thao tác ghi chú.` },
        { title: '🏠 Tạo listing bất động sản tự động', desc: `Môi giới có thể nhập ảnh, thông tin nhà và để AI tạo mô tả, bài đăng mạng xã hội, email follow-up trong vài phút. Một người vẫn không thể đi xem nhà thay khách, nhưng có thể phủ được nhiều listing hơn cùng một quỹ thời gian.` },
        { title: '🧪 Copilot QA cho team kỹ thuật', desc: `AI phân tích log, diff code và lịch sử bug để gợi ý testcase hoặc nguyên nhân sự cố trước khi team họp. Đây là dạng automation tạo tiền gián tiếp bằng cách rút ngắn thời gian downtime và giảm số lỗi lọt ra production.` },
        { title: '🌐 Dịch vụ localize đa ngôn ngữ', desc: `Một agency nhỏ có thể dùng AI dịch, chuyển giọng điệu và tạo biến thể nội dung cho nhiều thị trường cùng lúc. Họ thắng khi kết hợp AI với QA bản địa và hiểu sản phẩm, nhờ vậy giao nhanh hơn đối thủ dùng người 100%.` }
    ],
    'formula-time-money': [
        { title: '👩‍⚕️ Nhà trị liệu theo buổi', desc: `Mỗi buổi khám hay trị liệu tạo ra một khoản thu rõ ràng, nhưng số buổi trong ngày hữu hạn vì chất lượng giảm nếu làm quá nhiều. Đây là dạng linear income chất lượng cao nhưng vẫn bị khóa bởi lịch cá nhân.` },
        { title: '🎨 Designer tính theo giờ', desc: `Freelancer mới thường dễ bán bằng đơn giá theo giờ vì khách hiểu nhanh và ít tranh cãi hơn. Vấn đề là càng giỏi làm nhanh thì paradox là càng khó tính giờ cao nếu không chuyển sang pricing theo kết quả.` },
        { title: '🧑‍🏫 Gia sư theo ca', desc: `Gia sư có thể tăng tiền bằng cách dạy nhóm nhỏ hoặc nhận học sinh cao cấp hơn, nhưng về lõi vẫn là lấy từng khung giờ đổi lấy thu nhập. Nghỉ lễ, ốm hoặc muốn rút bớt lịch là doanh thu giảm ngay.` },
        { title: '🚘 Tài xế chạy ca tối', desc: `Tài xế có thể chọn khung giờ surge để đẩy thu nhập/giờ cao hơn, nhưng tổng ngày vẫn phụ thuộc số giờ thực chạy. Mô hình này cho thấy tối ưu rate giúp khá hơn, chứ không xóa được trần thời gian.` },
        { title: '🧰 Thợ sửa điện nước tính công', desc: `Một cuộc sửa nhanh có thể đem lại tiền mặt tốt trong ngày, đặc biệt khi khách gọi gấp. Nhưng để tăng mạnh thu nhập, người thợ sớm muộn cũng phải mở đội hoặc bán gói bảo trì thay vì chỉ nhận thêm việc cá nhân.` },
        { title: '⚖️ Luật sư billable hour', desc: `Luật sư doanh nghiệp thường có mức phí giờ cao vì khách đang mua kiến thức rủi ro lớn. Tuy nhiên ngay cả ở mức premium, tổng doanh thu vẫn bị giới hạn bởi số giờ có thể bill và mức độ chịu tải của bản thân.` },
        { title: '🎥 Quay phim theo ngày công', desc: `Videographer bán gói quay theo ngày rất dễ chốt vì khách nhìn thấy đầu vào rõ ràng. Điểm yếu là mỗi ngày chỉ nhận được một số job nhất định; muốn vượt trần phải chuyển sang studio, khóa học hoặc asset số.` }
    ],
    'formula-leverage': [
        { title: '👥 Agency có team triển khai', desc: `Một founder không còn tự làm mọi việc mà xây đội account, media và design để phục vụ nhiều khách cùng lúc. Đây là labor leverage: cùng một bộ kỹ năng bán hàng, nhưng output được nhân lên nhờ người khác thực thi.` },
        { title: '🏦 Dùng vốn vay mua tài sản dòng tiền', desc: `Nhà đầu tư bỏ 30% vốn tự có, vay phần còn lại để mua tài sản cho thuê có dòng tiền ổn định. Capital leverage giúp ROE tăng mạnh khi mọi giả định đúng, nhưng cũng khiến sai số nhỏ trong lãi vay hoặc công suất trở thành rủi ro lớn.` },
        { title: '📱 App bán toàn cầu', desc: `Một người viết app quản lý chi tiêu hoặc chỉnh ảnh rồi bán qua store cho hàng chục nghìn khách mà không phải giao hàng thủ công. Code leverage xuất hiện vì cùng một sản phẩm số có thể phục vụ vô số người với chi phí biên gần bằng 0.` },
        { title: '🎥 Video evergreen kéo doanh thu dài hạn', desc: `Một video YouTube hay webinar chất lượng có thể tiếp tục hút người xem và bán sản phẩm nhiều tháng sau khi creator đã làm xong. Đây là media leverage: nỗ lực một lần tạo ra vô số lần tiêu thụ.` },
        { title: '🤝 Mạng lưới reseller', desc: `Một sản phẩm SaaS hay thiết bị được bán qua reseller, affiliate hoặc đối tác triển khai sẽ đi xa hơn nhiều so với đội sales nội bộ nhỏ. Bạn không trực tiếp chạm mọi khách hàng, nhưng vẫn capture giá trị nhờ thiết kế incentive đúng.` },
        { title: '🧠 Chuyên gia đóng gói tri thức', desc: `Một consultant biến framework của mình thành workshop, template và tài liệu để đội junior triển khai thay. Kỹ năng gốc vẫn là của một người, nhưng leverage xuất hiện khi kết quả không còn phụ thuộc hoàn toàn vào lịch của họ.` },
        { title: '🤖 Workflow AI nhân output', desc: `Một marketer dùng AI để nghiên cứu, viết nháp và tạo biến thể quảng cáo có thể làm khối lượng gấp nhiều lần trước đây. Đây là leverage hiện đại vì cùng một người nhưng hệ thống khuếch đại đầu ra rõ rệt.` }
    ],
    'formula-passive': [
        { title: '📦 Máy bán hàng tự động', desc: `Máy vending chỉ cần nạp hàng định kỳ nhưng vẫn bán suốt cả ngày ở nơi đông người. Thu nhập không hoàn toàn thụ động vì vẫn phải bảo trì và quản lý tồn, nhưng thời gian trực tiếp thấp hơn nhiều so với quầy bán tay.` },
        { title: '📚 Ebook hoặc sách điện tử', desc: `Viết sách một lần rồi bán liên tục trên Amazon hoặc website riêng là ví dụ kinh điển của passive asset. Công sức chính nằm ở giai đoạn tạo và marketing; sau đó mỗi bản bán thêm có biên lợi nhuận rất cao.` },
        { title: '🏘️ Bãi đỗ xe cho thuê', desc: `Một lô đất ở vị trí tốt có thể được tối giản thành bãi xe và tạo dòng tiền đều mà không cần vận hành phức tạp như nhà hàng hay cửa hàng. Thu nhập bền nếu nhu cầu gửi xe ổn định và chi phí bảo vệ không ăn hết biên.` },
        { title: '💻 Template marketplace', desc: `Template Notion, Figma hay CV đẹp có thể bán trên chợ số nhiều lần cho khách khắp nơi. Mỗi sản phẩm là một micro-asset: nhỏ, rẻ, nhưng cộng dồn lại có thể thành dòng tiền đáng kể.` },
        { title: '📊 Danh mục dividend ETF', desc: `Một nhà đầu tư tích lũy danh mục chia cổ tức đều đang xây cỗ máy trả tiền định kỳ từ quyền sở hữu doanh nghiệp. Passive ở đây là sau khi vốn đã được xây đủ lớn, không phải vì quá trình tích lũy ban đầu dễ dàng.` },
        { title: '🔌 Điện mặt trời mái nhà', desc: `Hệ thống điện áp mái cần vốn ban đầu đáng kể, nhưng sau khi lắp xong có thể giảm hóa đơn hoặc bán điện dư đều nhiều năm. Đây là ví dụ tài sản vật lý tạo dòng tiền sau khi giai đoạn xây dựng đã hoàn tất.` },
        { title: '🧠 Membership cộng đồng tự gia hạn', desc: `Một cộng đồng trả phí có thư viện nội dung, buổi AMA định kỳ và admin hỗ trợ cơ bản có thể duy trì doanh thu hàng tháng khá thụ động nếu đã có tệp thành viên trung thành. Công sức chính chuyển từ bán từng đơn sang giữ trải nghiệm đủ tốt để gia hạn.` }
    ],
    'formula-value-creation': [
        { title: '🧯 Chuyên gia an toàn PCCC', desc: `Một doanh nghiệp trả phí cho chuyên gia phòng cháy không phải vì thích giấy tờ, mà vì tránh rủi ro đóng cửa, phạt lớn hoặc thiệt hại tài sản. Khi hậu quả được ngăn chặn đủ đắt, giá dịch vụ tăng rất hợp lý.` },
        { title: '🚚 Tối ưu tuyến giao hàng', desc: `Một phần mềm hoặc consultant giúp công ty giao vận giảm vài phần trăm quãng đường mỗi ngày. Giá trị capture được lớn vì tiết kiệm nhiên liệu, giờ công và hao mòn xe lặp lại trên hàng nghìn chuyến.` },
        { title: '🩺 Phòng khám giảm đau tức thì', desc: `Bệnh nhân trả tiền cao cho một buổi điều trị hiệu quả vì cái họ mua là cảm giác đỡ đau, quay lại làm việc và bớt lo lắng. Thu nhập cao luôn đi cùng khả năng giải quyết vấn đề người khác đang thật sự khó chịu.` },
        { title: '🛒 Tăng chuyển đổi checkout', desc: `Một thay đổi nhỏ trong trang thanh toán có thể kéo doanh thu shop tăng đáng kể nếu lượng traffic sẵn có lớn. Người tối ưu capture tiền không phải nhờ làm nhiều giờ hơn, mà nhờ chạm đúng đòn bẩy giá trị cao.` },
        { title: '🏗️ Giảm rework trên công trường', desc: `Một kỹ sư quản lý giỏi giúp công trình ít sai hỏng, ít làm lại và bàn giao đúng hạn hơn. Giá trị thật nằm ở chi phí và thời gian được tiết kiệm cho chủ đầu tư, chứ không nằm ở số báo cáo được viết.` },
        { title: '🎨 Rebrand giúp bán giá cao hơn', desc: `Một thương hiệu được làm lại định vị, bao bì và thông điệp tốt có thể nâng perceived value đủ để tăng giá bán mà khách vẫn chấp nhận. Designer hay strategist kiếm tiền tốt khi họ tác động vào doanh thu tương lai, không chỉ tạo thứ đẹp mắt.` },
        { title: '📱 App nội bộ cắt thao tác lặp', desc: `Một tool nhỏ tự động hóa việc nhập liệu, duyệt đơn hoặc tổng hợp báo cáo có thể tiết kiệm hàng trăm giờ mỗi tháng cho doanh nghiệp. Khi tiết kiệm lặp đi lặp lại, một sản phẩm rất nhỏ vẫn tạo ra giá trị kinh tế lớn.` }
    ]
};

Object.entries(popupDetailedExampleSets).forEach(([id, examples]) => {
    if (!popupEnhancements[id]) popupEnhancements[id] = {};
    popupEnhancements[id].examples = [...(popupEnhancements[id].examples || []), ...examples];
});
