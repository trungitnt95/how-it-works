// ==================== TRADING SIMULATORS MODULE ====================

const tradingSimulators = {
    'paper-trading': {
        title: '📝 Paper Trading Simulator',
        description: 'Thực hành trading với tiền ảo, không rủi ro',
        html: `
            <div class="simulator-container">
                <div class="paper-trading-simulator">
                    <h3>Paper Trading Account</h3>
                    
                    <div class="account-info">
                        <div class="info-item">
                            <span class="label">Balance:</span>
                            <span class="value" id="paperBalance">$10,000.00</span>
                        </div>
                        <div class="info-item">
                            <span class="label">Open P/L:</span>
                            <span class="value" id="paperPL">$0.00</span>
                        </div>
                        <div class="info-item">
                            <span class="label">Total Trades:</span>
                            <span class="value" id="paperTrades">0</span>
                        </div>
                        <div class="info-item">
                            <span class="label">Win Rate:</span>
                            <span class="value" id="paperWinRate">0%</span>
                        </div>
                    </div>

                    <div class="trading-panel">
                        <h4>Place Order</h4>
                        <div class="form-group">
                            <label>Asset:</label>
                            <select id="paperAsset">
                                <option value="BTCUSD">BTC/USD</option>
                                <option value="ETHUSD">ETH/USD</option>
                                <option value="AAPL">AAPL</option>
                                <option value="TSLA">TSLA</option>
                                <option value="EURUSD">EUR/USD</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label>Direction:</label>
                            <select id="paperDirection">
                                <option value="long">Long (Buy)</option>
                                <option value="short">Short (Sell)</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label>Entry Price:</label>
                            <input type="number" id="paperEntry" placeholder="30000" step="0.01">
                        </div>

                        <div class="form-group">
                            <label>Position Size (units):</label>
                            <input type="number" id="paperSize" placeholder="0.1" step="0.01">
                        </div>

                        <div class="form-group">
                            <label>Stop Loss:</label>
                            <input type="number" id="paperSL" placeholder="29000" step="0.01">
                        </div>

                        <div class="form-group">
                            <label>Take Profit:</label>
                            <input type="number" id="paperTP" placeholder="32000" step="0.01">
                        </div>

                        <button class="btn-primary" onclick="placePaperTrade()">Place Trade</button>
                    </div>

                    <div class="positions-panel">
                        <h4>Open Positions</h4>
                        <div id="paperPositions">
                            <p class="empty-state">No open positions</p>
                        </div>
                    </div>

                    <div class="history-panel">
                        <h4>Trade History</h4>
                        <div id="paperHistory">
                            <p class="empty-state">No completed trades</p>
                        </div>
                    </div>
                </div>
            </div>

            <style>
                .simulator-container { max-width: 800px; margin: 0 auto; }
                .account-info { 
                    display: grid; 
                    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); 
                    gap: 15px; 
                    margin: 20px 0;
                    padding: 20px;
                    background: #2c3e50;
                    border-radius: 10px;
                }
                .info-item { text-align: center; }
                .info-item .label { 
                    display: block; 
                    color: #95a5a6; 
                    font-size: 0.9em; 
                    margin-bottom: 5px;
                }
                .info-item .value { 
                    display: block; 
                    font-size: 1.3em; 
                    font-weight: bold; 
                    color: #ecf0f1;
                }
                .trading-panel, .positions-panel, .history-panel {
                    background: #34495e;
                    padding: 20px;
                    border-radius: 10px;
                    margin: 20px 0;
                }
                .form-group { margin: 15px 0; }
                .form-group label { 
                    display: block; 
                    margin-bottom: 5px; 
                    color: #ecf0f1;
                    font-weight: bold;
                }
                .form-group input, .form-group select {
                    width: 100%;
                    padding: 10px;
                    border-radius: 5px;
                    border: 1px solid #95a5a6;
                    background: #2c3e50;
                    color: #ecf0f1;
                    font-size: 1em;
                }
                .btn-primary {
                    width: 100%;
                    padding: 15px;
                    background: #27ae60;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    font-size: 1.1em;
                    font-weight: bold;
                    cursor: pointer;
                    transition: 0.3s;
                }
                .btn-primary:hover { background: #229954; }
                .empty-state { 
                    text-align: center; 
                    color: #95a5a6; 
                    padding: 20px;
                }
            </style>
        `
    },

    'risk-calculator': {
        title: '🛡️ Risk Calculator',
        description: 'Tính toán position size dựa trên risk management',
        html: `
            <div class="simulator-container">
                <div class="risk-calculator">
                    <h3>Risk & Position Size Calculator</h3>
                    
                    <div class="calculator-panel">
                        <div class="form-group">
                            <label>Account Size ($):</label>
                            <input type="number" id="riskAccount" value="10000" step="100">
                            <small>Tổng số tiền trong tài khoản trading</small>
                        </div>

                        <div class="form-group">
                            <label>Risk Per Trade (%):</label>
                            <input type="number" id="riskPercent" value="1" step="0.1" min="0.1" max="10">
                            <small>Recommend: 1% cho hầu hết traders</small>
                        </div>

                        <div class="form-group">
                            <label>Entry Price:</label>
                            <input type="number" id="riskEntry" value="30000" step="0.01">
                        </div>

                        <div class="form-group">
                            <label>Stop Loss Price:</label>
                            <input type="number" id="riskSL" value="29000" step="0.01">
                        </div>

                        <button class="btn-calculate" onclick="calculateRisk()">Calculate</button>

                        <div class="results-panel" id="riskResults" style="display: none;">
                            <h4>📊 Results:</h4>
                            
                            <div class="result-item">
                                <span class="result-label">Risk Amount:</span>
                                <span class="result-value" id="riskAmount">$0</span>
                            </div>

                            <div class="result-item">
                                <span class="result-label">Stop Loss Distance:</span>
                                <span class="result-value" id="riskDistance">$0</span>
                            </div>

                            <div class="result-item highlight">
                                <span class="result-label">Position Size:</span>
                                <span class="result-value" id="riskPosition">0 units</span>
                            </div>

                            <div class="result-item">
                                <span class="result-label">Position Value:</span>
                                <span class="result-value" id="riskValue">$0</span>
                            </div>

                            <div class="result-item">
                                <span class="result-label">Percentage of Account:</span>
                                <span class="result-value" id="riskAccountPercent">0%</span>
                            </div>

                            <div class="info-box">
                                <h5>💡 Verification:</h5>
                                <p id="riskVerify">If stop loss is hit, you will lose exactly <strong>$0</strong> (<strong>0%</strong> of account)</p>
                            </div>

                            <div class="warning-box" id="riskWarning" style="display: none;">
                                <h5>⚠️ Warning:</h5>
                                <p id="riskWarningText"></p>
                            </div>
                        </div>
                    </div>

                    <div class="examples-panel">
                        <h4>📚 Examples:</h4>
                        <div class="example-card" onclick="loadRiskExample(1)">
                            <h5>Conservative (1%)</h5>
                            <p>Account: $10,000 | Entry: $30,000 | SL: $29,000</p>
                        </div>
                        <div class="example-card" onclick="loadRiskExample(2)">
                            <h5>Moderate (1.5%)</h5>
                            <p>Account: $20,000 | Entry: $150 | SL: $148</p>
                        </div>
                        <div class="example-card" onclick="loadRiskExample(3)">
                            <h5>Aggressive (2%)</h5>
                            <p>Account: $5,000 | Entry: 1.0850 | SL: 1.0820</p>
                        </div>
                    </div>
                </div>
            </div>

            <style>
                .risk-calculator { max-width: 700px; margin: 0 auto; }
                .calculator-panel {
                    background: #34495e;
                    padding: 30px;
                    border-radius: 10px;
                    margin: 20px 0;
                }
                .form-group { margin: 20px 0; }
                .form-group label {
                    display: block;
                    color: #ecf0f1;
                    font-weight: bold;
                    margin-bottom: 8px;
                }
                .form-group input {
                    width: 100%;
                    padding: 12px;
                    border-radius: 5px;
                    border: 1px solid #95a5a6;
                    background: #2c3e50;
                    color: #ecf0f1;
                    font-size: 1.1em;
                }
                .form-group small {
                    display: block;
                    color: #95a5a6;
                    margin-top: 5px;
                    font-size: 0.85em;
                }
                .btn-calculate {
                    width: 100%;
                    padding: 15px;
                    background: #3498db;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    font-size: 1.2em;
                    font-weight: bold;
                    cursor: pointer;
                    transition: 0.3s;
                    margin-top: 20px;
                }
                .btn-calculate:hover { background: #2980b9; }
                .results-panel {
                    background: #2c3e50;
                    padding: 25px;
                    border-radius: 10px;
                    margin-top: 25px;
                }
                .result-item {
                    display: flex;
                    justify-content: space-between;
                    padding: 12px 0;
                    border-bottom: 1px solid #34495e;
                }
                .result-item.highlight {
                    background: #27ae60;
                    padding: 15px;
                    margin: 10px -10px;
                    border-radius: 5px;
                    border: none;
                }
                .result-label { color: #95a5a6; font-weight: bold; }
                .result-value { color: #ecf0f1; font-weight: bold; font-size: 1.1em; }
                .highlight .result-label, .highlight .result-value { color: white; }
                .info-box, .warning-box {
                    margin-top: 20px;
                    padding: 15px;
                    border-radius: 5px;
                }
                .info-box {
                    background: #3498db;
                    color: white;
                }
                .warning-box {
                    background: #e74c3c;
                    color: white;
                }
                .examples-panel {
                    margin-top: 30px;
                }
                .example-card {
                    background: #34495e;
                    padding: 15px;
                    border-radius: 5px;
                    margin: 10px 0;
                    cursor: pointer;
                    transition: 0.3s;
                }
                .example-card:hover {
                    background: #3498db;
                    transform: translateX(5px);
                }
                .example-card h5 {
                    margin: 0 0 5px 0;
                    color: #ecf0f1;
                }
                .example-card p {
                    margin: 0;
                    color: #95a5a6;
                    font-size: 0.9em;
                }
            </style>

            <script>
                function calculateRisk() {
                    const account = parseFloat(document.getElementById('riskAccount').value);
                    const riskPercent = parseFloat(document.getElementById('riskPercent').value);
                    const entry = parseFloat(document.getElementById('riskEntry').value);
                    const sl = parseFloat(document.getElementById('riskSL').value);

                    if (!account || !riskPercent || !entry || !sl) {
                        alert('Please fill all fields!');
                        return;
                    }

                    const riskAmount = account * (riskPercent / 100);
                    const distance = Math.abs(entry - sl);
                    const position = riskAmount / distance;
                    const positionValue = position * entry;
                    const accountPercent = (positionValue / account * 100).toFixed(2);

                    document.getElementById('riskResults').style.display = 'block';
                    document.getElementById('riskAmount').textContent = '$' + riskAmount.toFixed(2);
                    document.getElementById('riskDistance').textContent = '$' + distance.toFixed(2);
                    document.getElementById('riskPosition').textContent = position.toFixed(4) + ' units';
                    document.getElementById('riskValue').textContent = '$' + positionValue.toFixed(2);
                    document.getElementById('riskAccountPercent').textContent = accountPercent + '%';
                    
                    document.getElementById('riskVerify').innerHTML = 
                        \`If stop loss is hit, you will lose exactly <strong>$\${riskAmount.toFixed(2)}</strong> (<strong>\${riskPercent}%</strong> of account) ✅\`;

                    // Warning if position is too large
                    const warningDiv = document.getElementById('riskWarning');
                    if (parseFloat(accountPercent) > 50) {
                        warningDiv.style.display = 'block';
                        document.getElementById('riskWarningText').textContent = 
                            \`Position value is \${accountPercent}% of account! This is very high. Consider reducing risk % or increasing stop loss distance.\`;
                    } else {
                        warningDiv.style.display = 'none';
                    }
                }

                function loadRiskExample(num) {
                    if (num === 1) {
                        document.getElementById('riskAccount').value = '10000';
                        document.getElementById('riskPercent').value = '1';
                        document.getElementById('riskEntry').value = '30000';
                        document.getElementById('riskSL').value = '29000';
                    } else if (num === 2) {
                        document.getElementById('riskAccount').value = '20000';
                        document.getElementById('riskPercent').value = '1.5';
                        document.getElementById('riskEntry').value = '150';
                        document.getElementById('riskSL').value = '148';
                    } else if (num === 3) {
                        document.getElementById('riskAccount').value = '5000';
                        document.getElementById('riskPercent').value = '2';
                        document.getElementById('riskEntry').value = '1.0850';
                        document.getElementById('riskSL').value = '1.0820';
                    }
                    calculateRisk();
                }
            </script>
        `
    },

    'position-size': {
        title: '⚖️ Position Size Calculator',
        description: 'Tính khối lượng giao dịch dựa trên risk',
        html: `
            <div class="simulator-container">
                <div class="position-calculator">
                    <h3>Position Size Calculator</h3>
                    <p>Simple tool để tính position size cho từng trade</p>

                    <div class="quick-calc">
                        <h4>Quick Calculator</h4>
                        
                        <div class="input-row">
                            <div class="input-col">
                                <label>Account Size:</label>
                                <input type="number" id="psAccount" value="10000">
                            </div>
                            <div class="input-col">
                                <label>Risk (%):</label>
                                <input type="number" id="psRisk" value="1" step="0.1">
                            </div>
                        </div>

                        <div class="input-row">
                            <div class="input-col">
                                <label>Entry Price:</label>
                                <input type="number" id="psEntry" value="100" step="0.01">
                            </div>
                            <div class="input-col">
                                <label>Stop Loss:</label>
                                <input type="number" id="psSL" value="95" step="0.01">
                            </div>
                        </div>

                        <button class="btn-calc" onclick="calcPosition()">Calculate Position</button>

                        <div class="result-display" id="psResult" style="display: none;">
                            <div class="big-result">
                                <div class="big-label">Position Size</div>
                                <div class="big-value" id="psSize">0</div>
                                <div class="big-unit" id="psUnit">shares</div>
                            </div>
                            
                            <div class="details">
                                <p><strong>Risk Amount:</strong> <span id="psRiskAmt">$0</span></p>
                                <p><strong>Position Cost:</strong> <span id="psCost">$0</span></p>
                                <p><strong>Stop Distance:</strong> <span id="psDist">$0</span></p>
                                <p><strong>If SL Hit:</strong> <span id="psLoss" style="color:#e74c3c;">-$0</span></p>
                            </div>
                        </div>
                    </div>

                    <div class="comparison-table">
                        <h4>Position Size Comparison</h4>
                        <table id="psTable">
                            <thead>
                                <tr>
                                    <th>Risk %</th>
                                    <th>Risk $</th>
                                    <th>Position</th>
                                    <th>Cost</th>
                                </tr>
                            </thead>
                            <tbody id="psTableBody">
                                <tr><td colspan="4">Calculate to see comparison</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <style>
                .position-calculator { max-width: 700px; margin: 0 auto; }
                .quick-calc {
                    background: #34495e;
                    padding: 30px;
                    border-radius: 10px;
                    margin: 20px 0;
                }
                .input-row {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 20px;
                    margin: 15px 0;
                }
                .input-col label {
                    display: block;
                    color: #ecf0f1;
                    font-weight: bold;
                    margin-bottom: 8px;
                }
                .input-col input {
                    width: 100%;
                    padding: 12px;
                    border-radius: 5px;
                    border: 1px solid #95a5a6;
                    background: #2c3e50;
                    color: #ecf0f1;
                    font-size: 1.1em;
                }
                .btn-calc {
                    width: 100%;
                    padding: 15px;
                    background: #27ae60;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    font-size: 1.2em;
                    font-weight: bold;
                    cursor: pointer;
                    margin-top: 20px;
                }
                .btn-calc:hover { background: #229954; }
                .result-display {
                    margin-top: 30px;
                    padding: 25px;
                    background: #2c3e50;
                    border-radius: 10px;
                }
                .big-result {
                    text-align: center;
                    padding: 30px;
                    background: #27ae60;
                    border-radius: 10px;
                    margin-bottom: 20px;
                }
                .big-label {
                    color: rgba(255,255,255,0.8);
                    font-size: 0.9em;
                    margin-bottom: 10px;
                }
                .big-value {
                    color: white;
                    font-size: 3em;
                    font-weight: bold;
                }
                .big-unit {
                    color: rgba(255,255,255,0.8);
                    font-size: 1.1em;
                    margin-top: 5px;
                }
                .details {
                    padding: 15px;
                    background: #34495e;
                    border-radius: 5px;
                }
                .details p {
                    margin: 10px 0;
                    color: #ecf0f1;
                    display: flex;
                    justify-content: space-between;
                }
                .comparison-table {
                    margin-top: 30px;
                    background: #34495e;
                    padding: 20px;
                    border-radius: 10px;
                }
                .comparison-table table {
                    width: 100%;
                    border-collapse: collapse;
                }
                .comparison-table th {
                    background: #2c3e50;
                    padding: 12px;
                    color: #ecf0f1;
                    font-weight: bold;
                }
                .comparison-table td {
                    padding: 10px 12px;
                    border-bottom: 1px solid #2c3e50;
                    color: #95a5a6;
                }
                .comparison-table tr:hover {
                    background: #2c3e50;
                }
            </style>

            <script>
                function calcPosition() {
                    const account = parseFloat(document.getElementById('psAccount').value);
                    const risk = parseFloat(document.getElementById('psRisk').value);
                    const entry = parseFloat(document.getElementById('psEntry').value);
                    const sl = parseFloat(document.getElementById('psSL').value);

                    if (!account || !risk || !entry || !sl) {
                        alert('Please fill all fields!');
                        return;
                    }

                    const riskAmt = account * (risk / 100);
                    const distance = Math.abs(entry - sl);
                    const position = riskAmt / distance;
                    const cost = position * entry;

                    document.getElementById('psResult').style.display = 'block';
                    document.getElementById('psSize').textContent = position.toFixed(4);
                    document.getElementById('psUnit').textContent = 'units';
                    document.getElementById('psRiskAmt').textContent = '$' + riskAmt.toFixed(2);
                    document.getElementById('psCost').textContent = '$' + cost.toFixed(2);
                    document.getElementById('psDist').textContent = '$' + distance.toFixed(2);
                    document.getElementById('psLoss').textContent = '-$' + riskAmt.toFixed(2);

                    // Generate comparison table
                    const tbody = document.getElementById('psTableBody');
                    tbody.innerHTML = '';
                    [0.5, 1, 1.5, 2, 2.5].forEach(r => {
                        const amt = account * (r / 100);
                        const pos = amt / distance;
                        const c = pos * entry;
                        const row = \`
                            <tr>
                                <td>\${r}%</td>
                                <td>$\${amt.toFixed(2)}</td>
                                <td>\${pos.toFixed(4)}</td>
                                <td>$\${c.toFixed(2)}</td>
                            </tr>
                        \`;
                        tbody.innerHTML += row;
                    });
                }
            </script>
        `
    },

    'profit-loss': {
        title: '💰 Profit/Loss Calculator',
        description: 'Tính toán lợi nhuận và rủi ro tiềm năng',
        html: `
            <div class="simulator-container">
                <div class="pl-calculator">
                    <h3>Profit / Loss Calculator</h3>
                    
                    <div class="pl-inputs">
                        <div class="form-group">
                            <label>Direction:</label>
                            <select id="plDirection">
                                <option value="long">Long (Buy)</option>
                                <option value="short">Short (Sell)</option>
                            </select>
                        </div>

                        <div class="input-row">
                            <div class="input-col">
                                <label>Entry Price:</label>
                                <input type="number" id="plEntry" value="100" step="0.01">
                            </div>
                            <div class="input-col">
                                <label>Position Size:</label>
                                <input type="number" id="plSize" value="10" step="0.01">
                            </div>
                        </div>

                        <div class="input-row">
                            <div class="input-col">
                                <label>Stop Loss:</label>
                                <input type="number" id="plSL" value="95" step="0.01">
                            </div>
                            <div class="input-col">
                                <label>Take Profit:</label>
                                <input type="number" id="plTP" value="110" step="0.01">
                            </div>
                        </div>

                        <button class="btn-calc-pl" onclick="calculatePL()">Calculate P/L</button>

                        <div class="pl-results" id="plResults" style="display: none;">
                            <div class="result-grid">
                                <div class="result-box loss">
                                    <div class="box-label">Maximum Loss</div>
                                    <div class="box-value" id="plMaxLoss">$0</div>
                                    <div class="box-percent" id="plMaxLossPercent">0%</div>
                                </div>
                                <div class="result-box profit">
                                    <div class="box-label">Maximum Profit</div>
                                    <div class="box-value" id="plMaxProfit">$0</div>
                                    <div class="box-percent" id="plMaxProfitPercent">0%</div>
                                </div>
                            </div>

                            <div class="rr-display">
                                <div class="rr-label">Risk : Reward Ratio</div>
                                <div class="rr-value" id="plRR">1 : 0</div>
                                <div class="rr-verdict" id="plVerdict"></div>
                            </div>

                            <div class="breakeven-analysis">
                                <h4>Breakeven Analysis</h4>
                                <table>
                                    <tr>
                                        <td>Win Rate Needed (for breakeven):</td>
                                        <td id="plBreakeven">0%</td>
                                    </tr>
                                    <tr>
                                        <td>If Win Rate 50%:</td>
                                        <td id="pl50">$0</td>
                                    </tr>
                                    <tr>
                                        <td>If Win Rate 60%:</td>
                                        <td id="pl60">$0</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>
                .pl-calculator { max-width: 700px; margin: 0 auto; }
                .pl-inputs {
                    background: #34495e;
                    padding: 30px;
                    border-radius: 10px;
                }
                .btn-calc-pl {
                    width: 100%;
                    padding: 15px;
                    background: #9b59b6;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    font-size: 1.2em;
                    font-weight: bold;
                    cursor: pointer;
                    margin-top: 20px;
                }
                .btn-calc-pl:hover { background: #8e44ad; }
                .pl-results {
                    margin-top: 30px;
                }
                .result-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 20px;
                    margin-bottom: 30px;
                }
                .result-box {
                    padding: 25px;
                    border-radius: 10px;
                    text-align: center;
                }
                .result-box.loss { background: #e74c3c; }
                .result-box.profit { background: #27ae60; }
                .box-label {
                    color: rgba(255,255,255,0.8);
                    font-size: 0.9em;
                    margin-bottom: 10px;
                }
                .box-value {
                    color: white;
                    font-size: 2em;
                    font-weight: bold;
                }
                .box-percent {
                    color: rgba(255,255,255,0.8);
                    font-size: 1.1em;
                    margin-top: 5px;
                }
                .rr-display {
                    background: #2c3e50;
                    padding: 30px;
                    border-radius: 10px;
                    text-align: center;
                    margin-bottom: 20px;
                }
                .rr-label {
                    color: #95a5a6;
                    margin-bottom: 15px;
                }
                .rr-value {
                    color: #ecf0f1;
                    font-size: 3em;
                    font-weight: bold;
                }
                .rr-verdict {
                    margin-top: 15px;
                    padding: 10px;
                    border-radius: 5px;
                    font-weight: bold;
                }
                .breakeven-analysis {
                    background: #2c3e50;
                    padding: 20px;
                    border-radius: 10px;
                }
                .breakeven-analysis table {
                    width: 100%;
                    margin-top: 15px;
                }
                .breakeven-analysis td {
                    padding: 10px;
                    color: #ecf0f1;
                }
                .breakeven-analysis td:last-child {
                    text-align: right;
                    font-weight: bold;
                }
            </style>

            <script>
                function calculatePL() {
                    const direction = document.getElementById('plDirection').value;
                    const entry = parseFloat(document.getElementById('plEntry').value);
                    const size = parseFloat(document.getElementById('plSize').value);
                    const sl = parseFloat(document.getElementById('plSL').value);
                    const tp = parseFloat(document.getElementById('plTP').value);

                    if (!entry || !size || !sl || !tp) {
                        alert('Please fill all fields!');
                        return;
                    }

                    let maxLoss, maxProfit;
                    if (direction === 'long') {
                        maxLoss = (entry - sl) * size;
                        maxProfit = (tp - entry) * size;
                    } else {
                        maxLoss = (sl - entry) * size;
                        maxProfit = (entry - tp) * size;
                    }

                    const lossPercent = (maxLoss / (entry * size) * 100).toFixed(2);
                    const profitPercent = (maxProfit / (entry * size) * 100).toFixed(2);
                    const rrRatio = (maxProfit / maxLoss).toFixed(2);

                    document.getElementById('plResults').style.display = 'block';
                    document.getElementById('plMaxLoss').textContent = '-$' + maxLoss.toFixed(2);
                    document.getElementById('plMaxLossPercent').textContent = '(' + lossPercent + '%)';
                    document.getElementById('plMaxProfit').textContent = '+$' + maxProfit.toFixed(2);
                    document.getElementById('plMaxProfitPercent').textContent = '(' + profitPercent + '%)';
                    document.getElementById('plRR').textContent = '1 : ' + rrRatio;

                    // Verdict
                    const verdict = document.getElementById('plVerdict');
                    if (rrRatio >= 3) {
                        verdict.textContent = '🎯 Excellent R:R!';
                        verdict.style.background = '#27ae60';
                        verdict.style.color = 'white';
                    } else if (rrRatio >= 2) {
                        verdict.textContent = '✅ Good R:R';
                        verdict.style.background = '#3498db';
                        verdict.style.color = 'white';
                    } else if (rrRatio >= 1.5) {
                        verdict.textContent = '⚠️ Acceptable R:R';
                        verdict.style.background = '#f39c12';
                        verdict.style.color = 'white';
                    } else {
                        verdict.textContent = '❌ Poor R:R - Skip this trade';
                        verdict.style.background = '#e74c3c';
                        verdict.style.color = 'white';
                    }

                    // Breakeven
                    const breakeven = (100 / (1 + parseFloat(rrRatio))).toFixed(1);
                    const profit50 = ((maxProfit - maxLoss) / 2).toFixed(2);
                    const profit60 = (maxProfit * 0.6 - maxLoss * 0.4).toFixed(2);

                    document.getElementById('plBreakeven').textContent = breakeven + '%';
                    document.getElementById('pl50').textContent = (profit50 >= 0 ? '+' : '') + '$' + profit50;
                    document.getElementById('pl60').textContent = (profit60 >= 0 ? '+' : '') + '$' + profit60;
                }
            </script>
        `
    }
};

// Export
if (typeof window !== 'undefined') {
    window.tradingSimulators = tradingSimulators;
}
