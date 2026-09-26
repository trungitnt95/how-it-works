// Developer Tools
const developerToolsData = {
    'copilot': {
        icon: '🧑‍💻',
        title: 'GitHub Copilot',
        category: 'developer',
        level: 'beginner',
        connections: ['cursor-ai', 'ai-code-review', 'chatgpt-intro', 'copilot-features', 'coding-agents'],
        simple: `
            <h3>🧑‍💻 GitHub Copilot</h3>
            <p><strong>GitHub Copilot</strong> là AI coding assistant của GitHub, tích hợp trực tiếp trong IDE. Đây là công cụ AI coding phổ biến nhất thế giới.</p>
            <div class="example-box">
                <strong>Cách dùng:</strong> Viết comment mô tả → Copilot tự gợi ý code → Tab để accept.
            </div>
            <h4>Copilot làm được gì?</h4>
            <ul>
                <li>✍️ <strong>Code Completion:</strong> Auto-complete code thông minh</li>
                <li>💬 <strong>Copilot Chat:</strong> Hỏi đáp về code trong IDE</li>
                <li>✏️ <strong>Copilot Edits:</strong> Sửa code multi-file bằng ngôn ngữ tự nhiên</li>
                <li>🔧 <strong>Fix & Debug:</strong> Tự động sửa bugs và errors</li>
                <li>📝 <strong>Generate Tests:</strong> Viết unit tests tự động</li>
                <li>📖 <strong>Explain Code:</strong> Giải thích code phức tạp</li>
                <li>🤖 <strong>Agent Mode:</strong> Tự hoàn thành tasks phức tạp trong IDE</li>
                <li>☁️ <strong>Copilot Coding Agent:</strong> Giao issue → Copilot tự code trên cloud và mở PR</li>
            </ul>
            <h4>Pricing (09/2026)</h4>
            <p>Từ 06/2026 Copilot chuyển sang tính theo <strong>AI Credits</strong>: code completion không giới hạn ở gói trả phí; chat, agent, code review trừ vào credits.</p>
            <table>
                <tr><th>Plan</th><th>Giá</th><th>Đặc điểm</th></tr>
                <tr><td>Free</td><td>$0</td><td>2.000 completions + 50 chat/tháng</td></tr>
                <tr><td>Pro</td><td>$10/th</td><td>Unlimited completions + ~$15 AI Credits</td></tr>
                <tr><td>Pro+</td><td>$39/th</td><td>~$70 AI Credits, agent bên thứ ba (Claude, Codex)</td></tr>
                <tr><td>Max</td><td>$100/th</td><td>~$200 AI Credits, dùng agent cường độ cao</td></tr>
                <tr><td>Business / Enterprise</td><td>Theo seat</td><td>Quản lý team, policies, audit logs</td></tr>
            </table>
        `,
        detail: `
            <h3>📊 Copilot Toàn Diện - Tính năng Developer Cần Biết</h3>

            <h4>1. Code Completion (Ghost Text)</h4>
            <p>Copilot gợi ý code ngay khi bạn gõ. Viết comment tốt = code tốt hơn.</p>
            <div class="example-box">
                // Function to validate email format using regex<br>
                // Returns true if valid, false otherwise<br>
                → Copilot sẽ viết function hoàn chỉnh
            </div>
            <table>
                <tr><th>Phím tắt</th><th>Chức năng</th></tr>
                <tr><td>Tab</td><td>Accept suggestion</td></tr>
                <tr><td>Esc</td><td>Dismiss suggestion</td></tr>
                <tr><td>Alt + ]</td><td>Next suggestion</td></tr>
                <tr><td>Alt + [</td><td>Previous suggestion</td></tr>
                <tr><td>Ctrl+→</td><td>Accept word-by-word</td></tr>
            </table>

            <h4>2. Copilot Chat — Hỏi đáp trong IDE</h4>
            <p>Chat trực tiếp với AI về code, không cần rời IDE.</p>
            <table>
                <tr><th>Slash Command</th><th>Chức năng</th></tr>
                <tr><td>/explain</td><td>Giải thích code đang chọn</td></tr>
                <tr><td>/fix</td><td>Sửa bugs trong code</td></tr>
                <tr><td>/tests</td><td>Tạo unit tests</td></tr>
                <tr><td>/doc</td><td>Tạo documentation</td></tr>
                <tr><td>/optimize</td><td>Tối ưu performance</td></tr>
                <tr><td>/new</td><td>Scaffold dự án mới</td></tr>
                <tr><td>/search</td><td>Tìm kiếm trong codebase</td></tr>
            </table>

            <h4>3. Context Variables (@)</h4>
            <p>Dùng @ để thêm context cho Copilot:</p>
            <ul>
                <li><strong>#codebase:</strong> Tìm trong toàn bộ codebase</li>
                <li><strong>#file / #selection:</strong> File hoặc code đang chọn</li>
                <li><strong>#terminalLastCommand:</strong> Output terminal</li>
                <li><strong>@vscode / @terminal:</strong> Chat participants chuyên biệt</li>
                <li><strong>MCP tools:</strong> Tools từ MCP servers đã cài</li>
            </ul>

            <h4>4. Chat Modes: Ask / Edit / Agent / Plan</h4>
            <p>Trong Copilot Chat, chọn mode: <strong>Ask</strong> (hỏi đáp), <strong>Edit</strong> (sửa nhiều file theo yêu cầu), <strong>Agent</strong> (tự chạy lệnh, sửa lỗi đến khi xong), <strong>Plan</strong> (lập kế hoạch trước khi code). Luôn review diff trước khi accept.</p>
            <div class="tip-box">
                💡 Mẹo: Thêm files liên quan vào working set để Copilot hiểu context tốt hơn.
            </div>
        `,
        advanced: `
            <h3>🎓 Copilot Nâng Cao - Power User Guide</h3>

            <h4>Copilot Agent Mode</h4>
            <p>Agent mode cho phép Copilot tự lập kế hoạch và thực hiện tasks phức tạp:</p>
            <ul>
                <li>Tự tạo và chạy terminal commands</li>
                <li>Edit nhiều files theo plan</li>
                <li>Tự sửa lỗi nếu code fail</li>
                <li>Iterate cho đến khi task hoàn thành</li>
            </ul>

            <h4>Copilot CLI</h4>
            <p>Copilot CLI mới là một coding agent đầy đủ trong terminal (thay cho extension <code>gh copilot suggest/explain</code> cũ):</p>
            <div class="formula-box">
                npm install -g @github/copilot<br>
                copilot   # mở agent tương tác trong thư mục project
            </div>

            <h4>Copilot cho Pull Requests</h4>
            <ul>
                <li><strong>PR Summaries:</strong> Tự tóm tắt changes trong PR</li>
                <li><strong>Code Review:</strong> AI review code, phát hiện bugs</li>
                <li><strong>PR Descriptions:</strong> Tự tạo mô tả chi tiết</li>
            </ul>

            <h4>Custom Instructions</h4>
            <p>Tạo file <strong>.github/copilot-instructions.md</strong> để hướng dẫn Copilot theo chuẩn dự án:</p>
            <div class="example-box">
                - Always use TypeScript strict mode<br>
                - Follow naming convention: camelCase<br>
                - Write JSDoc for all public functions<br>
                - Use async/await instead of callbacks
            </div>

            <h4>Mở rộng Copilot bằng MCP</h4>
            <p>Copilot Extensions (GitHub App) đã được thay thế bằng <strong>MCP servers</strong> - cùng chuẩn với Claude, Cursor:</p>
            <ul>
                <li><strong>GitHub MCP:</strong> Issues, PRs, Actions</li>
                <li><strong>Playwright MCP:</strong> Điều khiển browser để test UI</li>
                <li><strong>Azure / Sentry / DB MCP:</strong> Cloud, debug production, query data</li>
                <li>Cài qua MCP registry ngay trong VS Code</li>
            </ul>

            <h4>Best Practices</h4>
            <ul>
                <li>Luôn review code Copilot tạo ra</li>
                <li>Viết tests cho code AI generated</li>
                <li>Dùng comments descriptive để guide suggestions</li>
                <li>Tận dụng #codebase cho câu hỏi về toàn bộ project</li>
                <li>Setup copilot-instructions.md hoặc AGENTS.md cho mỗi dự án</li>
            </ul>
        `
    },
    'copilot-features': {
        icon: '⚙️',
        title: 'Copilot Features Chi Tiết',
        category: 'developer',
        level: 'intermediate',
        connections: ['copilot', 'ai-code-review', 'coding-agents', 'cursor-ai'],
        simple: `
            <h3>⚙️ Tất Cả Tính Năng GitHub Copilot</h3>
            <p>Tổng hợp mọi tính năng Copilot mà developer nên biết và tận dụng.</p>
            <h4>Tổng quan tính năng</h4>
            <ul>
                <li>✍️ <strong>Code Completion:</strong> Gợi ý code real-time</li>
                <li>💬 <strong>Copilot Chat:</strong> AI assistant trong IDE</li>
                <li>✏️ <strong>Edit Mode:</strong> Edit multi-file</li>
                <li>🤖 <strong>Agent Mode:</strong> Tự thực hiện tasks trong IDE</li>
                <li>☁️ <strong>Coding Agent:</strong> Giao issue, Copilot tự mở PR</li>
                <li>🔍 <strong>Code Review:</strong> Review PR tự động</li>
                <li>📋 <strong>PR Summary:</strong> Tóm tắt PR tự động</li>
                <li>💻 <strong>Copilot CLI:</strong> Agent trong terminal</li>
                <li>🔌 <strong>MCP:</strong> Mở rộng khả năng</li>
                <li>📐 <strong>Custom Instructions:</strong> Tùy chỉnh theo dự án</li>
                <li>🛡️ <strong>Security:</strong> Phát hiện lỗ hổng bảo mật</li>
            </ul>
        `,
        detail: `
            <h3>📊 Chi Tiết Từng Tính Năng</h3>

            <h4>🔥 Edit Mode — Sửa nhiều file có kiểm soát</h4>
            <p>Edit nhiều files cùng lúc bằng ngôn ngữ tự nhiên:</p>
            <ol>
                <li>Mở Copilot Chat (Ctrl+Alt+I), chọn mode <strong>Edit</strong></li>
                <li>Thêm files liên quan vào context</li>
                <li>Mô tả thay đổi: "Add error handling to all API calls"</li>
                <li>Review diff cho từng file</li>
                <li>Accept hoặc reject từng thay đổi</li>
            </ol>

            <h4>🤖 Agent Mode — Autonomous Coding</h4>
            <p>Chuyển từ Edits → Agent mode để Copilot tự thực hiện:</p>
            <ul>
                <li>Tự chạy terminal commands (build, test, lint)</li>
                <li>Tự tìm và sửa errors</li>
                <li>Tự thêm dependencies nếu cần</li>
                <li>Iterate cho đến khi mọi thứ work</li>
            </ul>
            <div class="warning-box">
                ⚠️ Agent mode mạnh nhưng cần review kỹ - AI có thể thay đổi nhiều hơn mong đợi.
            </div>

            <h4>💻 Copilot CLI</h4>
            <p>Agent chạy trong terminal: đọc project, sửa file, chạy lệnh (hỏi quyền trước), kết nối MCP.</p>
            <div class="example-box">
                $ copilot<br>
                > Tìm tất cả file lớn hơn 100MB trong repo và thêm vào .gitignore<br>
                → Agent đề xuất lệnh find, xin phép chạy, rồi sửa .gitignore
            </div>

            <h4>📋 Copilot cho Pull Requests</h4>
            <ul>
                <li><strong>Auto Summary:</strong> Bấm nút Copilot trong ô mô tả PR → tự viết PR description</li>
                <li><strong>Code Review:</strong> Request review từ "Copilot" → AI review code, comment suggestions</li>
                <li><strong>Coding Agent:</strong> Assign issue cho Copilot hoặc nhắc @copilot trong PR → tự sửa và push commit</li>
            </ul>

            <h4>🛡️ Security Features</h4>
            <ul>
                <li>Tự block secrets trong suggestions (API keys, passwords)</li>
                <li>Phát hiện vulnerable code patterns</li>
                <li>Đề xuất security best practices</li>
                <li>Code scanning integration</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 Copilot Pro Tips & Hidden Features</h3>

            <h4>Custom Instructions Nâng Cao</h4>
            <p>File <strong>.github/copilot-instructions.md</strong> hỗ trợ:</p>
            <div class="example-box">
                # Project Guidelines<br>
                - Language: TypeScript strict mode<br>
                - Framework: Next.js with App Router<br>
                - Styling: Tailwind CSS only<br>
                - Testing: Jest + React Testing Library<br>
                - API: RESTful with Zod validation<br>
                - Error handling: Always use try/catch<br>
                - Naming: camelCase for variables, PascalCase for components<br><br>
                # Patterns<br>
                - Use server components by default<br>
                - Client components only when needed (interactivity)<br>
                - Prefer composition over inheritance
            </div>

            <h4>Vision — Copilot Đọc Hình Ảnh</h4>
            <p>Copilot Chat hỗ trợ upload ảnh (mockups, diagrams, screenshots):</p>
            <ul>
                <li>Drag & drop screenshot UI → Copilot tạo code</li>
                <li>Upload error screenshot → Copilot debug</li>
                <li>Share diagram → Copilot implement architecture</li>
            </ul>

            <h4>Multi-Model Support</h4>
            <p>Copilot cho phép chọn AI model:</p>
            <table>
                <tr><th>Model</th><th>Ưu điểm</th><th>Dùng khi</th></tr>
                <tr><td>Auto</td><td>Copilot tự chọn model phù hợp</td><td>Mặc định, tiết kiệm credits</td></tr>
                <tr><td>GPT-6 Sol / Astra</td><td>Đa năng, mạnh về agent</td><td>General & complex coding</td></tr>
                <tr><td>Claude Sonnet 5 / Opus 5.5</td><td>Code quality cao, agentic</td><td>Refactor, multi-file</td></tr>
                <tr><td>Gemini 3.x Pro</td><td>Context window lớn</td><td>Large codebase</td></tr>
            </table>

            <h4>MCP Integration</h4>
            <p>Copilot hỗ trợ MCP servers để mở rộng khả năng:</p>
            <ul>
                <li>Kết nối database → Query data trực tiếp</li>
                <li>Kết nối API docs → Hiểu API specs</li>
                <li>Kết nối monitoring → Debug production issues</li>
            </ul>

            <h4>Copilot Coding Agent (GitHub.com)</h4>
            <p>Thay thế Copilot Workspace (đã ngừng từ 2025). Giao việc trên GitHub → Copilot tự làm trên cloud → mở PR:</p>
            <ol>
                <li>Mở issue trên GitHub (mô tả rõ yêu cầu, acceptance criteria)</li>
                <li>Assign issue cho <strong>Copilot</strong> (hoặc giao task từ VS Code / Agents panel)</li>
                <li>Copilot chạy trong môi trường GitHub Actions, đọc code, chạy test</li>
                <li>Copilot mở draft PR và cập nhật tiến độ</li>
                <li>Bạn review, comment @copilot để yêu cầu sửa</li>
                <li>Approve & merge khi đạt</li>
            </ol>
            <div class="tip-box">
                💡 Coding agent đặc biệt hữu ích cho bug fixes, thêm test, và feature requests đã có spec rõ ràng. Gói Pro+ trở lên còn giao được task cho agent Claude / Codex ngay trong GitHub.
            </div>
        `
    },
    'cursor-ai': {
        icon: '💻',
        title: 'Cursor & AI IDE',
        category: 'developer',
        level: 'beginner',
        connections: ['copilot', 'ai-code-review', 'ai-tools-overview'],
        simple: `
            <h3>💻 Cursor - AI-First IDE</h3>
            <p><strong>Cursor</strong> là VS Code fork tích hợp AI sâu, một trong những AI IDE phổ biến nhất. Các lựa chọn khác: <strong>Windsurf</strong>, <strong>Google Antigravity</strong>, <strong>Zed</strong>, hoặc VS Code + Copilot.</p>
            <h4>Điểm nổi bật</h4>
            <ul>
                <li>💬 Chat với codebase</li>
                <li>✏️ Edit code bằng ngôn ngữ tự nhiên</li>
                <li>📁 Hiểu toàn bộ project</li>
                <li>🔄 Multi-file editing</li>
                <li>🤖 Agent + Background Agents chạy song song trên cloud</li>
            </ul>
        `,
        detail: `
            <h3>📊 Cursor Features</h3>
            <h4>Cmd+K: Inline Editing</h4>
            <p>Chọn code → Cmd+K → Mô tả thay đổi → AI edit trực tiếp.</p>
            <h4>Cmd+L / Cmd+I: Agent</h4>
            <p>Chat với Agent - đọc toàn bộ project, sửa nhiều file, chạy lệnh terminal.</p>
            <h4>So sánh với Copilot</h4>
            <table>
                <tr><th>Feature</th><th>Cursor</th><th>Copilot</th></tr>
                <tr><td>Code completion</td><td>✅</td><td>✅</td></tr>
                <tr><td>Chat</td><td>✅</td><td>✅</td></tr>
                <tr><td>Agent multi-file</td><td>✅</td><td>✅</td></tr>
                <tr><td>Cloud agent</td><td>✅ Background Agents</td><td>✅ Coding Agent (từ issue)</td></tr>
                <tr><td>Model riêng</td><td>✅ Composer (nhanh)</td><td>❌ Dùng model đối tác</td></tr>
                <tr><td>Giá cá nhân</td><td>Free / $20 / $60 / $200 th</td><td>Free / $10 / $39 / $100 th</td></tr>
            </table>
            <p>Cả hai đều tính theo usage: gói càng cao càng nhiều credit gọi model. Dùng model đắt (Opus, Astra) sẽ hết credit nhanh hơn.</p>
        `,
        advanced: `
            <h3>🎓 Cursor Power User</h3>
            <h4>Project Rules (.cursor/rules/)</h4>
            <p>File <code>.cursorrules</code> cũ đã được thay bằng thư mục <code>.cursor/rules/</code> (mỗi rule 1 file, áp dụng theo glob) và Cursor cũng đọc <code>AGENTS.md</code>:</p>
            <div class="example-box">
                "Always use TypeScript strict mode"<br>
                "Follow React best practices"<br>
                "Write tests for every function"
            </div>
            <h4>Agent & Background Agents</h4>
            <p>Mô tả feature → Agent tạo/edit nhiều files, chạy test. Background Agents chạy song song trên cloud và mở PR khi xong.</p>
            <h4>Tips</h4>
            <ul>
                <li>Tag files với @file để AI focus vào đó</li>
                <li>Dùng @docs để reference documentation</li>
                <li>Review diff trước khi accept</li>
            </ul>
        `
    },
    'ai-code-review': {
        icon: '🔍',
        title: 'AI Code Review',
        category: 'developer',
        level: 'intermediate',
        connections: ['copilot', 'cursor-ai', 'ai-agents'],
        simple: `
            <h3>🔍 AI Code Review</h3>
            <p>Dùng AI để <strong>review code tự động</strong> - phát hiện bugs, security issues, code smell.</p>
            <h4>Công cụ</h4>
            <ul>
                <li>🤖 <strong>GitHub Copilot Code Review:</strong> Request review từ Copilot trên PR</li>
                <li>🧠 <strong>Claude Code / Codex:</strong> /review, /security-review, GitHub Action review PR</li>
                <li>🔍 <strong>CodeRabbit, Cursor Bugbot:</strong> Auto-review PRs</li>
                <li>🛡️ <strong>Snyk:</strong> Security scanning</li>
            </ul>
        `,
        detail: `
            <h3>📊 AI Review Workflow</h3>
            <h4>Setup tự động</h4>
            <ol>
                <li>Developer tạo Pull Request</li>
                <li>AI bot tự động review code</li>
                <li>AI comment trên từng file thay đổi</li>
                <li>Developer fix issues</li>
                <li>Human reviewer final check</li>
            </ol>
            <h4>Những gì AI review tốt</h4>
            <table>
                <tr><th>Category</th><th>Ví dụ</th></tr>
                <tr><td>Bugs</td><td>Null checks, off-by-one errors</td></tr>
                <tr><td>Security</td><td>SQL injection, XSS</td></tr>
                <tr><td>Performance</td><td>N+1 queries, memory leaks</td></tr>
                <tr><td>Style</td><td>Naming conventions, formatting</td></tr>
            </table>
        `,
        advanced: `
            <h3>🎓 Custom AI Review Pipeline</h3>
            <h4>GitHub Actions + AI</h4>
            <p>Tạo GitHub Action chạy AI review cho mỗi PR:</p>
            <div class="example-box">
                on: pull_request<br>
                → Get diff<br>
                → Send to AI API<br>
                → Post comments on PR
            </div>
            <h4>Custom Review Rules</h4>
            <ul>
                <li>Định nghĩa coding standards</li>
                <li>Checklist security requirements</li>
                <li>Architecture guidelines</li>
                <li>Performance benchmarks</li>
            </ul>
        `
    },
    'local-llm': {
        icon: '🏠',
        title: 'Chạy LLM Local',
        category: 'developer',
        level: 'advanced',
        connections: ['open-source-ai', 'fine-tuning', 'ai-agents'],
        simple: `
            <h3>🏠 Chạy AI trên máy mình</h3>
            <p>Chạy LLM <strong>local</strong> = miễn phí, private, không cần internet.</p>
            <h4>Công cụ dễ dùng nhất</h4>
            <ul>
                <li>🦙 <strong>Ollama:</strong> 1 lệnh cài đặt</li>
                <li>🖥️ <strong>LM Studio:</strong> Giao diện đồ họa</li>
                <li>📦 <strong>Jan:</strong> App desktop đẹp</li>
                <li>🐍 <strong>llama.cpp:</strong> Siêu nhẹ</li>
            </ul>
        `,
        detail: `
            <h3>📊 Setup Local LLM</h3>
            <h4>Ollama (Khuyên dùng)</h4>
            <div class="formula-box">
                curl -fsSL https://ollama.com/install.sh | sh<br>
                ollama run qwen3
            </div>
            <h4>Models phổ biến</h4>
            <table>
                <tr><th>Model</th><th>RAM</th><th>Dùng cho</th></tr>
                <tr><td>qwen3:8b</td><td>8GB</td><td>General, đa năng, tiếng Việt</td></tr>
                <tr><td>qwen3-coder</td><td>16GB+</td><td>Code generation, agent</td></tr>
                <tr><td>gemma3:12b</td><td>12GB</td><td>Đọc ảnh + text</td></tr>
                <tr><td>gpt-oss:20b</td><td>16GB</td><td>Reasoning</td></tr>
                <tr><td>gemma3:4b</td><td>4GB</td><td>Siêu nhẹ</td></tr>
            </table>
            <h4>Ollama + IDE</h4>
            <p>Kết nối Ollama với VS Code (Copilot "Bring your own model", Continue, Cline) để có AI coding miễn phí, riêng tư.</p>
        `,
        advanced: `
            <h3>🎓 Local LLM nâng cao</h3>
            <h4>GPU Acceleration</h4>
            <ul>
                <li>NVIDIA GPU: CUDA support tự động</li>
                <li>Apple Silicon: Metal support</li>
                <li>AMD: ROCm support</li>
            </ul>
            <h4>Serving & API</h4>
            <p>Ollama tự expose API tại localhost:11434:</p>
            <div class="formula-box">
                POST http://localhost:11434/api/generate
            </div>
            <h4>Performance Tuning</h4>
            <ul>
                <li>Quantization: Q4_K_M cho balance tốc độ/chất lượng</li>
                <li>Context size: Giảm nếu RAM ít</li>
                <li>GPU layers: Load max layers lên GPU</li>
                <li>Batch size: Tối ưu throughput</li>
            </ul>
        `
    },
    'fine-tuning': {
        icon: '🎛️',
        title: 'Fine-tuning Models',
        category: 'developer',
        level: 'advanced',
        connections: ['local-llm', 'open-source-ai', 'ai-agents'],
        simple: `
            <h3>🎛️ Fine-tuning là gì?</h3>
            <p><strong>Fine-tuning</strong> là huấn luyện thêm AI model trên dữ liệu riêng của bạn.</p>
            <h4>Khi nào cần fine-tune?</h4>
            <ul>
                <li>Cần AI hiểu domain chuyên biệt</li>
                <li>Muốn output theo format cụ thể</li>
                <li>Prompt engineering không đủ tốt</li>
                <li>Cần consistency cao</li>
            </ul>
        `,
        detail: `
            <h3>📊 Cách Fine-tune</h3>
            <h4>Quy trình</h4>
            <ol>
                <li><strong>Chuẩn bị data:</strong> Ít nhất 100-1000 examples</li>
                <li><strong>Format data:</strong> Dạng chat messages (system/user/assistant) dạng JSONL</li>
                <li><strong>Upload & Train:</strong> Qua API hoặc platform</li>
                <li><strong>Evaluate:</strong> Test trên data mới</li>
                <li><strong>Iterate:</strong> Cải thiện data và re-train</li>
            </ol>
            <h4>Platforms</h4>
            <table>
                <tr><th>Platform</th><th>Models</th><th>Giá</th></tr>
                <tr><td>OpenAI</td><td>Model GPT nhỏ (SFT, RFT)</td><td>Pay-per-use</td></tr>
                <tr><td>Google Vertex AI</td><td>Gemini Flash</td><td>Pay-per-use</td></tr>
                <tr><td>Amazon Bedrock</td><td>Claude Haiku, Llama...</td><td>Pay-per-use</td></tr>
                <tr><td>HuggingFace / Unsloth</td><td>Open-weight (Qwen, Gemma, Llama)</td><td>Free (tự host) / GPU thuê</td></tr>
            </table>
        `,
        advanced: `
            <h3>🎓 Advanced Fine-tuning</h3>
            <h4>LoRA (Low-Rank Adaptation)</h4>
            <p>Fine-tune hiệu quả: Chỉ train một phần nhỏ parameters.</p>
            <ul>
                <li>Nhanh hơn full fine-tune 10x</li>
                <li>Cần ít GPU hơn nhiều</li>
                <li>Dễ merge/swap adapters</li>
            </ul>
            <h4>QLoRA</h4>
            <p>LoRA + Quantization = Fine-tune model 70B trên 1 GPU 24GB.</p>
            <h4>RLHF (Reinforcement Learning from Human Feedback)</h4>
            <p>Train model dựa trên feedback con người - cách ChatGPT được train.</p>
            <h4>RFT (Reinforcement Fine-Tuning)</h4>
            <p>Xu hướng 2025-2026: thay vì dạy "đáp án mẫu", bạn cung cấp <strong>grader</strong> chấm điểm và model tự học cách suy luận đạt điểm cao - hiệu quả cho reasoning model trong domain chuyên sâu.</p>
            <div class="tip-box">
                💡 Năm 2026, hãy thử theo thứ tự: prompt tốt → RAG / context tốt → fine-tune. Nếu cần fine-tune, bắt đầu với LoRA trên model nhỏ (4B-8B), scale up khi đã hiểu quy trình.
            </div>
        `
    },
    'ai-agents': {
        icon: '🤖',
        title: 'AI Agents',
        category: 'developer',
        level: 'advanced',
        connections: ['ai-workflow', 'api-integration', 'local-llm', 'mcp-protocol', 'coding-agents'],
        simple: `
            <h3>🤖 AI Agents</h3>
            <p><strong>AI Agent</strong> là AI có thể tự <em>lập kế hoạch</em> và <em>thực hiện hành động</em> để đạt mục tiêu.</p>
            <h4>Agent vs Chatbot</h4>
            <ul>
                <li>💬 <strong>Chatbot:</strong> Trả lời câu hỏi</li>
                <li>🤖 <strong>Agent:</strong> Tự lập kế hoạch, dùng tools, hoàn thành tasks</li>
            </ul>
            <div class="example-box">
                <strong>Ví dụ:</strong> "Tìm khách sạn rẻ nhất ở Đà Lạt, đặt phòng, gửi email xác nhận cho tôi" → Agent tự làm tất cả.
            </div>
        `,
        detail: `
            <h3>📊 Cấu trúc AI Agent</h3>
            <h4>Thành phần</h4>
            <ul>
                <li><strong>LLM (Brain):</strong> Suy nghĩ và quyết định</li>
                <li><strong>Tools:</strong> Search, code execution, API calls</li>
                <li><strong>Memory:</strong> Nhớ context và kết quả trước</li>
                <li><strong>Planning:</strong> Chia task thành sub-tasks</li>
            </ul>
            <h4>Agent Frameworks</h4>
            <table>
                <tr><th>Framework</th><th>Ngôn ngữ</th><th>Ưu điểm</th></tr>
                <tr><td>Claude Agent SDK</td><td>Python, TS</td><td>Cùng "harness" với Claude Code</td></tr>
                <tr><td>OpenAI Agents SDK</td><td>Python, TS</td><td>Handoffs, guardrails, tracing</td></tr>
                <tr><td>Google ADK</td><td>Python, Java</td><td>Tích hợp Gemini, A2A</td></tr>
                <tr><td>LangGraph</td><td>Python, JS</td><td>Workflow dạng graph, linh hoạt</td></tr>
                <tr><td>CrewAI</td><td>Python</td><td>Multi-agent theo vai trò</td></tr>
                <tr><td>Microsoft Agent Framework</td><td>C#, Python</td><td>Kế thừa AutoGen + Semantic Kernel</td></tr>
            </table>
        `,
        advanced: `
            <h3>🎓 Multi-Agent Systems</h3>
            <h4>Agent Patterns</h4>
            <ul>
                <li><strong>Single Agent:</strong> 1 agent với nhiều tools</li>
                <li><strong>Multi-Agent:</strong> Nhiều agents chuyên biệt phối hợp</li>
                <li><strong>Hierarchical:</strong> Manager agent điều phối worker agents</li>
            </ul>
            <h4>Ví dụ Multi-Agent</h4>
            <div class="example-box">
                🔍 Researcher Agent: Tìm thông tin<br>
                ✍️ Writer Agent: Viết nội dung<br>
                📊 Analyst Agent: Phân tích data<br>
                👨‍💼 Manager Agent: Điều phối tất cả
            </div>
            <h4>Challenges</h4>
            <ul>
                <li>Hallucination compounds qua nhiều steps</li>
                <li>Cost tăng nhanh với nhiều API calls</li>
                <li>Debugging phức tạp</li>
                <li>Safety: Agent có quyền thực hiện actions</li>
                <li>Prompt injection: nội dung web/email độc hại có thể "ra lệnh" cho agent</li>
            </ul>
            <h4>Computer Use & Browser Agents</h4>
            <p>Agent 2026 có thể tự điều khiển trình duyệt và máy tính (ChatGPT Agent, Claude in Chrome, Gemini agent): điền form, đặt lịch, thao tác web app. Luôn giám sát khi agent thao tác với tài khoản thật hoặc thanh toán.</p>
        `
    },
    'coding-agents': {
        icon: '🤖',
        title: 'Coding Agents',
        category: 'developer',
        level: 'advanced',
        connections: ['ai-agents', 'copilot', 'cursor-ai', 'mcp-protocol'],
        simple: `
            <h3>🤖 Coding Agents</h3>
            <p><strong>Coding Agent</strong> là AI agent chuyên biệt cho lập trình - có thể đọc code, viết code, chạy tests, và sửa bugs tự động.</p>
            <h4>Coding Agents phổ biến</h4>
            <ul>
                <li>🧠 <strong>Claude Code:</strong> Agent của Anthropic - terminal, IDE, web, desktop</li>
                <li>🌀 <strong>OpenAI Codex:</strong> Agent của OpenAI - CLI, IDE, cloud</li>
                <li>🧑‍💻 <strong>GitHub Copilot Agent / Coding Agent:</strong> VS Code + tự mở PR từ issue</li>
                <li>💻 <strong>Cursor Agent:</strong> Agent trong IDE + Background Agents</li>
                <li>🔧 <strong>Cline / Aider / OpenCode:</strong> Open source, tự chọn model</li>
                <li>🤖 <strong>Devin:</strong> Autonomous dev agent chạy trên cloud</li>
                <li>⚡ <strong>Lovable / Bolt / v0:</strong> Tạo web app từ mô tả (vibe coding)</li>
            </ul>
        `,
        detail: `
            <h3>📊 So sánh Coding Agents</h3>
            <table>
                <tr><th>Agent</th><th>Chạy ở đâu</th><th>Cloud / chạy nền</th><th>Run tests</th><th>Giá khởi điểm</th></tr>
                <tr><td>Claude Code</td><td>Terminal, IDE, web, desktop</td><td>✅</td><td>✅</td><td>Claude Pro $20/th hoặc API</td></tr>
                <tr><td>OpenAI Codex</td><td>CLI, IDE, ChatGPT</td><td>✅</td><td>✅</td><td>ChatGPT Plus $20/th hoặc API</td></tr>
                <tr><td>Copilot Agent</td><td>VS Code, CLI, GitHub</td><td>✅ Coding Agent</td><td>✅</td><td>Free / $10/th</td></tr>
                <tr><td>Cursor Agent</td><td>Cursor IDE</td><td>✅ Background</td><td>✅</td><td>Free / $20/th</td></tr>
                <tr><td>Cline / Aider</td><td>VS Code / Terminal</td><td>❌</td><td>✅</td><td>Free + API cost</td></tr>
                <tr><td>Devin</td><td>Cloud</td><td>✅</td><td>✅</td><td>Pay-as-you-go</td></tr>
            </table>
            <h4>Workflow với Coding Agent</h4>
            <ol>
                <li><strong>Mô tả task:</strong> Viết rõ yêu cầu, acceptance criteria</li>
                <li><strong>Agent phân tích:</strong> Đọc codebase, hiểu context</li>
                <li><strong>Agent tạo plan:</strong> Liệt kê files cần thay đổi</li>
                <li><strong>Agent implement:</strong> Viết/sửa code</li>
                <li><strong>Agent test:</strong> Chạy tests, fix nếu fail</li>
                <li><strong>Developer review:</strong> Review changes, approve/reject</li>
            </ol>
        `,
        advanced: `
            <h3>🎓 Advanced Coding Agent Setup</h3>
            <h4>Tối ưu Coding Agent</h4>
            <ul>
                <li><strong>Context files:</strong> Cung cấp đúng files liên quan</li>
                <li><strong>Rules/Instructions:</strong> AGENTS.md, CLAUDE.md, .cursor/rules/, copilot-instructions.md</li>
                <li><strong>Skills:</strong> Đóng gói quy trình lặp lại (deploy, review, viết test) thành skill để agent tự dùng khi cần</li>
                <li><strong>Plan trước, code sau:</strong> Dùng plan mode để duyệt kế hoạch trước khi agent sửa code</li>
                <li><strong>Examples:</strong> Chỉ cho agent code patterns hiện tại</li>
                <li><strong>Constraints:</strong> "Không thay đổi file X", "Giữ backward compatible"</li>
            </ul>
            <h4>Agent + MCP Integration</h4>
            <p>Coding agents mạnh hơn khi kết nối MCP servers:</p>
            <div class="example-box">
                Agent + GitHub MCP → Tự tạo PRs<br>
                Agent + DB MCP → Query data trực tiếp<br>
                Agent + Browser MCP → Test UI tự động<br>
                Agent + Docs MCP → Đọc documentation
            </div>
            <h4>Khi nào dùng Coding Agent?</h4>
            <table>
                <tr><th>✅ Phù hợp</th><th>❌ Không phù hợp</th></tr>
                <tr><td>Bug fixes rõ ràng</td><td>Architecture decisions</td></tr>
                <tr><td>Feature đã có spec</td><td>Yêu cầu mơ hồ, chưa rõ mục tiêu</td></tr>
                <tr><td>Refactoring</td><td>Performance optimization phức tạp</td></tr>
                <tr><td>Test writing</td><td>Security-critical code</td></tr>
            </table>
        `
    }
};
