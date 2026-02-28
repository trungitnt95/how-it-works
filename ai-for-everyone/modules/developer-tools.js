// Developer Tools
const developerToolsData = {
    'copilot': {
        icon: '🧑‍💻',
        title: 'GitHub Copilot',
        category: 'developer',
        level: 'beginner',
        connections: ['cursor-ai', 'ai-code-review', 'chatgpt-intro'],
        simple: `
            <h3>🧑‍💻 GitHub Copilot</h3>
            <p><strong>GitHub Copilot</strong> là AI assistant viết code trực tiếp trong IDE.</p>
            <div class="example-box">
                <strong>Cách dùng:</strong> Viết comment mô tả → Copilot tự gợi ý code → Tab để accept.
            </div>
            <h4>Copilot làm được gì?</h4>
            <ul>
                <li>✍️ Auto-complete code</li>
                <li>💬 Chat hỏi đáp về code</li>
                <li>🔧 Sửa bugs</li>
                <li>📝 Viết tests</li>
                <li>📖 Giải thích code</li>
            </ul>
        `,
        detail: `
            <h3>📊 Copilot Tips & Tricks</h3>
            <h4>Viết comment tốt = Code tốt</h4>
            <div class="example-box">
                // Function to validate email format using regex<br>
                // Returns true if valid, false otherwise<br>
                → Copilot sẽ viết function hoàn chỉnh
            </div>
            <h4>Copilot Shortcuts</h4>
            <table>
                <tr><th>Phím tắt</th><th>Chức năng</th></tr>
                <tr><td>Tab</td><td>Accept suggestion</td></tr>
                <tr><td>Esc</td><td>Dismiss suggestion</td></tr>
                <tr><td>Alt + ]</td><td>Next suggestion</td></tr>
                <tr><td>Alt + [</td><td>Previous suggestion</td></tr>
                <tr><td>Ctrl + Enter</td><td>Xem tất cả suggestions</td></tr>
            </table>
            <h4>Pricing</h4>
            <ul>
                <li>Free cho students và OSS maintainers</li>
                <li>$10/tháng cho Individual</li>
                <li>$19/tháng cho Business</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 Copilot nâng cao</h3>
            <h4>Copilot Chat Commands</h4>
            <ul>
                <li><strong>/explain:</strong> Giải thích code</li>
                <li><strong>/tests:</strong> Tạo unit tests</li>
                <li><strong>/fix:</strong> Sửa bugs</li>
                <li><strong>/doc:</strong> Tạo documentation</li>
            </ul>
            <h4>Copilot Workspace</h4>
            <p>Tính năng mới: Mô tả task bằng ngôn ngữ tự nhiên → Copilot tạo plan → Implement changes across files.</p>
            <h4>Best Practices</h4>
            <ul>
                <li>Luôn review code Copilot tạo ra</li>
                <li>Viết tests cho code AI generated</li>
                <li>Dùng comment descriptive để guide</li>
            </ul>
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
        connections: ['ai-workflow', 'api-integration', 'local-llm'],
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
    }
};
