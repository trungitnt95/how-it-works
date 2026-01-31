// Money flow simulation with interactive components

// Economic model state
const economicModel = {
    government: {
        revenue: 100,
        spending: 100,
        debt: 0
    },
    business: {
        revenue: 200,
        investment: 50,
        employment: 100
    },
    family: {
        income: 60,
        savings: 10,
        spending: 50
    },
    bank: {
        deposits: 500,
        loans: 400,
        interestRate: 5
    }
};

// Strategy effects configuration
const strategyEffects = {
    government: {
        balanced: {
            spending: 1.0,
            debt: 0,
            businessImpact: 1.0,
            familyImpact: 1.0
        },
        stimulus: {
            spending: 1.3,
            debt: 30,
            businessImpact: 1.2,
            familyImpact: 1.15
        },
        austerity: {
            spending: 0.8,
            debt: -10,
            businessImpact: 0.9,
            familyImpact: 0.85
        }
    },
    business: {
        growth: {
            investment: 1.0,
            employment: 1.0,
            revenue: 1.0
        },
        conservative: {
            investment: 0.7,
            employment: 0.95,
            revenue: 0.9
        },
        aggressive: {
            investment: 1.5,
            employment: 1.2,
            revenue: 1.3
        }
    },
    family: {
        saving: {
            savings: 1.5,
            spending: 0.8,
            bankImpact: 1.2
        },
        spending: {
            savings: 0.5,
            spending: 1.3,
            bankImpact: 0.9
        },
        investing: {
            savings: 1.2,
            spending: 1.0,
            bankImpact: 1.1
        }
    },
    bank: {
        moderate: {
            loans: 1.0,
            interestRate: 5,
            businessImpact: 1.0,
            familyImpact: 1.0
        },
        tight: {
            loans: 0.7,
            interestRate: 7,
            businessImpact: 0.85,
            familyImpact: 0.9
        },
        loose: {
            loans: 1.3,
            interestRate: 3,
            businessImpact: 1.15,
            familyImpact: 1.1
        }
    }
};

// Calculate and update the flow based on selected strategies
function updateFlow() {
    const govStrategy = document.getElementById('government-strategy').value;
    const busStrategy = document.getElementById('business-strategy').value;
    const famStrategy = document.getElementById('family-strategy').value;
    const bankStrategy = document.getElementById('bank-strategy').value;
    
    // Base values
    const baseModel = {
        government: { revenue: 100, spending: 100, debt: 0 },
        business: { revenue: 200, investment: 50, employment: 100 },
        family: { income: 60, savings: 10, spending: 50 },
        bank: { deposits: 500, loans: 400, interestRate: 5 }
    };
    
    // Apply government strategy
    const govEffect = strategyEffects.government[govStrategy];
    economicModel.government.spending = baseModel.government.spending * govEffect.spending;
    economicModel.government.debt = baseModel.government.debt + govEffect.debt;
    economicModel.government.revenue = baseModel.government.revenue;
    
    // Apply business strategy and government/bank impacts
    const busEffect = strategyEffects.business[busStrategy];
    const bankEffect = strategyEffects.bank[bankStrategy];
    economicModel.business.investment = baseModel.business.investment * busEffect.investment * govEffect.businessImpact * bankEffect.businessImpact;
    economicModel.business.employment = baseModel.business.employment * busEffect.employment * govEffect.businessImpact;
    economicModel.business.revenue = baseModel.business.revenue * busEffect.revenue * govEffect.businessImpact;
    
    // Apply family strategy and government/bank impacts
    const famEffect = strategyEffects.family[famStrategy];
    economicModel.family.income = baseModel.family.income * govEffect.familyImpact;
    economicModel.family.savings = baseModel.family.savings * famEffect.savings * bankEffect.familyImpact;
    economicModel.family.spending = baseModel.family.spending * famEffect.spending * govEffect.familyImpact;
    
    // Apply bank strategy and family impact
    economicModel.bank.deposits = baseModel.bank.deposits * famEffect.bankImpact;
    economicModel.bank.loans = baseModel.bank.loans * bankEffect.loans;
    economicModel.bank.interestRate = bankEffect.interestRate;
    
    // Update display
    updateDisplay();
    updateImpactMessages(govStrategy, busStrategy, famStrategy, bankStrategy);
}

// Update the visual display
function updateDisplay() {
    // Government
    document.getElementById('gov-revenue').textContent = `$${economicModel.government.revenue.toFixed(0)}B`;
    document.getElementById('gov-spending').textContent = `$${economicModel.government.spending.toFixed(0)}B`;
    document.getElementById('gov-debt').textContent = `$${economicModel.government.debt.toFixed(0)}B`;
    
    // Business
    document.getElementById('bus-revenue').textContent = `$${economicModel.business.revenue.toFixed(0)}B`;
    document.getElementById('bus-investment').textContent = `$${economicModel.business.investment.toFixed(0)}B`;
    document.getElementById('bus-employment').textContent = `${economicModel.business.employment.toFixed(0)}K`;
    
    // Family
    document.getElementById('fam-income').textContent = `$${economicModel.family.income.toFixed(1)}K`;
    document.getElementById('fam-savings').textContent = `$${economicModel.family.savings.toFixed(1)}K`;
    document.getElementById('fam-spending').textContent = `$${economicModel.family.spending.toFixed(1)}K`;
    
    // Bank
    document.getElementById('bank-deposits').textContent = `$${economicModel.bank.deposits.toFixed(0)}B`;
    document.getElementById('bank-loans').textContent = `$${economicModel.bank.loans.toFixed(0)}B`;
    document.getElementById('bank-rate').textContent = `${economicModel.bank.interestRate}%`;
}

// Update impact messages for each component
function updateImpactMessages(govStrategy, busStrategy, famStrategy, bankStrategy) {
    // Government impacts
    const govMessages = {
        balanced: 'Maintaining stable economic conditions with balanced budget.',
        stimulus: 'Increasing spending to stimulate economic growth, adding to national debt.',
        austerity: 'Cutting spending to reduce debt, may slow economic growth.'
    };
    setImpactMessage('gov-impact', govMessages[govStrategy], 
        govStrategy === 'balanced' ? 'neutral' : govStrategy === 'stimulus' ? 'positive' : 'negative');
    
    // Business impacts
    const busMessages = {
        growth: 'Investing steadily for sustainable growth and job creation.',
        conservative: 'Cautious approach with reduced investment and hiring.',
        aggressive: 'Rapid expansion with high investment and employment growth.'
    };
    setImpactMessage('bus-impact', busMessages[busStrategy],
        busStrategy === 'growth' ? 'neutral' : busStrategy === 'aggressive' ? 'positive' : 'negative');
    
    // Family impacts
    const famMessages = {
        saving: 'Building savings for future security, reducing current spending.',
        spending: 'High consumption driving business revenue but low savings.',
        investing: 'Balanced approach with investment for long-term growth.'
    };
    setImpactMessage('fam-impact', famMessages[famStrategy],
        famStrategy === 'investing' ? 'neutral' : famStrategy === 'spending' ? 'positive' : 'negative');
    
    // Bank impacts
    const bankMessages = {
        moderate: 'Balanced lending policies supporting steady economic growth.',
        tight: 'Restrictive lending reduces risk but limits business and family borrowing.',
        loose: 'Easy credit access stimulates economy but increases financial risk.'
    };
    setImpactMessage('bank-impact', bankMessages[bankStrategy],
        bankStrategy === 'moderate' ? 'neutral' : bankStrategy === 'loose' ? 'positive' : 'negative');
    
    // Overall impact
    updateOverallImpact(govStrategy, busStrategy, famStrategy, bankStrategy);
}

// Set impact message with appropriate styling
function setImpactMessage(elementId, message, type) {
    const element = document.getElementById(elementId);
    element.textContent = message;
    element.className = 'impact-message impact-' + type;
}

// Calculate and display overall economic impact
function updateOverallImpact(govStrategy, busStrategy, famStrategy, bankStrategy) {
    let impact = '';
    
    // Analyze synergies and conflicts
    if (govStrategy === 'stimulus' && busStrategy === 'aggressive' && bankStrategy === 'loose') {
        impact = '🚀 Strong Economic Growth: Government stimulus, aggressive business expansion, and easy credit are creating rapid economic growth. However, this may lead to inflation and increased debt levels.';
    } else if (govStrategy === 'austerity' && busStrategy === 'conservative' && famStrategy === 'saving') {
        impact = '📉 Economic Slowdown: Conservative approaches across all sectors are reducing economic activity. This creates stability but limits growth and job creation.';
    } else if (govStrategy === 'stimulus' && bankStrategy === 'tight') {
        impact = '⚠️ Policy Conflict: Government is trying to stimulate the economy, but tight credit is limiting the impact. Businesses and families struggle to access capital.';
    } else if (famStrategy === 'spending' && busStrategy === 'aggressive') {
        impact = '💰 Consumer-Driven Growth: High consumer spending supports aggressive business expansion. This creates jobs and economic activity but may not be sustainable long-term.';
    } else if (govStrategy === 'balanced' && busStrategy === 'growth' && bankStrategy === 'moderate') {
        impact = '✅ Sustainable Growth: Balanced policies across government, business, and banking are creating steady, sustainable economic growth with controlled risk.';
    } else {
        impact = '📊 Mixed Signals: The current combination of strategies creates a complex economic environment. Some sectors benefit while others face challenges.';
    }
    
    // Add specific metrics summary
    const gdpGrowth = ((economicModel.business.revenue + economicModel.family.spending) / 250 - 1) * 100;
    const jobGrowth = (economicModel.business.employment - 100);
    
    impact += `<br><br><strong>Key Metrics:</strong><br>`;
    impact += `• GDP Growth: ${gdpGrowth > 0 ? '+' : ''}${gdpGrowth.toFixed(1)}%<br>`;
    impact += `• Employment Change: ${jobGrowth > 0 ? '+' : ''}${jobGrowth.toFixed(0)}K jobs<br>`;
    impact += `• Government Debt: ${economicModel.government.debt > 0 ? '+' : ''}$${economicModel.government.debt}B`;
    
    document.getElementById('overall-impact').innerHTML = impact;
}

// Initialize on page load
window.onload = function() {
    updateFlow();
};
