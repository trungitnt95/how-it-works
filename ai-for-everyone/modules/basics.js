// AI Basics - Core concepts
const aiBasicsData = {
    'what-is-ai': {
        icon: '🤖',
        title: 'AI Là Gì',
        category: 'basics',
        level: 'beginner',
        connections: ['chatgpt-intro', 'ai-tools-overview', 'ai-limitations'],
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
                <tr><td>Text AI</td><td>ChatGPT, Claude</td><td>Viết, phân tích</td></tr>
                <tr><td>Image AI</td><td>Midjourney, DALL-E</td><td>Tạo hình ảnh</td></tr>
                <tr><td>Code AI</td><td>Copilot, Cursor</td><td>Lập trình</td></tr>
                <tr><td>Voice AI</td><td>ElevenLabs</td><td>Giọng nói</td></tr>
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
            <h4>Các thế hệ mô hình</h4>
            <ul>
                <li><strong>GPT-3.5:</strong> Nhanh, rẻ, phù hợp tác vụ đơn giản</li>
                <li><strong>GPT-4:</strong> Thông minh hơn, đắt hơn</li>
                <li><strong>Claude 3:</strong> Giỏi phân tích dài, ít hallucination</li>
                <li><strong>Gemini:</strong> Multimodal, tích hợp Google</li>
            </ul>
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
                <strong>Cách dùng:</strong> Vào chat.openai.com → Đăng ký miễn phí → Bắt đầu chat!
            </div>
            <h4>Những điều ChatGPT làm tốt</h4>
            <ul>
                <li>💡 Giải thích khái niệm phức tạp</li>
                <li>✍️ Viết và chỉnh sửa văn bản</li>
                <li>🧮 Giải toán và logic</li>
                <li>💻 Viết code nhiều ngôn ngữ</li>
            </ul>
        `,
        detail: `
            <h3>📊 So sánh các LLM</h3>
            <table>
                <tr><th>Model</th><th>Ưu điểm</th><th>Free Tier</th></tr>
                <tr><td>ChatGPT</td><td>Đa năng, plugins</td><td>GPT-3.5 miễn phí</td></tr>
                <tr><td>Claude</td><td>Context dài, an toàn</td><td>Có free tier</td></tr>
                <tr><td>Gemini</td><td>Tích hợp Google</td><td>Miễn phí</td></tr>
                <tr><td>Perplexity</td><td>Search + AI</td><td>Có free tier</td></tr>
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
                <li>🎨 <strong>Midjourney:</strong> Tạo hình ảnh</li>
                <li>💻 <strong>GitHub Copilot:</strong> Viết code</li>
                <li>📝 <strong>Notion AI:</strong> Ghi chú thông minh</li>
            </ul>
        `,
        detail: `
            <h3>📊 Phân loại công cụ AI</h3>
            <table>
                <tr><th>Mục đích</th><th>Công cụ</th><th>Giá</th></tr>
                <tr><td>Chat/Viết</td><td>ChatGPT, Claude, Gemini</td><td>Free - $20/th</td></tr>
                <tr><td>Tìm kiếm</td><td>Perplexity, You.com</td><td>Free - $20/th</td></tr>
                <tr><td>Hình ảnh</td><td>Midjourney, DALL-E, Stable Diffusion</td><td>Free - $30/th</td></tr>
                <tr><td>Code</td><td>Copilot, Cursor, Cody</td><td>Free - $20/th</td></tr>
                <tr><td>Video</td><td>Runway, Pika</td><td>Free - $30/th</td></tr>
                <tr><td>Âm thanh</td><td>ElevenLabs, Suno</td><td>Free - $22/th</td></tr>
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
                <li><strong>Chat:</strong> Claude cho phân tích, ChatGPT cho đa năng</li>
                <li><strong>Search:</strong> Perplexity cho research</li>
                <li><strong>Automation:</strong> Zapier + AI hoặc custom scripts</li>
            </ul>
            <h4>AI Stack cho Content Creator</h4>
            <ul>
                <li><strong>Viết:</strong> ChatGPT hoặc Claude</li>
                <li><strong>Hình ảnh:</strong> Midjourney hoặc DALL-E</li>
                <li><strong>Video:</strong> Runway hoặc Pika</li>
                <li><strong>Âm thanh:</strong> ElevenLabs</li>
            </ul>
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
                <li>Dùng AI có search (Perplexity)</li>
            </ul>
        `
    }
};
