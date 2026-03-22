// ==================== COUNTRY DATA ====================

// Country-specific data for localization
const countryData = {
    vn: {
        name: 'Việt Nam',
        flag: '🇻🇳',
        currency: 'VND',
        currencySymbol: '₫',
        centralBank: 'Ngân Hàng Nhà Nước Việt Nam (SBV)',
        stockExchange: 'HOSE, HNX',
        sampleAmount: 100000000,
        loanRate: 10,
        depositRate: 6,
        inflationRate: 4,
        reserveRatio: 10,
        formatMoney: (n) => new Intl.NumberFormat('vi-VN').format(n) + ' VND'
    },
    us: {
        name: 'Mỹ',
        flag: '🇺🇸',
        currency: 'USD',
        currencySymbol: '$',
        centralBank: 'Federal Reserve (FED)',
        stockExchange: 'NYSE, NASDAQ',
        sampleAmount: 10000,
        loanRate: 7,
        depositRate: 5,
        inflationRate: 3,
        reserveRatio: 10,
        formatMoney: (n) => '$' + new Intl.NumberFormat('en-US').format(n)
    },
    cn: {
        name: 'Trung Quốc',
        flag: '🇨🇳',
        currency: 'CNY',
        currencySymbol: '¥',
        centralBank: 'People\'s Bank of China (PBOC)',
        stockExchange: 'Shanghai, Shenzhen',
        sampleAmount: 100000,
        loanRate: 5,
        depositRate: 2,
        inflationRate: 2,
        reserveRatio: 8,
        formatMoney: (n) => '¥' + new Intl.NumberFormat('zh-CN').format(n)
    },
    jp: {
        name: 'Nhật Bản',
        flag: '🇯🇵',
        currency: 'JPY',
        currencySymbol: '¥',
        centralBank: 'Bank of Japan (BOJ)',
        stockExchange: 'Tokyo Stock Exchange',
        sampleAmount: 1000000,
        loanRate: 2,
        depositRate: 0.1,
        inflationRate: 2,
        reserveRatio: 1,
        formatMoney: (n) => '¥' + new Intl.NumberFormat('ja-JP').format(n)
    },
    eu: {
        name: 'Châu Âu',
        flag: '🇪🇺',
        currency: 'EUR',
        currencySymbol: '€',
        centralBank: 'European Central Bank (ECB)',
        stockExchange: 'Euronext',
        sampleAmount: 10000,
        loanRate: 4,
        depositRate: 3,
        inflationRate: 2,
        reserveRatio: 1,
        formatMoney: (n) => '€' + new Intl.NumberFormat('de-DE').format(n)
    },
    kr: {
        name: 'Hàn Quốc',
        flag: '🇰🇷',
        currency: 'KRW',
        currencySymbol: '₩',
        centralBank: 'Bank of Korea (BOK)',
        stockExchange: 'Korea Exchange (KRX)',
        sampleAmount: 10000000,
        loanRate: 5,
        depositRate: 3,
        inflationRate: 3,
        reserveRatio: 7,
        formatMoney: (n) => '₩' + new Intl.NumberFormat('ko-KR').format(n)
    }
};

let selectedCountry = 'vn';

function setSelectedCountry(country) {
    selectedCountry = country;
}

// ==================== SIMULATION STATE ====================
// Central economic state that all scenarios affect
function createSimulationState(country) {
    const c = countryData[country];
    return {
        // Monetary indicators
        moneySupply: c.sampleAmount * 10000,
        interestRate: c.loanRate,
        depositRate: c.depositRate,
        reserveRatio: c.reserveRatio,
        
        // Economic indicators
        gdp: c.sampleAmount * 100000,
        inflation: c.inflationRate,
        unemployment: 5,
        consumerConfidence: 70, // 0-100
        businessConfidence: 70, // 0-100
        
        // Market indicators
        stockIndex: 1000,
        bondYield: c.loanRate - 1,
        realEstateIndex: 100,
        exchangeRate: 100, // Base 100
        
        // Banking system
        bankReserves: c.sampleAmount * 1000,
        npl: 2, // Non-performing loans %
        creditGrowth: 10,
        
        // Tracking
        history: [],
        scenarioEffects: {},
        
        // Format helpers
        formatMoney: c.formatMoney,
        currency: c.currency
    };
}

let simState = null;

function setSimState(state) {
    simState = state;
}

function getSimState() {
    return simState;
}

// Calculate step effects on simulation state
function applyStepEffect(effect, scenarioId) {
    if (!simState || !effect) return;
    
    // Apply each effect
    Object.entries(effect).forEach(([key, value]) => {
        if (typeof value === 'number') {
            if (key.endsWith('_add')) {
                const realKey = key.replace('_add', '');
                simState[realKey] = (simState[realKey] || 0) + value;
            } else if (key.endsWith('_mult')) {
                const realKey = key.replace('_mult', '');
                simState[realKey] = (simState[realKey] || 0) * value;
            } else if (key.endsWith('_set')) {
                const realKey = key.replace('_set', '');
                simState[realKey] = value;
            } else {
                // Default: add
                simState[key] = (simState[key] || 0) + value;
            }
        }
    });
    
    // Keep values in bounds
    simState.consumerConfidence = Math.max(0, Math.min(100, simState.consumerConfidence));
    simState.businessConfidence = Math.max(0, Math.min(100, simState.businessConfidence));
    simState.unemployment = Math.max(0, Math.min(50, simState.unemployment));
    simState.inflation = Math.max(-5, Math.min(100, simState.inflation));
    simState.npl = Math.max(0, Math.min(50, simState.npl));
    simState.stockIndex = Math.max(100, simState.stockIndex);
    
    // Track history
    simState.history.push({
        scenarioId,
        changes: effect,
        timestamp: Date.now()
    });
    
    // Track effects by scenario
    if (!simState.scenarioEffects[scenarioId]) {
        simState.scenarioEffects[scenarioId] = [];
    }
    simState.scenarioEffects[scenarioId].push(effect);
}

// Check scenario success/failure conditions
function checkScenarioCondition(condition, scenarioId) {
    if (!condition || !simState) return { success: true, reason: '' };
    
    let success = true;
    let reason = '';
    
    if (condition.requires) {
        Object.entries(condition.requires).forEach(([key, check]) => {
            const value = simState[key];
            if (check.min !== undefined && value < check.min) {
                success = false;
                reason = check.failMessage || `${key} quá thấp (${value} < ${check.min})`;
            }
            if (check.max !== undefined && value > check.max) {
                success = false;
                reason = check.failMessage || `${key} quá cao (${value} > ${check.max})`;
            }
        });
    }
    
    if (condition.random) {
        const roll = Math.random() * 100;
        if (roll > condition.random.successRate) {
            success = false;
            reason = condition.random.failMessage || 'Không may mắn!';
        }
    }
    
    return { success, reason };
}
