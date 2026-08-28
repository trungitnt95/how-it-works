// Bất Động Sản - Pháp lý & Sở hữu
const reLegalData = {
    'so-huu-vs-su-dung': {
        icon: '⚖️', title: 'Sở Hữu Đất vs Quyền Sử Dụng Đất', category: 'legal',
        connections: ['so-do-so-hong', 'thoi-han-su-dung', 'freehold-leasehold', 'cn-tong-quan'],
        simple: `<h3>⚖️ Sở Hữu Đất vs Quyền Sử Dụng Đất</h3>
<p>Đây là điểm khởi đầu của mọi thứ liên quan tới pháp lý bất động sản ở Việt Nam, và là điều nhiều người nói sai hàng ngày.</p>
<div class="warning-box"><strong>Ở Việt Nam, cá nhân và doanh nghiệp không "sở hữu đất".</strong> Theo Hiến pháp và Luật Đất đai, đất đai thuộc <strong>sở hữu toàn dân</strong>, do <strong>Nhà nước đại diện chủ sở hữu</strong> và thống nhất quản lý. Cái người dân có là <strong>quyền sử dụng đất</strong>.</div>
<p>Nghe thì có vẻ là chuyện chữ nghĩa, nhưng nó có hệ quả thực tế rất lớn — đặc biệt khi nói về thời hạn sử dụng và về việc Nhà nước thu hồi đất.</p>`,
        detail: `<h3>Vậy "quyền sử dụng đất" cho bạn những gì</h3>
<p>Trên thực tế, quyền sử dụng đất hợp pháp cho bạn gần như đầy đủ các quyền của một chủ sở hữu:</p>
<ul>
<li><strong>Chuyển nhượng</strong> (mua bán)</li>
<li><strong>Cho thuê, cho thuê lại</strong></li>
<li><strong>Thừa kế, tặng cho</strong></li>
<li><strong>Thế chấp</strong> để vay vốn</li>
<li><strong>Góp vốn</strong> bằng quyền sử dụng đất</li>
</ul>
<p>Vì thế trong đời sống hàng ngày, việc gọi là "mua đất", "bán nhà", "nhà của tôi" hoàn toàn bình thường và không gây hiểu nhầm gì.</p>
<h3>Hai chỗ khác biệt thật sự quan trọng</h3>
<table>
<tr><th>Vấn đề</th><th>Hệ quả thực tế</th></tr>
<tr><td><strong>Thời hạn sử dụng</strong></td><td>Không phải loại đất nào cũng vô thời hạn. Đất ở của cá nhân thường là sử dụng ổn định lâu dài, nhưng đất nông nghiệp, đất thuê của Nhà nước, đất dự án đều có thời hạn cụ thể.</td></tr>
<tr><td><strong>Nhà nước có thể thu hồi</strong></td><td>Trong các trường hợp luật định (quốc phòng, an ninh, lợi ích quốc gia, công cộng, phát triển kinh tế - xã hội), Nhà nước thu hồi đất và bồi thường theo quy định — chứ không phải thương lượng theo giá thị trường như giữa hai bên tư nhân.</td></tr>
</table>
<div class="tip-box"><strong>Với người mua nhà ở thông thường, hai điều này ít khi là vấn đề.</strong> Nhưng chúng trở nên rất quan trọng khi bạn mua đất nông nghiệp, đất chưa chuyển mục đích, hoặc đất nằm trong vùng có quy hoạch — đúng những loại đất mà các cơn sốt đất hay xoay quanh.</div>`,
        advanced: `<h3>So sánh với các mô hình khác trên thế giới</h3>
<table>
<tr><th>Mô hình</th><th>Bản chất</th><th>Nước áp dụng</th></tr>
<tr><td><strong>Sở hữu toàn dân + quyền sử dụng</strong></td><td>Nhà nước đại diện chủ sở hữu, người dân có quyền sử dụng với đầy đủ quyền giao dịch</td><td>Việt Nam</td></tr>
<tr><td><strong>Đất thuê có thời hạn</strong></td><td>Nhà nước sở hữu, giao quyền sử dụng có thời hạn (thường 40–70 năm tùy mục đích)</td><td>Trung Quốc</td></tr>
<tr><td><strong>Freehold</strong></td><td>Sở hữu tư nhân vĩnh viễn đối với đất</td><td>Mỹ, Nhật, Đức, phần lớn nước phương Tây</td></tr>
<tr><td><strong>Leasehold</strong></td><td>Sở hữu có thời hạn trên đất của người khác, hết hạn thì trả lại</td><td>Phổ biến ở Anh, Singapore (song song với freehold)</td></tr>
</table>
<h3>Điều này ảnh hưởng thế nào tới giá</h3>
<p>Về lý thuyết, quyền sử dụng có thời hạn phải rẻ hơn sở hữu vĩnh viễn, và chênh lệch càng lớn khi thời hạn còn lại càng ngắn. Ở Singapore, nơi tồn tại song song cả freehold và leasehold 99 năm, thị trường định giá rất rõ sự khác biệt này, và các căn hộ leasehold còn ít năm bị chiết khấu đáng kể.</p>
<div class="warning-box"><strong>Ở Việt Nam, thị trường phần lớn <em>chưa</em> phản ánh yếu tố thời hạn vào giá</strong> đối với đất ở, vì đất ở của cá nhân thường là sử dụng lâu dài nên vấn đề không phát sinh. Nhưng với các loại hình có thời hạn — đất thuê, một số dự án thương mại dịch vụ, bất động sản nghỉ dưỡng trên đất thương mại dịch vụ — thời hạn còn lại là yếu tố định giá thật, và người mua thường đánh giá thấp mức độ ảnh hưởng của nó.</div>
<p><em>Đây là phần trình bày khái quát để hiểu cơ chế, không thay thế tư vấn pháp lý cho một giao dịch cụ thể. Quy định có thể thay đổi và có nhiều trường hợp đặc thù.</em></p>`,
        diagram: 're-legal-vn'
    },

    'so-do-so-hong': {
        icon: '📕', title: 'Sổ Đỏ, Sổ Hồng & Các Loại Giấy Tờ', category: 'legal',
        connections: ['so-huu-vs-su-dung', 'checklist-phap-ly', 'tranh-chap', 'cong-chung-sang-ten'],
        simple: `<h3>📕 Sổ Đỏ, Sổ Hồng & Các Loại Giấy Tờ</h3>
<p>"Sổ đỏ" và "sổ hồng" là tên gọi dân gian, đặt theo màu bìa của các mẫu giấy chứng nhận qua các thời kỳ. Chúng <strong>không phải</strong> là hai loại quyền khác nhau.</p>
<div class="example-box"><strong>Lịch sử ngắn gọn:</strong><br>
• Trước đây tồn tại nhiều mẫu giấy do các cơ quan khác nhau cấp — bìa đỏ cho quyền sử dụng đất, bìa hồng cho quyền sở hữu nhà ở.<br>
• Từ năm 2009, Việt Nam thống nhất thành <strong>một mẫu giấy chứng nhận duy nhất</strong> ghi nhận cả quyền sử dụng đất lẫn quyền sở hữu tài sản gắn liền với đất.<br>
• Các sổ cũ cấp trước đó vẫn còn giá trị pháp lý, không bắt buộc phải đổi.</div>
<p>Nên khi ai đó nói "nhà này sổ hồng riêng", ý họ là: có giấy chứng nhận, đứng tên riêng, không phải sổ chung.</p>`,
        detail: `<h3>Điều thực sự quan trọng: đọc gì trên giấy chứng nhận</h3>
<p>Đừng chỉ nhìn "có sổ hay không". Hãy đọc kỹ các mục sau — đây là nơi hầu hết rủi ro nằm:</p>
<table>
<tr><th>Mục cần đọc</th><th>Vì sao quan trọng</th></tr>
<tr><td><strong>Người đứng tên</strong></td><td>Phải khớp với người bán. Nếu là tài sản chung vợ chồng, cần cả hai ký. Nếu đồng sở hữu nhiều người, cần tất cả.</td></tr>
<tr><td><strong>Thửa đất số, tờ bản đồ số</strong></td><td>Định danh chính xác thửa đất. Phải khớp với thực địa.</td></tr>
<tr><td><strong>Diện tích</strong></td><td>So với đo đạc thực tế. Chênh lệch là chuyện thường gặp và cần làm rõ trước khi mua.</td></tr>
<tr><td><strong>Mục đích sử dụng</strong></td><td>Đất ở? Đất trồng cây lâu năm? Đất ở kết hợp? Đây là mục bị bỏ qua nhiều nhất và gây hậu quả lớn nhất.</td></tr>
<tr><td><strong>Thời hạn sử dụng</strong></td><td>"Lâu dài" hay một mốc thời gian cụ thể.</td></tr>
<tr><td><strong>Nguồn gốc sử dụng</strong></td><td>Nhà nước giao có thu tiền, giao không thu tiền, công nhận, cho thuê — ảnh hưởng tới quyền giao dịch.</td></tr>
<tr><td><strong>Trang cập nhật biến động</strong></td><td>Trang sau cùng ghi các thay đổi: thế chấp, chuyển nhượng một phần, thay đổi diện tích. <strong>Luôn phải lật xem trang này.</strong></td></tr>
</table>
<div class="warning-box"><strong>Bẫy phổ biến nhất:</strong> Thửa đất 200m² nhưng chỉ 60m² là <em>đất ở</em>, phần còn lại là đất trồng cây lâu năm. Người bán quảng cáo "200m² có sổ" — hoàn toàn đúng sự thật, nhưng bạn chỉ được xây nhà trên 60m², và giá trị hai loại đất chênh nhau rất nhiều. Hãy đọc kỹ mục mục đích sử dụng và phần ghi chú diện tích từng loại đất.</div>`,
        advanced: `<h3>Các trường hợp giấy tờ không đầy đủ</h3>
<table>
<tr><th>Tình trạng</th><th>Rủi ro</th><th>Khuyến nghị</th></tr>
<tr><td><strong>Sổ riêng, chính chủ, pháp lý sạch</strong></td><td>Thấp nhất</td><td>Vẫn phải kiểm tra quy hoạch và tình trạng thế chấp</td></tr>
<tr><td><strong>Sổ chung</strong> (nhiều người cùng đứng tên một giấy)</td><td>Trung bình – cao. Mọi giao dịch cần sự đồng ý của tất cả đồng sở hữu; dễ phát sinh tranh chấp; khó thế chấp; thanh khoản kém</td><td>Chỉ cân nhắc nếu có phương án tách sổ rõ ràng và hiểu rõ rủi ro</td></tr>
<tr><td><strong>Vi bằng, giấy tay</strong></td><td>Rất cao. Vi bằng do thừa phát lại lập chỉ ghi nhận sự kiện đã diễn ra — <strong>nó không phải là hợp đồng chuyển nhượng có hiệu lực</strong> và không thay thế công chứng</td><td>Không nên dùng làm căn cứ cho một giao dịch bất động sản lớn</td></tr>
<tr><td><strong>Chưa có giấy chứng nhận</strong></td><td>Rất cao. Không giao dịch chính thức được, không thế chấp được, không chắc bao giờ được cấp</td><td>Tránh, trừ khi bạn hiểu rất rõ hồ sơ và chấp nhận rủi ro</td></tr>
<tr><td><strong>Đang thế chấp ngân hàng</strong></td><td>Xử lý được nhưng cần quy trình đúng</td><td>Giao dịch ba bên có ngân hàng tham gia; không tự trả nợ thay người bán bằng tiền cọc</td></tr>
</table>
<div class="tip-box"><strong>Nguyên tắc:</strong> Chênh lệch giá giữa tài sản pháp lý sạch và tài sản pháp lý có vấn đề luôn có lý do. Khoản "tiết kiệm" khi mua nhà giấy tờ không đầy đủ chính là phần rủi ro bạn nhận về — và rủi ro đó thường hiện ra đúng lúc bạn cần bán hoặc cần thế chấp.</div>
<h3>Lưu ý về mẫu giấy chứng nhận hiện hành</h3>
<p>Luật Đất đai 2024 tiếp tục dùng một mẫu giấy chứng nhận thống nhất, với tên gọi đầy đủ là <em>Giấy chứng nhận quyền sử dụng đất, quyền sở hữu tài sản gắn liền với đất</em>. Các giấy chứng nhận đã cấp trước đó vẫn có giá trị và không bắt buộc phải đổi sang mẫu mới.</p>
<p><em>Nội dung mang tính khái quát để hiểu cơ chế; với giao dịch cụ thể hãy kiểm tra quy định hiện hành và tham vấn công chứng viên hoặc luật sư.</em></p>`,
        diagram: null
    },

    'luat-dat-dai-2024': {
        icon: '📜', title: 'Luật Đất Đai 2024 — Những Điểm Chính', category: 'legal',
        connections: ['so-huu-vs-su-dung', 'quy-hoach-thu-hoi', 'thue-phi-vn', 'vn-chinh-sach-tin-dung'],
        simple: `<h3>📜 Luật Đất Đai 2024 — Những Điểm Chính</h3>
<p>Luật Đất đai số 31/2024/QH15 được Quốc hội thông qua đầu năm 2024 và có hiệu lực từ ngày <strong>1/8/2024</strong> (thời điểm hiệu lực đã được điều chỉnh sớm hơn so với dự kiến ban đầu là 1/1/2025).</p>
<p>Đây là lần sửa đổi lớn, thay thế Luật Đất đai 2013, và tác động trực tiếp tới cách định giá đất, bồi thường khi thu hồi, và một số quyền của người sử dụng đất.</p>
<div class="example-box"><strong>Thay đổi có ảnh hưởng rộng nhất:</strong> bỏ khung giá đất do Trung ương ban hành, chuyển sang cơ chế bảng giá đất do địa phương xây dựng và cập nhật hàng năm, với yêu cầu tiệm cận nguyên tắc thị trường.</div>`,
        detail: `<h3>Các nhóm thay đổi đáng chú ý</h3>
<table>
<tr><th>Nội dung</th><th>Trước đây</th><th>Theo Luật 2024</th></tr>
<tr><td><strong>Khung giá đất</strong></td><td>Chính phủ ban hành khung giá 5 năm, bảng giá địa phương xây trong khung đó — thường thấp hơn thị trường nhiều</td><td>Bỏ khung giá đất; bảng giá đất do cấp tỉnh xây dựng, công bố và cập nhật hàng năm theo nguyên tắc thị trường</td></tr>
<tr><td><strong>Bồi thường khi thu hồi</strong></td><td>Nhiều khiếu nại do giá bồi thường thấp xa giá thị trường</td><td>Nguyên tắc bồi thường theo giá đất cụ thể; yêu cầu bố trí tái định cư hoàn thành trước khi thu hồi; đa dạng hình thức bồi thường</td></tr>
<tr><td><strong>Các trường hợp thu hồi</strong></td><td>Quy định mang tính khái quát, gây tranh cãi về "phát triển kinh tế - xã hội"</td><td>Liệt kê cụ thể hơn các trường hợp Nhà nước thu hồi đất</td></tr>
<tr><td><strong>Đất nông nghiệp</strong></td><td>Hạn chế đối tượng nhận chuyển nhượng</td><td>Mở rộng hạn mức nhận chuyển quyền; nới điều kiện đối với cá nhân không trực tiếp sản xuất nông nghiệp</td></tr>
<tr><td><strong>Người Việt Nam ở nước ngoài</strong></td><td>Quyền hạn chế hơn</td><td>Mở rộng quyền sử dụng đất đối với người gốc Việt Nam định cư ở nước ngoài</td></tr>
<tr><td><strong>Minh bạch thông tin</strong></td><td>Thông tin quy hoạch khó tiếp cận</td><td>Đẩy mạnh xây dựng hệ thống thông tin, cơ sở dữ liệu đất đai và công khai quy hoạch</td></tr>
</table>
<div class="warning-box"><strong>Bảng giá đất sát thị trường hơn có hai mặt.</strong> Nó giúp người bị thu hồi đất được bồi thường công bằng hơn — điều đã gây rất nhiều bức xúc trong nhiều năm. Nhưng nó cũng làm tăng các nghĩa vụ tài chính tính theo bảng giá: tiền sử dụng đất khi chuyển mục đích, lệ phí trước bạ, và các khoản thuế phí liên quan. Người có nhu cầu chuyển đất nông nghiệp lên đất ở là nhóm cảm nhận rõ nhất thay đổi này.</div>`,
        advanced: `<h3>Vì sao bỏ khung giá đất là thay đổi lớn</h3>
<p>Cơ chế hai giá — giá Nhà nước thấp, giá thị trường cao — tồn tại nhiều năm và là gốc rễ của một loạt vấn đề:</p>
<ul>
<li><strong>Khiếu kiện đất đai.</strong> Người bị thu hồi nhận bồi thường theo giá Nhà nước, rồi thấy đất đó được đưa vào dự án bán theo giá thị trường cao gấp nhiều lần. Đây là nguồn khiếu nại hành chính lớn nhất trong lĩnh vực đất đai suốt nhiều năm.</li>
<li><strong>Thất thu ngân sách.</strong> Các nghĩa vụ tài chính tính trên bảng giá thấp làm giảm nguồn thu từ đất.</li>
<li><strong>Khai giá thấp khi giao dịch.</strong> Vì thuế tính trên giá ghi trong hợp đồng, các bên có động cơ ghi thấp, làm méo mó toàn bộ dữ liệu thị trường và khiến mọi phân tích định giá kém tin cậy.</li>
</ul>
<p>Việc chuyển sang bảng giá đất cập nhật hàng năm theo nguyên tắc thị trường nhằm thu hẹp khoảng cách này. Tác động thực tế sẽ hiện dần qua nhiều năm, và phụ thuộc nhiều vào cách từng địa phương triển khai.</p>
<div class="tip-box"><strong>Ý nghĩa với người mua nhà:</strong> trong trung hạn, hãy dự trù rằng các chi phí tính theo bảng giá đất (chuyển mục đích sử dụng đất, lệ phí trước bạ, một số khoản thuế) có xu hướng tăng khi bảng giá được cập nhật sát thị trường hơn. Nếu bạn đang cân nhắc mua đất chờ chuyển mục đích, hãy tính khoản tiền sử dụng đất theo bảng giá <em>mới nhất của địa phương</em>, đừng dùng con số của những năm trước — chênh lệch có thể rất lớn và làm hỏng toàn bộ bài toán đầu tư.</div>
<p><em>Đây là tóm tắt khái quát các định hướng chính sách chính, không phải trích dẫn điều luật. Các quy định chi tiết nằm ở luật và các nghị định, thông tư hướng dẫn, và có thể được sửa đổi. Với việc cụ thể, hãy tra cứu văn bản hiện hành hoặc tham vấn chuyên gia pháp lý.</em></p>`,
        diagram: null
    },

    'thoi-han-su-dung': {
        icon: '⏳', title: 'Thời Hạn Sử Dụng Đất & Chung Cư', category: 'legal',
        connections: ['so-huu-vs-su-dung', 'phan-khuc-dau-tu', 'pp-chi-phi', 'cn-tong-quan'],
        simple: `<h3>⏳ Thời Hạn Sử Dụng Đất & Chung Cư</h3>
<p>Không phải mọi bất động sản đều có thời hạn giống nhau. Đây là bảng phân loại cơ bản mà mọi người mua nên nắm:</p>
<table>
<tr><th>Loại</th><th>Thời hạn thông thường</th></tr>
<tr><td>Đất ở của cá nhân, hộ gia đình</td><td>Sử dụng ổn định lâu dài</td></tr>
<tr><td>Đất nông nghiệp giao cho cá nhân</td><td>Có thời hạn (thường 50 năm), được xem xét gia hạn khi hết hạn nếu còn nhu cầu</td></tr>
<tr><td>Đất dự án của doanh nghiệp</td><td>Có thời hạn theo dự án, thường không quá 50 năm; một số trường hợp đặc biệt dài hơn</td></tr>
<tr><td>Đất thương mại, dịch vụ (nghỉ dưỡng)</td><td>Có thời hạn theo dự án</td></tr>
</table>
<div class="warning-box"><strong>Đây là chỗ nhiều người mua bất động sản nghỉ dưỡng bị bất ngờ.</strong> Nhiều sản phẩm condotel, biệt thự nghỉ dưỡng nằm trên đất thương mại dịch vụ có thời hạn, không phải đất ở lâu dài. Điều này ảnh hưởng trực tiếp tới giá trị dài hạn và khả năng thế chấp, nhưng thường không được nhấn mạnh khi bán hàng.</div>`,
        detail: `<h3>Câu hỏi lớn: chung cư có thời hạn không?</h3>
<p>Đây là chủ đề gây tranh luận nhiều năm và từng có đề xuất quy định thời hạn sở hữu căn hộ chung cư.</p>
<div class="tip-box"><strong>Kết quả: đề xuất áp thời hạn sở hữu chung cư <em>không</em> được đưa vào Luật Nhà ở 2023.</strong> Quyền sở hữu căn hộ được xác lập theo giấy chứng nhận, gắn với thời hạn sử dụng đất của dự án — với dự án nhà ở thương mại trên đất ở thì là lâu dài.</div>
<h3>Nhưng "sở hữu lâu dài" không có nghĩa là tòa nhà tồn tại mãi</h3>
<p>Điều thực sự chi phối số phận một căn hộ không phải là dòng chữ trên giấy tờ, mà là <strong>tuổi thọ vật lý của công trình</strong>. Pháp luật về nhà ở quy định cơ chế kiểm định chất lượng nhà chung cư; khi công trình hết niên hạn sử dụng hoặc bị kết luận không còn bảo đảm an toàn, sẽ có phương án phá dỡ, cải tạo, xây dựng lại.</p>
<p>Khi đó, quyền của cư dân được xác định theo quy định về cải tạo, xây dựng lại nhà chung cư — thường là được bố trí tái định cư tại chính dự án mới với hệ số diện tích nhất định, hoặc bồi thường theo phương án được duyệt.</p>
<div class="warning-box"><strong>Thực tế cải tạo chung cư cũ ở Việt Nam rất chậm.</strong> Nhiều khu tập thể xây từ nhiều thập kỷ trước, đã xuống cấp nghiêm trọng, vẫn chưa hoàn tất cải tạo sau rất nhiều năm bàn thảo. Nguyên nhân chính là bài toán lợi ích ba bên: cư dân muốn hệ số đền bù cao, chủ đầu tư cần lợi nhuận, và giới hạn quy hoạch về chiều cao, mật độ dân số không cho phép xây đủ lớn để thỏa mãn cả hai. Bài toán này không dễ giải và bạn nên tính tới nó khi mua chung cư đã cũ.</div>`,
        advanced: `<h3>Hệ quả kinh tế: căn hộ và nhà đất đi hai đường khác nhau</h3>
<p>Nối lại với phương pháp chi phí: giá trị bất động sản = giá trị đất + giá trị công trình − khấu hao. Với căn hộ và nhà phố, tỷ trọng hai thành phần này rất khác nhau:</p>
<table>
<tr><th></th><th>Nhà phố</th><th>Căn hộ chung cư</th></tr>
<tr><td>Phần đất</td><td>Chiếm tỷ trọng áp đảo trong giá trị; thuộc riêng bạn</td><td>Quyền sử dụng đất chung, chia cho hàng trăm hộ</td></tr>
<tr><td>Phần công trình</td><td>Tỷ trọng nhỏ; có thể phá đi xây lại tùy ý bạn</td><td>Tỷ trọng lớn; khấu hao theo thời gian; không tự quyết định được</td></tr>
<tr><td>Sau 30–40 năm</td><td>Đất vẫn còn nguyên giá trị, thường tăng</td><td>Công trình xuống cấp; giá trị phụ thuộc vào phương án cải tạo</td></tr>
</table>
<div class="tip-box"><strong>Đây là lý do cấu trúc khiến chung cư cũ và nhà phố cũ có quỹ đạo giá khác hẳn nhau,</strong> chứ không phải do "tâm lý người Việt thích nhà đất". Khi bạn mua căn hộ, một phần đáng kể số tiền của bạn nằm ở tài sản đang khấu hao. Khi bạn mua nhà phố, phần lớn nằm ở tài sản không khấu hao.</div>
<p>Điều này <em>không</em> có nghĩa là không nên mua chung cư. Chung cư có nhiều ưu điểm thật: giá vào thấp hơn, vị trí trung tâm hơn với cùng số tiền, tiện ích, an ninh, dễ cho thuê, thanh khoản tốt ở phân khúc phổ thông. Nó chỉ có nghĩa là bạn nên:</p>
<ul>
<li>Kỳ vọng tốc độ tăng giá dài hạn khác với nhà đất, đặc biệt sau mốc 20–25 năm tuổi.</li>
<li>Chú ý tới chất lượng xây dựng và năng lực ban quản trị — chúng ảnh hưởng trực tiếp tới tuổi thọ hữu ích.</li>
<li>Thận trọng khi mua chung cư đã trên 20 năm tuổi với kỳ vọng "sẽ được đền bù khi cải tạo" — đó là một cược vào một quy trình đã chứng minh là rất chậm.</li>
</ul>`,
        diagram: null
    },

    'quy-hoach-thu-hoi': {
        icon: '🗺️', title: 'Quy Hoạch, Thu Hồi & Bồi Thường', category: 'legal',
        connections: ['ha-tang-quy-hoach', 'checklist-phap-ly', 'luat-dat-dai-2024', 'tranh-chap'],
        simple: `<h3>🗺️ Quy Hoạch, Thu Hồi & Bồi Thường</h3>
<p>Quy hoạch là con dao hai lưỡi sắc nhất trong bất động sản. Cùng một quyết định hành chính có thể làm mảnh đất của bạn tăng giá nhiều lần, hoặc gần như mất giá trị giao dịch.</p>
<div class="warning-box"><strong>Rủi ro quy hoạch không thể phát hiện bằng cách đi xem nhà.</strong> Một căn nhà đẹp, giấy tờ đầy đủ, giá hợp lý vẫn có thể nằm trong ranh giới một dự án đường sắp mở. Cách duy nhất để biết là <strong>chủ động tra cứu</strong> trước khi xuống tiền.</div>`,
        detail: `<h3>Ba loại quy hoạch cần phân biệt</h3>
<table>
<tr><th>Loại</th><th>Nội dung</th><th>Ảnh hưởng tới bạn</th></tr>
<tr><td><strong>Quy hoạch sử dụng đất</strong></td><td>Khu vực này được dùng làm gì: đất ở, đất công cộng, cây xanh, giao thông</td><td>Quyết định bạn có được xây nhà ở đó không</td></tr>
<tr><td><strong>Quy hoạch xây dựng / quy hoạch chi tiết</strong></td><td>Mật độ xây dựng, chiều cao tối đa, khoảng lùi, chỉ giới</td><td>Quyết định bạn xây được bao nhiêu</td></tr>
<tr><td><strong>Kế hoạch sử dụng đất hàng năm</strong></td><td>Năm nay địa phương dự kiến thu hồi, chuyển mục đích những thửa nào</td><td>Cho biết việc thu hồi có sắp diễn ra không</td></tr>
</table>
<h3>Cách tra cứu</h3>
<ol>
<li><strong>Xin thông tin quy hoạch tại cơ quan quản lý cấp huyện/quận</strong> nơi có thửa đất. Đây là kênh chính thức và đáng tin cậy nhất.</li>
<li><strong>Tra trên cổng thông tin quy hoạch của địa phương</strong> nếu có. Nhiều tỉnh thành đã số hóa bản đồ quy hoạch, tuy mức độ cập nhật khác nhau.</li>
<li><strong>Yêu cầu người bán cung cấp văn bản</strong> xác nhận thông tin quy hoạch của chính thửa đất đó.</li>
<li><strong>Nhờ công chứng viên hoặc luật sư kiểm tra</strong> nếu giao dịch giá trị lớn — chi phí nhỏ so với rủi ro.</li>
</ol>
<div class="warning-box"><strong>Tuyệt đối không dựa vào lời nói của môi giới hoặc ảnh chụp bản đồ không rõ nguồn.</strong> "Chỗ này em kiểm tra rồi, sạch quy hoạch" không phải là một bằng chứng. Hãy yêu cầu giấy tờ, và tự mình đi tra cứu ở cơ quan có thẩm quyền.</div>`,
        advanced: `<h3>"Quy hoạch treo" — rủi ro tệ nhất</h3>
<p>Đây là tình trạng đất nằm trong quy hoạch nhưng dự án chưa triển khai, kéo dài nhiều năm. Chủ đất rơi vào thế kẹt hoàn toàn:</p>
<ul>
<li>Không được xây mới hoặc cải tạo lớn (hoặc chỉ được xây tạm, không được bồi thường phần xây tạm).</li>
<li>Rất khó chuyển nhượng — người mua có hiểu biết sẽ tránh.</li>
<li>Chưa được bồi thường vì chưa có quyết định thu hồi.</li>
<li>Không biết bao giờ tình trạng này kết thúc.</li>
</ul>
<p>Về mặt kinh tế, tài sản vẫn thuộc về bạn nhưng gần như mất hết giá trị sử dụng và giá trị giao dịch. Pháp luật có quy định về xử lý quy hoạch chậm triển khai, nhưng thực tế xử lý ở nhiều nơi vẫn chậm.</p>
<h3>Bồi thường khi thu hồi</h3>
<p>Luật Đất đai 2024 đưa ra một số thay đổi theo hướng có lợi hơn cho người bị thu hồi:</p>
<ul>
<li>Bồi thường về đất theo <strong>giá đất cụ thể</strong> được xác định tại thời điểm thu hồi, thay vì theo bảng giá thấp như trước.</li>
<li>Yêu cầu <strong>hoàn thành bố trí tái định cư trước khi thu hồi</strong> đất ở — nhằm tránh tình trạng người dân bị thu hồi nhà mà chưa có chỗ ở mới.</li>
<li>Đa dạng hóa hình thức bồi thường: bằng tiền, bằng đất khác, bằng nhà ở, tùy điều kiện và nguyện vọng.</li>
<li>Bồi thường cả tài sản gắn liền với đất và hỗ trợ ổn định đời sống, chuyển đổi nghề.</li>
</ul>
<div class="tip-box"><strong>Điểm quan trọng cần hiểu về bản chất:</strong> thu hồi đất <em>không</em> phải là một cuộc mua bán tự nguyện. Bạn không có quyền từ chối bán như trong giao dịch dân sự thông thường. Đây chính là điểm khác biệt cốt lõi giữa "quyền sử dụng đất" và "sở hữu tuyệt đối" — và cũng là lý do vì sao việc kiểm tra quy hoạch trước khi mua quan trọng đến vậy. Sau khi đã mua, bạn gần như không còn lựa chọn nào.</div>
<p><em>Quy định về trình tự, mức bồi thường và hỗ trợ rất chi tiết và có khác biệt giữa các địa phương. Trong trường hợp cụ thể, hãy tra cứu văn bản hiện hành và tham vấn chuyên gia.</em></p>`,
        diagram: null
    },

    'nha-hinh-thanh-tuong-lai': {
        icon: '🏗️', title: 'Nhà Ở Hình Thành Trong Tương Lai', category: 'legal',
        connections: ['bay-lua-dao', 'dat-coc-hop-dong', 'cn-nha-xay-do', 'checklist-phap-ly'],
        simple: `<h3>🏗️ Nhà Ở Hình Thành Trong Tương Lai</h3>
<p>Đây là hình thức mua bán phổ biến nhất với căn hộ ở Việt Nam: bạn trả tiền theo tiến độ cho một căn nhà <strong>chưa tồn tại</strong>, và nhận nhà sau vài năm.</p>
<div class="example-box"><strong>Về bản chất, bạn đang cho chủ đầu tư vay tiền không lãi suất</strong> để họ xây nhà, đổi lại được mua với giá thấp hơn giá bán khi hoàn thiện. Đây là một đánh đổi hợp lý — nhưng nó đi kèm rủi ro thật, và bạn cần biết rõ mình đang gánh rủi ro gì.</div>
<p>Rủi ro lớn nhất rất đơn giản: <strong>dự án không hoàn thành</strong>. Điều này đã xảy ra với hàng loạt dự án ở Việt Nam và với quy mô lớn hơn nhiều ở Trung Quốc.</p>`,
        detail: `<h3>Các lớp bảo vệ pháp lý</h3>
<p>Pháp luật kinh doanh bất động sản đặt ra một số điều kiện để bảo vệ người mua. Hãy kiểm tra <strong>từng điều kiện một</strong> trước khi ký:</p>
<table>
<tr><th>Điều kiện</th><th>Bạn cần yêu cầu xem gì</th></tr>
<tr><td><strong>Văn bản thông báo đủ điều kiện bán</strong> của cơ quan quản lý nhà ở cấp tỉnh</td><td>Bản chính hoặc bản sao có chứng thực. Đây là giấy tờ quan trọng nhất — nó xác nhận dự án đủ điều kiện huy động vốn.</td></tr>
<tr><td><strong>Bảo lãnh của ngân hàng</strong> về nghĩa vụ tài chính của chủ đầu tư</td><td>Hợp đồng bảo lãnh, và thư bảo lãnh cho chính căn hộ của bạn. Nếu chủ đầu tư không bàn giao đúng cam kết, ngân hàng hoàn lại tiền bạn đã đóng.</td></tr>
<tr><td><strong>Giấy tờ pháp lý dự án</strong></td><td>Quyết định giao đất, giấy chứng nhận quyền sử dụng đất của dự án, giấy phép xây dựng, quy hoạch chi tiết được duyệt</td></tr>
<tr><td><strong>Biên bản nghiệm thu phần móng</strong></td><td>Điều kiện bắt buộc để được bán nhà chung cư hình thành trong tương lai</td></tr>
<tr><td><strong>Tình trạng thế chấp dự án</strong></td><td>Nếu dự án đang thế chấp, cần văn bản giải chấp hoặc đồng ý của ngân hàng cho phép bán căn hộ đó</td></tr>
</table>
<div class="warning-box"><strong>Thư bảo lãnh ngân hàng là lớp bảo vệ mạnh nhất bạn có — và cũng là thứ hay bị bỏ qua nhất.</strong> Nhiều người mua ký hợp đồng, đóng tiền nhiều đợt, mà chưa từng nhìn thấy thư bảo lãnh cho căn hộ của mình. Hãy yêu cầu bằng văn bản, và nếu chủ đầu tư trì hoãn, hãy coi đó là tín hiệu cảnh báo nghiêm túc.</div>`,
        advanced: `<h3>Giới hạn thanh toán theo tiến độ</h3>
<p>Pháp luật giới hạn tỷ lệ chủ đầu tư được thu trước, nhằm giảm rủi ro cho người mua. Các mốc chính:</p>
<ul>
<li>Thanh toán lần đầu và các đợt tiếp theo phải theo tiến độ xây dựng, không được thu tùy tiện.</li>
<li>Tổng số tiền thu trước khi bàn giao nhà bị giới hạn (mức trần thông thường là <strong>70%</strong> giá trị hợp đồng; với chủ đầu tư có vốn đầu tư nước ngoài, mức trần thấp hơn).</li>
<li>Không được thu quá <strong>95%</strong> giá trị hợp đồng khi bên mua chưa được cấp giấy chứng nhận. Phần còn lại được thanh toán khi có giấy chứng nhận.</li>
<li>Luật Kinh doanh bất động sản 2023 cũng giới hạn mức <strong>đặt cọc</strong> đối với nhà ở hình thành trong tương lai (không quá 5% giá bán) và chỉ được nhận cọc khi dự án đã đủ điều kiện đưa vào kinh doanh.</li>
</ul>
<div class="tip-box"><strong>Khoản 5% cuối cùng là công cụ đàm phán quan trọng của bạn.</strong> Nó là động lực để chủ đầu tư hoàn tất thủ tục cấp sổ. Đừng bao giờ tự nguyện thanh toán hết 100% trước khi có giấy chứng nhận, dù được chào chiết khấu — bạn sẽ mất đòn bẩy duy nhất còn lại, và việc chậm cấp sổ nhiều năm là vấn đề phổ biến.</div>
<h3>Vì sao mô hình bán trước có rủi ro hệ thống</h3>
<p>Mô hình này chuyển rủi ro xây dựng từ chủ đầu tư sang người mua. Chủ đầu tư dùng tiền của người mua đợt này để xây dự án, hoặc đôi khi để hoàn thành dự án trước đó. Khi tín dụng bị siết hoặc doanh số chậm lại, dòng tiền đứt và dự án dừng — trong khi người mua đã đóng phần lớn tiền.</p>
<p>Đây chính xác là cơ chế đã tạo ra khủng hoảng nhà xây dở quy mô lớn ở Trung Quốc sau 2021 (xem chủ điểm về Trung Quốc). Việt Nam có quy mô nhỏ hơn nhưng cùng bản chất mô hình, và cũng đã có nhiều dự án đình trệ nhiều năm.</p>
<div class="warning-box"><strong>Giảm rủi ro bằng cách:</strong> ưu tiên chủ đầu tư có lịch sử bàn giao đúng hạn nhiều dự án; kiểm tra thực địa xem công trường có thi công thật không; ưu tiên dự án đã xây đến giai đoạn cao; và luôn có thư bảo lãnh ngân hàng cho căn hộ của mình. Chiết khấu sâu bất thường thường là dấu hiệu chủ đầu tư đang cần tiền gấp, không phải là cơ hội.</div>`,
        diagram: null
    },

    'dat-coc-hop-dong': {
        icon: '✍️', title: 'Đặt Cọc & Hợp Đồng Mua Bán', category: 'legal',
        connections: ['tham-dinh-gia-nh', 'cong-chung-sang-ten', 'quy-trinh-mua-nha', 'bay-lua-dao'],
        simple: `<h3>✍️ Đặt Cọc & Hợp Đồng Mua Bán</h3>
<p>Đặt cọc là thời điểm rủi ro nhất trong toàn bộ quá trình mua nhà: bạn đã bỏ ra một khoản tiền lớn, nhưng chưa có gì đảm bảo chắc chắn.</p>
<div class="example-box"><strong>Bản chất pháp lý của đặt cọc:</strong> theo Bộ luật Dân sự, nếu bên đặt cọc từ chối giao kết hợp đồng thì mất cọc; nếu bên nhận cọc từ chối thì phải trả lại cọc <strong>và</strong> một khoản tiền tương đương giá trị cọc (trừ khi các bên có thỏa thuận khác). Đây là cơ chế phạt cọc hai chiều.</div>
<p>Mức cọc phổ biến trong giao dịch nhà đất là khoảng 5–10% giá trị. Với một căn nhà 4 tỷ, đó là 200–400 triệu — số tiền đủ lớn để bạn phải cẩn thận.</p>`,
        detail: `<h3>Những điều khoản bắt buộc phải có trong hợp đồng đặt cọc</h3>
<table>
<tr><th>Điều khoản</th><th>Vì sao cần</th></tr>
<tr><td><strong>Mô tả chính xác tài sản</strong></td><td>Số thửa, tờ bản đồ, địa chỉ, diện tích, số giấy chứng nhận — khớp với sổ</td></tr>
<tr><td><strong>Giá và phương thức thanh toán</strong></td><td>Ghi rõ tổng giá, các đợt, thời điểm</td></tr>
<tr><td><strong>Thời hạn ký hợp đồng công chứng</strong></td><td>Phải đủ dài để hoàn tất thẩm định, duyệt vay, kiểm tra pháp lý</td></tr>
<tr><td><strong>Ai chịu thuế, phí nào</strong></td><td>Thuế thu nhập cá nhân, lệ phí trước bạ, phí công chứng — thỏa thuận rõ, tránh tranh cãi sau</td></tr>
<tr><td><strong>Điều kiện hoàn cọc</strong></td><td>Điều khoản quan trọng nhất — xem phần dưới</td></tr>
<tr><td><strong>Cam kết của bên bán</strong></td><td>Tài sản không tranh chấp, không bị kê biên, không thế chấp (hoặc nêu rõ tình trạng thế chấp và cách xử lý)</td></tr>
<tr><td><strong>Chữ ký đầy đủ</strong></td><td>Cả vợ và chồng nếu là tài sản chung; tất cả đồng sở hữu nếu sổ chung</td></tr>
</table>
<div class="warning-box"><strong>Điều khoản hoàn cọc là thứ đáng đàm phán nhất, và ít người đòi nhất.</strong> Hãy đề nghị được hoàn cọc trong các trường hợp: ngân hàng không giải ngân đủ mức dự kiến; phát hiện tài sản dính quy hoạch; phát hiện tranh chấp hoặc thông tin pháp lý sai lệch so với cam kết của bên bán. Bên bán không phải lúc nào cũng đồng ý, nhưng nếu họ từ chối <em>mọi</em> điều kiện hoàn cọc, đó là thông tin đáng để bạn cân nhắc.</div>`,
        advanced: `<h3>Trình tự nên theo — và trình tự thường bị làm ngược</h3>
<p><strong>Thứ tự an toàn:</strong></p>
<ol>
<li>Xem nhà, thỏa thuận giá sơ bộ.</li>
<li>Kiểm tra pháp lý: photo sổ, tra quy hoạch, kiểm tra tình trạng thế chấp, xác minh người đứng tên.</li>
<li>Xin ngân hàng định giá sơ bộ và sơ duyệt khoản vay.</li>
<li><strong>Chỉ khi ba bước trên đã xong</strong> → đặt cọc.</li>
<li>Hoàn tất hồ sơ vay, công chứng, thanh toán, sang tên.</li>
</ol>
<p><strong>Thứ tự thường xảy ra trong thực tế:</strong> đặt cọc trước vì sợ mất căn, rồi mới đi kiểm tra. Đây là nguồn gốc của gần như mọi trường hợp mất cọc.</p>
<div class="tip-box"><strong>Áp lực "có người khác đang xem, anh chị đặt cọc giữ chỗ đi" là kỹ thuật bán hàng cơ bản.</strong> Đôi khi nó là thật. Nhưng một căn nhà bạn mất vì kiểm tra kỹ rẻ hơn rất nhiều so với một căn nhà bạn mua phải vì vội. Nếu bên bán không cho bạn đủ thời gian kiểm tra pháp lý cơ bản, đó tự nó đã là một tín hiệu.</div>
<h3>Đặt cọc nên công chứng hay không</h3>
<p>Pháp luật không bắt buộc công chứng hợp đồng đặt cọc. Nhưng công chứng giúp:</p>
<ul>
<li>Công chứng viên kiểm tra nhân thân, tình trạng hôn nhân, và tình trạng pháp lý cơ bản của tài sản.</li>
<li>Giảm rủi ro giấy tờ giả và người bán không phải chủ thật.</li>
<li>Có giá trị chứng cứ tốt hơn nếu phát sinh tranh chấp.</li>
</ul>
<p>Với giao dịch giá trị lớn, chi phí công chứng đặt cọc là rất nhỏ so với rủi ro. Đây là khoản đáng chi.</p>
<div class="warning-box"><strong>Lưu ý riêng về nhà dự án:</strong> với nhà ở hình thành trong tương lai, chủ đầu tư chỉ được nhận đặt cọc khi dự án đã đủ điều kiện đưa vào kinh doanh, và mức cọc bị giới hạn theo quy định. Các hình thức "phiếu giữ chỗ", "thỏa thuận đặt chỗ", "hợp đồng góp vốn" thu tiền khi dự án chưa đủ điều kiện là những giao dịch có rủi ro pháp lý cao — số tiền đó có thể không được bảo vệ như một khoản đặt cọc hợp lệ.</div>`,
        diagram: null
    },

    'cong-chung-sang-ten': {
        icon: '🏢', title: 'Công Chứng, Sang Tên, Đăng Bộ', category: 'legal',
        connections: ['dat-coc-hop-dong', 'thue-phi-vn', 'so-do-so-hong', 'quy-trinh-mua-nha'],
        simple: `<h3>🏢 Công Chứng, Sang Tên, Đăng Bộ</h3>
<p>Đây là giai đoạn biến thỏa thuận thành quyền sở hữu thật. Nhiều người nghĩ "trả tiền xong là nhà của mình" — không đúng.</p>
<div class="warning-box"><strong>Bạn chỉ thực sự là người sử dụng đất hợp pháp khi việc chuyển nhượng đã được <em>đăng ký</em> tại cơ quan đăng ký đất đai.</strong> Hợp đồng công chứng là điều kiện cần, đăng ký biến động mới là bước hoàn tất. Trước khi đăng ký xong, bạn đang ở trạng thái trung gian với rủi ro thật.</div>`,
        detail: `<h3>Các bước và ai làm gì</h3>
<table>
<tr><th>Bước</th><th>Làm ở đâu</th><th>Kết quả</th></tr>
<tr><td><strong>1. Công chứng hợp đồng chuyển nhượng</strong></td><td>Văn phòng công chứng hoặc phòng công chứng nơi có bất động sản</td><td>Hợp đồng có hiệu lực pháp luật</td></tr>
<tr><td><strong>2. Kê khai và nộp thuế, phí</strong></td><td>Cơ quan thuế</td><td>Chứng từ nộp thuế thu nhập cá nhân, lệ phí trước bạ</td></tr>
<tr><td><strong>3. Đăng ký biến động (sang tên)</strong></td><td>Văn phòng đăng ký đất đai hoặc bộ phận một cửa</td><td>Giấy chứng nhận sang tên bạn, hoặc cập nhật biến động</td></tr>
</table>
<h3>Công chứng viên kiểm tra những gì</h3>
<p>Đây là lớp bảo vệ quan trọng mà bạn được hưởng miễn phí (đã tính trong phí công chứng):</p>
<ul>
<li>Nhân thân các bên, năng lực hành vi dân sự.</li>
<li>Tình trạng hôn nhân — để xác định có cần chữ ký của vợ/chồng hay không.</li>
<li>Tính hợp lệ của giấy chứng nhận.</li>
<li>Tình trạng ngăn chặn, kê biên (tra cứu trong hệ thống thông tin công chứng).</li>
<li>Sự tự nguyện và hiểu biết của các bên về nội dung hợp đồng.</li>
</ul>
<div class="tip-box"><strong>Hãy tận dụng bước này.</strong> Trước ngày công chứng, mang bản photo giấy tờ đến hỏi công chứng viên xem hồ sơ có vấn đề gì không. Đây là ý kiến chuyên môn từ một bên trung lập, và phần lớn văn phòng công chứng sẵn sàng tư vấn sơ bộ. Nó rẻ hơn nhiều so với việc phát hiện vấn đề sau khi đã chuyển tiền.</div>`,
        advanced: `<h3>Rủi ro trong khoảng thời gian giữa các bước</h3>
<p>Khoảng thời gian từ lúc công chứng đến lúc sang tên xong là vùng rủi ro. Trong khoảng này, giấy chứng nhận vẫn đứng tên người bán. Về lý thuyết có thể phát sinh các tình huống phức tạp nếu người bán có nghĩa vụ tài chính với bên thứ ba.</p>
<p><strong>Cách giảm rủi ro:</strong></p>
<ul>
<li><strong>Không thanh toán hết 100% ngay tại thời điểm công chứng.</strong> Giữ lại một phần (thường 5–10%) đến khi hoàn tất sang tên.</li>
<li><strong>Dùng dịch vụ thanh toán qua ngân hàng</strong> với điều kiện giải ngân gắn với tiến độ hồ sơ. Nhiều ngân hàng cung cấp dịch vụ này.</li>
<li><strong>Nộp hồ sơ sang tên ngay</strong> sau khi công chứng, không để chậm.</li>
<li><strong>Giữ toàn bộ chứng từ</strong> — hợp đồng công chứng, biên lai thuế, biên nhận hồ sơ.</li>
</ul>
<h3>Vấn đề khai giá thấp trong hợp đồng</h3>
<p>Một thực hành phổ biến là ghi giá trong hợp đồng công chứng thấp hơn giá thật để giảm thuế. Đây là hành vi có rủi ro pháp lý, và ngoài khía cạnh pháp lý còn có những rủi ro thực tế mà người mua thường không tính tới:</p>
<div class="warning-box">
<ul>
<li><strong>Nếu tranh chấp xảy ra</strong>, bạn chỉ có căn cứ đòi lại số tiền ghi trong hợp đồng, không phải số tiền đã trả thật.</li>
<li><strong>Khi bạn bán lại</strong>, giá mua vào thấp trên giấy tờ có thể ảnh hưởng tới cách tính nghĩa vụ thuế của bạn.</li>
<li><strong>Cơ quan thuế có thể ấn định lại giá tính thuế</strong> nếu giá kê khai thấp bất thường so với mặt bằng và bảng giá đất.</li>
<li><strong>Nó làm méo dữ liệu thị trường</strong> — góp phần khiến chính bạn khó định giá chính xác trong những lần giao dịch sau.</li>
</ul>
</div>
<p>Với việc bảng giá đất được cập nhật sát thị trường hơn theo Luật Đất đai 2024, khoảng trống cho thực hành này có xu hướng thu hẹp dần.</p>
<p><em>Nội dung mang tính tham khảo về quy trình chung. Thủ tục cụ thể, thời hạn giải quyết và thành phần hồ sơ có thể khác nhau giữa các địa phương và thay đổi theo quy định hiện hành.</em></p>`,
        diagram: null
    },

    'thue-phi-vn': {
        icon: '🧮', title: 'Thuế & Phí Chuyển Nhượng Ở Việt Nam', category: 'legal',
        connections: ['chi-phi-an', 'cong-chung-sang-ten', 'luat-dat-dai-2024', 'chi-phi-so-huu'],
        simple: `<h3>🧮 Thuế & Phí Chuyển Nhượng Ở Việt Nam</h3>
<p>Chi phí giao dịch là khoản người mua lần đầu hay tính thiếu. Dưới đây là các khoản chính khi chuyển nhượng bất động sản giữa cá nhân với nhau.</p>
<table>
<tr><th>Khoản</th><th>Mức thông thường</th><th>Ai chịu (theo thông lệ)</th></tr>
<tr><td><strong>Thuế thu nhập cá nhân</strong></td><td>2% trên giá chuyển nhượng</td><td>Bên bán (nhưng thường được đàm phán)</td></tr>
<tr><td><strong>Lệ phí trước bạ</strong></td><td>0,5% trên giá tính lệ phí trước bạ</td><td>Bên mua</td></tr>
<tr><td><strong>Phí công chứng</strong></td><td>Theo biểu phí lũy tiến trên giá trị hợp đồng</td><td>Thường chia đôi hoặc theo thỏa thuận</td></tr>
<tr><td><strong>Phí thẩm định hồ sơ, lệ phí cấp giấy chứng nhận</strong></td><td>Theo quy định từng địa phương</td><td>Bên mua</td></tr>
<tr><td><strong>Phí môi giới</strong></td><td>Thông thường 1–2% giá trị</td><td>Thường bên bán</td></tr>
</table>
<div class="warning-box"><strong>Đây là các mức phổ biến tại thời điểm viết, mang tính tham khảo.</strong> Thuế suất, cách xác định giá tính thuế và các trường hợp miễn giảm được quy định trong văn bản pháp luật và có thể thay đổi. Hãy kiểm tra quy định hiện hành hoặc hỏi cơ quan thuế/công chứng cho giao dịch cụ thể của bạn.</div>`,
        detail: `<h3>Giá tính thuế được xác định thế nào</h3>
<p>Đây là điểm hay gây bất ngờ. Thuế không phải lúc nào cũng tính trên giá bạn ghi trong hợp đồng:</p>
<ul>
<li>Nếu giá ghi trong hợp đồng <strong>cao hơn</strong> giá theo bảng giá đất của địa phương → tính theo giá hợp đồng.</li>
<li>Nếu giá ghi trong hợp đồng <strong>thấp hơn</strong> giá theo bảng giá đất → cơ quan thuế tính theo bảng giá đất.</li>
</ul>
<p>Nghĩa là bảng giá đất đóng vai trò mức sàn. Với việc bảng giá đất được xây dựng sát thị trường hơn theo Luật Đất đai 2024, mức sàn này tăng lên ở nhiều địa phương, và nghĩa vụ thuế thực tế của các giao dịch cũng tăng theo.</p>
<h3>Một số trường hợp được miễn thuế thu nhập cá nhân</h3>
<ul>
<li>Chuyển nhượng giữa vợ với chồng; cha mẹ đẻ với con đẻ; cha mẹ nuôi với con nuôi; cha mẹ chồng/vợ với con dâu/rể; ông bà với cháu; anh chị em ruột với nhau.</li>
<li>Cá nhân chỉ có <strong>duy nhất một</strong> nhà ở, quyền sử dụng đất ở tại Việt Nam, thỏa mãn điều kiện về thời gian sở hữu theo quy định.</li>
</ul>
<div class="tip-box"><strong>Trường hợp "nhà ở duy nhất" có điều kiện cụ thể</strong> về thời gian sở hữu tối thiểu và việc chuyển nhượng toàn bộ. Nếu bạn thuộc diện này, hãy hỏi cơ quan thuế để chuẩn bị hồ sơ chứng minh đúng — khoản tiết kiệm 2% giá trị là đáng kể.</div>`,
        advanced: `<h3>Điều Việt Nam chưa có: thuế tài sản hàng năm</h3>
<p>Đây là khác biệt lớn nhất giữa Việt Nam và hầu hết các nước phát triển. Ở Việt Nam hiện có thuế sử dụng đất phi nông nghiệp với mức rất thấp, nhưng <strong>chưa có thuế tài sản/thuế bất động sản hàng năm</strong> đáng kể như ở Mỹ, Nhật, Hàn Quốc, Singapore.</p>
<table>
<tr><th>Hệ quả</th><th>Giải thích</th></tr>
<tr><td><strong>Giữ nhà bỏ trống gần như không tốn gì</strong></td><td>Không có áp lực tài chính buộc chủ sở hữu phải cho thuê hoặc bán ra. Đây là một nguyên nhân của tình trạng nhà, đất bỏ hoang song song với thiếu nhà ở.</td></tr>
<tr><td><strong>Đầu cơ đất rẻ</strong></td><td>Chi phí nắm giữ thấp làm việc ôm đất chờ tăng giá trở nên hấp dẫn. Ở nước có thuế tài sản, mỗi năm chờ đợi đều tốn tiền thật.</td></tr>
<tr><td><strong>Ngân sách địa phương phụ thuộc vào bán đất</strong></td><td>Không có nguồn thu ổn định hàng năm từ tài sản, địa phương phụ thuộc vào tiền sử dụng đất một lần — nguồn thu này biến động mạnh theo chu kỳ bất động sản.</td></tr>
</table>
<p>Việc xây dựng luật thuế bất động sản đã được đưa ra thảo luận nhiều lần. Nếu được ban hành, nó sẽ thay đổi đáng kể phép tính của người nắm giữ nhiều bất động sản không khai thác.</p>
<div class="warning-box"><strong>Ý nghĩa cho quyết định của bạn:</strong> nếu chiến lược đầu tư của bạn dựa hoàn toàn vào việc <em>giữ tài sản không sinh dòng tiền và chờ tăng giá</em>, hãy tính tới khả năng chi phí nắm giữ tăng lên trong tương lai. Ngược lại, tài sản tạo dòng tiền ổn định ít bị ảnh hưởng bởi thay đổi này hơn. Đây không phải dự báo về thời điểm — chỉ là một rủi ro chính sách nên được đưa vào cân nhắc dài hạn.</div>`,
        diagram: null
    },

    'tranh-chap': {
        icon: '⚠️', title: 'Tranh Chấp & Rủi Ro Pháp Lý Thường Gặp', category: 'legal',
        connections: ['checklist-phap-ly', 'so-do-so-hong', 'bay-lua-dao', 'dat-coc-hop-dong'],
        simple: `<h3>⚠️ Tranh Chấp & Rủi Ro Pháp Lý Thường Gặp</h3>
<p>Phần lớn tranh chấp bất động sản không phải do lừa đảo tinh vi, mà do những thứ rất căn bản không được kiểm tra trước khi mua.</p>
<div class="example-box"><strong>Tin tốt:</strong> gần như mọi loại tranh chấp dưới đây đều <em>phát hiện được</em> bằng vài bước kiểm tra đơn giản trước khi đặt cọc. Rủi ro pháp lý trong bất động sản chủ yếu là rủi ro của việc lười kiểm tra, không phải rủi ro không thể tránh.</div>`,
        detail: `<h3>Các loại tranh chấp phổ biến</h3>
<table>
<tr><th>Loại</th><th>Biểu hiện</th><th>Cách phát hiện trước</th></tr>
<tr><td><strong>Tranh chấp thừa kế</strong></td><td>Nhà của người đã mất, các đồng thừa kế không thống nhất, một người tự ý bán</td><td>Kiểm tra nguồn gốc tài sản; yêu cầu văn bản thỏa thuận phân chia di sản có công chứng và chữ ký đầy đủ</td></tr>
<tr><td><strong>Tài sản chung vợ chồng</strong></td><td>Chỉ một người ký bán, sau đó người kia khiếu nại</td><td>Kiểm tra tình trạng hôn nhân; yêu cầu cả hai vợ chồng ký, hoặc văn bản xác nhận tài sản riêng</td></tr>
<tr><td><strong>Tranh chấp ranh giới</strong></td><td>Diện tích thực tế khác sổ; hàng xóm lấn chiếm; tường chung</td><td>Đo đạc thực tế đối chiếu sổ; hỏi hàng xóm; xem biên bản mốc giới nếu có</td></tr>
<tr><td><strong>Đang thế chấp</strong></td><td>Sổ đang ở ngân hàng, người bán muốn dùng tiền cọc để giải chấp</td><td>Xem trang cập nhật biến động trên sổ; giao dịch ba bên có ngân hàng tham gia</td></tr>
<tr><td><strong>Bị kê biên, ngăn chặn</strong></td><td>Tài sản liên quan tới vụ án, thi hành án</td><td>Công chứng viên tra cứu hệ thống thông tin ngăn chặn</td></tr>
<tr><td><strong>Lối đi chung</strong></td><td>Nhà trong hẻm, lối đi thuộc thửa của người khác</td><td>Xem sơ đồ thửa đất trên sổ; xác định lối đi có phải đường công cộng không</td></tr>
<tr><td><strong>Đất không đúng mục đích</strong></td><td>Nhà xây trên đất nông nghiệp, xây sai phép</td><td>Đọc mục đích sử dụng trên sổ; đối chiếu giấy phép xây dựng với hiện trạng</td></tr>
</table>
<div class="warning-box"><strong>Rủi ro "nhà xây sai phép" bị đánh giá thấp nhất.</strong> Nhiều căn nhà xây vượt tầng, vượt mật độ, hoặc lấn khoảng lùi so với giấy phép. Người mua thấy nhà đẹp, sổ có, nên yên tâm. Nhưng phần xây sai có thể không được công nhận, gây khó khăn khi hoàn công, khi thế chấp, hoặc phải tháo dỡ. Hãy đối chiếu giấy phép xây dựng và bản vẽ hoàn công với hiện trạng thực tế.</div>`,
        advanced: `<h3>Bộ câu hỏi tối thiểu trước khi đặt cọc</h3>
<p>Đây là danh sách rút gọn — nếu chỉ làm được từng này thôi, bạn đã loại bỏ phần lớn rủi ro:</p>
<ol>
<li><strong>Người ký bán có đúng là người đứng tên trên sổ không?</strong> Đối chiếu CCCD với sổ.</li>
<li><strong>Tình trạng hôn nhân của người bán?</strong> Nếu đã kết hôn, tài sản hình thành trong thời kỳ hôn nhân cần cả hai ký.</li>
<li><strong>Trang cập nhật biến động trên sổ ghi gì?</strong> Có thế chấp, có chuyển nhượng một phần không?</li>
<li><strong>Thửa đất có dính quy hoạch không?</strong> Tra cứu tại cơ quan quản lý cấp huyện/quận.</li>
<li><strong>Mục đích sử dụng đất là gì, diện tích từng loại?</strong> Bao nhiêu m² là đất ở?</li>
<li><strong>Diện tích thực tế có khớp sổ không?</strong> Đo lại.</li>
<li><strong>Hiện trạng xây dựng có khớp giấy phép không?</strong></li>
<li><strong>Lối đi vào nhà thuộc về ai?</strong></li>
<li><strong>Có tranh chấp với hàng xóm không?</strong> Hỏi trực tiếp vài hộ xung quanh — nguồn thông tin rẻ và hiệu quả bất ngờ.</li>
<li><strong>Công chứng viên có phát hiện vấn đề gì khi xem hồ sơ không?</strong></li>
</ol>
<div class="tip-box"><strong>Chi phí của việc kiểm tra kỹ là vài triệu đồng và vài tuần thời gian. Chi phí của việc không kiểm tra có thể là toàn bộ số tiền bạn tích cóp trong nhiều năm.</strong> Đây là một trong số ít tình huống trong đời mà tỷ lệ giữa công sức bỏ ra và rủi ro tránh được chênh lệch lớn đến vậy.</div>
<h3>Khi tranh chấp đã xảy ra</h3>
<p>Các bước thông thường: thương lượng trực tiếp → hòa giải tại UBND cấp xã (đối với tranh chấp đất đai, đây là thủ tục bắt buộc trước khi khởi kiện trong nhiều trường hợp) → khởi kiện tại tòa án hoặc đề nghị cơ quan hành chính giải quyết tùy loại tranh chấp.</p>
<p>Quá trình này thường kéo dài nhiều năm và tốn kém. Trong thời gian đó, tài sản gần như không thể giao dịch. Đây là lý do vì sao phòng ngừa quan trọng hơn xử lý rất nhiều.</p>
<p><em>Nội dung mang tính khái quát. Với tranh chấp cụ thể, hãy tham vấn luật sư có kinh nghiệm về đất đai.</em></p>`,
        diagram: null
    },

    'freehold-leasehold': {
        icon: '🌐', title: 'Freehold vs Leasehold — So Sánh Quốc Tế', category: 'legal',
        connections: ['so-huu-vs-su-dung', 'thoi-han-su-dung', 'sg-hdb', 'cn-tong-quan'],
        simple: `<h3>🌐 Freehold vs Leasehold — So Sánh Quốc Tế</h3>
<p>Trên thế giới có hai mô hình sở hữu bất động sản cơ bản, và hiểu chúng giúp bạn đọc được tin tức quốc tế cũng như đánh giá cơ hội ở nước ngoài.</p>
<table>
<tr><th></th><th>Freehold</th><th>Leasehold</th></tr>
<tr><td><strong>Bản chất</strong></td><td>Sở hữu vĩnh viễn cả đất và công trình</td><td>Sở hữu công trình có thời hạn, trên đất của người khác</td></tr>
<tr><td><strong>Thời hạn</strong></td><td>Không giới hạn</td><td>Có hạn: 99, 999 năm, hoặc ngắn hơn</td></tr>
<tr><td><strong>Khi hết hạn</strong></td><td>Không áp dụng</td><td>Tài sản về chủ đất, trừ khi được gia hạn</td></tr>
<tr><td><strong>Giá</strong></td><td>Cao hơn</td><td>Rẻ hơn, và càng rẻ khi thời hạn còn lại càng ngắn</td></tr>
</table>
<div class="example-box"><strong>Việt Nam nằm ở đâu?</strong> Mô hình Việt Nam không trùng khớp hoàn toàn với cả hai. Đất thuộc sở hữu toàn dân, nhưng quyền sử dụng đất ở của cá nhân là ổn định lâu dài với đầy đủ quyền giao dịch — nên trên thực tế nó gần với freehold hơn nhiều so với leasehold, dù về mặt pháp lý là một khái niệm riêng.</div>`,
        detail: `<h3>Các thị trường tiêu biểu</h3>
<table>
<tr><th>Nước</th><th>Mô hình</th><th>Đặc điểm đáng chú ý</th></tr>
<tr><td><strong>Mỹ</strong></td><td>Chủ yếu freehold</td><td>Sở hữu vĩnh viễn, nhưng phải nộp thuế tài sản hàng năm — một dạng "tiền thuê" trả cho cộng đồng</td></tr>
<tr><td><strong>Anh</strong></td><td>Cả hai, leasehold phổ biến với căn hộ</td><td>Nhiều tranh cãi về phí quản lý và điều khoản gia hạn; đã có cải cách nhằm bảo vệ người mua leasehold</td></tr>
<tr><td><strong>Singapore</strong></td><td>Cả hai; HDB là leasehold 99 năm</td><td>Thị trường định giá rất rõ theo số năm còn lại; căn hộ còn ít năm bị chiết khấu mạnh</td></tr>
<tr><td><strong>Trung Quốc</strong></td><td>Đất thuộc sở hữu nhà nước/tập thể; quyền sử dụng có thời hạn</td><td>Đất ở thường 70 năm; cơ chế gia hạn được quy định nhưng chi tiết thực thi vẫn là mối quan tâm của người dân</td></tr>
<tr><td><strong>Nhật</strong></td><td>Freehold</td><td>Sở hữu đất vĩnh viễn, nhưng công trình khấu hao rất nhanh theo thông lệ thị trường</td></tr>
<tr><td><strong>Thái Lan</strong></td><td>Freehold cho công dân; người nước ngoài bị hạn chế</td><td>Người nước ngoài thường mua căn hộ (có hạn mức) hoặc thuê dài hạn</td></tr>
</table>
<div class="warning-box"><strong>Bài học từ Singapore rất đáng suy nghĩ:</strong> một căn hộ leasehold 99 năm còn 40 năm sử dụng có giá thấp hơn đáng kể so với căn tương tự còn 90 năm, và mức chiết khấu tăng nhanh khi thời hạn càng ngắn. Ngân hàng cũng hạn chế cho vay với tài sản còn ít năm. Điều này cho thấy: <strong>khi thị trường trưởng thành và có dữ liệu, thời hạn sử dụng <em>sẽ</em> được định giá.</strong></div>`,
        advanced: `<h3>Người nước ngoài mua nhà tại Việt Nam</h3>
<p>Pháp luật nhà ở Việt Nam cho phép cá nhân nước ngoài được phép nhập cảnh vào Việt Nam sở hữu nhà ở, với một số giới hạn chính:</p>
<ul>
<li>Chỉ được mua <strong>nhà ở trong dự án đầu tư xây dựng nhà ở thương mại</strong>, không thuộc khu vực cần bảo đảm quốc phòng, an ninh.</li>
<li>Có <strong>giới hạn tỷ lệ</strong>: không quá 30% số căn hộ trong một tòa chung cư; đối với nhà ở riêng lẻ, giới hạn theo số lượng trong một khu vực dân cư nhất định.</li>
<li>Thời hạn sở hữu tối đa <strong>50 năm</strong>, được xem xét gia hạn theo quy định.</li>
<li>Cá nhân nước ngoài kết hôn với công dân Việt Nam được hưởng chế độ sở hữu ổn định lâu dài như công dân Việt Nam.</li>
</ul>
<p>Người gốc Việt Nam định cư ở nước ngoài có quyền rộng hơn, và Luật Đất đai 2024 tiếp tục mở rộng thêm quyền sử dụng đất cho nhóm này.</p>
<div class="tip-box"><strong>Ý nghĩa với thị trường:</strong> giới hạn 30% và thời hạn 50 năm khiến dòng vốn nước ngoài vào nhà ở Việt Nam bị kiểm soát chặt hơn so với nhiều nước trong khu vực. Điều này làm giảm rủi ro giá bị đẩy lên bởi dòng vốn ngoại — vấn đề mà một số thành phố như Vancouver, Sydney, Auckland từng phải xử lý bằng thuế hoặc lệnh cấm riêng — nhưng cũng làm giảm một nguồn cầu.</div>
<p><em>Quy định về sở hữu nhà ở của người nước ngoài khá chi tiết và có thay đổi qua các lần sửa luật. Với trường hợp cụ thể, hãy tra cứu quy định hiện hành và tham vấn chuyên gia pháp lý.</em></p>`,
        diagram: null
    }
};
