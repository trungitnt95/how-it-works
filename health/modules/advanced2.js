// Sức Khỏe - Kiến thức nâng cao (phần 2: chủ đề 30-32)
window.HEALTH_TOPICS = window.HEALTH_TOPICS || [];

window.HEALTH_TOPICS.push({
    id: 'supplements', order: 30, section: 'advanced', icon: '💊',
    title: 'Thực phẩm chức năng và "thần dược"',
    summary: 'Thực phẩm chức năng khác thuốc thế nào, ai thật sự cần, bằng chứng cho từng loại, rủi ro quá liều, hàng giả và cách chọn mua.',
    keywords: 'thực phẩm chức năng thực phẩm bảo vệ sức khỏe vitamin khoáng chất omega-3 collagen glucosamine probiotic thảo dược creatine quá liều hàng giả quảng cáo đa cấp tương tác thuốc',
    sources: ['NIH Office of Dietary Supplements - Fact sheets', 'US National Academies - Dietary Reference Intakes (Tolerable Upper Intake Levels)', 'US Preventive Services Task Force - Vitamin, mineral, and multivitamin supplementation (2022)', 'Cục An toàn thực phẩm (Bộ Y tế) - Quy định quản lý thực phẩm bảo vệ sức khỏe, quảng cáo thực phẩm'],
    html: `
<p>Thị trường thực phẩm chức năng rất lớn và đầy quảng cáo hứa hẹn. Nhiều người tin rằng "uống thêm cho chắc" là vô hại. Thực tế: một số loại thật sự cần thiết trong những hoàn cảnh cụ thể, nhưng <strong>đa số người ăn uống đầy đủ không cần</strong>, và nhiều sản phẩm có bằng chứng yếu, tốn tiền hoặc thậm chí gây hại.</p>

<h2>Thực phẩm chức năng là gì, khác thuốc ở đâu?</h2>
<ul>
<li><strong>Thực phẩm chức năng</strong> (ở Việt Nam gọi chính thức là <strong>thực phẩm bảo vệ sức khỏe</strong>) là sản phẩm để bổ sung chế độ ăn, chứa vitamin, khoáng chất, axit amin, chất xơ, thảo dược, enzyme, probiotic... dạng viên, bột, nước, cao...</li>
<li><strong>Không phải là thuốc</strong>, <strong>không có tác dụng thay thế thuốc chữa bệnh</strong> (đây là dòng bắt buộc trên nhãn theo quy định). Không được quảng cáo "chữa khỏi", "điều trị" bệnh.</li>
<li>Khác với thuốc: không phải chứng minh hiệu quả điều trị qua thử nghiệm lâm sàng theo quy trình nghiêm ngặt; quản lý chất lượng, kiểm soát sản phẩm ít chặt hơn, nên chất lượng, hàm lượng thực tế có thể khác nhãn, và có nguy cơ bị trộn hoạt chất cấm.</li>
<li>Ở Việt Nam, sản phẩm phải được <strong>công bố hoặc đăng ký với cơ quan quản lý an toàn thực phẩm</strong>; hãy kiểm tra số đăng ký/công bố trên nhãn và tra cứu trên trang của cơ quan chức năng. Quảng cáo quá mức, gắn với "tác dụng chữa bệnh" là vi phạm quy định.</li>
</ul>

<h2>Ai thật sự cần bổ sung?</h2>
<table>
<tr><th>Đối tượng / tình huống</th><th>Bổ sung thường được khuyến cáo</th></tr>
<tr><td>Phụ nữ chuẩn bị mang thai và 3 tháng đầu</td><td>Acid folic 400 µg/ngày</td></tr>
<tr><td>Phụ nữ mang thai</td><td>Sắt, acid folic, iốt, canxi và vitamin D theo hướng dẫn bác sĩ</td></tr>
<tr><td>Trẻ bú mẹ</td><td>Vitamin D 400 IU/ngày; sắt theo khuyến cáo từ 4–6 tháng ở trẻ nguy cơ</td></tr>
<tr><td>Người ăn chay trường, thuần chay</td><td>Vitamin B12 (bắt buộc); xem xét vitamin D, iốt, DHA (dầu tảo), sắt, kẽm, canxi</td></tr>
<tr><td>Người cao tuổi</td><td>Vitamin D (nếu thiếu/nguy cơ té ngã, loãng xương), vitamin B12 (kém hấp thu); canxi nếu ăn thiếu</td></tr>
<tr><td>Thiếu vi chất đã được chẩn đoán qua xét nghiệm</td><td>Sắt, vitamin D, B12, folate... theo liều điều trị của bác sĩ</td></tr>
<tr><td>Bệnh kém hấp thu, sau phẫu thuật giảm béo, dùng thuốc lâu dài (ví dụ metformin lâu dài, PPI)</td><td>Vitamin B12, sắt, canxi, vitamin D... theo dõi và bổ sung theo tư vấn</td></tr>
<tr><td>Thoái hóa hoàng điểm tuổi già giai đoạn trung gian</td><td>Công thức AREDS2 (vitamin C, E, kẽm, đồng, lutein, zeaxanthin) theo chỉ định nhãn khoa</td></tr>
<tr><td>Tăng triglyceride rất cao</td><td>Omega-3 liều cao (thuốc kê đơn) theo bác sĩ</td></tr>
<tr><td>Người tập sức mạnh</td><td>Creatine monohydrate (có bằng chứng); đạm bổ sung nếu khó đạt qua thức ăn</td></tr>
</table>

<h2>Bằng chứng hiện có cho các sản phẩm phổ biến</h2>
[[img:supplements|Thực phẩm chức năng dạng viên: chỉ nên dùng khi có lý do rõ ràng.]]
<table>
<tr><th>Sản phẩm</th><th>Điều khoa học nói</th></tr>
<tr><td><strong>Multivitamin</strong></td><td>Ở người khỏe, ăn đủ: không chứng minh giảm tử vong, ung thư, bệnh tim mạch; có thể bù khoảng trống dinh dưỡng ở người ăn kém. Không thay thế chế độ ăn tốt</td></tr>
<tr><td><strong>Vitamin C</strong></td><td>Không phòng được cảm lạnh ở dân số chung; có thể rút ngắn nhẹ thời gian bệnh; liều cao gây tiêu chảy, sỏi thận</td></tr>
<tr><td><strong>Vitamin D</strong></td><td>Có ích khi thiếu; ở người không thiếu, các thử nghiệm lớn (như VITAL) không thấy giảm ung thư, bệnh tim mạch. Liều quá cao gây hại</td></tr>
<tr><td><strong>Omega-3 (dầu cá)</strong></td><td>Ăn cá tốt; viên dầu cá liều thông thường không giảm rõ biến cố tim mạch ở người khỏe; liều cao dạng kê đơn giảm triglyceride ở người chọn lọc; liều cao có thể tăng nhẹ nguy cơ rung nhĩ</td></tr>
<tr><td><strong>Canxi</strong></td><td>Ưu tiên từ thức ăn; viên bổ sung chỉ khi ăn thiếu, không quá 500 mg/lần; dư thừa tăng nguy cơ sỏi thận</td></tr>
<tr><td><strong>Vitamin E, beta-carotene, chống oxy hóa liều cao</strong></td><td>Không có lợi; beta-carotene làm tăng nguy cơ ung thư phổi ở người hút thuốc. "Chống oxy hóa" từ thực phẩm tốt hơn viên</td></tr>
<tr><td><strong>Kẽm</strong></td><td>Ngậm viên kẽm sớm có thể rút ngắn cảm lạnh nhẹ; dùng liều cao lâu dài gây thiếu đồng, tổn thương thần kinh</td></tr>
<tr><td><strong>Magie</strong></td><td>Bổ sung khi thiếu; hiệu quả với chuột rút, mất ngủ chưa rõ; dư gây tiêu chảy</td></tr>
<tr><td><strong>Probiotic</strong></td><td>Hiệu quả chọn lọc theo chủng và chỉ định (xem bài Hệ vi sinh)</td></tr>
<tr><td><strong>Glucosamine, chondroitin, collagen</strong></td><td>Hiệu quả trên thoái hóa khớp yếu hoặc không nhất quán; collagen uống làm đẹp da: một số nghiên cứu nhỏ, chất lượng thấp, nhiều nghiên cứu do nhà sản xuất tài trợ</td></tr>
<tr><td><strong>Nghệ/curcumin</strong></td><td>Khó hấp thu; có thể giảm nhẹ đau viêm khớp ở một số nghiên cứu; chưa phải điều trị chuẩn; liều cao hiếm gây tổn thương gan</td></tr>
<tr><td><strong>Nấm linh chi, đông trùng hạ thảo, nhân sâm, tam thất, sâm...</strong></td><td>Hầu hết thiếu thử nghiệm lâm sàng chất lượng cao; một số có tương tác thuốc (nhân sâm, tam thất ảnh hưởng đông máu)</td></tr>
<tr><td><strong>Chiết xuất trà xanh liều cao, nấm men gạo đỏ, một số thảo dược (kava, chó đẻ…)</strong></td><td>Có thể gây tổn thương gan; gạo lên men đỏ chứa lượng lovastatin không kiểm soát, có thể nhiễm độc tố citrinin</td></tr>
<tr><td><strong>Melatonin</strong></td><td>Hữu ích cho lệch múi giờ và làm ca; liều thấp (0,5–3 mg) thường đủ; chất lượng sản phẩm không đồng đều; không giải quyết mất ngủ mạn tính</td></tr>
<tr><td><strong>Sản phẩm "bổ gan", "giải độc", "tăng cường miễn dịch", "bổ não"</strong></td><td>Ít bằng chứng; đừng thay thế điều trị; hỏi bác sĩ</td></tr>
</table>

<h2>Rủi ro: nhiều hơn không phải tốt hơn</h2>
<ul>
<li><strong>Quá liều vitamin tan trong mỡ (A, D, E, K)</strong> tích lũy: vitamin A dư gây tổn thương gan, dị tật thai (đặc biệt không dùng liều cao khi mang thai); vitamin D dư gây tăng canxi máu, sỏi thận.</li>
<li><strong>Sắt:</strong> quá liều gây ngộ độc (đặc biệt nguy hiểm ở trẻ em); không tự dùng khi chưa có chỉ định.</li>
<li><strong>Mức tối đa dung nạp (UL)</strong> mỗi ngày cho người lớn (tính cả từ thực phẩm bổ sung, để tham khảo): vitamin A 3.000 µg; vitamin D 100 µg (4.000 IU); vitamin E 1.000 mg; vitamin C 2.000 mg; canxi 2.500 mg (2.000 mg sau 50 tuổi); sắt 45 mg; kẽm 40 mg; folate dạng tổng hợp 1.000 µg; magie từ viên bổ sung 350 mg.</li>
<li><strong>Tương tác thuốc:</strong> thảo dược có thể thay đổi nồng độ thuốc (ví dụ cỏ St John's wort làm giảm hiệu quả thuốc tránh thai, thuốc chống thải ghép; ginkgo, tỏi, gừng liều cao, nhân sâm tăng nguy cơ chảy máu với thuốc chống đông). Dừng thảo dược ít nhất 1–2 tuần trước phẫu thuật nếu bác sĩ dặn.</li>
<li><strong>Tổn thương gan do thực phẩm chức năng, thảo dược</strong> là nguyên nhân đáng kể của tổn thương gan do thuốc.</li>
<li><strong>Ngộ độc kim loại nặng</strong> (chì, thủy ngân, asen), hoặc <strong>bị trộn thuốc tây</strong> trong sản phẩm "thảo dược" là có thật.</li>
<li><strong>Chi phí:</strong> tốn tiền cho thứ không cần thiết, hoặc trì hoãn điều trị thật.</li>
</ul>
<div class="box danger"><b>Cảnh giác với sản phẩm bị trộn chất cấm</b>
<p>Các sản phẩm quảng cáo "giảm cân", "tăng cân nhanh", "cường dương", "xương khớp", "tiểu đường", "thuốc ngủ", "làm trắng da" là nhóm hay bị phát hiện trộn sibutramine, phenolphthalein, sildenafil/tadalafil, corticoid, thuốc hạ đường huyết, dẫn đến nhồi máu, đột quỵ, tổn thương gan, thận, suy thượng thận, hạ đường huyết nặng, tử vong. Nếu sản phẩm "hiệu quả ngay lập tức, mạnh như thuốc" thì hãy nghi ngờ.</p></div>

<h2>Cách nhận biết quảng cáo và hàng giả</h2>
<ul>
<li>Hứa <strong>"chữa khỏi", "điều trị dứt điểm", "100% thảo dược không tác dụng phụ", "thay thế thuốc", "thải độc", "tăng cường miễn dịch toàn diện"</strong>.</li>
<li>Dùng "bác sĩ", "giáo sư" xuất hiện trong video, hình ảnh ghép (nhiều vụ dùng công nghệ giả mạo giọng nói, hình ảnh bằng AI để quảng cáo sai sự thật); lời kể của người dùng; hình "trước - sau".</li>
<li>Bán qua <strong>mạng lưới đa cấp</strong> hoặc livestream với áp lực mua ngay, khuyến mại "chỉ hôm nay".</li>
<li>Không có số công bố/đăng ký hợp lệ; nhãn thiếu thông tin, không rõ nhà sản xuất, nhập khẩu, hạn dùng; giá rẻ bất thường; bán ở nơi không rõ nguồn gốc.</li>
<li>Bao bì, tem chống giả có dấu hiệu bất thường. Mua ở nhà thuốc, cửa hàng chính hãng, kênh chính thức; giữ hóa đơn.</li>
</ul>

<h2>Nếu bạn muốn dùng: checklist</h2>
<ol>
<li><strong>Tự hỏi:</strong> mình thiếu gì? Có xét nghiệm hay lý do rõ không? Ăn uống đã điều chỉnh chưa?</li>
<li><strong>Hỏi bác sĩ hoặc dược sĩ</strong> (đặc biệt nếu mang thai, cho con bú, bệnh gan - thận, đang dùng thuốc, chuẩn bị phẫu thuật, trẻ em).</li>
<li>Chọn sản phẩm có số công bố/đăng ký, nhà sản xuất uy tín, <strong>được kiểm nghiệm bởi bên thứ ba</strong> (ví dụ USP, NSF) nếu có; ghi rõ thành phần, hàm lượng từng chất; tránh "hỗn hợp độc quyền" không ghi liều.</li>
<li>Kiểm tra tổng liều (kể cả từ thực phẩm tăng cường, nhiều sản phẩm cùng chứa một vitamin) so với mức UL.</li>
<li>Dùng theo hướng dẫn, theo dõi phản ứng; ngưng và gặp bác sĩ nếu buồn nôn, phát ban, vàng da, đau bụng, nước tiểu sậm, hồi hộp...</li>
<li>Báo cho mọi nhân viên y tế về thực phẩm chức năng bạn đang dùng.</li>
<li>Giữ xa tầm tay trẻ em (viên vitamin nhiều màu giống kẹo).</li>
<li><strong>Thực phẩm trước, viên uống sau</strong>: một chế độ ăn phong phú cung cấp hàng nghìn hợp chất mà viên bổ sung không thay thế được.</li>
</ol>
<div class="box tip"><b>Ba nguyên tắc</b>
<ul>
<li>Chỉ bổ sung khi có lý do rõ ràng và liều hợp lý.</li>
<li>Không dùng thực phẩm chức năng thay thế thuốc hoặc trì hoãn đi khám.</li>
<li>Cảnh giác với bất kỳ sản phẩm nào hứa "thần kỳ".</li>
</ul></div>
`
});

window.HEALTH_TOPICS.push({
    id: 'health-literacy', order: 31, section: 'advanced', icon: '📰',
    title: 'Đọc hiểu thông tin y khoa và nhận diện tin giả',
    summary: 'Cách đánh giá nguồn tin, hiểu nghiên cứu khoa học, tương quan và nhân quả, nguy cơ tuyệt đối và tương đối, những hiểu lầm phổ biến.',
    keywords: 'tin giả thông tin sai lệch nghiên cứu khoa học thử nghiệm lâm sàng bằng chứng nguy cơ tương quan nhân quả placebo quảng cáo mạng xã hội chatbot AI kiểm chứng nguồn đáng tin',
    sources: ['WHO - Infodemic management; Health literacy', 'Cochrane - Understanding Evidence; Greenhalgh T. - How to Read a Paper', 'Bradford Hill (1965) - The Environment and Disease: Association or Causation?', 'Caulfield M. - SIFT (The Four Moves)'],
    html: `
<p>Thông tin sức khỏe ở khắp nơi: mạng xã hội, nhóm chat, video, quảng cáo, báo chí, và cả chatbot AI. Phần lớn hữu ích, nhưng không ít thông tin sai, cũ, bị cắt xén hoặc cố tình gây hiểu lầm vì lợi nhuận. WHO gọi tình trạng "bùng nổ" thông tin lẫn lộn thật giả là <strong>infodemic</strong>. Kỹ năng đọc hiểu và kiểm chứng thông tin y khoa là một phần của sức khỏe.</p>

<h2>Nguồn tin nào đáng tin?</h2>
<ul>
<li><strong>Tổ chức y tế công, có trách nhiệm:</strong> Bộ Y tế Việt Nam, Cục Y tế dự phòng, Viện Pasteur, các bệnh viện lớn; WHO, CDC, NHS (Anh), Mayo Clinic, Cleveland Clinic, Johns Hopkins, Hiệp hội chuyên ngành (AHA, ADA, ACS…).</li>
<li><strong>Tổng quan hệ thống và phân tích gộp</strong>, tiêu biểu là Cochrane.</li>
<li><strong>Tạp chí y khoa có bình duyệt</strong> (NEJM, Lancet, JAMA, BMJ…): đáng tin hơn nhưng cũng cần đọc có chọn lọc.</li>
<li>Kiểm tra: ai viết, họ có chuyên môn không, có nêu nguồn không, ngày đăng (thông tin y khoa thay đổi), có xung đột lợi ích (bán sản phẩm, tài trợ) không, có cân bằng giữa lợi và hại không.</li>
<li>Lời kể cá nhân, hình ảnh "trước - sau", người nổi tiếng, bài đăng viral <strong>không phải bằng chứng</strong>.</li>
</ul>

<h2>Thang bằng chứng</h2>
<p>Không phải mọi nghiên cứu có trọng lượng như nhau. Từ yếu đến mạnh:</p>
[[img:evidence|Tháp bằng chứng: ý kiến chuyên gia, báo cáo ca bệnh → nghiên cứu quan sát → thử nghiệm ngẫu nhiên có đối chứng → tổng quan hệ thống/phân tích gộp.]]
<table>
<tr><th>Loại</th><th>Đặc điểm</th><th>Hạn chế</th></tr>
<tr><td>Nghiên cứu phòng thí nghiệm (tế bào, động vật)</td><td>Cho biết cơ chế có thể xảy ra</td><td>Nhiều thứ "diệt tế bào ung thư trong ống nghiệm" không có tác dụng ở người; hầu hết thuốc thất bại khi thử ở người</td></tr>
<tr><td>Báo cáo ca bệnh</td><td>Mô tả một hoặc vài bệnh nhân</td><td>Không có nhóm so sánh; đưa ra giả thuyết</td></tr>
<tr><td>Nghiên cứu quan sát (bệnh - chứng, thuần tập)</td><td>Theo dõi nhóm người có/không có phơi nhiễm; thực tế, quy mô lớn</td><td>Nhiễu, thiên lệch; <strong>chỉ chứng minh liên quan, không chứng minh nguyên nhân</strong></td></tr>
<tr><td><strong>Thử nghiệm ngẫu nhiên có đối chứng (RCT)</strong></td><td>Chia ngẫu nhiên thành nhóm can thiệp và nhóm chứng (giả dược hoặc điều trị chuẩn), thường mù đôi</td><td>Có thể tốn kém, thời gian ngắn, dân số chọn lọc, không khả thi cho mọi câu hỏi</td></tr>
<tr><td><strong>Tổng quan hệ thống, phân tích gộp</strong></td><td>Tổng hợp nhiều nghiên cứu theo quy trình chặt chẽ</td><td>Chất lượng phụ thuộc nghiên cứu đầu vào</td></tr>
</table>
[[img:rct|Sơ đồ quy trình thử nghiệm ngẫu nhiên có đối chứng: tuyển chọn → phân nhóm ngẫu nhiên → theo dõi → phân tích.]]
<ul>
<li><strong>Đối chứng giả dược và mù đôi</strong> giúp loại trừ hiệu ứng giả dược (người dùng cảm thấy khá hơn chỉ vì tin vào điều trị) và thiên lệch của người đánh giá.</li>
<li><strong>Kết cục lâm sàng và kết cục thay thế:</strong> "giảm cholesterol" (thay thế) khác với "giảm nhồi máu cơ tim" (kết cục thật). Phải xem thuốc hoặc biện pháp có cải thiện điều người bệnh quan tâm không.</li>
<li><strong>Cỡ mẫu, thời gian, dân số:</strong> nghiên cứu 20 người trong 2 tuần khác với 20.000 người trong 5 năm.</li>
<li><strong>Bản sao, bình duyệt, tài trợ:</strong> kết quả tích cực từ một nghiên cứu nhỏ thường không lặp lại; xem có nghiên cứu độc lập tái lập không.</li>
</ul>

<h2>Tương quan không phải là nhân quả</h2>
<p>Hai thứ cùng xuất hiện không có nghĩa thứ này gây ra thứ kia. Ba lý do thường gặp:</p>
[[img:correlation|Tương quan và nhân quả: có thể do yếu tố thứ ba hoặc ngẫu nhiên.]]
<ul>
<li><strong>Yếu tố gây nhiễu:</strong> người uống cà phê nhiều có thể hút thuốc nhiều hơn; hút thuốc mới là nguyên nhân của bệnh. Người ăn chay thường có lối sống lành mạnh khác.</li>
<li><strong>Nhân quả đảo ngược:</strong> người bệnh nặng ăn kiêng, dùng thuốc, nên nhìn giống như "kiêng ăn gây bệnh".</li>
<li><strong>Trùng hợp ngẫu nhiên:</strong> nhiều cặp dữ liệu có tương quan vô nghĩa.</li>
<li>Để khẳng định nhân quả, cần nhiều bằng chứng hội tụ (Bradford Hill): tính nhất quán, mối liên quan mạnh, liều - đáp ứng, thứ tự thời gian, cơ chế hợp lý, và tốt nhất là thử nghiệm can thiệp.</li>
</ul>

<h2>Hiểu con số: nguy cơ tuyệt đối và tương đối</h2>
<div class="box info"><b>Ví dụ</b>
<p>Tin: "Ăn X làm tăng nguy cơ bệnh Y lên 50%". Nếu nguy cơ ban đầu là 2 trên 1.000 người, tăng 50% nghĩa là thành 3 trên 1.000: <strong>tăng tuyệt đối chỉ 1 người trên 1.000</strong>. Nếu nguy cơ ban đầu là 20 trên 100, tăng 50% thành 30 trên 100 (10 người thêm): rất khác.</p></div>
<ul>
<li>Luôn hỏi: <strong>nguy cơ ban đầu là bao nhiêu? thay đổi tuyệt đối là bao nhiêu?</strong> Quảng cáo thích dùng con số tương đối vì nghe lớn hơn.</li>
<li><strong>Số cần điều trị (NNT)</strong> cho biết cần điều trị bao nhiêu người để một người được lợi; <strong>số gây hại (NNH)</strong> tương tự cho tác hại.</li>
<li><strong>Có ý nghĩa thống kê (p &lt; 0,05)</strong> không có nghĩa là có ý nghĩa lâm sàng (hiệu quả có thể quá nhỏ). Khoảng tin cậy cho thấy độ chắc chắn.</li>
<li><strong>Độ nhạy, độ đặc hiệu và giá trị tiên đoán:</strong> với bệnh hiếm, xét nghiệm "chính xác 95%" vẫn cho nhiều kết quả dương tính giả, nên kết quả dương tính cần xác nhận (xem bài Tầm soát).</li>
<li><strong>Hồi quy về trung bình</strong> và <strong>hiệu ứng giả dược</strong> giải thích vì sao nhiều người cảm thấy "khỏi nhờ thuốc X": triệu chứng vốn dao động và thường tự giảm sau đợt nặng nhất.</li>
<li><strong>Chọn lọc dữ liệu (cherry-picking):</strong> dẫn một nghiên cứu ủng hộ quan điểm và bỏ qua nhiều nghiên cứu khác.</li>
</ul>

<h2>Dấu hiệu "đèn đỏ" của thông tin sai</h2>
<ul>
<li>"Bác sĩ/hãng dược không muốn bạn biết", "bí quyết bị che giấu", "chữa khỏi mọi bệnh", "chỉ một loại thức ăn/thuốc".</li>
<li>Kêu gọi cảm xúc mạnh (sợ hãi, tức giận), hối thúc chia sẻ gấp ("chia sẻ để cứu người").</li>
<li>Không nêu nguồn hoặc nguồn mơ hồ ("nghiên cứu của Đại học nào đó", "các nhà khoa học Mỹ").</li>
<li>Gắn với bán hàng, liên kết mua, mã giảm giá, tiếp thị đa cấp.</li>
<li>Giả mạo chuyên gia, bác sĩ, bệnh viện; video "deepfake".</li>
<li>Kích động bỏ điều trị chuẩn, vaccine, thuốc đang dùng.</li>
<li>Dùng từ "tự nhiên", "không hóa chất", "thải độc", "tăng cường miễn dịch" như lợi thế mặc nhiên. (Mọi thứ đều là hóa chất; "tự nhiên" không đồng nghĩa an toàn: nấm độc, cây độc, rắn độc đều tự nhiên.)</li>
<li>Thông tin cũ, đã bị bác bỏ nhưng vẫn lưu truyền; thông tin dịch từ nguồn không kiểm chứng.</li>
</ul>

<h2>Những quan niệm phổ biến: sự thật là gì?</h2>
<table>
<tr><th>Quan niệm</th><th>Điều khoa học hiện nay</th></tr>
<tr><td>"Phải uống 8 ly nước mỗi ngày"</td><td>Chỉ là gợi ý thô; nhu cầu nước thay đổi theo người; nước từ thức ăn và đồ uống khác đều tính (xem bài Nước)</td></tr>
<tr><td>"Bẻ khớp ngón tay gây viêm khớp"</td><td>Nghiên cứu không thấy liên quan với viêm khớp</td></tr>
<tr><td>"Chỉ dùng 10% bộ não"</td><td>Sai; chúng ta dùng toàn bộ bộ não, các vùng khác nhau hoạt động ở các thời điểm khác nhau</td></tr>
<tr><td>"Đọc, xem điện thoại trong tối làm hỏng mắt vĩnh viễn"</td><td>Gây mỏi mắt tạm thời; không gây tổn thương vĩnh viễn cho mắt người lớn; nhưng cận thị ở trẻ liên quan nhiều đến việc ít ra nắng và nhìn gần nhiều</td></tr>
<tr><td>"Cảm lạnh do trời lạnh, gió, điều hòa"</td><td>Cảm lạnh do virus; thời tiết lạnh và khô có thể làm virus dễ lây hoặc giảm sức chống của niêm mạc. "Trúng gió" là khái niệm dân gian, không phải chẩn đoán y học hiện đại</td></tr>
<tr><td>"Uống nước đá, ăn đồ lạnh gây bệnh"</td><td>Không có bằng chứng gây bệnh ở người khỏe (có thể gây khó chịu, đau họng thoáng qua ở một số người)</td></tr>
<tr><td>"Bột ngọt (MSG) gây hại, gây 'hội chứng nhà hàng Trung Quốc'"</td><td>Các cơ quan quản lý lớn coi an toàn ở mức tiêu thụ thông thường; thử nghiệm mù đôi không tái lập được hội chứng; nhưng thức ăn mặn nói chung cần hạn chế</td></tr>
<tr><td>"Vaccine cúm gây cúm"; "kháng sinh giúp mau khỏi cảm"</td><td>Đều sai (xem bài Vaccine, Dùng thuốc)</td></tr>
<tr><td>"Cạo râu, cạo lông làm mọc dày hơn"</td><td>Sai; chỉ làm đầu sợi lông cùn, trông dày hơn</td></tr>
<tr><td>"Ăn trứng làm tăng cholesterol nguy hiểm"</td><td>Ở người bình thường, ảnh hưởng nhỏ hơn so với chất béo bão hòa; một quả mỗi ngày thường chấp nhận được (người tiểu đường, bệnh tim nên theo tư vấn)</td></tr>
<tr><td>"Điện thoại, trạm phát sóng gây ung thư"</td><td>Chưa có bằng chứng thuyết phục; IARC xếp "có thể gây ung thư" (nhóm 2B) vì bằng chứng hạn chế, cùng nhóm với rau muối chua</td></tr>
<tr><td>"Truyền vitamin C, 'truyền trắng da', 'truyền thải độc' làm đẹp, chống ung thư"</td><td>Không có chứng cứ lợi ích cho người khỏe; có nguy cơ nhiễm trùng, sốc phản vệ, tổn thương thận; thuốc không rõ nguồn gốc. Chỉ truyền dịch khi có chỉ định y khoa</td></tr>
</table>

<h2>Quy trình kiểm chứng nhanh (SIFT)</h2>
<ol>
<li><strong>S - Stop (Dừng lại):</strong> trước khi tin hoặc chia sẻ, dừng và nhận ra cảm xúc của mình.</li>
<li><strong>I - Investigate the source (Tìm hiểu nguồn):</strong> ai đăng? có chuyên môn, uy tín, có bán hàng không?</li>
<li><strong>F - Find better coverage (Tìm nguồn tốt hơn):</strong> tìm cùng chủ đề trên trang của WHO, Bộ Y tế, bệnh viện lớn, Cochrane; xem các nguồn đáng tin có nói giống không.</li>
<li><strong>T - Trace claims (Truy nguồn gốc):</strong> tìm nghiên cứu, trích dẫn gốc; xem có bị cắt xén, hiểu sai không.</li>
</ol>
<ul>
<li>Kiểm tra ngày đăng; thông tin cũ có thể đã thay đổi.</li>
<li>Khi chia sẻ tin y tế, hãy chắc chắn đã kiểm chứng; <strong>không chuyển tiếp "tin chuỗi" sức khỏe</strong>. Báo cáo nội dung sai lệch trên nền tảng.</li>
</ul>

<h2>Dùng internet, chatbot AI và "tra bệnh"</h2>
<ul>
<li>Tìm kiếm triệu chứng trên mạng dễ gây lo lắng thái quá (hội chứng "cyberchondria") hoặc chủ quan. Kết quả nhắc đến bệnh hiếm, nặng chỉ vì nó được viết nhiều.</li>
<li><strong>Chatbot AI</strong> có thể giải thích khái niệm, giúp chuẩn bị câu hỏi, nhưng <strong>có thể sai, bịa thông tin hoặc trích dẫn không tồn tại</strong>, không khám được bệnh nhân, không biết đủ tiền sử của bạn. Không dùng để chẩn đoán hay quyết định điều trị; hãy kiểm chứng với nguồn đáng tin, và đưa thắc mắc cho bác sĩ. Cẩn thận khi nhập thông tin cá nhân, hồ sơ bệnh án lên ứng dụng không rõ chính sách bảo mật.</li>
<li>Khi có triệu chứng đáng lo hoặc kéo dài: <strong>đi khám</strong> thay vì tra cứu thêm.</li>
</ul>

<h2>Thử nghiệm lâm sàng và cơ quan quản lý</h2>
<ul>
<li>Thuốc mới đi qua các giai đoạn: tiền lâm sàng (tế bào, động vật) → <strong>Pha I</strong> (an toàn, liều, ít người) → <strong>Pha II</strong> (hiệu quả sơ bộ) → <strong>Pha III</strong> (hiệu quả và an toàn trên hàng trăm đến hàng nghìn người, so với điều trị chuẩn/giả dược) → cấp phép lưu hành → <strong>Pha IV</strong> (giám sát sau lưu hành).</li>
<li>Cơ quan quản lý (Cục Quản lý Dược của Bộ Y tế Việt Nam, FDA của Hoa Kỳ, EMA của châu Âu) xem xét hồ sơ, cấp phép và giám sát an toàn.</li>
<li>Đại dịch COVID-19 cho thấy quy trình có thể nhanh hơn nhờ đầu tư, chạy song song các bước, nhưng không bỏ qua tiêu chuẩn an toàn.</li>
</ul>

<h2>Những câu hỏi nên hỏi khi nhận thông tin y khoa</h2>
<ul>
<li>Thông tin này từ đâu? Ai đứng sau? Họ được lợi gì?</li>
<li>Bằng chứng là gì: người, động vật hay tế bào? quy mô? đối chứng? được nhiều nghiên cứu khác xác nhận chưa?</li>
<li>Lợi ích bao nhiêu (tuyệt đối)? rủi ro, tác dụng phụ? có lựa chọn khác không? chi phí?</li>
<li>Có phù hợp với tôi (tuổi, bệnh nền, thuốc đang dùng) không?</li>
<li>Bác sĩ của tôi nghĩ gì về điều này?</li>
</ul>
<div class="box tip"><b>Tóm lại</b>
<ul>
<li>Ưu tiên nguồn chính thống; nghi ngờ những lời hứa thần kỳ, những gì quá tốt để là thật.</li>
<li>Một nghiên cứu đơn lẻ, câu chuyện cá nhân, hay tương quan không phải là chứng cứ chắc chắn.</li>
<li>Xem nguy cơ tuyệt đối; hỏi về cả lợi và hại.</li>
<li>Kiểm chứng trước khi chia sẻ; khi nghi ngờ, hỏi nhân viên y tế.</li>
</ul></div>
`
});

window.HEALTH_TOPICS.push({
    id: 'doctor-visit', order: 32, section: 'advanced', icon: '🏥',
    title: 'Đi khám thế nào cho hiệu quả',
    summary: 'Chọn cơ sở và chuyên khoa, chuẩn bị, giao tiếp với bác sĩ, quyền người bệnh, ý kiến thứ hai, bảo hiểm y tế và hồ sơ sức khỏe.',
    keywords: 'đi khám bác sĩ chuyên khoa chọn khoa chuẩn bị khám câu hỏi quyền người bệnh ý kiến thứ hai hội chẩn bảo hiểm y tế bhyt chuyển tuyến hồ sơ bệnh án y học cổ truyền khám từ xa nhập viện',
    sources: ['Luật Khám bệnh, chữa bệnh 2023 (Việt Nam)', 'Luật Bảo hiểm y tế và các văn bản hướng dẫn (Bộ Y tế, Bảo hiểm xã hội Việt Nam)', 'AHRQ - Questions Are the Answer; Ask Me 3 (IHI)', 'WHO - Patient Safety; Patients for Patient Safety'],
    html: `
<p>Buổi khám thường chỉ kéo dài vài phút đến vài chục phút, nhưng quyết định điều gì xảy ra tiếp theo: chẩn đoán, xét nghiệm, điều trị. Cách bạn chuẩn bị, trình bày và đặt câu hỏi ảnh hưởng đáng kể đến chất lượng chăm sóc. Bài này tổng hợp những điều thiết thực, kèm quyền và trách nhiệm của người bệnh.</p>

<h2>Hệ thống y tế và chọn nơi khám</h2>
<ul>
<li>Việt Nam có các tuyến: <strong>trạm y tế xã/phường</strong> → <strong>trung tâm y tế, bệnh viện huyện/quận</strong> → <strong>bệnh viện tỉnh/thành phố</strong> → <strong>bệnh viện trung ương, chuyên khoa</strong>; cộng với các phòng khám, bệnh viện tư.</li>
<li><strong>Bệnh nhẹ, bệnh thường gặp, bệnh mạn tính ổn định, khám sức khỏe, tiêm chủng:</strong> nên bắt đầu ở tuyến cơ sở hoặc phòng khám gần nhà; bác sĩ ở đây biết bạn, chi phí thấp, đỡ quá tải tuyến trên.</li>
<li><strong>Bệnh phức tạp, cần kỹ thuật cao:</strong> bác sĩ sẽ chuyển lên tuyến trên.</li>
<li><strong>Cấp cứu:</strong> đến cơ sở y tế gần nhất hoặc gọi <strong>115</strong>. Không cần chuyển tuyến khi cấp cứu.</li>
<li>Bác sĩ gia đình/bác sĩ đa khoa là "điểm đầu" quan trọng: nắm toàn bộ tình trạng, phối hợp chuyên khoa, tránh xét nghiệm lặp lại.</li>
</ul>
<h3>Bảo hiểm y tế (BHYT)</h3>
<ul>
<li>Mang thẻ BHYT hoặc giấy tờ tùy thân theo hướng dẫn (nhiều cơ sở hiện nhận căn cước công dân gắn chip hoặc ứng dụng định danh thay thẻ).</li>
<li>Mức hưởng phụ thuộc <strong>tuyến khám, tình trạng khám (đúng tuyến, chuyển tuyến, cấp cứu), đối tượng, danh mục thuốc, dịch vụ kỹ thuật</strong>. Quy định về tuyến và mức hưởng thay đổi theo thời gian: hãy hỏi quầy tiếp đón hoặc cơ quan bảo hiểm xã hội trước khi khám.</li>
<li>Xin <strong>giấy chuyển tuyến</strong> khi được bác sĩ chỉ định; giữ đơn thuốc, hóa đơn, bảng kê chi phí.</li>
<li>Dịch vụ theo yêu cầu, thuốc ngoài danh mục thường không được BHYT chi trả.</li>
</ul>

<h2>Đi khám khoa nào?</h2>
<table>
<tr><th>Triệu chứng / vấn đề</th><th>Khoa thường gợi ý</th></tr>
<tr><td>Đau ngực, hồi hộp, khó thở khi gắng sức, tăng huyết áp, phù chân</td><td>Tim mạch</td></tr>
<tr><td>Ho kéo dài, khò khè, khó thở, nghi lao, hen</td><td>Hô hấp / Lao - Bệnh phổi</td></tr>
<tr><td>Đau dạ dày, ợ nóng, tiêu chảy, táo bón, đi ngoài ra máu, vàng da</td><td>Tiêu hóa - Gan mật</td></tr>
<tr><td>Đái tháo đường, bướu cổ, cân nặng thay đổi bất thường, mệt mỏi do nội tiết</td><td>Nội tiết</td></tr>
<tr><td>Đau đầu, chóng mặt, tê yếu, co giật, run, mất ngủ</td><td>Thần kinh</td></tr>
<tr><td>Đau khớp, đau lưng, cứng khớp, loãng xương, gout</td><td>Cơ - Xương - Khớp / Chấn thương chỉnh hình</td></tr>
<tr><td>Tiểu buốt, tiểu máu, sỏi, phì đại tuyến tiền liệt</td><td>Tiết niệu / Thận</td></tr>
<tr><td>Phù, nước tiểu có bọt, suy thận</td><td>Thận - Tiết niệu</td></tr>
<tr><td>Mụn, nấm, dị ứng da, nốt ruồi, rụng tóc</td><td>Da liễu</td></tr>
<tr><td>Đau tai, nghe kém, nghẹt mũi, viêm xoang, đau họng tái phát, khàn tiếng</td><td>Tai - Mũi - Họng</td></tr>
<tr><td>Mờ mắt, đỏ mắt, đau mắt, cận thị</td><td>Nhãn khoa (Mắt)</td></tr>
<tr><td>Đau răng, nướu chảy máu</td><td>Răng - Hàm - Mặt / Nha khoa</td></tr>
<tr><td>Kinh nguyệt, khí hư, thai, hiếm muộn</td><td>Sản - Phụ khoa</td></tr>
<tr><td>Bệnh ở trẻ em</td><td>Nhi khoa</td></tr>
<tr><td>Lo âu, buồn, mất ngủ kéo dài, nghiện</td><td>Tâm thần / Tâm lý</td></tr>
<tr><td>Bướu, sụt cân không rõ lý do</td><td>Khám tổng quát/Nội khoa, sau đó Ung bướu</td></tr>
<tr><td>Không biết chọn khoa nào</td><td>Khám nội tổng quát / Y học gia đình, bác sĩ sẽ hướng dẫn</td></tr>
</table>

<h2>Trước buổi khám</h2>
<ol>
<li><strong>Ghi lại triệu chứng:</strong> bắt đầu từ khi nào, xảy ra như thế nào, kéo dài bao lâu, vị trí, mức độ (thang 0–10), điều gì làm nặng hoặc nhẹ, triệu chứng kèm theo, đã dùng thuốc gì và hiệu quả ra sao. Ghi ngày giờ nếu là cơn.</li>
<li><strong>Danh sách thuốc đang dùng:</strong> tên, liều, cách dùng; <strong>kể cả thuốc không kê đơn, thực phẩm chức năng, thuốc đông y, thảo dược</strong>. Tốt nhất mang theo vỏ/ảnh chụp.</li>
<li><strong>Tiền sử:</strong> bệnh đã mắc, phẫu thuật, dị ứng thuốc/thức ăn, tiêm chủng, tiền sử gia đình (tim mạch, đột quỵ, tiểu đường, ung thư...).</li>
<li><strong>Kết quả cũ:</strong> đơn thuốc, xét nghiệm, phim chụp, giấy ra viện; mang theo để tránh làm lại.</li>
<li><strong>Danh sách 2–3 câu hỏi quan trọng nhất</strong> (viết ra giấy hoặc điện thoại).</li>
<li>Mang theo thẻ BHYT, giấy tờ, tiền; mặc quần áo dễ khám; nhịn ăn <em>chỉ khi</em> xét nghiệm yêu cầu (hỏi trước).</li>
<li>Nếu cần, <strong>nhờ người thân đi cùng</strong> để hỗ trợ ghi nhớ và đặt câu hỏi, nhất là khi lớn tuổi hoặc có thể nhận tin nặng.</li>
<li>Đến sớm; tắt chuông điện thoại.</li>
</ol>

<h2>Trong buổi khám</h2>
<ul>
<li><strong>Nói trung thực và đầy đủ</strong> (kể cả hút thuốc, rượu, ma túy, quan hệ tình dục, thuốc tự mua). Bác sĩ không phán xét và được bảo mật thông tin; chẩn đoán chính xác phụ thuộc vào dữ kiện bạn cung cấp.</li>
<li><strong>Bắt đầu bằng vấn đề chính</strong> và nói rõ điều bạn lo lắng nhất; đừng "kể" rải rác.</li>
<li><strong>Không đoán bệnh, đừng giấu điều bạn sợ.</strong> Nếu bạn lo lắng về ung thư, nói ra.</li>
<li><strong>Hỏi khi không hiểu</strong>; đề nghị bác sĩ giải thích bằng ngôn ngữ dễ hiểu; nhắc lại bằng lời của mình ("Vậy ý bác sĩ là… đúng không ạ?") để kiểm tra hiểu đúng.</li>
<li><strong>Ghi chú</strong> hoặc xin hướng dẫn bằng văn bản; yêu cầu bác sĩ viết rõ tên thuốc, liều.</li>
</ul>
<div class="box info"><b>Ba câu hỏi then chốt (Ask Me 3)</b>
<ol>
<li>Vấn đề chính của tôi là gì?</li>
<li>Tôi cần làm gì?</li>
<li>Tại sao điều đó quan trọng với tôi?</li>
</ol></div>
<h3>Những câu nên hỏi thêm</h3>
<ul>
<li><strong>Chẩn đoán:</strong> Nguyên nhân có khả năng nhất? Còn khả năng nào khác? Bệnh có nghiêm trọng không, diễn tiến thế nào?</li>
<li><strong>Xét nghiệm:</strong> Để làm gì? Kết quả sẽ thay đổi điều trị thế nào? Có cần nhịn ăn? Khi nào có kết quả, làm sao nhận?</li>
<li><strong>Điều trị:</strong> Lựa chọn nào có? Lợi ích, rủi ro, tác dụng phụ của từng lựa chọn? Nếu không điều trị thì sao? Chi phí? Thời gian?</li>
<li><strong>Thuốc:</strong> Tên, tác dụng, liều, cách uống (trước hay sau ăn), bao lâu, tác dụng phụ cần theo dõi, tương tác với thuốc hiện có, quên liều thì làm gì.</li>
<li><strong>Lối sống:</strong> Nên ăn uống, vận động, làm việc thế nào? Cần kiêng gì?</li>
<li><strong>Theo dõi:</strong> Khi nào tái khám? Dấu hiệu nào cần quay lại hoặc cấp cứu ngay? Liên hệ ở đâu?</li>
</ul>
[[img:vnexam|Khám bệnh: bác sĩ và người bệnh cùng trao đổi.]]

<h2>Quyền và trách nhiệm của người bệnh</h2>
<p>Luật Khám bệnh, chữa bệnh (2023) quy định người bệnh có các quyền cơ bản, tiêu biểu:</p>
<ul>
<li>Được <strong>khám bệnh, chữa bệnh an toàn, chất lượng</strong>, được tôn trọng danh dự, nhân phẩm, <strong>không bị phân biệt đối xử</strong>.</li>
<li>Được <strong>cung cấp thông tin</strong> về tình trạng sức khỏe, phương pháp điều trị, dịch vụ, chi phí.</li>
<li>Được <strong>bảo mật thông tin</strong> về bệnh (trừ trường hợp pháp luật quy định).</li>
<li>Được <strong>lựa chọn và từ chối</strong> điều trị sau khi được giải thích (trừ một số trường hợp đặc biệt, cấp cứu, hoặc nguy hiểm cho cộng đồng); <strong>đồng ý bằng văn bản</strong> với phẫu thuật, thủ thuật có nguy cơ.</li>
<li>Được <strong>sao, cung cấp bản tóm tắt hồ sơ bệnh án</strong> khi có yêu cầu, theo quy định.</li>
<li>Được <strong>khiếu nại, tố cáo</strong> khi quyền lợi bị xâm phạm: qua bộ phận chăm sóc khách hàng/phòng quản lý chất lượng của cơ sở, Sở Y tế, cơ quan có thẩm quyền.</li>
</ul>
<p><strong>Trách nhiệm:</strong> cung cấp thông tin trung thực, tuân thủ chỉ định điều trị, tôn trọng nhân viên y tế và người bệnh khác, thanh toán chi phí theo quy định, không gây rối, không bạo hành nhân viên y tế (hành vi vi phạm pháp luật). Quan hệ thầy thuốc - người bệnh là quan hệ hợp tác.</p>

<h3>Chia sẻ quyết định (shared decision-making)</h3>
<p>Ở nhiều quyết định (phẫu thuật, hóa trị, tầm soát, thuốc dài hạn), không có lựa chọn "đúng duy nhất": bác sĩ mang kiến thức y khoa; bạn mang giá trị, hoàn cảnh, mục tiêu cá nhân. Hãy đặt câu hỏi và nói điều bạn ưu tiên (ví dụ: muốn giữ chức năng, tránh tác dụng phụ, tiết kiệm chi phí, thời gian).</p>

<h2>Ý kiến thứ hai và hội chẩn</h2>
<ul>
<li><strong>Khi nào nên:</strong> chẩn đoán nặng (ung thư, bệnh hiếm), đề nghị phẫu thuật lớn hoặc điều trị nguy cơ cao, chẩn đoán chưa rõ dù đã điều trị, bệnh không cải thiện, hoặc bạn còn nhiều nghi ngờ.</li>
<li><strong>Cách làm:</strong> xin bản sao hồ sơ, phim, kết quả; đến bác sĩ/cơ sở khác (có thể tuyến trên, bệnh viện chuyên khoa); nhiều cơ sở có <strong>hội chẩn</strong> đa chuyên khoa. Báo bác sĩ chính nếu có thể; nhiều bác sĩ đồng tình vì mục tiêu là điều tốt nhất cho bạn.</li>
<li>Tránh "đi khám loạn" nhiều nơi liên tục mà không tổng hợp (mỗi nơi một thuốc, một kết luận): chọn một bác sĩ chính điều phối.</li>
</ul>

<h2>Khám từ xa (telemedicine)</h2>
<ul>
<li>Phù hợp: tái khám bệnh ổn định, đọc kết quả, tư vấn thuốc, vấn đề tâm lý, câu hỏi đơn giản.</li>
<li>Không phù hợp: cấp cứu, đau ngực, khó thở, đột quỵ, bệnh cần khám thực thể, bệnh nặng hoặc chưa rõ.</li>
<li>Chọn nền tảng của cơ sở y tế có giấy phép, bác sĩ có chứng chỉ hành nghề; lưu ý bảo mật thông tin; không chia sẻ dữ liệu sức khỏe cho người lạ.</li>
</ul>

<h2>Y học cổ truyền và y học hiện đại</h2>
<ul>
<li>Y học cổ truyền (châm cứu, xoa bóp bấm huyệt, thuốc thảo dược...) là một phần của hệ thống y tế Việt Nam với các bệnh viện, khoa riêng. Có bằng chứng cho một số chỉ định (châm cứu trong một số dạng đau mạn tính, buồn nôn), còn nhiều điều chưa được kiểm chứng.</li>
<li><strong>Nguyên tắc an toàn:</strong> đến cơ sở có giấy phép, thầy thuốc có chứng chỉ; <strong>thông báo cho bác sĩ tất cả thuốc/thảo dược bạn dùng</strong> (nhiều thảo dược tương tác với thuốc, có độc tính gan - thận, hoặc bị trộn corticoid, thuốc tây, kim loại nặng); không thay thế điều trị chuẩn trong bệnh nặng (ung thư, nhồi máu, đột quỵ, nhiễm trùng nặng, tiểu đường, tăng huyết áp...); <strong>không trì hoãn cấp cứu</strong>.</li>
<li><strong>Cảnh giác</strong> với "thầy lang", "bài thuốc gia truyền" quảng cáo chữa khỏi bệnh nan y, thuốc không rõ thành phần, không hóa đơn, không hướng dẫn, đòi đặt cọc lớn, cam kết "khỏi 100%".</li>
<li>Cạo gió, giác hơi, bấm huyệt có thể gây bầm tím, bỏng, nhiễm trùng; không điều trị được sốt xuất huyết, nhồi máu, đột quỵ.</li>
</ul>

<h2>Khi nhập viện</h2>
<ul>
<li><strong>Mang theo:</strong> giấy tờ tùy thân, thẻ BHYT, giấy chuyển tuyến, hồ sơ cũ, danh sách và vỏ thuốc đang dùng, đồ vệ sinh, quần áo, vật dụng cần thiết.</li>
<li><strong>An toàn người bệnh:</strong> đeo vòng tay tên; xác nhận đúng tên, đúng thuốc, đúng thủ thuật trước mỗi can thiệp; hỏi "thuốc này là gì, để làm gì?"; báo dị ứng; nhắc nhân viên rửa tay; báo khi đau, chóng mặt, ngã, truyền dịch đau rát, dấu hiệu bất thường. Người nhà có thể giúp quan sát nhưng tuân thủ quy định thăm nuôi, hạn chế người vào để phòng nhiễm khuẩn.</li>
<li><strong>Trước khi ra viện:</strong> nhận <strong>giấy ra viện</strong> (tóm tắt bệnh, chẩn đoán, điều trị, thuốc, dặn dò); hiểu lịch tái khám, cách dùng thuốc, dấu hiệu cảnh báo, khi nào gọi, ai liên hệ; xin đơn thuốc và kết quả.</li>
<li>Hỏi về <strong>chi phí ước tính</strong> và các khoản không được bảo hiểm chi trả trước khi đồng ý dịch vụ tùy chọn.</li>
</ul>

<h2>Sau buổi khám</h2>
<ul>
<li>Mua và dùng thuốc đúng đơn; nếu có tác dụng phụ, liên hệ bác sĩ chứ đừng tự ngưng hoặc tự đổi liều.</li>
<li>Đặt lịch tái khám, làm xét nghiệm đúng hẹn; nhận kết quả và <strong>đưa cho bác sĩ xem</strong>.</li>
<li><strong>Lưu hồ sơ sức khỏe</strong>: phiếu khám, đơn thuốc, kết quả xét nghiệm, phim chụp, giấy ra viện, sổ tiêm chủng; chụp ảnh, lưu trên điện thoại/đám mây bảo mật hoặc dùng các ứng dụng hồ sơ sức khỏe điện tử chính thức; ghi nhật ký huyết áp, đường huyết, triệu chứng.</li>
<li>Nếu tình trạng xấu hơn hoặc xuất hiện dấu hiệu nguy hiểm: liên hệ ngay hoặc đến cấp cứu.</li>
<li>Nếu không hài lòng với chất lượng khám: hãy góp ý, khiếu nại theo kênh chính thức.</li>
</ul>

<h2>Những sai lầm thường gặp</h2>
<ul>
<li>Trì hoãn đi khám vì sợ, vì "để xem sao", vì "chờ đến cuối tuần".</li>
<li>Giấu thông tin, không kể về thuốc, thảo dược hoặc thói quen.</li>
<li>Tự chẩn đoán qua mạng, tự mua thuốc, ép bác sĩ kê kháng sinh hoặc truyền dịch khi không cần.</li>
<li>Tự ngưng thuốc khi thấy đỡ, hoặc bỏ tái khám.</li>
<li>Không hiểu nhưng không hỏi; không ghi lại hướng dẫn.</li>
<li>Đi nhiều bác sĩ mà không cho họ biết nhau; giao phó hết cho một người bán thuốc không chuyên môn.</li>
<li>Tin quảng cáo "chữa dứt điểm", bỏ điều trị chuẩn.</li>
</ul>
<div class="box tip"><b>Checklist nhanh</b>
<ul>
<li>Ghi triệu chứng, thuốc đang dùng, kết quả cũ, 2–3 câu hỏi chính</li>
<li>Nói trung thực; hỏi đến khi hiểu; nhắc lại để kiểm tra</li>
<li>Biết quyền của mình; xin ý kiến thứ hai khi cần</li>
<li>Giữ hồ sơ; tái khám đúng hẹn; không tự ý ngưng thuốc</li>
<li>Khẩn cấp: gọi 115, đừng chờ</li>
</ul></div>
`
});
