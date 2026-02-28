// AI for Everyone - Main App
(function() {
    'use strict';

    const state = {
        currentLevel: localStorage.getItem('aiLevel') || null,
        currentTab: 'simple',
        isTourActive: false,
        tourStepIndex: 0,
        selectedComponent: null
    };

    // Merge all data
    const allComponents = {
        ...aiBasicsData,
        ...aiConceptsData,
        ...promptingData,
        ...techniquesData,
        ...multiAccountData,
        ...freePremiumData,
        ...automationData,
        ...developerToolsData,
        ...skillsPracticesData
    };

    const elements = {
        levelOverlay: document.getElementById('levelOverlay'),
        levelBadge: document.getElementById('levelBadge'),
        changeLevelBtn: document.getElementById('changeLevelBtn'),
        startTourBtn: document.getElementById('startTourBtn'),
        checklistBtn: null,
        examplesBtn: document.getElementById('examplesBtn'),
        examplesModal: document.getElementById('examplesModal'),
        closeExamples: document.getElementById('closeExamples'),
        examplesTabs: document.getElementById('examplesTabs'),
        examplesContent: document.getElementById('examplesContent'),
        tourProgress: document.getElementById('tourProgress'),
        tourPanel: document.getElementById('tourPanel'),
        progressFill: document.getElementById('progressFill'),
        currentStep: document.getElementById('currentStep'),
        totalSteps: document.getElementById('totalSteps'),
        tourTitle: document.getElementById('tourTitle'),
        tourDescription: document.getElementById('tourDescription'),
        tourPrev: document.getElementById('tourPrev'),
        tourNext: document.getElementById('tourNext'),
        tourSkip: document.getElementById('tourSkip'),
        infoPanel: document.getElementById('infoPanel'),
        closePanel: document.getElementById('closePanel'),
        panelIcon: document.getElementById('panelIcon'),
        panelTitle: document.getElementById('panelTitle'),
        panelContent: document.getElementById('panelContent'),
        relatedConcepts: document.getElementById('relatedConcepts'),
        quickTips: document.getElementById('quickTips'),
        tipsGrid: document.getElementById('tipsGrid'),
        checklistModal: null,
        closeChecklist: null,
        checklistItems: null,
        resetChecklist: null,
        filterBtns: document.querySelectorAll('.filter-btn'),
        nodes: document.querySelectorAll('.node'),
        tabBtns: document.querySelectorAll('.tab-btn')
    };

    // Level Management
    function initLevelSelection() {
        if (state.currentLevel) {
            hideOverlay();
            updateLevelUI();
        }
        document.querySelectorAll('.level-card').forEach(card => {
            card.addEventListener('click', () => selectLevel(card.dataset.level));
        });
        elements.changeLevelBtn.addEventListener('click', () => {
            elements.levelOverlay.style.display = 'flex';
        });
    }

    function selectLevel(level) {
        state.currentLevel = level;
        localStorage.setItem('aiLevel', level);
        hideOverlay();
        updateLevelUI();
        filterNodesByLevel();
    }

    function hideOverlay() {
        elements.levelOverlay.style.display = 'none';
    }

    function updateLevelUI() {
        const names = { beginner: '🌱 Người Mới', intermediate: '🌿 Trung Cấp', advanced: '🌳 Nâng Cao' };
        elements.levelBadge.textContent = names[state.currentLevel];
        if (state.currentLevel === 'beginner') {
            elements.quickTips.style.display = 'block';
            elements.tipsGrid.innerHTML = quickTips.map(t => `
                <div class="tip-card"><span class="tip-icon">${t.icon}</span><p>${t.text}</p></div>
            `).join('');
        } else {
            elements.quickTips.style.display = 'none';
        }
    }

    function filterNodesByLevel() {
        const order = ['beginner', 'intermediate', 'advanced'];
        const idx = order.indexOf(state.currentLevel);
        elements.nodes.forEach(node => {
            const badge = node.querySelector('.node-badge');
            if (badge) {
                const lvl = badge.classList.contains('beginner') ? 0 : badge.classList.contains('intermediate') ? 1 : 2;
                node.classList.toggle('locked', lvl > idx);
                node.style.opacity = lvl > idx ? '0.5' : '1';
                node.style.pointerEvents = lvl > idx ? 'none' : 'auto';
            }
        });
    }

    // Category Filter
    function initCategoryFilter() {
        elements.filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                elements.filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const cat = btn.dataset.category;
                document.querySelectorAll('.concept-section').forEach(s => {
                    s.style.display = (cat === 'all' || s.dataset.category === cat) ? 'block' : 'none';
                });
            });
        });
    }

    // Node Interaction
    function initNodeInteraction() {
        elements.nodes.forEach(node => {
            node.addEventListener('click', () => {
                if (node.classList.contains('locked')) return;
                showComponentInfo(node.dataset.component);
                elements.nodes.forEach(n => n.classList.remove('active'));
                node.classList.add('active');
            });
        });
    }

    function showComponentInfo(id) {
        const c = allComponents[id];
        if (!c) return;
        state.selectedComponent = id;
        elements.panelIcon.textContent = c.icon;
        elements.panelTitle.textContent = c.title;
        showTabContent('simple');
        renderRelated(c.connections || []);
        elements.infoPanel.classList.add('open');
    }

    function showTabContent(tab) {
        state.currentTab = tab;
        const c = allComponents[state.selectedComponent];
        elements.tabBtns.forEach(b => b.classList.toggle('active', b.dataset.tab === tab));
        elements.panelContent.innerHTML = c[tab] || c.simple || '';
    }

    function renderRelated(conns) {
        if (!conns.length) {
            elements.relatedConcepts.innerHTML = '<p class="no-connections">Không có</p>';
            return;
        }
        elements.relatedConcepts.innerHTML = conns.map(id => {
            const r = allComponents[id];
            return r ? `<button class="related-btn" data-component="${id}">${r.icon} ${r.title}</button>` : '';
        }).join('');
        elements.relatedConcepts.querySelectorAll('.related-btn').forEach(b => {
            b.addEventListener('click', () => showComponentInfo(b.dataset.component));
        });
    }

    function initPanelControls() {
        elements.closePanel.addEventListener('click', () => {
            elements.infoPanel.classList.remove('open');
        });
        elements.tabBtns.forEach(b => {
            b.addEventListener('click', () => showTabContent(b.dataset.tab));
        });
    }

    // Tour
    function initTourSystem() {
        elements.startTourBtn.addEventListener('click', startTour);
        elements.tourPrev.addEventListener('click', () => showTourStep(state.tourStepIndex - 1));
        elements.tourNext.addEventListener('click', () => {
            const steps = tourSteps[state.currentLevel] || tourSteps.beginner;
            if (state.tourStepIndex >= steps.length - 1) endTour();
            else showTourStep(state.tourStepIndex + 1);
        });
        elements.tourSkip.addEventListener('click', endTour);
    }

    function startTour() {
        state.isTourActive = true;
        state.tourStepIndex = 0;
        const steps = tourSteps[state.currentLevel] || tourSteps.beginner;
        elements.totalSteps.textContent = steps.length;
        elements.tourProgress.style.display = 'block';
        elements.tourPanel.style.display = 'block';
        showTourStep(0);
    }

    function showTourStep(idx) {
        const steps = tourSteps[state.currentLevel] || tourSteps.beginner;
        if (idx < 0 || idx >= steps.length) return;
        state.tourStepIndex = idx;
        const step = steps[idx];
        elements.currentStep.textContent = idx + 1;
        elements.tourTitle.textContent = step.title;
        elements.tourDescription.textContent = step.description;
        elements.progressFill.style.width = `${((idx + 1) / steps.length) * 100}%`;
        document.querySelectorAll('.tour-highlight').forEach(e => e.classList.remove('tour-highlight'));
        if (step.target) {
            const t = document.querySelector(step.target);
            if (t) { t.classList.add('tour-highlight'); t.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
        }
        elements.tourPrev.disabled = idx === 0;
        elements.tourNext.textContent = idx === steps.length - 1 ? 'Hoàn thành' : 'Tiếp theo →';
    }

    function endTour() {
        state.isTourActive = false;
        elements.tourProgress.style.display = 'none';
        elements.tourPanel.style.display = 'none';
        document.querySelectorAll('.tour-highlight').forEach(e => e.classList.remove('tour-highlight'));
    }

    // Examples Modal
    const promptExamples = [
        {
            id: 'basic',
            icon: '✏️',
            label: 'Cơ bản',
            title: '✏️ Prompting Cơ Bản — Rõ ràng & Cụ thể',
            description: 'Prompt tốt phải rõ ràng, có ngữ cảnh, và nói chính xác điều bạn muốn.',
            bad: 'Viết cho tôi cái gì đó về marketing.',
            good: 'Viết 5 caption Instagram cho shop bán quần áo mùa hè, mỗi caption dưới 150 ký tự, giọng trẻ trung vui vẻ, có emoji.',
            result: '☀️ Hè rực rỡ, style lên đỉnh! Áo mới về - mát mẻ mà vẫn cháy 🔥\n🌴 Mix đồ hè chill chưa? Xem ngay BST mới, giá từ 199K! 💃\n...',
            tip: '💡 Nguyên tắc: Context + Yêu cầu cụ thể + Format mong muốn = Kết quả tốt'
        },
        {
            id: 'role',
            icon: '🎭',
            label: 'Role',
            title: '🎭 Role Prompting — Gán vai trò chuyên gia',
            description: 'Khi gán vai trò cho AI, bạn nhận được câu trả lời chuyên sâu, đúng góc nhìn chuyên gia.',
            bad: 'Giải thích blockchain.',
            good: 'Bạn là giáo viên dạy cho học sinh lớp 10. Hãy giải thích blockchain bằng ví dụ đời thường mà học sinh dễ hiểu.',
            result: 'Hãy tưởng tượng blockchain giống như một cuốn sổ ghi chép mà cả lớp mình cùng giữ. Khi bạn A cho bạn B mượn bút, tất cả mọi người đều ghi lại vào sổ. Không ai có thể tẩy xóa được vì mọi người đều có bản copy...',
            tip: '💡 Template: "Bạn là [vai trò] với [kinh nghiệm]. Nhiệm vụ: [mục tiêu]. Hãy [hành động cụ thể]."'
        },
        {
            id: 'cot',
            icon: '🔗',
            label: 'Chain of Thought',
            title: '🔗 Chain of Thought — Suy nghĩ từng bước',
            description: 'Yêu cầu AI suy luận từng bước giúp tránh sai sót, đặc biệt với bài toán logic.',
            bad: '9.11 và 9.9 cái nào lớn hơn?',
            good: 'So sánh 9.11 và 9.9. Hãy suy nghĩ từng bước:\n1. Phần nguyên của hai số\n2. Phần thập phân của hai số\n3. Kết luận',
            result: 'Bước 1: Phần nguyên cả hai đều là 9 → bằng nhau\nBước 2: Phần thập phân: 0.11 vs 0.9 → 0.9 = 0.90 > 0.11\nBước 3: Vậy 9.9 > 9.11 ✓',
            tip: '💡 Chỉ cần thêm "Hãy suy nghĩ từng bước" vào cuối prompt đã cải thiện accuracy 20-40%!'
        },
        {
            id: 'few-shot',
            icon: '📝',
            label: 'Few-Shot',
            title: '📝 Few-Shot — Cho ví dụ mẫu',
            description: 'Cho AI vài ví dụ mẫu để nó hiểu pattern và output bạn mong muốn.',
            bad: 'Phân loại cảm xúc đánh giá sản phẩm.',
            good: 'Phân loại cảm xúc đánh giá sản phẩm:\n\n"Sản phẩm tuyệt vời, giao nhanh!" → Tích cực\n"Hàng tệ, không đúng mô tả" → Tiêu cực\n"Giao hàng chậm nhưng chất lượng ổn" → Trung lập\n\n"Đóng gói cẩn thận, rất hài lòng" → ?',
            result: '→ Tích cực\n\nAI hiểu pattern (review → cảm xúc) và áp dụng chính xác cho input mới.',
            tip: '💡 2-5 ví dụ đa dạng là đủ. Bao gồm cả edge cases để AI xử lý tốt hơn.'
        },
        {
            id: 'system',
            icon: '⚙️',
            label: 'System Prompt',
            title: '⚙️ System Prompt — Định hình AI từ đầu',
            description: 'System prompt thiết lập "tính cách" và quy tắc cho AI xuyên suốt cuộc hội thoại.',
            bad: '(Không có system prompt)\nUser: Tư vấn tôi về SEO.',
            good: 'System: "Bạn là chuyên gia SEO 10 năm kinh nghiệm. Luôn phân tích từ góc độ search engine. Trả lời bằng bullet points. Giới hạn 200 từ. Đề xuất keywords ở cuối mỗi câu trả lời."\n\nUser: Tư vấn tôi về SEO cho shop hoa online.',
            result: '• Title tag: Đặt keyword chính "shop hoa online" đầu tiên\n• Meta description: Viết dưới 155 ký tự, có call-to-action\n• Content: Mỗi trang hoa nên có ít nhất 300 từ mô tả...\n\n📌 Keywords đề xuất: shop hoa online, đặt hoa tươi, giao hoa tận nơi, hoa sinh nhật',
            tip: '💡 Công thức: Identity + Behavior + Constraints + Format = System Prompt hiệu quả'
        },
        {
            id: 'meta',
            icon: '🎓',
            label: 'Nâng cao',
            title: '🎓 Kỹ thuật Nâng Cao — Meta-Prompting & Chaining',
            description: 'Dùng AI để cải thiện chính prompt của bạn, hoặc nối nhiều prompt thành pipeline.',
            bad: 'Viết bài blog hay về Python.',
            good: 'Meta-Prompting:\n"Tôi muốn viết bài blog về Python cho người mới. Hãy viết cho tôi prompt tốt nhất để yêu cầu AI viết bài blog này, bao gồm cả format và yêu cầu chi tiết."\n\nPrompt Chaining:\nStep 1: "Liệt kê 5 chủ đề Python phổ biến nhất cho người mới"\nStep 2: "Từ chủ đề #1, tạo outline bài viết 1500 từ"\nStep 3: "Viết bài hoàn chỉnh từ outline này"',
            result: 'Meta-prompt output: "Viết bài blog 1500 từ về Python cho người mới bắt đầu. Bao gồm: mở bài gây tò mò, 5 lý do học Python, ví dụ code đơn giản cho mỗi lý do, bảng so sánh Python vs ngôn ngữ khác..."\n\n→ Prompt này cho kết quả tốt hơn rất nhiều!',
            tip: '💡 Khi cần kết quả phức tạp, hãy chia thành nhiều bước. Output bước trước = Input bước sau.'
        }
    ];

    function initExamplesModal() {
        elements.examplesBtn.addEventListener('click', () => {
            elements.examplesModal.style.display = 'flex';
            renderExamples('basic');
        });
        elements.closeExamples.addEventListener('click', () => {
            elements.examplesModal.style.display = 'none';
        });
        elements.examplesModal.addEventListener('click', e => {
            if (e.target === elements.examplesModal) elements.examplesModal.style.display = 'none';
        });

        // Render tabs
        elements.examplesTabs.innerHTML = promptExamples.map(ex =>
            `<button class="example-tab-btn${ex.id === 'basic' ? ' active' : ''}" data-example="${ex.id}">${ex.icon} ${ex.label}</button>`
        ).join('');
        elements.examplesTabs.querySelectorAll('.example-tab-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                elements.examplesTabs.querySelectorAll('.example-tab-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                renderExamples(btn.dataset.example);
            });
        });
    }

    function renderExamples(id) {
        const ex = promptExamples.find(e => e.id === id);
        if (!ex) return;
        elements.examplesContent.innerHTML = `
            <div class="example-demo">
                <h3>${ex.title}</h3>
                <p>${ex.description}</p>
                <div class="prompt-comparison">
                    <div class="prompt-card bad">
                        <span class="prompt-label">❌ Prompt kém</span>
                        <div class="prompt-text">${ex.bad}</div>
                    </div>
                    <div class="prompt-card good">
                        <span class="prompt-label">✅ Prompt tốt</span>
                        <div class="prompt-text">${ex.good}</div>
                    </div>
                </div>
                <div class="example-result">
                    <span class="result-label">🤖 AI trả lời (prompt tốt)</span>
                    <div class="result-text">${ex.result}</div>
                </div>
                <div class="example-tip">${ex.tip}</div>
            </div>
        `;
    }

    // Keyboard
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') {
            if (elements.examplesModal.style.display === 'flex') elements.examplesModal.style.display = 'none';
            else if (elements.infoPanel.classList.contains('open')) elements.infoPanel.classList.remove('open');
            else if (state.isTourActive) endTour();
        }
    });

    // Init
    function init() {
        initLevelSelection();
        initCategoryFilter();
        initNodeInteraction();
        initPanelControls();
        initTourSystem();
        initExamplesModal();
        if (state.currentLevel) filterNodesByLevel();
    }

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
    else init();
})();
