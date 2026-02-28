// Problem Solving Pitfalls
const pitfallsData = {
    'jumping-solutions': {
        icon: '🦘',
        title: 'Nhảy Vào Giải Pháp',
        category: 'pitfalls',
        level: 'beginner',
        connections: ['define-problem', 'root-cause'],
        simple: `
            <h3>🦘 Jumping to Solutions</h3>
            <p>Bắt đầu giải quyết <strong>trước khi hiểu rõ vấn đề</strong>.</p>
            <div class="warning-box">
                ⚠️ "Nếu tôi có 1 giờ để giải quyết vấn đề, tôi dành 55 phút để hiểu vấn đề." - Einstein
            </div>
        `,
        detail: `
            <h3>📋 Tại sao xảy ra?</h3>
            <ul>
                <li>Áp lực hành động nhanh</li>
                <li>Tự tin quá mức</li>
                <li>Vấn đề "có vẻ" quen thuộc</li>
            </ul>
            <h4>Hậu quả:</h4>
            <ul>
                <li>Giải quyết sai vấn đề</li>
                <li>Vấn đề tái diễn</li>
                <li>Tốn thời gian, tiền bạc</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 Phòng tránh</h3>
            <ul>
                <li>Bắt buộc viết Problem Statement</li>
                <li>Hỏi "5 Whys" trước khi brainstorm</li>
                <li>Thách thức: "Chắc chắn đây là vấn đề thật chưa?"</li>
            </ul>
        `
    },
    'confirmation-bias': {
        icon: '🔍',
        title: 'Confirmation Bias',
        category: 'pitfalls',
        level: 'beginner',
        connections: ['define-problem', 'six-hats'],
        simple: `
            <h3>🔍 Confirmation Bias</h3>
            <p>Chỉ tìm bằng chứng <strong>ủng hộ</strong> ý kiến có sẵn.</p>
            <div class="example-box">
                Đã quyết định mua xe A → Chỉ đọc review tốt về A, bỏ qua review xấu.
            </div>
        `,
        detail: `
            <h3>📋 Biểu hiện</h3>
            <ul>
                <li>Chỉ google những gì ủng hộ quan điểm</li>
                <li>Bỏ qua dữ liệu mâu thuẫn</li>
                <li>Nhớ thông tin có lợi, quên thông tin bất lợi</li>
            </ul>
            <h4>Trong problem solving:</h4>
            <ul>
                <li>Chỉ tìm evidence cho giải pháp yêu thích</li>
                <li>Bỏ qua warning signs</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 Phòng tránh</h3>
            <ul>
                <li>Actively seek disconfirming evidence</li>
                <li>Assign someone to play Devil's Advocate</li>
                <li>Pre-mortem analysis</li>
            </ul>
        `
    },
    'sunk-cost': {
        icon: '💸',
        title: 'Sunk Cost Fallacy',
        category: 'pitfalls',
        level: 'intermediate',
        connections: ['second-order', 'inversion'],
        simple: `
            <h3>💸 Sunk Cost Fallacy</h3>
            <p>Tiếp tục vì đã <strong>đầu tư quá nhiều</strong>, dù nên dừng.</p>
            <div class="example-box">
                "Đã xem 1.5 giờ phim dở, phải xem nốt!" → Tốn thêm 1.5 giờ.
            </div>
        `,
        detail: `
            <h3>📋 Ví dụ trong công việc</h3>
            <ul>
                <li>Dự án thất bại nhưng không cancel</li>
                <li>Giữ nhân viên kém vì đã đào tạo lâu</li>
                <li>Tiếp tục strategy sai vì đã công bố</li>
            </ul>
            <h4>Quy tắc đúng:</h4>
            <div class="tip-box">
                💡 Quyết định dựa trên TƯƠNG LAI, không phải quá khứ.
            </div>
        `,
        advanced: `
            <h3>🎓 Kill Your Darlings</h3>
            <p>Sẵn sàng bỏ đi những gì đã đầu tư nếu không còn tối ưu.</p>
            <ul>
                <li>Định kỳ review: "Nếu bắt đầu lại, có làm không?"</li>
                <li>Set criteria rõ ràng để stop</li>
            </ul>
        `
    },
    'hammer-nail': {
        icon: '🔨',
        title: 'Law of the Instrument',
        category: 'pitfalls',
        level: 'intermediate',
        connections: ['first-principles', 'abstraction'],
        simple: `
            <h3>🔨 Law of the Instrument</h3>
            <p><em>"Nếu chỉ có búa, mọi thứ đều là đinh."</em></p>
            <p>Dùng tool quen thuộc cho mọi vấn đề, dù không phù hợp.</p>
        `,
        detail: `
            <h3>📋 Ví dụ</h3>
            <ul>
                <li>Developer: "Cần app!" cho mọi vấn đề</li>
                <li>Marketer: "Cần quảng cáo!" cho mọi vấn đề</li>
                <li>Consultant: "Cần tái cấu trúc!" cho mọi vấn đề</li>
            </ul>
            <h4>Hậu quả:</h4>
            <ul>
                <li>Over-engineering</li>
                <li>Không tối ưu</li>
                <li>Bỏ lỡ giải pháp tốt hơn</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 Phòng tránh</h3>
            <ul>
                <li>Học nhiều "công cụ" khác nhau</li>
                <li>Hỏi: "Công cụ nào PHÙ HỢP?" không phải "Làm sao dùng công cụ yêu thích?"</li>
                <li>Đa dạng đội ngũ (nhiều chuyên môn)</li>
            </ul>
        `
    },
    'groupthink': {
        icon: '🐑',
        title: 'Groupthink',
        category: 'pitfalls',
        level: 'intermediate',
        connections: ['six-hats', 'confirmation-bias'],
        simple: `
            <h3>🐑 Groupthink</h3>
            <p>Nhóm đồng thuận quá nhanh, <strong>không ai phản biện</strong>.</p>
            <div class="warning-box">
                ⚠️ Đồng thuận nhanh ≠ Quyết định tốt
            </div>
        `,
        detail: `
            <h3>📋 Dấu hiệu Groupthink</h3>
            <ul>
                <li>Ảo tưởng bất khả chiến bại</li>
                <li>Hợp lý hóa tập thể</li>
                <li>Áp lực tuân thủ</li>
                <li>Tự kiểm duyệt ý kiến khác biệt</li>
                <li>Ảo tưởng đồng thuận</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 Phòng tránh</h3>
            <ul>
                <li>Chỉ định Devil's Advocate</li>
                <li>Khuyến khích phản biện</li>
                <li>Anonymous voting trước thảo luận</li>
                <li>Mời người ngoài đánh giá</li>
            </ul>
        `
    },
    'analysis-paralysis': {
        icon: '🔄',
        title: 'Analysis Paralysis',
        category: 'pitfalls',
        level: 'beginner',
        connections: ['pareto', 'divide-conquer'],
        simple: `
            <h3>🔄 Analysis Paralysis</h3>
            <p>Phân tích quá nhiều → <strong>Không hành động</strong>.</p>
            <div class="example-box">
                So sánh 50 laptop trong 2 tuần... vẫn chưa mua.
            </div>
        `,
        detail: `
            <h3>📋 Nguyên nhân</h3>
            <ul>
                <li>Sợ quyết định sai</li>
                <li>Quá cầu toàn</li>
                <li>Quá nhiều lựa chọn</li>
                <li>Thiếu deadline</li>
            </ul>
            <h4>Hậu quả:</h4>
            <ul>
                <li>Bỏ lỡ cơ hội</li>
                <li>Stress, mệt mỏi</li>
                <li>Không tiến triển</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 Giải pháp</h3>
            <ul>
                <li><strong>Satisficing:</strong> Chọn "đủ tốt", không cần "tốt nhất"</li>
                <li><strong>Time-boxing:</strong> Giới hạn thời gian quyết định</li>
                <li><strong>Reversible decisions:</strong> Quyết định nhanh nếu có thể đảo ngược</li>
            </ul>
        `
    }
};
