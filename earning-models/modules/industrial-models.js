// ==================== CÔNG NGHIỆP - INDUSTRIAL EARNING MODELS ====================

const industrialModels = [
    {
        id: 'factory-production',
        icon: '🏭',
        title: 'Sản Xuất Công Nghiệp',
        subtitle: 'Mass production — quy mô tạo giàu có',
        era: '1760 → Nay',
        category: 'industrial',
        formula: 'Lợi nhuận = (Giá bán - Chi phí/SP) × Số lượng SP',
        description: 'Sản xuất hàng loạt với máy móc — giảm chi phí mỗi đơn vị, tăng số lượng bán ra.',
        tags: ['Sản xuất', 'Quy mô', 'Máy móc'],
        incomeLevel: 'Rất cao',
        scalability: 5,
        detail: {
            overview: `Cách mạng Công nghiệp (1760-1840) thay đổi TẤT CẢ. Máy móc thay thế tay người → sản xuất nhanh hơn 100x → giá giảm → nhiều người mua hơn → lợi nhuận khổng lồ. Nguyên lý cốt lõi: ECONOMIES OF SCALE — sản xuất càng nhiều, chi phí mỗi đơn vị càng rẻ.`,
            howItWorks: [
                'Đầu tư vốn lớn vào nhà máy + máy móc',
                'Thuê công nhân vận hành (lương cố định)',
                'Sản xuất hàng loạt → giảm giá thành/SP',
                'Phân phối qua kênh rộng (đại lý, bán lẻ)',
                'Lợi nhuận = chênh lệch × quy mô khổng lồ'
            ],
            formula: {
                text: 'Margin/SP = Giá bán - (Cố định/N + Biến đổi)  |  N = số SP',
                explain: 'Khi N tăng → chi phí cố định/SP giảm → margin tăng. Đây là ma thuật của scale.'
            },
            examples: [
                { title: '🚗 Henry Ford - Model T (1908)', desc: 'Dây chuyền lắp ráp giảm thời gian sản xuất từ 12h → 93 phút/xe. Giá xe giảm từ $850 → $260. Bán 15 triệu xe. Ford trở thành người giàu nhất thế giới.' },
                { title: '👟 Nike', desc: 'Chi phí sản xuất 1 đôi giày ~$20-30, bán $100-200. Lợi nhuận đến từ quy mô (1.2 tỷ đôi/năm) + thương hiệu.' }
            ],
            pros: ['Economies of scale mạnh mẽ', 'Tạo nhiều việc làm', 'Sản phẩm giá rẻ cho đại chúng'],
            cons: ['Cần vốn rất lớn', 'Rủi ro tồn kho', 'Ô nhiễm, vấn đề lao động'],
            modernVersion: 'Contract manufacturing (Foxconn cho Apple), 3D printing (sản xuất theo yêu cầu), smart factory (Industry 4.0).'
        }
    },
    {
        id: 'wage-labor',
        icon: '👷',
        title: 'Lao Động Làm Thuê',
        subtitle: 'Đổi thời gian lấy tiền — phổ biến nhất thế giới',
        era: '1800 → Nay',
        category: 'industrial',
        formula: 'Thu nhập = Giờ làm × Lương/giờ',
        description: 'Bán thời gian và sức lao động cho người khác — mô hình kiếm tiền phổ biến nhất lịch sử hiện đại.',
        tags: ['Lương', 'Thời gian', 'Nhân viên'],
        incomeLevel: 'Thấp - Trung bình',
        scalability: 1,
        detail: {
            overview: `~70% dân số thế giới kiếm tiền bằng cách này: bán thời gian cho công ty, nhận lương. Nguyên lý: Bạn tạo ra giá trị X cho công ty, công ty trả bạn Y, trong đó Y < X (phần chênh = lợi nhuận công ty). Mô hình này AN TOÀN nhưng GIỚI HẠN.`,
            howItWorks: [
                'Học kỹ năng → xin việc → được tuyển',
                'Làm việc theo giờ/ngày/tháng cố định',
                'Nhận lương đều đặn (thường hàng tháng)',
                'Tăng lương theo kinh nghiệm, thăng chức',
                'Giới hạn: 24h/ngày, 1 thân xác'
            ],
            formula: {
                text: 'Thu nhập MAX = 24h × Lương/giờ cao nhất có thể',
                explain: 'Bị giới hạn bởi thời gian. Dù lương $1000/giờ, vẫn bị giới hạn ở ~2,000h làm việc/năm = $2M/năm max.'
            },
            examples: [
                { title: '🏗️ Công nhân nhà máy 1900s', desc: 'Làm 12-16h/ngày, 6 ngày/tuần. Lương vừa đủ sống. Henry Ford tăng lương gấp đôi lên $5/ngày (1914) → năng suất tăng, nghỉ việc giảm.' },
                { title: '💼 Nhân viên văn phòng 2024', desc: 'Lương trung bình VN: 8-15 triệu/tháng. Mỹ: $60,000/năm. Đi làm 40h/tuần, 48 tuần/năm. Tăng lương 5-10%/năm.' }
            ],
            pros: ['Thu nhập ổn định, dễ dự đoán', 'Ít rủi ro', 'Không cần vốn', 'Có bảo hiểm, phúc lợi'],
            cons: ['Bị giới hạn bởi thời gian', 'Không scalable', 'Phụ thuộc vào công ty', '"Đổi 40 năm tự do cho 40 năm lương"'],
            modernVersion: 'Remote work, gig economy (Grab, Uber) — vẫn là bán thời gian, nhưng linh hoạt hơn.'
        }
    },
    {
        id: 'stock-investment',
        icon: '📊',
        title: 'Cổ Phần & Đầu Tư',
        subtitle: 'Sở hữu doanh nghiệp mà không cần điều hành',
        era: '1602 → Nay',
        category: 'industrial',
        formula: 'ROI = (Cổ tức + Tăng giá CP) / Giá mua × 100%',
        description: 'Mua cổ phần công ty → nhận cổ tức + tăng giá — sở hữu mà không cần làm việc.',
        tags: ['Cổ phiếu', 'Đầu tư', 'Passive income'],
        incomeLevel: 'Biến động - Rất cao',
        scalability: 5,
        detail: {
            overview: `VOC (1602) phát minh cổ phiếu — cho phép BẤT KỲ AI sở hữu một phần doanh nghiệp. Đây là cách "tiền làm việc cho bạn" hiệu quả nhất. Warren Buffett biến $10,000 thành $100+ tỷ USD bằng cách này.`,
            howItWorks: [
                'Mua cổ phiếu (= sở hữu một phần công ty)',
                'Công ty kinh doanh → tạo lợi nhuận',
                'Nhận cổ tức hàng quý/năm (chia lợi nhuận)',
                'Giá cổ phiếu tăng → bán lời (capital gain)',
                'Reinvest (tái đầu tư) → lãi kép'
            ],
            formula: {
                text: 'Giá trị = Σ(Cổ tức tương lai) / (1+r)^n  |  Mô hình DCF',
                explain: 'Giá cổ phiếu = tổng giá trị hiện tại của tất cả cổ tức tương lai. P/E ratio, DCF là công cụ định giá.'
            },
            examples: [
                { title: '📈 Warren Buffett', desc: 'Bắt đầu đầu tư năm 11 tuổi. $10,000 năm 1965 → $300+ triệu USD nếu giữ trong Berkshire Hathaway. Lãi kép ~20%/năm suốt 58 năm.' },
                { title: '🍎 Apple IPO (1980)', desc: '$1,000 mua cổ phiếu Apple khi IPO ($22/CP) → trị giá $1.7 triệu USD năm 2024. ROI: 170,000%.' }
            ],
            pros: ['Scalable vô hạn', 'Passive income (cổ tức)', 'Thanh khoản cao (mua bán dễ)', 'Lãi kép cực mạnh'],
            cons: ['Rủi ro mất vốn', 'Cần kiến thức phân tích', 'Biến động tâm lý', 'Cần kiên nhẫn dài hạn'],
            modernVersion: 'ETF, Index Fund, Robo-advisor — đầu tư dễ dàng hơn bao giờ hết. Fractional shares cho phép mua $1 cổ phiếu.'
        }
    },
    {
        id: 'insurance-risk',
        icon: '🛡️',
        title: 'Bảo Hiểm & Quản Lý Rủi Ro',
        subtitle: 'Kiếm tiền từ xác suất và nỗi sợ',
        era: '1688 → Nay',
        category: 'industrial',
        formula: 'Lợi nhuận = Tổng phí thu - Tổng bồi thường - Chi phí',
        description: 'Thu phí từ nhiều người để bồi thường cho số ít gặp rủi ro — kinh doanh dựa trên thống kê.',
        tags: ['Bảo hiểm', 'Rủi ro', 'Xác suất'],
        incomeLevel: 'Rất cao',
        scalability: 5,
        detail: {
            overview: `Bảo hiểm là một trong những mô hình kinh doanh thiên tài nhất: thu tiền từ NHIỀU NGƯỜI, chỉ phải trả cho MỘT SỐ ÍT. Miễn là xác suất rủi ro < tỷ lệ phí thu → lãi to. Lloyd's of London bắt đầu từ quán cà phê năm 1688.`,
            howItWorks: [
                'Tính xác suất rủi ro (actuarial science)',
                'Đặt phí bảo hiểm > chi phí rủi ro dự kiến',
                'Thu phí từ hàng triệu người',
                'Bồi thường cho số ít gặp sự cố',
                'ĐẦU TƯ tiền phí thu → sinh lời thêm (float)'
            ],
            formula: {
                text: 'Lợi nhuận = Σ(Phí BH) - Σ(Bồi thường) + ROI(Float)',
                explain: 'Warren Buffett dùng "float" (tiền BH chưa phải trả) để đầu tư → Berkshire Hathaway.'
            },
            examples: [
                { title: '🏢 Berkshire Hathaway', desc: 'Buffett mua GEICO (bảo hiểm ô tô). Float $147 tỷ USD (2023) = tiền miễn phí để đầu tư. 60 năm thu float + đầu tư = tỷ phú.' },
                { title: '💎 Lloyd\'s of London', desc: 'Bắt đầu từ 1688 trong quán cà phê. Bảo hiểm tàu biển. Nay bảo hiểm mọi thứ từ vệ tinh đến chân cầu thủ. Doanh thu £35+ tỷ/năm.' }
            ],
            pros: ['Float = vốn miễn phí', 'Scalable cực kỳ', 'Dựa trên toán học, dự đoán được'],
            cons: ['Cần vốn dự phòng lớn', 'Thiên tai/đại dịch = thua lỗ nặng', 'Quy định chặt chẽ'],
            modernVersion: 'InsurTech, micro-insurance, parametric insurance (bảo hiểm tự động theo dữ liệu), DeFi insurance.'
        }
    }
];
