// ==================== SCENARIOS DATA (50+ Scenarios) ====================

const scenarios = {
    // ==================== PERSONAL (7) ====================
    deposit: {
        title: 'Gửi tiền tiết kiệm',
        cat: 'personal',
        icon: '💰',
        desc: 'Tiền gửi ngân hàng được nhân lên như thế nào?',
        hasSimulation: true,
        getSteps: (c) => [
            { 
                node: 'individual', 
                text: `👤 Bạn có ${c.formatMoney(c.sampleAmount)} tiền nhàn rỗi`, 
                inputs: { 'Tiền gửi': c.sampleAmount },
                effect: { consumerConfidence: 2 }
            },
            { 
                node: 'commercial-bank', 
                text: `🏦 Gửi vào ${c.centralBank}, lãi ${c.depositRate}%/năm`, 
                inputs: { 'Lãi suất': `${c.depositRate}%` },
                outputs: { 'Lãi 1 năm': Math.round(c.sampleAmount * c.depositRate / 100) },
                effect: { bankReserves: c.sampleAmount, moneySupply: c.sampleAmount }
            },
            { 
                node: 'commercial-bank', 
                text: `🏦 NH giữ ${c.reserveRatio}% dự trữ, cho vay ${100-c.reserveRatio}%`, 
                inputs: { 'Tỷ lệ dự trữ': `${c.reserveRatio}%` },
                outputs: { 
                    'Dự trữ': Math.round(c.sampleAmount * c.reserveRatio/100), 
                    'Cho vay được': Math.round(c.sampleAmount * (100-c.reserveRatio)/100) 
                },
                effect: { creditGrowth: 0.5 }
            },
            { 
                node: 'business', 
                text: '🏭 Công ty vay tiền trả lương nhân viên',
                effect: { businessConfidence: 1, unemployment: -0.1 }
            },
            { 
                node: 'individual', 
                text: '👤 Nhân viên gửi lương vào NH khác',
                effect: { consumerConfidence: 1 }
            },
            { 
                node: 'commercial-bank', 
                text: `🏦 Quá trình lặp lại → Hệ số nhân = ${Math.round(100/c.reserveRatio)}x`, 
                outputs: { 'Tổng tiền tạo ra': c.sampleAmount * Math.round(100/c.reserveRatio) },
                effect: { moneySupply: c.sampleAmount * (100/c.reserveRatio - 1) }
            }
        ],
        successCondition: {
            requires: {
                npl: { max: 10, failMessage: 'Ngân hàng có quá nhiều nợ xấu, không thể cho vay!' }
            }
        }
    },
    loan: {
        title: 'Vay mua nhà',
        cat: 'personal',
        icon: '🏠',
        desc: 'Vay tiền mua nhà, tiền đi đâu?',
        hasSimulation: true,
        getSteps: (c) => {
            const price = c.sampleAmount * 30;
            const down = c.sampleAmount * 10;
            const loanAmount = c.sampleAmount * 20;
            const monthlyRate = c.loanRate / 100 / 12;
            const months = 240;
            const monthly = Math.round(loanAmount * monthlyRate * Math.pow(1+monthlyRate, months) / (Math.pow(1+monthlyRate, months)-1));
            const totalPaid = monthly * months;
            
            return [
                { 
                    node: 'individual', 
                    text: `👤 Muốn mua nhà ${c.formatMoney(price)}, có sẵn ${c.formatMoney(down)}`, 
                    inputs: { 'Giá nhà': price, 'Tiền có': down },
                    outputs: { 'Cần vay': loanAmount }
                },
                { 
                    node: 'commercial-bank', 
                    text: `🏦 Vay ${c.formatMoney(loanAmount)}, lãi ${c.loanRate}%/năm, 20 năm`, 
                    inputs: { 'Số vay': loanAmount, 'Lãi suất': `${c.loanRate}%`, 'Kỳ hạn': '20 năm' },
                    effect: { creditGrowth: 1, realEstateIndex: 2, moneySupply: loanAmount },
                    condition: {
                        requires: {
                            interestRate: { max: 15, failMessage: 'Lãi suất quá cao, không đủ khả năng chi trả!' }
                        }
                    }
                },
                { 
                    node: 'individual', 
                    text: `👤 Trả góp hàng tháng ${c.formatMoney(monthly)}`, 
                    outputs: { 'Trả hàng tháng': monthly },
                    effect: { consumerConfidence: -2 }
                },
                { 
                    node: 'real-estate', 
                    text: '🏠 Tiền đến tay người bán nhà',
                    effect: { realEstateIndex: 1 }
                },
                { 
                    node: 'business', 
                    text: '🏭 Người bán trả cho nhà thầu, vật liệu',
                    effect: { gdp: price * 0.3, unemployment: -0.2 }
                },
                { 
                    node: 'individual', 
                    text: `👤 Sau 20 năm trả tổng ${c.formatMoney(totalPaid)}`, 
                    outputs: { 'Tổng trả': totalPaid, 'Tiền lãi': totalPaid - loanAmount }
                }
            ];
        }
    },
    salary: {
        title: 'Nhận lương hàng tháng',
        cat: 'personal',
        icon: '💼',
        desc: 'Dòng chảy tiền lương của bạn.',
        getSteps: (c) => {
            const salary = c.sampleAmount / 5;
            const tax = salary * 0.1;
            const spend = salary * 0.7;
            const save = salary * 0.2;
            
            return [
                { 
                    node: 'business', 
                    text: '🏭 Công ty bán hàng, thu tiền khách',
                    effect: { gdp: salary * 2 }
                },
                { 
                    node: 'business', 
                    text: `🏭 Cuối tháng chuyển lương ${c.formatMoney(salary)}`,
                    inputs: { 'Doanh thu': salary * 2 },
                    outputs: { 'Lương': salary },
                    effect: { unemployment: -0.05 }
                },
                { 
                    node: 'individual', 
                    text: `👤 Chi tiêu: nhà, ăn, đi lại (~${c.formatMoney(spend)})`,
                    outputs: { 'Chi tiêu': spend },
                    effect: { consumerConfidence: 1, gdp: spend }
                },
                { 
                    node: 'commercial-bank', 
                    text: `🏦 Gửi tiết kiệm ${c.formatMoney(save)}`,
                    outputs: { 'Tiết kiệm': save },
                    effect: { bankReserves: save }
                },
                { 
                    node: 'government', 
                    text: `🏢 Thuế TNCN đã khấu trừ ${c.formatMoney(tax)}`,
                    outputs: { 'Thuế': tax }
                }
            ];
        }
    },
    'credit-card': {
        title: 'Sử dụng thẻ tín dụng',
        cat: 'personal',
        icon: '💳',
        desc: 'Quẹt thẻ, chuyện gì xảy ra?',
        getSteps: (c) => {
            const purchase = c.sampleAmount / 4;
            const fee = purchase * 0.025;
            const interest = purchase * 0.25;
            
            return [
                { 
                    node: 'individual', 
                    text: `👤 Quẹt thẻ mua hàng ${c.formatMoney(purchase)}`,
                    inputs: { 'Mua hàng': purchase },
                    effect: { consumerConfidence: 2, gdp: purchase }
                },
                { 
                    node: 'consumer-finance', 
                    text: `💳 Ngân hàng trả tiền cho cửa hàng (phí ${fee.toFixed(0)})`,
                    outputs: { 'Phí': fee },
                    effect: { creditGrowth: 0.2 }
                },
                { 
                    node: 'business', 
                    text: `🏭 Cửa hàng nhận ${c.formatMoney(purchase - fee)}`,
                    outputs: { 'Nhận thực': purchase - fee }
                },
                { 
                    node: 'individual', 
                    text: '👤 Sau 45 ngày: Trả đủ = Miễn lãi',
                    effect: { consumerConfidence: 1 }
                },
                { 
                    node: 'consumer-finance', 
                    text: `💳 Trả tối thiểu 5% → Lãi 25%/năm = ${c.formatMoney(interest)}/năm!`,
                    outputs: { 'Lãi nếu trễ': interest },
                    effect: { npl: 0.1 },
                    condition: {
                        random: { successRate: 80, failMessage: 'Không trả được nợ, thành nợ xấu!' }
                    }
                },
                { 
                    node: 'individual', 
                    text: '⚠️ Nếu không trả → Nợ xấu, ảnh hưởng điểm tín dụng',
                    effect: { consumerConfidence: -3 }
                }
            ];
        }
    },
    'insurance-claim': {
        title: 'Bảo hiểm chi trả',
        cat: 'personal',
        icon: '🏥',
        desc: 'Tai nạn, bảo hiểm bồi thường.',
        getSteps: (c) => [
            { node: 'individual', text: `👤 Mua bảo hiểm ${c.formatMoney(c.sampleAmount/20)}/năm` },
            { node: 'insurance', text: '🛡️ Công ty BH thu phí từ nhiều người' },
            { node: 'investment-fund', text: '💼 Đầu tư phí sinh lời' },
            { node: 'individual', text: `😢 Bị tai nạn, thiệt hại ${c.formatMoney(c.sampleAmount/2)}` },
            { node: 'insurance', text: '🛡️ BH bồi thường 80%' },
            { node: 'individual', text: '👤 Tiết kiệm được phần lớn chi phí' }
        ]
    },
    retirement: {
        title: 'Tiết kiệm hưu trí',
        cat: 'personal',
        icon: '👴',
        desc: 'Đóng bảo hiểm xã hội, nhận lương hưu.',
        getSteps: (c) => [
            { node: 'individual', text: '👤 Đóng BHXH 8% lương hàng tháng' },
            { node: 'pension-fund', text: '👴 Quỹ nhận tiền từ hàng triệu người' },
            { node: 'bond-market', text: '📜 Đầu tư vào trái phiếu CP an toàn' },
            { node: 'pension-fund', text: '👴 Sau 30 năm đóng đủ điều kiện' },
            { node: 'individual', text: '👤 Về hưu nhận ~75% lương' },
            { node: 'individual', text: '👤 Nhận đến khi qua đời' }
        ]
    },
    remittance: {
        title: 'Kiều hối về nước',
        cat: 'personal',
        icon: '💸',
        desc: 'Người thân ở nước ngoài gửi tiền về.',
        getSteps: (c) => [
            { node: 'foreign', text: '🌍 Người thân ở nước ngoài làm việc' },
            { node: 'fintech', text: '📱 Gửi tiền qua Remitly/Western Union' },
            { node: 'forex', text: '💱 Đổi ngoại tệ sang nội tệ' },
            { node: 'commercial-bank', text: '🏦 Tiền vào tài khoản gia đình' },
            { node: 'individual', text: '👤 Gia đình chi tiêu, đầu tư' },
            { node: 'central-bank', text: `🏛️ ${c.name} nhận hàng tỷ USD kiều hối/năm` }
        ]
    },

    // ==================== BUSINESS (6) ====================
    'business-loan': {
        title: 'Doanh nghiệp vay vốn',
        cat: 'business',
        icon: '🏭',
        desc: 'Công ty vay vốn mở rộng.',
        hasSimulation: true,
        getSteps: (c) => [
            { node: 'business', text: `🏭 Công ty cần ${c.formatMoney(c.sampleAmount * 100)} mở rộng`, inputs: { need: c.sampleAmount * 100 } },
            { node: 'commercial-bank', text: `🏦 Vay với lãi ${c.loanRate-1}%/năm, thế chấp nhà xưởng`, inputs: { rate: c.loanRate-1 } },
            { node: 'business', text: '🏭 Xây nhà xưởng, mua thiết bị' },
            { node: 'individual', text: '👥 Thuê thêm nhân viên mới' },
            { node: 'business', text: '🏭 Doanh thu tăng đáng kể' },
            { node: 'commercial-bank', text: '🏦 Trả lãi hàng năm, 10 năm hết nợ' }
        ]
    },
    ipo: {
        title: 'Công ty lên sàn (IPO)',
        cat: 'business',
        icon: '🔔',
        desc: 'Phát hành cổ phiếu lần đầu.',
        getSteps: (c) => [
            { node: 'business', text: `🏭 Công ty muốn huy động ${c.formatMoney(c.sampleAmount * 500)}` },
            { node: 'credit-rating', text: '⭐ Thuê kiểm toán, định giá' },
            { node: 'stock-exchange', text: `📈 Nộp hồ sơ lên sàn ${c.stockExchange}` },
            { node: 'investment-fund', text: '💼 Quỹ đầu tư mua cổ phiếu' },
            { node: 'individual', text: '👤 NĐT cá nhân đấu giá mua' },
            { node: 'business', text: '🏭 Thu vốn, cổ phiếu giao dịch trên sàn' }
        ]
    },
    export: {
        title: 'Xuất khẩu hàng hóa',
        cat: 'business',
        icon: '🚢',
        desc: 'Bán hàng ra nước ngoài.',
        getSteps: (c) => [
            { node: 'business', text: `🏭 Công ty ${c.name} xuất khẩu hàng hóa` },
            { node: 'foreign', text: '🌍 Đối tác nước ngoài trả USD' },
            { node: 'forex', text: `💱 Đổi USD → ${c.currency}` },
            { node: 'commercial-bank', text: '🏦 Tiền vào tài khoản công ty' },
            { node: 'business', text: '🏭 Trả nhà cung cấp, nhân viên' },
            { node: 'central-bank', text: '🏛️ Dự trữ ngoại hối tăng' }
        ]
    },
    import: {
        title: 'Nhập khẩu máy móc',
        cat: 'business',
        icon: '📦',
        desc: 'Mua thiết bị từ nước ngoài.',
        getSteps: (c) => [
            { node: 'business', text: '🏭 Cần nhập máy móc từ nước ngoài' },
            { node: 'commercial-bank', text: '🏦 Mở L/C (thư tín dụng)' },
            { node: 'forex', text: `💱 Mua ngoại tệ bằng ${c.currency}` },
            { node: 'foreign', text: '🌍 Nhà sản xuất nước ngoài nhận tiền, gửi máy' },
            { node: 'government', text: '🏢 Đóng thuế nhập khẩu' },
            { node: 'business', text: '🏭 Nhận máy, nâng cao năng suất' }
        ]
    },
    'bond-issue': {
        title: 'Phát hành trái phiếu DN',
        cat: 'business',
        icon: '📜',
        desc: 'Doanh nghiệp phát hành trái phiếu.',
        getSteps: (c) => [
            { node: 'business', text: `🏭 Cần ${c.formatMoney(c.sampleAmount * 500)} cho dự án mới` },
            { node: 'credit-rating', text: '⭐ Được xếp hạng tín dụng' },
            { node: 'bond-market', text: '📜 Phát hành trái phiếu kỳ hạn 5 năm' },
            { node: 'investment-fund', text: '💼 Quỹ đầu tư mua 60%' },
            { node: 'individual', text: '👤 NĐT cá nhân mua 40%' },
            { node: 'business', text: '🏭 Mỗi năm trả lãi, năm 5 trả gốc' }
        ]
    },
    dividend: {
        title: 'Chia cổ tức',
        cat: 'business',
        icon: '💵',
        desc: 'Công ty chia lợi nhuận cho cổ đông.',
        getSteps: (c) => [
            { node: 'business', text: `🏭 Công ty lãi ${c.formatMoney(c.sampleAmount * 100)} trong năm` },
            { node: 'government', text: '🏢 Nộp thuế TNDN 20%' },
            { node: 'business', text: '🏭 Quyết định chia 50% cổ tức' },
            { node: 'stock-exchange', text: '📈 Thông báo ngày chốt quyền' },
            { node: 'individual', text: '👤 Cổ đông nhận cổ tức vào tài khoản' },
            { node: 'business', text: '🏭 Giữ lại 50% tái đầu tư' }
        ]
    },

    // ==================== INVESTMENT (6) ====================
    'stock-invest': {
        title: 'Đầu tư chứng khoán',
        cat: 'investment',
        icon: '📈',
        desc: 'Mua cổ phiếu trên sàn.',
        getSteps: (c) => [
            { node: 'individual', text: '👤 Mở tài khoản chứng khoán' },
            { node: 'commercial-bank', text: `🏦 Chuyển ${c.formatMoney(c.sampleAmount/10)} vào TKCK` },
            { node: 'stock-exchange', text: `📈 Đặt lệnh mua cổ phiếu trên ${c.stockExchange}` },
            { node: 'stock-exchange', text: '📈 Lệnh khớp, bạn sở hữu cổ phiếu' },
            { node: 'business', text: '🏭 Bạn là cổ đông của công ty' },
            { node: 'individual', text: '👤 Giá lên → Lãi, Giá xuống → Lỗ' }
        ]
    },
    'fund-invest': {
        title: 'Mua quỹ ETF',
        cat: 'investment',
        icon: '💼',
        desc: 'Đầu tư vào quỹ chỉ số.',
        getSteps: (c) => [
            { node: 'individual', text: `👤 Có ${c.formatMoney(c.sampleAmount/2)} muốn đầu tư an toàn` },
            { node: 'investment-fund', text: '💼 Mua chứng chỉ quỹ ETF' },
            { node: 'investment-fund', text: '💼 Quỹ dùng tiền mua nhiều cổ phiếu' },
            { node: 'stock-exchange', text: '📈 Tự động đa dạng hóa' },
            { node: 'individual', text: '👤 Chỉ số tăng → Bạn lãi' },
            { node: 'investment-fund', text: '💼 Phí quản lý thấp ~0.5%/năm' }
        ]
    },
    'real-estate-invest': {
        title: 'Đầu tư bất động sản',
        cat: 'investment',
        icon: '🏠',
        desc: 'Mua căn hộ cho thuê.',
        hasSimulation: true,
        getSteps: (c) => [
            { node: 'individual', text: `👤 Mua căn hộ ${c.formatMoney(c.sampleAmount * 30)}`, inputs: { price: c.sampleAmount * 30 } },
            { node: 'real-estate', text: '🏠 Nhận bàn giao căn hộ' },
            { node: 'individual', text: `👤 Cho thuê ${c.formatMoney(c.sampleAmount * 0.15)}/tháng`, inputs: { rent: c.sampleAmount * 0.15 } },
            { node: 'commercial-bank', text: '🏦 Trả góp hàng tháng (nếu vay)' },
            { node: 'individual', text: '👤 Thu nhập ròng từ cho thuê', outputs: { yearlyRent: c.sampleAmount * 0.15 * 12 } },
            { node: 'real-estate', text: '🏠 Sau nhiều năm: Trả hết nợ + Nhà tăng giá' }
        ]
    },
    'gold-invest': {
        title: 'Mua vàng tích trữ',
        cat: 'investment',
        icon: '🥇',
        desc: 'Mua vàng bảo vệ tài sản.',
        getSteps: (c) => [
            { node: 'individual', text: '👤 Lo lạm phát, muốn giữ giá trị' },
            { node: 'commodity', text: `🥇 Mua vàng giá ${c.formatMoney(c.sampleAmount * 3.5)}` },
            { node: 'individual', text: '👤 Cất trong két an toàn' },
            { node: 'central-bank', text: '🏛️ Tiền trong hệ thống giảm' },
            { node: 'commodity', text: '🥇 Vài năm sau vàng tăng 20%' },
            { node: 'individual', text: `👤 Bán được ${c.formatMoney(c.sampleAmount * 4.2)}, lãi 20%` }
        ]
    },
    'startup-funding': {
        title: 'Startup gọi vốn',
        cat: 'investment',
        icon: '🚀',
        desc: 'Startup Series A nhận vốn VC.',
        getSteps: (c) => [
            { node: 'startup', text: '🚀 Startup fintech cần vốn mở rộng' },
            { node: 'startup', text: '🚀 Pitch deck, demo sản phẩm' },
            { node: 'investment-fund', text: '💼 VC đánh giá, định giá công ty' },
            { node: 'startup', text: '🚀 Nhận vốn, bán 25% cổ phần' },
            { node: 'individual', text: '👥 Thuê nhiều nhân viên mới' },
            { node: 'startup', text: '🚀 Mở rộng thị trường, tăng trưởng' }
        ]
    },
    fdi: {
        title: 'Đầu tư trực tiếp nước ngoài',
        cat: 'investment',
        icon: '🌍',
        desc: 'Tập đoàn nước ngoài đầu tư.',
        getSteps: (c) => [
            { node: 'foreign', text: `🌍 Tập đoàn quyết định mở rộng tại ${c.name}` },
            { node: 'forex', text: `💱 Chuyển USD → ${c.currency}` },
            { node: 'business', text: '🏭 Xây nhà máy, mua thiết bị' },
            { node: 'individual', text: '👥 Tạo hàng nghìn việc làm mới' },
            { node: 'government', text: '🏢 Thu thuế, GDP tăng' },
            { node: 'foreign', text: '🌍 Xuất khẩu sản phẩm → Thu USD về' }
        ]
    },

    // ==================== CRISIS (7) ====================
    inflation: {
        title: 'Lạm phát tăng cao',
        cat: 'crisis',
        icon: '📈',
        desc: 'Giá cả tăng, tiền mất giá.',
        hasSimulation: true,
        getSteps: (c) => [
            { node: 'central-bank', text: `🏛️ ${c.centralBank} in thêm tiền kích thích kinh tế`, inputs: { printAmount: c.sampleAmount * 1000 } },
            { node: 'commercial-bank', text: '🏦 Cho vay dễ dàng hơn' },
            { node: 'individual', text: '👤 Nhiều tiền hơn, cầu tăng' },
            { node: 'business', text: `🏭 Giá hàng hóa tăng ${c.inflationRate * 2}%`, outputs: { priceIncrease: c.inflationRate * 2 } },
            { node: 'individual', text: `👤 ${c.formatMoney(c.sampleAmount)} mất ${c.inflationRate * 2}% sức mua`, outputs: { lostValue: c.sampleAmount * c.inflationRate * 2 / 100 } },
            { node: 'central-bank', text: '🏛️ Phải tăng lãi suất kiềm chế' }
        ]
    },
    'bank-run': {
        title: 'Rút tiền ồ ạt (Bank Run)',
        cat: 'crisis',
        icon: '🏃',
        desc: 'Tin đồn ngân hàng sập.',
        getSteps: (c) => [
            { 
                node: 'individual', 
                text: '😨 Tin đồn ngân hàng X sắp phá sản',
                effect: { consumerConfidence: -20, businessConfidence: -10 }
            },
            { 
                node: 'commercial-bank', 
                text: '🏦 Người dân đổ xô rút tiền',
                inputs: { 'Tỷ lệ rút': '80%' },
                effect: { bankReserves: -c.sampleAmount * 800 },
                condition: {
                    requires: {
                        consumerConfidence: { min: 20, failMessage: 'Hoảng loạn lan rộng, ngân hàng sụp đổ!' }
                    }
                }
            },
            { 
                node: 'commercial-bank', 
                text: `🏦 NH chỉ có ${c.reserveRatio}% dự trữ, không đủ!`,
                outputs: { 'Dự trữ': `${c.reserveRatio}%`, 'Cần': '80%' },
                effect: { npl: 10, stockIndex: -100 }
            },
            { 
                node: 'central-bank', 
                text: `🏛️ ${c.centralBank} phải bơm tiền cứu`,
                effect: { moneySupply: c.sampleAmount * 1000, interestRate: -1, bankReserves: c.sampleAmount * 500 }
            },
            { 
                node: 'government', 
                text: '🏢 Chính phủ can thiệp, bảo lãnh tiền gửi',
                effect: { consumerConfidence: 15, businessConfidence: 10 }
            },
            { 
                node: 'commercial-bank', 
                text: '🏦 Nếu không cứu kịp → Phá sản, lan sang NH khác',
                outputs: { 'Rủi ro': 'Khủng hoảng hệ thống' },
                condition: {
                    random: { successRate: 70, failMessage: 'Cứu trợ thất bại! Ngân hàng phá sản!' }
                }
            }
        ],
        isCrisis: true
    },
    'stock-crash': {
        title: 'Sập thị trường chứng khoán',
        cat: 'crisis',
        icon: '📉',
        desc: 'Thị trường giảm 30% trong 1 tháng.',
        getSteps: (c) => [
            { 
                node: 'foreign', 
                text: '🌍 Khủng hoảng tài chính toàn cầu',
                effect: { businessConfidence: -15, exchangeRate: -5 }
            },
            { 
                node: 'investment-fund', 
                text: '💼 Quỹ ngoại bán tháo rút vốn',
                inputs: { 'Vốn rút': c.formatMoney(c.sampleAmount * 500) },
                effect: { stockIndex: -150, exchangeRate: -3 }
            },
            { 
                node: 'stock-exchange', 
                text: `📉 ${c.stockExchange} giảm 10% trong 1 ngày`,
                outputs: { 'Giảm': '-10%' },
                effect: { stockIndex: -100, consumerConfidence: -10 }
            },
            { 
                node: 'individual', 
                text: '😱 NĐT hoảng loạn, bán cắt lỗ',
                effect: { consumerConfidence: -15, stockIndex: -100 }
            },
            { 
                node: 'stock-exchange', 
                text: '📉 Tiếp tục giảm, tổng -30%',
                outputs: { 'Tổng giảm': '-30%', 'Vốn hóa mất': c.formatMoney(c.sampleAmount * 10000) },
                effect: { stockIndex: -200 }
            },
            { 
                node: 'business', 
                text: '🏭 Vốn hóa bốc hơi hàng nghìn tỷ',
                effect: { businessConfidence: -20, unemployment: 2, gdp: -c.sampleAmount * 1000 }
            }
        ],
        isCrisis: true
    },
    'currency-crisis': {
        title: 'Khủng hoảng tỷ giá',
        cat: 'crisis',
        icon: '💱',
        desc: 'Đồng nội tệ mất giá 20%.',
        getSteps: (c) => [
            { 
                node: 'foreign', 
                text: '🌍 Dòng vốn ngoại rút ồ ạt',
                effect: { exchangeRate: -10, businessConfidence: -10 }
            },
            { 
                node: 'forex', 
                text: '💱 Cầu USD tăng vọt',
                effect: { exchangeRate: -5 }
            },
            { 
                node: 'central-bank', 
                text: `🏛️ ${c.centralBank} bán dự trữ ngoại hối`,
                inputs: { 'Dự trữ bán': '$10 tỷ' },
                effect: { exchangeRate: 3 },
                condition: {
                    requires: {
                        exchangeRate: { min: 70, failMessage: 'Dự trữ ngoại hối cạn kiệt!' }
                    }
                }
            },
            { 
                node: 'forex', 
                text: `💱 Dự trữ cạn, ${c.currency} mất giá 20%`,
                outputs: { 'Tỷ giá mới': '-20%' },
                effect: { exchangeRate: -15, inflation: 5 }
            },
            { 
                node: 'business', 
                text: '🏭 Nợ ngoại tệ tăng 20%, nhiều DN phá sản',
                effect: { npl: 8, unemployment: 3, businessConfidence: -20 }
            },
            { 
                node: 'individual', 
                text: '👤 Hàng nhập khẩu đắt hơn 20%',
                effect: { inflation: 3, consumerConfidence: -15 }
            }
        ],
        isCrisis: true
    },
    'housing-bubble': {
        title: 'Bong bóng bất động sản',
        cat: 'crisis',
        icon: '🏚️',
        desc: 'Giá nhà tăng rồi sụp đổ.',
        getSteps: (c) => [
            { 
                node: 'commercial-bank', 
                text: '🏦 Cho vay mua nhà dễ dàng',
                effect: { creditGrowth: 10, realEstateIndex: 10 }
            },
            { 
                node: 'real-estate', 
                text: '🏠 Giá nhà tăng 50% trong 2 năm',
                outputs: { 'Tăng giá': '+50%' },
                effect: { realEstateIndex: 50, consumerConfidence: 10 }
            },
            { 
                node: 'individual', 
                text: '👤 Mọi người vay mua đầu cơ',
                effect: { creditGrowth: 15, npl: 2 }
            },
            { 
                node: 'central-bank', 
                text: '🏛️ NHTW tăng lãi suất kiểm soát',
                effect: { interestRate: 3 }
            },
            { 
                node: 'real-estate', 
                text: '🏚️ Cầu giảm, giá sụp 30%',
                outputs: { 'Giảm giá': '-30%' },
                effect: { realEstateIndex: -40, consumerConfidence: -20 }
            },
            { 
                node: 'commercial-bank', 
                text: '🏦 Nợ xấu BĐS tăng vọt',
                effect: { npl: 12, stockIndex: -100, businessConfidence: -15 }
            }
        ],
        isCrisis: true
    },
    recession: {
        title: 'Suy thoái kinh tế',
        cat: 'crisis',
        icon: '📊',
        desc: 'GDP giảm, thất nghiệp tăng.',
        getSteps: (c) => [
            { 
                node: 'foreign', 
                text: '🌍 Cầu thế giới giảm',
                effect: { gdp: -c.sampleAmount * 500, exchangeRate: -5 }
            },
            { 
                node: 'business', 
                text: '🏭 Đơn hàng giảm, doanh thu sụt',
                outputs: { 'Doanh thu': '-30%' },
                effect: { gdp: -c.sampleAmount * 1000, businessConfidence: -20 }
            },
            { 
                node: 'business', 
                text: '🏭 Cắt giảm nhân sự',
                effect: { unemployment: 5 }
            },
            { 
                node: 'individual', 
                text: '😢 Thất nghiệp tăng, thu nhập giảm',
                outputs: { 'Thất nghiệp': '+5%' },
                effect: { consumerConfidence: -25, unemployment: 2 }
            },
            { 
                node: 'individual', 
                text: '👤 Chi tiêu giảm → DN khó khăn hơn',
                effect: { gdp: -c.sampleAmount * 500, businessConfidence: -10 }
            },
            { 
                node: 'government', 
                text: '🏢 Thu thuế giảm, phải tăng chi kích thích',
                effect: { moneySupply: c.sampleAmount * 2000, interestRate: -2 }
            }
        ],
        isCrisis: true
    },
    'debt-crisis': {
        title: 'Khủng hoảng nợ công',
        cat: 'crisis',
        icon: '💀',
        desc: 'Chính phủ không trả được nợ.',
        getSteps: (c) => [
            { node: 'government', text: '🏢 Nợ công > 100% GDP' },
            { node: 'credit-rating', text: '⭐ Bị hạ tín nhiệm xuống "Junk"' },
            { node: 'bond-market', text: '📜 Lãi suất trái phiếu tăng vọt' },
            { node: 'government', text: '🏢 Không thể vay thêm, không trả được nợ' },
            { node: 'foreign', text: '🌍 IMF/WB phải cứu trợ' },
            { node: 'individual', text: '😢 Thắt lưng buộc bụng, cắt giảm phúc lợi' }
        ]
    },

    // ==================== FRAUD (8 new) ====================
    'ponzi-scheme': {
        title: 'Lừa đảo đa cấp Ponzi',
        cat: 'fraud',
        icon: '🦹',
        desc: 'Trả lãi cho người cũ bằng tiền người mới.',
        getSteps: (c) => [
            { node: 'individual', text: '👤 Bạn được mời tham gia "đầu tư" lãi 30%/tháng' },
            { node: 'shadow-banking', text: '🌑 Nộp tiền cho "công ty đầu tư"' },
            { node: 'individual', text: '👤 Tháng đầu nhận lãi đúng hẹn → Tin tưởng' },
            { node: 'individual', text: '👥 Giới thiệu thêm bạn bè, gia đình' },
            { node: 'shadow-banking', text: '🦹 Công ty dùng tiền mới trả lãi người cũ' },
            { node: 'individual', text: '💀 Khi không còn người mới → Sập, mất sạch tiền' }
        ]
    },
    'money-laundering': {
        title: 'Rửa tiền',
        cat: 'fraud',
        icon: '🧼',
        desc: 'Biến tiền bẩn thành tiền sạch.',
        getSteps: (c) => [
            { node: 'shadow-banking', text: `🦹 Có ${c.formatMoney(c.sampleAmount * 100)} tiền phi pháp` },
            { node: 'business', text: '🏭 Mở công ty "bình phong" (nhà hàng, casino)' },
            { node: 'business', text: '🧼 Khai khống doanh thu, trộn tiền bẩn' },
            { node: 'commercial-bank', text: '🏦 Gửi tiền "doanh thu" vào ngân hàng' },
            { node: 'real-estate', text: '🏠 Mua BĐS, chuyển ra nước ngoài' },
            { node: 'individual', text: '✓ Tiền đã "sạch", hợp pháp hóa' }
        ]
    },
    'insider-trading': {
        title: 'Giao dịch nội gián',
        cat: 'fraud',
        icon: '🕵️',
        desc: 'Mua bán cổ phiếu với thông tin mật.',
        getSteps: (c) => [
            { node: 'business', text: '🏭 Công ty sắp công bố tin tốt (mua lại, lãi kỷ lục)' },
            { node: 'individual', text: '🕵️ Lãnh đạo biết trước, mua thêm cổ phiếu' },
            { node: 'stock-exchange', text: '📈 Tin công bố, giá tăng 30%' },
            { node: 'individual', text: '💰 Bán ra, lãi lớn bất hợp pháp' },
            { node: 'credit-rating', text: '⚖️ Cơ quan điều tra phát hiện' },
            { node: 'individual', text: '⛓️ Bị truy tố, phạt tù, phạt tiền' }
        ]
    },
    'bank-fraud': {
        title: 'Gian lận ngân hàng',
        cat: 'fraud',
        icon: '🏦',
        desc: 'Nhân viên NH rút ruột tiền gửi.',
        getSteps: (c) => [
            { node: 'commercial-bank', text: '🏦 Nhân viên NH có quyền truy cập hệ thống' },
            { node: 'commercial-bank', text: '🦹 Tạo hồ sơ vay giả, rút tiền' },
            { node: 'shadow-banking', text: '💸 Chuyển tiền qua nhiều tài khoản' },
            { node: 'real-estate', text: '🏠 Mua tài sản đứng tên người khác' },
            { node: 'commercial-bank', text: '😱 Khách hàng phát hiện tiền mất' },
            { node: 'government', text: '⚖️ Điều tra, truy tố, NH phải bồi thường' }
        ]
    },
    'crypto-scam': {
        title: 'Lừa đảo Crypto/Rug Pull',
        cat: 'fraud',
        icon: '₿',
        desc: 'Dự án crypto lừa đảo.',
        getSteps: (c) => [
            { node: 'crypto', text: '🚀 Dự án token mới hứa hẹn "1000x"' },
            { node: 'fintech', text: '📱 Marketing mạnh, người nổi tiếng quảng cáo' },
            { node: 'individual', text: '👥 Hàng nghìn người mua token' },
            { node: 'crypto', text: '💰 Giá tăng vọt do FOMO' },
            { node: 'crypto', text: '🦹 Team rút hết thanh khoản (Rug Pull)' },
            { node: 'individual', text: '💀 Token về 0, mất sạch tiền' }
        ]
    },
    'tax-evasion': {
        title: 'Trốn thuế',
        cat: 'fraud',
        icon: '🏴‍☠️',
        desc: 'Doanh nghiệp trốn thuế quy mô lớn.',
        getSteps: (c) => [
            { node: 'business', text: `🏭 Công ty có doanh thu ${c.formatMoney(c.sampleAmount * 1000)}` },
            { node: 'business', text: '🦹 Khai giảm doanh thu, tăng chi phí giả' },
            { node: 'foreign', text: '🏝️ Chuyển lợi nhuận sang thiên đường thuế' },
            { node: 'government', text: `🏢 Ngân sách mất hàng ${c.formatMoney(c.sampleAmount * 200)} thuế` },
            { node: 'government', text: '🔍 Cơ quan thuế kiểm tra phát hiện' },
            { node: 'business', text: '⚖️ Truy thu thuế, phạt, có thể truy tố hình sự' }
        ]
    },
    'invoice-fraud': {
        title: 'Hóa đơn khống',
        cat: 'fraud',
        icon: '📄',
        desc: 'Mua bán hóa đơn VAT giả.',
        getSteps: (c) => [
            { node: 'business', text: '🏭 Công ty A muốn khấu trừ VAT' },
            { node: 'shadow-banking', text: '🦹 Mua hóa đơn khống từ công ty ma' },
            { node: 'business', text: '📄 Khai báo chi phí giả, giảm thuế phải nộp' },
            { node: 'government', text: `🏢 Ngân sách mất thuế VAT ${c.formatMoney(c.sampleAmount * 10)}` },
            { node: 'government', text: '🔍 Thanh tra thuế phát hiện' },
            { node: 'business', text: '⛓️ Truy thu, phạt gấp 3-5 lần, truy tố' }
        ]
    },
    'loan-fraud': {
        title: 'Lừa đảo vay vốn',
        cat: 'fraud',
        icon: '💳',
        desc: 'Làm hồ sơ giả vay tiền ngân hàng.',
        getSteps: (c) => [
            { node: 'individual', text: '🦹 Làm giả giấy tờ thu nhập, tài sản' },
            { node: 'commercial-bank', text: `🏦 Vay được ${c.formatMoney(c.sampleAmount * 50)}` },
            { node: 'individual', text: '💸 Rút tiền, không có ý định trả' },
            { node: 'commercial-bank', text: '🏦 Đến hạn, không liên lạc được' },
            { node: 'commercial-bank', text: '😱 NH phát hiện hồ sơ giả mạo' },
            { node: 'government', text: '⛓️ Truy tố tội lừa đảo chiếm đoạt tài sản' }
        ]
    },

    // ==================== CURRENCY WAR (6 new) ====================
    'currency-manipulation': {
        title: 'Thao túng tỷ giá',
        cat: 'war',
        icon: '🎭',
        desc: 'Chính phủ cố tình hạ giá đồng tiền.',
        getSteps: (c) => [
            { node: 'central-bank', text: `🏛️ ${c.centralBank} muốn tăng xuất khẩu` },
            { node: 'central-bank', text: '💹 In tiền mua USD, giảm giá nội tệ' },
            { node: 'forex', text: `💱 ${c.currency} mất giá 10% so với USD` },
            { node: 'business', text: '🏭 Hàng xuất khẩu rẻ hơn, cạnh tranh hơn' },
            { node: 'foreign', text: '😠 Các nước khác cáo buộc thao túng' },
            { node: 'government', text: '🏢 Có thể bị áp thuế trả đũa' }
        ]
    },
    'currency-war': {
        title: 'Chiến tranh tiền tệ',
        cat: 'war',
        icon: '⚔️',
        desc: 'Các nước đua nhau phá giá.',
        getSteps: (c) => [
            { node: 'central-bank', text: '🏛️ Nước A phá giá để tăng xuất khẩu' },
            { node: 'foreign', text: '🌍 Nước B trả đũa, cũng phá giá' },
            { node: 'forex', text: '💱 Các nước C, D, E... cùng tham gia' },
            { node: 'commodity', text: '📈 Giá vàng tăng vọt (nơi trú ẩn)' },
            { node: 'individual', text: '👤 Người dân mất niềm tin vào tiền pháp định' },
            { node: 'foreign', text: '😰 Thương mại toàn cầu bất ổn' }
        ]
    },
    'sanctions': {
        title: 'Cấm vận kinh tế',
        cat: 'war',
        icon: '🚫',
        desc: 'Một nước bị cấm vận tài chính.',
        getSteps: (c) => [
            { node: 'government', text: '🏢 Nước A vi phạm luật quốc tế' },
            { node: 'foreign', text: '🌍 Mỹ & EU áp đặt cấm vận' },
            { node: 'commercial-bank', text: '🏦 Bị cắt khỏi SWIFT, không thể giao dịch quốc tế' },
            { node: 'forex', text: '💱 Đồng tiền sụp đổ, mất 50% giá trị' },
            { node: 'business', text: '🏭 Doanh nghiệp không thể XNK' },
            { node: 'individual', text: '😢 Người dân thiếu hàng hóa, lạm phát phi mã' }
        ]
    },
    'dedollarization': {
        title: 'Phi USD hóa',
        cat: 'war',
        icon: '🌐',
        desc: 'Các nước giảm phụ thuộc vào USD.',
        getSteps: (c) => [
            { node: 'foreign', text: '🌍 Trung Quốc, Nga, BRICS muốn thoát USD' },
            { node: 'central-bank', text: '🏛️ Thỏa thuận thanh toán bằng nội tệ' },
            { node: 'forex', text: '💱 Giảm mua trái phiếu Mỹ' },
            { node: 'commodity', text: '🛢️ Bán dầu bằng CNY, không USD' },
            { node: 'central-bank', text: '🏛️ Tích trữ vàng thay USD' },
            { node: 'forex', text: '📉 USD suy yếu dần trên toàn cầu' }
        ]
    },
    'competitive-devaluation': {
        title: 'Phá giá cạnh tranh',
        cat: 'war',
        icon: '📉',
        desc: 'Cố tình làm yếu đồng tiền.',
        hasSimulation: true,
        getSteps: (c) => [
            { node: 'government', text: '🏢 Kinh tế suy thoái, xuất khẩu giảm', inputs: { exportDecline: 20 } },
            { node: 'central-bank', text: '🏛️ Quyết định phá giá 15%', inputs: { devaluation: 15 } },
            { node: 'forex', text: `💱 ${c.currency} yếu hơn 15%` },
            { node: 'business', text: '🏭 Hàng XK rẻ hơn, cạnh tranh hơn', outputs: { exportGain: 20 } },
            { node: 'individual', text: '👤 Nhưng hàng nhập đắt hơn 15%' },
            { node: 'individual', text: '📈 Lạm phát tăng, đời sống khó khăn hơn' }
        ]
    },
    'capital-controls': {
        title: 'Kiểm soát vốn',
        cat: 'war',
        icon: '🚧',
        desc: 'Hạn chế dòng tiền ra nước ngoài.',
        getSteps: (c) => [
            { node: 'forex', text: '💱 Dòng vốn chảy ra ồ ạt, dự trữ cạn' },
            { node: 'central-bank', text: '🏛️ Áp đặt kiểm soát vốn' },
            { node: 'commercial-bank', text: '🏦 Giới hạn chuyển tiền ra nước ngoài' },
            { node: 'business', text: '🏭 DN khó khăn trong giao dịch quốc tế' },
            { node: 'individual', text: '👤 Không thể gửi con du học, mua nhà nước ngoài' },
            { node: 'foreign', text: '🌍 Nhà đầu tư nước ngoài mất niềm tin' }
        ]
    },

    // ==================== MODERN (6) ====================
    'crypto-invest': {
        title: 'Mua Bitcoin',
        cat: 'modern',
        icon: '₿',
        desc: 'Đầu tư vào crypto.',
        getSteps: (c) => [
            { node: 'individual', text: '👤 Đăng ký sàn Binance/Coinbase' },
            { node: 'fintech', text: `📱 Chuyển ${c.formatMoney(c.sampleAmount/2)} qua P2P` },
            { node: 'crypto', text: '₿ Mua Bitcoin' },
            { node: 'crypto', text: '₿ Lưu trong ví lạnh an toàn' },
            { node: 'crypto', text: '₿ 1 năm sau BTC có thể tăng hoặc giảm mạnh' },
            { node: 'individual', text: '⚠️ Rủi ro cao, biến động 50-100%' }
        ]
    },
    ewallet: {
        title: 'Thanh toán ví điện tử',
        cat: 'modern',
        icon: '📱',
        desc: 'Dùng ví điện tử hàng ngày.',
        getSteps: (c) => [
            { node: 'individual', text: `👤 Nạp ${c.formatMoney(c.sampleAmount/100)} vào ví điện tử` },
            { node: 'fintech', text: '📱 Ví nhận tiền, ghi số dư' },
            { node: 'individual', text: '👤 Quét QR mua hàng' },
            { node: 'fintech', text: '📱 Ví chuyển tiền cho người bán' },
            { node: 'business', text: '🏭 Người bán nhận tiền (trừ 1% phí)' },
            { node: 'fintech', text: '📱 Ví thu phí, đầu tư số dư sinh lời' }
        ]
    },
    'p2p-lending': {
        title: 'Vay P2P Online',
        cat: 'modern',
        icon: '🤝',
        desc: 'Vay tiền qua app, lãi suất cao.',
        getSteps: (c) => [
            { node: 'individual', text: `👤 Cần ${c.formatMoney(c.sampleAmount/10)} gấp, NH từ chối` },
            { node: 'shadow-banking', text: '🌑 Vay qua app P2P, lãi 3%/tháng' },
            { node: 'individual', text: '👤 Nhận tiền trong 30 phút' },
            { node: 'shadow-banking', text: '🌑 App kết nối với NĐT cho vay' },
            { node: 'individual', text: '👤 Phải trả lãi rất cao' },
            { node: 'individual', text: '⚠️ Lãi suất thực 36%/năm!' }
        ]
    },
    crowdfunding: {
        title: 'Gọi vốn cộng đồng',
        cat: 'modern',
        icon: '🎯',
        desc: 'Crowdfunding cho dự án mới.',
        getSteps: (c) => [
            { node: 'startup', text: '🚀 Startup có ý tưởng sản phẩm mới' },
            { node: 'fintech', text: '📱 Đăng dự án lên Kickstarter' },
            { node: 'individual', text: '👥 Hàng nghìn người đóng góp' },
            { node: 'startup', text: '🚀 Thu được vốn để sản xuất' },
            { node: 'business', text: '🏭 Sản xuất sản phẩm' },
            { node: 'individual', text: '👤 Người đóng góp nhận sản phẩm đầu tiên' }
        ]
    },
    defi: {
        title: 'DeFi - Tài chính phi tập trung',
        cat: 'modern',
        icon: '🔗',
        desc: 'Staking, Yield Farming.',
        getSteps: (c) => [
            { node: 'individual', text: '👤 Có crypto (ETH, BNB...)' },
            { node: 'crypto', text: '₿ Kết nối ví MetaMask với DeFi protocol' },
            { node: 'crypto', text: '₿ Gửi crypto làm tài sản thế chấp' },
            { node: 'crypto', text: '₿ Vay stablecoin hoặc farming' },
            { node: 'crypto', text: '₿ Nhận lãi suất cao 5-20% APY' },
            { node: 'individual', text: '⚠️ Rủi ro: Smart contract bị hack!' }
        ]
    },
    cbdc: {
        title: 'Tiền kỹ thuật số NHTW (CBDC)',
        cat: 'modern',
        icon: '🏛️',
        desc: 'Tương lai của tiền tệ.',
        getSteps: (c) => [
            { node: 'central-bank', text: `🏛️ ${c.centralBank} phát hành ${c.currency} số` },
            { node: 'commercial-bank', text: '🏦 Ngân hàng phân phối cho dân' },
            { node: 'individual', text: '👤 Nhận tiền số vào ví NHTW' },
            { node: 'fintech', text: '📱 Thanh toán trực tiếp, không qua trung gian' },
            { node: 'government', text: '🏢 Theo dõi được mọi giao dịch, chống rửa tiền' },
            { node: 'commercial-bank', text: '⚠️ NH thương mại có thể mất vai trò' }
        ]
    }
};
