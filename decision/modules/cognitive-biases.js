// ==================== COGNITIVE BIASES MODULE ====================
// Các thiên kiến nhận thức phổ biến ảnh hưởng đến quyết định

const cognitiveBiasesData = {
    'confirmation-bias': {
        icon: '🔍',
        title: 'Confirmation Bias',
        subtitle: 'Thiên kiến xác nhận',
        order: 8,
        category: 'biases',
        connections: ['system-12', 'anchoring-bias', 'cognitive-biases'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> Xu hướng chỉ tìm kiếm và tin những thông tin ỦNG HỘ quan điểm sẵn có của bạn, bỏ qua thông tin trái ngược.</p>
            <div class="bias-visual">
                <div class="bias-example">
                    <span class="bias-icon">👤</span>
                    <p>"Tôi nghĩ X là tốt"</p>
                </div>
                <div class="arrow">→</div>
                <div class="bias-example">
                    <span class="bias-icon">🔎</span>
                    <p>Chỉ tìm bằng chứng X tốt</p>
                </div>
                <div class="arrow">→</div>
                <div class="bias-example">
                    <span class="bias-icon">✅</span>
                    <p>"Đúng rồi, X rất tốt!"</p>
                </div>
            </div>
            <div class="warning-box">
                ⚠️ Bạn không thấy toàn bộ bức tranh!
            </div>
        `,
        detail: `
            <h4>📝 Ví dụ thực tế:</h4>
            <div class="example-box">
                <strong>Mua điện thoại:</strong><br>
                • Bạn thích iPhone → chỉ đọc review khen iPhone<br>
                • Bỏ qua các bài so sánh cho thấy Android tốt hơn ở một số điểm<br>
                • Kết luận: "iPhone là tốt nhất!" (chưa chắc đúng)
            </div>

            <div class="example-box">
                <strong>Đầu tư:</strong><br>
                • Bạn đã mua cổ phiếu công ty X<br>
                • Chỉ đọc tin tốt về công ty X<br>
                • Bỏ qua các dấu hiệu cảnh báo<br>
                • Kết quả: Mất tiền vì không thấy rủi ro
            </div>

            <h4>🛡️ Cách chống lại:</h4>
            <ul>
                <li>✅ Cố tình tìm thông tin CHỐNG LẠI quan điểm của bạn</li>
                <li>✅ Hỏi ý kiến người có quan điểm khác</li>
                <li>✅ Đặt câu hỏi: "Nếu tôi sai thì sao?"</li>
                <li>✅ Tìm kiếm cả mặt tích cực VÀ tiêu cực</li>
            </ul>
        `,
        advanced: `
            <h4>🧠 Tại sao não bộ làm vậy?</h4>
            <ul>
                <li>Tiết kiệm năng lượng (không cần suy nghĩ lại)</li>
                <li>Bảo vệ ego và quan điểm đã có</li>
                <li>Tránh cognitive dissonance (khó chịu khi đối mặt với mâu thuẫn)</li>
            </ul>
            
            <h4>🔬 Thí nghiệm nổi tiếng:</h4>
            <p>Khi cho người ta đọc bài viết về án tử hình, những người ủng hộ thấy bài viết ủng hộ "thuyết phục hơn", và ngược lại - dù đọc CÙNG một bài!</p>
        `
    },

    'anchoring-bias': {
        icon: '⚓',
        title: 'Anchoring Bias',
        subtitle: 'Thiên kiến neo đậu',
        order: 9,
        category: 'biases',
        connections: ['confirmation-bias', 'framing-effect'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> Bị ảnh hưởng quá nhiều bởi thông tin ĐẦU TIÊN bạn nhận được (con số "neo"), dù thông tin đó không liên quan.</p>
            <div class="anchor-example">
                <div class="anchor-item">
                    <h5>Cửa hàng A</h5>
                    <p class="original-price">Giá gốc: 2,000,000đ</p>
                    <p class="sale-price">Giảm còn: 1,200,000đ</p>
                    <p class="feeling">Cảm giác: RẺ QUÁ! 🤑</p>
                </div>
                <div class="vs">VS</div>
                <div class="anchor-item">
                    <h5>Cửa hàng B</h5>
                    <p class="sale-price">Giá: 1,200,000đ</p>
                    <p class="feeling">Cảm giác: Bình thường 😐</p>
                </div>
            </div>
            <p class="anchor-note">👆 Cùng giá 1.2 triệu, nhưng cảm giác khác nhau!</p>
        `,
        detail: `
            <h4>📝 Ví dụ thực tế:</h4>

            <div class="example-box">
                <strong>Đàm phán lương:</strong><br>
                • Nếu họ đề nghị 15 triệu trước → bạn vui khi được 18 triệu<br>
                • Nếu bạn đề nghị 25 triệu trước → họ có thể chấp nhận 20 triệu<br>
                → Người nói trước "neo" cuộc đàm phán!
            </div>

            <div class="example-box">
                <strong>Mua nhà/xe:</strong><br>
                • Nhân viên sales luôn cho bạn thấy sản phẩm đắt nhất trước<br>
                • Sau đó giới thiệu sản phẩm "vừa túi tiền" hơn<br>
                → Bạn cảm thấy đang được deal tốt!
            </div>

            <h4>🛡️ Cách chống lại:</h4>
            <ul>
                <li>✅ Nghiên cứu GIÁ THỊ TRƯỜNG trước khi xem giá cụ thể</li>
                <li>✅ Đừng để người khác neo đầu tiên nếu có thể</li>
                <li>✅ Đặt câu hỏi: "Con số này dựa trên cơ sở gì?"</li>
                <li>✅ Xem xét nhiều nguồn thông tin</li>
            </ul>
        `,
        advanced: `
            <h4>🔬 Thí nghiệm thú vị:</h4>
            <p>Kahneman & Tversky hỏi: "Tỷ lệ % các nước châu Phi trong Liên Hợp Quốc là bao nhiêu?"</p>
            <ul>
                <li>Nhóm A quay vòng xoay được số 10 → trả lời trung bình: 25%</li>
                <li>Nhóm B quay được số 65 → trả lời trung bình: 45%</li>
            </ul>
            <p>Vòng xoay HOÀN TOÀN NGẪU NHIÊN nhưng vẫn ảnh hưởng đến câu trả lời!</p>
        `
    },

    'availability-heuristic': {
        icon: '📰',
        title: 'Availability Heuristic',
        subtitle: 'Thiên kiến sẵn có',
        order: 10,
        category: 'biases',
        connections: ['confirmation-bias', 'overconfidence'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> Đánh giá xác suất dựa trên việc BẠN NHỚ ví dụ dễ dàng đến mức nào, thay vì xác suất thực tế.</p>
            <div class="availability-example">
                <div class="avail-item fear">
                    <span class="icon">✈️💥</span>
                    <h5>Tai nạn máy bay</h5>
                    <p>Tin tức đưa nhiều → SỢ</p>
                    <p class="actual">Thực tế: 1/11 triệu chuyến bay</p>
                </div>
                <div class="avail-item safe">
                    <span class="icon">🚗</span>
                    <h5>Tai nạn ô tô</h5>
                    <p>Xảy ra nhiều → Không sợ</p>
                    <p class="actual">Thực tế: Nguy hiểm hơn 100 lần!</p>
                </div>
            </div>
        `,
        detail: `
            <h4>📝 Tại sao điều này xảy ra?</h4>
            <p>Não bộ dùng "shortcut": Nếu dễ nghĩ ra ví dụ → chắc là phổ biến.</p>
            
            <div class="example-box">
                <strong>Các sự kiện dễ nhớ:</strong>
                <ul>
                    <li>📺 Hay xuất hiện trên tin tức</li>
                    <li>😱 Gây cảm xúc mạnh (sợ hãi, sốc)</li>
                    <li>🕐 Xảy ra gần đây</li>
                    <li>👥 Xảy ra với người quen</li>
                </ul>
            </div>

            <h4>📊 Ví dụ sai lệch nhận thức:</h4>
            <table class="comparison-table">
                <tr>
                    <th>Sự kiện</th>
                    <th>Nhận thức</th>
                    <th>Thực tế</th>
                </tr>
                <tr>
                    <td>Khủng bố</td>
                    <td>Rất nguy hiểm</td>
                    <td>Xác suất cực thấp</td>
                </tr>
                <tr>
                    <td>Cá mập tấn công</td>
                    <td>Đáng sợ</td>
                    <td>~5 người/năm toàn thế giới</td>
                </tr>
                <tr>
                    <td>Bệnh tim</td>
                    <td>Bình thường</td>
                    <td>Nguyên nhân tử vong #1</td>
                </tr>
            </table>

            <h4>🛡️ Cách chống lại:</h4>
            <ul>
                <li>✅ Tìm THỐNG KÊ thực tế, không dựa vào cảm giác</li>
                <li>✅ Đặt câu hỏi: "Tôi có nhớ điều này vì nó phổ biến hay vì nó ấn tượng?"</li>
                <li>✅ Cẩn thận với tin tức giật gân</li>
            </ul>
        `,
        advanced: `
            <h4>💼 Ứng dụng trong kinh doanh:</h4>
            <ul>
                <li>Marketing hay dùng testimonials (câu chuyện dễ nhớ)</li>
                <li>Nhà đầu tư sợ thị trường sụp vì nhớ 2008</li>
                <li>CEO đánh giá sai rủi ro dựa trên kinh nghiệm gần đây</li>
            </ul>
        `
    },

    'sunk-cost-fallacy': {
        icon: '💸',
        title: 'Sunk Cost Fallacy',
        subtitle: 'Ngụy biện chi phí chìm',
        order: 11,
        category: 'biases',
        connections: ['loss-aversion', 'escalation'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> Tiếp tục đầu tư vào thứ gì đó chỉ vì đã đầu tư nhiều rồi, dù nó không còn đáng.</p>
            <div class="sunk-cost-visual">
                <div class="sunk-item bad">
                    <span class="icon">🎬</span>
                    <h5>Xem phim dở</h5>
                    <p>"Đã trả tiền rồi, phải xem hết!"</p>
                    <p class="reality">→ Mất thêm 2 tiếng</p>
                </div>
                <div class="sunk-item bad">
                    <span class="icon">💼</span>
                    <h5>Dự án thất bại</h5>
                    <p>"Đã đầu tư 1 tỷ, phải tiếp tục!"</p>
                    <p class="reality">→ Mất thêm 2 tỷ nữa</p>
                </div>
            </div>
            <div class="tip-box">
                💡 <strong>Sự thật:</strong> Tiền đã mất là đã mất. Câu hỏi đúng: "Với tình hình HIỆN TẠI, nên làm gì?"
            </div>
        `,
        detail: `
            <h4>📝 Ví dụ phổ biến:</h4>
            <ul>
                <li>🎓 "Học ngành này 3 năm rồi, không thể đổi dù không thích"</li>
                <li>💑 "Yêu nhau 5 năm rồi, không thể chia tay dù không hạnh phúc"</li>
                <li>🚗 "Xe cũ sửa hoài, nhưng đã tốn tiền sửa nhiều rồi..."</li>
                <li>📱 "App này tốn 2 năm code, không thể bỏ dù lỗi thời"</li>
            </ul>

            <h4>🧠 Tại sao não làm vậy?</h4>
            <ul>
                <li><strong>Loss aversion:</strong> Ghét mất mát hơn thích được lợi</li>
                <li><strong>Cognitive dissonance:</strong> Khó chấp nhận quyết định sai</li>
                <li><strong>Optimism bias:</strong> "Lần sau sẽ khác"</li>
            </ul>

            <h4>✅ Cách đúng để suy nghĩ:</h4>
            <div class="comparison-box">
                <div class="wrong">
                    ❌ "Tôi đã chi X, phải tiếp tục"
                </div>
                <div class="right">
                    ✅ "Quên X đi. Với tình hình hiện tại, lựa chọn nào tốt nhất?"
                </div>
            </div>
        `,
        advanced: `
            <h4>💼 Trong kinh doanh:</h4>
            <div class="example-box">
                <strong>Concorde Fallacy:</strong><br>
                Anh & Pháp tiếp tục đổ tiền vào máy bay Concorde dù biết không có lãi, 
                chỉ vì đã đầu tư quá nhiều. Cuối cùng lỗ hàng tỷ đô.
            </div>
            
            <h4>🛡️ Kill your darlings:</h4>
            <p>Các công ty thành công thường:</p>
            <ul>
                <li>Có quy trình "kill" dự án không hiệu quả</li>
                <li>Đánh giá dựa trên tiềm năng tương lai, không phải đầu tư quá khứ</li>
                <li>Khen thưởng việc dừng dự án đúng lúc</li>
            </ul>
        `
    },

    'loss-aversion': {
        icon: '😰',
        title: 'Loss Aversion',
        subtitle: 'Sợ mất mát',
        order: 12,
        category: 'biases',
        connections: ['sunk-cost-fallacy', 'status-quo-bias'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> Nỗi đau MẤT 100 đồng lớn hơn niềm vui ĐƯỢC 100 đồng. Tỷ lệ khoảng 2:1.</p>
            <div class="loss-aversion-visual">
                <div class="gain-side">
                    <span class="amount">+100,000đ</span>
                    <div class="emotion">😊</div>
                    <p>Vui một chút</p>
                </div>
                <div class="vs-symbol">≠</div>
                <div class="loss-side">
                    <span class="amount">-100,000đ</span>
                    <div class="emotion">😭😭</div>
                    <p>Đau gấp đôi!</p>
                </div>
            </div>
        `,
        detail: `
            <h4>📊 Thí nghiệm kinh điển:</h4>
            <div class="experiment-box">
                <strong>Bạn chọn cái nào?</strong>
                <div class="choice-a">
                    <h5>Lựa chọn A</h5>
                    <p>Chắc chắn được 500,000đ</p>
                </div>
                <div class="choice-b">
                    <h5>Lựa chọn B</h5>
                    <p>50% được 1 triệu, 50% không được gì</p>
                </div>
                <p class="result">→ Hầu hết chọn A (an toàn)</p>
            </div>

            <div class="experiment-box">
                <strong>Còn cái này?</strong>
                <div class="choice-a">
                    <h5>Lựa chọn A</h5>
                    <p>Chắc chắn mất 500,000đ</p>
                </div>
                <div class="choice-b">
                    <h5>Lựa chọn B</h5>
                    <p>50% mất 1 triệu, 50% không mất gì</p>
                </div>
                <p class="result">→ Hầu hết chọn B (đánh bạc để tránh mất chắc)</p>
            </div>

            <h4>💡 Tác động thực tế:</h4>
            <ul>
                <li>Không bán cổ phiếu lỗ (hope nó lên lại)</li>
                <li>Bán cổ phiếu lãi quá sớm (sợ mất lãi)</li>
                <li>Không dám thay đổi công việc (sợ mất điều hiện có)</li>
            </ul>
        `,
        advanced: `
            <h4>📈 Prospect Theory (Kahneman & Tversky):</h4>
            <p>Đây là nền tảng của Behavioral Economics, giải thích tại sao:</p>
            <ul>
                <li>Con người KHÔNG rational với tiền bạc</li>
                <li>Framing (cách trình bày) ảnh hưởng lớn đến quyết định</li>
                <li>Điểm tham chiếu (reference point) rất quan trọng</li>
            </ul>

            <h4>💼 Marketing áp dụng:</h4>
            <ul>
                <li>"Đừng bỏ lỡ!" > "Hãy tham gia!"</li>
                <li>Free trial rồi mất > Mua mới</li>
                <li>Limited time offer tạo FOMO</li>
            </ul>
        `
    },

    'overconfidence': {
        icon: '🦚',
        title: 'Overconfidence Bias',
        subtitle: 'Thiên kiến quá tự tin',
        order: 13,
        category: 'biases',
        connections: ['dunning-kruger', 'planning-fallacy'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> Đánh giá khả năng bản thân CAO hơn thực tế. Hầu hết mọi người nghĩ họ "trên trung bình".</p>
            <div class="overconfidence-visual">
                <div class="stat-item">
                    <span class="percent">93%</span>
                    <p>Tài xế Mỹ nghĩ họ lái xe giỏi hơn trung bình</p>
                </div>
                <div class="stat-item">
                    <span class="percent">94%</span>
                    <p>Giáo sư nghĩ họ dạy tốt hơn đồng nghiệp</p>
                </div>
                <div class="stat-item">
                    <span class="percent">70%</span>
                    <p>Học sinh nghĩ leadership của họ "trên trung bình"</p>
                </div>
            </div>
            <p class="stat-note">📊 Về mặt toán học, chỉ 50% có thể trên trung bình!</p>
        `,
        detail: `
            <h4>📝 3 loại overconfidence:</h4>
            <ol>
                <li><strong>Overestimation:</strong> Đánh giá cao khả năng tuyệt đối của mình</li>
                <li><strong>Overplacement:</strong> Nghĩ mình tốt hơn người khác</li>
                <li><strong>Overprecision:</strong> Quá chắc chắn về dự đoán của mình</li>
            </ol>

            <h4>⚠️ Hậu quả:</h4>
            <ul>
                <li>❌ Traders mất tiền vì nghĩ "mình biết hơn thị trường"</li>
                <li>❌ Startup thất bại vì CEO quá tự tin</li>
                <li>❌ Không chuẩn bị đủ vì nghĩ "dễ ợt"</li>
                <li>❌ Không lắng nghe lời khuyên</li>
            </ul>

            <h4>🛡️ Cách chống lại:</h4>
            <ul>
                <li>✅ Tìm feedback từ người khác</li>
                <li>✅ Nhớ lại những lần đã sai</li>
                <li>✅ Dùng "pre-mortem" - tưởng tượng dự án thất bại, tại sao?</li>
                <li>✅ Calibration training - luyện đánh giá chính xác hơn</li>
            </ul>
        `,
        advanced: `
            <h4>🎓 Dunning-Kruger Effect:</h4>
            <p>Liên quan chặt chẽ: Người ít năng lực thường ĐÁNH GIÁ CAO bản thân nhất, 
            vì họ không đủ kiến thức để biết họ thiếu gì.</p>
            <div class="dk-curve">
                <p>📈 Người mới: "Tôi biết hết rồi!" (Peak of Mount Stupid)</p>
                <p>📉 Học thêm: "Thì ra tôi không biết gì..." (Valley of Despair)</p>
                <p>📈 Chuyên gia: "Tôi biết một số thứ" (Plateau of Sustainability)</p>
            </div>
        `
    },

    'status-quo-bias': {
        icon: '🔒',
        title: 'Status Quo Bias',
        subtitle: 'Thiên kiến nguyên trạng',
        order: 14,
        category: 'biases',
        connections: ['loss-aversion', 'analysis-paralysis'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> Xu hướng thích GIỮ NGUYÊN như hiện tại, không muốn thay đổi, dù thay đổi có thể tốt hơn.</p>
            <div class="status-quo-visual">
                <div class="current-state">
                    <span class="icon">🏠</span>
                    <h5>Hiện tại</h5>
                    <p>"An toàn", "Quen thuộc"</p>
                </div>
                <div class="barrier">
                    <span class="icon">🚧</span>
                    <p>Rào cản tâm lý</p>
                </div>
                <div class="new-state">
                    <span class="icon">🌟</span>
                    <h5>Có thể tốt hơn</h5>
                    <p>Nhưng không chắc chắn</p>
                </div>
            </div>
        `,
        detail: `
            <h4>📝 Ví dụ phổ biến:</h4>
            <ul>
                <li>📺 Không đổi nhà mạng dù giá đắt hơn</li>
                <li>💼 Ở lại công việc không thích vì "quen rồi"</li>
                <li>🏦 Không đổi ngân hàng dù dịch vụ kém</li>
                <li>⚙️ Dùng mặc định mà không xem xét lựa chọn khác</li>
            </ul>

            <h4>🧠 Tại sao xảy ra?</h4>
            <ul>
                <li><strong>Loss aversion:</strong> Sợ mất điều đang có</li>
                <li><strong>Effort:</strong> Thay đổi cần nỗ lực</li>
                <li><strong>Uncertainty:</strong> Không chắc kết quả mới tốt hơn</li>
                <li><strong>Regret aversion:</strong> Sợ hối tiếc nếu đổi sai</li>
            </ul>

            <h4>💡 Khi nào nên vượt qua:</h4>
            <div class="question-list">
                <p>Hỏi bản thân:</p>
                <ul>
                    <li>"Nếu bắt đầu lại, tôi có chọn điều hiện tại không?"</li>
                    <li>"Tôi ở đây vì nó TỐT hay vì QUEN?"</li>
                    <li>"Chi phí của việc KHÔNG thay đổi là gì?"</li>
                </ul>
            </div>
        `,
        advanced: `
            <h4>💼 Ứng dụng trong kinh doanh:</h4>
            <ul>
                <li><strong>Default options:</strong> Opt-out hiệu quả hơn opt-in (tiết kiệm hưu trí)</li>
                <li><strong>Free trials:</strong> Khi đã dùng, khó hủy</li>
                <li><strong>Subscription:</strong> Tự động gia hạn = ít người hủy</li>
            </ul>
        `
    },

    'framing-effect': {
        icon: '🖼️',
        title: 'Framing Effect',
        subtitle: 'Hiệu ứng đóng khung',
        order: 15,
        category: 'biases',
        connections: ['anchoring-bias', 'loss-aversion'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> Cách thông tin được TRÌNH BÀY ảnh hưởng đến quyết định, dù nội dung giống nhau.</p>
            <div class="framing-example">
                <div class="frame-a">
                    <h5>Cách nói A</h5>
                    <p>"90% sống sót sau phẫu thuật"</p>
                    <p class="reaction">😌 "Được đấy!"</p>
                </div>
                <div class="equals">=</div>
                <div class="frame-b">
                    <h5>Cách nói B</h5>
                    <p>"10% chết sau phẫu thuật"</p>
                    <p class="reaction">😨 "Đáng sợ!"</p>
                </div>
            </div>
            <p class="framing-note">📊 Cùng một thông tin, cảm nhận hoàn toàn khác!</p>
        `,
        detail: `
            <h4>📝 Các loại framing:</h4>
            
            <div class="frame-type">
                <h5>1️⃣ Gain vs Loss Frame</h5>
                <ul>
                    <li>✅ "Tiết kiệm 200k!" vs ❌ "Mất 200k nếu không mua!"</li>
                    <li>Loss frame thường mạnh hơn do loss aversion</li>
                </ul>
            </div>

            <div class="frame-type">
                <h5>2️⃣ Positive vs Negative Frame</h5>
                <ul>
                    <li>✅ "95% thịt nạc" vs ❌ "5% chất béo"</li>
                    <li>Positive frame làm sản phẩm hấp dẫn hơn</li>
                </ul>
            </div>

            <div class="frame-type">
                <h5>3️⃣ Absolute vs Relative Frame</h5>
                <ul>
                    <li>💊 "Giảm 50% rủi ro!" vs "Giảm từ 2% xuống 1%"</li>
                    <li>Relative numbers thường ấn tượng hơn</li>
                </ul>
            </div>

            <h4>🛡️ Cách chống lại:</h4>
            <ul>
                <li>✅ Yêu cầu thông tin theo CẢ HAI cách</li>
                <li>✅ Tự đổi frame để thấy góc nhìn khác</li>
                <li>✅ Tập trung vào con số tuyệt đối</li>
            </ul>
        `,
        advanced: `
            <h4>💼 Marketing & Framing:</h4>
            <ul>
                <li><strong>Giá:</strong> "199,000đ" vs "200,000đ" (left-digit effect)</li>
                <li><strong>Số lượng:</strong> "3/4 người chọn X" vs "75% chọn X"</li>
                <li><strong>Scarcity:</strong> "Chỉ còn 2!" tạo urgency</li>
            </ul>
            
            <h4>📺 Tin tức & Framing:</h4>
            <p>Cùng một sự kiện có thể được frame hoàn toàn khác bởi các nguồn tin khác nhau. 
            Luôn đọc nhiều nguồn!</p>
        `
    },

    'hindsight-bias': {
        icon: '🔮',
        title: 'Hindsight Bias',
        subtitle: 'Thiên kiến nhìn lại',
        order: 16,
        category: 'biases',
        connections: ['overconfidence', 'outcome-bias'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> Sau khi biết kết quả, ta nghĩ "Tôi biết từ đầu rồi!" - dù thực tế không hề biết.</p>
            <div class="hindsight-visual">
                <div class="before">
                    <span class="icon">❓</span>
                    <h5>Trước khi biết</h5>
                    <p>"Không biết sẽ thế nào"</p>
                </div>
                <div class="arrow">→ Sự kiện xảy ra →</div>
                <div class="after">
                    <span class="icon">💡</span>
                    <h5>Sau khi biết</h5>
                    <p>"Tôi biết từ đầu mà!"</p>
                </div>
            </div>
            <p class="hindsight-note">🧠 Não tự động "chỉnh sửa" ký ức!</p>
        `,
        detail: `
            <h4>📝 Ví dụ phổ biến:</h4>
            <ul>
                <li>📈 "Tôi biết Bitcoin sẽ lên!" (nhưng đã không mua)</li>
                <li>⚽ "Đội này thua là đúng rồi!" (sau trận)</li>
                <li>💼 "Tôi biết startup đó sẽ thành công!" (sau khi thành công)</li>
                <li>📉 "Rõ ràng là bong bóng!" (sau khi vỡ)</li>
            </ul>

            <h4>⚠️ Vấn đề:</h4>
            <ul>
                <li>❌ Không học được từ sai lầm (vì không nhận sai)</li>
                <li>❌ Đánh giá không công bằng (biết kết quả rồi mới đánh giá quyết định)</li>
                <li>❌ Quá tự tin về khả năng dự đoán</li>
            </ul>

            <h4>🛡️ Cách chống lại:</h4>
            <ul>
                <li>✅ Ghi lại dự đoán TRƯỚC KHI biết kết quả</li>
                <li>✅ Decision journal - viết lý do quyết định</li>
                <li>✅ Khi đánh giá, tập trung vào THÔNG TIN LÚC ĐÓ, không phải kết quả</li>
            </ul>
        `,
        advanced: `
            <h4>💼 Trong tổ chức:</h4>
            <p>Hindsight bias gây ra:</p>
            <ul>
                <li>Đổ lỗi không công bằng cho người quyết định</li>
                <li>Không học được bài học thực sự từ thất bại</li>
                <li>Văn hóa sợ rủi ro (vì mọi thất bại đều bị coi là "có thể đoán trước")</li>
            </ul>
            
            <h4>✅ Giải pháp:</h4>
            <ul>
                <li>Đánh giá quyết định dựa trên PROCESS, không chỉ outcome</li>
                <li>Blameless postmortems</li>
                <li>Tài liệu hóa context và thông tin lúc quyết định</li>
            </ul>
        `
    }
};

// List of all cognitive biases for reference
const cognitiveBiasesList = [
    { id: 'confirmation-bias', name: 'Confirmation Bias', description: 'Chỉ tìm thông tin ủng hộ quan điểm sẵn có' },
    { id: 'anchoring-bias', name: 'Anchoring Bias', description: 'Bị ảnh hưởng bởi con số đầu tiên' },
    { id: 'availability-heuristic', name: 'Availability Heuristic', description: 'Đánh giá xác suất dựa trên dễ nhớ' },
    { id: 'sunk-cost-fallacy', name: 'Sunk Cost Fallacy', description: 'Tiếp tục vì đã đầu tư nhiều' },
    { id: 'loss-aversion', name: 'Loss Aversion', description: 'Sợ mất hơn thích được' },
    { id: 'overconfidence', name: 'Overconfidence Bias', description: 'Quá tự tin vào bản thân' },
    { id: 'status-quo-bias', name: 'Status Quo Bias', description: 'Thích giữ nguyên hiện trạng' },
    { id: 'framing-effect', name: 'Framing Effect', description: 'Bị ảnh hưởng bởi cách trình bày' },
    { id: 'hindsight-bias', name: 'Hindsight Bias', description: '"Tôi biết từ đầu rồi!"' }
];
