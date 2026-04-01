// ==================== TIMELINE DATA ====================

const timelineData = [
    {
        era: '~200,000 TCN',
        title: 'Săn Bắt - Hái Lượm',
        desc: 'Phương thức sinh tồn đầu tiên. Con người sống theo bầy đàn, chia sẻ thức ăn.',
        models: ['Sức lao động', 'Cộng đồng'],
        dotColor: '#8B7355'
    },
    {
        era: '~10,000 TCN',
        title: 'Cách Mạng Nông Nghiệp',
        desc: 'Chuyển từ du mục sang định cư. Lần đầu tiên tạo ra thặng dư. Đất = tài sản đầu tiên.',
        models: ['Nông nghiệp', 'Chăn nuôi', 'Tích lũy'],
        dotColor: '#8B7355'
    },
    {
        era: '~6,000 TCN',
        title: 'Trao Đổi Hàng Hóa (Barter)',
        desc: 'Thặng dư → trao đổi. Muối, gia súc, vỏ sò trở thành "proto-money".',
        models: ['Thương mại', 'Chênh lệch giá'],
        dotColor: '#8B7355'
    },
    {
        era: '~4,000 TCN',
        title: 'Chuyên Môn Hóa & Thủ Công',
        desc: 'Thợ rèn, thợ gốm, thợ dệt xuất hiện. Kỹ năng hiếm = thu nhập cao.',
        models: ['Kỹ năng', 'Sản phẩm thủ công'],
        dotColor: '#CD853F'
    },
    {
        era: '~3,000 TCN',
        title: 'Nhà Nước & Thuế',
        desc: 'Vua chúa thu thuế. Mô hình "scalable" đầu tiên: 1 người thu từ triệu người.',
        models: ['Thuế', 'Quyền lực', 'Cưỡng chế'],
        dotColor: '#CD853F'
    },
    {
        era: '~2,000 TCN',
        title: 'Thương Nhân & Con Đường Tơ Lụa',
        desc: 'Mua rẻ nơi này, bán đắt nơi kia. Thông tin = quyền lực. Thương nhân giàu ngang vua chúa.',
        models: ['Buôn bán', 'Vận chuyển', 'Arbitrage'],
        dotColor: '#CD853F'
    },
    {
        era: '~1,800 TCN',
        title: 'Cho Vay & Lãi Suất',
        desc: 'Code of Hammurabi quy định lãi suất. "Tiền đẻ ra tiền" — phát minh vĩ đại.',
        models: ['Cho vay', 'Lãi kép', 'Ngân hàng'],
        dotColor: '#CD853F'
    },
    {
        era: '~1,000',
        title: 'Phường Hội (Guild) & Độc Quyền',
        desc: 'Nhóm thợ cùng nghề liên minh. Kiểm soát cung → giữ giá cao.',
        models: ['Độc quyền', 'Cartel', 'Rào cản'],
        dotColor: '#A0522D'
    },
    {
        era: '1602',
        title: 'Cổ Phiếu & Công Ty Cổ Phần',
        desc: 'VOC (Hà Lan) — công ty cổ phần đầu tiên. Ai cũng có thể sở hữu phần doanh nghiệp.',
        models: ['Cổ phiếu', 'Đầu tư', 'Vốn góp'],
        dotColor: '#708090'
    },
    {
        era: '1688',
        title: 'Bảo Hiểm Hiện Đại',
        desc: 'Lloyd\'s of London. Kiếm tiền từ xác suất: thu phí nhiều người, trả cho ít người.',
        models: ['Bảo hiểm', 'Xác suất', 'Float'],
        dotColor: '#708090'
    },
    {
        era: '1760-1840',
        title: 'Cách Mạng Công Nghiệp',
        desc: 'Máy hơi nước → nhà máy → sản xuất hàng loạt. Economies of scale đổi thay tất cả.',
        models: ['Sản xuất', 'Quy mô', 'Lao động làm thuê'],
        dotColor: '#708090'
    },
    {
        era: '1950s',
        title: 'Nhượng Quyền (Franchise)',
        desc: 'Ray Kroc + McDonald\'s. Copy mô hình thành công → 40,000 cửa hàng toàn cầu.',
        models: ['Franchise', 'Nhân bản', 'Hệ thống'],
        dotColor: '#4682B4'
    },
    {
        era: '1990s',
        title: 'Internet & E-Commerce',
        desc: 'Amazon, eBay. Thương mại điện tử phá bỏ rào cản địa lý. "Cửa hàng" 24/7 toàn cầu.',
        models: ['E-commerce', 'Digital', 'Platform'],
        dotColor: '#4682B4'
    },
    {
        era: '2000s',
        title: 'Platform Economy & SaaS',
        desc: 'Facebook, Airbnb, Uber. Kết nối người mua-bán, thu phí. SaaS: phần mềm thuê bao.',
        models: ['Platform', 'SaaS', 'Subscription', 'Network effect'],
        dotColor: '#9370DB'
    },
    {
        era: '2009',
        title: 'Bitcoin & Crypto',
        desc: 'Satoshi Nakamoto tạo Bitcoin. Tiền phi tập trung. DeFi, NFTs, Web3 theo sau.',
        models: ['Mining', 'Staking', 'DeFi', 'Trading'],
        dotColor: '#9370DB'
    },
    {
        era: '2010s',
        title: 'Creator Economy',
        desc: 'YouTube, Instagram, TikTok. Ai cũng có thể tạo content → kiếm tiền từ audience.',
        models: ['Content', 'Ads', 'Sponsorship', 'Merch'],
        dotColor: '#9370DB'
    },
    {
        era: '2022+',
        title: 'AI & Automation Economy',
        desc: 'ChatGPT, Midjourney, AI Agents. 1 người + AI = 10 người. Leverage mới nhất.',
        models: ['AI Tools', 'Automation', 'AI Products', 'Agent'],
        dotColor: '#DC143C'
    }
];

function renderTimeline() {
    const body = document.getElementById('timelineBody');
    let html = `<h2>🕰️ Dòng Thời Gian Kiếm Tiền</h2>
    <p style="color:rgba(255,255,255,0.6); margin-bottom:2rem">Từ săn bắt hái lượm đến AI — hành trình 200,000 năm của con người kiếm tiền</p>
    <div class="timeline-container">`;

    timelineData.forEach(item => {
        html += `
        <div class="timeline-item" style="--dot-color: ${item.dotColor}">
            <div class="timeline-era">${item.era}</div>
            <div class="timeline-title">${item.title}</div>
            <div class="timeline-desc">${item.desc}</div>
            <div class="timeline-models">
                ${item.models.map(m => `<span class="timeline-model-tag">${m}</span>`).join('')}
            </div>
        </div>`;
    });

    html += '</div>';
    body.innerHTML = html;
}
