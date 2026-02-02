// ==================== COMPONENT DATA (20 Components) ====================

const componentData = {
    // ==================== FOUNDATION (1-4) ====================
    'sa-role': {
        icon: '🏗️',
        title: 'Solution Architect Role',
        order: 1,
        category: 'foundation',
        connections: ['requirements', 'stakeholder', 'business-analysis', 'arch-patterns'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> Solution Architect (SA) là "kiến trúc sư" của phần mềm - người thiết kế bản vẽ tổng thể cho hệ thống.</p>
            <div class="example-box">
                <strong>Ví dụ thực tế:</strong><br>
                Giống như kiến trúc sư xây nhà vẽ bản thiết kế trước khi thợ xây làm việc,<br>
                SA thiết kế hệ thống phần mềm trước khi developers code.
            </div>
            <h4>📌 SA làm gì hàng ngày?</h4>
            <ul>
                <li>📋 Phân tích yêu cầu từ khách hàng</li>
                <li>📐 Thiết kế kiến trúc hệ thống</li>
                <li>🗣️ Họp với stakeholders (PM, Dev, Client)</li>
                <li>📝 Viết tài liệu kỹ thuật</li>
                <li>✅ Review thiết kế và code</li>
            </ul>
            <div class="tip-box">
                <strong>💡 Mẹo:</strong> SA không code nhiều nhưng phải HIỂU code rất sâu!
            </div>
        `,
        detail: `
            <p><strong>Solution Architect</strong> là cầu nối giữa business và technology, chịu trách nhiệm đảm bảo giải pháp kỹ thuật đáp ứng được mục tiêu kinh doanh.</p>
            <h4>🎯 Trách nhiệm chính:</h4>
            <ul>
                <li><strong>Technical Vision:</strong> Định hướng công nghệ cho dự án</li>
                <li><strong>Solution Design:</strong> Thiết kế giải pháp end-to-end</li>
                <li><strong>Technology Selection:</strong> Chọn tech stack phù hợp</li>
                <li><strong>Risk Assessment:</strong> Đánh giá rủi ro kỹ thuật</li>
                <li><strong>Quality Assurance:</strong> Đảm bảo chất lượng kiến trúc</li>
            </ul>
            <h4>📊 So sánh các loại Architect:</h4>
            <table style="width:100%; border-collapse: collapse; margin: 1rem 0;">
                <tr style="border-bottom: 1px solid rgba(255,255,255,0.2);">
                    <td style="padding: 0.5rem;"><strong>Solution Architect</strong></td>
                    <td style="padding: 0.5rem;">Thiết kế giải pháp cho 1 dự án/sản phẩm cụ thể</td>
                </tr>
                <tr style="border-bottom: 1px solid rgba(255,255,255,0.2);">
                    <td style="padding: 0.5rem;"><strong>Enterprise Architect</strong></td>
                    <td style="padding: 0.5rem;">Thiết kế cho toàn bộ tổ chức</td>
                </tr>
                <tr style="border-bottom: 1px solid rgba(255,255,255,0.2);">
                    <td style="padding: 0.5rem;"><strong>Technical Architect</strong></td>
                    <td style="padding: 0.5rem;">Chuyên sâu về 1 công nghệ cụ thể</td>
                </tr>
                <tr>
                    <td style="padding: 0.5rem;"><strong>Cloud Architect</strong></td>
                    <td style="padding: 0.5rem;">Chuyên về cloud infrastructure</td>
                </tr>
            </table>
        `,
        advanced: `
            <h4>🔧 Frameworks & Methodologies:</h4>
            <ul>
                <li><strong>TOGAF:</strong> The Open Group Architecture Framework</li>
                <li><strong>Zachman:</strong> Enterprise architecture framework</li>
                <li><strong>C4 Model:</strong> Context, Container, Component, Code</li>
                <li><strong>Arc42:</strong> Documentation template</li>
            </ul>
            <h4>📈 Career Path:</h4>
            <div class="code-block">
Junior Dev → Senior Dev → Tech Lead → Solution Architect → Enterprise Architect / CTO
            </div>
            <h4>💰 Salary Range (2024):</h4>
            <ul>
                <li><strong>Vietnam:</strong> 50M - 150M VND/month</li>
                <li><strong>Singapore:</strong> 10K - 18K SGD/month</li>
                <li><strong>US:</strong> $140K - $250K/year</li>
            </ul>
        `,
        practice: `
            <h4>💻 Bài tập thực hành:</h4>
            <div class="example-box">
                <strong>Scenario:</strong> Bạn được yêu cầu thiết kế hệ thống e-commerce cho startup với 10,000 users/ngày.
                <br><br>
                <strong>Tasks:</strong>
                <ol>
                    <li>Liệt kê các stakeholders chính</li>
                    <li>Xác định functional requirements (5-10 items)</li>
                    <li>Xác định non-functional requirements</li>
                    <li>Vẽ high-level architecture diagram</li>
                </ol>
            </div>
            <h4>📚 Resources để học:</h4>
            <ul>
                <li>📖 "Fundamentals of Software Architecture" - Mark Richards</li>
                <li>📖 "Designing Data-Intensive Applications" - Martin Kleppmann</li>
                <li>🎥 ByteByteGo YouTube Channel</li>
                <li>🌐 roadmap.sh/software-architect</li>
            </ul>
        `,
        keyPoints: ['Technical Vision', 'Solution Design', 'Stakeholder Management', 'Trade-offs', 'Documentation']
    },

    'requirements': {
        icon: '📋',
        title: 'Requirements Analysis',
        order: 2,
        category: 'foundation',
        connections: ['sa-role', 'stakeholder', 'business-analysis'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> Yêu cầu là những gì hệ thống CẦN LÀM và CẦN CÓ.</p>
            <div class="example-box">
                <strong>Ví dụ app đặt xe:</strong><br>
                • <strong>Functional:</strong> Đặt xe, theo dõi tài xế, thanh toán<br>
                • <strong>Non-functional:</strong> Load trong 2s, 99.9% uptime, bảo mật
            </div>
            <h4>📌 2 loại yêu cầu chính:</h4>
            <ul>
                <li>✅ <strong>Functional Requirements (FR):</strong> Hệ thống làm GÌ?</li>
                <li>⚡ <strong>Non-Functional Requirements (NFR):</strong> Hệ thống làm TỐT như thế nào?</li>
            </ul>
            <div class="warning-box">
                <strong>⚠️ Lưu ý:</strong> 80% dự án thất bại do hiểu sai requirements!
            </div>
        `,
        detail: `
            <h4>📋 Functional Requirements (FR):</h4>
            <ul>
                <li>User stories và use cases</li>
                <li>Business logic và workflows</li>
                <li>Data requirements</li>
                <li>Integration requirements</li>
            </ul>
            <h4>⚡ Non-Functional Requirements (NFR):</h4>
            <ul>
                <li><strong>Performance:</strong> Response time, throughput</li>
                <li><strong>Scalability:</strong> Xử lý tăng tải</li>
                <li><strong>Availability:</strong> Uptime (99.9% = 8.76h downtime/năm)</li>
                <li><strong>Security:</strong> Authentication, authorization, encryption</li>
                <li><strong>Maintainability:</strong> Dễ bảo trì, cập nhật</li>
            </ul>
            <h4>🔍 Kỹ thuật thu thập:</h4>
            <ul>
                <li>Interviews & Workshops</li>
                <li>Document Analysis</li>
                <li>Observation</li>
                <li>Prototyping</li>
            </ul>
        `,
        advanced: `
            <h4>📊 NFR Metrics:</h4>
            <div class="code-block">
Availability:
- 99% = 3.65 days downtime/year
- 99.9% = 8.76 hours/year
- 99.99% = 52.56 minutes/year
- 99.999% = 5.26 minutes/year (Five 9s)

Performance:
- P50: 50% requests < X ms
- P95: 95% requests < X ms
- P99: 99% requests < X ms
            </div>
            <h4>🔧 Requirements Traceability:</h4>
            <p>Mỗi requirement cần được trace từ:</p>
            <p>Business Need → Requirement → Design → Implementation → Test</p>
        `,
        practice: `
            <h4>💻 Bài tập:</h4>
            <div class="example-box">
                <strong>Viết requirements cho hệ thống Banking:</strong>
                <ol>
                    <li>Liệt kê 10 Functional Requirements</li>
                    <li>Liệt kê 5 Non-Functional Requirements với metrics cụ thể</li>
                    <li>Xác định constraints (ràng buộc)</li>
                </ol>
            </div>
        `,
        keyPoints: ['Functional', 'Non-Functional', 'Traceability', 'Metrics', 'Constraints']
    },

    'stakeholder': {
        icon: '👥',
        title: 'Stakeholder Management',
        order: 3,
        category: 'foundation',
        connections: ['sa-role', 'requirements', 'communication'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> Stakeholders là TẤT CẢ những người liên quan đến dự án.</p>
            <div class="example-box">
                <strong>Các stakeholders thường gặp:</strong><br>
                👔 CEO/CTO - Quyết định ngân sách<br>
                📊 Product Manager - Định hướng sản phẩm<br>
                💻 Developers - Implement solution<br>
                🧪 QA Team - Test quality<br>
                👥 End Users - Sử dụng sản phẩm
            </div>
            <h4>📌 SA cần làm gì với stakeholders?</h4>
            <ul>
                <li>🗣️ Hiểu nhu cầu từng người</li>
                <li>⚖️ Cân bằng các yêu cầu xung đột</li>
                <li>📢 Communicate phù hợp từng đối tượng</li>
            </ul>
        `,
        detail: `
            <h4>📊 Stakeholder Matrix:</h4>
            <table style="width:100%; border-collapse: collapse; margin: 1rem 0;">
                <tr style="background: rgba(255,255,255,0.1);">
                    <th style="padding: 0.5rem; text-align: left;">Stakeholder</th>
                    <th style="padding: 0.5rem; text-align: left;">Mối quan tâm</th>
                    <th style="padding: 0.5rem; text-align: left;">Cách tiếp cận</th>
                </tr>
                <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                    <td style="padding: 0.5rem;">C-Level</td>
                    <td style="padding: 0.5rem;">ROI, Risk, Timeline</td>
                    <td style="padding: 0.5rem;">High-level summary</td>
                </tr>
                <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                    <td style="padding: 0.5rem;">PM</td>
                    <td style="padding: 0.5rem;">Scope, Schedule, Cost</td>
                    <td style="padding: 0.5rem;">Regular updates</td>
                </tr>
                <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                    <td style="padding: 0.5rem;">Dev Team</td>
                    <td style="padding: 0.5rem;">Technical details</td>
                    <td style="padding: 0.5rem;">Deep-dive sessions</td>
                </tr>
                <tr>
                    <td style="padding: 0.5rem;">Operations</td>
                    <td style="padding: 0.5rem;">Maintainability</td>
                    <td style="padding: 0.5rem;">Ops documentation</td>
                </tr>
            </table>
            <h4>🔄 Power/Interest Grid:</h4>
            <ul>
                <li><strong>High Power, High Interest:</strong> Manage closely</li>
                <li><strong>High Power, Low Interest:</strong> Keep satisfied</li>
                <li><strong>Low Power, High Interest:</strong> Keep informed</li>
                <li><strong>Low Power, Low Interest:</strong> Monitor</li>
            </ul>
        `,
        advanced: `
            <h4>⚔️ Conflict Resolution:</h4>
            <ul>
                <li><strong>Identify:</strong> Nhận diện xung đột sớm</li>
                <li><strong>Analyze:</strong> Hiểu nguyên nhân gốc</li>
                <li><strong>Facilitate:</strong> Tạo điều kiện thảo luận</li>
                <li><strong>Negotiate:</strong> Tìm giải pháp win-win</li>
                <li><strong>Document:</strong> Ghi lại quyết định</li>
            </ul>
            <div class="tip-box">
                <strong>💡 Pro tip:</strong> Luôn có "escalation path" rõ ràng khi không thể resolve conflict.
            </div>
        `,
        practice: `
            <h4>💻 Bài tập:</h4>
            <div class="example-box">
                <strong>Scenario:</strong> PM muốn thêm feature, Dev team nói không đủ thời gian, CTO quan tâm security.
                <br><br>
                <strong>Tasks:</strong>
                <ol>
                    <li>Vẽ stakeholder map</li>
                    <li>Xác định concerns của từng người</li>
                    <li>Đề xuất giải pháp cân bằng</li>
                </ol>
            </div>
        `,
        keyPoints: ['Identification', 'Analysis', 'Communication', 'Conflict Resolution', 'Engagement']
    },

    'business-analysis': {
        icon: '📊',
        title: 'Business Analysis',
        order: 4,
        category: 'foundation',
        connections: ['requirements', 'stakeholder', 'arch-patterns'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> Hiểu BUSINESS trước khi thiết kế TECHNICAL.</p>
            <div class="example-box">
                <strong>Câu hỏi quan trọng:</strong><br>
                ❓ Business đang giải quyết vấn đề gì?<br>
                ❓ Ai là khách hàng mục tiêu?<br>
                ❓ Làm sao kiếm tiền?<br>
                ❓ KPIs nào quan trọng?
            </div>
            <h4>📌 SA cần hiểu:</h4>
            <ul>
                <li>💰 Business Model (cách kiếm tiền)</li>
                <li>📈 Growth Strategy (kế hoạch mở rộng)</li>
                <li>🎯 Success Metrics (đo lường thành công)</li>
            </ul>
        `,
        detail: `
            <h4>📊 Business Analysis Techniques:</h4>
            <ul>
                <li><strong>SWOT Analysis:</strong> Strengths, Weaknesses, Opportunities, Threats</li>
                <li><strong>Business Model Canvas:</strong> 9 building blocks</li>
                <li><strong>Value Stream Mapping:</strong> Flow of value to customer</li>
                <li><strong>Process Modeling:</strong> BPMN diagrams</li>
            </ul>
            <h4>🔄 Domain-Driven Design (DDD):</h4>
            <ul>
                <li><strong>Ubiquitous Language:</strong> Ngôn ngữ chung giữa tech & business</li>
                <li><strong>Bounded Context:</strong> Ranh giới của mỗi domain</li>
                <li><strong>Aggregates:</strong> Nhóm entities liên quan</li>
            </ul>
        `,
        advanced: `
            <h4>🎯 Event Storming:</h4>
            <p>Workshop technique để discover business domain:</p>
            <ol>
                <li>🟧 Domain Events (Orange) - Sự kiện đã xảy ra</li>
                <li>🟦 Commands (Blue) - Hành động trigger event</li>
                <li>🟨 Actors (Yellow) - Ai thực hiện</li>
                <li>🟪 Policies (Purple) - Business rules</li>
            </ol>
            <div class="code-block">
Example: E-commerce Order Flow

[Customer] → Place Order → OrderPlaced
[System] → Process Payment → PaymentProcessed
[Warehouse] → Ship Order → OrderShipped
[Customer] → Receive Order → OrderDelivered
            </div>
        `,
        practice: `
            <h4>💻 Bài tập:</h4>
            <div class="example-box">
                <strong>Thực hiện Event Storming cho app Food Delivery:</strong>
                <ol>
                    <li>Liệt kê các Domain Events chính</li>
                    <li>Xác định Commands và Actors</li>
                    <li>Identify Bounded Contexts</li>
                    <li>Vẽ Context Map</li>
                </ol>
            </div>
        `,
        keyPoints: ['Business Model', 'Domain Knowledge', 'DDD', 'Event Storming', 'Value Stream']
    },

    // ==================== ARCHITECTURE (5-8) ====================
    'arch-patterns': {
        icon: '🏛️',
        title: 'Architecture Patterns',
        order: 5,
        category: 'architecture',
        connections: ['microservices', 'event-driven', 'monolith', 'sa-role'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> Patterns là các "mẫu" đã được chứng minh hiệu quả.</p>
            <div class="example-box">
                <strong>Giống như xây nhà:</strong><br>
                🏠 Nhà 1 tầng - Đơn giản, dễ xây<br>
                🏢 Chung cư - Phức tạp hơn, nhiều phòng<br>
                🏙️ Khu đô thị - Nhiều tòa nhà kết nối
            </div>
            <h4>📌 Các patterns phổ biến:</h4>
            <ul>
                <li>🧱 <strong>Monolith:</strong> 1 ứng dụng lớn</li>
                <li>🔲 <strong>Microservices:</strong> Nhiều service nhỏ</li>
                <li>⚡ <strong>Event-Driven:</strong> Giao tiếp qua events</li>
                <li>📚 <strong>Layered:</strong> Chia theo tầng</li>
            </ul>
        `,
        detail: `
            <h4>📊 So sánh Patterns:</h4>
            <table style="width:100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.85rem;">
                <tr style="background: rgba(255,255,255,0.1);">
                    <th style="padding: 0.5rem;">Pattern</th>
                    <th style="padding: 0.5rem;">Pros</th>
                    <th style="padding: 0.5rem;">Cons</th>
                </tr>
                <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                    <td style="padding: 0.5rem;">Monolith</td>
                    <td style="padding: 0.5rem;">Simple, easy deploy</td>
                    <td style="padding: 0.5rem;">Hard to scale</td>
                </tr>
                <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                    <td style="padding: 0.5rem;">Microservices</td>
                    <td style="padding: 0.5rem;">Scalable, independent</td>
                    <td style="padding: 0.5rem;">Complex ops</td>
                </tr>
                <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                    <td style="padding: 0.5rem;">Event-Driven</td>
                    <td style="padding: 0.5rem;">Loose coupling</td>
                    <td style="padding: 0.5rem;">Eventual consistency</td>
                </tr>
                <tr>
                    <td style="padding: 0.5rem;">Serverless</td>
                    <td style="padding: 0.5rem;">No infra management</td>
                    <td style="padding: 0.5rem;">Cold start, vendor lock</td>
                </tr>
            </table>
            <h4>🤔 Khi nào dùng pattern nào?</h4>
            <ul>
                <li><strong>Startup nhỏ:</strong> Monolith → Nhanh, đơn giản</li>
                <li><strong>Scale lớn:</strong> Microservices → Flexibility</li>
                <li><strong>Real-time:</strong> Event-Driven → Responsiveness</li>
            </ul>
        `,
        advanced: `
            <h4>🔧 Advanced Patterns:</h4>
            <ul>
                <li><strong>CQRS:</strong> Command Query Responsibility Segregation</li>
                <li><strong>Event Sourcing:</strong> Store events, not state</li>
                <li><strong>Saga:</strong> Distributed transactions</li>
                <li><strong>Strangler Fig:</strong> Gradual migration</li>
            </ul>
            <h4>📐 C4 Model Levels:</h4>
            <div class="code-block">
Level 1: System Context - Big picture
Level 2: Container - Applications, databases
Level 3: Component - Inside each container
Level 4: Code - Class diagrams
            </div>
        `,
        practice: `
            <h4>💻 Bài tập:</h4>
            <div class="example-box">
                <strong>Đánh giá patterns cho các scenarios:</strong>
                <ol>
                    <li>MVP cho startup (3 devs, 6 tháng)</li>
                    <li>Enterprise banking system</li>
                    <li>Real-time gaming platform</li>
                    <li>IoT data processing</li>
                </ol>
            </div>
        `,
        keyPoints: ['Monolith', 'Microservices', 'Event-Driven', 'Serverless', 'Trade-offs']
    },

    'microservices': {
        icon: '🔲',
        title: 'Microservices Architecture',
        order: 6,
        category: 'architecture',
        connections: ['arch-patterns', 'api-design', 'cloud-services', 'devops'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> Chia ứng dụng thành nhiều service nhỏ, độc lập.</p>
            <div class="example-box">
                <strong>Netflix có 700+ microservices:</strong><br>
                🎬 Video Service - Stream video<br>
                👤 User Service - Quản lý user<br>
                💳 Billing Service - Thanh toán<br>
                📊 Recommendation - Gợi ý phim
            </div>
            <h4>📌 Đặc điểm chính:</h4>
            <ul>
                <li>🔲 Mỗi service làm 1 việc (Single Responsibility)</li>
                <li>🔄 Deploy độc lập</li>
                <li>💾 Database riêng biệt</li>
                <li>📡 Communicate qua API/Message</li>
            </ul>
        `,
        detail: `
            <h4>✅ Khi nào dùng Microservices?</h4>
            <ul>
                <li>Team lớn (nhiều squad)</li>
                <li>Cần scale từng phần riêng</li>
                <li>Polyglot (nhiều ngôn ngữ)</li>
                <li>Continuous deployment</li>
            </ul>
            <h4>❌ Khi nào KHÔNG nên dùng?</h4>
            <ul>
                <li>Startup nhỏ (< 5 devs)</li>
                <li>MVP cần ship nhanh</li>
                <li>Team chưa có kinh nghiệm</li>
                <li>Business domain chưa rõ</li>
            </ul>
            <h4>🔧 Key Components:</h4>
            <ul>
                <li><strong>API Gateway:</strong> Entry point</li>
                <li><strong>Service Discovery:</strong> Find services</li>
                <li><strong>Load Balancer:</strong> Distribute traffic</li>
                <li><strong>Circuit Breaker:</strong> Fault tolerance</li>
            </ul>
        `,
        advanced: `
            <h4>📊 Microservices Design Principles:</h4>
            <ul>
                <li><strong>Domain-Driven:</strong> Bounded contexts</li>
                <li><strong>Database per Service:</strong> Data isolation</li>
                <li><strong>API First:</strong> Contract-driven</li>
                <li><strong>Infrastructure as Code:</strong> Reproducible</li>
            </ul>
            <h4>⚠️ Challenges:</h4>
            <ul>
                <li>Distributed transactions (Saga pattern)</li>
                <li>Data consistency (Eventual consistency)</li>
                <li>Service mesh complexity</li>
                <li>Debugging distributed systems</li>
            </ul>
            <div class="code-block">
// Circuit Breaker Pattern
if (failures > threshold) {
    state = OPEN;  // Stop calling
    setTimeout(() => state = HALF_OPEN, timeout);
}
            </div>
        `,
        practice: `
            <h4>💻 Bài tập:</h4>
            <div class="example-box">
                <strong>Thiết kế microservices cho E-commerce:</strong>
                <ol>
                    <li>Xác định các bounded contexts</li>
                    <li>Liệt kê services cần thiết</li>
                    <li>Vẽ communication diagram</li>
                    <li>Xác định data flow cho "Place Order"</li>
                </ol>
            </div>
        `,
        keyPoints: ['Service Independence', 'API Gateway', 'Service Discovery', 'Circuit Breaker', 'Data Isolation']
    },

    'event-driven': {
        icon: '⚡',
        title: 'Event-Driven Architecture',
        order: 7,
        category: 'architecture',
        connections: ['arch-patterns', 'microservices', 'scalability'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> Services giao tiếp qua "sự kiện" thay vì gọi trực tiếp.</p>
            <div class="example-box">
                <strong>Ví dụ đặt hàng:</strong><br>
                1️⃣ Order Service: "OrderPlaced!" (phát event)<br>
                2️⃣ Inventory: Nhận event → Trừ kho<br>
                3️⃣ Payment: Nhận event → Charge tiền<br>
                4️⃣ Notification: Nhận event → Gửi email
            </div>
            <h4>📌 Lợi ích:</h4>
            <ul>
                <li>🔗 Loose coupling (ít phụ thuộc)</li>
                <li>⚡ Async processing</li>
                <li>📈 Dễ scale</li>
            </ul>
        `,
        detail: `
            <h4>📡 Event-Driven Patterns:</h4>
            <ul>
                <li><strong>Pub/Sub:</strong> Publish events, nhiều subscribers</li>
                <li><strong>Event Sourcing:</strong> Lưu events, không lưu state</li>
                <li><strong>CQRS:</strong> Tách read/write models</li>
            </ul>
            <h4>🔧 Message Brokers:</h4>
            <ul>
                <li><strong>Apache Kafka:</strong> High throughput, ordering</li>
                <li><strong>RabbitMQ:</strong> Feature-rich, routing</li>
                <li><strong>AWS SQS/SNS:</strong> Managed, scalable</li>
                <li><strong>Redis Pub/Sub:</strong> Simple, fast</li>
            </ul>
        `,
        advanced: `
            <h4>⚠️ Challenges:</h4>
            <ul>
                <li><strong>Eventual Consistency:</strong> Data sync delay</li>
                <li><strong>Ordering:</strong> Event sequence matters</li>
                <li><strong>Idempotency:</strong> Handle duplicate events</li>
                <li><strong>Dead Letter Queue:</strong> Handle failures</li>
            </ul>
            <div class="code-block">
// Event Schema
{
  "eventId": "uuid",
  "eventType": "OrderPlaced",
  "timestamp": "2024-01-15T10:30:00Z",
  "aggregateId": "order-123",
  "data": {
    "customerId": "cust-456",
    "items": [...],
    "total": 150.00
  }
}
            </div>
        `,
        practice: `
            <h4>💻 Bài tập:</h4>
            <div class="example-box">
                <strong>Thiết kế event-driven cho Ride-Sharing:</strong>
                <ol>
                    <li>Liệt kê domain events</li>
                    <li>Xác định producers và consumers</li>
                    <li>Chọn message broker phù hợp</li>
                    <li>Handle failure scenarios</li>
                </ol>
            </div>
        `,
        keyPoints: ['Pub/Sub', 'Event Sourcing', 'CQRS', 'Message Broker', 'Eventual Consistency']
    },

    'monolith': {
        icon: '🧱',
        title: 'Monolithic Architecture',
        order: 8,
        category: 'architecture',
        connections: ['arch-patterns', 'microservices'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> Tất cả code trong 1 ứng dụng, 1 database.</p>
            <div class="example-box">
                <strong>Như nhà 1 khối:</strong><br>
                🏠 Phòng khách + Bếp + Phòng ngủ = 1 căn nhà<br>
                vs<br>
                🏘️ Biệt thự nhiều tòa riêng biệt = Microservices
            </div>
            <h4>📌 Đặc điểm:</h4>
            <ul>
                <li>📦 1 codebase duy nhất</li>
                <li>💾 1 database chung</li>
                <li>🚀 Deploy toàn bộ cùng lúc</li>
            </ul>
        `,
        detail: `
            <h4>✅ Khi nào chọn Monolith?</h4>
            <ul>
                <li>Startup phase / MVP</li>
                <li>Team nhỏ (< 10 devs)</li>
                <li>Business domain đơn giản</li>
                <li>Cần ship nhanh</li>
            </ul>
            <h4>🔧 Modular Monolith:</h4>
            <p>Best of both worlds - Monolith với cấu trúc modules rõ ràng</p>
            <div class="code-block">
/src
  /modules
    /users
    /orders
    /payments
    /inventory
  /shared
    /database
    /utils
            </div>
        `,
        advanced: `
            <h4>🔄 Migration to Microservices:</h4>
            <ol>
                <li><strong>Strangler Fig:</strong> Dần dần tách service</li>
                <li>Start với bounded contexts rõ ràng</li>
                <li>Tách database per module trước</li>
                <li>API Gateway làm facade</li>
            </ol>
            <div class="warning-box">
                <strong>⚠️ Monolith Hell:</strong> Khi monolith quá lớn, deploy chậm, test khó, team conflict → Cần migration
            </div>
        `,
        practice: `
            <h4>💻 Bài tập:</h4>
            <div class="example-box">
                <strong>Phân tích monolith hiện có:</strong>
                <ol>
                    <li>Xác định các modules tiềm năng</li>
                    <li>Vẽ dependency graph</li>
                    <li>Lên kế hoạch migration</li>
                </ol>
            </div>
        `,
        keyPoints: ['Single Deployment', 'Shared Database', 'Modular Monolith', 'Strangler Fig', 'When to use']
    },

    // ==================== TECHNICAL (9-14) ====================
    'cloud-services': {
        icon: '☁️',
        title: 'Cloud Services',
        order: 9,
        category: 'technical',
        connections: ['microservices', 'scalability', 'devops', 'security'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> Thuê máy chủ và dịch vụ từ AWS/Azure/GCP thay vì tự mua.</p>
            <div class="example-box">
                <strong>3 Cloud lớn nhất:</strong><br>
                ☁️ AWS (Amazon) - Market leader (~32%)<br>
                🔵 Azure (Microsoft) - Enterprise focus (~23%)<br>
                🔴 GCP (Google) - Data/ML strong (~10%)
            </div>
            <h4>📌 Service Models:</h4>
            <ul>
                <li>🖥️ <strong>IaaS:</strong> Thuê VM (EC2, Azure VM)</li>
                <li>📦 <strong>PaaS:</strong> Thuê platform (Heroku, App Engine)</li>
                <li>⚡ <strong>SaaS:</strong> Thuê phần mềm (Salesforce, Office 365)</li>
            </ul>
        `,
        detail: `
            <h4>🔧 AWS Core Services:</h4>
            <ul>
                <li><strong>EC2:</strong> Virtual Machines</li>
                <li><strong>S3:</strong> Object Storage</li>
                <li><strong>RDS:</strong> Managed Database</li>
                <li><strong>Lambda:</strong> Serverless Functions</li>
                <li><strong>EKS:</strong> Kubernetes Service</li>
            </ul>
            <h4>💰 Cost Optimization:</h4>
            <ul>
                <li>Reserved Instances (1-3 year commit)</li>
                <li>Spot Instances (cheap, interruptible)</li>
                <li>Right-sizing (don't over-provision)</li>
                <li>Auto-scaling</li>
            </ul>
        `,
        advanced: `
            <h4>☁️ Multi-Cloud Strategy:</h4>
            <ul>
                <li><strong>Avoid vendor lock-in:</strong> Use Kubernetes, Terraform</li>
                <li><strong>Best of breed:</strong> AWS for compute, GCP for ML</li>
                <li><strong>Compliance:</strong> Data residency requirements</li>
            </ul>
            <h4>🔐 Well-Architected Framework (AWS):</h4>
            <ol>
                <li>Operational Excellence</li>
                <li>Security</li>
                <li>Reliability</li>
                <li>Performance Efficiency</li>
                <li>Cost Optimization</li>
                <li>Sustainability</li>
            </ol>
        `,
        practice: `
            <h4>💻 Bài tập:</h4>
            <div class="example-box">
                <strong>Thiết kế cloud architecture:</strong>
                <ol>
                    <li>Chọn services cho web app (3-tier)</li>
                    <li>Ước tính cost monthly</li>
                    <li>Plan disaster recovery</li>
                    <li>Security best practices</li>
                </ol>
            </div>
            <h4>📚 Certifications nên có:</h4>
            <ul>
                <li>AWS Solutions Architect Associate/Professional</li>
                <li>Azure Solutions Architect Expert</li>
                <li>GCP Professional Cloud Architect</li>
            </ul>
        `,
        keyPoints: ['IaaS/PaaS/SaaS', 'AWS/Azure/GCP', 'Cost Optimization', 'Well-Architected', 'Multi-Cloud']
    },

    'databases': {
        icon: '🗄️',
        title: 'Database Design',
        order: 10,
        category: 'technical',
        connections: ['cloud-services', 'scalability', 'microservices'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> Chọn đúng loại database cho đúng use case.</p>
            <div class="example-box">
                <strong>2 loại chính:</strong><br>
                📊 <strong>SQL:</strong> PostgreSQL, MySQL - Structured, ACID<br>
                📄 <strong>NoSQL:</strong> MongoDB, Redis - Flexible, Scale
            </div>
            <h4>📌 Chọn database như thế nào?</h4>
            <ul>
                <li>💳 Transactions, ACID → SQL</li>
                <li>📝 Flexible schema → Document DB</li>
                <li>⚡ Caching, Sessions → Redis</li>
                <li>🔗 Relationships → Graph DB</li>
            </ul>
        `,
        detail: `
            <h4>📊 SQL vs NoSQL:</h4>
            <table style="width:100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.85rem;">
                <tr style="background: rgba(255,255,255,0.1);">
                    <th style="padding: 0.5rem;">Type</th>
                    <th style="padding: 0.5rem;">Examples</th>
                    <th style="padding: 0.5rem;">Best For</th>
                </tr>
                <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                    <td style="padding: 0.5rem;">Relational</td>
                    <td style="padding: 0.5rem;">PostgreSQL, MySQL</td>
                    <td style="padding: 0.5rem;">ACID, complex queries</td>
                </tr>
                <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                    <td style="padding: 0.5rem;">Document</td>
                    <td style="padding: 0.5rem;">MongoDB, CouchDB</td>
                    <td style="padding: 0.5rem;">Flexible schema</td>
                </tr>
                <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                    <td style="padding: 0.5rem;">Key-Value</td>
                    <td style="padding: 0.5rem;">Redis, DynamoDB</td>
                    <td style="padding: 0.5rem;">Caching, sessions</td>
                </tr>
                <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                    <td style="padding: 0.5rem;">Wide-Column</td>
                    <td style="padding: 0.5rem;">Cassandra, HBase</td>
                    <td style="padding: 0.5rem;">Time-series, analytics</td>
                </tr>
                <tr>
                    <td style="padding: 0.5rem;">Graph</td>
                    <td style="padding: 0.5rem;">Neo4j, Neptune</td>
                    <td style="padding: 0.5rem;">Relationships</td>
                </tr>
            </table>
        `,
        advanced: `
            <h4>🔧 Scaling Strategies:</h4>
            <ul>
                <li><strong>Replication:</strong> Read replicas</li>
                <li><strong>Sharding:</strong> Horizontal partitioning</li>
                <li><strong>Caching:</strong> Redis, Memcached</li>
                <li><strong>Connection Pooling:</strong> PgBouncer</li>
            </ul>
            <h4>📊 CAP Theorem:</h4>
            <div class="code-block">
CAP: Choose 2 of 3
- Consistency (C)
- Availability (A)
- Partition Tolerance (P)

Examples:
- CA: Traditional RDBMS (single node)
- CP: MongoDB, HBase
- AP: Cassandra, DynamoDB
            </div>
        `,
        practice: `
            <h4>💻 Bài tập:</h4>
            <div class="example-box">
                <strong>Chọn database cho scenarios:</strong>
                <ol>
                    <li>Banking transactions</li>
                    <li>Social media feed</li>
                    <li>Real-time leaderboard</li>
                    <li>Product catalog</li>
                    <li>IoT sensor data</li>
                </ol>
            </div>
        `,
        keyPoints: ['SQL vs NoSQL', 'CAP Theorem', 'Sharding', 'Replication', 'Caching']
    },

    'security': {
        icon: '🔐',
        title: 'Security Architecture',
        order: 11,
        category: 'technical',
        connections: ['cloud-services', 'api-design', 'sa-role'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> Bảo vệ hệ thống khỏi hackers và data breaches.</p>
            <div class="example-box">
                <strong>3 trụ cột bảo mật (CIA):</strong><br>
                🔒 <strong>Confidentiality:</strong> Chỉ người authorized xem được<br>
                ✅ <strong>Integrity:</strong> Data không bị sửa đổi<br>
                ⚡ <strong>Availability:</strong> Luôn truy cập được
            </div>
            <h4>📌 Security Basics:</h4>
            <ul>
                <li>🔑 Authentication (Bạn là ai?)</li>
                <li>🛡️ Authorization (Được làm gì?)</li>
                <li>🔐 Encryption (Mã hóa data)</li>
            </ul>
        `,
        detail: `
            <h4>🔧 Security Layers:</h4>
            <ul>
                <li><strong>Network:</strong> Firewall, VPN, WAF</li>
                <li><strong>Application:</strong> Input validation, CORS</li>
                <li><strong>Data:</strong> Encryption at rest/transit</li>
                <li><strong>Identity:</strong> OAuth 2.0, OIDC, SSO</li>
            </ul>
            <h4>🛡️ OWASP Top 10 (2021):</h4>
            <ol>
                <li>Broken Access Control</li>
                <li>Cryptographic Failures</li>
                <li>Injection</li>
                <li>Insecure Design</li>
                <li>Security Misconfiguration</li>
            </ol>
        `,
        advanced: `
            <h4>🔐 Zero Trust Architecture:</h4>
            <p>"Never trust, always verify"</p>
            <ul>
                <li>Verify explicitly</li>
                <li>Use least privilege access</li>
                <li>Assume breach</li>
            </ul>
            <h4>🔧 Security Patterns:</h4>
            <div class="code-block">
// JWT Token Structure
{
  "header": {"alg": "RS256", "typ": "JWT"},
  "payload": {
    "sub": "user-123",
    "roles": ["admin"],
    "exp": 1699999999
  },
  "signature": "..."
}
            </div>
        `,
        practice: `
            <h4>💻 Bài tập:</h4>
            <div class="example-box">
                <strong>Security Review cho API:</strong>
                <ol>
                    <li>Audit authentication flow</li>
                    <li>Check authorization rules</li>
                    <li>Review input validation</li>
                    <li>Check sensitive data handling</li>
                </ol>
            </div>
        `,
        keyPoints: ['CIA Triad', 'Authentication', 'Authorization', 'Encryption', 'Zero Trust']
    },

    'scalability': {
        icon: '📈',
        title: 'Scalability',
        order: 12,
        category: 'technical',
        connections: ['cloud-services', 'databases', 'microservices'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> Hệ thống xử lý được nhiều users hơn khi cần.</p>
            <div class="example-box">
                <strong>2 cách scale:</strong><br>
                ⬆️ <strong>Vertical (Scale Up):</strong> Nâng cấp máy mạnh hơn<br>
                ➡️ <strong>Horizontal (Scale Out):</strong> Thêm nhiều máy
            </div>
            <h4>📌 Metrics quan trọng:</h4>
            <ul>
                <li>📊 Throughput (requests/sec)</li>
                <li>⏱️ Latency (response time)</li>
                <li>💾 Resource utilization</li>
            </ul>
        `,
        detail: `
            <h4>🔧 Scalability Techniques:</h4>
            <ul>
                <li><strong>Load Balancing:</strong> Distribute traffic</li>
                <li><strong>Caching:</strong> Reduce database load</li>
                <li><strong>CDN:</strong> Edge caching for static content</li>
                <li><strong>Database Sharding:</strong> Horizontal data split</li>
                <li><strong>Async Processing:</strong> Queue background jobs</li>
            </ul>
            <h4>📊 Capacity Planning:</h4>
            <div class="code-block">
Current: 10,000 DAU
Growth: 50% YoY
Year 1: 15,000 DAU
Year 2: 22,500 DAU
Year 3: 33,750 DAU

Plan infrastructure for 2x peak load
            </div>
        `,
        advanced: `
            <h4>🔧 Advanced Patterns:</h4>
            <ul>
                <li><strong>CQRS:</strong> Separate read/write scaling</li>
                <li><strong>Event Sourcing:</strong> Append-only, replay events</li>
                <li><strong>Bulkhead:</strong> Isolate failures</li>
                <li><strong>Rate Limiting:</strong> Protect from abuse</li>
            </ul>
            <h4>📈 Auto-Scaling Rules:</h4>
            <div class="code-block">
// AWS Auto Scaling Policy
if (CPU > 70% for 5 min) {
  scale_out(+2 instances);
}
if (CPU < 30% for 10 min) {
  scale_in(-1 instance);
}
            </div>
        `,
        practice: `
            <h4>💻 Bài tập:</h4>
            <div class="example-box">
                <strong>Design for scale:</strong>
                <ol>
                    <li>1M users, 10K concurrent</li>
                    <li>Identify bottlenecks</li>
                    <li>Propose scaling solutions</li>
                    <li>Estimate costs</li>
                </ol>
            </div>
        `,
        keyPoints: ['Horizontal vs Vertical', 'Load Balancing', 'Caching', 'Sharding', 'Auto-Scaling']
    },

    'api-design': {
        icon: '🔌',
        title: 'API Design',
        order: 13,
        category: 'technical',
        connections: ['microservices', 'security', 'documentation'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> API là cách các services "nói chuyện" với nhau.</p>
            <div class="example-box">
                <strong>REST API Example:</strong><br>
                GET /users/123 → Lấy thông tin user 123<br>
                POST /users → Tạo user mới<br>
                PUT /users/123 → Cập nhật user 123<br>
                DELETE /users/123 → Xóa user 123
            </div>
            <h4>📌 API Styles:</h4>
            <ul>
                <li>🌐 <strong>REST:</strong> Resource-based, HTTP methods</li>
                <li>📊 <strong>GraphQL:</strong> Query language, flexible</li>
                <li>⚡ <strong>gRPC:</strong> Binary protocol, fast</li>
            </ul>
        `,
        detail: `
            <h4>🔧 REST Best Practices:</h4>
            <ul>
                <li>Use nouns, not verbs (/users not /getUsers)</li>
                <li>Use proper HTTP methods</li>
                <li>Version your API (/v1/users)</li>
                <li>Use proper status codes</li>
                <li>Pagination for lists</li>
            </ul>
            <h4>📊 HTTP Status Codes:</h4>
            <div class="code-block">
200 OK - Success
201 Created - Resource created
400 Bad Request - Client error
401 Unauthorized - Auth required
403 Forbidden - No permission
404 Not Found - Resource missing
500 Internal Server Error
            </div>
        `,
        advanced: `
            <h4>🔧 API Design Patterns:</h4>
            <ul>
                <li><strong>HATEOAS:</strong> Hypermedia links in response</li>
                <li><strong>Rate Limiting:</strong> X-RateLimit headers</li>
                <li><strong>Idempotency:</strong> Safe to retry</li>
                <li><strong>API Gateway:</strong> Central entry point</li>
            </ul>
            <h4>📝 OpenAPI Spec:</h4>
            <div class="code-block">
openapi: 3.0.0
paths:
  /users/{id}:
    get:
      summary: Get user by ID
      parameters:
        - name: id
          in: path
          required: true
          schema:
            type: string
      responses:
        '200':
          description: Success
            </div>
        `,
        practice: `
            <h4>💻 Bài tập:</h4>
            <div class="example-box">
                <strong>Design REST API cho Blog Platform:</strong>
                <ol>
                    <li>Define resources (posts, comments, users)</li>
                    <li>Design endpoints</li>
                    <li>Write OpenAPI spec</li>
                    <li>Plan error handling</li>
                </ol>
            </div>
        `,
        keyPoints: ['REST', 'GraphQL', 'gRPC', 'Versioning', 'Error Handling']
    },

    'devops': {
        icon: '🔄',
        title: 'DevOps & CI/CD',
        order: 14,
        category: 'technical',
        connections: ['cloud-services', 'microservices', 'documentation'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> Tự động hóa build, test, deploy code.</p>
            <div class="example-box">
                <strong>CI/CD Pipeline:</strong><br>
                📝 Code → 🔨 Build → 🧪 Test → 🚀 Deploy<br>
                Mỗi commit tự động chạy pipeline!
            </div>
            <h4>📌 DevOps Practices:</h4>
            <ul>
                <li>🔄 <strong>CI:</strong> Continuous Integration (merge code thường xuyên)</li>
                <li>🚀 <strong>CD:</strong> Continuous Deployment (auto deploy)</li>
                <li>📦 <strong>IaC:</strong> Infrastructure as Code</li>
            </ul>
        `,
        detail: `
            <h4>🔧 CI/CD Tools:</h4>
            <ul>
                <li><strong>GitHub Actions:</strong> Built-in CI/CD</li>
                <li><strong>Jenkins:</strong> Self-hosted, flexible</li>
                <li><strong>GitLab CI:</strong> All-in-one platform</li>
                <li><strong>ArgoCD:</strong> GitOps for Kubernetes</li>
            </ul>
            <h4>📦 Container & Orchestration:</h4>
            <ul>
                <li><strong>Docker:</strong> Containerization</li>
                <li><strong>Kubernetes:</strong> Container orchestration</li>
                <li><strong>Helm:</strong> K8s package manager</li>
            </ul>
        `,
        advanced: `
            <h4>🔧 Deployment Strategies:</h4>
            <ul>
                <li><strong>Rolling:</strong> Gradual replacement</li>
                <li><strong>Blue-Green:</strong> Switch traffic instantly</li>
                <li><strong>Canary:</strong> Test with small % users</li>
                <li><strong>Feature Flags:</strong> Toggle features</li>
            </ul>
            <div class="code-block">
# GitHub Actions Example
name: CI/CD Pipeline
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: npm install
      - run: npm test
      - run: npm run build
      - run: docker build -t app .
      - run: docker push app
            </div>
        `,
        practice: `
            <h4>💻 Bài tập:</h4>
            <div class="example-box">
                <strong>Setup CI/CD pipeline:</strong>
                <ol>
                    <li>Create GitHub Actions workflow</li>
                    <li>Build Docker image</li>
                    <li>Push to container registry</li>
                    <li>Deploy to staging/production</li>
                </ol>
            </div>
        `,
        keyPoints: ['CI/CD', 'Docker', 'Kubernetes', 'GitOps', 'Deployment Strategies']
    },

    // ==================== SOFT SKILLS (15-17) ====================
    'communication': {
        icon: '💬',
        title: 'Communication Skills',
        order: 15,
        category: 'soft-skills',
        connections: ['stakeholder', 'leadership', 'documentation'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> SA phải "translate" giữa tech và business.</p>
            <div class="example-box">
                <strong>Cùng 1 vấn đề, nói khác nhau:</strong><br>
                👔 Với CEO: "Tăng revenue 20% với feature này"<br>
                💻 Với Dev: "Implement event-driven với Kafka"<br>
                📊 Với PM: "Mất 3 sprints, cần 2 devs"
            </div>
            <h4>📌 Kỹ năng cần có:</h4>
            <ul>
                <li>🗣️ Presentation skills</li>
                <li>✍️ Technical writing</li>
                <li>👂 Active listening</li>
                <li>🤝 Negotiation</li>
            </ul>
        `,
        detail: `
            <h4>📊 Communication Matrix:</h4>
            <table style="width:100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.85rem;">
                <tr style="background: rgba(255,255,255,0.1);">
                    <th style="padding: 0.5rem;">Audience</th>
                    <th style="padding: 0.5rem;">Focus</th>
                    <th style="padding: 0.5rem;">Format</th>
                </tr>
                <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                    <td style="padding: 0.5rem;">C-Level</td>
                    <td style="padding: 0.5rem;">ROI, Risk, Strategy</td>
                    <td style="padding: 0.5rem;">Executive Summary</td>
                </tr>
                <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                    <td style="padding: 0.5rem;">Dev Team</td>
                    <td style="padding: 0.5rem;">How, Technical details</td>
                    <td style="padding: 0.5rem;">Tech specs, diagrams</td>
                </tr>
                <tr>
                    <td style="padding: 0.5rem;">Clients</td>
                    <td style="padding: 0.5rem;">Benefits, Timeline</td>
                    <td style="padding: 0.5rem;">Demos, roadmaps</td>
                </tr>
            </table>
        `,
        advanced: `
            <h4>🎯 Difficult Conversations:</h4>
            <ul>
                <li><strong>Saying No:</strong> Explain trade-offs, offer alternatives</li>
                <li><strong>Bad News:</strong> Be direct, have solutions ready</li>
                <li><strong>Conflicts:</strong> Focus on facts, not emotions</li>
            </ul>
            <div class="tip-box">
                <strong>💡 Pro tip:</strong> Use "AND" instead of "BUT"<br>
                ❌ "Good idea BUT too expensive"<br>
                ✅ "Good idea AND we need to find budget"
            </div>
        `,
        practice: `
            <h4>💻 Bài tập:</h4>
            <div class="example-box">
                <strong>Practice scenarios:</strong>
                <ol>
                    <li>Present architecture to non-technical CEO</li>
                    <li>Explain delay to frustrated client</li>
                    <li>Convince team to adopt new technology</li>
                </ol>
            </div>
        `,
        keyPoints: ['Audience Adaptation', 'Technical Writing', 'Presentations', 'Negotiation', 'Active Listening']
    },

    'leadership': {
        icon: '👔',
        title: 'Technical Leadership',
        order: 16,
        category: 'soft-skills',
        connections: ['communication', 'decision-making', 'stakeholder'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> SA dẫn dắt về mặt kỹ thuật, không phải quản lý người.</p>
            <div class="example-box">
                <strong>SA vs Manager:</strong><br>
                👔 Manager: Quản lý team, performance review<br>
                🏗️ SA: Định hướng kỹ thuật, mentor devs
            </div>
            <h4>📌 Leadership responsibilities:</h4>
            <ul>
                <li>🎯 Set technical vision</li>
                <li>📚 Mentor developers</li>
                <li>⚖️ Make technical decisions</li>
                <li>🛡️ Shield team from politics</li>
            </ul>
        `,
        detail: `
            <h4>🔧 Leadership Styles:</h4>
            <ul>
                <li><strong>Visionary:</strong> Set direction, inspire</li>
                <li><strong>Coaching:</strong> Develop people</li>
                <li><strong>Democratic:</strong> Build consensus</li>
                <li><strong>Servant:</strong> Remove blockers</li>
            </ul>
            <h4>📈 Building Credibility:</h4>
            <ul>
                <li>Deliver results consistently</li>
                <li>Admit mistakes, learn publicly</li>
                <li>Share knowledge generously</li>
                <li>Back decisions with data</li>
            </ul>
        `,
        advanced: `
            <h4>🔧 Influence Without Authority:</h4>
            <ul>
                <li><strong>Build relationships:</strong> Coffee chats, 1:1s</li>
                <li><strong>Show value:</strong> Quick wins first</li>
                <li><strong>Create allies:</strong> Find champions</li>
                <li><strong>Lead by example:</strong> Do what you preach</li>
            </ul>
            <div class="warning-box">
                <strong>⚠️ Common pitfalls:</strong>
                <ul>
                    <li>Being too technical in business discussions</li>
                    <li>Making decisions in isolation</li>
                    <li>Not delegating enough</li>
                </ul>
            </div>
        `,
        practice: `
            <h4>💻 Bài tập:</h4>
            <div class="example-box">
                <strong>Leadership scenarios:</strong>
                <ol>
                    <li>Mentor junior dev struggling with design</li>
                    <li>Convince skeptical senior dev on new approach</li>
                    <li>Navigate disagreement between teams</li>
                </ol>
            </div>
        `,
        keyPoints: ['Technical Vision', 'Mentoring', 'Influence', 'Building Trust', 'Lead by Example']
    },

    'decision-making': {
        icon: '⚖️',
        title: 'Decision Making',
        order: 17,
        category: 'soft-skills',
        connections: ['leadership', 'adr', 'arch-patterns'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> SA quyết định technical decisions quan trọng.</p>
            <div class="example-box">
                <strong>Decisions SA thường phải làm:</strong><br>
                🤔 PostgreSQL hay MongoDB?<br>
                🤔 Monolith hay Microservices?<br>
                🤔 AWS hay GCP?<br>
                🤔 Build hay Buy?
            </div>
            <h4>📌 Decision Framework:</h4>
            <ul>
                <li>1️⃣ Xác định vấn đề</li>
                <li>2️⃣ Liệt kê options</li>
                <li>3️⃣ Đánh giá trade-offs</li>
                <li>4️⃣ Quyết định & Document</li>
            </ul>
        `,
        detail: `
            <h4>📊 Decision Matrix:</h4>
            <table style="width:100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.85rem;">
                <tr style="background: rgba(255,255,255,0.1);">
                    <th style="padding: 0.5rem;">Criteria</th>
                    <th style="padding: 0.5rem;">Weight</th>
                    <th style="padding: 0.5rem;">Option A</th>
                    <th style="padding: 0.5rem;">Option B</th>
                </tr>
                <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                    <td style="padding: 0.5rem;">Cost</td>
                    <td style="padding: 0.5rem;">30%</td>
                    <td style="padding: 0.5rem;">8/10</td>
                    <td style="padding: 0.5rem;">6/10</td>
                </tr>
                <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                    <td style="padding: 0.5rem;">Performance</td>
                    <td style="padding: 0.5rem;">25%</td>
                    <td style="padding: 0.5rem;">7/10</td>
                    <td style="padding: 0.5rem;">9/10</td>
                </tr>
                <tr>
                    <td style="padding: 0.5rem;">Team Skills</td>
                    <td style="padding: 0.5rem;">20%</td>
                    <td style="padding: 0.5rem;">9/10</td>
                    <td style="padding: 0.5rem;">5/10</td>
                </tr>
            </table>
        `,
        advanced: `
            <h4>⚖️ Trade-off Analysis:</h4>
            <div class="code-block">
Trade-offs are EVERYWHERE in architecture:

Consistency vs Availability (CAP)
Latency vs Throughput
Flexibility vs Simplicity
Cost vs Performance
Build vs Buy
            </div>
            <h4>🔧 Reversible vs Irreversible:</h4>
            <ul>
                <li><strong>Type 1 (Irreversible):</strong> Careful analysis, take time</li>
                <li><strong>Type 2 (Reversible):</strong> Decide fast, iterate</li>
            </ul>
        `,
        practice: `
            <h4>💻 Bài tập:</h4>
            <div class="example-box">
                <strong>Make decisions for scenarios:</strong>
                <ol>
                    <li>SQL vs NoSQL for e-commerce</li>
                    <li>REST vs GraphQL for mobile app</li>
                    <li>AWS vs GCP for ML workload</li>
                    <li>Document your ADR</li>
                </ol>
            </div>
        `,
        keyPoints: ['Trade-offs', 'Decision Matrix', 'Reversibility', 'Document Decisions', 'Data-Driven']
    },

    // ==================== TOOLS & DOCUMENTATION (18-20) ====================
    'documentation': {
        icon: '📝',
        title: 'Documentation',
        order: 18,
        category: 'tools',
        connections: ['diagramming', 'adr', 'communication'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> Tài liệu giúp team hiểu và maintain hệ thống.</p>
            <div class="example-box">
                <strong>Docs quan trọng của SA:</strong><br>
                📐 Architecture diagrams<br>
                📝 Technical specifications<br>
                📚 ADRs (Architecture Decision Records)<br>
                🔧 Runbooks (operations guide)
            </div>
            <h4>📌 Documentation Principles:</h4>
            <ul>
                <li>📖 Write for the reader, not yourself</li>
                <li>🔄 Keep it updated</li>
                <li>🎯 Right level of detail</li>
            </ul>
        `,
        detail: `
            <h4>📚 Documentation Types:</h4>
            <ul>
                <li><strong>Architecture Overview:</strong> Big picture for everyone</li>
                <li><strong>Technical Specs:</strong> Details for developers</li>
                <li><strong>API Documentation:</strong> OpenAPI/Swagger</li>
                <li><strong>Runbooks:</strong> How to operate</li>
                <li><strong>Onboarding Guide:</strong> For new team members</li>
            </ul>
            <h4>🔧 Tools:</h4>
            <ul>
                <li><strong>Confluence:</strong> Enterprise wiki</li>
                <li><strong>Notion:</strong> Modern, flexible</li>
                <li><strong>GitBook:</strong> Developer-focused</li>
                <li><strong>Markdown:</strong> In-repo documentation</li>
            </ul>
        `,
        advanced: `
            <h4>📊 Documentation as Code:</h4>
            <ul>
                <li>Store docs with code in Git</li>
                <li>Review docs like code (PRs)</li>
                <li>Auto-generate from code where possible</li>
            </ul>
            <div class="code-block">
/docs
  /architecture
    overview.md
    c4-diagrams/
  /adr
    0001-use-postgresql.md
    0002-adopt-microservices.md
  /runbooks
    deployment.md
    incident-response.md
            </div>
        `,
        practice: `
            <h4>💻 Bài tập:</h4>
            <div class="example-box">
                <strong>Create documentation set:</strong>
                <ol>
                    <li>Architecture Overview (1-2 pages)</li>
                    <li>C4 diagrams (Context, Container)</li>
                    <li>ADR template</li>
                    <li>API documentation</li>
                </ol>
            </div>
        `,
        keyPoints: ['Architecture Docs', 'ADRs', 'API Docs', 'Runbooks', 'Docs as Code']
    },

    'diagramming': {
        icon: '📐',
        title: 'Diagramming',
        order: 19,
        category: 'tools',
        connections: ['documentation', 'arch-patterns', 'communication'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> Một hình ảnh đáng giá ngàn lời nói.</p>
            <div class="example-box">
                <strong>Diagram types phổ biến:</strong><br>
                🏛️ Architecture diagrams<br>
                🔄 Sequence diagrams<br>
                📊 Data flow diagrams<br>
                🗄️ ER diagrams
            </div>
            <h4>📌 C4 Model Levels:</h4>
            <ul>
                <li>1️⃣ Context - System và actors</li>
                <li>2️⃣ Container - Apps, databases</li>
                <li>3️⃣ Component - Inside container</li>
                <li>4️⃣ Code - Class diagrams</li>
            </ul>
        `,
        detail: `
            <h4>🔧 Diagramming Tools:</h4>
            <ul>
                <li><strong>Draw.io:</strong> Free, web-based</li>
                <li><strong>Lucidchart:</strong> Collaborative</li>
                <li><strong>Miro:</strong> Whiteboarding</li>
                <li><strong>PlantUML:</strong> Diagram as code</li>
                <li><strong>Excalidraw:</strong> Hand-drawn style</li>
            </ul>
            <h4>📊 UML Diagrams:</h4>
            <ul>
                <li><strong>Sequence:</strong> Interaction over time</li>
                <li><strong>Class:</strong> Object structure</li>
                <li><strong>Use Case:</strong> Actor interactions</li>
                <li><strong>Activity:</strong> Workflow/process</li>
            </ul>
        `,
        advanced: `
            <h4>📐 Diagram as Code:</h4>
            <div class="code-block">
// PlantUML Example
@startuml
actor User
participant "API Gateway" as GW
participant "User Service" as US
database "PostgreSQL" as DB

User -> GW: GET /users/123
GW -> US: getUser(123)
US -> DB: SELECT * FROM users
DB --> US: user data
US --> GW: User JSON
GW --> User: 200 OK
@enduml
            </div>
            <h4>🔧 Mermaid.js:</h4>
            <div class="code-block">
graph LR
    A[Client] --> B[Load Balancer]
    B --> C[Service A]
    B --> D[Service B]
    C --> E[(Database)]
    D --> E
            </div>
        `,
        practice: `
            <h4>💻 Bài tập:</h4>
            <div class="example-box">
                <strong>Create diagrams:</strong>
                <ol>
                    <li>C4 Context diagram for your project</li>
                    <li>Sequence diagram for login flow</li>
                    <li>ER diagram for database schema</li>
                    <li>Deployment diagram</li>
                </ol>
            </div>
        `,
        keyPoints: ['C4 Model', 'UML', 'Diagram as Code', 'Tools', 'Best Practices']
    },

    'adr': {
        icon: '📚',
        title: 'Architecture Decision Records',
        order: 20,
        category: 'tools',
        connections: ['documentation', 'decision-making', 'communication'],
        simple: `
            <p>🎯 <strong>Hiểu đơn giản:</strong> ADR ghi lại TẠI SAO bạn quyết định như vậy.</p>
            <div class="example-box">
                <strong>ADR trả lời:</strong><br>
                ❓ Vấn đề gì cần giải quyết?<br>
                ❓ Có những options nào?<br>
                ❓ Tại sao chọn option này?<br>
                ❓ Hậu quả là gì?
            </div>
            <h4>📌 Tại sao cần ADR?</h4>
            <ul>
                <li>📜 Historical record</li>
                <li>👥 New team members understand why</li>
                <li>🔄 Revisit decisions khi context thay đổi</li>
            </ul>
        `,
        detail: `
            <h4>📝 ADR Template:</h4>
            <div class="code-block">
# ADR-001: Use PostgreSQL for primary database

## Status
Accepted

## Context
We need a database for our e-commerce platform.
Expected 100K products, 10K daily orders.

## Decision
Use PostgreSQL as primary database.

## Options Considered
1. PostgreSQL - Mature, ACID, team experience
2. MongoDB - Flexible schema
3. MySQL - Popular but less features

## Consequences
+ Team already knows PostgreSQL
+ Strong consistency for orders
- Need separate solution for search
            </div>
        `,
        advanced: `
            <h4>🔧 ADR Best Practices:</h4>
            <ul>
                <li><strong>Immutable:</strong> Don't edit old ADRs, create new ones</li>
                <li><strong>Lightweight:</strong> 1-2 pages max</li>
                <li><strong>Numbered:</strong> ADR-001, ADR-002...</li>
                <li><strong>Linked:</strong> Reference related ADRs</li>
            </ul>
            <h4>📊 ADR Lifecycle:</h4>
            <div class="code-block">
Status values:
- Proposed: Under discussion
- Accepted: Decision made
- Deprecated: No longer applies
- Superseded: Replaced by newer ADR
            </div>
        `,
        practice: `
            <h4>💻 Bài tập:</h4>
            <div class="example-box">
                <strong>Write ADRs for:</strong>
                <ol>
                    <li>Choice of cloud provider</li>
                    <li>Microservices vs Monolith</li>
                    <li>Authentication strategy</li>
                    <li>CI/CD tool selection</li>
                </ol>
            </div>
            <h4>📚 Resources:</h4>
            <ul>
                <li>adr.github.io - ADR organization</li>
                <li>cognitect.com/blog/2011/11/15/documenting-architecture-decisions</li>
            </ul>
        `,
        keyPoints: ['Why over What', 'Template', 'Immutable', 'Status Tracking', 'Team Alignment']
    }
};
