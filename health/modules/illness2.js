// Sức Khỏe - Bệnh thường gặp & cấp cứu (phần 2: chủ đề 11-13)
window.HEALTH_TOPICS = window.HEALTH_TOPICS || [];

window.HEALTH_TOPICS.push({
    id: 'medicines', order: 11, section: 'illness', icon: '💊',
    title: 'Dùng thuốc đúng cách',
    summary: 'Thuốc kê đơn và không kê đơn, đọc nhãn, kháng sinh và kháng kháng sinh, giảm đau hạ sốt, tương tác thuốc, bảo quản.',
    keywords: 'thuốc kháng sinh paracetamol ibuprofen nsaid corticoid tương tác thuốc tác dụng phụ dị ứng thuốc liều bảo quản hết hạn kê đơn dược sĩ',
    sources: ['WHO - Antimicrobial resistance fact sheet; Medication Without Harm', 'FDA - Understanding Over-the-Counter Medicines', 'Bộ Y tế Việt Nam - Quy chế kê đơn thuốc, Hướng dẫn sử dụng kháng sinh', 'American Geriatrics Society - Beers Criteria'],
    html: `
<p>Thuốc là công cụ cứu người, nhưng cũng là nguyên nhân phổ biến của ngộ độc, nhập viện và tác dụng không mong muốn khi dùng sai. Theo WHO, sai sót thuốc gây ra hàng triệu trường hợp tổn hại mỗi năm. Hầu hết đều có thể tránh được bằng vài nguyên tắc.</p>

<h2>Những khái niệm cơ bản</h2>
<ul>
<li><strong>Hoạt chất (tên gốc/generic)</strong> là chất có tác dụng (ví dụ paracetamol). <strong>Biệt dược</strong> là tên thương mại của hãng (Panadol, Efferalgan… cùng chứa paracetamol). Hai biệt dược có cùng hoạt chất thì <em>không nên uống cùng lúc</em>.</li>
<li><strong>Thuốc kê đơn</strong> cần có đơn bác sĩ vì cần đánh giá nguy cơ (kháng sinh, thuốc huyết áp, tiểu đường, corticoid, thuốc ngủ, thuốc tim mạch…). <strong>Thuốc không kê đơn (OTC)</strong> có thể mua tự do nhưng vẫn có thể gây hại nếu dùng sai.</li>
<li><strong>Dược động học:</strong> thuốc được hấp thu (uống, tiêm, bôi, xịt, đặt), phân bố theo máu, chuyển hóa (chủ yếu ở gan) rồi thải trừ (chủ yếu qua thận). Gan hoặc thận yếu, người cao tuổi, trẻ nhỏ, phụ nữ có thai xử lý thuốc khác người bình thường nên liều có thể phải điều chỉnh.</li>
<li><strong>Nửa đời thải trừ</strong> cho biết thời gian để lượng thuốc trong máu giảm còn một nửa; quyết định việc thuốc uống mấy lần mỗi ngày. "Ngày 3 lần" nghĩa là cách đều khoảng 8 giờ, không nhất thiết là "ba bữa ăn".</li>
</ul>

<h2>Đọc đơn thuốc và nhãn thuốc</h2>
<ol>
<li><strong>Tên thuốc và hoạt chất, hàm lượng</strong> (ví dụ 500 mg/viên).</li>
<li><strong>Liều mỗi lần, số lần mỗi ngày, thời điểm</strong> (trước ăn, trong bữa, sau ăn, trước khi ngủ).</li>
<li><strong>Thời gian dùng</strong> (số ngày) và khi nào tái khám.</li>
<li><strong>Chống chỉ định, thận trọng, tác dụng phụ, tương tác</strong> trong tờ hướng dẫn sử dụng.</li>
<li><strong>Hạn dùng, điều kiện bảo quản.</strong></li>
</ol>
<p>Nếu có bất kỳ chỗ nào không rõ, <strong>hỏi bác sĩ hoặc dược sĩ</strong>; không đoán. Ghi lại danh sách thuốc (kể cả thực phẩm chức năng, thuốc thảo dược) bạn đang dùng và mang theo khi đi khám.</p>
<div class="box tip"><b>Thời điểm uống thuốc có ý nghĩa</b>
<ul>
<li><strong>Trước ăn</strong> (khoảng 30–60 phút): một số thuốc dạ dày, thuốc cần hấp thu khi bụng đói.</li>
<li><strong>Sau ăn:</strong> thuốc dễ gây kích ứng dạ dày (giảm đau kháng viêm NSAID, một số kháng sinh).</li>
<li><strong>Uống với nước lọc.</strong> Không uống với sữa, trà, cà phê, nước có ga, nước bưởi, nước trái cây nếu hướng dẫn không cho phép; rượu làm nặng thêm tác dụng phụ của nhiều thuốc.</li>
</ul></div>

<h2>Năm nguyên tắc dùng thuốc an toàn</h2>
<ol>
<li><strong>Đúng thuốc, đúng bệnh:</strong> không dùng thuốc của người khác, không dùng lại đơn cũ cho triệu chứng "giống".</li>
<li><strong>Đúng liều, đúng giờ, đúng cách:</strong> dùng muỗng hoặc xi-lanh chia vạch cho thuốc nước; không tự tăng liều để "mau khỏi".</li>
<li><strong>Đúng thời gian:</strong> không tự ý ngưng thuốc điều trị bệnh mạn tính (huyết áp, tiểu đường, động kinh, tim mạch, corticoid dùng lâu ngày) dù thấy khỏe.</li>
<li><strong>Đúng người:</strong> trẻ em, người cao tuổi, phụ nữ có thai hoặc cho con bú, người bệnh gan - thận cần được tư vấn riêng.</li>
<li><strong>Theo dõi:</strong> quan sát tác dụng và tác dụng phụ; báo nhân viên y tế khi có biểu hiện lạ.</li>
</ol>
<p><strong>Quên một liều?</strong> Nguyên tắc chung: uống ngay khi nhớ, trừ khi sắp đến giờ liều tiếp theo thì bỏ qua liều quên; <em>không uống gấp đôi</em>. Nhưng với thuốc quan trọng (thuốc chống đông, thuốc tránh thai, thuốc HIV, thuốc động kinh, insulin…) cần xem hướng dẫn riêng hoặc hỏi dược sĩ.</p>

<h2>Kháng sinh: dùng đúng để thuốc còn tác dụng</h2>
<p>Kháng sinh chỉ diệt hoặc ức chế <strong>vi khuẩn</strong>, <strong>hoàn toàn vô tác dụng với virus</strong> (cảm lạnh, cúm, đa số viêm họng, đa số ho, sốt siêu vi, sốt xuất huyết, tay chân miệng).</p>
[[img:antibiotics|Cách các nhóm kháng sinh tác động lên vi khuẩn: ức chế thành tế bào, tổng hợp protein, DNA…]]
<ul>
<li><strong>Kháng kháng sinh</strong> là việc vi khuẩn trở nên "miễn nhiễm" với thuốc do dùng kháng sinh không cần thiết hoặc không đúng. WHO xếp đây là một trong những mối đe dọa sức khỏe toàn cầu lớn nhất; hậu quả là nhiễm trùng khó chữa, thời gian nằm viện dài, tử vong tăng. Việt Nam nằm trong nhóm nước có tỷ lệ kháng kháng sinh cao, một phần do mua kháng sinh không cần đơn.</li>
<li><strong>Chỉ dùng khi bác sĩ kê đơn</strong>; không đòi kê kháng sinh cho cảm cúm.</li>
<li><strong>Uống đúng liều, đúng giờ, đủ thời gian theo chỉ định.</strong> Không tự ngưng sớm khi thấy đỡ (trừ khi bác sĩ cho phép), cũng không tự kéo dài.</li>
<li><strong>Không để dành, chia sẻ</strong>, hay dùng lại thuốc dư.</li>
<li><strong>Tác dụng phụ thường gặp:</strong> buồn nôn, tiêu chảy, nấm miệng hoặc nấm âm đạo. Dấu hiệu dị ứng (phát ban, ngứa, sưng mặt, khó thở) → ngưng thuốc và đi khám ngay, dị ứng penicillin có thể gây sốc phản vệ.</li>
<li>Tiêu chảy nặng, kéo dài, có máu sau dùng kháng sinh cần đi khám (nghi nhiễm <em>Clostridioides difficile</em>).</li>
<li>Phòng bệnh để khỏi cần kháng sinh: vaccine, rửa tay, an toàn thực phẩm.</li>
</ul>

<h2>Thuốc giảm đau, hạ sốt</h2>
<table>
<tr><th>Nhóm</th><th>Ví dụ</th><th>Dùng khi</th><th>Lưu ý quan trọng</th></tr>
<tr><td>Paracetamol (acetaminophen)</td><td>Panadol, Efferalgan, Hapacol…</td><td>Sốt, đau nhẹ - vừa</td><td>An toàn ở liều đúng nhưng <strong>quá liều gây suy gan nặng, có thể tử vong</strong>. Không vượt tổng liều tối đa trong ngày ghi trên nhãn; cẩn thận các thuốc cảm phối hợp chứa paracetamol; hạn chế nghiêm ngặt khi uống rượu, bệnh gan</td></tr>
<tr><td>NSAID</td><td>Ibuprofen, diclofenac, naproxen, meloxicam, aspirin…</td><td>Đau kèm viêm (đau khớp, đau răng, đau bụng kinh), sốt</td><td>Có thể gây <strong>đau dạ dày, loét, chảy máu tiêu hóa</strong>, tăng huyết áp, giữ nước, hại thận, tăng nguy cơ tim mạch. Uống sau ăn, liều thấp nhất, ngắn nhất. <strong>Tránh</strong> khi: loét dạ dày, suy thận, suy tim, hen nhạy cảm, đang dùng thuốc chống đông, 3 tháng cuối thai kỳ, sốt xuất huyết. Không dùng hai NSAID cùng lúc</td></tr>
<tr><td>Aspirin liều thấp</td><td>Aspirin 81 mg…</td><td>Dự phòng tim mạch theo chỉ định bác sĩ</td><td>Không tự dùng để "phòng" nếu chưa có chỉ định (nguy cơ chảy máu); <strong>không dùng cho trẻ em</strong></td></tr>
<tr><td>Opioid</td><td>Codeine, tramadol, morphin</td><td>Đau nặng theo đơn</td><td>Gây buồn ngủ, táo bón, lệ thuộc, suy hô hấp; không dùng codeine cho trẻ em làm thuốc ho</td></tr>
</table>

<h2>Những nhóm thuốc cần thận trọng</h2>
<ul>
<li><strong>Corticoid</strong> (prednisolon, dexamethason, methylprednisolon…): chống viêm rất mạnh, cứu sống trong nhiều bệnh nhưng dùng lâu gây tăng đường huyết, huyết áp, loãng xương, loét dạ dày, nhiễm trùng, hội chứng Cushing (mặt tròn, dày mỡ thân). <strong>Không ngưng đột ngột</strong> sau khi dùng kéo dài (suy thượng thận). Cảnh giác các loại "thuốc nam, thuốc gia truyền, thuốc đông y" giảm đau khớp, dị ứng rất hiệu nghiệm: thường bị trộn corticoid trái phép.</li>
<li><strong>Thuốc cảm đa thành phần</strong> (paracetamol + kháng histamine + thuốc thông mũi như pseudoephedrine...): dễ trùng lặp, gây buồn ngủ, tăng huyết áp, hồi hộp; thận trọng ở người tăng huyết áp, bệnh tim, bệnh tuyến tiền liệt, lái xe.</li>
<li><strong>Thuốc kháng histamine thế hệ 1</strong> (chlorpheniramine, diphenhydramine): gây buồn ngủ, khô miệng; người cao tuổi tránh dùng.</li>
<li><strong>Thuốc ngủ, an thần</strong> (benzodiazepine, "thuốc Z"): chỉ ngắn hạn theo đơn.</li>
<li><strong>Thuốc ức chế bơm proton, thuốc dạ dày</strong> dùng không cần thiết kéo dài làm tăng nguy cơ thiếu B12, magiê, gãy xương, nhiễm trùng ruột; dùng theo chỉ định.</li>
<li><strong>Thuốc chống đông, thuốc tiểu đường, insulin, thuốc điều trị tim mạch:</strong> sai liều có thể gây hậu quả nặng; tuân thủ chặt.</li>
<li><strong>Thuốc thông tiện và nhuận tràng:</strong> dùng thường xuyên gây lệ thuộc.</li>
</ul>

<h2>Tương tác thuốc</h2>
<p>Một thuốc có thể làm tăng hoặc giảm tác dụng của thuốc khác, thực phẩm hay thảo dược:</p>
<ul>
<li><strong>Thuốc - thuốc:</strong> ví dụ NSAID làm giảm hiệu quả thuốc hạ áp và tăng nguy cơ chảy máu khi dùng cùng thuốc chống đông.</li>
<li><strong>Thuốc - thực phẩm:</strong> nước bưởi ảnh hưởng chuyển hóa nhiều thuốc (một số thuốc hạ mỡ máu statin, thuốc huyết áp, thuốc ức chế miễn dịch); sữa, thực phẩm giàu canxi, sắt làm giảm hấp thu một số kháng sinh (tetracyclin, quinolon) và thuốc giáp; rau lá xanh đậm (nhiều vitamin K) ảnh hưởng tác dụng warfarin; rượu làm tăng tác dụng an thần và độc tính gan.</li>
<li><strong>Thuốc - thảo dược, thực phẩm chức năng:</strong> cỏ St. John's wort làm giảm tác dụng nhiều thuốc (kể cả thuốc tránh thai); cam thảo làm tăng huyết áp; tỏi, bạch quả, nhân sâm có thể tăng nguy cơ chảy máu. "Tự nhiên" không có nghĩa là an toàn.</li>
<li>Giải pháp: <strong>luôn báo đầy đủ</strong> mọi thứ bạn đang dùng cho bác sĩ và dược sĩ; dùng một hiệu thuốc quen để họ lưu hồ sơ.</li>
</ul>

<h2>Tác dụng phụ và dị ứng thuốc</h2>
<ul>
<li><strong>Tác dụng phụ</strong> phụ thuộc liều và cơ chế thuốc (buồn nôn, buồn ngủ, khô miệng, ho do thuốc ức chế men chuyển...). Báo bác sĩ; đừng tự ngưng thuốc bệnh mạn tính; đôi khi chỉ cần đổi liều hoặc loại thuốc.</li>
<li><strong>Dị ứng thuốc</strong> là phản ứng miễn dịch: nổi mẩn, ngứa, sưng môi mắt, khó thở, phồng rộp da, loét miệng, sốt. <strong>Ngưng thuốc ngay và đi khám</strong>; nếu sốc phản vệ, gọi 115. Ghi nhớ và thông báo tên thuốc dị ứng ở mỗi lần khám (nên có thẻ hoặc ghi trong điện thoại).</li>
<li>Phản ứng da nặng như hội chứng Stevens-Johnson (phồng rộp, bong da, loét niêm mạc kèm sốt) là cấp cứu.</li>
</ul>

<h2>Những đối tượng cần thận trọng riêng</h2>
<ul>
<li><strong>Phụ nữ mang thai, cho con bú:</strong> nhiều thuốc có thể qua nhau thai hoặc sữa; không tự dùng, kể cả thuốc thảo dược; hỏi bác sĩ sản khoa. (Một số thuốc vẫn cần thiết và được chọn loại an toàn hơn; thai phụ cũng không nên tự ngưng thuốc bệnh mạn tính.)</li>
<li><strong>Trẻ em:</strong> liều tính theo cân nặng, không theo "nửa viên người lớn"; dùng dụng cụ đong kèm sản phẩm; không dùng aspirin; tránh thuốc ho cảm cho trẻ nhỏ; cất thuốc xa tầm tay (ngộ độc thuốc ở trẻ rất hay gặp).</li>
<li><strong>Người cao tuổi:</strong> thường dùng nhiều thuốc (đa dược), dễ tương tác, dễ té ngã do thuốc ngủ, thuốc hạ áp; nên rà soát đơn thuốc định kỳ với bác sĩ; dùng hộp chia thuốc theo ngày.</li>
<li><strong>Bệnh gan, thận:</strong> phải chỉnh liều hoặc tránh một số thuốc.</li>
</ul>

<h2>Bảo quản và xử lý thuốc</h2>
<ul>
<li>Nơi khô ráo, thoáng mát, tránh ánh nắng; nhà bếp hay nhà tắm ẩm nóng không phải nơi tốt. Thuốc cần tủ lạnh (insulin chưa mở, một số vaccine, thuốc nhỏ mắt nào đó) thì làm theo nhãn.</li>
<li>Để trong bao bì gốc; giữ tờ hướng dẫn; ghi ngày mở nắp với thuốc nước, thuốc nhỏ mắt (thường bỏ sau 1 tháng); dán nhãn thuốc pha sẵn.</li>
<li><strong>Kiểm tra hạn dùng</strong>; không dùng thuốc hết hạn, đổi màu, vón cục, ẩm, mùi lạ.</li>
<li>Xa tầm tay và tầm nhìn trẻ em; đóng nắp an toàn.</li>
<li>Thuốc thừa, hết hạn: không xả bồn cầu; đưa đến nhà thuốc hoặc điểm thu gom thuốc hết hạn nếu có; nếu không, trộn với chất không hấp dẫn (bã cà phê, đất), cho vào túi kín rồi bỏ rác.</li>
</ul>

<h2>Mua thuốc an toàn</h2>
<ul>
<li>Mua ở <strong>nhà thuốc có giấy phép</strong>, có dược sĩ, giữ hóa đơn; kiểm tra bao bì, số đăng ký, hạn, lô sản xuất.</li>
<li><strong>Thuốc giả, thuốc kém chất lượng</strong> là thực tế, nhất là mua qua mạng xã hội, trang bán hàng không rõ nguồn gốc.</li>
<li>Cảnh giác quảng cáo "thần dược", "đặc trị", "chữa khỏi hoàn toàn tiểu đường, ung thư, gout, viêm khớp, tăng huyết áp trong vài ngày", "không tác dụng phụ". Thuốc thật sự được cấp phép và có bằng chứng; một liệu pháp chữa khỏi các bệnh mạn tính nặng bằng một sản phẩm duy nhất hầu như luôn là lừa đảo và có thể đầy nguy cơ (trộn corticoid, thuốc hạ đường huyết, chất cấm).</li>
<li>Người bán hàng không phải bác sĩ: đừng để họ chẩn đoán, kê đơn cho bạn.</li>
</ul>
<div class="box warn"><b>Gọi bác sĩ hoặc cấp cứu khi</b>
<p>Nghi uống nhầm hoặc quá liều (đặc biệt paracetamol, thuốc tim mạch, thuốc tiểu đường, thuốc ngủ, thuốc ở trẻ em), dị ứng nặng, buồn ngủ hoặc lú lẫn bất thường sau thuốc mới, chảy máu hoặc bầm tím bất thường khi dùng thuốc chống đông. Mang theo vỏ thuốc khi đi cấp cứu.</p></div>
`
});

window.HEALTH_TOPICS.push({
    id: 'vaccines', order: 12, section: 'illness', icon: '💉',
    title: 'Vaccine và miễn dịch',
    summary: 'Vaccine hoạt động ra sao, các loại vaccine, miễn dịch cộng đồng, lịch tiêm cho trẻ em và người lớn, an toàn và những hiểu lầm phổ biến.',
    keywords: 'vaccine tiêm chủng tiêm phòng lịch tiêm miễn dịch cộng đồng sởi bại liệt hpv cúm uốn ván dại phản ứng sau tiêm an toàn vắc xin',
    sources: ['WHO - Vaccines and immunization; Immunization Agenda 2030; SAGE recommendations', 'CDC - Vaccine Safety; Immunization Schedules', 'Bộ Y tế Việt Nam - Chương trình Tiêm chủng mở rộng quốc gia và hướng dẫn tiêm chủng', 'Shattock AJ et al. - Contribution of vaccination to improved survival (Lancet 2024)'],
    html: `
<p>Sau nước sạch, vaccine là biện pháp y tế công cộng cứu được nhiều sinh mạng nhất. Vaccine đã giúp <strong>loại trừ bệnh đậu mùa</strong> (1980), <strong>đưa bệnh bại liệt</strong> đến gần diệt trừ, và giảm mạnh bạch hầu, ho gà, sởi, uốn ván sơ sinh, Hib, viêm gan B. WHO ước tính chương trình tiêm chủng mở rộng toàn cầu đã cứu khoảng <strong>154 triệu sinh mạng</strong> trong 50 năm (1974–2024), phần lớn là trẻ nhỏ.</p>

<h2>Vaccine hoạt động như thế nào?</h2>
<p>Lần đầu gặp một mầm bệnh, hệ miễn dịch cần vài ngày đến vài tuần để nhận diện và đối phó, trong thời gian đó người bệnh có thể nặng hoặc tử vong. <strong>Vaccine cho hệ miễn dịch "học trước"</strong> bằng một phần hoặc dạng vô hại của mầm bệnh, mà không gây bệnh thật. Kết quả:</p>
<ul>
<li>Cơ thể tạo <strong>kháng thể</strong> đặc hiệu (tế bào B) và <strong>tế bào T</strong> chuyên biệt.</li>
<li>Lưu lại <strong>tế bào nhớ</strong> kéo dài nhiều năm, thậm chí suốt đời. Khi mầm bệnh thật xâm nhập, phản ứng nhanh hơn và mạnh hơn nhiều.</li>
<li>Một số vaccine cần <strong>nhiều liều</strong> hoặc <strong>liều nhắc lại</strong> để tạo và duy trì đủ miễn dịch.</li>
</ul>

<h2>Các loại vaccine</h2>
<table>
<tr><th>Loại</th><th>Nguyên lý</th><th>Ví dụ</th></tr>
<tr><td>Sống giảm độc lực</td><td>Mầm bệnh bị làm yếu, còn nhân lên ít; miễn dịch mạnh, lâu dài</td><td>Sởi - quai bị - rubella (MMR), thủy đậu, BCG, rota uống, sốt vàng, bại liệt uống (OPV)</td></tr>
<tr><td>Bất hoạt</td><td>Mầm bệnh bị tiêu diệt, không thể gây bệnh</td><td>Bại liệt tiêm (IPV), viêm gan A, dại, cúm tiêm, viêm não Nhật Bản</td></tr>
<tr><td>Tiểu đơn vị, protein, polysaccharide, liên hợp</td><td>Chỉ dùng một thành phần của mầm bệnh</td><td>Viêm gan B, HPV, Hib, phế cầu, não mô cầu, ho gà vô bào, zona tái tổ hợp</td></tr>
<tr><td>Giải độc tố</td><td>Độc tố đã vô hiệu hóa</td><td>Bạch hầu, uốn ván</td></tr>
<tr><td>mRNA và vector virus</td><td>Đưa "công thức" protein vào tế bào để tạo kháng nguyên</td><td>Vaccine COVID-19 (mRNA, vector adenovirus)</td></tr>
</table>
<p>Vaccine còn chứa các thành phần phụ như <em>tá dược</em> (tăng đáp ứng miễn dịch), chất ổn định, rất ít chất bảo quản; tất cả được kiểm tra nghiêm ngặt.</p>

<h2>Miễn dịch cộng đồng</h2>
<p>Khi tỷ lệ tiêm chủng đủ cao, mầm bệnh khó lây lan, giúp <strong>bảo vệ cả những người không thể tiêm</strong> (trẻ sơ sinh, người suy giảm miễn dịch, bệnh nhân ung thư). Ngưỡng cần thiết phụ thuộc mức lây của bệnh (chỉ số R0): sởi lây rất mạnh nên cần khoảng 95% dân số có miễn dịch; bại liệt khoảng 80–85%; ho gà khoảng 92–94%.</p>
[[img:herd|Miễn dịch cộng đồng: người được tiêm chủng (xanh) chặn chuỗi lây nhiễm, bảo vệ cả người chưa tiêm.]]
<p>Vì vậy khi tỷ lệ tiêm giảm, bệnh quay lại: nhiều đợt dịch sởi ở các quốc gia (kể cả Việt Nam năm 2014, 2018 và 2024) đều gắn với khoảng trống tiêm chủng.</p>

<h2>Lịch tiêm chủng</h2>
<div class="box info"><b>Lưu ý</b>
<p>Lịch tiêm cụ thể thay đổi theo thời gian và có sự khác nhau giữa chương trình quốc gia (miễn phí) và dịch vụ tiêm chủng. Hãy luôn tham khảo <strong>sổ tiêm chủng</strong>, trạm y tế, bác sĩ nhi, cơ sở tiêm chủng hoặc Bộ Y tế. Phần dưới đây là bức tranh chung.</p></div>
<h3>Trẻ em</h3>
<ul>
<li><strong>Sơ sinh (trong 24 giờ đầu):</strong> viêm gan B liều sơ sinh; BCG (phòng lao nặng).</li>
<li><strong>Từ 2 tháng tuổi:</strong> vaccine phối hợp phòng bạch hầu - ho gà - uốn ván - viêm gan B - Hib (5 trong 1 hoặc 6 trong 1), bại liệt, phế cầu, rota (uống). Các liều cách nhau khoảng 1–2 tháng.</li>
<li><strong>9 tháng:</strong> sởi (hoặc sởi - rubella).</li>
<li><strong>12–18 tháng:</strong> sởi - quai bị - rubella (MMR), thủy đậu, viêm não Nhật Bản, nhắc lại bạch hầu - ho gà - uốn ván, viêm gan A, một số vaccine khác tùy chương trình.</li>
<li><strong>Tuổi vào học và thiếu niên:</strong> nhắc lại uốn ván - bạch hầu - ho gà; <strong>HPV từ 9 tuổi</strong> (phòng ung thư cổ tử cung và nhiều ung thư khác; hiệu quả nhất khi tiêm trước khi có quan hệ tình dục); não mô cầu theo khuyến cáo.</li>
</ul>
<h3>Người lớn</h3>
<table>
<tr><th>Vaccine</th><th>Ai cần</th></tr>
<tr><td>Cúm (hằng năm)</td><td>Mọi người từ 6 tháng tuổi, đặc biệt người từ 65 tuổi, phụ nữ có thai, người có bệnh nền, nhân viên y tế</td></tr>
<tr><td>Uốn ván - bạch hầu - ho gà (Td/Tdap)</td><td>Nhắc lại mỗi 10 năm; phụ nữ có thai tiêm mỗi thai kỳ (thường từ tuần 27–36) để bảo vệ trẻ sơ sinh</td></tr>
<tr><td>Viêm gan B</td><td>Người chưa được tiêm và chưa có kháng thể; nhân viên y tế; bệnh gan, tiểu đường; bạn tình và người thân của người nhiễm</td></tr>
<tr><td>Viêm gan A</td><td>Người chưa mắc, du lịch vùng dịch, bệnh gan mạn, nam quan hệ đồng giới</td></tr>
<tr><td>Phế cầu</td><td>Người từ 65 tuổi, hoặc có bệnh phổi, tim, tiểu đường, suy giảm miễn dịch, mất lách</td></tr>
<tr><td>Zona (giời leo)</td><td>Người từ 50 tuổi hoặc suy giảm miễn dịch (tùy loại vaccine)</td></tr>
<tr><td>HPV</td><td>Khuyến cáo đến 26 tuổi, một số người 27–45 tuổi sau tư vấn</td></tr>
<tr><td>Sởi - quai bị - rubella, thủy đậu</td><td>Người chưa mắc/chưa tiêm đủ, đặc biệt phụ nữ chuẩn bị mang thai (tiêm xong tránh thai ít nhất 1 tháng)</td></tr>
<tr><td>Dại</td><td><em>Sau phơi nhiễm</em> (bị chó mèo cắn…) là cấp thiết; <em>trước phơi nhiễm</em> cho người làm nghề có nguy cơ</td></tr>
<tr><td>COVID-19, RSV và các vaccine khác</td><td>Theo khuyến cáo hiện hành của cơ quan y tế</td></tr>
<tr><td>Vaccine du lịch</td><td>Sốt vàng, thương hàn, viêm não Nhật Bản, não mô cầu, dại...: hỏi phòng khám du lịch trước chuyến đi 4–6 tuần</td></tr>
<tr><td>Sốt xuất huyết</td><td>Đã có vaccine được cấp phép tại Việt Nam; hỏi bác sĩ để biết đối tượng phù hợp</td></tr>
</table>

<h2>An toàn của vaccine</h2>
<ul>
<li>Vaccine trải qua <strong>nhiều giai đoạn thử nghiệm</strong> trên hàng chục nghìn người trước khi được cấp phép, rồi tiếp tục được <strong>giám sát liên tục</strong> sau khi lưu hành (hệ thống báo cáo phản ứng sau tiêm). Đây là một trong những nhóm sản phẩm y tế được kiểm tra chặt chẽ nhất.</li>
<li><strong>Phản ứng thường gặp, nhẹ, tự hết sau 1–3 ngày:</strong> đau, đỏ, sưng chỗ tiêm; sốt nhẹ; mệt, quấy khóc, chán ăn, đau cơ. Đó là dấu hiệu hệ miễn dịch đang hoạt động.</li>
<li><strong>Phản ứng hiếm, nặng:</strong> sốc phản vệ khoảng 1 ca trên 1 triệu liều, xảy ra trong vòng 15–30 phút và xử trí được nếu ở cơ sở y tế. Vì vậy <strong>ở lại theo dõi 30 phút sau tiêm</strong>.</li>
<li>Lợi ích của vaccine vượt trội rủi ro: nguy cơ biến chứng từ bệnh (viêm não do sởi, vô sinh do quai bị, ung thư do HPV/viêm gan B, liệt do bại liệt) cao hơn nhiều lần so với nguy cơ từ vaccine.</li>
</ul>

<h2>Những hiểu lầm phổ biến</h2>
<table>
<tr><th>Hiểu lầm</th><th>Sự thật</th></tr>
<tr><td>"Vaccine gây tự kỷ"</td><td>Nhiều nghiên cứu lớn trên hàng triệu trẻ không thấy mối liên quan. Bài báo gốc gây ra tin đồn (Wakefield, 1998) đã bị rút vì gian lận và tác giả bị tước giấy phép hành nghề</td></tr>
<tr><td>"Bệnh thật cho miễn dịch tốt hơn vaccine"</td><td>Miễn dịch tự nhiên phải trả giá bằng bệnh, biến chứng, tử vong; nhiều bệnh (uốn ván, bạch hầu) thậm chí không để lại miễn dịch đủ bền</td></tr>
<tr><td>"Tiêm nhiều mũi cùng lúc làm quá tải miễn dịch"</td><td>Hệ miễn dịch xử lý hàng nghìn kháng nguyên mỗi ngày; số kháng nguyên trong vaccine chỉ là một phần rất nhỏ. Lịch phối hợp đã được thử nghiệm an toàn</td></tr>
<tr><td>"Vaccine chứa chất độc (thủy ngân, phoóc-môn)"</td><td>Các chất phụ có lượng rất nhỏ, thấp hơn nhiều so với ngưỡng độc và còn có trong môi trường, thực phẩm. Nhiều vaccine hiện nay không còn chứa thimerosal</td></tr>
<tr><td>"Vaccine gây ra bệnh"</td><td>Vaccine bất hoạt và tiểu đơn vị không thể gây bệnh. Vaccine sống giảm độc lực đôi khi gây phản ứng nhẹ giống bệnh, rất hiếm gây bệnh thật ở người miễn dịch bình thường</td></tr>
<tr><td>"Đã tiêm rồi vẫn bị bệnh nên vô dụng"</td><td>Không vaccine nào hiệu quả 100%, nhưng người đã tiêm ít mắc, nhẹ hơn, ít nhập viện và tử vong hơn rõ rệt</td></tr>
<tr><td>"Khỏe mạnh, không cần tiêm"</td><td>Nhiều bệnh gây nặng cả ở người khỏe; tiêm còn để bảo vệ người xung quanh</td></tr>
</table>

<h2>Khi nào cần hoãn hoặc không tiêm?</h2>
<ul>
<li><strong>Hoãn tiêm</strong> khi đang sốt cao hoặc bệnh cấp nặng (cảm nhẹ không phải lý do hoãn). Sau liệu trình thuốc ức chế miễn dịch, truyền máu/globulin có thể cần giãn cách.</li>
<li><strong>Không tiêm</strong> khi từng bị sốc phản vệ với liều trước hoặc với thành phần vaccine (báo bác sĩ).</li>
<li><strong>Vaccine sống giảm độc lực</strong> thường không dùng cho phụ nữ có thai và người suy giảm miễn dịch nặng; cần tư vấn bác sĩ.</li>
<li>Thông báo cho bác sĩ về bệnh nền, dị ứng, thuốc đang dùng, mang thai hoặc dự định mang thai.</li>
</ul>

<h2>Sau tiêm</h2>
<ul>
<li>Ở lại 30 phút; uống nước đủ, nghỉ ngơi, theo dõi tại nhà 24–48 giờ.</li>
<li>Chườm mát chỗ tiêm nếu sưng đau; hạ sốt bằng paracetamol theo liều phù hợp khi sốt trên 38,5 °C hoặc khó chịu. Không bôi đắp lá, thuốc lên chỗ tiêm.</li>
<li><strong>Đến cơ sở y tế</strong> khi: sốt cao từ 39 °C, khóc thét kéo dài trên 3 giờ, co giật, li bì, khó thở, nổi mề đay toàn thân, sưng đỏ lan rộng, vết tiêm mưng mủ.</li>
<li>Giữ <strong>sổ tiêm chủng</strong> (giấy hoặc điện tử) và đi tiêm đúng lịch; bỏ lỡ mũi không phải "tiêm lại từ đầu", thường chỉ cần tiêm tiếp theo hướng dẫn.</li>
</ul>
<div class="box tip"><b>Tóm lại</b>
<ul>
<li>Tiêm đủ, đúng lịch là cách bảo vệ tốt nhất cho con và cộng đồng.</li>
<li>Kiểm tra sổ tiêm của cả gia đình, bao gồm người lớn (uốn ván, cúm, viêm gan B, HPV, phế cầu, zona tùy độ tuổi).</li>
<li>Thắc mắc? Hãy hỏi nhân viên y tế thay vì tin vào tin đồn trên mạng.</li>
</ul></div>
`
});

window.HEALTH_TOPICS.push({
    id: 'infectious', order: 13, section: 'illness', icon: '🦠',
    title: 'Bệnh truyền nhiễm thường gặp ở Việt Nam',
    summary: 'Cách bệnh lây, chuỗi lây nhiễm, và những bệnh cần biết: sốt xuất huyết, tay chân miệng, lao, viêm gan, HIV, dại, sởi, leptospirosis…',
    keywords: 'sốt xuất huyết dengue tay chân miệng lao viêm gan b hiv dại sởi thủy đậu cúm covid lây truyền muỗi phòng bệnh leptospira cách ly',
    sources: ['WHO - Fact sheets: Dengue, Tuberculosis, Hepatitis B, HIV/AIDS, Rabies, Measles', 'Bộ Y tế Việt Nam - Hướng dẫn chẩn đoán, điều trị sốt xuất huyết Dengue; tay chân miệng; lao', 'Viện Pasteur - Dịch tễ học bệnh truyền nhiễm Việt Nam', 'CDC - Principles of Epidemiology; Chain of Infection'],
    html: `
<p>Bệnh truyền nhiễm do vi sinh vật (virus, vi khuẩn, nấm, ký sinh trùng) gây ra và có thể lây từ người sang người hoặc từ động vật, môi trường sang người. Việt Nam có khí hậu nhiệt đới nóng ẩm, dân cư đông đúc, nên bên cạnh các bệnh hô hấp, tiêu hóa phổ biến còn có nhiều bệnh do muỗi và bệnh theo mùa. Phần lớn đều <strong>phòng được</strong> nếu hiểu cách chúng lây.</p>

<h2>Chuỗi lây nhiễm: muốn phòng bệnh hãy cắt một mắt xích</h2>
[[img:chain|Chuỗi lây nhiễm: tác nhân, ổ chứa, cửa ra, phương thức lây, cửa vào, người cảm thụ.]]
<table>
<tr><th>Mắt xích</th><th>Ví dụ</th><th>Cách cắt</th></tr>
<tr><td>Tác nhân gây bệnh</td><td>Virus dengue, vi khuẩn lao</td><td>Điều trị sớm, khử trùng</td></tr>
<tr><td>Ổ chứa</td><td>Người bệnh, động vật, nước, thực phẩm</td><td>Phát hiện, cách ly, xử lý nguồn nước, diệt vật chủ trung gian</td></tr>
<tr><td>Cửa ra</td><td>Hơi thở, phân, máu, vết thương</td><td>Che miệng khi ho, vệ sinh</td></tr>
<tr><td>Phương thức lây</td><td>Giọt bắn, tiếp xúc, phân - miệng, máu, tình dục, muỗi đốt</td><td>Khẩu trang, rửa tay, an toàn thực phẩm, bao cao su, màn, diệt muỗi</td></tr>
<tr><td>Cửa vào</td><td>Mũi, miệng, da, niêm mạc</td><td>Dụng cụ bảo hộ, băng vết thương</td></tr>
<tr><td>Người cảm thụ</td><td>Người chưa có miễn dịch</td><td>Tiêm vaccine, dinh dưỡng tốt</td></tr>
</table>
<h3>Các đường lây chính</h3>
<ul>
<li><strong>Hô hấp</strong> (giọt bắn, khí dung): cúm, COVID-19, sởi, lao, thủy đậu, ho gà.</li>
<li><strong>Phân - miệng</strong> (thức ăn, nước, bàn tay bẩn): tiêu chảy, tả, thương hàn, viêm gan A, tay chân miệng.</li>
<li><strong>Máu, dịch cơ thể, tình dục, mẹ sang con:</strong> viêm gan B, C, HIV, giang mai.</li>
<li><strong>Vật chủ trung gian (muỗi, bọ chét, ve):</strong> sốt xuất huyết, sốt rét, viêm não Nhật Bản, Zika, chikungunya.</li>
<li><strong>Từ động vật:</strong> dại, cúm gia cầm, leptospirosis, liên cầu lợn, bệnh do sán lá gan.</li>
<li><strong>Tiếp xúc trực tiếp hoặc vật dụng chung:</strong> ghẻ, nấm da, đau mắt đỏ, chấy rận.</li>
</ul>
<div class="box info"><b>Thời kỳ ủ bệnh và thời kỳ lây</b>
<p><strong>Ủ bệnh</strong> là khoảng thời gian từ khi nhiễm đến khi có triệu chứng; nhiều bệnh (cúm, COVID-19, viêm gan, HIV) có thể lây <em>trước khi</em> xuất hiện triệu chứng hoặc khi hoàn toàn không triệu chứng. Đó là lý do cần dựa vào biện pháp phòng chung chứ không chỉ "tránh người đang ốm".</p></div>

<h2>Sốt xuất huyết Dengue</h2>
<p>Do virus dengue, truyền qua <strong>muỗi vằn (Aedes aegypti, Aedes albopictus)</strong>, loài muỗi đốt ban ngày (nhiều nhất sáng sớm và chiều tối), đẻ trứng trong nước sạch đọng (chum vại, bình hoa, lốp xe, máng xối, hốc cây). Dịch cao điểm vào mùa mưa.</p>
[[img:aedes|Muỗi vằn Aedes aegypti đang hút máu: vector truyền virus dengue, Zika, chikungunya.]]
<h3>Diễn tiến</h3>
<ol>
<li><strong>Giai đoạn sốt (ngày 1–3/4):</strong> sốt cao đột ngột 39–40 °C, đau đầu, đau sau hốc mắt, đau cơ khớp, buồn nôn, da đỏ, có thể chấm xuất huyết dưới da.</li>
<li><strong>Giai đoạn nguy hiểm (thường ngày 3–7, đúng lúc <em>hạ sốt</em>):</strong> thoát huyết tương, sốc, xuất huyết. Nhiều người tưởng đã khỏi vì hết sốt nhưng đây là lúc dễ diễn tiến nặng.</li>
<li><strong>Giai đoạn hồi phục:</strong> ăn ngon, hết đau, có thể ngứa, mạch chậm.</li>
</ol>
[[img:dengue|Triệu chứng của sốt xuất huyết Dengue.]]
<div class="box danger"><b>Dấu hiệu cảnh báo cần nhập viện ngay</b>
<ul>
<li>Đau bụng nhiều, đau hạ sườn phải; nôn liên tục, không ăn uống được</li>
<li>Chảy máu: chân răng, mũi, nôn ra máu, đi ngoài phân đen, kinh nguyệt ra nhiều</li>
<li>Li bì, vật vã, lừ đừ, cáu gắt; tay chân lạnh, da nổi vân, ẩm</li>
<li>Tiểu ít, khát nhiều, gan to, tiểu cầu giảm nhanh, hematocrit tăng (xét nghiệm)</li>
</ul></div>
<ul>
<li><strong>Điều trị:</strong> chưa có thuốc đặc hiệu. Nghỉ ngơi, uống nhiều nước, oresol, nước trái cây; <strong>hạ sốt bằng paracetamol</strong>; <strong>tuyệt đối không dùng aspirin, ibuprofen và các NSAID</strong> (tăng nguy cơ chảy máu); không truyền dịch tại nhà vô tội vạ; đi khám và xét nghiệm theo dõi (công thức máu, tiểu cầu, hematocrit) theo hướng dẫn bác sĩ, tái khám đúng hẹn.</li>
<li><strong>Phòng bệnh:</strong> "<em>Bốn diệt</em>": diệt muỗi trưởng thành (hương, vợt, hóa chất đúng cách), diệt lăng quăng/bọ gậy (đậy kín, thay nước, thả cá, lật úp dụng cụ chứa nước mỗi tuần), diệt nơi trú ẩn, tránh muỗi đốt (ngủ màn cả ban ngày với trẻ nhỏ, mặc quần áo dài, kem xua muỗi). Có vaccine phòng sốt xuất huyết đã được cấp phép; hỏi bác sĩ.</li>
</ul>

<h2>Tay chân miệng</h2>
<p>Do các virus đường ruột (Coxsackie A16, <strong>Enterovirus 71</strong>…), thường ở trẻ dưới 5 tuổi, lây qua đường phân - miệng, nước bọt, dịch từ bọng nước, đồ chơi, tay người chăm sóc.</p>
<ul>
<li><strong>Triệu chứng:</strong> sốt nhẹ, đau họng, bỏ ăn; loét miệng; <strong>nốt phỏng nước ở lòng bàn tay, bàn chân, gối, mông</strong>.</li>
<li>Đa số tự khỏi sau 7–10 ngày, nhưng EV71 có thể gây biến chứng thần kinh, tim, phổi nguy hiểm.</li>
</ul>
<div class="box danger"><b>Dấu hiệu nặng, cần nhập viện: </b>
<ul>
<li>Sốt cao từ 39 °C hoặc sốt kéo dài trên 2 ngày</li>
<li>Giật mình (khi ngủ hoặc thức), run tay chân, đi loạng choạng, yếu liệt chi</li>
<li>Lừ đừ, quấy khóc dai dẳng, nôn nhiều, co giật</li>
<li>Thở nhanh, khó thở, da nổi vân tím, tay chân lạnh, mạch nhanh</li>
</ul></div>
<ul>
<li><strong>Chăm sóc nhẹ:</strong> vệ sinh răng miệng, cho ăn thức ăn mềm lạnh, hạ sốt paracetamol, theo dõi sát các dấu hiệu nặng mỗi ngày, cách ly trẻ, nghỉ học đến khi khỏi hoàn toàn (khoảng 10–14 ngày).</li>
<li><strong>Phòng ngừa:</strong> rửa tay bằng xà phòng (đặc biệt sau thay tã, trước khi ăn), ăn chín uống sôi, vệ sinh đồ chơi và bề mặt, khử khuẩn bằng dung dịch chứa chlorine, không cho trẻ tiếp xúc với trẻ bệnh. Cồn sát khuẩn diệt virus đường ruột kém, nên ưu tiên rửa với xà phòng.</li>
</ul>
[[img:hfmd|Nốt phỏng nước ở bàn chân trẻ bị tay chân miệng.]]

<h2>Lao (tuberculosis, TB)</h2>
<p>Do vi khuẩn <em>Mycobacterium tuberculosis</em>, lây qua <strong>không khí</strong> khi người lao phổi ho, hắt hơi, nói chuyện. Việt Nam là một trong những nước có gánh nặng lao cao trên thế giới.</p>
[[img:tbsymptoms|Các triệu chứng của bệnh lao.]]
<ul>
<li><strong>Nghi lao khi:</strong> ho kéo dài trên 2 tuần (kể cả ho khan, ho có đờm), có thể ho ra máu, sốt nhẹ về chiều, ra mồ hôi trộm ban đêm, sụt cân, mệt, ăn kém, đau ngực.</li>
<li><strong>Chẩn đoán:</strong> chụp X-quang phổi, xét nghiệm đờm (soi, Xpert MTB/RIF, cấy); người có triệu chứng cần đi khám ngay tại cơ sở chống lao hoặc bệnh viện.</li>
<li><strong>Điều trị:</strong> phối hợp nhiều thuốc kháng lao trong ít nhất 6 tháng (có phác đồ ngắn hơn cho một số ca); <strong>uống đủ, đều, không bỏ thuốc</strong>; bỏ dở hoặc uống không đúng gây <strong>lao kháng thuốc</strong>, rất khó chữa. Chương trình chống lao quốc gia cung cấp thuốc miễn phí.</li>
<li><strong>Phòng ngừa:</strong> tiêm BCG cho trẻ sơ sinh (phòng thể nặng ở trẻ), phát hiện và điều trị sớm người bệnh, thông thoáng khí, đeo khẩu trang khi ho kéo dài, khám sàng lọc cho người tiếp xúc gần, dinh dưỡng tốt, không hút thuốc, kiểm soát tiểu đường. Người có nguy cơ (HIV, tiếp xúc người lao phổi) có thể được điều trị lao tiềm ẩn.</li>
<li>Sau 2 tuần điều trị đúng, phần lớn người bệnh giảm lây đáng kể, nhưng vẫn phải uống thuốc đủ liệu trình.</li>
</ul>
[[img:tbxray|X-quang phổi của người bị lao.]]

<h2>Viêm gan virus</h2>
<table>
<tr><th>Loại</th><th>Đường lây</th><th>Hậu quả</th><th>Phòng và điều trị</th></tr>
<tr><td>Viêm gan A, E</td><td>Phân - miệng (thức ăn, nước bẩn; gan E còn từ thịt heo, tiết canh nấu chưa chín)</td><td>Viêm gan cấp, thường tự khỏi; gan E nặng ở thai phụ</td><td>Vệ sinh, ăn chín uống sôi; có vaccine viêm gan A</td></tr>
<tr><td>Viêm gan B</td><td>Máu, tình dục, <strong>mẹ sang con</strong></td><td>Có thể thành mạn tính; xơ gan, ung thư gan (gánh nặng lớn ở Việt Nam; khoảng 8–10% dân số mang virus)</td><td><strong>Vaccine 3 liều</strong> (liều sơ sinh quan trọng); xét nghiệm HBsAg; thuốc kháng virus kiểm soát virus cho người có chỉ định; khám gan và siêu âm định kỳ</td></tr>
<tr><td>Viêm gan C</td><td>Máu (dùng chung kim tiêm, dụng cụ xăm, truyền máu không an toàn), hiếm khi tình dục hoặc mẹ - con</td><td>Mạn tính, xơ gan, ung thư gan</td><td>Chưa có vaccine, nhưng <strong>thuốc kháng virus tác dụng trực tiếp chữa khỏi trên 95% ca</strong> trong 8–12 tuần</td></tr>
</table>
<p>Nhiều người nhiễm viêm gan B, C hầu như không có triệu chứng trong nhiều năm, nên cần <strong>xét nghiệm sàng lọc</strong> ít nhất một lần. Không dùng chung bàn chải, dao cạo, dụng cụ bấm móng, kim xăm, kim tiêm.</p>

<h2>HIV/AIDS</h2>
<p>HIV tấn công tế bào miễn dịch CD4, gây suy giảm miễn dịch dần nếu không điều trị (giai đoạn cuối: AIDS).</p>
<ul>
<li><strong>Lây qua:</strong> quan hệ tình dục không an toàn, máu (dùng chung kim tiêm, truyền máu không sàng lọc), mẹ sang con (thai, sinh, bú sữa).</li>
<li><strong>KHÔNG lây qua:</strong> bắt tay, ôm, dùng chung bát đũa, nhà vệ sinh, muỗi đốt, hôn, ho hắt hơi.</li>
<li><strong>Xét nghiệm</strong> là cách duy nhất biết; có xét nghiệm nhanh, tự xét nghiệm và miễn phí/bảo mật tại nhiều nơi.</li>
<li><strong>Điều trị bằng thuốc kháng virus (ART)</strong> suốt đời, đưa tải lượng virus xuống mức không phát hiện; người bệnh sống lâu, khỏe như người bình thường. Nguyên tắc <strong>"Không phát hiện = Không lây truyền" (U=U)</strong>: người điều trị đều, tải lượng không phát hiện thì không lây qua quan hệ tình dục.</li>
<li><strong>Dự phòng:</strong> bao cao su, không dùng chung kim tiêm, <strong>PrEP</strong> (thuốc uống dự phòng trước phơi nhiễm cho người nguy cơ cao), <strong>PEP</strong> (thuốc dự phòng sau phơi nhiễm, phải bắt đầu sớm, tốt nhất trong vòng 72 giờ), điều trị cho thai phụ nhiễm HIV để phòng lây sang con.</li>
<li>Phân biệt đối xử là rào cản lớn nhất của phòng chống HIV; người nhiễm HIV cần được tôn trọng.</li>
</ul>

<h2>Bệnh dại</h2>
<ul>
<li>Do virus dại lây từ <strong>nước bọt động vật nhiễm bệnh (chó, mèo, dơi…)</strong> qua vết cắn, cào, liếm lên vết thương hoặc niêm mạc. Việt Nam vẫn ghi nhận nhiều ca tử vong mỗi năm.</li>
<li><strong>Khi đã phát bệnh (sợ nước, sợ gió, co thắt, lú lẫn) gần như 100% tử vong.</strong> Nhưng rất dễ phòng nếu xử lý ngay sau phơi nhiễm: rửa vết thương 15 phút với xà phòng và nước chảy, sát khuẩn, đi tiêm vaccine dại (± huyết thanh kháng dại với vết thương nặng) càng sớm càng tốt, dù thời gian ủ bệnh dài.</li>
<li>Phòng: tiêm phòng dại cho chó mèo (đều đặn hằng năm), quản lý vật nuôi, không trêu chọc chó lạ, dạy trẻ tránh động vật lạ, báo chính quyền khi có chó dại.</li>
</ul>

<h2>Các bệnh nổi ban ở trẻ em</h2>
<ul>
<li><strong>Sởi:</strong> rất dễ lây. Sốt cao, ho, sổ mũi, đỏ mắt, rồi nổi ban từ mặt xuống thân (ngày 3–4); có thể biến chứng viêm phổi, viêm tai, viêm não, suy dinh dưỡng. Không có thuốc đặc hiệu; <strong>vaccine 2 liều</strong> phòng hiệu quả. Bổ sung vitamin A theo chỉ định. Trẻ bệnh cần cách ly; đi khám sớm khi khó thở, li bì.</li>
<li><strong>Rubella:</strong> nhẹ ở trẻ nhưng nếu phụ nữ mang thai 3 tháng đầu mắc có thể gây dị tật thai nặng.</li>
<li><strong>Thủy đậu:</strong> mụn nước ngứa toàn thân; lây qua hô hấp và tiếp xúc; vaccine; tránh dùng aspirin; đi khám nếu sốt cao kéo dài, mụn mủ lan đỏ, bệnh ở người lớn, thai phụ, suy giảm miễn dịch. Người đã mắc có thể bị <strong>zona</strong> (giời leo) khi già hoặc yếu.</li>
<li><strong>Quai bị:</strong> sưng tuyến mang tai; biến chứng viêm tinh hoàn, viêm màng não, điếc; vaccine MMR.</li>
<li><strong>Ho gà:</strong> ho cơn kéo dài, tiếng rít; nguy hiểm cho trẻ dưới 1 tuổi; vaccine ở trẻ và thai phụ (Tdap).</li>
</ul>

<h2>Bệnh do muỗi và động vật khác</h2>
<ul>
<li><strong>Sốt rét:</strong> còn ở vùng rừng núi; muỗi Anopheles; sốt thành cơn rét run - nóng - vã mồ hôi; đi vùng rừng phải ngủ màn tẩm hóa chất; sốt sau khi từ vùng sốt rét về cần đi khám ngay.</li>
<li><strong>Viêm não Nhật Bản:</strong> muỗi Culex từ lợn, chim; tiêm vaccine cho trẻ.</li>
<li><strong>Leptospirosis (xoắn khuẩn vàng da):</strong> nước tiểu chuột, gia súc nhiễm vào nước ngập, bùn; lội nước ngập, làm ruộng không dụng cụ bảo hộ; sốt, đau cơ bắp chân, đỏ mắt, vàng da, suy thận. Mang ủng, găng khi lội nước; đi khám sớm sau khi lội nước ngập mà sốt.</li>
<li><strong>Liên cầu lợn:</strong> từ thịt heo, tiết canh, lợn bệnh; viêm màng não, điếc; đừng ăn tiết canh, thịt heo chưa chín, lợn chết.</li>
<li><strong>Cúm gia cầm (A/H5N1, H5N6, H7N9):</strong> tiếp xúc gia cầm bệnh hoặc chết; không ăn, không bán gia cầm bệnh; đi khám khi sốt, ho sau tiếp xúc.</li>
<li><strong>Giun sán:</strong> giun đũa, giun móc, sán lá gan (ăn gỏi cá, rau thủy sinh sống), sán dây, sán lợn (ăn thịt heo gạo, bò gạo). Ăn chín, rửa rau, tẩy giun định kỳ theo khuyến cáo.</li>
</ul>

<h2>Hô hấp: cúm, COVID-19 và các virus khác</h2>
<p>Lây qua giọt bắn và khí dung. Biện pháp hiệu quả: <strong>vaccine</strong> (cúm hằng năm, COVID-19 theo khuyến cáo), <strong>thông thoáng không khí</strong>, đeo khẩu trang khi bệnh hoặc ở nơi đông người kém thông khí, rửa tay, ở nhà khi ốm, dùng thuốc kháng virus sớm cho người nguy cơ cao (cúm, COVID-19) theo chỉ định. Xem thêm bài Bệnh thường gặp.</p>

<h2>Khi bạn hoặc người thân mắc bệnh truyền nhiễm</h2>
<ul>
<li><strong>Ở nhà, hạn chế tiếp xúc</strong>; ở phòng riêng thông thoáng nếu có thể; nghỉ làm, nghỉ học cho đến khi hết lây.</li>
<li>Đeo khẩu trang; che miệng khi ho; rửa tay; dùng vật dụng riêng (khăn, cốc, bát đĩa); lau bề mặt thường chạm bằng dung dịch sát khuẩn.</li>
<li>Báo cho trường học, nơi làm việc, y tế địa phương với bệnh phải khai báo (sởi, tay chân miệng, sốt xuất huyết, cúm A/H5, lao, viêm gan...).</li>
<li>Chỉ dùng thuốc theo chỉ định; nhớ rằng <strong>kháng sinh không chữa virus</strong>.</li>
<li>Với bệnh dịch: nghe thông tin từ nguồn <strong>chính thống</strong> (Bộ Y tế, Cục Y tế dự phòng, WHO, Viện Pasteur); tránh tin đồn, mẹo chữa và chia sẻ thông tin chưa kiểm chứng.</li>
</ul>
<div class="box tip"><b>Checklist phòng bệnh truyền nhiễm cho gia đình</b>
<ul>
<li>Tiêm chủng đầy đủ cho cả trẻ em và người lớn</li>
<li>Rửa tay, ăn chín uống sôi, vệ sinh nhà cửa</li>
<li>Diệt lăng quăng mỗi tuần; ngủ màn; dùng kem xua muỗi khi cần</li>
<li>Không ăn tiết canh, thịt chưa chín; không tiếp xúc động vật lạ, gia cầm bệnh</li>
<li>Khám ngay khi ho trên 2 tuần, sốt cao 2–3 ngày, dấu hiệu nặng ở trẻ</li>
</ul></div>
`
});
