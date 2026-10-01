// Sức Khỏe - Kiến thức nâng cao (phần 1: chủ đề 26-29)
window.HEALTH_TOPICS = window.HEALTH_TOPICS || [];

window.HEALTH_TOPICS.push({
    id: 'lab-tests', order: 26, section: 'advanced', icon: '🧪',
    title: 'Đọc kết quả xét nghiệm và chẩn đoán hình ảnh',
    summary: 'Công thức máu, sinh hóa gan - thận - mỡ máu, tuyến giáp, nước tiểu, marker ung thư, siêu âm - X-quang - CT - MRI và cách hiểu kết quả.',
    keywords: 'xét nghiệm máu công thức máu hồng cầu bạch cầu tiểu cầu hemoglobin men gan creatinin egfr acid uric tsh crp nước tiểu siêu âm x-quang ct mri kết quả bất thường',
    sources: ['Tietz Textbook of Clinical Chemistry and Molecular Diagnostics (khoảng tham chiếu)', 'KDIGO; ATA; ADA; AHA - Hướng dẫn xét nghiệm', 'ACR - Appropriateness Criteria; WHO - Medical imaging and radiation', 'Bộ Y tế Việt Nam - Hướng dẫn quy trình kỹ thuật xét nghiệm; Quy chế chẩn đoán hình ảnh'],
    html: `
<p>Xét nghiệm là công cụ hỗ trợ chẩn đoán, không phải "bản án". Một kết quả chỉ có ý nghĩa khi được đặt trong bối cảnh: triệu chứng, khám lâm sàng, tiền sử và diễn biến theo thời gian. Bài này giúp bạn hiểu các chỉ số phổ biến và đặt câu hỏi đúng với bác sĩ, <strong>không</strong> để tự chẩn đoán.</p>

<div class="box info"><b>Khoảng tham chiếu là gì?</b>
<ul>
<li>Là khoảng giá trị của <strong>95% người khỏe mạnh</strong>; vì vậy có khoảng 1 trên 20 người khỏe mạnh lệch nhẹ ở một chỉ số nào đó mà không có bệnh (và nếu xét nhiều chỉ số cùng lúc, khả năng ít nhất một chỉ số "lệch" còn cao hơn).</li>
<li>Khoảng tham chiếu thay đổi theo <strong>giới, tuổi, phòng xét nghiệm, phương pháp, đơn vị đo</strong>. Hãy dùng khoảng ghi trên phiếu kết quả của chính phòng xét nghiệm đó.</li>
<li>Mức độ lệch và xu hướng theo thời gian quan trọng hơn việc "có dấu H/L hay không".</li>
<li>Các con số dưới đây chỉ mang tính tham khảo cho người lớn.</li>
</ul></div>

<h2>Công thức máu toàn phần (CBC)</h2>
[[img:bloodcells|Các thành phần hữu hình của máu: hồng cầu, bạch cầu (các loại) và tiểu cầu.]]
<table>
<tr><th>Chỉ số</th><th>Tham chiếu điển hình</th><th>Ý nghĩa khi bất thường</th></tr>
<tr><td>Hemoglobin (Hb)</td><td>Nam 13–17 g/dL; nữ 12–15,5 g/dL</td><td><strong>Thấp = thiếu máu</strong> (thiếu sắt, B12, folate, thalassemia, mất máu, bệnh mạn, bệnh tủy). Cao: mất nước, hút thuốc, sống vùng cao, ngưng thở khi ngủ, bệnh đa hồng cầu</td></tr>
<tr><td>Hematocrit (Hct)</td><td>Nam 40–52%; nữ 36–47%</td><td>Tăng trong mất nước, sốt xuất huyết (cô đặc máu, dấu hiệu thoát huyết tương)</td></tr>
<tr><td>MCV (thể tích trung bình hồng cầu)</td><td>80–100 fL</td><td><strong>Thấp (&lt;80):</strong> thiếu sắt, thalassemia (phổ biến ở Việt Nam). <strong>Cao (&gt;100):</strong> thiếu B12/folate, rượu, bệnh gan, suy giáp, thuốc</td></tr>
<tr><td>Bạch cầu (WBC)</td><td>4–10 G/L (4.000–10.000/µL)</td><td>Tăng: nhiễm khuẩn, viêm, stress, corticoid, hút thuốc, bệnh máu. Giảm: nhiễm virus, thuốc, bệnh tủy, tự miễn</td></tr>
<tr><td>Bạch cầu trung tính</td><td>40–70% (1,8–7 G/L)</td><td>Tăng thường gặp nhiễm khuẩn; giảm nặng (&lt;0,5 G/L) nguy cơ nhiễm trùng nặng</td></tr>
<tr><td>Bạch cầu lympho</td><td>20–40%</td><td>Tăng thường gặp nhiễm virus (ho gà, quai bị, EBV…)</td></tr>
<tr><td>Bạch cầu ái toan</td><td>1–4%</td><td>Tăng: dị ứng, hen, ký sinh trùng (giun sán), một số thuốc</td></tr>
<tr><td>Tiểu cầu</td><td>150–400 G/L</td><td>Giảm: sốt xuất huyết, thuốc, tự miễn, bệnh gan, tủy; dưới 50 có nguy cơ chảy máu, dưới 20 rất nguy hiểm. Tăng: phản ứng viêm, thiếu sắt, bệnh máu</td></tr>
<tr><td>Ferritin</td><td>Nam 30–400 ng/mL; nữ 15–150 ng/mL</td><td>Thấp: thiếu sắt (sớm nhất). Cao: viêm, bệnh gan, quá tải sắt (ferritin tăng không luôn là thừa sắt)</td></tr>
</table>
[[img:cbc|Kết quả công thức máu toàn phần kèm công thức bạch cầu.]]

[[img:ironanemia|Phết máu thiếu máu thiếu sắt: hồng cầu nhỏ và nhạt màu (MCV thấp), nổi bật là một bạch cầu ở giữa.]]
<h2>Sinh hóa máu</h2>
<table>
<tr><th>Nhóm</th><th>Chỉ số (tham chiếu điển hình)</th><th>Diễn giải ngắn</th></tr>
<tr><td><strong>Đường huyết</strong></td><td>Đói &lt;100 mg/dL (5,6 mmol/L); HbA1c &lt;5,7%</td><td>Xem bài Chỉ số sức khỏe và bài Tiểu đường</td></tr>
<tr><td><strong>Mỡ máu</strong></td><td>LDL-C &lt;100 mg/dL; HDL &gt;40 (nam)/&gt;50 (nữ); TG &lt;150; Cholesterol TP &lt;200 mg/dL</td><td>Xem bài Tim mạch; mục tiêu tùy nguy cơ từng người</td></tr>
<tr><td><strong>Men gan</strong></td><td>ALT, AST khoảng dưới 40 U/L; GGT, ALP; bilirubin toàn phần 0,3–1,2 mg/dL (5–21 µmol/L); albumin 3,5–5,0 g/dL</td><td>ALT/AST tăng: tổn thương tế bào gan (mỡ, virus, rượu, thuốc). AST &gt; ALT gấp 2 lần gợi ý rượu. GGT tăng: rượu, mật, thuốc. Bilirubin tăng: vàng da. Albumin thấp, INR cao: chức năng gan suy giảm</td></tr>
<tr><td><strong>Thận</strong></td><td>Creatinin: nam 0,7–1,3; nữ 0,6–1,1 mg/dL (53–115 µmol/L); <strong>eGFR ≥90</strong> mL/phút/1,73 m²; urê 2,5–7,5 mmol/L</td><td>Creatinin tăng, eGFR thấp: giảm chức năng thận (mất nước, thuốc, bệnh thận). eGFR &lt;60 kéo dài &gt;3 tháng: bệnh thận mạn. Creatinin phụ thuộc khối cơ</td></tr>
<tr><td><strong>Acid uric</strong></td><td>Nam khoảng 3,4–7,0; nữ 2,4–6,0 mg/dL (khoảng 200–420 µmol/L nam; 140–360 nữ)</td><td>Tăng: nguy cơ gout, sỏi thận; xem bài Xương khớp</td></tr>
<tr><td><strong>Điện giải</strong></td><td>Na 135–145; K 3,5–5,0; Cl 98–107; Ca 2,1–2,6 mmol/L</td><td>Rối loạn điện giải có thể nguy hiểm (K cao trên 6 hoặc rất thấp gây rối loạn nhịp; Na thấp gây lú lẫn, co giật). Cần xử trí theo bác sĩ</td></tr>
<tr><td><strong>Tuyến giáp</strong></td><td>TSH khoảng 0,4–4,0 mIU/L; FT4 bình thường</td><td><strong>TSH cao + FT4 thấp = suy giáp</strong>; TSH thấp + FT4 cao = cường giáp; TSH hơi cao và FT4 bình thường = suy giáp cận lâm sàng (cần theo dõi/điều trị theo hoàn cảnh)</td></tr>
<tr><td><strong>Viêm</strong></td><td>CRP &lt;5 mg/L (hs-CRP &lt;1–3 mg/L); máu lắng (ESR) nam &lt;15–20, nữ &lt;20–25 mm/giờ</td><td>CRP tăng nhanh trong nhiễm trùng (đặc biệt vi khuẩn), viêm; không cho biết nguyên nhân. ESR tăng chậm, không đặc hiệu</td></tr>
<tr><td><strong>Vitamin</strong></td><td>Vitamin D 25(OH)D &gt;20 ng/mL; B12 khoảng 200–900 pg/mL</td><td>Thiếu thường do chế độ ăn hoặc kém hấp thu; bổ sung theo chỉ định</td></tr>
<tr><td><strong>Tim</strong></td><td>Troponin hs: dưới ngưỡng phòng xét nghiệm; NT-proBNP thấp</td><td>Troponin tăng: tổn thương cơ tim (nhồi máu cơ tim, viêm cơ tim...), cần cấp cứu. BNP/NT-proBNP tăng: suy tim</td></tr>
<tr><td><strong>Đông máu</strong></td><td>PT/INR ~0,8–1,2; aPTT 25–35 giây</td><td>INR là chỉ số theo dõi thuốc warfarin (mục tiêu thường 2–3). D-dimer tăng không đặc hiệu; dùng để loại trừ huyết khối khi âm tính</td></tr>
</table>

[[img:thyroid|Trục điều hòa tuyến giáp: vùng dưới đồi (TRH) kích thích tuyến yên (TSH), tuyến yên kích thích tuyến giáp tiết T3, T4; T3, T4 cao sẽ ức chế ngược (phản hồi âm).]]
<h2>Nước tiểu</h2>
<p>Xét nghiệm nước tiểu cho nhiều thông tin về thận, đường tiết niệu, đường huyết. <strong>Lấy nước tiểu giữa dòng</strong> (bỏ phần đầu, lấy giữa, sau khi rửa sạch vùng sinh dục) để tránh nhiễm bẩn.</p>
[[img:dipstick|Que thử nước tiểu đổi màu theo từng chỉ số.]]
<table>
<tr><th>Chỉ số</th><th>Bình thường</th><th>Khi dương tính</th></tr>
<tr><td>Bạch cầu, nitrit</td><td>Âm tính</td><td>Gợi ý nhiễm trùng tiểu (cần cấy nước tiểu khi nghi ngờ)</td></tr>
<tr><td>Hồng cầu (máu)</td><td>Âm tính</td><td>Sỏi, nhiễm trùng, bệnh cầu thận, u; có thể do đang hành kinh. Đái máu thấy bằng mắt luôn cần khám</td></tr>
<tr><td>Protein / albumin</td><td>Âm tính/vết; albumin/creatinin niệu &lt;30 mg/g</td><td>Tổn thương thận (tiểu đường, tăng huyết áp, viêm cầu thận); cũng tăng tạm thời khi sốt, gắng sức</td></tr>
<tr><td>Glucose</td><td>Âm tính</td><td>Đường huyết rất cao (tiểu đường) hoặc dùng thuốc SGLT2</td></tr>
<tr><td>Ceton</td><td>Âm tính</td><td>Nhịn đói, nôn, chế độ keto, tiểu đường kiểm soát kém (DKA)</td></tr>
<tr><td>Tỷ trọng, pH</td><td>1,005–1,030; 4,5–8</td><td>Đánh giá cô đặc, bệnh thận, sỏi</td></tr>
</table>

<h2>Marker ung thư (chất chỉ điểm khối u)</h2>
<p>AFP, CEA, CA 19-9, CA 125, CA 15-3, PSA… là các protein có thể tăng khi có ung thư, <strong>nhưng cũng tăng trong nhiều bệnh lành tính và có thể bình thường ở người mắc ung thư</strong>. Vì vậy <strong>không dùng để tầm soát ở người bình thường</strong> (ngoại trừ PSA được cân nhắc có chọn lọc và AFP kèm siêu âm gan ở nhóm nguy cơ cao). Chủ yếu dùng để theo dõi đáp ứng điều trị và tái phát ở người đã có chẩn đoán. Marker tăng không chẩn đoán ung thư; bác sĩ sẽ làm thêm thăm khám, hình ảnh, sinh thiết.</p>

<h2>Xét nghiệm nhiễm trùng</h2>
<ul>
<li><strong>HBsAg dương tính:</strong> đang nhiễm viêm gan B. <strong>Anti-HBs dương tính:</strong> có miễn dịch (do tiêm hoặc đã khỏi). <strong>Anti-HCV dương tính:</strong> từng nhiễm HCV, cần thử RNA HCV. <strong>HIV Ag/Ab:</strong> xét nghiệm sàng lọc, dương tính cần xác nhận. <strong>Giang mai:</strong> RPR/VDRL, TPHA.</li>
<li><strong>Thời kỳ cửa sổ:</strong> sau phơi nhiễm, xét nghiệm có thể chưa dương tính; bác sĩ sẽ hướng dẫn thời điểm làm lại.</li>
<li><strong>Dengue NS1/IgM/IgG:</strong> chẩn đoán sốt xuất huyết; kết quả âm tính sớm chưa loại trừ.</li>
<li><strong>Cấy máu, cấy đờm, cấy nước tiểu</strong> và <strong>kháng sinh đồ</strong> (S: nhạy, I: trung gian, R: kháng) giúp chọn kháng sinh đúng.</li>
</ul>

<h2>Chẩn đoán hình ảnh</h2>
<table>
<tr><th>Phương pháp</th><th>Nguyên lý</th><th>Ưu điểm</th><th>Lưu ý</th></tr>
<tr><td><strong>X-quang</strong></td><td>Tia X xuyên qua cơ thể</td><td>Nhanh, rẻ; tốt cho xương, phổi, tim</td><td>Liều bức xạ thấp (X-quang phổi khoảng 0,1 mSv) nhưng cần tránh lạm dụng; thai phụ cần báo trước</td></tr>
<tr><td><strong>Siêu âm</strong></td><td>Sóng âm phản hồi</td><td>An toàn, không bức xạ; dùng cho bụng, tuyến giáp, vú, tim, mạch máu, sản khoa; thấy theo thời gian thực</td><td>Phụ thuộc người thực hiện; khó thấy sau hơi hoặc xương; cần nhịn ăn 6–8 giờ khi siêu âm bụng</td></tr>
<tr><td><strong>CT (cắt lớp vi tính)</strong></td><td>Nhiều lát cắt tia X</td><td>Nhanh, chi tiết; quan trọng trong cấp cứu (chấn thương, đột quỵ, đau bụng, thuyên tắc phổi)</td><td>Bức xạ cao hơn (CT ngực khoảng 7 mSv, so với nền tự nhiên khoảng 2,4 mSv mỗi năm); thuốc cản quang có thể gây dị ứng, ảnh hưởng thận. Chỉ chụp khi có chỉ định rõ ràng</td></tr>
<tr><td><strong>MRI (cộng hưởng từ)</strong></td><td>Từ trường mạnh và sóng radio</td><td>Không bức xạ; rất tốt cho mô mềm (não, tủy, khớp, gan, tuyến tiền liệt, vú)</td><td>Lâu (30–60 phút), ồn, hẹp; chống chỉ định hoặc cần thận trọng với máy tạo nhịp tim, cấy ghép kim loại, ốc tai điện tử (báo trước cho nhân viên); không mang kim loại vào phòng</td></tr>
<tr><td><strong>PET/CT</strong></td><td>Chất đánh dấu phóng xạ (như FDG) + CT</td><td>Đánh giá hoạt động chuyển hóa; dùng trong ung thư</td><td>Đắt; chủ yếu theo chỉ định chuyên khoa, không dùng tầm soát cho người khỏe</td></tr>
<tr><td><strong>DXA</strong></td><td>Tia X năng lượng thấp</td><td>Đo mật độ xương</td><td>Liều bức xạ rất thấp</td></tr>
<tr><td>Nhũ ảnh, nội soi, điện tâm đồ, siêu âm tim</td><td>Chuyên biệt từng cơ quan</td><td>Xem các bài tương ứng</td><td></td></tr>
</table>
[[img:ultrasound|Máy siêu âm hiện đại: an toàn, không dùng bức xạ.]]
[[img:mri|Máy MRI: sử dụng từ trường mạnh, không có bức xạ ion hóa.]]
[[img:ctbrain|Hình ảnh cắt lớp vi tính (CT) não.]]
<ul>
<li><strong>Bác sĩ chẩn đoán hình ảnh</strong> đọc và viết kết luận; bác sĩ điều trị kết hợp với lâm sàng. Tự đọc phim dễ hiểu sai.</li>
<li><strong>Phát hiện tình cờ:</strong> khi chụp có thể thấy các tổn thương "ngoài ý muốn" (nang gan, nốt tuyến giáp, nốt phổi nhỏ...). Phần lớn lành tính; bác sĩ sẽ cân nhắc theo dõi hay làm thêm.</li>
<li>Giữ phim, đĩa CD và báo cáo để so sánh giữa các lần; không cần chụp lại nếu có thể dùng kết quả cũ.</li>
<li>Hỏi bác sĩ: chụp để trả lời câu hỏi gì? kết quả có làm thay đổi điều trị không? có lựa chọn ít bức xạ hơn không?</li>
</ul>

<h2>Những điều cần nhớ khi đọc kết quả</h2>
<ul>
<li><strong>Đừng hoảng loạn khi thấy dấu H/L:</strong> hãy xem mức lệch, liên quan triệu chứng, có lặp lại không.</li>
<li><strong>Yếu tố làm sai lệch:</strong> không nhịn ăn đúng, mất nước, vận động mạnh, rượu, thuốc, thực phẩm chức năng (biotin liều cao có thể làm sai nhiều xét nghiệm miễn dịch như hormone giáp, troponin), lấy mẫu sai, bệnh cấp tính.</li>
<li><strong>Kết quả bình thường</strong> không loại trừ bệnh (đặc biệt sớm); <strong>kết quả bất thường</strong> không đồng nghĩa có bệnh.</li>
<li>Theo dõi <strong>xu hướng</strong> qua các lần: giữ hồ sơ kết quả cũ.</li>
<li><strong>Không tự điều trị</strong> dựa trên kết quả hoặc kết quả trên mạng; đem kết quả đến bác sĩ.</li>
<li>Nếu cần: hỏi "kết quả này có ý nghĩa gì với tôi?", "có cần làm gì tiếp theo?", "khi nào làm lại?".</li>
</ul>
<div class="box danger"><b>Một số kết quả "khẩn" cần liên hệ bác sĩ hoặc cấp cứu ngay</b>
<p>Hemoglobin rất thấp (dưới khoảng 7 g/dL), tiểu cầu rất thấp (dưới 20 G/L), bạch cầu trung tính rất thấp, kali trên 6 hoặc dưới 3 mmol/L, natri dưới 125 mmol/L, đường huyết dưới 50 mg/dL hoặc trên 400–500 mg/dL, troponin tăng, INR trên 4–5, creatinin tăng nhanh, cấy máu dương tính. Phòng xét nghiệm thường gọi báo khi gặp "giá trị nguy kịch" này.</p></div>
`
});

window.HEALTH_TOPICS.push({
    id: 'mental-health', order: 27, section: 'advanced', icon: '🧠',
    title: 'Sức khỏe tinh thần và căng thẳng',
    summary: 'Stress, kiệt sức, lo âu, trầm cảm, ý nghĩ tự tử, các rối loạn thường gặp, khi nào cần giúp đỡ và cách hỗ trợ người khác.',
    keywords: 'sức khỏe tâm thần stress căng thẳng burnout kiệt sức lo âu hoảng loạn trầm cảm tự tử rối loạn ăn uống nghiện lưỡng cực tâm thần phân liệt trị liệu thuốc chống trầm cảm cortisol',
    sources: ['WHO - Mental disorders fact sheet; mhGAP Intervention Guide; Suicide prevention', 'DSM-5-TR / ICD-11 (tiêu chuẩn chẩn đoán)', 'NICE Guidelines - Depression, Anxiety; APA Practice Guidelines', 'Bộ Y tế Việt Nam - Chương trình mục tiêu quốc gia sức khỏe tâm thần; Bệnh viện Tâm thần'],
    html: `
<p>Sức khỏe tinh thần là khả năng ứng phó với căng thẳng thông thường, làm việc có ích, kết nối với người khác và đóng góp cho cộng đồng. Nó là <strong>một phần không thể tách rời của sức khỏe</strong>. Theo WHO, khoảng <strong>1 trên 8 người</strong> trên thế giới sống với một rối loạn tâm thần. Các rối loạn này là bệnh thật, có nguyên nhân sinh học - tâm lý - xã hội và <strong>điều trị được</strong>.</p>

<h2>Căng thẳng (stress)</h2>
<p>Khi gặp áp lực (căng thẳng cấp), não kích hoạt phản ứng "chiến hay chạy": tuyến thượng thận tiết adrenaline và cortisol; tim đập nhanh, huyết áp tăng, cơ căng, đường huyết tăng. Phản ứng này hữu ích trong thời gian ngắn.</p>
[[img:hpa|Trục dưới đồi - tuyến yên - thượng thận (HPA) điều khiển phản ứng stress và hormone cortisol.]]
[[img:gas|Hội chứng thích nghi chung: báo động, đề kháng, kiệt sức.]]
<ul>
<li><strong>Stress mạn tính</strong> (công việc quá tải, nợ nần, xung đột, chăm sóc người bệnh kéo dài) khiến cortisol và hệ thần kinh giao cảm hoạt động kéo dài, liên quan đến mất ngủ, đau đầu, đau cơ, rối loạn tiêu hóa, tăng huyết áp, bệnh tim mạch, đường huyết cao, suy giảm miễn dịch, tăng cân vùng bụng, lo âu, trầm cảm.</li>
<li><strong>Dấu hiệu cơ thể cảnh báo:</strong> mệt mỏi dai dẳng, khó ngủ, đau đầu căng thẳng, hồi hộp, khó tập trung, dễ cáu, ăn quá nhiều hoặc chán ăn, tăng uống rượu, hút thuốc.</li>
<li><strong>Kiệt sức nghề nghiệp (burnout)</strong>: WHO mô tả là hiện tượng nghề nghiệp gồm kiệt quệ năng lượng, thái độ tiêu cực hoặc xa cách với công việc, giảm hiệu quả làm việc. Giải pháp không chỉ nằm ở cá nhân mà còn ở môi trường làm việc (khối lượng, quyền tự chủ, ghi nhận, công bằng).</li>
</ul>
<h3>Cách ứng phó hiệu quả</h3>
<ul>
<li><strong>Vận động đều đặn:</strong> một trong những cách giảm stress và cải thiện tâm trạng mạnh nhất.</li>
<li><strong>Ngủ đủ, ăn uống đều đặn</strong>; hạn chế cà phê, rượu (rượu làm lo âu nặng hơn về sau).</li>
<li><strong>Kỹ thuật thở chậm:</strong> hít vào bằng mũi 4 giây, thở ra chậm 6 giây, lặp lại vài phút; thư giãn cơ tiến triển; thiền chú tâm, yoga, thái cực quyền (hiệu quả trung bình có bằng chứng).</li>
<li><strong>Kết nối xã hội:</strong> chia sẻ với người tin cậy; sự hỗ trợ xã hội là yếu tố bảo vệ mạnh.</li>
<li><strong>Giải quyết vấn đề thực tế:</strong> liệt kê, chia nhỏ, ưu tiên; học nói "không"; đặt ranh giới công việc - đời sống; nghỉ giải lao, nghỉ phép.</li>
<li>Dành thời gian cho sở thích, thiên nhiên, âm nhạc; ghi nhật ký; tập trung vào điều có thể kiểm soát.</li>
<li>Liệu pháp nhận thức - hành vi (CBT) giúp thay đổi cách diễn giải và phản ứng với căng thẳng.</li>
</ul>

<h2>Rối loạn lo âu</h2>
<p>Lo lắng là cảm xúc bình thường. Nó trở thành rối loạn khi <strong>quá mức, kéo dài, khó kiểm soát và ảnh hưởng sinh hoạt</strong>.</p>
<ul>
<li><strong>Rối loạn lo âu lan tỏa:</strong> lo lắng quá mức về nhiều việc trong ít nhất 6 tháng, kèm căng cơ, mệt, khó ngủ, khó tập trung.</li>
<li><strong>Cơn hoảng sợ:</strong> đột ngột sợ hãi dữ dội, hồi hộp, khó thở, đau ngực, run, vã mồ hôi, chóng mặt, cảm giác sắp chết hoặc mất kiểm soát; đạt đỉnh sau khoảng 10 phút rồi giảm. Không gây nguy hiểm tính mạng nhưng rất đáng sợ. Lần đầu có triệu chứng này nên khám để loại trừ bệnh tim, tuyến giáp... Khi cơn đến: nhắc bản thân "đây là cơn hoảng sợ, sẽ qua", thở chậm, ngồi xuống, tập trung vào giác quan (5 vật nhìn thấy, 4 vật chạm vào...).</li>
<li><strong>Ám ảnh xã hội, ám ảnh sợ đặc hiệu, rối loạn ám ảnh cưỡng chế (OCD), rối loạn căng thẳng sau sang chấn (PTSD)</strong> cũng là các dạng thường gặp.</li>
<li><strong>Điều trị:</strong> <strong>liệu pháp nhận thức - hành vi</strong> (đặc biệt liệu pháp tiếp xúc) hiệu quả và lâu dài; thuốc chống trầm cảm nhóm SSRI/SNRI; tránh lạm dụng thuốc an thần nhóm benzodiazepine (dễ lệ thuộc, chỉ ngắn hạn); thay đổi lối sống; tránh né tránh (né tránh làm lo âu nặng thêm).</li>
</ul>

<h2>Trầm cảm</h2>
<p>Trầm cảm không phải là "yếu đuối", "suy nghĩ tiêu cực" hay "thiếu ý chí". Đó là bệnh ảnh hưởng đến não, cảm xúc, suy nghĩ, cơ thể và hành vi, do tương tác của yếu tố sinh học (di truyền, hóa chất thần kinh), tâm lý (mất mát, sang chấn, cách nghĩ) và xã hội (căng thẳng, cô lập).</p>
<div class="box info"><b>Dấu hiệu gợi ý (hầu như cả ngày, gần như mỗi ngày, trong ít nhất 2 tuần)</b>
<ul>
<li>Buồn, trống rỗng <em>hoặc</em> mất hứng thú với hầu hết hoạt động (ít nhất một trong hai)</li>
<li>Thay đổi ăn uống hoặc cân nặng; mất ngủ hoặc ngủ quá nhiều</li>
<li>Mệt mỏi, mất năng lượng; chậm chạp hoặc bồn chồn</li>
<li>Cảm giác vô dụng, tội lỗi quá mức; khó tập trung, khó quyết định</li>
<li>Ý nghĩ về cái chết hoặc tự làm hại bản thân</li>
</ul>
<p>Ở người Việt, trầm cảm thường biểu hiện bằng <strong>triệu chứng cơ thể</strong>: đau đầu, đau nhức, mệt, mất ngủ, đau tim/ngực, rối loạn tiêu hóa, nên dễ bị bỏ sót. Có nhiều bệnh (tuyến giáp, thiếu máu, thuốc, sa sút trí tuệ) có triệu chứng giống nên cần bác sĩ đánh giá.</p></div>
<h3>Điều trị</h3>
<ul>
<li><strong>Trị liệu tâm lý</strong> (CBT, liệu pháp liên cá nhân, hoạt hóa hành vi) hiệu quả ngang thuốc trong trầm cảm nhẹ - vừa.</li>
<li><strong>Thuốc chống trầm cảm</strong> (SSRI như sertraline, escitalopram, fluoxetine…, SNRI, mirtazapine…): thường cần <strong>2–6 tuần</strong> để thấy tác dụng; có thể có tác dụng phụ lúc đầu (buồn nôn, đau đầu, khó ngủ, giảm ham muốn) thường giảm dần; <strong>không gây nghiện</strong>; nên tiếp tục 6–12 tháng sau khi thuyên giảm, giảm liều từ từ theo bác sĩ (ngừng đột ngột gây triệu chứng khó chịu). Ở người dưới 25 tuổi cần theo dõi sát ý nghĩ tự hại lúc bắt đầu thuốc.</li>
<li><strong>Kết hợp thuốc và trị liệu</strong> cho trầm cảm vừa - nặng; các phương pháp khác cho ca kháng trị (kích thích từ xuyên sọ, sốc điện có kiểm soát, ketamine/esketamine dưới giám sát).</li>
<li><strong>Lối sống hỗ trợ:</strong> tập thể dục (hiệu quả đáng kể ở trầm cảm nhẹ - vừa), ánh sáng ban ngày, ngủ đều, kết nối xã hội, giảm rượu, bắt đầu những hoạt động nhỏ dù chưa có hứng thú.</li>
<li>Phân biệt với <strong>rối loạn lưỡng cực</strong> (có giai đoạn hưng cảm: tăng năng lượng, ít ngủ, nói nhiều, tiêu tiền bừa bãi, quyết định liều lĩnh): thuốc chống trầm cảm đơn độc có thể làm bệnh nặng hơn, cần chẩn đoán đúng.</li>
</ul>

<h2>Ý nghĩ tự tử: cách ứng xử</h2>
<div class="box danger"><b>Nếu bạn có ý nghĩ tự làm hại bản thân</b>
<ul>
<li>Bạn không cô đơn, và cảm giác này có thể thay đổi. <strong>Hãy nói với một người bạn tin cậy ngay hôm nay</strong> và đến cơ sở y tế gần nhất hoặc gọi <strong>115</strong> nếu bạn thấy mình đang gặp nguy hiểm.</li>
<li>Giữ bản thân ở nơi an toàn, tránh xa phương tiện có thể tự hại (thuốc, hóa chất, vật sắc nhọn), không uống rượu hoặc dùng chất kích thích, đừng ở một mình.</li>
<li>Nếu bạn là trẻ em hoặc thanh thiếu niên, hãy gọi <strong>111</strong> (tổng đài quốc gia bảo vệ trẻ em) hoặc nói với cha mẹ, thầy cô, bác sĩ.</li>
</ul></div>
<h3>Khi người thân có dấu hiệu</h3>
<ul>
<li><strong>Dấu hiệu cảnh báo:</strong> nói về cái chết, muốn biến mất, là gánh nặng; tặng đồ quý, chia tay, sắp xếp hậu sự; rút lui xã hội, thay đổi tính tình đột ngột; tăng rượu, ma túy; sau mất mát lớn (mất việc, chia tay, mất người thân); bình tĩnh đột ngột sau giai đoạn trầm cảm sâu.</li>
<li><strong>Hãy hỏi thẳng</strong>: "Bạn có đang nghĩ đến việc tự tử không?" Hỏi <em>không</em> làm tăng nguy cơ mà thường làm người đó nhẹ nhõm.</li>
<li>Lắng nghe không phán xét, không hứa giữ bí mật nếu tính mạng bị đe dọa; ở bên cạnh; dời phương tiện nguy hiểm; <strong>đưa đến cơ sở y tế hoặc gọi 115</strong> nếu nguy cơ tức thời; nối với chuyên gia.</li>
</ul>

<h2>Các vấn đề tâm thần khác</h2>
<ul>
<li><strong>Tâm thần phân liệt:</strong> ảo giác (nghe tiếng nói), hoang tưởng, suy nghĩ rối loạn, rút lui. Điều trị bằng thuốc chống loạn thần kết hợp phục hồi tâm lý - xã hội; nhiều người sống ổn định, làm việc. Người bệnh hiếm khi bạo lực, thường là nạn nhân hơn là thủ phạm.</li>
<li><strong>Rối loạn ăn uống:</strong> chán ăn tâm thần, ăn vô độ, ăn rồi nôn; lo lắng ám ảnh về cân nặng, hình thể; nguy hiểm về thể chất (rối loạn điện giải, tim, xương), tỷ lệ tử vong cao; cần điều trị chuyên khoa đa ngành sớm.</li>
<li><strong>Nghiện (rối loạn sử dụng chất):</strong> rượu, thuốc lá, ma túy, thuốc an thần, cờ bạc, game. Là bệnh não mạn tính, có điều trị (tư vấn, thuốc thay thế như methadone, điều trị cai). <strong>Cai rượu nặng</strong> có thể gây co giật, mê sảng rượu (cấp cứu), không tự ngừng đột ngột ở người uống nhiều. Giảm tác hại và hỗ trợ không kỳ thị giúp người nghiện tiếp cận điều trị.</li>
<li><strong>ADHD</strong> (tăng động giảm chú ý) cũng gặp ở người lớn; điều trị bằng thuốc, kỹ năng, tâm lý.</li>
<li><strong>Đau buồn mất người thân:</strong> là phản ứng bình thường, có thể kéo dài nhiều tháng; nếu nhớ thương dữ dội, mất chức năng trên 12 tháng (hội chứng đau buồn kéo dài) hoặc có ý nghĩ tự tử thì cần giúp đỡ chuyên môn.</li>
<li><strong>Sức khỏe tinh thần và sức khỏe thể chất liên quan hai chiều:</strong> trầm cảm làm tăng nguy cơ bệnh tim mạch, tiểu đường; bệnh mạn tính làm tăng nguy cơ trầm cảm; ngủ kém, rượu, thuốc lá làm nặng hơn cả hai.</li>
</ul>

<h2>Kỳ thị và cách tìm giúp đỡ</h2>
<ul>
<li>Ở Việt Nam, nhiều người ngại đi khám tâm thần vì sợ bị kỳ thị hoặc nghĩ đó là "yếu đuối", "bị điên". Tìm giúp đỡ sớm là dấu hiệu của sự mạnh mẽ; bệnh được điều trị sớm thường nhẹ hơn và hồi phục tốt hơn.</li>
<li><strong>Ai làm gì:</strong> <em>bác sĩ tâm thần</em> (chẩn đoán, kê thuốc, trị liệu); <em>nhà tâm lý lâm sàng</em> (đánh giá, trị liệu tâm lý); <em>tham vấn viên</em> (hỗ trợ, tư vấn); <em>bác sĩ gia đình</em> (sàng lọc, điều trị ban đầu, giới thiệu). Hãy tìm cơ sở có giấy phép, khoa tâm thần/ tâm lý ở bệnh viện, trung tâm sức khỏe tâm thần.</li>
<li>Thảo luận bí mật thông tin với chuyên gia; bạn có quyền hỏi về phương pháp, thời gian, chi phí, tác dụng phụ.</li>
<li>Ứng dụng và tư vấn trực tuyến có thể hỗ trợ nhưng không thay thế đánh giá chuyên môn khi bệnh nặng; thận trọng với người tự xưng "chuyên gia" không rõ trình độ hoặc lời hứa "chữa khỏi nhanh".</li>
</ul>
<div class="box warn"><b>Nên tìm giúp đỡ chuyên môn khi</b>
<ul>
<li>Buồn, lo âu, mất hứng thú kéo dài trên 2 tuần và ảnh hưởng học tập, công việc, quan hệ</li>
<li>Cơn hoảng sợ tái diễn; ám ảnh, nghe thấy tiếng nói, tin điều khác thường</li>
<li>Dựa vào rượu, thuốc, game để đối phó; ăn uống rối loạn</li>
<li>Ý nghĩ tự hại hoặc làm hại người khác (tìm giúp ngay)</li>
</ul></div>

<h2>Hỗ trợ người đang gặp khó khăn</h2>
<ul>
<li><strong>Lắng nghe</strong> nhiều hơn khuyên; công nhận cảm xúc ("nghe có vẻ rất khó khăn").</li>
<li>Tránh câu "cố lên", "nghĩ tích cực", "người khác còn khổ hơn", "do bạn yếu đuối".</li>
<li>Hỗ trợ thiết thực: đi cùng đến bác sĩ, giúp việc nhà, giữ liên lạc đều đặn.</li>
<li>Khuyến khích tìm điều trị; tôn trọng quyết định; chăm sóc bản thân để tránh kiệt sức.</li>
</ul>
<div class="box tip"><b>Năm cách nuôi dưỡng sức khỏe tinh thần mỗi ngày</b>
<ul>
<li><strong>Kết nối:</strong> dành thời gian chất lượng cho người thân, bạn bè</li>
<li><strong>Vận động:</strong> đi bộ, thể thao, làm vườn</li>
<li><strong>Chú tâm:</strong> tập trung vào hiện tại, hít thở, quan sát xung quanh</li>
<li><strong>Học hỏi:</strong> thử điều mới, kỹ năng mới</li>
<li><strong>Cho đi:</strong> giúp đỡ người khác, cảm ơn, tình nguyện</li>
</ul></div>
`
});

window.HEALTH_TOPICS.push({
    id: 'gut-inflammation-aging', order: 28, section: 'advanced', icon: '🧬',
    title: 'Hệ vi sinh đường ruột, viêm mạn tính và lão hóa',
    summary: 'Những gì khoa học đã chắc chắn và những gì còn đang nghiên cứu hoặc bị thổi phồng: vi sinh vật, probiotic, viêm và chống lão hóa.',
    keywords: 'hệ vi sinh đường ruột microbiome probiotic prebiotic chất xơ men vi sinh viêm mạn tính inflammaging lão hóa chống lão hóa tuổi thọ nmn resveratrol leaky gut thải độc',
    sources: ['Nature / Lancet / Cell reviews - Gut microbiome and health', 'López-Otín C. et al. - The Hallmarks of Aging (Cell 2013, 2023)', 'AGA / ACG - Clinical practice guidelines on probiotics', 'Stanford Medicine - Wastyk H. et al., Gut-microbiota-targeted diets (Cell 2021)'],
    html: `
<p>Chủ đề này hấp dẫn và thường bị thổi phồng: "vi sinh đường ruột điều khiển mọi thứ", "viêm mạn tính là gốc rễ mọi bệnh", "uống thuốc này để trẻ mãi". Bài viết giúp bạn tách <strong>điều đã có bằng chứng tốt</strong> khỏi <strong>điều còn là giả thuyết hoặc quảng cáo</strong>, và nhận ra rằng những hành động hiệu quả nhất vẫn là các thói quen quen thuộc.</p>

<h2>Hệ vi sinh đường ruột</h2>
<p>Đường tiêu hóa, nhất là ruột già, chứa hàng nghìn tỷ vi sinh vật (vi khuẩn là chủ yếu, cùng virus, nấm) với hàng nghìn loài và hàng triệu gen, nhiều hơn nhiều so với gen của con người. Tổng số vi khuẩn ước tính tương đương số tế bào người.</p>
[[img:gut|Mật độ vi khuẩn tăng dần dọc đường tiêu hóa, từ dạ dày (rất ít) đến đại tràng (hàng nghìn tỷ). Chú thích bằng tiếng Pháp.]]
<h3>Chúng làm gì?</h3>
<ul>
<li><strong>Lên men chất xơ</strong> thành axit béo chuỗi ngắn (như butyrate), nuôi tế bào ruột, giảm viêm, tham gia điều hòa đường huyết.</li>
<li>Tổng hợp một số vitamin (K, một số vitamin B), chuyển hóa axit mật và thuốc.</li>
<li><strong>"Huấn luyện" hệ miễn dịch</strong>, chiếm chỗ vi sinh vật có hại (kháng khuẩn), củng cố hàng rào ruột.</li>
<li>Giao tiếp với não qua <strong>trục ruột - não</strong> (thần kinh phế vị, hormone, chất trung gian miễn dịch); khoảng 90% serotonin của cơ thể được tạo ở ruột (nhưng serotonin ở ruột không trực tiếp vào não).</li>
</ul>
<h3>Yếu tố tác động</h3>
<p>Cách sinh (sinh thường, bú mẹ), chế độ ăn, kháng sinh, tuổi, thuốc (như ức chế bơm proton, metformin), vệ sinh, môi trường, vùng sống, stress, bệnh tật. Hệ vi sinh tương đối ổn định ở người trưởng thành nhưng bị <strong>xáo trộn (dysbiosis)</strong> sau kháng sinh, nhiễm trùng, ăn uống quá nghèo chất xơ.</p>

<h3>Điều khoa học đã khá chắc chắn</h3>
<ul>
<li><strong>Chế độ ăn nhiều chất xơ đa dạng từ thực vật</strong> (rau, trái cây, ngũ cốc nguyên hạt, đậu, hạt) nuôi vi khuẩn có lợi; đa dạng thực vật trong ăn uống liên quan đến hệ vi sinh đa dạng hơn. Thực phẩm siêu chế biến, nhiều đường, ít chất xơ có tác động ngược lại.</li>
<li><strong>Kháng sinh</strong> làm giảm đa dạng vi sinh (thường hồi phục một phần); lạm dụng kháng sinh vừa làm kháng thuốc vừa làm rối loạn hệ vi sinh. Dùng kháng sinh khi cần thiết.</li>
<li><strong>Cấy ghép vi sinh vật phân (FMT)</strong> là điều trị hiệu quả cho nhiễm <em>Clostridioides difficile</em> tái phát.</li>
<li><strong>Thực phẩm lên men</strong> (sữa chua, kim chi, dưa muối lên men đúng cách, kefir, tương, natto, miso): một thử nghiệm nhỏ cho thấy ăn nhiều thực phẩm lên men làm tăng đa dạng vi sinh và giảm một số dấu ấn viêm; nhưng thực phẩm muối chua có thể nhiều muối và một số loại muối chua liên quan nguy cơ ung thư dạ dày/thực quản khi ăn nhiều; ăn điều độ.</li>
<li>Sữa mẹ chứa oligosaccharide nuôi vi khuẩn có lợi ở trẻ bú mẹ.</li>
</ul>

<h3>Probiotic và prebiotic</h3>
<ul>
<li><strong>Probiotic</strong> là vi sinh vật sống, dùng đủ lượng có thể có lợi. Tác dụng <strong>phụ thuộc chủng và chỉ định cụ thể</strong>, không phải "loại nào cũng tốt cho mọi thứ".</li>
<li>Có bằng chứng ở mức nhất định: <strong>giảm nguy cơ tiêu chảy do kháng sinh</strong> (<em>Saccharomyces boulardii</em>, <em>Lactobacillus rhamnosus GG</em>), <strong>rút ngắn thời gian tiêu chảy cấp nhiễm trùng ở trẻ</strong>, hỗ trợ một số người mắc hội chứng ruột kích thích, viêm túi cùng sau mổ, hỗ trợ trẻ sinh non (theo chỉ định ở bệnh viện).</li>
<li>Bằng chứng còn yếu hoặc chưa rõ đối với: giảm cân, phòng cảm cúm, cải thiện tâm trạng, tăng cường miễn dịch chung, "làm sạch ruột".</li>
<li><strong>Thận trọng</strong> ở người suy giảm miễn dịch, bệnh nặng, đặt catheter, sau phẫu thuật, trẻ sinh non (nguy cơ nhiễm trùng máu do chính chủng probiotic). Hỏi bác sĩ.</li>
<li><strong>Prebiotic</strong> là chất xơ nuôi vi khuẩn có lợi (inulin, FOS, GOS, tinh bột kháng); ăn đủ rau, hành, tỏi, chuối, đậu, yến mạch đã cung cấp.</li>
</ul>
<div class="box warn"><b>Những điều cần tỉnh táo</b>
<ul>
<li><strong>"Hội chứng rò rỉ ruột" (leaky gut)</strong> không phải là chẩn đoán y khoa được công nhận cho mọi bệnh như quảng cáo. Tính thấm ruột là khái niệm thật và đang được nghiên cứu, nhưng các liệu pháp "trị rò rỉ ruột" phổ biến chưa có bằng chứng.</li>
<li><strong>Xét nghiệm "phân tích hệ vi sinh" bán trực tiếp cho người tiêu dùng</strong> hiện chưa có giá trị lâm sàng để hướng dẫn chế độ ăn hoặc điều trị.</li>
<li><strong>"Thải độc ruột", "súc ruột", thụt tháo cà phê, nước ép thanh lọc</strong> không có lợi và có thể gây hại (mất nước, rối loạn điện giải, tổn thương ruột).</li>
<li>Nhiều mối liên hệ giữa vi sinh và béo phì, tiểu đường, trầm cảm, tự kỷ... chủ yếu dựa trên nghiên cứu quan sát hoặc động vật; chưa chứng minh nhân quả hoặc chưa có can thiệp hiệu quả ở người.</li>
</ul></div>

<h2>Viêm mạn tính mức độ thấp</h2>
<p>Viêm cấp là phản ứng bảo vệ (sưng nóng đỏ đau khi nhiễm trùng hoặc chấn thương) có lợi và tự hết. <strong>Viêm mạn tính mức độ thấp</strong> là trạng thái kích hoạt nhẹ kéo dài của hệ miễn dịch, không có triệu chứng rõ, liên quan đến xơ vữa động mạch, kháng insulin - tiểu đường type 2, gan nhiễm mỡ, sa sút trí tuệ, một số ung thư và quá trình lão hóa ("inflammaging").</p>
<h3>Nguyên nhân thường gặp</h3>
<ul>
<li><strong>Mỡ nội tạng</strong> (béo bụng) tiết các chất gây viêm.</li>
<li>Chế độ ăn nhiều đường, tinh bột tinh chế, thực phẩm siêu chế biến, mỡ chuyển hóa; thiếu chất xơ, thiếu cá béo.</li>
<li>Ít vận động, hút thuốc, rượu, thiếu ngủ, stress mạn tính, ô nhiễm không khí.</li>
<li>Nhiễm trùng mạn (viêm nha chu, H. pylori…), bệnh tự miễn.</li>
<li>Tuổi tác (tế bào lão hóa tiết chất gây viêm).</li>
</ul>
<h3>Đo lường</h3>
<p><strong>hs-CRP</strong> (CRP độ nhạy cao): dưới 1 mg/L nguy cơ thấp, 1–3 trung bình, trên 3 cao (khi không có nhiễm trùng hiện tại); bác sĩ dùng để tinh chỉnh nguy cơ tim mạch. Không cần đo thường quy cho mọi người.</p>
<h3>Giảm viêm bằng cách nào? Những điều có chứng cứ</h3>
<ul>
<li><strong>Giảm mỡ bụng và duy trì cân nặng hợp lý:</strong> hiệu quả rõ rệt.</li>
<li><strong>Chế độ ăn kiểu Địa Trung Hải</strong> hoặc giàu thực vật: rau, trái cây nhiều màu, đậu, ngũ cốc nguyên hạt, hạt, dầu ô-liu, cá béo (omega-3); giảm đường, thịt chế biến, thực phẩm siêu chế biến.</li>
<li><strong>Vận động đều đặn:</strong> cơ co tiết các chất kháng viêm (myokine); giảm CRP.</li>
<li><strong>Ngủ đủ, giảm stress, không hút thuốc, hạn chế rượu</strong>, chăm sóc răng miệng, tiêm vaccine, điều trị nhiễm trùng mạn.</li>
<li>Thuốc chống viêm (NSAID) <em>không</em> dùng để phòng viêm mạn mức thấp vì nguy cơ lớn hơn lợi ích.</li>
</ul>
<div class="box info"><b>"Thực phẩm chống viêm" và "viêm là gốc mọi bệnh"</b>
<p>Không có "siêu thực phẩm" đơn lẻ (nghệ, gừng, trà xanh…) đủ để thay đổi viêm có ý nghĩa; curcumin khó hấp thu và bằng chứng lâm sàng còn hạn chế. Viêm là một cơ chế chung của nhiều bệnh nhưng bệnh có nhiều nguyên nhân khác; đừng để khái niệm này trở thành lý do bán thực phẩm chức năng.</p></div>

<h2>Lão hóa</h2>
<p>Lão hóa là quá trình tích lũy tổn thương ở mức phân tử và tế bào theo thời gian, làm giảm chức năng và tăng nguy cơ bệnh. Các đặc điểm được nghiên cứu: tổn thương DNA, rút ngắn telomere, thay đổi biểu sinh, rối loạn chức năng ty thể, tế bào già (senescent), cạn kiệt tế bào gốc, rối loạn proteostasis, viêm mạn tính, rối loạn hệ vi sinh.</p>
<ul>
<li><strong>Tuổi thọ</strong> (sống bao lâu) và <strong>tuổi thọ khỏe mạnh</strong> (sống khỏe bao lâu) khác nhau; mục tiêu thực tế là rút ngắn giai đoạn bệnh tật cuối đời.</li>
<li>Di truyền ảnh hưởng khoảng 20–30% khác biệt tuổi thọ; <strong>lối sống và môi trường đóng vai trò lớn hơn</strong>.</li>
</ul>
<h3>Điều thật sự giúp sống lâu, khỏe</h3>
<ol>
<li><strong>Không hút thuốc</strong> (hiệu quả lớn nhất).</li>
<li><strong>Vận động thường xuyên</strong>, kể cả tập sức mạnh: sức khỏe tim phổi (VO₂max) và sức mạnh cơ là những yếu tố tiên lượng mạnh nhất về tuổi thọ.</li>
<li>Ngủ đủ; ăn nhiều thực vật, không ăn quá nhiều; giữ cân nặng hợp lý.</li>
<li>Hạn chế rượu; kiểm soát huyết áp, đường huyết, mỡ máu.</li>
<li><strong>Duy trì quan hệ xã hội</strong> và mục đích sống; giảm cô đơn.</li>
<li>Tiêm chủng, khám và tầm soát đúng hạn; an toàn (đội mũ bảo hiểm, phòng ngã).</li>
<li>Bảo vệ thính lực, thị lực; chăm sóc răng miệng; bảo vệ da khỏi UV.</li>
</ol>
<h3>Các can thiệp "chống lão hóa": đánh giá tỉnh táo</h3>
<table>
<tr><th>Can thiệp</th><th>Bằng chứng hiện nay</th></tr>
<tr><td>Hạn chế calo vừa phải</td><td>Hiệu quả kéo dài tuổi thọ ở nhiều loài vật; ở người (CALERIE) cải thiện một số chỉ số chuyển hóa; khó duy trì lâu dài; không khuyến cáo ở người gầy, lớn tuổi yếu</td></tr>
<tr><td>Nhịn ăn gián đoạn</td><td>Xem bài Chế độ ăn thịnh hành; lợi ích chính tương đương giảm calo</td></tr>
<tr><td>NMN, NR (tiền chất NAD⁺), resveratrol, quercetin...</td><td>Chủ yếu nghiên cứu động vật hoặc tế bào; ở người chưa chứng minh kéo dài tuổi thọ hay cải thiện sức khỏe rõ ràng; sản phẩm bán trên thị trường không được kiểm soát chặt, giá rất cao</td></tr>
<tr><td>Metformin, rapamycin, thuốc loại bỏ tế bào già (senolytic)</td><td>Đang nghiên cứu (thử nghiệm TAME v.v.); <strong>chưa được khuyến cáo dùng để chống lão hóa</strong> ở người khỏe mạnh</td></tr>
<tr><td>Liệu pháp hormone "trẻ hóa" (GH, testosterone, DHEA), tiêm tế bào gốc, truyền huyết tương người trẻ</td><td>Không có chứng cứ lợi ích, có nguy cơ thật (ung thư, huyết khối, nhiễm trùng, vô sinh); nhiều cơ sở quảng cáo không được cấp phép</td></tr>
<tr><td>"Xét nghiệm tuổi sinh học" (đồng hồ biểu sinh), "tuổi telomere"</td><td>Công cụ nghiên cứu, chưa đủ độ tin cậy để ra quyết định cá nhân; đừng mua gói điều trị dựa trên kết quả này</td></tr>
<tr><td>"Vùng xanh" (Blue Zones)</td><td>Gợi ý thú vị: ăn nhiều thực vật, vận động thường xuyên trong đời sống, gắn kết xã hội, mục đích sống; nhưng dữ liệu về tuổi thực có tranh cãi; rút ra bài học lối sống chung, đừng xem đó là công thức thần kỳ</td></tr>
</table>
<div class="box warn"><b>Dấu hiệu của "thuốc thần kỳ chống lão hóa" lừa đảo</b>
<ul>
<li>Hứa "đảo ngược tuổi tác", "trẻ lại 20 tuổi", "chữa mọi bệnh"</li>
<li>Dựa vào lời kể, hình trước - sau, video "bác sĩ" (có thể là giả mạo, AI)</li>
<li>Bán thực phẩm chức năng giá cao qua mạng lưới đa cấp</li>
<li>Cho rằng "bác sĩ và hãng dược che giấu sự thật"</li>
</ul></div>
<p><strong>Da lão hóa:</strong> khoảng 80% dấu hiệu lão hóa da ở vùng hở (nám, nhăn) do tia UV và hút thuốc. Chống nắng hằng ngày, không hút thuốc, dưỡng ẩm, và (theo tư vấn da liễu) retinoid là những biện pháp có bằng chứng tốt nhất.</p>
<div class="box tip"><b>Thông điệp chính</b>
<ul>
<li>Nuôi vi sinh bằng <strong>nhiều loại thực vật</strong>, không bằng viên uống đắt tiền; chỉ dùng probiotic khi có chỉ định.</li>
<li>Giảm viêm mạn bằng <strong>vòng eo nhỏ, vận động, ăn giàu thực vật, ngủ đủ, không hút thuốc</strong>.</li>
<li>"Chống lão hóa" thực tế là <strong>phòng bệnh mạn tính và duy trì chức năng</strong>; đề phòng mọi lời hứa "thần kỳ".</li>
</ul></div>
`
});

window.HEALTH_TOPICS.push({
    id: 'diets', order: 29, section: 'advanced', icon: '🍽️',
    title: 'Nhịn ăn gián đoạn, keto và các chế độ ăn thịnh hành',
    summary: 'Bằng chứng khoa học về nhịn ăn gián đoạn, low-carb, keto, chay, Địa Trung Hải, detox; thuốc giảm cân và cách đánh giá một chế độ ăn.',
    keywords: 'nhịn ăn gián đoạn 16:8 keto low-carb ăn chay thuần chay địa trung hải dash paleo gluten detox thanh lọc giảm cân thuốc giảm cân semaglutide phẫu thuật giảm béo',
    sources: ['Cochrane / NEJM - Time-restricted eating trials (Liu et al., NEJM 2022); de Cabo & Mattson (NEJM 2019)', 'Estruch R. et al. - PREDIMED (NEJM 2018); DASH Diet', 'Academy of Nutrition and Dietetics; WHO - Healthy diet', 'Wilding JPH et al. - STEP 1 (semaglutide), Jastreboff AM et al. - SURMOUNT-1 (tirzepatide)'],
    html: `
<p>Hầu như mọi chế độ ăn phổ biến đều giúp giảm cân trong ngắn hạn <strong>khi chúng làm bạn ăn ít năng lượng hơn mức tiêu hao</strong>. Sự khác biệt nằm ở khả năng <strong>duy trì lâu dài</strong>, an toàn, đầy đủ dinh dưỡng và tác động lên sức khỏe tim mạch - chuyển hóa. Điều quan trọng nhất là chọn cách ăn mà bạn có thể theo đuổi bền vững trong nhiều năm.</p>

<h2>Nguyên tắc nền tảng</h2>
<ul>
<li><strong>Thâm hụt năng lượng</strong> là cơ chế cốt lõi của giảm cân. Khi giảm cân, cơ thể giảm chuyển hóa và tăng cảm giác đói (thích nghi chuyển hóa), nên tăng cân trở lại là phổ biến. Thay đổi nhỏ, bền vững tốt hơn thay đổi cực đoan.</li>
<li><strong>Mục tiêu thực tế:</strong> giảm 5–10% cân nặng đã cải thiện rõ huyết áp, đường huyết, mỡ máu, gan nhiễm mỡ. Tốc độ phù hợp 0,25–0,5 kg mỗi tuần.</li>
<li><strong>Chất lượng thực phẩm</strong> quan trọng: rau, trái cây, ngũ cốc nguyên hạt, đậu, cá, hạt, dầu tốt; ít thực phẩm siêu chế biến, đồ uống có đường, thịt chế biến.</li>
<li>Đủ đạm và tập sức mạnh để giữ khối cơ khi giảm cân.</li>
<li><strong>Đừng thiếu nhóm chất thiết yếu.</strong> Chế độ ăn cắt bỏ cả nhóm thực phẩm mà không có lý do y khoa thường kém bền và dễ thiếu vi chất.</li>
</ul>

<h2>Nhịn ăn gián đoạn (intermittent fasting)</h2>
<p>Gồm nhiều cách chia thời gian ăn - nhịn: <strong>ăn trong khung giờ hạn chế</strong> (ví dụ 16:8, tức nhịn 16 giờ và ăn trong 8 giờ), <strong>5:2</strong> (2 ngày ăn rất ít calo mỗi tuần), <strong>ăn cách ngày</strong>.</p>
[[img:ifcalendar|Ví dụ lịch nhịn ăn cách ngày: ngày ăn (biểu tượng dao nĩa) xen kẽ ngày nhịn ăn hoặc ăn rất ít (dấu X).]]
<ul>
<li><strong>Bằng chứng:</strong> các thử nghiệm đối chứng ngẫu nhiên cho thấy nhịn ăn gián đoạn giảm cân ở mức tương tự việc giảm calo liên tục (ví dụ thử nghiệm NEJM 2022: ăn trong 8 giờ không hơn hẳn đếm calo). Có thể cải thiện độ nhạy insulin và huyết áp ở một số người. Dữ liệu dài hạn về tim mạch, ung thư, tuổi thọ ở người vẫn chưa đủ; một số nghiên cứu quan sát gây tranh luận. Phần lớn lợi ích đến từ việc ăn ít calo đi và không ăn đêm.</li>
<li><strong>"Autophagy", "tự làm sạch tế bào"</strong> được quảng cáo nhiều; nhưng lợi ích thực tế ở người từ nhịn ăn 16 giờ chưa được chứng minh.</li>
<li><strong>Tác dụng phụ:</strong> đói, đau đầu, cáu gắt, khó tập trung, táo bón, mất ngủ; dễ ăn bù quá mức sau nhịn; có thể hạ đường huyết ở người dùng thuốc tiểu đường; sỏi mật khi giảm cân nhanh.</li>
<li><strong>Không phù hợp / cần bác sĩ giám sát:</strong> trẻ em, thanh thiếu niên; phụ nữ mang thai, cho con bú; người có tiền sử rối loạn ăn uống; người thiếu cân, suy dinh dưỡng, người cao tuổi yếu; tiểu đường type 1 hoặc dùng insulin, sulfonylurea; bệnh thận, bệnh gan, đang dùng thuốc phải uống cùng bữa ăn; người cần tập luyện cường độ cao.</li>
<li><strong>Nhịn ăn tôn giáo (ví dụ tháng Ramadan, ăn chay)</strong>: người bệnh mạn tính nên tham khảo bác sĩ về điều chỉnh thuốc.</li>
<li>Nếu thử: bắt đầu nhẹ nhàng (12–14 giờ), uống đủ nước (nước lọc, trà, cà phê không đường được phép), bữa ăn chất lượng, ngưng khi có triệu chứng bất thường.</li>
</ul>

<h2>Low-carb và keto</h2>
<ul>
<li><strong>Low-carb</strong> (tinh bột khoảng 50–150 g/ngày) và <strong>keto</strong> (rất ít tinh bột, khoảng 20–50 g/ngày, nhiều chất béo) khiến cơ thể tạo <strong>ceton</strong> làm nhiên liệu thay cho glucose.</li>
<li><strong>Bằng chứng:</strong> giảm cân nhanh hơn trong 3–6 tháng đầu (một phần do mất nước), cải thiện đường huyết, triglyceride, HDL; sau 1–2 năm hiệu quả giảm cân tương đương các chế độ khác. <strong>LDL-cholesterol có thể tăng</strong> ở một số người. Là liệu pháp có chỉ định trong <strong>động kinh kháng thuốc</strong> (đặc biệt ở trẻ) dưới giám sát.</li>
<li><strong>Tác dụng phụ:</strong> "cúm keto" (mệt, nhức đầu, chuột rút, buồn nôn những ngày đầu), táo bón, hôi miệng, thiếu chất xơ và vi chất, sỏi thận, rối loạn mỡ máu, khó duy trì, nguy cơ hạ đường huyết ở người dùng thuốc tiểu đường.</li>
<li><strong>Không nên / rất thận trọng:</strong> mang thai, cho con bú; tiểu đường type 1 (nguy cơ nhiễm toan ceton); người dùng thuốc ức chế SGLT2 (nguy cơ toan ceton đường huyết bình thường); bệnh gan, tụy, thận nặng; rối loạn chuyển hóa mỡ bẩm sinh; rối loạn ăn uống.</li>
<li>Một cách ăn giảm tinh bột tinh chế vừa phải (giảm nước ngọt, bánh kẹo, cơm - bún - mì quá nhiều, tăng rau và đạm, chất béo tốt) thường <strong>dễ duy trì và an toàn hơn</strong> so với keto nghiêm ngặt.</li>
<li><strong>Chế độ "carnivore" (chỉ ăn thịt)</strong> thiếu chất xơ, vitamin C và nhiều vi chất, tăng nguy cơ bệnh tim mạch, sỏi thận; không có bằng chứng an toàn dài hạn.</li>
</ul>

<h2>Những chế độ có bằng chứng tốt cho sức khỏe lâu dài</h2>
<table>
<tr><th>Chế độ</th><th>Đặc điểm</th><th>Bằng chứng chính</th></tr>
<tr><td><strong>Địa Trung Hải</strong></td><td>Nhiều rau, trái cây, đậu, ngũ cốc nguyên hạt, hạt, dầu ô-liu, cá; ít thịt đỏ, đồ ngọt</td><td>Thử nghiệm PREDIMED: giảm khoảng 30% biến cố tim mạch (nhồi máu, đột quỵ, tử vong tim mạch) so với chế độ ít mỡ thông thường; liên quan giảm nguy cơ tiểu đường, sa sút trí tuệ</td></tr>
<tr><td><strong>DASH</strong></td><td>Nhiều rau quả, sữa ít béo, ngũ cốc nguyên hạt; ít muối, mỡ bão hòa</td><td>Giảm huyết áp đáng kể, đặc biệt khi kết hợp giảm muối</td></tr>
<tr><td><strong>Ăn giàu thực vật</strong> (bán chay - chay)</td><td>Phần lớn từ thực vật, có thể kèm ít hoặc không có thịt</td><td>Liên quan giảm BMI, huyết áp, LDL, nguy cơ tiểu đường type 2, bệnh tim; quan trọng là chất lượng (nhiều đồ chế biến "chay" vẫn nhiều muối, tinh bột tinh chế)</td></tr>
</table>
<div class="box info"><b>Ăn chay và thuần chay: cần lập kế hoạch</b>
<ul>
<li><strong>Vitamin B12 bắt buộc phải bổ sung</strong> (hoặc thực phẩm tăng cường) ở người ăn chay trường, thuần chay; thiếu B12 gây thiếu máu, tổn thương thần kinh.</li>
<li>Chú ý sắt (đậu, rau xanh đậm + vitamin C), kẽm, canxi (đậu hũ làm với canxi, sữa thực vật tăng cường), iốt, vitamin D, omega-3 (hạt chia, hạt lanh, dầu tảo DHA).</li>
<li>Đạm đủ và đa dạng: đậu hũ, tempeh, đậu, hạt, ngũ cốc. Ăn chay kiểu Phật giáo truyền thống có thể rất lành mạnh nếu nhiều rau, đậu, nấm; tránh quá nhiều đồ chiên, chế biến sẵn, mặn, bột và đường.</li>
<li><strong>Trẻ em, phụ nữ mang thai và cho con bú</strong> ăn thuần chay cần có hướng dẫn của chuyên gia dinh dưỡng và bổ sung phù hợp.</li>
</ul></div>

<h2>Những chế độ nên thận trọng</h2>
<ul>
<li><strong>"Detox", thanh lọc, nước ép thanh lọc, ăn kiêng ngắn hạn cực đoan:</strong> không có bằng chứng loại độc tố; gây thiếu chất, mất cơ, mệt, rối loạn điện giải; dễ tăng cân trở lại. Gan và thận đã thực hiện việc thải độc hiệu quả.</li>
<li><strong>Chế độ không gluten</strong> chỉ cần cho người mắc bệnh celiac, dị ứng lúa mì hoặc nhạy cảm gluten không celiac; ở người khác không có lợi và thực phẩm "gluten-free" chế biến sẵn có thể nhiều đường, chất béo hơn, ít chất xơ hơn.</li>
<li><strong>"Ăn kiềm", "theo nhóm máu":</strong> cơ sở khoa học yếu (cơ thể tự điều chỉnh pH máu).</li>
<li><strong>Ăn một bữa mỗi ngày (OMAD), nhịn đói nhiều ngày, "nhịn ăn để chữa ung thư":</strong> nguy hiểm, không được khuyến cáo.</li>
<li><strong>"Ăn sạch" cực đoan / ám ảnh ăn lành mạnh (orthorexia):</strong> loại bỏ ngày càng nhiều thực phẩm, lo âu khi ăn sai; có thể dẫn đến suy dinh dưỡng, cô lập xã hội.</li>
<li><strong>Chế độ nhiều đạm:</strong> ổn cho người khỏe mạnh vận động; thận trọng ở người bệnh thận, bệnh gan nặng.</li>
<li><strong>Thực phẩm, viên uống "đốt mỡ", thuốc giảm cân không rõ nguồn gốc:</strong> nhiều sản phẩm bị phát hiện trộn chất cấm (sibutramine, chất lợi tiểu, nhuận tràng, corticoid) gây nguy hiểm tim mạch, tâm thần, tử vong.</li>
</ul>

<h2>Thuốc và phẫu thuật điều trị béo phì</h2>
<p>Béo phì là bệnh mạn tính phức tạp (di truyền, hormone, môi trường, thói quen), không chỉ là vấn đề ý chí. Khi lối sống không đủ, có những điều trị y khoa hiệu quả và an toàn hơn nhiều so với "thuốc giảm cân" tự mua:</p>
<ul>
<li><strong>Thuốc thế hệ mới nhóm GLP-1 / GIP-GLP-1</strong> (semaglutide, liraglutide, tirzepatide): giảm cảm giác thèm ăn, làm đầy chậm, giảm cân trung bình khoảng 10–20% trong các thử nghiệm; cải thiện đường huyết, huyết áp, và (một số thuốc) giảm biến cố tim mạch. <strong>Tác dụng phụ:</strong> buồn nôn, nôn, tiêu chảy hoặc táo bón, sỏi mật, hiếm gặp viêm tụy; có thể giảm cả khối cơ nên cần đủ đạm, tập sức mạnh. <strong>Ngưng thuốc thường tăng cân trở lại.</strong> Cần bác sĩ kê đơn, theo dõi; không dùng khi mang thai; <strong>không dùng để giảm vài cân vì thẩm mỹ</strong>; cảnh giác thuốc giả, thuốc "pha chế" bán trên mạng.</li>
<li><strong>Phẫu thuật giảm béo</strong> (cắt dạ dày hình ống, bắc cầu dạ dày): giảm khoảng 25–30% cân nặng, có thể thuyên giảm tiểu đường type 2; chỉ định khi BMI cao (khoảng từ 35, hoặc thấp hơn nếu có bệnh kèm và ở người châu Á); cần bổ sung vi chất suốt đời và theo dõi.</li>
<li>Thuốc khác (orlistat…) hiệu quả khiêm tốn hơn.</li>
</ul>
<p><strong>Dinh dưỡng thể thao (nói ngắn gọn):</strong> người tập sức mạnh thường cần khoảng 1,6–2,2 g đạm/kg/ngày; bột protein tiện lợi nhưng không cần thiết nếu ăn đủ; <strong>creatine monohydrate</strong> là một trong số ít chất bổ sung có bằng chứng hiệu quả với sức mạnh; caffeine hỗ trợ hiệu suất; BCAA, nhiều sản phẩm "đốt mỡ", "tăng cơ" ít hoặc không cần thiết. Tránh steroid đồng hóa, SARMs: nguy hiểm (tim, gan, nội tiết, vô sinh).</p>

<h2>Cách đánh giá một chế độ ăn</h2>
<ol>
<li><strong>Có bền vững không?</strong> Bạn có thể ăn cách đó trong nhiều năm, trong gia đình và xã hội?</li>
<li><strong>Có đủ dinh dưỡng không?</strong> Có cắt hoàn toàn nhóm thực phẩm không có lý do y khoa không?</li>
<li><strong>Có hứa hẹn quá mức?</strong> ("giảm 10 kg trong 7 ngày", "không cần tập luyện")</li>
<li><strong>Có bán sản phẩm kèm theo?</strong> (trà, bột, viên, bộ thực đơn đắt tiền)</li>
<li><strong>Có dựa vào thử nghiệm ngẫu nhiên có đối chứng và kết quả sức khỏe thật</strong> (không chỉ cân nặng ngắn hạn)?</li>
<li>Có phù hợp với <strong>bệnh nền, thuốc đang dùng</strong> của bạn không? (hỏi bác sĩ hoặc chuyên gia dinh dưỡng có chứng chỉ).</li>
</ol>
<div class="box warn"><b>Dấu hiệu chế độ ăn nguy hiểm cần dừng và gặp chuyên gia</b>
<ul>
<li>Chóng mặt, ngất, tim đập nhanh, yếu, rụng tóc nhiều, mất kinh</li>
<li>Ám ảnh về thức ăn, cân nặng, nôn sau ăn, lạm dụng thuốc nhuận tràng hoặc thuốc giảm cân</li>
<li>Giảm cân rất nhanh, sụt dưới cân nặng an toàn</li>
<li>Bệnh nền xấu đi (đường huyết dao động, huyết áp, sỏi, gout)</li>
</ul></div>
<div class="box tip"><b>Tóm lại</b>
<ul>
<li>Không có chế độ thần kỳ: ăn đủ chất, nhiều thực vật, ít siêu chế biến, kiểm soát khẩu phần, vận động, ngủ đủ.</li>
<li>Nhịn ăn gián đoạn và low-carb có thể là công cụ cho một số người, nhưng không tốt hơn rõ rệt các cách giảm calo khác và không hợp cho mọi người.</li>
<li>Khi béo phì hoặc bệnh nền, hãy hỏi bác sĩ về các điều trị y khoa phù hợp.</li>
</ul></div>
`
});
