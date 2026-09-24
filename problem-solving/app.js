// Problem Solving App - Main Controller
// Hai chế độ: 📖 Lý thuyết (grid concept + panel chi tiết) và 🏋️ Luyện tập (practice.js).
// Level không còn là màn chọn bắt buộc — chỉ là badge và bộ lọc.

const PS_CATEGORIES = {
    frameworks: { icon: '🎯', label: 'Frameworks', desc: 'Quy trình & khung giải quyết vấn đề' },
    techniques: { icon: '🛠️', label: 'Techniques', desc: 'Kỹ thuật tạo ý tưởng, phân tích & ra quyết định' },
    'mental-models': { icon: '🧠', label: 'Mental Models', desc: 'Mô hình tư duy giúp nhìn vấn đề đúng hơn' },
    pitfalls: { icon: '⚠️', label: 'Pitfalls', desc: 'Bẫy tư duy khiến giải pháp thất bại' }
};

const PS_LEVELS = {
    beginner: { icon: '🌱', label: 'Beginner' },
    intermediate: { icon: '🌿', label: 'Intermediate' },
    advanced: { icon: '🌳', label: 'Advanced' }
};

// Thứ tự các mục trong tab Lý thuyết; concept thiếu trường nào thì bỏ qua mục đó
const PS_SECTIONS = [
    { key: 'what', icon: '💡', label: 'Hiểu đúng' },
    { key: 'when', icon: '🎯', label: 'Khi nào dùng' },
    { key: 'signs', icon: '🚨', label: 'Dấu hiệu' },
    { key: 'causes', icon: '🧬', label: 'Vì sao mắc bẫy' },
    { key: 'steps', icon: '🪜', label: 'Các bước' },
    { key: 'example', icon: '📌', label: 'Ví dụ' },
    { key: 'antidotes', icon: '🛡️', label: 'Phòng tránh' },
    { key: 'mistakes', icon: '⚠️', label: 'Sai lầm hay gặp' },
    { key: 'advanced', icon: '🎓', label: 'Nâng cao' },
    { key: 'checklist', icon: '✅', label: 'Tự kiểm tra' }
];

// Lộ trình gợi ý trên màn chào
const PS_PATH = [
    { icon: '🌱', label: 'Nền tảng', ids: ['ps-process', 'define-problem', '5-whys', 'pareto', 'brainstorming', 'jumping-solutions'] },
    { icon: '🌿', label: 'Công cụ', ids: ['root-cause', 'fishbone', 'issue-tree', 'decision-matrix', 'inversion', 'premortem'] },
    { icon: '🌳', label: 'Tư duy hệ thống', ids: ['systems-thinking', 'second-order', 'constraints', 'first-principles', 'cynefin', 'hypothesis-driven'] }
];

const PS_STORE_KEY = 'ps-progress-v1';

const PS = {
    state: {
        view: 'theory',
        category: 'all',
        level: 'all',
        search: '',
        selected: null,
        panelTab: 'theory',
        tourActive: false,
        tourStep: 0
    },
    concepts: {},
    order: [],

    // ---------- Lưu tiến độ (localStorage có thể bị chặn → luôn có dữ liệu mặc định) ----------
    store: {
        data: null,
        load() {
            const empty = { viewed: {}, quiz: {}, cases: {}, exercises: {}, checklist: {} };
            try {
                const raw = localStorage.getItem(PS_STORE_KEY);
                this.data = raw ? Object.assign(empty, JSON.parse(raw)) : empty;
            } catch (e) {
                this.data = empty;
            }
            return this.data;
        },
        save() {
            try { localStorage.setItem(PS_STORE_KEY, JSON.stringify(this.data)); } catch (e) { /* bỏ qua */ }
        },
        reset(keys) {
            keys.forEach(k => { this.data[k] = {}; });
            this.save();
        }
    },

    concept(id) { return this.concepts[id]; },

    escape(str) {
        return String(str).replace(/[&<>"']/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
    },

    normalize(str) {
        return String(str).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/đ/g, 'd');
    },

    stripTags(html) {
        const div = document.createElement('div');
        div.innerHTML = html;
        return (div.textContent || '').replace(/\s+/g, ' ').trim();
    },

    shuffle(arr) {
        const a = arr.slice();
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    },

    levelBadge(level) {
        const l = PS_LEVELS[level] || PS_LEVELS.beginner;
        return `<span class="lvl-badge ${level}">${l.icon} ${l.label}</span>`;
    },

    categoryBadge(cat) {
        const c = PS_CATEGORIES[cat];
        return c ? `<span class="cat-badge">${c.icon} ${c.label}</span>` : '';
    },

    conceptChip(id) {
        const c = this.concept(id);
        if (!c) return '';
        return `<button class="concept-chip" type="button" data-open-concept="${id}">${c.icon} ${c.title}</button>`;
    }
};

// ======================= Dữ liệu =======================
function psBuildConcepts() {
    PS.concepts = { ...frameworksData, ...techniquesData, ...mentalModelsData, ...pitfallsData };
    // Thứ tự hiển thị: theo nhóm, trong nhóm theo level rồi theo thứ tự khai báo
    const levelRank = { beginner: 1, intermediate: 2, advanced: 3 };
    const catOrder = Object.keys(PS_CATEGORIES);
    PS.order = Object.keys(PS.concepts).map((id, i) => ({ id, i })).sort((a, b) => {
        const ca = PS.concepts[a.id], cb = PS.concepts[b.id];
        return (catOrder.indexOf(ca.category) - catOrder.indexOf(cb.category))
            || ((levelRank[ca.level] || 1) - (levelRank[cb.level] || 1))
            || (a.i - b.i);
    }).map(x => x.id);
}

function psFilteredIds() {
    const { category, level, search } = PS.state;
    const q = PS.normalize(search.trim());
    return PS.order.filter(id => {
        const c = PS.concepts[id];
        if (category !== 'all' && c.category !== category) return false;
        if (level !== 'all' && c.level !== level) return false;
        if (q) {
            const hay = PS.normalize(`${c.title} ${c.summary || ''} ${id.replace(/-/g, ' ')}`);
            if (!hay.includes(q)) return false;
        }
        return true;
    });
}

// ======================= Bộ lọc & grid =======================
function psRenderFilters() {
    const countBy = (key, val) => PS.order.filter(id => PS.concepts[id][key] === val).length;
    const cats = [['all', 'Tất cả', PS.order.length]].concat(
        Object.entries(PS_CATEGORIES).map(([k, c]) => [k, `${c.icon} ${c.label}`, countBy('category', k)])
    );
    document.getElementById('categoryFilter').innerHTML = cats.map(([k, label, n]) =>
        `<button class="chip-btn ${PS.state.category === k ? 'active' : ''}" type="button" data-category="${k}" aria-pressed="${PS.state.category === k}">${label} <small>${n}</small></button>`
    ).join('');

    const lvls = [['all', 'Mọi level']].concat(Object.entries(PS_LEVELS).map(([k, l]) => [k, `${l.icon} ${l.label}`]));
    document.getElementById('levelFilter').innerHTML = lvls.map(([k, label]) =>
        `<button class="chip-btn lvl ${k} ${PS.state.level === k ? 'active' : ''}" type="button" data-level="${k}" aria-pressed="${PS.state.level === k}">${label}</button>`
    ).join('');
}

function psNodeCard(id) {
    const c = PS.concepts[id];
    const viewed = !!PS.store.data.viewed[id];
    const qCount = PSPractice.countsFor(id).quiz;
    return `
        <button class="node ${c.level} ${PS.state.selected === id ? 'selected' : ''} ${viewed ? 'viewed' : ''}" type="button" data-concept="${id}">
            <span class="node-top">
                <span class="node-icon" aria-hidden="true">${c.icon}</span>
                ${viewed ? '<span class="node-check" title="Đã xem">✓</span>' : ''}
            </span>
            <span class="node-title">${c.title}</span>
            <span class="node-summary">${c.summary || ''}</span>
            <span class="node-meta">
                <span class="node-level">${PS_LEVELS[c.level].icon} ${PS_LEVELS[c.level].label}</span>
                ${qCount ? `<span class="node-q" title="Số câu trắc nghiệm">📝 ${qCount}</span>` : ''}
            </span>
        </button>
    `;
}

function psPathHtml() {
    return PS_PATH.map(step => `
        <div class="path-step">
            <div class="path-head">${step.icon} ${step.label}</div>
            <div class="chip-row">${step.ids.filter(id => PS.concepts[id]).map(id => {
                const c = PS.concepts[id];
                const viewed = PS.store.data.viewed[id] ? ' viewed' : '';
                return `<button class="concept-chip${viewed}" type="button" data-open-concept="${id}">${c.icon} ${c.title}</button>`;
            }).join('')}</div>
        </div>
    `).join('');
}

function psRenderNodes() {
    const area = document.getElementById('nodesArea');
    const ids = psFilteredIds();
    const { category, level, search } = PS.state;
    const grouped = category === 'all' && level === 'all' && !search.trim();

    const mobileIntro = `
        <details class="mobile-intro">
            <summary>🧭 Bắt đầu từ đâu? Xem lộ trình gợi ý</summary>
            ${psPathHtml()}
        </details>
    `;

    if (!ids.length) {
        area.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon">🔍</div>
                <p>Không tìm thấy concept nào khớp với "<strong>${PS.escape(search)}</strong>".</p>
                <button class="btn-ghost" type="button" data-clear-filters>Xoá bộ lọc</button>
            </div>`;
        return;
    }

    if (grouped) {
        area.innerHTML = mobileIntro + Object.entries(PS_CATEGORIES).map(([cat, meta]) => {
            const catIds = ids.filter(id => PS.concepts[id].category === cat);
            if (!catIds.length) return '';
            return `
                <section class="node-group">
                    <header class="group-head">
                        <h2>${meta.icon} ${meta.label} <small>${catIds.length}</small></h2>
                        <p>${meta.desc}</p>
                    </header>
                    <div class="nodes-grid">${catIds.map(psNodeCard).join('')}</div>
                </section>`;
        }).join('');
    } else {
        area.innerHTML = `
            <div class="result-line">${ids.length} concept${search.trim() ? ` khớp với "<strong>${PS.escape(search)}</strong>"` : ''}</div>
            <div class="nodes-grid">${ids.map(psNodeCard).join('')}</div>`;
    }
}

// ======================= Panel chi tiết =======================
function psSelectConcept(id, opts = {}) {
    const c = PS.concepts[id];
    if (!c) return;
    if (PS.state.view !== 'theory') psSwitchView('theory');
    PS.state.selected = id;
    PS.state.panelTab = opts.tab || 'theory';
    if (!PS.store.data.viewed[id]) {
        PS.store.data.viewed[id] = Date.now();
        PS.store.save();
    }
    psRenderNodes();
    psRenderPanel();
    psUpdateProgress();
    psOpenPanel(true);
    document.getElementById('infoPanel').scrollTop = 0;
    psSetHash(`c=${id}`);
}

function psOpenPanel(open) {
    const panel = document.getElementById('infoPanel');
    const backdrop = document.getElementById('panelBackdrop');
    panel.classList.toggle('active', open);
    backdrop.hidden = !open;
    document.body.classList.toggle('panel-open', open);
}

function psClosePanel() {
    PS.state.selected = null;
    psOpenPanel(false);
    psRenderNodes();
    psRenderPanel();
    psSetHash('');
}

function psRenderPanel() {
    const title = document.getElementById('panelTitle');
    const tabs = document.getElementById('panelTabs');
    const content = document.getElementById('panelContent');
    const id = PS.state.selected;

    if (!id) {
        title.textContent = '🧭 Bắt đầu từ đâu?';
        tabs.classList.add('hidden');
        content.innerHTML = psWelcomeHtml();
        return;
    }

    const c = PS.concepts[id];
    const counts = PSPractice.countsFor(id);
    title.textContent = `${c.icon} ${c.title}`;
    tabs.classList.remove('hidden');
    document.getElementById('panelPracticeCount').textContent = counts.total ? `(${counts.total})` : '';
    tabs.querySelectorAll('.tab-btn').forEach(b => {
        const on = b.dataset.tab === PS.state.panelTab;
        b.classList.toggle('active', on);
        b.setAttribute('aria-selected', on);
    });

    if (PS.state.panelTab === 'practice') {
        PSPractice.renderConceptPractice(content, id);
    } else {
        content.innerHTML = psTheoryHtml(id);
    }
}

function psWelcomeHtml() {
    const total = PS.order.length;
    const viewed = PS.order.filter(id => PS.store.data.viewed[id]).length;
    const pct = Math.round(viewed / total * 100);
    return `
        <div class="welcome">
            <p>Trang gồm <strong>${total} concept</strong> chia 4 nhóm: quy trình (Frameworks), kỹ thuật (Techniques), mô hình tư duy (Mental Models) và các bẫy cần tránh (Pitfalls). Mỗi concept có một tab <strong>Lý thuyết</strong> đầy đủ và một tab <strong>Luyện tập</strong> riêng.</p>
            <div class="progress-line">
                <div class="bar"><span style="width:${pct}%"></span></div>
                <span>Đã xem ${viewed}/${total} concept</span>
            </div>
            <h3>🗺️ Lộ trình gợi ý</h3>
            ${psPathHtml()}
            <h3>🧭 Cách học hiệu quả</h3>
            <ol class="step-list">
                <li>Chọn một concept → đọc tab <strong>📖 Lý thuyết</strong> (dùng mục lục để nhảy nhanh).</li>
                <li>Chuyển sang tab <strong>🏋️ Luyện tập</strong> của concept đó để kiểm tra ngay.</li>
                <li>Vào tab <strong>Luyện tập</strong> lớn ở trên cùng để làm trắc nghiệm tổng hợp, tình huống nhiều bước và bài tự luận.</li>
                <li>Khi gặp vấn đề thật, mở <strong>✅ Checklist</strong> để đi đủ các bước.</li>
            </ol>
            <button class="btn-primary block" type="button" data-view-switch="practice">🏋️ Vào khu luyện tập →</button>
        </div>
    `;
}

function psSectionBody(key, val) {
    const list = (items, cls) => `<ul class="bullet-list ${cls}">${items.map(t => `<li>${t}</li>`).join('')}</ul>`;
    switch (key) {
        case 'when':
            return `
                <div class="when-grid">
                    ${val.use && val.use.length ? `<div class="when-col use"><h4>✅ Nên dùng khi</h4>${list(val.use, '')}</div>` : ''}
                    ${val.avoid && val.avoid.length ? `<div class="when-col avoid"><h4>⛔ Không nên / cẩn thận khi</h4>${list(val.avoid, '')}</div>` : ''}
                </div>`;
        case 'steps':
            return `<ol class="step-list">${val.map(s => `<li>${s}</li>`).join('')}</ol>`;
        case 'signs':
            return list(val, 'signs');
        case 'causes':
            return list(val, 'causes');
        case 'antidotes':
            return list(val, 'antidotes');
        case 'mistakes':
            return list(val, 'mistakes');
        case 'checklist':
            return `<ul class="check-list">${val.map(t => `<li><label><input type="checkbox"> <span>${t}</span></label></li>`).join('')}</ul>`;
        default:
            return val; // what, example, advanced: HTML
    }
}

function psTheoryHtml(id) {
    const c = PS.concepts[id];
    const sections = PS_SECTIONS.filter(s => {
        const v = c[s.key];
        return v && (!Array.isArray(v) || v.length);
    });
    const counts = PSPractice.countsFor(id);
    const related = (c.connections || []).filter(cid => PS.concepts[cid] && cid !== id);

    const ids = psFilteredIds();
    const pos = ids.indexOf(id);
    const list = pos === -1 ? PS.order : ids;
    const idx = list.indexOf(id);
    const prevId = idx > 0 ? list[idx - 1] : null;
    const nextId = idx < list.length - 1 ? list[idx + 1] : null;

    const practiceParts = [];
    if (counts.quiz) practiceParts.push(`${counts.quiz} câu trắc nghiệm`);
    if (counts.exercises) practiceParts.push(`${counts.exercises} bài tự luận`);
    if (counts.cases) practiceParts.push(`${counts.cases} tình huống`);

    return `
        <div class="concept-lead">
            <div class="badge-row">${PS.categoryBadge(c.category)} ${PS.levelBadge(c.level)}</div>
            <p class="concept-summary">${c.summary || ''}</p>
            ${c.origin ? `<p class="concept-origin"><strong>📜 Nguồn gốc:</strong> ${c.origin}</p>` : ''}
        </div>
        <nav class="concept-toc" aria-label="Mục lục">
            ${sections.map(s => `<button type="button" data-jump="sec-${s.key}">${s.icon} ${s.label}</button>`).join('')}
            ${related.length ? '<button type="button" data-jump="sec-related">🔗 Liên quan</button>' : ''}
        </nav>
        ${sections.map(s => `
            <section class="c-sec" id="sec-${s.key}">
                <h3 class="c-sec-title">${s.icon} ${s.label}</h3>
                <div class="c-sec-body">${psSectionBody(s.key, c[s.key])}</div>
            </section>
        `).join('')}
        ${related.length ? `
            <section class="c-sec" id="sec-related">
                <h3 class="c-sec-title">🔗 Concept liên quan</h3>
                <div class="chip-row">${related.map(cid => PS.conceptChip(cid)).join('')}</div>
            </section>` : ''}
        ${practiceParts.length ? `
            <div class="practice-cta">
                <span class="cta-icon" aria-hidden="true">🏋️</span>
                <div class="cta-text"><strong>Kiểm tra hiểu biết</strong><span>${practiceParts.join(' · ')}</span></div>
                <button class="btn-primary" type="button" data-panel-tab="practice">Luyện tập →</button>
            </div>` : ''}
        <div class="concept-nav">
            ${prevId ? `<button type="button" class="btn-ghost" data-open-concept="${prevId}">← ${PS.concepts[prevId].title}</button>` : '<span></span>'}
            ${nextId ? `<button type="button" class="btn-ghost" data-open-concept="${nextId}">${PS.concepts[nextId].title} →</button>` : '<span></span>'}
        </div>
    `;
}

function psJumpTo(secId) {
    const panel = document.getElementById('infoPanel');
    const sec = document.getElementById(secId);
    if (!sec) return;
    const sticky = panel.querySelector('.panel-sticky');
    const offset = (sticky ? sticky.offsetHeight : 0) + 8;
    const top = sec.getBoundingClientRect().top - panel.getBoundingClientRect().top + panel.scrollTop - offset;
    panel.scrollTo({ top, behavior: 'smooth' });
}

// ======================= Chuyển chế độ & tiến độ =======================
function psSwitchView(view) {
    PS.state.view = view;
    document.getElementById('theoryView').classList.toggle('hidden', view !== 'theory');
    document.getElementById('practiceView').classList.toggle('hidden', view !== 'practice');
    document.querySelectorAll('.view-tab').forEach(t => {
        const on = t.dataset.view === view;
        t.classList.toggle('active', on);
        t.setAttribute('aria-selected', on);
    });
    if (view === 'practice') {
        psOpenPanel(false);
        PSPractice.onShow();
        psSetHash('practice');
    } else {
        psRenderNodes();
        psRenderPanel();
        if (PS.state.selected) psOpenPanel(true);
        psSetHash(PS.state.selected ? `c=${PS.state.selected}` : '');
    }
    psUpdateProgress();
}

function psUpdateProgress() {
    const total = PS.order.length;
    const viewed = PS.order.filter(id => PS.store.data.viewed[id]).length;
    const st = PSPractice.getStats();
    document.getElementById('theoryCount').textContent = total;
    document.getElementById('practiceCount').textContent = st.totalItems;
    document.getElementById('viewProgress').innerHTML = `
        <span title="Concept đã xem">📖 ${viewed}/${total}</span>
        <span title="Câu trắc nghiệm đã làm">📝 ${st.answered}/${st.totalQuestions}</span>
        ${st.answered ? `<span title="Tỷ lệ đúng (lần làm gần nhất)">🎯 ${st.accuracy}%</span>` : ''}
    `;
}

function psSetHash(hash) {
    try {
        const url = hash ? `#${hash}` : location.pathname + location.search;
        history.replaceState(null, '', url);
    } catch (e) { /* bỏ qua */ }
}

function psApplyHash() {
    const h = decodeURIComponent(location.hash.replace(/^#/, ''));
    if (h === 'practice') { psSwitchView('practice'); return; }
    const m = h.match(/^c=(.+)$/);
    if (m && PS.concepts[m[1]]) { psSelectConcept(m[1]); return; }
    if (PS.state.view !== 'theory') psSwitchView('theory');
}

// Chiều cao thanh trên cùng (header + tour) → panel sticky canh theo
function psSyncTopbar() {
    const bar = document.getElementById('topbar');
    if (bar) document.documentElement.style.setProperty('--topbar-h', `${bar.offsetHeight}px`);
}

// ======================= Tour =======================
function psStartTour() {
    PS.state.tourActive = true;
    PS.state.tourStep = 0;
    PS.state.category = 'all';
    PS.state.level = 'all';
    PS.state.search = '';
    document.getElementById('conceptSearch').value = '';
    psRenderFilters();
    document.getElementById('tourProgress').classList.remove('hidden');
    psUpdateTour();
}

function psClearHighlights() {
    document.querySelectorAll('.highlight').forEach(el => el.classList.remove('highlight'));
}

function psUpdateTour() {
    const steps = psTourSteps;
    const step = steps[PS.state.tourStep];
    document.getElementById('tourStep').textContent = `Bước ${PS.state.tourStep + 1}/${steps.length}`;
    document.getElementById('tourTitle').textContent = step.title;
    document.getElementById('tourDesc').textContent = step.description;
    document.getElementById('tourPrev').disabled = PS.state.tourStep === 0;
    document.getElementById('tourNext').textContent = PS.state.tourStep === steps.length - 1 ? 'Hoàn thành ✓' : 'Tiếp →';
    psSyncTopbar();

    psClearHighlights();
    if (step.target === 'practice') {
        if (PS.state.view !== 'theory') psSwitchView('theory');
        document.getElementById('tab-practice').classList.add('highlight');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (step.target && PS.concepts[step.target]) {
        psSelectConcept(step.target);
        const node = document.querySelector(`.node[data-concept="${step.target}"]`);
        if (node) {
            node.classList.add('highlight');
            node.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    } else {
        if (PS.state.view !== 'theory') psSwitchView('theory');
        if (PS.state.selected) psClosePanel();
    }
}

function psEndTour() {
    PS.state.tourActive = false;
    document.getElementById('tourProgress').classList.add('hidden');
    psClearHighlights();
    psSyncTopbar();
}

// ======================= Quick tips & Checklist =======================
function psRenderTips() {
    document.getElementById('tipsScroll').innerHTML = quickTips
        .map(t => `<div class="tip-item"><span aria-hidden="true">${t.icon}</span><span>${t.text}</span></div>`)
        .join('');
}

function psRenderChecklist() {
    const saved = PS.store.data.checklist;
    let total = 0, done = 0;
    document.getElementById('checklistItems').innerHTML = problemSolvingChecklist.map((group, gi) => `
        <div class="checklist-group">
            <h3>${group.phase}</h3>
            ${group.items.map((item, ii) => {
                const key = `${gi}-${ii}`;
                total++;
                if (saved[key]) done++;
                return `
                    <label class="checklist-item">
                        <input type="checkbox" data-check="${key}" ${saved[key] ? 'checked' : ''}>
                        <span>${item}</span>
                    </label>`;
            }).join('')}
        </div>
    `).join('');
    document.getElementById('checklistProgress').textContent = `Đã tick ${done}/${total} mục`;
}

function psOpenModal(open) {
    const modal = document.getElementById('checklistModal');
    modal.classList.toggle('hidden', !open);
    if (open) {
        psRenderChecklist();
        document.getElementById('closeChecklist').focus();
    }
}

// ======================= Khởi tạo =======================
function psInit() {
    PS.store.load();
    psBuildConcepts();
    PSPractice.init();

    psSyncTopbar();
    window.addEventListener('resize', psSyncTopbar);

    psRenderTips();
    psRenderFilters();
    psRenderNodes();
    psRenderPanel();
    psUpdateProgress();

    // Chế độ
    document.querySelectorAll('.view-tab').forEach(t =>
        t.addEventListener('click', () => psSwitchView(t.dataset.view)));

    // Bộ lọc
    document.getElementById('categoryFilter').addEventListener('click', e => {
        const b = e.target.closest('[data-category]');
        if (!b) return;
        PS.state.category = b.dataset.category;
        psRenderFilters();
        psRenderNodes();
    });
    document.getElementById('levelFilter').addEventListener('click', e => {
        const b = e.target.closest('[data-level]');
        if (!b) return;
        PS.state.level = b.dataset.level;
        psRenderFilters();
        psRenderNodes();
    });
    let searchTimer = null;
    document.getElementById('conceptSearch').addEventListener('input', e => {
        clearTimeout(searchTimer);
        searchTimer = setTimeout(() => {
            PS.state.search = e.target.value;
            psRenderNodes();
        }, 120);
    });

    // Grid
    document.getElementById('nodesArea').addEventListener('click', e => {
        const n = e.target.closest('.node[data-concept]');
        if (n) psSelectConcept(n.dataset.concept);
        if (e.target.closest('[data-clear-filters]')) {
            PS.state.category = 'all';
            PS.state.level = 'all';
            PS.state.search = '';
            document.getElementById('conceptSearch').value = '';
            psRenderFilters();
            psRenderNodes();
        }
    });

    // Tab trong panel
    document.getElementById('panelTabs').addEventListener('click', e => {
        const b = e.target.closest('.tab-btn');
        if (!b) return;
        PS.state.panelTab = b.dataset.tab;
        psRenderPanel();
        document.getElementById('infoPanel').scrollTop = 0;
    });
    document.getElementById('closePanel').addEventListener('click', psClosePanel);
    document.getElementById('panelBackdrop').addEventListener('click', psClosePanel);

    // Uỷ quyền click toàn trang
    document.addEventListener('click', e => {
        const open = e.target.closest('[data-open-concept]');
        if (open) { psSelectConcept(open.dataset.openConcept); return; }
        const tab = e.target.closest('[data-panel-tab]');
        if (tab) {
            PS.state.panelTab = tab.dataset.panelTab;
            psRenderPanel();
            document.getElementById('infoPanel').scrollTop = 0;
            return;
        }
        const jump = e.target.closest('[data-jump]');
        if (jump) { psJumpTo(jump.dataset.jump); return; }
        const sw = e.target.closest('[data-view-switch]');
        if (sw) { psSwitchView(sw.dataset.viewSwitch); window.scrollTo({ top: 0 }); }
    });

    // Tour
    document.getElementById('startTour').addEventListener('click', psStartTour);
    document.getElementById('tourEnd').addEventListener('click', psEndTour);
    document.getElementById('tourPrev').addEventListener('click', () => {
        if (PS.state.tourStep > 0) { PS.state.tourStep--; psUpdateTour(); }
    });
    document.getElementById('tourNext').addEventListener('click', () => {
        if (PS.state.tourStep < psTourSteps.length - 1) { PS.state.tourStep++; psUpdateTour(); }
        else psEndTour();
    });

    // Checklist
    document.getElementById('showChecklist').addEventListener('click', () => psOpenModal(true));
    document.getElementById('closeChecklist').addEventListener('click', () => psOpenModal(false));
    document.getElementById('checklistModal').addEventListener('click', e => {
        if (e.target.id === 'checklistModal') psOpenModal(false);
    });
    document.getElementById('checklistItems').addEventListener('change', e => {
        const key = e.target.dataset.check;
        if (!key) return;
        if (e.target.checked) PS.store.data.checklist[key] = true;
        else delete PS.store.data.checklist[key];
        PS.store.save();
        psRenderChecklist();
    });
    document.getElementById('resetChecklist').addEventListener('click', () => {
        PS.store.data.checklist = {};
        PS.store.save();
        psRenderChecklist();
    });

    // Esc: đóng modal, rồi panel (mobile)
    document.addEventListener('keydown', e => {
        if (e.key !== 'Escape') return;
        if (!document.getElementById('checklistModal').classList.contains('hidden')) { psOpenModal(false); return; }
        if (PS.state.tourActive) { psEndTour(); return; }
        if (PS.state.selected && window.matchMedia('(max-width: 900px)').matches) psClosePanel();
    });

    // Link có hash (#c=<id> hoặc #practice) mở đúng nội dung, kể cả khi trang đang mở sẵn
    window.addEventListener('hashchange', psApplyHash);
    psApplyHash();
}

document.addEventListener('DOMContentLoaded', psInit);
