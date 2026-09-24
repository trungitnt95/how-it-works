/* Visualizers: data structures */
(function () {
    'use strict';
    const Algo = window.Algo;
    const V = Algo.viz;
    const Rec = Algo.Rec;
    const U = Algo.util;

    /* ---------------- Dynamic array (amortized append) ---------------- */
    V.dynamicArray = {
        legend: [['done', 'Đang dùng'], ['dim', 'Còn trống'], ['cmp', 'Đang chép'], ['act', 'Vừa thêm']],
        inputs: [{ key: 'n', label: 'Số lần append', type: 'num', value: '9', min: 1, max: 16 }],
        code: [
            'def append(self, x):',
            '    if self.size == self.cap:',
            '        self._grow(2 * self.cap)   # cấp phát gấp đôi',
            '    self.data[self.size] = x',
            '    self.size += 1',
            '',
            'def _grow(self, new_cap):',
            '    new = [None] * new_cap',
            '    for i in range(self.size):     # chép O(n)',
            '        new[i] = self.data[i]',
            '    self.data, self.cap = new, new_cap'
        ],
        run({ n }) {
            const R = new Rec();
            let cap = 1, data = [null], copies = 0, size = 0;
            const arrP = (key, title, buf, st) => ({
                type: 'array', key, title,
                items: buf.map((v, i) => ({ id: key + i, t: v == null ? '' : v, s: (st && st[i]) || (v == null ? 'dim' : 'done') }))
            });
            const vars = () => ({ size, capacity: cap, 'tổng số lần chép': copies, 'chi phí TB/append': size ? ((copies + size) / size).toFixed(2) : '-' });
            R.push([arrP('d', `Mảng (capacity = ${cap})`, data)], 'Mảng động = mảng tĩnh + tự "đổi nhà" sang mảng lớn gấp đôi khi đầy.', -1, vars());
            for (let x = 1; x <= n; x++) {
                const val = x * 10;
                if (size === cap) {
                    const nw = new Array(cap * 2).fill(null);
                    R.push([arrP('d', `Mảng cũ (capacity = ${cap}) — đã đầy`, data), arrP('n', `Mảng mới (capacity = ${cap * 2})`, nw)], `Đầy! Cấp phát mảng mới gấp đôi: ${cap * 2} ô.`, 2, vars());
                    for (let i = 0; i < size; i++) {
                        nw[i] = data[i];
                        copies++;
                        R.push([arrP('d', `Mảng cũ (capacity = ${cap})`, data, { [i]: 'cmp' }), arrP('n', `Mảng mới (capacity = ${cap * 2})`, nw, { [i]: 'cmp' })], `Chép phần tử ${data[i]} sang mảng mới.`, 9, vars());
                    }
                    data = nw;
                    cap *= 2;
                }
                data[size] = val;
                size++;
                R.push([arrP('d', `Mảng (capacity = ${cap})`, data, { [size - 1]: 'act' })], `append(${val}) → đặt vào ô ${size - 1}. O(1) nếu còn chỗ.`, 3, vars());
            }
            R.push([arrP('d', `Mảng (capacity = ${cap})`, data)], `Tổng ${copies} lần chép cho ${n} lần append → trung bình vẫn O(1) mỗi lần (phân tích khấu hao): tổng chép ≤ 1 + 2 + 4 + … < 2n.`, -1, vars());
            return R.frames;
        }
    };

    /* ---------------- Linked list: basic operations ---------------- */
    V.linkedListOps = {
        legend: [['act', 'Nút mới / đang xử lý'], ['cmp', 'Đang duyệt'], ['rej', 'Bị xóa']],
        inputs: [],
        code: [
            '# Chèn đầu: O(1)',
            'node = Node(x); node.next = head; head = node',
            '# Duyệt tìm nút: O(n) — phải đi từ head',
            'cur = head',
            'while cur.val != target: cur = cur.next',
            '# Chèn sau nút cur: O(1) khi đã có cur',
            'node = Node(x); node.next = cur.next; cur.next = node',
            '# Xóa nút sau prev: O(1)',
            'prev.next = prev.next.next'
        ],
        run() {
            const R = new Rec();
            const val = { A: 10, B: 20, C: 30, N: 5, M: 25 };
            let order = ['A', 'B', 'C'];
            const next = { A: 'B', B: 'C', C: null };
            let head = 'A';
            const show = (st, ptrs, msg, line, arrowState) => R.push([{
                type: 'list', key: 'l', h: 170,
                nodes: order.map((id) => ({ id, t: val[id], s: st[id] || '' })),
                order, next: Object.assign({}, next), showNull: true, arrowState: arrowState || {},
                pointers: [{ id: head, label: 'head', tone: 'pivot' }].concat(ptrs || [])
            }], msg, line, {});
            show({}, [], 'Danh sách liên kết: mỗi nút giữ giá trị và con trỏ tới nút kế tiếp. Không cần ô nhớ liền nhau.', -1);
            order = ['N', 'A', 'B', 'C'];
            show({ N: 'act' }, [], 'Chèn 5 vào đầu: tạo nút mới.', 1);
            next.N = 'A';
            show({ N: 'act' }, [], 'node.next = head (trỏ vào 10).', 1, { N: 'act' });
            head = 'N';
            show({ N: 'act' }, [], 'head = node. Xong trong O(1) — không phải dời phần tử nào như mảng.', 1);
            let cur = head;
            show({ [cur]: 'cmp' }, [{ id: cur, label: 'cur', tone: 'cmp' }], 'Muốn chèn 25 sau 20: trước hết phải tìm nút 20 — đi từ head.', 3);
            while (val[cur] !== 20) {
                cur = next[cur];
                show({ [cur]: 'cmp' }, [{ id: cur, label: 'cur', tone: 'cmp' }], `cur = cur.next → ${val[cur]}`, 4);
            }
            order = ['N', 'A', 'B', 'M', 'C'];
            show({ B: 'cmp', M: 'act' }, [{ id: 'B', label: 'cur', tone: 'cmp' }], 'Tạo nút 25.', 6);
            next.M = next.B;
            show({ B: 'cmp', M: 'act' }, [{ id: 'B', label: 'cur', tone: 'cmp' }], 'node.next = cur.next (trỏ tới 30) — làm bước này TRƯỚC để không mất phần sau.', 6, { M: 'act' });
            next.B = 'M';
            show({ B: 'cmp', M: 'act' }, [{ id: 'B', label: 'cur', tone: 'cmp' }], 'cur.next = node. Đã chèn xong.', 6, { B: 'act' });
            show({ N: 'cmp', A: 'rej' }, [{ id: 'N', label: 'prev', tone: 'cmp' }], 'Xóa 10 (nằm sau prev = 5).', 7);
            next.N = 'B';
            show({ N: 'cmp', A: 'rej' }, [{ id: 'N', label: 'prev', tone: 'cmp' }], 'prev.next = prev.next.next — "nhảy qua" nút 10.', 8, { N: 'act' });
            order = ['N', 'B', 'M', 'C'];
            delete next.A;
            show({}, [], 'Nút 10 không còn ai trỏ tới → được thu hồi. Chèn/xóa O(1) khi đã có con trỏ, nhưng truy cập theo chỉ số tốn O(n).', 8);
            return R.frames;
        }
    };

    /* ---------------- Linked list: reverse ---------------- */
    V.linkedListReverse = {
        legend: [['act', 'curr'], ['pivot', 'prev'], ['cmp', 'nxt']],
        inputs: [{ key: 'arr', label: 'Các giá trị', type: 'nums', value: '1, 2, 3, 4, 5', maxLen: 8, minLen: 2, random: () => U.randArr(6, 1, 99) }],
        code: [
            'def reverse(head):',
            '    prev, curr = None, head',
            '    while curr:',
            '        nxt = curr.next     # giữ phần còn lại',
            '        curr.next = prev    # đảo mũi tên',
            '        prev = curr',
            '        curr = nxt',
            '    return prev             # head mới'
        ],
        run({ arr }) {
            const R = new Rec();
            const ids = arr.map((_, i) => 'r' + i);
            const next = {};
            ids.forEach((id, i) => { next[id] = i + 1 < ids.length ? ids[i + 1] : null; });
            let prev = null, curr = ids[0], nxt = null;
            const show = (msg, line, changed) => R.push([{
                type: 'list', key: 'l', h: 160,
                nodes: ids.map((id, i) => ({ id, t: arr[i], s: id === curr ? 'act' : id === prev ? 'pivot' : id === nxt ? 'cmp' : '' })),
                next: Object.assign({}, next), showNull: true, arrowState: changed ? { [changed]: 'act' } : {},
                pointers: [prev && { id: prev, label: 'prev', tone: 'pivot' }, curr && { id: curr, label: 'curr', tone: 'act' }, nxt && { id: nxt, label: 'nxt', tone: 'cmp' }].filter(Boolean)
            }], msg, line, { prev: prev ? arr[ids.indexOf(prev)] : 'None', curr: curr ? arr[ids.indexOf(curr)] : 'None' });
            show('Đảo chiều từng mũi tên một, dùng 3 con trỏ prev / curr / nxt.', 1);
            while (curr) {
                nxt = next[curr];
                show(`nxt = curr.next — giữ lại phần phía sau (${nxt ? arr[ids.indexOf(nxt)] : 'None'}) để khỏi bị mất.`, 3);
                next[curr] = prev;
                show(`curr.next = prev → mũi tên của ${arr[ids.indexOf(curr)]} quay ngược.`, 4, curr);
                prev = curr;
                curr = nxt;
                show('Tiến prev và curr lên một nút.', 6);
                nxt = null;
            }
            show(`curr = None → xong. head mới là ${arr[ids.indexOf(prev)]}. O(n) thời gian, O(1) bộ nhớ.`, 7);
            return R.frames;
        }
    };

    /* ---------------- Stack: balanced brackets ---------------- */
    V.stackParens = {
        legend: [['cmp', 'Ký tự đang xét'], ['done', 'Khớp'], ['swap', 'Không khớp']],
        inputs: [{ key: 's', label: 'Chuỗi ngoặc', type: 'text', value: '{[()()]}([])', maxLen: 16, pattern: '^[()\\[\\]{}]+$', hint: 'chỉ gồm ( ) [ ] { }', random: () => U.shuffle(['(', ')', '[', ']', '{', '}', '(', ')']).join('') }],
        code: [
            'def is_valid(s):',
            '    pairs = {")": "(", "]": "[", "}": "{"}',
            '    st = []',
            '    for c in s:',
            '        if c in "([{":',
            '            st.append(c)          # mở → đẩy vào',
            '        elif not st or st.pop() != pairs[c]:',
            '            return False          # đóng sai',
            '    return not st                 # còn dư ngoặc mở?'
        ],
        run({ s }) {
            const R = new Rec();
            const pairs = { ')': '(', ']': '[', '}': '{' };
            const st = [];
            const ch = s.split('');
            const done = {};
            const show = (i, msg, line, top) => R.push([
                { type: 'array', key: 's', title: 'Chuỗi', span: 4, items: ch.map((c, k) => ({ id: 's' + k, t: c, s: k === i ? (top === 'swap' ? 'swap' : 'cmp') : done[k] || '' })), pointers: i != null && i < ch.length ? [{ i, label: 'c' }] : [] },
                { type: 'array', key: 'st', title: 'Ngăn xếp', layout: 'stack', span: 2, cap: 5, cellW: 80, items: st.map((o) => ({ id: 'o' + o.k, t: o.c, s: top && o === st[st.length - 1] ? top : '' })), pointers: st.length ? [{ i: st.length - 1, label: 'đỉnh' }] : [] }
            ], msg, line, { 'độ cao ngăn xếp': st.length });
            show(null, 'Gặp ngoặc mở → đẩy vào ngăn xếp. Gặp ngoặc đóng → phải khớp với ngoặc mở ở đỉnh (vào sau, ra trước).', 2);
            for (let i = 0; i < ch.length; i++) {
                const c = ch[i];
                if ('([{'.includes(c)) {
                    st.push({ c, k: i });
                    show(i, `'${c}' là ngoặc mở → push.`, 5, 'act');
                } else {
                    if (!st.length) {
                        show(i, `'${c}' là ngoặc đóng nhưng ngăn xếp rỗng → <b>không hợp lệ</b>.`, 7, 'swap');
                        return R.frames;
                    }
                    const top = st[st.length - 1];
                    if (top.c !== pairs[c]) {
                        show(i, `'${c}' cần '${pairs[c]}' nhưng đỉnh là '${top.c}' → <b>không hợp lệ</b>.`, 7, 'swap');
                        return R.frames;
                    }
                    show(i, `'${c}' khớp với '${top.c}' ở đỉnh → pop.`, 6, 'done');
                    st.pop();
                    done[i] = 'done';
                    done[top.k] = 'done';
                }
            }
            if (st.length) show(null, `Hết chuỗi nhưng còn ${st.length} ngoặc mở chưa đóng → <b>không hợp lệ</b>.`, 8, 'swap');
            else show(null, 'Hết chuỗi và ngăn xếp rỗng → <b>hợp lệ</b>. O(n).', 8);
            return R.frames;
        }
    };

    /* ---------------- Circular queue ---------------- */
    V.circularQueue = {
        legend: [['done', 'Đang chứa'], ['act', 'Vừa vào'], ['swap', 'Vừa ra'], ['dim', 'Trống']],
        inputs: [{ key: 'ops', label: 'Thao tác (+x: enqueue, −: dequeue)', type: 'text', wide: true, value: '+5 +8 +3 - +7 +1 - +9 +4 +6 - -', maxLen: 60, pattern: '^[0-9+\\-\\s]+$', hint: 'dạng "+5 +8 - +3"' }],
        code: [
            'def enqueue(x):',
            '    if size == cap: raise Full',
            '    buf[tail] = x',
            '    tail = (tail + 1) % cap    # vòng về đầu mảng',
            '    size += 1',
            '',
            'def dequeue():',
            '    if size == 0: raise Empty',
            '    x = buf[head]',
            '    head = (head + 1) % cap',
            '    size -= 1',
            '    return x'
        ],
        run({ ops }) {
            const tokens = ops.trim().split(/\s+/);
            const cap = 6;
            const buf = new Array(cap).fill(null);
            let head = 0, tail = 0, size = 0;
            const R = new Rec();
            const show = (st, msg, line) => {
                const logical = [];
                for (let k = 0; k < size; k++) logical.push(buf[(head + k) % cap]);
                R.push([
                    { type: 'array', key: 'buf', title: `Mảng vòng (cap = ${cap})`, items: buf.map((v, i) => ({ id: 'q' + i, t: v == null ? '' : v, s: st[i] || (v == null ? 'dim' : 'done') })), pointers: [{ i: head, label: 'head', tone: 'pivot' }, { i: tail, label: 'tail', tone: 'act' }] },
                    { type: 'chips', key: 'q', title: 'Hàng đợi logic (FIFO)', front: 'ra ←', back: '← vào', items: logical }
                ], msg, line, { head, tail, size });
            };
            show({}, 'Hàng đợi vòng dùng mảng cố định; head/tail quay vòng bằng phép % nên không phải dời phần tử.', -1);
            tokens.forEach((tk) => {
                if (tk === '-' || tk === '−') {
                    if (!size) { show({}, 'dequeue khi hàng đợi rỗng → lỗi Empty.', 7); return; }
                    const x = buf[head], at = head;
                    buf[head] = null;
                    head = (head + 1) % cap;
                    size--;
                    show({ [at]: 'swap' }, `dequeue() → lấy ${x} ở head, head = ${head}`, 9);
                } else {
                    const x = Number(tk.replace('+', ''));
                    if (!Number.isFinite(x)) throw new Error(`thao tác "${tk}" không hợp lệ`);
                    if (size === cap) { show({}, `enqueue(${x}) khi đã đầy → lỗi Full.`, 1); return; }
                    const at = tail;
                    buf[tail] = x;
                    tail = (tail + 1) % cap;
                    size++;
                    show({ [at]: 'act' }, `enqueue(${x}) → đặt vào ô ${at}, tail = ${tail}${at === cap - 1 ? ' (vòng về 0)' : ''}`, 3);
                }
            });
            show({}, 'Mọi thao tác đều O(1).', -1);
            return R.frames;
        }
    };

    /* ---------------- Hash table with chaining ---------------- */
    V.hashChaining = {
        legend: [['act', 'Ô được băm tới'], ['new', 'Vừa thêm'], ['hit', 'Tìm thấy'], ['cmp', 'Đang so khóa']],
        inputs: [
            { key: 'keys', label: 'Các khóa', type: 'nums', value: '15, 22, 8, 36, 29, 1, 43, 50', min: 0, max: 999, maxLen: 12, random: () => U.randDistinct(8, 1, 99) },
            { key: 'm', label: 'Số ô m', type: 'num', value: '7', min: 3, max: 11 },
            { key: 'x', label: 'Tra cứu', type: 'num', value: '36', min: 0, max: 999 }
        ],
        code: [
            'def put(key):',
            '    i = hash(key) % m           # chọn ô',
            '    for k in table[i]:',
            '        if k == key: return     # đã có',
            '    table[i].append(key)        # nối vào chuỗi',
            '',
            'def get(key):',
            '    i = hash(key) % m',
            '    return key in table[i]      # chỉ duyệt 1 chuỗi ngắn'
        ],
        run({ keys, m, x }) {
            const R = new Rec();
            const table = Array.from({ length: m }, () => []);
            let n = 0;
            const show = (hi, itemState, msg, line) => R.push([{
                type: 'buckets', key: 'h', title: `Bảng băm: h(k) = k mod ${m}`,
                buckets: table.map((b, i) => ({ label: String(i), s: i === hi ? 'act' : '', items: b.map((k) => ({ t: k, s: itemState[k] || '' })) }))
            }], msg, line, { n, m, 'hệ số tải α = n/m': (n / m).toFixed(2) });
            show(-1, {}, `Bảng ${m} ô, mỗi ô là một danh sách (chaining) để chứa các khóa bị trùng ô.`, -1);
            keys.forEach((k) => {
                const i = k % m;
                if (table[i].includes(k)) {
                    show(i, { [k]: 'cmp' }, `${k} đã có trong ô ${i} → bỏ qua.`, 3);
                    return;
                }
                table[i].push(k);
                n++;
                show(i, { [k]: 'new' }, `put(${k}): ${k} mod ${m} = ${i}` + (table[i].length > 1 ? ` → <b>va chạm</b>, nối vào cuối chuỗi ô ${i}.` : ` → ô ${i}.`), 4);
            });
            const i = x % m;
            show(i, {}, `get(${x}): ${x} mod ${m} = ${i} → chỉ cần xem ô ${i}.`, 7);
            for (const k of table[i]) {
                if (k === x) {
                    show(i, { [k]: 'hit' }, `Tìm thấy ${x}. Trung bình O(1 + α) — nhanh khi α nhỏ và hàm băm phân bố đều.`, 8);
                    return R.frames;
                }
                show(i, { [k]: 'cmp' }, `${k} ≠ ${x}, xem phần tử tiếp theo trong chuỗi.`, 8);
            }
            show(i, {}, `Không có ${x} trong bảng.`, 8);
            return R.frames;
        }
    };

    /* ---------------- Matrix spiral traversal ---------------- */
    V.matrixSpiral = {
        legend: [['act', 'Ô đang đọc'], ['visit', 'Đã đọc'], ['mark', 'Biên hiện tại']],
        inputs: [
            { key: 'r', label: 'Số hàng', type: 'num', value: '4', min: 1, max: 6 },
            { key: 'c', label: 'Số cột', type: 'num', value: '5', min: 1, max: 7 }
        ],
        code: [
            'def spiral(M):',
            '    top, bot, left, right = 0, len(M) - 1, 0, len(M[0]) - 1',
            '    res = []',
            '    while top <= bot and left <= right:',
            '        for c in range(left, right + 1): res.append(M[top][c])',
            '        top += 1',
            '        for r in range(top, bot + 1): res.append(M[r][right])',
            '        right -= 1',
            '        if top <= bot:',
            '            for c in range(right, left - 1, -1): res.append(M[bot][c])',
            '            bot -= 1',
            '        if left <= right:',
            '            for r in range(bot, top - 1, -1): res.append(M[r][left])',
            '            left += 1',
            '    return res'
        ],
        run({ r, c }) {
            const R = new Rec();
            const M = Array.from({ length: r }, (_, i) => Array.from({ length: c }, (_, j) => i * c + j + 1));
            const seen = new Set();
            const res = [];
            let top = 0, bot = r - 1, left = 0, right = c - 1;
            const show = (cur, msg, line) => R.push([
                {
                    type: 'grid', key: 'g', rows: r, cols: c, cell: 48,
                    rowHead: Array.from({ length: r }, (_, i) => (i === top ? 'top' : i === bot ? 'bot' : String(i))),
                    colHead: Array.from({ length: c }, (_, j) => (j === left ? 'L' : j === right ? 'R' : String(j))),
                    cells: M.map((row, i) => row.map((v, j) => ({ t: v, s: cur && cur[0] === i && cur[1] === j ? 'act' : seen.has(i * c + j) ? 'visit' : (i >= top && i <= bot && j >= left && j <= right && (i === top || i === bot || j === left || j === right)) ? 'mark' : '' })))
                },
                { type: 'chips', key: 'res', title: 'Kết quả', items: res.slice() }
            ], msg, line, { top, bot, left, right });
            const take = (i, j, line, dir) => {
                seen.add(i * c + j);
                res.push(M[i][j]);
                show([i, j], `${dir}: đọc M[${i}][${j}] = ${M[i][j]}`, line);
            };
            show(null, 'Duyệt xoắn ốc bằng 4 biên top / bot / left / right, thu hẹp dần sau mỗi cạnh.', 1);
            while (top <= bot && left <= right) {
                for (let j = left; j <= right; j++) take(top, j, 4, 'Cạnh trên →');
                top++;
                for (let i = top; i <= bot; i++) take(i, right, 6, 'Cạnh phải ↓');
                right--;
                if (top <= bot) {
                    for (let j = right; j >= left; j--) take(bot, j, 9, 'Cạnh dưới ←');
                    bot--;
                }
                if (left <= right) {
                    for (let i = bot; i >= top; i--) take(i, left, 12, 'Cạnh trái ↑');
                    left++;
                }
            }
            show(null, `Đã đọc đủ ${r * c} ô, mỗi ô đúng 1 lần → O(r·c). Lưu ý: M[i][j] nằm ở ô nhớ thứ i·${c} + j (row-major).`, 14);
            return R.frames;
        }
    };

    /* ---------------- LRU cache ---------------- */
    V.lru = {
        legend: [['act', 'Vừa dùng (mới nhất)'], ['hit', 'Cache hit'], ['swap', 'Bị đuổi (cũ nhất)']],
        inputs: [
            { key: 'ops', label: 'Thao tác', type: 'text', wide: true, value: 'put 1, put 2, put 3, get 1, put 4, get 2, get 3, put 5, get 1', maxLen: 120, pattern: '^[a-zA-Z0-9,\\s]+$', hint: 'dạng "put 1, get 1"' },
            { key: 'cap', label: 'Sức chứa', type: 'num', value: '3', min: 1, max: 5 }
        ],
        code: [
            'def get(key):',
            '    if key not in map: return -1',
            '    node = map[key]',
            '    move_to_front(node)          # vừa dùng → mới nhất',
            '    return node.val',
            '',
            'def put(key, val):',
            '    if key in map: remove(map[key])',
            '    node = Node(key, val); add_front(node); map[key] = node',
            '    if len(map) > cap:',
            '        lru = tail.prev          # cũ nhất nằm cuối',
            '        remove(lru); del map[lru.key]'
        ],
        run({ ops, cap }) {
            const list = ops.split(',').map((t) => t.trim()).filter(Boolean).map((t) => {
                const m = t.match(/^(get|put)\s+(\d+)$/i);
                if (!m) throw new Error(`"${t}" không đúng dạng "put k" / "get k"`);
                return [m[1].toLowerCase(), Number(m[2])];
            });
            const R = new Rec();
            let order = [];
            let hits = 0, miss = 0;
            const show = (st, msg, line) => {
                const next = {}, prev = {};
                order.forEach((k, i) => { next['k' + k] = order[i + 1] != null ? 'k' + order[i + 1] : null; prev['k' + k] = i > 0 ? 'k' + order[i - 1] : null; });
                R.push([
                    { type: 'list', key: 'l', title: 'Danh sách liên kết đôi: mới nhất (trái) → cũ nhất (phải)', h: 150, nodes: order.map((k) => ({ id: 'k' + k, t: `${k}:${k * 10}`, s: st[k] || '' })), order: order.map((k) => 'k' + k), next, prev, pointers: order.length ? [{ id: 'k' + order[0], label: 'MRU', tone: 'done' }, { id: 'k' + order[order.length - 1], label: 'LRU', tone: 'swap' }] : [] },
                    { type: 'chips', key: 'm', title: 'Hash map: key → nút', items: order.slice().sort((a, b) => a - b).map((k) => `${k} → nút(${k})`) }
                ], msg, line, { cap, size: order.length, hit: hits, miss });
            };
            show({}, `LRU cache sức chứa ${cap}: hash map để tra O(1), danh sách liên kết đôi để biết thứ tự dùng và di chuyển nút O(1).`, -1);
            list.forEach(([op, k]) => {
                if (op === 'get') {
                    if (!order.includes(k)) {
                        miss++;
                        show({}, `get(${k}) → không có trong cache (miss) → -1.`, 1);
                        return;
                    }
                    hits++;
                    show({ [k]: 'hit' }, `get(${k}) → hit, giá trị ${k * 10}.`, 2);
                    order = [k].concat(order.filter((x) => x !== k));
                    show({ [k]: 'act' }, `Đưa ${k} lên đầu (vừa được dùng).`, 3);
                } else {
                    if (order.includes(k)) order = order.filter((x) => x !== k);
                    order = [k].concat(order);
                    show({ [k]: 'act' }, `put(${k}, ${k * 10}) → thêm vào đầu danh sách.`, 8);
                    if (order.length > cap) {
                        const old = order[order.length - 1];
                        show({ [old]: 'swap' }, `Vượt sức chứa ${cap} → đuổi phần tử ít được dùng gần đây nhất: ${old}.`, 10);
                        order = order.slice(0, -1);
                        show({}, `Đã xóa ${old} khỏi danh sách và hash map.`, 11);
                    }
                }
            });
            show({}, `Kết thúc: ${hits} hit, ${miss} miss. Mọi thao tác O(1).`, -1);
            return R.frames;
        }
    };

    /* ---------------- BST helpers ---------------- */
    function bstBuild(values) {
        const nodes = {};
        let root = null;
        values.forEach((v, i) => {
            const id = 't' + i;
            if (root == null) { root = id; nodes[id] = { v, left: null, right: null }; return; }
            let cur = root;
            for (;;) {
                if (v === nodes[cur].v) return;
                const dir = v < nodes[cur].v ? 'left' : 'right';
                if (nodes[cur][dir] == null) { nodes[cur][dir] = id; nodes[id] = { v, left: null, right: null }; return; }
                cur = nodes[cur][dir];
            }
        });
        return { nodes, root };
    }

    function treePanel(T, st, extra) {
        const nodes = {};
        Object.keys(T.nodes).forEach((id) => {
            const n = T.nodes[id];
            nodes[id] = { label: n.v, left: n.left, right: n.right, s: (st && st[id]) || '', sub: extra && extra.sub ? extra.sub(id) : '' };
        });
        return Object.assign({ type: 'tree', key: 'tree', binary: true, root: T.root, nodes }, extra && extra.panel);
    }

    /* ---------------- Tree traversals ---------------- */
    V.treeTraversal = {
        legend: [['act', 'Đang ở nút (lời gọi hiện tại)'], ['done', 'Đã thăm (in ra)'], ['cmp', 'Trong hàng đợi']],
        inputs: [
            { key: 'order', label: 'Kiểu duyệt', type: 'select', value: 'in', options: [['pre', 'Tiền thứ tự (pre-order)'], ['in', 'Trung thứ tự (in-order)'], ['post', 'Hậu thứ tự (post-order)'], ['level', 'Theo tầng (level-order / BFS)']] },
            { key: 'arr', label: 'Giá trị (chèn vào BST để tạo cây)', type: 'nums', value: '50, 30, 70, 20, 40, 60, 80, 35', maxLen: 12, random: () => U.randDistinct(8, 1, 99) }
        ],
        code: [
            'def preorder(n):    # Gốc → Trái → Phải',
            '    if n: visit(n); preorder(n.left); preorder(n.right)',
            'def inorder(n):     # Trái → Gốc → Phải',
            '    if n: inorder(n.left); visit(n); inorder(n.right)',
            'def postorder(n):   # Trái → Phải → Gốc',
            '    if n: postorder(n.left); postorder(n.right); visit(n)',
            'def level_order(root):   # theo tầng, dùng hàng đợi',
            '    q = deque([root])',
            '    while q:',
            '        n = q.popleft(); visit(n)',
            '        q.extend(c for c in (n.left, n.right) if c)'
        ],
        run({ order, arr }) {
            const T = bstBuild(arr);
            const R = new Rec();
            const st = {};
            const out = [];
            const lineOf = { pre: 1, in: 3, post: 5 };
            const names = { pre: 'Tiền thứ tự: Gốc → Trái → Phải', in: 'Trung thứ tự: Trái → Gốc → Phải (BST → dãy tăng dần)', post: 'Hậu thứ tự: Trái → Phải → Gốc', level: 'Theo tầng: dùng hàng đợi (BFS)' };
            let queue = [];
            const show = (msg, line) => R.push([
                treePanel(T, st),
                order === 'level'
                    ? { type: 'chips', key: 'q', title: 'Hàng đợi', front: 'ra ←', back: '← vào', items: queue.map((id) => T.nodes[id].v) }
                    : null,
                { type: 'chips', key: 'out', title: 'Thứ tự thăm', items: out.slice() }
            ], msg, line, {});
            show(names[order], order === 'level' ? 7 : lineOf[order] - 1);
            if (order === 'level') {
                queue = [T.root];
                st[T.root] = 'cmp';
                show('Đưa gốc vào hàng đợi.', 7);
                while (queue.length) {
                    const id = queue.shift();
                    st[id] = 'act';
                    out.push(T.nodes[id].v);
                    show(`Lấy ${T.nodes[id].v} ra và thăm.`, 9);
                    ['left', 'right'].forEach((d) => {
                        const c = T.nodes[id][d];
                        if (c) { queue.push(c); st[c] = 'cmp'; }
                    });
                    st[id] = 'done';
                    show('Đưa các con (nếu có) vào cuối hàng đợi.', 10);
                }
            } else {
                const L = lineOf[order];
                const walk = (id) => {
                    if (!id) return;
                    const prevSt = st[id];
                    st[id] = 'act';
                    show(`Vào nút ${T.nodes[id].v}.`, L);
                    const visit = () => {
                        out.push(T.nodes[id].v);
                        st[id] = 'done';
                        show(`Thăm ${T.nodes[id].v}.`, L);
                        st[id] = 'done';
                    };
                    if (order === 'pre') visit();
                    walk(T.nodes[id].left);
                    if (order === 'in') { st[id] = 'act'; visit(); }
                    walk(T.nodes[id].right);
                    if (order === 'post') { st[id] = 'act'; show(`Quay lại ${T.nodes[id].v} sau khi xong hai con.`, L); visit(); }
                    if (st[id] !== 'done') st[id] = prevSt;
                };
                walk(T.root);
            }
            show(`Kết quả: ${out.join(' → ')}. Mỗi nút thăm đúng 1 lần → O(n).`, -1);
            return R.frames;
        }
    };

    /* ---------------- BST insert / search / delete ---------------- */
    V.bst = {
        legend: [['cmp', 'Đang so sánh'], ['new', 'Nút mới'], ['hit', 'Tìm thấy'], ['swap', 'Nút bị xóa / thay thế']],
        inputs: [
            { key: 'arr', label: 'Chèn lần lượt', type: 'nums', value: '50, 30, 70, 20, 40, 60, 80, 65', maxLen: 12, random: () => U.randDistinct(9, 1, 99) },
            { key: 'x', label: 'Tìm', type: 'num', value: '65', min: -999, max: 999 },
            { key: 'del', label: 'Xóa', type: 'num', value: '50', min: -999, max: 999 }
        ],
        code: [
            'def insert(node, x):',
            '    if not node: return Node(x)',
            '    if x < node.val: node.left = insert(node.left, x)',
            '    else:            node.right = insert(node.right, x)',
            '    return node',
            '',
            'def search(node, x):',
            '    while node and node.val != x:',
            '        node = node.left if x < node.val else node.right',
            '    return node',
            '',
            'def delete(node, x):',
            '    # lá / 1 con: nối con lên thay; 2 con: thay bằng min bên phải'
        ],
        run({ arr, x, del }) {
            const R = new Rec();
            const T = { nodes: {}, root: null };
            const show = (st, msg, line) => R.push([treePanel(T, st, { panel: { levelH: 60 } })], msg, line, { 'số nút': Object.keys(T.nodes).length });
            show({}, 'Cây nhị phân tìm kiếm: mọi nút bên trái nhỏ hơn, bên phải lớn hơn nút cha.', -1);
            arr.forEach((v, i) => {
                const id = 'b' + i;
                if (T.root == null) {
                    T.root = id;
                    T.nodes[id] = { v, left: null, right: null };
                    show({ [id]: 'new' }, `Chèn ${v}: cây rỗng → làm gốc.`, 1);
                    return;
                }
                let cur = T.root;
                for (;;) {
                    const n = T.nodes[cur];
                    if (v === n.v) { show({ [cur]: 'cmp' }, `${v} đã tồn tại → bỏ qua.`, 2); return; }
                    const dir = v < n.v ? 'left' : 'right';
                    show({ [cur]: 'cmp' }, `Chèn ${v}: ${v} ${v < n.v ? '<' : '>'} ${n.v} → sang ${dir === 'left' ? 'trái' : 'phải'}`, dir === 'left' ? 2 : 3);
                    if (n[dir] == null) {
                        n[dir] = id;
                        T.nodes[id] = { v, left: null, right: null };
                        show({ [id]: 'new' }, `Gặp chỗ trống → gắn ${v} làm con ${dir === 'left' ? 'trái' : 'phải'} của ${n.v}.`, 1);
                        return;
                    }
                    cur = n[dir];
                }
            });
            let cur = T.root, steps = 0;
            while (cur) {
                const n = T.nodes[cur];
                steps++;
                if (n.v === x) { show({ [cur]: 'hit' }, `Tìm ${x}: thấy sau ${steps} bước (≈ chiều cao cây).`, 9); break; }
                show({ [cur]: 'cmp' }, `Tìm ${x}: ${x} ${x < n.v ? '<' : '>'} ${n.v} → sang ${x < n.v ? 'trái' : 'phải'}`, 8);
                cur = x < n.v ? n.left : n.right;
                if (!cur) show({}, `Gặp null → ${x} không có trong cây.`, 9);
            }
            // delete
            let parent = null, node = T.root;
            while (node && T.nodes[node].v !== del) { parent = node; node = del < T.nodes[node].v ? T.nodes[node].left : T.nodes[node].right; }
            if (!node) { show({}, `Xóa ${del}: không có trong cây.`, 11); return R.frames; }
            const replaceChild = (par, oldId, newId) => {
                if (par == null) T.root = newId;
                else if (T.nodes[par].left === oldId) T.nodes[par].left = newId;
                else T.nodes[par].right = newId;
            };
            const N = T.nodes[node];
            show({ [node]: 'swap' }, `Xóa ${del}.`, 11);
            if (!N.left || !N.right) {
                const child = N.left || N.right;
                replaceChild(parent, node, child);
                delete T.nodes[node];
                show(child ? { [child]: 'new' } : {}, child ? `${del} chỉ có 1 con → nối con lên thế chỗ.` : `${del} là lá → gỡ bỏ trực tiếp.`, 12);
            } else {
                let sp = node, s = N.right;
                show({ [node]: 'swap', [s]: 'cmp' }, `${del} có 2 con → tìm nút kế tiếp: nhỏ nhất ở cây con phải.`, 12);
                while (T.nodes[s].left) { sp = s; s = T.nodes[s].left; show({ [node]: 'swap', [s]: 'cmp' }, 'Đi trái tiếp để tìm min.', 12); }
                show({ [node]: 'swap', [s]: 'hit' }, `Nút kế tiếp là ${T.nodes[s].v}: chép giá trị lên thay ${del}, rồi xóa nút ${T.nodes[s].v} cũ (nó có tối đa 1 con phải).`, 12);
                N.v = T.nodes[s].v;
                if (sp === node) T.nodes[sp].right = T.nodes[s].right;
                else T.nodes[sp].left = T.nodes[s].right;
                delete T.nodes[s];
                show({ [node]: 'new' }, `Xong. Cây vẫn giữ tính chất BST.`, 12);
            }
            show({}, 'Tìm / chèn / xóa đều O(h). Cây cân bằng: h ≈ log n; chèn dãy đã sắp xếp: h = n (suy biến thành danh sách).', -1);
            return R.frames;
        }
    };

    /* ---------------- Binary heap (min-heap) ---------------- */
    V.heapOps = {
        legend: [['new', 'Phần tử mới'], ['cmp', 'Đang so với cha/con'], ['swap', 'Hoán đổi'], ['hit', 'Phần tử lấy ra']],
        inputs: [
            { key: 'arr', label: 'Push lần lượt', type: 'nums', value: '40, 20, 50, 10, 30, 5, 25', maxLen: 12, random: () => U.randDistinct(8, 1, 99) },
            { key: 'k', label: 'Số lần pop', type: 'num', value: '2', min: 0, max: 5 }
        ],
        code: [
            'def push(h, x):',
            '    h.append(x); i = len(h) - 1',
            '    while i > 0 and h[(i - 1) // 2] > h[i]:    # vun lên',
            '        p = (i - 1) // 2',
            '        h[i], h[p] = h[p], h[i]; i = p',
            '',
            'def pop(h):',
            '    h[0], h[-1] = h[-1], h[0]; top = h.pop()',
            '    i = 0',
            '    while 2 * i + 1 < len(h):                  # vun xuống',
            '        c = 2 * i + 1',
            '        if c + 1 < len(h) and h[c + 1] < h[c]: c += 1',
            '        if h[i] <= h[c]: break',
            '        h[i], h[c] = h[c], h[i]; i = c',
            '    return top'
        ],
        run({ arr, k }) {
            const R = new Rec();
            const h = [];
            let nid = 0;
            const out = [];
            const show = (st, msg, line) => {
                const nodes = {};
                h.forEach((it, i) => {
                    nodes[it.id] = { label: it.v, left: 2 * i + 1 < h.length ? h[2 * i + 1].id : null, right: 2 * i + 2 < h.length ? h[2 * i + 2].id : null, s: st[i] || '' };
                });
                R.push([
                    { type: 'tree', key: 't', title: 'Min-heap (cây nhị phân hoàn chỉnh)', binary: true, root: h.length ? h[0].id : null, nodes, levelH: 58 },
                    { type: 'array', key: 'a', title: 'Lưu trong mảng: con của i là 2i+1, 2i+2', items: h.map((it, i) => ({ id: it.id, v: it.v, s: st[i] || '' })) },
                    { type: 'chips', key: 'out', title: 'Đã pop (luôn là nhỏ nhất)', items: out.slice() }
                ], msg, line, { 'kích thước': h.length });
            };
            show({}, 'Min-heap: mỗi nút ≤ các con → phần tử nhỏ nhất luôn ở gốc.', -1);
            arr.forEach((v) => {
                h.push({ id: 'h' + nid++, v });
                let i = h.length - 1;
                show({ [i]: 'new' }, `push(${v}): thêm vào cuối mảng (vị trí lá tiếp theo).`, 1);
                while (i > 0) {
                    const p = (i - 1) >> 1;
                    show({ [i]: 'new', [p]: 'cmp' }, `So với cha: ${h[p].v} ${h[p].v > h[i].v ? '>' : '≤'} ${h[i].v}`, 2);
                    if (h[p].v <= h[i].v) break;
                    [h[i], h[p]] = [h[p], h[i]];
                    show({ [p]: 'swap', [i]: 'swap' }, 'Cha lớn hơn → hoán đổi, đi lên.', 4);
                    i = p;
                }
            });
            for (let t = 0; t < k && h.length; t++) {
                show({ 0: 'hit', [h.length - 1]: 'cmp' }, `pop(): lấy gốc ${h[0].v} — nhỏ nhất. Đổi chỗ với lá cuối.`, 7);
                [h[0], h[h.length - 1]] = [h[h.length - 1], h[0]];
                const top = h.pop();
                out.push(top.v);
                show({ 0: 'swap' }, `Đã lấy ${top.v} ra. Lá cuối lên gốc → có thể vi phạm tính chất heap.`, 7);
                let i = 0;
                while (2 * i + 1 < h.length) {
                    let c = 2 * i + 1;
                    if (c + 1 < h.length && h[c + 1].v < h[c].v) c++;
                    show({ [i]: 'cmp', [c]: 'cmp' }, `So ${h[i].v} với con nhỏ hơn ${h[c].v}`, 11);
                    if (h[i].v <= h[c].v) break;
                    [h[i], h[c]] = [h[c], h[i]];
                    show({ [i]: 'swap', [c]: 'swap' }, 'Con nhỏ hơn → hoán đổi, đi xuống.', 13);
                    i = c;
                }
                show({}, 'Heap đã hợp lệ trở lại.', 14);
            }
            show({}, 'push / pop đều O(log n) (chiều cao cây), xem min O(1).', -1);
            return R.frames;
        }
    };

    /* ---------------- AVL tree ---------------- */
    V.avl = {
        legend: [['new', 'Nút mới'], ['cmp', 'Đường đi'], ['swap', 'Mất cân bằng'], ['act', 'Sau khi xoay']],
        inputs: [{ key: 'arr', label: 'Chèn lần lượt', type: 'nums', value: '10, 20, 30, 40, 50, 25', maxLen: 12, random: () => U.randDistinct(8, 1, 99) }],
        code: [
            'def insert(node, x):',
            '    if not node: return Node(x)',
            '    if x < node.val: node.left = insert(node.left, x)',
            '    else:            node.right = insert(node.right, x)',
            '    update_height(node)',
            '    b = height(node.left) - height(node.right)',
            '    if b > 1 and x < node.left.val:  return rotate_right(node)   # LL',
            '    if b < -1 and x > node.right.val: return rotate_left(node)   # RR',
            '    if b > 1:  node.left = rotate_left(node.left); return rotate_right(node)    # LR',
            '    if b < -1: node.right = rotate_right(node.right); return rotate_left(node)  # RL',
            '    return node'
        ],
        run({ arr }) {
            const R = new Rec();
            const N = {};
            let root = null, nid = 0;
            const ht = (id) => (id ? N[id].h : 0);
            const upd = (id) => { N[id].h = 1 + Math.max(ht(N[id].left), ht(N[id].right)); };
            const bal = (id) => ht(N[id].left) - ht(N[id].right);
            const show = (st, msg, line) => {
                const nodes = {};
                const walk = (id) => {
                    if (!id) return;
                    nodes[id] = { label: N[id].v, left: N[id].left, right: N[id].right, s: st[id] || '', sub: 'b=' + bal(id) };
                    walk(N[id].left);
                    walk(N[id].right);
                };
                walk(root);
                R.push([{ type: 'tree', key: 't', title: 'Cây AVL (b = cao trái − cao phải)', binary: true, root, nodes, levelH: 60 }], msg, line, { 'chiều cao': ht(root), 'số nút': Object.keys(nodes).length });
            };
            const rotR = (y) => { const x = N[y].left; N[y].left = N[x].right; N[x].right = y; upd(y); upd(x); return x; };
            const rotL = (x) => { const y = N[x].right; N[x].right = N[y].left; N[y].left = x; upd(x); upd(y); return y; };
            show({}, 'AVL tự cân bằng: sau mỗi lần chèn, nếu |cao trái − cao phải| > 1 ở nút nào thì xoay để sửa.', -1);
            arr.forEach((v) => {
                if (root == null) {
                    root = 'a' + nid++;
                    N[root] = { v, left: null, right: null, h: 1 };
                    show({ [root]: 'new' }, `Chèn ${v} làm gốc.`, 1);
                    return;
                }
                // walk down first so the search path can be highlighted
                let cur = root;
                const st = {};
                while (cur) {
                    st[cur] = 'cmp';
                    if (v === N[cur].v) break;
                    cur = v < N[cur].v ? N[cur].left : N[cur].right;
                }
                if (cur) { show({ [cur]: 'cmp' }, `${v} đã có → bỏ qua.`, 2); return; }
                // plain BST insert, updating heights on the way back up
                const before = nid;
                const rebuild = (id) => {
                    if (!id) {
                        const nn = 'a' + nid++;
                        N[nn] = { v, left: null, right: null, h: 1 };
                        return nn;
                    }
                    const dir = v < N[id].v ? 'left' : 'right';
                    N[id][dir] = rebuild(N[id][dir]);
                    upd(id);
                    return id;
                };
                root = rebuild(root);
                const newId = 'a' + before;
                show(Object.assign({}, st, { [newId]: 'new' }), `Chèn ${v} như BST thường, rồi cập nhật chiều cao trên đường đi ngược lên.`, 1);
                // now look for the lowest unbalanced ancestor on the path and fix it
                const pathIds = Object.keys(st).filter((id) => N[id]);
                const depth = (id) => { let d = 0, c = root; while (c && c !== id) { c = N[id].v < N[c].v ? N[c].left : N[c].right; d++; } return d; };
                pathIds.sort((p, q) => depth(q) - depth(p));
                for (const id of pathIds) {
                    const b = bal(id);
                    if (b > 1 || b < -1) {
                        // find parent of id
                        let par = null, c = root;
                        while (c && c !== id) { par = c; c = N[id].v < N[c].v ? N[c].left : N[c].right; }
                        const kind = b > 1 ? (v < N[N[id].left].v ? 'LL' : 'LR') : (v > N[N[id].right].v ? 'RR' : 'RL');
                        const line = { LL: 6, RR: 7, LR: 8, RL: 9 }[kind];
                        show({ [id]: 'swap' }, `Nút ${N[id].v} mất cân bằng (b = ${b}) → trường hợp <b>${kind}</b>: ${{ LL: 'xoay phải tại nút này', RR: 'xoay trái tại nút này', LR: 'xoay trái ở con trái, rồi xoay phải', RL: 'xoay phải ở con phải, rồi xoay trái' }[kind]}.`, line);
                        let top;
                        if (kind === 'LR') {
                            N[id].left = rotL(N[id].left);
                            show({ [id]: 'swap', [N[id].left]: 'act' }, 'Bước 1: xoay trái ở con trái → đưa về dạng LL.', 8);
                        } else if (kind === 'RL') {
                            N[id].right = rotR(N[id].right);
                            show({ [id]: 'swap', [N[id].right]: 'act' }, 'Bước 1: xoay phải ở con phải → đưa về dạng RR.', 9);
                        }
                        top = (kind === 'LL' || kind === 'LR') ? rotR(id) : rotL(id);
                        if (par == null) root = top;
                        else if (N[par].left === id) N[par].left = top;
                        else N[par].right = top;
                        // refresh heights of ancestors
                        const fix = (x) => { if (!x) return 0; fix(N[x].left); fix(N[x].right); upd(x); return N[x].h; };
                        fix(root);
                        show({ [top]: 'act' }, `Đã xoay: ${N[top].v} lên làm gốc của cây con. Cây cân bằng trở lại.`, line);
                        break;
                    }
                }
            });
            show({}, `Chiều cao luôn O(log n) → tìm/chèn/xóa đảm bảo O(log n). So sánh: BST thường với dãy tăng dần sẽ có chiều cao ${arr.length}.`, -1);
            return R.frames;
        }
    };

    /* ---------------- Trie ---------------- */
    V.trie = {
        legend: [['new', 'Nút mới tạo'], ['cmp', 'Đường đi'], ['mark', 'Kết thúc một từ'], ['hit', 'Khớp tiền tố']],
        inputs: [
            { key: 'words', label: 'Các từ', type: 'text', wide: true, value: 'cat, car, cart, care, dog, do', maxLen: 60, pattern: '^[a-zA-Z,\\s]+$', hint: 'chỉ chữ cái, cách nhau bằng dấu phẩy' },
            { key: 'q', label: 'Tìm tiền tố', type: 'text', value: 'car', maxLen: 8, pattern: '^[a-zA-Z]+$', hint: 'chỉ chữ cái' }
        ],
        code: [
            'def insert(word):',
            '    node = root',
            '    for ch in word:',
            '        if ch not in node.children:',
            '            node.children[ch] = TrieNode()',
            '        node = node.children[ch]',
            '    node.is_end = True',
            '',
            'def starts_with(prefix):',
            '    node = root',
            '    for ch in prefix:',
            '        if ch not in node.children: return False',
            '        node = node.children[ch]',
            '    return True'
        ],
        run({ words, q }) {
            const list = words.toLowerCase().split(',').map((w) => w.trim()).filter(Boolean);
            if (list.length > 8) throw new Error('tối đa 8 từ');
            q = q.toLowerCase();
            const R = new Rec();
            const N = { root: { label: '•', children: [], end: false, kids: {} } };
            let nid = 0;
            const show = (st, msg, line, extra) => {
                const nodes = {};
                Object.keys(N).forEach((id) => {
                    nodes[id] = { label: N[id].label, children: N[id].children.slice().sort((a, b) => (N[a].label < N[b].label ? -1 : 1)), s: st[id] || (N[id].end ? 'mark' : '') };
                });
                R.push([{ type: 'tree', key: 't', title: 'Trie (cây tiền tố)', nodes, root: 'root', r: 15, levelH: 50, gap: 44 }].concat(extra || []), msg, line, {});
            };
            show({}, 'Mỗi cạnh là một ký tự; các từ có chung tiền tố dùng chung đường đi.', -1);
            list.forEach((w) => {
                let node = 'root';
                const path = {};
                for (const ch of w) {
                    let nxt = N[node].kids[ch];
                    if (!nxt) {
                        nxt = 'n' + nid++;
                        N[nxt] = { label: ch, children: [], end: false, kids: {} };
                        N[node].kids[ch] = nxt;
                        N[node].children.push(nxt);
                        path[nxt] = 'new';
                        show(Object.assign({}, path), `"${w}": chưa có '${ch}' → tạo nút mới.`, 4);
                    } else {
                        path[nxt] = 'cmp';
                        show(Object.assign({}, path), `"${w}": đã có '${ch}' → đi tiếp (dùng chung tiền tố).`, 5);
                    }
                    node = nxt;
                }
                N[node].end = true;
                show({}, `Đánh dấu kết thúc từ "${w}".`, 6);
            });
            let node = 'root';
            const path = { root: 'hit' };
            for (const ch of q) {
                const nxt = N[node].kids[ch];
                if (!nxt) {
                    show(path, `Tiền tố "${q}": không có '${ch}' → không từ nào bắt đầu bằng "${q}".`, 11);
                    return R.frames;
                }
                path[nxt] = 'hit';
                node = nxt;
                show(Object.assign({}, path), `Tiền tố "${q}": khớp '${ch}'.`, 12);
            }
            const found = [];
            const collect = (id, pre) => {
                if (N[id].end) found.push(pre);
                N[id].children.forEach((c) => collect(c, pre + N[c].label));
            };
            collect(node, q);
            show(path, `Có ${found.length} từ bắt đầu bằng "${q}". Thời gian O(độ dài tiền tố), không phụ thuộc số từ.`, 13, [{ type: 'chips', key: 'f', title: 'Các từ tìm được (gợi ý tự động hoàn thành)', items: found }]);
            return R.frames;
        }
    };

    /* ---------------- Segment tree (sum) ---------------- */
    V.segTree = {
        legend: [['act', 'Đang xây'], ['done', 'Nằm trọn trong truy vấn (lấy luôn)'], ['cmp', 'Giao một phần (chia tiếp)'], ['dim', 'Nằm ngoài (bỏ qua)']],
        inputs: [
            { key: 'arr', label: 'Mảng', type: 'nums', value: '5, 3, 7, 9, 6, 4, 1, 2', maxLen: 8, minLen: 2, min: -99, max: 99, random: () => U.randArr(8, 1, 9) },
            { key: 'ql', label: 'Truy vấn tổng từ', type: 'num', value: '1', min: 0, max: 7 },
            { key: 'qr', label: 'đến', type: 'num', value: '5', min: 0, max: 7 }
        ],
        code: [
            'def build(node, l, r):',
            '    if l == r: tree[node] = a[l]; return',
            '    m = (l + r) // 2',
            '    build(2*node, l, m); build(2*node + 1, m + 1, r)',
            '    tree[node] = tree[2*node] + tree[2*node + 1]',
            '',
            'def query(node, l, r, ql, qr):',
            '    if qr < l or r < ql: return 0              # nằm ngoài',
            '    if ql <= l and r <= qr: return tree[node]  # nằm trọn',
            '    m = (l + r) // 2                           # giao một phần',
            '    return (query(2*node, l, m, ql, qr) +',
            '            query(2*node + 1, m + 1, r, ql, qr))'
        ],
        run({ arr, ql, qr }) {
            const n = arr.length;
            if (ql > qr || qr >= n) throw new Error(`cần 0 ≤ l ≤ r < ${n}`);
            const R = new Rec();
            const T = {};
            const range = {};
            const st = {};
            const show = (msg, line, aSt, vars) => {
                const nodes = {};
                Object.keys(T).forEach((k) => {
                    const [l, r] = range[k];
                    nodes['s' + k] = { label: T[k] == null ? '?' : T[k], sub: l === r ? `[${l}]` : `[${l}-${r}]`, s: st[k] || '', children: l === r ? [] : ['s' + 2 * k, 's' + (2 * k + 1)].filter((c) => T[c.slice(1)] !== undefined) };
                });
                R.push([
                    { type: 'tree', key: 't', title: 'Segment tree: mỗi nút = tổng một đoạn', nodes, root: 's1', r: 17, levelH: 56, gap: 70 },
                    { type: 'array', key: 'a', title: 'Mảng a', items: arr.map((v, i) => ({ id: 'a' + i, v, s: aSt ? aSt[i] || '' : '' })) }
                ], msg, line, vars || {});
            };
            const build = (k, l, r) => {
                T[k] = null;
                range[k] = [l, r];
                if (l === r) {
                    T[k] = arr[l];
                    st[k] = 'act';
                    show(`Lá [${l}] = a[${l}] = ${arr[l]}`, 1, { [l]: 'act' });
                    st[k] = '';
                    return;
                }
                const m = (l + r) >> 1;
                build(2 * k, l, m);
                build(2 * k + 1, m + 1, r);
                T[k] = T[2 * k] + T[2 * k + 1];
                st[k] = 'act';
                show(`Nút [${l}-${r}] = ${T[2 * k]} + ${T[2 * k + 1]} = ${T[k]}`, 4);
                st[k] = '';
            };
            build(1, 0, n - 1);
            show('Đã xây xong: O(n) nút, chiều cao O(log n).', 4);
            const aq = {};
            for (let i = ql; i <= qr; i++) aq[i] = 'mark';
            let total = 0;
            const query = (k, l, r) => {
                if (qr < l || r < ql) {
                    st[k] = 'dim';
                    show(`[${l}-${r}] nằm ngoài [${ql}-${qr}] → 0`, 7, aq, { 'tổng': total });
                    return 0;
                }
                if (ql <= l && r <= qr) {
                    st[k] = 'done';
                    total += T[k];
                    show(`[${l}-${r}] nằm trọn trong [${ql}-${qr}] → lấy luôn ${T[k]}`, 8, aq, { 'tổng': total });
                    return T[k];
                }
                st[k] = 'cmp';
                show(`[${l}-${r}] giao một phần → chia xuống hai con`, 9, aq, { 'tổng': total });
                const m = (l + r) >> 1;
                return query(2 * k, l, m) + query(2 * k + 1, m + 1, r);
            };
            const ans = query(1, 0, n - 1);
            show(`Tổng a[${ql}..${qr}] = <b>${ans}</b>. Chỉ ghé O(log n) nút. Cập nhật 1 phần tử cũng chỉ sửa O(log n) nút trên đường lên gốc.`, 10, aq, { 'tổng': ans });
            return R.frames;
        }
    };

    /* ---------------- Fenwick tree (BIT) ---------------- */
    V.fenwick = {
        legend: [['act', 'Ô T[i] đang cập nhật / cộng'], ['mark', 'Đoạn mà T[i] quản lý']],
        inputs: [
            { key: 'arr', label: 'Mảng a[1..n]', type: 'nums', value: '3, 2, -1, 6, 5, 4, -3, 3', maxLen: 12, min: -99, max: 99, random: () => U.randArr(8, -5, 9) },
            { key: 'q', label: 'Tổng tiền tố đến i', type: 'num', value: '7', min: 1, max: 12 }
        ],
        code: [
            'def update(i, delta):     # a[i] += delta',
            '    while i <= n:',
            '        T[i] += delta',
            '        i += i & -i           # lên nút "cha"',
            '',
            'def prefix_sum(i):        # a[1] + ... + a[i]',
            '    s = 0',
            '    while i > 0:',
            '        s += T[i]',
            '        i -= i & -i           # bỏ bit 1 thấp nhất',
            '    return s'
        ],
        run({ arr, q }) {
            const n = arr.length;
            if (q > n) throw new Error(`i phải ≤ ${n}`);
            const R = new Rec();
            const T = new Array(n + 1).fill(0);
            const bin = (x) => x.toString(2);
            const show = (st, ranges, msg, line, vars) => R.push([
                { type: 'array', key: 'a', title: 'a (đánh số từ 1)', items: arr.map((v, i) => ({ id: 'a' + i, v, s: '' })), indexLabels: arr.map((_, i) => String(i + 1)), ranges: ranges.map((r) => ({ a: r[0] - 1, b: r[1] - 1, label: r[2], tone: 'mark', key: r[3] })) },
                { type: 'array', key: 'T', title: 'T — mỗi T[i] giữ tổng của (i − lowbit(i), i]', items: T.slice(1).map((v, i) => ({ id: 'T' + i, v, s: st[i + 1] || '' })), indexLabels: T.slice(1).map((_, i) => `${i + 1}=${bin(i + 1)}`) }
            ], msg, line, vars || {});
            show({}, [], 'Fenwick tree dùng biểu diễn nhị phân của chỉ số: T[i] quản lý một đoạn dài bằng bit 1 thấp nhất của i.', -1);
            arr.forEach((v, idx) => {
                let i = idx + 1;
                const path = [];
                while (i <= n) {
                    T[i] += v;
                    path.push(i);
                    const low = i & -i;
                    show({ [i]: 'act' }, [[i - low + 1, i, `T[${i}]`, 'r']], `update(${idx + 1}, ${v}): T[${i}] += ${v} → ${T[i]}; i += ${low} (lowbit)`, 3, { i, 'i (nhị phân)': bin(i) });
                    i += low;
                }
            });
            show({}, [], 'Đã nạp xong mảng (mỗi update O(log n)).', -1);
            let i = q, s = 0;
            const used = [];
            while (i > 0) {
                s += T[i];
                const low = i & -i;
                used.push([i - low + 1, i, `T[${i}]`, 'q' + i]);
                const st = {};
                used.forEach((u) => { st[u[1]] = 'act'; });
                show(st, used, `prefix_sum(${q}): cộng T[${i}] = ${T[i]} (đoạn ${i - low + 1}..${i}); i −= ${low}`, 8, { i, 'i (nhị phân)': bin(i), s });
                i -= low;
            }
            show({}, used, `a[1] + … + a[${q}] = <b>${s}</b> chỉ với ${used.length} bước (= số bit 1 của ${q} = ${bin(q)}).`, 10, { s });
            return R.frames;
        }
    };

    /* ---------------- Disjoint Set Union ---------------- */
    V.dsu = {
        legend: [['cmp', 'Đang find'], ['act', 'Gốc (đại diện)'], ['new', 'Vừa nối / nén']],
        inputs: [{ key: 'ops', label: 'Các phép union "a-b"', type: 'text', wide: true, value: '0-1, 2-3, 0-2, 4-5, 6-7, 4-6, 0-4, 7-3', maxLen: 80, pattern: '^[0-9\\-,\\s]+$', hint: 'dạng 0-1, 2-3 (số 0…9)' }],
        code: [
            'def find(x):',
            '    if parent[x] != x:',
            '        parent[x] = find(parent[x])   # nén đường đi',
            '    return parent[x]',
            '',
            'def union(a, b):',
            '    ra, rb = find(a), find(b)',
            '    if ra == rb: return False         # đã cùng nhóm',
            '    if rank[ra] < rank[rb]: ra, rb = rb, ra',
            '    parent[rb] = ra                   # gắn cây thấp vào cây cao',
            '    if rank[ra] == rank[rb]: rank[ra] += 1',
            '    return True'
        ],
        run({ ops }) {
            const pairs = ops.split(',').map((t) => t.trim()).filter(Boolean).map((t) => {
                const m = t.match(/^(\d)\s*-\s*(\d)$/);
                if (!m) throw new Error(`"${t}" không đúng dạng a-b (0…9)`);
                return [Number(m[1]), Number(m[2])];
            });
            const n = Math.max(8, ...pairs.map(([a, b]) => Math.max(a, b) + 1));
            const parent = Array.from({ length: n }, (_, i) => i);
            const rank = new Array(n).fill(0);
            const R = new Rec();
            const show = (st, msg, line) => {
                const nodes = {};
                for (let i = 0; i < n; i++) nodes['d' + i] = { label: i, children: [], s: st[i] || (parent[i] === i ? 'act' : ''), sub: parent[i] === i ? 'r' + rank[i] : '' };
                for (let i = 0; i < n; i++) if (parent[i] !== i) nodes['d' + parent[i]].children.push('d' + i);
                const roots = [];
                for (let i = 0; i < n; i++) if (parent[i] === i) roots.push('d' + i);
                R.push([
                    { type: 'tree', key: 't', title: 'Rừng: mỗi cây là một nhóm, gốc là đại diện (r = rank)', nodes, roots, r: 16, levelH: 54, gap: 50 },
                    { type: 'array', key: 'p', title: 'parent[i]', items: parent.map((v, i) => ({ id: 'p' + i, v, s: st[i] || '' })) }
                ], msg, line, { 'số nhóm': roots.length });
            };
            const find = (x, st) => {
                const path = [];
                let r = x;
                while (parent[r] !== r) { path.push(r); st[r] = 'cmp'; r = parent[r]; }
                st[r] = 'cmp';
                show(st, `find(${x}): đi lên theo parent tới gốc ${r}` + (path.length > 1 ? ` (qua ${path.length} bước)` : ''), 1);
                let changed = false;
                path.forEach((v) => { if (parent[v] !== r) { parent[v] = r; st[v] = 'new'; changed = true; } });
                if (changed) show(st, `Nén đường đi: mọi nút trên đường nối thẳng vào gốc ${r} → lần sau find chỉ 1 bước.`, 2);
                return r;
            };
            show({}, `${n} phần tử, ban đầu mỗi phần tử là một nhóm riêng.`, -1);
            pairs.forEach(([a, b]) => {
                const st = {};
                let ra = find(a, st), rb = find(b, st);
                if (ra === rb) {
                    show({ [ra]: 'cmp' }, `union(${a}, ${b}): cùng gốc ${ra} → đã cùng nhóm, không làm gì.`, 7);
                    return;
                }
                if (rank[ra] < rank[rb]) [ra, rb] = [rb, ra];
                parent[rb] = ra;
                if (rank[ra] === rank[rb]) rank[ra]++;
                show({ [rb]: 'new' }, `union(${a}, ${b}): gắn gốc ${rb} vào gốc ${ra} (rank ${rank[ra]}).`, 9);
            });
            show({}, 'Với union theo rank + nén đường đi, mỗi thao tác gần như O(1) (α(n) ≤ 4 với mọi n thực tế).', -1);
            return R.frames;
        }
    };
})();
