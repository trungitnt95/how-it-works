// ==================== TRADING BASICS MODULE ====================

const tradingBasicsData = {
    'trading-basics': {
        icon: '📚',
        title: 'Trading là gì?',
        order: 1,
        category: 'basics',
        connections: ['asset-types', 'market-orders'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> Trading là việc mua bán tài sản (cổ phiếu, tiền tệ, crypto) để kiếm lợi nhuận từ chênh lệch giá.</p>
            <div class="example-box">
                <strong>Ví dụ đơn giản:</strong><br>
                • Sáng mua Bitcoin giá 30,000 USD<br>
                • Chiều bán Bitcoin giá 31,000 USD<br>
                • Lãi: 1,000 USD (3.3%) ✅
            </div>
            <h4>📌 Các loại trader:</h4>
            <ul>
                <li>💼 <strong>Investor:</strong> Mua và giữ lâu (tháng, năm)</li>
                <li>📈 <strong>Swing Trader:</strong> Giữ vài ngày đến vài tuần</li>
                <li>⚡ <strong>Day Trader:</strong> Mua bán trong ngày</li>
                <li>⚡⚡ <strong>Scalper:</strong> Mua bán trong vài phút</li>
            </ul>
            <div class="warning-box">
                <strong>⚠️ Cảnh báo:</strong> Trading có rủi ro cao! Chỉ dùng tiền bạn có thể mất.
            </div>
        `,
        detail: `
            <h4>🎯 Trading vs Investing</h4>
            <table style="width:100%; border-collapse: collapse;">
                <tr style="background:#2c3e50; color:white;">
                    <th style="padding:10px;">Đặc điểm</th>
                    <th style="padding:10px;">Trading</th>
                    <th style="padding:10px;">Investing</th>
                </tr>
                <tr>
                    <td style="padding:10px;"><strong>Thời gian</strong></td>
                    <td style="padding:10px;">Ngắn hạn (phút → tuần)</td>
                    <td style="padding:10px;">Dài hạn (năm → thập kỷ)</td>
                </tr>
                <tr>
                    <td style="padding:10px;"><strong>Mục tiêu</strong></td>
                    <td style="padding:10px;">Lợi nhuận nhanh</td>
                    <td style="padding:10px;">Tăng trưởng ổn định</td>
                </tr>
                <tr>
                    <td style="padding:10px;"><strong>Rủi ro</strong></td>
                    <td style="padding:10px;">Cao ⚠️</td>
                    <td style="padding:10px;">Thấp hơn ✅</td>
                </tr>
                <tr>
                    <td style="padding:10px;"><strong>Phân tích</strong></td>
                    <td style="padding:10px;">Technical (biểu đồ)</td>
                    <td style="padding:10px;">Fundamental (báo cáo)</td>
                </tr>
            </table>

            <h4>💡 Cách kiếm tiền trong Trading:</h4>
            <ol>
                <li><strong>Long (Mua):</strong> Mua khi giá thấp, bán khi giá cao</li>
                <li><strong>Short (Bán khống):</strong> Bán khi giá cao, mua lại khi giá thấp</li>
            </ol>

            <div class="example-box">
                <strong>Ví dụ Long:</strong><br>
                Mua 100 cổ phiếu Apple @150 USD = 15,000 USD<br>
                Bán 100 cổ phiếu Apple @160 USD = 16,000 USD<br>
                Lãi: 1,000 USD (6.67%) 🎉
            </div>

            <div class="example-box">
                <strong>Ví dụ Short:</strong><br>
                Bán khống 100 cổ phiếu Tesla @800 USD = 80,000 USD<br>
                Mua lại 100 cổ phiếu Tesla @750 USD = 75,000 USD<br>
                Lãi: 5,000 USD (6.25%) 🎉
            </div>
        `,
        advanced: `
            <h4>🔧 Các yếu tố quyết định thành công:</h4>
            <ul>
                <li><strong>Kiến thức:</strong> Hiểu biết về thị trường và phân tích</li>
                <li><strong>Chiến lược:</strong> Có kế hoạch rõ ràng (entry, exit, stop loss)</li>
                <li><strong>Kỷ luật:</strong> Tuân thủ chiến lược, không trade theo cảm xúc</li>
                <li><strong>Quản lý vốn:</strong> Không bao giờ rủi ro quá 1-2% tài khoản/lệnh</li>
                <li><strong>Tâm lý:</strong> Kiểm soát fear (sợ hãi) và greed (tham lam)</li>
            </ul>

            <h4>📊 Thống kê thực tế:</h4>
            <div class="warning-box">
                • 90% trader mới thua lỗ trong năm đầu<br>
                • 5% hòa vốn<br>
                • Chỉ 5% kiếm lời ổn định<br>
                <br>
                <strong>Lý do:</strong> Thiếu kiến thức, không có kế hoạch, trade theo cảm xúc
            </div>

            <h4>🎓 Lộ trình học Trading:</h4>
            <ol>
                <li>Học cơ bản: Thuật ngữ, cách đọc biểu đồ</li>
                <li>Paper trading: Luyện tập với tài khoản demo</li>
                <li>Học phân tích kỹ thuật: Support/Resistance, indicators</li>
                <li>Phát triển chiến lược: Backtest và tối ưu</li>
                <li>Trading thực: Bắt đầu với số vốn nhỏ</li>
                <li>Cải thiện liên tục: Ghi chép, phân tích, học hỏi</li>
            </ol>

            <div class="example-box">
                <strong>💰 Leverage (Đòn bẩy):</strong><br>
                Cho phép trade với số tiền lớn hơn tài khoản<br>
                <br>
                Leverage 1:10 với $1,000 = Có thể trade $10,000<br>
                <strong>Lợi:</strong> Lãi lỗ nhân 10 lần<br>
                <strong>Hại:</strong> Có thể mất sạch tài khoản rất nhanh ⚠️
            </div>
        `,
        keyPoints: ['Long vs Short', 'Trading vs Investing', 'Risk Management', 'Paper Trading', 'Leverage']
    },

    'market-orders': {
        icon: '📝',
        title: 'Lệnh Giao Dịch',
        order: 3,
        category: 'basics',
        connections: ['trading-basics', 'risk-management'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> Lệnh giao dịch là cách bạn ra lệnh mua/bán cho sàn giao dịch.</p>
            
            <h4>📌 3 loại lệnh cơ bản:</h4>
            
            <div class="example-box">
                <strong>1. Market Order (Lệnh thị trường):</strong><br>
                • Mua/bán ngay lập tức ở giá hiện tại<br>
                • Ưu: Nhanh, chắc chắn thực hiện<br>
                • Nhược: Giá có thể khác một chút do trượt giá<br>
                <br>
                <strong>Ví dụ:</strong> Bitcoin đang $30,000, bạn bấm "Market Buy" → Mua ngay ở giá gần $30,000
            </div>

            <div class="example-box">
                <strong>2. Limit Order (Lệnh giới hạn):</strong><br>
                • Mua/bán ở mức giá cụ thể bạn đặt<br>
                • Ưu: Kiểm soát giá chính xác<br>
                • Nhược: Có thể không được khớp lệnh<br>
                <br>
                <strong>Ví dụ:</strong> Bitcoin đang $30,000, bạn đặt "Limit Buy @ $29,500" → Chỉ mua khi giá xuống $29,500
            </div>

            <div class="example-box">
                <strong>3. Stop Order (Lệnh dừng):</strong><br>
                • Tự động mua/bán khi giá chạm một mức nhất định<br>
                • Dùng để cắt lỗ hoặc chốt lời<br>
                <br>
                <strong>Ví dụ:</strong> Mua Bitcoin @ $30,000, đặt "Stop Loss @ $29,000" → Tự động bán nếu giá xuống $29,000 để giới hạn lỗ
            </div>
        `,
        detail: `
            <h4>🎯 Chi tiết các loại lệnh:</h4>

            <h5>1. Market Order</h5>
            <p><strong>Khi nào dùng:</strong> Khi bạn muốn vào/ra lệnh ngay lập tức</p>
            <p><strong>Rủi ro:</strong> Slippage (trượt giá) khi thị trường biến động mạnh</p>

            <h5>2. Limit Order</h5>
            <p><strong>Buy Limit:</strong> Đặt giá thấp hơn giá hiện tại để mua khi giá giảm</p>
            <p><strong>Sell Limit:</strong> Đặt giá cao hơn giá hiện tại để bán khi giá tăng</p>
            
            <div class="example-box">
                <strong>Scenario:</strong><br>
                BTC hiện tại: $30,000<br>
                Bạn nghĩ sẽ giảm xuống $29,500 rồi tăng trở lại<br>
                → Đặt Buy Limit @ $29,500<br>
                → Nếu giá chạm $29,500, lệnh tự động thực hiện
            </div>

            <h5>3. Stop Loss Order</h5>
            <p><strong>Mục đích:</strong> Bảo vệ lợi nhuận hoặc giới hạn lỗ</p>
            
            <div class="example-box">
                <strong>Scenario cắt lỗ:</strong><br>
                Mua ETH @ $2,000<br>
                Đặt Stop Loss @ $1,900 (giảm 5%)<br>
                → Nếu giá xuống $1,900, tự động bán → Lỗ chỉ $100
            </div>

            <h5>4. Stop Limit Order</h5>
            <p>Kết hợp Stop và Limit: Khi giá chạm stop price, tạo limit order</p>
            <p><strong>Ưu:</strong> Kiểm soát giá tốt hơn</p>
            <p><strong>Nhược:</strong> Có thể không được khớp nếu giá biến động nhanh</p>

            <h5>5. Trailing Stop</h5>
            <p>Stop Loss tự động điều chỉnh theo giá</p>
            
            <div class="example-box">
                <strong>Ví dụ:</strong><br>
                Mua @ $100, đặt Trailing Stop 10%<br>
                Giá lên $120 → Stop tự động lên $108 (90% của $120)<br>
                Giá lên $150 → Stop tự động lên $135<br>
                → Bảo vệ lợi nhuận tự động! 🎉
            </div>
        `,
        advanced: `
            <h4>🔧 Các loại lệnh nâng cao:</h4>

            <h5>1. OCO (One-Cancels-the-Other)</h5>
            <p>Đặt 2 lệnh cùng lúc, khi 1 lệnh thực hiện → lệnh kia tự động hủy</p>
            <div class="example-box">
                Mua BTC @ $30,000<br>
                Đặt OCO:<br>
                • Take Profit @ $32,000<br>
                • Stop Loss @ $28,500<br>
                → Khi chạm 1 trong 2 → lệnh còn lại tự động hủy
            </div>

            <h5>2. Iceberg Order</h5>
            <p>Chia lệnh lớn thành nhiều lệnh nhỏ để không làm ảnh hưởng giá thị trường</p>
            <p><strong>Dùng cho:</strong> Whale (cá mập) với lệnh lớn</p>

            <h5>3. Fill or Kill (FOK)</h5>
            <p>Thực hiện toàn bộ lệnh ngay lập tức hoặc hủy</p>
            <p><strong>Dùng khi:</strong> Cần khối lượng lớn ở mức giá cụ thể</p>

            <h5>4. Good Till Canceled (GTC)</h5>
            <p>Lệnh có hiệu lực cho đến khi thực hiện hoặc bạn hủy</p>

            <h5>5. Good for Day (GFD)</h5>
            <p>Lệnh chỉ có hiệu lực trong ngày, hết ngày tự động hủy</p>

            <h4>💡 Chiến thuật đặt lệnh:</h4>
            <ul>
                <li><strong>Scale In:</strong> Chia vốn, vào từng phần khi giá giảm</li>
                <li><strong>Scale Out:</strong> Bán từng phần khi giá tăng để tối ưu lợi nhuận</li>
                <li><strong>Pyramid:</strong> Thêm vị thế khi đã có lãi</li>
            </ul>

            <div class="warning-box">
                <strong>⚠️ Lưu ý quan trọng:</strong><br>
                • Stop Loss không đảm bảo 100% giá khớp chính xác (có thể bị slippage)<br>
                • Trong thị trường biến động mạnh, gap giá có thể làm bạn lỗ nhiều hơn stop loss<br>
                • Luôn kiểm tra thanh khoản trước khi đặt lệnh lớn
            </div>
        `,
        keyPoints: ['Market Order', 'Limit Order', 'Stop Loss', 'Trailing Stop', 'OCO Order']
    },

    'timeframes': {
        icon: '⏰',
        title: 'Khung Thời Gian',
        order: 5,
        category: 'basics',
        connections: ['candlestick', 'day-trading', 'swing-trading'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> Khung thời gian (timeframe) là khoảng thời gian mỗi cây nến trên biểu đồ đại diện.</p>
            
            <h4>📌 Các khung thời gian phổ biến:</h4>
            
            <div class="example-box">
                <strong>Khung ngắn (Scalping, Day Trading):</strong><br>
                • 1m (1 phút): Mỗi nến = 1 phút<br>
                • 5m (5 phút): Mỗi nến = 5 phút<br>
                • 15m (15 phút): Mỗi nến = 15 phút<br>
                <strong>Dùng cho:</strong> Giao dịch rất nhanh trong ngày
            </div>

            <div class="example-box">
                <strong>Khung trung (Day Trading, Swing):</strong><br>
                • 1H (1 giờ): Mỗi nến = 1 giờ<br>
                • 4H (4 giờ): Mỗi nến = 4 giờ<br>
                <strong>Dùng cho:</strong> Giao dịch trong ngày đến vài ngày
            </div>

            <div class="example-box">
                <strong>Khung dài (Swing, Position Trading):</strong><br>
                • 1D (1 ngày): Mỗi nến = 1 ngày<br>
                • 1W (1 tuần): Mỗi nến = 1 tuần<br>
                • 1M (1 tháng): Mỗi nến = 1 tháng<br>
                <strong>Dùng cho:</strong> Nắm giữ vài tuần đến vài tháng
            </div>

            <div class="warning-box">
                <strong>⚠️ Nguyên tắc vàng:</strong> Khung thời gian càng lớn → tín hiệu càng đáng tin cậy
            </div>
        `,
        detail: `
            <h4>🎯 Cách chọn khung thời gian phù hợp:</h4>

            <table style="width:100%; border-collapse: collapse;">
                <tr style="background:#2c3e50; color:white;">
                    <th style="padding:10px;">Loại Trader</th>
                    <th style="padding:10px;">Khung chính</th>
                    <th style="padding:10px;">Khung phụ</th>
                    <th style="padding:10px;">Thời gian</th>
                </tr>
                <tr>
                    <td style="padding:10px;"><strong>Scalper</strong></td>
                    <td style="padding:10px;">1m, 5m</td>
                    <td style="padding:10px;">15m, 1H</td>
                    <td style="padding:10px;">Vài giây → vài phút</td>
                </tr>
                <tr>
                    <td style="padding:10px;"><strong>Day Trader</strong></td>
                    <td style="padding:10px;">5m, 15m, 1H</td>
                    <td style="padding:10px;">4H, 1D</td>
                    <td style="padding:10px;">Vài phút → vài giờ</td>
                </tr>
                <tr>
                    <td style="padding:10px;"><strong>Swing Trader</strong></td>
                    <td style="padding:10px;">1H, 4H, 1D</td>
                    <td style="padding:10px;">1W</td>
                    <td style="padding:10px;">Vài ngày → vài tuần</td>
                </tr>
                <tr>
                    <td style="padding:10px;"><strong>Position Trader</strong></td>
                    <td style="padding:10px;">1D, 1W</td>
                    <td style="padding:10px;">1M</td>
                    <td style="padding:10px;">Vài tuần → vài tháng</td>
                </tr>
            </table>

            <h4>💡 Phân tích đa khung (Multiple Timeframe Analysis):</h4>
            <ol>
                <li><strong>Khung lớn:</strong> Xác định xu hướng tổng thể (1D, 1W)</li>
                <li><strong>Khung trung:</strong> Tìm điểm vào (4H, 1H)</li>
                <li><strong>Khung nhỏ:</strong> Entry chính xác (15m, 5m)</li>
            </ol>

            <div class="example-box">
                <strong>Ví dụ Swing Trading:</strong><br>
                1. Xem 1D: BTC đang uptrend (xu hướng tăng) ✅<br>
                2. Xem 4H: Giá pullback (điều chỉnh) về support<br>
                3. Xem 1H: Tìm tín hiệu đảo chiều để vào lệnh<br>
                → Entry chính xác với trend lớn
            </div>
        `,
        advanced: `
            <h4>🔧 Kỹ thuật phân tích đa khung nâng cao:</h4>

            <h5>1. Top-Down Analysis (Phân tích từ trên xuống)</h5>
            <div class="example-box">
                <strong>Bước 1:</strong> Monthly (1M) - Xu hướng dài hạn<br>
                <strong>Bước 2:</strong> Weekly (1W) - Xu hướng trung hạn<br>
                <strong>Bước 3:</strong> Daily (1D) - Xu hướng ngắn hạn<br>
                <strong>Bước 4:</strong> 4H hoặc 1H - Setup entry<br>
                <strong>Bước 5:</strong> 15m hoặc 5m - Timing chính xác
            </div>

            <h5>2. Timeframe Relationship</h5>
            <p><strong>Rule of 4-6:</strong> Khung nhỏ nên nhỏ hơn khung lớn 4-6 lần</p>
            <ul>
                <li>Nếu trade trên 4H → Xem 1D và 15m</li>
                <li>Nếu trade trên 1H → Xem 4H và 10-15m</li>
            </ul>

            <h5>3. Timeframe Confluence</h5>
            <p>Tín hiệu mạnh nhất khi nhiều khung thời gian cùng xác nhận:</p>
            <div class="example-box">
                • 1D: RSI oversold + Price tại support<br>
                • 4H: Bullish divergence<br>
                • 1H: Bullish engulfing candle<br>
                → <strong>High probability trade! 🎯</strong>
            </div>

            <h5>4. Độ nhiễu (Noise) theo timeframe:</h5>
            <ul>
                <li><strong>1m-5m:</strong> Nhiễu rất cao, khó dự đoán</li>
                <li><strong>15m-1H:</strong> Nhiễu trung bình, phù hợp day trading</li>
                <li><strong>4H-1D:</strong> Nhiễu thấp, tín hiệu đáng tin cậy</li>
                <li><strong>1W-1M:</strong> Nhiễu rất thấp, cho investor</li>
            </ul>

            <div class="warning-box">
                <strong>⚠️ Lỗi thường gặp:</strong><br>
                • Trade trên khung nhỏ nhưng không xem khung lớn → dễ ngược trend<br>
                • Nhảy qua nhiều khung → confusion paralysis<br>
                • Không kiên nhẫn chờ setup trên khung lớn<br>
                <br>
                <strong>Giải pháp:</strong> Chọn 1 khung chính + 2 khung phụ, tuân thủ quy tắc
            </div>

            <h4>📊 Quy tắc Timeframe trong Trading Plan:</h4>
            <ol>
                <li>Định nghĩa rõ: Tôi là loại trader nào?</li>
                <li>Chọn khung chính phù hợp với lifestyle</li>
                <li>Chọn 2 khung phụ để xác nhận</li>
                <li>Luôn check trend trên khung lớn trước khi vào lệnh</li>
                <li>Entry trên khung nhỏ, stop loss theo khung lớn</li>
            </ol>
        `,
        keyPoints: ['Multiple Timeframe', 'Top-Down Analysis', 'Timeframe Confluence', 'Noise Level', 'Rule of 4-6']
    }
};

// Export để sử dụng trong app.js
if (typeof window !== 'undefined') {
    window.tradingBasicsData = tradingBasicsData;
}
