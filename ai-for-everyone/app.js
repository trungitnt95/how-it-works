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

    // Checklist
    function initChecklistModal() {
        elements.checklistBtn.addEventListener('click', () => {
            elements.checklistModal.style.display = 'flex';
            renderChecklist();
        });
        elements.closeChecklist.addEventListener('click', () => {
            elements.checklistModal.style.display = 'none';
        });
        elements.resetChecklist.addEventListener('click', () => {
            localStorage.removeItem('aiChecklist');
            renderChecklist();
        });
        elements.checklistModal.addEventListener('click', e => {
            if (e.target === elements.checklistModal) elements.checklistModal.style.display = 'none';
        });
    }

    function renderChecklist() {
        const saved = JSON.parse(localStorage.getItem('aiChecklist') || '{}');
        elements.checklistItems.innerHTML = aiChecklist.map((item, i) => `
            <label class="checklist-item">
                <input type="checkbox" data-index="${i}" ${saved[i] ? 'checked' : ''}>
                <span class="checkbox-custom"></span>
                <span class="checklist-text">${item}</span>
            </label>
        `).join('');
        elements.checklistItems.querySelectorAll('input').forEach(cb => {
            cb.addEventListener('change', () => {
                const checks = {};
                elements.checklistItems.querySelectorAll('input').forEach(c => checks[c.dataset.index] = c.checked);
                localStorage.setItem('aiChecklist', JSON.stringify(checks));
            });
        });
    }

    // Keyboard
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') {
            if (elements.checklistModal.style.display === 'flex') elements.checklistModal.style.display = 'none';
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
        initChecklistModal();
        if (state.currentLevel) filterNodesByLevel();
    }

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
    else init();
})();
