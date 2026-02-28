// Tour and learning guide for Beauty
const tourSteps = {
    beginner: [
        { title: 'Chào mừng!', description: 'Hành trình làm đẹp bắt đầu từ việc hiểu làn da của bạn.', target: null },
        { title: 'Da hoạt động thế nào?', description: 'Hiểu cấu trúc da là nền tảng cho mọi quy trình chăm sóc.', target: '[data-component="skin-structure"]' },
        { title: 'Loại da của bạn', description: 'Xác định loại da để chọn sản phẩm phù hợp.', target: '[data-component="skin-types"]' },
        { title: 'Làm sạch da', description: 'Bước đầu tiên và quan trọng nhất trong chăm sóc da.', target: '[data-component="cleansing"]' },
        { title: 'Chống nắng', description: 'Sản phẩm quan trọng nhất để bảo vệ da khỏi lão hóa!', target: '[data-component="sunscreen"]' },
        { title: 'Hoàn thành!', description: 'Bạn đã nắm được kiến thức cơ bản. Hãy khám phá thêm!', target: null }
    ],
    intermediate: [
        { title: 'Lên cấp!', description: 'Bạn sẽ học các kỹ thuật chăm sóc và trang điểm nâng cao.', target: null },
        { title: 'Serum & Tinh chất', description: 'Sản phẩm nồng độ cao giúp giải quyết vấn đề da cụ thể.', target: '[data-component="serums"]' },
        { title: 'Tẩy tế bào chết', description: 'AHA, BHA - vũ khí bí mật cho da sáng mịn.', target: '[data-component="exfoliation"]' },
        { title: 'Trang điểm mắt', description: 'Nghệ thuật tôn vinh đôi mắt với phấn, kẻ, mascara.', target: '[data-component="eye-makeup"]' },
        { title: 'Phục hồi tóc', description: 'Bí quyết có mái tóc khỏe đẹp từ bên trong.', target: '[data-component="hair-treatment"]' },
        { title: 'Collagen', description: 'Protein vàng giữ da săn chắc, trẻ trung.', target: '[data-component="collagen"]' },
        { title: 'Tiến bộ tốt!', description: 'Bạn đã hiểu sâu hơn về làm đẹp.', target: null }
    ],
    advanced: [
        { title: 'Nâng cao!', description: 'Kiến thức chuyên sâu cho người đam mê làm đẹp.', target: null },
        { title: 'Chống lão hóa', description: 'Retinol, peptides, và khoa học chống lão hóa.', target: '[data-component="anti-aging"]' },
        { title: 'Lý thuyết màu sắc', description: 'Hiểu màu sắc để trang điểm chuyên nghiệp.', target: '[data-component="color-theory"]' },
        { title: 'Nhuộm tóc', description: 'Hóa học và kỹ thuật đằng sau màu tóc đẹp.', target: '[data-component="hair-coloring"]' },
        { title: 'Công nghệ làm đẹp', description: 'LED, microcurrent, AI - tương lai của skincare.', target: '[data-component="tech-beauty"]' },
        { title: 'Làm đẹp bền vững', description: 'Đẹp mà không gây hại cho hành tinh.', target: '[data-component="sustainable-beauty"]' },
        { title: 'Expert!', description: 'Bạn đã có kiến thức chuyên sâu về làm đẹp!', target: null }
    ]
};

const quickTips = [
    { icon: '☀️', text: 'Luôn dùng kem chống nắng SPF 30+, kể cả trời mây' },
    { icon: '💧', text: 'Uống đủ 2 lít nước mỗi ngày cho da khỏe đẹp' },
    { icon: '🧼', text: 'Rửa mặt 2 lần/ngày, không quá nhiều' },
    { icon: '😴', text: 'Ngủ đủ 7-8 tiếng - giấc ngủ là mỹ phẩm tốt nhất' },
    { icon: '🥗', text: 'Ăn nhiều rau quả, hạn chế đường cho da sáng khỏe' },
    { icon: '🧴', text: 'Thoa sản phẩm từ lỏng đến đặc' }
];

const beautyChecklist = [
    'Xác định loại da của mình',
    'Có quy trình chăm sóc sáng - tối',
    'Dùng kem chống nắng mỗi ngày',
    'Hiểu các thành phần mỹ phẩm cơ bản',
    'Biết cách đọc bảng thành phần (INCI)',
    'Tẩy tế bào chết đều đặn 1-2 lần/tuần',
    'Uống đủ nước hàng ngày',
    'Chọn được serum phù hợp với da'
];
