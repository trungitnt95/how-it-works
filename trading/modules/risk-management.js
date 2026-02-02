// ==================== RISK MANAGEMENT & PSYCHOLOGY MODULE ====================

const riskManagementData = {
    'risk-management': {
        icon: '🛡️',
        title: 'Quản Lý Rủi Ro',
        order: 13,
        category: 'risk',
        connections: ['position-sizing', 'trading-psychology', 'strategies'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> Risk Management là cách bạn bảo vệ tài khoản trading khỏi thua lỗ lớn.</p>
            
            <div class="warning-box">
                <strong>⚠️ QUAN TRỌNG NHẤT:</strong><br>
                Risk Management quan trọng HƠN strategy!<br>
                Strategy tốt + Risk management tồi = Mất tiền<br>
                Strategy trung bình + Risk management tốt = Kiếm tiền
            </div>

            <h4>📌 3 nguyên tắc vàng:</h4>
            
            <div class="example-box">
                <strong>1. Quy tắc 1%:</strong><br>
                Không bao giờ rủi ro quá 1% tài khoản trong 1 lệnh<br>
                <br>
                <strong>Ví dụ:</strong><br>
                Tài khoản: $10,000<br>
                Risk per trade: 1% = $100<br>
                → Nếu stop loss $100, position size phải điều chỉnh để loss chỉ $100
            </div>

            <div class="example-box">
                <strong>2. Risk:Reward Ratio (R:R):</strong><br>
                Lợi nhuận tiềm năng phải ít nhất gấp 2-3 lần rủi ro<br>
                <br>
                <strong>Ví dụ:</strong><br>
                Entry: $100<br>
                Stop Loss: $98 (risk $2)<br>
                Take Profit: $106 (reward $6)<br>
                R:R = 1:3 ✅ Good trade!
            </div>

            <div class="example-box">
                <strong>3. Maximum Drawdown:</strong><br>
                Đặt giới hạn loss tối đa trong ngày/tuần/tháng<br>
                <br>
                <strong>Ví dụ:</strong><br>
                Tài khoản: $10,000<br>
                Daily max loss: 3% = $300<br>
                → Nếu loss $300 trong ngày → Stop trading, nghỉ đến ngày mai
            </div>

            <h4>💡 Stop Loss - Bạn thân của bạn:</h4>
            
            <div class="example-box">
                <strong>Stop Loss là gì?</strong><br>
                Lệnh tự động đóng vị thế khi giá chạm mức bạn đặt<br>
                <br>
                <strong>Mục đích:</strong> Giới hạn lỗ, bảo vệ tài khoản<br>
                <br>
                <strong>Nguyên tắc:</strong><br>
                ✅ LUÔN LUÔN đặt stop loss<br>
                ✅ Đặt NGAY khi vào lệnh<br>
                ❌ KHÔNG BAO GIỜ di chuyển stop loss xa hơn (tăng risk)<br>
                ✅ Có thể di chuyển stop loss gần hơn (giảm risk, lock profit)
            </div>
        `,
        detail: `
            <h4>🎯 Position Sizing (Tính khối lượng):</h4>

            <h5>Công thức cơ bản:</h5>
            <div class="example-box">
                <strong>Position Size = (Account × Risk%) / Stop Loss Distance</strong><br>
                <br>
                <strong>Ví dụ cụ thể:</strong><br>
                Tài khoản: $10,000<br>
                Risk: 1% = $100<br>
                Entry: BTC @ $30,000<br>
                Stop Loss: $29,500 (distance = $500)<br>
                <br>
                Position Size = $100 / $500 = 0.2 BTC<br>
                <br>
                → Mua 0.2 BTC @ $30,000 = $6,000<br>
                → Nếu hit stop loss @ $29,500 → Loss = 0.2 × $500 = $100 ✅
            </div>

            <h5>Điều chỉnh theo volatility:</h5>
            <p>Thị trường biến động cao → Giảm position size</p>
            <ul>
                <li><strong>Low volatility:</strong> Risk 1-1.5%</li>
                <li><strong>Medium volatility:</strong> Risk 0.75-1%</li>
                <li><strong>High volatility:</strong> Risk 0.5% hoặc không trade</li>
            </ul>

            <h4>🎯 Portfolio Risk Management:</h4>

            <h5>Correlation Risk:</h5>
            <div class="example-box">
                <strong>Vấn đề:</strong> Trade 5 altcoins cùng lúc = NOT diversified!<br>
                Khi BTC drop → Tất cả altcoins drop → Loss 5 lệnh cùng lúc<br>
                <br>
                <strong>Giải pháp:</strong><br>
                • Trade tài sản không correlation (BTC + Gold + EUR/USD)<br>
                • Hoặc giảm risk per trade khi trade correlated assets
            </div>

            <h5>Total Portfolio Risk:</h5>
            <ul>
                <li><strong>Conservative:</strong> Max 5% tổng portfolio</li>
                <li><strong>Moderate:</strong> Max 10% tổng portfolio</li>
                <li><strong>Aggressive:</strong> Max 15% tổng portfolio</li>
            </ul>

            <div class="example-box">
                <strong>Ví dụ:</strong><br>
                Tài khoản: $10,000<br>
                Max portfolio risk: 10% = $1,000<br>
                Risk per trade: 1% = $100<br>
                <br>
                → Max simultaneous positions: 10 trades<br>
                → Nếu tất cả hit stop loss → Loss chỉ $1,000 (10%)
            </div>

            <h4>🎯 Stop Loss Placement:</h4>

            <h5>1. Technical Stop Loss:</h5>
            <ul>
                <li><strong>Below support</strong> (for long) / <strong>Above resistance</strong> (for short)</li>
                <li><strong>Below swing low</strong> / <strong>Above swing high</strong></li>
                <li><strong>Below pattern</strong> (e.g., below triangle, flag)</li>
            </ul>

            <h5>2. ATR-Based Stop Loss:</h5>
            <p>Average True Range (ATR) = Đo volatility</p>
            <div class="example-box">
                Stop Loss = Entry ± (ATR × Multiplier)<br>
                <br>
                <strong>Ví dụ:</strong><br>
                Entry: $30,000<br>
                ATR(14): $500<br>
                Multiplier: 2<br>
                Stop Loss: $30,000 - (2 × $500) = $29,000
            </div>

            <h5>3. Percentage-Based:</h5>
            <p>Fixed percentage từ entry (ví dụ: 2%, 3%)</p>
            <p><strong>Note:</strong> Ít linh hoạt, không tính market structure</p>

            <h4>🎯 Take Profit Strategies:</h4>

            <h5>1. Fixed R:R:</h5>
            <p>Take Profit = Entry + (Risk × R:R Ratio)</p>
            <div class="example-box">
                Entry: $100, SL: $98 (risk $2)<br>
                R:R 1:3 → TP = $100 + ($2 × 3) = $106
            </div>

            <h5>2. Technical Targets:</h5>
            <ul>
                <li>Next resistance/support level</li>
                <li>Fibonacci extension (127%, 161.8%)</li>
                <li>Measured move (pattern height)</li>
            </ul>

            <h5>3. Trailing Stop:</h5>
            <p>Tự động di chuyển stop loss theo giá để lock profit</p>
            <div class="example-box">
                Buy @ $100, Trailing stop 5%:<br>
                Price $110 → Stop moves to $104.5<br>
                Price $120 → Stop moves to $114<br>
                → Lock profit automatically! 🎯
            </div>

            <h5>4. Scale Out:</h5>
            <p>Exit từng phần tại nhiều targets</p>
            <div class="example-box">
                • TP1 (1:2 R:R): Close 50% → Lock profit<br>
                • TP2 (1:3 R:R): Close 30% → More profit<br>
                • TP3 (1:5 R:R): Close 20% → Trail stop
            </div>
        `,
        advanced: `
            <h4>🔧 Advanced Risk Management:</h4>

            <h5>1. Kelly Criterion:</h5>
            <p><strong>Công thức optimal position sizing:</strong></p>
            <div class="example-box">
                <strong>Kelly % = (Win Rate × Avg Win - Loss Rate × Avg Loss) / Avg Win</strong><br>
                <br>
                <strong>Ví dụ:</strong><br>
                Win rate: 60%<br>
                Avg win: $300<br>
                Avg loss: $100<br>
                <br>
                Kelly = (0.6 × 300 - 0.4 × 100) / 300<br>
                Kelly = (180 - 40) / 300 = 0.467 = 46.7%<br>
                <br>
                <strong>But:</strong> Full Kelly too aggressive!<br>
                <strong>Use:</strong> 1/4 Kelly = 11.7% per trade (still high)<br>
                <strong>Reality:</strong> Most traders use 1-2% (way safer)
            </div>

            <h5>2. Sharpe Ratio:</h5>
            <p>Đo return/risk efficiency</p>
            <div class="example-box">
                <strong>Sharpe = (Return - Risk Free Rate) / Standard Deviation</strong><br>
                <br>
                Sharpe > 1: Good<br>
                Sharpe > 2: Excellent<br>
                Sharpe > 3: Exceptional (rare)
            </div>

            <h5>3. Maximum Drawdown Management:</h5>

            <table style="width:100%; border-collapse: collapse;">
                <tr style="background:#2c3e50; color:white;">
                    <th style="padding:10px;">Drawdown</th>
                    <th style="padding:10px;">Return Needed</th>
                    <th style="padding:10px;">Action</th>
                </tr>
                <tr>
                    <td style="padding:10px;">-10%</td>
                    <td style="padding:10px;">+11%</td>
                    <td style="padding:10px;">Review strategy</td>
                </tr>
                <tr>
                    <td style="padding:10px;">-20%</td>
                    <td style="padding:10px;">+25%</td>
                    <td style="padding:10px;">Reduce position size 50%</td>
                </tr>
                <tr>
                    <td style="padding:10px;">-30%</td>
                    <td style="padding:10px;">+43%</td>
                    <td style="padding:10px;">Stop trading, paper trade</td>
                </tr>
                <tr>
                    <td style="padding:10px;">-40%</td>
                    <td style="padding:10px;">+67%</td>
                    <td style="padding:10px;">Take break, reset</td>
                </tr>
                <tr>
                    <td style="padding:10px;">-50%</td>
                    <td style="padding:10px;">+100%</td>
                    <td style="padding:10px;">STOP! Re-learn everything</td>
                </tr>
            </table>

            <div class="warning-box">
                <strong>⚠️ Key Lesson:</strong><br>
                Losing 50% means you need 100% gain to get back!<br>
                → Prevention is EVERYTHING<br>
                → Cut losses quickly, let winners run
            </div>

            <h5>4. Volatility-Adjusted Position Sizing:</h5>

            <div class="example-box">
                <strong>Formula:</strong><br>
                Position = (Account × Risk%) / (ATR × Multiplier)<br>
                <br>
                <strong>Benefits:</strong><br>
                • Volatile market → Smaller position → Same risk<br>
                • Calm market → Larger position → Same risk<br>
                → Risk stays CONSTANT regardless of conditions
            </div>

            <h5>5. Correlation Matrix:</h5>

            <p>Track correlation between your positions:</p>
            <table style="width:100%; border-collapse: collapse;">
                <tr style="background:#2c3e50; color:white;">
                    <th style="padding:10px;"></th>
                    <th style="padding:10px;">BTC</th>
                    <th style="padding:10px;">ETH</th>
                    <th style="padding:10px;">Gold</th>
                    <th style="padding:10px;">EUR/USD</th>
                </tr>
                <tr>
                    <td style="padding:10px;"><strong>BTC</strong></td>
                    <td style="padding:10px;">1.0</td>
                    <td style="padding:10px;">0.9</td>
                    <td style="padding:10px;">-0.3</td>
                    <td style="padding:10px;">0.1</td>
                </tr>
                <tr>
                    <td style="padding:10px;"><strong>ETH</strong></td>
                    <td style="padding:10px;">0.9</td>
                    <td style="padding:10px;">1.0</td>
                    <td style="padding:10px;">-0.2</td>
                    <td style="padding:10px;">0.15</td>
                </tr>
            </table>

            <p><strong>Interpretation:</strong></p>
            <ul>
                <li>BTC and ETH: 0.9 correlation → NOT diversified</li>
                <li>BTC and Gold: -0.3 → Good diversification</li>
                <li>Trade BTC + ETH = Double risk if BTC crashes</li>
            </ul>

            <h4>📊 Risk Management Checklist:</h4>

            <pre style="background:#1a1a1a; padding:15px; border-radius:5px;">
<strong>Before Every Trade:</strong>
☐ Position size calculated based on stop loss?
☐ Risk ≤ 1% of account?
☐ R:R ratio ≥ 1:2?
☐ Stop loss placed immediately?
☐ Total portfolio risk < 10%?
☐ Not correlated with existing positions?
☐ Have clear exit plan?
☐ Mentally prepared to take loss?

<strong>If ANY answer is NO → DO NOT TAKE THE TRADE</strong>
            </pre>

            <h4>💡 Risk Management Wisdom:</h4>

            <ol>
                <li><strong>"Cut losses short, let profits run"</strong> - Old trader saying</li>
                <li><strong>No trade is worth blowing up account</strong> - Skip if risk too high</li>
                <li><strong>Protect capital first, profit second</strong> - Capital preservation #1 priority</li>
                <li><strong>Being wrong is OK, staying wrong is not</strong> - Exit when wrong</li>
                <li><strong>Best traders are best losers</strong> - Accept losses quickly</li>
            </ol>

            <div class="example-box">
                <strong>💰 Example: Two Traders</strong><br>
                <br>
                <strong>Trader A:</strong> Win rate 80%, No risk management<br>
                Wins 8 × $100 = $800<br>
                Loses 2 × $1,000 = -$2,000<br>
                <strong>Net:</strong> -$1,200 ❌<br>
                <br>
                <strong>Trader B:</strong> Win rate 40%, Good risk management<br>
                Wins 4 × $300 = $1,200<br>
                Loses 6 × $100 = -$600<br>
                <strong>Net:</strong> +$600 ✅<br>
                <br>
                <strong>Lesson:</strong> Risk management > Win rate!
            </div>

            <div class="warning-box">
                <strong>⚠️ Most Common Risk Management Mistakes:</strong><br>
                <br>
                1. <strong>Moving stop loss away</strong> - Never do this!<br>
                2. <strong>No stop loss</strong> - "It will come back" → Famous last words<br>
                3. <strong>Risking too much</strong> - 5-10% per trade → Recipe for disaster<br>
                4. <strong>Revenge trading</strong> - Trying to "get money back" after loss<br>
                5. <strong>Correlated positions</strong> - 5 crypto longs = 5× risk when BTC drops<br>
                6. <strong>Overtrading</strong> - More trades ≠ more profit<br>
                7. <strong>No daily/weekly limits</strong> - Can lose months of profit in 1 bad day<br>
                <br>
                <strong>All avoidable with discipline!</strong>
            </div>
        `,
        keyPoints: ['1% Rule', 'Position Sizing', 'Stop Loss', 'R:R Ratio', 'Drawdown Management', 'Portfolio Risk', 'Kelly Criterion']
    },

    'position-sizing': {
        icon: '⚖️',
        title: 'Tính Khối Lượng',
        order: 14,
        category: 'risk',
        connections: ['risk-management', 'strategies'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> Position Sizing là tính toán "bao nhiêu" để trade sao cho rủi ro luôn được kiểm soát.</p>
            
            <div class="example-box">
                <strong>Tại sao quan trọng?</strong><br>
                • Khối lượng quá lớn → 1 lệnh loss có thể xóa account<br>
                • Khối lượng quá nhỏ → Lợi nhuận không đáng kể<br>
                • Khối lượng vừa phải → Risk được control, profit ổn định
            </div>

            <h4>📌 Công thức cơ bản:</h4>

            <div class="example-box">
                <strong>Position Size = Risk Amount / Stop Loss Distance</strong><br>
                <br>
                <strong>Ví dụ 1: Stocks</strong><br>
                Account: $10,000<br>
                Risk: 1% = $100<br>
                Entry: $50<br>
                Stop Loss: $48 (distance = $2)<br>
                <br>
                Position = $100 / $2 = 50 shares<br>
                Cost = 50 × $50 = $2,500<br>
                <br>
                If hit SL: Loss = 50 × $2 = $100 ✅
            </div>

            <div class="example-box">
                <strong>Ví dụ 2: Crypto</strong><br>
                Account: $10,000<br>
                Risk: 1% = $100<br>
                Entry: BTC @ $30,000<br>
                Stop Loss: $29,000 (distance = $1,000)<br>
                <br>
                Position = $100 / $1,000 = 0.1 BTC<br>
                Cost = 0.1 × $30,000 = $3,000<br>
                <br>
                If hit SL: Loss = 0.1 × $1,000 = $100 ✅
            </div>

            <h4>💡 3 yếu tố ảnh hưởng:</h4>
            <ul>
                <li><strong>Account size:</strong> Càng lớn → Position càng lớn</li>
                <li><strong>Risk %:</strong> Càng cao → Position càng lớn (nhưng nguy hiểm)</li>
                <li><strong>Stop loss distance:</strong> Càng xa → Position càng nhỏ</li>
            </ul>
        `,
        detail: `
            <h4>🎯 Position Sizing Methods:</h4>

            <h5>1. Fixed Percentage Risk:</h5>
            <p>Risk cố định % account mỗi lệnh (thông dụng nhất)</p>
            <div class="example-box">
                <strong>Conservative:</strong> 0.5-1% per trade<br>
                <strong>Moderate:</strong> 1-1.5% per trade<br>
                <strong>Aggressive:</strong> 2-2.5% per trade<br>
                <br>
                <strong>Recommended:</strong> 1% cho hầu hết traders
            </div>

            <h5>2. Fixed Dollar Risk:</h5>
            <p>Risk cố định số tiền mỗi lệnh</p>
            <div class="example-box">
                <strong>Ví dụ:</strong><br>
                Always risk $100 per trade<br>
                Account $10,000 → 1% risk<br>
                Account $20,000 → 0.5% risk<br>
                <br>
                <strong>Note:</strong> Risk % giảm khi account tăng (ultra conservative)
            </div>

            <h5>3. Volatility-Adjusted:</h5>
            <p>Điều chỉnh position theo volatility (ATR)</p>
            <div class="example-box">
                <strong>Formula:</strong><br>
                Position = (Account × Risk%) / (ATR × Multiplier)<br>
                <br>
                <strong>Benefits:</strong><br>
                • High volatility → Smaller position<br>
                • Low volatility → Larger position<br>
                • Risk stays constant!
            </div>

            <h5>4. Fixed Ratio:</h5>
            <p>Dựa trên account growth</p>
            <div class="example-box">
                Start: 1 contract per $5,000<br>
                $10,000 → 2 contracts<br>
                $15,000 → 3 contracts<br>
                <br>
                <strong>Used by:</strong> Futures traders
            </div>

            <h4>🎯 Position Sizing với Leverage:</h4>

            <h5>Hiểu Leverage:</h5>
            <div class="example-box">
                <strong>Leverage 1:10 nghĩa là:</strong><br>
                $1,000 của bạn = $10,000 buying power<br>
                <br>
                <strong>Ví dụ:</strong><br>
                Account: $1,000<br>
                Leverage: 1:10<br>
                Can trade: $10,000 worth<br>
                <br>
                <strong>Risk:</strong><br>
                • 10% move against you = 100% loss = REKT<br>
                • High leverage = High risk!
            </div>

            <h5>Safe Leverage Usage:</h5>
            <div class="example-box">
                <strong>Rule:</strong> Use leverage to REDUCE position size, not increase it!<br>
                <br>
                <strong>Bad:</strong><br>
                $1,000 account + 10x leverage = Trade $10,000<br>
                → 10% move = Liquidation ❌<br>
                <br>
                <strong>Good:</strong><br>
                $1,000 account + 10x leverage = Trade $2,000<br>
                → Only need $200 margin (instead of $2,000)<br>
                → Free up capital, SAME risk ✅
            </div>

            <h4>🎯 Position Sizing Calculator:</h4>

            <div class="example-box">
                <strong>Step-by-step:</strong><br>
                1. Determine account size: $10,000<br>
                2. Decide risk per trade: 1% = $100<br>
                3. Identify entry: $100<br>
                4. Place stop loss: $95 (5% away)<br>
                5. Calculate distance: $100 - $95 = $5<br>
                6. Calculate position: $100 / $5 = 20 shares<br>
                7. Calculate cost: 20 × $100 = $2,000<br>
                8. Verify: 20 × $5 loss = $100 ✅<br>
                <br>
                <strong>Done! Trade 20 shares.</strong>
            </div>

            <h4>💡 Position Sizing Tips:</h4>

            <ol>
                <li><strong>Always calculate BEFORE entering</strong> - Never "wing it"</li>
                <li><strong>Use calculator or spreadsheet</strong> - Don't do mental math</li>
                <li><strong>Reduce size if uncertain</strong> - When in doubt, trade smaller</li>
                <li><strong>Consider liquidity</strong> - Can you exit position easily?</li>
                <li><strong>Factor in commission</strong> - Especially important for small accounts</li>
            </ol>
        `,
        advanced: `
            <h4>🔧 Advanced Position Sizing:</h4>

            <h5>1. Optimal F (Optimal Fixed Fraction):</h5>
            <p>Ralph Vince's geometric mean maximization</p>
            <div class="example-box">
                <strong>Concept:</strong> Position size that maximizes long-term growth<br>
                <br>
                <strong>Formula:</strong> Complex, requires historical trades<br>
                <strong>Result:</strong> Usually 15-25% of account (too aggressive!)<br>
                <strong>Practical:</strong> Use 1/4 of Optimal F = 4-6%<br>
                <br>
                <strong>Note:</strong> Only for advanced traders with proven edge
            </div>

            <h5>2. Dynamic Position Sizing:</h5>
            <p>Adjust size based on confidence and market conditions</p>

            <table style="width:100%; border-collapse: collapse;">
                <tr style="background:#2c3e50; color:white;">
                    <th style="padding:10px;">Setup Quality</th>
                    <th style="padding:10px;">Confidence</th>
                    <th style="padding:10px;">Risk %</th>
                </tr>
                <tr>
                    <td style="padding:10px;"><strong>A+ Setup</strong></td>
                    <td style="padding:10px;">Very high</td>
                    <td style="padding:10px;">1.5-2%</td>
                </tr>
                <tr>
                    <td style="padding:10px;"><strong>A Setup</strong></td>
                    <td style="padding:10px;">High</td>
                    <td style="padding:10px;">1-1.5%</td>
                </tr>
                <tr>
                    <td style="padding:10px;"><strong>B Setup</strong></td>
                    <td style="padding:10px;">Medium</td>
                    <td style="padding:10px;">0.5-1%</td>
                </tr>
                <tr>
                    <td style="padding:10px;"><strong>C Setup</strong></td>
                    <td style="padding:10px;">Low</td>
                    <td style="padding:10px;">Skip or 0.25%</td>
                </tr>
            </table>

            <h5>3. Anti-Martingale (Pyramiding):</h5>
            <p>Increase position size when winning</p>
            <div class="example-box">
                <strong>Strategy:</strong><br>
                Entry 1: Buy 100 shares @ $100<br>
                Price → $105: Add 50 shares @ $105<br>
                Price → $110: Add 25 shares @ $110<br>
                <br>
                <strong>Benefits:</strong> Maximize winning trades<br>
                <strong>Risk:</strong> Average up = higher risk if reverses<br>
                <br>
                <strong>Rule:</strong> Only add if SL can be moved to breakeven
            </div>

            <h5>4. Portfolio Heat:</h5>
            <p>Total risk across all open positions</p>
            <div class="example-box">
                <strong>Example:</strong><br>
                Position 1: 1% risk<br>
                Position 2: 1% risk<br>
                Position 3: 0.5% risk<br>
                Position 4: 1.5% risk<br>
                <br>
                <strong>Portfolio Heat:</strong> 4% total<br>
                <br>
                <strong>Rule:</strong> Keep total < 10% (conservative) or < 15% (aggressive)
            </div>

            <h5>5. Correlation-Adjusted Sizing:</h5>
            <p>Reduce size when trading correlated assets</p>
            <div class="example-box">
                <strong>Scenario:</strong><br>
                Trading BTC and ETH (0.9 correlation)<br>
                <br>
                <strong>Standard:</strong> 1% each = 2% total risk<br>
                <strong>Adjusted:</strong> 0.75% each = 1.5% total risk<br>
                <br>
                <strong>Why:</strong> When BTC drops, ETH usually drops too<br>
                → Effective risk higher than it appears
            </div>

            <h4>📊 Position Sizing Spreadsheet Template:</h4>

            <pre style="background:#1a1a1a; padding:15px; border-radius:5px;">
| Field              | Value           |
|--------------------|-----------------|
| Account Size       | $10,000         |
| Risk %             | 1%              |
| Risk Amount        | $100            |
| Entry Price        | $30,000         |
| Stop Loss Price    | $29,000         |
| Stop Distance      | $1,000          |
| Position Size      | 0.1 BTC         |
| Position Value     | $3,000          |
| ---                | ---             |
| Take Profit 1      | $32,000 (1:2)   |
| Profit 1           | $200            |
| Take Profit 2      | $33,000 (1:3)   |
| Profit 2           | $300            |
| ---                | ---             |
| Verify: SL Loss    | $100 ✅         |
            </pre>

            <h4>💡 Pro Position Sizing Tips:</h4>

            <ol>
                <li><strong>Start small when learning:</strong> 0.25-0.5% risk until consistent</li>
                <li><strong>Scale up slowly:</strong> 0.5% → 0.75% → 1% over months</li>
                <li><strong>Never go above 2%:</strong> Even for "sure things" (they don't exist)</li>
                <li><strong>Reduce size in losing streaks:</strong> 3 losses → Cut size 50%</li>
                <li><strong>Don't increase after winners:</strong> Avoid overconfidence</li>
                <li><strong>Account for slippage:</strong> Actual loss may be > calculated</li>
                <li><strong>Round down, not up:</strong> Always be conservative</li>
            </ol>

            <div class="warning-box">
                <strong>⚠️ Position Sizing Disasters:</strong><br>
                <br>
                <strong>Case 1: The "All-In" Trader</strong><br>
                Risk 50% on "sure thing" → Market gaps → Account blown<br>
                <br>
                <strong>Case 2: The Overleveraged</strong><br>
                10x leverage, full position → 10% move → Liquidated<br>
                <br>
                <strong>Case 3: The Correlated</strong><br>
                5 crypto positions @ 1% each → BTC drops 20% → All hit SL → -5%<br>
                <br>
                <strong>Case 4: The Revenge Trader</strong><br>
                After loss, doubles position size to "get it back" → Loses even more<br>
                <br>
                <strong>All preventable with proper position sizing!</strong>
            </div>

            <div class="example-box">
                <strong>💰 Position Sizing Success Story:</strong><br>
                <br>
                <strong>Trader with $10,000:</strong><br>
                • Risks 1% per trade = $100<br>
                • Win rate: 50%<br>
                • Avg win: $300 (1:3 R:R)<br>
                • Avg loss: $100<br>
                <br>
                <strong>After 100 trades:</strong><br>
                50 wins × $300 = $15,000<br>
                50 losses × $100 = -$5,000<br>
                <strong>Net profit: $10,000 (100% return!) 🎉</strong><br>
                <br>
                <strong>Key:</strong> Consistent position sizing + Good R:R = Success
            </div>
        `,
        keyPoints: ['Fixed Percentage', 'Risk Per Trade', 'Leverage', 'Volatility Adjustment', 'Portfolio Heat', 'Position Calculator']
    }
};

// Export
if (typeof window !== 'undefined') {
    window.riskManagementData = riskManagementData;
}
