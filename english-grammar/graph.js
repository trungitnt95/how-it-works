(function () {
    const cats = grammarGraphCategories;
    const nodes = grammarGraphData.nodes.map(n => ({ ...n }));
    const byId = new Map(nodes.map(n => [n.id, n]));
    const types = grammarGraphLinkTypes;
    const links = grammarGraphData.links
        .filter(([s, t]) => byId.has(s) && byId.has(t))
        .map(([source, target, label, type]) => ({ source, target, label, type }));

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
        .attr('class', d => 'link t-' + d.type)
        .attr('stroke', d => types[d.type].color).attr('stroke-width', d => types[d.type].width)
        .attr('stroke-dasharray', d => types[d.type].dash || null)
        .attr('marker-end', d => `url(#arrow-${d.type})`)
        .attr('marker-start', d => types[d.type].both ? `url(#arrow-${d.type})` : null);
    const elabelSel = layer.append('g').selectAll('text').data(links).join('text')
        .attr('class', 'elabel hidden').attr('text-anchor', 'middle').text(d => d.label);
    const nodeSel = layer.append('g').selectAll('g').data(nodes).join('g').attr('class', 'node');
    nodeSel.append('circle').attr('r', radius).attr('fill', d => cats[d.cat].color);
    nodeSel.append('text').attr('dy', d => radius(d) + 12).attr('text-anchor', 'middle').text(d => d.label);
    nodeSel.append('title').text(d => `${d.label} – ${d.vi}`);

    const sim = d3.forceSimulation(nodes)
        .force('link', d3.forceLink(links).id(d => d.id).distance(70).strength(0.5))
        .force('charge', d3.forceManyBody().strength(-260))
        .force('collide', d3.forceCollide().radius(d => radius(d) + 8))
        .force('x', d3.forceX().strength(0.04))
        .force('y', d3.forceY().strength(0.04))
        .on('tick', () => {
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
        });

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) { sim.stop(); sim.tick(300); sim.dispatch('tick'); }

    // zoom / pan, centred on the origin
    const zoom = d3.zoom().scaleExtent([0.3, 4]).on('zoom', e => layer.attr('transform', e.transform));
    svg.call(zoom).on('dblclick.zoom', null);
    function resetView() {
        const { width, height } = svg.node().getBoundingClientRect();
        svg.call(zoom.transform, d3.zoomIdentity.translate(width / 2, height / 2).scale(width < 720 ? 0.6 : 0.85));
    }
    resetView();
    window.addEventListener('resize', resetView);

    // drag
    nodeSel.call(d3.drag()
        .on('start', (e, d) => { if (!e.active) sim.alphaTarget(0.25).restart(); d.fx = d.x; d.fy = d.y; })
        .on('drag', (e, d) => { d.fx = e.x; d.fy = e.y; })
        .on('end', (e, d) => { if (!e.active) sim.alphaTarget(0); d.fx = null; d.fy = null; }));

    // state
    let selected = null, hovered = null, query = '';
    const hiddenCats = new Set(), hiddenTypes = new Set();
    let depth = 5;

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
        const q = query.trim().toLowerCase();
        const matches = q ? new Set(nodes.filter(n => (n.label + ' ' + n.vi).toLowerCase().includes(q)).map(n => n.id)) : null;

        nodeSel
            .classed('hidden', d => !vis.has(d.id))
            .classed('dim', d => (near && !near.has(d.id)) || (matches && !matches.has(d.id)))
            .classed('sel', d => d.id === selected)
            .classed('match', d => !!matches && matches.has(d.id));
        linkSel
            .classed('hidden', d => !vis.has(d.source.id) || !vis.has(d.target.id) || hiddenTypes.has(d.type))
            .classed('dim', d => (near && !isEnd(d, focus)) || !!matches)
            .classed('hl', d => focus && isEnd(d, focus));
        elabelSel.classed('hidden', d => !(focus && isEnd(d, focus) && vis.has(d.source.id) && vis.has(d.target.id) && !hiddenTypes.has(d.type)));
        const shown = links.filter(l => vis.has(l.source.id) && vis.has(l.target.id) && !hiddenTypes.has(l.type)).length;
        document.getElementById('graphCount').textContent = `${vis.size} khái niệm · ${shown} liên kết`;
    }

    function esc(s) { return String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c])); }

    function renderPanel() {
        const panel = document.getElementById('graphPanel');
        const n = selected && byId.get(selected);
        if (!n) {
            panel.innerHTML = '<p class="g-hint">Rê chuột vào một nút để làm nổi các nút liên quan. Mũi tên chỉ hướng: <em>A → B</em> đọc là “A [nhãn] B”; kiểu nét và màu cho biết loại liên kết (xem chú giải bên trên). Nhấn để xem chi tiết. Kéo để di chuyển, cuộn để phóng to.</p>';
            return;
        }
        const nbs = links.filter(l => isEnd(l, n.id)).map(l => {
            const other = l.source.id === n.id ? l.target : l.source;
            const arrow = types[l.type].both ? '↔' : (l.source.id === n.id ? '→' : '←');
            return `<button type="button" data-id="${esc(other.id)}" style="border-color:${types[l.type].color}88" title="${esc(types[l.type].label)}">${esc(other.label)}<small>${arrow} ${esc(l.label)}</small></button>`;
        }).join('');
        panel.innerHTML = `
            <span class="g-cat" style="background:${cats[n.cat].color}">${esc(cats[n.cat].label)}</span>
            <h2>${esc(n.label)}</h2>
            <p class="g-vi">${esc(n.vi)}</p>
            <p>${n.desc}</p>
            <h3>Liên quan (${n.degree})</h3>
            <div class="g-nb">${nbs}</div>
            ${n.topic ? `<a class="g-lesson" href="english-grammar.html?topic=${encodeURIComponent(n.topic)}">Mở bài học →</a>` : ''}`;
        panel.querySelectorAll('.g-nb button').forEach(b => b.addEventListener('click', () => select(b.dataset.id)));
    }

    function select(id) {
        selected = selected === id ? null : id;
        renderPanel();
        render();
    }

    nodeSel.on('mouseenter', (e, d) => { hovered = d.id; render(); })
        .on('mouseleave', () => { hovered = null; render(); })
        .on('click', (e, d) => { e.stopPropagation(); select(d.id); });
    svg.on('click', () => { if (selected) { selected = null; renderPanel(); render(); } });

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

    // legend (link-type filters): a sample of the stroke + its meaning
    const typeLegend = document.getElementById('graphTypes');
    Object.entries(types).forEach(([key, t]) => {
        const b = document.createElement('button');
        b.type = 'button';
        b.className = 'g-chip g-type';
        b.setAttribute('aria-pressed', 'true');
        b.title = t.hint;
        b.innerHTML = `<svg width="34" height="10" aria-hidden="true"><line x1="${t.both ? 7 : 1}" y1="5" x2="${t.both ? 27 : 27}" y2="5" stroke="${t.color}" stroke-width="${t.width + .5}" ${t.dash ? `stroke-dasharray="${t.dash}"` : ''}/>`
            + (t.both ? `<path d="M7,5l5,-3.5v7z" fill="${t.color}"/>` : '') + `<path d="M28,5l-5,-3.5v7z" fill="${t.color}"/></svg>${esc(t.label)}`;
        b.addEventListener('click', () => {
            const off = !hiddenTypes.has(key);
            off ? hiddenTypes.add(key) : hiddenTypes.delete(key);
            b.classList.toggle('off', off);
            b.setAttribute('aria-pressed', String(!off));
            render();
        });
        typeLegend.appendChild(b);
    });

    document.getElementById('graphSearch').addEventListener('input', e => { query = e.target.value; render(); });
    const depthInput = document.getElementById('graphDepth');
    depthInput.addEventListener('input', () => {
        depth = +depthInput.value;
        document.getElementById('graphDepthVal').textContent = depth >= 5 ? 'tất cả' : depth + ' bước';
        render();
    });
    document.getElementById('graphReset').addEventListener('click', () => {
        selected = null; hovered = null; query = ''; depth = 5; hiddenCats.clear(); hiddenTypes.clear();
        document.getElementById('graphSearch').value = '';
        depthInput.value = 5;
        document.getElementById('graphDepthVal').textContent = 'tất cả';
        document.querySelectorAll('.g-legend .g-chip').forEach(b => { b.classList.remove('off'); b.setAttribute('aria-pressed', 'true'); });
        nodes.forEach(n => { n.fx = null; n.fy = null; });
        sim.alpha(0.6).restart();
        resetView();
        renderPanel();
        render();
    });

    render();
})();
