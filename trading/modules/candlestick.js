// ==================== CANDLESTICK PATTERNS MODULE ====================

const candlestickData = {
    'candlestick': {
        icon: '🕯️',
        title: 'Biểu Đồ Nến (Candlestick)',
        order: 4,
        category: 'basics',
        connections: ['trading-basics', 'chart-patterns', 'timeframes'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> Biểu đồ nến là cách hiển thị giá theo thời gian. Mỗi cây nến cho biết giá mở cửa, đóng cửa, cao nhất, thấp nhất.</p>
            
            <h4>📌 Cấu trúc cây nến:</h4>
            
            <div class="example-box">
                <strong>Nến Xanh/Trắng (Bullish - Tăng):</strong><br>
                <pre style="font-family: monospace; background: #1a1a1a; padding: 15px; border-radius: 5px; color: #4caf50;">
    High (Cao nhất)
         |
         |  ← Upper Shadow (Bóng trên)
    ┌────┐
    │    │ ← Body (Thân nến)
    │    │   Open < Close
    └────┘
         |  ← Lower Shadow (Bóng dưới)
         |
    Low (Thấp nhất)
                </pre>
                <strong>Ý nghĩa:</strong> Giá đóng cửa cao hơn mở cửa → Buyers thắng thế
            </div>

            <div class="example-box">
                <strong>Nến Đỏ/Đen (Bearish - Giảm):</strong><br>
                <pre style="font-family: monospace; background: #1a1a1a; padding: 15px; border-radius: 5px; color: #f44336;">
    High (Cao nhất)
         |
    ┌────┐ ← Body
    │    │   Open > Close
    │    │   
    └────┘
         |
    Low (Thấp nhất)
                </pre>
                <strong>Ý nghĩa:</strong> Giá đóng cửa thấp hơn mở cửa → Sellers thắng thế
            </div>

            <h4>💡 Các mẫu nến cơ bản:</h4>
            
            <div class="example-box">
                <strong>1. Doji:</strong> Open = Close (hoặc gần bằng)<br>
                • Thân nến rất nhỏ<br>
                • Bóng trên/dưới dài<br>
                • <strong>Ý nghĩa:</strong> Thị trường phân vân, có thể đảo chiều
            </div>

            <div class="example-box">
                <strong>2. Hammer (Búa):</strong><br>
                • Bóng dưới dài (ít nhất gấp 2 thân)<br>
                • Thân nhỏ ở trên<br>
                • Bóng trên rất ngắn hoặc không có<br>
                • <strong>Ý nghĩa:</strong> Xuất hiện sau downtrend → tín hiệu đảo chiều tăng
            </div>

            <div class="example-box">
                <strong>3. Shooting Star (Sao băng):</strong><br>
                • Bóng trên dài<br>
                • Thân nhỏ ở dưới<br>
                • <strong>Ý nghĩa:</strong> Xuất hiện sau uptrend → tín hiệu đảo chiều giảm
            </div>
        `,
        detail: `
            <h4>🎯 Các mẫu nến đơn (Single Candlestick Patterns):</h4>

            <h5>1. Doji - Phân vân</h5>
            <div class="example-box">
                <strong>Các loại Doji:</strong><br>
                • <strong>Standard Doji:</strong> Bóng trên và dưới dài bằng nhau<br>
                • <strong>Dragonfly Doji:</strong> Chỉ có bóng dưới dài → Bullish<br>
                • <strong>Gravestone Doji:</strong> Chỉ có bóng trên dài → Bearish<br>
                • <strong>Long-legged Doji:</strong> Cả 2 bóng đều rất dài → Không chắc chắn cao
            </div>

            <h5>2. Marubozu - Quyết đoán</h5>
            <p>Thân dài, không có bóng (hoặc rất ngắn)</p>
            <ul>
                <li><strong>White Marubozu:</strong> Tăng mạnh từ đầu đến cuối</li>
                <li><strong>Black Marubozu:</strong> Giảm mạnh từ đầu đến cuối</li>
            </ul>

            <h5>3. Spinning Top</h5>
            <p>Thân nhỏ, 2 bóng dài → Không chắc chắn</p>

            <h4>🎯 Các mẫu nến kép (Double Candlestick Patterns):</h4>

            <h5>1. Bullish Engulfing (Nhấn chìm tăng)</h5>
            <div class="example-box">
                <strong>Cấu trúc:</strong><br>
                Nến 1: Đỏ (giảm)<br>
                Nến 2: Xanh lớn, "nuốt chửng" nến 1<br>
                <strong>Điều kiện:</strong><br>
                • Xuất hiện sau downtrend<br>
                • Open nến 2 < Close nến 1<br>
                • Close nến 2 > Open nến 1<br>
                <strong>Signal:</strong> Đảo chiều tăng mạnh 📈
            </div>

            <h5>2. Bearish Engulfing (Nhấn chìm giảm)</h5>
            <div class="example-box">
                <strong>Cấu trúc:</strong><br>
                Nến 1: Xanh (tăng)<br>
                Nến 2: Đỏ lớn, "nuốt chửng" nến 1<br>
                <strong>Signal:</strong> Đảo chiều giảm mạnh 📉
            </div>

            <h5>3. Piercing Pattern (Xuyên thủng)</h5>
            <p>Nến 2 xanh đóng cửa trên 50% thân nến 1 đỏ → Bullish</p>

            <h5>4. Dark Cloud Cover</h5>
            <p>Nến 2 đỏ đóng cửa dưới 50% thân nến 1 xanh → Bearish</p>

            <h4>🎯 Các mẫu nến ba (Triple Candlestick Patterns):</h4>

            <h5>1. Morning Star (Sao mai) - Bullish</h5>
            <div class="example-box">
                Nến 1: Đỏ dài (downtrend tiếp tục)<br>
                Nến 2: Nhỏ (Doji hoặc Spinning top) - phân vân<br>
                Nến 3: Xanh dài (uptrend bắt đầu)<br>
                <strong>Signal:</strong> Đảo chiều tăng mạnh 🌅
            </div>

            <h5>2. Evening Star (Sao chiều) - Bearish</h5>
            <div class="example-box">
                Nến 1: Xanh dài<br>
                Nến 2: Nhỏ (Doji)<br>
                Nến 3: Đỏ dài<br>
                <strong>Signal:</strong> Đảo chiều giảm mạnh 🌆
            </div>

            <h5>3. Three White Soldiers (Ba người lính)</h5>
            <p>3 nến xanh liên tiếp, mỗi nến cao hơn nến trước → Uptrend mạnh</p>

            <h5>4. Three Black Crows (Ba con quạ)</h5>
            <p>3 nến đỏ liên tiếp, mỗi nến thấp hơn nến trước → Downtrend mạnh</p>
        `,
        advanced: `
            <h4>🔧 Phân tích nến nâng cao:</h4>

            <h5>1. Price Action Context</h5>
            <p><strong>Nguyên tắc vàng:</strong> Candlestick pattern phải được đặt trong ngữ cảnh</p>
            <div class="example-box">
                <strong>Ví dụ:</strong><br>
                Hammer ở cuối downtrend + tại support → Mạnh ✅<br>
                Hammer ở giữa uptrend → Yếu ❌<br>
                <br>
                <strong>Kết luận:</strong> Location matters!
            </div>

            <h5>2. Confirmation Rules</h5>
            <ol>
                <li><strong>Volume Confirmation:</strong> Pattern với volume cao → đáng tin cậy hơn</li>
                <li><strong>Next Candle Confirmation:</strong> Nến tiếp theo phải đi theo hướng dự đoán</li>
                <li><strong>S/R Confluence:</strong> Pattern tại support/resistance → mạnh hơn</li>
            </ol>

            <h5>3. Advanced Patterns</h5>
            
            <div class="example-box">
                <strong>1. Tweezer Top/Bottom:</strong><br>
                2 nến có high hoặc low bằng nhau<br>
                • Tweezer Top: 2 highs bằng nhau → Bearish reversal<br>
                • Tweezer Bottom: 2 lows bằng nhau → Bullish reversal
            </div>

            <div class="example-box">
                <strong>2. Inside Bar:</strong><br>
                Nến 2 nằm hoàn toàn trong range của nến 1<br>
                • Consolidation (tích lũy)<br>
                • Breakout direction → Strong move
            </div>

            <div class="example-box">
                <strong>3. Outside Bar (Mother Bar):</strong><br>
                Nến 2 "nuốt" hoàn toàn nến 1<br>
                • Similar to Engulfing nhưng quan trọng hơn
            </div>

            <div class="example-box">
                <strong>4. Pin Bar:</strong><br>
                Bóng dài (ít nhất 2/3 tổng chiều dài), thân nhỏ<br>
                • Bullish Pin: Bóng dưới dài → Rejection of lower prices<br>
                • Bearish Pin: Bóng trên dài → Rejection of higher prices<br>
                <strong>Best:</strong> Tại S/R levels
            </div>

            <h4>📊 Candlestick Trading System:</h4>
            
            <h5>Setup Entry:</h5>
            <ol>
                <li>Identify trend (uptrend/downtrend/sideways)</li>
                <li>Wait for price to come to key S/R level</li>
                <li>Look for reversal candlestick pattern</li>
                <li>Wait for confirmation candle</li>
                <li>Enter on break of confirmation candle high/low</li>
            </ol>

            <div class="example-box">
                <strong>Ví dụ cụ thể:</strong><br>
                1. BTC in uptrend, pulls back to support @ $30,000<br>
                2. Forms Bullish Engulfing at support<br>
                3. Next candle confirms (green, closes higher)<br>
                4. Entry: Break above confirmation candle high @ $30,500<br>
                5. Stop Loss: Below engulfing low @ $29,800<br>
                6. Take Profit: Previous high @ $32,000<br>
                <br>
                <strong>Risk:Reward = 1:3 → Good trade! 🎯</strong>
            </div>

            <h4>⚠️ Common Mistakes:</h4>
            <ul>
                <li><strong>Trading every pattern:</strong> Chỉ trade pattern ở key levels</li>
                <li><strong>No confirmation:</strong> Luôn đợi nến xác nhận</li>
                <li><strong>Ignoring trend:</strong> Trade theo trend, không ngược trend</li>
                <li><strong>Wrong timeframe:</strong> Pattern trên khung lớn (4H, 1D) mạnh hơn</li>
                <li><strong>No stop loss:</strong> Luôn đặt stop loss dưới pattern low (long) hoặc trên pattern high (short)</li>
            </ul>

            <h4>💡 Pro Tips:</h4>
            <ul>
                <li>Pattern ở daily timeframe > 4H > 1H > 15m</li>
                <li>Kết hợp với indicators (RSI, MACD) để tăng win rate</li>
                <li>Volume spike khi pattern xuất hiện → đáng tin cậy</li>
                <li>Practice trên TradingView với Replay feature</li>
                <li>Backtest pattern trước khi trade thật</li>
            </ul>
        `,
        keyPoints: ['Doji', 'Hammer', 'Engulfing', 'Morning Star', 'Pin Bar', 'Inside Bar', 'Confirmation']
    }
};

// Export để sử dụng trong app.js
if (typeof window !== 'undefined') {
    window.candlestickData = candlestickData;
}
