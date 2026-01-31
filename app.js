// ==================== DATA ====================

// Component explanations with 3 levels of detail
const componentData = {
    'central-bank': {
        icon: '🏛️',
        title: 'Ngân Hàng Trung Ương',
        order: 1,
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> Ngân hàng trung ương giống như "nhà máy in tiền" của cả nước.</p>
            
            <div class="example-box">
                <strong>Ví dụ:</strong> Ở Việt Nam, đó là Ngân Hàng Nhà Nước Việt Nam. Ở Mỹ là FED (Federal Reserve).
            </div>

            <h4>📌 Làm gì?</h4>
            <ul>
                <li>🖨️ In tiền mới</li>
                <li>📊 Quyết định bao nhiêu tiền được lưu thông</li>
                <li>💰 Cho các ngân hàng khác vay tiền</li>
            </ul>

            <div class="warning-box">
                <strong>⚠️ Quan trọng:</strong> Nếu in quá nhiều tiền → tiền mất giá → đồ đạc đắt hơn (lạm phát)
            </div>
        `,
        detail: `
            <p><strong>Ngân Hàng Trung Ương</strong> là cơ quan quản lý tiền tệ cao nhất của quốc gia, đóng vai trò "ngân hàng của các ngân hàng".</p>
            
            <h4>🎯 Chức năng chính:</h4>
            <ul>
                <li><strong>Phát hành tiền:</strong> Là nơi duy nhất được phép in tiền mặt và tạo tiền điện tử</li>
                <li><strong>Chính sách tiền tệ:</strong> Điều chỉnh lãi suất cơ bản để kiểm soát lạm phát</li>
                <li><strong>Cho vay cuối cùng:</strong> Cứu các ngân hàng thương mại khi gặp khó khăn</li>
                <li><strong>Dự trữ ngoại hối:</strong> Giữ USD, vàng để ổn định tỷ giá</li>
            </ul>

            <h4>💡 Cách tạo tiền:</h4>
            <ol>
                <li>Mua trái phiếu chính phủ từ ngân hàng → Tiền mới vào hệ thống</li>
                <li>Giảm tỷ lệ dự trữ bắt buộc → Ngân hàng cho vay được nhiều hơn</li>
                <li>Giảm lãi suất → Khuyến khích vay mượn</li>
            </ol>

            <div class="example-box">
                <strong>Ví dụ thực tế:</strong> Năm 2020, FED đã "in" hàng nghìn tỷ USD để cứu kinh tế Mỹ khỏi COVID-19. Kết quả: Chứng khoán tăng mạnh, nhưng lạm phát cũng tăng sau đó.
            </div>
        `,
        advanced: `
            <p><strong>Ngân Hàng Trung Ương</strong> thực thi chính sách tiền tệ thông qua nhiều công cụ phức tạp.</p>
            
            <h4>🔧 Công cụ chính sách tiền tệ:</h4>
            <ul>
                <li><strong>Open Market Operations (OMO):</strong> Mua/bán trái phiếu trên thị trường mở</li>
                <li><strong>Discount Rate:</strong> Lãi suất cho vay qua đêm với ngân hàng thương mại</li>
                <li><strong>Reserve Requirement:</strong> Tỷ lệ dự trữ bắt buộc</li>
                <li><strong>Quantitative Easing (QE):</strong> Mua tài sản quy mô lớn để bơm tiền</li>
            </ul>

            <h4>📊 Công thức cung tiền:</h4>
            <p><strong>M2 = MB × Money Multiplier</strong></p>
            <ul>
                <li>MB (Monetary Base): Tiền cơ sở do NHTW tạo ra</li>
                <li>Money Multiplier = 1 / Reserve Ratio</li>
            </ul>

            <h4>⚖️ Mục tiêu chính sách:</h4>
            <ul>
                <li>Lạm phát mục tiêu: 2-4%/năm</li>
                <li>Ổn định tỷ giá</li>
                <li>Hỗ trợ tăng trưởng kinh tế</li>
                <li>Đảm bảo thanh khoản hệ thống ngân hàng</li>
            </ul>

            <div class="warning-box">
                <strong>Rủi ro:</strong> In tiền quá mức → Hyperinflation (siêu lạm phát) như Venezuela, Zimbabwe.
            </div>
        `,
        keyPoints: ['Phát hành tiền', 'Lãi suất cơ bản', 'Dự trữ bắt buộc', 'Kiểm soát lạm phát', 'Chính sách tiền tệ']
    },
    'commercial-bank': {
        icon: '🏦',
        title: 'Ngân Hàng Thương Mại',
        order: 2,
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> Ngân hàng thương mại là nơi bạn gửi tiền và vay tiền hàng ngày (Vietcombank, Techcombank, ACB...)</p>
            
            <div class="example-box">
                <strong>Phép màu của ngân hàng:</strong><br>
                Bạn gửi 100 triệu → Ngân hàng giữ 10 triệu, cho người khác vay 90 triệu → Người đó gửi lại ngân hàng khác → Lại cho vay tiếp...<br><br>
                <strong>Kết quả:</strong> 100 triệu ban đầu → tạo ra gần 1 tỷ tiền trong hệ thống! 🤯
            </div>

            <h4>📌 Làm gì?</h4>
            <ul>
                <li>💰 Giữ tiền cho bạn (tài khoản, sổ tiết kiệm)</li>
                <li>💳 Cho bạn vay tiền (mua nhà, mua xe, kinh doanh)</li>
                <li>💸 Giúp bạn chuyển tiền, thanh toán</li>
            </ul>
        `,
        detail: `
            <p><strong>Ngân Hàng Thương Mại</strong> là cầu nối giữa người có tiền dư (người gửi) và người cần tiền (người vay).</p>
            
            <h4>🔄 Cơ chế nhân tiền (Fractional Reserve):</h4>
            <ol>
                <li>Bạn gửi 100 triệu</li>
                <li>Ngân hàng giữ 10% (10 triệu) làm dự trữ bắt buộc</li>
                <li>Cho công ty A vay 90 triệu</li>
                <li>Công ty A trả lương cho nhân viên B</li>
                <li>Nhân viên B gửi 90 triệu vào ngân hàng khác</li>
                <li>Ngân hàng đó giữ 9 triệu, cho vay 81 triệu...</li>
                <li>Cứ thế tiếp tục...</li>
            </ol>

            <div class="example-box">
                <strong>Công thức:</strong> Tổng tiền tạo ra = Tiền gửi ban đầu × (1 / Tỷ lệ dự trữ)<br>
                100 triệu × (1/10%) = 100 triệu × 10 = <strong>1 tỷ</strong>
            </div>

            <h4>💰 Nguồn lợi nhuận:</h4>
            <ul>
                <li>Chênh lệch lãi suất: Lãi cho vay (10%) - Lãi tiền gửi (5%) = 5%</li>
                <li>Phí dịch vụ: Chuyển tiền, thẻ tín dụng, bảo hiểm</li>
            </ul>
        `,
        advanced: `
            <h4>📊 Bảng cân đối kế toán ngân hàng:</h4>
            <p><strong>Tài sản = Nợ phải trả + Vốn chủ sở hữu</strong></p>
            
            <ul>
                <li><strong>Tài sản:</strong> Cho vay, trái phiếu, dự trữ tại NHTW</li>
                <li><strong>Nợ:</strong> Tiền gửi khách hàng, vay liên ngân hàng</li>
                <li><strong>Vốn:</strong> Vốn cổ đông, lợi nhuận giữ lại</li>
            </ul>

            <h4>📈 Các tỷ lệ an toàn:</h4>
            <ul>
                <li><strong>CAR (Capital Adequacy Ratio):</strong> Vốn/Tài sản rủi ro ≥ 8%</li>
                <li><strong>LDR (Loan to Deposit Ratio):</strong> Cho vay/Tiền gửi ≤ 85%</li>
                <li><strong>NPL (Non-Performing Loan):</strong> Nợ xấu/Tổng dư nợ < 3%</li>
            </ul>

            <h4>⚠️ Rủi ro hệ thống:</h4>
            <ul>
                <li><strong>Bank Run:</strong> Tất cả người gửi rút tiền cùng lúc → Ngân hàng phá sản</li>
                <li><strong>Domino Effect:</strong> 1 ngân hàng sập → kéo theo các ngân hàng khác</li>
                <li><strong>Credit Crunch:</strong> Ngân hàng ngừng cho vay → Kinh tế đóng băng</li>
            </ul>
        `,
        keyPoints: ['Nhận tiền gửi', 'Cho vay', 'Nhân tiền', 'Dự trữ bắt buộc', 'Chênh lệch lãi suất']
    },
    'government': {
        icon: '🏢',
        title: 'Chính Phủ',
        order: 5,
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> Chính phủ thu tiền từ mọi người (thuế) và chi tiêu cho các dịch vụ công (đường xá, bệnh viện, trường học...)</p>
            
            <h4>📌 Tiền vào:</h4>
            <ul>
                <li>💼 Thuế thu nhập cá nhân (lương của bạn)</li>
                <li>🏭 Thuế doanh nghiệp</li>
                <li>🛒 Thuế VAT (khi bạn mua đồ)</li>
            </ul>

            <h4>📌 Tiền ra:</h4>
            <ul>
                <li>🛣️ Xây đường, cầu, sân bay</li>
                <li>🏥 Bệnh viện, trường học</li>
                <li>👮 Quân đội, công an</li>
                <li>👴 Lương hưu, trợ cấp</li>
            </ul>

            <div class="warning-box">
                <strong>Khi thiếu tiền:</strong> Chính phủ phát hành trái phiếu (vay tiền của dân và ngân hàng) để chi tiêu.
            </div>
        `,
        detail: `
            <h4>📊 Ngân sách nhà nước:</h4>
            <p><strong>Thu ngân sách - Chi ngân sách = Thặng dư/Thâm hụt</strong></p>

            <ul>
                <li><strong>Thặng dư:</strong> Thu > Chi → Tiết kiệm hoặc trả nợ</li>
                <li><strong>Thâm hụt:</strong> Chi > Thu → Phải vay (phát hành trái phiếu)</li>
            </ul>

            <h4>📈 Trái phiếu chính phủ:</h4>
            <div class="example-box">
                <strong>Ví dụ:</strong> Chính phủ cần 10,000 tỷ để xây đường cao tốc<br>
                → Phát hành trái phiếu kỳ hạn 10 năm, lãi suất 5%/năm<br>
                → Ngân hàng, quỹ đầu tư, cá nhân mua<br>
                → Sau 10 năm, chính phủ trả lại gốc + lãi
            </div>

            <h4>🔄 Chính sách tài khóa:</h4>
            <ul>
                <li><strong>Mở rộng:</strong> Tăng chi tiêu, giảm thuế → Kích thích kinh tế</li>
                <li><strong>Thắt chặt:</strong> Giảm chi tiêu, tăng thuế → Kiểm soát lạm phát</li>
            </ul>
        `,
        advanced: `
            <h4>📊 Cơ cấu nợ công Việt Nam:</h4>
            <ul>
                <li>Nợ trong nước: ~60% (trái phiếu chính phủ)</li>
                <li>Nợ nước ngoài: ~40% (ODA, vay ưu đãi)</li>
                <li>Tỷ lệ nợ công/GDP: ~55-60%</li>
            </ul>

            <h4>⚖️ Tác động của nợ công:</h4>
            <ul>
                <li><strong>Crowding Out:</strong> Chính phủ vay nhiều → Lãi suất tăng → Doanh nghiệp khó vay</li>
                <li><strong>Ricardian Equivalence:</strong> Dân biết nợ sẽ phải trả bằng thuế tương lai → Tiết kiệm nhiều hơn</li>
                <li><strong>Debt Sustainability:</strong> Nợ bền vững khi tốc độ tăng GDP > Lãi suất nợ</li>
            </ul>

            <h4>🌍 Case Study - Khủng hoảng nợ Hy Lạp:</h4>
            <div class="warning-box">
                Nợ công > 180% GDP → Không thể trả nợ → Cần gói cứu trợ EU/IMF → Thắt lưng buộc bụng → Suy thoái kéo dài.
            </div>
        `,
        keyPoints: ['Thu thuế', 'Chi tiêu công', 'Trái phiếu', 'Nợ công', 'Chính sách tài khóa']
    },
    'business': {
        icon: '🏭',
        title: 'Doanh Nghiệp',
        order: 3,
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> Doanh nghiệp là nơi tạo ra hàng hóa, dịch vụ và việc làm cho mọi người.</p>
            
            <h4>🔄 Vòng đời của tiền trong doanh nghiệp:</h4>
            <ol>
                <li>💰 Vay tiền từ ngân hàng</li>
                <li>🏭 Mua máy móc, nguyên liệu</li>
                <li>👷 Thuê nhân viên, trả lương</li>
                <li>📦 Sản xuất và bán hàng</li>
                <li>💵 Thu tiền từ khách hàng</li>
                <li>🏦 Trả nợ ngân hàng + lãi</li>
                <li>🏢 Nộp thuế cho chính phủ</li>
                <li>📈 Lợi nhuận còn lại → Chia cổ tức hoặc tái đầu tư</li>
            </ol>

            <div class="example-box">
                <strong>Ví dụ:</strong> Quán phở của bạn vay 500 triệu, thuê 3 nhân viên, bán phở thu 50 triệu/tháng...
            </div>
        `,
        detail: `
            <h4>📊 Dòng tiền doanh nghiệp:</h4>
            <p><strong>Doanh thu - Chi phí = Lợi nhuận</strong></p>
            
            <div class="example-box">
                <strong>Ví dụ công ty sản xuất điện thoại:</strong>
                <ul>
                    <li>Vay ngân hàng: 10 tỷ (lãi 10%/năm)</li>
                    <li>Mua linh kiện: 6 tỷ</li>
                    <li>Lương nhân viên: 2 tỷ</li>
                    <li>Chi phí khác: 0.5 tỷ</li>
                    <li>Doanh thu bán hàng: 12 tỷ</li>
                    <li>Lợi nhuận trước thuế: 3.5 tỷ</li>
                    <li>Thuế TNDN (20%): 0.7 tỷ</li>
                    <li>Lợi nhuận sau thuế: 2.8 tỷ</li>
                </ul>
            </div>

            <h4>💡 Các nguồn vốn:</h4>
            <ul>
                <li><strong>Vay ngân hàng:</strong> Phải trả lãi, có tài sản đảm bảo</li>
                <li><strong>Phát hành cổ phiếu:</strong> Chia sẻ quyền sở hữu</li>
                <li><strong>Phát hành trái phiếu:</strong> Vay từ nhà đầu tư</li>
                <li><strong>Lợi nhuận giữ lại:</strong> Không chia cổ tức, tái đầu tư</li>
            </ul>
        `,
        advanced: `
            <h4>📈 Phân tích tài chính doanh nghiệp:</h4>
            <ul>
                <li><strong>ROE (Return on Equity):</strong> Lợi nhuận/Vốn chủ sở hữu - Hiệu quả sử dụng vốn</li>
                <li><strong>ROA (Return on Assets):</strong> Lợi nhuận/Tổng tài sản - Hiệu quả sử dụng tài sản</li>
                <li><strong>Debt/Equity:</strong> Nợ/Vốn - Mức độ đòn bẩy</li>
                <li><strong>Current Ratio:</strong> Tài sản ngắn hạn/Nợ ngắn hạn - Khả năng thanh toán</li>
            </ul>

            <h4>🔄 Chu kỳ tiền mặt (Cash Conversion Cycle):</h4>
            <p><strong>CCC = DIO + DSO - DPO</strong></p>
            <ul>
                <li>DIO: Số ngày tồn kho</li>
                <li>DSO: Số ngày thu tiền khách hàng</li>
                <li>DPO: Số ngày trả tiền nhà cung cấp</li>
            </ul>

            <div class="warning-box">
                <strong>Rủi ro:</strong> CCC cao → Cần nhiều vốn lưu động → Chi phí tài chính cao → Dễ mất thanh khoản
            </div>
        `,
        keyPoints: ['Vay vốn', 'Trả lương', 'Sản xuất', 'Doanh thu', 'Nộp thuế', 'Cổ tức']
    },
    'individual': {
        icon: '👥',
        title: 'Người Dân',
        order: 4,
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> Đây là bạn và tôi - những người đi làm, kiếm tiền, tiêu tiền và tiết kiệm.</p>
            
            <h4>💰 Tiền vào (Thu nhập):</h4>
            <ul>
                <li>💼 Lương đi làm</li>
                <li>📈 Lãi tiết kiệm, cổ tức</li>
                <li>🏠 Tiền cho thuê nhà</li>
                <li>🎁 Quà, thừa kế</li>
            </ul>

            <h4>💸 Tiền ra (Chi tiêu):</h4>
            <ul>
                <li>🍜 Ăn uống</li>
                <li>🏠 Tiền nhà, điện nước</li>
                <li>🚗 Đi lại</li>
                <li>📱 Mua sắm</li>
                <li>🏦 Trả nợ vay</li>
            </ul>

            <div class="example-box">
                <strong>Công thức vàng:</strong><br>
                Thu nhập - Chi tiêu = Tiết kiệm<br>
                Tiết kiệm → Đầu tư → Tiền đẻ ra tiền 💰
            </div>
        `,
        detail: `
            <h4>📊 Quản lý tài chính cá nhân:</h4>
            
            <p><strong>Quy tắc 50/30/20:</strong></p>
            <ul>
                <li>50% - Nhu cầu thiết yếu (nhà, ăn, đi lại)</li>
                <li>30% - Mong muốn (giải trí, du lịch, mua sắm)</li>
                <li>20% - Tiết kiệm và đầu tư</li>
            </ul>

            <h4>💡 Phân biệt nợ tốt và nợ xấu:</h4>
            <div class="example-box">
                <strong>Nợ tốt:</strong> Vay mua nhà cho thuê (tiền thuê > tiền trả góp)<br>
                <strong>Nợ xấu:</strong> Vay tín dụng mua iPhone mới (lãi 20-30%/năm)
            </div>

            <h4>📈 Các kênh đầu tư:</h4>
            <ul>
                <li>🏦 Tiết kiệm ngân hàng: An toàn, lãi thấp (5-7%)</li>
                <li>📈 Cổ phiếu: Rủi ro cao, lợi nhuận cao</li>
                <li>🏠 Bất động sản: Vốn lớn, dài hạn</li>
                <li>🥇 Vàng: Bảo toàn giá trị khi lạm phát</li>
            </ul>
        `,
        advanced: `
            <h4>📊 Lập kế hoạch tài chính:</h4>
            
            <p><strong>1. Quỹ khẩn cấp:</strong></p>
            <ul>
                <li>3-6 tháng chi tiêu</li>
                <li>Để trong tài khoản tiết kiệm dễ rút</li>
            </ul>

            <p><strong>2. Bảo hiểm:</strong></p>
            <ul>
                <li>Bảo hiểm y tế: Bắt buộc</li>
                <li>Bảo hiểm nhân thọ: Nếu có người phụ thuộc</li>
            </ul>

            <p><strong>3. Đầu tư dài hạn:</strong></p>
            <ul>
                <li>Dollar-Cost Averaging: Đầu tư định kỳ hàng tháng</li>
                <li>Đa dạng hóa danh mục</li>
                <li>Tái cân bằng hàng năm</li>
            </ul>

            <h4>📈 Công thức lãi kép:</h4>
            <div class="example-box">
                <strong>A = P(1 + r)^n</strong><br>
                Gửi 100 triệu, lãi 8%/năm, sau 20 năm = <strong>466 triệu</strong><br>
                Sức mạnh của thời gian + lãi kép!
            </div>
        `,
        keyPoints: ['Thu nhập', 'Chi tiêu', 'Tiết kiệm', 'Đầu tư', 'Nợ tốt/xấu', 'Lãi kép']
    },
    'foreign': {
        icon: '🌍',
        title: 'Thị Trường Quốc Tế',
        order: 6,
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> Đây là nơi tiền chảy ra/vào giữa Việt Nam và các nước khác.</p>
            
            <h4>📤 Tiền chảy vào Việt Nam:</h4>
            <ul>
                <li>🏭 Công ty nước ngoài đầu tư (Samsung, Intel...)</li>
                <li>📦 Bán hàng ra nước ngoài (xuất khẩu)</li>
                <li>💸 Kiều hối (người Việt ở nước ngoài gửi về)</li>
                <li>🧳 Khách du lịch chi tiêu</li>
            </ul>

            <h4>📥 Tiền chảy ra nước ngoài:</h4>
            <ul>
                <li>📱 Mua hàng nước ngoài (iPhone, xe hơi...)</li>
                <li>✈️ Du lịch nước ngoài</li>
                <li>🎓 Du học</li>
            </ul>

            <div class="example-box">
                <strong>Tỷ giá:</strong> 1 USD = 24,000 VND nghĩa là bạn cần 24,000 VND để mua 1 USD.
            </div>
        `,
        detail: `
            <h4>💱 Tỷ giá hối đoái:</h4>
            <ul>
                <li><strong>Xuất khẩu nhiều:</strong> Nhiều USD vào → USD rẻ → VND mạnh lên</li>
                <li><strong>Nhập khẩu nhiều:</strong> Nhiều USD ra → USD đắt → VND yếu đi</li>
            </ul>

            <h4>📊 Cán cân thương mại:</h4>
            <p><strong>Xuất khẩu - Nhập khẩu = Cán cân thương mại</strong></p>
            <ul>
                <li>Dương (thặng dư): Xuất > Nhập → Tích lũy ngoại tệ</li>
                <li>Âm (thâm hụt): Nhập > Xuất → Mất ngoại tệ</li>
            </ul>

            <div class="example-box">
                <strong>Việt Nam 2023:</strong><br>
                Xuất khẩu: ~355 tỷ USD<br>
                Nhập khẩu: ~327 tỷ USD<br>
                Thặng dư: ~28 tỷ USD ✅
            </div>

            <h4>🌍 Dòng vốn FDI:</h4>
            <p>FDI (Foreign Direct Investment) là khi công ty nước ngoài xây nhà máy, thuê nhân công tại Việt Nam.</p>
        `,
        advanced: `
            <h4>📊 Cán cân thanh toán (Balance of Payments):</h4>
            <ul>
                <li><strong>Tài khoản vãng lai:</strong> Thương mại hàng hóa/dịch vụ, kiều hối</li>
                <li><strong>Tài khoản vốn:</strong> FDI, đầu tư chứng khoán, vay nợ</li>
                <li><strong>Dự trữ ngoại hối:</strong> Đệm an toàn của NHTW</li>
            </ul>

            <h4>💱 Các chế độ tỷ giá:</h4>
            <ul>
                <li><strong>Thả nổi hoàn toàn:</strong> Thị trường quyết định (USD, EUR)</li>
                <li><strong>Thả nổi có quản lý:</strong> NHTW can thiệp khi cần (VND)</li>
                <li><strong>Cố định:</strong> Neo vào đồng tiền khác</li>
            </ul>

            <h4>⚠️ Rủi ro tiền tệ:</h4>
            <div class="warning-box">
                <strong>Currency Crisis:</strong> Dòng vốn rút chạy → Đồng tiền mất giá mạnh → Lạm phát nhập khẩu → Khủng hoảng kinh tế.
                <br><br>
                <strong>Ví dụ:</strong> Khủng hoảng tài chính Châu Á 1997 - Baht Thái mất 50% giá trị.
            </div>
        `,
        keyPoints: ['Xuất khẩu', 'Nhập khẩu', 'Tỷ giá', 'FDI', 'Kiều hối', 'Dự trữ ngoại hối']
    }
};

// Flow explanations
const flowData = {
    'cb-to-commercial': {
        title: '① Phát hành tiền',
        content: `
            <p><strong>Ngân hàng trung ương → Ngân hàng thương mại</strong></p>
            <p>NHTW "tạo" tiền và đưa vào hệ thống thông qua:</p>
            <ul>
                <li>Cho ngân hàng thương mại vay với lãi suất cơ bản</li>
                <li>Mua trái phiếu chính phủ từ ngân hàng</li>
            </ul>
            <p><strong>Đây là điểm khởi đầu của mọi dòng tiền trong nền kinh tế!</strong></p>
        `
    },
    'commercial-to-business': {
        title: '② Cho vay doanh nghiệp',
        content: `
            <p><strong>Ngân hàng thương mại → Doanh nghiệp</strong></p>
            <p>Doanh nghiệp vay tiền để:</p>
            <ul>
                <li>Mở rộng sản xuất, mua máy móc</li>
                <li>Nhập nguyên vật liệu</li>
                <li>Trả lương nhân viên khi chưa có doanh thu</li>
            </ul>
            <p><strong>Đây là cách tiền từ ngân hàng đi vào nền kinh tế thực!</strong></p>
        `
    },
    'business-to-individual': {
        title: '③ Trả lương',
        content: `
            <p><strong>Doanh nghiệp → Người lao động</strong></p>
            <p>Doanh nghiệp trả cho nhân viên:</p>
            <ul>
                <li>Lương cơ bản hàng tháng</li>
                <li>Thưởng, phụ cấp</li>
                <li>Cổ tức (nếu nhân viên có cổ phần)</li>
            </ul>
            <p><strong>Đây là cách tiền đến tay người dân!</strong></p>
        `
    },
    'individual-to-business': {
        title: '④ Chi tiêu mua sắm',
        content: `
            <p><strong>Người dân → Doanh nghiệp</strong></p>
            <p>Người dân dùng tiền lương để:</p>
            <ul>
                <li>Mua thực phẩm, quần áo</li>
                <li>Mua điện thoại, xe máy, ô tô</li>
                <li>Dịch vụ: nhà hàng, giải trí, du lịch</li>
            </ul>
            <p><strong>Chi tiêu của người dân = Doanh thu của doanh nghiệp!</strong></p>
        `
    },
    'individual-to-commercial': {
        title: '⑤ Gửi tiết kiệm',
        content: `
            <p><strong>Người dân → Ngân hàng thương mại</strong></p>
            <p>Người dân gửi tiền vào ngân hàng để:</p>
            <ul>
                <li>An toàn hơn giữ tiền mặt</li>
                <li>Nhận lãi suất (5-7%/năm)</li>
                <li>Tiết kiệm cho tương lai</li>
            </ul>
            <p><strong>Tiền gửi này được ngân hàng dùng để cho vay tiếp, tạo vòng quay tiền!</strong></p>
        `
    },
    'tax': {
        title: '⑥ Nộp thuế',
        content: `
            <p><strong>Doanh nghiệp + Người dân → Chính phủ</strong></p>
            <p>Các loại thuế chính:</p>
            <ul>
                <li><strong>Thuế TNCN:</strong> Người đi làm nộp từ lương</li>
                <li><strong>Thuế TNDN:</strong> Doanh nghiệp nộp từ lợi nhuận</li>
                <li><strong>Thuế VAT:</strong> 10% khi mua hàng hóa</li>
            </ul>
            <p><strong>Thuế = Nguồn thu để chính phủ xây dựng cơ sở hạ tầng, dịch vụ công!</strong></p>
        `
    },
    'export': {
        title: '⑦ Xuất khẩu',
        content: `
            <p><strong>Doanh nghiệp Việt Nam → Thế giới</strong></p>
            <p>Việt Nam xuất khẩu:</p>
            <ul>
                <li>Điện thoại, linh kiện điện tử (Samsung)</li>
                <li>Dệt may, giày dép</li>
                <li>Nông sản: gạo, cà phê, hải sản</li>
            </ul>
            <p><strong>Xuất khẩu = Thu ngoại tệ (USD) về = Kinh tế phát triển!</strong></p>
        `
    }
};

// Scenarios data
const scenarios = {
    deposit: {
        title: 'Gửi tiền tiết kiệm',
        steps: [
            { node: 'individual', text: 'Bạn có 100 triệu VND tiền nhàn rỗi' },
            { node: 'commercial-bank', text: 'Bạn gửi 100 triệu vào ngân hàng, lãi suất 6%/năm' },
            { node: 'commercial-bank', text: 'Ngân hàng giữ 10 triệu dự trữ, cho công ty A vay 90 triệu' },
            { node: 'business', text: 'Công ty A dùng 90 triệu trả lương cho nhân viên' },
            { node: 'individual', text: 'Nhân viên gửi lại 80 triệu vào ngân hàng khác' },
            { node: 'commercial-bank', text: 'Quá trình lặp lại... 100 triệu ban đầu tạo ra gần 1 TỶ trong hệ thống!' }
        ]
    },
    loan: {
        title: 'Vay mua nhà',
        steps: [
            { node: 'individual', text: 'Bạn muốn mua căn hộ 3 tỷ, có sẵn 1 tỷ' },
            { node: 'commercial-bank', text: 'Bạn vay ngân hàng 2 tỷ, lãi 10%/năm, kỳ hạn 20 năm' },
            { node: 'individual', text: 'Mỗi tháng bạn trả góp ~19 triệu (gốc + lãi)' },
            { node: 'business', text: 'Tiền mua nhà chảy đến công ty bất động sản' },
            { node: 'business', text: 'Công ty trả cho nhà thầu, nhân công, nguyên vật liệu' },
            { node: 'individual', text: 'Sau 20 năm, bạn trả tổng ~4.5 tỷ (2 tỷ gốc + 2.5 tỷ lãi)' }
        ]
    },
    salary: {
        title: 'Nhận lương hàng tháng',
        steps: [
            { node: 'business', text: 'Công ty của bạn bán sản phẩm, thu tiền từ khách hàng' },
            { node: 'business', text: 'Cuối tháng, công ty chuyển lương 20 triệu cho bạn' },
            { node: 'individual', text: 'Bạn chi tiêu: 8 triệu tiền nhà, 4 triệu ăn uống, 3 triệu khác' },
            { node: 'commercial-bank', text: 'Bạn gửi tiết kiệm 3 triệu' },
            { node: 'government', text: 'Thuế TNCN đã được công ty khấu trừ ~2 triệu' },
            { node: 'individual', text: 'Tháng sau, vòng lặp tiếp tục...' }
        ]
    },
    business: {
        title: 'Doanh nghiệp vay vốn',
        steps: [
            { node: 'business', text: 'Công ty muốn mở rộng nhà máy, cần 10 tỷ' },
            { node: 'commercial-bank', text: 'Vay ngân hàng 10 tỷ, thế chấp tài sản, lãi 9%/năm' },
            { node: 'business', text: 'Xây nhà xưởng 4 tỷ, mua máy móc 4 tỷ, vốn lưu động 2 tỷ' },
            { node: 'individual', text: 'Thuê thêm 50 nhân viên, trả lương 500 triệu/tháng' },
            { node: 'business', text: 'Sản xuất tăng 50%, doanh thu tăng 8 tỷ/năm' },
            { node: 'commercial-bank', text: 'Mỗi năm trả 900 triệu lãi + gốc. Sau 10 năm trả hết nợ' }
        ]
    },
    inflation: {
        title: 'Lạm phát xảy ra',
        steps: [
            { node: 'central-bank', text: 'NHTW in thêm 100,000 tỷ để kích thích kinh tế' },
            { node: 'commercial-bank', text: 'Ngân hàng có nhiều tiền hơn, cho vay dễ dàng hơn' },
            { node: 'business', text: 'Doanh nghiệp vay nhiều, đẩy giá nguyên liệu lên' },
            { node: 'individual', text: 'Tiền nhiều hơn, cầu tăng, giá hàng hóa tăng 10%' },
            { node: 'individual', text: '100 triệu tiết kiệm của bạn giờ chỉ mua được bằng 90 triệu trước đó' },
            { node: 'central-bank', text: 'NHTW phải tăng lãi suất để kiềm chế lạm phát' }
        ]
    }
};

// Tour steps
const tourSteps = [
    {
        target: null,
        title: 'Chào mừng! 👋',
        description: 'Hãy cùng khám phá dòng chảy của tiền trong nền kinh tế. Click "Tiếp theo" để bắt đầu!'
    },
    {
        target: 'central-bank',
        title: '① Ngân Hàng Trung Ương',
        description: 'Đây là nơi tiền được "sinh ra". NHTW in tiền và đưa vào hệ thống ngân hàng. Ở VN, đó là Ngân hàng Nhà nước.'
    },
    {
        target: 'commercial-bank',
        title: '② Ngân Hàng Thương Mại',
        description: 'Ngân hàng nhận tiền từ NHTW và "nhân bản" nó lên gấp 10 lần thông qua cho vay! Đây là phép màu của hệ thống ngân hàng.'
    },
    {
        target: 'business',
        title: '③ Doanh Nghiệp',
        description: 'Doanh nghiệp vay tiền từ ngân hàng để sản xuất, tạo việc làm. Họ là động cơ của nền kinh tế.'
    },
    {
        target: 'individual',
        title: '④ Người Dân',
        description: 'Bạn và tôi! Chúng ta nhận lương từ doanh nghiệp, chi tiêu, tiết kiệm, và tạo nên vòng quay của tiền.'
    },
    {
        target: 'government',
        title: '⑤ Chính Phủ',
        description: 'Chính phủ thu thuế từ mọi người và chi tiêu cho dịch vụ công: đường xá, bệnh viện, trường học...'
    },
    {
        target: 'foreign',
        title: '⑥ Thị Trường Quốc Tế',
        description: 'Tiền cũng chảy qua biên giới qua xuất nhập khẩu, đầu tư nước ngoài và kiều hối.'
    },
    {
        target: null,
        title: 'Hoàn thành! 🎉',
        description: 'Bây giờ bạn đã hiểu cơ bản về dòng chảy của tiền. Click vào từng thành phần để tìm hiểu sâu hơn, hoặc thử các kịch bản thực tế!'
    }
];

// Glossary
const glossary = {
    'lạm phát': 'Khi giá cả hàng hóa tăng lên, đồng tiền mất giá. Ví dụ: năm ngoái phở 40k, năm nay phở 45k.',
    'lãi suất': 'Giá của việc vay tiền. Lãi suất 10%/năm = vay 100 triệu phải trả 110 triệu sau 1 năm.',
    'trái phiếu': 'Giấy nợ. Bạn cho chính phủ/công ty vay tiền, họ trả lại gốc + lãi sau một thời gian.',
    'cổ phiếu': 'Giấy chứng nhận bạn sở hữu một phần công ty. Công ty lãi → bạn được chia cổ tức.',
    'FDI': 'Foreign Direct Investment - Đầu tư trực tiếp nước ngoài. VD: Samsung xây nhà máy ở VN.',
    'GDP': 'Gross Domestic Product - Tổng giá trị hàng hóa, dịch vụ sản xuất trong 1 năm.',
    'tỷ giá': 'Giá của đồng tiền này so với đồng tiền khác. VD: 1 USD = 24,000 VND.'
};

// ==================== STATE ====================
let currentLevel = 'beginner';
let currentTourStep = 0;
let isTourActive = false;
let isStoryPlaying = false;
let currentScenario = null;
let currentScenarioStep = 0;

// ==================== DOM ELEMENTS ====================
const levelOverlay = document.getElementById('levelOverlay');
const levelBadge = document.getElementById('levelBadge');
const tourProgress = document.getElementById('tourProgress');
const tourPanel = document.getElementById('tourPanel');
const progressFill = document.getElementById('progressFill');
const modal = document.getElementById('modal');
const scenarioModal = document.getElementById('scenarioModal');
const simulatorModal = document.getElementById('simulatorModal');
const flowModal = document.getElementById('flowModal');
const storyNarration = document.getElementById('storyNarration');
const moneyAnimation = document.getElementById('moneyAnimation');
const nodes = document.querySelectorAll('.node');
const flowLabels = document.querySelectorAll('.flow-label.clickable');

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
    // Check if user has selected level before
    const savedLevel = localStorage.getItem('moneyFlowLevel');
    if (savedLevel) {
        currentLevel = savedLevel;
        levelOverlay.classList.add('hidden');
        updateLevelBadge();
    }

    setupEventListeners();
});

function setupEventListeners() {
    // Level selection
    document.querySelectorAll('.level-card').forEach(card => {
        card.addEventListener('click', () => {
            currentLevel = card.dataset.level;
            localStorage.setItem('moneyFlowLevel', currentLevel);
            levelOverlay.classList.add('hidden');
            updateLevelBadge();
            
            // Auto-start tour for beginners
            if (currentLevel === 'beginner') {
                setTimeout(() => startTour(), 500);
            }
        });
    });

    // Header buttons
    document.getElementById('changeLevelBtn').addEventListener('click', () => {
        levelOverlay.classList.remove('hidden');
    });

    document.getElementById('startTourBtn').addEventListener('click', startTour);
    document.getElementById('scenarioBtn').addEventListener('click', () => {
        scenarioModal.classList.add('active');
    });
    document.getElementById('simulatorBtn').addEventListener('click', () => {
        simulatorModal.classList.add('active');
    });

    // Tour navigation
    document.getElementById('tourPrev').addEventListener('click', prevTourStep);
    document.getElementById('tourNext').addEventListener('click', nextTourStep);
    document.getElementById('tourSkip').addEventListener('click', endTour);

    // Nodes click
    nodes.forEach(node => {
        node.addEventListener('click', () => {
            const componentId = node.dataset.component;
            showComponentModal(componentId);
        });
    });

    // Flow labels click
    flowLabels.forEach(label => {
        label.addEventListener('click', (e) => {
            e.stopPropagation();
            const flowInfo = label.dataset.flowInfo;
            showFlowModal(flowInfo);
        });
    });

    // Close modals
    document.getElementById('closeModal').addEventListener('click', closeModal);
    document.getElementById('closeScenario').addEventListener('click', () => {
        scenarioModal.classList.remove('active');
    });
    document.getElementById('closeSimulator').addEventListener('click', () => {
        simulatorModal.classList.remove('active');
    });
    document.getElementById('closeFlowModal').addEventListener('click', () => {
        flowModal.classList.remove('active');
    });

    // Modal overlay click to close
    [modal, scenarioModal, simulatorModal, flowModal].forEach(m => {
        m.addEventListener('click', (e) => {
            if (e.target === m) {
                m.classList.remove('active');
            }
        });
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

    // Scenario cards
    document.querySelectorAll('.scenario-card').forEach(card => {
        card.addEventListener('click', () => {
            const scenarioId = card.dataset.scenario;
            startScenario(scenarioId);
        });
    });

    // Simulator
    document.getElementById('reserveRatio').addEventListener('input', (e) => {
        document.getElementById('reserveValue').textContent = e.target.value + '%';
    });
    document.getElementById('simulateBtn').addEventListener('click', runSimulation);

    // Action buttons
    document.getElementById('playStoryBtn').addEventListener('click', playMoneyStory);
    document.getElementById('showAllFlowsBtn').addEventListener('click', toggleAllFlows);
    document.getElementById('resetViewBtn').addEventListener('click', resetView);

    // Legend filter
    document.querySelectorAll('.legend-item').forEach(item => {
        item.addEventListener('click', () => {
            document.querySelectorAll('.legend-item').forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            filterFlows(item.dataset.filter);
        });
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
            scenarioModal.classList.remove('active');
            simulatorModal.classList.remove('active');
            flowModal.classList.remove('active');
            if (isTourActive) endTour();
        }
        if (isTourActive) {
            if (e.key === 'ArrowRight') nextTourStep();
            if (e.key === 'ArrowLeft') prevTourStep();
        }
    });

    // Glossary hover
    document.querySelectorAll('.glossary-word').forEach(word => {
        word.addEventListener('mouseenter', showGlossary);
        word.addEventListener('mouseleave', hideGlossary);
    });
}

// ==================== LEVEL ====================
function updateLevelBadge() {
    const badges = {
        beginner: '🌱 Người Mới',
        intermediate: '🌿 Trung Cấp',
        advanced: '🌳 Nâng Cao'
    };
    levelBadge.textContent = badges[currentLevel];

    // Set default tab based on level
    const tabMap = { beginner: 'simple', intermediate: 'detail', advanced: 'advanced' };
    document.querySelectorAll('.level-tab').forEach(t => t.classList.remove('active'));
    document.querySelector(`[data-tab="${tabMap[currentLevel]}"]`)?.classList.add('active');
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

    // Update progress bar
    const progress = ((currentTourStep + 1) / tourSteps.length) * 100;
    progressFill.style.width = progress + '%';

    // Highlight current node
    nodes.forEach(node => {
        node.classList.remove('highlighted', 'dimmed');
        if (step.target) {
            if (node.dataset.component === step.target) {
                node.classList.add('highlighted');
            } else {
                node.classList.add('dimmed');
            }
        }
    });

    // Update navigation buttons
    document.getElementById('tourPrev').style.visibility = currentTourStep === 0 ? 'hidden' : 'visible';
    document.getElementById('tourNext').textContent = currentTourStep === tourSteps.length - 1 ? 'Hoàn thành ✓' : 'Tiếp theo →';
}

function nextTourStep() {
    if (currentTourStep < tourSteps.length - 1) {
        currentTourStep++;
        updateTourStep();
    } else {
        endTour();
    }
}

function prevTourStep() {
    if (currentTourStep > 0) {
        currentTourStep--;
        updateTourStep();
    }
}

function endTour() {
    isTourActive = false;
    tourProgress.classList.remove('active');
    tourPanel.classList.remove('active');
    nodes.forEach(node => {
        node.classList.remove('highlighted', 'dimmed');
    });
}

// ==================== COMPONENT MODAL ====================
let currentComponentId = null;

function showComponentModal(componentId) {
    currentComponentId = componentId;
    const data = componentData[componentId];
    if (!data) return;

    document.getElementById('modalIcon').textContent = data.icon;
    document.getElementById('modalTitle').textContent = data.title;
    
    // Set content for all tabs
    document.querySelector('[data-content="simple"]').innerHTML = data.simple;
    document.querySelector('[data-content="detail"]').innerHTML = data.detail;
    document.querySelector('[data-content="advanced"]').innerHTML = data.advanced;

    // Set active tab based on level
    const tabMap = { beginner: 'simple', intermediate: 'detail', advanced: 'advanced' };
    document.querySelectorAll('.level-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    document.querySelector(`[data-tab="${tabMap[currentLevel]}"]`).classList.add('active');
    document.querySelector(`[data-content="${tabMap[currentLevel]}"]`).classList.add('active');

    // Key points
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

function closeModal() {
    modal.classList.remove('active');
}

function showPrevComponent() {
    const components = Object.keys(componentData).sort((a, b) => 
        componentData[a].order - componentData[b].order
    );
    const currentIndex = components.indexOf(currentComponentId);
    const prevIndex = (currentIndex - 1 + components.length) % components.length;
    showComponentModal(components[prevIndex]);
}

function showNextComponent() {
    const components = Object.keys(componentData).sort((a, b) => 
        componentData[a].order - componentData[b].order
    );
    const currentIndex = components.indexOf(currentComponentId);
    const nextIndex = (currentIndex + 1) % components.length;
    showComponentModal(components[nextIndex]);
}

// ==================== FLOW MODAL ====================
function showFlowModal(flowInfo) {
    const data = flowData[flowInfo];
    if (!data) return;

    document.getElementById('flowModalTitle').textContent = data.title;
    document.getElementById('flowModalBody').innerHTML = data.content;
    flowModal.classList.add('active');
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
    
    // Show narration
    storyNarration.classList.add('active');
    document.getElementById('storyText').textContent = step.text;

    // Highlight node
    nodes.forEach(node => {
        node.classList.remove('highlighted', 'dimmed');
        if (node.dataset.component === step.node) {
            node.classList.add('highlighted');
        } else {
            node.classList.add('dimmed');
        }
    });

    // Auto advance after 4 seconds
    setTimeout(() => {
        currentScenarioStep++;
        playScenarioStep();
    }, 4000);
}

function endScenario() {
    storyNarration.classList.remove('active');
    nodes.forEach(node => {
        node.classList.remove('highlighted', 'dimmed');
    });
    currentScenario = null;
}

// ==================== SIMULATOR ====================
function runSimulation() {
    const deposit = parseInt(document.getElementById('depositAmount').value);
    const reserveRatio = parseInt(document.getElementById('reserveRatio').value) / 100;
    const multiplier = 1 / reserveRatio;
    const totalMoney = deposit * multiplier;

    // Format numbers
    const formatMoney = (num) => new Intl.NumberFormat('vi-VN').format(num) + ' VND';

    document.getElementById('initialDeposit').textContent = formatMoney(deposit);
    document.getElementById('multiplier').textContent = multiplier.toFixed(1) + 'x';
    document.getElementById('totalMoney').textContent = formatMoney(Math.round(totalMoney));

    // Explanation
    const explanation = `
        <p><strong>Giải thích:</strong></p>
        <p>Với tỷ lệ dự trữ ${reserveRatio * 100}%, hệ số nhân tiền = 1/${reserveRatio * 100}% = ${multiplier.toFixed(1)}</p>
        <p>Mỗi khi bạn gửi tiền, ngân hàng giữ ${reserveRatio * 100}% và cho vay ${(1 - reserveRatio) * 100}%. Người vay lại gửi vào ngân hàng khác, và quá trình lặp lại.</p>
        <p>Kết quả: ${formatMoney(deposit)} ban đầu → tạo ra ${formatMoney(Math.round(totalMoney))} trong toàn hệ thống ngân hàng!</p>
    `;
    document.getElementById('resultExplanation').innerHTML = explanation;

    // Show result with animation
    const resultDiv = document.getElementById('simulatorResult');
    resultDiv.classList.add('active');
    
    // Money animation
    const animDiv = document.getElementById('resultAnimation');
    animDiv.innerHTML = '';
    for (let i = 0; i < Math.min(multiplier, 10); i++) {
        setTimeout(() => {
            animDiv.innerHTML += '💵 ';
        }, i * 200);
    }
}

// ==================== STORY MODE ====================
function playMoneyStory() {
    const btn = document.getElementById('playStoryBtn');
    if (isStoryPlaying) {
        stopMoneyStory();
        btn.querySelector('.action-text').textContent = 'Xem câu chuyện tiền';
        return;
    }

    isStoryPlaying = true;
    btn.classList.add('active');
    btn.querySelector('.action-text').textContent = 'Dừng câu chuyện';

    const storySteps = [
        { node: 'central-bank', text: '🏛️ Ngân hàng trung ương in tiền mới...' },
        { node: 'commercial-bank', text: '🏦 Tiền được chuyển đến ngân hàng thương mại...' },
        { node: 'business', text: '🏭 Doanh nghiệp vay tiền để sản xuất...' },
        { node: 'individual', text: '👥 Trả lương cho người lao động...' },
        { node: 'business', text: '💳 Người dân chi tiêu mua sắm...' },
        { node: 'commercial-bank', text: '💰 Và gửi tiết kiệm vào ngân hàng...' },
        { node: 'government', text: '🏢 Một phần nộp thuế cho chính phủ...' },
        { node: 'foreign', text: '🌍 Một phần đi ra nước ngoài qua nhập khẩu...' }
    ];

    let stepIndex = 0;
    const playStep = () => {
        if (!isStoryPlaying || stepIndex >= storySteps.length) {
            if (isStoryPlaying) {
                stepIndex = 0; // Loop
            } else {
                stopMoneyStory();
                return;
            }
        }

        const step = storySteps[stepIndex];
        
        // Show narration
        storyNarration.classList.add('active');
        document.getElementById('storyText').textContent = step.text;

        // Highlight node
        nodes.forEach(node => {
            node.classList.remove('highlighted');
            if (node.dataset.component === step.node) {
                node.classList.add('highlighted');
            }
        });

        stepIndex++;
        setTimeout(playStep, 3000);
    };

    playStep();
}

function stopMoneyStory() {
    isStoryPlaying = false;
    document.getElementById('playStoryBtn').classList.remove('active');
    document.getElementById('playStoryBtn').querySelector('.action-text').textContent = 'Xem câu chuyện tiền';
    storyNarration.classList.remove('active');
    nodes.forEach(node => node.classList.remove('highlighted'));
}

// ==================== FILTER FLOWS ====================
function filterFlows(filter) {
    const flowGroups = document.querySelectorAll('.flow-group');
    
    flowGroups.forEach(group => {
        const path = group.querySelector('.arrow-path');
        if (filter === 'all') {
            group.classList.remove('dimmed');
        } else if (filter === 'green' && !path.classList.contains('blue') && !path.classList.contains('orange')) {
            group.classList.remove('dimmed');
        } else if (filter === 'blue' && path.classList.contains('blue')) {
            group.classList.remove('dimmed');
        } else if (filter === 'orange' && path.classList.contains('orange')) {
            group.classList.remove('dimmed');
        } else {
            group.classList.add('dimmed');
        }
    });
}

function toggleAllFlows() {
    const btn = document.getElementById('showAllFlowsBtn');
    btn.classList.toggle('active');
    
    const flowGroups = document.querySelectorAll('.flow-group');
    flowGroups.forEach(group => {
        group.classList.toggle('highlighted');
    });
}

function resetView() {
    // Stop any playing story/scenario
    stopMoneyStory();
    endScenario();
    
    // Reset nodes
    nodes.forEach(node => {
        node.classList.remove('highlighted', 'dimmed');
    });
    
    // Reset flows
    document.querySelectorAll('.flow-group').forEach(group => {
        group.classList.remove('highlighted', 'dimmed');
    });
    
    // Reset legend
    document.querySelectorAll('.legend-item').forEach(item => {
        item.classList.remove('active');
    });
    document.querySelector('[data-filter="all"]').classList.add('active');
    
    // Reset buttons
    document.getElementById('showAllFlowsBtn').classList.remove('active');
}

// ==================== GLOSSARY ====================
function showGlossary(e) {
    const term = e.target.dataset.term;
    const definition = glossary[term];
    if (!definition) return;

    const popup = document.getElementById('glossaryPopup');
    document.getElementById('glossaryTerm').textContent = term;
    document.getElementById('glossaryDefinition').textContent = definition;

    const rect = e.target.getBoundingClientRect();
    popup.style.left = rect.left + 'px';
    popup.style.top = (rect.bottom + 10) + 'px';
    popup.classList.add('active');
}

function hideGlossary() {
    document.getElementById('glossaryPopup').classList.remove('active');
}

// ==================== CONSOLE ====================
console.log('%c💰 Hiểu Hết Về Tiền', 'font-size: 24px; font-weight: bold; color: #f39c12;');
console.log('%cInteractive Money Flow Visualization', 'font-size: 14px; color: #3498db;');
console.log('%cBased on "Hiểu Hết Về Tiền" book', 'font-size: 12px; color: #95a5a6;');
