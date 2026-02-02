// ==================== ASSET TYPES MODULE ====================

const assetTypesData = {
    'asset-types': {
        icon: '💹',
        title: 'Các Loại Tài Sản',
        order: 2,
        category: 'basics',
        connections: ['trading-basics', 'market-orders'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> Có nhiều loại tài sản khác nhau bạn có thể trade, mỗi loại có đặc điểm riêng.</p>
            
            <h4>📌 4 loại tài sản chính:</h4>
            
            <div class="example-box">
                <strong>1. 📈 Stocks (Cổ phiếu):</strong><br>
                • Là gì: Cổ phần của công ty<br>
                • Ví dụ: Apple (AAPL), Google (GOOGL), Tesla (TSLA)<br>
                • Giờ giao dịch: 9:30-16:00 EST (thị trường Mỹ)<br>
                • Ưu: Nhiều thông tin, biến động vừa phải<br>
                • Nhược: Chỉ mở cửa giờ hành chính<br>
                <br>
                <strong>Tại Việt Nam:</strong> VIC, VNM, FPT... trên HSX/HNX
            </div>

            <div class="example-box">
                <strong>2. 💱 Forex (Ngoại hối):</strong><br>
                • Là gì: Trao đổi tiền tệ giữa các nước<br>
                • Ví dụ: EUR/USD, GBP/USD, USD/JPY<br>
                • Giờ giao dịch: 24/5 (Thứ 2 → Thứ 6)<br>
                • Ưu: Thanh khoản cực cao, leverage cao<br>
                • Nhược: Biến động nhỏ, cần vốn lớn hoặc leverage<br>
                <br>
                <strong>Thị trường lớn nhất thế giới:</strong> 6.6 nghìn tỷ USD/ngày
            </div>

            <div class="example-box">
                <strong>3. 🪙 Cryptocurrency (Tiền mã hóa):</strong><br>
                • Là gì: Tiền điện tử trên blockchain<br>
                • Ví dụ: Bitcoin (BTC), Ethereum (ETH), BNB<br>
                • Giờ giao dịch: 24/7 (không nghỉ)<br>
                • Ưu: Biến động lớn, cơ hội lớn<br>
                • Nhược: Rủi ro cao, dễ pump & dump<br>
                <br>
                <strong>Lưu ý:</strong> Biến động có thể 10-20%/ngày!
            </div>

            <div class="example-box">
                <strong>4. 📦 Commodities (Hàng hóa):</strong><br>
                • Là gì: Hàng hóa thực (vàng, dầu, lúa mì...)<br>
                • Ví dụ: Gold (XAU), Oil (WTI, Brent), Silver (XAG)<br>
                • Giờ giao dịch: Tùy sàn, thường 24/5<br>
                • Ưu: Hedge (phòng ngừa) lạm phát<br>
                • Nhược: Ảnh hưởng nhiều yếu tố địa chính trị
            </div>
        `,
        detail: `
            <h4>🎯 So sánh chi tiết các loại tài sản:</h4>

            <table style="width:100%; border-collapse: collapse; margin: 20px 0;">
                <tr style="background:#2c3e50; color:white;">
                    <th style="padding:10px;">Đặc điểm</th>
                    <th style="padding:10px;">Stocks</th>
                    <th style="padding:10px;">Forex</th>
                    <th style="padding:10px;">Crypto</th>
                    <th style="padding:10px;">Commodities</th>
                </tr>
                <tr>
                    <td style="padding:10px;"><strong>Volatility</strong></td>
                    <td style="padding:10px;">Trung bình</td>
                    <td style="padding:10px;">Thấp</td>
                    <td style="padding:10px;">Rất cao</td>
                    <td style="padding:10px;">Trung bình</td>
                </tr>
                <tr>
                    <td style="padding:10px;"><strong>Leverage</strong></td>
                    <td style="padding:10px;">1:2 - 1:4</td>
                    <td style="padding:10px;">1:50 - 1:500</td>
                    <td style="padding:10px;">1:10 - 1:125</td>
                    <td style="padding:10px;">1:10 - 1:100</td>
                </tr>
                <tr>
                    <td style="padding:10px;"><strong>Vốn tối thiểu</strong></td>
                    <td style="padding:10px;">$100 - $500</td>
                    <td style="padding:10px;">$10 - $100</td>
                    <td style="padding:10px;">$10 - $50</td>
                    <td style="padding:10px;">$100 - $1000</td>
                </tr>
                <tr>
                    <td style="padding:10px;"><strong>Giờ giao dịch</strong></td>
                    <td style="padding:10px;">Giờ hành chính</td>
                    <td style="padding:10px;">24/5</td>
                    <td style="padding:10px;">24/7</td>
                    <td style="padding:10px;">24/5</td>
                </tr>
                <tr>
                    <td style="padding:10px;"><strong>Phù hợp</strong></td>
                    <td style="padding:10px;">Beginner-Advanced</td>
                    <td style="padding:10px;">Intermediate-Advanced</td>
                    <td style="padding:10px;">High risk takers</td>
                    <td style="padding:10px;">Advanced</td>
                </tr>
            </table>

            <h4>💡 Loại tài sản nào cho bạn?</h4>

            <div class="example-box">
                <strong>Nếu bạn là người mới:</strong><br>
                ✅ Stocks - Ổn định, nhiều tài liệu<br>
                ⚠️ Tránh Crypto ban đầu - Quá rủi ro
            </div>

            <div class="example-box">
                <strong>Nếu bạn thích giao dịch nhanh:</strong><br>
                ✅ Forex hoặc Crypto<br>
                ✅ Forex major pairs (EUR/USD, GBP/USD) - Spread thấp
            </div>

            <div class="example-box">
                <strong>Nếu bạn có vốn nhỏ (<$500):</strong><br>
                ✅ Forex hoặc Crypto - Leverage cao<br>
                ⚠️ Nhưng phải cẩn thận với risk management
            </div>

            <h4>📊 Các loại phái sinh (Derivatives):</h4>
            <ul>
                <li><strong>Futures:</strong> Hợp đồng tương lai, leverage cao</li>
                <li><strong>Options:</strong> Quyền mua/bán, rủi ro giới hạn</li>
                <li><strong>CFD:</strong> Contract for Difference, trade chênh lệch giá</li>
                <li><strong>ETF:</strong> Quỹ giao dịch, đa dạng hóa dễ dàng</li>
            </ul>
        `,
        advanced: `
            <h4>🔧 Phân tích sâu về từng loại tài sản:</h4>

            <h5>1. Stocks (Cổ phiếu)</h5>
            <p><strong>Loại cổ phiếu:</strong></p>
            <ul>
                <li><strong>Blue Chips:</strong> Công ty lớn, ổn định (Apple, Microsoft)</li>
                <li><strong>Growth Stocks:</strong> Tăng trưởng cao (Tesla, Nvidia)</li>
                <li><strong>Value Stocks:</strong> Giá rẻ so với giá trị thực</li>
                <li><strong>Penny Stocks:</strong> < $5, rủi ro rất cao</li>
            </ul>
            <p><strong>Factors ảnh hưởng:</strong> Earnings, News, Economy, Sector trends</p>

            <h5>2. Forex (Ngoại hối)</h5>
            <p><strong>Major Pairs (Thanh khoản cao nhất):</strong></p>
            <ul>
                <li>EUR/USD - Euro vs US Dollar (phổ biến nhất)</li>
                <li>GBP/USD - British Pound vs USD</li>
                <li>USD/JPY - US Dollar vs Japanese Yen</li>
                <li>USD/CHF - USD vs Swiss Franc</li>
            </ul>
            
            <p><strong>Minor Pairs:</strong> EUR/GBP, EUR/JPY, GBP/JPY</p>
            <p><strong>Exotic Pairs:</strong> USD/TRY, USD/ZAR (spread cao, rủi ro cao)</p>

            <p><strong>Factors ảnh hưởng:</strong></p>
            <ul>
                <li>Interest rates (Lãi suất)</li>
                <li>GDP, Employment data</li>
                <li>Central bank policy</li>
                <li>Geopolitical events</li>
            </ul>

            <div class="example-box">
                <strong>Ví dụ Trading Session:</strong><br>
                • Asian Session: 00:00-09:00 GMT - JPY pairs active<br>
                • London Session: 08:00-17:00 GMT - EUR, GBP active<br>
                • New York Session: 13:00-22:00 GMT - USD pairs active<br>
                • <strong>Overlap London-NY:</strong> 13:00-17:00 GMT - Volatility cao nhất!
            </div>

            <h5>3. Cryptocurrency</h5>
            <p><strong>Tiers:</strong></p>
            <ul>
                <li><strong>Tier 1:</strong> BTC, ETH - Thanh khoản cao, ổn định nhất</li>
                <li><strong>Tier 2:</strong> BNB, ADA, SOL - Large cap altcoins</li>
                <li><strong>Tier 3:</strong> Mid cap - Biến động cao hơn</li>
                <li><strong>Tier 4:</strong> Small cap, meme coins - Rủi ro cực cao</li>
            </ul>

            <p><strong>Factors ảnh hưởng:</strong></p>
            <ul>
                <li>BTC dominance</li>
                <li>Regulatory news</li>
                <li>Whale movements</li>
                <li>Social media sentiment</li>
                <li>DeFi, NFT trends</li>
            </ul>

            <div class="warning-box">
                <strong>⚠️ Crypto Risks:</strong><br>
                • Pump & Dump schemes<br>
                • Rug pulls (dự án lừa đảo)<br>
                • Exchange hacks<br>
                • Regulatory crackdowns<br>
                • Extreme volatility (có thể -50% trong 1 ngày)
            </div>

            <h5>4. Commodities</h5>
            <p><strong>Loại hàng hóa:</strong></p>
            <ul>
                <li><strong>Metals:</strong> Gold (XAU), Silver (XAG), Copper</li>
                <li><strong>Energy:</strong> Crude Oil (WTI, Brent), Natural Gas</li>
                <li><strong>Agriculture:</strong> Wheat, Corn, Soybeans, Coffee</li>
            </ul>

            <p><strong>Gold Trading:</strong></p>
            <div class="example-box">
                • Safe haven asset (tài sản trú ẩn)<br>
                • Tăng khi USD yếu, lạm phát cao, khủng hoảng<br>
                • Giảm khi lãi suất tăng, USD mạnh<br>
                • Correlation nghịch với stocks (thường ngược chiều)
            </div>

            <h4>📊 Correlation giữa các tài sản:</h4>
            <ul>
                <li><strong>USD vs Gold:</strong> Negative correlation (-0.7)</li>
                <li><strong>Oil vs CAD:</strong> Positive correlation (Canada xuất dầu)</li>
                <li><strong>Gold vs Risk-on assets:</strong> Negative (khi chứng khoán tăng, vàng giảm)</li>
                <li><strong>BTC vs Altcoins:</strong> Strong positive (BTC lên → Alt lên)</li>
            </ul>

            <h4>💡 Chiến lược đa tài sản:</h4>
            <ol>
                <li>Trade nhiều loại tài sản → Đa dạng rủi ro</li>
                <li>Sử dụng correlation để hedge</li>
                <li>Focus vào 2-3 loại để master</li>
                <li>Điều chỉnh theo điều kiện thị trường</li>
            </ol>
        `,
        keyPoints: ['Stocks', 'Forex', 'Cryptocurrency', 'Commodities', 'Correlation', 'Trading Sessions']
    }
};

// Export để sử dụng trong app.js
if (typeof window !== 'undefined') {
    window.assetTypesData = assetTypesData;
}
