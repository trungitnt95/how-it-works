// ==================== COMPONENT DATA (20 Components) ====================

const componentData = {
    // ==================== CORE (1-6) ====================
    'central-bank': {
        icon: '🏛️',
        title: 'Ngân Hàng Trung Ương',
        order: 1,
        category: 'core',
        connections: ['commercial-bank', 'government', 'bond-market', 'forex'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> Ngân hàng trung ương là "nhà máy in tiền" của cả nước.</p>
            <div class="example-box">
                <strong>Ở Việt Nam:</strong> Ngân Hàng Nhà Nước Việt Nam<br>
                <strong>Ở Mỹ:</strong> FED (Federal Reserve)<br>
                <strong>Ở EU:</strong> ECB (European Central Bank)
            </div>
            <h4>📌 Làm gì?</h4>
            <ul>
                <li>🖨️ In tiền mới</li>
                <li>📊 Quyết định lãi suất</li>
                <li>💰 Cho các ngân hàng khác vay</li>
                <li>🌍 Giữ dự trữ ngoại hối (USD, vàng)</li>
            </ul>
            <div class="warning-box">
                <strong>⚠️ Cảnh báo:</strong> In quá nhiều tiền → Lạm phát → Tiền mất giá!
            </div>
        `,
        detail: `
            <p><strong>Ngân Hàng Trung Ương</strong> là cơ quan quản lý tiền tệ cao nhất, đóng vai trò "ngân hàng của các ngân hàng".</p>
            <h4>🎯 Chức năng chính:</h4>
            <ul>
                <li><strong>Phát hành tiền:</strong> Độc quyền in tiền mặt và tạo tiền điện tử</li>
                <li><strong>Chính sách tiền tệ:</strong> Điều chỉnh lãi suất kiểm soát lạm phát</li>
                <li><strong>Cho vay cuối cùng:</strong> Cứu ngân hàng thương mại khi khó khăn</li>
                <li><strong>Dự trữ ngoại hối:</strong> Giữ USD, vàng ổn định tỷ giá</li>
                <li><strong>Giám sát:</strong> Kiểm tra các ngân hàng thương mại</li>
            </ul>
            <h4>💡 Cách tạo tiền:</h4>
            <ol>
                <li>Mua trái phiếu chính phủ → Tiền mới vào hệ thống</li>
                <li>Giảm tỷ lệ dự trữ bắt buộc → Ngân hàng cho vay nhiều hơn</li>
                <li>Giảm lãi suất → Khuyến khích vay mượn</li>
            </ol>
        `,
        advanced: `
            <h4>🔧 Công cụ chính sách tiền tệ:</h4>
            <ul>
                <li><strong>OMO:</strong> Mua/bán trái phiếu trên thị trường mở</li>
                <li><strong>Discount Rate:</strong> Lãi suất cho vay qua đêm</li>
                <li><strong>Reserve Requirement:</strong> Tỷ lệ dự trữ bắt buộc</li>
                <li><strong>QE:</strong> Nới lỏng định lượng - mua tài sản quy mô lớn</li>
            </ul>
            <h4>📊 Công thức:</h4>
            <p><strong>M2 = MB × Money Multiplier</strong></p>
            <p>Money Multiplier = 1 / Reserve Ratio</p>
            <div class="warning-box">
                <strong>Rủi ro:</strong> In tiền quá mức → Hyperinflation (siêu lạm phát) như Venezuela, Zimbabwe.
            </div>
        `,
        keyPoints: ['Phát hành tiền', 'Lãi suất', 'Dự trữ bắt buộc', 'Lạm phát', 'QE']
    },

    'commercial-bank': {
        icon: '🏦',
        title: 'Ngân Hàng Thương Mại',
        order: 2,
        category: 'core',
        connections: ['central-bank', 'business', 'individual', 'real-estate', 'consumer-finance', 'stock-exchange'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> Nơi bạn gửi tiền và vay tiền (Vietcombank, Techcombank, ACB...)</p>
            <div class="example-box">
                <strong>Phép màu nhân tiền:</strong><br>
                Bạn gửi 100 triệu → Ngân hàng giữ 10 triệu, cho vay 90 triệu<br>
                → Người đó gửi lại → Cho vay tiếp...<br>
                <strong>Kết quả:</strong> 100 triệu → gần 1 TỶ trong hệ thống! 🤯
            </div>
            <h4>📌 Làm gì?</h4>
            <ul>
                <li>💰 Giữ tiền (tài khoản, tiết kiệm)</li>
                <li>💳 Cho vay (nhà, xe, kinh doanh)</li>
                <li>💸 Chuyển tiền, thanh toán</li>
            </ul>
        `,
        detail: `
            <h4>🔄 Cơ chế nhân tiền:</h4>
            <ol>
                <li>Bạn gửi 100 triệu</li>
                <li>NH giữ 10% (10 triệu) dự trữ</li>
                <li>Cho công ty A vay 90 triệu</li>
                <li>Công ty A trả lương nhân viên B</li>
                <li>B gửi 90 triệu vào NH khác</li>
                <li>NH đó giữ 9 triệu, cho vay 81 triệu...</li>
            </ol>
            <div class="example-box">
                <strong>Công thức:</strong> Tổng = Tiền gửi × (1/Tỷ lệ dự trữ)<br>
                100 triệu × 10 = <strong>1 tỷ</strong>
            </div>
        `,
        advanced: `
            <h4>📊 Bảng cân đối:</h4>
            <ul>
                <li><strong>Tài sản:</strong> Cho vay, trái phiếu, dự trữ</li>
                <li><strong>Nợ:</strong> Tiền gửi khách hàng</li>
                <li><strong>Vốn:</strong> Vốn cổ đông</li>
            </ul>
            <h4>📈 Tỷ lệ an toàn:</h4>
            <ul>
                <li><strong>CAR:</strong> ≥ 8%</li>
                <li><strong>LDR:</strong> ≤ 85%</li>
                <li><strong>NPL:</strong> < 3%</li>
            </ul>
        `,
        keyPoints: ['Tiền gửi', 'Cho vay', 'Nhân tiền', 'Dự trữ', 'Lãi suất']
    },

    'government': {
        icon: '🏢',
        title: 'Chính Phủ',
        order: 3,
        category: 'core',
        connections: ['central-bank', 'business', 'individual', 'bond-market', 'pension-fund'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> Thu tiền từ mọi người (thuế) và chi cho dịch vụ công.</p>
            <h4>💰 Tiền vào:</h4>
            <ul>
                <li>💼 Thuế thu nhập cá nhân</li>
                <li>🏭 Thuế doanh nghiệp</li>
                <li>🛒 Thuế VAT (10%)</li>
            </ul>
            <h4>💸 Tiền ra:</h4>
            <ul>
                <li>🛣️ Đường, cầu, sân bay</li>
                <li>🏥 Bệnh viện, trường học</li>
                <li>👮 Quân đội, công an</li>
            </ul>
        `,
        detail: `
            <h4>📊 Ngân sách:</h4>
            <p>Thu - Chi = Thặng dư/Thâm hụt</p>
            <ul>
                <li><strong>Thặng dư:</strong> Thu > Chi → Tiết kiệm</li>
                <li><strong>Thâm hụt:</strong> Chi > Thu → Phát hành trái phiếu</li>
            </ul>
            <h4>🔄 Chính sách tài khóa:</h4>
            <ul>
                <li><strong>Mở rộng:</strong> Tăng chi, giảm thuế</li>
                <li><strong>Thắt chặt:</strong> Giảm chi, tăng thuế</li>
            </ul>
        `,
        advanced: `
            <h4>📊 Cơ cấu nợ công VN:</h4>
            <ul>
                <li>Nợ trong nước: ~60%</li>
                <li>Nợ nước ngoài: ~40%</li>
                <li>Nợ/GDP: ~55-60%</li>
            </ul>
            <div class="warning-box">
                <strong>Rủi ro:</strong> Nợ quá cao → Khủng hoảng nợ (như Hy Lạp)
            </div>
        `,
        keyPoints: ['Thuế', 'Chi tiêu công', 'Trái phiếu', 'Nợ công', 'Tài khóa']
    },

    'business': {
        icon: '🏭',
        title: 'Doanh Nghiệp',
        order: 4,
        category: 'core',
        connections: ['commercial-bank', 'individual', 'government', 'stock-exchange', 'bond-market', 'foreign', 'startup'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> Nơi tạo ra hàng hóa, dịch vụ và việc làm.</p>
            <h4>🔄 Vòng đời tiền:</h4>
            <ol>
                <li>💰 Vay ngân hàng</li>
                <li>🏭 Mua máy móc, nguyên liệu</li>
                <li>👷 Thuê nhân viên, trả lương</li>
                <li>📦 Sản xuất và bán hàng</li>
                <li>💵 Thu tiền khách hàng</li>
                <li>🏦 Trả nợ + lãi</li>
                <li>🏢 Nộp thuế</li>
            </ol>
        `,
        detail: `
            <h4>💡 Nguồn vốn:</h4>
            <ul>
                <li><strong>Vay ngân hàng:</strong> Trả lãi, có tài sản đảm bảo</li>
                <li><strong>Phát hành cổ phiếu:</strong> Chia sẻ sở hữu</li>
                <li><strong>Phát hành trái phiếu:</strong> Vay từ nhà đầu tư</li>
                <li><strong>Lợi nhuận giữ lại:</strong> Tái đầu tư</li>
            </ul>
        `,
        advanced: `
            <h4>📈 Phân tích tài chính:</h4>
            <ul>
                <li><strong>ROE:</strong> Lợi nhuận/Vốn CSH</li>
                <li><strong>ROA:</strong> Lợi nhuận/Tổng TS</li>
                <li><strong>D/E:</strong> Nợ/Vốn</li>
            </ul>
        `,
        keyPoints: ['Vay vốn', 'Lương', 'Sản xuất', 'Doanh thu', 'Cổ tức']
    },

    'individual': {
        icon: '👥',
        title: 'Người Dân',
        order: 5,
        category: 'core',
        connections: ['commercial-bank', 'business', 'government', 'stock-exchange', 'real-estate', 'insurance', 'fintech', 'crypto'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> Bạn và tôi - làm việc, kiếm tiền, tiêu tiền.</p>
            <h4>💰 Tiền vào:</h4>
            <ul>
                <li>💼 Lương</li>
                <li>📈 Lãi, cổ tức</li>
                <li>🏠 Cho thuê</li>
            </ul>
            <h4>💸 Tiền ra:</h4>
            <ul>
                <li>🍜 Ăn uống</li>
                <li>🏠 Nhà, điện nước</li>
                <li>📱 Mua sắm</li>
            </ul>
            <div class="example-box">
                <strong>Công thức vàng:</strong> Thu nhập - Chi tiêu = Tiết kiệm
            </div>
        `,
        detail: `
            <h4>📊 Quy tắc 50/30/20:</h4>
            <ul>
                <li>50% - Thiết yếu</li>
                <li>30% - Mong muốn</li>
                <li>20% - Tiết kiệm</li>
            </ul>
            <h4>💡 Nợ tốt vs Nợ xấu:</h4>
            <ul>
                <li><strong>Tốt:</strong> Vay mua nhà cho thuê</li>
                <li><strong>Xấu:</strong> Vay tiêu dùng lãi cao</li>
            </ul>
        `,
        advanced: `
            <h4>📈 Lãi kép:</h4>
            <p><strong>A = P(1 + r)^n</strong></p>
            <div class="example-box">
                100 triệu, lãi 8%/năm, 20 năm = <strong>466 triệu</strong>
            </div>
        `,
        keyPoints: ['Thu nhập', 'Chi tiêu', 'Tiết kiệm', 'Đầu tư', 'Lãi kép']
    },

    'foreign': {
        icon: '🌍',
        title: 'Thị Trường Quốc Tế',
        order: 6,
        category: 'core',
        connections: ['business', 'central-bank', 'forex', 'commodity'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> Tiền chảy ra/vào giữa VN và thế giới.</p>
            <h4>📤 Tiền vào VN:</h4>
            <ul>
                <li>🏭 FDI (Samsung, Intel...)</li>
                <li>📦 Xuất khẩu</li>
                <li>💸 Kiều hối</li>
                <li>🧳 Du lịch</li>
            </ul>
            <h4>📥 Tiền ra:</h4>
            <ul>
                <li>📱 Nhập khẩu</li>
                <li>✈️ Du lịch nước ngoài</li>
                <li>🎓 Du học</li>
            </ul>
        `,
        detail: `
            <h4>💱 Tỷ giá:</h4>
            <ul>
                <li>Xuất nhiều → VND mạnh</li>
                <li>Nhập nhiều → VND yếu</li>
            </ul>
            <div class="example-box">
                <strong>VN 2023:</strong> Xuất 355 tỷ, Nhập 327 tỷ → Thặng dư 28 tỷ USD
            </div>
        `,
        advanced: `
            <h4>📊 Cán cân thanh toán:</h4>
            <ul>
                <li><strong>Vãng lai:</strong> XNK, kiều hối</li>
                <li><strong>Tài khoản vốn:</strong> FDI, chứng khoán</li>
            </ul>
        `,
        keyPoints: ['Xuất khẩu', 'Nhập khẩu', 'FDI', 'Kiều hối', 'Tỷ giá']
    },

    // ==================== FINANCIAL (7-10) ====================
    'stock-exchange': {
        icon: '📈',
        title: 'Sàn Chứng Khoán',
        order: 7,
        category: 'financial',
        connections: ['business', 'individual', 'investment-fund', 'startup'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> Chợ mua bán cổ phiếu công ty.</p>
            <div class="example-box">
                <strong>Ở VN:</strong> HOSE (HCM), HNX (Hà Nội), UPCOM<br>
                <strong>Thế giới:</strong> NYSE, NASDAQ, Shanghai
            </div>
            <h4>📌 Hoạt động:</h4>
            <ul>
                <li>📈 Công ty bán cổ phiếu huy động vốn</li>
                <li>👥 Nhà đầu tư mua/bán kiếm lời</li>
                <li>📊 Giá lên xuống theo cung cầu</li>
            </ul>
        `,
        detail: `
            <h4>💡 Các loại lệnh:</h4>
            <ul>
                <li><strong>ATO/ATC:</strong> Khớp giá mở/đóng cửa</li>
                <li><strong>LO:</strong> Lệnh giới hạn giá</li>
                <li><strong>MP:</strong> Lệnh thị trường</li>
            </ul>
            <h4>📊 Chỉ số:</h4>
            <ul>
                <li><strong>VN-Index:</strong> Toàn thị trường HOSE</li>
                <li><strong>VN30:</strong> Top 30 cổ phiếu lớn</li>
            </ul>
        `,
        advanced: `
            <h4>📈 Phân tích:</h4>
            <ul>
                <li><strong>P/E:</strong> Giá/Lợi nhuận</li>
                <li><strong>P/B:</strong> Giá/Giá trị sổ sách</li>
                <li><strong>EPS:</strong> Lợi nhuận/cổ phiếu</li>
            </ul>
        `,
        keyPoints: ['Cổ phiếu', 'VN-Index', 'P/E', 'IPO', 'Thanh khoản']
    },

    'investment-fund': {
        icon: '💼',
        title: 'Quỹ Đầu Tư',
        order: 8,
        category: 'financial',
        connections: ['individual', 'stock-exchange', 'bond-market', 'real-estate'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> Gom tiền nhiều người, thuê chuyên gia đầu tư.</p>
            <h4>📌 Các loại quỹ:</h4>
            <ul>
                <li>📈 Quỹ cổ phiếu</li>
                <li>📜 Quỹ trái phiếu</li>
                <li>🔀 Quỹ cân bằng</li>
                <li>📊 ETF (quỹ chỉ số)</li>
            </ul>
            <div class="example-box">
                <strong>VN:</strong> VFMVN30 ETF, Dragon Capital, VinaCapital
            </div>
        `,
        detail: `
            <h4>💡 Ưu điểm:</h4>
            <ul>
                <li>Đa dạng hóa rủi ro</li>
                <li>Chuyên gia quản lý</li>
                <li>Vốn nhỏ cũng tham gia được</li>
            </ul>
            <h4>💸 Chi phí:</h4>
            <ul>
                <li><strong>Phí quản lý:</strong> 1-2%/năm</li>
                <li><strong>Phí mua/bán:</strong> 0-2%</li>
            </ul>
        `,
        advanced: `
            <h4>📊 Đánh giá quỹ:</h4>
            <ul>
                <li><strong>NAV:</strong> Giá trị tài sản ròng</li>
                <li><strong>Sharpe Ratio:</strong> Lợi nhuận/rủi ro</li>
                <li><strong>Alpha:</strong> Vượt benchmark</li>
            </ul>
        `,
        keyPoints: ['ETF', 'NAV', 'Đa dạng hóa', 'Phí quản lý', 'Benchmark']
    },

    'consumer-finance': {
        icon: '💳',
        title: 'Tín Dụng Tiêu Dùng',
        order: 9,
        category: 'financial',
        connections: ['individual', 'commercial-bank', 'fintech'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> Cho vay mua sắm: thẻ tín dụng, trả góp.</p>
            <h4>📌 Các hình thức:</h4>
            <ul>
                <li>💳 Thẻ tín dụng</li>
                <li>📱 Trả góp điện thoại, laptop</li>
                <li>🛵 Trả góp xe máy</li>
                <li>💰 Vay tiêu dùng tín chấp</li>
            </ul>
            <div class="warning-box">
                <strong>⚠️ Cảnh báo:</strong> Lãi suất rất cao! 20-40%/năm
            </div>
        `,
        detail: `
            <h4>💳 Thẻ tín dụng:</h4>
            <ul>
                <li>Miễn lãi 45-55 ngày</li>
                <li>Trả tối thiểu 5% → Lãi 25-30%/năm</li>
                <li>Rút tiền mặt → Lãi + phí</li>
            </ul>
        `,
        advanced: `
            <h4>📊 Đánh giá tín dụng:</h4>
            <ul>
                <li><strong>CIC:</strong> Trung tâm thông tin tín dụng</li>
                <li><strong>Credit Score:</strong> Điểm tín dụng</li>
            </ul>
        `,
        keyPoints: ['Thẻ tín dụng', 'Trả góp', 'Lãi suất cao', 'CIC', 'Nợ xấu']
    },

    'shadow-banking': {
        icon: '🌑',
        title: 'Shadow Banking',
        order: 10,
        category: 'financial',
        connections: ['business', 'individual', 'real-estate'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> Cho vay ngoài ngân hàng, ít bị quản lý.</p>
            <h4>📌 Bao gồm:</h4>
            <ul>
                <li>💰 Công ty tài chính</li>
                <li>🏠 Cầm đồ</li>
                <li>👥 Vay ngang hàng (P2P)</li>
                <li>🦈 Tín dụng đen</li>
            </ul>
            <div class="warning-box">
                <strong>⚠️ Rủi ro:</strong> Lãi suất cắt cổ, đòi nợ bạo lực!
            </div>
        `,
        detail: `
            <h4>💡 Tại sao tồn tại?</h4>
            <ul>
                <li>Ngân hàng từ chối (nợ xấu, không tài sản)</li>
                <li>Cần tiền gấp</li>
                <li>Thủ tục đơn giản</li>
            </ul>
        `,
        advanced: `
            <h4>📊 Quy mô toàn cầu:</h4>
            <p>Shadow banking chiếm ~50 nghìn tỷ USD, gần bằng hệ thống ngân hàng chính thức.</p>
        `,
        keyPoints: ['P2P', 'Tín dụng đen', 'Lãi cao', 'Rủi ro', 'Không quản lý']
    },

    // ==================== MARKETS (11-14) ====================
    'bond-market': {
        icon: '📜',
        title: 'Thị Trường Trái Phiếu',
        order: 11,
        category: 'market',
        connections: ['government', 'business', 'commercial-bank', 'investment-fund', 'central-bank'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> Chợ mua bán giấy nợ (trái phiếu).</p>
            <h4>📌 Các loại:</h4>
            <ul>
                <li>🏛️ Trái phiếu chính phủ (an toàn nhất)</li>
                <li>🏭 Trái phiếu doanh nghiệp</li>
                <li>🏦 Trái phiếu ngân hàng</li>
            </ul>
            <div class="example-box">
                <strong>Ví dụ:</strong> Mua TPCP 10 năm, lãi 8%/năm → Mỗi năm nhận 8 triệu/100 triệu
            </div>
        `,
        detail: `
            <h4>💡 Cách hoạt động:</h4>
            <ol>
                <li>Tổ chức phát hành trái phiếu</li>
                <li>Nhà đầu tư mua = cho vay</li>
                <li>Nhận lãi định kỳ (coupon)</li>
                <li>Đáo hạn → nhận lại gốc</li>
            </ol>
        `,
        advanced: `
            <h4>📈 Mối quan hệ giá - lãi suất:</h4>
            <p>Lãi suất tăng → Giá trái phiếu giảm (và ngược lại)</p>
            <h4>Duration:</h4>
            <p>Độ nhạy giá với lãi suất</p>
        `,
        keyPoints: ['TPCP', 'TPDN', 'Coupon', 'Yield', 'Duration']
    },

    'real-estate': {
        icon: '🏠',
        title: 'Bất Động Sản',
        order: 12,
        category: 'market',
        connections: ['individual', 'commercial-bank', 'investment-fund', 'business'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> Thị trường mua bán nhà đất.</p>
            <h4>📌 Các loại:</h4>
            <ul>
                <li>🏠 Nhà ở (căn hộ, nhà phố, biệt thự)</li>
                <li>🏢 Thương mại (văn phòng, trung tâm TM)</li>
                <li>🏭 Công nghiệp (nhà xưởng, kho)</li>
                <li>🌾 Đất nông nghiệp</li>
            </ul>
        `,
        detail: `
            <h4>💰 Cách đầu tư:</h4>
            <ul>
                <li><strong>Mua để ở:</strong> Tiết kiệm tiền thuê</li>
                <li><strong>Mua cho thuê:</strong> Thu nhập thụ động</li>
                <li><strong>Mua bán lướt:</strong> Chênh lệch giá</li>
            </ul>
        `,
        advanced: `
            <h4>📊 Các chỉ số:</h4>
            <ul>
                <li><strong>Cap Rate:</strong> Thu nhập cho thuê/Giá mua</li>
                <li><strong>Price/Income:</strong> Giá nhà/Thu nhập</li>
            </ul>
            <div class="warning-box">
                <strong>Rủi ro:</strong> Bong bóng BĐS khi giá tăng quá nhanh
            </div>
        `,
        keyPoints: ['Cho thuê', 'Vay mua nhà', 'Cap Rate', 'Bong bóng', 'Thanh khoản']
    },

    'commodity': {
        icon: '🥇',
        title: 'Thị Trường Hàng Hóa',
        order: 13,
        category: 'market',
        connections: ['business', 'foreign', 'individual'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> Mua bán nguyên liệu thô.</p>
            <h4>📌 Các loại:</h4>
            <ul>
                <li>🥇 Kim loại quý: Vàng, bạc</li>
                <li>⛽ Năng lượng: Dầu, khí</li>
                <li>🌾 Nông sản: Cà phê, gạo, cao su</li>
                <li>🔩 Kim loại công nghiệp: Đồng, thép</li>
            </ul>
        `,
        detail: `
            <h4>💡 Cách đầu tư:</h4>
            <ul>
                <li><strong>Vàng vật chất:</strong> Mua vàng SJC, trang sức</li>
                <li><strong>Hợp đồng tương lai:</strong> Futures, Options</li>
                <li><strong>ETF:</strong> Quỹ vàng GLD, SLV</li>
            </ul>
        `,
        advanced: `
            <h4>📊 Yếu tố ảnh hưởng giá vàng:</h4>
            <ul>
                <li>Lạm phát tăng → Vàng tăng</li>
                <li>USD mạnh → Vàng giảm</li>
                <li>Bất ổn địa chính trị → Vàng tăng</li>
            </ul>
        `,
        keyPoints: ['Vàng', 'Dầu', 'Futures', 'Hedging', 'Inflation hedge']
    },

    'forex': {
        icon: '💱',
        title: 'Thị Trường Forex',
        order: 14,
        category: 'market',
        connections: ['central-bank', 'commercial-bank', 'foreign', 'business'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> Mua bán trao đổi ngoại tệ.</p>
            <h4>📌 Các cặp phổ biến:</h4>
            <ul>
                <li>EUR/USD (Euro/Đô Mỹ)</li>
                <li>USD/VND (Đô Mỹ/Việt Nam Đồng)</li>
                <li>GBP/USD (Bảng Anh/Đô Mỹ)</li>
            </ul>
            <div class="example-box">
                <strong>Forex</strong> là thị trường lớn nhất thế giới: 6.6 nghìn tỷ USD/ngày!
            </div>
        `,
        detail: `
            <h4>💡 Ai tham gia?</h4>
            <ul>
                <li>Ngân hàng trung ương</li>
                <li>Ngân hàng thương mại</li>
                <li>Doanh nghiệp XNK</li>
                <li>Nhà đầu tư, đầu cơ</li>
            </ul>
        `,
        advanced: `
            <h4>📊 Các yếu tố ảnh hưởng:</h4>
            <ul>
                <li>Chênh lệch lãi suất</li>
                <li>Cán cân thương mại</li>
                <li>GDP, lạm phát</li>
                <li>Chính sách tiền tệ</li>
            </ul>
            <div class="warning-box">
                <strong>⚠️ Rủi ro:</strong> Đòn bẩy cao (1:100), dễ cháy tài khoản!
            </div>
        `,
        keyPoints: ['Tỷ giá', 'Cặp tiền', 'Đòn bẩy', 'Pip', 'Carry Trade']
    },

    // ==================== SERVICES (15-17) ====================
    'insurance': {
        icon: '🛡️',
        title: 'Bảo Hiểm',
        order: 15,
        category: 'services',
        connections: ['individual', 'business', 'investment-fund'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> Đóng tiền nhỏ, được bồi thường khi gặp rủi ro.</p>
            <h4>📌 Các loại:</h4>
            <ul>
                <li>🏥 Bảo hiểm y tế (BHYT)</li>
                <li>👤 Bảo hiểm nhân thọ</li>
                <li>🚗 Bảo hiểm xe</li>
                <li>🏠 Bảo hiểm nhà</li>
                <li>✈️ Bảo hiểm du lịch</li>
            </ul>
        `,
        detail: `
            <h4>💡 Cách hoạt động:</h4>
            <ol>
                <li>Đóng phí hàng năm</li>
                <li>Công ty BH gom phí từ nhiều người</li>
                <li>Đầu tư sinh lời</li>
                <li>Bồi thường cho người gặp rủi ro</li>
            </ol>
        `,
        advanced: `
            <h4>📊 Mô hình kinh doanh:</h4>
            <ul>
                <li><strong>Underwriting profit:</strong> Phí thu > Bồi thường</li>
                <li><strong>Investment income:</strong> Lãi từ đầu tư phí</li>
            </ul>
        `,
        keyPoints: ['Phí BH', 'Quyền lợi', 'Bồi thường', 'Actuarial', 'Reinsurance']
    },

    'pension-fund': {
        icon: '👴',
        title: 'Quỹ Hưu Trí',
        order: 16,
        category: 'services',
        connections: ['individual', 'government', 'stock-exchange', 'bond-market'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> Tiết kiệm cho tuổi già, nhận lương hưu.</p>
            <h4>📌 Ở Việt Nam:</h4>
            <ul>
                <li>🏛️ BHXH bắt buộc (8% lương)</li>
                <li>💼 Quỹ hưu trí tự nguyện</li>
            </ul>
            <div class="example-box">
                <strong>Ví dụ:</strong> Đóng 30 năm → Nhận lương hưu ~75% mức lương tham gia
            </div>
        `,
        detail: `
            <h4>💡 Cách hoạt động:</h4>
            <ol>
                <li>Đóng phí hàng tháng (% lương)</li>
                <li>Quỹ đầu tư sinh lời</li>
                <li>Đến tuổi hưu → nhận lương hưu</li>
            </ol>
        `,
        advanced: `
            <h4>📊 Thách thức:</h4>
            <ul>
                <li>Dân số già hóa</li>
                <li>Người đóng ít, người hưởng nhiều</li>
                <li>Lạm phát ăn mòn giá trị</li>
            </ul>
        `,
        keyPoints: ['BHXH', 'Lương hưu', 'Đóng góp', 'Già hóa', 'Quỹ tự nguyện']
    },

    'credit-rating': {
        icon: '⭐',
        title: 'Xếp Hạng Tín Dụng',
        order: 17,
        category: 'services',
        connections: ['business', 'government', 'bond-market', 'commercial-bank'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> Đánh giá khả năng trả nợ của công ty/quốc gia.</p>
            <h4>📌 Big Three:</h4>
            <ul>
                <li>🏆 Moody's</li>
                <li>⭐ S&P (Standard & Poor's)</li>
                <li>📊 Fitch</li>
            </ul>
            <div class="example-box">
                <strong>Xếp hạng:</strong> AAA (tốt nhất) → D (vỡ nợ)<br>
                <strong>VN:</strong> BB (đầu cơ)
            </div>
        `,
        detail: `
            <h4>💡 Tác động:</h4>
            <ul>
                <li>Xếp hạng cao → Vay lãi suất thấp</li>
                <li>Xếp hạng thấp → Vay đắt hơn</li>
                <li>Bị hạ → Cổ phiếu, trái phiếu giảm giá</li>
            </ul>
        `,
        advanced: `
            <h4>📊 Các yếu tố đánh giá:</h4>
            <ul>
                <li>Nợ/GDP, Nợ/Vốn CSH</li>
                <li>Dòng tiền, thanh khoản</li>
                <li>Lịch sử trả nợ</li>
                <li>Triển vọng ngành</li>
            </ul>
        `,
        keyPoints: ['AAA', 'Investment Grade', 'Junk Bond', 'Outlook', 'Default']
    },

    // ==================== MODERN (18-20) ====================
    'fintech': {
        icon: '📱',
        title: 'Fintech',
        order: 18,
        category: 'modern',
        connections: ['individual', 'commercial-bank', 'consumer-finance', 'crypto'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> Công nghệ + Tài chính = Dịch vụ tiện lợi hơn.</p>
            <h4>📌 Ví dụ ở VN:</h4>
            <ul>
                <li>📱 Ví điện tử: MoMo, ZaloPay, VNPay</li>
                <li>💳 Thanh toán: QR Code</li>
                <li>🏦 Ngân hàng số: Timo, TNEX</li>
                <li>💰 Cho vay online: FE Credit, Home Credit</li>
            </ul>
        `,
        detail: `
            <h4>💡 Lợi ích:</h4>
            <ul>
                <li>Nhanh, tiện, 24/7</li>
                <li>Không cần ra ngân hàng</li>
                <li>Phí thấp hơn</li>
                <li>Tiếp cận người không có tài khoản NH</li>
            </ul>
        `,
        advanced: `
            <h4>📊 Xu hướng:</h4>
            <ul>
                <li><strong>Open Banking:</strong> Chia sẻ dữ liệu</li>
                <li><strong>Embedded Finance:</strong> Tài chính tích hợp</li>
                <li><strong>Buy Now Pay Later:</strong> Mua trước trả sau</li>
            </ul>
        `,
        keyPoints: ['Ví điện tử', 'QR Code', 'Mobile Banking', 'BNPL', 'P2P']
    },

    'crypto': {
        icon: '₿',
        title: 'Tiền Điện Tử',
        order: 19,
        category: 'modern',
        connections: ['individual', 'fintech', 'foreign'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> Tiền kỹ thuật số, không do chính phủ phát hành.</p>
            <h4>📌 Phổ biến:</h4>
            <ul>
                <li>₿ Bitcoin (BTC) - "Vàng số"</li>
                <li>Ξ Ethereum (ETH) - Hợp đồng thông minh</li>
                <li>💵 Stablecoin (USDT) - Neo giá USD</li>
            </ul>
            <div class="warning-box">
                <strong>⚠️ Rủi ro:</strong> Biến động mạnh, có thể mất 50% trong 1 ngày!
            </div>
        `,
        detail: `
            <h4>💡 Công nghệ:</h4>
            <ul>
                <li><strong>Blockchain:</strong> Sổ cái phân tán</li>
                <li><strong>Mining:</strong> Đào coin</li>
                <li><strong>Wallet:</strong> Ví lưu trữ</li>
            </ul>
        `,
        advanced: `
            <h4>📊 DeFi:</h4>
            <ul>
                <li><strong>DEX:</strong> Sàn phi tập trung</li>
                <li><strong>Lending:</strong> Cho vay crypto</li>
                <li><strong>Yield Farming:</strong> Canh tác lợi nhuận</li>
                <li><strong>Staking:</strong> Khóa coin nhận lãi</li>
            </ul>
        `,
        keyPoints: ['Bitcoin', 'Blockchain', 'DeFi', 'Wallet', 'Volatility']
    },

    'startup': {
        icon: '🚀',
        title: 'Startup & VC',
        order: 20,
        category: 'modern',
        connections: ['business', 'stock-exchange', 'individual'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> Công ty khởi nghiệp + Nhà đầu tư mạo hiểm.</p>
            <h4>📌 Vòng gọi vốn:</h4>
            <ul>
                <li>🌱 Pre-seed: Ý tưởng</li>
                <li>🌿 Seed: Sản phẩm đầu tiên</li>
                <li>📈 Series A, B, C: Mở rộng</li>
                <li>🔔 IPO: Lên sàn</li>
            </ul>
        `,
        detail: `
            <h4>💡 Nhà đầu tư:</h4>
            <ul>
                <li><strong>Angel:</strong> Cá nhân giàu, giai đoạn sớm</li>
                <li><strong>VC:</strong> Quỹ đầu tư mạo hiểm</li>
                <li><strong>PE:</strong> Private Equity, giai đoạn sau</li>
            </ul>
            <div class="example-box">
                <strong>VN:</strong> VNG, VNPay, Sky Mavis (Axie Infinity)
            </div>
        `,
        advanced: `
            <h4>📊 Định giá:</h4>
            <ul>
                <li><strong>Pre-money:</strong> Giá trị trước đầu tư</li>
                <li><strong>Post-money:</strong> Sau khi nhận vốn</li>
                <li><strong>Dilution:</strong> Pha loãng cổ phần</li>
            </ul>
        `,
        keyPoints: ['VC', 'Series A', 'Unicorn', 'Exit', 'Valuation']
    }
};

// ==================== SCENARIOS DATA (30+ Scenarios) ====================

const scenarios = {
    // ==================== PERSONAL (7) ====================
    deposit: {
        title: 'Gửi tiền tiết kiệm',
        cat: 'personal',
        icon: '💰',
        desc: '100 triệu gửi ngân hàng biến thành 1 tỷ như thế nào?',
        steps: [
            { node: 'individual', text: '👤 Bạn có 100 triệu VND tiền nhàn rỗi' },
            { node: 'commercial-bank', text: '🏦 Gửi vào ngân hàng, lãi 6%/năm' },
            { node: 'commercial-bank', text: '🏦 NH giữ 10 triệu dự trữ, cho công ty A vay 90 triệu' },
            { node: 'business', text: '🏭 Công ty A trả lương nhân viên' },
            { node: 'individual', text: '👤 Nhân viên gửi 80 triệu vào NH khác' },
            { node: 'commercial-bank', text: '🏦 Quá trình lặp lại → 100 triệu → gần 1 TỶ!' }
        ]
    },
    loan: {
        title: 'Vay mua nhà',
        cat: 'personal',
        icon: '🏠',
        desc: 'Vay 2 tỷ mua nhà, tiền đi đâu?',
        steps: [
            { node: 'individual', text: '👤 Muốn mua nhà 3 tỷ, có sẵn 1 tỷ' },
            { node: 'commercial-bank', text: '🏦 Vay 2 tỷ, lãi 10%/năm, 20 năm' },
            { node: 'individual', text: '👤 Trả góp ~19 triệu/tháng' },
            { node: 'real-estate', text: '🏠 Tiền đến tay người bán nhà' },
            { node: 'business', text: '🏭 Người bán trả cho nhà thầu, vật liệu' },
            { node: 'individual', text: '👤 Sau 20 năm trả tổng 4.5 tỷ (2 tỷ gốc + 2.5 tỷ lãi)' }
        ]
    },
    salary: {
        title: 'Nhận lương hàng tháng',
        cat: 'personal',
        icon: '💼',
        desc: 'Dòng chảy tiền lương của bạn.',
        steps: [
            { node: 'business', text: '🏭 Công ty bán hàng, thu tiền khách' },
            { node: 'business', text: '🏭 Cuối tháng chuyển lương 20 triệu' },
            { node: 'individual', text: '👤 Chi: 8tr nhà, 4tr ăn, 3tr khác' },
            { node: 'commercial-bank', text: '🏦 Gửi tiết kiệm 3 triệu' },
            { node: 'government', text: '🏢 Thuế TNCN đã khấu trừ ~2 triệu' }
        ]
    },
    'credit-card': {
        title: 'Sử dụng thẻ tín dụng',
        cat: 'personal',
        icon: '💳',
        desc: 'Quẹt thẻ 10 triệu, chuyện gì xảy ra?',
        steps: [
            { node: 'individual', text: '👤 Quẹt thẻ mua iPhone 25 triệu' },
            { node: 'consumer-finance', text: '💳 Ngân hàng trả tiền cho cửa hàng' },
            { node: 'business', text: '🏭 Cửa hàng nhận tiền (trừ 2-3% phí)' },
            { node: 'individual', text: '👤 Sau 45 ngày: Trả đủ = Miễn lãi' },
            { node: 'consumer-finance', text: '💳 Trả tối thiểu 5% → Lãi 25%/năm!' },
            { node: 'individual', text: '⚠️ Nếu không trả → Nợ xấu, CIC đen' }
        ]
    },
    'insurance-claim': {
        title: 'Bảo hiểm chi trả',
        cat: 'personal',
        icon: '🏥',
        desc: 'Tai nạn xe, bảo hiểm bồi thường.',
        steps: [
            { node: 'individual', text: '👤 Mua bảo hiểm xe 5 triệu/năm' },
            { node: 'insurance', text: '🛡️ Công ty BH thu phí từ nhiều người' },
            { node: 'investment-fund', text: '💼 Đầu tư phí sinh lời' },
            { node: 'individual', text: '😢 Bạn bị tai nạn, thiệt hại 50 triệu' },
            { node: 'insurance', text: '🛡️ BH bồi thường 40 triệu (80%)' },
            { node: 'individual', text: '👤 Bạn chỉ tốn 10 triệu + 5 triệu phí = 15 triệu' }
        ]
    },
    retirement: {
        title: 'Tiết kiệm hưu trí',
        cat: 'personal',
        icon: '👴',
        desc: 'Đóng BHXH 30 năm, nhận lương hưu.',
        steps: [
            { node: 'individual', text: '👤 Lương 20 triệu, đóng BHXH 8% = 1.6 triệu/tháng' },
            { node: 'pension-fund', text: '👴 Quỹ nhận tiền từ hàng triệu người' },
            { node: 'bond-market', text: '📜 Đầu tư vào trái phiếu CP an toàn' },
            { node: 'pension-fund', text: '👴 Sau 30 năm đóng đủ điều kiện' },
            { node: 'individual', text: '👤 Về hưu nhận ~75% lương = 15 triệu/tháng' },
            { node: 'individual', text: '👤 Nhận đến khi qua đời' }
        ]
    },
    remittance: {
        title: 'Kiều hối về Việt Nam',
        cat: 'personal',
        icon: '💸',
        desc: 'Người thân ở Mỹ gửi tiền về.',
        steps: [
            { node: 'foreign', text: '🌍 Người thân ở Mỹ kiếm 5,000 USD/tháng' },
            { node: 'fintech', text: '📱 Gửi 1,000 USD qua Remitly/Western Union' },
            { node: 'forex', text: '💱 Đổi 1,000 USD → 24 triệu VND' },
            { node: 'commercial-bank', text: '🏦 Tiền vào tài khoản gia đình ở VN' },
            { node: 'individual', text: '👤 Gia đình chi tiêu, đầu tư' },
            { node: 'central-bank', text: '🏛️ VN nhận 15 tỷ USD kiều hối/năm' }
        ]
    },

    // ==================== BUSINESS (6) ====================
    'business-loan': {
        title: 'Doanh nghiệp vay vốn',
        cat: 'business',
        icon: '🏭',
        desc: 'Công ty vay 10 tỷ mở rộng.',
        steps: [
            { node: 'business', text: '🏭 Công ty cần 10 tỷ mở rộng' },
            { node: 'commercial-bank', text: '🏦 Vay với lãi 9%/năm, thế chấp nhà xưởng' },
            { node: 'business', text: '🏭 Xây nhà xưởng 4 tỷ, mua máy 4 tỷ' },
            { node: 'individual', text: '👥 Thuê thêm 50 nhân viên' },
            { node: 'business', text: '🏭 Doanh thu tăng 8 tỷ/năm' },
            { node: 'commercial-bank', text: '🏦 Trả 900 triệu/năm, 10 năm hết nợ' }
        ]
    },
    ipo: {
        title: 'Công ty lên sàn (IPO)',
        cat: 'business',
        icon: '🔔',
        desc: 'Phát hành cổ phiếu lần đầu.',
        steps: [
            { node: 'business', text: '🏭 Công ty muốn huy động 500 tỷ' },
            { node: 'credit-rating', text: '⭐ Thuê kiểm toán, định giá' },
            { node: 'stock-exchange', text: '📈 Nộp hồ sơ lên sàn HOSE' },
            { node: 'investment-fund', text: '💼 Quỹ đầu tư mua cổ phiếu' },
            { node: 'individual', text: '👤 NĐT cá nhân đấu giá mua' },
            { node: 'business', text: '🏭 Thu 500 tỷ, cổ phiếu giao dịch trên sàn' }
        ]
    },
    export: {
        title: 'Xuất khẩu hàng hóa',
        cat: 'business',
        icon: '🚢',
        desc: 'Bán gạo sang Trung Quốc.',
        steps: [
            { node: 'business', text: '🏭 Công ty VN xuất 10,000 tấn gạo' },
            { node: 'foreign', text: '🌍 Đối tác TQ trả 5 triệu USD' },
            { node: 'forex', text: '💱 Đổi USD → 120 tỷ VND' },
            { node: 'commercial-bank', text: '🏦 Tiền vào tài khoản công ty' },
            { node: 'business', text: '🏭 Trả nông dân, nhân viên, vận chuyển' },
            { node: 'central-bank', text: '🏛️ Dự trữ ngoại hối tăng' }
        ]
    },
    import: {
        title: 'Nhập khẩu máy móc',
        cat: 'business',
        icon: '📦',
        desc: 'Mua thiết bị từ Đức.',
        steps: [
            { node: 'business', text: '🏭 Cần nhập máy CNC từ Đức, giá 1 triệu EUR' },
            { node: 'commercial-bank', text: '🏦 Mở L/C (thư tín dụng)' },
            { node: 'forex', text: '💱 Mua 1 triệu EUR = 26 tỷ VND' },
            { node: 'foreign', text: '🌍 Nhà sản xuất Đức nhận tiền, gửi máy' },
            { node: 'government', text: '🏢 Đóng thuế nhập khẩu 5%' },
            { node: 'business', text: '🏭 Nhận máy, nâng cao năng suất' }
        ]
    },
    'bond-issue': {
        title: 'Phát hành trái phiếu DN',
        cat: 'business',
        icon: '📜',
        desc: 'Vingroup phát hành 5,000 tỷ trái phiếu.',
        steps: [
            { node: 'business', text: '🏭 Vingroup cần 5,000 tỷ cho dự án mới' },
            { node: 'credit-rating', text: '⭐ Được xếp hạng tín dụng BBB' },
            { node: 'bond-market', text: '📜 Phát hành trái phiếu kỳ hạn 5 năm, lãi 10%' },
            { node: 'investment-fund', text: '💼 Quỹ đầu tư mua 3,000 tỷ' },
            { node: 'individual', text: '👤 NĐT cá nhân mua 2,000 tỷ' },
            { node: 'business', text: '🏭 Mỗi năm trả 500 tỷ lãi, năm 5 trả gốc' }
        ]
    },
    dividend: {
        title: 'Chia cổ tức',
        cat: 'business',
        icon: '💵',
        desc: 'Công ty chia lợi nhuận cho cổ đông.',
        steps: [
            { node: 'business', text: '🏭 Công ty lãi 1,000 tỷ trong năm' },
            { node: 'government', text: '🏢 Nộp thuế TNDN 20% = 200 tỷ' },
            { node: 'business', text: '🏭 Quyết định chia 50% cổ tức = 400 tỷ' },
            { node: 'stock-exchange', text: '📈 Thông báo ngày chốt quyền' },
            { node: 'individual', text: '👤 Cổ đông nhận cổ tức vào tài khoản' },
            { node: 'business', text: '🏭 Giữ lại 400 tỷ tái đầu tư' }
        ]
    },

    // ==================== INVESTMENT (6) ====================
    'stock-invest': {
        title: 'Đầu tư chứng khoán',
        cat: 'investment',
        icon: '📈',
        desc: 'Mua 100 cổ phiếu VNM.',
        steps: [
            { node: 'individual', text: '👤 Mở tài khoản chứng khoán' },
            { node: 'commercial-bank', text: '🏦 Chuyển 10 triệu vào TKCK' },
            { node: 'stock-exchange', text: '📈 Đặt lệnh mua 100 cp VNM giá 80,000' },
            { node: 'stock-exchange', text: '📈 Lệnh khớp, bạn sở hữu 100 cp' },
            { node: 'business', text: '🏭 Vinamilk nhận vốn, bạn là cổ đông' },
            { node: 'individual', text: '👤 Giá lên 90,000 → Lãi 1 triệu (12.5%)' }
        ]
    },
    'fund-invest': {
        title: 'Mua quỹ ETF',
        cat: 'investment',
        icon: '💼',
        desc: 'Đầu tư vào quỹ chỉ số VN30.',
        steps: [
            { node: 'individual', text: '👤 Có 50 triệu muốn đầu tư an toàn' },
            { node: 'investment-fund', text: '💼 Mua chứng chỉ quỹ VFMVN30 ETF' },
            { node: 'investment-fund', text: '💼 Quỹ dùng tiền mua 30 cp lớn nhất' },
            { node: 'stock-exchange', text: '📈 Tự động đa dạng hóa' },
            { node: 'individual', text: '👤 VN30 tăng 15% → Bạn lãi 7.5 triệu' },
            { node: 'investment-fund', text: '💼 Phí quản lý chỉ 0.5%/năm' }
        ]
    },
    'real-estate-invest': {
        title: 'Đầu tư bất động sản',
        cat: 'investment',
        icon: '🏠',
        desc: 'Mua căn hộ cho thuê.',
        steps: [
            { node: 'individual', text: '👤 Mua căn hộ 3 tỷ (có sẵn 1 tỷ, vay 2 tỷ)' },
            { node: 'real-estate', text: '🏠 Nhận bàn giao căn hộ' },
            { node: 'individual', text: '👤 Cho thuê 15 triệu/tháng = 180 triệu/năm' },
            { node: 'commercial-bank', text: '🏦 Trả góp 19 triệu/tháng' },
            { node: 'individual', text: '👤 Thu nhập ròng: 15 - 19 = -4 triệu/tháng' },
            { node: 'real-estate', text: '🏠 Sau 10 năm: Trả hết nợ + Nhà tăng giá 50%' }
        ]
    },
    'gold-invest': {
        title: 'Mua vàng tích trữ',
        cat: 'investment',
        icon: '🥇',
        desc: 'Mua 5 lượng vàng SJC.',
        steps: [
            { node: 'individual', text: '👤 Lo lạm phát, muốn giữ giá trị' },
            { node: 'commodity', text: '🥇 Mua 5 lượng SJC giá 350 triệu' },
            { node: 'individual', text: '👤 Cất trong két an toàn' },
            { node: 'central-bank', text: '🏛️ Tiền trong hệ thống giảm 350 triệu' },
            { node: 'commodity', text: '🥇 2 năm sau vàng tăng 20%' },
            { node: 'individual', text: '👤 Bán được 420 triệu, lãi 70 triệu' }
        ]
    },
    'startup-funding': {
        title: 'Startup gọi vốn',
        cat: 'investment',
        icon: '🚀',
        desc: 'Startup Series A nhận 5 triệu USD.',
        steps: [
            { node: 'startup', text: '🚀 Startup fintech cần vốn mở rộng' },
            { node: 'startup', text: '🚀 Pitch deck, demo sản phẩm' },
            { node: 'investment-fund', text: '💼 VC đánh giá, định giá 20 triệu USD' },
            { node: 'startup', text: '🚀 Nhận 5 triệu USD, bán 25% cổ phần' },
            { node: 'individual', text: '👥 Thuê 50 nhân viên mới' },
            { node: 'startup', text: '🚀 Mở rộng thị trường, tăng trưởng 10x' }
        ]
    },
    fdi: {
        title: 'FDI vào Việt Nam',
        cat: 'investment',
        icon: '🌍',
        desc: 'Samsung đầu tư thêm 2 tỷ USD.',
        steps: [
            { node: 'foreign', text: '🌍 Samsung quyết định mở rộng nhà máy VN' },
            { node: 'forex', text: '💱 Chuyển 2 tỷ USD → 48,000 tỷ VND' },
            { node: 'business', text: '🏭 Xây nhà máy, mua thiết bị' },
            { node: 'individual', text: '👥 Tạo 10,000 việc làm mới' },
            { node: 'government', text: '🏢 Thu thuế, GDP tăng' },
            { node: 'foreign', text: '🌍 Xuất khẩu điện thoại → Thu USD về' }
        ]
    },

    // ==================== CRISIS (7) ====================
    inflation: {
        title: 'Lạm phát tăng cao',
        cat: 'crisis',
        icon: '📈',
        desc: 'Giá cả tăng 10%, tiền mất giá.',
        steps: [
            { node: 'central-bank', text: '🏛️ NHTW in thêm tiền kích thích kinh tế' },
            { node: 'commercial-bank', text: '🏦 Cho vay dễ dàng hơn' },
            { node: 'individual', text: '👤 Nhiều tiền hơn, cầu tăng' },
            { node: 'business', text: '🏭 Giá hàng hóa tăng 10%' },
            { node: 'individual', text: '👤 100 triệu tiết kiệm mất 10% sức mua' },
            { node: 'central-bank', text: '🏛️ Phải tăng lãi suất kiềm chế' }
        ]
    },
    'bank-run': {
        title: 'Rút tiền ồ ạt (Bank Run)',
        cat: 'crisis',
        icon: '🏃',
        desc: 'Tin đồn ngân hàng sập.',
        steps: [
            { node: 'individual', text: '😨 Tin đồn ngân hàng X sắp phá sản' },
            { node: 'commercial-bank', text: '🏦 Người dân đổ xô rút tiền' },
            { node: 'commercial-bank', text: '🏦 NH chỉ có 10% dự trữ, không đủ!' },
            { node: 'central-bank', text: '🏛️ NHTW phải bơm tiền cứu' },
            { node: 'government', text: '🏢 Chính phủ can thiệp, bảo lãnh' },
            { node: 'commercial-bank', text: '🏦 Nếu không cứu kịp → Phá sản, lan sang NH khác' }
        ]
    },
    'stock-crash': {
        title: 'Sập thị trường chứng khoán',
        cat: 'crisis',
        icon: '📉',
        desc: 'VN-Index giảm 30% trong 1 tháng.',
        steps: [
            { node: 'foreign', text: '🌍 Khủng hoảng tài chính toàn cầu' },
            { node: 'investment-fund', text: '💼 Quỹ ngoại bán tháo rút vốn' },
            { node: 'stock-exchange', text: '📉 VN-Index giảm 10% trong 1 ngày' },
            { node: 'individual', text: '😱 NĐT hoảng loạn, bán cắt lỗ' },
            { node: 'stock-exchange', text: '📉 Tiếp tục giảm, tổng -30%' },
            { node: 'business', text: '🏭 Vốn hóa bốc hơi hàng trăm nghìn tỷ' }
        ]
    },
    'currency-crisis': {
        title: 'Khủng hoảng tỷ giá',
        cat: 'crisis',
        icon: '💱',
        desc: 'VND mất giá 20% so với USD.',
        steps: [
            { node: 'foreign', text: '🌍 Dòng vốn ngoại rút ồ ạt' },
            { node: 'forex', text: '💱 Cầu USD tăng vọt' },
            { node: 'central-bank', text: '🏛️ Bán dự trữ ngoại hối cứu tỷ giá' },
            { node: 'forex', text: '💱 Dự trữ cạn, VND mất giá 20%' },
            { node: 'business', text: '🏭 Nợ USD tăng 20%, nhiều DN phá sản' },
            { node: 'individual', text: '👤 Hàng nhập khẩu đắt hơn 20%' }
        ]
    },
    'housing-bubble': {
        title: 'Bong bóng bất động sản',
        cat: 'crisis',
        icon: '🏚️',
        desc: 'Giá nhà tăng rồi sụp đổ.',
        steps: [
            { node: 'commercial-bank', text: '🏦 Cho vay mua nhà dễ dàng' },
            { node: 'real-estate', text: '🏠 Giá nhà tăng 50% trong 2 năm' },
            { node: 'individual', text: '👤 Mọi người vay mua đầu cơ' },
            { node: 'central-bank', text: '🏛️ NHTW tăng lãi suất kiểm soát' },
            { node: 'real-estate', text: '🏚️ Cầu giảm, giá sụp 30%' },
            { node: 'commercial-bank', text: '🏦 Nợ xấu BĐS tăng vọt' }
        ]
    },
    recession: {
        title: 'Suy thoái kinh tế',
        cat: 'crisis',
        icon: '📊',
        desc: 'GDP giảm, thất nghiệp tăng.',
        steps: [
            { node: 'foreign', text: '🌍 Cầu thế giới giảm' },
            { node: 'business', text: '🏭 Đơn hàng giảm, doanh thu sụt' },
            { node: 'business', text: '🏭 Cắt giảm nhân sự' },
            { node: 'individual', text: '😢 Thất nghiệp tăng, thu nhập giảm' },
            { node: 'individual', text: '👤 Chi tiêu giảm → DN khó khăn hơn' },
            { node: 'government', text: '🏢 Thu thuế giảm, phải tăng chi kích thích' }
        ]
    },
    'debt-crisis': {
        title: 'Khủng hoảng nợ công',
        cat: 'crisis',
        icon: '💀',
        desc: 'Chính phủ không trả được nợ.',
        steps: [
            { node: 'government', text: '🏢 Nợ công > 100% GDP' },
            { node: 'credit-rating', text: '⭐ Bị hạ tín nhiệm xuống "Junk"' },
            { node: 'bond-market', text: '📜 Lãi suất trái phiếu tăng vọt' },
            { node: 'government', text: '🏢 Không thể vay thêm, không trả được nợ' },
            { node: 'foreign', text: '🌍 IMF/WB phải cứu trợ' },
            { node: 'individual', text: '😢 Thắt lưng buộc bụng, cắt giảm phúc lợi' }
        ]
    },

    // ==================== MODERN (6) ====================
    'crypto-invest': {
        title: 'Mua Bitcoin',
        cat: 'modern',
        icon: '₿',
        desc: 'Đầu tư 50 triệu vào crypto.',
        steps: [
            { node: 'individual', text: '👤 Đăng ký sàn Binance' },
            { node: 'fintech', text: '📱 Chuyển 50 triệu qua P2P' },
            { node: 'crypto', text: '₿ Mua 0.05 BTC giá 1 tỷ/BTC' },
            { node: 'crypto', text: '₿ Lưu trong ví lạnh an toàn' },
            { node: 'crypto', text: '₿ 1 năm sau BTC tăng 100%' },
            { node: 'individual', text: '👤 Bán, thu 100 triệu, lãi 50 triệu' }
        ]
    },
    ewallet: {
        title: 'Thanh toán ví điện tử',
        cat: 'modern',
        icon: '📱',
        desc: 'Dùng MoMo, ZaloPay hàng ngày.',
        steps: [
            { node: 'individual', text: '👤 Nạp 1 triệu từ tài khoản NH vào MoMo' },
            { node: 'fintech', text: '📱 MoMo nhận tiền, ghi số dư' },
            { node: 'individual', text: '👤 Quét QR mua trà sữa 50k' },
            { node: 'fintech', text: '📱 MoMo chuyển tiền cho quán' },
            { node: 'business', text: '🏭 Quán nhận tiền (trừ 1% phí)' },
            { node: 'fintech', text: '📱 MoMo thu phí, đầu tư số dư sinh lời' }
        ]
    },
    'p2p-lending': {
        title: 'Vay P2P Online',
        cat: 'modern',
        icon: '🤝',
        desc: 'Vay tiền qua app, lãi suất cao.',
        steps: [
            { node: 'individual', text: '👤 Cần 10 triệu gấp, NH từ chối' },
            { node: 'shadow-banking', text: '🌑 Vay qua app P2P, lãi 3%/tháng' },
            { node: 'individual', text: '👤 Nhận tiền trong 30 phút' },
            { node: 'shadow-banking', text: '🌑 App kết nối với NĐT cho vay' },
            { node: 'individual', text: '👤 Trả 10.9 triệu sau 1 tháng' },
            { node: 'individual', text: '⚠️ Lãi suất thực 36%/năm, rất cao!' }
        ]
    },
    crowdfunding: {
        title: 'Gọi vốn cộng đồng',
        cat: 'modern',
        icon: '🎯',
        desc: 'Crowdfunding cho dự án mới.',
        steps: [
            { node: 'startup', text: '🚀 Startup có ý tưởng sản phẩm mới' },
            { node: 'fintech', text: '📱 Đăng dự án lên Kickstarter' },
            { node: 'individual', text: '👥 1000 người đóng góp 1 triệu/người' },
            { node: 'startup', text: '🚀 Thu được 1 tỷ để sản xuất' },
            { node: 'business', text: '🏭 Sản xuất sản phẩm' },
            { node: 'individual', text: '👤 Người đóng góp nhận sản phẩm đầu tiên' }
        ]
    },
    defi: {
        title: 'DeFi - Tài chính phi tập trung',
        cat: 'modern',
        icon: '🔗',
        desc: 'Staking, Yield Farming.',
        steps: [
            { node: 'individual', text: '👤 Có 1 ETH (khoảng 80 triệu)' },
            { node: 'crypto', text: '₿ Kết nối ví MetaMask với Aave' },
            { node: 'crypto', text: '₿ Gửi ETH làm tài sản thế chấp' },
            { node: 'crypto', text: '₿ Vay 50% giá trị = stablecoin USDC' },
            { node: 'crypto', text: '₿ Đem USDC stake lấy 10% APY' },
            { node: 'individual', text: '⚠️ Rủi ro: Smart contract bị hack!' }
        ]
    },
    cbdc: {
        title: 'Tiền kỹ thuật số NHTW (CBDC)',
        cat: 'modern',
        icon: '🏛️',
        desc: 'Tương lai của tiền tệ.',
        steps: [
            { node: 'central-bank', text: '🏛️ NHNN phát hành VND số' },
            { node: 'commercial-bank', text: '🏦 Ngân hàng phân phối cho dân' },
            { node: 'individual', text: '👤 Nhận VND số vào ví NHTW' },
            { node: 'fintech', text: '📱 Thanh toán trực tiếp, không qua trung gian' },
            { node: 'government', text: '🏢 Theo dõi được mọi giao dịch, chống rửa tiền' },
            { node: 'commercial-bank', text: '⚠️ NH thương mại có thể mất vai trò' }
        ]
    }
};

// ==================== TOUR STEPS ====================

const tourSteps = [
    { target: null, title: 'Chào mừng! 👋', description: 'Khám phá hệ thống tiền tệ với 20 thành phần và 30+ kịch bản thực tế!' },
    { target: 'central-bank', title: '① Ngân Hàng Trung Ương', description: 'Nơi tiền được "sinh ra". NHTW in tiền và đưa vào hệ thống.' },
    { target: 'commercial-bank', title: '② Ngân Hàng Thương Mại', description: 'Nhân bản tiền gấp 10 lần thông qua cho vay!' },
    { target: 'government', title: '③ Chính Phủ', description: 'Thu thuế và chi tiêu cho dịch vụ công.' },
    { target: 'business', title: '④ Doanh Nghiệp', description: 'Động cơ của nền kinh tế, tạo việc làm.' },
    { target: 'individual', title: '⑤ Người Dân', description: 'Bạn và tôi - làm việc, tiêu dùng, đầu tư.' },
    { target: 'foreign', title: '⑥ Quốc Tế', description: 'Xuất nhập khẩu, FDI, kiều hối.' },
    { target: 'stock-exchange', title: '⑦ Sàn Chứng Khoán', description: 'Mua bán cổ phiếu, huy động vốn cho doanh nghiệp.' },
    { target: 'investment-fund', title: '⑧ Quỹ Đầu Tư', description: 'Gom tiền nhiều người, thuê chuyên gia đầu tư.' },
    { target: 'consumer-finance', title: '⑨ Tín Dụng Tiêu Dùng', description: 'Thẻ tín dụng, trả góp - lãi suất cao!' },
    { target: 'shadow-banking', title: '⑩ Shadow Banking', description: 'Cho vay ngoài hệ thống, rủi ro cao.' },
    { target: 'bond-market', title: '⑪ Thị Trường Trái Phiếu', description: 'Mua bán giấy nợ của chính phủ và doanh nghiệp.' },
    { target: 'real-estate', title: '⑫ Bất Động Sản', description: 'Thị trường nhà đất, đầu tư lớn.' },
    { target: 'commodity', title: '⑬ Hàng Hóa', description: 'Vàng, dầu, nông sản - hedge chống lạm phát.' },
    { target: 'forex', title: '⑭ Forex', description: 'Thị trường ngoại hối lớn nhất thế giới.' },
    { target: 'insurance', title: '⑮ Bảo Hiểm', description: 'Bảo vệ rủi ro, đóng ít nhận nhiều khi cần.' },
    { target: 'pension-fund', title: '⑯ Quỹ Hưu Trí', description: 'Tiết kiệm cho tuổi già.' },
    { target: 'credit-rating', title: '⑰ Xếp Hạng Tín Dụng', description: 'Đánh giá khả năng trả nợ.' },
    { target: 'fintech', title: '⑱ Fintech', description: 'Công nghệ tài chính: ví điện tử, thanh toán số.' },
    { target: 'crypto', title: '⑲ Crypto', description: 'Tiền điện tử, blockchain, DeFi.' },
    { target: 'startup', title: '⑳ Startup & VC', description: 'Khởi nghiệp và vốn mạo hiểm.' },
    { target: null, title: 'Hoàn thành! 🎉', description: 'Bây giờ hãy khám phá các kịch bản thực tế!' }
];

// ==================== STATE ====================
let currentLevel = 'beginner';
let currentTourStep = 0;
let isTourActive = false;
let isStoryPlaying = false;
let currentScenario = null;
let currentScenarioStep = 0;
let currentComponentId = null;

// ==================== DOM ELEMENTS ====================
const levelOverlay = document.getElementById('levelOverlay');
const levelBadge = document.getElementById('levelBadge');
const tourProgress = document.getElementById('tourProgress');
const tourPanel = document.getElementById('tourPanel');
const progressFill = document.getElementById('progressFill');
const modal = document.getElementById('modal');
const scenarioModal = document.getElementById('scenarioModal');
const simulatorModal = document.getElementById('simulatorModal');
const storyNarration = document.getElementById('storyNarration');
const nodes = document.querySelectorAll('.node');

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
    const savedLevel = localStorage.getItem('moneyFlowLevel');
    if (savedLevel) {
        currentLevel = savedLevel;
        levelOverlay.classList.add('hidden');
        updateLevelBadge();
    }

    setupEventListeners();
    renderScenarios();
    renderSimulators();
});

function setupEventListeners() {
    // Level selection
    document.querySelectorAll('.level-card').forEach(card => {
        card.addEventListener('click', () => {
            currentLevel = card.dataset.level;
            localStorage.setItem('moneyFlowLevel', currentLevel);
            levelOverlay.classList.add('hidden');
            updateLevelBadge();
            if (currentLevel === 'beginner') setTimeout(() => startTour(), 500);
        });
    });

    // Header buttons
    document.getElementById('changeLevelBtn').addEventListener('click', () => levelOverlay.classList.remove('hidden'));
    document.getElementById('startTourBtn').addEventListener('click', startTour);
    document.getElementById('scenarioBtn').addEventListener('click', () => scenarioModal.classList.add('active'));
    document.getElementById('simulatorBtn').addEventListener('click', () => simulatorModal.classList.add('active'));

    // Tour navigation
    document.getElementById('tourPrev').addEventListener('click', prevTourStep);
    document.getElementById('tourNext').addEventListener('click', nextTourStep);
    document.getElementById('tourSkip').addEventListener('click', endTour);

    // Category filter
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filterNodes(btn.dataset.category);
        });
    });

    // Nodes click
    nodes.forEach(node => {
        node.addEventListener('click', () => showComponentModal(node.dataset.component));
    });

    // Close modals
    document.getElementById('closeModal').addEventListener('click', closeModal);
    document.getElementById('closeScenario').addEventListener('click', () => scenarioModal.classList.remove('active'));
    document.getElementById('closeSimulator').addEventListener('click', () => simulatorModal.classList.remove('active'));

    // Modal overlay click
    [modal, scenarioModal, simulatorModal].forEach(m => {
        m.addEventListener('click', (e) => { if (e.target === m) m.classList.remove('active'); });
    });

    // Modal tabs
    document.querySelectorAll('.level-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.level-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            tab.classList.add('active');
            document.querySelector(`[data-content="${tab.dataset.tab}"]`).classList.add('active');
        });
    });

    // Modal navigation
    document.getElementById('modalPrev').addEventListener('click', showPrevComponent);
    document.getElementById('modalNext').addEventListener('click', showNextComponent);

    // Scenario category filter
    document.querySelectorAll('.scenario-cat-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.scenario-cat-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filterScenarios(btn.dataset.cat);
        });
    });

    // Action buttons
    document.getElementById('playStoryBtn').addEventListener('click', playMoneyStory);
    document.getElementById('showConnectionsBtn').addEventListener('click', toggleConnections);
    document.getElementById('resetViewBtn').addEventListener('click', resetView);

    // Keyboard
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
            scenarioModal.classList.remove('active');
            simulatorModal.classList.remove('active');
            if (isTourActive) endTour();
        }
    });

    // Simulator tabs
    document.querySelectorAll('.sim-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.sim-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.simulator-panel').forEach(p => p.classList.remove('active'));
            tab.classList.add('active');
            document.querySelector(`[data-panel="${tab.dataset.sim}"]`).classList.add('active');
        });
    });
}

// ==================== RENDER FUNCTIONS ====================

function renderScenarios() {
    const container = document.getElementById('scenarioList');
    container.innerHTML = '';
    
    Object.entries(scenarios).forEach(([id, scenario]) => {
        const card = document.createElement('div');
        card.className = 'scenario-card';
        card.dataset.scenario = id;
        card.dataset.cat = scenario.cat;
        card.innerHTML = `
            <div class="scenario-icon">${scenario.icon}</div>
            <h3>${scenario.title}</h3>
            <p>${scenario.desc}</p>
        `;
        card.addEventListener('click', () => startScenario(id));
        container.appendChild(card);
    });
}

function renderSimulators() {
    const container = document.getElementById('simulatorPanels');
    container.innerHTML = `
        <div class="simulator-panel active" data-panel="money-multiplier">
            <p class="simulator-intro">Xem cách ngân hàng "tạo ra" tiền từ tiền gửi của bạn</p>
            <div class="simulator-inputs">
                <div class="input-group">
                    <label>💵 Số tiền gửi ban đầu:</label>
                    <input type="number" id="depositAmount" value="100000000">
                    <span>VND</span>
                </div>
                <div class="input-group">
                    <label>📊 Tỷ lệ dự trữ bắt buộc:</label>
                    <input type="range" id="reserveRatio" value="10" min="1" max="50">
                    <span id="reserveValue">10%</span>
                </div>
                <button class="simulate-btn" onclick="runMoneyMultiplier()">🚀 Mô phỏng</button>
            </div>
            <div class="simulator-result" id="multiplierResult"></div>
        </div>
        
        <div class="simulator-panel" data-panel="compound-interest">
            <p class="simulator-intro">Sức mạnh của lãi kép theo thời gian</p>
            <div class="simulator-inputs">
                <div class="input-group">
                    <label>💵 Số tiền ban đầu:</label>
                    <input type="number" id="principalAmount" value="100000000">
                    <span>VND</span>
                </div>
                <div class="input-group">
                    <label>💰 Đóng thêm hàng tháng:</label>
                    <input type="number" id="monthlyAdd" value="5000000">
                    <span>VND</span>
                </div>
                <div class="input-group">
                    <label>📈 Lãi suất/năm:</label>
                    <input type="range" id="interestRate" value="8" min="1" max="20">
                    <span id="interestValue">8%</span>
                </div>
                <div class="input-group">
                    <label>📅 Số năm:</label>
                    <input type="range" id="investYears" value="20" min="1" max="40">
                    <span id="yearsValue">20 năm</span>
                </div>
                <button class="simulate-btn" onclick="runCompoundInterest()">🚀 Tính lãi kép</button>
            </div>
            <div class="simulator-result" id="compoundResult"></div>
        </div>
        
        <div class="simulator-panel" data-panel="loan-calculator">
            <p class="simulator-intro">Tính toán khoản vay mua nhà/xe</p>
            <div class="simulator-inputs">
                <div class="input-group">
                    <label>💵 Số tiền vay:</label>
                    <input type="number" id="loanAmount" value="2000000000">
                    <span>VND</span>
                </div>
                <div class="input-group">
                    <label>📈 Lãi suất/năm:</label>
                    <input type="range" id="loanRate" value="10" min="5" max="25">
                    <span id="loanRateValue">10%</span>
                </div>
                <div class="input-group">
                    <label>📅 Thời hạn vay:</label>
                    <input type="range" id="loanYears" value="20" min="1" max="30">
                    <span id="loanYearsValue">20 năm</span>
                </div>
                <button class="simulate-btn" onclick="runLoanCalculator()">🚀 Tính khoản vay</button>
            </div>
            <div class="simulator-result" id="loanResult"></div>
        </div>
        
        <div class="simulator-panel" data-panel="inflation">
            <p class="simulator-intro">Tiền của bạn mất giá như thế nào?</p>
            <div class="simulator-inputs">
                <div class="input-group">
                    <label>💵 Số tiền hiện tại:</label>
                    <input type="number" id="inflationAmount" value="1000000000">
                    <span>VND</span>
                </div>
                <div class="input-group">
                    <label>📈 Lạm phát/năm:</label>
                    <input type="range" id="inflationRate" value="4" min="1" max="20">
                    <span id="inflationRateValue">4%</span>
                </div>
                <div class="input-group">
                    <label>📅 Sau bao nhiêu năm:</label>
                    <input type="range" id="inflationYears" value="10" min="1" max="30">
                    <span id="inflationYearsValue">10 năm</span>
                </div>
                <button class="simulate-btn" onclick="runInflationCalculator()">🚀 Tính sức mua</button>
            </div>
            <div class="simulator-result" id="inflationResult"></div>
        </div>
    `;

    // Add range input listeners
    document.getElementById('reserveRatio').addEventListener('input', (e) => {
        document.getElementById('reserveValue').textContent = e.target.value + '%';
    });
    document.getElementById('interestRate').addEventListener('input', (e) => {
        document.getElementById('interestValue').textContent = e.target.value + '%';
    });
    document.getElementById('investYears').addEventListener('input', (e) => {
        document.getElementById('yearsValue').textContent = e.target.value + ' năm';
    });
    document.getElementById('loanRate').addEventListener('input', (e) => {
        document.getElementById('loanRateValue').textContent = e.target.value + '%';
    });
    document.getElementById('loanYears').addEventListener('input', (e) => {
        document.getElementById('loanYearsValue').textContent = e.target.value + ' năm';
    });
    document.getElementById('inflationRate').addEventListener('input', (e) => {
        document.getElementById('inflationRateValue').textContent = e.target.value + '%';
    });
    document.getElementById('inflationYears').addEventListener('input', (e) => {
        document.getElementById('inflationYearsValue').textContent = e.target.value + ' năm';
    });
}

// ==================== SIMULATOR FUNCTIONS ====================

function formatMoney(num) {
    return new Intl.NumberFormat('vi-VN').format(Math.round(num)) + ' VND';
}

function runMoneyMultiplier() {
    const deposit = parseInt(document.getElementById('depositAmount').value);
    const ratio = parseInt(document.getElementById('reserveRatio').value) / 100;
    const multiplier = 1 / ratio;
    const total = deposit * multiplier;
    
    document.getElementById('multiplierResult').innerHTML = `
        <div class="result-item"><span class="result-label">Tiền gửi ban đầu:</span><span class="result-value">${formatMoney(deposit)}</span></div>
        <div class="result-item"><span class="result-label">Tỷ lệ dự trữ:</span><span class="result-value">${ratio * 100}%</span></div>
        <div class="result-item"><span class="result-label">Hệ số nhân tiền:</span><span class="result-value">${multiplier.toFixed(1)}x</span></div>
        <div class="result-item highlight"><span class="result-label">Tổng tiền tạo ra:</span><span class="result-value">${formatMoney(total)}</span></div>
        <div class="result-explanation">
            <strong>Giải thích:</strong> Với dự trữ ${ratio * 100}%, mỗi khi gửi tiền, NH giữ ${ratio * 100}% và cho vay ${(1-ratio) * 100}%. 
            Quá trình lặp lại tạo ra ${formatMoney(total)} từ ${formatMoney(deposit)} ban đầu!
        </div>
    `;
}

function runCompoundInterest() {
    const principal = parseInt(document.getElementById('principalAmount').value);
    const monthly = parseInt(document.getElementById('monthlyAdd').value);
    const rate = parseInt(document.getElementById('interestRate').value) / 100;
    const years = parseInt(document.getElementById('investYears').value);
    
    let total = principal;
    let totalContrib = principal;
    for (let i = 0; i < years * 12; i++) {
        total = total * (1 + rate / 12) + monthly;
        totalContrib += monthly;
    }
    const interest = total - totalContrib;
    
    document.getElementById('compoundResult').innerHTML = `
        <div class="result-item"><span class="result-label">Vốn góp:</span><span class="result-value">${formatMoney(principal)}</span></div>
        <div class="result-item"><span class="result-label">Đóng thêm:</span><span class="result-value">${formatMoney(monthly)}/tháng × ${years * 12} tháng</span></div>
        <div class="result-item"><span class="result-label">Tổng đã đóng:</span><span class="result-value">${formatMoney(totalContrib)}</span></div>
        <div class="result-item"><span class="result-label">Lãi nhận được:</span><span class="result-value">${formatMoney(interest)}</span></div>
        <div class="result-item highlight"><span class="result-label">Tổng sau ${years} năm:</span><span class="result-value">${formatMoney(total)}</span></div>
        <div class="result-explanation">
            <strong>Sức mạnh lãi kép:</strong> Đóng ${formatMoney(totalContrib)}, nhận thêm ${formatMoney(interest)} tiền lãi! 
            Lãi suất ${rate * 100}%/năm kép trong ${years} năm.
        </div>
    `;
}

function runLoanCalculator() {
    const loan = parseInt(document.getElementById('loanAmount').value);
    const rate = parseInt(document.getElementById('loanRate').value) / 100 / 12;
    const months = parseInt(document.getElementById('loanYears').value) * 12;
    
    const monthlyPayment = loan * rate * Math.pow(1 + rate, months) / (Math.pow(1 + rate, months) - 1);
    const totalPayment = monthlyPayment * months;
    const totalInterest = totalPayment - loan;
    
    document.getElementById('loanResult').innerHTML = `
        <div class="result-item"><span class="result-label">Số tiền vay:</span><span class="result-value">${formatMoney(loan)}</span></div>
        <div class="result-item"><span class="result-label">Trả góp hàng tháng:</span><span class="result-value">${formatMoney(monthlyPayment)}</span></div>
        <div class="result-item"><span class="result-label">Tổng tiền lãi:</span><span class="result-value">${formatMoney(totalInterest)}</span></div>
        <div class="result-item highlight"><span class="result-label">Tổng phải trả:</span><span class="result-value">${formatMoney(totalPayment)}</span></div>
        <div class="result-explanation">
            <strong>Lưu ý:</strong> Vay ${formatMoney(loan)} nhưng phải trả tổng ${formatMoney(totalPayment)}. 
            Tiền lãi ${formatMoney(totalInterest)} = ${((totalInterest / loan) * 100).toFixed(0)}% số tiền vay!
        </div>
    `;
}

function runInflationCalculator() {
    const amount = parseInt(document.getElementById('inflationAmount').value);
    const rate = parseInt(document.getElementById('inflationRate').value) / 100;
    const years = parseInt(document.getElementById('inflationYears').value);
    
    const futureValue = amount / Math.pow(1 + rate, years);
    const lostValue = amount - futureValue;
    
    document.getElementById('inflationResult').innerHTML = `
        <div class="result-item"><span class="result-label">Số tiền hiện tại:</span><span class="result-value">${formatMoney(amount)}</span></div>
        <div class="result-item"><span class="result-label">Lạm phát:</span><span class="result-value">${rate * 100}%/năm × ${years} năm</span></div>
        <div class="result-item"><span class="result-label">Giá trị mất đi:</span><span class="result-value" style="color:#e74c3c">${formatMoney(lostValue)}</span></div>
        <div class="result-item highlight"><span class="result-label">Sức mua còn lại:</span><span class="result-value">${formatMoney(futureValue)}</span></div>
        <div class="result-explanation">
            <strong>Cảnh báo:</strong> ${formatMoney(amount)} hôm nay chỉ mua được hàng hóa tương đương ${formatMoney(futureValue)} sau ${years} năm! 
            Bạn mất ${((lostValue / amount) * 100).toFixed(0)}% sức mua nếu chỉ để tiền mặt.
        </div>
    `;
}

// ==================== LEVEL ====================
function updateLevelBadge() {
    const badges = { beginner: '🌱 Người Mới', intermediate: '🌿 Trung Cấp', advanced: '🌳 Nâng Cao' };
    levelBadge.textContent = badges[currentLevel];
}

// ==================== TOUR ====================
function startTour() {
    isTourActive = true;
    currentTourStep = 0;
    tourProgress.classList.add('active');
    tourPanel.classList.add('active');
    updateTourStep();
}

function updateTourStep() {
    const step = tourSteps[currentTourStep];
    document.getElementById('currentStep').textContent = currentTourStep + 1;
    document.getElementById('totalSteps').textContent = tourSteps.length;
    document.getElementById('tourTitle').textContent = step.title;
    document.getElementById('tourDescription').textContent = step.description;
    progressFill.style.width = ((currentTourStep + 1) / tourSteps.length * 100) + '%';

    nodes.forEach(node => {
        node.classList.remove('highlighted', 'dimmed');
        if (step.target) {
            if (node.dataset.component === step.target) node.classList.add('highlighted');
            else node.classList.add('dimmed');
        }
    });

    document.getElementById('tourPrev').style.visibility = currentTourStep === 0 ? 'hidden' : 'visible';
    document.getElementById('tourNext').textContent = currentTourStep === tourSteps.length - 1 ? 'Hoàn thành ✓' : 'Tiếp theo →';
}

function nextTourStep() {
    if (currentTourStep < tourSteps.length - 1) { currentTourStep++; updateTourStep(); }
    else endTour();
}

function prevTourStep() {
    if (currentTourStep > 0) { currentTourStep--; updateTourStep(); }
}

function endTour() {
    isTourActive = false;
    tourProgress.classList.remove('active');
    tourPanel.classList.remove('active');
    nodes.forEach(node => node.classList.remove('highlighted', 'dimmed'));
}

// ==================== FILTER ====================
function filterNodes(category) {
    nodes.forEach(node => {
        if (category === 'all' || node.dataset.category === category) {
            node.classList.remove('hidden');
        } else {
            node.classList.add('hidden');
        }
    });
}

function filterScenarios(cat) {
    document.querySelectorAll('.scenario-card').forEach(card => {
        if (cat === 'all' || card.dataset.cat === cat) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
}

// ==================== COMPONENT MODAL ====================
function showComponentModal(componentId) {
    currentComponentId = componentId;
    const data = componentData[componentId];
    if (!data) return;

    document.getElementById('modalIcon').textContent = data.icon;
    document.getElementById('modalTitle').textContent = data.title;
    
    document.querySelector('[data-content="simple"]').innerHTML = data.simple;
    document.querySelector('[data-content="detail"]').innerHTML = data.detail;
    document.querySelector('[data-content="advanced"]').innerHTML = data.advanced;

    const tabMap = { beginner: 'simple', intermediate: 'detail', advanced: 'advanced' };
    document.querySelectorAll('.level-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    document.querySelector(`[data-tab="${tabMap[currentLevel]}"]`).classList.add('active');
    document.querySelector(`[data-content="${tabMap[currentLevel]}"]`).classList.add('active');

    // Connections
    const connList = document.getElementById('connectionsList');
    connList.innerHTML = '';
    data.connections.forEach(connId => {
        const connData = componentData[connId];
        if (connData) {
            const tag = document.createElement('span');
            tag.className = 'connection-tag';
            tag.textContent = connData.icon + ' ' + connData.title;
            tag.addEventListener('click', () => showComponentModal(connId));
            connList.appendChild(tag);
        }
    });

    const keyPointsContainer = document.getElementById('keyPoints');
    keyPointsContainer.innerHTML = '';
    data.keyPoints.forEach(point => {
        const span = document.createElement('span');
        span.className = 'key-point';
        span.textContent = point;
        keyPointsContainer.appendChild(span);
    });

    modal.classList.add('active');
}

function closeModal() { modal.classList.remove('active'); }

function showPrevComponent() {
    const keys = Object.keys(componentData).sort((a, b) => componentData[a].order - componentData[b].order);
    const idx = keys.indexOf(currentComponentId);
    showComponentModal(keys[(idx - 1 + keys.length) % keys.length]);
}

function showNextComponent() {
    const keys = Object.keys(componentData).sort((a, b) => componentData[a].order - componentData[b].order);
    const idx = keys.indexOf(currentComponentId);
    showComponentModal(keys[(idx + 1) % keys.length]);
}

// ==================== SCENARIOS ====================
function startScenario(scenarioId) {
    currentScenario = scenarios[scenarioId];
    currentScenarioStep = 0;
    scenarioModal.classList.remove('active');
    playScenarioStep();
}

function playScenarioStep() {
    if (!currentScenario || currentScenarioStep >= currentScenario.steps.length) {
        endScenario();
        return;
    }

    const step = currentScenario.steps[currentScenarioStep];
    storyNarration.classList.add('active');
    document.getElementById('storyText').textContent = step.text;

    nodes.forEach(node => {
        node.classList.remove('highlighted', 'dimmed');
        if (node.dataset.component === step.node) node.classList.add('highlighted');
        else node.classList.add('dimmed');
    });

    setTimeout(() => { currentScenarioStep++; playScenarioStep(); }, 3500);
}

function endScenario() {
    storyNarration.classList.remove('active');
    nodes.forEach(node => node.classList.remove('highlighted', 'dimmed'));
    currentScenario = null;
}

// ==================== STORY MODE ====================
function playMoneyStory() {
    const btn = document.getElementById('playStoryBtn');
    if (isStoryPlaying) { stopMoneyStory(); return; }

    isStoryPlaying = true;
    btn.classList.add('active');

    const storySteps = [
        { node: 'central-bank', text: '🏛️ Ngân hàng trung ương tạo tiền mới...' },
        { node: 'commercial-bank', text: '🏦 Tiền đến ngân hàng thương mại, nhân lên 10 lần...' },
        { node: 'business', text: '🏭 Doanh nghiệp vay tiền sản xuất...' },
        { node: 'individual', text: '👥 Trả lương cho người lao động...' },
        { node: 'consumer-finance', text: '💳 Người dân quẹt thẻ mua sắm...' },
        { node: 'stock-exchange', text: '📈 Một phần đầu tư vào chứng khoán...' },
        { node: 'real-estate', text: '🏠 Một phần mua bất động sản...' },
        { node: 'insurance', text: '🛡️ Một phần mua bảo hiểm...' },
        { node: 'government', text: '🏢 Nộp thuế cho chính phủ...' },
        { node: 'foreign', text: '🌍 Một phần ra nước ngoài qua nhập khẩu...' },
        { node: 'fintech', text: '📱 Thanh toán qua ví điện tử...' },
        { node: 'crypto', text: '₿ Một số người mua Bitcoin...' }
    ];

    let stepIndex = 0;
    const playStep = () => {
        if (!isStoryPlaying) { stopMoneyStory(); return; }
        if (stepIndex >= storySteps.length) stepIndex = 0;

        const step = storySteps[stepIndex];
        storyNarration.classList.add('active');
        document.getElementById('storyText').textContent = step.text;

        nodes.forEach(node => {
            node.classList.remove('highlighted');
            if (node.dataset.component === step.node) node.classList.add('highlighted');
        });

        stepIndex++;
        setTimeout(playStep, 2500);
    };

    playStep();
}

function stopMoneyStory() {
    isStoryPlaying = false;
    document.getElementById('playStoryBtn').classList.remove('active');
    storyNarration.classList.remove('active');
    nodes.forEach(node => node.classList.remove('highlighted'));
}

function toggleConnections() {
    const btn = document.getElementById('showConnectionsBtn');
    btn.classList.toggle('active');
    // Could add visual connection lines here
}

function resetView() {
    stopMoneyStory();
    endScenario();
    nodes.forEach(node => node.classList.remove('highlighted', 'dimmed', 'hidden'));
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    document.querySelector('[data-category="all"]').classList.add('active');
    document.getElementById('showConnectionsBtn').classList.remove('active');
}

console.log('%c💰 Hiểu Hết Về Tiền', 'font-size: 24px; font-weight: bold; color: #f39c12;');
console.log('%c20 Components | 30+ Scenarios | 4 Simulators', 'font-size: 14px; color: #3498db;');
