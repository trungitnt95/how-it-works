// ==================== COMPONENT DATA (18 Components) ====================

const componentData = {
    // ==================== PRIMITIVE (1-3) ====================
    'primitive-commune': {
        icon: '🏕️',
        title: 'Công Xã Nguyên Thủy',
        order: 1,
        category: 'primitive',
        era: 'Trước 10.000 TCN',
        connections: ['tribal-council', 'chiefdom'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> Thời kỳ đầu tiên của loài người - mọi người sống bình đẳng, chia sẻ mọi thứ.</p>
            <div class="example-box">
                <strong>Đặc điểm:</strong><br>
                • Không có tài sản riêng<br>
                • Mọi người cùng săn bắt, hái lượm<br>
                • Quyết định chung bởi cả nhóm
            </div>
            <h4>📌 Cách hoạt động:</h4>
            <ul>
                <li>🏃 Săn bắt - hái lượm theo nhóm</li>
                <li>🍖 Thức ăn chia đều cho mọi người</li>
                <li>👴 Người già được kính trọng vì kinh nghiệm</li>
                <li>⚖️ Không có giai cấp, không có bóc lột</li>
            </ul>
        `,
        detail: `
            <p><strong>Công xã nguyên thủy</strong> là hình thái kinh tế - xã hội đầu tiên trong lịch sử loài người.</p>
            <h4>🔄 Cơ chế vận hành:</h4>
            <ul>
                <li><strong>Sở hữu chung:</strong> Đất đai, công cụ, thức ăn thuộc về cộng đồng</li>
                <li><strong>Lao động tập thể:</strong> Mọi người cùng làm việc</li>
                <li><strong>Phân phối bình đẳng:</strong> Chia đều sản phẩm</li>
                <li><strong>Không có nhà nước:</strong> Tự quản theo tập tục</li>
            </ul>
            <h4>💡 Tại sao tan rã?</h4>
            <ol>
                <li>Phát minh nông nghiệp → dư thừa sản phẩm</li>
                <li>Xuất hiện tư hữu</li>
                <li>Phân hóa giàu nghèo</li>
            </ol>
        `,
        advanced: `
            <h4>📊 Phân tích Marx:</h4>
            <p>Theo Marx, đây là "chủ nghĩa cộng sản nguyên thủy" - xã hội không có giai cấp đầu tiên.</p>
            <ul>
                <li><strong>Lực lượng sản xuất:</strong> Cực kỳ thấp</li>
                <li><strong>Quan hệ sản xuất:</strong> Hợp tác bình đẳng</li>
                <li><strong>Mâu thuẫn:</strong> Giữa tự nhiên và con người</li>
            </ul>
            <div class="example-box">
                <strong>Ví dụ còn tồn tại:</strong> Một số bộ lạc ở Amazon, Papua New Guinea vẫn duy trì lối sống tương tự.
            </div>
        `,
        keyPoints: ['Sở hữu chung', 'Bình đẳng', 'Không giai cấp', 'Săn bắt hái lượm']
    },

    'tribal-council': {
        icon: '🪶',
        title: 'Hội Đồng Bộ Lạc',
        order: 2,
        category: 'primitive',
        era: '10.000 - 5.000 TCN',
        connections: ['primitive-commune', 'chiefdom'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> Nhóm người lớn tuổi, có kinh nghiệm họp bàn quyết định việc chung.</p>
            <div class="example-box">
                <strong>Giống như:</strong> Cuộc họp gia đình mở rộng, mọi người cùng bàn bạc.
            </div>
            <h4>📌 Làm gì?</h4>
            <ul>
                <li>👥 Giải quyết tranh chấp</li>
                <li>⚔️ Quyết định chiến tranh hay hòa bình</li>
                <li>🎭 Tổ chức lễ hội, nghi lễ</li>
                <li>📜 Truyền lại phong tục, tập quán</li>
            </ul>
        `,
        detail: `
            <h4>🔄 Cơ chế hoạt động:</h4>
            <ul>
                <li><strong>Thành viên:</strong> Người già, thủ lĩnh chiến tranh, pháp sư</li>
                <li><strong>Quyết định:</strong> Thường bằng đồng thuận</li>
                <li><strong>Quyền lực:</strong> Dựa trên uy tín, không cưỡng chế</li>
            </ul>
            <h4>💡 Đặc điểm:</h4>
            <ul>
                <li>Dân chủ nguyên thủy - mọi người có tiếng nói</li>
                <li>Không có quân đội thường trực</li>
                <li>Luật lệ dựa trên tập tục</li>
            </ul>
        `,
        advanced: `
            <h4>📊 So sánh với dân chủ hiện đại:</h4>
            <table style="width:100%; border-collapse: collapse;">
                <tr style="border-bottom: 1px solid rgba(255,255,255,0.2);">
                    <th style="text-align:left; padding: 0.5rem;">Hội đồng bộ lạc</th>
                    <th style="text-align:left; padding: 0.5rem;">Quốc hội hiện đại</th>
                </tr>
                <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                    <td style="padding: 0.5rem;">Đồng thuận</td>
                    <td style="padding: 0.5rem;">Đa số thắng</td>
                </tr>
                <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                    <td style="padding: 0.5rem;">Uy tín cá nhân</td>
                    <td style="padding: 0.5rem;">Bầu cử</td>
                </tr>
                <tr>
                    <td style="padding: 0.5rem;">Không cưỡng chế</td>
                    <td style="padding: 0.5rem;">Có pháp luật bắt buộc</td>
                </tr>
            </table>
        `,
        keyPoints: ['Dân chủ nguyên thủy', 'Đồng thuận', 'Người già', 'Tập tục']
    },

    'chiefdom': {
        icon: '🗿',
        title: 'Xã Hội Thủ Lĩnh',
        order: 3,
        category: 'primitive',
        era: '5.000 - 3.000 TCN',
        connections: ['tribal-council', 'slavery-state'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> Một người mạnh nhất/khôn nhất trở thành lãnh đạo cả nhóm.</p>
            <div class="example-box">
                <strong>Như trong phim:</strong> Vị thủ lĩnh của bộ lạc, được mọi người tôn kính và tuân theo.
            </div>
            <h4>📌 Đặc điểm:</h4>
            <ul>
                <li>👑 Một người đứng đầu (thủ lĩnh)</li>
                <li>🏆 Thủ lĩnh có nhiều đặc quyền hơn</li>
                <li>👨‍👩‍👧‍👦 Quyền lực có thể truyền cho con</li>
                <li>⚔️ Bắt đầu có chiến tranh chiếm đất</li>
            </ul>
        `,
        detail: `
            <h4>🔄 Sự chuyển đổi quyền lực:</h4>
            <p>Từ bình đẳng → phân tầng xã hội</p>
            <ul>
                <li><strong>Thủ lĩnh:</strong> Quyền phân phối tài nguyên</li>
                <li><strong>Gia đình thủ lĩnh:</strong> Địa vị cao hơn</li>
                <li><strong>Thường dân:</strong> Phải cống nạp</li>
            </ul>
            <h4>💡 Nguồn gốc quyền lực:</h4>
            <ol>
                <li>Sức mạnh quân sự</li>
                <li>Khả năng tổ chức</li>
                <li>Liên kết với thế giới tâm linh</li>
            </ol>
        `,
        advanced: `
            <h4>📊 Lý thuyết hình thành nhà nước:</h4>
            <p>Chiefdom là bước trung gian từ xã hội không nhà nước → nhà nước.</p>
            <div class="warning-box">
                <strong>Điểm khác biệt với nhà nước:</strong>
                <ul>
                    <li>Chưa có bộ máy quan liêu chuyên nghiệp</li>
                    <li>Chưa có hệ thống thuế chính thức</li>
                    <li>Quyền lực dựa vào quan hệ họ hàng</li>
                </ul>
            </div>
        `,
        keyPoints: ['Thủ lĩnh', 'Phân tầng', 'Cống nạp', 'Cha truyền con nối']
    },

    // ==================== ANCIENT (4-6) ====================
    'slavery-state': {
        icon: '⛓️',
        title: 'Nhà Nước Chiếm Hữu Nô Lệ',
        order: 4,
        category: 'ancient',
        era: '3.000 TCN - 500 SCN',
        connections: ['chiefdom', 'ancient-empire', 'city-state', 'feudal-monarchy'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> Xã hội chia làm 2 loại người: chủ nô (có quyền) và nô lệ (không có quyền gì).</p>
            <div class="example-box">
                <strong>Ví dụ lịch sử:</strong><br>
                • Ai Cập cổ đại: Pharaoh và nô lệ xây kim tự tháp<br>
                • Hy Lạp cổ đại: Công dân Athens và nô lệ<br>
                • La Mã: Đấu sĩ nô lệ
            </div>
            <h4>📌 Cách hoạt động:</h4>
            <ul>
                <li>👑 Chủ nô sở hữu nô lệ như tài sản</li>
                <li>⛓️ Nô lệ làm việc không lương</li>
                <li>⚔️ Chiến tranh để bắt thêm nô lệ</li>
                <li>🏛️ Nhà nước bảo vệ quyền chủ nô</li>
            </ul>
        `,
        detail: `
            <h4>🔄 Cơ cấu xã hội:</h4>
            <ol>
                <li><strong>Vua/Pharaoh:</strong> Quyền lực tối cao</li>
                <li><strong>Quý tộc, tăng lữ:</strong> Chủ nô lớn</li>
                <li><strong>Thường dân tự do:</strong> Nông dân, thợ thủ công</li>
                <li><strong>Nô lệ:</strong> Không có quyền công dân</li>
            </ol>
            <h4>💡 Nguồn nô lệ:</h4>
            <ul>
                <li>Tù binh chiến tranh</li>
                <li>Con của nô lệ</li>
                <li>Người mắc nợ không trả được</li>
                <li>Mua bán từ nơi khác</li>
            </ul>
        `,
        advanced: `
            <h4>📊 Mâu thuẫn cơ bản:</h4>
            <p>Chủ nô ↔ Nô lệ</p>
            <div class="warning-box">
                <strong>Các cuộc khởi nghĩa nô lệ:</strong>
                <ul>
                    <li>Spartacus (73-71 TCN) - La Mã</li>
                    <li>Nhiều cuộc nổi dậy ở Ai Cập</li>
                </ul>
            </div>
            <h4>Tại sao tan rã?</h4>
            <ul>
                <li>Năng suất lao động thấp (nô lệ không có động lực)</li>
                <li>Chi phí duy trì quân đội lớn</li>
                <li>Khởi nghĩa liên tục</li>
            </ul>
        `,
        keyPoints: ['Chủ nô', 'Nô lệ', 'Chiến tranh', 'Bóc lột']
    },

    'ancient-empire': {
        icon: '🏛️',
        title: 'Đế Chế Cổ Đại',
        order: 5,
        category: 'ancient',
        era: '3.000 TCN - 500 SCN',
        connections: ['slavery-state', 'city-state', 'feudal-monarchy'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> Một nước mạnh chinh phục nhiều nước khác, tạo thành đế chế khổng lồ.</p>
            <div class="example-box">
                <strong>Đế chế nổi tiếng:</strong><br>
                • Đế chế La Mã (trải khắp châu Âu)<br>
                • Đế chế Ba Tư (Trung Đông)<br>
                • Đế chế Maurya (Ấn Độ)<br>
                • Nhà Hán (Trung Quốc)
            </div>
            <h4>📌 Đặc điểm:</h4>
            <ul>
                <li>👑 Hoàng đế có quyền lực tuyệt đối</li>
                <li>🗺️ Lãnh thổ rộng lớn, nhiều dân tộc</li>
                <li>⚔️ Quân đội hùng mạnh</li>
                <li>🛣️ Hệ thống đường sá, luật pháp thống nhất</li>
            </ul>
        `,
        detail: `
            <h4>🔄 Cơ cấu quyền lực:</h4>
            <ul>
                <li><strong>Hoàng đế:</strong> Quyền lực tối cao, thường được thần hóa</li>
                <li><strong>Quan lại trung ương:</strong> Quản lý đế chế</li>
                <li><strong>Tổng đốc địa phương:</strong> Cai quản các tỉnh</li>
                <li><strong>Quân đội:</strong> Duy trì trật tự, mở rộng lãnh thổ</li>
            </ul>
            <h4>💡 Cách duy trì quyền lực:</h4>
            <ol>
                <li>Quân đội mạnh đàn áp nổi loạn</li>
                <li>Đường sá tốt để điều quân nhanh</li>
                <li>Tôn giáo/thần quyền hỗ trợ</li>
                <li>Cho phép tự trị địa phương ở mức độ nhất định</li>
            </ol>
        `,
        advanced: `
            <h4>📊 Chu kỳ triều đại:</h4>
            <ol>
                <li><strong>Thành lập:</strong> Vua mạnh, đất đai mới</li>
                <li><strong>Phát triển:</strong> Ổn định, thịnh vượng</li>
                <li><strong>Suy thoái:</strong> Tham nhũng, nổi loạn</li>
                <li><strong>Sụp đổ:</strong> Xâm lược/cách mạng</li>
            </ol>
            <div class="warning-box">
                <strong>Nguyên nhân sụp đổ thường gặp:</strong>
                <ul>
                    <li>Quá rộng, khó quản lý</li>
                    <li>Chi phí quân sự khổng lồ</li>
                    <li>Nổi loạn vùng biên</li>
                    <li>Suy đồi đạo đức tầng lớp cai trị</li>
                </ul>
            </div>
        `,
        keyPoints: ['Hoàng đế', 'Chinh phục', 'Quan liêu', 'Quân đội']
    },

    'city-state': {
        icon: '🏙️',
        title: 'Thành Bang',
        order: 6,
        category: 'ancient',
        era: '1.000 TCN - 300 TCN',
        connections: ['slavery-state', 'ancient-empire', 'democracy'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> Một thành phố tự coi mình là một nước, có chính phủ và quân đội riêng.</p>
            <div class="example-box">
                <strong>Ví dụ nổi tiếng:</strong><br>
                • Athens (dân chủ trực tiếp)<br>
                • Sparta (quân phiệt)<br>
                • Carthage (thương mại)<br>
                • Singapore ngày nay giống thành bang
            </div>
            <h4>📌 Đặc điểm:</h4>
            <ul>
                <li>🏛️ Một thành phố = một quốc gia</li>
                <li>👥 Quy mô nhỏ, dễ quản lý</li>
                <li>🗳️ Có thể có dân chủ trực tiếp</li>
                <li>⚔️ Thường xuyên chiến tranh với nhau</li>
            </ul>
        `,
        detail: `
            <h4>🔄 Các mô hình chính trị:</h4>
            <ul>
                <li><strong>Dân chủ (Athens):</strong> Công dân nam bỏ phiếu</li>
                <li><strong>Quý tộc (Corinth):</strong> Gia đình giàu cai trị</li>
                <li><strong>Quân phiệt (Sparta):</strong> Vua + hội đồng chiến binh</li>
                <li><strong>Bạo chúa:</strong> Một người chiếm quyền</li>
            </ul>
            <h4>💡 Dân chủ Athens:</h4>
            <ul>
                <li>Công dân nam trên 18 tuổi được bỏ phiếu</li>
                <li>Họp tại Agora (quảng trường)</li>
                <li>Bốc thăm chọn quan chức</li>
                <li>Nhưng: Phụ nữ, nô lệ, người nước ngoài không có quyền</li>
            </ul>
        `,
        advanced: `
            <h4>📊 So sánh Athens vs Sparta:</h4>
            <table style="width:100%; border-collapse: collapse;">
                <tr style="border-bottom: 1px solid rgba(255,255,255,0.2);">
                    <th style="padding: 0.5rem;">Tiêu chí</th>
                    <th style="padding: 0.5rem;">Athens</th>
                    <th style="padding: 0.5rem;">Sparta</th>
                </tr>
                <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                    <td style="padding: 0.5rem;">Chính trị</td>
                    <td style="padding: 0.5rem;">Dân chủ</td>
                    <td style="padding: 0.5rem;">Quân phiệt</td>
                </tr>
                <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                    <td style="padding: 0.5rem;">Kinh tế</td>
                    <td style="padding: 0.5rem;">Thương mại</td>
                    <td style="padding: 0.5rem;">Nông nghiệp</td>
                </tr>
                <tr>
                    <td style="padding: 0.5rem;">Giá trị</td>
                    <td style="padding: 0.5rem;">Tri thức, nghệ thuật</td>
                    <td style="padding: 0.5rem;">Kỷ luật, chiến đấu</td>
                </tr>
            </table>
        `,
        keyPoints: ['Thành phố-nhà nước', 'Dân chủ trực tiếp', 'Công dân', 'Quy mô nhỏ']
    },

    // ==================== FEUDAL (7-10) ====================
    'feudal-monarchy': {
        icon: '👑',
        title: 'Quân Chủ Phong Kiến',
        order: 7,
        category: 'feudal',
        era: '500 - 1800',
        connections: ['slavery-state', 'ancient-empire', 'church-power', 'feudal-lords', 'absolute-monarchy'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> Vua là người đứng đầu, nhưng phải chia sẻ quyền lực với các lãnh chúa.</p>
            <div class="example-box">
                <strong>Như trong Game of Thrones:</strong><br>
                • Vua ngồi trên Ngai Sắt<br>
                • Các lãnh chúa cai trị vùng đất của họ<br>
                • Hiệp sĩ phục vụ lãnh chúa<br>
                • Nông nô làm ruộng
            </div>
            <h4>📌 Đặc điểm:</h4>
            <ul>
                <li>👑 Vua: quyền lực tối cao (trên danh nghĩa)</li>
                <li>🏰 Lãnh chúa: cai trị vùng đất được phong</li>
                <li>⚔️ Hiệp sĩ: chiến đấu đổi lấy đất</li>
                <li>🌾 Nông nô: làm ruộng, không được rời đi</li>
            </ul>
        `,
        detail: `
            <h4>🔄 Kim tự tháp phong kiến:</h4>
            <ol>
                <li><strong>Vua:</strong> Sở hữu toàn bộ đất (lý thuyết)</li>
                <li><strong>Đại lãnh chúa:</strong> Được vua phong đất</li>
                <li><strong>Lãnh chúa nhỏ:</strong> Phụ thuộc đại lãnh chúa</li>
                <li><strong>Hiệp sĩ:</strong> Chiến đấu đổi lấy đất nhỏ</li>
                <li><strong>Nông nô:</strong> Làm ruộng, đóng thuế</li>
            </ol>
            <h4>💡 Nghĩa vụ hỗ tương:</h4>
            <ul>
                <li>Chúa cho đất → Chư hầu phải chiến đấu</li>
                <li>Chư hầu bảo vệ → Nông nô phải làm ruộng</li>
            </ul>
        `,
        advanced: `
            <h4>📊 Quyền lực phân tán:</h4>
            <p>Khác với đế chế tập trung, phong kiến phân quyền:</p>
            <ul>
                <li>Lãnh chúa có quân đội riêng</li>
                <li>Tòa án riêng</li>
                <li>Thu thuế riêng</li>
                <li>Vua phụ thuộc vào lòng trung thành</li>
            </ul>
            <div class="warning-box">
                <strong>Hạn chế của vua:</strong>
                <ul>
                    <li>Không có quân đội thường trực</li>
                    <li>Ngân khố phụ thuộc vào đóng góp</li>
                    <li>Lãnh chúa mạnh có thể chống lại</li>
                </ul>
            </div>
        `,
        keyPoints: ['Phân quyền', 'Phong đất', 'Nghĩa vụ', 'Kim tự tháp']
    },

    'church-power': {
        icon: '⛪',
        title: 'Quyền Lực Giáo Hội',
        order: 8,
        category: 'feudal',
        era: '500 - 1800',
        connections: ['feudal-monarchy', 'feudal-lords'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> Giáo hội (Công giáo) có quyền lực cực lớn, đôi khi còn hơn cả vua.</p>
            <div class="example-box">
                <strong>Quyền lực thực sự:</strong><br>
                • Giáo hoàng có thể phế truất vua<br>
                • Giáo hội sở hữu 1/3 đất đai châu Âu<br>
                • Kiểm soát giáo dục, y tế
            </div>
            <h4>📌 Làm gì?</h4>
            <ul>
                <li>✝️ Định nghĩa đúng-sai, tốt-xấu</li>
                <li>👑 Đội vương miện cho vua (hợp pháp hóa)</li>
                <li>📚 Nắm giữ tri thức (tu viện)</li>
                <li>💰 Thu thuế thập phân</li>
            </ul>
        `,
        detail: `
            <h4>🔄 Cấu trúc quyền lực:</h4>
            <ul>
                <li><strong>Giáo hoàng:</strong> Đại diện Chúa trên trần gian</li>
                <li><strong>Hồng y:</strong> Bầu Giáo hoàng mới</li>
                <li><strong>Tổng giám mục:</strong> Cai quản vùng lớn</li>
                <li><strong>Giám mục:</strong> Quản lý giáo phận</li>
                <li><strong>Linh mục:</strong> Phục vụ giáo xứ</li>
            </ul>
            <h4>💡 Xung đột vua - Giáo hoàng:</h4>
            <ul>
                <li>Ai có quyền bổ nhiệm giám mục?</li>
                <li>Ai đứng trên ai?</li>
                <li>Tranh chấp quyền thu thuế</li>
            </ul>
        `,
        advanced: `
            <h4>📊 Công cụ quyền lực:</h4>
            <ul>
                <li><strong>Rút phép thông công:</strong> Khai trừ khỏi giáo hội</li>
                <li><strong>Cấm thánh lễ:</strong> Cấm cả vương quốc</li>
                <li><strong>Thập tự chinh:</strong> Huy động quân đội thánh</li>
                <li><strong>Tòa dị giáo:</strong> Xét xử người "lạc đạo"</li>
            </ul>
            <div class="example-box">
                <strong>Ví dụ nổi tiếng:</strong><br>
                Hoàng đế Henry IV phải quỳ 3 ngày trong tuyết xin Giáo hoàng Gregory VII tha thứ (1077).
            </div>
        `,
        keyPoints: ['Giáo hoàng', 'Thần quyền', 'Thuế thập phân', 'Tòa dị giáo']
    },

    'feudal-lords': {
        icon: '🏰',
        title: 'Lãnh Chúa Phong Kiến',
        order: 9,
        category: 'feudal',
        era: '500 - 1800',
        connections: ['feudal-monarchy', 'church-power', 'peasants'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> Quý tộc giàu có sở hữu đất đai và cai trị người dân trên đó.</p>
            <div class="example-box">
                <strong>Cuộc sống lãnh chúa:</strong><br>
                • Sống trong lâu đài<br>
                • Có quân đội riêng<br>
                • Tổ chức săn bắn, tiệc tùng<br>
                • Thu thuế từ nông dân
            </div>
            <h4>📌 Quyền lực:</h4>
            <ul>
                <li>🏰 Sở hữu lãnh địa (đất đai rộng lớn)</li>
                <li>⚔️ Nuôi quân đội, xây lâu đài</li>
                <li>⚖️ Xét xử tranh chấp trong lãnh địa</li>
                <li>💰 Thu tô thuế từ nông dân</li>
            </ul>
        `,
        detail: `
            <h4>🔄 Hệ thống lãnh địa:</h4>
            <ul>
                <li><strong>Đất chúa:</strong> Lãnh chúa trực tiếp quản lý</li>
                <li><strong>Đất phần:</strong> Chia cho nông dân canh tác</li>
                <li><strong>Đất chung:</strong> Đồng cỏ, rừng cùng sử dụng</li>
            </ul>
            <h4>💡 Nghĩa vụ nông dân:</h4>
            <ul>
                <li>Nộp 1/10 thu hoạch (tithe) cho giáo hội</li>
                <li>Nộp tô cho lãnh chúa</li>
                <li>Lao dịch (corvée) - làm không công</li>
                <li>Không được rời lãnh địa</li>
            </ul>
        `,
        advanced: `
            <h4>📊 Kinh tế lãnh địa:</h4>
            <p>Tự cung tự cấp - sản xuất mọi thứ cần thiết trong lãnh địa.</p>
            <div class="warning-box">
                <strong>Mâu thuẫn:</strong>
                <ul>
                    <li>Lãnh chúa muốn tăng tô thuế</li>
                    <li>Nông dân muốn tự do hơn</li>
                    <li>Nhiều cuộc khởi nghĩa nông dân</li>
                </ul>
            </div>
            <h4>Sự suy tàn:</h4>
            <ul>
                <li>Dịch hạch (1347-1351) giết 1/3 dân số</li>
                <li>Thiếu lao động → nông dân có quyền thương lượng</li>
                <li>Thương mại phát triển → tiền quan trọng hơn đất</li>
            </ul>
        `,
        keyPoints: ['Lãnh địa', 'Tô thuế', 'Lao dịch', 'Lâu đài']
    },

    'peasants': {
        icon: '🌾',
        title: 'Nông Dân & Nông Nô',
        order: 10,
        category: 'feudal',
        era: '500 - 1800',
        connections: ['feudal-lords', 'capitalism'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> Đa số dân chúng - làm ruộng cả đời để nuôi tầng lớp trên.</p>
            <div class="example-box">
                <strong>Sự khác biệt:</strong><br>
                • <strong>Nông dân tự do:</strong> Có thể đi lại, ít quyền<br>
                • <strong>Nông nô (serf):</strong> Gắn liền với đất, không được rời đi
            </div>
            <h4>📌 Cuộc sống:</h4>
            <ul>
                <li>🌾 Làm ruộng từ sáng đến tối</li>
                <li>🏚️ Ở nhà tranh vách đất</li>
                <li>🍞 Ăn uống đạm bạc</li>
                <li>⛪ Niềm an ủi: tôn giáo, lễ hội</li>
            </ul>
        `,
        detail: `
            <h4>🔄 Nghĩa vụ phải thực hiện:</h4>
            <ul>
                <li><strong>Tô:</strong> Nộp 30-50% thu hoạch</li>
                <li><strong>Thuế thập phân:</strong> 10% cho giáo hội</li>
                <li><strong>Lao dịch:</strong> Làm việc miễn phí cho chúa</li>
                <li><strong>Thuế đặc biệt:</strong> Kết hôn, thừa kế, xay bột...</li>
            </ul>
            <h4>💡 Quyền hạn chế:</h4>
            <ul>
                <li>Không được học hành</li>
                <li>Không được rời lãnh địa (nông nô)</li>
                <li>Không được kết hôn tự do</li>
                <li>Bị xét xử bởi tòa lãnh chúa</li>
            </ul>
        `,
        advanced: `
            <h4>📊 Các cuộc khởi nghĩa:</h4>
            <ul>
                <li><strong>Jacquerie (1358):</strong> Pháp - bị đàn áp</li>
                <li><strong>Peasants' Revolt (1381):</strong> Anh - yêu cầu bãi bỏ nông nô</li>
                <li><strong>German Peasants' War (1524):</strong> Đức - bị đàn áp đẫm máu</li>
            </ul>
            <div class="success-box">
                <strong>Giải phóng dần dần:</strong>
                <ul>
                    <li>Dịch hạch → thiếu lao động</li>
                    <li>Nông dân có quyền thương lượng</li>
                    <li>Nhiều nơi bãi bỏ nông nô</li>
                    <li>Cuối cùng: Cách mạng Pháp 1789</li>
                </ul>
            </div>
        `,
        keyPoints: ['Nông nô', 'Tô thuế', 'Lao dịch', 'Khởi nghĩa']
    },

    // ==================== MODERN (11-15) ====================
    'absolute-monarchy': {
        icon: '🦁',
        title: 'Quân Chủ Chuyên Chế',
        order: 11,
        category: 'modern',
        era: '1500 - 1800',
        connections: ['feudal-monarchy', 'capitalism', 'democracy'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> Vua có TOÀN QUYỀN, không ai được cãi lại, "Vua là pháp luật".</p>
            <div class="example-box">
                <strong>Câu nói nổi tiếng:</strong><br>
                Louis XIV (Pháp): "Nhà nước là trẫm" (L'État, c'est moi)
            </div>
            <h4>📌 Đặc điểm:</h4>
            <ul>
                <li>👑 Vua có quyền lực tuyệt đối</li>
                <li>⚖️ Vua đứng trên pháp luật</li>
                <li>💰 Kiểm soát thuế, quân đội, ngoại giao</li>
                <li>✝️ Được coi là đại diện của Chúa</li>
            </ul>
        `,
        detail: `
            <h4>🔄 Sự khác biệt với phong kiến:</h4>
            <table style="width:100%; border-collapse: collapse;">
                <tr style="border-bottom: 1px solid rgba(255,255,255,0.2);">
                    <th style="padding: 0.5rem;">Phong kiến</th>
                    <th style="padding: 0.5rem;">Quân chủ chuyên chế</th>
                </tr>
                <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                    <td style="padding: 0.5rem;">Quyền lực phân tán</td>
                    <td style="padding: 0.5rem;">Quyền lực tập trung</td>
                </tr>
                <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                    <td style="padding: 0.5rem;">Lãnh chúa có quân riêng</td>
                    <td style="padding: 0.5rem;">Chỉ vua có quân đội</td>
                </tr>
                <tr>
                    <td style="padding: 0.5rem;">Nhiều tòa án</td>
                    <td style="padding: 0.5rem;">Hệ thống tư pháp thống nhất</td>
                </tr>
            </table>
            <h4>💡 Công cụ quyền lực:</h4>
            <ul>
                <li>Quân đội thường trực</li>
                <li>Bộ máy quan liêu</li>
                <li>Thuế tập trung</li>
                <li>"Quyền thần thánh của vua"</li>
            </ul>
        `,
        advanced: `
            <h4>📊 Lý thuyết chính trị:</h4>
            <ul>
                <li><strong>Quyền thần thánh:</strong> Vua được Chúa chọn</li>
                <li><strong>Hobbes:</strong> Nhà nước mạnh cần thiết để tránh hỗn loạn</li>
                <li><strong>Bossuet:</strong> Vua là đại diện Chúa</li>
            </ul>
            <div class="warning-box">
                <strong>Mâu thuẫn dẫn đến sụp đổ:</strong>
                <ul>
                    <li>Tư sản giàu nhưng không có quyền</li>
                    <li>Thuế khóa nặng nề</li>
                    <li>Đặc quyền quý tộc bất công</li>
                    <li>→ Cách mạng tư sản</li>
                </ul>
            </div>
        `,
        keyPoints: ['Tập trung quyền lực', 'Quyền thần thánh', 'Quân đội thường trực', 'Quan liêu']
    },

    'capitalism': {
        icon: '🏭',
        title: 'Chủ Nghĩa Tư Bản',
        order: 12,
        category: 'modern',
        era: '1800 - nay',
        connections: ['absolute-monarchy', 'peasants', 'socialism', 'democracy', 'globalization'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> Ai có vốn (tiền, nhà máy) thì làm chủ, thuê người khác làm việc.</p>
            <div class="example-box">
                <strong>Ví dụ đơn giản:</strong><br>
                • Bạn có 1 tỷ → mở quán cafe<br>
                • Thuê 5 nhân viên, trả lương 10tr/tháng<br>
                • Doanh thu 100tr, chi phí 60tr<br>
                • Lợi nhuận 40tr → của bạn (chủ)
            </div>
            <h4>📌 Nguyên tắc:</h4>
            <ul>
                <li>💰 Tư hữu tư liệu sản xuất</li>
                <li>📈 Thị trường tự do quyết định giá</li>
                <li>💵 Mục tiêu: tối đa hóa lợi nhuận</li>
                <li>🔄 Cạnh tranh tự do</li>
            </ul>
        `,
        detail: `
            <h4>🔄 Quan hệ sản xuất:</h4>
            <ul>
                <li><strong>Tư bản:</strong> Sở hữu nhà máy, đất đai, vốn</li>
                <li><strong>Công nhân:</strong> Bán sức lao động, nhận lương</li>
            </ul>
            <h4>💡 Các giai đoạn:</h4>
            <ol>
                <li><strong>Tư bản tự do cạnh tranh:</strong> Nhiều công ty nhỏ cạnh tranh</li>
                <li><strong>Tư bản độc quyền:</strong> Tập đoàn lớn thống lĩnh</li>
                <li><strong>Tư bản nhà nước:</strong> Nhà nước can thiệp</li>
                <li><strong>Tư bản toàn cầu:</strong> Công ty đa quốc gia</li>
            </ol>
        `,
        advanced: `
            <h4>📊 Phân tích Marx:</h4>
            <p><strong>Giá trị thặng dư = Giá trị lao động tạo ra - Tiền lương</strong></p>
            <ul>
                <li>Công nhân làm 8 tiếng</li>
                <li>4 tiếng tạo giá trị bằng lương</li>
                <li>4 tiếng còn lại → giá trị thặng dư → lợi nhuận chủ</li>
            </ul>
            <div class="warning-box">
                <strong>Các cuộc khủng hoảng:</strong>
                <ul>
                    <li>Đại suy thoái 1929</li>
                    <li>Khủng hoảng dầu 1973</li>
                    <li>Khủng hoảng tài chính 2008</li>
                </ul>
            </div>
        `,
        keyPoints: ['Tư hữu', 'Thị trường tự do', 'Lợi nhuận', 'Cạnh tranh']
    },

    'socialism': {
        icon: '🔴',
        title: 'Chủ Nghĩa Xã Hội',
        order: 13,
        category: 'modern',
        era: '1848 - nay',
        connections: ['capitalism', 'communism', 'democracy'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> Nhà máy, đất đai thuộc về cộng đồng hoặc nhà nước, không thuộc tư nhân.</p>
            <div class="example-box">
                <strong>Ý tưởng cốt lõi:</strong><br>
                • Không ai được giàu quá<br>
                • Không ai được nghèo quá<br>
                • Mọi người được học hành, khám bệnh miễn phí<br>
                • Của cải chia đều hơn
            </div>
            <h4>📌 Nguyên tắc:</h4>
            <ul>
                <li>🏭 Công hữu tư liệu sản xuất</li>
                <li>⚖️ Phân phối theo lao động</li>
                <li>📋 Kế hoạch hóa kinh tế</li>
                <li>🤝 Ưu tiên phúc lợi xã hội</li>
            </ul>
        `,
        detail: `
            <h4>🔄 Các dạng CNXH:</h4>
            <ul>
                <li><strong>CNXH dân chủ:</strong> Bắc Âu (Thụy Điển, Na Uy)</li>
                <li><strong>CNXH khoa học:</strong> Dựa trên Marx</li>
                <li><strong>CNXH thị trường:</strong> Việt Nam, Trung Quốc hiện nay</li>
            </ul>
            <h4>💡 So sánh với tư bản:</h4>
            <table style="width:100%; border-collapse: collapse;">
                <tr style="border-bottom: 1px solid rgba(255,255,255,0.2);">
                    <th style="padding: 0.5rem;">Tư bản</th>
                    <th style="padding: 0.5rem;">Xã hội</th>
                </tr>
                <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                    <td style="padding: 0.5rem;">Tư hữu</td>
                    <td style="padding: 0.5rem;">Công hữu/xã hội hóa</td>
                </tr>
                <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                    <td style="padding: 0.5rem;">Thị trường</td>
                    <td style="padding: 0.5rem;">Kế hoạch</td>
                </tr>
                <tr>
                    <td style="padding: 0.5rem;">Lợi nhuận</td>
                    <td style="padding: 0.5rem;">Phúc lợi</td>
                </tr>
            </table>
        `,
        advanced: `
            <h4>📊 Thực tế lịch sử:</h4>
            <ul>
                <li><strong>Liên Xô (1922-1991):</strong> Kế hoạch hóa tập trung</li>
                <li><strong>Đông Âu:</strong> Các nước trong khối XHCN</li>
                <li><strong>Cuba, CHDCND Triều Tiên:</strong> Mô hình riêng</li>
                <li><strong>Việt Nam, Trung Quốc:</strong> CNXH thị trường</li>
            </ul>
            <div class="warning-box">
                <strong>Thách thức:</strong>
                <ul>
                    <li>Thiếu động lực cá nhân</li>
                    <li>Kế hoạch hóa khó chính xác</li>
                    <li>Quan liêu, tham nhũng</li>
                </ul>
            </div>
        `,
        keyPoints: ['Công hữu', 'Kế hoạch hóa', 'Phúc lợi', 'Bình đẳng']
    },

    'communism': {
        icon: '☭',
        title: 'Chủ Nghĩa Cộng Sản',
        order: 14,
        category: 'modern',
        era: '1848 - nay',
        connections: ['socialism', 'authoritarianism'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> Mục tiêu cuối cùng: xã hội không giai cấp, ai làm theo năng lực, hưởng theo nhu cầu.</p>
            <div class="example-box">
                <strong>Theo Marx:</strong><br>
                CNXH là giai đoạn chuyển tiếp → CSCN là đích đến cuối cùng<br>
                "Làm theo năng lực, hưởng theo nhu cầu"
            </div>
            <h4>📌 Đặc điểm (lý thuyết):</h4>
            <ul>
                <li>🚫 Không có giai cấp</li>
                <li>🚫 Không có tư hữu</li>
                <li>🚫 Không cần nhà nước</li>
                <li>✅ Của cải dư thừa cho mọi người</li>
            </ul>
        `,
        detail: `
            <h4>🔄 Lý thuyết Marx:</h4>
            <ol>
                <li><strong>Tư bản chủ nghĩa:</strong> Mâu thuẫn giai cấp</li>
                <li><strong>Cách mạng vô sản:</strong> Giai cấp công nhân đứng lên</li>
                <li><strong>Chuyên chính vô sản:</strong> Nhà nước của công nhân</li>
                <li><strong>CNXH:</strong> Xây dựng cơ sở vật chất</li>
                <li><strong>CSCN:</strong> Nhà nước tự tiêu vong</li>
            </ol>
            <h4>💡 Khác biệt CNXH vs CSCN:</h4>
            <ul>
                <li>CNXH: "Làm theo năng lực, hưởng theo lao động"</li>
                <li>CSCN: "Làm theo năng lực, hưởng theo nhu cầu"</li>
            </ul>
        `,
        advanced: `
            <h4>📊 Các lý thuyết khác nhau:</h4>
            <ul>
                <li><strong>Marx-Lenin:</strong> Cách mạng bạo lực, đảng tiên phong</li>
                <li><strong>Mao:</strong> Cách mạng nông dân</li>
                <li><strong>Trotskyism:</strong> Cách mạng thường trực</li>
                <li><strong>Euro-communism:</strong> Con đường hòa bình</li>
            </ul>
            <div class="warning-box">
                <strong>Tranh luận:</strong>
                <ul>
                    <li>Có thể đạt được CSCN không?</li>
                    <li>Con người có thể từ bỏ lợi ích cá nhân?</li>
                    <li>Liên Xô có phải là CSCN thực sự?</li>
                </ul>
            </div>
        `,
        keyPoints: ['Không giai cấp', 'Không tư hữu', 'Cách mạng', 'Xã hội lý tưởng']
    },

    'fascism': {
        icon: '⚡',
        title: 'Chủ Nghĩa Phát Xít',
        order: 15,
        category: 'modern',
        era: '1920 - 1945',
        connections: ['capitalism', 'authoritarianism'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> Chế độ độc tài cực đoan, đề cao dân tộc, chủng tộc, quân sự.</p>
            <div class="example-box">
                <strong>Ví dụ lịch sử:</strong><br>
                • Đức Quốc Xã (Hitler)<br>
                • Ý Phát Xít (Mussolini)<br>
                • Đế quốc Nhật (quân phiệt)
            </div>
            <h4>📌 Đặc điểm:</h4>
            <ul>
                <li>👤 Một lãnh tụ tối cao</li>
                <li>🚫 Đàn áp đối lập, báo chí</li>
                <li>⚔️ Tôn vinh chiến tranh, bạo lực</li>
                <li>🏛️ Nhà nước toàn trị</li>
            </ul>
        `,
        detail: `
            <h4>🔄 Ý thức hệ:</h4>
            <ul>
                <li><strong>Dân tộc chủ nghĩa cực đoan:</strong> Dân tộc mình ưu việt</li>
                <li><strong>Chống cộng sản:</strong> Kẻ thù số 1</li>
                <li><strong>Chống tự do:</strong> Cá nhân phục tùng nhà nước</li>
                <li><strong>Chủng tộc:</strong> Phân biệt, diệt chủng</li>
            </ul>
            <h4>💡 Tại sao nổi lên?</h4>
            <ol>
                <li>Khủng hoảng kinh tế 1929</li>
                <li>Bất mãn sau Thế chiến I</li>
                <li>Sợ hãi cách mạng cộng sản</li>
                <li>Tầng lớp trung lưu bấp bênh</li>
            </ol>
        `,
        advanced: `
            <h4>📊 14 đặc điểm của phát xít (Umberto Eco):</h4>
            <ol style="font-size: 0.85rem;">
                <li>Sùng bái truyền thống</li>
                <li>Bác bỏ hiện đại</li>
                <li>Hành động vì hành động</li>
                <li>Bất đồng là phản bội</li>
                <li>Sợ hãi sự khác biệt</li>
                <li>Kêu gọi tầng lớp trung lưu bức bối</li>
                <li>Ám ảnh âm mưu</li>
                <li>Kẻ thù vừa mạnh vừa yếu</li>
                <li>Cuộc sống là chiến tranh</li>
                <li>Khinh thường người yếu</li>
                <li>Sùng bái cái chết</li>
                <li>Machismo</li>
                <li>Dân tuý chọn lọc</li>
                <li>Ngôn ngữ nghèo nàn</li>
            </ol>
        `,
        keyPoints: ['Độc tài', 'Dân tộc cực đoan', 'Toàn trị', 'Bạo lực']
    },

    // ==================== CONTEMPORARY (16-18) ====================
    'democracy': {
        icon: '🗳️',
        title: 'Dân Chủ',
        order: 16,
        category: 'contemporary',
        era: '1945 - nay',
        connections: ['city-state', 'capitalism', 'socialism', 'absolute-monarchy', 'globalization'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> Người dân chọn người lãnh đạo thông qua bầu cử.</p>
            <div class="example-box">
                <strong>Nguyên tắc cơ bản:</strong><br>
                • 1 người = 1 phiếu<br>
                • Bầu cử tự do, công bằng<br>
                • Đa số quyết định<br>
                • Bảo vệ quyền thiểu số
            </div>
            <h4>📌 Đặc điểm:</h4>
            <ul>
                <li>🗳️ Bầu cử định kỳ</li>
                <li>⚖️ Tam quyền phân lập</li>
                <li>📰 Tự do ngôn luận, báo chí</li>
                <li>👥 Đa đảng cạnh tranh</li>
            </ul>
        `,
        detail: `
            <h4>🔄 Các loại dân chủ:</h4>
            <ul>
                <li><strong>Dân chủ trực tiếp:</strong> Dân bỏ phiếu mọi vấn đề (Thụy Sĩ)</li>
                <li><strong>Dân chủ đại diện:</strong> Bầu đại biểu (hầu hết các nước)</li>
                <li><strong>Dân chủ tự do:</strong> Kết hợp với quyền tự do cá nhân</li>
            </ul>
            <h4>💡 Tam quyền phân lập:</h4>
            <ul>
                <li><strong>Lập pháp:</strong> Quốc hội - làm luật</li>
                <li><strong>Hành pháp:</strong> Chính phủ - thực thi</li>
                <li><strong>Tư pháp:</strong> Tòa án - xét xử</li>
            </ul>
        `,
        advanced: `
            <h4>📊 Thước đo dân chủ (Freedom House):</h4>
            <ul>
                <li>Quyền chính trị (bầu cử, đa đảng)</li>
                <li>Quyền tự do dân sự (báo chí, hội họp)</li>
                <li>Pháp quyền (tòa án độc lập)</li>
            </ul>
            <div class="warning-box">
                <strong>Thách thức hiện nay:</strong>
                <ul>
                    <li>Dân túy cực đoan</li>
                    <li>Tin giả, thao túng thông tin</li>
                    <li>Tiền bạc chi phối chính trị</li>
                    <li>Bất bình đẳng gia tăng</li>
                </ul>
            </div>
        `,
        keyPoints: ['Bầu cử', 'Tam quyền phân lập', 'Đa đảng', 'Quyền con người']
    },

    'authoritarianism': {
        icon: '🔒',
        title: 'Chế Độ Độc Tài',
        order: 17,
        category: 'contemporary',
        era: '1945 - nay',
        connections: ['communism', 'fascism', 'democracy'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> Quyền lực tập trung vào một người hoặc nhóm nhỏ, không có bầu cử tự do.</p>
            <div class="example-box">
                <strong>Các dạng:</strong><br>
                • Độc tài quân sự (Myanmar)<br>
                • Độc tài cá nhân (Belarus)<br>
                • Độc tài đảng (một số nước)<br>
                • Chế độ quân chủ tuyệt đối (Ả Rập)
            </div>
            <h4>📌 Đặc điểm:</h4>
            <ul>
                <li>🚫 Không có bầu cử thực sự</li>
                <li>🚫 Đàn áp đối lập</li>
                <li>📰 Kiểm soát truyền thông</li>
                <li>🔒 Hạn chế tự do</li>
            </ul>
        `,
        detail: `
            <h4>🔄 So sánh với toàn trị:</h4>
            <table style="width:100%; border-collapse: collapse;">
                <tr style="border-bottom: 1px solid rgba(255,255,255,0.2);">
                    <th style="padding: 0.5rem;">Độc tài (Authoritarian)</th>
                    <th style="padding: 0.5rem;">Toàn trị (Totalitarian)</th>
                </tr>
                <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                    <td style="padding: 0.5rem;">Kiểm soát chính trị</td>
                    <td style="padding: 0.5rem;">Kiểm soát mọi mặt đời sống</td>
                </tr>
                <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                    <td style="padding: 0.5rem;">Dung túng không gian tư</td>
                    <td style="padding: 0.5rem;">Không có không gian tư</td>
                </tr>
                <tr>
                    <td style="padding: 0.5rem;">Thực dụng</td>
                    <td style="padding: 0.5rem;">Ý thức hệ cực đoan</td>
                </tr>
            </table>
        `,
        advanced: `
            <h4>📊 Tại sao tồn tại?</h4>
            <ul>
                <li>Kiểm soát tài nguyên (dầu mỏ)</li>
                <li>Đàn áp hiệu quả</li>
                <li>Thỏa hiệp với élite</li>
                <li>Hỗ trợ từ cường quốc bên ngoài</li>
            </ul>
            <div class="warning-box">
                <strong>Điểm yếu:</strong>
                <ul>
                    <li>Vấn đề kế thừa quyền lực</li>
                    <li>Thiếu thông tin chính xác từ dưới lên</li>
                    <li>Tham nhũng tràn lan</li>
                    <li>Kinh tế kém hiệu quả dài hạn</li>
                </ul>
            </div>
        `,
        keyPoints: ['Tập trung quyền lực', 'Đàn áp', 'Không bầu cử tự do', 'Kiểm soát truyền thông']
    },

    'globalization': {
        icon: '🌐',
        title: 'Toàn Cầu Hóa',
        order: 18,
        category: 'contemporary',
        era: '1990 - nay',
        connections: ['capitalism', 'democracy'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> Thế giới kết nối chặt chẽ qua thương mại, công nghệ, văn hóa.</p>
            <div class="example-box">
                <strong>Ví dụ hàng ngày:</strong><br>
                • iPhone: Thiết kế ở Mỹ, sản xuất ở Trung Quốc<br>
                • Netflix: Xem phim Hàn, Mỹ, Nhật tại Việt Nam<br>
                • Coca-Cola: Có mặt ở 200+ quốc gia
            </div>
            <h4>📌 Các khía cạnh:</h4>
            <ul>
                <li>💰 Kinh tế: Thương mại, đầu tư xuyên biên giới</li>
                <li>👥 Xã hội: Di cư, du lịch</li>
                <li>🎭 Văn hóa: Phim ảnh, âm nhạc, thời trang</li>
                <li>💻 Công nghệ: Internet, mạng xã hội</li>
            </ul>
        `,
        detail: `
            <h4>🔄 Các tổ chức toàn cầu:</h4>
            <ul>
                <li><strong>WTO:</strong> Thương mại thế giới</li>
                <li><strong>IMF:</strong> Tài chính quốc tế</li>
                <li><strong>World Bank:</strong> Phát triển</li>
                <li><strong>UN:</strong> Liên Hợp Quốc</li>
            </ul>
            <h4>💡 Tác động quyền lực:</h4>
            <ul>
                <li>Công ty đa quốc gia mạnh hơn nhiều chính phủ</li>
                <li>Nhà nước mất một phần chủ quyền kinh tế</li>
                <li>Các vấn đề toàn cầu cần giải pháp toàn cầu</li>
            </ul>
        `,
        advanced: `
            <h4>📊 Tranh luận:</h4>
            <div class="success-box">
                <strong>Ủng hộ:</strong>
                <ul>
                    <li>Giảm nghèo toàn cầu</li>
                    <li>Tiếp cận hàng hóa, công nghệ</li>
                    <li>Giao lưu văn hóa</li>
                </ul>
            </div>
            <div class="warning-box">
                <strong>Phê phán:</strong>
                <ul>
                    <li>Bất bình đẳng gia tăng</li>
                    <li>Mất bản sắc văn hóa</li>
                    <li>Chạy đua xuống đáy (môi trường, lao động)</li>
                    <li>Quyền lực tập trung vào élite toàn cầu</li>
                </ul>
            </div>
        `,
        keyPoints: ['Kết nối', 'Thương mại tự do', 'Công ty đa quốc gia', 'Internet']
    }
};
