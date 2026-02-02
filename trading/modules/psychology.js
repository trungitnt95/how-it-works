// ==================== TRADING PSYCHOLOGY MODULE ====================

const psychologyData = {
    'trading-psychology': {
        icon: '🧠',
        title: 'Tâm Lý Trading',
        order: 15,
        category: 'psychology',
        connections: ['risk-management', 'strategies'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> Trading Psychology là việc kiểm soát cảm xúc và tâm lý để đưa ra quyết định đúng đắn.</p>
            
            <div class="warning-box">
                <strong>💡 Thống kê đáng sợ:</strong><br>
                • 90% traders thua lỗ KHÔNG phải vì strategy tồi<br>
                • Mà vì KHÔNG kiểm soát được cảm xúc!<br>
                <br>
                <strong>Trading = 80% Psychology + 20% Strategy</strong>
            </div>

            <h4>📌 2 kẻ thù lớn nhất:</h4>
            
            <div class="example-box">
                <strong>1. FEAR (Sợ hãi) 😨:</strong><br>
                • Sợ thua lỗ → Không dám vào lệnh<br>
                • Sợ mất lời → Chốt lời quá sớm<br>
                • Sợ lỡ cơ hội (FOMO) → Vào lệnh lung tung<br>
                <br>
                <strong>Kết quả:</strong> Bỏ lỡ cơ hội tốt, profit nhỏ, loss lớn
            </div>

            <div class="example-box">
                <strong>2. GREED (Tham lam) 🤑:</strong><br>
                • Muốn kiếm nhiều → Không chốt lời<br>
                • Tự tin quá → Tăng position size liều lĩnh<br>
                • Nghĩ mình đặc biệt → Không follow rules<br>
                <br>
                <strong>Kết quả:</strong> Profit thành loss, over-leverage, blown account
            </div>

            <h4>💡 Các cảm xúc phổ biến:</h4>

            <div class="example-box">
                <strong>Euphoria (Hưng phấn):</strong><br>
                Sau nhiều lệnh thắng → Cảm thấy bất khả chiến bại<br>
                <strong>Nguy hiểm:</strong> Over-confidence → Tăng risk → Big loss
            </div>

            <div class="example-box">
                <strong>Desperation (Tuyệt vọng):</strong><br>
                Sau nhiều lệnh thua → Muốn gỡ gạc<br>
                <strong>Nguy hiểm:</strong> Revenge trading → Thua thêm
            </div>

            <div class="example-box">
                <strong>Panic (Hoảng loạn):</strong><br>
                Market drop đột ngột → Bán tháo<br>
                <strong>Nguy hiểm:</strong> Bán đáy, mua đỉnh
            </div>

            <h4>🛡️ Cách kiểm soát:</h4>

            <ol>
                <li><strong>Có trading plan:</strong> Follow rules, không trade theo cảm xúc</li>
                <li><strong>Risk management nghiêm:</strong> Biết sẵn loss tối đa → Bớt sợ</li>
                <li><strong>Take breaks:</strong> Nghỉ ngơi sau loss/win streak</li>
                <li><strong>Journal:</strong> Ghi chép mọi trade → Nhận ra pattern</li>
                <li><strong>Accept losses:</strong> Loss là part of the game</li>
            </ol>
        `,
        detail: `
            <h4>🎯 The Trading Psychology Cycle:</h4>

            <div class="example-box">
                <strong>Cycle of Emotions:</strong><br>
                <pre style="font-family: monospace;">
Optimism → Excitement → Thrill → Euphoria
                    ↓
              (Market Peak)
                    ↓
Anxiety → Denial → Fear → Desperation
                    ↓
              (Market Bottom)
                    ↓
Panic → Capitulation → Despondency → Depression
                    ↓
                 Hope
                    ↓
              Relief → Optimism...
                </pre>
                <br>
                <strong>Pro traders:</strong> Buy at Depression/Hope, Sell at Thrill/Euphoria<br>
                <strong>Amateurs:</strong> Buy at Euphoria (FOMO), Sell at Panic
            </div>

            <h4>🎯 Common Psychological Traps:</h4>

            <h5>1. Confirmation Bias:</h5>
            <p>Chỉ nhìn thông tin confirm quan điểm của mình, bỏ qua evidence ngược lại</p>
            <div class="example-box">
                <strong>Ví dụ:</strong><br>
                Bạn long BTC → Chỉ đọc bullish news, ignore bearish signals<br>
                <strong>Fix:</strong> Actively tìm arguments AGAINST position của bạn
            </div>

            <h5>2. Loss Aversion:</h5>
            <p>Đau từ loss > Vui từ win (cùng số tiền)</p>
            <div class="example-box">
                <strong>Result:</strong><br>
                • Giữ losing trades quá lâu (hope it comes back)<br>
                • Chốt winning trades quá sớm (secure profit)<br>
                <br>
                <strong>Fix:</strong> Follow plan mechanically, không emotional
            </div>

            <h5>3. Overconfidence Bias:</h5>
            <p>Sau vài wins → Nghĩ mình pro → Tăng risk</p>
            <div class="example-box">
                <strong>Reality:</strong> 5 wins có thể là luck, not skill<br>
                <strong>Fix:</strong> Luôn humble, stick to risk rules
            </div>

            <h5>4. Recency Bias:</h5>
            <p>Cho gần đây quan trọng hơn lịch sử</p>
            <div class="example-box">
                <strong>Ví dụ:</strong><br>
                3 lệnh gần nhất thắng → Nghĩ strategy hoàn hảo<br>
                <strong>Fix:</strong> Look at 50-100 trades, không chỉ 3-5 gần nhất
            </div>

            <h5>5. Gambler's Fallacy:</h5>
            <p>"Đã thua 5 lệnh, lệnh thứ 6 chắc thắng!"</p>
            <div class="example-box">
                <strong>Reality:</strong> Mỗi trade độc lập, không ảnh hưởng lẫn nhau<br>
                <strong>Fix:</strong> Treat every trade as independent event
            </div>

            <h4>🎯 Revenge Trading (Gỡ gạc):</h4>

            <p><strong>The Deadly Spiral:</strong></p>
            <ol>
                <li>Lệnh 1: Loss $100 → Upset</li>
                <li>Lệnh 2: Vào ngay để "get it back" → Loss $200</li>
                <li>Lệnh 3: Tăng size để gỡ → Loss $400</li>
                <li>Account blown 💥</li>
            </ol>

            <div class="warning-box">
                <strong>Solution:</strong><br>
                • Set max daily loss (e.g., 3%) → STOP when hit<br>
                • Take break after 2 consecutive losses<br>
                • Come back next day with clear mind
            </div>

            <h4>🎯 Over-Trading:</h4>

            <p><strong>Causes:</strong></p>
            <ul>
                <li>Boredom (nothing to do)</li>
                <li>Excitement (want action)</li>
                <li>Revenge (trying to recover)</li>
                <li>Greed (want more profit)</li>
            </ul>

            <p><strong>Results:</strong></p>
            <ul>
                <li>Many low-quality trades</li>
                <li>High commissions</li>
                <li>Mental fatigue → Mistakes</li>
                <li>Net negative despite some wins</li>
            </ul>

            <div class="example-box">
                <strong>Fix:</strong><br>
                • Set max trades per day (e.g., 3 for day trading)<br>
                • Only trade A+ setups<br>
                • If no setup → Don't trade!<br>
                • "The best trades are the ones you don't take"
            </div>
        `,
        advanced: `
            <h4>🔧 Professional Trading Psychology:</h4>

            <h5>1. Developing Trading Discipline:</h5>

            <div class="example-box">
                <strong>The 3 Pillars:</strong><br>
                <br>
                <strong>1. Self-Awareness:</strong><br>
                • Know your emotional triggers<br>
                • Recognize when you're tilting<br>
                • Understand your weaknesses<br>
                <br>
                <strong>2. Self-Control:</strong><br>
                • Stick to plan NO MATTER WHAT<br>
                • Don't deviate even when "sure"<br>
                • Follow rules mechanically<br>
                <br>
                <strong>3. Self-Reflection:</strong><br>
                • Journal every trade<br>
                • Review weekly/monthly<br>
                • Learn from mistakes
            </div>

            <h5>2. The Trading Routine (Critical!):</h5>

            <pre style="background:#1a1a1a; padding:15px; border-radius:5px;">
<strong>Pre-Market Routine:</strong>
☐ Review yesterday's trades (what worked/didn't)
☐ Check news and economic calendar
☐ Scan for setups, create watchlist
☐ Review trading rules
☐ Set intentions: "Trade plan, not emotions"
☐ Mental preparation (meditation, exercise)

<strong>During Trading:</strong>
☐ Follow plan mechanically
☐ No impulsive trades
☐ Take breaks every hour
☐ Stay hydrated, eat well

<strong>Post-Market Routine:</strong>
☐ Journal all trades (setup, execution, emotions)
☐ Calculate P/L and stats
☐ Review what went well and what didn't
☐ No regrets - learn and move on
☐ Disconnect - trading is DONE for today
            </pre>

            <h5>3. The Trading Journal:</h5>

            <p><strong>What to record:</strong></p>
            <ul>
                <li><strong>Setup:</strong> What pattern/signal triggered entry?</li>
                <li><strong>Execution:</strong> Entry, SL, TP prices</li>
                <li><strong>Outcome:</strong> Win/loss, P/L, R:R</li>
                <li><strong>Emotions:</strong> How did you FEEL before/during/after?</li>
                <li><strong>Mistakes:</strong> Did you break any rules?</li>
                <li><strong>Lessons:</strong> What did you learn?</li>
            </ul>

            <div class="example-box">
                <strong>Sample Entry:</strong><br>
                <pre style="background:#1a1a1a; padding:10px;">
Date: 2024-01-15
Asset: BTC/USDT
Setup: Bullish engulfing at MA 50 support
Entry: $30,100 | SL: $29,700 | TP: $31,500
Size: 0.1 BTC | Risk: $100 (1%)
Outcome: Win +$140 (1:1.4 R:R)

Emotions:
- Pre: Confident, patient
- During: Calm, followed plan
- Post: Happy but not euphoric

Notes:
- Good wait for confirmation
- Could have held for TP2 but ok
- Executed perfectly ✅
                </pre>
            </div>

            <h5>4. Handling Winning Streaks:</h5>

            <div class="warning-box">
                <strong>⚠️ Danger Zone!</strong><br>
                <br>
                Winning streaks are MORE dangerous than losing streaks because:<br>
                • Overconfidence creeps in<br>
                • Start thinking you're special<br>
                • Increase position size<br>
                • Take lower quality setups<br>
                • One big loss wipes out all gains<br>
                <br>
                <strong>Solution:</strong><br>
                • Stay humble - "It could be luck"<br>
                • DON'T increase position size<br>
                • Actually DECREASE size slightly (stay conservative)<br>
                • Review: Were wins due to skill or market condition?<br>
                • Prepare mentally for inevitable losing streak
            </div>

            <h5>5. Handling Losing Streaks:</h5>

            <div class="example-box">
                <strong>The Losing Streak Protocol:</strong><br>
                <br>
                <strong>After 3 losses in a row:</strong><br>
                1. STOP trading for the day<br>
                2. Review all 3 trades<br>
                3. Identify if it's you or market<br>
                4. Reduce position size 50% for next trades<br>
                <br>
                <strong>After 5 losses in a row:</strong><br>
                1. STOP trading for 1 week<br>
                2. Review last 20 trades<br>
                3. Check if strategy still valid<br>
                4. Paper trade for 1 week<br>
                5. Return with 50% size<br>
                <br>
                <strong>After 10% drawdown:</strong><br>
                1. STOP all trading<br>
                2. Full strategy review<br>
                3. Consider if you need to change approach<br>
                4. Paper trade until consistent again<br>
                5. Start fresh with minimum size
            </div>

            <h5>6. Mental Techniques:</h5>

            <p><strong>Meditation & Mindfulness:</strong></p>
            <ul>
                <li>10 min morning meditation</li>
                <li>Focus on breath before trading</li>
                <li>Stay present, don't think about past/future trades</li>
            </ul>

            <p><strong>Visualization:</strong></p>
            <ul>
                <li>Visualize perfect trade execution</li>
                <li>See yourself calmly taking loss when hit SL</li>
                <li>Imagine staying disciplined in chaos</li>
            </ul>

            <p><strong>Affirmations:</strong></p>
            <ul>
                <li>"I follow my plan no matter what"</li>
                <li>"Losses are part of the process"</li>
                <li>"I am a disciplined trader"</li>
                <li>"I control my emotions, not the other way around"</li>
            </ul>

            <h4>📊 Psychology Self-Assessment:</h4>

            <pre style="background:#1a1a1a; padding:15px; border-radius:5px;">
Ask yourself after each trade:

☐ Did I follow my trading plan? (Y/N)
☐ Was I emotional during the trade? (Y/N)
☐ Did I move my stop loss? (Y/N)
☐ Did I take profit too early out of fear? (Y/N)
☐ Did I hold too long out of greed? (Y/N)
☐ Was this trade revenge trading? (Y/N)
☐ Did I risk more than my rules allow? (Y/N)

<strong>If more than 2 "Yes" → You have psychology issues to work on</strong>
            </pre>

            <h4>💡 Pro Psychology Tips:</h4>

            <ol>
                <li><strong>Detach from money:</strong> Think in % and R:R, not dollars</li>
                <li><strong>Process > Outcome:</strong> Good process with bad outcome = Success</li>
                <li><strong>Be a robot:</strong> Follow rules mechanically</li>
                <li><strong>No predictions:</strong> Don't predict, react to what market shows</li>
                <li><strong>Celebrate discipline:</strong> Not profits. Profits are result of discipline</li>
                <li><strong>Accept uncertainty:</strong> You will NEVER know what happens next</li>
                <li><strong>Long-term mindset:</strong> It's a marathon, not sprint</li>
            </ol>

            <div class="example-box">
                <strong>💰 The Paradox of Trading:</strong><br>
                <br>
                <strong>When you NEED to make money → You will lose</strong><br>
                (Desperation → Bad decisions)<br>
                <br>
                <strong>When you DON'T NEED money → You will make it</strong><br>
                (Calm → Good decisions)<br>
                <br>
                <strong>Solution:</strong> Only trade with money you can afford to lose!
            </div>

            <div class="warning-box">
                <strong>⚠️ When to STOP Trading:</strong><br>
                <br>
                Stop immediately if you experience:<br>
                • Can't sleep thinking about trades<br>
                • Trading affecting relationships<br>
                • Feeling angry/depressed consistently<br>
                • Hiding losses from spouse/family<br>
                • Using money needed for bills<br>
                • Drinking/drugs to cope with losses<br>
                <br>
                <strong>These are signs of trading addiction!</strong><br>
                Seek help, take extended break, or quit.
            </div>

            <h4>🎓 The Path to Psychological Mastery:</h4>

            <p><strong>Level 1 (Beginner):</strong> Emotional roller coaster</p>
            <ul>
                <li>Happy when win, devastated when lose</li>
                <li>Revenge trade, overconfidence</li>
                <li>Break rules constantly</li>
            </ul>

            <p><strong>Level 2 (Developing):</strong> Aware but struggling</p>
            <ul>
                <li>Know emotions but hard to control</li>
                <li>Follow rules 60-70% of time</li>
                <li>Journal sometimes</li>
            </ul>

            <p><strong>Level 3 (Competent):</strong> Mostly disciplined</p>
            <ul>
                <li>Emotions recognized and managed</li>
                <li>Follow rules 80-90% of time</li>
                <li>Journal consistently</li>
                <li>Profitable some months</li>
            </ul>

            <p><strong>Level 4 (Professional):</strong> Mastery</p>
            <ul>
                <li>Trading like a robot</li>
                <li>No emotional attachment to trades</li>
                <li>Follow rules 95%+ of time</li>
                <li>Consistently profitable</li>
                <li>Win/loss feels the same</li>
            </ul>

            <p><strong>Time to Level 4:</strong> 3-5 years of dedicated practice</p>

            <div class="example-box">
                <strong>💡 Final Wisdom:</strong><br>
                <br>
                "The market is a device for transferring money from the impatient to the patient." - Warren Buffett<br>
                <br>
                "In trading, you have to be defensive and aggressive at the same time. If you are not aggressive, you are not going to make money, and if you are not defensive, you are not going to keep money." - Ray Dalio<br>
                <br>
                "The goal of a successful trader is to make the best trades. Money is secondary." - Alexander Elder<br>
                <br>
                <strong>Remember: Master your mind, master the markets.</strong>
            </div>
        `,
        keyPoints: ['Fear & Greed', 'Revenge Trading', 'Discipline', 'Trading Journal', 'Winning/Losing Streaks', 'Mental Techniques', 'Self-Awareness']
    }
};

// Export
if (typeof window !== 'undefined') {
    window.psychologyData = psychologyData;
}
