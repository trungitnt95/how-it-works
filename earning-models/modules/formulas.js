// ==================== CÔNG THỨC KIẾM TIỀN - EARNING FORMULAS ====================

const earningFormulas = [
    {
        id: 'formula-time-money',
        icon: '⏰',
        title: 'Thời Gian → Tiền (Linear)',
        subtitle: 'Công thức: Thu nhập = Giờ × Rate',
        era: 'Mọi thời đại',
        category: 'formula',
        formula: 'Income = Hours × Rate/Hour',
        description: 'Mô hình cơ bản nhất: bán thời gian lấy tiền. 70% dân số dùng mô hình này.',
        tags: ['Lương', 'Freelance', 'Linear'],
        incomeLevel: 'Giới hạn',
        scalability: 1,
        detail: {
            overview: `Đây là mô hình kiếm tiền PHỔ BIẾN nhất nhưng GIỚI HẠN nhất. Thu nhập tỷ lệ thuận với thời gian → muốn kiếm nhiều hơn phải làm nhiều hơn → nhưng ngày chỉ có 24 giờ.`,
            howItWorks: [
                'Nhân viên: 8h/ngày × lương/giờ',
                'Freelancer: dự án × giá/dự án',
                'Bác sĩ: số ca × phí/ca',
                'Luật sư: giờ tư vấn × phí/giờ',
                'GIỚI HẠN: Max = 24h × Rate cao nhất'
            ],
            formula: { text: 'Income_MAX = 2,000h/năm × Rate cao nhất', explain: 'Nếu rate = $500/giờ (top luật sư) → Max = $1M/năm. Không thể $10M/năm bằng cách này.' },
            examples: [
                { title: '⬆️ Cách tăng: Nâng Rate', desc: 'Junior Dev: $30/h → Senior: $100/h → Architect: $200/h → CTO consulting: $500/h. NHƯNG trần vẫn là ~$1M/năm.' },
                { title: '🔄 Thoát "bẫy thời gian"', desc: 'Chuyển từ bán giờ → bán kết quả. Thay vì $100/giờ tư vấn, charge $50,000 cho "tăng 20% doanh thu".' }
            ],
            pros: ['Đơn giản, dễ bắt đầu', 'Thu nhập ổn định', 'Không cần vốn'],
            cons: ['Không scalable', 'Thu nhập bị giới hạn', 'Bệnh/nghỉ = không có tiền'],
            modernVersion: 'Mọi salaried worker, freelancer, consultant theo giờ.'
        }
    },
    {
        id: 'formula-leverage',
        icon: '⚡',
        title: 'Đòn Bẩy (Leverage)',
        subtitle: 'Công thức: Output = Input × Leverage Multiplier',
        era: 'Mọi thời đại',
        category: 'formula',
        formula: 'Output = Input × Leverage (Labor/Capital/Code/Media)',
        description: 'Naval Ravikant: 4 loại leverage — Lao động, Vốn, Code, Content. Người giàu dùng leverage.',
        tags: ['Leverage', 'Naval', 'Scale'],
        incomeLevel: 'Không giới hạn',
        scalability: 5,
        detail: {
            overview: `Naval Ravikant (AngelList founder) phân loại 4 dạng đòn bẩy:\n\n1. LABOR (người): Thuê người làm việc cho mình\n2. CAPITAL (vốn): Dùng tiền người khác để đầu tư\n3. CODE (phần mềm): Viết 1 lần, chạy ∞ lần\n4. MEDIA (nội dung): Tạo 1 lần, xem ∞ lần\n\nCode + Media = "leverage không cần xin phép" = thời đại mới.`,
            howItWorks: [
                'Labor: 1 manager + 100 nhân viên → gấp 100x output',
                'Capital: $1M vốn mình + $9M vay = gấp 10x đầu tư',
                'Code: 1 app phục vụ 1 triệu user → gấp 1M x',
                'Media: 1 video 10 triệu views → gấp 10M x',
                'KẾT HỢP: Code + Media + Capital = siêu leverage'
            ],
            formula: { text: 'Wealth = Skills × Leverage × Time', explain: 'Kỹ năng tốt × đòn bẩy lớn × kiên nhẫn dài = giàu có. Thiếu 1 yếu tố = thất bại.' },
            examples: [
                { title: '💻 Code Leverage: WhatsApp', desc: '55 nhân viên phục vụ 900 triệu user → bán cho Facebook $19 tỷ. Output/người = $345 triệu. Code leverage vô song.' },
                { title: '📺 Media Leverage: Joe Rogan', desc: '1 người nói chuyện → 200 triệu download/tháng → Spotify trả $200M. Media leverage: 1 input → 200M outputs.' }
            ],
            pros: ['Phá vỡ giới hạn thời gian', 'Scale vô hạn', 'Code/Media: không cần xin phép'],
            cons: ['Labor/Capital: cần xin phép/thuyết phục', 'Kỹ năng phải đủ tốt', 'Rủi ro khi dùng đòn bẩy sai'],
            modernVersion: 'Mọi tỷ phú đều dùng leverage. Zuckerberg (code+media), Buffett (capital), Bezos (labor+code+capital).'
        }
    },
    {
        id: 'formula-passive',
        icon: '💤',
        title: 'Thu Nhập Thụ Động (Passive)',
        subtitle: 'Công thức: Nỗ lực trước → Thu tiền sau',
        era: 'Mọi thời đại',
        category: 'formula',
        formula: 'Passive Income = Asset × Yield Rate',
        description: 'Xây dựng tài sản/hệ thống 1 lần → thu tiền liên tục mà không cần làm việc trực tiếp.',
        tags: ['Passive', 'Tài sản', 'Tự do tài chính'],
        incomeLevel: 'Biến động',
        scalability: 5,
        detail: {
            overview: `"Nếu bạn không tìm cách kiếm tiền khi ngủ, bạn sẽ làm việc đến khi chết" — Warren Buffett. Thu nhập thụ động = CÓ TIỀN MÀ KHÔNG CẦN LÀM VIỆC TRỰC TIẾP. Nhưng chú ý: "passive" không có nghĩa là "không làm gì" — phải xây dựng trước.`,
            howItWorks: [
                'Đầu tư tài chính: cổ phiếu, trái phiếu → cổ tức, lãi',
                'Bất động sản: mua nhà → cho thuê',
                'IP/Content: viết sách, tạo khóa học → bán mãi',
                'Business system: xây doanh nghiệp tự chạy',
                'Digital assets: app, website, domain → thu nhập tự động'
            ],
            formula: { text: 'FIRE Number = Chi tiêu/năm / 4% = Số tiền cần có', explain: 'Rule of 4%: Cần $1M đầu tư → rút $40K/năm mãi mãi. Chi tiêu 500tr VND/năm → cần ~12.5 tỷ VND.' },
            examples: [
                { title: '🏠 BĐS cho thuê', desc: 'Mua căn hộ 2 tỷ VND → cho thuê 10 triệu/tháng = 6%/năm. Sau 15 năm: nhà tăng giá gấp đôi + thu 1.8 tỷ tiền thuê.' },
                { title: '📚 Tim Ferriss - 4H Work Week', desc: 'Viết sách 1 lần (2007) → bán 2.1 triệu bản. Royalty ~$3-5/cuốn = $7-10 triệu. Vẫn thu hàng năm.' }
            ],
            pros: ['Tự do thời gian', 'Có thể nghỉ hưu sớm (FIRE)', 'Compound effect'],
            cons: ['Cần thời gian/vốn xây dựng ban đầu', 'Không thật sự "passive" 100%', 'Rủi ro mất tài sản'],
            modernVersion: 'Digital products, automated businesses, DeFi yields, dividend investing, Airbnb arbitrage.'
        }
    },
    {
        id: 'formula-value-creation',
        icon: '🎯',
        title: 'Tạo Giá Trị = Kiếm Tiền',
        subtitle: 'Công thức gốc: Income = Value Delivered × Capture Rate',
        era: 'Quy luật vĩnh cửu',
        category: 'formula',
        formula: 'Income = Value Created × Capture%',
        description: 'QUY LUẬT SỐ 1: Bạn kiếm được bao nhiêu = bạn tạo ra bao nhiêu giá trị cho người khác.',
        tags: ['Giá trị', 'Nguyên lý gốc', 'Universal'],
        incomeLevel: 'Tùy giá trị',
        scalability: 5,
        detail: {
            overview: `ĐÂY LÀ CÔNG THỨC GỐC của mọi cách kiếm tiền. Dù là nông dân, thương nhân, CEO, hay YouTuber — công thức đều là: Tạo giá trị cho người khác → giữ lại một phần giá trị đó.\n\nBạn muốn kiếm nhiều hơn? CÓ 2 CÁCH:\n1. Tăng giá trị tạo ra (bigger pie)\n2. Tăng % giữ lại (bigger slice)`,
            howItWorks: [
                'Xác định: AI cần GÌ? (nhu cầu thị trường)',
                'Tạo giải pháp: sản phẩm/dịch vụ giải quyết nhu cầu đó',
                'Deliver giá trị: giao sản phẩm/dịch vụ',
                'Capture value: thu tiền = % giá trị tạo ra',
                'Scale: phục vụ nhiều người hơn → nhiều giá trị hơn'
            ],
            formula: { text: 'Income = Σ(Value_per_person × Capture%) × N_people', explain: 'N = số người bạn phục vụ. Capture% = bạn giữ bao nhiêu. Amazon capture ~3-5%, nhưng N = 300 triệu khách.' },
            examples: [
                { title: '🍎 Steve Jobs', desc: 'iPhone tạo giá trị khổng lồ (thay phone, camera, GPS, mp3, computer). Giá $999 = capture 30% giá trị. 2.2 tỷ iPhone bán = $2.5+ nghìn tỷ doanh thu.' },
                { title: '🧹 Dọn nhà', desc: 'Giá trị tạo ra: tiết kiệm 4h cho khách ($100/4h). Charge $50 → capture 50% giá trị. Dọn 5 nhà/ngày = $250/ngày.' }
            ],
            pros: ['Áp dụng mọi lúc mọi nơi', 'Basis cho mọi mô hình khác', 'Ethical — phải tạo giá trị thực'],
            cons: ['Khó đo lường chính xác giá trị', 'Capture% phụ thuộc nhiều yếu tố', 'Competition giảm capture%'],
            modernVersion: 'Mọi startup thành công đều bắt đầu từ: "Tôi giải quyết vấn đề gì cho ai?"'
        }
    }
];
