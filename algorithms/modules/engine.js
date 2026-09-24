/* Algo Lab — animation engine.
 * A visualizer produces a list of frames. Each frame is a snapshot:
 *   { panels: [...], msg: 'caption', line: <pseudo line>, vars: {name: value} }
 * The Stage renders the panels of a frame (keyed, so elements animate between
 * frames) and the Simulator wires inputs, playback controls and pseudocode.
 */
(function () {
    'use strict';

    const Algo = (window.Algo = window.Algo || {});
    Algo.topics = Algo.topics || [];
    Algo.viz = Algo.viz || {};

    const SVGNS = 'http://www.w3.org/2000/svg';
    let uid = 0;

    function h(tag, cls, text) {
        const e = document.createElement(tag);
        if (cls) e.className = cls;
        if (text != null) e.textContent = text;
        return e;
    }

    function sv(tag, attrs, cls) {
        const e = document.createElementNS(SVGNS, tag);
        if (attrs) Object.keys(attrs).forEach((k) => e.setAttribute(k, attrs[k]));
        if (cls) e.setAttribute('class', cls);
        return e;
    }

    function stateClass(base, s) {
        return s ? base + ' s-' + String(s).split(' ').join(' s-') : base;
    }

    const ease = (k) => (k < 0.5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2);
    const reducedMotion = () => window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* ---------- Recorder used by generators ---------- */
    class Rec {
        constructor() { this.frames = []; }
        push(panels, msg, line, vars) {
            this.frames.push(JSON.parse(JSON.stringify({
                panels: panels.filter(Boolean),
                msg: msg || '',
                line: line == null ? -1 : line,
                vars: vars || null
            })));
            return this;
        }
    }
    Algo.Rec = Rec;

    /* ---------- Small helpers shared by generators ---------- */
    Algo.util = {
        randInt(a, b) { return a + Math.floor(Math.random() * (b - a + 1)); },
        randArr(n, a, b) { return Array.from({ length: n }, () => Algo.util.randInt(a, b)); },
        randDistinct(n, a, b) {
            const set = new Set();
            while (set.size < n) set.add(Algo.util.randInt(a, b));
            return Array.from(set);
        },
        shuffle(arr) {
            const a = arr.slice();
            for (let i = a.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [a[i], a[j]] = [a[j], a[i]];
            }
            return a;
        },
        states(map) { return map; }
    };

    /* Tween positions of keyed nodes, calling draw(positions) on each tick. */
    function tween(view, targets, draw, spawnFrom) {
        cancelAnimationFrame(view._raf);
        view._pos = view._pos || {};
        const from = {};
        Object.keys(targets).forEach((id) => {
            const cur = view._pos[id];
            const spawn = spawnFrom && spawnFrom(id);
            from[id] = cur ? { x: cur.x, y: cur.y } : (spawn ? { x: spawn.x, y: spawn.y } : { x: targets[id].x, y: targets[id].y });
        });
        view._pos = {};
        const dur = reducedMotion() ? 0 : 340;
        const t0 = performance.now();
        const step = (now) => {
            const k = dur ? Math.min(1, (now - t0) / dur) : 1;
            const e = ease(k);
            Object.keys(targets).forEach((id) => {
                view._pos[id] = {
                    x: from[id].x + (targets[id].x - from[id].x) * e,
                    y: from[id].y + (targets[id].y - from[id].y) * e
                };
            });
            draw(view._pos);
            if (k < 1) view._raf = requestAnimationFrame(step);
        };
        step(t0);
    }

    /* =========================================================
     * Array view — cells or bars, keyed items, pointers, ranges
     * ========================================================= */
    class ArrayView {
        constructor(host) {
            this.host = host;
            this.root = h('div', 'av');
            host.appendChild(this.root);
            this.items = new Map();
            this.ptrs = new Map();
            this.idxs = [];
            this.bands = new Map();
            this.ref = null;
        }

        update(p) {
            const items = (p.items || []).map((it, i) => (it !== null && typeof it === 'object') ? it : { id: 'i' + i, v: it });
            const n = items.length;
            const stack = p.layout === 'stack';
            const W = Math.max(stack ? 150 : 200, this.host.clientWidth || 600);
            const bars = !!p.bars && !stack;
            const gap = stack ? 4 : (bars ? (n > 18 ? 2 : 5) : (n > 14 ? 3 : 6));
            let cw, ch, H, baseY;
            const idxRow = p.showIndex === false ? 0 : 16;
            const ptrRows = Math.max(1, this.ptrDepth(p.pointers || []));
            const labels = p.labels || null;

            const padL = 34, padR = 72;
            if (stack) {
                cw = Math.max(60, Math.min(p.cellW || 150, W - padL - padR));
                ch = 34;
                const cap = Math.max(p.cap || 0, n, 4);
                H = cap * (ch + gap) + 8;
                baseY = H - 4;
            } else {
                const maxCell = p.cell || (bars ? 46 : 50);
                cw = Math.max(bars ? 8 : 18, Math.min(maxCell, Math.floor((W - gap * Math.max(n - 1, 0)) / Math.max(n, 1))));
                ch = bars ? (p.height || 180) : Math.min(cw, 50);
                H = ch + (labels ? 30 : 0) + idxRow + ptrRows * 18 + 6;
                baseY = ch;
            }
            const totalW = n * cw + Math.max(n - 1, 0) * gap;
            const x0 = stack ? Math.round(padL + Math.max(0, (W - padL - padR - cw) / 2)) : Math.round((W - totalW) / 2);
            const xAt = (i) => x0 + i * (cw + gap);
            this.root.style.height = H + 'px';
            this.root.classList.toggle('av-bars', bars);
            this.root.classList.toggle('av-stack', stack);

            const maxV = p.max != null ? p.max : Math.max(1, ...items.map((it) => Math.abs(Number(it.v) || 0)));
            const fs = Math.max(10, Math.min(18, Math.round(cw * 0.36)));

            /* ranges (bands behind cells) — keep a top margin for their labels */
            if ((p.ranges || []).some((r) => r.label)) this.hadRanges = true;
            this.root.style.marginTop = this.hadRanges && !stack ? '18px' : '';
            const seenBands = new Set();
            (p.ranges || []).forEach((r, k) => {
                const key = r.key || ('b' + k);
                seenBands.add(key);
                let el = this.bands.get(key);
                if (!el) {
                    el = h('div', 'av-band');
                    el.appendChild(h('span', 'av-band-label'));
                    this.root.insertBefore(el, this.root.firstChild);
                    this.bands.set(key, el);
                }
                el.className = stateClass('av-band', r.tone || 'act');
                if (stack) {
                    el.style.display = 'none';
                    return;
                }
                const a = Math.max(0, r.a), b = Math.min(n - 1, r.b);
                el.style.display = b < a ? 'none' : '';
                const left = xAt(a) - 3, width = (b - a + 1) * (cw + gap) - gap + 6;
                el.style.transform = `translate(${left}px, -4px)`;
                el.style.width = width + 'px';
                el.style.height = (bars ? ch : ch) + 8 + 'px';
                el.firstChild.textContent = r.label || '';
            });
            this.bands.forEach((el, key) => { if (!seenBands.has(key)) { el.remove(); this.bands.delete(key); } });

            /* reference line for bar charts */
            if (bars && p.refLine) {
                if (!this.ref) {
                    this.ref = h('div', 'av-ref');
                    this.ref.appendChild(h('span'));
                    this.root.appendChild(this.ref);
                }
                this.ref.style.transform = `translateY(${Math.round(ch - p.refLine.h * ch)}px)`;
                this.ref.firstChild.textContent = p.refLine.label || '';
            } else if (this.ref) {
                this.ref.remove();
                this.ref = null;
            }

            /* items */
            const seen = new Set();
            items.forEach((it, i) => {
                const id = String(it.id != null ? it.id : 'i' + i);
                seen.add(id);
                let el = this.items.get(id);
                if (!el) {
                    el = h('div', 'av-cell');
                    el.appendChild(h('span', 'av-val'));
                    el.style.opacity = '0';
                    this.root.appendChild(el);
                    this.items.set(id, el);
                    requestAnimationFrame(() => { el.style.opacity = ''; });
                }
                el.className = stateClass('av-cell' + (bars ? ' av-bar' : ''), it.s);
                const text = it.t != null ? it.t : (it.v != null ? it.v : '');
                el.firstChild.textContent = text;
                if (stack) {
                    const y = baseY - (i + 1) * (ch + gap) + gap;
                    el.style.width = cw + 'px';
                    el.style.height = ch + 'px';
                    el.style.fontSize = '15px';
                    el.style.transform = `translate(${x0}px, ${y}px)`;
                } else if (bars) {
                    const frac = it.h != null ? it.h : Math.abs(Number(it.v) || 0) / maxV;
                    const bh = Math.max(4, Math.round(frac * (ch - 18)));
                    el.style.width = cw + 'px';
                    el.style.height = bh + 'px';
                    el.style.fontSize = Math.max(9, Math.min(13, Math.round(cw * 0.34))) + 'px';
                    el.style.transform = `translate(${xAt(i)}px, ${ch - bh}px)`;
                    el.classList.toggle('av-novalue', cw < 16 && it.t == null);
                } else {
                    el.style.width = cw + 'px';
                    el.style.height = ch + 'px';
                    el.style.fontSize = (String(text).length > 3 ? Math.max(9, fs - 4) : fs) + 'px';
                    el.style.transform = `translate(${xAt(i)}px, 0px)`;
                }
            });
            this.items.forEach((el, id) => { if (!seen.has(id)) { el.remove(); this.items.delete(id); } });

            /* label row under bars (e.g. names in charts) */
            this.idxs.forEach((e) => e.remove());
            this.idxs = [];
            if (!stack && labels) {
                labels.forEach((t, i) => {
                    const e = h('div', 'av-label', t);
                    e.style.width = cw + gap + 'px';
                    e.style.transform = `translate(${xAt(i) - gap / 2}px, ${ch + 3}px)`;
                    this.root.appendChild(e);
                    this.idxs.push(e);
                });
            }
            if (p.showIndex !== false) {
                const idxLabels = p.indexLabels || null;
                for (let i = 0; i < n; i++) {
                    const e = h('div', 'av-idx', idxLabels ? idxLabels[i] : String(i));
                    if (stack) {
                        e.style.transform = `translate(${x0 - 34}px, ${baseY - (i + 1) * (ch + gap) + gap + 9}px)`;
                        e.style.width = '28px';
                        e.style.textAlign = 'right';
                    } else {
                        e.style.width = cw + 'px';
                        e.style.transform = `translate(${xAt(i)}px, ${ch + (labels ? 30 : 0) + 2}px)`;
                    }
                    this.root.appendChild(e);
                    this.idxs.push(e);
                }
            }

            /* pointers */
            const seenP = new Set();
            const levels = {};
            (p.pointers || []).forEach((pt) => {
                const key = String(pt.label);
                seenP.add(key);
                let el = this.ptrs.get(key);
                if (!el) {
                    el = h('div', 'av-ptr');
                    this.root.appendChild(el);
                    this.ptrs.set(key, el);
                }
                el.className = stateClass('av-ptr', pt.tone || 'act');
                const lvl = (levels[pt.i] = (levels[pt.i] || 0) + 1) - 1;
                if (stack) {
                    el.textContent = '◀ ' + pt.label;
                    const y = baseY - (pt.i + 1) * (ch + gap) + gap + 8 - lvl * 14;
                    el.style.transform = `translate(${x0 + cw + 8}px, ${y}px)`;
                } else {
                    el.textContent = '▲ ' + pt.label;
                    const cx = xAt(pt.i) + cw / 2;
                    const y = ch + (labels ? 30 : 0) + idxRow + 2 + lvl * 16;
                    el.style.transform = `translate(${cx}px, ${y}px) translateX(-50%)`;
                }
            });
            this.ptrs.forEach((el, key) => { if (!seenP.has(key)) { el.remove(); this.ptrs.delete(key); } });
        }

        ptrDepth(ptrs) {
            const c = {};
            let m = 0;
            ptrs.forEach((p) => { c[p.i] = (c[p.i] || 0) + 1; m = Math.max(m, c[p.i]); });
            return m;
        }
    }

    /* =========================================================
     * Graph view — fixed coordinates, weighted / directed edges
     * ========================================================= */
    const EDGE_STATES = ['base', 'act', 'tree', 'rej', 'path', 'dim', 'cmp'];

    class GraphView {
        constructor(host) {
            this.id = ++uid;
            this.svg = sv('svg', { class: 'gv', preserveAspectRatio: 'xMidYMid meet' });
            const defs = sv('defs');
            EDGE_STATES.forEach((st) => {
                const m = sv('marker', {
                    id: `gv${this.id}-${st}`, viewBox: '0 0 10 10', refX: '9', refY: '5',
                    markerWidth: '7', markerHeight: '7', orient: 'auto-start-reverse'
                });
                m.appendChild(sv('path', { d: 'M0,0 L10,5 L0,10 z' }, 'gv-mk s-' + st));
                defs.appendChild(m);
            });
            this.svg.appendChild(defs);
            this.gE = sv('g');
            this.gN = sv('g');
            this.svg.appendChild(this.gE);
            this.svg.appendChild(this.gN);
            host.appendChild(this.svg);
            this.edges = new Map();
            this.nodes = new Map();
        }

        update(p) {
            const W = p.w || 600, H = p.h || 340, R = p.r || 19;
            this.svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
            const pos = {};
            p.nodes.forEach((n) => { pos[n.id] = n; });
            const seenE = new Set();
            (p.edges || []).forEach((e) => {
                const key = p.directed ? `${e.u}>${e.v}` : [String(e.u), String(e.v)].sort().join('~');
                seenE.add(key);
                let g = this.edges.get(key);
                if (!g) {
                    g = sv('g');
                    g.appendChild(sv('path', { fill: 'none' }, 'gv-line'));
                    g.appendChild(sv('rect', { rx: 5, ry: 5 }, 'gv-wbg'));
                    g.appendChild(sv('text', { 'text-anchor': 'middle', 'dominant-baseline': 'central' }, 'gv-w'));
                    this.gE.appendChild(g);
                    this.edges.set(key, g);
                }
                const a = pos[e.u], b = pos[e.v];
                if (!a || !b) return;
                const st = e.s || '';
                g.setAttribute('class', stateClass('gv-edge', st));
                const dx = b.x - a.x, dy = b.y - a.y, L = Math.hypot(dx, dy) || 1;
                const ux = dx / L, uy = dy / L;
                const bend = e.bend || 0;
                const sx = a.x + ux * R, sy = a.y + uy * R;
                const ex = b.x - ux * (R + (p.directed ? 3 : 0)), ey = b.y - uy * (R + (p.directed ? 3 : 0));
                const path = g.childNodes[0];
                let mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2;
                if (bend) {
                    const cx = mx - uy * bend, cy = my + ux * bend;
                    path.setAttribute('d', `M${sx},${sy} Q${cx},${cy} ${ex},${ey}`);
                    mx = (sx + 2 * cx + ex) / 4;
                    my = (sy + 2 * cy + ey) / 4;
                } else {
                    path.setAttribute('d', `M${sx},${sy} L${ex},${ey}`);
                }
                if (p.directed) path.setAttribute('marker-end', `url(#gv${this.id}-${EDGE_STATES.includes(st) ? st : 'base'})`);
                else path.removeAttribute('marker-end');
                const label = e.t != null ? e.t : (e.w != null ? e.w : '');
                const txt = g.childNodes[2], bg = g.childNodes[1];
                txt.textContent = label;
                const lx = mx - uy * 11 * (e.side || 1), ly = my + ux * 11 * (e.side || 1);
                txt.setAttribute('x', lx);
                txt.setAttribute('y', ly);
                const tw = String(label).length * 7.5 + 8;
                bg.setAttribute('x', lx - tw / 2);
                bg.setAttribute('y', ly - 9);
                bg.setAttribute('width', tw);
                bg.setAttribute('height', 18);
                bg.style.display = label === '' ? 'none' : '';
            });
            this.edges.forEach((g, key) => { if (!seenE.has(key)) { g.remove(); this.edges.delete(key); } });

            const seenN = new Set();
            p.nodes.forEach((n) => {
                const key = String(n.id);
                seenN.add(key);
                let g = this.nodes.get(key);
                if (!g) {
                    g = sv('g');
                    g.appendChild(sv('circle', { r: R }, 'gv-c'));
                    g.appendChild(sv('text', { 'text-anchor': 'middle', 'dominant-baseline': 'central' }, 'gv-t'));
                    g.appendChild(sv('text', { 'text-anchor': 'middle', 'dominant-baseline': 'central' }, 'gv-sub'));
                    this.gN.appendChild(g);
                    this.nodes.set(key, g);
                }
                g.setAttribute('class', stateClass('gv-node', n.s));
                g.setAttribute('transform', `translate(${n.x},${n.y})`);
                g.childNodes[0].setAttribute('r', R);
                g.childNodes[1].textContent = n.label != null ? n.label : n.id;
                const sub = g.childNodes[2];
                sub.textContent = n.sub != null ? n.sub : '';
                const below = n.subPos === 'bottom' || (p.subPos === 'bottom' && n.subPos !== 'top');
                sub.setAttribute('y', below ? R + 13 : -(R + 11));
            });
            this.nodes.forEach((g, key) => { if (!seenN.has(key)) { g.remove(); this.nodes.delete(key); } });
        }
    }

    /* =========================================================
     * Tree view — binary (in-order layout) or n-ary, forests
     * ========================================================= */
    function layoutTree(p) {
        const N = p.nodes || {};
        const roots = (p.roots || (p.root != null ? [p.root] : [])).filter((r) => r != null && N[r]);
        const ux = {}, uy = {};
        let cursor = 0, maxD = 0;
        const edges = [];
        if (p.binary) {
            const walk = (id, d, parent) => {
                if (id == null || !N[id]) return;
                if (parent != null) edges.push([parent, id]);
                walk(N[id].left, d + 1, id);
                ux[id] = cursor++;
                uy[id] = d;
                maxD = Math.max(maxD, d);
                walk(N[id].right, d + 1, id);
            };
            roots.forEach((r) => { walk(r, 0, null); cursor += 0.6; });
        } else {
            const place = (id, d, parent) => {
                if (parent != null) edges.push([parent, id]);
                uy[id] = d;
                maxD = Math.max(maxD, d);
                const ch = (N[id].children || []).filter((c) => N[c]);
                if (!ch.length) ux[id] = cursor++;
                else {
                    ch.forEach((c) => place(c, d + 1, id));
                    ux[id] = (ux[ch[0]] + ux[ch[ch.length - 1]]) / 2;
                }
            };
            roots.forEach((r) => { place(r, 0, null); cursor += 0.6; });
        }
        const ids = Object.keys(ux);
        const W = p.w || 600;
        const levelH = p.levelH || 62;
        const H = p.h || Math.max(120, (maxD + 1) * levelH + 30);
        const minX = Math.min(...ids.map((i) => ux[i]), 0);
        const maxX = Math.max(...ids.map((i) => ux[i]), 0);
        const span = Math.max(maxX - minX, 0.0001);
        const pad = 30;
        const sx = Math.min(p.gap || 62, (W - 2 * pad) / span);
        const offset = (W - span * sx) / 2;
        const pos = {};
        ids.forEach((id) => {
            pos[id] = { x: offset + (ux[id] - minX) * sx, y: 30 + uy[id] * levelH };
        });
        return { pos, edges, W, H };
    }

    class TreeView {
        constructor(host) {
            this.svg = sv('svg', { class: 'tv', preserveAspectRatio: 'xMidYMin meet' });
            this.gE = sv('g');
            this.gN = sv('g');
            this.svg.appendChild(this.gE);
            this.svg.appendChild(this.gN);
            host.appendChild(this.svg);
            this.nodes = new Map();
            this.edges = new Map();
            this.parent = {};
        }

        update(p) {
            const { pos, edges, W, H } = layoutTree(p);
            const R = p.r || 18;
            this.svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
            this.svg.style.maxHeight = Math.max(160, H * 1.15) + 'px';
            const N = p.nodes || {};
            const seenN = new Set();
            Object.keys(pos).forEach((id) => {
                seenN.add(id);
                let g = this.nodes.get(id);
                if (!g) {
                    g = sv('g');
                    g.appendChild(sv('circle', { r: R }, 'tv-c'));
                    g.appendChild(sv('text', { 'text-anchor': 'middle', 'dominant-baseline': 'central' }, 'tv-t'));
                    g.appendChild(sv('text', { 'text-anchor': 'start', 'dominant-baseline': 'central' }, 'tv-sub'));
                    this.gN.appendChild(g);
                    this.nodes.set(id, g);
                }
                const nd = N[id];
                g.setAttribute('class', stateClass('tv-node', nd.s));
                g.childNodes[0].setAttribute('r', nd.r || R);
                const label = nd.label != null ? String(nd.label) : String(id);
                g.childNodes[1].textContent = label;
                g.childNodes[1].style.fontSize = label.length > 3 ? '11px' : '';
                const sub = g.childNodes[2];
                sub.textContent = nd.sub != null ? nd.sub : '';
                sub.setAttribute('x', (nd.r || R) + 4);
                sub.setAttribute('y', -(nd.r || R) + 2);
            });
            this.nodes.forEach((g, id) => { if (!seenN.has(id)) { g.remove(); this.nodes.delete(id); } });

            const seenE = new Set();
            const parent = {};
            edges.forEach(([a, b]) => {
                const key = a + '>' + b;
                parent[b] = a;
                seenE.add(key);
                let path = this.edges.get(key);
                if (!path) {
                    path = sv('path', { fill: 'none' });
                    this.gE.appendChild(path);
                    this.edges.set(key, path);
                }
                path.setAttribute('class', stateClass('tv-edge', N[b] && N[b].es));
                const lab = N[b] && N[b].el;
                path.dataset.label = lab || '';
            });
            this.edges.forEach((path, key) => { if (!seenE.has(key)) { path.remove(); this.edges.delete(key); } });
            this.labels = this.labels || new Map();
            this.labels.forEach((t) => t.remove());
            this.labels.clear();
            edges.forEach(([a, b]) => {
                const lab = N[b] && N[b].el;
                if (!lab) return;
                const t = sv('text', { 'text-anchor': 'middle', 'dominant-baseline': 'central' }, 'tv-elabel');
                t.textContent = lab;
                this.gE.appendChild(t);
                this.labels.set(a + '>' + b, t);
            });
            this.parent = parent;

            const draw = (P) => {
                Object.keys(P).forEach((id) => {
                    const g = this.nodes.get(id);
                    if (g) g.setAttribute('transform', `translate(${P[id].x.toFixed(1)},${P[id].y.toFixed(1)})`);
                });
                edges.forEach(([a, b]) => {
                    const path = this.edges.get(a + '>' + b);
                    if (!path || !P[a] || !P[b]) return;
                    path.setAttribute('d', `M${P[a].x.toFixed(1)},${P[a].y.toFixed(1)} L${P[b].x.toFixed(1)},${P[b].y.toFixed(1)}`);
                    const t = this.labels.get(a + '>' + b);
                    if (t) {
                        t.setAttribute('x', ((P[a].x + P[b].x) / 2 + (P[b].x < P[a].x ? -9 : 9)).toFixed(1));
                        t.setAttribute('y', ((P[a].y + P[b].y) / 2).toFixed(1));
                    }
                });
            };
            tween(this, pos, draw, (id) => (parent[id] != null && this._pos && this._pos[parent[id]]) || null);
        }
    }

    /* =========================================================
     * Grid view — matrices, DP tables, boards
     * ========================================================= */
    class GridView {
        constructor(host) {
            this.host = host;
            this.root = h('div', 'gd');
            host.appendChild(this.root);
            this.sig = '';
            this.cells = [];
        }

        update(p) {
            const R = p.rows, C = p.cols;
            const rh = p.rowHead ? 1 : 0, chd = p.colHead ? 1 : 0;
            const W = Math.max(220, this.host.clientWidth || 600);
            const gap = p.gap != null ? p.gap : 3;
            const size = Math.max(14, Math.min(p.cell || 44, Math.floor((W - (C + rh) * gap) / (C + rh))));
            const sig = [R, C, rh, chd, size].join('x');
            if (sig !== this.sig) {
                this.sig = sig;
                this.root.innerHTML = '';
                this.root.style.gridTemplateColumns = `repeat(${C + rh}, ${size}px)`;
                this.root.style.gap = gap + 'px';
                this.cells = [];
                this.heads = [];
                for (let r = -chd; r < R; r++) {
                    for (let c = -rh; c < C; c++) {
                        const e = h('div', 'gd-cell');
                        e.style.height = size + 'px';
                        e.style.fontSize = Math.max(9, Math.min(15, Math.round(size * 0.36))) + 'px';
                        this.root.appendChild(e);
                        if (r < 0 || c < 0) this.heads.push({ e, r, c });
                        else (this.cells[r] = this.cells[r] || [])[c] = e;
                    }
                }
            }
            this.heads.forEach(({ e, r, c }) => {
                e.className = 'gd-cell gd-head';
                if (r < 0 && c < 0) e.textContent = p.corner || '';
                else if (r < 0) {
                    e.textContent = p.colHead[c] != null ? p.colHead[c] : '';
                    if (p.colHi != null && p.colHi === c) e.className += ' gd-headhi';
                } else {
                    e.textContent = p.rowHead[r] != null ? p.rowHead[r] : '';
                    if (p.rowHi != null && p.rowHi === r) e.className += ' gd-headhi';
                }
            });
            for (let r = 0; r < R; r++) {
                for (let c = 0; c < C; c++) {
                    const raw = p.cells && p.cells[r] ? p.cells[r][c] : '';
                    const cell = raw !== null && typeof raw === 'object' ? raw : { t: raw };
                    const e = this.cells[r][c];
                    e.className = stateClass('gd-cell', cell.s);
                    e.textContent = cell.t != null ? cell.t : '';
                }
            }
        }
    }

    /* =========================================================
     * Linked list view — boxes + next arrows + named pointers
     * ========================================================= */
    class ListView {
        constructor(host) {
            this.id = ++uid;
            this.svg = sv('svg', { class: 'lv', preserveAspectRatio: 'xMidYMid meet' });
            const defs = sv('defs');
            ['base', 'act', 'tree', 'rej'].forEach((st) => {
                const m = sv('marker', { id: `lv${this.id}-${st}`, viewBox: '0 0 10 10', refX: '9', refY: '5', markerWidth: '7', markerHeight: '7', orient: 'auto-start-reverse' });
                m.appendChild(sv('path', { d: 'M0,0 L10,5 L0,10 z' }, 'gv-mk s-' + st));
                defs.appendChild(m);
            });
            this.svg.appendChild(defs);
            this.gA = sv('g');
            this.gN = sv('g');
            this.gP = sv('g');
            this.svg.appendChild(this.gA);
            this.svg.appendChild(this.gN);
            this.svg.appendChild(this.gP);
            host.appendChild(this.svg);
            this.nodes = new Map();
        }

        update(p) {
            const order = p.order || p.nodes.map((n) => n.id);
            const n = order.length;
            const W = p.w || 640, BW = 50, BH = 34;
            const step = Math.min(96, (W - 60) / Math.max(n, 1));
            const x0 = (W - (step * (n - 1) + BW)) / 2;
            const yN = 64;
            const H = p.h || 150;
            this.svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
            const byId = {};
            p.nodes.forEach((nd) => { byId[nd.id] = nd; });
            const targets = {};
            order.forEach((id, i) => { targets[id] = { x: x0 + i * step, y: yN }; });

            const seen = new Set();
            order.forEach((id) => {
                const key = String(id);
                seen.add(key);
                let g = this.nodes.get(key);
                if (!g) {
                    g = sv('g');
                    g.appendChild(sv('rect', { width: BW, height: BH, rx: 8, ry: 8 }, 'lv-box'));
                    g.appendChild(sv('text', { x: BW / 2, y: BH / 2, 'text-anchor': 'middle', 'dominant-baseline': 'central' }, 'lv-t'));
                    g.appendChild(sv('text', { x: BW / 2, y: BH + 13, 'text-anchor': 'middle', 'dominant-baseline': 'central' }, 'lv-sub'));
                    this.gN.appendChild(g);
                    this.nodes.set(key, g);
                }
                const nd = byId[id] || {};
                g.setAttribute('class', stateClass('lv-node', nd.s));
                g.childNodes[1].textContent = nd.t != null ? nd.t : id;
                g.childNodes[2].textContent = nd.sub || '';
            });
            this.nodes.forEach((g, key) => { if (!seen.has(key)) { g.remove(); this.nodes.delete(key); } });

            const next = p.next || {};
            const idxOf = {};
            order.forEach((id, i) => { idxOf[id] = i; });

            const draw = (P) => {
                this.gA.innerHTML = '';
                this.gP.innerHTML = '';
                order.forEach((id) => {
                    const g = this.nodes.get(String(id));
                    if (g && P[id]) g.setAttribute('transform', `translate(${P[id].x.toFixed(1)},${P[id].y.toFixed(1)})`);
                });
                const links = [];
                order.forEach((id) => links.push([id, next[id], (p.arrowState && p.arrowState[id]) || 'base', true]));
                if (p.prev) order.forEach((id) => { if (p.prev[id] != null) links.push([id, p.prev[id], 'base', false]); });
                links.forEach(([id, to, st, isNext]) => {
                    const a = P[id];
                    if (to == null) {
                        if (isNext && p.showNull && next.hasOwnProperty(id)) {
                            const t = sv('text', { x: a.x + BW + 16, y: a.y + BH / 2, 'dominant-baseline': 'central' }, 'lv-null');
                            t.textContent = '∅';
                            this.gA.appendChild(t);
                        }
                        return;
                    }
                    const b = P[to];
                    if (!b) return;
                    const di = idxOf[to] - idxOf[id];
                    let d;
                    if (di === 1) d = `M${a.x + BW},${a.y + BH / 2 - 5} L${b.x - 2},${b.y + BH / 2 - 5}`;
                    else if (di === -1) d = `M${a.x},${a.y + BH / 2 + 6} L${b.x + BW + 2},${b.y + BH / 2 + 6}`;
                    else {
                        const x1 = a.x + BW / 2, x2 = b.x + BW / 2 + (di > 0 ? -6 : 6), yb = a.y + BH;
                        const depth = 22 + Math.min(40, Math.abs(di) * 10);
                        d = `M${x1},${yb} C${x1},${yb + depth} ${x2},${yb + depth} ${x2},${yb + 3}`;
                    }
                    this.gA.appendChild(sv('path', { d, fill: 'none', 'marker-end': `url(#lv${this.id}-${st})` }, 'lv-arrow s-' + st));
                });
                const lvl = {};
                (p.pointers || []).forEach((pt) => {
                    const a = P[pt.id];
                    if (!a) return;
                    const k = (lvl[pt.id] = (lvl[pt.id] || 0) + 1) - 1;
                    const t = sv('text', { x: a.x + BW / 2, y: a.y - 12 - k * 15, 'text-anchor': 'middle' }, stateClass('lv-ptr', pt.tone || 'act'));
                    t.textContent = pt.label + (k === 0 ? ' ▼' : '');
                    this.gP.appendChild(t);
                });
            };
            tween(this, targets, draw, () => ({ x: W / 2, y: yN + 60 }));
        }
    }

    /* =========================================================
     * Buckets view — hash table chains, radix/bucket sort
     * ========================================================= */
    class BucketsView {
        constructor(host) {
            this.root = h('div', 'bk');
            host.appendChild(this.root);
        }
        update(p) {
            this.root.innerHTML = '';
            this.root.classList.toggle('bk-cols', p.layout === 'cols');
            p.buckets.forEach((b, i) => {
                const row = h('div', stateClass('bk-row', b.s));
                row.appendChild(h('span', 'bk-idx', b.label != null ? b.label : String(i)));
                const chain = h('div', 'bk-chain');
                (b.items || []).forEach((it, k) => {
                    const o = typeof it === 'object' ? it : { t: it };
                    if (k > 0 && p.layout !== 'cols') chain.appendChild(h('span', 'bk-arrow', '→'));
                    chain.appendChild(h('span', stateClass('bk-item', o.s), o.t));
                });
                if (!(b.items || []).length) chain.appendChild(h('span', 'bk-empty', p.empty || '—'));
                row.appendChild(chain);
                this.root.appendChild(row);
            });
        }
    }

    /* =========================================================
     * Intervals view — timelines, sweep line
     * ========================================================= */
    class IntervalsView {
        constructor(host) {
            this.root = h('div', 'iv');
            host.appendChild(this.root);
        }
        update(p) {
            this.root.innerHTML = '';
            const min = p.min, max = p.max, span = Math.max(1, max - min);
            const pct = (x) => ((x - min) / span) * 100;
            const area = h('div', 'iv-area');
            const rows = p.items.length;
            area.style.height = rows * 30 + 26 + 'px';
            p.items.forEach((it, i) => {
                const bar = h('div', stateClass('iv-bar', it.s), it.label != null ? it.label : `[${it.a}, ${it.b}]`);
                bar.style.left = pct(it.a) + '%';
                bar.style.width = Math.max(1.2, pct(it.b) - pct(it.a)) + '%';
                bar.style.top = i * 30 + 'px';
                area.appendChild(bar);
            });
            const axis = h('div', 'iv-axis');
            axis.style.top = rows * 30 + 4 + 'px';
            const stepT = span <= 12 ? 1 : span <= 30 ? 2 : Math.ceil(span / 12);
            for (let x = min; x <= max; x += stepT) {
                const t = h('span', 'iv-tick', String(x));
                t.style.left = pct(x) + '%';
                axis.appendChild(t);
            }
            area.appendChild(axis);
            if (p.line != null) {
                const ln = h('div', 'iv-line');
                ln.style.left = pct(p.line) + '%';
                ln.style.height = rows * 30 + 'px';
                if (p.lineLabel) ln.appendChild(h('span', '', p.lineLabel));
                area.appendChild(ln);
            }
            this.root.appendChild(area);
        }
    }

    /* =========================================================
     * Chips (queue / stack / set contents) and Log lines
     * ========================================================= */
    class ChipsView {
        constructor(host) {
            this.root = h('div', 'ch');
            host.appendChild(this.root);
        }
        update(p) {
            this.root.innerHTML = '';
            const list = h('div', 'ch-list');
            if (!p.items.length) list.appendChild(h('span', 'ch-empty', p.empty || '(rỗng)'));
            p.items.forEach((it) => {
                const o = it !== null && typeof it === 'object' ? it : { t: it };
                list.appendChild(h('span', stateClass('ch-item', o.s), o.t));
            });
            if (p.front) this.root.appendChild(h('span', 'ch-end', p.front));
            this.root.appendChild(list);
            if (p.back) this.root.appendChild(h('span', 'ch-end', p.back));
        }
    }

    class LogView {
        constructor(host) {
            this.root = h('div', 'lg');
            host.appendChild(this.root);
        }
        update(p) {
            this.root.innerHTML = '';
            p.lines.forEach((ln, i) => {
                const o = typeof ln === 'object' ? ln : { t: ln };
                const e = h('div', stateClass('lg-line', o.s || (i === p.lines.length - 1 && p.hiLast !== false ? 'act' : '')));
                e.textContent = o.t;
                this.root.appendChild(e);
            });
            this.root.scrollTop = this.root.scrollHeight;
        }
    }

    const VIEWS = {
        array: ArrayView,
        graph: GraphView,
        tree: TreeView,
        grid: GridView,
        list: ListView,
        buckets: BucketsView,
        intervals: IntervalsView,
        chips: ChipsView,
        log: LogView
    };

    /* =========================================================
     * Stage — renders all panels of one frame
     * ========================================================= */
    class Stage {
        constructor(root) {
            this.root = root;
            this.views = new Map();
        }
        render(frame) {
            const seen = new Set();
            frame.panels.forEach((p, idx) => {
                const key = p.key || p.type + idx;
                seen.add(key);
                let v = this.views.get(key);
                if (!v || v.type !== p.type) {
                    if (v) v.wrap.remove();
                    const wrap = h('div', 'panel');
                    const title = h('div', 'panel-title');
                    const body = h('div', 'panel-body');
                    wrap.appendChild(title);
                    wrap.appendChild(body);
                    const View = VIEWS[p.type];
                    v = { type: p.type, wrap, title, body, view: null };
                    this.root.appendChild(wrap);
                    v.view = new View(body);
                    this.views.set(key, v);
                }
                if (this.root.children[idx] !== v.wrap) this.root.insertBefore(v.wrap, this.root.children[idx] || null);
                v.wrap.className = 'panel panel-' + p.type + (p.span ? ' span-' + p.span : '');
                v.title.textContent = p.title || '';
                v.title.style.display = p.title ? '' : 'none';
                v.view.update(p);
            });
            this.views.forEach((v, key) => { if (!seen.has(key)) { v.wrap.remove(); this.views.delete(key); } });
        }
        clear() {
            this.root.innerHTML = '';
            this.views.clear();
        }
    }

    /* =========================================================
     * Pseudocode highlighter (python-ish)
     * ========================================================= */
    const TOK = /(\b\d+(?:\.\d+)?\b)|\b(def|return|if|elif|else|for|while|in|not|and|or|break|continue|True|False|None|import|from|class|lambda|pass|yield|with|as|is|global|nonlocal|del|try|except|finally|raise)\b|\b([A-Za-z_]\w*)(?=\()/g;

    function escapeHtml(s) {
        return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }

    function highlightPy(line) {
        // split out comments and strings first so keywords inside them stay plain
        const out = [];
        let rest = line;
        const re = /(#.*$)|("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')/;
        while (rest.length) {
            const m = rest.match(re);
            if (!m) { out.push(tokenPlain(rest)); break; }
            out.push(tokenPlain(rest.slice(0, m.index)));
            out.push(m[1] ? `<span class="tk-c">${escapeHtml(m[1])}</span>` : `<span class="tk-s">${escapeHtml(m[2])}</span>`);
            rest = rest.slice(m.index + m[0].length);
        }
        return out.join('');
    }

    function tokenPlain(s) {
        let out = '';
        let last = 0;
        let m;
        TOK.lastIndex = 0;
        while ((m = TOK.exec(s))) {
            out += escapeHtml(s.slice(last, m.index));
            if (m[1]) out += `<span class="tk-n">${m[1]}</span>`;
            else if (m[2]) out += `<span class="tk-k">${m[2]}</span>`;
            else out += `<span class="tk-f">${escapeHtml(m[3])}</span>`;
            last = TOK.lastIndex;
        }
        return out + escapeHtml(s.slice(last));
    }

    Algo.highlightPy = highlightPy;
    Algo.escapeHtml = escapeHtml;

    /* =========================================================
     * Simulator — inputs + stage + code + controls
     * ========================================================= */
    const SPEEDS = [0.25, 0.5, 0.75, 1, 1.5, 2, 3, 4];

    function parseInputs(viz, form) {
        const params = {};
        const errors = [];
        (viz.inputs || []).forEach((inp) => {
            const field = form.querySelector(`[data-key="${inp.key}"]`);
            const raw = field ? field.value.trim() : String(inp.value);
            if (inp.type === 'nums') {
                const nums = raw.split(/[\s,;]+/).filter(Boolean).map(Number);
                if (!nums.length || nums.some((x) => !Number.isFinite(x) || !Number.isInteger(x))) {
                    errors.push(`${inp.label}: nhập các số nguyên, cách nhau bởi dấu phẩy.`);
                    return;
                }
                const min = inp.min != null ? inp.min : -999, max = inp.max != null ? inp.max : 999;
                if (nums.some((x) => x < min || x > max)) {
                    errors.push(`${inp.label}: mỗi số trong khoảng ${min}…${max}.`);
                    return;
                }
                if (nums.length > (inp.maxLen || 14)) {
                    errors.push(`${inp.label}: tối đa ${inp.maxLen || 14} phần tử để dễ quan sát.`);
                    return;
                }
                if (inp.minLen && nums.length < inp.minLen) {
                    errors.push(`${inp.label}: cần ít nhất ${inp.minLen} phần tử.`);
                    return;
                }
                params[inp.key] = nums;
            } else if (inp.type === 'num') {
                const x = Number(raw);
                if (!Number.isFinite(x) || !Number.isInteger(x)) { errors.push(`${inp.label}: cần một số nguyên.`); return; }
                if ((inp.min != null && x < inp.min) || (inp.max != null && x > inp.max)) {
                    errors.push(`${inp.label}: trong khoảng ${inp.min}…${inp.max}.`);
                    return;
                }
                params[inp.key] = x;
            } else if (inp.type === 'text') {
                let t = raw;
                if (inp.upper) t = t.toUpperCase();
                if (inp.pattern && !new RegExp(inp.pattern).test(t)) { errors.push(`${inp.label}: ${inp.hint || 'giá trị không hợp lệ'}.`); return; }
                if (!t.length) { errors.push(`${inp.label}: không được để trống.`); return; }
                if (t.length > (inp.maxLen || 16)) { errors.push(`${inp.label}: tối đa ${inp.maxLen || 16} ký tự.`); return; }
                params[inp.key] = t;
            } else if (inp.type === 'select') {
                params[inp.key] = raw;
            }
        });
        return { params, errors };
    }

    function createSimulator(host, viz, opts) {
        opts = opts || {};
        host.innerHTML = '';
        const root = h('div', 'sim');
        host.appendChild(root);

        /* header: legend */
        if (viz.legend && viz.legend.length) {
            const lg = h('div', 'sim-legend');
            viz.legend.forEach(([st, label]) => {
                const item = h('span', 'lg-item');
                item.appendChild(h('span', 'lg-sw s-' + st));
                item.appendChild(document.createTextNode(label));
                lg.appendChild(item);
            });
            root.appendChild(lg);
        }

        /* inputs */
        const form = h('form', 'sim-inputs');
        form.setAttribute('autocomplete', 'off');
        (viz.inputs || []).forEach((inp) => {
            const lab = h('label', 'sim-field' + (inp.type === 'nums' || inp.wide ? ' wide' : ''));
            lab.appendChild(h('span', 'sim-field-label', inp.label));
            let field;
            if (inp.type === 'select') {
                field = h('select');
                inp.options.forEach(([val, text]) => {
                    const o = h('option', '', text);
                    o.value = val;
                    field.appendChild(o);
                });
                field.value = inp.value;
                field.addEventListener('change', () => apply());
            } else {
                field = h('input');
                field.type = 'text';
                field.value = Array.isArray(inp.value) ? inp.value.join(', ') : inp.value;
                field.spellcheck = false;
                if (inp.type === 'num') field.inputMode = 'numeric';
            }
            field.dataset.key = inp.key;
            lab.appendChild(field);
            form.appendChild(lab);
        });
        const hasEditable = (viz.inputs || []).some((i) => i.type !== 'select');
        const btnRow = h('div', 'sim-btns');
        if ((viz.inputs || []).some((i) => i.random)) {
            const rnd = h('button', 'btn ghost', '🎲 Ngẫu nhiên');
            rnd.type = 'button';
            rnd.addEventListener('click', () => {
                viz.inputs.forEach((inp) => {
                    if (!inp.random) return;
                    const f = form.querySelector(`[data-key="${inp.key}"]`);
                    const v = inp.random();
                    f.value = Array.isArray(v) ? v.join(', ') : v;
                });
                apply();
            });
            btnRow.appendChild(rnd);
        }
        if (hasEditable) {
            const run = h('button', 'btn', 'Chạy với dữ liệu này');
            run.type = 'submit';
            btnRow.appendChild(run);
        }
        if ((viz.inputs || []).length) {
            form.appendChild(btnRow);
            root.appendChild(form);
        }
        const err = h('div', 'sim-error');
        root.appendChild(err);
        form.addEventListener('submit', (e) => { e.preventDefault(); apply(); });

        /* body: stage + side (code, vars) */
        const body = h('div', 'sim-body' + (viz.code ? '' : ' no-code'));
        const stageWrap = h('div', 'sim-stage-wrap');
        const stageEl = h('div', 'sim-stage');
        stageWrap.appendChild(stageEl);
        body.appendChild(stageWrap);
        const side = h('div', 'sim-side');
        let codeEl = null;
        const codeLines = [];
        if (viz.code) {
            codeEl = h('pre', 'sim-code');
            viz.code.forEach((ln, i) => {
                const row = h('div', 'code-line');
                row.appendChild(h('span', 'code-no', String(i + 1)));
                const c = h('code');
                c.innerHTML = highlightPy(ln) || ' ';
                row.appendChild(c);
                codeEl.appendChild(row);
                codeLines.push(row);
            });
            const codeBox = h('div', 'side-box');
            codeBox.appendChild(h('div', 'side-title', 'Mã giả (Python)'));
            codeBox.appendChild(codeEl);
            side.appendChild(codeBox);
        }
        const varsBox = h('div', 'side-box vars-box');
        varsBox.appendChild(h('div', 'side-title', 'Biến theo dõi'));
        const varsEl = h('div', 'sim-vars');
        varsBox.appendChild(varsEl);
        side.appendChild(varsBox);
        body.appendChild(side);
        root.appendChild(body);

        /* caption + controls */
        const caption = h('div', 'sim-caption');
        caption.setAttribute('aria-live', 'polite');
        root.appendChild(caption);

        const ctr = h('div', 'sim-controls');
        const mk = (label, title, cls) => {
            const b = h('button', 'ctl ' + (cls || ''), label);
            b.type = 'button';
            b.title = title;
            b.setAttribute('aria-label', title);
            ctr.appendChild(b);
            return b;
        };
        const bFirst = mk('⏮', 'Về đầu');
        const bPrev = mk('◀', 'Lùi 1 bước (←)');
        const bPlay = mk('▶', 'Chạy / Tạm dừng (Space)', 'play');
        const bNext = mk('▶|', 'Tiến 1 bước (→)');
        const bLast = mk('⏭', 'Tới cuối');
        const scrub = h('input', 'sim-scrub');
        scrub.type = 'range';
        scrub.min = 0;
        scrub.value = 0;
        scrub.setAttribute('aria-label', 'Tua bước');
        ctr.appendChild(scrub);
        const count = h('span', 'sim-count', '0/0');
        ctr.appendChild(count);
        const speedWrap = h('label', 'sim-speed');
        speedWrap.appendChild(h('span', '', 'Tốc độ'));
        const speed = h('input');
        speed.type = 'range';
        speed.min = 0;
        speed.max = SPEEDS.length - 1;
        speed.step = 1;
        const savedSpeed = Number(readPref('algoSpeed', 3));
        speed.value = Number.isFinite(savedSpeed) ? savedSpeed : 3;
        const speedLabel = h('b', '', SPEEDS[speed.value] + '×');
        speedWrap.appendChild(speed);
        speedWrap.appendChild(speedLabel);
        ctr.appendChild(speedWrap);
        root.appendChild(ctr);

        const stage = new Stage(stageEl);
        let frames = [];
        let idx = 0;
        let timer = null;
        let destroyed = false;

        function show(i) {
            if (!frames.length) return;
            idx = Math.max(0, Math.min(frames.length - 1, i));
            const f = frames[idx];
            try {
                stage.render(f);
            } catch (e) {
                console.error(e);
            }
            caption.innerHTML = f.msg || '&nbsp;';
            codeLines.forEach((row, k) => {
                const on = Array.isArray(f.line) ? f.line.includes(k) : f.line === k;
                row.classList.toggle('on', on);
            });
            if (codeEl) {
                const on = codeLines.find((r) => r.classList.contains('on'));
                if (on) {
                    const top = on.offsetTop - codeEl.clientHeight / 2 + on.clientHeight / 2;
                    codeEl.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
                }
            }
            varsEl.innerHTML = '';
            const vars = f.vars || {};
            const keys = Object.keys(vars);
            if (!keys.length) varsEl.appendChild(h('span', 'vars-empty', '—'));
            keys.forEach((k) => {
                const item = h('div', 'var');
                item.appendChild(h('span', 'var-k', k));
                item.appendChild(h('span', 'var-v', String(vars[k])));
                varsEl.appendChild(item);
            });
            scrub.max = frames.length - 1;
            scrub.value = idx;
            count.textContent = `${idx + 1}/${frames.length}`;
            bPrev.disabled = bFirst.disabled = idx === 0;
            bNext.disabled = bLast.disabled = idx === frames.length - 1;
            if (idx === frames.length - 1) pause();
        }

        function interval() { return 1000 / SPEEDS[speed.value]; }

        function play() {
            if (!frames.length) return;
            if (idx >= frames.length - 1) show(0);
            clearInterval(timer);
            timer = setInterval(() => {
                if (destroyed) return clearInterval(timer);
                if (idx >= frames.length - 1) pause();
                else show(idx + 1);
            }, interval());
            bPlay.textContent = '⏸';
            root.classList.add('playing');
        }

        function pause() {
            clearInterval(timer);
            timer = null;
            bPlay.textContent = '▶';
            root.classList.remove('playing');
        }

        function toggle() { if (timer) pause(); else play(); }

        function apply() {
            const { params, errors } = parseInputs(viz, form);
            err.textContent = errors.join(' ');
            err.style.display = errors.length ? '' : 'none';
            if (errors.length) return;
            pause();
            try {
                frames = viz.run(params) || [];
            } catch (e) {
                console.error(e);
                err.textContent = 'Không chạy được mô phỏng với dữ liệu này: ' + e.message;
                err.style.display = '';
                frames = [];
            }
            if (!frames.length) return;
            stage.clear();
            show(0);
        }

        bFirst.addEventListener('click', () => { pause(); show(0); });
        bPrev.addEventListener('click', () => { pause(); show(idx - 1); });
        bNext.addEventListener('click', () => { pause(); show(idx + 1); });
        bLast.addEventListener('click', () => { pause(); show(frames.length - 1); });
        bPlay.addEventListener('click', toggle);
        scrub.addEventListener('input', () => { pause(); show(Number(scrub.value)); });
        speed.addEventListener('input', () => {
            speedLabel.textContent = SPEEDS[speed.value] + '×';
            writePref('algoSpeed', speed.value);
            if (timer) play();
        });

        let resizeT = null;
        const ro = window.ResizeObserver ? new ResizeObserver(() => {
            clearTimeout(resizeT);
            resizeT = setTimeout(() => { if (frames.length) { stage.render(frames[idx]); } }, 120);
        }) : null;
        if (ro) ro.observe(stageEl);

        apply();

        return {
            toggle,
            step(d) { pause(); show(idx + d); },
            destroy() {
                destroyed = true;
                pause();
                if (ro) ro.disconnect();
                host.innerHTML = '';
            }
        };
    }

    function readPref(k, d) {
        try { const v = localStorage.getItem(k); return v == null ? d : v; } catch (e) { return d; }
    }
    function writePref(k, v) {
        try { localStorage.setItem(k, v); } catch (e) { /* ignore */ }
    }

    Algo.createSimulator = createSimulator;
    Algo.readPref = readPref;
    Algo.writePref = writePref;
})();
