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
            { node: 'gold', text: `🪙 Mua vàng giá ${c.formatMoney(c.sampleAmount * 3.5)}` },
            { node: 'individual', text: '👤 Cất trong két an toàn' },
            { node: 'central-bank', text: '🏛️ Tiền trong hệ thống giảm' },
            { node: 'gold', text: '🪙 Vài năm sau vàng tăng 20%' },
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
    },
    'supply-disruption': {
        title: 'Đứt gãy chuỗi cung ứng',
        cat: 'crisis',
        icon: '🚢',
        desc: 'Khi hàng hóa không chảy được, giá tăng dù cầu không đổi.',
        isCrisis: true,
        getSteps: (c) => [
            {
                node: 'foreign',
                text: '🌍 Đại dịch / xung đột khiến cảng lớn đóng cửa, container bị kẹt',
                effect: { businessConfidence: -10 }
            },
            {
                node: 'supply-chain',
                text: '🚢 Lead time tăng gấp 3, giá cước vận tải tăng 400%',
                inputs: { 'Cước container': '×4' },
                effect: { inflation: 2 }
            },
            {
                node: 'business',
                text: `🏭 Nguyên liệu thiếu, giá đầu vào tăng ${c.inflationRate * 3}%`,
                outputs: { 'Giá đầu vào': `+${c.inflationRate * 3}%` },
                effect: { businessConfidence: -8, unemployment: 0.5 }
            },
            {
                node: 'individual',
                text: '👤 Giá tiêu dùng tăng, đặc biệt thực phẩm và năng lượng',
                effect: { consumerConfidence: -12, inflation: 1.5 }
            },
            {
                node: 'central-bank',
                text: `🏛️ ${c.centralBank} gặp thế khó: tăng lãi suất chống lạm phát sẽ đè thêm sản xuất`,
                effect: { interestRate: 0.5 }
            },
            {
                node: 'government',
                text: '🏢 Chính phủ giảm thuế nhập khẩu, mở kho dự trữ chiến lược để giảm sốc giá',
                effect: { inflation: -0.5, consumerConfidence: 5 }
            }
        ]
    },
    'cb-fights-inflation': {
        title: 'NHTW chống lạm phát',
        cat: 'crisis',
        icon: '🏛️',
        desc: 'Lạm phát vượt mục tiêu, NHTW phải hành động quyết liệt.',
        hasSimulation: true,
        getSteps: (c) => {
            const targetRate = 2;
            const currentInflation = c.inflationRate * 2.5;
            return [
                {
                    node: 'central-bank',
                    text: `🏛️ Lạm phát ${currentInflation}% vượt xa mục tiêu ${targetRate}%, ${c.centralBank} họp khẩn`,
                    inputs: { 'Lạm phát': `${currentInflation}%`, 'Mục tiêu': `${targetRate}%` }
                },
                {
                    node: 'central-bank',
                    text: `🏛️ Tăng lãi suất chính sách thêm 1.5%, phát tín hiệu hawkish`,
                    effect: { interestRate: 1.5, moneySupply: -c.sampleAmount * 500 }
                },
                {
                    node: 'commercial-bank',
                    text: '🏦 Lãi vay tăng, tín dụng thắt lại, doanh nghiệp khó vay mới',
                    effect: { creditGrowth: -3 }
                },
                {
                    node: 'labor-market',
                    text: '👷 Doanh nghiệp ngừng tuyển, một số sa thải để cắt chi phí',
                    effect: { unemployment: 1.2, consumerConfidence: -8 }
                },
                {
                    node: 'individual',
                    text: '👤 Tiêu dùng giảm, cầu hạ nhiệt, áp lực giá dịu bớt',
                    effect: { inflation: -1.5, consumerConfidence: -5 }
                },
                {
                    node: 'central-bank',
                    text: `🏛️ Sau 12-18 tháng, lạm phát về gần mục tiêu nhưng kinh tế đã chậm lại`,
                    outputs: { 'Lạm phát mới': `~${targetRate + 1}%`, 'GDP': '-1.5%' },
                    effect: { inflation: -1, gdpGrowth: -1.5 }
                }
            ];
        }
    },
    'labor-shortage': {
        title: 'Thiếu hụt lao động',
        cat: 'crisis',
        icon: '👷',
        desc: 'Khi doanh nghiệp không tuyển được người, lương tăng và giá hàng cũng tăng.',
        getSteps: (c) => [
            {
                node: 'labor-market',
                text: '👷 Già hóa dân số + lao động trẻ chuyển ngành → cung lao động giảm',
                effect: { unemployment: -2 }
            },
            {
                node: 'business',
                text: '🏭 Doanh nghiệp tăng lương 15-20% để giữ người, chi phí sản xuất phình',
                inputs: { 'Tăng lương': '+18%' },
                effect: { businessConfidence: -5, inflation: 1 }
            },
            {
                node: 'supply-chain',
                text: '🚢 Thiếu tài xế, công nhân kho → giao hàng chậm, tồn kho tăng',
                effect: { businessConfidence: -3 }
            },
            {
                node: 'individual',
                text: '👤 Người có việc được tăng lương, nhưng giá hàng cũng tăng theo',
                effect: { consumerConfidence: 2, inflation: 0.8 }
            },
            {
                node: 'central-bank',
                text: `🏛️ ${c.centralBank} theo dõi Unit Labor Cost — nếu lương tăng nhanh hơn năng suất, lạm phát sẽ dai dẳng`,
                effect: { interestRate: 0.5 }
            },
            {
                node: 'government',
                text: '🏢 Chính phủ đẩy mạnh đào tạo nghề, nới visa lao động nước ngoài',
                effect: { unemployment: 0.5, businessConfidence: 3 }
            }
        ]
    },
    'currency-depreciation': {
        title: 'Mất giá nội tệ',
        cat: 'war',
        icon: '💱',
        desc: 'Đồng nội tệ mất giá mạnh, tác động lên giá nhập khẩu và chuỗi cung ứng.',
        getSteps: (c) => {
            const depreciationPct = 20;
            return [
                {
                    node: 'foreign',
                    text: `🌍 Dòng vốn ngoại rút khỏi ${c.country}, ${c.currency} mất giá ${depreciationPct}%`,
                    effect: { exchangeRate: -depreciationPct, consumerConfidence: -10 }
                },
                {
                    node: 'supply-chain',
                    text: `🚢 Giá nguyên liệu nhập khẩu tính bằng ${c.currency} tăng ${depreciationPct}%`,
                    effect: { inflation: depreciationPct * 0.3 }
                },
                {
                    node: 'business',
                    text: '🏭 DN nhập khẩu lỗ, DN xuất khẩu hưởng lợi tạm thời',
                    effect: { businessConfidence: -5 }
                },
                {
                    node: 'individual',
                    text: `👤 Hàng nhập tăng giá, sức mua ${c.currency} giảm rõ rệt`,
                    effect: { consumerConfidence: -8, inflation: 2 }
                },
                {
                    node: 'central-bank',
                    text: `🏛️ ${c.centralBank} bán ngoại tệ dự trữ để can thiệp tỷ giá`,
                    effect: { exchangeRate: depreciationPct * 0.3, interestRate: 2 }
                },
                {
                    node: 'labor-market',
                    text: '👷 Doanh nghiệp nhập khẩu cắt giảm lao động, ngành xuất khẩu tuyển thêm',
                    effect: { unemployment: 0.5 }
                }
            ];
        }
    },
    'gold-crisis-flight': {
        title: 'Dòng tiền vào vàng khi khủng hoảng',
        cat: 'crisis',
        icon: '🪙',
        desc: 'Khi bất ổn xảy ra, nhà đầu tư tháo chạy khỏi rủi ro và đổ vào vàng như tài sản trú ẩn.',
        getSteps: (c) => [
            { node: 'individual', text: '👤 Lo sợ khủng hoảng, bán cổ phiếu' },
            { node: 'stock-exchange', text: '📉 Thị trường chứng khoán lao dốc' },
            { node: 'gold', text: `🪙 Mua vàng ${c.formatMoney(c.sampleAmount * 5)} — cầu tăng đột biến` },
            { node: 'forex', text: '💱 USD mạnh lên ngắn hạn, sau đó yếu dần' },
            { node: 'gold', text: '🪙 Giá vàng tăng 15-30% trong vài tháng' },
            { node: 'central-bank', text: '🏛️ NHTW mua thêm vàng dự trữ' },
            { node: 'individual', text: '👤 Bán bớt vàng khi thị trường ổn định' }
        ]
    },
    'central-bank-gold-buy': {
        title: 'NHTW phát động phi đô-la hóa',
        cat: 'war',
        icon: '🏛️',
        desc: 'Ngân hàng trung ương lớn mua ròng vàng để giảm phụ thuộc vào USD trong dự trữ quốc gia.',
        getSteps: (c) => [
            { node: 'central-bank', text: '🏛️ Quyết định tăng vàng trong dự trữ, giảm USD' },
            { node: 'forex', text: '💱 Bán USD/trái phiếu Mỹ ra thị trường' },
            { node: 'gold', text: `🪙 Mua vàng vật chất ${c.formatMoney(c.sampleAmount * 20)} qua LBMA` },
            { node: 'foreign', text: '🌍 Nước khác theo dõi và có thể làm tương tự' },
            { node: 'gold', text: '🪙 Cầu vàng từ NHTW tăng → giá neo ở mức cao' },
            { node: 'central-bank', text: '🏛️ Dự trữ quốc tế được đa dạng hóa hơn' }
        ]
    },
    'gold-vs-inflation': {
        title: 'Vàng vs lạm phát bùng nổ',
        cat: 'investment',
        icon: '📈',
        desc: 'Khi lạm phát vượt lãi suất danh nghĩa, lãi suất thực âm — môi trường lý tưởng nhất cho vàng.',
        getSteps: (c) => [
            { node: 'central-bank', text: '🏛️ Lạm phát 8%, lãi suất chỉ 4% → lãi suất thực −4%' },
            { node: 'bond-market', text: '📊 TIPS yield âm, nhà đầu tư bỏ trái phiếu' },
            { node: 'individual', text: '👤 Chuyển tiền tiết kiệm vào tài sản phòng thủ' },
            { node: 'gold', text: `🪙 Mua vàng/ETF vàng ${c.formatMoney(c.sampleAmount * 4)}` },
            { node: 'gold', text: '🪙 ETF holdings tăng, giá tăng theo cầu tổ chức' },
            { node: 'individual', text: `👤 Sau 1 năm: vàng tăng ~25% — thực sự bảo toàn được giá trị` }
        ]
    }
};

const scenarioNarrativeByCategory = {
    personal: {
        preface: (scenario) => `${scenario.icon} Bối cảnh: ${scenario.desc} Hộ gia đình thường phải cân đối ngân sách, mức chịu đựng rủi ro và dòng tiền trước khi hành động.`,
        validation: (_scenario, nodeTitle) => `🧾 ${nodeTitle} kiểm tra hồ sơ, hạn mức, biểu phí và cách ghi nhận giao dịch trước khi tiền thực sự dịch chuyển.`,
        risk: (_scenario, nodeTitle) => `⚖️ ${nodeTitle} đánh giá rủi ro trả nợ, biến động thu nhập và các khoản chi phát sinh có thể làm dòng tiền bị đứt.`,
        feedback: (_scenario, nodeTitle) => `🔁 Sau giao dịch chính, ${nodeTitle} ghi nhận số dư mới và dòng tiền bắt đầu quay về hệ thống qua tiết kiệm, trả nợ hoặc tiêu dùng.`,
        closing: (scenario) => `📌 Kết thúc: ${scenario.title} không dừng ở một điểm chạm; tác động còn kéo dài lên ngân sách hộ gia đình, chi phí vốn và lựa chọn tài chính về sau.`
    },
    business: {
        preface: (scenario) => `${scenario.icon} Bối cảnh: ${scenario.desc} Doanh nghiệp thường phải chuẩn bị kế hoạch vốn, lịch thanh toán và năng lực vận hành trước khi triển khai.`,
        validation: (_scenario, nodeTitle) => `🧾 ${nodeTitle} rà soát hợp đồng, tài sản bảo đảm, dòng tiền dự án và các điều khoản giải ngân trước khi vốn chạy.`,
        risk: (_scenario, nodeTitle) => `⚖️ ${nodeTitle} theo dõi rủi ro đòn bẩy, chậm tiến độ và khả năng doanh thu không đạt kỳ vọng.`,
        feedback: (_scenario, nodeTitle) => `🔁 Khi giao dịch đi vào thực tế, ${nodeTitle} phản hồi lại bằng doanh thu, tồn kho, việc làm và nhu cầu vốn lưu động mới.`,
        closing: (scenario) => `📌 Kết thúc: ${scenario.title} thường mở ra một chu kỳ mới gồm nghĩa vụ trả nợ, tái đầu tư và áp lực hiệu quả kinh doanh.`
    },
    investment: {
        preface: (scenario) => `${scenario.icon} Bối cảnh: ${scenario.desc} Nhà đầu tư thường xác định mục tiêu lợi nhuận, thời gian nắm giữ và mức biến động chấp nhận được trước khi xuống tiền.`,
        validation: (_scenario, nodeTitle) => `🧾 ${nodeTitle} xác nhận tài khoản, định giá, mức phí và cơ chế khớp lệnh trước khi vị thế được mở.`,
        risk: (_scenario, nodeTitle) => `⚖️ ${nodeTitle} là nơi rủi ro định giá, dùng đòn bẩy hoặc thanh khoản thấp bắt đầu lộ rõ khi thị trường đảo chiều.`,
        feedback: (_scenario, nodeTitle) => `🔁 Sau khi vị thế hình thành, ${nodeTitle} phản ứng bằng giá mới, dòng tiền chốt lời hoặc nhu cầu tái cân bằng danh mục.`,
        closing: (scenario) => `📌 Kết thúc: ${scenario.title} luôn để lại câu chuyện tiếp theo là lợi nhuận thực nhận, chi phí cơ hội và rủi ro còn treo lại trong danh mục.`
    },
    crisis: {
        preface: (scenario) => `${scenario.icon} Bối cảnh: ${scenario.desc} Trước khi khủng hoảng bùng lên, các mất cân đối thường đã tích tụ âm thầm trong bảng cân đối và kỳ vọng thị trường.`,
        validation: (_scenario, nodeTitle) => `⚠️ ${nodeTitle} bắt đầu phản ứng khi các chỉ số căng thẳng vượt ngưỡng an toàn và thanh khoản không còn dồi dào như trước.`,
        risk: (_scenario, nodeTitle) => `🚨 ${nodeTitle} trở thành điểm khuếch đại, nơi đòn bẩy, rút vốn và tâm lý hoảng sợ có thể biến cú sốc thành phản ứng dây chuyền.`,
        feedback: (_scenario, nodeTitle) => `🔁 Cú sốc lan tiếp qua ${nodeTitle}, khiến niềm tin, tín dụng và định giá tài sản tiếp tục phản hồi lẫn nhau.`,
        closing: (scenario) => `📌 Kết thúc: ${scenario.title} hiếm khi dừng ngay lập tức; hệ quả còn kéo dài qua suy giảm tăng trưởng, cứu trợ và tái cấu trúc hệ thống.`
    },
    fraud: {
        preface: (scenario) => `${scenario.icon} Bối cảnh: ${scenario.desc} Giai đoạn đầu thường có lời hứa hấp dẫn hoặc lớp vỏ hợp pháp đủ thuyết phục để kéo người tham gia vào.`,
        validation: (_scenario, nodeTitle) => `🕳️ ${nodeTitle} là điểm nghẽn nơi thông tin bất cân xứng bị lợi dụng, khiến nạn nhân khó nhận ra rủi ro thật sự.`,
        risk: (_scenario, nodeTitle) => `🚨 ${nodeTitle} cho thấy nơi gian lận phình to nhanh nhất, vì tiền mới, chứng từ hoặc quyền truy cập bị sử dụng sai mục đích.`,
        feedback: (_scenario, nodeTitle) => `🔁 Khi dòng tiền bắt đầu lệch chuẩn, dấu hiệu bất thường dần lộ ra tại ${nodeTitle}, nhưng thiệt hại thường chỉ được nhận diện muộn.`,
        closing: (scenario) => `📌 Kết thúc: ${scenario.title} thường để lại hậu quả dài hơn nhiều so với lúc sập, vì mất niềm tin, chi phí pháp lý và tổn thất lan sang người vô can.`
    },
    war: {
        preface: (scenario) => `${scenario.icon} Bối cảnh: ${scenario.desc} Áp lực thương mại, địa chính trị và tỷ giá thường tích tụ trước khi chính sách trả đũa được tung ra.`,
        validation: (_scenario, nodeTitle) => `🌐 ${nodeTitle} điều chỉnh vị thế khi tín hiệu tỷ giá, dự trữ hoặc thương mại lan sang các bên còn lại.`,
        risk: (_scenario, nodeTitle) => `🚨 ${nodeTitle} trở thành nơi khuếch đại xung đột, vì mỗi phản ứng chính sách đều có thể tạo thêm vòng trả đũa mới.`,
        feedback: (_scenario, nodeTitle) => `🔁 Sau cú sốc ban đầu, ${nodeTitle} truyền tác động sang thương mại, lạm phát nhập khẩu và kỳ vọng nắm giữ ngoại tệ.`,
        closing: (scenario) => `📌 Kết thúc: ${scenario.title} thường để lại trạng thái cân bằng mới kém hiệu quả hơn, với chi phí cao hơn cho doanh nghiệp và người dân.`
    },
    modern: {
        preface: (scenario) => `${scenario.icon} Bối cảnh: ${scenario.desc} Trước khi tiền chạy, người dùng và nền tảng số phải kết nối qua các lớp ví, định danh và đối soát dữ liệu.`,
        validation: (_scenario, nodeTitle) => `🔐 ${nodeTitle} xác thực người dùng, ví, khóa truy cập hoặc giới hạn giao dịch trước khi hệ thống cho phép xử lý tiếp.`,
        risk: (_scenario, nodeTitle) => `⚖️ ${nodeTitle} là nơi rủi ro công nghệ, lỗi vận hành hoặc chênh lệch thanh khoản có thể bộc lộ nhanh nhất.`,
        feedback: (_scenario, nodeTitle) => `🔁 Sau giao dịch, ${nodeTitle} đồng bộ số dư, dữ liệu lịch sử và trạng thái xử lý trên nhiều lớp hạ tầng số khác nhau.`,
        closing: (scenario) => `📌 Kết thúc: ${scenario.title} không chỉ là một lần thanh toán hay đầu tư; nó còn tạo thêm dữ liệu, thói quen sử dụng và rủi ro nền tảng trong tương lai.`
    }
};

function cloneScenarioStep(step) {
    return {
        ...step,
        inputs: step.inputs ? { ...step.inputs } : undefined,
        outputs: step.outputs ? { ...step.outputs } : undefined,
        effect: step.effect ? { ...step.effect } : undefined,
        condition: step.condition ? JSON.parse(JSON.stringify(step.condition)) : undefined
    };
}

function getScenarioNarrative(nodeId, category) {
    return scenarioNarrativeByCategory[category] || scenarioNarrativeByCategory.personal;
}

function getScenarioNodeTitle(nodeId) {
    return componentData[nodeId]?.title || 'Hệ thống tài chính';
}

function createNarrativeStep(node, text, marker) {
    return {
        node,
        text,
        synthetic: true,
        marker,
        autoAdvanceMs: 2400
    };
}

function shouldInsertValidationCheckpoint(steps) {
    return steps.length > 1 && steps[1]?.node !== steps[0]?.node;
}

function shouldInsertRiskCheckpoint(scenario, steps) {
    return Boolean(
        scenario.isCrisis ||
        scenario.cat === 'fraud' ||
        scenario.cat === 'war' ||
        scenario.hasSimulation ||
        steps.some((step) => step.condition)
    );
}

function shouldInsertFeedbackCheckpoint(steps) {
    const uniqueNodes = new Set(steps.map((step) => step.node).filter(Boolean));
    return uniqueNodes.size >= 3 || steps.some((step) => step.inputs || step.outputs || step.effect);
}

function enrichScenarioSteps(scenarioId, scenario, rawSteps) {
    const steps = (rawSteps || []).map(cloneScenarioStep).filter((step) => step?.node && step?.text);
    if (!steps.length) return [];

    const narrative = getScenarioNarrative(scenarioId, scenario.cat);
    const firstStep = steps[0];
    const lastStep = steps[steps.length - 1];
    const pivotStep = steps[Math.max(1, Math.floor(steps.length / 2))] || lastStep;
    const middleSteps = steps.slice(1, -1);
    const splitIndex = middleSteps.length > 1 ? Math.ceil(middleSteps.length / 2) : middleSteps.length;
    const enriched = [
        createNarrativeStep(firstStep.node, narrative.preface(scenario), 'preface'),
        firstStep
    ];

    if (shouldInsertValidationCheckpoint(steps)) {
        enriched.push(
            createNarrativeStep(
                steps[1].node,
                narrative.validation(scenario, getScenarioNodeTitle(steps[1].node)),
                'validation'
            )
        );
    }

    if (middleSteps.length) {
        enriched.push(...middleSteps.slice(0, splitIndex));
    }

    if (shouldInsertRiskCheckpoint(scenario, steps)) {
        enriched.push(
            createNarrativeStep(
                pivotStep.node,
                narrative.risk(scenario, getScenarioNodeTitle(pivotStep.node)),
                'risk'
            )
        );
    }

    if (middleSteps.length > splitIndex) {
        enriched.push(...middleSteps.slice(splitIndex));
    }

    if (shouldInsertFeedbackCheckpoint(steps)) {
        enriched.push(
            createNarrativeStep(
                lastStep.node,
                narrative.feedback(scenario, getScenarioNodeTitle(lastStep.node)),
                'feedback'
            )
        );
    }

    if (steps.length > 1) {
        enriched.push(lastStep);
    }

    enriched.push(createNarrativeStep(lastStep.node, narrative.closing(scenario), 'closing'));
    return enriched;
}

Object.entries(scenarios).forEach(([, scenario]) => {
    const originalGetSteps = scenario.getSteps ? scenario.getSteps.bind(scenario) : null;
    const originalSteps = Array.isArray(scenario.steps) ? scenario.steps.map(cloneScenarioStep) : null;

    scenario.getSteps = (c) => {
        const baseSteps = originalGetSteps
            ? originalGetSteps(c)
            : (originalSteps ? originalSteps.map(cloneScenarioStep) : []);
        return enrichScenarioSteps(scenario.id || scenario.title, scenario, baseSteps);
    };
});
