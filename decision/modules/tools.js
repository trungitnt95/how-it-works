// ==================== DECISION TOOLS MODULE ====================
// Các công cụ thực hành để ra quyết định

const decisionToolsData = {
    'pros-cons': {
        icon: '⚖️',
        title: 'Pros & Cons List',
        subtitle: 'Danh sách ưu/nhược điểm',
        order: 17,
        category: 'tools',
        connections: ['decision-matrix', 'seven-steps'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> Công cụ đơn giản nhất - liệt kê tất cả ưu điểm và nhược điểm của mỗi lựa chọn.</p>
            <div class="pros-cons-demo">
                <h5>Ví dụ: Nên nhận việc mới không?</h5>
                <div class="pros-cons-grid">
                    <div class="pros-col">
                        <h6>✅ Ưu điểm (Pros)</h6>
                        <ul>
                            <li>Lương cao hơn 30%</li>
                            <li>Học được kỹ năng mới</li>
                            <li>Công ty lớn, ổn định</li>
                        </ul>
                    </div>
                    <div class="cons-col">
                        <h6>❌ Nhược điểm (Cons)</h6>
                        <ul>
                            <li>Xa nhà hơn</li>
                            <li>Phải học lại từ đầu</li>
                            <li>Áp lực cao hơn</li>
                        </ul>
                    </div>
                </div>
            </div>
        `,
        detail: `
            <h4>📝 Cách làm đúng:</h4>
            <ol>
                <li>Viết ra TỔNG QUÁT mục tiêu của bạn</li>
                <li>Liệt kê TẤT CẢ pros có thể nghĩ ra</li>
                <li>Liệt kê TẤT CẢ cons có thể nghĩ ra</li>
                <li>Đánh giá mức độ quan trọng (1-10) cho mỗi điểm</li>
                <li>Tính tổng điểm</li>
            </ol>

            <h4>💡 Weighted Pros & Cons:</h4>
            <table class="weighted-table">
                <tr>
                    <th>Pros</th>
                    <th>Weight</th>
                    <th>Cons</th>
                    <th>Weight</th>
                </tr>
                <tr>
                    <td>Lương cao hơn 30%</td>
                    <td>9</td>
                    <td>Xa nhà hơn</td>
                    <td>-5</td>
                </tr>
                <tr>
                    <td>Học kỹ năng mới</td>
                    <td>7</td>
                    <td>Áp lực cao</td>
                    <td>-4</td>
                </tr>
                <tr>
                    <td>Công ty ổn định</td>
                    <td>6</td>
                    <td>Học lại từ đầu</td>
                    <td>-3</td>
                </tr>
                <tr class="total-row">
                    <td colspan="2"><strong>Tổng: +22</strong></td>
                    <td colspan="2"><strong>Tổng: -12</strong></td>
                </tr>
            </table>
            <p class="result">→ Net score: +10 → Nghiêng về NHẬN việc</p>

            <h4>⚠️ Hạn chế:</h4>
            <ul>
                <li>Có thể bỏ sót điểm quan trọng</li>
                <li>Khó so sánh "táo với cam"</li>
                <li>Không tính đến xác suất</li>
            </ul>
        `,
        advanced: `
            <h4>🔧 Benjamin Franklin Method:</h4>
            <p>Franklin đề xuất phương pháp "moral algebra":</p>
            <ol>
                <li>Viết pros/cons trong vài ngày (để đầy đủ)</li>
                <li>Tìm pros/cons "bằng nhau" và gạch bỏ cả hai</li>
                <li>Tiếp tục cho đến khi một bên "thắng" rõ ràng</li>
            </ol>
        `
    },

    'decision-matrix': {
        icon: '📊',
        title: 'Decision Matrix',
        subtitle: 'Ma trận quyết định',
        order: 18,
        category: 'tools',
        connections: ['pros-cons', 'evaluation'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> So sánh nhiều lựa chọn dựa trên các TIÊU CHÍ quan trọng, có trọng số khác nhau.</p>
            <div class="matrix-preview">
                <table class="decision-matrix-demo">
                    <tr>
                        <th>Tiêu chí</th>
                        <th>Trọng số</th>
                        <th>Lựa chọn A</th>
                        <th>Lựa chọn B</th>
                    </tr>
                    <tr>
                        <td>Giá</td>
                        <td>30%</td>
                        <td>8</td>
                        <td>6</td>
                    </tr>
                    <tr>
                        <td>Chất lượng</td>
                        <td>40%</td>
                        <td>7</td>
                        <td>9</td>
                    </tr>
                    <tr>
                        <td>Bảo hành</td>
                        <td>30%</td>
                        <td>6</td>
                        <td>8</td>
                    </tr>
                    <tr class="score-row">
                        <td colspan="2"><strong>Điểm tổng</strong></td>
                        <td><strong>7.0</strong></td>
                        <td><strong>7.8 ✅</strong></td>
                    </tr>
                </table>
            </div>
        `,
        detail: `
            <h4>📝 Các bước tạo Decision Matrix:</h4>

            <div class="step-box">
                <h5>Bước 1: Xác định các lựa chọn</h5>
                <p>Liệt kê 2-5 lựa chọn bạn đang cân nhắc</p>
            </div>

            <div class="step-box">
                <h5>Bước 2: Xác định tiêu chí đánh giá</h5>
                <p>Các yếu tố quan trọng với bạn (thường 4-7 tiêu chí)</p>
                <ul>
                    <li>Giá cả</li>
                    <li>Chất lượng</li>
                    <li>Thời gian</li>
                    <li>Rủi ro</li>
                    <li>Phù hợp với giá trị</li>
                </ul>
            </div>

            <div class="step-box">
                <h5>Bước 3: Đặt trọng số cho mỗi tiêu chí</h5>
                <p>Tổng = 100%. Tiêu chí quan trọng hơn → trọng số cao hơn</p>
            </div>

            <div class="step-box">
                <h5>Bước 4: Chấm điểm mỗi lựa chọn</h5>
                <p>Thang điểm 1-10 cho mỗi tiêu chí</p>
            </div>

            <div class="step-box">
                <h5>Bước 5: Tính điểm tổng</h5>
                <p>Điểm = Σ (Điểm × Trọng số)</p>
            </div>
        `,
        advanced: `
            <h4>🔧 Biến thể: Pugh Matrix</h4>
            <p>Thay vì điểm số tuyệt đối, so sánh với một baseline:</p>
            <ul>
                <li>+ : Tốt hơn baseline</li>
                <li>S : Giống baseline</li>
                <li>- : Kém hơn baseline</li>
            </ul>

            <h4>💼 Dùng khi nào:</h4>
            <ul>
                <li>Quyết định có nhiều tiêu chí phức tạp</li>
                <li>Cần giải thích quyết định cho người khác</li>
                <li>So sánh nhà cung cấp, sản phẩm, ứng viên</li>
            </ul>
        `
    },

    'decision-tree': {
        icon: '🌳',
        title: 'Decision Tree',
        subtitle: 'Cây quyết định',
        order: 19,
        category: 'tools',
        connections: ['expected-value', 'evaluation'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> Vẽ sơ đồ các lựa chọn và kết quả có thể xảy ra, giúp thấy rõ "bức tranh toàn cảnh".</p>
            <div class="tree-demo">
                <pre class="tree-ascii">
                    Mở quán cafe?
                    ├── Có
                    │   ├── Thành công (60%): +500tr/năm
                    │   └── Thất bại (40%): -200tr
                    └── Không
                        └── Giữ công việc: +150tr/năm
                </pre>
            </div>
            <p class="tree-note">📊 Công cụ trực quan hóa quyết định và rủi ro!</p>
        `,
        detail: `
            <h4>📝 Các thành phần:</h4>
            <ul>
                <li>🔲 <strong>Decision node (Vuông):</strong> Điểm phải quyết định</li>
                <li>⭕ <strong>Chance node (Tròn):</strong> Kết quả ngẫu nhiên</li>
                <li>🔺 <strong>End node (Tam giác):</strong> Kết quả cuối cùng</li>
                <li>➡️ <strong>Branches:</strong> Các lựa chọn hoặc kết quả có thể</li>
            </ul>

            <h4>💡 Cách xây dựng:</h4>
            <ol>
                <li>Bắt đầu từ quyết định chính (bên trái)</li>
                <li>Vẽ các nhánh cho mỗi lựa chọn</li>
                <li>Ở mỗi điểm không chắc chắn, vẽ các kết quả có thể</li>
                <li>Gán xác suất cho mỗi kết quả</li>
                <li>Tính Expected Value ngược lại từ phải sang trái</li>
            </ol>

            <h4>📊 Ví dụ tính toán:</h4>
            <div class="calculation-box">
                <p><strong>Mở quán cafe:</strong></p>
                <p>EV = (0.6 × 500tr) + (0.4 × -200tr) = 300tr - 80tr = <strong>+220tr</strong></p>
                <p><strong>Giữ công việc:</strong></p>
                <p>EV = 150tr</p>
                <p class="result">→ Về mặt số học, mở quán cafe có EV cao hơn!</p>
            </div>

            <div class="warning-box">
                <strong>⚠️ Lưu ý:</strong> Đây chỉ là một yếu tố. Còn phải xét risk tolerance, 
                chi phí cơ hội, và các yếu tố phi tài chính!
            </div>
        `,
        advanced: `
            <h4>🔧 Kỹ thuật nâng cao:</h4>
            <ul>
                <li><strong>Sensitivity analysis:</strong> Thay đổi xác suất, xem kết quả thay đổi thế nào</li>
                <li><strong>Monte Carlo simulation:</strong> Chạy hàng nghìn scenarios</li>
                <li><strong>Real options:</strong> Tính giá trị của việc chờ đợi hoặc từ bỏ</li>
            </ul>
        `
    },

    'expected-value': {
        icon: '🎲',
        title: 'Expected Value',
        subtitle: 'Giá trị kỳ vọng',
        order: 20,
        category: 'tools',
        connections: ['decision-tree', 'risk-assessment'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> Tính "trung bình có trọng số" của tất cả kết quả có thể xảy ra, dựa trên xác suất.</p>
            <div class="ev-formula">
                <p class="formula">EV = Σ (Kết quả × Xác suất)</p>
            </div>
            <div class="ev-example">
                <h5>Ví dụ: Đánh cược 100,000đ</h5>
                <ul>
                    <li>50% thắng: +200,000đ</li>
                    <li>50% thua: -100,000đ</li>
                </ul>
                <p class="calculation">EV = (0.5 × 200,000) + (0.5 × -100,000) = <strong>+50,000đ</strong></p>
                <p class="result">→ EV dương = Đáng để chơi (về mặt toán học)</p>
            </div>
        `,
        detail: `
            <h4>📝 Các ví dụ thực tế:</h4>

            <div class="example-box">
                <h5>🎰 Casino</h5>
                <p>Mọi trò chơi casino đều có EV âm cho người chơi!</p>
                <p>Ví dụ Roulette (chơi đỏ/đen):</p>
                <ul>
                    <li>18/38 thắng: +100%</li>
                    <li>20/38 thua: -100%</li>
                </ul>
                <p>EV = (18/38 × 1) + (20/38 × -1) = <strong>-5.26%</strong></p>
            </div>

            <div class="example-box">
                <h5>💼 Quyết định kinh doanh</h5>
                <p>Đầu tư 1 tỷ vào dự án:</p>
                <ul>
                    <li>30% thành công lớn: +5 tỷ</li>
                    <li>40% thành công vừa: +1 tỷ</li>
                    <li>30% thất bại: -1 tỷ</li>
                </ul>
                <p>EV = (0.3 × 5) + (0.4 × 1) + (0.3 × -1) = <strong>+1.6 tỷ</strong></p>
            </div>

            <h4>⚠️ Hạn chế của EV:</h4>
            <ul>
                <li>Không tính đến risk aversion (sợ rủi ro)</li>
                <li>Không tính utility (giá trị chủ quan)</li>
                <li>Giả định biết chính xác xác suất (thường không)</li>
            </ul>
        `,
        advanced: `
            <h4>🎓 Expected Utility Theory:</h4>
            <p>Cải tiến của EV, tính đến:</p>
            <ul>
                <li><strong>Diminishing marginal utility:</strong> 1 triệu đầu tiên quan trọng hơn 1 triệu thứ 100</li>
                <li><strong>Risk preference:</strong> Người khác nhau có mức chấp nhận rủi ro khác nhau</li>
            </ul>

            <h4>💡 Kelly Criterion:</h4>
            <p>Công thức xác định nên đặt cược bao nhiêu % vốn:</p>
            <p class="formula">Kelly % = (p × b - q) / b</p>
            <p>Với p = xác suất thắng, q = xác suất thua, b = tỷ lệ thắng</p>
        `
    },

    'premortem': {
        icon: '💀',
        title: 'Pre-Mortem Analysis',
        subtitle: 'Phân tích trước khi thất bại',
        order: 21,
        category: 'tools',
        connections: ['risk-assessment', 'overconfidence'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> TƯỞNG TƯỢNG dự án đã thất bại, sau đó suy nghĩ ngược: "Tại sao nó thất bại?"</p>
            <div class="premortem-visual">
                <div class="time-now">
                    <span class="icon">📍</span>
                    <h5>Hiện tại</h5>
                    <p>Chuẩn bị bắt đầu</p>
                </div>
                <div class="arrow">→ Tưởng tượng →</div>
                <div class="time-future">
                    <span class="icon">💀</span>
                    <h5>1 năm sau</h5>
                    <p>"Dự án thất bại thảm hại"</p>
                </div>
            </div>
            <p class="question">❓ "Tại sao nó thất bại? Điều gì đã xảy ra?"</p>
        `,
        detail: `
            <h4>📝 Cách thực hiện Pre-Mortem:</h4>
            <ol>
                <li><strong>Giả định thất bại:</strong> "Chúng ta đang ở tương lai. Dự án đã thất bại hoàn toàn."</li>
                <li><strong>Brainstorm lý do:</strong> Mỗi người viết ra các lý do có thể</li>
                <li><strong>Chia sẻ:</strong> Thu thập tất cả lý do</li>
                <li><strong>Phân loại:</strong> Nhóm các lý do tương tự</li>
                <li><strong>Hành động:</strong> Với mỗi rủi ro chính, tạo kế hoạch phòng ngừa</li>
            </ol>

            <h4>💡 Tại sao hiệu quả:</h4>
            <ul>
                <li>✅ Chống lại overconfidence - buộc phải nghĩ về thất bại</li>
                <li>✅ An toàn tâm lý - không phải "phản đối" ai</li>
                <li>✅ Sáng tạo - giải phóng suy nghĩ tiêu cực (thường bị kìm nén)</li>
                <li>✅ Proactive - phòng ngừa thay vì chữa cháy</li>
            </ul>

            <h4>📋 Template Pre-Mortem:</h4>
            <div class="template-box">
                <p><strong>Ngày:</strong> _____________</p>
                <p><strong>Dự án:</strong> _____________</p>
                <p><strong>Giả định:</strong> "Dự án đã thất bại sau 1 năm."</p>
                <p><strong>Lý do thất bại có thể:</strong></p>
                <ol>
                    <li>_____________</li>
                    <li>_____________</li>
                    <li>_____________</li>
                </ol>
                <p><strong>Kế hoạch phòng ngừa:</strong></p>
                <ol>
                    <li>_____________</li>
                    <li>_____________</li>
                    <li>_____________</li>
                </ol>
            </div>
        `,
        advanced: `
            <h4>🔧 Kết hợp với Postmortem:</h4>
            <table class="comparison-table">
                <tr>
                    <th>Pre-Mortem</th>
                    <th>Postmortem</th>
                </tr>
                <tr>
                    <td>TRƯỚC khi bắt đầu</td>
                    <td>SAU khi kết thúc/thất bại</td>
                </tr>
                <tr>
                    <td>Tưởng tượng thất bại</td>
                    <td>Phân tích thất bại thực</td>
                </tr>
                <tr>
                    <td>Phòng ngừa</td>
                    <td>Học hỏi</td>
                </tr>
            </table>

            <h4>💼 Gary Klein - Người phát triển:</h4>
            <p>Nhà tâm lý học Gary Klein phát triển kỹ thuật này sau khi nghiên cứu naturalistic decision making. 
            Ông thấy rằng chuyên gia thường có "prospective hindsight" - khả năng thấy trước vấn đề.</p>
        `
    },

    'opportunity-cost': {
        icon: '🔀',
        title: 'Opportunity Cost',
        subtitle: 'Chi phí cơ hội',
        order: 22,
        category: 'tools',
        connections: ['expected-value', 'decision-matrix'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> Khi chọn A, bạn MẤT đi giá trị của B (lựa chọn tốt nhất khác). Chi phí thực = Chi phí trực tiếp + Chi phí cơ hội.</p>
            <div class="opportunity-cost-visual">
                <div class="choice-made">
                    <span class="icon">✅</span>
                    <h5>Chọn: Xem TV 2 tiếng</h5>
                    <p>Chi phí: 0đ</p>
                </div>
                <div class="vs">VS</div>
                <div class="choice-missed">
                    <span class="icon">❌</span>
                    <h5>Bỏ qua: Làm thêm 2 tiếng</h5>
                    <p>Có thể kiếm: 200,000đ</p>
                </div>
            </div>
            <p class="result">→ Chi phí cơ hội của xem TV = 200,000đ!</p>
        `,
        detail: `
            <h4>📝 Ví dụ thực tế:</h4>

            <div class="example-box">
                <h5>🎓 Học đại học 4 năm</h5>
                <ul>
                    <li>Chi phí trực tiếp: 200 triệu (học phí, sách...)</li>
                    <li>Chi phí cơ hội: 4 năm lương = 480 triệu (nếu đi làm)</li>
                    <li><strong>Tổng chi phí thực: 680 triệu!</strong></li>
                </ul>
            </div>

            <div class="example-box">
                <h5>🏠 Giữ tiền mặt 500 triệu</h5>
                <ul>
                    <li>Chi phí trực tiếp: 0đ</li>
                    <li>Chi phí cơ hội: Lãi suất tiết kiệm 6%/năm = 30 triệu</li>
                    <li>Chi phí cơ hội: Đầu tư chứng khoán 15%/năm = 75 triệu</li>
                </ul>
            </div>

            <h4>💡 Cách tính chi phí cơ hội:</h4>
            <ol>
                <li>Liệt kê các lựa chọn khác</li>
                <li>Xác định giá trị của lựa chọn TỐT NHẤT khác</li>
                <li>Đó là chi phí cơ hội của lựa chọn bạn đang xét</li>
            </ol>

            <div class="warning-box">
                <strong>⚠️ Lưu ý:</strong> Chi phí cơ hội thường "vô hình" nên dễ bị bỏ qua. 
                Luôn hỏi: "Nếu không làm điều này, tôi có thể làm gì khác?"
            </div>
        `,
        advanced: `
            <h4>💼 Trong kinh doanh:</h4>
            <ul>
                <li>Tiền đầu tư vào dự án A không thể dùng cho dự án B</li>
                <li>Thời gian của CEO là chi phí cơ hội lớn nhất</li>
                <li>Factory capacity - sản xuất A = không thể sản xuất B</li>
            </ul>

            <h4>🧠 Sunk Cost vs Opportunity Cost:</h4>
            <table class="comparison-table">
                <tr>
                    <th>Sunk Cost</th>
                    <th>Opportunity Cost</th>
                </tr>
                <tr>
                    <td>Đã chi, không lấy lại được</td>
                    <td>Giá trị bỏ lỡ khi chọn khác</td>
                </tr>
                <tr>
                    <td>KHÔNG nên xét khi quyết định</td>
                    <td>NÊN xét khi quyết định</td>
                </tr>
            </table>
        `
    },

    'ten-ten-ten': {
        icon: '🕐',
        title: '10/10/10 Rule',
        subtitle: 'Quy tắc 10 phút/10 tháng/10 năm',
        order: 23,
        category: 'tools',
        connections: ['emotional-distance', 'regret-minimization'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> Khi quyết định, hỏi: "Tôi sẽ cảm thấy thế nào về quyết định này sau 10 phút, 10 tháng, và 10 năm?"</p>
            <div class="ten-ten-ten-visual">
                <div class="time-box">
                    <span class="time">10 phút</span>
                    <p>Cảm xúc ngay lập tức</p>
                </div>
                <div class="time-box">
                    <span class="time">10 tháng</span>
                    <p>Tác động trung hạn</p>
                </div>
                <div class="time-box">
                    <span class="time">10 năm</span>
                    <p>Quan điểm dài hạn</p>
                </div>
            </div>
        `,
        detail: `
            <h4>📝 Ví dụ áp dụng:</h4>

            <div class="example-box">
                <h5>Quyết định: Bỏ việc để startup</h5>
                <table class="time-table">
                    <tr>
                        <th>Thời gian</th>
                        <th>Nếu BỎ việc</th>
                        <th>Nếu Ở LẠI</th>
                    </tr>
                    <tr>
                        <td>10 phút</td>
                        <td>Phấn khích, sợ hãi 😰</td>
                        <td>An tâm, hơi thất vọng</td>
                    </tr>
                    <tr>
                        <td>10 tháng</td>
                        <td>Đang xây dựng, khó khăn</td>
                        <td>Công việc như cũ</td>
                    </tr>
                    <tr>
                        <td>10 năm</td>
                        <td>Thành công hoặc đã thử</td>
                        <td>Có thể hối tiếc không thử</td>
                    </tr>
                </table>
            </div>

            <h4>💡 Khi nào dùng 10/10/10:</h4>
            <ul>
                <li>Quyết định bị ảnh hưởng bởi cảm xúc mạnh</li>
                <li>Cần perspective dài hạn</li>
                <li>Khi lo lắng về "điều người khác nghĩ"</li>
            </ul>

            <h4>🎯 Tác dụng:</h4>
            <ul>
                <li>✅ Tạo khoảng cách cảm xúc</li>
                <li>✅ Thấy bức tranh lớn hơn</li>
                <li>✅ Giảm lo lắng ngắn hạn</li>
                <li>✅ Tránh quyết định vì sợ hãi</li>
            </ul>
        `,
        advanced: `
            <h4>🔧 Biến thể: Regret Minimization Framework</h4>
            <p>Jeff Bezos dùng khi quyết định rời Wall Street để lập Amazon:</p>
            <blockquote>
                "Tôi tưởng tượng mình 80 tuổi và nhìn lại cuộc đời. 
                Tôi muốn giảm thiểu số hối tiếc. Tôi biết mình sẽ không 
                hối tiếc đã thử và thất bại, nhưng sẽ hối tiếc nếu không thử."
            </blockquote>
        `
    },

    'reversibility': {
        icon: '↩️',
        title: 'Reversibility Check',
        subtitle: 'Kiểm tra khả năng đảo ngược',
        order: 24,
        category: 'tools',
        connections: ['risk-assessment', 'ten-ten-ten'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> Phân loại quyết định thành "cửa một chiều" và "cửa hai chiều" để biết cần cẩn thận đến mức nào.</p>
            <div class="door-visual">
                <div class="door one-way">
                    <span class="icon">🚪➡️</span>
                    <h5>Cửa một chiều</h5>
                    <p>Không thể quay lại</p>
                    <ul>
                        <li>Bán công ty</li>
                        <li>Kết hôn/ly hôn</li>
                        <li>Có con</li>
                    </ul>
                    <p class="advice">→ Cần suy nghĩ kỹ!</p>
                </div>
                <div class="door two-way">
                    <span class="icon">🚪↔️</span>
                    <h5>Cửa hai chiều</h5>
                    <p>Có thể quay lại</p>
                    <ul>
                        <li>Thử sản phẩm mới</li>
                        <li>Đổi nhà cung cấp</li>
                        <li>Thử công việc mới</li>
                    </ul>
                    <p class="advice">→ Quyết định nhanh, học từ thực tế!</p>
                </div>
            </div>
        `,
        detail: `
            <h4>📝 Jeff Bezos về Type 1 vs Type 2 Decisions:</h4>
            
            <div class="bezos-quote">
                <h5>Type 1 (Cửa một chiều)</h5>
                <ul>
                    <li>Không thể đảo ngược hoặc rất tốn kém để đảo ngược</li>
                    <li>Cần phân tích kỹ lưỡng</li>
                    <li>Lãnh đạo cấp cao nên quyết định</li>
                </ul>

                <h5>Type 2 (Cửa hai chiều)</h5>
                <ul>
                    <li>Có thể dễ dàng đảo ngược</li>
                    <li>Nên quyết định nhanh</li>
                    <li>Có thể phân quyền cho đội nhỏ</li>
                </ul>
            </div>

            <h4>⚠️ Lỗi phổ biến:</h4>
            <p>Nhiều công ty đối xử với quyết định Type 2 như Type 1, dẫn đến:</p>
            <ul>
                <li>❌ Quyết định chậm chạp</li>
                <li>❌ Mất cơ hội</li>
                <li>❌ Nhân viên không dám quyết định</li>
            </ul>

            <h4>✅ Hỏi trước khi quyết định:</h4>
            <ol>
                <li>Nếu sai, có thể sửa không?</li>
                <li>Chi phí đảo ngược là bao nhiêu?</li>
                <li>Mất bao lâu để biết đúng/sai?</li>
            </ol>
        `,
        advanced: `
            <h4>🔧 Real Options Thinking:</h4>
            <p>Đôi khi có thể biến Type 1 thành Type 2:</p>
            <ul>
                <li>Pilot project trước khi triển khai toàn bộ</li>
                <li>MVP trước khi xây sản phẩm hoàn chỉnh</li>
                <li>Contract có điều khoản thoát</li>
            </ul>
        `
    }
};
