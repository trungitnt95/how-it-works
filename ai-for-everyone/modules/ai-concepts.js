// AI Core Concepts - Tokens, Messages, MCP, Workspaces, Plans
const aiConceptsData = {
    'tokens-deep': {
        icon: '🪙',
        title: 'Tokens Là Gì',
        category: 'ai-concepts',
        level: 'beginner',
        connections: ['context-window', 'token-optimization', 'messages-deep'],
        simple: `
            <h3>🪙 Token là gì?</h3>
            <p><strong>Token</strong> là đơn vị nhỏ nhất mà AI xử lý. Mọi thứ bạn gửi và nhận từ AI đều được chia thành tokens.</p>
            <div class="example-box">
                <strong>Ví dụ:</strong><br>
                "Xin chào" → 2-3 tokens<br>
                "Hello world" → 2 tokens<br>
                Một từ tiếng Anh ≈ 1-1.5 tokens<br>
                Một từ tiếng Việt ≈ 1.5-2.5 tokens
            </div>
            <h4>Tại sao token quan trọng?</h4>
            <ul>
                <li>💰 Chi phí API tính theo token</li>
                <li>📏 Giới hạn context tính bằng token</li>
                <li>⚡ Tốc độ phản hồi phụ thuộc số token</li>
                <li>🧠 AI "suy nghĩ" theo từng token</li>
            </ul>
        `,
        detail: `
            <h3>📊 Hiểu sâu về Tokens</h3>
            <h4>Tokenization hoạt động thế nào?</h4>
            <p>AI không đọc chữ như con người. Nó chia text thành các mảnh nhỏ gọi là tokens bằng thuật toán <strong>BPE (Byte-Pair Encoding)</strong>.</p>
            <div class="example-box">
                "programming" → ["program", "ming"]<br>
                "Xin chào bạn" → ["X", "in", " ch", "ào", " b", "ạn"]<br>
                "🤖" → 1-2 tokens (emoji tốn ít token)
            </div>
            <h4>Bảng token phổ biến</h4>
            <table>
                <tr><th>Nội dung</th><th>Số tokens (ước tính)</th></tr>
                <tr><td>1 câu ngắn tiếng Anh</td><td>10-20 tokens</td></tr>
                <tr><td>1 câu ngắn tiếng Việt</td><td>15-30 tokens</td></tr>
                <tr><td>1 trang A4 (~500 từ)</td><td>~700 tokens (EN), ~1000 tokens (VI)</td></tr>
                <tr><td>1 cuốn sách nhỏ</td><td>~80,000 tokens</td></tr>
            </table>
            <h4>Công cụ đếm token</h4>
            <ul>
                <li><strong>OpenAI Tokenizer:</strong> platform.openai.com/tokenizer</li>
                <li><strong>tiktoken (Python):</strong> Thư viện đếm token chính xác</li>
                <li><strong>Quy tắc nhanh:</strong> 1 token ≈ 4 ký tự tiếng Anh</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 Token Economics & Optimization</h3>
            <h4>Chi phí token theo model</h4>
            <table>
                <tr><th>Model</th><th>Input ($/1M tokens)</th><th>Output ($/1M tokens)</th></tr>
                <tr><td>GPT-4o</td><td>$2.50</td><td>$10.00</td></tr>
                <tr><td>GPT-4o mini</td><td>$0.15</td><td>$0.60</td></tr>
                <tr><td>Claude 3.5 Sonnet</td><td>$3.00</td><td>$15.00</td></tr>
                <tr><td>Claude 3.5 Haiku</td><td>$0.80</td><td>$4.00</td></tr>
                <tr><td>Gemini 1.5 Pro</td><td>$1.25</td><td>$5.00</td></tr>
            </table>
            <h4>Output tokens đắt hơn Input tokens</h4>
            <p>Lý do: Tạo ra text (generation) tốn nhiều computation hơn đọc text (processing). Output thường đắt gấp 3-5x input.</p>
            <h4>Chiến lược tối ưu token</h4>
            <ul>
                <li><strong>Prompt ngắn gọn:</strong> Bỏ từ thừa, dùng abbreviations</li>
                <li><strong>Yêu cầu output ngắn:</strong> "Trả lời trong 3 bullet points"</li>
                <li><strong>Cache:</strong> Lưu kết quả hay dùng, không gọi lại API</li>
                <li><strong>Model routing:</strong> Task đơn giản → model rẻ</li>
                <li><strong>Prompt caching:</strong> OpenAI/Anthropic hỗ trợ cache system prompt</li>
            </ul>
            <div class="formula-box">
                Chi phí = (Input tokens × Input price) + (Output tokens × Output price)
            </div>
        `
    },
    'messages-deep': {
        icon: '💬',
        title: 'Messages & Conversations',
        category: 'ai-concepts',
        level: 'beginner',
        connections: ['tokens-deep', 'context-window', 'system-prompts'],
        simple: `
            <h3>💬 Messages trong AI</h3>
            <p>Khi chat với AI, mỗi tin nhắn có một <strong>vai trò (role)</strong> khác nhau. Hiểu cách messages hoạt động giúp bạn dùng AI hiệu quả hơn.</p>
            <h4>3 loại message chính</h4>
            <ul>
                <li>⚙️ <strong>System message:</strong> Hướng dẫn cho AI (bạn không thấy)</li>
                <li>👤 <strong>User message:</strong> Tin nhắn của bạn</li>
                <li>🤖 <strong>Assistant message:</strong> Câu trả lời của AI</li>
            </ul>
            <div class="example-box">
                <strong>System:</strong> "Bạn là trợ lý tiếng Việt thân thiện"<br>
                <strong>User:</strong> "AI là gì?"<br>
                <strong>Assistant:</strong> "AI là trí tuệ nhân tạo..."
            </div>
        `,
        detail: `
            <h3>📊 Cấu trúc Messages chi tiết</h3>
            <h4>Message format (API)</h4>
            <div class="formula-box">
                messages: [<br>
                &nbsp;&nbsp;{role: "system", content: "Bạn là..."},<br>
                &nbsp;&nbsp;{role: "user", content: "Câu hỏi"},<br>
                &nbsp;&nbsp;{role: "assistant", content: "Trả lời"},<br>
                &nbsp;&nbsp;{role: "user", content: "Câu hỏi tiếp"}<br>
                ]
            </div>
            <h4>Conversation Memory</h4>
            <p>AI không thực sự "nhớ" - mỗi lần gọi API, toàn bộ lịch sử chat được gửi lại.</p>
            <ul>
                <li>Chat dài → tốn nhiều token hơn</li>
                <li>Vượt context window → tin nhắn cũ bị cắt</li>
                <li>Bắt đầu chat mới = reset memory</li>
            </ul>
            <h4>Mẹo quản lý messages</h4>
            <ul>
                <li>📝 Tóm tắt conversation dài thành 1 system message</li>
                <li>🆕 Bắt đầu chat mới cho mỗi topic khác nhau</li>
                <li>📌 Đặt thông tin quan trọng trong system message</li>
                <li>🔄 Nếu AI "quên", nhắc lại context quan trọng</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 Advanced Message Patterns</h3>
            <h4>Multi-turn Conversation Design</h4>
            <p>Thiết kế conversation flow cho ứng dụng AI:</p>
            <ul>
                <li><strong>Sliding window:</strong> Giữ N messages gần nhất</li>
                <li><strong>Summary + Recent:</strong> Tóm tắt cũ + giữ messages mới</li>
                <li><strong>RAG-enhanced:</strong> Search context liên quan cho mỗi turn</li>
            </ul>
            <h4>Message Roles mở rộng</h4>
            <table>
                <tr><th>Role</th><th>Mô tả</th><th>Dùng khi</th></tr>
                <tr><td>system</td><td>Instructions cho AI</td><td>Luôn luôn, ở đầu</td></tr>
                <tr><td>user</td><td>Input từ người dùng</td><td>Câu hỏi/yêu cầu</td></tr>
                <tr><td>assistant</td><td>Response từ AI</td><td>Lịch sử trả lời</td></tr>
                <tr><td>tool</td><td>Kết quả từ tool/function</td><td>Function calling</td></tr>
            </table>
            <h4>Function Calling</h4>
            <p>AI có thể gọi functions bạn định nghĩa:</p>
            <div class="example-box">
                User: "Thời tiết Hà Nội hôm nay?"<br>
                AI → calls: get_weather("Hà Nội")<br>
                Tool response: {temp: 28, condition: "sunny"}<br>
                AI: "Hà Nội hôm nay 28°C, trời nắng."
            </div>
        `
    },
    'mcp-protocol': {
        icon: '🔗',
        title: 'MCP (Model Context Protocol)',
        category: 'ai-concepts',
        level: 'intermediate',
        connections: ['ai-agents', 'copilot', 'cursor-ai', 'workspaces'],
        simple: `
            <h3>🔗 MCP là gì?</h3>
            <p><strong>MCP (Model Context Protocol)</strong> là giao thức chuẩn cho phép AI kết nối với các công cụ và nguồn dữ liệu bên ngoài.</p>
            <div class="example-box">
                <strong>Ví dụ:</strong> Thay vì copy-paste code vào ChatGPT, MCP cho phép AI trực tiếp đọc files, chạy lệnh, truy cập database của bạn.
            </div>
            <h4>MCP giải quyết vấn đề gì?</h4>
            <ul>
                <li>🔌 AI kết nối trực tiếp với tools (GitHub, Slack, DB...)</li>
                <li>📁 AI đọc/ghi files trên máy bạn</li>
                <li>🌐 AI truy cập web, API, services</li>
                <li>🔧 Chuẩn hóa cách AI dùng tools</li>
            </ul>
        `,
        detail: `
            <h3>📊 MCP hoạt động thế nào?</h3>
            <h4>Kiến trúc MCP</h4>
            <div class="formula-box">
                AI Host (Claude, Cursor) ↔ MCP Client ↔ MCP Server ↔ Tools/Data
            </div>
            <h4>Thành phần chính</h4>
            <ul>
                <li><strong>MCP Host:</strong> Ứng dụng AI (Claude Desktop, Cursor, VS Code)</li>
                <li><strong>MCP Client:</strong> Giao tiếp với MCP Server</li>
                <li><strong>MCP Server:</strong> Cung cấp tools và resources cho AI</li>
                <li><strong>Tools:</strong> Functions mà AI có thể gọi</li>
                <li><strong>Resources:</strong> Dữ liệu AI có thể đọc</li>
            </ul>
            <h4>MCP Servers phổ biến</h4>
            <table>
                <tr><th>Server</th><th>Chức năng</th><th>Dùng với</th></tr>
                <tr><td>Filesystem</td><td>Đọc/ghi files</td><td>Mọi project</td></tr>
                <tr><td>GitHub</td><td>Quản lý repos, PRs, issues</td><td>Development</td></tr>
                <tr><td>PostgreSQL</td><td>Query database</td><td>Backend</td></tr>
                <tr><td>Slack</td><td>Gửi/đọc messages</td><td>Team communication</td></tr>
                <tr><td>Brave Search</td><td>Tìm kiếm web</td><td>Research</td></tr>
            </table>
        `,
        advanced: `
            <h3>🎓 MCP Nâng Cao</h3>
            <h4>Tự tạo MCP Server</h4>
            <p>Bạn có thể tạo MCP Server riêng bằng Python hoặc TypeScript:</p>
            <div class="example-box">
                1. Cài MCP SDK<br>
                2. Định nghĩa tools (functions)<br>
                3. Định nghĩa resources (data sources)<br>
                4. Đăng ký server với AI host<br>
                5. AI có thể gọi tools của bạn
            </div>
            <h4>MCP vs Function Calling vs Plugins</h4>
            <table>
                <tr><th>Tính năng</th><th>MCP</th><th>Function Calling</th><th>Plugins</th></tr>
                <tr><td>Chuẩn hóa</td><td>✅ Open standard</td><td>⚠️ Vendor-specific</td><td>❌ Deprecated</td></tr>
                <tr><td>Local access</td><td>✅</td><td>❌</td><td>❌</td></tr>
                <tr><td>Multi-tool</td><td>✅</td><td>✅</td><td>⚠️</td></tr>
                <tr><td>Realtime data</td><td>✅</td><td>✅</td><td>⚠️</td></tr>
            </table>
            <h4>Use Cases cho Developer</h4>
            <ul>
                <li><strong>Code Assistant:</strong> AI đọc codebase, chạy tests, commit code</li>
                <li><strong>Data Pipeline:</strong> AI query DB, transform data, write reports</li>
                <li><strong>DevOps:</strong> AI monitor servers, deploy, manage infrastructure</li>
                <li><strong>Custom Workflows:</strong> Kết nối AI với internal tools của team</li>
            </ul>
            <div class="tip-box">
                💡 MCP đang được Anthropic phát triển và ngày càng được nhiều IDE hỗ trợ. Đây là tương lai của AI integration.
            </div>
        `
    },
    'workspaces': {
        icon: '📂',
        title: 'Workspaces & Projects',
        category: 'ai-concepts',
        level: 'intermediate',
        connections: ['mcp-protocol', 'cursor-ai', 'copilot', 'system-prompts'],
        simple: `
            <h3>📂 AI Workspaces là gì?</h3>
            <p><strong>Workspace</strong> là không gian làm việc riêng trong AI, nơi bạn tổ chức context, files, và hướng dẫn cho một dự án cụ thể.</p>
            <h4>Tại sao cần Workspace?</h4>
            <ul>
                <li>📁 Tổ chức riêng biệt theo dự án</li>
                <li>🧠 AI nhớ context dự án lâu dài</li>
                <li>👥 Chia sẻ với team members</li>
                <li>📚 Upload tài liệu tham khảo riêng</li>
            </ul>
            <div class="example-box">
                <strong>Ví dụ:</strong> Tạo workspace "Website Redesign" → Upload design docs, brand guidelines → AI luôn biết context khi bạn hỏi.
            </div>
        `,
        detail: `
            <h3>📊 Workspaces trên các nền tảng</h3>
            <h4>So sánh Workspace features</h4>
            <table>
                <tr><th>Platform</th><th>Tên feature</th><th>Upload files</th><th>Custom instructions</th></tr>
                <tr><td>Claude</td><td>Projects</td><td>✅ PDF, code, docs</td><td>✅ Project instructions</td></tr>
                <tr><td>ChatGPT</td><td>Custom GPTs / Projects</td><td>✅ Files</td><td>✅ System prompt</td></tr>
                <tr><td>Cursor</td><td>Project / .cursorrules</td><td>✅ Codebase</td><td>✅ Rules file</td></tr>
                <tr><td>VS Code</td><td>.github/copilot-instructions</td><td>✅ Codebase</td><td>✅ Instructions</td></tr>
                <tr><td>Gemini</td><td>Gems</td><td>⚠️ Limited</td><td>✅</td></tr>
            </table>
            <h4>Cách setup workspace hiệu quả</h4>
            <ol>
                <li><strong>Định nghĩa mục tiêu:</strong> Workspace này dùng cho việc gì?</li>
                <li><strong>Upload tài liệu:</strong> Docs, specs, examples liên quan</li>
                <li><strong>Viết instructions:</strong> Quy tắc AI phải tuân theo</li>
                <li><strong>Tổ chức conversations:</strong> Mỗi thread cho 1 sub-task</li>
            </ol>
        `,
        advanced: `
            <h3>🎓 Advanced Workspace Strategies</h3>
            <h4>Workspace Architecture cho Team</h4>
            <ul>
                <li><strong>Shared workspace:</strong> Cả team dùng chung context</li>
                <li><strong>Knowledge base:</strong> Upload docs, SOPs, coding standards</li>
                <li><strong>Template workspaces:</strong> Clone workspace cho dự án mới</li>
            </ul>
            <h4>Cursor Workspace Setup (Developer)</h4>
            <div class="example-box">
                .cursorrules:<br>
                - "Dùng TypeScript strict mode"<br>
                - "Follow project coding conventions"<br>
                - "Write tests cho mọi function"<br>
                - "Dùng existing patterns trong codebase"
            </div>
            <h4>Claude Projects Setup</h4>
            <ul>
                <li>Upload toàn bộ documentation</li>
                <li>Thêm code examples và conventions</li>
                <li>Viết project-specific instructions</li>
                <li>AI trả lời dựa trên knowledge base</li>
            </ul>
            <div class="tip-box">
                💡 Workspace tốt = AI hiểu context → Output chất lượng cao hơn, ít phải chỉnh sửa.
            </div>
        `
    },
    'ai-plans': {
        icon: '📋',
        title: 'AI Plans & Reasoning',
        category: 'ai-concepts',
        level: 'intermediate',
        connections: ['ai-agents', 'chain-of-thought', 'ai-workflow'],
        simple: `
            <h3>📋 AI Planning là gì?</h3>
            <p><strong>AI Planning</strong> là khả năng AI tự lập kế hoạch, chia nhỏ công việc lớn thành các bước nhỏ, và thực hiện từng bước.</p>
            <h4>Planning trong thực tế</h4>
            <ul>
                <li>📝 Bạn yêu cầu: "Tạo website portfolio"</li>
                <li>📋 AI lập kế hoạch: Design → Code HTML → CSS → Deploy</li>
                <li>🔨 AI thực hiện từng bước</li>
                <li>✅ AI kiểm tra kết quả</li>
            </ul>
            <div class="example-box">
                <strong>Copilot Workspace:</strong> Mô tả task → AI tạo plan → Review plan → AI implement → Review code
            </div>
        `,
        detail: `
            <h3>📊 Các mô hình Planning</h3>
            <h4>1. Simple Planning (Prompt-based)</h4>
            <p>Yêu cầu AI lập kế hoạch trước khi thực hiện:</p>
            <div class="example-box">
                "Trước khi trả lời, hãy:<br>
                1. Liệt kê các bước cần làm<br>
                2. Đánh giá độ phức tạp mỗi bước<br>
                3. Thực hiện từng bước<br>
                4. Kiểm tra kết quả"
            </div>
            <h4>2. Agentic Planning</h4>
            <p>AI Agent tự lập plan và thực hiện:</p>
            <table>
                <tr><th>Bước</th><th>AI làm gì</th><th>Ví dụ</th></tr>
                <tr><td>Analyze</td><td>Hiểu yêu cầu</td><td>Đọc issue, hiểu context</td></tr>
                <tr><td>Plan</td><td>Chia thành sub-tasks</td><td>Tạo checklist</td></tr>
                <tr><td>Execute</td><td>Thực hiện từng task</td><td>Viết code, chạy test</td></tr>
                <tr><td>Verify</td><td>Kiểm tra kết quả</td><td>Review, test lại</td></tr>
                <tr><td>Iterate</td><td>Sửa nếu cần</td><td>Fix bugs, refactor</td></tr>
            </table>
            <h4>3. Collaborative Planning</h4>
            <p>AI lập plan, bạn review và điều chỉnh trước khi AI thực hiện.</p>
        `,
        advanced: `
            <h3>🎓 Advanced AI Planning</h3>
            <h4>Plan-and-Execute Pattern</h4>
            <p>Pattern phổ biến trong AI Agents:</p>
            <div class="formula-box">
                Planner LLM → Task Queue → Executor LLM → Evaluator LLM → Loop
            </div>
            <h4>Reasoning Models</h4>
            <p>Các model mới có khả năng "suy nghĩ" trước khi trả lời:</p>
            <table>
                <tr><th>Model</th><th>Reasoning</th><th>Đặc điểm</th></tr>
                <tr><td>o1 / o3 (OpenAI)</td><td>Chain-of-thought ẩn</td><td>Giỏi toán, logic, coding</td></tr>
                <tr><td>Claude 3.5 (Extended Thinking)</td><td>Visible thinking</td><td>Phân tích sâu</td></tr>
                <tr><td>DeepSeek R1</td><td>Open-source reasoning</td><td>Miễn phí, mạnh</td></tr>
            </table>
            <h4>Khi nào dùng Reasoning Models?</h4>
            <ul>
                <li>✅ Bài toán phức tạp, nhiều bước</li>
                <li>✅ Code review, bug finding</li>
                <li>✅ Phân tích dữ liệu phức tạp</li>
                <li>❌ Không cần cho chat đơn giản (tốn token)</li>
            </ul>
            <div class="tip-box">
                💡 Reasoning models thường chậm hơn và đắt hơn, nhưng chính xác hơn nhiều cho task phức tạp.
            </div>
        `
    }
};
