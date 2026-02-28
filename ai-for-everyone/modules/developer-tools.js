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
                <li>🤖 <strong>Copilot Agent:</strong> Tự động hoàn thành tasks phức tạp</li>
            </ul>
            <h4>Pricing</h4>
            <table>
                <tr><th>Plan</th><th>Giá</th><th>Đặc điểm</th></tr>
                <tr><td>Free</td><td>$0</td><td>2000 completions + 50 chat/tháng</td></tr>
                <tr><td>Pro</td><td>$10/th</td><td>Unlimited completions + chat</td></tr>
                <tr><td>Business</td><td>$19/th</td><td>Team management, policies</td></tr>
                <tr><td>Enterprise</td><td>$39/th</td><td>Custom models, audit logs</td></tr>
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
                <li><strong>@workspace:</strong> Toàn bộ codebase</li>
                <li><strong>@file:</strong> File cụ thể</li>
                <li><strong>@terminal:</strong> Output terminal</li>
                <li><strong>@selection:</strong> Code đang chọn</li>
                <li><strong>@vscode:</strong> VS Code settings & APIs</li>
            </ul>

            <h4>4. Copilot Edits (Multi-file Editing)</h4>
            <p>Mô tả thay đổi bạn muốn → Copilot edit nhiều files cùng lúc. Review diff trước khi accept.</p>
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
            <p>Dùng Copilot trong terminal:</p>
            <div class="formula-box">
                gh copilot suggest "undo last git commit"<br>
                gh copilot explain "git log --oneline -10"
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

            <h4>Copilot Extensions</h4>
            <p>Mở rộng Copilot với các extensions bên ngoài:</p>
            <ul>
                <li><strong>@docker:</strong> Hỏi về Docker, containers</li>
                <li><strong>@azure:</strong> Deploy, cloud resources</li>
                <li><strong>@sentry:</strong> Debug production errors</li>
                <li>Và nhiều extensions community khác</li>
            </ul>

            <h4>Best Practices</h4>
            <ul>
                <li>Luôn review code Copilot tạo ra</li>
                <li>Viết tests cho code AI generated</li>
                <li>Dùng comments descriptive để guide suggestions</li>
                <li>Tận dụng @workspace cho câu hỏi về toàn bộ project</li>
                <li>Setup copilot-instructions.md cho mỗi dự án</li>
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
                <li>✏️ <strong>Copilot Edits:</strong> Edit multi-file</li>
                <li>🤖 <strong>Agent Mode:</strong> Tự thực hiện tasks</li>
                <li>🔍 <strong>Code Review:</strong> Review PR tự động</li>
                <li>📋 <strong>PR Summary:</strong> Tóm tắt PR tự động</li>
                <li>💻 <strong>Copilot CLI:</strong> AI trong terminal</li>
                <li>🔌 <strong>Extensions:</strong> Mở rộng khả năng</li>
                <li>📐 <strong>Custom Instructions:</strong> Tùy chỉnh theo dự án</li>
                <li>🛡️ <strong>Security:</strong> Phát hiện lỗ hổng bảo mật</li>
            </ul>
        `,
        detail: `
            <h3>📊 Chi Tiết Từng Tính Năng</h3>

            <h4>🔥 Copilot Edits — Tính năng mạnh nhất</h4>
            <p>Edit nhiều files cùng lúc bằng ngôn ngữ tự nhiên:</p>
            <ol>
                <li>Mở Copilot Edits panel (Ctrl+Shift+I)</li>
                <li>Thêm files vào working set</li>
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
            <table>
                <tr><th>Command</th><th>Chức năng</th></tr>
                <tr><td>gh copilot suggest</td><td>Gợi ý command cho task</td></tr>
                <tr><td>gh copilot explain</td><td>Giải thích command phức tạp</td></tr>
            </table>
            <div class="example-box">
                $ gh copilot suggest "find all files larger than 100MB"<br>
                → find / -type f -size +100M<br><br>
                $ gh copilot explain "tar -xzf archive.tar.gz"<br>
                → Giải thích từng flag: -x extract, -z gzip, -f file
            </div>

            <h4>📋 Copilot cho Pull Requests</h4>
            <ul>
                <li><strong>Auto Summary:</strong> Thêm "copilot:summary" label → Copilot tự viết PR description</li>
                <li><strong>Code Review:</strong> Request review từ "Copilot" → AI review code, comment suggestions</li>
                <li><strong>Auto Fix:</strong> Copilot đề xuất fix cho review comments</li>
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
                - Framework: Next.js 14 with App Router<br>
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
                <tr><td>GPT-4o</td><td>Đa năng, nhanh</td><td>General coding</td></tr>
                <tr><td>Claude 3.5 Sonnet</td><td>Code quality cao</td><td>Complex logic</td></tr>
                <tr><td>o1/o3</td><td>Reasoning mạnh</td><td>Algorithm, math</td></tr>
                <tr><td>Gemini</td><td>Context window lớn</td><td>Large codebase</td></tr>
            </table>

            <h4>MCP Integration</h4>
            <p>Copilot hỗ trợ MCP servers để mở rộng khả năng:</p>
            <ul>
                <li>Kết nối database → Query data trực tiếp</li>
                <li>Kết nối API docs → Hiểu API specs</li>
                <li>Kết nối monitoring → Debug production issues</li>
            </ul>

            <h4>Copilot Workspace (GitHub.com)</h4>
            <p>Mô tả task bằng tiếng Việt/Anh trên GitHub → Copilot tạo plan → Implement → Tạo PR:</p>
            <ol>
                <li>Mở issue trên GitHub</li>
                <li>Click "Open in Copilot Workspace"</li>
                <li>Copilot phân tích codebase và tạo plan</li>
                <li>Review và chỉnh sửa plan</li>
                <li>Copilot implement changes</li>
                <li>Review code và tạo PR</li>
            </ol>
            <div class="tip-box">
                💡 Copilot Workspace đặc biệt hữu ích cho bug fixes và feature requests đã có spec rõ ràng.
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
            <p><strong>Cursor</strong> là VS Code fork tích hợp AI sâu - IDE thông minh nhất hiện tại.</p>
            <h4>Điểm nổi bật</h4>
            <ul>
                <li>💬 Chat với codebase</li>
                <li>✏️ Edit code bằng ngôn ngữ tự nhiên</li>
                <li>📁 Hiểu toàn bộ project</li>
                <li>🔄 Multi-file editing</li>
            </ul>
        `,
        detail: `
            <h3>📊 Cursor Features</h3>
            <h4>Cmd+K: Inline Editing</h4>
            <p>Chọn code → Cmd+K → Mô tả thay đổi → AI edit trực tiếp.</p>
            <h4>Cmd+L: Chat</h4>
            <p>Chat với AI về code, có context toàn bộ project.</p>
            <h4>So sánh với Copilot</h4>
            <table>
                <tr><th>Feature</th><th>Cursor</th><th>Copilot</th></tr>
                <tr><td>Code completion</td><td>✅</td><td>✅</td></tr>
                <tr><td>Chat</td><td>✅ Mạnh hơn</td><td>✅</td></tr>
                <tr><td>Multi-file edit</td><td>✅</td><td>⚠️ Limited</td></tr>
                <tr><td>Codebase context</td><td>✅ Full</td><td>⚠️ Partial</td></tr>
                <tr><td>Giá</td><td>$20/th</td><td>$10/th</td></tr>
            </table>
        `,
        advanced: `
            <h3>🎓 Cursor Power User</h3>
            <h4>.cursorrules File</h4>
            <p>Tạo file .cursorrules ở root project để customize AI behavior:</p>
            <div class="example-box">
                "Always use TypeScript strict mode"<br>
                "Follow React best practices"<br>
                "Write tests for every function"
            </div>
            <h4>Composer Mode</h4>
            <p>Mô tả feature → Cursor tạo/edit nhiều files cùng lúc để implement.</p>
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
                <li>🤖 <strong>GitHub Copilot:</strong> /review command</li>
                <li>🔍 <strong>CodeRabbit:</strong> Auto-review PRs</li>
                <li>🛡️ <strong>Snyk:</strong> Security scanning</li>
                <li>💬 <strong>ChatGPT:</strong> Paste code để review</li>
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
                curl -fsSL https://ollama.ai/install.sh | sh<br>
                ollama run llama3
            </div>
            <h4>Models phổ biến</h4>
            <table>
                <tr><th>Model</th><th>RAM</th><th>Dùng cho</th></tr>
                <tr><td>llama3:8b</td><td>8GB</td><td>General, đa năng</td></tr>
                <tr><td>codellama</td><td>8GB</td><td>Code generation</td></tr>
                <tr><td>mistral</td><td>8GB</td><td>Nhanh, hiệu quả</td></tr>
                <tr><td>phi3</td><td>4GB</td><td>Siêu nhẹ</td></tr>
            </table>
            <h4>Ollama + IDE</h4>
            <p>Kết nối Ollama với VS Code hoặc Cursor thay thế Copilot miễn phí.</p>
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
                <li><strong>Format data:</strong> {"prompt": "...", "completion": "..."}</li>
                <li><strong>Upload & Train:</strong> Qua API hoặc platform</li>
                <li><strong>Evaluate:</strong> Test trên data mới</li>
                <li><strong>Iterate:</strong> Cải thiện data và re-train</li>
            </ol>
            <h4>Platforms</h4>
            <table>
                <tr><th>Platform</th><th>Models</th><th>Giá</th></tr>
                <tr><td>OpenAI</td><td>GPT-3.5, GPT-4</td><td>Từ $8/1M tokens</td></tr>
                <tr><td>HuggingFace</td><td>Open source</td><td>Free (tự host)</td></tr>
                <tr><td>Google Vertex</td><td>Gemini, PaLM</td><td>Pay-per-use</td></tr>
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
            <div class="tip-box">
                💡 Bắt đầu với LoRA trên model nhỏ (7B), scale up khi đã hiểu quy trình.
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
                <tr><td>LangChain</td><td>Python, JS</td><td>Phổ biến nhất</td></tr>
                <tr><td>CrewAI</td><td>Python</td><td>Multi-agent</td></tr>
                <tr><td>AutoGen</td><td>Python</td><td>Microsoft, mạnh</td></tr>
                <tr><td>Semantic Kernel</td><td>C#, Python</td><td>Enterprise</td></tr>
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
            </ul>
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
                <li>🧑‍💻 <strong>GitHub Copilot Agent:</strong> Tích hợp trong VS Code</li>
                <li>💻 <strong>Cursor Agent:</strong> Multi-file editing</li>
                <li>🔧 <strong>Cline / Aider:</strong> Terminal-based agents</li>
                <li>🤖 <strong>Devin:</strong> Full autonomous dev agent</li>
                <li>⚡ <strong>Bolt / v0:</strong> Web app generators</li>
            </ul>
        `,
        detail: `
            <h3>📊 So sánh Coding Agents</h3>
            <table>
                <tr><th>Agent</th><th>Tự động</th><th>Multi-file</th><th>Run tests</th><th>Giá</th></tr>
                <tr><td>Copilot Agent</td><td>⚠️ Semi</td><td>✅</td><td>✅</td><td>$10-19/th</td></tr>
                <tr><td>Cursor Composer</td><td>⚠️ Semi</td><td>✅</td><td>⚠️</td><td>$20/th</td></tr>
                <tr><td>Cline</td><td>✅ Full</td><td>✅</td><td>✅</td><td>API cost</td></tr>
                <tr><td>Aider</td><td>✅ Full</td><td>✅</td><td>✅</td><td>API cost</td></tr>
                <tr><td>Devin</td><td>✅ Full</td><td>✅</td><td>✅</td><td>$500/th</td></tr>
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
                <li><strong>Rules/Instructions:</strong> .cursorrules, copilot-instructions.md</li>
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
                <tr><td>Feature đã có spec</td><td>Exploratory coding</td></tr>
                <tr><td>Refactoring</td><td>Performance optimization phức tạp</td></tr>
                <tr><td>Test writing</td><td>Security-critical code</td></tr>
            </table>
        `
    }
};
