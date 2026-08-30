// Bất Động Sản - Định giá
const reValuationData = {
    'pp-so-sanh': {
        icon: '📐', title: 'Phương Pháp So Sánh', category: 'principles',
        connections: ['pp-thu-nhap', 'pp-chi-phi', 'tham-dinh-gia-nh', 'dam-phan-gia'],
        simple: `<h3>📐 Phương Pháp So Sánh</h3>
<p>Đây là cách định giá phổ biến nhất và cũng dễ hiểu nhất: <strong>tìm những căn nhà tương tự vừa bán gần đây, rồi điều chỉnh cho các khác biệt.</strong></p>
<p>Gần như mọi giao dịch nhà ở đều được định giá theo cách này, dù người mua có gọi tên nó hay không.</p>
<div class="example-box"><strong>Ví dụ:</strong> Bạn muốn định giá một căn hộ 70m². Trong cùng tòa nhà, 3 tháng qua có ba căn 70m² bán với giá 3,1 tỷ, 3,2 tỷ và 3,35 tỷ. Vậy căn của bạn nằm quanh mức 3,2 tỷ — rồi điều chỉnh lên xuống theo tầng, hướng, view, tình trạng nội thất.</div>`,
        detail: `<h3>Quy trình bốn bước</h3>
<ol>
<li><strong>Thu thập giao dịch so sánh.</strong> Ưu tiên: cùng khu vực, cùng loại hình, giao dịch trong vòng 3–6 tháng. Càng gần về không gian và thời gian càng đáng tin.</li>
<li><strong>Chọn tiêu chí so sánh.</strong> Với căn hộ thường là giá/m². Với nhà phố phải xét cả diện tích đất, mặt tiền, chiều sâu.</li>
<li><strong>Điều chỉnh cho khác biệt.</strong> Cộng trừ cho từng yếu tố khác nhau.</li>
<li><strong>Lấy khoảng giá, không lấy một con số.</strong> Kết quả trung thực là một khoảng, ví dụ 3,1–3,3 tỷ.</li>
</ol>
<h3>Các yếu tố điều chỉnh thường gặp</h3>
<table>
<tr><th>Yếu tố</th><th>Ảnh hưởng</th></tr>
<tr><td>Tầng (căn hộ)</td><td>Tầng trung và tầng cao thường có giá cao hơn tầng thấp; tầng sát mái và tầng để xe thì ngược lại</td></tr>
<tr><td>Hướng, view</td><td>Chênh lệch thật, đặc biệt với hướng tránh nắng gắt và view thoáng</td></tr>
<tr><td>Mặt tiền / hẻm (nhà phố)</td><td>Yếu tố lớn nhất ở Việt Nam. Hẻm ô tô vào được và hẻm chỉ xe máy chênh nhau rất nhiều</td></tr>
<tr><td>Tuổi công trình & tình trạng</td><td>Nhà mới sửa bán được cao hơn, nhưng thường không thu hồi hết chi phí sửa</td></tr>
<tr><td>Pháp lý</td><td>Sổ riêng, sổ chung, chưa có sổ — chênh lệch có thể rất lớn</td></tr>
<tr><td>Thời điểm giao dịch</td><td>Giao dịch 12 tháng trước ở thị trường đang biến động cần điều chỉnh mạnh</td></tr>
</table>
<div class="warning-box"><strong>Cẩn thận với "giá rao bán".</strong> Giá rao trên các trang mua bán là giá <em>kỳ vọng của người bán</em>, không phải giá giao dịch. Ở thị trường trầm lắng, khoảng cách giữa giá rao và giá chốt có thể rất lớn. Hãy hỏi môi giới về giá <em>đã chốt</em>, và đối chiếu nhiều nguồn.</div>`,
        advanced: `<h3>Hạn chế của phương pháp so sánh</h3>
<ul>
<li><strong>Cần có giao dịch để so sánh.</strong> Với tài sản độc đáo (biệt thự lớn, nhà cổ, bất động sản thương mại đặc thù) có thể không tìm được mẫu tương đương.</li>
<li><strong>Nó khuếch đại chính thị trường.</strong> Nếu cả thị trường đang trong bong bóng, mọi giao dịch so sánh đều ở giá bong bóng, và phương pháp này sẽ xác nhận mức giá đó là "hợp lý". Nó đo <em>giá</em>, không đo <em>giá trị</em>.</li>
<li><strong>Ở đáy chu kỳ nó cũng sai theo chiều ngược lại</strong> — vài giao dịch bán tháo có thể kéo mức tham chiếu xuống thấp hơn giá trị thật.</li>
<li><strong>Dữ liệu ở Việt Nam kém minh bạch.</strong> Không có hệ thống công bố giá giao dịch thực như MLS của Mỹ, và giá ghi trên hợp đồng công chứng thường thấp hơn giá thật vì lý do thuế.</li>
</ul>
<div class="tip-box"><strong>Cách bù trừ:</strong> Luôn kiểm tra chéo kết quả so sánh với ít nhất một phương pháp khác — thường là phương pháp thu nhập (giá này cho thuê được bao nhiêu?) hoặc chỉ số giá/thu nhập. Nếu so sánh nói 3,2 tỷ nhưng căn đó chỉ cho thuê được 8 triệu/tháng (tỷ suất 3%/năm), bạn biết mình đang ở đâu trong chu kỳ.</div>`,
        diagram: null
    },

    'pp-thu-nhap': {
        icon: '💵', title: 'Phương Pháp Thu Nhập', category: 'principles',
        connections: ['cap-rate', 'noi-dong-tien', 'rental-yield', 'roi-cho-thue'],
        simple: `<h3>💵 Phương Pháp Thu Nhập</h3>
<p>Cách tiếp cận này coi bất động sản như một cỗ máy tạo tiền: <strong>tài sản đáng giá bao nhiêu phụ thuộc vào việc nó tạo ra bao nhiêu tiền mỗi năm.</strong></p>
<p>Đây là cách nhà đầu tư chuyên nghiệp và các quỹ định giá bất động sản. Nó bỏ qua hoàn toàn câu hỏi "người khác trả bao nhiêu" và chỉ hỏi "cái này đẻ ra bao nhiêu tiền".</p>
<div class="formula-box">Giá trị = Thu nhập hoạt động ròng (NOI) ÷ Tỷ suất vốn hóa (cap rate)</div>
<div class="example-box"><strong>Ví dụ:</strong> Một căn hộ cho thuê ròng 120 triệu/năm sau khi trừ mọi chi phí. Nếu thị trường định giá loại tài sản này ở cap rate 5%, thì giá trị = 120 ÷ 0,05 = <strong>2,4 tỷ</strong>.</div>`,
        detail: `<h3>Tính NOI cho đúng</h3>
<p>Sai lầm phổ biến nhất là dùng tiền thuê gộp thay vì thu nhập ròng. Cách tính đúng:</p>
<table>
<tr><th>Khoản mục</th><th>Ví dụ (triệu/năm)</th></tr>
<tr><td>Tiền thuê theo hợp đồng (12 tháng × 12 triệu)</td><td>144</td></tr>
<tr><td>− Thất thu do trống và chậm trả (giả định 8%)</td><td>−11,5</td></tr>
<tr><td>= Doanh thu thực nhận</td><td><strong>132,5</strong></td></tr>
<tr><td>− Phí quản lý chung cư</td><td>−10</td></tr>
<tr><td>− Bảo trì, sửa chữa dự phòng</td><td>−12</td></tr>
<tr><td>− Bảo hiểm, thuế, phí khác</td><td>−8</td></tr>
<tr><td>− Phí môi giới tìm khách thuê (phân bổ)</td><td>−6</td></tr>
<tr><td><strong>= NOI</strong></td><td><strong>96,5</strong></td></tr>
</table>
<div class="warning-box"><strong>Chú ý:</strong> NOI <em>không</em> trừ tiền trả góp ngân hàng. NOI đo hiệu quả của <em>tài sản</em>, độc lập với cách bạn tài trợ nó. Trả góp được trừ ở bước sau để ra dòng tiền vào túi bạn. Trộn hai thứ này là lỗi phổ biến khiến người ta so sánh sai giữa các cơ hội đầu tư.</div>
<p>Trong ví dụ trên, tiền thuê gộp 144 triệu nhưng NOI chỉ 96,5 triệu — thấp hơn <strong>một phần ba</strong>. Ai định giá theo con số 144 sẽ trả quá cao khoảng 50%.</p>`,
        advanced: `<h3>Khi nào dùng phương pháp thu nhập</h3>
<ul>
<li><strong>Rất phù hợp:</strong> căn hộ cho thuê, nhà trọ, mặt bằng kinh doanh, văn phòng, kho xưởng — mọi thứ có dòng tiền ổn định và đo được.</li>
<li><strong>Ít phù hợp:</strong> đất trống (không sinh thu nhập), nhà ở tự dùng ở thị trường mà tỷ suất cho thuê rất thấp.</li>
</ul>
<h3>Vì sao nó hữu ích ngay cả khi bạn mua để ở</h3>
<p>Kể cả khi bạn không có ý định cho thuê, hãy làm phép tính này. Nó cho bạn biết <strong>bao nhiêu phần trong giá bạn trả là giá trị sử dụng thật, và bao nhiêu là kỳ vọng.</strong></p>
<div class="tip-box"><strong>Phép kiểm tra 30 giây:</strong> Lấy tiền thuê tháng của một căn tương tự × 12 ÷ giá bán. Nếu ra dưới 3%, bạn đang ở một thị trường mà giá được chống đỡ chủ yếu bằng kỳ vọng tăng giá. Điều đó không tự động sai — nhưng bạn nên biết mình đang cược vào cái gì.</div>
<h3>Chiết khấu dòng tiền (DCF) — bản nâng cao</h3>
<p>Với tài sản lớn, thay vì dùng một cap rate duy nhất, người ta dự báo dòng tiền từng năm trong 5–10 năm, cộng thêm giá bán dự kiến cuối kỳ, rồi chiết khấu tất cả về hiện tại theo một suất chiết khấu phản ánh rủi ro.</p>
<div class="formula-box">Giá trị = Σ [ Dòng tiền năm t ÷ (1 + r)^t ] + [ Giá bán cuối kỳ ÷ (1 + r)^n ]</div>
<p>DCF mạnh hơn vì cho phép mô hình hóa thay đổi (tăng giá thuê, kỳ trống, chi phí cải tạo lớn). Nhưng nó cũng nguy hiểm hơn: kết quả cực kỳ nhạy với giả định về tốc độ tăng giá thuê và giá bán cuối kỳ. Đổi giả định một chút, kết quả đổi rất nhiều. Hãy luôn chạy nhiều kịch bản thay vì tin một con số.</p>`,
        diagram: 're-cashflow'
    },

    'pp-chi-phi': {
        icon: '🧱', title: 'Phương Pháp Chi Phí', category: 'principles',
        connections: ['pp-so-sanh', 'dat-khan-hiem', 'jp-tong-quan'],
        simple: `<h3>🧱 Phương Pháp Chi Phí</h3>
<p>Cách tiếp cận thứ ba đặt câu hỏi: <strong>xây lại y hệt cái này thì tốn bao nhiêu?</strong></p>
<div class="formula-box">Giá trị = Giá trị đất + Chi phí xây mới công trình − Khấu hao công trình</div>
<p>Logic đằng sau: không ai trả cho một căn nhà cũ nhiều hơn số tiền để mua đất và xây một căn mới tương đương.</p>
<div class="example-box"><strong>Ví dụ:</strong> Lô đất 100m² trị giá 4 tỷ. Căn nhà trên đó xây mới hết 1,5 tỷ, nhưng đã dùng 15 năm nên khấu hao khoảng 30%. Giá trị ước tính = 4 + 1,5 − 0,45 = <strong>5,05 tỷ</strong>.</div>`,
        detail: `<h3>Khi nào phương pháp này hữu ích</h3>
<ul>
<li><strong>Công trình mới hoặc gần như mới</strong> — khấu hao nhỏ nên ước lượng chính xác.</li>
<li><strong>Tài sản đặc thù không có mẫu so sánh</strong> — nhà thờ, trường học, nhà máy chuyên dụng.</li>
<li><strong>Mục đích bảo hiểm</strong> — để xác định số tiền cần để xây lại nếu cháy, sập.</li>
<li><strong>Kiểm tra chéo</strong> — nếu giá thị trường cao hơn nhiều so với chi phí xây mới, đó là tín hiệu đất đang được định giá rất cao (hoặc nguồn cung bị chặn).</li>
</ul>
<h3>Khấu hao gồm ba loại</h3>
<table>
<tr><th>Loại</th><th>Nghĩa là gì</th><th>Sửa được không</th></tr>
<tr><td><strong>Hao mòn vật lý</strong></td><td>Xuống cấp theo thời gian: thấm, nứt, thiết bị hỏng</td><td>Thường sửa được</td></tr>
<tr><td><strong>Lỗi thời chức năng</strong></td><td>Thiết kế không còn phù hợp: trần thấp, không có chỗ để xe, bố trí phòng bất tiện</td><td>Khó, đôi khi không thể</td></tr>
<tr><td><strong>Lỗi thời do ngoại cảnh</strong></td><td>Môi trường xung quanh xấu đi: khu công nghiệp mọc lên, khu vực xuống cấp</td><td>Không thể — nằm ngoài tầm kiểm soát</td></tr>
</table>
<div class="warning-box"><strong>Hai loại sau nguy hiểm hơn nhiều loại đầu.</strong> Bạn có thể sơn lại nhà, không thể nâng trần lên, và tuyệt đối không thể di dời khu vực xung quanh. Khi định giá một căn nhà cũ, hãy hỏi vấn đề nào thuộc loại nào.</div>`,
        advanced: `<h3>Vì sao phương pháp này giải thích thị trường Nhật</h3>
<p>Ở Nhật, phương pháp chi phí gần như là cách thị trường thực sự định giá nhà ở, và nó dẫn tới một kết quả mà người Việt thấy rất lạ: <strong>nhà ở Nhật mất giá theo tuổi gần như một chiếc xe hơi</strong>, thường được coi là gần hết giá trị công trình sau khoảng 20–30 năm. Chỉ đất giữ giá.</p>
<p>Có nhiều nguyên nhân được nêu ra: tiêu chuẩn chống động đất được siết chặt qua các lần sửa luật khiến nhà cũ bị coi là kém an toàn, văn hóa ưa nhà mới, và thị trường nhà cũ kém phát triển. Kết quả là nhiều người Nhật phá nhà cũ để xây mới thay vì mua đi bán lại.</p>
<div class="tip-box"><strong>So sánh với Việt Nam:</strong> Ở Việt Nam, nhà phố cũ trong khu trung tâm vẫn tăng giá mạnh, vì phần đất chiếm tỷ trọng áp đảo trong giá trị và người mua thường mua để phá đi xây lại. Nhưng với <strong>căn hộ chung cư</strong>, câu chuyện gần với Nhật hơn: bạn sở hữu phần công trình đang khấu hao, còn phần đất thì chia cho hàng trăm hộ. Đây là lý do quan trọng khiến chung cư cũ và nhà phố cũ có quỹ đạo giá rất khác nhau — điều nhiều người mua lần đầu không nhận ra.</div>
<h3>Hạn chế</h3>
<p>Phương pháp chi phí bỏ qua hoàn toàn <em>cung cầu</em>. Một tòa nhà xây hết 50 tỷ ở nơi không ai muốn đến vẫn không đáng 50 tỷ. Ngược lại, một căn nhà cũ nát ở vị trí đắc địa có thể bán cao hơn nhiều lần chi phí xây dựng. Vì vậy nó hầu như không bao giờ được dùng một mình cho nhà ở thương mại — chỉ dùng để kiểm tra chéo.</p>`,
        diagram: null
    },

    'noi-dong-tien': {
        icon: '🌊', title: 'NOI & Dòng Tiền', category: 'principles',
        connections: ['pp-thu-nhap', 'cap-rate', 'roi-cho-thue', 'cho-thue-van-hanh'],
        simple: `<h3>🌊 NOI & Dòng Tiền</h3>
<p>Hai con số này hay bị nhầm lẫn, nhưng chúng trả lời hai câu hỏi khác nhau:</p>
<ul>
<li><strong>NOI (Net Operating Income — thu nhập hoạt động ròng)</strong> — <em>tài sản này</em> tạo ra bao nhiêu tiền? Không quan tâm bạn vay hay không.</li>
<li><strong>Dòng tiền (Cash flow)</strong> — <em>bạn</em> bỏ túi bao nhiêu sau khi trả ngân hàng?</li>
</ul>
<div class="example-box"><strong>Vì sao phải tách:</strong> Hai người mua cùng một căn hộ, cùng cho thuê một giá. NOI của họ giống hệt nhau. Nhưng người trả hết bằng tiền mặt có dòng tiền dương, còn người vay 80% có thể âm dòng tiền mỗi tháng. Tài sản không đổi — cách tài trợ mới tạo ra khác biệt.</div>`,
        detail: `<h3>Từ tiền thuê đến tiền vào túi</h3>
<table>
<tr><th>Bước</th><th>Khoản mục</th><th>Ví dụ (triệu/năm)</th></tr>
<tr><td>1</td><td>Tiền thuê tiềm năng (12 tháng đầy)</td><td>180</td></tr>
<tr><td>2</td><td>− Thất thu do trống & nợ xấu (10%)</td><td>−18</td></tr>
<tr><td>3</td><td>= Doanh thu thực nhận</td><td>162</td></tr>
<tr><td>4</td><td>− Chi phí vận hành (quản lý, bảo trì, thuế, bảo hiểm)</td><td>−45</td></tr>
<tr><td>5</td><td><strong>= NOI</strong></td><td><strong>117</strong></td></tr>
<tr><td>6</td><td>− Trả góp ngân hàng (gốc + lãi)</td><td>−108</td></tr>
<tr><td>7</td><td><strong>= Dòng tiền trước thuế</strong></td><td><strong>9</strong></td></tr>
</table>
<p>Chín triệu một năm — 750 nghìn một tháng. Đó là con số thật của rất nhiều khoản đầu tư cho thuê dùng đòn bẩy cao, sau khi tính đủ chi phí. Nó không phải thảm họa, nhưng rất khác với hình dung ban đầu "cho thuê 15 triệu, trả góp 9 triệu, lời 6 triệu mỗi tháng".</p>
<div class="warning-box"><strong>Hai khoản người ta hay quên nhất là bước 2 và bước 4.</strong> Tỷ lệ trống là có thật — khách thuê chuyển đi, bạn mất 1–2 tháng tìm khách mới, cộng chi phí sơn sửa. Và bảo trì không phải khoản đều đặn: nhiều năm không tốn gì, rồi một năm phải thay điều hòa, chống thấm, sửa đường ống.</div>`,
        advanced: `<h3>Tỷ lệ bao phủ nợ (DSCR)</h3>
<p>Đây là chỉ số ngân hàng dùng để đánh giá bất động sản cho thuê, và bạn cũng nên dùng:</p>
<div class="formula-box">DSCR = NOI ÷ Tổng nghĩa vụ trả nợ hàng năm</div>
<table>
<tr><th>DSCR</th><th>Nghĩa là</th></tr>
<tr><td>Dưới 1,0</td><td>Tài sản không tự nuôi nổi khoản vay — bạn phải bù tiền túi mỗi tháng</td></tr>
<tr><td>1,0 – 1,2</td><td>Vừa đủ, không có đệm. Một tháng trống là âm</td></tr>
<tr><td>1,25 – 1,5</td><td>Vùng an toàn thông thường mà ngân hàng thương mại mong muốn</td></tr>
<tr><td>Trên 1,5</td><td>Đệm tốt, chịu được biến động</td></tr>
</table>
<div class="tip-box"><strong>Nếu DSCR dưới 1, bạn không đang đầu tư cho thuê — bạn đang trợ cấp cho một khoản cược vào giá.</strong> Điều đó vẫn có thể hợp lý nếu bạn hiểu rõ và đủ khả năng bù lỗ trong nhiều năm. Nhưng hãy gọi đúng tên nó, và tính xem mình chịu được bao nhiêu tháng nếu tài sản trống.</div>
<h3>Lợi suất trên vốn tự có (Cash-on-cash)</h3>
<div class="formula-box">Cash-on-cash = Dòng tiền năm ÷ Tổng tiền mặt đã bỏ ra</div>
<p>Chỉ số này đo hiệu quả của <em>tiền của bạn</em>, không phải của tài sản. Với ví dụ ở trên: nếu bạn bỏ ra 600 triệu tiền mặt (vốn tự có + thuế phí + sửa chữa ban đầu) và thu về 9 triệu/năm, cash-on-cash chỉ 1,5% — thấp hơn gửi tiết kiệm.</p>
<p>Điều đó không có nghĩa khoản đầu tư này tệ, vì bạn còn nhận thêm hai thứ mà chỉ số này không đo: phần <strong>trả gốc</strong> mỗi tháng (đang tích lũy tài sản cho bạn) và <strong>mức tăng giá</strong> tiềm năng. Nhưng nó cho thấy rõ: lợi nhuận của bạn đến từ hai nguồn đó, không phải từ dòng tiền. Và cả hai đều không chắc chắn.</p>`,
        diagram: 're-cashflow'
    },

    'cap-rate': {
        icon: '📊', title: 'Cap Rate Đọc Thế Nào', category: 'principles',
        connections: ['pp-thu-nhap', 'noi-dong-tien', 'rental-yield', 'su-dung-vs-dau-co'],
        simple: `<h3>📊 Cap Rate Đọc Thế Nào</h3>
<p>Cap rate (tỷ suất vốn hóa) là con số quan trọng nhất trong ngôn ngữ của nhà đầu tư bất động sản chuyên nghiệp.</p>
<div class="formula-box">Cap rate = NOI (thu nhập hoạt động ròng năm) ÷ Giá mua</div>
<p>Nó trả lời: <strong>nếu tôi mua bằng tiền mặt, mỗi năm tài sản này trả lại cho tôi bao nhiêu phần trăm?</strong></p>
<div class="example-box"><strong>Ví dụ:</strong> Mua 3 tỷ, NOI 150 triệu/năm → cap rate = 150/3.000 = <strong>5%</strong>. Nghĩa là khoảng 20 năm để hoàn vốn từ dòng tiền hoạt động (chưa tính tăng giá).</div>`,
        detail: `<h3>Cap rate cao hay thấp thì tốt?</h3>
<p>Đây là chỗ nhiều người hiểu ngược. Cap rate <strong>không</strong> đơn thuần "càng cao càng tốt" — nó là thước đo rủi ro cũng như lợi nhuận.</p>
<table>
<tr><th>Cap rate</th><th>Thị trường đang nói gì</th><th>Đi kèm điều gì</th></tr>
<tr><td><strong>Thấp</strong> (3–4%)</td><td>Tài sản được coi là an toàn, vị trí tốt, người mua chấp nhận lợi suất thấp</td><td>Kỳ vọng tăng giá cao; giá đã đắt</td></tr>
<tr><td><strong>Trung bình</strong> (5–7%)</td><td>Cân bằng giữa rủi ro và lợi suất</td><td>Vùng phổ biến ở thị trường trưởng thành</td></tr>
<tr><td><strong>Cao</strong> (9%+)</td><td>Thị trường đòi hỏi bù đắp rủi ro</td><td>Vị trí kém, khách thuê không ổn định, tài sản xuống cấp, hoặc khu vực đang mất dân</td></tr>
</table>
<div class="warning-box"><strong>Cap rate cao bất thường là một câu hỏi, không phải một cơ hội.</strong> Khi bạn thấy một tài sản chào bán với cap rate 12% trong khi thị trường quanh đó là 6%, luôn có lý do. Nhiệm vụ của bạn là tìm ra lý do đó <em>trước khi</em> mua: có thể là hợp đồng thuê sắp hết và giá thuê hiện tại cao bất thường, khu vực sắp mất nguồn việc làm chính, tài sản cần sửa lớn, hoặc pháp lý có vấn đề.</div>`,
        advanced: `<h3>Quan hệ giữa cap rate và lãi suất</h3>
<p>Cap rate luôn được so với <strong>lợi suất trái phiếu chính phủ</strong> — tài sản gần như phi rủi ro. Phần chênh lệch giữa hai con số gọi là <em>phần bù rủi ro</em>.</p>
<div class="formula-box">Phần bù rủi ro = Cap rate − Lợi suất phi rủi ro</div>
<p>Khi lãi suất tăng, nhà đầu tư đòi cap rate cao hơn để bù. Mà NOI thì không tăng ngay. Nên điều duy nhất có thể điều chỉnh là <strong>giá phải giảm</strong>.</p>
<div class="example-box"><strong>Tác động rất lớn:</strong> Một tài sản có NOI 150 triệu/năm.<br>
• Cap rate 5% → giá 3 tỷ<br>
• Cap rate 6% → giá 2,5 tỷ<br>
Cap rate chỉ nhích 1 điểm phần trăm, giá trị giảm <strong>17%</strong>. Đây là cơ chế toán học khiến bất động sản thương mại rất nhạy với lãi suất, và giải thích tại sao các chu kỳ tăng lãi suất mạnh thường kéo theo sụt giảm định giá bất động sản đầu tư.</div>
<h3>Áp dụng cho Việt Nam</h3>
<p>Ở nhiều đô thị lớn của Việt Nam, tỷ suất cho thuê căn hộ thường nằm trong vùng thấp so với lãi suất tiền gửi ngân hàng cùng thời kỳ. Điều đó phản ánh một thực tế: thị trường đang định giá phần lớn theo <strong>kỳ vọng tăng giá</strong>, không theo dòng tiền.</p>
<div class="tip-box"><strong>Phép so sánh bắt buộc trước khi mua để cho thuê:</strong> đặt cạnh nhau ba con số — cap rate của tài sản, lãi suất tiền gửi kỳ hạn 12 tháng, và lãi vay mua nhà. Nếu cap rate thấp hơn cả hai, bạn cần một lý do rất rõ ràng để vẫn tiếp tục, và lý do đó nên được viết ra thành con số cụ thể chứ không phải cảm giác.</div>`,
        diagram: null
    },

    'price-to-income': {
        icon: '💸', title: 'Giá Nhà So Với Thu Nhập', category: 'principles',
        connections: ['chu-ky-bds', 'su-dung-vs-dau-co', 'vn-tong-quan', 'ltv-dti'],
        simple: `<h3>💸 Giá Nhà So Với Thu Nhập</h3>
<p>Chỉ số đơn giản nhất để biết nhà ở một nơi có đắt hay không:</p>
<div class="formula-box">Tỷ lệ giá/thu nhập = Giá nhà trung bình ÷ Thu nhập hộ gia đình trung bình một năm</div>
<p>Kết quả cho biết <strong>một hộ gia đình phải dành trọn bao nhiêu năm thu nhập để mua một căn nhà</strong> — nếu không ăn uống, không tiêu gì cả.</p>
<div class="example-box"><strong>Cách đọc:</strong> Tỷ lệ 5 nghĩa là mất 5 năm thu nhập nguyên vẹn. Tỷ lệ 20 nghĩa là 20 năm. Con số càng cao, người dân bình thường càng khó tiếp cận nhà ở bằng thu nhập từ lao động.</div>`,
        detail: `<h3>Thang tham chiếu thường dùng</h3>
<p>Một cách phân loại phổ biến trong các báo cáo quốc tế về khả năng chi trả nhà ở:</p>
<table>
<tr><th>Tỷ lệ</th><th>Đánh giá</th></tr>
<tr><td>Dưới 3</td><td>Vừa túi tiền</td></tr>
<tr><td>3 – 4</td><td>Hơi căng</td></tr>
<tr><td>4 – 5</td><td>Căng</td></tr>
<tr><td>Trên 5</td><td>Rất căng</td></tr>
</table>
<p>Trên thực tế, nhiều đô thị lớn ở châu Á có tỷ lệ vượt xa mức trên — con số hai chữ số không hiếm ở Hong Kong, Bắc Kinh, Thượng Hải, cũng như ở trung tâm Hà Nội và TP.HCM.</p>
<div class="warning-box"><strong>Hạn chế cần biết:</strong> Chỉ số này rất nhạy với cách bạn định nghĩa "trung bình". Thu nhập trung bình của cả thành phố gồm cả người không có ý định mua nhà ở trung tâm. Giá nhà trung bình có thể bị kéo lệch bởi phân khúc cao cấp. Và ở Việt Nam, thu nhập thực tế thường cao hơn thu nhập khai báo. Vì vậy hãy dùng nó để so sánh <strong>xu hướng theo thời gian</strong> tại cùng một nơi, hơn là so sánh tuyệt đối giữa các nước.</div>`,
        advanced: `<h3>Vì sao chỉ số này quan trọng dù không hoàn hảo</h3>
<p>Giá nhà không thể tách rời thu nhập mãi mãi. Về lâu dài, người mua nhà phải trả bằng tiền lương của họ. Khi tỷ lệ giá/thu nhập tăng liên tục trong nhiều năm, chỉ có bốn khả năng:</p>
<ol>
<li><strong>Thu nhập sẽ đuổi kịp</strong> — kinh tế tăng trưởng nhanh, lương tăng mạnh. Đây là kịch bản lành mạnh nhất.</li>
<li><strong>Điều kiện tín dụng nới thêm</strong> — kỳ hạn dài hơn, LTV cao hơn, lãi suất thấp hơn. Có giới hạn, và tạo rủi ro hệ thống.</li>
<li><strong>Cơ cấu người mua thay đổi</strong> — người mua không dựa vào thu nhập lao động: nhà đầu tư, người thừa kế, dòng vốn từ nơi khác. Điều này có thể duy trì mức giá cao lâu, nhưng làm thị trường mong manh hơn.</li>
<li><strong>Giá phải điều chỉnh</strong> — bằng cách giảm danh nghĩa, hoặc đứng yên nhiều năm trong khi lạm phát bào mòn giá thực.</li>
</ol>
<div class="tip-box"><strong>Chỉ số thực dụng hơn cho quyết định cá nhân của bạn:</strong> thay vì dùng số trung bình của thành phố, hãy tính cho chính mình — lấy giá căn nhà bạn nhắm chia cho thu nhập năm của gia đình bạn. Nếu vượt quá 7–8 lần, khoản vay sẽ chi phối tài chính gia đình bạn trong hai thập kỷ, và bạn nên chủ động cân nhắc lại quy mô hoặc vị trí thay vì để ngân hàng quyết định hộ.</div>
<h3>Một chỉ số bổ sung: tỷ lệ trả góp trên thu nhập</h3>
<p>Chỉ số giá/thu nhập bỏ qua lãi suất. Trong môi trường lãi suất thấp, tỷ lệ 8 lần vẫn có thể trả được; ở lãi suất cao, tỷ lệ 5 lần đã ngột ngạt. Vì vậy hãy luôn kèm theo phép tính: <em>khoản trả góp hàng tháng chiếm bao nhiêu phần trăm thu nhập ròng của gia đình</em>. Đây mới là con số quyết định bạn sống thế nào trong 20 năm tới.</p>`,
        diagram: null
    },

    'rental-yield': {
        icon: '🔑', title: 'Tỷ Suất Cho Thuê', category: 'principles',
        connections: ['cap-rate', 'su-dung-vs-dau-co', 'roi-cho-thue', 'thue-vs-mua'],
        simple: `<h3>🔑 Tỷ Suất Cho Thuê</h3>
<p>Đây là phép kiểm tra nhanh nhất, dễ nhất, và bị bỏ qua nhiều nhất khi mua bất động sản.</p>
<div class="formula-box">Tỷ suất gộp = (Tiền thuê tháng × 12) ÷ Giá mua × 100%</div>
<div class="example-box"><strong>Ví dụ:</strong> Căn hộ giá 3 tỷ, cho thuê 10 triệu/tháng.<br>
Tỷ suất gộp = (10 × 12) ÷ 3.000 × 100% = <strong>4%/năm</strong></div>
<p>Chỉ cần hai con số và mười giây, bạn đã biết thị trường đang định giá tài sản này theo dòng tiền hay theo kỳ vọng.</p>`,
        detail: `<h3>Gộp và ròng — đừng nhầm</h3>
<table>
<tr><th></th><th>Tỷ suất gộp</th><th>Tỷ suất ròng</th></tr>
<tr><td>Công thức</td><td>Tiền thuê năm ÷ Giá</td><td>NOI ÷ (Giá + chi phí mua)</td></tr>
<tr><td>Trừ chi phí không</td><td>Không</td><td>Có: trống, quản lý, bảo trì, thuế</td></tr>
<tr><td>Dùng để</td><td>Sàng lọc nhanh</td><td>Ra quyết định thật</td></tr>
<tr><td>Ví dụ tương ứng</td><td>4%</td><td>Thường còn 2,5 – 3%</td></tr>
</table>
<div class="warning-box"><strong>Tỷ suất ròng thường chỉ bằng khoảng 60–75% tỷ suất gộp.</strong> Người bán và môi giới luôn nói theo tỷ suất gộp vì nó nghe hay hơn. Khi bạn tính toán cho quyết định của mình, hãy luôn dùng con số ròng, và cộng cả thuế phí lúc mua vào mẫu số — vì đó cũng là tiền bạn đã bỏ ra.</div>
<h3>Ba mức so sánh bắt buộc</h3>
<p>Một con số tỷ suất đứng riêng không có ý nghĩa. Nó chỉ có ý nghĩa khi đặt cạnh:</p>
<ol>
<li><strong>Lãi suất tiền gửi ngân hàng</strong> — lựa chọn không rủi ro, không tốn công.</li>
<li><strong>Lãi suất vay mua nhà</strong> — nếu bạn vay, đây là chi phí vốn của bạn.</li>
<li><strong>Tỷ suất của các tài sản tương tự trong khu vực</strong> — để biết tài sản này rẻ hay đắt tương đối.</li>
</ol>`,
        advanced: `<h3>Vì sao tỷ suất thấp vẫn có người mua</h3>
<p>Nếu tỷ suất ròng chỉ 2,5% trong khi gửi tiết kiệm được 6%, tại sao vẫn có rất nhiều người mua? Các lý do thật, không phải lý do ngụy biện:</p>
<ul>
<li><strong>Kỳ vọng tăng giá</strong> — lý do chính, và cũng là rủi ro chính.</li>
<li><strong>Bảo toàn giá trị dài hạn</strong> — với người có tài sản lớn, mục tiêu là giữ của cải qua thời gian, không phải tối đa lợi suất.</li>
<li><strong>Đòn bẩy</strong> — lợi suất trên vốn tự có có thể cao hơn nhiều lợi suất trên tổng giá trị tài sản, nếu giá tăng.</li>
<li><strong>Ưu đãi thuế</strong> — ở một số nước, lãi vay mua nhà được khấu trừ thuế thu nhập, thay đổi hoàn toàn phép tính.</li>
<li><strong>Yếu tố phi tài chính</strong> — an cư, chỗ ở cho con cái, sự yên tâm. Đây là giá trị thật, chỉ là không đo bằng phần trăm được.</li>
</ul>
<div class="tip-box"><strong>Điểm mấu chốt cần trung thực với chính mình:</strong> nếu bạn mua tài sản có tỷ suất 2,5%, bạn <em>không</em> đang đầu tư vì dòng tiền. Bạn đang cược vào tăng giá, hoặc đang mua sự an tâm. Cả hai đều có thể là quyết định đúng — nhưng hãy biết mình đang làm gì, để không bất ngờ khi thị trường đi ngang vài năm.</div>
<h3>Tỷ suất cho thuê như tín hiệu chu kỳ</h3>
<p>Theo dõi tỷ suất cho thuê trung bình của một khu vực qua thời gian cho bạn một tín hiệu tốt hơn là theo dõi giá:</p>
<ul>
<li><strong>Tỷ suất giảm dần</strong> = giá tăng nhanh hơn tiền thuê = phần kỳ vọng đang phình to.</li>
<li><strong>Tỷ suất tăng dần</strong> = giá đi ngang hoặc giảm trong khi tiền thuê giữ = thị trường đang trở về nền tảng sử dụng.</li>
</ul>
<p>Vì tiền thuê bám sát thu nhập và ít bị đầu cơ, nó là mỏ neo đáng tin cậy hơn giá bán. Khi hai đường này tách nhau quá xa và quá lâu, một trong hai sẽ phải điều chỉnh.</p>`,
        diagram: null
    },

    'tham-dinh-gia-nh': {
        icon: '🏛️', title: 'Thẩm Định Giá Của Ngân Hàng', category: 'principles',
        connections: ['pp-so-sanh', 'vay-ngan-hang', 'ltv-dti', 'dam-phan-gia'],
        simple: `<h3>🏛️ Thẩm Định Giá Của Ngân Hàng</h3>
<p>Khi bạn vay tiền mua nhà, ngân hàng không cho vay dựa trên giá bạn thỏa thuận với người bán. Họ cử đơn vị thẩm định định giá lại tài sản, và <strong>cho vay theo tỷ lệ trên con số của họ, không phải con số của bạn.</strong></p>
<div class="example-box"><strong>Ví dụ tình huống thường gặp:</strong> Bạn chốt mua căn nhà 4 tỷ. Ngân hàng thẩm định chỉ 3,5 tỷ và cho vay 70% → họ giải ngân 2,45 tỷ. Bạn tưởng chỉ cần chuẩn bị 1,2 tỷ (30% của 4 tỷ), nhưng thực tế phải có <strong>1,55 tỷ</strong>. Khoản chênh 350 triệu này xuất hiện rất muộn, sau khi bạn đã đặt cọc.</div>`,
        detail: `<h3>Vì sao ngân hàng thường định giá thấp hơn giá thị trường</h3>
<ul>
<li><strong>Họ định giá để thu hồi nợ, không phải để mua.</strong> Câu hỏi của họ là "nếu phải phát mại tài sản này trong 6 tháng, thu được bao nhiêu?" — luôn thấp hơn giá bán thông thường.</li>
<li><strong>Họ dùng giá giao dịch đã hoàn tất</strong>, thường là dữ liệu trễ vài tháng. Ở thị trường đang tăng nhanh, con số này luôn tụt lại.</li>
<li><strong>Họ thận trọng có hệ thống</strong> — định giá cao là rủi ro cho ngân hàng, định giá thấp thì không.</li>
<li><strong>Giá ghi trên hợp đồng công chứng</strong> ở Việt Nam thường thấp hơn giá thật vì lý do thuế, làm méo dữ liệu tham chiếu của chính hệ thống.</li>
</ul>
<div class="warning-box"><strong>Đây là rủi ro thời điểm nghiêm trọng.</strong> Quy trình thông thường là: đặt cọc trước → ngân hàng thẩm định sau. Nếu kết quả thẩm định thấp và bạn không xoay đủ phần chênh, bạn có thể <strong>mất tiền cọc</strong>. Với mức cọc phổ biến 5–10% giá trị, đó là khoản tiền rất lớn.</div>
<h3>Cách phòng tránh</h3>
<ol>
<li><strong>Xin sơ duyệt khoản vay trước khi đi xem nhà.</strong> Biết trần vay của mình trước, thay vì sau.</li>
<li><strong>Hỏi ngân hàng định giá sơ bộ</strong> căn nhà cụ thể trước khi đặt cọc. Nhiều ngân hàng làm việc này miễn phí hoặc phí thấp.</li>
<li><strong>Đưa điều khoản vào hợp đồng đặt cọc:</strong> nếu ngân hàng không giải ngân đủ mức dự kiến, được hoàn cọc hoặc gia hạn. Điều khoản này phải viết rõ ràng, cụ thể — và bên bán không phải lúc nào cũng đồng ý, nhưng luôn đáng đề nghị.</li>
<li><strong>Đặt cọc với thời hạn đủ dài</strong> để hoàn tất thẩm định và duyệt vay.</li>
<li><strong>Chuẩn bị đệm tiền mặt</strong> khoảng 10–15% giá trị ngoài phần vốn dự kiến, để không bị động.</li>
</ol>`,
        advanced: `<h3>Thẩm định giá cũng là một nguồn thông tin cho bạn</h3>
<p>Đừng chỉ coi con số thẩm định là chướng ngại. Nó là ý kiến độc lập, có động cơ thận trọng, từ một bên không hưởng lợi khi bạn mua. So với môi giới — người chỉ được trả tiền khi giao dịch thành công — đây là nguồn tham chiếu ít xung đột lợi ích hơn nhiều.</p>
<div class="tip-box"><strong>Nếu ngân hàng định giá thấp hơn giá bạn chốt 15% trở lên, hãy dừng lại và xem xét nghiêm túc.</strong> Có thể bạn đang trả cao hơn mặt bằng, hoặc tài sản có vấn đề mà bạn chưa thấy (pháp lý, quy hoạch, tranh chấp). Đây là tín hiệu đáng để trả phí thuê một đơn vị thẩm định độc lập thứ hai trước khi tiếp tục.</div>
<h3>Vai trò của thẩm định giá trong chu kỳ</h3>
<p>Ở pha bùng nổ, áp lực cạnh tranh cho vay có thể khiến định giá bị nới lỏng, tạo vòng lặp khuếch đại: giá tăng → định giá cao hơn → cho vay nhiều hơn → giá tăng tiếp. Ở pha suy thoái, quá trình đảo ngược và thường mạnh hơn: định giá giảm → hạn mức vay giảm → người mua không đủ điều kiện → giao dịch đổ vỡ → giá giảm tiếp.</p>
<p>Nói cách khác, hệ thống thẩm định giá không đứng ngoài chu kỳ — nó là một phần của cơ chế khuếch đại. Khi bạn thấy các ngân hàng đồng loạt hạ giá trị thẩm định trên một khu vực, đó là tín hiệu sớm rằng nguồn tín dụng cho khu vực đó đang co lại, và giá sẽ chịu áp lực trong các quý tiếp theo.</p>`,
        diagram: null
    }
};
