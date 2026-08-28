// Bất Động Sản - Nguyên lý vận hành thị trường
const rePrinciplesData = {
    'dat-khan-hiem': {
        icon: '🌍', title: 'Đất Không Sản Xuất Thêm Được', category: 'principles',
        connections: ['vi-tri', 'cung-cham-tre', 'do-thi-hoa'],
        simple: `<h3>🌍 Đất Không Sản Xuất Thêm Được</h3>
<p>Hầu hết mọi thứ bạn mua đều có thể sản xuất thêm. Điện thoại bán chạy thì nhà máy tăng ca. Gạo lên giá thì vụ sau nông dân trồng nhiều hơn. <strong>Đất thì không.</strong></p>
<p>Diện tích đất của một thành phố là con số gần như cố định. Bạn không thể "sản xuất" thêm một lô đất mặt tiền ở quận 1, dù có trả bao nhiêu tiền.</p>
<div class="example-box"><strong>Ví dụ:</strong> Khi giá iPhone tăng, Apple sản xuất thêm và giá hạ nhiệt. Khi giá đất mặt tiền Nguyễn Huệ tăng, không ai tạo thêm được mét mặt tiền nào ở đó. Giá chỉ có một hướng để đi: lên, cho đến khi không ai đủ tiền trả nữa.</div>
<p>Đây là lý do nền tảng khiến bất động sản hành xử khác mọi loại hàng hóa khác.</p>`,
        detail: `<h3>Khan hiếm tuyệt đối và khan hiếm tương đối</h3>
<p>Cần tách hai loại khan hiếm, vì chúng dẫn tới hai kết luận đầu tư rất khác nhau.</p>
<table>
<tr><th>Loại</th><th>Nghĩa là gì</th><th>Ví dụ</th><th>Hệ quả giá</th></tr>
<tr><td><strong>Khan hiếm tuyệt đối</strong></td><td>Không thể tạo thêm bằng bất kỳ cách nào</td><td>Đất mặt tiền phố cổ Hà Nội, đất ven hồ Tây</td><td>Xu hướng tăng dài hạn rất mạnh</td></tr>
<tr><td><strong>Khan hiếm tương đối</strong></td><td>Có thể tăng cung bằng cách xây cao lên hoặc mở rộng ra</td><td>Căn hộ chung cư, đất vùng ven</td><td>Giá bị kìm bởi nguồn cung mới</td></tr>
</table>
<p>Người mua hay nhầm hai loại này. Một căn hộ tầng 20 trong tòa 40 tầng <em>không</em> khan hiếm — chủ đầu tư kế bên có thể xây tòa tương tự. Nhưng lô đất tòa nhà đó đứng trên thì có.</p>
<div class="warning-box"><strong>Sai lầm phổ biến:</strong> "Đất không bao giờ mất giá vì không ai sản xuất thêm đất." Câu này chỉ đúng với đất ở nơi <em>có người muốn ở</em>. Đất ở một huyện không ai đến sống cũng khan hiếm về mặt vật lý, nhưng vô giá trị về mặt kinh tế. Khan hiếm chỉ tạo ra giá khi đi kèm nhu cầu.</div>
<h3>Con người mở rộng nguồn cung bằng cách nào</h3>
<ul>
<li><strong>Xây cao lên</strong> — một lô đất 1.000m² xây 30 tầng tạo ra 30.000m² sàn. Đây là cách chính để đô thị tăng cung.</li>
<li><strong>Mở rộng ra</strong> — đô thị hóa vùng ven, kéo theo hạ tầng giao thông.</li>
<li><strong>Lấn biển</strong> — Singapore đã tăng khoảng 25% diện tích so với khi lập quốc, nhưng cực kỳ tốn kém.</li>
<li><strong>Chuyển đổi mục đích</strong> — đất nông nghiệp lên đất ở. Đây là nguồn "đất mới" lớn nhất ở Việt Nam, và cũng là nơi phát sinh nhiều đầu cơ nhất.</li>
</ul>`,
        advanced: `<h3>Địa tô và tư tưởng Henry George</h3>
<p>Kinh tế học cổ điển tách giá trị bất động sản làm hai phần có bản chất khác hẳn nhau:</p>
<ul>
<li><strong>Giá trị công trình</strong> — do lao động và vốn tạo ra. Nó khấu hao theo thời gian, giống mọi tài sản khác.</li>
<li><strong>Giá trị đất (địa tô)</strong> — <em>không</em> do người sở hữu tạo ra. Nó đến từ vị trí, từ hạ tầng nhà nước xây, từ hoạt động kinh tế của những người xung quanh.</li>
</ul>
<div class="tip-box"><strong>Ý tưởng cốt lõi:</strong> Khi thành phố mở một tuyến metro, giá đất quanh ga tăng vọt. Chủ đất không làm gì cả nhưng vẫn hưởng toàn bộ phần tăng đó. Henry George (thế kỷ 19) lập luận rằng phần giá trị này nên bị đánh thuế mạnh, vì đánh thuế nó không làm giảm nguồn cung đất — đất vẫn nằm đó dù thuế cao hay thấp.</div>
<p>Lập luận này là nền tảng lý thuyết cho <strong>thuế tài sản/thuế đất hàng năm</strong> mà Mỹ, Nhật, Singapore đều áp dụng, và là trọng tâm của các cuộc tranh luận về thuế bất động sản ở Việt Nam.</p>
<h3>Vì sao điều này quan trọng với bạn</h3>
<p>Nếu phần lớn giá trị bạn mua nằm ở <em>đất</em>, tài sản của bạn sẽ theo quỹ đạo phát triển của khu vực. Nếu phần lớn nằm ở <em>công trình</em>, tài sản của bạn khấu hao — và bạn đang cược vào một thứ mà thời gian không đứng về phía bạn. Đây là toàn bộ lý do thị trường Nhật và thị trường Việt Nam hành xử khác nhau đến vậy (xem chủ điểm về Nhật Bản).</p>`,
        diagram: null
    },

    'vi-tri': {
        icon: '📍', title: 'Vị Trí Quyết Định Giá Trị', category: 'principles',
        connections: ['dat-khan-hiem', 'ha-tang-quy-hoach', 'pp-so-sanh'],
        simple: `<h3>📍 Vị Trí Quyết Định Giá Trị</h3>
<p>Câu "location, location, location" bị lặp lại nhiều đến mức thành sáo rỗng, nhưng nó mô tả một sự thật cụ thể: <strong>hai căn nhà giống hệt nhau về vật lý có thể chênh nhau 10 lần về giá, chỉ vì đứng ở hai chỗ khác nhau.</strong></p>
<p>Bạn có thể sửa nhà, xây lại nhà, đổi nội thất. Bạn không thể di chuyển nó đi chỗ khác. Vị trí là thuộc tính duy nhất bạn mua vĩnh viễn và không bao giờ sửa được.</p>
<div class="example-box"><strong>Ví dụ:</strong> Cùng một căn hộ 70m², 2 phòng ngủ, cùng chủ đầu tư, cùng năm bàn giao. Đặt ở trung tâm quận 1 và đặt ở một huyện ngoại thành: chênh lệch giá có thể gấp 5–8 lần. Vật liệu xây dựng chỉ chênh nhau vài phần trăm.</div>`,
        detail: `<h3>Vị trí thực ra là gì</h3>
<p>"Vị trí tốt" không phải cảm tính. Nó phân tách được thành các yếu tố cụ thể, và bạn nên chấm điểm từng yếu tố khi đi xem nhà:</p>
<table>
<tr><th>Yếu tố</th><th>Câu hỏi cần trả lời</th></tr>
<tr><td><strong>Khả năng tiếp cận việc làm</strong></td><td>Từ đây đi tới các khu tập trung việc làm mất bao lâu vào giờ cao điểm? Đây là yếu tố mạnh nhất.</td></tr>
<tr><td><strong>Giao thông</strong></td><td>Có bao nhiêu cách để ra khỏi khu này? Một đường độc đạo là rủi ro lớn.</td></tr>
<tr><td><strong>Trường học</strong></td><td>Trường công theo tuyến nào? Ở nhiều nơi, ranh giới tuyến trường tạo chênh lệch giá rõ rệt giữa hai bên đường.</td></tr>
<tr><td><strong>Tiện ích thiết yếu</strong></td><td>Chợ, siêu thị, bệnh viện, hiệu thuốc trong bán kính đi bộ hoặc 5 phút xe máy.</td></tr>
<tr><td><strong>An ninh & môi trường</strong></td><td>Ngập nước, tiếng ồn, khu công nghiệp, nghĩa trang, đường điện cao thế gần đó.</td></tr>
<tr><td><strong>Vị trí vi mô</strong></td><td>Mặt tiền hay hẻm? Hẻm rộng mấy mét, ô tô vào được không? Đây là yếu tố tạo chênh lệch giá lớn nhất ở nhà phố Việt Nam.</td></tr>
</table>
<div class="tip-box"><strong>Mẹo thực tế:</strong> Đến xem nhà ít nhất hai lần — một lần giờ cao điểm buổi sáng, một lần buổi tối. Nhiều vấn đề (kẹt xe, ngập, tiếng ồn, quán nhậu) chỉ lộ ra vào đúng khung giờ.</div>`,
        advanced: `<h3>Vị trí là biến động, không phải cố định</h3>
<p>Sai lầm tinh vi hơn: coi vị trí là thuộc tính tĩnh. Vị trí <em>thay đổi theo thời gian</em>, và toàn bộ lợi nhuận vượt trội trong bất động sản đến từ việc dự đoán đúng hướng thay đổi đó.</p>
<ul>
<li><strong>Vị trí đang lên</strong> — hạ tầng mới sắp hoàn thành, doanh nghiệp đang dịch chuyển tới, dân số trẻ đang vào.</li>
<li><strong>Vị trí đang xuống</strong> — công nghiệp rút đi, dân số già hóa, hạ tầng xuống cấp không được đầu tư lại.</li>
</ul>
<div class="warning-box"><strong>Cạm bẫy quan trọng:</strong> Thông tin quy hoạch hạ tầng thường đã được phản ánh vào giá <em>trước khi</em> bạn nghe được. Khi một tuyến đường được công bố rộng rãi, phần lớn mức tăng giá đã xảy ra. Lợi nhuận thật thuộc về người mua lúc thông tin còn chưa chắc chắn — nhưng đó cũng chính là lúc rủi ro cao nhất, vì rất nhiều dự án hạ tầng bị chậm nhiều năm hoặc không bao giờ triển khai.</div>
<h3>Gradient giá theo khoảng cách</h3>
<p>Mô hình đô thị cổ điển (Alonso–Muth–Mills) mô tả giá đất giảm dần khi ra xa trung tâm, vì người ta đánh đổi <strong>tiền nhà</strong> lấy <strong>chi phí và thời gian đi lại</strong>. Độ dốc của đường cong này phụ thuộc vào chất lượng giao thông: metro tốt làm đường cong thoải ra (vùng ven trở nên hấp dẫn hơn), giao thông tệ làm nó dốc lên (trung tâm càng đắt đỏ).</p>
<p>Ở Việt Nam đường cong này còn dốc và gãy khúc, vì giao thông công cộng chưa phát triển. Đó là lý do việc các tuyến metro đi vào vận hành có tác động lớn tới cấu trúc giá của cả thành phố, chứ không chỉ các lô đất sát ga.</p>`,
        diagram: null
    },

    'cung-cau-bds': {
        icon: '⚖️', title: 'Cung & Cầu Trong Bất Động Sản', category: 'principles',
        connections: ['cung-cham-tre', 'tin-dung-gia-nha', 'price-to-income'],
        simple: `<h3>⚖️ Cung & Cầu Trong Bất Động Sản</h3>
<p>Giá nhà, cũng như mọi thứ khác, do cung và cầu quyết định. Nhưng cả cung lẫn cầu trong bất động sản đều hành xử rất lạ so với hàng hóa thường.</p>
<ul>
<li><strong>Cầu</strong> không phải là "bao nhiêu người muốn có nhà" — gần như ai cũng muốn. Cầu là <strong>bao nhiêu người vừa muốn vừa có tiền trả</strong>. Mà "có tiền" ở đây phần lớn nghĩa là <em>vay được bao nhiêu</em>.</li>
<li><strong>Cung</strong> không phản ứng ngay được. Xây một dự án mất nhiều năm. Khi nhà xây xong, hoàn cảnh thị trường có thể đã đổi hoàn toàn.</li>
</ul>
<div class="example-box"><strong>Điểm mấu chốt:</strong> Vì cung phản ứng chậm, phần lớn biến động giá nhà trong ngắn hạn đến từ phía <strong>cầu</strong> — và cầu bị điều khiển chủ yếu bởi <strong>tín dụng</strong>. Đây là chìa khóa để hiểu mọi chu kỳ bất động sản trong lịch sử.</div>`,
        detail: `<h3>Cầu bất động sản gồm những ai</h3>
<table>
<tr><th>Nhóm</th><th>Động cơ</th><th>Nhạy cảm với gì</th></tr>
<tr><td><strong>Người mua ở thực</strong></td><td>Cần chỗ ở, lập gia đình, đổi nhà lớn hơn</td><td>Lãi suất vay, thu nhập, giá thuê</td></tr>
<tr><td><strong>Nhà đầu tư cho thuê</strong></td><td>Dòng tiền hàng tháng</td><td>Tỷ suất cho thuê so với lãi tiền gửi</td></tr>
<tr><td><strong>Nhà đầu cơ</strong></td><td>Kỳ vọng bán lại giá cao hơn</td><td>Đà tăng giá và tâm lý đám đông</td></tr>
<tr><td><strong>Người mua giữ tài sản</strong></td><td>Trú ẩn khỏi lạm phát, cất giữ của cải</td><td>Lạm phát, kênh đầu tư thay thế</td></tr>
</table>
<p>Ba nhóm sau có thể biến mất rất nhanh khi kỳ vọng đảo chiều. Nhóm đầu thì ổn định. Thị trường nào có tỷ trọng nhóm đầu càng cao thì càng ít biến động.</p>
<h3>Cung gồm những gì</h3>
<ul>
<li><strong>Nhà mới xây</strong> — chỉ chiếm vài phần trăm tổng lượng nhà mỗi năm. Đây là lý do xây thêm nhà không hạ giá nhanh được.</li>
<li><strong>Nhà cũ được rao bán</strong> — nguồn cung lớn hơn nhiều, nhưng co lại khi giá giảm (người ta ôm nhà chờ giá lên, không chịu bán lỗ).</li>
<li><strong>Nhà bỏ trống</strong> — nguồn cung tiềm ẩn. Ở nhiều đô thị Việt Nam và Trung Quốc, lượng căn hộ mua để đó không ở là rất lớn.</li>
</ul>
<div class="warning-box"><strong>Đặc điểm nguy hiểm:</strong> Khi giá giảm, cung nhà cũ <em>giảm theo</em> chứ không tăng — chủ nhà rút hàng về chờ. Điều này làm giá bất động sản "dính" (sticky), giảm chậm hơn nhiều so với cổ phiếu. Nhưng nó cũng nghĩa là <strong>khối lượng giao dịch</strong> đóng băng trước, và đó mới là tín hiệu sớm của một đợt suy thoái, chứ không phải giá.</div>`,
        advanced: `<h3>Độ co giãn và vì sao vài thành phố đắt kinh khủng</h3>
<p><strong>Độ co giãn của cung</strong> đo lường: khi giá tăng 1%, lượng nhà mới tăng bao nhiêu %. Con số này giải thích gần như toàn bộ khác biệt giá nhà giữa các thành phố lớn trên thế giới.</p>
<table>
<tr><th>Cung co giãn cao</th><th>Cung co giãn thấp</th></tr>
<tr><td>Nhiều đất trống quanh đô thị</td><td>Bị chặn bởi biển, núi, hoặc vành đai xanh</td></tr>
<tr><td>Thủ tục cấp phép nhanh, dễ dự đoán</td><td>Cấp phép chậm, nhiều tầng phê duyệt</td></tr>
<tr><td>Quy định chiều cao/mật độ thoáng</td><td>Giới hạn tầng cao nghiêm ngặt</td></tr>
<tr><td><em>Giá tăng chậm, ít bong bóng</em></td><td><em>Giá tăng vọt khi cầu tăng</em></td></tr>
</table>
<p>Đây là lý do Houston (Mỹ) giữ giá nhà phải chăng dù dân số tăng mạnh, còn San Francisco, London, Hong Kong, Sydney có giá nhà cực đoan: không phải vì cầu ở đó lớn hơn, mà vì <strong>cung ở đó bị khóa chặt</strong>.</p>
<div class="tip-box"><strong>Ứng dụng cho Việt Nam:</strong> Khi đánh giá một khu vực, hãy hỏi "nếu giá ở đây tăng gấp đôi, trong 3 năm tới có thể có thêm bao nhiêu nguồn cung?". Nếu quanh đó còn hàng chục dự án đang chờ triển khai, mức tăng giá của bạn sẽ bị chặn. Nếu khu vực đã kín và không thể xây thêm, câu chuyện hoàn toàn khác.</div>`,
        diagram: null
    },

    'cung-cham-tre': {
        icon: '🐌', title: 'Vì Sao Cung Nhà Phản Ứng Chậm', category: 'principles',
        connections: ['cung-cau-bds', 'chu-ky-bds', 'cn-nha-xay-do'],
        simple: `<h3>🐌 Vì Sao Cung Nhà Phản Ứng Chậm</h3>
<p>Trong hầu hết các ngành, giá tăng thì sản xuất tăng ngay và giá hạ nhiệt. Bất động sản không có cơ chế tự điều chỉnh nhanh đó, vì <strong>từ lúc quyết định xây đến lúc có nhà để ở mất nhiều năm.</strong></p>
<div class="example-box"><strong>Một dòng thời gian điển hình:</strong><br>
Tìm và mua đất (6–18 tháng) → xin chấp thuận chủ trương, quy hoạch, giấy phép (1–3 năm) → thu xếp vốn → thi công (2–3 năm) → hoàn thiện, nghiệm thu, bàn giao (6–12 tháng).<br>
<strong>Tổng: thường 4–7 năm.</strong></div>
<p>Nghĩa là những căn hộ bàn giao năm nay được quyết định đầu tư từ khoảng 5 năm trước — dựa trên một thị trường đã không còn tồn tại.</p>`,
        detail: `<h3>Hệ quả: thị trường luôn "trễ nhịp"</h3>
<p>Độ trễ này tạo ra một dạng dao động rất đặc trưng, giống hệt mô hình <strong>mạng nhện (cobweb)</strong> trong kinh tế học:</p>
<ol>
<li>Giá tăng cao → chủ đầu tư đổ xô khởi công.</li>
<li>Vài năm sau, hàng loạt dự án cùng bàn giao một lúc.</li>
<li>Nguồn cung ập đến đúng lúc cầu đã yếu đi → giá giảm.</li>
<li>Chủ đầu tư ngừng khởi công, dự án đắp chiếu.</li>
<li>Vài năm sau, không có hàng mới → thiếu cung → giá lại tăng.</li>
<li>Quay lại bước 1.</li>
</ol>
<div class="warning-box"><strong>Đây là lý do gốc rễ của chu kỳ bất động sản.</strong> Không phải do lòng tham hay tâm lý đám đông (chúng chỉ khuếch đại). Ngay cả khi mọi người đều lý trí, độ trễ trong sản xuất tự nó đã tạo ra dao động.</div>
<h3>Điều gì làm độ trễ dài hơn nữa</h3>
<ul>
<li><strong>Thủ tục pháp lý phức tạp</strong> — ở Việt Nam, thời gian xin thủ tục thường dài hơn thời gian thi công.</li>
<li><strong>Vướng giải phóng mặt bằng</strong> — một hộ dân không đồng ý có thể chặn cả dự án nhiều năm.</li>
<li><strong>Thiếu vốn giữa chừng</strong> — khi tín dụng bị siết, dự án dở dang nằm im.</li>
<li><strong>Hạ tầng kết nối chưa xong</strong> — nhà xây xong nhưng đường chưa có thì vẫn chưa thành nguồn cung thực.</li>
</ul>`,
        advanced: `<h3>Vì sao nhà bỏ trống không cứu được thị trường</h3>
<p>Một nghịch lý hay gặp: có những đô thị vừa <em>thiếu nhà cho người cần ở</em>, vừa <em>thừa nhà bỏ trống</em>. Hai con số này cùng tồn tại vì chúng ở hai phân khúc khác nhau.</p>
<ul>
<li>Nguồn cung mới tập trung ở phân khúc cao cấp — biên lợi nhuận tốt hơn cho chủ đầu tư trên cùng một lô đất.</li>
<li>Nhu cầu thực tập trung ở phân khúc vừa túi tiền — nơi gần như không có dự án mới.</li>
<li>Căn hộ cao cấp bỏ trống không chuyển thành nhà giá rẻ, vì chủ sở hữu giữ giá và chi phí sở hữu gần như bằng không (khi chưa có thuế tài sản).</li>
</ul>
<div class="tip-box"><strong>Đây chính là lập luận kinh tế cho thuế bất động sản.</strong> Khi giữ một căn nhà trống có chi phí thực hàng năm, chủ sở hữu buộc phải chọn: cho thuê, bán ra, hoặc chịu lỗ. Cả ba lựa chọn đều đưa căn nhà đó trở lại nguồn cung. Singapore và nhiều nước dùng công cụ này rất chủ động.</div>
<h3>Vì sao "xây thật nhiều nhà" không hạ giá ngay</h3>
<p>Nhà mới mỗi năm chỉ chiếm khoảng 1–2% tổng lượng nhà hiện có của một đô thị. Kể cả tăng gấp đôi tốc độ xây dựng, tổng nguồn cung chỉ nhích thêm 1–2% mỗi năm. Tác động lên giá là thật nhưng chậm, tích lũy qua cả thập kỷ — trong khi tín dụng có thể làm giá đổi hướng chỉ trong vài quý. Đó là lý do chính sách tiền tệ luôn tác động lên giá nhà nhanh hơn chính sách nhà ở.</p>`,
        diagram: null
    },

    'chu-ky-bds': {
        icon: '🔄', title: 'Chu Kỳ Bất Động Sản', category: 'principles',
        connections: ['cung-cham-tre', 'tin-dung-gia-nha', 'jp-bubble-1991', 'vn-sot-dat'],
        simple: `<h3>🔄 Chu Kỳ Bất Động Sản</h3>
<p>Giá nhà không đi lên theo đường thẳng. Nó đi theo <strong>chu kỳ</strong> — những vòng lặp phục hồi, tăng trưởng, bùng nổ, rồi suy thoái, lặp lại nhiều lần trong đời một người.</p>
<p>Hiểu mình đang đứng ở đâu trong chu kỳ quan trọng hơn nhiều so với việc chọn được căn nhà "đẹp".</p>
<div class="example-box"><strong>Vì sao có chu kỳ:</strong> Cung phản ứng quá chậm (mất nhiều năm để xây), còn tín dụng thì phản ứng quá nhanh (lãi suất đổi trong vài tháng). Hai tốc độ lệch nhau này tự động sinh ra dao động, kể cả khi không ai tham lam hay hoảng loạn.</div>`,
        detail: `<h3>Bốn pha của chu kỳ</h3>
<table>
<tr><th>Pha</th><th>Dấu hiệu nhận biết</th><th>Người thắng</th></tr>
<tr><td><strong>1. Phục hồi</strong></td><td>Giá đã giảm sâu và đi ngang, giao dịch rất thưa, báo chí bi quan, người mua ở thực bắt đầu quay lại vì giá thuê so với giá mua đã hợp lý</td><td>Người mua ở thực và nhà đầu tư dài hạn có sẵn tiền mặt</td></tr>
<tr><td><strong>2. Tăng trưởng</strong></td><td>Giao dịch tăng dần, dự án mới khởi công trở lại, tín dụng nới, giá tăng đều và có nền tảng</td><td>Hầu hết mọi người</td></tr>
<tr><td><strong>3. Bùng nổ / Đầu cơ</strong></td><td>Ai cũng nói về nhà đất, người không chuyên bỏ việc đi môi giới, giá rời xa thu nhập và giá thuê, mua bán bằng đòn bẩy tối đa, lướt cọc chưa có sổ</td><td>Người bán ra</td></tr>
<tr><td><strong>4. Suy thoái</strong></td><td>Giao dịch đóng băng trước, sau đó giá mới giảm; chủ đầu tư mất thanh khoản; dự án đắp chiếu; tin tức về vỡ nợ</td><td>Người giữ tiền mặt và không dùng đòn bẩy</td></tr>
</table>
<div class="warning-box"><strong>Chỉ báo sớm đáng tin nhất không phải giá, mà là thanh khoản.</strong> Ở đỉnh chu kỳ, giá rao bán vẫn cao nhưng không ai mua. Số giao dịch sụt mạnh trong khi giá còn đứng — đó là cảnh báo sớm vài quý trước khi giá thật sự giảm. Giá là chỉ báo trễ vì người bán rất chậm chấp nhận cắt lỗ.</div>`,
        advanced: `<h3>Chu kỳ 18 năm và giới hạn của nó</h3>
<p>Một số nhà nghiên cứu (Homer Hoyt, sau này là Fred Harrison và Phillip Anderson) cho rằng bất động sản có chu kỳ khoảng <strong>18 năm</strong>, gồm một giai đoạn tăng dài, một cú "suy thoái giữa chu kỳ" ngắn, rồi giai đoạn bùng nổ cuối cùng trước khi sụp đổ.</p>
<div class="warning-box"><strong>Hãy thận trọng với con số này.</strong> Nó khớp khá tốt với một số chu kỳ của Mỹ và Anh trong thế kỷ 20, nhưng số lượng chu kỳ quan sát được quá ít để coi là quy luật thống kê chắc chắn, và nhiều thị trường không theo. Hãy dùng nó như một khung để nhận diện <em>pha</em>, đừng dùng để dự đoán <em>năm</em>. Không ai bấm được thời điểm đỉnh và đáy.</div>
<h3>Điều thực sự hữu ích: nhận diện pha bằng dữ liệu</h3>
<p>Thay vì đoán năm, hãy theo dõi các chỉ số có thể quan sát được:</p>
<ul>
<li><strong>Giá / thu nhập</strong> — bao nhiêu năm thu nhập trung bình để mua một căn trung bình. Càng cao càng gần đỉnh.</li>
<li><strong>Tỷ suất cho thuê so với lãi suất</strong> — khi tỷ suất cho thuê thấp hơn hẳn lãi vay, thị trường đang sống bằng kỳ vọng tăng giá, không phải bằng dòng tiền.</li>
<li><strong>Tăng trưởng tín dụng bất động sản</strong> — tăng nhanh hơn nhiều so với GDP là dấu hiệu pha bùng nổ.</li>
<li><strong>Thanh khoản</strong> — số giao dịch và thời gian trung bình để bán được một căn.</li>
<li><strong>Tỷ trọng người mua đầu cơ</strong> — tỷ lệ giao dịch không nhằm mục đích ở.</li>
</ul>
<div class="tip-box"><strong>Nguyên tắc thực dụng:</strong> Bạn không cần biết đỉnh ở đâu. Bạn chỉ cần tránh dùng đòn bẩy tối đa ở pha 3, và giữ đủ tiền mặt để sống sót qua pha 4. Ai làm được hai điều đó sẽ có mặt ở pha 1 với tư cách người mua, thay vì người bán tháo.</div>`,
        diagram: 're-cycle'
    },

    'tin-dung-gia-nha': {
        icon: '🏦', title: 'Tín Dụng & Lãi Suất Điều Khiển Giá Nhà', category: 'principles',
        connections: ['chu-ky-bds', 'don-bay', 'ltv-dti', 'vn-chinh-sach-tin-dung'],
        simple: `<h3>🏦 Tín Dụng & Lãi Suất Điều Khiển Giá Nhà</h3>
<p>Đây là cơ chế quan trọng nhất trong toàn bộ trang này. Nếu chỉ nhớ một điều, hãy nhớ điều này:</p>
<div class="example-box"><strong>Phần lớn người mua nhà không trả bằng tiền của mình — họ trả bằng tiền vay. Nên câu hỏi thật sự không phải "căn nhà đáng giá bao nhiêu", mà là <em>"người mua vay được bao nhiêu"</em>.</strong></div>
<p>Khi ngân hàng cho vay dễ hơn, mọi người mua trả được nhiều hơn, và giá nhà tăng — dù số lượng nhà không đổi và chất lượng nhà không đổi. Khi tín dụng bị siết, điều ngược lại xảy ra.</p>`,
        detail: `<h3>Lãi suất tác động mạnh đến mức nào</h3>
<p>Người mua nhà thường không nghĩ theo tổng giá, mà theo <strong>số tiền trả góp hàng tháng chịu được</strong>. Giữ nguyên khoản trả góp đó, hạ lãi suất xuống, thì số tiền vay được sẽ tăng lên đáng kể.</p>
<p>Với cùng một khoản trả góp 20 triệu/tháng, kỳ hạn 20 năm:</p>
<table>
<tr><th>Lãi suất</th><th>Vay được khoảng</th><th>Chênh lệch</th></tr>
<tr><td>12%/năm</td><td>~1,82 tỷ</td><td>mốc so sánh</td></tr>
<tr><td>10%/năm</td><td>~2,07 tỷ</td><td>+14%</td></tr>
<tr><td>8%/năm</td><td>~2,39 tỷ</td><td>+31%</td></tr>
<tr><td>6%/năm</td><td>~2,79 tỷ</td><td>+53%</td></tr>
</table>
<p><em>(Tính theo công thức trả góp đều; bạn có thể tự kiểm chứng bằng máy tính vay ở tab Công cụ.)</em></p>
<div class="warning-box"><strong>Hãy đọc kỹ bảng trên.</strong> Lãi suất giảm từ 12% xuống 6% làm sức mua của cùng một người tăng hơn 50% — mà thu nhập của họ không đổi một đồng nào. Nếu điều này xảy ra với cả thị trường cùng lúc, giá nhà sẽ bị đẩy lên, đơn giản vì mọi người đều trả được nhiều hơn cho cùng một lượng nhà.</div>
<h3>Không chỉ có lãi suất</h3>
<p>Ba van tín dụng khác cũng quan trọng không kém:</p>
<ul>
<li><strong>Tỷ lệ cho vay trên giá trị (LTV)</strong> — cho vay 70% hay 90% giá nhà. Nới LTV làm người ít vốn cũng mua được.</li>
<li><strong>Kỳ hạn vay</strong> — kéo từ 15 năm lên 30 năm làm khoản trả góp giảm mạnh, sức mua tăng.</li>
<li><strong>Room tín dụng và khẩu vị rủi ro của ngân hàng</strong> — đôi khi ngân hàng đơn giản là ngừng cho vay bất động sản, bất kể lãi suất.</li>
</ul>`,
        advanced: `<h3>Vòng lặp phản hồi khuếch đại</h3>
<p>Cơ chế trở nên nguy hiểm khi nó tự nuôi chính nó:</p>
<ol>
<li>Tín dụng nới → người mua vay nhiều hơn → giá nhà tăng.</li>
<li>Giá nhà tăng → tài sản thế chấp được định giá cao hơn.</li>
<li>Thế chấp giá trị cao hơn → ngân hàng cho vay được nhiều hơn nữa trên cùng tài sản.</li>
<li>Quay lại bước 1, mạnh hơn.</li>
</ol>
<p>Vòng lặp này chạy ngược lại y hệt khi giá giảm: tài sản mất giá → ngân hàng siết cho vay → ít người mua được hơn → giá giảm tiếp → thêm khoản vay dưới nước. Đây chính xác là cơ chế đã tạo ra khủng hoảng 2008 ở Mỹ.</p>
<div class="tip-box"><strong>Vì sao ngân hàng trung ương quan tâm đến giá nhà:</strong> Bất động sản là tài sản thế chấp lớn nhất của hệ thống ngân hàng. Giá nhà sụp không chỉ làm người mua nhà nghèo đi — nó làm bảng cân đối của ngân hàng thủng, và một hệ thống ngân hàng hỏng sẽ kéo cả nền kinh tế xuống. Đây là lý do khủng hoảng bất động sản thường nghiêm trọng hơn nhiều so với sụp đổ thị trường chứng khoán cùng quy mô.</div>
<h3>Các công cụ vĩ mô thận trọng</h3>
<p>Nhận ra vấn đề này, nhiều nước dùng công cụ nhắm riêng vào bất động sản thay vì chỉnh lãi suất chung (vốn ảnh hưởng cả nền kinh tế):</p>
<ul>
<li><strong>Trần LTV</strong> — buộc người mua phải có vốn tự có tối thiểu.</li>
<li><strong>Trần DTI/DSR</strong> — giới hạn tổng nghĩa vụ trả nợ so với thu nhập.</li>
<li><strong>Hệ số rủi ro cao hơn</strong> cho khoản vay bất động sản, làm ngân hàng phải giữ nhiều vốn hơn.</li>
<li><strong>Kiểm tra chịu đựng lãi suất</strong> — thẩm định khả năng trả nợ ở mức lãi suất cao hơn hiện tại vài điểm phần trăm.</li>
<li><strong>Thuế giao dịch lũy tiến</strong> theo số căn sở hữu (Singapore, Hàn Quốc).</li>
</ul>`,
        diagram: 're-credit'
    },

    'don-bay': {
        icon: '⚡', title: 'Đòn Bẩy — Con Dao Hai Lưỡi', category: 'principles',
        connections: ['tin-dung-gia-nha', 'thanh-khoan', 'ltv-dti', 'us-2008'],
        simple: `<h3>⚡ Đòn Bẩy — Con Dao Hai Lưỡi</h3>
<p>Bất động sản là tài sản duy nhất mà người bình thường được vay tới 70–80% giá trị để mua. Đó là điều làm nó hấp dẫn — và cũng là điều làm nó nguy hiểm.</p>
<div class="example-box"><strong>Ví dụ có lợi:</strong> Bạn có 1 tỷ, vay thêm 3 tỷ, mua căn nhà 4 tỷ. Nhà tăng 10% lên 4,4 tỷ. Bạn lãi 400 triệu trên 1 tỷ vốn = <strong>40%</strong>, dù nhà chỉ tăng 10%.</div>
<div class="warning-box"><strong>Ví dụ bất lợi:</strong> Cũng tình huống đó, nhà giảm 10% xuống 3,6 tỷ. Bạn mất 400 triệu trên 1 tỷ vốn = <strong>-40%</strong>. Nếu nhà giảm 25%, toàn bộ vốn của bạn biến mất — trong khi khoản nợ 3 tỷ vẫn còn nguyên.</div>
<p>Đòn bẩy nhân đôi cả lãi lẫn lỗ. Nó không tạo ra giá trị, nó chỉ phóng đại kết quả.</p>`,
        detail: `<h3>Đòn bẩy khuếch đại như thế nào</h3>
<p>Với căn nhà 4 tỷ, tùy vốn tự có, cùng một biến động giá 10% cho kết quả rất khác:</p>
<table>
<tr><th>Vốn tự có</th><th>Vay</th><th>Nhà tăng 10%</th><th>Nhà giảm 10%</th><th>Mất sạch vốn khi giá giảm</th></tr>
<tr><td>4 tỷ (100%)</td><td>0</td><td>+10%</td><td>-10%</td><td>-100%</td></tr>
<tr><td>2 tỷ (50%)</td><td>2 tỷ</td><td>+20%</td><td>-20%</td><td>-50%</td></tr>
<tr><td>1 tỷ (25%)</td><td>3 tỷ</td><td>+40%</td><td>-40%</td><td>-25%</td></tr>
<tr><td>0,4 tỷ (10%)</td><td>3,6 tỷ</td><td>+100%</td><td>-100%</td><td>-10%</td></tr>
</table>
<p>Cột cuối là cột quan trọng nhất mà ít người nhìn: vay càng nhiều, thị trường chỉ cần điều chỉnh nhẹ là bạn đã âm vốn.</p>
<h3>Rủi ro thật không nằm ở giá, mà ở dòng tiền</h3>
<p>Giá giảm trên giấy không giết ai cả nếu bạn vẫn trả góp được và không cần bán. Cái giết người mua nhà là <strong>mất khả năng trả hàng tháng</strong>:</p>
<ul>
<li>Mất việc hoặc giảm thu nhập.</li>
<li>Lãi suất thả nổi tăng sau thời gian ưu đãi, khoản trả góp nhảy vọt.</li>
<li>Căn nhà cho thuê bị trống nhiều tháng.</li>
<li>Chi phí lớn bất ngờ: bệnh tật, sửa chữa lớn.</li>
</ul>
<div class="warning-box"><strong>Kịch bản tệ nhất là khi cả hai cùng xảy ra:</strong> giá giảm <em>và</em> bạn buộc phải bán. Lúc đó bạn hiện thực hóa khoản lỗ đã được đòn bẩy nhân lên, đúng vào thời điểm thị trường không có người mua. Người phá sản trong mọi cuộc khủng hoảng bất động sản đều rơi vào đúng ô này.</div>`,
        advanced: `<h3>Quy tắc an toàn thực tế</h3>
<ul>
<li><strong>Vốn tự có tối thiểu 30%.</strong> Đủ đệm để sống sót qua một đợt điều chỉnh thông thường mà không âm vốn.</li>
<li><strong>Trả góp không quá 35–40% thu nhập ròng.</strong> Trên mức này, mọi biến động nhỏ trong đời sống đều thành khủng hoảng.</li>
<li><strong>Quỹ dự phòng 6–12 tháng trả góp,</strong> giữ riêng, không tính vào vốn mua nhà. Đây là thứ quyết định bạn có phải bán tháo hay không.</li>
<li><strong>Tự kiểm tra chịu đựng:</strong> tính lại khoản trả góp ở mức lãi suất cao hơn hiện tại 3–4 điểm phần trăm. Nếu con số đó làm bạn không thở được, bạn đang vay quá nhiều.</li>
</ul>
<div class="tip-box"><strong>Đòn bẩy không xấu — dùng mù quáng mới xấu.</strong> Một khoản vay có kiểm soát, với lãi suất thấp hơn tốc độ tăng giá dài hạn của tài sản, là cách hợp lý để sở hữu nhà sớm hơn. Vấn đề luôn là <em>liều lượng</em>, không phải bản thân việc vay.</div>
<h3>Vì sao đòn bẩy bất động sản gây rủi ro hệ thống</h3>
<p>Khi hàng triệu hộ gia đình cùng dùng đòn bẩy cao, một cú sốc chung (lãi suất tăng, suy thoái) buộc rất nhiều người cùng bán một lúc. Cung tăng vọt đúng lúc cầu biến mất, giá lao dốc, kéo thêm người khác vào vùng âm vốn, tạo làn sóng bán tiếp theo. Đây là <strong>vòng xoáy giảm nợ (debt deflation)</strong> mà Irving Fisher mô tả từ năm 1933, và nó lặp lại gần như y nguyên ở Nhật 1991, Mỹ 2008, và Trung Quốc sau 2021.</p>`,
        diagram: null
    },

    'thanh-khoan': {
        icon: '🧊', title: 'Tính Thanh Khoản Thấp', category: 'principles',
        connections: ['don-bay', 'chu-ky-bds', 'reit-gian-tiep', 'ban-nha'],
        simple: `<h3>🧊 Tính Thanh Khoản Thấp</h3>
<p>Bán một cổ phiếu mất vài giây. Bán một căn nhà mất vài tháng, đôi khi vài năm. Sự khác biệt này thay đổi hoàn toàn cách bạn nên nghĩ về rủi ro.</p>
<div class="example-box"><strong>Thanh khoản</strong> = khả năng chuyển tài sản thành tiền mặt nhanh, ở mức giá gần với giá trị thật của nó. Bất động sản nằm ở đáy thang thanh khoản của mọi loại tài sản phổ biến.</div>
<p>Bạn luôn có thể bán nhà nhanh — bằng cách giảm giá thật sâu. "Thanh khoản thấp" thực chất nghĩa là: <em>bán nhanh thì phải chấp nhận lỗ nhiều.</em></p>`,
        detail: `<h3>Vì sao bất động sản khó bán</h3>
<ul>
<li><strong>Mỗi tài sản là duy nhất.</strong> Không có hai căn nhà giống hệt nhau, nên không có "giá thị trường" chuẩn — mỗi giao dịch phải đàm phán riêng.</li>
<li><strong>Giá trị lớn.</strong> Số người đủ khả năng mua một căn nhà 8 tỷ ít hơn rất nhiều so với người mua được căn 2 tỷ. Phân khúc càng cao, thanh khoản càng kém.</li>
<li><strong>Chi phí giao dịch cao.</strong> Thuế, phí, công chứng, môi giới cộng lại thường 3–8% giá trị. Bạn phải tăng giá được ít nhất bằng đó mới hòa vốn.</li>
<li><strong>Thủ tục dài.</strong> Kiểm tra pháp lý, thẩm định, giải ngân, công chứng, sang tên — mỗi bước đều mất thời gian và có thể đổ vỡ.</li>
<li><strong>Người mua thường cần vay.</strong> Giao dịch phụ thuộc vào việc ngân hàng có duyệt hồ sơ của họ hay không — một biến số bạn không kiểm soát được.</li>
</ul>
<div class="warning-box"><strong>Thanh khoản biến mất đúng lúc bạn cần nó nhất.</strong> Ở pha suy thoái, khi bạn muốn bán để cắt lỗ hoặc trả nợ, chính là lúc ít người mua nhất. Thanh khoản trong bất động sản không phải hằng số — nó tương quan chặt với chu kỳ, và thường về gần bằng không ở đáy.</div>`,
        advanced: `<h3>Xếp hạng thanh khoản trong bất động sản</h3>
<table>
<tr><th>Loại tài sản</th><th>Thời gian bán điển hình</th><th>Ghi chú</th></tr>
<tr><td>Chứng chỉ quỹ / cổ phiếu bất động sản</td><td>Vài giây</td><td>Sở hữu gián tiếp, giao dịch trên sàn</td></tr>
<tr><td>Căn hộ tầm trung, pháp lý sạch, khu đông dân</td><td>1–3 tháng</td><td>Thanh khoản tốt nhất trong nhóm sở hữu trực tiếp</td></tr>
<tr><td>Nhà phố trong khu dân cư ổn định</td><td>3–6 tháng</td><td>Giá trị lớn hơn, ít người mua hơn</td></tr>
<tr><td>Đất nền vùng ven</td><td>6 tháng – vài năm</td><td>Rất nhạy chu kỳ; đóng băng hoàn toàn ở pha suy thoái</td></tr>
<tr><td>Bất động sản nghỉ dưỡng, shophouse xa trung tâm</td><td>Không xác định</td><td>Có thể không bán được ở bất kỳ giá hợp lý nào</td></tr>
<tr><td>Tài sản pháp lý không rõ ràng</td><td>Rất khó</td><td>Người mua có tiền thường từ chối ngay từ đầu</td></tr>
</table>
<div class="tip-box"><strong>Nguyên tắc:</strong> Đừng bao giờ đặt tiền bạn <em>có thể cần trong 3 năm tới</em> vào bất động sản. Và khi chọn tài sản, hãy cân nhắc thanh khoản như một tiêu chí ngang hàng với giá — một căn hộ tăng giá chậm nhưng bán được trong 2 tháng có thể an toàn hơn nhiều so với lô đất hứa hẹn tăng gấp đôi nhưng không ai mua khi bạn cần tiền.</div>
<h3>Cách bù trừ rủi ro thanh khoản</h3>
<ul>
<li>Giữ quỹ tiền mặt riêng, đủ để không bao giờ bị ép bán.</li>
<li>Ưu tiên tài sản có pháp lý hoàn chỉnh — sổ sạch là yếu tố tăng thanh khoản mạnh nhất.</li>
<li>Ưu tiên phân khúc có nhiều người mua thật, thay vì phân khúc chỉ có nhà đầu cơ.</li>
<li>Nếu muốn tiếp cận bất động sản mà vẫn cần thanh khoản, cân nhắc kênh gián tiếp (xem chủ điểm về REIT).</li>
</ul>`,
        diagram: null
    },

    'su-dung-vs-dau-co': {
        icon: '🎈', title: 'Giá Trị Sử Dụng vs Kỳ Vọng Đầu Cơ', category: 'principles',
        connections: ['rental-yield', 'chu-ky-bds', 'price-to-income', 'jp-bubble-1991'],
        simple: `<h3>🎈 Giá Trị Sử Dụng vs Kỳ Vọng Đầu Cơ</h3>
<p>Giá của một bất động sản luôn là tổng của hai thứ rất khác nhau:</p>
<ul>
<li><strong>Giá trị sử dụng</strong> — cái nhà này đáng bao nhiêu vì nó cho ai đó một chỗ ở. Đo được bằng tiền thuê.</li>
<li><strong>Kỳ vọng tăng giá</strong> — cái nhà này đáng thêm bao nhiêu vì người ta tin sẽ bán lại được cao hơn.</li>
</ul>
<div class="example-box"><strong>Cách kiểm tra nhanh:</strong> Lấy tiền thuê một năm chia cho giá bán. Nếu ra 6–8%, thị trường đang định giá chủ yếu theo giá trị sử dụng. Nếu ra 2% hoặc thấp hơn, phần lớn cái bạn trả là <em>kỳ vọng</em>, không phải công năng.</div>`,
        detail: `<h3>Vì sao tỷ lệ này quan trọng</h3>
<p>Phần giá trị sử dụng khá ổn định — người ta luôn cần chỗ ở, tiền thuê thay đổi chậm và bám theo thu nhập. Phần kỳ vọng thì có thể bốc hơi trong vài tháng, vì nó chỉ tồn tại chừng nào mọi người còn tin.</p>
<table>
<tr><th>Tỷ suất cho thuê</th><th>Thị trường đang nói gì</th><th>Rủi ro</th></tr>
<tr><td>Trên 7%</td><td>Định giá theo dòng tiền; ít kỳ vọng đầu cơ</td><td>Thấp; nhưng kiểm tra xem vì sao rẻ (khu xuống cấp?)</td></tr>
<tr><td>4–6%</td><td>Cân bằng lành mạnh</td><td>Bình thường</td></tr>
<tr><td>2–3%</td><td>Phần lớn giá đến từ kỳ vọng tăng giá</td><td>Cao; phụ thuộc dòng tiền mới liên tục vào</td></tr>
<tr><td>Dưới 2%</td><td>Gần như thuần đầu cơ</td><td>Rất cao; dễ tổn thương khi tâm lý đảo chiều</td></tr>
</table>
<div class="warning-box"><strong>So sánh bắt buộc:</strong> luôn đặt tỷ suất cho thuê cạnh <em>lãi suất tiền gửi ngân hàng</em>. Nếu gửi tiết kiệm được 6%/năm không rủi ro, mà mua nhà cho thuê chỉ được 2,5%/năm kèm đủ thứ rắc rối, thì bạn đang mua vì lý do gì? Câu trả lời trung thực thường là: vì tin giá sẽ tăng. Đó là một cược, không phải một khoản đầu tư tạo dòng tiền — và bạn nên biết rõ mình đang làm gì.</div>`,
        advanced: `<h3>Cơ chế bong bóng</h3>
<p>Bong bóng hình thành khi kỳ vọng tự nuôi chính nó:</p>
<ol>
<li>Giá tăng vì một lý do có thật (hạ tầng mới, tín dụng rẻ, dòng người nhập cư).</li>
<li>Người ta thấy giá tăng, mua vào vì tin sẽ tăng tiếp.</li>
<li>Việc mua đó làm giá tăng thật, xác nhận niềm tin ban đầu.</li>
<li>Lặp lại, ngày càng xa khỏi nền tảng sử dụng.</li>
<li>Đến lúc dòng người mua mới cạn, giá ngừng tăng.</li>
<li>Kỳ vọng đảo chiều. Vì phần lớn giá được xây trên kỳ vọng, phần đó biến mất rất nhanh.</li>
</ol>
<p>Ở bước 6, giá không quay về mức "hợp lý" một cách nhẹ nhàng — nó thường <em>vọt xuống dưới</em> mức đó, vì đòn bẩy buộc nhiều người phải bán cùng lúc.</p>
<div class="tip-box"><strong>"Bao lâu thì hoàn vốn từ tiền thuê?"</strong> Đây là câu hỏi kiểm tra tỉnh táo tốt nhất. Tỷ suất 2% nghĩa là 50 năm mới thu hồi vốn bằng tiền thuê — dài hơn tuổi thọ hữu ích của phần lớn công trình. Nếu con số nghe vô lý, đó là vì nó vô lý; phần còn lại của giá đang được biện minh bằng niềm tin rằng người sau sẽ trả nhiều hơn bạn.</div>
<h3>Sắc thái cần thừa nhận</h3>
<p>Tỷ suất cho thuê thấp không tự động nghĩa là bong bóng. Nó có thể hợp lý khi: kỳ vọng tăng trưởng thu nhập của khu vực rất mạnh, chi phí vốn thực thấp trong dài hạn, hoặc thị trường cho thuê bị kìm giá bằng chính sách. Nhưng nó luôn nghĩa là bạn đang <strong>trả trước cho tương lai</strong> — và tương lai đó cần phải thành hiện thực thì khoản đầu tư mới có lãi.</p>`,
        diagram: null
    },

    'lam-phat-bds': {
        icon: '🔥', title: 'Bất Động Sản Và Lạm Phát', category: 'principles',
        connections: ['tin-dung-gia-nha', 'chi-phi-so-huu', 'vn-tong-quan'],
        simple: `<h3>🔥 Bất Động Sản Và Lạm Phát</h3>
<p>Bất động sản được coi là kênh trú ẩn khỏi lạm phát, và điều đó phần lớn đúng — nhưng vì những lý do khác với điều nhiều người nghĩ.</p>
<p>Có <strong>hai cơ chế riêng biệt</strong> giúp người mua nhà hưởng lợi khi lạm phát cao:</p>
<ul>
<li><strong>Tài sản thực</strong> — nhà là vật chất thật. Khi tiền mất giá, giá danh nghĩa của mọi vật chất đều tăng theo, gồm cả nhà.</li>
<li><strong>Khoản nợ bị bào mòn</strong> — đây mới là cơ chế mạnh nhất, và ít người để ý.</li>
</ul>
<div class="example-box"><strong>Vì sao khoản nợ là chìa khóa:</strong> Bạn vay 2 tỷ, trả góp cố định 20 triệu/tháng trong 20 năm. Sau 10 năm lạm phát cao, thu nhập danh nghĩa của bạn có thể đã gấp đôi, nhưng khoản trả góp vẫn là 20 triệu. Gánh nặng thực của món nợ đã giảm một nửa. <strong>Lạm phát chuyển của cải từ người cho vay sang người đi vay.</strong></div>`,
        detail: `<h3>Điều kiện để cơ chế này hoạt động</h3>
<p>Người mua nhà chỉ thắng nhờ lạm phát khi hội đủ các điều kiện sau — thiếu một điều là kết quả đảo ngược:</p>
<table>
<tr><th>Điều kiện</th><th>Nếu không có thì sao</th></tr>
<tr><td>Lãi suất <strong>cố định</strong></td><td>Lãi thả nổi sẽ tăng theo lạm phát, khoản trả góp nhảy vọt — bạn không được lợi gì</td></tr>
<tr><td>Thu nhập tăng kịp lạm phát</td><td>Nếu lương đứng yên trong khi giá cả tăng, bạn nghèo đi và vẫn phải trả nợ như cũ</td></tr>
<tr><td>Giữ được tài sản đủ lâu</td><td>Bị ép bán giữa chừng thì không kịp hưởng lợi</td></tr>
<tr><td>Giá nhà tăng ít nhất bằng lạm phát</td><td>Ở thị trường đang thừa cung, giá nhà có thể đứng yên dù lạm phát cao</td></tr>
</table>
<div class="warning-box"><strong>Ở Việt Nam, điều kiện đầu tiên hiếm khi được thỏa mãn.</strong> Phần lớn khoản vay mua nhà chỉ cố định lãi suất trong 6–24 tháng đầu, sau đó thả nổi theo công thức của ngân hàng. Nghĩa là bạn <em>không</em> được hưởng cơ chế bào mòn nợ như người vay 30 năm lãi cố định ở Mỹ — ngược lại, lạm phát cao kéo lãi suất lên và khoản trả góp của bạn tăng theo. Đây là khác biệt rất lớn mà nhiều người bỏ qua khi đọc lời khuyên đầu tư từ nước ngoài.</div>`,
        advanced: `<h3>Lạm phát tác động qua nhiều kênh đối nghịch</h3>
<p>Ảnh hưởng ròng của lạm phát lên giá nhà không hiển nhiên, vì các kênh kéo ngược chiều nhau:</p>
<table>
<tr><th>Kênh</th><th>Chiều tác động lên giá nhà</th></tr>
<tr><td>Chi phí xây dựng tăng (vật liệu, nhân công)</td><td>↑ Đẩy giá nhà mới lên</td></tr>
<tr><td>Người dân tìm nơi trú ẩn tài sản</td><td>↑ Tăng cầu</td></tr>
<tr><td>Ngân hàng trung ương nâng lãi suất chống lạm phát</td><td>↓↓ Giảm mạnh sức vay, giảm cầu</td></tr>
<tr><td>Thu nhập thực giảm, người dân thắt chặt</td><td>↓ Giảm cầu ở thực</td></tr>
</table>
<p>Trong thực tế, <strong>kênh lãi suất thường mạnh nhất</strong>. Đó là lý do nhiều giai đoạn lạm phát cao đi kèm với giá nhà thực <em>giảm</em>, chứ không tăng: phản ứng chính sách tiền tệ áp đảo hiệu ứng tài sản thực.</p>
<div class="tip-box"><strong>Kết luận cân bằng:</strong> Bất động sản là hàng rào lạm phát <em>tốt trong dài hạn</em> (10 năm trở lên) và <em>không đáng tin trong ngắn hạn</em>. Nếu bạn mua nhà để ở và giữ 15–20 năm với khoản vay hợp lý, lạm phát nhiều khả năng đứng về phía bạn. Nếu bạn mua để lướt trong giai đoạn lạm phát tăng tốc, bạn đang đối đầu trực tiếp với ngân hàng trung ương.</div>`,
        diagram: null
    },

    'do-thi-hoa': {
        icon: '🏙️', title: 'Đô Thị Hóa & Nhân Khẩu Học', category: 'principles',
        connections: ['dat-khan-hiem', 'vi-tri', 'jp-akiya', 'vn-tong-quan'],
        simple: `<h3>🏙️ Đô Thị Hóa & Nhân Khẩu Học</h3>
<p>Đây là lực đẩy chậm nhất nhưng mạnh nhất trong bất động sản. Nó không tạo ra biến động trong một năm, nhưng quyết định hướng đi của cả một thế hệ.</p>
<p>Cầu nhà ở dài hạn phụ thuộc vào hai câu hỏi rất đơn giản:</p>
<ul>
<li><strong>Có bao nhiêu hộ gia đình mới được hình thành mỗi năm?</strong> (không phải bao nhiêu người — một gia đình 4 người chỉ cần một căn nhà)</li>
<li><strong>Họ muốn ở đâu?</strong></li>
</ul>
<div class="example-box"><strong>Chú ý vào số hộ, không phải số dân.</strong> Dân số có thể đứng yên nhưng số hộ vẫn tăng, nếu người trẻ ra ở riêng sớm hơn, tỷ lệ ly hôn tăng, hoặc người già sống một mình nhiều hơn. Xu hướng "hộ nhỏ đi" đã tạo ra cầu nhà ở đáng kể ở nhiều nước, kể cả khi dân số giảm.</div>`,
        detail: `<h3>Các lực nhân khẩu học chính</h3>
<ul>
<li><strong>Đô thị hóa</strong> — dòng người từ nông thôn ra thành phố. Đây là động lực lớn nhất của thị trường nhà ở Việt Nam vài thập kỷ qua. Tỷ lệ đô thị hóa Việt Nam vẫn thấp hơn nhiều so với các nước phát triển, nên dư địa còn.</li>
<li><strong>Cơ cấu tuổi</strong> — nhóm 25–40 tuổi là nhóm mua nhà lần đầu. Một quốc gia có nhiều người ở độ tuổi này sẽ có cầu nhà ở mạnh.</li>
<li><strong>Quy mô hộ gia đình</strong> — số người trung bình mỗi hộ đang giảm ở hầu hết các nước, làm số hộ tăng nhanh hơn dân số.</li>
<li><strong>Di cư nội địa</strong> — không chỉ nông thôn ra thành thị, mà còn giữa các thành phố. Nơi có việc làm tốt hút người, nơi mất việc làm mất người.</li>
</ul>
<div class="tip-box"><strong>Nguyên tắc bền vững nhất trong bất động sản:</strong> mua ở nơi người ta đang <em>đến</em>, không phải nơi người ta đang <em>rời đi</em>. Mọi phân tích kỹ thuật khác đều thứ yếu so với dòng người. Một khu vực mất dân không có mức giá nào là "rẻ" cả.</div>`,
        advanced: `<h3>Khi nhân khẩu học quay đầu</h3>
<p>Đây là rủi ro dài hạn ít được nói tới ở Việt Nam, và đáng để suy nghĩ nghiêm túc.</p>
<p>Nhật Bản cho thấy chuyện gì xảy ra khi dân số đạt đỉnh rồi giảm: hàng triệu căn nhà bỏ hoang (akiya) ở nông thôn và các thành phố nhỏ, gần như không bán được ở bất kỳ giá nào. Cùng lúc đó, giá nhà ở trung tâm Tokyo vẫn tăng, vì dòng người dồn về đô thị lớn.</p>
<div class="warning-box"><strong>Bài học: dân số giảm không làm mọi bất động sản mất giá đều nhau — nó làm <em>phân hóa</em> cực đoan hơn.</strong> Đô thị lớn có việc làm vẫn hút người và giữ giá. Vùng ven và tỉnh lẻ mất dân sẽ mất giá trị vĩnh viễn. Trong một nước dân số giảm, "vị trí" trở nên quan trọng hơn bao giờ hết.</div>
<h3>Áp dụng cho Việt Nam</h3>
<ul>
<li>Tổng tỷ suất sinh của Việt Nam đã xuống dưới mức thay thế (khoảng 2,1 con/phụ nữ) và tiếp tục giảm, đặc biệt ở các đô thị lớn.</li>
<li>Việt Nam đang trong giai đoạn "cơ cấu dân số vàng" — nhóm trong độ tuổi lao động chiếm tỷ trọng cao — nhưng giai đoạn này có thời hạn.</li>
<li>Quá trình già hóa dân số ở Việt Nam được đánh giá là diễn ra nhanh so với nhiều nước có cùng mức thu nhập.</li>
</ul>
<p>Hệ quả thực tế cho một quyết định mua nhà 20–30 năm: <strong>lực đô thị hóa còn đủ mạnh để hỗ trợ nhà ở tại các đô thị lớn trong trung hạn, nhưng cược dài hạn vào đất ở vùng ven hoặc tỉnh không có động lực kinh tế riêng là cược vào một xu hướng đang yếu dần.</strong> Đây không phải dự báo sụp đổ — đó là lý do để ưu tiên vị trí có nhu cầu ở thực bền vững hơn là kỳ vọng "sóng hạ tầng".</p>`,
        diagram: null
    },

    'ha-tang-quy-hoach': {
        icon: '🛣️', title: 'Hạ Tầng & Quy Hoạch Tạo Giá Trị', category: 'principles',
        connections: ['vi-tri', 'quy-hoach-thu-hoi', 'vn-sot-dat'],
        simple: `<h3>🛣️ Hạ Tầng & Quy Hoạch Tạo Giá Trị</h3>
<p>Một mảnh đất tự nó không sinh ra giá trị. Giá trị đến từ những gì <em>xung quanh</em> nó: đường sá, trường học, bệnh viện, việc làm, người khác sống gần đó.</p>
<p>Khi nhà nước xây một tuyến metro hay một cây cầu, giá đất quanh đó tăng — dù chủ đất không làm gì cả. Đây là cơ chế tạo ra phần lớn những khoản lãi lớn trong bất động sản.</p>
<div class="example-box"><strong>Hai loại thay đổi quy hoạch làm tăng giá đất:</strong><br>
1. <strong>Hạ tầng kết nối</strong> — đường, cầu, metro làm nơi đó gần các khu việc làm hơn.<br>
2. <strong>Chuyển đổi mục đích sử dụng</strong> — đất nông nghiệp lên đất ở. Đây thường là cú nhảy giá lớn nhất, đôi khi gấp nhiều lần.</div>`,
        detail: `<h3>Thông tin quy hoạch được phản ánh vào giá theo từng giai đoạn</h3>
<table>
<tr><th>Giai đoạn</th><th>Mức độ chắc chắn</th><th>Phần tăng giá còn lại</th></tr>
<tr><td>Tin đồn, ý tưởng ban đầu</td><td>Rất thấp</td><td>Lớn nhất — nhưng rủi ro cũng lớn nhất</td></tr>
<tr><td>Có trong quy hoạch tổng thể</td><td>Trung bình</td><td>Còn đáng kể</td></tr>
<tr><td>Được phê duyệt, bố trí vốn</td><td>Khá cao</td><td>Đã phản ánh phần lớn</td></tr>
<tr><td>Khởi công</td><td>Cao</td><td>Còn ít</td></tr>
<tr><td>Đi vào vận hành</td><td>Chắc chắn</td><td>Gần như đã hết</td></tr>
</table>
<div class="warning-box"><strong>Đây là nơi phần lớn nhà đầu tư nghiệp dư mất tiền.</strong> Họ mua ở giai đoạn "tin đồn" với niềm tin của giai đoạn "chắc chắn". Rất nhiều dự án hạ tầng bị chậm 5–10 năm, đổi hướng tuyến, hoặc dừng hẳn. Trong lúc chờ, tiền của bạn bị chôn trong một tài sản không thanh khoản và không sinh dòng tiền.</div>
<h3>Cách kiểm tra thông tin quy hoạch</h3>
<ul>
<li>Xem quy hoạch được công bố công khai tại cơ quan quản lý cấp huyện/quận, hoặc trên cổng thông tin quy hoạch của địa phương.</li>
<li>Yêu cầu <strong>văn bản</strong>, không chấp nhận lời kể của môi giới hay ảnh chụp bản đồ không nguồn.</li>
<li>Kiểm tra thửa đất cụ thể — quy hoạch áp dụng theo từng thửa, không phải theo cả khu.</li>
<li>Phân biệt rõ: quy hoạch <em>sử dụng đất</em>, quy hoạch <em>xây dựng</em>, và <em>kế hoạch sử dụng đất hàng năm</em> — ba thứ khác nhau và có hiệu lực khác nhau.</li>
</ul>`,
        advanced: `<h3>Mặt trái: quy hoạch cũng hủy hoại giá trị</h3>
<p>Cùng một cơ chế chạy theo chiều ngược lại. Đất của bạn có thể mất giá trị nghiêm trọng vì:</p>
<ul>
<li><strong>Dính quy hoạch</strong> — nằm trong ranh giới dự án đường, công viên, công trình công cộng. Đất "dính quy hoạch treo" gần như không giao dịch được, không xây được, nhưng cũng chưa được đền bù.</li>
<li><strong>Bị hạ chỉ tiêu xây dựng</strong> — giảm mật độ, giảm tầng cao cho phép.</li>
<li><strong>Hạ tầng bất lợi mọc lên gần đó</strong> — bãi rác, nhà máy xử lý, đường vành đai gây tiếng ồn.</li>
<li><strong>Hạ tầng hứa hẹn không bao giờ được xây</strong> — khu đô thị bán theo viễn cảnh có trường, có bệnh viện, có metro; nhiều năm sau vẫn chỉ có nhà.</li>
</ul>
<div class="tip-box"><strong>Kiểm tra quy hoạch là bước bắt buộc, không phải tùy chọn.</strong> Đây là loại rủi ro không thể phát hiện bằng cách đi xem nhà. Một căn nhà đẹp, giấy tờ đầy đủ, giá hợp lý vẫn có thể nằm trong ranh quy hoạch mà bạn chỉ biết sau khi đã trả tiền. Xem chi tiết ở chủ điểm "Quy hoạch, thu hồi, đền bù" và checklist thẩm định pháp lý.</div>
<h3>Ai hưởng phần giá trị tăng thêm</h3>
<p>Khi nhà nước bỏ tiền thuế xây hạ tầng và giá đất tư nhân quanh đó tăng vọt, phần giá trị tăng thêm đó thuộc về ai là một câu hỏi chính sách thực sự. Các cơ chế "thu hồi giá trị tăng thêm" (land value capture) được dùng ở nhiều nơi:</p>
<ul>
<li><strong>Thuế tài sản hàng năm</strong> — giá đất tăng thì thuế tăng, ngân sách tự động thu lại một phần.</li>
<li><strong>Phí đóng góp hạ tầng</strong> đối với chủ đầu tư được hưởng lợi.</li>
<li><strong>Mô hình đường sắt + bất động sản</strong> — đơn vị làm hạ tầng đồng thời được quyền phát triển đất quanh nhà ga, dùng lợi nhuận đó bù chi phí xây tuyến. Hong Kong và Nhật Bản vận hành mô hình này ở quy mô lớn.</li>
</ul>`,
        diagram: null
    },

    'chi-phi-so-huu': {
        icon: '🧾', title: 'Tổng Chi Phí Sở Hữu', category: 'principles',
        connections: ['chi-phi-an', 'thue-vs-mua', 'roi-cho-thue'],
        simple: `<h3>🧾 Tổng Chi Phí Sở Hữu</h3>
<p>Giá mua chỉ là khởi đầu. Sở hữu một căn nhà là một chuỗi chi phí kéo dài suốt thời gian bạn giữ nó — và phần lớn người mua lần đầu đánh giá thấp con số này.</p>
<div class="example-box"><strong>Cách nghĩ đúng:</strong> Đừng hỏi "tôi có đủ tiền mua căn nhà này không?". Hãy hỏi <strong>"tôi có nuôi nổi căn nhà này trong 20 năm không?"</strong>. Hai câu hỏi cho ra hai câu trả lời rất khác nhau.</div>`,
        detail: `<h3>Các nhóm chi phí</h3>
<table>
<tr><th>Nhóm</th><th>Gồm những gì</th><th>Thời điểm</th></tr>
<tr><td><strong>Chi phí mua</strong></td><td>Thuế thu nhập cá nhân từ chuyển nhượng, lệ phí trước bạ, phí công chứng, phí thẩm định, phí môi giới</td><td>Một lần, khi giao dịch</td></tr>
<tr><td><strong>Chi phí tài chính</strong></td><td>Lãi vay — thường là khoản lớn nhất trong toàn bộ vòng đời sở hữu</td><td>Hàng tháng, nhiều năm</td></tr>
<tr><td><strong>Chi phí vận hành</strong></td><td>Phí quản lý chung cư, phí gửi xe, điện nước, internet, bảo hiểm</td><td>Hàng tháng</td></tr>
<tr><td><strong>Bảo trì & sửa chữa</strong></td><td>Sơn, chống thấm, thay thiết bị, sửa lớn định kỳ</td><td>Rải rác, tăng theo tuổi nhà</td></tr>
<tr><td><strong>Chi phí bán</strong></td><td>Thuế, phí, môi giới khi bán ra</td><td>Một lần, khi thoát</td></tr>
<tr><td><strong>Chi phí cơ hội</strong></td><td>Vốn tự có của bạn đáng lẽ sinh lời ở nơi khác</td><td>Liên tục, vô hình</td></tr>
</table>
<div class="warning-box"><strong>Chi phí bị bỏ quên nhiều nhất là bảo trì.</strong> Một quy tắc ước lượng phổ biến là dự trù khoảng 1%–1,5% giá trị công trình mỗi năm cho bảo trì dài hạn. Con số này không đều — có năm không tốn gì, rồi một năm phải chống thấm và thay toàn bộ thiết bị. Nếu không dự trù, khoản chi đó sẽ đến vào đúng lúc bạn không sẵn sàng.</div>`,
        advanced: `<h3>Chi phí cơ hội — khoản vô hình nhưng lớn nhất</h3>
<p>Nếu bạn bỏ 2 tỷ vốn tự có vào một căn nhà, 2 tỷ đó không còn sinh lời ở nơi khác. Với lãi suất tiết kiệm 6%/năm, chi phí cơ hội là 120 triệu/năm — nhiều hơn hầu hết các khoản chi phí hữu hình cộng lại.</p>
<p>Điều này <em>không</em> nghĩa là mua nhà là sai. Nó nghĩa là khi so sánh thuê và mua, bạn phải tính cả khoản này, nếu không phép so sánh sẽ nghiêng lệch. Máy tính "Thuê vs Mua" ở tab Công cụ đã tính sẵn phần này.</p>
<h3>Khung tính chi phí ròng hàng năm</h3>
<div class="formula-box">Chi phí sở hữu ròng/năm =<br>Lãi vay + Phí vận hành + Bảo trì + Chi phí cơ hội của vốn<br>− Mức tăng giá tài sản (nếu có)</div>
<p>Cách đọc công thức này: bạn không "mất" toàn bộ tiền trả góp. Phần trả gốc là chuyển tiền từ túi này sang túi khác (từ tiền mặt sang tài sản). Chỉ có <strong>lãi vay</strong> mới là tiền thực sự ra khỏi túi. Đây là lỗi so sánh phổ biến nhất khi người ta cân nhắc thuê hay mua: so tiền thuê với <em>toàn bộ</em> khoản trả góp, thay vì với phần lãi cộng chi phí sở hữu.</p>
<div class="tip-box"><strong>Ứng dụng ngay:</strong> Trước khi ký hợp đồng, hãy lập một bảng đơn giản gồm 12 dòng cho 12 tháng đầu, liệt kê mọi khoản phải chi. Nếu tổng vượt quá 40% thu nhập ròng của gia đình, hãy cân nhắc lại quy mô căn nhà hoặc mức vay — chứ đừng hy vọng thu nhập sẽ tăng kịp.</div>`,
        diagram: null
    }
};
