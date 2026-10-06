// Sức Khỏe - Bệnh thường gặp & cấp cứu (phần 1: chủ đề 8-10)
window.HEALTH_TOPICS = window.HEALTH_TOPICS || [];

window.HEALTH_TOPICS.push({
    id: 'common-illness', order: 8, section: 'illness', icon: '🤧',
    title: 'Bệnh thường gặp và cách tự chăm sóc',
    summary: 'Cảm lạnh, cúm, sốt, ho, tiêu chảy, đau đầu, dị ứng, táo bón, nhiễm trùng tiểu: tự xử trí tại nhà thế nào và khi nào phải đi khám.',
    keywords: 'cảm cúm sốt ho đau họng tiêu chảy nôn oresol mất nước đau đầu migraine dị ứng táo bón nhiễm trùng tiểu hạ sốt paracetamol',
    sources: ['NHS / CDC - Common cold, Influenza, Fever, Diarrhoea, Headache', 'WHO - Oral rehydration salts: Guidelines; Integrated Management of Childhood Illness (IMCI)', 'Bộ Y tế Việt Nam - Hướng dẫn chẩn đoán và điều trị cúm, tiêu chảy', 'American Academy of Pediatrics - Fever and your child'],
    html: `
<p>Hơn 90% lần ốm của một người bình thường là các bệnh nhẹ, tự khỏi. Mục tiêu của tự chăm sóc là <strong>giúp cơ thể dễ chịu, tránh mất nước, tránh biến chứng</strong> và biết khi nào một triệu chứng "không còn bình thường". Nguyên tắc chung: nghỉ ngơi, uống đủ nước, ăn uống dễ tiêu, theo dõi diễn tiến, không lạm dụng thuốc, đặc biệt là kháng sinh.</p>

<h2>Cảm lạnh và cúm</h2>
<p>Cả hai đều do virus hô hấp lây qua giọt bắn và tiếp xúc, <strong>kháng sinh không có tác dụng</strong>. Phân biệt:</p>
<table>
<tr><th></th><th>Cảm lạnh thông thường</th><th>Cúm (influenza)</th></tr>
<tr><td>Khởi phát</td><td>Từ từ, vài ngày</td><td>Đột ngột, vài giờ</td></tr>
<tr><td>Sốt</td><td>Không hoặc nhẹ</td><td>Thường cao (38–40 °C), 3–4 ngày</td></tr>
<tr><td>Đau mỏi cơ, mệt lả</td><td>Nhẹ</td><td>Nặng, nằm liệt giường</td></tr>
<tr><td>Nghẹt mũi, hắt hơi, đau họng</td><td>Nổi bật</td><td>Có thể có</td></tr>
<tr><td>Ho</td><td>Nhẹ - vừa</td><td>Ho khan, khó chịu</td></tr>
<tr><td>Thời gian</td><td>7–10 ngày</td><td>5–7 ngày (mệt có thể kéo dài 2 tuần)</td></tr>
<tr><td>Biến chứng</td><td>Hiếm (viêm xoang, tai)</td><td>Viêm phổi, suy hô hấp, nặng bệnh nền</td></tr>
</table>
[[img:flusymptoms|Triệu chứng của cúm: sốt, đau đầu, đau mỏi cơ, mệt lả, nghẹt mũi, đau họng, ho, đôi khi buồn nôn.]]
<h3>Chăm sóc tại nhà</h3>
<ul>
<li>Nghỉ ngơi, ở nhà để tránh lây người khác; uống nước ấm, súp, nước ép; súc họng nước muối ấm; rửa mũi nước muối sinh lý.</li>
<li>Hạ sốt, giảm đau bằng paracetamol (hoặc ibuprofen khi phù hợp) <strong>đúng liều ghi trên nhãn</strong>. Kiểm tra các thuốc cảm đóng gói sẵn, vì nhiều loại đã chứa paracetamol, dùng thêm thuốc khác sẽ quá liều.</li>
<li>Mật ong (cho người trên 1 tuổi) giúp dịu ho. Không bằng chứng mạnh về vitamin C, kẽm, tỏi, "xông" hay cạo gió trong điều trị.</li>
<li>Không cho trẻ dưới 6 tuổi dùng thuốc ho cảm không kê đơn; không dùng aspirin cho trẻ em và thiếu niên (nguy cơ hội chứng Reye).</li>
</ul>
[[img:coldsymptoms|Diễn tiến thường gặp của cảm lạnh (số liệu CDC): sốt, đau mỏi cơ, hắt hơi, đau họng giảm sau vài ngày, còn ho và chảy mũi kéo dài hơn.]]
<div class="box info"><b>Cúm: người có nguy cơ cao</b>
<p>Trẻ dưới 5 tuổi (nhất là dưới 2), người từ 65 tuổi, phụ nữ mang thai, người béo phì, người có bệnh tim, phổi, thận, tiểu đường, suy giảm miễn dịch dễ bị biến chứng. Họ nên đi khám sớm: thuốc kháng virus (oseltamivir) cho hiệu quả nhất nếu dùng trong 48 giờ đầu. <strong>Tiêm vaccine cúm hằng năm</strong> là cách phòng tốt nhất.</p></div>

<h2>Sốt</h2>
<p>Sốt là khi nhiệt độ cơ thể từ <strong>38 °C</strong> trở lên. Đó là phản ứng bảo vệ: nhiệt độ cao làm chậm vi sinh vật và kích hoạt miễn dịch. Độ cao của sốt <em>không</em> phản ánh mức nặng của bệnh.</p>
[[img:thermometer2|Nhiệt kế thủy ngân kiểu cũ. Hiện nay nên ưu tiên nhiệt kế điện tử vì thủy ngân độc và dễ phát tán khi nhiệt kế vỡ.]]
<h3>Xử trí tại nhà</h3>
<ul>
<li>Mục tiêu hạ sốt là <strong>giúp dễ chịu</strong>, không cần đưa về đúng 37 °C. Thường dùng thuốc khi sốt từ 38,5 °C hoặc khi người bệnh khó chịu.</li>
<li>Thuốc: paracetamol hoặc ibuprofen theo liều cân nặng/tuổi ghi trên nhãn hoặc dược sĩ tư vấn; cách 4–6 giờ (paracetamol), không vượt tổng liều tối đa trong ngày.</li>
<li>Cởi bớt quần áo, phòng thoáng; uống nhiều nước; <strong>lau người bằng khăn ấm</strong> (nước ở nhiệt độ cơ thể đến hơi mát) vào nách, bẹn, trán. <em>Không</em> dùng nước lạnh, cồn hoặc chườm đá (gây run, co mạch, làm sốt không giảm).</li>
<li>Không đắp chăn dày, không kiêng nước, không ủ kín "cho ra mồ hôi".</li>
</ul>
<div class="box danger"><b>Sốt cần đi khám hoặc cấp cứu ngay khi</b>
<ul>
<li>Trẻ <strong>dưới 3 tháng tuổi</strong> có nhiệt độ từ 38 °C trở lên</li>
<li>Sốt từ 39,5–40 °C không hạ hoặc sốt kéo dài trên 3 ngày (người lớn) hoặc trên 2 ngày (trẻ nhỏ)</li>
<li>Co giật, li bì khó đánh thức, lú lẫn, quấy khóc không dỗ được</li>
<li>Cứng cổ, đau đầu dữ dội, sợ ánh sáng, phát ban chấm đỏ tím không mất khi ấn (ấn bằng cốc thủy tinh trong)</li>
<li>Khó thở, thở nhanh, đau ngực; đau bụng nhiều; đau khi tiểu, đau lưng</li>
<li>Không uống được, nôn liên tục, dấu hiệu mất nước</li>
<li>Sốt sau khi đi vùng dịch (sốt rét, sốt xuất huyết) hoặc sau khi bị động vật cắn</li>
<li>Người suy giảm miễn dịch, đang điều trị ung thư, mới phẫu thuật</li>
</ul></div>
<h3>Co giật do sốt ở trẻ</h3>
<p>Khoảng 2–5% trẻ 6 tháng - 5 tuổi có thể co giật khi sốt nhanh. Phần lớn lành tính và không để lại di chứng. Xử trí: đặt trẻ nằm nghiêng trên sàn mềm, nới quần áo, <strong>không nhét gì vào miệng</strong>, không giữ chặt, bấm giờ. Gọi 115 nếu cơn kéo dài trên 5 phút, co giật lặp lại, trẻ không tỉnh lại, lần đầu tiên, hoặc trẻ dưới 6 tháng.</p>

<h2>Ho và đau họng</h2>
<ul>
<li><strong>Ho cấp (dưới 3 tuần)</strong> thường do virus. <strong>Ho kéo dài (trên 3 tuần)</strong> cần tìm nguyên nhân: hen, trào ngược dạ dày - thực quản, chảy mũi sau, hút thuốc, thuốc ức chế men chuyển (thuốc huyết áp), ho gà, lao, ung thư phổi.</li>
<li><strong>Ở Việt Nam, ho trên 2–3 tuần</strong> (nhất là kèm sốt nhẹ chiều tối, ra mồ hôi đêm, sụt cân, ho ra máu) cần đi khám để loại trừ lao.</li>
<li><strong>Đau họng</strong> phần lớn do virus, tự khỏi sau 5–7 ngày. Viêm họng do liên cầu nhóm A (cần kháng sinh để phòng thấp tim) gợi ý khi: sốt, <em>không ho</em>, hạch cổ đau, amiđan có mủ; cần bác sĩ làm test nhanh.</li>
<li>Đi khám ngay nếu khó nuốt nước bọt, chảy dãi (trẻ), há miệng khó, giọng "ngậm khoai nóng", thở rít, sưng một bên họng.</li>
</ul>

<h2>Tiêu chảy, nôn và bù nước</h2>
<p>Tiêu chảy là đi phân lỏng từ 3 lần mỗi ngày trở lên. Nguy cơ lớn nhất là <strong>mất nước và điện giải</strong>, nhất là với trẻ nhỏ và người già, chứ không phải bản thân vi khuẩn hay virus. Phần lớn tự khỏi sau vài ngày.</p>
<h3>Dung dịch bù nước đường uống (ORS, Oresol)</h3>
<ul>
<li>ORS chứa đường và muối theo tỷ lệ giúp ruột hấp thu nước hiệu quả; <strong>đã cứu hàng triệu trẻ em</strong>. Pha đúng theo hướng dẫn trên gói (đúng lượng nước, không pha đặc hơn hoặc loãng hơn).</li>
<li>Uống từng ngụm nhỏ, thường xuyên; nếu nôn, đợi 10 phút rồi tiếp tục chậm. Uống thêm sau mỗi lần đi ngoài hoặc nôn.</li>
<li>Khi không có gói ORS: theo công thức của WHO, pha 6 thìa cà phê gạt đường và nửa thìa cà phê gạt muối vào 1 lít nước đã đun sôi để nguội. Đong đúng, đặc biệt không cho thêm muối.</li>
<li><strong>Tiếp tục ăn</strong> thức ăn dễ tiêu (cháo, cơm, chuối, khoai), bú mẹ hoặc sữa bình thường. Tránh nước ngọt có ga, nước ép đặc, đồ chiên béo.</li>
<li>Trẻ dưới 5 tuổi có thể được bổ sung kẽm theo hướng dẫn của nhân viên y tế.</li>
<li>Không tự dùng thuốc cầm tiêu (loperamid) hoặc kháng sinh, đặc biệt với trẻ em hoặc khi có máu trong phân, sốt cao.</li>
</ul>
[[img:ors|Gói bù nước đường uống (ORS/oresol) pha với nước sạch: ví dụ các gói của Ấn Độ và El Salvador. Ở Việt Nam dùng gói oresol theo hướng dẫn trên bao bì.]]
<table>
<tr><th>Mức mất nước</th><th>Dấu hiệu</th></tr>
<tr><td>Nhẹ</td><td>Khát, miệng hơi khô, nước tiểu ít và sậm</td></tr>
<tr><td>Vừa</td><td>Rất khát, mắt trũng, khóc không nước mắt (trẻ nhỏ), da khô, véo da nhanh không xẹp, mệt, chóng mặt, thóp lõm</td></tr>
<tr><td>Nặng (cấp cứu)</td><td>Li bì, lú lẫn, không uống được, tay chân lạnh, mạch nhanh nhỏ, gần như không đi tiểu, véo da xẹp rất chậm</td></tr>
</table>
<div class="box warn"><b>Đi khám khi</b>
<p>Phân có máu hoặc đen; sốt cao; đau bụng dữ dội; tiêu chảy trên 2–3 ngày (người lớn), trên 24–48 giờ ở trẻ nhỏ; có dấu hiệu mất nước vừa/nặng; vừa đi du lịch về; nôn nhiều không uống được; người già, phụ nữ có thai, suy giảm miễn dịch.</p></div>

<h2>Đau đầu</h2>
<table>
<tr><th>Loại</th><th>Đặc điểm</th><th>Gợi ý</th></tr>
<tr><td>Đau đầu căng thẳng (phổ biến nhất)</td><td>Đau như bó chặt hai bên đầu, nhẹ - vừa, không nặng hơn khi vận động, không buồn nôn</td><td>Nghỉ, giảm stress, ngủ đủ, uống nước, thuốc giảm đau thông thường khi cần</td></tr>
<tr><td>Migraine (đau nửa đầu)</td><td>Đau một bên, đập theo nhịp mạch, vừa - nặng, kèm buồn nôn, sợ ánh sáng/tiếng ồn, kéo dài 4–72 giờ; có thể có "tiền triệu" (nhìn thấy đốm sáng)</td><td>Nghỉ trong phòng tối yên tĩnh; thuốc cắt cơn đúng thời điểm sớm; nếu thường xuyên cần bác sĩ dự phòng</td></tr>
<tr><td>Đau đầu chùm</td><td>Rất dữ dội quanh một mắt, chảy nước mắt, nghẹt mũi, theo chu kỳ</td><td>Cần khám chuyên khoa</td></tr>
<tr><td>Đau đầu do lạm dụng thuốc</td><td>Dùng thuốc giảm đau từ 10–15 ngày mỗi tháng trở lên làm đau đầu nặng thêm</td><td>Hạn chế thuốc; gặp bác sĩ</td></tr>
</table>
[[img:migrainetriggers|Ngưỡng đau nửa đầu: nhiều yếu tố khởi phát (rượu, thiếu ngủ, bỏ bữa, thay đổi nội tiết…) cộng dồn đến khi vượt ngưỡng thì cơn đau xuất hiện.]]
<div class="box danger"><b>Đau đầu "đèn đỏ": đi cấp cứu khi</b>
<ul>
<li>Đau đầu dữ dội đột ngột như "sét đánh", <em>đau nhất trong đời</em></li>
<li>Kèm yếu liệt, méo miệng, nói khó, nhìn đôi, lú lẫn, co giật</li>
<li>Kèm sốt, cứng cổ, phát ban</li>
<li>Sau chấn thương đầu; nặng dần nhanh trong vài ngày; đau khi ho hoặc cúi; thức giấc vì đau</li>
<li>Xuất hiện lần đầu sau 50 tuổi, đang mang thai hoặc có bệnh ung thư/HIV</li>
</ul></div>

<h2>Dị ứng thường gặp</h2>
<ul>
<li><strong>Viêm mũi dị ứng:</strong> hắt hơi từng tràng, ngứa mũi - mắt, chảy mũi trong; do bụi nhà, mạt bụi, phấn hoa, lông thú, nấm mốc. Điều trị: tránh dị nguyên (giặt chăn ga nước nóng, hạn chế thú nhồi bông, dùng máy lọc khí), rửa mũi nước muối, thuốc kháng histamine thế hệ mới, xịt mũi corticoid.</li>
<li><strong>Mày đay:</strong> nổi mẩn đỏ, ngứa, sưng, xuất hiện và biến mất trong vòng 24 giờ. Cần đi cấp cứu nếu kèm sưng môi, mặt, lưỡi, khó thở, chóng mặt (xem bài Dấu hiệu nguy hiểm: sốc phản vệ).</li>
<li><strong>Dị ứng thực phẩm:</strong> đậu phộng, hải sản, sữa, trứng, hạt, đậu nành. Khi đã biết, cần tránh hoàn toàn và đọc kỹ nhãn. Phân biệt với <em>không dung nạp</em> (như lactose) thường chỉ gây đầy bụng, tiêu chảy, không nguy hiểm tính mạng.</li>
<li><strong>Dị ứng thuốc:</strong> ghi nhớ tên thuốc bị dị ứng (kháng sinh penicillin, NSAID…) và báo cho nhân viên y tế mỗi lần khám.</li>
</ul>

<h2>Táo bón</h2>
<p>Đi tiêu dưới 3 lần mỗi tuần, phân cứng, phải rặn nhiều. Cải thiện: tăng chất xơ (rau, trái cây, ngũ cốc nguyên hạt) và nước, vận động, đi tiêu theo thói quen khi có cảm giác, không nhịn, không rặn lâu (tư thế ngồi xổm hoặc kê chân giúp dễ hơn). Thuốc nhuận tràng chỉ dùng ngắn hạn theo tư vấn.</p>
<p><strong>Cần khám</strong> nếu táo bón mới xuất hiện ở người trên 45–50 tuổi, phân có máu, sụt cân, thiếu máu, đau bụng nhiều, tiền sử gia đình ung thư đại - trực tràng.</p>

<h2>Nhiễm trùng đường tiểu</h2>
<p>Phổ biến ở phụ nữ (niệu đạo ngắn). Triệu chứng: tiểu buốt, tiểu rắt, tiểu nhiều lần, nước tiểu đục hoặc có máu, đau trên xương mu. Cần khám và xét nghiệm nước tiểu vì thường cần kháng sinh đúng loại. Uống nhiều nước, không nhịn tiểu, lau từ trước ra sau, tiểu sau quan hệ tình dục là các biện pháp phòng ngừa. <strong>Đi khám gấp</strong> nếu kèm sốt, rét run, đau hông lưng, nôn (nghi nhiễm trùng thận), ở nam giới, thai phụ, trẻ em.</p>

<div class="box tip"><b>Dùng thuốc không kê đơn cho bệnh nhẹ: ba điều cần nhớ</b>
<ul>
<li>Đọc kỹ nhãn và tờ hướng dẫn; xem hoạt chất để không dùng trùng lặp.</li>
<li>Dùng liều thấp nhất, ngắn nhất cần thiết; nếu không đỡ sau vài ngày hoặc nặng hơn, đi khám.</li>
<li>Hỏi dược sĩ nếu đang mang thai, cho con bú, có bệnh mạn tính hoặc đang uống thuốc khác.</li>
</ul></div>
`
});

window.HEALTH_TOPICS.push({
    id: 'red-flags', order: 9, section: 'illness', icon: '🚨',
    title: 'Dấu hiệu nguy hiểm cần cấp cứu',
    summary: 'Nhận biết đột quỵ (FAST), nhồi máu cơ tim, sốc phản vệ, khó thở và các dấu hiệu "đèn đỏ": khi nào gọi 115.',
    keywords: 'cấp cứu 115 đột quỵ tai biến nhồi máu cơ tim đau ngực khó thở sốc phản vệ co giật nhiễm trùng huyết ngộ độc FAST dấu hiệu nguy hiểm',
    sources: ['American Stroke Association - BE FAST; WHO - Stroke, cerebrovascular accident', 'ESC 2023 Guidelines for acute coronary syndromes', 'World Allergy Organization - Anaphylaxis guidance', 'Surviving Sepsis Campaign / WHO - Sepsis', 'Bộ Y tế Việt Nam - Hướng dẫn chẩn đoán và xử trí đột quỵ não, sốc phản vệ'],
    html: `
<div class="box danger"><b>Khi nghi ngờ tình huống đe dọa tính mạng: gọi 115 ngay, đừng chờ "xem thêm"</b>
<p>Đến cấp cứu sớm có thể quyết định sống còn và mức độ di chứng. Bệnh viện thà nhận một ca báo động nhầm còn hơn bỏ lỡ một ca thật.</p></div>

<h2>Cách gọi cấp cứu hiệu quả</h2>
<ol>
<li>Gọi <strong>115</strong> (cấp cứu y tế). Bình tĩnh, nói rõ: <em>địa chỉ chính xác</em> (kèm mốc dễ nhận), <em>số điện thoại đang gọi</em>, <em>chuyện gì đã xảy ra</em>, tuổi, tình trạng (có tỉnh không, có thở không).</li>
<li>Làm theo hướng dẫn của tổng đài viên, <strong>không cúp máy trước</strong> khi họ cho phép.</li>
<li>Cử người ra đường đón xe cấp cứu; mở sẵn cửa, dọn lối đi.</li>
<li>Chuẩn bị: thuốc đang dùng, sổ khám bệnh, giấy tờ tùy thân, thẻ bảo hiểm y tế.</li>
<li>Khi không thể chờ xe cấp cứu (ví dụ nhà rất xa), nhờ người chở ngay; người bệnh nặng <strong>không tự lái xe</strong>.</li>
</ol>

<h2>Đột quỵ (tai biến mạch máu não)</h2>
<p>Đột quỵ xảy ra khi mạch máu nuôi não bị tắc (khoảng 85%, nhồi máu não) hoặc vỡ (xuất huyết não). Nơ-ron mất rất nhanh, trung bình khoảng 1,9 triệu nơ-ron mỗi phút không được điều trị, nên "<strong>thời gian là não</strong>".</p>
[[img:fast|Quy tắc FAST nhận biết đột quỵ: Mặt (Face), Tay (Arm), Lời nói (Speech), Thời gian (Time).]]
[[img:strokeblausen|Đột quỵ do tắc mạch: cục máu đông chặn một nhánh động mạch não, vùng não phía sau bị thiếu máu.]]
<h3>Quy tắc BE-FAST</h3>
<table>
<tr><th>Chữ cái</th><th>Kiểm tra</th><th>Dấu hiệu</th></tr>
<tr><td><strong>B</strong> - Balance (thăng bằng)</td><td>Đột ngột chóng mặt, mất thăng bằng</td><td>Loạng choạng, không đứng hoặc đi vững</td></tr>
<tr><td><strong>E</strong> - Eyes (mắt)</td><td>Đột ngột mờ hoặc mất thị lực một hoặc hai mắt, nhìn đôi</td><td>Mất một phần thị trường</td></tr>
<tr><td><strong>F</strong> - Face (mặt)</td><td>Bảo cười hoặc nhe răng</td><td>Méo miệng, một bên mặt xệ</td></tr>
<tr><td><strong>A</strong> - Arm (tay)</td><td>Giơ hai tay ngang vai trong 10 giây</td><td>Một tay yếu, rơi xuống, hoặc tê</td></tr>
<tr><td><strong>S</strong> - Speech (lời nói)</td><td>Bảo nhắc lại một câu đơn giản</td><td>Nói ngọng, khó nói, nói không rõ, không hiểu lời</td></tr>
<tr><td><strong>T</strong> - Time (thời gian)</td><td>Ghi lại giờ bắt đầu triệu chứng</td><td>Gọi 115 ngay</td></tr>
</table>
<ul>
<li>Nhồi máu não có thể được điều trị bằng <strong>thuốc tiêu sợi huyết</strong> (thường trong 4,5 giờ đầu) và <strong>lấy huyết khối cơ học</strong> (đến 6–24 giờ ở một số ca chọn lọc). Càng sớm càng hiệu quả; cần chụp CT/MRI để phân biệt nhồi máu với xuất huyết.</li>
<li>Triệu chứng giống đột quỵ nhưng tự hết trong vài phút (<strong>cơn thiếu máu não thoáng qua, TIA</strong>) là lời cảnh báo nghiêm trọng, vẫn phải đi cấp cứu.</li>
</ul>
<div class="box warn"><b>Khi chờ xe cấp cứu</b>
<ul>
<li>Cho người bệnh nằm nghiêng an toàn hoặc nằm thoải mái, đầu hơi cao, nới quần áo.</li>
<li><strong>Không cho ăn, uống, ngậm thuốc</strong> (dễ sặc vì khó nuốt). Không tự cho aspirin hay thuốc hạ huyết áp khi chưa có chỉ định (aspirin có thể gây hại nếu là xuất huyết não).</li>
<li><strong>Không chích lể đầu ngón tay, nặn máu, cạo gió, bấm huyệt</strong> làm mất thời gian vàng, không có bằng chứng hiệu quả.</li>
<li>Ghi giờ phát hiện lần cuối bình thường và các thuốc đang dùng (đặc biệt thuốc chống đông).</li>
</ul></div>

<h2>Nhồi máu cơ tim</h2>
<p>Xảy ra khi động mạch vành bị tắc, một phần cơ tim thiếu máu và hoại tử dần. Cũng là cuộc chạy đua với thời gian: mỗi phút trôi qua, cơ tim chết thêm.</p>
[[img:heartattack|Áp phích của Viện Tim, Phổi và Máu Hoa Kỳ (NIH): nhận biết dấu hiệu nhồi máu cơ tim và gọi cấp cứu ngay (ở Hoa Kỳ là 911, ở Việt Nam là 115).]]
<h3>Dấu hiệu</h3>
<ul>
<li><strong>Đau, tức, nặng ngực</strong> như bị đè, bóp nghẹt, kéo dài trên 10–15 phút, không đỡ khi nghỉ; thường ở giữa ngực hoặc sau xương ức.</li>
<li>Lan lên <strong>vai, cánh tay (thường trái), cổ, hàm, lưng, thượng vị</strong>.</li>
<li>Khó thở, vã mồ hôi lạnh, buồn nôn, chóng mặt, hồi hộp, lo lắng "sắp chết".</li>
<li><strong>Biểu hiện không điển hình</strong> hay gặp ở <em>phụ nữ, người cao tuổi, người tiểu đường</em>: mệt lả bất thường, khó thở, đau bụng trên giống đau dạ dày, buồn nôn, đau hàm hoặc lưng, không có đau ngực rõ rệt.</li>
</ul>
<div class="box warn"><b>Xử trí</b>
<ul>
<li>Gọi 115; ngồi hoặc nằm nghỉ, không gắng sức, nới quần áo.</li>
<li>Nếu <em>không dị ứng aspirin, không đang bị chảy máu, không có chống chỉ định</em> và người tổng đài hoặc bác sĩ đồng ý, có thể nhai 1 viên aspirin (liều người lớn như 300 mg); không dùng để thay cho việc gọi cấp cứu.</li>
<li>Chỉ dùng nitroglycerin (ngậm dưới lưỡi) nếu bác sĩ đã kê cho bạn, theo đúng hướng dẫn.</li>
<li>Nếu người bệnh ngất, không thở hoặc thở ngáp: bắt đầu hồi sinh tim phổi (CPR) và dùng máy AED (xem bài Sơ cứu).</li>
<li>Đau ngực do cơ hoặc do dạ dày thường nhói theo hít thở, đau khi ấn vào chỗ đau, hoặc liên quan bữa ăn; nhưng <em>không tự chẩn đoán</em> đau ngực, đặc biệt khi có yếu tố nguy cơ (xem bài Tim mạch).</li>
</ul></div>

<h2>Sốc phản vệ</h2>
<p>Phản ứng dị ứng toàn thân cấp tính, có thể tử vong trong vài phút. Thường khởi phát sau tiếp xúc (từ vài phút đến 2 giờ) với thuốc (kháng sinh, thuốc giảm đau NSAID), thức ăn (đậu phộng, hải sản), nọc côn trùng (ong, kiến lửa), latex.</p>
[[img:anaphylaxis|Dấu hiệu và triệu chứng của sốc phản vệ ở nhiều cơ quan: da, mắt, hô hấp, tim mạch, tiêu hóa, thần kinh.]]
<ul>
<li><strong>Dấu hiệu:</strong> mày đay lan nhanh, ngứa, đỏ da; sưng môi, mặt, lưỡi, họng; khò khè, khó thở, khàn giọng; đau bụng quặn, nôn, tiêu chảy; chóng mặt, xây xẩm, mạch nhanh, huyết áp tụt, ngất.</li>
<li><strong>Xử trí hàng đầu: tiêm adrenaline (epinephrine) bắp đùi (mặt ngoài đùi) càng sớm càng tốt</strong>. Người có tiền sử sốc phản vệ thường được kê bút tiêm tự động và cần luôn mang theo. Gọi 115 ngay cả khi đã tiêm và đã đỡ.</li>
<li>Cho nằm ngửa, kê cao chân (nếu khó thở thì cho ngồi; phụ nữ mang thai nằm nghiêng trái); không đứng hoặc ngồi dậy đột ngột.</li>
<li>Có thể cần tiêm lặp lại sau 5–15 phút nếu chưa đỡ. Phản ứng có thể tái phát sau vài giờ (phản ứng hai pha) nên cần theo dõi ở cơ sở y tế.</li>
<li>Thuốc kháng histamine chỉ làm giảm ngứa, nổi mề đay, không cứu được tính mạng trong sốc phản vệ.</li>
</ul>

[[img:epipen|Bút tiêm adrenaline tự động (EpiPen) dùng khi sốc phản vệ: tiêm vào mặt ngoài đùi.]]
<h2>Khó thở và các cấp cứu hô hấp</h2>
<ul>
<li><strong>Gọi 115</strong> khi: khó thở khi nghỉ, không nói được trọn câu, thở rít, tím môi hay đầu ngón, phải ngồi chồm, co rút cơ liên sườn (kéo lõm hõm ức), lú lẫn, SpO₂ thấp (từ 90% trở xuống).</li>
<li><strong>Cơn hen nặng</strong> không đáp ứng thuốc cắt cơn sau vài lần xịt theo kế hoạch hành động: cấp cứu.</li>
<li><strong>Nghẹn dị vật đường thở:</strong> xem bài Sơ cứu.</li>
<li><strong>Trẻ em:</strong> thở nhanh, rút lõm lồng ngực, phập phồng cánh mũi, rên, bỏ bú, tím tái là dấu hiệu nặng.</li>
</ul>

<h2>Các dấu hiệu "đèn đỏ" khác</h2>
<table>
<tr><th>Tình huống</th><th>Dấu hiệu cảnh báo</th></tr>
<tr><td>Nhiễm trùng nặng, nhiễm trùng huyết (sepsis)</td><td>Sốt hoặc hạ thân nhiệt, run rét, tim nhanh, thở nhanh, lú lẫn, da lạnh nổi vân tím, tiểu ít, huyết áp thấp; thường trên nền có nhiễm trùng (phổi, tiết niệu, da, bụng)</td></tr>
<tr><td>Viêm màng não</td><td>Sốt, đau đầu dữ dội, cứng cổ, sợ ánh sáng, nôn, li bì; có thể kèm phát ban xuất huyết</td></tr>
<tr><td>Đau bụng cấp ngoại khoa</td><td>Đau dữ dội, đột ngột; bụng cứng; đau khu trú hố chậu phải (viêm ruột thừa); nôn dịch xanh vàng; bí trung đại tiện; đau bụng kèm trễ kinh và ra máu (thai ngoài tử cung)</td></tr>
<tr><td>Xuất huyết tiêu hóa</td><td>Nôn ra máu hoặc dịch như bã cà phê; đi ngoài phân đen như bã cà phê, dính, mùi hôi; đi ngoài ra máu tươi nhiều; kèm chóng mặt, xanh xao</td></tr>
<tr><td>Bóc tách, phình động mạch chủ</td><td>Đau ngực hoặc lưng dữ dội đột ngột, như xé, lan xuống lưng/bụng, có thể kèm ngất</td></tr>
<tr><td>Thuyên tắc phổi / huyết khối tĩnh mạch sâu</td><td>Khó thở đột ngột, đau ngực khi hít sâu, ho ra máu; một chân sưng, đau, nóng (nguy cơ: bất động lâu, phẫu thuật, đi máy bay đường dài, thuốc tránh thai, ung thư)</td></tr>
<tr><td>Chấn thương đầu</td><td>Mất ý thức dù ngắn, nôn nhiều lần, co giật, lú lẫn, đau đầu tăng, chảy máu hoặc dịch trong từ tai/mũi, đồng tử hai bên không đều, yếu liệt</td></tr>
<tr><td>Co giật</td><td>Co giật trên 5 phút, co giật lặp lại không tỉnh giữa các cơn, co giật lần đầu, co giật ở phụ nữ mang thai, sau chấn thương đầu, người tiểu đường</td></tr>
<tr><td>Hạ đường huyết nặng</td><td>Lú lẫn, hành vi lạ, co giật, hôn mê ở người tiểu đường hoặc người uống rượu (xem bài Sơ cứu)</td></tr>
<tr><td>Ngộ độc</td><td>Nuốt phải hóa chất, thuốc (quá liều), thuốc trừ sâu, nấm lạ, rượu tự nấu; khí CO từ bếp than trong phòng kín; cần gọi 115 hoặc trung tâm chống độc, nói rõ chất gì, bao nhiêu, lúc nào, mang theo bao bì/mẫu</td></tr>
<tr><td>Sản khoa</td><td>Ra máu âm đạo nhiều khi mang thai, vỡ ối non, đau bụng dữ dội, đau đầu dữ dội kèm phù, nhìn mờ (tiền sản giật), thai máy giảm hoặc mất</td></tr>
<tr><td>Trẻ em</td><td>Sốt ở trẻ dưới 3 tháng, li bì, bỏ bú, khóc thét kéo dài không dỗ được, thóp phồng, nôn dịch xanh, phát ban xuất huyết, thở nhanh rút lõm ngực, tiêu chảy mất nước, co giật, vàng da đậm lan nhanh, nuốt dị vật (pin, nam châm)</td></tr>
<tr><td>Tâm thần</td><td>Ý định hoặc hành vi tự làm hại bản thân: không để người đó ở một mình, dời vật nguy hiểm, gọi 115 hoặc đưa ngay đến cơ sở y tế; nói chuyện bình tĩnh, lắng nghe</td></tr>
</table>

<h2>Sai lầm nguy hiểm thường gặp</h2>
<ul>
<li>Chờ "xem sao", tự điều trị bằng thuốc dân gian hoặc cho người đột quỵ ăn uống.</li>
<li>Chích máu đầu ngón tay, cạo gió, đắp lá, nhét đồ vào miệng khi co giật.</li>
<li>Bắt người bị ngất hoặc đau ngực "đi bộ cho tỉnh".</li>
<li>Di chuyển người nghi gãy cột sống hoặc chấn thương nặng khi không cần thiết.</li>
<li>Gọi bác sĩ quen qua mạng thay vì gọi cấp cứu khi tình trạng nặng.</li>
<li>Từ chối đi viện vì "sợ tốn kém" hoặc "sợ làm phiền" đối với các dấu hiệu trong bài.</li>
</ul>
<div class="box tip"><b>Hãy chuẩn bị trước</b>
<ul>
<li>Lưu số 115 và địa chỉ nhà vào nơi dễ thấy; dạy trẻ lớn và người cao tuổi cách gọi.</li>
<li>Gia đình có người bệnh tim, tiểu đường, hen, dị ứng nặng nên có kế hoạch hành động bằng văn bản, thuốc cắt cơn, bút tiêm adrenaline (khi có chỉ định).</li>
<li>Học hồi sinh tim phổi và sử dụng AED tại khóa sơ cứu của Hội Chữ thập đỏ hoặc bệnh viện.</li>
</ul></div>
`
});

window.HEALTH_TOPICS.push({
    id: 'first-aid', order: 10, section: 'illness', icon: '⛑️',
    title: 'Sơ cứu',
    summary: 'Hồi sinh tim phổi (CPR) và AED, nghẹn, cầm máu, bỏng, gãy xương, say nóng, đuối nước, rắn cắn, co giật và tủ thuốc gia đình.',
    keywords: 'sơ cứu cpr hồi sinh tim phổi ép tim aed nghẹn heimlich cầm máu bỏng gãy xương đuối nước rắn cắn say nắng co giật tư thế hồi phục',
    sources: ['European Resuscitation Council (ERC) Guidelines 2021 và cập nhật', 'American Heart Association (AHA) Guidelines for CPR and ECC 2020/2025', 'International Federation of Red Cross and Red Crescent Societies - International First Aid, Resuscitation and Education Guidelines 2020', 'Bộ Y tế Việt Nam - Hướng dẫn sơ cứu, cấp cứu ban đầu'],
    html: `
<p>Sơ cứu là những hành động đầu tiên, đơn giản, làm <strong>trước khi nhân viên y tế đến</strong>, nhằm cứu sống, ngăn tình trạng xấu đi và hỗ trợ hồi phục. Bạn không cần là bác sĩ; chỉ cần bình tĩnh, làm đúng vài việc quan trọng. Bài viết này là tóm tắt kiến thức, <strong>không thay thế khóa học sơ cứu thực hành</strong> (nên học tại Hội Chữ thập đỏ, trung tâm cấp cứu 115, bệnh viện).</p>

<h2>Nguyên tắc chung khi gặp sự cố</h2>
<ol>
<li><strong>An toàn (Danger):</strong> kiểm tra nguy hiểm cho bản thân, nạn nhân, người xung quanh (xe cộ, điện, lửa, khí độc, sập đổ). Không tự đặt mình vào nguy hiểm.</li>
<li><strong>Đáp ứng (Response):</strong> vỗ vai, gọi to "Anh/chị có nghe tôi không?".</li>
<li><strong>Gọi trợ giúp (Send for help):</strong> gọi 115, nhờ người lấy máy AED.</li>
<li><strong>Đường thở (Airway):</strong> ngửa đầu nâng cằm (không ngửa nếu nghi chấn thương cổ: dùng nâng hàm).</li>
<li><strong>Hô hấp (Breathing):</strong> nhìn lồng ngực, nghe, cảm nhận hơi thở trong tối đa 10 giây.</li>
<li><strong>Hồi sinh (CPR)</strong> nếu không đáp ứng và không thở hoặc chỉ thở ngáp.</li>
<li><strong>Sốc điện (Defibrillation)</strong> bằng AED càng sớm càng tốt.</li>
</ol>
<p>Hãy nhớ: <strong>làm điều gì đó tốt hơn không làm gì</strong>. Luật "Người Samaritan tốt" ở nhiều nước bảo vệ người cứu hộ thiện chí; ở Việt Nam, Luật Khám bệnh, chữa bệnh cũng khuyến khích cấp cứu người gặp nạn.</p>

<h2>Ngừng tim: hồi sinh tim phổi (CPR) và AED</h2>
<p>Ngừng tim là khi tim đột ngột ngừng bơm máu hiệu quả, người bệnh bất tỉnh, không thở hoặc thở ngáp cá. Sau 4–6 phút thiếu oxy, não bắt đầu tổn thương không hồi phục; mỗi phút chậm trễ làm giảm tỷ lệ sống khoảng 7–10%. CPR duy trì tuần hoàn tạm thời, AED có thể đưa tim trở lại nhịp bình thường.</p>
[[img:chainofsurvival|Chuỗi sống còn: nhận biết sớm và gọi cấp cứu, hồi sinh tim phổi sớm, sốc điện sớm, chăm sóc sau hồi sinh.]]
[[img:cpr1|Vị trí đặt tay khi ép tim ở người lớn: giữa ngực, nửa dưới xương ức.]]
<h3>CPR ở người lớn (từ khi dậy thì)</h3>
<ol>
<li>Xác nhận nạn nhân không đáp ứng, không thở bình thường → <strong>gọi 115 (bật loa ngoài)</strong>, nhờ người lấy AED.</li>
<li>Đặt nạn nhân nằm ngửa trên nền cứng, phẳng.</li>
<li><strong>Ép tim:</strong> quỳ bên cạnh; đặt <em>gốc bàn tay</em> vào giữa ngực (nửa dưới xương ức), bàn tay kia chồng lên, các ngón đan nhau; hai tay thẳng, vai ngay trên tay.</li>
<li>Ép <strong>sâu khoảng 5–6 cm</strong>, <strong>tốc độ 100–120 lần mỗi phút</strong> (nhịp của bài "Stayin' Alive"), để ngực nảy lên hoàn toàn sau mỗi lần ép, hạn chế ngắt quãng.</li>
<li>Nếu đã được huấn luyện: cứ <strong>30 lần ép thì thổi ngạt 2 lần</strong> (ngửa đầu, bịt mũi, thổi khoảng 1 giây cho ngực nhô lên). Nếu không biết thổi ngạt hoặc ngại thổi, <strong>chỉ ép tim liên tục</strong> (hands-only CPR) vẫn cứu được người bị ngừng tim đột ngột ở người lớn.</li>
<li>Thay người ép mỗi 2 phút nếu có thể (để giữ chất lượng).</li>
<li><strong>Khi AED đến:</strong> bật máy, làm theo hướng dẫn bằng giọng nói; dán hai miếng điện cực lên ngực trần, khô (một miếng dưới xương đòn phải, một miếng bên trái, dưới nách); để máy phân tích, <em>không ai chạm vào nạn nhân</em>; khi máy yêu cầu thì bấm nút sốc; sau sốc tiếp tục CPR ngay.</li>
<li>Tiếp tục cho đến khi nạn nhân cử động, thở bình thường, nhân viên y tế đến tiếp quản hoặc bạn kiệt sức.</li>
</ol>
[[img:aed|Máy sốc tim tự động (AED): thiết kế để người không chuyên cũng sử dụng được.]]
<div class="box info"><b>Về AED</b>
<ul>
<li>AED tự phân tích nhịp tim và chỉ sốc khi cần; an toàn cho người không chuyên. Không cần lo "sốc nhầm".</li>
<li>Được đặt tại sân bay, trung tâm thương mại, nhà ga, tòa nhà lớn, trường học; nhìn biểu tượng trái tim có tia sét.</li>
<li>Lau khô ngực nếu ướt; cạo lông ngực nếu quá rậm; tháo miếng dán thuốc ở ngực; khoảng cách 2–3 cm tránh máy tạo nhịp cấy dưới da.</li>
</ul></div>
<h3>CPR ở trẻ em và trẻ sơ sinh</h3>
<ul>
<li>Nguyên nhân ngừng tim ở trẻ thường là thiếu oxy (đuối nước, nghẹn, suy hô hấp) nên <strong>thổi ngạt rất quan trọng</strong>: bắt đầu bằng 5 lần thổi ngạt (sau khi gọi 115), sau đó 30 ép : 2 thổi (1 người cứu) hoặc 15 : 2 (2 người cứu chuyên nghiệp).</li>
<li><strong>Trẻ từ 1 tuổi đến dậy thì:</strong> ép bằng một hoặc hai bàn tay tùy kích thước trẻ, sâu khoảng 1/3 đường kính trước sau của lồng ngực (khoảng 5 cm), 100–120 lần mỗi phút.</li>
<li><strong>Nhũ nhi (dưới 1 tuổi):</strong> ép bằng hai ngón tay (hoặc hai ngón cái ôm vòng ngực nếu có hai người), ở giữa ngực, sâu khoảng 4 cm; khi thổi ngạt, miệng người cứu bao phủ cả mũi và miệng trẻ, thổi nhẹ.</li>
<li>Nếu chỉ có một mình, làm CPR khoảng 1 phút rồi gọi 115 (nếu chưa gọi được bằng loa ngoài). AED có bộ điện cực, chế độ trẻ em khi có.</li>
</ul>
[[img:cprsternum|Xác định vị trí ép tim dựa vào xương ức.]]

<h2>Nghẹn dị vật đường thở</h2>
<div class="box warn"><b>Nhận biết</b>
<p>Đột ngột không nói, không ho, không thở được; đưa tay ôm cổ; mặt tím tái. <strong>Nếu người đó còn ho mạnh hoặc nói được:</strong> khuyến khích họ tiếp tục ho, không vỗ lưng, không cho uống nước.</p></div>
<h3>Người lớn và trẻ trên 1 tuổi còn tỉnh nhưng không ho, nói, thở được</h3>
<ol>
<li><strong>5 cú vỗ lưng:</strong> đứng nghiêng sau lưng, một tay đỡ ngực, để người đó cúi người về phía trước; dùng gốc bàn tay vỗ mạnh 5 lần vào giữa hai xương bả vai.</li>
<li><strong>5 lần ép bụng (thủ thuật Heimlich):</strong> đứng sau lưng, vòng hai tay qua bụng; một tay nắm lại, đặt mặt ngón cái ở trên rốn, dưới xương ức; tay kia nắm lên, giật mạnh hướng vào trong và lên trên.</li>
<li>Luân phiên 5 vỗ lưng - 5 ép bụng đến khi dị vật ra hoặc người đó mất ý thức.</li>
<li><strong>Phụ nữ mang thai, người rất béo:</strong> thay ép bụng bằng ép ngực (vị trí như ép tim).</li>
<li><strong>Nếu bất tỉnh:</strong> đặt nằm xuống, gọi 115, bắt đầu CPR (kiểm tra miệng, chỉ lấy dị vật nếu thấy rõ).</li>
<li>Tự cứu khi ở một mình: dựa bụng vào mép bàn, ghế, lan can rồi ấn mạnh vào đó, hoặc dùng nắm tay tự ép bụng.</li>
<li>Mọi người bị nghẹn đã được ép bụng đều cần đi khám sau đó để kiểm tra biến chứng.</li>
</ol>
[[img:abthrust|Thủ thuật ép bụng (Heimlich) ở người lớn bị nghẹn.]]
<h3>Trẻ dưới 1 tuổi bị nghẹn</h3>
<ul>
<li><strong>Không ép bụng.</strong> Đặt trẻ úp mặt xuống cẳng tay, đầu thấp hơn thân, đỡ hàm; <strong>5 cú vỗ lưng</strong> giữa hai xương bả vai.</li>
<li>Lật trẻ nằm ngửa trên cẳng tay, đầu thấp; <strong>5 lần ép ngực</strong> bằng hai ngón tay (như ép tim nhũ nhi).</li>
<li>Lặp lại; nếu trẻ bất tỉnh: gọi 115, CPR.</li>
</ul>
[[img:infantchoke|Nghẹn ở trẻ dưới 1 tuổi: 5 cú vỗ lưng (Back Blows) rồi 5 lần ép ngực (Chest Thrusts), không ép bụng.]]
<p><strong>Phòng tránh ở trẻ nhỏ:</strong> cắt nhỏ thức ăn, tránh hạt, kẹo cứng, nho nguyên quả, xúc xích tròn, đậu phộng, thạch nguyên khối cho trẻ dưới 4–5 tuổi; không để trẻ vừa ăn vừa chạy, cười, khóc; cất pin cúc áo và nam châm nhỏ.</p>

<h2>Tư thế hồi phục</h2>
<p>Dùng cho người <strong>bất tỉnh nhưng còn thở bình thường</strong> và không nghi ngờ chấn thương cột sống nặng, để tránh lưỡi tụt và dịch nôn chảy vào phổi.</p>
[[img:recovery|Tư thế hồi phục (nằm nghiêng an toàn).]]
<ol>
<li>Quỳ bên cạnh, đặt tay gần bạn co vuông góc, lòng bàn tay hướng lên.</li>
<li>Đưa tay xa bắt ngang ngực, áp mu bàn tay vào má gần bạn.</li>
<li>Co chân xa, rồi kéo nạn nhân lật về phía bạn.</li>
<li>Điều chỉnh chân trên co vuông góc, ngửa nhẹ đầu để mở đường thở, miệng hướng xuống thấp.</li>
<li>Theo dõi hơi thở liên tục; nếu ngừng thở thì CPR.</li>
</ol>

<h2>Cầm máu và vết thương</h2>
<ul>
<li><strong>Chảy máu nhiều:</strong> dùng gạc hoặc vải sạch <strong>ép trực tiếp</strong> vào vết thương; băng ép chặt; nâng cao chi (nếu không gãy xương); <em>không gỡ gạc thấm máu</em>, cứ đắp thêm lớp mới.</li>
<li><strong>Garô</strong> chỉ dùng khi chảy máu ở chi đe dọa tính mạng mà ép không cầm được (ví dụ cụt chi): dùng dây garô bản to (không dùng dây thừng, dây mảnh), đặt cao trên vết thương khoảng 5–7 cm, siết đến khi máu ngừng, ghi lại giờ, <strong>không tự tháo</strong>, chuyển ngay đến bệnh viện.</li>
<li><strong>Chảy máu cam:</strong> ngồi, cúi nhẹ về phía trước (<em>không ngửa đầu</em>), bóp chặt phần mềm của mũi 10 phút, thở bằng miệng, nhổ máu ra. Đi khám nếu kéo dài trên 20 phút, sau chấn thương, hoặc chảy máu tái diễn ở người dùng thuốc chống đông.</li>
<li><strong>Vết thương nông:</strong> rửa tay, rửa vết thương dưới vòi nước sạch, rửa sạch đất cát; sát khuẩn xung quanh; băng bằng gạc sạch; thay băng khi ướt, bẩn. Không bôi thuốc lá, tro, cà phê, nước mắm, kem đánh răng.</li>
<li><strong>Uốn ván:</strong> vết thương bẩn, sâu, đinh gỉ cần được đánh giá tiêm phòng uốn ván nếu chưa tiêm đủ hoặc mũi nhắc lại đã quá 5–10 năm.</li>
<li><strong>Vết thương cần khâu:</strong> sâu, miệng hở, dài hơn 1–2 cm, ở mặt, ở khớp, dị vật còn trong vết thương, nên đến cơ sở y tế trong vòng vài giờ đầu.</li>
<li><strong>Dị vật cắm vào cơ thể:</strong> đừng rút ra; băng cố định xung quanh và đến bệnh viện.</li>
</ul>
<h3>Bị chó, mèo cắn hoặc cào</h3>
<ol>
<li><strong>Rửa ngay</strong> vết thương dưới vòi nước chảy với xà phòng ít nhất <strong>15 phút</strong>; sát khuẩn bằng cồn hoặc povidone-iodine.</li>
<li>Không băng kín, không khâu vết thương, không đắp thuốc lá.</li>
<li><strong>Đến cơ sở y tế ngay trong ngày</strong> để được đánh giá tiêm <strong>vaccine phòng dại</strong> (và huyết thanh kháng dại khi cần) cùng uốn ván. Bệnh dại gần như luôn tử vong khi đã phát bệnh nhưng hoàn toàn phòng được nếu xử trí kịp thời.</li>
<li>Quan sát con vật 10 ngày (nếu có thể), nhưng <em>vẫn phải đi tiêm</em> đầy đủ, không chờ kết quả quan sát.</li>
</ol>

<h2>Bỏng</h2>
[[img:burn|Phân độ bỏng theo độ sâu của da.]]
<table>
<tr><th>Độ</th><th>Biểu hiện</th></tr>
<tr><td>Độ 1 (nông)</td><td>Da đỏ, đau, khô, không phồng nước (như cháy nắng nhẹ)</td></tr>
<tr><td>Độ 2</td><td>Phồng nước, đỏ hồng hoặc loang lổ, rất đau, ẩm</td></tr>
<tr><td>Độ 3 (sâu)</td><td>Da trắng, xám, nâu hoặc cháy đen, khô, cứng như da thuộc; đau ít hoặc không đau vì tổn thương thần kinh</td></tr>
</table>
<h3>Sơ cứu bỏng nhiệt</h3>
<ol>
<li>Đưa nạn nhân ra khỏi nguồn nhiệt; dập lửa trên quần áo (lăn trên đất, phủ chăn); tháo nhẫn, vòng, đồng hồ, quần áo không dính vào da trước khi sưng.</li>
<li><strong>Làm mát bằng nước mát chảy nhẹ liên tục trong 20 phút</strong> (càng sớm càng tốt, hiệu quả trong khoảng 3 giờ đầu). Không dùng đá lạnh hoặc nước đá (gây tổn thương thêm).</li>
<li>Che phủ bằng màng bọc thực phẩm (xếp lỏng, không quấn vòng) hoặc gạc sạch không dính; giữ ấm phần còn lại của cơ thể (chú ý ở trẻ em và người lớn tuổi, bỏng diện rộng dễ hạ thân nhiệt).</li>
<li><strong>Không</strong> bôi kem đánh răng, nước mắm, dầu, mỡ, bơ, lòng trắng trứng, thuốc lá, nước đá; <strong>không</strong> chọc vỡ bóng nước.</li>
<li>Giảm đau bằng paracetamol nếu cần.</li>
</ol>
<div class="box danger"><b>Đưa đi bệnh viện khi bỏng</b>
<ul>
<li>Độ 3, hoặc độ 2 lớn hơn lòng bàn tay nạn nhân (khoảng 1% diện tích cơ thể) ở người lớn; hoặc bất kỳ bỏng độ 2 ở trẻ em, người già</li>
<li>Bỏng ở mặt, cổ, bàn tay, bàn chân, khớp, vùng kín</li>
<li>Bỏng hóa chất, bỏng điện (kể cả khi vết nhỏ), bỏng hít khói (ho, khàn giọng, cháy lông mũi, muội đen ở miệng mũi)</li>
<li>Bỏng vòng quanh chi hoặc ngực</li>
</ul></div>
<ul>
<li><strong>Bỏng hóa chất:</strong> cởi bỏ quần áo dính hóa chất, rửa bằng nước sạch chảy liên tục ít nhất 20 phút (nhiều hơn với kiềm); bỏng mắt: rửa mắt bằng nước 15–20 phút và đi cấp cứu.</li>
<li><strong>Bỏng điện:</strong> ngắt nguồn điện trước khi chạm vào nạn nhân (dùng vật cách điện khô); luôn đi khám vì có thể tổn thương sâu và rối loạn nhịp tim.</li>
</ul>

<h2>Gãy xương, bong gân, chấn thương cột sống</h2>
<ul>
<li><strong>Nghi gãy xương:</strong> đau dữ dội, sưng, biến dạng, không cử động được, tiếng lạo xạo. Cố định tại chỗ bằng nẹp (cây, bìa cứng) ôm <strong>hai khớp</strong> ở hai đầu xương gãy; không cố nắn lại; chườm lạnh qua khăn; kiểm tra màu da, cảm giác, mạch ở đầu chi; gãy hở phải che vết thương bằng gạc sạch, ép cầm máu quanh chứ không ấn lên đầu xương.</li>
<li><strong>Nghi chấn thương cột sống hoặc cổ</strong> (ngã cao, tai nạn giao thông, lặn nước nông, đau cổ lưng, tê hoặc yếu tay chân): <strong>không di chuyển</strong> nạn nhân nếu không có nguy hiểm đe dọa tính mạng; giữ đầu cổ thẳng trục, chờ cấp cứu; không tháo mũ bảo hiểm trừ khi cản trở thở.</li>
<li><strong>Bong gân (ngã sái chân):</strong> nghỉ, chườm lạnh 15–20 phút mỗi 2–3 giờ trong ngày đầu, băng ép vừa, kê cao chi. Đi khám nếu không thể đứng chịu lực, biến dạng, tê bì, sưng nhiều hoặc không giảm sau vài ngày. Sau vài ngày cần vận động nhẹ chủ động, đừng bất động quá lâu.</li>
</ul>

<h2>Say nóng, say nắng</h2>
<ul>
<li><strong>Kiệt sức do nóng:</strong> mồ hôi nhiều, mệt, chóng mặt, nhức đầu, buồn nôn, da lạnh ẩm, mạch nhanh. Đưa vào chỗ mát, nằm kê cao chân, cởi bớt quần áo, làm mát bằng khăn ướt, uống nước hoặc oresol từng ngụm.</li>
<li><strong>Say nắng (đột quỵ nhiệt) - cấp cứu:</strong> thân nhiệt từ 40 °C, lú lẫn, nói sảng, co giật, hôn mê, da nóng (khô hoặc ướt). <strong>Gọi 115</strong> và <strong>làm mát ngay lập tức</strong> bằng cách tháo quần áo, ngâm nước mát (nếu có thể), phun nước và quạt, chườm đá vào cổ, nách, bẹn. Không cho uống nếu không tỉnh táo.</li>
<li>Phòng tránh: uống đủ nước, tránh vận động nặng giữa trưa, mặc đồ thoáng; <strong>không bao giờ để trẻ hoặc thú nuôi trong xe đóng kín</strong> (nhiệt độ trong xe tăng rất nhanh).</li>
</ul>

<h2>Đuối nước</h2>
<ul>
<li>Không nhảy xuống cứu nếu không biết bơi hoặc không được huấn luyện; ném phao, cây, dây để kéo nạn nhân vào.</li>
<li>Đưa nạn nhân lên bờ, đặt nằm ngửa; <strong>gọi 115</strong>; nếu không thở, bắt đầu bằng <strong>5 lần thổi ngạt</strong> rồi ép tim 30 : 2 (đuối nước gây ngừng tim do thiếu oxy nên thổi ngạt rất quan trọng).</li>
<li>Không dốc ngược nạn nhân, không ép bụng để "đẩy nước ra", không dùng các mẹo "vắt" nạn nhân lên lưng trâu: chỉ làm mất thời gian và gây nôn, sặc.</li>
<li>Mọi nạn nhân đuối nước dù đã tỉnh đều cần đi bệnh viện theo dõi vì có thể phù phổi muộn.</li>
<li>Phòng ngừa: Việt Nam có tỷ lệ đuối nước ở trẻ em cao; dạy bơi, rào ao hồ, giám sát trẻ tại bồn nước, sông, biển, áo phao khi đi thuyền.</li>
</ul>

<h2>Rắn cắn, côn trùng đốt</h2>
<ul>
<li><strong>Rắn độc cắn:</strong> đưa nạn nhân ra xa con rắn, giữ bình tĩnh, hạn chế cử động; tháo nhẫn, vòng; để chi thấp hơn hoặc ngang tim; <strong>bất động chi</strong> bằng nẹp; đưa ngay đến bệnh viện có huyết thanh kháng nọc; chụp ảnh con rắn từ xa nếu an toàn.</li>
<li><strong>Không</strong> rạch vết cắn, hút nọc bằng miệng, garô chặt, chườm đá, đắp lá, bôi hóa chất, uống rượu, hay đi tìm thầy lang. Các việc này không hiệu quả và có thể gây hoại tử, nhiễm trùng, tăng chảy máu, làm mất thời gian.</li>
<li><strong>Ong, kiến, sâu róm, sứa:</strong> nhổ ngòi ong bằng cách gạt ngang (không bóp), rửa nước xà phòng, chườm lạnh; bôi dịu ngứa. Theo dõi dấu hiệu sốc phản vệ (xem bài Dấu hiệu nguy hiểm). Sứa: rửa bằng nước biển/giấm (tùy loài), không rửa bằng nước ngọt, không chà xát.</li>
</ul>

<h2>Những tình huống khác</h2>
<ul>
<li><strong>Ngất:</strong> đặt nằm ngửa, kê cao chân, nới quần áo, để thoáng khí; tỉnh rồi cho ngồi dậy từ từ; đi khám nếu ngất khi gắng sức, đau ngực, tim đập nhanh, ngất không có tiền triệu, có bệnh tim.</li>
<li><strong>Co giật:</strong> dọn vật xung quanh, đệm đầu, nới cổ áo, nghiêng người sau cơn; <strong>không nhét đồ vào miệng</strong>, không giữ chặt tay chân; bấm giờ; gọi 115 nếu trên 5 phút, lần đầu, lặp lại, chấn thương.</li>
<li><strong>Hạ đường huyết (ở người còn tỉnh):</strong> cho ăn khoảng 15–20 g đường nhanh (3–4 viên đường, nửa ly nước ngọt, 1 thìa mật ong), đo lại sau 15 phút; bất tỉnh hoặc không nuốt được thì <em>không cho ăn uống gì</em>, gọi 115, để tư thế hồi phục.</li>
<li><strong>Dị vật mắt:</strong> không dụi; rửa nhẹ bằng nước sạch; hóa chất vào mắt: rửa liên tục 15–20 phút rồi đi cấp cứu.</li>
<li><strong>Ngộ độc khí CO</strong> (đốt than, máy phát điện trong phòng kín): đưa ra nơi thoáng, gọi 115; nhức đầu, chóng mặt, buồn nôn, lú lẫn là dấu hiệu.</li>
<li><strong>Nhiễm khói, cháy nhà:</strong> cúi thấp, che mũi bằng khăn ẩm, thoát ra ngoài, gọi 114; không dùng thang máy.</li>
</ul>

<h2>Tủ thuốc gia đình</h2>
<ul>
<li><strong>Dụng cụ:</strong> bông, gạc vô trùng, băng cuộn, băng dính y tế, băng cá nhân, băng tam giác, kéo, nhíp, găng tay y tế, nhiệt kế, khẩu trang, đèn pin nhỏ.</li>
<li><strong>Dung dịch:</strong> nước muối sinh lý 0,9%, dung dịch sát khuẩn (povidone-iodine hoặc cồn 70°), oresol.</li>
<li><strong>Thuốc thông dụng:</strong> paracetamol, thuốc dị ứng (kháng histamine), thuốc bôi bỏng, thuốc nhỏ mắt, mũi; và thuốc riêng của thành viên trong gia đình theo chỉ định.</li>
<li>Để nơi khô mát, cao, xa tầm tay trẻ em; <strong>kiểm tra hạn dùng 6 tháng một lần</strong>; bỏ thuốc hết hạn đúng cách; ghi số điện thoại 115 và bác sĩ gia đình ngay trên tủ.</li>
</ul>
<div class="box tip"><b>Điều quan trọng nhất</b>
<ul>
<li>An toàn trước, gọi 115 sớm, hành động bình tĩnh.</li>
<li>CPR: ép giữa ngực, sâu 5–6 cm, nhanh 100–120 lần mỗi phút, đừng ngừng quá lâu; dùng AED khi có.</li>
<li>Bỏng: làm mát 20 phút bằng nước chảy. Chảy máu: ép trực tiếp. Rắn cắn: bất động và đến viện. Co giật: bảo vệ đầu, không nhét gì vào miệng.</li>
<li>Đi học một khóa sơ cứu thực hành: rất đáng thời gian.</li>
</ul></div>
`
});
