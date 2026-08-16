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
        searchQuery: '',
        exerciseQuestions: [],
        exerciseIndex: 0,
        exerciseScore: 0,
        exerciseAnswers: []
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

    const elements = {
        levelOverlay: document.getElementById('levelOverlay'),
        levelBadge: document.getElementById('levelBadge'),
        changeLevelBtn: document.getElementById('changeLevelBtn'),
        startTourBtn: document.getElementById('startTourBtn'),
        exerciseBtn: document.getElementById('exerciseBtn'),
        exerciseModal: document.getElementById('exerciseModal'),
        closeExercise: document.getElementById('closeExercise'),
        exerciseProgress: document.getElementById('exerciseProgress'),
        exerciseProgressFill: document.getElementById('exerciseProgressFill'),
        exerciseQuestion: document.getElementById('exerciseQuestion'),
        exerciseOptions: document.getElementById('exerciseOptions'),
        exerciseResult: document.getElementById('exerciseResult'),
        resultIcon: document.getElementById('resultIcon'),
        resultMessage: document.getElementById('resultMessage'),
        resultExplanation: document.getElementById('resultExplanation'),
        nextQuestion: document.getElementById('nextQuestion'),
        exerciseSummary: document.getElementById('exerciseSummary'),
        summaryScore: document.getElementById('summaryScore'),
        summaryDetails: document.getElementById('summaryDetails'),
        restartExercise: document.getElementById('restartExercise'),
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
        panelBackdrop: document.getElementById('panelBackdrop'),
        closePanel: document.getElementById('closePanel'),
        panelIcon: document.getElementById('panelIcon'),
        panelTitle: document.getElementById('panelTitle'),
        panelContent: document.getElementById('panelContent'),
        relatedConcepts: document.getElementById('relatedConcepts'),
        quickTips: document.getElementById('quickTips'),
        tipsGrid: document.getElementById('tipsGrid'),
        irregularVerbSearch: document.getElementById('irregularVerbSearch'),
        irregularVerbCount: document.getElementById('irregularVerbCount'),
        irregularVerbsTableBody: document.getElementById('irregularVerbsTableBody'),
        memoryBankGrid: document.getElementById('memoryBankGrid'),
        referenceLinks: document.querySelectorAll('.reference-link'),
        filterBtns: document.querySelectorAll('.filter-btn'),
        nodes: document.querySelectorAll('.node'),
        tabBtns: document.querySelectorAll('.tab-btn'),
        grammarSearch: document.getElementById('grammarSearch'),
        clearGrammarSearch: document.getElementById('clearGrammarSearch'),
        levelCards: document.getElementById('levelCards')
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

    state.currentLevel = cefr.normalizeLevel(localStorage.getItem('englishGrammarLevel') || 'A1');

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
            .replace(/Đ/g, 'D');
    }

    const componentSearchIndex = Object.fromEntries(
        Object.entries(allComponents).map(([id, component]) => [
            id,
            normalizeText([
                component.title,
                component.category,
                stripHtml(component.simple),
                stripHtml(component.detail),
                stripHtml(component.advanced)
            ].join(' '))
        ])
    );

    function escapeHtml(text) {
        return String(text || '')
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    function getComponentLevel(id, component) {
        return cefr.resolveComponent(id, component || allComponents[id]);
    }

    function renderLevelCards() {
        if (!elements.levelCards) return;

        elements.levelCards.innerHTML = cefr.order.map(levelCode => {
            const meta = cefr.getMeta(levelCode);
            return `
                <div class="level-card" data-level="${meta.code}">
                    <div class="level-icon">${meta.icon}</div>
                    <h3>${meta.code} · ${meta.name}</h3>
                    <p>${meta.description}</p>
                    <button class="level-btn">Chọn ${meta.code}</button>
                </div>
            `;
        }).join('');
    }

    function renderConceptNodes() {
        document.querySelectorAll('.concept-section').forEach(section => {
            const grid = section.querySelector('.concepts-grid');
            if (!grid) return;

            const category = section.dataset.category;
            const entries = Object.entries(allComponents).filter(([, component]) => component.category === category);

            grid.innerHTML = entries.map(([id, component]) => {
                const meta = getComponentLevel(id, component);
                return `
                    <div class="node" data-component="${escapeHtml(id)}" data-cefr="${meta.code}">
                        <span class="node-icon">${escapeHtml(component.icon || '📘')}</span>
                        <span class="node-title">${escapeHtml(component.title)}</span>
                        <span class="node-badge ${meta.className}">${meta.code}</span>
                    </div>
                `;
            }).join('');
        });

        elements.nodes = document.querySelectorAll('.node');
    }

    function initLevelSelection() {
        renderLevelCards();

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
        state.currentLevel = cefr.normalizeLevel(level);
        localStorage.setItem('englishGrammarLevel', state.currentLevel);
        hideOverlay();
        updateLevelUI();
        filterNodesByLevel();
        updateConceptVisibility();
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
                <div class="tip-card"><span class="tip-icon">${tip.icon}</span><p>${tip.text}</p></div>
            `).join('');
        } else {
            elements.quickTips.style.display = 'none';
        }
    }

    function filterNodesByLevel() {
        const currentIndex = cefr.getRank(state.currentLevel);

        elements.nodes.forEach(node => {
            const levelIndex = cefr.getRank(node.dataset.cefr || 'A1');

            node.classList.toggle('locked', levelIndex > currentIndex);
            node.style.opacity = levelIndex > currentIndex ? '0.5' : '1';
            node.style.pointerEvents = levelIndex > currentIndex ? 'none' : 'auto';
        });
    }

    function initCategoryFilter() {
        elements.filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                elements.filterBtns.forEach(item => item.classList.remove('active'));
                btn.classList.add('active');

                state.activeCategory = btn.dataset.category;
                updateConceptVisibility();
            });
        });
    }

    function updateConceptVisibility() {
        document.querySelectorAll('.concept-section').forEach(section => {
            const matchesCategory = state.searchQuery
                ? true
                : state.activeCategory === 'all' || section.dataset.category === state.activeCategory;

            let visibleNodes = 0;

            section.querySelectorAll('.node').forEach(node => {
                const matchesSearch = !state.searchQuery || (componentSearchIndex[node.dataset.component] || '').includes(state.searchQuery);
                const visible = matchesCategory && matchesSearch;
                node.style.display = visible ? '' : 'none';
                if (visible) visibleNodes += 1;
            });

            section.style.display = visibleNodes > 0 ? 'block' : 'none';
        });
    }

    function initGrammarSearch() {
        if (!elements.grammarSearch) return;

        elements.grammarSearch.addEventListener('input', () => {
            state.searchQuery = normalizeText(elements.grammarSearch.value.trim());
            updateConceptVisibility();
        });

        if (elements.clearGrammarSearch) {
            elements.clearGrammarSearch.addEventListener('click', () => {
                elements.grammarSearch.value = '';
                state.searchQuery = '';
                updateConceptVisibility();
                elements.grammarSearch.focus();
            });
        }
    }

    function initNodeInteraction() {
        elements.nodes.forEach(node => {
            node.addEventListener('click', () => {
                if (node.classList.contains('locked')) return;

                activateComponent(node.dataset.component);
            });
        });
    }

    function activateComponent(id, options = {}) {
        const component = allComponents[id];
        if (!component) return;

        showComponentInfo(id);
        elements.nodes.forEach(item => item.classList.remove('active'));

        const targetNode = document.querySelector(`.node[data-component="${id}"]`);
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
        openInfoPanel();
    }

    function openInfoPanel() {
        elements.infoPanel.classList.add('open');
        if (elements.panelBackdrop) {
            elements.panelBackdrop.classList.add('open');
        }
    }

    function closeInfoPanel() {
        elements.infoPanel.classList.remove('open');
        if (elements.panelBackdrop) {
            elements.panelBackdrop.classList.remove('open');
        }
    }

    function showTabContent(tab) {
        state.currentTab = tab;
        const component = allComponents[state.selectedComponent];
        if (!component) return;

        elements.tabBtns.forEach(btn => btn.classList.toggle('active', btn.dataset.tab === tab));
        if (tab === 'practice') {
            elements.panelContent.innerHTML = renderPracticeContent(state.selectedComponent, component);
            return;
        }

        elements.panelContent.innerHTML = component[tab] || component.simple || '';
    }

    function renderRelated(connections) {
        if (!connections.length) {
            elements.relatedConcepts.innerHTML = '<p class="no-connections">Không có</p>';
            return;
        }

        elements.relatedConcepts.innerHTML = connections.map(id => {
            const related = allComponents[id];
            return related ? `<button class="related-btn" data-component="${id}">${related.icon} ${related.title}</button>` : '';
        }).join('');

        elements.relatedConcepts.querySelectorAll('.related-btn').forEach(button => {
            button.addEventListener('click', () => activateComponent(button.dataset.component, { scrollIntoView: true }));
        });
    }

    function initPanelControls() {
        elements.closePanel.addEventListener('click', closeInfoPanel);
        if (elements.panelBackdrop) {
            elements.panelBackdrop.addEventListener('click', closeInfoPanel);
        }

        elements.tabBtns.forEach(btn => {
            btn.addEventListener('click', () => showTabContent(btn.dataset.tab));
        });
    }

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

        document.querySelectorAll('.tour-highlight').forEach(el => el.classList.remove('tour-highlight'));
        if (step.target) {
            const target = document.querySelector(step.target);
            if (target) {
                target.classList.add('tour-highlight');
                target.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }

        elements.tourPrev.disabled = index === 0;
        elements.tourNext.textContent = index === steps.length - 1 ? 'Hoàn thành' : 'Tiếp theo →';
    }

    function endTour() {
        state.isTourActive = false;
        elements.tourProgress.style.display = 'none';
        elements.tourPanel.style.display = 'none';
        document.querySelectorAll('.tour-highlight').forEach(el => el.classList.remove('tour-highlight'));
    }

    // ==================== EXERCISE SYSTEM ====================
    function generateExerciseQuestions() {
        const questions = [];
        const questionId = Date.now();
        
        const createQuestion = (id, topic, question, options, correct, explanation) => {
            return { id, topic, question, options, correct, explanation };
        };
        
        // ==================== 1. SENTENCE ORDER (Trật tự câu) ====================
        questions.push(createQuestion(questionId + 1, 'Sentence Order', 'Which word order is correct?', ['She reads books every day', 'She every day reads books', 'Every day she reads books', 'Books she reads every day'], 0, 'Câu khẳng định: Subject + Verb + Object + Time (S+V+O+T).'));
        questions.push(createQuestion(questionId + 2, 'Sentence Order', 'Choose the correct order: (subject) (verb) (object) - "They / eat / rice"', ['They eat rice', 'They rice eat', 'Eat they rice', 'Rice they eat'], 0, 'Trật tự đúng: Subject + Verb + Object.'));
        questions.push(createQuestion(questionId + 3, 'Sentence Order', 'Complete: ___ (subject) ___ (verb) ___ (object) - "students / study / English"', ['The / study / English', 'Students / study / English', 'English / study / students', 'Study / students / English'], 1, 'Danh từ số nhiều không cần mạo từ: "Students study English".'));
        
        // ==================== 2. PARTS OF SPEECH (Từ loại) ====================
        questions.push(createQuestion(questionId + 4, 'Parts of Speech', 'Identify: "quickly" is a ___', ['noun', 'verb', 'adverb', 'adjective'], 2, '"-ly" suffix thường là dấu hiệu của trạng từ (adverb).'));
        questions.push(createQuestion(questionId + 5, 'Parts of Speech', 'Identify: "happiness" is a ___', ['verb', 'adjective', 'noun', 'adverb'], 2, 'Hậu tố "-ness" tạo thành danh từ từ tính từ.'));
        questions.push(createQuestion(questionId + 6, 'Parts of Speech', 'In "She is a teacher", "teacher" is a ___', ['verb', 'noun', 'adjective', 'adverb'], 1, '"teacher" là danh từ chỉ nghề nghiệp.'));
        
        // ==================== 3. PRESENT SIMPLE ====================
        questions.push(createQuestion(questionId + 7, 'Present Simple', 'She ___ English every day.', ['learns', 'learn', 'learning', 'learned'], 0, 'Với chủ ngữ số ít (she), động từ thêm -s: "learns".'));
        questions.push(createQuestion(questionId + 8, 'Present Simple', 'Water ___ at 100°C.', ['boils', 'boiling', 'boil', 'boiled'], 0, 'Sự thật chung (chân lý khoa học) dùng Present Simple: "boils".'));
        questions.push(createQuestion(questionId + 9, 'Present Simple', 'He usually ___ to work by bus.', ['go', 'goes', 'going', 'went'], 1, 'Thói quen với "usually" + ngôi thứ 3 số ít → thêm -s.'));
        questions.push(createQuestion(questionId + 10, 'Present Simple', 'The sun ___ in the east.', ['rise', 'rises', 'rising', 'rose'], 1, 'Sự thật tự nhiên dùng Present Simple, chủ ngữ số ít → -s.'));
        questions.push(createQuestion(questionId + 11, 'Present Simple', 'I ___ coffee every morning.', ['drink', 'drinks', 'drinking', 'drank'], 0, 'Ngôi thứ nhất I không thêm -s.'));
        
        // ==================== 4. PRESENT CONTINUOUS ====================
        questions.push(createQuestion(questionId + 12, 'Present Continuous', 'Look! The children ___ in the garden.', ['play', 'playing', 'are playing', 'played'], 2, '"Look!" là dấu hiệu của Present Continuous - hành động đang diễn ra ngay lúc này.'));
        questions.push(createQuestion(questionId + 13, 'Present Continuous', 'Right now, she ___ for the exam.', ['study', 'studies', 'is studying', 'studied'], 2, '"Right now" = đang làm gì ngay bây giờ → Present Continuous.'));
        questions.push(createQuestion(questionId + 14, 'Present Continuous', 'We ___ a meeting this week.', ['have', 'having', 'are having', 'had'], 2, 'Tạm thời trong tuần này → Present Continuous.'));
        questions.push(createQuestion(questionId + 15, 'Present Continuous', 'The weather ___ getting colder.', ['is', 'are', 'is being', 'be'], 0, 'Tiến trình (getting) + be → is getting.'));
        
        // ==================== 5. PAST SIMPLE ====================
        questions.push(createQuestion(questionId + 16, 'Past Simple', 'Yesterday, I ___ to the market.', ['go', 'went', 'going', 'gone'], 1, 'Thời gian trong quá khứ "Yesterday" → Past Simple: "went".'));
        questions.push(createQuestion(questionId + 17, 'Past Simple', 'She ___ the movie last night.', ['watch', 'watched', 'watching', 'watchs'], 1, 'Quá khứ đơn: thêm -ed cho động từ thường.'));
        questions.push(createQuestion(questionId + 18, 'Past Simple', 'They ___ to school yesterday.', ['go', 'went', 'going', 'gone'], 1, 'Thời gian quá khứ → Past Simple "went".'));
        questions.push(createQuestion(questionId + 19, 'Past Simple', 'He ___ English when he was young.', ['learn', 'learned', 'learning', 'learnt'], 1, 'Quá khứ đơn với "when": "learned".'));
        
        // ==================== 6. PAST CONTINUOUS ====================
        questions.push(createQuestion(questionId + 20, 'Past Continuous', 'I ___ TV when the phone rang.', ['watch', 'watched', 'was watching', 'watching'], 2, 'Hành động đang xảy ra khi có hành động khác xen vào → Past Continuous.'));
        questions.push(createQuestion(questionId + 21, 'Past Continuous', 'At 7 o\'clock yesterday, I ___ breakfast.', ['have', 'had', 'was having', 'having'], 2, 'Thời điểm cụ thể trong quá khứ → Past Continuous.'));
        questions.push(createQuestion(questionId + 22, 'Past Continuous', 'She ___ when the accident happened.', ['drive', 'drove', 'was driving', 'driving'], 2, 'Đang lái xe khi xảy ra tai nạn → Past Continuous.'));
        
        // ==================== 7. PRESENT PERFECT ====================
        questions.push(createQuestion(questionId + 23, 'Present Perfect', 'I ___ this book three times.', ['read', 'reading', 'have read', 'readed'], 2, 'Trải nghiệm từ trước đến nay (ba lần) → Present Perfect: "have read".'));
        questions.push(createQuestion(questionId + 24, 'Present Perfect', 'She ___ here since 2020.', ['work', 'works', 'working', 'has worked'], 3, '"since" + thời điểm → Present Perfect: "has worked".'));
        questions.push(createQuestion(questionId + 25, 'Present Perfect', '___ you ever been to Japan?', ['Have', 'Has', 'Did', 'Do'], 0, 'Câu hỏi Present Perfect: Have + you + V3?'));
        questions.push(createQuestion(questionId + 26, 'Present Perfect', 'I ___ my homework yet.', ['finish', 'finished', 'have finished', 'finishing'], 2, '"yet" = chưa hoàn thành → Present Perfect.'));
        questions.push(createQuestion(questionId + 27, 'Present Perfect', 'How many times ___ you to Paris?', ['have', 'did', 'do', 'are'], 0, 'Hỏi số lần với Present Perfect: "How many times have you been".'));
        
        // ==================== 8. PAST PERFECT ====================
        questions.push(createQuestion(questionId + 28, 'Past Perfect', 'By the time I ___ the station, the train ___ already ___.', ['reach / had left', 'reached / has left', 'reach / left', 'reached / had left'], 0, 'Hành động hoàn thành trước một mốc quá khứ → Past Perfect: "had left".'));
        questions.push(createQuestion(questionId + 29, 'Past Perfect', 'She ___ the work before I ___.', ['finish / arrive', 'finished / arrived', 'had finished / arrived', 'finished / had arrived'], 2, 'Hành động hoàn thành trước → Past Perfect: "had finished".'));
        
        // ==================== 9. FUTURE SIMPLE (will) ====================
        questions.push(createQuestion(questionId + 30, 'Future Simple', 'I think it ___ tomorrow.', ['rain', 'rains', 'will rain', 'raining'], 2, 'Dự đoán với "think": will + V nguyên mẫu.'));
        questions.push(createQuestion(questionId + 31, 'Future Simple', 'I ___ you tomorrow.', ['call', 'calls', 'will call', 'calling'], 2, 'Quyết định tại thời điểm nói → will + V.'));
        questions.push(createQuestion(questionId + 32, 'Future Simple', 'There ___ a meeting next week.', ['is', 'are', 'will be', 'be'], 2, 'Tương lai với "next week" → will be.'));
        
        // ==================== 10. FUTURE CONTINUOUS ====================
        questions.push(createQuestion(questionId + 33, 'Future Continuous', 'At this time tomorrow, I ___ in the airport.', ['am', 'will be', 'will be waiting', 'am waiting'], 2, 'Hành động đang diễn ra tại một thời điểm tương lai → Future Continuous.'));
        
        // ==================== 11. ARTICLES (a/an/the) ====================
        questions.push(createQuestion(questionId + 34, 'Articles', 'I need ___ apple.', ['a', 'an', 'the', 'some'], 1, '"apple" bắt đầu bằng nguyên âm (a) → dùng "an".'));
        questions.push(createQuestion(questionId + 35, 'Articles', '___ sun is very bright today.', ['A', 'An', 'The', 'Some'], 2, 'Danh từ duy nhất (chỉ có một mặt trời) → dùng "the".'));
        questions.push(createQuestion(questionId + 36, 'Articles', 'I want to buy ___ new computer.', ['a', 'an', 'the', 'some'], 0, '"new" bắt đầu bằng phụ âm → dùng "a".'));
        questions.push(createQuestion(questionId + 37, 'Articles', '___ Alps are in Europe.', ['A', 'An', 'The', 'Some'], 2, 'Danh từ số nhiều đặc biệt (dãy núi) → dùng "the".'));
        questions.push(createQuestion(questionId + 38, 'Articles', 'She is ___ honest student.', ['a', 'an', 'the', 'some'], 1, '"honest" bắt đầu bằng nguyên âm /h/ → dùng "an".'));
        
        // ==================== 12. PREPOSITIONS ====================
        questions.push(createQuestion(questionId + 39, 'Prepositions', 'She arrived ___ Monday morning.', ['in', 'on', 'at', 'by'], 1, 'Với ngày cụ thể (Monday) → dùng "on".'));
        questions.push(createQuestion(questionId + 40, 'Prepositions', 'I live ___ Hanoi.', ['in', 'on', 'at', 'to'], 0, 'Thành phố (Hanoi) → dùng "in" (trong thành phố).'));
        questions.push(createQuestion(questionId + 41, 'Prepositions', 'The meeting is ___ 3 PM.', ['in', 'on', 'at', 'by'], 2, 'Giờ cụ thể → dùng "at".'));
        questions.push(createQuestion(questionId + 42, 'Prepositions', 'She is interested ___ learning English.', ['in', 'on', 'at', 'to'], 0, 'Collocation: "interested in".'));
        questions.push(createQuestion(questionId + 43, 'Prepositions', 'I go to school ___ bus.', ['in', 'on', 'at', 'by'], 3, 'Phương tiện giao thông không có mạo từ → "by bus".'));
        questions.push(createQuestion(questionId + 44, 'Prepositions', 'The book is ___ the table.', ['in', 'on', 'at', 'to'], 1, 'Bề mặt (table) → dùng "on".'));
        questions.push(createQuestion(questionId + 45, 'Prepositions', 'She came ___ a smile.', ['in', 'on', 'at', 'with'], 3, 'Với vẻ mặt → "with a smile".'));
        
        // ==================== 13. MODAL VERBS ====================
        questions.push(createQuestion(questionId + 46, 'Modal Verbs', 'You ___ wear a helmet when riding a motorbike.', ['can', 'must', 'may', 'should'], 1, 'Quy định bắt buộc → dùng "must".'));
        questions.push(createQuestion(questionId + 47, 'Modal Verbs', 'You ___ to study harder. Your grades are low.', ['should', 'can', 'must', 'may'], 0, 'Lời khuyên → dùng "should".'));
        questions.push(createQuestion(questionId + 48, 'Modal Verbs', 'It ___ rain later.', ['can', 'must', 'may', 'will'], 2, 'Khả năng có thể → "may".'));
        questions.push(createQuestion(questionId + 49, 'Modal Verbs', 'You ___ drive after drinking alcohol.', ['can', 'must not', 'may', 'should'], 1, 'Cấm → "must not".'));
        questions.push(createQuestion(questionId + 50, 'Modal Verbs', '___ I help you?', ['Can', 'Must', 'Should', 'Will'], 0, 'Lịch sự hỏi giúp đỡ → "Can I help you?"'));
        
        // ==================== 14. CONDITIONALS ====================
        questions.push(createQuestion(questionId + 51, 'Conditionals', 'If it ___ tomorrow, I will stay home.', ['rain', 'rains', 'will rain', 'raining'], 1, 'Câu điều kiện loại 1: If + hiện tại đơn, will + V nguyên mẫu.'));
        questions.push(createQuestion(questionId + 52, 'Conditionals', 'If I ___ rich, I would buy a big house.', ['am', 'was', 'were', 'be'], 2, 'Câu điều kiện loại 2 (giả định): If + quá khứ đơn, would + V nguyên mẫu. Dùng "were" cho tất cả ngôi.'));
        questions.push(createQuestion(questionId + 53, 'Conditionals', 'If you ___ hard, you would pass the exam.', ['study', 'studied', 'had studied', 'study'], 1, 'Điều kiện loại 2: If + quá khứ đơn → "studied".'));
        questions.push(createQuestion(questionId + 54, 'Conditionals', 'If I ___ the news, I would have told you.', ['know', 'knew', 'had known', 'know'], 2, 'Điều kiện loại 3: If + Past Perfect → "had known".'));
        questions.push(createQuestion(questionId + 55, 'Conditionals', '___ it rains, we will cancel the trip.', ['If', 'When', 'Unless', 'Because'], 2, 'Trừ khi → "Unless".'));
        
        // ==================== 15. PASSIVE VOICE ====================
        questions.push(createQuestion(questionId + 56, 'Passive Voice', 'The cake ___ by my mother.', ['make', 'makes', 'made', 'making'], 2, 'Bị động: S + be + V3. "made" là V3 của "make".'));
        questions.push(createQuestion(questionId + 57, 'Passive Voice', 'English ___ in many countries.', ['speak', 'speaks', 'spoken', 'speaking'], 2, 'Bị động: S + be + V3. "spoken" là V3 của "speak".'));
        questions.push(createQuestion(questionId + 58, 'Passive Voice', 'The work ___ tomorrow.', ['complete', 'completes', 'will be completed', 'completed'], 2, 'Bị động tương lai: will + be + V3.'));
        questions.push(createQuestion(questionId + 59, 'Passive Voice', 'She was ___ by the manager.', ['promote', 'promotes', 'promoted', 'promoting'], 2, 'Bị động quá khứ: was + V3.'));
        
        // ==================== 16. RELATIVE CLAUSES ====================
        questions.push(createQuestion(questionId + 60, 'Relative Clauses', 'The man ___ helped us is my uncle.', ['who', 'which', 'that', 'whom'], 0, 'Tham chiếu đến người (man) → dùng "who".'));
        questions.push(createQuestion(questionId + 61, 'Relative Clauses', 'The book ___ I bought is interesting.', ['who', 'which', 'that', 'whom'], 2, 'Tham chiếu đến vật (book) làm tân ngữ → dùng "that" hoặc "which".'));
        questions.push(createQuestion(questionId + 62, 'Relative Clauses', 'The city ___ I live is beautiful.', ['who', 'which', 'that', 'where'], 3, 'Chỉ địa điểm → dùng "where" hoặc "which".'));
        questions.push(createQuestion(questionId + 63, 'Relative Clauses', 'I met a person ___ speaks three languages.', ['who', 'which', 'that', 'whom'], 0, 'Mệnh đề quan hệ bổ nghĩa cho người → "who".'));
        
        // ==================== 17. SUBJECT-VERB AGREEMENT ====================
        questions.push(createQuestion(questionId + 64, 'Subject-Verb Agreement', 'Neither the teacher nor the students ___ present.', ['is', 'are', 'was', 'were'], 1, 'Với "neither...nor", động từ theo danh từ gần nhất (students) → số nhiều "are".'));
        questions.push(createQuestion(questionId + 65, 'Subject-Verb Agreement', 'Each of the students ___ a different book.', ['have', 'has', 'having', 'had'], 1, '"Each of" luôn theo sau động từ số ít: "has".'));
        questions.push(createQuestion(questionId + 66, 'Subject-Verb Agreement', 'The news ___ very interesting.', ['is', 'are', 'were', 'be'], 0, '"News" là danh từ số ít → động từ số ít "is".'));
        questions.push(createQuestion(questionId + 67, 'Subject-Verb Agreement', 'Ten dollars ___ too much for this.', ['is', 'are', 'were', 'be'], 0, 'Tiền tệ/danh từ đo lường là số ít → "is".'));
        questions.push(createQuestion(questionId + 68, 'Subject-Verb Agreement', 'Mathematics ___ difficult for me.', ['is', 'are', 'were', 'be'], 0, 'Môn học kết thúc bằng -s nhưng là số ít → "is".'));
        
        // ==================== 18. GERUND vs INFINITIVE ====================
        questions.push(createQuestion(questionId + 69, 'Gerund/Infinitive', 'I enjoy ___ English.', ['to learn', 'learn', 'learning', 'learned'], 2, 'Động từ "enjoy" + V-ing: "learning".'));
        questions.push(createQuestion(questionId + 70, 'Gerund/Infinitive', 'She decided ___ the exam.', ['pass', 'passing', 'to pass', 'passed'], 2, 'Động từ "decide" + to V: "to pass".'));
        questions.push(createQuestion(questionId + 71, 'Gerund/Infinitive', 'I suggest ___ a break.', ['take', 'taking', 'to take', 'taken'], 1, 'Động từ "suggest" + V-ing: "taking".'));
        questions.push(createQuestion(questionId + 72, 'Gerund/Infinitive', 'He stopped ___ because the room was full.', ['smoke', 'smoking', 'to smoke', 'smoked'], 1, 'Stop + V-ing = dừng hành động đang làm.'));
        questions.push(createQuestion(questionId + 73, 'Gerund/Infinitive', 'I look forward to ___ you soon.', ['see', 'seeing', 'to see', 'seen'], 1, '"look forward to" + V-ing: "seeing".'));
        
        // ==================== 19. COUNTABLE/UNCOUNTABLE ====================
        questions.push(createQuestion(questionId + 74, 'Countable/Uncountable', 'Can I have ___ water, please?', ['a', 'an', 'some', 'many'], 2, '"water" là danh từ không đếm được → dùng "some".'));
        questions.push(createQuestion(questionId + 75, 'Countable/Uncountable', 'There are ___ books on the table.', ['a', 'an', 'some', 'much'], 2, '"books" là danh từ đếm được số nhiều → dùng "some".'));
        questions.push(createQuestion(questionId + 76, 'Countable/Uncountable', 'I need ___ information about this.', ['a', 'an', 'some', 'many'], 2, '"information" không đếm được → dùng "some".'));
        questions.push(createQuestion(questionId + 77, 'Countable/Uncountable', 'How ___ advice can you give me?', ['many', 'much', 'few', 'little'], 1, '"advice" không đếm được → dùng "much".'));
        
        // ==================== 20. QUESTION FORMS ====================
        questions.push(createQuestion(questionId + 78, 'Question Forms', '___ is her name? - Her name is Lan.', ['What', 'Who', 'Where', 'How'], 0, 'Hỏi tên → dùng "What".'));
        questions.push(createQuestion(questionId + 79, 'Question Forms', '___ does she go to school? - At 7 o\'clock.', ['What time', 'When', 'How long', 'How often'], 0, 'Hỏi giờ cụ thể → "What time".'));
        questions.push(createQuestion(questionId + 80, 'Question Forms', '___ is she from? - She is from Vietnam.', ['What', 'Who', 'Where', 'How'], 2, 'Hỏi quốc gia/xuất xứ → "Where".'));
        questions.push(createQuestion(questionId + 81, 'Question Forms', '___ does the book cost? - 20 dollars.', ['How much', 'How many', 'How long', 'How often'], 0, 'Hỏi giá tiền → "How much".'));
        questions.push(createQuestion(questionId + 82, 'Question Forms', '___ did you study? - For 3 years.', ['How long', 'How often', 'How much', 'How many'], 0, 'Hỏi khoảng thời gian → "How long".'));
        
        // ==================== 21. CONJUNCTIONS ====================
        questions.push(createQuestion(questionId + 83, 'Conjunctions', 'I study English ___ I want to work abroad.', ['because', 'although', 'but', 'so'], 0, 'Nêu lý do → dùng "because".'));
        questions.push(createQuestion(questionId + 84, 'Conjunctions', '___ she was tired, she still finished her work.', ['Although', 'Because', 'So', 'And'], 0, 'Mặc dù mệt nhưng vẫn làm → dùng "Although".'));
        questions.push(createQuestion(questionId + 85, 'Conjunctions', 'It was raining, ___ we stayed inside.', ['so', 'but', 'because', 'although'], 0, 'Kết quả → dùng "so".'));
        questions.push(createQuestion(questionId + 86, 'Conjunctions', 'I like coffee ___ tea.', ['and', 'but', 'or', 'so'], 2, 'Lựa chọn → dùng "or".'));
        
        // ==================== 22. COMPARATIVES/SUPERLATIVES ====================
        questions.push(createQuestion(questionId + 87, 'Comparatives', 'This book is ___ than that one.', ['interesting', 'more interesting', 'most interesting', 'interestinger'], 1, 'So sánh hơn với tính từ dài: more + adj.'));
        questions.push(createQuestion(questionId + 88, 'Superlatives', 'This is the ___ movie I have ever seen.', ['good', 'better', 'best', 'goodest'], 2, 'So sánh nhất: "best" (giàu nhất).'));
        questions.push(createQuestion(questionId + 89, 'Comparatives', 'She is ___ than her sister.', ['tall', 'taller', 'tallest', 'more tall'], 1, 'Tính từ ngắn + er: "taller".'));
        questions.push(createQuestion(questionId + 90, 'Comparatives', 'This is ___ expensive than that.', ['much', 'more', 'most', 'many'], 1, 'So sánh hơn: more + adj.'));
        
        // ==================== 23. TENSE REVIEW ====================
        questions.push(createQuestion(questionId + 91, 'Tense Review', 'By next year, she ___ here for 5 years.', ['will work', 'will have worked', 'working', 'worked'], 1, 'Future Perfect: will + have + V3 (hoàn thành trước mốc tương lai).'));
        questions.push(createQuestion(questionId + 92, 'Tense Review', 'I ___ English for 3 years.', ['learn', 'learning', 'learned', 'have been learning'], 3, 'Present Perfect Continuous: have/has been + V-ing (hành động bắt đầu trong quá khứ và còn tiếp diễn).'));
        questions.push(createQuestion(questionId + 93, 'Tense Review', 'She ___ since she was 10.', ['live', 'lives', 'has lived', 'lived'], 2, 'Present Perfect với "since": "has lived".'));
        
        // ==================== 24. INDIRECT SPEECH ====================
        questions.push(createQuestion(questionId + 94, 'Indirect Speech', '"I am happy," she said → She said ___ she was happy.', ['that', 'if', 'what', 'when'], 0, 'Tường thuật: direct → indirect cần "that".'));
        questions.push(createQuestion(questionId + 95, 'Indirect Speech', '"Where are you going?" he asked → He asked ___ I was going.', ['that', 'if', 'what', 'when'], 2, 'Câu hỏi WH trong tường thuật giữ nguyên.'));
        
        // ==================== 26. QUANTIFIERS ====================
        questions.push(createQuestion(questionId + 96, 'Quantifiers', 'There is ___ milk in the fridge.', ['a', 'an', 'some', 'many'], 2, '"milk" không đếm được → dùng "some".'));
        questions.push(createQuestion(questionId + 97, 'Quantifiers', 'How ___ people are there in your family?', ['much', 'many', 'few', 'little'], 1, 'Hỏi số lượng đếm được (people) → dùng "many".'));
        questions.push(createQuestion(questionId + 98, 'Quantifiers', 'There are ___ students in the class.', ['a few', 'a little', 'few', 'little'], 0, 'Danh từ đếm được số nhiều → "a few" (một vài).'));
        questions.push(createQuestion(questionId + 99, 'Quantifiers', 'I have ___ time left.', ['a few', 'a little', 'few', 'little'], 1, 'Danh từ không đếm được → "a little" (một chút).'));
        
        // ==================== 27. PRONOUNS ====================
        questions.push(createQuestion(questionId + 100, 'Pronouns', 'It was ___ who called you.', ['I', 'me', 'myself', 'my'], 0, 'Nhấn mạnh chủ ngữ → dùng "I".'));
        questions.push(createQuestion(questionId + 101, 'Pronouns', 'She told ___ that she would come.', ['I', 'me', 'myself', 'my'], 1, 'Tân ngữ → dùng "me".'));
        
        // ==================== 28. ADJECTIVES ====================
        questions.push(createQuestion(questionId + 102, 'Adjectives', 'The ___ girl won the competition.', ['beautiful', 'more beautiful', 'most beautiful', 'beautifullest'], 0, 'Tính từ đứng trước danh từ: "beautiful".'));
        questions.push(createQuestion(questionId + 103, 'Adjectives', 'It is ___ to understand this rule.', ['easy', 'easier', 'easiest', 'more easy'], 0, 'Cấu trúc: It + be + adj + to V.'));
        
        // ==================== 29. ADVERBS ====================
        questions.push(createQuestion(questionId + 104, 'Adverbs', 'She speaks English ___.', ['good', 'well', 'better', 'best'], 1, 'Cách nói ngôn ngữ → dùng trạng từ "well".'));
        questions.push(createQuestion(questionId + 105, 'Adverbs', 'He runs ___ than me.', ['fast', 'faster', 'fastest', 'more fast'], 1, 'Trạng từ so sánh: faster.'));
        
        // ==================== 30. NEGATIVES ====================
        questions.push(createQuestion(questionId + 106, 'Negatives', 'She ___ like coffee.', ['does not', 'do not', 'not', 'is not'], 0, 'Ngôi thứ 3 số ít: does not + V.'));
        questions.push(createQuestion(questionId + 107, 'Negatives', 'I ___ go to the party tonight.', ['do not', 'does not', 'not', 'am not'], 3, 'Với be: am not + V-ing.'));
        
        // ==================== 31. TAG QUESTIONS ====================
        questions.push(createQuestion(questionId + 108, 'Tag Questions', 'She is a teacher, ___ she?', ['isn\'t', 'is', 'doesn\'t', 'does'], 0, 'Tag question phủ định: "isn\'t she?".'));
        questions.push(createQuestion(questionId + 109, 'Tag Questions', 'You don\'t smoke, ___ you?', ['do', 'does', 'don\'t', 'are'], 0, 'Tag question khẳng định: "do you?".'));
        
        // ==================== 32. NUMBERS ====================
        questions.push(createQuestion(questionId + 110, 'Numbers', 'There are ___ students in the class.', ['twenty', 'twentyth', 'twentyeth', 'twentys'], 0, 'Số đếm 20: twenty.'));
        questions.push(createQuestion(questionId + 111, 'Numbers', 'The ___ lesson is the most difficult.', ['five', 'fifth', 'fiveth', 'fifths'], 1, 'Số thứ tự: fifth (thứ 5).'));
        
        // ==================== 33. TIME EXPRESSIONS ====================
        questions.push(createQuestion(questionId + 112, 'Time Expressions', 'I will call you ___ tomorrow.', ['in', 'on', 'at', 'by'], 3, '"by tomorrow" = trước ngày mai.'));
        questions.push(createQuestion(questionId + 113, 'Time Expressions', 'She was born ___ 2000.', ['in', 'on', 'at', 'by'], 0, 'Năm → dùng "in".'));
        
        // ==================== 34. VERB PATTERNS ====================
        questions.push(createQuestion(questionId + 114, 'Verb Patterns', 'I made her ___ the job.', ['do', 'doing', 'to do', 'does'], 0, 'Cấu trúc: make + O + V (nguyên mẫu).'));
        questions.push(createQuestion(questionId + 115, 'Verb Patterns', 'Let me ___ you something.', ['tell', 'telling', 'to tell', 'tells'], 0, 'Let + O + V (nguyên mẫu): "tell".'));
        
        // ==================== 35. NOUN CLAUSES ====================
        questions.push(createQuestion(questionId + 116, 'Noun Clauses', '___ she is absent is not clear.', ['That', 'What', 'Whether', 'If'], 0, 'Mệnh đề danh từ làm chủ ngữ: "That".'));
        questions.push(createQuestion(questionId + 117, 'Noun Clauses', 'I don\'t know ___ she will come.', ['that', 'what', 'whether', 'if'], 2, 'Mệnh đề danh từ sau "know": "whether" hoặc "if".'));
        
        // ==================== 36. ADVERBIAL CLAUSES ====================
        questions.push(createQuestion(questionId + 118, 'Adverbial Clauses', 'I will call you ___ I arrive.', ['when', 'while', 'as', 'since'], 0, 'Mệnh đề trạng thái: "when".'));
        questions.push(createQuestion(questionId + 119, 'Adverbial Clauses', '___ she was sleeping, the phone rang.', ['While', 'When', 'Because', 'Although'], 0, 'Trong khi đang ngủ → "While".'));
        
        // ==================== 37. CAUSATIVE ====================
        questions.push(createQuestion(questionId + 120, 'Causative', 'I had my car ___.', ['repair', 'repairing', 'repaired', 'repairs'], 2, 'Causative: have + O + V3 (để người khác làm).'));
        questions.push(createQuestion(questionId + 121, 'Causative', 'She got her husband ___ the groceries.', ['buy', 'buying', 'to buy', 'bought'], 2, 'Get + O + to V: "to buy" – get yêu cầu to trước động từ nguyên mẫu.'));
        questions.push(createQuestion(questionId + 144, 'Causative', 'The teacher made the students ___ the essay again.', ['to write', 'writing', 'write', 'written'], 2, 'Make + O + bare V (không to): "write".'));
        questions.push(createQuestion(questionId + 145, 'Causative', 'My parents let me ___ out with friends last night.', ['going', 'to go', 'go', 'gone'], 2, 'Let + O + bare V (không to): "go".'));
        questions.push(createQuestion(questionId + 146, 'Causative', 'I need to ___ my laptop ___ before the presentation.', ['have / fixed', 'get / to fix', 'have / fix', 'let / fixed'], 0, 'Have + O + V3 là mẫu causative passive khi thuê/nhờ sửa chữa.'));
        questions.push(createQuestion(questionId + 147, 'Causative', 'She ___ her nails done at the salon every weekend.', ['makes', 'lets', 'gets', 'does'], 2, 'Get + O + V3 diễn tả đi làm dịch vụ (làm móng).'));
        questions.push(createQuestion(questionId + 148, 'Causative', 'He was ___ to apologize to the whole class.', ['let', 'made', 'got', 'had'], 1, 'Bị động của make là be made to + V: "was made to apologize".'));
        questions.push(createQuestion(questionId + 149, 'Causative', 'We had the broken window ___ by a professional.', ['replace', 'replacing', 'replaced', 'to replace'], 2, 'Have + O + V3: "replaced" – thuê người thay cửa sổ.'));
        questions.push(createQuestion(questionId + 150, 'Causative', 'The manager ___ the team to work overtime last Friday.', ['let', 'got', 'had', 'made'], 3, 'Make + O + bare V diễn tả ép buộc; "made" phù hợp nhất ở đây.'));
        questions.push(createQuestion(questionId + 151, 'Causative', 'I finally ___ the landlord to fix the leaking pipe.', ['made', 'let', 'got', 'had'], 2, 'Get + O + to V nhấn việc thuyết phục được ai đó làm điều gì.'));
        questions.push(createQuestion(questionId + 152, 'Causative', 'Which is correct? "He had his teeth ___."', ['check', 'checking', 'to check', 'checked'], 3, 'Have + O + V3 là mẫu đúng: "had his teeth checked" (đi khám răng).'));
        questions.push(createQuestion(questionId + 153, 'Causative', '"The news made her ___." Choose the correct form.', ['to cry', 'cried', 'cry', 'crying'], 2, 'Make có thể diễn tả cảm xúc: make + O + bare V → "cry".'));

        // ==================== 38. WISH CLAUSES ====================
        questions.push(createQuestion(questionId + 122, 'Wish Clauses', 'I wish I ___ richer.', ['am', 'was', 'were', 'be'], 2, 'Wish + quá khứ: "were" (cho tất cả ngôi).'));
        questions.push(createQuestion(questionId + 123, 'Wish Clauses', 'I wish she ___ here now.', ['is', 'was', 'were', 'be'], 2, 'Wish về hiện tại: "were".'));
        
        // ==================== 39. INVERSION ====================
        questions.push(createQuestion(questionId + 124, 'Inversion', '___ have I seen such a beautiful view!', ['Never', 'Ever', 'Often', 'Rarely'], 0, 'Đảo ngữ với Never: "Never have I seen".'));
        questions.push(createQuestion(questionId + 125, 'Inversion', '___ did he understand the problem.', ['Only then', 'Then', 'When', 'After'], 0, 'Đảo ngữ với Only: "Only then did he understand".'));
        
        // ==================== 40. EMPHATIC DO/DID ====================
        questions.push(createQuestion(questionId + 126, 'Emphatic DO/DID', 'I ___ do understand what you mean.', ['do', 'does', 'did', 'doing'], 0, 'Nhấn mạnh động từ: "do understand".'));
        questions.push(createQuestion(questionId + 127, 'Emphatic DO/DID', 'She ___ try her best.', ['did', 'does', 'do', 'doing'], 0, 'Nhấn mạnh với ngôi thứ 3: "did try".'));
        
        // ==================== 41. CONJUNCTION + PREPOSITION ====================
        questions.push(createQuestion(questionId + 128, 'Conj/Prep', 'I am interested ___ learning new things.', ['in', 'on', 'at', 'to'], 0, 'Collocation: "interested in".'));
        questions.push(createQuestion(questionId + 129, 'Conj/Prep', 'She is good ___ mathematics.', ['in', 'on', 'at', 'with'], 0, 'Collocation: "good at".'));
        questions.push(createQuestion(questionId + 130, 'Conj/Prep', 'I am tired ___ working late.', ['of', 'from', 'with', 'at'], 0, 'Collocation: "tired of".'));
        
        // ==================== 42. PHRASAL VERBS ====================
        questions.push(createQuestion(questionId + 131, 'Phrasal Verbs', 'Please ___ the lights before leaving.', ['turn off', 'turn on', 'turn up', 'turn down'], 0, 'Tắt đèn: "turn off".'));
        questions.push(createQuestion(questionId + 132, 'Phrasal Verbs', 'I need to ___ this problem.', ['figure out', 'figure in', 'figure on', 'figure at'], 0, 'Hiểu ra/tìm ra: "figure out".'));
        
        // ==================== 43. IDIOMS ====================
        questions.push(createQuestion(questionId + 133, 'Idioms', 'It is raining ___.', ['cats and dogs', 'heavily', 'hard', 'a lot'], 0, 'Idiom: "raining cats and dogs" = mưa to.'));
        questions.push(createQuestion(questionId + 134, 'Idioms', 'Don\'t count your ___ before they hatch.', ['chickens', 'birds', 'eggs', 'hens'], 0, 'Idiom: "count your chickens before they hatch" = đừng vội mừng.'));
        
        // ==================== 44. REPORTED SPEECH (Tense shift) ====================
        questions.push(createQuestion(questionId + 134, 'Reported Speech', '"I am tired," she said → She said ___ tired.', ['I was', 'she was', 'she is', 'I am'], 0, 'Tường thuật: chuyển sang quá khứ "was".'));
        questions.push(createQuestion(questionId + 135, 'Reported Speech', '"I will come," he said → He said he ___ come.', ['will', 'would', 'can', 'could'], 1, 'Tường thuật: will → would.'));
        
        // ==================== 45. FUTURE PERFECT ====================
        questions.push(createQuestion(questionId + 136, 'Future Perfect', 'By next month, I ___ here for one year.', ['will work', 'will have worked', 'working', 'worked'], 1, 'Future Perfect: will + have + V3.'));
        
        // ==================== 46. FUTURE IN THE PAST ====================
        questions.push(createQuestion(questionId + 137, 'Future in the Past', 'She said she ___ the next day.', ['will come', 'would come', 'can come', 'could come'], 1, 'Tương lai trong quá khứ: will → would.'));
        
        // ==================== 47. PAST CONTINUOUS (progressive) ====================
        questions.push(createQuestion(questionId + 138, 'Past Continuous', 'While I ___ TV, the phone rang.', ['watch', 'watched', 'was watching', 'am watching'], 2, 'Past Continuous với "while": "was watching".'));
        
        // ==================== 48. PRESENT PERFECT CONTINUOUS ====================
        questions.push(createQuestion(questionId + 139, 'Present Perfect Continuous', 'How long ___ you ___ here?', ['have / been', 'did / be', 'are / being', 'do / be'], 0, 'Present Perfect Continuous: How long have you been...?'));
        
        // ==================== 49. ZERO ARTICLE ====================
        questions.push(createQuestion(questionId + 140, 'Zero Article', '___ students must study hard.', ['The', 'A', 'Ø (không)', 'Some'], 2, 'Danh từ số nhiều chung → không mạo từ.'));
        questions.push(createQuestion(questionId + 141, 'Zero Article', 'I like ___ music.', ['the', 'a', 'an', 'Ø (không)'], 3, 'Danh từ không đếm được chung → không mạo từ.'));
        
        // ==================== 50. SUBJUNCTIVE ====================
        questions.push(createQuestion(questionId + 142, 'Subjunctive', 'It is important that she ___ on time.', ['is', 'be', 'was', 'are'], 1, 'Subjunctive: It is important that + V (nguyên mẫu) → "be".'));
        questions.push(createQuestion(questionId + 143, 'Subjunctive', 'I suggest that he ___ more.', ['work', 'works', 'working', 'worked'], 0, 'Subjunctive sau suggest: V nguyên mẫu "work".'));
        
        // Shuffle and return
        return shuffleArray(questions);
    }
    
    function shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }
    
    function initExerciseSystem() {
        if (!elements.exerciseBtn) return;
        
        elements.exerciseBtn.addEventListener('click', () => {
            startExercise();
        });
        
        if (elements.closeExercise) {
            elements.closeExercise.addEventListener('click', () => {
                elements.exerciseModal.style.display = 'none';
            });
        }
        
        elements.exerciseModal.addEventListener('click', event => {
            if (event.target === elements.exerciseModal) {
                elements.exerciseModal.style.display = 'none';
            }
        });
        
        if (elements.nextQuestion) {
            elements.nextQuestion.addEventListener('click', () => {
                showNextQuestion();
            });
        }
        
        if (elements.restartExercise) {
            elements.restartExercise.addEventListener('click', () => {
                startExercise();
            });
        }
    }
    
    function startExercise() {
        state.exerciseQuestions = generateExerciseQuestions();
        state.exerciseIndex = 0;
        state.exerciseScore = 0;
        state.exerciseAnswers = [];
        
        elements.exerciseModal.style.display = 'flex';
        elements.exerciseSummary.style.display = 'none';
        elements.exerciseResult.style.display = 'none';
        elements.exerciseContent.style.display = 'block';
        
        showQuestion();
    }
    
    function showQuestion() {
        const question = state.exerciseQuestions[state.exerciseIndex];
        if (!question) {
            showExerciseSummary();
            return;
        }
        
        // Update progress
        const total = state.exerciseQuestions.length;
        const current = state.exerciseIndex + 1;
        elements.exerciseProgress.textContent = `Câu ${current}/${total}`;
        elements.exerciseProgressFill.style.width = `${(current / total) * 100}%`;
        
        // Show question
        elements.exerciseQuestion.innerHTML = `
            <div class="exercise-topic">${question.topic}</div>
            <div class="exercise-text">${question.question}</div>
        `;
        
        // Show options
        elements.exerciseOptions.innerHTML = question.options.map((option, index) => `
            <button class="exercise-option" data-index="${index}">${option}</button>
        `).join('');
        
        // Add click handlers
        elements.exerciseOptions.querySelectorAll('.exercise-option').forEach(btn => {
            btn.addEventListener('click', () => selectAnswer(parseInt(btn.dataset.index)));
        });
    }
    
    function selectAnswer(selectedIndex) {
        const question = state.exerciseQuestions[state.exerciseIndex];
        const isCorrect = selectedIndex === question.correct;
        
        if (isCorrect) {
            state.exerciseScore++;
        }
        
        state.exerciseAnswers.push({
            question: question.question,
            selected: question.options[selectedIndex],
            correct: question.options[question.correct],
            isCorrect: isCorrect
        });
        
        // Show result
        elements.exerciseContent.style.display = 'none';
        elements.exerciseResult.style.display = 'block';
        
        if (isCorrect) {
            elements.resultIcon.innerHTML = '✅';
            elements.resultMessage.innerHTML = '<strong>Đúng!</strong>';
        } else {
            elements.resultIcon.innerHTML = '❌';
            elements.resultMessage.innerHTML = '<strong>Sai rồi!</strong>';
        }
        
        elements.resultExplanation.innerHTML = `
            <p><strong>Đáp án đúng:</strong> ${question.options[question.correct]}</p>
            <p><strong>Giải thích:</strong> ${question.explanation}</p>
        `;
    }
    
    function showNextQuestion() {
        state.exerciseIndex++;
        
        if (state.exerciseIndex >= state.exerciseQuestions.length) {
            showExerciseSummary();
        } else {
            elements.exerciseResult.style.display = 'none';
            elements.exerciseContent.style.display = 'block';
            showQuestion();
        }
    }
    
    function showExerciseSummary() {
        elements.exerciseContent.style.display = 'none';
        elements.exerciseResult.style.display = 'none';
        elements.exerciseSummary.style.display = 'block';
        
        const total = state.exerciseQuestions.length;
        const score = state.exerciseScore;
        const percentage = Math.round((score / total) * 100);
        
        let emoji = '📚';
        if (percentage >= 90) emoji = '🏆';
        else if (percentage >= 70) emoji = '🎉';
        else if (percentage >= 50) emoji = '💪';
        else emoji = '📖';
        
        elements.summaryScore.innerHTML = `
            <div class="score-emoji">${emoji}</div>
            <div class="score-number">${score}/${total}</div>
            <div class="score-percent">${percentage}%</div>
        `;
        
        elements.summaryDetails.innerHTML = state.exerciseAnswers.map((answer, index) => `
            <div class="summary-item ${answer.isCorrect ? 'correct' : 'incorrect'}">
                <span class="summary-icon">${answer.isCorrect ? '✅' : '❌'}</span>
                <span class="summary-text">Câu ${index + 1}: ${answer.question}</span>
            </div>
        `).join('');
    }

    function initIrregularVerbBank() {
        if (!elements.irregularVerbsTableBody || !Array.isArray(irregularVerbs)) return;

        const render = () => {
            const query = normalizeText(elements.irregularVerbSearch ? elements.irregularVerbSearch.value : '');
            const filtered = irregularVerbs.filter(verb => {
                const searchText = normalizeText([
                    verb.base,
                    verb.past,
                    verb.participle,
                    verb.meaning
                ].join(' '));
                return !query || searchText.includes(query);
            });

            elements.irregularVerbsTableBody.innerHTML = filtered.map(verb => `
                <tr>
                    <td><strong>${verb.base}</strong></td>
                    <td>${verb.past}</td>
                    <td>${verb.participle}</td>
                    <td>${verb.meaning}</td>
                </tr>
            `).join('');

            if (elements.irregularVerbCount) {
                elements.irregularVerbCount.textContent = `${filtered.length}/${irregularVerbs.length} động từ`;
            }
        };

        if (elements.irregularVerbSearch) {
            elements.irregularVerbSearch.addEventListener('input', render);
        }

        render();
    }

    function renderPracticeContent(id, component) {
        const practice = grammarPracticeData && grammarPracticeData[id];

        if (!practice) {
            const relatedTitles = (component.connections || [])
                .map(connectionId => allComponents[connectionId] && allComponents[connectionId].title)
                .filter(Boolean)
                .slice(0, 4);

            return `
                <div class="practice-empty">
                    <h3>🧪 Chưa có bài tập riêng</h3>
                    <p>Mục này chưa có block luyện tập tách riêng. Bạn có thể ôn qua các mục liên quan trước rồi quay lại.</p>
                    ${relatedTitles.length ? `
                        <div class="practice-related">
                            <strong>Gợi ý ôn tiếp:</strong>
                            <p>${relatedTitles.join(' • ')}</p>
                        </div>
                    ` : ''}
                </div>
            `;
        }

        return `
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
                            ${Array.isArray(section.explanations) && section.explanations.length ? `
                            <ol class="practice-answer-list">
                                ${section.answers.map((answer, index) => `
                                    <li>
                                        <div><strong>Đáp án:</strong> ${answer}</div>
                                        ${section.explanations[index] ? `<div class="practice-item-explanation"><strong>Giải thích:</strong> ${section.explanations[index]}</div>` : ''}
                                    </li>
                                `).join('')}
                            </ol>
                            ` : `
                            <ol class="practice-answer-list">
                                ${section.answers.map(answer => `<li>${answer}</li>`).join('')}
                            </ol>
                            `}
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

    document.addEventListener('keydown', event => {
        if (event.key !== 'Escape') return;

        if (elements.checklistModal.style.display === 'flex') {
            elements.checklistModal.style.display = 'none';
        } else if (elements.infoPanel.classList.contains('open')) {
            closeInfoPanel();
        } else if (state.isTourActive) {
            endTour();
        }
    });

    function init() {
        renderConceptNodes();
        initLevelSelection();
        initCategoryFilter();
        initGrammarSearch();
        initNodeInteraction();
        initPanelControls();
        initTourSystem();
        initReferenceShortcuts();
        initExerciseSystem();
        renderMemoryBank();
        initIrregularVerbBank();
        if (state.currentLevel) filterNodesByLevel();
        updateConceptVisibility();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
