// ==================== STATE ====================
let currentLevel = 'beginner';
let currentScenario = null;
let currentScenarioStep = 0;
let currentComponentId = null;

// Multi-scenario selection state
let selectedScenarios = [];  // Array of {id, order} for multi-select
let scenarioQueue = [];      // Queue for running multiple scenarios
let currentQueueIndex = 0;   // Current position in queue
let isPlayerActive = false;  // Is the scenario player running?
let isPaused = false;        // Is the player paused?
let playMode = 'sequential'; // 'sequential' or 'parallel'
let parallelStep = 0;        // Current step in parallel mode
let parallelMaxSteps = 0;    // Max steps across all parallel scenarios

// Get current country data
function getCountryData() {
    return countryData[selectedCountry];
}

// ==================== DOM ELEMENTS ====================
const levelOverlay = document.getElementById('levelOverlay');
const levelBadge = document.getElementById('levelBadge');
const modal = document.getElementById('modal');
const scenarioModal = document.getElementById('scenarioModal');
const simulatorModal = document.getElementById('simulatorModal');
const storyNarration = document.getElementById('storyNarration');
const nodes = document.querySelectorAll('.node');

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
    const savedLevel = localStorage.getItem('moneyFlowLevel');
    if (savedLevel) {
        currentLevel = savedLevel;
        levelOverlay.classList.add('hidden');
        updateLevelBadge();
    }

    setupEventListeners();
    renderScenarios();
    renderSimulators();
});

function setupEventListeners() {
    // Level selection
    document.querySelectorAll('.level-card').forEach(card => {
        card.addEventListener('click', () => {
            currentLevel = card.dataset.level;
            localStorage.setItem('moneyFlowLevel', currentLevel);
            levelOverlay.classList.add('hidden');
            updateLevelBadge();
        });
    });

    // Header buttons
    document.getElementById('changeLevelBtn').addEventListener('click', () => levelOverlay.classList.remove('hidden'));
    document.getElementById('scenarioBtn').addEventListener('click', () => scenarioModal.classList.add('active'));
    document.getElementById('simulatorBtn').addEventListener('click', () => simulatorModal.classList.add('active'));

    // Category filter
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filterNodes(btn.dataset.category);
        });
    });

    // Nodes click
    nodes.forEach(node => {
        node.addEventListener('click', () => showComponentModal(node.dataset.component));
    });

    // Close modals
    document.getElementById('closeModal').addEventListener('click', closeModal);
    document.getElementById('closeScenario').addEventListener('click', () => scenarioModal.classList.remove('active'));
    document.getElementById('closeSimulator').addEventListener('click', () => simulatorModal.classList.remove('active'));

    // Modal overlay click
    [modal, scenarioModal, simulatorModal].forEach(m => {
        m.addEventListener('click', (e) => { if (e.target === m) m.classList.remove('active'); });
    });

    // Modal tabs
    document.querySelectorAll('.level-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.level-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            tab.classList.add('active');
            document.querySelector(`[data-content="${tab.dataset.tab}"]`).classList.add('active');
        });
    });

    // Modal navigation
    document.getElementById('modalPrev').addEventListener('click', showPrevComponent);
    document.getElementById('modalNext').addEventListener('click', showNextComponent);

    // Scenario category filter
    document.querySelectorAll('.scenario-cat-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.scenario-cat-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filterScenarios(btn.dataset.cat);
        });
    });

    // Keyboard
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
            scenarioModal.classList.remove('active');
            simulatorModal.classList.remove('active');
        }
    });

    // Simulator dropdown (event delegation because dropdown is rendered dynamically)
    const simulatorTabs = document.getElementById('simulatorTabs');
    if (simulatorTabs) {
        simulatorTabs.addEventListener('change', (e) => {
            if (e.target.id === 'simulatorSelect') {
                activateSimulator(e.target.value);
            }
        });
    }
    
    // Country selector
    const countrySelect = document.getElementById('countrySelect');
    if (countrySelect) {
        countrySelect.addEventListener('change', handleCountryChange);
    }
    
    // Multi-scenario selection buttons
    const runSelectedBtn = document.getElementById('runSelectedBtn');
    if (runSelectedBtn) {
        runSelectedBtn.addEventListener('click', runSelectedScenarios);
    }
    
    const clearSelectionBtn = document.getElementById('clearSelectionBtn');
    if (clearSelectionBtn) {
        clearSelectionBtn.addEventListener('click', clearScenarioSelection);
    }
    
    // Scenario player controls
    const closePlayerBtn = document.getElementById('closePlayer');
    if (closePlayerBtn) {
        closePlayerBtn.addEventListener('click', closeScenarioPlayer);
    }
    
    const pausePlayerBtn = document.getElementById('playerPause');
    if (pausePlayerBtn) {
        pausePlayerBtn.addEventListener('click', togglePlayerPause);
    }
    
    const prevStepBtn = document.getElementById('playerPrev');
    if (prevStepBtn) {
        prevStepBtn.addEventListener('click', prevPlayerStep);
    }
    
    const nextStepBtn = document.getElementById('playerNext');
    if (nextStepBtn) {
        nextStepBtn.addEventListener('click', nextPlayerStep);
    }
    
    const skipBtn = document.getElementById('playerSkip');
    if (skipBtn) {
        skipBtn.addEventListener('click', () => {
            currentQueueIndex++;
            playCurrentQueueScenario();
        });
    }
    
    // Close player overlay on click
    const playerOverlay = document.getElementById('scenarioPlayerModal');
    if (playerOverlay) {
        playerOverlay.addEventListener('click', (e) => {
            if (e.target === playerOverlay) closeScenarioPlayer();
        });
    }
    
    // Mode toggle buttons
    const modeSequentialBtn = document.getElementById('modeSequential');
    const modeParallelBtn = document.getElementById('modeParallel');
    
    if (modeSequentialBtn) {
        modeSequentialBtn.addEventListener('click', () => setPlayMode('sequential'));
    }
    if (modeParallelBtn) {
        modeParallelBtn.addEventListener('click', () => setPlayMode('parallel'));
    }
    
    // Parallel player controls
    const closeParallelPlayerBtn = document.getElementById('closeParallelPlayer');
    if (closeParallelPlayerBtn) {
        closeParallelPlayerBtn.addEventListener('click', closeParallelPlayer);
    }
    
    const parallelPauseBtn = document.getElementById('parallelPause');
    if (parallelPauseBtn) {
        parallelPauseBtn.addEventListener('click', toggleParallelPause);
    }
    
    const parallelPrevBtn = document.getElementById('parallelPrev');
    if (parallelPrevBtn) {
        parallelPrevBtn.addEventListener('click', prevParallelStep);
    }
    
    const parallelNextBtn = document.getElementById('parallelNext');
    if (parallelNextBtn) {
        parallelNextBtn.addEventListener('click', nextParallelStep);
    }
    
    // Close parallel player overlay on click
    const parallelPlayerOverlay = document.getElementById('parallelPlayerModal');
    if (parallelPlayerOverlay) {
        parallelPlayerOverlay.addEventListener('click', (e) => {
            if (e.target === parallelPlayerOverlay) closeParallelPlayer();
        });
    }
}

// ==================== SIMULATOR REGISTRY ====================
const SIMULATORS = [
    { id: 'money-multiplier', label: '💰 Nhân tiền' },
    { id: 'compound-interest', label: '📈 Lãi kép' },
    { id: 'loan-calculator', label: '🏠 Tính vay' },
    { id: 'inflation', label: '📊 Lạm phát' },

    { id: 'real-return', label: '🧾 Lãi thực' },
    { id: 'savings-goal', label: '🎯 Mục tiêu' },
    { id: 'emergency-fund', label: '🛟 Quỹ dự phòng' },
    { id: 'credit-card', label: '💳 Trả nợ thẻ' },
    { id: 'dca', label: '🧺 DCA' },
    { id: 'bond-price', label: '📜 Giá trái phiếu' },
    { id: 'break-even', label: '⚖️ Hòa vốn' },
    { id: 'salary-real', label: '🧑‍💼 Lương thực' },
    { id: 'budget-50-30-20', label: '🧾 50/30/20' },
    { id: 'net-worth', label: '🧮 Tài sản ròng' },
    { id: 'fx-exchange', label: '💱 Đổi tiền' },
    { id: 'kelly', label: '🎲 Kelly' }
];

function activateSimulator(simId) {
    document.querySelectorAll('.sim-tab').forEach(t => t.classList.toggle('active', t.dataset.sim === simId));
    document.querySelectorAll('.simulator-panel').forEach(p => p.classList.toggle('active', p.dataset.panel === simId));
}

// ==================== RENDER FUNCTIONS ====================

function renderScenarios() {
    const container = document.getElementById('scenarioList');
    container.innerHTML = '';
    const c = getCountryData();
    
    Object.entries(scenarios).forEach(([id, scenario]) => {
        const card = document.createElement('div');
        card.className = 'scenario-card';
        const selected = selectedScenarios.find(s => s.id === id);
        if (selected) {
            card.classList.add('selected');
        }
        card.dataset.scenario = id;
        card.dataset.cat = scenario.cat;
        
        const steps = scenario.getSteps ? scenario.getSteps(c) : scenario.steps;
        const hasSimulation = scenario.hasSimulation || (steps && steps.some(s => s.inputs || s.outputs));
        
        card.innerHTML = `
            <div class="scenario-checkbox ${selected ? 'checked' : ''}">
                ${selected ? `<span class="scenario-order">${selected.order}</span>` : ''}
            </div>
            <div class="scenario-icon">${scenario.icon}</div>
            <h3>${scenario.title}</h3>
            <p>${scenario.desc}</p>
            ${hasSimulation ? '<span class="sim-badge">📊 Có Mô Phỏng</span>' : ''}
        `;
        
        // Click to toggle selection
        card.addEventListener('click', (e) => {
            if (e.ctrlKey || e.metaKey || e.shiftKey) {
                toggleScenarioSelection(id);
            } else {
                // Single click starts scenario immediately
                startScenario(id);
            }
        });
        
        // Checkbox click for multi-select
        card.querySelector('.scenario-checkbox').addEventListener('click', (e) => {
            e.stopPropagation();
            toggleScenarioSelection(id);
        });
        
        container.appendChild(card);
    });
    
    updateSelectionBar();
}

function toggleScenarioSelection(id) {
    const index = selectedScenarios.findIndex(s => s.id === id);
    if (index >= 0) {
        selectedScenarios.splice(index, 1);
        // Reorder remaining selections
        selectedScenarios.forEach((s, i) => s.order = i + 1);
    } else {
        selectedScenarios.push({ id, order: selectedScenarios.length + 1 });
    }
    renderScenarios();
}

function updateSelectionBar() {
    const bar = document.querySelector('.scenario-selection-bar');
    const selectedCountEl = document.getElementById('selectedCount');
    const runBtn = document.getElementById('runSelectedBtn');
    
    if (selectedScenarios.length > 0) {
        if (bar) bar.classList.add('visible');
        if (selectedCountEl) selectedCountEl.textContent = `${selectedScenarios.length} kịch bản được chọn`;
        if (runBtn) runBtn.disabled = false;
    } else {
        if (bar) bar.classList.remove('visible');
        if (selectedCountEl) selectedCountEl.textContent = '0 kịch bản được chọn';
        if (runBtn) runBtn.disabled = true;
    }
}

function clearScenarioSelection() {
    selectedScenarios = [];
    renderScenarios();
}

function handleCountryChange() {
    const select = document.getElementById('countrySelect');
    if (select) {
        selectedCountry = select.value;
        // Re-render scenarios with new country data
        if (currentScenario) {
            const c = getCountryData();
            const scenario = scenarios[currentScenario];
            if (scenario.getSteps) {
                // Update steps with new country
            }
        }
        renderScenarios();
    }
}

function renderSimulators() {
    const tabsContainer = document.getElementById('simulatorTabs');
    const container = document.getElementById('simulatorPanels');

    if (tabsContainer) {
        tabsContainer.innerHTML = `
            <label for="simulatorSelect" class="simulator-label">Chọn công cụ:</label>
            <select id="simulatorSelect" class="simulator-select">
                ${SIMULATORS.map((s, idx) => (
                    `<option value="${s.id}" ${idx === 0 ? 'selected' : ''}>${s.label}</option>`
                )).join('')}
            </select>
        `;
    }

    container.innerHTML = `
        <div class="simulator-panel active" data-panel="money-multiplier">
            <p class="simulator-intro">Xem cách ngân hàng "tạo ra" tiền từ tiền gửi của bạn</p>
            <div class="simulator-inputs">
                <div class="input-group">
                    <label>💵 Số tiền gửi ban đầu:</label>
                    <input type="number" id="depositAmount" value="100000000">
                    <span>VND</span>
                </div>
                <div class="input-group">
                    <label>📊 Tỷ lệ dự trữ bắt buộc:</label>
                    <input type="range" id="reserveRatio" value="10" min="1" max="50">
                    <span id="reserveValue">10%</span>
                </div>
                <button class="simulate-btn" onclick="runMoneyMultiplier()">🚀 Mô phỏng</button>
            </div>
            <div class="simulator-result" id="multiplierResult"></div>
        </div>
        
        <div class="simulator-panel" data-panel="compound-interest">
            <p class="simulator-intro">Sức mạnh của lãi kép theo thời gian</p>
            <div class="simulator-inputs">
                <div class="input-group">
                    <label>💵 Số tiền ban đầu:</label>
                    <input type="number" id="principalAmount" value="100000000">
                    <span>VND</span>
                </div>
                <div class="input-group">
                    <label>💰 Đóng thêm hàng tháng:</label>
                    <input type="number" id="monthlyAdd" value="5000000">
                    <span>VND</span>
                </div>
                <div class="input-group">
                    <label>📈 Lãi suất/năm:</label>
                    <input type="range" id="interestRate" value="8" min="1" max="20">
                    <span id="interestValue">8%</span>
                </div>
                <div class="input-group">
                    <label>📅 Số năm:</label>
                    <input type="range" id="investYears" value="20" min="1" max="40">
                    <span id="yearsValue">20 năm</span>
                </div>
                <button class="simulate-btn" onclick="runCompoundInterest()">🚀 Tính lãi kép</button>
            </div>
            <div class="simulator-result" id="compoundResult"></div>
        </div>
        
        <div class="simulator-panel" data-panel="loan-calculator">
            <p class="simulator-intro">Tính toán khoản vay mua nhà/xe</p>
            <div class="simulator-inputs">
                <div class="input-group">
                    <label>💵 Số tiền vay:</label>
                    <input type="number" id="loanAmount" value="2000000000">
                    <span>VND</span>
                </div>
                <div class="input-group">
                    <label>📈 Lãi suất/năm:</label>
                    <input type="range" id="loanRate" value="10" min="5" max="25">
                    <span id="loanRateValue">10%</span>
                </div>
                <div class="input-group">
                    <label>📅 Thời hạn vay:</label>
                    <input type="range" id="loanYears" value="20" min="1" max="30">
                    <span id="loanYearsValue">20 năm</span>
                </div>
                <button class="simulate-btn" onclick="runLoanCalculator()">🚀 Tính khoản vay</button>
            </div>
            <div class="simulator-result" id="loanResult"></div>
        </div>
        
        <div class="simulator-panel" data-panel="inflation">
            <p class="simulator-intro">Tiền của bạn mất giá như thế nào?</p>
            <div class="simulator-inputs">
                <div class="input-group">
                    <label>💵 Số tiền hiện tại:</label>
                    <input type="number" id="inflationAmount" value="1000000000">
                    <span>VND</span>
                </div>
                <div class="input-group">
                    <label>📈 Lạm phát/năm:</label>
                    <input type="range" id="inflationRate" value="4" min="1" max="20">
                    <span id="inflationRateValue">4%</span>
                </div>
                <div class="input-group">
                    <label>📅 Sau bao nhiêu năm:</label>
                    <input type="range" id="inflationYears" value="10" min="1" max="30">
                    <span id="inflationYearsValue">10 năm</span>
                </div>
                <button class="simulate-btn" onclick="runInflationCalculator()">🚀 Tính sức mua</button>
            </div>
            <div class="simulator-result" id="inflationResult"></div>
        </div>

        <div class="simulator-panel" data-panel="real-return">
            <p class="simulator-intro">Chuyển từ lãi danh nghĩa sang lãi thực (đã trừ lạm phát)</p>
            <div class="simulator-inputs">
                <div class="input-group">
                    <label>💵 Số tiền ban đầu:</label>
                    <input type="number" id="realPrincipal" value="100000000">
                    <span>VND</span>
                </div>
                <div class="input-group">
                    <label>📈 Lãi suất danh nghĩa/năm:</label>
                    <input type="range" id="nominalRate" value="10" min="0" max="30">
                    <span id="nominalRateValue">10%</span>
                </div>
                <div class="input-group">
                    <label>📊 Lạm phát/năm:</label>
                    <input type="range" id="realInflationRate" value="4" min="-5" max="20">
                    <span id="realInflationValue">4%</span>
                </div>
                <div class="input-group">
                    <label>📅 Số năm:</label>
                    <input type="range" id="realYears" value="10" min="1" max="40">
                    <span id="realYearsValue">10 năm</span>
                </div>
                <button class="simulate-btn" onclick="runRealReturn()">🚀 Tính lãi thực</button>
            </div>
            <div class="simulator-result" id="realReturnResult"></div>
        </div>

        <div class="simulator-panel" data-panel="savings-goal">
            <p class="simulator-intro">Bạn cần bao lâu để đạt mục tiêu tiết kiệm/đầu tư?</p>
            <div class="simulator-inputs">
                <div class="input-group">
                    <label>🎯 Mục tiêu:</label>
                    <input type="number" id="goalTarget" value="1000000000">
                    <span>VND</span>
                </div>
                <div class="input-group">
                    <label>💵 Bạn đang có:</label>
                    <input type="number" id="goalStart" value="100000000">
                    <span>VND</span>
                </div>
                <div class="input-group">
                    <label>💰 Đóng thêm hàng tháng:</label>
                    <input type="number" id="goalMonthly" value="5000000">
                    <span>VND</span>
                </div>
                <div class="input-group">
                    <label>📈 Lãi suất kỳ vọng/năm:</label>
                    <input type="range" id="goalRate" value="8" min="0" max="25">
                    <span id="goalRateValue">8%</span>
                </div>
                <button class="simulate-btn" onclick="runSavingsGoal()">🚀 Tính thời gian</button>
            </div>
            <div class="simulator-result" id="goalResult"></div>
        </div>

        <div class="simulator-panel" data-panel="emergency-fund">
            <p class="simulator-intro">Quỹ dự phòng giúp bạn “sống sót” khi thu nhập bị gián đoạn</p>
            <div class="simulator-inputs">
                <div class="input-group">
                    <label>🧾 Chi phí/tháng:</label>
                    <input type="number" id="efExpenses" value="15000000">
                    <span>VND</span>
                </div>
                <div class="input-group">
                    <label>📅 Số tháng dự phòng:</label>
                    <input type="range" id="efMonths" value="6" min="1" max="18">
                    <span id="efMonthsValue">6 tháng</span>
                </div>
                <div class="input-group">
                    <label>🏦 Bạn đang có:</label>
                    <input type="number" id="efCurrent" value="30000000">
                    <span>VND</span>
                </div>
                <button class="simulate-btn" onclick="runEmergencyFund()">🚀 Tính quỹ dự phòng</button>
            </div>
            <div class="simulator-result" id="efResult"></div>
        </div>

        <div class="simulator-panel" data-panel="credit-card">
            <p class="simulator-intro">Tính thời gian trả hết nợ thẻ tín dụng và tổng lãi</p>
            <div class="simulator-inputs">
                <div class="input-group">
                    <label>💳 Dư nợ hiện tại:</label>
                    <input type="number" id="ccBalance" value="50000000">
                    <span>VND</span>
                </div>
                <div class="input-group">
                    <label>📈 APR (%/năm):</label>
                    <input type="range" id="ccApr" value="30" min="0" max="60">
                    <span id="ccAprValue">30%</span>
                </div>
                <div class="input-group">
                    <label>💰 Trả mỗi tháng:</label>
                    <input type="number" id="ccPayment" value="3000000">
                    <span>VND</span>
                </div>
                <button class="simulate-btn" onclick="runCreditCardPayoff()">🚀 Tính trả nợ</button>
            </div>
            <div class="simulator-result" id="ccResult"></div>
        </div>

        <div class="simulator-panel" data-panel="dca">
            <p class="simulator-intro">DCA: mua đều theo tháng khi giá tăng dần (mô hình đơn giản)</p>
            <div class="simulator-inputs">
                <div class="input-group">
                    <label>💰 Đầu tư mỗi tháng:</label>
                    <input type="number" id="dcaMonthly" value="5000000">
                    <span>VND</span>
                </div>
                <div class="input-group">
                    <label>📅 Số năm:</label>
                    <input type="range" id="dcaYears" value="10" min="1" max="40">
                    <span id="dcaYearsValue">10 năm</span>
                </div>
                <div class="input-group">
                    <label>📈 Lợi nhuận kỳ vọng/năm:</label>
                    <input type="range" id="dcaReturn" value="10" min="-20" max="30">
                    <span id="dcaReturnValue">10%</span>
                </div>
                <div class="input-group">
                    <label>🏷️ Giá/đơn vị ban đầu (giả định):</label>
                    <input type="number" id="dcaStartPrice" value="100000">
                    <span>VND</span>
                </div>
                <button class="simulate-btn" onclick="runDca()">🚀 Mô phỏng DCA</button>
            </div>
            <div class="simulator-result" id="dcaResult"></div>
        </div>

        <div class="simulator-panel" data-panel="bond-price">
            <p class="simulator-intro">Giá trái phiếu = hiện giá dòng tiền coupon + mệnh giá</p>
            <div class="simulator-inputs">
                <div class="input-group">
                    <label>📜 Mệnh giá:</label>
                    <input type="number" id="bondFace" value="100000000">
                    <span>VND</span>
                </div>
                <div class="input-group">
                    <label>💵 Coupon (%/năm):</label>
                    <input type="range" id="bondCoupon" value="8" min="0" max="20">
                    <span id="bondCouponValue">8%</span>
                </div>
                <div class="input-group">
                    <label>📈 YTM (%/năm):</label>
                    <input type="range" id="bondYtm" value="10" min="0" max="25">
                    <span id="bondYtmValue">10%</span>
                </div>
                <div class="input-group">
                    <label>📅 Kỳ hạn (năm):</label>
                    <input type="range" id="bondYears" value="5" min="1" max="30">
                    <span id="bondYearsValue">5 năm</span>
                </div>
                <div class="input-group">
                    <label>🗓️ Trả coupon:</label>
                    <input type="range" id="bondFreq" value="2" min="1" max="4">
                    <span id="bondFreqValue">2 lần/năm</span>
                </div>
                <button class="simulate-btn" onclick="runBondPrice()">🚀 Tính giá</button>
            </div>
            <div class="simulator-result" id="bondResult"></div>
        </div>

        <div class="simulator-panel" data-panel="break-even">
            <p class="simulator-intro">Hòa vốn: bán bao nhiêu để bù chi phí cố định?</p>
            <div class="simulator-inputs">
                <div class="input-group">
                    <label>🏭 Chi phí cố định/tháng:</label>
                    <input type="number" id="beFixed" value="30000000">
                    <span>VND</span>
                </div>
                <div class="input-group">
                    <label>🏷️ Giá bán/đơn vị:</label>
                    <input type="number" id="bePrice" value="200000">
                    <span>VND</span>
                </div>
                <div class="input-group">
                    <label>📦 Biến phí/đơn vị:</label>
                    <input type="number" id="beVar" value="80000">
                    <span>VND</span>
                </div>
                <button class="simulate-btn" onclick="runBreakEven()">🚀 Tính hòa vốn</button>
            </div>
            <div class="simulator-result" id="beResult"></div>
        </div>

        <div class="simulator-panel" data-panel="salary-real">
            <p class="simulator-intro">Lương tăng nhưng lạm phát cũng tăng: sức mua thay đổi ra sao?</p>
            <div class="simulator-inputs">
                <div class="input-group">
                    <label>🧑‍💼 Lương hiện tại/tháng:</label>
                    <input type="number" id="salaryNow" value="25000000">
                    <span>VND</span>
                </div>
                <div class="input-group">
                    <label>📈 Tăng lương/năm:</label>
                    <input type="range" id="salaryRaise" value="8" min="-10" max="30">
                    <span id="salaryRaiseValue">8%</span>
                </div>
                <div class="input-group">
                    <label>📊 Lạm phát/năm:</label>
                    <input type="range" id="salaryInflation" value="4" min="-5" max="20">
                    <span id="salaryInflationValue">4%</span>
                </div>
                <div class="input-group">
                    <label>📅 Số năm:</label>
                    <input type="range" id="salaryYears" value="10" min="1" max="40">
                    <span id="salaryYearsValue">10 năm</span>
                </div>
                <button class="simulate-btn" onclick="runSalaryReal()">🚀 Tính sức mua</button>
            </div>
            <div class="simulator-result" id="salaryResult"></div>
        </div>

        <div class="simulator-panel" data-panel="budget-50-30-20">
            <p class="simulator-intro">Quy tắc 50/30/20: nhu cầu / mong muốn / tiết kiệm-đầu tư</p>
            <div class="simulator-inputs">
                <div class="input-group">
                    <label>💵 Thu nhập/tháng:</label>
                    <input type="number" id="budgetIncome" value="30000000">
                    <span>VND</span>
                </div>
                <button class="simulate-btn" onclick="runBudgetRule()">🚀 Chia ngân sách</button>
            </div>
            <div class="simulator-result" id="budgetResult"></div>
        </div>

        <div class="simulator-panel" data-panel="net-worth">
            <p class="simulator-intro">Tài sản ròng = tổng tài sản - tổng nợ</p>
            <div class="simulator-inputs">
                <div class="input-group">
                    <label>🏦 Tổng tài sản:</label>
                    <input type="number" id="nwAssets" value="1200000000">
                    <span>VND</span>
                </div>
                <div class="input-group">
                    <label>🏚️ Tổng nợ:</label>
                    <input type="number" id="nwLiabilities" value="600000000">
                    <span>VND</span>
                </div>
                <button class="simulate-btn" onclick="runNetWorth()">🚀 Tính tài sản ròng</button>
            </div>
            <div class="simulator-result" id="nwResult"></div>
        </div>

        <div class="simulator-panel" data-panel="fx-exchange">
            <p class="simulator-intro">Tính số tiền nhận được khi đổi tiền (có phí % và phí cố định)</p>
            <div class="simulator-inputs">
                <div class="input-group">
                    <label>💵 Số tiền đổi:</label>
                    <input type="number" id="fxAmount" value="10000000">
                    <span>VND</span>
                </div>
                <div class="input-group">
                    <label>💱 Tỷ giá (VND / 1 đơn vị):</label>
                    <input type="number" id="fxRate" value="25000">
                    <span>VND</span>
                </div>
                <div class="input-group">
                    <label>🧾 Phí (%):</label>
                    <input type="range" id="fxFeePct" value="1" min="0" max="5">
                    <span id="fxFeePctValue">1%</span>
                </div>
                <div class="input-group">
                    <label>🧾 Phí cố định (VND):</label>
                    <input type="number" id="fxFeeFixed" value="20000">
                    <span>VND</span>
                </div>
                <button class="simulate-btn" onclick="runFxExchange()">🚀 Tính đổi tiền</button>
            </div>
            <div class="simulator-result" id="fxResult"></div>
        </div>

        <div class="simulator-panel" data-panel="kelly">
            <p class="simulator-intro">Kelly giúp ước lượng % vốn đặt cược theo xác suất thắng và tỷ lệ lời/lỗ</p>
            <div class="simulator-inputs">
                <div class="input-group">
                    <label>🎯 Xác suất thắng (%):</label>
                    <input type="range" id="kellyP" value="55" min="0" max="100">
                    <span id="kellyPValue">55%</span>
                </div>
                <div class="input-group">
                    <label>⚖️ Tỷ lệ lời/lỗ (b):</label>
                    <input type="range" id="kellyB" value="2" min="0.5" max="5" step="0.1">
                    <span id="kellyBValue">2.0</span>
                </div>
                <button class="simulate-btn" onclick="runKelly()">🚀 Tính Kelly</button>
            </div>
            <div class="simulator-result" id="kellyResult"></div>
        </div>
    `;

    // Add range input listeners (safe: only binds if elements exist)
    const bindRange = (rangeId, labelId, formatter) => {
        const rangeEl = document.getElementById(rangeId);
        const labelEl = document.getElementById(labelId);
        if (!rangeEl || !labelEl) return;
        const update = () => { labelEl.textContent = formatter(rangeEl.value); };
        rangeEl.addEventListener('input', update);
        update();
    };

    bindRange('reserveRatio', 'reserveValue', v => `${v}%`);
    bindRange('interestRate', 'interestValue', v => `${v}%`);
    bindRange('investYears', 'yearsValue', v => `${v} năm`);
    bindRange('loanRate', 'loanRateValue', v => `${v}%`);
    bindRange('loanYears', 'loanYearsValue', v => `${v} năm`);
    bindRange('inflationRate', 'inflationRateValue', v => `${v}%`);
    bindRange('inflationYears', 'inflationYearsValue', v => `${v} năm`);

    bindRange('nominalRate', 'nominalRateValue', v => `${v}%`);
    bindRange('realInflationRate', 'realInflationValue', v => `${v}%`);
    bindRange('realYears', 'realYearsValue', v => `${v} năm`);
    bindRange('goalRate', 'goalRateValue', v => `${v}%`);
    bindRange('efMonths', 'efMonthsValue', v => `${v} tháng`);
    bindRange('ccApr', 'ccAprValue', v => `${v}%`);
    bindRange('dcaYears', 'dcaYearsValue', v => `${v} năm`);
    bindRange('dcaReturn', 'dcaReturnValue', v => `${v}%`);
    bindRange('bondCoupon', 'bondCouponValue', v => `${v}%`);
    bindRange('bondYtm', 'bondYtmValue', v => `${v}%`);
    bindRange('bondYears', 'bondYearsValue', v => `${v} năm`);
    bindRange('bondFreq', 'bondFreqValue', v => `${v} lần/năm`);
    bindRange('salaryRaise', 'salaryRaiseValue', v => `${v}%`);
    bindRange('salaryInflation', 'salaryInflationValue', v => `${v}%`);
    bindRange('salaryYears', 'salaryYearsValue', v => `${v} năm`);
    bindRange('fxFeePct', 'fxFeePctValue', v => `${v}%`);
    bindRange('kellyP', 'kellyPValue', v => `${v}%`);
    bindRange('kellyB', 'kellyBValue', v => `${parseFloat(v).toFixed(1)}`);

    // Ensure first simulator is active
    activateSimulator(SIMULATORS[0]?.id || 'money-multiplier');
}

// ==================== SIMULATOR FUNCTIONS ====================

function formatMoney(num) {
    return new Intl.NumberFormat('vi-VN').format(Math.round(num)) + ' VND';
}

function formatCompact(num) {
    if (!Number.isFinite(num)) return '--';
    return new Intl.NumberFormat('vi-VN', { maximumFractionDigits: 2 }).format(num);
}

function runMoneyMultiplier() {
    const deposit = parseInt(document.getElementById('depositAmount').value);
    const ratio = parseInt(document.getElementById('reserveRatio').value) / 100;
    const multiplier = 1 / ratio;
    const total = deposit * multiplier;
    
    document.getElementById('multiplierResult').innerHTML = `
        <div class="result-item"><span class="result-label">Tiền gửi ban đầu:</span><span class="result-value">${formatMoney(deposit)}</span></div>
        <div class="result-item"><span class="result-label">Tỷ lệ dự trữ:</span><span class="result-value">${ratio * 100}%</span></div>
        <div class="result-item"><span class="result-label">Hệ số nhân tiền:</span><span class="result-value">${multiplier.toFixed(1)}x</span></div>
        <div class="result-item highlight"><span class="result-label">Tổng tiền tạo ra:</span><span class="result-value">${formatMoney(total)}</span></div>
        <div class="result-explanation">
            <strong>Giải thích:</strong> Với dự trữ ${ratio * 100}%, mỗi khi gửi tiền, NH giữ ${ratio * 100}% và cho vay ${(1-ratio) * 100}%. 
            Quá trình lặp lại tạo ra ${formatMoney(total)} từ ${formatMoney(deposit)} ban đầu!
        </div>
    `;
}

function runCompoundInterest() {
    const principal = parseInt(document.getElementById('principalAmount').value);
    const monthly = parseInt(document.getElementById('monthlyAdd').value);
    const rate = parseInt(document.getElementById('interestRate').value) / 100;
    const years = parseInt(document.getElementById('investYears').value);
    
    let total = principal;
    let totalContrib = principal;
    for (let i = 0; i < years * 12; i++) {
        total = total * (1 + rate / 12) + monthly;
        totalContrib += monthly;
    }
    const interest = total - totalContrib;
    
    document.getElementById('compoundResult').innerHTML = `
        <div class="result-item"><span class="result-label">Vốn góp:</span><span class="result-value">${formatMoney(principal)}</span></div>
        <div class="result-item"><span class="result-label">Đóng thêm:</span><span class="result-value">${formatMoney(monthly)}/tháng × ${years * 12} tháng</span></div>
        <div class="result-item"><span class="result-label">Tổng đã đóng:</span><span class="result-value">${formatMoney(totalContrib)}</span></div>
        <div class="result-item"><span class="result-label">Lãi nhận được:</span><span class="result-value">${formatMoney(interest)}</span></div>
        <div class="result-item highlight"><span class="result-label">Tổng sau ${years} năm:</span><span class="result-value">${formatMoney(total)}</span></div>
        <div class="result-explanation">
            <strong>Sức mạnh lãi kép:</strong> Đóng ${formatMoney(totalContrib)}, nhận thêm ${formatMoney(interest)} tiền lãi! 
            Lãi suất ${rate * 100}%/năm kép trong ${years} năm.
        </div>
    `;
}

function runLoanCalculator() {
    const loan = parseInt(document.getElementById('loanAmount').value);
    const rate = parseInt(document.getElementById('loanRate').value) / 100 / 12;
    const months = parseInt(document.getElementById('loanYears').value) * 12;
    
    const monthlyPayment = loan * rate * Math.pow(1 + rate, months) / (Math.pow(1 + rate, months) - 1);
    const totalPayment = monthlyPayment * months;
    const totalInterest = totalPayment - loan;
    
    document.getElementById('loanResult').innerHTML = `
        <div class="result-item"><span class="result-label">Số tiền vay:</span><span class="result-value">${formatMoney(loan)}</span></div>
        <div class="result-item"><span class="result-label">Trả góp hàng tháng:</span><span class="result-value">${formatMoney(monthlyPayment)}</span></div>
        <div class="result-item"><span class="result-label">Tổng tiền lãi:</span><span class="result-value">${formatMoney(totalInterest)}</span></div>
        <div class="result-item highlight"><span class="result-label">Tổng phải trả:</span><span class="result-value">${formatMoney(totalPayment)}</span></div>
        <div class="result-explanation">
            <strong>Lưu ý:</strong> Vay ${formatMoney(loan)} nhưng phải trả tổng ${formatMoney(totalPayment)}. 
            Tiền lãi ${formatMoney(totalInterest)} = ${((totalInterest / loan) * 100).toFixed(0)}% số tiền vay!
        </div>
    `;
}

function runInflationCalculator() {
    const amount = parseInt(document.getElementById('inflationAmount').value);
    const rate = parseInt(document.getElementById('inflationRate').value) / 100;
    const years = parseInt(document.getElementById('inflationYears').value);
    
    const futureValue = amount / Math.pow(1 + rate, years);
    const lostValue = amount - futureValue;
    
    document.getElementById('inflationResult').innerHTML = `
        <div class="result-item"><span class="result-label">Số tiền hiện tại:</span><span class="result-value">${formatMoney(amount)}</span></div>
        <div class="result-item"><span class="result-label">Lạm phát:</span><span class="result-value">${rate * 100}%/năm × ${years} năm</span></div>
        <div class="result-item"><span class="result-label">Giá trị mất đi:</span><span class="result-value" style="color:#e74c3c">${formatMoney(lostValue)}</span></div>
        <div class="result-item highlight"><span class="result-label">Sức mua còn lại:</span><span class="result-value">${formatMoney(futureValue)}</span></div>
        <div class="result-explanation">
            <strong>Cảnh báo:</strong> ${formatMoney(amount)} hôm nay chỉ mua được hàng hóa tương đương ${formatMoney(futureValue)} sau ${years} năm! 
            Bạn mất ${((lostValue / amount) * 100).toFixed(0)}% sức mua nếu chỉ để tiền mặt.
        </div>
    `;
}

function runRealReturn() {
    const principal = parseFloat(document.getElementById('realPrincipal').value);
    const nominalRate = parseFloat(document.getElementById('nominalRate').value) / 100;
    const inflationRate = parseFloat(document.getElementById('realInflationRate').value) / 100;
    const years = parseInt(document.getElementById('realYears').value);

    const nominalFV = principal * Math.pow(1 + nominalRate, years);
    const realRate = (1 + nominalRate) / (1 + inflationRate) - 1;
    const realFV = principal * Math.pow(1 + realRate, years);
    const purchasingPowerFV = nominalFV / Math.pow(1 + inflationRate, years);

    document.getElementById('realReturnResult').innerHTML = `
        <div class="result-item"><span class="result-label">Vốn ban đầu:</span><span class="result-value">${formatMoney(principal)}</span></div>
        <div class="result-item"><span class="result-label">Danh nghĩa sau ${years} năm:</span><span class="result-value">${formatMoney(nominalFV)}</span></div>
        <div class="result-item"><span class="result-label">Lãi thực (xấp xỉ):</span><span class="result-value">${(realRate * 100).toFixed(2)}%/năm</span></div>
        <div class="result-item highlight"><span class="result-label">Sức mua (giá trị thực):</span><span class="result-value">${formatMoney(purchasingPowerFV)}</span></div>
        <div class="result-explanation">
            <strong>Gợi ý:</strong> Nếu lãi danh nghĩa ${ (nominalRate*100).toFixed(0)}% nhưng lạm phát ${ (inflationRate*100).toFixed(0)}% thì lãi thực chỉ còn khoảng ${(realRate*100).toFixed(2)}%.
        </div>
    `;
}

function runSavingsGoal() {
    const target = parseFloat(document.getElementById('goalTarget').value);
    const start = parseFloat(document.getElementById('goalStart').value);
    const monthly = parseFloat(document.getElementById('goalMonthly').value);
    const rate = parseFloat(document.getElementById('goalRate').value) / 100;

    let total = start;
    const monthlyRate = rate / 12;
    let months = 0;
    const maxMonths = 12 * 200;

    while (total < target && months < maxMonths) {
        total = total * (1 + monthlyRate) + monthly;
        months++;
    }

    if (months >= maxMonths) {
        document.getElementById('goalResult').innerHTML = `
            <div class="result-explanation"><strong>Không hội tụ:</strong> Với thông số hiện tại, mục tiêu quá xa (hoặc đóng thêm quá ít). Hãy tăng đóng góp/tháng hoặc kỳ vọng lãi suất.</div>
        `;
        return;
    }

    const years = Math.floor(months / 12);
    const remMonths = months % 12;
    const contributed = start + monthly * months;
    const interest = total - contributed;

    document.getElementById('goalResult').innerHTML = `
        <div class="result-item"><span class="result-label">Mục tiêu:</span><span class="result-value">${formatMoney(target)}</span></div>
        <div class="result-item"><span class="result-label">Thời gian ước tính:</span><span class="result-value">${years} năm ${remMonths} tháng</span></div>
        <div class="result-item"><span class="result-label">Tổng bạn đóng:</span><span class="result-value">${formatMoney(contributed)}</span></div>
        <div class="result-item"><span class="result-label">Lãi tích lũy:</span><span class="result-value">${formatMoney(interest)}</span></div>
        <div class="result-item highlight"><span class="result-label">Tổng đạt được:</span><span class="result-value">${formatMoney(total)}</span></div>
    `;
}

function runEmergencyFund() {
    const expenses = parseFloat(document.getElementById('efExpenses').value);
    const months = parseInt(document.getElementById('efMonths').value);
    const current = parseFloat(document.getElementById('efCurrent').value);

    const needed = expenses * months;
    const gap = needed - current;
    const gapText = gap <= 0 ? '✅ Đã đủ (hoặc dư)' : `❗ Thiếu ${formatMoney(gap)}`;

    document.getElementById('efResult').innerHTML = `
        <div class="result-item"><span class="result-label">Mức chi/tháng:</span><span class="result-value">${formatMoney(expenses)}</span></div>
        <div class="result-item"><span class="result-label">Mục tiêu dự phòng:</span><span class="result-value">${months} tháng</span></div>
        <div class="result-item highlight"><span class="result-label">Quỹ cần có:</span><span class="result-value">${formatMoney(needed)}</span></div>
        <div class="result-item"><span class="result-label">Bạn đang có:</span><span class="result-value">${formatMoney(current)}</span></div>
        <div class="result-explanation"><strong>Đánh giá:</strong> ${gapText}</div>
    `;
}

function runCreditCardPayoff() {
    const balance0 = parseFloat(document.getElementById('ccBalance').value);
    const apr = parseFloat(document.getElementById('ccApr').value) / 100;
    const payment = parseFloat(document.getElementById('ccPayment').value);

    const r = apr / 12;
    let balance = balance0;
    let months = 0;
    let totalInterest = 0;
    const maxMonths = 12 * 50;

    // Check if payment covers interest
    const firstMonthInterest = balance * r;
    if (payment <= firstMonthInterest && apr > 0) {
        document.getElementById('ccResult').innerHTML = `
            <div class="result-explanation"><strong>Cảnh báo:</strong> Mức trả ${formatMoney(payment)}/tháng không đủ để bù lãi tháng đầu ${formatMoney(firstMonthInterest)}. Dư nợ sẽ tăng dần. Hãy tăng mức trả/tháng.</div>
        `;
        return;
    }

    while (balance > 0.5 && months < maxMonths) {
        const interest = balance * r;
        totalInterest += interest;
        balance = balance + interest - payment;
        months++;
        if (balance < 0) balance = 0;
    }

    const totalPaid = balance0 + totalInterest;
    const years = Math.floor(months / 12);
    const rem = months % 12;

    document.getElementById('ccResult').innerHTML = `
        <div class="result-item"><span class="result-label">Dư nợ ban đầu:</span><span class="result-value">${formatMoney(balance0)}</span></div>
        <div class="result-item"><span class="result-label">Thời gian trả hết:</span><span class="result-value">${years} năm ${rem} tháng</span></div>
        <div class="result-item"><span class="result-label">Tổng lãi:</span><span class="result-value" style="color:#e67e22">${formatMoney(totalInterest)}</span></div>
        <div class="result-item highlight"><span class="result-label">Tổng đã trả:</span><span class="result-value">${formatMoney(totalPaid)}</span></div>
    `;
}

function runDca() {
    const monthly = parseFloat(document.getElementById('dcaMonthly').value);
    const years = parseInt(document.getElementById('dcaYears').value);
    const annualReturn = parseFloat(document.getElementById('dcaReturn').value) / 100;
    let price = parseFloat(document.getElementById('dcaStartPrice').value);

    const months = years * 12;
    const monthlyGrowth = Math.pow(1 + annualReturn, 1 / 12) - 1;
    let shares = 0;
    let contributed = 0;

    for (let i = 0; i < months; i++) {
        shares += monthly / price;
        contributed += monthly;
        price *= (1 + monthlyGrowth);
    }

    const finalPrice = price / (1 + monthlyGrowth);
    const value = shares * finalPrice;
    const gain = value - contributed;
    const gainPct = contributed > 0 ? (gain / contributed) * 100 : 0;

    document.getElementById('dcaResult').innerHTML = `
        <div class="result-item"><span class="result-label">Tổng đã đầu tư:</span><span class="result-value">${formatMoney(contributed)}</span></div>
        <div class="result-item"><span class="result-label">Số đơn vị tích lũy:</span><span class="result-value">${formatCompact(shares)}</span></div>
        <div class="result-item"><span class="result-label">Giá cuối kỳ (giả định):</span><span class="result-value">${formatMoney(finalPrice)}</span></div>
        <div class="result-item"><span class="result-label">Lãi/lỗ:</span><span class="result-value" style="color:${gain >= 0 ? '#4CAF50' : '#e74c3c'}">${formatMoney(gain)} (${gainPct.toFixed(1)}%)</span></div>
        <div class="result-item highlight"><span class="result-label">Giá trị cuối kỳ:</span><span class="result-value">${formatMoney(value)}</span></div>
        <div class="result-explanation"><strong>Lưu ý:</strong> Đây là mô hình giá tăng đều (không có biến động). DCA thực tế có lợi nhất khi giá biến động.</div>
    `;
}

function runBondPrice() {
    const face = parseFloat(document.getElementById('bondFace').value);
    const couponRate = parseFloat(document.getElementById('bondCoupon').value) / 100;
    const ytm = parseFloat(document.getElementById('bondYtm').value) / 100;
    const years = parseInt(document.getElementById('bondYears').value);
    const freq = parseInt(document.getElementById('bondFreq').value);

    const n = years * freq;
    const coupon = face * couponRate / freq;
    const r = ytm / freq;

    let price = 0;
    for (let t = 1; t <= n; t++) {
        price += coupon / Math.pow(1 + r, t);
    }
    price += face / Math.pow(1 + r, n);

    const premium = price - face;

    document.getElementById('bondResult').innerHTML = `
        <div class="result-item"><span class="result-label">Mệnh giá:</span><span class="result-value">${formatMoney(face)}</span></div>
        <div class="result-item"><span class="result-label">Coupon mỗi kỳ:</span><span class="result-value">${formatMoney(coupon)}</span></div>
        <div class="result-item"><span class="result-label">YTM:</span><span class="result-value">${(ytm * 100).toFixed(2)}%/năm</span></div>
        <div class="result-item"><span class="result-label">Premium/Discount:</span><span class="result-value" style="color:${premium >= 0 ? '#4CAF50' : '#e74c3c'}">${formatMoney(premium)}</span></div>
        <div class="result-item highlight"><span class="result-label">Giá hợp lý:</span><span class="result-value">${formatMoney(price)}</span></div>
        <div class="result-explanation"><strong>Nguyên tắc:</strong> Nếu YTM &gt; coupon → giá &lt; mệnh giá (discount). Nếu YTM &lt; coupon → giá &gt; mệnh giá (premium).</div>
    `;
}

function runBreakEven() {
    const fixed = parseFloat(document.getElementById('beFixed').value);
    const price = parseFloat(document.getElementById('bePrice').value);
    const variable = parseFloat(document.getElementById('beVar').value);

    const contribution = price - variable;
    if (contribution <= 0) {
        document.getElementById('beResult').innerHTML = `
            <div class="result-explanation"><strong>Cảnh báo:</strong> Biên lợi nhuận/đơn vị ≤ 0 (giá bán không đủ bù biến phí). Không thể hòa vốn.</div>
        `;
        return;
    }

    const units = fixed / contribution;
    const revenue = units * price;

    document.getElementById('beResult').innerHTML = `
        <div class="result-item"><span class="result-label">Biên/đơn vị:</span><span class="result-value">${formatMoney(contribution)}</span></div>
        <div class="result-item"><span class="result-label">Số lượng hòa vốn:</span><span class="result-value">${formatCompact(units)} đơn vị</span></div>
        <div class="result-item highlight"><span class="result-label">Doanh thu hòa vốn:</span><span class="result-value">${formatMoney(revenue)}</span></div>
    `;
}

function runSalaryReal() {
    const salary = parseFloat(document.getElementById('salaryNow').value);
    const raise = parseFloat(document.getElementById('salaryRaise').value) / 100;
    const inflation = parseFloat(document.getElementById('salaryInflation').value) / 100;
    const years = parseInt(document.getElementById('salaryYears').value);

    const nominal = salary * Math.pow(1 + raise, years);
    const real = nominal / Math.pow(1 + inflation, years);
    const realChangePct = (real / salary - 1) * 100;

    document.getElementById('salaryResult').innerHTML = `
        <div class="result-item"><span class="result-label">Lương hiện tại:</span><span class="result-value">${formatMoney(salary)}/tháng</span></div>
        <div class="result-item"><span class="result-label">Lương danh nghĩa sau ${years} năm:</span><span class="result-value">${formatMoney(nominal)}/tháng</span></div>
        <div class="result-item"><span class="result-label">Lương thực (sức mua):</span><span class="result-value">${formatMoney(real)}/tháng</span></div>
        <div class="result-item highlight"><span class="result-label">Thay đổi sức mua:</span><span class="result-value" style="color:${realChangePct >= 0 ? '#4CAF50' : '#e74c3c'}">${realChangePct.toFixed(1)}%</span></div>
    `;
}

function runBudgetRule() {
    const income = parseFloat(document.getElementById('budgetIncome').value);
    const needs = income * 0.5;
    const wants = income * 0.3;
    const savings = income * 0.2;

    document.getElementById('budgetResult').innerHTML = `
        <div class="result-item"><span class="result-label">Nhu cầu (50%):</span><span class="result-value">${formatMoney(needs)}</span></div>
        <div class="result-item"><span class="result-label">Mong muốn (30%):</span><span class="result-value">${formatMoney(wants)}</span></div>
        <div class="result-item highlight"><span class="result-label">Tiết kiệm/Đầu tư (20%):</span><span class="result-value">${formatMoney(savings)}</span></div>
        <div class="result-explanation"><strong>Gợi ý:</strong> Nếu nợ cao, bạn có thể tăng phần 20% và giảm 30%.</div>
    `;
}

function runNetWorth() {
    const assets = parseFloat(document.getElementById('nwAssets').value);
    const liabilities = parseFloat(document.getElementById('nwLiabilities').value);
    const net = assets - liabilities;
    const debtRatio = assets > 0 ? (liabilities / assets) * 100 : 0;

    document.getElementById('nwResult').innerHTML = `
        <div class="result-item"><span class="result-label">Tổng tài sản:</span><span class="result-value">${formatMoney(assets)}</span></div>
        <div class="result-item"><span class="result-label">Tổng nợ:</span><span class="result-value">${formatMoney(liabilities)}</span></div>
        <div class="result-item"><span class="result-label">Tỷ lệ nợ/tài sản:</span><span class="result-value">${debtRatio.toFixed(1)}%</span></div>
        <div class="result-item highlight"><span class="result-label">Tài sản ròng:</span><span class="result-value" style="color:${net >= 0 ? '#4CAF50' : '#e74c3c'}">${formatMoney(net)}</span></div>
    `;
}

function runFxExchange() {
    const amountVnd = parseFloat(document.getElementById('fxAmount').value);
    const rate = parseFloat(document.getElementById('fxRate').value);
    const feePct = parseFloat(document.getElementById('fxFeePct').value) / 100;
    const feeFixed = parseFloat(document.getElementById('fxFeeFixed').value);

    const fee = amountVnd * feePct + feeFixed;
    const netVnd = Math.max(0, amountVnd - fee);
    const received = rate > 0 ? netVnd / rate : 0;
    const effectiveRate = received > 0 ? amountVnd / received : 0;

    document.getElementById('fxResult').innerHTML = `
        <div class="result-item"><span class="result-label">Phí quy đổi:</span><span class="result-value">${formatMoney(fee)}</span></div>
        <div class="result-item"><span class="result-label">Số VND còn lại:</span><span class="result-value">${formatMoney(netVnd)}</span></div>
        <div class="result-item"><span class="result-label">Nhận được:</span><span class="result-value">${formatCompact(received)} đơn vị</span></div>
        <div class="result-item highlight"><span class="result-label">Tỷ giá hiệu dụng:</span><span class="result-value">${formatCompact(effectiveRate)} VND/đơn vị</span></div>
        <div class="result-explanation"><strong>Mẹo:</strong> So sánh tỷ giá hiệu dụng giữa các nơi đổi để biết chỗ nào thật sự rẻ.</div>
    `;
}

function runKelly() {
    const p = parseFloat(document.getElementById('kellyP').value) / 100;
    const b = parseFloat(document.getElementById('kellyB').value);
    const q = 1 - p;

    // Kelly fraction: f* = (b p - q) / b
    const raw = (b * p - q) / b;
    const f = Math.max(0, Math.min(1, raw));

    document.getElementById('kellyResult').innerHTML = `
        <div class="result-item"><span class="result-label">p (thắng):</span><span class="result-value">${(p * 100).toFixed(1)}%</span></div>
        <div class="result-item"><span class="result-label">b (lời/lỗ):</span><span class="result-value">${b.toFixed(2)}</span></div>
        <div class="result-item"><span class="result-label">Kelly thô:</span><span class="result-value">${(raw * 100).toFixed(1)}%</span></div>
        <div class="result-item highlight"><span class="result-label">Gợi ý đặt cược (clamp 0-100%):</span><span class="result-value">${(f * 100).toFixed(1)}%</span></div>
        <div class="result-explanation"><strong>Lưu ý:</strong> Kelly tối đa hóa tăng trưởng dài hạn nhưng biến động lớn. Thực tế thường dùng 1/2 Kelly hoặc 1/4 Kelly.</div>
    `;
}

// ==================== LEVEL ====================
function updateLevelBadge() {
    const badges = { beginner: '🌱 Người Mới', intermediate: '🌿 Trung Cấp', advanced: '🌳 Nâng Cao' };
    levelBadge.textContent = badges[currentLevel];
}

// ==================== FILTER ====================
function filterNodes(category) {
    nodes.forEach(node => {
        if (category === 'all' || node.dataset.category === category) {
            node.classList.remove('hidden');
        } else {
            node.classList.add('hidden');
        }
    });
}

function filterScenarios(cat) {
    document.querySelectorAll('.scenario-card').forEach(card => {
        if (cat === 'all' || card.dataset.cat === cat) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
}

// ==================== COMPONENT MODAL ====================
function escapeHtml(value) {
    return String(value ?? '')
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#39;');
}

function renderBulletList(items) {
    if (!items?.length) return '';
    return `<ul>${items.map(item => `<li>${escapeHtml(item)}</li>`).join('')}</ul>`;
}

function renderSupplementCard(componentId, level) {
    const content = componentExpandedContent?.[componentId]?.[level];
    if (!content) return '';

    const sections = (content.sections || []).map(section => `
        <div class="deep-dive-section">
            <h4>${escapeHtml(section.title)}</h4>
            ${section.intro ? `<p>${escapeHtml(section.intro)}</p>` : ''}
            ${renderBulletList(section.bullets)}
        </div>
    `).join('');

    return `
        <section class="deep-dive-card">
            ${content.intro ? `<p class="deep-dive-intro">${escapeHtml(content.intro)}</p>` : ''}
            ${sections}
            ${content.callout ? `<div class="deep-dive-callout">${escapeHtml(content.callout)}</div>` : ''}
        </section>
    `;
}

function buildTabContent(componentId, level, baseHtml) {
    return `${baseHtml}${renderSupplementCard(componentId, level)}`;
}

function renderAssetStructure(componentId, category) {
    const assetCard = document.getElementById('assetStructureCard');
    const assetLead = document.getElementById('assetStructureLead');
    const assetList = document.getElementById('assetStructureList');
    const assetInsights = document.getElementById('assetStructureInsights');
    const assetNote = document.getElementById('assetStructureNote');
    const structure = assetStructureData?.[componentId];

    if (!assetCard || !assetLead || !assetList || !assetInsights || !assetNote) return;

    if (!structure) {
        assetCard.hidden = true;
        assetLead.textContent = '';
        assetList.innerHTML = '';
        assetInsights.innerHTML = '';
        assetNote.textContent = '';
        return;
    }

    assetCard.hidden = false;
    assetCard.dataset.category = category || '';
    assetLead.textContent = structure.lead
        || 'Tỷ trọng dưới đây là mô hình minh họa để bạn hình dung giá trị, thanh khoản và rủi ro thường nằm ở đâu.';
    assetList.innerHTML = structure.items.map((item) => `
        <div class="asset-structure-item">
            <div class="asset-structure-label-row">
                <span class="asset-structure-label">${item.label}</span>
                <span class="asset-structure-share">${item.share}%</span>
            </div>
            <div class="asset-structure-bar">
                <span class="asset-structure-fill" style="width: ${item.share}%"></span>
            </div>
            ${item.detail ? `<p class="asset-structure-item-detail">${escapeHtml(item.detail)}</p>` : ''}
        </div>
    `).join('');
    assetInsights.innerHTML = structure.takeaways?.length ? `
        <div class="asset-structure-insights-title">Cách đọc nhanh</div>
        <ul class="asset-structure-takeaways">
            ${structure.takeaways.map(item => `<li>${escapeHtml(item)}</li>`).join('')}
        </ul>
    ` : '';
    assetNote.textContent = structure.note
        || 'Tỷ trọng minh họa để bạn hình dung tài sản hoặc nguồn lực chính của thành phần này, không phải báo cáo kế toán chuẩn.';
}

function showComponentModal(componentId) {
    currentComponentId = componentId;
    const data = componentData[componentId];
    if (!data) return;

    document.getElementById('modalIcon').textContent = data.icon;
    document.getElementById('modalTitle').textContent = data.title;
    
    document.querySelector('[data-content="simple"]').innerHTML = buildTabContent(componentId, 'simple', data.simple);
    document.querySelector('[data-content="detail"]').innerHTML = buildTabContent(componentId, 'detail', data.detail);
    document.querySelector('[data-content="advanced"]').innerHTML = buildTabContent(componentId, 'advanced', data.advanced);
    renderAssetStructure(componentId, data.category);

    const tabMap = { beginner: 'simple', intermediate: 'detail', advanced: 'advanced' };
    document.querySelectorAll('.level-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    document.querySelector(`[data-tab="${tabMap[currentLevel]}"]`).classList.add('active');
    document.querySelector(`[data-content="${tabMap[currentLevel]}"]`).classList.add('active');

    // Connections
    const connList = document.getElementById('connectionsList');
    connList.innerHTML = '';
    data.connections.forEach(connId => {
        const connData = componentData[connId];
        if (connData) {
            const tag = document.createElement('span');
            tag.className = 'connection-tag';
            tag.textContent = connData.icon + ' ' + connData.title;
            tag.addEventListener('click', () => showComponentModal(connId));
            connList.appendChild(tag);
        }
    });

    const keyPointsContainer = document.getElementById('keyPoints');
    keyPointsContainer.innerHTML = '';
    data.keyPoints.forEach(point => {
        const span = document.createElement('span');
        span.className = 'key-point';
        span.textContent = point;
        keyPointsContainer.appendChild(span);
    });

    modal.classList.add('active');
}

function closeModal() { modal.classList.remove('active'); }

function showPrevComponent() {
    const keys = Object.keys(componentData).sort((a, b) => componentData[a].order - componentData[b].order);
    const idx = keys.indexOf(currentComponentId);
    showComponentModal(keys[(idx - 1 + keys.length) % keys.length]);
}

function showNextComponent() {
    const keys = Object.keys(componentData).sort((a, b) => componentData[a].order - componentData[b].order);
    const idx = keys.indexOf(currentComponentId);
    showComponentModal(keys[(idx + 1) % keys.length]);
}

// ==================== SCENARIOS ====================
function startScenario(scenarioId) {
    const scenario = scenarios[scenarioId];
    const c = getCountryData();
    
    currentScenario = {
        ...scenario,
        id: scenarioId,
        steps: scenario.getSteps ? scenario.getSteps(c) : scenario.steps
    };
    currentScenarioStep = 0;
    scenarioModal.classList.remove('active');
    playScenarioStep();
}

function playScenarioStep() {
    if (!currentScenario || currentScenarioStep >= currentScenario.steps.length) {
        endScenario();
        return;
    }

    const step = currentScenario.steps[currentScenarioStep];
    storyNarration.classList.add('active');
    
    let text = step.text;
    // Show simulation data if available
    if (step.inputs || step.outputs) {
        if (step.inputs) {
            const inputStr = Object.entries(step.inputs)
                .map(([k, v]) => `${k}: ${typeof v === 'number' ? v.toLocaleString() : v}`)
                .join(', ');
            text += ` [Input: ${inputStr}]`;
        }
        if (step.outputs) {
            const outputStr = Object.entries(step.outputs)
                .map(([k, v]) => `${k}: ${typeof v === 'number' ? v.toLocaleString() : v}`)
                .join(', ');
            text += ` [Output: ${outputStr}]`;
        }
    }
    
    document.getElementById('storyText').textContent = text;

    nodes.forEach(node => {
        node.classList.remove('highlighted', 'dimmed');
        if (node.dataset.component === step.node) node.classList.add('highlighted');
        else node.classList.add('dimmed');
    });

    setTimeout(() => { currentScenarioStep++; playScenarioStep(); }, 3500);
}

function endScenario() {
    storyNarration.classList.remove('active');
    nodes.forEach(node => node.classList.remove('highlighted', 'dimmed'));
    currentScenario = null;
}

// ==================== PLAY MODE ====================
function setPlayMode(mode) {
    playMode = mode;
    
    // Update button states
    const seqBtn = document.getElementById('modeSequential');
    const parBtn = document.getElementById('modeParallel');
    
    if (seqBtn) seqBtn.classList.toggle('active', mode === 'sequential');
    if (parBtn) parBtn.classList.toggle('active', mode === 'parallel');
}

// ==================== MULTI-SCENARIO PLAYER ====================
function runSelectedScenarios() {
    if (selectedScenarios.length === 0) return;
    
    const c = getCountryData();
    
    // Initialize simulation state
    simState = createSimulationState(selectedCountry);
    
    // Track scenario status (success/failure)
    const scenarioStatus = {};
    
    scenarioQueue = selectedScenarios.map(sel => {
        const scenario = scenarios[sel.id];
        scenarioStatus[sel.id] = { status: 'running', failedStep: null, reason: '' };
        return {
            ...scenario,
            id: sel.id,
            order: sel.order,
            steps: scenario.getSteps ? scenario.getSteps(c) : scenario.steps,
            status: scenarioStatus[sel.id],
            isCrisis: scenario.isCrisis || false,
            successCondition: scenario.successCondition
        };
    });
    
    // Close scenario modal
    scenarioModal.classList.remove('active');
    
    if (playMode === 'parallel') {
        // Run in parallel mode
        runParallelScenarios();
    } else {
        // Run in sequential mode (existing behavior)
        currentQueueIndex = 0;
        isPlayerActive = true;
        isPaused = false;
        showScenarioPlayer();
        playCurrentQueueScenario();
    }
}

function showScenarioPlayer() {
    const playerOverlay = document.getElementById('scenarioPlayerModal');
    if (!playerOverlay) return;
    
    playerOverlay.classList.add('active');
    
    // Initialize simulation dashboard
    updateSimDashboard();
    updateSimStatus('success', 'Bắt đầu mô phỏng...');
    
    updatePlayerUI();
    renderQueueList();
}

function closeScenarioPlayer() {
    const playerOverlay = document.getElementById('scenarioPlayerModal');
    if (playerOverlay) {
        playerOverlay.classList.remove('active');
    }
    
    isPlayerActive = false;
    isPaused = false;
    currentQueueIndex = 0;
    currentScenarioStep = 0;
    
    storyNarration.classList.remove('active');
    nodes.forEach(node => node.classList.remove('highlighted', 'dimmed'));
}

function updatePlayerUI() {
    if (scenarioQueue.length === 0) return;
    
    const current = scenarioQueue[currentQueueIndex];
    
    // Update title
    const titleEl = document.getElementById('playerTitle');
    if (titleEl) {
        titleEl.textContent = `${current.icon} ${current.title}`;
    }
    
    // Update progress
    const progressFillEl = document.getElementById('playerProgressFill');
    if (progressFillEl) {
        const totalSteps = current.steps.length;
        const progress = (currentScenarioStep / totalSteps) * 100;
        progressFillEl.style.width = `${progress}%`;
    }
    
    // Update step info
    const stepText = document.getElementById('stepText');
    if (stepText && current.steps[currentScenarioStep]) {
        stepText.textContent = current.steps[currentScenarioStep].text;
    }
    
    // Update node icon
    const stepNodeIcon = document.getElementById('stepNodeIcon');
    if (stepNodeIcon && current.steps[currentScenarioStep]) {
        const nodeId = current.steps[currentScenarioStep].node;
        const component = componentData[nodeId];
        stepNodeIcon.textContent = component ? component.icon : '📍';
    }
    
    // Update simulation inputs/outputs
    updateSimulationDisplay();
}

function updateSimulationDisplay() {
    const current = scenarioQueue[currentQueueIndex];
    const step = current?.steps[currentScenarioStep];
    
    const inputsEl = document.getElementById('simInputs');
    const outputsEl = document.getElementById('simOutputs');
    
    if (inputsEl) {
        if (step?.inputs) {
            inputsEl.innerHTML = Object.entries(step.inputs)
                .map(([k, v]) => `<div class="sim-item"><span class="sim-label">${k}:</span> <span class="sim-value">${typeof v === 'number' ? v.toLocaleString() : v}</span></div>`)
                .join('');
            inputsEl.parentElement.style.display = 'block';
        } else {
            inputsEl.parentElement.style.display = 'none';
        }
    }
    
    if (outputsEl) {
        if (step?.outputs) {
            outputsEl.innerHTML = Object.entries(step.outputs)
                .map(([k, v]) => `<div class="sim-item"><span class="sim-label">${k}:</span> <span class="sim-value">${typeof v === 'number' ? v.toLocaleString() : v}</span></div>`)
                .join('');
            outputsEl.parentElement.style.display = 'block';
        } else {
            outputsEl.parentElement.style.display = 'none';
        }
    }
}

function renderQueueList() {
    const queueListEl = document.getElementById('queueList');
    if (!queueListEl) return;
    
    queueListEl.innerHTML = scenarioQueue.map((s, i) => `
        <div class="queue-item ${i === currentQueueIndex ? 'current' : ''} ${i < currentQueueIndex ? 'completed' : ''}">
            <span class="queue-order">${i + 1}</span>
            <span class="queue-icon">${s.icon}</span>
            <span class="queue-title">${s.title}</span>
            ${i < currentQueueIndex ? '<span class="queue-status">✓</span>' : ''}
        </div>
    `).join('');
}

function playCurrentQueueScenario() {
    if (!isPlayerActive || currentQueueIndex >= scenarioQueue.length) {
        // All scenarios complete
        finishAllScenarios();
        return;
    }
    
    currentScenarioStep = 0;
    const current = scenarioQueue[currentQueueIndex];
    
    // Mark current in queue
    renderQueueList();
    
    playQueueStep();
}

function playQueueStep() {
    if (!isPlayerActive) return;
    if (isPaused) return;
    
    const current = scenarioQueue[currentQueueIndex];
    if (!current || currentScenarioStep >= current.steps.length) {
        // Mark scenario as complete if it hasn't failed
        if (current && current.status.status === 'running') {
            current.status.status = 'success';
        }
        // Move to next scenario
        currentQueueIndex++;
        playCurrentQueueScenario();
        return;
    }
    
    const step = current.steps[currentScenarioStep];
    
    // Check step condition before executing
    if (step.condition) {
        const condResult = checkScenarioCondition(step.condition, current.id);
        if (!condResult.success) {
            // Step failed!
            current.status.status = 'failed';
            current.status.failedStep = currentScenarioStep;
            current.status.reason = condResult.reason;
            
            // Update status display
            updateSimStatus('error', `❌ ${current.title}: ${condResult.reason}`);
            
            // Skip to next scenario after showing failure
            setTimeout(() => {
                currentQueueIndex++;
                playCurrentQueueScenario();
            }, 3000);
            return;
        }
    }
    
    // Apply step effect to simulation state
    if (step.effect) {
        applyStepEffect(step.effect, current.id);
    }
    
    // Update simulation dashboard
    updateSimDashboard();
    updateSimStepDetail(step);
    
    // Update UI
    updatePlayerUI();
    
    // Also update story narration
    storyNarration.classList.add('active');
    document.getElementById('storyText').textContent = step.text;
    
    // Highlight node
    nodes.forEach(node => {
        node.classList.remove('highlighted', 'dimmed');
        if (node.dataset.component === step.node) node.classList.add('highlighted');
        else node.classList.add('dimmed');
    });
    
    // Auto-advance after delay
    setTimeout(() => {
        if (!isPaused && isPlayerActive) {
            currentScenarioStep++;
            playQueueStep();
        }
    }, 4000);
}

// Update simulation dashboard UI
function updateSimDashboard(prefix = '') {
    if (!simState) return;
    
    const updateEl = (id, value, format = 'number') => {
        const el = document.getElementById(prefix + id);
        if (!el) return;
        
        let displayValue = value;
        let changeClass = '';
        
        if (format === 'money') {
            displayValue = simState.formatMoney(Math.round(value));
        } else if (format === 'percent') {
            displayValue = value.toFixed(1) + '%';
        } else if (format === 'index') {
            displayValue = Math.round(value);
        }
        
        // Check for recent changes
        const prevValue = parseFloat(el.dataset.prevValue || value);
        if (value > prevValue * 1.01) {
            changeClass = 'up';
        } else if (value < prevValue * 0.99) {
            changeClass = 'down';
        }
        
        el.textContent = displayValue;
        el.className = 'sim-value ' + changeClass;
        el.dataset.prevValue = value;
        
        // Update indicator status
        const indicator = el.closest('.sim-indicator');
        if (indicator) {
            indicator.classList.remove('positive', 'negative', 'warning');
        }
    };
    
    updateEl('simMoneySupply', simState.moneySupply, 'money');
    updateEl('simStockIndex', simState.stockIndex, 'index');
    updateEl('simRealEstate', simState.realEstateIndex, 'index');
    updateEl('simInflation', simState.inflation, 'percent');
    updateEl('simUnemployment', simState.unemployment, 'percent');
    updateEl('simConfidence', (simState.consumerConfidence + simState.businessConfidence) / 2, 'index');
    updateEl('simNPL', simState.npl, 'percent');
    updateEl('simExchangeRate', simState.exchangeRate, 'index');
}

// Update step detail panel
function updateSimStepDetail(step) {
    const detailEl = document.getElementById('simStepDetail');
    if (!detailEl) return;
    
    if (!step.inputs && !step.outputs) {
        detailEl.classList.remove('active');
        return;
    }
    
    detailEl.classList.add('active');
    
    let html = '<div class="sim-io-grid">';
    
    // Inputs
    html += '<div class="sim-inputs-box"><h6>📥 Đầu vào</h6>';
    if (step.inputs) {
        Object.entries(step.inputs).forEach(([key, val]) => {
            const displayVal = typeof val === 'number' ? 
                (simState ? simState.formatMoney(val) : val.toLocaleString()) : val;
            html += `<div class="sim-io-item"><strong>${key}:</strong> ${displayVal}</div>`;
        });
    } else {
        html += '<div class="sim-io-item">-</div>';
    }
    html += '</div>';
    
    // Arrow
    html += '<div class="sim-io-arrow">→</div>';
    
    // Outputs
    html += '<div class="sim-outputs-box"><h6>📤 Đầu ra</h6>';
    if (step.outputs) {
        Object.entries(step.outputs).forEach(([key, val]) => {
            const displayVal = typeof val === 'number' ? 
                (simState ? simState.formatMoney(val) : val.toLocaleString()) : val;
            html += `<div class="sim-io-item"><strong>${key}:</strong> ${displayVal}</div>`;
        });
    } else {
        html += '<div class="sim-io-item">-</div>';
    }
    html += '</div>';
    
    html += '</div>';
    
    // Effects preview
    if (step.effect) {
        html += '<div style="margin-top: 0.5rem; font-size: 0.75rem; color: rgba(255,255,255,0.6);">';
        html += '📊 Tác động: ';
        const effects = Object.entries(step.effect)
            .map(([k, v]) => {
                const sign = v >= 0 ? '+' : '';
                return `${k} ${sign}${v}`;
            })
            .join(', ');
        html += effects;
        html += '</div>';
    }
    
    detailEl.innerHTML = html;
}

// Update status message
function updateSimStatus(type, message) {
    const statusEl = document.getElementById('simStatus');
    if (!statusEl) return;
    
    statusEl.className = 'sim-status ' + type;
    
    const icons = { success: '✅', warning: '⚠️', error: '❌' };
    statusEl.querySelector('.status-icon').textContent = icons[type] || '✅';
    statusEl.querySelector('.status-text').textContent = message;
}

function togglePlayerPause() {
    isPaused = !isPaused;
    const pauseBtn = document.getElementById('playerPause');
    if (pauseBtn) {
        pauseBtn.innerHTML = isPaused ? '▶️ Tiếp tục' : '⏸️ Tạm dừng';
    }
    
    if (!isPaused) {
        playQueueStep();
    }
}

function prevPlayerStep() {
    if (currentScenarioStep > 0) {
        currentScenarioStep--;
        updatePlayerUI();
        
        const current = scenarioQueue[currentQueueIndex];
        const step = current.steps[currentScenarioStep];
        document.getElementById('storyText').textContent = step.text;
        
        nodes.forEach(node => {
            node.classList.remove('highlighted', 'dimmed');
            if (node.dataset.component === step.node) node.classList.add('highlighted');
            else node.classList.add('dimmed');
        });
    }
}

function nextPlayerStep() {
    const current = scenarioQueue[currentQueueIndex];
    if (currentScenarioStep < current.steps.length - 1) {
        currentScenarioStep++;
        updatePlayerUI();
        
        const step = current.steps[currentScenarioStep];
        document.getElementById('storyText').textContent = step.text;
        
        nodes.forEach(node => {
            node.classList.remove('highlighted', 'dimmed');
            if (node.dataset.component === step.node) node.classList.add('highlighted');
            else node.classList.add('dimmed');
        });
    } else if (currentQueueIndex < scenarioQueue.length - 1) {
        currentQueueIndex++;
        playCurrentQueueScenario();
    }
}

function skipToScenario(index) {
    if (index >= 0 && index < scenarioQueue.length) {
        currentQueueIndex = index;
        playCurrentQueueScenario();
    }
}

function finishAllScenarios() {
    const titleEl = document.getElementById('playerTitle');
    if (titleEl) {
        titleEl.textContent = '✅ Hoàn thành tất cả kịch bản!';
    }
    
    const progressFillEl = document.getElementById('playerProgressFill');
    if (progressFillEl) {
        progressFillEl.style.width = '100%';
    }
    
    storyNarration.classList.remove('active');
    nodes.forEach(node => node.classList.remove('highlighted', 'dimmed'));
    
    // Mark all as complete in queue
    renderQueueList();
}

// ==================== PARALLEL MODE ====================
function runParallelScenarios() {
    parallelStep = 0;
    isPaused = false;
    isPlayerActive = true;
    
    // Calculate max steps (longest scenario)
    parallelMaxSteps = Math.max(...scenarioQueue.map(s => s.steps.length));
    
    // Show parallel player
    showParallelPlayer();
    
    // Start playing
    playParallelStep();
}

function showParallelPlayer() {
    const playerOverlay = document.getElementById('parallelPlayerModal');
    if (!playerOverlay) return;
    
    playerOverlay.classList.add('active');
    
    // Initialize parallel simulation dashboard
    updateParallelSimDashboard();
    updateParallelSimStatus('success', `Bắt đầu mô phỏng ${scenarioQueue.length} kịch bản song song...`);
    
    // Render the grid
    renderParallelGrid();
    renderParallelLegend();
    updateParallelProgress();
}

function closeParallelPlayer() {
    const playerOverlay = document.getElementById('parallelPlayerModal');
    if (playerOverlay) {
        playerOverlay.classList.remove('active');
    }
    
    isPlayerActive = false;
    isPaused = false;
    parallelStep = 0;
    
    storyNarration.classList.remove('active');
    nodes.forEach(node => node.classList.remove('highlighted', 'dimmed'));
}

function renderParallelGrid() {
    const gridEl = document.getElementById('parallelGrid');
    if (!gridEl) return;
    
    gridEl.innerHTML = scenarioQueue.map((scenario, idx) => {
        const step = scenario.steps[parallelStep];
        const isFailed = scenario.status.status === 'failed';
        const isCompleted = !isFailed && (parallelStep >= scenario.steps.length || scenario.status.status === 'success');
        const hasCurrentStep = !isFailed && step && parallelStep < scenario.steps.length;
        
        let nodeIcon = '📍';
        let nodeName = '';
        
        if (hasCurrentStep && step.node) {
            const component = componentData[step.node];
            if (component) {
                nodeIcon = component.icon;
                nodeName = component.name;
            }
        }
        
        const progress = scenario.steps.length > 0 
            ? Math.min(100, ((parallelStep + 1) / scenario.steps.length) * 100)
            : 100;
        
        // Card class based on status
        let cardClass = 'parallel-card';
        if (isFailed) cardClass += ' failed';
        else if (isCompleted) cardClass += ' completed';
        else if (hasCurrentStep) cardClass += ' active-step';
        
        // Status badge
        let statusBadge = '';
        if (isFailed) {
            statusBadge = '❌ Thất bại';
        } else if (isCompleted) {
            statusBadge = '✓ Xong';
        } else {
            statusBadge = `${Math.min(parallelStep + 1, scenario.steps.length)}/${scenario.steps.length}`;
        }
        
        // Content based on status
        let cardContent = '';
        if (isFailed) {
            cardContent = `
                <div class="parallel-card-text" style="color: #e74c3c;">
                    ❌ ${scenario.status.reason}
                </div>
            `;
        } else if (hasCurrentStep) {
            // Show inputs/outputs if available
            let ioHtml = '';
            if (step.inputs || step.outputs) {
                ioHtml = '<div class="parallel-card-io">';
                if (step.inputs) {
                    const inputStr = Object.entries(step.inputs)
                        .map(([k, v]) => `${k}: ${typeof v === 'number' ? v.toLocaleString() : v}`)
                        .join(', ');
                    ioHtml += `<div class="parallel-io-in">📥 ${inputStr}</div>`;
                }
                if (step.outputs) {
                    const outputStr = Object.entries(step.outputs)
                        .map(([k, v]) => `${k}: ${typeof v === 'number' ? v.toLocaleString() : v}`)
                        .join(', ');
                    ioHtml += `<div class="parallel-io-out">📤 ${outputStr}</div>`;
                }
                ioHtml += '</div>';
            }
            
            cardContent = `
                <div class="parallel-card-node">
                    <span class="parallel-card-node-icon">${nodeIcon}</span>
                    <span class="parallel-card-node-name">${nodeName}</span>
                </div>
                <div class="parallel-card-text">${step.text}</div>
                ${ioHtml}
            `;
        } else if (isCompleted) {
            cardContent = `
                <div class="parallel-card-text" style="text-align: center; color: #27ae60;">
                    ✅ Kịch bản đã hoàn thành thành công!
                </div>
            `;
        }
        
        return `
            <div class="${cardClass}" data-scenario-idx="${idx}">
                <div class="parallel-card-header">
                    <span class="parallel-card-icon">${scenario.icon}</span>
                    <span class="parallel-card-title">${scenario.title}</span>
                    <span class="parallel-card-step-num">${statusBadge}</span>
                </div>
                ${cardContent}
                <div class="parallel-card-progress">
                    <div class="parallel-card-progress-fill" style="width: ${isFailed ? '100%' : progress + '%'}; background: ${isFailed ? '#e74c3c' : ''}"></div>
                </div>
            </div>
        `;
    }).join('');
    
    // Highlight nodes on the diagram
    highlightParallelNodes();
}

function highlightParallelNodes() {
    // Collect all active nodes from current step
    const activeNodes = new Set();
    
    scenarioQueue.forEach(scenario => {
        const step = scenario.steps[parallelStep];
        if (step && step.node) {
            activeNodes.add(step.node);
        }
    });
    
    // Highlight/dim nodes
    nodes.forEach(node => {
        node.classList.remove('highlighted', 'dimmed');
        if (activeNodes.has(node.dataset.component)) {
            node.classList.add('highlighted');
        } else if (activeNodes.size > 0) {
            node.classList.add('dimmed');
        }
    });
}

function renderParallelLegend() {
    const legendEl = document.getElementById('parallelLegend');
    if (!legendEl) return;
    
    legendEl.innerHTML = scenarioQueue.map((scenario, idx) => {
        const isFailed = scenario.status.status === 'failed';
        const isCompleted = !isFailed && (parallelStep >= scenario.steps.length || scenario.status.status === 'success');
        const isActive = !isFailed && !isCompleted;
        
        return `
            <div class="legend-item ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''} ${isFailed ? 'failed' : ''}">
                <span class="legend-item-icon">${scenario.icon}</span>
                <span>${scenario.title}</span>
                ${isFailed ? '<span style="color:#e74c3c;">❌</span>' : ''}
            </div>
        `;
    }).join('');
}

function updateParallelProgress() {
    const stepInfoEl = document.getElementById('parallelStepInfo');
    if (stepInfoEl) {
        stepInfoEl.textContent = `Bước ${parallelStep + 1} / ${parallelMaxSteps}`;
    }
    
    const progressFillEl = document.getElementById('parallelProgressFill');
    if (progressFillEl) {
        const progress = ((parallelStep + 1) / parallelMaxSteps) * 100;
        progressFillEl.style.width = `${progress}%`;
    }
}

function playParallelStep() {
    if (!isPlayerActive) return;
    if (isPaused) return;
    
    // Check if all scenarios are complete or failed
    const allComplete = scenarioQueue.every(s => 
        parallelStep >= s.steps.length || s.status.status === 'failed'
    );
    if (allComplete) {
        finishParallelScenarios();
        return;
    }
    
    // Process each scenario's current step
    let hasFailure = false;
    let failureMessages = [];
    
    scenarioQueue.forEach(scenario => {
        if (scenario.status.status === 'failed') return; // Skip failed scenarios
        
        const step = scenario.steps[parallelStep];
        if (!step) {
            // Scenario completed
            if (scenario.status.status === 'running') {
                scenario.status.status = 'success';
            }
            return;
        }
        
        // Check step condition
        if (step.condition) {
            const condResult = checkScenarioCondition(step.condition, scenario.id);
            if (!condResult.success) {
                scenario.status.status = 'failed';
                scenario.status.failedStep = parallelStep;
                scenario.status.reason = condResult.reason;
                hasFailure = true;
                failureMessages.push(`${scenario.icon} ${scenario.title}: ${condResult.reason}`);
                return;
            }
        }
        
        // Apply step effect
        if (step.effect) {
            applyStepEffect(step.effect, scenario.id);
        }
    });
    
    // Update parallel simulation dashboard
    updateParallelSimDashboard();
    
    // Update status
    if (hasFailure) {
        updateParallelSimStatus('error', failureMessages.join(' | '));
    } else {
        const activeCount = scenarioQueue.filter(s => s.status.status === 'running').length;
        updateParallelSimStatus('success', `${activeCount} kịch bản đang chạy bình thường`);
    }
    
    // Update UI
    renderParallelGrid();
    renderParallelLegend();
    updateParallelProgress();
    
    // Update story narration with combined text
    updateParallelNarration();
    
    // Auto-advance after delay
    setTimeout(() => {
        if (!isPaused && isPlayerActive) {
            parallelStep++;
            playParallelStep();
        }
    }, 4000);
}

// Update parallel simulation dashboard
function updateParallelSimDashboard() {
    if (!simState) return;
    
    const updateEl = (id, value, format = 'number') => {
        const el = document.getElementById(id);
        if (!el) return;
        
        let displayValue = value;
        let changeClass = '';
        
        if (format === 'money') {
            displayValue = simState.formatMoney(Math.round(value));
        } else if (format === 'percent') {
            displayValue = value.toFixed(1) + '%';
        } else if (format === 'index') {
            displayValue = Math.round(value);
        }
        
        const prevValue = parseFloat(el.dataset.prevValue || value);
        if (value > prevValue * 1.01) {
            changeClass = 'up';
        } else if (value < prevValue * 0.99) {
            changeClass = 'down';
        }
        
        el.textContent = displayValue;
        el.className = 'sim-value ' + changeClass;
        el.dataset.prevValue = value;
    };
    
    updateEl('pSimMoneySupply', simState.moneySupply, 'money');
    updateEl('pSimStockIndex', simState.stockIndex, 'index');
    updateEl('pSimRealEstate', simState.realEstateIndex, 'index');
    updateEl('pSimInflation', simState.inflation, 'percent');
    updateEl('pSimUnemployment', simState.unemployment, 'percent');
    updateEl('pSimConfidence', (simState.consumerConfidence + simState.businessConfidence) / 2, 'index');
    updateEl('pSimNPL', simState.npl, 'percent');
    updateEl('pSimExchangeRate', simState.exchangeRate, 'index');
}

function updateParallelSimStatus(type, message) {
    const statusEl = document.getElementById('parallelSimStatus');
    if (!statusEl) return;
    
    statusEl.className = 'sim-status ' + type;
    const icons = { success: '✅', warning: '⚠️', error: '❌' };
    statusEl.querySelector('.status-icon').textContent = icons[type] || '✅';
    statusEl.querySelector('.status-text').textContent = message;
}

function updateParallelNarration() {
    // Collect all current step texts
    const activeSteps = [];
    
    scenarioQueue.forEach(scenario => {
        const step = scenario.steps[parallelStep];
        if (step) {
            activeSteps.push({
                icon: scenario.icon,
                title: scenario.title,
                text: step.text
            });
        }
    });
    
    if (activeSteps.length > 0) {
        storyNarration.classList.add('active');
        const storyText = document.getElementById('storyText');
        if (storyText) {
            if (activeSteps.length === 1) {
                storyText.textContent = activeSteps[0].text;
            } else {
                storyText.innerHTML = `<strong>Đang diễn ra ${activeSteps.length} sự kiện:</strong><br>` + 
                    activeSteps.map(s => `${s.icon} ${s.text}`).join('<br>');
            }
        }
    }
}

function toggleParallelPause() {
    isPaused = !isPaused;
    const pauseBtn = document.getElementById('parallelPause');
    if (pauseBtn) {
        pauseBtn.innerHTML = isPaused ? '▶️ Tiếp tục' : '⏸️ Tạm dừng';
    }
    
    if (!isPaused) {
        playParallelStep();
    }
}

function prevParallelStep() {
    if (parallelStep > 0) {
        isPaused = true;
        parallelStep--;
        
        const pauseBtn = document.getElementById('parallelPause');
        if (pauseBtn) pauseBtn.innerHTML = '▶️ Tiếp tục';
        
        renderParallelGrid();
        renderParallelLegend();
        updateParallelProgress();
        updateParallelNarration();
    }
}

function nextParallelStep() {
    const allComplete = scenarioQueue.every(s => parallelStep >= s.steps.length);
    if (!allComplete) {
        isPaused = true;
        parallelStep++;
        
        const pauseBtn = document.getElementById('parallelPause');
        if (pauseBtn) pauseBtn.innerHTML = '▶️ Tiếp tục';
        
        renderParallelGrid();
        renderParallelLegend();
        updateParallelProgress();
        updateParallelNarration();
    }
}

function finishParallelScenarios() {
    // Calculate summary
    const successCount = scenarioQueue.filter(s => s.status.status === 'success').length;
    const failedCount = scenarioQueue.filter(s => s.status.status === 'failed').length;
    const totalCount = scenarioQueue.length;
    
    const stepInfoEl = document.getElementById('parallelStepInfo');
    if (stepInfoEl) {
        stepInfoEl.textContent = `✅ Hoàn thành! ${successCount}/${totalCount} thành công`;
    }
    
    const progressFillEl = document.getElementById('parallelProgressFill');
    if (progressFillEl) {
        progressFillEl.style.width = '100%';
        if (failedCount > 0) {
            progressFillEl.style.background = 'linear-gradient(90deg, #27ae60, #f39c12, #e74c3c)';
        }
    }
    
    // Show final status
    if (failedCount === 0) {
        updateParallelSimStatus('success', `🎉 Tất cả ${totalCount} kịch bản hoàn thành thành công!`);
    } else if (successCount === 0) {
        updateParallelSimStatus('error', `💀 Tất cả ${totalCount} kịch bản đều thất bại!`);
    } else {
        updateParallelSimStatus('warning', `⚠️ ${successCount} thành công, ${failedCount} thất bại`);
    }
    
    // Show final simulation state summary in narration
    if (simState) {
        storyNarration.classList.add('active');
        const storyText = document.getElementById('storyText');
        if (storyText) {
            storyText.innerHTML = `
                <strong>📊 Kết quả mô phỏng:</strong><br>
                📈 Chỉ số CK: ${Math.round(simState.stockIndex)} | 
                🏠 BĐS: ${Math.round(simState.realEstateIndex)} | 
                📊 Lạm phát: ${simState.inflation.toFixed(1)}%<br>
                👥 Thất nghiệp: ${simState.unemployment.toFixed(1)}% | 
                🏦 Nợ xấu: ${simState.npl.toFixed(1)}% | 
                😊 Niềm tin: ${Math.round((simState.consumerConfidence + simState.businessConfidence) / 2)}
            `;
        }
    }
    
    nodes.forEach(node => node.classList.remove('highlighted', 'dimmed'));
    
    // Update grid to show all completed
    renderParallelGrid();
    renderParallelLegend();
}

console.log('%c💰 Hiểu Hết Về Tiền', 'font-size: 24px; font-weight: bold; color: #f39c12;');
console.log('%c20 Components | 30+ Scenarios | 4 Simulators', 'font-size: 14px; color: #3498db;');
