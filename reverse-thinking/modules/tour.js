// ==================== TOUR MODULE ====================
// Các bước hướng dẫn cho từng cấp độ

const tourSteps = {
    beginner: [
        { 
            target: null, 
            title: 'Chào mừng đến với Tư Duy Ngược! 🔄', 
            description: 'Bạn sẽ học cách suy nghĩ "ngược" để ra quyết định tốt hơn và tránh sai lầm. Đây là kỹ năng được Charlie Munger, Warren Buffett sử dụng hàng ngày!'
        },
        { 
            target: 'what-is-inversion', 
            title: '① Inversion Thinking là gì?', 
            description: 'Thay vì hỏi "Làm sao để thành công?", hãy hỏi "Làm sao để CHẮC CHẮN thất bại?" rồi tránh những điều đó.'
        },
        { 
            target: 'avoid-failure', 
            title: '② Tránh Thất Bại > Tìm Thành Công', 
            description: 'Triết lý Via Negativa: Loại bỏ cái xấu thường hiệu quả hơn cố gắng thêm cái tốt.'
        },
        { 
            target: 'charlie-munger', 
            title: '③ Charlie Munger & Inversion', 
            description: '"Nói cho tôi biết tôi sẽ chết ở đâu, để tôi không bao giờ đến đó." - Học từ bậc thầy tư duy ngược.'
        },
        { 
            target: 'pre-mortem', 
            title: '④ Pre-Mortem Analysis', 
            description: 'Trước khi bắt đầu, tưởng tượng dự án ĐÃ THẤT BẠI rồi tìm lý do. Kỹ thuật đơn giản nhưng cực kỳ mạnh!'
        },
        { 
            target: 'fear-setting', 
            title: '⑤ Fear Setting', 
            description: 'Tim Ferriss dạy: Viết ra nỗi sợ lớn nhất, cách ngăn ngừa, và cách sửa chữa nếu xảy ra.'
        },
        { 
            target: 'worst-case', 
            title: '⑥ Worst Case Scenario', 
            description: '"Điều tệ NHẤT có thể xảy ra là gì? Tôi chịu được không?" - Nếu chịu được, hãy làm!'
        },
        { 
            target: 'inversion-career', 
            title: '⑦ Ứng dụng trong sự nghiệp', 
            description: 'Hỏi "Làm sao để bị đuổi việc?" rồi tránh. Đơn giản nhưng hiệu quả!'
        },
        { 
            target: null, 
            title: 'Hoàn thành phần cơ bản! 🎉', 
            description: 'Bây giờ hãy thử các kịch bản thực tế và luyện tập tư duy ngược mỗi ngày!'
        }
    ],
    
    intermediate: [
        { 
            target: null, 
            title: 'Chào mừng Intermediate! 📚', 
            description: 'Bạn đã biết cơ bản, giờ hãy đi sâu vào các kỹ thuật và ứng dụng nâng cao hơn.'
        },
        { 
            target: 'subtract-not-add', 
            title: '① Subtraction Mindset', 
            description: 'Khi giải quyết vấn đề, con người có xu hướng THÊM. Nhưng BỎ BỚT thường hiệu quả hơn.'
        },
        { 
            target: 'risk-inversion', 
            title: '② Risk Inversion & Red Team', 
            description: 'Đóng vai đối thủ để tấn công kế hoạch của chính mình. Tìm điểm yếu trước khi người khác tìm.'
        },
        { 
            target: 'failure-mapping', 
            title: '③ Failure Mapping', 
            description: 'Vẽ bản đồ TẤT CẢ các cách thất bại, phân loại theo xác suất và mức ảnh hưởng.'
        },
        { 
            target: 'anti-goals', 
            title: '④ Anti-Goals', 
            description: 'Viết danh sách "KHÔNG MUỐN" bên cạnh danh sách "MUỐN". Powerful framework!'
        },
        { 
            target: 'inversion-business', 
            title: '⑤ Ứng dụng trong kinh doanh', 
            description: '"Làm sao để công ty phá sản?" → Top 10 cách → Tránh hết = tăng cơ hội thành công.'
        },
        { 
            target: 'inversion-investing', 
            title: '⑥ Ứng dụng trong đầu tư', 
            description: 'Buffett & Munger: "Quy tắc 1: Đừng mất tiền. Quy tắc 2: Đừng quên quy tắc 1."'
        },
        { 
            target: 'simplify', 
            title: '⑦ Simplify by Inversion', 
            description: '"Sự hoàn hảo đạt được khi không còn gì để bỏ" - Đơn giản hóa bằng loại bỏ.'
        },
        { 
            target: null, 
            title: 'Hoàn thành Intermediate! 🎓', 
            description: 'Tiếp tục với Advanced để master Stoicism, Mental Models và Second-Order Thinking!'
        }
    ],
    
    advanced: [
        { 
            target: null, 
            title: 'Chào mừng Advanced! 🧠', 
            description: 'Giờ hãy kết hợp tư duy ngược với các mô hình tư duy khác để đạt master level.'
        },
        { 
            target: 'mental-models', 
            title: '① Mental Models & Inversion', 
            description: 'Kết hợp tư duy ngược với Bayesian thinking, Systems thinking, và 80/20.'
        },
        { 
            target: 'second-order', 
            title: '② Second-Order Thinking', 
            description: 'Đừng chỉ hỏi "Gì sẽ xảy ra?" mà còn "Và SAU ĐÓ gì sẽ xảy ra tiếp?"'
        },
        { 
            target: 'stoic-inversion', 
            title: '③ Stoicism & Negative Visualization', 
            description: 'Premeditatio Malorum - kỹ thuật 2000 năm tuổi từ Seneca và Marcus Aurelius.'
        },
        { 
            target: null, 
            title: 'Bạn đã master Tư Duy Ngược! 🏆', 
            description: 'Áp dụng mỗi ngày: Trước mỗi quyết định, dành 2 phút hỏi "Gì có thể đi sai?"'
        }
    ]
};
