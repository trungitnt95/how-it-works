// ==================== KỸ THUẬT SỐ - DIGITAL EARNING MODELS ====================

const digitalModels = [
    {
        id: 'platform-marketplace',
        icon: '🌐',
        title: 'Nền Tảng & Marketplace',
        subtitle: 'Kết nối người mua - người bán, thu phí giao dịch',
        era: '2000s → Nay',
        category: 'digital',
        formula: 'Thu nhập = Số giao dịch × Phí/giao dịch',
        description: 'Tạo nơi người mua gặp người bán → thu phí trên mỗi giao dịch. Mô hình mạnh nhất thời đại số.',
        tags: ['Platform', 'Marketplace', 'Network effect'],
        incomeLevel: 'Cực cao',
        scalability: 5,
        detail: {
            overview: `5 công ty giá trị nhất thế giới đều là PLATFORM: Apple, Microsoft, Google, Amazon, Meta. Nguyên lý: Không sở hữu hàng hóa, không sản xuất — chỉ KẾT NỐI và THU PHÍ. Network effect: càng nhiều người dùng → càng giá trị → càng nhiều người dùng.`,
            howItWorks: [
                'Xây dựng platform kết nối 2+ nhóm người',
                'Thu hút nhóm đầu tiên (thường miễn phí)',
                'Network effect: càng nhiều người → càng hấp dẫn',
                'Monetize: phí giao dịch, quảng cáo, subscription',
                'Winner-takes-all: 1-2 platform thống trị mỗi ngành'
            ],
            formula: {
                text: 'Giá trị = N² (Metcalfe\'s Law)  |  N = số user',
                explain: 'Giá trị platform tỷ lệ bình phương số user. 10x user = 100x giá trị. Đây là lý do "grow first, profit later".'
            },
            examples: [
                { title: '🛒 Amazon Marketplace', desc: 'Thu phí 8-15% mỗi giao dịch. 60%+ đơn hàng từ seller bên thứ 3. Marketplace revenue $140+ tỷ/năm. Jeff Bezos: "Your margin is my opportunity."' },
                { title: '🏠 Airbnb', desc: 'Không sở hữu 1 căn nhà nào. Thu phí 3% từ host + 14% từ guest. 7+ triệu listings. Giá trị $80+ tỷ USD.' }
            ],
            pros: ['Network effect cực mạnh', 'Chi phí biên gần = 0', 'Winner-takes-all', 'Scalable toàn cầu'],
            cons: ['Cần vốn lớn giai đoạn đầu', 'Cold start problem (con gà - quả trứng)', 'Rủi ro quy định', 'Cạnh tranh khốc liệt'],
            modernVersion: 'Super Apps (Grab, Gojek), DeFi protocols (Uniswap), DAO — platform phi tập trung.'
        }
    },
    {
        id: 'saas-subscription',
        icon: '💎',
        title: 'SaaS & Subscription',
        subtitle: 'Phần mềm dạng dịch vụ, thu phí định kỳ',
        era: '2000s → Nay',
        category: 'digital',
        formula: 'ARR = Số khách × Phí/tháng × 12 - Churn',
        description: 'Tạo phần mềm/dịch vụ → thu phí hàng tháng. Recurring revenue = giấc mơ của mọi doanh nhân.',
        tags: ['SaaS', 'Subscription', 'Recurring'],
        incomeLevel: 'Cao - Cực cao',
        scalability: 5,
        detail: {
            overview: `SaaS (Software as a Service) là mô hình kiếm tiền "hoàn hảo" nhất hiện nay: chi phí biên ~0, recurring revenue, scalable toàn cầu. Adobe chuyển từ bán phần mềm ($2,500/license) sang subscription ($55/tháng) → doanh thu tăng 3x, giá cổ phiếu tăng 10x.`,
            howItWorks: [
                'Xây dựng phần mềm/dịch vụ giải quyết vấn đề',
                'Thu phí hàng tháng/năm (subscription)',
                'Upsell: gói cao hơn, tính năng premium',
                'Giữ chân khách (reduce churn) = tối quan trọng',
                'Chi phí phục vụ thêm 1 khách ≈ 0'
            ],
            formula: {
                text: 'LTV = ARPU × Gross Margin / Churn Rate',
                explain: 'LTV/CAC > 3 = SaaS lành mạnh. ARPU = avg revenue/user, CAC = chi phí có 1 khách.'
            },
            examples: [
                { title: '☁️ Salesforce', desc: 'Tiên phong SaaS (1999). $30+ tỷ ARR. 150,000+ khách hàng. Marc Benioff: "No software" — thuê thay vì mua.' },
                { title: '🎨 Canva', desc: 'Freemium → Pro ($13/tháng) → Enterprise. 170+ triệu user, valuation $26 tỷ. Tạo bởi Melanie Perkins (Úc).' }
            ],
            pros: ['Recurring revenue dự đoán được', 'Gross margin 70-90%', 'Scalable toàn cầu', 'Sticky (khó switch)'],
            cons: ['Cạnh tranh cao', 'Cần liên tục phát triển sản phẩm', 'Churn = kẻ thù #1', 'Long sales cycle (Enterprise)'],
            modernVersion: 'Usage-based pricing (AWS), AI-as-a-Service, vertical SaaS (chuyên ngành).'
        }
    },
    {
        id: 'creator-economy',
        icon: '🎬',
        title: 'Creator Economy',
        subtitle: 'Biến attention thành tiền',
        era: '2010s → Nay',
        category: 'digital',
        formula: 'Thu nhập = Audience × Engagement × Monetization Rate',
        description: 'Tạo nội dung → thu hút audience → kiếm tiền từ quảng cáo, tài trợ, bán hàng.',
        tags: ['Content', 'YouTube', 'Influencer'],
        incomeLevel: 'Biến động - Cực cao',
        scalability: 5,
        detail: {
            overview: `"1000 True Fans" — Kevin Kelly (2008): Bạn chỉ cần 1,000 fan sẵn sàng trả $100/năm = $100,000/năm. Creator Economy đã tạo ra triệu phú từ phòng ngủ. MrBeast (YouTube) kiếm $500+ triệu/năm.`,
            howItWorks: [
                'Chọn niche (lĩnh vực chuyên sâu)',
                'Tạo content thu hút (video, bài viết, podcast)',
                'Build audience (subscriber, follower)',
                'Monetize: ads, sponsorship, merch, course, membership',
                'Diversify: không phụ thuộc 1 nguồn thu'
            ],
            formula: {
                text: 'Thu nhập = Views × CPM/1000 + Sponsors + Products + Tips',
                explain: 'YouTube CPM: $3-30. Sponsor: $10-50 per 1000 views. Sản phẩm riêng: margin 50-90%.'
            },
            examples: [
                { title: '🎮 MrBeast (Jimmy Donaldson)', desc: '313+ triệu subscriber YouTube. Thu nhập $500+ triệu/năm từ: ads, Feastables (chocolate), Beast Burger, sponsor. Bắt đầu từ 13 tuổi.' },
                { title: '🇻🇳 Bà Tân Vlog', desc: 'Từ nông dân 60 tuổi → triệu subscriber YouTube. Thu nhập ước tính 100-300 triệu VND/tháng từ ads + brand deals.' }
            ],
            pros: ['Vốn thấp (smartphone + internet)', 'Scalable (content xem ∞ lần)', 'Tự do sáng tạo', 'Nhiều nguồn thu'],
            cons: ['Cạnh tranh khốc liệt', 'Phụ thuộc thuật toán platform', 'Burnout', '95% creator kiếm < $1,000/năm'],
            modernVersion: 'AI-generated content, faceless channels, UGC creator, personal brand as business.'
        }
    },
    {
        id: 'crypto-web3',
        icon: '₿',
        title: 'Crypto & Web3',
        subtitle: 'Kiếm tiền phi tập trung',
        era: '2009 → Nay',
        category: 'digital',
        formula: 'Thu nhập = Mining + Staking + Trading + DeFi yields',
        description: 'Blockchain tạo ra nhiều cách kiếm tiền mới: mining, staking, DeFi, NFTs, play-to-earn.',
        tags: ['Bitcoin', 'DeFi', 'NFT', 'Web3'],
        incomeLevel: 'Cực biến động',
        scalability: 4,
        detail: {
            overview: `Bitcoin (2009) tạo ra loại tài sản mới hoàn toàn. Từ "tiền internet vô giá trị" → $1 nghìn tỷ+ market cap. Ethereum cho phép smart contracts → DeFi, NFTs, DAOs. Nguyên lý: Kiếm tiền từ MẠNG LƯỚI PHI TẬP TRUNG.`,
            howItWorks: [
                'Mining: dùng máy tính xác thực giao dịch → nhận coin',
                'Staking: khóa coin → nhận lãi (3-20%/năm)',
                'Trading: mua bán crypto trên sàn → chênh lệch giá',
                'DeFi: cho vay, cung cấp thanh khoản → yields',
                'NFTs/GameFi: tạo/giao dịch tài sản số'
            ],
            formula: {
                text: 'ROI = (Giá bán - Giá mua) / Giá mua × 100%',
                explain: 'Bitcoin: $0.008 (2010) → $100,000+ (2024) = ROI 1,250,000,000%. Nhưng 95% altcoin → 0.'
            },
            examples: [
                { title: '₿ Bitcoin Pizza (2010)', desc: 'Laszlo Hanyecz mua 2 pizza = 10,000 BTC. Giá trị hiện tại: $1+ tỷ USD. Nếu HODL → crypto billionaire.' },
                { title: '🎭 Bored Ape Yacht Club', desc: 'NFT mint price: 0.08 ETH (~$190). Floor price cao nhất: 128 ETH (~$400,000). ROI: 210,000%. Nhưng sau đó giảm 90%+.' }
            ],
            pros: ['Cơ hội lợi nhuận cực lớn', 'Phi tập trung, không cần ngân hàng', 'Truy cập toàn cầu 24/7', 'Innovation nhanh'],
            cons: ['Biến động cực kỳ cao', 'Scam, rug pull phổ biến', 'Quy định chưa rõ ràng', '95% altcoin thất bại'],
            modernVersion: 'RWA tokenization (tài sản thực trên blockchain), AI + Crypto, Bitcoin ETF — mainstream adoption.'
        }
    },
    {
        id: 'ai-automation',
        icon: '🤖',
        title: 'AI & Tự Động Hóa',
        subtitle: 'Máy làm việc, người thu tiền',
        era: '2020s → Tương lai',
        category: 'digital',
        formula: 'Thu nhập = Giá trị tạo bởi AI × Số hệ thống - Chi phí vận hành',
        description: 'Dùng AI và automation để tạo giá trị mà không cần lao động con người — biên giới mới nhất.',
        tags: ['AI', 'Automation', 'ChatGPT', 'Agent'],
        incomeLevel: 'Tiềm năng cực cao',
        scalability: 5,
        detail: {
            overview: `ChatGPT (2022) đánh dấu kỷ nguyên mới: AI có thể viết, code, phân tích, sáng tạo. Những người biết LEVERAGE AI sẽ kiếm tiền gấp 10-100x. "AI won't replace you. A person using AI will."`,
            howItWorks: [
                'AI Tools: dùng ChatGPT, Midjourney, Cursor để tăng năng suất',
                'AI Products: tạo sản phẩm AI (chatbot, app, automation)',
                'AI Services: cung cấp dịch vụ dùng AI (marketing, content)',
                'AI Agents: hệ thống AI tự hoạt động → tạo giá trị',
                'Data & Training: bán dữ liệu, đào tạo AI'
            ],
            formula: {
                text: 'Leverage = Output_with_AI / Output_without_AI',
                explain: '1 người + AI = 10 người không AI. "Software ate the world. AI is eating software."'
            },
            examples: [
                { title: '🤖 AI Wrapper Businesses', desc: 'Jasper AI (viết content): ARR $80M+. Copy.ai, Tome.ai — xây UI trên GPT API → SaaS. Xây trong tuần, kiếm triệu $/năm.' },
                { title: '🎨 AI Content Creator', desc: '1 người dùng AI tạo 100 video/ngày (faceless YouTube channel). Thu nhập $10,000-50,000/tháng từ ads. Không cần quay, không cần edit.' }
            ],
            pros: ['Leverage cực đại', 'Chi phí biên gần = 0', 'Scale nhanh nhất lịch sử', '24/7 không mệt'],
            cons: ['Cạnh tranh nhanh (barrier thấp)', 'Phụ thuộc công nghệ bên thứ 3', 'Đạo đức & quy định', 'Biến đổi liên tục'],
            modernVersion: 'AGI economy, AI agents, autonomous businesses — tương lai nơi AI tự kinh doanh?'
        }
    }
];
