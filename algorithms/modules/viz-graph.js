/* Visualizers: graphs */
(function () {
    'use strict';
    const Algo = window.Algo;
    const V = Algo.viz;
    const Rec = Algo.Rec;
    const U = Algo.util;

    /* ---------- preset graphs (coordinates in a 600 × 340 box) ---------- */
    const G_UNW = {
        nodes: { A: [70, 80], B: [200, 50], C: [330, 80], D: [470, 50], E: [110, 230], F: [250, 190], G: [390, 220], H: [530, 170], I: [250, 305] },
        edges: [['A', 'B'], ['A', 'E'], ['B', 'C'], ['B', 'F'], ['C', 'D'], ['C', 'G'], ['D', 'H'], ['E', 'F'], ['E', 'I'], ['F', 'G'], ['G', 'H'], ['F', 'I']]
    };
    const G_W = {
        nodes: { A: [60, 180], B: [190, 70], C: [190, 290], D: [350, 70], E: [350, 290], F: [480, 180], G: [570, 60] },
        edges: [['A', 'B', 4], ['A', 'C', 2], ['B', 'C', 1], ['B', 'D', 5], ['C', 'D', 8], ['C', 'E', 10], ['D', 'E', 2], ['D', 'F', 6], ['E', 'F', 3], ['D', 'G', 9], ['F', 'G', 2]]
    };
    const G_DAG = {
        nodes: { A: [70, 90], B: [70, 260], C: [220, 90], D: [220, 260], E: [380, 175], F: [530, 90], G: [530, 260] },
        edges: [['A', 'C'], ['B', 'C'], ['B', 'D'], ['C', 'E'], ['D', 'E'], ['E', 'F'], ['E', 'G'], ['D', 'G']]
    };
    const G_NEG = {
        nodes: { s: [60, 175], t: [230, 65], x: [440, 65], y: [230, 285], z: [440, 285] },
        edges: [['s', 't', 6], ['s', 'y', 7], ['t', 'x', 5, 16], ['x', 't', -2, 16], ['t', 'y', 8], ['t', 'z', -4], ['y', 'x', -3], ['y', 'z', 9], ['z', 's', 2, -30], ['z', 'x', 7]]
    };
    const G_BIP = {
        nodes: { A: [80, 70], B: [80, 170], C: [80, 270], D: [300, 70], E: [300, 170], F: [300, 270], G: [520, 120], H: [520, 240] },
        edges: [['A', 'D'], ['A', 'E'], ['B', 'D'], ['B', 'F'], ['C', 'E'], ['C', 'F'], ['D', 'G'], ['E', 'H'], ['F', 'G']]
    };
    const G_ODD = {
        nodes: { A: [80, 70], B: [80, 170], C: [80, 270], D: [300, 70], E: [300, 170], F: [300, 270], G: [520, 120], H: [520, 240] },
        edges: [['A', 'D'], ['A', 'E'], ['B', 'D'], ['B', 'F'], ['C', 'E'], ['C', 'F'], ['D', 'G'], ['E', 'H'], ['F', 'G'], ['G', 'H'], ['E', 'G']]
    };

    function adj(G, directed) {
        const a = {};
        Object.keys(G.nodes).forEach((k) => { a[k] = []; });
        G.edges.forEach(([u, v, w]) => {
            a[u].push({ to: v, w: w == null ? 1 : w });
            if (!directed) a[v].push({ to: u, w: w == null ? 1 : w });
        });
        Object.keys(a).forEach((k) => a[k].sort((p, q) => (p.to < q.to ? -1 : 1)));
        return a;
    }

    function ekey(u, v, directed) { return directed ? u + '>' + v : [u, v].sort().join('~'); }

    function gPanel(G, o) {
        o = o || {};
        const ns = o.nodeState || {}, sub = o.sub || {}, es = o.edgeState || {};
        return {
            type: 'graph', key: o.key || 'g', title: o.title || '', directed: !!o.directed, span: o.span, subPos: o.subPos,
            nodes: Object.keys(G.nodes).map((id) => ({ id, x: G.nodes[id][0], y: G.nodes[id][1], s: ns[id] || '', sub: sub[id] != null ? sub[id] : '' })),
            edges: G.edges.map(([u, v, w, bend]) => ({ u, v, w: o.weighted ? w : undefined, s: es[ekey(u, v, o.directed)] || '', bend: bend || 0 }))
        };
    }

    const startInput = (G, def) => ({ key: 'start', label: 'Đỉnh bắt đầu', type: 'select', value: def, options: Object.keys(G.nodes).map((k) => [k, k]) });

    /* ---------------- Graph representation ---------------- */
    V.graphRepr = {
        legend: [['act', 'Cạnh vừa thêm'], ['cmp', 'Ô tương ứng']],
        inputs: [{ key: 'dir', label: 'Loại đồ thị', type: 'select', value: 'u', options: [['u', 'Vô hướng'], ['d', 'Có hướng']] }],
        run({ dir }) {
            const directed = dir === 'd';
            const G = { nodes: { A: [90, 90], B: [260, 60], C: [430, 100], D: [150, 260], E: [360, 270] }, edges: [] };
            const all = [['A', 'B'], ['A', 'D'], ['B', 'C'], ['B', 'D'], ['C', 'E'], ['D', 'E']];
            const ids = Object.keys(G.nodes);
            const R = new Rec();
            const show = (last, msg) => {
                const M = ids.map(() => ids.map(() => ({ t: 0 })));
                const lists = ids.map((id) => ({ label: id, items: [] }));
                G.edges.forEach(([u, v]) => {
                    const i = ids.indexOf(u), j = ids.indexOf(v);
                    const isLast = last && last[0] === u && last[1] === v;
                    M[i][j] = { t: 1, s: isLast ? 'cmp' : 'done' };
                    lists[i].items.push({ t: v, s: isLast ? 'new' : '' });
                    if (!directed) {
                        M[j][i] = { t: 1, s: isLast ? 'cmp' : 'done' };
                        lists[j].items.push({ t: u, s: isLast ? 'new' : '' });
                    }
                });
                lists.forEach((l) => l.items.sort((p, q) => (p.t < q.t ? -1 : 1)));
                const es = last ? { [ekey(last[0], last[1], directed)]: 'act' } : {};
                R.push([
                    gPanel(G, { directed, edgeState: es, span: 6 }),
                    { type: 'grid', key: 'm', title: 'Ma trận kề: M[u][v] = 1 nếu có cạnh u→v', span: 3, rows: ids.length, cols: ids.length, cell: 34, rowHead: ids, colHead: ids, cells: M },
                    { type: 'buckets', key: 'l', title: 'Danh sách kề: mỗi đỉnh giữ các đỉnh kề', span: 3, buckets: lists }
                ], msg, -1, { 'số đỉnh V': ids.length, 'số cạnh E': G.edges.length });
            };
            show(null, 'Đồ thị = tập đỉnh + tập cạnh. Có hai cách lưu phổ biến: ma trận kề và danh sách kề.');
            all.forEach(([u, v]) => {
                G.edges.push([u, v]);
                show([u, v], `Thêm cạnh ${u}${directed ? ' → ' : ' — '}${v}` + (directed ? '' : ' (vô hướng: ghi cả hai chiều)'));
            });
            show(null, 'Ma trận kề: kiểm tra cạnh O(1) nhưng tốn O(V²) bộ nhớ. Danh sách kề: O(V + E) bộ nhớ, duyệt kề nhanh — lựa chọn mặc định cho đồ thị thưa.');
            return R.frames;
        }
    };

    /* ---------------- BFS ---------------- */
    V.bfs = {
        legend: [['act', 'Đang xử lý'], ['cmp', 'Trong hàng đợi'], ['done', 'Đã xong'], ['tree', 'Cạnh của cây BFS']],
        inputs: [startInput(G_UNW, 'A')],
        code: [
            'def bfs(start):',
            '    dist = {start: 0}',
            '    q = deque([start])',
            '    while q:',
            '        u = q.popleft()',
            '        for v in adj[u]:',
            '            if v not in dist:          # chưa thăm',
            '                dist[v] = dist[u] + 1',
            '                q.append(v)',
            '    return dist'
        ],
        run({ start }) {
            const A = adj(G_UNW);
            const R = new Rec();
            const dist = { [start]: 0 };
            const ns = { [start]: 'cmp' };
            const es = {};
            const q = [start];
            const order = [];
            const show = (msg, line, extra) => R.push([
                gPanel(G_UNW, { nodeState: Object.assign({}, ns, extra && extra.ns), edgeState: Object.assign({}, es, extra && extra.es), sub: Object.fromEntries(Object.keys(dist).map((k) => [k, 'd=' + dist[k]])) }),
                { type: 'chips', key: 'q', title: 'Hàng đợi (FIFO)', front: 'ra ←', back: '← vào', items: q.slice(), span: 3 },
                { type: 'chips', key: 'o', title: 'Thứ tự thăm', items: order.slice(), span: 3 }
            ], msg, line, { 'đỉnh đã thấy': Object.keys(dist).length });
            show(`Bắt đầu từ ${start}: dist = 0, cho vào hàng đợi. BFS lan ra theo từng "lớp" khoảng cách.`, 2);
            while (q.length) {
                const u = q.shift();
                ns[u] = 'act';
                order.push(u);
                show(`Lấy ${u} ra (d = ${dist[u]}). Xét các đỉnh kề.`, 4);
                A[u].forEach(({ to: v }) => {
                    const k = ekey(u, v);
                    if (dist[v] == null) {
                        dist[v] = dist[u] + 1;
                        q.push(v);
                        ns[v] = 'cmp';
                        es[k] = 'tree';
                        show(`${v} chưa thăm → d[${v}] = ${dist[v]}, cho vào cuối hàng đợi.`, 7);
                    } else if (es[k] !== 'tree') {
                        show(`${v} đã thấy rồi → bỏ qua.`, 6, { es: { [k]: 'cmp' } });
                    }
                });
                ns[u] = 'done';
            }
            show('Xong. d[v] là số cạnh ít nhất từ đỉnh xuất phát (đường đi ngắn nhất trên đồ thị không trọng số). O(V + E).', 9);
            return R.frames;
        }
    };

    /* ---------------- DFS ---------------- */
    V.dfs = {
        legend: [['act', 'Đỉnh hiện tại'], ['cmp', 'Đang trong đệ quy (trên ngăn xếp)'], ['done', 'Đã duyệt xong'], ['tree', 'Cạnh của cây DFS']],
        inputs: [startInput(G_UNW, 'A')],
        code: [
            'def dfs(u):',
            '    visited.add(u)',
            '    for v in adj[u]:',
            '        if v not in visited:',
            '            dfs(v)          # đi sâu nhất có thể',
            '    # hết đỉnh kề → quay lui'
        ],
        run({ start }) {
            const A = adj(G_UNW);
            const R = new Rec();
            const ns = {}, es = {}, sub = {};
            const stack = [];
            const order = [];
            let t = 0;
            const show = (msg, line, extra) => R.push([
                gPanel(G_UNW, { nodeState: Object.assign({}, ns, extra && extra.ns), edgeState: Object.assign({}, es, extra && extra.es), sub }),
                { type: 'chips', key: 's', title: 'Ngăn xếp đệ quy (đường đi hiện tại)', items: stack.slice(), span: 3 },
                { type: 'chips', key: 'o', title: 'Thứ tự thăm', items: order.slice(), span: 3 }
            ], msg, line, { 'độ sâu': stack.length });
            const dfs = (u) => {
                ns[u] = 'act';
                stack.push(u);
                order.push(u);
                sub[u] = '#' + (++t);
                show(`Thăm ${u} (thứ ${t}).`, 1);
                for (const { to: v } of A[u]) {
                    const k = ekey(u, v);
                    if (ns[v] == null) {
                        es[k] = 'tree';
                        ns[u] = 'cmp';
                        show(`${v} chưa thăm → đi sâu xuống ${v}.`, 4);
                        dfs(v);
                        ns[u] = 'act';
                        show(`Quay lại ${u}, xét đỉnh kề tiếp theo.`, 2);
                    } else if (es[k] !== 'tree') {
                        show(`${v} đã thăm → bỏ qua.`, 3, { es: { [k]: 'cmp' } });
                    }
                }
                ns[u] = 'done';
                stack.pop();
                show(`${u} hết đỉnh kề → quay lui.`, 5);
            };
            dfs(start);
            show('Xong. DFS đi sâu trước, dùng để tìm chu trình, sắp xếp tô-pô, thành phần liên thông, quay lui… O(V + E).', -1);
            return R.frames;
        }
    };

    /* ---------------- Grid BFS: number of islands ---------------- */
    function parseGrid(txt) {
        const rows = txt.trim().split('/').map((r) => r.trim()).filter(Boolean);
        const C = rows[0].length;
        if (rows.some((r) => r.length !== C)) throw new Error('các hàng phải cùng độ dài');
        if (rows.length > 8 || C > 12) throw new Error('tối đa 8 hàng × 12 cột');
        return rows.map((r) => r.split('').map(Number));
    }

    V.gridIslands = {
        legend: [['land', 'Đất (1)'], ['cmp', 'Trong hàng đợi'], ['act', 'Đang xử lý'], ['visit', 'Đã thuộc một đảo']],
        inputs: [{
            key: 'g', label: 'Lưới (hàng cách nhau bởi /)', type: 'text', wide: true, value: '11000110/11010010/00100000/00011011/10000011', maxLen: 110, pattern: '^[01/]+$', hint: 'chỉ gồm 0, 1 và /',
            random: () => Array.from({ length: 6 }, () => Array.from({ length: 9 }, () => (Math.random() < 0.42 ? 1 : 0)).join('')).join('/')
        }],
        code: [
            'def num_islands(grid):',
            '    count = 0',
            '    for r in range(R):',
            '        for c in range(C):',
            '            if grid[r][c] == 1 and (r, c) not in seen:',
            '                count += 1; bfs(r, c)   # loang cả đảo',
            '    return count',
            '',
            'def bfs(r, c):',
            '    q = deque([(r, c)]); seen.add((r, c))',
            '    while q:',
            '        r, c = q.popleft()',
            '        for dr, dc in ((1,0), (-1,0), (0,1), (0,-1)):',
            '            nr, nc = r + dr, c + dc',
            '            if inside(nr, nc) and grid[nr][nc] == 1 and (nr, nc) not in seen:',
            '                seen.add((nr, nc)); q.append((nr, nc))'
        ],
        run({ g }) {
            const G = parseGrid(g);
            const Rn = G.length, Cn = G[0].length;
            const R = new Rec();
            const island = {};
            let count = 0;
            const qs = new Set();
            const show = (cur, msg, line) => R.push([{
                type: 'grid', key: 'g', rows: Rn, cols: Cn, cell: 40,
                cells: G.map((row, r) => row.map((v, c) => {
                    const k = r * Cn + c;
                    if (cur && cur[0] === r && cur[1] === c) return { t: island[k] || '', s: 'act' };
                    if (qs.has(k)) return { t: island[k] || '', s: 'cmp' };
                    if (island[k]) return { t: island[k], s: 'visit isl' + ((island[k] - 1) % 6) };
                    return { t: '', s: v ? 'land' : 'water' };
                }))
            }], msg, line, { 'số đảo': count });
            show(null, 'Mỗi đảo là một nhóm ô đất (1) nối nhau theo 4 hướng. Gặp ô đất chưa thăm → đếm +1 và loang (BFS) để đánh dấu cả đảo.', 0);
            for (let r = 0; r < Rn; r++) {
                for (let c = 0; c < Cn; c++) {
                    if (!G[r][c] || island[r * Cn + c]) continue;
                    count++;
                    const q = [[r, c]];
                    island[r * Cn + c] = count;
                    qs.add(r * Cn + c);
                    show([r, c], `Ô (${r}, ${c}) là đất chưa thăm → đảo mới #${count}, bắt đầu loang.`, 5);
                    while (q.length) {
                        const [x, y] = q.shift();
                        qs.delete(x * Cn + y);
                        [[1, 0], [-1, 0], [0, 1], [0, -1]].forEach(([dx, dy]) => {
                            const nx = x + dx, ny = y + dy;
                            if (nx >= 0 && ny >= 0 && nx < Rn && ny < Cn && G[nx][ny] && !island[nx * Cn + ny]) {
                                island[nx * Cn + ny] = count;
                                q.push([nx, ny]);
                                qs.add(nx * Cn + ny);
                            }
                        });
                        show([x, y], `Loang từ (${x}, ${y}) sang các ô đất kề.`, 14);
                    }
                }
            }
            show(null, `Có <b>${count}</b> đảo. Mỗi ô được xét hằng số lần → O(R × C).`, 6);
            return R.frames;
        }
    };

    /* ---------------- Topological sort (Kahn) ---------------- */
    V.topoSort = {
        legend: [['cmp', 'Bậc vào = 0 (sẵn sàng)'], ['act', 'Đang lấy ra'], ['done', 'Đã xếp'], ['dim', 'Cạnh đã gỡ']],
        inputs: [],
        code: [
            'def topo_sort(n, adj):',
            '    indeg = {u: 0 for u in adj}',
            '    for u in adj:',
            '        for v in adj[u]: indeg[v] += 1',
            '    q = deque(u for u in adj if indeg[u] == 0)',
            '    order = []',
            '    while q:',
            '        u = q.popleft(); order.append(u)',
            '        for v in adj[u]:',
            '            indeg[v] -= 1           # gỡ cạnh u → v',
            '            if indeg[v] == 0: q.append(v)',
            '    return order   # thiếu đỉnh → có chu trình'
        ],
        run() {
            const G = G_DAG;
            const A = adj(G, true);
            const R = new Rec();
            const indeg = {};
            Object.keys(G.nodes).forEach((k) => { indeg[k] = 0; });
            G.edges.forEach(([, v]) => { indeg[v]++; });
            const ns = {}, es = {};
            const q = [];
            const order = [];
            const show = (msg, line) => R.push([
                gPanel(G, { directed: true, nodeState: ns, edgeState: es, sub: Object.fromEntries(Object.keys(indeg).map((k) => [k, 'vào=' + indeg[k]])) }),
                { type: 'chips', key: 'q', title: 'Hàng đợi các đỉnh sẵn sàng', front: 'ra ←', items: q.slice(), span: 3 },
                { type: 'chips', key: 'o', title: 'Thứ tự tô-pô', items: order.slice(), span: 3 }
            ], msg, line, {});
            show('Mỗi cạnh u → v nghĩa là "u phải làm trước v" (vd: môn tiên quyết). Đếm bậc vào của từng đỉnh.', 3);
            Object.keys(indeg).forEach((k) => { if (!indeg[k]) { q.push(k); ns[k] = 'cmp'; } });
            show(`Các đỉnh không phụ thuộc ai (bậc vào 0): ${q.join(', ')} → cho vào hàng đợi.`, 4);
            while (q.length) {
                const u = q.shift();
                ns[u] = 'act';
                order.push(u);
                show(`Lấy ${u} ra, thêm vào kết quả.`, 7);
                A[u].forEach(({ to: v }) => {
                    indeg[v]--;
                    es[ekey(u, v, true)] = 'dim';
                    if (!indeg[v]) { q.push(v); ns[v] = 'cmp'; }
                    show(`Gỡ cạnh ${u} → ${v}: bậc vào của ${v} còn ${indeg[v]}` + (!indeg[v] ? ` → ${v} sẵn sàng.` : '.'), indeg[v] ? 9 : 10);
                });
                ns[u] = 'done';
            }
            show(`Thứ tự hợp lệ: ${order.join(' → ')}. Nếu còn đỉnh chưa được lấy ra thì đồ thị có chu trình. O(V + E).`, 11);
            return R.frames;
        }
    };

    /* ---------------- Dijkstra ---------------- */
    V.dijkstra = {
        legend: [['act', 'Đỉnh vừa chốt'], ['cmp', 'Cạnh đang nới lỏng'], ['done', 'Đã chốt khoảng cách'], ['tree', 'Cạnh trên đường ngắn nhất']],
        inputs: [startInput(G_W, 'A')],
        code: [
            'def dijkstra(src):',
            '    dist = {u: inf for u in adj}; dist[src] = 0',
            '    pq = [(0, src)]                  # min-heap theo dist',
            '    while pq:',
            '        d, u = heappop(pq)',
            '        if d > dist[u]: continue     # bản ghi cũ, bỏ qua',
            '        for v, w in adj[u]:',
            '            if dist[u] + w < dist[v]:  # nới lỏng cạnh',
            '                dist[v] = dist[u] + w',
            '                heappush(pq, (dist[v], v))',
            '    return dist'
        ],
        run({ start }) {
            const G = G_W;
            const A = adj(G);
            const R = new Rec();
            const dist = {}, par = {};
            Object.keys(G.nodes).forEach((k) => { dist[k] = Infinity; });
            dist[start] = 0;
            let pq = [[0, start]];
            const ns = {}, fin = new Set();
            const treeEdges = () => {
                const es = {};
                Object.keys(par).forEach((v) => { es[ekey(par[v], v)] = 'tree'; });
                return es;
            };
            const show = (msg, line, extraEs, extraNs) => R.push([
                gPanel(G, { weighted: true, nodeState: Object.assign({}, ns, extraNs), edgeState: Object.assign(treeEdges(), extraEs), sub: Object.fromEntries(Object.keys(dist).map((k) => [k, dist[k] === Infinity ? '∞' : dist[k]])) }),
                { type: 'chips', key: 'pq', title: 'Hàng đợi ưu tiên (dist, đỉnh) — nhỏ nhất ra trước', items: pq.slice().sort((a, b) => a[0] - b[0]).map(([d, u]) => `(${d}, ${u})`) }
            ], msg, line, { 'đã chốt': fin.size });
            show(`dist[${start}] = 0, các đỉnh khác = ∞. Luôn chốt đỉnh gần nhất chưa chốt.`, 1);
            while (pq.length) {
                pq.sort((a, b) => a[0] - b[0]);
                const [d, u] = pq.shift();
                if (d > dist[u] || fin.has(u)) {
                    show(`Lấy (${d}, ${u}) nhưng dist[${u}] = ${dist[u]} đã nhỏ hơn → bản ghi cũ, bỏ qua.`, 5);
                    continue;
                }
                fin.add(u);
                ns[u] = 'act';
                show(`Lấy ${u} (dist = ${d}) — nhỏ nhất trong hàng đợi → chốt: không thể có đường nào ngắn hơn (trọng số không âm).`, 4);
                A[u].forEach(({ to: v, w }) => {
                    if (fin.has(v)) return;
                    const k = ekey(u, v);
                    const nd = dist[u] + w;
                    if (nd < dist[v]) {
                        const old = dist[v];
                        dist[v] = nd;
                        par[v] = u;
                        pq.push([nd, v]);
                        show(`Nới lỏng ${u}→${v}: ${dist[u]} + ${w} = ${nd} < ${old === Infinity ? '∞' : old} → cập nhật dist[${v}] = ${nd}.`, 8, { [k]: 'cmp' }, { [v]: 'cmp' });
                    } else {
                        show(`${u}→${v}: ${dist[u]} + ${w} = ${nd} ≥ ${dist[v]} → không tốt hơn.`, 7, { [k]: 'rej' });
                    }
                });
                ns[u] = 'done';
            }
            show('Xong. Các cạnh sáng tạo thành cây đường đi ngắn nhất. Với heap: O((V + E) log V).', 10);
            return R.frames;
        }
    };

    /* ---------------- Bellman–Ford ---------------- */
    V.bellmanFord = {
        legend: [['cmp', 'Cạnh đang xét'], ['act', 'Vừa được cập nhật'], ['tree', 'Cạnh trên đường ngắn nhất']],
        inputs: [],
        code: [
            'def bellman_ford(src, edges, n):',
            '    dist = [inf] * n; dist[src] = 0',
            '    for _ in range(n - 1):          # tối đa n-1 vòng',
            '        changed = False',
            '        for u, v, w in edges:',
            '            if dist[u] + w < dist[v]:',
            '                dist[v] = dist[u] + w; changed = True',
            '        if not changed: break',
            '    for u, v, w in edges:           # vòng thứ n',
            '        if dist[u] + w < dist[v]:',
            '            raise NegativeCycle'
        ],
        run() {
            const G = G_NEG;
            const R = new Rec();
            const ids = Object.keys(G.nodes);
            const dist = {}, par = {};
            ids.forEach((k) => { dist[k] = Infinity; });
            dist.s = 0;
            const fmt = (x) => (x === Infinity ? '∞' : x);
            const tree = () => Object.fromEntries(Object.keys(par).map((v) => [ekey(par[v], v, true), 'tree']));
            const show = (msg, line, es, ns, round) => R.push([
                gPanel(G, { directed: true, weighted: true, edgeState: Object.assign(tree(), es), nodeState: ns || {}, sub: Object.fromEntries(ids.map((k) => [k, fmt(dist[k])])) })
            ], msg, line, { 'vòng': round || '-' });
            show('Đồ thị có cạnh âm (Dijkstra sai ở đây). Bellman–Ford nới lỏng TẤT CẢ các cạnh, lặp V − 1 vòng.', 1);
            for (let round = 1; round < ids.length; round++) {
                let changed = false;
                G.edges.forEach(([u, v, w]) => {
                    const k = ekey(u, v, true);
                    if (dist[u] !== Infinity && dist[u] + w < dist[v]) {
                        dist[v] = dist[u] + w;
                        par[v] = u;
                        changed = true;
                        show(`Vòng ${round}: ${u}→${v} (w = ${w}): ${dist[u]} + (${w}) = ${dist[v]} → cập nhật.`, 6, { [k]: 'cmp' }, { [v]: 'act' }, round);
                    }
                });
                if (!changed) {
                    show(`Vòng ${round} không có cập nhật nào → dừng sớm.`, 7, {}, {}, round);
                    break;
                }
                show(`Hết vòng ${round}.`, 2, {}, {}, round);
            }
            show('Kiểm tra thêm 1 vòng: không cạnh nào còn nới lỏng được → không có chu trình âm. Độ phức tạp O(V · E).', 10);
            return R.frames;
        }
    };

    /* ---------------- Floyd–Warshall ---------------- */
    V.floyd = {
        legend: [['cmp', 'dist[i][k] và dist[k][j]'], ['act', 'Ô đang xét dist[i][j]'], ['new', 'Vừa được cải thiện'], ['mark', 'Hàng/cột trung gian k']],
        inputs: [],
        code: [
            'def floyd_warshall(dist, n):',
            '    for k in range(n):              # cho phép đi qua đỉnh k',
            '        for i in range(n):',
            '            for j in range(n):',
            '                if dist[i][k] + dist[k][j] < dist[i][j]:',
            '                    dist[i][j] = dist[i][k] + dist[k][j]',
            '    return dist'
        ],
        run() {
            const G = { nodes: { '1': [110, 80], '2': [470, 80], '3': [470, 270], '4': [110, 270] }, edges: [['1', '2', 3, 14], ['2', '1', 8, 14], ['2', '3', 2], ['3', '1', 5], ['3', '4', 1], ['1', '4', 7, 14], ['4', '1', 2, 14]] };
            const ids = ['1', '2', '3', '4'];
            const n = 4;
            const INF = Infinity;
            const D = ids.map((i) => ids.map((j) => (i === j ? 0 : INF)));
            G.edges.forEach(([u, v, w]) => { D[ids.indexOf(u)][ids.indexOf(v)] = w; });
            const R = new Rec();
            const fmt = (x) => (x === INF ? '∞' : x);
            const show = (k, st, msg, line) => R.push([
                gPanel(G, { directed: true, weighted: true, span: 3, nodeState: k != null ? { [ids[k]]: 'act' } : {} }),
                { type: 'grid', key: 'd', title: 'Ma trận khoảng cách dist[i][j]', span: 3, rows: n, cols: n, cell: 46, rowHead: ids, colHead: ids, rowHi: k, colHi: k, cells: D.map((row, i) => row.map((v, j) => ({ t: fmt(v), s: st[i + ',' + j] || (k != null && (i === k || j === k) ? 'mark' : '') }))) }
            ], msg, line, { k: k != null ? ids[k] : '-' });
            show(null, {}, 'Khởi tạo: dist[i][j] = trọng số cạnh i→j, ∞ nếu không có cạnh.', 0);
            for (let k = 0; k < n; k++) {
                show(k, {}, `k = ${ids[k]}: thử cho mọi cặp (i, j) đi vòng qua đỉnh ${ids[k]}.`, 1);
                for (let i = 0; i < n; i++) {
                    for (let j = 0; j < n; j++) {
                        if (i === k || j === k || i === j) continue;
                        const via = D[i][k] + D[k][j];
                        const st = { [i + ',' + k]: 'cmp', [k + ',' + j]: 'cmp', [i + ',' + j]: 'act' };
                        if (via < D[i][j]) {
                            const old = D[i][j];
                            D[i][j] = via;
                            st[i + ',' + j] = 'new';
                            show(k, st, `${ids[i]}→${ids[k]}→${ids[j]}: ${fmt(D[i][k])} + ${fmt(D[k][j])} = ${via} < ${fmt(old)} → cập nhật.`, 5);
                        } else {
                            show(k, st, `${ids[i]}→${ids[k]}→${ids[j]}: ${fmt(D[i][k])} + ${fmt(D[k][j])} = ${fmt(via)} ≥ ${fmt(D[i][j])} → giữ nguyên.`, 4);
                        }
                    }
                }
            }
            show(null, {}, 'Xong: khoảng cách ngắn nhất giữa MỌI cặp đỉnh. O(V³) — phù hợp V ≤ ~400.', 6);
            return R.frames;
        }
    };

    /* ---------------- Kruskal ---------------- */
    V.kruskal = {
        legend: [['cmp', 'Cạnh đang xét'], ['tree', 'Được chọn vào cây khung'], ['rej', 'Bị loại (tạo chu trình)']],
        inputs: [],
        code: [
            'def kruskal(n, edges):',
            '    edges.sort(key=lambda e: e[2])   # cạnh nhẹ trước',
            '    dsu = DSU(n); mst = []',
            '    for u, v, w in edges:',
            '        if dsu.union(u, v):          # khác thành phần',
            '            mst.append((u, v, w))',
            '        # cùng thành phần → tạo chu trình → bỏ',
            '    return mst'
        ],
        run() {
            const G = G_W;
            const R = new Rec();
            const edges = G.edges.slice().sort((a, b) => a[2] - b[2]);
            const parent = {};
            Object.keys(G.nodes).forEach((k) => { parent[k] = k; });
            const find = (x) => (parent[x] === x ? x : (parent[x] = find(parent[x])));
            const es = {};
            let total = 0;
            const comp = () => Object.fromEntries(Object.keys(G.nodes).map((k) => [k, '{' + find(k) + '}']));
            const show = (cur, msg, line) => R.push([
                gPanel(G, { weighted: true, edgeState: Object.assign({}, es, cur != null ? { [ekey(edges[cur][0], edges[cur][1])]: 'cmp' } : {}), sub: comp() }),
                { type: 'chips', key: 'e', title: 'Cạnh đã sắp xếp theo trọng số', items: edges.map(([u, v, w], i) => ({ t: `${u}${v}:${w}`, s: i === cur ? 'cmp' : es[ekey(u, v)] || '' })) }
            ], msg, line, { 'tổng trọng số': total });
            show(null, 'Sắp xếp cạnh tăng dần. Lần lượt chọn cạnh nhẹ nhất nếu nó không tạo chu trình (kiểm tra bằng DSU). Nhãn {x} = đại diện thành phần.', 1);
            edges.forEach(([u, v, w], i) => {
                show(i, `Xét cạnh ${u}–${v} (w = ${w}).`, 3);
                if (find(u) !== find(v)) {
                    parent[find(u)] = find(v);
                    es[ekey(u, v)] = 'tree';
                    total += w;
                    show(null, `${u} và ${v} thuộc hai thành phần khác nhau → chọn, gộp thành phần.`, 5);
                } else {
                    es[ekey(u, v)] = 'rej';
                    show(null, `${u} và ${v} đã cùng thành phần → thêm vào sẽ tạo chu trình → bỏ.`, 6);
                }
            });
            show(null, `Cây khung nhỏ nhất có tổng trọng số <b>${total}</b> (V − 1 = ${Object.keys(G.nodes).length - 1} cạnh). O(E log E).`, 7);
            return R.frames;
        }
    };

    /* ---------------- Prim ---------------- */
    V.prim = {
        legend: [['done', 'Đã trong cây'], ['cmp', 'Cạnh ứng viên'], ['tree', 'Cạnh của cây khung']],
        inputs: [startInput(G_W, 'A')],
        code: [
            'def prim(start):',
            '    in_tree = {start}; total = 0',
            '    pq = [(w, start, v) for v, w in adj[start]]',
            '    heapify(pq)',
            '    while pq:',
            '        w, u, v = heappop(pq)       # cạnh nhẹ nhất ra khỏi cây',
            '        if v in in_tree: continue',
            '        in_tree.add(v); total += w',
            '        for x, wx in adj[v]:',
            '            if x not in in_tree: heappush(pq, (wx, v, x))',
            '    return total'
        ],
        run({ start }) {
            const G = G_W;
            const A = adj(G);
            const R = new Rec();
            const inT = new Set([start]);
            const es = {};
            let pq = A[start].map(({ to, w }) => [w, start, to]);
            let total = 0;
            const show = (msg, line, extraEs) => {
                const cand = {};
                pq.forEach(([, u, v]) => { if (!inT.has(v)) cand[ekey(u, v)] = 'cmp'; });
                R.push([
                    gPanel(G, { weighted: true, nodeState: Object.fromEntries([...inT].map((k) => [k, 'done'])), edgeState: Object.assign(cand, es, extraEs) }),
                    { type: 'chips', key: 'pq', title: 'Hàng đợi ưu tiên các cạnh (w, u→v)', items: pq.slice().sort((a, b) => a[0] - b[0]).map(([w, u, v]) => ({ t: `${w}: ${u}→${v}`, s: inT.has(v) ? 'dim' : '' })) }
                ], msg, line, { 'tổng trọng số': total, 'số đỉnh trong cây': inT.size });
            };
            show(`Bắt đầu với cây chỉ gồm ${start}. Mỗi bước, "mọc" thêm cạnh nhẹ nhất nối cây với một đỉnh bên ngoài.`, 2);
            while (pq.length) {
                pq.sort((a, b) => a[0] - b[0]);
                const [w, u, v] = pq.shift();
                if (inT.has(v)) {
                    show(`Cạnh ${u}→${v} (w = ${w}): ${v} đã trong cây → bỏ qua.`, 6, { [ekey(u, v)]: es[ekey(u, v)] || 'rej' });
                    continue;
                }
                inT.add(v);
                es[ekey(u, v)] = 'tree';
                total += w;
                A[v].forEach(({ to, w: wx }) => { if (!inT.has(to)) pq.push([wx, v, to]); });
                show(`Chọn cạnh nhẹ nhất ${u}–${v} (w = ${w}) → thêm ${v} vào cây.`, 7);
            }
            show(`Cây khung nhỏ nhất: tổng <b>${total}</b> — trùng với Kruskal. O(E log V) với heap.`, 10);
            return R.frames;
        }
    };

    /* ---------------- Bipartite check ---------------- */
    V.bipartite = {
        legend: [['act', 'Màu 0'], ['pivot', 'Màu 1'], ['rej', 'Cạnh xung đột']],
        inputs: [{ key: 'which', label: 'Đồ thị', type: 'select', value: 'bip', options: [['bip', 'Đồ thị hai phía'], ['odd', 'Có chu trình lẻ']] }],
        code: [
            'def is_bipartite(adj):',
            '    color = {}',
            '    for s in adj:',
            '        if s in color: continue',
            '        color[s] = 0; q = deque([s])',
            '        while q:',
            '            u = q.popleft()',
            '            for v in adj[u]:',
            '                if v not in color:',
            '                    color[v] = 1 - color[u]; q.append(v)',
            '                elif color[v] == color[u]:',
            '                    return False     # hai đầu cùng màu',
            '    return True'
        ],
        run({ which }) {
            const G = which === 'odd' ? G_ODD : G_BIP;
            const A = adj(G);
            const R = new Rec();
            const color = {};
            const show = (msg, line, es) => R.push([
                gPanel(G, { nodeState: Object.fromEntries(Object.keys(color).map((k) => [k, color[k] ? 'pivot' : 'act'])), edgeState: es || {}, sub: Object.fromEntries(Object.keys(color).map((k) => [k, 'màu ' + color[k]])) })
            ], msg, line, {});
            show('Tô 2 màu sao cho mọi cạnh nối hai đỉnh khác màu. Dùng BFS: con của đỉnh màu 0 phải là màu 1 và ngược lại.', 1);
            for (const s of Object.keys(G.nodes)) {
                if (color[s] != null) continue;
                color[s] = 0;
                const q = [s];
                show(`Tô ${s} màu 0.`, 4);
                while (q.length) {
                    const u = q.shift();
                    for (const { to: v } of A[u]) {
                        if (color[v] == null) {
                            color[v] = 1 - color[u];
                            q.push(v);
                            show(`${v} kề ${u} → tô màu ${color[v]}.`, 9, { [ekey(u, v)]: 'act' });
                        } else if (color[v] === color[u]) {
                            show(`Cạnh ${u}–${v}: hai đầu cùng màu ${color[u]} → <b>không phải đồ thị hai phía</b> (có chu trình độ dài lẻ).`, 11, { [ekey(u, v)]: 'rej' });
                            return R.frames;
                        }
                    }
                }
            }
            show('Tô được 2 màu hợp lệ → <b>đồ thị hai phía</b> (vd: ghép cặp người – việc). O(V + E).', 12);
            return R.frames;
        }
    };

    /* ---------------- A* on a grid ---------------- */
    const MAPS = {
        m1: ['S.........#.', '.####.....#.', '....#..##.#.', '.##.#...#...', '.#..####.#..', '.#......#..G', '...##.......'],
        m2: ['S...#.......', '.##.#.####..', '.#..#....#..', '.#.###.#.#..', '.#.....#.#..', '.#####.#.##.', '.......#...G'],
        m3: ['S...........', '............', '....####....', '.......#....', '.......#....', '.......#...G', '............']
    };

    V.astar = {
        legend: [['start', 'Xuất phát / đích'], ['front', 'Tập mở (chờ xét)'], ['visit', 'Đã xét'], ['path', 'Đường đi tìm được'], ['wall', 'Tường']],
        inputs: [
            { key: 'map', label: 'Bản đồ', type: 'select', value: 'm1', options: [['m1', 'Mê cung 1'], ['m2', 'Mê cung 2'], ['m3', 'Bức tường chắn']] },
            { key: 'mode', label: 'Thuật toán', type: 'select', value: 'astar', options: [['astar', 'A* (có heuristic)'], ['dijkstra', 'Dijkstra / BFS (không heuristic)']] }
        ],
        code: [
            'def a_star(start, goal):',
            '    g = {start: 0}',
            '    open_ = [(h(start), start)]      # ưu tiên f = g + h',
            '    while open_:',
            '        f, u = heappop(open_)',
            '        if u == goal: return reconstruct(u)',
            '        for v in neighbors(u):',
            '            if g[u] + 1 < g.get(v, inf):',
            '                g[v] = g[u] + 1; parent[v] = u',
            '                heappush(open_, (g[v] + h(v), v))',
            '',
            'h = lambda p: abs(p.r - goal.r) + abs(p.c - goal.c)  # Manhattan'
        ],
        run({ map, mode }) {
            const M = MAPS[map];
            const Rn = M.length, Cn = M[0].length;
            let S, T;
            M.forEach((row, r) => row.split('').forEach((ch, c) => { if (ch === 'S') S = [r, c]; if (ch === 'G') T = [r, c]; }));
            const key = (r, c) => r * Cn + c;
            const hfun = (r, c) => (mode === 'astar' ? Math.abs(r - T[0]) + Math.abs(c - T[1]) : 0);
            const g = { [key(...S)]: 0 };
            const par = {};
            const closed = new Set();
            let open = [[hfun(...S), hfun(...S), 0, S[0], S[1]]];
            let seq = 0;
            const R = new Rec();
            const pathSet = new Set();
            const show = (cur, msg, line) => R.push([{
                type: 'grid', key: 'g', rows: Rn, cols: Cn, cell: 38,
                cells: M.map((row, r) => row.split('').map((ch, c) => {
                    const k = key(r, c);
                    if (ch === '#') return { t: '', s: 'wall' };
                    if (ch === 'S' || ch === 'G') return { t: ch === 'S' ? 'S' : 'G', s: 'start' };
                    if (cur && cur[0] === r && cur[1] === c) return { t: g[k], s: 'act' };
                    if (pathSet.has(k)) return { t: g[k], s: 'path' };
                    if (closed.has(k)) return { t: g[k], s: 'visit' };
                    if (g[k] != null) return { t: g[k], s: 'front' };
                    return { t: '', s: '' };
                }))
            }], msg, line, { 'số ô đã xét': closed.size, 'tập mở': open.length });
            show(null, mode === 'astar' ? 'A* ưu tiên ô có f = g (đã đi) + h (ước lượng còn lại, khoảng cách Manhattan) nhỏ nhất → hướng thẳng về đích.' : 'Không có heuristic (h = 0): lan đều mọi hướng như BFS/Dijkstra. Hãy so số ô phải xét với A*.', 2);
            while (open.length) {
                // ties on f: prefer the cell closer to the goal (smaller h), then FIFO
                open.sort((a, b) => a[0] - b[0] || a[1] - b[1] || a[2] - b[2]);
                const [f, , , r, c] = open.shift();
                const k = key(r, c);
                if (closed.has(k)) continue;
                closed.add(k);
                if (r === T[0] && c === T[1]) {
                    let cur = par[k];
                    while (cur != null && cur !== key(...S)) { pathSet.add(cur); cur = par[cur]; }
                    show(null, `Tới đích! Độ dài đường đi = ${g[k]}, đã xét ${closed.size} ô.`, 5);
                    return R.frames;
                }
                [[1, 0], [-1, 0], [0, 1], [0, -1]].forEach(([dr, dc]) => {
                    const nr = r + dr, nc = c + dc;
                    if (nr < 0 || nc < 0 || nr >= Rn || nc >= Cn || M[nr][nc] === '#') return;
                    const nk = key(nr, nc);
                    if (g[k] + 1 < (g[nk] == null ? Infinity : g[nk])) {
                        g[nk] = g[k] + 1;
                        par[nk] = k;
                        open.push([g[nk] + hfun(nr, nc), hfun(nr, nc), ++seq, nr, nc]);
                    }
                });
                show([r, c], `Xét ô (${r}, ${c}): g = ${g[k]}, f = ${f}. Thêm các ô kề vào tập mở.`, 6);
            }
            show(null, 'Không tới được đích.', 3);
            return R.frames;
        }
    };
})();
