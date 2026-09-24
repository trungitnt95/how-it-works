/* Topic content — strings, math */
(function () {
    'use strict';
    const Algo = window.Algo;
    const T = (o) => Algo.topics.push(o);

    /* ============================ XỬ LÝ CHUỖI ============================ */

    T({
        id: 'char-counting', cat: 'string', level: 1, interview: true,
        title: 'Đếm tần suất & anagram', en: 'Frequency Counting',
        tags: ['đếm ký tự', 'tần suất', 'anagram', 'đảo chữ', 'counter', 'ransom note'],
        summary: 'Đếm số lần xuất hiện của từng ký tự bằng mảng 26 ô hoặc hash map — giải hàng loạt bài chuỗi trong O(n).',
        idea: 'Rất nhiều bài chuỗi chỉ quan tâm "mỗi loại ký tự có bao nhiêu" chứ không quan tâm thứ tự: anagram, ký tự không lặp đầu tiên, tạo được chuỗi này từ chuỗi kia không. Với bảng chữ cái nhỏ, mảng đếm 26 ô vừa nhanh vừa dùng làm khóa hash được (đổi sang tuple). Kết hợp cửa sổ trượt để tìm mọi anagram của một mẫu trong văn bản.',
        cx: { rows: [['Thời gian', 'O(n)'], ['Bộ nhớ', 'O(kích thước bảng chữ cái)']] },
        when: ['Kiểm tra / gom nhóm anagram.', 'Ký tự không lặp đầu tiên, ký tự xuất hiện nhiều nhất.', 'Ransom note: có đủ ký tự để tạo chuỗi đích không.'],
        pitfalls: ['Chuỗi Unicode (tiếng Việt có dấu) không vừa mảng 26 ô → dùng Counter.', 'Quên chuẩn hóa chữ hoa / khoảng trắng nếu đề yêu cầu.'],
        code: `from collections import Counter

def is_anagram(s, t):
    if len(s) != len(t):
        return False
    cnt = [0] * 26
    for a, b in zip(s, t):
        cnt[ord(a) - 97] += 1
        cnt[ord(b) - 97] -= 1
    return all(x == 0 for x in cnt)

def first_unique_char(s):
    c = Counter(s)
    return next((i for i, ch in enumerate(s) if c[ch] == 1), -1)

def find_anagrams(s, p):                  # vị trí mọi anagram của p trong s
    need, win, res = Counter(p), Counter(), []
    for i, ch in enumerate(s):
        win[ch] += 1
        if i >= len(p):
            left = s[i - len(p)]
            win[left] -= 1
            if win[left] == 0:
                del win[left]
        if win == need:
            res.append(i - len(p) + 1)
    return res`,
        practice: [['Valid Anagram', 'valid-anagram'], ['First Unique Character in a String', 'first-unique-character-in-a-string'], ['Ransom Note', 'ransom-note'], ['Find All Anagrams in a String', 'find-all-anagrams-in-a-string'], ['Group Anagrams', 'group-anagrams']],
        related: ['hash-table', 'sliding-window', 'counting-sort'],
        viz: 'anagram'
    });

    T({
        id: 'palindrome', cat: 'string', level: 2, interview: true,
        title: 'Palindrome & nở từ tâm', en: 'Palindromes (Expand Around Center)',
        tags: ['palindrome', 'đối xứng', 'chuỗi con palindrome', 'expand around center', 'manacher'],
        summary: 'Chuỗi đọc xuôi ngược như nhau; tìm palindrome dài nhất bằng cách thử 2n − 1 tâm và nở ra hai phía.',
        idea: 'Kiểm tra một chuỗi là palindrome: hai con trỏ từ hai đầu. Tìm chuỗi con palindrome dài nhất: mỗi palindrome có một <b>tâm</b> — một ký tự (độ dài lẻ) hoặc khe giữa hai ký tự (độ dài chẵn). Thử mọi tâm, nở ra khi hai bên còn bằng nhau: O(n²) thời gian, O(1) bộ nhớ. <b>Manacher</b> tận dụng tính đối xứng để đạt O(n).',
        cx: { rows: [['Kiểm tra palindrome', 'O(n)'], ['Nở từ tâm', 'O(n²), O(1) bộ nhớ'], ['Manacher', 'O(n)']] },
        when: ['Chuỗi con palindrome dài nhất, đếm chuỗi con palindrome.', 'Kiểm tra palindrome sau khi bỏ ký tự không phải chữ/số, hoặc được xóa tối đa 1 ký tự.'],
        pitfalls: ['Quên trường hợp tâm chẵn.', 'Nhầm chuỗi con (liên tiếp) với dãy con palindrome (dùng QHĐ đoạn / LCS với chuỗi đảo).'],
        code: `def is_palindrome(s):
    s = [c.lower() for c in s if c.isalnum()]
    l, r = 0, len(s) - 1
    while l < r:
        if s[l] != s[r]:
            return False
        l, r = l + 1, r - 1
    return True

def longest_palindrome(s):
    best = ""
    for center in range(2 * len(s) - 1):
        l = center // 2
        r = l + center % 2                # tâm lẻ: l == r; tâm chẵn: r = l + 1
        while l >= 0 and r < len(s) and s[l] == s[r]:
            l -= 1
            r += 1
        if r - l - 1 > len(best):
            best = s[l + 1:r]
    return best

def count_palindromic_substrings(s):
    count = 0
    for center in range(2 * len(s) - 1):
        l, r = center // 2, center // 2 + center % 2
        while l >= 0 and r < len(s) and s[l] == s[r]:
            count += 1
            l, r = l - 1, r + 1
    return count`,
        practice: [['Valid Palindrome', 'valid-palindrome'], ['Valid Palindrome II', 'valid-palindrome-ii'], ['Longest Palindromic Substring', 'longest-palindromic-substring'], ['Palindromic Substrings', 'palindromic-substrings'], ['Longest Palindrome', 'longest-palindrome']],
        related: ['two-pointers', 'interval-dp', 'kmp'],
        viz: 'palindromeCenter'
    });

    T({
        id: 'kmp', cat: 'string', level: 3,
        title: 'KMP — tìm chuỗi con', en: 'Knuth–Morris–Pratt',
        tags: ['kmp', 'tìm chuỗi', 'string matching', 'lps', 'prefix function', 'hàm tiền tố'],
        summary: 'Tìm mẫu trong văn bản trong O(n + m): khi lệch, dùng bảng lps để trượt mẫu mà không bao giờ lùi con trỏ văn bản.',
        idea: 'Cách ngây thơ: lệch ở đâu là quay lại so từ đầu → O(n·m). KMP nhận xét: phần đã khớp chính là một tiền tố của mẫu, nên ta biết trước nó "chồng" lên chính nó thế nào. <b>lps[i]</b> = độ dài tiền tố thực sự dài nhất của p[0..i] đồng thời là hậu tố của nó. Khi lệch tại j, đặt <code>j = lps[j−1]</code> — giữ lại phần chắc chắn vẫn khớp — thay vì về 0.',
        cx: { rows: [['Xây bảng lps', 'O(m)'], ['Tìm kiếm', 'O(n)'], ['Bộ nhớ', 'O(m)']] },
        when: ['Tìm mọi lần xuất hiện của mẫu, đặc biệt với văn bản lớn / dạng luồng.', 'Chu kỳ nhỏ nhất của chuỗi (n − lps[n−1]); palindrome ngắn nhất khi thêm vào đầu; tiền tố dài nhất đồng thời là hậu tố.'],
        pitfalls: ['Nhầm lps[j] với lps[j−1] khi lệch.', 'Thực tế <code>str.find</code> / <code>in</code> đã rất nhanh; tự viết KMP khi cần bảng lps hoặc cần đảm bảo O(n + m).'],
        code: `def build_lps(p):
    lps, k = [0] * len(p), 0
    for i in range(1, len(p)):
        while k and p[i] != p[k]:
            k = lps[k - 1]
        if p[i] == p[k]:
            k += 1
        lps[i] = k
    return lps

def kmp_search(t, p):
    lps, j, res = build_lps(p), 0, []
    for i, ch in enumerate(t):
        while j and ch != p[j]:
            j = lps[j - 1]                # trượt mẫu, i không lùi
        if ch == p[j]:
            j += 1
        if j == len(p):
            res.append(i - j + 1)
            j = lps[j - 1]
    return res

def shortest_period(s):                   # "abcabcabc" → 3
    n = len(s)
    period = n - build_lps(s)[-1]
    return period if n % period == 0 else n`,
        practice: [['Find the Index of the First Occurrence in a String', 'find-the-index-of-the-first-occurrence-in-a-string'], ['Repeated Substring Pattern', 'repeated-substring-pattern'], ['Longest Happy Prefix', 'longest-happy-prefix'], ['Shortest Palindrome', 'shortest-palindrome']],
        related: ['z-function', 'rabin-karp', 'trie'],
        viz: 'kmp'
    });

    T({
        id: 'rabin-karp', cat: 'string', level: 3,
        title: 'Rabin–Karp & băm chuỗi', en: 'Rabin–Karp / Rolling Hash',
        tags: ['rabin karp', 'rolling hash', 'băm chuỗi', 'string hashing', 'hash lăn', 'chuỗi con lặp'],
        summary: 'Biến mỗi cửa sổ thành một con số (hash) cập nhật O(1) khi trượt; chỉ so ký tự khi hai hash bằng nhau.',
        idea: 'Coi chuỗi như một số trong hệ cơ số B, lấy mod M. Khi trượt cửa sổ, bỏ ký tự trái và thêm ký tự phải chỉ bằng vài phép tính (<b>rolling hash</b>). Hai chuỗi khác nhau vẫn có thể trùng hash (va chạm) nên khi hash bằng phải so lại — hoặc dùng hai mod để xác suất va chạm gần như bằng 0. Băm tiền tố còn cho phép so sánh hai chuỗi con bất kỳ trong O(1).',
        cx: { rows: [['Trung bình', 'O(n + m)'], ['Xấu nhất (va chạm nhiều)', 'O(n · m)']] },
        when: ['Tìm nhiều mẫu cùng độ dài; chuỗi con lặp lại dài nhất (tìm nhị phân + hash).', 'So sánh nhanh các chuỗi con, đếm chuỗi con khác nhau.'],
        pitfalls: ['M nhỏ → va chạm nhiều; dùng M lớn (10⁹ + 7, 2⁶¹ − 1) hoặc hai mod.', 'Số âm sau phép trừ khi lăn → cộng M trước khi lấy mod (C++/Java).'],
        code: `def rabin_karp(t, p, B=256, M=10**9 + 7):
    n, m = len(t), len(p)
    if m > n:
        return []
    hp = hw = 0
    for i in range(m):
        hp = (hp * B + ord(p[i])) % M
        hw = (hw * B + ord(t[i])) % M
    top = pow(B, m - 1, M)                # B^(m-1) để bỏ ký tự bên trái
    res = []
    for i in range(n - m + 1):
        if hw == hp and t[i:i + m] == p:  # hash bằng → so kỹ
            res.append(i)
        if i + m < n:                     # lăn: bỏ t[i], thêm t[i+m]
            hw = ((hw - ord(t[i]) * top) * B + ord(t[i + m])) % M
    return res

class PrefixHash:                         # so sánh 2 chuỗi con trong O(1)
    def __init__(self, s, B=131, M=(1 << 61) - 1):
        self.M = M
        self.h = [0] * (len(s) + 1)
        self.p = [1] * (len(s) + 1)
        for i, ch in enumerate(s):
            self.h[i + 1] = (self.h[i] * B + ord(ch)) % M
            self.p[i + 1] = self.p[i] * B % M

    def get(self, l, r):                  # hash của s[l:r]
        return (self.h[r] - self.h[l] * self.p[r - l]) % self.M`,
        practice: [['Repeated DNA Sequences', 'repeated-dna-sequences'], ['Longest Duplicate Substring', 'longest-duplicate-substring'], ['Distinct Echo Substrings', 'distinct-echo-substrings']],
        related: ['kmp', 'hash-table', 'sliding-window'],
        viz: 'rabinKarp'
    });

    T({
        id: 'z-function', cat: 'string', level: 3,
        title: 'Hàm Z', en: 'Z-Function',
        tags: ['z function', 'hàm z', 'z algorithm', 'so khớp tiền tố', 'string matching'],
        summary: 'z[i] = độ dài đoạn dài nhất bắt đầu tại i trùng với tiền tố của chuỗi — tính cho mọi i trong O(n).',
        idea: 'Duy trì "hộp Z" [l, r) — đoạn khớp tiền tố có đầu mút phải xa nhất đã tìm được. Với i nằm trong hộp, z[i] ít nhất bằng <code>min(r − i, z[i − l])</code> nhờ thông tin đã biết; chỉ cần so tiếp phần vượt ra ngoài hộp. Tìm mẫu p trong t: tính Z của <code>p + "#" + t</code>; vị trí nào có z = |p| là một lần khớp. Thường dễ cài và dễ suy luận hơn KMP.',
        cx: { rows: [['Thời gian', 'O(n + m)'], ['Bộ nhớ', 'O(n + m)']] },
        when: ['Tìm mẫu; đếm số lần mỗi tiền tố xuất hiện; chu kỳ của chuỗi.', 'Nén chuỗi, các bài so khớp tiền tố.'],
        pitfalls: ['Ký tự ngăn cách phải không xuất hiện trong cả p và t.', 'z[0] thường quy ước bằng 0 (hoặc n).'],
        code: `def z_function(s):
    n = len(s)
    z = [0] * n
    l = r = 0
    for i in range(1, n):
        if i < r:
            z[i] = min(r - i, z[i - l])   # dùng lại thông tin trong hộp Z
        while i + z[i] < n and s[z[i]] == s[i + z[i]]:
            z[i] += 1
        if i + z[i] > r:
            l, r = i, i + z[i]
    return z

def z_search(t, p):
    s = p + "\\x00" + t                   # ký tự ngăn cách không có trong p, t
    z = z_function(s)
    m = len(p)
    return [i - m - 1 for i in range(m + 1, len(s)) if z[i] >= m]`,
        practice: [['Find the Index of the First Occurrence in a String', 'find-the-index-of-the-first-occurrence-in-a-string'], ['Sum of Scores of Built Strings', 'sum-of-scores-of-built-strings'], ['Longest Happy Prefix', 'longest-happy-prefix']],
        related: ['kmp', 'rabin-karp']
    });

    /* ========================= TOÁN CHO LẬP TRÌNH ========================= */

    T({
        id: 'gcd', cat: 'math', level: 1,
        title: 'Ước chung lớn nhất (Euclid)', en: 'GCD — Euclidean Algorithm',
        tags: ['gcd', 'ước chung lớn nhất', 'ucln', 'euclid', 'lcm', 'bội chung nhỏ nhất', 'bcnn'],
        summary: 'gcd(a, b) = gcd(b, a mod b): mỗi bước số giảm rất nhanh, chỉ cần O(log min(a, b)) bước.',
        idea: 'Mọi ước chung của a và b cũng chia hết a − b, nên cũng chia hết a mod b. Lặp thay (a, b) bằng (b, a mod b) tới khi b = 0. Về hình học: gcd là cạnh của hình vuông <b>lớn nhất</b> lát kín được hình chữ nhật a × b — đúng như mô phỏng cắt hình vuông. Bội chung nhỏ nhất: <code>lcm(a, b) = a / gcd(a, b) × b</code>. <b>Euclid mở rộng</b> còn tìm được x, y với ax + by = gcd(a, b) — dùng để tính nghịch đảo modulo.',
        cx: { rows: [['Thời gian', 'O(log min(a, b))'], ['Bộ nhớ', 'O(1)']] },
        when: ['Rút gọn phân số; chu kỳ trùng nhau (hai đèn nháy cùng lúc → BCNN).', 'Phương trình Diophante ax + by = c, nghịch đảo modulo.', 'gcd của cả mảng, "gcd" của hai chuỗi.'],
        pitfalls: ['Tính lcm bằng <code>a * b // gcd</code> có thể tràn (C++/Java) → chia trước rồi nhân.', 'gcd(a, 0) = |a|; gcd(0, 0) không xác định.'],
        code: `def gcd(a, b):
    while b:
        a, b = b, a % b
    return a

def lcm(a, b):
    return a // gcd(a, b) * b             # chia trước để tránh tràn

def ext_gcd(a, b):                        # trả về (g, x, y) với a*x + b*y = g
    if b == 0:
        return a, 1, 0
    g, x, y = ext_gcd(b, a % b)
    return g, y, x - (a // b) * y

import math
print(math.gcd(84, 36), math.lcm(4, 6))   # 12 12`,
        practice: [['Greatest Common Divisor of Strings', 'greatest-common-divisor-of-strings'], ['Find Greatest Common Divisor of Array', 'find-greatest-common-divisor-of-array'], ['X of a Kind in a Deck of Cards', 'x-of-a-kind-in-a-deck-of-cards'], ['Water and Jug Problem', 'water-and-jug-problem']],
        related: ['modular', 'sieve', 'fast-power'],
        viz: 'gcd'
    });

    T({
        id: 'sieve', cat: 'math', level: 1,
        title: 'Sàng Eratosthenes & số nguyên tố', en: 'Sieve of Eratosthenes',
        tags: ['số nguyên tố', 'prime', 'sàng eratosthenes', 'sieve', 'phân tích thừa số', 'ước'],
        summary: 'Gạch bỏ bội của từng số nguyên tố để tìm mọi số nguyên tố ≤ n trong O(n log log n).',
        idea: 'Số nhỏ nhất chưa bị gạch luôn là số nguyên tố; gạch mọi bội của nó bắt đầu từ <b>p²</b> (các bội nhỏ hơn đã bị số nhỏ hơn gạch rồi). Dừng khi p² &gt; n. Biến thể <b>sàng ước nguyên tố nhỏ nhất</b> (spf) cho phép phân tích thừa số mọi số ≤ n trong O(log n). Kiểm tra lẻ tẻ một số: thử chia tới √n.',
        cx: { rows: [['Sàng', 'O(n log log n), O(n) bộ nhớ'], ['Kiểm tra nguyên tố bằng thử chia', 'O(√n)'], ['Phân tích thừa số với spf', 'O(log n) mỗi số']] },
        when: ['Cần nhiều số nguyên tố / kiểm tra nguyên tố nhiều lần với số ≤ 10⁷.', 'Phân tích thừa số hàng loạt, đếm ước, hàm phi Euler.'],
        pitfalls: ['Quên 0 và 1 không phải số nguyên tố.', 'Bắt đầu gạch từ 2p thay vì p² (vẫn đúng nhưng chậm hơn).', 'Sàng tới 10⁹ là quá lớn → dùng sàng đoạn (segmented sieve) hoặc Miller–Rabin.'],
        code: `def sieve(n):
    is_p = [True] * (n + 1)
    is_p[0] = is_p[1] = False
    p = 2
    while p * p <= n:
        if is_p[p]:
            for m in range(p * p, n + 1, p):
                is_p[m] = False           # gạch bội của p
        p += 1
    return [i for i in range(n + 1) if is_p[i]]

def smallest_prime_factor(n):
    spf = list(range(n + 1))
    for p in range(2, int(n ** 0.5) + 1):
        if spf[p] == p:
            for m in range(p * p, n + 1, p):
                if spf[m] == m:
                    spf[m] = p
    return spf

def factorize(x, spf):                    # 360 → {2: 3, 3: 2, 5: 1}
    f = {}
    while x > 1:
        p = spf[x]
        f[p] = f.get(p, 0) + 1
        x //= p
    return f

def is_prime(n):                          # thử chia tới √n
    if n < 2:
        return False
    i = 2
    while i * i <= n:
        if n % i == 0:
            return False
        i += 1
    return True`,
        practice: [['Count Primes', 'count-primes'], ['Closest Prime Numbers in Range', 'closest-prime-numbers-in-range'], ['Four Divisors', 'four-divisors'], ['Ugly Number', 'ugly-number']],
        related: ['gcd', 'modular'],
        viz: 'sieve'
    });

    T({
        id: 'fast-power', cat: 'math', level: 2, interview: true,
        title: 'Lũy thừa nhanh', en: 'Binary Exponentiation',
        tags: ['lũy thừa nhanh', 'fast power', 'binary exponentiation', 'pow', 'lũy thừa ma trận', 'modulo'],
        summary: 'Tính aᵉ (mod m) chỉ với O(log e) phép nhân bằng cách bình phương liên tục theo các bit của số mũ.',
        idea: 'Viết e ở dạng nhị phân, ví dụ 13 = 8 + 4 + 1 → a¹³ = a⁸ · a⁴ · a¹. Lần lượt bình phương a để có a, a², a⁴, a⁸…, và nhân vào kết quả những lũy thừa ứng với bit 1. Cùng ý tưởng áp dụng cho <b>lũy thừa ma trận</b> — tính số Fibonacci thứ 10¹⁸ trong O(log n) — và cho mọi phép toán có tính kết hợp.',
        cx: { rows: [['Thời gian', 'O(log e)'], ['Bộ nhớ', 'O(1)']] },
        when: ['aᵉ mod m với e rất lớn (mã hóa RSA, nghịch đảo modulo theo Fermat).', 'Truy hồi tuyến tính với n rất lớn → lũy thừa ma trận.'],
        pitfalls: ['Quên lấy mod sau mỗi phép nhân → tràn số (C++/Java) hoặc rất chậm (Python).', 'Số mũ âm: tính 1 / a^(−e).', 'Python có sẵn <code>pow(a, e, m)</code>.'],
        code: `def power(a, e, m):
    res = 1
    a %= m
    while e > 0:
        if e & 1:                         # bit thấp nhất = 1
            res = res * a % m
        a = a * a % m                     # a, a², a⁴, a⁸, ...
        e >>= 1
    return res

def mat_mult(A, B, m):
    return [[sum(A[i][k] * B[k][j] for k in range(2)) % m for j in range(2)] for i in range(2)]

def fib_mod(n, m):                        # F(n) mod m trong O(log n)
    res, base = [[1, 0], [0, 1]], [[1, 1], [1, 0]]
    while n:
        if n & 1:
            res = mat_mult(res, base, m)
        base = mat_mult(base, base, m)
        n >>= 1
    return res[0][1]

print(power(3, 13, 1000), pow(3, 13, 1000))   # 323 323`,
        practice: [['Pow(x, n)', 'powx-n'], ['Super Pow', 'super-pow'], ['Count Good Numbers', 'count-good-numbers']],
        related: ['modular', 'divide-conquer', 'bit-manipulation'],
        viz: 'fastPow'
    });

    T({
        id: 'modular', cat: 'math', level: 2,
        title: 'Số học modulo & nghịch đảo', en: 'Modular Arithmetic',
        tags: ['modulo', 'mod', '10^9+7', 'nghịch đảo modulo', 'modular inverse', 'fermat'],
        summary: 'Tính toán "trên vòng tròn" 0…m−1: cộng, trừ, nhân lấy mod thoải mái; phép chia thì phải nhân với nghịch đảo.',
        idea: '(a + b), (a − b), (a · b) mod m đều có thể lấy mod từng phần trước. Phép chia thì không: phải nhân với <b>nghịch đảo modulo</b> a⁻¹ (số x với a·x ≡ 1 mod m), chỉ tồn tại khi gcd(a, m) = 1. Nếu m là số nguyên tố, theo định lý Fermat nhỏ: <code>a⁻¹ ≡ a^(m−2) (mod m)</code>. Đó là lý do đề bài hay dùng m = 10⁹ + 7 (số nguyên tố).',
        table: {
            title: 'Quy tắc',
            head: ['Phép toán', 'Cách làm đúng'],
            rows: [['(a + b) mod m', '((a mod m) + (b mod m)) mod m'], ['(a − b) mod m', '((a − b) mod m + m) mod m'], ['(a · b) mod m', '((a mod m) · (b mod m)) mod m'], ['(a / b) mod m', 'a · b^(m−2) mod m  (m nguyên tố)']]
        },
        when: ['Đề yêu cầu "trả kết quả mod 10⁹ + 7" — số cách, tổ hợp rất lớn.', 'Băm chuỗi, mã hóa, định lý số dư Trung Hoa.'],
        pitfalls: ['Chia trực tiếp rồi mới lấy mod → sai.', 'Nghịch đảo không tồn tại khi gcd(a, m) ≠ 1.', 'Số âm sau phép trừ trong C++/Java.'],
        code: `MOD = 10**9 + 7

def inv(a, m=MOD):                        # m nguyên tố: định lý Fermat nhỏ
    return pow(a, m - 2, m)

def nCr_mod(n, r, m=MOD):                 # tổ hợp mod số nguyên tố
    if r < 0 or r > n:
        return 0
    fact = [1] * (n + 1)
    for i in range(1, n + 1):
        fact[i] = fact[i - 1] * i % m
    return fact[n] * inv(fact[r], m) % m * inv(fact[n - r], m) % m

print(nCr_mod(10, 3))                     # 120
print(pow(3, -1, 7))                      # Python 3.8+: nghịch đảo của 3 mod 7 → 5`,
        practice: [['Count All Valid Pickup and Delivery Options', 'count-all-valid-pickup-and-delivery-options'], ['Count Good Numbers', 'count-good-numbers'], ['Number of Ways to Reorder Array to Get Same BST', 'number-of-ways-to-reorder-array-to-get-same-bst']],
        related: ['fast-power', 'combinatorics', 'gcd', 'numeric-pitfalls']
    });

    T({
        id: 'combinatorics', cat: 'math', level: 2,
        title: 'Tổ hợp & tam giác Pascal', en: 'Combinatorics',
        tags: ['tổ hợp', 'combinatorics', 'pascal', 'nCr', 'catalan', 'chia kẹo', 'hoán vị', 'chỉnh hợp'],
        summary: 'Đếm số cách chọn / sắp xếp mà không cần liệt kê: C(n, k), chia kẹo, số Catalan — tính bằng tam giác Pascal hoặc giai thừa + nghịch đảo.',
        idea: 'C(n, k) = số cách chọn k phần tử từ n. Truy hồi Pascal: <code>C(n, k) = C(n−1, k−1) + C(n−1, k)</code> (chọn hoặc không chọn phần tử cuối) — không cần phép chia nên tiện khi lấy mod bất kỳ. Với n lớn: C(n, k) = n! / (k!(n−k)!) dùng giai thừa và nghịch đảo modulo.',
        table: {
            title: 'Công thức hay gặp',
            head: ['Bài toán', 'Công thức'],
            rows: [
                ['Chọn k từ n (không thứ tự)', 'C(n, k)'],
                ['Xếp k từ n (có thứ tự)', 'n! / (n − k)!'],
                ['Chia n viên kẹo cho k bạn (được nhận 0)', 'C(n + k − 1, k − 1)'],
                ['Số đường đi trên lưới m × n (chỉ phải / xuống)', 'C(m + n − 2, m − 1)'],
                ['Số BST có n nút, số dãy ngoặc hợp lệ', 'Catalan: C(2n, n) / (n + 1)']
            ]
        },
        when: ['Đếm cấu hình không cần liệt kê: đường đi trên lưới, cách chọn đội, dãy ngoặc hợp lệ.', 'Xác suất rời rạc.'],
        pitfalls: ['Tràn số khi tính giai thừa trực tiếp (C++/Java) → dùng Pascal hoặc mod.', 'Nhầm có thứ tự / không thứ tự, có lặp / không lặp.'],
        code: `from math import comb

def pascal(N):
    C = [[0] * (N + 1) for _ in range(N + 1)]
    for n in range(N + 1):
        C[n][0] = 1
        for k in range(1, n + 1):
            C[n][k] = C[n - 1][k - 1] + C[n - 1][k]
    return C

def unique_paths(m, n):                   # lưới m × n, chỉ đi phải / xuống
    return comb(m + n - 2, m - 1)

def catalan(n):
    return comb(2 * n, n) // (n + 1)

print(pascal(5)[5][2], unique_paths(3, 7), catalan(3))   # 10 28 5`,
        practice: [["Pascal's Triangle", 'pascals-triangle'], ['Unique Paths', 'unique-paths'], ['Unique Binary Search Trees', 'unique-binary-search-trees']],
        related: ['modular', 'subsets-permutations', 'grid-dp'],
        viz: 'pascal'
    });
})();
