// ==================== TRADING APP - MAIN CONTROLLER ====================

// Merge all component data from modules
const allComponentData = {
    ...tradingBasicsData,
    ...assetTypesData,
    ...candlestickData,
    ...technicalAnalysisData,
    ...indicatorsData,
    ...strategiesData,
    ...riskManagementData,
    ...psychologyData
};

// Global state
let currentLevel = 'beginner';
let tourActive = false;
let currentTourStep = 0;
let selectedComponent = null;

// ==================== INITIALIZATION ====================

document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

function initApp() {
    // Show level selection on first visit
    showLevelOverlay();
    
    // Setup event listeners
    setupEventListeners();
    
    // Initialize components
    initializeComponents();
}

function setupEventListeners() {
    // Level selection
    document.querySelectorAll('.level-card').forEach(card => {
        card.addEventListener('click', function() {
            const level = this.dataset.level;
            selectLevel(level);
        });
    });

    // Header buttons
    document.getElementById('changeLevelBtn')?.addEventListener('click', showLevelOverlay);
    document.getElementById('startTourBtn')?.addEventListener('click', startTour);
    document.getElementById('scenarioBtn')?.addEventListener('click', showScenarios);
    document.getElementById('simulatorBtn')?.addEventListener('click', showSimulators);

    // Tour controls
    document.getElementById('tourPrev')?.addEventListener('click', () => navigateTour(-1));
    document.getElementById('tourNext')?.addEventListener('click', () => navigateTour(1));
    document.getElementById('tourSkip')?.addEventListener('click', endTour);

    // Info panel close
    document.getElementById('closePanel')?.addEventListener('click', closeInfoPanel);

    // Category filter
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            filterByCategory(this.dataset.category);
        });
    });

    // Component nodes
    document.querySelectorAll('.node').forEach(node => {
        node.addEventListener('click', function() {
            showComponentInfo(this.dataset.component);
        });
    });

    // Modal close buttons
    document.getElementById('closeScenario')?.addEventListener('click', () => {
        document.getElementById('scenarioModal').style.display = 'none';
    });
    
    document.getElementById('closeSimulator')?.addEventListener('click', () => {
        document.getElementById('simulatorModal').style.display = 'none';
    });

    // Simulator tabs
    document.querySelectorAll('.sim-tab').forEach(tab => {
        tab.addEventListener('click', function() {
            switchSimulator(this.dataset.simulator);
        });
    });
}

// ==================== LEVEL MANAGEMENT ====================

function showLevelOverlay() {
    document.getElementById('levelOverlay').style.display = 'flex';
}

function selectLevel(level) {
    currentLevel = level;
    document.getElementById('levelOverlay').style.display = 'none';
    
    // Update badge
    const badges = {
        'beginner': '🌱 Người Mới',
        'intermediate': '🌿 Trung Cấp',
        'advanced': '🌳 Nâng Cao'
    };
    document.getElementById('levelBadge').textContent = badges[level];
    
    // Show welcome message
    showWelcomeMessage(level);
}

function showWelcomeMessage(level) {
    const messages = {
        'beginner': 'Chào mừng! Bạn sẽ học từ cơ bản nhất. Hãy click vào từng khái niệm để tìm hiểu.',
        'intermediate': 'Bạn đã có kiến thức cơ bản. Hãy khám phá các chiến lược và phân tích kỹ thuật.',
        'advanced': 'Chào trader có kinh nghiệm! Tìm hiểu các kỹ thuật nâng cao và tâm lý trading.'
    };
    
    alert(messages[level]);
}

// ==================== COMPONENT INFO ====================

function showComponentInfo(componentId) {
    const data = allComponentData[componentId];
    if (!data) return;

    selectedComponent = componentId;
    
    // Highlight selected node
    document.querySelectorAll('.node').forEach(n => n.classList.remove('active'));
    document.querySelector(`[data-component="${componentId}"]`).classList.add('active');

    // Get content based on level
    let content = '';
    switch(currentLevel) {
        case 'beginner':
            content = data.simple || data.detail;
            break;
        case 'intermediate':
            content = data.detail || data.simple;
            break;
        case 'advanced':
            content = data.advanced || data.detail;
            break;
    }

    // Show in info panel
    const infoPanel = document.getElementById('infoPanel');
    const infoContent = document.getElementById('infoContent');
    
    infoContent.innerHTML = `
        <div class="component-header">
            <span class="component-icon">${data.icon}</span>
            <h2>${data.title}</h2>
        </div>
        <div class="component-body">
            ${content}
        </div>
        ${data.keyPoints ? `
            <div class="key-points">
                <h4>🔑 Key Points:</h4>
                <ul>
                    ${data.keyPoints.map(point => `<li>${point}</li>`).join('')}
                </ul>
            </div>
        ` : ''}
    `;
    
    infoPanel.classList.add('visible');
}

function closeInfoPanel() {
    document.getElementById('infoPanel').classList.remove('visible');
    document.querySelectorAll('.node').forEach(n => n.classList.remove('active'));
}

// ==================== TOUR MANAGEMENT ====================

function startTour() {
    tourActive = true;
    currentTourStep = 0;
    
    document.getElementById('tourProgress').style.display = 'block';
    document.getElementById('tourPanel').style.display = 'block';
    
    showTourStep(0);
}

function navigateTour(direction) {
    const totalSteps = document.querySelectorAll('.node[data-step]').length;
    currentTourStep += direction;
    
    if (currentTourStep < 0) currentTourStep = 0;
    if (currentTourStep >= totalSteps) {
        endTour();
        return;
    }
    
    showTourStep(currentTourStep);
}

function showTourStep(step) {
    const totalSteps = document.querySelectorAll('.node[data-step]').length;
    const nodes = Array.from(document.querySelectorAll('.node[data-step]')).sort((a, b) => {
        return parseInt(a.dataset.step) - parseInt(b.dataset.step);
    });
    
    if (step >= nodes.length) {
        endTour();
        return;
    }
    
    const node = nodes[step];
    const componentId = node.dataset.component;
    
    // Update progress
    document.getElementById('currentStep').textContent = step + 1;
    document.getElementById('totalSteps').textContent = totalSteps;
    
    const progress = ((step + 1) / totalSteps) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
    
    // Show component info
    showComponentInfo(componentId);
    
    // Highlight current node
    document.querySelectorAll('.node').forEach(n => n.classList.remove('tour-highlight'));
    node.classList.add('tour-highlight');
    
    // Scroll to node
    node.scrollIntoView({ behavior: 'smooth', block: 'center' });
    
    // Update tour panel
    const data = allComponentData[componentId];
    document.getElementById('tourTitle').textContent = data.title;
    document.getElementById('tourDescription').textContent = `Bước ${step + 1}: Tìm hiểu về ${data.title}`;
}

function endTour() {
    tourActive = false;
    document.getElementById('tourProgress').style.display = 'none';
    document.getElementById('tourPanel').style.display = 'none';
    document.querySelectorAll('.node').forEach(n => n.classList.remove('tour-highlight'));
}

// ==================== CATEGORY FILTER ====================

function filterByCategory(category) {
    // Update active button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Filter nodes
    document.querySelectorAll('.node').forEach(node => {
        if (category === 'all' || node.dataset.category === category) {
            node.style.display = 'block';
        } else {
            node.style.display = 'none';
        }
    });
}

// ==================== SCENARIOS ====================

function showScenarios() {
    const modal = document.getElementById('scenarioModal');
    const list = document.getElementById('scenarioList');
    
    // Group scenarios by category
    const grouped = {};
    tradingScenarios.forEach(scenario => {
        if (!grouped[scenario.category]) {
            grouped[scenario.category] = [];
        }
        grouped[scenario.category].push(scenario);
    });
    
    let html = '';
    Object.keys(grouped).forEach(category => {
        html += `<h3>📁 ${category}</h3>`;
        grouped[category].forEach(scenario => {
            html += `
                <div class="scenario-item" onclick="showScenarioDetail(${scenario.id})">
                    <div class="scenario-header">
                        <span class="scenario-title">${scenario.title}</span>
                        <span class="scenario-difficulty ${scenario.difficulty.toLowerCase()}">${scenario.difficulty}</span>
                    </div>
                    <p class="scenario-desc">${scenario.description}</p>
                </div>
            `;
        });
    });
    
    list.innerHTML = html;
    modal.style.display = 'flex';
}

function showScenarioDetail(id) {
    const scenario = tradingScenarios.find(s => s.id === id);
    if (!scenario) return;
    
    const list = document.getElementById('scenarioList');
    list.innerHTML = `
        <div class="scenario-detail">
            <button class="back-btn" onclick="showScenarios()">← Back to List</button>
            <h2>${scenario.title}</h2>
            <div class="scenario-badges">
                <span class="badge">${scenario.category}</span>
                <span class="badge ${scenario.difficulty.toLowerCase()}">${scenario.difficulty}</span>
            </div>
            
            <div class="scenario-section">
                <h3>📋 Tình huống:</h3>
                <p>${scenario.description}</p>
            </div>
            
            ${scenario.setup ? `
                <div class="scenario-section">
                    <h3>⚙️ Setup:</h3>
                    ${scenario.setup}
                </div>
            ` : ''}
            
            ${scenario.question ? `
                <div class="scenario-section question">
                    <h3>❓ Câu hỏi:</h3>
                    <p>${scenario.question}</p>
                </div>
            ` : ''}
            
            <details class="scenario-solution">
                <summary>💡 Xem giải pháp</summary>
                <div class="solution-content">
                    ${scenario.solution}
                </div>
            </details>
            
            ${scenario.outcome ? `
                <div class="scenario-outcome">
                    <h3>📊 Kết quả:</h3>
                    <p>${scenario.outcome}</p>
                </div>
            ` : ''}
        </div>
    `;
}

// ==================== SIMULATORS ====================

function showSimulators() {
    const modal = document.getElementById('simulatorModal');
    modal.style.display = 'flex';
    
    // Load first simulator by default
    switchSimulator('paper-trading');
}

function switchSimulator(simId) {
    // Update active tab
    document.querySelectorAll('.sim-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Load simulator content
    const simulator = tradingSimulators[simId];
    if (!simulator) return;
    
    const content = document.getElementById('simulatorContent');
    content.innerHTML = simulator.html;
}

// ==================== UTILITY FUNCTIONS ====================

function initializeComponents() {
    // Add any initialization logic for components
    console.log('Trading app initialized with', Object.keys(allComponentData).length, 'components');
}

// ==================== EXPORT FOR DEBUGGING ====================

if (typeof window !== 'undefined') {
    window.tradingApp = {
        currentLevel,
        allComponentData,
        showComponentInfo,
        startTour,
        showScenarios,
        showSimulators
    };
}

console.log('Trading app loaded successfully! 🚀');
