(function() {
    'use strict';

    const state = {
        currentLevel: localStorage.getItem('vietnamStateLevel') || null,
        currentTab: 'simple',
        selectedComponent: null,
        tourStepIndex: 0,
        isTourActive: false
    };

    const components = {
        'nguyen-tac-to-chuc': {
            icon: '📜',
            title: 'Nguyên Tắc Tổ Chức Quyền Lực',
            simple: `
                <h3>Bức tranh ngắn</h3>
                <p>Nhà nước Việt Nam được tổ chức theo nguyên tắc quyền lực nhà nước là thống nhất, nhưng có sự phân công, phối hợp và kiểm soát giữa các cơ quan trong việc thực hiện các quyền lập pháp, hành pháp và tư pháp.</p>
                <ul>
                    <li>Quốc hội giữ vai trò trung tâm của quyền lực nhà nước.</li>
                    <li>Chính phủ tổ chức điều hành và quản lý hành chính.</li>
                    <li>Tòa án thực hiện quyền tư pháp, Viện kiểm sát thực hành quyền công tố và kiểm sát tư pháp.</li>
                </ul>
                <div class="example-box">Cách nhớ nhanh: hệ thống không tách rời thành các nhánh độc lập hoàn toàn, mà liên kết với nhau trong một cấu trúc thống nhất.</div>
            `,
            detail: `
                <h3>Điểm cốt lõi</h3>
                <p>Khái niệm "thống nhất quyền lực" nhấn mạnh rằng toàn bộ quyền lực nhà nước bắt nguồn từ Nhân dân và được tổ chức trong một trật tự chung. Vì vậy, các cơ quan không vận hành như các "vương quốc riêng".</p>
                <ul>
                    <li><strong>Phân công:</strong> mỗi cơ quan có chức năng chính riêng.</li>
                    <li><strong>Phối hợp:</strong> nhiều quyết định quan trọng phải đi qua hơn một cơ quan.</li>
                    <li><strong>Kiểm soát:</strong> có giám sát, báo cáo, chất vấn, kiểm toán, phản biện và trách nhiệm giải trình.</li>
                </ul>
                <p>Điểm này giúp giải thích vì sao Quốc hội có quyền giám sát rất rộng, còn Chính phủ phải báo cáo, Tòa án phải bảo đảm xét xử đúng luật và các cơ quan kiểm toán, giám sát xã hội vẫn đóng vai trò quan trọng.</p>
            `,
            advanced: `
                <h3>Góc nhìn thể chế</h3>
                <p>Nếu nhìn như một hệ thống vận hành, bộ máy nhà nước Việt Nam ưu tiên <strong>sự thống nhất mục tiêu và trách nhiệm chính trị</strong>, sau đó mới thiết kế các vòng kiểm soát để tránh lạm quyền hoặc vận hành lệch chuẩn.</p>
                <div class="tip-box">Đây là điểm khác với mô hình tam quyền phân lập cứng: thay vì dựng ba khối độc lập đối đầu nhau, hệ thống nhấn mạnh phối hợp trong cùng một cấu trúc quyền lực thống nhất.</div>
                <p>Muốn hiểu đúng, nên luôn đọc chức năng của từng cơ quan cùng với câu hỏi: cơ quan đó báo cáo cho ai, bị giám sát bởi ai và tác động đến khâu nào của chuỗi quyết định nhà nước.</p>
            `,
            connections: ['nhan-dan-bau-cu', 'quoc-hoi', 'chinh-phu', 'toa-an']
        },
        'nhan-dan-bau-cu': {
            icon: '🗳️',
            title: 'Nhân Dân Và Bầu Cử',
            simple: `
                <h3>Nguồn gốc quyền lực</h3>
                <p>Trong thiết kế hiến định, Nhân dân là chủ thể của quyền lực nhà nước. Một trong những cách thể hiện trực tiếp nhất là bầu cử đại biểu Quốc hội và đại biểu Hội đồng nhân dân.</p>
                <ul>
                    <li>Cử tri chọn người đại diện ở trung ương và địa phương.</li>
                    <li>Qua đại biểu, ý chí xã hội được chuyển thành luật, nghị quyết và hoạt động giám sát.</li>
                    <li>Nhân dân còn tham gia góp ý chính sách, phản ánh, kiến nghị và giám sát xã hội.</li>
                </ul>
            `,
            detail: `
                <h3>Không chỉ là bỏ phiếu một lần</h3>
                <p>Bầu cử tạo ra chuỗi tính chính danh cho bộ máy nhà nước. Sau đó, đại biểu phải tiếp xúc cử tri, tiếp nhận phản ánh, chất vấn và giám sát cơ quan công quyền.</p>
                <ul>
                    <li>Ở trung ương: cử tri bầu đại biểu Quốc hội.</li>
                    <li>Ở địa phương: cử tri bầu đại biểu Hội đồng nhân dân.</li>
                    <li>Phản hồi xã hội được chuyển qua cử tri, đại biểu, Mặt trận và nhiều cơ chế giám sát khác.</li>
                </ul>
                <div class="example-box">Hãy hình dung Nhân dân là điểm xuất phát, còn đại biểu là "đường truyền" đưa ý chí đó vào bộ máy nhà nước.</div>
            `,
            advanced: `
                <h3>Chuỗi đại diện và trách nhiệm</h3>
                <p>Nếu mất liên hệ với cử tri, các cơ quan nhà nước vẫn có thể vận hành về mặt thủ tục nhưng sẽ yếu về mặt đại diện. Vì vậy, các cơ chế tiếp xúc cử tri, phản ánh và giải trình không phải phần phụ mà là một phần của tính hợp hiến và tính chính danh.</p>
                <div class="warning-box">Điểm dễ nhầm: Nhân dân không trực tiếp xử lý toàn bộ công việc nhà nước hằng ngày; Nhân dân trao quyền và kiểm tra việc thực hiện quyền đó qua các cơ quan và người đại diện.</div>
            `,
            connections: ['quoc-hoi', 'hdnd', 'mat-tran']
        },
        'quoc-hoi': {
            icon: '🏛️',
            title: 'Quốc Hội',
            simple: `
                <h3>Quốc hội làm gì?</h3>
                <p>Quốc hội là cơ quan đại biểu cao nhất của Nhân dân và là cơ quan quyền lực nhà nước cao nhất.</p>
                <ul>
                    <li>Làm Hiến pháp, làm luật và sửa luật.</li>
                    <li>Quyết định các vấn đề quan trọng của đất nước.</li>
                    <li>Giám sát tối cao hoạt động của bộ máy nhà nước.</li>
                </ul>
                <div class="example-box">Nếu ví nhà nước như một hệ thống lớn, Quốc hội là nơi đặt ra "luật chơi" và kiểm tra cả hệ thống có đi đúng luật chơi đó không.</div>
            `,
            detail: `
                <h3>Các nhóm quyền quan trọng</h3>
                <ul>
                    <li><strong>Lập hiến, lập pháp:</strong> làm Hiến pháp, làm luật, sửa đổi luật.</li>
                    <li><strong>Quyết định vấn đề lớn:</strong> mục tiêu phát triển, ngân sách, chính sách cơ bản, chiến tranh - hòa bình, một số điều ước quốc tế quan trọng.</li>
                    <li><strong>Tổ chức bộ máy:</strong> bầu hoặc phê chuẩn nhiều chức danh chủ chốt của Nhà nước.</li>
                    <li><strong>Giám sát tối cao:</strong> xem xét báo cáo, chất vấn, bỏ phiếu tín nhiệm, bãi bỏ văn bản trái hiến pháp hoặc trái luật theo thẩm quyền.</li>
                </ul>
                <p>Quốc hội cũng quyết định cơ cấu tổ chức của Chính phủ và nhiều thiết chế quan trọng khác.</p>
            `,
            advanced: `
                <h3>Vai trò trung tâm trong chuỗi quyền lực</h3>
                <p>Quốc hội vừa tạo khuôn khổ pháp lý vừa giữ vai trò kiểm tra đầu ra của hệ thống. Vì thế, rất nhiều thiết chế khác phải báo cáo, chịu giám sát hoặc cần Quốc hội bầu, phê chuẩn.</p>
                <table>
                    <tr><th>Khâu</th><th>Vai trò của Quốc hội</th></tr>
                    <tr><td>Thiết kế luật chơi</td><td>Làm luật, quy định tổ chức bộ máy</td></tr>
                    <tr><td>Phân bổ nguồn lực</td><td>Quyết định ngân sách và chính sách cơ bản</td></tr>
                    <tr><td>Kiểm tra hệ thống</td><td>Giám sát tối cao, xem báo cáo, chất vấn</td></tr>
                </table>
            `,
            connections: ['ubtvqh', 'chu-tich-nuoc', 'chinh-phu', 'kiem-toan']
        },
        'ubtvqh': {
            icon: '🧩',
            title: 'Ủy Ban Thường Vụ Quốc Hội',
            simple: `
                <h3>Cơ quan thường trực của Quốc hội</h3>
                <p>Quốc hội không họp thường xuyên quanh năm, nên cần một thiết chế hoạt động liên tục để xử lý công việc giữa hai kỳ họp. Đó là Ủy ban Thường vụ Quốc hội.</p>
                <ul>
                    <li>Chuẩn bị, triệu tập và hỗ trợ hoạt động của Quốc hội.</li>
                    <li>Giám sát trong thời gian Quốc hội không họp.</li>
                    <li>Thực hiện một số nhiệm vụ theo thẩm quyền hiến định và luật định.</li>
                </ul>
            `,
            detail: `
                <h3>Vì sao cơ quan này quan trọng?</h3>
                <p>Nếu chỉ có kỳ họp toàn thể, nhịp điều hành lập pháp và giám sát sẽ bị đứt quãng. Ủy ban Thường vụ Quốc hội tạo ra tính liên tục cho nhánh quyền lực trung ương này.</p>
                <ul>
                    <li>Giải thích Hiến pháp, luật, pháp lệnh theo thẩm quyền.</li>
                    <li>Ban hành pháp lệnh trong phạm vi được giao.</li>
                    <li>Giám sát việc thi hành Hiến pháp, luật, nghị quyết.</li>
                    <li>Cho ý kiến, điều phối chương trình lập pháp và nhiều thủ tục nghị viện khác.</li>
                </ul>
            `,
            advanced: `
                <h3>Thiết chế "giữ nhịp"</h3>
                <p>Ủy ban Thường vụ Quốc hội không thay thế Quốc hội, nhưng giúp bộ máy lập pháp không rơi vào trạng thái "đợi kỳ họp". Thiết kế này đặc biệt quan trọng với các hệ thống cần sự điều phối chính trị và giám sát liên tục.</p>
                <div class="tip-box">Điểm dễ nhớ: Quốc hội là cơ quan quyền lực cao nhất; Ủy ban Thường vụ Quốc hội là bộ phận thường trực để giữ nhịp công việc giữa các kỳ họp.</div>
            `,
            connections: ['quoc-hoi', 'chu-tich-nuoc', 'chinh-phu']
        },
        'chu-tich-nuoc': {
            icon: '🇻🇳',
            title: 'Chủ Tịch Nước',
            simple: `
                <h3>Vai trò cơ bản</h3>
                <p>Chủ tịch nước là người đứng đầu Nhà nước, thay mặt nước Cộng hòa xã hội chủ nghĩa Việt Nam về đối nội và đối ngoại.</p>
                <ul>
                    <li>Công bố Hiến pháp, luật, pháp lệnh.</li>
                    <li>Đề nghị hoặc thực hiện một số thủ tục về nhân sự nhà nước theo thẩm quyền.</li>
                    <li>Đại diện quốc gia trong các hoạt động đối nội, đối ngoại.</li>
                </ul>
            `,
            detail: `
                <h3>Chủ tịch nước không phải là Chính phủ</h3>
                <p>Đây là điểm rất hay bị nhầm. Chủ tịch nước là nguyên thủ quốc gia, còn Chính phủ là cơ quan hành chính nhà nước cao nhất.</p>
                <ul>
                    <li>Chủ tịch nước có vai trò kết nối nhiều khâu trong bộ máy nhà nước.</li>
                    <li>Tham gia vào quy trình bổ nhiệm, đề nghị, phong hàm, đặc xá và nhiều quyết định đối nội, đối ngoại theo luật.</li>
                    <li>Giữ vị trí đặc biệt trong quan hệ với Quốc hội, Chính phủ, Tòa án, Viện kiểm sát và lực lượng vũ trang.</li>
                </ul>
            `,
            advanced: `
                <h3>Một vị trí mang tính điều phối biểu tượng và pháp lý</h3>
                <p>Trong cấu trúc nhà nước Việt Nam, Chủ tịch nước không đơn thuần là vai trò nghi lễ. Thiết chế này giúp bảo đảm sự thống nhất của Nhà nước trong cả ba lĩnh vực: lập pháp, hành pháp, tư pháp, đồng thời là điểm đại diện quốc gia ra bên ngoài.</p>
                <div class="warning-box">Đừng đồng nhất Chủ tịch nước với người điều hành hành chính hằng ngày. Vai trò đó thuộc về Chính phủ và Thủ tướng Chính phủ.</div>
            `,
            connections: ['quoc-hoi', 'chinh-phu', 'toa-an', 'vien-kiem-sat']
        },
        'chinh-phu': {
            icon: '🏢',
            title: 'Chính Phủ',
            simple: `
                <h3>Cơ quan hành chính nhà nước cao nhất</h3>
                <p>Chính phủ tổ chức thi hành Hiến pháp và pháp luật, quản lý việc điều hành của bộ máy hành chính trên phạm vi cả nước.</p>
                <ul>
                    <li>Triển khai luật thành chính sách và hoạt động quản lý.</li>
                    <li>Điều hành kinh tế, xã hội, quốc phòng, an ninh, đối ngoại.</li>
                    <li>Bảo đảm bộ máy hành chính vận hành thống nhất.</li>
                </ul>
            `,
            detail: `
                <h3>Chính phủ biến quyết định thành hành động</h3>
                <p>Nếu Quốc hội là nơi ra khuôn khổ, thì Chính phủ là nơi đưa khuôn khổ đó vào vận hành thực tế bằng nghị định, chương trình, kế hoạch và bộ máy thi hành.</p>
                <ul>
                    <li>Quản lý nhà nước đối với các ngành, lĩnh vực và địa phương.</li>
                    <li>Tổ chức thực hiện ngân sách, chiến lược, kế hoạch phát triển.</li>
                    <li>Phối hợp với các cơ quan khác để bảo đảm trật tự, an toàn, quyền và lợi ích hợp pháp của công dân.</li>
                </ul>
            `,
            advanced: `
                <h3>Khối điều hành trung tâm</h3>
                <p>Chính phủ là "động cơ vận hành" của toàn bộ hệ thống hành chính. Chất lượng quản trị nhà nước trong thực tế phụ thuộc rất lớn vào khả năng chuyển luật thành quy trình, dịch vụ công và kết quả cụ thể.</p>
                <table>
                    <tr><th>Đầu vào</th><th>Chính phủ xử lý</th></tr>
                    <tr><td>Luật, nghị quyết, mục tiêu quốc gia</td><td>Thành chương trình, quy định chi tiết và tổ chức thực hiện</td></tr>
                    <tr><td>Nhu cầu quản lý phát sinh</td><td>Thành giải pháp điều hành, phối hợp liên ngành, chỉ đạo hệ thống hành chính</td></tr>
                </table>
            `,
            connections: ['thu-tuong', 'bo-nganh', 'ubnd', 'quoc-hoi']
        },
        'thu-tuong': {
            icon: '🧭',
            title: 'Thủ Tướng Chính Phủ',
            simple: `
                <h3>Người đứng đầu Chính phủ</h3>
                <p>Thủ tướng Chính phủ lãnh đạo công tác của Chính phủ và hệ thống hành chính nhà nước từ trung ương đến địa phương theo thẩm quyền.</p>
                <ul>
                    <li>Điều phối hoạt động của các bộ, ngành.</li>
                    <li>Chỉ đạo, điều hành các chính sách và nhiệm vụ lớn.</li>
                    <li>Chịu trách nhiệm trước Quốc hội về hoạt động của Chính phủ.</li>
                </ul>
            `,
            detail: `
                <h3>Vai trò điều phối</h3>
                <p>Trong thực tế, nhiều vấn đề quản lý không nằm gọn trong một bộ. Thủ tướng là điểm điều phối để tránh tình trạng mạnh ai nấy làm.</p>
                <ul>
                    <li>Phân công, đôn đốc và kiểm tra các thành viên Chính phủ.</li>
                    <li>Giải quyết các vấn đề liên ngành, liên vùng, liên cấp.</li>
                    <li>Chỉ đạo việc tổ chức thi hành pháp luật, chính sách, kế hoạch và ngân sách.</li>
                </ul>
            `,
            advanced: `
                <h3>Nút điều phối chiến lược</h3>
                <p>Nếu nhìn theo logic vận hành, Thủ tướng là vị trí chuyển từ "quản lý theo từng ngành" sang "điều hành toàn hệ thống". Vai trò này đặc biệt rõ trong xử lý khủng hoảng, dự án trọng điểm, cải cách thủ tục và phối hợp giữa trung ương với địa phương.</p>
                <div class="tip-box">Điểm nhớ nhanh: Chính phủ là tập thể; Thủ tướng là người đứng đầu tập thể đó và giữ nhịp điều hành chung.</div>
            `,
            connections: ['chinh-phu', 'bo-nganh', 'ubnd']
        },
        'bo-nganh': {
            icon: '🗂️',
            title: 'Bộ Và Cơ Quan Ngang Bộ',
            simple: `
                <h3>Những "đầu mối ngành"</h3>
                <p>Bộ và cơ quan ngang bộ giúp Chính phủ quản lý từng lĩnh vực như tài chính, giáo dục, y tế, xây dựng, giao thông, công an...</p>
                <ul>
                    <li>Soạn thảo chính sách, văn bản quy phạm pháp luật theo thẩm quyền.</li>
                    <li>Quản lý chuyên ngành trên phạm vi cả nước.</li>
                    <li>Hướng dẫn, kiểm tra và phối hợp thực hiện với địa phương.</li>
                </ul>
            `,
            detail: `
                <h3>Tại sao cần chia theo ngành?</h3>
                <p>Nhà nước phải xử lý rất nhiều lĩnh vực chuyên môn sâu. Không thể dồn tất cả vào một đầu mối chung, nên cần các bộ để chuyên trách.</p>
                <ul>
                    <li>Mỗi bộ chịu trách nhiệm chính về một hoặc một nhóm lĩnh vực.</li>
                    <li>Bộ trưởng chịu trách nhiệm cá nhân về ngành, lĩnh vực được phân công.</li>
                    <li>Các cơ quan ngang bộ xử lý một số mảng đặc thù có tính chất tương đương.</li>
                </ul>
            `,
            advanced: `
                <h3>Điểm nghẽn thường nằm ở phối hợp liên ngành</h3>
                <p>Trong thực tế, thách thức lớn không chỉ nằm ở từng bộ làm đúng việc của mình, mà còn ở chỗ nhiều vấn đề quan trọng luôn đòi hỏi phối hợp giữa nhiều bộ cùng lúc. Khi phối hợp yếu, chính sách dễ chậm hoặc chồng chéo.</p>
                <div class="warning-box">Vì vậy, hiểu bộ máy nhà nước không thể chỉ học danh sách cơ quan; phải nhìn cả đường đi của một việc qua nhiều đầu mối.</div>
            `,
            connections: ['chinh-phu', 'thu-tuong', 'co-quan-chuyen-mon']
        },
        'toa-an': {
            icon: '⚖️',
            title: 'Tòa Án Nhân Dân',
            simple: `
                <h3>Cơ quan xét xử</h3>
                <p>Tòa án nhân dân là cơ quan thực hiện quyền tư pháp, có chức năng xét xử và bảo vệ công lý, quyền con người, quyền công dân, lợi ích của Nhà nước và lợi ích hợp pháp của tổ chức, cá nhân.</p>
                <ul>
                    <li>Xét xử các vụ án, vụ việc theo luật định.</li>
                    <li>Bảo đảm áp dụng pháp luật trong xét xử.</li>
                    <li>Tòa án nhân dân tối cao là cơ quan xét xử cao nhất.</li>
                </ul>
            `,
            detail: `
                <h3>Tòa án không làm luật, không điều hành</h3>
                <p>Tòa án không phải nơi ban hành chính sách và cũng không phải nơi điều hành bộ máy hành chính. Nhiệm vụ cốt lõi là giải quyết tranh chấp, xét xử các vụ án và bảo đảm công lý bằng quy trình tố tụng.</p>
                <ul>
                    <li>Xét xử hình sự, dân sự, hành chính và các loại việc khác theo luật.</li>
                    <li>Tòa án nhân dân tối cao tổng kết thực tiễn xét xử, góp phần bảo đảm áp dụng thống nhất pháp luật.</li>
                    <li>Nguyên tắc xét xử độc lập và chỉ tuân theo pháp luật là nền tảng của quyền tư pháp.</li>
                </ul>
            `,
            advanced: `
                <h3>Điểm tựa của trật tự pháp lý</h3>
                <p>Một hệ thống nhà nước chỉ thật sự đáng tin khi người dân và tổ chức biết rằng cuối cùng vẫn có một cơ quan xét xử độc lập để giải quyết tranh chấp và kiểm tra tính hợp pháp của hành vi theo luật.</p>
                <div class="tip-box">Cách nhớ đúng: Tòa án là nơi ra phán quyết; Viện kiểm sát không ra phán quyết thay Tòa án.</div>
            `,
            connections: ['vien-kiem-sat', 'chu-tich-nuoc', 'nguyen-tac-to-chuc']
        },
        'vien-kiem-sat': {
            icon: '🛡️',
            title: 'Viện Kiểm Sát Nhân Dân',
            simple: `
                <h3>Không xét xử, mà công tố và kiểm sát</h3>
                <p>Viện kiểm sát nhân dân thực hành quyền công tố và kiểm sát hoạt động tư pháp.</p>
                <ul>
                    <li>Thực hành quyền công tố trong tố tụng hình sự.</li>
                    <li>Kiểm sát việc tuân theo pháp luật trong hoạt động tư pháp.</li>
                    <li>Góp phần bảo đảm việc xử lý vụ việc đúng pháp luật.</li>
                </ul>
            `,
            detail: `
                <h3>Phân biệt với Tòa án</h3>
                <p>Tòa án là nơi xét xử và ra phán quyết. Viện kiểm sát thì theo dõi, kiểm tra tính hợp pháp của hoạt động tư pháp và thực hiện vai trò công tố.</p>
                <ul>
                    <li>Tránh oan sai, bỏ lọt tội phạm hoặc vi phạm tố tụng.</li>
                    <li>Bảo vệ pháp luật, quyền con người, quyền công dân và lợi ích hợp pháp.</li>
                    <li>Viện kiểm sát nhân dân tối cao đứng đầu hệ thống này.</li>
                </ul>
            `,
            advanced: `
                <h3>Một lớp bảo đảm tính hợp pháp trong tố tụng</h3>
                <p>Nếu Tòa án là nơi ra quyết định cuối cùng trong xét xử, thì Viện kiểm sát là lớp kiểm tra để quá trình đi đến quyết định đó không bị lệch chuẩn. Thiết chế này vừa hỗ trợ hiệu quả chống tội phạm, vừa góp phần hạn chế sai sót tư pháp.</p>
                <div class="warning-box">Điểm dễ nhầm nhất: Viện kiểm sát không phải là "cấp trên của Tòa án", cũng không phải cơ quan hành chính.</div>
            `,
            connections: ['toa-an', 'chu-tich-nuoc', 'quoc-hoi']
        },
        'hdnd': {
            icon: '🧾',
            title: 'Hội Đồng Nhân Dân',
            simple: `
                <h3>Cơ quan đại diện ở địa phương</h3>
                <p>Trong mô hình chính quyền địa phương 2 cấp hiện hành, Hội đồng nhân dân là cơ quan quyền lực nhà nước ở cấp tỉnh và cấp xã, đại diện cho ý chí, nguyện vọng và quyền làm chủ của Nhân dân tại địa bàn.</p>
                <ul>
                    <li>Quyết định các vấn đề quan trọng của địa phương theo luật.</li>
                    <li>Giám sát hoạt động của Ủy ban nhân dân và các cơ quan liên quan ở địa phương.</li>
                    <li>Gắn với cử tri tại nơi mình đại diện.</li>
                </ul>
            `,
            detail: `
                <h3>Vai trò của HĐND ở địa phương</h3>
                <p>Nếu Quốc hội là cơ quan quyền lực nhà nước cao nhất ở trung ương, thì HĐND là điểm quyết nghị và giám sát ở địa phương theo mô hình hiện hành gồm cấp tỉnh và cấp xã.</p>
                <ul>
                    <li>Ra nghị quyết về kế hoạch, ngân sách, đầu tư công, biện pháp phát triển địa phương theo thẩm quyền.</li>
                    <li>Chất vấn, giám sát việc thực hiện nhiệm vụ của UBND.</li>
                    <li>Tiếp nhận ý kiến cử tri và phản ánh vào quyết định của địa phương.</li>
                </ul>
            `,
            advanced: `
                <h3>Điểm neo dân chủ ở địa bàn</h3>
                <p>Hiệu quả của chính quyền địa phương phụ thuộc nhiều vào việc HĐND có thật sự làm tốt chức năng quyết nghị và giám sát hay không. Nếu HĐND yếu, UBND dễ nặng về điều hành mà thiếu phản biện và cân đối chính sách.</p>
                <table>
                    <tr><th>Chức năng</th><th>HĐND</th></tr>
                    <tr><td>Đại diện</td><td>Kết nối với cử tri địa phương</td></tr>
                    <tr><td>Quyết nghị</td><td>Ra nghị quyết theo thẩm quyền</td></tr>
                    <tr><td>Giám sát</td><td>Theo dõi việc UBND và cơ quan liên quan thực hiện</td></tr>
                </table>
            `,
            connections: ['nhan-dan-bau-cu', 'ubnd', 'mat-tran']
        },
        'ubnd': {
            icon: '🏙️',
            title: 'Ủy Ban Nhân Dân',
            simple: `
                <h3>Bộ máy chấp hành ở địa phương</h3>
                <p>Trong mô hình chính quyền địa phương 2 cấp, Ủy ban nhân dân cấp tỉnh và cấp xã là cơ quan chấp hành của Hội đồng nhân dân, đồng thời là cơ quan hành chính nhà nước ở địa phương.</p>
                <ul>
                    <li>Tổ chức thực hiện luật, nghị quyết và nhiệm vụ quản lý ở địa bàn.</li>
                    <li>Điều hành các dịch vụ công, thủ tục hành chính, trật tự và phát triển địa phương.</li>
                    <li>Chịu sự giám sát của HĐND và sự chỉ đạo, kiểm tra từ hệ thống hành chính cấp trên.</li>
                </ul>
            `,
            detail: `
                <h3>Vị trí hai mặt của UBND</h3>
                <p>UBND vừa gắn với địa phương, vừa là mắt xích trong hệ thống hành chính nhà nước thống nhất. Trong mô hình 2 cấp hiện hành, trọng tâm điều hành dồn mạnh vào cấp tỉnh và cấp xã, nên UBND ở hai cấp này phải xử lý đồng thời nhu cầu địa phương và yêu cầu quản lý chung của trung ương.</p>
                <ul>
                    <li>Thực hiện nghị quyết của HĐND.</li>
                    <li>Tổ chức thi hành Hiến pháp, luật, văn bản của cơ quan nhà nước cấp trên.</li>
                    <li>Quản lý đất đai, xây dựng, dân cư, an sinh, giáo dục, y tế, đầu tư công... theo phân cấp.</li>
                </ul>
            `,
            advanced: `
                <h3>Nơi người dân cảm nhận Nhà nước rõ nhất</h3>
                <p>Đối với phần lớn người dân và doanh nghiệp, "Nhà nước" trong đời sống hằng ngày thường hiện ra qua UBND và cơ quan chuyên môn trực thuộc. Vì vậy, năng lực phục vụ, giải quyết thủ tục và điều phối ở cấp này ảnh hưởng trực tiếp tới niềm tin công chúng.</p>
                <div class="tip-box">Cách nhớ ngắn: HĐND thiên về quyết nghị và giám sát; UBND thiên về tổ chức thực hiện và điều hành.</div>
            `,
            connections: ['hdnd', 'chinh-phu', 'co-quan-chuyen-mon']
        },
        'co-quan-chuyen-mon': {
            icon: '🧱',
            title: 'Sở Và Cơ Quan Chuyên Môn',
            simple: `
                <h3>Lớp triển khai chi tiết</h3>
                <p>Trong mô hình hiện hành, dưới UBND cấp tỉnh là các sở và cơ quan chuyên môn; ở cấp xã là công chức chuyên môn, bộ phận phục vụ và đầu mối trực tiếp giải quyết công việc cho dân.</p>
                <ul>
                    <li>Giúp UBND thực hiện quản lý ngành, lĩnh vực.</li>
                    <li>Thực hiện thủ tục, tham mưu chính sách, thanh tra - kiểm tra theo phân công.</li>
                    <li>Kết nối hướng dẫn chuyên môn từ bộ, ngành với nhu cầu thực tế tại địa phương.</li>
                </ul>
            `,
            detail: `
                <h3>Cầu nối giữa trung ương và địa phương</h3>
                <p>Các cơ quan chuyên môn là nơi chuyển các yêu cầu quản lý chung thành công việc vận hành cụ thể, ví dụ xây dựng kế hoạch ngành, giải quyết hồ sơ, kiểm tra cơ sở hoặc tham mưu cho UBND. Ở khung 2 cấp, tầng này đặc biệt quan trọng vì nhiều việc được chuyển thẳng về cấp tỉnh và cấp xã.</p>
                <ul>
                    <li>Nhận định hướng chuyên môn từ bộ, ngành.</li>
                    <li>Tham mưu cho UBND phù hợp với điều kiện địa phương.</li>
                    <li>Là tầng dễ phát sinh áp lực thủ tục nhất nếu quy trình không được cải thiện.</li>
                </ul>
            `,
            advanced: `
                <h3>Nơi quyết định chất lượng thực thi</h3>
                <p>Nhiều chính sách thất bại không phải vì thiết kế ở trung ương quá tệ, mà vì tầng chuyên môn tại địa phương thiếu nguồn lực, dữ liệu, năng lực phối hợp hoặc bị chồng chéo quy trình. Đây là điểm nên quan sát kỹ khi đánh giá hiệu quả quản trị công.</p>
            `,
            connections: ['bo-nganh', 'ubnd']
        },
        'kiem-toan': {
            icon: '📊',
            title: 'Kiểm Toán Nhà Nước',
            simple: `
                <h3>Kiểm tra tiền công, tài sản công</h3>
                <p>Kiểm toán nhà nước là cơ quan kiểm tra việc quản lý và sử dụng tài chính công, tài sản công.</p>
                <ul>
                    <li>Xem ngân sách có được dùng đúng, đủ, hiệu quả hay không.</li>
                    <li>Phát hiện sai lệch, lãng phí, bất cập trong quản lý công.</li>
                    <li>Tạo cơ sở cho giám sát của Quốc hội và xã hội.</li>
                </ul>
            `,
            detail: `
                <h3>Vì sao cơ quan này quan trọng?</h3>
                <p>Một bộ máy có thể ra quyết định đúng trên giấy nhưng vẫn thất bại nếu quản lý tiền bạc và tài sản công kém. Kiểm toán nhà nước giúp soi vào phần "đầu ra tài chính" của quản trị.</p>
                <ul>
                    <li>Kiểm toán báo cáo tài chính, tuân thủ và hoạt động.</li>
                    <li>Đánh giá hiệu quả quản lý, sử dụng nguồn lực công.</li>
                    <li>Kiến nghị xử lý tài chính, hoàn thiện cơ chế hoặc khắc phục sai phạm.</li>
                </ul>
            `,
            advanced: `
                <h3>Một lớp kiểm soát rất thực chất</h3>
                <p>Giám sát bằng lời nói và báo cáo là cần thiết, nhưng giám sát qua số liệu, hồ sơ, dòng tiền và tài sản công thường cho thấy bức tranh vận hành thật hơn. Vì vậy, kiểm toán là công cụ kiểm soát rất quan trọng trong nhà nước hiện đại.</p>
                <div class="warning-box">Điểm cần nhớ: Kiểm toán không thay thế Quốc hội, Thanh tra hay cơ quan điều tra; đây là một lớp kiểm tra chuyên biệt về tài chính công và tài sản công.</div>
            `,
            connections: ['quoc-hoi', 'chinh-phu', 'ubnd']
        },
        'mat-tran': {
            icon: '🤝',
            title: 'Mặt Trận Tổ Quốc Việt Nam',
            simple: `
                <h3>Không phải cơ quan nhà nước, nhưng rất gần bộ máy nhà nước</h3>
                <p>Mặt trận Tổ quốc Việt Nam là cơ sở chính trị của chính quyền nhân dân, có vai trò tập hợp, phản ánh ý kiến xã hội, giám sát và phản biện xã hội.</p>
                <ul>
                    <li>Kết nối Nhân dân với bộ máy công quyền.</li>
                    <li>Tham gia giám sát, phản biện xã hội.</li>
                    <li>Góp phần tạo đồng thuận và phát hiện vấn đề từ cơ sở.</li>
                </ul>
            `,
            detail: `
                <h3>Vì sao vẫn cần học mục này?</h3>
                <p>Dù không phải cơ quan nhà nước theo nghĩa hẹp, Mặt trận lại tác động mạnh tới cách nhà nước lắng nghe xã hội. Đây là một kênh phản hồi rất quan trọng trong hệ thống chính trị.</p>
                <ul>
                    <li>Thu thập ý kiến, kiến nghị, tâm tư của Nhân dân.</li>
                    <li>Tham gia giám sát và phản biện đối với chính sách, hoạt động công quyền.</li>
                    <li>Hỗ trợ tạo sự đồng thuận xã hội trong quá trình thực thi chủ trương, chính sách.</li>
                </ul>
            `,
            advanced: `
                <h3>Lớp phản hồi xã hội trong hệ thống</h3>
                <p>Một bộ máy nhà nước chỉ dựa vào mệnh lệnh hành chính thường phản ứng chậm với tín hiệu xã hội. Mặt trận giúp bổ sung "kênh cảm biến" để hệ thống không tách rời khỏi đời sống thực tế.</p>
                <div class="tip-box">Học mục này để hiểu rằng vận hành nhà nước không chỉ có ra quyết định và thi hành, mà còn có lắng nghe, phản biện và tạo đồng thuận.</div>
            `,
            connections: ['nhan-dan-bau-cu', 'hdnd', 'ubnd']
        }
    };

    const quickTips = [
        { icon: '🏛️', text: 'Quốc hội chủ yếu đặt luật chơi và giám sát tối cao.' },
        { icon: '🏢', text: 'Chính phủ chủ yếu điều hành và tổ chức thực hiện luật.' },
        { icon: '⚖️', text: 'Tòa án xét xử; Viện kiểm sát công tố và kiểm sát tư pháp.' },
        { icon: '📍', text: 'Ở địa phương hiện hành, HĐND và UBND vận hành theo mô hình 2 cấp: tỉnh và xã.' }
    ];

    const governmentStructure = {
        updated: 'Khung hiện hành 2025-2026',
        stats: [
            {
                value: '14',
                label: 'Bộ',
                note: 'Các đầu mối quản lý đa ngành, đa lĩnh vực của Chính phủ.'
            },
            {
                value: '3',
                label: 'Cơ quan ngang bộ',
                note: 'Đầu mối có thẩm quyền tương đương bộ ở các mảng đặc thù.'
            },
            {
                value: '5',
                label: 'Cơ quan thuộc Chính phủ',
                note: 'Khối truyền thông công, nghiên cứu chiến lược và hỗ trợ vận hành.'
            },
            {
                value: '2',
                label: 'Cấp chính quyền địa phương',
                note: 'Cấp tỉnh và cấp xã, phường, đặc khu theo luật hiện hành.'
            }
        ],
        ministries: [
            {
                name: 'Bộ Quốc phòng',
                scope: 'Quốc phòng, bảo vệ Tổ quốc, xây dựng lực lượng vũ trang nhân dân.',
                note: 'Khối an ninh - quốc phòng.'
            },
            {
                name: 'Bộ Công an',
                scope: 'An ninh quốc gia, trật tự an toàn xã hội, quản lý cư trú và nhiều nghiệp vụ bảo đảm an ninh.',
                note: 'Khối an ninh - trật tự.'
            },
            {
                name: 'Bộ Ngoại giao',
                scope: 'Đối ngoại nhà nước, ngoại giao song phương, đa phương, lãnh sự và bảo hộ công dân.',
                note: 'Đầu mối đối ngoại chính thức của Nhà nước.'
            },
            {
                name: 'Bộ Nội vụ',
                scope: 'Tổ chức bộ máy, công vụ, công chức, chính quyền địa phương, địa giới hành chính và cải cách hành chính.',
                note: 'Khối tổ chức - nhân sự công.'
            },
            {
                name: 'Bộ Tư pháp',
                scope: 'Xây dựng, thẩm định, rà soát pháp luật; hộ tịch, quốc tịch, thi hành án dân sự và hỗ trợ pháp lý.',
                note: 'Đầu mối pháp chế và thi hành án dân sự.'
            },
            {
                name: 'Bộ Tài chính',
                scope: 'Ngân sách, thuế, hải quan, tài sản công, đầu tư công và điều phối tài chính công.',
                note: 'Khối tài chính - ngân sách.'
            },
            {
                name: 'Bộ Công Thương',
                scope: 'Công nghiệp, năng lượng, thương mại trong nước và quốc tế, logistics và thị trường.',
                note: 'Đầu mối sản xuất và lưu thông hàng hóa.'
            },
            {
                name: 'Bộ Nông nghiệp và Môi trường',
                scope: 'Nông nghiệp, lâm nghiệp, thủy sản, tài nguyên, môi trường, khí hậu và phát triển nông thôn.',
                note: 'Bộ hợp nhất theo kiện toàn năm 2025.'
            },
            {
                name: 'Bộ Xây dựng',
                scope: 'Xây dựng, hạ tầng kỹ thuật, đô thị, nhà ở, công trình và các mảng quản lý giao thông theo cơ cấu mới.',
                note: 'Đầu mối hạ tầng - đô thị.'
            },
            {
                name: 'Bộ Văn hóa, Thể thao và Du lịch',
                scope: 'Văn hóa, gia đình, thể thao, du lịch và công nghiệp văn hóa.',
                note: 'Khối văn hóa - du lịch.'
            },
            {
                name: 'Bộ Khoa học và Công nghệ',
                scope: 'Khoa học, công nghệ, đổi mới sáng tạo, tiêu chuẩn đo lường chất lượng và chuyển đổi số theo cơ cấu mới.',
                note: 'Bộ hợp nhất theo kiện toàn năm 2025.'
            },
            {
                name: 'Bộ Giáo dục và Đào tạo',
                scope: 'Giáo dục mầm non đến đại học, chương trình, chuẩn đầu ra và quản lý hệ thống giáo dục quốc dân.',
                note: 'Đầu mối chính sách giáo dục.'
            },
            {
                name: 'Bộ Y tế',
                scope: 'Y tế dự phòng, khám chữa bệnh, dược, an toàn thực phẩm và bảo vệ sức khỏe nhân dân.',
                note: 'Khối sức khỏe cộng đồng.'
            },
            {
                name: 'Bộ Dân tộc và Tôn giáo',
                scope: 'Công tác dân tộc, tín ngưỡng, tôn giáo và chính sách với vùng đồng bào dân tộc thiểu số.',
                note: 'Bộ mới sau kiện toàn năm 2025.'
            }
        ],
        ministerialAgencies: [
            {
                name: 'Ngân hàng Nhà nước Việt Nam',
                scope: 'Điều hành chính sách tiền tệ, quản lý hoạt động ngân hàng và ổn định hệ thống tài chính tiền tệ.',
                note: 'Cơ quan ngang bộ về tiền tệ.'
            },
            {
                name: 'Thanh tra Chính phủ',
                scope: 'Thanh tra hành chính, giải quyết khiếu nại, tố cáo và phòng, chống tham nhũng theo thẩm quyền.',
                note: 'Lớp kiểm tra nội bộ của hành pháp.'
            },
            {
                name: 'Văn phòng Chính phủ',
                scope: 'Tham mưu tổng hợp, điều phối chương trình công tác và phục vụ hoạt động của Chính phủ, Thủ tướng.',
                note: 'Đầu mối giữ nhịp điều hành hằng ngày.'
            }
        ],
        attachedAgencies: [
            {
                name: 'Đài Tiếng nói Việt Nam',
                scope: 'Phát thanh quốc gia, thông tin chính thống và phục vụ truyền thông công.',
                note: 'VOV.'
            },
            {
                name: 'Thông tấn xã Việt Nam',
                scope: 'Thông tấn nhà nước, cung cấp nguồn tin chính thức cho hệ thống báo chí và đối ngoại.',
                note: 'TTXVN.'
            },
            {
                name: 'Đài Truyền hình Việt Nam',
                scope: 'Truyền hình quốc gia, phổ biến thông tin, chính sách và nội dung công ích.',
                note: 'VTV.'
            },
            {
                name: 'Viện Hàn lâm Khoa học xã hội Việt Nam',
                scope: 'Nghiên cứu chiến lược về khoa học xã hội, chính sách công và phát triển xã hội.',
                note: 'VASS.'
            },
            {
                name: 'Viện Hàn lâm Khoa học và Công nghệ Việt Nam',
                scope: 'Nghiên cứu cơ bản, nghiên cứu ứng dụng và tư vấn khoa học - công nghệ cho Nhà nước.',
                note: 'VAST.'
            }
        ],
        hierarchy: [
            {
                level: 'Trục 1',
                title: 'Quốc hội và các thiết chế hiến định',
                description: 'Quốc hội đặt khuôn khổ luật chơi, quyết định vấn đề lớn và giám sát tối cao; đi cùng là Chủ tịch nước, TANDTC, VKSNDTC và Kiểm toán Nhà nước.'
            },
            {
                level: 'Trục 2',
                title: 'Chính phủ',
                description: 'Cơ quan hành chính nhà nước cao nhất, do Thủ tướng đứng đầu, hiện có 25 thành viên theo cơ cấu từ ngày 18/2/2025.'
            },
            {
                level: 'Trục 3',
                title: 'Thủ tướng và 7 Phó Thủ tướng',
                description: 'Giữ nhịp điều phối, xử lý việc liên ngành, liên vùng và chỉ đạo bộ máy hành chính thống nhất.'
            },
            {
                level: 'Trục 4',
                title: '14 Bộ và 3 cơ quan ngang bộ',
                description: 'Lớp quản lý theo ngành, lĩnh vực; đây là nơi ban hành quy chuẩn, hướng dẫn, thanh tra và điều phối chuyên môn trên toàn quốc.'
            },
            {
                level: 'Trục 5',
                title: '5 cơ quan thuộc Chính phủ',
                description: 'Hỗ trợ truyền thông công, nghiên cứu chiến lược và một số chức năng vận hành đặc thù.'
            },
            {
                level: 'Trục 6',
                title: 'Chính quyền địa phương 2 cấp',
                description: 'Cấp tỉnh và cấp xã là hai tầng chính quyền địa phương hiện hành; mỗi cấp có HĐND, UBND và bộ phận chuyên môn tương ứng.'
            }
        ],
        localModel: {
            headline: 'Mô hình hiện hành tập trung vào 2 tầng: tỉnh và xã.',
            note: 'Theo Luật Tổ chức chính quyền địa phương 2025, cấp huyện không còn là một cấp chính quyền địa phương độc lập trong thiết kế hiện hành.',
            cards: [
                {
                    kicker: 'Cấp tỉnh',
                    title: 'Tỉnh, thành phố trực thuộc trung ương',
                    points: [
                        'Có HĐND để quyết nghị và giám sát.',
                        'Có UBND để tổ chức thực hiện, điều hành.',
                        'Có sở và cơ quan chuyên môn làm đầu mối lĩnh vực.'
                    ]
                },
                {
                    kicker: 'Cấp xã',
                    title: 'Xã, phường, đặc khu',
                    points: [
                        'Là nơi người dân tiếp xúc trực tiếp nhiều nhất với bộ máy công quyền.',
                        'Có HĐND và UBND theo mô hình hiện hành.',
                        'Có công chức chuyên môn, bộ phận một cửa và đầu mối phục vụ dân cư.'
                    ]
                }
            ]
        }
    };

    const legacyHistory = [
        {
            period: '1945 - 1980',
            title: 'Giai đoạn tiền thân',
            description: 'Nhà nước Việt Nam Dân chủ Cộng hòa và sau đó là CHXHCN Việt Nam đã có các chức danh đứng đầu Đảng, Nhà nước, Chính phủ và cơ quan đại diện, nhưng cơ cấu chưa ổn định theo đúng cách gọi "tứ trụ" hiện nay.'
        },
        {
            period: '1980 - 1991',
            title: 'Giai đoạn chuyển tiếp',
            description: 'Thời kỳ này sử dụng các thiết chế như Hội đồng Nhà nước, Hội đồng Bộ trưởng; các vị trí tương đương với Chủ tịch nước, Thủ tướng và Chủ tịch Quốc hội ngày nay có cách tổ chức khác so với mô hình hiện đại.'
        },
        {
            period: 'Từ 1992 trở đi',
            title: 'Mô hình hiện đại',
            description: 'Từ Hiến pháp 1992, bốn trục Tổng Bí thư, Chủ tịch nước, Thủ tướng và Chủ tịch Quốc hội trở nên ổn định hơn trong nhận thức công chúng. Danh sách bên dưới đi theo từng chức danh, từ cũ đến mới.'
        }
    ];

    const tuTruHistory = [
        {
            office: 'Tổng Bí thư',
            icon: '🧭',
            description: 'Trục lãnh đạo chính trị cao nhất của Đảng Cộng sản Việt Nam.',
            entries: [
                {
                    name: 'Đỗ Mười',
                    term: '06/1991 - 12/1997',
                    bio: 'Lãnh đạo kỳ cựu, từng là Chủ tịch Hội đồng Bộ trưởng, gắn với giai đoạn đầu ổn định sau Đổi mới.'
                },
                {
                    name: 'Lê Khả Phiêu',
                    term: '12/1997 - 04/2001',
                    bio: 'Xuất thân quân đội, từng giữ vai trò Chủ nhiệm Tổng cục Chính trị, lãnh đạo Đảng trong giai đoạn chuyển tiếp cuối thập niên 1990.'
                },
                {
                    name: 'Nông Đức Mạnh',
                    term: '04/2001 - 01/2011',
                    bio: 'Giữ cương vị hai nhiệm kỳ liên tiếp, trước đó là Chủ tịch Quốc hội.'
                },
                {
                    name: 'Nguyễn Phú Trọng',
                    term: '01/2011 - 07/2024',
                    bio: 'Nhà lý luận chính trị, gắn với chỉnh đốn Đảng và chống tham nhũng; có giai đoạn kiêm Chủ tịch nước.',
                    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Nguyen_Phu_Trong_2013.jpg/250px-Nguyen_Phu_Trong_2013.jpg'
                },
                {
                    name: 'Tô Lâm',
                    term: '08/2024 - nay',
                    bio: 'Xuất thân từ lực lượng công an, từng là Bộ trưởng Công an và Chủ tịch nước trước khi giữ cương vị Tổng Bí thư.',
                    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/T%C3%B4_L%C3%A2m_in_August_2024.jpg/250px-T%C3%B4_L%C3%A2m_in_August_2024.jpg',
                    current: true
                }
            ]
        },
        {
            office: 'Chủ tịch nước',
            icon: '🇻🇳',
            description: 'Nguyên thủ quốc gia, đại diện Nhà nước về đối nội và đối ngoại.',
            entries: [
                {
                    name: 'Lê Đức Anh',
                    term: '09/1992 - 09/1997',
                    bio: 'Đại tướng, từng là Bộ trưởng Quốc phòng, là Chủ tịch nước đầu tiên của giai đoạn Hiến pháp 1992.'
                },
                {
                    name: 'Trần Đức Lương',
                    term: '09/1997 - 06/2006',
                    bio: 'Xuất thân kỹ sư địa chất, giữ cương vị Chủ tịch nước qua gần hai nhiệm kỳ.'
                },
                {
                    name: 'Nguyễn Minh Triết',
                    term: '06/2006 - 07/2011',
                    bio: 'Từng là Bí thư Thành ủy TP.HCM, giữ vai trò nguyên thủ trong giai đoạn hội nhập sâu hơn của Việt Nam.'
                },
                {
                    name: 'Trương Tấn Sang',
                    term: '07/2011 - 04/2016',
                    bio: 'Từng giữ nhiều vị trí trọng yếu trong Đảng và Nhà nước trước khi làm Chủ tịch nước.'
                },
                {
                    name: 'Trần Đại Quang',
                    term: '04/2016 - 09/2018',
                    bio: 'Xuất thân lực lượng công an, từng là Bộ trưởng Công an trước khi giữ cương vị Chủ tịch nước.'
                },
                {
                    name: 'Nguyễn Phú Trọng',
                    term: '10/2018 - 04/2021',
                    bio: 'Giữ cương vị Chủ tịch nước theo hình thức kiêm nhiệm sau khi Chủ tịch nước Trần Đại Quang từ trần.',
                    note: 'Kiêm nhiệm',
                    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Nguyen_Phu_Trong_2013.jpg/250px-Nguyen_Phu_Trong_2013.jpg'
                },
                {
                    name: 'Nguyễn Xuân Phúc',
                    term: '04/2021 - 01/2023',
                    bio: 'Từng là Thủ tướng, sau đó chuyển sang giữ cương vị Chủ tịch nước.'
                },
                {
                    name: 'Võ Văn Thưởng',
                    term: '03/2023 - 03/2024',
                    bio: 'Lãnh đạo thuộc thế hệ trẻ hơn trong nhóm chức danh cao cấp, có nền tảng sâu về công tác Đảng.'
                },
                {
                    name: 'Tô Lâm',
                    term: '05/2024 - 10/2024',
                    bio: 'Giữ chức Chủ tịch nước trong giai đoạn chuyển tiếp năm 2024 trước khi được bầu làm Tổng Bí thư.',
                    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/T%C3%B4_L%C3%A2m_in_August_2024.jpg/250px-T%C3%B4_L%C3%A2m_in_August_2024.jpg'
                },
                {
                    name: 'Lương Cường',
                    term: '10/2024 - nay',
                    bio: 'Đại tướng, từng là Chủ nhiệm Tổng cục Chính trị Quân đội nhân dân Việt Nam, giữ cương vị Chủ tịch nước từ tháng 10/2024.',
                    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Lu%C6%A1ng_C%C6%B0%E1%BB%9Dng_2024.jpg/250px-Lu%C6%A1ng_C%C6%B0%E1%BB%9Dng_2024.jpg',
                    current: true
                }
            ]
        },
        {
            office: 'Thủ tướng',
            icon: '🏢',
            description: 'Người đứng đầu Chính phủ và hệ thống hành chính nhà nước.',
            entries: [
                {
                    name: 'Võ Văn Kiệt',
                    term: '08/1991 - 09/1997',
                    bio: 'Một trong những gương mặt tiêu biểu của thời kỳ Đổi mới, thúc đẩy mạnh hạ tầng và mở cửa kinh tế.'
                },
                {
                    name: 'Phan Văn Khải',
                    term: '09/1997 - 06/2006',
                    bio: 'Gắn với cải cách kinh tế, cải thiện môi trường đầu tư và giai đoạn hội nhập đầu thế kỷ 21.'
                },
                {
                    name: 'Nguyễn Tấn Dũng',
                    term: '06/2006 - 04/2016',
                    bio: 'Điều hành Chính phủ qua giai đoạn tăng trưởng nhanh, hội nhập sâu và cả giai đoạn khủng hoảng tài chính toàn cầu.'
                },
                {
                    name: 'Nguyễn Xuân Phúc',
                    term: '04/2016 - 04/2021',
                    bio: 'Nhấn mạnh thông điệp chính phủ kiến tạo, cải cách môi trường kinh doanh và điều hành giai đoạn đầu COVID-19.'
                },
                {
                    name: 'Phạm Minh Chính',
                    term: '04/2021 - nay',
                    bio: 'Từng là Trưởng Ban Tổ chức Trung ương, giữ cương vị Thủ tướng từ năm 2021 đến nay.',
                    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Prime_Minister_Pham_Minh_Chinh_2024.jpg/250px-Prime_Minister_Pham_Minh_Chinh_2024.jpg',
                    current: true
                }
            ]
        },
        {
            office: 'Chủ tịch Quốc hội',
            icon: '🏛️',
            description: 'Người đứng đầu Quốc hội và giữ nhịp hoạt động nghị trường.',
            entries: [
                {
                    name: 'Nông Đức Mạnh',
                    term: '09/1992 - 06/2001',
                    bio: 'Giữ cương vị Chủ tịch Quốc hội trước khi trở thành Tổng Bí thư.'
                },
                {
                    name: 'Nguyễn Văn An',
                    term: '06/2001 - 06/2006',
                    bio: 'Gắn với giai đoạn đổi mới hoạt động nghị trường đầu những năm 2000.'
                },
                {
                    name: 'Nguyễn Phú Trọng',
                    term: '06/2006 - 07/2011',
                    bio: 'Từng là Chủ tịch Quốc hội trước khi giữ cương vị Tổng Bí thư.',
                    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Nguyen_Phu_Trong_2013.jpg/250px-Nguyen_Phu_Trong_2013.jpg'
                },
                {
                    name: 'Nguyễn Sinh Hùng',
                    term: '07/2011 - 03/2016',
                    bio: 'Từng là Phó Thủ tướng thường trực, đưa kinh nghiệm điều hành sang hoạt động nghị trường.'
                },
                {
                    name: 'Nguyễn Thị Kim Ngân',
                    term: '03/2016 - 03/2021',
                    bio: 'Nữ Chủ tịch Quốc hội đầu tiên của Việt Nam.'
                },
                {
                    name: 'Vương Đình Huệ',
                    term: '03/2021 - 05/2024',
                    bio: 'Xuất thân từ lĩnh vực kinh tế - tài chính, từng là Bộ trưởng Tài chính, Phó Thủ tướng và Bí thư Thành ủy Hà Nội.'
                },
                {
                    name: 'Trần Thanh Mẫn',
                    term: '05/2024 - nay',
                    bio: 'Từng là Chủ tịch Ủy ban Trung ương Mặt trận Tổ quốc Việt Nam, giữ cương vị Chủ tịch Quốc hội từ tháng 5/2024.',
                    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Tr%E1%BA%A7n_Thanh_M%E1%BA%ABn_2024.jpg/250px-Tr%E1%BA%A7n_Thanh_M%E1%BA%ABn_2024.jpg',
                    current: true
                }
            ]
        }
    ];

    const checklistItems = [
        'Phân biệt được Quốc hội với Chính phủ.',
        'Biết Chủ tịch nước là nguyên thủ quốc gia, không đồng nghĩa với cơ quan hành pháp.',
        'Nhớ rằng Tòa án xét xử còn Viện kiểm sát không ra phán quyết thay Tòa án.',
        'Nắm được chính quyền địa phương hiện hành vận hành theo 2 cấp: tỉnh và xã; HĐND quyết nghị, UBND chấp hành và điều hành.',
        'Hiểu bộ, ngành là đầu mối quản lý theo lĩnh vực chuyên môn.',
        'Biết Kiểm toán nhà nước tập trung vào tài chính công và tài sản công.',
        'Biết Mặt trận Tổ quốc Việt Nam không phải cơ quan nhà nước nhưng có vai trò giám sát, phản biện xã hội.',
        'Nhớ nguyên tắc chung: quyền lực nhà nước thống nhất nhưng có phân công, phối hợp và kiểm soát.'
    ];

    const tourSteps = {
        beginner: [
            {
                title: 'Nhìn bức tranh lớn trước',
                description: 'Bắt đầu ở phần tổng quan để nhớ rằng trang này giải thích bộ máy nhà nước theo các lớp: quyết định, điều hành, xét xử và giám sát.',
                target: '#heroPanel'
            },
            {
                title: 'Đi theo dòng vận hành',
                description: 'Sơ đồ Mermaid giúp bạn nhìn rõ đường đi của quyền lực, điều hành, tư pháp và cả danh sách đầu mối Chính phủ hiện hành.',
                target: '#systemMap'
            },
            {
                title: 'Quốc hội là trung tâm luật chơi',
                description: 'Mở thẻ Quốc hội để nắm rõ ba việc lớn: làm luật, quyết định vấn đề quan trọng và giám sát tối cao.',
                target: '.node[data-component="quoc-hoi"]'
            },
            {
                title: 'Chính phủ là khối điều hành',
                description: 'Sau khi có luật và nghị quyết, Chính phủ là nơi biến chúng thành hoạt động quản lý và chính sách thực thi.',
                target: '.node[data-component="chinh-phu"]'
            },
            {
                title: 'Phân biệt Tòa án và Viện kiểm sát',
                description: 'Đây là cặp dễ nhầm nhất. Tòa án xét xử, còn Viện kiểm sát công tố và kiểm sát hoạt động tư pháp.',
                target: '.node[data-component="toa-an"]'
            },
            {
                title: 'Hiểu bộ máy địa phương',
                description: 'HĐND là nơi quyết nghị và giám sát ở địa phương, UBND là nơi chấp hành và điều hành.',
                target: '.node[data-component="hdnd"]'
            },
            {
                title: 'Đừng quên các lớp giám sát',
                description: 'Kiểm toán, Mặt trận, cử tri và cơ chế báo cáo giúp bộ máy không chỉ vận hành mà còn phải giải trình.',
                target: '.node[data-component="kiem-toan"]'
            }
        ],
        intermediate: [
            {
                title: 'Bắt đầu từ nguyên tắc tổ chức',
                description: 'Để học nhanh hơn, hãy nhớ một câu: quyền lực nhà nước thống nhất nhưng được phân công, phối hợp và kiểm soát.',
                target: '.node[data-component="nguyen-tac-to-chuc"]'
            },
            {
                title: 'Quốc hội và thiết chế thường trực',
                description: 'Học Quốc hội cùng với Ủy ban Thường vụ Quốc hội để thấy bộ máy lập pháp vận hành liên tục chứ không chỉ tồn tại lúc họp.',
                target: '.node[data-component="ubtvqh"]'
            },
            {
                title: 'Chủ tịch nước là điểm dễ nhầm',
                description: 'Đọc mục này để tránh lẫn nguyên thủ quốc gia với cơ quan điều hành hành chính.',
                target: '.node[data-component="chu-tich-nuoc"]'
            },
            {
                title: 'Thủ tướng giữ nhịp điều phối',
                description: 'Nhiều vấn đề nhà nước là liên ngành, nên vai trò điều phối của Thủ tướng rất quan trọng.',
                target: '.node[data-component="thu-tuong"]'
            },
            {
                title: 'Đừng bỏ qua tầng chuyên môn',
                description: 'Sở, phòng và cơ quan chuyên môn là nơi nhiều chính sách thành công hoặc vướng mắc trong thực tế.',
                target: '.node[data-component="co-quan-chuyen-mon"]'
            },
            {
                title: 'Hệ thống cần giám sát thực chất',
                description: 'Kiểm toán và phản biện xã hội giúp bổ sung các lớp kiểm soát ngoài báo cáo hành chính thông thường.',
                target: '.node[data-component="mat-tran"]'
            }
        ],
        advanced: [
            {
                title: 'Đọc hệ thống như một thiết kế thể chế',
                description: 'Bắt đầu từ nguyên tắc tổ chức để thấy vì sao các cơ quan không tồn tại tách biệt hoàn toàn.',
                target: '.node[data-component="nguyen-tac-to-chuc"]'
            },
            {
                title: 'Quốc hội giữ vai trò trục dọc',
                description: 'Vai trò của Quốc hội không chỉ nằm ở lập pháp mà còn ở tổ chức bộ máy, giám sát và phân bổ nguồn lực công.',
                target: '.node[data-component="quoc-hoi"]'
            },
            {
                title: 'Ủy ban Thường vụ giữ nhịp liên tục',
                description: 'Thiết chế thường trực này bảo đảm năng lực xử lý và giám sát giữa các kỳ họp của Quốc hội.',
                target: '.node[data-component="ubtvqh"]'
            },
            {
                title: 'Thủ tướng và bộ, ngành tạo ra điều hành liên ngành',
                description: 'Đây là khâu quyết định việc luật có biến thành quản trị hiệu quả hay không.',
                target: '.node[data-component="bo-nganh"]'
            },
            {
                title: 'Khối tư pháp là điểm neo hợp pháp',
                description: 'Học Tòa án cùng Viện kiểm sát để hiểu logic bảo đảm công lý và tính hợp pháp của tố tụng.',
                target: '.node[data-component="vien-kiem-sat"]'
            },
            {
                title: 'Giám sát xã hội giúp hệ thống không tự khép kín',
                description: 'Mặt trận và các kênh phản hồi xã hội giúp nhà nước tiếp nhận tín hiệu từ thực tế đời sống.',
                target: '.node[data-component="mat-tran"]'
            }
        ]
    };

    const elements = {
        levelOverlay: document.getElementById('levelOverlay'),
        levelBadge: document.getElementById('levelBadge'),
        changeLevelBtn: document.getElementById('changeLevelBtn'),
        startTourBtn: document.getElementById('startTourBtn'),
        checklistBtn: document.getElementById('checklistBtn'),
        tourProgress: document.getElementById('tourProgress'),
        tourPanel: document.getElementById('tourPanel'),
        progressFill: document.getElementById('progressFill'),
        currentStep: document.getElementById('currentStep'),
        totalSteps: document.getElementById('totalSteps'),
        tourTitle: document.getElementById('tourTitle'),
        tourDescription: document.getElementById('tourDescription'),
        tourPrev: document.getElementById('tourPrev'),
        tourNext: document.getElementById('tourNext'),
        tourSkip: document.getElementById('tourSkip'),
        infoPanel: document.getElementById('infoPanel'),
        closePanel: document.getElementById('closePanel'),
        panelIcon: document.getElementById('panelIcon'),
        panelTitle: document.getElementById('panelTitle'),
        panelContent: document.getElementById('panelContent'),
        relatedConcepts: document.getElementById('relatedConcepts'),
        quickTips: document.getElementById('quickTips'),
        tipsGrid: document.getElementById('tipsGrid'),
        stateMermaid: document.getElementById('stateMermaid'),
        structureStats: document.getElementById('structureStats'),
        ministriesList: document.getElementById('ministriesList'),
        ministerialAgenciesList: document.getElementById('ministerialAgenciesList'),
        attachedAgenciesList: document.getElementById('attachedAgenciesList'),
        hierarchyList: document.getElementById('hierarchyList'),
        localStructurePanel: document.getElementById('localStructurePanel'),
        historyLegacy: document.getElementById('historyLegacy'),
        officeHistoryGrid: document.getElementById('officeHistoryGrid'),
        checklistModal: document.getElementById('checklistModal'),
        closeChecklist: document.getElementById('closeChecklist'),
        checklistItems: document.getElementById('checklistItems'),
        resetChecklist: document.getElementById('resetChecklist'),
        filterBtns: document.querySelectorAll('.filter-btn'),
        nodes: document.querySelectorAll('.node'),
        tabBtns: document.querySelectorAll('.tab-btn')
    };

    function init() {
        renderGovernmentStructure();
        renderTuTruHistory();
        initMermaidDiagram();
        initLevelSelection();
        initCategoryFilter();
        initNodeInteraction();
        initPanelControls();
        initTourSystem();
        initChecklistModal();
        initKeyboardShortcuts();

        if (state.currentLevel) {
            hideOverlay();
            updateLevelUI();
            filterNodesByLevel();
        }
    }

    function renderGovernmentStructure() {
        if (elements.structureStats) {
            elements.structureStats.innerHTML = governmentStructure.stats.map(item => `
                <article class="structure-stat-card">
                    <span class="structure-stat-value">${item.value}</span>
                    <span class="structure-stat-label">${item.label}</span>
                    <p>${item.note}</p>
                </article>
            `).join('');
        }

        if (elements.ministriesList) {
            elements.ministriesList.innerHTML = governmentStructure.ministries.map(item => createAgencyItem(item, 'Bộ')).join('');
        }

        if (elements.ministerialAgenciesList) {
            elements.ministerialAgenciesList.innerHTML = governmentStructure.ministerialAgencies.map(item => createAgencyItem(item, 'Ngang bộ')).join('');
        }

        if (elements.attachedAgenciesList) {
            elements.attachedAgenciesList.innerHTML = governmentStructure.attachedAgencies.map(item => createAgencyItem(item, 'Thuộc CP')).join('');
        }

        if (elements.hierarchyList) {
            elements.hierarchyList.innerHTML = governmentStructure.hierarchy.map(item => `
                <article class="hierarchy-item">
                    <span class="hierarchy-level">${item.level}</span>
                    <div>
                        <h5>${item.title}</h5>
                        <p>${item.description}</p>
                    </div>
                </article>
            `).join('');
        }

        if (elements.localStructurePanel) {
            elements.localStructurePanel.innerHTML = `
                <div class="local-structure-header">
                    <span class="local-structure-badge">${governmentStructure.updated}</span>
                    <h4>${governmentStructure.localModel.headline}</h4>
                    <p>${governmentStructure.localModel.note}</p>
                </div>
                <div class="local-structure-grid">
                    ${governmentStructure.localModel.cards.map(card => `
                        <article class="local-card">
                            <span class="local-kicker">${card.kicker}</span>
                            <h5>${card.title}</h5>
                            <ul>
                                ${card.points.map(point => `<li>${point}</li>`).join('')}
                            </ul>
                        </article>
                    `).join('')}
                </div>
                <div class="agency-group-note">
                    Danh sách bộ, cơ quan ngang bộ và cơ quan thuộc Chính phủ trên trang này bám theo cơ cấu được công bố chính thức trên Cổng Thông tin điện tử Chính phủ.
                </div>
            `;
        }
    }

    function createAgencyItem(item, tag) {
        return `
            <article class="agency-item">
                <div class="agency-item-head">
                    <h5>${item.name}</h5>
                    <span class="agency-tag">${tag}</span>
                </div>
                <p>${item.scope}</p>
                ${item.note ? `<span class="agency-group-note">${item.note}</span>` : ''}
            </article>
        `;
    }

    function renderTuTruHistory() {
        if (elements.historyLegacy) {
            elements.historyLegacy.innerHTML = legacyHistory.map(item => `
                <article class="legacy-card">
                    <span class="legacy-period">${item.period}</span>
                    <h4>${item.title}</h4>
                    <p>${item.description}</p>
                </article>
            `).join('');
        }

        if (elements.officeHistoryGrid) {
            elements.officeHistoryGrid.innerHTML = tuTruHistory.map(office => `
                <article class="office-column">
                    <div class="office-header">
                        <span class="office-icon">${office.icon}</span>
                        <div>
                            <h4>${office.office}</h4>
                            <p>${office.description}</p>
                        </div>
                    </div>
                    <div class="leader-timeline">
                        ${office.entries.map(entry => `
                            <article class="leader-entry ${entry.current ? 'current' : ''}">
                                ${getLeaderPortrait(entry)}
                                <div class="leader-body">
                                    <div class="leader-heading">
                                        <div>
                                            <div class="leader-role">${entry.name}</div>
                                            <div class="leader-term">${entry.term}</div>
                                        </div>
                                        ${entry.note ? `<span class="leader-note">${entry.note}</span>` : ''}
                                    </div>
                                    <p class="leader-bio">${entry.bio}</p>
                                </div>
                            </article>
                        `).join('')}
                    </div>
                </article>
            `).join('');
        }
    }

    function getLeaderPortrait(entry) {
        if (entry.image) {
            return `
                <div class="leader-portrait">
                    <img src="${entry.image}" alt="${entry.name}" loading="lazy">
                </div>
            `;
        }

        return `
            <div class="leader-portrait portrait-placeholder" aria-hidden="true">
                <span>${getLeaderInitials(entry.name)}</span>
            </div>
        `;
    }

    function getLeaderInitials(name) {
        const parts = name.split(' ').filter(Boolean);
        if (parts.length === 1) {
            return parts[0].slice(0, 2).toUpperCase();
        }

        return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
    }

    function initMermaidDiagram() {
        if (!elements.stateMermaid) {
            return;
        }

        elements.stateMermaid.textContent = `
flowchart TB
    A["Nhân dân / Cử tri"] --> B["Quốc hội<br/>Lập hiến, lập pháp, giám sát tối cao"]
    A --> C["HĐND cấp tỉnh và cấp xã<br/>Quyết nghị, giám sát tại địa phương"]

    subgraph S1["Thiết chế trung ương"]
        direction TB
        B --> D["Chủ tịch nước<br/>Nguyên thủ quốc gia"]
        B --> E["Chính phủ<br/>Cơ quan hành chính nhà nước cao nhất"]
        B --> J["TANDTC<br/>Xét xử cao nhất"]
        B --> K["VKSNDTC<br/>Công tố, kiểm sát tư pháp"]
        B --> L["Kiểm toán Nhà nước<br/>Kiểm tra tài chính công"]
        B --> M["Ủy ban Thường vụ Quốc hội<br/>Giữ nhịp giữa các kỳ họp"]
        E --> F["Thủ tướng<br/>Điều phối chung"]
        F --> G["7 Phó Thủ tướng<br/>Phân công theo lĩnh vực"]
        G --> H["14 Bộ<br/>Quốc phòng; Công an; Ngoại giao; Nội vụ; Tư pháp; Tài chính; Công Thương<br/>Nông nghiệp và Môi trường; Xây dựng; Văn hóa, Thể thao và Du lịch<br/>Khoa học và Công nghệ; Giáo dục và Đào tạo; Y tế; Dân tộc và Tôn giáo"]
        G --> I["3 Cơ quan ngang bộ<br/>Ngân hàng Nhà nước Việt Nam; Thanh tra Chính phủ; Văn phòng Chính phủ"]
        E --> N["5 Cơ quan thuộc Chính phủ<br/>VOV; TTXVN; VTV; Viện Hàn lâm KHXH Việt Nam; Viện Hàn lâm KH&CN Việt Nam"]
    end

    subgraph S2["Chính quyền địa phương 2 cấp"]
        direction TB
        C --> O["Cấp tỉnh<br/>HĐND + UBND + sở, cơ quan chuyên môn"]
        C --> P["Cấp xã, phường, đặc khu<br/>HĐND + UBND + công chức chuyên môn"]
    end

    subgraph S3["Tư pháp và giám sát"]
        direction TB
        J --> T["Tòa án các cấp"]
        K --> U["Viện kiểm sát các cấp"]
        V["Mặt trận Tổ quốc Việt Nam<br/>Giám sát, phản biện xã hội"]
        W["Cử tri, tiếp xúc cử tri, kiến nghị"]
    end

    D --> E
    H --> O
    I --> O
    L -. kiểm tra tài chính công .-> E
    V -. giám sát xã hội .-> B
    V -. giám sát xã hội .-> O
    W -. kiến nghị .-> B
    W -. kiến nghị .-> C
        `.trim();

        if (!window.mermaid) {
            return;
        }

        window.mermaid.initialize({
            startOnLoad: false,
            securityLevel: 'loose',
            theme: 'base',
            flowchart: {
                htmlLabels: true,
                useMaxWidth: true,
                curve: 'basis'
            },
            themeVariables: {
                primaryColor: '#18273f',
                primaryBorderColor: '#5ab1ff',
                primaryTextColor: '#f7f8fb',
                lineColor: '#9ecbff',
                secondaryColor: '#2a1f26',
                tertiaryColor: '#1b2333',
                clusterBkg: '#151f30',
                clusterBorder: '#f2c14e'
            }
        });

        window.mermaid.run({ querySelector: '#stateMermaid' });
    }

    function initLevelSelection() {
        document.querySelectorAll('.level-card').forEach(card => {
            card.addEventListener('click', () => selectLevel(card.dataset.level));
        });

        elements.changeLevelBtn.addEventListener('click', () => {
            elements.levelOverlay.style.display = 'flex';
        });
    }

    function selectLevel(level) {
        state.currentLevel = level;
        localStorage.setItem('vietnamStateLevel', level);
        hideOverlay();
        updateLevelUI();
        filterNodesByLevel();

        if (level === 'beginner') {
            window.setTimeout(startTour, 300);
        }
    }

    function hideOverlay() {
        elements.levelOverlay.style.display = 'none';
    }

    function updateLevelUI() {
        const names = {
            beginner: '🌱 Người Mới',
            intermediate: '🌿 Trung Cấp',
            advanced: '🌳 Nâng Cao'
        };

        elements.levelBadge.textContent = names[state.currentLevel] || names.beginner;

        if (state.currentLevel === 'beginner') {
            elements.quickTips.style.display = 'block';
            elements.tipsGrid.innerHTML = quickTips.map(item => `
                <div class="tip-card">
                    <span class="tip-icon">${item.icon}</span>
                    <p>${item.text}</p>
                </div>
            `).join('');
        } else {
            elements.quickTips.style.display = 'none';
        }
    }

    function filterNodesByLevel() {
        const order = ['beginner', 'intermediate', 'advanced'];
        const currentIndex = order.indexOf(state.currentLevel);

        elements.nodes.forEach(node => {
            const badge = node.querySelector('.node-badge');
            if (!badge) {
                return;
            }

            const nodeIndex = badge.classList.contains('beginner')
                ? 0
                : badge.classList.contains('intermediate')
                    ? 1
                    : 2;

            const isLocked = nodeIndex > currentIndex;
            node.classList.toggle('locked', isLocked);
            node.style.opacity = isLocked ? '0.42' : '1';
            node.style.pointerEvents = isLocked ? 'none' : 'auto';
        });
    }

    function initCategoryFilter() {
        elements.filterBtns.forEach(button => {
            button.addEventListener('click', () => {
                setActiveFilter(button.dataset.category);
            });
        });
    }

    function setActiveFilter(category) {
        elements.filterBtns.forEach(button => {
            button.classList.toggle('active', button.dataset.category === category);
        });

        document.querySelectorAll('.concept-section').forEach(section => {
            section.style.display = category === 'all' || section.dataset.category === category ? 'block' : 'none';
        });
    }

    function initNodeInteraction() {
        elements.nodes.forEach(node => {
            node.addEventListener('click', () => {
                if (node.classList.contains('locked')) {
                    return;
                }
                showComponentInfo(node.dataset.component);
                elements.nodes.forEach(otherNode => otherNode.classList.remove('active'));
                node.classList.add('active');
            });
        });
    }

    function showComponentInfo(id) {
        const component = components[id];
        if (!component) {
            return;
        }

        state.selectedComponent = id;
        elements.panelIcon.textContent = component.icon;
        elements.panelTitle.textContent = component.title;
        showTabContent(state.currentTab || 'simple');
        renderRelated(component.connections || []);
        elements.infoPanel.classList.add('open');
    }

    function showTabContent(tab) {
        if (!state.selectedComponent) {
            return;
        }

        state.currentTab = tab;
        const component = components[state.selectedComponent];
        const content = component[tab] || component.simple;

        elements.tabBtns.forEach(button => {
            button.classList.toggle('active', button.dataset.tab === tab);
        });

        elements.panelContent.innerHTML = content;
    }

    function renderRelated(connectionIds) {
        if (!connectionIds.length) {
            elements.relatedConcepts.innerHTML = '<p class="no-connections">Không có mục liên quan.</p>';
            return;
        }

        elements.relatedConcepts.innerHTML = connectionIds.map(id => {
            const item = components[id];
            const disabled = !isComponentUnlocked(id);
            return item
                ? `<button class="related-btn ${disabled ? 'locked' : ''}" data-component="${id}" ${disabled ? 'disabled' : ''}>${item.icon} ${item.title}</button>`
                : '';
        }).join('');

        elements.relatedConcepts.querySelectorAll('.related-btn').forEach(button => {
            button.addEventListener('click', () => {
                if (button.disabled) {
                    return;
                }
                const targetId = button.dataset.component;
                showComponentInfo(targetId);
                const targetNode = document.querySelector(`.node[data-component="${targetId}"]`);
                if (targetNode) {
                    elements.nodes.forEach(node => node.classList.remove('active'));
                    targetNode.classList.add('active');
                    targetNode.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            });
        });
    }

    function isComponentUnlocked(id) {
        const targetNode = document.querySelector(`.node[data-component="${id}"]`);
        return !targetNode || !targetNode.classList.contains('locked');
    }

    function initPanelControls() {
        elements.closePanel.addEventListener('click', () => {
            elements.infoPanel.classList.remove('open');
        });

        elements.tabBtns.forEach(button => {
            button.addEventListener('click', () => showTabContent(button.dataset.tab));
        });
    }

    function initTourSystem() {
        elements.startTourBtn.addEventListener('click', startTour);
        elements.tourPrev.addEventListener('click', () => showTourStep(state.tourStepIndex - 1));
        elements.tourNext.addEventListener('click', () => {
            const steps = getCurrentTourSteps();
            if (state.tourStepIndex >= steps.length - 1) {
                endTour();
            } else {
                showTourStep(state.tourStepIndex + 1);
            }
        });
        elements.tourSkip.addEventListener('click', endTour);
    }

    function getCurrentTourSteps() {
        return tourSteps[state.currentLevel] || tourSteps.beginner;
    }

    function startTour() {
        if (!state.currentLevel) {
            elements.levelOverlay.style.display = 'flex';
            return;
        }

        state.isTourActive = true;
        state.tourStepIndex = 0;
        setActiveFilter('all');
        elements.tourProgress.style.display = 'block';
        elements.tourPanel.style.display = 'block';
        elements.totalSteps.textContent = getCurrentTourSteps().length;
        showTourStep(0);
    }

    function showTourStep(index) {
        const steps = getCurrentTourSteps();
        if (index < 0 || index >= steps.length) {
            return;
        }

        state.tourStepIndex = index;
        const step = steps[index];
        elements.currentStep.textContent = index + 1;
        elements.tourTitle.textContent = step.title;
        elements.tourDescription.textContent = step.description;
        elements.progressFill.style.width = `${((index + 1) / steps.length) * 100}%`;
        elements.tourPrev.disabled = index === 0;
        elements.tourNext.textContent = index === steps.length - 1 ? 'Hoàn thành' : 'Tiếp theo →';

        document.querySelectorAll('.tour-highlight').forEach(element => {
            element.classList.remove('tour-highlight');
        });

        if (step.target) {
            const target = document.querySelector(step.target);
            if (target) {
                target.classList.add('tour-highlight');
                target.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
    }

    function endTour() {
        state.isTourActive = false;
        elements.tourProgress.style.display = 'none';
        elements.tourPanel.style.display = 'none';
        document.querySelectorAll('.tour-highlight').forEach(element => {
            element.classList.remove('tour-highlight');
        });
    }

    function initChecklistModal() {
        elements.checklistBtn.addEventListener('click', () => {
            elements.checklistModal.style.display = 'flex';
            renderChecklist();
        });

        elements.closeChecklist.addEventListener('click', () => {
            elements.checklistModal.style.display = 'none';
        });

        elements.resetChecklist.addEventListener('click', () => {
            localStorage.removeItem('vietnamStateChecklist');
            renderChecklist();
        });

        elements.checklistModal.addEventListener('click', event => {
            if (event.target === elements.checklistModal) {
                elements.checklistModal.style.display = 'none';
            }
        });
    }

    function renderChecklist() {
        const saved = JSON.parse(localStorage.getItem('vietnamStateChecklist') || '{}');

        elements.checklistItems.innerHTML = checklistItems.map((item, index) => `
            <label class="checklist-item">
                <input type="checkbox" data-index="${index}" ${saved[index] ? 'checked' : ''}>
                <span class="checkbox-custom"></span>
                <span class="checklist-text">${item}</span>
            </label>
        `).join('');

        elements.checklistItems.querySelectorAll('input').forEach(input => {
            input.addEventListener('change', () => {
                const nextState = {};
                elements.checklistItems.querySelectorAll('input').forEach(checkbox => {
                    nextState[checkbox.dataset.index] = checkbox.checked;
                });
                localStorage.setItem('vietnamStateChecklist', JSON.stringify(nextState));
            });
        });
    }

    function initKeyboardShortcuts() {
        document.addEventListener('keydown', event => {
            if (event.key !== 'Escape') {
                return;
            }

            if (elements.checklistModal.style.display === 'flex') {
                elements.checklistModal.style.display = 'none';
                return;
            }

            if (elements.infoPanel.classList.contains('open')) {
                elements.infoPanel.classList.remove('open');
                return;
            }

            if (state.isTourActive) {
                endTour();
            }
        });
    }

    init();
})();
