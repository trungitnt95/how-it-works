// ==================== TRADING STRATEGIES MODULE ====================

const strategiesData = {
    'day-trading': {
        icon: '⚡',
        title: 'Day Trading',
        order: 10,
        category: 'strategy',
        connections: ['scalping', 'swing-trading', 'timeframes'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> Day Trading là mua bán trong cùng một ngày, đóng tất cả vị thế trước khi thị trường đóng cửa.</p>
            
            <div class="example-box">
                <strong>Đặc điểm:</strong><br>
                • Thời gian: Vài phút → vài giờ<br>
                • Không giữ qua đêm<br>
                • Khung thời gian: 5m, 15m, 1H<br>
                • Số lệnh: 1-5 lệnh/ngày<br>
                <br>
                <strong>Mục tiêu:</strong> Kiếm lời nhỏ nhưng ổn định mỗi ngày
            </div>

            <h4>💡 Ưu và nhược điểm:</h4>
            
            <div class="example-box">
                <strong>✅ Ưu điểm:</strong><br>
                • Không có overnight risk (rủi ro qua đêm)<br>
                • Lợi nhuận nhanh<br>
                • Nhiều cơ hội mỗi ngày<br>
                • Có thể sống từ trading
            </div>

            <div class="example-box">
                <strong>⚠️ Nhược điểm:</strong><br>
                • Cần theo dõi màn hình cả ngày<br>
                • Stress cao<br>
                • Phí giao dịch nhiều<br>
                • Cần kinh nghiệm và kỷ luật cao
            </div>

            <h4>📌 Chiến lược Day Trading cơ bản:</h4>

            <div class="example-box">
                <strong>1. Breakout Strategy (Đột phá):</strong><br>
                • Tìm vùng consolidation (tích lũy)<br>
                • Chờ giá breakout<br>
                • Vào lệnh khi break với volume<br>
                <br>
                <strong>Best time:</strong> Đầu phiên giao dịch (9:30-11:00 EST)
            </div>

            <div class="example-box">
                <strong>2. Scalping Support/Resistance:</strong><br>
                • Xác định S/R trong ngày<br>
                • Buy ở support, Sell ở resistance<br>
                • Target nhỏ (0.5-1%)<br>
                <br>
                <strong>Best time:</strong> Khi thị trường sideways
            </div>
        `,
        detail: `
            <h4>🎯 Day Trading Setup Chi Tiết:</h4>

            <h5>1. Pre-Market Routine (Trước khi trade):</h5>
            <ol>
                <li><strong>Check news:</strong> Economic calendar, earnings</li>
                <li><strong>Scan markets:</strong> Tìm stocks/coins có volume cao</li>
                <li><strong>Identify levels:</strong> Mark S/R, pivot points</li>
                <li><strong>Plan trades:</strong> 2-3 setups sẵn sàng</li>
            </ol>

            <h5>2. Trading Sessions (Phiên giao dịch):</h5>

            <div class="example-box">
                <strong>US Stock Market:</strong><br>
                • <strong>9:30-10:30:</strong> Opening range - Volatility cao, volume cao<br>
                • <strong>10:30-15:00:</strong> Mid-day - Chậm hơn, ít cơ hội<br>
                • <strong>15:00-16:00:</strong> Power hour - Volume tăng lại<br>
                <br>
                <strong>Best times:</strong> 9:30-11:00 và 15:00-16:00
            </div>

            <div class="example-box">
                <strong>Forex Market:</strong><br>
                • <strong>Asian Session:</strong> 00:00-09:00 GMT - JPY pairs<br>
                • <strong>London Session:</strong> 08:00-17:00 GMT - EUR, GBP<br>
                • <strong>NY Session:</strong> 13:00-22:00 GMT - USD pairs<br>
                <br>
                <strong>Best time:</strong> London-NY overlap (13:00-17:00 GMT)
            </div>

            <h5>3. Day Trading Strategies:</h5>

            <div class="example-box">
                <strong>Strategy 1: Opening Range Breakout</strong><br>
                1. First 15-30 min → Mark high and low<br>
                2. Wait for break above high OR below low<br>
                3. Enter on break with volume<br>
                4. Target: 2x opening range<br>
                <br>
                <strong>Win rate:</strong> 60-65% với R:R tốt
            </div>

            <div class="example-box">
                <strong>Strategy 2: VWAP Bounce</strong><br>
                1. VWAP (Volume Weighted Avg Price) là S/R động<br>
                2. In uptrend: Buy when price touches VWAP<br>
                3. In downtrend: Sell when price bounces to VWAP<br>
                4. Stop loss: Dưới/trên VWAP<br>
                <br>
                <strong>Used by:</strong> Institutional traders
            </div>

            <div class="example-box">
                <strong>Strategy 3: Reversal at Key Levels</strong><br>
                1. Mark previous day high/low, pivot points<br>
                2. Wait for price to reach these levels<br>
                3. Look for reversal candlestick patterns<br>
                4. Enter with tight stop<br>
                <br>
                <strong>Best for:</strong> Range-bound days
            </div>

            <h5>4. Risk Management cho Day Trading:</h5>
            <ul>
                <li><strong>Max risk per trade:</strong> 1% tài khoản</li>
                <li><strong>Max daily loss:</strong> 3% tài khoản → Stop trading</li>
                <li><strong>Position size:</strong> Adjust theo volatility</li>
                <li><strong>No revenge trading:</strong> 2 losses liên tiếp → Take a break</li>
            </ul>
        `,
        advanced: `
            <h4>🔧 Advanced Day Trading Techniques:</h4>

            <h5>1. Tape Reading (Order Flow)</h5>
            <p>Đọc order book và time & sales để thấy buying/selling pressure</p>
            <ul>
                <li>Large buy orders at bid → Support forming</li>
                <li>Large sell orders at ask → Resistance forming</li>
                <li>Absorption: Large orders được "ăn" → Momentum shift</li>
            </ul>

            <h5>2. Level 2 Data</h5>
            <p>Xem order book sâu hơn để thấy where big money is</p>

            <h5>3. Scalping with Market Maker Move (MMM)</h5>
            <div class="example-box">
                <strong>Concept:</strong> Follow smart money<br>
                1. Identify accumulation/distribution zones<br>
                2. Wait for manipulation (fake breakout)<br>
                3. Enter when real move starts<br>
                <br>
                <strong>Advanced but powerful!</strong>
            </div>

            <h5>4. Multi-Timeframe Day Trading</h5>
            <pre style="background:#1a1a1a; padding:15px; border-radius:5px;">
<strong>System:</strong>
1. Daily: Identify trend and key levels
2. 1H: Find setup zone (pullback to support)
3. 15m: Entry trigger (bullish pattern)
4. 5m: Precise entry and stop placement

<strong>Example:</strong>
Daily: AAPL uptrend, pullback to $150 support
1H: Forming higher low at $150
15m: Bullish engulfing at $150.20
5m: Entry at $150.30, SL at $149.90
Target: $151.50 (1:3 R:R)
            </pre>

            <h5>5. News Trading</h5>
            <p><strong>High-Impact Events:</strong></p>
            <ul>
                <li>Fed announcements</li>
                <li>Non-Farm Payrolls (NFP)</li>
                <li>Earnings reports</li>
                <li>FDA approvals (biotech)</li>
            </ul>

            <p><strong>Strategy:</strong></p>
            <ol>
                <li>Stay flat before news (no position)</li>
                <li>Wait for initial spike and pullback</li>
                <li>Enter in direction of spike if trend confirms</li>
                <li>Or: Trade the range after initial volatility</li>
            </ol>

            <div class="warning-box">
                <strong>⚠️ News Trading Risks:</strong><br>
                • Extreme volatility<br>
                • Wide spreads<br>
                • Slippage<br>
                • Gap risk<br>
                <br>
                <strong>Only for experienced traders!</strong>
            </div>

            <h4>📊 Professional Day Trader Routine:</h4>

            <pre style="background:#1a1a1a; padding:15px; border-radius:5px;">
<strong>6:00 AM:</strong> Wake up, review overnight news
<strong>7:00 AM:</strong> Pre-market analysis, scan for setups
<strong>8:30 AM:</strong> Economic calendar check
<strong>9:15 AM:</strong> Final preparation, mark levels
<strong>9:30 AM:</strong> Market open - FOCUS
<strong>9:30-11:00 AM:</strong> Primary trading window
<strong>11:00 AM:</strong> Review morning trades, adjust
<strong>11:00-3:00 PM:</strong> Monitor positions, less active
<strong>3:00-4:00 PM:</strong> Power hour, last opportunities
<strong>4:00 PM:</strong> Market close, ALL positions closed
<strong>4:30 PM:</strong> Journal: Review all trades
<strong>5:00 PM:</strong> Relax, done for the day!
            </pre>

            <h4>💡 Day Trading Pro Tips:</h4>
            <ol>
                <li><strong>Overtrading is #1 killer:</strong> Quality > Quantity</li>
                <li><strong>2-3 good trades/day is enough:</strong> Don't force trades</li>
                <li><strong>Stick to liquid markets:</strong> High volume = tight spreads</li>
                <li><strong>Use hotkeys:</strong> Speed matters for day trading</li>
                <li><strong>Stay disciplined:</strong> Follow your rules NO MATTER WHAT</li>
                <li><strong>Take breaks:</strong> Mental fatigue = mistakes</li>
                <li><strong>Track everything:</strong> Journal every trade</li>
            </ol>

            <div class="example-box">
                <strong>💰 Realistic Day Trading Expectations:</strong><br>
                <strong>Beginner (6 months):</strong> Break even or small profit<br>
                <strong>Intermediate (1-2 years):</strong> 5-10% monthly<br>
                <strong>Advanced (3+ years):</strong> 10-20% monthly<br>
                <strong>Professional:</strong> 20%+ monthly (but rare)<br>
                <br>
                <strong>Remember:</strong> 90% of day traders lose money in first year.<br>
                Success requires YEARS of practice and discipline.
            </div>
        `,
        keyPoints: ['Opening Range', 'VWAP', 'Session Trading', 'Tape Reading', 'Risk Management', 'Trading Routine']
    },

    'swing-trading': {
        icon: '🌊',
        title: 'Swing Trading',
        order: 11,
        category: 'strategy',
        connections: ['day-trading', 'position-sizing', 'chart-patterns'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> Swing Trading là nắm giữ vị thế từ vài ngày đến vài tuần để bắt "swing" (dao động) giá.</p>
            
            <div class="example-box">
                <strong>Đặc điểm:</strong><br>
                • Thời gian: 2 ngày → 2-3 tuần<br>
                • Khung thời gian: 4H, Daily<br>
                • Số lệnh: 2-5 lệnh/tuần<br>
                • Kiểm tra: 1-2 lần/ngày (không cần cả ngày)<br>
                <br>
                <strong>Mục tiêu:</strong> Bắt trend ngắn hạn, 5-20% profit/trade
            </div>

            <h4>💡 Ưu và nhược điểm:</h4>
            
            <div class="example-box">
                <strong>✅ Ưu điểm:</strong><br>
                • Không cần theo dõi màn hình cả ngày<br>
                • Ít stress hơn day trading<br>
                • Phù hợp với người có công việc full-time<br>
                • Ít phí giao dịch hơn<br>
                • R:R tốt hơn (1:3, 1:5)
            </div>

            <div class="example-box">
                <strong>⚠️ Nhược điểm:</strong><br>
                • Có overnight risk<br>
                • Cần vốn lớn hơn (vì stop loss rộng hơn)<br>
                • Ít cơ hội hơn day trading<br>
                • Cần kiên nhẫn
            </div>

            <h4>📌 Chiến lược Swing Trading cơ bản:</h4>

            <div class="example-box">
                <strong>1. Trend Following:</strong><br>
                • Identify uptrend trên Daily<br>
                • Chờ pullback về MA 50 hoặc support<br>
                • Enter khi price bounces<br>
                • Hold cho đến resistance kế tiếp<br>
                <br>
                <strong>Ví dụ:</strong> BTC uptrend, pullback từ $35k về $32k (support) → Buy → Target $38k
            </div>

            <div class="example-box">
                <strong>2. Breakout Trading:</strong><br>
                • Tìm consolidation pattern (triangle, rectangle)<br>
                • Chờ breakout với volume<br>
                • Enter sau khi break<br>
                • Hold cho đến target (measured move)<br>
            </div>
        `,
        detail: `
            <h4>🎯 Swing Trading Setup Chi Tiết:</h4>

            <h5>1. Swing Trading Strategies:</h5>

            <div class="example-box">
                <strong>Strategy 1: Pullback trong Uptrend</strong><br>
                <pre style="background:#1a1a1a; padding:10px; border-radius:5px;">
Setup:
1. Daily chart: Clear uptrend (higher highs + higher lows)
2. Price pulls back to:
   - MA 50 or MA 200, or
   - Previous resistance (now support), or
   - Fibonacci 50-61.8% retracement
3. 4H chart: Shows reversal signs
   - Bullish candlestick pattern
   - RSI oversold (< 40)
   - MACD bullish divergence
4. Entry: Break of pullback high
5. Stop Loss: Below support/MA
6. Take Profit: Previous high, then new high

Win Rate: 65-70%
R:R: 1:3 to 1:5
                </pre>
            </div>

            <div class="example-box">
                <strong>Strategy 2: Chart Pattern Breakout</strong><br>
                <pre style="background:#1a1a1a; padding:10px; border-radius:5px;">
Setup:
1. Identify pattern on Daily (Triangle, Flag, Cup & Handle)
2. Wait for consolidation to complete
3. Watch for breakout with volume (2x average)
4. Entry options:
   Option A: Aggressive - On break
   Option B: Conservative - On retest
5. Stop Loss: Inside pattern
6. Take Profit: Measured move

Best Patterns: Ascending Triangle, Bull Flag
Win Rate: 60-65%
                </pre>
            </div>

            <div class="example-box">
                <strong>Strategy 3: Support/Resistance Bounce</strong><br>
                1. Mark major S/R levels on Weekly/Daily<br>
                2. Wait for price to reach these levels<br>
                3. Look for rejection (long wick, engulfing)<br>
                4. Enter on bounce<br>
                5. Target: Opposite S/R level<br>
                <br>
                <strong>Best for:</strong> Range-bound markets
            </div>

            <h5>2. Swing Trading Timeframe Analysis:</h5>

            <table style="width:100%; border-collapse: collapse;">
                <tr style="background:#2c3e50; color:white;">
                    <th style="padding:10px;">Timeframe</th>
                    <th style="padding:10px;">Purpose</th>
                    <th style="padding:10px;">What to Look For</th>
                </tr>
                <tr>
                    <td style="padding:10px;"><strong>Weekly</strong></td>
                    <td style="padding:10px;">Big picture</td>
                    <td style="padding:10px;">Main trend, major S/R</td>
                </tr>
                <tr>
                    <td style="padding:10px;"><strong>Daily</strong></td>
                    <td style="padding:10px;">Trade setup</td>
                    <td style="padding:10px;">Entry zone, patterns</td>
                </tr>
                <tr>
                    <td style="padding:10px;"><strong>4H</strong></td>
                    <td style="padding:10px;">Timing</td>
                    <td style="padding:10px;">Precise entry, candlestick patterns</td>
                </tr>
                <tr>
                    <td style="padding:10px;"><strong>1H</strong></td>
                    <td style="padding:10px;">Fine-tuning</td>
                    <td style="padding:10px;">Stop loss placement</td>
                </tr>
            </table>

            <h5>3. Position Management:</h5>

            <div class="example-box">
                <strong>Scale In:</strong><br>
                • Entry 1: 50% position at first signal<br>
                • Entry 2: 25% if pullback to better price<br>
                • Entry 3: 25% on confirmation<br>
                <br>
                <strong>Benefits:</strong> Better average price, lower risk
            </div>

            <div class="example-box">
                <strong>Scale Out:</strong><br>
                • Exit 1: 50% at TP1 (1st resistance)<br>
                • Exit 2: 30% at TP2 (2nd resistance)<br>
                • Exit 3: 20% trail to maximize<br>
                <br>
                <strong>Benefits:</strong> Lock profit, let winners run
            </div>
        `,
        advanced: `
            <h4>🔧 Advanced Swing Trading:</h4>

            <h5>1. Multi-Asset Swing Portfolio</h5>
            <p><strong>Diversification Strategy:</strong></p>
            <ul>
                <li>Trade 5-10 different assets simultaneously</li>
                <li>Different sectors (tech, finance, commodities)</li>
                <li>Different correlations (BTC + Gold + EURUSD)</li>
                <li>Max 2% risk per trade, total portfolio risk < 10%</li>
            </ul>

            <h5>2. Seasonal & Cyclical Patterns</h5>
            <div class="example-box">
                <strong>Stock Market:</strong><br>
                • "Sell in May and go away" - Summer typically weaker<br>
                • January Effect - Small caps rally<br>
                • Santa Claus Rally - Late December bullish<br>
                <br>
                <strong>Crypto:</strong><br>
                • Q4 typically strongest (Sep-Dec)<br>
                • Post-halving years bullish (2021, 2025)
            </div>

            <h5>3. Correlation Trading</h5>
            <p>Trade assets that move together or opposite:</p>
            <ul>
                <li><strong>Pairs Trade:</strong> Long strong asset, Short weak asset in same sector</li>
                <li><strong>Example:</strong> Long AAPL (strong), Short MSFT (weak) in tech correction</li>
            </ul>

            <h5>4. Earnings Swing Trade (Stocks)</h5>
            <pre style="background:#1a1a1a; padding:15px; border-radius:5px;">
<strong>Pre-Earnings Setup:</strong>
1. Stock in uptrend
2. Earnings in 1-2 weeks
3. Previous earnings = positive reactions
4. Enter 1-2 weeks before earnings
5. Exit day before earnings (avoid risk)
   OR hold through if confident

<strong>Post-Earnings Setup:</strong>
1. Earnings beat expectations
2. Stock gaps up
3. Wait for consolidation
4. Enter on breakout
5. Ride the momentum
            </pre>

            <h5>5. Volatility-Based Position Sizing</h5>
            <div class="example-box">
                <strong>Formula:</strong><br>
                Position Size = (Account × Risk%) / (ATR × Multiplier)<br>
                <br>
                <strong>Example:</strong><br>
                $10,000 account, 1% risk = $100<br>
                BTC ATR(14) = $500<br>
                Stop loss = 2× ATR = $1,000<br>
                Position = $100 / $1,000 = 0.1 BTC<br>
                <br>
                <strong>Benefit:</strong> Risk stays constant regardless of volatility
            </div>

            <h4>📊 Professional Swing Trading System:</h4>

            <pre style="background:#1a1a1a; padding:15px; border-radius:5px;">
<strong>Weekly Routine:</strong>

<strong>Sunday:</strong>
- Review all open positions
- Check upcoming economic calendar
- Scan for new setups (50+ charts)
- Create watchlist (10-15 best setups)
- Plan trades for the week

<strong>Monday-Friday:</strong>
Morning (30 min):
- Check overnight news
- Review open positions
- Check watchlist for triggers

Evening (30 min):
- Update positions (SL, TP)
- Check for new setups
- Journal any trades taken

<strong>Key: Only 1 hour/day needed!</strong>
            </pre>

            <h4>💡 Swing Trading Pro Tips:</h4>

            <ol>
                <li><strong>Patience is KEY:</strong> Wait for perfect setup, don't force</li>
                <li><strong>Trade in direction of major trend:</strong> Don't fight Weekly/Monthly trend</li>
                <li><strong>Let winners run:</strong> Trail stops, don't exit too early</li>
                <li><strong>Cut losses quickly:</strong> If thesis is broken, exit</li>
                <li><strong>Weekend risk:</strong> Be careful holding through weekend (gaps)</li>
                <li><strong>Reduce before events:</strong> FOMC, NFP, Major earnings</li>
                <li><strong>Position size conservatively:</strong> Overnight risk = need buffer</li>
            </ol>

            <div class="example-box">
                <strong>💰 Realistic Swing Trading Expectations:</strong><br>
                <strong>Monthly returns:</strong> 5-15% (sustainable)<br>
                <strong>Win rate:</strong> 50-60% (with 1:2+ R:R)<br>
                <strong>Trades per month:</strong> 5-15 trades<br>
                <strong>Time required:</strong> 5-10 hours/week<br>
                <br>
                <strong>Best for:</strong> People with full-time jobs, families<br>
                <strong>Lifestyle:</strong> Much better than day trading!
            </div>

            <div class="warning-box">
                <strong>⚠️ Common Swing Trading Mistakes:</strong><br>
                • Taking profits too early (afraid of pullbacks)<br>
                • Not cutting losses (hoping it comes back)<br>
                • Overtrading (treating it like day trading)<br>
                • Ignoring higher timeframe trend<br>
                • Checking positions too often (causes emotional decisions)<br>
                <br>
                <strong>Remember:</strong> Swing trading is about PATIENCE and DISCIPLINE
            </div>
        `,
        keyPoints: ['Pullback Trading', 'Breakout Trading', 'Multi-Timeframe', 'Position Management', 'Correlation', 'Scale In/Out']
    },

    'scalping': {
        icon: '⚡⚡',
        title: 'Scalping',
        order: 12,
        category: 'strategy',
        connections: ['day-trading', 'timeframes', 'risk-management'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> Scalping là giao dịch cực kỳ nhanh, giữ vị thế chỉ vài giây đến vài phút.</p>
            
            <div class="example-box">
                <strong>Đặc điểm:</strong><br>
                • Thời gian: Vài giây → 5 phút<br>
                • Khung thời gian: 1m, 5m<br>
                • Số lệnh: 10-100+ lệnh/ngày<br>
                • Target: 0.1-0.5% per trade<br>
                <br>
                <strong>Mục tiêu:</strong> Lợi nhuận nhỏ nhiều lần = Tích lũy lớn
            </div>

            <h4>💡 Ưu và nhược điểm:</h4>
            
            <div class="example-box">
                <strong>✅ Ưu điểm:</strong><br>
                • Rủi ro mỗi lệnh rất nhỏ<br>
                • Nhiều cơ hội mỗi ngày<br>
                • Lợi nhuận nhanh<br>
                • Không có overnight risk
            </div>

            <div class="example-box">
                <strong>⚠️ Nhược điểm:</strong><br>
                • Stress CỰC CAO<br>
                • Cần tập trung 100%<br>
                • Phí giao dịch rất nhiều<br>
                • Cần reflexes nhanh<br>
                • Chỉ phù hợp với thị trường có thanh khoản cao<br>
                • Burnout (kiệt sức) dễ dàng
            </div>

            <div class="warning-box">
                <strong>⚠️ KHÔNG dành cho beginner!</strong><br>
                Scalping cần:<br>
                • Kinh nghiệm ít nhất 1-2 năm<br>
                • Kỷ luật sắt đá<br>
                • Phản ứng cực nhanh<br>
                • Tâm lý cực tốt<br>
                <br>
                <strong>Nếu mới bắt đầu → Học Swing/Day Trading trước!</strong>
            </div>
        `,
        detail: `
            <h4>🎯 Scalping Strategies:</h4>

            <h5>1. Market Making (Spread Scalping)</h5>
            <div class="example-box">
                <strong>Concept:</strong> Mua ở bid, bán ở ask, kiếm spread<br>
                <br>
                <strong>Example:</strong><br>
                BTC Bid: $30,000 | Ask: $30,010<br>
                1. Place buy limit @ $30,000<br>
                2. Immediately place sell limit @ $30,010<br>
                3. Profit: $10/BTC (0.033%)<br>
                4. Repeat 50 times/day = $500<br>
                <br>
                <strong>Risk:</strong> Price moves away, you're stuck in position<br>
                <strong>Requirement:</strong> Very tight spreads (major pairs only)
            </div>

            <h5>2. Momentum Scalping</h5>
            <div class="example-box">
                <strong>Strategy:</strong><br>
                1. Wait for strong move (breakout, news)<br>
                2. Jump in direction of momentum<br>
                3. Exit after 5-10 seconds<br>
                4. Target: 0.2-0.5%<br>
                <br>
                <strong>Setup:</strong><br>
                • 1m chart breaks resistance<br>
                • Volume spike<br>
                • Enter immediately<br>
                • SL tight (below recent swing)<br>
                • Exit at next resistance or after 5-10 ticks
            </div>

            <h5>3. Range Scalping</h5>
            <div class="example-box">
                <strong>Strategy:</strong><br>
                1. Identify tight range on 5m chart<br>
                2. Buy at bottom, sell at top<br>
                3. Repeat until breakout<br>
                <br>
                <strong>Best time:</strong> Asian session (low volatility)<br>
                <strong>Pairs:</strong> EUR/USD, USD/JPY
            </div>

            <h5>4. Order Flow Scalping</h5>
            <p>Advanced: Read Level 2 and Time & Sales</p>
            <ul>
                <li>Large buy orders stacking → Long</li>
                <li>Large sell orders stacking → Short</li>
                <li>Requires DOM (Depth of Market) software</li>
            </ul>

            <h4>💡 Scalping Requirements:</h4>

            <h5>Technical:</h5>
            <ul>
                <li><strong>Fast execution:</strong> Direct market access (DMA)</li>
                <li><strong>Low spreads:</strong> < 1 pip for Forex, < 0.01% for Crypto</li>
                <li><strong>Low commissions:</strong> Ideally $0 or very low</li>
                <li><strong>High leverage:</strong> 1:50 to 1:100 (but risky!)</li>
                <li><strong>Hotkeys:</strong> Must have for speed</li>
                <li><strong>Multiple monitors:</strong> To watch multiple charts</li>
            </ul>

            <h5>Mental:</h5>
            <ul>
                <li><strong>Focus:</strong> 100% concentration for hours</li>
                <li><strong>Discipline:</strong> No emotional trading</li>
                <li><strong>Quick decisions:</strong> < 1 second reaction time</li>
                <li><strong>Stamina:</strong> High energy throughout session</li>
            </ul>
        `,
        advanced: `
            <h4>🔧 Professional Scalping System:</h4>

            <h5>1. Setup & Tools</h5>
            <pre style="background:#1a1a1a; padding:15px; border-radius:5px;">
<strong>Hardware:</strong>
- 3-6 monitors
- Fast computer (low latency)
- Wired internet (no WiFi)
- Backup power supply

<strong>Software:</strong>
- Level 2 platform (for stocks)
- DOM (Depth of Market) for futures
- TradingView or similar for charts
- Hotkey software

<strong>Broker:</strong>
- ECN/DMA execution (no dealing desk)
- Co-located servers (lowest latency)
- Commission < $1/trade
- Tight spreads
            </pre>

            <h5>2. Advanced Scalping Techniques:</h5>

            <div class="example-box">
                <strong>Technique 1: Tape Reading</strong><br>
                Watch Time & Sales for:<br>
                • Large trades (whales)<br>
                • Direction of aggression (buy vs sell)<br>
                • Absorption (big orders getting hit)<br>
                • Iceberg orders (hidden liquidity)<br>
                <br>
                <strong>Skill:</strong> Takes 6-12 months to master
            </div>

            <div class="example-box">
                <strong>Technique 2: Footprint Charts</strong><br>
                Shows volume at each price level:<br>
                • Delta: Buy volume - Sell volume<br>
                • Imbalances: Heavy buying/selling at level<br>
                • POC (Point of Control): Most volume<br>
                <br>
                <strong>Use:</strong> Identify support/resistance in real-time
            </div>

            <div class="example-box">
                <strong>Technique 3: Sub-Second Scalping</strong><br>
                Hold for literally 1-5 seconds:<br>
                • Watch for large market orders<br>
                • Enter immediately in same direction<br>
                • Exit after 2-3 ticks (0.1-0.2%)<br>
                <br>
                <strong>Frequency:</strong> 50-200 trades/day<br>
                <strong>Note:</strong> Requires trading bot or superhuman speed
            </div>

            <h5>3. Scalping Risk Management:</h5>

            <table style="width:100%; border-collapse: collapse;">
                <tr style="background:#2c3e50; color:white;">
                    <th style="padding:10px;">Parameter</th>
                    <th style="padding:10px;">Conservative</th>
                    <th style="padding:10px;">Aggressive</th>
                </tr>
                <tr>
                    <td style="padding:10px;">Risk per trade</td>
                    <td style="padding:10px;">0.1-0.25%</td>
                    <td style="padding:10px;">0.5-1%</td>
                </tr>
                <tr>
                    <td style="padding:10px;">Max daily loss</td>
                    <td style="padding:10px;">2%</td>
                    <td style="padding:10px;">5%</td>
                </tr>
                <tr>
                    <td style="padding:10px;">Stop loss (pips)</td>
                    <td style="padding:10px;">2-5 pips</td>
                    <td style="padding:10px;">5-10 pips</td>
                </tr>
                <tr>
                    <td style="padding:10px;">Take profit</td>
                    <td style="padding:10px;">5-10 pips</td>
                    <td style="padding:10px;">10-20 pips</td>
                </tr>
                <tr>
                    <td style="padding:10px;">Win rate needed</td>
                    <td style="padding:10px;">65%+</td>
                    <td style="padding:10px;">55%+</td>
                </tr>
            </table>

            <h5>4. Scalping Markets:</h5>

            <p><strong>Best Markets for Scalping:</strong></p>
            <ul>
                <li><strong>Forex:</strong> EUR/USD, GBP/USD (tight spreads, high liquidity)</li>
                <li><strong>Futures:</strong> ES, NQ (E-mini S&P, Nasdaq)</li>
                <li><strong>Crypto:</strong> BTC/USDT, ETH/USDT on major exchanges</li>
                <li><strong>Stocks:</strong> High volume stocks (AAPL, TSLA) during market hours</li>
            </ul>

            <p><strong>Avoid:</strong></p>
            <ul>
                <li>Low liquidity pairs/stocks</li>
                <li>Wide spread markets</li>
                <li>Small cap coins</li>
                <li>Overnight/weekend (gaps)</li>
            </ul>

            <h4>📊 Scalper's Daily Routine:</h4>

            <pre style="background:#1a1a1a; padding:15px; border-radius:5px;">
<strong>8:00 AM:</strong> Wake up, prepare mentally
<strong>8:30 AM:</strong> Check news, economic calendar
<strong>9:00 AM:</strong> Platform setup, test hotkeys
<strong>9:30 AM:</strong> Market open - START
<strong>9:30-10:30 AM:</strong> Peak scalping (highest volume)
<strong>10:30 AM:</strong> BREAK - Mandatory rest
<strong>10:45-11:30 AM:</strong> Secondary session
<strong>11:30 AM:</strong> DONE - Stop trading
<strong>12:00 PM:</strong> Review, journal all trades
<strong>1:00 PM:</strong> Workout, relax (crucial!)

<strong>Total trading time:</strong> 2-2.5 hours MAX
<strong>Trades taken:</strong> 20-50
<strong>Note:</strong> NEVER scalp full day - burnout guaranteed
            </pre>

            <h4>💡 Scalping Wisdom:</h4>

            <ol>
                <li><strong>Quality > Quantity:</strong> Even in scalping, only take A+ setups</li>
                <li><strong>Hit daily target, stop:</strong> $200 target hit? DONE. Don't give it back.</li>
                <li><strong>Max 3 losses in row = STOP:</strong> You're off today, quit</li>
                <li><strong>Commission matters A LOT:</strong> $2/trade × 50 trades = $100/day!</li>
                <li><strong>Spread is your enemy:</strong> 2 pip spread = need 2 pips profit just to break even</li>
                <li><strong>News time = NO SCALP:</strong> Too unpredictable</li>
                <li><strong>Scalp with trend:</strong> Don't fade strong moves</li>
            </ol>

            <div class="warning-box">
                <strong>⚠️ SCALPING REALITY CHECK:</strong><br>
                <br>
                <strong>Success rate:</strong> < 1% of traders<br>
                <strong>Burnout rate:</strong> 95% within 6 months<br>
                <strong>Time to profitability:</strong> 1-3 years of practice<br>
                <strong>Stress level:</strong> 10/10<br>
                <br>
                <strong>Required skills:</strong><br>
                • Trading experience: 2+ years<br>
                • Win rate: 65%+<br>
                • Mental fortitude: Extreme<br>
                • Capital: $25,000+ (PDT rule in US)<br>
                <br>
                <strong>HONEST ADVICE:</strong><br>
                If you're not 100% sure you want this lifestyle,<br>
                Do NOT scalp. Swing trading is better for 99% of people.
            </div>

            <div class="example-box">
                <strong>💰 Realistic Scalping Expectations:</strong><br>
                <strong>Daily target:</strong> 0.5-2% of account<br>
                <strong>Monthly:</strong> 10-40% (but extremely hard)<br>
                <strong>Win rate:</strong> 60-70% minimum<br>
                <strong>Trades/day:</strong> 20-100<br>
                <strong>Hours/day:</strong> 2-4 hours MAX<br>
                <br>
                <strong>The Good:</strong> Highest potential returns<br>
                <strong>The Bad:</strong> Highest stress, highest skill requirement<br>
                <strong>The Ugly:</strong> Most scalpers quit within 6 months
            </div>
        `,
        keyPoints: ['Market Making', 'Momentum Scalping', 'Order Flow', 'Tape Reading', 'Tight Spreads', 'Hotkeys', 'Mental Stamina']
    }
};

// Export để sử dụng trong app.js
if (typeof window !== 'undefined') {
    window.strategiesData = strategiesData;
}
