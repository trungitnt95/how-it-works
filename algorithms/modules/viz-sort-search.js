/* Visualizers: complexity growth, sorting, searching */
(function () {
    'use strict';
    const Algo = window.Algo;
    const V = Algo.viz;
    const Rec = Algo.Rec;
    const U = Algo.util;

    const SORT_INPUT = {
        key: 'arr', label: 'Mảng', type: 'nums', value: '38, 27, 43, 3, 9, 82, 10, 55',
        min: 1, max: 99, minLen: 2, maxLen: 14, random: () => U.randArr(9, 3, 99)
    };

    function tag(arr) { return arr.map((v, i) => ({ id: 'e' + i, v })); }

    function bars(a, st, ptrs, extra) {
        return Object.assign({
            type: 'array', key: 'arr', bars: true,
            items: a.map((it, i) => ({ id: it.id, v: it.v, s: st ? st[i] : '' })),
            pointers: ptrs || []
        }, extra || {});
    }

    function withSet(set, state, extra) {
        const s = {};
        set.forEach((k) => { s[k] = state; });
        return Object.assign(s, extra || {});
    }

    function allDone(n) {
        const s = {};
        for (let i = 0; i < n; i++) s[i] = 'done';
        return s;
    }

    /* ---------------- Big-O growth ---------------- */
    const SUP = { '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹' };
    function pow10Text(L) {
        if (L < 5) return Math.round(Math.pow(10, L)).toLocaleString('vi-VN');
        if (L >= 100) return '10⁹⁹⁺';
        return '10' + String(Math.round(L)).split('').map((c) => SUP[c] || c).join('');
    }
    function timeText(L) {
        const s = Math.pow(10, L - 8);
        if (!Number.isFinite(s) || L - 8 > 17.6) return '> tuổi vũ trụ';     // ~4.3·10¹⁷ giây
        if (s < 1e-3) return '< 1 ms';
        if (s < 1) return Math.round(s * 1000) + ' ms';
        if (s < 60) return s.toFixed(1) + ' giây';
        if (s < 3600) return (s / 60).toFixed(1) + ' phút';
        if (s < 86400) return (s / 3600).toFixed(1) + ' giờ';
        if (s < 3.15e7) return (s / 86400).toFixed(1) + ' ngày';
        const y = s / 3.15e7;
        return y < 1e4 ? Math.round(y).toLocaleString('vi-VN') + ' năm' : '~' + pow10Text(Math.log10(y)) + ' năm';
    }

    V.growth = {
        legend: [['done', 'Chạy < 1 giây'], ['cmp', '1 giây – vài phút'], ['swap', 'Quá chậm']],
        inputs: [],
        run() {
            const R = new Rec();
            const lg2 = (n) => Math.max(1, Math.log2(n));
            const logFact = (n) => { let s = 0; for (let k = 2; k <= n; k++) s += Math.log10(k); return s; };
            const classes = [
                ['O(1)', () => 0],
                ['O(log n)', (n) => Math.log10(lg2(n))],
                ['O(n)', (n) => Math.log10(n)],
                ['O(n log n)', (n) => Math.log10(n * lg2(n))],
                ['O(n²)', (n) => 2 * Math.log10(n)],
                ['O(2ⁿ)', (n) => n * Math.log10(2)],
                ['O(n!)', (n) => (n > 5000 ? n * (Math.log10(n) - 0.4343) : logFact(n))]
            ];
            const ns = [1, 5, 10, 20, 30, 50, 100, 1000, 10000, 100000, 1000000];
            ns.forEach((n) => {
                const vars = { n: n.toLocaleString('vi-VN') };
                const slow = [];
                const items = classes.map(([name, f], i) => {
                    const L = f(n);
                    const st = L <= 8 ? 'done' : L <= 10 ? 'cmp' : 'swap';
                    if (L > 8) slow.push(name);
                    vars[name] = timeText(L);
                    return { id: 'c' + i, v: 1, h: Math.min(1, Math.max(0.02, L / 12)), t: pow10Text(L), s: st };
                });
                const msg = `n = <b>${n.toLocaleString('vi-VN')}</b> — số phép tính của mỗi độ phức tạp (máy ~10⁸ phép/giây). ` +
                    (slow.length ? `Vượt 1 giây: <b>${slow.join(', ')}</b>.` : 'Mọi thuật toán đều chạy tức thì.');
                R.push([{
                    type: 'array', key: 'g', bars: true, height: 230, showIndex: false,
                    labels: classes.map((c) => c[0]), items,
                    refLine: { h: 8 / 12, label: '10⁸ phép ≈ 1 giây' }
                }], msg, -1, vars);
            });
            return R.frames;
        }
    };

    /* ---------------- Bubble sort ---------------- */
    V.bubbleSort = {
        legend: [['cmp', 'Đang so sánh'], ['swap', 'Hoán đổi'], ['done', 'Đã đúng vị trí']],
        inputs: [SORT_INPUT],
        code: [
            'def bubble_sort(a):',
            '    n = len(a)',
            '    for i in range(n - 1):',
            '        swapped = False',
            '        for j in range(n - 1 - i):',
            '            if a[j] > a[j + 1]:',
            '                a[j], a[j + 1] = a[j + 1], a[j]',
            '                swapped = True',
            '        if not swapped:',
            '            break  # đã sắp xếp xong'
        ],
        run({ arr }) {
            const a = tag(arr), n = a.length, R = new Rec(), done = new Set();
            let cmp = 0, sw = 0;
            const vars = (i, j) => ({ i, j, 'so sánh': cmp, 'hoán đổi': sw });
            R.push([bars(a)], 'Mảng ban đầu. Mỗi lượt, phần tử lớn nhất sẽ "nổi bọt" về cuối.', 1, vars('-', '-'));
            for (let i = 0; i < n - 1; i++) {
                let swapped = false;
                for (let j = 0; j < n - 1 - i; j++) {
                    cmp++;
                    R.push([bars(a, withSet(done, 'done', { [j]: 'cmp', [j + 1]: 'cmp' }), [{ i: j, label: 'j' }, { i: j + 1, label: 'j+1', tone: 'cmp' }])],
                        `So sánh a[${j}] = ${a[j].v} với a[${j + 1}] = ${a[j + 1].v}`, 5, vars(i, j));
                    if (a[j].v > a[j + 1].v) {
                        [a[j], a[j + 1]] = [a[j + 1], a[j]];
                        sw++;
                        swapped = true;
                        R.push([bars(a, withSet(done, 'done', { [j]: 'swap', [j + 1]: 'swap' }), [{ i: j, label: 'j' }, { i: j + 1, label: 'j+1', tone: 'cmp' }])],
                            `${a[j + 1].v} > ${a[j].v} → hoán đổi`, 6, vars(i, j));
                    }
                }
                done.add(n - 1 - i);
                if (!swapped) {
                    R.push([bars(a, allDone(n))], `Lượt ${i + 1} không có hoán đổi nào → mảng đã có thứ tự, dừng sớm.`, 9, vars(i, '-'));
                    return R.frames;
                }
                R.push([bars(a, withSet(done, 'done'))], `Hết lượt ${i + 1}: ${a[n - 1 - i].v} đã nằm đúng vị trí ${n - 1 - i}.`, 8, vars(i, '-'));
            }
            R.push([bars(a, allDone(n))], `Hoàn tất sau ${cmp} phép so sánh và ${sw} lần hoán đổi.`, -1, vars('-', '-'));
            return R.frames;
        }
    };

    /* ---------------- Selection sort ---------------- */
    V.selectionSort = {
        legend: [['pivot', 'Nhỏ nhất hiện tại'], ['cmp', 'Đang xét'], ['swap', 'Hoán đổi'], ['done', 'Đã đúng vị trí']],
        inputs: [SORT_INPUT],
        code: [
            'def selection_sort(a):',
            '    n = len(a)',
            '    for i in range(n - 1):',
            '        m = i                  # vị trí nhỏ nhất',
            '        for j in range(i + 1, n):',
            '            if a[j] < a[m]:',
            '                m = j',
            '        a[i], a[m] = a[m], a[i]'
        ],
        run({ arr }) {
            const a = tag(arr), n = a.length, R = new Rec(), done = new Set();
            let cmp = 0, sw = 0;
            R.push([bars(a)], 'Mỗi lượt: tìm phần tử nhỏ nhất trong phần chưa sắp xếp rồi đưa về đầu.', 1, { 'so sánh': 0, 'hoán đổi': 0 });
            for (let i = 0; i < n - 1; i++) {
                let m = i;
                R.push([bars(a, withSet(done, 'done', { [m]: 'pivot' }), [{ i, label: 'i' }, { i: m, label: 'min', tone: 'pivot' }])],
                    `Lượt ${i + 1}: tạm coi a[${i}] = ${a[i].v} là nhỏ nhất.`, 3, { i, m, 'so sánh': cmp, 'hoán đổi': sw });
                for (let j = i + 1; j < n; j++) {
                    cmp++;
                    R.push([bars(a, withSet(done, 'done', { [m]: 'pivot', [j]: 'cmp' }), [{ i, label: 'i' }, { i: m, label: 'min', tone: 'pivot' }, { i: j, label: 'j', tone: 'cmp' }])],
                        `So sánh a[${j}] = ${a[j].v} với min = ${a[m].v}`, 5, { i, j, m, 'so sánh': cmp, 'hoán đổi': sw });
                    if (a[j].v < a[m].v) {
                        m = j;
                        R.push([bars(a, withSet(done, 'done', { [m]: 'pivot' }), [{ i, label: 'i' }, { i: m, label: 'min', tone: 'pivot' }])],
                            `Tìm thấy giá trị nhỏ hơn: min = ${a[m].v} tại vị trí ${m}`, 6, { i, j, m, 'so sánh': cmp, 'hoán đổi': sw });
                    }
                }
                if (m !== i) {
                    [a[i], a[m]] = [a[m], a[i]];
                    sw++;
                    R.push([bars(a, withSet(done, 'done', { [i]: 'swap', [m]: 'swap' }), [{ i, label: 'i' }])],
                        `Hoán đổi a[${i}] ↔ a[${m}] để đưa ${a[i].v} về đầu phần chưa sắp xếp.`, 7, { i, m, 'so sánh': cmp, 'hoán đổi': sw });
                }
                done.add(i);
            }
            R.push([bars(a, allDone(n))], `Hoàn tất: ${cmp} phép so sánh (luôn là n(n−1)/2) nhưng chỉ ${sw} lần hoán đổi.`, -1, { 'so sánh': cmp, 'hoán đổi': sw });
            return R.frames;
        }
    };

    /* ---------------- Insertion sort ---------------- */
    V.insertionSort = {
        legend: [['act', 'Phần tử đang chèn (key)'], ['cmp', 'Đang so sánh'], ['mark', 'Phần đã sắp xếp'], ['done', 'Hoàn tất']],
        inputs: [SORT_INPUT],
        code: [
            'def insertion_sort(a):',
            '    for i in range(1, len(a)):',
            '        key = a[i]',
            '        j = i - 1',
            '        while j >= 0 and a[j] > key:',
            '            a[j + 1] = a[j]    # dịch sang phải',
            '            j -= 1',
            '        a[j + 1] = key'
        ],
        run({ arr }) {
            const a = tag(arr), n = a.length, R = new Rec();
            let cmp = 0, shifts = 0;
            const sortedUpTo = (k, extra) => {
                const s = {};
                for (let t = 0; t <= k; t++) s[t] = 'mark';
                return Object.assign(s, extra || {});
            };
            R.push([bars(a, sortedUpTo(0))], 'Phần tử đầu tiên tự nó đã là một dãy có thứ tự. Lần lượt chèn các phần tử sau vào đúng chỗ — giống xếp bài trên tay.', 0, { 'so sánh': 0, 'dịch': 0 });
            for (let i = 1; i < n; i++) {
                const key = a[i].v;
                let j = i - 1, pos = i;
                R.push([bars(a, sortedUpTo(i - 1, { [pos]: 'act' }), [{ i: pos, label: 'key', tone: 'act' }])],
                    `Lấy key = ${key} (a[${i}]) ra để chèn vào phần đã sắp xếp bên trái.`, 2, { i, key, j, 'so sánh': cmp, 'dịch': shifts });
                while (j >= 0) {
                    cmp++;
                    R.push([bars(a, sortedUpTo(i, { [j]: 'cmp', [pos]: 'act' }), [{ i: pos, label: 'key', tone: 'act' }, { i: j, label: 'j', tone: 'cmp' }])],
                        `So sánh a[${j}] = ${a[j].v} với key = ${key}`, 4, { i, key, j, 'so sánh': cmp, 'dịch': shifts });
                    if (a[j].v <= key) break;
                    [a[j], a[pos]] = [a[pos], a[j]];
                    shifts++;
                    pos = j;
                    j--;
                    R.push([bars(a, sortedUpTo(i, { [pos]: 'act' }), [{ i: pos, label: 'key', tone: 'act' }])],
                        `${a[pos + 1].v} > ${key} → dịch ${a[pos + 1].v} sang phải một ô.`, 5, { i, key, j, 'so sánh': cmp, 'dịch': shifts });
                }
                R.push([bars(a, sortedUpTo(i))], `Đặt key = ${key} vào vị trí ${pos}. Đoạn a[0..${i}] đã có thứ tự.`, 7, { i, key, j, 'so sánh': cmp, 'dịch': shifts });
            }
            R.push([bars(a, allDone(n))], `Hoàn tất: ${cmp} phép so sánh, ${shifts} lần dịch. Mảng gần như có thứ tự sẽ chạy rất nhanh.`, -1, { 'so sánh': cmp, 'dịch': shifts });
            return R.frames;
        }
    };

    /* ---------------- Merge sort ---------------- */
    V.mergeSort = {
        legend: [['cmp', 'Đang so sánh'], ['mark', 'Đoạn đã trộn xong'], ['done', 'Hoàn tất']],
        inputs: [SORT_INPUT],
        code: [
            'def merge_sort(a, lo, hi):',
            '    if lo >= hi: return',
            '    mid = (lo + hi) // 2',
            '    merge_sort(a, lo, mid)',
            '    merge_sort(a, mid + 1, hi)',
            '    merge(a, lo, mid, hi)',
            '',
            'def merge(a, lo, mid, hi):',
            '    L, R = a[lo:mid + 1], a[mid + 1:hi + 1]',
            '    i = j = 0; k = lo',
            '    while i < len(L) and j < len(R):',
            '        if L[i] <= R[j]: a[k] = L[i]; i += 1',
            '        else:            a[k] = R[j]; j += 1',
            '        k += 1',
            '    # chép phần còn lại của L hoặc R vào a'
        ],
        run({ arr }) {
            const a = tag(arr), n = a.length, R = new Rec();
            let cmp = 0, depth = 0;
            const sortedRanges = [];
            const markState = (extra) => {
                const s = {};
                sortedRanges.forEach(([l, r]) => { for (let t = l; t <= r; t++) s[t] = 'mark'; });
                return Object.assign(s, extra || {});
            };
            const pushSplit = (lo, mid, hi) => {
                R.push([bars(a, markState(), [], {
                    ranges: [{ a: lo, b: mid, label: 'trái', tone: 'act', key: 'L' }, { a: mid + 1, b: hi, label: 'phải', tone: 'pivot', key: 'R' }]
                })], `Chia đoạn [${lo}..${hi}] thành [${lo}..${mid}] và [${mid + 1}..${hi}]`, 2, { lo, mid, hi, 'độ sâu': depth, 'so sánh': cmp });
            };
            const sort = (lo, hi) => {
                if (lo >= hi) return;
                const mid = (lo + hi) >> 1;
                depth++;
                pushSplit(lo, mid, hi);
                sort(lo, mid);
                sort(mid + 1, hi);
                // merge by moving items into place (keeps ids so bars glide)
                let leftRem = mid - lo + 1, rightRem = hi - mid;
                let k = lo;
                const ranges = [{ a: lo, b: hi, label: `trộn [${lo}..${hi}]`, tone: 'act', key: 'L' }];
                while (leftRem > 0 && rightRem > 0) {
                    const li = k, ri = k + leftRem;
                    cmp++;
                    R.push([bars(a, markState({ [li]: 'cmp', [ri]: 'cmp' }), [{ i: li, label: 'L[i]' }, { i: ri, label: 'R[j]', tone: 'pivot' }, { i: k, label: 'k', tone: 'mark' }], { ranges })],
                        `So sánh đầu hai nửa: ${a[li].v} và ${a[ri].v}`, 10, { lo, mid, hi, k, 'so sánh': cmp });
                    if (a[li].v <= a[ri].v) {
                        leftRem--;
                        R.push([bars(a, markState({ [k]: 'done' }), [{ i: k, label: 'k', tone: 'mark' }], { ranges })],
                            `${a[k].v} ≤ ${a[ri].v} → lấy ${a[k].v} từ nửa trái (giữ nguyên chỗ).`, 11, { lo, mid, hi, k, 'so sánh': cmp });
                    } else {
                        const item = a.splice(ri, 1)[0];
                        a.splice(k, 0, item);
                        rightRem--;
                        R.push([bars(a, markState({ [k]: 'done' }), [{ i: k, label: 'k', tone: 'mark' }], { ranges })],
                            `${item.v} < ${a[k + 1].v} → lấy ${item.v} từ nửa phải, chèn vào vị trí ${k}.`, 12, { lo, mid, hi, k, 'so sánh': cmp });
                    }
                    k++;
                }
                for (let t = sortedRanges.length - 1; t >= 0; t--) {
                    const [l, r] = sortedRanges[t];
                    if (l >= lo && r <= hi) sortedRanges.splice(t, 1);
                }
                sortedRanges.push([lo, hi]);
                R.push([bars(a, markState(), [], { ranges })], `Phần còn lại đã có thứ tự → đoạn [${lo}..${hi}] đã được trộn xong.`, 14, { lo, mid, hi, 'so sánh': cmp });
                depth--;
            };
            R.push([bars(a)], 'Chia để trị: chia đôi mảng đến khi mỗi đoạn chỉ còn 1 phần tử, rồi trộn các đoạn đã sắp xếp lại với nhau.', 0, { n });
            sort(0, n - 1);
            R.push([bars(a, allDone(n))], `Hoàn tất với ${cmp} phép so sánh — luôn O(n log n) dù dữ liệu thế nào.`, -1, { 'so sánh': cmp });
            return R.frames;
        }
    };

    /* ---------------- Quick sort (Lomuto) ---------------- */
    V.quickSort = {
        legend: [['pivot', 'Chốt (pivot)'], ['cmp', 'Đang xét a[j]'], ['mark', 'Vùng < pivot'], ['swap', 'Hoán đổi'], ['done', 'Đã đúng vị trí']],
        inputs: [SORT_INPUT],
        code: [
            'def quick_sort(a, lo, hi):',
            '    if lo >= hi: return',
            '    p = partition(a, lo, hi)',
            '    quick_sort(a, lo, p - 1)',
            '    quick_sort(a, p + 1, hi)',
            '',
            'def partition(a, lo, hi):',
            '    pivot = a[hi]',
            '    i = lo                # ranh giới vùng < pivot',
            '    for j in range(lo, hi):',
            '        if a[j] < pivot:',
            '            a[i], a[j] = a[j], a[i]',
            '            i += 1',
            '    a[i], a[hi] = a[hi], a[i]',
            '    return i'
        ],
        run({ arr }) {
            const a = tag(arr), n = a.length, R = new Rec(), done = new Set();
            let cmp = 0, sw = 0;
            const st = (extra) => withSet(done, 'done', extra);
            const qs = (lo, hi) => {
                if (lo > hi) return;
                if (lo === hi) {
                    done.add(lo);
                    R.push([bars(a, st(), [], { ranges: [{ a: lo, b: hi, label: '1 phần tử', tone: 'act', key: 'rg' }] })], `Đoạn [${lo}..${hi}] chỉ có 1 phần tử → đã đúng vị trí.`, 1, { lo, hi });
                    return;
                }
                const ranges = [{ a: lo, b: hi, label: `phân hoạch [${lo}..${hi}]`, tone: 'act', key: 'rg' }];
                const pivot = a[hi].v;
                let i = lo;
                const region = (extra) => {
                    const s = st(extra);
                    for (let t = lo; t < i; t++) if (!s[t] || s[t] === 'done') s[t] = 'mark';
                    s[hi] = s[hi] === 'swap' ? 'swap' : 'pivot';
                    return Object.assign(s, extra || {});
                };
                R.push([bars(a, region(), [{ i: lo, label: 'i', tone: 'mark' }], { ranges })], `Chọn pivot = ${pivot} (phần tử cuối đoạn [${lo}..${hi}]).`, 7, { lo, hi, pivot, i, 'so sánh': cmp, 'hoán đổi': sw });
                for (let j = lo; j < hi; j++) {
                    cmp++;
                    R.push([bars(a, region({ [j]: 'cmp' }), [{ i, label: 'i', tone: 'mark' }, { i: j, label: 'j', tone: 'cmp' }], { ranges })],
                        `a[${j}] = ${a[j].v} ${a[j].v < pivot ? '<' : '≥'} pivot ${pivot}`, 10, { lo, hi, pivot, i, j, 'so sánh': cmp, 'hoán đổi': sw });
                    if (a[j].v < pivot) {
                        if (i !== j) {
                            [a[i], a[j]] = [a[j], a[i]];
                            sw++;
                            R.push([bars(a, region({ [i]: 'swap', [j]: 'swap' }), [{ i, label: 'i', tone: 'mark' }, { i: j, label: 'j', tone: 'cmp' }], { ranges })],
                                `Đưa ${a[i].v} vào vùng "< pivot" (hoán đổi a[${i}] ↔ a[${j}]).`, 11, { lo, hi, pivot, i, j, 'so sánh': cmp, 'hoán đổi': sw });
                        }
                        i++;
                    }
                }
                [a[i], a[hi]] = [a[hi], a[i]];
                sw++;
                done.add(i);
                R.push([bars(a, st({ [i]: 'done' }), [{ i, label: 'p', tone: 'done' }], { ranges })],
                    `Đặt pivot ${pivot} vào vị trí ${i}: bên trái đều nhỏ hơn, bên phải đều ≥ ${pivot}.`, 13, { lo, hi, pivot, p: i, 'so sánh': cmp, 'hoán đổi': sw });
                qs(lo, i - 1);
                qs(i + 1, hi);
            };
            R.push([bars(a)], 'Chọn một pivot, phân hoạch mảng thành hai phía rồi đệ quy từng phía.', 0, { n });
            qs(0, n - 1);
            R.push([bars(a, allDone(n))], `Hoàn tất: ${cmp} phép so sánh, ${sw} lần hoán đổi.`, -1, { 'so sánh': cmp, 'hoán đổi': sw });
            return R.frames;
        }
    };

    /* ---------------- Heap sort (bars + heap tree) ---------------- */
    function heapTree(a, size, st) {
        const nodes = {};
        for (let i = 0; i < size; i++) {
            nodes[a[i].id] = {
                label: a[i].v,
                left: 2 * i + 1 < size ? a[2 * i + 1].id : null,
                right: 2 * i + 2 < size ? a[2 * i + 2].id : null,
                s: st[i] || ''
            };
        }
        return { type: 'tree', key: 'heap', title: 'Max-heap (nhìn dạng cây)', binary: true, root: size ? a[0].id : null, nodes, levelH: 56 };
    }

    V.heapSort = {
        legend: [['act', 'Nút đang vun'], ['cmp', 'Con lớn hơn'], ['swap', 'Hoán đổi'], ['done', 'Đã về đúng chỗ']],
        inputs: [Object.assign({}, SORT_INPUT, { maxLen: 12 })],
        code: [
            'def heap_sort(a):',
            '    n = len(a)',
            '    for i in range(n // 2 - 1, -1, -1):   # xây max-heap',
            '        sift_down(a, i, n)',
            '    for end in range(n - 1, 0, -1):',
            '        a[0], a[end] = a[end], a[0]      # đưa max về cuối',
            '        sift_down(a, 0, end)',
            '',
            'def sift_down(a, i, n):',
            '    while 2 * i + 1 < n:',
            '        c = 2 * i + 1',
            '        if c + 1 < n and a[c + 1] > a[c]: c += 1',
            '        if a[i] >= a[c]: break',
            '        a[i], a[c] = a[c], a[i]',
            '        i = c'
        ],
        run({ arr }) {
            const a = tag(arr), n = a.length, R = new Rec();
            let size = n;
            const snap = (st, msg, line, vars) => {
                const s = Object.assign({}, st);
                for (let t = size; t < n; t++) s[t] = 'done';
                R.push([bars(a, s, [], { height: 130, title: 'Mảng' }), heapTree(a, size, s)], msg, line, vars);
            };
            const sift = (i, phase) => {
                while (2 * i + 1 < size) {
                    let c = 2 * i + 1;
                    if (c + 1 < size && a[c + 1].v > a[c].v) c++;
                    snap({ [i]: 'act', [c]: 'cmp' }, `${phase}: so sánh ${a[i].v} với con lớn hơn ${a[c].v}`, 11, { i, c, 'kích thước heap': size });
                    if (a[i].v >= a[c].v) {
                        snap({ [i]: 'act' }, `${a[i].v} ≥ ${a[c].v} → thỏa tính chất heap, dừng.`, 12, { i, 'kích thước heap': size });
                        return;
                    }
                    [a[i], a[c]] = [a[c], a[i]];
                    snap({ [i]: 'swap', [c]: 'swap' }, `Hoán đổi để giá trị lớn hơn (${a[i].v}) lên trên.`, 13, { i, c, 'kích thước heap': size });
                    i = c;
                }
            };
            snap({}, 'Nhìn mảng như một cây nhị phân hoàn chỉnh: con của i là 2i+1 và 2i+2.', 1, { n });
            for (let i = (n >> 1) - 1; i >= 0; i--) sift(i, 'Xây heap');
            snap({ 0: 'act' }, `Đã có max-heap: phần tử lớn nhất (${a[0].v}) ở gốc.`, 4, { 'kích thước heap': size });
            for (let end = n - 1; end > 0; end--) {
                [a[0], a[end]] = [a[end], a[0]];
                snap({ 0: 'swap', [end]: 'swap' }, `Đưa max ${a[end].v} về cuối (vị trí ${end}).`, 5, { end, 'kích thước heap': size });
                size = end;
                sift(0, 'Vun lại');
            }
            size = 0;
            snap({}, 'Hoàn tất: O(n log n) trong mọi trường hợp và chỉ dùng O(1) bộ nhớ phụ.', -1, {});
            return R.frames;
        }
    };

    /* ---------------- Counting sort ---------------- */
    V.countingSort = {
        legend: [['act', 'Đang xử lý'], ['cmp', 'Ô đếm được cập nhật'], ['done', 'Đã đặt vào kết quả']],
        inputs: [{ key: 'arr', label: 'Mảng (0…9)', type: 'nums', value: '4, 2, 2, 8, 3, 3, 1, 7, 3', min: 0, max: 9, minLen: 2, maxLen: 12, random: () => U.randArr(10, 0, 9) }],
        code: [
            'def counting_sort(a, k):',
            '    cnt = [0] * (k + 1)',
            '    for x in a: cnt[x] += 1',
            '    for v in range(1, k + 1):',
            '        cnt[v] += cnt[v - 1]   # vị trí kết thúc của v',
            '    out = [0] * len(a)',
            '    for x in reversed(a):      # duyệt ngược → ổn định',
            '        cnt[x] -= 1',
            '        out[cnt[x]] = x',
            '    return out'
        ],
        run({ arr }) {
            const R = new Rec();
            const k = Math.max(...arr);
            const cnt = new Array(k + 1).fill(0);
            const out = new Array(arr.length).fill(null);
            const outDone = new Set();
            const panels = (inSt, cSt, oSt, ptrs) => [
                { type: 'array', key: 'in', title: 'Mảng vào a', items: arr.map((v, i) => ({ id: 'a' + i, v, s: inSt[i] })), pointers: ptrs || [] },
                { type: 'array', key: 'cnt', title: 'Mảng đếm cnt (chỉ số = giá trị)', items: cnt.map((v, i) => ({ id: 'c' + i, v, s: cSt[i] })) },
                { type: 'array', key: 'out', title: 'Kết quả out', items: out.map((v, i) => ({ id: 'o' + i, t: v == null ? '' : v, s: oSt[i] || (outDone.has(i) ? 'done' : '') })) }
            ];
            R.push(panels({}, {}, {}), `Giá trị lớn nhất k = ${k} → tạo mảng đếm gồm ${k + 1} ô.`, 1, { k });
            arr.forEach((x, i) => {
                cnt[x]++;
                R.push(panels({ [i]: 'act' }, { [x]: 'cmp' }, {}, [{ i, label: 'x' }]), `Đếm: gặp ${x} → cnt[${x}] = ${cnt[x]}`, 2, { x, [`cnt[${x}]`]: cnt[x] });
            });
            for (let v = 1; v <= k; v++) {
                cnt[v] += cnt[v - 1];
                R.push(panels({}, { [v]: 'cmp', [v - 1]: 'act' }, {}), `Cộng dồn: cnt[${v}] = ${cnt[v]} (số phần tử ≤ ${v})`, 4, { v, [`cnt[${v}]`]: cnt[v] });
            }
            for (let i = arr.length - 1; i >= 0; i--) {
                const x = arr[i];
                cnt[x]--;
                out[cnt[x]] = x;
                outDone.add(cnt[x]);
                R.push(panels({ [i]: 'act' }, { [x]: 'cmp' }, { [cnt[x]]: 'act' }, [{ i, label: 'x' }]), `Đặt ${x} vào out[${cnt[x]}] (duyệt ngược để giữ thứ tự các phần tử bằng nhau).`, 8, { x, vị_trí: cnt[x] });
            }
            R.push(panels({}, {}, {}), `Hoàn tất trong O(n + k) — không cần một phép so sánh nào.`, 9, { n: arr.length, k });
            return R.frames;
        }
    };

    /* ---------------- Radix sort (LSD) ---------------- */
    V.radixSort = {
        legend: [['act', 'Đang phân phối'], ['new', 'Vừa vào xô']],
        inputs: [{ key: 'arr', label: 'Mảng (0…999)', type: 'nums', value: '170, 45, 75, 90, 802, 24, 2, 66', min: 0, max: 999, minLen: 2, maxLen: 10, random: () => U.randArr(8, 1, 999) }],
        code: [
            'def radix_sort(a):',
            '    exp = 1',
            '    while max(a) // exp > 0:',
            '        buckets = [[] for _ in range(10)]',
            '        for x in a:',
            '            buckets[(x // exp) % 10].append(x)',
            '        a = [x for b in buckets for x in b]',
            '        exp *= 10',
            '    return a'
        ],
        run({ arr }) {
            const R = new Rec();
            let a = arr.map((v, i) => ({ id: 'r' + i, v }));
            const mx = Math.max(...arr);
            const names = { 1: 'hàng đơn vị', 10: 'hàng chục', 100: 'hàng trăm' };
            const arrP = (st) => ({ type: 'array', key: 'a', title: 'Mảng', items: a.map((it, i) => ({ id: it.id, v: it.v, s: st[i] || '' })) });
            const bkP = (b, hi, nw) => ({
                type: 'buckets', key: 'b', title: 'Xô theo chữ số (0–9)',
                buckets: b.map((items, d) => ({ label: String(d), s: d === hi ? 'act' : '', items: items.map((it) => ({ t: it.v, s: it.id === nw ? 'new' : '' })) }))
            });
            R.push([arrP({})], 'Sắp xếp theo từng chữ số, từ hàng đơn vị lên cao — mỗi lượt phân phối vào 10 xô rồi gom lại theo thứ tự.', 1, { max: mx });
            for (let exp = 1; Math.floor(mx / exp) > 0; exp *= 10) {
                const b = Array.from({ length: 10 }, () => []);
                a.forEach((it, i) => {
                    const d = Math.floor(it.v / exp) % 10;
                    b[d].push(it);
                    R.push([arrP({ [i]: 'act' }), bkP(b, d, it.id)], `${it.v}: chữ số ${names[exp] || 'exp=' + exp} là ${d} → vào xô ${d}`, 5, { exp, 'chữ số': d });
                });
                a = [].concat(...b);
                R.push([arrP({}), bkP(b, -1, null)], `Gom các xô theo thứ tự 0→9. Mảng giờ đã có thứ tự theo ${names[exp] || 'chữ số này'} (và các hàng thấp hơn).`, 6, { exp });
            }
            R.push([{ type: 'array', key: 'a', title: 'Kết quả', items: a.map((it) => ({ id: it.id, v: it.v, s: 'done' })) }], 'Hoàn tất: O(d·(n + 10)) với d là số chữ số.', 8, {});
            return R.frames;
        }
    };

    /* ---------------- Shell sort ---------------- */
    V.shellSort = {
        legend: [['cmp', 'Cặp cách nhau gap'], ['swap', 'Hoán đổi'], ['done', 'Hoàn tất']],
        inputs: [SORT_INPUT],
        code: [
            'def shell_sort(a):',
            '    gap = len(a) // 2',
            '    while gap > 0:',
            '        for i in range(gap, len(a)):',
            '            j = i',
            '            while j >= gap and a[j - gap] > a[j]:',
            '                a[j], a[j - gap] = a[j - gap], a[j]',
            '                j -= gap',
            '        gap //= 2'
        ],
        run({ arr }) {
            const a = tag(arr), n = a.length, R = new Rec();
            let cmp = 0, sw = 0;
            R.push([bars(a)], 'Sắp xếp chèn nhưng so sánh các phần tử cách xa nhau (gap) trước, rồi thu nhỏ gap dần về 1.', 1, {});
            for (let gap = n >> 1; gap > 0; gap >>= 1) {
                R.push([bars(a)], `gap = ${gap}: sắp xếp chèn trên các dãy con cách nhau ${gap} phần tử.`, 2, { gap, 'so sánh': cmp, 'hoán đổi': sw });
                for (let i = gap; i < n; i++) {
                    let j = i;
                    while (j >= gap) {
                        cmp++;
                        R.push([bars(a, { [j]: 'cmp', [j - gap]: 'cmp' }, [{ i: j - gap, label: 'j-gap', tone: 'cmp' }, { i: j, label: 'j' }])], `So sánh a[${j - gap}] = ${a[j - gap].v} và a[${j}] = ${a[j].v}`, 5, { gap, i, j, 'so sánh': cmp, 'hoán đổi': sw });
                        if (a[j - gap].v <= a[j].v) break;
                        [a[j], a[j - gap]] = [a[j - gap], a[j]];
                        sw++;
                        R.push([bars(a, { [j]: 'swap', [j - gap]: 'swap' })], `Hoán đổi — phần tử nhỏ nhảy về trái ${gap} bước một lần.`, 6, { gap, i, j, 'so sánh': cmp, 'hoán đổi': sw });
                        j -= gap;
                    }
                }
            }
            R.push([bars(a, allDone(n))], `Hoàn tất: ${cmp} phép so sánh, ${sw} lần hoán đổi.`, -1, { 'so sánh': cmp, 'hoán đổi': sw });
            return R.frames;
        }
    };

    /* ---------------- Sorting race ---------------- */
    V.sortRace = {
        legend: [['cmp', 'So sánh'], ['swap', 'Hoán đổi / di chuyển'], ['done', 'Xong']],
        inputs: [
            { key: 'arr', label: 'Mảng', type: 'nums', value: '42, 7, 91, 23, 5, 64, 38, 12, 77, 50, 3, 29', min: 1, max: 99, minLen: 2, maxLen: 14, random: () => U.randArr(12, 3, 99) },
            { key: 'shape', label: 'Kiểu dữ liệu', type: 'select', value: 'as-is', options: [['as-is', 'Như đã nhập'], ['sorted', 'Gần như đã sắp xếp'], ['reversed', 'Sắp xếp ngược']] }
        ],
        run({ arr, shape }) {
            let data = arr.slice();
            if (shape === 'sorted') {
                data.sort((x, y) => x - y);
                if (data.length > 3) [data[1], data[2]] = [data[2], data[1]];
            } else if (shape === 'reversed') data.sort((x, y) => y - x);
            const algos = [['bubbleSort', 'Bubble'], ['selectionSort', 'Selection'], ['insertionSort', 'Insertion'], ['mergeSort', 'Merge'], ['quickSort', 'Quick']];
            const runs = algos.map(([k, name]) => ({
                name,
                frames: V[k].run({ arr: data }).map((f) => f.panels.find((p) => p.key === 'arr'))
            }));
            const total = Math.max(...runs.map((r) => r.frames.length));
            const R = new Rec();
            for (let t = 0; t < total; t++) {
                const vars = {};
                const panels = runs.map((r) => {
                    const idx = Math.min(t, r.frames.length - 1);
                    const finished = t >= r.frames.length - 1;
                    vars[r.name] = finished ? `✓ xong sau ${r.frames.length} bước` : `${idx + 1} / ${r.frames.length}`;
                    return Object.assign({}, r.frames[idx], {
                        key: 'race-' + r.name, pointers: [], ranges: [], height: 84, span: 3,
                        title: `${r.name}${finished ? ' ✓' : ''}`, showIndex: false
                    });
                });
                const leaders = runs.filter((r) => t >= r.frames.length - 1).map((r) => r.name);
                R.push(panels, `Bước ${t + 1}: mỗi bước là một thao tác (so sánh hoặc di chuyển).` + (leaders.length ? ` Đã xong: <b>${leaders.join(', ')}</b>.` : ''), -1, vars);
            }
            return R.frames;
        }
    };

    /* ---------------- Linear search ---------------- */
    V.linearSearch = {
        legend: [['cmp', 'Đang kiểm tra'], ['rej', 'Không khớp'], ['hit', 'Tìm thấy']],
        inputs: [
            { key: 'arr', label: 'Mảng', type: 'nums', value: '14, 3, 27, 9, 41, 5, 18, 33', maxLen: 14, random: () => U.randArr(9, 1, 50) },
            { key: 'x', label: 'Cần tìm', type: 'num', value: '41', min: -999, max: 999 }
        ],
        code: [
            'def linear_search(a, x):',
            '    for i in range(len(a)):',
            '        if a[i] == x:',
            '            return i',
            '    return -1'
        ],
        run({ arr, x }) {
            const R = new Rec();
            const st = {};
            const P = (ptr) => [{ type: 'array', key: 'a', items: arr.map((v, i) => ({ id: 'l' + i, v, s: st[i] || '' })), pointers: ptr }];
            R.push(P([]), `Tìm ${x} bằng cách đi lần lượt từng phần tử từ trái sang phải.`, 0, { x });
            for (let i = 0; i < arr.length; i++) {
                st[i] = 'cmp';
                R.push(P([{ i, label: 'i' }]), `a[${i}] = ${arr[i]} ${arr[i] === x ? '==' : '≠'} ${x}`, 2, { x, i, 'số lần so': i + 1 });
                if (arr[i] === x) {
                    st[i] = 'hit';
                    R.push(P([{ i, label: 'i', tone: 'done' }]), `Tìm thấy ${x} tại vị trí ${i} sau ${i + 1} lần so sánh.`, 3, { x, i, 'số lần so': i + 1 });
                    return R.frames;
                }
                st[i] = 'rej';
            }
            R.push(P([]), `Đã duyệt hết ${arr.length} phần tử mà không thấy ${x} → trả về -1. Trường hợp xấu nhất: O(n).`, 4, { x, 'số lần so': arr.length });
            return R.frames;
        }
    };

    /* ---------------- Binary search ---------------- */
    V.binarySearch = {
        legend: [['cmp', 'Phần tử giữa (mid)'], ['dim', 'Đã loại'], ['hit', 'Tìm thấy']],
        inputs: [
            { key: 'arr', label: 'Mảng (sẽ tự sắp xếp)', type: 'nums', value: '3, 8, 12, 17, 23, 31, 38, 45, 52, 60, 71, 88', maxLen: 16, random: () => U.randDistinct(13, 1, 99).sort((p, q) => p - q) },
            { key: 'x', label: 'Cần tìm', type: 'num', value: '45', min: -999, max: 999 }
        ],
        code: [
            'def binary_search(a, x):',
            '    lo, hi = 0, len(a) - 1',
            '    while lo <= hi:',
            '        mid = (lo + hi) // 2',
            '        if a[mid] == x:',
            '            return mid',
            '        elif a[mid] < x:',
            '            lo = mid + 1     # bỏ nửa trái',
            '        else:',
            '            hi = mid - 1     # bỏ nửa phải',
            '    return -1'
        ],
        run({ arr, x }) {
            const a = arr.slice().sort((p, q) => p - q);
            const R = new Rec();
            let lo = 0, hi = a.length - 1, steps = 0;
            const P = (mid, found) => [{
                type: 'array', key: 'a',
                items: a.map((v, i) => ({ id: 'b' + i, v, s: found === i ? 'hit' : (i < lo || i > hi) ? 'dim' : i === mid ? 'cmp' : '' })),
                pointers: [{ i: lo, label: 'lo', tone: 'act' }, { i: hi, label: 'hi', tone: 'pivot' }].concat(mid != null ? [{ i: mid, label: 'mid', tone: 'cmp' }] : []),
                ranges: lo <= hi ? [{ a: lo, b: hi, label: 'vùng tìm kiếm', tone: 'act', key: 'rg' }] : []
            }];
            R.push(P(null), `Mảng đã sắp xếp. Tìm ${x}: mỗi bước so với phần tử giữa rồi bỏ đi một nửa.`, 1, { x, lo, hi });
            while (lo <= hi) {
                const mid = (lo + hi) >> 1;
                steps++;
                R.push(P(mid), `mid = (${lo} + ${hi}) // 2 = ${mid}, a[mid] = ${a[mid]}`, 3, { x, lo, hi, mid, 'bước': steps });
                if (a[mid] === x) {
                    R.push(P(mid, mid), `a[${mid}] = ${x} → tìm thấy sau ${steps} bước (tìm tuần tự có thể cần ${a.length}).`, 5, { x, mid, 'bước': steps });
                    return R.frames;
                }
                if (a[mid] < x) {
                    lo = mid + 1;
                    R.push(P(null), `${a[mid]} < ${x} → đáp án chỉ có thể ở bên phải: lo = ${lo}`, 7, { x, lo, hi, 'bước': steps });
                } else {
                    hi = mid - 1;
                    R.push(P(null), `${a[mid]} > ${x} → đáp án chỉ có thể ở bên trái: hi = ${hi}`, 9, { x, lo, hi, 'bước': steps });
                }
            }
            R.push(P(null), `lo > hi → vùng tìm kiếm rỗng, không có ${x}. Chỉ mất ${steps} bước ≈ log₂(${a.length}).`, 10, { x, lo, hi, 'bước': steps });
            return R.frames;
        }
    };

    /* ---------------- Binary search on the answer (Koko) ---------------- */
    V.bsAnswer = {
        legend: [['cmp', 'Tốc độ đang thử'], ['done', 'Đủ nhanh'], ['rej', 'Quá chậm'], ['dim', 'Đã loại']],
        inputs: [
            { key: 'piles', label: 'Các đống chuối', type: 'nums', value: '3, 6, 7, 11', min: 1, max: 20, maxLen: 8, random: () => U.randArr(5, 2, 20) },
            { key: 'h', label: 'Số giờ h', type: 'num', value: '8', min: 1, max: 40 }
        ],
        code: [
            'def min_eating_speed(piles, h):',
            '    lo, hi = 1, max(piles)',
            '    while lo < hi:',
            '        k = (lo + hi) // 2',
            '        hours = sum((p + k - 1) // k for p in piles)',
            '        if hours <= h:',
            '            hi = k        # đủ nhanh → thử chậm hơn',
            '        else:',
            '            lo = k + 1    # quá chậm → phải nhanh hơn',
            '    return lo'
        ],
        run({ piles, h }) {
            const R = new Rec();
            if (h < piles.length) throw new Error('h phải ≥ số đống (mỗi giờ ăn tối đa 1 đống).');
            const mx = Math.max(...piles);
            const verdict = {};
            let lo = 1, hi = mx;
            const hoursAt = (k) => piles.reduce((s, p) => s + Math.ceil(p / k), 0);
            const P = (k) => [
                {
                    type: 'array', key: 'p', title: k ? `Các đống chuối — số giờ cần với tốc độ k = ${k}` : 'Các đống chuối',
                    items: piles.map((v, i) => ({ id: 'p' + i, v })),
                    indexLabels: piles.map((p) => (k ? Math.ceil(p / k) + ' giờ' : ''))
                },
                {
                    type: 'array', key: 'k', title: 'Không gian đáp án: tốc độ k = 1 … max(piles)',
                    items: Array.from({ length: mx }, (_, i) => {
                        const kk = i + 1;
                        let s = verdict[kk] || '';
                        if (kk === k) s = 'cmp';
                        else if (!s && (kk < lo || kk > hi)) s = 'dim';
                        return { id: 'k' + kk, v: kk, s };
                    }),
                    showIndex: false,
                    pointers: [{ i: lo - 1, label: 'lo', tone: 'act' }, { i: hi - 1, label: 'hi', tone: 'pivot' }]
                }
            ];
            R.push(P(0), `Koko có ${h} giờ. Tìm tốc độ k nhỏ nhất để ăn hết. Nếu k chạy được thì mọi k lớn hơn cũng chạy được → hàm "đủ nhanh" đơn điệu → tìm nhị phân trên k.`, 1, { h, lo, hi });
            while (lo < hi) {
                const k = (lo + hi) >> 1;
                const hours = hoursAt(k);
                R.push(P(k), `Thử k = ${k}: cần ${hours} giờ ${hours <= h ? '≤' : '>'} ${h}`, 4, { h, lo, hi, k, 'giờ cần': hours });
                if (hours <= h) {
                    for (let t = k; t <= mx; t++) verdict[t] = 'done';
                    hi = k;
                    R.push(P(0), `Đủ nhanh → đáp án ≤ ${k}, thu hẹp hi = ${k}.`, 6, { h, lo, hi });
                } else {
                    for (let t = 1; t <= k; t++) verdict[t] = 'rej';
                    lo = k + 1;
                    R.push(P(0), `Quá chậm → đáp án > ${k}, thu hẹp lo = ${lo}.`, 8, { h, lo, hi });
                }
            }
            verdict[lo] = 'hit';
            R.push(P(0), `lo = hi = ${lo} → tốc độ nhỏ nhất là <b>${lo}</b> (cần ${hoursAt(lo)} giờ). Chỉ thử ~log₂(${mx}) giá trị thay vì ${mx}.`, 9, { 'đáp án': lo });
            return R.frames;
        }
    };
})();
