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
                <li>💬 <strong>ChatGPT Free:</strong> Model GPT nhẹ (Luna), có search, tạo ảnh giới hạn</li>
                <li>🧠 <strong>Claude Free:</strong> Sonnet, giỏi viết & phân tích</li>
                <li>🔮 <strong>Gemini:</strong> Free tier rộng rãi, tích hợp Google</li>
                <li>🔍 <strong>Perplexity:</strong> Search có trích dẫn, vài lượt Pro/ngày</li>
                <li>💻 <strong>GitHub Copilot Free:</strong> 2.000 completions + 50 chat/tháng cho mọi người</li>
                <li>📓 <strong>NotebookLM:</strong> Miễn phí, học từ tài liệu của bạn</li>
            </ul>
        `,
        detail: `
            <h3>📊 Bảng so sánh Free Tier</h3>
            <table>
                <tr><th>Dịch vụ</th><th>Free Tier</th><th>Giới hạn</th></tr>
                <tr><td>ChatGPT</td><td>Model Luna (nhẹ)</td><td>Không có flagship (GPT-6 Astra), giới hạn tin nhắn/ảnh</td></tr>
                <tr><td>Claude</td><td>Sonnet</td><td>Giới hạn tin nhắn theo khung 5 giờ</td></tr>
                <tr><td>Gemini</td><td>Gemini Flash (+ Pro giới hạn)</td><td>Rate limit</td></tr>
                <tr><td>Perplexity</td><td>Basic search</td><td>Giới hạn lượt Pro search/ngày</td></tr>
                <tr><td>GitHub Copilot</td><td>Completions + chat + agent</td><td>2.000 completions, 50 chat/tháng</td></tr>
            </table>
            <p>Gói trả phí phổ biến: <strong>~$20/tháng</strong> (ChatGPT Plus, Claude Pro, Google AI Pro). ChatGPT còn có gói <strong>Go ~$8/tháng</strong> nới giới hạn Free nhưng chưa có model flagship. Giá có thể khác tùy quốc gia.</p>
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
                <li>GitHub Student Pack: Copilot Pro miễn phí cho sinh viên đã xác minh</li>
                <li>Google AI Pro: thường có ưu đãi miễn phí cho sinh viên (kiểm tra theo quốc gia)</li>
                <li>Azure for Students: Credits AI</li>
                <li>Google Cloud: $300 free credits cho tài khoản mới</li>
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
                <tr><td>ChatGPT Plus</td><td>Thỉnh thoảng có khuyến mãi</td><td>Có free tier + gói Go giá rẻ</td></tr>
                <tr><td>Claude Pro</td><td>Không có trial cố định</td><td>Có free tier</td></tr>
                <tr><td>Google AI Pro</td><td>Thường có 1 tháng dùng thử</td><td>Gemini Pro, Veo, 2TB storage</td></tr>
                <tr><td>Midjourney</td><td>Không còn free trial</td><td>Tạo ảnh AI</td></tr>
                <tr><td>Cursor</td><td>Gói Hobby miễn phí + trial Pro ngắn hạn</td><td>AI coding</td></tr>
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
                <li>ChatGPT Plus → <strong>Claude Free / Gemini / DeepSeek</strong></li>
                <li>Midjourney → <strong>Nano Banana (Gemini) / Leonardo AI / Flux local</strong></li>
                <li>Copilot Pro → <strong>Copilot Free / Continue + Ollama</strong></li>
                <li>Grammarly → <strong>LanguageTool / ChatGPT</strong></li>
            </ul>
        `,
        detail: `
            <h3>📊 Bảng so sánh chi tiết</h3>
            <h4>Text AI thay thế ChatGPT Plus</h4>
            <table>
                <tr><th>Công cụ</th><th>Giá</th><th>Điểm mạnh</th></tr>
                <tr><td>Claude</td><td>Free</td><td>Viết tốt, phân tích tài liệu</td></tr>
                <tr><td>Gemini</td><td>Free</td><td>Google integration, đa phương tiện</td></tr>
                <tr><td>DeepSeek / Qwen Chat</td><td>Free</td><td>Model open-weight mạnh (lưu ý chính sách dữ liệu)</td></tr>
                <tr><td>Microsoft Copilot</td><td>Free</td><td>Dùng model OpenAI, tích hợp Windows/Edge</td></tr>
                <tr><td>Poe</td><td>Free (giới hạn)</td><td>Nhiều models trong 1 app</td></tr>
            </table>
            <h4>Image AI thay thế Midjourney</h4>
            <table>
                <tr><th>Công cụ</th><th>Giá</th><th>Điểm mạnh</th></tr>
                <tr><td>Nano Banana (Gemini)</td><td>Free (giới hạn)</td><td>Sửa ảnh bằng lời rất tốt</td></tr>
                <tr><td>ChatGPT (GPT Image)</td><td>Free (giới hạn)</td><td>Hiểu prompt dài, chữ trong ảnh</td></tr>
                <tr><td>Leonardo AI</td><td>Free tokens/ngày</td><td>Nhiều model</td></tr>
                <tr><td>Flux / Stable Diffusion</td><td>Free (local)</td><td>Không giới hạn, cần GPU</td></tr>
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
                <li><strong>Poe:</strong> ChatGPT, Claude, Gemini, Llama trong 1 app</li>
                <li><strong>OpenRouter:</strong> API gateway cho 300+ models</li>
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
            <p><strong>AI mã nguồn mở / open-weight</strong> là models miễn phí, bạn có thể tải về và chạy trên máy mình. Năm 2026, model open-weight tốt nhất chỉ kém model đóng hàng đầu vài tháng.</p>
            <h4>Models phổ biến (2026)</h4>
            <ul>
                <li>🐉 <strong>Qwen 3.x:</strong> Alibaba, nhiều kích cỡ, giỏi tiếng Việt, Apache 2.0</li>
                <li>🐋 <strong>DeepSeek V4:</strong> Suy luận & code rất mạnh</li>
                <li>🧩 <strong>GLM-5:</strong> Zhipu, top về coding agent</li>
                <li>💎 <strong>Gemma 3:</strong> Google, nhẹ, đọc được ảnh</li>
                <li>🦙 <strong>Llama / Mistral:</strong> Hệ sinh thái lâu đời</li>
                <li>🔓 <strong>gpt-oss:</strong> Model open-weight của OpenAI</li>
            </ul>
        `,
        detail: `
            <h3>📊 So sánh Open Source Models</h3>
            <table>
                <tr><th>Model</th><th>Size (Q4)</th><th>Điểm mạnh</th></tr>
                <tr><td>DeepSeek V4 / GLM-5 (MoE lớn)</td><td>Hàng trăm GB</td><td>Gần model đóng hàng đầu, cần server</td></tr>
                <tr><td>Gemma 3 27B</td><td>~17GB</td><td>1 GPU 24GB hoặc Mac 32GB</td></tr>
                <tr><td>Qwen 3 (8B - 32B)</td><td>5 - 20GB</td><td>Đa năng, tiếng Việt tốt</td></tr>
                <tr><td>gpt-oss-20b</td><td>~13GB</td><td>Reasoning, chạy laptop mạnh</td></tr>
                <tr><td>Gemma 3 4B / Qwen 3 4B</td><td>~3GB</td><td>Siêu nhẹ, chạy máy yếu</td></tr>
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
                ollama run qwen3:8b
            </div>
            <h4>Yêu cầu phần cứng</h4>
            <table>
                <tr><th>Model Size</th><th>RAM cần</th><th>GPU khuyên dùng</th></tr>
                <tr><td>4B - 8B</td><td>8GB</td><td>RTX 3060+ / Mac M-series</td></tr>
                <tr><td>12B - 14B</td><td>16GB</td><td>RTX 4070+ / Mac 16GB+</td></tr>
                <tr><td>27B - 32B</td><td>32GB</td><td>RTX 4090/5090 (24-32GB VRAM) / Mac 32GB+</td></tr>
                <tr><td>70B+</td><td>64GB+</td><td>Nhiều GPU hoặc Mac 64-128GB</td></tr>
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
                <li>🔮 <strong>Google AI Studio:</strong> Free tier Gemini API (có rate limit)</li>
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
                <tr><td>OpenAI</td><td>Không còn credit mặc định (trả trước)</td><td>-</td></tr>
                <tr><td>Anthropic</td><td>Một ít credit dùng thử</td><td>Khi đăng ký</td></tr>
                <tr><td>Google AI Studio</td><td>Free tier generous</td><td>Ongoing</td></tr>
                <tr><td>Groq / OpenRouter</td><td>Free models, rate limited</td><td>Ongoing</td></tr>
            </table>
        `,
        advanced: `
            <h3>🎓 API Cost Optimization</h3>
            <h4>Router Strategy</h4>
            <p>Dùng AI router để gửi request đến model rẻ nhất phù hợp:</p>
            <div class="example-box">
                Simple query → GPT-6 Luna / Gemini Flash-Lite (~$0.10-0.25/1M input)<br>
                Complex query → GPT-6 Sol / Claude Sonnet 5 (~$2/1M input)<br>
                Task khó nhất → GPT-6 Astra / Claude Opus 5.5 ($4-10/1M input)<br>
                Code đơn giản → Qwen 3 (free, local)
            </div>
            <h4>OpenRouter</h4>
            <p>1 API key, truy cập 300+ models với giá cạnh tranh, có sẵn một số model miễn phí.</p>
            <h4>Self-hosted API</h4>
            <p>Chạy open-source model trên VPS riêng để có unlimited API calls.</p>
        `
    }
};
