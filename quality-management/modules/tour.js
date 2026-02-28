// Tour and learning guide for Quality Management
const tourSteps = {
    beginner: [
        { title: 'Chào mừng!', description: 'Bắt đầu tìm hiểu về quản lý chất lượng...', target: null },
        { title: 'Chất lượng là gì?', description: 'Hiểu định nghĩa và tầm quan trọng của chất lượng.', target: '[data-component="what-is-quality"]' },
        { title: 'PDCA', description: 'Chu trình cải tiến liên tục Plan-Do-Check-Act.', target: '[data-component="pdca-cycle"]' },
        { title: 'Kaizen', description: 'Triết lý cải tiến liên tục của Nhật Bản.', target: '[data-component="kaizen"]' },
        { title: '7 Công cụ QC', description: 'Các công cụ kiểm soát chất lượng cơ bản.', target: '[data-component="seven-tools"]' },
        { title: 'ISO 9001', description: 'Tiêu chuẩn quản lý chất lượng quốc tế.', target: '[data-component="iso-9001"]' }
    ],
    intermediate: [
        { title: 'Nâng cao kiến thức', description: 'Đi sâu vào các phương pháp và công cụ chất lượng.', target: null },
        { title: 'Six Sigma', description: 'Phương pháp giảm thiểu khuyết tật đến mức gần như bằng 0.', target: '[data-component="six-sigma"]' },
        { title: 'Lean', description: 'Loại bỏ lãng phí và tối ưu hóa giá trị.', target: '[data-component="lean"]' },
        { title: 'SPC', description: 'Kiểm soát quá trình bằng thống kê.', target: '[data-component="spc"]' },
        { title: 'FMEA', description: 'Phân tích và phòng ngừa lỗi tiềm ẩn.', target: '[data-component="fmea"]' },
        { title: 'Tiêu chuẩn ngành', description: 'ISO 14001, 45001 và HACCP.', target: '[data-component="iso-14001"]' },
        { title: 'CL Dịch vụ', description: 'Đo lường và cải thiện chất lượng dịch vụ.', target: '[data-component="service-quality"]' }
    ],
    advanced: [
        { title: 'Chuyên sâu', description: 'Các chủ đề nâng cao cho chuyên gia chất lượng.', target: null },
        { title: 'Chi phí chất lượng', description: 'Phân tích và tối ưu chi phí chất lượng.', target: '[data-component="cost-of-quality"]' },
        { title: 'MSA', description: 'Đánh giá hệ thống đo lường.', target: '[data-component="measurement"]' },
        { title: 'Agile Quality', description: 'Chất lượng trong phát triển phần mềm Agile.', target: '[data-component="agile-quality"]' },
        { title: 'IATF 16949', description: 'Tiêu chuẩn chất lượng ngành ô tô.', target: '[data-component="iatf-16949"]' },
        { title: 'CL Y tế', description: 'Quản lý chất lượng trong ngành y tế.', target: '[data-component="healthcare-quality"]' },
        { title: 'Nguyên nhân gốc', description: 'Phân tích nguyên nhân gốc rễ của vấn đề.', target: '[data-component="root-cause"]' }
    ]
};

const quickTips = [
    { icon: '📋', text: 'Chất lượng không chỉ là kiểm tra - mà là phòng ngừa.' },
    { icon: '🔄', text: 'PDCA: Plan-Do-Check-Act - chu trình cải tiến không bao giờ dừng.' },
    { icon: '📊', text: 'Dùng dữ liệu để ra quyết định, không dùng cảm tính.' },
    { icon: '👥', text: 'Chất lượng là trách nhiệm của tất cả mọi người.' },
    { icon: '💡', text: '80% vấn đề đến từ 20% nguyên nhân (Pareto).' },
    { icon: '🎯', text: 'Zero defects: Làm đúng ngay từ đầu luôn rẻ hơn sửa lỗi.' }
];

const qualityChecklist = [
    'Hiểu định nghĩa chất lượng (Deming, Juran, Crosby)',
    'Nắm vững chu trình PDCA',
    'Biết sử dụng 7 công cụ QC',
    'Hiểu triết lý Kaizen và 5S',
    'Nắm được Six Sigma DMAIC',
    'Hiểu Lean và 7 loại lãng phí',
    'Biết về ISO 9001 và các tiêu chuẩn',
    'Áp dụng FMEA và phân tích nguyên nhân gốc'
];
