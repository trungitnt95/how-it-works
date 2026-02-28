// Quality Basics - Core concepts
const qualityBasicsData = {
    'what-is-quality': {
        icon: '📋',
        title: 'Chất Lượng Là Gì',
        category: 'basics',
        level: 'beginner',
        connections: ['quality-principles', 'cost-of-quality'],
        simple: `
            <h3>📋 Chất lượng là gì?</h3>
            <p><strong>Chất lượng</strong> là mức độ mà một sản phẩm hoặc dịch vụ đáp ứng <em>yêu cầu và kỳ vọng</em> của khách hàng.</p>
            <div class="example-box">
                <strong>Ví dụ đơn giản:</strong> Một chiếc điện thoại có chất lượng tốt khi nó hoạt động ổn định, pin bền, màn hình đẹp và giá hợp lý.
            </div>
            <h4>Các góc nhìn về chất lượng</h4>
            <ul>
                <li><strong>Người tiêu dùng:</strong> Sản phẩm tốt, bền, đẹp, giá hợp lý</li>
                <li><strong>Nhà sản xuất:</strong> Đáp ứng đúng thông số kỹ thuật</li>
                <li><strong>Xã hội:</strong> An toàn, thân thiện môi trường</li>
            </ul>
            <div class="tip-box">
                <strong>💡 Ghi nhớ:</strong> Chất lượng không chỉ là "tốt" hay "xấu" - mà là sự phù hợp với mục đích sử dụng.
            </div>
        `,
        detail: `
            <h3>📊 Định nghĩa từ các bậc thầy</h3>
            <p>Các chuyên gia hàng đầu về chất lượng đã đưa ra nhiều định nghĩa khác nhau:</p>
            <table>
                <tr><th>Chuyên gia</th><th>Định nghĩa</th></tr>
                <tr><td><strong>W. Edwards Deming</strong></td><td>Chất lượng là mức độ đồng nhất và tin cậy có thể dự đoán được, với chi phí thấp và phù hợp thị trường</td></tr>
                <tr><td><strong>Joseph Juran</strong></td><td>"Fitness for use" - Sự phù hợp với mục đích sử dụng</td></tr>
                <tr><td><strong>Philip Crosby</strong></td><td>"Conformance to requirements" - Sự phù hợp với yêu cầu. Zero defects là mục tiêu</td></tr>
                <tr><td><strong>Kaoru Ishikawa</strong></td><td>Chất lượng bắt đầu và kết thúc bằng giáo dục</td></tr>
                <tr><td><strong>ISO 9000</strong></td><td>Mức độ mà tập hợp các đặc tính vốn có đáp ứng các yêu cầu</td></tr>
            </table>
            <h4>Fitness for Use (Juran)</h4>
            <ul>
                <li><strong>Quality of Design:</strong> Nghiên cứu thị trường, thiết kế sản phẩm, thông số kỹ thuật</li>
                <li><strong>Quality of Conformance:</strong> Công nghệ, nhân lực, quản lý</li>
                <li><strong>Availability:</strong> Độ tin cậy, khả năng bảo trì, hỗ trợ hậu mãi</li>
                <li><strong>Safety:</strong> An toàn cho người sử dụng</li>
                <li><strong>Field Use:</strong> Bao bì, vận chuyển, lưu kho, sử dụng thực tế</li>
            </ul>
            <div class="example-box">
                <strong>Ví dụ:</strong> Toyota không chỉ sản xuất xe chạy tốt (conformance) mà còn đảm bảo xe phù hợp với nhu cầu khách hàng từng thị trường (fitness for use).
            </div>
        `,
        advanced: `
            <h3>🎓 Sự tiến hóa của quản lý chất lượng</h3>
            <h4>4 giai đoạn phát triển</h4>
            <table>
                <tr><th>Giai đoạn</th><th>Thời kỳ</th><th>Đặc điểm</th></tr>
                <tr><td><strong>1. Kiểm tra (Inspection)</strong></td><td>~1920s</td><td>Kiểm tra sản phẩm cuối cùng, loại bỏ phế phẩm</td></tr>
                <tr><td><strong>2. Kiểm soát CL (QC)</strong></td><td>~1940s</td><td>Kiểm soát quá trình bằng thống kê (SPC), lấy mẫu</td></tr>
                <tr><td><strong>3. Đảm bảo CL (QA)</strong></td><td>~1960s</td><td>Hệ thống quản lý, phòng ngừa, ISO 9001</td></tr>
                <tr><td><strong>4. TQM</strong></td><td>~1980s+</td><td>Toàn diện, liên tục cải tiến, mọi người tham gia</td></tr>
            </table>
            <h4>Khách hàng nội bộ vs bên ngoài</h4>
            <p>Trong chuỗi giá trị, mỗi công đoạn tiếp theo chính là "khách hàng" của công đoạn trước. Khái niệm <strong>khách hàng nội bộ</strong> giúp mỗi bộ phận nhận thức trách nhiệm chất lượng.</p>
            <div class="warning-box">
                <strong>⚠️ Lưu ý:</strong> Chất lượng không phải là sự hoàn hảo tuyệt đối - mà là sự cân bằng giữa yêu cầu khách hàng, khả năng kỹ thuật, và chi phí.
            </div>
            <h4>Mô hình Kano</h4>
            <ul>
                <li><strong>Must-be (Cơ bản):</strong> Không có = khách hàng rất không hài lòng. Có = bình thường</li>
                <li><strong>One-dimensional (Hiệu suất):</strong> Càng tốt = càng hài lòng</li>
                <li><strong>Attractive (Hấp dẫn):</strong> Không có = không sao. Có = rất hài lòng (vượt kỳ vọng)</li>
                <li><strong>Indifferent:</strong> Không ảnh hưởng sự hài lòng</li>
                <li><strong>Reverse:</strong> Có thể gây khó chịu cho một số khách hàng</li>
            </ul>
        `
    },
    'quality-principles': {
        icon: '⚖️',
        title: '7 Nguyên Tắc Quản Lý CL',
        category: 'basics',
        level: 'beginner',
        connections: ['what-is-quality', 'tqm'],
        simple: `
            <h3>⚖️ 7 Nguyên tắc quản lý chất lượng</h3>
            <p>ISO 9001 dựa trên <strong>7 nguyên tắc</strong> cốt lõi giúp tổ chức cải thiện hiệu quả:</p>
            <ol>
                <li><strong>🎯 Hướng vào khách hàng</strong> - Hiểu và đáp ứng nhu cầu khách hàng</li>
                <li><strong>👑 Sự lãnh đạo</strong> - Lãnh đạo tạo ra tầm nhìn và định hướng</li>
                <li><strong>👥 Sự tham gia của mọi người</strong> - Mọi cấp đều đóng góp</li>
                <li><strong>🔄 Tiếp cận theo quá trình</strong> - Quản lý hoạt động như các quá trình</li>
                <li><strong>📈 Cải tiến</strong> - Cải tiến liên tục là mục tiêu thường trực</li>
                <li><strong>📊 Ra QĐ dựa trên bằng chứng</strong> - Dùng dữ liệu, không dùng cảm tính</li>
                <li><strong>🤝 Quản lý quan hệ</strong> - Xây dựng quan hệ tốt với các bên liên quan</li>
            </ol>
            <div class="tip-box">
                <strong>💡 Mẹo:</strong> Hãy nhớ: Customer - Leadership - Engagement - Process - Improvement - Evidence - Relationship
            </div>
        `,
        detail: `
            <h3>📊 Chi tiết 7 nguyên tắc</h3>
            <h4>1. Hướng vào khách hàng (Customer Focus)</h4>
            <p>Thành công bền vững đạt được khi tổ chức thu hút và giữ được niềm tin của khách hàng. Cần hiểu cả nhu cầu hiện tại lẫn tương lai.</p>
            <h4>2. Sự lãnh đạo (Leadership)</h4>
            <p>Lãnh đạo ở mọi cấp thiết lập sự thống nhất về mục đích và định hướng, tạo điều kiện để mọi người cùng đạt mục tiêu chất lượng.</p>
            <h4>3. Sự tham gia của mọi người (Engagement of People)</h4>
            <p>Năng lực, sự trao quyền và sự tham gia của mọi người ở mọi cấp là thiết yếu để nâng cao năng lực tổ chức trong việc tạo ra giá trị.</p>
            <h4>4. Tiếp cận theo quá trình (Process Approach)</h4>
            <p>Kết quả nhất quán và dự đoán được đạt hiệu quả hơn khi các hoạt động được hiểu và quản lý như các quá trình liên quan.</p>
            <h4>5. Cải tiến (Improvement)</h4>
            <p>Các tổ chức thành công luôn tập trung vào cải tiến liên tục. Cải tiến giúp duy trì hiệu suất, phản ứng với thay đổi và tạo cơ hội mới.</p>
            <h4>6. Ra quyết định dựa trên bằng chứng</h4>
            <p>Quyết định dựa trên phân tích và đánh giá dữ liệu có nhiều khả năng tạo ra kết quả mong muốn hơn.</p>
            <h4>7. Quản lý quan hệ (Relationship Management)</h4>
            <p>Quản lý mối quan hệ với các bên quan tâm (nhà cung cấp, đối tác) để tối ưu hóa tác động lên hiệu suất.</p>
        `,
        advanced: `
            <h3>🎓 Áp dụng thực tế 7 nguyên tắc</h3>
            <h4>Từ nguyên tắc đến hành động</h4>
            <table>
                <tr><th>Nguyên tắc</th><th>Hành động cụ thể</th><th>KPI đo lường</th></tr>
                <tr><td>Customer Focus</td><td>Khảo sát hài lòng, phân tích khiếu nại, VOC</td><td>NPS, CSAT, tỷ lệ khiếu nại</td></tr>
                <tr><td>Leadership</td><td>Chính sách CL, mục tiêu CL, đánh giá quản lý</td><td>% đạt mục tiêu CL</td></tr>
                <tr><td>Engagement</td><td>Đào tạo, trao quyền, nhóm cải tiến</td><td>Số đề xuất cải tiến/người</td></tr>
                <tr><td>Process</td><td>Sơ đồ quy trình, KPI quá trình, SIPOC</td><td>Hiệu suất quá trình (OEE)</td></tr>
                <tr><td>Improvement</td><td>PDCA, Kaizen, dự án cải tiến</td><td>Số dự án cải tiến hoàn thành</td></tr>
                <tr><td>Evidence-based</td><td>Thu thập dữ liệu, phân tích thống kê</td><td>% QĐ dựa trên dữ liệu</td></tr>
                <tr><td>Relationship</td><td>Đánh giá NCC, hợp tác chiến lược</td><td>Chỉ số hiệu suất NCC</td></tr>
            </table>
            <div class="example-box">
                <strong>Case study:</strong> Toyota Production System (TPS) là ví dụ điển hình áp dụng cả 7 nguyên tắc: từ Genchi Genbutsu (evidence-based), Kaizen (improvement), đến quan hệ lâu dài với nhà cung cấp (relationship management).
            </div>
            <h4>Mối liên hệ giữa các nguyên tắc</h4>
            <p>7 nguyên tắc không tồn tại độc lập mà tương tác với nhau. <strong>Leadership</strong> là nền tảng cho tất cả. <strong>Customer Focus</strong> là mục đích cuối cùng. Các nguyên tắc còn lại là phương tiện để đạt mục đích.</p>
        `
    },
    'pdca-cycle': {
        icon: '🔄',
        title: 'Chu Trình PDCA',
        category: 'basics',
        level: 'beginner',
        connections: ['kaizen', 'six-sigma'],
        simple: `
            <h3>🔄 Chu trình PDCA</h3>
            <p><strong>PDCA</strong> (Plan-Do-Check-Act) là chu trình cải tiến liên tục do <em>W. Edwards Deming</em> phổ biến.</p>
            <h4>4 bước của PDCA</h4>
            <ol>
                <li><strong>Plan (Lập kế hoạch):</strong> Xác định vấn đề, phân tích nguyên nhân, lập kế hoạch cải tiến</li>
                <li><strong>Do (Thực hiện):</strong> Triển khai kế hoạch ở quy mô nhỏ/thử nghiệm</li>
                <li><strong>Check (Kiểm tra):</strong> So sánh kết quả với mục tiêu, đánh giá hiệu quả</li>
                <li><strong>Act (Hành động):</strong> Chuẩn hóa nếu thành công, hoặc điều chỉnh và lặp lại</li>
            </ol>
            <div class="example-box">
                <strong>Ví dụ:</strong> Nhà hàng muốn giảm thời gian phục vụ: Plan (phân tích quy trình), Do (thử menu đơn giản hơn), Check (đo thời gian), Act (áp dụng toàn bộ hoặc điều chỉnh).
            </div>
        `,
        detail: `
            <h3>📊 PDCA chi tiết</h3>
            <h4>Plan - Lập kế hoạch (40% thời gian)</h4>
            <ul>
                <li>Xác định rõ vấn đề cần giải quyết</li>
                <li>Thu thập dữ liệu hiện trạng</li>
                <li>Phân tích nguyên nhân gốc (5 Why, Fishbone)</li>
                <li>Đặt mục tiêu SMART</li>
                <li>Lập kế hoạch hành động (Who, What, When, Where, How)</li>
            </ul>
            <h4>Do - Thực hiện (20% thời gian)</h4>
            <ul>
                <li>Triển khai thí điểm ở phạm vi nhỏ</li>
                <li>Đào tạo nhân viên liên quan</li>
                <li>Ghi chép dữ liệu trong quá trình thực hiện</li>
                <li>Xử lý các vấn đề phát sinh</li>
            </ul>
            <h4>Check - Kiểm tra (20% thời gian)</h4>
            <ul>
                <li>So sánh kết quả thực tế với mục tiêu</li>
                <li>Phân tích dữ liệu thu thập được</li>
                <li>Xác định bài học kinh nghiệm</li>
                <li>Đánh giá hiệu quả của giải pháp</li>
            </ul>
            <h4>Act - Hành động (20% thời gian)</h4>
            <ul>
                <li><strong>Nếu thành công:</strong> Chuẩn hóa, mở rộng áp dụng, cập nhật tài liệu</li>
                <li><strong>Nếu chưa đạt:</strong> Phân tích nguyên nhân, điều chỉnh kế hoạch, bắt đầu vòng PDCA mới</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 PDCA nâng cao</h3>
            <h4>PDCA vs PDSA</h4>
            <p>Deming thực tế đề xuất <strong>PDSA</strong> (Plan-Do-Study-Act), nhấn mạnh việc "Study" (nghiên cứu) thay vì chỉ "Check" (kiểm tra). Study đòi hỏi phân tích sâu hơn, hiểu tại sao kết quả xảy ra.</p>
            <h4>PDCA trong ISO 9001:2015</h4>
            <table>
                <tr><th>PDCA</th><th>Điều khoản ISO 9001</th></tr>
                <tr><td>Plan</td><td>4. Bối cảnh, 5. Lãnh đạo, 6. Hoạch định</td></tr>
                <tr><td>Do</td><td>7. Hỗ trợ, 8. Điều hành</td></tr>
                <tr><td>Check</td><td>9. Đánh giá kết quả</td></tr>
                <tr><td>Act</td><td>10. Cải tiến</td></tr>
            </table>
            <h4>PDCA lồng nhau (Nested PDCA)</h4>
            <p>Trong thực tế, mỗi bước của PDCA lớn có thể chứa các vòng PDCA nhỏ hơn. Ví dụ, trong bước Plan, bạn có thể cần một vòng PDCA nhỏ để thu thập và xác minh dữ liệu.</p>
            <div class="warning-box">
                <strong>⚠️ Sai lầm phổ biến:</strong>
                <ul>
                    <li>Bỏ qua bước Plan, nhảy vào Do ngay → thiếu phân tích</li>
                    <li>Không ghi chép dữ liệu trong bước Do → không có gì để Check</li>
                    <li>Dừng lại sau 1 vòng → mất tính liên tục</li>
                    <li>Act mà không chuẩn hóa → lặp lại lỗi cũ</li>
                </ul>
            </div>
        `
    },
    'cost-of-quality': {
        icon: '💰',
        title: 'Chi Phí Chất Lượng',
        category: 'basics',
        level: 'intermediate',
        connections: ['what-is-quality', 'seven-tools'],
        simple: `
            <h3>💰 Chi phí chất lượng (COQ)</h3>
            <p><strong>Chi phí chất lượng</strong> là tổng chi phí phát sinh để đảm bảo chất lượng sản phẩm/dịch vụ, bao gồm cả chi phí khi chất lượng kém.</p>
            <h4>4 loại chi phí chất lượng</h4>
            <ul>
                <li><strong>🛡️ Chi phí phòng ngừa:</strong> Đào tạo, lập kế hoạch CL, thiết kế quy trình</li>
                <li><strong>🔍 Chi phí đánh giá:</strong> Kiểm tra, kiểm định, audit, thử nghiệm</li>
                <li><strong>❌ Chi phí lỗi nội bộ:</strong> Phế phẩm, làm lại, dừng máy, phân loại lại</li>
                <li><strong>💔 Chi phí lỗi bên ngoài:</strong> Bảo hành, thu hồi, khiếu nại, mất khách hàng</li>
            </ul>
            <div class="tip-box">
                <strong>💡 Quy tắc 1-10-100:</strong> Chi 1 đồng phòng ngừa = tiết kiệm 10 đồng đánh giá = tiết kiệm 100 đồng sửa lỗi.
            </div>
        `,
        detail: `
            <h3>📊 Phân tích chi phí chất lượng</h3>
            <h4>Chi phí phòng ngừa (Prevention Costs)</h4>
            <ul>
                <li>Đào tạo nhân viên về chất lượng</li>
                <li>Thiết kế quy trình và hệ thống QMS</li>
                <li>Đánh giá và phát triển nhà cung cấp</li>
                <li>FMEA - Phân tích lỗi tiềm ẩn</li>
                <li>Bảo trì phòng ngừa thiết bị</li>
            </ul>
            <h4>Chi phí đánh giá (Appraisal Costs)</h4>
            <ul>
                <li>Kiểm tra nguyên vật liệu đầu vào</li>
                <li>Kiểm tra trong quá trình sản xuất</li>
                <li>Kiểm tra sản phẩm cuối cùng</li>
                <li>Hiệu chuẩn thiết bị đo lường</li>
                <li>Đánh giá nội bộ (internal audit)</li>
            </ul>
            <h4>Chi phí lỗi nội bộ (Internal Failure)</h4>
            <ul>
                <li>Phế phẩm (scrap) không thể sửa chữa</li>
                <li>Làm lại (rework) sản phẩm lỗi</li>
                <li>Phân tích nguyên nhân lỗi</li>
                <li>Thời gian dừng máy do lỗi</li>
                <li>Kiểm tra lại sản phẩm đã sửa</li>
            </ul>
            <h4>Chi phí lỗi bên ngoài (External Failure)</h4>
            <ul>
                <li>Xử lý khiếu nại khách hàng</li>
                <li>Bảo hành và sửa chữa</li>
                <li>Thu hồi sản phẩm (product recall)</li>
                <li>Mất uy tín thương hiệu</li>
                <li>Kiện tụng và bồi thường</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 Tối ưu chi phí chất lượng</h3>
            <h4>Mô hình COQ truyền thống vs hiện đại</h4>
            <table>
                <tr><th>Mô hình</th><th>Quan điểm</th></tr>
                <tr><td><strong>Truyền thống</strong></td><td>Tồn tại điểm tối ưu - tăng phòng ngừa đến một mức rồi dừng</td></tr>
                <tr><td><strong>Hiện đại (Zero Defect)</strong></td><td>Tăng phòng ngừa luôn có lợi, vì chi phí lỗi giảm nhanh hơn</td></tr>
            </table>
            <h4>Tỷ lệ COQ điển hình</h4>
            <p>Tổng COQ thường chiếm <strong>15-25%</strong> doanh thu. Công ty xuất sắc giảm xuống <strong>2-5%</strong>.</p>
            <table>
                <tr><th>Loại chi phí</th><th>Công ty yếu</th><th>Công ty tốt</th></tr>
                <tr><td>Phòng ngừa</td><td>5%</td><td>30%</td></tr>
                <tr><td>Đánh giá</td><td>25%</td><td>30%</td></tr>
                <tr><td>Lỗi nội bộ</td><td>40%</td><td>30%</td></tr>
                <tr><td>Lỗi bên ngoài</td><td>30%</td><td>10%</td></tr>
            </table>
            <div class="example-box">
                <strong>Ví dụ thực tế:</strong> Samsung Galaxy Note 7 (2016) - chi phí thu hồi ước tính 5.3 tỷ USD. Nếu đầu tư thêm vài triệu USD vào kiểm tra pin, đã tránh được thảm họa.
            </div>
            <h4>Phương pháp đo lường COQ</h4>
            <ul>
                <li><strong>Bước 1:</strong> Xác định và phân loại tất cả chi phí liên quan đến chất lượng</li>
                <li><strong>Bước 2:</strong> Thu thập dữ liệu chi phí (kế toán + ước lượng)</li>
                <li><strong>Bước 3:</strong> Tính tỷ lệ COQ/doanh thu</li>
                <li><strong>Bước 4:</strong> Phân tích Pareto để xác định chi phí lớn nhất</li>
                <li><strong>Bước 5:</strong> Lập kế hoạch dịch chuyển từ "lỗi" sang "phòng ngừa"</li>
            </ul>
        `
    }
};
