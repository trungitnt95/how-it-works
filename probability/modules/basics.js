// Probability Basics - Core concepts
const probabilityBasicsData = {
    'what-is-probability': {
        icon: '🎲',
        title: 'Xác Suất Là Gì?',
        category: 'basics',
        level: 'beginner',
        connections: ['sample-space', 'events', 'probability-rules'],
        simple: `
            <h3>🎲 Xác suất là gì?</h3>
            <p><strong>Xác suất</strong> là con số đo lường <em>khả năng xảy ra</em> của một sự kiện.</p>
            <div class="example-box">
                <strong>Ví dụ:</strong> Tung đồng xu, xác suất ra mặt ngửa = 50% = 0.5 = 1/2
            </div>
            <h4>Giá trị xác suất</h4>
            <ul>
                <li><strong>0</strong> = Không thể xảy ra</li>
                <li><strong>0.5</strong> = Có thể xảy ra (50-50)</li>
                <li><strong>1</strong> = Chắc chắn xảy ra</li>
            </ul>
        `,
        detail: `
            <h3>📊 Xác suất chi tiết</h3>
            <p>Xác suất P(A) của sự kiện A được tính:</p>
            <div class="formula-box">
                P(A) = Số kết quả thuận lợi / Tổng số kết quả có thể
            </div>
            <h4>Các cách diễn đạt xác suất</h4>
            <table>
                <tr><th>Dạng</th><th>Ví dụ</th></tr>
                <tr><td>Phân số</td><td>1/6</td></tr>
                <tr><td>Thập phân</td><td>0.167</td></tr>
                <tr><td>Phần trăm</td><td>16.7%</td></tr>
            </table>
            <h4>Ví dụ: Tung xúc xắc</h4>
            <ul>
                <li>P(ra số 6) = 1/6 ≈ 16.7%</li>
                <li>P(ra số chẵn) = 3/6 = 1/2 = 50%</li>
                <li>P(ra số < 4) = 3/6 = 50%</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 Định nghĩa toán học</h3>
            <h4>Tiên đề Kolmogorov</h4>
            <ol>
                <li><strong>Không âm:</strong> P(A) ≥ 0</li>
                <li><strong>Chuẩn hóa:</strong> P(Ω) = 1 (không gian mẫu)</li>
                <li><strong>Cộng tính:</strong> P(A∪B) = P(A) + P(B) nếu A∩B = ∅</li>
            </ol>
            <h4>Các loại xác suất</h4>
            <ul>
                <li><strong>Xác suất lý thuyết:</strong> Dựa trên logic/toán</li>
                <li><strong>Xác suất thực nghiệm:</strong> Dựa trên quan sát</li>
                <li><strong>Xác suất chủ quan:</strong> Dựa trên niềm tin</li>
            </ul>
        `
    },
    'sample-space': {
        icon: 'Ω',
        title: 'Không Gian Mẫu',
        category: 'basics',
        level: 'beginner',
        connections: ['what-is-probability', 'events'],
        simple: `
            <h3>Ω Không gian mẫu</h3>
            <p><strong>Không gian mẫu (Ω)</strong> là tập hợp tất cả kết quả có thể xảy ra.</p>
            <div class="example-box">
                <strong>Tung đồng xu:</strong> Ω = {Ngửa, Sấp}<br>
                <strong>Tung xúc xắc:</strong> Ω = {1, 2, 3, 4, 5, 6}
            </div>
        `,
        detail: `
            <h3>📋 Chi tiết không gian mẫu</h3>
            <h4>Các loại không gian mẫu</h4>
            <ul>
                <li><strong>Hữu hạn:</strong> Có số phần tử đếm được</li>
                <li><strong>Vô hạn đếm được:</strong> 1, 2, 3, ...</li>
                <li><strong>Vô hạn liên tục:</strong> Mọi số thực trong khoảng</li>
            </ul>
            <h4>Ví dụ mở rộng</h4>
            <table>
                <tr><th>Thí nghiệm</th><th>Không gian mẫu</th><th>Số phần tử</th></tr>
                <tr><td>Tung 2 đồng xu</td><td>{NN, NS, SN, SS}</td><td>4</td></tr>
                <tr><td>Tung 2 xúc xắc</td><td>{(1,1), (1,2), ...}</td><td>36</td></tr>
            </table>
        `,
        advanced: `
            <h3>🎓 Không gian mẫu nâng cao</h3>
            <h4>Nguyên lý đếm</h4>
            <ul>
                <li><strong>Quy tắc nhân:</strong> n₁ × n₂ × ... × nₖ</li>
                <li><strong>Hoán vị:</strong> n! = n × (n-1) × ... × 1</li>
                <li><strong>Chỉnh hợp:</strong> A(n,k) = n!/(n-k)!</li>
                <li><strong>Tổ hợp:</strong> C(n,k) = n!/[k!(n-k)!]</li>
            </ul>
        `
    },
    'events': {
        icon: '🎯',
        title: 'Sự Kiện',
        category: 'basics',
        level: 'beginner',
        connections: ['sample-space', 'probability-rules'],
        simple: `
            <h3>🎯 Sự kiện là gì?</h3>
            <p><strong>Sự kiện</strong> là tập con của không gian mẫu.</p>
            <div class="example-box">
                <strong>Tung xúc xắc:</strong><br>
                • Sự kiện A: "Ra số chẵn" = {2, 4, 6}<br>
                • Sự kiện B: "Ra số > 4" = {5, 6}
            </div>
        `,
        detail: `
            <h3>📊 Các loại sự kiện</h3>
            <ul>
                <li><strong>Sự kiện sơ cấp:</strong> Chỉ có 1 kết quả</li>
                <li><strong>Sự kiện hợp:</strong> A ∪ B (A hoặc B)</li>
                <li><strong>Sự kiện giao:</strong> A ∩ B (A và B)</li>
                <li><strong>Sự kiện bù:</strong> A' (không phải A)</li>
            </ul>
            <h4>Quan hệ giữa sự kiện</h4>
            <ul>
                <li><strong>Xung khắc:</strong> A ∩ B = ∅</li>
                <li><strong>Độc lập:</strong> P(A∩B) = P(A)×P(B)</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 Đại số sự kiện</h3>
            <h4>Định luật De Morgan</h4>
            <ul>
                <li>(A ∪ B)' = A' ∩ B'</li>
                <li>(A ∩ B)' = A' ∪ B'</li>
            </ul>
            <h4>Tính chất</h4>
            <ul>
                <li>Giao hoán: A∪B = B∪A</li>
                <li>Kết hợp: (A∪B)∪C = A∪(B∪C)</li>
                <li>Phân phối: A∩(B∪C) = (A∩B)∪(A∩C)</li>
            </ul>
        `
    },
    'probability-rules': {
        icon: '📐',
        title: 'Quy Tắc Xác Suất',
        category: 'basics',
        level: 'intermediate',
        connections: ['what-is-probability', 'events', 'conditional'],
        simple: `
            <h3>📐 Các quy tắc cơ bản</h3>
            <ul>
                <li><strong>Quy tắc bù:</strong> P(A') = 1 - P(A)</li>
                <li><strong>Quy tắc cộng:</strong> P(A hoặc B) = P(A) + P(B) - P(A và B)</li>
            </ul>
            <div class="example-box">
                P(không ra số 6) = 1 - P(ra số 6) = 1 - 1/6 = 5/6
            </div>
        `,
        detail: `
            <h3>📊 Quy tắc chi tiết</h3>
            <h4>Quy tắc cộng</h4>
            <div class="formula-box">
                P(A ∪ B) = P(A) + P(B) - P(A ∩ B)
            </div>
            <p>Nếu A và B xung khắc: P(A ∪ B) = P(A) + P(B)</p>
            
            <h4>Quy tắc nhân</h4>
            <div class="formula-box">
                P(A ∩ B) = P(A) × P(B|A)
            </div>
            <p>Nếu A và B độc lập: P(A ∩ B) = P(A) × P(B)</p>
        `,
        advanced: `
            <h3>🎓 Quy tắc mở rộng</h3>
            <h4>Công thức xác suất đầy đủ</h4>
            <div class="formula-box">
                P(B) = Σ P(B|Aᵢ) × P(Aᵢ)
            </div>
            <h4>Định lý Bayes</h4>
            <div class="formula-box">
                P(A|B) = P(B|A) × P(A) / P(B)
            </div>
        `
    }
};
