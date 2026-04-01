// Kinh tế chính trị Mác-Lênin - Marxist-Leninist Political Economy
const philosophyPoliticalEconomyData = {
    'commodity-value': {
        icon: '📦',
        title: 'Hàng Hóa & Giá Trị',
        category: 'political-economy',
        level: 'beginner',
        connections: ['money-theory', 'capital-surplus-value'],
        simple: 'Hàng hóa có hai thuộc tính: giá trị sử dụng (dùng để thỏa mãn nhu cầu) và giá trị (lượng lao động xã hội cần thiết kết tinh trong đó). Giá trị là cơ sở của trao đổi.',
        detail: `<p><strong>Hai thuộc tính của hàng hóa:</strong></p>
<p><strong>1. Giá trị sử dụng:</strong> Công dụng của hàng hóa, thỏa mãn nhu cầu nào đó của con người (vật chất hoặc tinh thần). Mang tính cụ thể, tự nhiên.</p>
<p><strong>2. Giá trị:</strong> Lao động xã hội của người sản xuất kết tinh trong hàng hóa. Mang tính xã hội, lịch sử.</p>
<p><strong>Lượng giá trị hàng hóa:</strong></p>
<ul>
  <li>Đo bằng thời gian lao động xã hội cần thiết (không phải thời gian lao động cá biệt)</li>
  <li>Năng suất lao động tăng → lượng giá trị giảm</li>
  <li>Cường độ lao động tăng → tổng giá trị tăng</li>
</ul>`,
        advanced: `<p><strong>Hai nhân tố sản xuất hàng hóa:</strong></p>
<ul>
  <li><strong>Lao động cụ thể:</strong> Tạo ra giá trị sử dụng (thợ mộc → bàn ghế)</li>
  <li><strong>Lao động trừu tượng:</strong> Tạo ra giá trị, là lao động của con người nói chung không kể đến hình thức cụ thể</li>
</ul>
<p><strong>Quy luật giá trị:</strong> Sản xuất và trao đổi hàng hóa phải dựa trên cơ sở lượng giá trị xã hội cần thiết. Đây là quy luật kinh tế cơ bản của sản xuất hàng hóa.</p>
<p><em>Ứng dụng: Doanh nghiệp giảm giá thành bằng cách tăng năng suất lao động, cải tiến công nghệ → lợi thế cạnh tranh.</em></p>`
    },

    'money-theory': {
        icon: '💵',
        title: 'Tiền Tệ',
        category: 'political-economy',
        level: 'beginner',
        connections: ['commodity-value', 'capital-surplus-value'],
        simple: 'Tiền tệ là hàng hóa đặc biệt được tách ra làm vật ngang giá chung. Tiền có 5 chức năng: thước đo giá trị, phương tiện lưu thông, phương tiện cất trữ, phương tiện thanh toán, tiền tệ thế giới.',
        detail: `<p><strong>Nguồn gốc tiền tệ:</strong> Từ trao đổi thực vật → hình thái giá trị đơn giản → mở rộng → chung → tiền tệ. Tiền tệ ra đời giải quyết khó khăn của trao đổi trực tiếp.</p>
<p><strong>5 chức năng của tiền:</strong></p>
<ol>
  <li><strong>Thước đo giá trị:</strong> Biểu hiện giá trị hàng hóa bằng giá cả (thực hiện bằng giá vàng)</li>
  <li><strong>Phương tiện lưu thông:</strong> H – T – H (hàng-tiền-hàng). Tiền là môi giới trao đổi.</li>
  <li><strong>Phương tiện cất trữ:</strong> Rút tiền khỏi lưu thông, tích lũy của cải</li>
  <li><strong>Phương tiện thanh toán:</strong> Mua chịu, thanh toán nợ, nộp thuế</li>
  <li><strong>Tiền tệ thế giới:</strong> Làm phương tiện thanh toán quốc tế</li>
</ol>`,
        advanced: `<p><strong>Quy luật lưu thông tiền tệ:</strong></p>
<p>M = PQ/V (Số tiền cần thiết = Tổng giá cả hàng hóa / Số vòng quay của tiền)</p>
<p><strong>Lạm phát:</strong> Khi tiền giấy lưu thông vượt quá nhu cầu → giảm sức mua. VN trải qua lạm phát nghiêm trọng 1980-1988 (3 chữ số), Đổi mới ổn định lại.</p>
<p><em>Hiện đại: Tiền điện tử, tiền kỹ thuật số (crypto) — vẫn thực hiện các chức năng tiền tệ nhưng trong môi trường số.</em></p>`
    },

    'capital-surplus-value': {
        icon: '📈',
        title: 'Tư Bản & Giá Trị Thặng Dư',
        category: 'political-economy',
        level: 'intermediate',
        connections: ['commodity-value', 'capital-accumulation'],
        simple: 'Tư bản là giá trị mang lại giá trị thặng dư. Công nhân bán sức lao động, làm việc cho nhà tư bản. Phần thời gian ngoài thời gian cần thiết (tái tạo bản thân) là thời gian thặng dư — tạo ra giá trị thặng dư m.',
        detail: `<p><strong>Công thức tư bản:</strong> T – H – T' (T' > T, T' = T + m)</p>
<p>Tiền tệ thông thường: H – T – H (trao đổi hàng hóa)</p>
<p>Tư bản: T – H – T' (mục đích là tạo ra tiền nhiều hơn)</p>
<p><strong>Hàng hóa sức lao động:</strong></p>
<ul>
  <li>Điều kiện: người lao động tự do về thân thể + không có tư liệu sản xuất</li>
  <li>Giá trị SLĐ = chi phí tái sản xuất SLĐ (ăn, mặc, ở, học, gia đình)</li>
  <li>Giá trị sử dụng SLĐ = nguồn gốc tạo ra giá trị thặng dư</li>
</ul>
<p><strong>Giá trị thặng dư (m):</strong> m = Thời gian thặng dư × Giá trị tạo ra trong 1 đơn vị thời gian</p>`,
        advanced: `<p><strong>Hai phương pháp sản xuất GTTD:</strong></p>
<ul>
  <li><strong>GTTD tuyệt đối:</strong> Kéo dài ngày lao động (cùng thời gian cần thiết)</li>
  <li><strong>GTTD tương đối:</strong> Giảm thời gian lao động cần thiết (tăng năng suất lao động xã hội)</li>
</ul>
<p><strong>Tỷ suất GTTD:</strong> m' = m/v × 100% (v = tư bản khả biến)</p>
<p><em>Phê phán: Marx chỉ ra bản chất bóc lột của CNTB — GTTD là lao động không được trả công của công nhân, là nguồn gốc của lợi nhuận tư bản chủ nghĩa.</em></p>`
    },

    'capital-accumulation': {
        icon: '🏦',
        title: 'Tích Lũy Tư Bản',
        category: 'political-economy',
        level: 'intermediate',
        connections: ['capital-surplus-value', 'monopoly-capitalism'],
        simple: 'Tích lũy tư bản là biến GTTD thành tư bản để mở rộng sản xuất. Quy luật chung: tư bản tập trung ngày càng lớn, công nhân ngày càng đông và bần cùng hóa tương đối.',
        detail: `<p><strong>Tái sản xuất:</strong></p>
<ul>
  <li>Tái sản xuất giản đơn: Toàn bộ GTTD dùng tiêu dùng cá nhân, quy mô không đổi</li>
  <li>Tái sản xuất mở rộng: Một phần GTTD tích lũy để tăng tư bản, mở rộng sản xuất</li>
</ul>
<p><strong>Nhân tố ảnh hưởng tích lũy:</strong></p>
<ul>
  <li>Phân chia tỷ lệ giữa tích lũy và tiêu dùng</li>
  <li>Năng suất lao động xã hội</li>
  <li>Trình độ bóc lột</li>
  <li>Quy mô tư bản ứng trước</li>
</ul>`,
        advanced: `<p><strong>Quy luật chung của tích lũy tư bản:</strong></p>
<p>Tích lũy → tập trung tư bản → cấu tạo hữu cơ tư bản tăng (c/v tăng) → cầu về lao động tương đối giảm → đội quân thất nghiệp dự bị → áp lực tiền lương → bần cùng hóa tương đối công nhân.</p>
<p><em>Hiện đại: Tự động hóa, AI thay thế lao động → cấu tạo hữu cơ tư bản tăng vọt → thất nghiệp kỹ thuật công nghệ. Đây là vấn đề toàn cầu đang tranh luận.</em></p>`
    },

    'monopoly-capitalism': {
        icon: '🌐',
        title: 'CNTB Độc Quyền',
        category: 'political-economy',
        level: 'advanced',
        connections: ['capital-accumulation', 'socialist-revolution'],
        simple: 'Lenin phân tích CNTB chuyển từ cạnh tranh tự do sang độc quyền. 5 đặc điểm: tập trung sản xuất, tư bản tài chính, xuất khẩu tư bản, phân chia thế giới kinh tế, phân chia thế giới lãnh thổ.',
        detail: `<p><strong>5 đặc điểm CNTB độc quyền (Lenin):</strong></p>
<ol>
  <li><strong>Tập trung sản xuất và tư bản đến mức cao → độc quyền:</strong> Cạnh tranh → tập trung → độc quyền (các-ten, xanh-đi-ca, tơ-rớt)</li>
  <li><strong>Tư bản tài chính và bọn đầu sỏ tài chính:</strong> Hợp nhất tư bản ngân hàng + tư bản công nghiệp</li>
  <li><strong>Xuất khẩu tư bản:</strong> Xuất khẩu tư bản thống trị (thay vì xuất khẩu hàng hóa)</li>
  <li><strong>Phân chia thế giới giữa các liên minh độc quyền quốc tế:</strong> Các tập đoàn đa quốc gia phân chia thị trường</li>
  <li><strong>Phân chia lãnh thổ thế giới giữa các cường quốc:</strong> Chủ nghĩa thực dân, đế quốc chủ nghĩa</li>
</ol>`,
        advanced: `<p><strong>CNTB độc quyền nhà nước:</strong></p>
<p>Nhà nước tư sản trực tiếp tham gia điều tiết kinh tế, bảo vệ lợi ích độc quyền. Biểu hiện: quốc hữu hóa, hỗ trợ DN lớn, điều tiết bằng chính sách tài khóa-tiền tệ (Keynesianism).</p>
<p><strong>Toàn cầu hóa hiện nay:</strong> WTO, IMF, WB — công cụ của CNTB độc quyền quốc tế. Các tập đoàn xuyên quốc gia (Apple, Amazon, Google...) là biểu hiện độc quyền hiện đại.</p>
<p><em>VN: Hội nhập quốc tế nhưng bảo vệ độc lập, chủ quyền — không để nước ngoài chi phối các ngành kinh tế then chốt.</em></p>`
    }
};
