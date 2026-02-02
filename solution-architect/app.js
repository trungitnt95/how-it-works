// ==================== STATE ====================
let currentLevel = 'beginner';
let currentTourStep = 0;
let isTourActive = false;
let activeCategory = 'all';

// ==================== DOM ELEMENTS ====================
const levelOverlay = document.getElementById('levelOverlay');
const levelBadge = document.getElementById('levelBadge');
const tourProgress = document.getElementById('tourProgress');
const tourPanel = document.getElementById('tourPanel');
const progressFill = document.getElementById('progressFill');
const detailPanel = document.getElementById('detailPanel');
const scenarioModal = document.getElementById('scenarioModal');
const roadmapModal = document.getElementById('roadmapModal');

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
    initLevelSelection();
    initNodes();
    initFilters();
    initTour();
    initScenarios();
    initRoadmap();
    initDetailPanel();
    drawConnections();
});

// ==================== LEVEL SELECTION ====================
function initLevelSelection() {
    const levelCards = document.querySelectorAll('.level-card');
    const changeLevelBtn = document.getElementById('changeLevelBtn');
    
    levelCards.forEach(card => {
        card.addEventListener('click', () => {
            currentLevel = card.dataset.level;
            updateLevelBadge();
            levelOverlay.classList.add('hidden');
        });
    });
    
    changeLevelBtn.addEventListener('click', () => {
        levelOverlay.classList.remove('hidden');
    });
}

function updateLevelBadge() {
    const levelNames = {
        'beginner': '🌱 Người Mới',
        'intermediate': '🌿 Trung Cấp',
        'advanced': '🌳 Nâng Cao'
    };
    levelBadge.textContent = levelNames[currentLevel];
}

// ==================== NODES ====================
function initNodes() {
    const nodes = document.querySelectorAll('.node');
    
    nodes.forEach(node => {
        node.addEventListener('click', () => {
            const componentId = node.dataset.component;
            showDetailPanel(componentId);
            highlightConnections(componentId);
        });
        
        node.addEventListener('mouseenter', () => {
            highlightConnections(node.dataset.component, true);
        });
        
        node.addEventListener('mouseleave', () => {
            if (!detailPanel.classList.contains('active')) {
                resetHighlights();
            }
        });
    });
}

function highlightConnections(componentId, isHover = false) {
    const data = componentData[componentId];
    if (!data) return;
    
    const nodes = document.querySelectorAll('.node');
    const connections = data.connections || [];
    
    nodes.forEach(node => {
        const nodeId = node.dataset.component;
        if (nodeId === componentId || connections.includes(nodeId)) {
            node.classList.remove('dimmed');
            if (nodeId === componentId) {
                node.classList.add('highlighted');
            }
        } else if (!isHover) {
            node.classList.add('dimmed');
        }
    });
}

function resetHighlights() {
    const nodes = document.querySelectorAll('.node');
    nodes.forEach(node => {
        node.classList.remove('highlighted', 'dimmed');
    });
}

// ==================== FILTERS ====================
function initFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            activeCategory = btn.dataset.category;
            filterNodes(activeCategory);
        });
    });
}

function filterNodes(category) {
    const nodes = document.querySelectorAll('.node');
    
    nodes.forEach(node => {
        if (category === 'all' || node.dataset.category === category) {
            node.classList.remove('hidden');
        } else {
            node.classList.add('hidden');
        }
    });
}

// ==================== TOUR ====================
function initTour() {
    const startTourBtn = document.getElementById('startTourBtn');
    const tourPrev = document.getElementById('tourPrev');
    const tourNext = document.getElementById('tourNext');
    const tourSkip = document.getElementById('tourSkip');
    
    startTourBtn.addEventListener('click', startTour);
    tourPrev.addEventListener('click', prevTourStep);
    tourNext.addEventListener('click', nextTourStep);
    tourSkip.addEventListener('click', endTour);
    
    document.getElementById('totalSteps').textContent = tourSteps.length;
}

function startTour() {
    currentTourStep = 0;
    isTourActive = true;
    tourProgress.classList.add('active');
    tourPanel.classList.add('active');
    updateTourStep();
}

function updateTourStep() {
    const step = tourSteps[currentTourStep];
    
    document.getElementById('currentStep').textContent = currentTourStep + 1;
    document.getElementById('tourTitle').textContent = step.title;
    document.getElementById('tourDescription').textContent = step.description;
    
    const progress = ((currentTourStep + 1) / tourSteps.length) * 100;
    progressFill.style.width = `${progress}%`;
    
    // Highlight current component
    resetHighlights();
    if (step.component) {
        const node = document.querySelector(`[data-component="${step.component}"]`);
        if (node) {
            node.classList.add('highlighted');
            node.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }
    
    // Update button states
    document.getElementById('tourPrev').disabled = currentTourStep === 0;
    document.getElementById('tourNext').textContent = 
        currentTourStep === tourSteps.length - 1 ? 'Hoàn thành ✓' : 'Tiếp theo →';
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
    resetHighlights();
}

// ==================== DETAIL PANEL ====================
function initDetailPanel() {
    const closeBtn = document.getElementById('closeDetail');
    const tabBtns = document.querySelectorAll('.tab-btn');
    
    closeBtn.addEventListener('click', () => {
        detailPanel.classList.remove('active');
        resetHighlights();
    });
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const activeComponent = detailPanel.dataset.component;
            const tabType = btn.dataset.tab;
            updateDetailContent(activeComponent, tabType);
        });
    });
}

function showDetailPanel(componentId) {
    const data = componentData[componentId];
    if (!data) return;
    
    detailPanel.dataset.component = componentId;
    document.getElementById('detailIcon').textContent = data.icon;
    document.getElementById('detailTitle').textContent = data.title;
    
    // Reset tabs
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector('.tab-btn[data-tab="simple"]').classList.add('active');
    
    updateDetailContent(componentId, 'simple');
    updateRelatedComponents(componentId);
    
    detailPanel.classList.add('active');
}

function updateDetailContent(componentId, tabType) {
    const data = componentData[componentId];
    const content = document.getElementById('detailContent');
    
    let html = '';
    switch(tabType) {
        case 'simple':
            html = data.simple;
            break;
        case 'detail':
            html = data.detail;
            break;
        case 'advanced':
            html = data.advanced;
            break;
        case 'practice':
            html = data.practice;
            break;
    }
    
    content.innerHTML = html;
}

function updateRelatedComponents(componentId) {
    const data = componentData[componentId];
    const relatedList = document.getElementById('relatedList');
    const connections = data.connections || [];
    
    relatedList.innerHTML = connections.map(conn => {
        const connData = componentData[conn];
        return `<span class="related-tag" data-component="${conn}">${connData?.icon || '📦'} ${connData?.title || conn}</span>`;
    }).join('');
    
    // Add click handlers
    relatedList.querySelectorAll('.related-tag').forEach(tag => {
        tag.addEventListener('click', () => {
            showDetailPanel(tag.dataset.component);
            highlightConnections(tag.dataset.component);
        });
    });
}

// ==================== SCENARIOS ====================
function initScenarios() {
    const scenarioBtn = document.getElementById('scenarioBtn');
    const closeScenario = document.getElementById('closeScenario');
    const scenarioList = document.getElementById('scenarioList');
    
    scenarioBtn.addEventListener('click', () => {
        renderScenarios();
        scenarioModal.classList.add('active');
    });
    
    closeScenario.addEventListener('click', () => {
        scenarioModal.classList.remove('active');
    });
    
    scenarioModal.addEventListener('click', (e) => {
        if (e.target === scenarioModal) {
            scenarioModal.classList.remove('active');
        }
    });
}

function renderScenarios() {
    const scenarioList = document.getElementById('scenarioList');
    
    scenarioList.innerHTML = scenarios.map(scenario => `
        <div class="scenario-item" data-scenario="${scenario.id}">
            <div class="scenario-header">
                <span class="scenario-icon">${scenario.icon}</span>
                <span class="scenario-title">${scenario.title}</span>
            </div>
            <p class="scenario-desc">${scenario.description}</p>
            <div class="scenario-tags">
                ${scenario.tags.map(tag => `<span class="scenario-tag">${tag}</span>`).join('')}
            </div>
        </div>
    `).join('');
    
    // Add click handlers
    scenarioList.querySelectorAll('.scenario-item').forEach(item => {
        item.addEventListener('click', () => {
            const scenarioId = parseInt(item.dataset.scenario);
            const scenario = scenarios.find(s => s.id === scenarioId);
            if (scenario) {
                highlightScenarioComponents(scenario.components);
                scenarioModal.classList.remove('active');
            }
        });
    });
}

function highlightScenarioComponents(components) {
    const nodes = document.querySelectorAll('.node');
    
    nodes.forEach(node => {
        if (components.includes(node.dataset.component)) {
            node.classList.remove('dimmed');
            node.classList.add('highlighted');
        } else {
            node.classList.add('dimmed');
        }
    });
    
    // Show first component detail
    if (components.length > 0) {
        showDetailPanel(components[0]);
    }
}

// ==================== ROADMAP ====================
function initRoadmap() {
    const roadmapBtn = document.getElementById('roadmapBtn');
    const closeRoadmap = document.getElementById('closeRoadmap');
    
    roadmapBtn.addEventListener('click', () => {
        roadmapModal.classList.add('active');
    });
    
    closeRoadmap.addEventListener('click', () => {
        roadmapModal.classList.remove('active');
    });
    
    roadmapModal.addEventListener('click', (e) => {
        if (e.target === roadmapModal) {
            roadmapModal.classList.remove('active');
        }
    });
}

// ==================== CONNECTIONS SVG ====================
function drawConnections() {
    const svg = document.getElementById('connectionSvg');
    const container = document.getElementById('diagramContainer');
    
    svg.innerHTML = '';
    
    Object.keys(componentData).forEach(componentId => {
        const data = componentData[componentId];
        const sourceNode = document.querySelector(`[data-component="${componentId}"]`);
        
        if (!sourceNode || !data.connections) return;
        
        data.connections.forEach(targetId => {
            const targetNode = document.querySelector(`[data-component="${targetId}"]`);
            if (!targetNode) return;
            
            const sourceRect = sourceNode.getBoundingClientRect();
            const targetRect = targetNode.getBoundingClientRect();
            const containerRect = container.getBoundingClientRect();
            
            const x1 = sourceRect.left - containerRect.left + sourceRect.width / 2;
            const y1 = sourceRect.top - containerRect.top + sourceRect.height / 2;
            const x2 = targetRect.left - containerRect.left + targetRect.width / 2;
            const y2 = targetRect.top - containerRect.top + targetRect.height / 2;
            
            const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            line.setAttribute('x1', x1);
            line.setAttribute('y1', y1);
            line.setAttribute('x2', x2);
            line.setAttribute('y2', y2);
            line.classList.add('connection-line');
            line.dataset.source = componentId;
            line.dataset.target = targetId;
            
            svg.appendChild(line);
        });
    });
}

// Redraw connections on window resize
window.addEventListener('resize', () => {
    setTimeout(drawConnections, 100);
});
