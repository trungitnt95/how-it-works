(function () {
    const cats = grammarGraphCategories;
    const nodes = grammarGraphData.nodes.map(n => ({ ...n }));
    const byId = new Map(nodes.map(n => [n.id, n]));
    const links = grammarGraphData.links
        .filter(([s, t]) => byId.has(s) && byId.has(t))
        .map(([source, target, label]) => ({ source, target, label }));

    const adj = new Map(nodes.map(n => [n.id, new Set()]));
    links.forEach(l => { adj.get(l.source).add(l.target); adj.get(l.target).add(l.source); });
    nodes.forEach(n => { n.degree = adj.get(n.id).size; });
    const radius = n => 5 + Math.sqrt(n.degree) * 2.6;

    const svg = d3.select('#graph');
    const layer = svg.append('g');
    const linkSel = layer.append('g').selectAll('line').data(links).join('line').attr('class', 'link');
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
            linkSel.attr('x1', d => d.source.x).attr('y1', d => d.source.y).attr('x2', d => d.target.x).attr('y2', d => d.target.y);
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
    const hiddenCats = new Set();
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
            .classed('hidden', d => !vis.has(d.source.id) || !vis.has(d.target.id))
            .classed('dim', d => (near && !isEnd(d, focus)) || !!matches)
            .classed('hl', d => focus && isEnd(d, focus));
        elabelSel.classed('hidden', d => !(focus && isEnd(d, focus) && vis.has(d.source.id) && vis.has(d.target.id)));
        document.getElementById('graphCount').textContent = `${vis.size} khái niệm · ${links.length} liên kết`;
    }

    function esc(s) { return String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c])); }

    function renderPanel() {
        const panel = document.getElementById('graphPanel');
        const n = selected && byId.get(selected);
        if (!n) {
            panel.innerHTML = '<p class="g-hint">Rê chuột vào một nút để làm nổi các nút liên quan. Nhấn để xem chi tiết. Kéo để di chuyển, cuộn để phóng to.</p>';
            return;
        }
        const nbs = links.filter(l => isEnd(l, n.id)).map(l => {
            const other = l.source.id === n.id ? l.target : l.source;
            const arrow = l.source.id === n.id ? '→' : '←';
            return `<button type="button" data-id="${esc(other.id)}">${esc(other.label)}<small>${arrow} ${esc(l.label)}</small></button>`;
        }).join('');
        panel.innerHTML = `
            <span class="g-cat" style="background:${cats[n.cat].color}">${esc(cats[n.cat].label)}</span>
            <h2>${esc(n.label)}</h2>
            <p class="g-vi">${esc(n.vi)}</p>
            <p>${n.desc}</p>
            <h3>Liên quan (${n.degree})</h3>
            <div class="g-nb">${nbs}</div>
            ${n.topic ? `<a class="g-lesson" href="english-grammar.html#${encodeURIComponent(n.topic)}">Mở bài học →</a>` : ''}`;
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

    document.getElementById('graphSearch').addEventListener('input', e => { query = e.target.value; render(); });
    const depthInput = document.getElementById('graphDepth');
    depthInput.addEventListener('input', () => {
        depth = +depthInput.value;
        document.getElementById('graphDepthVal').textContent = depth >= 5 ? 'tất cả' : depth + ' bước';
        render();
    });
    document.getElementById('graphReset').addEventListener('click', () => {
        selected = null; hovered = null; query = ''; depth = 5; hiddenCats.clear();
        document.getElementById('graphSearch').value = '';
        depthInput.value = 5;
        document.getElementById('graphDepthVal').textContent = 'tất cả';
        legend.querySelectorAll('.g-chip').forEach(b => { b.classList.remove('off'); b.setAttribute('aria-pressed', 'true'); });
        nodes.forEach(n => { n.fx = null; n.fy = null; });
        sim.alpha(0.6).restart();
        resetView();
        renderPanel();
        render();
    });

    render();
})();
