// ==================== CỔ ĐẠI - ANCIENT EARNING MODELS ====================

const ancientModels = [
    {
        id: 'hunting-gathering',
        icon: '🏹',
        title: 'Săn Bắt - Hái Lượm',
        subtitle: 'Mô hình kiếm sống đầu tiên của loài người',
        era: '~200,000 TCN',
        category: 'ancient',
        formula: 'Thu nhập = Sức lực × Kỹ năng × May mắn',
        description: 'Phương thức sinh tồn nguyên thủy nhất — dùng sức lao động trực tiếp để thu thập thức ăn từ tự nhiên.',
        tags: ['Sinh tồn', 'Tự nhiên', 'Cộng đồng'],
        incomeLevel: 'Đủ sống',
        scalability: 1,
        detail: {
            overview: `Đây là mô hình kinh tế đầu tiên: con người trực tiếp lấy tài nguyên từ thiên nhiên. Không có khái niệm "tiền" hay "trao đổi thương mại" — chỉ có sống sót.`,
            howItWorks: [
                'Săn bắt động vật để lấy thịt, da, xương',
                'Hái lượm trái cây, rau củ, hạt giống',
                'Đánh bắt cá ở sông, biển',
                'Chia sẻ trong bộ lạc (kinh tế cộng đồng)'
            ],
            formula: {
                text: 'Thu nhập = Sức lực × Kỹ năng × Tài nguyên có sẵn',
                explain: 'Thu nhập phụ thuộc hoàn toàn vào sức khỏe bản thân và tài nguyên thiên nhiên xung quanh.'
            },
            examples: [
                { title: '🦣 Thợ săn Mammoth', desc: 'Một nhóm 10-20 người cùng săn 1 con voi ma mút, đủ nuôi bộ lạc 50 người trong 2 tuần.' },
                { title: '🫐 Người hái lượm', desc: 'Phụ nữ và trẻ em thu hoạch 60-80% lượng thức ăn hàng ngày của bộ lạc từ hái lượm.' }
            ],
            pros: ['Tự do, không phụ thuộc ai', 'Không cần vốn', 'Cuộc sống hòa hợp tự nhiên'],
            cons: ['Phụ thuộc thời tiết, mùa vụ', 'Không tích lũy được', 'Nguy hiểm, tuổi thọ thấp', 'Không mở rộng được'],
            modernVersion: 'Nghề tự do (freelancer) — dùng kỹ năng cá nhân kiếm sống, nhưng không có "hệ thống" đằng sau.'
        }
    },
    {
        id: 'farming',
        icon: '🌾',
        title: 'Nông Nghiệp & Chăn Nuôi',
        subtitle: 'Cuộc cách mạng kinh tế đầu tiên',
        era: '~10,000 TCN',
        category: 'ancient',
        formula: 'Thu nhập = Đất × Lao động × Thời tiết × Mùa vụ',
        description: 'Con người chuyển từ du mục sang định cư — trồng trọt và chăn nuôi tạo ra thặng dư lần đầu tiên.',
        tags: ['Đất đai', 'Mùa vụ', 'Thặng dư'],
        incomeLevel: 'Trung bình',
        scalability: 2,
        detail: {
            overview: `Cách mạng Nông nghiệp (~10,000 TCN) là bước ngoặt lớn nhất trong lịch sử kiếm tiền. Lần đầu tiên, con người tạo ra THẶNG DƯ — sản xuất nhiều hơn mức cần. Thặng dư này dẫn đến: trao đổi, chuyên môn hóa, và cuối cùng là "tiền".`,
            howItWorks: [
                'Trồng trọt trên đất → Thu hoạch theo mùa',
                'Chăn nuôi gia súc → Thịt, sữa, da, sức kéo',
                'Thặng dư → Trao đổi lấy vật phẩm khác',
                'Tích lũy → Giàu = nhiều đất, nhiều gia súc',
                'Chuyên môn hóa → Người trồng lúa, người nuôi bò...'
            ],
            formula: {
                text: 'Thặng dư = (Đất × Năng suất) - Tiêu thụ gia đình',
                explain: 'Giàu = có nhiều đất tốt + lao động hiệu quả. "Đất" trở thành tài sản đầu tiên.'
            },
            examples: [
                { title: '🏺 Lưỡng Hà (~5000 TCN)', desc: 'Nông dân Sumer trồng lúa mì, lúa mạch. Những người có đất màu mỡ gần sông Euphrates trở thành giàu có, hình thành tầng lớp quý tộc.' },
                { title: '🐄 Châu Phi cổ đại', desc: '"Giàu" được đo bằng số đầu gia súc. Các bộ tộc Masai đến nay vẫn dùng bò làm thước đo giàu có.' }
            ],
            pros: ['Tạo ra thặng dư, tích lũy được', 'Nền tảng cho mọi nền kinh tế', 'Ổn định hơn săn bắt'],
            cons: ['Phụ thuộc thời tiết, thiên tai', 'Cần đất đai (tài nguyên hữu hạn)', '"Bẫy Malthus" — dân số tăng, thu nhập giảm'],
            modernVersion: 'Real estate (bất động sản) — "đất" vẫn là tài sản quan trọng nhất. Warren Buffett: "Đừng bao giờ đánh cược chống lại nước Mỹ" ≈ đừng đánh cược chống lại đất đai.'
        }
    },
    {
        id: 'barter',
        icon: '🤝',
        title: 'Trao Đổi Hàng Hóa (Barter)',
        subtitle: 'Nền tảng của thương mại',
        era: '~6000 TCN',
        category: 'ancient',
        formula: 'Lợi nhuận = Giá trị nhận - Giá trị cho',
        description: 'Dùng hàng hóa này đổi hàng hóa khác — mô hình "kinh doanh" đầu tiên tạo giá trị mà không cần sản xuất thêm.',
        tags: ['Thương mại', 'Trao đổi', 'Giá trị'],
        incomeLevel: 'Biến động',
        scalability: 2,
        detail: {
            overview: `Khi có thặng dư, người ta bắt đầu TRAO ĐỔI. Đây là mô hình "kinh doanh" đầu tiên: kiếm lời bằng cách chuyển hàng hóa từ nơi thừa sang nơi thiếu, hoặc đổi cái mình giỏi lấy cái mình cần.`,
            howItWorks: [
                'Nông dân A có thừa lúa, thiếu vải → đổi với thợ dệt B',
                'Giá trị trao đổi phụ thuộc cung-cầu tại chỗ',
                'Trung gian xuất hiện = "thương nhân" đầu tiên',
                'Chợ phiên hình thành = nơi tập trung trao đổi'
            ],
            formula: {
                text: 'Lợi nhuận = Chênh lệch giá trị nhận thức giữa 2 bên',
                explain: 'Thương nhân kiếm tiền bằng cách biết AI CẦN GÌ ở đâu — thông tin là sức mạnh.'
            },
            examples: [
                { title: '🧂 Muối = Vàng trắng', desc: 'Muối cực hiếm ở nội địa nhưng rẻ ven biển. Thương nhân mua muối giá rẻ ven biển, mang vào nội địa đổi lấy vàng, gia vị. Lợi nhuận 1000%+.' },
                { title: '🐚 Vỏ sò Cowrie', desc: 'Vỏ sò được dùng làm "tiền" ở Trung Quốc, Ấn Độ, Châu Phi — một trong những dạng tiền tệ đầu tiên để giải quyết vấn đề "double coincidence of wants".' }
            ],
            pros: ['Không cần tiền mặt', 'Kiếm lợi từ chênh lệch thông tin', 'Nền tảng của mọi hoạt động thương mại'],
            cons: ['"Double coincidence of wants" — phải tìm đúng người cần', 'Khó định giá chính xác', 'Không tích trữ được dễ dàng'],
            modernVersion: 'Arbitrage (kinh doanh chênh lệch giá) — mua rẻ nơi này, bán đắt nơi kia. Dropshipping, import/export đều là biến thể hiện đại.'
        }
    },
    {
        id: 'craftsmanship',
        icon: '⚒️',
        title: 'Thủ Công & Nghề Nghiệp',
        subtitle: 'Chuyên môn hóa tạo giá trị',
        era: '~4000 TCN',
        category: 'ancient',
        formula: 'Thu nhập = Kỹ năng × Thời gian × Độ hiếm',
        description: 'Chuyên môn hóa sâu — thợ rèn, thợ gốm, thợ dệt tạo sản phẩm mà không ai khác làm được.',
        tags: ['Kỹ năng', 'Chuyên môn', 'Sản phẩm'],
        incomeLevel: 'Khá - Cao',
        scalability: 2,
        detail: {
            overview: `Khi xã hội phát triển, một số người CHUYÊN MÔN HÓA vào một nghề. Thay vì ai cũng trồng lúa, có người chỉ rèn sắt, có người chỉ làm gốm. Nguyên lý: "Làm giỏi 1 thứ → đổi lấy mọi thứ khác."`,
            howItWorks: [
                'Học nghề từ sư phụ (apprenticeship) — 5-10 năm',
                'Tạo sản phẩm chất lượng cao, khó thay thế',
                'Bán sản phẩm hoặc dịch vụ cho cộng đồng',
                'Phường hội (guild) quản lý chất lượng và giá cả',
                'Bí mật nghề = lợi thế cạnh tranh'
            ],
            formula: {
                text: 'Giá = Chi phí nguyên liệu + (Kỹ năng × Thời gian) + Độ hiếm',
                explain: 'Càng ít người làm được, giá càng cao. "Kỹ năng hiếm" = tiền nhiều.'
            },
            examples: [
                { title: '⚔️ Thợ rèn kiếm Nhật (Katana)', desc: 'Một thanh katana mất 6 tháng - 1 năm để hoàn thành. Thợ rèn giỏi được Shogun bảo trợ, có địa vị cao trong xã hội. Giá 1 katana = cả gia tài.' },
                { title: '🏺 Thợ gốm Trung Hoa', desc: 'Bí mật nung gốm sứ giúp Trung Hoa độc quyền thương mại sứ ngàn năm. 1 bình sứ Cảnh Đức Trấn = vàng ở châu Âu.' }
            ],
            pros: ['Thu nhập cao nếu kỹ năng hiếm', 'Công việc ổn định, có uy tín', 'Có thể truyền nghề'],
            cons: ['Mất nhiều năm học', 'Bị giới hạn bởi thời gian cá nhân', 'Có thể bị công nghệ thay thế'],
            modernVersion: 'Chuyên gia/Consultant — bác sĩ, luật sư, dev senior, designer đều là "thợ thủ công hiện đại". Thu nhập cao nhờ kỹ năng hiếm.'
        }
    },
    {
        id: 'taxation-tribute',
        icon: '👑',
        title: 'Thuế & Cống Nạp (Quyền Lực)',
        subtitle: 'Kiếm tiền bằng quyền lực chính trị',
        era: '~3000 TCN',
        category: 'ancient',
        formula: 'Thu nhập = Quyền lực × Dân số × Thuế suất',
        description: 'Vua chúa, quý tộc thu thuế từ người dân — mô hình "kiếm tiền" bằng quyền lực chính trị.',
        tags: ['Quyền lực', 'Thuế', 'Nhà nước'],
        incomeLevel: 'Rất cao',
        scalability: 5,
        detail: {
            overview: `Khi nhà nước hình thành, một nhóm người "kiếm tiền" bằng cách THU THUẾ. Đây là mô hình scalable đầu tiên: 1 người (vua) thu tiền từ hàng triệu người. Nguyên lý: Quyền lực = Tiền.`,
            howItWorks: [
                'Chiếm đóng lãnh thổ → Tuyên bố quyền sở hữu',
                'Đặt ra luật thuế (10-50% sản lượng)',
                'Dùng quân đội để ENFORCE (cưỡng chế)',
                'Phân bổ lại: xây dựng hạ tầng, nuôi quân đội',
                'Quý tộc = trung gian thu thuế, được hưởng phần'
            ],
            formula: {
                text: 'Thu nhập = Σ(Thuế mỗi người) = Dân số × Thu nhập TB × Thuế suất',
                explain: 'Càng nhiều dân, càng giàu. Đế chế La Mã thu thuế từ 60 triệu người.'
            },
            examples: [
                { title: '🏛️ Đế chế La Mã', desc: 'Thuế 10% thu nhập (decima) + thuế đất + thuế nhập khẩu. Augustus Caesar (63 TCN) có tài sản tương đương $4.6 nghìn tỷ USD ngày nay.' },
                { title: '🐉 Hoàng đế Trung Hoa', desc: 'Thu thuế bằng lúa gạo, vải, sức lao động. Càn Long (1711-1799) có GDP chiếm 25% toàn cầu.' }
            ],
            pros: ['Scalable — thu từ hàng triệu người', 'Passive income thuần túy', 'Quyền lực tự duy trì quyền lực'],
            cons: ['Cần quân đội để enforce', 'Rủi ro bị lật đổ', 'Không tạo ra giá trị thực'],
            modernVersion: 'Platform fee & Monopoly — Facebook, Google thu "thuế" từ mọi doanh nghiệp (phí quảng cáo). Apple thu 30% từ App Store. Đây là "thuế kỹ thuật số".'
        }
    }
];
