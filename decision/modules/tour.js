// ==================== TOUR MODULE ====================
// Các bước hướng dẫn cho người mới

const tourSteps = {
    beginner: [
        { 
            target: null, 
            title: 'Chào mừng đến với thế giới Ra Quyết Định! 👋', 
            description: 'Bạn sẽ học cách ra quyết định tốt hơn trong cuộc sống và công việc. Hãy bắt đầu với những khái niệm cơ bản!'
        },
        { 
            target: 'seven-steps', 
            title: '① 7 Bước Ra Quyết Định', 
            description: 'Đây là framework cơ bản nhất. Hầu hết mọi quyết định đều có thể áp dụng 7 bước này.'
        },
        { 
            target: 'gofer-model', 
            title: '② Mô hình GOFER', 
            description: 'Framework đơn giản hơn với 5 bước dễ nhớ: Goals, Options, Facts, Effects, Review.'
        },
        { 
            target: 'system-12', 
            title: '③ System 1 & System 2', 
            description: 'Não bộ có 2 cách suy nghĩ: nhanh (trực giác) và chậm (logic). Hiểu điều này giúp bạn tránh sai lầm!'
        },
        { 
            target: 'confirmation-bias', 
            title: '④ Confirmation Bias', 
            description: 'Thiên kiến phổ biến nhất - xu hướng chỉ tìm thông tin ủng hộ quan điểm sẵn có của bạn.'
        },
        { 
            target: 'sunk-cost-fallacy', 
            title: '⑤ Sunk Cost Fallacy', 
            description: '"Đã đầu tư nhiều rồi, phải tiếp tục!" - Đây là một trong những sai lầm phổ biến nhất.'
        },
        { 
            target: 'pros-cons', 
            title: '⑥ Pros & Cons List', 
            description: 'Công cụ đơn giản nhất: liệt kê ưu và nhược điểm. Benjamin Franklin đã dùng cách này!'
        },
        { 
            target: 'ten-ten-ten', 
            title: '⑦ Quy tắc 10/10/10', 
            description: 'Hỏi: "Tôi sẽ cảm thấy thế nào sau 10 phút, 10 tháng, 10 năm?" - Giúp có góc nhìn dài hạn.'
        },
        { 
            target: 'analysis-paralysis', 
            title: '⑧ Analysis Paralysis', 
            description: 'Phân tích quá nhiều đến mức không thể quyết định. Học cách tránh bẫy này!'
        },
        { 
            target: null, 
            title: 'Hoàn thành phần cơ bản! 🎉', 
            description: 'Bây giờ hãy khám phá thêm các concepts và thử các kịch bản thực tế!'
        }
    ],
    
    intermediate: [
        { 
            target: null, 
            title: 'Chào mừng Intermediate! 📚', 
            description: 'Bạn đã biết cơ bản, giờ hãy đi sâu hơn vào các frameworks nâng cao và cognitive biases.'
        },
        { 
            target: 'decide-model', 
            title: '① Mô hình DECIDE', 
            description: 'Framework 6 bước được dùng nhiều trong y tế và quản lý. Có cấu trúc chặt chẽ hơn.'
        },
        { 
            target: 'rational-model', 
            title: '② Mô hình Lý Trí vs Trực Giác', 
            description: 'Khi nào dùng logic? Khi nào tin vào trực giác? Hiểu sự khác biệt và ưu nhược điểm.'
        },
        { 
            target: 'anchoring-bias', 
            title: '③ Anchoring Bias', 
            description: 'Bạn bị ảnh hưởng bởi con số đầu tiên nghe được. Đặc biệt quan trọng trong đàm phán!'
        },
        { 
            target: 'availability-heuristic', 
            title: '④ Availability Heuristic', 
            description: 'Đánh giá xác suất dựa trên việc dễ nhớ ví dụ. Tin tức làm chúng ta sợ những thứ sai!'
        },
        { 
            target: 'loss-aversion', 
            title: '⑤ Loss Aversion', 
            description: 'Nỗi đau mất 100đ > Niềm vui được 100đ. Hiểu điều này giải thích nhiều hành vi phi lý!'
        },
        { 
            target: 'decision-matrix', 
            title: '⑥ Decision Matrix', 
            description: 'Công cụ mạnh mẽ để so sánh nhiều lựa chọn với nhiều tiêu chí có trọng số khác nhau.'
        },
        { 
            target: 'decision-tree', 
            title: '⑦ Decision Tree', 
            description: 'Vẽ sơ đồ các lựa chọn và kết quả. Kết hợp với Expected Value để tính toán chính xác.'
        },
        { 
            target: 'premortem', 
            title: '⑧ Pre-Mortem Analysis', 
            description: 'Tưởng tượng dự án đã thất bại, hỏi "tại sao?" - Cách hay để phát hiện rủi ro!'
        },
        { 
            target: 'groupthink', 
            title: '⑨ Groupthink', 
            description: 'Khi nhóm ưu tiên đồng thuận hơn quyết định tốt. Nguyên nhân nhiều thảm họa lớn!'
        },
        { 
            target: null, 
            title: 'Hoàn thành Intermediate! 🎓', 
            description: 'Bạn đã có kiến thức vững chắc. Hãy thực hành với các kịch bản thực tế!'
        }
    ],
    
    advanced: [
        { 
            target: null, 
            title: 'Chào mừng Advanced! 🎯', 
            description: 'Giờ chúng ta sẽ tìm hiểu các khái niệm phức tạp và cách áp dụng trong thực tế.'
        },
        { 
            target: 'creative-model', 
            title: '① Creative Decision Making', 
            description: 'Để não "ủ" vấn đề và chờ insight. Hiểu quy trình sáng tạo của Wallas.'
        },
        { 
            target: 'expected-value', 
            title: '② Expected Value & Utility', 
            description: 'Tính toán giá trị kỳ vọng và hiểu tại sao con người không hoàn toàn rational.'
        },
        { 
            target: 'overconfidence', 
            title: '③ Overconfidence & Dunning-Kruger', 
            description: 'Tại sao người ít biết thường tự tin nhất? Và cách calibrate confidence.'
        },
        { 
            target: 'framing-effect', 
            title: '④ Framing Effect', 
            description: 'Cách trình bày thay đổi quyết định dù nội dung giống nhau. Quan trọng trong thuyết phục!'
        },
        { 
            target: 'hindsight-bias', 
            title: '⑤ Hindsight Bias', 
            description: '"Tôi biết từ đầu!" - Tại sao chúng ta khó học từ quá khứ một cách khách quan.'
        },
        { 
            target: 'opportunity-cost', 
            title: '⑥ Opportunity Cost', 
            description: 'Chi phí ẩn của mọi quyết định. Điều quan trọng nhất thường không được tính!'
        },
        { 
            target: 'reversibility', 
            title: '⑦ Reversibility & Real Options', 
            description: 'Phân biệt quyết định một chiều và hai chiều. Biến Type 1 thành Type 2.'
        },
        { 
            target: 'decision-fatigue', 
            title: '⑧ Decision Fatigue', 
            description: 'Tại sao CEO mặc cùng một kiểu quần áo? Và cách bảo vệ năng lượng quyết định.'
        },
        { 
            target: 'emotional-decisions', 
            title: '⑨ Emotional Intelligence', 
            description: 'Cảm xúc không phải kẻ thù. Học cách tích hợp cảm xúc vào quyết định hợp lý.'
        },
        { 
            target: null, 
            title: 'Master Decision Making! 🏆', 
            description: 'Bạn đã có đầy đủ công cụ. Thực hành thường xuyên để trở thành master!'
        }
    ]
};

// Quick tips for beginners
const quickTips = [
    {
        icon: '⏰',
        title: 'Đừng vội',
        tip: 'Với quyết định quan trọng, đợi ít nhất 24h trước khi quyết định.'
    },
    {
        icon: '📝',
        title: 'Viết ra',
        tip: 'Viết ra suy nghĩ giúp làm rõ và tránh bias.'
    },
    {
        icon: '👥',
        title: 'Hỏi người khác',
        tip: 'Góc nhìn khác giúp thấy điều bạn bỏ sót.'
    },
    {
        icon: '🔄',
        title: 'Có thể sửa',
        tip: 'Hầu hết quyết định có thể đảo ngược. Đừng sợ sai!'
    },
    {
        icon: '📊',
        title: 'Dùng công cụ',
        tip: 'Pros/Cons, Decision Matrix giúp suy nghĩ có hệ thống.'
    },
    {
        icon: '🧠',
        title: 'Biết bias',
        tip: 'Nhận biết cognitive biases giúp tránh sai lầm phổ biến.'
    }
];

// Decision checklist for beginners
const decisionChecklist = [
    '✅ Tôi đã xác định rõ vấn đề cần quyết định?',
    '✅ Tôi đã thu thập đủ thông tin (nhưng không quá nhiều)?',
    '✅ Tôi đã xem xét ít nhất 3 lựa chọn?',
    '✅ Tôi đã liệt kê pros và cons của mỗi lựa chọn?',
    '✅ Tôi đã hỏi ý kiến người khác?',
    '✅ Tôi đã xét đến cảm xúc của mình (nhưng không chỉ dựa vào cảm xúc)?',
    '✅ Tôi có thể giải thích quyết định này cho người khác?',
    '✅ Tôi sẽ OK với quyết định này sau 10 năm?',
    '✅ Nếu sai, tôi có thể sửa hoặc học được gì?',
    '✅ Tôi đã set deadline để không phân tích quá lâu?'
];
