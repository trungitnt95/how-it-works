// ==================== EARNING MODELS APP - MAIN CONTROLLER ====================

// Merge all model data
const allModels = [
    ...ancientModels,
    ...traditionalModels,
    ...industrialModels,
    ...modernModels,
    ...digitalModels,
    ...earningFormulas
];

// State
let currentLevel = 'beginner';

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
    const savedLevel = localStorage.getItem('earningModelsLevel');
    if (savedLevel) {
        currentLevel = savedLevel;
        document.getElementById('levelOverlay').classList.add('hidden');
        updateLevelBadge();
    }

    setupEventListeners();
    renderNodes();
    renderTimeline();
    renderCompare();
    renderFormulas();
    renderQuiz();
});

function setupEventListeners() {
    // Level selection
    document.querySelectorAll('.level-card').forEach(card => {
        card.addEventListener('click', () => {
            currentLevel = card.dataset.level;
            localStorage.setItem('earningModelsLevel', currentLevel);
            document.getElementById('levelOverlay').classList.add('hidden');
            updateLevelBadge();
        });
    });

    // Header buttons
    document.getElementById('changeLevelBtn').addEventListener('click', () => {
        document.getElementById('levelOverlay').classList.remove('hidden');
    });

    document.getElementById('timelineBtn').addEventListener('click', () => {
        document.getElementById('timelineModal').classList.add('active');
    });

    document.getElementById('formulaBtn').addEventListener('click', () => {
        document.getElementById('formulaModal').classList.add('active');
    });

    document.getElementById('compareBtn').addEventListener('click', () => {
        document.getElementById('compareModal').classList.add('active');
    });

    document.getElementById('quizBtn').addEventListener('click', () => {
        document.getElementById('quizModal').classList.add('active');
    });

    // Modal close buttons
    document.getElementById('modalClose').addEventListener('click', () => {
        document.getElementById('modal').classList.remove('active');
    });
    document.getElementById('timelineClose').addEventListener('click', () => {
        document.getElementById('timelineModal').classList.remove('active');
    });
    document.getElementById('formulaClose').addEventListener('click', () => {
        document.getElementById('formulaModal').classList.remove('active');
    });
    document.getElementById('compareClose').addEventListener('click', () => {
        document.getElementById('compareModal').classList.remove('active');
    });
    document.getElementById('quizClose').addEventListener('click', () => {
        document.getElementById('quizModal').classList.remove('active');
    });

    // Close on overlay click
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) overlay.classList.remove('active');
        });
    });

    // Category filter
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filterNodes(btn.dataset.category);
        });
    });

    // Keyboard: Escape to close modals
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            document.querySelectorAll('.modal-overlay.active').forEach(m => m.classList.remove('active'));
        }
    });
}

function updateLevelBadge() {
    const badge = document.getElementById('levelBadge');
    const labels = { beginner: '🌱 Người Mới', intermediate: '🌿 Trung Cấp', advanced: '🌳 Nâng Cao' };
    badge.textContent = labels[currentLevel] || labels.beginner;
}

// ==================== RENDER NODES ====================
function renderNodes() {
    const grid = document.getElementById('nodeGrid');
    grid.innerHTML = allModels.map((model, i) => `
        <div class="node-card" data-category="${model.category}" data-id="${model.id}" onclick="openDetail('${model.id}')" style="animation-delay: ${i * 0.05}s">
            <div class="node-icon">${model.icon}</div>
            <div class="node-era">${model.era}</div>
            <div class="node-title">${model.title}</div>
            <div class="node-subtitle">${model.subtitle}</div>
            <div class="node-description">${model.description}</div>
            <div class="node-formula">${model.formula}</div>
            <div class="node-tags">
                ${model.tags.map(t => `<span class="node-tag">${t}</span>`).join('')}
            </div>
            <div class="node-stats">
                <span>Scale: ${'⭐'.repeat(model.scalability)}${'☆'.repeat(5 - model.scalability)}</span>
                <span class="node-income">${model.incomeLevel}</span>
            </div>
        </div>
    `).join('');
}

function filterNodes(category) {
    document.querySelectorAll('.node-card').forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
}

// ==================== DETAIL MODAL ====================
function openDetail(id) {
    const model = allModels.find(m => m.id === id);
    if (!model || !model.detail) return;

    const d = model.detail;
    const body = document.getElementById('modalBody');

    let html = `
        <h2>${model.icon} ${model.title}</h2>
        <p style="color:rgba(255,255,255,0.5); font-size:0.85rem; margin-bottom:1rem">${model.era} • ${model.subtitle}</p>

        <h3>📋 Tổng Quan</h3>
        <p>${d.overview.replace(/\n/g, '<br>')}</p>

        <h3>⚙️ Cách Hoạt Động</h3>
        <ol>${d.howItWorks.map(s => `<li>${s}</li>`).join('')}</ol>

        <div class="detail-formula-box">
            <div class="formula-text">${d.formula.text}</div>
            <div class="formula-explain">${d.formula.explain}</div>
        </div>`;

    // Examples
    if (d.examples && d.examples.length) {
        html += '<h3>📖 Ví Dụ Thực Tế</h3>';
        d.examples.forEach(ex => {
            html += `<div class="example-box">
                <div class="example-title">${ex.title}</div>
                <p>${ex.desc}</p>
            </div>`;
        });
    }

    // Pros/Cons
    html += `<h3>⚖️ Ưu & Nhược Điểm</h3>
    <div class="pros-cons">
        <div class="pros">
            <h5>✅ Ưu điểm</h5>
            <ul>${d.pros.map(p => `<li>${p}</li>`).join('')}</ul>
        </div>
        <div class="cons">
            <h5>❌ Nhược điểm</h5>
            <ul>${d.cons.map(c => `<li>${c}</li>`).join('')}</ul>
        </div>
    </div>`;

    // Scalability bar
    html += `<div class="income-scale">
        <span class="scale-label">Scalability</span>
        <div class="scale-bar"><div class="scale-fill" style="width:${model.scalability * 20}%"></div></div>
        <span class="scale-value">${model.scalability}/5</span>
    </div>`;

    // Modern version
    if (d.modernVersion) {
        html += `<h3>🔄 Phiên Bản Hiện Đại</h3><p>${d.modernVersion}</p>`;
    }

    body.innerHTML = html;
    document.getElementById('modal').classList.add('active');
}

// ==================== COMPARE TABLE ====================
function renderCompare() {
    const body = document.getElementById('compareBody');
    let html = `<h2>⚖️ So Sánh Các Mô Hình</h2>
    <p style="color:rgba(255,255,255,0.6); margin-bottom:1.5rem">So sánh nhanh các mô hình kiếm tiền trên nhiều tiêu chí</p>
    <div style="overflow-x:auto">
    <table class="compare-table">
        <thead>
            <tr>
                <th>Mô hình</th>
                <th>Vốn cần</th>
                <th>Thời gian</th>
                <th>Scalability</th>
                <th>Rủi ro</th>
                <th>Thu nhập tiềm năng</th>
                <th>Passive?</th>
            </tr>
        </thead>
        <tbody>`;

    const compareData = [
        { name: '👷 Lao động/Lương', capital: '⭐', time: '⭐⭐⭐', scale: '⭐', risk: '⭐', income: '⭐⭐', passive: '❌' },
        { name: '⚒️ Thủ công/Chuyên gia', capital: '⭐⭐', time: '⭐⭐⭐⭐', scale: '⭐⭐', risk: '⭐⭐', income: '⭐⭐⭐', passive: '❌' },
        { name: '🐪 Thương mại/Buôn bán', capital: '⭐⭐⭐', time: '⭐⭐', scale: '⭐⭐⭐⭐', risk: '⭐⭐⭐', income: '⭐⭐⭐⭐', passive: '❌' },
        { name: '🏘️ Cho thuê BĐS', capital: '⭐⭐⭐⭐⭐', time: '⭐⭐', scale: '⭐⭐⭐⭐', risk: '⭐⭐', income: '⭐⭐⭐⭐', passive: '✅' },
        { name: '🏦 Cho vay/Đầu tư', capital: '⭐⭐⭐⭐⭐', time: '⭐', scale: '⭐⭐⭐⭐⭐', risk: '⭐⭐⭐', income: '⭐⭐⭐⭐⭐', passive: '✅' },
        { name: '📊 Cổ phiếu/ETF', capital: '⭐⭐⭐', time: '⭐', scale: '⭐⭐⭐⭐⭐', risk: '⭐⭐⭐', income: '⭐⭐⭐⭐', passive: '✅' },
        { name: '🏭 Sản xuất', capital: '⭐⭐⭐⭐⭐', time: '⭐⭐⭐', scale: '⭐⭐⭐⭐⭐', risk: '⭐⭐⭐', income: '⭐⭐⭐⭐⭐', passive: '❌' },
        { name: '🍟 Nhượng quyền', capital: '⭐⭐⭐⭐', time: '⭐⭐⭐', scale: '⭐⭐⭐⭐⭐', risk: '⭐⭐', income: '⭐⭐⭐⭐⭐', passive: '✅' },
        { name: '📝 Sở hữu trí tuệ', capital: '⭐', time: '⭐⭐⭐⭐', scale: '⭐⭐⭐⭐⭐', risk: '⭐⭐⭐⭐', income: '⭐⭐⭐⭐⭐', passive: '✅' },
        { name: '🌐 Platform/Marketplace', capital: '⭐⭐⭐⭐', time: '⭐⭐⭐⭐', scale: '⭐⭐⭐⭐⭐', risk: '⭐⭐⭐⭐', income: '⭐⭐⭐⭐⭐', passive: '✅' },
        { name: '💎 SaaS/Subscription', capital: '⭐⭐⭐', time: '⭐⭐⭐⭐', scale: '⭐⭐⭐⭐⭐', risk: '⭐⭐⭐', income: '⭐⭐⭐⭐⭐', passive: '✅' },
        { name: '🎬 Creator Economy', capital: '⭐', time: '⭐⭐⭐⭐', scale: '⭐⭐⭐⭐⭐', risk: '⭐⭐⭐', income: '⭐⭐⭐⭐', passive: '⚡' },
        { name: '₿ Crypto/Web3', capital: '⭐⭐', time: '⭐⭐', scale: '⭐⭐⭐⭐', risk: '⭐⭐⭐⭐⭐', income: '⭐⭐⭐⭐⭐', passive: '⚡' },
        { name: '🤖 AI/Automation', capital: '⭐⭐', time: '⭐⭐⭐', scale: '⭐⭐⭐⭐⭐', risk: '⭐⭐⭐', income: '⭐⭐⭐⭐⭐', passive: '✅' },
    ];

    compareData.forEach(row => {
        html += `<tr>
            <td><strong>${row.name}</strong></td>
            <td class="rating-stars">${row.capital}</td>
            <td class="rating-stars">${row.time}</td>
            <td class="rating-stars">${row.scale}</td>
            <td class="rating-stars">${row.risk}</td>
            <td class="rating-stars">${row.income}</td>
            <td>${row.passive}</td>
        </tr>`;
    });

    html += `</tbody></table></div>
    <p style="color:rgba(255,255,255,0.4); font-size:0.75rem; margin-top:1rem">⭐ = Thấp/Ít &nbsp; ⭐⭐⭐⭐⭐ = Cao/Nhiều &nbsp; ✅ = Có thể passive &nbsp; ⚡ = Bán passive &nbsp; ❌ = Active</p>`;

    body.innerHTML = html;
}

// ==================== FORMULA OVERVIEW ====================
function renderFormulas() {
    const body = document.getElementById('formulaBody');
    let html = `<h2>📐 Công Thức Kiếm Tiền</h2>
    <p style="color:rgba(255,255,255,0.6); margin-bottom:1.5rem">Tất cả cách kiếm tiền đều quy về những công thức này</p>`;

    // Master formula
    html += `<div class="detail-formula-box" style="margin-bottom:2rem">
        <div class="formula-text" style="font-size:1.5rem">💰 Income = Value × Leverage × Time</div>
        <div class="formula-explain">Công thức gốc: Giá trị bạn tạo ra × Đòn bẩy bạn dùng × Thời gian tích lũy</div>
    </div>`;

    // Income types
    html += `<h3>📊 4 Loại Thu Nhập</h3>
    <div style="display:grid; grid-template-columns:1fr 1fr; gap:1rem; margin:1rem 0">
        <div class="example-box">
            <div class="example-title">1️⃣ Active Income (chủ động)</div>
            <p>Đổi thời gian lấy tiền. Ngừng làm = ngừng thu.<br>VD: Lương, freelance, tư vấn.</p>
        </div>
        <div class="example-box">
            <div class="example-title">2️⃣ Passive Income (thụ động)</div>
            <p>Xây dựng trước, thu tiền sau. Không cần làm trực tiếp.<br>VD: Cổ tức, tiền thuê, royalty.</p>
        </div>
        <div class="example-box">
            <div class="example-title">3️⃣ Portfolio Income (đầu tư)</div>
            <p>Tiền sinh ra tiền. Lãi kép là sức mạnh.<br>VD: Cổ phiếu, trái phiếu, crypto.</p>
        </div>
        <div class="example-box">
            <div class="example-title">4️⃣ Leveraged Income (đòn bẩy)</div>
            <p>1 input → nhiều output. Code, media, team, vốn.<br>VD: SaaS, YouTube, franchise.</p>
        </div>
    </div>`;

    // Wealth equation
    html += `<h3>💡 Phương Trình Giàu Có</h3>
    <div class="detail-formula-box">
        <div class="formula-text">Wealth = (Income - Spending) × ROI^Years</div>
        <div class="formula-explain">Giàu = (Kiếm được - Chi tiêu) × Đầu tư hiệu quả ^ Thời gian. Cả 4 yếu tố đều quan trọng.</div>
    </div>`;

    // Path to wealth
    html += `<h3>🗺️ Lộ Trình Kiếm Tiền Đề Xuất</h3>
    <ol style="line-height:2.2">
        <li><strong>Giai đoạn 1:</strong> Bán thời gian → Tích lũy kỹ năng + vốn (Lao động/Freelance)</li>
        <li><strong>Giai đoạn 2:</strong> Bán kỹ năng hiếm → Thu nhập cao (Chuyên gia/Tư vấn)</li>
        <li><strong>Giai đoạn 3:</strong> Xây tài sản/hệ thống → Passive income (IP/SaaS/BĐS)</li>
        <li><strong>Giai đoạn 4:</strong> Dùng đòn bẩy → Scale (Platform/Đầu tư/Franchise)</li>
        <li><strong>Giai đoạn 5:</strong> Tiền làm việc cho bạn → Tự do tài chính (FIRE)</li>
    </ol>`;

    body.innerHTML = html;
}
