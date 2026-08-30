// Bất Động Sản - Case study & Lịch sử
const reCasesData = {
    'vn-2007-2013': {
        icon: '📉', title: 'Việt Nam — Chu Kỳ 2007–2013', category: 'cases',
        connections: ['chu-ky-bds', 'tin-dung-gia-nha', 'vn-sot-dat', 'vn-2021-2023'],
        simple: `<h3>📉 Việt Nam — Chu Kỳ 2007–2013</h3>
<p>Đây là chu kỳ bùng nổ và đóng băng đầy đủ đầu tiên của thị trường bất động sản Việt Nam thời kỳ hiện đại, và nó chứa gần như mọi bài học mà các chu kỳ sau lặp lại.</p>
<div class="example-box"><strong>Tóm tắt:</strong> Tín dụng bùng nổ và dòng vốn đổ vào sau khi Việt Nam gia nhập WTO đẩy giá nhà đất tăng rất mạnh trong 2007. Lạm phát cao buộc thắt chặt tiền tệ, cộng với khủng hoảng tài chính toàn cầu, làm thị trường đảo chiều. Sau một đợt phục hồi ngắn nhờ gói kích thích 2009–2010, thị trường rơi vào giai đoạn đóng băng kéo dài tới khoảng 2013.</div>`,
        detail: `<h3>Diễn biến theo giai đoạn</h3>
<table>
<tr><th>Giai đoạn</th><th>Điều gì xảy ra</th></tr>
<tr><td><strong>2006–2007: Bùng nổ</strong></td><td>Việt Nam gia nhập WTO, dòng vốn đầu tư nước ngoài tăng mạnh, thị trường chứng khoán bùng nổ rồi lan sang bất động sản. Tăng trưởng tín dụng ở mức rất cao. Giá nhà đất tại các đô thị lớn tăng nhiều lần trong thời gian ngắn.</td></tr>
<tr><td><strong>2008: Đảo chiều</strong></td><td>Lạm phát tăng vọt buộc phải thắt chặt tiền tệ mạnh. Lãi suất tăng cao. Khủng hoảng tài chính toàn cầu bùng nổ. Thị trường bất động sản mất thanh khoản nhanh chóng.</td></tr>
<tr><td><strong>2009–2010: Phục hồi giả</strong></td><td>Gói kích thích kinh tế và hỗ trợ lãi suất tạo một đợt phục hồi. Nhiều chủ đầu tư mở rộng trở lại, khởi công hàng loạt dự án mới.</td></tr>
<tr><td><strong>2011–2013: Đóng băng</strong></td><td>Lạm phát quay lại buộc thắt chặt lần nữa. Thị trường đóng băng sâu. Hàng tồn kho bất động sản rất lớn. Nợ xấu ngân hàng — phần lớn có tài sản bảo đảm là bất động sản — trở thành vấn đề của cả hệ thống. Nhiều dự án dừng thi công, nhiều doanh nghiệp phá sản.</td></tr>
<tr><td><strong>2013–2014: Xử lý</strong></td><td>Công ty Quản lý tài sản (VAMC) được thành lập để xử lý nợ xấu. Gói tín dụng ưu đãi cho nhà ở xã hội được triển khai. Thị trường bắt đầu phục hồi từ phân khúc bình dân.</td></tr>
</table>
<div class="warning-box"><strong>Đặc điểm đáng chú ý nhất của chu kỳ này: giai đoạn phục hồi 2009–2010 đã đánh lừa rất nhiều người.</strong> Nó khiến các chủ đầu tư tin rằng đợt suy giảm 2008 đã qua và mở rộng mạnh trở lại — đúng lúc trước khi cú siết thứ hai ập đến. Những người vay để mở rộng trong giai đoạn này chịu thiệt hại nặng nhất.</div>`,
        advanced: `<h3>Vì sao chu kỳ này kéo dài đến vậy</h3>
<ul>
<li><strong>Nợ xấu không được xử lý nhanh.</strong> Ngân hàng ôm tài sản bảo đảm là bất động sản đã mất giá, không muốn ghi nhận lỗ, nên trì hoãn xử lý. Vốn bị kẹt trong tài sản không sinh lời, hạn chế khả năng cho vay mới.</li>
<li><strong>Cấu trúc nguồn cung lệch.</strong> Hàng tồn kho tập trung ở phân khúc cao cấp, trong khi nhu cầu thực nằm ở phân khúc bình dân. Nguồn cung dư thừa và nhu cầu chưa đáp ứng cùng tồn tại.</li>
<li><strong>Đòn bẩy quá cao ở cả hai phía.</strong> Chủ đầu tư vay để mua đất; người mua vay để đầu cơ. Khi giá giảm, cả hai cùng gặp khó.</li>
<li><strong>Niềm tin mất lâu hơn tiền.</strong> Ngay cả khi lãi suất giảm trở lại, người mua vẫn e ngại vì đã chứng kiến nhiều dự án đắp chiếu.</li>
</ul>
<div class="tip-box"><strong>Điều đã hiệu quả trong việc phá băng:</strong> chuyển hướng nguồn cung sang phân khúc mà nhu cầu thực nằm ở đó. Các chính sách hỗ trợ nhà ở xã hội và việc cho phép chia nhỏ căn hộ diện tích lớn thành căn nhỏ hơn đã giúp giải phóng một phần hàng tồn kho. Bài học: khi thị trường đóng băng, giải pháp không nằm ở việc bơm thêm tiền vào phân khúc dư thừa, mà ở việc đưa nguồn cung về đúng nơi có cầu.</div>
<h3>Bốn dấu hiệu cảnh báo đã xuất hiện từ trước</h3>
<div class="warning-box">
<ol>
<li><strong>Tăng trưởng tín dụng vượt xa tăng trưởng GDP</strong> trong nhiều năm liên tiếp.</li>
<li><strong>Giá tăng nhanh hơn nhiều so với thu nhập và giá thuê</strong> — dấu hiệu định giá dựa trên kỳ vọng.</li>
<li><strong>Số người không chuyên chuyển sang làm môi giới và đầu tư bất động sản tăng mạnh.</strong></li>
<li><strong>Lạm phát tăng</strong> — báo hiệu chính sách tiền tệ sẽ phải thắt chặt, và thắt chặt tiền tệ luôn là thứ kết thúc chu kỳ bất động sản.</li>
</ol>
<p>Cả bốn dấu hiệu này đều quan sát được từ dữ liệu công khai, trước khi thị trường đảo chiều.</p>
</div>`,
        diagram: null
    },

    'vn-2021-2023': {
        icon: '🌪️', title: 'Việt Nam — Chu Kỳ 2021–2023', category: 'cases',
        connections: ['vn-2007-2013', 'vn-chinh-sach-tin-dung', 'vn-sot-dat', 'reit-gian-tiep'],
        simple: `<h3>🌪️ Việt Nam — Chu Kỳ 2021–2023</h3>
<p>Chu kỳ gần nhất, và nó lặp lại kịch bản 2007–2013 với một điểm mới quan trọng: <strong>vai trò của thị trường trái phiếu doanh nghiệp.</strong></p>
<div class="example-box"><strong>Tóm tắt:</strong> Lãi suất thấp trong giai đoạn dịch bệnh cùng lượng tiền dồi dào tạo ra sốt đất trên diện rộng ở nhiều tỉnh thành trong 2021 và đầu 2022. Cuối 2022, việc siết chặt tín dụng bất động sản cộng với khủng hoảng niềm tin trên thị trường trái phiếu doanh nghiệp làm thanh khoản biến mất gần như đồng loạt.</div>`,
        detail: `<h3>Diễn biến</h3>
<table>
<tr><th>Giai đoạn</th><th>Điều gì xảy ra</th></tr>
<tr><td><strong>2020–2021</strong></td><td>Lãi suất giảm sâu để hỗ trợ nền kinh tế trong dịch bệnh. Tiền rẻ và dồi dào. Kênh đầu tư thay thế hạn chế. Dòng tiền chảy mạnh vào chứng khoán và bất động sản.</td></tr>
<tr><td><strong>2021 – đầu 2022</strong></td><td>Sốt đất lan rộng ở rất nhiều địa phương, gắn với thông tin quy hoạch hạ tầng và nâng cấp đơn vị hành chính. Giá đất nền nhiều nơi tăng gấp nhiều lần trong thời gian ngắn. Thị trường trái phiếu doanh nghiệp bất động sản phát triển rất nhanh.</td></tr>
<tr><td><strong>Giữa 2022</strong></td><td>Tín dụng bất động sản bị kiểm soát chặt hơn. Quy định phát hành trái phiếu riêng lẻ được siết. Một số vụ việc lớn liên quan tới phát hành trái phiếu bị xử lý.</td></tr>
<tr><td><strong>Cuối 2022</strong></td><td>Khủng hoảng niềm tin trên thị trường trái phiếu. Nhà đầu tư đồng loạt yêu cầu mua lại trước hạn. Nhiều doanh nghiệp mất khả năng thanh toán đúng hạn. Lãi suất tăng mạnh. Thanh khoản bất động sản đóng băng.</td></tr>
<tr><td><strong>2023</strong></td><td>Nhiều biện pháp hỗ trợ được triển khai: giảm lãi suất điều hành nhiều lần, cơ chế giãn hoãn nợ trái phiếu, tháo gỡ vướng mắc pháp lý dự án. Thị trường phân hóa mạnh: căn hộ phục hồi trước, đất nền vùng ven vẫn đóng băng.</td></tr>
</table>
<div class="warning-box"><strong>Điểm mới so với chu kỳ trước: trái phiếu doanh nghiệp.</strong> Ở chu kỳ 2007–2013, rủi ro tập trung ở hệ thống ngân hàng. Ở chu kỳ này, một phần lớn rủi ro đã chuyển sang nhà đầu tư cá nhân nắm giữ trái phiếu — nhiều người trong số đó không hiểu rõ mình đang mua gì, và một số tin rằng ngân hàng phân phối cũng là ngân hàng bảo lãnh.</div>`,
        advanced: `<h3>Điều gì lặp lại từ chu kỳ trước</h3>
<table>
<tr><th>Yếu tố</th><th>2007–2013</th><th>2021–2023</th></tr>
<tr><td>Chất xúc tác ban đầu</td><td>Tín dụng dồi dào sau khi gia nhập WTO</td><td>Lãi suất thấp thời kỳ dịch bệnh</td></tr>
<tr><td>Hiện tượng đặc trưng</td><td>Sốt đất, chứng khoán lan sang nhà đất</td><td>Sốt đất diện rộng, gắn với thông tin quy hoạch</td></tr>
<tr><td>Thứ kết thúc chu kỳ</td><td>Thắt chặt tiền tệ chống lạm phát</td><td>Siết tín dụng và khủng hoảng trái phiếu</td></tr>
<tr><td>Phân khúc thiệt hại nặng nhất</td><td>Đất nền, dự án cao cấp</td><td>Đất nền vùng ven, nghỉ dưỡng</td></tr>
<tr><td>Phân khúc trụ vững</td><td>Căn hộ bình dân, nhà phố khu đông dân</td><td>Căn hộ bình dân, nhà phố khu đông dân</td></tr>
</table>
<div class="tip-box"><strong>Điểm chung quan trọng nhất qua cả hai chu kỳ:</strong> tài sản có <em>nhu cầu ở thực</em> luôn phục hồi trước và giảm ít nhất. Tài sản chỉ có giá trị khi tìm được người mua tiếp theo thì đóng băng lâu nhất. Đây là kết luận nhất quán nhất mà lịch sử thị trường Việt Nam đưa ra, và nó rất hữu ích cho quyết định của bạn.</div>
<h3>Bài học từ thị trường trái phiếu</h3>
<div class="warning-box">
<ol>
<li><strong>Lãi suất cao là phần bù rủi ro.</strong> Một sản phẩm trả 12% khi ngân hàng trả 6% đang nói với bạn rằng thị trường đánh giá rủi ro mất vốn là đáng kể. Đó là thông tin, không phải cơ hội miễn phí.</li>
<li><strong>Phân phối không phải bảo lãnh.</strong> Việc mua trái phiếu tại quầy ngân hàng không có nghĩa ngân hàng chịu trách nhiệm nếu tổ chức phát hành mất khả năng thanh toán. Đây là hiểu nhầm phổ biến nhất và gây thiệt hại lớn nhất.</li>
<li><strong>"Có tài sản bảo đảm" cần được kiểm tra cụ thể.</strong> Tài sản đó là gì, định giá thế nào, ai giữ, thứ tự ưu tiên khi xử lý ra sao.</li>
<li><strong>Nếu không hiểu cấu trúc của một sản phẩm tài chính, đó là lý do đủ để không tham gia.</strong> Không cần thêm lý do nào khác.</li>
</ol>
</div>
<h3>Chỉ báo để theo dõi cho chu kỳ tiếp theo</h3>
<p>Cả hai chu kỳ đều kết thúc khi tín dụng bị siết, không phải khi "giá đã quá cao". Vì vậy hãy theo dõi:</p>
<ul>
<li>Tăng trưởng tín dụng so với tăng trưởng GDP.</li>
<li>Lạm phát — vì nó quyết định chính sách tiền tệ.</li>
<li>Lãi suất huy động 12 tháng và lãi suất cho vay mua nhà sau ưu đãi.</li>
<li>Thanh khoản: số giao dịch thành công, thời gian trung bình để bán được một tài sản.</li>
<li>Tỷ trọng người mua đầu tư so với người mua ở thực tại khu vực bạn quan tâm.</li>
</ul>`,
        diagram: null
    },

    'hk-nha-o': {
        icon: '🇭🇰', title: 'Hong Kong — Khi Cung Bị Khóa Hoàn Toàn', category: 'cases',
        connections: ['cung-cau-bds', 'price-to-income', 'sg-hdb', 'dat-khan-hiem'],
        simple: `<h3>🇭🇰 Hong Kong — Khi Cung Bị Khóa Hoàn Toàn</h3>
<p>Hong Kong thường xuyên nằm trong nhóm thị trường nhà ở đắt đỏ nhất thế giới khi so với thu nhập, và nó là ví dụ cực đoan nhất về điều xảy ra khi <strong>nguồn cung bị chặn trong khi cầu vẫn tăng</strong>.</p>
<div class="example-box"><strong>Nghịch lý cốt lõi:</strong> Hong Kong <em>không</em> thiếu đất. Một tỷ lệ rất lớn diện tích lãnh thổ là công viên đồng quê và đất chưa phát triển. Vấn đề không phải khan hiếm vật lý, mà là <strong>khan hiếm do chính sách và cấu trúc tài khóa tạo ra</strong>.</div>`,
        detail: `<h3>Vì sao nguồn cung bị khóa</h3>
<ul>
<li><strong>Toàn bộ đất về cơ bản thuộc nhà nước</strong>, được cho thuê dài hạn. Chính quyền kiểm soát tốc độ đưa đất ra thị trường.</li>
<li><strong>Ngân sách phụ thuộc vào thu từ đất.</strong> Hong Kong có thuế suất thấp và nguồn thu từ bán quyền sử dụng đất chiếm tỷ trọng đáng kể. Điều này tạo động cơ tài khóa để <em>không</em> đưa quá nhiều đất ra thị trường cùng lúc — vì làm vậy sẽ hạ giá và giảm nguồn thu.</li>
<li><strong>Ràng buộc địa hình</strong> — nhiều đồi núi, chi phí phát triển cao.</li>
<li><strong>Bảo tồn công viên đồng quê</strong> — được bảo vệ mạnh, việc chuyển đổi gặp phản đối lớn.</li>
<li><strong>Một số ít tập đoàn phát triển lớn</strong> nắm giữ quỹ đất đáng kể, có ảnh hưởng tới nhịp độ đưa sản phẩm ra thị trường.</li>
</ul>
<div class="warning-box"><strong>Đây là ví dụ rõ nhất về xung đột lợi ích cấu trúc trong chính sách nhà ở:</strong> khi ngân sách nhà nước phụ thuộc vào giá đất cao, chính quyền vừa là bên phải giải quyết vấn đề nhà ở, vừa là bên hưởng lợi từ việc giá nhà cao. Đây cũng là vấn đề tồn tại ở Trung Quốc đại lục, và là điều đáng lưu ý khi thiết kế chính sách ở bất kỳ đâu.</div>`,
        advanced: `<h3>Hệ quả xã hội</h3>
<ul>
<li><strong>Nhà siêu nhỏ.</strong> Xuất hiện các loại hình nhà ở diện tích rất nhỏ, gồm cả những dạng nhà chia nhỏ dưới tiêu chuẩn với điều kiện sống rất chật chội.</li>
<li><strong>Thời gian chờ nhà ở công kéo dài nhiều năm.</strong></li>
<li><strong>Bất bình đẳng tài sản gia tăng</strong> — người sở hữu bất động sản từ trước hưởng lợi lớn, người chưa sở hữu ngày càng khó tiếp cận.</li>
<li><strong>Ảnh hưởng tới ổn định xã hội</strong> — vấn đề nhà ở được nhiều nhà phân tích xem là một trong các nguồn gốc của bất mãn xã hội.</li>
</ul>
<h3>So sánh Hong Kong và Singapore</h3>
<p>Hai thành phố có xuất phát điểm khá giống nhau — cảng biển, diện tích nhỏ, mật độ cao, kinh tế mở — nhưng đi hai con đường rất khác về nhà ở:</p>
<table>
<tr><th></th><th>Hong Kong</th><th>Singapore</th></tr>
<tr><td>Nhà ở công</td><td>Có, nhưng chủ yếu là cho thuê và thời gian chờ dài</td><td>Chiếm đa số, và người dân <strong>sở hữu</strong> căn hộ</td></tr>
<tr><td>Nguồn thu từ đất</td><td>Tỷ trọng lớn trong ngân sách</td><td>Được quản lý qua quỹ dự trữ dài hạn</td></tr>
<tr><td>Cơ chế tài chính cho người mua</td><td>Không có cơ chế tiết kiệm bắt buộc tương đương</td><td>CPF hỗ trợ trực tiếp việc mua nhà</td></tr>
<tr><td>Kết quả</td><td>Nhóm đắt đỏ nhất thế giới; tỷ lệ sở hữu thấp</td><td>Tỷ lệ sở hữu nhà rất cao</td></tr>
</table>
<div class="tip-box"><strong>Bài học lớn nhất:</strong> khả năng chi trả nhà ở là kết quả của <em>lựa chọn chính sách</em>, không phải của địa lý hay may mắn. Hai thành phố có điều kiện tự nhiên tương tự nhau đạt kết quả hoàn toàn khác nhau, vì họ chọn cấu trúc thể chế khác nhau — đặc biệt là ở câu hỏi ngân sách nhà nước có phụ thuộc vào giá đất cao hay không.</div>
<div class="warning-box"><strong>Ứng dụng cho người mua nhà:</strong> khi đánh giá triển vọng dài hạn của một thị trường, hãy hỏi <em>"nguồn cung ở đây có thể tăng không, và ai có động cơ để nó tăng hay không tăng?"</em>. Thị trường có cung bị khóa về cấu trúc sẽ duy trì mặt bằng giá cao rất lâu — điều này tốt cho người đã sở hữu và rất khó cho người chưa. Đó là thông tin quan trọng hơn nhiều so với dự báo giá của bất kỳ ai.</div>`,
        diagram: null
    },

    'mau-hinh-chung': {
        icon: '🔬', title: 'Mẫu Hình Chung Của Mọi Bong Bóng', category: 'cases',
        connections: ['chu-ky-bds', 'su-dung-vs-dau-co', 'jp-bubble-1991', 'us-2008'],
        simple: `<h3>🔬 Mẫu Hình Chung Của Mọi Bong Bóng</h3>
<p>Nhật 1991, Mỹ 2008, Trung Quốc 2021, Việt Nam 2008 và 2022 — các thị trường khác nhau, thể chế khác nhau, văn hóa khác nhau. Nhưng kịch bản gần như giống hệt nhau.</p>
<div class="example-box"><strong>Điều đó nói lên một điều quan trọng:</strong> bong bóng bất động sản không phải kết quả của sự ngu ngốc của một dân tộc hay sự yếu kém của một thể chế cụ thể. Nó là kết quả của một <strong>cấu trúc</strong> — cung phản ứng chậm, tín dụng phản ứng nhanh, đòn bẩy cao, và tài sản thế chấp chính là thứ đang tăng giá.</div>`,
        detail: `<h3>Năm giai đoạn của mọi bong bóng</h3>
<p>Nhà kinh tế Hyman Minsky mô tả một khung năm giai đoạn khớp với hầu hết các bong bóng tài sản trong lịch sử:</p>
<table>
<tr><th>Giai đoạn</th><th>Nội dung</th><th>Ví dụ bất động sản</th></tr>
<tr><td><strong>1. Cú hích</strong></td><td>Một thay đổi thật tạo cơ hội mới</td><td>Hạ tầng mới, cải cách kinh tế, lãi suất giảm mạnh</td></tr>
<tr><td><strong>2. Bùng nổ</strong></td><td>Giá bắt đầu tăng dựa trên nền tảng thật</td><td>Người mua ở thực và nhà đầu tư sớm vào thị trường</td></tr>
<tr><td><strong>3. Hưng phấn</strong></td><td>Giá tách rời nền tảng; ai cũng tham gia; xuất hiện lý lẽ giải thích vì sao "lần này khác"</td><td>"Đất không bao giờ giảm giá", người không chuyên bỏ việc đi đầu tư</td></tr>
<tr><td><strong>4. Chốt lời</strong></td><td>Người trong cuộc và nhà đầu tư khôn ngoan bắt đầu bán ra; giá đi ngang; thanh khoản giảm</td><td>Giao dịch chậm lại trong khi giá rao vẫn cao</td></tr>
<tr><td><strong>5. Hoảng loạn</strong></td><td>Kỳ vọng đảo chiều; mọi người cùng muốn bán; không có người mua</td><td>Đóng băng, bán tháo, vỡ nợ</td></tr>
</table>
<div class="warning-box"><strong>Câu nói xuất hiện ở giai đoạn 3 của mọi bong bóng trong lịch sử là: "lần này khác".</strong> Nó luôn đi kèm một lý lẽ nghe rất hợp lý — dân số tăng, đất khan hiếm, kinh tế đang cất cánh, người nước ngoài đang vào. Các lý lẽ đó thường <em>đúng một phần</em>. Vấn đề là chúng được dùng để biện minh cho bất kỳ mức giá nào, và một lập luận biện minh được cho mọi mức giá thì không biện minh được cho mức giá nào cả.</div>`,
        advanced: `<h3>Bảy dấu hiệu cảnh báo có thể quan sát được</h3>
<div class="warning-box">
<ol>
<li><strong>Tỷ suất cho thuê giảm xuống rất thấp so với lãi suất tiền gửi.</strong> Thị trường đang sống bằng kỳ vọng, không bằng dòng tiền.</li>
<li><strong>Tỷ lệ giá nhà trên thu nhập tăng liên tục nhiều năm.</strong> Giá đang tách khỏi khả năng chi trả bằng lao động.</li>
<li><strong>Tăng trưởng tín dụng bất động sản vượt xa tăng trưởng GDP.</strong></li>
<li><strong>Người không chuyên chuyển sang làm môi giới và đầu tư.</strong> Chỉ báo xã hội học kinh điển, xuất hiện ở mọi bong bóng.</li>
<li><strong>Xuất hiện các sản phẩm tài chính mới cho phép vay nhiều hơn</strong> — kỳ hạn dài hơn, vốn tự có thấp hơn, sản phẩm cấu trúc phức tạp.</li>
<li><strong>Thanh khoản giảm trong khi giá vẫn đứng.</strong> Đây là chỉ báo sớm nhất và đáng tin nhất.</li>
<li><strong>Câu chuyện chuyển từ công năng sang kỳ vọng.</strong> Người ta nói về "sẽ tăng bao nhiêu" thay vì "ở đó thế nào".</li>
</ol>
</div>
<h3>Ba điều KHÔNG dự đoán được</h3>
<div class="tip-box">
<p>Trung thực về giới hạn của phân tích cũng quan trọng như bản thân phân tích:</p>
<ul>
<li><strong>Thời điểm.</strong> Bong bóng có thể kéo dài lâu hơn nhiều so với dự đoán của bất kỳ ai. Người bán ra vì "giá quá cao" năm 2004 đã bỏ lỡ ba năm tăng tiếp theo.</li>
<li><strong>Mức đỉnh.</strong> Không ai biết giá sẽ lên tới đâu.</li>
<li><strong>Chất xúc tác.</strong> Thứ làm bong bóng vỡ thường không phải thứ mọi người lo lắng.</li>
</ul>
<p><strong>Vì vậy chiến lược đúng không phải là dự đoán, mà là chuẩn bị.</strong></p>
</div>
<h3>Bốn nguyên tắc sống sót qua mọi chu kỳ</h3>
<ol>
<li><strong>Kiểm soát đòn bẩy.</strong> Đây là biến số quyết định duy nhất phân biệt người sống sót và người phá sản trong <em>mọi</em> cuộc khủng hoảng bất động sản đã ghi nhận. Không phải chọn đúng tài sản, không phải bấm đúng thời điểm — mà là không vay quá nhiều.</li>
<li><strong>Ưu tiên tài sản có nhu cầu ở thực.</strong> Chúng giảm ít nhất và phục hồi trước nhất. Câu hỏi kiểm tra: nếu không ai muốn đầu tư nữa, có ai muốn ở đây không?</li>
<li><strong>Giữ đủ tiền mặt để không bao giờ bị ép bán.</strong> Người bị buộc phải bán ở đáy là người hiện thực hóa mọi khoản lỗ. Người giữ được tài sản qua chu kỳ thường không mất gì cả.</li>
<li><strong>Đừng cược toàn bộ vào một kịch bản.</strong> Kể cả khi phân tích của bạn đúng, thời điểm có thể sai — và sai thời điểm với đòn bẩy cao cũng cho kết quả giống như sai hoàn toàn.</li>
</ol>
<div class="tip-box"><strong>Kết luận thực dụng:</strong> bạn không cần dự đoán được chu kỳ để thành công trong bất động sản. Bạn chỉ cần <em>sống sót</em> qua nó. Một người mua nhà để ở, vay ở mức vừa phải, chọn vị trí có nhu cầu thật, và giữ trong hai thập kỷ sẽ có kết quả tốt bất kể họ mua ở pha nào của chu kỳ. Người thua là người dùng đòn bẩy tối đa để cược vào một mức giá cụ thể tại một thời điểm cụ thể.</div>`,
        diagram: 're-minsky'
    },

    'tu-danh-gia': {
        icon: '🧭', title: 'Tự Đánh Giá Thị Trường Của Bạn', category: 'cases',
        connections: ['mau-hinh-chung', 'price-to-income', 'rental-yield', 'chu-ky-bds'],
        simple: `<h3>🧭 Tự Đánh Giá Thị Trường Của Bạn</h3>
<p>Sau khi đã đi qua nguyên lý, pháp lý, thực chiến và các case study, đây là cách gói tất cả lại thành một quy trình bạn có thể thực sự làm.</p>
<div class="example-box"><strong>Mục tiêu không phải dự đoán giá.</strong> Mục tiêu là biết mình đang ở đâu trong chu kỳ, mình đang gánh rủi ro gì, và mình chịu được bao nhiêu. Ba câu hỏi này trả lời được bằng dữ liệu công khai và một buổi chiều làm việc.</div>`,
        detail: `<h3>Bước 1 — Đo nhiệt độ thị trường</h3>
<p>Thu thập năm con số cho khu vực bạn quan tâm:</p>
<table>
<tr><th>Chỉ số</th><th>Cách lấy</th><th>Cách đọc</th></tr>
<tr><td><strong>Tỷ suất cho thuê gộp</strong></td><td>Giá thuê tháng của căn tương tự × 12 ÷ giá bán</td><td>Dưới 3% = định giá theo kỳ vọng; trên 5% = theo dòng tiền</td></tr>
<tr><td><strong>Giá / thu nhập của chính bạn</strong></td><td>Giá căn nhà ÷ thu nhập năm của gia đình bạn</td><td>Trên 7–8 lần = khoản vay sẽ chi phối tài chính của bạn</td></tr>
<tr><td><strong>Lãi vay sau ưu đãi</strong></td><td>Hỏi thẳng ngân hàng: khách vay 2 năm trước hiện trả bao nhiêu</td><td>So với tỷ suất cho thuê — nếu cao hơn nhiều, bạn đang bù lỗ để chờ tăng giá</td></tr>
<tr><td><strong>Thanh khoản</strong></td><td>Hỏi môi giới: căn tương tự mất bao lâu để bán được</td><td>Đang kéo dài ra = pha suy giảm; đang rút ngắn = pha phục hồi</td></tr>
<tr><td><strong>Nguồn cung sắp tới</strong></td><td>Đếm số dự án đang triển khai trong bán kính 3km</td><td>Nhiều = mức tăng giá của bạn sẽ bị kìm</td></tr>
</table>
<h3>Bước 2 — Kiểm tra khả năng chịu đựng của chính bạn</h3>
<p>Dùng máy tính ở tab Công cụ, tính khoản trả góp ở ba kịch bản: lãi ưu đãi, lãi sau ưu đãi, và lãi sau ưu đãi cộng 3 điểm phần trăm. Sau đó tự trả lời:</p>
<ul>
<li>☐ Ở kịch bản xấu nhất, khoản trả góp có dưới 40% thu nhập ròng không?</li>
<li>☐ Tôi có quỹ dự phòng 6–12 tháng trả góp, tách riêng, không tính vào vốn mua nhà không?</li>
<li>☐ Nếu mất việc 6 tháng, tôi có sống sót mà không phải bán nhà không?</li>
<li>☐ Nếu giá giảm 30% và đứng đó 10 năm, kế hoạch của tôi có còn hợp lý không?</li>
</ul>
<div class="warning-box"><strong>Nếu có bất kỳ ô nào chưa đánh dấu được, vấn đề không nằm ở thị trường — nó nằm ở quy mô khoản vay của bạn.</strong> Và đó là biến số duy nhất trong toàn bộ bài toán mà bạn hoàn toàn kiểm soát được.</div>`,
        advanced: `<h3>Bước 3 — Xác định mình đang ở pha nào</h3>
<table>
<tr><th>Dấu hiệu</th><th>Phục hồi</th><th>Tăng trưởng</th><th>Bùng nổ</th><th>Suy thoái</th></tr>
<tr><td>Thanh khoản</td><td>Thấp, bắt đầu cải thiện</td><td>Tăng đều</td><td>Rất cao rồi chậm lại</td><td>Đóng băng</td></tr>
<tr><td>Tỷ suất cho thuê</td><td>Cao nhất</td><td>Giảm dần</td><td>Rất thấp</td><td>Bắt đầu tăng lại</td></tr>
<tr><td>Tín dụng</td><td>Bắt đầu nới</td><td>Nới rộng</td><td>Rất dễ</td><td>Siết chặt</td></tr>
<tr><td>Tâm lý</td><td>Bi quan</td><td>Lạc quan thận trọng</td><td>Hưng phấn</td><td>Sợ hãi</td></tr>
<tr><td>Dự án mới</td><td>Rất ít</td><td>Khởi công trở lại</td><td>Ồ ạt</td><td>Đắp chiếu</td></tr>
<tr><td><strong>Hành động phù hợp</strong></td><td><strong>Mua nếu có tiền mặt</strong></td><td><strong>Mua để ở là hợp lý</strong></td><td><strong>Giảm đòn bẩy, cân nhắc bán bớt</strong></td><td><strong>Giữ tiền mặt, chuẩn bị</strong></td></tr>
</table>
<div class="tip-box"><strong>Lưu ý quan trọng:</strong> bạn chỉ nhận diện được pha một cách chắc chắn khi nhìn lại. Ở thời điểm hiện tại, luôn có sự mơ hồ. Vì vậy đừng dùng bảng này để bấm thời điểm — hãy dùng nó để <strong>điều chỉnh mức độ đòn bẩy</strong>. Càng có nhiều dấu hiệu của pha bùng nổ, càng nên vay ít hơn. Đó là một quyết định bạn không bao giờ hối tiếc, bất kể thị trường đi hướng nào.</div>
<h3>Bước 4 — Quyết định</h3>
<p>Ba câu hỏi cuối cùng, theo thứ tự:</p>
<ol>
<li><strong>Tôi mua để ở hay để đầu tư?</strong> Nếu để ở và bạn cần một chỗ ở ổn định, thời điểm ít quan trọng hơn nhiều — vì bạn sẽ giữ lâu và không bị ép bán. Nếu để đầu tư, mọi con số ở trên đều quan trọng.</li>
<li><strong>Tôi có giữ được tài sản này qua một chu kỳ suy thoái không?</strong> Đây là câu hỏi quyết định. Nếu câu trả lời là có, phần lớn rủi ro đã được xử lý.</li>
<li><strong>Nếu tôi sai hoàn toàn, chuyện gì xảy ra?</strong> Nếu câu trả lời là "tôi mất một phần lợi nhuận tiềm năng" — bạn ổn. Nếu là "tôi phá sản" — hãy giảm quy mô cho tới khi câu trả lời đổi.</li>
</ol>
<div class="warning-box"><strong>Điều toàn bộ trang này cố gắng truyền đạt, gói lại trong một câu:</strong> trong bất động sản, bạn không kiểm soát được giá, lãi suất, chính sách, hay chu kỳ. Bạn chỉ kiểm soát được <strong>vay bao nhiêu, mua ở đâu, và giữ được bao lâu</strong>. Ba biến số đó quyết định kết quả của bạn nhiều hơn mọi dự báo thị trường cộng lại.</div>`,
        diagram: null
    },

    'th-1997': {
        icon: '🇹🇭', title: 'Thái Lan 1997 — Khủng Hoảng Châu Á', category: 'cases',
        connections: ['don-bay', 'tin-dung-gia-nha', 'th-tong-quan', 'mau-hinh-chung'],
        simple: `<h3>🇹🇭 Thái Lan 1997 — Khủng Hoảng Châu Á</h3>
<p>Đây là case study gần Việt Nam nhất về mặt địa lý, thời điểm và mô hình phát triển — nên cũng là case đáng học nhất.</p>
<div class="example-box"><strong>Tóm tắt:</strong> Thái Lan neo đồng baht vào đô la Mỹ, doanh nghiệp vay ngoại tệ giá rẻ đổ vào bất động sản Bangkok. Khi nguồn cung vượt xa nhu cầu và dòng vốn đảo chiều, ngân hàng trung ương cạn dự trữ để giữ tỷ giá. Ngày 2/7/1997 Thái Lan buộc phải thả nổi đồng baht — nó mất giá rất mạnh, và <strong>khoản nợ ngoại tệ của doanh nghiệp tăng vọt tính theo nội tệ</strong>. Khủng hoảng lan ra Indonesia, Hàn Quốc, Malaysia.</div>`,
        detail: `<h3>Cơ chế: vì sao neo tỷ giá cộng vay ngoại tệ là tổ hợp nguy hiểm</h3>
<p>Đây là phần quan trọng nhất và cũng dễ hiểu sai nhất:</p>
<ol>
<li><strong>Tỷ giá được neo</strong> vào đô la trong nhiều năm → doanh nghiệp coi rủi ro tỷ giá gần như bằng không.</li>
<li><strong>Lãi suất vay đô la thấp hơn nhiều</strong> lãi suất vay nội tệ → vay đô la trở nên rất hấp dẫn.</li>
<li>Doanh nghiệp bất động sản vay đô la, đổi sang baht, xây dự án ở Bangkok. <strong>Doanh thu bằng baht, nợ bằng đô la</strong> — một sự lệch pha tiền tệ mà không ai coi là rủi ro chừng nào tỷ giá còn được neo.</li>
<li>Nguồn cung văn phòng và căn hộ vượt xa nhu cầu thật. Giá bắt đầu giảm, dự án ế.</li>
<li>Nhà đầu tư nước ngoài mất niềm tin, rút vốn. Áp lực bán baht tăng.</li>
<li>Ngân hàng trung ương dùng dự trữ ngoại hối để bảo vệ tỷ giá — và cạn dần.</li>
<li><strong>Thả nổi.</strong> Baht mất giá rất mạnh. Khoản nợ đô la của doanh nghiệp, tính bằng baht, tăng lên nhiều lần chỉ sau vài tháng.</li>
<li>Doanh nghiệp vỡ nợ hàng loạt → ngân hàng nội địa ôm nợ xấu → tín dụng đóng băng → suy thoái sâu.</li>
</ol>
<div class="warning-box"><strong>Điểm chết người ở bước 7:</strong> doanh nghiệp không hề vay thêm một đồng nào, nhưng khoản nợ của họ đột nhiên lớn hơn nhiều lần. Đây là rủi ro mà <em>không</em> xuất hiện trong bảng tính của họ, vì nó không phải rủi ro giá nhà hay rủi ro lãi suất — nó là rủi ro tỷ giá, thứ mà cơ chế neo đã làm mọi người quên mất.</div>`,
        advanced: `<h3>Vì sao Việt Nam ít bị ảnh hưởng năm 1997</h3>
<p>Đây là điều đáng chú ý: Việt Nam chịu tác động rõ rệt qua kênh thương mại và đầu tư, nhưng không trải qua khủng hoảng tài chính như Thái Lan hay Indonesia. Lý do chính là <strong>tài khoản vốn khi đó còn đóng</strong> — dòng vốn ngắn hạn nước ngoài chưa vào nhiều, nên cũng không có dòng vốn ồ ạt rút ra.</p>
<p>Nói cách khác, Việt Nam được bảo vệ bởi chính sự chưa hội nhập của mình. Đó không phải một chiến lược có thể lặp lại, và mức độ mở cửa tài chính hiện nay đã khác rất nhiều.</p>
<h3>Bốn bài học còn nguyên giá trị</h3>
<div class="tip-box">
<ol>
<li><strong>Lệch pha tiền tệ là rủi ro ẩn.</strong> Vay bằng đồng tiền khác với đồng tiền tạo ra doanh thu là một cược vào tỷ giá, dù bạn không nghĩ mình đang cược. Quy tắc: <em>vay bằng đồng tiền bạn kiếm được</em>.</li>
<li><strong>Sự ổn định kéo dài sinh ra rủi ro.</strong> Tỷ giá càng được neo lâu, mọi người càng tin nó sẽ neo mãi, càng vay ngoại tệ nhiều, và cú vỡ càng lớn. Đây là ý tưởng trung tâm của Hyman Minsky: ổn định tự nó sinh ra bất ổn.</li>
<li><strong>Bất động sản là nơi dòng vốn nóng thường đổ vào,</strong> vì nó hấp thụ được lượng vốn lớn và có tài sản thế chấp. Nên khủng hoảng dòng vốn và khủng hoảng bất động sản hầu như luôn đi cùng nhau.</li>
<li><strong>Nguồn cung vượt cầu là dấu hiệu sớm.</strong> Trước khi tỷ giá vỡ, Bangkok đã có tỷ lệ trống văn phòng và căn hộ rất cao. Dữ liệu đó công khai, và nó cảnh báo trước cả năm.</li>
</ol>
</div>
<div class="warning-box"><strong>Áp dụng cho bạn hôm nay:</strong> nếu bạn có thu nhập bằng đồng Việt Nam và cân nhắc một khoản vay hay một sản phẩm đầu tư gắn với ngoại tệ, hãy tính kịch bản tỷ giá biến động mạnh trước khi ký. Rủi ro này không xuất hiện trong bất kỳ bảng so sánh lãi suất nào.</div>`,
        diagram: 're-currency'
    },

    'es-2008': {
        icon: '🇪🇸', title: 'Tây Ban Nha 2008 — Xây Quá Nhiều', category: 'cases',
        connections: ['cung-cham-tre', 'us-2008', 'ie-2008', 'mau-hinh-chung'],
        simple: `<h3>🇪🇸 Tây Ban Nha 2008 — Xây Quá Nhiều</h3>
<p>Nếu Mỹ 2008 là câu chuyện về <em>tín dụng xấu</em>, thì Tây Ban Nha là câu chuyện về <em>xây dựng quá mức</em> — và nó cho thấy một nền kinh tế có thể lệch đến mức nào khi bất động sản trở thành động cơ tăng trưởng chính.</p>
<div class="example-box"><strong>Quy mô đáng kinh ngạc:</strong> ở đỉnh điểm giữa thập niên 2000, Tây Ban Nha khởi công số nhà mới mỗi năm nhiều hơn cả Đức, Pháp và Ý cộng lại — dù dân số nhỏ hơn nhiều lần. Xây dựng chiếm một tỷ trọng rất lớn trong GDP và việc làm.</div>
<p>Khi nhu cầu dừng lại, hàng trăm nghìn căn nhà không có người mua, và những khu đô thị xây dở trở thành "thị trấn ma".</p>`,
        detail: `<h3>Điều gì đã thúc đẩy cơn bùng nổ</h3>
<table>
<tr><th>Yếu tố</th><th>Vai trò</th></tr>
<tr><td><strong>Gia nhập khu vực đồng euro</strong></td><td>Lãi suất giảm mạnh xuống mức của Đức — thấp hơn nhiều so với mức phù hợp với tốc độ lạm phát và tăng trưởng của Tây Ban Nha</td></tr>
<tr><td><strong>Ngân hàng tiết kiệm địa phương (cajas)</strong></td><td>Chịu ảnh hưởng chính trị địa phương, cho vay bất động sản rất mạnh, quản trị rủi ro yếu</td></tr>
<tr><td><strong>Chính quyền địa phương phụ thuộc thu từ đất</strong></td><td>Cấp phép xây dựng là nguồn thu lớn, tạo động cơ phê duyệt liên tục</td></tr>
<tr><td><strong>Người mua nước ngoài</strong></td><td>Nhu cầu nhà nghỉ dưỡng ven biển từ Bắc Âu</td></tr>
<tr><td><strong>Văn hóa sở hữu nhà</strong></td><td>Tỷ lệ sở hữu nhà rất cao, thuê nhà bị coi là lựa chọn kém</td></tr>
</table>
<div class="warning-box"><strong>Chi tiết quan trọng về đồng euro:</strong> khi gia nhập khu vực đồng tiền chung, Tây Ban Nha mất công cụ chính sách tiền tệ riêng. Lãi suất do Ngân hàng Trung ương châu Âu đặt, phù hợp với nền kinh tế Đức khi đó đang trì trệ — nhưng quá thấp cho một nền kinh tế đang tăng trưởng nóng như Tây Ban Nha. Kết quả là <em>tiền quá rẻ trong quá lâu</em>, và không có cách nào để tự điều chỉnh.</div>`,
        advanced: `<h3>Hậu quả</h3>
<ul>
<li><strong>Thất nghiệp tăng vọt</strong> lên mức rất cao, đặc biệt ở người trẻ — vì ngành xây dựng, nơi sử dụng rất nhiều lao động, gần như dừng lại.</li>
<li><strong>Hệ thống cajas sụp đổ</strong> — phải tái cơ cấu, sáp nhập, và cần gói hỗ trợ tài chính từ châu Âu năm 2012.</li>
<li><strong>SAREB</strong> — một "ngân hàng xấu" được lập để tiếp nhận tài sản bất động sản độc hại từ các ngân hàng được cứu trợ.</li>
<li><strong>Hàng trăm nghìn căn nhà tồn kho</strong> mất nhiều năm mới hấp thụ hết, và nhiều dự án dở dang không bao giờ hoàn thành.</li>
<li><strong>Làn sóng thu hồi nhà</strong> gây khủng hoảng xã hội, dẫn tới các phong trào phản đối và thay đổi luật.</li>
</ul>
<h3>Vì sao cú vỡ này đau hơn ở chỗ khác</h3>
<div class="warning-box"><strong>Vì bất động sản không chỉ là một thị trường — nó đã trở thành <em>động cơ tăng trưởng</em>.</strong> Khi xây dựng chiếm tỷ trọng quá lớn trong GDP và việc làm, thị trường bất động sản dừng lại đồng nghĩa với việc cả nền kinh tế dừng lại. Không có ngành nào đủ lớn để hấp thụ số lao động mất việc.</div>
<h3>Bài học cho một nền kinh tế đang phát triển</h3>
<div class="tip-box">
<ol>
<li><strong>Theo dõi tỷ trọng xây dựng và bất động sản trong GDP.</strong> Khi con số này tăng nhanh và vượt xa mức thông thường của các nền kinh tế tương đương, đó là dấu hiệu mất cân đối cấu trúc — không chỉ là một thị trường nóng.</li>
<li><strong>Nguồn cung vượt nhu cầu dân số là dấu hiệu đo được.</strong> So số nhà xây mới hàng năm với số hộ gia đình mới hình thành. Nếu chênh lệch kéo dài nhiều năm, phần dư đó đang được hấp thụ bởi đầu cơ, không phải bởi nhu cầu ở.</li>
<li><strong>Ngân hàng có động cơ chính trị địa phương là điểm yếu nghiêm trọng.</strong> Chúng cho vay theo quan hệ thay vì theo rủi ro, và đó là lý do các cajas thiệt hại nặng hơn nhiều so với các ngân hàng thương mại lớn.</li>
<li><strong>Lãi suất không phù hợp với chu kỳ trong nước là rủi ro thật.</strong> Bất kỳ cơ chế nào làm lãi suất thấp hơn mức phù hợp trong thời gian dài đều tạo ra bùng nổ tài sản.</li>
</ol>
</div>`,
        diagram: null
    },

    'ie-2008': {
        icon: '🇮🇪', title: 'Ireland 2008 — Từ Hổ Celtic Đến Giải Cứu', category: 'cases',
        connections: ['es-2008', 'us-2008', 'don-bay', 'se-1992'],
        simple: `<h3>🇮🇪 Ireland 2008 — Từ Hổ Celtic Đến Giải Cứu</h3>
<p>Ireland từ một trong những nước nghèo nhất Tây Âu trở thành một trong những nước giàu nhất chỉ trong khoảng 15 năm — giai đoạn được gọi là "Hổ Celtic". Rồi thị trường bất động sản kéo cả quốc gia xuống.</p>
<div class="example-box"><strong>Điều làm case này đặc biệt:</strong> chính phủ Ireland tháng 9/2008 đã <strong>bảo lãnh gần như toàn bộ nghĩa vụ nợ của hệ thống ngân hàng</strong> — biến khoản lỗ của ngân hàng tư nhân thành nợ công. Hai năm sau, chính phủ phải nhận gói cứu trợ từ Liên minh châu Âu và Quỹ Tiền tệ Quốc tế.</div>`,
        detail: `<h3>Diễn biến</h3>
<table>
<tr><th>Giai đoạn</th><th>Điều gì xảy ra</th></tr>
<tr><td><strong>1995–2000</strong></td><td>Tăng trưởng thật, dựa trên đầu tư nước ngoài, thuế doanh nghiệp thấp, lực lượng lao động trẻ nói tiếng Anh. Thu nhập tăng, cầu nhà ở tăng theo — giai đoạn này lành mạnh.</td></tr>
<tr><td><strong>2000–2007</strong></td><td>Động lực chuyển từ xuất khẩu sang xây dựng. Lãi suất euro thấp. Ngân hàng cho vay ngày càng dễ. Giá nhà tăng rất mạnh, vượt xa thu nhập.</td></tr>
<tr><td><strong>2007–2008</strong></td><td>Giá đạt đỉnh rồi quay đầu. Anglo Irish Bank — ngân hàng cho vay bất động sản mạnh nhất — gặp khủng hoảng thanh khoản.</td></tr>
<tr><td><strong>9/2008</strong></td><td>Chính phủ bảo lãnh nghĩa vụ nợ của các ngân hàng, với giả định vấn đề chỉ là thanh khoản tạm thời.</td></tr>
<tr><td><strong>2009–2010</strong></td><td>Hóa ra vấn đề là mất khả năng thanh toán, không phải thanh khoản. Quy mô lỗ lớn hơn nhiều dự kiến. NAMA được lập để tiếp nhận các khoản vay bất động sản xấu.</td></tr>
<tr><td><strong>11/2010</strong></td><td>Ireland nhận gói cứu trợ quốc tế. Thắt lưng buộc bụng nhiều năm.</td></tr>
</table>
<div class="warning-box"><strong>Sai lầm chính sách quan trọng nhất: bảo lãnh toàn bộ trước khi biết quy mô thiệt hại.</strong> Quyết định tháng 9/2008 được đưa ra trong một đêm, dựa trên chẩn đoán sai rằng đây là khủng hoảng thanh khoản. Khi sự thật lộ ra, nhà nước đã cam kết gánh một khoản lỗ lớn hơn nhiều khả năng của mình.</div>`,
        advanced: `<h3>"Thị trấn ma" — di sản vật lý</h3>
<p>Ireland để lại hàng nghìn khu dân cư xây dở dang trên khắp cả nước — nhà xây một nửa, hạ tầng chưa hoàn thiện, không người ở. Nhiều khu nằm ở những nơi mà nhu cầu ở thực chưa từng tồn tại; chúng được xây vì có ưu đãi thuế cho phát triển bất động sản ở vùng nông thôn, không phải vì có người muốn sống ở đó.</p>
<div class="tip-box"><strong>Bài học về ưu đãi thuế:</strong> khi chính sách thuế khuyến khích <em>xây dựng</em> thay vì khuyến khích <em>đáp ứng nhu cầu</em>, kết quả là nhà được xây ở nơi có ưu đãi, không phải ở nơi có người cần. Đây là dạng méo mó chính sách rất phổ biến và rất tốn kém.</div>
<h3>So sánh ba cách xử lý khủng hoảng ngân hàng</h3>
<table>
<tr><th></th><th>Ireland 2008</th><th>Thụy Điển 1992</th><th>Nhật 1991</th></tr>
<tr><td>Tốc độ nhận diện vấn đề</td><td>Chậm — chẩn đoán sai ban đầu</td><td>Nhanh</td><td>Rất chậm</td></tr>
<tr><td>Cổ đông ngân hàng</td><td>Được bảo vệ ban đầu</td><td>Bị xóa sổ</td><td>Được bảo vệ</td></tr>
<tr><td>Ai gánh lỗ</td><td>Người đóng thuế</td><td>Cổ đông trước, nhà nước sau</td><td>Kéo dài, phân tán</td></tr>
<tr><td>Thời gian hồi phục</td><td>Nhiều năm, có hồi phục</td><td>Tương đối nhanh</td><td>Nhiều thập kỷ</td></tr>
</table>
<div class="warning-box"><strong>Kết luận nhất quán từ ba trường hợp:</strong> nhận diện lỗ sớm và bắt cổ đông chịu trách nhiệm trước là cách xử lý ít tốn kém nhất về lâu dài. Trì hoãn để tránh đau đớn chính trị ngắn hạn làm tổng chi phí lớn hơn. Đây là lý do trường hợp Thụy Điển được nghiên cứu nhiều đến vậy — xem chủ điểm tiếp theo.</div>`,
        diagram: null
    },

    'se-1992': {
        icon: '🇸🇪', title: 'Thụy Điển 1992 — Cách Xử Lý Được Coi Là Mẫu Mực', category: 'cases',
        connections: ['ie-2008', 'jp-bubble-1991', 'us-sl-1980', 'mau-hinh-chung'],
        simple: `<h3>🇸🇪 Thụy Điển 1992 — Cách Xử Lý Được Coi Là Mẫu Mực</h3>
<p>Hầu hết case study bất động sản là chuyện về sai lầm. Đây là chuyện về một cuộc khủng hoảng nghiêm trọng nhưng được <strong>xử lý tốt</strong> — và vì thế nó được nghiên cứu nhiều hơn cả bản thân cuộc khủng hoảng.</p>
<div class="example-box"><strong>Bối cảnh:</strong> Thụy Điển nới lỏng quy định thị trường tín dụng giữa thập niên 1980. Tín dụng bùng nổ, giá bất động sản tăng vọt. Đầu thập niên 1990 bong bóng vỡ, hệ thống ngân hàng mất khả năng thanh toán, và Thụy Điển rơi vào cuộc khủng hoảng tài chính nghiêm trọng nhất kể từ thập niên 1930.</div>`,
        detail: `<h3>Cách Thụy Điển xử lý</h3>
<p>Điểm khác biệt nằm ở nguyên tắc, không phải ở kỹ thuật:</p>
<ol>
<li><strong>Thừa nhận quy mô thiệt hại nhanh.</strong> Không kéo dài, không giả vờ rằng tài sản xấu vẫn còn giá trị. Buộc ngân hàng ghi nhận lỗ theo giá trị thực.</li>
<li><strong>Cổ đông chịu trách nhiệm trước.</strong> Ngân hàng nào cần cứu thì cổ đông bị xóa sổ hoặc pha loãng mạnh trước khi tiền nhà nước vào. Đây là điểm mấu chốt về mặt chính trị và đạo đức.</li>
<li><strong>Bảo lãnh người gửi tiền</strong> để ngăn hoảng loạn rút tiền, nhưng <em>không</em> bảo lãnh cổ đông.</li>
<li><strong>Lập công ty quản lý tài sản riêng</strong> (Securum) tiếp nhận tài sản xấu, tách khỏi ngân hàng lành mạnh, rồi bán ra dần trong nhiều năm khi thị trường phục hồi.</li>
<li><strong>Minh bạch và có sự đồng thuận chính trị rộng</strong> giữa các đảng, để chính sách không bị đảo ngược giữa chừng.</li>
</ol>
<div class="tip-box"><strong>Nguyên tắc trung tâm:</strong> tách bạch giữa <em>cứu hệ thống</em> và <em>cứu người sở hữu</em>. Hệ thống thanh toán và tiền gửi phải được bảo vệ vì cả nền kinh tế phụ thuộc vào chúng. Cổ đông ngân hàng đã hưởng lợi nhuận khi cho vay liều lĩnh thì phải chịu lỗ. Trộn hai điều này lại là gốc rễ của mọi tranh cãi về giải cứu ngân hàng.</div>`,
        advanced: `<h3>Vì sao cách này rẻ hơn</h3>
<table>
<tr><th>Cách làm</th><th>Điều gì xảy ra</th></tr>
<tr><td><strong>Trì hoãn</strong> (Nhật, và Ireland giai đoạn đầu)</td><td>Ngân hàng ôm tài sản xấu, không dám ghi lỗ, tiếp tục cho các con nợ yếu vay để tránh phải ghi nhận nợ xấu. Vốn bị kẹt trong hoạt động không sinh lời, ngân hàng không cho vay được cho dự án mới. Nền kinh tế đình trệ kéo dài.</td></tr>
<tr><td><strong>Xử lý dứt điểm</strong> (Thụy Điển)</td><td>Lỗ được ghi nhận ngay, đau một lần. Tài sản xấu được tách ra và bán dần. Ngân hàng còn lại có bảng cân đối sạch và cho vay trở lại được. Kinh tế phục hồi nhanh hơn.</td></tr>
</table>
<p>Về mặt số học, chi phí ròng cuối cùng mà nhà nước Thụy Điển phải gánh thấp hơn nhiều so với ước tính ban đầu, một phần vì các tài sản tiếp nhận được bán ra khi thị trường đã hồi phục.</p>
<div class="warning-box"><strong>Điều kiện làm cách này khả thi — và vì sao khó sao chép:</strong>
<ul>
<li>Cần <strong>ý chí chính trị</strong> để xóa sổ cổ đông, gồm cả những người có ảnh hưởng.</li>
<li>Cần <strong>đồng thuận giữa các đảng</strong>, nếu không chính sách sẽ bị đảo ngược sau bầu cử.</li>
<li>Cần <strong>năng lực định giá tài sản</strong> đủ tốt để biết lỗ thật là bao nhiêu.</li>
<li>Quy mô nền kinh tế nhỏ và đồng nhất giúp việc phối hợp dễ hơn.</li>
</ul>
</div>
<h3>Ý nghĩa cho người mua nhà bình thường</h3>
<div class="tip-box"><strong>Bạn không quyết định được chính sách, nhưng bạn đọc được tín hiệu.</strong> Khi một cuộc khủng hoảng bất động sản xảy ra, hãy quan sát cách nó được xử lý: nếu nợ xấu được nhận diện và xử lý nhanh, giai đoạn đóng băng sẽ ngắn hơn và thị trường phục hồi sớm hơn. Nếu vấn đề bị trì hoãn và che đậy, hãy chuẩn bị cho một giai đoạn đình trệ dài — và đừng đặt kế hoạch tài chính của mình dựa trên giả định thị trường sẽ hồi phục trong một hai năm.</div>`,
        diagram: null
    },

    'us-sl-1980': {
        icon: '🏦', title: 'Mỹ Thập Niên 1980 — Khủng Hoảng Tiết Kiệm & Cho Vay', category: 'cases',
        connections: ['lai-suat-tha-noi', 'se-1992', 'us-2008', 'us-tong-quan'],
        simple: `<h3>🏦 Mỹ Thập Niên 1980 — Khủng Hoảng Tiết Kiệm & Cho Vay</h3>
<p>Đây là cuộc khủng hoảng ít được nhắc tới hơn 2008, nhưng nó minh họa một rủi ro rất cụ thể mà người vay mua nhà ở Việt Nam nên hiểu: <strong>rủi ro lệch kỳ hạn</strong>.</p>
<div class="example-box"><strong>Mô hình kinh doanh của các quỹ tiết kiệm và cho vay (Savings & Loan):</strong> huy động tiền gửi ngắn hạn với lãi suất thấp, cho vay mua nhà dài hạn 30 năm với lãi suất cố định. Mô hình này sinh lời tốt — chừng nào lãi suất còn ổn định.</div>
<p>Cuối thập niên 1970 và đầu 1980, để chống lạm phát cao, Cục Dự trữ Liên bang nâng lãi suất lên mức rất cao. Các quỹ này đột nhiên phải trả lãi tiền gửi cao hơn nhiều so với lãi họ đang thu từ các khoản vay cố định đã cho vay nhiều năm trước.</p>`,
        detail: `<h3>Cơ chế phá sản</h3>
<p>Hãy hình dung con số cụ thể:</p>
<ul>
<li>Quỹ đã cho vay mua nhà 30 năm ở lãi suất cố định 8%/năm từ những năm trước.</li>
<li>Để giữ tiền gửi, giờ họ phải trả người gửi 12%/năm.</li>
<li>Mỗi đồng cho vay khiến họ <strong>lỗ 4%/năm</strong>, và họ không thể làm gì cả — các khoản vay đó cố định lãi suất trong 30 năm.</li>
</ul>
<div class="warning-box"><strong>Đây là rủi ro lệch kỳ hạn: tài sản dài hạn, nguồn vốn ngắn hạn.</strong> Nó không liên quan gì tới chất lượng người vay — những người vay đó vẫn trả nợ đầy đủ. Vấn đề nằm hoàn toàn ở cấu trúc bảng cân đối.</div>
<h3>Điều làm mọi thứ tệ hơn</h3>
<ol>
<li><strong>Nới lỏng quy định.</strong> Để cứu các quỹ đang thua lỗ, quy định được nới cho phép họ đầu tư vào các lĩnh vực rủi ro cao hơn — bất động sản thương mại, trái phiếu lợi suất cao.</li>
<li><strong>Rủi ro đạo đức.</strong> Vì tiền gửi được bảo hiểm, các quỹ đã mất vốn có động cơ đánh cược lớn: thắng thì hồi phục, thua thì đằng nào cũng đã phá sản. Đây là hiện tượng "đánh bạc để phục sinh".</li>
<li><strong>Kế toán che giấu.</strong> Các quy tắc kế toán được nới lỏng cho phép che giấu mức độ mất vốn thực, làm vấn đề kéo dài và lớn hơn.</li>
</ol>
<p>Kết quả: khoảng một nghìn tổ chức phá sản. Một cơ quan chuyên trách (Resolution Trust Corporation) được lập để xử lý tài sản của các quỹ đổ vỡ. Chi phí cuối cùng cho người đóng thuế là hàng chục tỷ đô la.</p>`,
        advanced: `<h3>Vì sao chuyện này quan trọng với người vay mua nhà ở Việt Nam</h3>
<div class="warning-box"><strong>Đây chính là lý do ngân hàng Việt Nam không cho vay cố định lãi suất 20 năm.</strong> Họ huy động tiền gửi kỳ hạn vài tháng đến một năm, và cho vay 20 năm. Nếu cố định lãi suất, họ sẽ gánh đúng rủi ro đã làm sụp đổ ngành S&L của Mỹ.<br><br>
Giải pháp của họ: <strong>chuyển rủi ro đó cho bạn</strong> thông qua cơ chế lãi suất thả nổi. Khi lãi suất tăng, khoản trả góp của bạn tăng theo, và ngân hàng được bảo vệ.</div>
<p>Nói cách khác, mỗi khi bạn nhìn dòng "lãi suất cơ sở + biên độ" trong hợp đồng vay, bạn đang nhìn vào bài học mà hệ thống tài chính rút ra từ cuộc khủng hoảng này. Rủi ro không biến mất — nó chỉ đổi chỗ.</p>
<h3>Vì sao Mỹ vẫn có vay cố định 30 năm</h3>
<p>Mỹ giải quyết bài toán theo cách khác: thay vì để ngân hàng gánh rủi ro lãi suất, họ <strong>chứng khoán hóa và bán khoản vay ra thị trường vốn</strong>, nơi có các nhà đầu tư dài hạn (quỹ hưu trí, công ty bảo hiểm) sẵn sàng gánh rủi ro đó. Xem chủ điểm về thị trường Mỹ.</p>
<div class="tip-box"><strong>Ba điều rút ra:</strong>
<ol>
<li><strong>Rủi ro lãi suất luôn phải có ai đó gánh.</strong> Câu hỏi duy nhất là ai. Ở Mỹ là nhà đầu tư trái phiếu; ở Việt Nam là người vay mua nhà.</li>
<li><strong>Bảo hiểm mà không có giám sát tạo ra rủi ro đạo đức.</strong> Khi phần thua được xã hội gánh còn phần thắng thuộc về cổ đông, hành vi đánh cược trở nên hợp lý về mặt cá nhân.</li>
<li><strong>Nới lỏng quy định để cứu một ngành đang lỗ thường làm vấn đề lớn hơn,</strong> vì nó cho phép các tổ chức đã mất vốn tiếp tục đánh cược bằng tiền của người khác.</li>
</ol>
</div>`,
        diagram: null
    },

    'at-vienna': {
        icon: '🇦🇹', title: 'Vienna — Mô Hình Nhà Ở Công Bền Bỉ Nhất', category: 'cases',
        connections: ['sg-hdb', 'de-thue-nha', 'vn-nha-o-xa-hoi', 'hk-nha-o'],
        simple: `<h3>🇦🇹 Vienna — Mô Hình Nhà Ở Công Bền Bỉ Nhất</h3>
<p>Nếu Singapore là mô hình nhà ở công thành công nhất châu Á, thì Vienna là mô hình bền bỉ nhất châu Âu — và nó đi theo một con đường hoàn toàn khác.</p>
<div class="example-box"><strong>Khác biệt cốt lõi so với Singapore:</strong> Singapore biến người dân thành <strong>chủ sở hữu</strong>. Vienna biến việc <strong>đi thuê</strong> thành một lựa chọn tốt, ổn định, và không mang định kiến xã hội. Một tỷ lệ rất lớn người dân Vienna sống trong nhà do thành phố sở hữu hoặc nhà được trợ giá bởi các tổ chức xây dựng phi lợi nhuận.</div>
<p>Thành phố Vienna là một trong những chủ nhà lớn nhất châu Âu, và Vienna thường xuyên đứng đầu các bảng xếp hạng về chất lượng sống.</p>`,
        detail: `<h3>Mô hình vận hành thế nào</h3>
<table>
<tr><th>Thành phần</th><th>Cơ chế</th></tr>
<tr><td><strong>Nhà của thành phố (Gemeindebau)</strong></td><td>Thành phố xây và sở hữu, cho thuê với giá dựa trên chi phí, không nhằm tối đa lợi nhuận</td></tr>
<tr><td><strong>Nhà xây bởi tổ chức lợi nhuận giới hạn</strong></td><td>Các hiệp hội nhà ở được ưu đãi đất và vốn, đổi lại bị giới hạn mức lợi nhuận và phải giữ giá thuê ở mức hợp lý lâu dài</td></tr>
<tr><td><strong>Nguồn tài chính</strong></td><td>Có nguồn thu dành riêng cho nhà ở, được duy trì ổn định qua nhiều thập kỷ thay vì phụ thuộc ngân sách hàng năm</td></tr>
<tr><td><strong>Điều kiện tiếp cận rộng</strong></td><td>Ngưỡng thu nhập đủ cao để tầng lớp trung lưu cũng đủ điều kiện — đây là điểm mấu chốt</td></tr>
<tr><td><strong>Thành phố chủ động mua đất</strong></td><td>Giữ quỹ đất dài hạn để có thể xây khi cần, thay vì phải mua theo giá thị trường lúc cấp bách</td></tr>
</table>
<div class="tip-box"><strong>Điểm thiết kế quan trọng nhất và hay bị bỏ qua: ngưỡng thu nhập rộng.</strong> Ở nhiều nước, nhà ở xã hội chỉ dành cho người thu nhập rất thấp. Kết quả là nó trở thành nơi tập trung nghèo đói, mang định kiến, chất lượng xuống cấp, và mất đi sự ủng hộ chính trị của tầng lớp trung lưu — những người vừa đóng thuế nhiều nhất vừa không được hưởng gì.<br><br>
Vienna làm ngược lại: giáo viên, y tá, nhân viên văn phòng đều đủ điều kiện. Nên nhà ở công là chuyện của <em>mọi người</em>, được duy trì tốt, và có nền tảng chính trị vững qua nhiều thập kỷ.</div>`,
        advanced: `<h3>Tác động lên thị trường tư nhân</h3>
<p>Đây là điểm kinh tế thú vị nhất: khi một tỷ trọng lớn nguồn cung nhà ở nằm ngoài động cơ tối đa lợi nhuận, nó <strong>tạo áp lực cạnh tranh lên toàn bộ thị trường cho thuê</strong>. Chủ nhà tư nhân không thể đòi giá quá cao khi người thuê có lựa chọn thay thế thực sự.</p>
<p>Nói cách khác, nhà ở công ở Vienna không chỉ phục vụ người sống trong đó — nó kìm giá cho cả những người thuê nhà tư nhân. Đây là hiệu ứng mà các chương trình nhà ở xã hội quy mô nhỏ không tạo ra được.</p>
<div class="warning-box"><strong>Đánh đổi và giới hạn cần thừa nhận:</strong>
<ul>
<li>Mô hình được xây dựng qua <strong>hơn một thế kỷ</strong> với cam kết chính trị liên tục — không thể dựng lên trong một nhiệm kỳ.</li>
<li>Nó đòi hỏi thành phố nắm giữ quỹ đất lớn, điều rất khó khi giá đất đã cao.</li>
<li>Danh sách chờ vẫn tồn tại; không phải ai cũng vào được ngay.</li>
<li>Áp lực gần đây từ tăng dân số và chi phí xây dựng đang thử thách mô hình.</li>
<li>Nó phụ thuộc vào năng lực quản lý vận hành tốt trong thời gian rất dài.</li>
</ul>
</div>
<h3>Ba nguyên tắc rút ra được cho Việt Nam</h3>
<div class="tip-box">
<ol>
<li><strong>Đối tượng thụ hưởng rộng thì chính sách mới bền.</strong> Nhà ở xã hội chỉ dành cho nhóm rất hẹp sẽ luôn thiếu nguồn lực và sự ủng hộ. Đây có lẽ là bài học quan trọng nhất.</li>
<li><strong>Quỹ đất phải được giữ trước, không phải mua sau.</strong> Khi thành phố cần xây nhà giá phải chăng mà phải mua đất theo giá thị trường tại thời điểm đó, bài toán gần như không giải được.</li>
<li><strong>Nguồn tài chính ổn định dài hạn quan trọng hơn quy mô một gói hỗ trợ.</strong> Các gói tín dụng ưu đãi có thời hạn tạo ra đợt sóng rồi tắt; một cơ chế tài chính bền vững tạo ra nguồn cung liên tục.</li>
</ol>
</div>`,
        diagram: null
    },

    'ar-lam-phat': {
        icon: '🇦🇷', title: 'Argentina — Bất Động Sản Khi Tiền Mất Giá', category: 'cases',
        connections: ['lam-phat-bds', 'thanh-khoan', 'th-1997', 'mau-hinh-chung'],
        simple: `<h3>🇦🇷 Argentina — Bất Động Sản Khi Tiền Mất Giá</h3>
<p>Đây là case study về một cơ chế cực đoan: điều gì xảy ra với thị trường bất động sản khi đồng nội tệ mất giá liên tục trong nhiều thập kỷ.</p>
<div class="example-box"><strong>Đặc điểm khiến người ngoài thấy khó tin:</strong> ở Argentina, bất động sản được <strong>niêm yết và giao dịch bằng đô la Mỹ</strong>, và phần lớn giao dịch được thanh toán bằng <strong>tiền mặt đô la</strong> — người mua mang tiền mặt tới ngân hàng hoặc phòng công chứng để đếm tại chỗ. Thị trường vay mua nhà gần như không tồn tại ở quy mô đáng kể.</div>`,
        detail: `<h3>Vì sao lại thành ra như vậy</h3>
<p>Chuỗi nhân quả rất rõ ràng, và nó cho thấy một hệ thống tài chính có thể bị phá hủy như thế nào:</p>
<ol>
<li><strong>Lạm phát cao và kéo dài</strong> khiến không ai muốn cho vay dài hạn bằng nội tệ — khoản nợ sẽ bị bào mòn về gần bằng không.</li>
<li><strong>Không có thị trường vay mua nhà</strong> vì ngân hàng không thể định giá rủi ro cho một khoản vay 20 năm khi không biết đồng tiền sẽ đáng giá bao nhiêu.</li>
<li><strong>Người dân chuyển sang đô la</strong> để cất giữ giá trị — đô la trở thành đơn vị tính toán thực tế cho các tài sản lớn.</li>
<li><strong>Kiểm soát ngoại hối</strong> làm việc tiếp cận đô la chính thức khó khăn, sinh ra tỷ giá song song và thúc đẩy giao dịch tiền mặt.</li>
<li><strong>Bất động sản trở thành nơi cất giữ của cải</strong> — không phải vì nó sinh lời tốt, mà vì các lựa chọn khác còn tệ hơn.</li>
</ol>
<div class="warning-box"><strong>Hệ quả với thị trường:</strong>
<ul>
<li><strong>Thanh khoản rất thấp</strong> — chỉ người có sẵn đô la tiền mặt mới mua được, nên số người mua tiềm năng nhỏ hơn nhiều.</li>
<li><strong>Người trẻ gần như không mua được nhà</strong> nếu không có hỗ trợ từ gia đình — không có đòn bẩy nghĩa là phải tích lũy đủ 100% giá trị.</li>
<li><strong>Thị trường cho thuê chịu áp lực lớn</strong> và các nỗ lực kiểm soát giá thuê thường phản tác dụng, làm nguồn cung cho thuê co lại.</li>
<li><strong>Giá tính bằng đô la lại khá ổn định</strong> — nghịch lý là thị trường này ít biến động hơn nhiều thị trường "bình thường", vì không có đòn bẩy để khuếch đại.</li>
</ul>
</div>`,
        advanced: `<h3>Bài học ngược: đòn bẩy tạo ra cả cơ hội lẫn bong bóng</h3>
<p>Argentina cho ta một thí nghiệm tự nhiên rất hữu ích. Ở đó gần như không có tín dụng mua nhà, và kết quả là:</p>
<table>
<tr><th>Không có tín dụng dẫn tới</th><th>Hệ quả</th></tr>
<tr><td>Không có bong bóng do tín dụng</td><td>Giá không tách rời quá xa khỏi khả năng chi trả bằng tiền mặt thật</td></tr>
<tr><td>Không có vòng xoáy vỡ nợ hàng loạt</td><td>Không có khủng hoảng ngân hàng bắt nguồn từ bất động sản</td></tr>
<tr><td>Nhưng cũng không ai mua được nhà</td><td>Tỷ lệ sở hữu nhà của người trẻ rất thấp; bất bình đẳng tài sản giữa các thế hệ rất lớn</td></tr>
<tr><td>Thanh khoản kém</td><td>Bán một căn nhà có thể mất rất lâu</td></tr>
</table>
<div class="tip-box"><strong>Đây là bằng chứng trực tiếp cho luận điểm ở chủ điểm "Tín dụng & lãi suất điều khiển giá nhà":</strong> tín dụng là thứ quyết định giá nhà. Bỏ tín dụng đi, giá không thể tách rời thu nhập, nhưng thị trường cũng gần như ngừng hoạt động và cả một thế hệ bị loại khỏi việc sở hữu nhà.<br><br>
Nói cách khác, tín dụng mua nhà không phải là kẻ xấu. Vấn đề luôn là <em>liều lượng</em> và <em>chất lượng thẩm định</em>, chứ không phải bản thân sự tồn tại của nó.</div>
<h3>Điều đáng suy nghĩ cho Việt Nam</h3>
<div class="warning-box">Việt Nam có một số điểm gợi nhớ tới cơ chế này ở quy mô nhỏ hơn nhiều: thói quen định giá tài sản lớn theo vàng hoặc đô la ở một số giao dịch, tỷ trọng giao dịch tiền mặt cao, và tâm lý coi bất động sản là nơi trú ẩn khỏi mất giá tiền tệ.<br><br>
Điều làm Việt Nam khác biệt căn bản là <strong>đã có thị trường tín dụng mua nhà hoạt động được</strong> — và đó là tài sản thể chế đáng giá. Nó cho phép người không có sẵn toàn bộ tiền vẫn mua được nhà. Cái giá đi kèm là thị trường trở nên nhạy cảm với chu kỳ tín dụng, đúng như mọi chủ điểm khác trong trang này đã mô tả.</div>`,
        diagram: null
    }
};
