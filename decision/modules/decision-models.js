// ==================== DECISION MODELS MODULE ====================
// Các mô hình ra quyết định phổ biến và hiệu quả

const decisionModelsData = {
    'seven-steps': {
        icon: '🪜',
        title: '7 Bước Ra Quyết Định',
        order: 1,
        category: 'frameworks',
        connections: ['gather-info', 'alternatives', 'evaluation'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> Quy trình 7 bước giúp bạn ra quyết định một cách có hệ thống và logic.</p>
            <div class="steps-visual">
                <div class="step-item">1️⃣ Xác định vấn đề</div>
                <div class="step-arrow">↓</div>
                <div class="step-item">2️⃣ Thu thập thông tin</div>
                <div class="step-arrow">↓</div>
                <div class="step-item">3️⃣ Xác định các lựa chọn</div>
                <div class="step-arrow">↓</div>
                <div class="step-item">4️⃣ Cân nhắc bằng chứng</div>
                <div class="step-arrow">↓</div>
                <div class="step-item">5️⃣ Chọn phương án</div>
                <div class="step-arrow">↓</div>
                <div class="step-item">6️⃣ Hành động</div>
                <div class="step-arrow">↓</div>
                <div class="step-item">7️⃣ Đánh giá kết quả</div>
            </div>
        `,
        detail: `
            <h4>🎯 Chi tiết 7 bước:</h4>
            
            <div class="step-detail">
                <h5>1️⃣ Xác định vấn đề cần quyết định</h5>
                <ul>
                    <li>Vấn đề cần giải quyết là gì?</li>
                    <li>Mục tiêu bạn muốn đạt được?</li>
                    <li>Làm sao đo lường thành công?</li>
                </ul>
                <div class="example-box">
                    <strong>Ví dụ:</strong> "Tôi nên học ngành gì ở đại học?"<br>
                    Mục tiêu: Tìm ngành học phù hợp với sở thích và có cơ hội việc làm tốt.
                </div>
            </div>

            <div class="step-detail">
                <h5>2️⃣ Thu thập thông tin liên quan</h5>
                <ul>
                    <li>Tìm dữ liệu từ nhiều nguồn khác nhau</li>
                    <li>Hỏi ý kiến người có kinh nghiệm</li>
                    <li>Nghiên cứu các trường hợp tương tự</li>
                </ul>
            </div>

            <div class="step-detail">
                <h5>3️⃣ Xác định các phương án thay thế</h5>
                <ul>
                    <li>Liệt kê TẤT CẢ các lựa chọn có thể</li>
                    <li>Không loại bỏ sớm bất kỳ ý tưởng nào</li>
                    <li>Sáng tạo - đôi khi giải pháp tốt nhất là kết hợp nhiều lựa chọn</li>
                </ul>
            </div>

            <div class="step-detail">
                <h5>4️⃣ Cân nhắc bằng chứng</h5>
                <ul>
                    <li>Liệt kê ưu/nhược điểm của từng phương án</li>
                    <li>Đánh giá rủi ro và phần thưởng</li>
                    <li>Xem xét tác động đến các bên liên quan</li>
                </ul>
            </div>

            <div class="step-detail">
                <h5>5️⃣ Chọn phương án tốt nhất</h5>
                <ul>
                    <li>Dựa trên phân tích, chọn lựa chọn tối ưu</li>
                    <li>Đôi khi có thể kết hợp nhiều phương án</li>
                    <li>Tin vào quá trình của bạn</li>
                </ul>
            </div>

            <div class="step-detail">
                <h5>6️⃣ Thực hiện hành động</h5>
                <ul>
                    <li>Lập kế hoạch thực hiện chi tiết</li>
                    <li>Xác định các bước cụ thể</li>
                    <li>Bắt đầu ngay!</li>
                </ul>
            </div>

            <div class="step-detail">
                <h5>7️⃣ Đánh giá quyết định</h5>
                <ul>
                    <li>Sau một thời gian, đánh giá kết quả</li>
                    <li>Quyết định có giải quyết được vấn đề không?</li>
                    <li>Học hỏi từ kết quả để cải thiện</li>
                </ul>
            </div>
        `,
        advanced: `
            <h4>🔧 Tips nâng cao:</h4>
            <ul>
                <li><strong>Đặt deadline:</strong> Tránh phân tích quá lâu (analysis paralysis)</li>
                <li><strong>Dự phòng:</strong> Luôn có Plan B, C nếu Plan A thất bại</li>
                <li><strong>Review định kỳ:</strong> Quyết định tốt hôm nay có thể cần thay đổi sau này</li>
                <li><strong>Ghi chép:</strong> Viết ra giúp suy nghĩ rõ ràng hơn</li>
            </ul>

            <div class="warning-box">
                <strong>⚠️ Lưu ý:</strong> Không phải mọi quyết định đều cần 7 bước đầy đủ. 
                Với quyết định đơn giản, có thể rút gọn. Với quyết định quan trọng, 
                hãy thực hiện đầy đủ và cẩn thận.
            </div>
        `
    },

    'gofer-model': {
        icon: '🎯',
        title: 'Mô hình GOFER',
        order: 2,
        category: 'frameworks',
        connections: ['seven-steps', 'evaluation'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> GOFER là 5 bước ra quyết định được phát triển bởi các nhà tâm lý học, đặc biệt hiệu quả cho người mới học.</p>
            <div class="acronym-box">
                <div class="acronym-item"><span class="letter">G</span> = Goals (Mục tiêu)</div>
                <div class="acronym-item"><span class="letter">O</span> = Options (Các lựa chọn)</div>
                <div class="acronym-item"><span class="letter">F</span> = Facts (Tìm hiểu thực tế)</div>
                <div class="acronym-item"><span class="letter">E</span> = Effects (Đánh giá hậu quả)</div>
                <div class="acronym-item"><span class="letter">R</span> = Review (Xem xét & thực hiện)</div>
            </div>
        `,
        detail: `
            <h4>📝 Chi tiết từng bước GOFER:</h4>
            
            <div class="gofer-step">
                <h5>🎯 G - Goals Clarification (Làm rõ mục tiêu)</h5>
                <p>Xác định rõ bạn muốn đạt được điều gì.</p>
                <div class="example-box">
                    <strong>Hỏi bản thân:</strong><br>
                    • Điều quan trọng nhất với tôi là gì?<br>
                    • Giá trị nào tôi muốn bảo vệ?<br>
                    • Kết quả lý tưởng trông như thế nào?
                </div>
            </div>

            <div class="gofer-step">
                <h5>💡 O - Options Generation (Tạo các lựa chọn)</h5>
                <p>Nghĩ ra nhiều phương án khác nhau.</p>
                <ul>
                    <li>Brainstorm tự do, không đánh giá ngay</li>
                    <li>Hỏi ý kiến người khác</li>
                    <li>Nghĩ cả những lựa chọn không thông thường</li>
                </ul>
            </div>

            <div class="gofer-step">
                <h5>🔍 F - Facts Finding (Tìm hiểu thực tế)</h5>
                <p>Thu thập thông tin về mỗi lựa chọn.</p>
                <ul>
                    <li>Tìm kiếm dữ liệu khách quan</li>
                    <li>Hỏi chuyên gia hoặc người có kinh nghiệm</li>
                    <li>Xác minh thông tin từ nhiều nguồn</li>
                </ul>
            </div>

            <div class="gofer-step">
                <h5>⚖️ E - Effects Consideration (Cân nhắc hậu quả)</h5>
                <p>Đánh giá tác động tích cực và tiêu cực của mỗi lựa chọn.</p>
                <table class="effects-table">
                    <tr>
                        <th>Lựa chọn</th>
                        <th>Tác động tích cực ✅</th>
                        <th>Tác động tiêu cực ❌</th>
                    </tr>
                    <tr>
                        <td>Phương án A</td>
                        <td>...</td>
                        <td>...</td>
                    </tr>
                    <tr>
                        <td>Phương án B</td>
                        <td>...</td>
                        <td>...</td>
                    </tr>
                </table>
            </div>

            <div class="gofer-step">
                <h5>✅ R - Review and Implementation (Xem xét & thực hiện)</h5>
                <p>Quyết định và lập kế hoạch hành động.</p>
                <ul>
                    <li>Chọn phương án tốt nhất dựa trên phân tích</li>
                    <li>Lập kế hoạch thực hiện cụ thể</li>
                    <li>Xác định cách đánh giá kết quả</li>
                </ul>
            </div>
        `,
        advanced: `
            <h4>💡 Khi nào dùng GOFER:</h4>
            <ul>
                <li>Quyết định cá nhân quan trọng (học tập, nghề nghiệp)</li>
                <li>Khi cần một framework đơn giản, dễ nhớ</li>
                <li>Khi dạy người khác cách ra quyết định</li>
            </ul>
            <div class="tip-box">
                <strong>💡 Mẹo:</strong> Viết GOFER trên giấy và điền từng phần. 
                Việc viết ra giúp suy nghĩ rõ ràng hơn.
            </div>
        `
    },

    'decide-model': {
        icon: '📋',
        title: 'Mô hình DECIDE',
        order: 3,
        category: 'frameworks',
        connections: ['gofer-model', 'seven-steps'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> DECIDE là mô hình 6 bước, thường dùng trong y tế và quản lý, giúp ra quyết định có cấu trúc.</p>
            <div class="acronym-box">
                <div class="acronym-item"><span class="letter">D</span> = Define (Xác định vấn đề)</div>
                <div class="acronym-item"><span class="letter">E</span> = Establish (Thiết lập tiêu chí)</div>
                <div class="acronym-item"><span class="letter">C</span> = Consider (Xem xét lựa chọn)</div>
                <div class="acronym-item"><span class="letter">I</span> = Identify (Xác định lựa chọn tốt nhất)</div>
                <div class="acronym-item"><span class="letter">D</span> = Develop (Phát triển kế hoạch)</div>
                <div class="acronym-item"><span class="letter">E</span> = Evaluate (Đánh giá kết quả)</div>
            </div>
        `,
        detail: `
            <h4>📝 Chi tiết mô hình DECIDE:</h4>

            <div class="decide-step">
                <h5>🔍 D - Define the Problem (Xác định vấn đề)</h5>
                <p>Định nghĩa rõ ràng vấn đề cần giải quyết.</p>
                <div class="example-box">
                    ❌ "Tôi cần một công việc mới" (quá chung chung)<br>
                    ✅ "Tôi cần công việc lương cao hơn 20%, gần nhà hơn, có cơ hội phát triển" (cụ thể)
                </div>
            </div>

            <div class="decide-step">
                <h5>📋 E - Establish Criteria (Thiết lập tiêu chí)</h5>
                <p>Xác định các yếu tố quan trọng để đánh giá lựa chọn.</p>
                <ul>
                    <li>Tiêu chí bắt buộc (must-have)</li>
                    <li>Tiêu chí mong muốn (nice-to-have)</li>
                    <li>Sắp xếp theo thứ tự ưu tiên</li>
                </ul>
            </div>

            <div class="decide-step">
                <h5>💡 C - Consider Alternatives (Xem xét các lựa chọn)</h5>
                <p>Liệt kê tất cả các phương án có thể.</p>
            </div>

            <div class="decide-step">
                <h5>🎯 I - Identify Best Alternative (Xác định phương án tốt nhất)</h5>
                <p>So sánh các phương án với tiêu chí đã đặt.</p>
            </div>

            <div class="decide-step">
                <h5>📝 D - Develop & Implement Plan (Phát triển kế hoạch)</h5>
                <p>Lập kế hoạch chi tiết và bắt đầu thực hiện.</p>
            </div>

            <div class="decide-step">
                <h5>📊 E - Evaluate & Monitor (Đánh giá & Theo dõi)</h5>
                <p>Theo dõi kết quả và điều chỉnh khi cần.</p>
            </div>
        `,
        advanced: `
            <h4>💼 DECIDE trong thực tế:</h4>
            <p>Mô hình DECIDE đặc biệt hữu ích cho:</p>
            <ul>
                <li>Quyết định kinh doanh</li>
                <li>Quyết định y tế</li>
                <li>Quyết định nhóm/tổ chức</li>
            </ul>
        `
    },

    'rational-model': {
        icon: '🧮',
        title: 'Mô hình Lý Trí',
        order: 4,
        category: 'frameworks',
        connections: ['intuitive-model', 'bounded-rationality'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> Ra quyết định dựa trên logic, dữ liệu và phân tích khách quan, không bị ảnh hưởng bởi cảm xúc.</p>
            <div class="model-diagram">
                <div class="model-step">Thu thập dữ liệu 📊</div>
                <div class="arrow">→</div>
                <div class="model-step">Phân tích logic 🧠</div>
                <div class="arrow">→</div>
                <div class="model-step">Tối ưu hóa 📈</div>
                <div class="arrow">→</div>
                <div class="model-step">Quyết định ✅</div>
            </div>
        `,
        detail: `
            <h4>📐 Đặc điểm của mô hình lý trí:</h4>
            <table class="comparison-table">
                <tr>
                    <th>Yếu tố</th>
                    <th>Mô tả</th>
                </tr>
                <tr>
                    <td>Mục tiêu</td>
                    <td>Tìm giải pháp TỐI ƯU nhất</td>
                </tr>
                <tr>
                    <td>Quy trình</td>
                    <td>Tuần tự, có hệ thống</td>
                </tr>
                <tr>
                    <td>Dựa vào</td>
                    <td>Dữ liệu, bằng chứng khách quan</td>
                </tr>
                <tr>
                    <td>Cảm xúc</td>
                    <td>Loại bỏ hoàn toàn</td>
                </tr>
            </table>

            <h4>✅ Ưu điểm:</h4>
            <ul>
                <li>Khách quan, ít thiên kiến</li>
                <li>Có thể giải thích và bảo vệ quyết định</li>
                <li>Phù hợp cho quyết định quan trọng</li>
            </ul>

            <h4>❌ Nhược điểm:</h4>
            <ul>
                <li>Tốn thời gian</li>
                <li>Không phải lúc nào cũng có đủ dữ liệu</li>
                <li>Bỏ qua trực giác có thể có giá trị</li>
                <li>Con người không hoàn toàn lý trí (bounded rationality)</li>
            </ul>
        `,
        advanced: `
            <h4>🎓 Bounded Rationality (Lý trí giới hạn):</h4>
            <p>Herbert Simon (Nobel Kinh tế) chỉ ra rằng con người không bao giờ hoàn toàn lý trí vì:</p>
            <ul>
                <li>Thông tin có hạn</li>
                <li>Thời gian có hạn</li>
                <li>Khả năng xử lý não bộ có hạn</li>
            </ul>
            <p>→ Do đó, con người thường "satisfice" (chọn đủ tốt) thay vì "optimize" (chọn tốt nhất).</p>
        `
    },

    'intuitive-model': {
        icon: '💫',
        title: 'Mô hình Trực Giác',
        order: 5,
        category: 'frameworks',
        connections: ['rational-model', 'system-12'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> Ra quyết định dựa trên "gut feeling" - cảm nhận bên trong, kinh nghiệm tích lũy và nhận dạng mẫu vô thức.</p>
            <div class="intuition-visual">
                <div class="intuition-item">
                    <span class="big-icon">⚡</span>
                    <p>Nhanh chóng</p>
                </div>
                <div class="intuition-item">
                    <span class="big-icon">🧠</span>
                    <p>Dựa vào kinh nghiệm</p>
                </div>
                <div class="intuition-item">
                    <span class="big-icon">💭</span>
                    <p>Không cần phân tích</p>
                </div>
            </div>
        `,
        detail: `
            <h4>🔍 Khi nào trực giác hoạt động tốt:</h4>
            <ul>
                <li>✅ Bạn có nhiều kinh nghiệm trong lĩnh vực đó</li>
                <li>✅ Môi trường có quy luật nhất định</li>
                <li>✅ Cần quyết định nhanh</li>
                <li>✅ Vấn đề quen thuộc</li>
            </ul>

            <h4>🚫 Khi nào KHÔNG nên dựa vào trực giác:</h4>
            <ul>
                <li>❌ Lĩnh vực bạn ít kinh nghiệm</li>
                <li>❌ Môi trường mới, không quen thuộc</li>
                <li>❌ Quyết định có hậu quả lớn, khó đảo ngược</li>
                <li>❌ Khi đang có cảm xúc mạnh</li>
            </ul>

            <div class="example-box">
                <strong>Ví dụ trực giác tốt:</strong><br>
                Một bác sĩ cấp cứu có 20 năm kinh nghiệm nhìn bệnh nhân và "biết" ngay có vấn đề nghiêm trọng - đây là trực giác đáng tin dựa trên hàng nghìn ca đã gặp.
            </div>

            <div class="warning-box">
                <strong>Ví dụ trực giác xấu:</strong><br>
                "Tôi cảm thấy con số 7 may mắn nên sẽ đặt cược tất cả vào số 7" - đây là ảo tưởng, không phải trực giác đáng tin.
            </div>
        `,
        advanced: `
            <h4>🎓 Naturalistic Decision Making:</h4>
            <p>Nghiên cứu cho thấy các chuyên gia (lính cứu hỏa, phi công, bác sĩ) thường:</p>
            <ul>
                <li>Nhận dạng tình huống từ kinh nghiệm</li>
                <li>Không so sánh nhiều lựa chọn</li>
                <li>Chọn phương án đầu tiên "khả thi"</li>
                <li>Điều chỉnh trong quá trình thực hiện</li>
            </ul>
            <p>→ Gọi là Recognition-Primed Decision (RPD) - Quyết định dựa trên nhận dạng.</p>
        `
    },

    'system-12': {
        icon: '🧠',
        title: 'System 1 & System 2',
        order: 6,
        category: 'frameworks',
        connections: ['intuitive-model', 'rational-model', 'cognitive-biases'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> Não bộ có 2 "hệ thống" suy nghĩ khác nhau (theo Daniel Kahneman, Nobel Kinh tế).</p>
            <div class="dual-system">
                <div class="system system-1">
                    <h4>⚡ System 1</h4>
                    <p>Nhanh, tự động, trực giác</p>
                    <ul>
                        <li>Không cần nỗ lực</li>
                        <li>Hoạt động vô thức</li>
                        <li>Dễ mắc lỗi</li>
                    </ul>
                </div>
                <div class="system system-2">
                    <h4>🧮 System 2</h4>
                    <p>Chậm, có chủ đích, logic</p>
                    <ul>
                        <li>Cần nỗ lực</li>
                        <li>Có ý thức</li>
                        <li>Chính xác hơn</li>
                    </ul>
                </div>
            </div>
        `,
        detail: `
            <h4>⚡ System 1 - Suy nghĩ nhanh:</h4>
            <table class="system-table">
                <tr>
                    <th>Đặc điểm</th>
                    <th>Ví dụ</th>
                </tr>
                <tr>
                    <td>Tự động</td>
                    <td>Nhận mặt người quen</td>
                </tr>
                <tr>
                    <td>Nhanh</td>
                    <td>2 + 2 = 4</td>
                </tr>
                <tr>
                    <td>Không cần nỗ lực</td>
                    <td>Lái xe quen đường</td>
                </tr>
                <tr>
                    <td>Dễ bị bias</td>
                    <td>Ấn tượng đầu tiên</td>
                </tr>
            </table>

            <h4>🧮 System 2 - Suy nghĩ chậm:</h4>
            <table class="system-table">
                <tr>
                    <th>Đặc điểm</th>
                    <th>Ví dụ</th>
                </tr>
                <tr>
                    <td>Có chủ đích</td>
                    <td>Giải bài toán phức tạp</td>
                </tr>
                <tr>
                    <td>Chậm</td>
                    <td>17 × 24 = ?</td>
                </tr>
                <tr>
                    <td>Cần tập trung</td>
                    <td>Đọc hiểu hợp đồng</td>
                </tr>
                <tr>
                    <td>Dễ "lười"</td>
                    <td>Hay giao việc cho System 1</td>
                </tr>
            </table>

            <div class="warning-box">
                <strong>⚠️ Vấn đề:</strong> System 2 hay "lười biếng" và để System 1 quyết định. 
                Đây là nguồn gốc của nhiều sai lầm và cognitive biases!
            </div>
        `,
        advanced: `
            <h4>💡 Làm sao cải thiện quyết định:</h4>
            <ol>
                <li><strong>Nhận biết:</strong> Biết khi nào đang dùng System 1</li>
                <li><strong>Slow down:</strong> Với quyết định quan trọng, bắt System 2 làm việc</li>
                <li><strong>Checklists:</strong> Dùng danh sách kiểm tra để kích hoạt System 2</li>
                <li><strong>Đợi 24h:</strong> Để quyết định quan trọng "ngủ qua đêm"</li>
            </ol>
        `
    },

    'creative-model': {
        icon: '🎨',
        title: 'Mô hình Sáng Tạo',
        order: 7,
        category: 'frameworks',
        connections: ['intuitive-model', 'alternatives'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> Kết hợp thu thập thông tin + để não "ủ" vấn đề + chờ giải pháp sáng tạo xuất hiện.</p>
            <div class="creative-process">
                <div class="creative-step">
                    <span class="step-icon">📚</span>
                    <p>Thu thập thông tin</p>
                </div>
                <div class="arrow">→</div>
                <div class="creative-step">
                    <span class="step-icon">🧘</span>
                    <p>Để não "ủ"</p>
                </div>
                <div class="arrow">→</div>
                <div class="creative-step">
                    <span class="step-icon">💡</span>
                    <p>Aha moment!</p>
                </div>
                <div class="arrow">→</div>
                <div class="creative-step">
                    <span class="step-icon">🔍</span>
                    <p>Kiểm tra & thực hiện</p>
                </div>
            </div>
        `,
        detail: `
            <h4>🎯 4 giai đoạn của tư duy sáng tạo (Graham Wallas):</h4>
            
            <div class="creative-phase">
                <h5>1️⃣ Preparation (Chuẩn bị)</h5>
                <p>Thu thập tất cả thông tin liên quan, nghiên cứu vấn đề kỹ lưỡng.</p>
            </div>

            <div class="creative-phase">
                <h5>2️⃣ Incubation (Ủ)</h5>
                <p>Không suy nghĩ trực tiếp về vấn đề. Làm việc khác, đi dạo, ngủ. Não bộ tiếp tục xử lý vô thức.</p>
            </div>

            <div class="creative-phase">
                <h5>3️⃣ Illumination (Soi sáng)</h5>
                <p>Khoảnh khắc "Eureka!" - giải pháp bất ngờ xuất hiện.</p>
            </div>

            <div class="creative-phase">
                <h5>4️⃣ Verification (Kiểm chứng)</h5>
                <p>Kiểm tra giải pháp có thực sự hoạt động không.</p>
            </div>

            <div class="tip-box">
                <strong>💡 Mẹo:</strong> Nhiều người có ý tưởng tốt nhất khi:
                <ul>
                    <li>Đang tắm 🚿</li>
                    <li>Đi dạo 🚶</li>
                    <li>Vừa thức dậy 😴</li>
                    <li>Làm việc không liên quan</li>
                </ul>
            </div>
        `,
        advanced: `
            <h4>🔧 Kỹ thuật kích thích sáng tạo:</h4>
            <ul>
                <li><strong>Brainstorming:</strong> Tạo nhiều ý tưởng, không đánh giá</li>
                <li><strong>Mind mapping:</strong> Vẽ sơ đồ ý tưởng</li>
                <li><strong>6 Hats:</strong> Nhìn vấn đề từ 6 góc độ khác nhau</li>
                <li><strong>SCAMPER:</strong> Substitute, Combine, Adapt, Modify, Put to other uses, Eliminate, Reverse</li>
            </ul>
        `
    }
};
