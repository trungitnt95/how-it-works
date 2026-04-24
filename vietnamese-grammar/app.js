const concepts = [
    {
        id: "tieng-tu",
        category: "foundation",
        icon: "🔤",
        title: "Tiếng, từ và ngữ",
        summary: "Tiếng là âm tiết có nghĩa hoặc có chức năng cấu tạo từ; từ là đơn vị nhỏ nhất dùng để đặt câu.",
        rules: [
            "Một từ tiếng Việt có thể gồm một tiếng: nhà, ăn, đẹp.",
            "Một từ cũng có thể gồm nhiều tiếng: học sinh, sạch sẽ, lung linh.",
            "Ngữ là tổ hợp từ chưa thành câu nhưng cùng làm một chức năng trong câu."
        ],
        examples: ["hoa", "bông hoa", "những bông hoa mới nở"],
        mistake: "Hay nhầm mọi tiếng tách rời là một từ độc lập. Ví dụ 'học sinh' là một từ ghép, không phải hai từ rời trong nhiều ngữ cảnh."
    },
    {
        id: "tu-ghep-tu-lay",
        category: "foundation",
        icon: "🧩",
        title: "Từ ghép và từ láy",
        summary: "Từ ghép tạo nghĩa bằng cách ghép các tiếng có quan hệ nghĩa; từ láy tạo sắc thái bằng lặp âm.",
        rules: [
            "Từ ghép chính phụ: tiếng chính đứng trước hoặc sau, tiếng phụ bổ sung nghĩa.",
            "Từ ghép đẳng lập: các tiếng ngang vai về nghĩa.",
            "Từ láy có thể láy âm đầu, vần hoặc toàn bộ."
        ],
        examples: ["nhà cửa, xe đạp", "xinh xắn, lấp lánh", "sạch sẽ, đo đỏ"],
        mistake: "Không phải từ có hai tiếng giống âm đều là từ láy; cần xét quan hệ nghĩa và nguồn gốc tiếng."
    },
    {
        id: "danh-tu",
        category: "word",
        icon: "🏷️",
        title: "Danh từ",
        summary: "Danh từ gọi tên người, vật, hiện tượng, khái niệm hoặc đơn vị.",
        rules: [
            "Danh từ thường đi với số từ, lượng từ: một quyển sách, những học sinh.",
            "Danh từ có thể làm chủ ngữ, bổ ngữ hoặc thành phần trong cụm danh từ.",
            "Cụm danh từ thường có phần trước, danh từ trung tâm và phần sau."
        ],
        examples: ["Lan đọc sách.", "Ba chiếc áo màu xanh.", "Niềm vui ấy rất lớn."],
        mistake: "Dùng thiếu loại từ trong các ngữ cảnh cần sự tự nhiên: 'một sách' nên viết là 'một quyển sách'."
    },
    {
        id: "dong-tu",
        category: "word",
        icon: "⚙️",
        title: "Động từ",
        summary: "Động từ chỉ hành động, trạng thái hoặc quá trình.",
        rules: [
            "Động từ thường làm trung tâm của vị ngữ.",
            "Có thể đi với phụ từ thời - thể: đã, đang, sẽ, vừa, mới.",
            "Nhiều động từ cần bổ ngữ để câu đủ nghĩa: tặng, đặt, gửi."
        ],
        examples: ["Tôi đang học.", "Mẹ đã gửi thư.", "Cây lớn lên từng ngày."],
        mistake: "Lạm dụng 'đã/đang/sẽ' khi văn cảnh đã rõ thời gian, làm câu nặng và kém tự nhiên."
    },
    {
        id: "tinh-tu",
        category: "word",
        icon: "🎨",
        title: "Tính từ",
        summary: "Tính từ chỉ đặc điểm, tính chất, màu sắc, trạng thái hoặc mức độ.",
        rules: [
            "Tính từ có thể làm vị ngữ: Trời đẹp.",
            "Có thể đi với từ chỉ mức độ: rất, hơi, quá, khá.",
            "Có thể bổ nghĩa cho danh từ: chiếc áo xanh."
        ],
        examples: ["Căn phòng rất sáng.", "Bài văn này hay.", "Một ngày yên tĩnh."],
        mistake: "Dùng quá nhiều tính từ liên tiếp khiến câu rối: nên chọn tính từ chính xác nhất."
    },
    {
        id: "phu-tu",
        category: "word",
        icon: "⏱️",
        title: "Phụ từ",
        summary: "Phụ từ đi kèm động từ hoặc tính từ để bổ sung thời gian, mức độ, phủ định, tiếp diễn.",
        rules: [
            "Nhóm thời - thể: đã, đang, sẽ, vừa, mới.",
            "Nhóm phủ định: không, chưa, chẳng.",
            "Nhóm mức độ: rất, quá, hơi, khá."
        ],
        examples: ["Tôi chưa ăn.", "Bạn ấy rất chăm.", "Họ vừa đến."],
        mistake: "Đặt phụ từ sai vị trí có thể làm câu gượng: 'rất đang mệt' nên là 'đang rất mệt' hoặc 'rất mệt'."
    },
    {
        id: "quan-he-tu",
        category: "word",
        icon: "🔗",
        title: "Quan hệ từ",
        summary: "Quan hệ từ nối các thành phần câu và biểu thị quan hệ ý nghĩa.",
        rules: [
            "Quan hệ nguyên nhân: vì... nên..., do... nên...",
            "Quan hệ điều kiện: nếu... thì..., hễ... thì...",
            "Quan hệ tương phản: tuy... nhưng..., mặc dù... nhưng..."
        ],
        examples: ["Vì mưa nên đường trơn.", "Nếu chăm học thì em sẽ tiến bộ.", "Tuy mệt nhưng tôi vẫn đi."],
        mistake: "Không nên lặp cặp quan hệ từ thừa. Văn trang trọng thường viết gọn: 'Mặc dù mệt, tôi vẫn đi.'"
    },
    {
        id: "cum-danh-tu",
        category: "phrase",
        icon: "📦",
        title: "Cụm danh từ",
        summary: "Cụm danh từ có danh từ làm trung tâm và các thành phần phụ trước/sau.",
        rules: [
            "Phần trước thường chỉ số lượng: những, các, ba, vài.",
            "Trung tâm là danh từ chính.",
            "Phần sau bổ sung đặc điểm, vị trí hoặc quan hệ."
        ],
        examples: ["những cuốn sách mới", "ba học sinh lớp tám", "ngôi nhà bên sông"],
        mistake: "Xếp quá nhiều phần phụ sau danh từ làm cụm khó đọc; nên tách câu khi thông tin quá dài."
    },
    {
        id: "cum-dong-tu",
        category: "phrase",
        icon: "🏃",
        title: "Cụm động từ",
        summary: "Cụm động từ có động từ làm trung tâm, đi kèm phụ từ và bổ ngữ.",
        rules: [
            "Phần trước bổ sung thời gian, phủ định, tiếp diễn.",
            "Động từ trung tâm nêu hành động hoặc trạng thái chính.",
            "Phần sau nêu đối tượng, nơi chốn, cách thức hoặc kết quả."
        ],
        examples: ["đang đọc sách", "không muốn đi học", "đã hoàn thành bài tập"],
        mistake: "Bỏ sót bổ ngữ với động từ cần đối tượng: 'Tôi đặt lên bàn' thiếu vật được đặt."
    },
    {
        id: "chu-ngu-vi-ngu",
        category: "sentence",
        icon: "🏗️",
        title: "Chủ ngữ và vị ngữ",
        summary: "Chủ ngữ nêu đối tượng được nói đến; vị ngữ nêu hoạt động, trạng thái hoặc đặc điểm của chủ ngữ.",
        rules: [
            "Câu cơ bản thường có mô hình: Chủ ngữ + Vị ngữ.",
            "Chủ ngữ có thể là danh từ, đại từ hoặc cụm danh từ.",
            "Vị ngữ thường là cụm động từ, cụm tính từ hoặc cụm danh từ."
        ],
        examples: ["Hoa nở.", "Bạn Nam rất chăm chỉ.", "Mùa xuân là mùa đẹp nhất."],
        mistake: "Viết câu thiếu vị ngữ: 'Những học sinh trong lớp tôi.' chưa phải câu hoàn chỉnh nếu đứng một mình."
    },
    {
        id: "trang-ngu",
        category: "sentence",
        icon: "📍",
        title: "Trạng ngữ",
        summary: "Trạng ngữ bổ sung thời gian, nơi chốn, nguyên nhân, mục đích, phương tiện hoặc cách thức.",
        rules: [
            "Trạng ngữ có thể đứng đầu, giữa hoặc cuối câu.",
            "Khi đứng đầu câu, trạng ngữ thường được ngăn bằng dấu phẩy.",
            "Trạng ngữ giúp câu rõ hoàn cảnh và quan hệ ý."
        ],
        examples: ["Buổi sáng, tôi chạy bộ.", "Vì trời lạnh, em mặc áo khoác.", "Tôi học bài bằng sơ đồ."],
        mistake: "Đặt trạng ngữ quá xa thành phần nó bổ nghĩa có thể gây mơ hồ."
    },
    {
        id: "cau-don-cau-ghep",
        category: "sentence",
        icon: "🧱",
        title: "Câu đơn và câu ghép",
        summary: "Câu đơn có một cụm chủ - vị nòng cốt; câu ghép có từ hai cụm chủ - vị trở lên.",
        rules: [
            "Câu đơn diễn đạt một sự việc chính.",
            "Câu ghép nối nhiều vế có quan hệ logic.",
            "Các vế câu ghép có thể nối bằng quan hệ từ hoặc dấu câu."
        ],
        examples: ["Tôi đọc sách.", "Trời mưa nên đường trơn.", "Lan học bài, Nam dọn bàn."],
        mistake: "Nối nhiều vế độc lập bằng dấu phẩy liên tục làm câu dài và khó theo dõi."
    },
    {
        id: "kieu-cau",
        category: "sentence",
        icon: "💬",
        title: "Các kiểu câu",
        summary: "Tiếng Việt thường chia câu theo mục đích nói: trần thuật, nghi vấn, cầu khiến, cảm thán.",
        rules: [
            "Câu trần thuật kể, tả, nhận định.",
            "Câu nghi vấn dùng để hỏi.",
            "Câu cầu khiến yêu cầu, đề nghị, khuyên bảo; câu cảm thán bộc lộ cảm xúc."
        ],
        examples: ["Hôm nay trời đẹp.", "Bạn đi đâu?", "Hãy giữ trật tự.", "Ôi, đẹp quá!"],
        mistake: "Dấu câu phải khớp mục đích nói; câu hỏi trực tiếp thường cần dấu chấm hỏi."
    },
    {
        id: "dau-phay",
        category: "punctuation",
        icon: "，",
        title: "Dấu phẩy",
        summary: "Dấu phẩy tách trạng ngữ, thành phần liệt kê, vế câu hoặc phần chêm xen.",
        rules: [
            "Dùng sau trạng ngữ đứng đầu câu khi cần ngắt nhịp.",
            "Dùng giữa các thành phần liệt kê.",
            "Dùng để tách phần giải thích hoặc chêm xen."
        ],
        examples: ["Sáng nay, tôi đến sớm.", "Tôi mua bút, vở, thước.", "Nam, bạn thân của tôi, rất vui tính."],
        mistake: "Không đặt dấu phẩy giữa chủ ngữ và vị ngữ khi câu bình thường: 'Lan, học bài' là sai nếu không có phần chêm xen."
    },
    {
        id: "dau-hai-cham",
        category: "punctuation",
        icon: "：",
        title: "Dấu hai chấm và ngoặc kép",
        summary: "Dấu hai chấm báo hiệu lời dẫn trực tiếp, phần giải thích hoặc phần liệt kê.",
        rules: [
            "Dùng trước lời nói trực tiếp.",
            "Dùng trước phần giải thích rõ hơn cho ý trước.",
            "Ngoặc kép đánh dấu lời dẫn, tên tác phẩm hoặc cách dùng đặc biệt."
        ],
        examples: ["Mẹ nói: \"Con về sớm nhé.\"", "Tôi cần ba thứ: bút, vở, sách.", "Bài thơ \"Sang thu\" rất tinh tế."],
        mistake: "Thiếu ngoặc kép khi dẫn nguyên văn lời nói khiến người đọc khó phân biệt lời kể và lời dẫn."
    },
    {
        id: "lien-ket-cau",
        category: "style",
        icon: "🧵",
        title: "Liên kết câu",
        summary: "Liên kết giúp các câu trong đoạn văn nối với nhau bằng lặp, thế, nối hoặc liên tưởng.",
        rules: [
            "Phép lặp giữ lại từ khóa quan trọng.",
            "Phép thế dùng đại từ hoặc cụm tương đương để tránh lặp nặng.",
            "Phép nối dùng từ như tuy nhiên, vì vậy, hơn nữa."
        ],
        examples: ["Lan rất chăm. Bạn ấy luôn chuẩn bị bài.", "Trời mưa. Vì vậy, trận đấu bị hoãn.", "Quyển sách này hay. Tác phẩm giúp tôi hiểu thêm lịch sử."],
        mistake: "Tránh thay thế mơ hồ khi trong đoạn có nhiều đối tượng cùng giới tính hoặc cùng loại."
    },
    {
        id: "mach-lac",
        category: "style",
        icon: "📝",
        title: "Mạch lạc trong đoạn văn",
        summary: "Mạch lạc là sự thống nhất về chủ đề, trình tự ý và quan hệ logic giữa các câu.",
        rules: [
            "Mỗi đoạn nên có một ý trung tâm rõ.",
            "Các câu triển khai theo trình tự hợp lý: thời gian, không gian, nguyên nhân - kết quả hoặc tổng - phân - hợp.",
            "Từ nối chỉ nên dùng khi thật sự giúp rõ quan hệ ý."
        ],
        examples: ["Nêu ý chính → giải thích → ví dụ → kết luận.", "Trước hết..., tiếp theo..., cuối cùng...", "Nguyên nhân là..., kết quả là..."],
        mistake: "Đổi chủ đề đột ngột trong cùng đoạn làm người đọc mất mạch theo dõi."
    }
];

const quizzes = [
    {
        question: "Trong câu 'Sáng nay, Lan đọc sách trong thư viện.', thành phần nào là trạng ngữ?",
        options: ["Sáng nay", "Lan", "đọc sách", "trong thư viện"],
        answer: 0,
        explain: "'Sáng nay' bổ sung thời gian cho sự việc nên là trạng ngữ."
    },
    {
        question: "Từ nào sau đây là phụ từ?",
        options: ["bàn", "đang", "xanh", "học sinh"],
        answer: 1,
        explain: "'Đang' đi kèm động từ để chỉ sự việc đang tiếp diễn."
    },
    {
        question: "Câu nào là câu ghép?",
        options: ["Tôi đọc sách.", "Bạn Nam rất vui.", "Trời mưa nên đường trơn.", "Chiếc áo màu xanh."],
        answer: 2,
        explain: "Câu có hai vế 'Trời mưa' và 'đường trơn' nối bằng quan hệ từ 'nên'."
    },
    {
        question: "Dấu phẩy trong câu 'Nam, bạn thân của tôi, rất vui tính.' dùng để làm gì?",
        options: ["Tách chủ ngữ với vị ngữ", "Tách phần chêm xen", "Kết thúc câu", "Đánh dấu câu hỏi"],
        answer: 1,
        explain: "'bạn thân của tôi' là phần chêm xen giải thích cho Nam."
    }
];

const categoryLabels = {
    foundation: "Nền tảng",
    word: "Từ loại",
    phrase: "Cụm từ",
    sentence: "Câu",
    punctuation: "Dấu câu",
    style: "Diễn đạt"
};

const state = {
    category: "all",
    query: "",
    quizIndex: 0,
    answered: false
};

const els = {
    grid: document.getElementById("conceptGrid"),
    resultCount: document.getElementById("resultCount"),
    emptyState: document.getElementById("emptyState"),
    searchInput: document.getElementById("searchInput"),
    filters: document.getElementById("filters"),
    drawer: document.getElementById("detailDrawer"),
    backdrop: document.getElementById("drawerBackdrop"),
    closeDrawer: document.getElementById("closeDrawer"),
    detailIcon: document.getElementById("detailIcon"),
    detailTitle: document.getElementById("detailTitle"),
    detailSummary: document.getElementById("detailSummary"),
    detailRules: document.getElementById("detailRules"),
    detailExamples: document.getElementById("detailExamples"),
    detailMistake: document.getElementById("detailMistake"),
    openQuiz: document.getElementById("openQuiz"),
    closeQuiz: document.getElementById("closeQuiz"),
    quizModal: document.getElementById("quizModal"),
    quizQuestion: document.getElementById("quizQuestion"),
    quizOptions: document.getElementById("quizOptions"),
    quizFeedback: document.getElementById("quizFeedback"),
    nextQuiz: document.getElementById("nextQuiz"),
    resetProgress: document.getElementById("resetProgress")
};

function normalize(text) {
    return String(text || "")
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/đ/g, "d");
}

function escapeHtml(text) {
    return String(text || "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function filteredConcepts() {
    const query = normalize(state.query);
    return concepts.filter((item) => {
        const matchesCategory = state.category === "all" || item.category === state.category;
        const text = normalize([
            item.title,
            item.summary,
            categoryLabels[item.category],
            item.rules.join(" "),
            item.examples.join(" ")
        ].join(" "));
        return matchesCategory && (!query || text.includes(query));
    });
}

function renderConcepts() {
    const items = filteredConcepts();
    els.resultCount.textContent = `${items.length} mục`;
    els.emptyState.classList.toggle("visible", items.length === 0);
    els.grid.innerHTML = items.map((item) => `
        <button class="concept-card" data-id="${escapeHtml(item.id)}">
            <span class="concept-icon">${escapeHtml(item.icon)}</span>
            <span class="concept-tag">${escapeHtml(categoryLabels[item.category])}</span>
            <h3>${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.summary)}</p>
        </button>
    `).join("");
}

function openDetail(id) {
    const item = concepts.find((concept) => concept.id === id);
    if (!item) return;

    els.detailIcon.textContent = item.icon;
    els.detailTitle.textContent = item.title;
    els.detailSummary.textContent = item.summary;
    els.detailRules.innerHTML = item.rules.map((rule) => `<span class="rule-pill">${escapeHtml(rule)}</span>`).join("");
    els.detailExamples.innerHTML = item.examples.map((example) => `<li>${escapeHtml(example)}</li>`).join("");
    els.detailMistake.textContent = item.mistake;
    els.drawer.classList.add("open");
    els.backdrop.classList.add("open");
}

function closeDetail() {
    els.drawer.classList.remove("open");
    els.backdrop.classList.remove("open");
}

function renderQuiz() {
    const quiz = quizzes[state.quizIndex];
    state.answered = false;
    els.quizQuestion.textContent = quiz.question;
    els.quizFeedback.textContent = "";
    els.quizOptions.innerHTML = quiz.options.map((option, index) => `
        <button class="quiz-option" data-index="${index}">${escapeHtml(option)}</button>
    `).join("");
}

function answerQuiz(index) {
    if (state.answered) return;
    state.answered = true;
    const quiz = quizzes[state.quizIndex];
    const buttons = els.quizOptions.querySelectorAll(".quiz-option");
    buttons.forEach((button) => {
        const buttonIndex = Number(button.dataset.index);
        if (buttonIndex === quiz.answer) button.classList.add("correct");
        if (buttonIndex === index && index !== quiz.answer) button.classList.add("wrong");
    });
    els.quizFeedback.textContent = quiz.explain;
}

els.searchInput.addEventListener("input", (event) => {
    state.query = event.target.value;
    renderConcepts();
});

els.filters.addEventListener("click", (event) => {
    const button = event.target.closest(".filter");
    if (!button) return;
    state.category = button.dataset.category;
    els.filters.querySelectorAll(".filter").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderConcepts();
});

els.grid.addEventListener("click", (event) => {
    const card = event.target.closest(".concept-card");
    if (card) openDetail(card.dataset.id);
});

els.closeDrawer.addEventListener("click", closeDetail);
els.backdrop.addEventListener("click", closeDetail);

els.openQuiz.addEventListener("click", () => {
    els.quizModal.classList.add("open");
    renderQuiz();
});

els.closeQuiz.addEventListener("click", () => els.quizModal.classList.remove("open"));
els.quizModal.addEventListener("click", (event) => {
    if (event.target === els.quizModal) els.quizModal.classList.remove("open");
});

els.quizOptions.addEventListener("click", (event) => {
    const option = event.target.closest(".quiz-option");
    if (option) answerQuiz(Number(option.dataset.index));
});

els.nextQuiz.addEventListener("click", () => {
    state.quizIndex = (state.quizIndex + 1) % quizzes.length;
    renderQuiz();
});

els.resetProgress.addEventListener("click", () => {
    state.category = "all";
    state.query = "";
    els.searchInput.value = "";
    els.filters.querySelectorAll(".filter").forEach((item) => {
        item.classList.toggle("active", item.dataset.category === "all");
    });
    renderConcepts();
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeDetail();
        els.quizModal.classList.remove("open");
    }
});

renderConcepts();
