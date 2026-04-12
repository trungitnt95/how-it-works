// English Grammar - Main App
(function() {
    'use strict';

    const state = {
        currentLevel: localStorage.getItem('englishGrammarLevel') || null,
        currentTab: 'simple',
        isTourActive: false,
        tourStepIndex: 0,
        selectedComponent: null
    };

    const allComponents = {
        ...grammarFoundationsData,
        ...grammarTensesData,
        ...grammarPronunciationData,
        ...grammarPatternsData,
        ...grammarStructuresData,
        ...grammarMistakesData,
        ...grammarSupplementsData
    };

    const elements = {
        levelOverlay: document.getElementById('levelOverlay'),
        levelBadge: document.getElementById('levelBadge'),
        changeLevelBtn: document.getElementById('changeLevelBtn'),
        startTourBtn: document.getElementById('startTourBtn'),
        checklistBtn: document.getElementById('checklistBtn'),
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
        checklistModal: document.getElementById('checklistModal'),
        closeChecklist: document.getElementById('closeChecklist'),
        checklistItems: document.getElementById('checklistItems'),
        resetChecklist: document.getElementById('resetChecklist'),
        irregularVerbSearch: document.getElementById('irregularVerbSearch'),
        irregularVerbCount: document.getElementById('irregularVerbCount'),
        irregularVerbsTableBody: document.getElementById('irregularVerbsTableBody'),
        memoryBankGrid: document.getElementById('memoryBankGrid'),
        referenceLinks: document.querySelectorAll('.reference-link'),
        filterBtns: document.querySelectorAll('.filter-btn'),
        nodes: document.querySelectorAll('.node'),
        tabBtns: document.querySelectorAll('.tab-btn')
    };

    function normalizeText(text) {
        return String(text || '')
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/đ/g, 'd')
            .replace(/Đ/g, 'D');
    }

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
        localStorage.setItem('englishGrammarLevel', level);
        hideOverlay();
        updateLevelUI();
        filterNodesByLevel();
    }

    function hideOverlay() {
        elements.levelOverlay.style.display = 'none';
    }

    function updateLevelUI() {
        const names = {
            beginner: '🌱 Người Mới',
            intermediate: '🌿 Trung Cấp',
            advanced: '🌳 Nâng Cao'
        };

        elements.levelBadge.textContent = names[state.currentLevel];

        if (state.currentLevel === 'beginner') {
            elements.quickTips.style.display = 'block';
            elements.tipsGrid.innerHTML = quickTips.map(tip => `
                <div class="tip-card"><span class="tip-icon">${tip.icon}</span><p>${tip.text}</p></div>
            `).join('');
        } else {
            elements.quickTips.style.display = 'none';
        }
    }

    function filterNodesByLevel() {
        const order = ['beginner', 'intermediate', 'advanced'];
        const currentIndex = order.indexOf(state.currentLevel);

        elements.nodes.forEach(node => {
            const badge = node.querySelector('.node-badge');
            if (!badge) return;

            const levelIndex = badge.classList.contains('beginner')
                ? 0
                : badge.classList.contains('intermediate')
                    ? 1
                    : 2;

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

                const category = btn.dataset.category;
                document.querySelectorAll('.concept-section').forEach(section => {
                    section.style.display = category === 'all' || section.dataset.category === category
                        ? 'block'
                        : 'none';
                });
            });
        });
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
        elements.panelIcon.textContent = component.icon;
        elements.panelTitle.textContent = component.title;
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
            const steps = tourSteps[state.currentLevel] || tourSteps.beginner;
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

    function initChecklistModal() {
        elements.checklistBtn.addEventListener('click', () => {
            elements.checklistModal.style.display = 'flex';
            renderChecklist();
        });

        elements.closeChecklist.addEventListener('click', () => {
            elements.checklistModal.style.display = 'none';
        });

        elements.resetChecklist.addEventListener('click', () => {
            localStorage.removeItem('englishGrammarChecklist');
            renderChecklist();
        });

        elements.checklistModal.addEventListener('click', event => {
            if (event.target === elements.checklistModal) {
                elements.checklistModal.style.display = 'none';
            }
        });
    }

    function renderChecklist() {
        const saved = JSON.parse(localStorage.getItem('englishGrammarChecklist') || '{}');

        elements.checklistItems.innerHTML = englishGrammarChecklist.map((item, index) => `
            <label class="checklist-item">
                <input type="checkbox" data-index="${index}" ${saved[index] ? 'checked' : ''}>
                <span class="checkbox-custom"></span>
                <span class="checklist-text">${item}</span>
            </label>
        `).join('');

        elements.checklistItems.querySelectorAll('input').forEach(checkbox => {
            checkbox.addEventListener('change', () => {
                const checks = {};
                elements.checklistItems.querySelectorAll('input').forEach(input => {
                    checks[input.dataset.index] = input.checked;
                });
                localStorage.setItem('englishGrammarChecklist', JSON.stringify(checks));
            });
        });
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
            ${practice.sections.map(section => `
                <section class="practice-block">
                    <h4>${section.title}</h4>
                    ${section.instruction ? `<p class="practice-instruction">${section.instruction}</p>` : ''}
                    <ol class="practice-list">
                        ${section.questions.map(question => `<li>${question}</li>`).join('')}
                    </ol>
                    <details class="practice-answer">
                        <summary>Xem đáp án</summary>
                        <ol class="practice-answer-list">
                            ${section.answers.map(answer => `<li>${answer}</li>`).join('')}
                        </ol>
                    </details>
                </section>
            `).join('')}
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
        initLevelSelection();
        initCategoryFilter();
        initNodeInteraction();
        initPanelControls();
        initTourSystem();
        initChecklistModal();
        initReferenceShortcuts();
        renderMemoryBank();
        initIrregularVerbBank();
        if (state.currentLevel) filterNodesByLevel();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
