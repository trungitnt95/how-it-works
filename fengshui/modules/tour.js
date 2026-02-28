// Tour and learning guide for Feng Shui
const tourSteps = {
    beginner: [
        { title: 'Chào mừng!', description: 'Phong thủy giúp bạn tạo không gian sống hài hòa, cân bằng năng lượng.', target: null },
        { title: 'Phong Thủy là gì?', description: 'Bắt đầu với nguồn gốc và triết lý cơ bản của phong thủy.', target: '[data-component="what-is-fengshui"]' },
        { title: 'Âm Dương', description: 'Hai lực đối lập bổ sung — nền tảng của mọi thứ trong phong thủy.', target: '[data-component="yin-yang"]' },
        { title: 'Khí (Chi)', description: 'Năng lượng sống chảy khắp không gian — tốt hay xấu?', target: '[data-component="chi-energy"]' },
        { title: 'Cửa chính', description: 'Nơi Khí đi vào nhà — cửa tốt, Khí tốt!', target: '[data-component="entrance"]' },
        { title: 'Hoàn thành!', description: 'Bạn đã nắm được nền tảng. Hãy khám phá thêm!', target: null }
    ],
    intermediate: [
        { title: 'Lên cấp!', description: 'Bạn sẽ học các khái niệm quan trọng hơn về phong thủy.', target: null },
        { title: 'Ngũ Hành', description: 'Kim Mộc Thủy Hỏa Thổ — hệ thống tương sinh tương khắc.', target: '[data-component="five-elements"]' },
        { title: 'Bát Quái', description: '8 quẻ đại diện cho 8 phương vị và khía cạnh cuộc sống.', target: '[data-component="bagua-map"]' },
        { title: 'Phòng ngủ', description: 'Đặt giường đúng cách, màu sắc phù hợp cho giấc ngủ ngon.', target: '[data-component="bedroom"]' },
        { title: 'Nhà bếp', description: 'Cân bằng Hỏa-Thủy trong nhà bếp là nghệ thuật.', target: '[data-component="kitchen"]' },
        { title: 'Bàn làm việc', description: 'Vị trí quyền lực — ngồi đúng chỗ, sự nghiệp thăng tiến.', target: '[data-component="desk-placement"]' },
        { title: 'Tiến bộ tốt!', description: 'Bạn đã hiểu sâu hơn về phong thủy ứng dụng.', target: null }
    ],
    advanced: [
        { title: 'Nâng cao!', description: 'Các phương pháp phong thủy chuyên sâu cho người nghiêm túc.', target: null },
        { title: 'Phi Tinh', description: 'Flying Stars — năng lượng thay đổi theo thời gian.', target: '[data-component="flying-stars"]' },
        { title: 'Loan Đầu', description: 'Tả Thanh Long, Hữu Bạch Hổ — hình thế đất đai.', target: '[data-component="land-form"]' },
        { title: 'Thủy Pháp', description: 'Nghệ thuật đặt nước — Nước = Tài lộc.', target: '[data-component="water-placement"]' },
        { title: 'Phong thủy theo năm', description: 'Năng lượng thay đổi hàng năm, cần cập nhật.', target: '[data-component="annual-fengshui"]' },
        { title: 'Hóa giải', description: 'Vật phẩm và phương pháp hóa giải phong thủy xấu.', target: '[data-component="remedies"]' },
        { title: 'Chuyên gia!', description: 'Bạn đã có nền tảng vững chắc về phong thủy!', target: null }
    ]
};

const quickTips = [
    { icon: '☯️', text: 'Phong thủy = cân bằng năng lượng trong không gian sống' },
    { icon: '🚪', text: 'Cửa chính sạch sẽ, sáng sủa = Khí tốt vào nhà' },
    { icon: '🌿', text: 'Cây xanh là giải pháp phong thủy đơn giản và hiệu quả nhất' },
    { icon: '🛏️', text: 'Đầu giường tựa tường, không đối gương, không hướng ra cửa' },
    { icon: '💧', text: 'Nước chảy vào nhà = tài vào, nước chảy ra = tài đi' },
    { icon: '🔥', text: 'Bếp (Hỏa) không đặt đối diện bồn rửa (Thủy)' }
];

const fengshuiChecklist = [
    'Hiểu nguyên lý Âm Dương và Ngũ Hành',
    'Xác định hướng cửa chính và hướng nhà',
    'Kiểm tra dòng chảy Khí trong nhà',
    'Bố trí phòng khách theo vị trí quyền lực',
    'Đặt giường phòng ngủ đúng phong thủy',
    'Cân bằng Hỏa-Thủy trong nhà bếp',
    'Biết bản mệnh và hướng hợp/kỵ',
    'Hóa giải các điểm phong thủy xấu'
];
