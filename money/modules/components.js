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

// ==================== ASSET STRUCTURE DATA ====================

const assetStructureData = {
    'central-bank': {
        lead: 'Bảng cân đối của ngân hàng trung ương chủ yếu phản ánh công cụ điều tiết tiền tệ, ổn định hệ thống và giữ niềm tin vào đồng tiền.',
        items: [
            { label: 'Trái phiếu CP & OMO', share: 45, detail: 'Đây là kho tài sản để bơm hoặc hút thanh khoản. Khi mua vào, dự trữ của ngân hàng thương mại tăng; khi bán ra, tiền bị hút ngược về.' },
            { label: 'Dự trữ ngoại hối & vàng', share: 30, detail: 'Lớp đệm để can thiệp tỷ giá, trấn an thị trường khi có áp lực lên đồng nội tệ hoặc dòng vốn rút ra.' },
            { label: 'Tái cấp vốn cho NH', share: 15, detail: 'Khoản cho vay tới hệ ngân hàng khi cần cứu thanh khoản hoặc hỗ trợ kênh tín dụng truyền dẫn.' },
            { label: 'Tài sản khác', share: 10, detail: 'Bao gồm hạ tầng thanh toán, tài sản vận hành và các khoản mục kế toán khác liên quan đến chính sách.' }
        ],
        takeaways: [
            'Nếu phần trái phiếu và tái cấp vốn tăng nhanh, ngân hàng trung ương đang hỗ trợ hệ thống mạnh hơn bình thường.',
            'Dự trữ ngoại hối dày lên thường giúp thị trường bình tĩnh hơn với rủi ro tỷ giá.'
        ],
        note: 'Tỷ trọng chỉ để mô tả logic bảng cân đối của một NHTW điển hình, không phải số công bố của một quốc gia cụ thể.'
    },
    'commercial-bank': {
        lead: 'Ngân hàng thương mại kiếm tiền chủ yếu bằng cách biến tiền gửi ngắn hạn thành các khoản cho vay và danh mục sinh lãi dài hơn.',
        items: [
            { label: 'Cho vay khách hàng', share: 55, detail: 'Khoản lớn nhất vì đây là động cơ tạo lợi nhuận. Chất lượng tài sản ở đây quyết định trực tiếp nợ xấu và lợi nhuận ngân hàng.' },
            { label: 'Trái phiếu & giấy tờ có giá', share: 18, detail: 'Danh mục vừa để kiếm lãi, vừa làm tài sản thanh khoản có thể cầm cố hoặc bán khi cần tiền mặt.' },
            { label: 'Dự trữ tại NHTW', share: 15, detail: 'Là lớp đệm bắt buộc và là nguồn thanh khoản an toàn nhất để xử lý nhu cầu rút tiền, thanh toán liên ngân hàng.' },
            { label: 'Tiền mặt & tài sản khác', share: 12, detail: 'Gồm tiền mặt, tài sản cố định, phần mềm, phải thu và các khoản vận hành khác không sinh lãi nhiều.' }
        ],
        takeaways: [
            'Tỷ trọng cho vay quá lớn giúp lợi nhuận cao nhưng làm ngân hàng nhạy hơn với suy thoái và nợ xấu.',
            'Danh mục thanh khoản càng mỏng, ngân hàng càng dễ chịu áp lực khi khách hàng rút tiền hàng loạt.'
        ],
        note: 'Đọc cơ cấu này như một ảnh chụp nhanh của mô hình kinh doanh ngân hàng: kiếm lãi từ tín dụng nhưng sống nhờ niềm tin thanh khoản.'
    },
    'government': {
        lead: 'Tài sản của chính phủ không chỉ là tiền trong kho bạc mà còn là hạ tầng, đất đai, quyền khai thác và vốn góp vào các tổ chức kinh tế.',
        items: [
            { label: 'Hạ tầng công', share: 45, detail: 'Đường, cầu, cảng, điện, nước, bệnh viện, trường học. Đây là lớp tài sản nâng năng suất toàn nền kinh tế.' },
            { label: 'Đất đai & tài nguyên', share: 25, detail: 'Nguồn lực dài hạn gắn với quyền sử dụng đất, tài nguyên khoáng sản, mặt nước và nhiều quyền khai thác khác.' },
            { label: 'Ngân quỹ & dự trữ', share: 15, detail: 'Tiền mặt và quỹ dự phòng để chi trả lương, trợ cấp, giải ngân đầu tư công, xử lý biến cố tài khóa.' },
            { label: 'Vốn góp, DNNN', share: 15, detail: 'Phần sở hữu trong doanh nghiệp nhà nước, ngân hàng chính sách và các định chế công khác.' }
        ],
        takeaways: [
            'Chính phủ có thể nhiều tài sản nhưng vẫn thiếu tiền mặt ngắn hạn nếu dòng thu thuế yếu hoặc chi đầu tư tăng đột ngột.',
            'Hạ tầng tốt không chỉ là tài sản cố định mà còn là nền để doanh nghiệp và người dân tạo thêm thu nhập trong tương lai.'
        ],
        note: 'Cơ cấu này phản ánh “của để làm việc” của khu vực công, không phải báo cáo thu chi ngân sách trong một năm.'
    },
    'business': {
        lead: 'Doanh nghiệp giữ tài sản để biến vốn thành sản phẩm, doanh thu và dòng tiền. Cơ cấu nào nặng vốn cố định hay tồn kho sẽ quyết định sức bền của công ty.',
        items: [
            { label: 'Nhà xưởng & máy móc', share: 35, detail: 'Đây là năng lực sản xuất cứng. Khi đầu tư mạnh vào phần này, doanh nghiệp tăng công suất nhưng cũng gánh khấu hao lớn.' },
            { label: 'Hàng tồn kho', share: 20, detail: 'Tồn kho là tiền bị giam trong nguyên vật liệu và thành phẩm. Quản trị tồn kho kém sẽ ăn mạnh vào dòng tiền.' },
            { label: 'Tiền & phải thu', share: 20, detail: 'Tiền mặt giữ nhịp vận hành; phải thu phản ánh doanh thu chưa thu được tiền thật từ khách hàng.' },
            { label: 'Thương hiệu, IP', share: 25, detail: 'Phần vô hình như phần mềm, bằng sáng chế, dữ liệu khách hàng, thương hiệu, công thức, quy trình.' }
        ],
        takeaways: [
            'Doanh nghiệp tăng trưởng nhanh thường đẹp ở doanh thu nhưng yếu ở tiền mặt vì phải tài trợ tồn kho và phải thu.',
            'Tài sản vô hình mạnh giúp biên lợi nhuận cao, còn tài sản hữu hình mạnh giúp mở rộng quy mô sản xuất.'
        ],
        note: 'Muốn hiểu sức khỏe doanh nghiệp, luôn đọc cơ cấu tài sản cùng với nợ vay và tốc độ quay vòng tiền.'
    },
    'individual': {
        lead: 'Tài sản của người dân thường tập trung ở nhà ở và tiền gửi. Phần đầu tư tài chính chỉ tăng khi thu nhập, hiểu biết và khả năng chịu rủi ro tăng lên.',
        items: [
            { label: 'Nhà đất & tài sản cư trú', share: 45, detail: 'Khoản lớn nhất của nhiều hộ gia đình. Nó cho cảm giác giàu lên nhưng thanh khoản thấp và thường gắn với nợ thế chấp.' },
            { label: 'Tiền gửi & tiền mặt', share: 20, detail: 'Lớp đệm thanh khoản để chi tiêu hàng tháng, dự phòng khẩn cấp và chờ cơ hội đầu tư.' },
            { label: 'Bảo hiểm & hưu trí', share: 15, detail: 'Tài sản kiểu phòng thủ, tích lũy chậm nhưng ổn định, hữu ích khi thu nhập lao động giảm theo tuổi tác.' },
            { label: 'CK, quỹ, crypto, khác', share: 20, detail: 'Phần tài sản tìm kiếm tăng trưởng cao hơn, đi kèm biến động giá lớn hơn nhiều so với tiền gửi.' }
        ],
        takeaways: [
            'Một hộ gia đình có thể giàu trên giấy vì giá nhà tăng nhưng vẫn dễ tổn thương nếu thiếu tiền mặt dự phòng.',
            'Tỷ trọng tài sản rủi ro quá cao thường gây áp lực tâm lý lớn khi thị trường giảm mạnh.'
        ],
        note: 'Đây là cơ cấu minh họa của hộ gia đình trung lưu, không phải một chuẩn đúng cho mọi người.'
    },
    'foreign': {
        lead: 'Khối quốc tế là dòng tài sản và vốn nằm ngoài biên giới nhưng luôn tác động vào nền kinh tế trong nước qua thương mại, FDI, nợ và tỷ giá.',
        items: [
            { label: 'FDI & tài sản sản xuất', share: 40, detail: 'Nhà máy, chuỗi cung ứng, kho bãi, vốn cổ phần của nhà đầu tư nước ngoài đặt trong nền kinh tế nội địa.' },
            { label: 'Dự trữ ngoại tệ', share: 25, detail: 'Nguồn ngoại tệ để thanh toán thương mại, trả nợ, giữ thanh khoản xuyên biên giới.' },
            { label: 'Khoản phải thu thương mại', share: 20, detail: 'Tiền hàng xuất khẩu chưa thu về, tín dụng thương mại và các khoản liên quan đến chuỗi cung ứng quốc tế.' },
            { label: 'Danh mục vốn khác', share: 15, detail: 'Bao gồm đầu tư danh mục, nắm giữ trái phiếu, tiền gửi, quỹ và các khoản đầu tư linh hoạt khác.' }
        ],
        takeaways: [
            'Khi vốn danh mục quá lớn so với FDI thực, nền kinh tế dễ biến động mạnh theo tâm lý thị trường hơn là theo sản xuất thật.',
            'Tài sản sản xuất dài hạn từ FDI thường bền hơn dòng vốn nóng tìm kiếm chênh lệch lãi suất.'
        ],
        note: 'Đây là góc nhìn gộp cho khối quốc tế liên quan tới nền kinh tế trong nước, không phải bảng cân đối của một tổ chức duy nhất.'
    },
    'stock-exchange': {
        lead: 'Sàn chứng khoán không “giàu” vì nắm cổ phiếu của cả thị trường, mà vì nắm hạ tầng niêm yết, giao dịch, bù trừ và dữ liệu.',
        items: [
            { label: 'Hệ thống giao dịch & bù trừ', share: 35, detail: 'Cốt lõi của sàn là năng lực vận hành lệnh, thanh toán, lưu ký và đảm bảo giao dịch trơn tru.' },
            { label: 'Tiền ký quỹ/đảm bảo', share: 25, detail: 'Là lớp tài sản bảo vệ hệ thống khi có thành viên mất khả năng thanh toán hoặc biến động đột ngột.' },
            { label: 'Cổ phần & liên kết', share: 20, detail: 'Gồm sở hữu tại công ty con, trung tâm lưu ký, công nghệ, dữ liệu và dịch vụ phụ trợ.' },
            { label: 'Dữ liệu, thương hiệu', share: 20, detail: 'Nguồn giá trị vô hình đến từ dữ liệu thị trường, quyền cung cấp thông tin, niềm tin của nhà đầu tư.' }
        ],
        takeaways: [
            'Sàn càng mạnh ở hạ tầng và quỹ đảm bảo thì khả năng chịu sốc thanh khoản càng tốt.',
            'Khối dữ liệu và thương hiệu tạo ra nguồn thu đều hơn nhiều so với phí giao dịch thuần túy.'
        ],
        note: 'Cơ cấu này mô tả giá trị của tổ chức vận hành sàn, không phải cơ cấu của nhà đầu tư trên sàn.'
    },
    'investment-fund': {
        lead: 'Quỹ đầu tư là “chiếc rổ” gom tiền rồi phân bổ sang nhiều lớp tài sản khác nhau. Cơ cấu của quỹ nói lên khẩu vị rủi ro thật sự của nhà quản lý quỹ.',
        items: [
            { label: 'Cổ phiếu', share: 40, detail: 'Phần tìm kiếm tăng trưởng vốn. Tỷ trọng cao ở đây khiến lợi nhuận và biến động cùng tăng.' },
            { label: 'Trái phiếu', share: 25, detail: 'Lớp đệm ổn định hơn, giúp quỹ có dòng lãi đều và giảm sốc khi cổ phiếu điều chỉnh.' },
            { label: 'Tiền mặt dự phòng', share: 10, detail: 'Dùng để đáp ứng nhu cầu rút vốn, giải ngân cơ hội mới hoặc làm bộ đệm khi thị trường rối.' },
            { label: 'BĐS & tài sản thay thế', share: 25, detail: 'Gồm bất động sản, private equity, hàng hóa, hạ tầng hoặc tài sản thay thế khác để đa dạng hóa.' }
        ],
        takeaways: [
            'Đừng chỉ nhìn tên quỹ; hãy nhìn cơ cấu để biết nó thực sự là quỹ tăng trưởng, phòng thủ hay đa tài sản.',
            'Tiền mặt quá thấp khiến quỹ kém linh hoạt nếu nhà đầu tư rút vốn mạnh hoặc thị trường giảm sâu.'
        ],
        note: 'Tỷ trọng thay đổi theo manddate của quỹ, nhưng logic đọc quỹ luôn bắt đầu từ cấu trúc tài sản.'
    },
    'consumer-finance': {
        lead: 'Tài sản của công ty tài chính gần như là các khoản phải thu từ người vay. Chất lượng chấm điểm tín dụng quyết định gần như toàn bộ mô hình.',
        items: [
            { label: 'Dư nợ tín chấp', share: 60, detail: 'Khoản cho vay không cần tài sản đảm bảo, lãi cao nhưng rủi ro vỡ nợ cũng cao.' },
            { label: 'Dư nợ thẻ & BNPL', share: 20, detail: 'Nguồn thu từ chi tiêu trả chậm, thẻ tín dụng và mua trước trả sau, thường biến động mạnh theo tiêu dùng.' },
            { label: 'Tiền mặt dự phòng', share: 8, detail: 'Bộ đệm thanh khoản để trả nhà cung cấp vốn và hấp thụ chậm thanh toán của khách hàng.' },
            { label: 'Hệ thống chấm điểm & dữ liệu', share: 12, detail: 'Tài sản vô hình rất quan trọng vì nó quyết định ai được vay, hạn mức bao nhiêu và giá vốn có đủ bù rủi ro hay không.' }
        ],
        takeaways: [
            'Nếu hệ chấm điểm yếu, tăng trưởng dư nợ nhanh chỉ là cách đẩy nợ xấu vào tương lai.',
            'Khoản tiền mặt nhỏ nhưng cực quan trọng vì công ty tài chính thường vay ngắn để cho vay dài hơn.'
        ],
        note: 'Cơ cấu này nên được đọc cùng tỷ lệ nợ xấu, chi phí vốn và mức trích lập dự phòng.'
    },
    'shadow-banking': {
        lead: 'Shadow banking thường dựa vào tài sản thế chấp và quyền đòi nợ thay vì nguồn tiền gửi ổn định như ngân hàng thương mại.',
        items: [
            { label: 'Khoản cho vay ngoài hệ thống', share: 50, detail: 'Là lõi kinh doanh: cho vay nhanh, hồ sơ lỏng, lãi cao, thường phục vụ người khó tiếp cận ngân hàng.' },
            { label: 'Tài sản đảm bảo BĐS', share: 25, detail: 'Giá trị thế chấp giúp giảm rủi ro mất vốn trên giấy nhưng thanh khoản khi xử lý nợ có thể rất thấp.' },
            { label: 'Tiền mặt ngắn hạn', share: 10, detail: 'Nguồn để xoay vòng cho vay mới, trả nhà đầu tư hoặc xử lý khách hàng rút vốn.' },
            { label: 'Phí & quyền đòi nợ', share: 15, detail: 'Khoản phải thu từ phí dịch vụ, phí phạt, quyền đòi nợ hoặc hợp đồng cầm cố.' }
        ],
        takeaways: [
            'Mô hình này dễ trông rất lời khi thị trường lên, nhưng rơi nhanh khi tài sản thế chấp mất thanh khoản.',
            'Phần “quyền đòi nợ” nghe có giá trị lớn nhưng thường khó thu đủ khi khách vay đồng loạt đổ vỡ.'
        ],
        note: 'Shadow banking cần được nhìn bằng lăng kính thanh khoản và khả năng xử lý tài sản bảo đảm trong tình huống xấu.'
    },
    'bond-market': {
        lead: 'Thị trường trái phiếu là kho tài sản nợ của chính phủ, ngân hàng và doanh nghiệp. Chất lượng của kho này quyết định chi phí vốn dài hạn toàn nền kinh tế.',
        items: [
            { label: 'TPCP', share: 40, detail: 'Lớp an toàn nhất, làm chuẩn tham chiếu cho lãi suất dài hạn và định giá hàng loạt tài sản khác.' },
            { label: 'TPDN', share: 35, detail: 'Nơi doanh nghiệp vay trực tiếp từ nhà đầu tư. Phần này nhạy với xếp hạng tín nhiệm và niềm tin thị trường.' },
            { label: 'TP ngân hàng/địa phương', share: 15, detail: 'Nhóm trái phiếu phục vụ huy động vốn của ngân hàng hoặc đơn vị công, thường nằm giữa rủi ro công và tư.' },
            { label: 'Tiền & ký quỹ', share: 10, detail: 'Bộ đệm phục vụ giao dịch, tạo thanh khoản và xử lý biến động giá trong thị trường thứ cấp.' }
        ],
        takeaways: [
            'TPCP là nền, nhưng rủi ro hệ thống thường bùng lên ở phần TPDN khi tín nhiệm suy giảm.',
            'Thị trường trái phiếu yếu làm doanh nghiệp quay lại phụ thuộc ngân hàng, khiến áp lực dồn vào hệ tín dụng.'
        ],
        note: 'Đây là cách nhìn gộp theo tài sản nợ phổ biến đang lưu thông, không phải một sàn giao dịch riêng lẻ.'
    },
    'real-estate': {
        lead: 'Bất động sản vừa là tài sản sử dụng, vừa là tài sản đầu cơ, vừa là tài sản thế chấp. Vì vậy nó nằm ở giữa kinh tế thực và tài chính.',
        items: [
            { label: 'Đất', share: 45, detail: 'Giá trị nền lớn nhất của bất động sản thường nằm ở quyền sử dụng đất, vị trí và pháp lý chứ không chỉ ở công trình.' },
            { label: 'Công trình xây dựng', share: 30, detail: 'Nhà ở, văn phòng, kho bãi, trung tâm thương mại. Giá trị hao mòn theo thời gian nhưng tạo dòng tiền sử dụng hoặc cho thuê.' },
            { label: 'Hạ tầng & tiện ích', share: 10, detail: 'Đường nội bộ, điện nước, tiện ích dự án giúp nâng giá trị thương mại và khả năng khai thác.' },
            { label: 'Dòng tiền cho thuê & khác', share: 15, detail: 'Giá trị đến từ hợp đồng thuê, thương hiệu dự án, quyền khai thác dịch vụ và các lợi ích liên quan.' }
        ],
        takeaways: [
            'Đất làm giá trị tăng nhanh nhưng công trình mới là thứ tạo ra dòng tiền ổn định.',
            'Một dự án có vẻ đắt không hẳn rủi ro nếu pháp lý rõ và dòng tiền cho thuê khỏe; ngược lại đất rẻ mà pháp lý mờ có thể rất nguy hiểm.'
        ],
        note: 'Muốn hiểu BĐS, phải tách phần giá trị đất, phần giá trị xây dựng và phần giá trị dòng tiền.'
    },
    'commodity': {
        lead: 'Hàng hóa là tài sản nền của nền kinh tế thực. Biến động ở đây lan rất nhanh sang chi phí sản xuất, lạm phát và tỷ giá.',
        items: [
            { label: 'Kim loại quý', share: 30, detail: 'Vàng, bạc thường được giữ như tài sản phòng thủ trước lạm phát, khủng hoảng và bất ổn tài chính.' },
            { label: 'Năng lượng', share: 25, detail: 'Dầu, khí, điện tác động trực tiếp lên chi phí logistics, sản xuất và giá tiêu dùng toàn nền kinh tế.' },
            { label: 'Nông sản', share: 20, detail: 'Nhóm hàng hóa thiết yếu gắn với an ninh lương thực và biến động mạnh theo thời tiết, logistics, mùa vụ.' },
            { label: 'Kim loại CN & khác', share: 25, detail: 'Đồng, thép, nhôm phản ánh sức nóng của công nghiệp, xây dựng và đầu tư cơ sở hạ tầng.' }
        ],
        takeaways: [
            'Khi năng lượng và kim loại công nghiệp tăng cùng lúc, doanh nghiệp sản xuất thường chịu áp lực biên lợi nhuận.',
            'Kim loại quý đi lên mạnh nhiều khi là tín hiệu thị trường đang phòng thủ, không đơn thuần là tăng trưởng kinh tế.'
        ],
        note: 'Cơ cấu này nên được đọc như một “rổ giá trị” của thị trường hàng hóa, không phải kho hàng vật chất của một công ty cụ thể.'
    },
    'forex': {
        lead: 'Thị trường forex giữ các lớp tài sản liên quan đến thanh khoản ngoại tệ, hợp đồng phòng hộ và các khoản tiền di chuyển xuyên biên giới.',
        items: [
            { label: 'Dự trữ USD/EUR', share: 45, detail: 'Phần tài sản cốt lõi để thanh toán thương mại, trả nợ quốc tế và neo niềm tin vào khả năng đổi tiền.' },
            { label: 'Hợp đồng kỳ hạn/hoán đổi', share: 25, detail: 'Công cụ phòng hộ và đầu cơ tỷ giá, giúp doanh nghiệp và ngân hàng khóa trước rủi ro biến động.' },
            { label: 'Tiền gửi liên ngân hàng', share: 15, detail: 'Nguồn ngoại tệ ngắn hạn để điều hòa thanh khoản giữa các tổ chức tài chính.' },
            { label: 'Vàng & tài sản khác', share: 15, detail: 'Tài sản dự trữ bổ sung hoặc tài sản liên quan đến bảo chứng thanh khoản bằng ngoại tệ.' }
        ],
        takeaways: [
            'Tỷ trọng công cụ phái sinh tăng cao nghĩa là nhu cầu phòng hộ hoặc đầu cơ tỷ giá đang nóng lên.',
            'Ngoại tệ tiền mặt ít nhưng hợp đồng phòng hộ lớn có thể khiến rủi ro đối tác tăng mạnh khi thị trường sốc.'
        ],
        note: 'Forex không chỉ là mua bán tiền ngay; phần lớn giá trị nằm ở các cam kết và công cụ phòng hộ.'
    },
    'insurance': {
        lead: 'Doanh nghiệp bảo hiểm sống nhờ hai thứ: định giá rủi ro đúng và đầu tư quỹ phí bảo hiểm đủ an toàn trong lúc chờ chi trả.',
        items: [
            { label: 'Trái phiếu', share: 40, detail: 'Khoản đầu tư lõi vì bảo hiểm cần thu nhập ổn định để khớp với nghĩa vụ chi trả dài hạn.' },
            { label: 'Tiền gửi', share: 20, detail: 'Lớp thanh khoản để sẵn sàng xử lý yêu cầu bồi thường, đáo hạn hợp đồng, chi trả quyền lợi.' },
            { label: 'Cổ phiếu/quỹ', share: 15, detail: 'Phần tăng trưởng nhưng bị giới hạn vì doanh nghiệp bảo hiểm không thể lấy tiền bồi thường đi đánh cược quá mức.' },
            { label: 'Phải thu tái bảo hiểm', share: 15, detail: 'Khoản mà nhà tái bảo hiểm sẽ hoàn trả cho công ty bảo hiểm khi sự kiện lớn xảy ra.' },
            { label: 'BĐS & khác', share: 10, detail: 'Tài sản vận hành, bất động sản văn phòng, thương hiệu và các khoản đầu tư phụ trợ khác.' }
        ],
        takeaways: [
            'Bảo hiểm nhìn ngoài giống thu phí đều đặn, nhưng rủi ro thật nằm ở việc chi trả lớn có thể đến dồn dập trong thời gian ngắn.',
            'Phần phải thu tái bảo hiểm đẹp trên giấy chỉ có giá trị khi đối tác tái bảo hiểm đủ mạnh để trả tiền lúc khủng hoảng.'
        ],
        note: 'Muốn đọc bảo hiểm đúng, phải nhìn cả tài sản đầu tư lẫn cấu trúc nghĩa vụ bồi thường trong tương lai.'
    },
    'pension-fund': {
        lead: 'Quỹ hưu trí ưu tiên tài sản dài hạn, lợi suất ổn định và khả năng bảo toàn sức mua trong nhiều thập kỷ, không phải lợi nhuận nóng theo quý.',
        items: [
            { label: 'Trái phiếu dài hạn', share: 45, detail: 'Khớp tốt với nghĩa vụ chi trả hưu trí kéo dài nhiều năm và giúp dự báo dòng tiền tương đối ổn định.' },
            { label: 'Cổ phiếu/quỹ', share: 25, detail: 'Phần tăng trưởng vốn để chống lại lạm phát và nâng sức mua của khoản chi trả trong tương lai.' },
            { label: 'Tiền gửi', share: 10, detail: 'Dự trữ ngắn hạn để xử lý chi trả định kỳ, thay vì phải bán tài sản dài hạn không đúng thời điểm.' },
            { label: 'Hạ tầng/BĐS dài hạn', share: 20, detail: 'Nhóm tài sản tạo dòng tiền đều và phù hợp với chân trời đầu tư dài của quỹ hưu trí.' }
        ],
        takeaways: [
            'Quỹ hưu trí không thể quá ngắn hạn vì nghĩa vụ của nó cũng rất dài; nhưng quá bảo thủ thì lại thua lạm phát.',
            'Dân số già hóa khiến áp lực chi trả tăng, nên chất lượng tài sản dài hạn ngày càng quan trọng.'
        ],
        note: 'Đọc quỹ hưu trí là đọc sự cân bằng giữa an toàn hiện tại và sức mua của người nghỉ hưu trong tương lai.'
    },
    'credit-rating': {
        lead: 'Tổ chức xếp hạng tín dụng không nắm nhiều tài sản hữu hình; giá trị của họ nằm ở mô hình đánh giá, dữ liệu và uy tín thị trường.',
        items: [
            { label: 'CSDL & mô hình chấm điểm', share: 30, detail: 'Đây là lõi tri thức giúp họ phân loại xác suất vỡ nợ, dòng tiền và sức khỏe tín dụng của tổ chức phát hành.' },
            { label: 'Thương hiệu & giấy phép', share: 25, detail: 'Uy tín là thứ khiến thị trường tin vào chữ cái AAA hay BB; mất uy tín là mất phần lớn giá trị.' },
            { label: 'Tiền mặt/ngắn hạn', share: 20, detail: 'Lớp đệm để duy trì vận hành, đầu tư dữ liệu và chịu được giai đoạn doanh thu xếp hạng giảm.' },
            { label: 'Phải thu dịch vụ', share: 25, detail: 'Khoản sẽ thu từ phí xếp hạng, giám sát định kỳ và báo cáo cập nhật cho khách hàng.' }
        ],
        takeaways: [
            'Mô hình này không nặng vốn nhưng cực nặng về danh tiếng và tính độc lập.',
            'Nếu phần thương hiệu và mô hình suy yếu, chữ hạng còn đó nhưng thị trường sẽ không còn tin vào kết quả.'
        ],
        note: 'Giá trị của một tổ chức rating nằm ở khả năng được tin cậy, không nằm ở tài sản vật chất lớn.'
    },
    'fintech': {
        lead: 'Fintech thường không giàu ở “tiền của mình” mà ở hạ tầng giao dịch, dữ liệu người dùng và khả năng đứng giữa nhiều dòng tiền nhỏ nhưng cực lớn về số lượng.',
        items: [
            { label: 'Tiền settlement & số dư KH', share: 35, detail: 'Đây là tiền trung chuyển, đảm bảo đối soát và thanh toán nhanh giữa người dùng, merchant và ngân hàng.' },
            { label: 'Hệ thống công nghệ', share: 25, detail: 'Bao gồm nền tảng thanh toán, chống gian lận, định danh, kết nối API và năng lực xử lý giao dịch thời gian thực.' },
            { label: 'Dữ liệu & thương hiệu', share: 20, detail: 'Dữ liệu hành vi giao dịch và độ nhận diện thương hiệu giúp fintech bám khách hàng và bán thêm dịch vụ.' },
            { label: 'Tiền mặt đầu tư', share: 20, detail: 'Nguồn để đốt tăng trưởng, marketing, trợ giá và mở rộng sản phẩm trước khi đạt lợi nhuận bền vững.' }
        ],
        takeaways: [
            'Fintech có thể tăng trưởng rất nhanh nhưng nếu không giữ kỷ luật dòng tiền, lượng tiền đốt sẽ bào mòn toàn bộ lợi thế công nghệ.',
            'Giá trị cốt lõi thường nằm ở dữ liệu, kết nối và trải nghiệm chứ không phải ở số tiền đi qua tài khoản trung gian.'
        ],
        note: 'Cơ cấu của fintech rất nhạy với giai đoạn phát triển: startup đốt tiền sẽ khác hẳn công ty thanh toán đã trưởng thành.'
    },
    'crypto': {
        lead: 'Trong crypto, tài sản không chỉ là coin đang nắm giữ mà còn là thanh khoản, hạ tầng lưu ký, quyền truy cập người dùng và niềm tin vào giao thức.',
        items: [
            { label: 'BTC/ETH', share: 45, detail: 'Đây thường là lõi nắm giữ vì có tính thanh khoản và độ chấp nhận cao hơn phần còn lại của thị trường.' },
            { label: 'Stablecoin & thanh khoản', share: 25, detail: 'Lớp đệm để giao dịch, neo giá, xoay vòng vốn và trú ẩn tạm thời khi thị trường biến động mạnh.' },
            { label: 'Altcoin/DeFi', share: 15, detail: 'Phần tìm kiếm tăng trưởng lớn hơn nhưng rủi ro mất giá, kẹt thanh khoản hoặc lỗi giao thức cũng cao hơn nhiều.' },
            { label: 'Hạ tầng ví/node & khác', share: 15, detail: 'Bao gồm phần mềm ví, node, staking, hạ tầng kỹ thuật, quyền truy cập hệ sinh thái hoặc tài sản số khác.' }
        ],
        takeaways: [
            'Crypto có vẻ thanh khoản cao khi thị trường bình thường, nhưng trong hoảng loạn thì chỉ vài tài sản lõi còn giữ được chiều sâu giao dịch.',
            'Stablecoin là lớp dầu bôi trơn cả hệ, nên rủi ro của stablecoin nhiều khi còn quan trọng hơn biến động giá của altcoin nhỏ.'
        ],
        note: 'Cơ cấu này nên được đọc cùng rủi ro lưu ký, thanh khoản sàn và chất lượng bảo chứng của stablecoin.'
    },
    'startup': {
        lead: 'Startup chưa có nhiều tài sản hữu hình. Giá trị của nó nằm ở thời gian sống còn, sản phẩm, đội ngũ và khả năng biến tăng trưởng thành doanh thu thực.',
        items: [
            { label: 'Tiền mặt runway', share: 35, detail: 'Runway cho biết startup còn sống được bao lâu nếu chưa gọi thêm vốn hoặc chưa hòa vốn.' },
            { label: 'IP & sản phẩm', share: 30, detail: 'Mã nguồn, thuật toán, sản phẩm, quy trình công nghệ là lõi giá trị thật của startup công nghệ.' },
            { label: 'Dữ liệu người dùng', share: 20, detail: 'Tệp khách hàng, dữ liệu hành vi và mạng lưới phân phối là thứ khiến startup đáng giá hơn mức doanh thu hiện tại.' },
            { label: 'Thiết bị & khác', share: 15, detail: 'Phần hữu hình như thiết bị, văn phòng, server, tài sản vận hành và các khoản phụ trợ khác.' }
        ],
        takeaways: [
            'Một startup tăng trưởng nhanh nhưng runway ngắn rất dễ bị ép định giá khi thị trường vốn xấu đi.',
            'Sản phẩm và dữ liệu là tài sản lớn nhất của startup, nhưng chỉ có giá trị thật khi biến thành doanh thu hoặc khả năng gọi vốn.'
        ],
        note: 'Đọc startup phải luôn hỏi hai câu: còn sống được bao lâu và tài sản vô hình có chuyển thành lợi thế thị trường hay không.'
    }
};

// ==================== EXPANDED MODAL CONTENT ====================

const componentExpandedContent = {
    'central-bank': {
        simple: {
            intro: 'Khi ngân hàng trung ương nới lỏng hoặc thắt chặt, tác động không đến người dân ngay lập tức mà đi qua hệ ngân hàng, lãi suất và kỳ vọng thị trường.',
            sections: [
                { title: 'Điều cần nhớ', bullets: ['NHTW không in tiền để phát cho dân trực tiếp; họ thay đổi giá vốn và lượng thanh khoản của toàn hệ thống.', 'Lãi suất điều hành là “giá sỉ” của tiền, từ đó kéo theo lãi vay, gửi tiết kiệm và định giá tài sản.', 'Mỗi quyết định của NHTW đều là cân bằng giữa tăng trưởng, lạm phát và ổn định tài chính.'] },
                { title: 'Nhìn trong đời thực', bullets: ['Khi lãi suất hạ, người vay thấy nhẹ hơn trước, doanh nghiệp dễ vay hơn và giá tài sản thường phản ứng sớm.', 'Khi NHTW siết tiền, thị trường chứng khoán, bất động sản và trái phiếu thường cảm nhận áp lực trước kinh tế thực.'] }
            ],
            callout: 'Muốn hiểu nền kinh tế đang nóng hay lạnh, hãy nhìn NHTW trước khi nhìn phần còn lại của hệ thống.'
        },
        detail: {
            intro: 'Vai trò chi tiết của NHTW là quyết định ai được tiếp cận thanh khoản, với cái giá nào và trong điều kiện nào.',
            sections: [
                { title: 'Tiền đi vào và đi ra', bullets: ['Tiền đi vào hệ thống qua OMO, tái cấp vốn, mua tài sản hoặc giảm ràng buộc dự trữ.', 'Tiền bị hút về khi bán giấy tờ có giá, nâng lãi suất, tăng dự trữ bắt buộc hoặc để tín dụng chậm lại.', 'NHTW không chỉ bơm tiền mà còn làm “người bảo lãnh niềm tin” khi hệ thống sợ hãi.'] },
                { title: 'Chuỗi phản ứng', bullets: ['Thanh khoản rẻ hơn -> ngân hàng thương mại sẵn sàng cho vay hơn -> doanh nghiệp và hộ gia đình vay mạnh hơn.', 'Lợi suất trái phiếu giảm -> tài sản rủi ro hấp dẫn hơn -> định giá chứng khoán và bất động sản dễ đi lên.', 'Ngược lại, siết thanh khoản thường làm các mắt xích nợ cao phản ứng mạnh nhất.'] }
            ]
        },
        advanced: {
            intro: 'Ở mức sâu hơn, NHTW là nơi quyết định chế độ tiền tệ, tín hiệu kỳ vọng và mức độ chịu rủi ro của toàn bộ hệ thống đòn bẩy.',
            sections: [
                { title: 'Biến số phải theo dõi', bullets: ['Tốc độ tăng tín dụng so với tăng trưởng danh nghĩa của nền kinh tế.', 'Lạm phát lõi và kỳ vọng lạm phát, không chỉ CPI tại một thời điểm.', 'Thanh khoản liên ngân hàng, lợi suất trái phiếu và chênh lệch lãi suất với bên ngoài.'] },
                { title: 'Điểm dễ vỡ hệ thống', bullets: ['Siết quá nhanh có thể làm gãy thị trường tài sản và các mắt xích nợ dài hạn.', 'Nới quá lâu có thể thổi phồng tài sản, khuyến khích đầu cơ và đẩy rủi ro sang tương lai.', 'Điều khó nhất không phải in tiền, mà là rút thanh khoản ra đúng lúc mà không gây hoảng loạn.'] }
            ]
        }
    },
    'commercial-bank': {
        simple: {
            intro: 'Ngân hàng thương mại là nơi tiền gửi của người này biến thành khoản vay của người khác, nên họ đứng đúng giữa tiết kiệm và tiêu dùng đầu tư.',
            sections: [
                { title: 'Điều cần nhớ', bullets: ['Ngân hàng không giữ toàn bộ tiền gửi trong két; họ chỉ giữ một phần và dùng phần còn lại để cho vay.', 'Lợi nhuận đến từ chênh lệch giữa lãi cho vay và chi phí huy động.', 'Niềm tin của người gửi tiền quan trọng không kém tài sản trên sổ sách.'] },
                { title: 'Nhìn trong đời thực', bullets: ['Ngân hàng khỏe khi vừa cho vay được nhiều vừa vẫn có thanh khoản để xử lý rút tiền.', 'Ngân hàng yếu thường không chết vì hôm nay lỗ, mà vì ngày mai không còn ai tin để gửi tiền nữa.'] }
            ],
            callout: 'Ngân hàng là cỗ máy nhân tiền, nhưng chỉ hoạt động được khi người gửi tiền tin họ luôn đổi được sổ tiết kiệm thành tiền thật.'
        },
        detail: {
            intro: 'Đọc một ngân hàng là đọc ba thứ cùng lúc: tài sản sinh lãi, nguồn vốn tài trợ và khả năng chịu sốc thanh khoản.',
            sections: [
                { title: 'Dòng tiền chính', bullets: ['Tiền đi vào qua huy động, phát hành giấy tờ có giá, vay liên ngân hàng hoặc nhận hỗ trợ từ NHTW.', 'Tiền đi ra qua cho vay doanh nghiệp, hộ gia đình, mua trái phiếu và xử lý thanh toán mỗi ngày.', 'Chênh lệch kỳ hạn là điểm cốt lõi: vốn ngắn hạn tài trợ cho tài sản dài hạn.'] },
                { title: 'Điều phải xem kỹ', bullets: ['Nợ xấu cho biết chất lượng tài sản có thực sự tốt hay không.', 'LDR, CAR, thanh khoản ngắn hạn cho biết ngân hàng có đang đi quá xa với vốn huy động hay không.', 'Danh mục trái phiếu và BĐS thường là nơi rủi ro ẩn xuất hiện khi chu kỳ đảo chiều.'] }
            ]
        },
        advanced: {
            intro: 'Ngân hàng thương mại vừa là trung gian tài chính vừa là mắt xích đòn bẩy của cả nền kinh tế, nên mọi sai lệch nhỏ đều có thể khuếch đại rất lớn.',
            sections: [
                { title: 'Biến số phải theo dõi', bullets: ['Biên lãi ròng, chi phí vốn và cơ cấu huy động có bền hay không.', 'Tỷ lệ dự phòng so với nợ xấu và tốc độ ghi nhận lãi dự thu.', 'Mức độ tập trung cho vay vào BĐS, trái phiếu doanh nghiệp hoặc một nhóm khách hàng lớn.'] },
                { title: 'Điểm dễ vỡ', bullets: ['Sai lệch kỳ hạn lớn làm ngân hàng dễ sốc khi lãi suất tăng và người gửi tiền đòi lãi cao hơn.', 'Nợ xấu thường bộc lộ chậm hơn tăng trưởng tín dụng, nên thời kỳ cho vay bùng nổ thường chưa chắc là thời kỳ khỏe mạnh nhất.', 'Một ngân hàng có thể còn vốn kế toán nhưng vẫn đổ vỡ nếu thanh khoản mất trước.'] }
            ]
        }
    },
    'government': {
        simple: {
            intro: 'Chính phủ là nơi gom tiền từ thuế và vay nợ để đổi lấy hạ tầng, dịch vụ công và an sinh xã hội cho cả nền kinh tế.',
            sections: [
                { title: 'Điều cần nhớ', bullets: ['Thuế không chỉ để nuôi bộ máy mà còn để tái phân phối thu nhập và ổn định xã hội.', 'Khi thu không đủ chi, chính phủ phải vay bằng trái phiếu hoặc nhận hỗ trợ tiền tệ gián tiếp.', 'Chi tiêu công có thể cứu tăng trưởng ngắn hạn nhưng cũng có thể để lại gánh nợ dài hạn.'] },
                { title: 'Nhìn trong đời thực', bullets: ['Một con đường, cây cầu hay bệnh viện công là dòng tiền công biến thành tài sản dùng nhiều năm.', 'Trợ cấp, giảm thuế hay kích cầu là cách tiền công đi thẳng vào thu nhập khả dụng của dân và doanh nghiệp.'] }
            ],
            callout: 'Muốn hiểu chất lượng tài khóa, đừng chỉ hỏi chi bao nhiêu mà hãy hỏi chi tạo ra tài sản gì và ai được hưởng lợi.'
        },
        detail: {
            intro: 'Tài khóa là nghệ thuật chọn lúc nào nên chi mạnh, lúc nào nên tiết chế, và vay bằng cách nào để nền kinh tế chịu được.',
            sections: [
                { title: 'Tiền vào và tiền ra', bullets: ['Tiền vào đến từ thuế, phí, cổ tức DNNN, khai thác tài nguyên và vay nợ.', 'Tiền ra đi vào đầu tư công, lương khu vực công, an sinh, trợ giá và chi trả nợ.', 'Thâm hụt không xấu nếu tiền đi vào tài sản sinh năng suất; nó nguy hiểm khi chỉ để vá chi tiêu kém hiệu quả.'] },
                { title: 'Cách đọc tác động', bullets: ['Chi đầu tư công thường lan chậm nhưng ảnh hưởng sâu đến năng suất dài hạn.', 'Giảm thuế giúp khu vực tư có tiền nhanh hơn nhưng hiệu quả tùy thuộc niềm tin tiêu dùng và đầu tư.', 'Nợ công tăng không đáng sợ bằng chi phí vay tăng và kỳ hạn nợ bị rút ngắn.'] }
            ]
        },
        advanced: {
            intro: 'Ở mức sâu hơn, chính phủ là người phát hành tài sản an toàn của nền kinh tế và là nơi chuyển rủi ro của khu vực tư sang khu vực công khi khủng hoảng.',
            sections: [
                { title: 'Biến số phải theo dõi', bullets: ['Thâm hụt sơ cấp, chi phí lãi vay và kỳ hạn nợ công.', 'Tỷ lệ thu bền vững từ thuế so với thu một lần từ đất, tài nguyên hoặc cổ phần hóa.', 'Hiệu suất đầu tư công: chi xong có tạo năng suất, dòng tiền hay niềm tin không.'] },
                { title: 'Điểm dễ vỡ', bullets: ['Vay ngắn hạn nhiều khiến chính phủ phụ thuộc vào điều kiện tái cấp vốn của thị trường.', 'Khi thu ngân sách dựa quá mạnh vào đất hoặc hàng hóa, tài khóa trở nên rất chu kỳ.', 'Khu vực công yếu đi thường kéo theo ngân hàng, trái phiếu và doanh nghiệp chịu áp lực cùng lúc.'] }
            ]
        }
    },
    'business': {
        simple: {
            intro: 'Doanh nghiệp là nơi vốn biến thành hàng hóa, dịch vụ, lương và lợi nhuận. Nó là mắt xích đưa tiền từ tài chính sang kinh tế thực.',
            sections: [
                { title: 'Điều cần nhớ', bullets: ['Doanh nghiệp sống bằng doanh thu nhưng chết vì hết tiền mặt trước khi thu được doanh thu.', 'Lương, thuế, nguyên liệu và lãi vay là các cửa thoát tiền lớn nhất.', 'Tăng trưởng doanh thu đẹp không có nghĩa là dòng tiền đẹp.'] },
                { title: 'Nhìn trong đời thực', bullets: ['Công ty bán được hàng nhưng khách chưa trả tiền thì vẫn có thể thiếu tiền trả lương.', 'Doanh nghiệp càng phụ thuộc vào vốn vay càng nhạy với lãi suất và chu kỳ bán hàng.'] }
            ],
            callout: 'Muốn hiểu doanh nghiệp khỏe hay yếu, đừng nhìn doanh thu trước mà nhìn khả năng quay vòng tiền và chịu nợ.'
        },
        detail: {
            intro: 'Mô hình tiền của doanh nghiệp luôn xoay quanh ba khối: vốn lưu động, đầu tư tài sản cố định và cấu trúc nợ vốn.',
            sections: [
                { title: 'Dòng tiền vận hành', bullets: ['Tiền đi vào qua bán hàng, gọi vốn, vay ngân hàng hoặc phát hành trái phiếu/cổ phiếu.', 'Tiền đi ra qua nguyên vật liệu, lương, thuê mặt bằng, capex, thuế và lãi vay.', 'Khi tồn kho và phải thu tăng nhanh hơn doanh thu, doanh nghiệp đang bào mòn tiền mặt dù báo cáo lãi.'] },
                { title: 'Điều phải xem kỹ', bullets: ['Biên lợi nhuận gộp cho biết khả năng kiểm soát giá vốn.', 'Vòng quay tồn kho và vòng quay phải thu cho biết tiền bị giam ở đâu.', 'Tỷ lệ nợ/vốn cho biết doanh nghiệp đang dùng đòn bẩy ở mức nào.'] }
            ]
        },
        advanced: {
            intro: 'Doanh nghiệp là nơi mọi cú sốc lãi suất, tỷ giá, giá nguyên liệu và cầu tiêu dùng gặp nhau rồi chuyển hóa thành lợi nhuận hoặc phá sản.',
            sections: [
                { title: 'Biến số phải theo dõi', bullets: ['Khả năng tái cấp vốn khi nợ đến hạn trong môi trường lãi suất thay đổi.', 'Độ nhạy lợi nhuận với giá đầu vào, tiền lương và tỷ giá.', 'Chất lượng lợi nhuận: tiền thật thu về hay chỉ là doanh thu ghi nhận trên sổ sách.'] },
                { title: 'Điểm dễ vỡ', bullets: ['Đòn bẩy cao + doanh thu giảm nhẹ có thể làm lợi nhuận rơi rất mạnh.', 'Tài sản cố định lớn khiến doanh nghiệp khó co lại khi chu kỳ xấu đi.', 'Nợ ngoại tệ hoặc nhập khẩu nhiều sẽ làm biên lợi nhuận tổn thương khi tỷ giá biến động.'] }
            ]
        }
    },
    'individual': {
        simple: {
            intro: 'Người dân là nơi mọi chính sách cuối cùng đi tới: thu nhập, giá cả, lãi vay, tiết kiệm, đầu tư và mức sống đều quy về hộ gia đình.',
            sections: [
                { title: 'Điều cần nhớ', bullets: ['Thu nhập lao động là dòng tiền chính, còn tài sản là phần giúp bạn sống tốt khi thu nhập giảm.', 'Chi tiêu quyết định chất lượng sống hôm nay; tiết kiệm và đầu tư quyết định tự do tài chính ngày mai.', 'Nợ tốt hay nợ xấu phụ thuộc tài sản mua bằng nợ có tạo dòng tiền hay không.'] },
                { title: 'Nhìn trong đời thực', bullets: ['Lương tăng mà lạm phát tăng nhanh hơn thì sức mua vẫn giảm.', 'Nhiều hộ gia đình nhìn có vẻ giàu vì nhà đất tăng giá nhưng lại rất căng tiền mặt hàng tháng.'] }
            ],
            callout: 'Mọi bài toán tài chính cá nhân đều quay về ba câu hỏi: kiếm bao nhiêu, giữ được bao nhiêu và tiền đang nằm ở đâu.'
        },
        detail: {
            intro: 'Tài chính hộ gia đình là bài toán phân bổ giữa tiêu dùng hiện tại, dự phòng ngắn hạn và tài sản tăng trưởng dài hạn.',
            sections: [
                { title: 'Dòng tiền của hộ gia đình', bullets: ['Tiền đi vào qua lương, kinh doanh nhỏ, lãi gửi, cổ tức, cho thuê và trợ cấp.', 'Tiền đi ra qua ăn ở, giáo dục, y tế, lãi vay, thuế, bảo hiểm và tiêu dùng tùy ý.', 'Phần chênh giữa hai dòng mới là nhiên liệu để xây tài sản.'] },
                { title: 'Điều phải xem kỹ', bullets: ['Quỹ dự phòng quyết định khả năng sống sót qua cú sốc mất việc hoặc bệnh tật.', 'Tỷ lệ nợ/thu nhập cho biết bạn có đang dùng tương lai để trả cho hiện tại quá nhiều hay không.', 'Cơ cấu tài sản cho biết bạn đang phòng thủ, cân bằng hay đầu cơ quá mức.'] }
            ]
        },
        advanced: {
            intro: 'Ở mức sâu hơn, hộ gia đình là nơi phản ứng chậm nhưng rất quan trọng của nền kinh tế: tiêu dùng, kỳ vọng lạm phát và khẩu vị rủi ro đều phát lộ ở đây.',
            sections: [
                { title: 'Biến số phải theo dõi', bullets: ['Lãi suất thực sau lạm phát chứ không chỉ lãi suất danh nghĩa.', 'Tỷ lệ tiết kiệm, đòn bẩy nhà ở và mức độ phụ thuộc vào một nguồn thu nhập duy nhất.', 'Tỷ trọng tài sản kém thanh khoản so với nhu cầu tiền mặt hàng tháng.'] },
                { title: 'Điểm dễ vỡ', bullets: ['Giá tài sản giảm mạnh dễ làm hộ gia đình cắt tiêu dùng, kéo chậm cả nền kinh tế.', 'Nợ lãi suất thả nổi làm hộ gia đình chịu sốc nhanh khi mặt bằng lãi suất tăng.', 'Thu nhập tập trung vào một ngành nóng khiến rủi ro mất việc và rủi ro tài sản cộng hưởng cùng lúc.'] }
            ]
        }
    },
    'foreign': {
        simple: {
            intro: 'Khối quốc tế là cửa nền kinh tế nhận công nghệ, vốn, đơn hàng và ngoại tệ, nhưng cũng là nơi rủi ro tỷ giá và biến động dòng vốn đi vào rất nhanh.',
            sections: [
                { title: 'Điều cần nhớ', bullets: ['Xuất khẩu mang tiền vào, nhập khẩu làm tiền đi ra nhưng đổi lại là hàng hóa, công nghệ và nguyên liệu.', 'FDI bền hơn dòng vốn đầu cơ vì nó gắn với nhà máy, nhân công và chuỗi cung ứng.', 'Tỷ giá là chiếc cầu nối giữa phần trong nước và phần quốc tế.'] },
                { title: 'Nhìn trong đời thực', bullets: ['Một cú sốc ở Mỹ hay Trung Quốc có thể đi vào Việt Nam qua đơn hàng, tỷ giá và dòng vốn rất nhanh.', 'Kiều hối và du lịch là những dòng ngoại tệ tưởng nhỏ nhưng giúp đỡ thanh khoản nền kinh tế đáng kể.'] }
            ]
        },
        detail: {
            intro: 'Đọc khu vực đối ngoại là đọc cả thương mại hàng hóa, cán cân vốn và sức chịu đựng của nền kinh tế với đồng tiền mạnh toàn cầu.',
            sections: [
                { title: 'Dòng tiền chính', bullets: ['Tiền đi vào qua xuất khẩu, kiều hối, FDI, giải ngân đầu tư và khách quốc tế.', 'Tiền đi ra qua nhập khẩu, trả nợ nước ngoài, cổ tức chuyển ra ngoài và du lịch/du học.', 'Chênh lệch hai dòng cộng với dòng vốn quyết định áp lực tỷ giá.'] },
                { title: 'Điều phải xem kỹ', bullets: ['Cấu trúc vốn vào: FDI dài hạn hay tiền nóng ngắn hạn.', 'Khả năng kiếm ngoại tệ của doanh nghiệp và nền kinh tế so với nghĩa vụ nợ ngoại tệ.', 'Mức độ phụ thuộc vào một vài thị trường xuất khẩu hoặc chuỗi cung ứng.'] }
            ]
        },
        advanced: {
            intro: 'Khối quốc tế làm lộ rõ một sự thật: nền kinh tế trong nước không chỉ bị chi phối bởi chính sách nội địa mà còn bị chi phối bởi đồng USD, giá năng lượng và chu kỳ toàn cầu.',
            sections: [
                { title: 'Biến số phải theo dõi', bullets: ['Chênh lệch lãi suất với thế giới, dự trữ ngoại hối và cán cân vãng lai.', 'Tỷ trọng nợ ngoại tệ trong hệ doanh nghiệp và ngân hàng.', 'Mức độ tập trung FDI và xuất khẩu vào một số ngành hoặc đối tác lớn.'] },
                { title: 'Điểm dễ vỡ', bullets: ['USD mạnh lên thường gây áp lực kép: tỷ giá khó chịu hơn và chi phí vay ngoại tệ cao hơn.', 'Dòng vốn nóng rút đi nhanh hơn khả năng điều chỉnh của doanh nghiệp và thị trường tài sản.', 'Thương mại yếu kéo theo doanh nghiệp yếu, rồi ảnh hưởng ngược sang ngân hàng và lao động trong nước.'] }
            ]
        }
    },
    'stock-exchange': {
        simple: {
            intro: 'Sàn chứng khoán là nơi biến kỳ vọng tương lai thành giá hôm nay, nên nó phản ứng nhanh hơn kinh tế thực nhưng cũng dễ nhiễu hơn.',
            sections: [
                { title: 'Điều cần nhớ', bullets: ['Giá cổ phiếu phản ánh kỳ vọng về lợi nhuận, lãi suất và tâm lý chứ không chỉ kết quả kinh doanh hiện tại.', 'Sàn giúp doanh nghiệp huy động vốn cổ phần thay vì chỉ phụ thuộc vào nợ ngân hàng.', 'Thanh khoản là linh hồn của sàn; mất thanh khoản thì giá đúng cũng khó trở thành giá giao dịch thật.'] },
                { title: 'Nhìn trong đời thực', bullets: ['Nhiều công ty còn chưa tăng doanh thu nhưng giá cổ phiếu đã tăng mạnh vì thị trường kỳ vọng tương lai sáng hơn.', 'Khi lãi suất tăng, định giá cổ phiếu thường bị ép xuống ngay cả khi doanh nghiệp chưa kịp báo cáo xấu.'] }
            ]
        },
        detail: {
            intro: 'Sàn chứng khoán là nơi kết nối người cần vốn và người có vốn, nhưng cách tiền thật đi vào doanh nghiệp khác với việc cổ phiếu chạy trên thị trường thứ cấp.',
            sections: [
                { title: 'Dòng tiền chính', bullets: ['Tiền vào doanh nghiệp thật sự khi IPO, phát hành thêm hoặc bán cổ phần sơ cấp.', 'Tiền trên thị trường thứ cấp chủ yếu là nhà đầu tư mua bán lại với nhau; công ty không nhận thêm tiền mỗi lần giá tăng.', 'Thanh khoản cao giúp công ty được định giá tốt hơn và gọi vốn dễ hơn trong tương lai.'] },
                { title: 'Điều phải xem kỹ', bullets: ['Độ sâu thanh khoản, tỷ trọng margin và mức độ tập trung ở vài mã đầu cơ.', 'Chất lượng lợi nhuận và mức định giá tương đối so với lãi suất.', 'Ai đang là người mua cuối: nhà đầu tư dài hạn, quỹ hay dòng tiền đầu cơ ngắn hạn.'] }
            ]
        },
        advanced: {
            intro: 'Ở tầng sâu hơn, sàn chứng khoán là cơ chế định giá rủi ro vốn chủ sở hữu cho toàn nền kinh tế và thường dẫn đường cho chu kỳ tài sản.',
            sections: [
                { title: 'Biến số phải theo dõi', bullets: ['Lợi suất phi rủi ro vì đây là chuẩn chiết khấu của cổ phiếu.', 'Tăng trưởng lợi nhuận thực, không chỉ câu chuyện truyền thông.', 'Tỷ lệ margin và cấu trúc nhà đầu tư vì đây là nguồn khuếch đại biến động.'] },
                { title: 'Điểm dễ vỡ', bullets: ['Dòng tiền đầu cơ quá lớn có thể đẩy định giá tách rời hoàn toàn khỏi dòng tiền doanh nghiệp.', 'Thị trường tăng nhờ tiền rẻ dễ đảo chiều rất mạnh khi chính sách đổi hướng.', 'Sàn có thể phát tín hiệu sai ngắn hạn, nhưng khi kéo dài nhiều quý thì thường đang nói điều gì đó thật về chu kỳ kinh tế.'] }
            ]
        }
    },
    'investment-fund': {
        simple: {
            intro: 'Quỹ đầu tư giúp người ít thời gian hoặc ít chuyên môn vẫn tham gia thị trường bằng cách giao việc chọn tài sản cho đội quản lý quỹ.',
            sections: [
                { title: 'Điều cần nhớ', bullets: ['Mua quỹ là mua chiến lược phân bổ tài sản, không chỉ mua một mã cổ phiếu hay trái phiếu.', 'Phí quản lý thấp không luôn tốt hơn nếu quỹ không giữ kỷ luật hoặc không đúng mục tiêu của bạn.', 'Quỹ tốt không phải quỹ tăng nóng nhất, mà là quỹ phù hợp với mục tiêu và rủi ro của người nắm giữ.'] },
                { title: 'Nhìn trong đời thực', bullets: ['Quỹ trái phiếu nhìn yên hơn nhưng vẫn có thể giảm nếu lãi suất tăng hoặc trái phiếu mất chất lượng.', 'Quỹ cổ phiếu tăng chậm hơn một mã đầu cơ trong ngắn hạn nhưng bền hơn khi chu kỳ xấu đi.'] }
            ]
        },
        detail: {
            intro: 'Quỹ đầu tư là một bộ máy lọc và phân bổ vốn: gom tiền, chọn tài sản, tái cân bằng và quản trị rủi ro theo mandat rõ ràng.',
            sections: [
                { title: 'Dòng tiền chính', bullets: ['Tiền vào quỹ qua nhà đầu tư góp vốn; tiền ra khi quỹ giải ngân sang cổ phiếu, trái phiếu hoặc tài sản thay thế.', 'Quỹ thu phí quản lý đều đặn, còn lợi nhuận/thiệt hại phản ánh trực tiếp vào NAV.', 'Khi nhà đầu tư rút vốn nhiều, quỹ có thể buộc phải bán tài sản vào thời điểm xấu.'] },
                { title: 'Điều phải xem kỹ', bullets: ['NAV chỉ là điểm bắt đầu; quan trọng là tài sản bên trong NAV là gì.', 'Hiệu suất phải được so với benchmark phù hợp chứ không chỉ nhìn số tuyệt đối.', 'Mức độ tập trung tài sản cho biết quỹ đang đầu tư hay đang đặt cược.'] }
            ]
        },
        advanced: {
            intro: 'Ở tầng sâu hơn, quỹ đầu tư là cơ chế biến tiết kiệm của xã hội thành quyết định phân bổ vốn có tổ chức, nên sai lầm của quỹ có thể đẩy sai cả dòng vốn nền kinh tế.',
            sections: [
                { title: 'Biến số phải theo dõi', bullets: ['Phong cách đầu tư có nhất quán hay liên tục drift theo thị trường.', 'Khả năng thanh khoản của danh mục so với khả năng nhà đầu tư rút vốn.', 'Tỷ trọng tài sản khó định giá hoặc tài sản riêng lẻ chiếm phần lớn hiệu suất quỹ.'] },
                { title: 'Điểm dễ vỡ', bullets: ['Quỹ nhìn ổn định có thể sốc mạnh nếu danh mục chứa tài sản khó bán nhưng lại cho nhà đầu tư rút tiền hàng ngày.', 'Thành tích ngắn hạn dễ đến từ đặt cược tập trung chứ không phải từ kỹ năng lặp lại được.', 'Quỹ càng lớn càng khó xoay, nên quy mô lớn vừa là lợi thế vừa là ma sát.'] }
            ]
        }
    },
    'consumer-finance': {
        simple: {
            intro: 'Tín dụng tiêu dùng giúp người dân mang nhu cầu tương lai về hiện tại, nhưng đổi lại là chi phí lãi và kỷ luật trả nợ cao hơn nhiều.',
            sections: [
                { title: 'Điều cần nhớ', bullets: ['Mua trước trả sau nghe nhẹ lúc đầu nhưng tổng chi phí có thể rất đắt nếu chậm thanh toán.', 'Công ty tài chính sống nhờ lãi suất cao để bù cho rủi ro khách hàng vỡ nợ cao hơn ngân hàng.', 'Khoản vay nhỏ nhưng nhiều, nên dữ liệu và chấm điểm quan trọng hơn tài sản thế chấp.'] },
                { title: 'Nhìn trong đời thực', bullets: ['Một chiếc điện thoại trả góp không chỉ có giá máy mà còn có lãi ẩn, phí và rủi ro trễ hạn.', 'Kinh tế yếu đi làm nợ xấu bán lẻ nhảy rất nhanh vì thu nhập hộ gia đình giảm ngay.'] }
            ]
        },
        detail: {
            intro: 'Khác với ngân hàng truyền thống, tín dụng tiêu dùng phải quản trị hàng triệu khoản vay nhỏ, vòng quay nhanh và chi phí thu hồi nợ cao.',
            sections: [
                { title: 'Dòng tiền chính', bullets: ['Tiền đi vào từ nguồn vốn vay, phát hành trái phiếu hoặc hậu thuẫn của ngân hàng mẹ/nhà đầu tư.', 'Tiền đi ra thành dư nợ thẻ, BNPL, vay tín chấp và chi phí vận hành hệ thống bán lẻ.', 'Phần thu về gồm gốc, lãi, phí phạt và đôi khi cả phí merchant từ cửa hàng đối tác.'] },
                { title: 'Điều phải xem kỹ', bullets: ['Tỷ lệ nợ xấu và chi phí dự phòng tăng nhanh thường ăn hết lợi nhuận tưởng như rất đẹp.', 'Khả năng thu hồi nợ quan trọng gần như ngang với khả năng giải ngân.', 'Tăng trưởng dư nợ nhanh chỉ tốt nếu chất lượng hồ sơ không bị nới quá tay.'] }
            ]
        },
        advanced: {
            intro: 'Đây là một ngành cực nhạy với tâm lý tiêu dùng, chất lượng dữ liệu và vòng quay vốn, nên sai lầm nhỏ trong mô hình có thể phình thành lỗ rất lớn.',
            sections: [
                { title: 'Biến số phải theo dõi', bullets: ['Vintage của từng lứa khoản vay mới để xem chất lượng phát sinh đang tốt hay xấu dần.', 'Chi phí vốn tăng bao nhiêu so với lợi suất khoản vay.', 'Hệ số thu hồi sau vỡ nợ và hiệu quả của kênh nhắc nợ/thu hồi.'] },
                { title: 'Điểm dễ vỡ', bullets: ['Khi thất nghiệp tăng, phân khúc này là nơi phản ứng xấu sớm nhất vì khách vay không có nhiều vùng đệm.', 'BNPL nhìn như tăng trưởng công nghệ nhưng bản chất vẫn là cấp tín dụng, nên rủi ro tín dụng không biến mất.', 'Nếu mô hình phê duyệt chạy theo tăng trưởng, nợ xấu thường xuất hiện với độ trễ vài quý.'] }
            ]
        }
    },
    'shadow-banking': {
        simple: {
            intro: 'Shadow banking đáp ứng những nhu cầu vốn mà ngân hàng chính thức không hoặc chưa muốn phục vụ, nên nó vừa là van an toàn vừa là nguồn rủi ro lớn.',
            sections: [
                { title: 'Điều cần nhớ', bullets: ['Ít bị quản lý hơn không có nghĩa là hiệu quả hơn; nhiều khi chỉ là rủi ro bị đẩy ra ngoài bảng cân đối ngân hàng.', 'Lãi suất cao phản ánh rủi ro cao và chi phí thu hồi vốn cao.', 'Tài sản đảm bảo có thể đẹp lúc thị trường lên nhưng rất chậm thành tiền khi thị trường xấu.'] },
                { title: 'Nhìn trong đời thực', bullets: ['Người vay tìm đến shadow banking khi cần tiền nhanh, thiếu hồ sơ hoặc không đủ chuẩn ngân hàng.', 'Khi bất động sản đóng băng, các mắt xích cho vay ngoài hệ thống thường lộ vấn đề thanh khoản đầu tiên.'] }
            ]
        },
        detail: {
            intro: 'Shadow banking nằm ở vùng xám giữa tín dụng hợp pháp linh hoạt và khu vực rủi ro cao thiếu chuẩn mực quản trị.',
            sections: [
                { title: 'Dòng tiền chính', bullets: ['Tiền đi vào từ nhà đầu tư, đối tác góp vốn, phát hành riêng lẻ hoặc tái xoay vòng từ các khoản thu hồi.', 'Tiền đi ra thành các khoản cầm cố, thế chấp nhanh, vay ngắn hạn, P2P hoặc cấu trúc tín dụng ngoài chuẩn ngân hàng.', 'Lợi nhuận đến từ chênh lệch lãi rất cao, phí và định giá tài sản thế chấp.'] },
                { title: 'Điều phải xem kỹ', bullets: ['Chất lượng và pháp lý của tài sản bảo đảm chứ không chỉ giá trị ước tính.', 'Kỳ hạn nguồn vốn vào có đủ dài để tài trợ cho khoản cho vay ra hay không.', 'Mức độ phụ thuộc vào một loại tài sản nóng như bất động sản hoặc hàng tồn kho.'] }
            ]
        },
        advanced: {
            intro: 'Ở tầng sâu hơn, shadow banking thường khuếch đại chu kỳ vì nó cho vay mạnh nhất khi giá tài sản lên và rút nhanh nhất khi giá tài sản rơi.',
            sections: [
                { title: 'Biến số phải theo dõi', bullets: ['Haircut trên tài sản bảo đảm: càng thấp càng cho thấy hệ thống đang lỏng tay.', 'Tốc độ tái cấp vốn của nhà đầu tư cho khu vực này.', 'Quan hệ dây chuyền với ngân hàng, developer, trái phiếu hoặc môi giới.'] },
                { title: 'Điểm dễ vỡ', bullets: ['Rủi ro lớn nhất là mismatch thanh khoản: vốn vào có thể rút rất nhanh, nhưng tài sản ra rất khó bán.', 'Một vụ vỡ nợ lớn ở shadow banking dễ làm niềm tin lan sang khu vực tín dụng chính thức.', 'Khi pháp lý siết lại, nhiều tài sản trên giấy có thể mất khả năng dùng làm bảo đảm.'] }
            ]
        }
    },
    'bond-market': {
        simple: {
            intro: 'Trái phiếu là lời hứa trả nợ trong tương lai. Vì vậy thị trường trái phiếu nói rất nhiều về niềm tin, lãi suất và chất lượng người đi vay.',
            sections: [
                { title: 'Điều cần nhớ', bullets: ['Mua trái phiếu là cho người khác vay, không phải sở hữu doanh nghiệp như mua cổ phiếu.', 'Lợi suất cao hơn thường đi kèm rủi ro cao hơn hoặc thanh khoản kém hơn.', 'Trái phiếu chính phủ là chuẩn an toàn; phần còn lại đều được định giá dựa trên nó.'] },
                { title: 'Nhìn trong đời thực', bullets: ['Doanh nghiệp khó vay ngân hàng thường tìm sang trái phiếu, nhưng thị trường sẽ đòi lãi cao hơn nếu niềm tin yếu.', 'Khi lãi suất chung tăng, giá trái phiếu đang lưu hành thường giảm.'] }
            ]
        },
        detail: {
            intro: 'Trái phiếu là công cụ nối tiết kiệm dài hạn với nhu cầu vốn dài hạn, nhưng cũng là nơi rủi ro tín nhiệm bị lộ rất rõ khi kinh tế đảo chiều.',
            sections: [
                { title: 'Dòng tiền chính', bullets: ['Tiền đi vào người phát hành khi trái phiếu được bán sơ cấp.', 'Sau đó dòng tiền quay ngược lại qua coupon định kỳ và hoàn trả gốc lúc đáo hạn.', 'Thị trường thứ cấp giúp nhà đầu tư đổi trái phiếu thành tiền trước khi đáo hạn, nhưng giá phụ thuộc lãi suất và niềm tin.'] },
                { title: 'Điều phải xem kỹ', bullets: ['Mục đích phát hành: tái nợ, mở rộng đầu tư hay vá dòng tiền ngắn hạn.', 'Tài sản đảm bảo, covenant và chất lượng báo cáo của tổ chức phát hành.', 'Chênh lệch lợi suất với TPCP cho thấy thị trường đang đánh giá rủi ro cao đến đâu.'] }
            ]
        },
        advanced: {
            intro: 'Thị trường trái phiếu là bộ đo sức khỏe tài chính dài hạn của nền kinh tế vì nó phản ánh cả chi phí vốn, tín nhiệm và khả năng tái cấp vốn.',
            sections: [
                { title: 'Biến số phải theo dõi', bullets: ['Duration và độ nhạy giá với lãi suất.', 'Khối lượng đáo hạn tập trung theo quý hoặc theo năm của từng nhóm phát hành.', 'Mức độ nắm giữ bởi ngân hàng, quỹ, bảo hiểm hay nhà đầu tư cá nhân.'] },
                { title: 'Điểm dễ vỡ', bullets: ['Khi thị trường thứ cấp mất thanh khoản, trái phiếu tốt cũng bị bán tháo theo trái phiếu xấu.', 'Rủi ro lớn nhất không chỉ là vỡ nợ, mà còn là không tái cấp vốn được khi đáo hạn dồn cục.', 'Định giá trái phiếu sai làm méo cả hệ thống vì nó là tài sản cầm cố và chuẩn tham chiếu cho nhiều lớp nợ khác.'] }
            ]
        }
    },
    'real-estate': {
        simple: {
            intro: 'Bất động sản hấp dẫn vì vừa cho cảm giác an toàn vừa có thể dùng đòn bẩy lớn, nhưng đó cũng là lý do nó thường tạo chu kỳ lên xuống rất mạnh.',
            sections: [
                { title: 'Điều cần nhớ', bullets: ['Bất động sản là tài sản lớn nhưng thanh khoản chậm; bán được giá mong muốn và bán được ngay là hai chuyện khác nhau.', 'Giá trị nhà đất chịu ảnh hưởng mạnh bởi lãi suất, tín dụng và pháp lý.', 'Nhà để ở, tài sản cho thuê và đất đầu cơ là ba câu chuyện rất khác nhau.'] },
                { title: 'Nhìn trong đời thực', bullets: ['Khi tín dụng rẻ, người mua chấp nhận giá cao hơn vì khoản trả hàng tháng thấy “vừa sức”.', 'Khi pháp lý nghẽn hoặc lãi suất tăng, giao dịch có thể đóng băng dù giá niêm yết chưa giảm ngay.'] }
            ]
        },
        detail: {
            intro: 'Bất động sản nằm giữa tài sản sử dụng và tài sản tài chính vì nó vừa tạo chỗ ở/dòng tiền, vừa là tài sản thế chấp để vay nợ.',
            sections: [
                { title: 'Dòng tiền chính', bullets: ['Tiền đi vào từ người mua nhà, người thuê, nhà đầu tư góp vốn hoặc ngân hàng tài trợ dự án.', 'Tiền đi ra qua mua đất, xây dựng, lãi vay, chi phí pháp lý và vận hành tài sản.', 'Giá trị trên giấy có thể tăng nhanh nhưng tiền thật chỉ về khi bán được hoặc cho thuê được.'] },
                { title: 'Điều phải xem kỹ', bullets: ['Pháp lý dự án và quyền sử dụng đất trước cả vị trí đẹp.', 'Khả năng hấp thụ: ai sẽ mua hoặc thuê với mức giá đó.', 'Tỷ lệ nợ trên tài sản và sức chịu đựng của dòng tiền nếu lãi suất tăng.'] }
            ]
        },
        advanced: {
            intro: 'Ở tầng sâu hơn, bất động sản là tài sản thế chấp trung tâm của hệ tín dụng, nên chu kỳ của nó có thể kéo theo ngân hàng, trái phiếu và tiêu dùng.',
            sections: [
                { title: 'Biến số phải theo dõi', bullets: ['Tốc độ tín dụng BĐS, tỷ lệ tồn kho dự án và khả năng hấp thụ thật.', 'Price-to-income và price-to-rent để xem mức giá có tách khỏi dòng tiền sử dụng hay không.', 'Mức độ tập trung vốn vào một phân khúc: nhà ở, nghỉ dưỡng, khu công nghiệp hay đất nền.'] },
                { title: 'Điểm dễ vỡ', bullets: ['Tài sản tăng giá bằng đòn bẩy rất dễ mất thanh khoản khi người mua mới biến mất.', 'BĐS có thể “không có giao dịch” rất lâu trước khi giá trên sổ sách chịu giảm thực sự.', 'Sốc pháp lý hoặc trái phiếu có thể làm dự án dừng lại dù nhu cầu nhà ở dài hạn vẫn còn.'] }
            ]
        }
    },
    'commodity': {
        simple: {
            intro: 'Hàng hóa là lớp tài sản gắn trực tiếp với cuộc sống hàng ngày và chi phí sản xuất, nên biến động của nó đi vào lạm phát rất nhanh.',
            sections: [
                { title: 'Điều cần nhớ', bullets: ['Giá dầu ảnh hưởng vận tải và sản xuất; giá vàng ảnh hưởng tâm lý phòng thủ; giá nông sản ảnh hưởng chi tiêu thiết yếu.', 'Hàng hóa không tạo dòng tiền như cổ phiếu hay trái phiếu; lợi nhuận đến từ chênh lệch giá và chu kỳ cung cầu.', 'Nhiều nhà đầu tư mua hàng hóa không phải để lời, mà để phòng hộ rủi ro.'] },
                { title: 'Nhìn trong đời thực', bullets: ['Giá nguyên liệu đầu vào tăng làm doanh nghiệp hoặc giảm biên lợi nhuận hoặc tăng giá bán cho người tiêu dùng.', 'Vàng thường được chú ý mạnh khi niềm tin vào tiền giấy hoặc hệ tài chính giảm.'] }
            ]
        },
        detail: {
            intro: 'Hàng hóa là nơi hội tụ của địa chính trị, thời tiết, tồn kho, logistics và kỳ vọng tăng trưởng toàn cầu.',
            sections: [
                { title: 'Dòng tiền chính', bullets: ['Tiền đi vào qua nhu cầu sản xuất, tiêu dùng, dự trữ chiến lược hoặc đầu cơ tài chính.', 'Tiền đi ra khi người nắm giữ bán vật chất, đóng vị thế phái sinh hoặc cắt hàng tồn kho.', 'Chu kỳ hàng hóa nhiều khi đảo chiều trước khi dữ liệu tăng trưởng chính thức phản ánh.'] },
                { title: 'Điều phải xem kỹ', bullets: ['Tồn kho vật chất và công suất cung toàn cầu.', 'Vai trò của đầu cơ tài chính: giá đang do nhu cầu thật hay do dòng tiền đầu cơ đẩy lên.', 'Liên hệ giữa giá hàng hóa với tỷ giá và chính sách lãi suất.'] }
            ]
        },
        advanced: {
            intro: 'Ở tầng sâu hơn, hàng hóa là “chi phí nền” của nền kinh tế. Một cú sốc tại đây có thể ép cả lạm phát, lợi nhuận doanh nghiệp và chính sách tiền tệ đổi hướng.',
            sections: [
                { title: 'Biến số phải theo dõi', bullets: ['Backwardation/contango để xem cấu trúc giá có căng thẳng hay không.', 'Mối tương quan giữa hàng hóa và USD.', 'Tỷ trọng hàng hóa trong cấu trúc chi phí của các ngành nhạy cảm như vận tải, điện, xây dựng.'] },
                { title: 'Điểm dễ vỡ', bullets: ['Đầu cơ quá mức trên thị trường phái sinh có thể làm giá tách khỏi cung cầu vật chất trong ngắn hạn.', 'Biến cố địa chính trị làm đứt nguồn cung nhanh hơn khả năng thay thế của nền kinh tế.', 'Giá hàng hóa cao kéo dài có thể đẩy lạm phát lên mức buộc NHTW phải siết mạnh hơn dự kiến.'] }
            ]
        }
    },
    'forex': {
        simple: {
            intro: 'Forex là nơi các đồng tiền được định giá so với nhau, nên nó phản ánh sức mạnh tương đối của nền kinh tế, lãi suất và niềm tin.',
            sections: [
                { title: 'Điều cần nhớ', bullets: ['Tỷ giá không chỉ là con số đổi tiền, mà là giá của niềm tin vào đồng tiền đó.', 'Doanh nghiệp nhập khẩu và vay ngoại tệ rất nhạy với biến động tỷ giá.', 'Ngân hàng trung ương thường can thiệp forex để tránh tỷ giá biến động quá nhanh, không nhất thiết để cố định một mức giá.'] },
                { title: 'Nhìn trong đời thực', bullets: ['USD mạnh làm nhập khẩu đắt hơn, trả nợ ngoại tệ nặng hơn và có thể ép lạm phát trong nước.', 'Nhà xuất khẩu có thể hưởng lợi tỷ giá nhưng chưa chắc lời hơn nếu đầu vào cũng nhập khẩu bằng ngoại tệ.'] }
            ]
        },
        detail: {
            intro: 'Forex là thị trường thanh khoản nhất thế giới vì nó nằm dưới mọi hoạt động thương mại, đầu tư và phòng hộ xuyên biên giới.',
            sections: [
                { title: 'Dòng tiền chính', bullets: ['Tiền đi vào thị trường qua giao dịch thương mại, đầu tư danh mục, FDI, kiều hối và hoạt động của ngân hàng.', 'Tiền đi ra qua thanh toán nhập khẩu, trả nợ, du lịch, đầu tư ra nước ngoài và đầu cơ rút vốn.', 'Phần lớn giá trị giao dịch không phải giao ngay mà nằm ở kỳ hạn và hoán đổi.'] },
                { title: 'Điều phải xem kỹ', bullets: ['Mục đích mua bán ngoại tệ: phòng hộ hay đầu cơ.', 'Khả năng tự tạo ngoại tệ của doanh nghiệp so với nghĩa vụ bằng ngoại tệ.', 'Chênh lệch lãi suất là lực hút vốn quan trọng nhưng không phải lực duy nhất.'] }
            ]
        },
        advanced: {
            intro: 'Ở tầng sâu hơn, forex là nơi chính sách tiền tệ trong nước gặp thẳng điều kiện tài chính toàn cầu, đặc biệt khi USD trở thành đồng tiền trung tâm.',
            sections: [
                { title: 'Biến số phải theo dõi', bullets: ['REER/NEER để biết đồng tiền mạnh hay yếu theo nghĩa cạnh tranh thương mại.', 'Vị thế ngoại tệ ròng của ngân hàng và doanh nghiệp.', 'Cấu trúc kỳ hạn nợ ngoại tệ so với dự trữ ngoại hối và dòng tiền ngoại tệ.'] },
                { title: 'Điểm dễ vỡ', bullets: ['Doanh nghiệp vay USD nhưng thu VND sẽ chịu rủi ro kép nếu doanh thu yếu và tỷ giá tăng.', 'Can thiệp tỷ giá tốn dự trữ nếu nền tảng vốn vào yếu đi kéo dài.', 'Trong khủng hoảng, thanh khoản forex có thể khô rất nhanh ở các đồng tiền không phải đồng chủ chốt.'] }
            ]
        }
    },
    'insurance': {
        simple: {
            intro: 'Bảo hiểm là cơ chế chuyển rủi ro của số ít người không may sang một quỹ phí đều đặn của số đông.',
            sections: [
                { title: 'Điều cần nhớ', bullets: ['Bạn đóng phí đều để đổi lấy quyền được bảo vệ khi rủi ro hiếm nhưng nặng xảy ra.', 'Công ty bảo hiểm chỉ bền nếu định giá đúng xác suất rủi ro và đầu tư quỹ phí đủ an toàn.', 'Bảo hiểm tốt không chỉ là sản phẩm trả nhiều tiền, mà là sản phẩm trả đúng lúc và đúng cam kết.'] },
                { title: 'Nhìn trong đời thực', bullets: ['Một năm ít bồi thường không có nghĩa công ty bảo hiểm khỏe; sức khỏe thật là có chịu được năm bồi thường lớn không.', 'Bảo hiểm nhân thọ, phi nhân thọ và y tế có logic tiền rất khác nhau.'] }
            ]
        },
        detail: {
            intro: 'Doanh nghiệp bảo hiểm có hai động cơ lợi nhuận: underwriting và đầu tư quỹ phí trong thời gian chờ chi trả.',
            sections: [
                { title: 'Dòng tiền chính', bullets: ['Tiền đi vào qua phí bảo hiểm, phí tái tục và lợi tức đầu tư quỹ dự phòng.', 'Tiền đi ra qua bồi thường, hoa hồng đại lý, chi phí thẩm định và tái bảo hiểm.', 'Khoảng trễ giữa thu phí và chi trả là nơi bảo hiểm kiếm thêm lợi nhuận đầu tư.'] },
                { title: 'Điều phải xem kỹ', bullets: ['Combined ratio cho biết bảo hiểm có lãi từ nghiệp vụ cốt lõi hay không.', 'Cơ cấu đầu tư phải khớp với kỳ hạn nghĩa vụ bồi thường.', 'Chất lượng tái bảo hiểm rất quan trọng vì tổn thất lớn có thể nuốt hết nhiều năm lợi nhuận.'] }
            ]
        },
        advanced: {
            intro: 'Ở tầng sâu hơn, bảo hiểm là nơi nền kinh tế định giá những rủi ro mà cá nhân hoặc doanh nghiệp không thể tự gánh trọn.',
            sections: [
                { title: 'Biến số phải theo dõi', bullets: ['Loss ratio theo từng dòng sản phẩm.', 'Chênh lệch lãi suất vì nó tác động mạnh tới danh mục đầu tư phòng thủ của bảo hiểm.', 'Khả năng điều chỉnh phí khi xác suất rủi ro mới thay đổi.'] },
                { title: 'Điểm dễ vỡ', bullets: ['Định giá phí thấp để lấy thị phần thường chỉ trì hoãn vấn đề vào tương lai.', 'Tài sản đầu tư quá rủi ro có thể làm bảo hiểm gặp khủng hoảng đúng lúc bồi thường tăng.', 'Rủi ro thiên tai, dịch bệnh hoặc pháp lý có thể làm mô hình xác suất cũ không còn hữu ích.'] }
            ]
        }
    },
    'pension-fund': {
        simple: {
            intro: 'Quỹ hưu trí là cách mang một phần thu nhập hôm nay sang tương lai, để khi sức lao động giảm bạn vẫn còn dòng tiền sống được.',
            sections: [
                { title: 'Điều cần nhớ', bullets: ['Hưu trí là bài toán nhiều thập kỷ, nên an toàn và sức mua dài hạn quan trọng hơn lợi nhuận nóng ngắn hạn.', 'Lương hưu đều đặn nhìn nhỏ nhưng cực quý vì nó giảm áp lực phải bán tài sản lúc thị trường xấu.', 'Đóng sớm và đều tạo hiệu ứng tích lũy mạnh hơn rất nhiều so với đóng trễ với số tiền lớn.'] },
                { title: 'Nhìn trong đời thực', bullets: ['Quỹ hưu trí khỏe khi vừa chi trả được hiện tại vừa không bị lạm phát ăn mòn tương lai.', 'Dân số già hóa làm bài toán hưu trí khó hơn vì người hưởng tăng nhanh hơn người đóng.'] }
            ]
        },
        detail: {
            intro: 'Quỹ hưu trí phải cân bằng ba thứ cùng lúc: nghĩa vụ chi trả rất dài, nhu cầu thanh khoản định kỳ và rủi ro lạm phát.',
            sections: [
                { title: 'Dòng tiền chính', bullets: ['Tiền đi vào qua đóng góp bắt buộc hoặc tự nguyện của người lao động và người sử dụng lao động.', 'Tiền đi ra qua chi trả hưu trí, trợ cấp hoặc chuyển quyền lợi.', 'Phần còn lại được đầu tư để duy trì giá trị thực của quỹ trong thời gian rất dài.'] },
                { title: 'Điều phải xem kỹ', bullets: ['Tỷ lệ tài sản dài hạn so với nghĩa vụ chi trả dài hạn.', 'Mức độ phụ thuộc vào trái phiếu cố định trong môi trường lạm phát biến động.', 'Khả năng điều chỉnh lợi ích hoặc đóng góp khi cấu trúc dân số thay đổi.'] }
            ]
        },
        advanced: {
            intro: 'Ở tầng sâu hơn, quỹ hưu trí là người nắm giữ vốn dài hạn hiếm hoi của nền kinh tế và có thể đóng vai trò neo ổn định cho nhiều thị trường tài chính.',
            sections: [
                { title: 'Biến số phải theo dõi', bullets: ['Funding ratio: tài sản hiện tại có đủ bù nghĩa vụ tương lai không.', 'Kỳ hạn bình quân của nghĩa vụ chi trả so với kỳ hạn danh mục tài sản.', 'Tốc độ già hóa dân số và năng suất lao động của nền kinh tế.'] },
                { title: 'Điểm dễ vỡ', bullets: ['Lợi suất thấp kéo dài làm quỹ phải tăng rủi ro để đuổi theo mục tiêu lợi nhuận.', 'Lạm phát cao làm giá trị thực của lương hưu sụt nhanh nếu quỹ quá nặng tài sản cố định.', 'Chính sách dân số và lao động thay đổi có thể khiến giả định cân đối quỹ trở nên lạc hậu.'] }
            ]
        }
    },
    'credit-rating': {
        simple: {
            intro: 'Xếp hạng tín dụng là cách thị trường dùng một ngôn ngữ ngắn gọn để mô tả xác suất trả nợ của một tổ chức hoặc một trái phiếu.',
            sections: [
                { title: 'Điều cần nhớ', bullets: ['Rating không bảo đảm chắc chắn người đi vay sẽ trả đủ, nó chỉ là đánh giá xác suất và chất lượng tín dụng tại một thời điểm.', 'Xếp hạng cao giúp đi vay rẻ hơn; xếp hạng thấp làm chi phí vốn tăng và thị trường thận trọng hơn.', 'Một bậc xếp hạng thay đổi có thể kéo theo biến động lớn ở giá trái phiếu và cổ phiếu.'] },
                { title: 'Nhìn trong đời thực', bullets: ['Doanh nghiệp cần rating tốt để phát hành trái phiếu thuận lợi hơn.', 'Nhà đầu tư tổ chức thường dùng rating như bộ lọc đầu tiên trước khi xem sâu hơn vào báo cáo tài chính.'] }
            ]
        },
        detail: {
            intro: 'Tổ chức xếp hạng không chỉ đọc báo cáo tài chính; họ đọc mô hình kinh doanh, quản trị, ngành, cấu trúc vốn và khả năng sống sót trong kịch bản xấu.',
            sections: [
                { title: 'Dữ liệu họ nhìn vào', bullets: ['Dòng tiền hoạt động, đòn bẩy, khả năng trả lãi và lịch sử tái cấp vốn.', 'Chất lượng tài sản bảo đảm, pháp lý của nghĩa vụ nợ và vị trí của trái chủ trong cấu trúc nợ.', 'Sức mạnh ngành, mức độ phụ thuộc khách hàng và năng lực quản trị của ban lãnh đạo.'] },
                { title: 'Cách kết quả lan ra thị trường', bullets: ['Rating tốt làm spread trái phiếu co lại và tăng khả năng tiếp cận nhà đầu tư lớn.', 'Rating xấu hoặc outlook âm có thể khóa cửa thị trường vốn trước cả khi doanh nghiệp thật sự vỡ nợ.', 'Ngân hàng và quỹ thường dùng rating để quyết định hạn mức nắm giữ hoặc yêu cầu bổ sung tài sản đảm bảo.'] }
            ]
        },
        advanced: {
            intro: 'Ở tầng sâu hơn, rating là một cơ chế chuẩn hóa niềm tin, nhưng nó cũng có giới hạn vì thường phản ứng chậm hơn cú sốc đột ngột và phụ thuộc vào chất lượng dữ liệu đầu vào.',
            sections: [
                { title: 'Biến số phải theo dõi', bullets: ['Độ ổn định của dòng tiền qua nhiều chu kỳ, không chỉ năm gần nhất.', 'Rủi ro tái cấp vốn và cấu trúc ưu tiên thanh toán giữa các lớp nợ.', 'Tính độc lập và uy tín của chính tổ chức xếp hạng.'] },
                { title: 'Điểm dễ vỡ', bullets: ['Rating quá phụ thuộc quá khứ nên dễ chậm với mô hình kinh doanh đang xấu rất nhanh.', 'Thị trường có thể mất niềm tin trước khi rating chính thức bị hạ.', 'Nếu nhà đầu tư coi rating là đủ, họ có thể bỏ qua những rủi ro nằm ngoài mô hình chuẩn.'] }
            ]
        }
    },
    'fintech': {
        simple: {
            intro: 'Fintech làm cho tiền di chuyển nhanh, rẻ và tiện hơn, nhưng phía sau lớp trải nghiệm mượt đó vẫn là bài toán vốn, thanh khoản và kiểm soát rủi ro.',
            sections: [
                { title: 'Điều cần nhớ', bullets: ['Fintech giỏi nhất ở việc cắt ma sát: ít bước hơn, nhanh hơn, dễ dùng hơn.', 'Công nghệ không xóa rủi ro tài chính; nó chỉ thay cách rủi ro được phát hiện và quản lý.', 'Doanh thu fintech thường đến từ phí giao dịch, chênh lệch dịch vụ, dữ liệu hoặc bán kèm sản phẩm tài chính khác.'] },
                { title: 'Nhìn trong đời thực', bullets: ['Một ví điện tử có vẻ chỉ là ứng dụng, nhưng phía sau là mạng lưới ngân hàng, merchant, đối soát và chống gian lận.', 'Fintech dễ tăng trưởng nhanh nhưng cũng dễ đốt tiền rất nhanh nếu giữ người dùng bằng trợ giá.'] }
            ]
        },
        detail: {
            intro: 'Fintech là lớp trung gian mới giữa người dùng và hạ tầng tài chính cũ, nên thành công của nó phụ thuộc cả công nghệ lẫn khả năng kết nối hệ thống truyền thống.',
            sections: [
                { title: 'Dòng tiền chính', bullets: ['Tiền đi vào qua số dư ví, settlement, vốn đầu tư, doanh thu phí và sản phẩm đi kèm.', 'Tiền đi ra qua chi phí vận hành công nghệ, khuyến mãi, marketing, chống gian lận và chi phí tuân thủ.', 'Nhiều fintech chưa lãi vì ưu tiên mua người dùng trước, tìm lợi nhuận sau.'] },
                { title: 'Điều phải xem kỹ', bullets: ['Tỷ lệ giữ người dùng, chi phí mua người dùng và mức độ sử dụng lặp lại.', 'Tỷ lệ gian lận, chargeback, lỗi đối soát và chất lượng kết nối với ngân hàng.', 'Doanh thu thật đến từ phí bền vững hay chỉ từ khuyến mại đẩy giao dịch.'] }
            ]
        },
        advanced: {
            intro: 'Ở tầng sâu hơn, fintech là cuộc chơi của network effect, dữ liệu và giấy phép: ai kiểm soát điểm chạm khách hàng sẽ có lợi thế phân phối rất lớn.',
            sections: [
                { title: 'Biến số phải theo dõi', bullets: ['Gross margin sau chi phí xử lý giao dịch và hoàn tiền.', 'Mức độ phụ thuộc vào một đối tác ngân hàng, nhà phát hành thẻ hoặc cổng thanh toán.', 'Khả năng mở rộng sản phẩm mới trên cùng một tập khách hàng.'] },
                { title: 'Điểm dễ vỡ', bullets: ['Tăng trưởng dựa quá nhiều vào trợ giá sẽ sụp nhanh khi nguồn vốn đầu tư co lại.', 'Một lỗi bảo mật hoặc gian lận lớn có thể phá niềm tin tích lũy nhiều năm.', 'Fintech không có đệm vốn mạnh như ngân hàng nên sốc vận hành có thể chuyển rất nhanh thành khủng hoảng thanh khoản.'] }
            ]
        }
    },
    'crypto': {
        simple: {
            intro: 'Crypto hấp dẫn vì hứa hẹn tự do, minh bạch và lợi nhuận lớn, nhưng đồng thời mang theo biến động cực mạnh và rủi ro hạ tầng mà người mới rất dễ đánh giá thấp.',
            sections: [
                { title: 'Điều cần nhớ', bullets: ['Không phải mọi token đều giống nhau; có đồng là “tiền”, có đồng là cổ phần kiểu mới, có đồng chỉ là câu chuyện đầu cơ.', 'Biến động cao không phải lỗi của crypto, mà là bản chất của một thị trường còn non và đòn bẩy nhiều.', 'Quy tắc đầu tiên là bảo vệ tài sản và khóa riêng, trước cả việc tìm lợi nhuận.'] },
                { title: 'Nhìn trong đời thực', bullets: ['Một stablecoin trục trặc có thể làm rung chuyển cả thị trường vì rất nhiều giao dịch và thanh khoản bám vào nó.', 'Lãi suất DeFi cao thường không miễn phí; nó luôn phản ánh một rủi ro nào đó ở phía đối diện.'] }
            ]
        },
        detail: {
            intro: 'Crypto là hệ tài chính song song: có tiền thanh toán, có sàn, có vay mượn, có tài sản thế chấp và có các chu kỳ thanh lý riêng của nó.',
            sections: [
                { title: 'Dòng tiền chính', bullets: ['Tiền đi vào qua nhà đầu tư mới, stablecoin, hoạt động mining/staking và dòng vốn đầu cơ.', 'Tiền đi ra qua chốt lời về fiat, thanh lý đòn bẩy, rút stablecoin hoặc sụp đổ niềm tin ở một giao thức lớn.', 'Thanh khoản không phân bố đều; phần lớn chỉ tập trung ở một số tài sản lõi và stablecoin lớn.'] },
                { title: 'Điều phải xem kỹ', bullets: ['Rủi ro lưu ký: ai đang giữ khóa riêng và bạn có thực sự sở hữu tài sản hay không.', 'Rủi ro nền tảng: smart contract, cầu nối, oracle, sàn tập trung.', 'Đòn bẩy ẩn trong hệ sinh thái có thể lớn hơn nhiều so với cảm nhận của người tham gia lẻ.'] }
            ]
        },
        advanced: {
            intro: 'Ở tầng sâu hơn, crypto là cuộc thử nghiệm về tài sản số và tài chính lập trình được, nhưng phần lớn rủi ro vẫn quay về ba thứ cũ: thanh khoản, niềm tin và đòn bẩy.',
            sections: [
                { title: 'Biến số phải theo dõi', bullets: ['Stablecoin supply, funding rate và open interest để biết mức độ nóng của dòng tiền đầu cơ.', 'Thanh khoản thực trên sàn, không chỉ vốn hóa niêm yết.', 'Mức độ tập trung của tokenomics: ai nắm giữ, khóa ra sao và có lịch xả như thế nào.'] },
                { title: 'Điểm dễ vỡ', bullets: ['Một cú sập niềm tin ở stablecoin hoặc sàn lớn có thể đóng băng thanh khoản toàn hệ.', 'Lợi nhuận quá cao thường đến từ cấu trúc đòn bẩy hoặc mô hình chưa chứng minh được tính bền vững.', 'Sự phân tách giữa giá token và giá trị ứng dụng thực vẫn là điểm yếu cố hữu của nhiều dự án.'] }
            ]
        }
    },
    'startup': {
        simple: {
            intro: 'Startup sống bằng tốc độ học hỏi và tốc độ đốt tiền hợp lý. Nó không có nhiều tài sản cứng, nên niềm tin của nhà đầu tư và khả năng tăng trưởng là nguồn sống.',
            sections: [
                { title: 'Điều cần nhớ', bullets: ['Startup không cần lãi sớm bằng công ty trưởng thành, nhưng phải chứng minh được con đường đến lãi.', 'Vốn gọi được không phải doanh thu; rất nhiều startup chết trong khi tiền đã vào tài khoản trước đó.', 'Định giá cao là con dao hai lưỡi: giúp gọi vốn dễ lúc đầu nhưng gây áp lực cực lớn ở vòng sau.'] },
                { title: 'Nhìn trong đời thực', bullets: ['Một startup tăng trưởng người dùng nhanh nhưng doanh thu yếu có thể chỉ đang mua tăng trưởng bằng tiền nhà đầu tư.', 'Runway quyết định startup còn bao lâu để sửa sai.'] }
            ]
        },
        detail: {
            intro: 'Bên trong startup là bài toán đổi tiền mặt hôm nay lấy xác suất tạo ra một công ty rất lớn trong tương lai.',
            sections: [
                { title: 'Dòng tiền chính', bullets: ['Tiền đi vào từ nhà sáng lập, angel, VC, doanh thu sớm hoặc hỗ trợ chiến lược.', 'Tiền đi ra vào sản phẩm, nhân sự, marketing, hạ tầng và mở rộng thị trường.', 'Nếu burn rate quá cao so với tốc độ học hỏi, startup sẽ phải gọi vốn ở thế yếu.'] },
                { title: 'Điều phải xem kỹ', bullets: ['CAC, retention, gross margin và thời gian hoàn vốn khách hàng.', 'Runway còn lại sau khi loại bỏ các giả định quá lạc quan.', 'Tài sản vô hình nào thật sự khác biệt: công nghệ, dữ liệu, cộng đồng hay chỉ là câu chuyện tốt.'] }
            ]
        },
        advanced: {
            intro: 'Ở tầng sâu hơn, startup là thị trường định giá xác suất: phần lớn thất bại, một số rất ít thắng lớn và phải bù cho toàn bộ phần còn lại.',
            sections: [
                { title: 'Biến số phải theo dõi', bullets: ['Mức dilution qua từng vòng vốn và khả năng duy trì động lực của đội sáng lập.', 'Tốc độ tăng trưởng chất lượng hay tăng trưởng nhờ đốt khuyến mại.', 'Khả năng chuyển từ “câu chuyện tăng trưởng” sang “máy tạo tiền” khi vốn đắt hơn.'] },
                { title: 'Điểm dễ vỡ', bullets: ['Thị trường vốn xấu đi làm startup từ chỗ “sẽ gọi vòng sau” chuyển thành “phải cắt giảm ngay”.', 'Định giá quá cao ở vòng sớm dễ dẫn tới down round và mất động lực của cả đội ngũ.', 'Tài sản vô hình đẹp trên pitch deck chưa chắc đủ mạnh để tạo moats ngoài đời thực.'] }
            ]
        }
    }
};
