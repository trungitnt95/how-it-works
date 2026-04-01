// Chủ nghĩa Duy vật lịch sử - Historical Materialism
const philosophyHistoricalData = {
    'social-being-consciousness': {
        icon: '🌍',
        title: 'Tồn Tại & Ý Thức Xã Hội',
        category: 'historical',
        level: 'beginner',
        connections: ['productive-forces', 'base-superstructure'],
        simple: 'Tồn tại xã hội (điều kiện sống vật chất) quyết định ý thức xã hội (tư tưởng, quan điểm). Thay đổi hoàn cảnh sống sẽ thay đổi nhận thức và tư tưởng.',
        detail: `<p><strong>Tồn tại xã hội:</strong> Là mặt vật chất của đời sống xã hội — bao gồm điều kiện sinh hoạt vật chất (phương thức sản xuất, điều kiện địa lý, dân số).</p>
<p><strong>Ý thức xã hội:</strong> Là mặt tinh thần của đời sống xã hội — bao gồm tư tưởng, quan điểm, lý luận, tâm lý xã hội.</p>
<p><strong>Quan hệ:</strong></p>
<ul>
  <li>Tồn tại xã hội quyết định ý thức xã hội</li>
  <li>Ý thức xã hội có tính độc lập tương đối và tác động trở lại tồn tại</li>
  <li>Ý thức xã hội có thể đi trước hoặc tụt hậu so với tồn tại xã hội</li>
</ul>`,
        advanced: `<p><strong>Tính độc lập tương đối của ý thức xã hội:</strong></p>
<ol>
  <li>Ý thức xã hội thường lạc hậu hơn tồn tại xã hội (tư tưởng cũ tồn tại sau khi điều kiện sinh ra nó đã mất)</li>
  <li>Ý thức xã hội có thể vượt trước tồn tại xã hội (tư tưởng tiến bộ, khoa học)</li>
  <li>Ý thức xã hội có tính kế thừa trong sự phát triển</li>
  <li>Các hình thái ý thức xã hội có sự tác động qua lại</li>
</ol>
<p><em>VN: Tư tưởng "Duy ý chí" 1975-1986 là ý thức lạc hậu so với tồn tại. Đổi mới 1986 là thay đổi tồn tại → dần thay đổi ý thức.</em></p>`
    },

    'productive-forces': {
        icon: '🏭',
        title: 'LLSX & QHSX',
        category: 'historical',
        level: 'beginner',
        connections: ['social-being-consciousness', 'base-superstructure', 'socioeconomic-formation'],
        simple: 'Lực lượng sản xuất (LLSX) là con người + công cụ. Quan hệ sản xuất (QHSX) là mối quan hệ giữa người với người trong sản xuất. LLSX quyết định QHSX — khi LLSX phát triển mâu thuẫn với QHSX sẽ xảy ra cách mạng.',
        detail: `<p><strong>Lực lượng sản xuất (LLSX):</strong></p>
<ul>
  <li>Người lao động (trình độ, kỹ năng, kinh nghiệm)</li>
  <li>Tư liệu sản xuất (công cụ lao động, đối tượng lao động)</li>
  <li>Khoa học kỹ thuật ngày càng trở thành LLSX trực tiếp</li>
</ul>
<p><strong>Quan hệ sản xuất (QHSX):</strong></p>
<ul>
  <li>Quan hệ sở hữu về tư liệu sản xuất (ai sở hữu nhà máy, đất đai?)</li>
  <li>Quan hệ quản lý, tổ chức sản xuất</li>
  <li>Quan hệ phân phối sản phẩm</li>
</ul>
<p><strong>Quy luật:</strong> LLSX quyết định QHSX; QHSX phải phù hợp với trình độ phát triển của LLSX.</p>`,
        advanced: `<p><strong>Khi QHSX không phù hợp LLSX:</strong></p>
<p>Nếu QHSX lạc hậu hơn LLSX → kìm hãm sản xuất → cách mạng xã hội. Đây là quy luật cơ bản chi phối sự thay thế các phương thức sản xuất trong lịch sử.</p>
<p><em>VN: Trước 1986 — QHSX tập thể hóa không phù hợp với LLSX nông nghiệp → kìm hãm → Đổi mới (cải tạo QHSX cho phù hợp: giao đất cho nông dân, chấp nhận kinh tế tư nhân).</em></p>`
    },

    'base-superstructure': {
        icon: '🏗️',
        title: 'CSHT & KTTT',
        category: 'historical',
        level: 'intermediate',
        connections: ['productive-forces', 'socioeconomic-formation'],
        simple: 'Cơ sở hạ tầng (CSHT) là toàn bộ quan hệ kinh tế. Kiến trúc thượng tầng (KTTT) là chính trị, pháp luật, tư tưởng. CSHT quyết định KTTT nhưng KTTT có tác động ngược lại.',
        detail: `<p><strong>Cơ sở hạ tầng (CSHT):</strong></p>
<p>Là toàn bộ các quan hệ sản xuất hợp thành cơ cấu kinh tế của một xã hội nhất định (bao gồm quan hệ kinh tế thống trị, tàn dư của xã hội cũ, mầm mống của xã hội mới).</p>
<p><strong>Kiến trúc thượng tầng (KTTT):</strong></p>
<p>Toàn bộ những quan điểm, tư tưởng, tổ chức chính trị, pháp luật, đạo đức, nghệ thuật, tôn giáo... và các thể chế tương ứng được xây dựng trên CSHT.</p>
<p><strong>Mối quan hệ biện chứng:</strong></p>
<ul>
  <li>CSHT quyết định KTTT (nội dung, tính chất của KTTT)</li>
  <li>KTTT tác động tích cực trở lại CSHT (củng cố hoặc cải tạo)</li>
</ul>`,
        advanced: `<p><strong>Nhà nước & pháp luật trong KTTT:</strong></p>
<p>Nhà nước là công cụ quyền lực quan trọng nhất của giai cấp thống trị, bảo vệ CSHT kinh tế tương ứng. Thay đổi CSHT tất yếu dẫn đến thay đổi KTTT.</p>
<p><em>VN: CSHT kinh tế thị trường định hướng XHCN đặt ra yêu cầu tương ứng với KTTT: Nhà nước pháp quyền XHCN, hoàn thiện hệ thống pháp luật kinh tế thị trường.</em></p>`
    },

    'socioeconomic-formation': {
        icon: '🗺️',
        title: 'Hình Thái Kinh Tế - Xã Hội',
        category: 'historical',
        level: 'intermediate',
        connections: ['productive-forces', 'base-superstructure', 'class-struggle'],
        simple: '5 hình thái KT-XH: Công xã nguyên thủy → Chiếm hữu nô lệ → Phong kiến → Tư bản chủ nghĩa → Cộng sản chủ nghĩa. Chúng thay thế nhau theo quy luật tất yếu.',
        detail: `<p><strong>Khái niệm:</strong> Hình thái KT-XH là một xã hội cụ thể ở giai đoạn phát triển lịch sử nhất định, với CSHT và KTTT đặc trưng tương ứng.</p>
<p><strong>5 hình thái:</strong></p>
<ol>
  <li>Công xã nguyên thủy (chưa có giai cấp, không có nhà nước)</li>
  <li>Chiếm hữu nô lệ (nô lệ hoàn toàn bị chiếm hữu)</li>
  <li>Phong kiến (nông nô phụ thuộc địa chủ)</li>
  <li>Tư bản chủ nghĩa (tư bản sở hữu tư liệu, công nhân bán sức lao động)</li>
  <li>Cộng sản chủ nghĩa (xóa bỏ giai cấp, tư liệu sản xuất công hữu)</li>
</ol>`,
        advanced: `<p><strong>Sự phát triển lịch sử tự nhiên:</strong></p>
<p>Sự thay thế các hình thái KT-XH là một quá trình lịch sử - tự nhiên. Lịch sử loài người về cơ bản trải qua 5 hình thái, có thể bỏ qua một số hình thái trong điều kiện nhất định.</p>
<p><em>VN: Việt Nam quá độ lên CNXH bỏ qua chế độ tư bản chủ nghĩa — điều kiện: có Đảng lãnh đạo, có sự giúp đỡ từ các nước XHCN, phát triển LLSX...</em></p>`
    },

    'class-struggle': {
        icon: '✊',
        title: 'Giai Cấp & Đấu Tranh Giai Cấp',
        category: 'historical',
        level: 'advanced',
        connections: ['socioeconomic-formation', 'working-class'],
        simple: 'Giai cấp là các nhóm người có vị trí khác nhau trong quan hệ sản xuất. Đấu tranh giai cấp là động lực phát triển xã hội trong xã hội có giai cấp.',
        detail: `<p><strong>Giai cấp là gì?</strong></p>
<p>(Lenin): "Giai cấp là những tập đoàn người to lớn, khác nhau về địa vị của họ trong một hệ thống sản xuất xã hội nhất định trong lịch sử, khác nhau về quan hệ của họ (thường thì những quan hệ này được pháp luật quy định và thừa nhận) đối với tư liệu sản xuất, về vai trò của họ trong tổ chức lao động xã hội, và như vậy là khác nhau về cách thức hưởng thụ và về phần của cải xã hội ít hoặc nhiều mà họ được hưởng."</p>
<p><strong>Nguồn gốc:</strong> Giai cấp xuất hiện khi LLSX phát triển đủ tạo ra của cải thặng dư → xuất hiện chiếm đoạt → nhà nước bảo vệ quyền lợi giai cấp thống trị.</p>`,
        advanced: `<p><strong>Đấu tranh giai cấp:</strong></p>
<ul>
  <li>Là tất yếu trong XH có giai cấp đối kháng</li>
  <li>Là động lực phát triển của lịch sử</li>
  <li>Hình thức: kinh tế, chính trị, tư tưởng</li>
  <li>Cao nhất: Cách mạng xã hội — xóa bỏ giai cấp thống trị cũ, thiết lập trật tự mới</li>
</ul>
<p><em>VN: Giai cấp công nhân (lãnh đạo), nông dân (đồng minh chiến lược), trí thức (lực lượng quan trọng) — liên minh công-nông-trí là nền tảng chính trị của CNXHVN.</em></p>`
    }
};
