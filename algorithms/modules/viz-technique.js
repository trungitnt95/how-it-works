/* Visualizers: programming techniques */
(function () {
    'use strict';
    const Algo = window.Algo;
    const V = Algo.viz;
    const Rec = Algo.Rec;
    const U = Algo.util;

    const cells = (key, arr, st, extra) => Object.assign({
        type: 'array', key,
        items: arr.map((v, i) => ({ id: key + i, v, s: st ? st[i] || '' : '' }))
    }, extra || {});

    /* ---------------- Two pointers ---------------- */
    V.twoPointers = {
        legend: [['act', 'Con trỏ trái'], ['pivot', 'Con trỏ phải'], ['hit', 'Cặp cần tìm'], ['dim', 'Đã loại']],
        inputs: [
            { key: 'arr', label: 'Mảng (sẽ tự sắp xếp)', type: 'nums', value: '1, 3, 4, 6, 8, 11, 14, 17', maxLen: 14, random: () => U.randDistinct(9, 1, 30).sort((p, q) => p - q) },
            { key: 'target', label: 'Tổng cần tìm', type: 'num', value: '20', min: -999, max: 999 }
        ],
        code: [
            'def two_sum_sorted(a, target):',
            '    l, r = 0, len(a) - 1',
            '    while l < r:',
            '        s = a[l] + a[r]',
            '        if s == target:',
            '            return l, r',
            '        elif s < target:',
            '            l += 1      # cần tổng lớn hơn',
            '        else:',
            '            r -= 1      # cần tổng nhỏ hơn',
            '    return None'
        ],
        run({ arr, target }) {
            const a = arr.slice().sort((p, q) => p - q);
            const R = new Rec();
            let l = 0, r = a.length - 1, steps = 0;
            const P = (hit) => {
                const st = {};
                a.forEach((_, i) => { st[i] = i < l || i > r ? 'dim' : ''; });
                st[l] = hit ? 'hit' : 'act';
                st[r] = hit ? 'hit' : 'pivot';
                return [cells('a', a, st, { pointers: [{ i: l, label: 'l', tone: 'act' }, { i: r, label: 'r', tone: 'pivot' }] })];
            };
            R.push(P(false), `Mảng đã sắp xếp. Đặt l ở đầu, r ở cuối và tìm hai số có tổng = ${target}.`, 1, { target, l, r });
            while (l < r) {
                const s = a[l] + a[r];
                steps++;
                R.push(P(false), `a[l] + a[r] = ${a[l]} + ${a[r]} = ${s}`, 3, { target, l, r, s, 'bước': steps });
                if (s === target) {
                    R.push(P(true), `Tìm thấy: ${a[l]} + ${a[r]} = ${target} sau ${steps} bước — O(n) thay vì thử mọi cặp O(n²).`, 5, { target, l, r, s });
                    return R.frames;
                }
                if (s < target) {
                    l++;
                    R.push(P(false), `${s} < ${target}: tăng l để tổng lớn hơn (mọi cặp với a[l] cũ đều quá nhỏ).`, 7, { target, l, r, 'bước': steps });
                } else {
                    r--;
                    R.push(P(false), `${s} > ${target}: giảm r để tổng nhỏ hơn (mọi cặp với a[r] cũ đều quá lớn).`, 9, { target, l, r, 'bước': steps });
                }
            }
            R.push(P(false), `l gặp r → không có cặp nào có tổng ${target}.`, 10, { target });
            return R.frames;
        }
    };

    /* ---------------- Sliding window ---------------- */
    V.slidingWindow = {
        legend: [['act', 'Trong cửa sổ'], ['swap', 'Ký tự bị trùng'], ['hit', 'Cửa sổ dài nhất']],
        inputs: [{ key: 's', label: 'Chuỗi', type: 'text', value: 'abcabcbbxyz', maxLen: 16, pattern: '^[A-Za-z0-9]+$', hint: 'chỉ chữ và số', random: () => Array.from({ length: 12 }, () => 'abcdef'[U.randInt(0, 5)]).join('') }],
        code: [
            'def longest_unique(s):',
            '    seen = set(); l = 0; best = 0',
            '    for r in range(len(s)):',
            '        while s[r] in seen:',
            '            seen.remove(s[l]); l += 1',
            '        seen.add(s[r])',
            '        best = max(best, r - l + 1)',
            '    return best'
        ],
        run({ s }) {
            const R = new Rec();
            const ch = s.split('');
            const seen = new Set();
            let l = 0, best = 0, bl = 0, br = -1;
            const P = (r, dup) => {
                const st = {};
                for (let i = l; i <= r; i++) st[i] = 'act';
                if (dup != null) st[dup] = 'swap';
                return [
                    cells('s', ch, st, {
                        pointers: [{ i: l, label: 'l', tone: 'act' }].concat(r >= 0 ? [{ i: r, label: 'r', tone: 'pivot' }] : []),
                        ranges: (r >= l ? [{ a: l, b: r, label: `cửa sổ = ${r - l + 1}`, tone: 'act', key: 'w' }] : [])
                            .concat(br >= 0 ? [{ a: bl, b: br, label: `tốt nhất = ${best}`, tone: 'done', key: 'best' }] : [])
                    }),
                    { type: 'chips', key: 'set', title: 'Tập ký tự trong cửa sổ (seen)', items: Array.from(seen) }
                ];
            };
            R.push(P(-1), 'Mở rộng cửa sổ sang phải; khi gặp ký tự trùng thì co cửa sổ từ bên trái.', 1, { l, best });
            for (let r = 0; r < ch.length; r++) {
                if (seen.has(ch[r])) {
                    R.push(P(r - 1, r), `'${ch[r]}' đã có trong cửa sổ → phải co lại từ trái.`, 3, { l, r, best });
                    while (seen.has(ch[r])) {
                        seen.delete(ch[l]);
                        l++;
                        R.push(P(r - 1, r), `Bỏ '${ch[l - 1]}' khỏi cửa sổ, l = ${l}`, 4, { l, r, best });
                    }
                }
                seen.add(ch[r]);
                if (r - l + 1 > best) { best = r - l + 1; bl = l; br = r; }
                R.push(P(r), `Thêm '${ch[r]}'. Cửa sổ [${l}..${r}] dài ${r - l + 1}, tốt nhất = ${best}`, 6, { l, r, best });
            }
            R.push(P(ch.length - 1), `Kết quả: ${best} (đoạn "${s.slice(bl, br + 1)}"). Mỗi ký tự vào/ra cửa sổ đúng 1 lần → O(n).`, 7, { best });
            return R.frames;
        }
    };

    /* ---------------- Prefix sums ---------------- */
    V.prefixSum = {
        legend: [['act', 'Đang cộng dồn'], ['cmp', 'Hai ô dùng để trả lời'], ['mark', 'Đoạn được hỏi']],
        inputs: [
            { key: 'arr', label: 'Mảng', type: 'nums', value: '3, 1, 4, 1, 5, 9, 2, 6', maxLen: 12, random: () => U.randArr(8, 0, 9) },
            { key: 'l', label: 'Truy vấn từ l', type: 'num', value: '2', min: 0, max: 11 },
            { key: 'r', label: 'đến r', type: 'num', value: '5', min: 0, max: 11 }
        ],
        code: [
            'def build_prefix(a):',
            '    P = [0] * (len(a) + 1)',
            '    for i in range(len(a)):',
            '        P[i + 1] = P[i] + a[i]',
            '    return P',
            '',
            'def range_sum(P, l, r):    # tổng a[l..r]',
            '    return P[r + 1] - P[l]'
        ],
        run({ arr, l, r }) {
            if (l > r || r >= arr.length) throw new Error(`cần 0 ≤ l ≤ r < ${arr.length}`);
            const R = new Rec();
            const P = new Array(arr.length + 1).fill(null);
            P[0] = 0;
            const show = (aSt, pSt, aRanges) => [
                cells('a', arr, aSt, { title: 'a', ranges: aRanges || [] }),
                { type: 'array', key: 'P', title: 'P (P[i] = tổng i phần tử đầu)', items: P.map((v, i) => ({ id: 'P' + i, t: v == null ? '' : v, s: pSt[i] || '' })) }
            ];
            R.push(show({}, { 0: 'act' }), 'P[0] = 0. Mỗi ô P[i+1] = P[i] + a[i].', 1, {});
            for (let i = 0; i < arr.length; i++) {
                P[i + 1] = P[i] + arr[i];
                R.push(show({ [i]: 'act' }, { [i]: 'mark', [i + 1]: 'act' }), `P[${i + 1}] = P[${i}] + a[${i}] = ${P[i]} + ${arr[i]} = ${P[i + 1]}`, 3, { i, [`P[${i + 1}]`]: P[i + 1] });
            }
            const st = {};
            for (let i = l; i <= r; i++) st[i] = 'mark';
            R.push(show(st, {}, [{ a: l, b: r, label: `a[${l}..${r}]`, tone: 'act', key: 'q' }]), `Truy vấn: tổng a[${l}..${r}] = ?`, 6, { l, r });
            const ans = P[r + 1] - P[l];
            R.push(show(st, { [r + 1]: 'cmp', [l]: 'cmp' }, [{ a: l, b: r, label: `a[${l}..${r}]`, tone: 'act', key: 'q' }]),
                `= P[${r + 1}] − P[${l}] = ${P[r + 1]} − ${P[l]} = <b>${ans}</b>. Mỗi truy vấn chỉ O(1) sau khi tiền xử lý O(n).`, 7, { l, r, 'kết quả': ans });
            return R.frames;
        }
    };

    /* ---------------- Difference array ---------------- */
    V.diffArray = {
        legend: [['act', 'Ô được cập nhật'], ['cmp', 'Đang cộng dồn'], ['done', 'Kết quả']],
        inputs: [
            { key: 'n', label: 'Kích thước n', type: 'num', value: '8', min: 2, max: 12 },
            { key: 'ups', label: 'Cập nhật "l r v; …"', type: 'text', value: '1 4 +3; 3 6 +2; 0 2 -1', maxLen: 60, pattern: '^[0-9+\\-\\s;]+$', hint: 'dạng "l r v; l r v"', wide: true }
        ],
        code: [
            'def apply_updates(n, updates):',
            '    d = [0] * (n + 1)',
            '    for l, r, v in updates:     # cộng v vào a[l..r]',
            '        d[l] += v',
            '        d[r + 1] -= v',
            '    a, run = [0] * n, 0',
            '    for i in range(n):',
            '        run += d[i]; a[i] = run',
            '    return a'
        ],
        run({ n, ups }) {
            const updates = ups.split(';').map((g) => g.trim()).filter(Boolean).map((g) => g.split(/\s+/).map(Number));
            if (!updates.length || updates.some((u) => u.length !== 3 || u.some((x) => !Number.isInteger(x)) || u[0] < 0 || u[1] >= n || u[0] > u[1])) {
                throw new Error(`mỗi cập nhật gồm "l r v" với 0 ≤ l ≤ r < ${n}`);
            }
            const R = new Rec();
            const d = new Array(n + 1).fill(0);
            const a = new Array(n).fill(null);
            const show = (dSt, aSt, ranges) => [
                { type: 'array', key: 'd', title: 'Mảng hiệu d', items: d.map((v, i) => ({ id: 'd' + i, v, s: dSt[i] || '' })), ranges: ranges || [] },
                { type: 'array', key: 'a', title: 'Mảng kết quả a', items: a.map((v, i) => ({ id: 'x' + i, t: v == null ? '' : v, s: aSt[i] || '' })) }
            ];
            R.push(show({}, {}), `Thay vì cộng từng ô (O(n) mỗi lần), chỉ đánh dấu điểm đầu và điểm sau cuối (O(1) mỗi lần).`, 1, { n });
            updates.forEach(([l, r, v]) => {
                d[l] += v;
                d[r + 1] -= v;
                R.push(show({ [l]: 'act', [r + 1]: 'act' }, {}, [{ a: l, b: r, label: `+${v} cho [${l}..${r}]`.replace('+-', '−'), tone: 'act', key: 'u' }]),
                    `Cập nhật [${l}..${r}] ${v >= 0 ? '+' : ''}${v}: d[${l}] += ${v}, d[${r + 1}] −= ${v}`, 3, { l, r, v });
            });
            let run = 0;
            for (let i = 0; i < n; i++) {
                run += d[i];
                a[i] = run;
                const dst = {};
                for (let t = 0; t <= i; t++) dst[t] = 'cmp';
                R.push(show(dst, { [i]: 'done' }), `Cộng dồn: run += d[${i}] = ${run} → a[${i}] = ${run}`, 7, { i, run });
            }
            R.push(show({}, Object.fromEntries(a.map((_, i) => [i, 'done']))), `Xong: ${updates.length} cập nhật + 1 lần cộng dồn = O(q + n).`, 8, {});
            return R.frames;
        }
    };

    /* ---------------- Kadane ---------------- */
    V.kadane = {
        legend: [['act', 'Đoạn hiện tại'], ['done', 'Đoạn tốt nhất'], ['cmp', 'Phần tử đang xét']],
        inputs: [{ key: 'arr', label: 'Mảng', type: 'nums', value: '-2, 1, -3, 4, -1, 2, 1, -5, 4', maxLen: 14, minLen: 1, random: () => U.randArr(10, -9, 9) }],
        code: [
            'def max_subarray(a):',
            '    cur = best = a[0]',
            '    for x in a[1:]:',
            '        cur = max(x, cur + x)   # nối tiếp hay bắt đầu lại?',
            '        best = max(best, cur)',
            '    return best'
        ],
        run({ arr }) {
            const R = new Rec();
            let cur = arr[0], best = arr[0], cs = 0, bs = 0, be = 0;
            const curRow = arr.map(() => null);
            curRow[0] = cur;
            const show = (i) => [
                cells('a', arr, { [i]: 'cmp' }, {
                    title: 'a',
                    ranges: [{ a: cs, b: i, label: `cur = ${cur}`, tone: 'act', key: 'c' }, { a: bs, b: be, label: `best = ${best}`, tone: 'done', key: 'b' }]
                }),
                { type: 'array', key: 'cur', title: 'cur tại mỗi vị trí (tổng lớn nhất của đoạn kết thúc tại i)', items: curRow.map((v, k) => ({ id: 'c' + k, t: v == null ? '' : v, s: k === i ? 'cmp' : '' })) }
            ];
            R.push(show(0), `Bắt đầu: cur = best = a[0] = ${arr[0]}`, 1, { cur, best });
            for (let i = 1; i < arr.length; i++) {
                const x = arr[i];
                if (cur + x < x) {
                    cur = x;
                    cs = i;
                    curRow[i] = cur;
                    R.push(show(i), `cur + ${x} < ${x} → đoạn cũ chỉ làm hại, bắt đầu lại từ a[${i}]: cur = ${cur}`, 3, { i, x, cur, best });
                } else {
                    cur = cur + x;
                    curRow[i] = cur;
                    R.push(show(i), `Nối tiếp: cur = ${cur - x} + ${x} = ${cur}`, 3, { i, x, cur, best });
                }
                if (cur > best) {
                    best = cur;
                    bs = cs;
                    be = i;
                    R.push(show(i), `cur > best → cập nhật best = ${best} (đoạn [${bs}..${be}])`, 4, { i, cur, best });
                }
            }
            R.push(show(arr.length - 1), `Tổng lớn nhất = <b>${best}</b> với đoạn a[${bs}..${be}]. Một lượt duyệt O(n).`, 5, { best });
            return R.frames;
        }
    };

    /* ---------------- Monotonic stack: next greater element ---------------- */
    V.monoStack = {
        legend: [['cmp', 'Phần tử đang xét'], ['act', 'Trong ngăn xếp'], ['done', 'Đã có đáp án']],
        inputs: [{ key: 'arr', label: 'Mảng', type: 'nums', value: '2, 7, 3, 5, 4, 6, 8, 1', maxLen: 12, random: () => U.randArr(9, 1, 20) }],
        code: [
            'def next_greater(a):',
            '    res = [-1] * len(a)',
            '    st = []              # chỉ số; giá trị giảm dần',
            '    for i, x in enumerate(a):',
            '        while st and a[st[-1]] < x:',
            '            res[st.pop()] = x',
            '        st.append(i)',
            '    return res'
        ],
        run({ arr }) {
            const R = new Rec();
            const res = arr.map(() => null);
            const st = [];
            const show = (i, popped) => {
                const s = {};
                st.forEach((k) => { s[k] = 'act'; });
                res.forEach((v, k) => { if (v != null) s[k] = 'done'; });
                if (i != null) s[i] = 'cmp';
                return [
                    cells('a', arr, s, { title: 'a', span: 4, pointers: i != null ? [{ i, label: 'i', tone: 'cmp' }] : [] }),
                    { type: 'array', key: 'st', title: 'Ngăn xếp (đỉnh ở trên)', layout: 'stack', span: 2, cap: 5, items: st.map((k) => ({ id: 'st' + k, t: `a[${k}] = ${arr[k]}`, s: k === popped ? 'swap' : '' })), pointers: st.length ? [{ i: st.length - 1, label: 'đỉnh' }] : [] },
                    { type: 'array', key: 'res', title: 'res (phần tử lớn hơn đầu tiên bên phải)', items: res.map((v, k) => ({ id: 'r' + k, t: v == null ? '' : v, s: v != null ? 'done' : '' })) }
                ];
            };
            R.push(show(null), 'Ngăn xếp giữ các chỉ số chưa tìm được đáp án, giá trị giảm dần từ đáy lên đỉnh.', 2, {});
            arr.forEach((x, i) => {
                R.push(show(i), `Xét a[${i}] = ${x}`, 3, { i, x });
                while (st.length && arr[st[st.length - 1]] < x) {
                    const k = st[st.length - 1];
                    R.push(show(i, k), `Đỉnh a[${k}] = ${arr[k]} < ${x} → ${x} chính là phần tử lớn hơn đầu tiên bên phải của nó.`, 4, { i, x });
                    st.pop();
                    res[k] = x;
                    R.push(show(i), `res[${k}] = ${x}, lấy ${arr[k]} ra khỏi ngăn xếp.`, 5, { i, x });
                }
                st.push(i);
                R.push(show(i), `Đẩy chỉ số ${i} (giá trị ${x}) vào ngăn xếp.`, 6, { i, x });
            });
            st.forEach((k) => { res[k] = -1; });
            R.push(show(null), 'Các phần tử còn trong ngăn xếp không có phần tử lớn hơn bên phải → −1. Mỗi chỉ số vào/ra 1 lần → O(n).', 7, {});
            return R.frames;
        }
    };

    /* ---------------- Monotonic deque: sliding window maximum ---------------- */
    V.monoDeque = {
        legend: [['act', 'Cửa sổ hiện tại'], ['cmp', 'Phần tử mới'], ['swap', 'Bị loại khỏi deque'], ['done', 'Max của cửa sổ']],
        inputs: [
            { key: 'arr', label: 'Mảng', type: 'nums', value: '1, 3, -1, -3, 5, 3, 6, 7', maxLen: 14, random: () => U.randArr(10, -5, 15) },
            { key: 'k', label: 'Độ rộng k', type: 'num', value: '3', min: 1, max: 8 }
        ],
        code: [
            'def max_sliding_window(a, k):',
            '    dq, res = deque(), []   # dq: chỉ số, giá trị giảm dần',
            '    for i, x in enumerate(a):',
            '        if dq and dq[0] <= i - k:',
            '            dq.popleft()        # đã ra khỏi cửa sổ',
            '        while dq and a[dq[-1]] <= x:',
            '            dq.pop()            # nhỏ hơn và cũ hơn x → vô dụng',
            '        dq.append(i)',
            '        if i >= k - 1:',
            '            res.append(a[dq[0]])',
            '    return res'
        ],
        run({ arr, k }) {
            if (k > arr.length) throw new Error('k không được lớn hơn độ dài mảng');
            const R = new Rec();
            const dq = [];
            const res = [];
            const show = (i, st) => [
                cells('a', arr, Object.assign({}, st || {}, i != null ? { [i]: (st && st[i]) || 'cmp' } : {}), {
                    title: 'a',
                    ranges: i != null ? [{ a: Math.max(0, i - k + 1), b: i, label: `cửa sổ k=${k}`, tone: 'act', key: 'w' }] : []
                }),
                { type: 'chips', key: 'dq', title: 'Deque (đầu ← → cuối), giá trị giảm dần', front: 'đầu', back: 'cuối', items: dq.map((j, idx) => ({ t: `${arr[j]} (#${j})`, s: idx === 0 ? 'done' : '' })) },
                { type: 'chips', key: 'res', title: 'Kết quả (max từng cửa sổ)', items: res.slice() }
            ];
            R.push(show(null), 'Deque chỉ giữ những ứng viên có thể trở thành max; phần tử đầu deque luôn là max của cửa sổ.', 1, { k });
            arr.forEach((x, i) => {
                R.push(show(i), `Xét a[${i}] = ${x}`, 2, { i, x });
                if (dq.length && dq[0] <= i - k) {
                    const out = dq.shift();
                    R.push(show(i, { [out]: 'swap' }), `Chỉ số ${out} đã trượt ra khỏi cửa sổ → bỏ khỏi đầu deque.`, 4, { i, x });
                }
                while (dq.length && arr[dq[dq.length - 1]] <= x) {
                    const out = dq.pop();
                    R.push(show(i, { [out]: 'swap' }), `a[${out}] = ${arr[out]} ≤ ${x}: không bao giờ còn là max nữa → bỏ khỏi cuối deque.`, 6, { i, x });
                }
                dq.push(i);
                R.push(show(i), `Thêm chỉ số ${i} vào cuối deque.`, 7, { i, x });
                if (i >= k - 1) {
                    res.push(arr[dq[0]]);
                    R.push(show(i, { [dq[0]]: 'done' }), `Cửa sổ [${i - k + 1}..${i}] có max = a[${dq[0]}] = ${arr[dq[0]]}`, 9, { i, max: arr[dq[0]] });
                }
            });
            R.push(show(null), `Kết quả: [${res.join(', ')}]. Mỗi chỉ số vào/ra deque tối đa 1 lần → O(n).`, 10, {});
            return R.frames;
        }
    };

    /* ---------------- Greedy: activity selection ---------------- */
    function parseIntervals(txt) {
        const out = txt.split(/[,;]/).map((g) => g.trim()).filter(Boolean).map((g) => {
            const m = g.match(/^(\d+)\s*-\s*(\d+)$/);
            if (!m) throw new Error(`"${g}" không đúng dạng a-b`);
            const a = Number(m[1]), b = Number(m[2]);
            if (a >= b) throw new Error(`"${g}": cần a < b`);
            return [a, b];
        });
        if (out.length > 12) throw new Error('tối đa 12 khoảng');
        if (!out.length) throw new Error('cần ít nhất 1 khoảng');
        return out;
    }
    function randIntervals(n, maxT) {
        return Array.from({ length: n }, () => {
            const a = U.randInt(0, maxT - 2);
            return `${a}-${U.randInt(a + 1, Math.min(maxT, a + 6))}`;
        }).join(', ');
    }

    V.greedyIntervals = {
        legend: [['cmp', 'Đang xét'], ['done', 'Được chọn'], ['rej', 'Bị loại (chồng lấn)']],
        inputs: [{ key: 'iv', label: 'Các hoạt động "bắt đầu-kết thúc"', type: 'text', wide: true, value: '1-4, 3-5, 0-6, 5-7, 3-9, 5-9, 6-10, 8-11, 8-12, 2-14, 12-16', maxLen: 90, pattern: '^[0-9\\-,;\\s]+$', hint: 'dạng 1-4, 3-5', random: () => randIntervals(9, 16) }],
        code: [
            'def max_activities(intervals):',
            '    intervals.sort(key=lambda x: x[1])  # theo giờ kết thúc',
            '    count, end = 0, float("-inf")',
            '    for s, e in intervals:',
            '        if s >= end:',
            '            count += 1; end = e       # chọn',
            '    return count'
        ],
        run({ iv }) {
            const items = parseIntervals(iv).map(([a, b], i) => ({ id: 'i' + i, a, b }));
            items.sort((p, q) => p.b - q.b || p.a - q.a);
            const R = new Rec();
            const min = Math.min(...items.map((x) => x.a)), max = Math.max(...items.map((x) => x.b));
            const st = {};
            let end = -Infinity, count = 0;
            const show = (cur) => [{
                type: 'intervals', key: 'iv', min, max,
                items: items.map((x, i) => ({ a: x.a, b: x.b, s: i === cur ? 'cmp' : st[i] || '' })),
                line: Number.isFinite(end) ? end : null, lineLabel: Number.isFinite(end) ? `end = ${end}` : ''
            }];
            R.push(show(-1), 'Tham lam: luôn chọn hoạt động <b>kết thúc sớm nhất</b> còn khả thi — để lại nhiều thời gian nhất cho phần sau. (Đã sắp xếp theo giờ kết thúc.)', 1, {});
            items.forEach((x, i) => {
                R.push(show(i), `Xét [${x.a}, ${x.b}]: bắt đầu ${x.a} ${x.a >= end ? '≥' : '<'} end = ${Number.isFinite(end) ? end : '−∞'}`, 4, { count, end: Number.isFinite(end) ? end : '−∞' });
                if (x.a >= end) {
                    st[i] = 'done';
                    count++;
                    end = x.b;
                    R.push(show(-1), `Chọn [${x.a}, ${x.b}] → end = ${end}`, 5, { count, end });
                } else {
                    st[i] = 'rej';
                    R.push(show(-1), `Chồng lấn với hoạt động đã chọn → bỏ qua.`, 4, { count, end });
                }
            });
            R.push(show(-1), `Chọn được tối đa <b>${count}</b> hoạt động không chồng lấn. Sắp xếp O(n log n) + duyệt O(n).`, 6, { count });
            return R.frames;
        }
    };

    /* ---------------- Sweep line: meeting rooms ---------------- */
    V.sweepLine = {
        legend: [['act', 'Đang diễn ra'], ['done', 'Đã kết thúc'], ['cmp', 'Sự kiện hiện tại']],
        inputs: [{ key: 'iv', label: 'Các cuộc họp "bắt đầu-kết thúc"', type: 'text', wide: true, value: '0-5, 1-3, 2-7, 4-8, 6-9, 8-10', maxLen: 90, pattern: '^[0-9\\-,;\\s]+$', hint: 'dạng 1-4, 3-5', random: () => randIntervals(7, 14) }],
        code: [
            'def min_rooms(meetings):',
            '    events = []',
            '    for s, e in meetings:',
            '        events += [(s, +1), (e, -1)]',
            '    events.sort()       # cùng giờ: kết thúc (-1) trước',
            '    cur = best = 0',
            '    for t, delta in events:',
            '        cur += delta',
            '        best = max(best, cur)',
            '    return best'
        ],
        run({ iv }) {
            const ms = parseIntervals(iv).map(([a, b], i) => ({ id: i, a, b }));
            const R = new Rec();
            const min = Math.min(...ms.map((x) => x.a)), max = Math.max(...ms.map((x) => x.b));
            const events = [];
            ms.forEach((m) => { events.push({ t: m.a, d: 1, m: m.id }); events.push({ t: m.b, d: -1, m: m.id }); });
            events.sort((p, q) => p.t - q.t || p.d - q.d);
            const status = {};
            let cur = 0, best = 0;
            const show = (t, hi) => [
                { type: 'intervals', key: 'iv', min, max, items: ms.map((m) => ({ a: m.a, b: m.b, s: m.id === hi ? 'cmp' : status[m.id] || '' })), line: t, lineLabel: t != null ? `t = ${t}` : '' },
                { type: 'chips', key: 'ev', title: 'Sự kiện đã sắp xếp (thời điểm, +1 bắt đầu / −1 kết thúc)', items: events.map((e, k) => ({ t: `${e.t}${e.d > 0 ? '+' : '−'}`, s: k < doneEv ? 'done' : k === doneEv ? 'cmp' : '' })) }
            ];
            let doneEv = -1;
            R.push(show(null, -1), 'Biến mỗi cuộc họp thành 2 sự kiện rồi quét đường thẳng đứng từ trái sang phải, đếm số phòng đang dùng.', 4, { cur, best });
            events.forEach((e, k) => {
                doneEv = k;
                cur += e.d;
                status[e.m] = e.d > 0 ? 'act' : 'done';
                best = Math.max(best, cur);
                R.push(show(e.t, e.m), `t = ${e.t}: cuộc họp [${ms[e.m].a}, ${ms[e.m].b}] ${e.d > 0 ? 'bắt đầu (+1)' : 'kết thúc (−1)'} → đang dùng ${cur} phòng.`, 7, { t: e.t, cur, best });
            });
            doneEv = events.length;
            R.push(show(null, -1), `Cần tối thiểu <b>${best}</b> phòng họp. O(n log n) vì phải sắp xếp sự kiện.`, 9, { best });
            return R.frames;
        }
    };

    /* ---------------- Backtracking: N-Queens ---------------- */
    V.nQueens = {
        legend: [['cmp', 'Đang thử'], ['done', 'Hậu đã đặt'], ['swap', 'Hậu gây xung đột'], ['rej', 'Bị tấn công']],
        inputs: [{ key: 'n', label: 'Kích thước bàn cờ', type: 'select', value: '5', options: [['4', '4 × 4'], ['5', '5 × 5'], ['6', '6 × 6']] }],
        code: [
            'def solve(row):',
            '    if row == n:',
            '        return True               # đặt đủ n hậu',
            '    for col in range(n):',
            '        if safe(row, col):',
            '            board[row][col] = "Q"',
            '            if solve(row + 1): return True',
            '            board[row][col] = "."  # quay lui',
            '    return False'
        ],
        run({ n }) {
            n = Number(n);
            const R = new Rec();
            const q = [];
            let tries = 0, backs = 0;
            const grid = (extra) => {
                const cellsArr = [];
                for (let r = 0; r < n; r++) {
                    cellsArr.push([]);
                    for (let c = 0; c < n; c++) {
                        const dark = (r + c) % 2 === 1;
                        cellsArr[r].push({ t: q[r] === c ? '♛' : '', s: q[r] === c ? 'done' : dark ? 'dark' : '' });
                    }
                }
                (extra || []).forEach(([r, c, s, t]) => { cellsArr[r][c] = { t: t != null ? t : cellsArr[r][c].t, s }; });
                return [{ type: 'grid', key: 'b', rows: n, cols: n, cell: 52, cells: cellsArr, rowHead: Array.from({ length: n }, (_, i) => 'h' + i), colHead: Array.from({ length: n }, (_, i) => 'c' + i) }];
            };
            const attacker = (r, c) => {
                for (let rr = 0; rr < r; rr++) {
                    const cc = q[rr];
                    if (cc === c || Math.abs(cc - c) === r - rr) return rr;
                }
                return -1;
            };
            R.push(grid(), `Đặt ${n} quân hậu sao cho không con nào ăn được con nào: mỗi hàng thử từng cột, bế tắc thì quay lui.`, 0, {});
            const solve = (row) => {
                if (row === n) return true;
                for (let c = 0; c < n; c++) {
                    tries++;
                    const at = attacker(row, c);
                    if (at >= 0) {
                        R.push(grid([[row, c, 'rej', '✕'], [at, q[at], 'swap', '♛']]), `Hàng ${row}, cột ${c}: bị hậu ở (${at}, ${q[at]}) tấn công.`, 4, { 'hàng': row, 'cột': c, 'lần thử': tries, 'quay lui': backs });
                        continue;
                    }
                    q[row] = c;
                    R.push(grid([[row, c, 'cmp', '♛']]), `Hàng ${row}, cột ${c} an toàn → đặt hậu, sang hàng ${row + 1}.`, 5, { 'hàng': row, 'cột': c, 'lần thử': tries, 'quay lui': backs });
                    if (solve(row + 1)) return true;
                    q.length = row;
                    backs++;
                    R.push(grid([[row, c, 'rej', '↶']]), `Hàng ${row + 1} không còn chỗ → quay lui: gỡ hậu ở (${row}, ${c}) và thử cột tiếp theo.`, 7, { 'hàng': row, 'cột': c, 'lần thử': tries, 'quay lui': backs });
                }
                return false;
            };
            solve(0);
            R.push(grid(), `Tìm được lời giải sau ${tries} lần thử và ${backs} lần quay lui. Quay lui cắt bỏ sớm các nhánh chắc chắn sai.`, 2, { 'lần thử': tries, 'quay lui': backs });
            return R.frames;
        }
    };

    /* ---------------- Subsets decision tree ---------------- */
    V.subsetsTree = {
        legend: [['act', 'Đang ở nút này'], ['done', 'Tập con hoàn chỉnh (lá)'], ['visit', 'Đã duyệt']],
        inputs: [{ key: 'arr', label: 'Tập (tối đa 4 phần tử)', type: 'nums', value: '1, 2, 3', maxLen: 4, minLen: 1, min: 0, max: 99, random: () => U.randDistinct(3, 1, 9) }],
        code: [
            'def subsets(nums):',
            '    res, cur = [], []',
            '    def dfs(i):',
            '        if i == len(nums):',
            '            res.append(cur[:]); return',
            '        cur.append(nums[i]); dfs(i + 1)   # chọn nums[i]',
            '        cur.pop();           dfs(i + 1)   # không chọn',
            '    dfs(0)',
            '    return res'
        ],
        run({ arr }) {
            const R = new Rec();
            const nodes = {};
            const res = [];
            let nid = 0;
            const small = arr.length >= 4;
            const label = (cur) => (cur.length ? cur.join('') : '∅');
            const show = (msg, line, cur) => R.push([
                { type: 'tree', key: 't', title: 'Cây quyết định: mỗi tầng quyết định chọn / không chọn một phần tử', nodes, root: 'n0', r: small ? 13 : 17, levelH: 58, gap: 70 },
                { type: 'chips', key: 'res', title: `Các tập con đã sinh (${res.length})`, items: res.map((x) => '{' + x.join(', ') + '}') }
            ], msg, line, { i: cur.i, cur: '[' + cur.list.join(', ') + ']' });
            const dfs = (i, cur, id) => {
                nodes[id].s = 'act';
                show(i === arr.length ? `Đủ ${arr.length} quyết định → ghi nhận tập {${cur.join(', ')}}` : `Tại tầng ${i}: quyết định với phần tử ${arr[i]}`, i === arr.length ? 4 : 3, { i, list: cur });
                if (i === arr.length) {
                    res.push(cur.slice());
                    nodes[id].s = 'done';
                    show(`Đã thêm {${cur.join(', ')}} vào kết quả.`, 4, { i, list: cur });
                    return;
                }
                nodes[id].s = 'visit';
                const a = 'n' + (++nid);
                nodes[a] = { label: label(cur.concat(arr[i])), children: [], el: '+' + arr[i], s: '' };
                nodes[id].children.push(a);
                cur.push(arr[i]);
                show(`Chọn ${arr[i]}`, 5, { i, list: cur });
                dfs(i + 1, cur, a);
                cur.pop();
                const b = 'n' + (++nid);
                nodes[b] = { label: label(cur), children: [], el: '−' + arr[i], s: '' };
                nodes[id].children.push(b);
                nodes[id].s = 'act';
                show(`Quay lui, bỏ ${arr[i]} → nhánh không chọn ${arr[i]}`, 6, { i, list: cur });
                nodes[id].s = 'visit';
                dfs(i + 1, cur, b);
            };
            nodes.n0 = { label: '∅', children: [], s: '' };
            dfs(0, [], 'n0');
            show(`Tổng cộng 2^${arr.length} = ${res.length} tập con. Độ phức tạp O(n · 2ⁿ).`, 8, { i: '-', list: [] });
            return R.frames;
        }
    };

    /* ---------------- Recursion: factorial call stack ---------------- */
    V.recursionStack = {
        legend: [['act', 'Lời gọi đang chạy'], ['done', 'Đã trả về']],
        inputs: [{ key: 'n', label: 'n', type: 'num', value: '5', min: 1, max: 8 }],
        code: [
            'def fact(n):',
            '    if n <= 1:',
            '        return 1              # trường hợp cơ sở',
            '    return n * fact(n - 1)    # gọi đệ quy'
        ],
        run({ n }) {
            const R = new Rec();
            const stack = [];
            const log = [];
            const show = (msg, line, topState) => R.push([
                { type: 'array', key: 'st', title: 'Ngăn xếp lời gọi (call stack)', layout: 'stack', span: 3, cap: n + 1, cellW: 170, showIndex: false, items: stack.map((f, i) => ({ id: 'f' + f.n, t: f.ret != null ? `fact(${f.n}) = ${f.ret}` : `fact(${f.n})`, s: i === stack.length - 1 ? (topState || 'act') : '' })), pointers: stack.length ? [{ i: stack.length - 1, label: 'đang chạy' }] : [] },
                { type: 'log', key: 'log', title: 'Nhật ký', span: 3, lines: log.slice() }
            ], msg, line, { 'độ sâu': stack.length });
            const fact = (k) => {
                stack.push({ n: k });
                log.push(`gọi fact(${k})`);
                show(`Gọi fact(${k}) → đẩy một khung mới lên ngăn xếp.`, 0);
                if (k <= 1) {
                    stack[stack.length - 1].ret = 1;
                    log.push(`fact(${k}) = 1  (cơ sở)`);
                    show(`n = ${k} ≤ 1 → trường hợp cơ sở, trả về 1 (không gọi tiếp).`, 2, 'done');
                    stack.pop();
                    return 1;
                }
                show(`fact(${k}) cần fact(${k - 1}) → phải chờ.`, 3);
                const sub = fact(k - 1);
                const r = k * sub;
                stack[stack.length - 1].ret = r;
                log.push(`fact(${k}) = ${k} × ${sub} = ${r}`);
                show(`fact(${k - 1}) trả về ${sub} → fact(${k}) = ${k} × ${sub} = ${r}`, 3, 'done');
                stack.pop();
                return r;
            };
            const ans = fact(n);
            show(`Kết quả fact(${n}) = <b>${ans}</b>. Độ sâu đệ quy tối đa = ${n} → bộ nhớ O(n).`, -1);
            return R.frames;
        }
    };

    /* ---------------- Bit manipulation ---------------- */
    V.bits = {
        legend: [['done', 'Bit 1'], ['cmp', 'Bit đang xét'], ['swap', 'Bit bị xóa']],
        inputs: [
            { key: 'a', label: 'a (0…255)', type: 'num', value: '44', min: 0, max: 255 },
            { key: 'b', label: 'b (0…255)', type: 'num', value: '25', min: 0, max: 255 }
        ],
        code: [
            'a & b      # AND: 1 khi cả hai bit là 1',
            'a | b      # OR : 1 khi có ít nhất một bit 1',
            'a ^ b      # XOR: 1 khi hai bit khác nhau',
            'a << 1     # dịch trái = nhân 2',
            'a >> 1     # dịch phải = chia 2 (lấy phần nguyên)',
            'def popcount(n):',
            '    c = 0',
            '    while n:',
            '        n &= n - 1     # xóa bit 1 thấp nhất',
            '        c += 1',
            '    return c'
        ],
        run({ a, b }) {
            const R = new Rec();
            const B = 9;
            const bitsOf = (x, key, title, extra) => ({
                type: 'array', key, title: `${title} = ${x}`, cell: 38,
                items: Array.from({ length: B }, (_, k) => {
                    const pos = B - 1 - k;
                    const bit = (x >> pos) & 1;
                    return { id: key + pos, t: bit, s: (extra && extra[pos]) || (bit ? 'done' : '') };
                }),
                indexLabels: Array.from({ length: B }, (_, k) => '2' + ['⁸', '⁷', '⁶', '⁵', '⁴', '³', '²', '¹', '⁰'][k])
            });
            const ops = [
                ['a & b', a & b, 0, 'AND giữ lại các bit mà cả a và b đều bật — dùng để <b>kiểm tra / tắt bit</b>.'],
                ['a | b', a | b, 1, 'OR bật bit nếu một trong hai có — dùng để <b>bật bit</b>.'],
                ['a ^ b', a ^ b, 2, 'XOR bật bit khi hai bit khác nhau — x ^ x = 0, dùng để <b>đảo bit</b> và tìm phần tử lẻ.'],
                ['a << 1', (a << 1) & 511, 3, 'Dịch trái 1 bit = nhân 2.'],
                ['a >> 1', a >> 1, 4, 'Dịch phải 1 bit = chia 2 lấy phần nguyên.']
            ];
            R.push([bitsOf(a, 'a', 'a'), bitsOf(b, 'b', 'b')], `Biểu diễn nhị phân của a = ${a} và b = ${b}.`, -1, { a, b });
            ops.forEach(([name, val, line, msg]) => {
                R.push([bitsOf(a, 'a', 'a'), bitsOf(b, 'b', 'b'), bitsOf(val, 'r', name)], msg, line, { [name]: val });
            });
            let n = a, c = 0;
            R.push([bitsOf(n, 'n', 'n')], `Đếm số bit 1 của ${a} bằng mẹo Kernighan: n & (n − 1) luôn xóa đúng bit 1 thấp nhất.`, 6, { n, c });
            while (n) {
                const low = n & -n;
                const pos = Math.log2(low);
                R.push([bitsOf(n, 'n', 'n', { [pos]: 'swap' }), bitsOf(n - 1, 'm', 'n − 1')], `Bit 1 thấp nhất ở vị trí ${pos}; n − 1 lật bit đó và mọi bit 0 phía sau.`, 8, { n, c });
                n &= n - 1;
                c++;
                R.push([bitsOf(n, 'n', 'n')], `n &= n − 1 → n = ${n}, đếm c = ${c}`, 9, { n, c });
            }
            R.push([bitsOf(a, 'n', 'a')], `${a} có <b>${c}</b> bit 1 — số vòng lặp đúng bằng số bit 1, không phải số bit.`, 10, { c });
            return R.frames;
        }
    };

    /* ---------------- Fast & slow pointers (Floyd) ---------------- */
    V.fastSlow = {
        legend: [['act', 'slow (rùa)'], ['pivot', 'fast (thỏ)'], ['hit', 'Gặp nhau / điểm vào chu trình']],
        inputs: [
            { key: 'n', label: 'Số nút', type: 'num', value: '7', min: 3, max: 9 },
            { key: 'pos', label: 'Nút cuối nối về vị trí (−1 = không vòng)', type: 'num', value: '2', min: -1, max: 8, wide: true }
        ],
        code: [
            'def detect_cycle(head):',
            '    slow = fast = head',
            '    while fast and fast.next:',
            '        slow = slow.next          # 1 bước',
            '        fast = fast.next.next     # 2 bước',
            '        if slow is fast: break    # gặp nhau → có vòng',
            '    else:',
            '        return None               # fast chạm cuối → không vòng',
            '    slow = head                   # tìm điểm vào vòng',
            '    while slow is not fast:',
            '        slow, fast = slow.next, fast.next',
            '    return slow'
        ],
        run({ n, pos }) {
            if (pos >= n) throw new Error(`vị trí nối vòng phải < ${n}`);
            const R = new Rec();
            const ids = Array.from({ length: n }, (_, i) => 'n' + i);
            const next = {};
            ids.forEach((id, i) => { next[id] = i + 1 < n ? ids[i + 1] : (pos >= 0 ? ids[pos] : null); });
            const vals = [3, 8, 1, 6, 4, 9, 2, 7, 5];
            const show = (slow, fast, msg, line, hit) => R.push([{
                type: 'list', key: 'l', h: 170,
                nodes: ids.map((id, i) => ({ id, t: vals[i], s: hit && id === hit ? 'hit' : id === slow && id === fast ? 'hit' : id === slow ? 'act' : id === fast ? 'pivot' : '' })),
                next, showNull: true,
                pointers: [slow && { id: slow, label: 'slow', tone: 'act' }, fast && { id: fast, label: 'fast', tone: 'pivot' }].filter(Boolean)
            }], msg, line, { slow: slow ? vals[ids.indexOf(slow)] : 'null', fast: fast ? vals[ids.indexOf(fast)] : 'null' });
            let slow = ids[0], fast = ids[0];
            show(slow, fast, 'Hai con trỏ cùng xuất phát từ head. Nếu có vòng, thỏ chạy nhanh sẽ đuổi kịp rùa.', 1);
            let met = false;
            while (fast && next[fast]) {
                slow = next[slow];
                fast = next[next[fast]];
                show(slow, fast, 'slow đi 1 bước, fast đi 2 bước.', 4);
                if (slow === fast) { met = true; break; }
            }
            if (!met) {
                show(slow, fast, 'fast chạm cuối danh sách (null) → <b>không có chu trình</b>.', 7);
                return R.frames;
            }
            show(slow, fast, 'slow và fast gặp nhau → <b>có chu trình</b>.', 5, slow);
            slow = ids[0];
            show(slow, fast, 'Đưa slow về head; giờ cả hai cùng đi 1 bước — chỗ gặp tiếp theo chính là điểm vào vòng.', 8);
            while (slow !== fast) {
                slow = next[slow];
                fast = next[fast];
                show(slow, fast, 'Cả hai đi 1 bước.', 10);
            }
            show(slow, fast, `Điểm vào chu trình là nút ở vị trí ${ids.indexOf(slow)} (giá trị ${vals[ids.indexOf(slow)]}). O(n) thời gian, O(1) bộ nhớ.`, 11, slow);
            return R.frames;
        }
    };
})();
