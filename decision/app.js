// Decision Making - How It Works
// Main application controller

(function() {
    'use strict';

    // ========================================
    // STATE MANAGEMENT
    // ========================================
    const state = {
        currentLevel: localStorage.getItem('decisionLevel') || null,
        currentTab: 'simple',
        isTourActive: false,
        tourStepIndex: 0,
        currentCategory: 'all',
        selectedComponent: null
    };

    // Merge all component data
    const allComponents = {
        ...decisionModelsData,
        ...cognitiveBiasesData,
        ...decisionToolsData,
        ...decisionPitfallsData
    };

    // ========================================
    // DOM ELEMENTS
    // ========================================
    const elements = {
        levelOverlay: document.getElementById('levelOverlay'),
        levelBadge: document.getElementById('levelBadge'),
        changeLevelBtn: document.getElementById('changeLevelBtn'),
        startTourBtn: document.getElementById('startTourBtn'),
        scenarioBtn: document.getElementById('scenarioBtn'),
        checklistBtn: document.getElementById('checklistBtn'),
        
        // Tour elements
        tourProgress: document.getElementById('tourProgress'),
        tourPanel: document.getElementById('tourPanel'),
        progressFill: document.getElementById('progressFill'),
        progressSteps: document.getElementById('progressSteps'),
        currentStep: document.getElementById('currentStep'),
        totalSteps: document.getElementById('totalSteps'),
        tourTitle: document.getElementById('tourTitle'),
        tourDescription: document.getElementById('tourDescription'),
        tourPrev: document.getElementById('tourPrev'),
        tourNext: document.getElementById('tourNext'),
        tourSkip: document.getElementById('tourSkip'),
        
        // Info panel
        infoPanel: document.getElementById('infoPanel'),
        closePanel: document.getElementById('closePanel'),
        panelIcon: document.getElementById('panelIcon'),
        panelTitle: document.getElementById('panelTitle'),
        panelSubtitle: document.getElementById('panelSubtitle'),
        panelContent: document.getElementById('panelContent'),
        relatedConcepts: document.getElementById('relatedConcepts'),
        
        // Quick tips
        quickTips: document.getElementById('quickTips'),
        tipsGrid: document.getElementById('tipsGrid'),
        
        // Modals
        scenarioModal: document.getElementById('scenarioModal'),
        closeScenario: document.getElementById('closeScenario'),
        scenarioCategories: document.getElementById('scenarioCategories'),
        scenarioList: document.getElementById('scenarioList'),
        scenarioDetail: document.getElementById('scenarioDetail'),
        
        checklistModal: document.getElementById('checklistModal'),
        closeChecklist: document.getElementById('closeChecklist'),
        checklistItems: document.getElementById('checklistItems'),
        resetChecklist: document.getElementById('resetChecklist'),
        printChecklist: document.getElementById('printChecklist'),
        
        // Grid
        conceptsGrid: document.getElementById('conceptsGrid'),
        filterBtns: document.querySelectorAll('.filter-btn'),
        nodes: document.querySelectorAll('.node'),
        tabBtns: document.querySelectorAll('.tab-btn')
    };

    // ========================================
    // LEVEL MANAGEMENT
    // ========================================
    function initLevelSelection() {
        // Check if level already selected
        if (state.currentLevel) {
            hideOverlay();
            updateLevelUI();
        } else {
            showOverlay();
        }

        // Level card click handlers
        document.querySelectorAll('.level-card').forEach(card => {
            card.addEventListener('click', () => {
                const level = card.dataset.level;
                selectLevel(level);
            });
        });

        // Change level button
        elements.changeLevelBtn.addEventListener('click', showOverlay);
    }

    function selectLevel(level) {
        state.currentLevel = level;
        localStorage.setItem('decisionLevel', level);
        hideOverlay();
        updateLevelUI();
        filterNodesByLevel();
    }

    function showOverlay() {
        elements.levelOverlay.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }

    function hideOverlay() {
        elements.levelOverlay.style.display = 'none';
        document.body.style.overflow = '';
    }

    function updateLevelUI() {
        const levelNames = {
            beginner: '🌱 Người Mới',
            intermediate: '🌿 Trung Cấp',
            advanced: '🌳 Nâng Cao'
        };
        elements.levelBadge.textContent = levelNames[state.currentLevel] || '🌱 Người Mới';
        
        // Show/hide quick tips based on level
        if (state.currentLevel === 'beginner') {
            elements.quickTips.style.display = 'block';
            renderQuickTips();
        } else {
            elements.quickTips.style.display = 'none';
        }
    }

    function filterNodesByLevel() {
        const levelOrder = ['beginner', 'intermediate', 'advanced'];
        const currentIndex = levelOrder.indexOf(state.currentLevel);
        
        elements.nodes.forEach(node => {
            const badge = node.querySelector('.node-badge');
            if (badge) {
                const nodeLevel = badge.classList.contains('beginner') ? 'beginner' :
                                  badge.classList.contains('intermediate') ? 'intermediate' : 'advanced';
                const nodeIndex = levelOrder.indexOf(nodeLevel);
                
                if (nodeIndex <= currentIndex) {
                    node.classList.remove('locked');
                    node.style.opacity = '1';
                    node.style.pointerEvents = 'auto';
                } else {
                    node.classList.add('locked');
                    node.style.opacity = '0.5';
                    node.style.pointerEvents = 'none';
                }
            }
        });
    }

    // ========================================
    // QUICK TIPS
    // ========================================
    function renderQuickTips() {
        elements.tipsGrid.innerHTML = quickTips.map(tip => `
            <div class="tip-card">
                <span class="tip-icon">${tip.icon}</span>
                <p>${tip.text}</p>
            </div>
        `).join('');
    }

    // ========================================
    // CATEGORY FILTER
    // ========================================
    function initCategoryFilter() {
        elements.filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Update active state
                elements.filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                const category = btn.dataset.category;
                state.currentCategory = category;
                filterByCategory(category);
            });
        });
    }

    function filterByCategory(category) {
        const sections = document.querySelectorAll('.concept-section');
        sections.forEach(section => {
            if (category === 'all' || section.dataset.category === category) {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        });
    }

    // ========================================
    // NODE INTERACTION
    // ========================================
    function initNodeInteraction() {
        elements.nodes.forEach(node => {
            node.addEventListener('click', () => {
                if (node.classList.contains('locked')) return;
                
                const componentId = node.dataset.component;
                showComponentInfo(componentId);
                
                // Update active state
                elements.nodes.forEach(n => n.classList.remove('active'));
                node.classList.add('active');
            });
        });
    }

    function showComponentInfo(componentId) {
        const component = allComponents[componentId];
        if (!component) return;
        
        state.selectedComponent = componentId;
        
        // Update panel header
        elements.panelIcon.textContent = component.icon;
        elements.panelTitle.textContent = component.title;
        elements.panelSubtitle.textContent = component.subtitle || '';
        
        // Show simple content by default
        showTabContent('simple');
        
        // Render related concepts
        renderRelatedConcepts(component.connections || []);
        
        // Show panel
        elements.infoPanel.classList.add('open');
    }

    function showTabContent(tab) {
        state.currentTab = tab;
        const component = allComponents[state.selectedComponent];
        if (!component) return;
        
        // Update tab active state
        elements.tabBtns.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.tab === tab);
        });
        
        // Show content
        const content = component[tab] || component.simple || '<p>Nội dung đang được cập nhật...</p>';
        elements.panelContent.innerHTML = content;
    }

    function renderRelatedConcepts(connections) {
        if (!connections || connections.length === 0) {
            elements.relatedConcepts.innerHTML = '<p class="no-connections">Không có khái niệm liên quan</p>';
            return;
        }
        
        elements.relatedConcepts.innerHTML = connections.map(id => {
            const related = allComponents[id];
            if (!related) return '';
            return `
                <button class="related-btn" data-component="${id}">
                    ${related.icon} ${related.title}
                </button>
            `;
        }).join('');
        
        // Add click handlers to related buttons
        elements.relatedConcepts.querySelectorAll('.related-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = btn.dataset.component;
                showComponentInfo(id);
                
                // Highlight the related node
                elements.nodes.forEach(n => {
                    n.classList.toggle('active', n.dataset.component === id);
                });
            });
        });
    }

    function initPanelControls() {
        // Close panel
        elements.closePanel.addEventListener('click', () => {
            elements.infoPanel.classList.remove('open');
            elements.nodes.forEach(n => n.classList.remove('active'));
            state.selectedComponent = null;
        });
        
        // Tab switching
        elements.tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                showTabContent(btn.dataset.tab);
            });
        });
    }

    // ========================================
    // TOUR SYSTEM
    // ========================================
    function initTourSystem() {
        elements.startTourBtn.addEventListener('click', startTour);
        elements.tourPrev.addEventListener('click', prevTourStep);
        elements.tourNext.addEventListener('click', nextTourStep);
        elements.tourSkip.addEventListener('click', endTour);
    }

    function startTour() {
        state.isTourActive = true;
        state.tourStepIndex = 0;
        
        const steps = tourSteps[state.currentLevel] || tourSteps.beginner;
        elements.totalSteps.textContent = steps.length;
        
        // Show tour UI
        elements.tourProgress.style.display = 'block';
        elements.tourPanel.style.display = 'block';
        
        // Render progress steps
        renderProgressSteps(steps);
        
        // Show first step
        showTourStep(0);
    }

    function renderProgressSteps(steps) {
        elements.progressSteps.innerHTML = steps.map((step, index) => `
            <div class="progress-step ${index === 0 ? 'active' : ''}" data-step="${index}">
                <span class="step-dot"></span>
                <span class="step-label">${step.title.substring(0, 15)}...</span>
            </div>
        `).join('');
    }

    function showTourStep(index) {
        const steps = tourSteps[state.currentLevel] || tourSteps.beginner;
        if (index < 0 || index >= steps.length) return;
        
        state.tourStepIndex = index;
        const step = steps[index];
        
        // Update step indicator
        elements.currentStep.textContent = index + 1;
        elements.tourTitle.textContent = step.title;
        elements.tourDescription.textContent = step.description;
        
        // Update progress bar
        const progress = ((index + 1) / steps.length) * 100;
        elements.progressFill.style.width = `${progress}%`;
        
        // Update progress steps
        document.querySelectorAll('.progress-step').forEach((el, i) => {
            el.classList.toggle('active', i <= index);
            el.classList.toggle('current', i === index);
        });
        
        // Highlight target element if specified
        if (step.target) {
            highlightElement(step.target);
        }
        
        // Update button states
        elements.tourPrev.disabled = index === 0;
        elements.tourNext.textContent = index === steps.length - 1 ? 'Hoàn thành' : 'Tiếp theo →';
    }

    function highlightElement(selector) {
        // Remove previous highlights
        document.querySelectorAll('.tour-highlight').forEach(el => {
            el.classList.remove('tour-highlight');
        });
        
        // Add new highlight
        const target = document.querySelector(selector);
        if (target) {
            target.classList.add('tour-highlight');
            target.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }

    function prevTourStep() {
        showTourStep(state.tourStepIndex - 1);
    }

    function nextTourStep() {
        const steps = tourSteps[state.currentLevel] || tourSteps.beginner;
        if (state.tourStepIndex >= steps.length - 1) {
            endTour();
        } else {
            showTourStep(state.tourStepIndex + 1);
        }
    }

    function endTour() {
        state.isTourActive = false;
        elements.tourProgress.style.display = 'none';
        elements.tourPanel.style.display = 'none';
        
        // Remove highlights
        document.querySelectorAll('.tour-highlight').forEach(el => {
            el.classList.remove('tour-highlight');
        });
    }

    // ========================================
    // SCENARIO MODAL
    // ========================================
    function initScenarioModal() {
        elements.scenarioBtn.addEventListener('click', openScenarioModal);
        elements.closeScenario.addEventListener('click', closeScenarioModal);
        
        // Close on outside click
        elements.scenarioModal.addEventListener('click', (e) => {
            if (e.target === elements.scenarioModal) {
                closeScenarioModal();
            }
        });
    }

    function openScenarioModal() {
        elements.scenarioModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        renderScenarioCategories();
    }

    function closeScenarioModal() {
        elements.scenarioModal.style.display = 'none';
        document.body.style.overflow = '';
        elements.scenarioDetail.style.display = 'none';
        elements.scenarioList.style.display = 'block';
    }

    function renderScenarioCategories() {
        const categoryIcons = {
            career: '💼',
            finance: '💰',
            relationships: '💑',
            daily: '🏠'
        };
        
        const categoryNames = {
            career: 'Sự nghiệp',
            finance: 'Tài chính',
            relationships: 'Mối quan hệ',
            daily: 'Hàng ngày'
        };
        
        elements.scenarioCategories.innerHTML = Object.keys(decisionScenarios).map(cat => `
            <button class="scenario-cat-btn" data-category="${cat}">
                ${categoryIcons[cat]} ${categoryNames[cat]}
            </button>
        `).join('');
        
        // Add click handlers
        elements.scenarioCategories.querySelectorAll('.scenario-cat-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                elements.scenarioCategories.querySelectorAll('.scenario-cat-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                renderScenarioList(btn.dataset.category);
            });
        });
        
        // Show first category by default
        const firstBtn = elements.scenarioCategories.querySelector('.scenario-cat-btn');
        if (firstBtn) {
            firstBtn.click();
        }
    }

    function renderScenarioList(category) {
        const scenarios = decisionScenarios[category] || [];
        
        elements.scenarioList.innerHTML = scenarios.map(scenario => `
            <div class="scenario-card" data-scenario-id="${scenario.id}">
                <h3>${scenario.title}</h3>
                <p>${scenario.situation.substring(0, 150)}...</p>
                <button class="scenario-view-btn">Xem chi tiết →</button>
            </div>
        `).join('');
        
        // Add click handlers
        elements.scenarioList.querySelectorAll('.scenario-card').forEach(card => {
            card.addEventListener('click', () => {
                const id = card.dataset.scenarioId;
                showScenarioDetail(id);
            });
        });
    }

    function showScenarioDetail(id) {
        const scenario = getScenarioById(id);
        if (!scenario) return;
        
        elements.scenarioList.style.display = 'none';
        elements.scenarioDetail.style.display = 'block';
        
        elements.scenarioDetail.innerHTML = `
            <button class="back-to-list">← Quay lại danh sách</button>
            <h3>${scenario.title}</h3>
            <div class="scenario-situation">
                <h4>📋 Tình huống</h4>
                <p>${scenario.situation}</p>
            </div>
            
            <div class="scenario-options">
                <h4>🎯 Các lựa chọn</h4>
                ${scenario.options.map((opt, i) => `
                    <div class="option-card" data-option="${i}">
                        <strong>Lựa chọn ${i + 1}:</strong> ${opt}
                    </div>
                `).join('')}
            </div>
            
            <div class="scenario-analysis" id="scenarioAnalysis" style="display: none;">
                <!-- Analysis shown when option is selected -->
            </div>
            
            <div class="scenario-tools">
                <h4>🔧 Công cụ đề xuất</h4>
                <div class="tools-tags">
                    ${scenario.toolsToUse.map(tool => {
                        const toolData = allComponents[tool];
                        return toolData ? `<span class="tool-tag">${toolData.icon} ${toolData.title}</span>` : '';
                    }).join('')}
                </div>
            </div>
            
            <div class="scenario-lessons">
                <h4>💡 Bài học</h4>
                <ul>
                    ${scenario.lessons.map(lesson => `<li>${lesson}</li>`).join('')}
                </ul>
            </div>
        `;
        
        // Back button handler
        elements.scenarioDetail.querySelector('.back-to-list').addEventListener('click', () => {
            elements.scenarioDetail.style.display = 'none';
            elements.scenarioList.style.display = 'block';
        });
        
        // Option click handlers
        elements.scenarioDetail.querySelectorAll('.option-card').forEach(card => {
            card.addEventListener('click', () => {
                const optIndex = parseInt(card.dataset.option);
                showOptionAnalysis(scenario, optIndex);
                
                // Highlight selected option
                elements.scenarioDetail.querySelectorAll('.option-card').forEach(c => c.classList.remove('selected'));
                card.classList.add('selected');
            });
        });
    }

    function showOptionAnalysis(scenario, optionIndex) {
        const analysis = scenario.analysis[optionIndex];
        if (!analysis) return;
        
        const analysisEl = document.getElementById('scenarioAnalysis');
        analysisEl.style.display = 'block';
        analysisEl.innerHTML = `
            <h4>📊 Phân tích lựa chọn này</h4>
            <div class="analysis-grid">
                <div class="analysis-pros">
                    <h5>✅ Ưu điểm</h5>
                    <ul>${analysis.pros.map(p => `<li>${p}</li>`).join('')}</ul>
                </div>
                <div class="analysis-cons">
                    <h5>❌ Nhược điểm</h5>
                    <ul>${analysis.cons.map(c => `<li>${c}</li>`).join('')}</ul>
                </div>
            </div>
            <div class="analysis-biases">
                <h5>⚠️ Thiên kiến cần tránh</h5>
                <p>${analysis.biases.join(', ')}</p>
            </div>
            <div class="analysis-recommendation">
                <h5>💡 Khuyến nghị</h5>
                <p>${analysis.recommendation}</p>
            </div>
        `;
        
        analysisEl.scrollIntoView({ behavior: 'smooth' });
    }

    // ========================================
    // CHECKLIST MODAL
    // ========================================
    function initChecklistModal() {
        elements.checklistBtn.addEventListener('click', openChecklistModal);
        elements.closeChecklist.addEventListener('click', closeChecklistModal);
        elements.resetChecklist.addEventListener('click', resetChecklist);
        elements.printChecklist.addEventListener('click', printChecklist);
        
        // Close on outside click
        elements.checklistModal.addEventListener('click', (e) => {
            if (e.target === elements.checklistModal) {
                closeChecklistModal();
            }
        });
    }

    function openChecklistModal() {
        elements.checklistModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        renderChecklist();
    }

    function closeChecklistModal() {
        elements.checklistModal.style.display = 'none';
        document.body.style.overflow = '';
    }

    function renderChecklist() {
        const savedChecks = JSON.parse(localStorage.getItem('decisionChecklist') || '{}');
        
        elements.checklistItems.innerHTML = decisionChecklist.map((item, index) => `
            <label class="checklist-item">
                <input type="checkbox" 
                       data-index="${index}" 
                       ${savedChecks[index] ? 'checked' : ''}>
                <span class="checkbox-custom"></span>
                <span class="checklist-text">${item}</span>
            </label>
        `).join('');
        
        // Add change handlers
        elements.checklistItems.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
            checkbox.addEventListener('change', saveChecklistState);
        });
    }

    function saveChecklistState() {
        const checks = {};
        elements.checklistItems.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
            checks[checkbox.dataset.index] = checkbox.checked;
        });
        localStorage.setItem('decisionChecklist', JSON.stringify(checks));
    }

    function resetChecklist() {
        localStorage.removeItem('decisionChecklist');
        renderChecklist();
    }

    function printChecklist() {
        window.print();
    }

    // ========================================
    // KEYBOARD SHORTCUTS
    // ========================================
    function initKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            // ESC to close panels/modals
            if (e.key === 'Escape') {
                if (elements.scenarioModal.style.display === 'flex') {
                    closeScenarioModal();
                } else if (elements.checklistModal.style.display === 'flex') {
                    closeChecklistModal();
                } else if (elements.infoPanel.classList.contains('open')) {
                    elements.infoPanel.classList.remove('open');
                } else if (state.isTourActive) {
                    endTour();
                }
            }
            
            // Arrow keys for tour navigation
            if (state.isTourActive) {
                if (e.key === 'ArrowRight') {
                    nextTourStep();
                } else if (e.key === 'ArrowLeft') {
                    prevTourStep();
                }
            }
        });
    }

    // ========================================
    // INITIALIZATION
    // ========================================
    function init() {
        console.log('Decision Making module initialized');
        
        initLevelSelection();
        initCategoryFilter();
        initNodeInteraction();
        initPanelControls();
        initTourSystem();
        initScenarioModal();
        initChecklistModal();
        initKeyboardShortcuts();
        
        // Apply initial filtering
        if (state.currentLevel) {
            filterNodesByLevel();
        }
    }

    // Start when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
