// Free & Premium AI Strategies
const freePremiumData = {
    'free-tiers': {
        icon: '🆓',
        title: 'Tận Dụng Free Tier',
        category: 'free-premium',
        level: 'beginner',
        connections: ['trial-strategy', 'alternative-tools', 'ai-tools-overview'],
        simple: `
            <h3>🆓 Free Tier AI</h3>
            <p>Hầu hết AI đều có <strong>bản miễn phí</strong> với tính năng cơ bản. Tận dụng tối đa!</p>
            <h4>Free Tier tốt nhất</h4>
            <ul>
                <li>💬 <strong>ChatGPT Free:</strong> GPT-3.5, đủ cho hầu hết nhu cầu</li>
                <li>🔮 <strong>Gemini:</strong> Miễn phí, tích hợp Google</li>
                <li>🔍 <strong>Perplexity:</strong> 5 Pro searches/ngày miễn phí</li>
                <li>💻 <strong>GitHub Copilot:</strong> Miễn phí cho student/OSS</li>
            </ul>
        `,
        detail: `
            <h3>📊 Bảng so sánh Free Tier</h3>
            <table>
                <tr><th>Dịch vụ</th><th>Free Tier</th><th>Giới hạn</th></tr>
                <tr><td>ChatGPT</td><td>GPT-3.5 unlimited</td><td>Không có GPT-4</td></tr>
                <tr><td>Claude</td><td>Claude 3 Sonnet</td><td>Giới hạn messages/ngày</td></tr>
                <tr><td>Gemini</td><td>Gemini Pro</td><td>Rate limit</td></tr>
                <tr><td>Perplexity</td><td>Basic search</td><td>5 Pro search/ngày</td></tr>
                <tr><td>Copilot</td><td>Code completion</td><td>2000 completions/th</td></tr>
            </table>
            <h4>Mẹo tối ưu Free Tier</h4>
            <ul>
                <li>Dùng free tier cho task thường ngày</li>
                <li>Dùng premium cho task quan trọng</li>
                <li>Xoay vòng giữa các dịch vụ</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 Maximize Free Tier</h3>
            <h4>Chiến lược xoay vòng</h4>
            <p>Khi hết limit ở dịch vụ A, chuyển sang B:</p>
            <ol>
                <li>Sáng: ChatGPT (general tasks)</li>
                <li>Trưa: Claude (phân tích dài)</li>
                <li>Chiều: Gemini (search + AI)</li>
                <li>Tối: Perplexity (research)</li>
            </ol>
            <h4>Student & Developer Benefits</h4>
            <ul>
                <li>GitHub Student Pack: Copilot miễn phí</li>
                <li>Azure for Students: Credits AI</li>
                <li>Google Cloud: $300 free credits</li>
            </ul>
        `
    },
    'trial-strategy': {
        icon: '⏱️',
        title: 'Chiến Lược Dùng Thử',
        category: 'free-premium',
        level: 'beginner',
        connections: ['free-tiers', 'multi-account-strategy', 'alternative-tools'],
        simple: `
            <h3>⏱️ Tận dụng Trial Period</h3>
            <p>Nhiều dịch vụ AI cho <strong>dùng thử miễn phí</strong> 7-30 ngày.</p>
            <h4>Cách tận dụng</h4>
            <ul>
                <li>📅 Lên lịch dùng thử các dịch vụ lần lượt</li>
                <li>📝 Ghi chú ngày bắt đầu/kết thúc</li>
                <li>⏰ Đặt reminder hủy trước khi bị charge</li>
                <li>🎯 Tập trung dùng tối đa trong trial</li>
            </ul>
        `,
        detail: `
            <h3>📊 Lịch trình Trial</h3>
            <h4>Các dịch vụ có trial</h4>
            <table>
                <tr><th>Dịch vụ</th><th>Trial</th><th>Tính năng</th></tr>
                <tr><td>ChatGPT Plus</td><td>Không có trial</td><td>Nhưng có free tier</td></tr>
                <tr><td>Claude Pro</td><td>Không có trial</td><td>Nhưng có free tier</td></tr>
                <tr><td>Midjourney</td><td>25 ảnh miễn phí</td><td>Tạo ảnh AI</td></tr>
                <tr><td>Notion AI</td><td>20 responses miễn phí</td><td>AI trong Notion</td></tr>
                <tr><td>Cursor Pro</td><td>14 ngày trial</td><td>AI coding</td></tr>
            </table>
            <div class="tip-box">
                💡 Dùng calendar app đặt reminder 2 ngày trước khi trial hết.
            </div>
        `,
        advanced: `
            <h3>🎓 Trial Optimization</h3>
            <h4>Batch Processing trong Trial</h4>
            <p>Tận dụng trial period bằng cách:</p>
            <ul>
                <li>Chuẩn bị sẵn tất cả tasks cần làm</li>
                <li>Chạy batch processing ngay khi trial bắt đầu</li>
                <li>Export mọi kết quả trước khi trial hết</li>
                <li>Save templates và prompts hay</li>
            </ul>
            <h4>Lưu ý pháp lý</h4>
            <div class="warning-box">
                ⚠️ Đọc kỹ điều khoản trial. Một số dịch vụ auto-charge sau trial. Dùng virtual card để tránh charge ngoài ý muốn.
            </div>
        `
    },
    'alternative-tools': {
        icon: '🔄',
        title: 'Công Cụ Thay Thế',
        category: 'free-premium',
        level: 'beginner',
        connections: ['free-tiers', 'open-source-ai', 'ai-tools-overview'],
        simple: `
            <h3>🔄 Luôn có lựa chọn thay thế</h3>
            <p>Không cần trả tiền cho mọi thứ - có nhiều <strong>công cụ thay thế miễn phí</strong>.</p>
            <h4>Thay thế phổ biến</h4>
            <ul>
                <li>ChatGPT Plus → <strong>Claude Free / Gemini</strong></li>
                <li>Midjourney → <strong>Leonardo AI / Stable Diffusion</strong></li>
                <li>Copilot → <strong>Cody / TabNine Free</strong></li>
                <li>Grammarly → <strong>LanguageTool / ChatGPT</strong></li>
            </ul>
        `,
        detail: `
            <h3>📊 Bảng so sánh chi tiết</h3>
            <h4>Text AI thay thế ChatGPT Plus</h4>
            <table>
                <tr><th>Công cụ</th><th>Giá</th><th>Điểm mạnh</th></tr>
                <tr><td>Claude</td><td>Free</td><td>Context dài, ít hallucination</td></tr>
                <tr><td>Gemini</td><td>Free</td><td>Google integration</td></tr>
                <tr><td>HuggingChat</td><td>Free</td><td>Open source models</td></tr>
                <tr><td>Poe</td><td>Free</td><td>Nhiều models trong 1 app</td></tr>
            </table>
            <h4>Image AI thay thế Midjourney</h4>
            <table>
                <tr><th>Công cụ</th><th>Giá</th><th>Điểm mạnh</th></tr>
                <tr><td>Leonardo AI</td><td>Free 150 tokens/ngày</td><td>Nhiều model</td></tr>
                <tr><td>Playground AI</td><td>Free 500 ảnh/ngày</td><td>Dễ dùng</td></tr>
                <tr><td>Stable Diffusion</td><td>Free (local)</td><td>Không giới hạn</td></tr>
            </table>
        `,
        advanced: `
            <h3>🎓 Xây dựng bộ công cụ tối ưu</h3>
            <h4>Nguyên tắc chọn tool</h4>
            <ol>
                <li>Free tier đủ dùng → Dùng free</li>
                <li>Cần premium 1-2 tool → Chọn tool dùng nhiều nhất</li>
                <li>Open source thay thế được → Ưu tiên open source</li>
            </ol>
            <h4>AI Aggregators</h4>
            <p>Dùng 1 nền tảng để truy cập nhiều AI:</p>
            <ul>
                <li><strong>Poe:</strong> ChatGPT, Claude, Llama trong 1 app</li>
                <li><strong>OpenRouter:</strong> API gateway cho nhiều models</li>
                <li><strong>HuggingFace:</strong> Chạy thử models miễn phí</li>
            </ul>
        `
    },
    'open-source-ai': {
        icon: '🔓',
        title: 'AI Mã Nguồn Mở',
        category: 'free-premium',
        level: 'intermediate',
        connections: ['alternative-tools', 'local-llm', 'api-free-credits'],
        simple: `
            <h3>🔓 Open Source AI</h3>
            <p><strong>AI mã nguồn mở</strong> là models miễn phí, bạn có thể tải về và chạy trên máy mình.</p>
            <h4>Models phổ biến</h4>
            <ul>
                <li>🦙 <strong>Llama 3:</strong> Meta, rất mạnh</li>
                <li>🌊 <strong>Mistral:</strong> Nhỏ gọn, hiệu quả</li>
                <li>💎 <strong>Gemma:</strong> Google, nhẹ</li>
                <li>🐍 <strong>CodeLlama:</strong> Chuyên code</li>
            </ul>
        `,
        detail: `
            <h3>📊 So sánh Open Source Models</h3>
            <table>
                <tr><th>Model</th><th>Size</th><th>Điểm mạnh</th></tr>
                <tr><td>Llama 3 70B</td><td>40GB</td><td>Gần bằng GPT-4</td></tr>
                <tr><td>Llama 3 8B</td><td>5GB</td><td>Chạy được laptop</td></tr>
                <tr><td>Mistral 7B</td><td>4GB</td><td>Tốt/nhỏ gọn</td></tr>
                <tr><td>Phi-3 Mini</td><td>2GB</td><td>Siêu nhẹ</td></tr>
            </table>
            <h4>Cách chạy</h4>
            <ul>
                <li><strong>Ollama:</strong> 1 lệnh cài đặt</li>
                <li><strong>LM Studio:</strong> Giao diện đồ họa đẹp</li>
                <li><strong>HuggingFace:</strong> Chạy online miễn phí</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 Triển khai Open Source AI</h3>
            <h4>Local Deployment</h4>
            <div class="formula-box">
                ollama run llama3:8b
            </div>
            <h4>Yêu cầu phần cứng</h4>
            <table>
                <tr><th>Model Size</th><th>RAM cần</th><th>GPU khuyên dùng</th></tr>
                <tr><td>7B</td><td>8GB</td><td>RTX 3060+</td></tr>
                <tr><td>13B</td><td>16GB</td><td>RTX 3080+</td></tr>
                <tr><td>70B</td><td>64GB</td><td>RTX 4090 hoặc A100</td></tr>
            </table>
            <h4>Quantization</h4>
            <p>Nén model để chạy trên phần cứng yếu hơn: Q4, Q5, Q8 levels.</p>
        `
    },
    'api-free-credits': {
        icon: '🎫',
        title: 'API & Free Credits',
        category: 'free-premium',
        level: 'intermediate',
        connections: ['free-tiers', 'open-source-ai', 'api-integration'],
        simple: `
            <h3>🎫 API Free Credits</h3>
            <p>Nhiều nền tảng AI tặng <strong>credits miễn phí</strong> khi đăng ký mới.</p>
            <h4>Credits miễn phí</h4>
            <ul>
                <li>🔑 <strong>OpenAI:</strong> $5 credit cho tài khoản mới</li>
                <li>☁️ <strong>Google Cloud:</strong> $300 credit 90 ngày</li>
                <li>🔷 <strong>Azure:</strong> $200 credit 30 ngày</li>
                <li>🟠 <strong>AWS:</strong> Free tier 12 tháng</li>
            </ul>
        `,
        detail: `
            <h3>📊 Chiến lược dùng API Credits</h3>
            <h4>Tối ưu chi phí API</h4>
            <ul>
                <li>Dùng model rẻ cho task đơn giản</li>
                <li>Cache responses để tránh gọi lại</li>
                <li>Batch requests thay vì gọi từng cái</li>
                <li>Set spending limits</li>
            </ul>
            <h4>Bảng giá API phổ biến</h4>
            <table>
                <tr><th>Provider</th><th>Free Credit</th><th>Thời hạn</th></tr>
                <tr><td>OpenAI</td><td>$5</td><td>3 tháng</td></tr>
                <tr><td>Anthropic</td><td>$5</td><td>Khi đăng ký</td></tr>
                <tr><td>Google AI</td><td>Free tier generous</td><td>Ongoing</td></tr>
                <tr><td>Groq</td><td>Free API</td><td>Rate limited</td></tr>
            </table>
        `,
        advanced: `
            <h3>🎓 API Cost Optimization</h3>
            <h4>Router Strategy</h4>
            <p>Dùng AI router để gửi request đến model rẻ nhất phù hợp:</p>
            <div class="example-box">
                Simple query → GPT-3.5 ($0.002/1K tokens)<br>
                Complex query → GPT-4 ($0.06/1K tokens)<br>
                Code query → CodeLlama (free, local)
            </div>
            <h4>OpenRouter</h4>
            <p>1 API key, truy cập 100+ models với giá cạnh tranh.</p>
            <h4>Self-hosted API</h4>
            <p>Chạy open-source model trên VPS riêng để có unlimited API calls.</p>
        `
    }
};
