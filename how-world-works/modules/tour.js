// Tour and learning guide for How The World Works
const tourSteps = {
    beginner: [
        { title: 'Chào mừng!', description: 'Cùng khám phá cách thế giới vận hành...', target: null },
        { title: 'Tư duy hệ thống', description: 'Thế giới là một hệ thống liên kết phức tạp.', target: '[data-component="systems-thinking"]' },
        { title: 'Cung & Cầu', description: 'Quy luật cơ bản nhất của kinh tế.', target: '[data-component="supply-demand"]' },
        { title: 'GDP', description: 'Đo lường sức khỏe kinh tế quốc gia.', target: '[data-component="gdp-economics"]' },
        { title: 'Hình thức cai trị', description: 'Các loại hình chính phủ trên thế giới.', target: '[data-component="governance"]' },
        { title: 'Khí hậu', description: 'Hiểu hệ thống khí hậu toàn cầu.', target: '[data-component="climate-system"]' }
    ],
    intermediate: [
        { title: 'Đi sâu hơn', description: 'Khám phá các cơ chế phức tạp hơn.', target: null },
        { title: 'Tiền được tạo thế nào', description: 'Cách ngân hàng tạo ra tiền từ không khí.', target: '[data-component="money-creation"]' },
        { title: 'Toàn cầu hóa', description: 'Thương mại và chuỗi cung ứng toàn cầu.', target: '[data-component="trade-globalization"]' },
        { title: 'Địa chính trị', description: 'Tại sao vị trí địa lý quyết định số phận quốc gia.', target: '[data-component="geopolitics"]' },
        { title: 'Y tế', description: 'Các mô hình y tế trên thế giới.', target: '[data-component="healthcare-system"]' },
        { title: 'Năng lượng', description: 'Các nguồn năng lượng và tương lai.', target: '[data-component="energy-sources"]' },
        { title: 'Hiệu ứng mạng', description: 'Tại sao winner-takes-all.', target: '[data-component="network-effects"]' }
    ],
    advanced: [
        { title: 'Chuyên sâu', description: 'Các chủ đề phức tạp nhất về thế giới.', target: null },
        { title: 'Nợ & Khủng hoảng', description: 'Chu kỳ nợ và khủng hoảng tài chính.', target: '[data-component="debt-crisis"]' },
        { title: 'Chiến tranh', description: 'Tại sao chiến tranh xảy ra.', target: '[data-component="war-peace"]' },
        { title: 'Quyền lực', description: 'Ai thực sự nắm quyền lực.', target: '[data-component="power-structures"]' },
        { title: 'Tôn giáo', description: 'Vai trò tôn giáo trong xã hội.', target: '[data-component="religion-culture"]' },
        { title: 'Trái Đất', description: 'Hành tinh của chúng ta trong vũ trụ.', target: '[data-component="space-earth"]' },
        { title: 'Bất bình đẳng', description: 'Tại sao khoảng cách giàu nghèo ngày càng lớn.', target: '[data-component="inequality"]' }
    ]
};

const quickTips = [
    { icon: '🔄', text: 'Mọi thứ đều liên kết - thay đổi một yếu tố ảnh hưởng toàn hệ thống.' },
    { icon: '📊', text: 'Cung và Cầu giải thích hầu hết mọi hiện tượng kinh tế.' },
    { icon: '🎯', text: 'Muốn hiểu hành vi? Hãy nhìn vào incentives (động lực).' },
    { icon: '🌍', text: 'Địa lý định hình lịch sử nhiều hơn bạn nghĩ.' },
    { icon: '💰', text: 'Hầu hết tiền trong nền kinh tế được tạo bởi ngân hàng, không phải chính phủ.' },
    { icon: '🌡️', text: 'Khí hậu là hệ thống phức tạp nhất - thay đổi nhỏ gây hậu quả lớn.' }
];

const worldChecklist = [
    'Hiểu tư duy hệ thống và feedback loops',
    'Nắm vững quy luật cung cầu',
    'Biết GDP đo lường những gì (và không đo được gì)',
    'Hiểu cách tiền được tạo ra',
    'Phân biệt các hình thức chính phủ',
    'Hiểu địa chính trị cơ bản',
    'Biết về hiệu ứng nhà kính và biến đổi khí hậu',
    'Nhận diện propaganda và fake news'
];
