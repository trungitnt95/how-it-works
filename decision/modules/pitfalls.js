// ==================== DECISION PITFALLS MODULE ====================
// Các bẫy và vấn đề khi ra quyết định

const decisionPitfallsData = {
    'analysis-paralysis': {
        icon: '🔄',
        title: 'Analysis Paralysis',
        subtitle: 'Tê liệt vì phân tích',
        order: 25,
        category: 'pitfalls',
        connections: ['status-quo-bias', 'overconfidence', 'decision-fatigue'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> Phân tích quá nhiều đến mức KHÔNG THỂ quyết định. Cứ nghiên cứu thêm, tìm thêm thông tin mà không bao giờ hành động.</p>
            <div class="paralysis-visual">
                <div class="cycle">
                    <div class="cycle-step">Nghiên cứu thêm</div>
                    <div class="arrow-right">→</div>
                    <div class="cycle-step">Tìm thêm lựa chọn</div>
                    <div class="arrow-down">↓</div>
                    <div class="cycle-step">So sánh thêm</div>
                    <div class="arrow-left">←</div>
                    <div class="cycle-step">Vẫn không chắc</div>
                </div>
                <p class="result">🔄 Vòng lặp vô tận - Không bao giờ quyết định!</p>
            </div>
        `,
        detail: `
            <h4>📝 Dấu hiệu bạn đang bị Analysis Paralysis:</h4>
            <ul>
                <li>📊 Đã nghiên cứu nhiều tuần/tháng nhưng vẫn "cần thêm thông tin"</li>
                <li>📋 Spreadsheet so sánh có hàng chục tiêu chí</li>
                <li>❓ Luôn có câu hỏi mới xuất hiện</li>
                <li>😰 Sợ quyết định sai nên không dám quyết định</li>
                <li>⏰ Deadline bị lỡ vì "chưa sẵn sàng"</li>
            </ul>

            <h4>🧠 Nguyên nhân:</h4>
            <ul>
                <li><strong>Perfectionism:</strong> Muốn quyết định "hoàn hảo"</li>
                <li><strong>Fear of regret:</strong> Sợ hối tiếc</li>
                <li><strong>Information overload:</strong> Quá nhiều lựa chọn/thông tin</li>
                <li><strong>Low confidence:</strong> Thiếu tự tin vào bản thân</li>
            </ul>

            <h4>🛡️ Cách thoát khỏi:</h4>
            <ul>
                <li>✅ <strong>Đặt deadline:</strong> "Tôi sẽ quyết định trước ngày X"</li>
                <li>✅ <strong>Good enough:</strong> Tìm lựa chọn "đủ tốt", không cần "tốt nhất"</li>
                <li>✅ <strong>Limit options:</strong> Chỉ xét tối đa 3-5 lựa chọn</li>
                <li>✅ <strong>Two-way door:</strong> Nhớ rằng nhiều quyết định có thể đảo ngược</li>
                <li>✅ <strong>Cost of inaction:</strong> Tính chi phí của việc KHÔNG quyết định</li>
            </ul>
        `,
        advanced: `
            <h4>💡 Satisficing vs Maximizing:</h4>
            <p>Herbert Simon đề xuất "satisfice" (satisfy + suffice):</p>
            <ul>
                <li><strong>Maximizer:</strong> Tìm lựa chọn TỐT NHẤT → Stress, chậm, thường không hạnh phúc hơn</li>
                <li><strong>Satisficer:</strong> Tìm lựa chọn ĐỦ TỐT → Nhanh hơn, ít stress, thường hạnh phúc hơn</li>
            </ul>

            <h4>📊 Nghiên cứu:</h4>
            <p>Barry Schwartz trong "Paradox of Choice" cho thấy:</p>
            <ul>
                <li>Nhiều lựa chọn hơn ≠ Hạnh phúc hơn</li>
                <li>Maximizers có nhiều regret hơn satisficers</li>
                <li>Giới hạn lựa chọn thường tốt hơn</li>
            </ul>
        `
    },

    'decision-fatigue': {
        icon: '😴',
        title: 'Decision Fatigue',
        subtitle: 'Mệt mỏi quyết định',
        order: 26,
        category: 'pitfalls',
        connections: ['analysis-paralysis', 'status-quo-bias'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> Sau khi ra nhiều quyết định, chất lượng quyết định GIẢM dần. Não bộ "hết năng lượng" để suy nghĩ tốt.</p>
            <div class="fatigue-visual">
                <div class="energy-bar">
                    <div class="bar morning">🌅 Sáng - Năng lượng cao</div>
                    <div class="bar afternoon">☀️ Chiều - Giảm dần</div>
                    <div class="bar evening">🌙 Tối - Cạn kiệt</div>
                </div>
            </div>
            <p class="warning">⚠️ Quyết định quan trọng vào cuối ngày thường kém hơn!</p>
        `,
        detail: `
            <h4>📊 Nghiên cứu thực tế:</h4>
            <div class="research-box">
                <h5>Nghiên cứu về Thẩm phán (Danziger et al.)</h5>
                <p>Phân tích 1,112 quyết định ân xá của thẩm phán Israel:</p>
                <ul>
                    <li>Đầu ngày: 65% được ân xá</li>
                    <li>Trước bữa trưa: Gần 0% được ân xá</li>
                    <li>Sau bữa trưa: Quay lại 65%</li>
                </ul>
                <p class="insight">→ Thẩm phán mệt mỏi chọn lựa chọn MẶC ĐỊNH (từ chối ân xá)</p>
            </div>

            <h4>🧠 Biểu hiện của Decision Fatigue:</h4>
            <ul>
                <li>😤 Dễ cáu gắt, thiếu kiên nhẫn</li>
                <li>🛒 Mua sắm bốc đồng</li>
                <li>🔄 Chọn mặc định hoặc không thay đổi</li>
                <li>⏰ Trì hoãn quyết định</li>
                <li>❌ Ra quyết định tồi hoặc impulsive</li>
            </ul>

            <h4>🛡️ Cách phòng tránh:</h4>
            <ul>
                <li>✅ <strong>Morning decisions:</strong> Quyết định quan trọng vào sáng sớm</li>
                <li>✅ <strong>Reduce decisions:</strong> Tự động hóa quyết định nhỏ (ăn gì, mặc gì)</li>
                <li>✅ <strong>Take breaks:</strong> Nghỉ ngơi trước khi quyết định lớn</li>
                <li>✅ <strong>Eat something:</strong> Não cần glucose để hoạt động</li>
                <li>✅ <strong>Batch decisions:</strong> Gộp quyết định tương tự</li>
            </ul>
        `,
        advanced: `
            <h4>💼 Các CEO nổi tiếng và Decision Fatigue:</h4>
            <ul>
                <li><strong>Steve Jobs:</strong> Luôn mặc cùng một kiểu quần áo (áo cổ lọ đen)</li>
                <li><strong>Mark Zuckerberg:</strong> Áo T-shirt xám giống nhau</li>
                <li><strong>Barack Obama:</strong> Chỉ mặc suit xanh hoặc xám</li>
            </ul>
            <p>→ Giảm quyết định nhỏ = Giữ năng lượng cho quyết định lớn</p>

            <h4>🔧 Decision Diet:</h4>
            <ol>
                <li>Audit: Liệt kê tất cả quyết định trong ngày</li>
                <li>Eliminate: Bỏ quyết định không cần thiết</li>
                <li>Automate: Tự động hóa quyết định lặp lại</li>
                <li>Delegate: Giao quyết định cho người khác</li>
            </ol>
        `
    },

    'groupthink': {
        icon: '🐑',
        title: 'Groupthink',
        subtitle: 'Tư duy bầy đàn',
        order: 27,
        category: 'pitfalls',
        connections: ['confirmation-bias', 'overconfidence'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> Khi nhóm ưu tiên SỰ ĐỒNG THUẬN hơn là ĐƯA RA QUYẾT ĐỊNH TỐT. Không ai dám phản đối vì sợ phá vỡ hòa khí.</p>
            <div class="groupthink-visual">
                <div class="group-circle">
                    <span>👤</span><span>👤</span><span>👤</span>
                    <span>👤</span><span class="leader">👑</span><span>👤</span>
                    <span>👤</span><span>👤</span><span>👤</span>
                </div>
                <p class="group-says">"Chúng ta đều đồng ý, đúng không?"</p>
                <p class="silent-thought">💭 (Thực ra tôi không đồng ý, nhưng...)</p>
            </div>
        `,
        detail: `
            <h4>📊 Ví dụ lịch sử:</h4>
            <div class="example-box">
                <h5>🚀 Thảm họa Challenger (1986)</h5>
                <p>Kỹ sư NASA biết O-ring có thể fail ở nhiệt độ thấp, nhưng:</p>
                <ul>
                    <li>Áp lực phóng đúng lịch</li>
                    <li>Không ai muốn là "người phá đám"</li>
                    <li>Lãnh đạo đã quyết định → không ai phản đối</li>
                </ul>
                <p class="result">→ 7 người thiệt mạng vì quyết định tồi</p>
            </div>

            <h4>📝 8 triệu chứng của Groupthink (Irving Janis):</h4>
            <ol>
                <li><strong>Illusion of invulnerability:</strong> "Chúng ta không thể sai"</li>
                <li><strong>Collective rationalization:</strong> Bỏ qua warning signs</li>
                <li><strong>Belief in inherent morality:</strong> "Chúng ta là người tốt"</li>
                <li><strong>Stereotyping outsiders:</strong> "Họ không hiểu"</li>
                <li><strong>Pressure on dissenters:</strong> Ép người phản đối im lặng</li>
                <li><strong>Self-censorship:</strong> Tự kiểm duyệt ý kiến</li>
                <li><strong>Illusion of unanimity:</strong> Im lặng = Đồng ý</li>
                <li><strong>Mind guards:</strong> Ngăn thông tin trái chiều</li>
            </ol>

            <h4>🛡️ Cách phòng tránh:</h4>
            <ul>
                <li>✅ <strong>Devil's advocate:</strong> Chỉ định người phản biện</li>
                <li>✅ <strong>Anonymous input:</strong> Thu thập ý kiến ẩn danh trước</li>
                <li>✅ <strong>Leader speaks last:</strong> Lãnh đạo nói cuối cùng</li>
                <li>✅ <strong>Invite outsiders:</strong> Mời người ngoài đánh giá</li>
                <li>✅ <strong>Second chance meeting:</strong> Họp lại sau 1-2 ngày</li>
            </ul>
        `,
        advanced: `
            <h4>💼 Psychological Safety (Amy Edmondson):</h4>
            <p>Để tránh groupthink, cần tạo môi trường an toàn tâm lý:</p>
            <ul>
                <li>OK khi nói "Tôi không biết"</li>
                <li>OK khi mắc sai lầm</li>
                <li>OK khi không đồng ý với sếp</li>
                <li>Thưởng cho việc đặt câu hỏi</li>
            </ul>

            <h4>🎯 Các công ty tốt làm gì:</h4>
            <ul>
                <li><strong>Amazon:</strong> Mọi người viết memo trước cuộc họp, đọc im lặng 20 phút đầu</li>
                <li><strong>Bridgewater:</strong> Radical transparency, idea meritocracy</li>
                <li><strong>Pixar:</strong> Braintrust - nhóm phản biện thẳng thắn</li>
            </ul>
        `
    },

    'emotional-decisions': {
        icon: '💔',
        title: 'Emotional Decisions',
        subtitle: 'Quyết định theo cảm xúc',
        order: 28,
        category: 'pitfalls',
        connections: ['loss-aversion', 'system-12'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> Ra quyết định khi đang có cảm xúc mạnh (giận, sợ, phấn khích) thường dẫn đến hối tiếc.</p>
            <div class="emotion-visual">
                <div class="emotion-state angry">
                    <span class="emoji">😠</span>
                    <p>Giận dữ</p>
                    <p class="result">→ Quyết định trả thù</p>
                </div>
                <div class="emotion-state scared">
                    <span class="emoji">😰</span>
                    <p>Sợ hãi</p>
                    <p class="result">→ Tránh né, không hành động</p>
                </div>
                <div class="emotion-state excited">
                    <span class="emoji">🤩</span>
                    <p>Phấn khích</p>
                    <p class="result">→ Quyết định liều lĩnh</p>
                </div>
            </div>
        `,
        detail: `
            <h4>📝 Các cảm xúc và tác động:</h4>
            <table class="emotion-table">
                <tr>
                    <th>Cảm xúc</th>
                    <th>Tác động đến quyết định</th>
                </tr>
                <tr>
                    <td>😠 Giận dữ</td>
                    <td>Chấp nhận rủi ro cao, muốn trừng phạt</td>
                </tr>
                <tr>
                    <td>😰 Sợ hãi</td>
                    <td>Tránh rủi ro, chọn an toàn quá mức</td>
                </tr>
                <tr>
                    <td>😢 Buồn</td>
                    <td>Muốn thay đổi, ít kiên nhẫn</td>
                </tr>
                <tr>
                    <td>🤩 Phấn khích</td>
                    <td>Đánh giá thấp rủi ro, quá lạc quan</td>
                </tr>
                <tr>
                    <td>😌 Bình tĩnh</td>
                    <td>Quyết định cân bằng, hợp lý hơn</td>
                </tr>
            </table>

            <h4>⚠️ Khi nào cảm xúc có ích:</h4>
            <p>Cảm xúc không phải lúc nào cũng xấu!</p>
            <ul>
                <li>✅ Giúp đánh giá nhanh tình huống nguy hiểm</li>
                <li>✅ Phản ánh giá trị thực sự của bạn</li>
                <li>✅ Motivation để hành động</li>
            </ul>
            <p>Nhưng: Đừng để cảm xúc là YẾU TỐ DUY NHẤT!</p>

            <h4>🛡️ Kỹ thuật quản lý cảm xúc:</h4>
            <ul>
                <li>✅ <strong>HALT:</strong> Không quyết định khi Hungry, Angry, Lonely, Tired</li>
                <li>✅ <strong>Sleep on it:</strong> Đợi 24h trước quyết định lớn</li>
                <li>✅ <strong>10/10/10:</strong> Xét perspective dài hạn</li>
                <li>✅ <strong>Viết ra:</strong> Writing giúp xử lý cảm xúc</li>
                <li>✅ <strong>Hỏi người khác:</strong> Góc nhìn khách quan</li>
            </ul>
        `,
        advanced: `
            <h4>🧠 Hot vs Cold States:</h4>
            <p>Empathy gap: Khi "lạnh" (bình tĩnh), ta không thể tưởng tượng mình sẽ quyết định thế nào khi "nóng" (cảm xúc mạnh), và ngược lại.</p>
            
            <h4>💡 Ulysses Contract:</h4>
            <p>Đặt ra quy tắc khi bình tĩnh để ngăn quyết định tồi khi cảm xúc:</p>
            <ul>
                <li>"Nếu cổ phiếu giảm 20%, tôi sẽ bán" (đặt trước)</li>
                <li>"Không gửi email khi đang giận" (quy tắc cá nhân)</li>
                <li>"Đợi 48h trước khi từ chức" (cooling-off period)</li>
            </ul>
        `
    },

    'information-overload': {
        icon: '📚',
        title: 'Information Overload',
        subtitle: 'Quá tải thông tin',
        order: 29,
        category: 'pitfalls',
        connections: ['analysis-paralysis', 'decision-fatigue'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> Có QUÁ NHIỀU thông tin khiến khó xử lý và quyết định tệ hơn thay vì tốt hơn.</p>
            <div class="overload-visual">
                <div class="info-curve">
                    <div class="axis-y">Chất lượng quyết định ↑</div>
                    <div class="curve">
                        <span class="point low">Ít thông tin<br>😟 Thiếu</span>
                        <span class="point optimal">Vừa đủ<br>😊 Tối ưu</span>
                        <span class="point high">Quá nhiều<br>😵 Quá tải</span>
                    </div>
                    <div class="axis-x">→ Lượng thông tin</div>
                </div>
            </div>
        `,
        detail: `
            <h4>📊 George Miller's Magic Number:</h4>
            <p>Bộ nhớ làm việc của não chỉ xử lý được khoảng <strong>7 ± 2 items</strong> cùng lúc.</p>
            
            <h4>📝 Biểu hiện Information Overload:</h4>
            <ul>
                <li>📱 Mở 50 tabs trình duyệt để "nghiên cứu"</li>
                <li>📊 Spreadsheet so sánh quá phức tạp</li>
                <li>🤯 Cảm thấy overwhelmed, không biết bắt đầu từ đâu</li>
                <li>⏰ Dành quá nhiều thời gian thu thập, ít thời gian phân tích</li>
                <li>🔄 Thông tin mâu thuẫn nhau</li>
            </ul>

            <h4>🛡️ Cách xử lý:</h4>
            <ul>
                <li>✅ <strong>Define first:</strong> Biết rõ CẦN thông tin gì TRƯỚC KHI tìm</li>
                <li>✅ <strong>Time-box:</strong> Giới hạn thời gian nghiên cứu</li>
                <li>✅ <strong>Trusted sources:</strong> Chỉ dùng 2-3 nguồn đáng tin</li>
                <li>✅ <strong>Summarize:</strong> Tóm tắt lại thông tin quan trọng</li>
                <li>✅ <strong>Good enough:</strong> 80% thông tin đủ cho 80% quyết định</li>
            </ul>

            <div class="tip-box">
                <strong>💡 Quy tắc 37% (Optimal Stopping):</strong>
                <p>Khi tìm kiếm (nhà, việc, bạn đời...), dành 37% thời gian/lựa chọn đầu để "thăm dò", 
                sau đó chọn lựa chọn đầu tiên TỐT HƠN tất cả đã thấy.</p>
            </div>
        `,
        advanced: `
            <h4>📖 "When" by Daniel Pink:</h4>
            <p>Nghiên cứu cho thấy doctors chẩn đoán chính xác HƠN khi có ÍT thông tin hơn, 
            vì họ tập trung vào signals quan trọng thay vì bị distracted bởi noise.</p>

            <h4>🔧 Eisenhower Matrix cho thông tin:</h4>
            <table class="matrix-table">
                <tr>
                    <th></th>
                    <th>Quan trọng</th>
                    <th>Không quan trọng</th>
                </tr>
                <tr>
                    <th>Cần ngay</th>
                    <td>✅ Xử lý ngay</td>
                    <td>🗑️ Delegate/Bỏ qua</td>
                </tr>
                <tr>
                    <th>Không gấp</th>
                    <td>📅 Schedule</td>
                    <td>🗑️ Bỏ qua</td>
                </tr>
            </table>
        `
    }
};
