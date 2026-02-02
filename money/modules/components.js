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
