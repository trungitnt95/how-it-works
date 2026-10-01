// Sức Khỏe - Theo từng đối tượng (phần 1: chủ đề 21-23)
window.HEALTH_TOPICS = window.HEALTH_TOPICS || [];

window.HEALTH_TOPICS.push({
    id: 'women', order: 21, section: 'groups', icon: '👩',
    title: 'Sức khỏe phụ nữ: kinh nguyệt, thai kỳ, mãn kinh',
    summary: 'Chu kỳ kinh nguyệt, rối loạn thường gặp, chăm sóc trước và trong thai kỳ, dấu hiệu nguy hiểm, sau sinh và mãn kinh.',
    keywords: 'phụ nữ kinh nguyệt đau bụng kinh rong kinh buồng trứng đa nang mang thai thai kỳ axit folic sinh non tiền sản giật sau sinh trầm cảm mãn kinh phụ khoa',
    sources: ['WHO - Antenatal care recommendations for a positive pregnancy experience (2016)', 'ACOG - Practice bulletins & patient education (menstruation, pregnancy, menopause)', 'NAMS/The Menopause Society - Hormone Therapy Position Statement', 'Bộ Y tế Việt Nam - Hướng dẫn quốc gia về các dịch vụ chăm sóc sức khỏe sinh sản'],
    html: `
<p>Sức khỏe của phụ nữ gắn với nhiều giai đoạn đặc thù: dậy thì, chu kỳ kinh nguyệt, mang thai, sau sinh, mãn kinh. Hiểu cơ thể mình giúp bạn phân biệt điều bình thường với dấu hiệu cần đi khám, và chủ động chăm sóc bản thân ở mọi lứa tuổi.</p>

<h2>Hệ sinh sản nữ và chu kỳ kinh nguyệt</h2>
[[img:femalerepro|Hệ sinh sản nữ: buồng trứng, vòi trứng, tử cung, cổ tử cung, âm đạo.]]
<p>Buồng trứng sản xuất trứng và các hormone estrogen, progesterone. Mỗi tháng một nang trứng trưởng thành và phóng noãn; nếu không có thụ tinh, niêm mạc tử cung bong ra thành kinh nguyệt.</p>
[[img:menstrual|Chu kỳ kinh nguyệt: hormone thay đổi theo từng giai đoạn (nang trứng, rụng trứng, hoàng thể, hành kinh).]]
<table>
<tr><th>Giai đoạn</th><th>Ngày (chu kỳ 28 ngày)</th><th>Diễn biến</th></tr>
<tr><td>Hành kinh</td><td>1–5</td><td>Niêm mạc tử cung bong; hormone ở mức thấp</td></tr>
<tr><td>Nang trứng</td><td>1–13</td><td>FSH kích thích nang trứng phát triển; estrogen tăng, niêm mạc tử cung dày lên</td></tr>
<tr><td>Rụng trứng</td><td>Khoảng 14</td><td>LH tăng vọt, trứng phóng ra; khả năng thụ thai cao nhất trong khoảng 5 ngày trước và ngày rụng trứng</td></tr>
<tr><td>Hoàng thể</td><td>15–28</td><td>Progesterone tăng, chuẩn bị cho trứng làm tổ; nếu không thụ thai, hormone giảm và kinh nguyệt bắt đầu</td></tr>
</table>
<h3>Thế nào là chu kỳ bình thường?</h3>
<ul>
<li>Thường bắt đầu ở tuổi 9–15 (trung bình 12–13). Chu kỳ tính từ ngày đầu kỳ này đến ngày đầu kỳ sau: <strong>21–35 ngày</strong> (ở thiếu niên, cho phép đến 45 ngày trong vài năm đầu).</li>
<li>Hành kinh kéo dài <strong>2–7 ngày</strong>, lượng máu mất trung bình 30–50 ml.</li>
<li>Có thể có tiền kinh nguyệt nhẹ: căng ngực, đầy bụng, dễ cáu, mệt, mụn.</li>
</ul>
<div class="box warn"><b>Cần đi khám phụ khoa khi</b>
<ul>
<li>Chưa có kinh ở tuổi 15 hoặc sau 3 năm kể từ khi nở ngực; mất kinh trên 3 tháng (khi không mang thai)</li>
<li>Chu kỳ dưới 21 hoặc trên 35 ngày kéo dài; hành kinh trên 7 ngày</li>
<li>Ra máu nhiều: thấm đẫm băng vệ sinh hơn một cái mỗi 1–2 giờ, máu cục lớn, mệt, chóng mặt (nguy cơ thiếu máu)</li>
<li>Ra máu giữa chu kỳ, sau quan hệ tình dục, hoặc <strong>sau mãn kinh</strong> (luôn cần kiểm tra)</li>
<li>Đau bụng kinh dữ dội, không đáp ứng thuốc giảm đau thông thường, ảnh hưởng học tập, làm việc</li>
<li>Khí hư đổi màu, mùi hôi, ngứa, rát, đau vùng chậu, sốt</li>
</ul></div>
<h3>Các vấn đề thường gặp</h3>
<ul>
<li><strong>Đau bụng kinh:</strong> phổ biến, do prostaglandin làm tử cung co thắt. Giảm bằng chườm ấm, vận động nhẹ, NSAID (ibuprofen) uống khi bắt đầu đau, thuốc tránh thai nội tiết. Đau tăng dần theo tuổi, đau khi quan hệ, đau vùng chậu mạn, khó có thai có thể do <strong>lạc nội mạc tử cung</strong>, <strong>tuyến cơ tử cung</strong> hoặc <strong>u xơ tử cung</strong> cần được khám.</li>
<li><strong>Hội chứng buồng trứng đa nang (PCOS):</strong> kinh thưa hoặc vô kinh, tăng androgen (mụn, rậm lông), buồng trứng nhiều nang; thường có kháng insulin, béo bụng; tăng nguy cơ tiểu đường, hiếm muộn. Giảm cân, vận động, thuốc tránh thai, metformin, điều trị kích thích rụng trứng khi muốn có thai.</li>
<li><strong>Hội chứng tiền kinh nguyệt (PMS/PMDD):</strong> triệu chứng thể chất và cảm xúc rõ rệt trước kỳ kinh; cải thiện nhờ vận động, ngủ, giảm caffeine, muối; thuốc (SSRI, nội tiết) khi nặng.</li>
<li><strong>Thiếu máu thiếu sắt:</strong> do kinh nhiều; mệt, da xanh, chóng mặt; xét nghiệm và bổ sung sắt theo hướng dẫn, ăn thịt đỏ, gan, huyết.</li>
<li><strong>Viêm âm đạo:</strong> nấm Candida (ngứa, khí hư đặc như bã đậu), loạn khuẩn âm đạo (khí hư loãng, mùi tanh), <em>Trichomonas</em> (khí hư bọt, vàng xanh). Cần chẩn đoán đúng vì điều trị khác nhau. <strong>Không thụt rửa âm đạo</strong>, không dùng dung dịch vệ sinh mạnh; mặc quần lót cotton thoáng.</li>
<li><strong>Nhiễm trùng tiểu:</strong> xem bài Bệnh thường gặp.</li>
<li><strong>Tầm soát cổ tử cung, ung thư vú:</strong> xem bài Ung thư và bài Khám sức khỏe định kỳ; tiêm HPV.</li>
</ul>

<h2>Chuẩn bị mang thai</h2>
<ul>
<li>Nên khám tiền sản <strong>ít nhất 1–3 tháng trước khi có thai</strong>: đánh giá bệnh nền (tăng huyết áp, tiểu đường, bệnh tuyến giáp, động kinh…), thuốc đang dùng, tiêm chủng (rubella, thủy đậu, viêm gan B, cúm…), tầm soát nhiễm trùng, sức khỏe răng miệng.</li>
<li><strong>Acid folic (vitamin B9) 400 µg mỗi ngày</strong>, bắt đầu ít nhất 1 tháng trước và tiếp tục hết 3 tháng đầu, giúp giảm nguy cơ dị tật ống thần kinh (hở cột sống, vô sọ). Phụ nữ có tiền sử con dị tật ống thần kinh, dùng thuốc chống động kinh, tiểu đường, béo phì cần liều cao hơn theo chỉ định.</li>
<li>Đạt cân nặng hợp lý, bỏ thuốc lá, rượu, không dùng ma túy; hạn chế caffeine (dưới 200 mg/ngày, khoảng 2 tách cà phê nhỏ).</li>
<li>Nam giới cũng nên khỏe mạnh: bỏ thuốc lá, rượu, tránh nhiệt độ cao vùng bìu kéo dài.</li>
<li><strong>Vô sinh hiếm muộn:</strong> không có thai sau 12 tháng quan hệ đều đặn không dùng biện pháp tránh thai (hoặc sau 6 tháng nếu trên 35 tuổi) thì nên đi khám cả hai vợ chồng. Khoảng 40–50% nguyên nhân liên quan đến nam giới.</li>
</ul>

<h2>Thai kỳ</h2>
<p>Thai kỳ kéo dài khoảng <strong>40 tuần</strong> (tính từ ngày đầu kỳ kinh cuối), chia 3 tam cá nguyệt: tuần 1–13, 14–27, 28–40 trở đi.</p>
[[img:preg6|Thai 6 tuần: phôi thai còn rất nhỏ, tim bắt đầu hoạt động.]]
[[img:preg20|Thai 20 tuần: thai nhi đã hình thành đầy đủ các cơ quan, mẹ cảm nhận thai máy.]]
[[img:preg40|Thai đủ tháng (40 tuần): thai nhi chuẩn bị chào đời.]]
<h3>Khám thai và xét nghiệm</h3>
<ul>
<li>WHO khuyến cáo ít nhất <strong>8 lần tiếp xúc khám thai</strong> với nhân viên y tế; khám thai đầu tiên càng sớm càng tốt (trước 12 tuần).</li>
<li>Xét nghiệm thường gồm: nhóm máu (ABO, Rh), công thức máu (thiếu máu), nước tiểu, huyết áp, HIV, viêm gan B, giang mai, rubella, đường huyết, xét nghiệm đường huyết thai kỳ (nghiệm pháp dung nạp glucose) ở tuần <strong>24–28</strong>.</li>
<li>Siêu âm: tuần 11–13 (đo độ mờ da gáy), tuần 18–22 (hình thái học chi tiết), tuần 28–32 (tăng trưởng, vị trí nhau, nước ối).</li>
<li>Sàng lọc trước sinh các bất thường nhiễm sắc thể (hội chứng Down, Edwards, Patau) bằng double test, triple test hoặc <strong>NIPT</strong> (xét nghiệm DNA thai tự do trong máu mẹ; độ chính xác cao nhưng vẫn là xét nghiệm sàng lọc, kết quả bất thường cần chọc ối xác định).</li>
<li>Tiêm phòng: uốn ván (hoặc Tdap mỗi thai kỳ, tuần 27–36), cúm; một số vaccine khác theo tư vấn. Không tiêm vaccine sống (sởi, thủy đậu) trong thai kỳ.</li>
</ul>
<h3>Dinh dưỡng và lối sống</h3>
<ul>
<li>Tăng cân hợp lý: người BMI bình thường tăng khoảng <strong>11,5–16 kg</strong> (thừa cân: 7–11,5 kg; béo phì: 5–9 kg; thiếu cân: 12,5–18 kg). Năng lượng cần thêm khoảng 340 kcal/ngày ở tam cá nguyệt 2 và khoảng 450 kcal/ngày ở tam cá nguyệt 3, không phải "ăn cho hai người".</li>
<li><strong>Bổ sung:</strong> sắt và acid folic (WHO: 30–60 mg sắt nguyên tố + 400 µg folic mỗi ngày; liều cụ thể theo bác sĩ), canxi (ở nơi ăn thiếu canxi), iốt; vitamin D khi cần; DHA cho thai kỳ theo tư vấn.</li>
<li><strong>Nên tránh:</strong> rượu bia (không có mức an toàn), thuốc lá, ma túy; thịt, cá, trứng sống hoặc nấu chưa chín; sữa, phô mai chưa tiệt trùng (listeria); gan động vật ăn nhiều (quá nhiều vitamin A); cá có nhiều thủy ngân (cá kiếm, cá thu vua, cá ngừ lớn); đu đủ xanh, thảo dược không rõ an toàn; hạn chế cà phê.</li>
<li>Vận động vừa phải (150 phút/tuần): đi bộ, bơi, yoga thai kỳ; tránh môn va chạm, nguy cơ ngã, lặn sâu, nằm ngửa hoàn toàn lâu ở giai đoạn muộn.</li>
<li>Dùng thuốc: chỉ dùng thuốc khi cần và theo chỉ định; không tự ngưng thuốc điều trị bệnh nền (hen, tăng huyết áp, động kinh…) mà chưa hỏi bác sĩ.</li>
<li>Nghén và nôn nhẹ phổ biến ở 3 tháng đầu: ăn nhiều bữa nhỏ, gừng, tránh mùi gây khó chịu. Nôn nhiều không ăn uống được (nôn nghén nặng) cần khám.</li>
<li>Đi làm, đi lại, quan hệ tình dục bình thường nếu thai kỳ diễn ra bình thường; thắt dây an toàn đúng cách khi đi xe ô tô.</li>
</ul>
<div class="box danger"><b>Dấu hiệu nguy hiểm trong thai kỳ: đến cơ sở y tế ngay</b>
<ul>
<li>Ra máu âm đạo; ra nước ối (chảy dịch trong, loãng); đau bụng dữ dội hoặc đau bụng từng cơn đều đặn trước 37 tuần</li>
<li>Giảm hoặc mất cử động thai (sau tuần 28: dưới 10 cử động trong 2 giờ khi nằm nghỉ)</li>
<li><strong>Nhức đầu dữ dội, nhìn mờ hoặc thấy chớp sáng, đau thượng vị, phù mặt và tay nhanh, tăng huyết áp (từ 140/90)</strong>: có thể là <strong>tiền sản giật</strong>, có thể dẫn đến sản giật, nguy hiểm cho mẹ và thai</li>
<li>Sốt, rét run, tiểu buốt, đau hông lưng; nôn liên tục không uống được; khó thở, đau ngực; sưng đau một chân (nghi huyết khối)</li>
<li>Đau bụng dưới một bên kèm ra máu, chóng mặt, ngất trong 3 tháng đầu (nghi thai ngoài tử cung)</li>
</ul></div>
<h3>Các biến chứng thường gặp</h3>
<ul>
<li><strong>Sảy thai:</strong> khoảng 10–20% thai được xác nhận kết thúc bằng sảy thai, phần lớn do bất thường nhiễm sắc thể, không phải lỗi của người mẹ. Cần được hỗ trợ tinh thần.</li>
<li><strong>Tiểu đường thai kỳ:</strong> kiểm soát bằng chế độ ăn, vận động, insulin khi cần; giảm nguy cơ thai to, hạ đường huyết sơ sinh, biến chứng khi sinh; cần tầm soát tiểu đường type 2 sau sinh.</li>
<li><strong>Sinh non (trước 37 tuần):</strong> yếu tố nguy cơ gồm tiền sử sinh non, đa thai, nhiễm trùng, hút thuốc, cổ tử cung ngắn. Trẻ sinh non cần chăm sóc đặc biệt.</li>
<li><strong>Thiếu máu:</strong> phổ biến, cần sắt và theo dõi.</li>
</ul>
<h3>Chuyển dạ và sinh</h3>
<ul>
<li>Đến cơ sở y tế khi: cơn co tử cung đều đặn, ngày càng mạnh và dày (ví dụ mỗi 5 phút kéo dài khoảng 1 phút, trong khoảng 1 giờ), vỡ ối, ra máu, thai máy giảm. Nếu thai kỳ có nguy cơ, nên đi sớm hơn.</li>
<li>Sinh thường là lựa chọn ưu tiên khi không có chỉ định; <strong>mổ lấy thai</strong> khi có lý do y khoa (thai ngôi ngược, bất tương xứng, nhau tiền đạo, suy thai, tiền sản giật nặng...). Mổ lấy thai không cần thiết làm tăng nguy cơ biến chứng cho cả mẹ và con.</li>
<li>Tiếp xúc da kề da ngay sau sinh, bú mẹ sớm trong giờ đầu đời giúp ổn định trẻ và tăng thành công nuôi con bằng sữa mẹ.</li>
</ul>

<h2>Sau sinh</h2>
<ul>
<li><strong>Sản dịch</strong> (máu, dịch từ tử cung) ra trong 4–6 tuần, giảm dần. Tử cung co hồi. Có thể đau bụng khi cho bú (hormone oxytocin). Vết khâu tầng sinh môn hoặc vết mổ cần giữ sạch khô.</li>
<li>Nghỉ ngơi, ăn đủ chất, uống đủ nước; vận động nhẹ sớm để phòng huyết khối; tập cơ sàn chậu (bài tập Kegel) phòng són tiểu.</li>
<li>Tránh thai sau sinh: phụ nữ có thể rụng trứng trở lại trước khi có kinh. Hỏi bác sĩ phương pháp phù hợp khi đang cho con bú (xem bài Sức khỏe tình dục).</li>
</ul>
<div class="box danger"><b>Dấu hiệu nguy hiểm sau sinh</b>
<ul>
<li>Băng vệ sinh thấm đẫm máu trong 1 giờ; máu cục lớn; chảy máu tăng đột ngột</li>
<li>Sốt từ 38 °C; sản dịch hôi; đau bụng dưới nhiều; vết mổ, vết khâu sưng đỏ, chảy mủ</li>
<li>Đau đầu dữ dội, nhìn mờ, co giật (tiền sản giật sau sinh); đau ngực, khó thở; sưng đau một chân</li>
<li>Ý nghĩ tự làm hại bản thân hoặc làm hại con</li>
</ul></div>
<h3>Sức khỏe tinh thần sau sinh</h3>
<ul>
<li><strong>"Baby blues"</strong>: buồn, dễ khóc, cáu gắt trong 2 tuần đầu, rất phổ biến (khoảng 50–80%), tự hết.</li>
<li><strong>Trầm cảm sau sinh</strong> (khoảng 1 trên 7 phụ nữ): buồn kéo dài, mất hứng thú, lo lắng quá mức, mất ngủ dù con ngủ, cảm giác vô dụng, khó gắn kết với con. <strong>Đây là bệnh, có thể điều trị</strong> bằng tâm lý trị liệu, thuốc (an toàn khi cho con bú nếu được bác sĩ kê đơn), hỗ trợ gia đình. Người thân nên chủ động chia sẻ việc chăm con, cho mẹ ngủ.</li>
<li>Rối loạn tâm thần sau sinh (ảo giác, hoang tưởng, kích động) là cấp cứu.</li>
</ul>

<h2>Mãn kinh</h2>
<p>Mãn kinh là khi <strong>12 tháng liên tiếp không có kinh</strong> (không do nguyên nhân khác); tuổi trung bình khoảng 50–52 (thường trong khoảng 45–55). <strong>Giai đoạn tiền mãn kinh</strong> (có thể kéo dài nhiều năm) với chu kỳ thất thường và triệu chứng do nồng độ estrogen dao động.</p>
[[img:menopause|Các triệu chứng thường gặp của mãn kinh.]]
<ul>
<li><strong>Triệu chứng:</strong> bốc hỏa, đổ mồ hôi đêm (khoảng 70–80% phụ nữ, thường kéo dài 7 năm hoặc hơn), mất ngủ, thay đổi tâm trạng, lo âu, giảm ham muốn, <strong>khô teo âm đạo, đau khi giao hợp, tiểu rắt, nhiễm trùng tiểu tái phát</strong>, đau khớp, khô da, tăng cân vùng bụng.</li>
<li><strong>Hậu quả lâu dài:</strong> loãng xương (mất xương nhanh trong 5–10 năm đầu) và tăng nguy cơ bệnh tim mạch khi estrogen giảm.</li>
<li><strong>Xử trí:</strong>
<ul>
<li>Lối sống: tập thể dục, giảm cân, tránh thuốc lá, rượu, cà phê, đồ cay (nếu gây bốc hỏa), mặc lớp áo dễ cởi, giữ phòng mát, ngủ đủ, liệu pháp nhận thức - hành vi.</li>
<li><strong>Liệu pháp hormone mãn kinh (MHT):</strong> là điều trị hiệu quả nhất cho bốc hỏa và triệu chứng âm đạo. Lợi ích thường vượt nguy cơ ở phụ nữ dưới 60 tuổi hoặc trong vòng 10 năm sau mãn kinh, triệu chứng vừa - nặng, không có chống chỉ định; dùng liều thấp nhất, thời gian phù hợp. <strong>Nguy cơ</strong> (huyết khối, đột quỵ, ung thư vú khi dùng estrogen + progestin kéo dài) tùy loại, đường dùng và từng người, nên cần quyết định cùng bác sĩ; không dùng ở người có tiền sử ung thư vú, huyết khối, bệnh gan nặng, chảy máu âm đạo chưa rõ nguyên nhân.</li>
<li>Thuốc không hormone (một số thuốc chống trầm cảm, gabapentin, thuốc mới ức chế thụ thể NK3…), estrogen bôi tại chỗ hoặc thuốc/kem làm ẩm âm đạo cho khô âm đạo.</li>
<li>Các sản phẩm "thảo dược", "nội tiết tố thực vật", đậu nành liều cao chưa có bằng chứng ổn định và không phải lúc nào cũng an toàn.</li>
</ul></li>
<li><strong>Bảo vệ xương và tim:</strong> canxi, vitamin D, vận động chịu lực, đo mật độ xương khi có chỉ định, kiểm soát huyết áp, mỡ máu, đường huyết, tầm soát ung thư vú, cổ tử cung, đại tràng.</li>
<li><strong>Ra máu âm đạo sau mãn kinh luôn cần khám</strong> để loại trừ ung thư nội mạc tử cung.</li>
</ul>
<div class="box tip"><b>Sức khỏe phụ nữ: những điều quan trọng</b>
<ul>
<li>Theo dõi chu kỳ kinh nguyệt: ghi lại ngày bắt đầu, lượng, đau.</li>
<li>Khám phụ khoa, tầm soát cổ tử cung và vú theo khuyến cáo; tiêm HPV.</li>
<li>Khi muốn có thai: khám tiền sản, bổ sung acid folic.</li>
<li>Khi mang thai: khám thai đều đặn; nhận biết dấu hiệu nguy hiểm.</li>
<li>Sau sinh: chú ý sức khỏe tinh thần; mãn kinh: bảo vệ xương và tim.</li>
<li>Bệnh tim mạch ở phụ nữ thường bị bỏ sót vì triệu chứng không điển hình; không chủ quan.</li>
</ul></div>
`
});

window.HEALTH_TOPICS.push({
    id: 'men', order: 22, section: 'groups', icon: '👨',
    title: 'Sức khỏe nam giới',
    summary: 'Tuyến tiền liệt, tinh hoàn, rối loạn cương, testosterone, sinh sản và những thói quen ảnh hưởng sức khỏe nam giới.',
    keywords: 'nam giới tuyến tiền liệt phì đại tiền liệt psa tinh hoàn xoắn tinh hoàn rối loạn cương dương testosterone vô sinh tinh trùng cắt bao quy đầu triệt sản',
    sources: ['European Association of Urology (EAU) Guidelines: BPH, Prostate Cancer, Male Sexual Dysfunction, Male Infertility', 'AUA - Guidelines; Urology Care Foundation', 'WHO - Laboratory manual for the examination and processing of human semen (6th ed., 2021)', 'Hội Tiết niệu - Thận học Việt Nam'],
    html: `
<p>Nam giới có tuổi thọ trung bình thấp hơn nữ giới khoảng 5 năm, một phần vì hút thuốc, uống rượu, tai nạn, tim mạch, và vì <strong>ít đi khám sớm</strong>. Bài này giúp bạn biết những vấn đề sức khỏe đặc thù và những điều nên làm.</p>

<h2>Hệ sinh dục - tiết niệu nam</h2>
[[img:maleurinary|Hệ tiết niệu nam: thận, niệu quản, bàng quang, tuyến tiền liệt, niệu đạo.]]
<ul>
<li><strong>Tinh hoàn</strong> (trong bìu) sản xuất tinh trùng và testosterone; bìu giữ tinh hoàn mát hơn thân nhiệt 2–3 °C để tinh trùng sinh ra tốt.</li>
<li><strong>Mào tinh hoàn</strong> dự trữ tinh trùng, <strong>ống dẫn tinh</strong> đưa tinh trùng đến niệu đạo.</li>
<li><strong>Tuyến tiền liệt</strong> to bằng quả óc chó, nằm ngay dưới bàng quang, ôm quanh niệu đạo, tiết một phần dịch tinh.</li>
</ul>

<h2>Phì đại lành tính tuyến tiền liệt (BPH)</h2>
<p>Từ khoảng 40–50 tuổi, tuyến tiền liệt lớn dần, có thể chèn ép niệu đạo. Khoảng một nửa nam giới trên 50 tuổi có triệu chứng ở mức nào đó. <strong>Đây không phải ung thư và không biến thành ung thư</strong>.</p>
[[img:bph|Phì đại tuyến tiền liệt làm hẹp niệu đạo, gây tiểu khó.]]
<ul>
<li><strong>Triệu chứng đường tiểu dưới:</strong> tiểu nhiều lần, <strong>tiểu đêm</strong> (phải dậy từ 2 lần), tiểu gấp, tia nước tiểu yếu, đứt quãng, tiểu khó phải rặn, cảm giác tiểu không hết, tiểu nhỏ giọt cuối dòng.</li>
<li><strong>Xử trí:</strong>
<ul>
<li>Lối sống: giảm uống nước, cà phê, rượu buổi tối; tiểu ngay khi buồn; tránh thuốc cảm có pseudoephedrine, thuốc kháng histamine thế hệ 1 (làm khó tiểu).</li>
<li>Thuốc: chẹn alpha (tamsulosin…) giảm triệu chứng nhanh; thuốc ức chế 5-alpha reductase (finasteride, dutasteride) làm nhỏ tuyến; phối hợp khi cần. Thuốc cần bác sĩ kê đơn, tác dụng phụ (chóng mặt, rối loạn xuất tinh, giảm ham muốn) cần trao đổi.</li>
<li>Can thiệp: phẫu thuật hoặc thủ thuật nội soi (như cắt đốt nội soi qua niệu đạo TURP, laser) khi thuốc thất bại hoặc có biến chứng.</li>
</ul></li>
</ul>
<div class="box danger"><b>Bí tiểu cấp: cấp cứu</b>
<p>Đột ngột không tiểu được, bụng dưới căng đau. Cần đi cấp cứu để đặt ống thông tiểu. Cũng cần khám nếu đái máu, nhiễm trùng tiểu tái phát, sỏi bàng quang, suy thận.</p></div>

<h2>Viêm tuyến tiền liệt</h2>
<ul>
<li><strong>Cấp (do vi khuẩn):</strong> sốt, rét run, tiểu buốt, đau vùng đáy chậu, tiểu khó; cần điều trị kháng sinh sớm; có thể bí tiểu, nhiễm trùng huyết.</li>
<li><strong>Mạn/hội chứng đau vùng chậu mạn:</strong> đau vùng đáy chậu, bìu, xương mu, triệu chứng tiểu, rối loạn tình dục kéo dài trên 3 tháng; khó điều trị, cần theo dõi chuyên khoa.</li>
</ul>

<h2>Ung thư tuyến tiền liệt</h2>
<p>Là một trong những ung thư phổ biến nhất ở nam giới lớn tuổi. Giai đoạn sớm <strong>thường không triệu chứng</strong>; giai đoạn muộn có thể tiểu khó, đái máu, đau xương (do di căn).</p>
[[img:prostatestages|Các giai đoạn T1–T3 của ung thư tuyến tiền liệt.]]
<ul>
<li><strong>Nguy cơ:</strong> tuổi trên 50, tiền sử gia đình (cha, anh em), đột biến BRCA, người gốc Phi, béo phì.</li>
<li><strong>Xét nghiệm PSA</strong> (kháng nguyên đặc hiệu tuyến tiền liệt) và thăm khám trực tràng. PSA cao không đồng nghĩa ung thư (có thể do phì đại, viêm, sau đạp xe, xuất tinh); PSA bình thường cũng không loại trừ hoàn toàn. Tầm soát có thể giảm tử vong nhưng cũng gây chẩn đoán quá mức (ung thư tiến triển chậm, không bao giờ gây hại) và biến chứng điều trị (rối loạn cương, són tiểu). Vì thế nam giới từ 50–69 tuổi nên <strong>trao đổi lợi - hại với bác sĩ</strong> để quyết định; nguy cơ cao (tiền sử gia đình, BRCA) cân nhắc từ 40–45 tuổi.</li>
<li>Chẩn đoán cuối cùng bằng sinh thiết (thường có hỗ trợ của MRI). Ung thư nguy cơ thấp có thể <strong>theo dõi tích cực</strong> thay vì điều trị ngay; ung thư giai đoạn khu trú điều trị bằng phẫu thuật, xạ trị; giai đoạn muộn dùng liệu pháp hormone và các thuốc mới.</li>
</ul>

<h2>Tinh hoàn</h2>
<ul>
<li><strong>Ung thư tinh hoàn:</strong> hiếm nhưng là ung thư phổ biến nhất ở nam từ 15–40 tuổi; <strong>chữa khỏi trên 90–95%</strong> nếu phát hiện sớm. Dấu hiệu: cục cứng, không đau ở tinh hoàn, bìu nặng, to lên. <strong>Nam giới nên tự kiểm tra tinh hoàn mỗi tháng</strong> (sau tắm nước ấm, dùng hai tay lăn nhẹ từng tinh hoàn) và đi khám khi thấy bất thường.</li>
<li><strong>Xoắn tinh hoàn:</strong> <strong>cấp cứu ngoại khoa</strong>. Đau bìu đột ngột, dữ dội, sưng, buồn nôn; hay gặp ở thiếu niên, có thể xảy ra ban đêm. Cần phẫu thuật trong vòng <strong>6 giờ</strong> để cứu tinh hoàn; đến viện ngay, đừng chờ "xem đỡ".</li>
<li><strong>Viêm mào tinh hoàn - tinh hoàn:</strong> đau, sưng, sốt, thường do nhiễm khuẩn (kể cả lây qua đường tình dục), hoặc virus quai bị.</li>
<li><strong>Giãn tĩnh mạch tinh (varicocele):</strong> cảm giác nặng bìu, "búi giun" (thường bên trái); có thể gây giảm chất lượng tinh trùng; xem xét điều trị nếu đau hoặc vô sinh.</li>
<li><strong>Thoát vị bẹn:</strong> khối phồng vùng bẹn khi ho, rặn; đau đột ngột, cứng, không đẩy vào được, nôn là nghẹt thoát vị (cấp cứu).</li>
<li>Ở trẻ trai: tinh hoàn ẩn (chưa xuống bìu) cần can thiệp trước 12–18 tháng tuổi.</li>
</ul>

<h2>Rối loạn cương dương</h2>
<p>Khó đạt hoặc duy trì sự cương đủ để quan hệ. Rất phổ biến, tăng theo tuổi nhưng <strong>không phải hậu quả tất yếu của tuổi già</strong>.</p>
<ul>
<li><strong>Nguyên nhân:</strong> mạch máu (xơ vữa, tăng huyết áp), tiểu đường, béo phì, hội chứng chuyển hóa, hút thuốc, rượu, thuốc (một số thuốc hạ áp, chống trầm cảm…), thần kinh, nội tiết (testosterone thấp), sau phẫu thuật vùng chậu, và <strong>yếu tố tâm lý</strong> (stress, lo âu, trầm cảm, mâu thuẫn).</li>
<li><strong>Cương dương thường là "dấu hiệu sớm" của bệnh tim mạch</strong> (mạch máu dương vật nhỏ bị ảnh hưởng trước): nam giới bị rối loạn cương mới xuất hiện nên kiểm tra huyết áp, đường huyết, mỡ máu, nguy cơ tim mạch.</li>
<li><strong>Điều trị:</strong> giải quyết nguyên nhân và lối sống (bỏ thuốc lá, giảm rượu, tập thể dục, giảm cân), tư vấn tâm lý/cặp đôi, thuốc ức chế PDE5 (sildenafil, tadalafil, vardenafil) <strong>theo đơn bác sĩ</strong>, các phương pháp khác (bơm hút chân không, tiêm thể hang, đặt thể hang nhân tạo) khi cần.</li>
<li><strong>Cảnh giác với thuốc "cường dương" mua qua mạng, quảng cáo "thảo dược 100%":</strong> nhiều sản phẩm bị trộn trái phép sildenafil hoặc tadalafil, có thể <strong>nguy hiểm đến tính mạng</strong> khi phối hợp với thuốc nitrat (thuốc tim), gây tụt huyết áp nặng.</li>
<li><strong>Cương đau kéo dài trên 4 giờ</strong> (priapism) là cấp cứu.</li>
</ul>

<h2>Testosterone và lão hóa nam</h2>
<ul>
<li>Testosterone giảm chậm khoảng 1% mỗi năm sau 40 tuổi. <strong>Thiếu hụt testosterone</strong> (suy sinh dục khởi phát muộn) gây giảm ham muốn, rối loạn cương, mệt, giảm khối cơ, tăng mỡ bụng, xương yếu, trầm cảm, nhưng các triệu chứng này không đặc hiệu, thường do béo phì, tiểu đường, ngưng thở khi ngủ, thuốc, trầm cảm.</li>
<li>Chẩn đoán cần triệu chứng <strong>và</strong> xét nghiệm testosterone buổi sáng thấp, xác nhận ít nhất hai lần. <strong>Đừng tự mua "thuốc bổ thận tráng dương", testosterone</strong>: dùng ngoài chỉ định có thể gây vô sinh, tăng hồng cầu, nguy cơ tim mạch, ảnh hưởng tuyến tiền liệt. Đồng hóa steroid (để tăng cơ) gây teo tinh hoàn, vô sinh, tổn thương gan, tim.</li>
</ul>

<h2>Sinh sản nam giới</h2>
<ul>
<li>Nam giới góp phần trong khoảng <strong>30–50%</strong> các trường hợp hiếm muộn. Xét nghiệm tinh dịch đồ là bước đầu tiên. Giá trị tham chiếu của WHO (2021): thể tích từ 1,4 mL, nồng độ từ 16 triệu/mL, di động tiến tới từ 30%, tổng di động từ 42%, hình dạng bình thường từ 4%. Bác sĩ đánh giá kết quả, nên lặp lại khi bất thường.</li>
<li><strong>Yếu tố giảm chất lượng tinh trùng:</strong> hút thuốc, rượu, ma túy, béo phì, nhiệt độ cao (ngâm nước nóng thường xuyên, để laptop trên đùi, ngồi lâu, quần bó), giãn tĩnh mạch tinh, nhiễm trùng, nhiễm độc hóa chất, steroid đồng hóa, bệnh lý nội tiết, di truyền, tuổi cao.</li>
<li><strong>Cải thiện:</strong> bỏ thuốc lá, giảm rượu, giảm cân, tập thể dục, ăn uống lành mạnh (thực phẩm giàu chất chống oxy hóa, omega-3), ngủ đủ, tránh nhiệt, xử lý nguyên nhân.</li>
<li><strong>Triệt sản nam (thắt ống dẫn tinh):</strong> thủ thuật nhỏ, hiệu quả trên 99%, không ảnh hưởng hormone, ham muốn hay khả năng cương; nên coi là vĩnh viễn (có thể nối lại nhưng không đảm bảo thành công); cần chờ xét nghiệm tinh dịch sau khoảng 3 tháng mới chắc chắn.</li>
</ul>

<h2>Bao quy đầu và vệ sinh</h2>
<ul>
<li>Bao quy đầu ở trẻ nhỏ thường dính và tự tách dần; không cố kéo ép. <strong>Hẹp bao quy đầu, viêm bao quy đầu - quy đầu tái phát</strong> có thể cần điều trị.</li>
<li>Vệ sinh hằng ngày: kéo nhẹ bao quy đầu, rửa bằng nước sạch và xà phòng dịu nhẹ, lau khô.</li>
<li>Cắt bao quy đầu có thể giảm nhiễm trùng, giảm nguy cơ lây HIV và một số STI ở nam giới quan hệ khác giới; không bắt buộc, quyết định theo lý do y khoa, tôn giáo, văn hóa, và thực hiện tại cơ sở y tế.</li>
</ul>

<h2>Những thói quen ảnh hưởng sức khỏe nam giới</h2>
<ul>
<li><strong>Hút thuốc:</strong> khoảng 40% nam giới Việt Nam hút thuốc; ung thư phổi, COPD, nhồi máu cơ tim, rối loạn cương.</li>
<li><strong>Uống rượu bia nhiều ("văn hóa nhậu"):</strong> gan nhiễm mỡ, xơ gan, tăng huyết áp, gout, viêm tụy, ung thư, tai nạn giao thông, bạo lực, suy giảm tinh thần. <strong>Đã uống rượu bia thì không lái xe.</strong></li>
<li><strong>Ít đi khám, ít tầm soát:</strong> nam giới thường chỉ khám khi đã nặng; nên kiểm tra huyết áp, đường huyết, mỡ máu, cân nặng hằng năm sau 35–40 tuổi.</li>
<li><strong>Sức khỏe tinh thần:</strong> nam giới ít tìm kiếm giúp đỡ hơn nhưng tỷ lệ tự tử cao hơn. Trầm cảm ở nam giới có thể biểu hiện bằng cáu giận, uống rượu nhiều, mất ngủ, liều lĩnh, đau thân thể. Nói chuyện với bạn bè, gia đình, bác sĩ là dấu hiệu của sự mạnh mẽ.</li>
<li><strong>Béo bụng, ngưng thở khi ngủ, ít vận động, stress công việc</strong> gây bệnh lý tim mạch sớm.</li>
<li><strong>Rụng tóc kiểu hói đầu (androgenetic alopecia):</strong> do di truyền và hormone; minoxidil bôi và finasteride uống (theo đơn, có tác dụng phụ về tình dục) có bằng chứng; sản phẩm khác thường không hiệu quả.</li>
</ul>
<div class="box warn"><b>Nam giới nên đi khám khi</b>
<ul>
<li>Tiểu khó, tiểu đêm nhiều, tiểu ra máu; đau bìu, cục ở tinh hoàn; chảy dịch niệu đạo, loét sinh dục</li>
<li>Rối loạn cương kéo dài; mất ham muốn kéo dài; không có con sau 12 tháng cố gắng</li>
<li>Đau ngực, khó thở, hồi hộp; tăng cân, buồn ngủ ban ngày, ngáy to</li>
<li>Buồn chán kéo dài, mất hứng thú, ý nghĩ tự làm hại</li>
</ul></div>
`
});

window.HEALTH_TOPICS.push({
    id: 'children', order: 23, section: 'groups', icon: '👶',
    title: 'Sức khỏe trẻ em',
    summary: 'Trẻ sơ sinh, nuôi con bằng sữa mẹ, ăn dặm, mốc phát triển, bệnh thường gặp, dấu hiệu nguy hiểm, an toàn, dậy thì.',
    keywords: 'trẻ em trẻ sơ sinh sữa mẹ ăn dặm phát triển mốc tăng trưởng vàng da sốt co giật tai nạn thương tích đuối nước cận thị tự kỷ dậy thì bồi dưỡng',
    sources: ['WHO - Child growth standards; Infant and young child feeding; Integrated Management of Childhood Illness', 'American Academy of Pediatrics (AAP) - Healthy Children, Bright Futures', 'CDC - Developmental Milestones (2022 revised)', 'Bộ Y tế Việt Nam - Hướng dẫn chăm sóc sức khỏe trẻ em; Viện Dinh dưỡng Quốc gia'],
    html: `
<p>Trẻ em không phải "người lớn thu nhỏ": cơ thể đang lớn, hệ miễn dịch đang hoàn thiện và dễ mất nước, hạ đường huyết, nhiễm trùng nặng hơn. 1.000 ngày đầu đời (từ khi thụ thai đến 2 tuổi) là giai đoạn quyết định cho phát triển thể chất, não bộ và sức khỏe về sau.</p>

<h2>Trẻ sơ sinh (0–28 ngày)</h2>
<ul>
<li><strong>Cân nặng</strong> lúc sinh bình thường 2,5–4 kg; <strong>thấp hơn 2,5 kg là nhẹ cân</strong>. Trong vài ngày đầu trẻ có thể giảm 7–10% cân nặng và lấy lại cân nặng lúc sinh vào khoảng 10–14 ngày.</li>
<li><strong>Bú:</strong> 8–12 lần mỗi 24 giờ, theo nhu cầu, cả ngày lẫn đêm.</li>
<li><strong>Dấu hiệu bú đủ:</strong> từ ngày thứ 5 trở đi có ít nhất 6 tã ướt mỗi ngày, đi phân vàng, tăng cân, tỉnh táo sau bú.</li>
<li><strong>Ngủ:</strong> 14–17 giờ mỗi ngày, thức dậy nhiều lần.</li>
<li><strong>Cuống rốn:</strong> giữ sạch và khô, để hở, rụng sau 1–2 tuần; không đắp thuốc, không băng kín. Đến viện nếu rốn đỏ lan rộng, chảy mủ, hôi, sốt.</li>
<li><strong>Vàng da sinh lý</strong> (ngày 2–5, tự hết sau 1–2 tuần) rất hay gặp. <strong>Vàng da nguy hiểm</strong> khi xuất hiện trong 24 giờ đầu, lan nhanh xuống bụng, chân, lòng bàn tay - bàn chân, kéo dài trên 2 tuần, phân bạc màu, nước tiểu sậm, trẻ bú kém, li bì. Cần đến cơ sở y tế. Tắm nắng không còn được khuyến cáo vì không hiệu quả tin cậy và có nguy cơ.</li>
<li><strong>Sàng lọc sơ sinh:</strong> lấy máu gót chân (suy giáp bẩm sinh, thiếu G6PD, tăng sản thượng thận, phenylketon niệu…), sàng lọc nghe, đo SpO₂ tìm bệnh tim bẩm sinh nặng. Nên thực hiện theo khuyến cáo.</li>
<li><strong>Tiêm chủng:</strong> viêm gan B và BCG (xem bài Vaccine).</li>
</ul>
<div class="box danger"><b>Trẻ sơ sinh: đến viện ngay nếu</b>
<ul>
<li>Sốt từ 38 °C hoặc thân nhiệt dưới 36,5 °C</li>
<li>Bú kém hoặc bỏ bú, li bì khó đánh thức, khóc thét không dỗ được</li>
<li>Thở nhanh (từ 60 lần/phút), rút lõm ngực, tím, ngưng thở</li>
<li>Vàng da sớm hoặc lan rộng, phân bạc màu; nôn dịch xanh hoặc máu; bụng chướng</li>
<li>Co giật; không đi tiểu trên 8 giờ; rốn sưng đỏ, chảy mủ</li>
</ul></div>
<h3>Ngủ an toàn để phòng đột tử ở trẻ sơ sinh (SIDS)</h3>
<ul>
<li>Luôn đặt trẻ <strong>nằm ngửa</strong>, trên bề mặt phẳng và chắc, không gối, chăn dày, thú nhồi bông, thành giường mềm.</li>
<li>Cho trẻ ngủ <strong>cùng phòng nhưng không chung giường</strong> (nhất là khi cha mẹ mệt, uống rượu, hút thuốc, hoặc trẻ dưới 4 tháng); không để trẻ ngủ trên ghế sofa, ghế bành.</li>
<li>Không hút thuốc trong nhà; không mặc, đắp quá ấm; bú mẹ làm giảm nguy cơ.</li>
</ul>

<h2>Nuôi con bằng sữa mẹ</h2>
<ul>
<li>WHO khuyến cáo <strong>bú sữa mẹ hoàn toàn trong 6 tháng đầu</strong> (không cần thêm nước, sữa công thức hay thức ăn khác), sau đó ăn dặm và tiếp tục bú đến 2 tuổi hoặc lâu hơn. Bú mẹ giảm nhiễm trùng (tiêu chảy, viêm tai, viêm phổi), tăng cường gắn kết, giảm nguy cơ béo phì, tiểu đường sau này, và có lợi cho mẹ (giảm nguy cơ ung thư vú, buồng trứng, băng huyết).</li>
<li><strong>Sữa non</strong> (vài ngày đầu) rất giàu kháng thể, dù ít nhưng đủ: đừng bỏ.</li>
<li><strong>Bắt đầu sớm:</strong> cho bú trong giờ đầu sau sinh, tiếp xúc da kề da.</li>
</ul>
[[img:breastfeed|Tư thế bế ngang (cradle hold) khi cho con bú.]]
[[img:latch|Ngậm bắt vú đúng và sai: đúng khi miệng mở rộng, ngậm cả quầng vú, môi dưới hướng ra ngoài.]]
<ul>
<li><strong>Ngậm bắt vú đúng</strong> là chìa khóa: miệng mở to, ngậm sâu cả quầng vú, cằm sát vú, má tròn; mẹ không đau nhói; nghe tiếng nuốt.</li>
<li>Nứt đầu vú, tắc tia sữa, viêm vú thường do ngậm sai hoặc bú không thường xuyên; cần chườm ấm, cho bú thường xuyên, massage nhẹ, nhờ tư vấn viên sữa mẹ; nếu sốt, vú đỏ nóng đau nhiều cần đi khám.</li>
<li><strong>Bổ sung vitamin D</strong> 400 IU mỗi ngày cho trẻ bú mẹ (theo khuyến cáo nhi khoa).</li>
<li>Mẹ đi làm: vắt, trữ sữa (ngăn mát 4 °C dưới 4 ngày; ngăn đá thường 3–6 tháng; sữa đã rã đông dùng trong 24 giờ); hỗ trợ của gia đình và nơi làm việc rất quan trọng.</li>
<li>Hầu hết thuốc thông dụng an toàn khi cho con bú nhưng cần hỏi bác sĩ; mẹ nên tránh rượu và hút thuốc. Chỉ một số ít trường hợp (mẹ nhiễm HIV không điều trị, một số bệnh/ thuốc đặc biệt, galactosemia ở trẻ) không được cho bú.</li>
<li><strong>Sữa công thức:</strong> lựa chọn thay thế khi không thể/không muốn cho bú; pha chính xác theo hướng dẫn trên bao bì, dùng nước đã đun sôi (để nguội còn khoảng 70 °C theo khuyến cáo WHO để diệt khuẩn trong bột sữa rồi làm nguội), rửa và tiệt trùng dụng cụ, không pha loãng hoặc đặc hơn, bỏ sữa thừa sau 1–2 giờ. Không cho trẻ dưới 1 tuổi uống sữa bò tươi thay cho sữa mẹ/công thức.</li>
</ul>

<h2>Ăn dặm</h2>
<ul>
<li><strong>Bắt đầu khi trẻ tròn 6 tháng</strong> (không sớm hơn 4 tháng), khi trẻ ngồi được có hỗ trợ, giữ được cổ, tỏ ra thích thú với thức ăn.</li>
<li>Bắt đầu từ thức ăn mềm, nghiền nhuyễn rồi tăng dần độ thô: nghiền (6–7 tháng), nhỏ hạt (8–9 tháng), thức ăn miếng mềm (9–12 tháng), thức ăn gia đình cắt nhỏ (từ 12 tháng).</li>
<li><strong>Nhu cầu sắt tăng mạnh</strong> từ 6 tháng: ưu tiên thịt, gan, cá, lòng đỏ trứng, đậu, rau xanh đậm; kết hợp vitamin C; bột/cháo nên có đạm, dầu/mỡ tốt, rau.</li>
<li>Cho ăn 2–3 bữa ở 6–8 tháng, 3–4 bữa + 1–2 bữa phụ từ 9–24 tháng, tiếp tục bú mẹ.</li>
<li><strong>Nguyên tắc:</strong> tập cho trẻ ăn đủ nhóm chất, đa dạng thực phẩm, nhiều màu sắc; cho ăn theo tín hiệu đói - no của trẻ (không ép, không dỗ dành bằng màn hình); thử thực phẩm mới nhiều lần (có thể 8–15 lần); trẻ tự cầm nắm thức ăn.</li>
<li><strong>Không cho:</strong> mật ong (dưới 1 tuổi, nguy cơ ngộ độc botulinum), muối, nước mắm, bột ngọt, đường thêm vào (trong năm đầu), nước ngọt, trà sữa, nước trái cây đóng hộp; sữa bò tươi làm đồ uống chính trước 12 tháng; thức ăn gây hóc (hạt nguyên, nho nguyên quả, kẹo cứng, hạt đậu phộng, xúc xích tròn, táo sống cắt miếng cứng).</li>
<li>Dị ứng thực phẩm: theo khuyến cáo hiện nay, <strong>cho tiếp xúc sớm</strong> với trứng, đậu phộng (dạng bơ loãng, không cho nguyên hạt) khoảng 4–6 tháng tuổi giúp giảm nguy cơ dị ứng; trẻ bị chàm nặng hoặc dị ứng thực phẩm cần tư vấn trước.</li>
<li>Uống nước: từ 6 tháng có thể uống một ít nước đun sôi để nguội nhỏ ngụm khi ăn.</li>
<li><strong>Biếng ăn</strong> là rất thường gặp ở trẻ 1–5 tuổi, thường là lành tính; tạo thói quen, bữa ăn vui vẻ, không ép, hạn chế bánh kẹo, sữa, nước trái cây trước bữa ăn; khám nếu trẻ không tăng cân, chậm lớn.</li>
</ul>

<h2>Tăng trưởng và phát triển</h2>
<ul>
<li><strong>Biểu đồ tăng trưởng của WHO</strong> (cân nặng, chiều cao, chu vi vòng đầu, BMI theo tuổi): được ghi trong sổ theo dõi sức khỏe; quan trọng là xu hướng theo thời gian chứ không phải một con số. <strong>Thấp còi (chiều cao theo tuổi thấp), suy dinh dưỡng gầy còm, thừa cân - béo phì</strong> đều cần can thiệp sớm.</li>
<li>Cân nặng trung bình gấp đôi khoảng 5–6 tháng, gấp ba lúc 12 tháng; chiều dài tăng khoảng 25 cm năm đầu.</li>
</ul>
<table>
<tr><th>Tuổi</th><th>Mốc phát triển thường gặp (hầu hết trẻ đạt được)</th></tr>
<tr><td>2 tháng</td><td>Cười đáp lại, nhìn theo mặt người, ngẩng đầu ngắn khi nằm sấp</td></tr>
<tr><td>4 tháng</td><td>Giữ vững đầu, cười thành tiếng, với tay về vật, lật</td></tr>
<tr><td>6 tháng</td><td>Lật hai chiều, ngồi có hỗ trợ, bập bẹ, nhận ra người quen</td></tr>
<tr><td>9 tháng</td><td>Ngồi vững, bò, bám đứng, phản ứng khi gọi tên, bập bẹ "ba", "mẹ" không rõ nghĩa</td></tr>
<tr><td>12 tháng</td><td>Đứng bám đi men, vẫy tay chào, chỉ tay, nói 1–2 từ có nghĩa, bắt chước</td></tr>
<tr><td>18 tháng</td><td>Đi vững, nói vài từ đơn (khoảng 10 từ), chỉ vào vật khi được hỏi, tự xúc thìa</td></tr>
<tr><td>2 tuổi</td><td>Chạy, nói câu 2 từ, làm theo chỉ dẫn đơn giản, chơi cạnh trẻ khác</td></tr>
<tr><td>3 tuổi</td><td>Nói câu 3 từ trở lên, người lạ hiểu khoảng 3/4 lời, đạp xe ba bánh, chơi giả vờ</td></tr>
<tr><td>4–5 tuổi</td><td>Nói rõ câu, kể chuyện đơn giản, vẽ hình người, chơi theo luật, tự mặc quần áo</td></tr>
</table>
<div class="box warn"><b>Khi nào cần đánh giá phát triển sớm</b>
<ul>
<li>Mất kỹ năng đã có ở bất kỳ tuổi nào</li>
<li>Không cười đáp lại, không nhìn theo mặt người khi 3–4 tháng</li>
<li>Không bập bẹ lúc 9–12 tháng; không chỉ tay, không đáp lại khi gọi tên lúc 12 tháng; ít giao tiếp bằng mắt</li>
<li>Không đi được lúc 18 tháng; không nói từ nào có nghĩa lúc 16–18 tháng; không nói câu hai từ lúc 24 tháng</li>
<li>Quá cứng hoặc quá mềm nhão; bất đối xứng tay chân; nghi ngờ thị lực, thính lực</li>
</ul>
<p>Các rối loạn như <strong>rối loạn phổ tự kỷ, chậm phát triển ngôn ngữ, ADHD, khó khăn học tập</strong> cần được phát hiện và can thiệp sớm, có thể thay đổi rất nhiều kết quả. Đừng "đợi trẻ lớn lên sẽ tự hết" nếu có dấu hiệu nghi ngờ.</p></div>
<h3>Giấc ngủ, vận động và màn hình</h3>
<ul>
<li>Nhu cầu ngủ theo tuổi: xem bài Giấc ngủ.</li>
<li><strong>Vận động:</strong> trẻ nhỏ cần được chơi, bò, vận động tự do mỗi ngày; từ 5 đến 17 tuổi cần trung bình 60 phút mỗi ngày vận động cường độ vừa đến mạnh.</li>
<li><strong>Thời gian dùng màn hình:</strong> WHO và nhiều hiệp hội nhi khoa khuyến cáo <strong>không cho trẻ dưới 2 tuổi xem màn hình</strong> (trừ gọi video với người thân); trẻ 2–5 tuổi không quá 1 giờ mỗi ngày với nội dung phù hợp, có người lớn cùng xem; với trẻ lớn, đặt giới hạn hợp lý, không dùng màn hình trước khi ngủ và trong bữa ăn. Thay bằng trò chuyện, đọc sách, chơi ngoài trời.</li>
</ul>

<h2>Bệnh thường gặp ở trẻ</h2>
<ul>
<li>Trẻ nhỏ có thể bị cảm lạnh <strong>6–8 lần mỗi năm</strong> (nhiều hơn nếu đi nhà trẻ), điều này là bình thường; kháng sinh không chữa được bệnh do virus.</li>
<li><strong>Sốt:</strong> xem bài Bệnh thường gặp (ngưỡng, cách hạ sốt, co giật do sốt, dấu hiệu nặng).</li>
<li><strong>Viêm tai giữa:</strong> đau tai, quấy khóc, sốt, kéo tai, sau cảm lạnh; nhiều ca tự khỏi; cần khám để quyết định dùng kháng sinh.</li>
<li><strong>Viêm họng, viêm amiđan, viêm phế quản, viêm tiểu phế quản (RSV), viêm phổi:</strong> xem bài Hô hấp; trẻ thở nhanh, rút lõm lồng ngực là dấu hiệu nặng.</li>
<li><strong>Tiêu chảy, nôn:</strong> bù nước bằng oresol, tiếp tục cho ăn, bú; kẽm; dấu hiệu mất nước; xem bài Bệnh thường gặp.</li>
<li><strong>Tay chân miệng, sốt xuất huyết, sởi, thủy đậu:</strong> xem bài Bệnh truyền nhiễm.</li>
<li><strong>Dị ứng, hen, chàm (viêm da cơ địa):</strong> giữ ẩm da, tránh chất kích ứng, theo hướng dẫn bác sĩ.</li>
<li><strong>Giun sán:</strong> tẩy giun định kỳ theo khuyến cáo địa phương (thường 6 tháng một lần từ 2 tuổi).</li>
<li><strong>Thiếu máu thiếu sắt, còi xương (thiếu vitamin D)</strong> phổ biến: ăn đủ sắt, bổ sung vitamin D, cho trẻ ra nắng hợp lý.</li>
<li><strong>Dùng thuốc cho trẻ:</strong> liều tính theo cân nặng, dùng dụng cụ đong chính xác; không dùng aspirin; không tự dùng kháng sinh, thuốc ho cảm không kê đơn cho trẻ nhỏ; giữ thuốc xa tầm tay.</li>
</ul>
<div class="box danger"><b>Đưa trẻ đến cấp cứu ngay khi</b>
<ul>
<li>Khó thở, thở nhanh, rút lõm lồng ngực, tím tái, ngưng thở</li>
<li>Li bì, khó đánh thức, không phản ứng, co giật, cứng cổ, thóp phồng</li>
<li>Phát ban đốm xuất huyết không mất khi ấn; sốt kèm mệt lả</li>
<li>Mất nước nặng (không uống được, không tiểu, mắt trũng, tay chân lạnh); nôn liên tục, nôn dịch xanh; nôn ra máu; phân có máu nhiều</li>
<li>Đau bụng dữ dội, bụng cứng, đau tinh hoàn đột ngột</li>
<li>Nuốt phải dị vật (đặc biệt pin cúc áo, nam châm), hóa chất, thuốc; ngộ độc; bỏng diện rộng; chấn thương đầu có nôn, lơ mơ</li>
<li>Sốt ở trẻ dưới 3 tháng</li>
</ul></div>

<h2>Phòng tránh tai nạn thương tích</h2>
<p>Tai nạn thương tích (đuối nước, tai nạn giao thông, bỏng, ngã, ngộ độc, hóc dị vật) là <strong>nguyên nhân tử vong hàng đầu ở trẻ trên 1 tuổi</strong>, phần lớn phòng được.</p>
<ul>
<li><strong>Đuối nước:</strong> đặc biệt ở trẻ nông thôn. Không để trẻ một mình gần nước (kể cả xô, chậu, bồn tắm, ao hồ, kênh rạch); giám sát trong tầm tay; rào chắn ao, hố nước; dạy bơi và kỹ năng an toàn dưới nước từ 4–6 tuổi; áo phao khi đi thuyền.</li>
<li><strong>Giao thông:</strong> đội mũ bảo hiểm đạt chuẩn và cài quai đúng cho trẻ khi đi xe máy (trẻ từ 6 tuổi trở lên bắt buộc); ghế an toàn dành cho trẻ khi đi ô tô (phù hợp tuổi, cân nặng, không ngồi ghế trước khi còn nhỏ); không để trẻ đứng trên xe máy, không chở quá đông.</li>
<li><strong>Bỏng:</strong> nước sôi, nồi canh nóng, bàn ủi, bếp; đặt nhiệt độ nước tắm khoảng 37 °C, thử bằng khuỷu tay; để nồi cơm, phích nước xa tầm tay.</li>
<li><strong>Ngã:</strong> rào cầu thang, cửa sổ, ban công; không để trẻ nằm một mình trên giường cao, sofa; nôi, cũi an toàn.</li>
<li><strong>Ngộ độc:</strong> cất thuốc, hóa chất, thuốc trừ sâu, chất tẩy rửa, xăng, dầu vào tủ khóa; không để trong chai nước ngọt.</li>
<li><strong>Hóc, nghẹn:</strong> xem bài Sơ cứu; tránh đồ chơi có chi tiết nhỏ dưới 3 tuổi.</li>
<li><strong>Điện:</strong> che ổ điện; <strong>cháy nổ</strong>: bình gas, bật lửa, pháo; <strong>xe ô tô nóng</strong>: không bao giờ để trẻ trong xe đóng kín.</li>
<li><strong>Bạo lực, xâm hại:</strong> dạy trẻ về an toàn thân thể ("vùng riêng tư", quyền nói "không", nói với người lớn tin cậy); nhận biết dấu hiệu xâm hại (thay đổi hành vi, sợ hãi, vết thương không giải thích được); <strong>tổng đài quốc gia bảo vệ trẻ em 111</strong> (miễn phí, 24/7). Không đánh đòn, không làm nhục trẻ: bạo lực thể chất gây tổn hại tâm lý, không mang lại hiệu quả giáo dục lâu dài.</li>
</ul>

<h2>Mắt, răng, tai</h2>
<ul>
<li><strong>Cận thị</strong> đang tăng nhanh ở trẻ châu Á. Nên cho trẻ <strong>ngoài trời ít nhất 2 giờ mỗi ngày</strong>, giảm thời gian nhìn gần (điện thoại, sách), quy tắc 20-20-20, học nơi đủ sáng, khám mắt định kỳ, kính đúng độ; một số phương pháp (atropine liều thấp, kính chuyên dụng) làm chậm tiến triển theo chỉ định bác sĩ.</li>
<li><strong>Răng:</strong> răng đầu tiên mọc lúc 6 tháng (có thể 4–12 tháng); đánh răng với kem chứa fluoride ngay từ khi mọc răng (xem bài Vệ sinh); khám răng từ 1 tuổi; bỏ bình sữa ban đêm, tránh cho ngậm đường.</li>
<li><strong>Thính lực:</strong> kiểm tra nếu trẻ không phản ứng với âm thanh, chậm nói, hay viêm tai.</li>
</ul>

<h2>Tuổi dậy thì và thanh thiếu niên</h2>
<ul>
<li><strong>Dậy thì</strong> thường bắt đầu ở nữ 8–13 tuổi (nở ngực, rồi có kinh sau khoảng 2–2,5 năm), ở nam 9–14 tuổi (tinh hoàn to lên), kèm thay đổi cơ thể, mụn, mùi cơ thể, tâm trạng. <strong>Dậy thì sớm</strong> (nữ trước 8 tuổi, nam trước 9 tuổi) cần khám.</li>
<li>Nói chuyện cởi mở, không né tránh về thay đổi cơ thể, vệ sinh, kinh nguyệt, xuất tinh, tình cảm, an toàn thân thể và sự đồng thuận. Giáo dục giới tính toàn diện giúp trẻ bảo vệ bản thân và <em>không</em> làm tăng quan hệ tình dục sớm.</li>
<li><strong>Dinh dưỡng, vận động, giấc ngủ (8–10 giờ):</strong> bữa sáng đầy đủ, canxi, sắt (nhất là bé gái khi có kinh), hạn chế nước ngọt, thức ăn nhanh.</li>
<li><strong>Sức khỏe tinh thần:</strong> lo âu, trầm cảm, tự làm đau bản thân, rối loạn ăn uống, bắt nạt (kể cả trên mạng) rất thường gặp. Dấu hiệu: buồn kéo dài, cáu gắt, rút lui, sa sút học tập, thay đổi ăn ngủ, nói về cái chết. Hãy lắng nghe, không phán xét, tìm sự hỗ trợ chuyên môn sớm.</li>
<li><strong>Nguy cơ:</strong> hút thuốc lá, thuốc lá điện tử, rượu, ma túy, lái xe nguy hiểm, quan hệ tình dục không an toàn, mạng xã hội. Tiêm HPV, tiêm nhắc các vaccine cho tuổi vị thành niên.</li>
</ul>

<h2>Khám sức khỏe định kỳ cho trẻ</h2>
<p>Đưa trẻ đi khám theo lịch: sơ sinh, 1 tháng, 2, 4, 6, 9, 12, 15, 18, 24 tháng, rồi hằng năm; các mốc này kết hợp tiêm chủng, theo dõi tăng trưởng - phát triển, tư vấn dinh dưỡng, an toàn. Mang theo sổ tiêm chủng và sổ theo dõi sức khỏe; chuẩn bị các thắc mắc của bạn.</p>
<div class="box tip"><b>Tóm tắt dành cho cha mẹ</b>
<ul>
<li>Sữa mẹ 6 tháng đầu, ăn dặm đúng cách, đủ sắt và vitamin D.</li>
<li>Tiêm chủng đúng lịch; theo dõi tăng trưởng, phát triển; phát hiện sớm chậm phát triển.</li>
<li>Nhận biết dấu hiệu nguy hiểm; không tự ý dùng kháng sinh; dùng thuốc theo cân nặng.</li>
<li>An toàn: nước, giao thông, bỏng, ngã, ngộ độc, hóc; ngủ an toàn.</li>
<li>Yêu thương, trò chuyện, đọc sách cùng con; hạn chế màn hình; không bạo lực.</li>
</ul></div>
`
});
