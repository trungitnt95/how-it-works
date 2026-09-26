// AI Techniques
const techniquesData = {
    'context-window': {
        icon: '📏',
        title: 'Context Window',
        category: 'techniques',
        level: 'intermediate',
        connections: ['token-optimization', 'chatgpt-intro', 'temperature'],
        simple: `
            <h3>📏 Context Window là gì?</h3>
            <p><strong>Context window</strong> là lượng text tối đa AI có thể "nhớ" trong một cuộc hội thoại.</p>
            <div class="example-box">
                <strong>Ví dụ:</strong> Các model hàng đầu 2026 (GPT-6, Claude, Gemini) có context ~1 triệu tokens ≈ khoảng 2.000+ trang sách.
            </div>
            <h4>Tại sao quan trọng?</h4>
            <ul>
                <li>Chat quá dài → AI quên đầu cuộc hội thoại (hoặc app tự "nén"/tóm tắt lại)</li>
                <li>Paste file lớn → Có thể vượt giới hạn</li>
                <li>Mỗi model có context khác nhau</li>
            </ul>
        `,
        detail: `
            <h3>📊 So sánh Context Window (09/2026)</h3>
            <table>
                <tr><th>Model</th><th>Context</th><th>Tương đương</th></tr>
                <tr><td>GPT-6 (Astra/Sol/Luna)</td><td>~1M tokens</td><td>~2.500 trang</td></tr>
                <tr><td>Claude (Opus/Sonnet 4.6+)</td><td>1M tokens</td><td>~2.500 trang</td></tr>
                <tr><td>Gemini 3.x Pro</td><td>1M tokens</td><td>~2.500 trang</td></tr>
                <tr><td>Open-weight (Qwen, Gemma 3...)</td><td>128K - 256K tokens</td><td>~300-600 trang</td></tr>
            </table>
            <div class="tip-box">
                💡 Context lớn ≠ nhớ tốt. Bản chat trên app thường giới hạn thấp hơn API, và chất lượng vẫn giảm khi context quá dài. Nhét ít nhưng đúng thông tin vẫn tốt hơn.
            </div>
            <h4>Mẹo quản lý context</h4>
            <ul>
                <li>Tóm tắt cuộc hội thoại dài</li>
                <li>Bắt đầu chat mới cho topic mới</li>
                <li>Đặt thông tin quan trọng ở đầu prompt</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 Tối ưu Context Window</h3>
            <h4>Lost in the Middle</h4>
            <p>AI chú ý tốt nhất ở đầu và cuối context - thông tin ở giữa dễ bị bỏ qua.</p>
            <h4>Context Engineering</h4>
            <p>Khái niệm phổ biến từ 2025: thay vì chỉ "viết prompt hay", hãy <strong>thiết kế toàn bộ những gì đưa vào context</strong> - instructions, tài liệu, lịch sử, kết quả tool. Agent dài hơi dùng thêm <em>compaction</em> (tự tóm tắt lịch sử) và <em>memory file</em> để không bị tràn context.</p>
            <h4>RAG (Retrieval-Augmented Generation)</h4>
            <p>Thay vì nhét mọi thứ vào context, dùng search để lấy phần liên quan nhất:</p>
            <ul>
                <li>Chia tài liệu thành chunks</li>
                <li>Embed và index chunks</li>
                <li>Search chunks liên quan cho mỗi query</li>
                <li>Đưa chunks vào context</li>
            </ul>
        `
    },
    'temperature': {
        icon: '🌡️',
        title: 'Temperature & Parameters',
        category: 'techniques',
        level: 'intermediate',
        connections: ['context-window', 'token-optimization', 'advanced-prompting'],
        simple: `
            <h3>🌡️ Temperature là gì?</h3>
            <p><strong>Temperature</strong> kiểm soát mức độ "sáng tạo" của AI.</p>
            <ul>
                <li><strong>Temperature thấp (0-0.3):</strong> Chính xác, nhất quán</li>
                <li><strong>Temperature trung (0.4-0.7):</strong> Cân bằng</li>
                <li><strong>Temperature cao (0.8-1.0):</strong> Sáng tạo, đa dạng</li>
            </ul>
            <div class="example-box">
                <strong>Viết code:</strong> Temperature = 0 (chính xác)<br>
                <strong>Viết thơ:</strong> Temperature = 0.8 (sáng tạo)
            </div>
        `,
        detail: `
            <h3>📊 Các parameters quan trọng</h3>
            <table>
                <tr><th>Parameter</th><th>Tác dụng</th><th>Giá trị</th></tr>
                <tr><td>Temperature</td><td>Độ ngẫu nhiên</td><td>0 - 2</td></tr>
                <tr><td>Top-P</td><td>Nucleus sampling</td><td>0 - 1</td></tr>
                <tr><td>Max Tokens</td><td>Độ dài output</td><td>1 - 4096+</td></tr>
                <tr><td>Frequency Penalty</td><td>Giảm lặp từ</td><td>0 - 2</td></tr>
                <tr><td>Presence Penalty</td><td>Tăng đa dạng topic</td><td>0 - 2</td></tr>
            </table>
            <div class="tip-box">
                💡 Hầu hết trường hợp, chỉ cần điều chỉnh temperature là đủ. Lưu ý: với nhiều reasoning model mới, temperature bị cố định - thay vào đó bạn chỉnh <strong>reasoning effort</strong> (low/medium/high) hoặc ngân sách "thinking".
            </div>
        `,
        advanced: `
            <h3>🎓 Fine-tuning Parameters</h3>
            <h4>Temperature vs Top-P</h4>
            <p>Không nên thay đổi cả hai cùng lúc. Chọn một:</p>
            <ul>
                <li><strong>Temperature:</strong> Kiểm soát toàn bộ phân phối</li>
                <li><strong>Top-P:</strong> Chỉ xét top tokens có tổng probability = P</li>
            </ul>
            <h4>Recommended Settings</h4>
            <table>
                <tr><th>Task</th><th>Temp</th><th>Top-P</th></tr>
                <tr><td>Code generation</td><td>0</td><td>1</td></tr>
                <tr><td>Data extraction</td><td>0</td><td>1</td></tr>
                <tr><td>Creative writing</td><td>0.7</td><td>0.9</td></tr>
                <tr><td>Brainstorming</td><td>1.0</td><td>0.95</td></tr>
            </table>
        `
    },
    'token-optimization': {
        icon: '💰',
        title: 'Tối Ưu Token',
        category: 'techniques',
        level: 'intermediate',
        connections: ['context-window', 'temperature', 'api-free-credits'],
        simple: `
            <h3>💰 Tại sao phải tối ưu token?</h3>
            <p>Token = Tiền. Dùng ít token hơn = Tiết kiệm hơn + AI trả lời nhanh hơn.</p>
            <div class="example-box">
                <strong>Lãng phí:</strong> "Xin chào AI thân mến, tôi rất muốn nhờ bạn giúp tôi..."<br>
                <strong>Tối ưu:</strong> "Viết email xin nghỉ phép 3 ngày, giọng chuyên nghiệp."
            </div>
        `,
        detail: `
            <h3>📊 Cách tối ưu token</h3>
            <h4>1. Viết prompt ngắn gọn</h4>
            <ul>
                <li>Bỏ từ thừa, câu rườm rà</li>
                <li>Dùng bullet points thay paragraph</li>
                <li>Chỉ đưa context cần thiết</li>
            </ul>
            <h4>2. Kiểm soát output</h4>
            <ul>
                <li>Yêu cầu "trả lời ngắn gọn"</li>
                <li>Set max_tokens trong API</li>
                <li>Yêu cầu format cụ thể (JSON, list)</li>
            </ul>
            <h4>3. Chọn model phù hợp</h4>
            <p>Task đơn giản → Dùng model nhỏ, rẻ hơn.</p>
        `,
        advanced: `
            <h3>🎓 Token Economics</h3>
            <h4>Bảng giá token theo tầng (USD/1M tokens, 09/2026)</h4>
            <table>
                <tr><th>Tầng</th><th>Ví dụ</th><th>Input</th><th>Output</th></tr>
                <tr><td>Nhỏ / nhanh</td><td>GPT-6 Luna, Gemini Flash-Lite, Claude Haiku 4.5</td><td>$0.10 - $1</td><td>$0.50 - $5</td></tr>
                <tr><td>Cân bằng</td><td>GPT-6 Sol, Claude Sonnet 5, Gemini 3.1 Pro</td><td>~$2</td><td>$10 - $12</td></tr>
                <tr><td>Flagship</td><td>GPT-6 Astra, Claude Fable 5.1, Claude Opus 5.5</td><td>$4 - $10</td><td>$20 - $50</td></tr>
            </table>
            <h4>Chiến lược tiết kiệm</h4>
            <ul>
                <li>Dùng model tầng nhỏ cho task đơn giản (phân loại, trích xuất, tóm tắt)</li>
                <li>Prompt caching cho phần lặp lại (system prompt, tài liệu) - rẻ hơn ~90%</li>
                <li>Batch API cho task không gấp - giảm 50%</li>
                <li>Giảm reasoning effort khi không cần suy nghĩ sâu</li>
            </ul>
        `
    },
    'ai-hallucination': {
        icon: '👁️',
        title: 'Xử Lý Hallucination',
        category: 'techniques',
        level: 'intermediate',
        connections: ['ai-limitations', 'fact-checking', 'temperature'],
        simple: `
            <h3>👁️ Hallucination là gì?</h3>
            <p><strong>Hallucination</strong> là khi AI <em>bịa ra thông tin</em> nghe rất thật nhưng hoàn toàn sai.</p>
            <div class="warning-box">
                ⚠️ AI có thể tạo ra trích dẫn giả, số liệu sai, thậm chí link không tồn tại!
            </div>
            <h4>Ví dụ phổ biến</h4>
            <ul>
                <li>Bịa tên sách không tồn tại</li>
                <li>Tạo số liệu thống kê giả</li>
                <li>Trích dẫn nguồn không có thật</li>
            </ul>
        `,
        detail: `
            <h3>📊 Cách phát hiện Hallucination</h3>
            <h4>Dấu hiệu nhận biết</h4>
            <ul>
                <li>Quá cụ thể với số liệu lạ</li>
                <li>Tự tin 100% về thông tin khó verify</li>
                <li>Link URL không hoạt động</li>
                <li>Trích dẫn người nổi tiếng quá "hoàn hảo"</li>
            </ul>
            <h4>Cách giảm Hallucination</h4>
            <ol>
                <li>Yêu cầu AI: "Nếu không chắc, hãy nói không biết"</li>
                <li>Set temperature = 0 (nếu model cho phép)</li>
                <li>Bật web search và yêu cầu trích dẫn nguồn</li>
                <li>Cross-check với AI khác</li>
            </ol>
        `,
        advanced: `
            <h3>🎓 Kỹ thuật chống Hallucination</h3>
            <h4>Grounding</h4>
            <p>Cung cấp tài liệu tham khảo trong prompt, yêu cầu AI chỉ trả lời dựa trên đó.</p>
            <h4>Self-Verification</h4>
            <div class="example-box">
                Bước 1: AI trả lời câu hỏi<br>
                Bước 2: "Hãy kiểm tra lại câu trả lời trên, liệt kê những phần có thể sai"<br>
                Bước 3: "Sửa lại dựa trên phân tích đó"
            </div>
            <h4>RAG (Retrieval-Augmented Generation)</h4>
            <p>Kết nối AI với database thực để trả lời dựa trên dữ liệu thật.</p>
        `
    },
    'fact-checking': {
        icon: '✅',
        title: 'Kiểm Tra Thông Tin',
        category: 'techniques',
        level: 'beginner',
        connections: ['ai-hallucination', 'ai-limitations', 'ai-tools-overview'],
        simple: `
            <h3>✅ Luôn kiểm tra lại!</h3>
            <p>Quy tắc số 1 khi dùng AI: <strong>Không tin mù quáng</strong>.</p>
            <h4>Checklist kiểm tra</h4>
            <ul>
                <li>🔍 Google lại thông tin quan trọng</li>
                <li>📚 Kiểm tra nguồn AI trích dẫn</li>
                <li>🤔 Hỏi lại AI cùng câu hỏi theo cách khác</li>
                <li>👨‍💼 Hỏi chuyên gia nếu cần</li>
            </ul>
        `,
        detail: `
            <h3>📊 Quy trình Fact-Check</h3>
            <h4>3 bước kiểm tra</h4>
            <ol>
                <li><strong>Verify Facts:</strong> Kiểm tra số liệu, ngày tháng, tên</li>
                <li><strong>Check Sources:</strong> Link có hoạt động không? Nguồn uy tín không?</li>
                <li><strong>Cross-Reference:</strong> So sánh với ít nhất 2 nguồn khác</li>
            </ol>
            <h4>Công cụ hỗ trợ</h4>
            <table>
                <tr><th>Công cụ</th><th>Dùng cho</th></tr>
                <tr><td>Perplexity / Deep Research</td><td>AI search có trích dẫn</td></tr>
                <tr><td>Google Scholar</td><td>Nghiên cứu khoa học</td></tr>
                <tr><td>Snopes</td><td>Kiểm tra tin giả</td></tr>
            </table>
        `,
        advanced: `
            <h3>🎓 Automated Fact-Checking</h3>
            <h4>Multi-AI Verification</h4>
            <p>Hỏi cùng câu hỏi trên ChatGPT, Claude, Gemini - so sánh kết quả:</p>
            <ul>
                <li>Cả 3 đồng ý → Khả năng cao đúng</li>
                <li>Kết quả khác nhau → Cần verify thêm</li>
            </ul>
            <h4>Build Fact-Check Pipeline</h4>
            <ol>
                <li>AI 1: Tạo nội dung</li>
                <li>AI 2: Kiểm tra facts trong nội dung</li>
                <li>Search API: Verify từng claim</li>
                <li>AI 3: Tổng hợp và đánh giá</li>
            </ol>
        `
    }
};
