// ==================== DESIGN PATTERNS - HÌNH MINH HỌA (SVG) ====================
// Mỗi pattern có một "cảnh" đời thực vẽ bằng SVG inline (emoji + ô + mũi tên).
// Nhãn trong hình KHÔNG chứa tên pattern để dùng lại cho bài tập "nhìn hình đoán pattern".
// Màu sắc lấy từ CSS (.sc-*) trong styles.css.

const Scene = (() => {
    let uid = 0;

    function esc(s) {
        return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    }

    // Kích thước mặc định của một ô theo số dòng chữ
    function box(n) {
        const lines = n.label ? String(n.label).split('\n') : [];
        if (n.inline) return { w: n.w || 150, h: n.h || 44, lines };
        return { w: n.w || 112, h: n.h || (lines.length ? 50 + lines.length * 15 : 60), lines };
    }

    function tile(n) {
        const { w, h, lines } = box(n);
        const x0 = n.x - w / 2, y0 = n.y - h / 2;
        let s = `<g class="sc-tile ${n.cls || ''}">`;
        s += `<rect x="${x0}" y="${y0}" width="${w}" height="${h}" rx="${n.inline ? 12 : 14}"/>`;
        if (n.inline) {
            s += `<text class="sc-emoji sc-emoji-sm" x="${x0 + 22}" y="${n.y + 8}">${n.icon}</text>`;
            s += `<text class="sc-label sc-left" x="${x0 + 42}" y="${n.y + 5}">${esc(lines.join(' '))}</text>`;
        } else {
            const contentH = 28 + lines.length * 15;
            const top = n.y - contentH / 2;
            s += `<text class="sc-emoji" x="${n.x}" y="${top + 25}">${n.icon}</text>`;
            lines.forEach((ln, i) => {
                s += `<text class="sc-label${i > 0 ? ' sc-label-2' : ''}" x="${n.x}" y="${top + 44 + i * 15}">${esc(ln)}</text>`;
            });
        }
        if (n.badge) {
            s += `<circle class="sc-badge" cx="${x0 + 4}" cy="${y0 + 4}" r="11"/>`;
            s += `<text class="sc-badge-text" x="${x0 + 4}" y="${y0 + 8}">${esc(n.badge)}</text>`;
        }
        if (n.cross) {
            s += `<path class="sc-cross" d="M${x0 + 12} ${y0 + 10} L${x0 + w - 12} ${y0 + h - 10} M${x0 + w - 12} ${y0 + 10} L${x0 + 12} ${y0 + h - 10}"/>`;
        }
        return s + '</g>';
    }

    // Điểm trên viền ô khi đi từ tâm về phía (tx, ty)
    function edgePoint(n, tx, ty, gap) {
        if (n.point) return { x: n.x, y: n.y };
        const { w, h } = box(n);
        const dx = tx - n.x, dy = ty - n.y;
        if (!dx && !dy) return { x: n.x, y: n.y };
        const t = Math.min(dx ? (w / 2) / Math.abs(dx) : Infinity, dy ? (h / 2) / Math.abs(dy) : Infinity);
        const len = Math.hypot(dx, dy);
        return { x: n.x + dx * t + (dx / len) * gap, y: n.y + dy * t + (dy / len) * gap };
    }

    function link(nodes, l, mk) {
        const a = nodes[l.from], b = nodes[l.to];
        const mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2;
        const dx = b.x - a.x, dy = b.y - a.y, len = Math.hypot(dx, dy) || 1;
        const c = { x: mx - (dy / len) * (l.curve || 0), y: my + (dx / len) * (l.curve || 0) };
        const p1 = edgePoint(a, l.curve ? c.x : b.x, l.curve ? c.y : b.y, 4);
        const p2 = edgePoint(b, l.curve ? c.x : a.x, l.curve ? c.y : a.y, 7);
        const cls = ['sc-arrow', l.cls || '', l.dash ? 'dash' : '', l.anim ? 'anim' : ''].join(' ');
        const tone = (l.cls || '').includes('bad') ? 'b' : (l.cls || '').includes('good') ? 'g' : (l.cls || '').includes('accent') ? 'p' : 'n';
        const markers = `marker-end="url(#${mk}-${tone})"` + (l.both ? ` marker-start="url(#${mk}-${tone}s)"` : '');
        const d = l.curve ? `M${p1.x} ${p1.y} Q${c.x} ${c.y} ${p2.x} ${p2.y}` : `M${p1.x} ${p1.y} L${p2.x} ${p2.y}`;
        let s = `<path class="${cls}" d="${d}" ${markers}/>`;
        if (l.label) {
            const lx = l.curve ? 0.25 * p1.x + 0.5 * c.x + 0.25 * p2.x : (p1.x + p2.x) / 2;
            const ly = (l.curve ? 0.25 * p1.y + 0.5 * c.y + 0.25 * p2.y : (p1.y + p2.y) / 2) + (l.dy || 0);
            const tw = [...l.label].length * 6.2 + 12;
            s += `<g class="sc-elabel ${l.cls || ''}"><rect x="${lx - tw / 2}" y="${ly - 10}" width="${tw}" height="19" rx="9"/><text x="${lx}" y="${ly + 4}">${esc(l.label)}</text></g>`;
        }
        return s;
    }

    function frame(f) {
        return `<g class="sc-frame ${f.cls || ''}"><rect x="${f.x}" y="${f.y}" width="${f.w}" height="${f.h}" rx="16"/>` +
            (f.label ? `<text x="${f.x + 14}" y="${f.y + 19}">${esc(f.label)}</text>` : '') + '</g>';
    }

    function markerDefs(mk) {
        const tones = { n: 'sc-mk-n', g: 'sc-mk-g', b: 'sc-mk-b', p: 'sc-mk-p' };
        return Object.entries(tones).map(([t, cls]) =>
            `<marker id="${mk}-${t}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="${cls}" d="M0 0 L10 5 L0 10 z"/></marker>` +
            `<marker id="${mk}-${t}s" viewBox="0 0 10 10" refX="2" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="${cls}" d="M10 0 L0 5 L10 10 z"/></marker>`
        ).join('');
    }

    function render(spec, title) {
        const mk = 'scmk' + (++uid);
        const w = spec.w || 600, h = spec.h || 260;
        let s = `<svg class="sc" viewBox="0 0 ${w} ${h}" role="img" aria-label="${esc(title || spec.caption || '')}" xmlns="http://www.w3.org/2000/svg">`;
        s += `<defs>${markerDefs(mk)}</defs>`;
        (spec.frames || []).forEach(f => { s += frame(f); });
        if (spec.under) s += spec.under;
        (spec.links || []).forEach(l => { s += link(spec.nodes, l, mk); });
        Object.values(spec.nodes || {}).forEach(n => { if (!n.point) s += tile(n); });
        if (spec.over) s += spec.over;
        return s + '</svg>';
    }

    return { render, esc };
})();

// ==================== 23 CẢNH MINH HỌA ====================
const patternScenes = {
    'factory-method': {
        caption: 'Quy trình giao hàng giống nhau; mỗi chi nhánh tự quyết định "tạo" phương tiện nào.',
        nodes: {
            p: { x: 95, y: 130, icon: '📦', label: 'Quy trình\ngiao hàng chung', cls: 'accent', w: 130 },
            road: { x: 305, y: 62, icon: '🛣️', label: 'Chi nhánh\nđường bộ' },
            sea: { x: 305, y: 198, icon: '⚓', label: 'Chi nhánh\nđường biển' },
            truck: { x: 510, y: 62, icon: '🚚', label: 'Xe tải', cls: 'good' },
            ship: { x: 510, y: 198, icon: '🚢', label: 'Tàu thủy', cls: 'good' }
        },
        links: [
            { from: 'p', to: 'road', dash: true },
            { from: 'p', to: 'sea', dash: true },
            { from: 'road', to: 'truck', label: 'tự tạo', cls: 'good', anim: true },
            { from: 'sea', to: 'ship', label: 'tự tạo', cls: 'good', anim: true }
        ]
    },

    'abstract-factory': {
        caption: 'Chọn một xưởng là nhận trọn bộ đồ cùng phong cách — không bao giờ lắp lệch bộ.',
        frames: [
            { x: 215, y: 12, w: 370, h: 112, label: 'Bộ Hiện đại', cls: 'blue' },
            { x: 215, y: 136, w: 370, h: 112, label: 'Bộ Cổ điển', cls: 'warn' }
        ],
        nodes: {
            fm: { x: 85, y: 68, icon: '✨', label: 'Xưởng\nHiện đại', cls: 'accent' },
            fv: { x: 85, y: 192, icon: '🏛️', label: 'Xưởng\nCổ điển', cls: 'accent' },
            m1: { x: 285, y: 76, icon: '🪑', label: 'Ghế', w: 92, cls: 'blue' },
            m2: { x: 400, y: 76, icon: '🍽️', label: 'Bàn', w: 92, cls: 'blue' },
            m3: { x: 515, y: 76, icon: '💡', label: 'Đèn', w: 92, cls: 'blue' },
            v1: { x: 285, y: 200, icon: '🪑', label: 'Ghế', w: 92, cls: 'warn' },
            v2: { x: 400, y: 200, icon: '🍽️', label: 'Bàn', w: 92, cls: 'warn' },
            v3: { x: 515, y: 200, icon: '💡', label: 'Đèn', w: 92, cls: 'warn' }
        },
        links: [
            { from: 'fm', to: 'm1', label: 'làm cả bộ', anim: true },
            { from: 'fv', to: 'v1', label: 'làm cả bộ', anim: true }
        ]
    },

    'builder': {
        caption: 'Lắp từng lớp theo thứ tự, lớp nào không cần thì bỏ qua; xong hết mới lấy chiếc burger ra.',
        nodes: {
            chef: { x: 300, y: 42, icon: '🧑‍🍳', label: 'Người làm bánh (theo yêu cầu)', inline: true, w: 260 },
            s1: { x: 62, y: 168, icon: '🍞', label: 'Bánh', w: 90, badge: '1' },
            s2: { x: 172, y: 168, icon: '🥩', label: 'Thịt', w: 90, badge: '2' },
            s3: { x: 282, y: 168, icon: '🧀', label: 'Phô mai', w: 90, badge: '3', cls: 'ghost' },
            s4: { x: 392, y: 168, icon: '🥬', label: 'Rau', w: 90, badge: '4' },
            out: { x: 522, y: 168, icon: '🍔', label: 'Thành phẩm', w: 110, cls: 'good' }
        },
        links: [
            { from: 's1', to: 's2', anim: true },
            { from: 's2', to: 's3', dash: true },
            { from: 's3', to: 's4', dash: true },
            { from: 's4', to: 'out', cls: 'good', anim: true },
            { from: 'chef', to: 's3', label: 'lắp lần lượt · bỏ qua được', dash: true, cls: 'accent' }
        ]
    },

    'prototype': {
        caption: 'Không viết lại từ đầu: nhân bản bản gốc rồi chỉ sửa phần khác biệt.',
        nodes: {
            orig: { x: 100, y: 130, icon: '📄', label: 'Bản gốc\n(đã điền sẵn)', cls: 'accent' },
            copier: { x: 295, y: 130, icon: '🖨️', label: 'Tự sao chép\nchính nó' },
            c1: { x: 500, y: 60, icon: '📄', label: 'Bản sao 1\nđổi tiêu đề', cls: 'good' },
            c2: { x: 500, y: 200, icon: '📄', label: 'Bản sao 2\nđổi màu', cls: 'good' }
        },
        links: [
            { from: 'orig', to: 'copier', anim: true },
            { from: 'copier', to: 'c1', cls: 'good', anim: true },
            { from: 'copier', to: 'c2', cls: 'good', anim: true }
        ]
    },

    'singleton': {
        caption: 'Ai hỏi cũng được dẫn tới cùng một chính phủ; không ai được tự lập chính phủ thứ hai.',
        nodes: {
            gov: { x: 305, y: 130, icon: '🏛️', label: 'Chính phủ\n(duy nhất)', cls: 'accent', w: 130 },
            a: { x: 80, y: 48, icon: '🧑‍💼', label: 'Bộ Y tế' },
            b: { x: 80, y: 130, icon: '🧑‍🔧', label: 'Tỉnh A' },
            c: { x: 80, y: 212, icon: '🧑‍💻', label: 'Người dân' },
            ghost: { x: 515, y: 130, icon: '🏛️', label: 'Chính phủ\nthứ hai?', cls: 'bad ghost', cross: true }
        },
        links: [
            { from: 'a', to: 'gov', anim: true },
            { from: 'b', to: 'gov', label: 'cùng một nơi', anim: true },
            { from: 'c', to: 'gov', anim: true },
            { from: 'gov', to: 'ghost', label: 'không được lập', cls: 'bad', dash: true }
        ]
    },

    'adapter': {
        caption: 'Không sửa sạc, không sửa ổ điện — chỉ thêm một lớp chuyển đổi ở giữa.',
        nodes: {
            plug: { x: 90, y: 165, icon: '🔌', label: 'Sạc laptop\nchân tròn (EU)', w: 130 },
            adp: { x: 300, y: 165, icon: '🔄', label: 'Củ chuyển\nđổi', cls: 'accent' },
            socket: { x: 505, y: 165, icon: '🔲', label: 'Ổ điện khách sạn\nchân dẹt (Mỹ)', w: 150 }
        },
        links: [
            { from: 'plug', to: 'adp', label: 'cắm vào', anim: true },
            { from: 'adp', to: 'socket', label: 'vừa khít', cls: 'good', anim: true },
            { from: 'plug', to: 'socket', label: '❌ cắm thẳng: không vừa', cls: 'bad', dash: true, curve: -120 }
        ]
    },

    'bridge': {
        caption: 'Hai nhánh lớn lên độc lập, nối bằng một "cây cầu": thêm remote hay thêm thiết bị đều chỉ là +1 class.',
        frames: [
            { x: 18, y: 12, w: 175, h: 236, label: 'Điều khiển' },
            { x: 407, y: 12, w: 175, h: 236, label: 'Thiết bị' }
        ],
        nodes: {
            r1: { x: 105, y: 88, icon: '📱', label: 'Remote\ncơ bản' },
            r2: { x: 105, y: 190, icon: '🎛️', label: 'Remote\nnâng cao' },
            br: { x: 300, y: 138, icon: '🌉', label: 'giữ tham chiếu\ntới 1 thiết bị', cls: 'accent', w: 128 },
            d1: { x: 495, y: 70, icon: '📺', label: 'TV', inline: true, w: 130 },
            d2: { x: 495, y: 138, icon: '📻', label: 'Radio', inline: true, w: 130 },
            d3: { x: 495, y: 206, icon: '🔊', label: 'Loa', inline: true, w: 130 }
        },
        links: [
            { from: 'r1', to: 'br' },
            { from: 'r2', to: 'br' },
            { from: 'br', to: 'd1', dash: true, cls: 'accent' },
            { from: 'br', to: 'd2', dash: true, cls: 'accent', anim: true },
            { from: 'br', to: 'd3', dash: true, cls: 'accent' }
        ]
    },

    'composite': {
        caption: 'Hỏi "dung lượng bao nhiêu?": file tự trả lời, thư mục hỏi từng thứ bên trong rồi cộng lại.',
        nodes: {
            root: { x: 300, y: 38, icon: '📁', label: 'Dự án = 18MB', inline: true, w: 170, cls: 'accent' },
            src: { x: 170, y: 132, icon: '📁', label: 'src = 12MB', inline: true, w: 150, cls: 'accent' },
            readme: { x: 440, y: 132, icon: '📄', label: 'README 6MB', inline: true, w: 150, cls: 'good' },
            a: { x: 90, y: 222, icon: '📄', label: 'app.ts 8MB', inline: true, w: 140, cls: 'good' },
            b: { x: 260, y: 222, icon: '📄', label: 'util.ts 4MB', inline: true, w: 140, cls: 'good' }
        },
        links: [
            { from: 'root', to: 'src', label: 'hỏi', anim: true },
            { from: 'root', to: 'readme', label: 'hỏi', anim: true },
            { from: 'src', to: 'a', label: 'hỏi', anim: true },
            { from: 'src', to: 'b', label: 'hỏi', anim: true }
        ]
    },

    'decorator': {
        caption: 'Mỗi lớp bọc thêm một thứ và cộng giá của mình vào; nhìn từ ngoài vẫn chỉ là "một ly cà phê".',
        under: `
            <g class="sc-layer l3"><rect x="70" y="10" width="420" height="238" rx="26"/><text x="92" y="36">🍦 + Kem 3k</text></g>
            <g class="sc-layer l2"><rect x="108" y="46" width="344" height="190" rx="22"/><text x="130" y="72">🍬 + Đường 1k</text></g>
            <g class="sc-layer l1"><rect x="146" y="82" width="268" height="142" rx="18"/><text x="168" y="108">🥛 + Sữa 2k</text></g>`,
        nodes: {
            core: { x: 280, y: 166, icon: '☕', label: 'Cà phê 10k', cls: 'accent', w: 130 }
        },
        over: `<g class="sc-total"><text x="548" y="122">=</text><text x="548" y="152">16k</text></g>`
    },

    'facade': {
        caption: 'Khách chỉ nói với lễ tân một câu; lễ tân lo điều phối các bộ phận phía sau.',
        frames: [{ x: 360, y: 8, w: 232, h: 244, label: 'Phía sau (khách không cần biết)' }],
        nodes: {
            guest: { x: 70, y: 138, icon: '🧳', label: 'Khách', w: 100 },
            desk: { x: 240, y: 138, icon: '🛎️', label: 'Lễ tân', cls: 'accent', w: 110 },
            d1: { x: 476, y: 58, icon: '🧹', label: 'Buồng phòng', inline: true, w: 180, cls: 'muted' },
            d2: { x: 476, y: 112, icon: '🍽️', label: 'Nhà hàng', inline: true, w: 180, cls: 'muted' },
            d3: { x: 476, y: 166, icon: '🚕', label: 'Đặt xe', inline: true, w: 180, cls: 'muted' },
            d4: { x: 476, y: 220, icon: '💳', label: 'Kế toán', inline: true, w: 180, cls: 'muted' }
        },
        links: [
            { from: 'guest', to: 'desk', label: '1 yêu cầu', anim: true },
            { from: 'desk', to: 'd1' }, { from: 'desk', to: 'd2' },
            { from: 'desk', to: 'd3' }, { from: 'desk', to: 'd4' }
        ]
    },

    'flyweight': {
        caption: 'Phần riêng (tọa độ) nằm ở từng cây; phần nặng (hình, màu lá) cả rừng dùng chung 2 bản.',
        frames: [{ x: 12, y: 8, w: 262, h: 244, label: '10.000 cây — mỗi cây chỉ nhớ (x, y)' }],
        under: (() => {
            let s = '';
            const kinds = ['🌳', '🌲'];
            for (let r = 0; r < 3; r++) {
                for (let c = 0; c < 4; c++) {
                    const x = 50 + c * 60, y = 72 + r * 62, k = (r + c) % 2;
                    s += `<text class="sc-emoji sc-emoji-sm" x="${x}" y="${y}">${kinds[k]}</text>`;
                    s += `<text class="sc-tiny" x="${x}" y="${y + 17}">(${c * 37 + 12},${r * 51 + 8})</text>`;
                }
            }
            return s;
        })(),
        nodes: {
            gA: { x: 274, y: 95, point: true },
            gB: { x: 274, y: 175, point: true },
            oak: { x: 480, y: 78, icon: '🌳', label: 'Kiểu Sồi\nhình + màu 2MB', cls: 'accent', w: 150 },
            pine: { x: 480, y: 190, icon: '🌲', label: 'Kiểu Thông\nhình + màu 2MB', cls: 'accent', w: 150 }
        },
        links: [
            { from: 'gA', to: 'oak', label: 'dùng chung', cls: 'accent', anim: true },
            { from: 'gB', to: 'pine', label: 'dùng chung', cls: 'accent', anim: true }
        ]
    },

    'proxy': {
        caption: 'Người xem cầm "ảnh bìa" y như cầm bộ phim; chỉ khi bấm Play (và đủ quyền) phim thật mới được tải.',
        nodes: {
            user: { x: 62, y: 120, icon: '🧑', label: 'Người xem', w: 100 },
            cover: { x: 272, y: 120, icon: '🖼️', label: 'Ảnh bìa phim\ntên · thời lượng', cls: 'accent', w: 144 },
            real: { x: 522, y: 120, icon: '🎞️', label: 'Phim thật 2GB\nchỉ tải khi cần', w: 140, cls: 'ghost' },
            lock: { x: 272, y: 226, icon: '🔐', label: 'kiểm tra gói cước', inline: true, w: 180, cls: 'muted' }
        },
        links: [
            { from: 'user', to: 'cover', label: 'xem ngay', anim: true },
            { from: 'cover', to: 'real', label: 'bấm ▶ mới tải', dash: true, cls: 'accent', dy: -34 },
            { from: 'cover', to: 'lock', dash: true }
        ]
    },

    'chain-of-responsibility': {
        caption: 'Mỗi cấp tự quyết: trong hạn mức thì duyệt và dừng, vượt quá thì chuyền lên cấp trên.',
        nodes: {
            doc: { x: 58, y: 160, icon: '📝', label: 'Đề xuất chi\n30 triệu', w: 100 },
            h1: { x: 200, y: 160, icon: '👨‍💼', label: 'Trưởng nhóm\n≤ 5 triệu', w: 116 },
            h2: { x: 356, y: 160, icon: '👩‍💼', label: 'Trưởng phòng\n≤ 50 triệu', w: 116, cls: 'good' },
            h3: { x: 518, y: 160, icon: '🧑‍⚖️', label: 'Giám đốc\n≤ 500 triệu', w: 116, cls: 'ghost' },
            ok: { x: 356, y: 40, icon: '✅', label: 'Duyệt & dừng', inline: true, w: 160, cls: 'good' }
        },
        links: [
            { from: 'doc', to: 'h1', anim: true },
            { from: 'h1', to: 'h2', label: 'vượt → chuyền', anim: true, dy: -54 },
            { from: 'h2', to: 'h3', label: 'không cần', dash: true, dy: -54 },
            { from: 'h2', to: 'ok', cls: 'good' }
        ]
    },

    'command': {
        caption: 'Yêu cầu được "đóng gói" thành tờ phiếu: chuyền tay, xếp hàng, hủy hay ghi sổ đều được — bếp không cần biết ai gọi.',
        nodes: {
            guest: { x: 58, y: 78, icon: '🧑', label: 'Khách', w: 92 },
            ticket: { x: 200, y: 78, icon: '🧾', label: 'Phiếu order\n"2 phở bò"', cls: 'accent', w: 124 },
            waiter: { x: 355, y: 78, icon: '🤵', label: 'Bồi bàn', w: 100 },
            chef: { x: 527, y: 78, icon: '👨‍🍳', label: 'Bếp', cls: 'good', w: 100 },
            undo: { x: 200, y: 212, icon: '↩️', label: 'Hủy / đổi món', inline: true, w: 170, cls: 'muted' },
            queue: { x: 440, y: 212, icon: '📥', label: 'Xếp hàng · ghi sổ', inline: true, w: 190, cls: 'muted' }
        },
        links: [
            { from: 'guest', to: 'ticket', label: 'gọi món', dy: -44 },
            { from: 'ticket', to: 'waiter', anim: true },
            { from: 'waiter', to: 'chef', label: 'đưa phiếu', anim: true, dy: -44 },
            { from: 'ticket', to: 'undo', dash: true },
            { from: 'waiter', to: 'queue', label: 'bếp bận', dash: true }
        ]
    },

    'iterator': {
        caption: 'Khách chỉ hỏi "còn món tiếp theo không?" rồi đi tiếp — không cần biết sơ đồ các phòng.',
        frames: [{ x: 14, y: 10, w: 404, h: 240, label: 'Bảo tàng (bố cục rắc rối)' }],
        nodes: {
            e1: { x: 95, y: 88, icon: '🖼️', label: 'Tranh', w: 96, badge: '1' },
            e2: { x: 335, y: 88, icon: '🗿', label: 'Tượng', w: 96, badge: '2' },
            e3: { x: 335, y: 196, icon: '🏺', label: 'Gốm', w: 96, badge: '3' },
            e4: { x: 95, y: 196, icon: '⚔️', label: 'Kiếm cổ', w: 96, badge: '4' },
            guide: { x: 512, y: 130, icon: '🚶', label: 'Lộ trình\n"tiếp theo?"', cls: 'accent', w: 128 }
        },
        links: [
            { from: 'e1', to: 'e2', cls: 'accent', anim: true },
            { from: 'e2', to: 'e3', cls: 'accent', anim: true },
            { from: 'e3', to: 'e4', cls: 'accent', anim: true },
            { from: 'guide', to: 'e2', dash: true }
        ]
    },

    'mediator': {
        caption: 'Máy bay không nói chuyện trực tiếp với nhau; mọi liên lạc đi qua đài, đài quyết định ai cần biết gì.',
        nodes: {
            tower: { x: 300, y: 138, icon: '🗼', label: 'Đài kiểm soát', cls: 'accent', w: 132 },
            p1: { x: 85, y: 50, icon: '✈️', label: 'VN123', w: 100 },
            p2: { x: 515, y: 50, icon: '✈️', label: 'QH456', w: 100 },
            p3: { x: 85, y: 212, icon: '✈️', label: 'VJ789', w: 100 },
            p4: { x: 515, y: 212, icon: '🛬', label: 'Đang hạ cánh', w: 110 }
        },
        links: [
            { from: 'p1', to: 'tower', both: true, cls: 'accent' },
            { from: 'p2', to: 'tower', both: true, cls: 'accent' },
            { from: 'p3', to: 'tower', both: true, cls: 'accent' },
            { from: 'p4', to: 'tower', both: true, cls: 'accent' },
            { from: 'p1', to: 'p2', label: '❌ không gọi nhau trực tiếp', cls: 'bad', dash: true }
        ]
    },

    'memento': {
        caption: 'Chụp lại trạng thái rồi cất đi; khi cần thì khôi phục — kho cất giữ không cần (và không được) xem bên trong.',
        nodes: {
            g1: { x: 58, y: 62, icon: '🎮', label: 'Màn 3', w: 90 },
            s1: { x: 178, y: 62, icon: '💾', label: 'Lưu #1', w: 90, cls: 'accent' },
            g2: { x: 298, y: 62, icon: '🎮', label: 'Màn 5', w: 90 },
            s2: { x: 418, y: 62, icon: '💾', label: 'Lưu #2', w: 90, cls: 'accent' },
            die: { x: 538, y: 62, icon: '💀', label: 'Thua trận', w: 96, cls: 'bad' },
            box: { x: 240, y: 200, icon: '🗄️', label: 'Kho bản lưu\n(không mở ra xem)', w: 150 },
            load: { x: 470, y: 200, icon: '⏪', label: 'Chơi lại từ\nbản lưu #2', cls: 'good', w: 132 }
        },
        links: [
            { from: 'g1', to: 's1' }, { from: 's1', to: 'g2' }, { from: 'g2', to: 's2' }, { from: 's2', to: 'die' },
            { from: 's1', to: 'box', dash: true, cls: 'accent' },
            { from: 's2', to: 'box', label: 'cất', dash: true, cls: 'accent' },
            { from: 'box', to: 'load', label: 'lấy ra', cls: 'good', anim: true }
        ]
    },

    'observer': {
        caption: 'Ai đăng ký thì được báo tự động khi có tin; hủy đăng ký thì thôi nhận — tòa soạn không cần biết từng người là ai.',
        nodes: {
            pub: { x: 110, y: 130, icon: '📰', label: 'Tòa soạn\n"Có tin mới!"', cls: 'accent', w: 136 },
            s1: { x: 480, y: 38, icon: '📧', label: 'Email của An', inline: true, w: 190, cls: 'good' },
            s2: { x: 480, y: 99, icon: '📱', label: 'SMS của Bình', inline: true, w: 190, cls: 'good' },
            s3: { x: 480, y: 160, icon: '🔔', label: 'App của Chi', inline: true, w: 190, cls: 'good' },
            s4: { x: 480, y: 221, icon: '🚫', label: 'Dũng (đã hủy)', inline: true, w: 190, cls: 'ghost' }
        },
        links: [
            { from: 'pub', to: 's1', cls: 'good', anim: true },
            { from: 'pub', to: 's2', cls: 'good', anim: true },
            { from: 'pub', to: 's3', cls: 'good', anim: true },
            { from: 'pub', to: 's4', label: 'không gửi nữa', dash: true }
        ]
    },

    'state': {
        caption: 'Cùng một nút bấm, máy phản ứng khác nhau tùy trạng thái — và tự chuyển trạng thái sau mỗi bước.',
        nodes: {
            idle: { x: 110, y: 62, icon: '😴', label: 'Chờ khách', cls: 'accent', w: 118 },
            money: { x: 490, y: 62, icon: '💰', label: 'Đã có tiền', cls: 'accent', w: 118 },
            disp: { x: 300, y: 205, icon: '📦', label: 'Đang trả hàng', cls: 'accent', w: 130 }
        },
        links: [
            { from: 'idle', to: 'money', label: 'nhét tiền', anim: true },
            { from: 'money', to: 'disp', label: 'bấm "Chọn món"', anim: true },
            { from: 'disp', to: 'idle', label: 'lấy hàng xong', anim: true }
        ],
        over: `<text class="sc-note" x="18" y="134">Bấm "Chọn món" lúc này</text><text class="sc-note bad" x="18" y="151">→ "Hãy nhét tiền!"</text>
               <text class="sc-note" x="582" y="134" text-anchor="end">Nhét tiền lúc này</text><text class="sc-note bad" x="582" y="151" text-anchor="end">→ "Đã có tiền rồi"</text>`
    },

    'strategy': {
        caption: 'Giỏ hàng không quan tâm trả bằng gì — chỉ cần một "cách thanh toán" được cắm vào, và đổi lúc nào cũng được.',
        nodes: {
            cart: { x: 84, y: 130, icon: '🛒', label: 'Giỏ hàng\ntổng 1.048$', cls: 'accent', w: 128 },
            slot: { x: 262, y: 130, icon: '🔌', label: 'Khe cắm\n"cách trả tiền"', w: 124 },
            cash: { x: 505, y: 48, icon: '💵', label: 'Tiền mặt', inline: true, w: 170, cls: 'muted' },
            card: { x: 505, y: 130, icon: '💳', label: 'Thẻ tín dụng', inline: true, w: 170, cls: 'good' },
            wallet: { x: 505, y: 212, icon: '📱', label: 'Ví điện tử', inline: true, w: 170, cls: 'muted' }
        },
        links: [
            { from: 'cart', to: 'slot', label: 'pay()', anim: true },
            { from: 'card', to: 'slot', label: 'đang cắm', cls: 'good' },
            { from: 'cash', to: 'slot', label: 'đổi được', dash: true },
            { from: 'wallet', to: 'slot', dash: true }
        ]
    },

    'template-method': {
        caption: 'Thứ tự các bước được giữ cố định; chỉ những bước đánh dấu ✏️ mới được đổi "nguyên liệu".',
        frames: [{ x: 10, y: 6, w: 580, h: 132, label: 'Thứ tự cố định: không ai được đảo' }],
        nodes: {
            t1: { x: 78, y: 82, icon: '🏗️', label: '1. Đổ móng', cls: 'accent', w: 112 },
            t2: { x: 220, y: 82, icon: '🧱', label: '2. Xây tường ✏️', cls: 'good', w: 124 },
            t3: { x: 366, y: 82, icon: '🏠', label: '3. Lợp mái', cls: 'accent', w: 112 },
            t4: { x: 512, y: 82, icon: '🎨', label: '4. Hoàn thiện ✏️', cls: 'good', w: 130 },
            v1: { x: 160, y: 214, icon: '🧱', label: 'Gạch', inline: true, w: 104, cls: 'muted' },
            v2: { x: 280, y: 214, icon: '🪵', label: 'Gỗ', inline: true, w: 104, cls: 'muted' },
            v3: { x: 450, y: 214, icon: '🖌️', label: 'Sơn', inline: true, w: 100, cls: 'muted' },
            v4: { x: 552, y: 214, icon: '🖼️', label: 'Giấy', inline: true, w: 88, cls: 'muted' }
        },
        links: [
            { from: 't1', to: 't2', anim: true }, { from: 't2', to: 't3', anim: true }, { from: 't3', to: 't4', anim: true },
            { from: 't2', to: 'v1', dash: true, cls: 'good' }, { from: 't2', to: 'v2', dash: true, cls: 'good' },
            { from: 't4', to: 'v3', dash: true, cls: 'good' }, { from: 't4', to: 'v4', dash: true, cls: 'good' }
        ]
    },

    'visitor': {
        caption: 'Hiện vật đứng yên; mỗi "người đi thăm" làm việc riêng với từng loại. Muốn thêm việc mới? Thêm một người đi thăm mới.',
        nodes: {
            guide: { x: 82, y: 130, icon: '🧑‍🏫', label: 'Hướng dẫn\nviên', cls: 'accent', w: 124 },
            audit: { x: 518, y: 130, icon: '🧮', label: 'Kiểm kê\nviên', cls: 'accent', w: 124 },
            pic: { x: 300, y: 42, icon: '🖼️', label: 'Tranh', inline: true, w: 124 },
            sta: { x: 300, y: 130, icon: '🗿', label: 'Tượng', inline: true, w: 124 },
            pot: { x: 300, y: 218, icon: '🏺', label: 'Gốm', inline: true, w: 124 }
        },
        links: [
            { from: 'guide', to: 'pic', label: 'kể màu sắc', cls: 'good' },
            { from: 'guide', to: 'sta', label: 'kể chất liệu', cls: 'good' },
            { from: 'guide', to: 'pot', label: 'kể niên đại', cls: 'good' },
            { from: 'audit', to: 'pic', label: 'đếm', dash: true },
            { from: 'audit', to: 'sta', label: 'đo', dash: true },
            { from: 'audit', to: 'pot', label: 'định giá', dash: true }
        ]
    },

    'interpreter': {
        caption: 'Câu "(x + 3) × 2" được dựng thành cây; mỗi nút tự tính phần của mình rồi trả kết quả lên nút cha.',
        nodes: {
            ctx: { x: 88, y: 38, icon: '📋', label: 'Biết: x = 5', inline: true, w: 150, cls: 'muted' },
            root: { x: 318, y: 38, icon: '✖️', label: 'nhân → 16', inline: true, w: 150, cls: 'accent' },
            add: { x: 200, y: 132, icon: '➕', label: 'cộng → 8', inline: true, w: 140, cls: 'accent' },
            two: { x: 440, y: 132, icon: '2️⃣', label: 'số 2 → 2', inline: true, w: 140, cls: 'good' },
            x: { x: 110, y: 222, icon: '🔤', label: 'x → 5', inline: true, w: 130, cls: 'good' },
            three: { x: 290, y: 222, icon: '3️⃣', label: 'số 3 → 3', inline: true, w: 140, cls: 'good' }
        },
        links: [
            { from: 'root', to: 'add' }, { from: 'root', to: 'two' },
            { from: 'add', to: 'x' }, { from: 'add', to: 'three' },
            { from: 'ctx', to: 'x', dash: true, curve: 40 }
        ],
        over: `<text class="sc-formula" x="522" y="228">(x + 3) × 2</text>`
    }
};

function renderPatternScene(id, title) {
    const spec = patternScenes[id];
    return spec ? Scene.render(spec, title) : '';
}
