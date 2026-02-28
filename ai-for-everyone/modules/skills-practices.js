// Skills & Practices - Human skills, best practices, guides
const skillsPracticesData = {
    'prompt-engineering-practice': {
        icon: '🎯',
        title: 'Prompt Engineering Thực Hành',
        category: 'skills',
        level: 'beginner',
        connections: ['basic-prompting', 'role-prompting', 'communication-skills'],
        simple: `
            <h3>🎯 Thực hành Prompt Engineering</h3>
            <p>Prompt Engineering không chỉ là kỹ thuật mà là <strong>kỹ năng giao tiếp</strong> với AI. Càng practice nhiều, kết quả càng tốt.</p>
            <h4>5 nguyên tắc vàng</h4>
            <ul>
                <li>🎯 <strong>Cụ thể:</strong> Nói rõ muốn gì, format nào, dài bao nhiêu</li>
                <li>📝 <strong>Context:</strong> Cung cấp đủ bối cảnh</li>
                <li>🔄 <strong>Iterate:</strong> Tinh chỉnh prompt qua nhiều lần</li>
                <li>📋 <strong>Template:</strong> Lưu prompt hay để dùng lại</li>
                <li>🧪 <strong>Test:</strong> Thử cùng prompt trên nhiều AI</li>
            </ul>
        `,
        detail: `
            <h3>📊 Prompt Patterns Thực Tế</h3>
            <h4>Pattern 1: Task Decomposition</h4>
            <div class="example-box">
                "Tôi cần [mục tiêu lớn]. Hãy:<br>
                1. Chia thành các bước nhỏ<br>
                2. Thực hiện từng bước<br>
                3. Giải thích mỗi bước"
            </div>
            <h4>Pattern 2: Output Format Control</h4>
            <div class="example-box">
                "Trả lời theo format:<br>
                - Tóm tắt (2 câu)<br>
                - Chi tiết (bullet points)<br>
                - Ví dụ thực tế<br>
                - Action items"
            </div>
            <h4>Pattern 3: Expert Consultation</h4>
            <div class="example-box">
                "Hãy phân tích [vấn đề] từ 3 góc nhìn:<br>
                1. Chuyên gia kỹ thuật<br>
                2. Người dùng cuối<br>
                3. Business owner"
            </div>
            <h4>Bài tập thực hành</h4>
            <ul>
                <li>Viết 10 prompts khác nhau cho cùng 1 task</li>
                <li>So sánh kết quả và chọn prompt tốt nhất</li>
                <li>Tạo prompt library cá nhân</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 Prompt Engineering Framework</h3>
            <h4>RISEN Framework</h4>
            <ul>
                <li><strong>R</strong>ole: Vai trò AI đóng</li>
                <li><strong>I</strong>nstructions: Nhiệm vụ cụ thể</li>
                <li><strong>S</strong>teps: Các bước thực hiện</li>
                <li><strong>E</strong>xpectation: Kỳ vọng output</li>
                <li><strong>N</strong>arrowing: Giới hạn, ràng buộc</li>
            </ul>
            <h4>Meta-Prompting</h4>
            <p>Dùng AI để cải thiện prompt của bạn:</p>
            <div class="example-box">
                "Đây là prompt của tôi: [prompt]. Hãy phân tích và đề xuất phiên bản tốt hơn với lý do."
            </div>
            <h4>Prompt Testing Workflow</h4>
            <ol>
                <li>Viết prompt v1</li>
                <li>Test trên 3 AI khác nhau</li>
                <li>Đánh giá output (1-10)</li>
                <li>Cải thiện dựa trên kết quả</li>
                <li>Lặp lại đến khi đạt ≥8/10</li>
            </ol>
        `
    },
    'communication-skills': {
        icon: '🗣️',
        title: 'Kỹ Năng Giao Tiếp Với AI',
        category: 'skills',
        level: 'beginner',
        connections: ['prompt-engineering-practice', 'critical-thinking', 'basic-prompting'],
        simple: `
            <h3>🗣️ Giao tiếp hiệu quả với AI</h3>
            <p>AI hiểu bạn tốt hơn khi bạn <strong>giao tiếp rõ ràng</strong>. Kỹ năng này cũng cải thiện giao tiếp với con người!</p>
            <h4>Nguyên tắc giao tiếp</h4>
            <ul>
                <li>📌 <strong>Rõ ràng:</strong> Tránh mơ hồ, nói đúng ý</li>
                <li>🎯 <strong>Mục tiêu:</strong> Biết mình muốn gì trước khi hỏi</li>
                <li>📏 <strong>Phạm vi:</strong> Giới hạn rõ ràng</li>
                <li>🔄 <strong>Phản hồi:</strong> Nói AI biết cái gì tốt, cái gì cần sửa</li>
            </ul>
            <div class="tip-box">
                💡 Nếu AI không hiểu bạn, có thể bạn cần diễn đạt rõ hơn - kỹ năng này hữu ích cả trong cuộc sống.
            </div>
        `,
        detail: `
            <h3>📊 Kỹ thuật giao tiếp nâng cao</h3>
            <h4>Feedback Loop với AI</h4>
            <ol>
                <li><strong>Hỏi:</strong> Yêu cầu cụ thể</li>
                <li><strong>Đánh giá:</strong> Xem output có đúng ý không</li>
                <li><strong>Phản hồi:</strong> "Tốt nhưng cần thêm X" hoặc "Sai phần Y"</li>
                <li><strong>Lặp:</strong> AI điều chỉnh dựa trên feedback</li>
            </ol>
            <h4>Cách nói "Không" với AI</h4>
            <div class="example-box">
                ❌ "Không phải vậy"<br>
                ✅ "Không đúng ý tôi. Tôi muốn [mô tả chính xác]. Cụ thể là [ví dụ]."
            </div>
            <h4>Kỹ thuật Rubber Duck</h4>
            <p>Giải thích vấn đề cho AI như giải thích cho người mới - quá trình này giúp bạn hiểu vấn đề rõ hơn.</p>
        `,
        advanced: `
            <h3>🎓 AI-Human Collaboration Patterns</h3>
            <h4>Pair Programming với AI</h4>
            <ul>
                <li>Bạn là driver (quyết định), AI là navigator (gợi ý)</li>
                <li>Bạn mô tả ý tưởng, AI implement</li>
                <li>Bạn review, AI sửa</li>
            </ul>
            <h4>Socratic Method với AI</h4>
            <p>Thay vì hỏi trực tiếp, yêu cầu AI dẫn dắt bạn đến câu trả lời:</p>
            <div class="example-box">
                "Đừng cho tôi câu trả lời trực tiếp. Hãy hỏi tôi các câu hỏi để giúp tôi tự tìm ra giải pháp cho [vấn đề]."
            </div>
            <h4>AI as Thinking Partner</h4>
            <p>Dùng AI như đối tác suy nghĩ:</p>
            <ul>
                <li>Brainstorming ý tưởng mới</li>
                <li>Devil's advocate - phản biện ý kiến</li>
                <li>Risk analysis - phân tích rủi ro</li>
                <li>Second opinion - ý kiến thứ 2</li>
            </ul>
        `
    },
    'critical-thinking': {
        icon: '🧠',
        title: 'Tư Duy Phản Biện',
        category: 'skills',
        level: 'beginner',
        connections: ['fact-checking', 'communication-skills', 'ai-limitations'],
        simple: `
            <h3>🧠 Tư duy phản biện trong thời AI</h3>
            <p>AI càng mạnh, <strong>tư duy phản biện</strong> của con người càng quan trọng. Đây là kỹ năng AI không thể thay thế.</p>
            <h4>Kỹ năng cần có</h4>
            <ul>
                <li>❓ <strong>Đặt câu hỏi:</strong> Không chấp nhận mọi thứ AI nói</li>
                <li>🔍 <strong>Kiểm chứng:</strong> Verify thông tin quan trọng</li>
                <li>⚖️ <strong>Đánh giá:</strong> AI output có hợp lý không?</li>
                <li>🎯 <strong>Phán đoán:</strong> Biết khi nào tin AI, khi nào không</li>
            </ul>
        `,
        detail: `
            <h3>📊 Framework tư duy phản biện</h3>
            <h4>CRAAP Test cho AI Output</h4>
            <table>
                <tr><th>Tiêu chí</th><th>Câu hỏi</th></tr>
                <tr><td><strong>C</strong>urrency</td><td>Thông tin có cập nhật không?</td></tr>
                <tr><td><strong>R</strong>elevance</td><td>Có liên quan đến câu hỏi không?</td></tr>
                <tr><td><strong>A</strong>uthority</td><td>AI có trích dẫn nguồn uy tín không?</td></tr>
                <tr><td><strong>A</strong>ccuracy</td><td>Thông tin có chính xác không?</td></tr>
                <tr><td><strong>P</strong>urpose</td><td>Output có phục vụ mục đích không?</td></tr>
            </table>
            <h4>Red Flags khi dùng AI</h4>
            <ul>
                <li>🚩 AI quá tự tin về số liệu cụ thể</li>
                <li>🚩 Trích dẫn link/nguồn không verify được</li>
                <li>🚩 Kết quả quá "hoàn hảo" - có thể là hallucination</li>
                <li>🚩 AI đồng ý với mọi thứ bạn nói (sycophancy)</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 Tư duy phản biện nâng cao</h3>
            <h4>Cognitive Biases khi dùng AI</h4>
            <ul>
                <li><strong>Automation bias:</strong> Tin AI vì nó là máy tính</li>
                <li><strong>Anchoring:</strong> Bị ảnh hưởng bởi câu trả lời đầu tiên</li>
                <li><strong>Confirmation bias:</strong> Chỉ chấp nhận output phù hợp ý mình</li>
                <li><strong>Authority bias:</strong> Tin AI vì nó "nghe có vẻ chuyên gia"</li>
            </ul>
            <h4>Adversarial Thinking</h4>
            <p>Chủ động tìm lỗi trong output AI:</p>
            <div class="example-box">
                "Phân tích câu trả lời trên. Liệt kê:<br>
                1. Những điểm có thể sai<br>
                2. Những giả định ngầm<br>
                3. Những thông tin cần verify<br>
                4. Những góc nhìn bị bỏ qua"
            </div>
        `
    },
    'future-skills': {
        icon: '🚀',
        title: 'Kỹ Năng Tương Lai',
        category: 'skills',
        level: 'intermediate',
        connections: ['critical-thinking', 'ai-agents', 'ai-workflow'],
        simple: `
            <h3>🚀 Kỹ năng con người cần trong thời AI</h3>
            <p>AI sẽ thay đổi công việc - nhưng <strong>không thay thế mọi thứ</strong>. Một số kỹ năng sẽ càng có giá trị hơn.</p>
            <h4>Kỹ năng AI KHÔNG thay thế được</h4>
            <ul>
                <li>🎨 <strong>Sáng tạo:</strong> Ý tưởng mới, vision</li>
                <li>❤️ <strong>Empathy:</strong> Hiểu cảm xúc con người</li>
                <li>🤝 <strong>Leadership:</strong> Dẫn dắt, truyền cảm hứng</li>
                <li>🧠 <strong>Phán đoán:</strong> Quyết định trong bất định</li>
                <li>🔧 <strong>Adaptability:</strong> Thích nghi thay đổi</li>
            </ul>
        `,
        detail: `
            <h3>📊 Kỹ năng cần phát triển</h3>
            <h4>Kỹ năng "AI-Proof"</h4>
            <table>
                <tr><th>Kỹ năng</th><th>Tại sao quan trọng</th><th>Cách rèn luyện</th></tr>
                <tr><td>AI Literacy</td><td>Hiểu và dùng AI hiệu quả</td><td>Thực hành hàng ngày</td></tr>
                <tr><td>Problem Framing</td><td>Biết đặt vấn đề đúng</td><td>Case studies, projects</td></tr>
                <tr><td>Data Literacy</td><td>Hiểu và diễn giải dữ liệu</td><td>Analytics, statistics</td></tr>
                <tr><td>Systems Thinking</td><td>Nhìn bức tranh toàn cảnh</td><td>Đọc, phân tích hệ thống</td></tr>
                <tr><td>Ethical Reasoning</td><td>Đánh giá đạo đức AI</td><td>Thảo luận, case studies</td></tr>
            </table>
            <h4>Mô hình "Human + AI"</h4>
            <div class="formula-box">
                Human (Direction + Judgment + Creativity) + AI (Speed + Scale + Knowledge) = Superhuman Output
            </div>
        `,
        advanced: `
            <h3>🎓 Tương lai công việc với AI</h3>
            <h4>Các vai trò mới xuất hiện</h4>
            <ul>
                <li><strong>AI Trainer:</strong> Huấn luyện và fine-tune AI models</li>
                <li><strong>Prompt Engineer:</strong> Chuyên gia viết prompts</li>
                <li><strong>AI Ethics Officer:</strong> Đảm bảo AI dùng đúng đạo đức</li>
                <li><strong>AI Product Manager:</strong> Quản lý sản phẩm AI</li>
                <li><strong>Human-AI Interaction Designer:</strong> Thiết kế giao tiếp người-AI</li>
            </ul>
            <h4>Chiến lược phát triển sự nghiệp</h4>
            <ol>
                <li><strong>Ngắn hạn (1-2 năm):</strong> Master AI tools trong lĩnh vực của bạn</li>
                <li><strong>Trung hạn (3-5 năm):</strong> Trở thành "AI-augmented expert"</li>
                <li><strong>Dài hạn (5+ năm):</strong> Focus vào skills AI không thể thay thế</li>
            </ol>
            <div class="tip-box">
                💡 Đừng sợ AI thay thế - hãy lo về việc người biết dùng AI thay thế người không biết.
            </div>
        `
    },
    'developer-best-practices': {
        icon: '⚡',
        title: 'Best Practices Cho Developer',
        category: 'skills',
        level: 'intermediate',
        connections: ['copilot', 'cursor-ai', 'ai-code-review', 'prompt-engineering-practice'],
        simple: `
            <h3>⚡ Developer + AI Best Practices</h3>
            <p>Dùng AI coding tools đúng cách giúp <strong>tăng tốc 2-5x</strong> mà không giảm chất lượng.</p>
            <h4>Nguyên tắc cơ bản</h4>
            <ul>
                <li>✅ <strong>Review mọi code AI tạo:</strong> Đừng accept mù quáng</li>
                <li>✅ <strong>Viết tests:</strong> Đặc biệt cho AI-generated code</li>
                <li>✅ <strong>Hiểu code:</strong> Không dùng code bạn không hiểu</li>
                <li>✅ <strong>Iterate:</strong> Prompt lại nếu code chưa tốt</li>
                <li>❌ <strong>Copy-paste:</strong> Không paste mà không đọc</li>
            </ul>
        `,
        detail: `
            <h3>📊 AI-Assisted Development Workflow</h3>
            <h4>Workflow hiệu quả</h4>
            <ol>
                <li><strong>Plan:</strong> Dùng AI brainstorm giải pháp</li>
                <li><strong>Scaffold:</strong> AI tạo boilerplate code</li>
                <li><strong>Implement:</strong> Code cùng AI (pair programming)</li>
                <li><strong>Test:</strong> AI viết tests, bạn review</li>
                <li><strong>Review:</strong> AI review code, bạn quyết định</li>
                <li><strong>Refactor:</strong> AI suggest improvements</li>
            </ol>
            <h4>Khi nào AI code tốt?</h4>
            <table>
                <tr><th>Tốt cho</th><th>Cần cẩn thận</th></tr>
                <tr><td>Boilerplate code</td><td>Business logic phức tạp</td></tr>
                <tr><td>Unit tests</td><td>Security-sensitive code</td></tr>
                <tr><td>Documentation</td><td>Performance-critical code</td></tr>
                <tr><td>Regex, queries</td><td>Algorithm design</td></tr>
                <tr><td>Refactoring</td><td>Architecture decisions</td></tr>
            </table>
            <div class="warning-box">
                ⚠️ AI code có thể chứa lỗ hổng bảo mật. Luôn scan security cho AI-generated code.
            </div>
        `,
        advanced: `
            <h3>🎓 Advanced AI-Powered Development</h3>
            <h4>Coding Agent Workflow</h4>
            <p>Dùng AI agents để tự động hóa phần lớn development:</p>
            <div class="example-box">
                1. Viết issue/requirement rõ ràng<br>
                2. AI agent phân tích codebase<br>
                3. AI agent tạo plan<br>
                4. AI agent implement changes<br>
                5. AI agent chạy tests<br>
                6. Developer review và merge
            </div>
            <h4>Prompt Patterns cho Code</h4>
            <ul>
                <li><strong>Explain then code:</strong> "Giải thích approach trước, sau đó implement"</li>
                <li><strong>Test-first:</strong> "Viết tests trước, sau đó viết code pass tests"</li>
                <li><strong>Incremental:</strong> "Implement từng function, tôi sẽ review từng cái"</li>
                <li><strong>Refactor:</strong> "Giữ behavior, cải thiện code quality"</li>
            </ul>
            <h4>AI Tool Stack cho Developer</h4>
            <table>
                <tr><th>Task</th><th>Tool</th><th>Tip</th></tr>
                <tr><td>Coding</td><td>Cursor / Copilot</td><td>Dùng .cursorrules / instructions</td></tr>
                <tr><td>Code Review</td><td>CodeRabbit / Copilot</td><td>Integrate vào CI/CD</td></tr>
                <tr><td>Documentation</td><td>Claude / ChatGPT</td><td>Upload codebase cho context</td></tr>
                <tr><td>Testing</td><td>Copilot / Cursor</td><td>"Viết edge case tests"</td></tr>
                <tr><td>Debugging</td><td>Claude / ChatGPT</td><td>Paste error + context</td></tr>
            </table>
        `
    },
    'ai-ethics-guide': {
        icon: '⚖️',
        title: 'AI Ethics & Trách Nhiệm',
        category: 'skills',
        level: 'intermediate',
        connections: ['critical-thinking', 'ai-limitations', 'future-skills'],
        simple: `
            <h3>⚖️ Dùng AI có trách nhiệm</h3>
            <p>AI mạnh mẽ nhưng cần dùng <strong>có đạo đức</strong>. Hiểu ranh giới giúp bạn dùng AI tốt hơn.</p>
            <h4>Nguyên tắc cơ bản</h4>
            <ul>
                <li>📝 <strong>Minh bạch:</strong> Nói rõ khi nào dùng AI</li>
                <li>✅ <strong>Kiểm tra:</strong> Verify output trước khi dùng</li>
                <li>🔒 <strong>Bảo mật:</strong> Không share data nhạy cảm với AI</li>
                <li>⚖️ <strong>Công bằng:</strong> Nhận biết và giảm bias</li>
            </ul>
        `,
        detail: `
            <h3>📊 Hướng dẫn Ethics chi tiết</h3>
            <h4>Dữ liệu & Privacy</h4>
            <ul>
                <li>❌ Không paste mật khẩu, API keys vào AI chat</li>
                <li>❌ Không share thông tin cá nhân khách hàng</li>
                <li>⚠️ Cẩn thận với code proprietary</li>
                <li>✅ Dùng AI local cho data nhạy cảm</li>
            </ul>
            <h4>AI trong công việc</h4>
            <table>
                <tr><th>Tình huống</th><th>Nên</th><th>Không nên</th></tr>
                <tr><td>Viết báo cáo</td><td>Dùng AI draft, tự edit</td><td>Submit nguyên output AI</td></tr>
                <tr><td>Code review</td><td>AI assist, human decide</td><td>Tin hoàn toàn AI review</td></tr>
                <tr><td>Research</td><td>AI tổng hợp, verify nguồn</td><td>Trích dẫn AI như nguồn</td></tr>
                <tr><td>Quyết định</td><td>AI phân tích, human decide</td><td>Để AI quyết định</td></tr>
            </table>
            <div class="tip-box">
                💡 Nguyên tắc vàng: AI là công cụ hỗ trợ quyết định, không phải người ra quyết định.
            </div>
        `,
        advanced: `
            <h3>🎓 AI Governance & Policy</h3>
            <h4>Tạo AI Policy cho tổ chức</h4>
            <ul>
                <li><strong>Acceptable Use:</strong> AI được/không được dùng cho việc gì</li>
                <li><strong>Data Classification:</strong> Data nào được share với AI</li>
                <li><strong>Quality Standards:</strong> Tiêu chuẩn cho AI output</li>
                <li><strong>Accountability:</strong> Ai chịu trách nhiệm cho AI output</li>
            </ul>
            <h4>AI Bias & Fairness</h4>
            <p>AI phản ánh bias trong training data:</p>
            <ul>
                <li>Gender bias trong language models</li>
                <li>Cultural bias (thiên về Western culture)</li>
                <li>Selection bias trong recommendations</li>
            </ul>
            <h4>Tương lai AI Regulation</h4>
            <ul>
                <li><strong>EU AI Act:</strong> Phân loại AI theo rủi ro</li>
                <li><strong>Executive Orders:</strong> Các nước ban hành quy định AI</li>
                <li><strong>Industry Standards:</strong> ISO, IEEE standards cho AI</li>
            </ul>
        `
    }
};
