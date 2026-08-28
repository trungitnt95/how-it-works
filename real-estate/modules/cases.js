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
        diagram: 're-cycle'
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
    }
};
