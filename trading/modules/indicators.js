// ==================== INDICATORS MODULE ====================

const indicatorsData = {
    'indicators': {
        icon: '📊',
        title: 'Chỉ Báo (Indicators)',
        order: 7,
        category: 'analysis',
        connections: ['technical-analysis', 'strategies'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> Indicators (chỉ báo) là các công cụ toán học giúp phân tích giá và đưa ra tín hiệu mua/bán.</p>
            
            <h4>📌 3 loại chỉ báo chính:</h4>
            
            <div class="example-box">
                <strong>1. Trend Indicators (Chỉ báo xu hướng):</strong><br>
                • Cho biết thị trường đang uptrend, downtrend hay sideways<br>
                • Ví dụ: Moving Averages (MA), ADX<br>
                <br>
                <strong>Dùng khi:</strong> Muốn biết trend tổng thể
            </div>

            <div class="example-box">
                <strong>2. Momentum Indicators (Chỉ báo động lượng):</strong><br>
                • Cho biết giá đang tăng/giảm mạnh hay yếu<br>
                • Ví dụ: RSI, Stochastic, MACD<br>
                <br>
                <strong>Dùng khi:</strong> Tìm điểm vào/ra chính xác
            </div>

            <div class="example-box">
                <strong>3. Volatility Indicators (Chỉ báo biến động):</strong><br>
                • Cho biết thị trường đang biến động mạnh hay yếu<br>
                • Ví dụ: Bollinger Bands, ATR<br>
                <br>
                <strong>Dùng khi:</strong> Điều chỉnh stop loss và position size
            </div>

            <h4>💡 Chỉ báo phổ biến nhất:</h4>
            
            <div class="example-box">
                <strong>Moving Average (MA) - Đường trung bình:</strong><br>
                • MA 50: Trung bình 50 nến gần nhất<br>
                • MA 200: Trung bình 200 nến gần nhất<br>
                <br>
                <strong>Tín hiệu:</strong><br>
                • Giá trên MA → Uptrend ✅<br>
                • Giá dưới MA → Downtrend ⚠️<br>
                • MA 50 cắt lên MA 200 → Golden Cross (Bullish)<br>
                • MA 50 cắt xuống MA 200 → Death Cross (Bearish)
            </div>

            <div class="example-box">
                <strong>RSI (Relative Strength Index):</strong><br>
                • Dao động từ 0-100<br>
                • RSI > 70 → Overbought (quá mua, có thể giảm)<br>
                • RSI < 30 → Oversold (quá bán, có thể tăng)<br>
                <br>
                <strong>Ví dụ:</strong> BTC RSI = 25 → Oversold → Cơ hội mua
            </div>
        `,
        detail: `
            <h4>🎯 Chi tiết từng indicator:</h4>

            <h5>1. Moving Averages (MA)</h5>
            <p><strong>Loại:</strong></p>
            <ul>
                <li><strong>SMA (Simple MA):</strong> Trung bình đơn giản</li>
                <li><strong>EMA (Exponential MA):</strong> Ưu tiên giá gần nhất → Phản ứng nhanh hơn</li>
                <li><strong>WMA (Weighted MA):</strong> Trọng số tùy chỉnh</li>
            </ul>

            <p><strong>MA phổ biến:</strong></p>
            <ul>
                <li>MA 20: Short-term trend</li>
                <li>MA 50: Medium-term trend</li>
                <li>MA 100, 200: Long-term trend</li>
            </ul>

            <div class="example-box">
                <strong>MA Strategy - Crossover:</strong><br>
                <strong>Setup:</strong> Dùng MA 20 và MA 50<br>
                <strong>Buy Signal:</strong> MA 20 cắt lên MA 50<br>
                <strong>Sell Signal:</strong> MA 20 cắt xuống MA 50<br>
                <br>
                <strong>Ưu:</strong> Đơn giản, dễ hiểu<br>
                <strong>Nhược:</strong> Lag (chậm), nhiều false signal trong sideways
            </div>

            <h5>2. RSI (Relative Strength Index)</h5>
            <p><strong>Công thức:</strong> RSI = 100 - (100 / (1 + RS))</p>
            <p>RS = Average Gain / Average Loss (thường 14 periods)</p>

            <p><strong>Cách dùng:</strong></p>
            <ul>
                <li><strong>Overbought/Oversold:</strong> RSI > 70 / RSI < 30</li>
                <li><strong>Divergence:</strong> Giá lên, RSI xuống → Bearish divergence</li>
                <li><strong>Centerline:</strong> RSI > 50 → Bullish / RSI < 50 → Bearish</li>
            </ul>

            <div class="example-box">
                <strong>RSI Divergence Trading:</strong><br>
                <strong>Bullish Divergence:</strong><br>
                • Giá tạo lower low<br>
                • RSI tạo higher low<br>
                → Momentum đang mạnh lên → Buy signal! 🚀<br>
                <br>
                <strong>Bearish Divergence:</strong><br>
                • Giá tạo higher high<br>
                • RSI tạo lower high<br>
                → Momentum đang yếu đi → Sell signal!
            </div>

            <h5>3. MACD (Moving Average Convergence Divergence)</h5>
            <p><strong>Thành phần:</strong></p>
            <ul>
                <li>MACD Line = EMA 12 - EMA 26</li>
                <li>Signal Line = EMA 9 của MACD Line</li>
                <li>Histogram = MACD - Signal</li>
            </ul>

            <p><strong>Tín hiệu:</strong></p>
            <ul>
                <li><strong>Crossover:</strong> MACD cắt lên Signal → Buy / Cắt xuống → Sell</li>
                <li><strong>Zero Line:</strong> MACD > 0 → Bullish / < 0 → Bearish</li>
                <li><strong>Divergence:</strong> Giống RSI divergence</li>
            </ul>

            <h5>4. Bollinger Bands</h5>
            <p><strong>Cấu trúc:</strong></p>
            <ul>
                <li>Middle Band: MA 20</li>
                <li>Upper Band: MA 20 + (2 × Standard Deviation)</li>
                <li>Lower Band: MA 20 - (2 × Standard Deviation)</li>
            </ul>

            <p><strong>Cách dùng:</strong></p>
            <ul>
                <li>Giá chạm Upper Band → Overbought</li>
                <li>Giá chạm Lower Band → Oversold</li>
                <li>Bands thu hẹp → Volatility thấp → Chuẩn bị breakout</li>
                <li>Bands mở rộng → Volatility cao → Strong trend</li>
            </ul>

            <h5>5. Stochastic Oscillator</h5>
            <p>Dao động 0-100, tương tự RSI</p>
            <ul>
                <li>Stochastic > 80 → Overbought</li>
                <li>Stochastic < 20 → Oversold</li>
                <li>%K cắt lên %D → Buy signal</li>
            </ul>
        `,
        advanced: `
            <h4>🔧 Advanced Indicator Usage:</h4>

            <h5>1. Multiple Indicator Confluence</h5>
            <p><strong>Concept:</strong> Kết hợp nhiều indicators để tăng win rate</p>

            <div class="example-box">
                <strong>High Probability Setup:</strong><br>
                ✅ MA 50 trending up (uptrend confirmed)<br>
                ✅ Price pullback to MA 50 (support)<br>
                ✅ RSI oversold (< 40) → buyers step in<br>
                ✅ MACD bullish divergence → momentum shifting<br>
                ✅ Bollinger Bands squeeze → volatility coming<br>
                ✅ Bullish candle pattern at MA 50<br>
                <br>
                → <strong>Win rate: 70-80%! 🎯</strong>
            </div>

            <h5>2. Indicator-Based Trading Systems</h5>

            <div class="example-box">
                <strong>System 1: Trend Following (MA + ADX)</strong><br>
                <pre style="background:#1a1a1a; padding:10px; border-radius:5px;">
Entry Rules:
1. Price > MA 50 (uptrend)
2. ADX > 25 (strong trend)
3. Price pullback to MA 20
4. RSI > 40 (not oversold yet)
→ Enter Long

Exit Rules:
1. Price < MA 50, or
2. ADX < 20 (trend weakening), or
3. RSI > 70 (overbought)
→ Exit
                </pre>
            </div>

            <div class="example-box">
                <strong>System 2: Mean Reversion (Bollinger + RSI)</strong><br>
                <pre style="background:#1a1a1a; padding:10px; border-radius:5px;">
Entry Rules:
1. Price touches lower Bollinger Band
2. RSI < 30 (oversold)
3. Bullish candle pattern
→ Enter Long

Exit Rules:
1. Price reaches middle band (MA 20), or
2. Price touches upper band, or
3. RSI > 70
→ Exit
                </pre>
            </div>

            <h5>3. Custom Indicators</h5>

            <p><strong>Volume-Weighted MA (VWMA):</strong></p>
            <p>MA có tính đến volume → Chính xác hơn trong thị trường có volume cao</p>

            <p><strong>Ichimoku Cloud:</strong></p>
            <p>System Nhật Bản, hiển thị support/resistance/trend trên 1 chart</p>
            <ul>
                <li>Price above cloud → Strong uptrend</li>
                <li>Price below cloud → Strong downtrend</li>
                <li>Price in cloud → Consolidation</li>
            </ul>

            <h5>4. Leading vs Lagging Indicators</h5>

            <table style="width:100%; border-collapse: collapse;">
                <tr style="background:#2c3e50; color:white;">
                    <th style="padding:10px;">Type</th>
                    <th style="padding:10px;">Examples</th>
                    <th style="padding:10px;">Pros</th>
                    <th style="padding:10px;">Cons</th>
                </tr>
                <tr>
                    <td style="padding:10px;"><strong>Leading</strong></td>
                    <td style="padding:10px;">RSI, Stochastic</td>
                    <td style="padding:10px;">Dự đoán trước</td>
                    <td style="padding:10px;">Many false signals</td>
                </tr>
                <tr>
                    <td style="padding:10px;"><strong>Lagging</strong></td>
                    <td style="padding:10px;">MA, MACD</td>
                    <td style="padding:10px;">Ít false signals</td>
                    <td style="padding:10px;">Vào lệnh muộn</td>
                </tr>
            </table>

            <h5>5. Indicator Optimization</h5>

            <p><strong>Backtesting:</strong></p>
            <ol>
                <li>Chọn indicator và settings</li>
                <li>Test trên lịch sử giá (ít nhất 100 trades)</li>
                <li>Tính win rate, avg R:R, max drawdown</li>
                <li>Optimize settings (RSI 14 vs 21, MA 50 vs 55...)</li>
                <li>Forward test trên paper trading</li>
            </ol>

            <div class="warning-box">
                <strong>⚠️ Over-optimization (Curve Fitting):</strong><br>
                • Tối ưu quá mức cho lịch sử → Không work với tương lai<br>
                • <strong>Solution:</strong> Test trên nhiều markets và timeframes<br>
                • Keep settings simple và robust
            </div>

            <h4>📊 Pro Indicator Tips:</h4>

            <ol>
                <li><strong>Less is more:</strong> 2-3 indicators đủ, nhiều quá → confusion</li>
                <li><strong>Complementary:</strong> Dùng indicators bổ sung nhau (1 trend + 1 momentum + 1 volatility)</li>
                <li><strong>Confirm, not predict:</strong> Dùng để xác nhận price action, không dựa 100%</li>
                <li><strong>Adjust settings:</strong> Mỗi market khác nhau (Crypto volatile → adjust RSI periods)</li>
                <li><strong>Context matters:</strong> RSI 70 trong strong uptrend ≠ RSI 70 trong weak uptrend</li>
            </ol>

            <h4>🎓 Indicator Combinations:</h4>

            <div class="example-box">
                <strong>Combo 1: MA + RSI (Beginner Friendly)</strong><br>
                • MA 50 for trend<br>
                • RSI for entry timing<br>
                • Win rate: 60-65%
            </div>

            <div class="example-box">
                <strong>Combo 2: Bollinger + Stochastic (Mean Reversion)</strong><br>
                • BB for volatility<br>
                • Stochastic for oversold/overbought<br>
                • Best for ranging markets<br>
                • Win rate: 55-60%
            </div>

            <div class="example-box">
                <strong>Combo 3: EMA + MACD + Volume (Trend Following)</strong><br>
                • EMA 20/50 for trend<br>
                • MACD for momentum<br>
                • Volume for confirmation<br>
                • Best for trending markets<br>
                • Win rate: 65-70%
            </div>

            <div class="warning-box">
                <strong>⚠️ Common Mistakes:</strong><br>
                • Indicator soup: Too many indicators → Analysis paralysis<br>
                • Conflicting signals: Trend indicator says up, momentum says down<br>
                • Ignoring price action: Indicators lag, price action is king<br>
                • No testing: Using indicators without backtesting<br>
                <br>
                <strong>Remember:</strong> Indicators are tools to CONFIRM your analysis, not to make decisions for you!
            </div>
        `,
        keyPoints: ['Moving Averages', 'RSI', 'MACD', 'Bollinger Bands', 'Divergence', 'Confluence', 'Backtesting']
    },

    'chart-patterns': {
        icon: '📐',
        title: 'Mô Hình Giá (Chart Patterns)',
        order: 9,
        category: 'analysis',
        connections: ['technical-analysis', 'candlestick', 'support-resistance'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> Chart patterns là các hình dạng được tạo ra bởi giá, giúp dự đoán hướng giá tiếp theo.</p>
            
            <h4>📌 2 loại pattern chính:</h4>
            
            <div class="example-box">
                <strong>1. Reversal Patterns (Đảo chiều):</strong><br>
                • Xuất hiện khi trend sắp đổi chiều<br>
                • Ví dụ: Head & Shoulders, Double Top/Bottom<br>
                <br>
                <strong>Khi nào xuất hiện:</strong> Cuối uptrend hoặc downtrend
            </div>

            <div class="example-box">
                <strong>2. Continuation Patterns (Tiếp tục):</strong><br>
                • Giá "nghỉ" rồi tiếp tục theo trend cũ<br>
                • Ví dụ: Flags, Pennants, Triangles<br>
                <br>
                <strong>Khi nào xuất hiện:</strong> Giữa một trend mạnh
            </div>

            <h4>💡 Pattern phổ biến nhất:</h4>

            <div class="example-box">
                <strong>Head & Shoulders (Đầu và vai):</strong><br>
                <pre style="font-family: monospace;">
        Head (Đầu)
         /\
        /  \
       /    \
  L.S /      \ R.S
     /        \
    /          \
---/------------\---  Neckline
                </pre>
                • Left Shoulder (Vai trái), Head, Right Shoulder (Vai phải)<br>
                • Xuất hiện sau uptrend<br>
                • Break neckline → Bearish reversal → Short!<br>
                <br>
                <strong>Target:</strong> Khoảng cách Head → Neckline
            </div>

            <div class="example-box">
                <strong>Double Top (Đỉnh đôi):</strong><br>
                <pre style="font-family: monospace;">
    /\      /\
   /  \    /  \
  /    \  /    \
 /      \/      \
        Support
                </pre>
                • 2 đỉnh gần bằng nhau<br>
                • Break support → Bearish<br>
                • Giống chữ M
            </div>

            <div class="example-box">
                <strong>Flag Pattern:</strong><br>
                • Giá tăng mạnh (cột cờ)<br>
                • Consolidate trong channel nhỏ (lá cờ)<br>
                • Breakout → Tiếp tục tăng<br>
                <br>
                <strong>Tín hiệu:</strong> Continuation pattern trong uptrend
            </div>
        `,
        detail: `
            <h4>🎯 Reversal Patterns Chi Tiết:</h4>

            <h5>1. Head & Shoulders (Bearish Reversal)</h5>
            <p><strong>Đặc điểm:</strong></p>
            <ul>
                <li>3 peaks: Left shoulder < Head > Right shoulder</li>
                <li>Neckline connects 2 troughs</li>
                <li>Volume giảm dần qua 3 peaks</li>
            </ul>
            <p><strong>Entry:</strong> Break neckline với volume</p>
            <p><strong>Stop Loss:</strong> Trên right shoulder</p>
            <p><strong>Target:</strong> Neckline - (Head height)</p>

            <h5>2. Inverse Head & Shoulders (Bullish Reversal)</h5>
            <p>Ngược lại H&S, xuất hiện sau downtrend → Bullish</p>

            <h5>3. Double Top (Bearish Reversal)</h5>
            <p><strong>Đặc điểm:</strong></p>
            <ul>
                <li>2 peaks ở cùng mức (hoặc gần bằng)</li>
                <li>Giống chữ "M"</li>
                <li>Volume peak 2 < peak 1</li>
            </ul>
            <p><strong>Confirmation:</strong> Break support giữa 2 peaks</p>
            <p><strong>Target:</strong> Support - (Peak height)</p>

            <h5>4. Double Bottom (Bullish Reversal)</h5>
            <p>Giống chữ "W", xuất hiện sau downtrend → Bullish</p>

            <h5>5. Triple Top/Bottom</h5>
            <p>3 peaks hoặc 3 troughs → Reversal mạnh hơn double</p>

            <h4>🎯 Continuation Patterns Chi Tiết:</h4>

            <h5>1. Bull Flag (Bullish Continuation)</h5>
            <div class="example-box">
                <strong>Cấu trúc:</strong><br>
                1. Strong uptrend (flagpole)<br>
                2. Consolidation in downward channel (flag)<br>
                3. Breakout upward (continuation)<br>
                <br>
                <strong>Entry:</strong> Break trên flag<br>
                <strong>Target:</strong> Flagpole height
            </div>

            <h5>2. Bear Flag (Bearish Continuation)</h5>
            <p>Ngược lại bull flag, trong downtrend</p>

            <h5>3. Pennant</h5>
            <p>Giống flag nhưng symmetrical triangle thay vì channel</p>

            <h5>4. Triangles</h5>

            <p><strong>a) Ascending Triangle (Bullish):</strong></p>
            <ul>
                <li>Flat top (resistance)</li>
                <li>Rising bottom (higher lows)</li>
                <li>Break trên → Bullish continuation</li>
            </ul>

            <p><strong>b) Descending Triangle (Bearish):</strong></p>
            <ul>
                <li>Flat bottom (support)</li>
                <li>Falling top (lower highs)</li>
                <li>Break dưới → Bearish continuation</li>
            </ul>

            <p><strong>c) Symmetrical Triangle (Neutral):</strong></p>
            <ul>
                <li>Higher lows + Lower highs</li>
                <li>Breakout direction depends on context</li>
                <li>Usually continues existing trend</li>
            </ul>

            <h5>5. Rectangle/Channel</h5>
            <p>Giá đi ngang giữa support và resistance</p>
            <ul>
                <li>Trade the range OR</li>
                <li>Wait for breakout</li>
            </ul>

            <h5>6. Cup and Handle (Bullish)</h5>
            <p>U-shaped bottom + small pullback → Strong continuation</p>
        `,
        advanced: `
            <h4>🔧 Advanced Pattern Trading:</h4>

            <h5>1. Pattern Confluence</h5>
            <p>Pattern mạnh nhất khi kết hợp với:</p>
            <ul>
                <li>Major S/R levels</li>
                <li>Fibonacci retracements</li>
                <li>Moving averages</li>
                <li>Volume confirmation</li>
            </ul>

            <div class="example-box">
                <strong>Perfect Setup:</strong><br>
                ✅ H&S pattern forms<br>
                ✅ Neckline = Major support (touched 3+ times before)<br>
                ✅ Neckline = 200 MA<br>
                ✅ Neckline = 61.8% Fibonacci<br>
                ✅ Break with 2x avg volume<br>
                → <strong>High probability short! 🎯</strong>
            </div>

            <h5>2. Volume Analysis in Patterns</h5>

            <p><strong>Rules:</strong></p>
            <ul>
                <li>Volume should DECLINE during pattern formation</li>
                <li>Volume should SPIKE on breakout (2-3x average)</li>
                <li>No volume spike = Fakeout likely</li>
            </ul>

            <h5>3. Measured Moves</h5>

            <p><strong>Target calculation:</strong></p>
            <div class="example-box">
                <strong>H&S:</strong> Target = Neckline - Height<br>
                <strong>Double Top:</strong> Target = Support - Height<br>
                <strong>Flag:</strong> Target = Flagpole height from breakout<br>
                <strong>Triangle:</strong> Target = Widest part of triangle
            </div>

            <h5>4. Failed Patterns (Fakeouts)</h5>

            <p><strong>How to identify:</strong></p>
            <ul>
                <li>Break without volume</li>
                <li>Can't close beyond pattern boundary</li>
                <li>Quick reversal back into pattern</li>
            </ul>

            <p><strong>How to trade fakeouts:</strong></p>
            <div class="example-box">
                1. Pattern breaks down (e.g., H&S breaks neckline)<br>
                2. Price quickly reverses back above neckline<br>
                3. This is a TRAP → Failed breakdown → Actually bullish!<br>
                4. Enter long with tight stop below false break<br>
                <br>
                <strong>These trades often have HUGE R:R! 🚀</strong>
            </div>

            <h5>5. Multiple Timeframe Patterns</h5>

            <div class="example-box">
                <strong>Best Setup:</strong><br>
                • Daily: H&S forming, approaching neckline<br>
                • 4H: Bearish flag (confirming downtrend)<br>
                • 1H: Double top (micro reversal)<br>
                → All timeframes aligned bearish → High win rate short
            </div>

            <h4>📊 Pattern Trading System:</h4>

            <pre style="background:#1a1a1a; padding:15px; border-radius:5px;">
<strong>Step 1: Pattern Identification</strong>
- Scan daily charts for patterns forming
- Focus on clean, textbook patterns
- Note: Necklines, support/resistance levels

<strong>Step 2: Context Check</strong>
- What's HTF trend? (Weekly/Daily)
- Is pattern WITH or AGAINST trend?
- WITH trend = Higher probability

<strong>Step 3: Confluence</strong>
- Pattern + S/R level?
- Pattern + Fibonacci?
- Pattern + MA?
More confluence = Better trade

<strong>Step 4: Wait for Breakout</strong>
- Don't trade inside pattern
- Wait for clean break
- Volume must spike (2x+)

<strong>Step 5: Entry Options</strong>
Option A: Aggressive - Enter on break
Option B: Conservative - Enter on retest

<strong>Step 6: Risk Management</strong>
- SL beyond pattern boundary
- Target = Measured move
- Risk max 1-2% account

<strong>Step 7: Trade Management</strong>
- Partial profit at TP1 (50%)
- Move SL to BE
- Trail stop for remainder
            </pre>

            <h4>💡 Pro Pattern Tips:</h4>

            <ol>
                <li><strong>Patience:</strong> Wait for complete pattern formation, don't jump early</li>
                <li><strong>Volume:</strong> No volume spike = No trade</li>
                <li><strong>Clean patterns:</strong> Messy patterns = Low probability</li>
                <li><strong>Higher timeframes:</strong> Daily patterns > 1H patterns</li>
                <li><strong>Confluence:</strong> Pattern alone = 50-60% win, Pattern + confluence = 70-80%</li>
                <li><strong>Failed patterns:</strong> Don't ignore, they're great trades in opposite direction!</li>
            </ol>

            <div class="warning-box">
                <strong>⚠️ Pattern Pitfalls:</strong><br>
                • Seeing patterns everywhere (confirmation bias)<br>
                • Trading every pattern (overtrading)<br>
                • Forcing patterns that aren't there<br>
                • Ignoring trend context<br>
                • Not waiting for breakout confirmation<br>
                <br>
                <strong>Solution:</strong> Be selective, only trade A+ setups with full confluence
            </div>
        `,
        keyPoints: ['Head & Shoulders', 'Double Top/Bottom', 'Triangles', 'Flags', 'Volume Confirmation', 'Measured Moves', 'Fakeouts']
    }
};

// Export để sử dụng trong app.js
if (typeof window !== 'undefined') {
    window.indicatorsData = indicatorsData;
}
