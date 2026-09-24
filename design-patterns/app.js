// ==================== DESIGN PATTERNS APP - MAIN CONTROLLER ====================
// Requires (theo thứ tự nạp trong design-patterns.html):
//   modules/patterns-data.js    → `patterns`  (nội dung chính + code mẫu)
//   modules/patterns-visuals.js → `patternVisuals`, `patternDecisionTrees`, `patternComparisons`
//   modules/scenes.js           → `renderPatternScene()`, `patternScenes` (hình minh họa SVG)
//   modules/practice-data.js    → `practiceBank`, `practiceTypes`
// Mermaid được nạp từ CDN với `defer`; Diagrams.render() tự chờ thư viện sẵn sàng.

const CATEGORY_INFO = {
    creational: { icon: '🏗️', label: 'Creational', question: 'Tạo object thế nào?' },
    structural: { icon: '🧱', label: 'Structural', question: 'Ghép object thế nào?' },
    behavioral: { icon: '🎭', label: 'Behavioral', question: 'Object chia việc & nói chuyện thế nào?' }
};

const DIFFICULTY_TEXT = { easy: '⭐ Dễ', medium: '⭐⭐ Trung bình', hard: '⭐⭐⭐ Khó' };

const levelTexts = {
    beginner: '🌱 Người Mới',
    intermediate: '🌿 Trung Cấp',
    advanced: '🌳 Nâng Cao'
};
const LEVEL_TO_DIFFICULTY = { beginner: 1, intermediate: 2, advanced: 3 };

const STORAGE = {
    level: 'designPatternLevel',
    bookmarks: 'bookmarkedPatterns',
    mastery: 'designPatternMastery'
};

// Gộp nội dung chính + dữ liệu hình ảnh thành một danh sách phẳng
const patternList = Object.entries(patterns).flatMap(([category, list]) =>
    list.map(p => Object.assign({ category }, p, patternVisuals[p.id]))
);
const byId = new Map(patternList.map(p => [p.id, p]));

// ==================== STORAGE (an toàn khi bị chặn) ====================

const store = {
    get(key, fallback) {
        try {
            const raw = localStorage.getItem(key);
            return raw === null ? fallback : JSON.parse(raw);
        } catch (e) {
            return fallback;
        }
    },
    set(key, value) {
        try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) { /* trình duyệt chặn storage */ }
    },
    getRaw(key) {
        try { return localStorage.getItem(key); } catch (e) { return null; }
    },
    setRaw(key, value) {
        try { localStorage.setItem(key, value); } catch (e) { /* trình duyệt chặn storage */ }
    }
};

// ==================== STATE ====================

let currentLevel = store.getRaw(STORAGE.level);
if (!levelTexts[currentLevel]) currentLevel = null;
const bookmarks = new Set(store.get(STORAGE.bookmarks, []).filter(id => byId.has(id)));
const mastery = store.get(STORAGE.mastery, {}) || {};

const ui = {
    category: 'all',
    query: '',
    onlyBookmarked: false,
    modalId: null,
    finderTab: 'creational'
};

// ==================== DOM ====================

const $ = id => document.getElementById(id);
const levelOverlay = $('levelOverlay');
const levelBadge = $('levelBadge');
const patternModal = $('patternModal');
const modalBody = $('modalBody');
const modalNav = $('modalNav');
const searchInput = $('searchInput');
const practiceStage = $('practiceStage');
const practiceSetup = $('practiceSetup');
const zoomOverlay = $('zoomOverlay');

// ==================== UTILITIES ====================

function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function pick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function normalize(s) {
    return String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/đ/g, 'd');
}

function stripTags(html) {
    return String(html).replace(/<[^>]*>/g, '');
}

function label(id) {
    const p = byId.get(id);
    return `${p.icon} ${p.name}`;
}

function categoryName(category) {
    return category.charAt(0).toUpperCase() + category.slice(1);
}

// ==================== TÔ MÀU CODE TYPESCRIPT ====================

const TS_KEYWORDS = new Set(('abstract as async await break case catch class const constructor continue default delete do else enum export extends ' +
    'false finally for from function get if implements import in instanceof interface let new null of private protected public readonly ' +
    'return set static super switch this throw true try type typeof undefined var void while yield number string boolean any never unknown').split(' '));

const BLANK_MARK = '/* ??? */';

function highlightTS(code) {
    const re = /(\/\/[^\n]*|\/\*[\s\S]*?\*\/)|(`(?:\\[\s\S]|[^`\\])*`|"(?:\\.|[^"\\\n])*"|'(?:\\.|[^'\\\n])*')|\b(\d[\d_]*(?:\.\d+)?)\b|([A-Za-z_$][\w$]*)/g;
    let out = '';
    let last = 0;
    let m;
    while ((m = re.exec(code))) {
        out += esc(code.slice(last, m.index));
        if (m[1]) {
            out += m[1] === BLANK_MARK
                ? '<span class="code-blank">▢ ▢ ▢ ?</span>'
                : `<span class="tok-com">${esc(m[1])}</span>`;
        } else if (m[2]) {
            out += `<span class="tok-str">${esc(m[2])}</span>`;
        } else if (m[3]) {
            out += `<span class="tok-num">${esc(m[3])}</span>`;
        } else {
            const w = m[4];
            const next = code.slice(re.lastIndex).match(/^\s*(\S)/);
            if (TS_KEYWORDS.has(w)) out += `<span class="tok-kw">${w}</span>`;
            else if (/^[A-Z]/.test(w)) out += `<span class="tok-cls">${w}</span>`;
            else if (next && next[1] === '(') out += `<span class="tok-fn">${w}</span>`;
            else out += w;
        }
        last = re.lastIndex;
    }
    return out + esc(code.slice(last));
}

function codeBlock(code, extraClass = '') {
    return `<div class="code-block ${extraClass}"><pre><code>${highlightTS(code)}</code></pre></div>`;
}

// ==================== MERMAID DIAGRAMS ====================

const Diagrams = (() => {
    const CLASS_DEFS = `
    classDef bad fill:#4a1f28,stroke:#e74c3c,color:#fde8ea
    classDef good fill:#173d2c,stroke:#2ecc71,color:#e6f8ee
    classDef core fill:#2a2350,stroke:#9b59b6,color:#f0e9fb
    classDef muted fill:#1f2340,stroke:#6c7293,color:#b8bdd6,stroke-dasharray:4 3`;
    let seq = 0;
    let initialized = false;
    let queue = Promise.resolve();
    let waiting = null;

    function waitForMermaid() {
        if (window.mermaid) return Promise.resolve(true);
        if (!waiting) {
            waiting = new Promise(resolve => {
                const script = document.getElementById('mermaidScript');
                if (!script) return resolve(false);
                script.addEventListener('load', () => resolve(!!window.mermaid));
                script.addEventListener('error', () => resolve(false));
                setTimeout(() => resolve(!!window.mermaid), 20000);
            });
        }
        return waiting;
    }

    function init() {
        if (initialized) return;
        window.mermaid.initialize({
            startOnLoad: false,
            securityLevel: 'strict',
            theme: 'base',
            themeVariables: {
                darkMode: true,
                background: '#141833',
                fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                fontSize: '14px',
                primaryColor: '#232850',
                primaryTextColor: '#eef0ff',
                primaryBorderColor: '#6c63c7',
                secondaryColor: '#1d3350',
                tertiaryColor: '#1b1f3b',
                lineColor: '#9aa3d9',
                textColor: '#e6e8ff',
                mainBkg: '#232850',
                nodeBorder: '#6c63c7',
                clusterBkg: '#191d3a',
                clusterBorder: '#4a4f80',
                edgeLabelBackground: '#161a36',
                titleColor: '#eef0ff',
                noteBkgColor: '#3a3257',
                noteTextColor: '#f3eaff',
                noteBorderColor: '#9b59b6',
                actorBkg: '#232850',
                actorBorder: '#6c63c7',
                actorTextColor: '#eef0ff',
                actorLineColor: '#56608f',
                signalColor: '#c9cff5',
                signalTextColor: '#e6e8ff',
                labelBoxBkgColor: '#232850',
                labelBoxBorderColor: '#6c63c7',
                labelTextColor: '#eef0ff',
                loopTextColor: '#e6e8ff',
                activationBkgColor: '#2f3570',
                activationBorderColor: '#9b59b6',
                sequenceNumberColor: '#141833',
                classText: '#eef0ff'
            },
            flowchart: { curve: 'basis', htmlLabels: true, padding: 12 },
            sequence: { mirrorActors: false, messageAlign: 'center', useMaxWidth: true }
        });
        initialized = true;
    }

    function prepare(src) {
        return /^flowchart/.test(src) ? src + CLASS_DEFS : src;
    }

    // Giữ chữ không nhỏ hơn ~70% kích thước gốc: trên màn hẹp thì cuộn ngang thay vì co quá nhỏ
    function fit(host) {
        const svg = host.querySelector('svg');
        if (!svg) return;
        const vb = svg.viewBox && svg.viewBox.baseVal;
        const natural = vb && vb.width ? vb.width : svg.getBoundingClientRect().width;
        if (!natural) return;
        svg.style.maxWidth = Math.round(natural) + 'px';
        svg.style.minWidth = Math.round(natural * 0.7) + 'px';
        svg.dataset.naturalWidth = Math.round(natural);
        // Sơ đồ rộng hơn khung: mở ở giữa để thấy node gốc
        requestAnimationFrame(() => {
            if (host.scrollWidth > host.clientWidth) host.scrollLeft = (host.scrollWidth - host.clientWidth) / 2;
        });
    }

    function fallback(host, src) {
        host.classList.remove('loading');
        host.classList.add('failed');
        host.innerHTML = `<p class="diagram-fallback">⚠️ Không tải được thư viện vẽ sơ đồ (cần kết nối mạng). Mã nguồn sơ đồ:</p><pre>${esc(src)}</pre>`;
    }

    function render(host, src) {
        host.classList.remove('done', 'failed');
        host.classList.add('loading');
        host.innerHTML = '<div class="diagram-loading">Đang vẽ sơ đồ…</div>';
        queue = queue.then(async () => {
            if (!host.isConnected) return;
            const ok = await waitForMermaid();
            if (!host.isConnected) return;
            if (!ok) return fallback(host, src);
            try {
                init();
                const { svg } = await window.mermaid.render('dpm-' + (++seq), prepare(src));
                if (!host.isConnected) return;
                host.innerHTML = svg;
                host.classList.remove('loading');
                host.classList.add('done');
                fit(host);
                host.dispatchEvent(new CustomEvent('diagram:rendered'));
            } catch (e) {
                fallback(host, src);
            }
        });
        return queue;
    }

    // Vẽ mọi <div class="mmd" data-mmd="key"> trong root theo bảng nguồn
    function mount(root, sources) {
        root.querySelectorAll('.mmd[data-mmd]').forEach(host => {
            const src = sources[host.dataset.mmd];
            if (src && !host.dataset.lazy) render(host, src);
        });
    }

    return { render, mount };
})();

const INTRO_DIAGRAM = `flowchart TB
    P["😣 Vấn đề hay gặp<br/>if/else chằng chịt · class bùng nổ<br/>sửa 1 chỗ vỡ 10 chỗ"]:::bad
    K["📘 Design Pattern<br/>tên gọi + cấu trúc mẫu<br/>+ khi nào nên dùng"]:::core
    S["😌 Code dễ đổi, dễ đọc, dễ test<br/>cả team nói cùng một ngôn ngữ"]:::good
    P -->|"nhận ra vấn đề"| K
    K -->|"áp dụng đúng chỗ"| S`;

const UML_LEGEND = `classDiagram
    direction LR
    Parent <|-- Child : kế thừa
    IShape <|.. Circle : hiện thực interface
    Car --> Engine : giữ tham chiếu
    Factory ..> Product : dùng / tạo ra
    Folder o-- File : chứa nhiều`;

// ==================== ZOOM SƠ ĐỒ / HÌNH ====================

function openZoom(svg, title) {
    const clone = svg.cloneNode(true);
    const natural = +svg.dataset.naturalWidth || (svg.viewBox && svg.viewBox.baseVal && svg.viewBox.baseVal.width) || 800;
    clone.removeAttribute('id');
    clone.style.maxWidth = 'none';
    clone.style.minWidth = '0';
    clone.style.width = Math.max(natural * 1.25, Math.min(window.innerWidth - 48, natural * 1.6)) + 'px';
    clone.style.height = 'auto';
    $('zoomTitle').textContent = title || 'Sơ đồ';
    const body = $('zoomBody');
    body.innerHTML = '';
    body.appendChild(clone);
    zoomOverlay.classList.add('active');
    zoomOverlay.setAttribute('aria-hidden', 'false');
}

function closeZoom() {
    zoomOverlay.classList.remove('active');
    zoomOverlay.setAttribute('aria-hidden', 'true');
    $('zoomBody').innerHTML = '';
}

// ==================== MASTERY (MỨC THÀNH THẠO) ====================

function masteryOf(id) {
    const m = mastery[id];
    if (!m || !m.t) return null;
    return { ...m, pct: Math.round((100 * m.c) / m.t) };
}

function masteryClass(id) {
    const m = masteryOf(id);
    if (!m) return 'lv-none';
    return m.pct >= 80 ? 'lv-high' : m.pct >= 50 ? 'lv-mid' : 'lv-low';
}

function masteryText(id) {
    const m = masteryOf(id);
    return m ? `🎯 ${m.pct}% (${m.c}/${m.t})` : '🎯 Chưa luyện';
}

function recordAnswer(pid, dir, ok) {
    const m = mastery[pid] || (mastery[pid] = { c: 0, t: 0, fc: 0, ft: 0, rc: 0, rt: 0 });
    m.t++;
    if (ok) m.c++;
    if (dir === 'forward') {
        m.ft++;
        if (ok) m.fc++;
    } else {
        m.rt++;
        if (ok) m.rc++;
    }
    store.set(STORAGE.mastery, mastery);
    refreshMastery(pid);
}

function refreshMastery(pid) {
    const ids = pid ? [pid] : patternList.map(p => p.id);
    ids.forEach(id => {
        const cls = masteryClass(id);
        document.querySelectorAll(`[data-mastery="${id}"]`).forEach(el => {
            el.className = el.className.replace(/\blv-\w+\b/g, '').trim() + ' ' + cls;
            if (el.classList.contains('mastery-chip')) el.textContent = masteryText(id);
        });
    });
    renderMasteryGrid();
}

function renderMasteryGrid() {
    $('masteryGrid').innerHTML = patternList.map(p => {
        const m = masteryOf(p.id);
        const pct = m ? m.pct : 0;
        const dirs = m ? `⬅️ ${m.rc}/${m.rt} · ➡️ ${m.fc}/${m.ft}` : 'chưa có dữ liệu';
        return `<button class="mastery-cell ${masteryClass(p.id)}" data-open="${p.id}" title="Xem ${esc(p.name)}">
            <span class="mc-top"><span class="mc-icon">${p.icon}</span><span class="mc-name">${esc(p.name)}</span><span class="mc-pct">${m ? pct + '%' : '—'}</span></span>
            <span class="mc-bar"><i style="width:${pct}%"></i></span>
            <span class="mc-dirs">${dirs}</span>
        </button>`;
    }).join('');
}

// ==================== LEVEL ====================

function applyLevel(level) {
    currentLevel = level;
    store.setRaw(STORAGE.level, level);
    levelBadge.textContent = levelTexts[level];
    Practice.setDefaultLevel(LEVEL_TO_DIFFICULTY[level]);
}

function showLevelSelection() {
    levelOverlay.classList.remove('hidden');
}

// ==================== TỔNG QUAN: BẢN ĐỒ PATTERN ====================

function renderPatternMap() {
    $('patternMap').innerHTML = Object.entries(CATEGORY_INFO).map(([cat, info]) => `
        <div class="map-col ${cat}">
            <div class="map-head">
                <span class="map-icon">${info.icon}</span>
                <div><strong>${info.label}</strong><small>${info.question}</small></div>
            </div>
            <div class="map-chips">
                ${patternList.filter(p => p.category === cat).map(p => `
                    <button class="map-chip" data-open="${p.id}" title="${esc(p.nick)}">
                        <span>${p.icon}</span>${esc(p.name)}<i class="dot ${masteryClass(p.id)}" data-mastery="${p.id}"></i>
                    </button>`).join('')}
            </div>
        </div>`).join('');
}

// ==================== CHỌN PATTERN (CÂY QUYẾT ĐỊNH) ====================

function renderFinderTabs() {
    $('finderTabs').innerHTML = patternDecisionTrees.map(t =>
        `<button class="tab-btn ${t.id === ui.finderTab ? 'active' : ''}" role="tab" data-finder="${t.id}" aria-selected="${t.id === ui.finderTab}">${t.label}</button>`
    ).join('');
    renderFinder();
}

function renderFinder() {
    const tree = patternDecisionTrees.find(t => t.id === ui.finderTab);
    $('finderQuestion').textContent = tree.question;
    const host = $('finderDiagram');
    host.innerHTML = `<div class="box-bar"><span>Cây quyết định · bấm vào pattern để mở</span><button class="zoom-btn" title="Phóng to">⤢</button></div><div class="mmd"></div>`;
    const mmd = host.querySelector('.mmd');
    mmd.addEventListener('diagram:rendered', () => linkFinderNodes(mmd), { once: true });
    Diagrams.render(mmd, tree.diagram);
}

// Gắn click cho các node lá: id node trong Mermaid = id pattern (dấu "-" thay bằng "_")
function linkFinderNodes(host) {
    host.querySelectorAll('g.node').forEach(node => {
        const raw = node.dataset.id || ((node.id || '').match(/flowchart-([A-Za-z0-9_]+)-\d+$/) || [])[1];
        const id = raw && raw.replace(/_/g, '-');
        if (!id || !byId.has(id)) return;
        node.classList.add('clickable');
        node.setAttribute('tabindex', '0');
        node.setAttribute('role', 'button');
        node.setAttribute('aria-label', 'Xem chi tiết ' + byId.get(id).name);
        node.addEventListener('click', () => openPatternModal(id));
        node.addEventListener('keydown', e => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openPatternModal(id);
            }
        });
    });
}

// ==================== THẺ PATTERN ====================

const searchIndex = new Map(patternList.map(p => [p.id, normalize([
    p.name, p.nick, p.shortDesc, p.realWorldAnalogy, p.keyIdea, p.category,
    p.useCases.join(' '), p.inTheWild.join(' ')
].join(' '))]));

function renderPatterns() {
    Object.keys(CATEGORY_INFO).forEach(cat => {
        $(cat + 'Grid').innerHTML = patternList.filter(p => p.category === cat).map(createPatternCard).join('');
    });
    applyFilters();
}

function createPatternCard(p) {
    const saved = bookmarks.has(p.id);
    return `
        <article class="pattern-card ${p.category}" data-pattern-id="${p.id}" tabindex="0" aria-label="Xem chi tiết ${esc(p.name)}">
            <div class="card-thumb" aria-hidden="true">${renderPatternScene(p.id, p.name)}</div>
            <div class="card-header">
                <span class="card-icon">${p.icon}</span>
                <div class="card-title-section">
                    <h4 class="card-title">${esc(p.name)}</h4>
                    <div class="card-nick">${esc(p.nick)}</div>
                </div>
                <button class="bookmark-btn ${saved ? 'on' : ''}" data-bookmark="${p.id}" aria-pressed="${saved}" title="${saved ? 'Bỏ lưu' : 'Lưu pattern'}">${saved ? '★' : '☆'}</button>
            </div>
            <p class="card-description">${esc(p.shortDesc)}</p>
            <div class="card-meta">
                <span class="card-category ${p.category}">${categoryName(p.category)}</span>
                <span class="difficulty-badge ${p.difficulty}">${DIFFICULTY_TEXT[p.difficulty]}</span>
                <span class="mastery-chip ${masteryClass(p.id)}" data-mastery="${p.id}">${masteryText(p.id)}</span>
            </div>
            <div class="card-footer">
                <button class="learn-btn">Xem hình & sơ đồ →</button>
                <button class="mini-practice-btn" data-practice="${p.id}" title="Luyện riêng pattern này">🏋️ Luyện</button>
            </div>
        </article>`;
}

function applyFilters() {
    const q = normalize(ui.query.trim());
    let visibleTotal = 0;
    document.querySelectorAll('.category-section').forEach(section => {
        const catOk = ui.category === 'all' || section.dataset.category === ui.category;
        let visible = 0;
        section.querySelectorAll('.pattern-card').forEach(card => {
            const id = card.dataset.patternId;
            const ok = catOk &&
                (!ui.onlyBookmarked || bookmarks.has(id)) &&
                (!q || searchIndex.get(id).includes(q));
            card.hidden = !ok;
            if (ok) visible++;
        });
        section.hidden = visible === 0;
        visibleTotal += visible;
    });
    $('emptyState').hidden = visibleTotal > 0;
}

function toggleBookmark(id) {
    if (bookmarks.has(id)) bookmarks.delete(id);
    else bookmarks.add(id);
    store.set(STORAGE.bookmarks, [...bookmarks]);
    const saved = bookmarks.has(id);
    document.querySelectorAll(`[data-bookmark="${id}"]`).forEach(btn => {
        btn.classList.toggle('on', saved);
        btn.setAttribute('aria-pressed', saved);
        btn.textContent = saved ? '★' : '☆';
        btn.title = saved ? 'Bỏ lưu' : 'Lưu pattern';
    });
    updateBookmarkHeader();
    applyFilters();
}

function updateBookmarkHeader() {
    $('bookmarkCount').textContent = bookmarks.size;
    const btn = $('bookmarkBtn');
    btn.classList.toggle('active', ui.onlyBookmarked);
    btn.setAttribute('aria-pressed', ui.onlyBookmarked);
    if (ui.modalId) {
        const saved = bookmarks.has(ui.modalId);
        const mb = $('modalBookmark');
        mb.textContent = saved ? '★' : '☆';
        mb.classList.toggle('on', saved);
        mb.setAttribute('aria-pressed', saved);
    }
}

// ==================== BẢNG SO SÁNH ====================

function renderCompare() {
    $('compareGrid').innerHTML = patternComparisons.map(c => `
        <article class="compare-card">
            <h3>${c.title}</h3>
            <p class="compare-q">💡 ${esc(c.question)}</p>
            <div class="table-wrap">
                <table class="compare-table">
                    <thead><tr>${c.cols.map(col => `<th scope="col">${esc(col)}</th>`).join('')}</tr></thead>
                    <tbody>
                        ${c.rows.map(r => `<tr>
                            <th scope="row"><button class="link-chip" data-open="${r[0]}">${label(r[0])}</button></th>
                            ${r.slice(1).map(cell => `<td>${esc(cell)}</td>`).join('')}
                        </tr>`).join('')}
                    </tbody>
                </table>
            </div>
            <button class="ghost-btn" data-compare-practice="${c.id}">🏋️ Luyện phân biệt nhóm này</button>
        </article>`).join('');
}

// ==================== MODAL CHI TIẾT ====================

const MODAL_SECTIONS = [
    ['picture', '🖼️ Hình dung'],
    ['problem', '😣 Vấn đề'],
    ['structure', '🧩 Cấu trúc'],
    ['flow', '🔄 Luồng chạy'],
    ['code', '💻 Code'],
    ['when', '⚖️ Khi nào dùng'],
    ['related', '🔗 Liên quan'],
    ['quiz', '🏋️ Luyện nhanh']
];

function diagramBox(key, title, lazy = false) {
    return `<div class="diagram-box">
        <div class="box-bar"><span>${title}</span><button class="zoom-btn" title="Phóng to">⤢</button></div>
        <div class="mmd" data-mmd="${key}"${lazy ? ' data-lazy="1"' : ''}></div>
    </div>`;
}

function openPatternModal(patternId) {
    const p = byId.get(patternId);
    if (!p) return;
    ui.modalId = p.id;
    closeZoom();

    $('modalIcon').textContent = p.icon;
    $('modalTitle').textContent = p.name;
    $('modalNick').textContent = p.nick;
    $('modalCategory').textContent = `${CATEGORY_INFO[p.category].icon} ${categoryName(p.category)}`;
    $('modalCategory').className = `card-category ${p.category}`;
    $('modalDifficulty').textContent = DIFFICULTY_TEXT[p.difficulty];
    $('modalDifficulty').className = `difficulty-badge ${p.difficulty}`;
    $('modalGlyph').textContent = p.glyph;
    updateBookmarkHeader();

    modalNav.innerHTML = MODAL_SECTIONS.map(([key, text], i) =>
        `<button class="modal-nav-btn ${i === 0 ? 'active' : ''}" data-jump="ms-${key}">${text}</button>`).join('');
    modalBody.innerHTML = generatePatternContent(p);
    modalBody.scrollTop = 0;

    Diagrams.mount(modalBody, {
        problem: p.problem.diagram,
        solution: p.solution.diagram,
        class: p.classDiagram,
        sequence: p.sequence
    });
    mountMiniQuiz(p);

    patternModal.classList.add('active');
    patternModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    try { history.replaceState(null, '', '#p=' + p.id); } catch (e) { /* file:// có thể chặn */ }
    $('closeModal').focus({ preventScroll: true });
}

function generatePatternContent(p) {
    const scene = patternScenes[p.id];
    return `
        <section class="modal-section" id="ms-picture">
            <h3>🖼️ Hình dung bằng ví dụ đời thực</h3>
            <div class="scene-box">
                <div class="box-bar"><span>Minh họa</span><button class="zoom-btn" title="Phóng to">⤢</button></div>
                <div class="scene">${renderPatternScene(p.id, p.name)}</div>
                <p class="scene-caption">${esc(scene.caption)}</p>
            </div>
            <div class="analogy-grid">
                <div class="analogy-box">
                    <h4>💡 Ví dụ thực tế</h4>
                    <p>${esc(p.realWorldAnalogy)}</p>
                </div>
                <div class="key-idea">
                    <h4>🔑 Ý tưởng cốt lõi</h4>
                    <p>${esc(p.keyIdea)}</p>
                </div>
            </div>
        </section>

        <section class="modal-section" id="ms-problem">
            <h3>😣 Vấn đề → 😌 Giải pháp</h3>
            <div class="before-after">
                <div class="ba-col bad">
                    <div class="ba-title">❌ Khi chưa dùng ${esc(p.name)}</div>
                    <p>${p.problem.text}</p>
                    ${diagramBox('problem', 'Trước')}
                </div>
                <div class="ba-arrow" aria-hidden="true">➜</div>
                <div class="ba-col good">
                    <div class="ba-title">✅ Khi dùng ${esc(p.name)}</div>
                    <p>${p.solution.text}</p>
                    ${diagramBox('solution', 'Sau')}
                </div>
            </div>
        </section>

        <section class="modal-section" id="ms-structure">
            <h3>🧩 Cấu trúc (sơ đồ lớp UML)</h3>
            ${diagramBox('class', 'Class diagram')}
            <details class="uml-legend">
                <summary>❓ Cách đọc sơ đồ UML</summary>
                <div class="legend-grid">
                    <div class="mmd" data-mmd="legend" data-lazy="1"></div>
                    <ul>
                        <li><code>+</code> public · <code>-</code> private · <code>#</code> protected</li>
                        <li><em>chữ nghiêng</em> / <code>*</code> = abstract, lớp con phải viết</li>
                        <li><u>gạch chân</u> / <code>$</code> = static, gọi qua tên class</li>
                        <li><code>«interface»</code>, <code>«abstract»</code> = loại class</li>
                        <li>Ô tím = nhân vật chính của pattern</li>
                    </ul>
                </div>
            </details>
            <h4 class="sub-title">🎭 Ai đóng vai gì?</h4>
            <div class="table-wrap">
                <table class="roles-table">
                    <thead><tr><th scope="col">Vai trò</th><th scope="col">Trong code mẫu</th><th scope="col">Nhiệm vụ</th></tr></thead>
                    <tbody>${p.roles.map(r => `<tr><th scope="row">${esc(r.role)}</th><td><code>${esc(r.cls)}</code></td><td>${esc(r.desc)}</td></tr>`).join('')}</tbody>
                </table>
            </div>
        </section>

        <section class="modal-section" id="ms-flow">
            <h3>🔄 Luồng chạy từng bước</h3>
            <p class="section-hint">Đọc từ trên xuống: mỗi mũi tên là một lời gọi hàm, số tròn cho biết thứ tự; mũi tên nét đứt là giá trị trả về.</p>
            ${diagramBox('sequence', 'Sequence diagram')}
        </section>

        <section class="modal-section" id="ms-code">
            <h3>💻 Code mẫu (TypeScript)</h3>
            <div class="code-wrap">
                <button class="copy-btn" data-copy="${p.id}">📋 Copy</button>
                ${codeBlock(p.codeExample)}
            </div>
            <p class="section-hint">Đối chiếu với bảng "Ai đóng vai gì?" ở trên: mỗi class trong code ứng với một vai trò.</p>
        </section>

        <section class="modal-section" id="ms-when">
            <h3>⚖️ Khi nào dùng, khi nào không</h3>
            <div class="when-grid">
                <div class="when-card use"><h4>✅ Nên dùng khi</h4><ul>${p.useCases.map(u => `<li>${esc(u)}</li>`).join('')}</ul></div>
                <div class="when-card avoid"><h4>🚫 Đừng dùng khi</h4><ul>${p.avoid.map(a => `<li>${a}</li>`).join('')}</ul></div>
                <div class="when-card wild"><h4>🌍 Gặp ở đâu ngoài đời</h4><ul>${p.inTheWild.map(w => `<li>${esc(w)}</li>`).join('')}</ul></div>
            </div>
            <div class="pros-cons">
                <div class="pros"><h4>👍 Ưu điểm</h4><ul>${p.pros.map(x => `<li>${esc(x)}</li>`).join('')}</ul></div>
                <div class="cons"><h4>👎 Nhược điểm</h4><ul>${p.cons.map(x => `<li>${esc(x)}</li>`).join('')}</ul></div>
            </div>
        </section>

        <section class="modal-section" id="ms-related">
            <h3>🔗 Dễ nhầm / hay đi cùng</h3>
            <div class="related-list">
                ${p.related.map(r => `
                    <button class="related-item" data-open="${r.id}">
                        <span class="related-name">${label(r.id)} →</span>
                        <span class="related-note">${esc(r.note)}</span>
                    </button>`).join('')}
            </div>
        </section>

        <section class="modal-section" id="ms-quiz">
            <h3>🏋️ Luyện nhanh (chiều xuôi)</h3>
            <p class="section-hint">Vừa học xong ${esc(p.name)} — thử vận dụng ngay. Kết quả được tính vào mức thành thạo.</p>
            <div class="mini-quiz" data-mini="0"></div>
            <div class="mini-quiz" data-mini="1"></div>
            <div class="mini-quiz" data-mini="2"></div>
            <div class="quiz-cta">
                <button class="start-btn" data-practice="${p.id}">🔀 Luyện ${esc(p.name)} cả 2 chiều</button>
            </div>
        </section>`;
}

function mountMiniQuiz(p) {
    const ctx = { ids: [p.id], level: 3 };
    const bank = practiceBank[p.id];
    const specs = [
        { type: 'f-scenario', pid: p.id, v: Math.floor(Math.random() * bank.scenarios.length) },
        { type: 'f-order', pid: p.id, v: 0 },
        { type: 'f-blank', pid: p.id, v: 0 }
    ];
    modalBody.querySelectorAll('.mini-quiz').forEach((host, i) => {
        const q = Practice.build(specs[i], ctx);
        Practice.renderQuestion(host, q, { onAnswer: ok => recordAnswer(q.pid, q.dir, ok) });
    });
}

function closeModal() {
    if (!patternModal.classList.contains('active')) return;
    patternModal.classList.remove('active');
    patternModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    ui.modalId = null;
    modalBody.innerHTML = '';
    try { history.replaceState(null, '', location.pathname + location.search); } catch (e) { /* bỏ qua */ }
}

function stepModal(delta) {
    if (!ui.modalId) return;
    const i = patternList.findIndex(p => p.id === ui.modalId);
    const next = patternList[(i + delta + patternList.length) % patternList.length];
    openPatternModal(next.id);
}

function updateModalNav() {
    const sections = modalBody.querySelectorAll('.modal-section');
    let active = sections[0] && sections[0].id;
    const top = modalBody.scrollTop + 80;
    sections.forEach(s => { if (s.offsetTop <= top) active = s.id; });
    modalNav.querySelectorAll('.modal-nav-btn').forEach(b => b.classList.toggle('active', b.dataset.jump === active));
}

// ==================== LUYỆN TẬP ====================

const Practice = (() => {
    const setup = { dir: 'mixed', group: 'all', level: 1, count: 10 };
    let session = null;

    function typesFor(dir, level) {
        return Object.keys(practiceTypes).filter(t =>
            practiceTypes[t].level <= level && (dir === 'mixed' || practiceTypes[t].dir === dir));
    }

    function variantsOf(type, p) {
        const bank = practiceBank[p.id];
        if (type === 'r-scenario' || type === 'f-scenario') return bank.scenarios.map((_, i) => i);
        if (type === 'f-role') return p.roles.map((_, i) => i);
        return [0];
    }

    function weight(pid) {
        const m = masteryOf(pid);
        return m ? 1 + (1 - m.pct / 100) * 2 : 2;
    }

    function weightedIndex(weights) {
        const total = weights.reduce((a, b) => a + b, 0);
        let r = Math.random() * total;
        for (let i = 0; i < weights.length; i++) {
            r -= weights[i];
            if (r <= 0) return i;
        }
        return weights.length - 1;
    }

    // Chọn câu hỏi xoay vòng theo từng dạng để các dạng xuất hiện đều; ưu tiên pattern còn yếu
    function selectQuestions(ids, types, count) {
        const byType = {};
        ids.forEach(id => {
            const p = byId.get(id);
            types.forEach(t => variantsOf(t, p).forEach(v => (byType[t] = byType[t] || []).push({ type: t, pid: id, v })));
        });
        const order = shuffle(Object.keys(byType));
        const chosen = [];
        const used = {};
        while (chosen.length < count) {
            let progressed = false;
            for (const t of order) {
                if (chosen.length >= count) break;
                const list = byType[t];
                if (!list.length) continue;
                const idx = weightedIndex(list.map(c => weight(c.pid) / (1 + (used[c.pid] || 0))));
                const [c] = list.splice(idx, 1);
                chosen.push(c);
                used[c.pid] = (used[c.pid] || 0) + 1;
                progressed = true;
            }
            if (!progressed) break;
        }
        return shuffle(chosen);
    }

    function distractorIds(pid, n, poolIds, exclude = []) {
        const p = byId.get(pid);
        const taken = new Set([pid, ...exclude]);
        const out = [];
        const add = list => {
            for (const id of shuffle(list)) {
                if (out.length >= n) break;
                if (!taken.has(id)) {
                    taken.add(id);
                    out.push(id);
                }
            }
        };
        if (poolIds && poolIds.length > 1 && poolIds.length < patternList.length) add(poolIds);
        add(p.related.map(r => r.id));
        add(patternList.filter(q => q.category === p.category).map(q => q.id));
        add(patternList.map(q => q.id));
        return out;
    }

    function relatedNote(a, b) {
        const pa = byId.get(a), pb = byId.get(b);
        const r = pa.related.find(x => x.id === b) || pb.related.find(x => x.id === a);
        return r ? r.note : null;
    }

    function explainPattern(pid, chosenId) {
        const p = byId.get(pid);
        let html = `<div class="exp-pattern"><button class="link-chip" data-open="${pid}">${label(pid)}</button><span>${esc(p.nick)}</span></div>
            <p>🔑 ${esc(p.keyIdea)}</p>`;
        if (chosenId && chosenId !== pid) {
            const note = relatedNote(pid, chosenId);
            const c = byId.get(chosenId);
            html += `<p class="exp-diff">🤔 Vì sao không phải <strong>${esc(c.name)}</strong>? ${esc(note || `${c.name} dùng khi: ${c.keyIdea}`)}</p>`;
        }
        return html;
    }

    // level ≤ 1 (người mới): hiện thêm biệt danh dưới mỗi đáp án làm gợi ý
    function patternOptions(pid, others, level) {
        return shuffle([pid, ...others]).map(id => {
            const p = byId.get(id);
            return {
                pid: id,
                correct: id === pid,
                html: `<span class="opt-pattern">${p.icon} ${esc(p.name)}</span>${level <= 1 ? `<small>${esc(p.nick)}</small>` : ''}`
            };
        });
    }

    // Dựng một câu hỏi từ (type, pid, variant). ctx = { ids: pattern đang luyện, level }
    function build(spec, ctx) {
        const p = byId.get(spec.pid);
        const bank = practiceBank[p.id];
        const info = practiceTypes[spec.type];
        const base = { type: spec.type, pid: p.id, dir: info.dir, kind: 'choice' };
        const lbl = `${p.icon} ${esc(p.name)}`;

        switch (spec.type) {
            case 'r-scenario':
                return Object.assign(base, {
                    prompt: `<div class="q-scenario">${esc(bank.scenarios[spec.v])}</div><p class="q-ask">Pattern nào phù hợp nhất?</p>`,
                    options: patternOptions(p.id, distractorIds(p.id, 3, ctx.ids), ctx.level),
                    explain: chosen => explainPattern(p.id, chosen.pid)
                });
            case 'r-picture':
                return Object.assign(base, {
                    prompt: `<div class="q-scene">${renderPatternScene(p.id)}</div><p class="q-ask">Hình minh họa trên nói về pattern nào?</p>`,
                    // Không gợi ý biệt danh: nhãn trong hình hay trùng biệt danh, sẽ lộ đáp án
                    options: patternOptions(p.id, distractorIds(p.id, 3, ctx.ids), 2),
                    explain: chosen => `<p class="q-caption">🖼️ ${esc(patternScenes[p.id].caption)}</p>` + explainPattern(p.id, chosen.pid)
                });
            case 'r-code':
                return Object.assign(base, {
                    prompt: `<p class="q-ask">Đoạn code sau đang áp dụng pattern nào?</p>${codeBlock(bank.code, 'small')}`,
                    options: patternOptions(p.id, distractorIds(p.id, 3, ctx.ids), ctx.level),
                    explain: chosen => explainPattern(p.id, chosen.pid)
                });
            case 'r-smell':
                return Object.assign(base, {
                    prompt: `<p class="q-ask">👃 Đoạn code này đang "có mùi". Refactor bằng pattern nào là hợp lý nhất?</p>${codeBlock(bank.smell.code, 'small smell')}`,
                    options: patternOptions(p.id, shuffle(bank.smell.distractors).slice(0, 3), ctx.level),
                    explain: chosen => `<p class="exp-fix">🛠️ ${p.solution.text}</p>` + explainPattern(p.id, chosen.pid)
                });
            case 'f-scenario': {
                const others = distractorIds(p.id, 3, ctx.ids);
                const options = shuffle([
                    { html: esc(bank.scenarios[spec.v]), correct: true, note: `✅ Tình huống của ${label(p.id)}` },
                    ...others.map(o => ({ html: esc(pick(practiceBank[o].scenarios)), correct: false, note: `→ Tình huống này hợp với ${label(o)}` }))
                ]);
                return Object.assign(base, {
                    prompt: `<p class="q-ask">Tình huống nào dưới đây <strong>nên dùng ${lbl}</strong>?</p>`,
                    options,
                    explain: () => `<p>🔑 ${esc(p.keyIdea)}</p>`
                });
            }
            case 'f-role': {
                const target = p.roles[spec.v];
                const names = [...new Set(p.roles.map(r => r.role))];
                let others = shuffle(names.filter(n => n !== target.role)).slice(0, 3);
                if (others.length < 3) {
                    const extra = shuffle([...new Set(patternList.flatMap(q => q.roles.map(r => r.role)))])
                        .filter(n => !names.includes(n) && !others.includes(n));
                    others = others.concat(extra.slice(0, 3 - others.length));
                }
                const byClass = Math.random() < 0.5 && !normalize(target.cls).includes(normalize(target.role));
                const prompt = byClass
                    ? `<p class="q-ask">Trong code mẫu của <strong>${lbl}</strong>, <code>${esc(target.cls)}</code> đóng vai trò gì?</p>`
                    : `<p class="q-ask">Trong <strong>${lbl}</strong>, vai trò nào đảm nhận việc:</p><div class="q-scenario">“${esc(target.desc)}”</div>`;
                return Object.assign(base, {
                    prompt,
                    options: shuffle([target.role, ...others]).map(n => ({ html: `<span class="opt-pattern">${esc(n)}</span>`, correct: n === target.role })),
                    explain: () => `<div class="table-wrap"><table class="roles-table mini"><tbody>${p.roles.map(r =>
                        `<tr class="${r === target ? 'hl' : ''}"><th scope="row">${esc(r.role)}</th><td><code>${esc(r.cls)}</code></td><td>${esc(r.desc)}</td></tr>`).join('')}</tbody></table></div>`
                });
            }
            case 'f-order':
                return Object.assign(base, {
                    kind: 'order',
                    steps: bank.flow,
                    prompt: `<p class="q-ask">Sắp xếp các bước chạy của <strong>${lbl}</strong> theo đúng thứ tự — bấm lần lượt từ bước đầu tiên:</p>`,
                    explain: () => `<p>Đối chiếu với sơ đồ "🔄 Luồng chạy" trong trang chi tiết <button class="link-chip" data-open="${p.id}">${label(p.id)}</button>.</p>`
                });
            case 'f-blank':
                return Object.assign(base, {
                    prompt: `<p class="q-ask">Chọn dòng code đúng để hoàn thành <strong>${lbl}</strong>:</p><div class="blank-code">${codeBlock(bank.blank.code, 'small')}</div>`,
                    options: shuffle(bank.blank.options.map((o, i) => ({ html: `<code>${esc(o)}</code>`, correct: i === 0 }))),
                    explain: () => `<p>${bank.blank.explain}</p>`,
                    onReveal: host => {
                        const filled = bank.blank.code.replace(BLANK_MARK, bank.blank.options[0]);
                        host.querySelector('.blank-code').innerHTML = codeBlock(filled, 'small filled');
                    }
                });
        }
        return null;
    }

    // ----- Hiển thị một câu hỏi -----

    function renderQuestion(host, q, opts = {}) {
        const info = practiceTypes[q.type];
        delete host.dataset.answered;
        host.innerHTML = `
            <div class="q-card ${q.dir}">
                <div class="q-head">
                    <span class="q-type">${info.icon} ${info.label}</span>
                    <span class="q-dir">${q.dir === 'forward' ? '➡️ Chiều xuôi' : '⬅️ Chiều ngược'}</span>
                </div>
                <div class="q-prompt">${q.prompt}</div>
                <div class="q-body"></div>
                <div class="q-feedback" hidden></div>
            </div>`;
        const body = host.querySelector('.q-body');
        if (q.kind === 'order') renderOrder(host, body, q, opts);
        else renderChoice(host, body, q, opts);
    }

    function showFeedback(host, ok, html) {
        const fb = host.querySelector('.q-feedback');
        fb.hidden = false;
        fb.className = 'q-feedback ' + (ok ? 'ok' : 'bad');
        fb.innerHTML = `<div class="fb-title">${ok ? '🎉 Chính xác!' : '❌ Chưa đúng'}</div>${html}`;
    }

    function renderChoice(host, body, q, opts) {
        body.innerHTML = `<div class="q-options">${q.options.map((o, i) => `
            <button class="q-option" data-i="${i}">
                <span class="q-key">${i + 1}</span>
                <span class="q-text">${o.html}${o.note ? `<span class="q-note" hidden>${o.note}</span>` : ''}</span>
            </button>`).join('')}</div>`;
        const buttons = [...body.querySelectorAll('.q-option')];
        buttons.forEach(btn => btn.addEventListener('click', () => {
            if (host.dataset.answered) return;
            host.dataset.answered = '1';
            const chosen = q.options[+btn.dataset.i];
            buttons.forEach((b, i) => {
                b.disabled = true;
                if (q.options[i].correct) b.classList.add('correct');
                else if (b === btn) b.classList.add('incorrect');
                else b.classList.add('dim');
                const note = b.querySelector('.q-note');
                if (note) note.hidden = false;
            });
            if (q.onReveal) q.onReveal(host);
            showFeedback(host, chosen.correct, q.explain(chosen));
            if (opts.onAnswer) opts.onAnswer(chosen.correct);
        }));
    }

    function renderOrder(host, body, q, opts) {
        const n = q.steps.length;
        let items = shuffle(q.steps.map((text, i) => ({ text, i })));
        if (items.every((it, pos) => it.i === pos)) items = items.slice(1).concat(items[0]);
        let picked = [];

        body.innerHTML = `
            <ol class="order-answer" aria-label="Thứ tự bạn chọn"></ol>
            <div class="order-pool" aria-label="Các bước chưa xếp"></div>
            <div class="order-actions">
                <button class="ghost-btn order-reset">↺ Xếp lại</button>
                <button class="start-btn small order-check" disabled>Kiểm tra</button>
            </div>`;
        const answerEl = body.querySelector('.order-answer');
        const poolEl = body.querySelector('.order-pool');
        const checkBtn = body.querySelector('.order-check');

        function draw() {
            answerEl.innerHTML = picked.length
                ? picked.map((it, pos) => `<li><button class="order-item placed" data-pos="${pos}"><span class="order-num">${pos + 1}</span>${esc(it.text)}</button></li>`).join('')
                : '<li class="order-empty">Bấm vào các bước bên dưới theo thứ tự chạy…</li>';
            poolEl.innerHTML = items.filter(it => !picked.includes(it)).map(it =>
                `<button class="order-item" data-i="${it.i}">${esc(it.text)}</button>`).join('');
            checkBtn.disabled = picked.length !== n;
        }

        body.addEventListener('click', e => {
            if (host.dataset.answered) return;
            const btn = e.target.closest('.order-item');
            if (btn && btn.dataset.i !== undefined && !btn.classList.contains('placed')) {
                picked.push(items.find(it => it.i === +btn.dataset.i));
                draw();
            } else if (btn && btn.classList.contains('placed')) {
                picked.splice(+btn.dataset.pos, 1);
                draw();
            } else if (e.target.closest('.order-reset')) {
                picked = [];
                draw();
            } else if (e.target.closest('.order-check') && picked.length === n) {
                host.dataset.answered = '1';
                const ok = picked.every((it, pos) => it.i === pos);
                answerEl.querySelectorAll('.order-item').forEach((b, pos) => {
                    b.classList.add(picked[pos].i === pos ? 'right' : 'wrong');
                    b.disabled = true;
                });
                body.querySelector('.order-actions').hidden = true;
                const correctList = `<ol class="order-solution">${q.steps.map(s => `<li>${esc(s)}</li>`).join('')}</ol>`;
                showFeedback(host, ok, (ok ? '' : '<p>Thứ tự đúng:</p>' + correctList) + q.explain());
                if (opts.onAnswer) opts.onAnswer(ok);
            }
        });
        draw();
    }

    // ----- Phiên luyện tập -----

    function poolIds(group) {
        return patternList.filter(p => group === 'all' || p.category === group).map(p => p.id);
    }

    function describeSetup() {
        const types = typesFor(setup.dir, setup.level);
        $('setupHint').innerHTML = 'Sẽ gồm các dạng: ' + types.map(t => `<span class="type-pill ${practiceTypes[t].dir}">${practiceTypes[t].icon} ${practiceTypes[t].label}</span>`).join(' ');
    }

    function syncSetupButtons() {
        practiceSetup.querySelectorAll('.seg').forEach(seg => {
            const key = seg.dataset.setting;
            seg.querySelectorAll('button').forEach(b => b.classList.toggle('active', String(setup[key]) === b.dataset.value));
        });
        describeSetup();
    }

    function setDefaultLevel(level) {
        setup.level = level;
        syncSetupButtons();
    }

    function start(config) {
        const types = typesFor(config.dir, config.level);
        const questions = selectQuestions(config.ids, types, config.count);
        if (!questions.length) return;
        session = Object.assign({}, config, { questions, index: 0, score: 0, streak: 0, results: [] });
        practiceStage.hidden = false;
        renderCurrent();
        practiceStage.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    function startFromSetup() {
        const titleParts = {
            mixed: '🔀 Trộn hai chiều', reverse: '⬅️ Chiều ngược · Nhận diện', forward: '➡️ Chiều xuôi · Vận dụng'
        };
        start({
            ids: poolIds(setup.group),
            dir: setup.dir,
            level: setup.level,
            count: setup.count,
            title: `${titleParts[setup.dir]} · ${setup.group === 'all' ? 'Tất cả nhóm' : categoryName(setup.group)}`
        });
    }

    function startCustom(ids, title, dir = 'mixed', count = 8) {
        closeModal();
        start({ ids, dir, level: Math.max(setup.level, 2), count, title });
    }

    function renderCurrent() {
        const s = session;
        const q = build(s.questions[s.index], { ids: s.ids, level: s.level });
        s.current = q;
        const pct = Math.round((100 * s.index) / s.questions.length);
        practiceStage.innerHTML = `
            <div class="session-top">
                <div class="session-title">${esc(s.title)}</div>
                <div class="session-progress">
                    <div class="bar"><i style="width:${pct}%"></i></div>
                    <span>Câu ${s.index + 1}/${s.questions.length}</span>
                    <span>✅ ${s.score}</span>
                    <span>🔥 ${s.streak}</span>
                </div>
                <button class="ghost-btn" data-session="quit">✕ Dừng</button>
            </div>
            <div class="session-q"></div>
            <div class="session-next" hidden>
                <button class="start-btn" data-session="next">${s.index + 1 === s.questions.length ? '🏁 Xem kết quả' : 'Câu tiếp →'}</button>
                <span class="kbd-hint">hoặc nhấn Enter</span>
            </div>`;
        renderQuestion(practiceStage.querySelector('.session-q'), q, {
            onAnswer: ok => {
                s.results.push({ pid: q.pid, dir: q.dir, ok });
                if (ok) {
                    s.score++;
                    s.streak++;
                } else {
                    s.streak = 0;
                }
                recordAnswer(q.pid, q.dir, ok);
                const spans = practiceStage.querySelectorAll('.session-progress span');
                spans[1].textContent = `✅ ${s.score}`;
                spans[2].textContent = `🔥 ${s.streak}`;
                practiceStage.querySelector('.session-next').hidden = false;
            }
        });
    }

    function next() {
        if (!session) return;
        if (session.index + 1 < session.questions.length) {
            session.index++;
            renderCurrent();
            practiceStage.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
            finish();
        }
    }

    function finish() {
        const s = session;
        const total = s.results.length;
        const pct = total ? Math.round((100 * s.score) / total) : 0;
        const split = dir => {
            const r = s.results.filter(x => x.dir === dir);
            return r.length ? `${r.filter(x => x.ok).length}/${r.length}` : '—';
        };
        const wrong = [...new Set(s.results.filter(x => !x.ok).map(x => x.pid))];
        const message = pct >= 90 ? '🏆 Xuất sắc!' : pct >= 70 ? '👏 Rất tốt!' : pct >= 50 ? '💪 Khá ổn, ôn thêm chút nữa' : '📚 Xem lại hình & sơ đồ rồi thử lại nhé';
        s.wrong = wrong;
        practiceStage.innerHTML = `
            <div class="summary">
                <div class="summary-score">
                    <div class="big">${s.score}/${total}</div>
                    <div>${pct}% · ${message}</div>
                </div>
                <div class="summary-split">
                    <div class="split reverse">⬅️ Chiều ngược (nhận diện): <strong>${split('reverse')}</strong></div>
                    <div class="split forward">➡️ Chiều xuôi (vận dụng): <strong>${split('forward')}</strong></div>
                </div>
                ${wrong.length
                    ? `<h4>📌 Nên ôn lại</h4><div class="summary-wrong">${wrong.map(id => `<button class="link-chip" data-open="${id}">${label(id)}</button>`).join('')}</div>`
                    : '<p class="summary-perfect">🎉 Không sai câu nào!</p>'}
                <div class="summary-actions">
                    ${wrong.length ? '<button class="start-btn" data-session="retry-wrong">🔁 Luyện lại phần sai</button>' : ''}
                    <button class="start-btn ${wrong.length ? 'secondary' : ''}" data-session="again">▶ Lượt mới (cùng cài đặt)</button>
                    <button class="ghost-btn" data-session="quit">⚙️ Đổi cài đặt</button>
                </div>
            </div>`;
        practiceStage.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    function handleSessionAction(action) {
        if (!session) return;
        if (action === 'next') next();
        else if (action === 'quit') {
            session = null;
            practiceStage.hidden = true;
            practiceStage.innerHTML = '';
            practiceSetup.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else if (action === 'again') {
            start(Object.assign({}, session));
        } else if (action === 'retry-wrong' && session.wrong && session.wrong.length) {
            start(Object.assign({}, session, { ids: session.wrong, title: '🔁 Ôn lại phần sai', count: Math.max(5, session.wrong.length * 2) }));
        }
    }

    function startWeakest() {
        // Xáo trước khi sắp xếp (sort ổn định) để các pattern bằng điểm được chọn ngẫu nhiên
        const ranked = shuffle(patternList).map(p => {
            const m = masteryOf(p.id);
            return { id: p.id, score: m ? m.pct / 100 : 0.4 };
        }).sort((a, b) => a.score - b.score);
        const ids = ranked.slice(0, 5).map(r => r.id);
        start({ ids, dir: 'mixed', level: setup.level, count: 10, title: '🎯 Luyện các pattern yếu nhất: ' + ids.map(id => byId.get(id).name).join(', ') });
    }

    function handleKey(e) {
        if (!session || practiceStage.hidden || !session.current) return false;
        const rect = practiceStage.getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > window.innerHeight) return false;
        const nextBox = practiceStage.querySelector('.session-next');
        if (e.key === 'Enter' && nextBox && !nextBox.hidden) {
            e.preventDefault();
            next();
            return true;
        }
        if (/^[1-4]$/.test(e.key)) {
            const btn = practiceStage.querySelectorAll('.q-option')[+e.key - 1];
            if (btn && !btn.disabled) {
                btn.click();
                return true;
            }
        }
        return false;
    }

    function initSetup() {
        practiceSetup.querySelectorAll('.seg').forEach(seg => {
            seg.addEventListener('click', e => {
                const btn = e.target.closest('button');
                if (!btn) return;
                const key = seg.dataset.setting;
                setup[key] = key === 'level' || key === 'count' ? +btn.dataset.value : btn.dataset.value;
                syncSetupButtons();
            });
        });
        $('startPracticeBtn').addEventListener('click', startFromSetup);
        $('weakPracticeBtn').addEventListener('click', startWeakest);
        syncSetupButtons();
    }

    return { build, renderQuestion, initSetup, setDefaultLevel, startCustom, handleSessionAction, handleKey };
})();

// ==================== EVENT LISTENERS ====================

function setupEventListeners() {
    // Level selection
    document.querySelectorAll('.level-card').forEach(card => {
        card.addEventListener('click', () => {
            applyLevel(card.dataset.level);
            levelOverlay.classList.add('hidden');
        });
    });
    $('changeLevelBtn').addEventListener('click', showLevelSelection);

    // Header
    $('searchBtn').addEventListener('click', () => {
        $('patterns').scrollIntoView({ behavior: 'smooth', block: 'start' });
        setTimeout(() => searchInput.focus({ preventScroll: true }), 350);
    });
    $('bookmarkBtn').addEventListener('click', () => {
        ui.onlyBookmarked = !ui.onlyBookmarked;
        updateBookmarkHeader();
        applyFilters();
        $('patterns').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    $('practiceBtn').addEventListener('click', () => $('practice').scrollIntoView({ behavior: 'smooth', block: 'start' }));
    $('resetMasteryBtn').addEventListener('click', () => {
        if (!confirm('Xóa toàn bộ tiến độ luyện tập của 23 pattern?')) return;
        Object.keys(mastery).forEach(id => delete mastery[id]);
        store.set(STORAGE.mastery, mastery);
        refreshMastery();
    });

    // Filter + search
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            ui.category = btn.dataset.category;
            applyFilters();
        });
    });
    searchInput.addEventListener('input', () => {
        ui.query = searchInput.value;
        applyFilters();
    });

    // Finder tabs
    $('finderTabs').addEventListener('click', e => {
        const btn = e.target.closest('[data-finder]');
        if (!btn || btn.dataset.finder === ui.finderTab) return;
        ui.finderTab = btn.dataset.finder;
        renderFinderTabs();
    });

    // Click toàn trang (event delegation)
    document.addEventListener('click', e => {
        const t = e.target;

        const bm = t.closest('[data-bookmark]');
        if (bm) {
            e.stopPropagation();
            toggleBookmark(bm.dataset.bookmark);
            return;
        }
        const pr = t.closest('[data-practice]');
        if (pr) {
            const id = pr.dataset.practice;
            Practice.startCustom([id], `🔀 Luyện riêng ${byId.get(id).name} (cả 2 chiều)`, 'mixed', 8);
            return;
        }
        const cp = t.closest('[data-compare-practice]');
        if (cp) {
            const c = patternComparisons.find(x => x.id === cp.dataset.comparePractice);
            Practice.startCustom(c.ids, `⚔️ Phân biệt: ${c.ids.map(id => byId.get(id).name).join(' · ')}`, 'reverse', 8);
            return;
        }
        const sa = t.closest('[data-session]');
        if (sa) {
            Practice.handleSessionAction(sa.dataset.session);
            return;
        }
        const op = t.closest('[data-open]');
        if (op) {
            openPatternModal(op.dataset.open);
            return;
        }
        const card = t.closest('.pattern-card');
        if (card) {
            openPatternModal(card.dataset.patternId);
            return;
        }
        const zb = t.closest('.zoom-btn');
        if (zb) {
            const box = zb.closest('.diagram-box, .scene-box');
            const svg = box && box.querySelector('.mmd svg, .scene svg');
            if (svg) openZoom(svg, zb.parentElement.querySelector('span').textContent);
            return;
        }
        const copy = t.closest('[data-copy]');
        if (copy) {
            copyCode(copy);
            return;
        }
        const jump = t.closest('[data-jump]');
        if (jump) {
            const section = document.getElementById(jump.dataset.jump);
            if (section) modalBody.scrollTo({ top: section.offsetTop - 8, behavior: 'smooth' });
        }
    });

    // Bàn phím trên thẻ pattern
    document.addEventListener('keydown', e => {
        const card = e.target.closest && e.target.closest('.pattern-card');
        if (card && e.target === card && (e.key === 'Enter' || e.key === ' ')) {
            e.preventDefault();
            openPatternModal(card.dataset.patternId);
        }
    });

    // Modal
    $('closeModal').addEventListener('click', closeModal);
    $('modalPrev').addEventListener('click', () => stepModal(-1));
    $('modalNext').addEventListener('click', () => stepModal(1));
    $('modalBookmark').addEventListener('click', () => ui.modalId && toggleBookmark(ui.modalId));
    patternModal.addEventListener('click', e => {
        if (e.target === patternModal) closeModal();
    });
    modalBody.addEventListener('scroll', updateModalNav, { passive: true });
    modalBody.addEventListener('toggle', e => {
        const legend = e.target.querySelector && e.target.querySelector('.mmd[data-mmd="legend"]');
        if (legend && e.target.open && !legend.classList.contains('done')) Diagrams.render(legend, UML_LEGEND);
    }, true);

    // Zoom
    $('zoomClose').addEventListener('click', closeZoom);
    zoomOverlay.addEventListener('click', e => {
        if (e.target === zoomOverlay) closeZoom();
    });

    // Phím tắt
    document.addEventListener('keydown', e => {
        const typing = e.target.matches && e.target.matches('input, textarea, select, [contenteditable="true"]');
        if (e.key === 'Escape') {
            if (zoomOverlay.classList.contains('active')) closeZoom();
            else closeModal();
            return;
        }
        if (typing) return;
        if (patternModal.classList.contains('active')) {
            if (e.key === 'ArrowLeft') stepModal(-1);
            if (e.key === 'ArrowRight') stepModal(1);
            return;
        }
        Practice.handleKey(e);
    });

    // Làm nổi mục đang xem trên thanh điều hướng
    if ('IntersectionObserver' in window) {
        const links = [...document.querySelectorAll('.section-link')];
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + entry.target.id));
            });
        }, { rootMargin: '-45% 0px -50% 0px' });
        links.forEach(l => {
            const target = document.querySelector(l.getAttribute('href'));
            if (target) observer.observe(target);
        });
    }
}

function copyCode(btn) {
    const p = byId.get(btn.dataset.copy);
    const done = ok => {
        btn.textContent = ok ? '✅ Đã copy' : '⚠️ Không copy được';
        setTimeout(() => { btn.textContent = '📋 Copy'; }, 1600);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(p.codeExample).then(() => done(true), () => done(false));
    } else {
        done(false);
    }
}

// ==================== INITIALIZATION ====================

function init() {
    renderPatternMap();
    renderPatterns();
    renderCompare();
    renderMasteryGrid();
    updateBookmarkHeader();
    Practice.initSetup();
    setupEventListeners();

    if (currentLevel) applyLevel(currentLevel);
    else showLevelSelection();

    Diagrams.mount($('overview'), { intro: INTRO_DIAGRAM });
    renderFinderTabs();

    const m = location.hash.match(/^#p=([\w-]+)/);
    if (m && byId.has(m[1])) openPatternModal(m[1]);
}

init();
