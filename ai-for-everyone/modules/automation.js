// AI Automation
const automationData = {
    'ai-workflow': {
        icon: '⚡',
        title: 'AI Workflow Tự Động',
        category: 'automation',
        level: 'intermediate',
        connections: ['background-tasks', 'scheduling', 'api-integration'],
        simple: `
            <h3>⚡ AI Workflow là gì?</h3>
            <p><strong>AI Workflow</strong> là chuỗi các bước tự động sử dụng AI để hoàn thành công việc.</p>
            <div class="example-box">
                <strong>Ví dụ workflow:</strong><br>
                Email mới → AI đọc & phân loại → AI soạn reply → Gửi tự động
            </div>
            <h4>Công cụ tạo workflow</h4>
            <ul>
                <li>⚡ <strong>Zapier:</strong> Kết nối 5000+ apps</li>
                <li>🔧 <strong>Make.com:</strong> Visual workflow builder</li>
                <li>🤖 <strong>n8n:</strong> Open source, self-hosted</li>
            </ul>
        `,
        detail: `
            <h3>📊 Xây dựng AI Workflow</h3>
            <h4>Cấu trúc Workflow</h4>
            <ol>
                <li><strong>Trigger:</strong> Sự kiện kích hoạt (email mới, form submit, schedule)</li>
                <li><strong>Process:</strong> AI xử lý dữ liệu (phân tích, tạo nội dung)</li>
                <li><strong>Action:</strong> Hành động (gửi email, update database)</li>
            </ol>
            <h4>Ví dụ Workflows phổ biến</h4>
            <table>
                <tr><th>Workflow</th><th>Trigger</th><th>AI Process</th><th>Action</th></tr>
                <tr><td>Email auto-reply</td><td>Email mới</td><td>Phân loại + Draft reply</td><td>Gửi email</td></tr>
                <tr><td>Content pipeline</td><td>Schedule hàng ngày</td><td>Viết bài blog</td><td>Post lên WordPress</td></tr>
                <tr><td>Data analysis</td><td>File mới upload</td><td>Phân tích CSV</td><td>Gửi báo cáo Slack</td></tr>
            </table>
        `,
        advanced: `
            <h3>🎓 Advanced Workflows</h3>
            <h4>Multi-Step AI Pipeline</h4>
            <div class="example-box">
                1. Scrape data from web<br>
                2. AI 1: Clean & structure data<br>
                3. AI 2: Analyze patterns<br>
                4. AI 3: Generate report<br>
                5. Send to Slack + Save to Google Sheets
            </div>
            <h4>Error Handling</h4>
            <ul>
                <li>Retry logic cho API failures</li>
                <li>Fallback models khi primary fail</li>
                <li>Alert khi workflow lỗi</li>
                <li>Logging mọi steps</li>
            </ul>
        `
    },
    'background-tasks': {
        icon: '🔄',
        title: 'Chạy Ngầm & Background',
        category: 'automation',
        level: 'intermediate',
        connections: ['ai-workflow', 'scheduling', 'batch-processing'],
        simple: `
            <h3>🔄 Background Tasks</h3>
            <p>Để AI <strong>chạy ngầm</strong> xử lý công việc trong khi bạn làm việc khác.</p>
            <h4>Ý tưởng background tasks</h4>
            <ul>
                <li>🔍 AI research topic tự động</li>
                <li>📊 Phân tích data hàng ngày</li>
                <li>✍️ Tạo content draft qua đêm</li>
                <li>📧 Xử lý email tự động</li>
            </ul>
        `,
        detail: `
            <h3>📊 Setup Background Tasks</h3>
            <h4>Sử dụng ChatGPT trong background</h4>
            <ul>
                <li>Mở tab riêng cho long-running tasks</li>
                <li>Gửi prompt lớn, để AI xử lý</li>
                <li>Quay lại check kết quả sau</li>
            </ul>
            <h4>Automation Tools</h4>
            <table>
                <tr><th>Tool</th><th>Dùng cho</th><th>Miễn phí?</th></tr>
                <tr><td>Zapier</td><td>Automation đơn giản</td><td>5 zaps free</td></tr>
                <tr><td>Make.com</td><td>Visual workflows</td><td>1000 ops/th</td></tr>
                <tr><td>n8n</td><td>Self-hosted</td><td>Hoàn toàn free</td></tr>
                <tr><td>Python scripts</td><td>Custom tasks</td><td>Free</td></tr>
            </table>
            <div class="tip-box">
                💡 Bắt đầu với Zapier free tier, upgrade lên n8n khi cần nhiều automation hơn.
            </div>
        `,
        advanced: `
            <h3>🎓 Advanced Background Processing</h3>
            <h4>Python Automation</h4>
            <div class="formula-box">
                cron job → Python script → OpenAI API → Save results
            </div>
            <h4>Queue System</h4>
            <p>Dùng message queue để xử lý tasks tuần tự:</p>
            <ul>
                <li><strong>Redis Queue:</strong> Đơn giản, nhẹ</li>
                <li><strong>Celery:</strong> Python, mạnh mẽ</li>
                <li><strong>BullMQ:</strong> Node.js</li>
            </ul>
            <h4>Monitoring</h4>
            <ul>
                <li>Track success/failure rate</li>
                <li>Monitor API costs</li>
                <li>Alert khi có lỗi</li>
            </ul>
        `
    },
    'scheduling': {
        icon: '📅',
        title: 'Lập Lịch Tự Động',
        category: 'automation',
        level: 'intermediate',
        connections: ['ai-workflow', 'background-tasks', 'batch-processing'],
        simple: `
            <h3>📅 Lập lịch AI tasks</h3>
            <p>Đặt lịch để AI <strong>tự động chạy</strong> vào thời gian cố định.</p>
            <h4>Ví dụ scheduling</h4>
            <ul>
                <li>⏰ Mỗi sáng 8h: AI tóm tắt tin tức</li>
                <li>📊 Mỗi thứ 2: AI phân tích data tuần trước</li>
                <li>✍️ Mỗi ngày: AI draft social media posts</li>
                <li>📧 Mỗi tối: AI tóm tắt emails quan trọng</li>
            </ul>
        `,
        detail: `
            <h3>📊 Công cụ Scheduling</h3>
            <h4>No-Code Solutions</h4>
            <table>
                <tr><th>Tool</th><th>Scheduling</th><th>AI Integration</th></tr>
                <tr><td>Zapier</td><td>Schedule trigger</td><td>OpenAI, Claude</td></tr>
                <tr><td>Make.com</td><td>Cron-like scheduling</td><td>Nhiều AI modules</td></tr>
                <tr><td>IFTTT</td><td>Time triggers</td><td>Cơ bản</td></tr>
            </table>
            <h4>Mẹo scheduling</h4>
            <ul>
                <li>Chạy tasks nặng vào off-peak hours</li>
                <li>Stagger tasks để tránh rate limits</li>
                <li>Có fallback cho mỗi scheduled task</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 Cron Jobs & Advanced Scheduling</h3>
            <h4>Linux Cron</h4>
            <div class="formula-box">
                0 8 * * * python3 /path/to/ai_task.py
            </div>
            <p>Chạy script AI mỗi ngày lúc 8:00 AM.</p>
            <h4>GitHub Actions Scheduling</h4>
            <p>Dùng GitHub Actions chạy AI tasks miễn phí:</p>
            <div class="example-box">
                schedule:<br>
                &nbsp;&nbsp;- cron: '0 8 * * *'<br>
                → Trigger workflow mỗi sáng 8h UTC
            </div>
            <h4>Serverless Scheduling</h4>
            <ul>
                <li>AWS Lambda + EventBridge</li>
                <li>Google Cloud Functions + Cloud Scheduler</li>
                <li>Vercel Cron Jobs</li>
            </ul>
        `
    },
    'api-integration': {
        icon: '🔌',
        title: 'Tích Hợp API',
        category: 'automation',
        level: 'advanced',
        connections: ['ai-workflow', 'batch-processing', 'api-free-credits'],
        simple: `
            <h3>🔌 API Integration</h3>
            <p><strong>API</strong> cho phép bạn gọi AI từ code, tích hợp vào ứng dụng riêng.</p>
            <h4>Tại sao dùng API?</h4>
            <ul>
                <li>🤖 Tự động hóa hoàn toàn</li>
                <li>📊 Xử lý data hàng loạt</li>
                <li>🔧 Tùy chỉnh behavior</li>
                <li>💰 Trả tiền theo usage</li>
            </ul>
        `,
        detail: `
            <h3>📊 Bắt đầu với AI API</h3>
            <h4>OpenAI API Example</h4>
            <div class="formula-box">
                POST https://api.openai.com/v1/chat/completions
            </div>
            <h4>Các bước setup</h4>
            <ol>
                <li>Tạo account trên platform AI</li>
                <li>Lấy API key</li>
                <li>Cài SDK (Python: openai, JS: openai)</li>
                <li>Gọi API từ code</li>
            </ol>
            <h4>API Providers</h4>
            <table>
                <tr><th>Provider</th><th>Models</th><th>SDK</th></tr>
                <tr><td>OpenAI</td><td>GPT-3.5, GPT-4</td><td>Python, JS, etc.</td></tr>
                <tr><td>Anthropic</td><td>Claude 3</td><td>Python, TS</td></tr>
                <tr><td>Google</td><td>Gemini</td><td>Python, JS</td></tr>
                <tr><td>OpenRouter</td><td>100+ models</td><td>OpenAI-compatible</td></tr>
            </table>
        `,
        advanced: `
            <h3>🎓 Production API Setup</h3>
            <h4>Best Practices</h4>
            <ul>
                <li><strong>Rate Limiting:</strong> Tự giới hạn requests</li>
                <li><strong>Retry Logic:</strong> Exponential backoff</li>
                <li><strong>Caching:</strong> Cache responses giống nhau</li>
                <li><strong>Monitoring:</strong> Track latency, errors, costs</li>
            </ul>
            <h4>API Gateway Pattern</h4>
            <div class="example-box">
                Your App → API Gateway → Load Balancer → [OpenAI, Claude, Gemini]<br>
                Gateway xử lý: auth, rate limit, caching, failover
            </div>
            <h4>Streaming Responses</h4>
            <p>Dùng Server-Sent Events để stream tokens real-time thay vì chờ full response.</p>
        `
    },
    'batch-processing': {
        icon: '📦',
        title: 'Xử Lý Hàng Loạt',
        category: 'automation',
        level: 'advanced',
        connections: ['api-integration', 'background-tasks', 'scheduling'],
        simple: `
            <h3>📦 Batch Processing</h3>
            <p>Xử lý <strong>hàng trăm/ngàn items</strong> cùng lúc bằng AI.</p>
            <h4>Ví dụ batch processing</h4>
            <ul>
                <li>📄 Dịch 100 tài liệu cùng lúc</li>
                <li>📊 Phân tích 1000 reviews sản phẩm</li>
                <li>📧 Cá nhân hóa 500 emails</li>
                <li>🏷️ Gắn tag cho 10000 sản phẩm</li>
            </ul>
        `,
        detail: `
            <h3>📊 Cách làm Batch Processing</h3>
            <h4>Quy trình</h4>
            <ol>
                <li><strong>Chuẩn bị data:</strong> CSV, JSON, database</li>
                <li><strong>Tạo prompt template:</strong> Prompt có biến thay đổi</li>
                <li><strong>Loop qua data:</strong> Gửi từng item qua AI API</li>
                <li><strong>Thu thập kết quả:</strong> Save vào file/database</li>
            </ol>
            <h4>Lưu ý quan trọng</h4>
            <ul>
                <li>Rate limits: Không gửi quá nhanh</li>
                <li>Error handling: Retry khi fail</li>
                <li>Cost estimation: Tính trước chi phí</li>
                <li>Progress tracking: Biết đang ở đâu</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 Production Batch Processing</h3>
            <h4>OpenAI Batch API</h4>
            <p>OpenAI có Batch API chuyên dụng: rẻ hơn 50%, không bị rate limit.</p>
            <h4>Parallel Processing</h4>
            <div class="example-box">
                Thay vì: 1 request → wait → 1 request → wait<br>
                Dùng: 10 requests song song → wait → 10 requests
            </div>
            <h4>Architecture</h4>
            <ul>
                <li><strong>Producer:</strong> Đọc data, tạo tasks</li>
                <li><strong>Queue:</strong> Redis/RabbitMQ buffer</li>
                <li><strong>Workers:</strong> N workers xử lý song song</li>
                <li><strong>Collector:</strong> Thu thập và lưu kết quả</li>
            </ul>
            <div class="tip-box">
                💡 Luôn test với 10-20 items trước khi chạy full batch.
            </div>
        `
    }
};
