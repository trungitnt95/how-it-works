/* Topic content — categories, foundation, linear structures, sorting, searching.
 * Topic fields:
 *   id, title, en, cat, level (1 cơ bản · 2 trung cấp · 3 nâng cao), interview, tags,
 *   summary, idea, analogy, steps, cx {rows}, table {title, head, rows}, when, pitfalls,
 *   code (Python), practice [[name, leetcodeSlug|null]], related [ids], viz (key | [{key,label}])
 */
(function () {
    'use strict';
    const Algo = window.Algo;

    Algo.categories = [
        { id: 'foundation', name: 'Nền tảng & tư duy', icon: '🧭', desc: 'Độ phức tạp, đệ quy, cách tiếp cận một bài toán' },
        { id: 'linear', name: 'CTDL tuyến tính', icon: '📦', desc: 'Mảng, danh sách liên kết, stack, queue, bảng băm' },
        { id: 'sort', name: 'Sắp xếp', icon: '📊', desc: 'Từ bubble sort tới radix sort — và khi nào dùng cái nào' },
        { id: 'search', name: 'Tìm kiếm', icon: '🔍', desc: 'Tuần tự, nhị phân, nhị phân trên đáp án' },
        { id: 'technique', name: 'Kỹ thuật lập trình', icon: '🛠️', desc: 'Hai con trỏ, cửa sổ trượt, tham lam, quay lui…' },
        { id: 'tree', name: 'Cây & Heap', icon: '🌳', desc: 'Cây nhị phân, BST, heap, trie, segment tree, DSU' },
        { id: 'graph', name: 'Đồ thị', icon: '🕸️', desc: 'BFS, DFS, đường đi ngắn nhất, cây khung, luồng' },
        { id: 'dp', name: 'Quy hoạch động', icon: '🧩', desc: 'Ghi nhớ, lập bảng và các dạng QHĐ kinh điển' },
        { id: 'string', name: 'Xử lý chuỗi', icon: '🔤', desc: 'Đếm ký tự, palindrome, KMP, băm chuỗi' },
        { id: 'math', name: 'Toán cho lập trình', icon: '➗', desc: 'GCD, số nguyên tố, modulo, tổ hợp' }
    ];

    Algo.levels = {
        1: { name: 'Cơ bản', short: 'CB', desc: 'Nên học đầu tiên — nền móng cho mọi thứ khác' },
        2: { name: 'Trung cấp', short: 'TC', desc: 'Cốt lõi của phỏng vấn và bài tập thường gặp' },
        3: { name: 'Nâng cao', short: 'NC', desc: 'Lập trình thi đấu, hệ thống lớn, tối ưu sâu' }
    };

    const T = (o) => Algo.topics.push(o);

    /* ============================ NỀN TẢNG ============================ */

    T({
        id: 'big-o', cat: 'foundation', level: 1, interview: true,
        title: 'Độ phức tạp & Big-O', en: 'Time & Space Complexity',
        tags: ['big o', 'độ phức tạp', 'thời gian', 'bộ nhớ', 'phân tích thuật toán'],
        summary: 'Đo tốc độ tăng của thời gian chạy và bộ nhớ khi dữ liệu lớn dần — ngôn ngữ chung để so sánh thuật toán.',
        idea: 'Big-O không đo số giây mà đo <b>xu hướng tăng</b>: khi n tăng gấp đôi thì số bước tăng thế nào. Ta bỏ hằng số và các số hạng nhỏ: <code>3n² + 5n + 7</code> → <code>O(n²)</code>. Thời gian thực phụ thuộc máy, nhưng thứ tự <code>O(1) &lt; O(log n) &lt; O(n) &lt; O(n log n) &lt; O(n²) &lt; O(2ⁿ) &lt; O(n!)</code> thì không đổi — và với n lớn, khoảng cách giữa chúng là hàng triệu lần.',
        analogy: 'Tìm một cái tên trong danh bạ 1 triệu người: lật từng trang là O(n) — tới 1 triệu bước; mở giữa cuốn rồi chia đôi liên tục là O(log n) — khoảng 20 bước.',
        steps: [
            'Vòng lặp chạy n lần → <code>O(n)</code>; hai vòng lồng nhau, mỗi vòng n lần → <code>O(n²)</code>.',
            'Mỗi bước chia đôi dữ liệu → <code>O(log n)</code>.',
            'Các khối nối tiếp → lấy khối lớn nhất: <code>O(n) + O(n²) = O(n²)</code>.',
            'Đệ quy: số lời gọi × công việc mỗi lời gọi (merge sort: log n tầng × O(n) mỗi tầng).',
            'Bộ nhớ: đếm phần <b>phụ</b> — mảng phụ, hash map, độ sâu ngăn xếp đệ quy.'
        ],
        table: {
            title: 'Các bậc độ phức tạp thường gặp',
            head: ['Bậc', 'Ví dụ'],
            rows: [
                ['O(1)', 'Truy cập a[i], tra hash map'],
                ['O(log n)', 'Tìm kiếm nhị phân, thao tác heap'],
                ['O(n)', 'Duyệt mảng một lần'],
                ['O(n log n)', 'Merge sort, heap sort, sort của thư viện'],
                ['O(n²)', 'Hai vòng lặp lồng nhau, bubble sort'],
                ['O(2ⁿ)', 'Thử mọi tập con'],
                ['O(n!)', 'Thử mọi hoán vị']
            ]
        },
        when: [
            'Trước khi code: ước lượng xem ý tưởng có kịp giới hạn thời gian không.',
            'Khi phỏng vấn được hỏi "có cách nào tốt hơn?" — thường nghĩa là cần giảm một bậc Big-O.'
        ],
        pitfalls: [
            'Quên chi phí ẩn: <code>x in list</code> là O(n), <code>list.pop(0)</code> là O(n), cắt chuỗi <code>s[a:b]</code> tạo bản sao.',
            'Nhầm trung bình với xấu nhất: quick sort trung bình O(n log n) nhưng xấu nhất O(n²).',
            'Big-O ẩn hằng số: với n nhỏ, cách O(n²) đơn giản có thể nhanh hơn cách O(n log n) phức tạp.'
        ],
        code: `def get_first(a):              # O(1)
    return a[0]

def contains(a, x):            # O(n)
    for v in a:
        if v == x:
            return True
    return False

def has_duplicate(a):          # O(n²) — so mọi cặp
    for i in range(len(a)):
        for j in range(i + 1, len(a)):
            if a[i] == a[j]:
                return True
    return False

def has_duplicate_fast(a):     # O(n) thời gian, đổi lại O(n) bộ nhớ
    seen = set()
    for v in a:
        if v in seen:
            return True
        seen.add(v)
    return False`,
        practice: [['Contains Duplicate', 'contains-duplicate'], ['Two Sum', 'two-sum']],
        related: ['constraints', 'amortized', 'binary-search'],
        viz: 'growth'
    });

    T({
        id: 'constraints', cat: 'foundation', level: 1, interview: true,
        title: 'Đọc ràng buộc → đoán thuật toán', en: 'Constraints → Complexity',
        tags: ['giới hạn', 'constraints', 'time limit', 'chọn thuật toán', '10^8'],
        summary: 'Giới hạn n trong đề gần như "tiết lộ" độ phức tạp cần đạt — và từ đó gợi ý kỹ thuật.',
        idea: 'Máy tính xử lý cỡ <b>10⁸ phép tính đơn giản mỗi giây</b> (Python chỉ khoảng 10⁷). Thay n vào độ phức tạp của ý tưởng; nếu vượt ngưỡng thì phải tìm cách tốt hơn. Ngược lại, n rất nhỏ là tín hiệu đề cho phép vét cạn.',
        table: {
            title: 'Bảng tra nhanh (giới hạn ~1 giây)',
            head: ['n tối đa', 'Độ phức tạp chấp nhận', 'Gợi ý kỹ thuật'],
            rows: [
                ['≤ 10–11', 'O(n!)', 'Thử mọi hoán vị, quay lui'],
                ['≤ 20–25', 'O(2ⁿ · n)', 'Quay lui, QHĐ bitmask (≤ 40: meet in the middle)'],
                ['≤ 100–500', 'O(n³)', 'Floyd–Warshall, QHĐ khoảng'],
                ['≤ 5 000', 'O(n²)', 'QHĐ hai chiều, hai vòng lặp'],
                ['≤ 10⁵ – 10⁶', 'O(n log n) / O(n)', 'Sắp xếp, tìm nhị phân, heap, hai con trỏ, prefix sum'],
                ['≤ 10⁹ – 10¹⁸', 'O(log n) / O(1)', 'Tìm nhị phân trên đáp án, lũy thừa nhanh, công thức']
            ]
        },
        steps: [
            'Đọc giới hạn của n, giá trị phần tử và số truy vấn q.',
            'Nghĩ lời giải vét cạn trước, tính độ phức tạp.',
            'So với bảng: nếu quá chậm, tìm "nút cổ chai" (vòng lặp trong cùng) và thay bằng CTDL/kỹ thuật phù hợp.',
            'Kiểm tra cả bộ nhớ: mảng 10⁸ số nguyên 4 byte = 400 MB — thường vượt giới hạn.'
        ],
        pitfalls: [
            'Quên số truy vấn: n = q = 10⁵ và mỗi truy vấn O(n) → 10¹⁰ phép tính.',
            'Giá trị tới 10¹⁸ cần kiểu 64-bit trong C++/Java.',
            'Đệ quy sâu 10⁵ tầng có thể tràn ngăn xếp dù độ phức tạp ổn.'
        ],
        code: `# n ≤ 10^5 → không thể so mọi cặp (10^10 phép).
# Đếm số cặp i < j có a[i] + a[j] == k trong O(n) bằng hash map:
from collections import Counter

def count_pairs(a, k):
    seen = Counter()
    count = 0
    for x in a:
        count += seen[k - x]    # số phần tử trước đó ghép được với x
        seen[x] += 1
    return count`,
        practice: [['Two Sum', 'two-sum'], ['Subarray Sum Equals K', 'subarray-sum-equals-k']],
        related: ['big-o', 'problem-solving', 'binary-search-answer']
    });

    T({
        id: 'recursion', cat: 'foundation', level: 1, interview: true,
        title: 'Đệ quy', en: 'Recursion',
        tags: ['đệ quy', 'recursion', 'call stack', 'ngăn xếp lời gọi', 'base case'],
        summary: 'Hàm tự gọi chính nó trên bài toán nhỏ hơn, cho tới khi gặp trường hợp cơ sở.',
        idea: 'Mọi hàm đệ quy có 2 phần: <b>trường hợp cơ sở</b> (dừng) và <b>bước đệ quy</b> (thu nhỏ bài toán, tin rằng lời gọi con trả về đúng). Máy tính dùng <b>ngăn xếp lời gọi</b> để nhớ các lời gọi đang dang dở — nên đệ quy sâu d tầng tốn O(d) bộ nhớ.',
        analogy: 'Muốn biết mình đứng thứ mấy trong hàng, bạn hỏi người phía trước; người đó lại hỏi người trước nữa… Người đầu hàng trả lời "1" (cơ sở), rồi câu trả lời được cộng dồn ngược về.',
        steps: [
            'Xác định đầu vào nhỏ nhất có đáp án ngay (cơ sở).',
            'Giả sử hàm đã giải đúng bài toán nhỏ hơn ("niềm tin đệ quy").',
            'Dùng kết quả đó để giải bài hiện tại.',
            'Đảm bảo mỗi lời gọi đều tiến gần tới cơ sở.'
        ],
        cx: { rows: [['Thời gian', 'Số lời gọi × việc mỗi lời gọi'], ['Bộ nhớ', 'O(độ sâu đệ quy)']] },
        when: [
            'Cấu trúc tự lặp lại: cây, đồ thị, biểu thức lồng nhau, thư mục.',
            'Bài toán chia được thành bài con cùng dạng: chia để trị, quay lui, QHĐ.'
        ],
        pitfalls: [
            'Thiếu hoặc sai trường hợp cơ sở → đệ quy vô hạn, "stack overflow".',
            'Python mặc định giới hạn độ sâu ~1000 (<code>sys.setrecursionlimit</code>); với n lớn nên chuyển sang vòng lặp + stack.',
            'Gọi lặp lại cùng một bài con (như fib) → bùng nổ cấp số nhân; dùng ghi nhớ (memoization).'
        ],
        code: `def factorial(n):
    if n <= 1:                     # trường hợp cơ sở
        return 1
    return n * factorial(n - 1)    # bước đệ quy

def sum_digits(n):
    return n if n < 10 else n % 10 + sum_digits(n // 10)

def flatten(x):                    # làm phẳng list lồng nhau
    if not isinstance(x, list):
        return [x]
    out = []
    for item in x:
        out.extend(flatten(item))
    return out

print(flatten([1, [2, [3, 4]], 5]))   # [1, 2, 3, 4, 5]`,
        practice: [['Fibonacci Number', 'fibonacci-number'], ['Pow(x, n)', 'powx-n'], ['Reverse Linked List', 'reverse-linked-list'], ['Maximum Depth of Binary Tree', 'maximum-depth-of-binary-tree']],
        related: ['dp-intro', 'backtracking', 'divide-conquer', 'stack'],
        viz: 'recursionStack'
    });

    T({
        id: 'problem-solving', cat: 'foundation', level: 1, interview: true,
        title: 'Quy trình giải một bài thuật toán', en: 'Problem-Solving Framework',
        tags: ['quy trình', 'tư duy', 'phỏng vấn', 'nhận diện dạng bài', 'pattern'],
        summary: 'Khung 6 bước giúp không bị "đứng hình": hiểu đề → ví dụ → vét cạn → tối ưu → code → kiểm thử.',
        idea: 'Người giỏi thuật toán không thuộc lòng mọi lời giải mà có <b>quy trình</b> và <b>kho dấu hiệu nhận diện</b>. Luôn bắt đầu bằng một lời giải đúng dù chậm, rồi tìm chỗ lãng phí (tính lặp lại, duyệt thừa) để cải tiến.',
        steps: [
            'Hiểu đề: đầu vào/đầu ra, ràng buộc, trường hợp biên (rỗng, 1 phần tử, trùng lặp, số âm).',
            'Tự làm tay 2–3 ví dụ nhỏ, kể cả một ví dụ "khó".',
            'Viết lời giải vét cạn và tính độ phức tạp.',
            'Tối ưu: tìm công việc bị lặp lại → dùng CTDL (hash map, heap, prefix sum…) hoặc kỹ thuật (hai con trỏ, QHĐ…).',
            'Code sạch: tên biến rõ nghĩa, tách hàm, xử lý biên.',
            'Kiểm thử: ví dụ đề bài, trường hợp biên, và so với vét cạn trên dữ liệu ngẫu nhiên.'
        ],
        table: {
            title: 'Dấu hiệu trong đề → kỹ thuật nên nghĩ tới',
            head: ['Dấu hiệu', 'Kỹ thuật'],
            rows: [
                ['Mảng đã sắp xếp, tìm vị trí / cặp', 'Tìm kiếm nhị phân, hai con trỏ'],
                ['Đoạn con liên tiếp tốt nhất', 'Cửa sổ trượt, prefix sum, Kadane'],
                ['"Phần tử lớn hơn / nhỏ hơn gần nhất"', 'Ngăn xếp đơn điệu'],
                ['k phần tử lớn/nhỏ nhất, dữ liệu dạng luồng', 'Heap'],
                ['Đếm, kiểm tra tồn tại nhanh', 'Hash map / hash set'],
                ['Số bước ít nhất, đường đi ngắn nhất', 'BFS (không trọng số), Dijkstra'],
                ['Liệt kê mọi cấu hình', 'Quay lui'],
                ['"Số cách", "lớn nhất / nhỏ nhất" có lựa chọn lặp lại', 'Quy hoạch động'],
                ['Gộp nhóm, kiểm tra liên thông khi thêm cạnh', 'Union-Find'],
                ['Tìm theo tiền tố', 'Trie']
            ]
        },
        pitfalls: [
            'Lao vào code tối ưu khi chưa chắc thuật toán đúng.',
            'Bỏ qua trường hợp biên — nguồn lỗi số 1.',
            'Im lặng khi phỏng vấn: người phỏng vấn chấm cả cách bạn suy nghĩ.'
        ],
        code: `# Viết vét cạn trước — vừa để hiểu bài, vừa làm "đáp án chuẩn" khi kiểm thử
def brute(a):                    # tổng đoạn con lớn nhất, O(n²)
    best = float("-inf")
    for i in range(len(a)):
        s = 0
        for j in range(i, len(a)):
            s += a[j]
            best = max(best, s)
    return best

def fast(a):                     # Kadane, O(n)
    cur = best = a[0]
    for x in a[1:]:
        cur = max(x, cur + x)
        best = max(best, cur)
    return best`,
        practice: [['Maximum Subarray', 'maximum-subarray'], ['Best Time to Buy and Sell Stock', 'best-time-to-buy-and-sell-stock']],
        related: ['constraints', 'stress-test', 'big-o']
    });

    T({
        id: 'bit-manipulation', cat: 'foundation', level: 2, interview: true,
        title: 'Thao tác bit', en: 'Bit Manipulation',
        tags: ['bit', 'xor', 'and', 'or', 'bitmask', 'nhị phân', 'dịch bit'],
        summary: 'Xử lý số ở mức từng bit: rất nhanh, gọn, dùng để biểu diễn tập hợp và nhiều mẹo kinh điển.',
        idea: 'Mỗi số nguyên là một dãy bit. Các phép <code>&amp;</code> (AND), <code>|</code> (OR), <code>^</code> (XOR), <code>~</code> (NOT), <code>&lt;&lt;</code>, <code>&gt;&gt;</code> chỉ tốn 1 lệnh máy. Một số n bit biểu diễn được một <b>tập con</b> của n phần tử: bit i bật nghĩa là phần tử i được chọn — nền tảng của QHĐ bitmask.',
        table: {
            title: 'Mẹo hay dùng',
            head: ['Biểu thức', 'Ý nghĩa'],
            rows: [
                ['x & 1', 'x lẻ?'],
                ['(x >> i) & 1', 'bit thứ i có bật không'],
                ['x | (1 << i)', 'bật bit i'],
                ['x & ~(1 << i)', 'tắt bit i'],
                ['x ^ (1 << i)', 'đảo bit i'],
                ['x & (x − 1)', 'xóa bit 1 thấp nhất; bằng 0 ⇔ x là lũy thừa của 2'],
                ['x & −x', 'giữ lại bit 1 thấp nhất (lowbit)'],
                ['a ^ a = 0, a ^ 0 = a', 'các cặp giống nhau triệt tiêu'],
                ['(1 << n) − 1', 'mặt nạ n bit 1 (tập đầy đủ)']
            ]
        },
        when: [
            'Biểu diễn tập con khi n ≤ 20–25: duyệt mọi tập con, QHĐ bitmask.',
            'Bài "mọi số xuất hiện 2 lần, trừ một số".',
            'Tiết kiệm bộ nhớ: mảng cờ dạng bitset; cờ quyền truy cập (read/write/execute).'
        ],
        pitfalls: [
            'Độ ưu tiên toán tử: trong C/Java <code>x &amp; 1 == 0</code> được hiểu là <code>x &amp; (1 == 0)</code> — luôn thêm ngoặc.',
            'Số âm biểu diễn bù hai; dịch phải số âm khác nhau giữa các ngôn ngữ.',
            'Tràn khi <code>1 &lt;&lt; 31</code> với int 32-bit — dùng <code>1LL &lt;&lt; i</code> trong C++.'
        ],
        code: `def single_number(nums):          # mọi số xuất hiện 2 lần, trừ 1 số
    x = 0
    for v in nums:
        x ^= v                        # cặp giống nhau triệt tiêu
    return x

def popcount(n):                      # đếm bit 1 (Python 3.10+: n.bit_count())
    c = 0
    while n:
        n &= n - 1                    # xóa bit 1 thấp nhất
        c += 1
    return c

def all_subsets(items):
    n = len(items)
    for mask in range(1 << n):        # 2^n tập con
        yield [items[i] for i in range(n) if (mask >> i) & 1]`,
        practice: [['Single Number', 'single-number'], ['Number of 1 Bits', 'number-of-1-bits'], ['Counting Bits', 'counting-bits'], ['Reverse Bits', 'reverse-bits'], ['Missing Number', 'missing-number']],
        related: ['bitmask-dp', 'subsets-permutations', 'fenwick'],
        viz: 'bits'
    });

    T({
        id: 'stress-test', cat: 'foundation', level: 2,
        title: 'Kiểm thử đối chiếu & gỡ lỗi thuật toán', en: 'Stress Testing',
        tags: ['kiểm thử', 'debug', 'stress test', 'brute force', 'test ngẫu nhiên'],
        summary: 'So lời giải nhanh với lời giải vét cạn trên hàng nghìn bộ dữ liệu ngẫu nhiên nhỏ để bắt lỗi.',
        idea: 'Lời giải tối ưu thường phức tạp và dễ sai ở trường hợp biên; lời giải vét cạn chậm nhưng gần như chắc đúng. Sinh dữ liệu ngẫu nhiên <b>nhỏ</b>, chạy cả hai, dừng ở bộ đầu tiên cho kết quả khác nhau — đó là test nhỏ nhất làm lộ lỗi, rất dễ debug.',
        steps: [
            'Viết <code>brute(a)</code> đơn giản nhất có thể.',
            'Viết <code>gen()</code> sinh dữ liệu nhỏ (n ≤ 8, giá trị ≤ 10) — dữ liệu nhỏ dễ đọc.',
            'Lặp hàng nghìn lần: nếu <code>fast(a) != brute(a)</code> thì in <code>a</code> ra và dừng.',
            'Sửa lỗi, chạy lại tới khi sạch; đưa test vừa tìm được vào bộ unit test.'
        ],
        when: [
            'Thuật toán tham lam mà chưa chứng minh được.',
            'Code nhiều chỉ số (QHĐ, hai con trỏ) dễ lệch 1.'
        ],
        pitfalls: [
            'Dữ liệu ngẫu nhiên quá lớn → tìm được lỗi nhưng không đọc nổi.',
            'Brute cũng sai → luôn tự kiểm tra brute bằng vài ví dụ tay.',
            'Ngẫu nhiên hiếm khi sinh ra: mảng rỗng, tất cả bằng nhau, đã sắp xếp — hãy thêm tay.'
        ],
        code: `import random

def brute(a):
    return max(sum(a[i:j]) for i in range(len(a)) for j in range(i + 1, len(a) + 1))

def fast(a):
    cur = best = a[0]
    for x in a[1:]:
        cur = max(x, cur + x)
        best = max(best, cur)
    return best

for _ in range(10000):
    a = [random.randint(-5, 5) for _ in range(random.randint(1, 8))]
    if fast(a) != brute(a):
        print("Sai với", a, fast(a), brute(a))
        break
else:
    print("OK sau 10000 test")`,
        related: ['problem-solving', 'numeric-pitfalls', 'greedy']
    });

    T({
        id: 'numeric-pitfalls', cat: 'foundation', level: 2,
        title: 'Tràn số & sai số số thực', en: 'Overflow & Floating Point',
        tags: ['tràn số', 'overflow', 'số thực', 'float', 'modulo', '64-bit', 'long long'],
        summary: 'Hai nguồn lỗi âm thầm: số nguyên vượt giới hạn kiểu dữ liệu và số thực không được lưu chính xác.',
        idea: 'int 32-bit chỉ chứa tới ~2.1 × 10⁹; tích hai số cỡ 10⁵ đã là 10¹⁰ → tràn trong C++/Java (Python tự mở rộng số nguyên nên không tràn). Số thực dấu phẩy động lưu <b>gần đúng</b> theo hệ nhị phân: <code>0.1 + 0.2 != 0.3</code>.',
        table: {
            title: 'Giới hạn các kiểu thường dùng',
            head: ['Kiểu', 'Phạm vi / độ chính xác'],
            rows: [['int32', '≈ ±2.1 × 10⁹'], ['int64 (long long)', '≈ ±9.2 × 10¹⁸'], ['double', '≈ 15–16 chữ số có nghĩa']]
        },
        steps: [
            'Dùng 64-bit khi tổng/tích có thể vượt 2 × 10⁹.',
            'Tính trung điểm an toàn: <code>mid = lo + (hi - lo) // 2</code>.',
            'Lấy modulo sau <b>mỗi</b> phép cộng/nhân khi đề yêu cầu (thường là 10⁹ + 7).',
            'So sánh số thực bằng sai số <code>abs(a - b) &lt; 1e-9</code>, hoặc đổi sang số nguyên (tiền tính bằng đồng/xu, so phân số bằng nhân chéo).'
        ],
        pitfalls: [
            '<code>(a * b) % m</code> vẫn tràn nếu a·b vượt 64-bit trước khi lấy mod.',
            'Số âm mod: trong C++/Java <code>-7 % 3 == -1</code>; dùng <code>((x % m) + m) % m</code>.',
            'Dùng float để lưu tiền.'
        ],
        code: `MOD = 10**9 + 7

def sum_pair_products(a):
    total = 0
    for i in range(len(a)):
        for j in range(i + 1, len(a)):
            total = (total + a[i] * a[j]) % MOD    # mod sau mỗi bước
    return total

print(0.1 + 0.2 == 0.3)                 # False!
print(abs((0.1 + 0.2) - 0.3) < 1e-9)    # True

from fractions import Fraction
print(Fraction(1, 10) + Fraction(2, 10) == Fraction(3, 10))   # True`,
        related: ['modular', 'stress-test', 'binary-search']
    });

    T({
        id: 'amortized', cat: 'foundation', level: 3,
        title: 'Phân tích khấu hao', en: 'Amortized Analysis',
        tags: ['khấu hao', 'amortized', 'mảng động', 'resize', 'chi phí trung bình'],
        summary: 'Tính chi phí trung bình của cả chuỗi thao tác, khi thỉnh thoảng mới có một thao tác đắt.',
        idea: 'Mảng động thỉnh thoảng phải cấp phát lại và chép toàn bộ — tốn O(n). Nhưng vì dung lượng tăng <b>gấp đôi</b>, tổng chi phí chép cho n lần append chỉ khoảng 1 + 2 + 4 + … + n &lt; 2n. Chia đều ra, mỗi append chỉ tốn <b>O(1) khấu hao</b>. Lập luận tương tự giải thích vì sao vòng while lồng trong for của ngăn xếp đơn điệu vẫn là O(n).',
        analogy: 'Mua gạo bao 50 kg: hôm mua thì vất vả, nhưng chia cho số ngày ăn thì mỗi ngày gần như không tốn công.',
        steps: [
            'Phương pháp gộp: tính tổng chi phí của n thao tác rồi chia cho n.',
            'Phương pháp kế toán: "trả trước" cho mỗi thao tác rẻ một ít để dành trả cho thao tác đắt về sau.',
            'Phương pháp thế năng: định nghĩa "năng lượng tích lũy" Φ của cấu trúc; chi phí khấu hao = chi phí thật + ΔΦ.'
        ],
        when: [
            'Phân tích mảng động, rehash của hash table, ngăn xếp/deque đơn điệu, Union-Find, splay tree.',
            'Chứng minh một vòng lặp lồng nhau thật ra là tuyến tính: mỗi phần tử vào/ra tối đa 1 lần.'
        ],
        pitfalls: [
            'Khấu hao ≠ trung bình xác suất: khấu hao là đảm bảo cho <b>mọi</b> chuỗi thao tác.',
            'Hệ thống thời gian thực vẫn có thể "khựng" ở đúng lần resize.',
            'Tăng dung lượng theo hằng số cộng (+10) thay vì nhân (×2) → tổng chi phí O(n²).'
        ],
        code: `class DynamicArray:
    def __init__(self):
        self.cap, self.size = 1, 0
        self.data = [None]

    def append(self, x):
        if self.size == self.cap:            # đầy → gấp đôi dung lượng
            new = [None] * (2 * self.cap)
            for i in range(self.size):       # O(n) nhưng hiếm khi xảy ra
                new[i] = self.data[i]
            self.data, self.cap = new, 2 * self.cap
        self.data[self.size] = x
        self.size += 1                       # khấu hao O(1)`,
        related: ['array', 'monotonic-stack', 'dsu'],
        viz: 'dynamicArray'
    });

    T({
        id: 'p-np', cat: 'foundation', level: 3,
        title: 'P, NP và bài toán "khó"', en: 'P vs NP, NP-hard',
        tags: ['np', 'np-hard', 'np-complete', 'tsp', 'bài toán khó', 'xấp xỉ', 'heuristic'],
        summary: 'Vì sao có những bài chưa ai tìm được thuật toán nhanh — và nên làm gì khi gặp chúng.',
        idea: '<b>P</b>: các bài giải được trong thời gian đa thức O(nᵏ). <b>NP</b>: các bài mà nếu có người đưa lời giải, ta <b>kiểm tra</b> được nhanh. <b>NP-đầy đủ</b> là những bài "khó nhất" của NP — người du lịch (TSP), tô màu đồ thị, cái túi, SAT… Chỉ cần giải nhanh một bài NP-đầy đủ là giải nhanh được tất cả; câu hỏi P = NP vẫn chưa có lời đáp.',
        analogy: 'Kiểm tra một lời giải Sudoku thì dễ, nhưng tự giải một Sudoku khổng lồ thì khó — đó chính là cảm giác của NP.',
        steps: [
            'n nhỏ (≤ 20): vét cạn thông minh — quay lui có cắt tỉa, QHĐ bitmask.',
            'Khai thác cấu trúc đặc biệt: cây, đồ thị hai phía, trọng số nhỏ (cái túi O(n·W)).',
            'Chấp nhận gần đúng: thuật toán xấp xỉ có đảm bảo, tham lam, heuristic (luyện kim mô phỏng, di truyền).',
            'Dùng bộ giải chuyên dụng: SAT solver, quy hoạch nguyên (ILP).'
        ],
        pitfalls: [
            '"Chưa nghĩ ra thuật toán nhanh" không có nghĩa bài là NP-khó — cần chứng minh bằng phép quy dẫn.',
            'Cái túi O(n·W) là <b>giả đa thức</b>: W có thể lớn theo cấp số nhân so với số bit của đầu vào.'
        ],
        code: `from itertools import permutations

def tsp_brute(dist):                  # O(n!) — chỉ dùng khi n rất nhỏ
    n = len(dist)
    best = float("inf")
    for perm in permutations(range(1, n)):
        route = (0,) + perm + (0,)
        cost = sum(dist[route[i]][route[i + 1]] for i in range(n))
        best = min(best, cost)
    return best`,
        related: ['backtracking', 'bitmask-dp', 'knapsack', 'greedy']
    });

    /* ========================= CTDL TUYẾN TÍNH ========================= */

    T({
        id: 'array', cat: 'linear', level: 1, interview: true,
        title: 'Mảng & mảng động', en: 'Array / Dynamic Array',
        tags: ['mảng', 'array', 'list', 'vector', 'chỉ số', 'mảng động'],
        summary: 'Dãy phần tử nằm liền nhau trong bộ nhớ: truy cập theo chỉ số O(1), chèn/xóa ở giữa O(n).',
        idea: 'Vì các phần tử nằm liền nhau, địa chỉ của <code>a[i]</code> = địa chỉ đầu + i × kích thước phần tử → truy cập tức thì. Đổi lại, chèn hoặc xóa ở giữa phải dời mọi phần tử phía sau. Mảng động (list của Python, vector của C++) tự gấp đôi dung lượng khi đầy nên thêm vào cuối vẫn O(1) khấu hao. Mảng còn thân thiện với bộ nhớ đệm CPU nên thực tế thường rất nhanh.',
        analogy: 'Dãy ghế đánh số trong rạp: tìm ghế số 57 ngay lập tức, nhưng muốn chen vào giữa hàng thì cả hàng phải dịch.',
        cx: { rows: [['Truy cập a[i]', 'O(1)'], ['Thêm / xóa ở cuối', 'O(1) khấu hao'], ['Chèn / xóa ở đầu hoặc giữa', 'O(n)'], ['Tìm theo giá trị (chưa sắp xếp)', 'O(n)']] },
        when: ['Cần truy cập ngẫu nhiên theo chỉ số.', 'Dữ liệu chủ yếu thêm vào cuối và duyệt tuần tự.'],
        pitfalls: [
            'Truy cập ngoài biên; trong Python <code>a[-1]</code> vẫn hợp lệ nên có thể che giấu lỗi chỉ số.',
            'Xóa phần tử khi đang duyệt xuôi → bỏ sót; hãy duyệt ngược hoặc tạo mảng mới.',
            'Tạo mảng 2 chiều sai: <code>[[0] * m] * n</code> dùng chung một hàng cho cả n hàng.'
        ],
        code: `a = [3, 1, 4]
a.append(5)          # O(1) khấu hao
a.insert(0, 9)       # O(n) — dời mọi phần tử
x = a[2]             # O(1)
a.pop()              # O(1) — xóa cuối
a.pop(0)             # O(n) — xóa đầu (dùng deque nếu cần thường xuyên)

a = [v for v in a if v % 2]            # lọc an toàn thay vì xóa khi duyệt

grid = [[0] * 4 for _ in range(3)]     # đúng: 3 hàng độc lập`,
        practice: [['Remove Duplicates from Sorted Array', 'remove-duplicates-from-sorted-array'], ['Rotate Array', 'rotate-array'], ['Move Zeroes', 'move-zeroes'], ['Product of Array Except Self', 'product-of-array-except-self']],
        related: ['amortized', 'matrix', 'linked-list', 'two-pointers'],
        viz: 'dynamicArray'
    });

    T({
        id: 'matrix', cat: 'linear', level: 1,
        title: 'Mảng 2 chiều (ma trận)', en: 'Matrix / 2D Array',
        tags: ['ma trận', 'matrix', 'lưới', 'grid', '2d', 'xoắn ốc', 'xoay ma trận'],
        summary: 'Bảng hàng × cột: nền tảng của bài toán lưới, bản đồ, ảnh và bảng quy hoạch động.',
        idea: 'Ô (r, c) thường được lưu theo thứ tự hàng (row-major): ô nhớ thứ <code>r·C + c</code>. Rất nhiều bài lưới quy về duyệt theo hướng: 4 hướng <code>(±1, 0), (0, ±1)</code> hoặc 8 hướng. Các thao tác hay gặp: duyệt xoắn ốc, xoay 90°, chuyển vị, tổng tiền tố 2 chiều.',
        cx: { rows: [['Truy cập M[r][c]', 'O(1)'], ['Duyệt toàn bộ', 'O(R × C)']] },
        when: ['Bản đồ, trò chơi (cờ, sudoku), xử lý ảnh.', 'Bảng QHĐ hai chiều.'],
        pitfalls: [
            'Nhầm hàng/cột (r ↔ c, x ↔ y).',
            'Quên kiểm tra biên trước khi truy cập ô kề.',
            'Duyệt theo cột trên mảng row-major chậm hơn vì không tận dụng cache.'
        ],
        code: `DIRS = [(1, 0), (-1, 0), (0, 1), (0, -1)]

def neighbors(grid, r, c):
    R, C = len(grid), len(grid[0])
    for dr, dc in DIRS:
        nr, nc = r + dr, c + dc
        if 0 <= nr < R and 0 <= nc < C:     # kiểm tra biên
            yield nr, nc

def rotate_90(M):                  # xoay phải = chuyển vị + đảo từng hàng
    n = len(M)
    for i in range(n):
        for j in range(i + 1, n):
            M[i][j], M[j][i] = M[j][i], M[i][j]
    for row in M:
        row.reverse()`,
        practice: [['Spiral Matrix', 'spiral-matrix'], ['Rotate Image', 'rotate-image'], ['Set Matrix Zeroes', 'set-matrix-zeroes'], ['Search a 2D Matrix', 'search-a-2d-matrix']],
        related: ['array', 'grid-graph', 'grid-dp', 'prefix-sum'],
        viz: 'matrixSpiral'
    });

    T({
        id: 'linked-list', cat: 'linear', level: 1, interview: true,
        title: 'Danh sách liên kết', en: 'Linked List',
        tags: ['danh sách liên kết', 'linked list', 'con trỏ', 'node', 'đảo ngược', 'dummy'],
        summary: 'Các nút rời rạc nối nhau bằng con trỏ: chèn/xóa O(1) khi đã có vị trí, nhưng truy cập theo chỉ số O(n).',
        idea: 'Mỗi nút chứa giá trị và con trỏ <code>next</code> (danh sách đôi có thêm <code>prev</code>). Không cần vùng nhớ liền nhau; chèn hay xóa chỉ là "nối dây" lại vài con trỏ. Kỹ thuật hay dùng: <b>nút giả (dummy head)</b> để khỏi xử lý riêng trường hợp đầu danh sách, và <b>hai con trỏ nhanh/chậm</b>.',
        analogy: 'Trò truy tìm kho báu: mỗi mảnh giấy ghi chỗ giấu mảnh tiếp theo. Muốn tới mảnh thứ 10 phải đi qua 9 mảnh trước.',
        cx: { rows: [['Truy cập phần tử thứ k', 'O(k)'], ['Chèn / xóa khi có con trỏ tới nút', 'O(1)'], ['Chèn đầu', 'O(1)'], ['Tìm theo giá trị', 'O(n)']] },
        when: [
            'Chèn/xóa nhiều ở giữa khi đã giữ con trỏ (LRU cache, trình soạn thảo văn bản).',
            'Hiện thực stack, queue, danh sách kề của đồ thị.'
        ],
        pitfalls: [
            'Đổi con trỏ sai thứ tự → mất phần sau của danh sách (luôn lưu <code>next</code> trước).',
            'Quên danh sách rỗng hoặc chỉ có 1 nút.',
            'Truy cập <code>node.next.next</code> khi <code>node.next</code> là None.'
        ],
        code: `class Node:
    def __init__(self, val, next=None):
        self.val, self.next = val, next

def reverse(head):
    prev, curr = None, head
    while curr:
        nxt = curr.next        # 1. giữ phần còn lại
        curr.next = prev       # 2. đảo mũi tên
        prev, curr = curr, nxt
    return prev

def remove_value(head, x):
    dummy = Node(0, head)      # nút giả: khỏi xử lý riêng khi xóa head
    cur = dummy
    while cur.next:
        if cur.next.val == x:
            cur.next = cur.next.next
        else:
            cur = cur.next
    return dummy.next`,
        practice: [['Reverse Linked List', 'reverse-linked-list'], ['Merge Two Sorted Lists', 'merge-two-sorted-lists'], ['Remove Nth Node From End of List', 'remove-nth-node-from-end-of-list'], ['Add Two Numbers', 'add-two-numbers'], ['Reverse Nodes in k-Group', 'reverse-nodes-in-k-group']],
        related: ['fast-slow-pointers', 'lru-cache', 'stack', 'queue'],
        viz: [{ key: 'linkedListOps', label: 'Chèn & xóa' }, { key: 'linkedListReverse', label: 'Đảo ngược' }]
    });

    T({
        id: 'stack', cat: 'linear', level: 1, interview: true,
        title: 'Ngăn xếp', en: 'Stack (LIFO)',
        tags: ['ngăn xếp', 'stack', 'lifo', 'push', 'pop', 'ngoặc', 'undo'],
        summary: 'Vào sau – ra trước (LIFO): push và pop ở đỉnh đều O(1).',
        idea: 'Chỉ thao tác ở một đầu: <code>push</code> đặt lên đỉnh, <code>pop</code> lấy từ đỉnh, <code>peek</code> xem đỉnh. Hợp với mọi thứ có tính <b>lồng nhau</b> hoặc <b>hoàn tác</b>: dấu ngoặc, lời gọi hàm, nút Back của trình duyệt, Undo trong trình soạn thảo.',
        analogy: 'Chồng đĩa: đĩa đặt lên sau cùng sẽ được lấy ra đầu tiên.',
        cx: { rows: [['push / pop / peek', 'O(1)'], ['Tìm phần tử bất kỳ', 'O(n)']] },
        when: [
            'Kiểm tra ngoặc hợp lệ, tính giá trị biểu thức.',
            'Khử đệ quy (DFS bằng vòng lặp).',
            'Tìm phần tử lớn hơn/nhỏ hơn gần nhất → ngăn xếp đơn điệu.'
        ],
        pitfalls: [
            'pop khi ngăn xếp rỗng → lỗi; luôn kiểm tra <code>if st</code>.',
            'Trong Python dùng list làm stack là chuẩn (append/pop cuối O(1)); đừng pop(0).'
        ],
        code: `def is_valid(s):
    pairs = {")": "(", "]": "[", "}": "{"}
    st = []
    for c in s:
        if c in "([{":
            st.append(c)
        elif not st or st.pop() != pairs[c]:
            return False
    return not st

def eval_rpn(tokens):               # ["2", "1", "+", "3", "*"] → 9
    st = []
    for t in tokens:
        if t in "+-*/":
            b, a = st.pop(), st.pop()
            st.append({"+": a + b, "-": a - b, "*": a * b, "/": int(a / b)}[t])
        else:
            st.append(int(t))
    return st[-1]`,
        practice: [['Valid Parentheses', 'valid-parentheses'], ['Min Stack', 'min-stack'], ['Evaluate Reverse Polish Notation', 'evaluate-reverse-polish-notation'], ['Decode String', 'decode-string'], ['Implement Queue using Stacks', 'implement-queue-using-stacks']],
        related: ['queue', 'monotonic-stack', 'recursion', 'dfs'],
        viz: 'stackParens'
    });

    T({
        id: 'queue', cat: 'linear', level: 1,
        title: 'Hàng đợi & Deque', en: 'Queue (FIFO) / Deque',
        tags: ['hàng đợi', 'queue', 'fifo', 'deque', 'mảng vòng', 'circular buffer'],
        summary: 'Vào trước – ra trước (FIFO); deque cho phép thêm/bớt ở cả hai đầu, đều O(1).',
        idea: 'Hàng đợi thêm ở cuối, lấy ở đầu — giữ đúng thứ tự đến. Hiện thực bằng <b>mảng vòng</b> (head/tail quay vòng bằng phép %) hoặc danh sách liên kết. <b>Deque</b> (double-ended queue) mở rộng cho cả hai đầu, là nền của hàng đợi đơn điệu và BFS 0-1.',
        analogy: 'Xếp hàng mua vé: ai đến trước được phục vụ trước.',
        cx: { rows: [['enqueue / dequeue', 'O(1)'], ['Deque: thêm/bớt hai đầu', 'O(1)']] },
        when: ['BFS; xử lý theo thứ tự đến (lập lịch, buffer, message queue).', 'Cửa sổ trượt cần bỏ phần tử cũ ở đầu.'],
        pitfalls: [
            '<code>list.pop(0)</code> trong Python là O(n) — dùng <code>collections.deque</code>.',
            'Mảng vòng: phân biệt đầy và rỗng (cùng có head == tail) bằng biến size.'
        ],
        code: `from collections import deque

q = deque()
q.append(1)            # vào cuối
q.append(2)
first = q.popleft()    # ra đầu → 1, O(1)
q.appendleft(0)        # deque: thêm vào đầu

class CircularQueue:
    def __init__(self, cap):
        self.buf, self.cap = [None] * cap, cap
        self.head = self.size = 0

    def enqueue(self, x):
        if self.size == self.cap:
            return False
        self.buf[(self.head + self.size) % self.cap] = x
        self.size += 1
        return True

    def dequeue(self):
        if self.size == 0:
            return None
        x = self.buf[self.head]
        self.head = (self.head + 1) % self.cap
        self.size -= 1
        return x`,
        practice: [['Design Circular Queue', 'design-circular-queue'], ['Implement Stack using Queues', 'implement-stack-using-queues'], ['Number of Recent Calls', 'number-of-recent-calls'], ['Design Circular Deque', 'design-circular-deque']],
        related: ['stack', 'bfs', 'monotonic-queue'],
        viz: 'circularQueue'
    });

    T({
        id: 'hash-table', cat: 'linear', level: 1, interview: true,
        title: 'Bảng băm', en: 'Hash Table / Hash Map',
        tags: ['bảng băm', 'hash', 'hash map', 'dict', 'set', 'va chạm', 'từ điển'],
        summary: 'Tra, thêm, xóa theo khóa trung bình O(1) nhờ hàm băm biến khóa thành chỉ số mảng.',
        idea: 'Hàm băm biến khóa thành một số rồi lấy mod số ô để ra vị trí. Hai khóa rơi vào cùng ô gọi là <b>va chạm</b>, xử lý bằng <b>chuỗi (chaining)</b> — mỗi ô là một danh sách — hoặc <b>địa chỉ mở</b> — dò tìm ô trống kế tiếp. Khi hệ số tải α = n/m quá cao, bảng tự mở rộng và băm lại (rehash) để giữ O(1).',
        analogy: 'Tủ gửi đồ siêu thị: số trên thẻ cho biết ngay ngăn nào, không phải lục từng ngăn.',
        cx: { rows: [['Tra / thêm / xóa (trung bình)', 'O(1)'], ['Xấu nhất (va chạm dồn một ô)', 'O(n)'], ['Duyệt theo thứ tự khóa', 'Không hỗ trợ — phải sắp xếp']] },
        when: [
            '"Đã gặp chưa?", đếm tần suất, gom nhóm theo khóa.',
            'Đổi O(n²) so từng cặp thành O(n): lưu phần bù (Two Sum).',
            'Lưu kết quả đã tính (memoization, cache).'
        ],
        pitfalls: [
            'Khóa phải bất biến: dùng tuple thay vì list làm khóa.',
            'Không có thứ tự sắp xếp — cần min/max/lân cận thì dùng cây cân bằng hoặc sắp xếp.',
            'Dữ liệu cố tình gây va chạm (anti-hash) có thể đẩy về O(n).'
        ],
        code: `def two_sum(nums, target):
    pos = {}                             # giá trị → chỉ số
    for i, x in enumerate(nums):
        if target - x in pos:            # O(1) trung bình
            return [pos[target - x], i]
        pos[x] = i

from collections import Counter, defaultdict

def group_anagrams(words):
    groups = defaultdict(list)
    for w in words:
        groups[tuple(sorted(w))].append(w)   # khóa bất biến
    return list(groups.values())

print(Counter("banana").most_common(1))      # [('a', 3)]`,
        practice: [['Two Sum', 'two-sum'], ['Contains Duplicate', 'contains-duplicate'], ['Group Anagrams', 'group-anagrams'], ['Longest Consecutive Sequence', 'longest-consecutive-sequence'], ['Design HashMap', 'design-hashmap']],
        related: ['array', 'lru-cache', 'char-counting', 'prefix-sum'],
        viz: 'hashChaining'
    });

    T({
        id: 'lru-cache', cat: 'linear', level: 2, interview: true,
        title: 'LRU Cache', en: 'Least Recently Used Cache',
        tags: ['lru', 'cache', 'bộ nhớ đệm', 'thiết kế', 'danh sách liên kết đôi', 'ordereddict'],
        summary: 'Bộ nhớ đệm sức chứa cố định, đầy thì đuổi phần tử lâu nhất chưa dùng — get/put đều O(1).',
        idea: 'Kết hợp hai cấu trúc: <b>hash map</b> (khóa → nút) để tìm O(1), và <b>danh sách liên kết đôi</b> xếp theo thời điểm dùng để di chuyển/xóa nút O(1). Mỗi lần get/put đưa nút lên đầu; khi vượt sức chứa, xóa nút ở cuối. Trong Python có thể dùng nhanh <code>OrderedDict</code> với <code>move_to_end</code> và <code>popitem(last=False)</code>.',
        analogy: 'Bàn làm việc chỉ để được 3 tập hồ sơ: tập vừa dùng đặt lên trên cùng, cần chỗ thì cất tập nằm dưới cùng vào tủ.',
        cx: { rows: [['get / put', 'O(1)'], ['Bộ nhớ', 'O(capacity)']] },
        when: ['Cache trình duyệt, CDN, cơ sở dữ liệu, kết quả API.', 'Câu hỏi thiết kế CTDL kinh điển trong phỏng vấn.'],
        pitfalls: [
            'Quên xóa khóa khỏi hash map khi đuổi phần tử.',
            'Dùng danh sách đơn → xóa nút ở giữa mất O(n).',
            'put khóa đã tồn tại: phải cập nhật giá trị và đưa lên đầu, không tạo nút trùng.'
        ],
        code: `class Node:
    def __init__(self, key=0, val=0):
        self.key, self.val = key, val
        self.prev = self.next = None

class LRUCache:
    def __init__(self, capacity):
        self.cap, self.map = capacity, {}
        self.head, self.tail = Node(), Node()       # hai nút giả
        self.head.next, self.tail.prev = self.tail, self.head

    def _remove(self, n):
        n.prev.next, n.next.prev = n.next, n.prev

    def _add_front(self, n):
        n.prev, n.next = self.head, self.head.next
        self.head.next.prev = n
        self.head.next = n

    def get(self, key):
        if key not in self.map:
            return -1
        n = self.map[key]
        self._remove(n)
        self._add_front(n)                          # vừa dùng → lên đầu
        return n.val

    def put(self, key, val):
        if key in self.map:
            self._remove(self.map[key])
        n = Node(key, val)
        self._add_front(n)
        self.map[key] = n
        if len(self.map) > self.cap:
            lru = self.tail.prev                    # cũ nhất nằm cuối
            self._remove(lru)
            del self.map[lru.key]`,
        practice: [['LRU Cache', 'lru-cache'], ['LFU Cache', 'lfu-cache'], ['Design Browser History', 'design-browser-history']],
        related: ['hash-table', 'linked-list'],
        viz: 'lru'
    });

    /* ============================== SẮP XẾP ============================== */

    const SORT_TABLE = {
        title: 'So sánh nhanh',
        head: ['Thuật toán', 'Tốt nhất', 'Trung bình', 'Xấu nhất', 'Bộ nhớ', 'Ổn định'],
        rows: [
            ['Bubble', 'O(n)', 'O(n²)', 'O(n²)', 'O(1)', 'Có'],
            ['Selection', 'O(n²)', 'O(n²)', 'O(n²)', 'O(1)', 'Không'],
            ['Insertion', 'O(n)', 'O(n²)', 'O(n²)', 'O(1)', 'Có'],
            ['Shell', 'O(n log n)', '≈ O(n^1.3)', 'O(n²)', 'O(1)', 'Không'],
            ['Merge', 'O(n log n)', 'O(n log n)', 'O(n log n)', 'O(n)', 'Có'],
            ['Quick', 'O(n log n)', 'O(n log n)', 'O(n²)', 'O(log n)', 'Không'],
            ['Heap', 'O(n log n)', 'O(n log n)', 'O(n log n)', 'O(1)', 'Không'],
            ['Counting', 'O(n + k)', 'O(n + k)', 'O(n + k)', 'O(n + k)', 'Có'],
            ['Radix', 'O(d(n + b))', 'O(d(n + b))', 'O(d(n + b))', 'O(n + b)', 'Có']
        ]
    };
    const sortCx = (best, avg, worst, space, stable) => ({ rows: [['Tốt nhất', best], ['Trung bình', avg], ['Xấu nhất', worst], ['Bộ nhớ phụ', space], ['Ổn định', stable]] });

    T({
        id: 'sort-overview', cat: 'sort', level: 1, interview: true,
        title: 'Tổng quan & đua các thuật toán sắp xếp', en: 'Sorting Overview',
        tags: ['sắp xếp', 'sort', 'so sánh', 'ổn định', 'stable', 'timsort'],
        summary: 'Cho 5 thuật toán chạy đua trên cùng dữ liệu, và biết khi nào nên chọn cái nào.',
        idea: 'Sắp xếp là bước tiền xử lý của rất nhiều thuật toán (tìm nhị phân, hai con trỏ, tham lam, đường quét). Mọi thuật toán <b>dựa trên so sánh</b> đều không thể nhanh hơn O(n log n) ở trường hợp xấu nhất; muốn nhanh hơn phải khai thác đặc điểm của khóa (counting/radix sort). Trong thực tế hãy dùng sort của thư viện (Timsort trong Python/Java, introsort trong C++).',
        table: SORT_TABLE,
        when: [
            'Dữ liệu nhỏ hoặc gần như đã sắp xếp → insertion sort.',
            'Cần ổn định, dữ liệu lớn, danh sách liên kết, dữ liệu không vừa RAM → merge sort.',
            'Cần nhanh trong bộ nhớ, không cần ổn định → quick sort (pivot ngẫu nhiên).',
            'Khóa là số nguyên trong phạm vi nhỏ → counting / radix sort.'
        ],
        pitfalls: [
            '"Ổn định" = các phần tử bằng nhau giữ nguyên thứ tự ban đầu — quan trọng khi sắp xếp theo nhiều tiêu chí.',
            'Tự viết sort khi không cần — thư viện đã được tối ưu rất kỹ.'
        ],
        code: `people = [("An", 25), ("Bình", 19), ("Chi", 25)]
people.sort(key=lambda p: p[1])              # theo tuổi (ổn định)
people.sort(key=lambda p: (-p[1], p[0]))     # tuổi giảm dần, rồi theo tên

nums = [5, 1, 9, 3]
top2 = sorted(nums, reverse=True)[:2]        # sorted() trả về list mới → [9, 5]

from functools import cmp_to_key
def compare(a, b):                           # ghép thành số lớn nhất
    return -1 if a + b > b + a else 1
print("".join(sorted(["3", "30", "34", "5", "9"], key=cmp_to_key(compare))))  # 9534330`,
        practice: [['Sort an Array', 'sort-an-array'], ['Sort Colors', 'sort-colors'], ['Largest Number', 'largest-number'], ['Merge Intervals', 'merge-intervals']],
        related: ['bubble-sort', 'merge-sort', 'quick-sort', 'counting-sort'],
        viz: 'sortRace'
    });

    T({
        id: 'bubble-sort', cat: 'sort', level: 1,
        title: 'Sắp xếp nổi bọt', en: 'Bubble Sort',
        tags: ['bubble sort', 'nổi bọt', 'hoán đổi', 'sắp xếp đơn giản'],
        summary: 'Liên tục đổi chỗ hai phần tử kề nhau nếu sai thứ tự; phần tử lớn nhất "nổi" dần về cuối.',
        idea: 'Mỗi lượt đi từ trái sang phải, so từng cặp kề nhau và hoán đổi nếu sai thứ tự. Sau lượt thứ i, i phần tử lớn nhất đã về đúng chỗ ở cuối. Nếu cả một lượt không có hoán đổi nào thì mảng đã có thứ tự — dừng sớm.',
        analogy: 'Bọt khí trong cốc nước: bọt to nổi lên mặt trước.',
        cx: sortCx('O(n) — đã sắp xếp, có dừng sớm', 'O(n²)', 'O(n²)', 'O(1)', 'Có'),
        when: ['Chủ yếu để học: minh họa so sánh–hoán đổi, tính ổn định, dừng sớm.', 'Kiểm tra nhanh một mảng "gần như đã sắp xếp".'],
        pitfalls: ['Quên thu hẹp vòng trong (n − 1 − i) → so thừa.', 'Không dùng cho dữ liệu lớn: 10⁵ phần tử ≈ 5·10⁹ phép so sánh.'],
        code: `def bubble_sort(a):
    n = len(a)
    for i in range(n - 1):
        swapped = False
        for j in range(n - 1 - i):
            if a[j] > a[j + 1]:
                a[j], a[j + 1] = a[j + 1], a[j]
                swapped = True
        if not swapped:          # không hoán đổi → đã có thứ tự
            break
    return a`,
        practice: [['Sort an Array', 'sort-an-array'], ['Height Checker', 'height-checker']],
        related: ['selection-sort', 'insertion-sort', 'sort-overview'],
        viz: 'bubbleSort'
    });

    T({
        id: 'selection-sort', cat: 'sort', level: 1,
        title: 'Sắp xếp chọn', en: 'Selection Sort',
        tags: ['selection sort', 'sắp xếp chọn', 'tìm min'],
        summary: 'Mỗi lượt chọn phần tử nhỏ nhất của phần chưa sắp xếp và đưa về đầu phần đó.',
        idea: 'Chia mảng thành phần đã sắp xếp (trái) và chưa sắp xếp (phải). Mỗi lượt quét phần phải tìm min rồi hoán đổi về đầu phần đó. Luôn tốn n(n−1)/2 phép so sánh nhưng <b>chỉ tối đa n − 1 lần hoán đổi</b> — có ích khi thao tác ghi rất đắt.',
        cx: sortCx('O(n²)', 'O(n²)', 'O(n²)', 'O(1)', 'Không'),
        when: ['Khi ghi/hoán đổi đắt hơn nhiều so với so sánh (ví dụ bộ nhớ flash).', 'Học khái niệm bất biến vòng lặp: sau lượt i, a[0..i] là i+1 phần tử nhỏ nhất đã sắp xếp.'],
        pitfalls: ['Không ổn định: hoán đổi xa có thể đảo thứ tự hai phần tử bằng nhau.', 'Không nhanh hơn trên dữ liệu đã sắp xếp (vẫn O(n²)).'],
        code: `def selection_sort(a):
    n = len(a)
    for i in range(n - 1):
        m = i
        for j in range(i + 1, n):
            if a[j] < a[m]:
                m = j
        a[i], a[m] = a[m], a[i]
    return a`,
        practice: [['Sort an Array', 'sort-an-array'], ['Kth Largest Element in an Array', 'kth-largest-element-in-an-array']],
        related: ['bubble-sort', 'heap-sort', 'sort-overview'],
        viz: 'selectionSort'
    });

    T({
        id: 'insertion-sort', cat: 'sort', level: 1,
        title: 'Sắp xếp chèn', en: 'Insertion Sort',
        tags: ['insertion sort', 'sắp xếp chèn', 'xếp bài', 'gần như đã sắp xếp'],
        summary: 'Chèn lần lượt từng phần tử vào đúng chỗ trong phần đã sắp xếp — như xếp bài trên tay.',
        idea: 'Duy trì đoạn đầu <code>a[0..i−1]</code> đã có thứ tự. Lấy <code>a[i]</code> ra (key), dịch các phần tử lớn hơn key sang phải một ô, rồi đặt key vào chỗ trống. Rất nhanh với dữ liệu nhỏ hoặc gần như đã sắp xếp — nên Timsort và introsort dùng nó cho các đoạn ngắn.',
        analogy: 'Rút từng lá bài và cắm vào đúng chỗ trên tay đang cầm.',
        cx: sortCx('O(n)', 'O(n²)', 'O(n²)', 'O(1)', 'Có'),
        when: ['n nhỏ (≤ ~32) hoặc dữ liệu gần như có thứ tự.', 'Dữ liệu đến theo luồng: chèn phần tử mới vào dãy đã sắp xếp.'],
        pitfalls: ['Dùng hoán đổi liên tục thay vì dịch → gấp ~3 lần số lần ghi.', 'Điều kiện phải là <code>a[j] &gt; key</code> (không phải ≥) để giữ tính ổn định.'],
        code: `def insertion_sort(a):
    for i in range(1, len(a)):
        key = a[i]
        j = i - 1
        while j >= 0 and a[j] > key:
            a[j + 1] = a[j]      # dịch sang phải
            j -= 1
        a[j + 1] = key
    return a

import bisect
arr = []
for x in [5, 2, 8, 1]:
    bisect.insort(arr, x)        # giữ thứ tự khi chèn: tìm O(log n), chèn O(n)`,
        practice: [['Insertion Sort List', 'insertion-sort-list'], ['Sort an Array', 'sort-an-array']],
        related: ['shell-sort', 'bubble-sort', 'binary-search'],
        viz: 'insertionSort'
    });

    T({
        id: 'merge-sort', cat: 'sort', level: 2, interview: true,
        title: 'Sắp xếp trộn', en: 'Merge Sort',
        tags: ['merge sort', 'sắp xếp trộn', 'chia để trị', 'ổn định', 'nghịch thế', 'inversion'],
        summary: 'Chia đôi, sắp xếp từng nửa rồi trộn hai nửa đã sắp xếp — luôn O(n log n) và ổn định.',
        idea: 'Chia để trị: mảng 1 phần tử luôn có thứ tự. Trộn hai dãy đã sắp xếp chỉ cần hai con trỏ — mỗi bước lấy phần tử nhỏ hơn ở đầu hai dãy, tốn O(n). Có log₂n tầng chia, mỗi tầng trộn tổng cộng n phần tử → <b>O(n log n) trong mọi trường hợp</b>.',
        analogy: 'Hai chồng bài đã xếp sẵn: liên tục lật lá nhỏ hơn ở đầu hai chồng để tạo thành một chồng có thứ tự.',
        cx: sortCx('O(n log n)', 'O(n log n)', 'O(n log n)', 'O(n)', 'Có'),
        when: [
            'Cần đảm bảo O(n log n) và tính ổn định.',
            'Sắp xếp danh sách liên kết (không cần truy cập ngẫu nhiên).',
            'Sắp xếp ngoài (external sort) khi dữ liệu lớn hơn RAM.',
            'Biến thể: đếm cặp nghịch thế ngay trong lúc trộn.'
        ],
        pitfalls: ['Tốn O(n) bộ nhớ phụ.', 'Dùng <code>&lt;</code> thay vì <code>&lt;=</code> khi trộn sẽ mất tính ổn định.', 'Cắt mảng (slicing) liên tục tạo nhiều bản sao; có thể dùng một mảng tạm chung.'],
        code: `def merge_sort(a):
    if len(a) <= 1:
        return a
    mid = len(a) // 2
    left, right = merge_sort(a[:mid]), merge_sort(a[mid:])
    out, i, j = [], 0, 0
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:            # <= giữ tính ổn định
            out.append(left[i]); i += 1
        else:
            out.append(right[j]); j += 1
    return out + left[i:] + right[j:]

def count_inversions(a):                   # số cặp i < j mà a[i] > a[j]
    if len(a) <= 1:
        return a, 0
    mid = len(a) // 2
    L, x = count_inversions(a[:mid])
    R, y = count_inversions(a[mid:])
    out, i, j, inv = [], 0, 0, x + y
    while i < len(L) and j < len(R):
        if L[i] <= R[j]:
            out.append(L[i]); i += 1
        else:
            out.append(R[j]); j += 1
            inv += len(L) - i              # mọi phần tử còn lại của L đều > R[j]
    return out + L[i:] + R[j:], inv`,
        practice: [['Sort an Array', 'sort-an-array'], ['Sort List', 'sort-list'], ['Merge k Sorted Lists', 'merge-k-sorted-lists'], ['Count of Smaller Numbers After Self', 'count-of-smaller-numbers-after-self'], ['Reverse Pairs', 'reverse-pairs']],
        related: ['divide-conquer', 'quick-sort', 'recursion'],
        viz: 'mergeSort'
    });

    T({
        id: 'quick-sort', cat: 'sort', level: 2, interview: true,
        title: 'Sắp xếp nhanh', en: 'Quick Sort',
        tags: ['quick sort', 'sắp xếp nhanh', 'pivot', 'phân hoạch', 'partition', 'quickselect'],
        summary: 'Chọn pivot, đưa phần tử nhỏ hơn sang trái và lớn hơn sang phải, rồi đệ quy hai phía.',
        idea: '<b>Phân hoạch</b> đặt pivot vào đúng vị trí cuối cùng của nó chỉ trong O(n). Nếu pivot chia mảng khá cân bằng thì có O(log n) tầng → O(n log n). Nếu pivot luôn là min/max (vd. chọn phần tử cuối trên mảng đã sắp xếp) thì thoái hóa thành O(n²) — vì vậy nên chọn pivot <b>ngẫu nhiên</b> hoặc trung vị của 3.',
        cx: sortCx('O(n log n)', 'O(n log n)', 'O(n²)', 'O(log n) — ngăn xếp đệ quy', 'Không'),
        when: ['Sắp xếp trong bộ nhớ, cần nhanh trên thực tế (ít bộ nhớ, thân thiện cache).', 'Quickselect: tìm phần tử lớn thứ k trung bình O(n).'],
        pitfalls: ['Pivot cố định + dữ liệu đã sắp xếp → O(n²).', 'Nhiều phần tử trùng → dùng phân hoạch 3 đường (&lt;, =, &gt;).', 'Không ổn định.'],
        code: `import random

def quick_sort(a, lo=0, hi=None):
    if hi is None:
        hi = len(a) - 1
    if lo >= hi:
        return a
    r = random.randint(lo, hi)             # pivot ngẫu nhiên tránh O(n²)
    a[r], a[hi] = a[hi], a[r]
    pivot, i = a[hi], lo
    for j in range(lo, hi):
        if a[j] < pivot:
            a[i], a[j] = a[j], a[i]
            i += 1
    a[i], a[hi] = a[hi], a[i]              # pivot về đúng chỗ
    quick_sort(a, lo, i - 1)
    quick_sort(a, i + 1, hi)
    return a

def quickselect(a, k):                     # phần tử nhỏ thứ k (0-based), TB O(n)
    pivot = random.choice(a)
    lows = [x for x in a if x < pivot]
    eq = [x for x in a if x == pivot]
    if k < len(lows):
        return quickselect(lows, k)
    if k < len(lows) + len(eq):
        return pivot
    highs = [x for x in a if x > pivot]
    return quickselect(highs, k - len(lows) - len(eq))`,
        practice: [['Sort an Array', 'sort-an-array'], ['Kth Largest Element in an Array', 'kth-largest-element-in-an-array'], ['Sort Colors', 'sort-colors'], ['K Closest Points to Origin', 'k-closest-points-to-origin']],
        related: ['merge-sort', 'divide-conquer', 'heap-sort'],
        viz: 'quickSort'
    });

    T({
        id: 'heap-sort', cat: 'sort', level: 2,
        title: 'Sắp xếp vun đống', en: 'Heap Sort',
        tags: ['heap sort', 'vun đống', 'max-heap', 'heapify'],
        summary: 'Xây max-heap rồi liên tục đưa phần tử lớn nhất ở gốc về cuối mảng — O(n log n), O(1) bộ nhớ.',
        idea: 'Nhìn mảng như một cây nhị phân hoàn chỉnh (con của i là 2i+1 và 2i+2). Bước 1: vun đống từ dưới lên trong O(n) để có max-heap. Bước 2: lặp lại — hoán đổi gốc (max) với phần tử cuối vùng heap, thu nhỏ heap, rồi vun xuống từ gốc trong O(log n).',
        cx: sortCx('O(n log n)', 'O(n log n)', 'O(n log n)', 'O(1)', 'Không'),
        when: ['Cần đảm bảo O(n log n) xấu nhất mà không tốn bộ nhớ phụ (hệ nhúng; introsort dùng làm phương án dự phòng).', 'Hiểu heap — nền tảng của hàng đợi ưu tiên.'],
        pitfalls: ['Không ổn định; thực tế chậm hơn quick sort do truy cập bộ nhớ nhảy cóc.', 'Lệch chỉ số khi dùng mảng bắt đầu từ 1 (con là 2i và 2i+1).'],
        code: `def heap_sort(a):
    n = len(a)

    def sift_down(i, size):
        while 2 * i + 1 < size:
            c = 2 * i + 1
            if c + 1 < size and a[c + 1] > a[c]:
                c += 1
            if a[i] >= a[c]:
                break
            a[i], a[c] = a[c], a[i]
            i = c

    for i in range(n // 2 - 1, -1, -1):    # xây max-heap O(n)
        sift_down(i, n)
    for end in range(n - 1, 0, -1):
        a[0], a[end] = a[end], a[0]        # max về cuối
        sift_down(0, end)
    return a`,
        practice: [['Sort an Array', 'sort-an-array'], ['Kth Largest Element in an Array', 'kth-largest-element-in-an-array'], ['Top K Frequent Elements', 'top-k-frequent-elements']],
        related: ['heap', 'quick-sort', 'selection-sort'],
        viz: 'heapSort'
    });

    T({
        id: 'counting-sort', cat: 'sort', level: 2,
        title: 'Sắp xếp đếm', en: 'Counting Sort',
        tags: ['counting sort', 'sắp xếp đếm', 'không so sánh', 'tuyến tính'],
        summary: 'Đếm số lần xuất hiện của mỗi giá trị rồi dựng lại mảng — O(n + k), không cần phép so sánh nào.',
        idea: 'Khi khóa là số nguyên trong phạm vi nhỏ [0, k], tạo mảng đếm kích thước k + 1. Cộng dồn để biết vị trí kết thúc của từng giá trị, rồi <b>duyệt ngược</b> mảng gốc để đặt từng phần tử vào đúng chỗ — giữ được tính ổn định (bắt buộc khi làm bước con của radix sort).',
        cx: sortCx('O(n + k)', 'O(n + k)', 'O(n + k)', 'O(n + k)', 'Có'),
        when: ['Giá trị nguyên, phạm vi k không quá lớn so với n (điểm 0–10, tuổi, ký tự ASCII).', 'Bước con ổn định của radix sort.'],
        pitfalls: ['k rất lớn (giá trị tới 10⁹) → tốn bộ nhớ khủng; dùng sort thường hoặc nén tọa độ.', 'Số âm: dịch giá trị bằng cách trừ đi min.'],
        code: `def counting_sort(a):
    if not a:
        return a
    lo, hi = min(a), max(a)
    cnt = [0] * (hi - lo + 1)
    for x in a:
        cnt[x - lo] += 1                   # dịch để hỗ trợ số âm
    for v in range(1, len(cnt)):
        cnt[v] += cnt[v - 1]               # vị trí kết thúc của mỗi giá trị
    out = [0] * len(a)
    for x in reversed(a):                  # duyệt ngược → ổn định
        cnt[x - lo] -= 1
        out[cnt[x - lo]] = x
    return out`,
        practice: [['Sort Colors', 'sort-colors'], ['Relative Sort Array', 'relative-sort-array'], ['H-Index', 'h-index']],
        related: ['radix-sort', 'char-counting', 'sort-overview'],
        viz: 'countingSort'
    });

    T({
        id: 'radix-sort', cat: 'sort', level: 2,
        title: 'Sắp xếp theo cơ số', en: 'Radix Sort',
        tags: ['radix sort', 'cơ số', 'chữ số', 'lsd', 'bucket'],
        summary: 'Sắp xếp theo từng chữ số từ hàng thấp lên hàng cao, mỗi lượt dùng một phép sắp xếp ổn định.',
        idea: 'LSD radix sort: lượt 1 sắp theo hàng đơn vị, lượt 2 theo hàng chục… Vì mỗi lượt ổn định nên thứ tự đã có của các hàng thấp được giữ lại. Với d chữ số và cơ số b: <b>O(d · (n + b))</b>. Với số nguyên 32-bit, chọn b = 256 thì chỉ cần 4 lượt.',
        cx: sortCx('O(d(n + b))', 'O(d(n + b))', 'O(d(n + b))', 'O(n + b)', 'Có'),
        when: ['Số nguyên / chuỗi độ dài cố định, n rất lớn (mã bưu chính, số điện thoại, địa chỉ IP).', 'Xây mảng hậu tố và các bài cần sắp xếp tuyến tính.'],
        pitfalls: ['Bước con không ổn định → kết quả sai.', 'Số âm cần xử lý riêng (tách âm/dương hoặc cộng offset).'],
        code: `def radix_sort(a, base=10):
    if not a:
        return a
    exp, m = 1, max(a)
    while m // exp > 0:
        buckets = [[] for _ in range(base)]
        for x in a:
            buckets[(x // exp) % base].append(x)    # ổn định
        a = [x for b in buckets for x in b]
        exp *= base
    return a`,
        practice: [['Maximum Gap', 'maximum-gap'], ['Sort an Array', 'sort-an-array']],
        related: ['counting-sort', 'sort-overview'],
        viz: 'radixSort'
    });

    T({
        id: 'shell-sort', cat: 'sort', level: 2,
        title: 'Shell sort', en: 'Shell Sort',
        tags: ['shell sort', 'gap', 'khoảng cách', 'insertion'],
        summary: 'Sắp xếp chèn trên các phần tử cách xa nhau (gap), rồi thu nhỏ gap dần về 1.',
        idea: 'Insertion sort chậm vì mỗi lần chỉ dịch phần tử một ô. Shell sort cho phép phần tử nhỏ "nhảy" xa về bên trái qua các gap lớn, nên khi gap = 1 mảng đã gần như có thứ tự và bước cuối chạy rất nhanh. Hiệu năng phụ thuộc dãy gap (n/2, n/4… hoặc dãy Ciura 1, 4, 10, 23, 57, 132…).',
        cx: sortCx('O(n log n)', '≈ O(n^1.3), tùy dãy gap', 'O(n²) với dãy n/2', 'O(1)', 'Không'),
        when: ['Hệ nhúng cần code ngắn, không đệ quy, bộ nhớ O(1).'],
        pitfalls: ['Dãy gap kém (lũy thừa của 2) làm hiệu năng tệ.', 'Không ổn định.'],
        code: `def shell_sort(a):
    gap = len(a) // 2
    while gap > 0:
        for i in range(gap, len(a)):
            x, j = a[i], i
            while j >= gap and a[j - gap] > x:
                a[j] = a[j - gap]
                j -= gap
            a[j] = x
        gap //= 2
    return a`,
        practice: [['Sort an Array', 'sort-an-array']],
        related: ['insertion-sort', 'sort-overview'],
        viz: 'shellSort'
    });

    /* ============================== TÌM KIẾM ============================== */

    T({
        id: 'linear-search', cat: 'search', level: 1,
        title: 'Tìm kiếm tuần tự', en: 'Linear Search',
        tags: ['tìm kiếm tuần tự', 'linear search', 'duyệt'],
        summary: 'Duyệt lần lượt từng phần tử cho tới khi gặp giá trị cần tìm — O(n), không cần dữ liệu sắp xếp.',
        idea: 'Cách tìm đơn giản nhất và đúng với mọi dữ liệu. Nếu chỉ tìm một vài lần trên dữ liệu chưa sắp xếp thì đây là lựa chọn hợp lý (sắp xếp tốn O(n log n) còn lâu hơn). Nếu phải tìm nhiều lần, hãy tiền xử lý: sắp xếp + tìm nhị phân, hoặc đưa vào hash set.',
        cx: { rows: [['Tốt nhất', 'O(1)'], ['Trung bình / xấu nhất', 'O(n)'], ['Bộ nhớ', 'O(1)']] },
        when: ['Dữ liệu nhỏ, chưa sắp xếp, tìm ít lần.', 'Điều kiện tìm phức tạp: phần tử đầu tiên thỏa một hàm bất kỳ.'],
        pitfalls: ['Tìm lặp lại trong vòng lặp → O(n²) ngầm (vd. <code>if x in list</code> bên trong vòng for).'],
        code: `def linear_search(a, x):
    for i, v in enumerate(a):
        if v == x:
            return i
    return -1

a = [4, -2, 7, -5]
first_negative = next((v for v in a if v < 0), None)   # -2`,
        practice: [['Check If N and Its Double Exist', 'check-if-n-and-its-double-exist'], ['Two Sum', 'two-sum']],
        related: ['binary-search', 'hash-table'],
        viz: 'linearSearch'
    });

    T({
        id: 'binary-search', cat: 'search', level: 1, interview: true,
        title: 'Tìm kiếm nhị phân', en: 'Binary Search',
        tags: ['tìm kiếm nhị phân', 'binary search', 'chia đôi', 'lower bound', 'upper bound', 'bisect'],
        summary: 'Trên dãy đã sắp xếp, so với phần tử giữa rồi bỏ đi một nửa — chỉ cần O(log n) bước.',
        idea: 'Giữ vùng tìm kiếm [lo, hi]. So x với <code>a[mid]</code>: bằng thì xong, lớn hơn thì bỏ nửa trái, nhỏ hơn thì bỏ nửa phải. 1 tỷ phần tử chỉ cần khoảng 30 bước. Tổng quát hơn: tìm nhị phân dùng được cho mọi <b>điều kiện đơn điệu</b> — tìm vị trí đầu tiên mà điều kiện chuyển từ Sai sang Đúng.',
        analogy: 'Trò đoán số 1–100 với gợi ý "lớn hơn / nhỏ hơn": luôn đoán số ở giữa, tối đa 7 lần là ra.',
        cx: { rows: [['Thời gian', 'O(log n)'], ['Bộ nhớ', 'O(1)']] },
        when: ['Mảng đã sắp xếp: tìm vị trí, lower/upper bound, đếm số lần xuất hiện.', 'Mảng bị xoay, tìm đỉnh, ma trận có thứ tự.', 'Hàm đơn điệu → xem "Tìm nhị phân trên đáp án".'],
        pitfalls: [
            'Vòng lặp vô hạn do cập nhật <code>lo = mid</code> khi <code>mid = (lo + hi) // 2</code>.',
            'Lệch 1: thống nhất một quy ước — đoạn đóng [lo, hi] hay nửa mở [lo, hi).',
            'Tràn số khi tính lo + hi trong C++/Java → dùng <code>lo + (hi − lo) / 2</code>.'
        ],
        code: `def binary_search(a, x):
    lo, hi = 0, len(a) - 1               # đoạn đóng [lo, hi]
    while lo <= hi:
        mid = (lo + hi) // 2
        if a[mid] == x:
            return mid
        if a[mid] < x:
            lo = mid + 1
        else:
            hi = mid - 1
    return -1

def lower_bound(a, x):                   # vị trí đầu tiên có a[i] >= x
    lo, hi = 0, len(a)                   # nửa mở [lo, hi)
    while lo < hi:
        mid = (lo + hi) // 2
        if a[mid] < x:
            lo = mid + 1
        else:
            hi = mid
    return lo

import bisect
bisect.bisect_left([1, 3, 3, 5], 3)     # 1 — lower_bound
bisect.bisect_right([1, 3, 3, 5], 3)    # 3 — upper_bound`,
        practice: [['Binary Search', 'binary-search'], ['Search Insert Position', 'search-insert-position'], ['First Bad Version', 'first-bad-version'], ['Find First and Last Position of Element in Sorted Array', 'find-first-and-last-position-of-element-in-sorted-array'], ['Search in Rotated Sorted Array', 'search-in-rotated-sorted-array'], ['Median of Two Sorted Arrays', 'median-of-two-sorted-arrays']],
        related: ['binary-search-answer', 'linear-search', 'two-pointers'],
        viz: 'binarySearch'
    });

    T({
        id: 'binary-search-answer', cat: 'search', level: 2, interview: true,
        title: 'Tìm nhị phân trên đáp án', en: 'Binary Search on Answer',
        tags: ['tìm nhị phân trên đáp án', 'binary search on answer', 'đơn điệu', 'tối thiểu hóa giá trị lớn nhất', 'koko'],
        summary: 'Khi đề hỏi "giá trị nhỏ nhất / lớn nhất để thỏa điều kiện" và điều kiện đơn điệu, hãy tìm nhị phân trên chính đáp án.',
        idea: 'Thay vì tìm trong mảng, ta tìm trong <b>không gian đáp án</b> [lo, hi]. Cần một hàm kiểm tra <code>ok(x)</code> <b>đơn điệu</b>: nếu x thỏa thì mọi giá trị lớn hơn cũng thỏa (hoặc ngược lại). Mỗi bước gọi ok(mid) để loại một nửa. Tổng: O(log(hi − lo) × chi phí của ok).',
        steps: ['Xác định đáp án chắc chắn nằm trong [lo, hi].', 'Viết ok(x): "với x thì có làm được không?" — thường là một vòng tham lam O(n).', 'Kiểm tra tính đơn điệu.', 'Tìm x nhỏ nhất có ok(x) = True.'],
        when: ['Cụm từ "tối thiểu hóa giá trị lớn nhất" / "tối đa hóa giá trị nhỏ nhất".', 'Tốc độ, sức chứa, thời gian nhỏ nhất để hoàn thành trong hạn.', 'Đáp án rất lớn (10⁹, 10¹⁸) nhưng kiểm tra một giá trị thì dễ.'],
        pitfalls: ['ok không đơn điệu → kết quả sai.', 'Chọn biên lo/hi quá hẹp.', 'Với số thực: lặp số lần cố định (~100) thay vì so sánh lo &lt; hi.'],
        code: `def min_eating_speed(piles, h):          # Koko ăn chuối
    def ok(k):                           # tốc độ k có kịp trong h giờ?
        return sum((p + k - 1) // k for p in piles) <= h
    lo, hi = 1, max(piles)
    while lo < hi:
        mid = (lo + hi) // 2
        if ok(mid):
            hi = mid                     # kịp → thử chậm hơn
        else:
            lo = mid + 1
    return lo

def ship_within_days(weights, days):     # sức chứa tàu nhỏ nhất
    def ok(cap):
        need, cur = 1, 0
        for w in weights:
            if cur + w > cap:
                need, cur = need + 1, 0
            cur += w
        return need <= days
    lo, hi = max(weights), sum(weights)
    while lo < hi:
        mid = (lo + hi) // 2
        if ok(mid):
            hi = mid
        else:
            lo = mid + 1
    return lo`,
        practice: [['Koko Eating Bananas', 'koko-eating-bananas'], ['Capacity To Ship Packages Within D Days', 'capacity-to-ship-packages-within-d-days'], ['Split Array Largest Sum', 'split-array-largest-sum'], ['Minimum Number of Days to Make m Bouquets', 'minimum-number-of-days-to-make-m-bouquets'], ['Magnetic Force Between Two Balls', 'magnetic-force-between-two-balls']],
        related: ['binary-search', 'greedy'],
        viz: 'bsAnswer'
    });
})();
