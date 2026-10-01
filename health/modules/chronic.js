// Sức Khỏe - Bệnh mạn tính & phòng ngừa (phần 1: chủ đề 14-16)
window.HEALTH_TOPICS = window.HEALTH_TOPICS || [];

window.HEALTH_TOPICS.push({
    id: 'cardiovascular', order: 14, section: 'chronic', icon: '❤️',
    title: 'Tim mạch: huyết áp, mỡ máu, đột quỵ',
    summary: 'Tăng huyết áp, cholesterol, xơ vữa động mạch, bệnh mạch vành, suy tim, rung nhĩ, đột quỵ và cách giảm nguy cơ.',
    keywords: 'tim mạch tăng huyết áp cholesterol mỡ máu ldl hdl triglyceride xơ vữa mạch vành nhồi máu suy tim rung nhĩ statin đột quỵ',
    sources: ['WHO - Cardiovascular diseases fact sheet; Hypertension fact sheet', '2017 ACC/AHA và 2024 ESC Hypertension Guidelines', '2019 ESC/EAS Guidelines for dyslipidaemias; AHA Life\'s Essential 8', 'Hội Tim mạch học Việt Nam - Khuyến cáo chẩn đoán và điều trị tăng huyết áp, rối loạn lipid máu'],
    html: `
<p>Bệnh tim mạch (nhồi máu cơ tim, đột quỵ, suy tim…) là <strong>nguyên nhân tử vong hàng đầu thế giới</strong> (khoảng 18 triệu ca mỗi năm theo WHO) và ở Việt Nam chiếm khoảng một phần ba số ca tử vong. Tin tốt là phần lớn có thể phòng ngừa bằng cách kiểm soát một vài yếu tố nguy cơ rất cụ thể.</p>

<h2>Yếu tố nguy cơ</h2>
<ul>
<li><strong>Không thay đổi được:</strong> tuổi, giới (nam giới và phụ nữ sau mãn kinh nguy cơ cao hơn), tiền sử gia đình mắc bệnh tim mạch sớm (nam dưới 55 tuổi, nữ dưới 65 tuổi), di truyền.</li>
<li><strong>Có thể thay đổi:</strong> tăng huyết áp, rối loạn mỡ máu, hút thuốc, tiểu đường, thừa cân - béo phì (nhất là béo bụng), ít vận động, chế độ ăn nhiều muối, đường, chất béo bão hòa, rượu bia, ngưng thở khi ngủ, căng thẳng mạn tính, ô nhiễm không khí.</li>
<li>Các yếu tố nguy cơ <strong>nhân lên</strong> chứ không chỉ cộng lại: một người vừa hút thuốc, vừa tăng huyết áp, vừa mỡ máu cao có nguy cơ cao gấp nhiều lần.</li>
</ul>
<div class="box info"><b>Tám yếu tố "Life's Essential 8" của Hiệp hội Tim mạch Hoa Kỳ</b>
<p>Ăn uống lành mạnh · Vận động · Không thuốc lá · Ngủ đủ · Cân nặng hợp lý · Cholesterol · Đường huyết · Huyết áp. Điểm sức khỏe tim mạch càng cao, nguy cơ bệnh càng thấp.</p></div>

<h2>Xơ vữa động mạch: gốc của nhiều bệnh</h2>
<p>Khi LDL-cholesterol cao, hút thuốc, tăng huyết áp hay đường huyết cao làm tổn thương thành động mạch, LDL thấm vào lớp trong, gây viêm và hình thành <strong>mảng xơ vữa</strong> (cholesterol, tế bào viêm, canxi). Mảng xơ vữa làm hẹp lòng mạch, hoặc nứt vỡ gây cục máu đông bít tắc đột ngột, dẫn đến <strong>nhồi máu cơ tim</strong> (mạch vành) hoặc <strong>nhồi máu não</strong> (mạch não). Quá trình này diễn ra âm thầm hàng chục năm.</p>
[[img:plaque|Mảng xơ vữa trong động mạch vành làm hẹp lòng mạch.]]
[[img:coronary|Các động mạch vành nuôi cơ tim.]]

<h2>Tăng huyết áp</h2>
<ul>
<li><strong>Định nghĩa thực hành:</strong> huyết áp đo tại phòng khám từ 140/90 mmHg trở lên (nhiều hướng dẫn, như Hoa Kỳ, bắt đầu can thiệp từ 130/80). Xem bài Chỉ số sức khỏe để biết cách đo chuẩn.</li>
<li><strong>Nguyên nhân:</strong> khoảng 90–95% là tăng huyết áp nguyên phát (di truyền, tuổi, ăn mặn, béo phì, ít vận động, rượu, stress). Khoảng 5–10% là thứ phát (bệnh thận, hẹp động mạch thận, cường aldosterone, u thượng thận, ngưng thở khi ngủ, bệnh tuyến giáp, thuốc như NSAID, thuốc tránh thai, corticoid). Cần tìm nguyên nhân ở người trẻ, tăng huyết áp nặng hoặc kháng trị.</li>
<li><strong>Tại sao nguy hiểm:</strong> áp lực cao kéo dài làm tổn thương động mạch, tim (phì đại, suy tim), não (đột quỵ, sa sút trí tuệ), thận (suy thận), mắt (xuất huyết võng mạc) và mạch máu ngoại biên. Thường <strong>không triệu chứng</strong> trong nhiều năm; ở Việt Nam khoảng một phần tư người lớn bị tăng huyết áp và khoảng một nửa trong số đó chưa biết mình mắc bệnh.</li>
</ul>
[[img:htncomp|Các biến chứng chính của tăng huyết áp kéo dài.]]
<h3>Điều trị và kiểm soát</h3>
<ol>
<li><strong>Thay đổi lối sống (bao giờ cũng cần):</strong>
<ul>
<li>Giảm muối xuống dưới 5 g/ngày (có thể hạ khoảng 5–6 mmHg); nấu ít muối, hạn chế nước chấm, mì gói, đồ muối, đồ chế biến.</li>
<li>Chế độ ăn <strong>DASH</strong>: nhiều rau, trái cây, ngũ cốc nguyên hạt, sữa ít béo, đậu; ít thịt đỏ, đồ ngọt; tăng kali từ thực phẩm (trừ khi có bệnh thận nặng).</li>
<li>Giảm cân nếu thừa cân (mỗi 1 kg giảm khoảng 1 mmHg); vận động aerobic 150 phút/tuần; hạn chế rượu; bỏ thuốc lá; ngủ đủ; giảm stress.</li>
</ul></li>
<li><strong>Thuốc</strong> khi cần (theo chỉ định bác sĩ): các nhóm chính gồm ức chế men chuyển/ức chế thụ thể angiotensin (ACEi/ARB), chẹn kênh canxi, lợi tiểu thiazid, đôi khi chẹn beta. Nhiều người cần phối hợp hai loại trở lên (có thể trong một viên).</li>
<li><strong>Mục tiêu thường gặp:</strong> dưới 140/90 mmHg và nếu dung nạp tốt, đạt khoảng dưới 130/80 mmHg ở đa số người lớn; mục tiêu cụ thể tùy từng người.</li>
<li><strong>Uống thuốc đều mỗi ngày, không tự ngưng</strong> khi thấy huyết áp đã bình thường (đó là do thuốc đang có tác dụng). Theo dõi huyết áp tại nhà và mang sổ ghi chép đến khi tái khám.</li>
<li>Tác dụng phụ (ho khan với ACEi, phù chân với chẹn kênh canxi, chóng mặt khi đứng dậy) cần báo bác sĩ để đổi thuốc.</li>
</ol>

<h2>Rối loạn mỡ máu (cholesterol)</h2>
<p>Cholesterol cần thiết cho màng tế bào và hormone, nhưng dư thừa trong máu gây xơ vữa. Có nhiều thành phần:</p>
[[img:cholesterol|Cholesterol trong máu: LDL lắng đọng vào thành mạch, HDL vận chuyển cholesterol thừa về gan.]]
<table>
<tr><th>Thành phần</th><th>Ý nghĩa</th><th>Mục tiêu tham khảo</th></tr>
<tr><td>LDL-C ("cholesterol xấu")</td><td>Mang cholesterol đến thành mạch, là mục tiêu điều trị chính</td><td>Dưới 100 mg/dL (2,6 mmol/L) ở người bình thường; dưới 70 (1,8) nếu nguy cơ cao hoặc đã có bệnh tim mạch; có thể dưới 55 (1,4) ở nguy cơ rất cao</td></tr>
<tr><td>HDL-C ("cholesterol tốt")</td><td>Chuyển cholesterol thừa về gan</td><td>Trên 40 mg/dL (nam), trên 50 (nữ). Thuốc tăng HDL không chứng minh giảm biến cố</td></tr>
<tr><td>Triglyceride</td><td>Mỡ trung tính; tăng khi ăn nhiều đường, rượu, béo phì, tiểu đường</td><td>Dưới 150 mg/dL (1,7 mmol/L); trên 500 mg/dL nguy cơ viêm tụy cấp</td></tr>
<tr><td>Cholesterol toàn phần / non-HDL</td><td>Tổng các phần có thể gây xơ vữa</td><td>Non-HDL dưới 130 mg/dL thường được dùng</td></tr>
</table>
<ul>
<li><strong>Nguyên nhân:</strong> chế độ ăn nhiều mỡ bão hòa, trans, ít vận động, béo bụng, tiểu đường, suy giáp, bệnh thận, thuốc, rượu và di truyền (<em>tăng cholesterol máu gia đình</em>: LDL từ 190 mg/dL trở lên, tiền sử gia đình mắc tim mạch sớm, cần khám chuyên khoa và thường cần thuốc).</li>
<li><strong>Điều trị:</strong> thay đổi lối sống (giảm mỡ bão hòa và trans, tăng chất xơ hòa tan như yến mạch, đậu, trái cây; giảm đường, rượu; vận động; giảm cân). <strong>Statin</strong> là thuốc nền tảng: giảm LDL khoảng 30–50%, giảm nhồi máu cơ tim và đột quỵ, đặc biệt ở người có bệnh tim mạch, tiểu đường hoặc nguy cơ cao. Nếu chưa đủ, phối hợp ezetimibe hoặc các thuốc mới theo chỉ định.</li>
<li><strong>Tác dụng phụ statin:</strong> đau cơ nhẹ có thể gặp (tỷ lệ thật sự do thuốc thấp hơn nhiều so với người tưởng), tăng men gan nhẹ hiếm; tổn thương cơ nặng rất hiếm. Báo bác sĩ thay vì tự bỏ thuốc.</li>
<li>Xét nghiệm mỡ máu: người lớn nên kiểm tra ít nhất một lần từ 20–40 tuổi, sau đó theo nguy cơ (mỗi 1–5 năm). Có thể không cần nhịn ăn cho xét nghiệm cholesterol cơ bản.</li>
</ul>

<h2>Bệnh động mạch vành và nhồi máu cơ tim</h2>
<ul>
<li><strong>Cơn đau thắt ngực ổn định:</strong> đau, tức nặng ngực khi gắng sức hoặc xúc động, hết sau vài phút khi nghỉ hoặc ngậm nitroglycerin. Là lời cảnh báo cần khám tim mạch.</li>
<li><strong>Hội chứng mạch vành cấp</strong> (đau thắt ngực không ổn định, nhồi máu cơ tim): đau xuất hiện lúc nghỉ, kéo dài trên 10–20 phút, nặng dần. Đây là <strong>cấp cứu</strong> (xem bài Dấu hiệu nguy hiểm).</li>
<li><strong>Chẩn đoán:</strong> điện tâm đồ, siêu âm tim, nghiệm pháp gắng sức, chụp cắt lớp mạch vành (CT), chụp động mạch vành qua da (có thể kết hợp can thiệp), xét nghiệm men tim (troponin).</li>
<li><strong>Điều trị:</strong> thuốc (statin, thuốc chống kết tập tiểu cầu như aspirin, chẹn beta, nitrat...), <strong>can thiệp mạch vành qua da (đặt stent)</strong>, hoặc <strong>phẫu thuật bắc cầu</strong> tùy mức độ tổn thương; phục hồi chức năng tim. Sau nhồi máu cần dùng thuốc lâu dài, kiểm soát yếu tố nguy cơ.</li>
</ul>
[[img:mi|Nhồi máu cơ tim: động mạch vành bị tắc (Block in Artery) làm cơ tim phía sau bị tổn thương (Muscle Damage).]]
[[img:ecg|Điện tâm đồ: sóng P, phức bộ QRS và sóng T phản ánh hoạt động điện của tim.]]

<h2>Suy tim</h2>
<p>Tim không bơm đủ máu theo nhu cầu của cơ thể (thường do tăng huyết áp lâu năm, nhồi máu cơ tim, bệnh van tim, bệnh cơ tim, rối loạn nhịp).</p>
<ul>
<li><strong>Triệu chứng:</strong> khó thở khi gắng sức rồi khi nằm (phải kê cao đầu, giật mình thức giấc vì khó thở), mệt, phù chân, tăng cân nhanh do giữ nước, bụng chướng, ho khan về đêm, hay đi tiểu đêm.</li>
<li><strong>Tự chăm sóc:</strong> cân mỗi sáng (tăng hơn 1,5–2 kg trong 2–3 ngày là báo động), ăn giảm muối, theo hướng dẫn về lượng nước, uống thuốc đều (ức chế men chuyển/ARNI, chẹn beta, kháng aldosterone, ức chế SGLT2, lợi tiểu), tiêm cúm, tập luyện vừa sức theo hướng dẫn, tránh NSAID, bỏ thuốc lá và rượu.</li>
<li><strong>Đi khám gấp</strong> khi khó thở tăng, phù nhiều hơn, ngất, đau ngực, mạch rất nhanh hoặc không đều.</li>
</ul>

<h2>Rối loạn nhịp tim, rung nhĩ</h2>
<ul>
<li>Hồi hộp, tim đập nhanh, "hụt nhịp" thỉnh thoảng thường lành tính (cà phê, stress, thiếu ngủ), nhưng cần khám nếu kéo dài, kèm chóng mặt, ngất, đau ngực, khó thở.</li>
<li><strong>Rung nhĩ</strong> là rối loạn nhịp phổ biến nhất ở người lớn tuổi: mạch không đều, hồi hộp, mệt, có thể không triệu chứng. Nó tăng nguy cơ <strong>đột quỵ khoảng 5 lần</strong> vì cục máu đông hình thành trong nhĩ. Điều trị gồm <strong>thuốc chống đông</strong> (nếu nguy cơ) để phòng đột quỵ, kiểm soát nhịp/tần số và xử lý nguyên nhân. Nhiều đồng hồ thông minh, máy đo huyết áp hiện đại có khả năng phát hiện mạch không đều; cần xác nhận bằng điện tâm đồ.</li>
<li>Ngất khi gắng sức, ngất kèm đau ngực hay hồi hộp, tiền sử gia đình đột tử trẻ cần được khám tim mạch.</li>
</ul>

<h2>Đột quỵ: phòng là chính</h2>
[[img:strokeischemic|Nhồi máu não: một nhánh mạch máu bị tắc, vùng não phía sau thiếu máu nuôi.]]
<ul>
<li>Nguyên nhân chính: tăng huyết áp, rung nhĩ, tiểu đường, mỡ máu, hút thuốc, hẹp động mạch cảnh.</li>
<li>Kiểm soát huyết áp là biện pháp hiệu quả nhất; thêm thuốc chống đông (rung nhĩ), thuốc chống kết tập tiểu cầu, statin khi có chỉ định.</li>
<li>Nhận biết dấu hiệu (BE-FAST) và gọi 115 ngay: xem bài Dấu hiệu nguy hiểm.</li>
<li>Sau đột quỵ: phục hồi chức năng sớm, kiểm soát yếu tố nguy cơ, dùng thuốc dự phòng tái phát; hỗ trợ tâm lý vì trầm cảm sau đột quỵ thường gặp.</li>
</ul>

<h2>Bệnh động mạch ngoại biên</h2>
<p>Xơ vữa ở động mạch chi dưới gây <strong>đau bắp chân khi đi bộ, đỡ khi nghỉ</strong> (đi cách hồi), chân lạnh, vết thương lâu lành. Người hút thuốc, tiểu đường có nguy cơ cao. Đi khám để được đánh giá và điều trị; bỏ thuốc lá và đi bộ tập luyện có kiểm soát giúp cải thiện.</p>

<h2>Những hiểu biết quan trọng</h2>
<ul>
<li><strong>Bỏ thuốc lá</strong> là việc làm hiệu quả nhất: nguy cơ bệnh mạch vành giảm khoảng một nửa trong vòng 1 năm sau khi bỏ, về gần mức người không hút sau vài năm.</li>
<li><strong>Aspirin liều thấp để phòng bệnh lần đầu không còn được khuyến cáo thường quy</strong> vì nguy cơ chảy máu; chỉ dùng khi bác sĩ cân nhắc (ví dụ đã có bệnh tim mạch hoặc nguy cơ rất cao, nguy cơ chảy máu thấp).</li>
<li>Nhiều người không thấy triệu chứng vẫn có nguy cơ cao: <strong>đo huyết áp, xét nghiệm mỡ máu, đường huyết</strong> định kỳ.</li>
<li>Thực phẩm chức năng "làm sạch mạch máu", "tan mỡ" không thay thế được thuốc điều trị đã được chứng minh.</li>
</ul>
<div class="box tip"><b>Việc nên làm ngay</b>
<ul>
<li>Biết con số huyết áp, cholesterol, đường huyết, vòng bụng của mình.</li>
<li>Giảm muối, tăng rau quả, đi bộ nhanh 30 phút, 5 ngày mỗi tuần.</li>
<li>Bỏ thuốc lá; giảm rượu; ngủ đủ.</li>
<li>Uống thuốc tim mạch đều theo đơn, đừng tự ngưng.</li>
</ul></div>
`
});

window.HEALTH_TOPICS.push({
    id: 'diabetes', order: 15, section: 'chronic', icon: '🩸',
    title: 'Tiểu đường',
    summary: 'Insulin và đường huyết, các loại tiểu đường, triệu chứng, biến chứng, điều trị, ăn uống, hạ đường huyết và cách phòng bệnh.',
    keywords: 'tiểu đường đái tháo đường đường huyết insulin hba1c tiền tiểu đường hạ đường huyết biến chứng bàn chân metformin thai kỳ kháng insulin',
    sources: ['American Diabetes Association - Standards of Care in Diabetes (bản cập nhật hằng năm)', 'WHO - Diabetes fact sheet; IDF Diabetes Atlas', 'Hội Nội tiết - Đái tháo đường Việt Nam (VADE) - Khuyến cáo chẩn đoán và điều trị', 'Diabetes Prevention Program Research Group (NEJM 2002)'],
    html: `
<p>Tiểu đường (đái tháo đường) là nhóm bệnh trong đó <strong>đường huyết cao kéo dài</strong> do cơ thể thiếu insulin hoặc không đáp ứng tốt với insulin. Hơn 500 triệu người trưởng thành trên thế giới mắc bệnh, và ở Việt Nam ước tính khoảng 6–7% người lớn mắc, nhiều người <strong>chưa biết mình bị bệnh</strong>. Tiểu đường không kiểm soát gây tổn thương mạch máu, thận, mắt, thần kinh, tim; nhưng kiểm soát tốt có thể sống khỏe bình thường.</p>

<h2>Insulin và đường huyết hoạt động ra sao?</h2>
<p>Sau bữa ăn, carbohydrate được chuyển thành glucose và vào máu. Tế bào beta của tuyến tụy tiết <strong>insulin</strong>, như "chìa khóa" mở cửa cho glucose vào cơ, gan, mỡ để dùng hoặc dự trữ; đường huyết nhờ đó giảm về bình thường. Khi đói, tụy tiết <strong>glucagon</strong> để gan giải phóng glucose dự trữ.</p>
[[img:insulin|Insulin gắn vào thụ thể trên tế bào, giúp glucose đi vào tế bào (qua chất vận chuyển GLUT4) để dùng làm năng lượng hoặc dự trữ dưới dạng glycogen.]]

<h2>Các loại tiểu đường</h2>
<table>
<tr><th>Loại</th><th>Bản chất</th><th>Đặc điểm</th></tr>
<tr><td><strong>Type 1</strong> (khoảng 5–10%)</td><td>Hệ miễn dịch phá hủy tế bào beta, thiếu insulin tuyệt đối</td><td>Thường ở trẻ em, thanh thiếu niên (nhưng có thể mọi tuổi); khởi phát nhanh, gầy sút, phải <strong>tiêm insulin suốt đời</strong>; dễ nhiễm toan ceton</td></tr>
<tr><td><strong>Type 2</strong> (khoảng 90%)</td><td>Kháng insulin + tế bào beta suy yếu dần</td><td>Thường ở người lớn, thừa cân, béo bụng, ít vận động, tiền sử gia đình; diễn tiến âm thầm; ngày càng gặp ở người trẻ. Người châu Á có thể mắc ở cả mức BMI thấp</td></tr>
<tr><td><strong>Tiểu đường thai kỳ</strong></td><td>Tăng đường huyết lần đầu phát hiện khi mang thai</td><td>Thường tự hết sau sinh nhưng tăng nguy cơ type 2 sau này (khoảng một nửa trong 10 năm); cần sàng lọc ở tuần 24–28</td></tr>
<tr><td>Loại đặc biệt</td><td>Do bệnh tụy, thuốc (corticoid), di truyền (MODY)</td><td>Ít gặp hơn</td></tr>
</table>
<h3>Tiền tiểu đường</h3>
<p>Đường huyết cao hơn bình thường nhưng chưa đạt ngưỡng tiểu đường (đường huyết đói 100–125 mg/dL hoặc HbA1c 5,7–6,4%). Đây là "cơ hội vàng": có thể đảo ngược hoặc trì hoãn rất nhiều. Nghiên cứu DPP cho thấy <strong>giảm khoảng 7% cân nặng và đi bộ 150 phút mỗi tuần giảm 58% nguy cơ chuyển thành tiểu đường type 2</strong>, hiệu quả hơn metformin (31%).</p>

<h2>Dấu hiệu nhận biết</h2>
[[img:diabetessymptoms|Các triệu chứng chính của tiểu đường.]]
<ul>
<li><strong>Khát nhiều, uống nhiều, đi tiểu nhiều (kể cả ban đêm), ăn nhiều</strong>, mệt mỏi, sụt cân không rõ lý do (nhất là type 1), nhìn mờ, vết thương lâu lành, nhiễm trùng da, nấm âm đạo hoặc nấm bẹn hay tái phát, tê bì bàn chân.</li>
<li><strong>Type 2 thường không triệu chứng</strong> trong nhiều năm; có khi phát hiện khi đã có biến chứng. Dấu hiệu gợi ý kháng insulin: vùng da sẫm, dày ở cổ, nách (<em>gai đen</em>).</li>
</ul>
<div class="box danger"><b>Nhiễm toan ceton tiểu đường (DKA), cần cấp cứu</b>
<p>Buồn nôn, nôn, đau bụng, thở nhanh và sâu, hơi thở mùi trái cây (acetone), khát nhiều, mệt lả, lú lẫn, ở người type 1 (hoặc lúc bệnh nặng, nhiễm trùng, quên tiêm insulin). Gọi 115.</p></div>

<h2>Ai nên tầm soát?</h2>
<ul>
<li>Mọi người từ <strong>35 tuổi</strong> (theo hướng dẫn ADA) và lặp lại mỗi 3 năm nếu bình thường.</li>
<li>Người <strong>sớm hơn</strong> nếu thừa cân (BMI từ 23 ở người châu Á) kèm yếu tố nguy cơ: họ hàng bậc một mắc tiểu đường, tăng huyết áp, mỡ máu cao, ít vận động, tiền sử tiểu đường thai kỳ hoặc sinh con trên 4 kg, hội chứng buồng trứng đa nang, bệnh tim mạch.</li>
<li>Xét nghiệm: đường huyết đói, HbA1c, hoặc nghiệm pháp dung nạp glucose (xem bài Chỉ số sức khỏe để biết ngưỡng).</li>
</ul>

<h2>Biến chứng</h2>
<table>
<tr><th>Nhóm</th><th>Biến chứng</th><th>Phòng và phát hiện</th></tr>
<tr><td>Cấp tính</td><td>Hạ đường huyết; nhiễm toan ceton; tăng áp lực thẩm thấu (hôn mê tăng đường huyết)</td><td>Theo dõi, tuân thủ thuốc, xử trí sớm</td></tr>
<tr><td>Mạch máu nhỏ</td><td><strong>Mắt</strong> (bệnh võng mạc, đục thủy tinh thể, glaucoma; nguyên nhân mù hàng đầu ở người trưởng thành); <strong>thận</strong> (bệnh thận đái tháo đường, suy thận); <strong>thần kinh</strong> (tê, rát, đau bàn chân, liệt dạ dày, rối loạn cương, hạ huyết áp tư thế)</td><td>Khám mắt có nhỏ giãn đồng tử mỗi năm; xét nghiệm albumin niệu và eGFR mỗi năm; khám bàn chân mỗi lần tái khám</td></tr>
<tr><td>Mạch máu lớn</td><td>Nhồi máu cơ tim, đột quỵ, bệnh động mạch chi dưới</td><td>Kiểm soát huyết áp, mỡ máu, bỏ thuốc lá</td></tr>
<tr><td>Khác</td><td>Loét bàn chân, nhiễm trùng (nguyên nhân cắt cụt chi không do chấn thương hàng đầu), bệnh răng miệng, gan nhiễm mỡ, trầm cảm</td><td>Chăm sóc chân, vệ sinh răng miệng</td></tr>
</table>

<h2>Điều trị và kiểm soát</h2>
<h3>Mục tiêu</h3>
<ul>
<li><strong>HbA1c</strong> khoảng dưới 7% ở đa số người lớn (có thể dưới 6,5% ở người trẻ, mới mắc, không hay hạ đường huyết; nới lỏng đến dưới 8% ở người cao tuổi, yếu, nhiều bệnh).</li>
<li>Đường huyết đói khoảng 80–130 mg/dL, sau ăn 1–2 giờ dưới 180 mg/dL (theo ADA).</li>
<li>Đồng thời kiểm soát <strong>huyết áp (dưới 130/80)</strong>, <strong>mỡ máu</strong> (thường cần statin), cân nặng. Giảm nguy cơ tim mạch và thận quan trọng không kém giảm đường huyết.</li>
</ul>
<h3>Lối sống</h3>
<ul>
<li><strong>Không có một "chế độ ăn tiểu đường" duy nhất.</strong> Nguyên tắc chung: ăn đều bữa, kiểm soát lượng <strong>tinh bột</strong> (chọn gạo lứt, ngũ cốc nguyên hạt, khoai, đậu; giảm cơm trắng, bún, phở, bánh mì, bánh kẹo, nước ngọt, trà sữa, nước ép), tăng rau xanh, đủ đạm (cá, đậu hũ, trứng, thịt nạc), chất béo tốt, ít muối.</li>
<li><strong>Phương pháp đĩa ăn:</strong> một nửa đĩa rau không tinh bột, một phần tư đạm, một phần tư tinh bột. Ăn rau và đạm trước rồi tinh bột sau làm đường huyết sau ăn thấp hơn.</li>
<li>Trái cây ăn nguyên quả, vừa phải (1–2 phần mỗi ngày), tránh nước ép và trái cây sấy ngọt. Rượu bia làm tăng nguy cơ hạ đường huyết và tăng cân.</li>
<li><strong>Giảm cân</strong> 5–10% (hoặc hơn) cải thiện rõ kiểm soát đường huyết, thậm chí có thể thuyên giảm type 2 ở một số người mới mắc.</li>
<li><strong>Vận động:</strong> aerobic 150 phút/tuần + tập sức mạnh 2–3 buổi; đi bộ nhẹ 10–15 phút sau ăn giúp hạ đường huyết sau ăn.</li>
<li>Bỏ thuốc lá; ngủ đủ; quản lý stress.</li>
</ul>
<h3>Thuốc</h3>
<ul>
<li><strong>Metformin</strong>: thường là thuốc đầu tay cho type 2 (giảm sản xuất glucose ở gan, ít gây hạ đường huyết, rẻ). Tác dụng phụ: buồn nôn, tiêu chảy (giảm bằng uống sau ăn, tăng liều từ từ); thận trọng ở suy thận nặng.</li>
<li><strong>Nhóm ức chế SGLT2</strong> (empagliflozin, dapagliflozin…) và <strong>nhóm GLP-1 / GIP-GLP-1</strong> (semaglutide, liraglutide, tirzepatide…): ngoài hạ đường huyết còn <strong>bảo vệ tim, thận</strong> và giảm cân; được ưu tiên ở người có bệnh tim mạch, suy tim, bệnh thận, béo phì.</li>
<li>Sulfonylurea (gliclazide, glimepiride), ức chế DPP-4 (sitagliptin, vildagliptin), pioglitazone: lựa chọn tùy trường hợp; sulfonylurea dễ gây hạ đường huyết.</li>
<li><strong>Insulin:</strong> bắt buộc ở type 1; dùng ở type 2 khi thuốc khác không đủ, bệnh nặng, phẫu thuật, thai kỳ. Học cách tiêm đúng kỹ thuật, luân phiên vị trí, bảo quản đúng.</li>
<li>Tuyệt đối không tự ngưng thuốc hoặc dùng thuốc "đặc trị", "thần dược" không rõ nguồn gốc (nhiều loại bị trộn thuốc hạ đường huyết hoặc corticoid).</li>
</ul>
<h3>Theo dõi</h3>
<ul>
<li>Đo đường huyết tại nhà theo hướng dẫn (người dùng insulin thường xuyên; người dùng thuốc khác ít hơn). Ghi sổ.</li>
<li><strong>HbA1c</strong> mỗi 3–6 tháng.</li>
<li>Mỗi năm: khám mắt, albumin niệu/creatinin niệu và eGFR, mỡ máu, khám bàn chân, huyết áp; tiêm vaccine (cúm, phế cầu, viêm gan B).</li>
</ul>

<h2>Hạ đường huyết</h2>
<p>Đường huyết dưới 70 mg/dL (3,9 mmol/L). Gặp ở người dùng insulin hoặc sulfonylurea, bỏ bữa, tập luyện nhiều, uống rượu.</p>
<ul>
<li><strong>Triệu chứng:</strong> run tay, vã mồ hôi, hồi hộp, đói cồn cào, chóng mặt, nhìn mờ, nhức đầu, cáu gắt; nặng: lú lẫn, co giật, hôn mê.</li>
<li><strong>Xử trí (người còn tỉnh): quy tắc 15–15.</strong> Ăn hoặc uống 15–20 g đường nhanh (3–4 viên đường/kẹo, nửa ly nước ngọt hoặc nước trái cây, 1 thìa canh mật ong), đo lại sau 15 phút; lặp lại nếu vẫn dưới 70; sau đó ăn nhẹ có tinh bột.</li>
<li>Bất tỉnh hoặc không nuốt được: <strong>không cho ăn uống</strong>, đặt tư thế hồi phục, gọi 115; người thân nên biết cách dùng glucagon (nếu được kê).</li>
<li>Mang theo đường trong túi; không lái xe khi đường huyết thấp; đeo vòng hoặc thẻ thông báo bệnh.</li>
</ul>

<h2>Chăm sóc bàn chân</h2>
<ul>
<li>Kiểm tra bàn chân mỗi ngày (kể cả kẽ ngón và gan chân, dùng gương); tìm vết nứt, phồng rộp, đỏ, sưng, móng mọc ngược.</li>
<li>Rửa chân nước ấm (thử bằng khuỷu tay), lau khô kỹ, bôi kem dưỡng ẩm (trừ kẽ ngón).</li>
<li>Không đi chân trần (kể cả trong nhà, trên cát nóng); giày vừa vặn, mềm, vớ cotton sạch; kiểm tra bên trong giày trước khi mang.</li>
<li>Cắt móng thẳng ngang; không tự cắt chai chân, không dùng thuốc cắt mắt cá; không ngâm nước quá nóng, không dùng túi chườm nóng.</li>
<li>Vết thương nhỏ cũng cần theo dõi; <strong>đi khám ngay trong ngày</strong> nếu có loét, sưng nóng đỏ, chảy mủ, đổi màu da.</li>
</ul>

<h2>Khi ốm ("ngày bệnh")</h2>
<p>Nhiễm trùng, sốt, nôn, tiêu chảy làm đường huyết biến động. Tiếp tục uống thuốc/insulin (hỏi bác sĩ về chỉnh liều; một số thuốc như metformin, SGLT2 cần tạm ngưng khi nôn, mất nước), uống nhiều nước, đo đường huyết thường xuyên hơn, đo ceton nếu type 1, đi khám sớm khi không ăn uống được hoặc đường huyết tăng cao kéo dài.</p>

<h2>Phòng ngừa tiểu đường type 2</h2>
<ul>
<li>Giữ cân nặng hợp lý, vòng eo dưới ngưỡng (nam dưới 90 cm, nữ dưới 80 cm).</li>
<li>Vận động đều đặn, hạn chế ngồi lâu.</li>
<li>Ăn nhiều rau, ngũ cốc nguyên hạt; hạn chế đồ uống có đường, đồ siêu chế biến.</li>
<li>Ngủ đủ; bỏ thuốc lá; giảm rượu.</li>
<li>Kiểm tra sức khỏe định kỳ; nếu đã tiền tiểu đường, theo dõi mỗi năm.</li>
</ul>
<div class="box warn"><b>Những hiểu lầm cần tránh</b>
<ul>
<li><strong>"Ăn nhiều đường gây tiểu đường"</strong>: thừa năng lượng, thừa cân và ít vận động là nguyên nhân chính; nhưng đồ uống có đường làm tăng nguy cơ rõ rệt.</li>
<li><strong>"Tiểu đường chỉ cần kiêng ngọt"</strong>: tinh bột cũng làm tăng đường huyết; cần kiểm soát tổng thể.</li>
<li><strong>"Dùng insulin là hết thuốc chữa, đã nặng rồi"</strong>: insulin là thuốc hiệu quả, an toàn khi dùng đúng.</li>
<li><strong>"Hết triệu chứng nghĩa là khỏi"</strong>: bệnh cần kiểm soát suốt đời, biến chứng thường âm thầm.</li>
</ul></div>
`
});

window.HEALTH_TOPICS.push({
    id: 'cancer', order: 16, section: 'chronic', icon: '🎗️',
    title: 'Ung thư: phòng ngừa và tầm soát',
    summary: 'Ung thư là gì, nguyên nhân, cách giảm nguy cơ, tầm soát ung thư cổ tử cung, vú, đại trực tràng, phổi, gan, dấu hiệu cảnh báo và hiểu lầm.',
    keywords: 'ung thư tầm soát ung thư vú cổ tử cung đại tràng phổi gan dạ dày tuyến tiền liệt da u hắc tố hpv dấu hiệu cảnh báo hóa trị xạ trị',
    sources: ['WHO / IARC - Cancer fact sheets; GLOBOCAN 2022', 'American Cancer Society - Guidelines for early detection', 'US Preventive Services Task Force - Cancer screening recommendations', 'Bộ Y tế Việt Nam - Hướng dẫn phát hiện sớm ung thư; Ghi nhận ung thư Việt Nam'],
    html: `
<p>Ung thư là nhóm bệnh trong đó tế bào <strong>phân chia không kiểm soát</strong>, xâm lấn mô xung quanh và có thể di căn đi nơi khác. Mỗi năm thế giới có khoảng 20 triệu ca mới và gần 10 triệu ca tử vong; Việt Nam có khoảng 180.000 ca mới, phổ biến nhất gồm ung thư gan, phổi, vú, đại - trực tràng và dạ dày. Điều quan trọng: <strong>khoảng 30–50% ung thư có thể phòng ngừa</strong>, và nhiều loại chữa khỏi được nếu phát hiện sớm.</p>

<h2>Ung thư hình thành như thế nào?</h2>
<p>Tế bào bình thường có hệ thống kiểm soát chặt chẽ việc phân chia và chết theo chương trình. Khi <strong>đột biến gen</strong> tích tụ (do tuổi, hút thuốc, tia UV, virus, hóa chất, sai sót ngẫu nhiên khi sao chép DNA hoặc di truyền), tế bào thoát khỏi kiểm soát. Thường cần nhiều đột biến tích lũy theo thời gian, vì thế ung thư phổ biến hơn ở người lớn tuổi.</p>
[[img:mutations|Ung thư cần nhiều đột biến tích lũy: tế bào bình thường dần biến thành tế bào ung thư.]]
<ul>
<li><strong>U lành tính</strong> tăng trưởng tại chỗ, không xâm lấn, không di căn (nhưng vẫn có thể gây hại do chèn ép).</li>
<li><strong>U ác tính (ung thư)</strong> xâm lấn và <strong>di căn</strong> qua máu, hệ bạch huyết đến cơ quan khác. Di căn là nguyên nhân chính gây tử vong.</li>
<li>Ung thư không phải một bệnh: có hơn 100 loại với nguyên nhân, diễn tiến, điều trị khác nhau.</li>
<li><strong>Ung thư không lây</strong> từ người sang người (chỉ một số virus gây ung thư như HPV, viêm gan B thì lây được).</li>
</ul>
[[img:metastasis|Di căn: tế bào ung thư xâm nhập mạch máu, bạch huyết và hình thành khối u ở cơ quan xa.]]

<h2>Nguyên nhân và yếu tố nguy cơ</h2>
<table>
<tr><th>Yếu tố</th><th>Ung thư liên quan</th></tr>
<tr><td><strong>Thuốc lá</strong> (nguyên nhân hàng đầu, khoảng 1/5 số ca tử vong do ung thư)</td><td>Phổi, thanh quản, miệng - họng, thực quản, bàng quang, thận, tụy, dạ dày, cổ tử cung, gan</td></tr>
<tr><td><strong>Rượu bia</strong></td><td>Miệng - họng, thực quản, gan, đại - trực tràng, vú</td></tr>
<tr><td><strong>Nhiễm trùng</strong></td><td>HPV: cổ tử cung, hậu môn, họng. Viêm gan B, C: gan. <em>H. pylori</em>: dạ dày. EBV: vòm họng</td></tr>
<tr><td><strong>Béo phì, ít vận động, ăn uống kém</strong></td><td>Đại - trực tràng, vú (sau mãn kinh), nội mạc tử cung, thận, gan, tụy...; thịt chế biến và thịt đỏ nhiều làm tăng nguy cơ ung thư đại - trực tràng; thực phẩm ướp muối, nướng cháy liên quan ung thư dạ dày</td></tr>
<tr><td><strong>Tia UV, bức xạ</strong></td><td>Da (u hắc tố, ung thư biểu mô tế bào đáy và tế bào vảy)</td></tr>
<tr><td><strong>Ô nhiễm, nghề nghiệp</strong></td><td>Phổi (bụi mịn, amiăng, radon), bàng quang, máu (benzen)</td></tr>
<tr><td><strong>Di truyền (5–10%)</strong></td><td>Đột biến BRCA1/2 (vú, buồng trứng, tuyến tiền liệt, tụy), hội chứng Lynch (đại - trực tràng, nội mạc tử cung)…</td></tr>
<tr><td><strong>Tuổi, nội tiết</strong></td><td>Hầu hết ung thư tăng theo tuổi; điều trị hormone kéo dài có thể tăng nguy cơ một số loại</td></tr>
</table>

<h2>Giảm nguy cơ: những việc làm được</h2>
<ol>
<li><strong>Không hút thuốc (cả thuốc lá điện tử), tránh khói thuốc thụ động.</strong></li>
<li><strong>Hạn chế rượu</strong> (không uống là tốt nhất).</li>
<li><strong>Giữ cân nặng hợp lý</strong>, vận động đều đặn.</li>
<li><strong>Ăn nhiều rau, trái cây, ngũ cốc nguyên hạt, đậu; hạn chế thịt chế biến, thịt đỏ, đồ muối, nướng cháy, đồ siêu chế biến.</strong></li>
<li><strong>Tiêm vaccine:</strong> HPV (phòng ung thư cổ tử cung và các ung thư do HPV) và viêm gan B (phòng ung thư gan).</li>
<li><strong>Điều trị nhiễm trùng:</strong> viêm gan B, C; diệt <em>H. pylori</em> khi được chỉ định.</li>
<li><strong>Chống nắng</strong>, không dùng giường tắm nắng.</li>
<li><strong>Cho con bú</strong> giúp giảm nguy cơ ung thư vú và buồng trứng.</li>
<li>Tránh hóa chất độc hại ở nơi làm việc, dùng bảo hộ; kiểm tra radon, amiăng ở nhà khi nghi ngờ.</li>
<li><strong>Tầm soát đúng người, đúng lúc</strong> (bên dưới).</li>
</ol>

<h2>Tầm soát (phát hiện sớm)</h2>
<p><strong>Tầm soát</strong> là xét nghiệm ở người chưa có triệu chứng để phát hiện ung thư hoặc tổn thương tiền ung thư sớm. Lợi ích đã chứng minh ở một số loại ung thư; nhưng tầm soát cũng có hạn chế: kết quả dương tính giả gây lo lắng và thêm xét nghiệm, chẩn đoán quá mức (phát hiện khối u không bao giờ gây hại), và có rủi ro của thủ thuật. Vì vậy nên tầm soát theo khuyến cáo và nguy cơ của từng người, <strong>không phải "xét nghiệm tất cả mọi thứ"</strong>.</p>
<table>
<tr><th>Ung thư</th><th>Ai, khi nào (người nguy cơ trung bình; tùy hướng dẫn quốc gia)</th><th>Cách làm</th></tr>
<tr><td><strong>Cổ tử cung</strong></td><td>Phụ nữ từ 25–30 đến 65 tuổi (WHO: bắt đầu từ 30 với xét nghiệm HPV; một số nước bắt đầu từ 21 với tế bào học)</td><td>Xét nghiệm HPV mỗi 5 năm (hoặc Pap mỗi 3 năm, hoặc cả hai). Ung thư cổ tử cung gần như hoàn toàn phòng được bằng vaccine HPV + tầm soát</td></tr>
<tr><td><strong>Vú</strong></td><td>Từ 40–45 đến 74 tuổi, mỗi 1–2 năm; sớm hơn nếu nguy cơ cao (tiền sử gia đình, đột biến BRCA)</td><td>Chụp nhũ ảnh (phụ nữ châu Á thường có mô vú đặc nên có thể cần bổ sung siêu âm); tự nhận biết bất thường ở vú</td></tr>
<tr><td><strong>Đại - trực tràng</strong></td><td>Từ 45–50 đến 75 tuổi; sớm hơn nếu có người thân mắc, polyp, viêm ruột mạn</td><td>Xét nghiệm máu ẩn trong phân (FIT) mỗi năm, hoặc nội soi đại tràng mỗi 10 năm (có thể cắt polyp ngay). Đây là ung thư phòng ngừa được nhờ cắt polyp</td></tr>
<tr><td><strong>Phổi</strong></td><td>Người từ 50–80 tuổi đang hoặc đã bỏ thuốc lá dưới 15 năm và hút từ khoảng 20 bao-năm</td><td>Chụp CT liều thấp hằng năm. Không khuyến cáo chụp X-quang phổi để tầm soát</td></tr>
<tr><td><strong>Gan</strong></td><td>Người xơ gan, hoặc viêm gan B mạn (đặc biệt có nguy cơ cao), hoặc viêm gan C đã xơ hóa</td><td>Siêu âm gan ± AFP mỗi 6 tháng</td></tr>
<tr><td><strong>Dạ dày</strong></td><td>Ở vùng có tỷ lệ cao: người từ 40–50 tuổi, tiền sử gia đình, nhiễm <em>H. pylori</em>, viêm teo dạ dày (xem hướng dẫn địa phương)</td><td>Nội soi dạ dày; phát hiện và điều trị <em>H. pylori</em></td></tr>
<tr><td><strong>Tuyến tiền liệt</strong></td><td>Nam 50–69 tuổi (45 nếu nguy cơ cao) <em>sau khi trao đổi lợi - hại với bác sĩ</em></td><td>Xét nghiệm PSA; kết quả cao không chắc là ung thư; cần cân nhắc</td></tr>
<tr><td><strong>Da</strong></td><td>Mọi người tự kiểm tra da; khám da nếu nguy cơ cao (nhiều nốt ruồi, tiền sử gia đình, da sáng, cháy nắng nhiều)</td><td>Quy tắc ABCDE</td></tr>
</table>
<p><strong>Tầm soát ở vài ung thư (tụy, buồng trứng, tinh hoàn…) không được khuyến cáo cho người bình thường</strong> vì không đủ chứng cứ lợi ích, nên các gói "tầm soát ung thư toàn thân" bằng xét nghiệm máu (marker khối u) hoặc PET/CT cho người khỏe mạnh thường không phù hợp. Chất chỉ điểm khối u chủ yếu dùng để theo dõi người đã có bệnh.</p>

<h2>Dấu hiệu cảnh báo cần đi khám</h2>
<p>Không phải triệu chứng nào cũng là ung thư, nhưng những dấu hiệu sau <strong>kéo dài hơn 2–3 tuần</strong> hoặc không rõ nguyên nhân cần được bác sĩ đánh giá:</p>
<ul>
<li>Thay đổi thói quen đại tiện, đi ngoài ra máu, phân đen, đau bụng kéo dài, thiếu máu không rõ nguyên nhân.</li>
<li>Khối u, cục cứng ở vú, cổ, nách, bẹn hoặc nơi khác; tiết dịch hoặc máu đầu vú; da vú lõm, núm vú tụt.</li>
<li>Ho kéo dài, khàn tiếng kéo dài trên 3 tuần, ho ra máu, khó nuốt, nuốt nghẹn.</li>
<li>Vết loét hoặc mảng trắng trong miệng không lành.</li>
<li>Chảy máu âm đạo bất thường (giữa kỳ kinh, sau quan hệ, sau mãn kinh), ra máu khi tiểu.</li>
<li>Nốt ruồi thay đổi hoặc vết loét lâu lành trên da.</li>
<li>Sụt cân không chủ ý trên 5% trong 6 tháng, sốt kéo dài, đổ mồ hôi đêm, mệt mỏi dai dẳng, vàng da, đau dai dẳng (xương, lưng, đầu).</li>
</ul>
<h3>Quy tắc ABCDE để nhận biết nốt ruồi nghi ngờ</h3>
<div class="fig-row">
[[img:melA|A - Asymmetry: hình dạng không đối xứng.]]
[[img:melB|B - Border: bờ không đều, răng cưa.]]
[[img:melC|C - Color: nhiều màu sắc trong một nốt.]]
[[img:melD|D - Diameter: đường kính lớn hơn khoảng 6 mm.]]
</div>
<p><strong>E - Evolving:</strong> nốt ruồi thay đổi (to lên, đổi màu, ngứa, chảy máu, đóng vảy). U hắc tố (melanoma) là loại ung thư da nguy hiểm nhất nhưng chữa khỏi được nếu cắt bỏ sớm.</p>
<h3>Nhận biết bất thường ở vú</h3>
<p>Nên biết bình thường ở vú của mình (nhìn, sờ nhẹ định kỳ) để phát hiện thay đổi. Tự khám không thay thế chụp nhũ ảnh. Đi khám nếu có cục mới, dày lên, đau một bên kéo dài, thay đổi da, tiết dịch núm vú, sưng hạch nách.</p>
[[img:mammogram|Chụp nhũ ảnh (mammography) là phương pháp tầm soát ung thư vú có bằng chứng.]]
[[img:colorectal|Ung thư đại - trực tràng thường bắt đầu từ polyp; nội soi có thể phát hiện và cắt bỏ.]]

<h2>Chẩn đoán và điều trị</h2>
<ul>
<li><strong>Chẩn đoán:</strong> khám, hình ảnh (siêu âm, X-quang, CT, MRI, PET), nội soi, và <strong>sinh thiết (lấy mẫu mô xét nghiệm giải phẫu bệnh)</strong> là tiêu chuẩn chẩn đoán xác định. Sau đó đánh giá <strong>giai đoạn</strong> (I đến IV, hoặc hệ TNM: kích thước u, hạch, di căn) và đặc điểm sinh học của khối u (thụ thể hormone, HER2, đột biến gen…).</li>
<li><strong>Điều trị:</strong> phẫu thuật, xạ trị, hóa trị, liệu pháp nhắm trúng đích, liệu pháp miễn dịch, nội tiết; thường phối hợp, do hội đồng đa chuyên khoa quyết định. Mục tiêu có thể là <em>chữa khỏi</em>, <em>kiểm soát lâu dài</em> hoặc <em>làm giảm triệu chứng</em> (chăm sóc giảm nhẹ, nên bắt đầu sớm song song với điều trị, không chỉ ở giai đoạn cuối).</li>
<li><strong>Tiên lượng</strong> phụ thuộc loại và giai đoạn: ung thư vú giai đoạn sớm có tỷ lệ sống 5 năm trên 90%, ung thư đại tràng khu trú khoảng 90%, nhưng giảm nhiều khi đã di căn, vì thế phát hiện sớm rất quan trọng.</li>
<li>Có thể xin ý kiến thứ hai, tham gia nghiên cứu lâm sàng khi phù hợp, hỏi rõ mục tiêu, lợi ích và tác dụng phụ của từng phương pháp.</li>
</ul>
<div class="box warn"><b>Sống chung với ung thư</b>
<ul>
<li>Dinh dưỡng đủ đạm và năng lượng; nhờ chuyên gia dinh dưỡng; vận động nhẹ theo khả năng; ngủ, nghỉ ngơi.</li>
<li>Chăm sóc tinh thần: lo âu, trầm cảm rất thường gặp; tìm hỗ trợ từ gia đình, nhóm bệnh nhân, chuyên gia tâm lý.</li>
<li><strong>Cảnh giác "thần dược", "thuốc nam chữa tận gốc ung thư"</strong>, chế độ ăn "ăn chay kiềm, nhịn đói" để "bỏ đói tế bào ung thư", liệu pháp vô căn cứ trên mạng. Nghiên cứu cho thấy người bệnh chọn chỉ dùng liệu pháp "thay thế" thay cho điều trị tiêu chuẩn có nguy cơ tử vong cao hơn đáng kể. Liệu pháp bổ trợ (châm cứu giảm đau, thiền) có thể dùng <em>song song</em> nếu bác sĩ biết và đồng ý.</li>
<li>Báo bác sĩ mọi thực phẩm chức năng, thảo dược bạn dùng (có thể làm giảm hiệu quả hoặc tăng độc tính hóa trị).</li>
</ul></div>

<h2>Những hiểu lầm phổ biến</h2>
<table>
<tr><th>Hiểu lầm</th><th>Sự thật</th></tr>
<tr><td>"Đường nuôi ung thư, nên kiêng hết đường"</td><td>Mọi tế bào đều dùng glucose; kiêng hoàn toàn không "bỏ đói" khối u và làm suy dinh dưỡng. Nhưng béo phì và đồ uống có đường làm tăng nguy cơ ung thư</td></tr>
<tr><td>"Sinh thiết làm ung thư lan nhanh"</td><td>Nguy cơ này gần như không có; sinh thiết cần thiết để chẩn đoán và chọn điều trị</td></tr>
<tr><td>"Điện thoại, lò vi sóng, chất chống mồ hôi gây ung thư"</td><td>Không có bằng chứng thuyết phục ở mức sử dụng bình thường</td></tr>
<tr><td>"Ung thư là án tử"</td><td>Nhiều loại chữa khỏi hoàn toàn; hàng triệu người sống sót sau ung thư</td></tr>
<tr><td>"Không có tiền sử gia đình thì không cần tầm soát"</td><td>Đa số người mắc ung thư không có tiền sử gia đình rõ ràng</td></tr>
<tr><td>"Đã khỏe mạnh, ăn uống sạch thì không bao giờ mắc"</td><td>Có yếu tố ngẫu nhiên và tuổi tác, vì vậy vẫn cần tầm soát theo hướng dẫn</td></tr>
</table>
<div class="box tip"><b>Tóm lại</b>
<ul>
<li>Không hút thuốc, hạn chế rượu, giữ cân, vận động, ăn nhiều thực vật.</li>
<li>Tiêm HPV và viêm gan B; điều trị viêm gan, <em>H. pylori</em> khi có chỉ định.</li>
<li>Làm các tầm soát đã được khuyến cáo cho độ tuổi và nguy cơ của bạn.</li>
<li>Đi khám khi có dấu hiệu bất thường kéo dài; không chờ cho đến khi đau.</li>
</ul></div>
`
});
