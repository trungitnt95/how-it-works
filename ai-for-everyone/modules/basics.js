// AI Basics - Core concepts
const aiBasicsData = {
    'what-is-ai': {
        icon: '🤖',
        title: 'AI Là Gì',
        category: 'basics',
        level: 'beginner',
        connections: ['chatgpt-intro', 'ai-tools-overview', 'ai-limitations', 'ai-timeline'],
        simple: `
            <h3>🤖 AI là gì?</h3>
            <p><strong>AI (Artificial Intelligence)</strong> là trí tuệ nhân tạo - phần mềm có khả năng "suy nghĩ" và xử lý ngôn ngữ giống con người.</p>
            <div class="example-box">
                <strong>Ví dụ đơn giản:</strong> Bạn hỏi ChatGPT "viết email xin nghỉ phép" → AI tạo ra email hoàn chỉnh trong vài giây.
            </div>
            <h4>AI có thể làm gì?</h4>
            <ul>
                <li>✍️ Viết văn bản, email, báo cáo</li>
                <li>💻 Viết và sửa code</li>
                <li>🎨 Tạo hình ảnh</li>
                <li>🔍 Tìm kiếm và tổng hợp thông tin</li>
                <li>🌐 Dịch thuật đa ngôn ngữ</li>
            </ul>
        `,
        detail: `
            <h3>📊 AI hoạt động như thế nào?</h3>
            <p>AI hiện đại dựa trên <strong>Large Language Models (LLM)</strong> - mô hình ngôn ngữ lớn được huấn luyện trên hàng tỷ văn bản.</p>
            <h4>Quy trình hoạt động</h4>
            <ol>
                <li><strong>Input:</strong> Bạn nhập câu hỏi (prompt)</li>
                <li><strong>Processing:</strong> AI phân tích ngữ cảnh</li>
                <li><strong>Output:</strong> AI tạo ra câu trả lời từng token</li>
            </ol>
            <h4>Các loại AI phổ biến</h4>
            <table>
                <tr><th>Loại</th><th>Ví dụ</th><th>Dùng cho</th></tr>
                <tr><td>Text AI</td><td>ChatGPT, Claude, Gemini</td><td>Viết, phân tích</td></tr>
                <tr><td>Image AI</td><td>Midjourney, GPT Image, Nano Banana (Gemini)</td><td>Tạo & sửa hình ảnh</td></tr>
                <tr><td>Video AI</td><td>Sora, Veo, Runway, Kling</td><td>Tạo video từ text/ảnh</td></tr>
                <tr><td>Code AI</td><td>Copilot, Cursor, Claude Code, Codex</td><td>Lập trình, coding agent</td></tr>
                <tr><td>Voice AI</td><td>ElevenLabs, ChatGPT/Gemini Voice</td><td>Giọng nói, hội thoại realtime</td></tr>
            </table>
        `,
        advanced: `
            <h3>🎓 Kiến trúc AI nâng cao</h3>
            <h4>Transformer Architecture</h4>
            <p>Hầu hết LLM hiện đại dựa trên kiến trúc Transformer (2017):</p>
            <ul>
                <li><strong>Self-Attention:</strong> Hiểu mối quan hệ giữa các từ</li>
                <li><strong>Tokenization:</strong> Chia văn bản thành tokens</li>
                <li><strong>Embedding:</strong> Chuyển tokens thành vectors</li>
            </ul>
            <h4>Các dòng mô hình hiện tại (09/2026)</h4>
            <ul>
                <li><strong>OpenAI GPT-6:</strong> Astra (flagship), Sol (cân bằng), Luna (nhanh, rẻ)</li>
                <li><strong>Anthropic Claude:</strong> Fable 5.1 (mạnh nhất), Opus 5.5, Sonnet 5, Haiku 4.5</li>
                <li><strong>Google Gemini 3.x:</strong> Pro (suy luận sâu), Flash / Flash-Lite (nhanh, rẻ)</li>
                <li><strong>Open-weight:</strong> Qwen 3.x, DeepSeek V4, GLM-5, Gemma 3, Llama</li>
            </ul>
            <p>Mỗi hãng đều chia theo 3 tầng: <strong>flagship</strong> (mạnh, đắt) → <strong>mid-tier</strong> (cân bằng) → <strong>nhỏ/nhanh</strong> (rẻ). Tên model thay đổi vài tháng một lần, nhưng cách chia tầng này thì ổn định.</p>
            <div class="tip-box">
                💡 Không có AI nào tốt nhất cho mọi tác vụ - hãy chọn đúng công cụ cho đúng việc.
            </div>
        `
    },
    'chatgpt-intro': {
        icon: '💬',
        title: 'ChatGPT & LLM',
        category: 'basics',
        level: 'beginner',
        connections: ['what-is-ai', 'basic-prompting', 'ai-tools-overview'],
        simple: `
            <h3>💬 ChatGPT là gì?</h3>
            <p><strong>ChatGPT</strong> là chatbot AI của OpenAI - công cụ AI phổ biến nhất thế giới.</p>
            <div class="example-box">
                <strong>Cách dùng:</strong> Vào chatgpt.com (hoặc tải app) → Đăng ký miễn phí → Bắt đầu chat!
            </div>
            <h4>Những điều ChatGPT làm tốt</h4>
            <ul>
                <li>💡 Giải thích khái niệm phức tạp</li>
                <li>✍️ Viết và chỉnh sửa văn bản</li>
                <li>🧮 Giải toán và logic</li>
                <li>💻 Viết code nhiều ngôn ngữ</li>
                <li>🔍 Tìm kiếm web, Deep Research có trích dẫn nguồn</li>
                <li>🗣️ Nói chuyện bằng giọng nói, đọc ảnh & file</li>
            </ul>
        `,
        detail: `
            <h3>📊 So sánh các LLM (09/2026)</h3>
            <table>
                <tr><th>Chatbot</th><th>Ưu điểm</th><th>Free Tier</th></tr>
                <tr><td>ChatGPT</td><td>Đa năng, agent, Codex, tạo ảnh</td><td>Model nhẹ (Luna), có giới hạn</td></tr>
                <tr><td>Claude</td><td>Viết & code tốt, context 1M, Projects</td><td>Sonnet, giới hạn tin nhắn</td></tr>
                <tr><td>Gemini</td><td>Tích hợp Google (Gmail, Docs), video/ảnh</td><td>Gemini Flash, khá rộng rãi</td></tr>
                <tr><td>Perplexity</td><td>Search + AI, trích dẫn nguồn</td><td>Search cơ bản không giới hạn</td></tr>
            </table>
            <h4>LLM là gì?</h4>
            <p><strong>Large Language Model</strong> là mô hình AI được huấn luyện trên lượng text khổng lồ để hiểu và tạo ngôn ngữ tự nhiên.</p>
            <div class="tip-box">
                💡 Mỗi LLM có "tính cách" khác nhau - thử nhiều công cụ để tìm cái phù hợp nhất.
            </div>
        `,
        advanced: `
            <h3>🎓 Hiểu sâu về LLM</h3>
            <h4>Cách LLM tạo text</h4>
            <ol>
                <li>Nhận input tokens</li>
                <li>Tính probability cho token tiếp theo</li>
                <li>Chọn token dựa trên temperature</li>
                <li>Lặp lại đến khi hoàn thành</li>
            </ol>
            <h4>Giới hạn quan trọng</h4>
            <ul>
                <li><strong>Knowledge cutoff:</strong> Không biết sự kiện mới</li>
                <li><strong>Hallucination:</strong> Có thể bịa thông tin</li>
                <li><strong>Context limit:</strong> Giới hạn độ dài hội thoại</li>
            </ul>
            <div class="formula-box">
                Token ≈ 0.75 từ tiếng Anh | Token ≈ 0.5 từ tiếng Việt
            </div>
        `
    },
    'ai-tools-overview': {
        icon: '🧰',
        title: 'Tổng Quan Công Cụ AI',
        category: 'basics',
        level: 'beginner',
        connections: ['what-is-ai', 'chatgpt-intro', 'free-tiers'],
        simple: `
            <h3>🧰 Các công cụ AI phổ biến</h3>
            <p>Có rất nhiều công cụ AI - mỗi cái giỏi một việc khác nhau.</p>
            <h4>Top công cụ nên biết</h4>
            <ul>
                <li>💬 <strong>ChatGPT:</strong> Chat AI đa năng</li>
                <li>🔍 <strong>Perplexity:</strong> Tìm kiếm thông minh</li>
                <li>🧠 <strong>Claude / Gemini:</strong> Phân tích, viết dài, tích hợp công việc</li>
                <li>🎨 <strong>Midjourney / Nano Banana:</strong> Tạo & chỉnh sửa hình ảnh</li>
                <li>💻 <strong>GitHub Copilot / Claude Code:</strong> Viết code, coding agent</li>
                <li>📝 <strong>NotebookLM:</strong> Học & tóm tắt từ tài liệu của bạn</li>
            </ul>
        `,
        detail: `
            <h3>📊 Phân loại công cụ AI</h3>
            <table>
                <tr><th>Mục đích</th><th>Công cụ</th><th>Giá</th></tr>
                <tr><td>Chat/Viết</td><td>ChatGPT, Claude, Gemini</td><td>Free - $20/th (gói Pro/Max $100-200)</td></tr>
                <tr><td>Tìm kiếm</td><td>Perplexity, ChatGPT Search, Google AI Mode</td><td>Free - $20/th</td></tr>
                <tr><td>Hình ảnh</td><td>Midjourney, GPT Image, Nano Banana, Flux</td><td>Free - $30/th</td></tr>
                <tr><td>Code</td><td>Copilot, Cursor, Claude Code, Codex</td><td>Free - $20/th (gói nặng $100-200)</td></tr>
                <tr><td>Video</td><td>Sora, Veo, Runway, Kling</td><td>Free - $30/th</td></tr>
                <tr><td>Âm thanh</td><td>ElevenLabs, Suno</td><td>Free - $22/th</td></tr>
                <tr><td>Học tập</td><td>NotebookLM</td><td>Free</td></tr>
            </table>
            <div class="tip-box">
                💡 Bắt đầu với công cụ miễn phí, nâng cấp khi thực sự cần.
            </div>
        `,
        advanced: `
            <h3>🎓 Xây dựng AI Stack cá nhân</h3>
            <h4>AI Stack cho Developer</h4>
            <ul>
                <li><strong>IDE:</strong> Cursor hoặc VS Code + Copilot</li>
                <li><strong>Coding agent:</strong> Claude Code hoặc Codex (terminal/cloud)</li>
                <li><strong>Chat:</strong> Claude cho phân tích, ChatGPT cho đa năng</li>
                <li><strong>Search:</strong> Perplexity hoặc Deep Research</li>
                <li><strong>Automation:</strong> n8n / Zapier + AI, hoặc agent + MCP</li>
            </ul>
            <h4>AI Stack cho Content Creator</h4>
            <ul>
                <li><strong>Viết:</strong> ChatGPT hoặc Claude</li>
                <li><strong>Hình ảnh:</strong> Midjourney hoặc Nano Banana / GPT Image</li>
                <li><strong>Video:</strong> Veo, Sora hoặc Runway</li>
                <li><strong>Âm thanh:</strong> ElevenLabs</li>
            </ul>
        `
    },
    'ai-timeline': {
        icon: '🗓️',
        title: 'Dòng Thời Gian AI',
        category: 'basics',
        level: 'beginner',
        connections: ['what-is-ai', 'chatgpt-intro', 'ai-tools-overview', 'coding-agents'],
        simple: `
            <h3>🗓️ AI phát triển nhanh thế nào?</h3>
            <p>Chỉ trong 4 năm, AI đi từ <strong>chatbot trả lời câu hỏi</strong> đến <strong>agent tự làm việc hàng giờ</strong>.</p>
            <ul>
                <li><strong>2022:</strong> ChatGPT ra mắt (11/2022) - AI đến với mọi người</li>
                <li><strong>2023:</strong> GPT-4, Claude, Gemini - AI đọc được ảnh, viết code tốt</li>
                <li><strong>2024:</strong> Context 1M tokens, voice realtime, model "suy nghĩ" (o1), MCP ra đời</li>
                <li><strong>2025:</strong> Năm của agent: coding agents, Deep Research, AI dùng trình duyệt</li>
                <li><strong>2026:</strong> GPT-6, Claude 5, Gemini 3.x - agent làm việc dài hơi, luật AI có hiệu lực</li>
            </ul>
            <div class="tip-box">
                💡 Tên model thay đổi vài tháng một lần. Hãy học <strong>nguyên lý</strong> (tokens, context, prompting, kiểm chứng) - chúng không lỗi thời.
            </div>
        `,
        detail: `
            <h3>📊 Các cột mốc quan trọng</h3>
            <table>
                <tr><th>Thời gian</th><th>Sự kiện</th><th>Ý nghĩa</th></tr>
                <tr><td>11/2022</td><td>ChatGPT ra mắt</td><td>100 triệu người dùng trong 2 tháng</td></tr>
                <tr><td>03/2023</td><td>GPT-4, Claude ra mắt</td><td>AI đủ tốt cho công việc chuyên môn</td></tr>
                <tr><td>12/2023</td><td>Gemini</td><td>Google tham chiến, AI đa phương tiện</td></tr>
                <tr><td>2024</td><td>GPT-4o, Claude 3.5, o1</td><td>Voice realtime, reasoning models</td></tr>
                <tr><td>11/2024</td><td>MCP (Anthropic)</td><td>Chuẩn kết nối AI với tools</td></tr>
                <tr><td>01/2025</td><td>DeepSeek R1</td><td>Open-weight bắt kịp model đóng</td></tr>
                <tr><td>2025</td><td>Claude Code, Codex, GPT-5, Claude 4, Gemini 2.5 / 3</td><td>Coding agents phổ biến</td></tr>
                <tr><td>12/2025</td><td>Việt Nam thông qua Luật AI</td><td>Hiệu lực từ 01/3/2026</td></tr>
                <tr><td>2026</td><td>Claude 5 (Fable, Opus, Sonnet), Gemini 3.x, GPT-6 (09/2026)</td><td>Agent làm việc nhiều giờ, dùng máy tính</td></tr>
            </table>
        `,
        advanced: `
            <h3>🎓 Xu hướng đáng chú ý (09/2026)</h3>
            <h4>1. Từ chatbot → agent</h4>
            <p>AI không chỉ trả lời mà còn <strong>hành động</strong>: sửa code, mở PR, điều khiển trình duyệt, xử lý tài liệu qua MCP/Connectors.</p>
            <h4>2. Reasoning là mặc định</h4>
            <p>Model tự quyết "nghĩ" bao lâu; người dùng chỉnh bằng mức effort thay vì chọn model riêng.</p>
            <h4>3. Giá giảm, năng lực tăng</h4>
            <p>Model tầng nhỏ 2026 (GPT-6 Luna ~$0.10/1M input) mạnh hơn GPT-4 năm 2023 ($30/1M input) nhưng rẻ hơn hàng trăm lần.</p>
            <h4>4. Open-weight bám sát</h4>
            <p>Qwen, DeepSeek, GLM chỉ kém model đóng hàng đầu vài tháng - tự host được cho dữ liệu nhạy cảm.</p>
            <h4>5. An toàn & quản lý</h4>
            <p>Model mạnh về an ninh mạng được phát hành có kiểm soát; luật AI tại Việt Nam và EU đi vào thực thi; tranh luận về khả năng giám sát "suy nghĩ" của model.</p>
            <div class="warning-box">
                ⚠️ Mọi con số về model, giá và gói dịch vụ trên trang này cập nhật đến <strong>09/2026</strong>. Luôn kiểm tra trang chính thức trước khi ra quyết định mua hoặc tích hợp.
            </div>
        `
    },
    'ai-limitations': {
        icon: '⚠️',
        title: 'Giới Hạn Của AI',
        category: 'basics',
        level: 'beginner',
        connections: ['what-is-ai', 'ai-hallucination', 'fact-checking'],
        simple: `
            <h3>⚠️ AI không phải thần thánh!</h3>
            <p>Hiểu giới hạn của AI giúp bạn dùng nó hiệu quả hơn.</p>
            <h4>AI KHÔNG thể</h4>
            <ul>
                <li>❌ Luôn đúng 100%</li>
                <li>❌ Biết sự kiện mới nhất</li>
                <li>❌ Hiểu cảm xúc thực sự</li>
                <li>❌ Thay thế chuyên gia hoàn toàn</li>
            </ul>
            <div class="warning-box">
                ⚠️ <strong>Luôn kiểm tra lại</strong> thông tin quan trọng từ AI!
            </div>
        `,
        detail: `
            <h3>📊 Các giới hạn cụ thể</h3>
            <h4>1. Hallucination</h4>
            <p>AI có thể tự tin nói sai - bịa ra thông tin nghe rất thật.</p>
            <h4>2. Knowledge Cutoff</h4>
            <p>Mỗi model có ngày cắt dữ liệu - không biết sự kiện sau đó.</p>
            <h4>3. Context Window</h4>
            <p>AI chỉ "nhớ" được một lượng text nhất định trong cuộc trò chuyện.</p>
            <h4>4. Bias</h4>
            <p>AI phản ánh bias trong dữ liệu huấn luyện.</p>
            <div class="tip-box">
                💡 Dùng AI như một <strong>trợ lý thông minh</strong>, không phải nguồn sự thật tuyệt đối.
            </div>
        `,
        advanced: `
            <h3>🎓 Hiểu sâu về giới hạn</h3>
            <h4>Tại sao AI hallucinate?</h4>
            <p>LLM dự đoán token tiếp theo dựa trên xác suất - không "hiểu" sự thật. Khi không chắc chắn, nó vẫn tạo output nghe hợp lý.</p>
            <h4>Các lĩnh vực cần cẩn thận</h4>
            <ul>
                <li>🏥 Y tế: Không thay bác sĩ</li>
                <li>⚖️ Pháp lý: Kiểm tra luật cụ thể</li>
                <li>💰 Tài chính: Không tin mù quáng</li>
                <li>📊 Số liệu: Luôn verify nguồn</li>
            </ul>
            <h4>Chiến lược giảm thiểu rủi ro</h4>
            <ul>
                <li>Cross-check với nhiều AI</li>
                <li>Yêu cầu AI trích dẫn nguồn</li>
                <li>Bật web search / Deep Research (ChatGPT, Claude, Gemini, Perplexity)</li>
            </ul>
        `
    }
};
