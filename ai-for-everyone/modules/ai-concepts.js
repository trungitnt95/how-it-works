// AI Core Concepts - Tokens, Messages, MCP, Workspaces, Plans
const aiConceptsData = {
    'tokens-deep': {
        icon: '🪙',
        title: 'Tokens Là Gì',
        category: 'ai-concepts',
        level: 'beginner',
        connections: ['context-window', 'token-optimization', 'messages-deep', 'embeddings-vectors'],
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
            <h4>Chi phí token theo model (giá API, 09/2026)</h4>
            <table>
                <tr><th>Model</th><th>Input ($/1M tokens)</th><th>Output ($/1M tokens)</th></tr>
                <tr><td>GPT-6 Astra</td><td>$10.00</td><td>$50.00</td></tr>
                <tr><td>GPT-6 Sol</td><td>$2.00</td><td>$10.00</td></tr>
                <tr><td>GPT-6 Luna</td><td>$0.10</td><td>$0.50</td></tr>
                <tr><td>Claude Opus 5.5</td><td>$4.00</td><td>$20.00</td></tr>
                <tr><td>Claude Sonnet 5</td><td>$2.00</td><td>$10.00</td></tr>
                <tr><td>Claude Haiku 4.5</td><td>$1.00</td><td>$5.00</td></tr>
                <tr><td>Gemini 3.1 Pro</td><td>$2.00</td><td>$12.00</td></tr>
                <tr><td>Gemini 3.1 Flash-Lite</td><td>$0.25</td><td>$1.50</td></tr>
            </table>
            <div class="tip-box">
                💡 Giá thay đổi rất nhanh (thường giảm theo thời gian). Luôn kiểm tra trang pricing chính thức trước khi tính chi phí.
            </div>
            <h4>Output tokens đắt hơn Input tokens</h4>
            <p>Lý do: Tạo ra text (generation) tốn nhiều computation hơn đọc text (processing). Output hiện thường đắt gấp ~5x input.</p>
            <h4>Lưu ý: tokenizer khác nhau</h4>
            <p>Cùng một đoạn văn nhưng mỗi model đếm ra số token khác nhau (ví dụ tokenizer mới của Claude cho ra nhiều hơn ~30% token). So giá phải so trên <strong>chi phí thực tế cho cùng một task</strong>, không chỉ giá/token.</p>
            <h4>Chiến lược tối ưu token</h4>
            <ul>
                <li><strong>Prompt ngắn gọn:</strong> Bỏ từ thừa, dùng abbreviations</li>
                <li><strong>Yêu cầu output ngắn:</strong> "Trả lời trong 3 bullet points"</li>
                <li><strong>Cache:</strong> Lưu kết quả hay dùng, không gọi lại API</li>
                <li><strong>Model routing:</strong> Task đơn giản → model rẻ</li>
                <li><strong>Prompt caching:</strong> OpenAI/Anthropic/Google đều hỗ trợ, cache hit rẻ hơn ~90%</li>
                <li><strong>Batch API:</strong> Task không gấp → giảm 50% chi phí</li>
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
        connections: ['tokens-deep', 'context-window', 'system-prompts', 'function-calling'],
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
    'embeddings-vectors': {
        icon: '🧭',
        title: 'Embeddings & Vector Search',
        category: 'ai-concepts',
        level: 'intermediate',
        connections: ['tokens-deep', 'rag-deep', 'context-window'],
        simple: `
            <h3>🧭 Embedding là gì?</h3>
            <p><strong>Embedding</strong> là cách AI biến chữ (hoặc ảnh) thành một dãy số (vector). Câu có nghĩa <em>giống nhau</em> sẽ có vector <em>gần nhau</em> trong không gian toán học.</p>
            <div class="example-box">
                "con mèo" và "con chó" → vector gần nhau (đều là thú cưng)<br>
                "con mèo" và "chiếc xe" → vector xa nhau (khác chủ đề)
            </div>
            <h4>Dùng để làm gì?</h4>
            <ul>
                <li>🔍 Tìm kiếm theo <strong>ý nghĩa</strong>, không chỉ theo từ khóa trùng khớp</li>
                <li>📚 Tìm đoạn tài liệu liên quan nhất cho RAG</li>
                <li>🧩 Gom nhóm nội dung tương tự (clustering)</li>
                <li>💡 Gợi ý sản phẩm/bài viết "giống" thứ bạn đang xem</li>
            </ul>
        `,
        detail: `
            <h3>📊 Vector Search hoạt động thế nào?</h3>
            <h4>Quy trình</h4>
            <ol>
                <li><strong>Embed:</strong> Chuyển mỗi đoạn text thành 1 vector (vài trăm - vài nghìn chiều)</li>
                <li><strong>Lưu trữ:</strong> Lưu vector vào vector database</li>
                <li><strong>Truy vấn:</strong> Embed câu hỏi của bạn thành vector</li>
                <li><strong>So khớp:</strong> Tìm các vector "gần" nhất (cosine similarity)</li>
            </ol>
            <h4>Vector Database phổ biến</h4>
            <table>
                <tr><th>Tên</th><th>Loại</th><th>Ghi chú</th></tr>
                <tr><td>Pinecone</td><td>Managed cloud</td><td>Dễ setup, có free tier</td></tr>
                <tr><td>Chroma</td><td>Open source, local</td><td>Phù hợp prototype</td></tr>
                <tr><td>Qdrant / Weaviate</td><td>Open source, self-host được</td><td>Mạnh cho production</td></tr>
                <tr><td>pgvector</td><td>Extension cho PostgreSQL</td><td>Tận dụng DB đã có sẵn</td></tr>
            </table>
            <h4>Embedding models phổ biến</h4>
            <p>OpenAI <code>text-embedding-3</code>, Google <code>gemini-embedding</code>, các model open-weight như <code>BGE</code>, <code>Qwen3-Embedding</code>. Model embedding tách biệt hoàn toàn với model chat (GPT, Claude, Gemini) - bạn có thể dùng embedding của hãng này với chatbot của hãng khác.</p>
        `,
        advanced: `
            <h3>🎓 Kỹ thuật nâng cao</h3>
            <h4>Cosine Similarity</h4>
            <div class="formula-box">
                similarity = (A · B) / (|A| × |B|) → giá trị từ -1 đến 1, càng gần 1 càng giống nhau
            </div>
            <h4>Hybrid Search</h4>
            <p>Kết hợp <strong>vector search</strong> (hiểu ý nghĩa) với <strong>keyword search / BM25</strong> (khớp từ chính xác) - thường cho kết quả tốt hơn dùng riêng lẻ.</p>
            <h4>Re-ranking</h4>
            <p>Vector search trả về top-K kết quả gần đúng → dùng một model re-ranker (nhỏ, chuyên biệt) chấm điểm lại để chọn ra top thật sự liên quan trước khi đưa vào context.</p>
            <h4>Chunking Strategy</h4>
            <ul>
                <li>Chia tài liệu quá nhỏ → mất ngữ cảnh</li>
                <li>Chia quá lớn → embedding kém chính xác, tốn token</li>
                <li>Kích thước hợp lý: 200-500 tokens/chunk, có overlap 10-20%</li>
            </ul>
            <div class="tip-box">
                💡 Chất lượng RAG phụ thuộc vào chunking và retrieval nhiều hơn là chọn LLM nào - đây là phần hay bị bỏ qua nhất.
            </div>
        `
    },
    'function-calling': {
        icon: '🛠️',
        title: 'Function Calling & Tool Use',
        category: 'ai-concepts',
        level: 'intermediate',
        connections: ['messages-deep', 'mcp-protocol', 'ai-agents'],
        simple: `
            <h3>🛠️ AI "gọi hàm" là gì?</h3>
            <p><strong>Function Calling (Tool Use)</strong> là cách bạn cho AI biết những "công cụ" nó có thể dùng - và AI tự quyết định khi nào cần gọi công cụ nào.</p>
            <div class="example-box">
                Bạn: "Giá Bitcoin hôm nay bao nhiêu?"<br>
                AI: <em>không tự bịa số</em> → gọi tool <code>get_crypto_price("BTC")</code><br>
                Tool trả về: 65,000 USD<br>
                AI: "Bitcoin hiện khoảng 65,000 USD."
            </div>
            <h4>Đây chính là nền tảng của mọi Agent</h4>
            <p>MCP, coding agent, Deep Research... tất cả đều dựng trên cơ chế function calling này.</p>
        `,
        detail: `
            <h3>📊 Cách hoạt động (API)</h3>
            <h4>4 bước</h4>
            <ol>
                <li><strong>Định nghĩa tool:</strong> Bạn mô tả function bằng JSON Schema (tên, tham số, kiểu dữ liệu)</li>
                <li><strong>Model quyết định:</strong> AI đọc câu hỏi, chọn có cần gọi tool không và gọi tool nào</li>
                <li><strong>Bạn thực thi:</strong> Code của bạn thực sự chạy function đó (gọi API, query DB...)</li>
                <li><strong>Trả kết quả lại:</strong> Gửi kết quả về cho AI để nó viết câu trả lời cuối cùng</li>
            </ol>
            <div class="formula-box">
                tools: [{ name: "get_weather", parameters: { city: "string" } }]
            </div>
            <h4>Client-side vs Server-side tools</h4>
            <table>
                <tr><th>Loại</th><th>Ai chạy?</th><th>Ví dụ</th></tr>
                <tr><td>Client-side</td><td>Code của bạn</td><td>Query database riêng, gọi API nội bộ</td></tr>
                <tr><td>Server-side</td><td>Nhà cung cấp AI chạy sẵn</td><td>Web search, code execution, computer use</td></tr>
            </table>
            <h4>Structured Output</h4>
            <p>Một ứng dụng khác của cơ chế này: ép AI trả lời đúng theo <strong>JSON Schema</strong> bạn định nghĩa, thay vì văn xuôi tự do - rất hữu ích khi bạn cần AI trả dữ liệu để code xử lý tiếp.</p>
        `,
        advanced: `
            <h3>🎓 Thiết kế Tool tốt</h3>
            <h4>Nguyên tắc viết tool description</h4>
            <ul>
                <li>Mô tả rõ <strong>khi nào dùng</strong>, không chỉ "làm gì"</li>
                <li>Đặt tên tham số dễ hiểu, có ví dụ trong description</li>
                <li>Càng ít tool trong 1 request càng chính xác (đừng nhét 50 tools cùng lúc)</li>
                <li>Trả kết quả tool ở dạng ngắn gọn, có cấu trúc (JSON), tránh text dài dòng</li>
            </ul>
            <h4>Parallel vs Sequential Tool Calls</h4>
            <p>Model hiện đại có thể gọi <strong>nhiều tools cùng lúc</strong> trong 1 lượt (ví dụ: vừa tra thời tiết Hà Nội vừa tra thời tiết Đà Lạt), thay vì phải hỏi từng cái một.</p>
            <h4>Rủi ro cần biết</h4>
            <div class="warning-box">
                ⚠️ <strong>Tool cần xác nhận trước khi chạy</strong> nếu có tác dụng phụ thật (gửi email, xóa file, thanh toán). Đừng để agent tự động thực thi hành động không thể hoàn tác mà không có bước duyệt.
            </div>
            <h4>Chi phí ẩn</h4>
            <p>Chỉ cần khai báo tools (kể cả không gọi) đã tốn thêm token cho system prompt mô tả tool. Nhiều tools + tool result dài → context đầy nhanh hơn bạn nghĩ.</p>
        `
    },
    'rag-deep': {
        icon: '📚',
        title: 'RAG (Retrieval-Augmented Generation)',
        category: 'ai-concepts',
        level: 'intermediate',
        connections: ['embeddings-vectors', 'ai-hallucination', 'context-window'],
        simple: `
            <h3>📚 RAG là gì?</h3>
            <p><strong>RAG</strong> = cho AI "mở sách tra cứu" trước khi trả lời, thay vì chỉ dựa vào những gì nó học thuộc lúc training.</p>
            <div class="example-box">
                Không RAG: "Chính sách nghỉ phép công ty là gì?" → AI đoán mò, có thể sai<br>
                Có RAG: AI tìm trong tài liệu HR thật của công ty → trả lời chính xác, trích được nguồn
            </div>
            <h4>Tại sao cần RAG?</h4>
            <ul>
                <li>📄 AI trả lời dựa trên tài liệu <strong>riêng của bạn</strong> (công ty, dự án)</li>
                <li>🕒 Không bị giới hạn bởi knowledge cutoff của model</li>
                <li>✅ Giảm hallucination - có thể trích dẫn nguồn cụ thể</li>
                <li>💰 Rẻ hơn fine-tuning rất nhiều</li>
            </ul>
        `,
        detail: `
            <h3>📊 Kiến trúc RAG cơ bản</h3>
            <div class="formula-box">
                Câu hỏi → Embed → Tìm chunks liên quan (vector search) → Ghép vào prompt → LLM trả lời
            </div>
            <h4>Quy trình xây dựng</h4>
            <ol>
                <li><strong>Ingest:</strong> Thu thập tài liệu (PDF, docs, web, database)</li>
                <li><strong>Chunk:</strong> Chia nhỏ thành đoạn vài trăm token</li>
                <li><strong>Embed & Index:</strong> Chuyển thành vector, lưu vào vector DB</li>
                <li><strong>Retrieve:</strong> Khi có câu hỏi, tìm top-K chunk liên quan nhất</li>
                <li><strong>Generate:</strong> Đưa chunks + câu hỏi vào prompt, LLM trả lời</li>
            </ol>
            <h4>RAG có sẵn (không cần tự xây)</h4>
            <table>
                <tr><th>Công cụ</th><th>Dùng cho</th></tr>
                <tr><td>Claude Projects / ChatGPT Projects</td><td>Upload file, RAG tự động phía sau</td></tr>
                <tr><td>NotebookLM</td><td>RAG trên tài liệu cá nhân, có trích dẫn</td></tr>
                <tr><td>Gemini File Search / OpenAI File Search</td><td>RAG qua API, không cần tự dựng vector DB</td></tr>
            </table>
        `,
        advanced: `
            <h3>🎓 RAG nâng cao</h3>
            <h4>Agentic RAG</h4>
            <p>Thay vì retrieve 1 lần rồi trả lời, AI <strong>tự lặp lại nhiều vòng</strong>: đọc kết quả đầu, nhận ra thiếu thông tin, tự viết truy vấn mới, tìm tiếp - giống cách Deep Research hoạt động.</p>
            <h4>Query Rewriting & HyDE</h4>
            <p>Câu hỏi gốc của người dùng thường ngắn/mơ hồ. Kỹ thuật <strong>HyDE</strong>: cho AI viết trước một "câu trả lời giả định", embed câu đó để tìm kiếm - thường khớp ngữ nghĩa tốt hơn embed câu hỏi gốc.</p>
            <h4>GraphRAG</h4>
            <p>Thay vì chỉ tìm theo vector, xây dựng <strong>knowledge graph</strong> (thực thể - quan hệ) từ tài liệu, giúp trả lời tốt hơn các câu hỏi cần tổng hợp thông tin từ nhiều nguồn khác nhau.</p>
            <h4>Đánh giá chất lượng RAG</h4>
            <ul>
                <li><strong>Faithfulness:</strong> Câu trả lời có bám sát chunk lấy được không?</li>
                <li><strong>Context Precision/Recall:</strong> Chunks lấy về có đúng và đủ không?</li>
                <li>Dùng framework như RAGAS để đo tự động</li>
            </ul>
            <div class="tip-box">
                💡 RAG không "chữa" được hallucination 100% - nếu retrieval tìm sai chunk, AI vẫn có thể trả lời sai một cách rất tự tin.
            </div>
        `
    },
    'mcp-protocol': {
        icon: '🔗',
        title: 'MCP (Model Context Protocol)',
        category: 'ai-concepts',
        level: 'intermediate',
        connections: ['ai-agents', 'copilot', 'cursor-ai', 'workspaces', 'function-calling'],
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
                <li><strong>MCP Host:</strong> Ứng dụng AI (Claude, ChatGPT, Gemini, Cursor, VS Code, Copilot)</li>
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
                <tr><td>Playwright</td><td>Điều khiển trình duyệt</td><td>Test UI, scraping</td></tr>
                <tr><td>Google Drive / Notion</td><td>Đọc/ghi tài liệu</td><td>Công việc văn phòng</td></tr>
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
            <h4>Hệ sinh thái 2026</h4>
            <ul>
                <li><strong>Chuẩn mở trung lập:</strong> MCP do Anthropic khởi xướng (11/2024), nay được chuyển giao cho Linux Foundation (Agentic AI Foundation) và được OpenAI, Google, Microsoft cùng hỗ trợ</li>
                <li><strong>Remote MCP + OAuth:</strong> Kết nối server qua URL, đăng nhập an toàn thay vì cài local</li>
                <li><strong>Connectors:</strong> Claude, ChatGPT, Gemini đều có "Connectors" - thực chất là MCP servers dựng sẵn</li>
                <li><strong>A2A (Agent-to-Agent):</strong> Giao thức bổ sung cho các agent nói chuyện với nhau; MCP là agent ↔ tool</li>
            </ul>
            <div class="warning-box">
                ⚠️ Bảo mật: Chỉ cài MCP server từ nguồn tin cậy. Server độc hại có thể "prompt injection" hoặc đánh cắp dữ liệu. Cấp quyền tối thiểu cần thiết.
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
                <tr><td>Claude</td><td>Projects + Memory</td><td>✅ PDF, code, docs</td><td>✅ Project instructions</td></tr>
                <tr><td>ChatGPT</td><td>Projects / Custom GPTs + Memory</td><td>✅ Files</td><td>✅ Instructions</td></tr>
                <tr><td>Gemini</td><td>Gems / NotebookLM</td><td>✅ Files, Drive</td><td>✅</td></tr>
                <tr><td>Cursor</td><td>.cursor/rules/ + AGENTS.md</td><td>✅ Codebase</td><td>✅ Rules files</td></tr>
                <tr><td>Copilot (VS Code)</td><td>.github/copilot-instructions.md + AGENTS.md</td><td>✅ Codebase</td><td>✅ Instructions</td></tr>
                <tr><td>Claude Code</td><td>CLAUDE.md + Skills</td><td>✅ Codebase</td><td>✅ Memory file</td></tr>
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
            <h4>Coding Workspace Setup (Developer)</h4>
            <p><strong>AGENTS.md</strong> ở root repo là chuẩn chung được Codex, Cursor, Copilot và nhiều agent khác đọc. Mỗi tool vẫn có file riêng (CLAUDE.md, .cursor/rules/, copilot-instructions.md).</p>
            <div class="example-box">
                AGENTS.md:<br>
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
                <strong>Plan Mode (Claude Code, Cursor, Copilot):</strong> Mô tả task → AI đọc code & tạo plan → Bạn review plan → AI implement → Review code
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
            <p>Từ 2025, "suy nghĩ trước khi trả lời" đã trở thành tính năng mặc định của hầu hết model lớn (không còn là dòng model riêng như o1/o3):</p>
            <table>
                <tr><th>Model</th><th>Reasoning</th><th>Đặc điểm</th></tr>
                <tr><td>GPT-6 (OpenAI)</td><td>Tự điều chỉnh độ sâu suy nghĩ</td><td>Mạnh về coding, dùng máy tính</td></tr>
                <tr><td>Claude (Extended/Adaptive Thinking)</td><td>Model tự quyết nghĩ bao lâu</td><td>Phân tích sâu, agentic coding</td></tr>
                <tr><td>Gemini Deep Think</td><td>Suy luận song song nhiều hướng</td><td>Toán, khoa học</td></tr>
                <tr><td>DeepSeek V4, Qwen 3.x</td><td>Open-weight reasoning</td><td>Miễn phí, tự host được</td></tr>
            </table>
            <h4>Khi nào dùng Reasoning Models?</h4>
            <ul>
                <li>✅ Bài toán phức tạp, nhiều bước</li>
                <li>✅ Code review, bug finding</li>
                <li>✅ Phân tích dữ liệu phức tạp</li>
                <li>❌ Không cần cho chat đơn giản (tốn token) - chọn mức "effort" thấp hoặc model nhanh</li>
            </ul>
            <div class="tip-box">
                💡 Reasoning models thường chậm hơn và đắt hơn, nhưng chính xác hơn nhiều cho task phức tạp.
            </div>
        `
    }
};
