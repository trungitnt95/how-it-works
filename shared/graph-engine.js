// Shared concept-graph engine (D3 force layout) used by english-grammar/graph.html and health/graph.html.
// Page contract: element ids graph, graphPanel, graphCount, graphLegend, graphSearchBar, graphSearch, graphSearchBtn,
// graphHelpBtn, graphStage, graphDepth, graphDepthVal, graphReset (see graph.html of either topic) and d3 v7 loaded first.
//
// KnowledgeGraph.init({
//   cats:   { id: { label, color } }                       node groups
//   types:  { id: { label, hint, color, dash, width, both, out?, in? } }   link kinds; out/in name the two directions in grouped panels
//   nodes:  [{ id, label, vi, cat, desc (html), topic?, more?, table?, facts?, src? }]
//   links:  [[source, target, label, type, ev?]]            ev = key of cfg.evidence, marks weaker (e.g. observational) links
//   stages: [{ id, title, after?, nodes }]                   learning path / entry points, optional
//   topicUrl(id) -> href of a lesson
//   text:   optional overrides of the UI strings below
//   groupNeighbors: true groups the panel's related nodes by link type and direction
//   evidence: { key: { label, mark } }
// })
(function () {
    const DEFAULT_TEXT = {
        unit: 'khái niệm',
        linkUnit: 'liên kết',
        related: 'Liên quan',
        lesson: 'Mở bài học →',
        more: 'Bài liên quan',
        facts: 'Con số cần nhớ',
        source: 'Nguồn',
        helpTitle: 'Hướng dẫn',
        helpItems: [
            'Rê chuột (hoặc chạm) vào một nút để làm nổi các nút liên quan; nhấn để xem chi tiết và mở bài học.',
            'Mũi tên <em>A → B</em> đọc là “A [nhãn] B”. Kiểu nét và màu cho biết loại liên kết (bảng bên dưới); bấm vào một loại để ẩn/hiện nó.',
            'Nhóm khái niệm, <em>Độ sâu</em> và <em>Đặt lại</em> nằm sau nút 🔍. Khi chọn một nút, đồ thị chỉ hiện các nút trong phạm vi <em>Độ sâu</em> (mặc định 2 bước).',
            'Kéo để di chuyển, cuộn hoặc chụm hai ngón để phóng to; <em>Đặt lại</em> để về bố cục ban đầu.'
        ],
        typesTitle: 'Loại liên kết',
        stageTitle: 'Lộ trình học',
        stageHint: 'Học theo thứ tự các giai đoạn; mỗi giai đoạn dựa trên các giai đoạn trước. Chọn một giai đoạn ở nút 🔍 để làm nổi các khái niệm của nó trên đồ thị.',
        stageCols: ['Giai đoạn', 'Khái niệm', 'Cần có trước'],
        stagePrefix: 'Giai đoạn ',
        depthAll: 'tất cả',
        depthStep: 'bước',
        close: 'Đóng'
    };

    function init(cfg) {
        const text = { ...DEFAULT_TEXT, ...(cfg.text || {}) };
        const cats = cfg.cats;
        const types = cfg.types;
        const roadmap = cfg.stages || [];
        const evidence = cfg.evidence || {};
        const topicUrl = cfg.topicUrl;
        const nodes = cfg.nodes.map(n => ({ ...n }));
        const byId = new Map(nodes.map(n => [n.id, n]));

        // The data files are hand-written, so a typo would otherwise silently drop an edge; say so in the console.
        const links = [];
        cfg.links.forEach(([source, target, label, type, ev]) => {
            if (!byId.has(source) || !byId.has(target)) { console.warn('[graph] link skipped, unknown node:', source, '→', target); return; }
            if (!types[type]) { console.warn('[graph] link skipped, unknown type:', source, '→', target, type); return; }
            links.push({ source, target, label, type, ev });
        });
        nodes.forEach(n => { if (!cats[n.cat]) console.warn('[graph] node with unknown group:', n.id, n.cat); });

        const adj = new Map(nodes.map(n => [n.id, new Set()]));
        links.forEach(l => { adj.get(l.source).add(l.target); adj.get(l.target).add(l.source); });
        nodes.forEach(n => { n.degree = adj.get(n.id).size; });
        const radius = n => 5 + Math.sqrt(n.degree) * 2.6;

        const svg = d3.select('#graph');
        const defs = svg.append('defs');
        // one arrowhead per link type; orient auto-start-reverse lets the same marker serve both ends of a two-way link
        Object.entries(types).forEach(([key, t]) => {
            defs.append('marker').attr('id', 'arrow-' + key).attr('viewBox', '0 -5 10 10').attr('refX', 10).attr('refY', 0)
                .attr('markerWidth', 7).attr('markerHeight', 7).attr('orient', 'auto-start-reverse')
                .append('path').attr('d', 'M0,-4.5L10,0L0,4.5Z').attr('fill', t.color);
        });
        const layer = svg.append('g');
        const linkSel = layer.append('g').selectAll('line').data(links).join('line')
            .attr('class', d => 'link t-' + d.type + (d.ev ? ' ev-' + d.ev : ''))
            .attr('stroke', d => types[d.type].color).attr('stroke-width', d => types[d.type].width)
            .attr('stroke-dasharray', d => types[d.type].dash || null)
            .attr('marker-end', d => `url(#arrow-${d.type})`)
            .attr('marker-start', d => types[d.type].both ? `url(#arrow-${d.type})` : null);
        const elabelSel = layer.append('g').selectAll('text').data(links).join('text')
            .attr('class', 'elabel hidden').attr('text-anchor', 'middle').text(d => d.label);
        const nodeSel = layer.append('g').selectAll('g').data(nodes).join('g').attr('class', 'node');
        nodeSel.append('circle').attr('r', radius).attr('fill', d => (cats[d.cat] || { color: '#888' }).color);
        nodeSel.append('text').attr('dy', d => radius(d) + 12).attr('text-anchor', 'middle').text(d => d.label);
        nodeSel.append('title').text(d => `${d.label} – ${d.vi}`);

        function ticked() {
            linkSel.each(function (d) {
                const dx = d.target.x - d.source.x, dy = d.target.y - d.source.y;
                const len = Math.hypot(dx, dy) || 1;
                const gap = radius(d.target) + 2;   // stop at the node rim so the arrowhead stays visible
                const gap0 = types[d.type].both ? radius(d.source) + 2 : 0;
                d3.select(this)
                    .attr('x1', d.source.x + (dx / len) * gap0).attr('y1', d.source.y + (dy / len) * gap0)
                    .attr('x2', d.target.x - (dx / len) * gap).attr('y2', d.target.y - (dy / len) * gap);
            });
            elabelSel.attr('x', d => (d.source.x + d.target.x) / 2).attr('y', d => (d.source.y + d.target.y) / 2);
            nodeSel.attr('transform', d => `translate(${d.x},${d.y})`);
        }

        const sim = d3.forceSimulation(nodes)
            .force('link', d3.forceLink(links).id(d => d.id).distance(120).strength(0.4))
            .force('charge', d3.forceManyBody().strength(-900).distanceMax(700))
            .force('collide', d3.forceCollide().radius(d => radius(d) + 22))
            .force('x', d3.forceX().strength(0.012))
            .force('y', d3.forceY().strength(0.09))
            .on('tick', ticked);

        // with reduced motion, settle the layout up front instead of animating it
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (reduceMotion) { sim.stop(); sim.tick(300); ticked(); }

        // zoom / pan, centred on the origin
        let userMoved = false;
        const zoom = d3.zoom().scaleExtent([0.3, 4]).on('zoom', e => { layer.attr('transform', e.transform); if (e.sourceEvent) userMoved = true; });
        svg.call(zoom).on('dblclick.zoom', null);
        // centre and scale the whole graph into the viewport (called again once the layout has settled)
        function resetView(subset) {
            const { width, height } = svg.node().getBoundingClientRect();
            const pool = subset ? nodes.filter(n => subset.has(n.id)) : nodes;
            const xs = pool.map(n => n.x || 0), ys = pool.map(n => n.y || 0);
            const bw = Math.max(...xs) - Math.min(...xs) + 140, bh = Math.max(...ys) - Math.min(...ys) + 100;
            const k = Math.max(0.3, Math.min(subset ? 1.5 : 1.1, Math.min(width / bw, height / bh)));
            const cx = (Math.max(...xs) + Math.min(...xs)) / 2, cy = (Math.max(...ys) + Math.min(...ys)) / 2;
            svg.call(zoom.transform, d3.zoomIdentity.translate(width / 2 - cx * k, height / 2 - cy * k).scale(k));
        }
        resetView();
        sim.on('end.fit', () => { if (!userMoved) resetView(); });
        window.addEventListener('resize', () => resetView(stage ? new Set(roadmap.find(st => st.id === stage).nodes) : undefined));

        // drag
        nodeSel.call(d3.drag()
            .on('start', (e, d) => { if (!e.active) sim.alphaTarget(0.25).restart(); d.fx = d.x; d.fy = d.y; })
            .on('drag', (e, d) => { d.fx = e.x; d.fy = e.y; })
            .on('end', (e, d) => { if (!e.active) sim.alphaTarget(0); d.fx = null; d.fy = null; }));

        // state
        let selected = null, hovered = null, query = '', helpOpen = false, stage = '';
        const hiddenCats = new Set(), hiddenTypes = new Set();
        let depth = 2;   // hops shown around a chosen node (5 = everything)

        const isEnd = (l, id) => l.source.id === id || l.target.id === id;

        function visibleSet() {
            const vis = new Set(nodes.filter(n => !hiddenCats.has(n.cat)).map(n => n.id));
            if (selected && depth < 5) {
                const seen = new Set([selected]);
                let frontier = [selected];
                for (let i = 0; i < depth; i++) {
                    const next = [];
                    frontier.forEach(id => adj.get(id).forEach(nb => { if (!seen.has(nb)) { seen.add(nb); next.push(nb); } }));
                    frontier = next;
                }
                [...vis].forEach(id => { if (!seen.has(id)) vis.delete(id); });
            }
            return vis;
        }

        function render() {
            const vis = visibleSet();
            const focus = hovered || selected;
            const near = focus ? new Set([focus, ...adj.get(focus)]) : null;
            const stageNodes = stage ? new Set(roadmap.find(st => st.id === stage).nodes) : null;
            const q = query.trim().toLowerCase();
            const matches = q ? new Set(nodes.filter(n => (n.label + ' ' + n.vi).toLowerCase().includes(q)).map(n => n.id)) : null;

            nodeSel
                .classed('hidden', d => !vis.has(d.id))
                .classed('dim', d => (near && !near.has(d.id)) || (matches && !matches.has(d.id)) || (stageNodes && !stageNodes.has(d.id)))
                .classed('sel', d => d.id === selected)
                .classed('match', d => !!matches && matches.has(d.id));
            linkSel
                .classed('hidden', d => !vis.has(d.source.id) || !vis.has(d.target.id) || hiddenTypes.has(d.type))
                .classed('dim', d => (near && !isEnd(d, focus)) || !!matches || (stageNodes && !(stageNodes.has(d.source.id) && stageNodes.has(d.target.id))))
                .classed('hl', d => focus && isEnd(d, focus));
            elabelSel.classed('hidden', d => !(focus && isEnd(d, focus) && vis.has(d.source.id) && vis.has(d.target.id) && !hiddenTypes.has(d.type)));
            const shown = links.filter(l => vis.has(l.source.id) && vis.has(l.target.id) && !hiddenTypes.has(l.type)).length;
            document.getElementById('graphSearchBtn').classList.toggle('active', hiddenCats.size > 0 || !!stage);
            document.getElementById('graphHelpBtn').classList.toggle('active', hiddenTypes.size > 0);
            document.getElementById('graphCount').textContent = `${vis.size} ${text.unit} · ${shown} ${text.linkUnit}`;
        }

        function esc(s) { return String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c])); }

        // Compact grid for a node (e.g. the tense × aspect table); a cell is [text, lessonId|null]
        function tableHtml(t) {
            const cell = ([txt, topic]) => topic
                ? `<td><a href="${esc(topicUrl(topic))}">${esc(txt)}</a></td>`
                : `<td class="g-nolesson">${esc(txt)}</td>`;
            return `<table class="g-table"><thead><tr>${t.head.map(h => `<th>${esc(h)}</th>`).join('')}</tr></thead>
            <tbody>${t.rows.map(([label, cells]) => `<tr><th scope="row">${esc(label)}</th>${cells.map(cell).join('')}</tr>`).join('')}</tbody></table>`;
        }

        // help text lives in the same overlay as node details; closed by default
        const helpHtml = () => `<div class="g-help"><h2>${esc(text.helpTitle)}</h2><ul>
        ${text.helpItems.map(i => `<li>${i}</li>`).join('\n        ')}
    </ul><h3>${esc(text.typesTitle)}</h3><div class="g-types">${typeRows()}</div>${roadmapHtml()}</div>`;
        // link-type legend lives in the help panel: stroke sample + meaning, click to hide/show a type
        const typeRows = () => Object.entries(types).map(([key, t]) =>
            `<button type="button" class="g-typerow${hiddenTypes.has(key) ? ' off' : ''}" data-type="${key}" aria-pressed="${!hiddenTypes.has(key)}">
            <svg width="40" height="12" aria-hidden="true"><line x1="${t.both ? 8 : 1}" y1="6" x2="31" y2="6" stroke="${t.color}" stroke-width="${t.width + .5}" ${t.dash ? `stroke-dasharray="${t.dash}"` : ''}/>`
            + (t.both ? `<path d="M8,6l5,-3.5v7z" fill="${t.color}"/>` : '') + `<path d="M32,6l-5,-3.5v7z" fill="${t.color}"/></svg>
            <span><b>${esc(t.label)}</b></span><small>${esc(t.hint)}</small></button>`).join('');
        // roadmap / entry-point table (text only): stage, its nodes (labels taken from the nodes), and what to know first
        const roadmapHtml = () => {
            if (!roadmap.length) return '';
            const hasAfter = roadmap.some(st => st.after);
            const cols = hasAfter ? '<col style="width:27%"><col style="width:51%"><col style="width:22%">' : '<col style="width:30%"><col style="width:70%">';
            const head = text.stageCols.slice(0, hasAfter ? 3 : 2);
            return `<h3>${esc(text.stageTitle)}</h3>
        <p class="g-hint">${text.stageHint}</p>
        <table class="g-road"><colgroup>${cols}</colgroup>
        <thead><tr>${head.map(h => `<th>${esc(h)}</th>`).join('')}</tr></thead>
        <tbody>${roadmap.map((st, i) => `<tr><th scope="row">${i + 1}. ${esc(st.title)}</th><td>${st.nodes.map(id => esc(byId.get(id).label)).join(', ')}</td>${hasAfter ? `<td>${st.after ? esc(text.stagePrefix) + esc(st.after) : '—'}</td>` : ''}</tr>`).join('')}</tbody></table>`;
        };
        const closeBtn = `<button type="button" class="g-close" aria-label="${esc(text.close)}">×</button>`;

        const pill = (l, other, arrow) => {
            const t = types[l.type], ev = l.ev && evidence[l.ev];
            return `<button type="button" data-id="${esc(other.id)}" style="border-color:${t.color}88" title="${esc(t.label)}${ev ? ' · ' + esc(ev.label) : ''}">${esc(other.label)}<small>${arrow} ${esc(l.label)}${ev ? ` <span class="g-ev">${esc(ev.mark)}</span>` : ''}</small></button>`;
        };

        // neighbours as one flat list (grammar) or grouped by link type and direction (health)
        function neighboursHtml(n) {
            const mine = links.filter(l => isEnd(l, n.id));
            if (!cfg.groupNeighbors) {
                return `<div class="g-nb">${mine.map(l => {
                    const other = l.source.id === n.id ? l.target : l.source;
                    const arrow = types[l.type].both ? '↔' : (l.source.id === n.id ? '→' : '←');
                    return pill(l, other, arrow);
                }).join('')}</div>`;
            }
            const groups = [];
            Object.entries(types).forEach(([key, t]) => {
                const out = mine.filter(l => l.type === key && (t.both || l.source.id === n.id));
                const inn = t.both ? [] : mine.filter(l => l.type === key && l.target.id === n.id);
                if (out.length) groups.push([t.both ? t.label : (t.out || t.label), t.color, out.map(l => pill(l, l.source.id === n.id ? l.target : l.source, t.both ? '↔' : '→'))]);
                if (inn.length) groups.push([t.in || t.label, t.color, inn.map(l => pill(l, l.source, '←'))]);
            });
            return groups.map(([title, color, pills]) =>
                `<h4 class="g-grp" style="border-left-color:${color}">${esc(title)}</h4><div class="g-nb">${pills.join('')}</div>`).join('');
        }

        function renderPanel() {
            const panel = document.getElementById('graphPanel');
            const n = selected && byId.get(selected);
            const helpBtn = document.getElementById('graphHelpBtn');
            helpBtn.setAttribute('aria-expanded', String(helpOpen && !n));
            panel.classList.toggle('wide', !!(n && n.table));
            panel.classList.toggle('help', !n && helpOpen);
            panel.hidden = !n && !helpOpen;
            if (!n) {
                panel.innerHTML = helpOpen ? closeBtn + helpHtml() : '';
                const x = panel.querySelector('.g-close');
                if (x) x.addEventListener('click', () => { helpOpen = false; renderPanel(); });
                panel.querySelectorAll('.g-typerow').forEach(b => b.addEventListener('click', () => {
                    const key = b.dataset.type, off = !hiddenTypes.has(key);
                    off ? hiddenTypes.add(key) : hiddenTypes.delete(key);
                    b.classList.toggle('off', off);
                    b.setAttribute('aria-pressed', String(!off));
                    render();
                }));
                return;
            }
            const cat = cats[n.cat] || { label: '', color: '#888' };
            const facts = n.facts && n.facts.length
                ? `<h3>${esc(text.facts)}</h3><dl class="g-facts">${n.facts.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join('')}</dl>` : '';
            panel.innerHTML = `${closeBtn}
            <span class="g-cat" style="background:${cat.color}">${esc(cat.label)}</span>
            <h2>${esc(n.label)}</h2>
            <p class="g-vi">${esc(n.vi)}</p>
            <p>${n.desc}</p>
            ${n.table ? tableHtml(n.table) : ''}
            ${facts}
            <h3>${esc(text.related)} (${n.degree})</h3>
            ${neighboursHtml(n)}
            ${n.topic ? `<a class="g-lesson" href="${esc(topicUrl(n.topic))}">${esc(text.lesson)}</a>` : ''}
            ${n.more && n.more.length ? `<h3>${esc(text.more)}</h3>${n.more.map(([id, label]) => `<a class="g-more" href="${esc(topicUrl(id))}">${esc(label)} →</a>`).join('')}` : ''}
            ${n.src ? `<p class="g-src"><b>${esc(text.source)}:</b> ${esc(n.src)}</p>` : ''}`;
            panel.querySelectorAll('.g-nb button').forEach(b => b.addEventListener('click', () => select(b.dataset.id)));
            panel.querySelector('.g-close').addEventListener('click', () => select(n.id));
        }

        function select(id) {
            selected = selected === id ? null : id;
            if (selected) helpOpen = false;
            renderPanel();
            render();
            if (selected) revealSelected();
        }

        // desktop: the side panel overlays the right part of the graph, so slide the view left if it would hide the selected node
        function revealSelected() {
            const panel = document.getElementById('graphPanel'), n = byId.get(selected);
            if (!n || panel.hidden || window.innerWidth <= 720) return;
            const t = d3.zoomTransform(svg.node());
            const limit = svg.node().getBoundingClientRect().width - panel.offsetWidth - 40;
            const sx = t.applyX(n.x || 0);
            if (sx > limit) svg.transition().duration(300).call(zoom.translateBy, (limit - sx) / t.k, 0);
        }

        nodeSel.on('mouseenter', (e, d) => { hovered = d.id; render(); })
            .on('mouseleave', () => { hovered = null; render(); })
            .on('click', (e, d) => { e.stopPropagation(); select(d.id); });
        svg.on('click', () => { if (selected || helpOpen) { selected = null; helpOpen = false; renderPanel(); render(); } });

        // legend (category filters)
        const legend = document.getElementById('graphLegend');
        Object.entries(cats).forEach(([key, c]) => {
            const b = document.createElement('button');
            b.type = 'button';
            b.className = 'g-chip';
            b.setAttribute('aria-pressed', 'true');
            b.innerHTML = `<i style="background:${c.color}"></i>${esc(c.label)}`;
            b.addEventListener('click', () => {
                const off = !hiddenCats.has(key);
                off ? hiddenCats.add(key) : hiddenCats.delete(key);
                b.classList.toggle('off', off);
                b.setAttribute('aria-pressed', String(!off));
                render();
            });
            legend.appendChild(b);
        });

        // search box and help are tucked behind header icons so the graph keeps the screen
        const searchBar = document.getElementById('graphSearchBar'), searchInput = document.getElementById('graphSearch'), searchBtn = document.getElementById('graphSearchBtn');
        function setSearch(open) {
            searchBar.hidden = !open;
            searchBtn.setAttribute('aria-expanded', String(open));
            if (open) searchInput.focus();
            else if (query) { query = ''; searchInput.value = ''; render(); }
        }
        searchBtn.addEventListener('click', () => setSearch(searchBar.hidden));
        searchInput.addEventListener('keydown', e => { if (e.key === 'Escape') setSearch(false); });
        searchInput.addEventListener('input', e => { query = e.target.value; render(); });
        const stageSel = document.getElementById('graphStage');
        roadmap.forEach((st, i) => stageSel.add(new Option(`${i + 1}. ${st.title}`, st.id)));
        function setStage(id) {
            stage = id;
            stageSel.value = id;
            // zoom to the chosen stage (or back to the whole graph) so it is readable even when the filter panel shrinks the canvas
            if (stage) { userMoved = true; resetView(new Set(roadmap.find(st => st.id === stage).nodes)); }
            else { userMoved = false; resetView(); }
            render();
        }
        stageSel.addEventListener('change', () => setStage(stageSel.value));
        document.getElementById('graphHelpBtn').addEventListener('click', () => {
            helpOpen = !helpOpen;
            if (helpOpen) selected = null;
            renderPanel();
            render();
        });
        const depthInput = document.getElementById('graphDepth');
        const depthLabel = () => document.getElementById('graphDepthVal').textContent = depth >= 5 ? text.depthAll : `${depth} ${text.depthStep}`;
        depthInput.addEventListener('input', () => {
            depth = +depthInput.value;
            depthLabel();
            render();
        });
        document.getElementById('graphReset').addEventListener('click', () => {
            selected = null; hovered = null; query = ''; stage = ''; stageSel.value = ''; depth = 2; hiddenCats.clear(); hiddenTypes.clear();
            searchInput.value = '';
            helpOpen = false;
            depthInput.value = 2;
            depthLabel();
            document.querySelectorAll('.g-legend .g-chip').forEach(b => { b.classList.remove('off'); b.setAttribute('aria-pressed', 'true'); });
            nodes.forEach(n => { n.fx = null; n.fy = null; });
            userMoved = false;
            sim.alpha(0.6).restart();
            resetView();
            renderPanel();
            render();
        });

        renderPanel();
        render();

        // deep links: ?node=<id> opens that node (from a lesson), ?stage=<id> zooms to an entry point
        const params = new URLSearchParams(location.search);
        if (params.get('stage') && roadmap.some(st => st.id === params.get('stage'))) setStage(params.get('stage'));
        if (params.get('node') && byId.has(params.get('node'))) select(params.get('node'));
    }

    window.KnowledgeGraph = { init };
})();
