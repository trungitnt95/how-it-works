// ==================== TOUR STEPS ====================

const tourSteps = [
    {
        component: 'sa-role',
        title: 'Chào mừng đến với thế giới Solution Architect!',
        description: 'SA là người thiết kế "bản vẽ" cho hệ thống phần mềm. Click vào node để tìm hiểu chi tiết.'
    },
    {
        component: 'requirements',
        title: 'Thu thập Requirements',
        description: 'Bước đầu tiên là hiểu rõ HỆ THỐNG CẦN LÀM GÌ. Functional và Non-functional requirements.'
    },
    {
        component: 'stakeholder',
        title: 'Làm việc với Stakeholders',
        description: 'SA phải communicate với nhiều người: CEO, PM, Developers, khách hàng...'
    },
    {
        component: 'business-analysis',
        title: 'Phân tích Business',
        description: 'Hiểu business trước, technical sau. Domain-Driven Design giúp ích rất nhiều.'
    },
    {
        component: 'arch-patterns',
        title: 'Chọn Architecture Pattern',
        description: 'Monolith? Microservices? Event-Driven? Mỗi pattern có trade-offs riêng.'
    },
    {
        component: 'microservices',
        title: 'Microservices',
        description: 'Chia thành nhiều services nhỏ, độc lập. Phù hợp với teams lớn, scale cao.'
    },
    {
        component: 'event-driven',
        title: 'Event-Driven Architecture',
        description: 'Services giao tiếp qua events. Loose coupling, async processing.'
    },
    {
        component: 'cloud-services',
        title: 'Cloud Services',
        description: 'AWS, Azure, GCP - chọn cloud provider và services phù hợp.'
    },
    {
        component: 'databases',
        title: 'Database Design',
        description: 'SQL vs NoSQL? Chọn đúng database cho đúng use case.'
    },
    {
        component: 'security',
        title: 'Security Architecture',
        description: 'Bảo mật không phải optional. Authentication, Authorization, Encryption.'
    },
    {
        component: 'scalability',
        title: 'Scalability',
        description: 'Thiết kế để xử lý được tăng trưởng. Horizontal vs Vertical scaling.'
    },
    {
        component: 'api-design',
        title: 'API Design',
        description: 'REST, GraphQL, gRPC - thiết kế APIs cho services communicate.'
    },
    {
        component: 'devops',
        title: 'DevOps & CI/CD',
        description: 'Automate build, test, deploy. Infrastructure as Code.'
    },
    {
        component: 'communication',
        title: 'Communication Skills',
        description: 'Soft skill quan trọng nhất! Translate giữa tech và business.'
    },
    {
        component: 'leadership',
        title: 'Technical Leadership',
        description: 'Dẫn dắt về mặt kỹ thuật, mentor developers.'
    },
    {
        component: 'decision-making',
        title: 'Decision Making',
        description: 'Quyết định technical decisions với trade-off analysis.'
    },
    {
        component: 'documentation',
        title: 'Documentation',
        description: 'Tài liệu giúp team hiểu và maintain hệ thống lâu dài.'
    },
    {
        component: 'diagramming',
        title: 'Diagramming',
        description: 'C4 Model, UML, sequence diagrams - communicate qua hình ảnh.'
    },
    {
        component: 'adr',
        title: 'Architecture Decision Records',
        description: 'Ghi lại TẠI SAO bạn quyết định như vậy. Rất quan trọng!'
    },
    {
        component: null,
        title: '🎉 Hoàn thành Tour!',
        description: 'Bạn đã có cái nhìn tổng quan về Solution Architect. Click vào từng node để học chi tiết hơn!'
    }
];
