// Problem Solving - Tour hướng dẫn, mẹo nhanh và checklist
// Tour đi theo lộ trình học: nền tảng → công cụ → tư duy hệ thống → luyện tập.
// target: id concept (mở concept đó) | 'practice' (trỏ tới tab Luyện tập) | null
const psTourSteps = [
    { title: 'Chào mừng!', description: 'Giải quyết vấn đề là một quy trình học được. Tour này đi qua các concept quan trọng nhất theo thứ tự nên học.', target: null },
    { title: 'Bức tranh tổng thể', description: 'Khung 6 bước là "bản đồ": mọi công cụ khác phục vụ một bước trong đó.', target: 'ps-process' },
    { title: 'Định nghĩa vấn đề', description: 'Bước quan trọng nhất và hay bị bỏ qua nhất: mô tả gap bằng số liệu, không chứa giải pháp.', target: 'define-problem' },
    { title: '5 Whys', description: 'Hỏi "tại sao" liên tiếp để đi từ triệu chứng xuống nguyên nhân hệ thống.', target: '5-whys' },
    { title: 'Pareto 80/20', description: 'Một số ít nguyên nhân tạo ra phần lớn kết quả — tìm chúng để tập trung nguồn lực.', target: 'pareto' },
    { title: 'Bẫy: nhảy vào giải pháp', description: 'Bẫy phổ biến và đắt nhất. Nhận diện nó để không giải xuất sắc một vấn đề không tồn tại.', target: 'jumping-solutions' },
    { title: 'Fishbone', description: 'Liệt kê nguyên nhân theo nhóm để nhìn đủ rộng trước khi đào sâu.', target: 'fishbone' },
    { title: 'Ma trận quyết định', description: 'So sánh phương án theo tiêu chí có trọng số — minh bạch và ít cảm tính.', target: 'decision-matrix' },
    { title: 'Inversion', description: '"Làm sao để chắc chắn thất bại?" — rồi tránh những điều đó.', target: 'inversion' },
    { title: 'Tư duy hệ thống', description: 'Vấn đề lặp lại thường do cấu trúc hệ thống tạo ra. Đây là tầng tư duy cao nhất.', target: 'systems-thinking' },
    { title: 'Luyện tập', description: 'Tab Luyện tập có trắc nghiệm, tình huống nhiều bước và bài tự luận có đáp án mẫu. Mỗi concept cũng có tab Luyện tập riêng.', target: 'practice' },
    { title: 'Sẵn sàng!', description: 'Hãy bắt đầu với một concept bất kỳ, rồi kiểm tra lại bằng phần luyện tập. Chúc bạn học tốt!', target: null }
];

const quickTips = [
    { icon: '🎯', text: 'Định nghĩa vấn đề bằng số liệu trước khi bàn giải pháp' },
    { icon: '❓', text: 'Hỏi "Tại sao?" tới khi chạm quy trình, không dừng ở lỗi cá nhân' },
    { icon: '📊', text: 'Tìm số ít nguyên nhân tạo ra phần lớn kết quả' },
    { icon: '🙃', text: 'Nghĩ ngược: làm sao để chắc chắn thất bại?' },
    { icon: '🧪', text: 'Coi giải pháp là giả thuyết — thử nhỏ, đo, rồi mới mở rộng' },
    { icon: '🔀', text: 'Luôn có ít nhất 3 phương án trước khi chọn' },
    { icon: '♟️', text: 'Hỏi "và rồi sao?" để thấy hậu quả bậc hai' },
    { icon: '🚧', text: 'Chỉ cải thiện nút thắt mới tăng được đầu ra' },
    { icon: '🔍', text: 'Hỏi "điều gì sẽ chứng minh tôi sai?"' },
    { icon: '🚪', text: 'Quyết định đảo ngược được thì quyết nhanh' }
];

// Checklist theo 5 giai đoạn của quy trình giải quyết vấn đề
const problemSolvingChecklist = [
    {
        phase: '1. Định nghĩa',
        items: [
            'Đã mô tả khoảng cách hiện trạng – mục tiêu bằng số liệu?',
            'Câu mô tả vấn đề không chứa giải pháp, không đổ lỗi?',
            'Đã xác nhận với người bị ảnh hưởng rằng đây đúng là vấn đề?',
            'Đã rõ phạm vi và ràng buộc (thời gian, ngân sách)?'
        ]
    },
    {
        phase: '2. Chẩn đoán',
        items: [
            'Dựa trên dữ liệu, không chỉ cảm giác?',
            'Đã xem xét nhiều nhóm nguyên nhân (Fishbone)?',
            'Đã đào tới nguyên nhân hệ thống, không dừng ở lỗi cá nhân?',
            'Nguyên nhân gốc đã được kiểm chứng?'
        ]
    },
    {
        phase: '3. Tạo phương án',
        items: [
            'Có ít nhất 3 phương án, kể cả "giữ nguyên"?',
            'Đã tìm ý tưởng từ lĩnh vực khác (loại suy)?'
        ]
    },
    {
        phase: '4. Quyết định',
        items: [
            'Tiêu chí và trọng số được chốt trước khi chấm điểm?',
            'Đã nghĩ tới hậu quả bậc hai, bậc ba?',
            'Đã chạy pre-mortem cho quyết định quan trọng?',
            'Mức cân nhắc phù hợp với độ khó đảo ngược của quyết định?'
        ]
    },
    {
        phase: '5. Triển khai & học',
        items: [
            'Có chỉ số thành công và người chịu trách nhiệm?',
            'Có thể thử nhỏ (pilot) trước khi mở rộng?',
            'Đã hẹn ngày đo lại và rút kinh nghiệm?'
        ]
    }
];
