// Chủ nghĩa Xã hội Khoa học - Scientific Socialism
const philosophySocialismData = {
    'working-class': {
        icon: '👷',
        title: 'Giai Cấp Công Nhân',
        category: 'socialism',
        level: 'beginner',
        connections: ['class-struggle', 'socialist-revolution'],
        simple: 'Giai cấp công nhân hiện đại (proletariat) là người không có tư liệu sản xuất, phải bán sức lao động. Họ là giai cấp tiên tiến nhất, có sứ mệnh lịch sử lãnh đạo cách mạng XHCN.',
        detail: `<p><strong>Đặc điểm của giai cấp công nhân hiện đại:</strong></p>
<ul>
  <li>Gắn với nền sản xuất công nghiệp đại cơ khí và khoa học - kỹ thuật hiện đại</li>
  <li>Không có (hoặc về cơ bản không có) tư liệu sản xuất → phải bán sức lao động</li>
  <li>Đại diện cho LLSX tiên tiến nhất</li>
  <li>Có tính tổ chức, tính kỷ luật cao do lao động trong sản xuất công nghiệp</li>
  <li>Có lợi ích cơ bản đối lập với giai cấp tư sản</li>
</ul>
<p><strong>Sứ mệnh lịch sử:</strong> Xóa bỏ chế độ tư bản chủ nghĩa, xây dựng CNXH-CNCS thông qua Đảng Cộng sản lãnh đạo.</p>`,
        advanced: `<p><strong>Tại sao giai cấp công nhân có sứ mệnh lịch sử?</strong></p>
<ol>
  <li>Địa vị kinh tế - xã hội: đại diện cho LLSX hiện đại nhất, trực tiếp mâu thuẫn với QHSX TB</li>
  <li>Địa vị chính trị - xã hội: bị bóc lột triệt để nhất → có lợi ích gắn với giải phóng toàn nhân loại</li>
  <li>Giai cấp công nhân vô sản không có gì để mất ngoài xiềng xích, nhưng có cả thế giới để giành lấy</li>
</ol>
<p><em>VN: Giai cấp công nhân VN trưởng thành qua đấu tranh cách mạng. Hiện nay: công nhân các KCX, KCN — bộ phận chủ lực của giai cấp công nhân VN hiện đại.</em></p>`
    },

    'socialist-revolution': {
        icon: '🚩',
        title: 'Cách Mạng Xã Hội Chủ Nghĩa',
        category: 'socialism',
        level: 'intermediate',
        connections: ['working-class', 'socialist-state', 'monopoly-capitalism'],
        simple: 'Cách mạng XHCN là cuộc cách mạng của giai cấp công nhân và nhân dân lao động nhằm xóa bỏ CNTB, xây dựng CNXH. Điều kiện khách quan và chủ quan cần hội tụ đủ.',
        detail: `<p><strong>Nguyên nhân cách mạng XHCN:</strong></p>
<ul>
  <li>Mâu thuẫn cơ bản: LLSX xã hội hóa cao >< QHSX chiếm hữu tư nhân TBCN</li>
  <li>Mâu thuẫn giai cấp: công nhân >< tư sản ngày càng gay gắt</li>
</ul>
<p><strong>Điều kiện khách quan:</strong></p>
<ul>
  <li>CNTB phát triển đến mức độ chín muồi mâu thuẫn</li>
  <li>Giai cấp công nhân đủ đông và đủ trưởng thành</li>
</ul>
<p><strong>Điều kiện chủ quan:</strong></p>
<ul>
  <li>Đảng Cộng sản có đường lối đúng đắn</li>
  <li>Giai cấp công nhân có ý thức giai cấp, giác ngộ cách mạng</li>
  <li>Liên minh công-nông được củng cố</li>
</ul>`,
        advanced: `<p><strong>Nội dung cách mạng XHCN:</strong></p>
<ul>
  <li><em>Chính trị:</em> Giai cấp công nhân giành quyền lực nhà nước → thiết lập chuyên chính vô sản</li>
  <li><em>Kinh tế:</em> Xóa bỏ sở hữu tư nhân TBCN → công hữu hóa tư liệu sản xuất → phát triển kinh tế</li>
  <li><em>Văn hóa - tư tưởng:</em> Xây dựng hệ tư tưởng Mác-Lênin, nền văn hóa XHCN</li>
</ul>
<p><em>VN: Cách mạng tháng Tám 1945 (giành độc lập), kháng chiến thống nhất 1975, sau đó là giai đoạn xây dựng CNXH và đổi mới.</em></p>`
    },

    'socialist-state': {
        icon: '🏛️',
        title: 'Nhà Nước Xã Hội Chủ Nghĩa',
        category: 'socialism',
        level: 'intermediate',
        connections: ['socialist-revolution', 'party-role'],
        simple: 'Nhà nước XHCN là nhà nước của dân, do dân, vì dân. Đây là công cụ quyền lực của giai cấp công nhân và nhân dân lao động, tồn tại trong thời kỳ quá độ, tiến tới tiêu vong khi CNCS hoàn toàn thắng lợi.',
        detail: `<p><strong>Bản chất nhà nước XHCN:</strong></p>
<ul>
  <li>Là nhà nước của đại đa số nhân dân lao động (khác với nhà nước TB là của thiểu số)</li>
  <li>Thực hiện chuyên chính vô sản: trấn áp giai cấp thống trị cũ + xây dựng CNXH</li>
  <li>Mang bản chất giai cấp công nhân, tính nhân dân rộng rãi, tính dân tộc sâu sắc</li>
</ul>
<p><strong>Chức năng nhà nước XHCN:</strong></p>
<ul>
  <li>Đối nội: Tổ chức và quản lý kinh tế-xã hội; trấn áp giai cấp thống trị cũ và các phần tử chống đối</li>
  <li>Đối ngoại: Bảo vệ Tổ quốc XHCN; quan hệ quốc tế, ủng hộ phong trào cách mạng</li>
</ul>`,
        advanced: `<p><strong>Nhà nước pháp quyền XHCN ở VN:</strong></p>
<ul>
  <li>Nhà nước pháp quyền XHCN của nhân dân, do nhân dân, vì nhân dân</li>
  <li>Do Đảng CSVN lãnh đạo</li>
  <li>Thực hiện nguyên tắc tập trung dân chủ</li>
  <li>Quyền lực nhà nước là thống nhất, có sự phân công, phối hợp, kiểm soát giữa các cơ quan: lập pháp (Quốc hội), hành pháp (Chính phủ), tư pháp (Tòa án, Viện kiểm sát)</li>
</ul>
<p><em>Xây dựng nhà nước pháp quyền → phòng chống tham nhũng, tiêu cực là nhiệm vụ cấp bách hiện nay.</em></p>`
    },

    'religion-nationality': {
        icon: '🕊️',
        title: 'Vấn Đề Dân Tộc & Tôn Giáo',
        category: 'socialism',
        level: 'advanced',
        connections: ['socialist-state', 'transition-period-vn'],
        simple: 'Trong CNXH: dân tộc bình đẳng, đoàn kết, hợp tác và giúp đỡ nhau. Tôn giáo dần mất đi khi điều kiện vật chất và nhận thức của con người được cải thiện. Đảng CS tôn trọng tự do tín ngưỡng.',
        detail: `<p><strong>Vấn đề dân tộc (Marx-Lenin):</strong></p>
<p>Cương lĩnh dân tộc của Lenin: "Các dân tộc hoàn toàn bình đẳng; các dân tộc được quyền tự quyết; liên hiệp công nhân tất cả các dân tộc lại."</p>
<ul>
  <li>Bình đẳng: không phân biệt dân tộc lớn-nhỏ về chính trị, kinh tế, văn hóa</li>
  <li>Tự quyết: quyền tự quyết kể cả quyền phân lập thành quốc gia độc lập</li>
  <li>Liên hiệp công nhân: đoàn kết giai cấp công nhân xuyên dân tộc</li>
</ul>
<p><strong>Vấn đề tôn giáo (Marx-Lenin):</strong></p>
<ul>
  <li>Tôn giáo là "thuốc phiện của nhân dân" — phản ánh khổ đau và là sự đền bù ảo tưởng</li>
  <li>Nguồn gốc: nhận thức (sợ thiên nhiên) + kinh tế-xã hội (áp bức bóc lột)</li>
  <li>Tôn giáo sẽ tiêu vong khi con người làm chủ được thiên nhiên và xã hội</li>
</ul>`,
        advanced: `<p><strong>Chính sách dân tộc - tôn giáo ở VN:</strong></p>
<p><em>Dân tộc:</em> VN có 54 dân tộc anh em — chính sách đại đoàn kết dân tộc, bình đẳng, đoàn kết, tôn trọng và giúp đỡ nhau. Chống tư tưởng dân tộc hẹp hòi và dân tộc lớn.</p>
<p><em>Tôn giáo:</em> VN có nhiều tôn giáo (Phật giáo, Công giáo, Cao Đài, Hòa Hảo...). Nhà nước tôn trọng và bảo đảm tự do tín ngưỡng. Lợi dụng tôn giáo để chống phá là vi phạm pháp luật.</p>
<p><em>Các thế lực thù địch thường dùng vấn đề dân tộc, tôn giáo để kích động, chia rẽ khối đại đoàn kết dân tộc — cần cảnh giác.</em></p>`
    }
};
