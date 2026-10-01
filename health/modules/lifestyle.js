// Sức Khỏe - Lối sống lành mạnh
window.HEALTH_TOPICS = window.HEALTH_TOPICS || [];

window.HEALTH_TOPICS.push({
    id: 'nutrition', order: 3, section: 'lifestyle', icon: '🥗',
    title: 'Dinh dưỡng cơ bản',
    summary: 'Đạm, đường, béo, chất xơ, vi chất, muối, nước; cách ăn cân bằng, đọc nhãn thực phẩm và hiểu về calo.',
    keywords: 'dinh dưỡng ăn uống calo protein carbohydrate chất béo chất xơ vitamin khoáng chất muối đường nhãn thực phẩm giảm cân',
    sources: ['WHO - Healthy diet fact sheet (2020)', 'WHO - Guideline: Sugars intake for adults and children; Sodium intake for adults and children', 'Viện Dinh dưỡng Quốc gia Việt Nam - Nhu cầu dinh dưỡng khuyến nghị và Tháp dinh dưỡng', 'Dietary Guidelines for Americans 2020-2025 / Harvard T.H. Chan School of Public Health - The Nutrition Source'],
    html: `
<p>Thức ăn cung cấp <strong>năng lượng</strong> (tính bằng kilocalo, kcal) và các <strong>chất dinh dưỡng</strong> để xây dựng, sửa chữa và vận hành cơ thể. Ăn uống hợp lý là một trong những yếu tố ảnh hưởng mạnh nhất đến nguy cơ béo phì, tiểu đường type 2, bệnh tim mạch và một số loại ung thư.</p>

<h2>Năng lượng và ba nhóm chất sinh năng lượng</h2>
<table>
<tr><th>Chất</th><th>Năng lượng</th><th>Vai trò chính</th><th>Nguồn điển hình</th></tr>
<tr><td>Carbohydrate (tinh bột, đường)</td><td>4 kcal/g</td><td>Nhiên liệu chính của não và cơ</td><td>Gạo, bún, phở, bánh mì, khoai, trái cây, đường</td></tr>
<tr><td>Protein (đạm)</td><td>4 kcal/g</td><td>Xây dựng cơ, enzyme, kháng thể, hormone</td><td>Thịt, cá, trứng, sữa, đậu hũ, đậu, hạt</td></tr>
<tr><td>Chất béo</td><td>9 kcal/g</td><td>Dự trữ năng lượng, hấp thu vitamin A, D, E, K, cấu tạo màng tế bào, hormone</td><td>Dầu ăn, mỡ, bơ, hạt, cá béo, lòng đỏ trứng</td></tr>
<tr><td>Rượu bia</td><td>7 kcal/g</td><td>Không cần thiết, không có giá trị dinh dưỡng</td><td>Rượu, bia</td></tr>
</table>
<p>Chất xơ là carbohydrate không tiêu hóa được, cung cấp rất ít năng lượng nhưng vô cùng quan trọng.</p>

<h3>Carbohydrate: chọn loại tốt</h3>
<ul>
<li><strong>Carbohydrate phức hợp</strong> (gạo lứt, yến mạch, khoai, đậu, rau) tiêu hóa chậm, giữ đường huyết ổn định và đi kèm chất xơ, vitamin.</li>
<li><strong>Đường tự do</strong> (đường thêm vào, nước ngọt, mật ong, nước ép) làm đường huyết tăng vọt. WHO khuyến cáo đường tự do dưới <strong>10% tổng năng lượng</strong>, tốt hơn là dưới 5% (khoảng 25 g, tức khoảng 6 thìa cà phê mỗi ngày với người ăn 2.000 kcal). Một lon nước ngọt 330 ml thường chứa khoảng 35 g đường.</li>
<li><strong>Chỉ số đường huyết (GI)</strong> cho biết thực phẩm làm tăng đường huyết nhanh thế nào. Ăn kèm rau, đạm, chất béo tốt làm chậm hấp thu đường.</li>
<li>Gạo trắng không "xấu", nhưng ăn quá nhiều và thiếu rau, đạm sẽ làm bữa ăn mất cân bằng. Gạo lứt, ngũ cốc nguyên hạt cho nhiều chất xơ hơn.</li>
</ul>

<h3>Protein: đủ và đa dạng</h3>
<ul>
<li>Nhu cầu tối thiểu khoảng <strong>0,8 g/kg cân nặng/ngày</strong> (người 60 kg cần khoảng 48 g). Người cao tuổi, người tập luyện nặng hoặc đang hồi phục bệnh cần nhiều hơn (khoảng 1,0–1,2 g/kg hoặc hơn theo hướng dẫn chuyên gia).</li>
<li>Protein chứa 20 axit amin, trong đó 9 axit amin thiết yếu phải lấy từ thức ăn. Đạm động vật (thịt, cá, trứng, sữa) có đủ 9 loại. Đạm thực vật có thể bổ sung lẫn nhau (gạo + đậu).</li>
<li>Nên ưu tiên cá, thịt gia cầm, trứng, đậu hũ, các loại đậu và hạt; hạn chế thịt chế biến (xúc xích, thịt xông khói, giò chả, lạp xưởng) vì liên quan đến nguy cơ ung thư đại - trực tràng (IARC xếp vào nhóm chất gây ung thư).</li>
<li>Người có bệnh thận mạn cần hỏi bác sĩ trước khi ăn nhiều đạm.</li>
</ul>

<h3>Chất béo: tốt, xấu và "rất xấu"</h3>
<table>
<tr><th>Loại</th><th>Nguồn</th><th>Lời khuyên</th></tr>
<tr><td>Béo không bão hòa (đơn và đa) gồm omega-3, omega-6</td><td>Dầu ô-liu, dầu đậu nành, dầu hạt cải, bơ (trái), các loại hạt, cá béo (cá hồi, cá thu, cá mòi)</td><td>Ưu tiên. Ăn cá 2 lần/tuần</td></tr>
<tr><td>Béo bão hòa</td><td>Mỡ động vật, da gia cầm, bơ, phô mai, dầu dừa, dầu cọ</td><td>Dưới 10% năng lượng</td></tr>
<tr><td>Béo chuyển hóa (trans fat)</td><td>Dầu hydro hóa một phần: bánh quy, bánh nướng công nghiệp, đồ chiên ở dầu dùng lại nhiều lần</td><td>Càng ít càng tốt (WHO khuyến cáo dưới 1% năng lượng, kêu gọi loại bỏ)</td></tr>
</table>
<p>Cholesterol trong thức ăn (như trứng) ảnh hưởng đến cholesterol máu ít hơn so với chất béo bão hòa và trans ở đa số người. Với người khỏe mạnh, ăn một quả trứng mỗi ngày thường là chấp nhận được.</p>

<h3>Chất xơ: bị đánh giá thấp</h3>
<p>Chất xơ giúp đi tiêu đều, nuôi vi khuẩn đường ruột, giảm cholesterol, làm đường huyết tăng chậm hơn và cho cảm giác no lâu. Mục tiêu khoảng <strong>25–30 g/ngày</strong>, đến từ rau, trái cây nguyên quả, đậu, ngũ cốc nguyên hạt. Tăng từ từ và uống đủ nước để tránh đầy hơi.</p>

<h2>Vi chất dinh dưỡng</h2>
<p>Vitamin và khoáng chất chỉ cần với lượng nhỏ nhưng thiếu sẽ gây bệnh. Đa số người ăn đa dạng không cần viên bổ sung.</p>
<table>
<tr><th>Vi chất</th><th>Vai trò</th><th>Nguồn tốt</th><th>Hậu quả khi thiếu</th></tr>
<tr><td>Sắt</td><td>Tạo hemoglobin</td><td>Thịt đỏ, gan, huyết, hải sản, đậu, rau xanh đậm</td><td>Thiếu máu, mệt, da xanh; phổ biến ở phụ nữ, trẻ em</td></tr>
<tr><td>Canxi</td><td>Xương, răng, co cơ</td><td>Sữa, sữa chua, tôm cua, cá nhỏ ăn cả xương, đậu hũ, rau cải</td><td>Loãng xương, còi xương</td></tr>
<tr><td>Vitamin D</td><td>Hấp thu canxi</td><td>Ánh nắng, cá béo, trứng, thực phẩm tăng cường</td><td>Còi xương, loãng xương</td></tr>
<tr><td>Vitamin A</td><td>Thị lực, miễn dịch</td><td>Gan, trứng, rau quả màu vàng - cam</td><td>Quáng gà, khô mắt</td></tr>
<tr><td>Vitamin B12</td><td>Thần kinh, tạo máu</td><td>Thịt, cá, trứng, sữa (không có trong thực vật)</td><td>Thiếu máu, tê bì; người ăn chay trường cần bổ sung</td></tr>
<tr><td>Folate (B9)</td><td>Tổng hợp DNA, phòng dị tật ống thần kinh</td><td>Rau lá xanh, đậu, gan</td><td>Thiếu máu, dị tật thai</td></tr>
<tr><td>Vitamin C</td><td>Collagen, hấp thu sắt, chống oxy hóa</td><td>Ổi, cam, bưởi, ớt chuông, rau</td><td>Chảy máu nướu, chậm lành vết thương</td></tr>
<tr><td>Kẽm</td><td>Miễn dịch, lành vết thương</td><td>Hàu, thịt, hạt, đậu</td><td>Hay ốm, chậm lớn ở trẻ</td></tr>
<tr><td>Iốt</td><td>Hormone tuyến giáp</td><td>Muối iốt, hải sản</td><td>Bướu cổ, chậm phát triển trí tuệ</td></tr>
<tr><td>Kali</td><td>Cân bằng dịch, huyết áp, cơ</td><td>Chuối, khoai, rau, đậu, cá</td><td>Yếu cơ, rối loạn nhịp tim</td></tr>
</table>

<h3>Muối (natri)</h3>
<p>WHO khuyến cáo dưới <strong>5 g muối (khoảng 2 g natri) mỗi ngày</strong>, tương đương một thìa cà phê gạt. Người Việt ăn trung bình khoảng 9 g/ngày, nhiều hơn gấp đôi khuyến cáo, chủ yếu từ nước mắm, muối, bột canh, mì gói, đồ muối chua, đồ khô, thực phẩm chế biến. Ăn mặn là nguyên nhân hàng đầu gây tăng huyết áp và liên quan đến ung thư dạ dày và bệnh thận.</p>

<h2>Đĩa ăn cân bằng</h2>
<p>Một mô hình đơn giản: <strong>một nửa đĩa là rau và trái cây</strong> (mục tiêu ít nhất 400 g rau quả mỗi ngày, tức khoảng 5 phần), <strong>một phần tư là tinh bột ưu tiên nguyên hạt</strong>, <strong>một phần tư là đạm</strong>, kèm một ít chất béo tốt và một phần sữa hoặc sản phẩm thay thế giàu canxi.</p>
[[img:myplate|Mô hình đĩa ăn MyPlate của Bộ Nông nghiệp Hoa Kỳ: xanh lá là rau, đỏ là trái cây, cam là ngũ cốc, tím là đạm, xanh dương là sữa và chế phẩm từ sữa.]]
<p>Chế độ ăn kiểu Địa Trung Hải (nhiều rau, đậu, ngũ cốc nguyên hạt, cá, dầu ô-liu, hạt; ít thịt đỏ và đồ ngọt) có bằng chứng tốt nhất về giảm bệnh tim mạch. Bữa ăn truyền thống Việt Nam (cơm, rau luộc, canh, cá, đậu hũ) đã khá gần với mô hình cân bằng nếu giảm muối, dầu mỡ, đồ chiên và đường.</p>
[[img:medpyramid|Tháp thực phẩm của chế độ ăn Địa Trung Hải.]]

<h2>Calo và cân nặng</h2>
<ul>
<li><strong>Nhu cầu năng lượng</strong> gồm: chuyển hóa cơ bản (BMR, khoảng 60–70% tổng năng lượng, để duy trì sự sống), tiêu hóa thức ăn (khoảng 10%) và vận động (phần còn lại). Người trưởng thành trung bình cần khoảng 1.800–2.500 kcal/ngày, tùy giới, cân nặng, độ tuổi, mức vận động.</li>
<li>Cân nặng ổn định khi năng lượng ăn vào bằng năng lượng tiêu hao. Thừa năng lượng kéo dài sẽ được tích trữ thành mỡ.</li>
<li>Giảm cân bền vững thường khoảng 0,25–0,5 kg mỗi tuần, đến từ việc giảm khoảng 300–500 kcal/ngày kết hợp vận động, ưu tiên chất lượng thực phẩm và đủ đạm để giữ khối cơ. Ăn kiêng cực đoan thường làm mất cơ, thiếu chất và dễ tăng cân trở lại.</li>
<li>Không có thực phẩm nào "đốt mỡ" hay "thải độc" đặc biệt. Gan và thận vốn đã có chức năng thải độc.</li>
</ul>

<h2>Đọc nhãn thực phẩm</h2>
[[img:nutritionlabel|Ví dụ bảng thông tin dinh dưỡng trên bao bì (nhãn của Hoa Kỳ).]]
<ol>
<li>Kiểm tra <strong>khẩu phần (serving size)</strong> và số khẩu phần trong bao bì. Nhiều gói ăn một mình thực ra chứa 2–3 khẩu phần.</li>
<li>So sánh sản phẩm bằng cột <strong>trên 100 g</strong>.</li>
<li>Xem năng lượng, đường, chất béo bão hòa, natri (muối = natri × 2,5).</li>
<li><strong>Danh sách thành phần</strong> xếp theo thứ tự khối lượng giảm dần. Đường có nhiều tên: sucrose, glucose, siro bắp, siro cao fructose, maltodextrin, mật ong, đường nâu.</li>
<li>Cẩn thận với dòng "ít đường", "tự nhiên", "light", "fit", "dành cho người ăn kiêng": đó là quảng cáo, không đồng nghĩa với lành mạnh.</li>
</ol>

<h2>Thực phẩm siêu chế biến</h2>
<p>Thực phẩm siêu chế biến (phân loại NOVA nhóm 4) là các sản phẩm công nghiệp chứa nhiều chất phụ gia, đường, muối, chất béo tinh luyện: nước ngọt, snack, mì ăn liền, xúc xích, bánh kẹo, ngũ cốc ăn sáng nhiều đường, đồ ăn nhanh. Chúng dễ ăn quá nhiều, nghèo chất xơ và vi chất. Nhiều nghiên cứu quan sát liên kết việc ăn nhiều nhóm này với béo phì, tiểu đường, bệnh tim mạch và tử vong sớm. Nguyên tắc dễ nhớ: <em>ăn thực phẩm nguyên bản là chính, thực phẩm đóng gói là phụ</em>.</p>

<h2>Rượu bia</h2>
<p>WHO nhận định <strong>không có mức uống rượu bia nào hoàn toàn an toàn</strong> cho sức khỏe: rượu là chất gây ung thư (miệng, họng, thực quản, gan, đại tràng, vú), hại gan, tim, thần kinh và là nguyên nhân của nhiều tai nạn, bạo lực. Nếu vẫn uống, nên ít nhất có thể, có những ngày không uống, và không uống khi lái xe, mang thai, dùng một số thuốc, hoặc tuổi dưới 18.</p>

<div class="box tip"><b>Nguyên tắc thực hành</b>
<ul>
<li>Ăn đủ 3 bữa chính, ưu tiên bữa có rau, đạm, tinh bột nguyên hạt.</li>
<li>Uống nước lọc thay nước ngọt, trà sữa.</li>
<li>Nấu ở nhà nhiều hơn; giảm nước chấm và nêm nếm muối.</li>
<li>Ăn chậm, dừng khi no khoảng 80%.</li>
<li>Không ăn kiêng cực đoan hoặc loại bỏ hẳn một nhóm chất mà không có lý do y khoa.</li>
</ul></div>
<div class="box warn"><b>Khi nào cần gặp chuyên gia dinh dưỡng hoặc bác sĩ</b>
<p>Sụt cân không chủ ý (hơn 5% trong 6 tháng), thèm ăn bất thường, rối loạn ăn uống (nhịn ăn, nôn sau ăn), có bệnh mạn tính (thận, tiểu đường, gout…), mang thai, trẻ chậm tăng cân.</p></div>
`
});

window.HEALTH_TOPICS.push({
    id: 'sleep', order: 4, section: 'lifestyle', icon: '😴',
    title: 'Giấc ngủ',
    summary: 'Các giai đoạn giấc ngủ, cần ngủ bao nhiêu, vệ sinh giấc ngủ, mất ngủ và ngưng thở khi ngủ.',
    keywords: 'giấc ngủ mất ngủ ngáy ngưng thở khi ngủ melatonin nhịp sinh học rem ngủ trưa cà phê',
    sources: ['American Academy of Sleep Medicine (AASM) / Sleep Research Society - Consensus recommendations on sleep duration (2015-2016)', 'National Sleep Foundation', 'WHO / NHS - Insomnia và CBT-I', 'Walker M. - Why We Sleep (kiến thức tham khảo phổ thông)'],
    html: `
<p>Ngủ không phải là "thời gian chết". Trong lúc ngủ, não củng cố trí nhớ, dọn dẹp chất thải chuyển hóa, cơ thể sửa chữa mô, điều hòa hormone và tăng cường miễn dịch. Thiếu ngủ kéo dài là yếu tố nguy cơ độc lập của tăng huyết áp, tiểu đường, béo phì, trầm cảm và tai nạn.</p>

<h2>Cần ngủ bao nhiêu?</h2>
<table>
<tr><th>Lứa tuổi</th><th>Khuyến nghị (cả ngày, gồm ngủ trưa)</th></tr>
<tr><td>Sơ sinh (0–3 tháng)</td><td>14–17 giờ</td></tr>
<tr><td>Nhũ nhi (4–12 tháng)</td><td>12–16 giờ</td></tr>
<tr><td>Trẻ 1–2 tuổi</td><td>11–14 giờ</td></tr>
<tr><td>Trẻ 3–5 tuổi</td><td>10–13 giờ</td></tr>
<tr><td>Trẻ 6–12 tuổi</td><td>9–12 giờ</td></tr>
<tr><td>Thiếu niên 13–18 tuổi</td><td>8–10 giờ</td></tr>
<tr><td>Người lớn 18–64 tuổi</td><td>7–9 giờ</td></tr>
<tr><td>Người từ 65 tuổi</td><td>7–8 giờ</td></tr>
</table>
[[img:sleepneeds|Khuyến nghị thời lượng ngủ theo độ tuổi của CDC (số giờ mỗi ngày).]]
<p>Nhu cầu có khác nhau giữa từng người, nhưng <strong>ngủ thường xuyên dưới 7 giờ</strong> (ở người lớn) làm tăng rủi ro sức khỏe. Dấu hiệu bạn ngủ đủ: dễ thức dậy, tỉnh táo cả ngày mà không cần nhiều cà phê, không ngủ gục khi ngồi yên.</p>

<h2>Cấu trúc một đêm ngủ</h2>
<p>Giấc ngủ gồm các chu kỳ kéo dài khoảng 90 phút, lặp lại 4–6 lần mỗi đêm. Mỗi chu kỳ đi qua:</p>
<ul>
<li><strong>N1 (ngủ nông):</strong> vài phút, dễ bị đánh thức.</li>
<li><strong>N2 (ngủ trung bình):</strong> chiếm khoảng một nửa đêm; nhịp tim, thân nhiệt giảm.</li>
<li><strong>N3 (ngủ sâu, sóng chậm):</strong> cơ thể phục hồi, tiết hormone tăng trưởng; khó đánh thức. Tập trung ở nửa đầu đêm.</li>
<li><strong>REM (giấc ngủ có mơ):</strong> mắt chuyển động nhanh, não hoạt động mạnh, cơ tạm thời liệt để không "diễn" giấc mơ. Liên quan đến trí nhớ cảm xúc và học hỏi. Tập trung ở nửa sau đêm.</li>
</ul>
[[img:hypnogram|Biểu đồ giấc ngủ (hypnogram): các giai đoạn thay đổi theo chu kỳ suốt đêm; REM dài dần về sáng.]]
<p>Vì vậy cắt ngắn giấc ngủ (ví dụ chỉ ngủ 5 giờ) làm mất chủ yếu phần REM ở cuối đêm.</p>

<h2>Hai cơ chế điều khiển giấc ngủ</h2>
<ol>
<li><strong>Nhịp sinh học (đồng hồ 24 giờ):</strong> nằm ở nhân trên chéo thị giác của vùng dưới đồi, nhận tín hiệu ánh sáng từ mắt. Tối đến, tuyến tùng tiết <strong>melatonin</strong> báo hiệu "đến giờ ngủ". Ánh sáng mạnh vào buổi sáng giúp "chỉnh đồng hồ".</li>
<li><strong>Áp lực ngủ:</strong> càng thức lâu, chất <em>adenosine</em> tích tụ trong não càng nhiều, khiến ta buồn ngủ. Cà phê hoạt động bằng cách chặn thụ thể adenosine (không xóa được nhu cầu ngủ, chỉ che đi).</li>
</ol>
[[img:circadian|Nhịp sinh học trong 24 giờ: thời điểm tỉnh táo, tiết melatonin, thân nhiệt thấp nhất và giờ dễ buồn ngủ.]]
<p>Thanh thiếu niên có đồng hồ sinh học lùi muộn tự nhiên (ngủ muộn, dậy muộn), nên giờ học quá sớm khiến các em thiếu ngủ mạn tính.</p>

<h2>Hậu quả của thiếu ngủ</h2>
<ul>
<li><strong>Ngắn hạn:</strong> buồn ngủ, giảm tập trung và trí nhớ, cáu gắt, phản xạ chậm (thức 17–19 giờ liên tục gây suy giảm khả năng lái xe tương đương nồng độ cồn khoảng 0,05%). Ngủ gật khi lái xe là nguyên nhân của nhiều tai nạn giao thông.</li>
<li><strong>Dài hạn:</strong> tăng nguy cơ béo phì (hormone đói ghrelin tăng, hormone no leptin giảm), đề kháng insulin, tăng huyết áp, bệnh tim mạch, trầm cảm, lo âu, suy giảm miễn dịch (dễ bị cảm hơn, đáp ứng vaccine kém hơn).</li>
<li>Không thể "ngủ bù" hoàn toàn: ngủ thêm cuối tuần giúp giảm phần nào nợ ngủ nhưng không xóa hết hậu quả của thiếu ngủ kéo dài, và thói quen thức ngủ lệch giờ cũng làm rối đồng hồ sinh học.</li>
</ul>

<h2>Vệ sinh giấc ngủ: những điều thật sự hiệu quả</h2>
<ul>
<li><strong>Giờ đi ngủ và thức dậy cố định</strong>, kể cả cuối tuần (chênh lệch tối đa khoảng 1 giờ). Đây là yếu tố quan trọng nhất.</li>
<li><strong>Ánh sáng tự nhiên sớm buổi sáng</strong> (ra ngoài 15–30 phút); buổi tối giảm ánh sáng mạnh, dùng đèn vàng.</li>
<li><strong>Phòng ngủ tối, yên tĩnh, mát</strong> (khoảng 20–24 °C ở khí hậu nóng ẩm của Việt Nam, có thể dùng quạt/điều hòa); giường chỉ dùng để ngủ.</li>
<li><strong>Cà phê, trà đặc, nước tăng lực:</strong> nửa đời của caffeine khoảng 5–6 giờ, nên ngưng từ chiều (khoảng 14–15 giờ) nếu khó ngủ.</li>
<li><strong>Rượu</strong> làm dễ ngủ lúc đầu nhưng phá vỡ giấc ngủ sâu và REM, gây thức giấc giữa đêm.</li>
<li><strong>Không ăn quá no hoặc tập luyện cường độ cao sát giờ ngủ</strong> (dừng 2–3 giờ trước khi ngủ); tập thể dục ban ngày giúp ngủ sâu hơn.</li>
<li><strong>Màn hình:</strong> ánh sáng xanh có ảnh hưởng nhỏ đến melatonin; vấn đề lớn hơn là nội dung kích thích, thông báo và thời gian bị lấy mất. Nên tắt màn hình khoảng 30–60 phút trước khi ngủ.</li>
<li><strong>Ngủ trưa:</strong> nếu cần, ngắn (10–30 phút), trước 15 giờ.</li>
<li>Nếu nằm <strong>không ngủ được quá khoảng 20 phút</strong>, hãy ra khỏi giường, làm việc thư giãn dưới ánh sáng yếu, buồn ngủ rồi mới quay lại. Nhìn đồng hồ liên tục làm lo lắng nặng thêm.</li>
</ul>

<h2>Mất ngủ (insomnia)</h2>
<p>Mất ngủ là khó vào giấc, khó duy trì giấc ngủ hoặc thức dậy quá sớm, kèm ảnh hưởng ban ngày, dù đã có đủ điều kiện để ngủ. Mất ngủ <strong>mạn tính</strong> khi xảy ra từ 3 đêm mỗi tuần và kéo dài từ 3 tháng.</p>
<ul>
<li><strong>Điều trị đầu tay là liệu pháp hành vi nhận thức cho mất ngủ (CBT-I)</strong>: hiệu quả lâu dài hơn thuốc, gồm hạn chế thời gian nằm trên giường, kiểm soát kích thích, tái cấu trúc suy nghĩ lo lắng về giấc ngủ.</li>
<li>Thuốc ngủ (nhóm benzodiazepine, "thuốc Z") chỉ nên dùng ngắn hạn theo đơn vì gây lệ thuộc, lú lẫn, té ngã, nhất là người già. Không tự dùng thuốc an thần của người khác.</li>
<li>Tìm nguyên nhân: căng thẳng, lo âu, trầm cảm, đau, ngưng thở khi ngủ, cường giáp, thuốc (corticoid, thuốc thông mũi…), cà phê, rượu.</li>
</ul>

<h2>Ngưng thở khi ngủ tắc nghẽn (OSA)</h2>
<p>Đường thở trên bị xẹp lặp đi lặp lại khi ngủ khiến ngừng thở từng đợt 10 giây trở lên, oxy máu giảm, não phải "đánh thức" một phần để thở lại.</p>
[[img:sleepapnea|Ngưng thở khi ngủ tắc nghẽn: đường thở trên bị xẹp khiến không khí (oxy) không vào được phổi.]]
<ul>
<li><strong>Dấu hiệu:</strong> ngáy to, người thân thấy ngừng thở, giật mình thở hổn hển, đau đầu buổi sáng, khô miệng, buồn ngủ ban ngày nhiều, hay đi tiểu đêm.</li>
<li><strong>Nguy cơ:</strong> thừa cân, cổ to, nam giới, sau mãn kinh, tắc nghẽn mũi, hạnh nhân to ở trẻ em.</li>
<li><strong>Hậu quả nếu không điều trị:</strong> tăng huyết áp khó kiểm soát, rung nhĩ, nhồi máu cơ tim, đột quỵ, tai nạn do ngủ gật.</li>
<li><strong>Chẩn đoán:</strong> đo đa ký giấc ngủ. <strong>Điều trị:</strong> giảm cân, tránh rượu trước ngủ, ngủ nghiêng, máy thở áp lực dương liên tục (CPAP), dụng cụ nha khoa, phẫu thuật chọn lọc.</li>
</ul>
[[img:cpap|Máy thở áp lực dương liên tục (CPAP) đặt cạnh giường, điều trị chính cho ngưng thở khi ngủ mức vừa - nặng.]]

<h2>Các rối loạn thường gặp khác</h2>
<ul>
<li><strong>Hội chứng chân không yên:</strong> cảm giác khó chịu ở chân, muốn cử động, nặng vào buổi tối; liên quan thiếu sắt, suy thận, thai kỳ.</li>
<li><strong>Làm ca đêm và lệch múi giờ:</strong> đồng hồ sinh học lệch so với lịch làm việc. Dùng ánh sáng mạnh vào lúc cần tỉnh, phòng tối khi ngủ ban ngày, ngủ ngắn trước ca.</li>
<li><strong>Ngủ dậy mệt dù ngủ đủ, ngủ gật ban ngày nhiều:</strong> cần khám để loại trừ ngưng thở khi ngủ, ngủ rũ (narcolepsy) và các bệnh khác.</li>
</ul>

<div class="box warn"><b>Khi nào cần đi khám</b>
<p>Mất ngủ kéo dài trên 3 tuần và ảnh hưởng sinh hoạt; ngáy to kèm ngưng thở hoặc buồn ngủ ban ngày; hành vi bất thường khi ngủ (đi lại, la hét, đánh người); nghi ngờ trầm cảm hoặc lo âu đi kèm.</p></div>
`
});

window.HEALTH_TOPICS.push({
    id: 'exercise', order: 5, section: 'lifestyle', icon: '🏃',
    title: 'Vận động và tập luyện',
    summary: 'Bao nhiêu vận động là đủ, bốn loại bài tập, cường độ, chấn thương thường gặp và khi nào nên dừng.',
    keywords: 'tập thể dục vận động đi bộ chạy bộ tạ cardio sức mạnh giãn cơ nhịp tim bước chân ngồi nhiều',
    sources: ['WHO Guidelines on Physical Activity and Sedentary Behaviour (2020)', 'US Physical Activity Guidelines for Americans, 2nd edition (2018)', 'ACSM - Guidelines for Exercise Testing and Prescription', 'Paluch AE et al. - Daily steps and all-cause mortality: a meta-analysis (Lancet Public Health 2022; Lancet 2025)'],
    html: `
<p>Nếu vận động có thể đóng gói thành một viên thuốc, nó sẽ là loại thuốc được kê nhiều nhất thế giới. Vận động đều đặn giảm nguy cơ tử vong sớm, bệnh tim mạch, tiểu đường type 2, đột quỵ, một số ung thư (đại tràng, vú, nội mạc tử cung), loãng xương, trầm cảm, sa sút trí tuệ, đồng thời cải thiện giấc ngủ và chất lượng cuộc sống. Theo WHO, khoảng 1/4 người trưởng thành trên thế giới không vận động đủ.</p>

[[img:exerciseeffects|Tác động có lợi của tập luyện lên nhiều cơ quan: cơ, xương, tim, phổi, mạch máu, gan, dạ dày - ruột và tế bào máu.]]
<h2>Khuyến cáo của WHO</h2>
<table>
<tr><th>Nhóm</th><th>Khuyến cáo mỗi tuần</th></tr>
<tr><td>Người lớn 18–64 tuổi</td><td>150–300 phút vận động aerobic cường độ vừa, hoặc 75–150 phút cường độ mạnh (hoặc kết hợp tương đương). Thêm bài tập tăng cường cơ bắp các nhóm cơ chính từ 2 ngày/tuần.</td></tr>
<tr><td>Người từ 65 tuổi</td><td>Như người lớn, cộng thêm bài tập đa thành phần (thăng bằng, sức mạnh, phối hợp) từ 3 ngày/tuần để phòng ngã.</td></tr>
<tr><td>Trẻ em, thanh thiếu niên 5–17 tuổi</td><td>Trung bình 60 phút mỗi ngày vận động cường độ vừa đến mạnh; bài tập mạnh, tăng cường cơ xương ít nhất 3 ngày/tuần.</td></tr>
<tr><td>Phụ nữ mang thai, sau sinh</td><td>Ít nhất 150 phút cường độ vừa mỗi tuần nếu không có chống chỉ định (hỏi bác sĩ sản khoa).</td></tr>
<tr><td>Người có bệnh mạn tính, người khuyết tật</td><td>Cùng mức như trên nếu có thể, bắt đầu từ từ, theo tư vấn của bác sĩ.</td></tr>
</table>
<div class="box tip"><b>Một chút cũng có ích</b>
<p>WHO nhấn mạnh "<strong>mọi vận động đều có giá trị</strong>". Người đang hoàn toàn ít vận động, chỉ cần thêm 10–15 phút đi bộ mỗi ngày đã giảm đáng kể rủi ro. Lợi ích lớn nhất là khi chuyển từ "không vận động" sang "có vận động".</p></div>

<h2>Cường độ: thế nào là vừa, thế nào là mạnh?</h2>
<ul>
<li><strong>Vừa:</strong> thở nhanh hơn, tim đập nhanh hơn, nói chuyện được nhưng không hát được. Ví dụ: đi bộ nhanh, đạp xe nhẹ, khiêu vũ, làm vườn, bơi thong thả.</li>
<li><strong>Mạnh:</strong> thở gấp, chỉ nói được vài từ mỗi lần. Ví dụ: chạy bộ, đạp xe nhanh, bơi nhanh, cầu lông đôi/đơn, bóng đá, leo núi, HIIT.</li>
<li><strong>Nhịp tim tối đa ước tính:</strong> khoảng <strong>220 - tuổi</strong> (chỉ là ước lượng, sai số khoảng ±10 nhịp). Vận động vừa khoảng 50–70% nhịp tim tối đa, mạnh khoảng 70–85%.</li>
<li>Người đang dùng thuốc hạ nhịp tim (như chẹn beta) không nên dùng nhịp tim để ước lượng cường độ; dùng "thang mức gắng sức" hoặc "test nói chuyện".</li>
<li>Đếm bước chân: nghiên cứu tổng hợp cho thấy lợi ích tăng rõ đến khoảng <strong>7.000–8.000 bước mỗi ngày</strong> và tăng thêm ít hơn sau đó. Con số 10.000 bước là mục tiêu tiếp thị chứ không phải ngưỡng khoa học cứng.</li>
</ul>

<h2>Bốn loại vận động cần có</h2>
<h3>1. Aerobic (sức bền tim phổi)</h3>
<p>Đi bộ nhanh, chạy, đạp xe, bơi, nhảy dây, nhảy múa. Cải thiện chức năng tim, phổi, đường huyết, mỡ máu, huyết áp, cân nặng.</p>
<h3>2. Sức mạnh cơ bắp</h3>
<p>Tập tạ, dây kháng lực, hít đất, squat, plank, leo cầu thang, mang vác. Duy trì khối cơ và xương, tăng chuyển hóa, phòng ngã và loãng xương. Khối cơ tự nhiên giảm khoảng 3–8% mỗi thập kỷ sau 30 tuổi (sarcopenia) nếu không tập.</p>
[[img:muscles2|Các nhóm cơ lớn cần tập: ngực, vai, lưng, bụng, đùi, bắp chân.]]
<ul>
<li>Bắt đầu với 1–2 hiệp, 8–12 lần nhắc, mức tạ khiến 2–3 lần cuối khá nặng nhưng vẫn giữ kỹ thuật đúng.</li>
<li>Nghỉ ít nhất 48 giờ giữa hai buổi tập cùng nhóm cơ.</li>
<li>Học kỹ thuật đúng trước khi tăng tạ; hít thở đều, không nín thở.</li>
</ul>
<h3>3. Linh hoạt (giãn cơ)</h3>
<p>Kéo giãn tĩnh 15–30 giây mỗi tư thế, yoga, pilates. Giữ biên độ khớp, giảm cứng cơ; không nên kéo giãn đến mức đau.</p>
<h3>4. Thăng bằng và phối hợp</h3>
<p>Đứng một chân, đi nối gót, thái cực quyền, khiêu vũ. Rất quan trọng với người trên 65 tuổi để phòng té ngã.</p>

<h2>Ngồi lâu cũng là vấn đề</h2>
<p>Ngồi hoặc nằm liên tục nhiều giờ (xem TV, ngồi bàn làm việc) liên quan đến tăng nguy cơ tim mạch và tiểu đường <em>độc lập</em> với việc bạn có tập thể dục hay không. Nên <strong>đứng dậy đi lại 2–5 phút mỗi 30–60 phút</strong>, đứng khi nghe điện thoại, dùng cầu thang.</p>

<h2>Buổi tập an toàn</h2>
<ol>
<li><strong>Khởi động 5–10 phút:</strong> vận động nhẹ tăng dần, chuẩn bị cơ và khớp.</li>
<li><strong>Phần chính.</strong></li>
<li><strong>Hạ nhiệt 5 phút</strong> và giãn cơ.</li>
<li><strong>Uống nước</strong> trước, trong, sau tập; khi trời nóng ẩm (như ở Việt Nam) cần giảm cường độ, tránh tập giữa trưa và ở nơi ô nhiễm không khí cao.</li>
<li><strong>Tăng dần:</strong> tăng thời gian, cường độ từng bước nhỏ (khoảng 5–10% mỗi tuần), có ngày nghỉ.</li>
<li>Giày phù hợp, mặc thoáng, bảo hộ khi đạp xe, đi xe máy, trượt patin.</li>
</ol>
<h3>Đau cơ và chấn thương</h3>
<ul>
<li><strong>Đau cơ khởi phát muộn (DOMS):</strong> đau ê ẩm 24–72 giờ sau buổi tập mới hoặc nặng; bình thường, tự hết, vận động nhẹ giúp đỡ hơn nằm yên.</li>
<li><strong>Đau nhói, sưng, bầm, không chịu được khi chạm hoặc chịu lực:</strong> có thể là chấn thương (căng cơ, bong gân, rách dây chằng, gãy xương). Ngừng hoạt động, chườm lạnh và nghỉ ngơi ban đầu, nâng cao chi, băng ép nhẹ; đi khám nếu không thể đi lại, biến dạng, sưng nhiều hoặc không đỡ sau vài ngày.</li>
</ul>
<div class="box danger"><b>Dừng tập ngay và tìm trợ giúp y tế nếu</b>
<ul>
<li>Đau, nặng hoặc tức ngực; đau lan lên vai, hàm, tay trái</li>
<li>Khó thở bất thường, choáng váng, suýt ngất, tim đập loạn</li>
<li>Buồn nôn, vã mồ hôi lạnh; nhìn mờ; yếu hoặc tê một bên người</li>
<li>Dấu hiệu say nóng: nóng, da đỏ hoặc nhợt, lú lẫn</li>
</ul></div>
<p>Trước khi bắt đầu chương trình tập cường độ cao, người có bệnh tim, phổi, thận, tiểu đường hoặc người trên 40–45 tuổi ít vận động, hút thuốc, béo phì, tăng huyết áp nên gặp bác sĩ để được tư vấn.</p>

<h2>Những hiểu lầm thường gặp</h2>
<ul>
<li><strong>"Tập bụng để giảm mỡ bụng":</strong> không thể giảm mỡ tại chỗ; mỡ giảm toàn thân khi thâm hụt năng lượng và vận động đều.</li>
<li><strong>"Tập nhiều là tốt":</strong> tập quá sức mà nghỉ không đủ dẫn đến chấn thương, mệt mỏi, rối loạn kinh nguyệt và giảm miễn dịch.</li>
<li><strong>"Phụ nữ tập tạ sẽ to như lực sĩ":</strong> phụ nữ có nồng độ testosterone thấp hơn nhiều, tăng cơ chậm; tập tạ có lợi cho xương và chuyển hóa.</li>
<li><strong>"Đổ mồ hôi nhiều là đốt mỡ nhiều":</strong> mồ hôi chỉ là cách làm mát, cân giảm sau tập là do mất nước và sẽ lấy lại khi uống nước.</li>
</ul>
`
});

window.HEALTH_TOPICS.push({
    id: 'water-sun-vitd', order: 6, section: 'lifestyle', icon: '☀️',
    title: 'Nước, ánh nắng và vitamin D',
    summary: 'Cơ thể cần bao nhiêu nước, tia UV vừa có lợi vừa có hại, cách chống nắng đúng và vitamin D.',
    keywords: 'uống nước mất nước chống nắng kem chống nắng uv vitamin d còi xương say nắng nước tiểu',
    sources: ['EFSA - Dietary Reference Values for water (2010)', 'US National Academies - Dietary Reference Intakes for Water (2005) và Vitamin D (2011)', 'WHO - Ultraviolet radiation và Global Solar UV Index', 'NIH Office of Dietary Supplements - Vitamin D Fact Sheet'],
    html: `
<h2>Nước: nhu cầu thực tế</h2>
<p>Nước chiếm khoảng 50–60% trọng lượng cơ thể người lớn. Nó là môi trường cho mọi phản ứng hóa học, vận chuyển chất dinh dưỡng, điều hòa thân nhiệt (qua mồ hôi), bôi trơn khớp và thải chất cặn bã qua thận.</p>
<ul>
<li>Lượng nước cần mỗi ngày (<strong>tính cả nước trong thức ăn</strong>, khoảng 20% tổng lượng): khoảng <strong>2,0 lít với nữ và 2,5 lít với nam</strong> theo EFSA (Hoa Kỳ khuyến nghị cao hơn một chút). Tức khoảng 1,5–2 lít từ đồ uống, tương đương 6–8 ly.</li>
<li>Con số "8 ly mỗi ngày" là gợi ý thô. Nhu cầu thật phụ thuộc thời tiết, vận động, cân nặng, thức ăn.</li>
<li>Nước trà, cà phê loãng, sữa, canh, trái cây đều tính vào tổng lượng nước; nước lọc là lựa chọn tốt nhất. Hạn chế nước ngọt, trà sữa, nước tăng lực vì nhiều đường.</li>
</ul>
<h3>Cách biết mình có đủ nước</h3>
<ul>
<li>Nước tiểu <strong>vàng nhạt như rơm</strong> là đủ; vàng sậm, ít và mùi nồng là thiếu nước (lưu ý vitamin B và một số thuốc làm nước tiểu vàng đậm).</li>
<li>Uống theo cảm giác khát là tốt với người khỏe mạnh. Khát xuất hiện khi cơ thể đã mất khoảng 1–2% nước.</li>
</ul>
<div class="box warn"><b>Khi nào cần uống nhiều hơn hoặc dè chừng</b>
<ul>
<li><strong>Cần nhiều nước hơn:</strong> trời nóng, vận động, sốt, tiêu chảy, nôn, mang thai, cho con bú; người có sỏi thận (cần đi tiểu trên 2–2,5 lít nước tiểu mỗi ngày).</li>
<li><strong>Người cao tuổi</strong> cảm giác khát kém, dễ mất nước; cần nhắc uống đều.</li>
<li><strong>Cần hạn chế nước theo chỉ định bác sĩ:</strong> suy tim nặng, bệnh thận giai đoạn muộn, xơ gan cổ chướng, hạ natri máu. Nếu bạn có các bệnh này, hãy làm theo hướng dẫn riêng.</li>
<li><strong>Uống quá nhiều nước</strong> (hàng chục lít trong thời gian ngắn, hay gặp ở vận động viên sức bền, thi uống nước) làm loãng natri máu, gây ngộ độc nước rất nguy hiểm.</li>
</ul></div>
<p><strong>Dấu hiệu mất nước:</strong> khát, khô miệng, nước tiểu ít và sậm, mệt, nhức đầu, chóng mặt. Mất nước nặng: lú lẫn, tim đập nhanh, không đi tiểu, mắt trũng, da mất độ đàn hồi, cần đi cấp cứu (xem bài Bệnh thường gặp và cách tự chăm sóc).</p>

<h2>Ánh nắng: lợi và hại</h2>
<p>Tia cực tím (UV) từ mặt trời gồm:</p>
<ul>
<li><strong>UVB:</strong> gây cháy nắng, tổng hợp vitamin D, và là nguyên nhân chính gây ung thư da.</li>
<li><strong>UVA:</strong> xuyên sâu hơn, gây lão hóa da (nám, nhăn), góp phần gây ung thư da; xuyên được qua kính cửa sổ và mây.</li>
</ul>
<p>Cơ quan nghiên cứu ung thư quốc tế (IARC) xếp bức xạ UV và giường tắm nắng nhân tạo vào <strong>nhóm 1: chắc chắn gây ung thư</strong>.</p>
<h3>Chỉ số UV</h3>
<table>
<tr><th>Chỉ số UV</th><th>Mức</th><th>Khuyến cáo</th></tr>
<tr><td>0–2</td><td>Thấp</td><td>Hầu như không cần bảo vệ đặc biệt</td></tr>
<tr><td>3–5</td><td>Trung bình</td><td>Cần bảo vệ: mũ, kính, kem chống nắng, tìm bóng râm lúc trưa</td></tr>
<tr><td>6–7</td><td>Cao</td><td>Bảo vệ tăng cường, tránh nắng 10–16 giờ</td></tr>
<tr><td>8–10</td><td>Rất cao</td><td>Da trần có thể cháy nắng trong thời gian ngắn</td></tr>
<tr><td>11 trở lên</td><td>Cực cao</td><td>Tránh ra nắng giữa trưa, bảo vệ tối đa</td></tr>
</table>
<p>Ở Việt Nam, nhất là miền Nam và miền Trung, chỉ số UV giữa trưa nhiều ngày đạt 8–11 trở lên quanh năm, cao hơn nhiều vùng ôn đới.</p>
[[img:uv|Cùng một lưng chụp dưới ánh sáng thường (trái) và dưới tia UV (phải): phần bôi kem chống nắng hấp thụ UV nên hiện lên màu tối, hình mặt trời cười được vẽ bằng kem chống nắng.]]

<h3>Chống nắng đúng cách</h3>
<ol>
<li><strong>Ưu tiên vật lý:</strong> bóng râm, quần áo dài nhẹ, mũ rộng vành, kính râm chống UV (UV400), ô. Đây là cách đáng tin cậy hơn kem.</li>
<li><strong>Kem chống nắng phổ rộng (bảo vệ cả UVA và UVB), SPF từ 30 trở lên</strong>. SPF đo khả năng chống UVB; nhãn "PA+++ / UVA" cho biết chống UVA.</li>
<li><strong>Bôi đủ lượng:</strong> khoảng 2 mg/cm², tức khoảng <em>nửa thìa cà phê (2,5 ml) cho riêng mặt và cổ</em> hoặc cỡ "hai ngón tay" kem; thực tế đa số người bôi chưa đến một nửa lượng cần nên bảo vệ thấp hơn nhiều so với ghi trên nhãn.</li>
<li>Bôi 15–20 phút trước khi ra nắng, <strong>bôi lại mỗi 2 giờ</strong> và sau khi bơi, đổ mồ hôi nhiều, lau khô.</li>
<li>Che nắng kể cả ngày âm u và khi đi xe (UVA xuyên qua kính).</li>
<li>Trẻ dưới 6 tháng: tránh nắng trực tiếp, dùng quần áo và bóng râm thay vì kem.</li>
<li><strong>Không tắm nắng nhân tạo</strong>; "sạm da" là tổn thương DNA, không phải sức khỏe.</li>
</ol>
<p>Cháy nắng nặng khi còn trẻ (đặc biệt từ 3 lần trở lên trước tuổi 20) làm tăng rõ nguy cơ u hắc tố (melanoma) sau này.</p>
[[img:sunburn|Cháy nắng nặng ở vai với bọng nước: dấu hiệu tổn thương da do tia UV.]]

<h2>Vitamin D</h2>
<p>Vitamin D thực chất là một hormone: da tự tổng hợp khi UVB chiếu vào cholesterol ở da, sau đó gan và thận kích hoạt nó. Vitamin D giúp ruột hấp thu canxi và phosphat, nên cần cho xương, răng và cơ; cũng có vai trò trong miễn dịch.</p>
<h3>Thiếu vitamin D</h3>
<ul>
<li><strong>Trẻ em:</strong> còi xương (chân cong, chậm biết đi, nhuyễn xương sọ, chậm mọc răng).</li>
<li><strong>Người lớn:</strong> nhuyễn xương (đau xương, yếu cơ), loãng xương, dễ gãy xương, té ngã ở người già.</li>
<li>Nguyên nhân thiếu: ít ra nắng (làm văn phòng, che chắn kín, chống nắng nhiều, sống ở thành phố ô nhiễm, nhà cao tầng), da sẫm màu tổng hợp chậm hơn, cao tuổi, béo phì, bệnh ruột kém hấp thu, bệnh gan - thận, một số thuốc. Thiếu vitamin D vẫn phổ biến ở nhiều người Việt dù nhiều nắng.</li>
</ul>
[[img:rickets|X-quang bàn tay của trẻ bị còi xương, bệnh do thiếu vitamin D kéo dài.]]
<h3>Nguồn và nhu cầu</h3>
<ul>
<li><strong>Ánh nắng</strong> là nguồn chính. Thời gian cần thiết phụ thuộc màu da, giờ, mùa, vĩ độ; thông thường cho da tay chân tiếp xúc nắng khoảng 10–20 phút vài lần mỗi tuần vào buổi sáng sớm hoặc chiều muộn là đủ cho đa số người da sáng và vừa. Không cần phơi đến đỏ da; phơi lâu không tạo thêm vitamin D mà chỉ tăng nguy cơ ung thư da.</li>
<li><strong>Thực phẩm:</strong> cá béo (cá hồi, cá thu, cá mòi), lòng đỏ trứng, gan, nấm phơi nắng, sữa và ngũ cốc tăng cường vitamin D. Khó đạt đủ chỉ bằng thức ăn.</li>
<li><strong>Nhu cầu khuyến nghị:</strong> khoảng 600 IU (15 µg) mỗi ngày cho người lớn đến 70 tuổi, 800 IU (20 µg) cho người trên 70 tuổi; trẻ bú mẹ thường cần bổ sung 400 IU (10 µg) mỗi ngày từ những ngày đầu đời theo khuyến cáo của nhi khoa.</li>
<li><strong>Xét nghiệm 25(OH)D:</strong> dưới 20 ng/mL (50 nmol/L) coi là thiếu theo nhiều hướng dẫn; không cần xét nghiệm thường quy cho mọi người.</li>
</ul>
<div class="box warn"><b>Bổ sung vitamin D: dùng đúng liều</b>
<p>Vitamin D tan trong mỡ và tích lũy trong cơ thể. Dùng liều rất cao kéo dài (thường trên 4.000 IU mỗi ngày mà không có chỉ định) có thể gây tăng canxi máu, buồn nôn, khát, đi tiểu nhiều, sỏi thận, tổn thương thận. Hãy dùng theo khuyến cáo của bác sĩ, đặc biệt với liều "sốc" hàng tuần hoặc hàng tháng.</p></div>
<div class="box tip"><b>Tóm lại</b>
<ul>
<li>Uống đủ nước theo nhu cầu, nhìn màu nước tiểu để tự kiểm tra.</li>
<li>Ra nắng vừa phải vào sáng sớm, chiều muộn; chống nắng tốt vào giữa trưa.</li>
<li>Bổ sung vitamin D khi có nguy cơ thiếu và theo hướng dẫn, đừng tự dùng liều cao.</li>
</ul></div>
`
});

window.HEALTH_TOPICS.push({
    id: 'hygiene', order: 7, section: 'lifestyle', icon: '🧼',
    title: 'Vệ sinh cá nhân và an toàn thực phẩm',
    summary: 'Rửa tay đúng cách, vệ sinh răng miệng, an toàn thực phẩm, nước uống sạch và phòng bệnh qua đường tiêu hóa.',
    keywords: 'rửa tay vệ sinh răng miệng đánh răng sâu răng nướu an toàn thực phẩm ngộ độc nước sạch nấu chín tủ lạnh',
    sources: ['WHO - Guidelines on Hand Hygiene in Health Care; Five Keys to Safer Food', 'CDC - Handwashing: Clean Hands Save Lives', 'Bộ Y tế Việt Nam - Hướng dẫn vệ sinh an toàn thực phẩm', 'FDI World Dental Federation; Bộ Y tế - Hướng dẫn chăm sóc răng miệng'],
    html: `
<p>Vệ sinh cá nhân là biện pháp phòng bệnh rẻ tiền và hiệu quả bậc nhất. Rửa tay đúng cách có thể giảm khoảng 30% bệnh tiêu chảy và khoảng 20% nhiễm khuẩn hô hấp. Đa số bệnh lây qua đường phân - miệng (tiêu chảy, tay chân miệng, viêm gan A, thương hàn) đều bắt đầu từ bàn tay hoặc thực phẩm bị nhiễm.</p>

<h2>Rửa tay đúng cách</h2>
<h3>Khi nào cần rửa tay?</h3>
<ul>
<li>Trước khi ăn, nấu ăn, cho trẻ ăn; trước khi chạm vào vết thương hoặc thuốc nhỏ mắt.</li>
<li>Sau khi đi vệ sinh, thay tã, dọn phân thú nuôi.</li>
<li>Sau khi ho, hắt hơi, xì mũi.</li>
<li>Sau khi chạm vào rác, động vật, thịt sống, hoặc chăm sóc người ốm.</li>
<li>Khi về đến nhà từ nơi công cộng; sau khi chạm vào bề mặt dùng chung ở bệnh viện.</li>
</ul>
<h3>Các bước (khoảng 20–30 giây)</h3>
[[img:handwash|Các bước rửa tay với xà phòng và nước sạch.]]
<ol>
<li>Làm ướt tay bằng nước sạch, lấy xà phòng.</li>
<li>Chà hai lòng bàn tay vào nhau.</li>
<li>Chà mu bàn tay này lên lòng bàn tay kia và ngược lại.</li>
<li>Chà kẽ giữa các ngón tay.</li>
<li>Chà mặt ngoài các ngón (mu ngón tay xoay trong lòng bàn tay kia).</li>
<li>Chà xoay từng ngón cái.</li>
<li>Chà đầu ngón tay và móng vào lòng bàn tay kia.</li>
<li>Rửa tay với nước sạch, lau khô bằng khăn sạch dùng một lần hoặc khăn riêng. Tay ẩm còn mầm bệnh dễ lây hơn.</li>
</ol>
<ul>
<li><strong>Xà phòng và nước</strong> là lựa chọn số một, nhất là khi tay bẩn thấy rõ, sau khi đi vệ sinh, hoặc ở nơi có dịch tiêu chảy (norovirus, <em>C. difficile</em> không bị cồn tiêu diệt tốt).</li>
<li><strong>Dung dịch sát khuẩn tay chứa cồn</strong> (từ 60–70% cồn) dùng khi không có nước; xoa đủ ướt tay 20–30 giây đến khi khô.</li>
<li>Không cần xà phòng "diệt khuẩn" đặc biệt cho gia đình; xà phòng thường đã đủ.</li>
</ul>

<h2>Vệ sinh răng miệng</h2>
<p>Sâu răng và viêm nướu do vi khuẩn trong mảng bám chuyển hóa đường thành axit, làm mất khoáng men răng. Bệnh răng miệng còn liên quan đến tiểu đường, bệnh tim mạch, sinh non.</p>
[[img:tooth|Cấu tạo răng: men, ngà, tủy, nướu, chân răng và xương hàm.]]
<ul>
<li><strong>Đánh răng 2 lần mỗi ngày, 2 phút mỗi lần</strong>, bằng <strong>kem chứa fluoride</strong> (khoảng 1.000–1.500 ppm ở người lớn). Fluoride là biện pháp phòng sâu răng có bằng chứng mạnh nhất.</li>
<li>Bàn chải lông mềm, đầu nhỏ, đặt nghiêng 45 độ về phía nướu, chải nhẹ nhàng; chải mặt ngoài, mặt trong, mặt nhai; thay bàn chải mỗi 3 tháng hoặc khi xòe lông.</li>
<li><strong>Làm sạch kẽ răng mỗi ngày</strong> bằng chỉ nha khoa hoặc bàn chải kẽ, vì bàn chải không chạm tới khoảng 40% bề mặt răng.</li>
<li>Sau khi đánh răng chỉ nhổ bọt, không súc miệng nhiều nước để fluoride còn lại bảo vệ răng.</li>
<li><strong>Giảm tần suất ăn đồ ngọt và uống nước ngọt</strong> (tần suất quan trọng hơn tổng lượng); tránh nhâm nhi nước ngọt suốt ngày.</li>
<li><strong>Khám răng định kỳ</strong> mỗi 6–12 tháng, lấy cao răng, trám sâu răng sớm.</li>
<li>Trẻ em: đánh răng ngay khi mọc răng đầu tiên; dưới 3 tuổi dùng lượng kem bằng hạt gạo, 3–6 tuổi bằng hạt đậu, có người lớn giám sát. Không cho trẻ ngậm bình sữa khi ngủ.</li>
</ul>
<div class="box warn"><b>Đi khám nha sĩ sớm khi</b>
<p>Chảy máu nướu khi đánh răng kéo dài (dấu hiệu viêm nướu), hôi miệng dai dẳng, răng ê buốt, răng lung lay, đau răng, vết loét trong miệng không lành sau 2–3 tuần (cần loại trừ ung thư miệng, nhất là khi hút thuốc, nhai trầu, uống rượu).</p></div>

<h2>An toàn thực phẩm: năm nguyên tắc vàng của WHO</h2>
<ol>
<li><strong>Giữ sạch:</strong> rửa tay trước khi chế biến, rửa dụng cụ, vệ sinh bề mặt bếp, phòng chống côn trùng và động vật.</li>
<li><strong>Tách riêng thực phẩm sống và chín:</strong> dùng dao, thớt riêng; không để nước thịt sống chảy sang thức ăn chín; bảo quản trong hộp đậy kín. Không rửa thịt gà sống dưới vòi nước vì làm vi khuẩn bắn tung tóe.</li>
<li><strong>Nấu chín kỹ:</strong> nhiệt độ tâm thực phẩm đạt khoảng 70 °C (thịt, cá, trứng chín hẳn, nước thịt sôi); hâm lại thức ăn thừa đến khi nóng bốc hơi toàn bộ.</li>
<li><strong>Giữ thực phẩm ở nhiệt độ an toàn:</strong> "vùng nguy hiểm" là 5–60 °C, vi khuẩn nhân đôi sau mỗi 20–30 phút. Ngăn mát tủ lạnh dưới 5 °C; giữ nóng trên 60 °C; không để thức ăn chín ở nhiệt độ phòng quá 2 giờ (1 giờ nếu trời rất nóng). Rã đông trong ngăn mát hoặc lò vi sóng, không để ngoài bàn.</li>
<li><strong>Dùng nước và nguyên liệu an toàn:</strong> nước đun sôi hoặc đã lọc, rau quả rửa kỹ dưới vòi nước chảy, không dùng thực phẩm quá hạn, hư, mốc.</li>
</ol>
<h3>Nguy cơ thường gặp trong bữa ăn Việt</h3>
<ul>
<li><strong>Tiết canh, gỏi thịt sống, nem chua, thịt heo chưa chín:</strong> nguy cơ nhiễm <em>Streptococcus suis</em> (gây viêm màng não, điếc), <em>Salmonella</em>, sán, viêm gan E.</li>
<li><strong>Hải sản sống, sò ốc nấu chưa chín:</strong> <em>Vibrio</em>, viêm gan A, ngộ độc histamine ở cá ươn.</li>
<li><strong>Cơm và thức ăn nấu sẵn để lâu ngoài nhiệt độ phòng:</strong> độc tố do <em>Bacillus cereus</em>, <em>Staphylococcus aureus</em> (gây nôn và tiêu chảy sau vài giờ).</li>
<li><strong>Nấm lạ, cá nóc, măng chua, sắn (khoai mì) chưa xử lý đúng, rượu tự nấu chứa methanol:</strong> ngộ độc nặng, có thể tử vong, đừng ăn khi chưa chắc chắn.</li>
<li><strong>Thực phẩm có hóa chất</strong> (thuốc bảo vệ thực vật dư, phụ gia cấm, chất bảo quản tuỳ tiện): chọn nơi bán uy tín, rửa, ngâm, gọt vỏ rau quả khi cần.</li>
</ul>

<h2>Nước uống và vệ sinh môi trường</h2>
<ul>
<li>Nước uống nên <strong>đun sôi</strong> (sôi lăn tăn khoảng 1 phút) hoặc dùng nước đóng chai, nước qua hệ thống lọc uy tín. Đá lạnh cũng cần từ nguồn nước sạch.</li>
<li>Giếng khoan nên kiểm tra định kỳ nhiễm asen, vi khuẩn, nitrat.</li>
<li>Sử dụng nhà vệ sinh hợp vệ sinh; xử lý phân an toàn; không đi tiêu bừa bãi.</li>
<li><strong>Diệt lăng quăng (bọ gậy):</strong> đổ nước đọng ở chậu cây, lốp xe, bình hoa, lật úp dụng cụ chứa nước mỗi tuần để phòng sốt xuất huyết.</li>
<li>Giữ nhà cửa thông thoáng; phơi chăn gối; tránh để ẩm mốc (nguyên nhân gây dị ứng, hen).</li>
</ul>

<h2>Những thói quen vệ sinh khác</h2>
<ul>
<li><strong>Vệ sinh hô hấp:</strong> ho, hắt hơi vào khuỷu tay hoặc khăn giấy (rồi bỏ khăn và rửa tay); đeo khẩu trang khi bị bệnh hô hấp, khi đến nơi đông người hoặc bệnh viện.</li>
<li><strong>Tắm rửa, cắt móng tay:</strong> tắm hằng ngày giúp sạch mồ hôi, bụi; móng tay ngắn, sạch hạn chế vi khuẩn. Không dùng chung khăn, dao cạo, bàn chải, cắt móng.</li>
<li><strong>Vệ sinh vùng kín:</strong> chỉ rửa bên ngoài bằng nước sạch, xà phòng dịu nhẹ; <strong>không thụt rửa âm đạo</strong> vì làm mất cân bằng vi khuẩn có lợi và tăng nguy cơ viêm nhiễm. Thay băng vệ sinh 4–6 giờ một lần, dụng cụ hành kinh dùng theo hướng dẫn.</li>
<li><strong>Mắt:</strong> không dụi mắt bằng tay bẩn; vệ sinh, thay kính áp tròng đúng hạn, không ngủ khi đeo. Khi dùng màn hình lâu, áp dụng quy tắc 20-20-20 (mỗi 20 phút nhìn xa 6 m trong 20 giây) và chớp mắt nhiều.</li>
<li><strong>Tai:</strong> không ngoáy tai sâu bằng tăm bông, que nhọn; ráy tai tự đẩy ra ngoài, chỉ làm sạch vành ngoài.</li>
<li><strong>Chân:</strong> giữ khô, sạch kẽ chân, chọn giày vừa; người tiểu đường cần kiểm tra bàn chân mỗi ngày.</li>
</ul>
<div class="box tip"><b>Ba thói quen có hiệu quả lớn nhất</b>
<ul>
<li>Rửa tay với xà phòng đúng lúc.</li>
<li>Đánh răng với kem fluoride 2 lần mỗi ngày và làm sạch kẽ răng.</li>
<li>Ăn chín, uống sôi, bảo quản thực phẩm đúng nhiệt độ.</li>
</ul></div>
`
});
