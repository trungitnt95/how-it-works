/* Algo Lab — catalog, search/filter, topic detail, progress */
(function () {
    'use strict';

    const Algo = window.Algo;
    const topics = Algo.topics;
    const cats = Algo.categories;
    const LEVELS = Algo.levels;
    const catById = Object.fromEntries(cats.map((c) => [c.id, c]));
    const catIndex = Object.fromEntries(cats.map((c, i) => [c.id, i]));
    const topicById = Object.fromEntries(topics.map((t) => [t.id, t]));

    const $ = (sel, root) => (root || document).querySelector(sel);
    const esc = (s) => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    const norm = (s) => String(s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/đ/g, 'd');
    const stripTags = (s) => String(s || '').replace(/<[^>]+>/g, ' ').replace(/&[a-z]+;/g, ' ');

    function readJSON(key, fallback) {
        try {
            const v = localStorage.getItem(key);
            return v ? JSON.parse(v) : fallback;
        } catch (e) {
            return fallback;
        }
    }
    function writeJSON(key, value) {
        try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) { /* storage unavailable */ }
    }

    /* ---------- derived data ---------- */
    topics.forEach((t, i) => {
        t._i = i;
        t._title = norm(t.title + ' ' + (t.en || ''));
        t._tagList = (t.tags || []).map(norm);
        t._tags = t._tagList.join(' | ');
        t._body = norm(t.summary + ' ' + stripTags(t.idea) + ' ' + catById[t.cat].name);
        t._viz = !t.viz ? [] : typeof t.viz === 'string' ? [{ key: t.viz, label: '' }] : t.viz;
    });
    const roadmap = topics.slice().sort((a, b) => catIndex[a.cat] - catIndex[b.cat] || a.level - b.level || a._i - b._i);
    roadmap.forEach((t, i) => { t._r = i; });

    function bigO(t) {
        if (!t.cx || !t.cx.rows) return '';
        const rows = t.cx.rows;
        const pick = rows.find((r) => /trung bình|thời gian/i.test(r[0]) && /^O\(/.test(r[1])) || rows.find((r) => /^O\(/.test(r[1]));
        if (!pick) return '';
        const s = pick[1];
        let depth = 0;
        for (let i = 1; i < s.length; i++) {
            if (s[i] === '(') depth++;
            else if (s[i] === ')') { depth--; if (depth === 0) return s.slice(0, i + 1); }
        }
        return s;
    }

    /* ---------- progress ---------- */
    const LEARN_KEY = 'algoLearned';
    const learned = new Set(readJSON(LEARN_KEY, []).filter((id) => topicById[id]));
    function toggleLearned(id, force) {
        const on = force != null ? force : !learned.has(id);
        if (on) learned.add(id); else learned.delete(id);
        writeJSON(LEARN_KEY, Array.from(learned));
    }

    /* ---------- filter state ---------- */
    const state = { q: '', cat: 'all', levels: new Set([1, 2, 3]), viz: false, interview: false, unlearned: false, sort: 'roadmap' };

    function levelHTML(l, withText) {
        return `<span class="lvl lvl-${l}" title="Mức độ: ${LEVELS[l].name}"><i></i><i></i><i></i>${withText === false ? '' : `<b>${LEVELS[l].name}</b>`}</span>`;
    }

    function flagsHTML(t) {
        return (t._viz.length ? '<span class="flag flag-viz" title="Có mô phỏng từng bước">▶</span>' : '') +
            (t.interview ? '<span class="flag flag-int" title="Hay gặp khi phỏng vấn">★</span>' : '');
    }

    function cardHTML(t) {
        const c = catById[t.cat];
        const cx = bigO(t);
        const isL = learned.has(t.id);
        return `<a class="card${isL ? ' is-learned' : ''}" href="#/t/${t.id}" data-id="${t.id}">
            <div class="card-top">${levelHTML(t.level)}<span class="card-flags">${flagsHTML(t)}</span></div>
            <h3 class="card-title">${esc(t.title)}</h3>
            ${t.en ? `<div class="card-en">${esc(t.en)}</div>` : ''}
            <p class="card-sum">${esc(t.summary)}</p>
            <div class="card-foot">${cx ? `<span class="cx">${esc(cx)}</span>` : ''}<span class="card-cat">${c.icon} ${esc(c.name)}</span>${isL ? '<span class="learned-tag">✓ Đã học</span>' : ''}</div>
        </a>`;
    }

    const reEsc = (w) => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    function scoreTopic(t, words, phrase) {
        let s = 0;
        for (const w of words) {
            if (t._title.includes(w)) s += new RegExp('(^|[^a-z0-9])' + reEsc(w)).test(t._title) ? 10 : 6;
            else if (t._tags.includes(w)) s += 4;
            else if (t._body.includes(w)) s += 1;
            else return 0;
        }
        if (t._tagList.includes(phrase)) s += 3;              // khớp đúng một tag
        if (words.length > 1) {
            if (t._title.includes(phrase)) s += 12;
            else if (t._tags.includes(phrase)) s += 8;
            else if (t._body.includes(phrase)) s += 4;
        }
        return s;
    }

    function filtered() {
        const phrase = norm(state.q.trim());
        const words = phrase.split(/\s+/).filter(Boolean);
        const out = [];
        topics.forEach((t) => {
            if (state.cat !== 'all' && t.cat !== state.cat) return;
            if (!state.levels.has(t.level)) return;
            if (state.viz && !t._viz.length) return;
            if (state.interview && !t.interview) return;
            if (state.unlearned && learned.has(t.id)) return;
            const sc = words.length ? scoreTopic(t, words, phrase) : 1;
            if (!sc) return;
            out.push({ t, sc });
        });
        return { list: out, searching: words.length > 0 };
    }

    /* ---------- catalog rendering ---------- */
    const els = {
        catalog: $('#catalogView'),
        detail: $('#detailView'),
        results: $('#results'),
        empty: $('#emptyState'),
        count: $('#resultCount'),
        reset: $('#resetFilters'),
        search: $('#searchInput'),
        catChips: $('#catChips'),
        levelChips: $('#levelChips'),
        flagChips: $('#flagChips'),
        sort: $('#sortSelect'),
        heroStats: $('#heroStats'),
        heroCta: $('#heroCta'),
        topic: $('#topic'),
        sideNav: $('#sideNav')
    };

    function renderChips() {
        const counts = {};
        topics.forEach((t) => { counts[t.cat] = (counts[t.cat] || 0) + 1; });
        els.catChips.innerHTML = [`<button type="button" class="chip${state.cat === 'all' ? ' on' : ''}" data-cat="all">Tất cả <span class="n">${topics.length}</span></button>`]
            .concat(cats.map((c) => `<button type="button" class="chip${state.cat === c.id ? ' on' : ''}" data-cat="${c.id}"><span class="chip-ico">${c.icon}</span>${esc(c.name)} <span class="n">${counts[c.id] || 0}</span></button>`))
            .join('');
        els.levelChips.innerHTML = [1, 2, 3].map((l) => `<button type="button" class="chip chip-lvl${state.levels.has(l) ? ' on' : ''}" data-level="${l}" aria-pressed="${state.levels.has(l)}">${levelHTML(l)}</button>`).join('');
        els.flagChips.innerHTML = [
            ['viz', '▶ Có mô phỏng'],
            ['interview', '★ Hay phỏng vấn'],
            ['unlearned', '○ Chưa học']
        ].map(([k, label]) => `<button type="button" class="chip chip-flag${state[k] ? ' on' : ''}" data-flag="${k}" aria-pressed="${state[k]}">${label}</button>`).join('');
    }

    function renderHero() {
        const total = topics.length;
        const vizCount = topics.filter((t) => t._viz.length).length;
        const done = learned.size;
        const pct = Math.round((done / total) * 100);
        const byLevel = [1, 2, 3].map((l) => topics.filter((t) => t.level === l).length);
        els.heroStats.innerHTML = `
            <div class="stat"><b>${total}</b><span>chủ đề</span></div>
            <div class="stat"><b>${vizCount}</b><span>mô phỏng</span></div>
            <div class="stat stat-levels">${[1, 2, 3].map((l, i) => `<span>${levelHTML(l)}<em>${byLevel[i]}</em></span>`).join('')}</div>
            <div class="stat stat-progress"><b>${pct}%</b><span>đã học (${done}/${total})</span><div class="bar"><i style="width:${pct}%"></i></div></div>`;
        const next = roadmap.find((t) => !learned.has(t.id));
        els.heroCta.innerHTML = next
            ? `<a class="btn btn-primary" href="#/t/${next.id}">${done ? 'Học tiếp' : 'Bắt đầu'}: ${esc(next.title)} →</a><a class="btn btn-ghost" href="#results" id="jumpResults">Xem toàn bộ lộ trình</a>`
            : '<span class="all-done">Bạn đã đánh dấu học xong mọi chủ đề 🎉</span>';
    }

    function groupHTML(id, icon, title, desc, list, extraClass, progress) {
        return `<section class="group ${extraClass || ''}" id="g-${id}">
            <header class="group-head">
                <span class="group-icon">${icon}</span>
                <div class="group-text"><h2>${esc(title)}</h2>${desc ? `<p>${esc(desc)}</p>` : ''}</div>
                ${progress ? `<div class="group-progress" title="Đã học ${progress[0]}/${progress[1]}"><span>${progress[0]}/${progress[1]}</span><div class="bar"><i style="width:${Math.round((progress[0] / progress[1]) * 100)}%"></i></div></div>` : ''}
            </header>
            <div class="grid">${list.map(cardHTML).join('')}</div>
        </section>`;
    }

    function renderResults() {
        const { list, searching } = filtered();
        const n = list.length;
        els.count.textContent = `Hiển thị ${n} / ${topics.length} chủ đề`;
        const active = state.q || state.cat !== 'all' || state.levels.size !== 3 || state.viz || state.interview || state.unlearned;
        els.reset.hidden = !active;
        els.empty.hidden = n > 0;
        if (!n) { els.results.innerHTML = ''; return; }
        let html = '';
        if (searching) {
            list.sort((a, b) => b.sc - a.sc || a.t._r - b.t._r);
            html = groupHTML('search', '🔎', `Kết quả cho "${state.q.trim()}"`, 'Xếp theo mức độ liên quan', list.map((x) => x.t), 'group-flat');
        } else if (state.sort === 'level') {
            [1, 2, 3].forEach((l) => {
                const g = list.map((x) => x.t).filter((t) => t.level === l).sort((a, b) => a._r - b._r);
                if (g.length) html += groupHTML('lv' + l, levelHTML(l, false), LEVELS[l].name, LEVELS[l].desc, g, 'group-level');
            });
        } else if (state.sort === 'az') {
            const g = list.map((x) => x.t).sort((a, b) => a.title.localeCompare(b.title, 'vi'));
            html = groupHTML('az', 'A–Z', 'Theo tên', '', g, 'group-flat');
        } else {
            cats.forEach((c) => {
                const g = list.map((x) => x.t).filter((t) => t.cat === c.id).sort((a, b) => a._r - b._r);
                if (!g.length) return;
                const all = topics.filter((t) => t.cat === c.id);
                html += groupHTML(c.id, c.icon, c.name, c.desc, g, 'group-cat', [all.filter((t) => learned.has(t.id)).length, all.length]);
            });
        }
        els.results.innerHTML = html;
    }

    function renderCatalog() {
        renderChips();
        renderHero();
        renderResults();
    }

    /* ---------- catalog events ---------- */
    let searchT = null;
    els.search.addEventListener('input', () => {
        clearTimeout(searchT);
        searchT = setTimeout(() => {
            state.q = els.search.value;
            renderResults();
        }, 80);
    });
    els.search.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            els.search.value = '';
            state.q = '';
            renderResults();
            els.search.blur();
        } else if (e.key === 'Enter') {
            const first = els.results.querySelector('.card');
            if (first) location.hash = first.getAttribute('href');
        }
    });
    els.catChips.addEventListener('click', (e) => {
        const b = e.target.closest('[data-cat]');
        if (!b) return;
        state.cat = b.dataset.cat;
        renderChips();
        renderResults();
    });
    els.levelChips.addEventListener('click', (e) => {
        const b = e.target.closest('[data-level]');
        if (!b) return;
        const l = Number(b.dataset.level);
        if (state.levels.has(l) && state.levels.size === 1) {
            state.levels = new Set([1, 2, 3]);           // bỏ chọn mức cuối cùng → hiện lại tất cả
        } else if (state.levels.size === 3) {
            state.levels = new Set([l]);                 // lần bấm đầu: chỉ xem mức này
        } else if (state.levels.has(l)) {
            state.levels.delete(l);
        } else {
            state.levels.add(l);
        }
        renderChips();
        renderResults();
    });
    els.flagChips.addEventListener('click', (e) => {
        const b = e.target.closest('[data-flag]');
        if (!b) return;
        state[b.dataset.flag] = !state[b.dataset.flag];
        renderChips();
        renderResults();
    });
    els.sort.addEventListener('change', () => {
        state.sort = els.sort.value;
        renderResults();
    });
    els.reset.addEventListener('click', () => {
        Object.assign(state, { q: '', cat: 'all', levels: new Set([1, 2, 3]), viz: false, interview: false, unlearned: false });
        els.search.value = '';
        renderChips();
        renderResults();
    });
    els.heroCta.addEventListener('click', (e) => {
        if (e.target.id === 'jumpResults') {
            e.preventDefault();
            $('#toolbar').scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });

    /* ---------- detail rendering ---------- */
    let currentSim = null;
    let currentTopic = null;

    function list(items, cls) {
        return `<ul class="${cls || ''}">${items.map((x) => `<li>${x}</li>`).join('')}</ul>`;
    }

    function tableHTML(tb) {
        return `<div class="table-wrap"><table class="tbl">
            ${tb.head ? `<thead><tr>${tb.head.map((h) => `<th>${esc(h)}</th>`).join('')}</tr></thead>` : ''}
            <tbody>${tb.rows.map((r) => `<tr>${r.map((c, i) => (i === 0 ? `<th scope="row">${esc(c)}</th>` : `<td>${esc(c)}</td>`)).join('')}</tr>`).join('')}</tbody>
        </table></div>`;
    }

    function sideNavHTML(t) {
        const c = catById[t.cat];
        const items = roadmap.filter((x) => x.cat === t.cat);
        return `<div class="side-head"><span>${c.icon}</span><div><b>${esc(c.name)}</b><small>${items.filter((x) => learned.has(x.id)).length}/${items.length} đã học</small></div></div>
            <ol class="side-list">${items.map((x) => `<li><a href="#/t/${x.id}" class="${x.id === t.id ? 'on' : ''}${learned.has(x.id) ? ' done' : ''}">${levelHTML(x.level, false)}<span class="st">${esc(x.title)}</span>${learned.has(x.id) ? '<em aria-label="đã học">✓</em>' : ''}</a></li>`).join('')}</ol>
            <div class="side-other">${cats.filter((k) => k.id !== t.cat).map((k) => `<button type="button" data-goto-cat="${k.id}" title="${esc(k.name)}">${k.icon}</button>`).join('')}</div>`;
    }

    function learnBtnHTML(t, big) {
        const on = learned.has(t.id);
        return `<button type="button" class="learn-btn${on ? ' on' : ''}${big ? ' big' : ''}" data-learn="${t.id}" aria-pressed="${on}">${on ? '✓ Đã học' : big ? '✓ Đánh dấu đã học bài này' : '○ Đánh dấu đã học'}</button>`;
    }

    function renderDetail(t) {
        const c = catById[t.cat];
        const idx = t._r;
        const prev = roadmap[idx - 1], next = roadmap[idx + 1];
        const cx = t.cx ? tableHTML({ head: ['', 'Độ phức tạp'], rows: t.cx.rows }) : '';
        const vizTabs = t._viz.length > 1
            ? `<div class="viz-tabs" role="tablist">${t._viz.map((v, i) => `<button type="button" role="tab" class="viz-tab${i === 0 ? ' on' : ''}" data-viz="${i}" aria-selected="${i === 0}">${esc(v.label || 'Mô phỏng ' + (i + 1))}</button>`).join('')}</div>`
            : '';
        const practice = (t.practice || []).map(([name, slug]) => slug
            ? `<li><a href="https://leetcode.com/problems/${slug}/" target="_blank" rel="noopener">${esc(name)}<span aria-hidden="true"> ↗</span></a></li>`
            : `<li><span>${esc(name)}</span></li>`).join('');
        const related = (t.related || []).map((id) => topicById[id]).filter(Boolean);

        els.topic.innerHTML = `
            <nav class="crumbs" aria-label="Đường dẫn"><a href="#/">Danh mục</a><span>/</span><button type="button" class="link-btn" data-goto-cat="${c.id}">${c.icon} ${esc(c.name)}</button></nav>
            <header class="topic-head">
                <h1>${esc(t.title)}</h1>
                ${t.en ? `<p class="topic-en">${esc(t.en)}</p>` : ''}
                <div class="topic-meta">
                    ${levelHTML(t.level)}
                    ${t.interview ? '<span class="flag flag-int">★ Hay gặp khi phỏng vấn</span>' : ''}
                    ${t._viz.length ? '<span class="flag flag-viz">▶ Có mô phỏng</span>' : ''}
                    ${learnBtnHTML(t)}
                </div>
                <p class="lead">${esc(t.summary)}</p>
                ${(t.tags || []).length ? `<div class="tags">${t.tags.map((g) => `<button type="button" class="tag" data-tag="${esc(g)}">#${esc(g)}</button>`).join('')}</div>` : ''}
            </header>

            <section class="sec">
                <h2><span class="sec-ico">💡</span>Ý tưởng cốt lõi</h2>
                <p class="prose">${t.idea}</p>
                ${t.analogy ? `<div class="callout"><b>Ví dụ đời thường</b><p>${t.analogy}</p></div>` : ''}
            </section>

            ${t._viz.length ? `<section class="sec sec-viz" id="sec-viz">
                <h2><span class="sec-ico">▶</span>Mô phỏng từng bước</h2>
                <p class="sec-note">Bấm ▶ để chạy, hoặc dùng ◀ ▶| để đi từng bước và đọc giải thích bên dưới khung. Có thể đổi dữ liệu đầu vào.</p>
                ${vizTabs}
                <div id="simHost"></div>
            </section>` : ''}

            ${t.steps ? `<section class="sec"><h2><span class="sec-ico">🧭</span>Cách làm</h2><ol class="steps">${t.steps.map((s) => `<li>${s}</li>`).join('')}</ol></section>` : ''}

            ${t.table ? `<section class="sec"><h2><span class="sec-ico">📋</span>${esc(t.table.title || 'Bảng tóm tắt')}</h2>${tableHTML(t.table)}</section>` : ''}

            ${cx ? `<section class="sec"><h2><span class="sec-ico">⏱</span>Độ phức tạp</h2>${cx}</section>` : ''}

            ${(t.when || t.pitfalls) ? `<section class="sec two-col">
                ${t.when ? `<div class="box box-when"><h3>Khi nào dùng / dấu hiệu nhận biết</h3>${list(t.when)}</div>` : ''}
                ${t.pitfalls ? `<div class="box box-pit"><h3>Lỗi thường gặp</h3>${list(t.pitfalls)}</div>` : ''}
            </section>` : ''}

            <section class="sec">
                <h2><span class="sec-ico">⌨</span>Code mẫu</h2>
                <div class="code-box">
                    <div class="code-head"><span>Python 3</span><button type="button" class="copy-btn" data-copy>Sao chép</button></div>
                    <pre class="code"><code>${t.code.split('\n').map((ln) => Algo.highlightPy(ln) || ' ').join('\n')}</code></pre>
                </div>
            </section>

            ${practice ? `<section class="sec"><h2><span class="sec-ico">🏋</span>Luyện tập</h2><ul class="practice">${practice}</ul></section>` : ''}

            ${related.length ? `<section class="sec"><h2><span class="sec-ico">🔗</span>Chủ đề liên quan</h2><div class="related">${related.map((r) => `<a class="rel" href="#/t/${r.id}">${levelHTML(r.level, false)}<span>${esc(r.title)}</span>${learned.has(r.id) ? '<em>✓</em>' : ''}</a>`).join('')}</div></section>` : ''}

            <div class="finish">${learnBtnHTML(t, true)}</div>
            <nav class="pager" aria-label="Bài trước / bài sau">
                ${prev ? `<a class="pg pg-prev" href="#/t/${prev.id}"><small>← Bài trước</small><b>${esc(prev.title)}</b></a>` : '<span></span>'}
                ${next ? `<a class="pg pg-next" href="#/t/${next.id}"><small>Bài sau →</small><b>${esc(next.title)}</b></a>` : '<span></span>'}
            </nav>`;

        els.sideNav.innerHTML = sideNavHTML(t);
        mountSim(t, 0);
        document.title = `${t.title} - Algo Lab`;
    }

    function mountSim(t, i) {
        if (currentSim) { currentSim.destroy(); currentSim = null; }
        if (!t._viz.length) return;
        const host = $('#simHost');
        const v = Algo.viz[t._viz[i].key];
        if (host && v) currentSim = Algo.createSimulator(host, v);
    }

    els.topic.addEventListener('click', (e) => {
        const tab = e.target.closest('[data-viz]');
        if (tab) {
            const i = Number(tab.dataset.viz);
            els.topic.querySelectorAll('.viz-tab').forEach((b, k) => {
                b.classList.toggle('on', k === i);
                b.setAttribute('aria-selected', String(k === i));
            });
            mountSim(currentTopic, i);
            return;
        }
        const tag = e.target.closest('[data-tag]');
        if (tag) {
            state.q = tag.dataset.tag;
            els.search.value = state.q;
            state.cat = 'all';
            pendingScrollTop = true;
            location.hash = '#/';
            return;
        }
        const copy = e.target.closest('[data-copy]');
        if (copy) {
            const done = () => {
                copy.textContent = 'Đã chép ✓';
                setTimeout(() => { copy.textContent = 'Sao chép'; }, 1600);
            };
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(currentTopic.code).then(done, () => { selectCode(); });
            } else {
                selectCode();
            }
        }
    });

    function selectCode() {
        const code = els.topic.querySelector('pre.code');
        if (!code) return;
        const r = document.createRange();
        r.selectNodeContents(code);
        const sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(r);
    }

    // learned toggles + category jumps (both views)
    document.addEventListener('click', (e) => {
        const lb = e.target.closest('[data-learn]');
        if (lb) {
            const id = lb.dataset.learn;
            toggleLearned(id);
            document.querySelectorAll(`[data-learn="${id}"]`).forEach((b) => {
                const big = b.classList.contains('big');
                b.outerHTML = learnBtnHTML(topicById[id], big);
            });
            if (currentTopic) els.sideNav.innerHTML = sideNavHTML(currentTopic);
            return;
        }
        const gc = e.target.closest('[data-goto-cat]');
        if (gc) {
            state.cat = gc.dataset.gotoCat;
            state.q = '';
            els.search.value = '';
            pendingScrollTop = true;
            location.hash = '#/';
        }
    });

    /* ---------- routing ---------- */
    let catalogScroll = 0;
    let pendingScrollTop = false;
    let route = 'catalog';

    function showCatalog() {
        if (currentSim) { currentSim.destroy(); currentSim = null; }
        currentTopic = null;
        const wasDetail = route === 'detail';
        route = 'catalog';
        els.detail.hidden = true;
        els.catalog.hidden = false;
        document.title = 'Thuật Toán & Cấu Trúc Dữ Liệu - How It Works';
        renderCatalog();
        if (pendingScrollTop) {
            pendingScrollTop = false;
            requestAnimationFrame(() => $('#toolbar').scrollIntoView({ block: 'start' }));
        } else if (wasDetail) {
            requestAnimationFrame(() => window.scrollTo(0, catalogScroll));
        }
    }

    function showDetail(id) {
        if (route === 'catalog') catalogScroll = window.scrollY;
        route = 'detail';
        currentTopic = topicById[id];
        els.catalog.hidden = true;
        els.detail.hidden = false;
        renderDetail(currentTopic);
        window.scrollTo(0, 0);
    }

    function onRoute() {
        const h = location.hash || '#/';
        const m = h.match(/^#\/t\/([\w-]+)/);
        if (m && topicById[m[1]]) showDetail(m[1]);
        else showCatalog();
    }
    window.addEventListener('hashchange', onRoute);

    /* ---------- keyboard ---------- */
    document.addEventListener('keydown', (e) => {
        const tag = (e.target.tagName || '').toLowerCase();
        const typing = tag === 'input' || tag === 'textarea' || tag === 'select' || e.target.isContentEditable;
        if (e.ctrlKey || e.metaKey || e.altKey) return;
        if (e.key === '/' && !typing) {
            e.preventDefault();
            if (route !== 'catalog') location.hash = '#/';
            setTimeout(() => { els.search.focus(); els.search.select(); }, 0);
            return;
        }
        if (route !== 'detail' || typing) return;
        if (e.key === 'Escape') { location.hash = '#/'; return; }
        if (!currentSim) return;
        if (e.key === ' ' && tag !== 'button' && tag !== 'a') { e.preventDefault(); currentSim.toggle(); }
        else if (e.key === 'ArrowRight') { e.preventDefault(); currentSim.step(1); }
        else if (e.key === 'ArrowLeft') { e.preventDefault(); currentSim.step(-1); }
    });

    /* ---------- theme ---------- */
    const themeBtn = $('#themeBtn');
    function effectiveTheme() {
        const t = document.documentElement.getAttribute('data-theme');
        if (t) return t;
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    }
    themeBtn.addEventListener('click', () => {
        const next = effectiveTheme() === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        try { localStorage.setItem('algoTheme', next); } catch (e) { /* ignore */ }
    });

    onRoute();
})();
