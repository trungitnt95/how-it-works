// ==================== TRUYỀN THỐNG - TRADITIONAL EARNING MODELS ====================

const traditionalModels = [
    {
        id: 'merchant-trade',
        icon: '🐪',
        title: 'Thương Nhân & Buôn Bán',
        subtitle: 'Kiếm tiền từ chênh lệch địa lý',
        era: '~2000 TCN → Nay',
        category: 'traditional',
        formula: 'Lợi nhuận = (Giá bán - Giá mua) × Số lượng - Chi phí vận chuyển',
        description: 'Mua rẻ nơi này, bán đắt nơi khác — mô hình thương mại cổ điển xuyên suốt lịch sử.',
        tags: ['Thương mại', 'Vận chuyển', 'Chênh lệch giá'],
        incomeLevel: 'Cao - Rất cao',
        scalability: 4,
        detail: {
            overview: `Thương nhân là những người đầu tiên "GIÀU CÓ thực sự" không phải vua chúa. Bí quyết: đưa hàng hóa từ nơi RẺ đến nơi ĐẮT. Con đường Tơ lụa, các hải cảng thương mại, và sau này là các công ty Đông Ấn — tất cả đều dựa trên nguyên lý này.`,
            howItWorks: [
                'Tìm hiểu nhu cầu thị trường (thông tin = vàng)',
                'Mua hàng giá rẻ tại nguồn sản xuất',
                'Vận chuyển qua các tuyến thương mại',
                'Bán giá cao tại thị trường có nhu cầu',
                'Tái đầu tư lợi nhuận → mở rộng tuyến mới'
            ],
            formula: {
                text: 'ROI = (Giá bán - Giá mua - Chi phí) / Vốn × 100%',
                explain: 'Chênh lệch càng lớn, rủi ro vận chuyển càng cao → lợi nhuận càng khủng.'
            },
            examples: [
                { title: '🛤️ Con đường Tơ lụa', desc: '1 kg gia vị mua ở Ấn Độ = vài xu → bán ở châu Âu = đắt hơn vàng. Marco Polo, các thương nhân Ả Rập trở nên giàu có khó tưởng tượng.' },
                { title: '🚢 Công ty Đông Ấn Hà Lan (VOC)', desc: 'Thành lập 1602, là công ty cổ phần đầu tiên lịch sử. Giá trị cao nhất = $7.9 nghìn tỷ USD (theo giá 2024). Kiếm tiền từ độc quyền gia vị.' }
            ],
            pros: ['Lợi nhuận rất cao', 'Scalable — tăng quy mô hàng hóa', 'Tạo mạng lưới quan hệ'],
            cons: ['Rủi ro cao (cướp biển, thời tiết, chiến tranh)', 'Cần vốn lớn', 'Phụ thuộc thông tin thị trường'],
            modernVersion: 'Import/Export, E-commerce, Amazon FBA — cùng nguyên lý, khác công nghệ. Dropshipping là phiên bản "thương nhân không cần kho".'
        }
    },
    {
        id: 'money-lending',
        icon: '🏦',
        title: 'Cho Vay & Ngân Hàng',
        subtitle: 'Tiền đẻ ra tiền — mô hình vĩ đại nhất',
        era: '~1800 TCN → Nay',
        category: 'traditional',
        formula: 'Thu nhập = Vốn × Lãi suất × Thời gian',
        description: 'Dùng tiền để sinh ra tiền — nguyên lý cốt lõi đằng sau mọi hệ thống tài chính hiện đại.',
        tags: ['Lãi suất', 'Vốn', 'Tài chính'],
        incomeLevel: 'Rất cao',
        scalability: 5,
        detail: {
            overview: `"Tiền đẻ ra tiền" — có lẽ là phát minh quan trọng nhất trong lịch sử kinh tế. Từ các chủ nợ ở Babylon đến ngân hàng Medici đến Wall Street — nguyên lý không đổi: cho người khác dùng tiền của mình, và thu phí.`,
            howItWorks: [
                'Tích lũy vốn (tiết kiệm, thừa kế, kinh doanh)',
                'Cho người cần vay tiền',
                'Thu lãi suất — thường 5-30%/năm',
                'Lãi kép: lãi sinh ra lãi → tăng trưởng hàm mũ',
                'Ngân hàng: dùng tiền gửi cho vay → nhân theo hệ số'
            ],
            formula: {
                text: 'A = P × (1 + r)^n  |  Lãi kép vũ trụ',
                explain: 'P = vốn gốc, r = lãi suất, n = số kỳ. Einstein gọi lãi kép là "kỳ quan thứ 8 của thế giới".'
            },
            examples: [
                { title: '🏰 Gia tộc Medici (1397-1494)', desc: 'Ngân hàng Medici ở Florence cho Giáo hoàng, các vua châu Âu vay tiền. Lãi suất 8-15%. Trở thành gia tộc quyền lực nhất Phục Hưng.' },
                { title: '💰 Rothschild (1760s-nay)', desc: '5 anh em Rothschild mở ngân hàng ở 5 thành phố châu Âu. Tài trợ chiến tranh Napoleon cho CẢ HAI BÊN. Nắm giữ tài sản ước tính $400 tỷ+.' }
            ],
            pros: ['Passive income thuần túy', 'Lãi kép — tăng trưởng hàm mũ', 'Scalable vô hạn về lý thuyết'],
            cons: ['Cần vốn lớn ban đầu', 'Rủi ro vỡ nợ', 'Bị nhiều xã hội coi là "thiếu đạo đức"'],
            modernVersion: 'Đầu tư tài chính, P2P lending, DeFi lending — Lending Club, Aave, Compound đều là phiên bản số hóa.'
        }
    },
    {
        id: 'landlord-rent',
        icon: '🏘️',
        title: 'Cho Thuê Tài Sản',
        subtitle: 'Sở hữu tài sản, thu tiền định kỳ',
        era: '~2000 TCN → Nay',
        category: 'traditional',
        formula: 'Thu nhập = Số tài sản × Giá thuê - Chi phí bảo trì',
        description: 'Sở hữu đất đai, nhà cửa, trang thiết bị và cho người khác thuê — dòng tiền thụ động bền vững nhất.',
        tags: ['Bất động sản', 'Passive income', 'Tài sản'],
        incomeLevel: 'Ổn định cao',
        scalability: 4,
        detail: {
            overview: `"Nếu không thể sở hữu đất, hãy cố gắng cho ai đó thuê đất" — nguyên lý này đã tồn tại hàng ngàn năm. Phong kiến = địa chủ cho thuê ruộng. Hiện đại = cho thuê nhà, văn phòng, máy móc. Nguyên lý: Sở hữu tài sản → Thu tiền đều đặn.`,
            howItWorks: [
                'Mua/xây/thừa kế tài sản (đất, nhà, máy)',
                'Cho người cần sử dụng thuê',
                'Thu tiền thuê định kỳ (hàng tháng/năm)',
                'Tài sản vẫn thuộc về mình + có thể tăng giá',
                'Dùng tiền thuê mua thêm tài sản → vòng lặp'
            ],
            formula: {
                text: 'ROI = (Tiền thuê/năm + Tăng giá tài sản) / Giá mua × 100%',
                explain: 'Thu nhập kép: tiền thuê hàng tháng + tài sản tăng giá theo thời gian.'
            },
            examples: [
                { title: '🏯 Địa chủ phong kiến Việt Nam', desc: 'Địa chủ sở hữu hàng trăm mẫu ruộng, cho nông dân thuê. Thu tô 40-60% sản lượng. Giàu có nhất làng.' },
                { title: '🏬 BĐS thương mại hiện đại', desc: 'Một tòa nhà văn phòng ở Manhattan cho thuê $80-100/sqft/năm. Tòa nhà 50 tầng → $50-100 triệu USD/năm tiền thuê.' }
            ],
            pros: ['Dòng tiền ổn định, dự đoán được', 'Tài sản tăng giá theo thời gian', 'Có thể dùng đòn bẩy (vay mua)'],
            cons: ['Cần vốn lớn ban đầu', 'Chi phí bảo trì, quản lý', 'Rủi ro trống phòng, người thuê xấu'],
            modernVersion: 'Airbnb (cho thuê ngắn hạn), REITs (đầu tư BĐS qua quỹ), cho thuê thiết bị, cho thuê phần mềm (SaaS).'
        }
    },
    {
        id: 'guild-monopoly',
        icon: '🛡️',
        title: 'Phường Hội & Độc Quyền',
        subtitle: 'Kiểm soát thị trường để định giá',
        era: '~1000 → 1800',
        category: 'traditional',
        formula: 'Lợi nhuận = Giá độc quyền - Giá thị trường tự do',
        description: 'Tập hợp nhóm → kiểm soát nguồn cung → giữ giá cao. Mô hình cartel cổ đại.',
        tags: ['Độc quyền', 'Phường hội', 'Kiểm soát'],
        incomeLevel: 'Cao',
        scalability: 3,
        detail: {
            overview: `Phường hội (Guild) là tổ chức của những người cùng nghề: thợ kim hoàn, thợ dệt, thợ rèn... Họ kiểm soát: ai được làm nghề, chất lượng sản phẩm, và giá bán. Bản chất: GIẢM CẠNH TRANH → TĂNG GIÁ.`,
            howItWorks: [
                'Thành lập hội nghề (guild/phường)',
                'Quy định ai được phép hành nghề (rào cản gia nhập)',
                'Kiểm soát chất lượng và giá tối thiểu',
                'Ngăn người ngoài cạnh tranh',
                'Lobby chính quyền để bảo vệ đặc quyền'
            ],
            formula: {
                text: 'Lợi nhuận = f(Rào cản gia nhập) = Cao khi ít đối thủ',
                explain: 'Ít cạnh tranh = giá cao = lợi nhuận cao. Đây là lý do monopoly luôn được theo đuổi.'
            },
            examples: [
                { title: '💎 De Beers (Kim cương)', desc: 'Kiểm soát 85% sản lượng kim cương thế giới vào 1980s. Tạo ra chiến dịch "A diamond is forever" để duy trì giá cao nhân tạo.' },
                { title: '🧵 Phường Dệt Florence', desc: 'Guild Arte della Lana kiểm soát ngành dệt len, quy định chất lượng, giá cả. Thành viên giàu có, tài trợ nghệ thuật Phục Hưng.' }
            ],
            pros: ['Lợi nhuận cao và ổn định', 'Giảm cạnh tranh', 'Bảo vệ quyền lợi thành viên'],
            cons: ['Thiếu đổi mới sáng tạo', 'Bị chống đối bởi xã hội', 'Bị phá vỡ bởi công nghệ mới'],
            modernVersion: 'OPEC (dầu mỏ), hiệp hội ngành, licensing (bằng hành nghề), patent trolling, app store monopoly.'
        }
    }
];
