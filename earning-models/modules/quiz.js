// ==================== QUIZ DATA ====================

const quizData = [
    {
        question: 'Đâu là mô hình kiếm tiền SCALABLE nhất (mở rộng không giới hạn)?',
        options: [
            'Làm lương cố định',
            'Tư vấn theo giờ',
            'Nền tảng (Platform)',
            'Thủ công truyền thống'
        ],
        correct: 2,
        explanation: 'Platform có network effect — càng nhiều user càng giá trị. Facebook phục vụ 3 tỷ người với ~80,000 nhân viên. Lương và tư vấn bị giới hạn bởi thời gian cá nhân.'
    },
    {
        question: 'Einstein gọi gì là "Kỳ quan thứ 8 của thế giới"?',
        options: [
            'Thị trường chứng khoán',
            'Lãi kép (Compound Interest)',
            'Bất động sản',
            'Vàng'
        ],
        correct: 1,
        explanation: '"Compound interest is the 8th wonder of the world. He who understands it, earns it; he who doesn\'t, pays it." A = P × (1+r)^n — lãi sinh ra lãi, tăng trưởng hàm mũ.'
    },
    {
        question: 'Theo Naval Ravikant, đâu KHÔNG phải là loại đòn bẩy (leverage)?',
        options: [
            'Labor (lao động người)',
            'Capital (vốn)',
            'Luck (may mắn)',
            'Code (phần mềm)'
        ],
        correct: 2,
        explanation: '4 đòn bẩy của Naval: Labor, Capital, Code, Media. "Luck" không phải đòn bẩy — đó là kết quả. Code và Media là "permissionless leverage" — không cần xin phép ai.'
    },
    {
        question: 'Công ty Đông Ấn Hà Lan (VOC) có giá trị tương đương bao nhiêu (USD 2024)?',
        options: [
            '$500 tỷ',
            '$2 nghìn tỷ',
            '$7.9 nghìn tỷ',
            '$100 tỷ'
        ],
        correct: 2,
        explanation: 'VOC (1602-1799) ở đỉnh cao có giá trị ~$7.9 nghìn tỷ USD, lớn hơn Apple + Microsoft + Google cộng lại. Họ độc quyền thương mại gia vị từ châu Á.'
    },
    {
        question: 'Quy tắc FIRE (Financial Independence, Retire Early) yêu cầu gì?',
        options: [
            'Tiết kiệm 50% thu nhập',
            'Có tài sản ≥ 25x chi tiêu/năm (rule of 4%)',
            'Làm việc đến 50 tuổi',
            'Đầu tư 100% vào chứng khoán'
        ],
        correct: 1,
        explanation: 'Rule of 4%: Rút 4% tài sản/năm → tiền không bao giờ hết (dựa trên Trinity Study). Chi tiêu 500 triệu/năm → cần 12.5 tỷ VND tài sản đầu tư.'
    },
    {
        question: 'Warren Buffett dùng "float" từ đâu để đầu tư?',
        options: [
            'Ngân hàng',
            'Bảo hiểm',
            'Bất động sản',
            'Crypto'
        ],
        correct: 1,
        explanation: 'Berkshire Hathaway\'s insurance float = $147 tỷ (2023). Float = tiền phí bảo hiểm đã thu nhưng chưa phải bồi thường. Buffett dùng float miễn phí này để đầu tư → tạo lợi nhuận kép.'
    },
    {
        question: 'McDonald\'s kiếm tiền chủ yếu từ đâu?',
        options: [
            'Bán hamburger',
            'Phí nhượng quyền (franchise)',
            'Bất động sản',
            'Cả B và C'
        ],
        correct: 3,
        explanation: '93% thu nhập McDonald\'s từ franchise. Họ cũng là một trong những "landlord" lớn nhất thế giới — sở hữu đất và cho franchisee thuê. "We\'re a real estate company" — Harry Sonneborn (CFO đầu tiên).'
    },
    {
        question: 'Metcalfe\'s Law nói gì về giá trị mạng lưới?',
        options: [
            'Giá trị = N (tuyến tính)',
            'Giá trị = N² (bình phương)',
            'Giá trị = 2^N (hàm mũ)',
            'Giá trị = log(N)'
        ],
        correct: 1,
        explanation: 'Giá trị = N² — nếu mạng có 10 user → giá trị 100. Có 100 user → giá trị 10,000. 10x user = 100x giá trị. Đây là lý do platform "winner takes all".'
    },
    {
        question: 'Trong mô hình SaaS, chỉ số nào QUAN TRỌNG nhất?',
        options: [
            'Số lượng user',
            'LTV/CAC ratio',
            'Revenue',
            'Số nhân viên'
        ],
        correct: 1,
        explanation: 'LTV/CAC = Lifetime Value / Customer Acquisition Cost. LTV/CAC > 3 = SaaS lành mạnh. Nó cho biết 1 đồng chi marketing sinh ra bao nhiêu đồng doanh thu suốt đời khách hàng.'
    },
    {
        question: 'Mô hình kiếm tiền nào có "chi phí biên = 0"?',
        options: [
            'Nhà hàng',
            'Phần mềm/Digital products',
            'Sản xuất công nghiệp',
            'Dịch vụ tư vấn'
        ],
        correct: 1,
        explanation: 'Phần mềm: 1 user hay 1 triệu user → chi phí phát triển gần như nhau. Ebook bán cho 1 người hay 1 triệu người → không thêm chi phí sản xuất. Đây là sức mạnh của digital.'
    }
];

let quizAnswered = 0;
let quizCorrect = 0;

function renderQuiz() {
    const body = document.getElementById('quizBody');
    quizAnswered = 0;
    quizCorrect = 0;

    let html = `<h2>❓ Kiểm Tra Kiến Thức</h2>
    <p style="color:rgba(255,255,255,0.6); margin-bottom:1.5rem">${quizData.length} câu hỏi — Bạn hiểu bao nhiêu về cách kiếm tiền?</p>`;

    quizData.forEach((q, qi) => {
        html += `<div class="quiz-question" id="quiz-q-${qi}">
            <h4>${qi + 1}. ${q.question}</h4>
            <div class="quiz-options">
                ${q.options.map((opt, oi) => `
                    <div class="quiz-option" data-qi="${qi}" data-oi="${oi}" onclick="answerQuiz(${qi}, ${oi})">${String.fromCharCode(65 + oi)}. ${opt}</div>
                `).join('')}
            </div>
            <div class="quiz-explanation" id="quiz-exp-${qi}">💡 ${q.explanation}</div>
        </div>`;
    });

    html += `<div class="quiz-score" id="quizScore" style="display:none">
        <div class="score-number" id="scoreNumber"></div>
        <p id="scoreText" style="color:rgba(255,255,255,0.7); margin-top:0.5rem"></p>
    </div>`;

    body.innerHTML = html;
}

function answerQuiz(qi, oi) {
    const q = quizData[qi];
    const options = document.querySelectorAll(`[data-qi="${qi}"]`);
    const explanation = document.getElementById(`quiz-exp-${qi}`);

    // Prevent re-answering
    if (options[0].classList.contains('disabled')) return;

    options.forEach((opt, i) => {
        opt.classList.add('disabled');
        if (i === q.correct) opt.classList.add('correct');
        if (i === oi && i !== q.correct) opt.classList.add('wrong');
    });

    explanation.classList.add('visible');

    quizAnswered++;
    if (oi === q.correct) quizCorrect++;

    if (quizAnswered === quizData.length) {
        const score = document.getElementById('quizScore');
        const scoreNum = document.getElementById('scoreNumber');
        const scoreText = document.getElementById('scoreText');
        score.style.display = 'block';
        scoreNum.textContent = `${quizCorrect}/${quizData.length}`;
        const pct = Math.round(quizCorrect / quizData.length * 100);
        if (pct >= 80) scoreText.textContent = '🎉 Xuất sắc! Bạn hiểu rất rõ về các mô hình kiếm tiền.';
        else if (pct >= 50) scoreText.textContent = '👍 Khá tốt! Hãy đọc thêm để nâng cao kiến thức.';
        else scoreText.textContent = '📚 Hãy khám phá thêm các mô hình để hiểu rõ hơn!';
    }
}
