// Tour & Checklist - Triet hoc Mac-Lenin
const tourSteps = {
    beginner: [
        { title: 'Chào mừng!', description: 'Hãy cùng khám phá Triết học Mác-Lênin — môn học nền tảng cho mọi sinh viên VN!', target: null },
        { title: 'Vật Chất & Ý Thức', description: 'Vật chất có trước, ý thức có sau — nguyên lý nền tảng nhất của chủ nghĩa duy vật.', target: '[data-component="matter-consciousness"]' },
        { title: 'Hai Nguyên Lý', description: 'Mọi thứ đều liên hệ và phát triển — hai nguyên lý cơ bản của phép biện chứng.', target: '[data-component="dialectics-principles"]' },
        { title: 'Ba Quy Luật', description: 'Lượng-Chất, Mâu thuẫn, Phủ định — 3 quy luật giải thích cách thế giới thay đổi. Hay thi nhất!', target: '[data-component="three-laws"]' },
        { title: 'Tồn Tại Xã Hội', description: 'Điều kiện sống vật chất quyết định tư tưởng — ứng dụng vào xã hội loài người.', target: '[data-component="social-being-consciousness"]' },
        { title: 'Hàng Hóa & Giá Trị', description: 'Hàng hóa có 2 thuộc tính: giá trị sử dụng và giá trị — nền tảng kinh tế Marxist.', target: '[data-component="commodity-value"]' },
        { title: 'Giai Cấp Công Nhân', description: 'Lực lượng tiên tiến nhất, có sứ mệnh lịch sử xây dựng CNXH.', target: '[data-component="working-class"]' },
        { title: 'Thời Kỳ Quá Độ VN', description: 'VN đang trong giai đoạn quá độ lên CNXH — đây là bối cảnh thực tiễn của toàn bộ môn học!', target: '[data-component="transition-period-vn"]' }
    ],
    intermediate: [
        { title: 'Học Sâu Hơn', description: 'Đến lượt các khái niệm trung cấp — nền tảng cho các môn học chuyên ngành.', target: null },
        { title: 'Các Cặp Phạm Trù', description: '6 cặp phạm trù biện chứng: bản chất-hiện tượng, nguyên nhân-kết quả...', target: '[data-component="category-pairs"]' },
        { title: 'Lý Luận Nhận Thức', description: 'Thực tiễn là tiêu chuẩn của chân lý — triết học gặp khoa học.', target: '[data-component="epistemology"]' },
        { title: 'LLSX & QHSX', description: 'Lực lượng sản xuất phải phù hợp với quan hệ sản xuất — quy luật kinh tế cơ bản nhất.', target: '[data-component="productive-forces"]' },
        { title: 'CSHT & KTTT', description: 'Kinh tế quyết định chính trị và tư tưởng — rồi chúng lại tác động trở lại.', target: '[data-component="base-superstructure"]' },
        { title: 'Hình Thái KT-XH', description: '5 giai đoạn lịch sử — lịch sử loài người vận động có quy luật.', target: '[data-component="socioeconomic-formation"]' },
        { title: 'Tư Bản & GTTD', description: 'Bí mật lợi nhuận: giá trị thặng dư — khám phá vĩ đại nhất của Marx.', target: '[data-component="capital-surplus-value"]' },
        { title: 'Kinh Tế Thị Trường', description: 'VN kết hợp thị trường với định hướng XHCN — mô hình đặc thù.', target: '[data-component="socialist-market-economy"]' },
        { title: 'Vai Trò Đảng', description: 'Đảng CSVN — đội tiên phong lãnh đạo cách mạng và công cuộc đổi mới.', target: '[data-component="party-role"]' }
    ],
    advanced: [
        { title: 'Nâng Cao', description: 'Các chủ đề chuyên sâu, đòi hỏi tổng hợp kiến thức toàn bộ môn học.', target: null },
        { title: 'Đấu Tranh GC', description: 'Động lực phát triển xã hội trong xã hội có giai cấp đối kháng.', target: '[data-component="class-struggle"]' },
        { title: 'Tích Lũy Tư Bản', description: 'Quy luật chung: tư bản tập trung, phân cực giàu nghèo — ứng dụng hiện đại.', target: '[data-component="capital-accumulation"]' },
        { title: 'CNTB Độc Quyền', description: '5 đặc điểm của chủ nghĩa đế quốc. Từ Lenin đến toàn cầu hóa hiện nay.', target: '[data-component="monopoly-capitalism"]' },
        { title: 'Dân Tộc & Tôn Giáo', description: 'Cương lĩnh Marxist về dân tộc và tôn giáo — VN có 54 dân tộc, nhiều tín ngưỡng.', target: '[data-component="religion-nationality"]' },
        { title: 'Tư Tưởng HCM', description: 'Sự vận dụng sáng tạo CNML vào VN — tổng hợp kết thúc toàn môn học.', target: '[data-component="ho-chi-minh-thought"]' }
    ]
};

const quickTips = [
    { icon: '⚛️', text: 'Duy vật biện chứng = nền tảng triết học. Duy vật lịch sử = áp dụng vào xã hội.' },
    { icon: '📐', text: '3 quy luật biện chứng: Lượng-Chất | Mâu thuẫn | Phủ định của phủ định.' },
    { icon: '🏭', text: 'LLSX quyết định QHSX — khi mâu thuẫn → cách mạng xã hội thay hình thái KT-XH.' },
    { icon: '📦', text: 'Hàng hóa = Giá trị sử dụng + Giá trị (lao động XH cần thiết kết tinh).' },
    { icon: '📈', text: 'Tư bản: T–H–T\'. m = giá trị thặng dư = lao động không được trả công.' },
    { icon: '🇻🇳', text: 'VN: kinh tế thị trường + định hướng XHCN + Đảng lãnh đạo = TKQĐ lên CNXH.' }
];

const philosophyChecklist = [
    'Hiểu quan hệ Vật chất & Ý thức, ý nghĩa phương pháp luận',
    'Nắm 2 nguyên lý cơ bản của phép biện chứng duy vật',
    'Thuộc 3 quy luật biện chứng và ví dụ minh họa mỗi quy luật',
    'Phân biệt được 6 cặp phạm trù biện chứng',
    'Giải thích con đường biện chứng của nhận thức (lý luận nhận thức)',
    'Hiểu quan hệ tồn tại xã hội & ý thức xã hội',
    'Phân tích LLSX và QHSX, trình bày quy luật phù hợp',
    'Phân biệt CSHT và KTTT, quan hệ biện chứng giữa hai phạm trù',
    'Liệt kê 5 hình thái KT-XH và đặc trưng cơ bản mỗi hình thái',
    'Hiểu khái niệm giai cấp (Lenin) và vai trò đấu tranh giai cấp',
    'Phân tích 2 thuộc tính của hàng hóa',
    'Nêu được 5 chức năng của tiền tệ',
    'Giải thích nguồn gốc giá trị thặng dư (m) và 2 phương pháp SX GTTD',
    'Trình bày quy luật chung của tích lũy tư bản',
    'Nêu 5 đặc điểm kinh tế của CNTB độc quyền (theo Lenin)',
    'Phân tích sứ mệnh lịch sử của giai cấp công nhân',
    'Hiểu điều kiện khách quan & chủ quan của cách mạng XHCN',
    'Trình bày bản chất Nhà nước XHCN và nhà nước pháp quyền VN',
    'Nắm cương lĩnh dân tộc-tôn giáo của chủ nghĩa Mác-Lênin',
    'Hiểu đặc điểm thời kỳ quá độ lên CNXH ở VN',
    'Giải thích kinh tế thị trường định hướng XHCN',
    'Phân tích vai trò lãnh đạo của Đảng CSVN',
    'Trình bày nội dung cơ bản tư tưởng Hồ Chí Minh'
];
