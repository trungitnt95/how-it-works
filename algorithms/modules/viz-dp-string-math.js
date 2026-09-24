/* Visualizers: dynamic programming, strings, math */
(function () {
    'use strict';
    const Algo = window.Algo;
    const V = Algo.viz;
    const Rec = Algo.Rec;
    const U = Algo.util;

    const WORDS = ['kitten', 'sitting', 'abcbdab', 'bdcaba', 'horse', 'ros', 'sunday', 'saturday', 'intent', 'execute', 'algo', 'logic'];

    /* ---------------- Fibonacci: naive vs memo vs table ---------------- */
    V.fibMemo = {
        legend: [['act', 'Đang tính'], ['done', 'Đã có kết quả'], ['hit', 'Lấy từ memo (không gọi lại)'], ['swap', 'Tính lặp lại (lãng phí)']],
        inputs: [
            { key: 'mode', label: 'Cách làm', type: 'select', value: 'naive', options: [['naive', 'Đệ quy thuần'], ['memo', 'Đệ quy + ghi nhớ (top-down)'], ['tab', 'Lập bảng (bottom-up)']] },
            { key: 'n', label: 'n', type: 'num', value: '6', min: 2, max: 7 }
        ],
        code: [
            'memo = {}',
            'def fib(n):',
            '    if n <= 1: return n',
            '    if n in memo: return memo[n]     # đã tính → dùng lại',
            '    memo[n] = fib(n - 1) + fib(n - 2)',
            '    return memo[n]',
            '',
            'def fib_table(n):                    # bottom-up',
            '    dp = [0, 1] + [0] * (n - 1)',
            '    for i in range(2, n + 1):',
            '        dp[i] = dp[i - 1] + dp[i - 2]',
            '    return dp[n]'
        ],
        run({ mode, n }) {
            const R = new Rec();
            if (mode === 'tab') {
                const dp = new Array(n + 1).fill(null);
                dp[0] = 0;
                dp[1] = 1;
                const show = (st, msg, line) => R.push([{ type: 'array', key: 'dp', title: 'dp[i] = fib(i)', items: dp.map((v, i) => ({ id: 'd' + i, t: v == null ? '' : v, s: st[i] || (v != null ? 'done' : '') })) }], msg, line, { n });
                show({}, 'Lập bảng từ nhỏ đến lớn: mỗi ô chỉ cần 2 ô ngay trước nó.', 8);
                for (let i = 2; i <= n; i++) {
                    dp[i] = dp[i - 1] + dp[i - 2];
                    show({ [i]: 'act', [i - 1]: 'cmp', [i - 2]: 'cmp' }, `dp[${i}] = dp[${i - 1}] + dp[${i - 2}] = ${dp[i - 1]} + ${dp[i - 2]} = ${dp[i]}`, 10);
                }
                show({}, `fib(${n}) = <b>${dp[n]}</b> với đúng ${n - 1} phép cộng: O(n) thời gian. Chỉ giữ 2 biến là đủ → O(1) bộ nhớ.`, 11);
                return R.frames;
            }
            const nodes = {};
            const memo = {};
            const computedOnce = {};
            let nid = 0, calls = 0;
            const show = (msg, line) => R.push([
                { type: 'tree', key: 't', title: 'Cây lời gọi', nodes, root: 'f0', r: n >= 7 ? 12 : 15, levelH: 50, gap: 60 },
                { type: 'array', key: 'm', title: mode === 'memo' ? 'memo[n]' : 'Số lần fib(k) bị gọi', items: Array.from({ length: n + 1 }, (_, k) => ({ id: 'm' + k, t: mode === 'memo' ? (memo[k] != null ? memo[k] : '') : (computedOnce[k] || 0), s: mode === 'memo' ? (memo[k] != null ? 'done' : '') : (computedOnce[k] > 1 ? 'swap' : '') })) }
            ], msg, line, { 'số lời gọi': calls });
            const fib = (k, id) => {
                calls++;
                computedOnce[k] = (computedOnce[k] || 0) + 1;
                nodes[id].s = 'act';
                if (k <= 1) {
                    nodes[id].s = 'done';
                    nodes[id].sub = '=' + k;
                    show(`fib(${k}) = ${k} (trường hợp cơ sở).`, 2);
                    return k;
                }
                if (mode === 'memo' && memo[k] != null) {
                    nodes[id].s = 'hit';
                    nodes[id].sub = '=' + memo[k];
                    show(`fib(${k}) đã có trong memo = ${memo[k]} → trả về ngay, không gọi tiếp.`, 3);
                    return memo[k];
                }
                if (mode === 'naive' && computedOnce[k] > 1) nodes[id].s = 'swap';
                show(mode === 'naive' && computedOnce[k] > 1 ? `fib(${k}) lại bị tính lần thứ ${computedOnce[k]}!` : `Gọi fib(${k}) → cần fib(${k - 1}) và fib(${k - 2}).`, 4);
                const a = 'f' + (++nid);
                nodes[a] = { label: k - 1, children: [], s: '' };
                nodes[id].children.push(a);
                const x = fib(k - 1, a);
                const b = 'f' + (++nid);
                nodes[b] = { label: k - 2, children: [], s: '' };
                nodes[id].children.push(b);
                const y = fib(k - 2, b);
                const r = x + y;
                if (mode === 'memo') memo[k] = r;
                nodes[id].s = 'done';
                nodes[id].sub = '=' + r;
                show(`fib(${k}) = ${x} + ${y} = ${r}` + (mode === 'memo' ? ' → lưu vào memo.' : '.'), 4);
                return r;
            };
            nodes.f0 = { label: n, children: [], s: '' };
            const ans = fib(n, 'f0');
            show(mode === 'memo'
                ? `fib(${n}) = <b>${ans}</b> với ${calls} lời gọi — mỗi giá trị chỉ tính 1 lần: O(n).`
                : `fib(${n}) = <b>${ans}</b> nhưng tốn ${calls} lời gọi — tăng theo cấp số nhân O(2ⁿ) vì các bài toán con bị tính lặp lại.`, 5);
            return R.frames;
        }
    };

    /* ---------------- 1D DP: house robber ---------------- */
    V.houseRobber = {
        legend: [['cmp', 'Hai lựa chọn đang so'], ['act', 'Ô vừa tính'], ['done', 'Nhà được chọn']],
        inputs: [{ key: 'arr', label: 'Tiền mỗi nhà', type: 'nums', value: '2, 7, 9, 3, 1, 5, 8, 4', min: 0, max: 99, minLen: 2, maxLen: 12, random: () => U.randArr(8, 1, 20) }],
        code: [
            'def rob(a):',
            '    dp = [0] * (len(a) + 1)     # dp[i]: nhiều nhất với i nhà đầu',
            '    dp[1] = a[0]',
            '    for i in range(2, len(a) + 1):',
            '        dp[i] = max(dp[i - 1],             # bỏ nhà i',
            '                    dp[i - 2] + a[i - 1])  # lấy nhà i (bỏ nhà i-1)',
            '    return dp[-1]'
        ],
        run({ arr }) {
            const R = new Rec();
            const n = arr.length;
            const dp = new Array(n + 1).fill(null);
            dp[0] = 0;
            dp[1] = arr[0];
            const show = (aSt, dSt, msg, line) => R.push([
                { type: 'array', key: 'a', title: 'Tiền trong nhà (không được lấy 2 nhà liền kề)', items: arr.map((v, i) => ({ id: 'h' + i, v, s: aSt[i] || '' })), indexLabels: arr.map((_, i) => 'nhà ' + (i + 1)) },
                { type: 'array', key: 'dp', title: 'dp[i] — tổng lớn nhất với i nhà đầu', items: dp.map((v, i) => ({ id: 'd' + i, t: v == null ? '' : v, s: dSt[i] || '' })) }
            ], msg, line, {});
            show({}, { 0: 'done', 1: 'done' }, 'Trạng thái: dp[i] = số tiền lớn nhất khi chỉ xét i nhà đầu. dp[0] = 0, dp[1] = a[0].', 2);
            for (let i = 2; i <= n; i++) {
                const skip = dp[i - 1], take = dp[i - 2] + arr[i - 1];
                show({ [i - 1]: 'cmp' }, { [i - 1]: 'cmp', [i - 2]: 'cmp' }, `Nhà ${i}: bỏ → dp[${i - 1}] = ${skip}; lấy → dp[${i - 2}] + ${arr[i - 1]} = ${take}`, 4);
                dp[i] = Math.max(skip, take);
                show({}, { [i]: 'act' }, `dp[${i}] = max(${skip}, ${take}) = ${dp[i]}`, 5);
            }
            const chosen = {};
            let i = n;
            while (i >= 1) {
                if (i === 1 || dp[i] !== dp[i - 1]) { chosen[i - 1] = 'done'; i -= 2; } else i -= 1;
            }
            show(chosen, { [n]: 'act' }, `Đáp án <b>${dp[n]}</b>. Truy vết ngược để biết đã chọn những nhà nào. O(n) thời gian.`, 6);
            return R.frames;
        }
    };

    /* ---------------- Coin change (min coins) ---------------- */
    V.coinChange = {
        legend: [['cmp', 'dp[x − c] đang dùng'], ['act', 'dp[x] đang tính'], ['done', 'Đã tính xong'], ['hit', 'Truy vết đáp án']],
        inputs: [
            { key: 'coins', label: 'Mệnh giá', type: 'nums', value: '1, 3, 4', min: 1, max: 20, maxLen: 5 },
            { key: 'amount', label: 'Số tiền', type: 'num', value: '6', min: 1, max: 20 }
        ],
        code: [
            'def coin_change(coins, amount):',
            '    dp = [0] + [inf] * amount    # dp[x]: ít đồng xu nhất để tạo x',
            '    for x in range(1, amount + 1):',
            '        for c in coins:',
            '            if c <= x and dp[x - c] + 1 < dp[x]:',
            '                dp[x] = dp[x - c] + 1',
            '    return dp[amount] if dp[amount] < inf else -1'
        ],
        run({ coins, amount }) {
            const R = new Rec();
            const dp = new Array(amount + 1).fill(Infinity);
            const from = new Array(amount + 1).fill(null);
            dp[0] = 0;
            const fmt = (v) => (v === Infinity ? '∞' : v);
            const show = (st, msg, line, extra) => R.push([
                { type: 'array', key: 'dp', title: 'dp[x] — số đồng xu ít nhất để tạo x', items: dp.map((v, i) => ({ id: 'c' + i, t: fmt(v), s: st[i] || (i === 0 ? 'done' : '') })) }
            ].concat(extra || []), msg, line, { 'mệnh giá': coins.join(', ') });
            show({}, 'Tham lam (lấy đồng lớn nhất trước) có thể sai: với {1, 3, 4} và 6, tham lam cho 4+1+1 (3 đồng) nhưng tối ưu là 3+3. QHĐ thử mọi đồng cuối cùng.', 1);
            const doneSet = {};
            for (let x = 1; x <= amount; x++) {
                coins.forEach((c) => {
                    if (c > x) return;
                    const cand = dp[x - c] + 1;
                    const better = cand < dp[x];
                    show(Object.assign({}, doneSet, { [x - c]: 'cmp', [x]: 'act' }), `x = ${x}, dùng đồng ${c}: dp[${x - c}] + 1 = ${fmt(cand)} ${better ? '< ' + fmt(dp[x]) + ' → cập nhật' : '≥ ' + fmt(dp[x])}`, better ? 5 : 4);
                    if (better) { dp[x] = cand; from[x] = c; }
                });
                doneSet[x] = 'done';
            }
            if (dp[amount] === Infinity) {
                show(doneSet, `Không thể tạo ${amount} từ các mệnh giá này → -1.`, 6);
                return R.frames;
            }
            const used = [];
            const st = {};
            let x = amount;
            while (x > 0) { st[x] = 'hit'; used.push(from[x]); x -= from[x]; }
            st[0] = 'hit';
            show(st, `Cần ít nhất <b>${dp[amount]}</b> đồng: ${used.join(' + ')} = ${amount}. O(amount × số mệnh giá).`, 6, [{ type: 'chips', key: 'u', title: 'Các đồng được dùng', items: used }]);
            return R.frames;
        }
    };

    /* ---------------- 0/1 knapsack ---------------- */
    V.knapsack = {
        legend: [['cmp', 'Ô tham chiếu (hàng trên)'], ['act', 'Ô đang tính'], ['path', 'Truy vết'], ['done', 'Đồ vật được chọn']],
        inputs: [
            { key: 'w', label: 'Khối lượng', type: 'nums', value: '1, 3, 4, 5', min: 1, max: 10, maxLen: 5 },
            { key: 'v', label: 'Giá trị', type: 'nums', value: '1, 4, 5, 7', min: 1, max: 99, maxLen: 5 },
            { key: 'W', label: 'Sức chứa', type: 'num', value: '7', min: 1, max: 10 }
        ],
        code: [
            'def knapsack(items, W):',
            '    dp = [[0] * (W + 1) for _ in range(n + 1)]',
            '    for i in range(1, n + 1):',
            '        w, v = items[i - 1]',
            '        for c in range(W + 1):',
            '            dp[i][c] = dp[i - 1][c]                   # không lấy',
            '            if w <= c:',
            '                dp[i][c] = max(dp[i][c], dp[i - 1][c - w] + v)  # lấy',
            '    return dp[n][W]'
        ],
        run({ w, v, W }) {
            if (w.length !== v.length) throw new Error('số khối lượng và số giá trị phải bằng nhau');
            const n = w.length;
            const R = new Rec();
            const dp = Array.from({ length: n + 1 }, () => new Array(W + 1).fill(null));
            for (let c = 0; c <= W; c++) dp[0][c] = 0;
            const rowHead = ['∅'].concat(w.map((wi, i) => `#${i + 1} (${wi}kg, ${v[i]}đ)`));
            const show = (st, msg, line) => R.push([{
                type: 'grid', key: 'k', rows: n + 1, cols: W + 1, cell: 44, corner: 'đồ \\ sức chứa',
                rowHead: rowHead.map((t) => t.split(' ')[0]), colHead: Array.from({ length: W + 1 }, (_, c) => c),
                cells: dp.map((row, i) => row.map((x, c) => ({ t: x == null ? '' : x, s: st[i + ',' + c] || '' })))
            }], msg, line, { 'đồ vật': rowHead.slice(1).join('  ') });
            show({}, 'dp[i][c] = giá trị lớn nhất khi chỉ dùng i đồ vật đầu và sức chứa c. Với mỗi đồ: lấy hoặc không lấy.', 1);
            for (let i = 1; i <= n; i++) {
                const wi = w[i - 1], vi = v[i - 1];
                for (let c = 0; c <= W; c++) {
                    const skip = dp[i - 1][c];
                    if (wi <= c) {
                        const take = dp[i - 1][c - wi] + vi;
                        dp[i][c] = Math.max(skip, take);
                        show({ [(i - 1) + ',' + c]: 'cmp', [(i - 1) + ',' + (c - wi)]: 'cmp', [i + ',' + c]: 'act' }, `Đồ #${i} (${wi}kg, ${vi}đ), sức chứa ${c}: không lấy = ${skip}, lấy = dp[${i - 1}][${c - wi}] + ${vi} = ${take} → ${dp[i][c]}`, 7);
                    } else {
                        dp[i][c] = skip;
                        if (c === wi - 1 || c === 0) show({ [(i - 1) + ',' + c]: 'cmp', [i + ',' + c]: 'act' }, `Đồ #${i} nặng ${wi}kg > sức chứa ${c} → chép ô phía trên.`, 5);
                    }
                }
            }
            const st = {};
            const picked = [];
            let c = W;
            for (let i = n; i >= 1; i--) {
                st[i + ',' + c] = 'path';
                if (dp[i][c] !== dp[i - 1][c]) { picked.push(i); st[i + ',' + c] = 'done'; c -= w[i - 1]; }
            }
            st['0,' + c] = 'path';
            show(st, `Giá trị lớn nhất = <b>${dp[n][W]}</b>, chọn đồ ${picked.reverse().map((i) => '#' + i).join(', ')}. O(n × W).`, 8);
            return R.frames;
        }
    };

    /* ---------------- Longest common subsequence ---------------- */
    V.lcs = {
        legend: [['cmp', 'Ô tham chiếu'], ['act', 'Ô đang tính'], ['hit', 'Ký tự khớp'], ['path', 'Truy vết']],
        inputs: [
            { key: 'a', label: 'Chuỗi A', type: 'text', value: 'ABCBDAB', maxLen: 8, upper: true, pattern: '^[A-Z]+$', hint: 'chỉ chữ cái', random: () => Array.from({ length: 7 }, () => 'ABCD'[U.randInt(0, 3)]).join('') },
            { key: 'b', label: 'Chuỗi B', type: 'text', value: 'BDCABA', maxLen: 8, upper: true, pattern: '^[A-Z]+$', hint: 'chỉ chữ cái', random: () => Array.from({ length: 6 }, () => 'ABCD'[U.randInt(0, 3)]).join('') }
        ],
        code: [
            'def lcs(a, b):',
            '    dp = [[0] * (len(b) + 1) for _ in range(len(a) + 1)]',
            '    for i in range(1, len(a) + 1):',
            '        for j in range(1, len(b) + 1):',
            '            if a[i - 1] == b[j - 1]:',
            '                dp[i][j] = dp[i - 1][j - 1] + 1      # khớp → chéo + 1',
            '            else:',
            '                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])',
            '    return dp[-1][-1]'
        ],
        run({ a, b }) {
            const R = new Rec();
            const m = a.length, n = b.length;
            const dp = Array.from({ length: m + 1 }, (_, i) => new Array(n + 1).fill(i === 0 ? 0 : null));
            for (let i = 0; i <= m; i++) dp[i][0] = 0;
            const show = (st, msg, line, hi) => R.push([{
                type: 'grid', key: 'g', rows: m + 1, cols: n + 1, cell: 44, corner: '',
                rowHead: ['∅'].concat(a.split('')), colHead: ['∅'].concat(b.split('')), rowHi: hi ? hi[0] : null, colHi: hi ? hi[1] : null,
                cells: dp.map((row, i) => row.map((x, j) => ({ t: x == null ? '' : x, s: st[i + ',' + j] || '' })))
            }], msg, line, {});
            show({}, 'dp[i][j] = độ dài dãy con chung dài nhất của A[:i] và B[:j]. Hàng/cột 0 = chuỗi rỗng.', 1);
            for (let i = 1; i <= m; i++) {
                for (let j = 1; j <= n; j++) {
                    if (a[i - 1] === b[j - 1]) {
                        dp[i][j] = dp[i - 1][j - 1] + 1;
                        show({ [(i - 1) + ',' + (j - 1)]: 'cmp', [i + ',' + j]: 'hit' }, `A[${i - 1}] = B[${j - 1}] = '${a[i - 1]}' → dp = chéo trên-trái + 1 = ${dp[i][j]}`, 5, [i, j]);
                    } else {
                        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
                        show({ [(i - 1) + ',' + j]: 'cmp', [i + ',' + (j - 1)]: 'cmp', [i + ',' + j]: 'act' }, `'${a[i - 1]}' ≠ '${b[j - 1]}' → max(trên ${dp[i - 1][j]}, trái ${dp[i][j - 1]}) = ${dp[i][j]}`, 7, [i, j]);
                    }
                }
            }
            const st = {};
            let i = m, j = n;
            const out = [];
            while (i > 0 && j > 0) {
                if (a[i - 1] === b[j - 1]) { st[i + ',' + j] = 'hit'; out.push(a[i - 1]); i--; j--; }
                else { st[i + ',' + j] = 'path'; if (dp[i - 1][j] >= dp[i][j - 1]) i--; else j--; }
            }
            show(st, `LCS dài <b>${dp[m][n]}</b>: "${out.reverse().join('')}" (truy vết từ góc dưới phải). O(m × n).`, 8);
            return R.frames;
        }
    };

    /* ---------------- Edit distance ---------------- */
    V.editDistance = {
        legend: [['cmp', 'Ba ô lân cận'], ['act', 'Ô đang tính'], ['hit', 'Ký tự giống (miễn phí)'], ['path', 'Truy vết thao tác']],
        inputs: [
            { key: 'a', label: 'Từ', type: 'text', value: 'horse', maxLen: 8, pattern: '^[a-zA-Z]+$', hint: 'chỉ chữ cái', random: () => WORDS[U.randInt(0, WORDS.length - 1)].slice(0, 8) },
            { key: 'b', label: 'Thành', type: 'text', value: 'ros', maxLen: 8, pattern: '^[a-zA-Z]+$', hint: 'chỉ chữ cái', random: () => WORDS[U.randInt(0, WORDS.length - 1)].slice(0, 8) }
        ],
        code: [
            'def edit_distance(a, b):',
            '    # dp[i][0] = i (xóa hết), dp[0][j] = j (chèn hết)',
            '    for i in range(1, len(a) + 1):',
            '        for j in range(1, len(b) + 1):',
            '            if a[i - 1] == b[j - 1]:',
            '                dp[i][j] = dp[i - 1][j - 1]            # giống → miễn phí',
            '            else:',
            '                dp[i][j] = 1 + min(dp[i - 1][j],       # xóa',
            '                                   dp[i][j - 1],       # chèn',
            '                                   dp[i - 1][j - 1])   # thay',
            '    return dp[-1][-1]'
        ],
        run({ a, b }) {
            const R = new Rec();
            const m = a.length, n = b.length;
            const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(null));
            for (let i = 0; i <= m; i++) dp[i][0] = i;
            for (let j = 0; j <= n; j++) dp[0][j] = j;
            const show = (st, msg, line, hi, extra) => R.push([{
                type: 'grid', key: 'g', rows: m + 1, cols: n + 1, cell: 44,
                rowHead: ['∅'].concat(a.split('')), colHead: ['∅'].concat(b.split('')), rowHi: hi ? hi[0] : null, colHi: hi ? hi[1] : null,
                cells: dp.map((row, i) => row.map((x, j) => ({ t: x == null ? '' : x, s: st[i + ',' + j] || '' })))
            }].concat(extra || []), msg, line, {});
            show({}, `Số thao tác (chèn / xóa / thay 1 ký tự) ít nhất để biến "${a}" thành "${b}". dp[i][j] = đáp án cho a[:i] → b[:j].`, 1);
            for (let i = 1; i <= m; i++) {
                for (let j = 1; j <= n; j++) {
                    if (a[i - 1] === b[j - 1]) {
                        dp[i][j] = dp[i - 1][j - 1];
                        show({ [(i - 1) + ',' + (j - 1)]: 'cmp', [i + ',' + j]: 'hit' }, `'${a[i - 1]}' = '${b[j - 1]}' → không tốn gì: lấy ô chéo = ${dp[i][j]}`, 5, [i, j]);
                    } else {
                        dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
                        show({ [(i - 1) + ',' + j]: 'cmp', [i + ',' + (j - 1)]: 'cmp', [(i - 1) + ',' + (j - 1)]: 'cmp', [i + ',' + j]: 'act' }, `'${a[i - 1]}' ≠ '${b[j - 1]}' → 1 + min(xóa ${dp[i - 1][j]}, chèn ${dp[i][j - 1]}, thay ${dp[i - 1][j - 1]}) = ${dp[i][j]}`, 7, [i, j]);
                    }
                }
            }
            const st = {};
            const ops = [];
            let i = m, j = n;
            while (i > 0 || j > 0) {
                st[i + ',' + j] = 'path';
                if (i > 0 && j > 0 && a[i - 1] === b[j - 1]) { ops.push(`giữ '${a[i - 1]}'`); i--; j--; }
                else if (i > 0 && j > 0 && dp[i][j] === dp[i - 1][j - 1] + 1) { ops.push(`thay '${a[i - 1]}'→'${b[j - 1]}'`); i--; j--; }
                else if (i > 0 && dp[i][j] === dp[i - 1][j] + 1) { ops.push(`xóa '${a[i - 1]}'`); i--; }
                else { ops.push(`chèn '${b[j - 1]}'`); j--; }
            }
            st['0,0'] = 'path';
            show(st, `Khoảng cách chỉnh sửa = <b>${dp[m][n]}</b>. Ứng dụng: sửa lỗi chính tả, so sánh DNA, diff văn bản.`, 10, null, [{ type: 'chips', key: 'ops', title: 'Chuỗi thao tác (từ trái sang phải)', items: ops.reverse().map((o) => ({ t: o, s: o.startsWith('giữ') ? '' : 'cmp' })) }]);
            return R.frames;
        }
    };

    /* ---------------- LIS O(n²) ---------------- */
    V.lis = {
        legend: [['act', 'i đang tính'], ['cmp', 'j < i và a[j] < a[i]'], ['dim', 'a[j] ≥ a[i]'], ['done', 'Dãy con tăng dài nhất']],
        inputs: [{ key: 'arr', label: 'Mảng', type: 'nums', value: '10, 9, 2, 5, 3, 7, 101, 18', maxLen: 10, random: () => U.randArr(9, 1, 50) }],
        code: [
            'def lis(a):',
            '    dp = [1] * len(a)          # dp[i]: LIS kết thúc tại i',
            '    for i in range(len(a)):',
            '        for j in range(i):',
            '            if a[j] < a[i]:',
            '                dp[i] = max(dp[i], dp[j] + 1)',
            '    return max(dp)'
        ],
        run({ arr }) {
            const R = new Rec();
            const n = arr.length;
            const dp = new Array(n).fill(1);
            const par = new Array(n).fill(-1);
            const show = (aSt, dSt, msg, line) => R.push([
                { type: 'array', key: 'a', title: 'a', bars: true, height: 130, items: arr.map((v, i) => ({ id: 'a' + i, v, s: aSt[i] || '' })) },
                { type: 'array', key: 'dp', title: 'dp[i] — độ dài dãy con tăng dài nhất kết thúc tại i', items: dp.map((v, i) => ({ id: 'd' + i, t: v, s: dSt[i] || '' })) }
            ], msg, line, {});
            show({}, {}, 'Mỗi phần tử tự nó là một dãy tăng độ dài 1. Với mỗi i, thử nối vào sau mọi j < i có a[j] < a[i].', 1);
            for (let i = 1; i < n; i++) {
                for (let j = 0; j < i; j++) {
                    if (arr[j] < arr[i]) {
                        const cand = dp[j] + 1;
                        const better = cand > dp[i];
                        if (better) { dp[i] = cand; par[i] = j; }
                        show({ [i]: 'act', [j]: 'cmp' }, { [i]: 'act', [j]: 'cmp' }, `a[${j}] = ${arr[j]} < a[${i}] = ${arr[i]}: nối được → dp[${j}] + 1 = ${cand}` + (better ? ` → dp[${i}] = ${dp[i]}` : ''), 5);
                    } else {
                        show({ [i]: 'act', [j]: 'dim' }, { [i]: 'act' }, `a[${j}] = ${arr[j]} ≥ ${arr[i]}: không nối được.`, 4);
                    }
                }
            }
            let best = 0;
            for (let i = 1; i < n; i++) if (dp[i] > dp[best]) best = i;
            const st = {};
            const seq = [];
            for (let k = best; k >= 0; k = par[k]) { st[k] = 'done'; seq.push(arr[k]); }
            show(st, st, `LIS dài <b>${dp[best]}</b>: ${seq.reverse().join(' < ')}. Cách này O(n²); dùng mảng "đuôi nhỏ nhất" + tìm nhị phân được O(n log n).`, 6);
            return R.frames;
        }
    };

    /* ---------------- Grid DP: minimum path sum ---------------- */
    V.gridPaths = {
        legend: [['cmp', 'Ô trên / ô trái'], ['act', 'Ô đang tính'], ['path', 'Đường đi tối ưu']],
        inputs: [{
            key: 'g', label: 'Chi phí (hàng cách nhau bởi /)', type: 'text', wide: true, value: '1342/1571/4213/2618', maxLen: 60, pattern: '^[0-9/]+$', hint: 'chỉ chữ số và /',
            random: () => Array.from({ length: 4 }, () => Array.from({ length: 5 }, () => U.randInt(1, 9)).join('')).join('/')
        }],
        code: [
            'def min_path_sum(g):          # chỉ được đi sang phải hoặc xuống',
            '    dp = [[0] * C for _ in range(R)]',
            '    for r in range(R):',
            '        for c in range(C):',
            '            if r == 0 and c == 0: dp[r][c] = g[0][0]; continue',
            '            up = dp[r - 1][c] if r > 0 else inf',
            '            left = dp[r][c - 1] if c > 0 else inf',
            '            dp[r][c] = g[r][c] + min(up, left)',
            '    return dp[R - 1][C - 1]'
        ],
        run({ g }) {
            const G = g.split('/').filter(Boolean).map((row) => row.split('').map(Number));
            const Rn = G.length, Cn = G[0].length;
            if (G.some((r) => r.length !== Cn)) throw new Error('các hàng phải cùng độ dài');
            if (Rn > 6 || Cn > 7) throw new Error('tối đa 6 hàng × 7 cột');
            const R = new Rec();
            const dp = Array.from({ length: Rn }, () => new Array(Cn).fill(null));
            const show = (st, msg, line) => R.push([
                { type: 'grid', key: 'c', title: 'Chi phí mỗi ô', span: 3, rows: Rn, cols: Cn, cell: 42, cells: G.map((row, r) => row.map((x, c) => ({ t: x, s: st[r + ',' + c] === 'path' ? 'path' : (st[r + ',' + c] === 'act' ? 'act' : '') }))) },
                { type: 'grid', key: 'd', title: 'dp = chi phí nhỏ nhất để tới ô', span: 3, rows: Rn, cols: Cn, cell: 42, cells: dp.map((row, r) => row.map((x, c) => ({ t: x == null ? '' : x, s: st[r + ',' + c] || '' }))) }
            ], msg, line, {});
            show({}, 'Đi từ góc trên trái tới góc dưới phải, chỉ sang phải hoặc xuống. Mỗi ô chỉ có thể tới từ ô trên hoặc ô trái.', 1);
            for (let r = 0; r < Rn; r++) {
                for (let c = 0; c < Cn; c++) {
                    if (!r && !c) { dp[0][0] = G[0][0]; show({ '0,0': 'act' }, `dp[0][0] = ${G[0][0]}`, 4); continue; }
                    const up = r ? dp[r - 1][c] : Infinity, left = c ? dp[r][c - 1] : Infinity;
                    dp[r][c] = G[r][c] + Math.min(up, left);
                    const st = { [r + ',' + c]: 'act' };
                    if (r) st[(r - 1) + ',' + c] = 'cmp';
                    if (c) st[r + ',' + (c - 1)] = 'cmp';
                    show(st, `dp[${r}][${c}] = ${G[r][c]} + min(${up === Infinity ? '∞' : up}, ${left === Infinity ? '∞' : left}) = ${dp[r][c]}`, 7);
                }
            }
            const st = {};
            let r = Rn - 1, c = Cn - 1;
            while (r || c) {
                st[r + ',' + c] = 'path';
                if (!r) c--;
                else if (!c) r--;
                else if (dp[r - 1][c] <= dp[r][c - 1]) r--;
                else c--;
            }
            st['0,0'] = 'path';
            show(st, `Chi phí nhỏ nhất = <b>${dp[Rn - 1][Cn - 1]}</b>. O(R × C). Đếm số đường đi cũng cùng khuôn: dp = trên + trái.`, 8);
            return R.frames;
        }
    };

    /* ---------------- Longest palindrome: expand around center ---------------- */
    V.palindromeCenter = {
        legend: [['act', 'Đang nở ra'], ['swap', 'Không khớp → dừng'], ['done', 'Palindrome dài nhất']],
        inputs: [{ key: 's', label: 'Chuỗi', type: 'text', value: 'cabbacdaba', maxLen: 14, pattern: '^[a-zA-Z]+$', hint: 'chỉ chữ cái', random: () => Array.from({ length: 11 }, () => 'abc'[U.randInt(0, 2)]).join('') }],
        code: [
            'def longest_palindrome(s):',
            '    best = ""',
            '    for center in range(2 * len(s) - 1):',
            '        l = center // 2; r = l + center % 2   # tâm lẻ / tâm chẵn',
            '        while l >= 0 and r < len(s) and s[l] == s[r]:',
            '            l -= 1; r += 1                    # nở ra hai phía',
            '        if r - l - 1 > len(best): best = s[l + 1:r]',
            '    return best'
        ],
        run({ s }) {
            const R = new Rec();
            const ch = s.split('');
            let bl = 0, br = 0;
            const show = (st, ranges, msg, line) => R.push([{ type: 'array', key: 's', items: ch.map((c, i) => ({ id: 'c' + i, t: c, s: st[i] || '' })), ranges }], msg, line, { 'tốt nhất': s.slice(bl, br + 1) });
            show({}, [], 'Mỗi palindrome đối xứng quanh một tâm (1 ký tự hoặc giữa 2 ký tự). Thử 2n − 1 tâm và nở ra hai phía.', 2);
            for (let center = 0; center < 2 * ch.length - 1; center++) {
                let l = center >> 1, r = l + (center % 2);
                if (r >= ch.length || ch[l] !== ch[r]) continue;
                const c0 = center >> 1;
                const where = center % 2 ? `giữa ${c0} và ${c0 + 1}` : `tại ${c0}`;
                while (l >= 0 && r < ch.length && ch[l] === ch[r]) {
                    const st = {};
                    for (let k = l; k <= r; k++) st[k] = 'act';
                    show(st, [{ a: l, b: r, label: `"${s.slice(l, r + 1)}"`, tone: 'act', key: 'cur' }, { a: bl, b: br, label: 'tốt nhất', tone: 'done', key: 'best' }], `Tâm ${where}: s[${l}] = s[${r}] = '${ch[l]}' → nở tiếp.`, 5);
                    l--; r++;
                }
                const len = r - l - 1;
                const st = {};
                if (l >= 0) st[l] = 'swap';
                if (r < ch.length) st[r] = 'swap';
                if (len > br - bl + 1) { bl = l + 1; br = r - 1; }
                show(st, [{ a: l + 1, b: r - 1, label: `dài ${len}`, tone: 'act', key: 'cur' }, { a: bl, b: br, label: 'tốt nhất', tone: 'done', key: 'best' }], (l < 0 || r >= ch.length) ? 'Chạm biên → dừng.' : `s[${l}] ≠ s[${r}] → dừng. Palindrome tại tâm này dài ${len}.`, 6);
            }
            const st = {};
            for (let k = bl; k <= br; k++) st[k] = 'done';
            show(st, [{ a: bl, b: br, label: 'dài nhất', tone: 'done', key: 'best' }], `Palindrome dài nhất: "<b>${s.slice(bl, br + 1)}</b>". O(n²) thời gian, O(1) bộ nhớ (Manacher đạt O(n)).`, 7);
            return R.frames;
        }
    };

    /* ---------------- KMP ---------------- */
    V.kmp = {
        legend: [['hit', 'Khớp'], ['swap', 'Lệch'], ['act', 'Đang xét'], ['done', 'Tìm thấy']],
        inputs: [
            { key: 't', label: 'Văn bản', type: 'text', value: 'ABABDABACDABABCABAB', maxLen: 20, upper: true, pattern: '^[A-Z]+$', hint: 'chỉ chữ cái' },
            { key: 'p', label: 'Mẫu', type: 'text', value: 'ABABCABAB', maxLen: 9, upper: true, pattern: '^[A-Z]+$', hint: 'chỉ chữ cái' }
        ],
        code: [
            'def build_lps(p):      # lps[i]: tiền tố = hậu tố dài nhất của p[:i+1]',
            '    lps = [0] * len(p); k = 0',
            '    for i in range(1, len(p)):',
            '        while k and p[i] != p[k]: k = lps[k - 1]',
            '        if p[i] == p[k]: k += 1',
            '        lps[i] = k',
            '    return lps',
            '',
            'def kmp_search(t, p):',
            '    lps = build_lps(p); j = 0',
            '    for i in range(len(t)):',
            '        while j and t[i] != p[j]: j = lps[j - 1]  # trượt mẫu, i không lùi',
            '        if t[i] == p[j]: j += 1',
            '        if j == len(p):',
            '            print("khớp tại", i - j + 1); j = lps[j - 1]'
        ],
        run({ t, p }) {
            if (p.length > t.length) throw new Error('mẫu dài hơn văn bản');
            const R = new Rec();
            const m = p.length, n = t.length;
            const lps = new Array(m).fill(null);
            lps[0] = 0;
            const lpsPanel = (st) => ({ type: 'array', key: 'lps', title: 'Bảng lps của mẫu', items: p.split('').map((c, i) => ({ id: 'l' + i, t: lps[i] == null ? '' : lps[i], s: st[i] || '' })), indexLabels: p.split('') });
            // phase 1: lps
            let k = 0;
            R.push([lpsPanel({ 0: 'done' })], 'Bước 1 — tiền xử lý mẫu: lps[i] = độ dài tiền tố dài nhất (khác cả chuỗi) đồng thời là hậu tố của p[0..i].', 1, {});
            for (let i = 1; i < m; i++) {
                while (k && p[i] !== p[k]) {
                    R.push([lpsPanel({ [i]: 'swap', [k]: 'swap' })], `p[${i}] = '${p[i]}' ≠ p[${k}] = '${p[k]}' → lùi k = lps[${k - 1}] = ${lps[k - 1]}`, 3, { i, k });
                    k = lps[k - 1];
                }
                if (p[i] === p[k]) k++;
                lps[i] = k;
                R.push([lpsPanel({ [i]: 'act' })], `lps[${i}] = ${k}` + (k ? ` ("${p.slice(0, k)}" vừa là tiền tố vừa là hậu tố của "${p.slice(0, i + 1)}")` : ''), 5, { i, k });
            }
            // phase 2: search
            const found = [];
            const textPanel = (i, st) => ({ type: 'array', key: 't', title: 'Văn bản', items: t.split('').map((c, x) => ({ id: 't' + x, t: c, s: st[x] || (found.some((f) => x >= f && x < f + m) ? 'done' : '') })), pointers: i != null ? [{ i, label: 'i' }] : [] });
            const patPanel = (shift, j, st) => ({
                type: 'array', key: 'p', title: `Mẫu (đang đặt tại vị trí ${shift})`, showIndex: false,
                items: Array.from({ length: n }, (_, x) => (x >= shift && x < shift + m ? { id: 'p' + (x - shift), t: p[x - shift], s: st[x - shift] || '' } : { id: 'g' + x, t: '', s: 'ghost' })),
                pointers: j != null && shift + j < n ? [{ i: shift + j, label: 'j', tone: 'pivot' }] : []
            });
            let j = 0, cmp = 0;
            const matched = (upto) => { const s = {}; for (let x = 0; x < upto; x++) s[x] = 'hit'; return s; };
            R.push([textPanel(null, {}), patPanel(0, 0, {}), lpsPanel({})], 'Bước 2 — dò: i chạy trên văn bản và KHÔNG BAO GIỜ lùi lại; khi lệch, mẫu "trượt" nhờ bảng lps.', 9, {});
            for (let i = 0; i < n; i++) {
                while (j && t[i] !== p[j]) {
                    cmp++;
                    R.push([textPanel(i, { [i]: 'swap' }), patPanel(i - j, j, Object.assign(matched(j), { [j]: 'swap' })), lpsPanel({ [j - 1]: 'act' })], `t[${i}] = '${t[i]}' ≠ p[${j}] = '${p[j]}' → j = lps[${j - 1}] = ${lps[j - 1]} (giữ lại ${lps[j - 1]} ký tự đã khớp)`, 11, { i, j, 'số so sánh': cmp });
                    j = lps[j - 1];
                }
                cmp++;
                if (t[i] === p[j]) {
                    j++;
                    R.push([textPanel(i, { [i]: 'hit' }), patPanel(i - j + 1, j - 1, matched(j)), lpsPanel({})], `t[${i}] = p[${j - 1}] = '${t[i]}' → j = ${j}`, 12, { i, j, 'số so sánh': cmp });
                } else {
                    R.push([textPanel(i, { [i]: 'swap' }), patPanel(i, 0, { 0: 'swap' }), lpsPanel({})], `t[${i}] = '${t[i]}' ≠ p[0] → sang ký tự tiếp theo.`, 12, { i, j, 'số so sánh': cmp });
                }
                if (j === m) {
                    found.push(i - m + 1);
                    R.push([textPanel(i, {}), patPanel(i - m + 1, null, matched(m)), lpsPanel({ [m - 1]: 'act' })], `Khớp toàn bộ tại vị trí ${i - m + 1}! Tiếp tục với j = lps[${m - 1}] = ${lps[m - 1]}.`, 14, { i, j, 'số so sánh': cmp });
                    j = lps[j - 1];
                }
            }
            R.push([textPanel(null, {}), lpsPanel({})], found.length ? `Tìm thấy tại: ${found.join(', ')}. Tổng ${cmp} lần so sánh — O(n + m), không bao giờ quá 2n.` : `Không tìm thấy. ${cmp} lần so sánh — O(n + m).`, -1, { 'số so sánh': cmp });
            return R.frames;
        }
    };

    /* ---------------- Rabin–Karp ---------------- */
    V.rabinKarp = {
        legend: [['act', 'Cửa sổ hiện tại'], ['cmp', 'Hash khớp → kiểm tra từng ký tự'], ['done', 'Tìm thấy'], ['swap', 'Va chạm hash (khớp giả)']],
        inputs: [
            { key: 't', label: 'Văn bản', type: 'text', value: 'ABRACADABRACAB', maxLen: 20, upper: true, pattern: '^[A-Z]+$', hint: 'chỉ chữ cái' },
            { key: 'p', label: 'Mẫu', type: 'text', value: 'CAB', maxLen: 6, upper: true, pattern: '^[A-Z]+$', hint: 'chỉ chữ cái' }
        ],
        code: [
            'def rabin_karp(t, p, B=26, M=101):',
            '    m = len(p); hp = h(p); hw = h(t[:m])',
            '    for i in range(len(t) - m + 1):',
            '        if hw == hp and t[i:i + m] == p:   # hash bằng → so kỹ',
            '            print("khớp tại", i)',
            '        if i + m < len(t):                 # lăn: bỏ trái, thêm phải',
            '            hw = ((hw - val(t[i]) * B**(m - 1)) * B + val(t[i + m])) % M'
        ],
        run({ t, p }) {
            if (p.length > t.length) throw new Error('mẫu dài hơn văn bản');
            const B = 26, M = 101;
            const val = (c) => c.charCodeAt(0) - 64;
            const m = p.length, n = t.length;
            let hp = 0, hw = 0, pw = 1;
            for (let k = 0; k < m; k++) { hp = (hp * B + val(p[k])) % M; hw = (hw * B + val(t[k])) % M; if (k) pw = (pw * B) % M; }
            const R = new Rec();
            const found = [];
            let spurious = 0;
            const show = (i, st, msg, line) => R.push([{
                type: 'array', key: 't', title: 'Văn bản',
                items: t.split('').map((c, x) => ({ id: 't' + x, t: c, s: st[x] || (found.some((f) => x >= f && x < f + m) ? 'done' : '') })),
                ranges: i != null ? [{ a: i, b: i + m - 1, label: `hash = ${hw}`, tone: 'act', key: 'w' }] : []
            }], msg, line, { 'hash(mẫu)': hp, 'hash(cửa sổ)': hw, 'va chạm giả': spurious });
            show(null, {}, `Đổi chuỗi thành số: hash("${p}") = ${hp} (cơ số ${B}, mod ${M}). So hash của từng cửa sổ trước, chỉ so ký tự khi hash bằng nhau.`, 1);
            for (let i = 0; i + m <= n; i++) {
                if (hw === hp) {
                    const st = {};
                    for (let k = i; k < i + m; k++) st[k] = 'cmp';
                    show(i, st, `Hash bằng nhau (${hw}) → so từng ký tự để chắc chắn.`, 3);
                    if (t.slice(i, i + m) === p) {
                        found.push(i);
                        show(i, {}, `Khớp thật tại vị trí ${i}.`, 4);
                    } else {
                        spurious++;
                        const s2 = {};
                        for (let k = i; k < i + m; k++) s2[k] = 'swap';
                        show(i, s2, 'Hash bằng nhưng chuỗi khác → va chạm (khớp giả), bỏ qua.', 3);
                    }
                } else {
                    show(i, {}, `Cửa sổ "${t.slice(i, i + m)}": hash ${hw} ≠ ${hp} → chắc chắn không khớp, khỏi so ký tự.`, 3);
                }
                if (i + m < n) {
                    hw = (((hw - val(t[i]) * pw) % M + M) % M * B + val(t[i + m])) % M;
                    show(i + 1, {}, `Lăn hash O(1): bỏ '${t[i]}' bên trái, thêm '${t[i + m]}' bên phải → ${hw}.`, 6);
                }
            }
            show(null, {}, (found.length ? `Tìm thấy tại: ${found.join(', ')}. ` : 'Không tìm thấy. ') + 'Trung bình O(n + m); xấu nhất O(n·m) khi va chạm nhiều. Hay dùng để tìm nhiều mẫu hoặc chuỗi con trùng lặp.', -1);
            return R.frames;
        }
    };

    /* ---------------- Anagram: frequency counting ---------------- */
    V.anagram = {
        legend: [['act', 'Ký tự đang đếm'], ['done', 'Đếm = 0'], ['swap', 'Đếm ≠ 0']],
        inputs: [
            { key: 's', label: 'Chuỗi 1', type: 'text', value: 'listen', maxLen: 12, pattern: '^[a-zA-Z]+$', hint: 'chỉ chữ cái' },
            { key: 't', label: 'Chuỗi 2', type: 'text', value: 'silent', maxLen: 12, pattern: '^[a-zA-Z]+$', hint: 'chỉ chữ cái' }
        ],
        code: [
            'def is_anagram(s, t):',
            '    if len(s) != len(t): return False',
            '    cnt = [0] * 26',
            '    for ch in s: cnt[ord(ch) - ord("a")] += 1',
            '    for ch in t: cnt[ord(ch) - ord("a")] -= 1',
            '    return all(x == 0 for x in cnt)'
        ],
        run({ s, t }) {
            s = s.toLowerCase();
            t = t.toLowerCase();
            const R = new Rec();
            const letters = Array.from(new Set((s + t).split(''))).sort();
            const cnt = {};
            letters.forEach((c) => { cnt[c] = 0; });
            const show = (which, idx, msg, line, final) => R.push([
                { type: 'array', key: 's', title: 'Chuỗi 1 (+1)', items: s.split('').map((c, i) => ({ id: 's' + i, t: c, s: which === 's' && i === idx ? 'act' : '' })) },
                { type: 'array', key: 't', title: 'Chuỗi 2 (−1)', items: t.split('').map((c, i) => ({ id: 't' + i, t: c, s: which === 't' && i === idx ? 'act' : '' })) },
                { type: 'array', key: 'c', title: 'Bảng đếm theo chữ cái', items: letters.map((c) => ({ id: 'c' + c, t: cnt[c], s: final ? (cnt[c] ? 'swap' : 'done') : (idx != null && (which === 's' ? s : t)[idx] === c ? 'act' : '') })), indexLabels: letters }
            ], msg, line, {});
            show(null, null, 'Hai chuỗi là đảo chữ (anagram) nếu có cùng số lần xuất hiện của mỗi ký tự. Đếm thay vì sắp xếp: O(n).', 2);
            if (s.length !== t.length) {
                show(null, null, `Độ dài khác nhau (${s.length} ≠ ${t.length}) → chắc chắn không phải anagram.`, 1, true);
                return R.frames;
            }
            s.split('').forEach((c, i) => { cnt[c]++; show('s', i, `'${c}' → cnt[${c}] = ${cnt[c]}`, 3); });
            t.split('').forEach((c, i) => { cnt[c]--; show('t', i, `'${c}' → cnt[${c}] = ${cnt[c]}`, 4); });
            const ok = letters.every((c) => cnt[c] === 0);
            show(null, null, ok ? '<b>Là anagram</b>: mọi ô đếm đều về 0.' : '<b>Không phải anagram</b>: còn ô đếm khác 0.', 5, true);
            return R.frames;
        }
    };

    /* ---------------- GCD — Euclid as rectangle tiling ---------------- */
    V.gcd = {
        legend: [['act', 'Hình vuông vừa cắt'], ['mark', 'Phần chữ nhật còn lại']],
        inputs: [
            { key: 'a', label: 'a', type: 'num', value: '21', min: 1, max: 24 },
            { key: 'b', label: 'b', type: 'num', value: '8', min: 1, max: 16 }
        ],
        code: [
            'def gcd(a, b):',
            '    while b:',
            '        a, b = b, a % b',
            '    return a'
        ],
        run({ a, b }) {
            const R = new Rec();
            const W = Math.max(a, b), H = Math.min(a, b);
            const owner = Array.from({ length: H }, () => new Array(W).fill(-1));
            let sq = 0;
            const lines = [];
            let x0 = 0, y0 = 0, w = W, h = H;
            const show = (cur, msg, line, vars) => R.push([
                {
                    type: 'grid', key: 'g', rows: H, cols: W, cell: 26, gap: 1,
                    cells: owner.map((row, r) => row.map((o, c) => {
                        if (o >= 0) return { t: '', s: (o === cur ? 'act ' : '') + 'isl' + (o % 6) };
                        const inRem = c >= x0 && c < x0 + w && r >= y0 && r < y0 + h;
                        return { t: '', s: inRem ? 'mark' : '' };
                    }))
                },
                { type: 'log', key: 'l', title: 'Các bước chia có dư', lines: lines.slice() }
            ], msg, line, vars);
            show(-1, `Hình chữ nhật ${W} × ${H}. gcd(${W}, ${H}) = cạnh của hình vuông LỚN NHẤT lát kín được nó.`, 0, { a: W, b: H });
            let A = W, Bv = H;
            while (w > 0 && h > 0) {
                const s = Math.min(w, h);
                const alongWidth = w >= h;
                const k = Math.floor(Math.max(w, h) / s);
                lines.push(`${A} = ${k} × ${Bv} + ${A % Bv}`);
                for (let t = 0; t < k; t++) {
                    for (let r = y0; r < y0 + s; r++) for (let c = x0; c < x0 + s; c++) owner[r][c] = sq;
                    if (alongWidth) { x0 += s; w -= s; } else { y0 += s; h -= s; }
                    show(sq, `Cắt hình vuông ${s} × ${s} (lần ${t + 1}/${k}).`, 2, { a: A, b: Bv });
                    sq++;
                }
                const nb = A % Bv;
                A = Bv;
                Bv = nb;
                if (!Bv) break;
                show(-1, `Phần còn lại ${Math.max(w, h)} × ${Math.min(w, h)} — lặp lại với (a, b) = (${A}, ${Bv}).`, 2, { a: A, b: Bv });
            }
            show(-1, `Không còn dư → gcd = <b>${A}</b>. Mỗi 2 bước, số giảm ít nhất một nửa → O(log min(a, b)).`, 3, { gcd: A });
            return R.frames;
        }
    };

    /* ---------------- Sieve of Eratosthenes ---------------- */
    V.sieve = {
        legend: [['act', 'Số nguyên tố p đang xét'], ['rej', 'Hợp số (bị gạch)'], ['cmp', 'Vừa bị gạch'], ['done', 'Số nguyên tố']],
        inputs: [{ key: 'n', label: 'Tìm số nguyên tố ≤ n', type: 'num', value: '60', min: 10, max: 100 }],
        code: [
            'def sieve(n):',
            '    is_p = [True] * (n + 1); is_p[0] = is_p[1] = False',
            '    p = 2',
            '    while p * p <= n:',
            '        if is_p[p]:',
            '            for m in range(p * p, n + 1, p):',
            '                is_p[m] = False       # gạch bội của p',
            '        p += 1',
            '    return [i for i in range(n + 1) if is_p[i]]'
        ],
        run({ n }) {
            const R = new Rec();
            const C = 10, Rn = Math.ceil(n / C);
            const isP = new Array(n + 1).fill(true);
            isP[0] = isP[1] = false;
            let crossed = 0;
            const show = (p, justMarked, msg, line, final) => R.push([{
                type: 'grid', key: 'g', rows: Rn, cols: C, cell: 42,
                cells: Array.from({ length: Rn }, (_, r) => Array.from({ length: C }, (_, c) => {
                    const x = r * C + c + 1;
                    if (x > n) return { t: '', s: 'ghost' };
                    if (x === 1) return { t: 1, s: 'dim' };
                    if (x === p) return { t: x, s: 'act' };
                    if (justMarked && justMarked.has(x)) return { t: x, s: 'cmp' };
                    if (!isP[x]) return { t: x, s: 'rej' };
                    return { t: x, s: final || (p && x < p) ? 'done' : '' };
                }))
            }], msg, line, { p: p || '-', 'đã gạch': crossed });
            show(0, null, `Viết các số 2…${n}. Lần lượt lấy số nhỏ nhất chưa bị gạch — nó là số nguyên tố — rồi gạch hết bội của nó.`, 1);
            for (let p = 2; p * p <= n; p++) {
                if (!isP[p]) continue;
                show(p, null, `${p} chưa bị gạch → là số nguyên tố. Gạch các bội của ${p} bắt đầu từ ${p}² = ${p * p} (bội nhỏ hơn đã bị gạch bởi số nhỏ hơn).`, 4);
                const batch = new Set();
                for (let m = p * p; m <= n; m += p) {
                    if (isP[m]) { isP[m] = false; crossed++; batch.add(m); }
                }
                show(p, batch, `Đã gạch ${batch.size} bội mới của ${p}.`, 6);
            }
            const primes = [];
            for (let x = 2; x <= n; x++) if (isP[x]) primes.push(x);
            show(0, null, `Dừng khi p² > ${n}. Còn lại ${primes.length} số nguyên tố. Độ phức tạp O(n log log n).`, 8, 'done');
            return R.frames;
        }
    };

    /* ---------------- Fast exponentiation ---------------- */
    V.fastPow = {
        legend: [['act', 'Bit đang xét'], ['done', 'Bit 1 (nhân vào kết quả)'], ['dim', 'Đã xử lý']],
        inputs: [
            { key: 'a', label: 'Cơ số a', type: 'num', value: '3', min: 2, max: 99 },
            { key: 'e', label: 'Số mũ e', type: 'num', value: '13', min: 1, max: 1023 },
            { key: 'm', label: 'Modulo m', type: 'num', value: '1000', min: 2, max: 100000 }
        ],
        code: [
            'def power(a, e, m):',
            '    res = 1',
            '    while e > 0:',
            '        if e & 1:               # bit thấp nhất = 1',
            '            res = res * a % m',
            '        a = a * a % m           # a, a², a⁴, a⁸, ...',
            '        e >>= 1',
            '    return res'
        ],
        run({ a, e, m }) {
            const R = new Rec();
            const bits = e.toString(2).split('').map(Number);
            const L = bits.length;
            const lines = [];
            let res = 1, base = a % m, k = 0, ee = e;
            const show = (msg, line, cur) => R.push([
                { type: 'array', key: 'b', title: `Số mũ ${e} ở dạng nhị phân`, items: bits.map((b, i) => { const pos = L - 1 - i; return { id: 'b' + pos, t: b, s: pos === cur ? 'act' : pos < k ? 'dim' : b ? 'done' : '' }; }), indexLabels: bits.map((_, i) => '2' + ['⁰', '¹', '²', '³', '⁴', '⁵', '⁶', '⁷', '⁸', '⁹'][L - 1 - i]) },
                { type: 'log', key: 'l', title: 'Nhật ký', lines: lines.slice() }
            ], msg, line, { res, 'a hiện tại': base, e: ee });
            show(`${a}^${e} = tích của a^(2^k) với các bit k bằng 1: ${bits.map((b, i) => (b ? `2^${L - 1 - i}` : null)).filter(Boolean).join(' + ')} = ${e}.`, 1);
            while (ee > 0) {
                if (ee & 1) {
                    const old = res;
                    res = (res * base) % m;
                    lines.push(`bit ${k} = 1: res = ${old} × ${base} mod ${m} = ${res}`);
                    show(`Bit ${k} bằng 1 → nhân a^(2^${k}) = ${base} vào kết quả.`, 4, k);
                } else {
                    lines.push(`bit ${k} = 0: bỏ qua`);
                    show(`Bit ${k} bằng 0 → không nhân.`, 3, k);
                }
                const ob = base;
                base = (base * base) % m;
                ee >>= 1;
                k++;
                if (ee > 0) {
                    lines.push(`bình phương: ${ob}² mod ${m} = ${base}`);
                    show(`Bình phương cơ số: ${ob}² mod ${m} = ${base} (= a^(2^${k}) mod ${m}).`, 5, k);
                }
            }
            show(`${a}^${e} mod ${m} = <b>${res}</b> chỉ với ~${2 * L} phép nhân thay vì ${e - 1}. O(log e).`, 7);
            return R.frames;
        }
    };

    /* ---------------- Pascal's triangle ---------------- */
    V.pascal = {
        legend: [['cmp', 'Hai ô phía trên'], ['act', 'Ô đang tính'], ['hit', 'C(n, k) cần tìm']],
        inputs: [
            { key: 'n', label: 'n', type: 'num', value: '6', min: 1, max: 10 },
            { key: 'k', label: 'k', type: 'num', value: '2', min: 0, max: 10 }
        ],
        code: [
            'def build_pascal(N):',
            '    C = [[0] * (N + 1) for _ in range(N + 1)]',
            '    for n in range(N + 1):',
            '        C[n][0] = 1',
            '        for k in range(1, n + 1):',
            '            C[n][k] = C[n - 1][k - 1] + C[n - 1][k]',
            '    return C'
        ],
        run({ n, k }) {
            if (k > n) throw new Error('cần k ≤ n');
            const R = new Rec();
            const C = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(null));
            const show = (st, msg, line) => R.push([{
                type: 'grid', key: 'g', rows: n + 1, cols: n + 1, cell: 44, corner: 'n\\k',
                rowHead: Array.from({ length: n + 1 }, (_, i) => i), colHead: Array.from({ length: n + 1 }, (_, i) => i),
                cells: C.map((row, i) => row.map((x, j) => ({ t: x == null ? '' : x, s: st[i + ',' + j] || (j > i ? 'ghost' : '') })))
            }], msg, line, {});
            show({}, `C(n, k) = số cách chọn k phần tử từ n. Công thức truy hồi: chọn hoặc không chọn phần tử cuối → C(n, k) = C(n−1, k−1) + C(n−1, k).`, 1);
            for (let i = 0; i <= n; i++) {
                C[i][0] = 1;
                C[i][i] = 1;
                for (let j = 1; j < i; j++) {
                    C[i][j] = C[i - 1][j - 1] + C[i - 1][j];
                    if (i <= 6 || j === k) show({ [(i - 1) + ',' + (j - 1)]: 'cmp', [(i - 1) + ',' + j]: 'cmp', [i + ',' + j]: 'act' }, `C(${i}, ${j}) = C(${i - 1}, ${j - 1}) + C(${i - 1}, ${j}) = ${C[i - 1][j - 1]} + ${C[i - 1][j]} = ${C[i][j]}`, 5);
                }
                if (i > 6) show({}, `Hàng ${i} xong.`, 2);
            }
            show({ [n + ',' + k]: 'hit' }, `C(${n}, ${k}) = <b>${C[n][k]}</b>. Tính bảng O(n²) và không cần phép chia — tiện khi phải lấy modulo.`, 6);
            return R.frames;
        }
    };
})();
