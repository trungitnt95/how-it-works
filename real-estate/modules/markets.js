// Bất Động Sản - Hồ sơ thị trường theo quốc gia
const reMarketsData = {
    'vn-tong-quan': {
        icon: '🇻🇳', title: 'Việt Nam — Tổng Quan Thị Trường', category: 'markets',
        connections: ['do-thi-hoa', 'price-to-income', 'vn-phan-khuc', 'so-huu-vs-su-dung'],
        simple: `<h3>🇻🇳 Việt Nam — Tổng Quan Thị Trường</h3>
<p>Thị trường bất động sản Việt Nam có một tổ hợp đặc điểm khá riêng, và hiểu chúng giải thích được phần lớn những gì bạn quan sát thấy hàng ngày.</p>
<ul>
<li><strong>Đô thị hóa còn dư địa</strong> — tỷ lệ dân đô thị của Việt Nam vẫn thấp hơn nhiều nước trong khu vực, tạo dòng người liên tục vào các thành phố lớn.</li>
<li><strong>Văn hóa coi trọng sở hữu nhà đất</strong> — nhà đất vừa là chỗ ở, vừa là kênh tích lũy của cải chính của phần lớn hộ gia đình.</li>
<li><strong>Chưa có thuế tài sản hàng năm đáng kể</strong> — giữ bất động sản gần như không tốn chi phí.</li>
<li><strong>Kênh đầu tư thay thế hạn chế</strong> — thị trường chứng khoán và trái phiếu chưa đủ sâu và tin cậy với nhiều người, nên tiền dồn vào nhà đất.</li>
<li><strong>Tỷ suất cho thuê thấp so với lãi suất</strong> — dấu hiệu thị trường định giá theo kỳ vọng tăng giá hơn là dòng tiền.</li>
</ul>
<div class="example-box"><strong>Bốn đặc điểm đầu cộng lại tạo ra một lực đẩy rất mạnh và bền cho giá nhà đất.</strong> Đặc điểm cuối cho biết cái giá phải trả: thị trường phụ thuộc vào dòng tiền mới liên tục đi vào, nên nó nhạy cảm bất thường với tín dụng và tâm lý.</div>`,
        detail: `<h3>Cấu trúc thị trường</h3>
<table>
<tr><th>Đặc điểm</th><th>Biểu hiện</th></tr>
<tr><td><strong>Tập trung vào hai cực</strong></td><td>Hà Nội và TP.HCM chiếm phần lớn giá trị giao dịch; các đô thị loại 2 đang tăng vai trò nhưng còn cách biệt</td></tr>
<tr><td><strong>Tỷ trọng nhà tự xây cao</strong></td><td>Khác với nhiều nước phát triển, phần lớn nhà ở đô thị Việt Nam là nhà phố do người dân tự xây, không phải sản phẩm của chủ đầu tư</td></tr>
<tr><td><strong>Thiếu nhà vừa túi tiền</strong></td><td>Nguồn cung mới nghiêng mạnh về phân khúc trung–cao cấp vì biên lợi nhuận tốt hơn trên cùng quỹ đất</td></tr>
<tr><td><strong>Dữ liệu kém minh bạch</strong></td><td>Không có hệ thống công bố giá giao dịch thực; giá ghi hợp đồng thường thấp hơn giá thật</td></tr>
<tr><td><strong>Vai trò lớn của tín dụng ngân hàng</strong></td><td>Cả chủ đầu tư lẫn người mua đều phụ thuộc nặng vào vốn ngân hàng, làm thị trường rất nhạy với chính sách tiền tệ</td></tr>
</table>
<div class="warning-box"><strong>Hệ quả của việc thiếu dữ liệu minh bạch:</strong> mọi người — kể cả người chuyên nghiệp — đều định giá dựa trên thông tin không đầy đủ. Điều này làm khoảng dao động giá rộng hơn, làm tin đồn có sức nặng hơn, và làm các cơn sốt cục bộ dễ hình thành hơn so với thị trường có dữ liệu công khai.</div>`,
        advanced: `<h3>Vì sao giá nhà cao so với thu nhập</h3>
<p>Tỷ lệ giá nhà trên thu nhập ở các đô thị lớn Việt Nam thuộc nhóm cao khi so sánh quốc tế. Các nguyên nhân cộng hưởng:</p>
<ol>
<li><strong>Cung bị hạn chế bởi thủ tục.</strong> Thời gian hoàn tất pháp lý một dự án thường dài hơn thời gian thi công, làm nguồn cung mới nhỏ giọt và đắt.</li>
<li><strong>Chi phí đất chiếm tỷ trọng lớn</strong> trong giá thành sản phẩm.</li>
<li><strong>Nhu cầu đầu tư lấn át nhu cầu ở thực</strong> ở nhiều phân khúc, đẩy giá lên trên mức mà thu nhập lao động chi trả được.</li>
<li><strong>Chi phí nắm giữ gần bằng không</strong>, làm việc mua để đó chờ tăng giá trở nên hợp lý về mặt kinh tế cá nhân.</li>
<li><strong>Thu nhập thực cao hơn thu nhập thống kê</strong> ở một bộ phận dân cư, khiến chỉ số giá/thu nhập chính thức phóng đại mức độ căng thẳng — nhưng không giải thích được hết khoảng cách.</li>
</ol>
<h3>Ba rủi ro cấu trúc đáng theo dõi</h3>
<div class="warning-box">
<p><strong>1. Phụ thuộc tín dụng.</strong> Khi tín dụng bị siết — vì lạm phát, vì kiểm soát rủi ro, hay vì sự kiện trên thị trường vốn — thanh khoản bất động sản có thể co lại rất nhanh. Giai đoạn 2022–2023 là ví dụ gần nhất.</p>
<p><strong>2. Nhân khẩu học đang chuyển.</strong> Tổng tỷ suất sinh đã xuống dưới mức thay thế và quá trình già hóa được đánh giá là diễn ra nhanh. Lực đô thị hóa còn, nhưng không vô hạn — và nó sẽ ngày càng phân hóa giữa các đô thị lớn có việc làm và những nơi mất dân.</p>
<p><strong>3. Rủi ro chính sách thuế.</strong> Luật thuế bất động sản đã được thảo luận nhiều lần. Nếu ban hành, chi phí nắm giữ tài sản không khai thác sẽ tăng, thay đổi phép tính của chiến lược "mua để đó chờ tăng giá".</p>
</div>
<div class="tip-box"><strong>Cách đọc các rủi ro này cho quyết định cá nhân:</strong> chúng không phải dự báo sụp đổ, và cũng không có mốc thời gian. Chúng là lý do để ưu tiên <em>tài sản có nhu cầu ở thực bền vững</em> — vị trí gần việc làm, pháp lý sạch, cho thuê được — thay vì tài sản chỉ có giá trị khi tìm được người mua sau trả cao hơn. Loại thứ nhất chịu được cả ba rủi ro trên; loại thứ hai thì không.</div>
<p><em>Các nhận định trong mục này mang tính khái quát về cơ chế thị trường tại thời điểm viết, không phải khuyến nghị đầu tư.</em></p>`,
        diagram: null
    },

    'vn-phan-khuc': {
        icon: '🏢', title: 'Việt Nam — Các Phân Khúc', category: 'markets',
        connections: ['vn-tong-quan', 'phan-khuc-dau-tu', 'thoi-han-su-dung', 'vn-hn-hcm'],
        simple: `<h3>🏢 Việt Nam — Các Phân Khúc</h3>
<p>Nói "thị trường bất động sản Việt Nam tăng" hay "giảm" là quá thô. Các phân khúc vận hành theo những quy luật khác nhau và thường đi lệch pha nhau.</p>
<table>
<tr><th>Phân khúc</th><th>Người mua chính</th><th>Đặc điểm</th></tr>
<tr><td><strong>Nhà phố trong đô thị</strong></td><td>Ở thực, tích lũy tài sản</td><td>Giá cao, thanh khoản trung bình, giữ giá tốt nhất dài hạn</td></tr>
<tr><td><strong>Căn hộ phổ thông</strong></td><td>Ở thực, cho thuê</td><td>Thanh khoản tốt nhất, dễ tiếp cận nhất</td></tr>
<tr><td><strong>Căn hộ cao cấp</strong></td><td>Đầu tư, người thu nhập cao</td><td>Nguồn cung nhiều, tỷ suất cho thuê thấp, cạnh tranh gay gắt</td></tr>
<tr><td><strong>Đất nền vùng ven</strong></td><td>Đầu tư, đầu cơ</td><td>Biến động mạnh nhất theo chu kỳ</td></tr>
<tr><td><strong>Bất động sản nghỉ dưỡng</strong></td><td>Đầu tư</td><td>Rủi ro cao, pháp lý phức tạp, thanh khoản kém</td></tr>
<tr><td><strong>Bất động sản công nghiệp</strong></td><td>Doanh nghiệp, quỹ</td><td>Gắn với dòng vốn FDI và chuỗi cung ứng</td></tr>
</table>`,
        detail: `<h3>Lệch pha giữa các phân khúc</h3>
<p>Đây là điều quan trọng cần hiểu: các phân khúc không cùng lên xuống. Điển hình trong một chu kỳ:</p>
<ul>
<li><strong>Pha tăng trưởng sớm:</strong> căn hộ phổ thông và nhà phố hồi phục trước, vì nhu cầu ở thực quay lại.</li>
<li><strong>Pha bùng nổ:</strong> đất nền vùng ven và nghỉ dưỡng tăng mạnh nhất, vì đây là nơi dòng tiền đầu cơ đổ vào.</li>
<li><strong>Pha suy thoái:</strong> đất nền và nghỉ dưỡng đóng băng trước và sâu nhất; căn hộ phổ thông và nhà phố ở khu đông dân giữ giá tốt hơn nhiều.</li>
</ul>
<div class="tip-box"><strong>Quy luật đơn giản:</strong> phân khúc nào có tỷ trọng người mua ở thực cao thì ổn định hơn; phân khúc nào phụ thuộc hoàn toàn vào người mua đầu tư thì biến động cực đoan hơn. Khi bạn cân nhắc một tài sản, hãy hỏi: <em>"nếu không ai muốn đầu tư nữa, có ai muốn ở đây không?"</em>. Nếu câu trả lời là không, bạn đang ở phân khúc rủi ro nhất.</div>
<h3>Vấn đề thiếu nhà vừa túi tiền</h3>
<p>Đây là mất cân đối cấu trúc rõ nhất của thị trường Việt Nam: nhu cầu tập trung ở phân khúc giá thấp, nhưng nguồn cung mới lại tập trung ở phân khúc giá cao.</p>
<p>Nguyên nhân kinh tế đơn giản: trên cùng một lô đất với chi phí pháp lý và tiền sử dụng đất như nhau, xây sản phẩm cao cấp cho biên lợi nhuận tốt hơn nhiều. Với chủ đầu tư, đó là quyết định hợp lý. Kết quả tổng hợp lại là thị trường lệch.</p>
<div class="warning-box"><strong>Các chương trình nhà ở xã hội</strong> được thiết kế để bù đắp khoảng trống này, nhưng triển khai thực tế gặp nhiều vướng mắc: quỹ đất, thủ tục, cơ chế lợi nhuận định mức cho chủ đầu tư, và điều kiện xét duyệt người mua. Kết quả là nguồn cung thực tế thường thấp hơn nhiều so với mục tiêu đặt ra.</div>`,
        advanced: `<h3>Bất động sản công nghiệp — phân khúc có logic riêng</h3>
<p>Đây là phân khúc ít được người mua cá nhân chú ý nhưng có động lực rất khác và đáng hiểu:</p>
<ul>
<li><strong>Cầu đến từ dòng vốn FDI</strong> và xu hướng dịch chuyển chuỗi cung ứng, không từ nhu cầu ở của người dân.</li>
<li><strong>Ít nhạy với lãi suất trong nước</strong> hơn, nhạy với thương mại quốc tế và chính sách thu hút đầu tư.</li>
<li><strong>Dòng tiền ổn định hơn</strong> — hợp đồng thuê dài hạn với doanh nghiệp.</li>
<li><strong>Rào cản vốn cao</strong> — chủ yếu là sân chơi của quỹ và doanh nghiệp lớn; cá nhân tiếp cận qua cổ phiếu hoặc quỹ.</li>
</ul>
<h3>Chọn phân khúc theo hoàn cảnh của bạn</h3>
<table>
<tr><th>Bạn là ai</th><th>Nên tập trung</th><th>Nên tránh</th></tr>
<tr><td>Mua nhà lần đầu, vốn hạn chế</td><td>Căn hộ phổ thông gần nơi làm việc, hoặc nhà phố nhỏ trong khu dân cư ổn định</td><td>Đất nền xa trung tâm mua bằng đòn bẩy cao</td></tr>
<tr><td>Đầu tư nhỏ, cần dòng tiền</td><td>Căn hộ cho thuê ở khu đông dân, gần trường đại học hoặc khu công nghiệp</td><td>Nghỉ dưỡng có cam kết lợi nhuận</td></tr>
<tr><td>Vốn lớn, dài hạn</td><td>Nhà phố hoặc đất ở có sổ tại khu vực có động lực kinh tế thật</td><td>Tập trung toàn bộ vào một loại hình</td></tr>
<tr><td>Muốn tiếp xúc thị trường nhưng cần thanh khoản</td><td>Kênh gián tiếp: quỹ, cổ phiếu doanh nghiệp có tài sản cho thuê</td><td>Trái phiếu doanh nghiệp bất động sản không có bảo đảm rõ ràng</td></tr>
</table>
<div class="tip-box"><strong>Nguyên tắc cuối cùng:</strong> phân khúc phù hợp không phải phân khúc tăng giá nhanh nhất trong quá khứ, mà là phân khúc bạn có thể <strong>giữ được qua một chu kỳ suy thoái</strong> mà không bị buộc phải bán. Khả năng giữ, chứ không phải khả năng chọn, mới là yếu tố quyết định kết quả dài hạn.</div>`,
        diagram: null
    },

    'vn-sot-dat': {
        icon: '🔥', title: 'Việt Nam — Các Cơn Sốt Đất', category: 'markets',
        connections: ['chu-ky-bds', 'su-dung-vs-dau-co', 'ha-tang-quy-hoach', 'vn-2021-2023'],
        simple: `<h3>🔥 Việt Nam — Các Cơn Sốt Đất</h3>
<p>Sốt đất là hiện tượng lặp đi lặp lại ở Việt Nam với một kịch bản gần như giống hệt nhau mỗi lần. Nhận ra kịch bản đó là cách tự bảo vệ tốt nhất.</p>
<div class="example-box"><strong>Công thức chung của mọi cơn sốt đất:</strong><br>
Một <strong>thông tin</strong> (quy hoạch, hạ tầng, đơn vị hành chính mới) → <strong>môi giới khuếch đại</strong> và tổ chức đưa người đến xem → <strong>giao dịch mồi</strong> tạo cảm giác khan hiếm → <strong>truyền thông xã hội</strong> lan tin → <strong>người dân địa phương và nhà đầu tư nhỏ lẻ</strong> đổ vào → giá tăng gấp nhiều lần trong vài tháng → <strong>dòng người mới cạn</strong> → thanh khoản biến mất → giá quay về, người vào sau ôm hàng.</div>`,
        detail: `<h3>Các đợt sốt tiêu biểu</h3>
<table>
<tr><th>Giai đoạn</th><th>Chất xúc tác</th><th>Kết cục</th></tr>
<tr><td><strong>2007–2008</strong></td><td>Tăng trưởng tín dụng mạnh, dòng vốn vào sau khi Việt Nam gia nhập WTO, thị trường chứng khoán bùng nổ lan sang nhà đất</td><td>Chính sách thắt chặt tiền tệ chống lạm phát cùng khủng hoảng tài chính toàn cầu chấm dứt đợt tăng; thị trường trầm lắng kéo dài</td></tr>
<tr><td><strong>2010–2011</strong></td><td>Gói kích thích sau khủng hoảng, tín dụng nới trở lại</td><td>Lạm phát cao buộc thắt chặt; thị trường đóng băng, nợ xấu bất động sản trở thành vấn đề lớn của hệ thống ngân hàng</td></tr>
<tr><td><strong>2018</strong></td><td>Thông tin về đề xuất thành lập các đơn vị hành chính - kinh tế đặc biệt tại Vân Đồn, Bắc Vân Phong, Phú Quốc</td><td>Giá đất tăng vọt trong vài tháng; chính quyền địa phương phải tạm dừng giao dịch, chuyển mục đích; giá sau đó giảm mạnh</td></tr>
<tr><td><strong>2021–2022</strong></td><td>Lãi suất thấp thời kỳ dịch bệnh, tiền rẻ, thông tin quy hoạch hạ tầng lan rộng, hiện tượng sốt đất diễn ra trên diện rộng ở nhiều tỉnh</td><td>Siết tín dụng bất động sản và khủng hoảng thị trường trái phiếu doanh nghiệp cuối 2022 chấm dứt đợt tăng; thanh khoản đất nền đóng băng kéo dài</td></tr>
</table>
<div class="warning-box"><strong>Điểm chung của cả bốn đợt:</strong> chúng đều kết thúc khi <em>tín dụng bị siết</em>, không phải khi "giá đã quá cao". Giá có thể vô lý rất lâu chừng nào còn tiền mới chảy vào. Điều này có nghĩa: theo dõi chính sách tiền tệ hữu ích hơn nhiều so với việc phán đoán "giá đã đủ cao chưa".</div>`,
        advanced: `<h3>Vì sao sốt đất gây thiệt hại nặng hơn sốt chứng khoán</h3>
<table>
<tr><th>Yếu tố</th><th>Chứng khoán</th><th>Đất nền</th></tr>
<tr><td>Thoát ra khi giá giảm</td><td>Bán trong vài giây, có thể cắt lỗ</td><td>Không có người mua — bạn kẹt hoàn toàn</td></tr>
<tr><td>Đòn bẩy phổ biến</td><td>Có nhưng bị giới hạn</td><td>Vay ngân hàng 70%, vay nóng, vay người thân</td></tr>
<tr><td>Quy mô so với tài sản hộ gia đình</td><td>Thường là một phần</td><td>Thường là toàn bộ tài sản tích lũy</td></tr>
<tr><td>Sinh dòng tiền trong lúc chờ</td><td>Cổ tức</td><td>Không có gì</td></tr>
</table>
<p>Kết hợp bốn yếu tố này: người mua đất ở đỉnh sốt thường dùng đòn bẩy cao, đặt phần lớn tài sản vào, không thể thoát, và không có dòng tiền để chờ. Đây là lý do một đợt sốt đất có thể xóa sổ tài chính của một hộ gia đình theo cách mà một đợt giảm chứng khoán hiếm khi làm được.</p>
<h3>Dấu hiệu nhận biết một cơn sốt đang diễn ra</h3>
<div class="warning-box">
<ul>
<li>Giá tăng nhiều chục phần trăm trong vài tháng mà <strong>không có thay đổi thực tế nào</strong> tại chỗ đó — không có đường mới, không có nhà máy mới, không có thêm người đến ở.</li>
<li>Xuất hiện đông môi giới ở một địa phương vốn yên tĩnh; nhiều người mới chuyển sang làm môi giới.</li>
<li>Người mua chủ yếu đến từ nơi khác, mua mà không xem kỹ, không hỏi về pháp lý.</li>
<li>Câu chuyện xoay quanh <strong>thông tin sắp có</strong> chứ không phải hiện trạng: "sắp lên thành phố", "sắp có sân bay", "sắp có đường vành đai".</li>
<li>Lượng người hỏi mua rất đông nhưng số giao dịch hoàn tất công chứng thấp.</li>
<li>Chính quyền địa phương ra văn bản cảnh báo hoặc tạm dừng thủ tục — đây thường là dấu hiệu đợt sốt đã ở giai đoạn cuối.</li>
</ul>
</div>
<h3>Nếu bạn vẫn muốn tham gia</h3>
<div class="tip-box">
<ul>
<li><strong>Chỉ mua đất đã có sổ, đúng mục đích sử dụng đất ở</strong> — phần lớn thiệt hại nặng nhất rơi vào đất phân lô trái phép hoặc đất nông nghiệp hứa hẹn "sẽ lên thổ cư".</li>
<li><strong>Tự đi tra cứu quy hoạch</strong> tại cơ quan có thẩm quyền, không tin thông tin từ môi giới.</li>
<li><strong>Không dùng đòn bẩy.</strong> Đây là quy tắc quan trọng nhất — thanh khoản có thể biến mất trong nhiều năm và bạn phải sống sót qua giai đoạn đó.</li>
<li><strong>Chỉ dùng số tiền bạn không cần trong 5–10 năm tới.</strong></li>
<li><strong>Đặt câu hỏi cuối cùng:</strong> nếu không ai đến mua lại, mảnh đất này có công dụng gì? Nếu câu trả lời là "không có", bạn đang mua một tấm vé chứ không phải một tài sản.</li>
</ul>
</div>`,
        diagram: null
    },

    'vn-chinh-sach-tin-dung': {
        icon: '🎛️', title: 'Việt Nam — Chính Sách Tín Dụng & Trái Phiếu', category: 'markets',
        connections: ['tin-dung-gia-nha', 'vn-2021-2023', 'reit-gian-tiep', 'luat-dat-dai-2024'],
        simple: `<h3>🎛️ Việt Nam — Chính Sách Tín Dụng & Trái Phiếu</h3>
<p>Nếu bạn chỉ theo dõi một thứ để dự đoán hướng đi của thị trường bất động sản Việt Nam, hãy theo dõi <strong>chính sách tín dụng</strong>.</p>
<p>Lý do: cả hai phía của thị trường đều phụ thuộc nặng vào vốn vay.</p>
<ul>
<li><strong>Chủ đầu tư</strong> vay ngân hàng và huy động trái phiếu để triển khai dự án.</li>
<li><strong>Người mua</strong> vay ngân hàng để thanh toán.</li>
</ul>
<div class="example-box"><strong>Khi tín dụng bị siết, cả hai phía cùng tắc một lúc:</strong> chủ đầu tư không có tiền hoàn thiện dự án, người mua không vay được để mua. Đó là lý do thị trường Việt Nam có thể chuyển từ sôi động sang đóng băng chỉ trong vài quý.</div>`,
        detail: `<h3>Các công cụ chính sách chính</h3>
<table>
<tr><th>Công cụ</th><th>Cơ chế</th><th>Tác động</th></tr>
<tr><td><strong>Chỉ tiêu tăng trưởng tín dụng</strong></td><td>Ngân hàng Nhà nước giao hạn mức tăng trưởng tín dụng cho từng ngân hàng</td><td>Trực tiếp giới hạn lượng tiền mới có thể chảy vào nền kinh tế, gồm cả bất động sản</td></tr>
<tr><td><strong>Hệ số rủi ro cho vay bất động sản</strong></td><td>Khoản vay bất động sản bị áp hệ số rủi ro cao, buộc ngân hàng giữ nhiều vốn hơn</td><td>Làm cho vay bất động sản kém hấp dẫn hơn với ngân hàng</td></tr>
<tr><td><strong>Giới hạn dùng vốn ngắn hạn cho vay trung dài hạn</strong></td><td>Tỷ lệ tối đa được giảm dần qua các năm theo lộ trình</td><td>Hạn chế nguồn vốn dài hạn cho vay mua nhà</td></tr>
<tr><td><strong>Lãi suất điều hành</strong></td><td>Ảnh hưởng mặt bằng lãi suất huy động và cho vay</td><td>Tác động trực tiếp tới sức mua của người vay</td></tr>
<tr><td><strong>Quy định phát hành trái phiếu doanh nghiệp</strong></td><td>Điều kiện phát hành, đối tượng nhà đầu tư được mua</td><td>Ảnh hưởng tới kênh huy động vốn quan trọng của chủ đầu tư</td></tr>
</table>
<div class="warning-box"><strong>Điểm cần hiểu:</strong> các công cụ này thường được điều chỉnh theo hướng thắt chặt khi thị trường nóng và nới lỏng khi thị trường đóng băng. Nhưng vì độ trễ của bất động sản rất dài, chính sách hầu như luôn có tác động chậm và đôi khi khuếch đại chu kỳ thay vì làm phẳng nó.</div>`,
        advanced: `<h3>Bài học từ thị trường trái phiếu doanh nghiệp</h3>
<p>Giai đoạn 2019–2021, trái phiếu doanh nghiệp trở thành kênh huy động vốn lớn cho các doanh nghiệp bất động sản, một phần vì tín dụng ngân hàng cho lĩnh vực này bị kiểm soát chặt hơn. Nhiều đợt phát hành riêng lẻ được phân phối tới nhà đầu tư cá nhân.</p>
<p>Cuối năm 2022, thị trường này rơi vào khủng hoảng niềm tin: quy định phát hành được siết chặt, một số vụ việc lớn bị xử lý, nhà đầu tư đồng loạt yêu cầu mua lại trước hạn, và nhiều doanh nghiệp mất khả năng thanh toán đúng hạn.</p>
<div class="warning-box"><strong>Bài học cho nhà đầu tư cá nhân:</strong>
<ul>
<li><strong>Lãi suất cao là phần bù rủi ro, không phải quà tặng.</strong> Trái phiếu trả 12% khi ngân hàng trả 6% đang nói rằng rủi ro mất vốn là đáng kể.</li>
<li><strong>"Có tài sản bảo đảm" không đồng nghĩa với an toàn.</strong> Cần biết tài sản đó là gì, được định giá thế nào, ai giữ, và thứ tự ưu tiên thanh toán khi xử lý.</li>
<li><strong>Ngân hàng phân phối không có nghĩa ngân hàng bảo lãnh.</strong> Đây là điểm nhiều nhà đầu tư hiểu nhầm và là nguyên nhân của phần lớn thiệt hại.</li>
<li><strong>Nếu không hiểu được cấu trúc của một sản phẩm tài chính, đó là lý do đủ để không tham gia.</strong></li>
</ul>
</div>
<h3>Cách theo dõi để dự đoán hướng thị trường</h3>
<p>Bạn không cần là chuyên gia. Vài chỉ báo công khai đã cho tín hiệu khá tốt:</p>
<ul>
<li><strong>Tăng trưởng tín dụng toàn hệ thống</strong> so với cùng kỳ — công bố định kỳ.</li>
<li><strong>Lãi suất huy động 12 tháng</strong> của các ngân hàng lớn — đây là nền của lãi suất cho vay mua nhà.</li>
<li><strong>Lãi suất cho vay mua nhà sau ưu đãi</strong> đang áp dụng thực tế — hỏi trực tiếp ngân hàng.</li>
<li><strong>Số lượng dự án được cấp phép mới</strong> tại địa phương bạn quan tâm.</li>
<li><strong>Số giao dịch thành công</strong> (thanh khoản) — quan trọng hơn giá, vì nó đảo chiều trước.</li>
</ul>
<div class="tip-box"><strong>Nguyên tắc thực dụng:</strong> khi tín dụng đang được nới và lãi suất giảm, thị trường có gió thuận — nhưng đó cũng là lúc giá đã bắt đầu tăng. Khi tín dụng bị siết và lãi suất tăng, thị trường có gió ngược — nhưng đó là lúc người có tiền mặt và kiên nhẫn tìm được cơ hội tốt nhất. Chu kỳ tưởng thưởng người làm ngược với đám đông, và trừng phạt người dùng đòn bẩy tối đa ở đúng đỉnh.</div>`,
        diagram: 're-credit'
    },

    'vn-hn-hcm': {
        icon: '🌆', title: 'Việt Nam — Hà Nội và TP.HCM', category: 'markets',
        connections: ['vn-phan-khuc', 'vi-tri', 'do-thi-hoa', 'vn-tong-quan'],
        simple: `<h3>🌆 Việt Nam — Hà Nội và TP.HCM</h3>
<p>Hai thị trường lớn nhất Việt Nam có tính cách khác nhau rõ rệt, phản ánh khác biệt về lịch sử, cấu trúc kinh tế và địa lý.</p>
<table>
<tr><th></th><th>Hà Nội</th><th>TP.HCM</th></tr>
<tr><td><strong>Tính cách thị trường</strong></td><td>Thiên về tích lũy, giữ tài sản lâu dài</td><td>Thiên về giao dịch, thanh khoản cao hơn</td></tr>
<tr><td><strong>Ưa chuộng</strong></td><td>Nhà đất, nhà trong ngõ; tâm lý coi trọng đất nền rõ nét</td><td>Căn hộ được chấp nhận rộng rãi hơn</td></tr>
<tr><td><strong>Hướng mở rộng</strong></td><td>Chủ yếu về phía Tây và Đông (qua sông Hồng)</td><td>Chủ yếu về phía Đông và Nam</td></tr>
<tr><td><strong>Ràng buộc địa lý</strong></td><td>Sông Hồng chia cắt; quỹ đất nội đô rất hạn chế</td><td>Nền đất yếu ở phía Nam; vấn đề ngập và triều cường</td></tr>
</table>
<div class="warning-box"><strong>Đây là những khái quát về xu hướng chung, không phải quy luật tuyệt đối.</strong> Cả hai thành phố đều đa dạng, và khác biệt giữa các khu vực trong cùng một thành phố thường lớn hơn khác biệt giữa hai thành phố.</div>`,
        detail: `<h3>Yếu tố định hình mỗi thị trường</h3>
<h4>Hà Nội</h4>
<ul>
<li><strong>Quỹ đất nội đô cực kỳ hạn chế</strong>, khu phố cổ và khu trung tâm có ràng buộc bảo tồn và giới hạn chiều cao nghiêm ngặt.</li>
<li><strong>Sông Hồng</strong> vừa là ranh giới vừa là cơ hội — các cầu mới thay đổi đáng kể khả năng tiếp cận của khu vực phía Đông.</li>
<li><strong>Tâm lý ưa nhà đất</strong> mạnh, nhà trong ngõ nhỏ vẫn giữ giá cao do gắn với vị trí trung tâm.</li>
<li><strong>Vai trò của khu vực nhà nước</strong> trong cơ cấu việc làm lớn hơn, tạo nhu cầu ổn định quanh các khu hành chính.</li>
</ul>
<h4>TP.HCM</h4>
<ul>
<li><strong>Kinh tế tư nhân và dịch vụ chiếm tỷ trọng lớn hơn</strong>, thu hút dòng người nhập cư lao động mạnh và liên tục.</li>
<li><strong>Thị trường căn hộ phát triển sớm hơn và sâu hơn</strong>, người dân chấp nhận ở chung cư rộng rãi hơn.</li>
<li><strong>Ràng buộc địa chất</strong> — nền đất yếu ở phía Nam làm chi phí xây dựng cao hơn; vấn đề ngập và triều cường ảnh hưởng tới một số khu vực.</li>
<li><strong>Kết nối vùng</strong> với Bình Dương, Đồng Nai, Long An tạo một thị trường liên vùng lớn hơn ranh giới hành chính.</li>
</ul>
<div class="tip-box"><strong>Điểm chung quan trọng nhất của cả hai:</strong> giá trị được quyết định bởi <strong>khả năng tiếp cận việc làm</strong>. Mọi tuyến giao thông mới đi vào vận hành đều tái định hình bản đồ giá — và mọi khu vực xa trung tâm việc làm mà không có kết nối tốt đều gặp khó, dù quảng cáo hấp dẫn đến đâu.</div>`,
        advanced: `<h3>Tác động của metro và hạ tầng lớn</h3>
<p>Cả hai thành phố đang phát triển hệ thống đường sắt đô thị. Kinh nghiệm quốc tế cho thấy tác động của metro lên giá bất động sản có mấy đặc điểm nhất quán:</p>
<ul>
<li><strong>Tác động tập trung trong bán kính đi bộ tới ga</strong> — thường khoảng 500–800m. Ngoài phạm vi này, tác động giảm nhanh.</li>
<li><strong>Phần lớn mức tăng giá xảy ra trước khi tuyến vận hành</strong>, khi việc hoàn thành trở nên chắc chắn.</li>
<li><strong>Tác động lớn hơn với bất động sản thương mại và căn hộ</strong> so với nhà thấp tầng.</li>
<li><strong>Nó làm phẳng đường cong giá theo khoảng cách</strong> — vùng ven có metro trở nên cạnh tranh hơn với vùng gần trung tâm không có.</li>
</ul>
<div class="warning-box"><strong>Cảnh báo về độ trễ:</strong> các dự án đường sắt đô thị ở Việt Nam đều đã chậm tiến độ nhiều năm so với kế hoạch ban đầu. Mua bất động sản với kỳ vọng "metro sắp chạy" là một cược vào tiến độ — và lịch sử cho thấy tiến độ hầu như luôn dài hơn công bố. Nếu bài toán tài chính của bạn chỉ hợp lý khi tuyến vận hành đúng hạn, đó là bài toán quá mong manh.</div>
<h3>Cách đánh giá một khu vực cụ thể</h3>
<p>Thay vì hỏi "Hà Nội hay TP.HCM tốt hơn" — một câu hỏi không có câu trả lời hữu ích — hãy chấm điểm khu vực cụ thể theo các tiêu chí có thể quan sát được:</p>
<ol>
<li><strong>Thời gian tới nơi làm việc</strong> vào giờ cao điểm. Đo thật, không ước lượng.</li>
<li><strong>Số lượng cách ra vào khu vực.</strong> Một đường độc đạo là rủi ro lớn.</li>
<li><strong>Nguồn cung tiềm năng</strong> — quanh đó còn bao nhiêu dự án đang chờ triển khai? Nhiều nguồn cung mới sẽ kìm giá của bạn.</li>
<li><strong>Nguồn việc làm tại chỗ</strong> — khu vực có kinh tế riêng hay hoàn toàn là khu ngủ?</li>
<li><strong>Tiện ích đã có sẵn</strong>, không phải tiện ích được hứa hẹn.</li>
<li><strong>Rủi ro ngập</strong> — hỏi người dân địa phương, đến xem vào mùa mưa.</li>
<li><strong>Tỷ lệ lấp đầy thực tế</strong> nếu là khu đô thị mới — ban đêm có bao nhiêu căn sáng đèn?</li>
</ol>
<div class="tip-box"><strong>Chỉ báo đơn giản mà hiệu quả:</strong> đến khu vực đó vào 8 giờ tối một ngày thường và đếm tỷ lệ căn hộ sáng đèn. Một khu đô thị bán hết nhưng tối om vào buổi tối là khu vực mà người ta mua để đầu tư chứ không phải để ở — nghĩa là nhu cầu ở thực chưa hình thành, và giá phụ thuộc hoàn toàn vào việc có người mua tiếp theo hay không.</div>`,
        diagram: null
    },

    'us-tong-quan': {
        icon: '🇺🇸', title: 'Mỹ — Freehold, Thuế Tài Sản & Vay 30 Năm', category: 'markets',
        connections: ['lai-suat-tha-noi', 'thue-phi-vn', 'freehold-leasehold', 'us-2008'],
        simple: `<h3>🇺🇸 Mỹ — Freehold, Thuế Tài Sản & Vay 30 Năm</h3>
<p>Thị trường Mỹ có ba đặc điểm định hình khiến nó khác hẳn Việt Nam, và hiểu chúng giúp bạn đọc đúng mọi lời khuyên tài chính từ nguồn Mỹ.</p>
<table>
<tr><th>Đặc điểm</th><th>Nội dung</th><th>Việt Nam</th></tr>
<tr><td><strong>Sở hữu vĩnh viễn</strong></td><td>Freehold — sở hữu đất và nhà không thời hạn</td><td>Quyền sử dụng đất; đất ở cá nhân thường là lâu dài</td></tr>
<tr><td><strong>Thuế tài sản hàng năm</strong></td><td>Nộp hàng năm theo tỷ lệ trên giá trị tài sản; mức khác nhau nhiều giữa các bang</td><td>Chưa có thuế tài sản hàng năm đáng kể</td></tr>
<tr><td><strong>Vay cố định 30 năm</strong></td><td>Lãi suất cố định suốt 30 năm, được trả nợ trước hạn mà thường không bị phạt</td><td>Thả nổi sau vài tháng đến 2 năm ưu đãi</td></tr>
</table>
<div class="warning-box"><strong>Đặc điểm thứ ba là lý do quan trọng nhất khiến lời khuyên tài chính Mỹ không áp dụng trực tiếp cho Việt Nam.</strong> Mọi lập luận kiểu "lạm phát sẽ bào mòn khoản nợ của bạn" đều giả định lãi suất cố định. Với khoản vay thả nổi, lạm phát cao kéo lãi suất lên và khoản trả góp của bạn tăng theo — kết luận đảo ngược hoàn toàn.</div>`,
        detail: `<h3>Thuế tài sản — cơ chế thay đổi mọi thứ</h3>
<p>Chủ nhà ở Mỹ nộp thuế tài sản hàng năm cho chính quyền địa phương, thường tính theo tỷ lệ trên giá trị được định giá. Mức thuế khác nhau đáng kể giữa các bang và các địa phương.</p>
<p>Hệ quả của việc có thuế tài sản:</p>
<ul>
<li><strong>Giữ nhà bỏ trống rất tốn kém</strong> — mỗi năm phải trả một khoản thật, tạo áp lực đưa tài sản vào sử dụng.</li>
<li><strong>Đầu cơ đất đắt đỏ hơn</strong> — chi phí chờ đợi là thật.</li>
<li><strong>Ngân sách địa phương ổn định</strong> — nguồn thu đều đặn hàng năm, thường dùng cho trường học công và dịch vụ địa phương.</li>
<li><strong>Tạo liên kết giữa giá nhà và chất lượng dịch vụ</strong> — khu vực có trường tốt thu thuế cao, thu hút người mua, đẩy giá lên tiếp.</li>
</ul>
<div class="tip-box"><strong>Đây là lập luận Henry George trong thực tế:</strong> thuế đánh vào việc <em>nắm giữ</em> tài sản, chứ không phải vào giao dịch. Nó không làm giảm nguồn cung đất (đất vẫn nằm đó), nhưng làm giảm động cơ giữ tài sản không khai thác. So sánh với Việt Nam, nơi thuế chủ yếu đánh vào giao dịch — cơ chế này thực ra <em>khuyến khích</em> nắm giữ lâu và <em>cản trở</em> giao dịch, tức là ngược lại với điều mong muốn.</div>
<h3>Hạ tầng minh bạch: MLS</h3>
<p>Mỹ có hệ thống MLS (Multiple Listing Service) — cơ sở dữ liệu chung của các môi giới, ghi nhận thông tin nhà rao bán và <strong>giá giao dịch đã hoàn tất</strong>. Kết hợp với việc hồ sơ giao dịch bất động sản là thông tin công khai ở cấp địa phương, người mua có thể tra cứu lịch sử giá của một căn nhà.</p>
<div class="example-box"><strong>Khác biệt lớn với Việt Nam:</strong> ở Mỹ, bạn tra được căn nhà này đã bán bao nhiêu vào những năm nào. Điều đó làm giảm mạnh sự bất cân xứng thông tin giữa người mua và người bán, thu hẹp khoảng dao động giá, và làm việc thổi giá khó hơn nhiều.</div>`,
        advanced: `<h3>Vay cố định 30 năm hoạt động được nhờ đâu</h3>
<p>Một ngân hàng huy động tiền gửi kỳ hạn ngắn mà cho vay cố định 30 năm sẽ gánh rủi ro lãi suất khổng lồ. Mỹ giải quyết bằng cách <strong>chuyển rủi ro đó ra thị trường vốn</strong>:</p>
<ol>
<li>Ngân hàng cho vay mua nhà.</li>
<li>Bán khoản vay đó cho các định chế được chính phủ hậu thuẫn (Fannie Mae, Freddie Mac) hoặc tổ chức khác.</li>
<li>Các khoản vay được gộp lại và chứng khoán hóa thành <strong>chứng khoán bảo đảm bằng thế chấp (MBS)</strong>.</li>
<li>MBS được bán cho nhà đầu tư toàn cầu — quỹ hưu trí, công ty bảo hiểm, ngân hàng trung ương nước ngoài.</li>
</ol>
<p>Nhờ vậy, rủi ro lãi suất nằm ở nhà đầu tư có khả năng gánh nó, không nằm ở ngân hàng cho vay. Người mua nhà Mỹ được hưởng sự chắc chắn về khoản trả góp trong 30 năm.</p>
<div class="warning-box"><strong>Mặt trái đã bộc lộ năm 2008:</strong> chính hệ thống chứng khoán hóa này, khi kết hợp với tiêu chuẩn cho vay lỏng lẻo và các sản phẩm phái sinh phức tạp, đã lan truyền rủi ro từ thị trường nhà đất Mỹ ra toàn hệ thống tài chính thế giới. Xem chi tiết ở chủ điểm khủng hoảng 2008.</div>
<h3>Hiệu ứng "khóa lãi suất" — hệ quả ít ai lường trước</h3>
<p>Vay cố định 30 năm tạo ra một hệ quả thú vị khi lãi suất tăng mạnh. Một chủ nhà đang có khoản vay lãi suất rất thấp từ giai đoạn trước sẽ rất ngại bán nhà — vì nếu mua nhà mới, họ phải vay ở mức lãi suất hiện hành cao hơn nhiều.</p>
<p>Kết quả: <strong>nguồn cung nhà cũ trên thị trường co lại</strong> khi lãi suất tăng. Điều này đi ngược trực giác — lãi suất cao lẽ ra làm giá giảm, nhưng vì nguồn cung cũng giảm, giá không giảm nhiều như kỳ vọng, trong khi số lượng giao dịch sụt mạnh.</p>
<div class="tip-box"><strong>Bài học tổng quát:</strong> cấu trúc của thị trường vay quyết định cách thị trường nhà phản ứng với lãi suất. Cùng một mức tăng lãi suất tạo ra hệ quả rất khác ở Mỹ (giao dịch đóng băng, giá dính) và ở nước có vay thả nổi như Việt Nam (khoản trả góp của người đang vay tăng ngay, áp lực bán tăng). Đây là lý do không nên áp dụng máy móc kinh nghiệm thị trường này sang thị trường khác.</div>`,
        diagram: null
    },

    'us-2008': {
        icon: '💥', title: 'Mỹ — Khủng Hoảng Nhà Đất 2008', category: 'cases',
        connections: ['don-bay', 'tin-dung-gia-nha', 'us-tong-quan', 'jp-bubble-1991'],
        simple: `<h3>💥 Mỹ — Khủng Hoảng Nhà Đất 2008</h3>
<p>Cuộc khủng hoảng bắt đầu từ thị trường nhà đất Mỹ rồi lan ra toàn cầu, trở thành cuộc suy thoái nghiêm trọng nhất kể từ Đại khủng hoảng 1929.</p>
<div class="example-box"><strong>Câu chuyện trong một câu:</strong> Người ta cho vay mua nhà với tiêu chuẩn ngày càng lỏng, dựa trên niềm tin rằng giá nhà không bao giờ giảm trên phạm vi toàn quốc. Khi giá nhà giảm thật, toàn bộ hệ thống được xây trên niềm tin đó sụp đổ.</div>`,
        detail: `<h3>Diễn biến</h3>
<table>
<tr><th>Giai đoạn</th><th>Điều gì xảy ra</th></tr>
<tr><td><strong>Đầu 2000s</strong></td><td>Lãi suất thấp sau khủng hoảng dot-com. Tín dụng dồi dào. Giá nhà bắt đầu tăng đều khắp nước Mỹ.</td></tr>
<tr><td><strong>Giữa 2000s</strong></td><td>Tiêu chuẩn cho vay nới lỏng mạnh: cho vay dưới chuẩn (subprime), khoản vay không cần chứng minh thu nhập, lãi suất ưu đãi ban đầu rồi tăng vọt. Giá nhà tăng tốc.</td></tr>
<tr><td><strong>Chứng khoán hóa</strong></td><td>Các khoản vay được gộp thành MBS, rồi được đóng gói tiếp thành các sản phẩm phức tạp hơn (CDO). Nhiều sản phẩm nhận xếp hạng tín nhiệm cao dù chứa khoản vay rủi ro cao.</td></tr>
<tr><td><strong>2006–2007</strong></td><td>Giá nhà đạt đỉnh rồi bắt đầu giảm. Người vay dưới chuẩn không thể tái cấp vốn hay bán nhà để thoát. Tỷ lệ vỡ nợ tăng vọt.</td></tr>
<tr><td><strong>2008</strong></td><td>Giá trị MBS sụp đổ. Các định chế tài chính lớn nắm giữ chúng mất khả năng thanh toán. Lehman Brothers phá sản tháng 9/2008. Thị trường tín dụng toàn cầu đóng băng.</td></tr>
<tr><td><strong>Hậu quả</strong></td><td>Suy thoái toàn cầu, hàng triệu gia đình Mỹ mất nhà qua thủ tục tịch biên, thất nghiệp tăng mạnh, các chương trình giải cứu quy mô lớn.</td></tr>
</table>
<div class="warning-box"><strong>Sai lầm cốt lõi trong mô hình rủi ro:</strong> các mô hình định giá giả định rằng giá nhà ở các vùng khác nhau của nước Mỹ không giảm cùng lúc — nên gộp nhiều khoản vay từ nhiều bang lại sẽ "phân tán rủi ro". Giả định này dựa trên dữ liệu lịch sử, trong đó chưa từng có đợt giảm giá đồng loạt toàn quốc. Khi điều đó xảy ra, mọi khoản vay trong gói cùng xấu đi một lúc, và toàn bộ logic phân tán rủi ro sụp đổ.</div>`,
        advanced: `<h3>Các cơ chế khuếch đại</h3>
<ol>
<li><strong>Đòn bẩy ở mọi tầng.</strong> Người mua nhà vay tới gần 100% giá trị. Ngân hàng đầu tư có tỷ lệ đòn bẩy rất cao. Khi tài sản giảm giá vài phần trăm, vốn chủ sở hữu bị xóa sổ.</li>
<li><strong>Xung đột lợi ích trong xếp hạng tín nhiệm.</strong> Các tổ chức xếp hạng được trả tiền bởi chính bên phát hành sản phẩm mà họ xếp hạng.</li>
<li><strong>Rủi ro đạo đức trong mô hình "cho vay rồi bán".</strong> Khi ngân hàng bán ngay khoản vay đi, họ không còn động cơ mạnh để thẩm định kỹ người vay.</li>
<li><strong>Sản phẩm phái sinh phức tạp.</strong> Các hợp đồng hoán đổi rủi ro tín dụng làm không ai biết chính xác ai đang gánh rủi ro gì — dẫn tới việc mọi định chế nghi ngờ lẫn nhau và thị trường liên ngân hàng đóng băng.</li>
<li><strong>Vòng xoáy bán tháo.</strong> Nhà bị tịch biên được bán ra thị trường với giá thấp, kéo giá khu vực xuống, đẩy thêm chủ nhà vào tình trạng âm vốn, tạo làn sóng tịch biên tiếp theo.</li>
</ol>
<h3>Điều gì đã thay đổi sau đó</h3>
<ul>
<li><strong>Tiêu chuẩn cho vay siết chặt</strong> — bắt buộc xác minh khả năng trả nợ; hạn chế các sản phẩm vay rủi ro cao.</li>
<li><strong>Yêu cầu vốn cao hơn</strong> đối với ngân hàng; kiểm tra sức chịu đựng định kỳ.</li>
<li><strong>Bên chứng khoán hóa phải giữ lại một phần rủi ro</strong> — để có động cơ thẩm định kỹ.</li>
<li><strong>Giám sát rủi ro hệ thống</strong> được thể chế hóa, thay vì chỉ giám sát từng tổ chức riêng lẻ.</li>
</ul>
<div class="tip-box"><strong>Ba bài học áp dụng được cho người mua nhà ở bất kỳ đâu:</strong>
<ol>
<li><strong>Giá nhà có thể giảm, và giảm đồng loạt.</strong> "Nhà đất chưa bao giờ giảm" là một quan sát về quá khứ, không phải một quy luật.</li>
<li><strong>Đòn bẩy quyết định bạn sống sót hay không.</strong> Người có vốn tự có cao vượt qua khủng hoảng dù giá giảm; người vay gần 100% mất tất cả với cùng mức giảm giá.</li>
<li><strong>Khoản vay có lãi suất ưu đãi ban đầu rồi tăng vọt là cấu trúc nguy hiểm.</strong> Nó đã đẩy hàng triệu hộ gia đình Mỹ vào vỡ nợ. Cấu trúc "ưu đãi 1–2 năm rồi thả nổi" phổ biến ở Việt Nam có điểm tương đồng đáng để bạn tính toán kỹ.</li>
</ol>
</div>`,
        diagram: null
    },

    'jp-tong-quan': {
        icon: '🇯🇵', title: 'Nhật Bản — Nhà Mất Giá Theo Tuổi', category: 'markets',
        connections: ['pp-chi-phi', 'do-thi-hoa', 'jp-akiya', 'jp-bubble-1991'],
        simple: `<h3>🇯🇵 Nhật Bản — Nhà Mất Giá Theo Tuổi</h3>
<p>Nhật Bản có một đặc điểm làm người Việt Nam thấy rất khó tin: <strong>nhà ở Nhật mất giá theo tuổi gần như một chiếc xe hơi.</strong></p>
<div class="example-box"><strong>Thông lệ thị trường Nhật:</strong> giá trị của phần công trình giảm dần theo tuổi và thường được coi là gần như không còn đáng kể sau khoảng 20–30 năm. Chỉ có <strong>đất</strong> giữ giá trị. Nhiều người mua nhà cũ chủ yếu là mua đất, rồi phá công trình đi xây mới.</div>
<p>Điều này ngược hoàn toàn với Việt Nam, nơi một căn nhà 30 năm tuổi ở vị trí tốt vẫn có giá cao và thường tăng theo thời gian.</p>`,
        detail: `<h3>Vì sao nhà Nhật mất giá</h3>
<p>Nhiều yếu tố cùng góp phần, và không có một nguyên nhân duy nhất:</p>
<ul>
<li><strong>Tiêu chuẩn chống động đất được siết chặt qua các lần sửa luật.</strong> Nhà xây theo tiêu chuẩn cũ bị coi là kém an toàn hơn, làm giảm giá trị thị trường của nhà cũ.</li>
<li><strong>Văn hóa ưa nhà mới.</strong> Người mua Nhật có xu hướng thích nhà mới xây, làm thị trường nhà cũ kém sôi động.</li>
<li><strong>Vật liệu và phương pháp xây dựng</strong> — tỷ trọng nhà gỗ cao, với vòng đời thiết kế ngắn hơn so với công trình bê tông.</li>
<li><strong>Quy định về khấu hao trong hệ thống thuế</strong> phản ánh và củng cố kỳ vọng này.</li>
<li><strong>Thị trường nhà cũ kém phát triển</strong> — ít thông tin, ít dịch vụ kiểm định, ít tài chính hỗ trợ, tạo vòng lặp tự củng cố.</li>
</ul>
<div class="tip-box"><strong>Điểm mấu chốt:</strong> đây không phải quy luật vật lý — nhà Nhật không xuống cấp nhanh hơn nhà nước khác. Đó là một <strong>cân bằng thị trường</strong> được tạo ra bởi quy định, văn hóa và kỳ vọng, và nó tự củng cố: vì mọi người tin nhà cũ không đáng giá, không ai đầu tư bảo trì nhà cũ, nên nhà cũ thực sự trở nên không đáng giá.</div>`,
        advanced: `<h3>Hệ quả kinh tế</h3>
<table>
<tr><th>Hệ quả</th><th>Chi tiết</th></tr>
<tr><td><strong>Nhà không phải kênh tích lũy tài sản</strong></td><td>Người Nhật mua nhà để ở, không kỳ vọng nó tăng giá. Điều này thay đổi hoàn toàn tâm lý thị trường</td></tr>
<tr><td><strong>Ít đầu cơ nhà ở</strong></td><td>Khó đầu cơ vào một tài sản được kỳ vọng mất giá</td></tr>
<tr><td><strong>Chi tiêu xây dựng cao</strong></td><td>Phá đi xây lại thay vì cải tạo, tiêu tốn nhiều nguồn lực</td></tr>
<tr><td><strong>Giá đất là tất cả</strong></td><td>Mọi phân tích bất động sản Nhật xoay quanh giá đất, không phải giá nhà</td></tr>
</table>
<h3>So sánh trực tiếp với Việt Nam</h3>
<table>
<tr><th></th><th>Nhật Bản</th><th>Việt Nam</th></tr>
<tr><td>Công trình</td><td>Mất giá nhanh, gần như không còn giá trị sau 20–30 năm</td><td>Mất giá chậm; nhà cũ ở vị trí tốt vẫn giá cao</td></tr>
<tr><td>Đất</td><td>Giữ giá trị; tăng ở đô thị lớn, giảm ở nơi mất dân</td><td>Tăng mạnh dài hạn ở đô thị</td></tr>
<tr><td>Tâm lý</td><td>Nhà là hàng tiêu dùng lâu bền</td><td>Nhà đất là kênh tích lũy của cải</td></tr>
<tr><td>Dân số</td><td>Đã giảm nhiều năm</td><td>Còn tăng nhưng tốc độ chậm lại; tỷ suất sinh dưới mức thay thế</td></tr>
</table>
<div class="warning-box"><strong>Điều đáng suy nghĩ nhất từ trường hợp Nhật:</strong> với <em>căn hộ chung cư</em>, Việt Nam gần với mô hình Nhật hơn là với mô hình nhà phố Việt Nam. Bạn sở hữu chủ yếu phần công trình đang khấu hao; phần đất được chia cho hàng trăm hộ và bạn không tự quyết định được việc xây lại. Điều này không làm chung cư thành lựa chọn tồi — nó chỉ có nghĩa <strong>đừng kỳ vọng một căn hộ 25 năm tuổi hành xử như một mảnh đất 25 năm tuổi.</strong></div>
<div class="tip-box"><strong>Bài học tổng quát:</strong> "bất động sản luôn tăng giá" không phải một quy luật kinh tế. Nó là một quan sát đúng ở một số nơi, trong một số giai đoạn, dưới một số điều kiện — chủ yếu là khi dân số và kinh tế đô thị còn tăng. Nhật Bản là bằng chứng sống rằng khi các điều kiện đó thay đổi, kết quả cũng thay đổi.</div>`,
        diagram: null
    },

    'jp-akiya': {
        icon: '🏚️', title: 'Nhật Bản — Akiya, Nhà Bỏ Hoang', category: 'markets',
        connections: ['do-thi-hoa', 'jp-tong-quan', 'vi-tri', 'de-thue-nha'],
        simple: `<h3>🏚️ Nhật Bản — Akiya, Nhà Bỏ Hoang</h3>
<p><strong>Akiya</strong> (空き家) nghĩa là "nhà trống". Nhật Bản có hàng triệu căn nhà bỏ hoang, và con số này tăng đều qua các kỳ khảo sát.</p>
<div class="example-box"><strong>Theo các cuộc điều tra nhà ở và đất đai định kỳ của Nhật Bản, số nhà bỏ trống đã vượt mốc 9 triệu căn, tương đương khoảng 13–14% tổng số nhà trên cả nước.</strong> Có những căn được rao bán với giá rất thấp, thậm chí được cho không, mà vẫn khó tìm người nhận.</div>
<p>Đây là hình ảnh trực quan nhất về điều gì xảy ra khi <strong>dân số giảm gặp một thị trường bất động sản</strong>.</p>`,
        detail: `<h3>Vì sao có quá nhiều nhà trống</h3>
<ul>
<li><strong>Dân số giảm và già hóa.</strong> Người già qua đời, con cháu đã chuyển lên thành phố và không quay về.</li>
<li><strong>Di cư về đô thị lớn.</strong> Tokyo tiếp tục hút người trong khi nông thôn và thành phố nhỏ mất dân.</li>
<li><strong>Nhà cũ gần như không có giá trị</strong> theo thông lệ thị trường Nhật, nên không ai mua để ở hay để đầu tư.</li>
<li><strong>Chi phí phá dỡ cao</strong> — phá một căn nhà tốn kém.</li>
<li><strong>Cơ chế thuế từng tạo động cơ ngược:</strong> đất có công trình được hưởng mức thuế tài sản thấp hơn đất trống. Nghĩa là để căn nhà mục nát ở đó rẻ hơn là phá đi. Luật đã được sửa đổi để xử lý các căn nhà bỏ hoang gây nguy hiểm, nhưng vấn đề vẫn tồn tại ở quy mô lớn.</li>
</ul>
<div class="warning-box"><strong>Đây là ví dụ kinh điển về việc chính sách thuế tạo ra hành vi ngoài ý muốn.</strong> Ưu đãi thuế cho đất có công trình được thiết kế để khuyến khích xây dựng; kết quả thực tế là khuyến khích giữ lại những căn nhà đã bỏ hoang. Bài học chung: mọi chính sách thuế bất động sản đều tạo ra động cơ, và động cơ đó thường lộ ra theo cách không ai dự tính.</div>`,
        advanced: `<h3>Bài học quan trọng nhất: dân số giảm gây phân hóa, không phải giảm đều</h3>
<p>Đây là điểm cần hiểu đúng, vì nó thường bị nói sai:</p>
<table>
<tr><th>Nơi</th><th>Điều gì xảy ra</th></tr>
<tr><td><strong>Trung tâm đô thị lớn</strong> (Tokyo)</td><td>Vẫn hút người từ nơi khác. Giá nhà ở khu trung tâm vẫn tăng ngay cả khi dân số cả nước giảm</td></tr>
<tr><td><strong>Vùng ven đô thị lớn</strong></td><td>Đi ngang hoặc giảm nhẹ</td></tr>
<tr><td><strong>Thành phố nhỏ, nông thôn</strong></td><td>Mất dân, nhà bỏ hoang, giá về gần bằng không</td></tr>
</table>
<div class="tip-box"><strong>Nghĩa là: khi dân số một nước bắt đầu giảm, "vị trí" không trở nên kém quan trọng hơn — nó trở nên <em>quan trọng hơn bao giờ hết</em>.</strong> Trong giai đoạn dân số tăng, gần như mọi bất động sản đều tăng giá và sai lầm về vị trí được che lấp. Khi dân số giảm, chỉ những nơi thực sự hút người mới giữ được giá trị, và sai lầm về vị trí trở thành vĩnh viễn.</div>
<h3>Ý nghĩa cho Việt Nam</h3>
<p>Việt Nam chưa ở giai đoạn của Nhật — dân số vẫn tăng và đô thị hóa còn dư địa. Nhưng các chỉ báo dẫn dắt đã xuất hiện: tổng tỷ suất sinh xuống dưới mức thay thế, đặc biệt ở các đô thị lớn, và quá trình già hóa được đánh giá là diễn ra nhanh so với nhiều nước có cùng mức thu nhập.</p>
<div class="warning-box"><strong>Ứng dụng thực tế cho một quyết định 20–30 năm:</strong>
<ul>
<li>Bất động sản ở <strong>đô thị lớn có nền kinh tế đa dạng và việc làm thật</strong> chịu được kịch bản dân số giảm.</li>
<li>Bất động sản ở <strong>vùng ven hoặc tỉnh không có động lực kinh tế riêng</strong>, mua với kỳ vọng "sóng hạ tầng" hoặc "sẽ có người về ở", là cược vào một xu hướng đang yếu dần.</li>
<li>Câu hỏi kiểm tra: <em>"Trong 20 năm nữa, ai sẽ muốn sống ở đây, và vì lý do gì?"</em> Nếu bạn không trả lời được bằng một lý do kinh tế cụ thể — có việc làm, có trường học, có dịch vụ — thì không có mức giá nào là rẻ.</li>
</ul>
</div>`,
        diagram: null
    },

    'jp-bubble-1991': {
        icon: '🎆', title: 'Nhật Bản — Bong Bóng 1991', category: 'cases',
        connections: ['chu-ky-bds', 'su-dung-vs-dau-co', 'jp-tong-quan', 'us-2008'],
        simple: `<h3>🎆 Nhật Bản — Bong Bóng 1991</h3>
<p>Bong bóng tài sản Nhật Bản cuối thập niên 1980 và cú vỡ đầu thập niên 1990 là một trong những bài học lớn nhất lịch sử kinh tế hiện đại.</p>
<div class="example-box"><strong>Mức độ của bong bóng:</strong> ở đỉnh điểm, giá đất tại Nhật đạt mức cao đến mức người ta thường trích dẫn những phép so sánh gây choáng — như giá trị đất của khu vực quanh Hoàng cung Tokyo được ước tính ngang với giá trị đất của cả một bang lớn ở Mỹ. Những con số này mang tính minh họa cho mức độ định giá cực đoan tại thời điểm đó.</div>
<p>Sau khi vỡ, giá đất Nhật giảm liên tục trong nhiều năm. Nhiều loại tài sản phải mất hàng thập kỷ mới hồi phục, và một số chưa bao giờ trở lại mức đỉnh cũ.</p>`,
        detail: `<h3>Bong bóng hình thành thế nào</h3>
<table>
<tr><th>Yếu tố</th><th>Vai trò</th></tr>
<tr><td><strong>Tăng trưởng thần kỳ</strong></td><td>Nhật trở thành nền kinh tế lớn thứ hai thế giới, tạo niềm tin rằng tăng trưởng sẽ tiếp tục vô hạn</td></tr>
<tr><td><strong>Chính sách tiền tệ nới lỏng</strong></td><td>Lãi suất được giữ thấp trong giai đoạn giữa thập niên 1980, một phần để đối phó với việc đồng yên tăng giá mạnh</td></tr>
<tr><td><strong>Ngân hàng cho vay dựa trên tài sản thế chấp</strong></td><td>Giá đất tăng → thế chấp giá trị cao hơn → vay được nhiều hơn → mua thêm đất → giá tăng tiếp. Vòng lặp tự khuếch đại kinh điển</td></tr>
<tr><td><strong>Sở hữu chéo giữa các tập đoàn</strong></td><td>Doanh nghiệp nắm cổ phần và bất động sản của nhau, làm rủi ro lan tỏa khắp hệ thống</td></tr>
<tr><td><strong>Niềm tin "đất Nhật không bao giờ giảm giá"</strong></td><td>Được coi như một sự thật hiển nhiên, do đất khan hiếm và dân số đông</td></tr>
</table>
<h3>Cú vỡ</h3>
<p>Ngân hàng trung ương Nhật nâng lãi suất mạnh từ cuối thập niên 1980 để hạ nhiệt bong bóng, cùng với các biện pháp hạn chế cho vay bất động sản. Thị trường chứng khoán đạt đỉnh cuối năm 1989 rồi lao dốc; giá đất đạt đỉnh sau đó và bắt đầu chuỗi giảm kéo dài.</p>
<div class="warning-box"><strong>Điều làm cú vỡ này đặc biệt nghiêm trọng:</strong> vì ngân hàng cho vay dựa chủ yếu vào giá trị tài sản thế chấp thay vì dòng tiền của người vay, khi giá đất sụp thì tài sản thế chấp không còn đủ bảo đảm cho khoản nợ. Hệ thống ngân hàng ôm khối nợ xấu khổng lồ, và việc xử lý bị trì hoãn nhiều năm — làm kéo dài giai đoạn đình trệ.</div>`,
        advanced: `<h3>"Suy thoái bảng cân đối"</h3>
<p>Nhà kinh tế Richard Koo dùng khái niệm này để mô tả điều xảy ra sau đó, và nó giải thích vì sao Nhật không hồi phục nhanh:</p>
<ol>
<li>Doanh nghiệp và hộ gia đình vay nợ để mua tài sản ở giá đỉnh.</li>
<li>Giá tài sản sụp, nhưng khoản nợ vẫn nguyên giá trị danh nghĩa.</li>
<li>Họ rơi vào tình trạng tài sản thấp hơn nợ.</li>
<li>Thay vì tối đa hóa lợi nhuận, mục tiêu của họ chuyển thành <strong>tối thiểu hóa nợ</strong> — dùng mọi dòng tiền để trả nợ, ngừng đầu tư.</li>
<li>Khi cả nền kinh tế cùng làm vậy, tổng cầu sụp đổ.</li>
<li>Hạ lãi suất về gần 0 cũng không kích thích được, vì không ai muốn vay thêm dù tiền rẻ.</li>
</ol>
<p>Đây là lý do các công cụ chính sách tiền tệ thông thường tỏ ra kém hiệu quả, và giai đoạn đình trệ kéo dài được gọi là "thập kỷ mất mát" — rồi trở thành nhiều thập kỷ.</p>
<h3>Bốn bài học</h3>
<div class="tip-box">
<ol>
<li><strong>"Tài sản này không bao giờ giảm giá" là câu nói xuất hiện ở đỉnh mọi bong bóng.</strong> Nó không phải phân tích, nó là triệu chứng.</li>
<li><strong>Cho vay dựa trên giá trị tài sản thế chấp là cơ chế khuếch đại nguy hiểm.</strong> Nó hoạt động tuyệt vời khi giá lên và trở thành thảm họa khi giá xuống. Cho vay dựa trên <em>dòng tiền</em> của người vay an toàn hơn nhiều.</li>
<li><strong>Nợ tồn tại lâu hơn giá tài sản.</strong> Giá có thể giảm 60% trong ba năm; khoản nợ của bạn thì không giảm đồng nào. Đây là lý do đòn bẩy quyết định ai sống sót.</li>
<li><strong>Hồi phục sau bong bóng bất động sản rất chậm</strong> — chậm hơn nhiều so với sau sụp đổ chứng khoán, vì nó làm hỏng bảng cân đối của cả hệ thống ngân hàng lẫn hộ gia đình cùng lúc.</li>
</ol>
</div>
<div class="warning-box"><strong>Điểm áp dụng trực tiếp:</strong> nếu bạn mua bất động sản với đòn bẩy cao, hãy tự hỏi — <em>"nếu giá giảm 30% và đứng ở đó 10 năm, tôi có sống sót không?"</em>. Nếu câu trả lời phụ thuộc vào việc giá phải phục hồi, bạn đang không có một kế hoạch mà đang có một hy vọng. Ở Nhật, những người trả lời "không" đã mất tất cả; những người trả lời "có" chỉ đơn giản là sống tiếp trong căn nhà của họ.</div>`,
        diagram: null
    },

    'cn-tong-quan': {
        icon: '🇨🇳', title: 'Trung Quốc — Đất 70 Năm & Chính Quyền Bán Đất', category: 'markets',
        connections: ['so-huu-vs-su-dung', 'freehold-leasehold', 'cn-nha-xay-do', 'thue-phi-vn'],
        simple: `<h3>🇨🇳 Trung Quốc — Đất 70 Năm & Chính Quyền Bán Đất</h3>
<p>Mô hình Trung Quốc có nhiều điểm tương đồng với Việt Nam về nền tảng pháp lý, nên đáng nghiên cứu kỹ — cả những gì hiệu quả lẫn những gì đã hỏng.</p>
<ul>
<li><strong>Đất thuộc sở hữu nhà nước (đô thị) hoặc tập thể (nông thôn).</strong> Cá nhân có quyền sử dụng đất có thời hạn.</li>
<li><strong>Đất ở thường có thời hạn 70 năm</strong>; đất thương mại và công nghiệp có thời hạn ngắn hơn.</li>
<li><strong>Chính quyền địa phương bán quyền sử dụng đất</strong> cho chủ đầu tư — và đây từng là nguồn thu ngân sách rất lớn của họ.</li>
</ul>
<div class="example-box"><strong>Điểm mấu chốt cần hiểu:</strong> vì chính quyền địa phương phụ thuộc vào tiền bán đất, họ có động cơ tài chính trực tiếp để <em>giữ giá đất cao</em>. Đây là một xung đột lợi ích mang tính cấu trúc, và nó định hình gần như mọi thứ diễn ra trên thị trường bất động sản Trung Quốc trong ba thập kỷ.</div>`,
        detail: `<h3>Mô hình tài chính đất đai</h3>
<p>Cơ chế vận hành trong nhiều năm:</p>
<ol>
<li>Chính quyền địa phương thu hồi đất nông nghiệp, bồi thường cho nông dân.</li>
<li>Chuyển đổi thành đất xây dựng đô thị.</li>
<li>Đấu giá quyền sử dụng đất cho chủ đầu tư với giá cao hơn nhiều.</li>
<li>Dùng khoản chênh lệch tài trợ cho hạ tầng và chi tiêu địa phương.</li>
<li>Hạ tầng mới làm đất xung quanh tăng giá, tạo vòng lặp.</li>
</ol>
<p>Mô hình này đã tài trợ cho một trong những đợt xây dựng hạ tầng nhanh nhất lịch sử. Nhưng nó cũng tạo ra sự phụ thuộc: khi thị trường bất động sản chững lại, nguồn thu của địa phương sụt giảm mạnh, ảnh hưởng tới khả năng chi tiêu và trả nợ.</p>
<div class="warning-box"><strong>Câu hỏi 70 năm.</strong> Đất ở có thời hạn 70 năm, và những lô đầu tiên được cấp từ thập niên 1990 đang tiến dần tới mốc hết hạn. Luật quy định quyền sử dụng đất ở được tự động gia hạn khi hết hạn, nhưng các chi tiết về việc có phải nộp phí gia hạn hay không và mức phí bao nhiêu vẫn là mối quan tâm của người dân. Đây là một câu hỏi mở có ảnh hưởng lớn tới định giá dài hạn.</div>`,
        advanced: `<h3>Vì sao giá nhà Trung Quốc lên cao đến vậy</h3>
<ul>
<li><strong>Đô thị hóa quy mô chưa từng có</strong> — hàng trăm triệu người chuyển từ nông thôn ra thành thị trong vài thập kỷ.</li>
<li><strong>Kênh đầu tư hạn chế</strong> — kiểm soát vốn ra nước ngoài, thị trường chứng khoán biến động mạnh, lãi suất tiền gửi thấp. Bất động sản trở thành nơi cất giữ của cải chính của hộ gia đình.</li>
<li><strong>Không có thuế tài sản trên diện rộng</strong> — giữ căn hộ trống gần như không tốn chi phí, thúc đẩy mua nhiều căn để đó.</li>
<li><strong>Chính quyền địa phương có động cơ giữ giá cao.</strong></li>
<li><strong>Niềm tin rằng nhà nước sẽ không để giá nhà giảm</strong> — một dạng kỳ vọng được bảo hộ, làm rủi ro bị định giá thấp.</li>
</ul>
<h3>Bước ngoặt chính sách</h3>
<p>Năm 2020, chính quyền đưa ra chính sách <strong>"ba lằn ranh đỏ"</strong> — đặt giới hạn về tỷ lệ nợ, tỷ lệ đòn bẩy và thanh khoản mà các doanh nghiệp bất động sản phải tuân thủ để được vay thêm.</p>
<p>Đây là nỗ lực có chủ đích nhằm giảm đòn bẩy trong ngành, sau nhiều năm cảnh báo về rủi ro. Kết quả là các tập đoàn bất động sản lớn — vốn phụ thuộc vào việc liên tục vay mới để trả nợ cũ và triển khai dự án — mất khả năng tiếp cận vốn. Evergrande, tập đoàn nợ nhiều nhất, vỡ nợ năm 2021, kéo theo một loạt doanh nghiệp khác.</p>
<div class="tip-box"><strong>Bài học chính sách quan trọng:</strong> khi một ngành đã tích lũy đòn bẩy quá lớn, mọi nỗ lực giảm đòn bẩy đều gây đau đớn. Nếu không làm, rủi ro tiếp tục lớn lên. Nếu làm, nó kích hoạt chính cuộc khủng hoảng mà nó cố ngăn chặn. Đây là thế lưỡng nan mà các nhà hoạch định chính sách ở nhiều nước phải đối mặt, và nó là lập luận mạnh nhất cho việc <em>ngăn tích lũy đòn bẩy quá mức ngay từ đầu</em> thay vì xử lý sau.</div>
<h3>Điểm tương đồng và khác biệt với Việt Nam</h3>
<table>
<tr><th></th><th>Trung Quốc</th><th>Việt Nam</th></tr>
<tr><td>Nền tảng pháp lý đất đai</td><td>Sở hữu nhà nước/tập thể; quyền sử dụng có thời hạn</td><td>Sở hữu toàn dân; đất ở cá nhân thường là lâu dài</td></tr>
<tr><td>Thu ngân sách địa phương từ đất</td><td>Tỷ trọng rất lớn</td><td>Đáng kể, đặc biệt ở các địa phương đang phát triển</td></tr>
<tr><td>Thuế tài sản hàng năm</td><td>Chưa áp dụng rộng</td><td>Chưa có đáng kể</td></tr>
<tr><td>Mô hình bán nhà hình thành trong tương lai</td><td>Phổ biến, là gốc rễ của khủng hoảng nhà xây dở</td><td>Phổ biến, có quy định bảo lãnh ngân hàng</td></tr>
<tr><td>Quy mô</td><td>Rất lớn, rủi ro mang tính hệ thống toàn cầu</td><td>Nhỏ hơn nhiều</td></tr>
</table>
<div class="warning-box"><strong>Điểm đáng chú ý nhất:</strong> Việt Nam có <em>cùng mô hình bán nhà hình thành trong tương lai</em> đã gây ra khủng hoảng ở Trung Quốc, nhưng có thêm lớp bảo vệ là yêu cầu bảo lãnh ngân hàng. Lớp bảo vệ đó chỉ có giá trị nếu bạn <strong>thực sự yêu cầu và nhận được thư bảo lãnh cho căn hộ của mình</strong> — điều mà rất nhiều người mua bỏ qua.</div>`,
        diagram: null
    },

    'cn-nha-xay-do': {
        icon: '🏗️', title: 'Trung Quốc — Evergrande & Nhà Xây Dở', category: 'cases',
        connections: ['nha-hinh-thanh-tuong-lai', 'cn-tong-quan', 'don-bay', 'us-2008'],
        simple: `<h3>🏗️ Trung Quốc — Evergrande & Nhà Xây Dở</h3>
<p>Đây là cuộc khủng hoảng bất động sản lớn nhất đang diễn ra trong thế kỷ này, và nó có liên quan trực tiếp tới Việt Nam vì cùng mô hình bán nhà trước khi xây xong.</p>
<div class="example-box"><strong>Cơ chế trong một câu:</strong> Các tập đoàn bất động sản dùng tiền người mua đóng trước cho dự án này để triển khai dự án khác và trả nợ cũ. Khi nguồn vốn mới bị chặn, chuỗi đứt — và hàng triệu người đã trả phần lớn tiền cho những căn hộ chưa bao giờ được hoàn thành.</div>`,
        detail: `<h3>Diễn biến</h3>
<table>
<tr><th>Mốc</th><th>Sự kiện</th></tr>
<tr><td><strong>Nhiều năm trước 2020</strong></td><td>Các tập đoàn bất động sản mở rộng nhanh bằng đòn bẩy rất cao, mua quỹ đất liên tục, bán nhà hình thành trong tương lai để có dòng tiền</td></tr>
<tr><td><strong>2020</strong></td><td>Chính sách "ba lằn ranh đỏ" giới hạn khả năng vay thêm của các doanh nghiệp có tỷ lệ nợ cao</td></tr>
<tr><td><strong>2021</strong></td><td>Evergrande — một trong những tập đoàn bất động sản lớn nhất thế giới tính theo nợ — mất khả năng thanh toán và vỡ nợ trái phiếu quốc tế</td></tr>
<tr><td><strong>2022</strong></td><td>Nhiều dự án trên cả nước dừng thi công. Xuất hiện phong trào người mua nhà từ chối trả góp cho những căn hộ chưa được bàn giao</td></tr>
<tr><td><strong>Sau đó</strong></td><td>Thêm nhiều doanh nghiệp lớn khác gặp khó khăn. Giá nhà giảm ở nhiều thành phố. Chính quyền triển khai các biện pháp hỗ trợ nhằm bảo đảm bàn giao nhà cho người mua</td></tr>
</table>
<div class="warning-box"><strong>Điểm đau đớn nhất: người mua nhà chịu thiệt hại lớn nhất.</strong> Họ đã đóng phần lớn giá trị căn hộ và đang trả góp ngân hàng hàng tháng cho một tài sản không tồn tại, trong khi vẫn phải trả tiền thuê nhà đang ở. Đây chính xác là rủi ro mà cơ chế bảo lãnh ngân hàng ở Việt Nam được thiết kế để phòng ngừa.</div>`,
        advanced: `<h3>Vì sao mô hình bán trước có rủi ro hệ thống</h3>
<p>Mô hình này chuyển rủi ro xây dựng từ chủ đầu tư sang người mua, và tạo ra một cấu trúc mong manh:</p>
<ol>
<li>Chủ đầu tư thu tiền của người mua dự án A.</li>
<li>Dùng tiền đó mua đất và khởi động dự án B (thay vì hoàn thành A).</li>
<li>Bán dự án B, dùng tiền đó hoàn thành A và khởi động C.</li>
<li>Mô hình chỉ vận hành được khi doanh số luôn tăng và vốn luôn sẵn.</li>
<li>Khi doanh số chậm lại hoặc tín dụng bị chặn, chuỗi đứt ở mọi mắt xích cùng lúc.</li>
</ol>
<p>Về bản chất, đây là một cấu trúc phụ thuộc vào dòng tiền mới liên tục — và mọi cấu trúc như vậy đều đổ vỡ khi dòng tiền mới dừng lại.</p>
<h3>Các yếu tố làm khủng hoảng trầm trọng hơn</h3>
<ul>
<li><strong>Nhà mua để đầu tư nhiều hơn để ở.</strong> Nhiều hộ gia đình sở hữu nhiều căn hộ không cho thuê, làm nhu cầu thực yếu hơn con số giao dịch thể hiện.</li>
<li><strong>Chính quyền địa phương phụ thuộc thu từ đất</strong>, nên khủng hoảng bất động sản trực tiếp gây khó khăn tài khóa cho địa phương.</li>
<li><strong>Bất động sản chiếm tỷ trọng rất lớn trong tài sản hộ gia đình</strong>, nên giá giảm tác động mạnh tới niềm tin và tiêu dùng của cả nền kinh tế.</li>
<li><strong>Nhân khẩu học đã đảo chiều</strong> — dân số Trung Quốc bắt đầu giảm, làm nhu cầu nhà ở dài hạn yếu đi đúng lúc nguồn cung dư thừa.</li>
</ul>
<div class="tip-box"><strong>Bốn bài học cho người mua nhà dự án ở Việt Nam:</strong>
<ol>
<li><strong>Thư bảo lãnh ngân hàng là lớp bảo vệ quan trọng nhất của bạn.</strong> Hãy yêu cầu bằng văn bản, cho chính căn hộ của bạn. Nếu chủ đầu tư trì hoãn, đó là tín hiệu nghiêm trọng.</li>
<li><strong>Đừng thanh toán vượt tiến độ, kể cả khi được chiết khấu.</strong> Khoản 5% cuối cùng là đòn bẩy duy nhất của bạn để buộc hoàn tất thủ tục cấp sổ.</li>
<li><strong>Đánh giá sức khỏe tài chính của chủ đầu tư</strong>, không chỉ đánh giá dự án. Một dự án tốt của một doanh nghiệp sắp mất thanh khoản vẫn là rủi ro cao.</li>
<li><strong>Ưu tiên dự án đã xây đến giai đoạn cao</strong> hoặc đã bàn giao. Chiết khấu sâu ở giai đoạn sớm là phần bù cho rủi ro thật, không phải quà tặng.</li>
</ol>
</div>`,
        diagram: null
    },

    'sg-hdb': {
        icon: '🇸🇬', title: 'Singapore — Mô Hình HDB', category: 'markets',
        connections: ['freehold-leasehold', 'sg-absd', 'de-thue-nha', 'do-thi-hoa'],
        simple: `<h3>🇸🇬 Singapore — Mô Hình HDB</h3>
<p>Singapore là ví dụ thành công nhất thế giới về nhà ở công. Khoảng <strong>80% dân số Singapore sống trong căn hộ do Housing & Development Board (HDB) xây dựng</strong>, và phần lớn trong số đó là chủ sở hữu, không phải người thuê.</p>
<div class="example-box"><strong>Điều làm mô hình này đặc biệt:</strong> đây không phải "nhà ở xã hội cho người nghèo" như ở nhiều nước. HDB là nhà ở phổ thông cho tầng lớp trung lưu — nơi đại đa số người Singapore sống. Nó không mang định kiến xã hội, và chất lượng được duy trì tốt.</div>`,
        detail: `<h3>Mô hình vận hành thế nào</h3>
<table>
<tr><th>Thành phần</th><th>Cơ chế</th></tr>
<tr><td><strong>Quỹ đất</strong></td><td>Nhà nước có quyền thu hồi đất cho mục đích công với mức bồi thường theo quy định, tạo quỹ đất lớn với chi phí kiểm soát được</td></tr>
<tr><td><strong>Hình thức sở hữu</strong></td><td>Người mua sở hữu căn hộ theo hợp đồng thuê đất 99 năm (leasehold)</td></tr>
<tr><td><strong>Nguồn tài chính của người mua</strong></td><td>Central Provident Fund (CPF) — quỹ tiết kiệm bắt buộc; người lao động được dùng số dư CPF để trả trước và trả góp mua nhà</td></tr>
<tr><td><strong>Cơ chế phân phối</strong></td><td>Đăng ký mua căn hộ xây mới theo đợt (Build-To-Order), với các điều kiện về quốc tịch, tình trạng hôn nhân, thu nhập</td></tr>
<tr><td><strong>Thị trường thứ cấp</strong></td><td>Có, nhưng bị điều tiết: thời gian tối thiểu phải ở trước khi được bán lại, hạn chế đối tượng được mua</td></tr>
<tr><td><strong>Chính sách hòa nhập sắc tộc</strong></td><td>Quy định tỷ lệ các nhóm sắc tộc trong mỗi khu nhà, nhằm tránh hình thành khu vực tách biệt</td></tr>
</table>
<div class="tip-box"><strong>Yếu tố tài chính là mấu chốt ít được nhắc tới:</strong> CPF biến khoản tiết kiệm hưu trí bắt buộc thành công cụ mua nhà. Người lao động tích lũy tự động qua mỗi kỳ lương và dùng số dư đó để mua nhà — thay vì phải tự tiết kiệm nhiều năm mới đủ tiền trả trước. Đây là cách giải quyết rào cản lớn nhất với người mua nhà lần đầu ở mọi nước.</div>`,
        advanced: `<h3>Vì sao mô hình này khó sao chép</h3>
<p>Singapore thành công nhờ một tổ hợp điều kiện đặc thù, và mỗi điều kiện đều khó tái tạo:</p>
<ol>
<li><strong>Quy mô nhỏ và tập trung</strong> — một thành phố - quốc gia, không có sự phân mảnh giữa các cấp chính quyền.</li>
<li><strong>Cơ chế thu hồi đất mạnh</strong> được thiết lập từ rất sớm trong quá trình phát triển, khi giá đất còn thấp.</li>
<li><strong>Hệ thống tiết kiệm bắt buộc</strong> tạo nguồn vốn dài hạn ổn định.</li>
<li><strong>Cam kết chính trị liên tục</strong> qua nhiều thập kỷ, không đảo chiều theo nhiệm kỳ.</li>
<li><strong>Năng lực thực thi</strong> — quy hoạch, xây dựng, quản lý vận hành đều ở mức cao và nhất quán.</li>
</ol>
<div class="warning-box"><strong>Đánh đổi của mô hình:</strong> mức độ can thiệp của nhà nước vào thị trường nhà ở rất cao — ai được mua, khi nào được bán, bán cho ai, tỷ lệ sắc tộc trong tòa nhà. Đây là mức độ điều tiết mà nhiều xã hội khác không chấp nhận. Ngoài ra, thị trường tư nhân (condo, nhà đất) vẫn rất đắt đỏ, tạo phân tầng rõ rệt giữa hai thị trường song song.</div>
<h3>Vấn đề 99 năm</h3>
<p>Căn hộ HDB là leasehold 99 năm. Khi hết hạn, căn hộ trở về nhà nước. Những căn hộ đầu tiên được xây từ thập niên 1960 đang tiến dần tới nửa sau của thời hạn.</p>
<p>Thị trường phản ánh điều này rất rõ: <strong>căn hộ còn ít năm bị chiết khấu đáng kể</strong>, và ngân hàng cũng như việc dùng CPF để mua đều bị hạn chế với những căn có thời hạn còn lại ngắn. Đây là một minh chứng thực tế rằng khi thị trường có đủ thông tin và trưởng thành, thời hạn sử dụng <em>sẽ</em> được định giá.</p>
<div class="tip-box"><strong>Bài học rút ra được cho Việt Nam — không phải sao chép cả mô hình, mà là các nguyên tắc:</strong>
<ul>
<li><strong>Giải quyết rào cản vốn trả trước</strong> là chìa khóa để người trẻ mua được nhà. Cơ chế tiết kiệm nhà ở dài hạn là một hướng đáng nghiên cứu.</li>
<li><strong>Nhà ở giá phải chăng cần quỹ đất được bố trí có chủ đích</strong>, không thể trông chờ vào thị trường tự sinh ra.</li>
<li><strong>Nhà ở công không nhất thiết là nhà chất lượng thấp</strong> — định kiến này là kết quả của cách làm, không phải bản chất.</li>
<li><strong>Chính sách nhất quán dài hạn quan trọng hơn quy mô gói hỗ trợ</strong> — HDB thành công nhờ sáu thập kỷ liên tục, không nhờ một chương trình lớn.</li>
</ul>
</div>`,
        diagram: null
    },

    'sg-absd': {
        icon: '🛡️', title: 'Singapore — Công Cụ Chống Đầu Cơ', category: 'markets',
        connections: ['sg-hdb', 'tin-dung-gia-nha', 'thue-phi-vn', 'kr-chinh-sach'],
        simple: `<h3>🛡️ Singapore — Công Cụ Chống Đầu Cơ</h3>
<p>Singapore có lẽ là nước dùng công cụ chính sách để kiểm soát giá nhà một cách chủ động và có hệ thống nhất thế giới. Họ gọi đó là các "biện pháp hạ nhiệt" (cooling measures).</p>
<div class="example-box"><strong>Triết lý đằng sau:</strong> nhà ở vừa là nhu cầu thiết yếu vừa là tài sản đầu tư. Khi vai trò đầu tư lấn át vai trò thiết yếu, xã hội gặp vấn đề. Vì vậy chính sách chủ động <strong>làm cho việc đầu cơ trở nên đắt đỏ</strong>, thay vì để thị trường tự điều chỉnh.</div>`,
        detail: `<h3>Bộ công cụ chính</h3>
<table>
<tr><th>Công cụ</th><th>Cơ chế</th></tr>
<tr><td><strong>ABSD</strong> (Additional Buyer's Stamp Duty)</td><td>Thuế trước bạ bổ sung, <strong>lũy tiến theo số căn nhà đã sở hữu</strong> và theo quốc tịch. Người mua căn đầu tiên chịu mức thấp; căn thứ hai, thứ ba cao hơn nhiều; người nước ngoài chịu mức cao nhất</td></tr>
<tr><td><strong>SSD</strong> (Seller's Stamp Duty)</td><td>Thuế đánh vào người bán nếu bán lại trong vài năm đầu — nhằm triệt tiêu lợi nhuận từ lướt sóng ngắn hạn</td></tr>
<tr><td><strong>TDSR</strong> (Total Debt Servicing Ratio)</td><td>Giới hạn tổng nghĩa vụ trả nợ trên thu nhập, áp dụng cho <em>tất cả</em> các khoản nợ — ngăn người mua vay quá khả năng</td></tr>
<tr><td><strong>LTV theo số căn</strong></td><td>Tỷ lệ cho vay tối đa giảm dần khi mua căn thứ hai, thứ ba</td></tr>
<tr><td><strong>Thời gian nắm giữ tối thiểu</strong></td><td>Với căn hộ HDB, phải ở một số năm nhất định trước khi được bán lại</td></tr>
</table>
<div class="warning-box"><strong>Mức ABSD đối với người nước ngoài đã được nâng lên rất cao</strong> qua các lần điều chỉnh — tới mức 60% giá trị giao dịch từ tháng 4/2023. Đây là biện pháp rất mạnh, nhằm hạn chế dòng vốn ngoại đẩy giá nhà lên ngoài tầm với của người dân trong nước.</div>`,
        advanced: `<h3>Vì sao thiết kế theo hướng lũy tiến</h3>
<p>Đây là điểm tinh tế đáng học: các công cụ này <strong>không</strong> nhằm hạ giá nhà nói chung. Chúng nhằm phân biệt giữa các loại người mua khác nhau:</p>
<table>
<tr><th>Người mua</th><th>Chịu tác động</th><th>Vì sao</th></tr>
<tr><td>Mua căn đầu tiên để ở</td><td>Rất ít</td><td>Đây là nhu cầu chính đáng cần được bảo vệ</td></tr>
<tr><td>Mua căn thứ hai</td><td>Đáng kể</td><td>Bắt đầu mang tính đầu tư</td></tr>
<tr><td>Mua căn thứ ba trở lên</td><td>Rất nặng</td><td>Rõ ràng là đầu tư/đầu cơ</td></tr>
<tr><td>Người nước ngoài</td><td>Nặng nhất</td><td>Bảo vệ khả năng tiếp cận nhà ở của người dân trong nước</td></tr>
<tr><td>Bán lại trong 1–3 năm</td><td>Rất nặng (SSD)</td><td>Triệt tiêu động cơ lướt sóng</td></tr>
</table>
<div class="tip-box"><strong>Nguyên tắc thiết kế chính sách rất đáng chú ý:</strong> thay vì cấm đoán hoặc hạn chế hành chính, họ <strong>định giá lại hành vi</strong>. Bạn <em>vẫn được</em> mua căn thứ năm và bán lại sau sáu tháng — chỉ là điều đó tốn kém đến mức không còn hấp dẫn. Cách tiếp cận này giữ được cơ chế thị trường trong khi vẫn đạt mục tiêu xã hội.</div>
<h3>Hiệu quả và giới hạn</h3>
<p><strong>Kết quả tích cực:</strong></p>
<ul>
<li>Tỷ lệ sở hữu nhà rất cao — phần lớn hộ gia đình sở hữu nhà.</li>
<li>Đầu cơ ngắn hạn gần như bị loại bỏ khỏi thị trường.</li>
<li>Giá nhà tăng có kiểm soát hơn nhiều so với các đô thị tương đương như Hong Kong.</li>
</ul>
<p><strong>Giới hạn cần thừa nhận:</strong></p>
<ul>
<li>Giá nhà ở thị trường tư nhân vẫn thuộc nhóm cao nhất thế giới.</li>
<li>Chính sách cần điều chỉnh liên tục — đã có rất nhiều đợt điều chỉnh qua các năm, cho thấy đây là cuộc rượt đuổi không có điểm dừng.</li>
<li>Một số biện pháp có tác dụng phụ: thời gian nắm giữ tối thiểu làm giảm tính linh hoạt của người dân khi cần chuyển nơi ở.</li>
<li>Mô hình phụ thuộc vào năng lực thực thi cao và dữ liệu tốt — không phải nước nào cũng có.</li>
</ul>
<div class="warning-box"><strong>Điểm quan trọng nhất để rút ra:</strong> thuế giao dịch lũy tiến theo số căn sở hữu là công cụ nhắm rất trúng — nó gần như không ảnh hưởng tới người mua nhà đầu tiên để ở, nhưng làm việc tích trữ nhiều bất động sản trở nên đắt đỏ. So với các biện pháp hành chính (cấm, hạn mức), nó ít bóp méo thị trường hơn và khó lách hơn. Đây là bài học chính sách đáng chú ý cho các nước đang cân nhắc công cụ điều tiết thị trường bất động sản.</div>`,
        diagram: null
    },

    'de-thue-nha': {
        icon: '🇩🇪', title: 'Đức — Văn Hóa Thuê Nhà', category: 'markets',
        connections: ['thue-vs-mua', 'cho-thue-van-hanh', 'sg-hdb', 'rental-yield'],
        simple: `<h3>🇩🇪 Đức — Văn Hóa Thuê Nhà</h3>
<p>Đức là nền kinh tế lớn nhất châu Âu, nhưng có <strong>tỷ lệ sở hữu nhà thuộc nhóm thấp nhất khu vực</strong> — khoảng một nửa số hộ gia đình đi thuê nhà, và nhiều người thuê suốt đời mà không coi đó là thất bại.</p>
<div class="example-box"><strong>Đây là bằng chứng quan trọng nhất rằng "phải mua nhà mới ổn định" là một chuẩn mực văn hóa, không phải một sự thật kinh tế.</strong> Ở Đức, thuê nhà là lựa chọn hoàn toàn bình thường của tầng lớp trung lưu, kể cả những người thừa sức mua.</div>`,
        detail: `<h3>Vì sao người Đức thuê nhà</h3>
<table>
<tr><th>Yếu tố</th><th>Cơ chế</th></tr>
<tr><td><strong>Bảo vệ người thuê rất mạnh</strong></td><td>Chủ nhà chỉ được chấm dứt hợp đồng trong những trường hợp luật định; hợp đồng thuê thường không thời hạn; người thuê có thể ở nhiều thập kỷ</td></tr>
<tr><td><strong>Kiểm soát mức tăng giá thuê</strong></td><td>Có quy định giới hạn mức tăng giá thuê trong một khoảng thời gian; cơ chế "phanh giá thuê" (Mietpreisbremse) áp dụng ở các khu vực căng thẳng về nhà ở</td></tr>
<tr><td><strong>Bảng giá thuê tham chiếu</strong></td><td>Nhiều thành phố công bố Mietspiegel — bảng giá thuê tham chiếu theo khu vực và loại nhà, làm cơ sở khách quan để xác định mức thuê hợp lý</td></tr>
<tr><td><strong>Chi phí giao dịch mua bán cao</strong></td><td>Thuế chuyển nhượng bất động sản, phí công chứng, phí môi giới cộng lại là khoản đáng kể, làm việc mua đi bán lại kém hấp dẫn</td></tr>
<tr><td><strong>Chính sách nhà ở sau chiến tranh</strong></td><td>Chương trình xây dựng nhà cho thuê quy mô lớn tạo nguồn cung dồi dào và ổn định</td></tr>
</table>
<div class="tip-box"><strong>Điểm mấu chốt: khi thuê nhà an toàn và ổn định, nhu cầu mua nhà giảm mạnh.</strong> Ở nhiều nước, người ta mua nhà một phần vì <em>sợ</em> — sợ bị chủ nhà đuổi, sợ giá thuê tăng vô tội vạ, sợ không có chỗ ở khi về già. Đức đã loại bỏ phần lớn nỗi sợ đó bằng quy định pháp luật, và nhu cầu mua nhà giảm theo một cách tự nhiên.</div>`,
        advanced: `<h3>Hệ quả với thị trường</h3>
<p>Trong nhiều thập kỷ, giá nhà thực (đã điều chỉnh lạm phát) ở Đức khá ổn định, không có các chu kỳ bùng nổ - sụp đổ như ở nhiều nước phát triển khác. Các yếu tố góp phần:</p>
<ul>
<li><strong>Ít đầu cơ</strong> — với chi phí giao dịch cao và giá thuê bị điều tiết, kỳ vọng lợi nhuận nhanh thấp.</li>
<li><strong>Cho vay thận trọng</strong> — yêu cầu vốn tự có cao hơn, thẩm định chặt hơn so với nhiều nước.</li>
<li><strong>Nguồn cung nhà cho thuê dồi dào</strong>, gồm cả nhà của các tổ chức phi lợi nhuận và hợp tác xã nhà ở.</li>
<li><strong>Chính sách nhất quán</strong> qua nhiều thập kỷ.</li>
</ul>
<div class="warning-box"><strong>Nhưng mô hình này cũng có căng thẳng.</strong> Từ khoảng thập niên 2010, giá nhà và giá thuê ở các thành phố lớn như Berlin, Munich, Frankfurt đã tăng mạnh do dòng người đổ về, lãi suất thấp và nguồn cung mới không theo kịp. Điều này dẫn tới các tranh luận chính trị gay gắt về kiểm soát giá thuê, và ở Berlin từng có nỗ lực áp trần giá thuê ở cấp bang nhưng sau đó bị tòa án hiến pháp liên bang tuyên là vượt thẩm quyền của bang.</div>
<h3>Tranh luận về kiểm soát giá thuê</h3>
<p>Đây là một trong những chủ đề gây tranh cãi nhất trong kinh tế học nhà ở, và cả hai phía đều có lập luận thực chất:</p>
<table>
<tr><th>Ủng hộ</th><th>Phản đối</th></tr>
<tr><td>Bảo vệ người thuê khỏi bị đẩy ra khỏi khu vực họ đang sống</td><td>Giảm động cơ xây nhà cho thuê mới, làm nguồn cung dài hạn xấu đi</td></tr>
<tr><td>Tạo ổn định cộng đồng, giảm xáo trộn xã hội</td><td>Chủ nhà giảm đầu tư bảo trì khi lợi nhuận bị giới hạn</td></tr>
<tr><td>Ngăn tăng giá đột biến trong ngắn hạn</td><td>Tạo thị trường hai tầng: người đang thuê được bảo vệ, người mới tìm nhà rất khó</td></tr>
</table>
<div class="tip-box"><strong>Điều rút ra được, độc lập với lập trường chính sách:</strong> mô hình Đức cho thấy <em>chất lượng và độ an toàn của thị trường cho thuê</em> ảnh hưởng trực tiếp tới áp lực phải mua nhà. Ở Việt Nam, thị trường cho thuê phần lớn là hợp đồng ngắn hạn, ít bảo vệ người thuê, giá thuê có thể tăng tùy chủ nhà. Đó là một trong những lý do khiến áp lực "phải mua nhà bằng mọi giá" mạnh đến vậy — và cũng là một hướng chính sách ít được bàn tới so với các chương trình hỗ trợ mua nhà.</div>`,
        diagram: null
    },

    'kr-jeonse': {
        icon: '🇰🇷', title: 'Hàn Quốc — Cơ Chế Jeonse', category: 'markets',
        connections: ['de-thue-nha', 'kr-chinh-sach', 'don-bay', 'cho-thue-van-hanh'],
        simple: `<h3>🇰🇷 Hàn Quốc — Cơ Chế Jeonse</h3>
<p>Hàn Quốc có một hình thức thuê nhà độc đáo gần như không tồn tại ở nơi nào khác: <strong>jeonse</strong> (전세).</p>
<div class="example-box"><strong>Cách hoạt động:</strong> Thay vì trả tiền thuê hàng tháng, người thuê đặt một khoản tiền rất lớn — thường tương đương một tỷ lệ đáng kể giá trị căn nhà — cho chủ nhà. Trong suốt thời hạn thuê (thường 2 năm), người thuê <strong>không trả tiền thuê hàng tháng</strong>. Khi hết hạn, chủ nhà hoàn lại toàn bộ khoản tiền đó.</div>
<p>Nghe như một thỏa thuận tuyệt vời cho cả hai bên. Trên thực tế, đó là một cấu trúc đòn bẩy ẩn có rủi ro rất lớn.</p>`,
        detail: `<h3>Ai được gì trong cơ chế này</h3>
<table>
<tr><th>Bên</th><th>Được gì</th><th>Rủi ro</th></tr>
<tr><td><strong>Người thuê</strong></td><td>Không phải trả tiền thuê hàng tháng; nhận lại toàn bộ tiền khi hết hạn</td><td>Khoản tiền đặt cọc thường là toàn bộ tài sản tích lũy — nếu chủ nhà không trả lại được thì mất trắng</td></tr>
<tr><td><strong>Chủ nhà</strong></td><td>Nhận một khoản vốn lớn không lãi suất để đầu tư hoặc mua thêm bất động sản</td><td>Phải hoàn trả khi hết hạn, bất kể tình hình tài chính lúc đó</td></tr>
</table>
<h3>Vì sao cơ chế này tồn tại</h3>
<p>Jeonse phát triển trong giai đoạn Hàn Quốc tăng trưởng nhanh, khi lãi suất tiền gửi rất cao và tín dụng cho vay mua nhà khó tiếp cận. Trong bối cảnh đó, cơ chế này hợp lý với cả hai bên: chủ nhà gửi khoản tiền đó vào ngân hàng và hưởng lãi cao thay cho tiền thuê; người thuê tránh được chi phí thuê hàng tháng.</p>
<div class="warning-box"><strong>Nhưng nền tảng đó đã biến mất.</strong> Khi lãi suất giảm xuống mức thấp, khoản tiền jeonse không còn sinh lãi đủ để thay thế tiền thuê. Chủ nhà chuyển sang dùng nó theo cách khác — chủ yếu là để <strong>mua thêm bất động sản</strong>. Đây là lúc cơ chế biến thành một dạng đòn bẩy tài chính, và rủi ro tăng vọt.</div>`,
        advanced: `<h3>"Đầu tư khoảng chênh" (gap investment)</h3>
<p>Cơ chế jeonse cho phép một chiến lược đầu tư với vốn tự có rất nhỏ:</p>
<ol>
<li>Tìm một căn hộ giá 1 tỷ won.</li>
<li>Căn đó đang có người thuê jeonse đặt cọc 800 triệu won.</li>
<li>Bạn chỉ cần bỏ ra <strong>200 triệu won</strong> để mua căn hộ — vì bạn tiếp nhận nghĩa vụ hoàn trả khoản 800 triệu cho người thuê.</li>
<li>Bạn sở hữu một tài sản 1 tỷ won với vốn 200 triệu won — đòn bẩy 5 lần.</li>
<li>Lặp lại với nhiều căn hộ.</li>
</ol>
<p>Trong thị trường tăng giá, chiến lược này sinh lợi nhuận rất lớn. Đã có những nhà đầu tư sở hữu hàng chục, thậm chí hàng trăm căn hộ theo cách này.</p>
<div class="warning-box"><strong>Khi giá đảo chiều, cấu trúc này sụp đổ.</strong> Nếu giá căn hộ giảm xuống dưới mức tiền jeonse phải hoàn trả, chủ nhà không thể bán để trả lại tiền cho người thuê, cũng không tìm được người thuê mới sẵn sàng đặt cọc mức cũ. Người thuê — với toàn bộ tài sản nằm trong khoản đặt cọc — có nguy cơ mất trắng.</div>
<h3>Khủng hoảng jeonse 2022–2023</h3>
<p>Khi lãi suất tăng mạnh và giá nhà Hàn Quốc giảm sau giai đoạn tăng nóng, hiện tượng này xảy ra trên diện rộng. Xuất hiện thuật ngữ <strong>"jeonse ngược"</strong> (역전세) — tình trạng giá thuê jeonse mới thấp hơn khoản cọc cũ, khiến chủ nhà không xoay đủ tiền hoàn trả.</p>
<p>Đồng thời bùng nổ các vụ lừa đảo jeonse quy mô lớn: những người sở hữu hàng trăm căn hộ bằng vốn vay, thu tiền cọc rồi mất khả năng hoàn trả, khiến hàng nghìn người thuê — phần lớn là người trẻ — mất toàn bộ tài sản tích lũy. Chính phủ Hàn Quốc đã phải triển khai các biện pháp bảo vệ người thuê và siết quy định.</p>
<div class="tip-box"><strong>Ba bài học tổng quát, áp dụng được ở mọi thị trường:</strong>
<ol>
<li><strong>Một cơ chế tài chính có thể hợp lý trong điều kiện này và nguy hiểm trong điều kiện khác.</strong> Jeonse hoạt động tốt khi lãi suất cao và giá nhà tăng; nó trở thành bẫy khi cả hai điều kiện đảo chiều. Hãy luôn hỏi: <em>cơ chế này dựa trên giả định nào, và điều gì xảy ra nếu giả định đó sai?</em></li>
<li><strong>Đòn bẩy ẩn nguy hiểm hơn đòn bẩy hiện.</strong> Người thuê jeonse không nghĩ mình đang cho vay không bảo đảm, nhưng đó chính xác là điều họ đang làm. Ở Việt Nam, các hình thức "góp vốn", "hợp tác đầu tư", "đặt chỗ" cũng có tính chất tương tự — tiền của bạn đang được người khác sử dụng, với mức bảo vệ thấp hơn nhiều so với bạn tưởng.</li>
<li><strong>Đặt toàn bộ tài sản vào một khoản không được bảo đảm là rủi ro tập trung cực đoan</strong>, dù đối tác có vẻ đáng tin đến đâu.</li>
</ol>
</div>`,
        diagram: null
    },

    'kr-chinh-sach': {
        icon: '🏙️', title: 'Hàn Quốc — Chính Sách Nhà Ở & Gangnam', category: 'markets',
        connections: ['kr-jeonse', 'sg-absd', 'vi-tri', 'price-to-income'],
        simple: `<h3>🏙️ Hàn Quốc — Chính Sách Nhà Ở & Gangnam</h3>
<p>Hàn Quốc là một nghiên cứu tình huống về việc <strong>chính sách nhà ở khó đến mức nào</strong>, ngay cả khi được thực hiện quyết liệt bởi một nhà nước có năng lực cao.</p>
<div class="example-box"><strong>Gangnam</strong> — quận phía nam sông Hàn ở Seoul — là biểu tượng của bất bình đẳng nhà ở tại Hàn Quốc. Giá căn hộ ở đây cao hơn nhiều lần mặt bằng chung, chủ yếu vì tập trung các trường học danh tiếng và các trung tâm luyện thi, trong một xã hội mà cạnh tranh giáo dục cực kỳ gay gắt.</div>`,
        detail: `<h3>Vì sao giá nhà Seoul cao</h3>
<ul>
<li><strong>Tập trung quá mức vào vùng thủ đô.</strong> Một tỷ lệ rất lớn dân số và phần lớn việc làm chất lượng cao của Hàn Quốc tập trung ở vùng Seoul mở rộng.</li>
<li><strong>Yếu tố giáo dục.</strong> Chất lượng trường học và mật độ trung tâm luyện thi gắn chặt với khu vực cư trú, tạo cầu cực mạnh và không co giãn ở một số quận.</li>
<li><strong>Nguồn cung hạn chế</strong> trong khu vực trung tâm, cùng quy định về tái phát triển các khu chung cư cũ.</li>
<li><strong>Cơ chế jeonse</strong> tạo đòn bẩy ẩn, khuếch đại cả chiều lên lẫn chiều xuống.</li>
<li><strong>Bất động sản là kênh tích lũy tài sản chính</strong> của hộ gia đình.</li>
</ul>
<h3>Các đợt can thiệp chính sách</h3>
<p>Chính phủ Hàn Quốc đã triển khai rất nhiều biện pháp qua các nhiệm kỳ, đặc biệt trong giai đoạn 2017–2021 khi giá tăng mạnh:</p>
<ul>
<li>Siết chặt tỷ lệ cho vay (LTV) và tỷ lệ nghĩa vụ nợ trên thu nhập (DTI/DSR), đặc biệt tại các "khu vực quá nóng".</li>
<li>Tăng mạnh thuế đối với người sở hữu nhiều nhà — cả thuế nắm giữ lẫn thuế chuyển nhượng.</li>
<li>Kiểm soát giá bán căn hộ mới tại một số dự án.</li>
<li>Mở rộng bảo vệ người thuê: quyền gia hạn hợp đồng và giới hạn mức tăng giá thuê.</li>
<li>Tăng nguồn cung nhà ở công và phát triển các thành phố mới quanh Seoul.</li>
</ul>
<div class="warning-box"><strong>Kết quả không như kỳ vọng.</strong> Giá nhà tại Seoul vẫn tăng mạnh trong phần lớn giai đoạn này, bất chấp hàng chục đợt biện pháp. Một số tác dụng phụ được ghi nhận: các quy định về hợp đồng thuê góp phần làm giá jeonse tăng vọt, và thuế chuyển nhượng cao khiến người sở hữu nhiều nhà giữ lại thay vì bán ra, làm nguồn cung trên thị trường thứ cấp giảm.</div>`,
        advanced: `<h3>Ba bài học chính sách</h3>
<div class="tip-box">
<p><strong>1. Biện pháp phía cầu không giải quyết được vấn đề phía cung.</strong> Siết tín dụng và tăng thuế làm giảm số người mua được, nhưng không tạo thêm một căn nhà nào. Ở nơi cầu tập trung cực đoan vào một khu vực nhỏ, chỉ tăng cung — hoặc phân tán cầu — mới thay đổi được nền tảng.</p>
<p><strong>2. Mọi biện pháp đều tạo tác dụng phụ.</strong> Bảo vệ người thuê tốt hơn làm giá thuê tăng. Thuế chuyển nhượng cao làm nguồn cung thứ cấp giảm. Không có công cụ nào chỉ có mặt tốt — vấn đề luôn là đánh đổi cái gì lấy cái gì.</p>
<p><strong>3. Vấn đề nhà ở thường là vấn đề của một thứ khác.</strong> Ở Hàn Quốc, giá nhà Gangnam cao vì hệ thống giáo dục cạnh tranh khốc liệt và việc làm tốt tập trung ở Seoul. Không chính sách nhà ở nào giải quyết được điều đó. Muốn hạ nhiệt cầu ở Gangnam, phải làm cho các nơi khác hấp dẫn hơn — về giáo dục và việc làm.</p>
</div>
<h3>Ý nghĩa cho Việt Nam</h3>
<p>Việt Nam có một số điểm tương đồng đáng chú ý với Hàn Quốc:</p>
<ul>
<li><strong>Tập trung quá mức vào hai đô thị lớn</strong> — phần lớn cơ hội việc làm chất lượng cao nằm ở Hà Nội và TP.HCM.</li>
<li><strong>Yếu tố trường học ảnh hưởng tới giá nhà</strong> — tuyến trường và chất lượng trường công tạo chênh lệch giá rõ rệt giữa các khu vực.</li>
<li><strong>Bất động sản là kênh tích lũy tài sản chính</strong> của hộ gia đình.</li>
<li><strong>Áp lực chính trị - xã hội về khả năng mua nhà</strong> của người trẻ đang tăng.</li>
</ul>
<div class="warning-box"><strong>Bài học thực dụng nhất từ Hàn Quốc:</strong> đừng đặt cược vào việc chính sách sẽ hạ giá nhà ở khu vực trung tâm của một đô thị lớn. Hàn Quốc đã thử hàng chục biện pháp mạnh trong nhiều năm với một bộ máy có năng lực thực thi cao, và giá vẫn tăng. Nếu bạn cần một chỗ ở, hãy ra quyết định dựa trên hoàn cảnh tài chính của mình, đừng chờ một sự can thiệp chính sách mà lịch sử cho thấy hiếm khi hiệu quả theo hướng bạn mong đợi.</div>`,
        diagram: null
    },

    'vn-nha-o-xa-hoi': {
        icon: '🏢', title: 'Việt Nam — Nhà Ở Xã Hội', category: 'markets',
        connections: ['vn-phan-khuc', 'sg-hdb', 'at-vienna', 'price-to-income'],
        simple: `<h3>🏢 Việt Nam — Nhà Ở Xã Hội</h3>
<p>Nhà ở xã hội là công cụ chính sách nhằm lấp khoảng trống lớn nhất của thị trường: <strong>nguồn cung mới tập trung ở phân khúc cao cấp, trong khi nhu cầu thực nằm ở phân khúc vừa túi tiền.</strong></p>
<div class="example-box"><strong>Cơ chế cơ bản:</strong> Nhà nước hỗ trợ chủ đầu tư bằng ưu đãi về tiền sử dụng đất, thuế và tín dụng. Đổi lại, chủ đầu tư bị giới hạn mức lợi nhuận định mức, và căn hộ chỉ được bán cho những người thuộc diện đủ điều kiện theo quy định.</div>`,
        detail: `<h3>Các trụ cột của chính sách</h3>
<table>
<tr><th>Công cụ</th><th>Nội dung</th></tr>
<tr><td><strong>Quỹ đất</strong></td><td>Dự án nhà ở thương mại tại đô thị phải dành một tỷ lệ quỹ đất nhất định cho nhà ở xã hội, hoặc thực hiện nghĩa vụ tương đương theo quy định</td></tr>
<tr><td><strong>Ưu đãi cho chủ đầu tư</strong></td><td>Miễn, giảm tiền sử dụng đất; ưu đãi thuế; được vay vốn ưu đãi; được dành một phần diện tích để kinh doanh thương mại</td></tr>
<tr><td><strong>Lợi nhuận định mức</strong></td><td>Lợi nhuận của chủ đầu tư trên phần nhà ở xã hội bị khống chế theo tỷ lệ quy định</td></tr>
<tr><td><strong>Điều kiện với người mua</strong></td><td>Điều kiện về nhà ở (chưa có nhà hoặc nhà chật), về thu nhập, và về nơi cư trú/làm việc</td></tr>
<tr><td><strong>Hạn chế chuyển nhượng</strong></td><td>Có thời gian tối thiểu phải ở trước khi được bán lại, nhằm ngăn đầu cơ</td></tr>
<tr><td><strong>Gói tín dụng ưu đãi</strong></td><td>Các chương trình cho vay lãi suất thấp dành cho người mua và chủ đầu tư nhà ở xã hội</td></tr>
</table>
<div class="warning-box"><strong>Các quy định cụ thể — tỷ lệ quỹ đất, mức lợi nhuận định mức, ngưỡng thu nhập, thời gian hạn chế chuyển nhượng — được quy định trong Luật Nhà ở và các văn bản hướng dẫn, và đã thay đổi qua các lần sửa luật.</strong> Hãy tra cứu quy định hiện hành khi cần con số chính xác cho trường hợp cụ thể.</div>`,
        advanced: `<h3>Vì sao triển khai thực tế luôn chậm hơn mục tiêu</h3>
<p>Đây là điểm đáng phân tích, vì các vướng mắc mang tính cấu trúc chứ không phải do thiếu quyết tâm:</p>
<table>
<tr><th>Vướng mắc</th><th>Cơ chế</th></tr>
<tr><td><strong>Động cơ kinh tế của chủ đầu tư yếu</strong></td><td>Với lợi nhuận bị khống chế, làm nhà ở xã hội kém hấp dẫn hơn nhiều so với dùng cùng quỹ đất làm nhà thương mại. Doanh nghiệp làm vì nghĩa vụ, không vì lợi ích.</td></tr>
<tr><td><strong>Thủ tục phức tạp hơn</strong></td><td>Thêm các bước xác định đối tượng, phê duyệt giá bán, kiểm tra điều kiện người mua — làm vòng đời dự án dài hơn.</td></tr>
<tr><td><strong>Vị trí quỹ đất</strong></td><td>Đất dành cho nhà ở xã hội thường ở xa trung tâm, nơi giá đất thấp — nhưng đó cũng là nơi thiếu việc làm và hạ tầng, làm giảm nhu cầu thực.</td></tr>
<tr><td><strong>Xác định đúng đối tượng khó</strong></td><td>Thu nhập thực của nhiều hộ gia đình cao hơn thu nhập khai báo, làm tiêu chí thu nhập khó áp dụng công bằng.</td></tr>
<tr><td><strong>Vốn ưu đãi không liên tục</strong></td><td>Các gói tín dụng có thời hạn tạo ra đợt sóng rồi tắt, thay vì một dòng vốn ổn định.</td></tr>
</table>
<div class="tip-box"><strong>So sánh với hai mô hình thành công đã nêu trong trang này:</strong>
<ul>
<li><strong>Singapore</strong> giải quyết bài toán vốn cho người mua bằng cơ chế tiết kiệm bắt buộc, và giải quyết bài toán quỹ đất bằng việc nhà nước nắm giữ đất từ rất sớm.</li>
<li><strong>Vienna</strong> giải quyết bài toán bền vững chính trị bằng cách mở rộng đối tượng thụ hưởng tới cả tầng lớp trung lưu, và duy trì một nguồn tài chính ổn định dài hạn.</li>
</ul>
Điểm chung của cả hai: họ không coi nhà ở giá phải chăng là một chương trình từ thiện dành cho nhóm hẹp, mà là <strong>một phần hạ tầng của thành phố</strong>, được cấp vốn liên tục qua nhiều thập kỷ.</div>
<h3>Nếu bạn đang cân nhắc mua nhà ở xã hội</h3>
<ul>
<li><strong>Kiểm tra kỹ điều kiện đủ tiêu chuẩn</strong> trước khi đặt cọc bất cứ khoản nào — hồ sơ bị loại sau khi đã nộp tiền là tình huống khó xử lý.</li>
<li><strong>Nắm rõ thời hạn hạn chế chuyển nhượng.</strong> Đây là ràng buộc thật, ảnh hưởng tới khả năng đổi nhà nếu hoàn cảnh thay đổi.</li>
<li><strong>Đánh giá vị trí như với mọi bất động sản khác</strong> — giá rẻ không bù được cho việc mỗi ngày mất ba giờ đi lại.</li>
<li><strong>Cảnh giác với môi giới nhận "chạy suất"</strong> — đây là dạng rủi ro pháp lý và rủi ro mất tiền rất phổ biến.</li>
</ul>`,
        diagram: null
    },

    'vn-cho-thue': {
        icon: '🔑', title: 'Việt Nam — Thị Trường Cho Thuê', category: 'markets',
        connections: ['de-thue-nha', 'cho-thue-van-hanh', 'rental-yield', 'thue-vs-mua'],
        simple: `<h3>🔑 Việt Nam — Thị Trường Cho Thuê</h3>
<p>Thị trường cho thuê ít được nói tới hơn thị trường mua bán, nhưng nó ảnh hưởng trực tiếp tới một câu hỏi rất lớn: <strong>vì sao áp lực "phải mua nhà bằng mọi giá" ở Việt Nam lại mạnh đến vậy?</strong></p>
<div class="example-box"><strong>Câu trả lời phần lớn nằm ở chất lượng của lựa chọn thay thế.</strong> Khi đi thuê nghĩa là hợp đồng ngắn hạn, giá có thể tăng tùy chủ nhà, và có thể bị đòi nhà bất cứ lúc nào, thì mua nhà không chỉ là quyết định tài chính — nó là cách duy nhất để có sự ổn định.</div>`,
        detail: `<h3>Đặc điểm của thị trường cho thuê Việt Nam</h3>
<table>
<tr><th>Đặc điểm</th><th>Biểu hiện</th><th>So với Đức</th></tr>
<tr><td><strong>Thời hạn hợp đồng</strong></td><td>Thường 6 tháng đến 1 năm</td><td>Hợp đồng thường không thời hạn, người thuê ở hàng thập kỷ</td></tr>
<tr><td><strong>Tăng giá thuê</strong></td><td>Theo thỏa thuận từng kỳ, ít ràng buộc</td><td>Bị giới hạn mức tăng theo quy định</td></tr>
<tr><td><strong>Bảo vệ người thuê</strong></td><td>Ở mức cơ bản theo Bộ luật Dân sự và Luật Nhà ở</td><td>Rất mạnh, chấm dứt hợp đồng chỉ trong trường hợp luật định</td></tr>
<tr><td><strong>Tham chiếu giá</strong></td><td>Không có chỉ số giá thuê chính thức</td><td>Có bảng giá thuê tham chiếu theo khu vực</td></tr>
<tr><td><strong>Mức độ chính thức</strong></td><td>Nhiều giao dịch không hợp đồng đầy đủ, không kê khai</td><td>Chính thức hóa cao</td></tr>
<tr><td><strong>Chủ nhà</strong></td><td>Chủ yếu là cá nhân sở hữu vài căn</td><td>Có cả tổ chức, hợp tác xã nhà ở, công ty quản lý chuyên nghiệp</td></tr>
</table>
<div class="warning-box"><strong>Hệ quả của một thị trường cho thuê kém phát triển:</strong>
<ul>
<li>Người trẻ chịu áp lực mua nhà sớm, thường bằng đòn bẩy cao vượt khả năng.</li>
<li>Nhu cầu mua bị đẩy lên cao hơn nhu cầu ở thực, góp phần đẩy giá.</li>
<li>Sự linh hoạt của lực lượng lao động giảm — người ta ngại chuyển nơi làm việc vì đã "cắm rễ" vào một khoản vay.</li>
<li>Người không đủ điều kiện mua bị kẹt trong tình trạng bấp bênh dài hạn.</li>
</ul>
</div>`,
        advanced: `<h3>Vì sao đầu tư cho thuê ở Việt Nam khó sinh lời</h3>
<p>Ghép các con số từ những chủ điểm khác trong trang này lại:</p>
<ul>
<li>Tỷ suất cho thuê gộp ở nhiều đô thị lớn nằm ở vùng thấp so với lãi suất tiền gửi.</li>
<li>Tỷ suất ròng sau khi trừ kỳ trống, phí quản lý, bảo trì và thuế thường chỉ còn khoảng 60–75% của con số gộp.</li>
<li>Nếu dùng đòn bẩy với lãi vay cao hơn tỷ suất, dòng tiền âm.</li>
</ul>
<div class="tip-box"><strong>Nghĩa là phần lớn nhà đầu tư cho thuê ở Việt Nam thực chất đang cược vào tăng giá, và chấp nhận dòng tiền mỏng hoặc âm trong lúc chờ.</strong> Điều này hoàn toàn có thể hợp lý — nhưng nó là một chiến lược khác hẳn với "đầu tư lấy dòng tiền", và đòi hỏi khả năng chịu đựng khác hẳn. Hãy dùng máy tính ROI ở tab Công cụ để xem con số thật của tài sản bạn đang cân nhắc.</div>
<h3>Nghĩa vụ thuế khi cho thuê</h3>
<p>Cá nhân có doanh thu từ cho thuê tài sản vượt ngưỡng quy định trong năm phải kê khai và nộp thuế theo tỷ lệ trên doanh thu (gồm thuế giá trị gia tăng và thuế thu nhập cá nhân). Dưới ngưỡng đó thì không thuộc diện phải nộp.</p>
<p><em>Ngưỡng doanh thu và tỷ lệ thuế được quy định trong văn bản pháp luật và có thể thay đổi — hãy kiểm tra quy định hiện hành. Khi tính hiệu quả đầu tư, hãy đưa khoản này vào chi phí thay vì bỏ qua.</em></p>
<h3>Hướng chính sách ít được bàn tới</h3>
<div class="warning-box">Phần lớn tranh luận về nhà ở tại Việt Nam tập trung vào việc <em>giúp người dân mua nhà</em> — gói tín dụng ưu đãi, nhà ở xã hội để bán. Kinh nghiệm của Đức và Vienna gợi ý một hướng bổ sung: <strong>làm cho việc đi thuê trở nên an toàn và ổn định</strong>.<br><br>
Nếu người thuê có hợp đồng dài hạn, được bảo vệ khỏi bị đòi nhà tùy tiện, và mức tăng giá thuê có ràng buộc, thì áp lực phải mua nhà bằng mọi giá sẽ giảm một cách tự nhiên — kéo theo cả áp lực lên giá mua. Đây là một đòn bẩy chính sách nhắm vào <em>cầu</em> mà không cần bơm thêm tín dụng.</div>`,
        diagram: null
    },

    'vn-cong-nghiep': {
        icon: '🏭', title: 'Việt Nam — Bất Động Sản Công Nghiệp', category: 'markets',
        connections: ['vn-phan-khuc', 'reit-gian-tiep', 'do-thi-hoa', 'vn-tong-quan'],
        simple: `<h3>🏭 Việt Nam — Bất Động Sản Công Nghiệp</h3>
<p>Đây là phân khúc vận hành theo logic hoàn toàn khác với nhà ở, và nó đáng hiểu ngay cả khi bạn không có ý định đầu tư vào nó — vì nó là chỉ báo tốt cho triển vọng của cả một khu vực.</p>
<div class="example-box"><strong>Khác biệt cốt lõi:</strong> cầu nhà ở đến từ dân số và tín dụng trong nước. Cầu bất động sản công nghiệp đến từ <strong>dòng vốn đầu tư nước ngoài và dịch chuyển chuỗi cung ứng toàn cầu</strong>. Hai động lực này ít liên quan tới nhau, nên hai phân khúc thường lệch pha.</div>`,
        detail: `<h3>Các loại hình chính</h3>
<table>
<tr><th>Loại</th><th>Đặc điểm</th></tr>
<tr><td><strong>Khu công nghiệp</strong></td><td>Chủ đầu tư hạ tầng thuê đất từ nhà nước, đầu tư hạ tầng, cho doanh nghiệp sản xuất thuê lại đất có hạ tầng</td></tr>
<tr><td><strong>Nhà xưởng xây sẵn</strong></td><td>Xây trước rồi cho thuê — phục vụ doanh nghiệp vừa và nhỏ muốn vào hoạt động nhanh</td></tr>
<tr><td><strong>Kho vận, logistics</strong></td><td>Gắn với thương mại điện tử và chuỗi phân phối; nhu cầu tăng theo tiêu dùng nội địa</td></tr>
<tr><td><strong>Nhà ở cho công nhân</strong></td><td>Phân khúc gắn liền, nhu cầu lớn nhưng nguồn cung chính thức còn hạn chế</td></tr>
</table>
<h3>Điều gì điều khiển phân khúc này</h3>
<ul>
<li><strong>Dòng vốn đầu tư trực tiếp nước ngoài</strong> — chỉ báo quan trọng nhất.</li>
<li><strong>Xu hướng đa dạng hóa chuỗi cung ứng</strong> của các tập đoàn đa quốc gia, đặc biệt là xu hướng dịch chuyển một phần sản xuất khỏi Trung Quốc.</li>
<li><strong>Hạ tầng kết nối</strong> — cảng biển, sân bay, đường cao tốc. Một khu công nghiệp cách cảng ba giờ khác hẳn một khu cách cảng một giờ.</li>
<li><strong>Chính sách ưu đãi đầu tư</strong> và thủ tục hành chính của địa phương.</li>
<li><strong>Nguồn lao động</strong> tại chỗ và chi phí nhân công.</li>
<li><strong>Nguồn điện ổn định</strong> — yếu tố ngày càng quan trọng với sản xuất công nghệ cao.</li>
</ul>
<div class="tip-box"><strong>Vì sao người mua nhà ở nên quan tâm:</strong> khu công nghiệp mang việc làm tới. Việc làm mang người tới. Người tới tạo nhu cầu nhà ở thật — loại nhu cầu bền nhất, không phụ thuộc vào kỳ vọng đầu cơ. Một khu vực có khu công nghiệp đang hoạt động tốt và tuyển dụng ổn định là chỉ báo mạnh hơn nhiều so với một quy hoạch hạ tầng chưa triển khai.</div>`,
        advanced: `<h3>Cách tiếp cận phân khúc này</h3>
<p>Rào cản vốn rất cao — đây chủ yếu là sân chơi của doanh nghiệp và quỹ đầu tư. Nhà đầu tư cá nhân tiếp cận chủ yếu qua:</p>
<ul>
<li><strong>Cổ phiếu doanh nghiệp phát triển khu công nghiệp</strong> — nhưng nhớ rằng bạn đang mua doanh nghiệp, với đầy đủ rủi ro quản trị và đòn bẩy, không phải mua bất động sản. Xem chủ điểm về đầu tư gián tiếp.</li>
<li><strong>Nhà ở và dịch vụ ăn theo</strong> — nhà trọ công nhân, nhà ở cho chuyên gia, mặt bằng kinh doanh gần khu công nghiệp. Đây là cách người có vốn vừa phải tham gia gián tiếp vào cùng động lực tăng trưởng.</li>
</ul>
<div class="warning-box"><strong>Rủi ro đặc thù cần cân nhắc:</strong>
<ul>
<li><strong>Phụ thuộc vào một hoặc vài doanh nghiệp lớn.</strong> Nếu nhà máy chính rút đi, cả hệ sinh thái nhà trọ và dịch vụ quanh đó mất khách cùng lúc. Đây là rủi ro tập trung rất thực.</li>
<li><strong>Nhạy với thương mại quốc tế</strong> — thuế quan, căng thẳng địa chính trị, thay đổi chính sách của nước nhập khẩu.</li>
<li><strong>Cạnh tranh khu vực</strong> — các nước ASEAN khác cũng đang cạnh tranh cho cùng dòng vốn.</li>
<li><strong>Tự động hóa</strong> có thể làm giảm số lao động trên mỗi đơn vị sản xuất theo thời gian, làm suy yếu liên kết giữa "có nhà máy" và "có nhiều người ở".</li>
</ul>
</div>
<div class="tip-box"><strong>Câu hỏi kiểm tra khi đánh giá một khu vực có khu công nghiệp:</strong> nhà máy ở đây đã hoạt động ổn định bao lâu, sử dụng bao nhiêu lao động, và nếu doanh nghiệp lớn nhất rời đi thì còn lại gì? Nếu câu trả lời là "còn lại rất ít", bạn đang đầu tư vào một quyết định của một hội đồng quản trị ở nước ngoài, chứ không phải vào một nền kinh tế địa phương.</div>`,
        diagram: null
    },

    'vn-nghi-duong': {
        icon: '🏖️', title: 'Việt Nam — Bất Động Sản Nghỉ Dưỡng & Condotel', category: 'markets',
        connections: ['thoi-han-su-dung', 'phan-khuc-dau-tu', 'bay-lua-dao', 'thanh-khoan'],
        simple: `<h3>🏖️ Việt Nam — Bất Động Sản Nghỉ Dưỡng & Condotel</h3>
<p>Đây là phân khúc đã gây thiệt hại lớn nhất cho nhà đầu tư cá nhân trong thập kỷ qua, và bài học từ nó rất cụ thể.</p>
<div class="warning-box"><strong>Mô hình bán hàng điển hình:</strong> bạn mua một căn hộ khách sạn (condotel) hoặc biệt thự nghỉ dưỡng, giao lại cho chủ đầu tư vận hành cho thuê, và nhận <strong>cam kết lợi nhuận cố định</strong> — thường 8–12%/năm trong 5–10 năm. Nghe rất hấp dẫn so với lãi tiền gửi.</div>
<p>Thực tế đã cho thấy nhiều cam kết loại này không được thực hiện đầy đủ. Vụ việc được biết tới rộng rãi nhất là dự án Cocobay Đà Nẵng, nơi chủ đầu tư công bố dừng chi trả cam kết lợi nhuận vào cuối năm 2019.</p>`,
        detail: `<h3>Ba vấn đề cấu trúc</h3>
<h4>1. Pháp lý</h4>
<p>Nhiều sản phẩm nghỉ dưỡng được xây trên <strong>đất thương mại dịch vụ có thời hạn</strong>, không phải đất ở lâu dài. Hệ quả:</p>
<ul>
<li>Thời hạn sử dụng hữu hạn, ảnh hưởng trực tiếp tới giá trị dài hạn.</li>
<li>Khó hoặc không thể dùng làm tài sản thế chấp với điều kiện tốt.</li>
<li>Quyền của người mua trong việc sử dụng và định đoạt hạn chế hơn so với nhà ở.</li>
<li>Việc cấp giấy chứng nhận cho loại hình này từng là vấn đề kéo dài, và khung pháp lý đã được bổ sung dần qua các văn bản sau này.</li>
</ul>
<h4>2. Kinh tế của cam kết lợi nhuận</h4>
<div class="warning-box"><strong>Hãy đặt ba câu hỏi trước bất kỳ cam kết lợi nhuận nào:</strong>
<ol>
<li><strong>Ai bảo đảm?</strong> Nếu chỉ là cam kết của chính chủ đầu tư mà không có bảo lãnh ngân hàng hay tài sản bảo đảm độc lập, giá trị của nó phụ thuộc hoàn toàn vào việc họ còn tồn tại và còn khả năng chi trả sau 5–10 năm.</li>
<li><strong>Nếu tài sản thực sự sinh lời 10%/năm, tại sao họ bán cho bạn?</strong> Với mức sinh lời đó, tự giữ và vay ngân hàng với lãi suất thấp hơn sẽ có lợi hơn nhiều. Việc họ muốn bán là một thông tin.</li>
<li><strong>Tiền trả cam kết đến từ đâu?</strong> Từ doanh thu vận hành thật, hay từ tiền của những người mua đợt sau? Nếu là vế thứ hai, cấu trúc chỉ tồn tại chừng nào còn bán được hàng.</li>
</ol>
</div>
<h4>3. Thanh khoản</h4>
<p>Đây là phân khúc có thanh khoản kém nhất trong tất cả các loại hình bất động sản. Khi bạn muốn bán, người mua tiềm năng rất ít — vì họ cũng đối mặt với đúng ba vấn đề trên.</p>`,
        advanced: `<h3>Nhu cầu thật vẫn tồn tại — vấn đề là ở cấu trúc sản phẩm</h3>
<p>Cần phân biệt rõ: du lịch Việt Nam có tiềm năng thật, và bất động sản nghỉ dưỡng vận hành tốt là một ngành kinh doanh có thật. Vấn đề không nằm ở ngành, mà ở <strong>cách sản phẩm được cấu trúc và bán cho nhà đầu tư cá nhân</strong>:</p>
<table>
<tr><th>Cấu trúc có vấn đề</th><th>Cấu trúc lành mạnh hơn</th></tr>
<tr><td>Chia nhỏ một khách sạn thành hàng trăm chủ sở hữu cá nhân</td><td>Một chủ sở hữu vận hành, huy động vốn bằng cổ phần hoặc chứng chỉ quỹ</td></tr>
<tr><td>Cam kết lợi nhuận cố định bất kể kết quả kinh doanh</td><td>Chia sẻ doanh thu thực tế, minh bạch báo cáo</td></tr>
<tr><td>Người mua không có quyền kiểm soát vận hành</td><td>Nhà đầu tư có cơ chế giám sát qua quản trị doanh nghiệp</td></tr>
<tr><td>Thanh khoản gần bằng không</td><td>Chứng chỉ quỹ hoặc cổ phiếu giao dịch được</td></tr>
</table>
<div class="tip-box"><strong>Nói cách khác: nếu bạn muốn đầu tư vào du lịch và nghỉ dưỡng, hình thức phù hợp thường là <em>đầu tư vào doanh nghiệp vận hành</em>, chứ không phải mua một phòng khách sạn.</strong> Bạn được thanh khoản, được đa dạng hóa, và được cơ chế giám sát — ba thứ mà mô hình condotel không cho bạn.</div>
<h3>Nếu bạn vẫn cân nhắc mua</h3>
<ul>
<li>☐ Đọc kỹ <strong>loại đất và thời hạn sử dụng</strong> trên giấy tờ pháp lý dự án — đây là mục quan trọng nhất.</li>
<li>☐ Yêu cầu văn bản chứng minh <strong>ai bảo đảm cam kết lợi nhuận</strong> và bằng tài sản gì.</li>
<li>☐ Kiểm tra <strong>lịch sử vận hành</strong> của chủ đầu tư ở các dự án tương tự đã bàn giao — họ đã trả đúng cam kết được bao nhiêu năm?</li>
<li>☐ Tính bài toán tài chính <strong>giả định cam kết lợi nhuận bằng không</strong>. Nếu kịch bản đó không chấp nhận được, đừng mua.</li>
<li>☐ Hỏi rõ <strong>điều gì xảy ra sau khi hết thời hạn cam kết</strong> — đây là câu hỏi mà rất ít người mua đặt ra, và là nơi phần lớn giá trị nằm.</li>
<li>☐ Ước lượng <strong>bạn sẽ bán lại cho ai</strong> nếu cần thoát.</li>
</ul>`,
        diagram: null
    },

    'us-thue-zoning': {
        icon: '🏛️', title: 'Mỹ — Thuế Tài Sản & Quy Hoạch Phân Khu', category: 'markets',
        connections: ['us-tong-quan', 'dat-khan-hiem', 'cung-cau-bds', 'thue-phi-vn'],
        simple: `<h3>🏛️ Mỹ — Thuế Tài Sản & Quy Hoạch Phân Khu</h3>
<p>Hai thể chế này giải thích gần như toàn bộ sự khác biệt giá nhà giữa các thành phố Mỹ, và cả hai đều là bài học chính sách đáng giá.</p>
<div class="example-box"><strong>Nghịch lý cần giải thích:</strong> Houston và San Francisco đều là các đô thị lớn có kinh tế mạnh và dân số tăng. Nhưng giá nhà ở San Francisco cao hơn nhiều lần. Khác biệt không nằm ở nhu cầu — nó nằm ở <strong>khả năng tăng nguồn cung</strong>.</div>`,
        detail: `<h3>Quy hoạch phân khu — công cụ khóa nguồn cung mạnh nhất</h3>
<p>Phần lớn diện tích đất ở tại nhiều thành phố Mỹ bị giới hạn chỉ được xây <strong>nhà đơn lập cho một hộ gia đình</strong>. Trên những lô đất đó, việc xây chung cư, nhà liền kề, hay thậm chí chia một căn nhà thành hai căn hộ đều bị cấm.</p>
<table>
<tr><th>Công cụ hạn chế</th><th>Tác động lên nguồn cung</th></tr>
<tr><td>Chỉ cho phép nhà đơn lập một hộ</td><td>Chặn hoàn toàn việc tăng mật độ trên phần lớn quỹ đất</td></tr>
<tr><td>Diện tích lô tối thiểu lớn</td><td>Giới hạn số nhà trên mỗi hecta</td></tr>
<tr><td>Giới hạn chiều cao</td><td>Chặn việc xây cao lên ở nơi có nhu cầu</td></tr>
<tr><td>Yêu cầu chỗ đỗ xe tối thiểu</td><td>Làm tăng chi phí và giảm số căn xây được</td></tr>
<tr><td>Quy trình phê duyệt tùy nghi</td><td>Cho phép cư dân hiện hữu phản đối và trì hoãn dự án nhiều năm</td></tr>
</table>
<div class="warning-box"><strong>Ai được lợi từ việc khóa nguồn cung?</strong> Chính những người đã sở hữu nhà trong khu vực đó. Nhà của họ tăng giá, và họ là những người đi bỏ phiếu trong các cuộc họp quy hoạch địa phương. Người chịu thiệt — những người muốn chuyển đến sống ở đó — chưa ở đó, nên không có tiếng nói.<br><br>
Đây là một trong những ví dụ rõ nhất về cách <strong>cấu trúc ra quyết định tạo ra kết quả</strong>: khi lợi ích tập trung và có tiếng nói, còn thiệt hại phân tán và không có tiếng nói, chính sách sẽ luôn nghiêng về nhóm thứ nhất.</div>`,
        advanced: `<h3>Thuế tài sản — mặt còn lại của đồng xu</h3>
<p>Thuế tài sản hàng năm ở Mỹ có ba tác dụng đáng chú ý:</p>
<ol>
<li><strong>Tạo chi phí thật cho việc nắm giữ.</strong> Giữ một căn nhà bỏ trống tốn tiền mỗi năm, tạo áp lực đưa nó vào sử dụng.</li>
<li><strong>Tài trợ dịch vụ địa phương</strong>, đặc biệt là trường công. Điều này tạo ra liên kết trực tiếp giữa giá nhà và chất lượng trường học trong khu vực.</li>
<li><strong>Ổn định ngân sách địa phương</strong> — nguồn thu đều đặn hàng năm, không phụ thuộc vào việc có bán được đất hay không.</li>
</ol>
<div class="tip-box"><strong>So sánh với Việt Nam và Trung Quốc:</strong> khi ngân sách địa phương phụ thuộc vào <em>tiền sử dụng đất một lần</em> thay vì thuế tài sản hàng năm, chính quyền có động cơ giữ giá đất cao và liên tục chuyển đổi đất mới — vì đó là nguồn thu. Cơ chế thuế tài sản đảo ngược động cơ đó: giá đất cao đồng nghĩa với thu thuế nhiều hơn <em>mà không cần bán thêm đất</em>.</div>
<h3>Hiệu ứng phụ: khi thuế tài sản bị đóng băng</h3>
<p>California là một ví dụ về hệ quả ngoài ý muốn. Một quy định từ năm 1978 giới hạn mức tăng giá trị tính thuế của bất động sản chừng nào chủ sở hữu không thay đổi. Kết quả:</p>
<ul>
<li>Người mua nhà từ lâu trả thuế trên một giá trị thấp hơn nhiều so với giá thị trường hiện tại.</li>
<li>Người mới mua trả thuế cao hơn nhiều cho một căn nhà tương đương — hai người hàng xóm có thể chênh nhau nhiều lần tiền thuế.</li>
<li><strong>Tạo động cơ mạnh để không bao giờ bán</strong>, làm nguồn cung nhà cũ trên thị trường co lại thêm.</li>
</ul>
<div class="warning-box"><strong>Bài học tổng quát rất đáng nhớ:</strong> mọi chính sách bất động sản đều tạo động cơ, và động cơ đó thường lộ ra theo cách không ai dự tính. Ưu đãi thuế cho đất có công trình ở Nhật khuyến khích giữ lại nhà bỏ hoang. Giới hạn tăng thuế ở California khuyến khích không bán nhà. Thuế chuyển nhượng cao ở Hàn Quốc cũng khuyến khích giữ lại. Khi đánh giá một đề xuất chính sách, câu hỏi hữu ích nhất không phải "nó nhắm tới điều gì" mà là <em>"nó khiến người ta muốn làm gì"</em>.</div>`,
        diagram: null
    },

    'cn-ho-khau': {
        icon: '📋', title: 'Trung Quốc — Hộ Khẩu & Nhu Cầu Nhà Ở', category: 'markets',
        connections: ['cn-tong-quan', 'do-thi-hoa', 'cn-nha-xay-do', 'vi-tri'],
        simple: `<h3>📋 Trung Quốc — Hộ Khẩu & Nhu Cầu Nhà Ở</h3>
<p>Trung Quốc có một thể chế ảnh hưởng sâu tới thị trường nhà ở mà nhiều phân tích bỏ qua: hệ thống <strong>hộ khẩu</strong> (hukou).</p>
<div class="example-box"><strong>Cơ chế:</strong> mỗi người được đăng ký hộ khẩu tại một địa phương, và nhiều quyền lợi công — trường học cho con, y tế, an sinh — gắn với nơi đăng ký đó chứ không phải nơi đang sống. Người lao động nhập cư có thể sống và làm việc ở một thành phố hàng chục năm mà con cái vẫn không được học trường công tại đó.</div>`,
        detail: `<h3>Tác động lên thị trường nhà ở</h3>
<table>
<tr><th>Tác động</th><th>Cơ chế</th></tr>
<tr><td><strong>Tách rời "sống ở đâu" và "thuộc về đâu"</strong></td><td>Hàng trăm triệu người sống ở thành phố nhưng không có hộ khẩu tại đó, tạo một tầng dân cư không được tính đầy đủ vào nhu cầu nhà ở chính thức</td></tr>
<tr><td><strong>Nhà ở gắn với quyền lợi</strong></td><td>Ở một số nơi, sở hữu nhà là điều kiện hoặc lợi thế để có hộ khẩu, biến việc mua nhà thành nhu cầu vượt xa nhu cầu chỗ ở</td></tr>
<tr><td><strong>Nhu cầu bị dồn vào các thành phố lớn</strong></td><td>Hộ khẩu ở thành phố hạng nhất có giá trị rất cao vì chất lượng trường học và dịch vụ, đẩy giá nhà ở đó lên</td></tr>
<tr><td><strong>Cầu ở các thành phố nhỏ yếu hơn con số dân</strong></td><td>Người có hộ khẩu nông thôn vẫn giữ đất ở quê, làm nhu cầu định cư vĩnh viễn ở thành phố nhỏ thấp hơn kỳ vọng</td></tr>
</table>
<div class="warning-box"><strong>Đây là một phần lời giải cho nghịch lý nhà xây dở của Trung Quốc:</strong> nhiều dự án được xây ở các thành phố hạng ba, hạng tư dựa trên dự báo đô thị hóa. Nhưng dòng người thực tế lại dồn về các thành phố lớn, nơi có việc làm và dịch vụ tốt. Kết quả là dư thừa ở nơi này và thiếu hụt ở nơi khác — cùng lúc.</div>`,
        advanced: `<h3>Cải cách và giới hạn của nó</h3>
<p>Trung Quốc đã nới lỏng hệ thống hộ khẩu dần qua nhiều năm, đặc biệt ở các thành phố vừa và nhỏ, nhằm thúc đẩy đô thị hóa và kích cầu nhà ở. Nhưng các thành phố lớn nhất vẫn duy trì hạn chế chặt chẽ, vì việc mở hoàn toàn sẽ tạo áp lực khổng lồ lên hạ tầng và dịch vụ công.</p>
<div class="tip-box"><strong>Đây là một thế lưỡng nan mà nhiều nước đang đô thị hóa đều gặp:</strong> tập trung dân cư vào đô thị lớn tạo hiệu quả kinh tế cao hơn, nhưng cũng tạo áp lực về nhà ở, giao thông và dịch vụ. Hạn chế dòng người thì giảm áp lực nhưng cũng giảm hiệu quả kinh tế và tạo bất công. Không có lời giải đơn giản.</div>
<h3>Liên hệ với Việt Nam</h3>
<p>Việt Nam từng có hệ thống quản lý cư trú với vai trò tương tự trong việc gắn quyền lợi với nơi đăng ký, và đã được cải cách theo hướng đơn giản hóa và chuyển sang quản lý bằng dữ liệu điện tử. Tuy nhiên, cơ chế phân tuyến trường học theo nơi cư trú vẫn tồn tại và có ảnh hưởng thật tới giá nhà ở một số khu vực.</p>
<div class="warning-box"><strong>Điều đáng rút ra:</strong> khi các quyền lợi công thiết yếu — đặc biệt là <em>chỗ học cho con</em> — gắn với địa chỉ nhà, thì nhà ở không còn chỉ là chỗ ở. Nó trở thành tấm vé vào một hệ thống dịch vụ, và giá của nó phản ánh giá trị của tấm vé đó, không chỉ giá trị của bốn bức tường.<br><br>
Đây là lý do các khu vực có trường học tốt luôn đắt hơn ở mọi quốc gia, và là lý do những phân tích chỉ nhìn vào chi phí xây dựng luôn hiểu sai giá nhà.</div>`,
        diagram: null
    },

    'uk-tong-quan': {
        icon: '🇬🇧', title: 'Anh — Leasehold, Thuế Giao Dịch & Vành Đai Xanh', category: 'markets',
        connections: ['freehold-leasehold', 'cung-cau-bds', 'ie-2008', 'sg-hdb'],
        simple: `<h3>🇬🇧 Anh — Leasehold, Thuế Giao Dịch & Vành Đai Xanh</h3>
<p>Anh là ví dụ điển hình của một thị trường nơi <strong>nguồn cung bị hạn chế trong nhiều thập kỷ</strong>, và giá nhà đã tách rời thu nhập tới mức trở thành vấn đề chính trị trung tâm.</p>
<div class="example-box"><strong>Ba đặc điểm định hình:</strong><br>
• <strong>Leasehold</strong> — nhiều căn hộ được bán dưới dạng sở hữu có thời hạn trên đất của người khác, kèm nghĩa vụ tài chính với chủ đất.<br>
• <strong>Vành đai xanh</strong> quanh các đô thị lớn hạn chế mở rộng ra ngoài.<br>
• <strong>Thuế giao dịch lũy tiến</strong> (stamp duty) làm việc mua bán tốn kém và giảm luân chuyển.</div>`,
        detail: `<h3>Vấn đề leasehold</h3>
<p>Ở Anh, mua một căn hộ thường có nghĩa là mua quyền sở hữu <em>có thời hạn</em> (thường vài chục tới hơn trăm năm), trong khi đất thuộc về một chủ sở hữu khác (freeholder). Người mua phải trả:</p>
<ul>
<li><strong>Ground rent</strong> — khoản tiền thuê đất hàng năm.</li>
<li><strong>Service charge</strong> — phí quản lý, do freeholder hoặc đơn vị quản lý ấn định.</li>
<li><strong>Chi phí gia hạn</strong> khi thời hạn còn lại ngắn — có thể rất lớn.</li>
</ul>
<div class="warning-box"><strong>Bê bối ground rent:</strong> một số hợp đồng có điều khoản làm ground rent tăng gấp đôi định kỳ. Qua vài chu kỳ, khoản này trở nên rất lớn, và những căn hộ đó gần như không bán được — ngân hàng từ chối cho vay. Hàng chục nghìn hộ gia đình bị kẹt trong tài sản mà họ không thể bán cũng không thể trả nổi. Đã có các đợt cải cách pháp luật nhằm xử lý vấn đề này.</div>
<div class="tip-box"><strong>Bài học rất cụ thể cho người mua Việt Nam:</strong> luôn đọc kỹ <em>các nghĩa vụ tài chính định kỳ</em> gắn với tài sản, không chỉ giá mua. Một điều khoản làm phí tăng theo cấp số nhân trông vô hại ở năm đầu và trở thành thảm họa ở năm thứ hai mươi. Điều này áp dụng trực tiếp cho phí quản lý chung cư và các cam kết dài hạn khác trong hợp đồng mua bán.</div>
<h3>Vành đai xanh và khủng hoảng nguồn cung</h3>
<p>Các vành đai xanh được lập từ giữa thế kỷ 20 nhằm ngăn đô thị lan rộng vô tổ chức. Chúng đạt được mục tiêu đó — nhưng cũng khóa chặt nguồn cung đất quanh các thành phố lớn trong nhiều thập kỷ, trong khi dân số và số hộ gia đình tiếp tục tăng.</p>
<p>Kết hợp với quy trình cấp phép chậm và tùy nghi, kết quả là số nhà xây mới mỗi năm liên tục thấp hơn nhu cầu hình thành hộ mới trong thời gian dài.</p>`,
        advanced: `<h3>Help to Buy — bài học về chính sách phía cầu</h3>
<p>Để giúp người mua nhà lần đầu, chính phủ Anh triển khai chương trình hỗ trợ cho vay và bảo lãnh khoản vay. Ý định tốt, nhưng nhiều đánh giá cho rằng tác động thực tế là:</p>
<ul>
<li>Người mua vay được nhiều hơn → sẵn sàng trả cao hơn.</li>
<li>Nguồn cung không tăng tương ứng.</li>
<li>Phần lớn khoản hỗ trợ bị <strong>hấp thụ vào giá nhà</strong>, có lợi cho chủ đầu tư nhiều hơn cho người mua.</li>
</ul>
<div class="warning-box"><strong>Đây là nguyên tắc quan trọng nhất trong toàn bộ kinh tế học nhà ở:</strong> trong một thị trường có nguồn cung bị hạn chế, mọi biện pháp làm tăng khả năng chi trả của người mua đều có xu hướng biến thành giá cao hơn, chứ không phải nhiều người sở hữu nhà hơn. Trợ cấp phía cầu mà không mở phía cung là chuyển tiền từ người đóng thuế sang người bán.<br><br>
Cùng logic này áp dụng cho mọi gói tín dụng ưu đãi mua nhà ở bất kỳ nước nào — bao gồm Việt Nam. Hiệu quả của chúng phụ thuộc hoàn toàn vào việc nguồn cung có phản ứng được hay không.</div>
<h3>Thuế giao dịch lũy tiến</h3>
<p>Anh áp thuế giao dịch bất động sản theo bậc lũy tiến, với mức phụ thu cho người mua căn thứ hai trở lên và cho người mua nước ngoài — cơ chế tương tự Singapore.</p>
<table>
<tr><th>Ưu điểm</th><th>Nhược điểm</th></tr>
<tr><td>Nhắm trúng người sở hữu nhiều bất động sản</td><td>Làm giảm luân chuyển: người già ở nhà quá lớn ngại chuyển sang nhà nhỏ vì chi phí giao dịch</td></tr>
<tr><td>Nguồn thu đáng kể</td><td>Nhà bị "khóa" không đến được tay người cần</td></tr>
<tr><td>Hạn chế lướt sóng</td><td>Giảm tính linh hoạt của thị trường lao động</td></tr>
</table>
<div class="tip-box"><strong>Đánh đổi kinh điển:</strong> thuế đánh vào <em>giao dịch</em> làm thị trường kém linh hoạt. Thuế đánh vào <em>việc nắm giữ</em> (thuế tài sản hàng năm) không có nhược điểm đó, nhưng lại khó được chấp nhận về mặt chính trị vì người dân phải trả tiền hàng năm cho tài sản họ đã sở hữu. Đây chính là cuộc tranh luận đang diễn ra ở Việt Nam về thuế bất động sản.</div>`,
        diagram: null
    },

    'au-tong-quan': {
        icon: '🇦🇺', title: 'Úc — Negative Gearing & Thuế Người Nước Ngoài', category: 'markets',
        connections: ['don-bay', 'reit-gian-tiep', 'sg-absd', 'price-to-income'],
        simple: `<h3>🇦🇺 Úc — Negative Gearing & Thuế Người Nước Ngoài</h3>
<p>Úc là ví dụ rõ nhất về việc <strong>chính sách thuế có thể định hình toàn bộ hành vi đầu tư bất động sản của cả một quốc gia</strong>.</p>
<div class="example-box"><strong>Negative gearing</strong> là cơ chế cho phép nhà đầu tư <strong>trừ khoản lỗ từ bất động sản cho thuê vào thu nhập chịu thuế khác</strong> — bao gồm cả tiền lương. Nếu tiền thuê không đủ trả lãi vay và chi phí, phần lỗ đó làm giảm số thuế thu nhập bạn phải nộp.</div>`,
        detail: `<h3>Cơ chế hoạt động thế nào</h3>
<p>Giả sử một nhà đầu tư có thu nhập từ lương và mua một căn hộ cho thuê bằng vốn vay:</p>
<ul>
<li>Tiền thuê thu được: thấp hơn tổng lãi vay cộng chi phí vận hành.</li>
<li>Khoản chênh lệch âm đó được <strong>trừ vào thu nhập chịu thuế từ lương</strong>.</li>
<li>Nhà đầu tư ở khung thuế cao được lợi nhiều nhất, vì mỗi đồng lỗ tiết kiệm được nhiều thuế hơn.</li>
<li>Khi bán, phần lãi vốn được hưởng ưu đãi thuế nếu nắm giữ đủ thời gian quy định.</li>
</ul>
<div class="warning-box"><strong>Hệ quả tổng hợp:</strong> chính sách này khiến việc <em>mua bất động sản có dòng tiền âm và chờ tăng giá</em> trở thành một chiến lược hợp lý về thuế. Nó khuyến khích đúng loại hành vi mà mọi chủ điểm khác trong trang này cảnh báo: dùng đòn bẩy cao, chấp nhận dòng tiền âm, và đặt cược hoàn toàn vào tăng giá.</div>
<h3>Tranh luận chính sách</h3>
<table>
<tr><th>Ủng hộ giữ nguyên</th><th>Ủng hộ cải cách</th></tr>
<tr><td>Khuyến khích tư nhân đầu tư vào nhà cho thuê, tăng nguồn cung cho thuê</td><td>Phần lớn khoản đầu tư đổ vào nhà <em>cũ</em>, không tạo thêm nguồn cung mới</td></tr>
<tr><td>Nhiều nhà đầu tư là người thu nhập trung bình</td><td>Lợi ích thuế tập trung ở nhóm thu nhập cao</td></tr>
<tr><td>Thay đổi đột ngột sẽ gây sốc thị trường</td><td>Nó đẩy giá lên, khiến người mua nhà lần đầu phải cạnh tranh với nhà đầu tư được ưu đãi thuế</td></tr>
</table>
<p>Cải cách chính sách này đã là chủ đề tranh cử lớn ở Úc, và mức độ khó khăn về chính trị cho thấy một điều: <strong>khi một ưu đãi thuế tồn tại đủ lâu, nó được phản ánh vào giá tài sản — và việc bỏ nó đi đồng nghĩa với làm giảm tài sản của hàng triệu cử tri.</strong></p>`,
        advanced: `<h3>Thuế người mua nước ngoài</h3>
<p>Các bang của Úc áp phụ thu thuế giao dịch và thuế đất đối với người mua nước ngoài, cùng với quy định người nước ngoài thường chỉ được mua nhà mới hoặc đất để phát triển, không được mua nhà cũ.</p>
<p>Đây là mô hình tương tự Singapore và Canada. Logic chung: <strong>tách cầu đầu tư quốc tế ra khỏi cầu ở thực trong nước, và bảo vệ nguồn cung nhà hiện hữu cho người dân.</strong></p>
<div class="tip-box"><strong>Điểm thiết kế thông minh của quy định "chỉ được mua nhà mới":</strong> nó chuyển dòng vốn nước ngoài vào việc <em>tạo thêm nguồn cung</em> thay vì cạnh tranh với người dân trên nguồn cung sẵn có. Vốn ngoại vẫn được chào đón, nhưng phải đi kèm với việc xây thêm nhà. Đây là một cách xử lý tinh tế hơn nhiều so với cấm hoàn toàn.</div>
<h3>Ba vấn đề khác đáng biết</h3>
<ul>
<li><strong>Nợ hộ gia đình rất cao.</strong> Úc thuộc nhóm có tỷ lệ nợ hộ gia đình trên thu nhập cao nhất thế giới, phần lớn là nợ vay mua nhà. Điều này làm nền kinh tế rất nhạy với lãi suất.</li>
<li><strong>Lãi suất chủ yếu thả nổi</strong> — giống Việt Nam hơn là giống Mỹ. Nghĩa là mỗi đợt tăng lãi suất truyền ngay vào ngân sách hộ gia đình.</li>
<li><strong>Vấn đề chất lượng chung cư.</strong> Một số tòa nhà cao tầng xây trong giai đoạn bùng nổ bộc lộ lỗi kết cấu nghiêm trọng sau khi bàn giao, gây thiệt hại lớn cho cư dân và làm giảm niềm tin vào phân khúc căn hộ mới.</li>
</ul>
<div class="warning-box"><strong>Điểm cuối này đáng chú ý với người mua căn hộ ở Việt Nam:</strong> khi thị trường bùng nổ, tốc độ xây dựng tăng, và áp lực chi phí lớn, chất lượng thi công là thứ dễ bị hy sinh nhất — vì lỗi chỉ lộ ra sau nhiều năm, khi chủ đầu tư đã bán xong và rút. Lịch sử bàn giao và uy tín của chủ đầu tư không phải là chuyện hình thức; nó là thứ bảo vệ bạn khỏi một khoản chi phí mà bạn không thể dự trù được.</div>`,
        diagram: null
    },

    'th-tong-quan': {
        icon: '🇹🇭', title: 'Thái Lan — Người Nước Ngoài Mua Nhà Ở ASEAN', category: 'markets',
        connections: ['th-1997', 'freehold-leasehold', 'ae-tong-quan', 'vn-nghi-duong'],
        simple: `<h3>🇹🇭 Thái Lan — Người Nước Ngoài Mua Nhà Ở ASEAN</h3>
<p>Thái Lan là thị trường trong khu vực được người Việt quan tâm nhiều nhất khi nghĩ tới đầu tư bất động sản nước ngoài, nên đáng hiểu rõ luật chơi ở đó.</p>
<div class="warning-box"><strong>Quy tắc nền tảng:</strong> người nước ngoài <strong>không được sở hữu đất</strong> tại Thái Lan. Họ chỉ được sở hữu <strong>căn hộ chung cư</strong>, và tổng phần sở hữu của người nước ngoài trong một tòa nhà bị giới hạn ở mức <strong>49% diện tích sàn</strong>.</div>
<p>Nghĩa là biệt thự, nhà phố, đất nền — những thứ hay xuất hiện trong quảng cáo đầu tư — đều không thể sở hữu trực tiếp dưới tên người nước ngoài.</p>`,
        detail: `<h3>Các hình thức người nước ngoài thường được chào</h3>
<table>
<tr><th>Hình thức</th><th>Bản chất</th><th>Rủi ro</th></tr>
<tr><td><strong>Mua căn hộ trong hạn mức 49%</strong></td><td>Sở hữu hợp pháp, có giấy tờ đứng tên</td><td>Thấp nhất — đây là con đường chính danh</td></tr>
<tr><td><strong>Thuê đất dài hạn</strong></td><td>Hợp đồng thuê có thời hạn theo quy định, có thể thỏa thuận gia hạn</td><td>Trung bình — việc gia hạn phụ thuộc vào các yếu tố ngoài tầm kiểm soát của bạn</td></tr>
<tr><td><strong>Lập công ty Thái để đứng tên</strong></td><td>Công ty có cổ đông Thái nắm đa số đứng tên mua đất</td><td><strong>Cao.</strong> Nếu công ty được lập chỉ nhằm lách quy định sở hữu đất, cấu trúc này có rủi ro pháp lý nghiêm trọng</td></tr>
<tr><td><strong>Nhờ người bản địa đứng tên</strong></td><td>Không có cơ sở pháp lý bảo vệ bạn</td><td><strong>Rất cao.</strong> Bạn không có quyền gì nếu tranh chấp</td></tr>
</table>
<div class="warning-box"><strong>Nguyên tắc chung khi mua bất động sản ở nước ngoài:</strong> nếu cách duy nhất để sở hữu là một cấu trúc vòng vèo nhằm lách quy định, thì đó không phải là sở hữu — đó là một thỏa thuận phụ thuộc vào việc không ai xem xét kỹ. Bạn đang gánh rủi ro pháp lý ở một quốc gia mà bạn không hiểu hệ thống tư pháp, bằng một ngôn ngữ bạn không đọc được hợp đồng.</div>`,
        advanced: `<h3>So sánh quy định với người nước ngoài trong khu vực</h3>
<table>
<tr><th>Nước</th><th>Người nước ngoài được gì</th></tr>
<tr><td><strong>Việt Nam</strong></td><td>Mua nhà ở trong dự án nhà ở thương mại; giới hạn 30% số căn trong một tòa chung cư; thời hạn sở hữu 50 năm, được xem xét gia hạn</td></tr>
<tr><td><strong>Thái Lan</strong></td><td>Chỉ căn hộ, giới hạn 49% diện tích sàn của tòa nhà; không được sở hữu đất</td></tr>
<tr><td><strong>Singapore</strong></td><td>Được mua nhưng chịu thuế trước bạ bổ sung rất cao; nhà đất thấp tầng bị hạn chế mạnh</td></tr>
<tr><td><strong>Malaysia</strong></td><td>Được mua với ngưỡng giá tối thiểu, khác nhau theo bang</td></tr>
<tr><td><strong>Indonesia, Philippines</strong></td><td>Hạn chế đáng kể với sở hữu đất; căn hộ có điều kiện</td></tr>
</table>
<div class="tip-box"><strong>Điểm chung của cả khu vực:</strong> gần như mọi nước ASEAN đều bảo vệ quyền sở hữu đất cho công dân, và chỉ mở cửa ở mức độ nhất định cho căn hộ. Việt Nam nằm ở mức tương đối chặt trong nhóm này — cùng với Thái Lan và Singapore.</div>
<h3>Ba câu hỏi trước khi mua bất động sản ở nước ngoài</h3>
<ol>
<li><strong>Tôi thực sự sở hữu cái gì, và luật nước đó bảo vệ tôi tới đâu?</strong> Đọc quy định gốc, không đọc tờ rơi bán hàng.</li>
<li><strong>Tôi bán lại cho ai?</strong> Nếu thị trường thứ cấp chủ yếu là người nước ngoài khác, thanh khoản của bạn phụ thuộc vào dòng vốn quốc tế — thứ có thể biến mất rất nhanh.</li>
<li><strong>Rủi ro tỷ giá là bao nhiêu?</strong> Bạn kiếm tiền bằng đồng Việt Nam và nắm tài sản bằng đồng tiền khác. Nếu bạn vay để mua, hãy đọc lại chủ điểm về Thái Lan 1997 — đó chính xác là cơ chế đã gây ra khủng hoảng.</li>
</ol>
<div class="warning-box"><strong>Còn một câu hỏi ít ai đặt ra:</strong> nếu có tranh chấp, bạn kiện ở đâu, bằng ngôn ngữ nào, với luật sư nào, và mất bao lâu? Chi phí và độ khó của việc bảo vệ quyền lợi ở nước ngoài thường lớn hơn nhiều so với hình dung — và nó không xuất hiện trong bất kỳ bảng tính lợi nhuận nào.</div>`,
        diagram: null
    },

    'ae-tong-quan': {
        icon: '🇦🇪', title: 'UAE / Dubai — Không Thuế Và Chu Kỳ Cực Đoan', category: 'markets',
        connections: ['th-tong-quan', 'chu-ky-bds', 'thue-phi-vn', 'vn-nghi-duong'],
        simple: `<h3>🇦🇪 UAE / Dubai — Không Thuế Và Chu Kỳ Cực Đoan</h3>
<p>Dubai là một thí nghiệm thú vị: điều gì xảy ra với thị trường bất động sản khi <strong>gần như không có thuế</strong> và cửa mở rộng cho vốn quốc tế?</p>
<div class="example-box"><strong>Đặc điểm:</strong> không thuế thu nhập cá nhân, không thuế tài sản hàng năm theo cách thông thường, người nước ngoài được sở hữu vĩnh viễn (freehold) trong các khu vực được chỉ định từ đầu những năm 2000, và có chương trình thị thực dài hạn gắn với mức đầu tư bất động sản nhất định.</div>
<p>Kết quả là một thị trường có <strong>biên độ chu kỳ lớn hơn hầu hết mọi nơi khác</strong>.</p>`,
        detail: `<h3>Lịch sử các chu kỳ</h3>
<table>
<tr><th>Giai đoạn</th><th>Điều gì xảy ra</th></tr>
<tr><td><strong>2002–2008</strong></td><td>Mở cửa sở hữu cho người nước ngoài, bùng nổ xây dựng quy mô khổng lồ, dòng vốn quốc tế đổ vào, giá tăng rất mạnh</td></tr>
<tr><td><strong>2009</strong></td><td>Khủng hoảng tài chính toàn cầu chạm tới. Giá sụt rất sâu. Nakheel — tập đoàn phát triển lớn — gặp khủng hoảng nợ; Abu Dhabi phải hỗ trợ tài chính. Nhiều dự án dừng lại.</td></tr>
<tr><td><strong>2010s</strong></td><td>Phục hồi rồi lại điều chỉnh nhiều lần; nguồn cung mới liên tục lớn</td></tr>
<tr><td><strong>Sau 2020</strong></td><td>Đợt tăng mạnh mới, thúc đẩy bởi chính sách thị thực dài hạn, dòng người di cư và dòng vốn quốc tế</td></tr>
</table>
<div class="warning-box"><strong>Vì sao biên độ chu kỳ lớn đến vậy:</strong>
<ul>
<li><strong>Cầu chủ yếu là quốc tế và mang tính đầu tư</strong>, không phải nhu cầu ở thực của dân số bản địa — nên nó có thể biến mất rất nhanh khi tâm lý toàn cầu đổi chiều.</li>
<li><strong>Nguồn cung phản ứng rất nhanh</strong> so với các nước khác — đất sẵn, thủ tục nhanh, năng lực xây dựng lớn. Điều này tốt cho khả năng chi trả nhưng làm dư cung dễ xảy ra.</li>
<li><strong>Không có thuế nắm giữ</strong> nghĩa là không có lực kìm hãm việc đầu cơ.</li>
<li><strong>Dân số phần lớn là người nước ngoài với thị thực gắn công việc</strong> — khi kinh tế yếu, người ta rời đi, và cầu nhà ở giảm theo cách mà một nước có dân bản địa đông không gặp phải.</li>
</ul>
</div>`,
        advanced: `<h3>Bài học đối chiếu: thuế và sự ổn định</h3>
<p>Đặt Dubai cạnh Singapore cho một so sánh rất rõ:</p>
<table>
<tr><th></th><th>Dubai</th><th>Singapore</th></tr>
<tr><td>Thuế với người mua nước ngoài</td><td>Rất thấp</td><td>Rất cao (ABSD)</td></tr>
<tr><td>Thuế nắm giữ hàng năm</td><td>Gần như không có</td><td>Có thuế bất động sản</td></tr>
<tr><td>Nguồn cung</td><td>Phản ứng nhanh, đôi khi dư thừa</td><td>Được điều tiết chủ động</td></tr>
<tr><td>Nhà ở công</td><td>Không đáng kể</td><td>Chiếm đa số</td></tr>
<tr><td>Biên độ biến động giá</td><td>Rất lớn</td><td>Được kiểm soát</td></tr>
</table>
<div class="tip-box"><strong>Không có mô hình nào "đúng" — chúng phục vụ mục tiêu khác nhau.</strong> Dubai tối ưu cho việc thu hút vốn và người tài quốc tế, chấp nhận biến động. Singapore tối ưu cho việc bảo đảm nhà ở cho công dân, chấp nhận can thiệp sâu vào thị trường. Điều đáng học là <em>mối liên hệ nhất quán</em>: càng ít thuế nắm giữ và càng mở cửa cho vốn đầu cơ, biên độ chu kỳ càng lớn.</div>
<h3>Nếu bạn cân nhắc đầu tư ở đó</h3>
<ul>
<li><strong>Hiểu rằng bạn đang mua vào một thị trường có chu kỳ mạnh</strong> — thời điểm vào quan trọng hơn nhiều so với thị trường ổn định.</li>
<li><strong>Kiểm tra nguồn cung sắp bàn giao</strong> trong khu vực. Đây là thị trường mà nguồn cung mới có thể rất lớn.</li>
<li><strong>Mua bán trên giấy (off-plan) rất phổ biến</strong> — có cơ chế tài khoản ký quỹ để bảo vệ người mua, nhưng hãy xác minh dự án cụ thể có tuân thủ hay không.</li>
<li><strong>Tính rủi ro tỷ giá và chi phí chuyển tiền quốc tế</strong>, cùng nghĩa vụ tuân thủ quy định về đầu tư ra nước ngoài của Việt Nam.</li>
<li><strong>Đừng để yếu tố thị thực chi phối quyết định đầu tư.</strong> Nếu bạn cần thị thực, hãy tính giá trị của nó riêng — đừng để nó biện minh cho một khoản đầu tư mà bản thân nó không hợp lý.</li>
</ul>`,
        diagram: null
    },

    'de-berlin': {
        icon: '🏙️', title: 'Đức — Berlin Và Giới Hạn Của Kiểm Soát Giá Thuê', category: 'markets',
        connections: ['de-thue-nha', 'vn-cho-thue', 'kr-chinh-sach', 'at-vienna'],
        simple: `<h3>🏙️ Đức — Berlin Và Giới Hạn Của Kiểm Soát Giá Thuê</h3>
<p>Berlin trong thập kỷ qua là phòng thí nghiệm sống về câu hỏi khó nhất trong chính sách nhà ở: <strong>kiểm soát giá thuê có hiệu quả không?</strong></p>
<div class="example-box"><strong>Bối cảnh:</strong> Berlin từng là thành phố lớn có giá thuê rẻ bất thường ở châu Âu. Từ khoảng thập niên 2010, dòng người đổ về mạnh, kinh tế khởi sắc, lãi suất thấp và nguồn cung không theo kịp. Giá thuê tăng rất nhanh, gây áp lực xã hội lớn ở một thành phố mà đa số dân đi thuê nhà.</div>`,
        detail: `<h3>Hai biện pháp và kết cục của chúng</h3>
<h4>1. Mietendeckel — trần giá thuê của bang Berlin</h4>
<p>Năm 2020, bang Berlin ban hành quy định đóng băng và áp trần giá thuê cho phần lớn nhà ở trong thành phố. Đây là biện pháp rất mạnh.</p>
<p>Năm 2021, <strong>Tòa án Hiến pháp Liên bang tuyên quy định này vô hiệu</strong> — không phải vì nội dung sai, mà vì <em>bang Berlin không có thẩm quyền</em> ban hành: lĩnh vực này thuộc thẩm quyền lập pháp liên bang. Những người thuê đã hưởng giá giảm phải trả bù phần chênh lệch.</p>
<h4>2. Trưng cầu dân ý về quốc hữu hóa</h4>
<p>Tháng 9/2021, một cuộc trưng cầu dân ý ở Berlin đề xuất thu hồi và chuyển về sở hữu công các danh mục nhà cho thuê lớn của những công ty sở hữu trên một quy mô nhất định. <strong>Đề xuất được đa số cử tri ủng hộ</strong> (khoảng 59%), nhưng kết quả mang tính khuyến nghị, không tự động có hiệu lực pháp lý, và việc triển khai vấp phải các vấn đề pháp lý và tài chính rất lớn.</p>
<div class="warning-box"><strong>Điều đáng chú ý về mặt chính trị:</strong> ở một trong những nền kinh tế thị trường phát triển nhất thế giới, đa số cử tri của thủ đô đã bỏ phiếu ủng hộ quốc hữu hóa nhà cho thuê. Đó là chỉ dấu về mức độ nghiêm trọng mà vấn đề nhà ở có thể đạt tới về mặt xã hội, và về việc nó có thể đẩy tranh luận chính trị đi xa tới đâu.</div>`,
        advanced: `<h3>Bằng chứng về kiểm soát giá thuê</h3>
<p>Đây là một trong số ít chủ đề mà giới kinh tế học tương đối đồng thuận về <em>tác dụng phụ</em>, dù vẫn tranh luận về đánh đổi tổng thể:</p>
<table>
<tr><th>Tác dụng ngắn hạn</th><th>Tác dụng dài hạn</th></tr>
<tr><td>Người đang thuê được bảo vệ khỏi tăng giá — lợi ích thật và tức thời</td><td>Nguồn cung cho thuê co lại: chủ nhà chuyển sang bán, sang cho thuê ngắn ngày, hoặc rút khỏi thị trường</td></tr>
<tr><td>Giảm xáo trộn cộng đồng</td><td>Đầu tư bảo trì giảm khi lợi nhuận bị giới hạn</td></tr>
<tr><td>Giảm áp lực chính trị</td><td>Thị trường hai tầng: người đang thuê được bảo vệ, người mới tìm nhà rất khó và phải trả giá cao hơn</td></tr>
<tr><td></td><td>Giảm động cơ xây nhà cho thuê mới</td></tr>
</table>
<div class="tip-box"><strong>Cách đọc bằng chứng này cho công bằng:</strong> kiểm soát giá thuê chuyển lợi ích từ chủ nhà sang người thuê <em>hiện tại</em>, với cái giá là nguồn cung <em>tương lai</em>. Đó là một đánh đổi thật giữa các nhóm người và giữa các thời điểm, không phải một sai lầm ngu ngốc. Câu hỏi chính sách đúng không phải "tốt hay xấu" mà là "chúng ta ưu tiên ai, và ta bù đắp cho phía còn lại bằng cách nào".<br><br>
Vienna cho thấy cách bù đắp hiệu quả nhất: <strong>song song với việc điều tiết giá, nhà nước trực tiếp tạo ra nguồn cung</strong>. Kiểm soát giá mà không tăng cung thì chỉ chia lại một chiếc bánh đang nhỏ đi.</div>
<h3>Liên hệ với Việt Nam</h3>
<div class="warning-box">Việt Nam hiện gần như không có kiểm soát giá thuê, và thị trường cho thuê chủ yếu là hợp đồng ngắn hạn giữa cá nhân với cá nhân. Kinh nghiệm Berlin gợi ý hai điều nếu vấn đề này được đặt ra trong tương lai:
<ol>
<li><strong>Bảo vệ tính ổn định của hợp đồng thuê</strong> (thời hạn dài hơn, điều kiện chấm dứt rõ ràng, mức tăng có ràng buộc và dự đoán được) thường ít gây méo mó hơn so với áp trần giá cứng — nó cho người thuê sự an tâm mà không xóa bỏ động cơ đầu tư.</li>
<li><strong>Mọi biện pháp phía cầu đều cần đi kèm nỗ lực phía cung.</strong> Đây là kết luận lặp lại ở Anh, Hàn Quốc, Berlin, và ở mọi thị trường trong trang này.</li>
</ol>
</div>`,
        diagram: null
    }
};
