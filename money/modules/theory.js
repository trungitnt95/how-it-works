// ==================== THEORY DATA (Economics Concepts) ====================
// Standalone economics theories and concepts for the centralized theory popup

const theoryCategories = [
    { id: 'all', label: '📚 Tất cả' },
    { id: 'components', label: '🏗️ Thành phần (22)' },
    { id: 'macro', label: '📊 Kinh tế vĩ mô' },
    { id: 'monetary', label: '🏛️ Chính sách tiền tệ' },
    { id: 'market', label: '⚖️ Thị trường' },
    { id: 'indicators', label: '📈 Chỉ số & Đo lường' }
];

const economicsTheory = [
    // ==================== MACRO ====================
    {
        id: 'supply-demand',
        cat: 'macro',
        icon: '⚖️',
        title: 'Quy luật Cung – Cầu',
        body: {
            intro: 'Nền tảng cốt lõi nhất: giá cả hình thành ở giao điểm giữa lượng hàng người bán sẵn sàng cung và lượng hàng người mua muốn mua.',
            sections: [
                { title: 'Nguyên lý', bullets: ['Cầu tăng, cung không đổi → giá tăng.', 'Cung tăng, cầu không đổi → giá giảm.', 'Giá cân bằng ở nơi cung = cầu; mọi chính sách giá trần / giá sàn đều tạo thiếu hụt hoặc dư thừa.'] },
                { title: 'Ứng dụng thực tế', bullets: ['Giá xăng tăng khi OPEC giảm sản lượng (cung giảm).', 'Giá chip tăng vọt 2021 vì nhà máy đóng cửa (cung) trong khi nhu cầu WFH bùng nổ (cầu).', 'Bất động sản đắt đỏ tại TP.HCM vì đất có hạn (cung) nhưng dân nhập cư đông (cầu).'] }
            ],
            callout: 'Khi nghe "giá tăng", luôn hỏi: cầu tăng, cung giảm, hay cả hai?'
        }
    },
    {
        id: 'gdp',
        cat: 'macro',
        icon: '📊',
        title: 'GDP – Tổng Sản Phẩm Quốc Nội',
        body: {
            intro: 'GDP đo tổng giá trị hàng hóa & dịch vụ cuối cùng sản xuất trong biên giới một nước trong một kỳ.',
            sections: [
                { title: 'Cách tính phổ biến (expenditure)', bullets: ['GDP = C + I + G + (X − M): Tiêu dùng + Đầu tư + Chi tiêu chính phủ + Xuất khẩu ròng.', 'GDP danh nghĩa: tính theo giá hiện hành, bị lạm phát làm phóng to.', 'GDP thực: điều chỉnh lạm phát, phản ánh sản lượng thật sự.'] },
                { title: 'Hạn chế', bullets: ['Không đo phân phối thu nhập, ô nhiễm hay hạnh phúc.', 'Kinh tế ngầm, việc nhà không lương không nằm trong GDP.', 'GDP cao không có nghĩa người dân sống tốt nếu phân bổ quá chênh.'] }
            ]
        }
    },
    {
        id: 'inflation-types',
        cat: 'macro',
        icon: '📈',
        title: 'Các loại Lạm phát',
        body: {
            intro: 'Lạm phát là mức tăng giá chung; nhưng nguyên nhân rất khác nhau, dẫn đến chính sách chống lạm phát cũng phải khác nhau.',
            sections: [
                { title: 'Phân loại', bullets: ['Demand-pull: Cầu vượt cung → giá tăng (kinh tế quá nóng, tiền rẻ).', 'Cost-push: Chi phí sản xuất tăng (nguyên liệu, lương, chuỗi cung ứng đứt gãy) → đẩy giá lên.', 'Built-in / Wage-price spiral: Lương tăng → giá tăng → đòi lương tiếp → vòng xoáy tự duy trì.', 'Lạm phát tiền tệ: in quá nhiều tiền, tiền mất giá.'] },
                { title: 'Đo lường', bullets: ['CPI (Consumer Price Index): rổ hàng hóa tiêu dùng.', 'Core CPI: loại bỏ thực phẩm và năng lượng (biến động ngắn hạn).', 'PCE: chỉ số FED ưa dùng, rộng hơn CPI, tính cả thay đổi hành vi tiêu dùng.'] }
            ],
            callout: 'Lạm phát 2-3% được coi là lành mạnh. Nguy hiểm khi vượt kiểm soát hoặc khi giảm phát kéo dài.'
        }
    },
    {
        id: 'business-cycle',
        cat: 'macro',
        icon: '🔄',
        title: 'Chu kỳ Kinh tế',
        body: {
            intro: 'Kinh tế không tăng trưởng thẳng đều mà dao động qua 4 pha: mở rộng, đỉnh, suy thoái, đáy. Hiểu chu kỳ giúp ra quyết định tài chính đúng thời điểm.',
            sections: [
                { title: '4 Pha', bullets: ['Mở rộng (Expansion): GDP tăng, thất nghiệp giảm, tín dụng dồi dào, lạc quan.', 'Đỉnh (Peak): Tăng trưởng chậm lại, lạm phát có thể cao, NHTW bắt đầu siết.', 'Suy thoái (Recession): GDP giảm ≥ 2 quý, thất nghiệp tăng, doanh nghiệp cắt giảm.', 'Đáy (Trough): Kinh tế ngừng co lại, bắt đầu phục hồi dù chậm.'] },
                { title: 'Ý nghĩa thực tế', bullets: ['Mua tài sản rẻ hơn ở giai đoạn suy thoái nếu có tiền mặt dự phòng.', 'Cẩn thận đòn bẩy ở giai đoạn đỉnh vì xác suất đảo chiều cao.', 'Việc làm thường phục hồi chậm hơn GDP (jobless recovery).'] }
            ]
        }
    },
    {
        id: 'stagflation',
        cat: 'macro',
        icon: '⚠️',
        title: 'Stagflation (Đình lạm)',
        body: {
            intro: 'Kịch bản xấu nhất: lạm phát cao + tăng trưởng thấp + thất nghiệp cao cùng lúc. Chính sách tiền tệ truyền thống gần như bế tắc.',
            sections: [
                { title: 'Vì sao nguy hiểm?', bullets: ['Tăng lãi suất chống lạm phát → đè thêm sản xuất, thất nghiệp tăng.', 'Giảm lãi suất kích thích kinh tế → lạm phát nóng thêm.', 'Không có cách nào "không đau" — chỉ chọn đau ít hơn.'] },
                { title: 'Ví dụ lịch sử', bullets: ['Thập niên 1970 của Mỹ: dầu tăng giá mạnh (sốc cung) + chính sách tiền tệ nới lỏng quá lâu.', 'Hậu COVID ở một số nền kinh tế mới nổi: chuỗi cung ứng đứt + tiền bơm nhiều + cầu phục hồi không đều.'] }
            ]
        }
    },
    // ==================== MONETARY ====================
    {
        id: 'monetary-transmission',
        cat: 'monetary',
        icon: '🏛️',
        title: 'Cơ chế Truyền dẫn Chính sách Tiền tệ',
        body: {
            intro: 'Khi NHTW thay đổi lãi suất, tác động lan qua nhiều kênh khác nhau với độ trễ 6-18 tháng.',
            sections: [
                { title: '5 Kênh truyền dẫn', bullets: ['Kênh lãi suất: Lãi vay và lãi tiết kiệm thay đổi → ảnh hưởng chi tiêu & đầu tư.', 'Kênh tín dụng: Ngân hàng thắt / nới cho vay → doanh nghiệp và hộ gia đình bị ảnh hưởng.', 'Kênh tỷ giá: Lãi suất cao hút vốn ngoại → nội tệ mạnh lên → xuất khẩu khó hơn.', 'Kênh tài sản: Lãi suất giảm → giá cổ phiếu, BĐS tăng → hiệu ứng giàu có → tiêu dùng tăng.', 'Kênh kỳ vọng: Tín hiệu từ NHTW ảnh hưởng niềm tin và hành vi ra quyết định.'] }
            ],
            callout: 'Vì độ trễ dài, NHTW phải dự đoán tình hình tương lai chứ không chỉ phản ứng với hiện tại.'
        }
    },
    {
        id: 'money-multiplier',
        cat: 'monetary',
        icon: '💰',
        title: 'Hệ số Nhân tiền',
        body: {
            intro: 'Ngân hàng thương mại "tạo" tiền thông qua cho vay: mỗi đồng tiền gửi được cho vay một phần, rồi quay lại hệ thống và cho vay tiếp.',
            sections: [
                { title: 'Cách hoạt động', bullets: ['Bạn gửi 100 tr → NH giữ 10% dự trữ, cho vay 90 tr.', '90 tr đó được gửi lại NH khác → cho vay tiếp 81 tr.', 'Quá trình lặp lại → tổng tiền tạo ra = Tiền gửi × (1 / Tỷ lệ dự trữ).', 'Với dự trữ 10%, 100 tr ban đầu tạo ra 1000 tr trong hệ thống.'] },
                { title: 'Giới hạn thực tế', bullets: ['Hiệu quả nhân tiền phụ thuộc vào nhu cầu vay thật sự.', 'Nếu doanh nghiệp/người dân không muốn vay (suy thoái), tiền không nhân được.', 'Nợ xấu cao làm NH thận trọng hơn, hệ số nhân thu hẹp.'] }
            ]
        }
    },
    {
        id: 'interest-rate-policy',
        cat: 'monetary',
        icon: '📉',
        title: 'Lãi suất Chính sách',
        body: {
            intro: 'Lãi suất chính sách là "giá sỉ" của tiền mà NHTW áp cho hệ thống ngân hàng. Mọi lãi suất khác trong nền kinh tế đều neo vào đây.',
            sections: [
                { title: 'Tác động', bullets: ['Giảm lãi suất → vay rẻ hơn → kích thích chi tiêu + đầu tư → kinh tế nóng lên.', 'Tăng lãi suất → vay đắt hơn → hạn chế chi tiêu → kinh tế hạ nhiệt, lạm phát giảm.', 'Lãi suất thực = Lãi suất danh nghĩa − Lạm phát. Nếu lạm phát cao hơn lãi suất, tiền gửi ngân hàng thực chất mất giá.'] },
                { title: 'Khó khăn', bullets: ['Zero Lower Bound: khi lãi suất đã ~0% thì NHTW hết dư địa cắt tiếp.', 'Giải pháp: QE (mua tài sản), chính sách tài khóa (chính phủ chi tiêu).', 'Lãi suất âm (Nhật, EU) từng được thử nhưng hiệu quả gây tranh cãi.'] }
            ]
        }
    },
    {
        id: 'phillips-curve',
        cat: 'monetary',
        icon: '📐',
        title: 'Đường Phillips & NAIRU',
        body: {
            intro: 'Đường Phillips mô tả mối quan hệ nghịch giữa thất nghiệp và lạm phát: khi thất nghiệp thấp, lương tăng nhanh hơn, đẩy giá lên.',
            sections: [
                { title: 'Phillips truyền thống', bullets: ['Thất nghiệp ↓ → lương ↑ → chi phí sản xuất ↑ → giá hàng ↑ → lạm phát ↑.', 'NHTW phải chọn: chấp nhận lạm phát cao hơn để có thất nghiệp thấp hơn, hoặc ngược lại.'] },
                { title: 'NAIRU', bullets: ['Non-Accelerating Inflation Rate of Unemployment: tỷ lệ thất nghiệp tự nhiên.', 'Thất nghiệp < NAIRU → áp lực lạm phát tăng dần.', 'Thất nghiệp > NAIRU → áp lực giá giảm, NHTW có thể nới lỏng.'] },
                { title: 'Hạn chế hiện đại', bullets: ['Mối quan hệ Phillips đã phẳng đi ở nhiều nước phát triển sau 2000.', 'Toàn cầu hóa, công nghệ và kỳ vọng neo lạm phát làm thay đổi cơ chế.', 'Vẫn hữu ích như khung tư duy, nhưng không phải công thức máy móc.'] }
            ]
        }
    },
    {
        id: 'qe',
        cat: 'monetary',
        icon: '🖨️',
        title: 'Nới lỏng Định lượng (QE)',
        body: {
            intro: 'Khi lãi suất đã về 0% mà kinh tế vẫn yếu, NHTW mua lượng lớn trái phiếu (và đôi khi cả cổ phiếu) để bơm tiền trực tiếp vào hệ thống.',
            sections: [
                { title: 'Cách hoạt động', bullets: ['NHTW mua trái phiếu chính phủ & doanh nghiệp → tiền đổ vào hệ thống tài chính.', 'Lợi suất trái phiếu giảm → giá tài sản tăng → hiệu ứng giàu có kích thích chi tiêu.', 'Ngân hàng có thêm dự trữ → lý thuyết cho vay nhiều hơn.'] },
                { title: 'Rủi ro & Tranh cãi', bullets: ['Tiền bơm ra có thể đổ vào tài sản (BĐS, chứng khoán) thay vì kinh tế thực.', 'Tăng bất bình đẳng: người giàu có tài sản được lợi, người nghèo không.', 'Thoát khỏi QE (tapering) rất khó vì thị trường đã quen tiền rẻ.'] }
            ]
        }
    },
    // ==================== MARKET ====================
    {
        id: 'efficient-market',
        cat: 'market',
        icon: '📈',
        title: 'Giả thuyết Thị trường Hiệu quả (EMH)',
        body: {
            intro: 'Giá tài sản trên thị trường phản ánh tất cả thông tin sẵn có. Nếu đúng, không ai có thể "đánh bại thị trường" một cách bền vững.',
            sections: [
                { title: '3 dạng hiệu quả', bullets: ['Yếu (Weak): Giá đã phản ánh mọi dữ liệu lịch sử → phân tích kỹ thuật vô ích.', 'Trung bình (Semi-strong): Giá phản ánh cả tin công bố → phân tích cơ bản vô ích.', 'Mạnh (Strong): Giá phản ánh cả thông tin nội bộ → không ai có lợi thế.'] },
                { title: 'Thực tế', bullets: ['Thị trường khá hiệu quả ở dạng yếu, kém hiệu quả hơn ở dạng mạnh.', 'Có nhiều anomaly: momentum, value effect, calendar effects.', 'Behavioral Finance: tâm lý bầy đàn, sợ mất, quá tự tin tạo bong bóng & sụp đổ.'] }
            ]
        }
    },
    {
        id: 'risk-return',
        cat: 'market',
        icon: '🎯',
        title: 'Mối quan hệ Rủi ro – Lợi nhuận',
        body: {
            intro: 'Nguyên tắc nền tảng: muốn lợi nhuận kỳ vọng cao hơn phải chấp nhận rủi ro cao hơn. Không có "lãi cao, an toàn tuyệt đối".',
            sections: [
                { title: 'Thang rủi ro', bullets: ['Tiền gửi ngân hàng: thấp nhất, lãi thấp nhất.', 'Trái phiếu chính phủ < Trái phiếu doanh nghiệp < Cổ phiếu < Crypto.', 'Đòn bẩy nhân cả lợi nhuận lẫn thua lỗ.'] },
                { title: 'Cách quản lý', bullets: ['Đa dạng hóa (diversification): không bỏ trứng vào một giỏ.', 'Risk-adjusted return: Sharpe ratio = (Return − Risk-free) / Volatility.', 'Lợi nhuận quá cao so với thị trường thường ẩn giấu rủi ro chưa thấy.'] }
            ],
            callout: 'Khi ai đó hứa lãi 30-50%/năm mà "không rủi ro", hãy hỏi rủi ro nằm ở đâu hoặc bỏ đi.'
        }
    },
    {
        id: 'time-value',
        cat: 'market',
        icon: '⏳',
        title: 'Giá trị Thời gian của Tiền (TVM)',
        body: {
            intro: '1 đồng hôm nay giá trị hơn 1 đồng ngày mai, vì bạn có thể đầu tư nó và sinh lời.',
            sections: [
                { title: 'Khái niệm cốt lõi', bullets: ['Future Value (FV) = PV × (1 + r)^n: giá trị tương lai nếu đầu tư.', 'Present Value (PV) = FV / (1 + r)^n: quy tương lai về hiện tại.', 'Discount rate (r): phản ánh chi phí cơ hội và rủi ro.'] },
                { title: 'Ứng dụng thực tế', bullets: ['Định giá trái phiếu: chiết khấu dòng coupon và mệnh giá về hiện tại.', 'Định giá công ty: DCF chiết khấu dòng tiền tương lai.', 'Quyết định mua nhà: so sánh PV tiền thuê vs chi phí mua + lãi vay.'] }
            ]
        }
    },
    {
        id: 'leverage',
        cat: 'market',
        icon: '🔧',
        title: 'Đòn bẩy Tài chính',
        body: {
            intro: 'Dùng tiền vay để phóng đại lợi nhuận (và thua lỗ). Đòn bẩy là con dao hai lưỡi: thắng to nhưng thua cũng nhanh.',
            sections: [
                { title: 'Ví dụ', bullets: ['Mua nhà 3 tỷ, tự có 1 tỷ, vay 2 tỷ → đòn bẩy 3x.', 'Nhà tăng 20% → lãi 600 tr trên vốn 1 tỷ (ROE 60%).', 'Nhà giảm 20% → lỗ 600 tr trên vốn 1 tỷ (ROE −60%).'] },
                { title: 'Quản trị đòn bẩy', bullets: ['Margin of safety: chỉ dùng đòn bẩy khi có đệm an toàn.', 'Debt service coverage: dòng tiền phải đủ trả lãi + gốc trong mọi kịch bản.', 'Khi thị trường đảo chiều, đòn bẩy cao dẫn đến forced selling → giá giảm thêm → vòng xoáy.'] }
            ]
        }
    },
    // ==================== INDICATORS ====================
    {
        id: 'pmi',
        cat: 'indicators',
        icon: '🏭',
        title: 'PMI – Purchasing Managers Index',
        body: {
            intro: 'Chỉ số khảo sát giám đốc mua hàng, đo sức khỏe sản xuất. Trên 50 = mở rộng, dưới 50 = thu hẹp.',
            sections: [
                { title: 'Thành phần', bullets: ['Đơn hàng mới, sản lượng, việc làm, giao hàng nhà cung cấp, tồn kho.', 'Trên 50: nhiều DN mở rộng hơn thu hẹp.', 'Là chỉ báo sớm (leading indicator): ra trước GDP vài tháng.'] },
                { title: 'Ý nghĩa', bullets: ['PMI giảm liên tục nhiều tháng → tín hiệu suy giảm sản xuất sắp đến.', 'PMI sản xuất vs PMI dịch vụ có thể lệch nhau, mỗi cái nói một câu chuyện.', 'So sánh PMI các nước cho thấy đâu đang dẫn dắt và đâu đang yếu.'] }
            ]
        }
    },
    {
        id: 'bdi',
        cat: 'indicators',
        icon: '🚢',
        title: 'Baltic Dry Index (BDI)',
        body: {
            intro: 'Giá cước vận tải hàng rời bằng đường biển (quặng sắt, than, ngũ cốc). Phản ánh cung-cầu thực của thương mại toàn cầu.',
            sections: [
                { title: 'Vì sao quan trọng?', bullets: ['BDI khó bị đầu cơ vì dựa trên cước vận tải thực.', 'Phản ánh nhu cầu nguyên liệu → gián tiếp đo hoạt động công nghiệp.', 'BDI tăng mạnh thường báo hiệu sản xuất toàn cầu đang phục hồi.'] },
                { title: 'Hạn chế', bullets: ['Phụ thuộc vào nguồn cung tàu: đóng nhiều tàu mới → BDI giảm dù cầu không đổi.', 'Chỉ đo hàng rời, không phản ánh hàng container hay dầu.'] }
            ]
        }
    },
    {
        id: 'yield-curve',
        cat: 'indicators',
        icon: '📐',
        title: 'Đường cong Lợi suất (Yield Curve)',
        body: {
            intro: 'Đồ thị lợi suất trái phiếu chính phủ theo kỳ hạn (1 tháng → 30 năm). Hình dạng cho biết thị trường đang kỳ vọng gì.',
            sections: [
                { title: '3 hình dạng', bullets: ['Dốc lên (normal): kinh tế dự kiến tốt, lãi dài hạn > ngắn hạn.', 'Phẳng (flat): bất định, đang chuyển pha.', 'Đảo ngược (inverted): lợi suất ngắn hạn > dài hạn → tín hiệu suy thoái mạnh.'] },
                { title: 'Ý nghĩa thực tế', bullets: ['Yield curve đảo ngược đã dự báo đúng hầu hết suy thoái tại Mỹ từ 1960.', 'Ngân hàng kiếm tiền từ chênh lệch lãi suất (NIM): yield curve phẳng = NH khó kiếm lời.', 'Spread 10Y−2Y là chỉ báo phổ biến nhất; dưới 0 gần như chắc suy thoái đang đến.'] }
            ]
        }
    },
    {
        id: 'unit-labor-cost',
        cat: 'indicators',
        icon: '👷',
        title: 'Unit Labor Cost (Chi phí Lao động Đơn vị)',
        body: {
            intro: 'Chi phí lao động để sản xuất một đơn vị sản phẩm. Tăng khi lương tăng nhanh hơn năng suất.',
            sections: [
                { title: 'Công thức', bullets: ['ULC = Tổng chi phí lao động / Sản lượng thực.', 'Hoặc: ULC = Lương trung bình / Năng suất lao động.', 'ULC tăng = mỗi đơn vị hàng hóa tốn nhiều chi phí nhân công hơn → áp lực giá.'] },
                { title: 'Ý nghĩa cho NHTW', bullets: ['NHTW theo dõi ULC để đánh giá lạm phát có phải do lương không.', 'Nếu ULC tăng bền, lạm phát sẽ dai dẳng dù tạm hạ nhiệt bề mặt.', 'Năng suất tăng cho phép tăng lương mà ULC không tăng → lạm phát kiểm soát được.'] }
            ]
        }
    },
    {
        id: 'purchasing-power-parity',
        cat: 'indicators',
        icon: '🍔',
        title: 'PPP & Chỉ số Big Mac',
        body: {
            intro: 'Purchasing Power Parity so sánh sức mua thực giữa các đồng tiền. Chỉ số Big Mac của The Economist là cách minh họa đơn giản nhất.',
            sections: [
                { title: 'Nguyên lý PPP', bullets: ['Cùng một rổ hàng hóa nên có giá ngang nhau ở mọi nơi khi quy về một đồng tiền.', 'Nếu Big Mac ở VN rẻ hơn ở Mỹ (tính theo USD), VND có thể đang bị định giá thấp.', 'PPP giúp so sánh GDP giữa các nước chính xác hơn GDP danh nghĩa.'] },
                { title: 'Hạn chế', bullets: ['PPP chỉ đúng dài hạn, ngắn hạn tỷ giá bị dòng vốn, lãi suất, tâm lý chi phối.', 'Không phải mọi hàng hóa đều có thể trade (dịch vụ cắt tóc, nhà ở là non-tradable).'] }
            ]
        }
    },
    {
        id: 'gold-market',
        cat: 'market',
        icon: '🪙',
        title: 'Thị trường Vàng — Cơ chế & Yếu tố giá',
        body: {
            intro: 'Vàng là tài sản đặc biệt: vừa là hàng hóa, vừa là tiền tệ, vừa là công cụ phòng thủ. Giá vàng phản ánh lãi suất thực, niềm tin USD và tâm lý rủi ro toàn cầu.',
            sections: [
                { title: 'Cơ chế định giá', bullets: ['LBMA London: sàn giao ngay chuẩn quốc tế, giá fix 2 lần/ngày làm giá tham chiếu toàn cầu.', 'COMEX New York: sàn futures, phần lớn hợp đồng đóng bằng tiền mặt không giao vàng thật.', 'Giá vàng niêm yết bằng USD/oz troy — 1 troy oz = 31.1035 gram.'] },
                { title: '8 yếu tố ảnh hưởng giá vàng (theo mức độ)', bullets: ['★★★★★ Lãi suất thực (10Y TIPS yield): nghịch chiều — lãi suất thực âm = vàng hưởng lợi.', '★★★★★ Đồng USD (DXY Index): nghịch chiều — USD mạnh, vàng yếu và ngược lại.', '★★★★☆ Lạm phát kỳ vọng (breakeven rate): thuận chiều — kỳ vọng lạm phát tăng kéo cầu vàng.', '★★★★☆ Rủi ro địa chính trị: thuận chiều — chiến tranh, khủng hoảng đẩy dòng tiền vào vàng.', '★★★★☆ Mua vàng của NHTW: thuận chiều — mua ròng 1.000+ tấn/năm là cầu bền vững nhất.', '★★★☆☆ Dòng vào/ra ETF vàng: thuận chiều — phản ánh tâm lý tổ chức nhanh nhất.', '★★★☆☆ Cầu trang sức (Ấn Độ, TQ): thuận chiều — chiếm 35% nhưng co giãn theo giá.', '★★☆☆☆ Cung khai thác mỏ: nghịch chiều nhưng yếu — tăng chỉ 1-2%/năm, ít ảnh hưởng ngắn hạn.'] },
                { title: '9 kỹ thuật phân tích vàng chuyên sâu', bullets: ['TIPS Yield: Theo dõi 10Y real yield — khi yield âm sâu hơn, vàng xu hướng tăng.', 'DXY Correlation: Hệ số tương quan XAUUSD/DXY thường −0.7 đến −0.9; phân kỳ = tín hiệu.', 'ETF Holdings (GLD+IAU): Tăng = dòng tiền tổ chức vào vàng; giảm 4+ tuần liên tiếp = cảnh báo.', 'COT Report COMEX: Commercials bán ròng + Speculators long cực đại → cẩn thận đảo chiều 4-8 tuần.', 'Gold/Silver Ratio: Trên 80 = vàng đắt tương đối; bắt đầu co lại = bạc thường dẫn rally.', 'Gold/Oil Ratio: Bình thường 15-25 thùng/oz; lệch nhiều = một tài sản đang bị định giá sai.', 'GOFO (Gold Forward Offered Rate): Âm = backwardation, cầu giao ngay căng, báo tăng ngắn hạn.', 'Central Bank Flow Data: WGC quarterly — Trung Quốc, Ấn Độ, Nga, Ba Lan, Thổ Nhĩ Kỳ là quan trọng nhất.', 'Phân tích kỹ thuật: Fibonacci 61.8% là hỗ trợ/kháng cự mạnh; volume COMEX xác nhận breakout.'] },
                { title: 'Vàng trong danh mục đầu tư', bullets: ['Phân bổ 5-15% vàng giảm biến động danh mục mà không giảm nhiều return dài hạn (Bridgewater).', 'Tương quan thấp với cổ phiếu và trái phiếu — vàng là tài sản đa dạng hóa lý tưởng.', 'Không sinh lãi, không cổ tức — chi phí cơ hội cao khi lãi suất thực dương.'] },
                { title: 'Từ Gold Standard đến Fiat', bullets: ['Bretton Woods (1944-1971): USD cố định 35 USD/oz, các đồng tiền khác neo vào USD.', 'Nixon Shock 1971: Mỹ huỷ đổi USD-vàng, vàng thành hàng hóa thị trường tự do.', 'Ngày nay, NHTW vẫn giữ vàng như "bảo hiểm hệ thống" dù không còn cơ chế peg chính thức.'] }
            ]
        }
    },
    {
        id: 'gold-technical',
        cat: 'market',
        icon: '📐',
        title: 'Kỹ thuật Phân tích Vàng — Tỷ lệ & Tín hiệu',
        body: {
            intro: 'Phân tích vàng đòi hỏi kết hợp dữ liệu COT, ETF flows, GOFO và các tỷ lệ liên kim loại để đọc đúng tín hiệu thị trường.',
            sections: [
                { title: 'Tỷ lệ liên kim loại', bullets: ['Gold/Silver Ratio (GSR): lịch sử biến động 15-120; GSR >80 = vàng đắt hoặc bạc rẻ bất thường.', 'Gold/Oil Ratio: 15-25 là vùng bình thường; <10 = dầu quá đắt tương đối; >40 = vàng overbought tương đối.', 'Gold/Copper Ratio: Vàng là "sợ hãi", Đồng là "tăng trưởng" — tỷ lệ tăng = risk-off, giảm = risk-on.'] },
                { title: 'COT Report, ETF Flows & GOFO', bullets: ['COT Commercial hedgers: Thường là bên bán (mines, banks) — khi họ bán ròng cực đại, thị trường đã overbought.', 'COT Large Speculators: Khi họ long cực đại cùng lúc Commercials bán ròng cực đại → set up đảo chiều trong 4-8 tuần.', 'ETF Holdings Change: Dòng vào/ra GLD + IAU kỳ hàng tuần — 4 tuần liên tiếp rút ròng = tín hiệu bán tổ chức.', 'GOFO (Gold Forward Offered Rate): Khi GOFO âm = vàng giao ngay đắt hơn vàng kỳ hạn (backwardation) → cầu vật chất đang căng.'] },
                { title: 'Phân tích kỹ thuật biểu đồ', bullets: ['Fibonacci retracement 61.8% là ngưỡng quan trọng nhất trong các đợt điều chỉnh của vàng.', 'Đường MA200 tuần: Vàng hiếm khi phá xuống dưới MA200W trong bull market dài hạn.', 'Head & Shoulders, cup-and-handle là mô hình phổ biến nhất trên XAUUSD khung tuần/tháng.', 'RSI >80 trên khung tháng = overbought rõ ràng; RSI <30 trên khung tháng = thường là cơ hội mua dài hạn.'] }
            ],
            callout: 'COT report: khi dealers bán ròng cực đại và speculators long cực đại → cẩn thận đảo chiều trong 4-8 tuần'
        }
    }
];
