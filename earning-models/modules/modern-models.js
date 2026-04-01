// ==================== HIỆN ĐẠI - MODERN EARNING MODELS ====================

const modernModels = [
    {
        id: 'franchise',
        icon: '🍟',
        title: 'Nhượng Quyền (Franchise)',
        subtitle: 'Nhân bản mô hình kinh doanh thành công',
        era: '1950s → Nay',
        category: 'modern',
        formula: 'Thu nhập = Phí nhượng quyền + % Doanh thu × Số cửa hàng',
        description: 'Tạo mô hình thành công → bán quyền copy cho người khác → thu phí liên tục.',
        tags: ['Nhượng quyền', 'Thương hiệu', 'Nhân bản'],
        incomeLevel: 'Rất cao',
        scalability: 5,
        detail: {
            overview: `Ray Kroc không phát minh hamburger — ông phát minh cách NHÂN BẢN nhà hàng hamburger. McDonald's có 40,000+ cửa hàng, thu 4-5% doanh thu mỗi cửa hàng. Nguyên lý: Tạo hệ thống hoạt động tốt → bán quyền sao chép.`,
            howItWorks: [
                'Xây dựng mô hình kinh doanh thành công + có hệ thống',
                'Chuẩn hóa quy trình (SOP), đào tạo',
                'Bán quyền sao chép cho đối tác (franchisee)',
                'Thu phí nhượng quyền (ban đầu) + % doanh thu (ongoing)',
                'Hỗ trợ marketing, nguồn hàng, đào tạo'
            ],
            formula: {
                text: 'Thu nhập/năm = N × (Phí ban đầu/năm + Doanh thu × Royalty%)',
                explain: 'N = số cửa hàng nhượng quyền. McDonald\'s: N=40,000+, Royalty=4-5%.'
            },
            examples: [
                { title: '🍔 McDonald\'s', desc: 'Ray Kroc mua quyền nhượng quyền từ anh em McDonald. Phí nhượng quyền $45,000 + 4% DT + 4% marketing. MC thu ~$23 tỷ/năm, 93% từ franchise.' },
                { title: '☕ Trung Nguyên Legend', desc: 'Phí nhượng quyền từ 500 triệu - 3 tỷ VND. 1,000+ cửa hàng. Thương hiệu cà phê Việt lớn nhất.' }
            ],
            pros: ['Mở rộng nhanh không cần vốn', 'Thu nhập thụ động từ royalty', 'Rủi ro thấp (franchisee chịu)'],
            cons: ['Cần mô hình đã chứng minh', 'Khó kiểm soát chất lượng', 'Phụ thuộc hiệu quả franchisee'],
            modernVersion: 'White-label SaaS, licensing IP, template business — bán "công thức" thay vì bán sản phẩm.'
        }
    },
    {
        id: 'intellectual-property',
        icon: '📝',
        title: 'Sở Hữu Trí Tuệ (IP)',
        subtitle: 'Tạo một lần, bán mãi mãi',
        era: '1710 → Nay',
        category: 'modern',
        formula: 'Thu nhập = Số bản × Giá × Thời gian bảo hộ',
        description: 'Sáng tạo nội dung, phát minh, thương hiệu → bán bản quyền → thu tiền vô hạn lần.',
        tags: ['Bản quyền', 'Patent', 'Sáng tạo'],
        incomeLevel: 'Biến động - Cực cao',
        scalability: 5,
        detail: {
            overview: `Sở hữu trí tuệ (IP) là mô hình "Tạo 1 lần, bán ∞ lần" thuần túy nhất. J.K. Rowling viết Harry Potter 1 lần → thu $1 tỷ+ từ sách, phim, merchandise, theme park. Chi phí biên = gần 0.`,
            howItWorks: [
                'Sáng tạo: viết sách, sáng chế, sáng tác nhạc, thiết kế...',
                'Đăng ký bảo hộ (patent, copyright, trademark)',
                'Cấp phép (license) cho người khác sử dụng',
                'Thu phí bản quyền (royalty) theo % hoặc cố định',
                'IP có thể bán, chuyển nhượng, thừa kế'
            ],
            formula: {
                text: 'Giá trị IP = Σ(Royalty dự kiến) / (1+r)^n',
                explain: 'IP giá trị nhất = thương hiệu. Apple brand worth $500+ tỷ USD. Coca-Cola brand = $100+ tỷ.'
            },
            examples: [
                { title: '📖 J.K. Rowling - Harry Potter', desc: 'Viết 7 cuốn sách. Thu nhập tổng: $1+ tỷ USD từ sách, phim (Warner Bros $7.7 tỷ box office), Wizarding World theme park, merchandise.' },
                { title: '💊 Pfizer - Viagra Patent', desc: 'Patent 1996-2020. Doanh thu $1.8+ tỷ USD/năm suốt 24 năm = $35+ tỷ USD tổng từ 1 phát minh.' }
            ],
            pros: ['Chi phí biên = 0', 'Thu nhập thụ động thuần túy', 'Scalable vô hạn', 'Có thể thừa kế'],
            cons: ['Khó tạo IP giá trị cao', 'Cần bảo hộ pháp lý', 'Bị vi phạm bản quyền', 'Patent hết hạn'],
            modernVersion: 'Digital products, online courses, NFTs, software licensing — mọi creator đều đang bán IP.'
        }
    },
    {
        id: 'consulting-expertise',
        icon: '🎓',
        title: 'Chuyên Gia & Tư Vấn',
        subtitle: 'Bán kiến thức, kinh nghiệm, giải pháp',
        era: '1900s → Nay',
        category: 'modern',
        formula: 'Thu nhập = Giờ tư vấn × Phí/giờ × Độ hiếm kỹ năng',
        description: 'Dùng kiến thức chuyên sâu để giúp người khác giải quyết vấn đề — "bán não" thay vì "bán tay".',
        tags: ['Tư vấn', 'Kiến thức', 'Chuyên gia'],
        incomeLevel: 'Cao - Rất cao',
        scalability: 2,
        detail: {
            overview: `McKinsey, BCG, Bain — "Big 3" tư vấn thu phí $500-1,000+/giờ/người. Bác sĩ phẫu thuật não thu $50,000+/ca. Nguyên lý: Bạn biết điều mà 99% người khác không biết → bán kiến thức đó.`,
            howItWorks: [
                'Tích lũy kiến thức chuyên sâu (10+ năm)',
                'Xây dựng uy tín (portfolio, case studies)',
                'Tư vấn: phân tích vấn đề → đề xuất giải pháp',
                'Thu phí theo giờ, theo dự án, hoặc retainer',
                'Leverage: đào tạo team để tư vấn thay mình'
            ],
            formula: {
                text: 'Phí = f(Giá trị vấn đề giải quyết, Độ hiếm kỹ năng)',
                explain: 'Nếu bạn giúp tiết kiệm $10 triệu → phí $1 triệu là USD rẻ.'
            },
            examples: [
                { title: '🏢 McKinsey & Company', desc: 'Doanh thu $16+ tỷ/năm. 45,000 nhân viên. Partner kiếm $5-20 triệu USD/năm. Tư vấn cho 90% Fortune 100.' },
                { title: '⚕️ Bác sĩ phẫu thuật Tim (VN)', desc: 'Thu nhập 200-500 triệu VND/tháng. Kỹ năng mất 15+ năm đào tạo. Số người làm được < 100 người cả nước.' }
            ],
            pros: ['Thu nhập cao', 'Không cần vốn', 'Tự chủ, linh hoạt', 'Uy tín tích lũy'],
            cons: ['Bị giới hạn bởi thời gian', 'Mất lâu để xây dựng expertise', 'Khó scale nếu làm 1 mình'],
            modernVersion: 'Online coaching, info products, paid communities — Dan Koe, Alex Hormozi kiếm $10M+/năm từ kiến thức.'
        }
    },
    {
        id: 'network-mlm',
        icon: '🔗',
        title: 'Mạng Lưới & Tiếp Thị Đa Cấp',
        subtitle: 'Xây dựng đội nhóm, thu hoa hồng nhiều tầng',
        era: '1940s → Nay',
        category: 'modern',
        formula: 'Thu nhập = Hoa hồng cá nhân + Σ(% × Thu nhập downline)',
        description: 'Bán hàng + tuyển người bán → thu hoa hồng từ doanh số của cả mạng lưới.',
        tags: ['MLM', 'Mạng lưới', 'Đội nhóm'],
        incomeLevel: 'Biến động lớn',
        scalability: 4,
        detail: {
            overview: `Network marketing (MLM) là mô hình gây TRANH CÃI nhất. Hợp pháp: Amway ($8.9 tỷ/năm), Herbalife. Bất hợp pháp: pyramid scheme. Ranh giới: nếu thu nhập chủ yếu từ BÁN SẢN PHẨM → hợp pháp. Nếu chủ yếu từ TUYỂN NGƯỜI → lừa đảo.`,
            howItWorks: [
                'Mua sản phẩm từ công ty MLM',
                'Bán cho khách hàng → hoa hồng trực tiếp',
                'Tuyển người bán mới (downline)',
                'Thu % hoa hồng từ doanh số downline',
                'Downline tuyển thêm → nhiều tầng hoa hồng'
            ],
            formula: {
                text: 'Thu nhập = Bán lẻ + Σ(Level_i × HH%_i × DT_i)',
                explain: 'Level 1: bạn bán. Level 2: người bạn tuyển. Level 3+: người họ tuyển. Hoa hồng giảm dần theo tầng.'
            },
            examples: [
                { title: '🧴 Amway', desc: 'Thành lập 1959. DT $8.9 tỷ/năm. 3 triệu+ distributor. Top earners kiếm $1-5 triệu/năm. Nhưng 99% người tham gia không lãi.' },
                { title: '⚠️ Cảnh báo Pyramid Scheme (VN)', desc: 'Nhiều công ty MLM tại VN bị xử phạt: thiếu sản phẩm thực, tập trung tuyển người, phí gia nhập cao. Phân biệt: sản phẩm có giá trị thực?' }
            ],
            pros: ['Vốn đầu tư thấp', 'Leverage đội nhóm', 'Passive income nếu xây được team'],
            cons: ['99% người không kiếm được tiền', 'Dễ bị lạm dụng thành pyramid', 'Áp lực bán hàng, tuyển người', 'Mất quan hệ xã hội'],
            modernVersion: 'Affiliate marketing, referral programs — cùng nguyên lý nhưng online, minh bạch hơn.'
        }
    }
];
