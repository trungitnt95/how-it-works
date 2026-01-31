// ==================== TECHNICAL ANALYSIS MODULE ====================

const technicalAnalysisData = {
    'technical-analysis': {
        icon: '📈',
        title: 'Phân Tích Kỹ Thuật',
        order: 6,
        category: 'analysis',
        connections: ['indicators', 'chart-patterns', 'support-resistance'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> Phân tích kỹ thuật (Technical Analysis) là việc dự đoán giá trong tương lai dựa trên lịch sử giá và volume.</p>
            
            <h4>📌 3 giả định cơ bản:</h4>
            <div class="example-box">
                <strong>1. Thị trường phản ánh mọi thứ:</strong><br>
                Giá đã bao gồm tất cả thông tin (news, sentiment, fundamentals)
            </div>

            <div class="example-box">
                <strong>2. Giá di chuyển theo xu hướng:</strong><br>
                Xu hướng có xu hướng tiếp tục hơn là đảo chiều
            </div>

            <div class="example-box">
                <strong>3. Lịch sử lặp lại:</strong><br>
                Con người phản ứng giống nhau → patterns lặp lại
            </div>

            <h4>💡 Các công cụ cơ bản:</h4>
            <ul>
                <li>📊 <strong>Chart Patterns:</strong> Head & Shoulders, Triangles</li>
                <li>📈 <strong>Trend Lines:</strong> Vẽ đường xu hướng</li>
                <li>📉 <strong>Support & Resistance:</strong> Vùng hỗ trợ/kháng cự</li>
                <li>📊 <strong>Indicators:</strong> MA, RSI, MACD</li>
                <li>📦 <strong>Volume:</strong> Khối lượng giao dịch</li>
            </ul>

            <div class="warning-box">
                <strong>⚠️ Lưu ý:</strong> Technical Analysis không phải ma thuật! Win rate 60-70% đã là tốt.
            </div>
        `,
        detail: `
            <h4>🎯 Các loại phân tích:</h4>

            <table style="width:100%; border-collapse: collapse;">
                <tr style="background:#2c3e50; color:white;">
                    <th style="padding:10px;">Loại</th>
                    <th style="padding:10px;">Mục đích</th>
                    <th style="padding:10px;">Tools</th>
                    <th style="padding:10px;">Timeframe</th>
                </tr>
                <tr>
                    <td style="padding:10px;"><strong>Trend Analysis</strong></td>
                    <td style="padding:10px;">Xác định xu hướng</td>
                    <td style="padding:10px;">Trendlines, MA</td>
                    <td style="padding:10px;">4H, Daily</td>
                </tr>
                <tr>
                    <td style="padding:10px;"><strong>Momentum Analysis</strong></td>
                    <td style="padding:10px;">Đo độ mạnh</td>
                    <td style="padding:10px;">RSI, MACD, Stochastic</td>
                    <td style="padding:10px;">1H, 4H</td>
                </tr>
                <tr>
                    <td style="padding:10px;"><strong>Volume Analysis</strong></td>
                    <td style="padding:10px;">Xác nhận</td>
                    <td style="padding:10px;">Volume bars, OBV</td>
                    <td style="padding:10px;">All</td>
                </tr>
                <tr>
                    <td style="padding:10px;"><strong>Volatility Analysis</strong></td>
                    <td style="padding:10px;">Đo biến động</td>
                    <td style="padding:10px;">Bollinger Bands, ATR</td>
                    <td style="padding:10px;">All</td>
                </tr>
            </table>

            <h4>💡 Quy trình phân tích từng bước:</h4>

            <div class="example-box">
                <strong>Bước 1: Xác định xu hướng (Trend)</strong><br>
                • Uptrend: Higher highs + Higher lows<br>
                • Downtrend: Lower highs + Lower lows<br>
                • Sideways: Đi ngang trong range<br>
                <br>
                <strong>Tool:</strong> Vẽ trendline, dùng MA 50/200
            </div>

            <div class="example-box">
                <strong>Bước 2: Tìm Support & Resistance</strong><br>
                • Support: Vùng giá "nảy" lên (buyers step in)<br>
                • Resistance: Vùng giá "bật" xuống (sellers step in)<br>
                <br>
                <strong>Tip:</strong> Vùng được test nhiều lần → mạnh hơn
            </div>

            <div class="example-box">
                <strong>Bước 3: Tìm pattern</strong><br>
                • Continuation patterns: Flags, Pennants<br>
                • Reversal patterns: Head & Shoulders, Double Top/Bottom<br>
            </div>

            <div class="example-box">
                <strong>Bước 4: Dùng indicators xác nhận</strong><br>
                • RSI: Oversold (<30) / Overbought (>70)<br>
                • MACD: Crossover<br>
                • Volume: Tăng khi breakout
            </div>

            <div class="example-box">
                <strong>Bước 5: Entry & Risk Management</strong><br>
                • Entry: Breakout hoặc pullback<br>
                • Stop loss: Dưới support (long) / Trên resistance (short)<br>
                • Take profit: Tại resistance kế tiếp (long) / Support kế tiếp (short)
            </div>
        `,
        advanced: `
            <h4>🔧 Multi-Timeframe Analysis (MTA):</h4>

            <p><strong>Top-down approach:</strong></p>
            <ol>
                <li><strong>Monthly/Weekly:</strong> Big picture trend</li>
                <li><strong>Daily:</strong> Swing structure</li>
                <li><strong>4H/1H:</strong> Entry setup</li>
                <li><strong>15m/5m:</strong> Precise entry timing</li>
            </ol>

            <div class="example-box">
                <strong>Ví dụ thực tế:</strong><br>
                <strong>Weekly:</strong> BTC uptrend, MA 50 slope up<br>
                <strong>Daily:</strong> Pullback to support @ $30,000<br>
                <strong>4H:</strong> Bullish divergence on RSI<br>
                <strong>1H:</strong> Hammer candle at support<br>
                → <strong>Entry:</strong> Long @ $30,100, SL @ $29,700, TP @ $32,000<br>
                → <strong>R:R = 1:4.75 → Excellent! 🎯</strong>
            </div>

            <h4>📊 Confluence Trading:</h4>
            <p><strong>Confluence = Nhiều yếu tố cùng xác nhận</strong></p>

            <div class="example-box">
                <strong>High Confluence Setup:</strong><br>
                ✅ Price at key support<br>
                ✅ Fibonacci 61.8% retracement<br>
                ✅ MA 200 support<br>
                ✅ RSI oversold<br>
                ✅ Bullish candlestick pattern<br>
                ✅ Volume spike<br>
                <br>
                → <strong>Win probability: 70-80%</strong>
            </div>

            <h4>🎯 Market Structure:</h4>

            <h5>1. Higher Timeframe Structure (HTF)</h5>
            <p>Xác định trend chính trên Daily/Weekly</p>
            <ul>
                <li>Uptrend: HH + HL (Higher High + Higher Low)</li>
                <li>Downtrend: LH + LL (Lower High + Lower Low)</li>
                <li>Break of structure → Potential trend change</li>
            </ul>

            <h5>2. Order Blocks</h5>
            <p>Vùng giá mà institutional traders đặt lệnh lớn</p>
            <ul>
                <li>Bullish OB: Last down candle before strong up move</li>
                <li>Bearish OB: Last up candle before strong down move</li>
            </ul>

            <h5>3. Fair Value Gaps (FVG)</h5>
            <p>Khoảng trống giữa các nến → thường được "fill" lại</p>

            <h4>💡 Wyckoff Method:</h4>
            <p><strong>4 phases of market:</strong></p>
            <ol>
                <li><strong>Accumulation:</strong> Smart money mua lén (sideways)</li>
                <li><strong>Markup:</strong> Giá tăng (retail FOMO in)</li>
                <li><strong>Distribution:</strong> Smart money bán lén (sideways cao hơn)</li>
                <li><strong>Markdown:</strong> Giá giảm (retail panic sell)</li>
            </ol>

            <h4>📊 Elliott Wave Theory:</h4>
            <p><strong>Market di chuyển theo waves:</strong></p>
            <ul>
                <li>Impulse waves: 1-2-3-4-5 (theo trend)</li>
                <li>Corrective waves: A-B-C (ngược trend)</li>
            </ul>

            <div class="warning-box">
                <strong>⚠️ Limitations of TA:</strong><br>
                • Không dự đoán được "black swan events"<br>
                • Subjective (mỗi người vẽ khác nhau)<br>
                • Lag (indicators chậm hơn giá)<br>
                • Self-fulfilling prophecy (nhiều người tin → nó xảy ra)<br>
                <br>
                <strong>Solution:</strong> Combine với risk management và trading psychology
            </div>

            <h4>🎓 TA Trading System Example:</h4>
            <pre style="background:#1a1a1a; padding:15px; border-radius:5px;">
1. HTF Analysis (Daily):
   - Trend: Uptrend
   - Key levels: S @ 30k, R @ 35k
   
2. MTF Setup (4H):
   - Wait for pullback to support
   - RSI < 40
   - MACD histogram declining
   
3. Entry (1H):
   - Bullish candlestick pattern at support
   - RSI divergence
   - Volume increase
   
4. Execution:
   Entry: $30,100
   SL: $29,700 (-1.33%)
   TP1: $31,500 (+4.65%) [R:R = 1:3.5]
   TP2: $33,000 (+9.63%) [R:R = 1:7.2]
   
5. Management:
   - Move SL to breakeven at TP1
   - Trail stop with 4H swing lows
            </pre>
        `,
        keyPoints: ['Trend Analysis', 'Support/Resistance', 'Confluence', 'Market Structure', 'Wyckoff', 'Elliott Wave']
    },

    'support-resistance': {
        icon: '📉',
        title: 'Hỗ Trợ & Kháng Cự',
        order: 8,
        category: 'analysis',
        connections: ['technical-analysis', 'chart-patterns'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> Support (hỗ trợ) và Resistance (kháng cự) là các vùng giá quan trọng mà giá thường "nảy" lên hoặc "bật" xuống.</p>
            
            <div class="example-box">
                <strong>Support (Hỗ trợ):</strong><br>
                • Vùng giá mà buyers mạnh, đẩy giá lên<br>
                • Giá xuống đến đây thường "nảy" lên<br>
                • <strong>Hình dung:</strong> Như cái sàn nhà, giá rơi xuống thì nảy lại<br>
                <br>
                <strong>Ví dụ:</strong> BTC luôn nảy ở $30,000 → $30,000 là support
            </div>

            <div class="example-box">
                <strong>Resistance (Kháng cự):</strong><br>
                • Vùng giá mà sellers mạnh, đẩy giá xuống<br>
                • Giá lên đến đây thường "bật" xuống<br>
                • <strong>Hình dung:</strong> Như cái trần nhà, giá lên đập vào thì rơi xuống<br>
                <br>
                <strong>Ví dụ:</strong> BTC luôn bị đẩy xuống ở $35,000 → $35,000 là resistance
            </div>

            <h4>💡 Nguyên tắc quan trọng:</h4>
            <ul>
                <li>Support bị phá vỡ → trở thành Resistance</li>
                <li>Resistance bị phá vỡ → trở thành Support</li>
                <li>Vùng được test nhiều lần → càng mạnh</li>
            </ul>
        `,
        detail: `
            <h4>🎯 Cách xác định S/R:</h4>

            <h5>1. Horizontal S/R (Ngang):</h5>
            <div class="example-box">
                <strong>Cách vẽ:</strong><br>
                1. Nhìn các đỉnh (highs) và đáy (lows) trước đó<br>
                2. Nối các điểm giá bằng đường ngang<br>
                3. Vùng được chạm nhiều lần = S/R mạnh<br>
                <br>
                <strong>Tip:</strong> Dùng timeframe lớn (Daily, Weekly) cho S/R mạnh nhất
            </div>

            <h5>2. Trendline S/R (Động):</h5>
            <p>Vẽ đường chéo nối các đỉnh (resistance) hoặc đáy (support)</p>
            <ul>
                <li><strong>Uptrend line:</strong> Nối các HL (higher lows)</li>
                <li><strong>Downtrend line:</strong> Nối các LH (lower highs)</li>
            </ul>

            <h5>3. Moving Average S/R:</h5>
            <p>MA 50, 100, 200 thường làm S/R động</p>
            <div class="example-box">
                <strong>Ví dụ:</strong><br>
                • MA 200 trên Daily rất mạnh<br>
                • Giá thường nảy ở MA 200 trong uptrend<br>
                • Break MA 200 → Tín hiệu mạnh
            </div>

            <h5>4. Psychological S/R:</h5>
            <p>Số tròn: 10,000 / 20,000 / 30,000...</p>
            <p><strong>Lý do:</strong> Con người thích số tròn, đặt lệnh ở số tròn</p>

            <h4>💡 S/R Trading Strategy:</h4>

            <div class="example-box">
                <strong>Strategy 1: Bounce off Support</strong><br>
                1. Price approaches support<br>
                2. Wait for bullish candle pattern (hammer, engulfing)<br>
                3. Enter long<br>
                4. SL below support<br>
                5. TP at next resistance<br>
                <br>
                <strong>Ví dụ:</strong><br>
                BTC @ $30,000 support → Hammer candle<br>
                Entry: $30,100 | SL: $29,700 | TP: $32,000<br>
                Risk: $400 | Reward: $1,900 | R:R = 1:4.75 ✅
            </div>

            <div class="example-box">
                <strong>Strategy 2: Breakout Trading</strong><br>
                1. Price consolidates below resistance<br>
                2. Price breaks above resistance with volume<br>
                3. Enter long on retest (resistance becomes support)<br>
                4. SL below new support<br>
                5. TP at measured move<br>
            </div>

            <div class="example-box">
                <strong>Strategy 3: Range Trading</strong><br>
                Trade giữa support và resistance khi sideways<br>
                • Buy at support, Sell at resistance<br>
                • Stop loss nếu break range
            </div>
        `,
        advanced: `
            <h4>🔧 Advanced S/R Concepts:</h4>

            <h5>1. S/R Zones (Vùng, không phải đường)</h5>
            <p><strong>Concept:</strong> S/R không phải đường chính xác, mà là vùng</p>
            <div class="example-box">
                Thay vì: Support @ $30,000<br>
                Nên: Support zone @ $29,800 - $30,200<br>
                <br>
                <strong>Lý do:</strong> Cho phép flexible entry, tránh bị "shake out"
            </div>

            <h5>2. Role Reversal (Đảo vai)</h5>
            <p><strong>Rule:</strong> Support bị phá → trở thành Resistance (và ngược lại)</p>
            <div class="example-box">
                <strong>Scenario:</strong><br>
                1. BTC có support @ $30,000<br>
                2. Break xuống dưới $30,000<br>
                3. Rally lên test lại $30,000<br>
                4. $30,000 bây giờ là resistance → Short entry!<br>
                <br>
                <strong>This is BEST trade! 🎯</strong>
            </div>

            <h5>3. Multi-Touch Theory</h5>
            <p>Mỗi lần S/R được test → Yếu đi</p>
            <ul>
                <li>Touch 1-2: Mạnh</li>
                <li>Touch 3-4: Trung bình</li>
                <li>Touch 5+: Yếu, dễ break</li>
            </ul>

            <h5>4. Fibonacci S/R</h5>
            <p>Dùng Fibonacci retracement để tìm S/R động:</p>
            <ul>
                <li>38.2% retracement: Weak support/resistance</li>
                <li>50% retracement: Medium</li>
                <li>61.8% retracement: Strong (Golden ratio)</li>
                <li>78.6% retracement: Very strong</li>
            </ul>

            <h5>5. Volume Profile</h5>
            <p>Vùng giá có volume cao → S/R mạnh</p>
            <ul>
                <li><strong>POC (Point of Control):</strong> Giá có volume cao nhất → S/R mạnh nhất</li>
                <li><strong>Value Area:</strong> Vùng 70% volume</li>
                <li><strong>Low Volume Nodes:</strong> Ít volume → giá di chuyển nhanh qua</li>
            </ul>

            <h4>📊 Breakout vs Fakeout:</h4>

            <h5>Cách phân biệt:</h5>
            <table style="width:100%; border-collapse: collapse;">
                <tr style="background:#2c3e50; color:white;">
                    <th style="padding:10px;">Yếu tố</th>
                    <th style="padding:10px;">True Breakout</th>
                    <th style="padding:10px;">Fakeout</th>
                </tr>
                <tr>
                    <td style="padding:10px;"><strong>Volume</strong></td>
                    <td style="padding:10px;">Tăng mạnh</td>
                    <td style="padding:10px;">Thấp</td>
                </tr>
                <tr>
                    <td style="padding:10px;"><strong>Candle close</strong></td>
                    <td style="padding:10px;">Close ngoài S/R</td>
                    <td style="padding:10px;">Wick ra ngoài, close trong</td>
                </tr>
                <tr>
                    <td style="padding:10px;"><strong>Retest</strong></td>
                    <td style="padding:10px;">Hold tại S/R cũ</td>
                    <td style="padding:10px;">Fail retest</td>
                </tr>
                <tr>
                    <td style="padding:10px;"><strong>Context</strong></td>
                    <td style="padding:10px;">Theo trend lớn</td>
                    <td style="padding:10px;">Ngược trend</td>
                </tr>
            </table>

            <h4>💡 Professional S/R Strategy:</h4>

            <pre style="background:#1a1a1a; padding:15px; border-radius:5px;">
<strong>Setup: Support Bounce trong Uptrend</strong>

1. HTF (Daily): Identify uptrend + key support zones

2. Wait for pullback:
   - Price approaches support zone
   - RSI oversold (< 40)
   - Volume declining

3. Entry trigger:
   - Bullish candle pattern in support zone
   - RSI divergence (price lower, RSI higher)
   - Volume spike on reversal candle

4. Entry:
   - Enter on break of trigger candle high
   - Or: Scale in through support zone

5. Stop Loss:
   - Below support zone (tối thiểu 1%)
   - Below structure low

6. Take Profit:
   - TP1: 1.5 - 2R (Partial exit 50%)
   - TP2: Next resistance (Trail stop)
   - TP3: Major resistance (Full exit)

7. Management:
   - Move SL to BE at TP1
   - Trail SL with swing lows
            </pre>

            <div class="warning-box">
                <strong>⚠️ Common Mistakes:</strong><br>
                • Vẽ quá nhiều S/R → Chart rối<br>
                • Dùng S/R ở timeframe nhỏ → Noise<br>
                • Không xác định S/R zone → Bị fake out<br>
                • Trade mọi touch → Overtrading<br>
                <br>
                <strong>Best Practice:</strong><br>
                • Focus vào 3-5 key S/R levels<br>
                • Dùng Daily/Weekly cho S/R chính<br>
                • Chỉ trade high confluence setups
            </div>
        `,
        keyPoints: ['Support', 'Resistance', 'Role Reversal', 'Fibonacci', 'Volume Profile', 'Breakout', 'Fakeout']
    }
};

// Export để sử dụng trong app.js
if (typeof window !== 'undefined') {
    window.technicalAnalysisData = technicalAnalysisData;
}
