// Sức Khỏe - Sections + nhóm "Hiểu cơ thể"
window.HEALTH_SECTIONS = [
    { id: 'body', icon: '🫀', title: 'Hiểu cơ thể' },
    { id: 'lifestyle', icon: '🥗', title: 'Lối sống lành mạnh' },
    { id: 'illness', icon: '🤒', title: 'Bệnh thường gặp & cấp cứu' },
    { id: 'chronic', icon: '🩺', title: 'Bệnh mạn tính & phòng ngừa' },
    { id: 'groups', icon: '👪', title: 'Theo từng đối tượng' },
    { id: 'advanced', icon: '🔬', title: 'Kiến thức nâng cao' }
];
window.HEALTH_TOPICS = window.HEALTH_TOPICS || [];

window.HEALTH_TOPICS.push({
    id: 'body-systems', order: 1, section: 'body', icon: '🧍',
    title: 'Cơ thể hoạt động thế nào',
    summary: 'Chín hệ cơ quan chính, chức năng, cách chúng phối hợp với nhau và những con số đáng nhớ.',
    keywords: 'giải phẫu sinh lý tim phổi gan thận não hệ tuần hoàn hô hấp tiêu hóa thần kinh nội tiết miễn dịch xương cơ da',
    sources: ['WHO - Fact sheets về sức khỏe tim mạch, hô hấp, tiêu hóa', 'Guyton & Hall - Textbook of Medical Physiology (kiến thức nền)', 'NIH MedlinePlus - Anatomy'],
    html: `
<p>Cơ thể người là một hệ thống gồm khoảng <strong>37 nghìn tỷ tế bào</strong>, được tổ chức thành mô, cơ quan và các <strong>hệ cơ quan</strong>. Mỗi hệ có một nhiệm vụ riêng, nhưng không hệ nào làm việc đơn độc: tim cần phổi để có oxy, phổi cần não để điều khiển nhịp thở, não cần gan và ruột để có năng lượng. Hiểu được "bức tranh lớn" này giúp bạn hiểu vì sao một bệnh ở nơi này lại gây triệu chứng ở nơi khác.</p>

<div class="box info"><b>Khái niệm cốt lõi: cân bằng nội môi (homeostasis)</b>
<p>Cơ thể luôn cố giữ nhiệt độ, đường huyết, huyết áp, độ pH, lượng nước… trong một khoảng hẹp. Khi lệch khỏi khoảng đó, các cảm biến báo về não, não ra lệnh cho các cơ quan điều chỉnh (ví dụ nóng thì ra mồ hôi, đường huyết cao thì tuyến tụy tiết insulin). Phần lớn bệnh tật là kết quả của việc cơ chế cân bằng này bị quá tải hoặc hỏng.</p></div>

<h2>Hệ tuần hoàn: tim và mạch máu</h2>
<p>Tim là một cái bơm cơ bắp to cỡ nắm tay, nặng khoảng 250–350 g, đập khoảng 100.000 lần mỗi ngày. Khi nghỉ, tim bơm khoảng <strong>5 lít máu mỗi phút</strong>, tức là toàn bộ lượng máu trong cơ thể (khoảng 5 lít ở người lớn) đi hết một vòng chỉ trong khoảng một phút.</p>
[[img:heart|Cấu tạo tim: 4 buồng (2 tâm nhĩ, 2 tâm thất) và 4 van tim đảm bảo máu chỉ chảy một chiều.]]
<ul>
<li><strong>Tuần hoàn phổi (vòng nhỏ):</strong> tâm thất phải bơm máu nghèo oxy lên phổi, máu nhận oxy rồi về tâm nhĩ trái.</li>
<li><strong>Tuần hoàn hệ thống (vòng lớn):</strong> tâm thất trái bơm máu giàu oxy qua động mạch chủ đi nuôi toàn cơ thể, sau đó máu theo tĩnh mạch về tâm nhĩ phải.</li>
<li><strong>Động mạch</strong> mang máu đi khỏi tim, thành dày và chịu áp lực cao. <strong>Tĩnh mạch</strong> đưa máu về tim, có van chống chảy ngược. <strong>Mao mạch</strong> mỏng như một tế bào, là nơi trao đổi oxy, dinh dưỡng và chất thải.</li>
</ul>
[[img:circulatory|Sơ đồ hệ tuần hoàn: động mạch (đỏ) và tĩnh mạch (xanh) phân nhánh đến mọi cơ quan.]]
<h3>Máu gồm những gì?</h3>
<table>
<tr><th>Thành phần</th><th>Vai trò</th></tr>
<tr><td>Huyết tương (khoảng 55%)</td><td>Phần nước chứa muối, protein, hormone, chất dinh dưỡng</td></tr>
<tr><td>Hồng cầu</td><td>Chứa hemoglobin, vận chuyển oxy; sống khoảng 120 ngày</td></tr>
<tr><td>Bạch cầu</td><td>Chống nhiễm trùng (hệ miễn dịch)</td></tr>
<tr><td>Tiểu cầu</td><td>Giúp đông máu, cầm máu khi chảy máu</td></tr>
</table>
[[img:bloodvessels|Ba loại mạch máu: động mạch, mao mạch và tĩnh mạch.]]

<h2>Hệ hô hấp: lấy oxy, thải CO₂</h2>
<p>Không khí đi qua mũi, họng, thanh quản, khí quản rồi chia nhánh thành phế quản và tiểu phế quản, cuối cùng đến khoảng <strong>300–500 triệu phế nang</strong> (túi khí nhỏ li ti). Thành phế nang và mao mạch quanh nó chỉ dày vài phần nghìn milimet nên oxy khuếch tán vào máu còn CO₂ khuếch tán ra ngoài. Tổng diện tích trao đổi khí của hai phổi khoảng 50–75 m².</p>
[[img:respiratory|Hệ hô hấp: từ mũi, khí quản, phế quản đến hai lá phổi.]]
<ul>
<li>Cơ hoành co xuống, lồng ngực nở ra, không khí được hút vào. Cơ hoành giãn lên, không khí bị đẩy ra. Thở là hoạt động được điều khiển tự động bởi thân não, dựa vào nồng độ CO₂ trong máu (không phải nồng độ oxy).</li>
<li>Người lớn nghỉ ngơi thở khoảng 12–20 lần/phút.</li>
<li>Lông chuyển và chất nhầy trong đường thở bắt bụi, vi khuẩn rồi đẩy ra ngoài. Hút thuốc phá hủy cơ chế bảo vệ này.</li>
</ul>
[[img:alveolus|Phế nang: nơi oxy đi vào máu, CO₂ đi ra.]]

<h2>Hệ tiêu hóa: biến thức ăn thành năng lượng</h2>
<p>Thức ăn đi qua một ống dài khoảng 8–9 m từ miệng đến hậu môn. Tại đó nó được nghiền cơ học, phân giải bằng enzyme và axit, rồi hấp thu.</p>
[[img:digestive|Hệ tiêu hóa, gồm ống tiêu hóa và các cơ quan phụ như gan, túi mật, tụy.]]
<table>
<tr><th>Cơ quan</th><th>Việc chính</th></tr>
<tr><td>Miệng</td><td>Nhai, enzyme amylase trong nước bọt bắt đầu phân giải tinh bột</td></tr>
<tr><td>Dạ dày</td><td>Nhào trộn với axit HCl (pH khoảng 1,5–3,5) và enzyme pepsin để phân giải protein; giữ thức ăn khoảng 2–4 giờ</td></tr>
<tr><td>Ruột non (khoảng 6 m)</td><td>Nơi hấp thu chính: đường, axit amin, chất béo, vitamin, khoáng chất</td></tr>
<tr><td>Gan</td><td>Sản xuất mật, xử lý chất dinh dưỡng, khử độc, dự trữ glycogen và vitamin</td></tr>
<tr><td>Tụy</td><td>Tiết enzyme tiêu hóa và hormone insulin, glucagon</td></tr>
<tr><td>Ruột già (khoảng 1,5 m)</td><td>Hấp thu nước, hình thành phân; chứa hàng nghìn tỷ vi khuẩn có lợi</td></tr>
</table>
<p>Cả quá trình từ lúc ăn đến lúc thải thường mất 24–72 giờ.</p>

<h2>Hệ thần kinh: trung tâm điều khiển</h2>
<p>Não cân nặng khoảng 1,3–1,4 kg (chỉ khoảng 2% cân nặng cơ thể) nhưng dùng khoảng <strong>20% năng lượng</strong> của cơ thể. Nó có khoảng 86 tỷ nơ-ron liên lạc với nhau bằng tín hiệu điện và hóa chất (chất dẫn truyền thần kinh).</p>
[[img:nervous2|Tổ chức hệ thần kinh: tín hiệu cảm giác (xanh) đi từ da qua tủy sống lên vỏ não; lệnh vận động (đỏ) đi từ vỏ não xuống tủy sống rồi đến cơ.]]
[[img:nervous3|Hệ thần kinh trung ương điều khiển hai nhánh: thần kinh tự chủ (môi trường bên trong) và thần kinh thân thể (môi trường bên ngoài).]]
<ul>
<li><strong>Thần kinh trung ương:</strong> não và tủy sống, nơi xử lý thông tin và ra quyết định.</li>
<li><strong>Thần kinh ngoại biên:</strong> dây thần kinh mang tín hiệu cảm giác về não và lệnh vận động đến cơ.</li>
<li><strong>Thần kinh tự chủ:</strong> điều khiển các hoạt động ta không chủ ý (nhịp tim, tiêu hóa, đồng tử). Nhánh <em>giao cảm</em> là "chiến hay chạy", tăng nhịp tim. Nhánh <em>phó giao cảm</em> là "nghỉ và tiêu hóa", làm chậm nhịp tim.</li>
<li><strong>Phản xạ:</strong> một số phản ứng (rụt tay khi chạm vật nóng) đi qua tủy sống mà không cần đợi não, nên rất nhanh.</li>
</ul>
[[img:neuron|Cấu tạo một nơ-ron: thân, sợi nhánh nhận tín hiệu và sợi trục truyền tín hiệu đi.]]

<h2>Hệ nội tiết: các "bức thư" hóa học</h2>
<p>Nếu hệ thần kinh giống điện thoại (nhanh, tức thì), thì hệ nội tiết giống thư gửi đường bưu điện (chậm hơn, tác dụng lâu hơn). Các tuyến tiết <strong>hormone</strong> vào máu, hormone đi đến cơ quan đích và "ra lệnh" qua các thụ thể.</p>
[[img:endocrine|Các tuyến nội tiết chính: tuyến yên, giáp, tụy, thượng thận, tuyến sinh dục.]]
<table>
<tr><th>Tuyến</th><th>Hormone tiêu biểu</th><th>Tác dụng</th></tr>
<tr><td>Tuyến yên ("nhạc trưởng")</td><td>GH, TSH, ACTH, FSH/LH…</td><td>Điều khiển các tuyến khác, tăng trưởng</td></tr>
<tr><td>Tuyến giáp</td><td>T3, T4</td><td>Điều hòa tốc độ chuyển hóa</td></tr>
<tr><td>Tuyến thượng thận</td><td>Cortisol, adrenaline</td><td>Phản ứng căng thẳng, điều hòa đường huyết và huyết áp</td></tr>
<tr><td>Tuyến tụy</td><td>Insulin, glucagon</td><td>Điều hòa đường huyết</td></tr>
<tr><td>Buồng trứng / tinh hoàn</td><td>Estrogen, progesterone / testosterone</td><td>Sinh sản, đặc tính giới tính, xương, cơ</td></tr>
<tr><td>Tuyến tùng</td><td>Melatonin</td><td>Nhịp thức - ngủ</td></tr>
</table>
<p>Hormone được điều hòa bằng <strong>phản hồi âm</strong>: khi hormone đủ, tín hiệu sản xuất thêm bị tắt, giống như bộ điều nhiệt trong điều hòa.</p>

<h2>Hệ miễn dịch: lực lượng bảo vệ</h2>
<p>Hệ miễn dịch phân biệt "ta" với "kẻ lạ" (vi khuẩn, virus, tế bào ung thư) và tiêu diệt kẻ lạ. Nó có hai tầng:</p>
<ul>
<li><strong>Miễn dịch bẩm sinh:</strong> phản ứng nhanh, không đặc hiệu. Gồm da và niêm mạc (hàng rào vật lý), axit dạ dày, đại thực bào, bạch cầu trung tính, phản ứng viêm và sốt.</li>
<li><strong>Miễn dịch thích ứng:</strong> chậm hơn nhưng đặc hiệu và có trí nhớ. Tế bào B sản xuất kháng thể, tế bào T tiêu diệt tế bào nhiễm bệnh. Đây là nguyên lý của vaccine.</li>
</ul>
[[img:lymph|Hệ bạch huyết và các cơ quan miễn dịch: hạch bạch huyết, lách, tuyến ức, hạch hạnh nhân.]]
<div class="box info"><b>Khi hệ miễn dịch "làm quá" hoặc "làm sai"</b>
<p><strong>Dị ứng</strong> là phản ứng quá mức với chất vô hại (phấn hoa, đậu phộng). <strong>Bệnh tự miễn</strong> (tiểu đường type 1, viêm khớp dạng thấp, lupus…) là khi hệ miễn dịch tấn công chính mô của cơ thể.</p></div>

<h2>Hệ cơ - xương - khớp: khung và động cơ</h2>
<ul>
<li>Người lớn có <strong>206 xương</strong> (trẻ sơ sinh khoảng 270–300 xương, sau đó nhiều xương hợp lại). Xương bảo vệ nội tạng, là nơi dự trữ canxi và phosphat, và tủy xương là nơi sinh ra tế bào máu.</li>
<li>Xương là mô sống, liên tục được tái tạo: tế bào hủy xương lấy xương cũ, tế bào tạo xương xây xương mới.</li>
<li>Cơ thể có hơn 600 cơ vân. <strong>Gân</strong> nối cơ với xương, <strong>dây chằng</strong> nối xương với xương, <strong>sụn</strong> bọc đầu xương giúp khớp trượt êm.</li>
<li>Cơ chỉ có thể co (kéo), nên cử động hai chiều cần các cặp cơ đối kháng (ví dụ cơ nhị đầu và tam đầu cánh tay).</li>
</ul>
[[img:skeleton|Bộ xương người (nhìn từ phía trước).]]
[[img:muscles|Các nhóm cơ chính ở mặt trước cơ thể.]]

<h2>Hệ tiết niệu: bộ lọc của cơ thể</h2>
<p>Hai quả thận, mỗi quả có khoảng 1 triệu đơn vị lọc (nephron), lọc khoảng 180 lít dịch mỗi ngày nhưng chỉ thải ra khoảng 1–2 lít nước tiểu vì phần lớn nước và chất cần thiết được tái hấp thu. Thận còn: điều hòa nước và muối, giữ cân bằng axit - kiềm, tiết <em>renin</em> (điều hòa huyết áp), <em>erythropoietin</em> (kích thích sinh hồng cầu) và kích hoạt vitamin D.</p>
[[img:maleurinary|Hệ tiết niệu: thận, niệu quản, bàng quang, niệu đạo (hình minh họa ở nam giới, tuyến tiền liệt ôm quanh niệu đạo).]]
<p>Nước tiểu đi từ thận qua niệu quản xuống bàng quang (chứa được khoảng 400–600 ml), rồi ra ngoài qua niệu đạo.</p>

<h2>Da: cơ quan lớn nhất</h2>
<p>Da có diện tích khoảng 1,5–2 m², gồm ba lớp: <strong>biểu bì</strong> (hàng rào, tự thay mới sau khoảng 4–6 tuần), <strong>hạ bì</strong> (mạch máu, dây thần kinh, tuyến mồ hôi, chân lông, collagen) và <strong>mô dưới da</strong> (mỡ, cách nhiệt). Da bảo vệ khỏi vi sinh vật và tia UV, điều hòa thân nhiệt (ra mồ hôi, co/giãn mạch), cảm nhận xúc giác, nhiệt độ, đau và tổng hợp vitamin D dưới ánh nắng.</p>
[[img:skin|Các lớp của da.]]

<div class="box tip"><b>Điều cần nhớ</b>
<ul>
<li>Các hệ cơ quan liên kết chặt chẽ: bệnh tiểu đường (nội tiết) gây tổn thương mạch máu, thận, mắt, thần kinh.</li>
<li>Lối sống (ăn, ngủ, vận động, không hút thuốc) tác động lên <em>gần như mọi</em> hệ cơ quan cùng lúc, nên là "đòn bẩy" lớn nhất của người bình thường.</li>
<li>Cơ thể có nhiều dự trữ và khả năng tự sửa chữa, vì vậy nhiều bệnh nặng lúc đầu gần như không có triệu chứng. Đó là lý do cần khám sức khỏe định kỳ.</li>
</ul></div>
`
});

window.HEALTH_TOPICS.push({
    id: 'vital-signs', order: 2, section: 'body', icon: '📏',
    title: 'Các chỉ số sức khỏe cơ bản',
    summary: 'Huyết áp, nhịp tim, nhiệt độ, SpO₂, BMI, vòng eo, đường huyết: thế nào là bình thường và cách tự đo đúng.',
    keywords: 'huyết áp nhịp tim mạch nhiệt độ sốt spo2 oxy bmi cân nặng vòng eo đường huyết hba1c đo',
    sources: ['WHO - Body mass index and waist circumference guidance', 'AHA/ACC 2017 và ESC 2018/2024 - Hướng dẫn tăng huyết áp', 'ADA - Standards of Care in Diabetes', 'Hội Tim mạch học Việt Nam - Khuyến cáo chẩn đoán và điều trị tăng huyết áp'],
    html: `
<p>Các chỉ số sinh tồn và chỉ số chuyển hóa là "đèn báo" của cơ thể. Bạn không cần hiểu sâu y khoa để tự đo, theo dõi và nhận ra khi nào một con số cần được bác sĩ xem xét. Bảng dưới đây dành cho <strong>người lớn khỏe mạnh lúc nghỉ ngơi</strong>.</p>

<table>
<tr><th>Chỉ số</th><th>Khoảng bình thường</th><th>Cần chú ý khi</th></tr>
<tr><td>Nhiệt độ cơ thể</td><td>36,1–37,2 °C</td><td>Sốt: từ 38 °C trở lên. Hạ thân nhiệt: dưới 35 °C</td></tr>
<tr><td>Mạch (nhịp tim)</td><td>60–100 lần/phút</td><td>Thường xuyên trên 100 hoặc dưới 50 (khi không phải vận động viên), kèm chóng mặt, ngất, đau ngực</td></tr>
<tr><td>Nhịp thở</td><td>12–20 lần/phút</td><td>Trên 24 lần/phút hoặc khó thở</td></tr>
<tr><td>Huyết áp</td><td>Dưới 120/80 mmHg</td><td>Từ 140/90 trở lên (đo nhiều lần)</td></tr>
<tr><td>SpO₂ (độ bão hòa oxy)</td><td>95–100%</td><td>Dưới 94%; từ 90% trở xuống là khẩn cấp</td></tr>
<tr><td>BMI</td><td>18,5–24,9 (WHO); 18,5–22,9 (tiêu chuẩn châu Á)</td><td>Dưới 18,5 hoặc từ 23 trở lên (châu Á)</td></tr>
<tr><td>Đường huyết lúc đói</td><td>Dưới 100 mg/dL (5,6 mmol/L)</td><td>Từ 100 trở lên</td></tr>
</table>

<h2>Nhiệt độ cơ thể</h2>
<p>Thân nhiệt thay đổi trong ngày (thấp nhất lúc sáng sớm, cao nhất chiều tối) và tùy vị trí đo. Nhiệt kế điện tử ở nách thường thấp hơn nhiệt độ lõi khoảng 0,5 °C.</p>
[[img:thermometer|Nhiệt kế điện tử.]]
<ul>
<li><strong>Sốt</strong> là phản ứng của cơ thể khi chống nhiễm trùng, không phải bệnh. Xem chi tiết ở bài "Bệnh thường gặp".</li>
<li>Đo tại nách: tối thiểu 3–5 phút (hoặc đến khi nhiệt kế báo), lau khô nách trước khi đo. Nhiệt kế tai, trán cho kết quả nhanh nhưng dễ sai nếu đặt sai vị trí.</li>
<li>Không đo ngay sau khi tắm nước nóng, vận động mạnh hoặc uống đồ nóng/lạnh.</li>
</ul>

<h2>Mạch và nhịp tim</h2>
<p>Mạch là sóng máu đập theo mỗi nhịp tim, sờ được ở những nơi động mạch nằm nông.</p>
<ol>
<li>Ngồi nghỉ 5 phút.</li>
<li>Đặt 2 ngón (trỏ và giữa, không dùng ngón cái vì ngón cái có mạch riêng) lên mặt trong cổ tay, phía dưới ngón cái.</li>
<li>Đếm trong 30 giây rồi nhân đôi (hoặc đếm đủ 60 giây nếu mạch không đều).</li>
[[img:pulse|Các vị trí bắt mạch: thái dương, cảnh, cánh tay, quay, trụ, đùi, khoeo, chày sau và mu chân.]]
</ol>
<ul>
<li>Nhịp tim nghỉ thấp (khoảng 50–60) thường là dấu hiệu tim khỏe ở người tập luyện.</li>
<li>Nhịp tim tăng khi sốt, thiếu nước, thiếu máu, lo lắng, cà phê, cường giáp, đau.</li>
<li>Mạch không đều hoặc "hụt nhịp" thỉnh thoảng có thể vô hại, nhưng mạch không đều kéo dài (nhất là kèm hồi hộp, khó thở) cần khám vì có thể là rung nhĩ, nguyên nhân quan trọng gây đột quỵ.</li>
</ul>

<h2>Huyết áp</h2>
<p>Huyết áp là áp lực máu tác động lên thành động mạch. Có hai số: <strong>tâm thu</strong> (số trên, lúc tim co) và <strong>tâm trương</strong> (số dưới, lúc tim giãn). Đơn vị mmHg.</p>
[[img:bpmeasure|Đo huyết áp bằng máy đo có băng quấn cánh tay.]]
<table>
<tr><th>Phân loại (AHA/ACC)</th><th>Tâm thu</th><th>Tâm trương</th></tr>
<tr><td>Bình thường</td><td>Dưới 120</td><td>và dưới 80</td></tr>
<tr><td>Tăng nhẹ (elevated)</td><td>120–129</td><td>và dưới 80</td></tr>
<tr><td>Tăng huyết áp độ 1</td><td>130–139</td><td>hoặc 80–89</td></tr>
<tr><td>Tăng huyết áp độ 2</td><td>Từ 140</td><td>hoặc từ 90</td></tr>
<tr><td>Cơn tăng huyết áp</td><td>Trên 180</td><td>và/hoặc trên 120</td></tr>
</table>
<p>Ở châu Âu và theo khuyến cáo của Hội Tim mạch học Việt Nam, <em>chẩn đoán</em> tăng huyết áp khi số đo tại phòng khám từ <strong>140/90</strong> trở lên ở ít nhất hai lần khám khác nhau (hoặc từ khoảng 135/85 khi đo tại nhà). Người có tiểu đường, bệnh thận, bệnh tim thường được đặt mục tiêu thấp hơn.</p>
<h3>Cách đo đúng tại nhà</h3>
<ul>
<li>Không cà phê, thuốc lá, tập thể dục trong 30 phút trước đó; đi tiểu trước khi đo.</li>
<li>Ngồi tựa lưng, hai chân đặt sàn (không bắt chéo), nghỉ 5 phút.</li>
<li>Đặt cánh tay ngang mức tim trên bàn, băng quấn trần da (không đo qua áo dày), vừa cỡ tay.</li>
<li>Đo 2 lần cách nhau 1–2 phút, ghi lại. Theo dõi trong nhiều ngày (sáng và tối) sẽ đáng tin hơn một lần đo lẻ.</li>
<li>Lần đầu nên đo cả hai tay; dùng tay có số cao hơn.</li>
</ul>
<div class="box warn"><b>Cơn tăng huyết áp</b>
<p>Nếu đo được trên 180/120 mmHg: nghỉ 5 phút và đo lại. Nếu vẫn cao kèm đau ngực, khó thở, đau đầu dữ dội, yếu liệt, nói khó, nhìn mờ, hãy gọi 115. Nếu cao mà không có triệu chứng, liên hệ bác sĩ trong ngày.</p></div>
<p>Tăng huyết áp thường <strong>không có triệu chứng</strong> (được gọi là "kẻ giết người thầm lặng"), nên chỉ đo mới biết.</p>

<h2>SpO₂ (độ bão hòa oxy)</h2>
<p>Máy đo oxy kẹp đầu ngón tay (pulse oximeter) ước tính phần trăm hemoglobin đang mang oxy, thông qua ánh sáng đỏ và hồng ngoại xuyên qua ngón tay.</p>
[[img:pulseox|Máy đo SpO₂ kẹp ngón tay.]]
<ul>
<li>Bình thường 95–100%. Người bệnh phổi mạn tính có thể có mức nền thấp hơn, hãy hỏi bác sĩ mức mục tiêu của bạn.</li>
<li>Kết quả có thể sai khi tay lạnh, sơn móng tay, móng giả, tay cử động, ánh sáng mạnh. Một số nghiên cứu cho thấy máy có thể đo cao hơn thực tế ở người da sẫm màu, nên cần nhìn cả triệu chứng (khó thở, tím môi), đừng chỉ tin con số.</li>
<li>SpO₂ dưới 94% kèm khó thở nên được đánh giá y tế; từ 90% trở xuống hoặc có tím tái là cấp cứu.</li>
</ul>

<h2>BMI, vòng eo và thành phần cơ thể</h2>
<p><strong>BMI = cân nặng (kg) ÷ chiều cao (m) ÷ chiều cao (m).</strong> Ví dụ 60 kg, cao 1,65 m: 60 ÷ (1,65 × 1,65) ≈ 22,0.</p>
[[img:bmi|Biểu đồ BMI theo cân nặng và chiều cao.]]
<table>
<tr><th>Phân loại</th><th>WHO (chung)</th><th>Khuyến cáo cho người châu Á</th></tr>
<tr><td>Thiếu cân</td><td>Dưới 18,5</td><td>Dưới 18,5</td></tr>
<tr><td>Bình thường</td><td>18,5–24,9</td><td>18,5–22,9</td></tr>
<tr><td>Thừa cân</td><td>25–29,9</td><td>23–24,9</td></tr>
<tr><td>Béo phì</td><td>Từ 30</td><td>Từ 25</td></tr>
</table>
<p>Người châu Á có xu hướng mắc tiểu đường, tim mạch ở mức BMI thấp hơn so với người châu Âu, nên ngưỡng được hạ xuống.</p>
<div class="box info"><b>Hạn chế của BMI</b>
<p>BMI không phân biệt mỡ với cơ. Một người tập tạ nhiều có thể có BMI "thừa cân" nhưng khỏe mạnh, còn một người gầy nhưng ít cơ và nhiều mỡ nội tạng ("gầy mà béo bụng") có BMI bình thường nhưng vẫn nguy cơ cao. Vì thế nên xem thêm vòng eo.</p></div>
<h3>Vòng eo</h3>
<p>Mỡ nội tạng (mỡ bụng) liên quan chặt chẽ với tiểu đường, tim mạch, gan nhiễm mỡ. Đo vòng bụng ngang rốn, cuối lúc thở ra bình thường.</p>
<ul>
<li>Theo ngưỡng cho người châu Á: nguy cơ tăng khi <strong>nam từ 90 cm, nữ từ 80 cm</strong> (ngưỡng WHO chung cao hơn: nam 94/102 cm, nữ 80/88 cm).</li>
<li>Một cách đơn giản khác: <strong>vòng eo nên nhỏ hơn một nửa chiều cao</strong>.</li>
</ul>

<h2>Đường huyết</h2>
<p>Đường huyết (glucose máu) cho biết cơ thể xử lý đường tốt đến đâu.</p>
[[img:glucometer|Máy đo đường huyết cá nhân.]]
<table>
<tr><th>Xét nghiệm</th><th>Bình thường</th><th>Tiền tiểu đường</th><th>Tiểu đường</th></tr>
<tr><td>Đường huyết lúc đói (nhịn ăn ≥ 8 giờ)</td><td>Dưới 100 mg/dL (5,6 mmol/L)</td><td>100–125 (5,6–6,9)</td><td>Từ 126 (7,0)</td></tr>
<tr><td>Sau nghiệm pháp dung nạp glucose 2 giờ</td><td>Dưới 140 (7,8)</td><td>140–199 (7,8–11,0)</td><td>Từ 200 (11,1)</td></tr>
<tr><td>HbA1c (trung bình 2–3 tháng)</td><td>Dưới 5,7%</td><td>5,7–6,4%</td><td>Từ 6,5%</td></tr>
</table>
<ul>
<li>Chẩn đoán tiểu đường cần xét nghiệm lặp lại (hoặc có triệu chứng kinh điển kèm đường huyết cao). Đo bằng máy tại nhà chỉ để theo dõi, không dùng để chẩn đoán.</li>
<li><strong>Hạ đường huyết</strong> (dưới 70 mg/dL, 3,9 mmol/L) gây run, vã mồ hôi, đói cồn cào, lú lẫn. Có thể nguy hiểm ở người dùng insulin hoặc một số thuốc tiểu đường (xem bài Tiểu đường).</li>
</ul>

<div class="box tip"><b>Mẹo theo dõi hiệu quả</b>
<ul>
<li>Ghi lại số đo vào một cuốn sổ hoặc ứng dụng để mang đến bác sĩ; xu hướng theo thời gian quan trọng hơn một con số đơn lẻ.</li>
<li>Đo vào cùng thời điểm, cùng điều kiện để so sánh công bằng.</li>
<li>Khi một chỉ số bất thường, hãy đo lại sau khi nghỉ ngơi trước khi lo lắng; nhưng đừng bỏ qua nếu nó lặp lại hoặc đi kèm triệu chứng.</li>
<li>Kiểm tra máy đo định kỳ (đem máy huyết áp đến cơ sở y tế đối chiếu với máy chuẩn mỗi 1–2 năm).</li>
</ul></div>
`
});
