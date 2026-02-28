// Quality Standards
const standardsData = {
    'iso-9001': {
        icon: '📜',
        title: 'ISO 9001',
        category: 'standards',
        level: 'beginner',
        connections: ['quality-principles', 'iso-14001'],
        simple: `
            <h3>📜 ISO 9001 là gì?</h3>
            <p><strong>ISO 9001</strong> là tiêu chuẩn quốc tế về <em>Hệ thống Quản lý Chất lượng (QMS)</em>, được công nhận trên toàn thế giới.</p>
            <h4>Tại sao cần ISO 9001?</h4>
            <ul>
                <li><strong>Khách hàng yêu cầu:</strong> Nhiều công ty lớn chỉ mua hàng từ nhà cung cấp có ISO 9001</li>
                <li><strong>Cải tiến nội bộ:</strong> Hệ thống hóa quy trình, giảm lỗi</li>
                <li><strong>Uy tín:</strong> Chứng minh cam kết chất lượng với khách hàng</li>
                <li><strong>Đấu thầu:</strong> Điều kiện bắt buộc trong nhiều gói thầu</li>
            </ul>
            <div class="example-box">
                <strong>Thực tế:</strong> Hơn 1 triệu tổ chức tại 170+ quốc gia đã được chứng nhận ISO 9001.
            </div>
            <h4>Cấu trúc 10 điều khoản</h4>
            <ol>
                <li>Phạm vi</li>
                <li>Tài liệu viện dẫn</li>
                <li>Thuật ngữ và định nghĩa</li>
                <li>Bối cảnh tổ chức</li>
                <li>Sự lãnh đạo</li>
                <li>Hoạch định</li>
                <li>Hỗ trợ</li>
                <li>Điều hành</li>
                <li>Đánh giá kết quả</li>
                <li>Cải tiến</li>
            </ol>
        `,
        detail: `
            <h3>📊 ISO 9001:2015 chi tiết</h3>
            <h4>High-Level Structure (HLS)</h4>
            <p>ISO 9001:2015 sử dụng cấu trúc bậc cao (HLS/Annex SL) giống với ISO 14001, 45001, giúp tích hợp dễ dàng.</p>
            <h4>Các điều khoản chính</h4>
            <table>
                <tr><th>Điều</th><th>Nội dung</th><th>PDCA</th></tr>
                <tr><td><strong>4</strong></td><td>Bối cảnh: Hiểu tổ chức, các bên quan tâm, phạm vi QMS</td><td>Plan</td></tr>
                <tr><td><strong>5</strong></td><td>Lãnh đạo: Cam kết, chính sách CL, vai trò trách nhiệm</td><td>Plan</td></tr>
                <tr><td><strong>6</strong></td><td>Hoạch định: Rủi ro & cơ hội, mục tiêu CL, thay đổi</td><td>Plan</td></tr>
                <tr><td><strong>7</strong></td><td>Hỗ trợ: Nguồn lực, năng lực, nhận thức, giao tiếp, tài liệu</td><td>Do</td></tr>
                <tr><td><strong>8</strong></td><td>Điều hành: Kế hoạch & kiểm soát, yêu cầu SP/DV, thiết kế, sản xuất</td><td>Do</td></tr>
                <tr><td><strong>9</strong></td><td>Đánh giá: Giám sát, đánh giá nội bộ, xem xét lãnh đạo</td><td>Check</td></tr>
                <tr><td><strong>10</strong></td><td>Cải tiến: Sự không phù hợp, hành động khắc phục, cải tiến liên tục</td><td>Act</td></tr>
            </table>
            <h4>Tư duy dựa trên rủi ro</h4>
            <p>ISO 9001:2015 tích hợp "Risk-based thinking" - không yêu cầu quản lý rủi ro chính thức, nhưng yêu cầu tổ chức xác định rủi ro & cơ hội và lập kế hoạch ứng phó.</p>
        `,
        advanced: `
            <h3>🎓 Chứng nhận ISO 9001</h3>
            <h4>Quy trình chứng nhận</h4>
            <ol>
                <li><strong>Giai đoạn 1 (Stage 1 Audit):</strong> Đánh giá tài liệu, hệ thống quản lý, sẵn sàng cho Stage 2</li>
                <li><strong>Giai đoạn 2 (Stage 2 Audit):</strong> Đánh giá thực tế tại hiện trường, phỏng vấn nhân viên</li>
                <li><strong>Cấp chứng nhận:</strong> Nếu không có nonconformity lớn</li>
                <li><strong>Surveillance Audit:</strong> Đánh giá giám sát hàng năm</li>
                <li><strong>Re-certification:</strong> Đánh giá tái chứng nhận sau 3 năm</li>
            </ol>
            <h4>Nonconformity</h4>
            <table>
                <tr><th>Loại</th><th>Mô tả</th><th>Xử lý</th></tr>
                <tr><td><strong>Major</strong></td><td>Thiếu hoàn toàn yêu cầu, lỗi hệ thống</td><td>Phải khắc phục trong 90 ngày, audit lại</td></tr>
                <tr><td><strong>Minor</strong></td><td>Thiếu sót nhỏ, lỗi cá biệt</td><td>Khắc phục trước surveillance audit</td></tr>
                <tr><td><strong>Observation</strong></td><td>Cơ hội cải tiến, không phải lỗi</td><td>Xem xét và cải tiến</td></tr>
            </table>
            <h4>Integrated Management System (IMS)</h4>
            <p>Tích hợp ISO 9001 + 14001 + 45001 thành một hệ thống thống nhất:</p>
            <ul>
                <li>Giảm trùng lặp tài liệu</li>
                <li>Một lần audit thay vì nhiều lần</li>
                <li>Tối ưu nguồn lực</li>
                <li>Dễ quản lý và duy trì</li>
            </ul>
            <div class="tip-box">
                <strong>💡 Kinh nghiệm:</strong> Chi phí chứng nhận ISO 9001 khoảng 5,000-20,000 USD tùy quy mô. Nhưng lợi ích thường gấp nhiều lần chi phí nhờ giảm lỗi, tăng hiệu suất và mở rộng thị trường.
            </div>
        `
    },
    'iso-14001': {
        icon: '🌱',
        title: 'ISO 14001 - Môi Trường',
        category: 'standards',
        level: 'intermediate',
        connections: ['iso-9001', 'iso-45001'],
        simple: `
            <h3>🌱 ISO 14001 là gì?</h3>
            <p><strong>ISO 14001</strong> là tiêu chuẩn quốc tế về <em>Hệ thống Quản lý Môi trường (EMS)</em>, giúp tổ chức quản lý tác động đến môi trường.</p>
            <h4>Mục tiêu</h4>
            <ul>
                <li>Giảm thiểu ô nhiễm và tác động môi trường</li>
                <li>Tuân thủ pháp luật môi trường</li>
                <li>Sử dụng tài nguyên hiệu quả</li>
                <li>Cải tiến liên tục hiệu quả môi trường</li>
            </ul>
            <div class="example-box">
                <strong>Ví dụ:</strong> Nhà máy sản xuất giấy áp dụng ISO 14001 giúp giảm 30% nước thải, tái chế 80% phế liệu, tiết kiệm 15% năng lượng.
            </div>
            <h4>Khái niệm quan trọng</h4>
            <ul>
                <li><strong>Khía cạnh môi trường:</strong> Yếu tố có thể tương tác với môi trường (xả thải, tiếng ồn)</li>
                <li><strong>Tác động môi trường:</strong> Hậu quả (ô nhiễm nước, biến đổi khí hậu)</li>
                <li><strong>Significant Aspects:</strong> Khía cạnh có tác động đáng kể → ưu tiên quản lý</li>
            </ul>
        `,
        detail: `
            <h3>📊 Cấu trúc ISO 14001:2015</h3>
            <p>Sử dụng cùng High-Level Structure (HLS) với ISO 9001, dễ tích hợp:</p>
            <table>
                <tr><th>Điều</th><th>Nội dung</th></tr>
                <tr><td><strong>4</strong></td><td>Bối cảnh: Hiểu tổ chức, các bên quan tâm, phạm vi EMS</td></tr>
                <tr><td><strong>5</strong></td><td>Lãnh đạo: Cam kết, chính sách MT, vai trò trách nhiệm</td></tr>
                <tr><td><strong>6</strong></td><td>Hoạch định: Khía cạnh MT, nghĩa vụ tuân thủ, mục tiêu MT</td></tr>
                <tr><td><strong>7</strong></td><td>Hỗ trợ: Nguồn lực, năng lực, nhận thức, giao tiếp, tài liệu</td></tr>
                <tr><td><strong>8</strong></td><td>Điều hành: Kiểm soát vận hành, chuẩn bị ứng phó tình huống khẩn cấp</td></tr>
                <tr><td><strong>9</strong></td><td>Đánh giá: Giám sát MT, đánh giá tuân thủ, audit nội bộ</td></tr>
                <tr><td><strong>10</strong></td><td>Cải tiến: Sự không phù hợp, hành động khắc phục, cải tiến liên tục</td></tr>
            </table>
            <h4>Đánh giá khía cạnh môi trường</h4>
            <p>Ma trận đánh giá dựa trên: Tần suất × Mức độ tác động × Phạm vi ảnh hưởng × Yêu cầu pháp luật.</p>
            <h4>Life Cycle Perspective</h4>
            <p>ISO 14001:2015 yêu cầu xem xét vòng đời sản phẩm: từ nguyên liệu → sản xuất → sử dụng → thải bỏ/tái chế.</p>
        `,
        advanced: `
            <h3>🎓 ISO 14001 nâng cao</h3>
            <h4>So sánh ISO 14001 với các tiêu chuẩn MT khác</h4>
            <table>
                <tr><th>Tiêu chuẩn</th><th>Phạm vi</th><th>Đặc điểm</th></tr>
                <tr><td><strong>ISO 14001</strong></td><td>EMS tổng quát</td><td>Chứng nhận được, HLS</td></tr>
                <tr><td><strong>ISO 14004</strong></td><td>Hướng dẫn EMS</td><td>Không chứng nhận, chi tiết hơn</td></tr>
                <tr><td><strong>ISO 14040/44</strong></td><td>LCA (Life Cycle Assessment)</td><td>Đánh giá vòng đời sản phẩm</td></tr>
                <tr><td><strong>ISO 50001</strong></td><td>Quản lý năng lượng</td><td>Chứng nhận được, tập trung năng lượng</td></tr>
                <tr><td><strong>EMAS</strong></td><td>EMS (EU)</td><td>Nghiêm ngặt hơn ISO 14001</td></tr>
            </table>
            <h4>Carbon Footprint & ESG</h4>
            <p>ISO 14001 ngày càng gắn với:</p>
            <ul>
                <li><strong>ISO 14064:</strong> Kiểm kê khí nhà kính</li>
                <li><strong>Carbon Neutrality:</strong> Mục tiêu phát thải ròng bằng 0</li>
                <li><strong>ESG Reporting:</strong> Environmental-Social-Governance cho nhà đầu tư</li>
                <li><strong>Circular Economy:</strong> Kinh tế tuần hoàn, zero waste</li>
            </ul>
            <div class="warning-box">
                <strong>⚠️ Xu hướng:</strong> Ngày càng nhiều quốc gia (EU, Nhật, Hàn) yêu cầu báo cáo ESG bắt buộc. ISO 14001 là nền tảng tốt để đáp ứng yêu cầu này.
            </div>
        `
    },
    'iso-45001': {
        icon: '🛡️',
        title: 'ISO 45001 - An Toàn',
        category: 'standards',
        level: 'intermediate',
        connections: ['iso-14001', 'iso-9001'],
        simple: `
            <h3>🛡️ ISO 45001 là gì?</h3>
            <p><strong>ISO 45001</strong> là tiêu chuẩn quốc tế về <em>Hệ thống Quản lý An toàn và Sức khỏe Nghề nghiệp (OH&S)</em>.</p>
            <h4>Mục tiêu</h4>
            <ul>
                <li>Phòng ngừa tai nạn lao động và bệnh nghề nghiệp</li>
                <li>Tạo nơi làm việc an toàn và lành mạnh</li>
                <li>Tuân thủ pháp luật về an toàn lao động</li>
                <li>Cải tiến liên tục hiệu quả OH&S</li>
            </ul>
            <div class="example-box">
                <strong>Thống kê:</strong> Mỗi năm trên thế giới có khoảng 2.78 triệu người tử vong vì tai nạn và bệnh nghề nghiệp (ILO). ISO 45001 giúp giảm thiểu con số này.
            </div>
            <h4>Thay thế OHSAS 18001</h4>
            <p>ISO 45001:2018 thay thế OHSAS 18001, sử dụng HLS giống ISO 9001 và 14001.</p>
        `,
        detail: `
            <h3>📊 Nội dung ISO 45001</h3>
            <h4>Nhận diện mối nguy và đánh giá rủi ro</h4>
            <p>Quy trình HIRA (Hazard Identification & Risk Assessment):</p>
            <ol>
                <li>Nhận diện mối nguy (vật lý, hóa học, sinh học, tâm lý, ergonomic)</li>
                <li>Xác định ai có thể bị ảnh hưởng</li>
                <li>Đánh giá rủi ro: Khả năng × Hậu quả</li>
                <li>Xác định biện pháp kiểm soát</li>
                <li>Ghi nhận và đánh giá lại định kỳ</li>
            </ol>
            <h4>Hierarchy of Controls (Thứ bậc kiểm soát)</h4>
            <ol>
                <li><strong>Elimination:</strong> Loại bỏ mối nguy hoàn toàn (hiệu quả nhất)</li>
                <li><strong>Substitution:</strong> Thay thế bằng thứ ít nguy hiểm hơn</li>
                <li><strong>Engineering Controls:</strong> Rào chắn, hệ thống thông gió, tự động hóa</li>
                <li><strong>Administrative Controls:</strong> Quy trình, đào tạo, biển báo, luân chuyển</li>
                <li><strong>PPE:</strong> Thiết bị bảo hộ cá nhân (ít hiệu quả nhất)</li>
            </ol>
            <h4>Sự tham gia của người lao động</h4>
            <p>ISO 45001 nhấn mạnh <strong>consultation and participation</strong> - người lao động không chỉ được thông báo mà phải tham gia vào:</p>
            <ul>
                <li>Nhận diện mối nguy và đánh giá rủi ro</li>
                <li>Xác định biện pháp kiểm soát</li>
                <li>Điều tra sự cố</li>
                <li>Thiết lập chính sách và mục tiêu OH&S</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 ISO 45001 nâng cao</h3>
            <h4>Quản lý sự thay đổi (MOC)</h4>
            <p>Nhiều tai nạn xảy ra khi có thay đổi. ISO 45001 yêu cầu quản lý:</p>
            <ul>
                <li>Thay đổi quy trình, thiết bị, nguyên liệu</li>
                <li>Thay đổi nhân sự, tổ chức</li>
                <li>Thay đổi pháp luật, yêu cầu</li>
                <li>Kiến thức mới về mối nguy</li>
            </ul>
            <h4>KPI an toàn</h4>
            <table>
                <tr><th>Loại</th><th>KPI</th><th>Mô tả</th></tr>
                <tr><td rowspan="3"><strong>Lagging (hậu nghiệm)</strong></td><td>LTIR</td><td>Lost Time Injury Rate</td></tr>
                <tr><td>TRIR</td><td>Total Recordable Incident Rate</td></tr>
                <tr><td>Severity Rate</td><td>Số ngày nghỉ do tai nạn</td></tr>
                <tr><td rowspan="3"><strong>Leading (tiên nghiệm)</strong></td><td>Near Miss Reports</td><td>Số báo cáo suýt tai nạn</td></tr>
                <tr><td>Safety Observations</td><td>Số quan sát an toàn</td></tr>
                <tr><td>Training Hours</td><td>Giờ đào tạo an toàn/người</td></tr>
            </table>
            <div class="tip-box">
                <strong>💡 Xu hướng:</strong> Chuyển từ "Safety-I" (tập trung vào nguyên nhân tai nạn) sang "Safety-II" (tập trung vào tại sao mọi thứ thường hoạt động tốt). Phương pháp: Resilience Engineering.
            </div>
            <h4>Tích hợp ISO 45001 với ISO 9001 & 14001</h4>
            <p>Nhờ HLS chung, việc tích hợp 3 tiêu chuẩn (IMS) giúp tối ưu nguồn lực audit, tài liệu, và quản lý.</p>
        `
    },
    'haccp': {
        icon: '🍽️',
        title: 'HACCP - An Toàn Thực Phẩm',
        category: 'standards',
        level: 'intermediate',
        connections: ['iso-9001', 'manufacturing-quality'],
        simple: `
            <h3>🍽️ HACCP là gì?</h3>
            <p><strong>HACCP (Hazard Analysis and Critical Control Points)</strong> là hệ thống quản lý <em>an toàn thực phẩm</em> dựa trên phòng ngừa.</p>
            <h4>7 Nguyên tắc HACCP</h4>
            <ol>
                <li><strong>Phân tích mối nguy:</strong> Xác định mối nguy sinh học, hóa học, vật lý</li>
                <li><strong>Xác định CCP:</strong> Điểm kiểm soát tới hạn</li>
                <li><strong>Thiết lập giới hạn tới hạn:</strong> Ngưỡng an toàn cho mỗi CCP</li>
                <li><strong>Giám sát CCP:</strong> Theo dõi liên tục</li>
                <li><strong>Hành động khắc phục:</strong> Khi vượt giới hạn</li>
                <li><strong>Xác minh:</strong> Kiểm tra hệ thống hoạt động đúng</li>
                <li><strong>Tài liệu và hồ sơ:</strong> Ghi chép đầy đủ</li>
            </ol>
            <div class="example-box">
                <strong>Ví dụ CCP:</strong> Nấu thịt gà phải đạt ≥ 74°C trong ≥ 15 giây để diệt Salmonella. Đây là Critical Control Point.
            </div>
        `,
        detail: `
            <h3>📊 12 bước xây dựng HACCP</h3>
            <ol>
                <li>Thành lập đội HACCP</li>
                <li>Mô tả sản phẩm</li>
                <li>Xác định mục đích sử dụng</li>
                <li>Xây dựng sơ đồ quy trình</li>
                <li>Xác minh sơ đồ tại hiện trường</li>
                <li><strong>Nguyên tắc 1:</strong> Phân tích mối nguy</li>
                <li><strong>Nguyên tắc 2:</strong> Xác định CCP (dùng cây quyết định)</li>
                <li><strong>Nguyên tắc 3:</strong> Thiết lập giới hạn tới hạn</li>
                <li><strong>Nguyên tắc 4:</strong> Thiết lập hệ thống giám sát</li>
                <li><strong>Nguyên tắc 5:</strong> Thiết lập hành động khắc phục</li>
                <li><strong>Nguyên tắc 6:</strong> Thiết lập thủ tục xác minh</li>
                <li><strong>Nguyên tắc 7:</strong> Thiết lập hệ thống tài liệu</li>
            </ol>
            <h4>3 loại mối nguy thực phẩm</h4>
            <table>
                <tr><th>Loại</th><th>Ví dụ</th></tr>
                <tr><td><strong>Sinh học</strong></td><td>Vi khuẩn (Salmonella, E.coli, Listeria), virus, ký sinh trùng</td></tr>
                <tr><td><strong>Hóa học</strong></td><td>Thuốc trừ sâu, kháng sinh tồn dư, chất phụ gia quá liều, allergens</td></tr>
                <tr><td><strong>Vật lý</strong></td><td>Mảnh kim loại, thủy tinh, xương, đá, nhựa</td></tr>
            </table>
        `,
        advanced: `
            <h3>🎓 HACCP và ISO 22000</h3>
            <h4>ISO 22000:2018</h4>
            <p>ISO 22000 kết hợp HACCP + ISO 9001 thành tiêu chuẩn quản lý an toàn thực phẩm toàn diện:</p>
            <ul>
                <li>Áp dụng cho toàn chuỗi thực phẩm (farm to fork)</li>
                <li>Bao gồm PRP (Prerequisite Programs) + HACCP + QMS</li>
                <li>Sử dụng HLS, tương thích với ISO 9001</li>
            </ul>
            <h4>FSSC 22000</h4>
            <p>Food Safety System Certification 22000 = ISO 22000 + ISO/TS 22002 (PRP) + yêu cầu bổ sung. Được GFSI (Global Food Safety Initiative) công nhận.</p>
            <h4>Các tiêu chuẩn GFSI</h4>
            <table>
                <tr><th>Tiêu chuẩn</th><th>Phạm vi</th></tr>
                <tr><td><strong>FSSC 22000</strong></td><td>Sản xuất thực phẩm, bao bì</td></tr>
                <tr><td><strong>BRC</strong></td><td>Sản xuất thực phẩm (UK)</td></tr>
                <tr><td><strong>SQF</strong></td><td>Sản xuất, phân phối (Mỹ)</td></tr>
                <tr><td><strong>IFS</strong></td><td>Sản xuất thực phẩm (EU)</td></tr>
            </table>
            <div class="warning-box">
                <strong>⚠️ Food Safety Culture:</strong> GFSI ngày càng nhấn mạnh "văn hóa an toàn thực phẩm" - không chỉ có hệ thống, mà mọi người phải thực sự hiểu và cam kết.
            </div>
        `
    },
    'iatf-16949': {
        icon: '🚗',
        title: 'IATF 16949 - Ô Tô',
        category: 'standards',
        level: 'advanced',
        connections: ['iso-9001', 'fmea'],
        simple: `
            <h3>🚗 IATF 16949 là gì?</h3>
            <p><strong>IATF 16949</strong> là tiêu chuẩn quản lý chất lượng dành riêng cho <em>ngành công nghiệp ô tô</em>, dựa trên ISO 9001 với các yêu cầu bổ sung.</p>
            <h4>Tại sao cần IATF 16949?</h4>
            <ul>
                <li>Yêu cầu bắt buộc của hầu hết OEM ô tô (Toyota, Ford, VW, GM...)</li>
                <li>Đảm bảo chất lượng trong chuỗi cung ứng ô tô</li>
                <li>Giảm biến động và lãng phí</li>
                <li>Phòng ngừa lỗi thay vì phát hiện lỗi</li>
            </ul>
            <div class="example-box">
                <strong>Thực tế:</strong> Một chiếc ô tô có 30,000+ linh kiện từ hàng trăm nhà cung cấp. IATF 16949 đảm bảo mỗi linh kiện đều đạt chất lượng.
            </div>
        `,
        detail: `
            <h3>📊 Core Tools</h3>
            <p>IATF 16949 yêu cầu sử dụng 5 công cụ cốt lõi:</p>
            <table>
                <tr><th>Core Tool</th><th>Mục đích</th><th>Khi nào dùng</th></tr>
                <tr><td><strong>APQP</strong></td><td>Advanced Product Quality Planning</td><td>Kế hoạch phát triển sản phẩm mới</td></tr>
                <tr><td><strong>FMEA</strong></td><td>Failure Mode and Effects Analysis</td><td>Phân tích lỗi tiềm ẩn (thiết kế & quy trình)</td></tr>
                <tr><td><strong>MSA</strong></td><td>Measurement Systems Analysis</td><td>Đánh giá hệ thống đo lường</td></tr>
                <tr><td><strong>SPC</strong></td><td>Statistical Process Control</td><td>Kiểm soát quá trình sản xuất</td></tr>
                <tr><td><strong>PPAP</strong></td><td>Production Part Approval Process</td><td>Phê duyệt sản phẩm trước sản xuất hàng loạt</td></tr>
            </table>
            <h4>APQP - 5 giai đoạn</h4>
            <ol>
                <li><strong>Plan & Define:</strong> Xác định yêu cầu khách hàng</li>
                <li><strong>Product Design:</strong> Thiết kế sản phẩm, DFMEA</li>
                <li><strong>Process Design:</strong> Thiết kế quy trình, PFMEA</li>
                <li><strong>Validation:</strong> Xác nhận sản phẩm và quy trình</li>
                <li><strong>Feedback & Corrective Action:</strong> Phản hồi và cải tiến</li>
            </ol>
            <h4>PPAP - 18 yếu tố</h4>
            <p>Hồ sơ PPAP gồm 18 yếu tố (tùy mức độ submission level 1-5) để chứng minh nhà cung cấp có khả năng sản xuất ổn định.</p>
        `,
        advanced: `
            <h3>🎓 IATF 16949 nâng cao</h3>
            <h4>Customer-Specific Requirements (CSR)</h4>
            <p>Ngoài IATF 16949, mỗi OEM có yêu cầu riêng:</p>
            <table>
                <tr><th>OEM</th><th>CSR đặc trưng</th></tr>
                <tr><td><strong>Toyota</strong></td><td>Toyota Supplier Quality Manual, TPS requirements</td></tr>
                <tr><td><strong>Ford</strong></td><td>Ford-specific PPAP, Q1 Award program</td></tr>
                <tr><td><strong>VW Group</strong></td><td>Formel Q, VDA 6.3 Process Audit</td></tr>
                <tr><td><strong>GM</strong></td><td>GM-specific requirements, BIQS</td></tr>
                <tr><td><strong>Hyundai/Kia</strong></td><td>SQ Mark certification</td></tr>
            </table>
            <h4>VDA 6.3 - Process Audit</h4>
            <p>Phương pháp đánh giá quá trình của VDA (Verband der Automobilindustrie - Đức). Dùng để đánh giá nhà cung cấp tiềm năng và hiện tại.</p>
            <h4>Automotive SPICE</h4>
            <p>Tiêu chuẩn đánh giá quy trình phát triển phần mềm ô tô (ngày càng quan trọng với xe tự lái, xe điện).</p>
            <div class="warning-box">
                <strong>⚠️ Xu hướng ngành ô tô:</strong>
                <ul>
                    <li>IATF 16949 sẽ tích hợp thêm yêu cầu cho xe điện (EV) và xe tự lái</li>
                    <li>Cybersecurity (ISO 21434) trở thành yêu cầu bắt buộc</li>
                    <li>Functional Safety (ISO 26262) cho hệ thống điện tử</li>
                    <li>Truy xuất nguồn gốc (traceability) toàn chuỗi cung ứng</li>
                </ul>
            </div>
        `
    }
};
