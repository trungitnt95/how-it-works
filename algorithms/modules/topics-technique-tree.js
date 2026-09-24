/* Topic content — programming techniques, trees & heaps */
(function () {
    'use strict';
    const Algo = window.Algo;
    const T = (o) => Algo.topics.push(o);

    /* ========================= KỸ THUẬT LẬP TRÌNH ========================= */

    T({
        id: 'two-pointers', cat: 'technique', level: 1, interview: true,
        title: 'Hai con trỏ', en: 'Two Pointers',
        tags: ['hai con trỏ', 'two pointers', 'tổng cặp', '3sum', 'palindrome', 'tại chỗ'],
        summary: 'Hai chỉ số di chuyển trên cùng một dãy (từ hai đầu vào giữa, hoặc cùng chiều) để bỏ qua những cặp chắc chắn không cần xét.',
        idea: 'Trên mảng đã sắp xếp, nếu <code>a[l] + a[r]</code> quá nhỏ thì mọi cặp giữa a[l] và phần tử nhỏ hơn a[r] cũng quá nhỏ → tăng l. Mỗi bước loại được cả một "hàng" cặp, nên từ O(n²) còn O(n). Dạng cùng chiều (một con trỏ đọc, một con trỏ ghi) dùng để lọc, gộp, xóa trùng ngay tại chỗ.',
        steps: [
            '<b>Hai đầu hướng vào</b>: tổng cặp, bình chứa nhiều nước nhất, đảo ngược, kiểm tra palindrome.',
            '<b>Cùng chiều</b> (đọc/ghi): xóa trùng, dồn số 0, lọc phần tử.',
            '<b>Trên hai mảng</b>: trộn hai dãy đã sắp xếp, tìm giao.'
        ],
        cx: { rows: [['Thời gian', 'O(n) (+ O(n log n) nếu phải sắp xếp)'], ['Bộ nhớ', 'O(1)']] },
        when: ['Mảng đã (hoặc có thể) sắp xếp và cần tìm cặp / bộ ba.', 'Xử lý tại chỗ không dùng thêm bộ nhớ.'],
        pitfalls: ['Quên sắp xếp trước.', '3Sum: phải bỏ qua phần tử trùng để không sinh đáp án lặp.', 'Nhầm điều kiện dừng <code>l &lt; r</code> và <code>l &lt;= r</code>.'],
        code: `def two_sum_sorted(a, target):
    l, r = 0, len(a) - 1
    while l < r:
        s = a[l] + a[r]
        if s == target:
            return l, r
        if s < target:
            l += 1
        else:
            r -= 1
    return None

def three_sum(nums):                       # mọi bộ ba có tổng 0, không trùng
    nums.sort()
    res = []
    for i in range(len(nums) - 2):
        if i and nums[i] == nums[i - 1]:
            continue                       # bỏ phần tử trùng
        l, r = i + 1, len(nums) - 1
        while l < r:
            s = nums[i] + nums[l] + nums[r]
            if s < 0:
                l += 1
            elif s > 0:
                r -= 1
            else:
                res.append([nums[i], nums[l], nums[r]])
                l += 1
                while l < r and nums[l] == nums[l - 1]:
                    l += 1
    return res

def remove_duplicates(a):                  # cùng chiều: đọc r, ghi w
    w = 0
    for r in range(len(a)):
        if r == 0 or a[r] != a[r - 1]:
            a[w] = a[r]
            w += 1
    return w`,
        practice: [['Two Sum II - Input Array Is Sorted', 'two-sum-ii-input-array-is-sorted'], ['3Sum', '3sum'], ['Container With Most Water', 'container-with-most-water'], ['Valid Palindrome', 'valid-palindrome'], ['Squares of a Sorted Array', 'squares-of-a-sorted-array'], ['Trapping Rain Water', 'trapping-rain-water']],
        related: ['sliding-window', 'fast-slow-pointers', 'binary-search'],
        viz: 'twoPointers'
    });

    T({
        id: 'sliding-window', cat: 'technique', level: 2, interview: true,
        title: 'Cửa sổ trượt', en: 'Sliding Window',
        tags: ['cửa sổ trượt', 'sliding window', 'đoạn con', 'chuỗi con', 'substring', 'subarray'],
        summary: 'Duy trì một "cửa sổ" [l, r] trên dãy: mở rộng bên phải, thu hẹp bên trái — xét mọi đoạn con liên tiếp chỉ trong O(n).',
        idea: 'Thay vì tính lại từ đầu cho mỗi đoạn con (O(n²)), ta <b>cập nhật</b> thông tin của cửa sổ khi thêm phần tử bên phải và bỏ phần tử bên trái. Mỗi phần tử vào và ra cửa sổ đúng một lần → O(n). Có hai dạng: <b>cửa sổ cố định</b> (độ dài k) và <b>cửa sổ co giãn</b> (mở rộng tới khi vi phạm điều kiện rồi co lại).',
        steps: [
            'Tăng r, đưa a[r] vào cửa sổ (cập nhật tổng / bảng đếm).',
            'Trong khi cửa sổ vi phạm điều kiện: bỏ a[l] ra, tăng l.',
            'Cửa sổ lúc này hợp lệ → cập nhật đáp án với độ dài r − l + 1.'
        ],
        cx: { rows: [['Thời gian', 'O(n)'], ['Bộ nhớ', 'O(1) hoặc O(kích thước bảng chữ cái)']] },
        when: [
            '"Đoạn con / chuỗi con liên tiếp dài nhất, ngắn nhất… thỏa điều kiện".',
            'Tổng / trung bình / số lượng trong mọi đoạn độ dài k.',
            'Điều kiện có tính đơn điệu: cửa sổ hợp lệ thì mọi cửa sổ con của nó cũng hợp lệ.'
        ],
        pitfalls: [
            'Mảng có số âm: cửa sổ "tổng ≥ k" không còn đơn điệu → dùng prefix sum + hash map hoặc deque.',
            'Quên cập nhật bảng đếm khi thu hẹp cửa sổ.',
            'Cập nhật đáp án sai thời điểm (trước hay sau khi co).'
        ],
        code: `def max_sum_k(a, k):                      # cửa sổ cố định
    s = best = sum(a[:k])
    for r in range(k, len(a)):
        s += a[r] - a[r - k]                  # thêm phải, bỏ trái
        best = max(best, s)
    return best

def longest_unique(s):                        # cửa sổ co giãn
    last = {}
    l = best = 0
    for r, ch in enumerate(s):
        if ch in last and last[ch] >= l:
            l = last[ch] + 1                  # nhảy l qua ký tự trùng
        last[ch] = r
        best = max(best, r - l + 1)
    return best

def min_subarray_len(target, a):              # đoạn ngắn nhất có tổng >= target (a dương)
    l, s, best = 0, 0, float("inf")
    for r, x in enumerate(a):
        s += x
        while s >= target:
            best = min(best, r - l + 1)
            s -= a[l]
            l += 1
    return 0 if best == float("inf") else best`,
        practice: [['Maximum Average Subarray I', 'maximum-average-subarray-i'], ['Longest Substring Without Repeating Characters', 'longest-substring-without-repeating-characters'], ['Minimum Size Subarray Sum', 'minimum-size-subarray-sum'], ['Permutation in String', 'permutation-in-string'], ['Longest Repeating Character Replacement', 'longest-repeating-character-replacement'], ['Minimum Window Substring', 'minimum-window-substring']],
        related: ['two-pointers', 'prefix-sum', 'monotonic-queue', 'hash-table'],
        viz: 'slidingWindow'
    });

    T({
        id: 'prefix-sum', cat: 'technique', level: 1, interview: true,
        title: 'Tổng tiền tố', en: 'Prefix Sum',
        tags: ['tổng tiền tố', 'prefix sum', 'cộng dồn', 'tổng đoạn', 'range sum', 'mảng cộng dồn'],
        summary: 'Tính trước tổng cộng dồn để trả lời tổng của bất kỳ đoạn con nào chỉ trong O(1).',
        idea: 'Đặt <code>P[i] = a[0] + … + a[i−1]</code> (P[0] = 0). Khi đó tổng <code>a[l..r] = P[r+1] − P[l]</code>. Tiền xử lý O(n), mỗi truy vấn O(1). Kết hợp với hash map để đếm số đoạn con có tổng bằng k: đoạn (j, i] có tổng k ⇔ P[i] − P[j] = k. Mở rộng lên 2 chiều để tính tổng hình chữ nhật con.',
        analogy: 'Đồng hồ công-tơ-mét: muốn biết quãng đường từ km 12 tới km 57, lấy số đọc lúc sau trừ lúc trước — khỏi phải đo lại.',
        cx: { rows: [['Tiền xử lý', 'O(n)'], ['Mỗi truy vấn', 'O(1)'], ['Bộ nhớ', 'O(n)']] },
        when: ['Nhiều truy vấn tổng đoạn trên mảng không đổi.', 'Đếm đoạn con có tổng / số lượng thỏa điều kiện (kết hợp hash map).', 'Tổng hình chữ nhật con trên lưới.'],
        pitfalls: [
            'Lệch chỉ số: dùng P có n + 1 phần tử, P[0] = 0 để khỏi xử lý riêng.',
            'Mảng thay đổi liên tục → dùng Fenwick / segment tree.',
            'Khi đếm bằng hash map, nhớ khởi tạo <code>seen[0] = 1</code>.'
        ],
        code: `from itertools import accumulate

a = [3, 1, 4, 1, 5, 9]
P = [0] + list(accumulate(a))             # P[i] = tổng i phần tử đầu
def range_sum(l, r):
    return P[r + 1] - P[l]
print(range_sum(1, 3))                    # 1 + 4 + 1 = 6

def subarray_sum_equals_k(nums, k):
    count, s = 0, 0
    seen = {0: 1}                         # tổng tiền tố → số lần gặp
    for x in nums:
        s += x
        count += seen.get(s - k, 0)
        seen[s] = seen.get(s, 0) + 1
    return count

def build_2d(M):                          # S[i][j] = tổng hình chữ nhật (0,0)..(i-1,j-1)
    R, C = len(M), len(M[0])
    S = [[0] * (C + 1) for _ in range(R + 1)]
    for i in range(R):
        for j in range(C):
            S[i + 1][j + 1] = M[i][j] + S[i][j + 1] + S[i + 1][j] - S[i][j]
    return S`,
        practice: [['Range Sum Query - Immutable', 'range-sum-query-immutable'], ['Find Pivot Index', 'find-pivot-index'], ['Subarray Sum Equals K', 'subarray-sum-equals-k'], ['Contiguous Array', 'contiguous-array'], ['Range Sum Query 2D - Immutable', 'range-sum-query-2d-immutable']],
        related: ['difference-array', 'sliding-window', 'fenwick', 'hash-table'],
        viz: 'prefixSum'
    });

    T({
        id: 'difference-array', cat: 'technique', level: 2,
        title: 'Mảng hiệu', en: 'Difference Array',
        tags: ['mảng hiệu', 'difference array', 'cập nhật đoạn', 'range update', 'cộng dồn'],
        summary: 'Cộng một giá trị vào cả đoạn chỉ bằng 2 phép gán; cuối cùng cộng dồn một lần để ra mảng kết quả.',
        idea: 'Mảng hiệu <code>d[i] = a[i] − a[i−1]</code>. Cộng v vào đoạn [l, r] chỉ làm thay đổi d[l] (+v) và d[r+1] (−v). Sau q lần cập nhật, lấy tổng tiền tố của d là được a — tổng O(q + n) thay vì O(q·n). Đây là "phép ngược" của tổng tiền tố.',
        cx: { rows: [['Mỗi cập nhật đoạn', 'O(1)'], ['Khôi phục mảng', 'O(n)']] },
        when: ['Nhiều cập nhật đoạn, chỉ cần kết quả ở cuối (offline).', 'Đếm số khoảng phủ lên mỗi điểm: đặt chỗ, số khách trên xe, số chuyến bay.'],
        pitfalls: ['Mảng d cần n + 1 phần tử để ghi được d[r+1] khi r = n − 1.', 'Cần truy vấn xen giữa các cập nhật → dùng Fenwick tree (cập nhật đoạn, truy vấn điểm).'],
        code: `def apply_updates(n, updates):
    d = [0] * (n + 1)
    for l, r, v in updates:               # cộng v vào a[l..r]
        d[l] += v
        d[r + 1] -= v
    a, run = [], 0
    for i in range(n):
        run += d[i]
        a.append(run)
    return a

def car_pooling(trips, capacity):         # trips: [số khách, điểm đón, điểm trả]
    d = [0] * 1001
    for k, start, end in trips:
        d[start] += k
        d[end] -= k                       # trả khách tại end
    run = 0
    for x in d:
        run += x
        if run > capacity:
            return False
    return True`,
        practice: [['Corporate Flight Bookings', 'corporate-flight-bookings'], ['Car Pooling', 'car-pooling'], ['Shifting Letters II', 'shifting-letters-ii']],
        related: ['prefix-sum', 'sweep-line', 'fenwick'],
        viz: 'diffArray'
    });

    T({
        id: 'kadane', cat: 'technique', level: 2, interview: true,
        title: 'Kadane — tổng đoạn con lớn nhất', en: "Kadane's Algorithm",
        tags: ['kadane', 'maximum subarray', 'tổng đoạn con lớn nhất', 'lợi nhuận', 'chứng khoán'],
        summary: 'Tìm đoạn con liên tiếp có tổng lớn nhất trong một lượt duyệt: tại mỗi vị trí, nối tiếp hay bắt đầu lại?',
        idea: 'Gọi <code>cur</code> = tổng lớn nhất của đoạn con <b>kết thúc tại i</b>. Hoặc nối a[i] vào đoạn tốt nhất trước đó (cur + a[i]), hoặc bắt đầu đoạn mới từ a[i] — chọn cái lớn hơn. Đoạn cũ có tổng âm chỉ kéo tụt kết quả nên bị bỏ. Đây là QHĐ một chiều nhưng chỉ cần O(1) bộ nhớ.',
        cx: { rows: [['Thời gian', 'O(n)'], ['Bộ nhớ', 'O(1)']] },
        when: ['Tổng / lợi nhuận liên tiếp lớn nhất.', 'Biến thể: tích lớn nhất (giữ cả max và min), mảng vòng (tổng − đoạn nhỏ nhất), mua bán cổ phiếu 1 lần.'],
        pitfalls: ['Khởi tạo best = 0 → sai khi mọi phần tử đều âm.', 'Đề cho phép đoạn rỗng hay không?'],
        code: `def max_subarray(a):
    cur = best = a[0]
    for x in a[1:]:
        cur = max(x, cur + x)             # nối tiếp hay bắt đầu lại?
        best = max(best, cur)
    return best

def max_product(a):                       # âm × âm = dương → giữ cả min
    hi = lo = best = a[0]
    for x in a[1:]:
        hi, lo = max(x, hi * x, lo * x), min(x, hi * x, lo * x)
        best = max(best, hi)
    return best

def max_profit(prices):                   # mua 1 lần, bán 1 lần
    low, best = float("inf"), 0
    for p in prices:
        low = min(low, p)
        best = max(best, p - low)
    return best`,
        practice: [['Maximum Subarray', 'maximum-subarray'], ['Maximum Product Subarray', 'maximum-product-subarray'], ['Best Time to Buy and Sell Stock', 'best-time-to-buy-and-sell-stock'], ['Maximum Sum Circular Subarray', 'maximum-sum-circular-subarray']],
        related: ['dp-1d', 'prefix-sum', 'divide-conquer'],
        viz: 'kadane'
    });

    T({
        id: 'fast-slow-pointers', cat: 'technique', level: 2, interview: true,
        title: 'Con trỏ nhanh – chậm (Floyd)', en: 'Fast & Slow Pointers',
        tags: ['con trỏ nhanh chậm', 'floyd', 'rùa và thỏ', 'phát hiện chu trình', 'cycle', 'điểm giữa'],
        summary: 'Hai con trỏ đi với tốc độ khác nhau để phát hiện chu trình, tìm điểm giữa và điểm vào vòng — chỉ O(1) bộ nhớ.',
        idea: 'Rùa đi 1 bước, thỏ đi 2 bước. Nếu có vòng, thỏ sẽ đuổi kịp rùa bên trong vòng (khoảng cách giữa chúng giảm 1 sau mỗi bước). Khi gặp nhau, đưa một con về đầu rồi cho cả hai cùng đi 1 bước: điểm gặp tiếp theo chính là <b>điểm vào vòng</b>. Còn khi thỏ chạm cuối danh sách thì rùa đang ở <b>chính giữa</b>.',
        cx: { rows: [['Thời gian', 'O(n)'], ['Bộ nhớ', 'O(1)']] },
        when: ['Phát hiện chu trình trong danh sách liên kết hoặc dãy x → f(x) (số hạnh phúc, tìm số trùng).', 'Tìm nút giữa; kiểm tra danh sách liên kết palindrome.'],
        pitfalls: ['Kiểm tra <code>fast and fast.next</code> trước khi nhảy 2 bước.', 'Nhầm hai pha: pha 1 chỉ cho biết có vòng; cần pha 2 để tìm điểm vào vòng.'],
        code: `def has_cycle(head):
    slow = fast = head
    while fast and fast.next:
        slow, fast = slow.next, fast.next.next
        if slow is fast:
            return True
    return False

def middle(head):
    slow = fast = head
    while fast and fast.next:
        slow, fast = slow.next, fast.next.next
    return slow

def find_duplicate(nums):                 # xem i → nums[i] như danh sách liên kết
    slow = fast = nums[0]
    while True:
        slow, fast = nums[slow], nums[nums[fast]]
        if slow == fast:
            break
    slow = nums[0]
    while slow != fast:                   # pha 2: tìm điểm vào vòng
        slow, fast = nums[slow], nums[fast]
    return slow`,
        practice: [['Linked List Cycle', 'linked-list-cycle'], ['Linked List Cycle II', 'linked-list-cycle-ii'], ['Middle of the Linked List', 'middle-of-the-linked-list'], ['Happy Number', 'happy-number'], ['Find the Duplicate Number', 'find-the-duplicate-number'], ['Palindrome Linked List', 'palindrome-linked-list']],
        related: ['linked-list', 'two-pointers'],
        viz: 'fastSlow'
    });

    T({
        id: 'monotonic-stack', cat: 'technique', level: 2, interview: true,
        title: 'Ngăn xếp đơn điệu', en: 'Monotonic Stack',
        tags: ['ngăn xếp đơn điệu', 'monotonic stack', 'phần tử lớn hơn kế tiếp', 'next greater', 'histogram'],
        summary: 'Ngăn xếp luôn giữ thứ tự tăng (hoặc giảm) để tìm "phần tử lớn hơn / nhỏ hơn gần nhất" cho mọi vị trí trong O(n).',
        idea: 'Duyệt từ trái sang phải. Trước khi đẩy x vào, lấy ra mọi phần tử ở đỉnh nhỏ hơn x — với chúng, x chính là phần tử lớn hơn đầu tiên bên phải. Vì vậy ngăn xếp luôn giảm dần từ đáy lên đỉnh. Mỗi phần tử vào và ra đúng một lần → <b>O(n) khấu hao</b> dù có vòng while lồng bên trong.',
        cx: { rows: [['Thời gian', 'O(n)'], ['Bộ nhớ', 'O(n)']] },
        when: [
            '"Phần tử lớn hơn / nhỏ hơn kế tiếp (hoặc trước đó)".',
            'Số ngày chờ tới ngày ấm hơn; nhịp giá cổ phiếu (stock span).',
            'Hình chữ nhật lớn nhất trong histogram; tổng min của mọi đoạn con.'
        ],
        pitfalls: [
            'Nên lưu <b>chỉ số</b> thay vì giá trị để còn tính khoảng cách.',
            'Chọn &lt; hay ≤ sai khi có phần tử bằng nhau → đếm trùng hoặc bỏ sót.',
            'Quên xử lý các phần tử còn lại trong ngăn xếp khi kết thúc.'
        ],
        code: `def next_greater(a):
    res = [-1] * len(a)
    st = []                               # chỉ số, giá trị giảm dần
    for i, x in enumerate(a):
        while st and a[st[-1]] < x:
            res[st.pop()] = x
        st.append(i)
    return res

def daily_temperatures(t):
    res, st = [0] * len(t), []
    for i, x in enumerate(t):
        while st and t[st[-1]] < x:
            j = st.pop()
            res[j] = i - j                # số ngày phải chờ
        st.append(i)
    return res

def largest_rectangle(heights):
    st, best = [], 0                      # (vị trí bắt đầu, chiều cao), tăng dần
    for i, x in enumerate(heights + [0]): # cột 0 cuối để "xả" hết ngăn xếp
        start = i
        while st and st[-1][1] >= x:
            j, h = st.pop()
            best = max(best, h * (i - j))
            start = j
        st.append((start, x))
    return best`,
        practice: [['Next Greater Element I', 'next-greater-element-i'], ['Daily Temperatures', 'daily-temperatures'], ['Online Stock Span', 'online-stock-span'], ['Largest Rectangle in Histogram', 'largest-rectangle-in-histogram'], ['Sum of Subarray Minimums', 'sum-of-subarray-minimums'], ['Remove K Digits', 'remove-k-digits']],
        related: ['stack', 'monotonic-queue', 'amortized'],
        viz: 'monoStack'
    });

    T({
        id: 'monotonic-queue', cat: 'technique', level: 3,
        title: 'Hàng đợi đơn điệu', en: 'Monotonic Deque',
        tags: ['hàng đợi đơn điệu', 'monotonic queue', 'deque', 'max cửa sổ trượt', 'tối ưu qhđ'],
        summary: 'Deque giữ các ứng viên theo thứ tự giảm dần để lấy max/min của cửa sổ trượt trong O(1) mỗi bước.',
        idea: 'Khi phần tử mới x đến, mọi phần tử nhỏ hơn x ở cuối deque sẽ <b>không bao giờ</b> còn là max nữa (vừa nhỏ hơn vừa rời cửa sổ sớm hơn) → bỏ đi. Đầu deque luôn là max của cửa sổ; khi nó trượt ra ngoài thì bỏ ở đầu. Mỗi chỉ số vào/ra một lần → O(n). Kỹ thuật này còn tối ưu QHĐ dạng <code>dp[i] = max(dp[j]) + …</code> với j nằm trong một cửa sổ.',
        cx: { rows: [['Thời gian', 'O(n)'], ['Bộ nhớ', 'O(k)']] },
        when: ['Max/min của mọi cửa sổ độ dài k.', 'QHĐ chuyển trạng thái từ một cửa sổ vị trí phía trước (Jump Game VI, Constrained Subsequence Sum).', 'Đoạn con ngắn nhất có tổng ≥ k khi mảng có số âm (deque trên tổng tiền tố).'],
        pitfalls: ['Lưu chỉ số để biết khi nào phần tử rời cửa sổ.', 'Nhầm chiều so sánh khi cần min thay vì max.'],
        code: `from collections import deque

def max_sliding_window(a, k):
    dq, res = deque(), []
    for i, x in enumerate(a):
        if dq and dq[0] <= i - k:
            dq.popleft()                  # rời khỏi cửa sổ
        while dq and a[dq[-1]] <= x:
            dq.pop()                      # nhỏ hơn và cũ hơn x → vô dụng
        dq.append(i)
        if i >= k - 1:
            res.append(a[dq[0]])
    return res

def max_result(nums, k):                  # Jump Game VI: dp[i] = nums[i] + max(dp[i-k..i-1])
    dp = [0] * len(nums)
    dp[0] = nums[0]
    dq = deque([0])
    for i in range(1, len(nums)):
        if dq[0] < i - k:
            dq.popleft()
        dp[i] = nums[i] + dp[dq[0]]
        while dq and dp[dq[-1]] <= dp[i]:
            dq.pop()
        dq.append(i)
    return dp[-1]`,
        practice: [['Sliding Window Maximum', 'sliding-window-maximum'], ['Jump Game VI', 'jump-game-vi'], ['Constrained Subsequence Sum', 'constrained-subsequence-sum'], ['Shortest Subarray with Sum at Least K', 'shortest-subarray-with-sum-at-least-k']],
        related: ['monotonic-stack', 'sliding-window', 'queue'],
        viz: 'monoDeque'
    });

    T({
        id: 'greedy', cat: 'technique', level: 2, interview: true,
        title: 'Tham lam', en: 'Greedy',
        tags: ['tham lam', 'greedy', 'chọn hoạt động', 'lập lịch', 'khoảng', 'interval', 'lập luận hoán đổi'],
        summary: 'Ở mỗi bước chọn phương án tốt nhất lúc đó và không quay lại — nhanh, đơn giản, nhưng chỉ đúng khi bài có tính chất phù hợp.',
        idea: 'Tham lam đúng khi bài có <b>lựa chọn tham lam an toàn</b> (luôn có một lời giải tối ưu chứa lựa chọn đó) và <b>cấu trúc con tối ưu</b>. Cách chứng minh hay dùng là <b>lập luận hoán đổi</b>: giả sử lời giải tối ưu khác lựa chọn tham lam, đổi sang lựa chọn tham lam mà kết quả không tệ đi. Ví dụ kinh điển: muốn chọn nhiều hoạt động nhất → luôn chọn hoạt động <b>kết thúc sớm nhất</b>.',
        analogy: 'Thối tiền bằng tờ mệnh giá lớn nhất trước đúng với tiền Việt (500k, 200k, 100k…), nhưng sai với hệ mệnh giá {1, 3, 4} khi thối 6 (tham lam ra 4+1+1, tối ưu là 3+3) — lúc đó phải dùng QHĐ.',
        steps: ['Tìm tiêu chí chọn (sắp xếp theo gì?).', 'Thử phản ví dụ nhỏ; không tìm được thì thử chứng minh bằng hoán đổi.', 'Vẫn chưa chắc? Kiểm thử đối chiếu với vét cạn / QHĐ.'],
        cx: { rows: [['Thời gian thường gặp', 'O(n log n) — chủ yếu do sắp xếp']] },
        when: ['Lập lịch, chọn / gộp các khoảng không chồng lấn.', 'Mã Huffman, Dijkstra, Prim, Kruskal (đều là tham lam đã được chứng minh).', 'Bài "ít lần nhất" có cấu trúc đơn giản: nhảy xa nhất, trạm xăng.'],
        pitfalls: ['Tham lam "có vẻ đúng" nhưng sai — luôn thử phản ví dụ.', 'Sắp xếp theo tiêu chí sai (theo giờ bắt đầu thay vì giờ kết thúc).'],
        code: `def max_activities(intervals):
    intervals.sort(key=lambda x: x[1])    # kết thúc sớm nhất trước
    count, end = 0, float("-inf")
    for s, e in intervals:
        if s >= end:
            count += 1
            end = e
    return count

def can_jump(nums):                       # Jump Game
    reach = 0
    for i, x in enumerate(nums):
        if i > reach:
            return False
        reach = max(reach, i + x)
    return True

def merge_intervals(iv):
    iv.sort()
    out = [list(iv[0])]
    for s, e in iv[1:]:
        if s <= out[-1][1]:
            out[-1][1] = max(out[-1][1], e)
        else:
            out.append([s, e])
    return out`,
        practice: [['Non-overlapping Intervals', 'non-overlapping-intervals'], ['Merge Intervals', 'merge-intervals'], ['Jump Game', 'jump-game'], ['Jump Game II', 'jump-game-ii'], ['Gas Station', 'gas-station'], ['Minimum Number of Arrows to Burst Balloons', 'minimum-number-of-arrows-to-burst-balloons'], ['Task Scheduler', 'task-scheduler']],
        related: ['sweep-line', 'dijkstra', 'mst-kruskal', 'coin-change'],
        viz: 'greedyIntervals'
    });

    T({
        id: 'divide-conquer', cat: 'technique', level: 2,
        title: 'Chia để trị', en: 'Divide and Conquer',
        tags: ['chia để trị', 'divide and conquer', 'định lý master', 'đệ quy'],
        summary: 'Chia bài toán thành các bài con độc lập cùng dạng, giải đệ quy rồi gộp kết quả.',
        idea: 'Ba bước: <b>chia</b> – <b>trị</b> (giải đệ quy) – <b>gộp</b>. Độ phức tạp theo định lý Master: <code>T(n) = a·T(n/b) + f(n)</code>. Merge sort: T(n) = 2T(n/2) + O(n) = O(n log n); tìm nhị phân: T(n) = T(n/2) + O(1) = O(log n). Khác QHĐ ở chỗ các bài con <b>không chồng lấn</b> nên không cần ghi nhớ.',
        table: {
            title: 'Định lý Master — các dạng hay gặp',
            head: ['Truy hồi', 'Kết quả', 'Ví dụ'],
            rows: [
                ['T(n) = T(n/2) + O(1)', 'O(log n)', 'Tìm kiếm nhị phân'],
                ['T(n) = 2T(n/2) + O(1)', 'O(n)', 'Duyệt cây, tìm max đệ quy'],
                ['T(n) = 2T(n/2) + O(n)', 'O(n log n)', 'Merge sort'],
                ['T(n) = 7T(n/2) + O(n²)', 'O(n^2.81)', 'Nhân ma trận Strassen']
            ]
        },
        when: ['Bài con độc lập, gộp rẻ: sắp xếp, đếm nghịch thế, cặp điểm gần nhất, nhân số lớn (Karatsuba).', 'Lũy thừa nhanh, tìm nhị phân (chỉ đi một nhánh).'],
        pitfalls: ['Bài con chồng lấn (như Fibonacci) → chuyển sang QHĐ.', 'Chi phí gộp lớn làm mất lợi thế.', 'Đệ quy quá sâu với dữ liệu lớn.'],
        code: `def max_subarray_dc(a, lo=0, hi=None):    # tổng đoạn con lớn nhất, O(n log n)
    if hi is None:
        hi = len(a) - 1
    if lo == hi:
        return a[lo]
    mid = (lo + hi) // 2
    best_left = max_subarray_dc(a, lo, mid)
    best_right = max_subarray_dc(a, mid + 1, hi)
    s, cross_l = 0, float("-inf")         # đoạn cắt ngang điểm giữa
    for i in range(mid, lo - 1, -1):
        s += a[i]
        cross_l = max(cross_l, s)
    s, cross_r = 0, float("-inf")
    for i in range(mid + 1, hi + 1):
        s += a[i]
        cross_r = max(cross_r, s)
    return max(best_left, best_right, cross_l + cross_r)`,
        practice: [['Sort List', 'sort-list'], ['Construct Binary Tree from Preorder and Inorder Traversal', 'construct-binary-tree-from-preorder-and-inorder-traversal'], ['Different Ways to Add Parentheses', 'different-ways-to-add-parentheses'], ['Pow(x, n)', 'powx-n']],
        related: ['merge-sort', 'quick-sort', 'recursion', 'fast-power'],
        viz: 'mergeSort'
    });

    T({
        id: 'backtracking', cat: 'technique', level: 2, interview: true,
        title: 'Quay lui', en: 'Backtracking',
        tags: ['quay lui', 'backtracking', 'n-queens', 'sudoku', 'cắt tỉa', 'vét cạn'],
        summary: 'Xây lời giải từng bước; gặp ngõ cụt thì lùi lại bước trước và thử lựa chọn khác.',
        idea: 'Quay lui là DFS trên <b>cây quyết định</b>: mỗi nút là một trạng thái đang xây dở, mỗi cạnh là một lựa chọn. Khuôn chuẩn: <b>chọn → đệ quy → bỏ chọn</b>. Sức mạnh nằm ở <b>cắt tỉa</b>: phát hiện sớm nhánh không thể dẫn tới lời giải và bỏ qua cả nhánh đó.',
        steps: ['Xác định trạng thái (đã chọn gì) và khi nào là một lời giải hoàn chỉnh.', 'Liệt kê các lựa chọn ở mỗi bước.', 'Với mỗi lựa chọn hợp lệ: áp dụng → đệ quy → hoàn tác.', 'Thêm điều kiện cắt tỉa càng sớm càng tốt.'],
        cx: { rows: [['Thời gian', 'Thường là mũ: O(2ⁿ), O(n!), O(kⁿ) — cắt tỉa giảm mạnh trên thực tế'], ['Bộ nhớ', 'O(độ sâu)']] },
        when: ['Liệt kê mọi tập con, hoán vị, tổ hợp, cách chia.', 'Bài ràng buộc: N-Queens, Sudoku, tìm từ trong lưới.', 'n nhỏ (≤ ~20) và cần mọi lời giải.'],
        pitfalls: [
            'Quên hoàn tác (bỏ chọn) → trạng thái bị "rò" sang nhánh khác.',
            'Thêm <code>path</code> thay vì <code>path[:]</code> vào kết quả → mọi kết quả cùng trỏ vào một list.',
            'Sinh trùng khi dữ liệu có phần tử trùng — sắp xếp rồi bỏ qua phần tử bằng phần tử trước ở cùng tầng.'
        ],
        code: `def solve_n_queens(n):
    res, cols, d1, d2 = [], set(), set(), set()
    board = [["."] * n for _ in range(n)]

    def place(r):
        if r == n:
            res.append(["".join(row) for row in board])
            return
        for c in range(n):
            if c in cols or r - c in d1 or r + c in d2:
                continue                   # cắt tỉa: ô bị tấn công
            cols.add(c); d1.add(r - c); d2.add(r + c); board[r][c] = "Q"
            place(r + 1)
            cols.remove(c); d1.remove(r - c); d2.remove(r + c); board[r][c] = "."

    place(0)
    return res

def combination_sum(cands, target):
    res, path = [], []
    def go(start, remain):
        if remain == 0:
            res.append(path[:])            # bản sao!
            return
        for i in range(start, len(cands)):
            if cands[i] <= remain:
                path.append(cands[i])      # chọn
                go(i, remain - cands[i])   # đệ quy (được dùng lại cands[i])
                path.pop()                 # bỏ chọn
    go(0, target)
    return res`,
        practice: [['N-Queens', 'n-queens'], ['Sudoku Solver', 'sudoku-solver'], ['Word Search', 'word-search'], ['Combination Sum', 'combination-sum'], ['Palindrome Partitioning', 'palindrome-partitioning'], ['Generate Parentheses', 'generate-parentheses']],
        related: ['subsets-permutations', 'recursion', 'dfs', 'p-np'],
        viz: 'nQueens'
    });

    T({
        id: 'subsets-permutations', cat: 'technique', level: 2, interview: true,
        title: 'Sinh tập con, tổ hợp, hoán vị', en: 'Subsets / Combinations / Permutations',
        tags: ['tập con', 'hoán vị', 'tổ hợp', 'subsets', 'permutations', 'combinations', 'liệt kê'],
        summary: 'Ba khuôn quay lui kinh điển để liệt kê mọi cấu hình — nền tảng của vét cạn có hệ thống.',
        idea: '<b>Tập con</b>: mỗi phần tử chọn hoặc không → 2ⁿ cấu hình. <b>Tổ hợp</b> chập k: chỉ chọn phần tử có chỉ số tăng dần để khỏi trùng → C(n, k). <b>Hoán vị</b>: mỗi vị trí chọn một phần tử chưa dùng → n!. Trong mô phỏng, mỗi lá của cây quyết định là một tập con.',
        table: {
            title: 'Quy mô',
            head: ['Loại', 'Số cấu hình', 'n tối đa thực tế'],
            rows: [['Tập con', '2ⁿ', '≈ 20–25'], ['Tổ hợp chập k', 'C(n, k)', 'tùy k'], ['Hoán vị', 'n!', '≈ 10–11']]
        },
        pitfalls: ['Phần tử trùng → sắp xếp rồi bỏ qua nếu <code>nums[i] == nums[i-1]</code> ở cùng tầng.', 'Sinh hoán vị bằng hoán đổi tại chỗ thì nhớ đổi lại sau đệ quy.'],
        code: `def subsets(nums):
    res, cur = [], []
    def dfs(i):
        if i == len(nums):
            res.append(cur[:])
            return
        cur.append(nums[i]); dfs(i + 1)    # chọn
        cur.pop();           dfs(i + 1)    # không chọn
    dfs(0)
    return res

def combine(n, k):                         # chọn k số từ 1..n
    res, cur = [], []
    def dfs(start):
        if len(cur) == k:
            res.append(cur[:])
            return
        for x in range(start, n + 1):
            cur.append(x); dfs(x + 1); cur.pop()
    dfs(1)
    return res

def permute(nums):
    res, cur, used = [], [], [False] * len(nums)
    def dfs():
        if len(cur) == len(nums):
            res.append(cur[:])
            return
        for i, x in enumerate(nums):
            if not used[i]:
                used[i] = True; cur.append(x)
                dfs()
                used[i] = False; cur.pop()
    dfs()
    return res

from itertools import combinations, permutations    # có sẵn trong thư viện`,
        practice: [['Subsets', 'subsets'], ['Subsets II', 'subsets-ii'], ['Combinations', 'combinations'], ['Permutations', 'permutations'], ['Permutations II', 'permutations-ii'], ['Letter Combinations of a Phone Number', 'letter-combinations-of-a-phone-number']],
        related: ['backtracking', 'bit-manipulation', 'combinatorics'],
        viz: 'subsetsTree'
    });

    T({
        id: 'sweep-line', cat: 'technique', level: 3,
        title: 'Đường quét', en: 'Sweep Line',
        tags: ['đường quét', 'sweep line', 'sự kiện', 'phòng họp', 'skyline', 'khoảng'],
        summary: 'Biến các khoảng/hình thành các sự kiện đã sắp xếp rồi "quét" một lượt, cập nhật trạng thái tại mỗi sự kiện.',
        idea: 'Mỗi khoảng [s, e) tạo 2 sự kiện: mở (+1) tại s và đóng (−1) tại e. Sắp xếp sự kiện rồi duyệt, duy trì một trạng thái (bộ đếm, heap, cây cân bằng). Nhờ đó câu hỏi "tại mọi thời điểm" chỉ cần xét tại các thời điểm có sự kiện. Mở rộng: đường chân trời (skyline), diện tích hợp các hình chữ nhật.',
        cx: { rows: [['Thời gian', 'O(n log n)'], ['Bộ nhớ', 'O(n)']] },
        when: ['Số phòng họp / tài nguyên tối đa dùng cùng lúc.', 'Hợp, giao của nhiều khoảng; điểm bị phủ nhiều nhất.', 'Hình học: giao đoạn thẳng, skyline.'],
        pitfalls: ['Thứ tự khi cùng thời điểm: xử lý "đóng" trước "mở" nếu khoảng là nửa mở [s, e).', 'Tọa độ lớn → nén tọa độ trước khi dùng mảng.'],
        code: `def min_meeting_rooms(meetings):
    events = []
    for s, e in meetings:
        events.append((s, 1))
        events.append((e, -1))
    events.sort()                         # cùng giờ: (-1) đứng trước (+1)
    cur = best = 0
    for _, d in events:
        cur += d
        best = max(best, cur)
    return best

import heapq
def min_meeting_rooms_heap(meetings):     # cách khác: heap giờ kết thúc
    ends = []
    for s, e in sorted(meetings):
        if ends and ends[0] <= s:
            heapq.heapreplace(ends, e)    # dùng lại phòng vừa trống
        else:
            heapq.heappush(ends, e)
    return len(ends)`,
        practice: [['My Calendar III', 'my-calendar-iii'], ['The Skyline Problem', 'the-skyline-problem'], ['Car Pooling', 'car-pooling'], ['Maximum Number of Events That Can Be Attended', 'maximum-number-of-events-that-can-be-attended'], ['Rectangle Area II', 'rectangle-area-ii']],
        related: ['difference-array', 'greedy', 'heap', 'coordinate-compression'],
        viz: 'sweepLine'
    });

    T({
        id: 'coordinate-compression', cat: 'technique', level: 2,
        title: 'Nén tọa độ', en: 'Coordinate Compression',
        tags: ['nén tọa độ', 'coordinate compression', 'thứ hạng', 'rank', 'rời rạc hóa'],
        summary: 'Thay các giá trị lớn / rời rạc bằng thứ hạng 0, 1, 2… để dùng được mảng, Fenwick hay segment tree.',
        idea: 'Nếu bài chỉ quan tâm <b>thứ tự tương đối</b> của các giá trị, ta sắp xếp các giá trị khác nhau rồi thay mỗi giá trị bằng chỉ số của nó. 10⁵ giá trị trải trên phạm vi 10⁹ trở thành các chỉ số 0 … 10⁵ − 1 — vừa với mảng.',
        cx: { rows: [['Thời gian', 'O(n log n)'], ['Bộ nhớ', 'O(n)']] },
        when: ['Giá trị tới 10⁹ nhưng số lượng chỉ 10⁵, cần mảng đếm / Fenwick theo giá trị.', 'Đường quét trên tọa độ thực; đếm nghịch thế bằng BIT.'],
        pitfalls: ['Quên loại trùng trước khi gán hạng.', 'Cần khoảng cách thật giữa các tọa độ (tính diện tích) → giữ lại mảng giá trị gốc.'],
        code: `def compress(a):
    vals = sorted(set(a))
    rank = {v: i for i, v in enumerate(vals)}
    return [rank[x] for x in a], vals

print(compress([1000000000, 5, 70000, 5]))
# ([2, 0, 1, 0], [5, 70000, 1000000000])`,
        practice: [['Rank Transform of an Array', 'rank-transform-of-an-array'], ['Count of Smaller Numbers After Self', 'count-of-smaller-numbers-after-self'], ['Count of Range Sum', 'count-of-range-sum']],
        related: ['fenwick', 'segment-tree', 'sweep-line']
    });

    T({
        id: 'meet-in-middle', cat: 'technique', level: 3,
        title: 'Gặp nhau ở giữa', en: 'Meet in the Middle',
        tags: ['meet in the middle', 'gặp nhau ở giữa', 'tổng tập con', 'chia đôi vét cạn'],
        summary: 'Chia n phần tử thành hai nửa, vét cạn mỗi nửa (2^(n/2)) rồi ghép kết quả bằng sắp xếp + tìm nhị phân.',
        idea: 'Vét cạn 2⁴⁰ tập con là bất khả thi, nhưng 2 × 2²⁰ ≈ 2 triệu thì dễ. Liệt kê mọi tổng của nửa trái và nửa phải, sắp xếp một bên, rồi với mỗi tổng bên kia tìm nhị phân phần bù phù hợp. Độ phức tạp O(2^(n/2) · n).',
        cx: { rows: [['Thời gian', 'O(2^(n/2) · n)'], ['Bộ nhớ', 'O(2^(n/2))']] },
        when: ['n ≈ 30–40, bài tập con / tổng con / chia hai nhóm.', 'Cùng tinh thần: BFS hai chiều (tìm từ hai đầu gặp nhau).'],
        pitfalls: ['Bộ nhớ 2^(n/2): n = 40 là ~10⁶ (ổn), n = 50 là ~3·10⁷ (nặng).', 'Nhớ xét trường hợp chọn rỗng ở mỗi nửa.'],
        code: `from bisect import bisect_left

def all_sums(arr):
    sums = [0]
    for x in arr:
        sums += [s + x for s in sums]     # 2^len(arr) tổng
    return sums

def closest_subset_sum(nums, goal):       # |tổng tập con − goal| nhỏ nhất
    half = len(nums) // 2
    left, right = all_sums(nums[:half]), sorted(all_sums(nums[half:]))
    best = abs(goal)
    for s in left:
        i = bisect_left(right, goal - s)
        for j in (i - 1, i):
            if 0 <= j < len(right):
                best = min(best, abs(s + right[j] - goal))
    return best`,
        practice: [['Closest Subsequence Sum', 'closest-subsequence-sum'], ['Partition Array Into Two Arrays to Minimize Sum Difference', 'partition-array-into-two-arrays-to-minimize-sum-difference']],
        related: ['subsets-permutations', 'binary-search', 'bitmask-dp']
    });

    /* ============================ CÂY & HEAP ============================ */

    T({
        id: 'binary-tree', cat: 'tree', level: 1, interview: true,
        title: 'Cây nhị phân & các cách duyệt', en: 'Binary Tree Traversals',
        tags: ['cây nhị phân', 'binary tree', 'duyệt cây', 'preorder', 'inorder', 'postorder', 'level order', 'bfs', 'dfs'],
        summary: 'Mỗi nút có tối đa 2 con; duyệt trước / giữa / sau (DFS) và theo tầng (BFS) là bộ kỹ năng nền cho mọi bài về cây.',
        idea: 'Cây là cấu trúc đệ quy tự nhiên: một cây = gốc + cây con trái + cây con phải. Hầu hết bài về cây giải bằng một hàm đệ quy trả về thông tin của cây con (chiều cao, tổng, có chứa x không…) rồi kết hợp ở gốc. Thứ tự duyệt: <b>pre-order</b> gốc → trái → phải (sao chép cây), <b>in-order</b> trái → gốc → phải (BST ra dãy tăng dần), <b>post-order</b> trái → phải → gốc (tính từ dưới lên, xóa cây), <b>level-order</b> theo tầng bằng hàng đợi.',
        table: {
            title: 'Thuật ngữ',
            head: ['Thuật ngữ', 'Nghĩa'],
            rows: [
                ['Gốc (root)', 'Nút trên cùng, không có cha'],
                ['Lá (leaf)', 'Nút không có con'],
                ['Độ sâu (depth)', 'Số cạnh từ gốc xuống nút'],
                ['Chiều cao (height)', 'Số cạnh trên đường dài nhất từ nút xuống một lá'],
                ['Cây hoàn chỉnh', 'Mọi tầng đầy trừ tầng cuối, lấp từ trái (dùng cho heap)'],
                ['Cây cân bằng', 'Chiều cao O(log n)']
            ]
        },
        cx: { rows: [['Thời gian duyệt', 'O(n)'], ['Bộ nhớ', 'O(h) — h là chiều cao (đệ quy); O(độ rộng) với BFS']] },
        when: ['Dữ liệu phân cấp: DOM, thư mục, cây biểu thức, sơ đồ tổ chức.', 'Bài phỏng vấn: độ sâu, đường kính, tổ tiên chung, kiểm tra cân bằng / đối xứng.'],
        pitfalls: ['Quên trường hợp nút None.', 'Cây lệch (như danh sách) sâu 10⁵ → tràn ngăn xếp đệ quy; dùng vòng lặp + stack.', 'Nhầm "độ sâu" và "chiều cao".'],
        code: `from collections import deque

class TreeNode:
    def __init__(self, val, left=None, right=None):
        self.val, self.left, self.right = val, left, right

def inorder(node, out):
    if node:
        inorder(node.left, out)
        out.append(node.val)
        inorder(node.right, out)

def max_depth(node):
    return 0 if not node else 1 + max(max_depth(node.left), max_depth(node.right))

def level_order(root):
    res, q = [], deque([root] if root else [])
    while q:
        level = []
        for _ in range(len(q)):           # xử lý đúng 1 tầng
            n = q.popleft()
            level.append(n.val)
            if n.left: q.append(n.left)
            if n.right: q.append(n.right)
        res.append(level)
    return res

def inorder_iterative(root):              # không đệ quy
    res, st, cur = [], [], root
    while cur or st:
        while cur:
            st.append(cur)
            cur = cur.left
        cur = st.pop()
        res.append(cur.val)
        cur = cur.right
    return res`,
        practice: [['Binary Tree Inorder Traversal', 'binary-tree-inorder-traversal'], ['Binary Tree Level Order Traversal', 'binary-tree-level-order-traversal'], ['Invert Binary Tree', 'invert-binary-tree'], ['Diameter of Binary Tree', 'diameter-of-binary-tree'], ['Lowest Common Ancestor of a Binary Tree', 'lowest-common-ancestor-of-a-binary-tree'], ['Binary Tree Maximum Path Sum', 'binary-tree-maximum-path-sum']],
        related: ['bst', 'heap', 'dfs', 'bfs', 'tree-dp'],
        viz: 'treeTraversal'
    });

    T({
        id: 'bst', cat: 'tree', level: 2, interview: true,
        title: 'Cây nhị phân tìm kiếm (BST)', en: 'Binary Search Tree',
        tags: ['bst', 'cây nhị phân tìm kiếm', 'binary search tree', 'chèn', 'xóa', 'treemap'],
        summary: 'Mọi nút bên trái nhỏ hơn, bên phải lớn hơn: tìm / chèn / xóa tốn O(chiều cao), duyệt giữa ra dãy tăng dần.',
        idea: 'Tìm kiếm trên BST giống tìm nhị phân: so với nút hiện tại rồi rẽ trái hoặc phải. Mọi thao tác tốn O(h). Cây cân bằng có h ≈ log n, nhưng chèn một dãy đã sắp xếp sẽ tạo cây lệch với h = n — vì vậy thực tế dùng cây tự cân bằng (AVL, đỏ-đen). Xóa nút có 2 con: thay bằng <b>nút kế tiếp</b> (nhỏ nhất ở cây con phải).',
        cx: { rows: [['Tìm / chèn / xóa', 'O(h): O(log n) nếu cân bằng, O(n) nếu lệch'], ['Duyệt có thứ tự', 'O(n)'], ['Min / max / phần tử kế tiếp', 'O(h)']] },
        when: ['Cần tập hợp có thứ tự: phần tử nhỏ nhất ≥ x, đếm theo khoảng, phần tử thứ k.', 'Thư viện: <code>std::set/map</code> (C++), <code>TreeMap</code> (Java), <code>sortedcontainers.SortedList</code> (Python).'],
        pitfalls: ['Kiểm tra BST hợp lệ chỉ bằng cách so với con trực tiếp là <b>sai</b> — phải truyền khoảng (min, max) xuống cả cây con.', 'Quên rằng cây có thể lệch → O(n).', 'Xử lý giá trị trùng không nhất quán.'],
        code: `# TreeNode như ở bài "Cây nhị phân"
def search(node, x):
    while node and node.val != x:
        node = node.left if x < node.val else node.right
    return node

def insert(node, x):
    if not node:
        return TreeNode(x)
    if x < node.val:
        node.left = insert(node.left, x)
    else:
        node.right = insert(node.right, x)
    return node

def delete(node, x):
    if not node:
        return None
    if x < node.val:
        node.left = delete(node.left, x)
    elif x > node.val:
        node.right = delete(node.right, x)
    else:
        if not node.left:
            return node.right
        if not node.right:
            return node.left
        succ = node.right                 # 2 con: tìm nút kế tiếp
        while succ.left:
            succ = succ.left
        node.val = succ.val
        node.right = delete(node.right, succ.val)
    return node

def is_valid_bst(node, lo=float("-inf"), hi=float("inf")):
    if not node:
        return True
    if not (lo < node.val < hi):
        return False
    return is_valid_bst(node.left, lo, node.val) and is_valid_bst(node.right, node.val, hi)`,
        practice: [['Search in a Binary Search Tree', 'search-in-a-binary-search-tree'], ['Insert into a Binary Search Tree', 'insert-into-a-binary-search-tree'], ['Delete Node in a BST', 'delete-node-in-a-bst'], ['Validate Binary Search Tree', 'validate-binary-search-tree'], ['Kth Smallest Element in a BST', 'kth-smallest-element-in-a-bst'], ['Lowest Common Ancestor of a Binary Search Tree', 'lowest-common-ancestor-of-a-binary-search-tree']],
        related: ['binary-tree', 'avl', 'binary-search'],
        viz: 'bst'
    });

    T({
        id: 'heap', cat: 'tree', level: 2, interview: true,
        title: 'Heap & hàng đợi ưu tiên', en: 'Binary Heap / Priority Queue',
        tags: ['heap', 'đống', 'hàng đợi ưu tiên', 'priority queue', 'heapq', 'top k', 'trung vị'],
        summary: 'Cây nhị phân hoàn chỉnh lưu trong mảng: luôn lấy được phần tử nhỏ nhất (hoặc lớn nhất) trong O(1), thêm / lấy ra O(log n).',
        idea: 'Tính chất heap: cha ≤ các con (min-heap). Thêm: đặt vào cuối rồi <b>vun lên</b>; lấy min: đưa phần tử cuối lên gốc rồi <b>vun xuống</b>. Chiều cao luôn là log n vì cây hoàn chỉnh. Heap không sắp xếp toàn bộ — chỉ đảm bảo gốc là cực trị — nên rẻ hơn cây cân bằng.',
        cx: { rows: [['Xem min / max', 'O(1)'], ['push / pop', 'O(log n)'], ['Xây heap từ n phần tử', 'O(n)'], ['Tìm phần tử bất kỳ', 'O(n)']] },
        when: ['Top-k lớn nhất / nhỏ nhất: giữ heap kích thước k → O(n log k).', 'Trộn k danh sách đã sắp xếp; Dijkstra, Prim; lập lịch theo độ ưu tiên.', 'Trung vị của luồng dữ liệu: hai heap (max-heap nửa dưới, min-heap nửa trên).'],
        pitfalls: [
            '<code>heapq</code> của Python là min-heap — muốn max-heap thì lưu số đối (−x).',
            'Không đổi được độ ưu tiên trực tiếp → đẩy bản ghi mới và bỏ qua bản cũ khi lấy ra (lazy deletion).',
            'Tuple chứa object không so sánh được → thêm một bộ đếm làm phần tử thứ hai.'
        ],
        code: `import heapq

h = []
for x in [5, 1, 8, 3]:
    heapq.heappush(h, x)
print(heapq.heappop(h))                   # 1 — nhỏ nhất
print(h[0])                               # 3 — xem min, O(1)

def top_k_largest(nums, k):               # O(n log k)
    h = []
    for x in nums:
        heapq.heappush(h, x)
        if len(h) > k:
            heapq.heappop(h)              # bỏ phần tử nhỏ nhất
    return sorted(h, reverse=True)

class MedianFinder:                       # trung vị của luồng dữ liệu
    def __init__(self):
        self.lo, self.hi = [], []         # lo: max-heap (lưu số âm), hi: min-heap
    def add(self, x):
        heapq.heappush(self.lo, -x)
        heapq.heappush(self.hi, -heapq.heappop(self.lo))
        if len(self.hi) > len(self.lo):
            heapq.heappush(self.lo, -heapq.heappop(self.hi))
    def median(self):
        if len(self.lo) > len(self.hi):
            return -self.lo[0]
        return (-self.lo[0] + self.hi[0]) / 2`,
        practice: [['Kth Largest Element in an Array', 'kth-largest-element-in-an-array'], ['Top K Frequent Elements', 'top-k-frequent-elements'], ['Merge k Sorted Lists', 'merge-k-sorted-lists'], ['Find Median from Data Stream', 'find-median-from-data-stream'], ['K Closest Points to Origin', 'k-closest-points-to-origin'], ['Last Stone Weight', 'last-stone-weight']],
        related: ['heap-sort', 'dijkstra', 'mst-prim', 'sweep-line'],
        viz: 'heapOps'
    });

    T({
        id: 'trie', cat: 'tree', level: 2, interview: true,
        title: 'Trie (cây tiền tố)', en: 'Trie / Prefix Tree',
        tags: ['trie', 'cây tiền tố', 'prefix tree', 'tự động hoàn thành', 'autocomplete', 'từ điển'],
        summary: 'Cây lưu chuỗi theo từng ký tự; các từ chung tiền tố dùng chung đường đi — tìm theo tiền tố trong O(độ dài).',
        idea: 'Mỗi nút đại diện một tiền tố; mỗi cạnh mang một ký tự; nút được đánh dấu <code>is_end</code> nếu có từ kết thúc tại đó. Chèn / tìm chỉ phụ thuộc độ dài từ L, không phụ thuộc số lượng từ. Biến thể: trie nhị phân (theo bit) để tìm XOR lớn nhất; trie kèm bộ đếm để đếm số từ có một tiền tố.',
        cx: { rows: [['Chèn / tìm từ / tìm tiền tố', 'O(L)'], ['Bộ nhớ', 'O(tổng độ dài các từ)']] },
        when: ['Gợi ý tự động hoàn thành, kiểm tra chính tả, định tuyến IP (khớp tiền tố dài nhất).', 'Tìm nhiều từ trong lưới (Word Search II); từ điển có ký tự đại diện ".".', 'XOR lớn nhất của hai số (trie theo bit).'],
        pitfalls: ['Tốn bộ nhớ khi bảng chữ cái lớn — dùng dict thay vì mảng 26 phần tử.', 'Quên đánh dấu is_end → "car" bị coi là có trong từ điển chỉ vì có "cart".'],
        code: `class Trie:
    def __init__(self):
        self.root = {}

    def insert(self, word):
        node = self.root
        for ch in word:
            node = node.setdefault(ch, {})
        node["$"] = True                  # đánh dấu kết thúc từ

    def _walk(self, s):
        node = self.root
        for ch in s:
            if ch not in node:
                return None
            node = node[ch]
        return node

    def search(self, word):
        node = self._walk(word)
        return node is not None and "$" in node

    def starts_with(self, prefix):
        return self._walk(prefix) is not None`,
        practice: [['Implement Trie (Prefix Tree)', 'implement-trie-prefix-tree'], ['Design Add and Search Words Data Structure', 'design-add-and-search-words-data-structure'], ['Search Suggestions System', 'search-suggestions-system'], ['Word Search II', 'word-search-ii'], ['Maximum XOR of Two Numbers in an Array', 'maximum-xor-of-two-numbers-in-an-array']],
        related: ['hash-table', 'dfs', 'bit-manipulation'],
        viz: 'trie'
    });

    T({
        id: 'dsu', cat: 'tree', level: 2, interview: true,
        title: 'Union-Find (DSU)', en: 'Disjoint Set Union',
        tags: ['union find', 'dsu', 'disjoint set', 'hợp nhất', 'thành phần liên thông', 'nén đường đi'],
        summary: 'Quản lý các nhóm rời nhau: gộp hai nhóm và kiểm tra hai phần tử có cùng nhóm không — gần như O(1) mỗi thao tác.',
        idea: 'Mỗi nhóm là một cây, gốc là "đại diện". <code>find(x)</code> đi lên tới gốc; <code>union(a, b)</code> gắn gốc này vào gốc kia. Hai tối ưu biến nó thành gần O(1) (chính xác là O(α(n)), α ≤ 4 với mọi n thực tế): <b>nén đường đi</b> (sau khi find, nối thẳng các nút lên gốc) và <b>hợp theo hạng / kích thước</b> (gắn cây thấp vào cây cao).',
        cx: { rows: [['find / union', 'O(α(n)) ≈ O(1) khấu hao'], ['Bộ nhớ', 'O(n)']] },
        when: ['Đếm thành phần liên thông khi các cạnh đến dần.', 'Kruskal; tìm cạnh thừa tạo chu trình.', 'Gộp tài khoản / email, nhóm từ đồng nghĩa, phương trình bằng nhau.'],
        pitfalls: ['Quên gọi find khi so sánh — so <code>parent[a] == parent[b]</code> là sai.', 'Không hỗ trợ tách nhóm (xóa cạnh) — cần kỹ thuật khác (xử lý ngược thời gian).'],
        code: `class DSU:
    def __init__(self, n):
        self.parent = list(range(n))
        self.size = [1] * n

    def find(self, x):
        while self.parent[x] != x:
            self.parent[x] = self.parent[self.parent[x]]   # nén đường đi
            x = self.parent[x]
        return x

    def union(self, a, b):
        ra, rb = self.find(a), self.find(b)
        if ra == rb:
            return False                  # đã cùng nhóm
        if self.size[ra] < self.size[rb]:
            ra, rb = rb, ra
        self.parent[rb] = ra              # gắn nhóm nhỏ vào nhóm lớn
        self.size[ra] += self.size[rb]
        return True

def count_components(n, edges):
    d = DSU(n)
    return n - sum(d.union(a, b) for a, b in edges)`,
        practice: [['Number of Provinces', 'number-of-provinces'], ['Redundant Connection', 'redundant-connection'], ['Accounts Merge', 'accounts-merge'], ['Most Stones Removed with Same Row or Column', 'most-stones-removed-with-same-row-or-column'], ['Satisfiability of Equality Equations', 'satisfiability-of-equality-equations']],
        related: ['mst-kruskal', 'graph-basics', 'amortized'],
        viz: 'dsu'
    });

    T({
        id: 'avl', cat: 'tree', level: 3,
        title: 'Cây tự cân bằng (AVL, đỏ-đen)', en: 'Self-balancing BST',
        tags: ['avl', 'cây cân bằng', 'red black', 'đỏ đen', 'xoay cây', 'rotation'],
        summary: 'BST tự "xoay" sau mỗi lần chèn/xóa để giữ chiều cao O(log n) — đảm bảo mọi thao tác O(log n).',
        idea: 'AVL giữ <b>hệ số cân bằng</b> (cao trái − cao phải) của mọi nút trong {−1, 0, 1}. Khi chèn làm lệch, xoay tại nút lệch thấp nhất theo 4 trường hợp: <b>LL</b> (xoay phải), <b>RR</b> (xoay trái), <b>LR</b> (xoay trái ở con trái rồi xoay phải), <b>RL</b> (ngược lại). <b>Cây đỏ-đen</b> nới lỏng điều kiện (đường dài nhất ≤ 2 lần đường ngắn nhất) nên ít phải xoay hơn — được dùng trong std::map, TreeMap, bộ lập lịch CFS của Linux.',
        cx: { rows: [['Tìm / chèn / xóa', 'O(log n) đảm bảo'], ['Chiều cao AVL', '≤ 1.44 · log₂ n'], ['Chiều cao đỏ-đen', '≤ 2 · log₂(n + 1)']] },
        when: ['Cần tập / ánh xạ có thứ tự với đảm bảo thời gian xấu nhất.', 'Thực tế hầu như dùng thư viện; tự viết để hiểu, hoặc khi cần tăng cường (lưu kích thước cây con để tìm phần tử thứ k).'],
        pitfalls: ['Quên cập nhật chiều cao sau khi xoay (cập nhật nút thấp hơn trước).', 'Nhầm trường hợp LR/RL với LL/RR.', 'Python không có cây cân bằng chuẩn — dùng <code>sortedcontainers</code> hoặc bisect trên list.'],
        code: `class Node:
    def __init__(self, val):
        self.val, self.left, self.right, self.h = val, None, None, 1

def h(n): return n.h if n else 0
def update(n): n.h = 1 + max(h(n.left), h(n.right))
def balance(n): return h(n.left) - h(n.right)

def rotate_right(y):
    x = y.left
    y.left, x.right = x.right, y
    update(y); update(x)
    return x

def rotate_left(x):
    y = x.right
    x.right, y.left = y.left, x
    update(x); update(y)
    return y

def insert(n, v):
    if not n:
        return Node(v)
    if v < n.val:
        n.left = insert(n.left, v)
    else:
        n.right = insert(n.right, v)
    update(n)
    b = balance(n)
    if b > 1 and v < n.left.val:          # LL
        return rotate_right(n)
    if b < -1 and v >= n.right.val:       # RR
        return rotate_left(n)
    if b > 1:                             # LR
        n.left = rotate_left(n.left)
        return rotate_right(n)
    if b < -1:                            # RL
        n.right = rotate_right(n.right)
        return rotate_left(n)
    return n`,
        practice: [['Balance a Binary Search Tree', 'balance-a-binary-search-tree'], ['Convert Sorted Array to Binary Search Tree', 'convert-sorted-array-to-binary-search-tree'], ['Contains Duplicate III', 'contains-duplicate-iii']],
        related: ['bst', 'segment-tree'],
        viz: 'avl'
    });

    T({
        id: 'segment-tree', cat: 'tree', level: 3,
        title: 'Segment Tree (cây phân đoạn)', en: 'Segment Tree',
        tags: ['segment tree', 'cây phân đoạn', 'truy vấn đoạn', 'range query', 'lazy propagation', 'rmq'],
        summary: 'Cây nhị phân mà mỗi nút lưu thông tin (tổng, min, max…) của một đoạn — truy vấn và cập nhật đều O(log n).',
        idea: 'Gốc quản lý cả mảng [0, n−1]; mỗi nút chia đôi đoạn của mình cho hai con; lá là từng phần tử. Truy vấn [l, r]: nút nằm <b>trọn</b> trong đoạn → lấy luôn; nằm <b>ngoài</b> → bỏ qua; <b>giao một phần</b> → đi xuống hai con. Chỉ O(log n) nút được ghé. Với <b>lazy propagation</b>, cập nhật cả một đoạn (vd. cộng v vào [l, r]) cũng chỉ O(log n).',
        cx: { rows: [['Xây cây', 'O(n)'], ['Truy vấn đoạn', 'O(log n)'], ['Cập nhật điểm', 'O(log n)'], ['Cập nhật đoạn (lazy)', 'O(log n)'], ['Bộ nhớ', 'O(4n)']] },
        when: ['Truy vấn đoạn (tổng / min / max / gcd) xen kẽ cập nhật, n và q tới 10⁵–10⁶.', 'Phép gộp có tính kết hợp bất kỳ — linh hoạt hơn Fenwick.'],
        pitfalls: ['Cấp phát thiếu: dùng mảng 4n.', 'Lazy: quên đẩy giá trị lazy xuống con trước khi đi xuống.', 'Nhầm biên đoạn đóng/nửa mở.'],
        code: `class SegTree:                            # tổng đoạn, cập nhật điểm
    def __init__(self, a):
        self.n = len(a)
        self.t = [0] * (4 * self.n)
        self._build(a, 1, 0, self.n - 1)

    def _build(self, a, node, l, r):
        if l == r:
            self.t[node] = a[l]
            return
        m = (l + r) // 2
        self._build(a, 2 * node, l, m)
        self._build(a, 2 * node + 1, m + 1, r)
        self.t[node] = self.t[2 * node] + self.t[2 * node + 1]

    def update(self, i, val, node=1, l=0, r=None):
        if r is None:
            r = self.n - 1
        if l == r:
            self.t[node] = val
            return
        m = (l + r) // 2
        if i <= m:
            self.update(i, val, 2 * node, l, m)
        else:
            self.update(i, val, 2 * node + 1, m + 1, r)
        self.t[node] = self.t[2 * node] + self.t[2 * node + 1]

    def query(self, ql, qr, node=1, l=0, r=None):
        if r is None:
            r = self.n - 1
        if qr < l or r < ql:
            return 0                      # nằm ngoài
        if ql <= l and r <= qr:
            return self.t[node]           # nằm trọn
        m = (l + r) // 2
        return (self.query(ql, qr, 2 * node, l, m) +
                self.query(ql, qr, 2 * node + 1, m + 1, r))`,
        practice: [['Range Sum Query - Mutable', 'range-sum-query-mutable'], ['Count of Smaller Numbers After Self', 'count-of-smaller-numbers-after-self'], ['My Calendar III', 'my-calendar-iii'], ['Falling Squares', 'falling-squares'], ['Longest Increasing Subsequence II', 'longest-increasing-subsequence-ii']],
        related: ['fenwick', 'sparse-table', 'prefix-sum'],
        viz: 'segTree'
    });

    T({
        id: 'fenwick', cat: 'tree', level: 3,
        title: 'Fenwick Tree (BIT)', en: 'Fenwick Tree / Binary Indexed Tree',
        tags: ['fenwick', 'bit', 'binary indexed tree', 'tổng tiền tố động', 'lowbit'],
        summary: 'Mảng khéo léo dựa trên biểu diễn nhị phân của chỉ số: tổng tiền tố và cập nhật điểm đều O(log n), code chỉ ~10 dòng.',
        idea: '<code>T[i]</code> lưu tổng của đoạn (i − lowbit(i), i], với <code>lowbit(i) = i &amp; −i</code> là bit 1 thấp nhất. Tính tổng tiền tố: cộng T[i] rồi bỏ bit thấp nhất (<code>i −= i &amp; −i</code>). Cập nhật: cộng vào T[i] rồi nhảy lên (<code>i += i &amp; −i</code>). Mỗi thao tác đi qua tối đa log n ô. Gọn hơn segment tree nhưng chỉ hợp với phép toán khả nghịch như cộng.',
        cx: { rows: [['Cập nhật điểm', 'O(log n)'], ['Tổng tiền tố / tổng đoạn', 'O(log n)'], ['Bộ nhớ', 'O(n)']] },
        when: ['Tổng đoạn + cập nhật điểm (hoặc cập nhật đoạn + truy vấn điểm khi kết hợp mảng hiệu).', 'Đếm nghịch thế, đếm số phần tử nhỏ hơn đã gặp (kết hợp nén tọa độ).'],
        pitfalls: ['Fenwick dùng chỉ số từ 1 — với chỉ số 0, <code>i &amp; −i = 0</code> gây lặp vô hạn.', 'Không làm trực tiếp được min/max với cập nhật tùy ý → dùng segment tree.'],
        code: `class BIT:
    def __init__(self, n):
        self.n, self.t = n, [0] * (n + 1)

    def add(self, i, delta):              # a[i] += delta, i tính từ 1
        while i <= self.n:
            self.t[i] += delta
            i += i & -i

    def prefix(self, i):                  # a[1] + ... + a[i]
        s = 0
        while i > 0:
            s += self.t[i]
            i -= i & -i
        return s

    def range_sum(self, l, r):
        return self.prefix(r) - self.prefix(l - 1)

def count_inversions(a):                  # kết hợp nén tọa độ
    rank = {v: i + 1 for i, v in enumerate(sorted(set(a)))}
    bit, inv = BIT(len(rank)), 0
    for seen, x in enumerate(a):
        inv += seen - bit.prefix(rank[x]) # số phần tử trước đó lớn hơn x
        bit.add(rank[x], 1)
    return inv`,
        practice: [['Range Sum Query - Mutable', 'range-sum-query-mutable'], ['Count of Smaller Numbers After Self', 'count-of-smaller-numbers-after-self'], ['Create Sorted Array through Instructions', 'create-sorted-array-through-instructions'], ['Reverse Pairs', 'reverse-pairs']],
        related: ['segment-tree', 'prefix-sum', 'coordinate-compression', 'bit-manipulation'],
        viz: 'fenwick'
    });

    T({
        id: 'sparse-table', cat: 'tree', level: 3,
        title: 'Sparse Table (RMQ)', en: 'Sparse Table',
        tags: ['sparse table', 'rmq', 'range minimum query', 'min đoạn', 'truy vấn o(1)'],
        summary: 'Tiền xử lý O(n log n) để trả lời min / max của bất kỳ đoạn nào trong O(1) — cho mảng không thay đổi.',
        idea: '<code>st[k][i]</code> = min của đoạn dài 2ᵏ bắt đầu tại i, tính bằng <code>min(st[k−1][i], st[k−1][i + 2ᵏ⁻¹])</code>. Một đoạn [l, r] bất kỳ được phủ bởi 2 đoạn dài 2ᵏ (k = ⌊log₂(r − l + 1)⌋) chồng lên nhau — với min / max / gcd, phần chồng lấn không ảnh hưởng kết quả.',
        cx: { rows: [['Tiền xử lý', 'O(n log n)'], ['Truy vấn min / max / gcd', 'O(1)'], ['Cập nhật', 'Không hỗ trợ']] },
        when: ['Rất nhiều truy vấn min / max / gcd trên mảng tĩnh.', 'Tìm LCA qua Euler tour + RMQ.'],
        pitfalls: ['Không dùng cho tổng (phần chồng lấn bị cộng 2 lần) — tổng thì dùng prefix sum.', 'Mảng thay đổi → dùng segment tree.'],
        code: `def build_sparse(a):
    n = len(a)
    st = [a[:]]
    k = 1
    while (1 << k) <= n:
        prev, half = st[-1], 1 << (k - 1)
        st.append([min(prev[i], prev[i + half]) for i in range(n - (1 << k) + 1)])
        k += 1
    return st

def range_min(st, l, r):                  # O(1)
    k = (r - l + 1).bit_length() - 1
    return min(st[k][l], st[k][r - (1 << k) + 1])`,
        practice: [['Static Range Minimum Queries (CSES)', null], ['Sliding Window Maximum', 'sliding-window-maximum']],
        related: ['segment-tree', 'lca', 'prefix-sum']
    });

    T({
        id: 'lca', cat: 'tree', level: 3,
        title: 'Tổ tiên chung gần nhất (LCA) & Binary Lifting', en: 'Lowest Common Ancestor',
        tags: ['lca', 'tổ tiên chung', 'binary lifting', 'nhảy nhị phân', 'khoảng cách trên cây'],
        summary: 'Tìm tổ tiên chung thấp nhất của hai nút trong O(log n) mỗi truy vấn nhờ bảng "nhảy 2ᵏ bước".',
        idea: 'Binary lifting lưu <code>up[k][v]</code> = tổ tiên thứ 2ᵏ của v (<code>up[k][v] = up[k−1][up[k−1][v]]</code>). Tìm LCA(u, v): đưa nút sâu hơn lên cùng độ sâu bằng cách nhảy theo các bit của hiệu độ sâu; nếu chưa trùng, nhảy cả hai lên với k từ lớn tới nhỏ miễn là tổ tiên còn khác nhau; cuối cùng cha của chúng là LCA. Cùng bảng này trả lời "tổ tiên thứ k" trong O(log n).',
        cx: { rows: [['Tiền xử lý', 'O(n log n)'], ['Mỗi truy vấn LCA / tổ tiên thứ k', 'O(log n)']] },
        when: ['Khoảng cách giữa hai nút: dist = depth[u] + depth[v] − 2·depth[lca].', 'Nhiều truy vấn trên cây tĩnh.', 'Chỉ một truy vấn trên cây nhị phân → đệ quy O(n) là đủ.'],
        pitfalls: ['Quên đặt tổ tiên của gốc là chính nó (hoặc −1 và kiểm tra).', 'Số tầng LOG phải đủ để 2^LOG ≥ n.'],
        code: `from collections import deque

def build_lca(n, adj, root=0):
    LOG = max(1, n.bit_length())
    up = [[root] * n for _ in range(LOG)]
    depth = [0] * n
    seen = [False] * n
    seen[root] = True
    q = deque([root])
    while q:                              # BFS để có cha và độ sâu
        u = q.popleft()
        for v in adj[u]:
            if not seen[v]:
                seen[v] = True
                depth[v] = depth[u] + 1
                up[0][v] = u
                q.append(v)
    for k in range(1, LOG):
        for v in range(n):
            up[k][v] = up[k - 1][up[k - 1][v]]
    return up, depth

def lca(u, v, up, depth):
    if depth[u] < depth[v]:
        u, v = v, u
    diff = depth[u] - depth[v]
    for k in range(len(up)):
        if (diff >> k) & 1:
            u = up[k][u]                  # đưa u lên cùng độ sâu với v
    if u == v:
        return u
    for k in range(len(up) - 1, -1, -1):
        if up[k][u] != up[k][v]:
            u, v = up[k][u], up[k][v]
    return up[0][u]`,
        practice: [['Lowest Common Ancestor of a Binary Tree', 'lowest-common-ancestor-of-a-binary-tree'], ['Kth Ancestor of a Tree Node', 'kth-ancestor-of-a-tree-node']],
        related: ['binary-tree', 'sparse-table', 'tree-dp']
    });
})();
