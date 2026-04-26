// Game Theory - main app controller
(function() {
    'use strict';

    const LEVELS = ['beginner', 'intermediate', 'advanced'];
    const LEVEL_LABELS = {
        beginner: '🌱 Người Mới',
        intermediate: '🌿 Trung Cấp',
        advanced: '🌳 Nâng Cao'
    };

    const state = {
        currentLevel: localStorage.getItem('gameTheoryLevel') || null,
        currentCategory: 'all',
        currentTab: 'simple',
        selectedComponent: null,
        tourStepIndex: 0,
        isTourActive: false
    };

    const practiceState = {
        mode: 'random10',
        category: 'all',
        level: 'beginner',
        order: [],
        index: 0,
        answers: {},
        score: { correct: 0, totalAnswered: 0 }
    };

    const allComponents = [
        ...gameTheoryFoundations,
        ...gameTheoryClassicGames,
        ...gameTheoryEquilibria,
        ...gameTheoryStrategies,
        ...gameTheoryApplications,
        ...gameTheoryCases
    ];

    const componentById = allComponents.reduce((acc, component) => {
        acc[component.id] = component;
        return acc;
    }, {});

    const elements = {
        levelOverlay: document.getElementById('levelOverlay'),
        levelBadge: document.getElementById('levelBadge'),
        changeLevelBtn: document.getElementById('changeLevelBtn'),
        startTourBtn: document.getElementById('startTourBtn'),
        simulatorBtn: document.getElementById('simulatorBtn'),
        practiceBtn: document.getElementById('practiceBtn'),
        componentCount: document.getElementById('componentCount'),

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

        categoryFilter: document.getElementById('categoryFilter'),
        conceptsGrid: document.getElementById('conceptsGrid'),
        quickTips: document.getElementById('quickTips'),
        tipsGrid: document.getElementById('tipsGrid'),

        infoPanel: document.getElementById('infoPanel'),
        closePanel: document.getElementById('closePanel'),
        panelIcon: document.getElementById('panelIcon'),
        panelTitle: document.getElementById('panelTitle'),
        panelSubtitle: document.getElementById('panelSubtitle'),
        panelContent: document.getElementById('panelContent'),
        relatedConcepts: document.getElementById('relatedConcepts'),
        tabBtns: document.querySelectorAll('.tab-btn'),

        simulatorModal: document.getElementById('simulatorModal'),
        closeSimulator: document.getElementById('closeSimulator'),
        gamePresetSelect: document.getElementById('gamePresetSelect'),
        payoffMatrix: document.getElementById('payoffMatrix'),
        simulatorExplain: document.getElementById('simulatorExplain'),

        practiceModal: document.getElementById('practiceModal'),
        closePractice: document.getElementById('closePractice'),
        practiceSetup: document.getElementById('practiceSetup'),
        practiceSession: document.getElementById('practiceSession'),
        practiceMode: document.getElementById('practiceMode'),
        practiceCategory: document.getElementById('practiceCategory'),
        practiceLevel: document.getElementById('practiceLevel'),
        startPractice: document.getElementById('startPractice'),
        resumePractice: document.getElementById('resumePractice'),
        resetPractice: document.getElementById('resetPractice'),
        practiceProgressLabel: document.getElementById('practiceProgressLabel'),
        practiceScoreLabel: document.getElementById('practiceScoreLabel'),
        practicePrev: document.getElementById('practicePrev'),
        practiceNext: document.getElementById('practiceNext'),
        practiceCard: document.getElementById('practiceCard'),
        practiceSummary: document.getElementById('practiceSummary')
    };

    function levelIndex(level) {
        return LEVELS.indexOf(level);
    }

    function isUnlocked(component) {
        if (!state.currentLevel) return false;
        return levelIndex(component.level) <= levelIndex(state.currentLevel);
    }

    function showOverlay() {
        elements.levelOverlay.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }

    function hideOverlay() {
        elements.levelOverlay.style.display = 'none';
        document.body.style.overflow = '';
    }

    function initLevelSelection() {
        document.querySelectorAll('.level-card').forEach(card => {
            card.addEventListener('click', () => {
                state.currentLevel = card.dataset.level;
                localStorage.setItem('gameTheoryLevel', state.currentLevel);
                updateLevelUI();
                applyFilters();
                hideOverlay();
            });
        });

        elements.changeLevelBtn.addEventListener('click', showOverlay);

        if (state.currentLevel) {
            updateLevelUI();
            hideOverlay();
        } else {
            showOverlay();
        }
    }

    function updateLevelUI() {
        elements.levelBadge.textContent = LEVEL_LABELS[state.currentLevel] || LEVEL_LABELS.beginner;
        if (state.currentLevel === 'beginner') {
            elements.quickTips.style.display = 'block';
        } else {
            elements.quickTips.style.display = 'none';
        }
    }

    function syncHeaderHeight() {
        const header = document.querySelector('header');
        if (!header) return;
        const height = header.offsetHeight || 0;
        document.documentElement.style.setProperty('--gt-header-height', `${height}px`);
    }

    function renderCategoryFilter() {
        const buttons = [
            `<button class="filter-btn active" data-category="all">Tất cả</button>`,
            ...gameTheoryCategories.map(category => `
                <button class="filter-btn" data-category="${category.id}">
                    ${category.icon} ${category.title}
                </button>
            `)
        ];
        elements.categoryFilter.innerHTML = `
            <span class="filter-label">Lọc theo chủ đề:</span>
            ${buttons.join('')}
        `;

        elements.categoryFilter.querySelectorAll('.filter-btn').forEach(button => {
            button.addEventListener('click', () => {
                state.currentCategory = button.dataset.category;
                elements.categoryFilter.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                applyFilters();
            });
        });
    }

    function renderQuickTips() {
        elements.tipsGrid.innerHTML = quickTips.map(tip => `
            <div class="tip-card">
                <span class="tip-icon">${tip.icon}</span>
                <p>${tip.text}</p>
            </div>
        `).join('');
    }

    function renderConceptSections() {
        elements.componentCount.textContent = allComponents.length;
        elements.conceptsGrid.innerHTML = gameTheoryCategories.map(category => {
            const components = allComponents.filter(component => component.category === category.id);
            return `
                <section class="concept-section" data-category="${category.id}">
                    <div class="section-heading">
                        <div>
                            <h2>${category.icon} ${category.title}</h2>
                            <p>${category.description}</p>
                        </div>
                        <span>${components.length} mục</span>
                    </div>
                    <div class="nodes-container">
                        ${components.map(renderNode).join('')}
                    </div>
                </section>
            `;
        }).join('');

        elements.conceptsGrid.querySelectorAll('.node').forEach(node => {
            node.addEventListener('click', () => {
                if (node.classList.contains('locked')) return;
                openComponent(node.dataset.component);
            });
        });
    }

    function renderNode(component) {
        return `
            <button class="node" data-component="${component.id}" data-level="${component.level}">
                <span class="node-icon">${component.icon}</span>
                <span class="node-title">${component.title}</span>
                <span class="node-subtitle">${component.subtitle}</span>
                <span class="node-badge ${component.level}">${levelNameShort(component.level)}</span>
            </button>
        `;
    }

    function levelNameShort(level) {
        if (level === 'beginner') return 'Cơ bản';
        if (level === 'intermediate') return 'Trung cấp';
        return 'Nâng cao';
    }

    function applyFilters() {
        document.querySelectorAll('.concept-section').forEach(section => {
            const categoryMatch = state.currentCategory === 'all' || section.dataset.category === state.currentCategory;
            section.style.display = categoryMatch ? 'block' : 'none';
        });

        document.querySelectorAll('.node').forEach(node => {
            const component = componentById[node.dataset.component];
            const locked = !isUnlocked(component);
            node.classList.toggle('locked', locked);
            node.setAttribute('aria-disabled', locked ? 'true' : 'false');
        });
    }

    function openComponent(componentId) {
        const component = componentById[componentId];
        if (!component) return;

        state.selectedComponent = componentId;
        elements.panelIcon.textContent = component.icon;
        elements.panelTitle.textContent = component.title;
        elements.panelSubtitle.textContent = component.subtitle || '';

        document.querySelectorAll('.node').forEach(node => {
            node.classList.toggle('active', node.dataset.component === componentId);
        });

        showTabContent('simple');
        renderRelated(component.connections || []);
        elements.infoPanel.classList.add('open');
    }

    function showTabContent(tab) {
        const component = componentById[state.selectedComponent];
        if (!component) return;

        state.currentTab = tab;
        elements.tabBtns.forEach(button => {
            button.classList.toggle('active', button.dataset.tab === tab);
        });
        elements.panelContent.innerHTML = component[tab] || component.simple || '<p>Nội dung đang được cập nhật.</p>';
    }

    function renderRelated(connections) {
        const relatedButtons = connections
            .map(id => componentById[id])
            .filter(Boolean)
            .map(component => `
                <button class="related-btn" data-component="${component.id}">
                    ${component.icon} ${component.title}
                </button>
            `);

        elements.relatedConcepts.innerHTML = relatedButtons.length
            ? relatedButtons.join('')
            : '<p class="no-connections">Không có khái niệm liên quan</p>';

        elements.relatedConcepts.querySelectorAll('.related-btn').forEach(button => {
            button.addEventListener('click', () => openComponent(button.dataset.component));
        });
    }

    function initPanelControls() {
        elements.closePanel.addEventListener('click', () => {
            elements.infoPanel.classList.remove('open');
        });

        elements.tabBtns.forEach(button => {
            button.addEventListener('click', () => showTabContent(button.dataset.tab));
        });

        document.querySelectorAll('.path-card').forEach(button => {
            button.addEventListener('click', () => openComponent(button.dataset.component));
        });
    }

    function initTour() {
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
        if (!state.currentLevel) {
            showOverlay();
            return;
        }
        state.isTourActive = true;
        state.tourStepIndex = 0;
        const steps = tourSteps[state.currentLevel] || tourSteps.beginner;
        elements.totalSteps.textContent = steps.length;
        elements.tourProgress.style.display = 'block';
        elements.tourPanel.style.display = 'block';
        showTourStep(0);
    }

    function showTourStep(index) {
        const steps = tourSteps[state.currentLevel] || tourSteps.beginner;
        if (index < 0 || index >= steps.length) return;

        state.tourStepIndex = index;
        const step = steps[index];
        elements.currentStep.textContent = index + 1;
        elements.totalSteps.textContent = steps.length;
        elements.tourTitle.textContent = step.title;
        elements.tourDescription.textContent = step.description;
        elements.progressFill.style.width = `${((index + 1) / steps.length) * 100}%`;
        elements.tourPrev.disabled = index === 0;
        elements.tourNext.textContent = index === steps.length - 1 ? 'Hoàn thành' : 'Tiếp theo →';

        document.querySelectorAll('.tour-highlight').forEach(item => item.classList.remove('tour-highlight'));
        const target = document.querySelector(step.target);
        if (target) {
            target.classList.remove('locked');
            target.classList.add('tour-highlight');
            target.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }

    function endTour() {
        state.isTourActive = false;
        elements.tourProgress.style.display = 'none';
        elements.tourPanel.style.display = 'none';
        document.querySelectorAll('.tour-highlight').forEach(item => item.classList.remove('tour-highlight'));
        applyFilters();
    }

    function initSimulator() {
        elements.gamePresetSelect.innerHTML = gameTheoryPresets.map(preset => `
            <option value="${preset.id}">${preset.title}</option>
        `).join('');

        elements.simulatorBtn.addEventListener('click', () => {
            elements.simulatorModal.style.display = 'flex';
            renderSimulator();
        });

        elements.closeSimulator.addEventListener('click', () => {
            elements.simulatorModal.style.display = 'none';
        });

        elements.gamePresetSelect.addEventListener('change', renderSimulator);
        elements.simulatorModal.addEventListener('click', event => {
            if (event.target === elements.simulatorModal) elements.simulatorModal.style.display = 'none';
        });
    }

    function renderSimulator() {
        const preset = gameTheoryPresets.find(item => item.id === elements.gamePresetSelect.value) || gameTheoryPresets[0];
        const analysis = analyzePayoffMatrix(preset);

        elements.payoffMatrix.innerHTML = `
            <table class="payoff-table">
                <tr>
                    <th>${preset.rowPlayer} \\ ${preset.colPlayer}</th>
                    ${preset.colStrategies.map(strategy => `<th>${strategy}</th>`).join('')}
                </tr>
                ${preset.rowStrategies.map((rowStrategy, rowIndex) => `
                    <tr>
                        <th>${rowStrategy}</th>
                        ${preset.colStrategies.map((colStrategy, colIndex) => {
                            const payoff = preset.payoffs[rowIndex][colIndex];
                            const classes = [
                                analysis.bestA[rowIndex][colIndex] ? 'best-a' : '',
                                analysis.bestB[rowIndex][colIndex] ? 'best-b' : '',
                                analysis.nash[rowIndex][colIndex] ? 'nash-cell' : ''
                            ].filter(Boolean).join(' ');
                            return `
                                <td class="${classes}">
                                    <strong>${payoff[0]}, ${payoff[1]}</strong>
                                    <span>${preset.rowPlayer}: ${payoff[0]} • ${preset.colPlayer}: ${payoff[1]}</span>
                                </td>
                            `;
                        }).join('')}
                    </tr>
                `).join('')}
            </table>
        `;

        const nashLabels = analysis.nashCells.length
            ? analysis.nashCells.map(cell => `${preset.rowStrategies[cell.row]} / ${preset.colStrategies[cell.col]}`).join(', ')
            : 'Không có cân bằng Nash thuần';

        elements.simulatorExplain.innerHTML = `
            <h3>${preset.title}</h3>
            <p>${preset.note}</p>
            <div class="legend">
                <span><i class="legend-a"></i>Best response của ${preset.rowPlayer}</span>
                <span><i class="legend-b"></i>Best response của ${preset.colPlayer}</span>
                <span><i class="legend-nash"></i>Nash thuần</span>
            </div>
            <div class="result-box">
                <strong>Cân bằng Nash thuần:</strong>
                <span>${nashLabels}</span>
            </div>
        `;
    }

    function analyzePayoffMatrix(preset) {
        const rows = preset.rowStrategies.length;
        const cols = preset.colStrategies.length;
        const bestA = Array.from({ length: rows }, () => Array(cols).fill(false));
        const bestB = Array.from({ length: rows }, () => Array(cols).fill(false));
        const nash = Array.from({ length: rows }, () => Array(cols).fill(false));
        const nashCells = [];

        for (let col = 0; col < cols; col += 1) {
            const maxA = Math.max(...preset.payoffs.map(row => row[col][0]));
            for (let row = 0; row < rows; row += 1) {
                bestA[row][col] = preset.payoffs[row][col][0] === maxA;
            }
        }

        for (let row = 0; row < rows; row += 1) {
            const maxB = Math.max(...preset.payoffs[row].map(cell => cell[1]));
            for (let col = 0; col < cols; col += 1) {
                bestB[row][col] = preset.payoffs[row][col][1] === maxB;
            }
        }

        for (let row = 0; row < rows; row += 1) {
            for (let col = 0; col < cols; col += 1) {
                nash[row][col] = bestA[row][col] && bestB[row][col];
                if (nash[row][col]) nashCells.push({ row, col });
            }
        }

        return { bestA, bestB, nash, nashCells };
    }

    // ========================================
    // PRACTICE (QUIZ)
    // ========================================
    const PRACTICE_STORAGE_KEY = 'gameTheoryPracticeProgress';

    function initPractice() {
        if (!elements.practiceBtn) return;
        elements.practiceBtn.addEventListener('click', openPracticeModal);
        elements.closePractice.addEventListener('click', closePracticeModal);
        elements.practiceModal.addEventListener('click', event => {
            if (event.target === elements.practiceModal) closePracticeModal();
        });

        elements.practiceMode.addEventListener('change', () => {
            const mode = elements.practiceMode.value;
            const label = elements.practiceCategory.closest('label');
            if (label) label.style.display = mode === 'byCategory' ? 'grid' : 'none';
        });

        elements.startPractice.addEventListener('click', () => startPracticeSession({ resume: false }));
        elements.resumePractice.addEventListener('click', () => startPracticeSession({ resume: true }));
        elements.resetPractice.addEventListener('click', resetPracticeProgress);
        elements.practicePrev.addEventListener('click', () => goToPracticeIndex(practiceState.index - 1));
        elements.practiceNext.addEventListener('click', () => goToPracticeIndex(practiceState.index + 1));
    }

    function openPracticeModal() {
        elements.practiceModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';

        renderPracticeCategoryOptions();
        loadPracticeProgress();
        applyPracticeSetupFromStateOrDefaults();
        updatePracticeSetupUI();
    }

    function applyPracticeSetupFromStateOrDefaults() {
        const hasProgress = practiceState.order.length > 0;
        if (!hasProgress) {
            hydratePracticeSetupDefaults();
            return;
        }

        elements.practiceMode.value = practiceState.mode || 'random10';
        elements.practiceCategory.value = practiceState.category || 'all';
        elements.practiceLevel.value = practiceState.level || (state.currentLevel || 'beginner');

        const label = elements.practiceCategory.closest('label');
        if (label) label.style.display = elements.practiceMode.value === 'byCategory' ? 'grid' : 'none';
    }

    function closePracticeModal() {
        elements.practiceModal.style.display = 'none';
        document.body.style.overflow = '';
        savePracticeProgress();
    }

    function hydratePracticeSetupDefaults() {
        const level = state.currentLevel || 'beginner';
        elements.practiceLevel.value = level;
        elements.practiceMode.value = 'random10';
        elements.practiceCategory.value = 'all';
        const label = elements.practiceCategory.closest('label');
        if (label) label.style.display = 'none';
    }

    function renderPracticeCategoryOptions() {
        const opts = ['<option value="all">Tất cả</option>'].concat(
            gameTheoryCategories.map(c => `<option value="${c.id}">${c.icon} ${c.title}</option>`)
        );
        elements.practiceCategory.innerHTML = opts.join('');
    }

    function updatePracticeSetupUI() {
        const hasProgress = practiceState.order.length > 0 && practiceState.order.length > practiceState.index;
        elements.resumePractice.style.display = hasProgress ? 'inline-flex' : 'none';

        elements.practiceSetup.style.display = 'block';
        elements.practiceSession.style.display = 'none';
        elements.practiceSummary.style.display = 'none';
        elements.practiceCard.innerHTML = '';
    }

    function resetPracticeProgress() {
        localStorage.removeItem(PRACTICE_STORAGE_KEY);
        practiceState.mode = 'random10';
        practiceState.category = 'all';
        practiceState.level = state.currentLevel || 'beginner';
        practiceState.order = [];
        practiceState.index = 0;
        practiceState.answers = {};
        practiceState.score = { correct: 0, totalAnswered: 0 };
        updatePracticeSetupUI();
    }

    function loadPracticeProgress() {
        try {
            const saved = JSON.parse(localStorage.getItem(PRACTICE_STORAGE_KEY) || 'null');
            if (!saved) return;
            practiceState.mode = saved.mode || practiceState.mode;
            practiceState.category = saved.category || practiceState.category;
            practiceState.level = saved.level || practiceState.level;
            practiceState.order = Array.isArray(saved.order) ? saved.order : [];
            practiceState.index = Number.isFinite(saved.index) ? saved.index : 0;
            practiceState.answers = saved.answers || {};
            practiceState.score = saved.score || { correct: 0, totalAnswered: 0 };
        } catch (e) {
            // ignore
        }
    }

    function savePracticeProgress() {
        try {
            const payload = {
                mode: practiceState.mode,
                category: practiceState.category,
                level: practiceState.level,
                order: practiceState.order,
                index: practiceState.index,
                answers: practiceState.answers,
                score: practiceState.score
            };
            localStorage.setItem(PRACTICE_STORAGE_KEY, JSON.stringify(payload));
        } catch (e) {
            // ignore
        }
    }

    function startPracticeSession({ resume }) {
        practiceState.mode = elements.practiceMode.value;
        practiceState.category = elements.practiceCategory.value;
        practiceState.level = elements.practiceLevel.value;

        if (!resume || practiceState.order.length === 0) {
            practiceState.order = buildPracticeOrder();
            practiceState.index = 0;
            practiceState.answers = {};
            practiceState.score = { correct: 0, totalAnswered: 0 };
        } else {
            const allowedIds = new Set(filterPracticeQuestions().map(q => q.id));
            practiceState.order = practiceState.order.filter(id => allowedIds.has(id));
            if (practiceState.index >= practiceState.order.length) {
                practiceState.index = Math.max(0, practiceState.order.length - 1);
            }
            recomputePracticeScore();
        }

        elements.practiceSetup.style.display = 'none';
        elements.practiceSession.style.display = 'block';
        elements.practiceSummary.style.display = 'none';

        renderPracticeQuestion();
        savePracticeProgress();
    }

    function filterPracticeQuestions() {
        const maxLevelIndex = levelIndex(practiceState.level);
        return (gameTheoryPracticeBank || []).filter(q => {
            const withinLevel = levelIndex(q.level) <= maxLevelIndex;
            const categoryMatch = practiceState.mode !== 'byCategory'
                || practiceState.category === 'all'
                || q.category === practiceState.category;
            return withinLevel && categoryMatch;
        });
    }

    function recomputePracticeScore() {
        let correct = 0;
        let totalAnswered = 0;
        for (const id of practiceState.order) {
            const q = (gameTheoryPracticeBank || []).find(item => item.id === id);
            const answer = practiceState.answers[id];
            if (!q || !answer) continue;
            totalAnswered += 1;
            if (answer === q.correctChoiceId) correct += 1;
        }
        practiceState.score = { correct, totalAnswered };
    }

    function buildPracticeOrder() {
        const questions = filterPracticeQuestions();
        if (practiceState.mode === 'all' || practiceState.mode === 'byCategory') return questions.map(q => q.id);

        const shuffled = shuffleArray(questions.map(q => q.id));
        return shuffled.slice(0, Math.min(10, shuffled.length));
    }

    function shuffleArray(arr) {
        const copy = arr.slice();
        for (let i = copy.length - 1; i > 0; i -= 1) {
            const j = Math.floor(Math.random() * (i + 1));
            [copy[i], copy[j]] = [copy[j], copy[i]];
        }
        return copy;
    }

    function goToPracticeIndex(nextIndex) {
        if (nextIndex < 0) return;
        if (nextIndex >= practiceState.order.length) {
            renderPracticeSummary();
            return;
        }
        practiceState.index = nextIndex;
        renderPracticeQuestion();
        savePracticeProgress();
    }

    function getCategoryLabel(categoryId) {
        const category = gameTheoryCategories.find(c => c.id === categoryId);
        return category ? `${category.icon} ${category.title}` : categoryId;
    }

    function renderPracticeQuestion() {
        const total = practiceState.order.length || 0;
        if (!total) {
            elements.practiceCard.innerHTML = `
                <div class="warning-box">
                    <strong>Chưa có câu hỏi phù hợp.</strong>
                    <p>Hãy đổi cấp độ/chủ đề để có câu hỏi.</p>
                </div>
            `;
            elements.practicePrev.disabled = true;
            elements.practiceNext.disabled = true;
            return;
        }

        const questionId = practiceState.order[practiceState.index];
        const question = (gameTheoryPracticeBank || []).find(q => q.id === questionId);
        if (!question) return;

        elements.practiceProgressLabel.textContent = `Câu ${practiceState.index + 1}/${total}`;
        elements.practiceScoreLabel.textContent = `Điểm: ${practiceState.score.correct}/${practiceState.score.totalAnswered}`;

        const selected = practiceState.answers[question.id] || null;
        const isAnswered = Boolean(selected);
        const isCorrect = selected === question.correctChoiceId;

        elements.practicePrev.disabled = practiceState.index === 0;
        elements.practiceNext.disabled = !isAnswered;

        elements.practiceCard.innerHTML = `
            <div class="practice-question">
                <div class="practice-meta">
                    <span class="pill">${levelNameShort(question.level)}</span>
                    <span class="pill pill-soft">${getCategoryLabel(question.category)}</span>
                </div>
                <div class="practice-prompt">${question.prompt}</div>
            </div>
            <div class="practice-choices" role="list">
                ${question.choices.map(choice => {
                    const stateClass = !isAnswered ? '' : (
                        choice.id === question.correctChoiceId ? 'choice-correct' :
                        choice.id === selected ? 'choice-wrong' : 'choice-muted'
                    );
                    const disabled = isAnswered ? 'disabled' : '';
                    return `
                        <button class="practice-choice ${stateClass}" data-choice="${choice.id}" ${disabled}>
                            <span class="choice-letter">${choice.id.toUpperCase()}</span>
                            <span class="choice-text">${choice.text}</span>
                        </button>
                    `;
                }).join('')}
            </div>
            <div class="practice-feedback" id="practiceFeedback" style="${isAnswered ? '' : 'display:none'}"></div>
        `;

        elements.practiceCard.querySelectorAll('.practice-choice').forEach(btn => {
            btn.addEventListener('click', () => {
                if (practiceState.answers[question.id]) return;
                handlePracticeAnswer(question, btn.dataset.choice);
            });
        });

        if (isAnswered) renderPracticeFeedback(question, selected, isCorrect);
    }

    function handlePracticeAnswer(question, choiceId) {
        practiceState.answers[question.id] = choiceId;
        practiceState.score.totalAnswered += 1;
        if (choiceId === question.correctChoiceId) practiceState.score.correct += 1;
        renderPracticeQuestion();
        savePracticeProgress();
    }

    function renderPracticeFeedback(question, selectedChoiceId, isCorrect) {
        const feedback = elements.practiceCard.querySelector('#practiceFeedback');
        if (!feedback) return;

        const correctChoice = question.choices.find(c => c.id === question.correctChoiceId);
        const consequence = question.consequences && question.consequences[selectedChoiceId];
        const related = Array.isArray(question.related) ? question.related : [];

        feedback.style.display = 'block';
        feedback.innerHTML = `
            <div class="feedback-banner ${isCorrect ? 'ok' : 'bad'}">
                <strong>${isCorrect ? '✅ Đúng' : '❌ Sai'}</strong>
                <span>${isCorrect ? 'Bạn chọn chính xác.' : `Đáp án đúng: ${question.correctChoiceId.toUpperCase()} — ${escapeHtml(correctChoice ? correctChoice.text : '')}`}</span>
            </div>
            <div class="feedback-body">
                <h3>Giải thích</h3>
                <div class="feedback-content">${question.explanation || ''}</div>
                ${isCorrect ? '' : `
                    <h3>Hậu quả nếu chọn phương án này trong thực tế</h3>
                    <div class="feedback-content">${consequence || '<p>Nó dẫn tới sai mô hình/dự đoán sai và quyết định kém trong thực tế.</p>'}</div>
                `}
                ${related.length ? `
                    <h3>Ôn lại nhanh</h3>
                    <div class="feedback-related">
                        ${related.map(id => {
                            const component = componentById[id];
                            return component ? `<button class="related-btn" data-open="${id}">${component.icon} ${component.title}</button>` : '';
                        }).join('')}
                    </div>
                ` : ''}
                <div class="feedback-footer">
                    <button class="practice-primary" id="practiceContinue">${practiceState.index >= practiceState.order.length - 1 ? 'Xem kết quả' : 'Câu tiếp →'}</button>
                </div>
            </div>
        `;

        const continueBtn = feedback.querySelector('#practiceContinue');
        if (continueBtn) {
            continueBtn.addEventListener('click', () => {
                if (practiceState.index >= practiceState.order.length - 1) renderPracticeSummary();
                else goToPracticeIndex(practiceState.index + 1);
            });
        }

        feedback.querySelectorAll('[data-open]').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = btn.dataset.open;
                closePracticeModal();
                openComponent(id);
            });
        });
    }

    function renderPracticeSummary() {
        elements.practiceSummary.style.display = 'block';
        elements.practiceCard.innerHTML = '';

        const total = practiceState.order.length;
        const missed = practiceState.order.filter(id => {
            const q = (gameTheoryPracticeBank || []).find(item => item.id === id);
            return q && practiceState.answers[id] && practiceState.answers[id] !== q.correctChoiceId;
        });

        elements.practiceSummary.innerHTML = `
            <div class="result-box">
                <strong>Kết quả</strong>
                <span>Đúng: ${practiceState.score.correct}/${practiceState.score.totalAnswered} • Tổng câu: ${total}</span>
            </div>
            ${missed.length ? `
                <div class="practice-missed">
                    <h3>Câu đã sai</h3>
                    <div class="missed-list">
                        ${missed.map(id => {
                            const q = (gameTheoryPracticeBank || []).find(item => item.id === id);
                            const number = practiceState.order.indexOf(id) + 1;
                            return q ? `
                                <button class="missed-item" data-jump="${practiceState.order.indexOf(id)}">
                                    <span>#${number}</span>
                                    <strong>${escapeHtml(q.prompt.replace(/<[^>]+>/g, '').slice(0, 90))}...</strong>
                                </button>
                            ` : '';
                        }).join('')}
                    </div>
                </div>
            ` : `
                <div class="tip-box">
                    <strong>Tốt!</strong>
                    <p>Bạn đã làm đúng tất cả câu đã trả lời. Hãy thử tăng cấp độ hoặc chọn “Tất cả câu hỏi”.</p>
                </div>
            `}
            <div class="practice-actions-row">
                <button class="practice-secondary" id="practiceBackToSetup">Chọn bộ khác</button>
                <button class="practice-primary" id="practiceRestart">Làm lại</button>
            </div>
        `;

        const backBtn = elements.practiceSummary.querySelector('#practiceBackToSetup');
        const restartBtn = elements.practiceSummary.querySelector('#practiceRestart');
        if (backBtn) backBtn.addEventListener('click', updatePracticeSetupUI);
        if (restartBtn) restartBtn.addEventListener('click', () => startPracticeSession({ resume: false }));

        elements.practiceSummary.querySelectorAll('[data-jump]').forEach(btn => {
            btn.addEventListener('click', () => {
                const idx = Number(btn.dataset.jump);
                elements.practiceSummary.style.display = 'none';
                goToPracticeIndex(idx);
            });
        });
    }

    function escapeHtml(text) {
        return String(text)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/\"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }

    function initKeyboard() {
        document.addEventListener('keydown', event => {
            if (event.key !== 'Escape') return;
            if (elements.simulatorModal.style.display === 'flex') elements.simulatorModal.style.display = 'none';
            else if (elements.practiceModal.style.display === 'flex') closePracticeModal();
            else if (elements.infoPanel.classList.contains('open')) elements.infoPanel.classList.remove('open');
            else if (state.isTourActive) endTour();
        });
    }

    function init() {
        syncHeaderHeight();
        window.addEventListener('resize', syncHeaderHeight);
        renderCategoryFilter();
        renderQuickTips();
        renderConceptSections();
        initLevelSelection();
        initPanelControls();
        initTour();
        initSimulator();
        initPractice();
        initKeyboard();
        applyFilters();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
