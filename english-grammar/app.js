// English Grammar - Main App
(function() {
    'use strict';

    const state = {
        currentLevel: null,
        currentTab: 'simple',
        isTourActive: false,
        tourStepIndex: 0,
        selectedComponent: null,
        activeCategory: 'all',
        activeView: 'all',
        searchQuery: '',
        exerciseScope: 'level',
        exerciseSize: 10,
        exerciseQuestions: [],
        exerciseIndex: 0,
        exerciseScore: 0,
        exerciseAnswers: [],
        exerciseAnswered: false
    };

    const allComponents = {
        ...grammarFoundationsData,
        ...grammarTensesData,
        ...grammarPronunciationData,
        ...grammarPatternsData,
        ...grammarStructuresData,
        ...grammarMistakesData,
        ...grammarSupplementsData,
        ...(typeof grammarExtrasData !== 'undefined' ? grammarExtrasData : {}),
        ...(typeof grammarComprehensiveData !== 'undefined' ? grammarComprehensiveData : {})
    };

    // Thứ tự hiển thị và tiêu đề của từng nhóm chủ điểm trong lưới học.
    const categoryMeta = {
        foundations: { title: '🧱 Nền Tảng Câu Tiếng Anh', note: 'Bộ khung để đặt câu đúng trước khi học các cấu trúc phức tạp.' },
        tenses: { title: '⏰ Tất Cả 12 Thì', note: 'Chọn đúng thì = xác định mốc thời gian, tính hoàn tất và liên hệ với hiện tại.' },
        patterns: { title: '🧩 Mẫu Câu & Liên Kết Ý', note: 'Cách hỏi, phủ định, so sánh và nối ý để câu chạy mượt.' },
        structures: { title: '🏗️ Cấu Trúc Nâng Cao', note: 'Bị động, điều kiện, mệnh đề và đảo ngữ – phần tạo khác biệt ở B2 trở lên.' },
        mistakes: { title: '⚠️ Lỗi Phổ Biến', note: 'Những lỗi người Việt hay mắc nhất khi viết và nói tiếng Anh.' },
        pronunciation: { title: '🗣️ IPA & Phát Âm', note: 'Đọc đúng ký hiệu để tự tra từ điển mà không cần đoán.' }
    };

    const exerciseBank = (typeof grammarExerciseBank !== 'undefined' ? grammarExerciseBank : []);
    const progress = typeof grammarProgress !== 'undefined' ? grammarProgress : null;

    const el = id => document.getElementById(id);

    const elements = {
        levelOverlay: el('levelOverlay'),
        levelBadge: el('levelBadge'),
        changeLevelBtn: el('changeLevelBtn'),
        startTourBtn: el('startTourBtn'),
        exerciseBtn: el('exerciseBtn'),
        exerciseModal: el('exerciseModal'),
        closeExercise: el('closeExercise'),
        exerciseSetup: el('exerciseSetup'),
        setupScope: el('setupScope'),
        setupSize: el('setupSize'),
        setupAvailable: el('setupAvailable'),
        scopeTopicBtn: el('scopeTopicBtn'),
        startExerciseBtn: el('startExerciseBtn'),
        exerciseRunner: el('exerciseRunner'),
        exerciseProgress: el('exerciseProgress'),
        exerciseProgressFill: el('exerciseProgressFill'),
        exerciseScoreLive: el('exerciseScoreLive'),
        exerciseContent: el('exerciseContent'),
        exerciseHint: document.querySelector('.exercise-hint'),
        exerciseQuestion: el('exerciseQuestion'),
        exerciseOptions: el('exerciseOptions'),
        exerciseResult: el('exerciseResult'),
        resultIcon: el('resultIcon'),
        resultMessage: el('resultMessage'),
        resultExplanation: el('resultExplanation'),
        nextQuestion: el('nextQuestion'),
        exerciseSummary: el('exerciseSummary'),
        summaryTitle: el('summaryTitle'),
        summaryScore: el('summaryScore'),
        summaryTopics: el('summaryTopics'),
        summaryDetails: el('summaryDetails'),
        retryWrongBtn: el('retryWrongBtn'),
        restartExercise: el('restartExercise'),
        closeSummaryBtn: el('closeSummaryBtn'),
        tourProgress: el('tourProgress'),
        tourPanel: el('tourPanel'),
        progressFill: el('progressFill'),
        currentStep: el('currentStep'),
        totalSteps: el('totalSteps'),
        tourTitle: el('tourTitle'),
        tourDescription: el('tourDescription'),
        tourPrev: el('tourPrev'),
        tourNext: el('tourNext'),
        tourSkip: el('tourSkip'),
        infoPanel: el('infoPanel'),
        panelBackdrop: el('panelBackdrop'),
        closePanel: el('closePanel'),
        panelIcon: el('panelIcon'),
        panelTitle: el('panelTitle'),
        panelContent: el('panelContent'),
        panelStat: el('panelStat'),
        markLearnedBtn: el('markLearnedBtn'),
        bookmarkBtn: el('bookmarkBtn'),
        practiceTopicBtn: el('practiceTopicBtn'),
        relatedConcepts: el('relatedConcepts'),
        quickTips: el('quickTips'),
        tipsGrid: el('tipsGrid'),
        irregularVerbSearch: el('irregularVerbSearch'),
        irregularVerbCount: el('irregularVerbCount'),
        irregularVerbsTableBody: el('irregularVerbsTableBody'),
        memoryBankGrid: el('memoryBankGrid'),
        conceptsGrid: el('conceptsGrid'),
        emptyState: el('emptyState'),
        resultCount: el('resultCount'),
        statLearned: el('statLearned'),
        statAvailable: el('statAvailable'),
        statDue: el('statDue'),
        statStreak: el('statStreak'),
        dashProgressFill: el('dashProgressFill'),
        dashReviewBtn: el('dashReviewBtn'),
        dashPracticeBtn: el('dashPracticeBtn'),
        dashResetBtn: el('dashResetBtn'),
        referenceLinks: document.querySelectorAll('.reference-link'),
        filterBtns: document.querySelectorAll('.filter-btn'),
        chipBtns: document.querySelectorAll('.chip-btn'),
        tabBtns: document.querySelectorAll('.tab-btn'),
        grammarSearch: el('grammarSearch'),
        clearGrammarSearch: el('clearGrammarSearch'),
        levelCards: el('levelCards'),
        nodes: []
    };

    const cefr = window.englishGrammarCefr || {
        order: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'],
        meta: {},
        normalizeLevel(level) {
            return level || 'B1';
        },
        getMeta(level) {
            return { code: level, className: String(level || 'b1').toLowerCase(), icon: '📘', name: level, description: '' };
        },
        getRank(level) {
            return this.order.indexOf(level);
        },
        resolveComponent(id, component) {
            return this.getMeta(this.normalizeLevel(component && component.level));
        }
    };

    const storedLevel = localStorage.getItem('englishGrammarLevel');
    state.currentLevel = storedLevel ? cefr.normalizeLevel(storedLevel) : null;

    function stripHtml(html) {
        return String(html || '')
            .replace(/<[^>]*>/g, ' ')
            .replace(/&nbsp;/g, ' ')
            .replace(/\s+/g, ' ')
            .trim();
    }

    function normalizeText(text) {
        return String(text || '')
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/đ/g, 'd')
            .replace(/Đ/g, 'd')
            .replace(/\s+/g, ' ')
            .trim();
    }

    const componentSearchIndex = Object.fromEntries(
        Object.entries(allComponents).map(([id, component]) => [
            id,
            normalizeText([
                id,
                component.title,
                stripHtml(component.simple).slice(0, 400),
                stripHtml(component.detail).slice(0, 300)
            ].join(' '))
        ])
    );

    function escapeHtml(text) {
        return String(text == null ? '' : text)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    function getComponentLevel(id, component) {
        return cefr.resolveComponent(id, component || allComponents[id]);
    }

    function isWithinLevel(id) {
        if (!state.currentLevel) return true;
        return cefr.getRank(getComponentLevel(id).code) <= cefr.getRank(state.currentLevel);
    }

    // ==================== LEVEL ====================
    function renderLevelCards() {
        if (!elements.levelCards) return;

        elements.levelCards.innerHTML = cefr.order.map(levelCode => {
            const meta = cefr.getMeta(levelCode);
            const count = Object.keys(allComponents).filter(id => getComponentLevel(id).code === meta.code).length;
            return `
                <div class="level-card" data-level="${meta.code}">
                    <div class="level-icon">${meta.icon}</div>
                    <h3>${meta.code} · ${escapeHtml(meta.name)}</h3>
                    <p>${escapeHtml(meta.description)}</p>
                    <p class="level-count">${count} chủ điểm mới ở mức này</p>
                    <button class="level-btn">Chọn ${meta.code}</button>
                </div>
            `;
        }).join('');

        elements.levelCards.querySelectorAll('.level-card').forEach(card => {
            card.addEventListener('click', () => selectLevel(card.dataset.level));
        });
    }

    function initLevelSelection() {
        renderLevelCards();

        if (state.currentLevel) {
            hideOverlay();
        } else {
            state.currentLevel = 'A1';
            elements.levelOverlay.style.display = 'flex';
        }

        updateLevelUI();
        elements.changeLevelBtn.addEventListener('click', () => {
            elements.levelOverlay.style.display = 'flex';
        });
    }

    function selectLevel(level) {
        state.currentLevel = cefr.normalizeLevel(level);
        localStorage.setItem('englishGrammarLevel', state.currentLevel);
        hideOverlay();
        updateLevelUI();
        renderConceptNodes();
        updateDashboard();
    }

    function hideOverlay() {
        elements.levelOverlay.style.display = 'none';
    }

    function updateLevelUI() {
        const meta = cefr.getMeta(state.currentLevel);
        elements.levelBadge.textContent = `${meta.icon} ${meta.code} ${meta.name}`;

        if (state.currentLevel === 'A1' || state.currentLevel === 'A2') {
            elements.quickTips.style.display = 'block';
            elements.tipsGrid.innerHTML = quickTips.map(tip => `
                <div class="tip-card"><span class="tip-icon">${tip.icon}</span><p>${escapeHtml(tip.text)}</p></div>
            `).join('');
        } else {
            elements.quickTips.style.display = 'none';
        }
    }

    // ==================== LƯỚI CHỦ ĐIỂM ====================
    function nodeMarkup(id, component) {
        const meta = getComponentLevel(id, component);
        const learned = progress && progress.isLearned(id);
        const saved = progress && progress.isBookmarked(id);
        const above = !isWithinLevel(id);

        return `
            <button type="button" class="node${learned ? ' learned' : ''}${above ? ' above-level' : ''}"
                    data-component="${escapeHtml(id)}" data-cefr="${meta.code}" data-category="${escapeHtml(component.category || '')}">
                <span class="node-icon">${escapeHtml(component.icon || '📘')}</span>
                <span class="node-title">${escapeHtml(component.title)}</span>
                <span class="node-badge ${meta.className}">${meta.code}</span>
                <span class="node-flags">
                    ${learned ? '<span class="node-flag done" title="Đã thuộc">✅</span>' : ''}
                    ${saved ? '<span class="node-flag save" title="Đã lưu">⭐</span>' : ''}
                </span>
            </button>
        `;
    }

    function renderConceptNodes() {
        if (!elements.conceptsGrid) return;

        const categories = Object.keys(categoryMeta).filter(category =>
            Object.values(allComponents).some(component => component.category === category)
        );

        elements.conceptsGrid.innerHTML = categories.map(category => {
            const meta = categoryMeta[category];
            const entries = Object.entries(allComponents).filter(([, component]) => component.category === category);

            return `
                <section class="concept-section" data-category="${category}">
                    <div class="section-head">
                        <h2 class="section-title">${meta.title}</h2>
                        <p class="section-note">${meta.note}</p>
                    </div>
                    <div class="nodes-container">
                        ${entries.map(([id, component]) => nodeMarkup(id, component)).join('')}
                    </div>
                </section>
            `;
        }).join('');

        elements.nodes = Array.from(elements.conceptsGrid.querySelectorAll('.node'));
        elements.nodes.forEach(node => {
            node.addEventListener('click', () => activateComponent(node.dataset.component));
        });

        updateConceptVisibility();
    }

    function refreshNode(id) {
        const node = elements.conceptsGrid.querySelector(`.node[data-component="${CSS.escape(id)}"]`);
        if (!node) return;

        const learned = progress && progress.isLearned(id);
        const saved = progress && progress.isBookmarked(id);
        node.classList.toggle('learned', Boolean(learned));
        node.querySelector('.node-flags').innerHTML =
            `${learned ? '<span class="node-flag done" title="Đã thuộc">✅</span>' : ''}${saved ? '<span class="node-flag save" title="Đã lưu">⭐</span>' : ''}`;
    }

    function matchesView(id) {
        if (state.activeView === 'level') return isWithinLevel(id);
        if (state.activeView === 'todo') return !(progress && progress.isLearned(id));
        if (state.activeView === 'bookmark') return Boolean(progress && progress.isBookmarked(id));
        return true;
    }

    function updateConceptVisibility() {
        let total = 0;

        document.querySelectorAll('.concept-section').forEach(section => {
            const matchesCategory = state.searchQuery
                ? true
                : state.activeCategory === 'all' || section.dataset.category === state.activeCategory;

            let visibleNodes = 0;

            section.querySelectorAll('.node').forEach(node => {
                const id = node.dataset.component;
                const matchesSearch = !state.searchQuery || (componentSearchIndex[id] || '').includes(state.searchQuery);
                const visible = matchesCategory && matchesSearch && matchesView(id);
                node.hidden = !visible;
                if (visible) visibleNodes += 1;
            });

            section.hidden = visibleNodes === 0;
            total += visibleNodes;
        });

        if (elements.resultCount) {
            elements.resultCount.textContent = `${total}/${Object.keys(allComponents).length} chủ điểm`;
        }
        if (elements.emptyState) {
            elements.emptyState.hidden = total > 0;
        }
    }

    function initFilters() {
        elements.filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                elements.filterBtns.forEach(item => item.classList.remove('active'));
                btn.classList.add('active');
                state.activeCategory = btn.dataset.category;
                updateConceptVisibility();
            });
        });

        elements.chipBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                elements.chipBtns.forEach(item => item.classList.remove('active'));
                btn.classList.add('active');
                state.activeView = btn.dataset.view;
                updateConceptVisibility();
            });
        });
    }

    function initGrammarSearch() {
        if (!elements.grammarSearch) return;

        elements.grammarSearch.addEventListener('input', () => {
            state.searchQuery = normalizeText(elements.grammarSearch.value.trim());
            updateConceptVisibility();
        });

        elements.clearGrammarSearch.addEventListener('click', () => {
            elements.grammarSearch.value = '';
            state.searchQuery = '';
            updateConceptVisibility();
            elements.grammarSearch.focus();
        });
    }

    // ==================== PANEL CHI TIẾT ====================
    function activateComponent(id, options = {}) {
        const component = allComponents[id];
        if (!component) return;

        showComponentInfo(id);
        elements.nodes.forEach(item => item.classList.remove('active'));

        const targetNode = elements.conceptsGrid.querySelector(`.node[data-component="${CSS.escape(id)}"]`);
        if (targetNode) {
            targetNode.classList.add('active');
            if (options.scrollIntoView) {
                targetNode.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
    }

    function showComponentInfo(id) {
        const component = allComponents[id];
        if (!component) return;

        state.selectedComponent = id;
        const meta = getComponentLevel(id, component);
        elements.panelIcon.textContent = component.icon;
        elements.panelTitle.textContent = `${component.title} · ${meta.code}`;
        showTabContent('simple');
        renderRelated(component.connections || []);
        updatePanelActions(id);
        openInfoPanel();
    }

    function updatePanelActions(id) {
        const learned = progress && progress.isLearned(id);
        const saved = progress && progress.isBookmarked(id);

        elements.markLearnedBtn.textContent = learned ? '✅ Đã thuộc' : '✅ Đánh dấu đã thuộc';
        elements.markLearnedBtn.classList.toggle('active', Boolean(learned));
        elements.bookmarkBtn.textContent = saved ? '⭐ Đã lưu' : '⭐ Lưu lại';
        elements.bookmarkBtn.classList.toggle('active', Boolean(saved));

        const pool = exerciseBank.filter(question => question.component === id);
        elements.practiceTopicBtn.hidden = pool.length === 0;
        elements.practiceTopicBtn.textContent = `📝 Luyện ${pool.length} câu chủ điểm này`;

        const stat = progress && progress.getTopicStat(id);
        elements.panelStat.textContent = stat
            ? `Kết quả luyện tập: ${stat.right} đúng / ${stat.right + stat.wrong} câu`
            : '';
    }

    function openInfoPanel() {
        elements.infoPanel.classList.add('open');
        elements.panelBackdrop.classList.add('open');
    }

    function closeInfoPanel() {
        elements.infoPanel.classList.remove('open');
        elements.panelBackdrop.classList.remove('open');
    }

    function showTabContent(tab) {
        state.currentTab = tab;
        const component = allComponents[state.selectedComponent];
        if (!component) return;

        elements.tabBtns.forEach(btn => btn.classList.toggle('active', btn.dataset.tab === tab));
        elements.panelContent.scrollTop = 0;

        if (tab === 'practice') {
            elements.panelContent.innerHTML = renderPracticeContent(state.selectedComponent, component);
            return;
        }

        elements.panelContent.innerHTML = component[tab] || component.simple || '';
    }

    function renderRelated(connections) {
        const valid = connections.filter(id => allComponents[id]);

        if (!valid.length) {
            elements.relatedConcepts.innerHTML = '<p class="no-connections">Không có</p>';
            return;
        }

        elements.relatedConcepts.innerHTML = valid.map(id => {
            const related = allComponents[id];
            return `<button class="related-btn" data-component="${escapeHtml(id)}">${related.icon} ${escapeHtml(related.title)}</button>`;
        }).join('');

        elements.relatedConcepts.querySelectorAll('.related-btn').forEach(button => {
            button.addEventListener('click', () => activateComponent(button.dataset.component, { scrollIntoView: true }));
        });
    }

    function initPanelControls() {
        elements.closePanel.addEventListener('click', closeInfoPanel);
        elements.panelBackdrop.addEventListener('click', closeInfoPanel);

        elements.tabBtns.forEach(btn => {
            btn.addEventListener('click', () => showTabContent(btn.dataset.tab));
        });

        elements.markLearnedBtn.addEventListener('click', () => {
            if (!progress || !state.selectedComponent) return;
            progress.toggleLearned(state.selectedComponent);
            updatePanelActions(state.selectedComponent);
            refreshNode(state.selectedComponent);
            updateConceptVisibility();
            updateDashboard();
        });

        elements.bookmarkBtn.addEventListener('click', () => {
            if (!progress || !state.selectedComponent) return;
            progress.toggleBookmark(state.selectedComponent);
            updatePanelActions(state.selectedComponent);
            refreshNode(state.selectedComponent);
            updateConceptVisibility();
        });

        elements.practiceTopicBtn.addEventListener('click', () => {
            openExerciseModal('topic');
        });
    }

    // ==================== TOUR ====================
    function initTourSystem() {
        elements.startTourBtn.addEventListener('click', startTour);
        elements.tourPrev.addEventListener('click', () => showTourStep(state.tourStepIndex - 1));
        elements.tourNext.addEventListener('click', () => {
            const steps = tourSteps[state.currentLevel] || tourSteps.A1;
            if (state.tourStepIndex >= steps.length - 1) {
                endTour();
            } else {
                showTourStep(state.tourStepIndex + 1);
            }
        });
        elements.tourSkip.addEventListener('click', endTour);
    }

    function startTour() {
        state.isTourActive = true;
        state.tourStepIndex = 0;
        const steps = tourSteps[state.currentLevel] || tourSteps.A1;
        elements.totalSteps.textContent = steps.length;
        elements.tourProgress.style.display = 'block';
        elements.tourPanel.style.display = 'block';
        showTourStep(0);
    }

    function showTourStep(index) {
        const steps = tourSteps[state.currentLevel] || tourSteps.A1;
        if (index < 0 || index >= steps.length) return;

        state.tourStepIndex = index;
        const step = steps[index];

        elements.currentStep.textContent = index + 1;
        elements.tourTitle.textContent = step.title;
        elements.tourDescription.textContent = step.description;
        elements.progressFill.style.width = `${((index + 1) / steps.length) * 100}%`;

        document.querySelectorAll('.tour-highlight').forEach(node => node.classList.remove('tour-highlight'));

        if (step.target) {
            const target = document.querySelector(step.target);
            if (target) {
                target.classList.add('tour-highlight');
                target.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }

        elements.tourPrev.disabled = index === 0;
        elements.tourNext.textContent = index >= steps.length - 1 ? 'Hoàn thành ✓' : 'Tiếp theo →';
    }

    function endTour() {
        state.isTourActive = false;
        elements.tourProgress.style.display = 'none';
        elements.tourPanel.style.display = 'none';
        document.querySelectorAll('.tour-highlight').forEach(node => node.classList.remove('tour-highlight'));
    }

    // ==================== HỆ THỐNG LUYỆN TẬP ====================
    function shuffleArray(array) {
        const shuffled = array.slice();
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    // Xáo trộn cả thứ tự phương án để người học không đoán được vị trí đáp án đúng.
    function prepareQuestion(question) {
        const correctText = question.options[question.correct];
        const options = shuffleArray(question.options);
        return Object.assign({}, question, {
            options,
            correct: options.indexOf(correctText)
        });
    }

    function questionsForScope(scope) {
        if (scope === 'topic') {
            return exerciseBank.filter(question => question.component === state.selectedComponent);
        }

        if (scope === 'review') {
            if (!progress) return [];
            const due = progress.dueQuestions(exerciseBank);
            const weak = progress.weakQuestions(exerciseBank);
            const merged = new Map();
            weak.concat(due).forEach(question => merged.set(question.id, question));
            return Array.from(merged.values());
        }

        if (scope === 'level' && state.currentLevel) {
            const rank = cefr.getRank(state.currentLevel);
            return exerciseBank.filter(question => cefr.getRank(question.level) <= rank);
        }

        return exerciseBank.slice();
    }

    function buildSession(scope, size) {
        let pool = questionsForScope(scope);

        // Ưu tiên câu đã đến hạn ôn hoặc từng làm sai, sau đó mới tới câu mới.
        if (progress && scope !== 'review') {
            const priority = new Set(progress.weakQuestions(pool).concat(progress.dueQuestions(pool)).map(item => item.id));
            const first = shuffleArray(pool.filter(item => priority.has(item.id)));
            const rest = shuffleArray(pool.filter(item => !priority.has(item.id)));
            pool = first.concat(rest);
        } else {
            pool = shuffleArray(pool);
        }

        const limited = size > 0 ? pool.slice(0, size) : pool;
        return limited.map(prepareQuestion);
    }

    function updateSetupAvailability() {
        const pool = questionsForScope(state.exerciseScope);
        const label = {
            level: `đúng trình độ ${state.currentLevel || 'A1'} trở xuống`,
            all: 'trong toàn bộ ngân hàng',
            review: 'đang chờ ôn lại',
            topic: 'thuộc chủ điểm đang mở'
        }[state.exerciseScope];

        elements.setupAvailable.textContent = pool.length
            ? `Có ${pool.length} câu ${label}.`
            : state.exerciseScope === 'review'
                ? 'Chưa có câu nào cần ôn. Hãy làm một lượt luyện tập trước đã.'
                : 'Chưa có câu hỏi nào cho phạm vi này.';
        elements.startExerciseBtn.disabled = pool.length === 0;
    }

    function setScope(scope) {
        state.exerciseScope = scope;
        elements.setupScope.querySelectorAll('.setup-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.scope === scope);
        });
        updateSetupAvailability();
    }

    function openExerciseModal(scope) {
        const topicPool = state.selectedComponent
            ? exerciseBank.filter(question => question.component === state.selectedComponent).length
            : 0;

        elements.scopeTopicBtn.hidden = topicPool === 0;
        if (topicPool > 0) {
            elements.scopeTopicBtn.textContent = `Chủ điểm: ${allComponents[state.selectedComponent].title}`;
        }

        setScope(scope === 'topic' && topicPool > 0 ? 'topic' : (scope || 'level'));

        elements.exerciseModal.style.display = 'flex';
        elements.exerciseSetup.hidden = false;
        elements.exerciseRunner.hidden = true;
        elements.exerciseSummary.hidden = true;
    }

    function closeExerciseModal() {
        elements.exerciseModal.style.display = 'none';
    }

    function startExercise(questions) {
        state.exerciseQuestions = questions || buildSession(state.exerciseScope, state.exerciseSize);
        if (!state.exerciseQuestions.length) return;

        state.exerciseIndex = 0;
        state.exerciseScore = 0;
        state.exerciseAnswers = [];

        elements.exerciseSetup.hidden = true;
        elements.exerciseSummary.hidden = true;
        elements.exerciseRunner.hidden = false;
        showQuestion();
    }

    function showQuestion() {
        const question = state.exerciseQuestions[state.exerciseIndex];
        if (!question) {
            showExerciseSummary();
            return;
        }

        state.exerciseAnswered = false;
        elements.exerciseResult.hidden = true;
        if (elements.exerciseHint) elements.exerciseHint.hidden = false;

        const total = state.exerciseQuestions.length;
        const current = state.exerciseIndex + 1;
        elements.exerciseProgress.textContent = `Câu ${current}/${total}`;
        elements.exerciseProgressFill.style.width = `${(current / total) * 100}%`;
        elements.exerciseScoreLive.textContent = `✅ ${state.exerciseScore} · ❌ ${state.exerciseAnswers.length - state.exerciseScore}`;

        const mastery = progress ? progress.masteryOf(question) : 0;
        elements.exerciseQuestion.innerHTML = `
            <div class="exercise-meta">
                <span class="exercise-topic">${escapeHtml(question.topic)}</span>
                <span class="exercise-level">${escapeHtml(question.level)}</span>
                ${mastery > 0 ? `<span class="exercise-mastery" title="Mức nhớ theo hộp Leitner">${'●'.repeat(mastery)}${'○'.repeat(5 - mastery)}</span>` : ''}
            </div>
            <div class="exercise-text">${escapeHtml(question.question)}</div>
        `;

        elements.exerciseOptions.innerHTML = question.options.map((option, index) => `
            <button class="exercise-option" data-index="${index}">
                <span class="option-key">${index + 1}</span>
                <span class="option-text">${escapeHtml(option)}</span>
            </button>
        `).join('');

        elements.exerciseOptions.querySelectorAll('.exercise-option').forEach(btn => {
            btn.addEventListener('click', () => selectAnswer(Number(btn.dataset.index)));
        });
    }

    function selectAnswer(selectedIndex) {
        if (state.exerciseAnswered) return;

        const question = state.exerciseQuestions[state.exerciseIndex];
        const isCorrect = selectedIndex === question.correct;
        state.exerciseAnswered = true;

        if (isCorrect) state.exerciseScore += 1;

        state.exerciseAnswers.push({
            question,
            selected: question.options[selectedIndex],
            isCorrect
        });

        if (progress) progress.recordAnswer(question, isCorrect);

        elements.exerciseOptions.querySelectorAll('.exercise-option').forEach((btn, index) => {
            btn.disabled = true;
            if (index === question.correct) btn.classList.add('correct');
            if (index === selectedIndex && !isCorrect) btn.classList.add('wrong');
        });

        // Giữ nguyên câu hỏi và các phương án (đã tô đúng/sai) để người học đối chiếu khi đọc giải thích.
        elements.exerciseResult.hidden = false;
        if (elements.exerciseHint) elements.exerciseHint.hidden = true;
        elements.resultIcon.textContent = isCorrect ? '✅' : '❌';
        elements.resultMessage.innerHTML = isCorrect
            ? '<strong>Chính xác!</strong>'
            : `<strong>Chưa đúng.</strong> Bạn chọn: <em>${escapeHtml(question.options[selectedIndex])}</em>`;
        elements.resultExplanation.innerHTML = `
            <p><strong>Đáp án đúng:</strong> ${escapeHtml(question.options[question.correct])}</p>
            <p><strong>Vì sao:</strong> ${escapeHtml(question.explanation)}</p>
            ${allComponents[question.component] ? `<button class="result-link" data-component="${escapeHtml(question.component)}">📘 Mở bài học: ${escapeHtml(allComponents[question.component].title)}</button>` : ''}
        `;

        const link = elements.resultExplanation.querySelector('.result-link');
        if (link) {
            link.addEventListener('click', () => {
                closeExerciseModal();
                activateComponent(link.dataset.component, { scrollIntoView: true });
            });
        }

        elements.nextQuestion.textContent = state.exerciseIndex >= state.exerciseQuestions.length - 1
            ? 'Xem kết quả →'
            : 'Câu tiếp theo →';
        elements.nextQuestion.focus();
    }

    function showNextQuestion() {
        state.exerciseIndex += 1;

        if (state.exerciseIndex >= state.exerciseQuestions.length) {
            showExerciseSummary();
        } else {
            showQuestion();
        }
    }

    function showExerciseSummary() {
        elements.exerciseRunner.hidden = true;
        elements.exerciseSummary.hidden = false;

        const total = state.exerciseAnswers.length;
        const score = state.exerciseScore;
        const percentage = total ? Math.round((score / total) * 100) : 0;
        const wrong = state.exerciseAnswers.filter(answer => !answer.isCorrect);

        let emoji = '📖';
        if (percentage >= 90) emoji = '🏆';
        else if (percentage >= 70) emoji = '🎉';
        else if (percentage >= 50) emoji = '💪';

        const streak = progress ? progress.finishSession({ total, score, scope: state.exerciseScope }) : 0;

        elements.summaryTitle.textContent = wrong.length ? '📊 Kết quả' : '🎉 Toàn bộ chính xác!';
        elements.summaryScore.innerHTML = `
            <div class="score-emoji">${emoji}</div>
            <div class="score-number">${score}/${total}</div>
            <div class="score-percent">${percentage}%</div>
            ${streak ? `<div class="score-streak">🔥 Chuỗi ${streak} ngày học liên tiếp</div>` : ''}
        `;

        // Thống kê theo chủ điểm để người học biết nên quay lại đọc bài nào.
        const byTopic = {};
        state.exerciseAnswers.forEach(answer => {
            const key = answer.question.topic;
            byTopic[key] = byTopic[key] || { right: 0, total: 0, component: answer.question.component };
            byTopic[key].total += 1;
            if (answer.isCorrect) byTopic[key].right += 1;
        });

        const weakTopics = Object.entries(byTopic)
            .filter(([, stat]) => stat.right < stat.total)
            .sort((a, b) => (a[1].right / a[1].total) - (b[1].right / b[1].total));

        elements.summaryTopics.innerHTML = weakTopics.length
            ? `<h4>Nên ôn lại</h4><div class="topic-chips">${weakTopics.map(([topic, stat]) => `
                    <button class="topic-chip" data-component="${escapeHtml(stat.component)}">${escapeHtml(topic)} · ${stat.right}/${stat.total}</button>
                `).join('')}</div>`
            : '<p class="summary-clean">Không có chủ điểm nào cần ôn lại trong lượt này.</p>';

        elements.summaryTopics.querySelectorAll('.topic-chip').forEach(chip => {
            chip.addEventListener('click', () => {
                closeExerciseModal();
                activateComponent(chip.dataset.component, { scrollIntoView: true });
            });
        });

        elements.summaryDetails.innerHTML = wrong.length
            ? `<h4>Các câu làm sai</h4>${wrong.map(answer => `
                    <div class="summary-item incorrect">
                        <div class="summary-question">${escapeHtml(answer.question.question)}</div>
                        <div class="summary-answer"><span class="tag wrong">Bạn chọn</span> ${escapeHtml(answer.selected)}</div>
                        <div class="summary-answer"><span class="tag right">Đáp án</span> ${escapeHtml(answer.question.options[answer.question.correct])}</div>
                        <div class="summary-explain">${escapeHtml(answer.question.explanation)}</div>
                    </div>
                `).join('')}`
            : '';

        elements.retryWrongBtn.hidden = wrong.length === 0;
        updateDashboard();
    }

    function initExerciseSystem() {
        elements.exerciseBtn.addEventListener('click', () => openExerciseModal('level'));
        elements.closeExercise.addEventListener('click', closeExerciseModal);
        elements.closeSummaryBtn.addEventListener('click', closeExerciseModal);

        elements.exerciseModal.addEventListener('click', event => {
            if (event.target === elements.exerciseModal) closeExerciseModal();
        });

        elements.setupScope.querySelectorAll('.setup-btn').forEach(btn => {
            btn.addEventListener('click', () => setScope(btn.dataset.scope));
        });

        elements.setupSize.querySelectorAll('.setup-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                elements.setupSize.querySelectorAll('.setup-btn').forEach(item => item.classList.remove('active'));
                btn.classList.add('active');
                state.exerciseSize = Number(btn.dataset.size);
            });
        });

        elements.startExerciseBtn.addEventListener('click', () => startExercise());
        elements.nextQuestion.addEventListener('click', showNextQuestion);

        elements.restartExercise.addEventListener('click', () => {
            elements.exerciseSummary.hidden = true;
            elements.exerciseSetup.hidden = false;
            updateSetupAvailability();
        });

        elements.retryWrongBtn.addEventListener('click', () => {
            const wrong = state.exerciseAnswers
                .filter(answer => !answer.isCorrect)
                .map(answer => prepareQuestion(answer.question));
            startExercise(wrong);
        });

        elements.dashPracticeBtn.addEventListener('click', () => {
            state.exerciseSize = 10;
            openExerciseModal('level');
        });

        elements.dashReviewBtn.addEventListener('click', () => openExerciseModal('review'));

        elements.dashResetBtn.addEventListener('click', () => {
            if (!progress) return;
            if (!window.confirm('Xóa toàn bộ tiến độ học (chủ điểm đã thuộc, mục đã lưu, lịch ôn)?')) return;
            progress.reset();
            renderConceptNodes();
            updateDashboard();
            if (state.selectedComponent) updatePanelActions(state.selectedComponent);
        });
    }

    // ==================== DASHBOARD ====================
    function updateDashboard() {
        if (!progress) return;

        const ids = Object.keys(allComponents);
        const available = ids.filter(isWithinLevel);
        const learnedInScope = available.filter(id => progress.isLearned(id)).length;

        // Hiển thị cùng phạm vi với thanh tiến độ bên dưới để hai con số không mâu thuẫn nhau.
        elements.statLearned.textContent = learnedInScope;
        elements.statAvailable.textContent = available.length;
        elements.statDue.textContent = progress.dueQuestions(exerciseBank).length;
        elements.statStreak.textContent = progress.getStreak();
        elements.dashProgressFill.style.width = available.length
            ? `${Math.round((learnedInScope / available.length) * 100)}%`
            : '0%';
    }

    // ==================== NGÂN HÀNG DỮ LIỆU PHỤ ====================
    const tierLabel = { core: '🎯 Cơ bản', derived: '🧩 Từ ghép', extra: '📖 Hiếm/văn học' };

    function initIrregularVerbBank() {
        if (!elements.irregularVerbsTableBody || !Array.isArray(irregularVerbs)) return;

        const verbGroups = typeof irregularVerbGroups !== 'undefined' ? irregularVerbGroups : {};
        const verbState = { activeGroups: new Set(['all', 'same', 'pastpart', 'basepart', 'other']), activeTier: 'all' };
        const legendChips = document.querySelectorAll('#verbLegend .verb-legend-chip');
        const tierChips = document.querySelectorAll('#verbTierFilter .chip-btn');
        const tierCountAll = el('tierCountAll');
        if (tierCountAll) tierCountAll.textContent = irregularVerbs.length;

        const render = () => {
            const query = normalizeText(elements.irregularVerbSearch ? elements.irregularVerbSearch.value : '');
            const filtered = irregularVerbs.filter(verb => {
                const matchesGroup = verbState.activeGroups.has('all') || verbState.activeGroups.has(verb.group);
                const matchesTier = verbState.activeTier === 'all' || verb.tier === verbState.activeTier;
                const searchText = normalizeText([verb.base, verb.past, verb.participle, verb.meaning].join(' '));
                const matchesSearch = !query || searchText.includes(query);
                return matchesGroup && matchesTier && matchesSearch;
            });

            elements.irregularVerbsTableBody.innerHTML = filtered.map(verb => `
                <tr class="verb-row group-${verb.group}">
                    <td><strong>${escapeHtml(verb.base)}</strong></td>
                    <td>${escapeHtml(verb.past)}</td>
                    <td>${escapeHtml(verb.participle)}</td>
                    <td>
                        ${escapeHtml(verb.meaning)}
                        ${verb.tier !== 'core' ? `<span class="verb-tier-tag tier-${verb.tier}">${tierLabel[verb.tier] || verb.tier}</span>` : ''}
                        ${verb.note ? `<span class="verb-note">${escapeHtml(verb.note)}</span>` : ''}
                    </td>
                </tr>
            `).join('');

            if (elements.irregularVerbCount) {
                elements.irregularVerbCount.textContent = `${filtered.length}/${irregularVerbs.length} động từ`;
            }
        };

        if (elements.irregularVerbSearch) {
            elements.irregularVerbSearch.addEventListener('input', render);
        }

        // Bấm "Tất cả" thì bật lại toàn bộ nhóm; bấm một nhóm cụ thể thì bỏ chọn "Tất cả"
        // và cho phép chọn nhiều nhóm cùng lúc (ví dụ so sánh "V2=V3" với "Biến đổi khác").
        legendChips.forEach(chip => {
            chip.addEventListener('click', () => {
                const group = chip.dataset.group;

                if (group === 'all') {
                    verbState.activeGroups = new Set(['all', 'same', 'pastpart', 'basepart', 'other']);
                } else {
                    verbState.activeGroups.delete('all');
                    if (verbState.activeGroups.has(group)) {
                        verbState.activeGroups.delete(group);
                    } else {
                        verbState.activeGroups.add(group);
                    }
                    if (verbState.activeGroups.size === 0) {
                        verbState.activeGroups = new Set(['all', 'same', 'pastpart', 'basepart', 'other']);
                    }
                }

                legendChips.forEach(item => {
                    item.classList.toggle('active', verbState.activeGroups.has(item.dataset.group));
                });
                render();
            });
        });

        tierChips.forEach(chip => {
            chip.addEventListener('click', () => {
                verbState.activeTier = chip.dataset.tier;
                tierChips.forEach(item => item.classList.toggle('active', item === chip));
                render();
            });
        });

        render();
    }

    function renderPracticeContent(id, component) {
        const practice = typeof grammarPracticeData !== 'undefined' && grammarPracticeData[id];
        const quizCount = exerciseBank.filter(question => question.component === id).length;

        const quizCta = quizCount
            ? `<div class="practice-cta">
                    <p>Có <strong>${quizCount} câu trắc nghiệm</strong> chấm điểm tự động cho chủ điểm này.</p>
                    <button class="exercise-btn primary" data-practice-topic="${escapeHtml(id)}">📝 Luyện ngay</button>
               </div>`
            : '';

        if (!practice) {
            const relatedTitles = (component.connections || [])
                .map(connectionId => allComponents[connectionId] && allComponents[connectionId].title)
                .filter(Boolean)
                .slice(0, 4);

            return `
                ${quizCta}
                <div class="practice-empty">
                    <h3>🧪 Chưa có bài tập tự luận riêng</h3>
                    <p>Mục này chưa có block luyện tập viết tay. Bạn có thể ôn qua các mục liên quan rồi quay lại.</p>
                    ${relatedTitles.length ? `
                        <div class="practice-related">
                            <strong>Gợi ý ôn tiếp:</strong>
                            <p>${relatedTitles.map(escapeHtml).join(' • ')}</p>
                        </div>
                    ` : ''}
                </div>
            `;
        }

        return `
            ${quizCta}
            <div class="practice-intro">
                <h3>🧪 Bài tập nhanh</h3>
                <p>${practice.source || 'Bài luyện ngắn để khóa lại điểm ngữ pháp vừa học.'}</p>
            </div>
            ${practice.sections.map(section => {
                if (Array.isArray(section.items)) {
                    return `
                        <section class="practice-block">
                            <h4>${section.title}</h4>
                            ${section.instruction ? `<p class="practice-instruction">${section.instruction}</p>` : ''}
                            <div class="practice-items">
                                ${section.items.map((item, index) => `
                                    <article class="practice-item">
                                        <div class="practice-item-question"><strong>${index + 1}.</strong> ${item.prompt || item.question || ''}</div>
                                        <div class="practice-item-answer"><strong>Đáp án:</strong> ${item.answer || ''}</div>
                                        ${item.explanation ? `<div class="practice-item-explanation"><strong>Giải thích:</strong> ${item.explanation}</div>` : ''}
                                    </article>
                                `).join('')}
                            </div>
                        </section>
                    `;
                }

                return `
                    <section class="practice-block">
                        <h4>${section.title}</h4>
                        ${section.instruction ? `<p class="practice-instruction">${section.instruction}</p>` : ''}
                        <ol class="practice-list">
                            ${section.questions.map(question => `<li>${question}</li>`).join('')}
                        </ol>
                        <details class="practice-answer">
                            <summary>Xem đáp án</summary>
                            <ol class="practice-answer-list">
                                ${section.answers.map((answer, index) => `
                                    <li>
                                        <div><strong>Đáp án:</strong> ${answer}</div>
                                        ${Array.isArray(section.explanations) && section.explanations[index] ? `<div class="practice-item-explanation"><strong>Giải thích:</strong> ${section.explanations[index]}</div>` : ''}
                                    </li>
                                `).join('')}
                            </ol>
                        </details>
                    </section>
                `;
            }).join('')}
            ${Array.isArray(practice.checkpoint) && practice.checkpoint.length ? `
                <section class="practice-block checkpoint-block">
                    <h4>✅ Checkpoint</h4>
                    <ul class="practice-checkpoint">
                        ${practice.checkpoint.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                </section>
            ` : ''}
        `;
    }

    function renderMemoryBank() {
        if (!elements.memoryBankGrid || !Array.isArray(grammarMemoryBank)) return;

        elements.memoryBankGrid.innerHTML = grammarMemoryBank.map(group => `
            <article class="memory-card">
                <h3>${group.title}</h3>
                <p class="memory-note">${group.note}</p>
                <ul class="memory-list">
                    ${group.items.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </article>
        `).join('');
    }

    function initReferenceShortcuts() {
        elements.referenceLinks.forEach(button => {
            button.addEventListener('click', () => {
                activateComponent(button.dataset.component, { scrollIntoView: true });
            });
        });
    }

    // Nút "Luyện ngay" nằm trong nội dung tab Bài tập được render động.
    function initDelegatedActions() {
        elements.panelContent.addEventListener('click', event => {
            const trigger = event.target.closest('[data-practice-topic]');
            if (!trigger) return;
            state.selectedComponent = trigger.dataset.practiceTopic;
            openExerciseModal('topic');
        });
    }

    // ==================== PHÍM TẮT ====================
    function initKeyboard() {
        document.addEventListener('keydown', event => {
            const modalOpen = elements.exerciseModal.style.display === 'flex';
            const typing = /^(INPUT|TEXTAREA|SELECT)$/.test(event.target.tagName);

            if (event.key === 'Escape') {
                if (modalOpen) closeExerciseModal();
                else if (elements.infoPanel.classList.contains('open')) closeInfoPanel();
                else if (state.isTourActive) endTour();
                return;
            }

            if (event.key === '/' && !typing) {
                event.preventDefault();
                elements.grammarSearch.focus();
                return;
            }

            if (!modalOpen || typing) return;

            if (!state.exerciseAnswered && ['1', '2', '3', '4'].includes(event.key)) {
                const option = elements.exerciseOptions.querySelector(`.exercise-option[data-index="${Number(event.key) - 1}"]`);
                if (option) {
                    event.preventDefault();
                    option.click();
                }
                return;
            }

            if (event.key === 'Enter' && !elements.exerciseResult.hidden) {
                event.preventDefault();
                showNextQuestion();
            }
        });
    }

    function init() {
        initLevelSelection();
        renderConceptNodes();
        initFilters();
        initGrammarSearch();
        initPanelControls();
        initTourSystem();
        initReferenceShortcuts();
        initExerciseSystem();
        initDelegatedActions();
        initKeyboard();
        renderMemoryBank();
        initIrregularVerbBank();
        updateDashboard();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
