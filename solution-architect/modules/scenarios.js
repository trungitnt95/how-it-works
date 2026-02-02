// ==================== SCENARIOS ====================

const scenarios = [
    {
        id: 1,
        icon: '🛒',
        title: 'Thiết kế E-commerce Platform',
        description: 'Startup cần xây dựng platform bán hàng online với 100K users',
        tags: ['Microservices', 'Scalability', 'Payment'],
        components: ['microservices', 'databases', 'api-design', 'security', 'cloud-services']
    },
    {
        id: 2,
        icon: '🏦',
        title: 'Core Banking System',
        description: 'Ngân hàng cần modernize hệ thống legacy 20 năm tuổi',
        tags: ['Migration', 'High Availability', 'Security'],
        components: ['monolith', 'microservices', 'security', 'databases', 'devops']
    },
    {
        id: 3,
        icon: '🎮',
        title: 'Real-time Gaming Platform',
        description: 'Game multiplayer cần xử lý millions concurrent users',
        tags: ['Real-time', 'Event-Driven', 'Global Scale'],
        components: ['event-driven', 'scalability', 'cloud-services', 'databases']
    },
    {
        id: 4,
        icon: '🏥',
        title: 'Healthcare System',
        description: 'Bệnh viện cần hệ thống quản lý bệnh nhân với yêu cầu compliance cao',
        tags: ['HIPAA', 'Security', 'Integration'],
        components: ['security', 'databases', 'api-design', 'documentation']
    },
    {
        id: 5,
        icon: '🚗',
        title: 'Ride-Sharing App',
        description: 'Ứng dụng gọi xe với real-time tracking và payment',
        tags: ['Real-time', 'Mobile', 'Payment'],
        components: ['event-driven', 'microservices', 'api-design', 'scalability']
    },
    {
        id: 6,
        icon: '📺',
        title: 'Video Streaming Platform',
        description: 'Platform streaming video với millions của daily active users',
        tags: ['CDN', 'Scalability', 'Media'],
        components: ['cloud-services', 'scalability', 'databases', 'devops']
    }
];
