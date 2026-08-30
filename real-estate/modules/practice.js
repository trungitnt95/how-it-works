// Bất Động Sản - Thực chiến mua, bán, đầu tư
const rePracticeData = {
    'quy-trinh-mua-nha': {
        icon: '🗂️', title: 'Quy Trình Mua Nhà 9 Bước', category: 'practice',
        connections: ['checklist-phap-ly', 'dat-coc-hop-dong', 'vay-ngan-hang', 'cong-chung-sang-ten'],
        simple: `<h3>🗂️ Quy Trình Mua Nhà 9 Bước</h3>
<p>Thứ tự các bước quan trọng hơn bản thân từng bước. Phần lớn sự cố khi mua nhà xảy ra vì làm sai thứ tự — cụ thể là <strong>đặt cọc trước khi kiểm tra</strong>.</p>
<div class="example-box"><strong>Nguyên tắc xuyên suốt:</strong> mọi việc tốn tiền ít (kiểm tra, hỏi han, tra cứu) phải làm <em>trước</em> mọi việc tốn tiền nhiều (đặt cọc, thanh toán). Nghe hiển nhiên, nhưng áp lực "sợ mất căn" làm rất nhiều người làm ngược lại.</div>`,
        detail: `<h3>Chín bước theo thứ tự</h3>
<table>
<tr><th>Bước</th><th>Việc cần làm</th><th>Thời gian điển hình</th></tr>
<tr><td><strong>1. Xác định ngân sách thật</strong></td><td>Tính vốn tự có (trừ quỹ dự phòng), khả năng trả nợ hàng tháng, và tổng chi phí gồm thuế phí</td><td>1 tuần</td></tr>
<tr><td><strong>2. Sơ duyệt khoản vay</strong></td><td>Làm việc với 2–3 ngân hàng để biết trần vay và lãi suất thực</td><td>1–2 tuần</td></tr>
<tr><td><strong>3. Chọn khu vực & đi xem</strong></td><td>Xem tối thiểu 10 căn để có cảm nhận về mặt bằng giá; đến ít nhất 2 khung giờ khác nhau</td><td>2–8 tuần</td></tr>
<tr><td><strong>4. Kiểm tra pháp lý</strong></td><td>Photo sổ, tra quy hoạch, kiểm tra thế chấp, xác minh chủ sở hữu, đối chiếu diện tích</td><td>1–2 tuần</td></tr>
<tr><td><strong>5. Định giá & đàm phán</strong></td><td>So sánh với giao dịch tương tự; xin ngân hàng định giá sơ bộ; đàm phán giá và điều khoản</td><td>1 tuần</td></tr>
<tr><td><strong>6. Đặt cọc</strong></td><td>Hợp đồng đặt cọc có điều khoản hoàn cọc; nên công chứng</td><td>1 ngày</td></tr>
<tr><td><strong>7. Hoàn tất hồ sơ vay</strong></td><td>Thẩm định chính thức, phê duyệt, ký hợp đồng tín dụng</td><td>2–4 tuần</td></tr>
<tr><td><strong>8. Công chứng & thanh toán</strong></td><td>Ký hợp đồng chuyển nhượng, giải ngân, giữ lại một phần đến khi sang tên xong</td><td>1 ngày</td></tr>
<tr><td><strong>9. Nộp thuế phí & sang tên</strong></td><td>Kê khai thuế, đăng ký biến động, nhận giấy chứng nhận, nhận bàn giao nhà</td><td>2–6 tuần</td></tr>
</table>
<div class="warning-box"><strong>Bước 2 bị bỏ qua nhiều nhất, và gây hậu quả lớn nhất.</strong> Nếu bạn không biết ngân hàng cho vay được bao nhiêu trước khi đặt cọc, bạn đang đặt cọc dựa trên giả định. Khi thẩm định ra con số thấp hơn dự kiến, bạn phải bù bằng tiền mặt hoặc mất cọc. Xem chi tiết ở chủ điểm "Thẩm định giá của ngân hàng".</div>`,
        advanced: `<h3>Tổng thời gian và những chỗ hay bị kéo dài</h3>
<p>Từ lúc bắt đầu tìm nhà nghiêm túc đến lúc cầm sổ đứng tên mình, một giao dịch thuận lợi mất khoảng <strong>3–5 tháng</strong>. Các chỗ hay phát sinh:</p>
<ul>
<li><strong>Hồ sơ vay chậm</strong> — thiếu chứng minh thu nhập, thu nhập không chính thức khó chứng minh.</li>
<li><strong>Người bán đang thế chấp</strong> — cần phối hợp ba bên với ngân hàng, thêm 1–3 tuần.</li>
<li><strong>Đồng sở hữu ở xa</strong> — cần ủy quyền có công chứng, có thể mất nhiều tuần nếu ở nước ngoài.</li>
<li><strong>Hồ sơ sang tên bị trả lại</strong> — thiếu giấy tờ, sai thông tin, phải bổ sung.</li>
</ul>
<div class="tip-box"><strong>Hãy thương lượng thời hạn đặt cọc rộng rãi ngay từ đầu.</strong> Thời hạn 30 ngày là quá ngắn nếu bạn cần vay ngân hàng và người bán đang thế chấp. Xin 45–60 ngày. Người bán thường chấp nhận nếu bạn giải thích lý do — và nếu họ không chấp nhận, đó là dấu hiệu họ đang gấp một cách bất thường.</div>
<h3>Hồ sơ nên chuẩn bị sẵn</h3>
<p>Chuẩn bị trước những thứ này giúp bạn nhanh hơn đối thủ khi tìm được căn ưng ý:</p>
<ul>
<li>CCCD, sổ hộ khẩu/giấy xác nhận cư trú, giấy đăng ký kết hôn (hoặc xác nhận độc thân).</li>
<li>Chứng minh thu nhập: hợp đồng lao động, sao kê lương 6–12 tháng, quyết định lương.</li>
<li>Nếu kinh doanh: giấy phép, báo cáo tài chính, sao kê tài khoản.</li>
<li>Chứng minh vốn tự có: sổ tiết kiệm, sao kê tài khoản.</li>
<li>Danh sách các khoản nợ hiện có — ngân hàng sẽ tra được qua hệ thống thông tin tín dụng nên đừng giấu.</li>
</ul>`,
        diagram: 're-buy-flow'
    },

    'checklist-phap-ly': {
        icon: '✅', title: 'Checklist Thẩm Định Trước Khi Đặt Cọc', category: 'practice',
        connections: ['tranh-chap', 'quy-hoach-thu-hoi', 'so-do-so-hong', 'quy-trinh-mua-nha'],
        simple: `<h3>✅ Checklist Thẩm Định Trước Khi Đặt Cọc</h3>
<p>Đây là danh sách bạn nên in ra và mang theo. Mỗi mục chưa được đánh dấu là một rủi ro bạn đang mang về nhà.</p>
<div class="warning-box"><strong>Quy tắc một dòng:</strong> không đặt cọc khi còn bất kỳ mục nào trong nhóm "bắt buộc" chưa được xác minh <em>bằng giấy tờ</em>, không phải bằng lời nói của ai đó.</div>`,
        detail: `<h3>Nhóm A — Bắt buộc, không thỏa hiệp</h3>
<ul>
<li>☐ <strong>Bản photo giấy chứng nhận</strong> — đã cầm trên tay, đọc đủ mọi trang, kể cả trang cập nhật biến động ở cuối.</li>
<li>☐ <strong>Người bán khớp với người đứng tên</strong> — đối chiếu CCCD với sổ, kiểm tra cả họ tên và số giấy tờ.</li>
<li>☐ <strong>Tình trạng hôn nhân</strong> — nếu đã kết hôn, xác định tài sản chung hay riêng; tài sản chung cần cả hai ký.</li>
<li>☐ <strong>Nếu đồng sở hữu</strong> — có mặt hoặc ủy quyền công chứng hợp lệ của tất cả.</li>
<li>☐ <strong>Nếu là tài sản thừa kế</strong> — có văn bản thỏa thuận phân chia di sản đã công chứng.</li>
<li>☐ <strong>Tình trạng thế chấp</strong> — sổ đang ở đâu? Nếu ở ngân hàng, đã có phương án giao dịch ba bên chưa?</li>
<li>☐ <strong>Thông tin quy hoạch</strong> — có văn bản từ cơ quan quản lý cấp huyện/quận cho <em>chính thửa đất này</em>.</li>
<li>☐ <strong>Mục đích sử dụng đất và diện tích từng loại</strong> — bao nhiêu m² là đất ở?</li>
<li>☐ <strong>Thời hạn sử dụng đất</strong> — lâu dài hay có thời hạn cụ thể?</li>
</ul>
<h3>Nhóm B — Rất nên làm</h3>
<ul>
<li>☐ <strong>Đo đạc thực tế</strong> đối chiếu diện tích trên sổ.</li>
<li>☐ <strong>Đối chiếu hiện trạng với giấy phép xây dựng</strong> — có xây vượt tầng, vượt mật độ không?</li>
<li>☐ <strong>Xác định lối đi</strong> — đường công cộng hay đi nhờ qua đất người khác?</li>
<li>☐ <strong>Hỏi 2–3 hộ hàng xóm</strong> về tranh chấp, ngập nước, an ninh, chủ nhà. Nguồn thông tin rẻ nhất và trung thực bất ngờ.</li>
<li>☐ <strong>Định giá sơ bộ từ ngân hàng</strong> cho chính căn này.</li>
<li>☐ <strong>Đưa hồ sơ cho công chứng viên xem trước</strong>.</li>
<li>☐ <strong>Đến xem vào ít nhất 2 khung giờ</strong> — sáng cao điểm và buổi tối.</li>
<li>☐ <strong>Kiểm tra nợ phí quản lý, phí dịch vụ</strong> (với căn hộ) — nợ cũ có thể chuyển sang bạn.</li>
</ul>
<h3>Nhóm C — Với nhà dự án, hình thành trong tương lai</h3>
<ul>
<li>☐ <strong>Văn bản thông báo đủ điều kiện bán</strong> của cơ quan quản lý nhà ở cấp tỉnh.</li>
<li>☐ <strong>Thư bảo lãnh ngân hàng</strong> cho chính căn hộ của bạn.</li>
<li>☐ <strong>Biên bản nghiệm thu phần móng</strong>.</li>
<li>☐ <strong>Giấy tờ pháp lý dự án</strong>: quyết định giao đất, giấy chứng nhận của dự án, giấy phép xây dựng.</li>
<li>☐ <strong>Tình trạng thế chấp dự án</strong> và văn bản giải chấp cho căn hộ của bạn nếu có.</li>
<li>☐ <strong>Đi thực địa xem công trường</strong> — có thi công thật không, tiến độ có khớp cam kết không.</li>
<li>☐ <strong>Lịch sử bàn giao của chủ đầu tư</strong> ở các dự án trước.</li>
</ul>`,
        advanced: `<h3>Đọc kỹ những gì trong hợp đồng mua bán dự án</h3>
<p>Hợp đồng mua bán căn hộ do chủ đầu tư soạn, dài hàng chục trang, và được thiết kế để bảo vệ họ. Các điều khoản đáng đọc kỹ nhất:</p>
<table>
<tr><th>Điều khoản</th><th>Cần chú ý gì</th></tr>
<tr><td><strong>Diện tích</strong></td><td>Tính theo thông thủy hay tim tường? Sai số cho phép bao nhiêu? Nếu bàn giao thiếu diện tích thì xử lý thế nào?</td></tr>
<tr><td><strong>Tiến độ bàn giao</strong></td><td>Ngày cụ thể hay "dự kiến"? Được gia hạn bao lâu? Phạt chậm bàn giao mức nào — và có tương xứng với mức phạt bạn phải chịu khi chậm thanh toán không?</td></tr>
<tr><td><strong>Vật liệu, thiết bị bàn giao</strong></td><td>Có danh mục cụ thể kèm thương hiệu không, hay chỉ ghi "tương đương"?</td></tr>
<tr><td><strong>Phí quản lý</strong></td><td>Mức dự kiến, cơ chế điều chỉnh, ai quyết định</td></tr>
<tr><td><strong>Sở hữu chung – riêng</strong></td><td>Chỗ để xe, tầng hầm, phòng sinh hoạt cộng đồng thuộc về ai? Đây là nguồn tranh chấp phổ biến nhất sau khi về ở</td></tr>
<tr><td><strong>Thời hạn cấp giấy chứng nhận</strong></td><td>Cam kết trong bao lâu? Chế tài nếu chậm?</td></tr>
<tr><td><strong>Điều kiện chấm dứt hợp đồng</strong></td><td>Bạn được rút trong trường hợp nào, mất bao nhiêu?</td></tr>
</table>
<div class="tip-box"><strong>Mẹo đàm phán ít người dùng:</strong> so sánh mức phạt hai chiều. Nhiều hợp đồng phạt người mua chậm thanh toán rất nặng, nhưng phạt chủ đầu tư chậm bàn giao rất nhẹ hoặc có nhiều ngoại lệ. Chỉ ra sự bất đối xứng này là một điểm đàm phán hợp lý, và ngay cả khi không sửa được hợp đồng, phản ứng của họ cho bạn biết nhiều điều.</div>`,
        diagram: null
    },

    'xem-nha': {
        icon: '🔍', title: 'Xem Nhà — Kiểm Tra Những Gì', category: 'practice',
        connections: ['vi-tri', 'checklist-phap-ly', 'chi-phi-an', 'dam-phan-gia'],
        simple: `<h3>🔍 Xem Nhà — Kiểm Tra Những Gì</h3>
<p>Người bán chuẩn bị căn nhà để bạn thích nó. Nhiệm vụ của bạn là tìm ra những gì họ không muốn bạn thấy — không phải vì họ gian dối, mà vì đó là bản chất của việc bán hàng.</p>
<div class="tip-box"><strong>Nguyên tắc vàng:</strong> đi xem ít nhất <strong>hai lần, hai khung giờ khác nhau</strong>. Lần đầu buổi trưa nắng đẹp, lần sau vào giờ cao điểm buổi sáng hoặc tối. Rất nhiều vấn đề chỉ lộ ra đúng khung giờ: kẹt xe, tiếng ồn, mùi, hàng quán, an ninh.</div>`,
        detail: `<h3>Kiểm tra bên ngoài — khu vực</h3>
<ul>
<li><strong>Đường vào</strong> — rộng bao nhiêu mét, ô tô vào được không, có phải đường cụt không, mặt đường và thoát nước thế nào.</li>
<li><strong>Dấu vết ngập</strong> — vệt nước trên tường rào, nền nhà hàng xóm được nâng cao, bậc tam cấp bất thường. Hỏi thẳng hàng xóm: "mùa mưa ở đây có ngập không?"</li>
<li><strong>Xung quanh</strong> — nhà máy, bãi rác, trạm biến áp, nghĩa trang, quán nhậu, karaoke, chợ tự phát.</li>
<li><strong>Tiện ích</strong> — chợ, siêu thị, trường, bệnh viện trong bán kính đi bộ hoặc 5 phút xe.</li>
<li><strong>Hướng nhà</strong> — hướng Tây nhận nắng gắt buổi chiều, ảnh hưởng thật tới tiền điện và độ thoải mái.</li>
</ul>
<h3>Kiểm tra bên trong — công trình</h3>
<table>
<tr><th>Hạng mục</th><th>Dấu hiệu cần tìm</th></tr>
<tr><td><strong>Thấm dột</strong></td><td>Vệt ố trên trần và chân tường, sơn mới loang lổ ở một mảng, mùi ẩm mốc, tường phồng rộp. <strong>Sơn mới ở một chỗ duy nhất luôn đáng nghi.</strong></td></tr>
<tr><td><strong>Nứt</strong></td><td>Nứt chân chim ở lớp vữa là bình thường. Nứt xiên qua tường chịu lực, nứt rộng, nứt ở cột dầm là vấn đề nghiêm trọng</td></tr>
<tr><td><strong>Điện</strong></td><td>Tủ điện có aptomat riêng từng khu không, dây có cũ không, đủ ổ cắm không</td></tr>
<tr><td><strong>Nước</strong></td><td>Mở tất cả vòi cùng lúc xem áp lực; xả bồn cầu; kiểm tra thoát sàn nhà tắm có đọng nước không</td></tr>
<tr><td><strong>Cửa và cửa sổ</strong></td><td>Đóng mở có kẹt không — cửa kẹt có thể là dấu hiệu nhà bị lún, nghiêng</td></tr>
<tr><td><strong>Sàn</strong></td><td>Gạch bộp (gõ nghe rỗng), sàn gỗ cong vênh do ẩm</td></tr>
<tr><td><strong>Thông gió, ánh sáng</strong></td><td>Có phòng nào không có cửa sổ không? Ban ngày có phải bật đèn không?</td></tr>
</table>
<div class="warning-box"><strong>Đi xem nhà vào ngày mưa là cơ hội vàng.</strong> Mọi vấn đề thấm dột, ngập, thoát nước đều lộ ra ngay. Nếu bạn nghiêm túc với một căn nhà, hãy cố gắng quay lại vào một ngày mưa trước khi đặt cọc.</div>`,
        advanced: `<h3>Riêng với căn hộ chung cư</h3>
<ul>
<li><strong>Ban quản lý và ban quản trị</strong> — hỏi cư dân về chất lượng vận hành. Đây là yếu tố ảnh hưởng lớn tới chất lượng sống và giá trị dài hạn, nhưng không nhìn thấy khi đi xem căn hộ.</li>
<li><strong>Quỹ bảo trì</strong> — đã bàn giao cho ban quản trị chưa? Tranh chấp quỹ bảo trì là vấn đề phổ biến.</li>
<li><strong>Chỗ để xe</strong> — có đủ không, phí bao nhiêu, thuộc sở hữu chung hay chủ đầu tư giữ?</li>
<li><strong>Thang máy</strong> — số lượng trên số căn, tình trạng hoạt động, thời gian chờ giờ cao điểm.</li>
<li><strong>Phòng cháy chữa cháy</strong> — đã nghiệm thu chưa? Đây là vấn đề nghiêm trọng ở một số dự án.</li>
<li><strong>Tỷ lệ lấp đầy</strong> — tòa nhà có đông người ở không? Tòa vắng thường có phí quản lý cao hơn tính trên đầu người và tiện ích kém hơn.</li>
<li><strong>Tiếng ồn</strong> — đứng trong căn hộ, đóng cửa, nghe. Tiếng từ hành lang, từ căn bên cạnh, từ đường.</li>
</ul>
<div class="tip-box"><strong>Nguồn thông tin tốt nhất là cư dân đang sống ở đó, không phải môi giới.</strong> Hãy đến vào buổi tối, ngồi ở sảnh hoặc khu vực công cộng, bắt chuyện với vài người. Hỏi họ điều gì làm họ khó chịu nhất khi sống ở đây. Câu trả lời thường rất thẳng thắn và cực kỳ hữu ích.</div>
<h3>Có nên thuê kiểm định độc lập?</h3>
<p>Ở Mỹ và nhiều nước, thuê một kiểm định viên nhà (home inspector) trước khi mua là thông lệ chuẩn. Ở Việt Nam dịch vụ này chưa phổ biến với nhà ở dân dụng, nhưng bạn vẫn có thể:</p>
<ul>
<li>Nhờ một người quen làm xây dựng đi cùng — chi phí gần như bằng không, giá trị rất cao.</li>
<li>Thuê đơn vị kiểm định với giao dịch giá trị lớn hoặc nhà cũ có dấu hiệu xuống cấp.</li>
<li>Với căn hộ mới nhận bàn giao, thuê dịch vụ kiểm tra bàn giao — dịch vụ này đã khá phổ biến và giúp lập biên bản lỗi để chủ đầu tư khắc phục.</li>
</ul>`,
        diagram: null
    },

    'dam-phan-gia': {
        icon: '🤝', title: 'Đàm Phán Giá', category: 'practice',
        connections: ['pp-so-sanh', 'tham-dinh-gia-nh', 'xem-nha', 'ban-nha'],
        simple: `<h3>🤝 Đàm Phán Giá</h3>
<p>Đàm phán bất động sản không phải là mặc cả kiểu chợ. Nó là việc <strong>đưa ra một con số có căn cứ, và cho bên kia thấy căn cứ đó.</strong></p>
<div class="example-box"><strong>Hai cách trả giá:</strong><br>
❌ "Anh bớt cho em 200 triệu được không?" — không có căn cứ, dễ bị từ chối.<br>
✅ "Ba căn tương tự trong khu này bán 3,1–3,2 tỷ trong 4 tháng qua. Căn này cần chống thấm và thay hệ thống điện, em ước tính 150 triệu. Em đề nghị 3,05 tỷ." — có căn cứ, khó bác bỏ, và mở đường cho một cuộc trao đổi thật.</div>`,
        detail: `<h3>Chuẩn bị trước khi đàm phán</h3>
<ol>
<li><strong>Biết mặt bằng giá.</strong> Xem tối thiểu 10 căn tương tự. Không thể đàm phán tốt nếu không biết giá thị trường.</li>
<li><strong>Biết giá đã chốt, không chỉ giá rao.</strong> Hỏi môi giới về giao dịch gần đây đã hoàn tất; đối chiếu nhiều nguồn.</li>
<li><strong>Lập danh sách khiếm khuyết kèm chi phí sửa ước tính.</strong> Đây là công cụ đàm phán mạnh nhất và cụ thể nhất.</li>
<li><strong>Xác định giá trần của bạn — và viết ra giấy.</strong> Con số bạn sẽ đứng dậy bỏ đi nếu vượt quá.</li>
<li><strong>Tìm hiểu động cơ của người bán.</strong> Họ cần tiền gấp? Đã mua nhà khác? Bán vì chuyển công tác? Người bán gấp linh hoạt hơn nhiều về giá.</li>
</ol>
<h3>Những đòn bẩy ngoài giá</h3>
<p>Khi người bán cứng về giá, hãy đàm phán các yếu tố khác — nhiều khi giá trị còn lớn hơn:</p>
<table>
<tr><th>Yếu tố</th><th>Giá trị với bạn</th></tr>
<tr><td><strong>Ai chịu thuế phí</strong></td><td>2–3% giá trị — thường lớn hơn phần giảm giá bạn xin được</td></tr>
<tr><td><strong>Thời hạn đặt cọc dài hơn</strong></td><td>Giảm rủi ro mất cọc do chậm duyệt vay</td></tr>
<tr><td><strong>Điều khoản hoàn cọc</strong></td><td>Bảo vệ bạn nếu thẩm định thấp hoặc phát hiện vấn đề pháp lý</td></tr>
<tr><td><strong>Nội thất để lại</strong></td><td>Có thể đáng vài chục tới vài trăm triệu</td></tr>
<tr><td><strong>Người bán sửa trước khi giao</strong></td><td>Họ biết thợ, thường sửa rẻ hơn bạn tự làm</td></tr>
<tr><td><strong>Thời điểm bàn giao</strong></td><td>Linh hoạt cho bạn thời gian thu xếp</td></tr>
</table>
<div class="tip-box"><strong>Đề nghị người bán chịu toàn bộ thuế phí thường dễ được chấp nhận hơn xin giảm giá tương đương</strong>, vì nó không làm giảm "con số" mà người bán khoe với người khác. Về mặt tài chính với bạn thì như nhau.</div>`,
        advanced: `<h3>Vị thế đàm phán thay đổi theo chu kỳ</h3>
<table>
<tr><th>Thị trường</th><th>Ai có lợi thế</th><th>Chiến thuật phù hợp</th></tr>
<tr><td><strong>Nóng</strong> — nhiều người mua, ít hàng</td><td>Người bán</td><td>Tập trung vào tốc độ và sự chắc chắn: hồ sơ vay đã sơ duyệt, sẵn sàng cọc nhanh. Đừng cố ép giá — bạn sẽ mất căn.</td></tr>
<tr><td><strong>Lạnh</strong> — ít giao dịch, hàng tồn nhiều</td><td>Người mua</td><td>Kiên nhẫn. Trả giá thấp có căn cứ. Nhiều căn để chọn nên sẵn sàng bỏ đi.</td></tr>
<tr><td><strong>Cân bằng</strong></td><td>Không bên nào</td><td>Đàm phán dựa trên khiếm khuyết cụ thể và điều khoản</td></tr>
</table>
<div class="warning-box"><strong>Sai lầm đắt nhất trong đàm phán là "yêu" một căn nhà.</strong> Khi bạn đã hình dung mình sống ở đó, bạn mất khả năng bỏ đi — và mất luôn toàn bộ vị thế đàm phán. Cách phòng: luôn có ít nhất hai lựa chọn đang cân nhắc song song, và viết giá trần ra giấy <em>trước khi</em> vào cuộc thương lượng.</div>
<h3>Vai trò và động cơ của môi giới</h3>
<p>Hiểu đúng động cơ giúp bạn dùng môi giới hiệu quả hơn:</p>
<ul>
<li>Môi giới chỉ được trả tiền <strong>khi giao dịch thành công</strong>. Nên họ muốn chốt deal, hơn là muốn bạn được giá tốt nhất.</li>
<li>Phần lớn hoa hồng do bên bán trả, nên về mặt kinh tế họ gần với bên bán hơn.</li>
<li>Chênh lệch hoa hồng giữa giá 3,0 tỷ và 3,1 tỷ là nhỏ với họ, nhưng 100 triệu là lớn với bạn. Nghĩa là họ có động cơ thúc bạn chốt nhanh hơn là thúc người bán giảm giá.</li>
</ul>
<div class="tip-box"><strong>Điều này không có nghĩa môi giới là đối thủ.</strong> Một môi giới giỏi cho bạn thông tin thị trường quý giá và tiết kiệm rất nhiều thời gian. Chỉ cần nhớ: <em>mọi thông tin từ môi giới cần được kiểm chứng độc lập</em>, đặc biệt là thông tin pháp lý và quy hoạch. Hãy dùng họ để tìm hàng và hiểu thị trường, đừng dùng họ để thẩm định.</div>`,
        diagram: null
    },

    'vay-ngan-hang': {
        icon: '🏦', title: 'Vay Ngân Hàng — Hồ Sơ & Điều Kiện', category: 'practice',
        connections: ['ltv-dti', 'lai-suat-tha-noi', 'tham-dinh-gia-nh', 'don-bay'],
        simple: `<h3>🏦 Vay Ngân Hàng — Hồ Sơ & Điều Kiện</h3>
<p>Ngân hàng trả lời hai câu hỏi trước khi cho bạn vay:</p>
<ol>
<li><strong>Tài sản này đáng bao nhiêu?</strong> → quyết định trần vay theo tỷ lệ LTV.</li>
<li><strong>Bạn có trả nổi không?</strong> → quyết định trần vay theo thu nhập (DTI).</li>
</ol>
<div class="example-box"><strong>Bạn được vay theo con số <em>nhỏ hơn</em> trong hai kết quả trên.</strong> Nhiều người chỉ tính theo giá nhà mà quên kiểm tra điều kiện thu nhập, rồi bất ngờ khi hồ sơ không được duyệt đủ mức mong muốn.</div>`,
        detail: `<h3>Hồ sơ cần chuẩn bị</h3>
<table>
<tr><th>Nhóm</th><th>Giấy tờ</th></tr>
<tr><td><strong>Nhân thân</strong></td><td>CCCD, giấy xác nhận cư trú, giấy đăng ký kết hôn hoặc xác nhận độc thân</td></tr>
<tr><td><strong>Thu nhập từ lương</strong></td><td>Hợp đồng lao động, sao kê tài khoản lương 6–12 tháng, quyết định lương hoặc xác nhận của công ty</td></tr>
<tr><td><strong>Thu nhập kinh doanh</strong></td><td>Giấy phép kinh doanh, sổ sách/báo cáo tài chính, sao kê tài khoản, hóa đơn</td></tr>
<tr><td><strong>Thu nhập cho thuê</strong></td><td>Hợp đồng cho thuê, chứng từ nhận tiền qua ngân hàng</td></tr>
<tr><td><strong>Tài sản bảo đảm</strong></td><td>Giấy chứng nhận của bất động sản mua hoặc tài sản khác đem thế chấp</td></tr>
<tr><td><strong>Mục đích vay</strong></td><td>Hợp đồng đặt cọc hoặc hợp đồng mua bán, chứng từ thanh toán</td></tr>
</table>
<div class="warning-box"><strong>Thu nhập không chính thức là rào cản lớn nhất ở Việt Nam.</strong> Rất nhiều người có thu nhập thực cao nhưng phần lớn nhận tiền mặt hoặc không qua tài khoản. Ngân hàng chỉ tính được phần chứng minh được. <strong>Nếu bạn dự định mua nhà trong 1–2 năm tới, hãy bắt đầu nhận thu nhập qua tài khoản ngân hàng ngay từ bây giờ</strong> — 12 tháng sao kê đẹp có giá trị hơn mọi lời giải thích.</div>
<h3>Quy trình và thời gian</h3>
<ol>
<li><strong>Sơ duyệt</strong> (vài ngày) — ngân hàng ước tính hạn mức dựa trên thông tin bạn cung cấp. Nên làm <em>trước</em> khi đi xem nhà.</li>
<li><strong>Nộp hồ sơ chính thức</strong> (1 tuần) — đầy đủ giấy tờ.</li>
<li><strong>Thẩm định tài sản</strong> (3–7 ngày) — đơn vị thẩm định đến xem và định giá.</li>
<li><strong>Phê duyệt</strong> (1–2 tuần) — tùy hạn mức và cấp phê duyệt.</li>
<li><strong>Ký hợp đồng tín dụng và thế chấp</strong>, đăng ký giao dịch bảo đảm.</li>
<li><strong>Giải ngân</strong> — thường vào ngày công chứng hợp đồng mua bán.</li>
</ol>`,
        advanced: `<h3>So sánh giữa các ngân hàng — đừng chỉ nhìn lãi suất ưu đãi</h3>
<p>Con số quảng cáo hầu như luôn là lãi suất ưu đãi ngắn hạn. Hãy hỏi và ghi lại đủ các thông tin sau từ mỗi ngân hàng:</p>
<table>
<tr><th>Câu hỏi</th><th>Vì sao quan trọng</th></tr>
<tr><td>Lãi suất ưu đãi bao nhiêu, <strong>trong bao lâu</strong>?</td><td>6 tháng hay 24 tháng là khác biệt rất lớn</td></tr>
<tr><td><strong>Công thức lãi suất sau ưu đãi</strong> là gì?</td><td>Thường là "lãi suất cơ sở + biên độ x%". Biên độ là con số quan trọng nhất, hãy hỏi thẳng</td></tr>
<tr><td>Lãi suất sau ưu đãi <strong>hiện đang là bao nhiêu</strong> với khách hàng cũ?</td><td>Đây là con số thực tế bạn sẽ trả trong 18 năm còn lại</td></tr>
<tr><td>Điều chỉnh lãi suất <strong>bao lâu một lần</strong>?</td><td>3 tháng, 6 tháng hay 12 tháng</td></tr>
<tr><td><strong>Phí trả nợ trước hạn</strong> bao nhiêu, trong mấy năm đầu?</td><td>Thường 1–3% dư nợ trả trước, giảm dần theo năm. Quan trọng nếu bạn dự định trả sớm</td></tr>
<tr><td>Có bắt buộc mua <strong>bảo hiểm khoản vay</strong> không, phí bao nhiêu?</td><td>Có thể là khoản đáng kể cộng vào chi phí thực</td></tr>
<tr><td>Các <strong>phí khác</strong>: thẩm định, công chứng thế chấp, đăng ký giao dịch bảo đảm</td><td>Cộng lại có thể vài chục triệu</td></tr>
</table>
<div class="tip-box"><strong>Cách so sánh đúng:</strong> tính tổng số tiền phải trả trong <strong>5 năm đầu</strong> cho mỗi ngân hàng, gồm cả lãi ưu đãi, lãi sau ưu đãi ước tính, và toàn bộ phí. Ngân hàng có lãi ưu đãi thấp nhất thường không phải ngân hàng rẻ nhất theo thước đo này — biên độ sau ưu đãi mới là thứ quyết định.</div>
<h3>Lời khuyên riêng cho người vay lần đầu</h3>
<ul>
<li><strong>Nộp hồ sơ ở 2–3 ngân hàng cùng lúc.</strong> Bạn có quyền chọn, và việc có nhiều lựa chọn cải thiện vị thế đàm phán.</li>
<li><strong>Đừng vay tối đa chỉ vì được duyệt tối đa.</strong> Ngân hàng tính khả năng trả nợ theo công thức của họ, không tính lối sống, kế hoạch sinh con, hay rủi ro nghề nghiệp của bạn.</li>
<li><strong>Kiểm tra lịch sử tín dụng của mình trước.</strong> Nợ xấu từ một thẻ tín dụng quên đóng có thể làm hỏng cả hồ sơ. Bạn có thể tra cứu thông tin tín dụng cá nhân của mình.</li>
<li><strong>Hỏi rõ về khả năng trả nợ trước hạn một phần.</strong> Nếu bạn có thưởng cuối năm, việc trả bớt gốc mỗi năm tiết kiệm rất nhiều lãi — nhưng chỉ khi phí phạt không nuốt hết phần tiết kiệm đó.</li>
</ul>`,
        diagram: null
    },

    'ltv-dti': {
        icon: '📉', title: 'LTV & DTI — Bạn Vay Được Bao Nhiêu', category: 'practice',
        connections: ['vay-ngan-hang', 'don-bay', 'tin-dung-gia-nha', 'may-tinh-vay'],
        simple: `<h3>📉 LTV & DTI — Bạn Vay Được Bao Nhiêu</h3>
<p>Hai chỉ số quyết định hạn mức vay của bạn:</p>
<div class="formula-box"><strong>LTV</strong> (Loan to Value) = Số tiền vay ÷ Giá trị thẩm định × 100%<br><br>
<strong>DTI</strong> (Debt to Income) = Tổng nghĩa vụ trả nợ tháng ÷ Thu nhập tháng × 100%</div>
<div class="example-box"><strong>LTV</strong> bảo vệ ngân hàng: nếu phải phát mại, họ cần bán được đủ thu hồi nợ.<br>
<strong>DTI</strong> bảo vệ cả hai: nếu bạn trả không nổi, cả bạn và ngân hàng đều thiệt.</div>`,
        detail: `<h3>LTV — trần vay theo tài sản</h3>
<p>Mức LTV phổ biến với vay mua nhà ở Việt Nam thường trong khoảng <strong>70–80%</strong> giá trị thẩm định, tùy ngân hàng, tùy loại tài sản và hồ sơ khách hàng.</p>
<div class="warning-box"><strong>Điểm mấu chốt:</strong> LTV tính trên <strong>giá trị thẩm định của ngân hàng</strong>, không phải giá bạn mua. Nếu bạn mua 4 tỷ nhưng ngân hàng định giá 3,5 tỷ và cho vay 70%, bạn được vay 2,45 tỷ — nghĩa là bạn cần chuẩn bị 1,55 tỷ, tương đương 39% giá mua thật, chứ không phải 30%.</div>
<h3>DTI — trần vay theo thu nhập</h3>
<p>Ngân hàng giới hạn tổng nghĩa vụ trả nợ hàng tháng so với thu nhập. Mức thường thấy là khoảng <strong>50–60%</strong> thu nhập chứng minh được, và <strong>tổng nghĩa vụ</strong> ở đây gồm mọi khoản nợ của bạn, không chỉ khoản vay mua nhà:</p>
<ul>
<li>Trả góp khoản vay mua nhà đang xin.</li>
<li>Trả góp xe, vay tiêu dùng.</li>
<li>Dư nợ thẻ tín dụng (thường được quy đổi thành nghĩa vụ tháng theo tỷ lệ).</li>
<li>Các khoản vay khác thể hiện trên hệ thống thông tin tín dụng.</li>
</ul>
<div class="example-box"><strong>Ví dụ tính:</strong> Thu nhập hộ gia đình chứng minh được 50 triệu/tháng. Ngân hàng áp DTI 55% → tổng nghĩa vụ tối đa 27,5 triệu/tháng. Bạn đang trả góp xe 7 triệu → còn <strong>20,5 triệu</strong> cho khoản vay mua nhà.<br>
Với lãi suất 11%/năm, kỳ hạn 20 năm, khoản trả góp 20,5 triệu/tháng tương ứng số tiền vay khoảng <strong>1,98 tỷ</strong>.</div>`,
        advanced: `<h3>Ngân hàng tính, và bạn nên tính khác</h3>
<p>Đây là điểm quan trọng nhất của chủ điểm này. Ngân hàng tính DTI dựa trên công thức của họ — nhưng công thức đó không biết gì về cuộc sống của bạn.</p>
<table>
<tr><th>Ngân hàng tính</th><th>Bạn nên tính</th></tr>
<tr><td>Thu nhập chứng minh được</td><td>Thu nhập ròng thực nhận, sau thuế và bảo hiểm</td></tr>
<tr><td>Không trừ chi phí sinh hoạt</td><td>Trừ chi phí sinh hoạt thực tế của gia đình</td></tr>
<tr><td>Giả định thu nhập ổn định</td><td>Cân nhắc rủi ro mất việc, thu nhập biến động</td></tr>
<tr><td>Không tính chi phí sở hữu nhà</td><td>Cộng phí quản lý, bảo trì, điện nước tăng thêm</td></tr>
<tr><td>Không tính kế hoạch tương lai</td><td>Sinh con, chi phí học hành, chăm sóc cha mẹ</td></tr>
<tr><td>Tính theo lãi suất hiện tại</td><td>Tính thêm ở mức lãi suất cao hơn 3–4 điểm phần trăm</td></tr>
</table>
<div class="warning-box"><strong>Ngưỡng an toàn nên tự đặt cho mình: khoản trả góp không quá 35–40% thu nhập ròng.</strong> Ngân hàng có thể duyệt cho bạn 55–60%, nhưng ở mức đó, một biến cố nhỏ — giảm lương, một đợt ốm, lãi suất tăng — sẽ đẩy bạn vào khủng hoảng tiền mặt. Khoảng cách giữa "được duyệt" và "nên vay" là khoảng cách giữa nhiều năm căng thẳng và nhiều năm yên tâm.</div>
<h3>Bài kiểm tra chịu đựng tự làm</h3>
<p>Trước khi ký, hãy tính khoản trả góp của bạn ở ba kịch bản, dùng máy tính vay ở tab Công cụ:</p>
<ol>
<li><strong>Kịch bản hiện tại</strong> — lãi suất ưu đãi bạn được chào.</li>
<li><strong>Kịch bản thực tế</strong> — lãi suất sau ưu đãi mà ngân hàng đang áp cho khách cũ.</li>
<li><strong>Kịch bản căng thẳng</strong> — kịch bản 2 cộng thêm 3 điểm phần trăm.</li>
</ol>
<p>Nếu kịch bản 3 làm bạn không thở được, bạn đang vay quá nhiều. Đây không phải bi quan — đây là điều các cơ quan quản lý ở nhiều nước <em>bắt buộc</em> ngân hàng phải làm khi thẩm định, chính vì nó dự báo tốt khả năng vỡ nợ.</p>
<div class="tip-box"><strong>Vì sao ba kịch bản này quan trọng hơn ở Việt Nam:</strong> phần lớn khoản vay mua nhà tại Việt Nam là lãi suất thả nổi sau một giai đoạn ưu đãi ngắn. Nghĩa là kịch bản 2 và 3 không phải giả thuyết xa vời — chúng là điều gần như chắc chắn sẽ xảy ra trong vòng 1–2 năm sau khi bạn ký.</div>`,
        diagram: 're-afford'
    },

    'lai-suat-tha-noi': {
        icon: '🎢', title: 'Lãi Suất Cố Định vs Thả Nổi', category: 'practice',
        connections: ['vay-ngan-hang', 'ltv-dti', 'lam-phat-bds', 'us-tong-quan'],
        simple: `<h3>🎢 Lãi Suất Cố Định vs Thả Nổi</h3>
<p>Đây là điều khoản có ảnh hưởng tài chính lớn nhất trong hợp đồng vay của bạn, và cũng là điều khoản ít được đọc kỹ nhất.</p>
<table>
<tr><th></th><th>Cố định</th><th>Thả nổi</th></tr>
<tr><td>Lãi suất</td><td>Không đổi suốt kỳ hạn</td><td>Điều chỉnh định kỳ theo thị trường</td></tr>
<tr><td>Khoản trả góp</td><td>Biết trước chính xác</td><td>Thay đổi, có thể tăng mạnh</td></tr>
<tr><td>Ai chịu rủi ro lãi suất</td><td>Ngân hàng</td><td><strong>Bạn</strong></td></tr>
<tr><td>Mức khởi điểm</td><td>Cao hơn</td><td>Thấp hơn (nhất là trong kỳ ưu đãi)</td></tr>
</table>
<div class="warning-box"><strong>Ở Việt Nam, gần như mọi khoản vay mua nhà đều là thả nổi</strong> sau một giai đoạn ưu đãi ngắn. Vay cố định dài hạn 20–30 năm như ở Mỹ hầu như không có. Điều này nghĩa là <strong>bạn — chứ không phải ngân hàng — đang gánh rủi ro lãi suất trong suốt hai thập kỷ.</strong></div>`,
        detail: `<h3>Cách lãi suất thả nổi thực sự hoạt động</h3>
<p>Hợp đồng thường có cấu trúc:</p>
<div class="formula-box">Giai đoạn 1: Lãi suất ưu đãi cố định — ví dụ 7,5%/năm trong 12 tháng đầu<br><br>
Giai đoạn 2: Lãi suất = Lãi suất cơ sở của ngân hàng + Biên độ (ví dụ 3,5%)</div>
<p>Con số quan trọng nhất trong cả hợp đồng là <strong>biên độ</strong>, vì nó cố định suốt thời gian vay. Lãi suất cơ sở thì do ngân hàng công bố và thay đổi theo thời gian.</p>
<div class="example-box"><strong>Cú sốc điển hình:</strong><br>
• Năm 1: lãi ưu đãi 7,5% → trả góp 16,1 triệu/tháng (vay 2 tỷ, 20 năm)<br>
• Năm 2 trở đi: lãi suất cơ sở 8,5% + biên độ 3,5% = 12% → trả góp tăng lên khoảng <strong>22,0 triệu/tháng</strong><br>
Khoản trả góp tăng gần <strong>37%</strong> chỉ sau một năm, trong khi thu nhập của bạn có thể không đổi.</div>
<div class="warning-box"><strong>Đây là nguyên nhân số một khiến người vay mua nhà ở Việt Nam gặp khó khăn tài chính.</strong> Họ tính toán khả năng trả nợ dựa trên lãi suất ưu đãi năm đầu — con số mà ngân hàng và chủ đầu tư quảng cáo — rồi bị bất ngờ khi bước sang năm thứ hai.</div>`,
        advanced: `<h3>Câu hỏi bắt buộc phải hỏi trước khi ký</h3>
<ol>
<li><strong>"Biên độ là bao nhiêu?"</strong> — Đây là con số quan trọng nhất. Hãy hỏi thẳng và yêu cầu ghi rõ trong hợp đồng.</li>
<li><strong>"Lãi suất cơ sở được xác định thế nào?"</strong> — Theo lãi suất tiết kiệm 12 tháng, 13 tháng, hay công thức riêng của ngân hàng? Cơ chế càng minh bạch càng tốt.</li>
<li><strong>"Khách hàng vay từ 2 năm trước hiện đang trả lãi suất bao nhiêu?"</strong> — Đây là câu hỏi hay nhất bạn có thể hỏi. Nó cho bạn con số thực tế, không phải con số quảng cáo.</li>
<li><strong>"Điều chỉnh bao lâu một lần?"</strong> — 3, 6 hay 12 tháng.</li>
<li><strong>"Có trần lãi suất không?"</strong> — Hiếm khi có, nhưng đáng hỏi.</li>
<li><strong>"Phí trả nợ trước hạn thế nào?"</strong> — Nếu lãi tăng quá cao và bạn muốn chuyển sang ngân hàng khác, phí này là rào cản.</li>
</ol>
<div class="tip-box"><strong>Câu hỏi số 3 là công cụ mạnh nhất của bạn.</strong> Lãi suất ưu đãi là công cụ marketing; lãi suất đang áp cho khách hàng cũ là sự thật. Hãy hỏi ở cả 2–3 ngân hàng và so sánh con số đó, thay vì so sánh các mức ưu đãi.</div>
<h3>Chiến lược quản lý rủi ro lãi suất</h3>
<ul>
<li><strong>Tính khả năng trả nợ theo lãi suất sau ưu đãi</strong>, không theo lãi ưu đãi. Coi giai đoạn ưu đãi là món quà, không phải cơ sở tính toán.</li>
<li><strong>Vay ít hơn mức được duyệt</strong> để có đệm chịu đựng khi lãi tăng.</li>
<li><strong>Trả bớt gốc khi có tiền dư</strong> — thưởng cuối năm, thu nhập bất thường. Trả gốc sớm tiết kiệm lãi rất nhiều, nhưng hãy kiểm tra phí phạt trước.</li>
<li><strong>Theo dõi thị trường và cân nhắc chuyển khoản vay</strong> nếu ngân hàng khác chào điều kiện tốt hơn đáng kể — tính cả chi phí chuyển đổi.</li>
<li><strong>Ưu tiên ngân hàng có biên độ thấp và cơ chế minh bạch</strong> hơn ngân hàng có ưu đãi năm đầu hấp dẫn nhất.</li>
</ul>
<h3>Vì sao Mỹ có vay cố định 30 năm mà Việt Nam thì không</h3>
<p>Vay cố định 30 năm ở Mỹ tồn tại được nhờ một hạ tầng tài chính đặc thù: ngân hàng cho vay rồi <strong>bán khoản vay đó</strong> cho các định chế được chính phủ hậu thuẫn, các khoản vay được đóng gói thành chứng khoán bảo đảm bằng thế chấp và bán cho nhà đầu tư trên toàn thế giới. Rủi ro lãi suất được chuyển cho thị trường vốn, không nằm lại ở ngân hàng.</p>
<p>Việt Nam chưa có thị trường thứ cấp cho khoản vay mua nhà ở quy mô tương tự. Ngân hàng huy động vốn ngắn hạn (tiền gửi vài tháng đến một năm) và cho vay dài hạn (20 năm). Nếu cố định lãi suất 20 năm, họ sẽ gánh toàn bộ rủi ro chênh lệch kỳ hạn — rủi ro đã từng làm sụp đổ nhiều tổ chức tín dụng ở các nước khác. Vì vậy họ chuyển rủi ro đó cho người vay thông qua cơ chế thả nổi.</p>
<div class="warning-box"><strong>Hệ quả thực tế bạn cần nhớ:</strong> mọi lời khuyên tài chính về mua nhà từ nguồn nước ngoài — đặc biệt là các lập luận kiểu "lạm phát sẽ bào mòn khoản nợ của bạn" — đều <em>giả định lãi suất cố định</em>. Ở Việt Nam giả định đó không đúng, và kết luận có thể đảo ngược hoàn toàn.</div>`,
        diagram: null
    },

    'chi-phi-an': {
        icon: '💧', title: 'Chi Phí Ẩn Khi Mua Nhà', category: 'practice',
        connections: ['chi-phi-so-huu', 'thue-phi-vn', 'thue-vs-mua', 'quy-trinh-mua-nha'],
        simple: `<h3>💧 Chi Phí Ẩn Khi Mua Nhà</h3>
<p>Giá nhà 3 tỷ không có nghĩa bạn cần 3 tỷ. Các khoản phát sinh cộng lại thường chiếm <strong>5–12% giá trị</strong> — với căn 3 tỷ là 150 đến 360 triệu.</p>
<div class="warning-box"><strong>Đây là lý do phổ biến khiến người mua bị hụt tiền vào phút cuối,</strong> phải vay nóng, hoặc phải cắt giảm những thứ cần thiết như sửa chữa an toàn điện nước.</div>`,
        detail: `<h3>Bảng chi phí đầy đủ — ví dụ với căn nhà 3 tỷ</h3>
<table>
<tr><th>Khoản</th><th>Ước tính</th><th>Ghi chú</th></tr>
<tr><td>Lệ phí trước bạ (0,5%)</td><td>15 triệu</td><td>Bên mua chịu</td></tr>
<tr><td>Thuế thu nhập cá nhân (2%)</td><td>60 triệu</td><td>Theo thông lệ bên bán chịu, nhưng thường được đàm phán vào giá</td></tr>
<tr><td>Phí công chứng</td><td>5–10 triệu</td><td>Theo biểu phí lũy tiến</td></tr>
<tr><td>Phí thẩm định hồ sơ, cấp giấy chứng nhận</td><td>1–3 triệu</td><td>Theo quy định địa phương</td></tr>
<tr><td>Phí môi giới</td><td>30–60 triệu</td><td>Thường bên bán chịu</td></tr>
<tr><td>Phí thẩm định giá của ngân hàng</td><td>2–5 triệu</td><td></td></tr>
<tr><td>Phí công chứng thế chấp, đăng ký giao dịch bảo đảm</td><td>1–3 triệu</td><td></td></tr>
<tr><td>Bảo hiểm khoản vay</td><td>10–30 triệu</td><td>Nhiều ngân hàng yêu cầu hoặc khuyến khích mạnh</td></tr>
<tr><td>Sửa chữa, cải tạo trước khi ở</td><td>50–300 triệu</td><td>Khoản biến động lớn nhất</td></tr>
<tr><td>Nội thất cơ bản</td><td>100–300 triệu</td><td>Rất dễ vượt dự trù</td></tr>
<tr><td>Chuyển nhà, lắp đặt</td><td>5–15 triệu</td><td></td></tr>
<tr><td>Phí quản lý, quỹ bảo trì (căn hộ)</td><td>Khoảng 2% giá trị cho quỹ bảo trì</td><td>Đóng một lần khi nhận bàn giao căn hộ mới</td></tr>
</table>
<div class="tip-box"><strong>Quy tắc dự trù:</strong> chuẩn bị thêm <strong>10% giá trị căn nhà</strong> ngoài phần vốn tự có dự kiến, và giữ nguyên quỹ dự phòng 6 tháng chi tiêu <em>không đụng tới</em>. Nếu không đủ để làm cả hai việc này, căn nhà đó đang vượt khả năng của bạn.</div>`,
        advanced: `<h3>Ba khoản bị đánh giá thấp nhất</h3>
<h4>1. Sửa chữa và nội thất</h4>
<p>Đây là khoản vượt dự trù thường xuyên nhất. Lý do tâm lý rất dễ hiểu: sau khi đã quyết định chi 3 tỷ, việc chi thêm 20 triệu cho một món đồ có vẻ nhỏ. Nhưng hai mươi quyết định như vậy là 400 triệu.</p>
<div class="warning-box"><strong>Cách phòng:</strong> lập ngân sách nội thất <em>trước khi</em> đặt cọc mua nhà, coi nó như một phần của tổng chi phí. Chia làm hai giai đoạn: thiết yếu (làm ngay) và mong muốn (làm sau 1–2 năm). Ở một thời gian rồi mới biết mình thực sự cần gì.</div>
<h4>2. Chi phí vận hành tăng thêm</h4>
<p>Chuyển từ nhà thuê nhỏ sang nhà lớn hơn làm tăng chi phí hàng tháng theo cách ít người tính:</p>
<ul>
<li>Điện tăng do diện tích lớn hơn, nhiều điều hòa hơn.</li>
<li>Phí quản lý, phí gửi xe (căn hộ).</li>
<li>Chi phí đi lại nếu nhà xa nơi làm việc hơn.</li>
<li>Bảo trì định kỳ mà trước đây chủ nhà cho thuê lo.</li>
</ul>
<h4>3. Bảo trì dài hạn</h4>
<p>Ước lượng khoảng <strong>1%–1,5% giá trị công trình mỗi năm</strong> cho bảo trì trong dài hạn. Nó không đến đều đặn: nhiều năm không tốn gì, rồi một năm phải chống thấm, thay điều hòa, sửa đường ống, sơn lại toàn bộ. Nếu bạn không lập quỹ riêng cho khoản này, nó sẽ đến vào lúc bạn không sẵn sàng và buộc bạn phải vay tiêu dùng lãi cao.</p>
<div class="tip-box"><strong>Cách làm đơn giản và hiệu quả:</strong> mở một tài khoản tiết kiệm riêng cho căn nhà, tự động chuyển vào đó một khoản cố định mỗi tháng (ví dụ 1–2 triệu). Sau vài năm bạn có quỹ đủ để xử lý mọi việc lớn mà không ảnh hưởng tới tài chính chung. Đây là thói quen nhỏ tạo khác biệt rất lớn qua hai thập kỷ sở hữu.</div>`,
        diagram: null
    },

    'phan-khuc-dau-tu': {
        icon: '🏘️', title: 'Đất Nền, Chung Cư, Nhà Phố, Shophouse', category: 'practice',
        connections: ['thanh-khoan', 'thoi-han-su-dung', 'rental-yield', 'reit-gian-tiep'],
        simple: `<h3>🏘️ Đất Nền, Chung Cư, Nhà Phố, Shophouse</h3>
<p>Mỗi loại hình có hồ sơ rủi ro và lợi nhuận rất khác nhau. Chọn sai loại hình so với mục tiêu của bạn là sai lầm tốn kém hơn cả chọn sai vị trí.</p>
<div class="example-box"><strong>Câu hỏi đầu tiên phải trả lời:</strong> bạn cần <em>dòng tiền</em> hay cần <em>tăng giá</em>? Bạn cần <em>thanh khoản</em> hay chấp nhận giữ lâu? Trả lời hai câu này trước, rồi mới chọn loại hình.</div>`,
        detail: `<h3>So sánh bốn loại hình chính</h3>
<table>
<tr><th></th><th>Đất nền</th><th>Chung cư</th><th>Nhà phố</th><th>Shophouse / nghỉ dưỡng</th></tr>
<tr><td><strong>Vốn vào</strong></td><td>Thấp – trung bình</td><td>Thấp nhất</td><td>Cao</td><td>Rất cao</td></tr>
<tr><td><strong>Dòng tiền</strong></td><td>Không có</td><td>Có, tỷ suất thấp</td><td>Có, tỷ suất thấp – trung bình</td><td>Có, nhưng rủi ro cao</td></tr>
<tr><td><strong>Tiềm năng tăng giá</strong></td><td>Cao nhất khi đúng sóng</td><td>Trung bình, giảm dần theo tuổi</td><td>Cao và bền</td><td>Rất biến động</td></tr>
<tr><td><strong>Thanh khoản</strong></td><td>Kém, đóng băng ở pha suy thoái</td><td>Tốt nhất ở phân khúc phổ thông</td><td>Trung bình</td><td>Kém nhất</td></tr>
<tr><td><strong>Chi phí giữ</strong></td><td>Gần như bằng 0</td><td>Phí quản lý, bảo trì</td><td>Bảo trì</td><td>Phí vận hành cao</td></tr>
<tr><td><strong>Khấu hao</strong></td><td>Không</td><td>Có, đáng kể</td><td>Có nhưng đất chiếm phần lớn giá trị</td><td>Có</td></tr>
<tr><td><strong>Rủi ro chính</strong></td><td>Pháp lý, quy hoạch, mất thanh khoản</td><td>Chất lượng vận hành, khấu hao, nguồn cung mới</td><td>Vốn lớn, kén người mua</td><td>Cam kết lợi nhuận không thực hiện được, pháp lý đất thương mại dịch vụ</td></tr>
</table>
<div class="warning-box"><strong>Đất nền là loại hình biến động mạnh nhất theo chu kỳ.</strong> Ở pha bùng nổ, nó tăng nhanh nhất — đó là lý do nó thu hút nhà đầu tư. Ở pha suy thoái, nó là thứ đầu tiên đóng băng và có thể không giao dịch được suốt nhiều năm, trong khi vẫn không sinh ra một đồng nào. Đây là sự đánh đổi thật, không phải rủi ro lý thuyết.</div>`,
        advanced: `<h3>Chọn loại hình theo mục tiêu</h3>
<table>
<tr><th>Mục tiêu của bạn</th><th>Loại hình phù hợp</th><th>Lý do</th></tr>
<tr><td>Mua để ở, ngân sách hạn chế</td><td>Chung cư phân khúc phổ thông</td><td>Vào được với vốn thấp, vị trí tốt hơn với cùng số tiền, thanh khoản tốt nếu cần đổi</td></tr>
<tr><td>Mua để ở lâu dài, có điều kiện</td><td>Nhà phố trong khu dân cư ổn định</td><td>Đất giữ giá trị, tự chủ trong sửa chữa cải tạo</td></tr>
<tr><td>Đầu tư cần dòng tiền</td><td>Căn hộ cho thuê ở khu đông dân, gần trung tâm việc làm</td><td>Dễ cho thuê, dễ bán khi cần</td></tr>
<tr><td>Đầu tư dài hạn, không cần dòng tiền</td><td>Đất ở đã có sổ, khu vực có động lực kinh tế thật</td><td>Không khấu hao, chi phí giữ thấp</td></tr>
<tr><td>Muốn tiếp cận bất động sản nhưng cần thanh khoản</td><td>Kênh gián tiếp (quỹ, cổ phiếu)</td><td>Bán được bất kỳ lúc nào, vốn nhỏ</td></tr>
</table>
<div class="warning-box"><strong>Cảnh báo riêng về bất động sản nghỉ dưỡng và cam kết lợi nhuận.</strong> Nhiều sản phẩm condotel, biệt thự biển được bán kèm cam kết lợi nhuận 8–12%/năm trong 5–10 năm. Hãy đặt ba câu hỏi:<br>
1. <strong>Cam kết đó do ai bảo đảm?</strong> Nếu chỉ là cam kết của chủ đầu tư mà không có bảo lãnh ngân hàng, giá trị của nó phụ thuộc hoàn toàn vào việc họ còn tồn tại và còn khả năng chi trả.<br>
2. <strong>Nếu tài sản thực sự sinh lời 10%/năm, tại sao họ bán cho bạn</strong> thay vì tự giữ và vay ngân hàng với lãi suất thấp hơn?<br>
3. <strong>Pháp lý là gì?</strong> Nhiều sản phẩm nằm trên đất thương mại dịch vụ có thời hạn, không phải đất ở lâu dài — ảnh hưởng trực tiếp tới giá trị dài hạn và khả năng thế chấp.<br>
Thực tế đã có nhiều trường hợp cam kết lợi nhuận không được thực hiện sau vài năm.</div>
<h3>Nguyên tắc phân bổ</h3>
<p>Nếu bạn có nhiều hơn một bất động sản, hãy nghĩ theo danh mục thay vì theo từng tài sản riêng lẻ:</p>
<ul>
<li><strong>Đừng để toàn bộ tài sản vào một loại hình</strong> — đặc biệt là loại không sinh dòng tiền.</li>
<li><strong>Luôn giữ một phần thanh khoản</strong> ngoài bất động sản, đủ sống 6–12 tháng.</li>
<li><strong>Cân đối giữa tài sản sinh dòng tiền và tài sản kỳ vọng tăng giá</strong> — dòng tiền giúp bạn sống sót qua pha suy thoái để chờ tài sản kia phục hồi.</li>
<li><strong>Đa dạng theo khu vực</strong> nếu quy mô cho phép — một quyết định quy hoạch bất lợi không nên xóa sổ toàn bộ danh mục.</li>
</ul>`,
        diagram: null
    },

    'reit-gian-tiep': {
        icon: '📈', title: 'Đầu Tư Gián Tiếp — Quỹ & Cổ Phiếu', category: 'practice',
        connections: ['thanh-khoan', 'phan-khuc-dau-tu', 'cap-rate', 'us-tong-quan'],
        simple: `<h3>📈 Đầu Tư Gián Tiếp — Quỹ & Cổ Phiếu</h3>
<p>Bạn không nhất thiết phải mua một căn nhà để đầu tư vào bất động sản. Có những cách tiếp cận gián tiếp với đặc điểm rất khác:</p>
<table>
<tr><th></th><th>Mua trực tiếp</th><th>Đầu tư gián tiếp</th></tr>
<tr><td>Vốn tối thiểu</td><td>Hàng tỷ đồng</td><td>Vài triệu đồng</td></tr>
<tr><td>Thanh khoản</td><td>Vài tháng</td><td>Vài giây (nếu niêm yết)</td></tr>
<tr><td>Đa dạng hóa</td><td>Một tài sản, một vị trí</td><td>Nhiều tài sản, nhiều khu vực</td></tr>
<tr><td>Quản lý</td><td>Bạn tự lo</td><td>Có đội ngũ chuyên nghiệp</td></tr>
<tr><td>Đòn bẩy</td><td>Vay được 70–80%</td><td>Rất hạn chế</td></tr>
<tr><td>Kiểm soát</td><td>Toàn quyền</td><td>Không có</td></tr>
</table>`,
        detail: `<h3>REIT là gì</h3>
<p><strong>REIT</strong> (Real Estate Investment Trust — quỹ tín thác đầu tư bất động sản) là quỹ huy động vốn từ nhiều nhà đầu tư để mua và vận hành bất động sản cho thuê. Đặc trưng của mô hình REIT ở các thị trường phát triển:</p>
<ul>
<li>Quỹ <strong>bắt buộc phân phối phần lớn thu nhập</strong> (thường 90% trở lên) cho nhà đầu tư dưới dạng cổ tức, đổi lại được ưu đãi thuế ở cấp quỹ.</li>
<li>Nhờ vậy REIT thường có tỷ suất cổ tức cao và được nhiều nhà đầu tư dùng như nguồn thu nhập thụ động.</li>
<li>Chứng chỉ quỹ được niêm yết và giao dịch như cổ phiếu.</li>
</ul>
<div class="warning-box"><strong>Ở Việt Nam, thị trường REIT vẫn còn rất sơ khai.</strong> Khung pháp lý cho quỹ đầu tư bất động sản đã có, nhưng số lượng quỹ và quy mô thị trường còn nhỏ, thanh khoản hạn chế — khác xa so với Mỹ, Nhật, Singapore, nơi REIT là một lớp tài sản lớn và phổ biến với nhà đầu tư cá nhân.</div>
<h3>Các cách tiếp cận gián tiếp tại Việt Nam</h3>
<table>
<tr><th>Kênh</th><th>Đặc điểm</th><th>Rủi ro chính</th></tr>
<tr><td><strong>Cổ phiếu doanh nghiệp bất động sản</strong></td><td>Dễ tiếp cận, thanh khoản tốt</td><td>Bạn mua <em>doanh nghiệp</em>, không phải bất động sản — chịu thêm rủi ro quản trị, đòn bẩy, dự án dở dang</td></tr>
<tr><td><strong>Quỹ đầu tư bất động sản</strong></td><td>Chuyên nghiệp hóa, đa dạng hóa</td><td>Số lượng ít, thanh khoản hạn chế</td></tr>
<tr><td><strong>Trái phiếu doanh nghiệp bất động sản</strong></td><td>Lãi suất danh nghĩa hấp dẫn</td><td><strong>Rủi ro tín dụng rất cao.</strong> Thị trường Việt Nam đã trải qua giai đoạn nhiều tổ chức phát hành mất khả năng thanh toán, gây thiệt hại lớn cho nhà đầu tư cá nhân</td></tr>
<tr><td><strong>REIT nước ngoài</strong></td><td>Đa dạng, minh bạch, thanh khoản cao</td><td>Rủi ro tỷ giá; cần tuân thủ quy định về đầu tư ra nước ngoài</td></tr>
</table>
<div class="warning-box"><strong>Cảnh báo về trái phiếu doanh nghiệp bất động sản:</strong> lãi suất cao là <em>phần bù rủi ro</em>, không phải quà tặng. Một trái phiếu trả 12% trong khi ngân hàng trả 6% đang nói với bạn rằng thị trường đánh giá rủi ro mất vốn ở đây là đáng kể. Hãy đọc kỹ ai là tổ chức phát hành, tài sản bảo đảm là gì, và ai bảo lãnh — nếu không hiểu được cấu trúc, đó là lý do đủ để không tham gia.</div>`,
        advanced: `<h3>Cổ phiếu bất động sản không phải là bất động sản</h3>
<p>Đây là điểm nhiều nhà đầu tư hiểu nhầm. Khi bạn mua cổ phiếu một công ty bất động sản, bạn đang mua:</p>
<ul>
<li>Quỹ đất và các dự án của họ (phần liên quan tới bất động sản thật).</li>
<li><strong>Cộng thêm</strong> chất lượng quản trị, cấu trúc nợ, năng lực triển khai, và rủi ro pha loãng cổ phần.</li>
</ul>
<p>Vì các doanh nghiệp bất động sản thường dùng đòn bẩy cao, cổ phiếu của họ biến động mạnh hơn nhiều so với chính giá bất động sản. Trong một chu kỳ suy thoái, giá nhà có thể giảm 20% trong khi cổ phiếu doanh nghiệp bất động sản giảm sâu hơn nhiều lần — vì đòn bẩy khuếch đại ở cấp doanh nghiệp.</p>
<div class="tip-box"><strong>Nếu mục tiêu của bạn là "tiếp xúc với bất động sản một cách an toàn hơn", cổ phiếu doanh nghiệp bất động sản không phải là câu trả lời</strong> — nó thường rủi ro <em>hơn</em> chứ không phải ít hơn. REIT vận hành tài sản cho thuê ổn định gần với mục tiêu đó hơn nhiều.</div>
<h3>Khi nào nên cân nhắc kênh gián tiếp</h3>
<ul>
<li>Vốn chưa đủ để mua trực tiếp một tài sản chất lượng — thay vì mua một tài sản kém ở vị trí xấu.</li>
<li>Cần giữ thanh khoản cho các mục tiêu khác trong 3–5 năm tới.</li>
<li>Không có thời gian hoặc không muốn quản lý việc cho thuê, sửa chữa, tìm khách.</li>
<li>Muốn đa dạng hóa theo khu vực hoặc loại hình mà vốn cá nhân không cho phép.</li>
</ul>
<h3>Khi nào mua trực tiếp vẫn tốt hơn</h3>
<ul>
<li>Bạn cần một chỗ ở — giá trị sử dụng là thật và không thể thay thế bằng chứng chỉ quỹ.</li>
<li>Bạn muốn dùng đòn bẩy — không kênh gián tiếp nào cho bạn vay 70% với lãi suất của vay mua nhà.</li>
<li>Bạn có lợi thế thông tin thật về một khu vực cụ thể.</li>
<li>Bạn có khả năng gia tăng giá trị: cải tạo, tách thửa, chuyển đổi công năng.</li>
</ul>`,
        diagram: null
    },

    'cho-thue-van-hanh': {
        icon: '🔧', title: 'Cho Thuê & Vận Hành', category: 'practice',
        connections: ['noi-dong-tien', 'roi-cho-thue', 'rental-yield', 'de-thue-nha'],
        simple: `<h3>🔧 Cho Thuê & Vận Hành</h3>
<p>Cho thuê nghe có vẻ là thu nhập thụ động. Trên thực tế nó là một công việc kinh doanh nhỏ, với khách hàng, chi phí vận hành, và các vấn đề phát sinh.</p>
<div class="example-box"><strong>Ba nguồn "rò rỉ" lợi nhuận mà người mới không tính:</strong><br>
1. <strong>Kỳ trống</strong> — mỗi lần đổi khách mất 1–2 tháng không có thu nhập.<br>
2. <strong>Sửa chữa</strong> — đồ đạc hỏng, thiết bị cần thay, sơn lại giữa các khách.<br>
3. <strong>Thời gian của bạn</strong> — tìm khách, dẫn xem, xử lý sự cố, thu tiền. Đây là chi phí thật dù không xuất hiện trên bảng tính.</div>`,
        detail: `<h3>Tìm và chọn khách thuê</h3>
<p>Chọn đúng khách thuê quan trọng hơn được giá thuê cao. Một khách tốt ở lâu, giữ nhà cẩn thận, trả đúng hạn có giá trị hơn nhiều một khách trả cao hơn 500 nghìn nhưng chuyển đi sau 6 tháng.</p>
<ul>
<li><strong>Xác minh thông tin cơ bản</strong> — nơi làm việc, thu nhập, lý do chuyển nhà.</li>
<li><strong>Hỏi chủ nhà cũ</strong> nếu có thể — nguồn thông tin tốt nhất về hành vi thuê nhà.</li>
<li><strong>Ưu tiên khách có nhu cầu ở dài hạn</strong> — gia đình, người làm việc ổn định gần đó.</li>
<li><strong>Đặt cọc hợp lý</strong> — thông thường 1–2 tháng tiền thuê.</li>
<li><strong>Đăng ký tạm trú</strong> theo quy định — trách nhiệm này thường thuộc về cả hai bên.</li>
</ul>
<h3>Hợp đồng thuê nên có gì</h3>
<table>
<tr><th>Điều khoản</th><th>Chi tiết cần rõ</th></tr>
<tr><td>Thời hạn và gia hạn</td><td>Bao lâu, điều kiện gia hạn, cơ chế điều chỉnh giá thuê</td></tr>
<tr><td>Giá thuê và thanh toán</td><td>Số tiền, ngày thanh toán, hình thức, phạt chậm trả</td></tr>
<tr><td>Đặt cọc</td><td>Số tiền, điều kiện hoàn trả, các trường hợp bị trừ</td></tr>
<tr><td>Chi phí bên nào chịu</td><td>Điện, nước, internet, phí quản lý, phí gửi xe, rác</td></tr>
<tr><td>Sửa chữa</td><td>Sửa nhỏ khách thuê chịu, sửa lớn và kết cấu chủ nhà chịu — ghi rõ ngưỡng giá trị</td></tr>
<tr><td>Biên bản bàn giao</td><td>Danh sách tài sản kèm tình trạng và ảnh chụp — bảo vệ cả hai bên khi trả nhà</td></tr>
<tr><td>Chấm dứt trước hạn</td><td>Báo trước bao lâu, chế tài</td></tr>
</table>
<div class="tip-box"><strong>Biên bản bàn giao kèm ảnh là điều khoản đáng giá nhất và tốn ít công nhất.</strong> Chụp ảnh toàn bộ căn nhà và từng thiết bị vào ngày bàn giao, in ra hoặc lưu kèm hợp đồng, hai bên cùng ký. Nó chấm dứt gần như mọi tranh cãi về tiền cọc khi trả nhà.</div>`,
        advanced: `<h3>Tự quản lý hay thuê đơn vị quản lý</h3>
<table>
<tr><th></th><th>Tự quản lý</th><th>Thuê quản lý</th></tr>
<tr><td>Chi phí</td><td>0, nhưng tốn thời gian</td><td>Thường một phần trăm tiền thuê hoặc phí cố định</td></tr>
<tr><td>Phù hợp khi</td><td>1–2 tài sản, ở gần, có thời gian</td><td>Nhiều tài sản, ở xa, không muốn bị làm phiền</td></tr>
<tr><td>Rủi ro</td><td>Bạn phải xử lý mọi sự cố, kể cả lúc bận</td><td>Chất lượng phụ thuộc đơn vị quản lý</td></tr>
</table>
<div class="warning-box"><strong>Hãy tính thời gian của bạn vào bài toán.</strong> Nếu quản lý một căn hộ ngốn 5 giờ mỗi tháng và thu nhập ròng của nó là 3 triệu/tháng, bạn đang làm việc với mức 600 nghìn/giờ. Với một số người đó là hợp lý; với người khác thì không. Đây là phép tính đáng làm trước khi mở rộng danh mục cho thuê.</div>
<h3>Cho thuê ngắn hạn và dài hạn</h3>
<table>
<tr><th></th><th>Dài hạn (6 tháng+)</th><th>Ngắn hạn (theo ngày)</th></tr>
<tr><td>Doanh thu tiềm năng</td><td>Thấp hơn</td><td>Cao hơn khi lấp đầy tốt</td></tr>
<tr><td>Công sức</td><td>Ít</td><td>Rất nhiều: dọn dẹp, đón khách, xử lý đánh giá</td></tr>
<tr><td>Chi phí vận hành</td><td>Thấp</td><td>Cao: dọn dẹp, đồ dùng, nền tảng thu phí</td></tr>
<tr><td>Ổn định</td><td>Cao</td><td>Rất biến động theo mùa và theo tình hình du lịch</td></tr>
<tr><td>Rủi ro pháp lý</td><td>Thấp</td><td>Quy định về kinh doanh lưu trú, nội quy chung cư — nhiều nơi hạn chế hoặc cấm</td></tr>
</table>
<div class="warning-box"><strong>Trước khi làm cho thuê ngắn hạn trong chung cư, hãy kiểm tra nội quy tòa nhà và quy định của địa phương.</strong> Nhiều ban quản trị đã cấm hình thức này vì lý do an ninh và ảnh hưởng tới cư dân. Đầu tư dựa trên doanh thu cho thuê ngắn hạn rồi bị cấm là rủi ro rất thực tế, và nó xóa sổ toàn bộ bài toán tài chính ban đầu.</div>
<h3>Nghĩa vụ thuế khi cho thuê</h3>
<p>Cá nhân có doanh thu từ cho thuê tài sản vượt ngưỡng quy định trong năm phải kê khai và nộp thuế theo quy định (bao gồm thuế giá trị gia tăng và thuế thu nhập cá nhân theo tỷ lệ trên doanh thu). Dưới ngưỡng đó thì không thuộc diện phải nộp.</p>
<p><em>Ngưỡng doanh thu và tỷ lệ thuế được quy định trong văn bản pháp luật và có thể thay đổi — hãy kiểm tra quy định hiện hành hoặc hỏi cơ quan thuế. Khi tính toán hiệu quả đầu tư, hãy đưa khoản thuế này vào chi phí thay vì bỏ qua.</em></p>`,
        diagram: null
    },

    'ban-nha': {
        icon: '🏷️', title: 'Bán Nhà & Vai Trò Môi Giới', category: 'practice',
        connections: ['dam-phan-gia', 'thanh-khoan', 'pp-so-sanh', 'chi-phi-an'],
        simple: `<h3>🏷️ Bán Nhà & Vai Trò Môi Giới</h3>
<p>Bán nhà khó hơn mua nhà, vì bạn không kiểm soát được thời điểm có người mua. Ba yếu tố quyết định bạn bán được nhanh hay không:</p>
<ol>
<li><strong>Giá</strong> — yếu tố quan trọng nhất, áp đảo mọi yếu tố khác.</li>
<li><strong>Pháp lý sạch</strong> — người mua có tiền sẽ tránh mọi rắc rối giấy tờ.</li>
<li><strong>Trình bày</strong> — ảnh, sự sạch sẽ, ấn tượng đầu tiên.</li>
</ol>
<div class="warning-box"><strong>Sai lầm phổ biến nhất: định giá quá cao lúc đầu để "thăm dò".</strong> Một tin đăng nằm lâu không có người xem sẽ bị người mua coi là có vấn đề. Khi bạn hạ giá sau đó, họ càng nghi ngờ. Định giá đúng ngay từ đầu bán nhanh hơn và thường được giá cao hơn so với chiến thuật hạ dần.</div>`,
        detail: `<h3>Chuẩn bị trước khi rao bán</h3>
<ul>
<li><strong>Hoàn thiện pháp lý trước.</strong> Nếu có vấn đề (chưa hoàn công, sổ chung, thông tin sai lệch), xử lý trước khi rao. Người mua phát hiện vấn đề giữa chừng sẽ ép giá hoặc bỏ đi.</li>
<li><strong>Sửa những lỗi nhỏ, rẻ.</strong> Vòi rỉ nước, bóng đèn cháy, cửa kẹt, tường bẩn. Chi phí nhỏ nhưng ảnh hưởng lớn tới ấn tượng.</li>
<li><strong>Dọn bớt đồ.</strong> Nhà càng trống trông càng rộng. Đây là mẹo đơn giản nhất và hiệu quả nhất.</li>
<li><strong>Chụp ảnh tử tế.</strong> Ban ngày, mở hết rèm, bật hết đèn, chụp ngang tầm mắt. Ảnh là thứ quyết định người ta có bấm vào tin của bạn không.</li>
<li><strong>Chuẩn bị sẵn hồ sơ</strong> — bản photo sổ, giấy phép xây dựng, bản vẽ, hóa đơn phí quản lý. Sẵn sàng đưa cho người mua nghiêm túc.</li>
</ul>
<div class="tip-box"><strong>Không nên sửa lớn trước khi bán.</strong> Cải tạo lớn hiếm khi thu hồi đủ chi phí, và gu của bạn có thể không hợp người mua. Chỉ sửa những thứ ảnh hưởng tới an toàn và ấn tượng — không đầu tư nâng cấp.</div>`,
        advanced: `<h3>Làm việc với môi giới</h3>
<table>
<tr><th>Hình thức</th><th>Đặc điểm</th></tr>
<tr><td><strong>Nhiều môi giới cùng bán</strong></td><td>Tiếp cận rộng hơn, nhưng không ai đầu tư công sức nghiêm túc vì rủi ro mất công. Tin đăng trùng lặp nhiều nơi có thể làm người mua nghĩ nhà "ế"</td></tr>
<tr><td><strong>Độc quyền một môi giới</strong></td><td>Họ đầu tư nhiều hơn: chụp ảnh, chạy quảng cáo, chủ động tìm khách. Cần chọn đúng người và có thời hạn rõ ràng</td></tr>
<tr><td><strong>Tự bán</strong></td><td>Tiết kiệm hoa hồng, nhưng tốn nhiều thời gian và bạn thiếu dữ liệu thị trường mà môi giới có</td></tr>
</table>
<div class="tip-box"><strong>Nếu chọn độc quyền, hãy đặt thời hạn (ví dụ 2 tháng) và tiêu chí cụ thể</strong> — số lượt dẫn khách xem, kênh quảng cáo, báo cáo định kỳ. Điều này tạo động lực cho môi giới và cho bạn lối ra nếu không hiệu quả.</div>
<h3>Đánh giá người mua</h3>
<p>Không phải người mua nào cũng như nhau. Một người trả giá cao nhưng không đủ khả năng tài chính sẽ làm bạn mất nhiều tháng:</p>
<ul>
<li><strong>Họ đã được ngân hàng sơ duyệt chưa?</strong> Đây là câu hỏi quan trọng nhất.</li>
<li><strong>Họ cần vay bao nhiêu phần trăm?</strong> Vay càng nhiều, rủi ro đổ vỡ giao dịch càng cao.</li>
<li><strong>Họ có đang phải bán nhà khác trước không?</strong> Nếu có, giao dịch của bạn phụ thuộc vào một giao dịch khác mà bạn không kiểm soát được.</li>
<li><strong>Thời gian họ cần là bao lâu?</strong></li>
</ul>
<div class="warning-box"><strong>Một người mua trả 3,0 tỷ, tiền mặt, xong trong 3 tuần thường tốt hơn một người trả 3,1 tỷ nhưng cần vay 80% và mất 3 tháng với rủi ro không được duyệt.</strong> Sự chắc chắn có giá trị thật, đặc biệt khi bạn cần tiền cho một giao dịch khác.</div>
<h3>Nghĩa vụ thuế khi bán</h3>
<p>Bên bán thông thường chịu thuế thu nhập cá nhân 2% trên giá chuyển nhượng. Có một số trường hợp được miễn — đáng chú ý là chuyển nhượng giữa những người có quan hệ thân thích theo quy định, và trường hợp cá nhân chỉ có duy nhất một nhà ở, quyền sử dụng đất ở tại Việt Nam khi thỏa mãn các điều kiện luật định.</p>
<p><em>Hãy kiểm tra điều kiện cụ thể với cơ quan thuế trước khi giao dịch — nếu thuộc diện miễn, khoản tiết kiệm là đáng kể và bạn cần chuẩn bị hồ sơ chứng minh đúng cách.</em></p>`,
        diagram: null
    },

    'bay-lua-dao': {
        icon: '🚨', title: 'Bẫy Và Lừa Đảo Phổ Biến', category: 'practice',
        connections: ['tranh-chap', 'checklist-phap-ly', 'nha-hinh-thanh-tuong-lai', 'dat-coc-hop-dong'],
        simple: `<h3>🚨 Bẫy Và Lừa Đảo Phổ Biến</h3>
<p>Bất động sản thu hút lừa đảo vì ba lý do: giá trị giao dịch lớn, thông tin bất cân xứng, và người mua thường thiếu kinh nghiệm vì cả đời chỉ mua vài lần.</p>
<div class="warning-box"><strong>Nguyên tắc phòng vệ tổng quát:</strong> mọi thứ tạo <strong>áp lực thời gian</strong> đều là dấu hiệu cảnh báo. "Chỉ hôm nay", "còn 2 căn cuối", "chiều nay có người khác đặt cọc" — đây là kỹ thuật ngăn bạn kiểm tra. Một giao dịch tốt vẫn tốt sau khi bạn kiểm tra thêm ba ngày.</div>`,
        detail: `<h3>Các thủ đoạn thường gặp</h3>
<table>
<tr><th>Thủ đoạn</th><th>Cách nhận biết</th></tr>
<tr><td><strong>Bán một tài sản cho nhiều người</strong></td><td>Chỉ nhận cọc bằng giấy tay, tránh công chứng, viện lý do trì hoãn công chứng</td></tr>
<tr><td><strong>Giấy tờ giả</strong></td><td>Chỉ cho xem bản photo, từ chối cho mang bản gốc đi đối chiếu, không chịu ra văn phòng công chứng</td></tr>
<tr><td><strong>Người bán không phải chủ</strong></td><td>Dùng giấy ủy quyền có vấn đề, hoặc thiếu chữ ký của đồng sở hữu</td></tr>
<tr><td><strong>Dự án "ma"</strong></td><td>Đất chưa được giao, chưa có quy hoạch chi tiết, chưa đủ điều kiện bán nhưng vẫn thu tiền qua "phiếu giữ chỗ", "hợp đồng góp vốn"</td></tr>
<tr><td><strong>Phân lô bán nền trái phép</strong></td><td>Đất nông nghiệp được tự vẽ thành các lô, hứa hẹn "sẽ lên thổ cư"</td></tr>
<tr><td><strong>Thổi giá bằng giao dịch giả</strong></td><td>Tổ chức đông người xem, "đặt cọc" ngay tại chỗ để tạo cảm giác khan hiếm và tranh mua</td></tr>
<tr><td><strong>Cam kết lợi nhuận không có bảo đảm</strong></td><td>Hứa 10–15%/năm nhiều năm mà không có bảo lãnh ngân hàng hay tài sản bảo đảm</td></tr>
<tr><td><strong>Ém thông tin quy hoạch</strong></td><td>Khẳng định miệng "sạch quy hoạch" nhưng không cung cấp văn bản</td></tr>
</table>
<div class="warning-box"><strong>Bẫy nguy hiểm nhất vì trông hợp pháp nhất: sự kiện mở bán tập trung.</strong> Không gian đông người, âm nhạc, sa bàn hoành tráng, nhân viên tạo cảm giác cạnh tranh, bảng "đã bán" cập nhật liên tục, ưu đãi chỉ áp dụng "nếu chốt hôm nay". Toàn bộ thiết kế nhằm khiến bạn ra quyết định vài tỷ đồng trong vài giờ, giữa đám đông, mà không có thời gian kiểm tra bất cứ điều gì.</div>`,
        advanced: `<h3>Bảy quy tắc phòng vệ</h3>
<ol>
<li><strong>Không bao giờ chuyển tiền trước khi kiểm tra pháp lý xong.</strong> Không có ngoại lệ nào đáng giá bằng số tiền bạn có thể mất.</li>
<li><strong>Chỉ chuyển khoản, không đưa tiền mặt.</strong> Chuyển vào đúng tài khoản của người đứng tên trên sổ, với nội dung chuyển tiền ghi rõ mục đích. Đây là chứng cứ quan trọng nhất nếu có tranh chấp.</li>
<li><strong>Công chứng mọi thứ, kể cả đặt cọc.</strong> Công chứng viên kiểm tra nhân thân, tình trạng hôn nhân, và tra cứu hệ thống ngăn chặn — một lớp bảo vệ giá rẻ.</li>
<li><strong>Yêu cầu bản gốc để đối chiếu.</strong> Người bán thật không có lý do gì từ chối cho bạn xem sổ gốc tại văn phòng công chứng hoặc nơi công cộng an toàn.</li>
<li><strong>Tự đi tra cứu quy hoạch</strong> tại cơ quan có thẩm quyền. Đừng nhận thông tin qua trung gian.</li>
<li><strong>Không ký gì tại sự kiện mở bán.</strong> Mang hợp đồng về, đọc kỹ, hỏi người có chuyên môn. Nếu ưu đãi biến mất sau một ngày thì đó không phải ưu đãi.</li>
<li><strong>Nếu quá tốt để là thật, thì nó không thật.</strong> Giá thấp hơn thị trường 30%, lợi nhuận cam kết gấp đôi lãi ngân hàng — luôn có lý do, và lý do đó luôn nằm ở phần bạn chưa nhìn thấy.</li>
</ol>
<div class="tip-box"><strong>Chi phí phòng vệ rất rẻ:</strong> vài triệu tiền công chứng, vài trăm nghìn tiền tra cứu, vài ngày thời gian, và có thể vài triệu thuê luật sư đọc hợp đồng với giao dịch lớn. Đặt cạnh số tiền có thể mất, đây là khoản bảo hiểm có tỷ lệ lợi ích trên chi phí cao nhất mà bạn từng mua.</div>
<h3>Nếu đã rơi vào tình huống xấu</h3>
<ul>
<li><strong>Thu thập và giữ toàn bộ chứng cứ</strong> — hợp đồng, biên lai, sao kê chuyển khoản, tin nhắn, ghi âm nếu có, tên và thông tin những người liên quan.</li>
<li><strong>Tham vấn luật sư sớm</strong> — thời hiệu khởi kiện có giới hạn, và hành động sớm làm tăng khả năng thu hồi.</li>
<li><strong>Nếu có dấu hiệu hình sự</strong> (lừa đảo chiếm đoạt tài sản), trình báo cơ quan công an.</li>
<li><strong>Với tranh chấp dân sự</strong>, thủ tục hòa giải và khởi kiện tại tòa án là các bước tiếp theo.</li>
<li><strong>Tìm những người cùng cảnh</strong> — với dự án có nhiều người mua bị ảnh hưởng, hành động tập thể thường hiệu quả hơn hành động đơn lẻ.</li>
</ul>
<p><em>Nội dung mang tính tham khảo để nhận diện rủi ro. Với tình huống cụ thể, hãy tham vấn luật sư có chuyên môn về đất đai.</em></p>`,
        diagram: null
    }
};
