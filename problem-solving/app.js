// Problem Solving App - Main Controller
const state = {
    level: null,
    category: 'all',
    selectedNode: null,
    currentTab: 'simple',
    tourActive: false,
    tourStep: 0
};

// Combine all data
function getAllData() {
    return { ...frameworksData, ...techniquesData, ...mentalModelsData, ...pitfallsData };
}

function getVisibleNodes() {
    const allData = getAllData();
    const levels = { beginner: 1, intermediate: 2, advanced: 3 };
    const userLevel = levels[state.level] || 3;
    
    return Object.entries(allData).filter(([id, node]) => {
        const nodeLevel = levels[node.level] || 1;
        const levelMatch = nodeLevel <= userLevel;
        const catMatch = state.category === 'all' || node.category === state.category;
        return levelMatch && catMatch;
    });
}

// Render
function renderNodes() {
    const grid = document.getElementById('nodesGrid');
    const nodes = getVisibleNodes();
    
    grid.innerHTML = nodes.map(([id, node]) => `
        <div class="node ${node.level} ${state.selectedNode === id ? 'selected' : ''}" 
             data-component="${id}" data-category="${node.category}">
            <span class="node-icon">${node.icon}</span>
            <span class="node-title">${node.title}</span>
            <span class="node-level">${node.level}</span>
        </div>
    `).join('');
    
    grid.querySelectorAll('.node').forEach(n => {
        n.addEventListener('click', () => selectNode(n.dataset.component));
    });
}

function selectNode(id) {
    state.selectedNode = id;
    const node = getAllData()[id];
    if (!node) return;
    
    document.getElementById('panelTitle').textContent = `${node.icon} ${node.title}`;
    updatePanelContent();
    renderNodes();
    document.getElementById('infoPanel').classList.add('active');
}

function updatePanelContent() {
    const node = getAllData()[state.selectedNode];
    if (!node) return;
    document.getElementById('panelContent').innerHTML = node[state.currentTab] || node.simple;
}

function renderTips() {
    document.getElementById('tipsScroll').innerHTML = quickTips
        .map(t => `<div class="tip-item"><span>${t.icon}</span><span>${t.text}</span></div>`)
        .join('');
}

function renderChecklist() {
    document.getElementById('checklistItems').innerHTML = problemSolvingChecklist
        .map((item, i) => `
            <label class="checklist-item">
                <input type="checkbox" id="check-${i}">
                <span>${item}</span>
            </label>
        `).join('');
}

// Level
function setLevel(level) {
    state.level = level;
    localStorage.setItem('ps-level', level);
    document.getElementById('levelOverlay').classList.add('hidden');
    document.getElementById('currentLevel').textContent = 
        { beginner: '🌱 Beginner', intermediate: '🌿 Intermediate', advanced: '🌳 Advanced' }[level];
    renderNodes();
}

// Category
function setCategory(cat) {
    state.category = cat;
    document.querySelectorAll('.cat-btn').forEach(b => b.classList.toggle('active', b.dataset.category === cat));
    renderNodes();
}

// Tour
function startTour() {
    state.tourActive = true;
    state.tourStep = 0;
    document.getElementById('tourProgress').classList.remove('hidden');
    updateTour();
}

function updateTour() {
    const steps = tourSteps[state.level] || tourSteps.beginner;
    const step = steps[state.tourStep];
    document.getElementById('tourStep').textContent = `Bước ${state.tourStep + 1}/${steps.length}`;
    document.getElementById('tourTitle').textContent = step.title;
    document.getElementById('tourPrev').disabled = state.tourStep === 0;
    
    document.querySelectorAll('.node').forEach(n => n.classList.remove('highlight'));
    if (step.target) {
        const el = document.querySelector(step.target);
        if (el) { el.classList.add('highlight'); el.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
    }
}

function endTour() {
    state.tourActive = false;
    document.getElementById('tourProgress').classList.add('hidden');
    document.querySelectorAll('.node').forEach(n => n.classList.remove('highlight'));
}

// Init
function init() {
    const saved = localStorage.getItem('ps-level');
    if (saved) setLevel(saved);
    
    renderTips();
    renderChecklist();
    
    // Level buttons
    document.querySelectorAll('.level-btn').forEach(b => 
        b.addEventListener('click', () => setLevel(b.dataset.level)));
    document.getElementById('changeLevel').addEventListener('click', () => {
        document.getElementById('levelOverlay').classList.remove('hidden');
    });
    
    // Category buttons
    document.querySelectorAll('.cat-btn').forEach(b => 
        b.addEventListener('click', () => setCategory(b.dataset.category)));
    
    // Panel tabs
    document.querySelectorAll('.tab-btn').forEach(b => 
        b.addEventListener('click', () => {
            state.currentTab = b.dataset.tab;
            document.querySelectorAll('.tab-btn').forEach(t => t.classList.remove('active'));
            b.classList.add('active');
            updatePanelContent();
        }));
    
    // Close panel
    document.getElementById('closePanel').addEventListener('click', () => {
        document.getElementById('infoPanel').classList.remove('active');
        state.selectedNode = null;
        renderNodes();
    });
    
    // Tour
    document.getElementById('startTour').addEventListener('click', startTour);
    document.getElementById('tourEnd').addEventListener('click', endTour);
    document.getElementById('tourPrev').addEventListener('click', () => {
        if (state.tourStep > 0) { state.tourStep--; updateTour(); }
    });
    document.getElementById('tourNext').addEventListener('click', () => {
        const steps = tourSteps[state.level] || tourSteps.beginner;
        if (state.tourStep < steps.length - 1) { state.tourStep++; updateTour(); }
        else endTour();
    });
    
    // Checklist
    document.getElementById('showChecklist').addEventListener('click', () => 
        document.getElementById('checklistModal').classList.remove('hidden'));
    document.getElementById('closeChecklist').addEventListener('click', () => 
        document.getElementById('checklistModal').classList.add('hidden'));
}

document.addEventListener('DOMContentLoaded', init);
