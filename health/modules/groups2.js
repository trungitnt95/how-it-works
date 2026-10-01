// Sức Khỏe - Theo từng đối tượng (phần 2: chủ đề 24-25)
window.HEALTH_TOPICS = window.HEALTH_TOPICS || [];

window.HEALTH_TOPICS.push({
    id: 'elderly', order: 24, section: 'groups', icon: '👴',
    title: 'Sức khỏe người cao tuổi',
    summary: 'Lão hóa khỏe mạnh, té ngã, sa sút trí tuệ, đa thuốc, dinh dưỡng, thị lực - thính lực, trầm cảm và chăm sóc cuối đời.',
    keywords: 'người cao tuổi lão hóa té ngã sa sút trí tuệ alzheimer lú lẫn đa thuốc suy yếu són tiểu loét tì đè cô đơn trầm cảm thính lực thị lực chăm sóc giảm nhẹ',
    sources: ['WHO - Ageing and health; Decade of Healthy Ageing; ICOPE', 'Lancet Commission on dementia prevention, intervention, and care (2024)', 'American Geriatrics Society - Beers Criteria; CDC - STEADI (falls)', 'Bộ Y tế Việt Nam; Hội Lão khoa Việt Nam - Chăm sóc sức khỏe người cao tuổi'],
    html: `
<p>Việt Nam đang già hóa nhanh: người từ 60 tuổi đã chiếm khoảng 13–14% dân số và tăng mỗi năm. "Sống thọ" chỉ thật sự có giá trị khi <strong>sống khỏe</strong>. WHO định nghĩa lão hóa khỏe mạnh là duy trì <em>khả năng chức năng</em> (tự đi lại, sinh hoạt, suy nghĩ, kết nối xã hội) càng lâu càng tốt, chứ không đơn thuần là "không có bệnh".</p>

<h2>Những thay đổi bình thường theo tuổi</h2>
<ul>
<li><strong>Khối cơ và sức mạnh giảm</strong> (sarcopenia), xương mất dần, khớp cứng hơn.</li>
<li>Mạch máu xơ cứng hơn, huyết áp có xu hướng tăng; tim đáp ứng gắng sức kém hơn.</li>
<li>Thận, gan xử lý thuốc chậm hơn; <strong>cảm giác khát giảm</strong>, dễ mất nước; dạ dày - ruột chậm lại.</li>
<li>Thị lực (lão thị, đục thủy tinh thể), thính lực (nghe kém tần số cao), vị giác - khứu giác giảm.</li>
<li>Hệ miễn dịch yếu đi, nhiễm trùng nặng hơn, đáp ứng vaccine kém hơn.</li>
<li>Trí nhớ có thể chậm hơn (nhớ tên mất thời gian) <strong>nhưng không mất khả năng sinh hoạt</strong>; nếu ảnh hưởng đến sinh hoạt thì không phải "bình thường".</li>
</ul>
<p>Triệu chứng ở người cao tuổi thường <strong>không điển hình</strong>: viêm phổi có thể chỉ lú lẫn hoặc ngã, không sốt; nhồi máu cơ tim có thể chỉ mệt, khó thở; nhiễm trùng tiểu có thể biểu hiện bằng mê sảng. Vì vậy mọi thay đổi bất thường đột ngột đều nên được kiểm tra.</p>

<h2>Suy yếu (frailty) và đa bệnh</h2>
<ul>
<li><strong>Suy yếu</strong> là tình trạng dự trữ sinh lý giảm, dễ bị tổn thương khi có stress (nhiễm trùng, phẫu thuật). Gợi ý: sụt cân không chủ ý (trên 4,5 kg trong năm), mệt mỏi, yếu sức cầm nắm, đi chậm (dưới 0,8 m/giây), ít hoạt động.</li>
<li><strong>Phòng ngừa, đảo ngược:</strong> tập luyện sức mạnh và thăng bằng, đủ đạm và năng lượng, điều trị nguyên nhân, rà soát thuốc, giữ hoạt động xã hội. Suy yếu sớm có thể cải thiện, đừng xem là "số phận".</li>
<li>Nhiều người cao tuổi mắc <strong>nhiều bệnh mạn tính</strong> cùng lúc. Chăm sóc tốt là quản lý toàn diện, ưu tiên mục tiêu của người bệnh (đi lại, độc lập, chất lượng sống), tránh điều trị thừa, và phối hợp các bác sĩ.</li>
</ul>

<h2>Té ngã</h2>
<p>Khoảng <strong>1 trong 3 người từ 65 tuổi té ngã mỗi năm</strong>. Té ngã là nguyên nhân hàng đầu gây gãy xương (cổ xương đùi), chấn thương đầu, mất tự tin, phải vào viện dưỡng lão và tử vong do chấn thương.</p>
<h3>Nguyên nhân thường gặp</h3>
<ul>
<li>Yếu cơ, rối loạn thăng bằng - dáng đi, bệnh khớp, bệnh thần kinh (Parkinson, đột quỵ, bệnh thần kinh do tiểu đường).</li>
<li><strong>Thuốc:</strong> thuốc ngủ, an thần, chống trầm cảm, kháng histamine thế hệ 1, thuốc hạ huyết áp, lợi tiểu, thuốc chống động kinh, nhiều thuốc cùng lúc.</li>
<li><strong>Hạ huyết áp tư thế</strong> (chóng mặt khi đứng dậy nhanh), mất nước, thiếu máu, rối loạn nhịp tim.</li>
<li>Thị lực kém, nhiễm trùng, tiểu đêm nhiều, mang giày dép không phù hợp.</li>
<li><strong>Môi trường nhà:</strong> sàn trơn, thảm nhăn, dây điện, ánh sáng yếu, nhà vệ sinh không tay vịn, bậc thang.</li>
</ul>
<h3>Cách phòng ngừa</h3>
<ul>
<li><strong>Tập luyện:</strong> bài tập thăng bằng và sức mạnh (đứng một chân, đi nối gót, đứng lên ngồi xuống ghế, thái cực quyền) ít nhất 3 lần mỗi tuần. Đây là biện pháp hiệu quả nhất.</li>
<li><strong>Rà soát thuốc</strong> với bác sĩ hoặc dược sĩ; bỏ bớt thuốc không cần thiết.</li>
<li><strong>Khám mắt hằng năm</strong>, đeo kính đúng độ, phẫu thuật đục thủy tinh thể khi có chỉ định; kiểm tra thính lực.</li>
<li><strong>Đứng dậy từ từ:</strong> ngồi ở mép giường một lúc rồi mới đứng.</li>
<li><strong>Vitamin D</strong> khi thiếu; đủ canxi, đạm; xử lý loãng xương.</li>
<li><strong>An toàn nhà ở:</strong> đèn sáng đường đi ban đêm, bỏ thảm trượt, dán chống trượt, <strong>tay vịn ở nhà tắm, nhà vệ sinh, cầu thang</strong>, ghế ngồi tắm, giữ lối đi thông thoáng, để đồ dùng trong tầm với.</li>
<li><strong>Giày dép</strong> vừa, đế chống trượt; không đi tất trơn, dép lê lỏng.</li>
<li>Thiết bị hỗ trợ (gậy, khung tập đi) được hướng dẫn sử dụng đúng.</li>
</ul>
<div class="box warn"><b>Khi bị ngã</b>
<ul>
<li>Nằm yên vài phút, kiểm tra đau đầu, cổ, lưng, hông, tay chân; chỉ đứng dậy nếu không đau nhiều, từ từ qua tư thế quỳ bò rồi bám vào ghế vững.</li>
<li><strong>Gọi cấp cứu</strong> nếu đập đầu (đặc biệt đang dùng thuốc chống đông), mất ý thức, đau hông, chân ngắn và xoay ngoài (gãy cổ xương đùi), không đứng dậy được, chảy máu nhiều.</li>
<li>Thông báo cho bác sĩ về mỗi lần ngã để tìm nguyên nhân.</li>
<li>Người sống một mình nên có thiết bị báo động khẩn cấp hoặc người liên lạc hằng ngày.</li>
</ul></div>

<h2>Sa sút trí tuệ (dementia) và Alzheimer</h2>
<p>Sa sút trí tuệ là suy giảm nhận thức (trí nhớ, tư duy, ngôn ngữ, định hướng, phán đoán) đủ nặng để ảnh hưởng sinh hoạt hằng ngày. <strong>Không phải là một phần bình thường của tuổi già.</strong> Bệnh Alzheimer chiếm khoảng 60–70%; ngoài ra còn sa sút trí tuệ mạch máu, thể Lewy, thùy trán - thái dương. Thường có nhiều nguyên nhân phối hợp.</p>
<div class="fig-row">
[[img:petnormal|Chụp PET não bình thường: chuyển hóa glucose mạnh ở khắp vỏ não.]]
[[img:petalz|Chụp PET não người bị Alzheimer: chuyển hóa giảm ở thùy thái dương, thùy đỉnh.]]
</div>
[[img:alzheimer|So sánh não bình thường và não người bị bệnh Alzheimer: teo não, giãn não thất.]]
<h3>Quên bình thường và dấu hiệu đáng lo</h3>
<table>
<tr><th>Lão hóa bình thường</th><th>Dấu hiệu sa sút trí tuệ</th></tr>
<tr><td>Thỉnh thoảng quên tên, nhớ lại sau</td><td>Quên sự kiện vừa xảy ra, hỏi lặp đi lặp lại, quên cả sự kiện quan trọng</td></tr>
<tr><td>Đôi khi để lạc chìa khóa</td><td>Để đồ vật ở chỗ kỳ lạ (kính trong tủ lạnh), không tìm lại được, nghi ngờ bị lấy cắp</td></tr>
<tr><td>Cần thêm thời gian để làm quen công nghệ mới</td><td>Khó hoàn thành việc quen thuộc (nấu ăn, dùng điện thoại, trả tiền), lạc đường quen</td></tr>
<tr><td>Chọn từ chậm</td><td>Khó theo dõi cuộc trò chuyện, nhầm từ, ngừng giữa câu</td></tr>
<tr><td>Đôi khi quyết định chưa tốt</td><td>Phán đoán kém, bị lừa đảo, ăn mặc không phù hợp thời tiết</td></tr>
<tr><td>Đôi lúc thấy mệt, muốn yên tĩnh</td><td>Rút lui xã hội, thay đổi tính tình, nghi ngờ, cáu kỉnh, trầm cảm</td></tr>
</table>
<ul>
<li><strong>Suy giảm nhận thức nhẹ (MCI):</strong> giảm nhận thức hơn mức bình thường nhưng vẫn tự sinh hoạt; một số tiến triển thành sa sút trí tuệ, một số ổn định hoặc hồi phục.</li>
<li><strong>Nguyên nhân có thể đảo ngược</strong> cần loại trừ: trầm cảm, thiếu vitamin B12, suy giáp, tác dụng phụ thuốc, nhiễm trùng, thiếu oxy, rối loạn điện giải, nghe kém, ngưng thở khi ngủ, não úng thủy áp lực bình thường, khối u, rượu.</li>
<li><strong>Chẩn đoán:</strong> bác sĩ hỏi bệnh sử từ người thân, đánh giá nhận thức (MMSE, MoCA…), xét nghiệm máu, chẩn đoán hình ảnh (MRI/CT, đôi khi PET), chọc dò dịch não tủy hoặc dấu ấn sinh học ở một số ca. Chẩn đoán sớm giúp lên kế hoạch, điều trị nguyên nhân, dùng thuốc phù hợp và hỗ trợ gia đình.</li>
<li><strong>Điều trị:</strong> hiện chưa chữa khỏi được. Thuốc (donepezil, rivastigmine, memantine) có thể cải thiện triệu chứng ở mức khiêm tốn; các kháng thể mới nhắm vào amyloid (lecanemab, donanemab) chỉ dùng ở Alzheimer giai đoạn rất sớm, làm chậm diễn tiến vừa phải và có nguy cơ tác dụng phụ (phù, xuất huyết não) nên cần đánh giá chuyên sâu. Điều trị không dùng thuốc (hoạt động nhận thức, vận động, xã hội, sắp xếp môi trường) rất quan trọng.</li>
</ul>
<div class="box info"><b>Giảm nguy cơ sa sút trí tuệ</b>
<p>Ủy ban Lancet (2024) ước tính khoảng <strong>45% ca sa sút trí tuệ có thể trì hoãn hoặc phòng ngừa</strong> bằng cách giải quyết 14 yếu tố: học vấn thấp, <em>nghe kém</em>, tăng huyết áp, LDL-cholesterol cao, hút thuốc, béo phì, tiểu đường, ít vận động, trầm cảm, cô đơn - ít giao tiếp xã hội, uống rượu nhiều, chấn thương sọ não, ô nhiễm không khí, <em>giảm thị lực không điều trị</em>. Nghĩa là: kiểm soát huyết áp, đeo máy trợ thính, tập thể dục, giữ kết nối xã hội, không hút thuốc, bảo vệ đầu đều có ích cho não.</p></div>
<h3>Chăm sóc người bị sa sút trí tuệ</h3>
<ul>
<li>Giữ <strong>sinh hoạt ổn định, thói quen quen thuộc</strong>; dùng đồng hồ, lịch, bảng ghi nhớ, nhãn dán.</li>
<li><strong>Giao tiếp:</strong> nói chậm, rõ, câu ngắn, một ý một lúc; nhìn vào mắt; không tranh cãi, không "sửa" liên tục; công nhận cảm xúc.</li>
<li><strong>An toàn:</strong> khóa bếp gas, giấu dao, khóa thuốc, tránh đi lạc (vòng đeo tay có tên và số điện thoại), cân nhắc dừng lái xe, quản lý tiền bạc, phòng lừa đảo.</li>
<li><strong>Hành vi khó khăn</strong> (kích động, hoang tưởng, đêm không ngủ): tìm nguyên nhân (đau, táo bón, nhiễm trùng, thuốc, môi trường ồn), dùng biện pháp không dùng thuốc trước.</li>
<li>Người chăm sóc dễ kiệt sức và trầm cảm: cần nghỉ ngơi, chia sẻ trách nhiệm, hỗ trợ từ nhóm, dịch vụ chăm sóc ban ngày. Chăm sóc bản thân cũng là chăm sóc người bệnh.</li>
<li><strong>Kế hoạch sớm:</strong> bàn với người bệnh khi họ còn đủ khả năng về nguyện vọng chăm sóc, người đại diện, tài sản.</li>
</ul>
<div class="box danger"><b>Mê sảng (delirium): cấp cứu</b>
<p>Lú lẫn xuất hiện đột ngột trong vài giờ đến vài ngày, dao động trong ngày, giảm chú ý, có thể kích động hoặc li bì. Gặp ở người cao tuổi khi nhiễm trùng (phổi, tiểu), mất nước, thuốc mới, đau, táo bón, phẫu thuật, thiếu oxy. Cần khám ngay để tìm và điều trị nguyên nhân.</p></div>

<h2>Dinh dưỡng và vận động</h2>
<ul>
<li><strong>Đủ đạm</strong> (khoảng 1,0–1,2 g/kg/ngày, nếu thận cho phép) kết hợp tập sức mạnh để giữ khối cơ; phân bổ đạm ở từng bữa.</li>
<li>Đủ năng lượng; <strong>sụt cân không chủ ý</strong> (trên 5% trong 6 tháng) là dấu hiệu cần khám; chán ăn do răng miệng, nuốt khó, trầm cảm, thuốc, bệnh.</li>
<li>Canxi, vitamin D, vitamin B12 (kém hấp thu khi già), chất xơ, nước: uống đều ngay cả khi không khát.</li>
<li>Ăn chung với người khác làm tăng ăn ngon; thức ăn mềm, dễ nuốt nếu khó nhai, khó nuốt (sặc có thể gây viêm phổi); khám răng, lắp răng giả phù hợp.</li>
<li>Vận động <strong>150 phút/tuần</strong>, kết hợp tập sức mạnh, thăng bằng; bắt đầu từ từ; đi bộ, thái cực quyền, bơi, dưỡng sinh đều tốt. "Ít vận động" nguy hiểm hơn "vận động vừa sức".</li>
</ul>

<h2>Thuốc: đa thuốc và an toàn</h2>
<ul>
<li><strong>Đa thuốc</strong> (từ 5 loại trở lên) làm tăng nguy cơ tương tác, tác dụng phụ, té ngã, nhập viện.</li>
<li>Mỗi lần khám: mang <strong>tất cả thuốc</strong> (kể cả thuốc không kê đơn, thực phẩm chức năng, thuốc Đông y) cho bác sĩ rà soát; hỏi "thuốc nào có thể ngưng hoặc giảm?".</li>
<li>Một nhà thuốc quen, hộp chia thuốc theo ngày, chữ to trên nhãn, nhờ người thân hỗ trợ.</li>
<li>Tránh các thuốc không phù hợp cho người cao tuổi theo <strong>Tiêu chuẩn Beers</strong> (thuốc ngủ benzodiazepine, một số kháng histamine, NSAID lâu dài…).</li>
<li>Cảnh giác với quảng cáo "thần dược" cho người già.</li>
</ul>

<h2>Các vấn đề thường gặp khác</h2>
<ul>
<li><strong>Són tiểu:</strong> rất phổ biến nhưng không phải điều bình thường. Có thể do yếu sàn chậu (khi ho, hắt hơi), bàng quang tăng hoạt, tuyến tiền liệt, nhiễm trùng, thuốc, táo bón. Có thể cải thiện bằng bài tập cơ sàn chậu, tập bàng quang, giảm cà phê và rượu, thuốc, điều trị nguyên nhân. <strong>Hãy nói với bác sĩ.</strong></li>
<li><strong>Thị lực:</strong> đục thủy tinh thể (phẫu thuật rất hiệu quả), tăng nhãn áp (glaucoma, không đau nhưng mất thị trường), thoái hóa hoàng điểm, bệnh võng mạc tiểu đường. Khám mắt mỗi 1–2 năm.</li>
<li><strong>Nghe kém:</strong> nghe kém không điều trị liên quan đến cô đơn, trầm cảm, té ngã và sa sút trí tuệ. Đo thính lực, dùng máy trợ thính.</li>
<li><strong>Loét tì đè:</strong> ở người nằm lâu; lật trở mỗi 2 giờ, đệm phòng loét, giữ da khô, đủ dinh dưỡng; kiểm tra da hằng ngày.</li>
<li><strong>Táo bón, mất ngủ, đau mạn tính:</strong> đánh giá và điều trị chủ động; tránh coi là "chuyện tuổi già".</li>
<li><strong>Nhiệt độ:</strong> người già dễ say nóng và hạ thân nhiệt; giữ nhà mát khi nóng, đủ ấm khi lạnh, uống đủ nước.</li>
<li><strong>Tiêm chủng:</strong> cúm hằng năm, phế cầu, zona, COVID-19, RSV, uốn ván - bạch hầu theo khuyến cáo.</li>
</ul>

<h2>Sức khỏe tinh thần và kết nối xã hội</h2>
<ul>
<li><strong>Trầm cảm ở người già</strong> thường bị bỏ sót: có thể biểu hiện bằng mệt mỏi, đau nhức không rõ, mất ngủ, ăn kém, hay quên, cáu gắt hơn là "buồn". Điều trị hiệu quả (tâm lý trị liệu, thuốc). Nguy cơ tự tử ở nam giới lớn tuổi cao.</li>
<li><strong>Cô đơn và cô lập xã hội</strong> làm tăng nguy cơ bệnh tim mạch, trầm cảm, sa sút trí tuệ, tử vong sớm. Duy trì quan hệ: gia đình, bạn bè, câu lạc bộ người cao tuổi, hoạt động tôn giáo, tình nguyện, học điều mới.</li>
<li><strong>Lạm dụng, bỏ rơi người cao tuổi:</strong> thể chất, tinh thần, tài chính; dấu hiệu: bầm tím không giải thích, sợ hãi, thay đổi tài sản bất thường, vệ sinh kém. Hãy báo cho chính quyền, cơ sở y tế, tổ chức hội người cao tuổi.</li>
<li><strong>Kỹ năng số:</strong> dùng điện thoại, video để liên lạc người thân, tránh lừa đảo trực tuyến.</li>
</ul>

<h2>Chăm sóc giảm nhẹ và cuối đời</h2>
<ul>
<li><strong>Chăm sóc giảm nhẹ</strong> không chỉ dành cho giai đoạn cuối; đó là chăm sóc nhằm giảm đau và triệu chứng, hỗ trợ tinh thần - xã hội, cải thiện chất lượng sống ở bất kỳ giai đoạn bệnh nặng nào, song song với điều trị.</li>
<li>Nên <strong>trao đổi sớm</strong> với người bệnh và gia đình về mong muốn: muốn điều trị đến đâu, nơi chăm sóc, người thay mặt quyết định khi không còn khả năng. Ghi lại nguyện vọng.</li>
<li>Giảm đau đủ, dùng thuốc giảm đau mạnh (như morphin) đúng chỉ định là an toàn và nhân đạo.</li>
<li>Người thân cũng cần được hỗ trợ tâm lý trong thời gian chăm sóc và sau mất mát.</li>
</ul>
<div class="box tip"><b>Công thức sống khỏe khi cao tuổi</b>
<ul>
<li>Vận động thường xuyên (kể cả sức mạnh và thăng bằng), đủ đạm, đủ nước</li>
<li>Khám định kỳ; kiểm tra thị lực, thính lực; rà soát thuốc</li>
<li>Phòng ngã, nhà an toàn</li>
<li>Giữ kết nối xã hội, làm điều có ý nghĩa, chăm sóc tinh thần</li>
<li>Tiêm chủng; không hút thuốc; giảm rượu</li>
<li>Lên kế hoạch chăm sóc cho tương lai cùng gia đình</li>
</ul></div>
`
});

window.HEALTH_TOPICS.push({
    id: 'sexual-health', order: 25, section: 'groups', icon: '🛡️',
    title: 'Sức khỏe tình dục và sinh sản',
    summary: 'Đồng thuận, các biện pháp tránh thai, bệnh lây qua đường tình dục và cách phòng, rối loạn chức năng tình dục, hiếm muộn.',
    keywords: 'tình dục tránh thai bao cao su thuốc tránh thai khẩn cấp đặt vòng cấy que bệnh lây qua đường tình dục giang mai lậu chlamydia hpv herpes prep đồng thuận xâm hại phá thai hiếm muộn',
    sources: ['WHO - Family planning/contraception methods; Sexual health; STI fact sheets', 'CDC - Contraception; STI Treatment Guidelines', 'UNESCO - International technical guidance on sexuality education', 'Bộ Y tế Việt Nam - Hướng dẫn quốc gia về chăm sóc sức khỏe sinh sản; Luật Hình sự (các tội xâm hại tình dục)'],
    html: `
<p>Sức khỏe tình dục theo WHO là trạng thái thoải mái về thể chất, tinh thần và xã hội liên quan đến tình dục, không chỉ là "không có bệnh". Nó bao gồm <strong>quan hệ tôn trọng, đồng thuận, an toàn, không cưỡng ép, phân biệt, bạo lực</strong>, và khả năng quyết định mình có muốn và khi nào muốn có con. Người trưởng thành có quyền được thông tin chính xác, đầy đủ, không phán xét.</p>

<h2>Đồng thuận (consent)</h2>
<ul>
<li>Đồng thuận phải <strong>tự nguyện, rõ ràng, cụ thể, có thể rút lại bất cứ lúc nào</strong>. Im lặng, không phản kháng, "trước đó đã đồng ý" không có nghĩa là đồng thuận với hành động hiện tại.</li>
<li>Không thể đồng thuận khi <strong>say rượu, dùng ma túy, ngủ, bất tỉnh</strong>, bị đe dọa, lệ thuộc quyền lực, hoặc chưa đủ tuổi. Theo pháp luật Việt Nam, quan hệ tình dục với người dưới 16 tuổi là hành vi vi phạm pháp luật hình sự; có những mức bảo vệ đặc biệt với trẻ dưới 13 tuổi.</li>
<li>Giao tiếp cởi mở với bạn tình về mong muốn, giới hạn, biện pháp tránh thai và phòng bệnh là một phần của sức khỏe tình dục.</li>
</ul>
<div class="box danger"><b>Nếu bạn hoặc người thân bị xâm hại tình dục</b>
<ul>
<li>Đó <strong>không phải lỗi của nạn nhân</strong>. Tìm nơi an toàn, gọi người tin cậy; gọi 113 (công an) nếu đang gặp nguy hiểm; trẻ em: tổng đài 111.</li>
<li><strong>Đến cơ sở y tế càng sớm càng tốt</strong> (lý tưởng trong 72 giờ): khám và điều trị thương tích; <strong>PEP</strong> phòng HIV (trong 72 giờ), <strong>tránh thai khẩn cấp</strong> (trong 72–120 giờ), thuốc dự phòng bệnh lây qua đường tình dục, tiêm phòng viêm gan B và HPV khi cần; hỗ trợ tâm lý.</li>
<li>Nếu có thể, tránh tắm rửa, thay đồ, dọn dẹp trước khi được khám để bảo tồn bằng chứng (nhưng an toàn và sức khỏe luôn là ưu tiên).</li>
<li>Bạn có quyền trình báo hoặc không; cơ quan chức năng và tổ chức hỗ trợ có thể giúp đỡ.</li>
</ul></div>

<h2>Các biện pháp tránh thai</h2>
<p>Không có biện pháp nào phù hợp cho mọi người. Lựa chọn dựa vào sức khỏe, nhu cầu sinh con, tần suất quan hệ, tác dụng phụ, chi phí, khả năng tuân thủ. <strong>Nên tư vấn với nhân viên y tế.</strong></p>
<table>
<tr><th>Biện pháp</th><th>Cách hoạt động</th><th>Hiệu quả khi dùng thực tế (số ca mang thai/100 phụ nữ trong 1 năm)</th><th>Lưu ý</th></tr>
<tr><td><strong>Que cấy tránh thai</strong></td><td>Giải phóng progestin, ức chế rụng trứng (3–5 năm)</td><td>Dưới 1</td><td>Có thể thay đổi kiểu ra máu; hồi phục khả năng có thai nhanh sau rút</td></tr>
<tr><td><strong>Dụng cụ tử cung (vòng tránh thai)</strong></td><td>Loại nội tiết (progestin) hoặc đồng</td><td>Dưới 1</td><td>Hiệu quả 5–10 năm; vòng đồng có thể làm kinh nhiều, đau hơn; cần đặt và tháo bởi nhân viên y tế; không bảo vệ khỏi STI</td></tr>
<tr><td><strong>Triệt sản</strong> (nam/nữ)</td><td>Thắt ống dẫn tinh hoặc vòi trứng</td><td>Dưới 1</td><td>Vĩnh viễn</td></tr>
<tr><td><strong>Thuốc tiêm tránh thai</strong></td><td>Tiêm mỗi 3 tháng</td><td>Khoảng 4</td><td>Khả năng có thai trở lại có thể chậm vài tháng; có thể giảm mật độ xương nhẹ</td></tr>
<tr><td><strong>Thuốc viên tránh thai, miếng dán, vòng âm đạo</strong></td><td>Nội tiết ức chế rụng trứng</td><td>Khoảng 7 (dễ thất bại do quên)</td><td>Thuốc viên kết hợp (estrogen + progestin) không phù hợp với người hút thuốc trên 35 tuổi, đau nửa đầu có tiên triệu, tăng huyết áp chưa kiểm soát, tiền sử huyết khối; giúp giảm đau bụng kinh, điều hòa kinh, giảm mụn</td></tr>
<tr><td><strong>Bao cao su nam</strong></td><td>Ngăn tinh dịch, tinh trùng</td><td>Khoảng 13 (tốt hơn với dùng đúng)</td><td>Bảo vệ khỏi HIV và hầu hết STI; rẻ, không cần đơn</td></tr>
<tr><td>Bao cao su nữ</td><td>Túi lót âm đạo</td><td>Khoảng 21</td><td>Bảo vệ khỏi STI</td></tr>
<tr><td>Xuất tinh ngoài, tính ngày an toàn</td><td>Dựa vào tự kiểm soát hoặc theo dõi chu kỳ</td><td>Khoảng 20 (xuất tinh ngoài); 2–23 (theo dõi khả năng thụ thai, tùy phương pháp và tuân thủ)</td><td>Hiệu quả thấp, không bảo vệ khỏi STI</td></tr>
<tr><td>Không dùng biện pháp nào</td><td></td><td>Khoảng 85</td><td></td></tr>
</table>
[[img:pill|Thuốc viên tránh thai dạng vỉ.]]
[[img:iud|Dụng cụ tử cung (vòng tránh thai) hình chữ T.]]
[[img:condom|Bao cao su: biện pháp duy nhất vừa tránh thai vừa giảm lây STI và HIV.]]
<h3>Tránh thai khẩn cấp</h3>
<ul>
<li>Dùng khi quan hệ không bảo vệ, hỏng bao cao su, quên thuốc, bị cưỡng ép. <strong>Càng sớm càng hiệu quả.</strong></li>
<li><strong>Levonorgestrel</strong> (viên uống): trong 72 giờ (tác dụng giảm dần, có thể đến 120 giờ). <strong>Ulipristal</strong>: trong 120 giờ. <strong>Đặt vòng đồng</strong> trong 5 ngày: hiệu quả nhất, và sau đó là biện pháp tránh thai lâu dài.</li>
<li>Thuốc tránh thai khẩn cấp <strong>không gây phá thai</strong>, không có tác dụng nếu đã có thai; không nên dùng thay biện pháp thường xuyên (hiệu quả thấp hơn, rối loạn kinh).</li>
</ul>
<h3>Hiểu lầm thường gặp</h3>
<ul>
<li>"Lần đầu, đứng, đang hành kinh, sau tắm thì không có thai": <strong>sai</strong>, có thể mang thai bất cứ lúc nào.</li>
<li>"Xuất tinh ngoài là an toàn": không, có tinh trùng trong dịch tiết trước xuất tinh; dễ thất bại.</li>
<li>"Uống thuốc tránh thai lâu sẽ vô sinh": <strong>sai</strong>, khả năng có thai trở lại nhanh sau ngừng thuốc. Thuốc viên không làm tăng cân đáng kể ở đa số người.</li>
<li>"Dùng hai bao cao su chắc chắn hơn": <strong>sai</strong>, ma sát làm dễ rách; chỉ dùng một bao mỗi lần.</li>
<li>"Rửa, tiểu sau quan hệ tránh thai hoặc phòng bệnh": không có tác dụng (tiểu sau quan hệ chỉ giúp giảm nhiễm trùng tiểu).</li>
<li>Khi dùng biện pháp nội tiết hoặc vòng, vẫn cần bao cao su nếu có nguy cơ STI (<strong>"dùng kép"</strong>).</li>
</ul>
<h3>Sau sinh và cho con bú</h3>
<p>Có thể rụng trứng trở lại <em>trước</em> kỳ kinh đầu tiên. Biện pháp phù hợp: que cấy, vòng, thuốc chỉ chứa progestin, bao cao su; phương pháp vô kinh do cho con bú (LAM) chỉ hiệu quả nếu bú hoàn toàn, chưa có kinh, con dưới 6 tháng.</p>
<h3>Phá thai</h3>
<p>Ở Việt Nam, nạo phá thai được thực hiện hợp pháp tại cơ sở y tế có phép theo quy định (đến hết 22 tuần tuổi thai). <strong>Phá thai an toàn</strong> (thuốc phá thai dưới sự giám sát y tế đến khoảng 9 tuần, hoặc thủ thuật hút thai) có rủi ro thấp; phá thai không an toàn (tự mua thuốc không rõ nguồn gốc, cơ sở không phép) có thể gây băng huyết, nhiễm trùng, thủng tử cung, vô sinh, tử vong. Cần tư vấn trước và theo dõi, tư vấn tránh thai sau phá thai. Đến khám ngay nếu ra máu nhiều, sốt, đau bụng dữ dội sau thủ thuật.</p>

<h2>Bệnh lây qua đường tình dục (STI)</h2>
<p>Hơn 1 triệu ca STI mới có thể chữa khỏi phát sinh mỗi ngày trên thế giới. Nhiều STI <strong>không có triệu chứng</strong> trong thời gian dài nhưng vẫn lây và gây biến chứng (viêm vùng chậu, vô sinh, thai ngoài tử cung, ung thư cổ tử cung, nhiễm trùng thai nhi).</p>
<table>
<tr><th>Bệnh</th><th>Tác nhân</th><th>Dấu hiệu</th><th>Điều trị</th></tr>
<tr><td>Chlamydia</td><td>Vi khuẩn</td><td>Thường không triệu chứng; tiết dịch, tiểu buốt, đau vùng chậu, đau tinh hoàn</td><td>Kháng sinh, chữa khỏi</td></tr>
<tr><td>Lậu</td><td>Vi khuẩn (kháng thuốc ngày càng tăng)</td><td>Tiết mủ niệu đạo/âm đạo, tiểu buốt; có thể không triệu chứng</td><td>Kháng sinh tiêm theo phác đồ, chữa khỏi</td></tr>
<tr><td>Giang mai</td><td>Vi khuẩn (Treponema pallidum)</td><td>Loét không đau ở sinh dục/miệng (vài tuần sau nhiễm) → ban toàn thân, lòng bàn tay chân → tiềm ẩn nhiều năm → tổn thương tim, thần kinh. Có thể lây cho thai (giang mai bẩm sinh)</td><td>Penicillin; chữa khỏi nếu điều trị sớm. Xét nghiệm cho mọi thai phụ</td></tr>
<tr><td>HPV</td><td>Virus</td><td>Đa số không triệu chứng, tự khỏi; một số gây mụn cóc sinh dục, tổn thương tiền ung thư, ung thư cổ tử cung, hậu môn, họng, dương vật</td><td><strong>Vaccine phòng ngừa</strong>; tầm soát cổ tử cung; điều trị mụn cóc, tổn thương</td></tr>
<tr><td>Herpes sinh dục (HSV)</td><td>Virus</td><td>Mụn nước đau, loét sinh dục; tái phát; có thể lây cả khi không có tổn thương</td><td>Thuốc kháng virus giảm đợt và lây; không khỏi hoàn toàn</td></tr>
<tr><td>HIV, viêm gan B</td><td>Virus</td><td>Xem bài Bệnh truyền nhiễm</td><td>Thuốc kiểm soát; vaccine viêm gan B</td></tr>
<tr><td>Trichomonas</td><td>Ký sinh trùng</td><td>Khí hư bọt, ngứa, tiểu rát; nam thường không triệu chứng</td><td>Thuốc kháng ký sinh trùng, điều trị cả bạn tình</td></tr>
<tr><td>Ghẻ, rận mu</td><td>Ký sinh trùng</td><td>Ngứa dữ dội</td><td>Thuốc bôi</td></tr>
</table>
<h3>Phòng ngừa</h3>
<ul>
<li><strong>Bao cao su</strong> dùng đúng và mọi lần quan hệ (âm đạo, hậu môn, miệng) giảm nguy cơ rất rõ; không bảo vệ hoàn toàn với bệnh lây qua tiếp xúc da (herpes, HPV).</li>
<li><strong>Tiêm vaccine:</strong> HPV, viêm gan B, viêm gan A.</li>
<li><strong>Xét nghiệm định kỳ</strong> khi có bạn tình mới hoặc nhiều bạn tình (ít nhất hằng năm); cả hai cùng xét nghiệm trước khi bỏ bao cao su trong quan hệ chung thủy.</li>
<li><strong>PrEP</strong> (thuốc uống hoặc tiêm phòng HIV) cho người có nguy cơ cao; <strong>PEP</strong> trong 72 giờ sau phơi nhiễm; <strong>doxycycline sau quan hệ</strong> (doxy-PEP) được dùng ở một số nhóm nguy cơ cao theo hướng dẫn chuyên khoa.</li>
<li>Hạn chế rượu, chất kích thích trước quan hệ (làm giảm khả năng quyết định an toàn).</li>
<li>Không dùng chung kim tiêm, dụng cụ xăm.</li>
<li>Mỗi lần có triệu chứng hoặc tiếp xúc nguy cơ: đến khám sớm, <strong>không tự mua kháng sinh</strong> (dễ điều trị không đủ, kháng thuốc, che lấp triệu chứng); thông báo và điều trị bạn tình; <strong>kiêng quan hệ</strong> đến khi điều trị xong.</li>
<li>Dịch vụ xét nghiệm, tư vấn thường có thể bảo mật.</li>
</ul>
<div class="box info"><b>Dùng bao cao su đúng cách</b>
<ol>
<li>Kiểm tra hạn dùng, bao bì nguyên vẹn; không dùng bao cao su để lâu trong ví, túi quần.</li>
<li>Mở gói bằng tay (không dùng răng, kéo); đeo khi dương vật đã cương, trước mọi tiếp xúc sinh dục.</li>
<li>Bóp đầu túi chứa tinh dịch để đuổi không khí, rồi vuốt xuống hết gốc.</li>
<li>Dùng <strong>chất bôi trơn gốc nước hoặc silicone</strong> nếu cần; <em>không dùng dầu, vaseline, kem</em> vì làm hỏng cao su latex.</li>
<li>Sau xuất tinh, giữ chặt gốc bao khi rút ra lúc còn cương; tháo bao, thắt nút, bỏ vào thùng rác; chỉ dùng một lần.</li>
</ol></div>

<h2>Rối loạn chức năng tình dục</h2>
<ul>
<li><strong>Rất phổ biến</strong> ở cả nam và nữ, nhưng ít người nói ra. Nguyên nhân: tâm lý (stress, lo âu, trầm cảm, mâu thuẫn, chấn thương tâm lý), bệnh (tiểu đường, tim mạch, tăng huyết áp, bệnh thận, bệnh thần kinh), thuốc (chống trầm cảm, thuốc hạ áp...), nội tiết, rượu, thuốc lá, tuổi, sinh con, mãn kinh.</li>
<li><strong>Nam giới:</strong> rối loạn cương (xem bài Sức khỏe nam giới), xuất tinh sớm (hay gặp, có thể điều trị bằng kỹ thuật hành vi, thuốc), giảm ham muốn.</li>
<li><strong>Nữ giới:</strong> giảm ham muốn, khó hưng phấn hoặc khó đạt cực khoái, <strong>đau khi giao hợp</strong> (khô âm đạo, nhiễm trùng, lạc nội mạc tử cung, co thắt âm đạo) cần khám; chất bôi trơn, thuốc estrogen tại chỗ (sau mãn kinh), vật lý trị liệu sàn chậu, tư vấn tâm lý có hiệu quả.</li>
<li>Hãy nói chuyện với bạn tình và bác sĩ. Đây là vấn đề sức khỏe có thể điều trị, không phải điều đáng xấu hổ.</li>
</ul>

<h2>Đa dạng xu hướng tính dục và bản dạng giới</h2>
<ul>
<li>Xu hướng tính dục (dị tính, đồng tính, song tính…) và bản dạng giới là sự đa dạng tự nhiên của con người; WHO không coi đồng tính là bệnh. <strong>Kỳ thị, phân biệt đối xử</strong> (chứ không phải bản thân xu hướng) làm tăng nguy cơ trầm cảm, lo âu, tự hại, lạm dụng chất, né tránh chăm sóc y tế.</li>
<li>Mọi người đều xứng đáng được chăm sóc y tế tôn trọng. Hãy tìm nhân viên y tế thân thiện; nam quan hệ đồng giới cần tư vấn PrEP, tiêm viêm gan A, B, HPV và xét nghiệm STI định kỳ; người chuyển giới cần chăm sóc hormone, sức khỏe tâm thần dưới sự giám sát chuyên môn.</li>
</ul>

<h2>Hiếm muộn và lập kế hoạch sinh con</h2>
<ul>
<li><strong>Hiếm muộn:</strong> không có thai sau 12 tháng quan hệ đều, không dùng biện pháp tránh thai (6 tháng nếu nữ trên 35 tuổi). Nguyên nhân: nữ (rối loạn rụng trứng, PCOS, tắc vòi trứng, lạc nội mạc tử cung, u xơ, tuổi), nam (tinh trùng ít/yếu, giãn tĩnh mạch tinh, tắc nghẽn), hoặc không rõ. Cả hai cùng đi khám.</li>
<li><strong>Tuổi</strong> là yếu tố quan trọng nhất của khả năng sinh sản ở nữ (giảm rõ sau 35 tuổi), ở nam giảm chậm hơn.</li>
<li>Các kỹ thuật hỗ trợ sinh sản: kích thích rụng trứng, bơm tinh trùng vào buồng tử cung (IUI), thụ tinh trong ống nghiệm (IVF, ICSI); có tại nhiều trung tâm hiếm muộn ở Việt Nam; chọn cơ sở uy tín, hiểu rõ tỷ lệ thành công, chi phí, rủi ro (đa thai, quá kích buồng trứng).</li>
<li>Khoảng cách giữa các lần sinh: nên chờ ít nhất khoảng 18–24 tháng sau sinh để mẹ hồi phục và giảm nguy cơ sinh non, nhẹ cân.</li>
<li>Khám tiền sản, acid folic (xem bài Sức khỏe phụ nữ).</li>
</ul>

<h2>Giáo dục về tình dục cho thanh thiếu niên</h2>
<ul>
<li>Giáo dục giới tính toàn diện (thông tin chính xác về cơ thể, dậy thì, đồng thuận, tránh thai, STI, quan hệ tôn trọng) <strong>giúp trẻ trì hoãn quan hệ, dùng biện pháp bảo vệ tốt hơn và tránh bị xâm hại</strong>, chứ không khuyến khích quan hệ sớm.</li>
<li>Cha mẹ hãy trò chuyện từ sớm, theo lứa tuổi, không né tránh, không hăm dọa.</li>
<li>An toàn trên mạng: cảnh giác gửi hình ảnh nhạy cảm (sexting), bị dụ dỗ (grooming), tống tiền bằng hình ảnh; không chia sẻ hình nhạy cảm của người khác; báo ngay cho người lớn tin cậy.</li>
</ul>
<div class="box tip"><b>Tóm lại</b>
<ul>
<li>Đồng thuận và tôn trọng là nền tảng.</li>
<li>Chọn biện pháp tránh thai phù hợp; bao cao su để phòng STI; dùng kép khi cần.</li>
<li>Tiêm HPV, viêm gan B; xét nghiệm STI, HIV định kỳ khi có nguy cơ.</li>
<li>Khám sớm khi có triệu chứng; không tự mua kháng sinh.</li>
<li>Có vấn đề tình dục hoặc hiếm muộn? Hãy nói với bác sĩ: hầu hết đều có hướng giải quyết.</li>
</ul></div>
`
});
