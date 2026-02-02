// ==================== APPLICATION STATE ====================
let currentLevel = 'beginner';
let currentTourStep = 0;
let isTourActive = false;
let currentScenario = null;
let currentScenarioStep = 0;
let selectedNode = null;
let showAllConnections = false;

// ==================== DOM ELEMENTS ====================
const levelOverlay = document.getElementById('levelOverlay');
const levelBadge = document.getElementById('levelBadge');
const diagramContainer = document.getElementById('diagramContainer');
const modalOverlay = document.getElementById('modalOverlay');
const scenarioOverlay = document.getElementById('scenarioOverlay');
const simulatorOverlay = document.getElementById('simulatorOverlay');
const timelineOverlay = document.getElementById('timelineOverlay');
const tourPanel = document.getElementById('tourPanel');
const tourProgress = document.getElementById('tourProgress');
const storyNarration = document.getElementById('storyNarration');

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
    initLevelSelection();
    initNodes();
    initEventListeners();
    initScenarios();
    initSimulator();
    initTimeline();
});

function initLevelSelection() {
    const levelCards = document.querySelectorAll('.level-card');
    levelCards.forEach(card => {
        card.addEventListener('click', () => {
            const level = card.dataset.level;
            selectLevel(level);
        });
    });
}

function selectLevel(level) {
    currentLevel = level;
    levelOverlay.classList.add('hidden');
    
    const badges = {
        beginner: '🌱 Người Mới',
        intermediate: '🌿 Trung Cấp',
        advanced: '🌳 Nâng Cao'
    };
    levelBadge.textContent = badges[level];
    
    if (level === 'beginner') {
        setTimeout(() => startTour(), 500);
    }
}

function initNodes() {
    Object.keys(componentData).forEach(nodeId => {
        const data = componentData[nodeId];
        const node = document.createElement('div');
        node.className = `node ${nodeId}`;
        node.dataset.id = nodeId;
        node.dataset.category = data.category;
        node.innerHTML = `
            <span class="node-number">${data.order}</span>
            <span class="node-icon">${data.icon}</span>
            <span class="node-label">${data.title}</span>
        `;
        node.addEventListener('click', () => openModal(nodeId));
        diagramContainer.appendChild(node);
    });
}

function initEventListeners() {
    // Header buttons
    document.getElementById('changeLevelBtn').addEventListener('click', () => {
        levelOverlay.classList.remove('hidden');
    });
    
    document.getElementById('startTourBtn').addEventListener('click', startTour);
    document.getElementById('scenarioBtn').addEventListener('click', openScenarioModal);
    document.getElementById('simulatorBtn').addEventListener('click', openSimulatorModal);
    document.getElementById('timelineBtn').addEventListener('click', openTimelineModal);
    
    // Tour controls
    document.getElementById('tourPrev').addEventListener('click', prevTourStep);
    document.getElementById('tourNext').addEventListener('click', nextTourStep);
    document.getElementById('tourSkip').addEventListener('click', endTour);
    
    // Modal controls
    document.getElementById('modalClose').addEventListener('click', closeModal);
    document.getElementById('scenarioClose').addEventListener('click', closeScenarioModal);
    document.getElementById('simulatorClose').addEventListener('click', closeSimulatorModal);
    document.getElementById('timelineClose').addEventListener('click', closeTimelineModal);
    
    // Modal tabs
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => switchTab(btn.dataset.tab));
    });
    
    // Category filter
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => filterByCategory(btn.dataset.category));
    });
    
    // Action buttons
    document.getElementById('showAllConnections').addEventListener('click', toggleAllConnections);
    document.getElementById('resetView').addEventListener('click', resetView);
    
    // Click outside modals
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closeModal();
    });
    scenarioOverlay.addEventListener('click', (e) => {
        if (e.target === scenarioOverlay) closeScenarioModal();
    });
    simulatorOverlay.addEventListener('click', (e) => {
        if (e.target === simulatorOverlay) closeSimulatorModal();
    });
    timelineOverlay.addEventListener('click', (e) => {
        if (e.target === timelineOverlay) closeTimelineModal();
    });
}

// ==================== TOUR FUNCTIONS ====================
function startTour() {
    isTourActive = true;
    currentTourStep = 0;
    tourProgress.classList.add('active');
    tourPanel.classList.add('active');
    updateTourStep();
}

function updateTourStep() {
    const step = tourSteps[currentTourStep];
    document.getElementById('currentStep').textContent = currentTourStep + 1;
    document.getElementById('totalSteps').textContent = tourSteps.length;
    document.getElementById('tourTitle').textContent = step.title;
    document.getElementById('tourDescription').textContent = step.desc;
    
    // Update progress
    const progress = ((currentTourStep + 1) / tourSteps.length) * 100;
    document.getElementById('progressFill').style.width = `${progress}%`;
    
    // Highlight node
    document.querySelectorAll('.node').forEach(n => n.classList.remove('highlighted', 'dimmed'));
    if (step.node) {
        const targetNode = document.querySelector(`.node.${step.node}`);
        if (targetNode) {
            targetNode.classList.add('highlighted');
            document.querySelectorAll('.node').forEach(n => {
                if (!n.classList.contains('highlighted')) {
                    n.classList.add('dimmed');
                }
            });
        }
    }
    
    // Update buttons
    document.getElementById('tourPrev').style.display = currentTourStep > 0 ? 'block' : 'none';
    document.getElementById('tourNext').textContent = currentTourStep === tourSteps.length - 1 ? 'Hoàn thành' : 'Tiếp theo →';
}

function nextTourStep() {
    if (currentTourStep < tourSteps.length - 1) {
        currentTourStep++;
        updateTourStep();
    } else {
        endTour();
    }
}

function prevTourStep() {
    if (currentTourStep > 0) {
        currentTourStep--;
        updateTourStep();
    }
}

function endTour() {
    isTourActive = false;
    tourProgress.classList.remove('active');
    tourPanel.classList.remove('active');
    document.querySelectorAll('.node').forEach(n => n.classList.remove('highlighted', 'dimmed'));
}

// ==================== MODAL FUNCTIONS ====================
function openModal(nodeId) {
    const data = componentData[nodeId];
    if (!data) return;
    
    selectedNode = nodeId;
    document.getElementById('modalIcon').textContent = data.icon;
    document.getElementById('modalTitle').textContent = data.title;
    
    switchTab('simple');
    updateRelatedNodes(data.connections);
    
    modalOverlay.classList.add('active');
}

function closeModal() {
    modalOverlay.classList.remove('active');
    selectedNode = null;
}

function switchTab(tab) {
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.tab === tab);
    });
    
    if (!selectedNode) return;
    const data = componentData[selectedNode];
    
    let content = '';
    switch(tab) {
        case 'simple':
            content = data.simple;
            break;
        case 'detail':
            content = data.detail;
            break;
        case 'advanced':
            content = data.advanced;
            break;
    }
    
    document.getElementById('modalBody').innerHTML = content;
}

function updateRelatedNodes(connections) {
    const container = document.getElementById('relatedNodes');
    container.innerHTML = '<span class="related-label">Liên quan:</span>';
    
    if (!connections) return;
    
    connections.forEach(connId => {
        const connData = componentData[connId];
        if (connData) {
            const tag = document.createElement('span');
            tag.className = 'related-tag';
            tag.textContent = `${connData.icon} ${connData.title}`;
            tag.addEventListener('click', () => openModal(connId));
            container.appendChild(tag);
        }
    });
}

// ==================== SCENARIO FUNCTIONS ====================
function initScenarios() {
    const list = document.getElementById('scenarioList');
    
    // Get unique regimes
    const regimes = [...new Set(scenariosData.map(s => s.regime))];
    
    list.innerHTML = `
        <div class="scenario-filter">
            <button class="scenario-filter-btn active" data-regime="all">Tất cả</button>
            ${regimes.map(r => {
                const regimeData = regimeRoles[r];
                return regimeData ? `<button class="scenario-filter-btn" data-regime="${r}">${regimeData.icon} ${regimeData.name}</button>` : '';
            }).join('')}
        </div>
        <div class="scenario-items" id="scenarioItems"></div>
    `;
    
    renderScenarioItems('all');
    
    // Add filter event listeners
    list.querySelectorAll('.scenario-filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            list.querySelectorAll('.scenario-filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderScenarioItems(btn.dataset.regime);
        });
    });
}

function renderScenarioItems(regime) {
    const container = document.getElementById('scenarioItems');
    const filtered = regime === 'all' ? scenariosData : scenariosData.filter(s => s.regime === regime);
    
    container.innerHTML = filtered.map(scenario => {
        const regimeData = regimeRoles[scenario.regime];
        return `
            <div class="scenario-item" data-id="${scenario.id}">
                <h3>${scenario.icon} ${scenario.title} <span class="scenario-tag">${scenario.category}</span></h3>
                <p>${scenario.description}</p>
                ${regimeData ? `<div class="scenario-regime">Chế độ: ${regimeData.icon} ${regimeData.name}</div>` : ''}
            </div>
        `;
    }).join('');
    
    container.querySelectorAll('.scenario-item').forEach(item => {
        item.addEventListener('click', () => {
            const scenario = scenariosData.find(s => s.id === item.dataset.id);
            if (scenario) playScenario(scenario);
        });
    });
}

function openScenarioModal() {
    scenarioOverlay.classList.add('active');
}

function closeScenarioModal() {
    scenarioOverlay.classList.remove('active');
}

function playScenario(scenario) {
    closeScenarioModal();
    currentScenario = scenario;
    currentScenarioStep = 0;
    
    // Create playback panel if not exists
    let playback = document.getElementById('scenarioPlayback');
    if (!playback) {
        playback = document.createElement('div');
        playback.className = 'scenario-playback';
        playback.id = 'scenarioPlayback';
        document.body.appendChild(playback);
    }
    
    playback.classList.add('active');
    updateScenarioStep();
}

function updateScenarioStep() {
    if (!currentScenario) return;
    
    const playback = document.getElementById('scenarioPlayback');
    const step = currentScenario.steps[currentScenarioStep];
    const totalSteps = currentScenario.steps.length;
    
    playback.innerHTML = `
        <div class="scenario-step">
            <div class="step-actors">
                <div class="step-actor">
                    <span class="step-actor-icon">${step.actor.icon}</span>
                    <span class="step-actor-name">${step.actor.name}</span>
                </div>
                <span class="step-action">${step.action}</span>
                <span class="step-arrow">→</span>
                <div class="step-actor">
                    <span class="step-actor-icon">${step.target.icon}</span>
                    <span class="step-actor-name">${step.target.name}</span>
                </div>
            </div>
            <div class="step-narration">
                ${step.narration}
                <div class="step-effect">⚡ Hệ quả: ${step.effect}</div>
            </div>
            <div class="scenario-controls">
                <span class="step-counter">${currentScenarioStep + 1}/${totalSteps}</span>
                <button class="prev-btn" ${currentScenarioStep === 0 ? 'disabled' : ''}>← Trước</button>
                <button class="next-btn">${currentScenarioStep === totalSteps - 1 ? 'Hoàn thành' : 'Tiếp →'}</button>
                <button class="stop-btn">✕ Dừng</button>
            </div>
        </div>
    `;
    
    // Add event listeners
    playback.querySelector('.prev-btn').addEventListener('click', prevScenarioStep);
    playback.querySelector('.next-btn').addEventListener('click', nextScenarioStep);
    playback.querySelector('.stop-btn').addEventListener('click', stopScenario);
    
    // Update narration display
    storyNarration.textContent = step.narration;
    storyNarration.classList.add('active');
}

function prevScenarioStep() {
    if (currentScenarioStep > 0) {
        currentScenarioStep--;
        updateScenarioStep();
    }
}

function nextScenarioStep() {
    if (currentScenarioStep < currentScenario.steps.length - 1) {
        currentScenarioStep++;
        updateScenarioStep();
    } else {
        stopScenario();
    }
}

function stopScenario() {
    currentScenario = null;
    currentScenarioStep = 0;
    storyNarration.classList.remove('active');
    
    const playback = document.getElementById('scenarioPlayback');
    if (playback) {
        playback.classList.remove('active');
    }
    
    document.querySelectorAll('.node').forEach(n => n.classList.remove('highlighted', 'dimmed'));
}

function playNextScenarioStep() {
    // This function is no longer used - kept for compatibility
    if (!currentScenario || currentScenarioStep >= currentScenario.steps.length) {
        stopScenario();
        return;
    }
    
    updateScenarioStep();
    currentScenarioStep++;
    setTimeout(playNextScenarioStep, 4000);
}

// ==================== SIMULATOR FUNCTIONS ====================
function initSimulator() {
    const body = document.getElementById('simulatorBody');
    body.innerHTML = `
        <div class="simulator-section">
            <h3>${simulatorConfig.title}</h3>
            <p>${simulatorConfig.description}</p>
        </div>
        <div class="simulator-section">
            ${simulatorConfig.factors.map(f => `
                <div style="margin-bottom: 1rem;">
                    <label>${f.name}</label>
                    <input type="range" class="power-slider" id="slider-${f.id}" min="0" max="100" value="${f.value}" data-factor="${f.id}">
                    <div class="power-bar">
                        <div class="power-fill ${f.id}" id="bar-${f.id}" style="width: ${f.value}%; background: ${f.color};"></div>
                    </div>
                </div>
            `).join('')}
        </div>
        <div class="simulator-section">
            <h3>Kết quả phân tích:</h3>
            <div id="simulatorResult" class="example-box">
                Điều chỉnh các thanh trượt để xem phân tích.
            </div>
        </div>
    `;
    
    // Add slider event listeners
    document.querySelectorAll('.power-slider').forEach(slider => {
        slider.addEventListener('input', updateSimulator);
    });
}

function updateSimulator() {
    const values = {};
    simulatorConfig.factors.forEach(f => {
        const slider = document.getElementById(`slider-${f.id}`);
        values[f.id] = parseInt(slider.value);
        document.getElementById(`bar-${f.id}`).style.width = `${values[f.id]}%`;
    });
    
    // Analyze
    let result = '';
    if (values.ruler > 80 && values.people < 20) {
        result = '⚠️ <strong>Nguy cơ bạo chúa!</strong> Quyền lực tập trung quá mức, nhân dân bất mãn có thể dẫn đến cách mạng.';
    } else if (values.people > 60 && values.ruler < 30) {
        result = '🗳️ <strong>Dân chủ mạnh!</strong> Nhân dân có tiếng nói, nhưng cần lãnh đạo hiệu quả.';
    } else if (values.military > 70) {
        result = '⚔️ <strong>Nguy cơ đảo chính!</strong> Quân đội quá mạnh có thể lật đổ chính quyền.';
    } else if (values.nobles > 60 && values.ruler < 40) {
        result = '🏰 <strong>Phong kiến hóa!</strong> Quý tộc lấn át vua, quyền lực phân tán.';
    } else {
        result = '⚖️ <strong>Cân bằng tương đối.</strong> Các lực lượng kiềm chế lẫn nhau.';
    }
    
    document.getElementById('simulatorResult').innerHTML = result;
}

function openSimulatorModal() {
    simulatorOverlay.classList.add('active');
    updateSimulator();
}

function closeSimulatorModal() {
    simulatorOverlay.classList.remove('active');
}

// ==================== TIMELINE FUNCTIONS ====================
function initTimeline() {
    const body = document.getElementById('timelineBody');
    body.innerHTML = `
        <div class="timeline-container">
            ${timelineData.map(item => `
                <div class="timeline-item" data-category="${item.category}">
                    <div class="timeline-date">${item.date}</div>
                    <div class="timeline-title">${item.title}</div>
                    <div class="timeline-desc">${item.desc}</div>
                </div>
            `).join('')}
        </div>
    `;
}

function openTimelineModal() {
    timelineOverlay.classList.add('active');
}

function closeTimelineModal() {
    timelineOverlay.classList.remove('active');
}

// ==================== FILTER FUNCTIONS ====================
function filterByCategory(category) {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.category === category);
    });
    
    document.querySelectorAll('.node').forEach(node => {
        if (category === 'all' || node.dataset.category === category) {
            node.classList.remove('hidden');
        } else {
            node.classList.add('hidden');
        }
    });
}

function toggleAllConnections() {
    showAllConnections = !showAllConnections;
    document.getElementById('showAllConnections').classList.toggle('active', showAllConnections);
    // TODO: Draw connections
}

function resetView() {
    document.querySelectorAll('.node').forEach(n => {
        n.classList.remove('highlighted', 'dimmed', 'hidden');
    });
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.category === 'all');
    });
    stopScenario();
    endTour();
}
