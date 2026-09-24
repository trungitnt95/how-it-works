/* Topic content — graphs, dynamic programming */
(function () {
    'use strict';
    const Algo = window.Algo;
    const T = (o) => Algo.topics.push(o);

    /* ============================== ĐỒ THỊ ============================== */

    T({
        id: 'graph-basics', cat: 'graph', level: 1,
        title: 'Đồ thị & cách biểu diễn', en: 'Graph Representation',
        tags: ['đồ thị', 'graph', 'đỉnh', 'cạnh', 'danh sách kề', 'ma trận kề', 'adjacency list'],
        summary: 'Đỉnh + cạnh mô hình hóa mọi quan hệ: mạng xã hội, bản đồ, phụ thuộc. Lưu bằng danh sách kề hoặc ma trận kề.',
        idea: 'Đồ thị G = (V, E). Cạnh có thể <b>có hướng</b> (theo dõi trên mạng xã hội) hoặc <b>vô hướng</b> (bạn bè), có <b>trọng số</b> (khoảng cách, chi phí) hoặc không. <b>Danh sách kề</b> lưu cho mỗi đỉnh các đỉnh kề: O(V + E) bộ nhớ — lựa chọn mặc định. <b>Ma trận kề</b> M[u][v]: kiểm tra cạnh O(1) nhưng tốn O(V²) — chỉ hợp khi V nhỏ hoặc đồ thị dày. <b>Danh sách cạnh</b> hợp với Kruskal, Bellman–Ford.',
        table: {
            title: 'So sánh cách lưu',
            head: ['Cách lưu', 'Bộ nhớ', 'Kiểm tra cạnh u–v', 'Duyệt các đỉnh kề u'],
            rows: [['Danh sách kề', 'O(V + E)', 'O(bậc u)', 'O(bậc u)'], ['Ma trận kề', 'O(V²)', 'O(1)', 'O(V)'], ['Danh sách cạnh', 'O(E)', 'O(E)', 'O(E)']]
        },
        when: ['Bất cứ khi nào dữ liệu là "các thứ" và "quan hệ giữa chúng".', 'Lưới 2 chiều cũng là đồ thị ngầm: mỗi ô là một đỉnh, kề 4 hướng.'],
        pitfalls: ['Đồ thị vô hướng: quên thêm cạnh chiều ngược lại.', 'Đỉnh đánh số từ 1 nhưng mảng từ 0.', 'Đồ thị có thể không liên thông → phải duyệt từ mọi đỉnh chưa thăm.'],
        code: `from collections import defaultdict

edges = [(0, 1), (0, 2), (1, 3), (2, 3)]
n = 4

adj = defaultdict(list)                   # danh sách kề (vô hướng)
for u, v in edges:
    adj[u].append(v)
    adj[v].append(u)

M = [[0] * n for _ in range(n)]           # ma trận kề
for u, v in edges:
    M[u][v] = M[v][u] = 1

wadj = defaultdict(list)                  # có trọng số: (đỉnh kề, trọng số)
for u, v, w in [(0, 1, 4), (1, 2, 3)]:
    wadj[u].append((v, w))
    wadj[v].append((u, w))`,
        practice: [['Find if Path Exists in Graph', 'find-if-path-exists-in-graph'], ['Find the Town Judge', 'find-the-town-judge'], ['Find Center of Star Graph', 'find-center-of-star-graph'], ['Clone Graph', 'clone-graph']],
        related: ['bfs', 'dfs', 'grid-graph', 'dsu'],
        viz: 'graphRepr'
    });

    T({
        id: 'bfs', cat: 'graph', level: 2, interview: true,
        title: 'Tìm kiếm theo chiều rộng (BFS)', en: 'Breadth-First Search',
        tags: ['bfs', 'tìm kiếm theo chiều rộng', 'breadth first', 'hàng đợi', 'đường đi ngắn nhất', 'loang', 'đa nguồn'],
        summary: 'Lan ra từ đỉnh nguồn theo từng lớp khoảng cách bằng hàng đợi — cho đường đi ít cạnh nhất trên đồ thị không trọng số.',
        idea: 'BFS thăm mọi đỉnh cách nguồn 1 cạnh, rồi 2 cạnh, rồi 3… nhờ hàng đợi FIFO. Vì vậy lần đầu chạm tới một đỉnh chính là qua đường ngắn nhất (tính theo số cạnh). Đánh dấu "đã thấy" ngay khi <b>đưa vào</b> hàng đợi để mỗi đỉnh chỉ vào một lần. Biến thể: <b>BFS đa nguồn</b> (nhiều điểm xuất phát cùng lúc), <b>BFS 0-1</b> (trọng số 0/1 với deque).',
        analogy: 'Ném hòn đá xuống hồ: sóng lan thành các vòng tròn đồng tâm, chạm vật gần trước, vật xa sau.',
        cx: { rows: [['Thời gian', 'O(V + E)'], ['Bộ nhớ', 'O(V)']] },
        when: ['Số bước ít nhất: mê cung, biến đổi từ (word ladder), nước đi quân mã, mở khóa.', 'Duyệt theo tầng (level-order).', 'Đa nguồn: khoảng cách tới ô gần nhất, cam thối lan dần.'],
        pitfalls: ['Đánh dấu khi lấy ra (thay vì khi đưa vào) → một đỉnh vào hàng đợi nhiều lần.', 'Dùng BFS cho đồ thị trọng số khác nhau → sai, hãy dùng Dijkstra.', 'Dùng <code>list.pop(0)</code> trong Python → O(n) mỗi lần.'],
        code: `from collections import deque

def bfs(adj, src):
    dist = {src: 0}
    q = deque([src])
    while q:
        u = q.popleft()
        for v in adj[u]:
            if v not in dist:             # đánh dấu khi đưa vào hàng đợi
                dist[v] = dist[u] + 1
                q.append(v)
    return dist

def shortest_path(adj, s, t):             # truy vết đường đi
    parent = {s: None}
    q = deque([s])
    while q:
        u = q.popleft()
        if u == t:
            break
        for v in adj[u]:
            if v not in parent:
                parent[v] = u
                q.append(v)
    if t not in parent:
        return None
    path = []
    while t is not None:
        path.append(t)
        t = parent[t]
    return path[::-1]`,
        practice: [['Rotting Oranges', 'rotting-oranges'], ['Word Ladder', 'word-ladder'], ['Shortest Path in Binary Matrix', 'shortest-path-in-binary-matrix'], ['Open the Lock', 'open-the-lock'], ['01 Matrix', '01-matrix']],
        related: ['dfs', 'dijkstra', 'grid-graph', 'queue', 'bipartite'],
        viz: 'bfs'
    });

    T({
        id: 'dfs', cat: 'graph', level: 2, interview: true,
        title: 'Tìm kiếm theo chiều sâu (DFS)', en: 'Depth-First Search',
        tags: ['dfs', 'tìm kiếm theo chiều sâu', 'depth first', 'chu trình', 'thành phần liên thông', 'đệ quy'],
        summary: 'Đi sâu nhất có thể theo một nhánh rồi mới quay lui — nền tảng cho tìm chu trình, sắp xếp tô-pô, thành phần liên thông.',
        idea: 'DFS dùng đệ quy (hoặc ngăn xếp tường minh): tại mỗi đỉnh, lần lượt đi vào từng đỉnh kề chưa thăm, đi tới tận cùng rồi mới quay lại. Thời điểm vào / ra mỗi đỉnh mang nhiều thông tin: gặp lại một đỉnh <b>đang nằm trên ngăn xếp</b> → có chu trình (đồ thị có hướng); đảo ngược thứ tự ra khỏi đỉnh → <b>thứ tự tô-pô</b>.',
        analogy: 'Đi mê cung bằng cách luôn bám tay vào tường: đi tới ngõ cụt rồi lùi về ngã rẽ gần nhất.',
        cx: { rows: [['Thời gian', 'O(V + E)'], ['Bộ nhớ', 'O(V) — độ sâu đệ quy']] },
        when: ['Đếm thành phần liên thông, loang (flood fill).', 'Phát hiện chu trình, sắp xếp tô-pô, tìm cầu/khớp, thành phần liên thông mạnh.', 'Liệt kê đường đi, quay lui trên đồ thị.'],
        pitfalls: ['Đệ quy sâu trên đồ thị lớn → tràn ngăn xếp (Python ~1000 tầng); dùng stack tường minh.', 'Đồ thị có hướng: cần 3 trạng thái (chưa thăm / đang thăm / xong) để tìm chu trình.', 'DFS <b>không</b> cho đường đi ngắn nhất.'],
        code: `def count_components(n, adj):
    seen = [False] * n
    def dfs(u):
        seen[u] = True
        for v in adj[u]:
            if not seen[v]:
                dfs(v)
    count = 0
    for u in range(n):
        if not seen[u]:
            count += 1
            dfs(u)
    return count

def has_cycle_directed(n, adj):           # 0 = chưa thăm, 1 = đang thăm, 2 = xong
    state = [0] * n
    def dfs(u):
        state[u] = 1
        for v in adj[u]:
            if state[v] == 1:
                return True               # gặp đỉnh đang trên ngăn xếp → chu trình
            if state[v] == 0 and dfs(v):
                return True
        state[u] = 2
        return False
    return any(state[u] == 0 and dfs(u) for u in range(n))

def dfs_iterative(adj, src):              # không đệ quy (thứ tự có thể khác bản đệ quy)
    seen, st, order = {src}, [src], []
    while st:
        u = st.pop()
        order.append(u)
        for v in reversed(adj[u]):
            if v not in seen:
                seen.add(v)
                st.append(v)
    return order`,
        practice: [['Number of Provinces', 'number-of-provinces'], ['Clone Graph', 'clone-graph'], ['Course Schedule', 'course-schedule'], ['All Paths From Source to Target', 'all-paths-from-source-to-target'], ['Keys and Rooms', 'keys-and-rooms'], ['Pacific Atlantic Water Flow', 'pacific-atlantic-water-flow']],
        related: ['bfs', 'backtracking', 'topo-sort', 'scc', 'bridges'],
        viz: 'dfs'
    });

    T({
        id: 'grid-graph', cat: 'graph', level: 2, interview: true,
        title: 'BFS / DFS trên lưới', en: 'Grid Graphs & Flood Fill',
        tags: ['lưới', 'grid', 'số đảo', 'number of islands', 'flood fill', 'loang', 'mê cung'],
        summary: 'Coi mỗi ô là một đỉnh nối với 4 (hoặc 8) ô kề: đếm đảo, loang màu, tìm đường trong mê cung.',
        idea: 'Không cần dựng đồ thị tường minh — đỉnh là (r, c), các cạnh sinh ra bằng mảng hướng. <b>Loang</b> từ một ô bằng BFS/DFS để đánh dấu cả vùng liên thông. BFS trên lưới cho số bước ít nhất; <b>BFS đa nguồn</b> (đưa mọi ô nguồn vào hàng đợi ngay từ đầu) tính khoảng cách tới nguồn gần nhất cho mọi ô chỉ trong một lượt.',
        cx: { rows: [['Thời gian', 'O(R × C)'], ['Bộ nhớ', 'O(R × C)']] },
        when: ['Đếm đảo / vùng, tô màu (bucket fill), tìm vùng bị bao quanh.', 'Mê cung, robot, lửa / nước lan theo thời gian.'],
        pitfalls: ['Quên kiểm tra biên.', 'Đánh dấu thăm muộn → một ô bị thêm vào hàng đợi nhiều lần.', 'Sửa trực tiếp lưới đầu vào khi đề không cho phép.'],
        code: `from collections import deque

DIRS = ((1, 0), (-1, 0), (0, 1), (0, -1))

def num_islands(grid):
    R, C = len(grid), len(grid[0])
    seen = set()
    def bfs(r, c):
        q = deque([(r, c)])
        seen.add((r, c))
        while q:
            r, c = q.popleft()
            for dr, dc in DIRS:
                nr, nc = r + dr, c + dc
                if 0 <= nr < R and 0 <= nc < C and grid[nr][nc] == "1" and (nr, nc) not in seen:
                    seen.add((nr, nc))
                    q.append((nr, nc))
    count = 0
    for r in range(R):
        for c in range(C):
            if grid[r][c] == "1" and (r, c) not in seen:
                count += 1
                bfs(r, c)
    return count

def oranges_rotting(grid):                # BFS đa nguồn
    R, C = len(grid), len(grid[0])
    q = deque((r, c) for r in range(R) for c in range(C) if grid[r][c] == 2)
    fresh = sum(row.count(1) for row in grid)
    minutes = 0
    while q and fresh:
        for _ in range(len(q)):
            r, c = q.popleft()
            for dr, dc in DIRS:
                nr, nc = r + dr, c + dc
                if 0 <= nr < R and 0 <= nc < C and grid[nr][nc] == 1:
                    grid[nr][nc] = 2
                    fresh -= 1
                    q.append((nr, nc))
        minutes += 1
    return -1 if fresh else minutes`,
        practice: [['Flood Fill', 'flood-fill'], ['Number of Islands', 'number-of-islands'], ['Max Area of Island', 'max-area-of-island'], ['Rotting Oranges', 'rotting-oranges'], ['Surrounded Regions', 'surrounded-regions'], ['Shortest Path in Binary Matrix', 'shortest-path-in-binary-matrix']],
        related: ['bfs', 'dfs', 'matrix', 'a-star'],
        viz: 'gridIslands'
    });

    T({
        id: 'topo-sort', cat: 'graph', level: 2, interview: true,
        title: 'Sắp xếp tô-pô', en: 'Topological Sort',
        tags: ['tô pô', 'topological sort', 'dag', 'kahn', 'phụ thuộc', 'môn tiên quyết', 'bậc vào'],
        summary: 'Xếp các đỉnh của đồ thị có hướng không chu trình (DAG) sao cho mọi cạnh u → v đều có u đứng trước v.',
        idea: '<b>Kahn (BFS)</b>: liên tục lấy ra các đỉnh có bậc vào bằng 0 (không còn phụ thuộc ai), "gỡ" các cạnh đi ra của nó; đỉnh nào về bậc vào 0 thì đưa vào hàng đợi. Nếu cuối cùng không lấy ra đủ V đỉnh thì đồ thị <b>có chu trình</b>. <b>Cách DFS</b>: đảo ngược thứ tự hoàn thành (post-order) cũng là một thứ tự tô-pô.',
        analogy: 'Xếp thứ tự học các môn có môn tiên quyết, hay thứ tự mặc đồ: tất trước giày, áo sơ mi trước áo khoác.',
        cx: { rows: [['Thời gian', 'O(V + E)'], ['Bộ nhớ', 'O(V)']] },
        when: ['Lập lịch công việc có phụ thuộc, thứ tự build (Make, npm), môn tiên quyết.', 'QHĐ trên DAG (đường đi dài nhất): xử lý đỉnh theo thứ tự tô-pô.', 'Kiểm tra đồ thị có hướng có chu trình không.'],
        pitfalls: ['Đồ thị có chu trình thì không tồn tại thứ tự tô-pô.', 'Thứ tự thường không duy nhất; cần thứ tự nhỏ nhất theo từ điển → dùng heap thay hàng đợi.'],
        code: `from collections import deque

def topo_sort(n, edges):                  # (u, v): u phải đứng trước v
    adj = [[] for _ in range(n)]
    indeg = [0] * n
    for u, v in edges:
        adj[u].append(v)
        indeg[v] += 1
    q = deque(u for u in range(n) if indeg[u] == 0)
    order = []
    while q:
        u = q.popleft()
        order.append(u)
        for v in adj[u]:
            indeg[v] -= 1                 # gỡ cạnh u → v
            if indeg[v] == 0:
                q.append(v)
    return order if len(order) == n else None   # None → có chu trình`,
        practice: [['Course Schedule', 'course-schedule'], ['Course Schedule II', 'course-schedule-ii'], ['Find All Possible Recipes from Given Supplies', 'find-all-possible-recipes-from-given-supplies'], ['Longest Increasing Path in a Matrix', 'longest-increasing-path-in-a-matrix'], ['Minimum Height Trees', 'minimum-height-trees']],
        related: ['dfs', 'bfs', 'dp-intro'],
        viz: 'topoSort'
    });

    T({
        id: 'dijkstra', cat: 'graph', level: 2, interview: true,
        title: 'Dijkstra — đường đi ngắn nhất', en: "Dijkstra's Algorithm",
        tags: ['dijkstra', 'đường đi ngắn nhất', 'shortest path', 'hàng đợi ưu tiên', 'nới lỏng', 'trọng số'],
        summary: 'Đường đi ngắn nhất từ một nguồn khi mọi trọng số không âm: luôn chốt đỉnh gần nhất chưa chốt bằng hàng đợi ưu tiên.',
        idea: 'Duy trì dist[] — ước lượng khoảng cách tốt nhất hiện có. Mỗi bước lấy từ heap đỉnh u có dist nhỏ nhất chưa chốt; vì trọng số không âm, không đường nào khác tới u ngắn hơn được nên <b>chốt</b> u. Sau đó <b>nới lỏng</b> mọi cạnh u → v: nếu <code>dist[u] + w &lt; dist[v]</code> thì cập nhật và đẩy (dist[v], v) vào heap. Bản ghi cũ trong heap được bỏ qua khi lấy ra.',
        analogy: 'Nước tràn từ một điểm trên hệ thống ống: chạm tới các điểm gần trước, và thời điểm nước tới mỗi điểm chính là khoảng cách ngắn nhất.',
        cx: { rows: [['Với heap nhị phân', 'O((V + E) log V)'], ['Với mảng (đồ thị dày)', 'O(V²)'], ['Bộ nhớ', 'O(V + E)']] },
        when: ['Bản đồ, định tuyến mạng (OSPF), chi phí nhỏ nhất với trọng số ≥ 0.', 'Trạng thái mở rộng: (đỉnh, số vé giảm giá đã dùng…); đường đi mà "chi phí" là cạnh lớn nhất.'],
        pitfalls: ['Có cạnh âm → kết quả sai; dùng Bellman–Ford.', 'Quên bỏ qua bản ghi cũ (<code>if d &gt; dist[u]: continue</code>) → chậm.', 'Chỉ cần một đích → có thể dừng ngay khi lấy đích ra khỏi heap.'],
        code: `import heapq

def dijkstra(adj, src):                   # adj[u] = [(v, w), ...], w >= 0
    dist = {src: 0}
    pq = [(0, src)]
    while pq:
        d, u = heapq.heappop(pq)
        if d > dist.get(u, float("inf")):
            continue                      # bản ghi cũ
        for v, w in adj[u]:
            nd = d + w
            if nd < dist.get(v, float("inf")):
                dist[v] = nd              # nới lỏng cạnh u → v
                heapq.heappush(pq, (nd, v))
    return dist`,
        practice: [['Network Delay Time', 'network-delay-time'], ['Path with Maximum Probability', 'path-with-maximum-probability'], ['Path With Minimum Effort', 'path-with-minimum-effort'], ['Swim in Rising Water', 'swim-in-rising-water'], ['Cheapest Flights Within K Stops', 'cheapest-flights-within-k-stops']],
        related: ['bfs', 'heap', 'bellman-ford', 'a-star', 'floyd-warshall'],
        viz: 'dijkstra'
    });

    T({
        id: 'mst-kruskal', cat: 'graph', level: 2,
        title: 'Cây khung nhỏ nhất — Kruskal', en: "Kruskal's MST",
        tags: ['cây khung nhỏ nhất', 'mst', 'kruskal', 'minimum spanning tree', 'union find'],
        summary: 'Nối mọi đỉnh với tổng trọng số nhỏ nhất: xét cạnh từ nhẹ tới nặng, lấy cạnh nếu nó không tạo chu trình (kiểm tra bằng DSU).',
        idea: '<b>Cây khung</b> là V − 1 cạnh nối mọi đỉnh mà không tạo chu trình. Kruskal tham lam: sắp xếp cạnh theo trọng số tăng dần, lần lượt thêm cạnh nối hai thành phần khác nhau. Tính đúng dựa trên <b>tính chất lát cắt</b>: cạnh nhẹ nhất đi qua một lát cắt bất kỳ luôn thuộc một cây khung nhỏ nhất nào đó.',
        analogy: 'Kéo cáp internet cho các làng với chi phí nhỏ nhất: luôn kéo đoạn rẻ nhất còn lại, miễn là nó nối hai cụm chưa thông nhau.',
        cx: { rows: [['Thời gian', 'O(E log E)'], ['Bộ nhớ', 'O(V)']] },
        when: ['Thiết kế mạng lưới (điện, cáp, đường) chi phí nhỏ nhất.', 'Phân cụm: bỏ k − 1 cạnh nặng nhất của MST để được k cụm.', 'Đồ thị thưa, dữ liệu đã ở dạng danh sách cạnh.'],
        pitfalls: ['Đồ thị không liên thông → chỉ ra rừng khung; kiểm tra số cạnh đã chọn = V − 1.', 'Nhầm MST với cây đường đi ngắn nhất — hai bài khác nhau.'],
        code: `def kruskal(n, edges):                    # edges: (w, u, v)
    parent = list(range(n))
    def find(x):
        while parent[x] != x:
            parent[x] = parent[parent[x]]
            x = parent[x]
        return x
    total = used = 0
    for w, u, v in sorted(edges):
        ru, rv = find(u), find(v)
        if ru != rv:                      # khác thành phần → không tạo chu trình
            parent[ru] = rv
            total += w
            used += 1
    return total if used == n - 1 else None    # None → không liên thông`,
        practice: [['Min Cost to Connect All Points', 'min-cost-to-connect-all-points'], ['Find Critical and Pseudo-Critical Edges in Minimum Spanning Tree', 'find-critical-and-pseudo-critical-edges-in-minimum-spanning-tree']],
        related: ['mst-prim', 'dsu', 'greedy'],
        viz: 'kruskal'
    });

    T({
        id: 'mst-prim', cat: 'graph', level: 2,
        title: 'Cây khung nhỏ nhất — Prim', en: "Prim's MST",
        tags: ['prim', 'cây khung nhỏ nhất', 'mst', 'heap', 'đồ thị dày'],
        summary: 'Mọc cây từ một đỉnh: mỗi bước thêm cạnh nhẹ nhất nối cây với một đỉnh bên ngoài (dùng heap).',
        idea: 'Giống Dijkstra nhưng khóa trong heap là <b>trọng số của cạnh</b> chứ không phải tổng khoảng cách. Bắt đầu từ một đỉnh, đưa các cạnh kề vào heap; lấy cạnh nhẹ nhất dẫn tới đỉnh chưa thuộc cây, thêm đỉnh đó và đưa các cạnh kề mới vào. Kết quả có cùng tổng trọng số với Kruskal.',
        cx: { rows: [['Với heap', 'O(E log V)'], ['Với mảng (đồ thị dày)', 'O(V²)']] },
        when: ['Đồ thị dày hoặc cho dạng "mọi cặp điểm" → Prim O(V²) không cần liệt kê cạnh.', 'Đã có sẵn danh sách kề.'],
        pitfalls: ['Quên bỏ qua cạnh dẫn tới đỉnh đã trong cây.', 'Đồ thị không liên thông → cây không phủ hết đỉnh.'],
        code: `import heapq

def prim(n, adj, start=0):                # adj[u] = [(v, w), ...]
    in_tree = [False] * n
    pq = [(0, start)]
    total = count = 0
    while pq and count < n:
        w, u = heapq.heappop(pq)
        if in_tree[u]:
            continue
        in_tree[u] = True
        total += w
        count += 1
        for v, wv in adj[u]:
            if not in_tree[v]:
                heapq.heappush(pq, (wv, v))
    return total if count == n else None

def min_cost_connect_points(points):      # đồ thị dày: Prim O(V²)
    n = len(points)
    dist = [float("inf")] * n
    dist[0], used, total = 0, [False] * n, 0
    for _ in range(n):
        u = min((d, i) for i, d in enumerate(dist) if not used[i])[1]
        used[u] = True
        total += dist[u]
        for v in range(n):
            if not used[v]:
                d = abs(points[u][0] - points[v][0]) + abs(points[u][1] - points[v][1])
                dist[v] = min(dist[v], d)
    return total`,
        practice: [['Min Cost to Connect All Points', 'min-cost-to-connect-all-points']],
        related: ['mst-kruskal', 'dijkstra', 'heap'],
        viz: 'prim'
    });

    T({
        id: 'bipartite', cat: 'graph', level: 2,
        title: 'Đồ thị hai phía (tô 2 màu)', en: 'Bipartite Graph Check',
        tags: ['hai phía', 'bipartite', 'tô màu', 'chu trình lẻ', 'ghép cặp'],
        summary: 'Kiểm tra có thể chia đỉnh thành 2 nhóm sao cho mọi cạnh đều nối hai nhóm khác nhau — bằng BFS/DFS tô màu.',
        idea: 'Tô đỉnh xuất phát màu 0; mọi đỉnh kề phải khác màu với nó. Gặp một cạnh mà hai đầu cùng màu thì không thể chia đôi. Định lý: đồ thị là hai phía ⇔ nó <b>không có chu trình độ dài lẻ</b>. Đồ thị hai phía là nền của bài toán ghép cặp: người – việc, sinh viên – đề tài.',
        cx: { rows: [['Thời gian', 'O(V + E)'], ['Bộ nhớ', 'O(V)']] },
        when: ['Chia hai đội sao cho các cặp "không hợp nhau" không cùng đội.', 'Kiểm tra trước khi áp dụng thuật toán ghép cặp (Hopcroft–Karp, Hungarian).'],
        pitfalls: ['Đồ thị không liên thông → phải bắt đầu tô từ mọi đỉnh chưa tô.'],
        code: `from collections import deque

def is_bipartite(adj):                    # adj: danh sách kề, đỉnh 0..n-1
    color = [-1] * len(adj)
    for s in range(len(adj)):
        if color[s] != -1:
            continue
        color[s] = 0
        q = deque([s])
        while q:
            u = q.popleft()
            for v in adj[u]:
                if color[v] == -1:
                    color[v] = 1 - color[u]
                    q.append(v)
                elif color[v] == color[u]:
                    return False          # hai đầu cạnh cùng màu
    return True`,
        practice: [['Is Graph Bipartite?', 'is-graph-bipartite'], ['Possible Bipartition', 'possible-bipartition']],
        related: ['bfs', 'dfs', 'max-flow'],
        viz: 'bipartite'
    });

    T({
        id: 'bellman-ford', cat: 'graph', level: 3,
        title: 'Bellman–Ford', en: 'Bellman–Ford',
        tags: ['bellman ford', 'cạnh âm', 'chu trình âm', 'negative cycle', 'arbitrage', 'k chặng'],
        summary: 'Đường đi ngắn nhất từ một nguồn, chấp nhận cạnh âm và phát hiện được chu trình âm — O(V·E).',
        idea: 'Một đường đi ngắn nhất có tối đa V − 1 cạnh. Lặp V − 1 vòng, mỗi vòng nới lỏng <b>tất cả</b> các cạnh: sau vòng thứ k, mọi đường ngắn nhất dùng ≤ k cạnh đã đúng. Nếu vòng thứ V vẫn còn cạnh nới lỏng được thì tồn tại <b>chu trình âm</b> (đi vòng mãi thì chi phí giảm vô hạn). Giới hạn k vòng giải bài "ngắn nhất với tối đa k chặng".',
        cx: { rows: [['Thời gian', 'O(V · E)'], ['Bộ nhớ', 'O(V)']] },
        when: ['Có cạnh âm (tỷ giá, lãi/lỗ); cần phát hiện chu trình âm (cơ hội arbitrage).', 'Giới hạn số cạnh trên đường đi.', 'Hệ ràng buộc hiệu (difference constraints).'],
        pitfalls: ['Khi giới hạn k chặng phải dùng bản sao dist của vòng trước (nếu không, một vòng có thể đi nhiều cạnh).', 'Cộng với vô cực: kiểm tra dist[u] ≠ ∞ trước khi nới lỏng.'],
        code: `def bellman_ford(n, edges, src):          # edges: (u, v, w)
    INF = float("inf")
    dist = [INF] * n
    dist[src] = 0
    for _ in range(n - 1):
        changed = False
        for u, v, w in edges:
            if dist[u] != INF and dist[u] + w < dist[v]:
                dist[v] = dist[u] + w
                changed = True
        if not changed:
            break                         # đã ổn định, dừng sớm
    for u, v, w in edges:                 # vòng thứ n
        if dist[u] != INF and dist[u] + w < dist[v]:
            return None                   # có chu trình âm
    return dist

def cheapest_within_k(n, flights, src, dst, k):   # tối đa k điểm dừng
    INF = float("inf")
    dist = [INF] * n
    dist[src] = 0
    for _ in range(k + 1):
        prev = dist[:]                    # bản sao của vòng trước
        for u, v, w in flights:
            if prev[u] != INF and prev[u] + w < dist[v]:
                dist[v] = prev[u] + w
    return -1 if dist[dst] == INF else dist[dst]`,
        practice: [['Cheapest Flights Within K Stops', 'cheapest-flights-within-k-stops'], ['Network Delay Time', 'network-delay-time']],
        related: ['dijkstra', 'floyd-warshall'],
        viz: 'bellmanFord'
    });

    T({
        id: 'floyd-warshall', cat: 'graph', level: 3,
        title: 'Floyd–Warshall', en: 'Floyd–Warshall',
        tags: ['floyd', 'warshall', 'mọi cặp đỉnh', 'all pairs shortest path', 'bao đóng bắc cầu'],
        summary: 'Khoảng cách ngắn nhất giữa MỌI cặp đỉnh bằng QHĐ ba vòng lặp — O(V³), lõi chỉ 4 dòng.',
        idea: 'Sau bước k, dist[i][j] = đường ngắn nhất từ i tới j chỉ đi qua các đỉnh trung gian thuộc {0 … k}. Chuyển trạng thái: hoặc không đi qua k, hoặc đi i → k → j: <code>dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j])</code>. Vòng k bắt buộc nằm <b>ngoài cùng</b>. Cuối cùng nếu dist[i][i] &lt; 0 thì có chu trình âm.',
        cx: { rows: [['Thời gian', 'O(V³)'], ['Bộ nhớ', 'O(V²)']] },
        when: ['V ≤ ~400 và cần khoảng cách mọi cặp.', 'Bao đóng bắc cầu (ai tới được ai); đồ thị nhỏ với nhiều truy vấn.'],
        pitfalls: ['Đặt vòng k bên trong → sai.', 'Khởi tạo dist[i][i] = 0 và ∞ cho cặp không có cạnh; nhiều cạnh song song thì lấy min.'],
        code: `def floyd_warshall(n, edges):
    INF = float("inf")
    d = [[0 if i == j else INF for j in range(n)] for i in range(n)]
    for u, v, w in edges:
        d[u][v] = min(d[u][v], w)
    for k in range(n):                    # k ở vòng ngoài cùng!
        for i in range(n):
            for j in range(n):
                if d[i][k] + d[k][j] < d[i][j]:
                    d[i][j] = d[i][k] + d[k][j]
    return d`,
        practice: [['Find the City With the Smallest Number of Neighbors at a Threshold Distance', 'find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance'], ['Course Schedule IV', 'course-schedule-iv'], ['Evaluate Division', 'evaluate-division']],
        related: ['dijkstra', 'bellman-ford', 'dp-intro'],
        viz: 'floyd'
    });

    T({
        id: 'a-star', cat: 'graph', level: 3,
        title: 'A* (A-sao)', en: 'A* Search',
        tags: ['a*', 'a star', 'heuristic', 'tìm đường', 'pathfinding', 'manhattan', 'game'],
        summary: 'Dijkstra có "la bàn": ưu tiên đỉnh có f = g (đã đi) + h (ước lượng còn lại) nhỏ nhất để lao thẳng về đích.',
        idea: 'Hàm heuristic h(v) ước lượng khoảng cách còn lại tới đích. Nếu h <b>không bao giờ ước lượng quá</b> (admissible — vd. khoảng cách Manhattan trên lưới 4 hướng, Euclid trên bản đồ) thì A* vẫn tìm ra đường ngắn nhất, nhưng xét ít đỉnh hơn Dijkstra nhiều vì ưu tiên hướng về đích. Khi h = 0, A* chính là Dijkstra. Thử đổi thuật toán trong mô phỏng để so số ô phải xét.',
        cx: { rows: [['Xấu nhất', 'Như Dijkstra: O(E log V)'], ['Thực tế', 'Nhanh hơn nhiều với heuristic tốt']] },
        when: ['Tìm đường trong game, robot, bản đồ khi biết tọa độ đích.', 'Giải đố (8-puzzle) với heuristic tổng khoảng cách Manhattan.'],
        pitfalls: ['Heuristic ước lượng quá → nhanh hơn nhưng có thể không còn tối ưu.', 'Lưới 8 hướng mà dùng Manhattan → ước lượng quá; dùng Chebyshev / octile.'],
        code: `import heapq

def a_star(grid, start, goal):            # grid: 0 = trống, 1 = tường
    R, C = len(grid), len(grid[0])
    def h(p):                             # Manhattan
        return abs(p[0] - goal[0]) + abs(p[1] - goal[1])
    g = {start: 0}
    pq = [(h(start), start)]
    while pq:
        f, u = heapq.heappop(pq)
        if u == goal:
            return g[u]
        if f > g[u] + h(u):
            continue                      # bản ghi cũ
        r, c = u
        for v in ((r + 1, c), (r - 1, c), (r, c + 1), (r, c - 1)):
            if 0 <= v[0] < R and 0 <= v[1] < C and grid[v[0]][v[1]] == 0:
                ng = g[u] + 1
                if ng < g.get(v, float("inf")):
                    g[v] = ng
                    heapq.heappush(pq, (ng + h(v), v))
    return -1`,
        practice: [['Shortest Path in Binary Matrix', 'shortest-path-in-binary-matrix'], ['Sliding Puzzle', 'sliding-puzzle']],
        related: ['dijkstra', 'bfs', 'grid-graph'],
        viz: 'astar'
    });

    T({
        id: 'scc', cat: 'graph', level: 3,
        title: 'Thành phần liên thông mạnh', en: 'Strongly Connected Components',
        tags: ['scc', 'liên thông mạnh', 'tarjan', 'kosaraju', '2-sat', 'đồ thị có hướng'],
        summary: 'Trong đồ thị có hướng, gom các đỉnh đi lại được lẫn nhau thành một nhóm — rút gọn đồ thị thành DAG.',
        idea: '<b>Kosaraju</b>: (1) DFS trên đồ thị gốc, ghi thứ tự hoàn thành; (2) DFS trên đồ thị <b>đảo chiều</b> theo thứ tự hoàn thành giảm dần — mỗi lần DFS thu được đúng một SCC. <b>Tarjan</b>: một lần DFS, dùng <code>low[u]</code> = thời điểm thăm nhỏ nhất tới được từ cây con của u qua các đỉnh còn trên ngăn xếp; khi low[u] == tin[u] thì u là "gốc" của một SCC. Co mỗi SCC thành một đỉnh ta được một DAG.',
        cx: { rows: [['Thời gian', 'O(V + E)'], ['Bộ nhớ', 'O(V + E)']] },
        when: ['Phân tích phụ thuộc vòng (module, package), cấu trúc liên kết web.', '2-SAT: có nghiệm ⇔ không có x và ¬x cùng SCC.', 'Co đồ thị có chu trình về DAG để làm QHĐ.'],
        pitfalls: ['Tarjan: chỉ cập nhật low qua đỉnh còn trên ngăn xếp.', 'Đệ quy sâu trên đồ thị lớn.'],
        code: `def kosaraju(n, edges):
    adj = [[] for _ in range(n)]
    radj = [[] for _ in range(n)]
    for u, v in edges:
        adj[u].append(v)
        radj[v].append(u)                 # đồ thị đảo chiều
    seen, order = [False] * n, []
    def dfs1(u):
        seen[u] = True
        for v in adj[u]:
            if not seen[v]:
                dfs1(v)
        order.append(u)                   # thứ tự hoàn thành
    for u in range(n):
        if not seen[u]:
            dfs1(u)
    comp = [-1] * n
    def dfs2(u, c):
        comp[u] = c
        for v in radj[u]:
            if comp[v] == -1:
                dfs2(v, c)
    c = 0
    for u in reversed(order):             # hoàn thành muộn nhất trước
        if comp[u] == -1:
            dfs2(u, c)
            c += 1
    return comp                           # comp[u] = chỉ số SCC của u`,
        practice: [['Planets and Kingdoms (CSES)', null], ['Find Eventual Safe States', 'find-eventual-safe-states']],
        related: ['dfs', 'topo-sort', 'bridges']
    });

    T({
        id: 'bridges', cat: 'graph', level: 3,
        title: 'Cầu & khớp', en: 'Bridges & Articulation Points',
        tags: ['cầu', 'khớp', 'bridge', 'articulation point', 'tarjan', 'critical connections'],
        summary: 'Tìm cạnh / đỉnh mà nếu xóa đi thì đồ thị bị tách rời — "điểm yếu" của một mạng lưới.',
        idea: 'DFS gán cho mỗi đỉnh thời điểm thăm <code>tin[u]</code> và <code>low[u]</code> = tin nhỏ nhất tới được từ cây con của u bằng tối đa một cạnh ngược. Cạnh cây (u, v) là <b>cầu</b> nếu <code>low[v] &gt; tin[u]</code> (cây con của v không có đường vòng lên trên u). Đỉnh u (không phải gốc) là <b>khớp</b> nếu có con v với <code>low[v] ≥ tin[u]</code>; gốc là khớp nếu có ≥ 2 con trong cây DFS.',
        cx: { rows: [['Thời gian', 'O(V + E)'], ['Bộ nhớ', 'O(V)']] },
        when: ['Tìm đường truyền / máy chủ quan trọng trong mạng (critical connections).', 'Phân tích độ tin cậy của mạng giao thông, lưới điện.'],
        pitfalls: ['Đồ thị có cạnh song song: bỏ qua đúng cạnh vừa đi tới (theo chỉ số cạnh), không bỏ mọi cạnh về cha.', 'Nhầm điều kiện &gt; (cầu) và ≥ (khớp).'],
        code: `def find_bridges(n, edges):
    adj = [[] for _ in range(n)]
    for i, (u, v) in enumerate(edges):
        adj[u].append((v, i))
        adj[v].append((u, i))
    tin, low = [-1] * n, [0] * n
    timer, bridges = 0, []
    def dfs(u, parent_edge):
        nonlocal timer
        tin[u] = low[u] = timer
        timer += 1
        for v, eid in adj[u]:
            if eid == parent_edge:
                continue
            if tin[v] != -1:
                low[u] = min(low[u], tin[v])       # cạnh ngược
            else:
                dfs(v, eid)
                low[u] = min(low[u], low[v])
                if low[v] > tin[u]:
                    bridges.append(edges[eid])
    for u in range(n):
        if tin[u] == -1:
            dfs(u, -1)
    return bridges`,
        practice: [['Critical Connections in a Network', 'critical-connections-in-a-network']],
        related: ['dfs', 'scc']
    });

    T({
        id: 'max-flow', cat: 'graph', level: 3,
        title: 'Luồng cực đại', en: 'Maximum Flow (Edmonds–Karp)',
        tags: ['luồng cực đại', 'max flow', 'ford fulkerson', 'edmonds karp', 'dinic', 'lát cắt nhỏ nhất', 'min cut', 'ghép cặp'],
        summary: 'Đẩy được nhiều "nước" nhất từ nguồn tới đích qua mạng có sức chứa — và nhờ đó giải luôn bài ghép cặp, lát cắt nhỏ nhất.',
        idea: 'Mỗi cạnh có một sức chứa. Lặp lại: tìm một <b>đường tăng luồng</b> từ s tới t trên <b>đồ thị thặng dư</b> (cạnh còn dư sức chứa, kèm cạnh ngược cho phép "rút lại" luồng đã đẩy), rồi đẩy thêm lượng bằng cạnh hẹp nhất trên đường. <b>Edmonds–Karp</b> tìm đường bằng BFS → O(V·E²). Định lý: <b>luồng cực đại = lát cắt nhỏ nhất</b>. Ghép cặp cực đại trên đồ thị hai phía = luồng cực đại với mọi sức chứa bằng 1.',
        cx: { rows: [['Edmonds–Karp', 'O(V · E²)'], ['Dinic', 'O(V² · E), rất nhanh trên đồ thị hai phía']] },
        when: ['Ghép cặp người – việc, phân công có giới hạn.', 'Lát cắt nhỏ nhất: tách ảnh nền/đối tượng, độ tin cậy mạng.', 'Bài vận chuyển, lập lịch có sức chứa.'],
        pitfalls: ['Quên cạnh ngược → không "rút lại" được luồng, kết quả sai.', 'Nhiều cạnh song song → cộng dồn sức chứa.'],
        code: `from collections import deque

def max_flow(n, cap, s, t):               # cap: ma trận sức chứa n×n (bị sửa tại chỗ)
    flow = 0
    while True:
        parent = [-1] * n
        parent[s] = s
        q = deque([s])
        while q and parent[t] == -1:      # BFS tìm đường tăng luồng
            u = q.popleft()
            for v in range(n):
                if parent[v] == -1 and cap[u][v] > 0:
                    parent[v] = u
                    q.append(v)
        if parent[t] == -1:
            return flow                   # hết đường tăng
        push, v = float("inf"), t
        while v != s:                     # cạnh hẹp nhất trên đường
            push = min(push, cap[parent[v]][v])
            v = parent[v]
        v = t
        while v != s:
            u = parent[v]
            cap[u][v] -= push
            cap[v][u] += push             # cạnh ngược
            v = u
        flow += push`,
        practice: [['Download Speed (CSES)', null], ['School Dance (CSES)', null], ['Maximum Students Taking Exam', 'maximum-students-taking-exam']],
        related: ['bipartite', 'bfs', 'greedy']
    });

    /* ========================== QUY HOẠCH ĐỘNG ========================== */

    T({
        id: 'dp-intro', cat: 'dp', level: 2, interview: true,
        title: 'Nhập môn quy hoạch động', en: 'Dynamic Programming Basics',
        tags: ['quy hoạch động', 'dp', 'dynamic programming', 'ghi nhớ', 'memoization', 'lập bảng', 'tabulation', 'fibonacci'],
        summary: 'Chia bài toán thành các bài con chồng lấn, giải mỗi bài con đúng một lần và lưu lại — từ O(2ⁿ) xuống O(n).',
        idea: 'QHĐ dùng được khi bài có <b>cấu trúc con tối ưu</b> (lời giải lớn dựng từ lời giải bài con) và <b>bài con chồng lấn</b> (cùng một bài con xuất hiện nhiều lần). Hai cách cài: <b>top-down</b> — đệ quy + ghi nhớ, dễ nghĩ; <b>bottom-up</b> — lập bảng từ bài con nhỏ tới lớn, không đệ quy, dễ tối ưu bộ nhớ. Mô phỏng Fibonacci cho thấy rõ: đệ quy thuần gọi 25 lần cho fib(6), có ghi nhớ chỉ còn 11 lần.',
        steps: [
            '<b>Trạng thái</b>: dp[i] (hoặc dp[i][j]) nghĩa là gì? — bước quan trọng nhất.',
            '<b>Chuyển trạng thái</b>: dp[i] tính từ những trạng thái nhỏ hơn nào?',
            '<b>Cơ sở</b>: giá trị của các trạng thái nhỏ nhất.',
            '<b>Thứ tự tính</b>: đảm bảo trạng thái phụ thuộc đã được tính trước.',
            '<b>Đáp án</b>: nằm ở ô nào — dp[n], max(dp), dp[n][m]…?'
        ],
        cx: { rows: [['Thời gian', 'Số trạng thái × chi phí mỗi lần chuyển'], ['Bộ nhớ', 'Số trạng thái (thường nén được)']] },
        when: ['"Số cách", "lớn nhất / nhỏ nhất", "có thể hay không" với các lựa chọn lặp lại.', 'Vét cạn bị tính trùng bài con (cây đệ quy có nhánh lặp lại).'],
        pitfalls: ['Định nghĩa trạng thái mơ hồ → chuyển trạng thái sai.', 'Thiếu chiều trạng thái (vd. cần biết "đã dùng k lần" mà không lưu).', 'Đệ quy ghi nhớ quá sâu trong Python → chuyển sang bottom-up.'],
        code: `from functools import lru_cache

@lru_cache(maxsize=None)                  # top-down: ghi nhớ tự động
def fib(n):
    return n if n <= 1 else fib(n - 1) + fib(n - 2)

def fib_table(n):                         # bottom-up
    if n <= 1:
        return n
    dp = [0] * (n + 1)
    dp[1] = 1
    for i in range(2, n + 1):
        dp[i] = dp[i - 1] + dp[i - 2]
    return dp[n]

def climb_stairs(n):                      # mỗi bước leo 1 hoặc 2 bậc
    a, b = 1, 1                           # chỉ cần 2 ô gần nhất → O(1) bộ nhớ
    for _ in range(n):
        a, b = b, a + b
    return a`,
        practice: [['Fibonacci Number', 'fibonacci-number'], ['Climbing Stairs', 'climbing-stairs'], ['Min Cost Climbing Stairs', 'min-cost-climbing-stairs'], ['N-th Tribonacci Number', 'n-th-tribonacci-number']],
        related: ['recursion', 'dp-1d', 'coin-change', 'knapsack'],
        viz: 'fibMemo'
    });

    T({
        id: 'dp-1d', cat: 'dp', level: 2, interview: true,
        title: 'QHĐ một chiều', en: '1D DP (House Robber, Decode Ways…)',
        tags: ['qhđ một chiều', '1d dp', 'house robber', 'kẻ trộm', 'decode ways', 'word break'],
        summary: 'Trạng thái dp[i] chỉ phụ thuộc vài trạng thái ngay trước — dạng QHĐ phổ biến nhất trong phỏng vấn.',
        idea: 'Ví dụ "kẻ trộm": không được lấy hai nhà liền nhau. dp[i] = số tiền lớn nhất với i nhà đầu. Với nhà thứ i: bỏ qua (dp[i−1]) hoặc lấy (dp[i−2] + a[i−1]). Rất nhiều bài cùng khuôn: leo cầu thang, giải mã chuỗi số (decode ways), tách từ (word break), số cách chia.',
        cx: { rows: [['Thời gian', 'O(n) (word break: O(n²))'], ['Bộ nhớ', 'O(1) nếu chỉ giữ vài biến']] },
        when: ['Quyết định tuần tự trên một dãy; lựa chọn hiện tại bị ràng buộc bởi vài lựa chọn trước.'],
        pitfalls: ['Lệch chỉ số giữa dp (n + 1 ô) và mảng a (n ô).', 'Biến thể vòng tròn (nhà đầu và nhà cuối kề nhau): chạy 2 lần, bỏ nhà đầu hoặc bỏ nhà cuối.'],
        code: `def rob(a):
    take, skip = 0, 0                     # tốt nhất khi lấy / không lấy nhà hiện tại
    for x in a:
        take, skip = skip + x, max(take, skip)
    return max(take, skip)

def num_decodings(s):                     # "226" → 3 ("BZ", "VF", "BBF")
    prev2, prev1 = 1, (1 if s[0] != "0" else 0)
    for i in range(1, len(s)):
        cur = prev1 if s[i] != "0" else 0
        if 10 <= int(s[i - 1:i + 1]) <= 26:
            cur += prev2
        prev2, prev1 = prev1, cur
    return prev1

def word_break(s, words):
    words = set(words)
    dp = [True] + [False] * len(s)        # dp[i]: s[:i] tách được thành các từ
    for i in range(1, len(s) + 1):
        dp[i] = any(dp[j] and s[j:i] in words for j in range(i))
    return dp[-1]`,
        practice: [['House Robber', 'house-robber'], ['House Robber II', 'house-robber-ii'], ['Decode Ways', 'decode-ways'], ['Word Break', 'word-break'], ['Delete and Earn', 'delete-and-earn']],
        related: ['dp-intro', 'kadane', 'coin-change', 'lis'],
        viz: 'houseRobber'
    });

    T({
        id: 'coin-change', cat: 'dp', level: 2, interview: true,
        title: 'Đổi tiền (Coin Change)', en: 'Coin Change',
        tags: ['đổi tiền', 'coin change', 'đồng xu', 'cái túi không giới hạn', 'unbounded knapsack', 'số cách'],
        summary: 'Ít đồng xu nhất (hoặc số cách) để tạo đúng một số tiền — dạng "cái túi không giới hạn số lượng".',
        idea: 'dp[x] = số đồng ít nhất để tạo x. Đồng xu cuối cùng có thể là bất kỳ mệnh giá c ≤ x: <code>dp[x] = min(dp[x − c] + 1)</code>. Đếm <b>số cách</b> (không phân biệt thứ tự) thì đổi vị trí vòng lặp: đồng xu ở ngoài, số tiền ở trong — để mỗi tổ hợp chỉ được đếm một lần.',
        cx: { rows: [['Thời gian', 'O(amount × số mệnh giá)'], ['Bộ nhớ', 'O(amount)']] },
        when: ['Đạt đúng một tổng với các "món" dùng lại được: đổi tiền, số chính phương ít nhất, cắt thanh gỗ.'],
        pitfalls: ['Dùng tham lam (mệnh giá lớn trước) — sai với hệ mệnh giá tổng quát.', 'Đếm số cách mà để vòng số tiền ở ngoài → đếm cả hoán vị (1+2 và 2+1 thành 2 cách).', 'Quên trường hợp không tạo được (∞ → −1).'],
        code: `def coin_change(coins, amount):           # ít đồng nhất
    INF = float("inf")
    dp = [0] + [INF] * amount
    for x in range(1, amount + 1):
        for c in coins:
            if c <= x and dp[x - c] + 1 < dp[x]:
                dp[x] = dp[x - c] + 1
    return dp[amount] if dp[amount] != INF else -1

def count_ways(coins, amount):            # số tổ hợp (không tính thứ tự)
    dp = [1] + [0] * amount
    for c in coins:                       # đồng xu ở vòng ngoài!
        for x in range(c, amount + 1):
            dp[x] += dp[x - c]
    return dp[amount]`,
        practice: [['Coin Change', 'coin-change'], ['Coin Change II', 'coin-change-ii'], ['Perfect Squares', 'perfect-squares'], ['Combination Sum IV', 'combination-sum-iv']],
        related: ['knapsack', 'greedy', 'dp-intro'],
        viz: 'coinChange'
    });

    T({
        id: 'knapsack', cat: 'dp', level: 2, interview: true,
        title: 'Bài toán cái túi 0/1', en: '0/1 Knapsack',
        tags: ['cái túi', 'knapsack', '0/1', 'chọn hay không chọn', 'partition', 'target sum'],
        summary: 'Chọn một tập đồ vật (mỗi món tối đa một lần) có tổng giá trị lớn nhất mà không vượt sức chứa — khuôn cho rất nhiều bài chọn / không chọn.',
        idea: 'dp[i][c] = giá trị lớn nhất khi chỉ dùng i đồ đầu với sức chứa c. Với đồ thứ i: không lấy → dp[i−1][c]; lấy (nếu vừa) → dp[i−1][c − w] + v. Mỗi hàng chỉ cần hàng trước nên nén được còn mảng 1 chiều — nhưng phải duyệt c <b>giảm dần</b> để mỗi đồ không bị lấy hai lần. Biến thể: chia tập thành hai phần tổng bằng nhau, gán dấu +/− (target sum).',
        cx: { rows: [['Thời gian', 'O(n × W) — "giả đa thức"'], ['Bộ nhớ', 'O(W) với bản nén']] },
        when: ['Chọn tập con với ràng buộc tổng (khối lượng, chi phí, thời gian).', 'Chia mảng thành 2 phần tổng bằng nhau / chênh lệch nhỏ nhất.'],
        pitfalls: ['Bản 1 chiều mà duyệt c tăng dần → biến thành cái túi không giới hạn.', 'W quá lớn (10⁹) → đổi chiều trạng thái (dp theo giá trị) hoặc meet in the middle.'],
        code: `def knapsack(items, W):                  # items: [(w, v), ...]
    dp = [0] * (W + 1)
    for w, v in items:
        for c in range(W, w - 1, -1):     # giảm dần → mỗi món chỉ lấy 1 lần
            dp[c] = max(dp[c], dp[c - w] + v)
    return dp[W]

def can_partition(nums):                  # chia thành 2 phần tổng bằng nhau
    total = sum(nums)
    if total % 2:
        return False
    target = total // 2
    ok = [True] + [False] * target
    for x in nums:
        for s in range(target, x - 1, -1):
            ok[s] = ok[s] or ok[s - x]
    return ok[target]`,
        practice: [['Partition Equal Subset Sum', 'partition-equal-subset-sum'], ['Target Sum', 'target-sum'], ['Last Stone Weight II', 'last-stone-weight-ii'], ['Ones and Zeroes', 'ones-and-zeroes']],
        related: ['coin-change', 'dp-intro', 'p-np', 'meet-in-middle'],
        viz: 'knapsack'
    });

    T({
        id: 'lcs', cat: 'dp', level: 2,
        title: 'Dãy con chung dài nhất (LCS)', en: 'Longest Common Subsequence',
        tags: ['lcs', 'dãy con chung', 'longest common subsequence', 'diff', 'hai chuỗi'],
        summary: 'Bảng 2 chiều so từng cặp tiền tố của hai chuỗi — khuôn QHĐ trên hai dãy, nền của công cụ diff.',
        idea: 'dp[i][j] = độ dài LCS của a[:i] và b[:j]. Nếu <code>a[i−1] == b[j−1]</code> thì ký tự này thuộc LCS: dp[i−1][j−1] + 1; ngược lại bỏ một ký tự của một trong hai chuỗi: max(dp[i−1][j], dp[i][j−1]). Truy vết từ góc dưới phải để lấy chính dãy con.',
        cx: { rows: [['Thời gian', 'O(m × n)'], ['Bộ nhớ', 'O(m × n); O(min(m, n)) nếu chỉ cần độ dài']] },
        when: ['So sánh hai văn bản / tệp (diff, git), so sánh DNA.', 'Biến thể: xóa ít nhất để hai chuỗi bằng nhau, siêu chuỗi chung ngắn nhất, dãy con palindrome dài nhất (LCS với chuỗi đảo).'],
        pitfalls: ['Nhầm dãy con (không cần liên tiếp) với chuỗi con (liên tiếp — khi đó ô không khớp phải đặt 0).', 'Lệch chỉ số giữa dp (m+1 × n+1) và chuỗi.'],
        code: `def lcs(a, b):
    m, n = len(a), len(b)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if a[i - 1] == b[j - 1]:
                dp[i][j] = dp[i - 1][j - 1] + 1
            else:
                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])
    out, i, j = [], m, n                  # truy vết từ góc dưới phải
    while i and j:
        if a[i - 1] == b[j - 1]:
            out.append(a[i - 1]); i -= 1; j -= 1
        elif dp[i - 1][j] >= dp[i][j - 1]:
            i -= 1
        else:
            j -= 1
    return dp[m][n], "".join(reversed(out))`,
        practice: [['Longest Common Subsequence', 'longest-common-subsequence'], ['Delete Operation for Two Strings', 'delete-operation-for-two-strings'], ['Uncrossed Lines', 'uncrossed-lines'], ['Shortest Common Supersequence', 'shortest-common-supersequence'], ['Longest Palindromic Subsequence', 'longest-palindromic-subsequence']],
        related: ['edit-distance', 'lis', 'dp-intro'],
        viz: 'lcs'
    });

    T({
        id: 'lis', cat: 'dp', level: 2, interview: true,
        title: 'Dãy con tăng dài nhất (LIS)', en: 'Longest Increasing Subsequence',
        tags: ['lis', 'dãy con tăng', 'longest increasing subsequence', 'patience', 'tìm nhị phân'],
        summary: 'O(n²) với QHĐ cổ điển, hoặc O(n log n) với mảng "đuôi nhỏ nhất" + tìm nhị phân.',
        idea: '<b>O(n²)</b>: dp[i] = độ dài LIS kết thúc tại i = 1 + max(dp[j]) với j &lt; i và a[j] &lt; a[i]. <b>O(n log n)</b>: tails[k] = phần tử cuối <b>nhỏ nhất</b> của một dãy tăng dài k+1. Với mỗi x, tìm nhị phân vị trí đầu tiên có tails[k] ≥ x rồi thay bằng x (hoặc nối vào cuối). Độ dài của tails là đáp án — nhưng tails không nhất thiết là chính dãy LIS.',
        cx: { rows: [['QHĐ cổ điển', 'O(n²)'], ['Đuôi nhỏ nhất + tìm nhị phân', 'O(n log n)']] },
        when: ['Xếp chồng hộp / phong bì (Russian doll), chuỗi dài nhất có thứ tự.', 'Số dãy giảm tối thiểu để phủ dãy (định lý Dilworth).'],
        pitfalls: ['"Tăng ngặt" dùng bisect_left, "không giảm" dùng bisect_right.', 'Nhầm tưởng mảng tails chính là dãy LIS.', 'Russian doll: sắp theo chiều rộng tăng, chiều cao GIẢM để không chọn hai hộp cùng rộng.'],
        code: `from bisect import bisect_left

def lis_n2(a):
    dp = [1] * len(a)
    for i in range(len(a)):
        for j in range(i):
            if a[j] < a[i]:
                dp[i] = max(dp[i], dp[j] + 1)
    return max(dp, default=0)

def lis_nlogn(a):
    tails = []
    for x in a:
        k = bisect_left(tails, x)         # vị trí đầu tiên có tails[k] >= x
        if k == len(tails):
            tails.append(x)               # kéo dài dãy dài nhất
        else:
            tails[k] = x                  # đuôi nhỏ hơn → dễ nối tiếp hơn
    return len(tails)`,
        practice: [['Longest Increasing Subsequence', 'longest-increasing-subsequence'], ['Number of Longest Increasing Subsequence', 'number-of-longest-increasing-subsequence'], ['Russian Doll Envelopes', 'russian-doll-envelopes'], ['Longest String Chain', 'longest-string-chain'], ['Maximum Length of Pair Chain', 'maximum-length-of-pair-chain']],
        related: ['dp-1d', 'binary-search', 'lcs'],
        viz: 'lis'
    });

    T({
        id: 'grid-dp', cat: 'dp', level: 2, interview: true,
        title: 'QHĐ trên lưới', en: 'Grid DP',
        tags: ['qhđ lưới', 'grid dp', 'unique paths', 'đếm đường đi', 'minimum path sum', 'hình vuông lớn nhất'],
        summary: 'Mỗi ô chỉ tới được từ vài ô lân cận (thường là trên và trái): đếm đường đi, chi phí nhỏ nhất, hình vuông lớn nhất.',
        idea: 'dp[r][c] là đáp án cho bài toán kết thúc tại ô (r, c). Khi chỉ được đi sang phải hoặc xuống: <code>dp[r][c] = cost[r][c] + min(dp[r−1][c], dp[r][c−1])</code> (chi phí nhỏ nhất) hoặc <code>dp[r−1][c] + dp[r][c−1]</code> (số đường đi). Duyệt theo hàng từ trên xuống, trái sang phải là đủ thứ tự. Có thể nén còn một hàng.',
        cx: { rows: [['Thời gian', 'O(R × C)'], ['Bộ nhớ', 'O(C) nếu nén một hàng']] },
        when: ['Robot trên lưới, đường đi có chướng ngại.', 'Hình vuông / hình chữ nhật toàn số 1 lớn nhất.', 'Đi được nhiều hướng (có chu trình) → không còn là QHĐ đơn giản; dùng Dijkstra / BFS.'],
        pitfalls: ['Quên xử lý hàng 0 và cột 0 (chỉ có một hướng tới).', 'Ô chướng ngại phải đặt dp = 0 (số đường) hoặc ∞ (chi phí).'],
        code: `def min_path_sum(g):
    R, C = len(g), len(g[0])
    dp = [0] * C                          # nén còn một hàng
    for r in range(R):
        for c in range(C):
            if r == 0 and c == 0:
                dp[c] = g[0][0]
            elif r == 0:
                dp[c] = dp[c - 1] + g[r][c]
            elif c == 0:
                dp[c] = dp[c] + g[r][c]
            else:
                dp[c] = min(dp[c], dp[c - 1]) + g[r][c]   # dp[c] cũ = ô phía trên
    return dp[-1]

def unique_paths_with_obstacles(g):       # 1 = chướng ngại
    C = len(g[0])
    dp = [0] * C
    dp[0] = 1
    for row in g:
        for c in range(C):
            if row[c] == 1:
                dp[c] = 0
            elif c > 0:
                dp[c] += dp[c - 1]
    return dp[-1]

def maximal_square(M):                    # diện tích hình vuông toàn "1" lớn nhất
    R, C = len(M), len(M[0])
    dp = [[0] * (C + 1) for _ in range(R + 1)]
    best = 0
    for r in range(R):
        for c in range(C):
            if M[r][c] == "1":
                dp[r + 1][c + 1] = 1 + min(dp[r][c], dp[r][c + 1], dp[r + 1][c])
                best = max(best, dp[r + 1][c + 1])
    return best * best`,
        practice: [['Unique Paths', 'unique-paths'], ['Unique Paths II', 'unique-paths-ii'], ['Minimum Path Sum', 'minimum-path-sum'], ['Maximal Square', 'maximal-square'], ['Triangle', 'triangle'], ['Dungeon Game', 'dungeon-game']],
        related: ['matrix', 'dp-intro', 'combinatorics'],
        viz: 'gridPaths'
    });

    T({
        id: 'edit-distance', cat: 'dp', level: 3, interview: true,
        title: 'Khoảng cách chỉnh sửa', en: 'Edit Distance (Levenshtein)',
        tags: ['edit distance', 'levenshtein', 'khoảng cách chỉnh sửa', 'sửa lỗi chính tả', 'fuzzy search'],
        summary: 'Số thao tác chèn / xóa / thay ít nhất để biến chuỗi này thành chuỗi kia.',
        idea: 'dp[i][j] = chi phí biến a[:i] thành b[:j]. Hai ký tự cuối giống nhau → không tốn gì: dp[i−1][j−1]. Khác nhau → 1 + min(<b>xóa</b> a[i−1]: dp[i−1][j], <b>chèn</b> b[j−1]: dp[i][j−1], <b>thay</b>: dp[i−1][j−1]). Hàng 0 và cột 0 tương ứng chèn / xóa toàn bộ.',
        cx: { rows: [['Thời gian', 'O(m × n)'], ['Bộ nhớ', 'O(m × n); O(n) nếu chỉ cần giá trị']] },
        when: ['Gợi ý sửa lỗi chính tả, tìm kiếm mờ, so sánh chuỗi gen.', 'Biến thể có trọng số riêng cho từng thao tác.'],
        pitfalls: ['Quên khởi tạo hàng / cột 0 (= i và = j).', 'Nhầm hướng "chèn" và "xóa" khi truy vết.'],
        code: `def edit_distance(a, b):
    m, n = len(a), len(b)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    for i in range(m + 1):
        dp[i][0] = i                      # xóa hết
    for j in range(n + 1):
        dp[0][j] = j                      # chèn hết
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if a[i - 1] == b[j - 1]:
                dp[i][j] = dp[i - 1][j - 1]
            else:
                dp[i][j] = 1 + min(dp[i - 1][j],       # xóa
                                   dp[i][j - 1],       # chèn
                                   dp[i - 1][j - 1])   # thay
    return dp[m][n]`,
        practice: [['Edit Distance', 'edit-distance'], ['Minimum ASCII Delete Sum for Two Strings', 'minimum-ascii-delete-sum-for-two-strings'], ['Distinct Subsequences', 'distinct-subsequences'], ['Interleaving String', 'interleaving-string']],
        related: ['lcs', 'dp-intro'],
        viz: 'editDistance'
    });

    T({
        id: 'interval-dp', cat: 'dp', level: 3,
        title: 'QHĐ trên đoạn', en: 'Interval DP',
        tags: ['qhđ đoạn', 'interval dp', 'burst balloons', 'nhân chuỗi ma trận', 'matrix chain'],
        summary: 'dp[l][r] là đáp án cho đoạn [l, r], tính từ các đoạn con ngắn hơn bằng cách thử mọi điểm chia.',
        idea: 'Duyệt theo <b>độ dài đoạn</b> tăng dần. Với mỗi đoạn [l, r], thử mọi điểm chia k: <code>dp[l][r] = min/max(dp[l][k] + dp[k+1][r] + chi_phí(l, k, r))</code>. Ví dụ: nhân chuỗi ma trận (đặt ngoặc tối ưu), bóng bay nổ (chọn quả nổ <b>cuối cùng</b> trong đoạn), trộn các đống đá.',
        cx: { rows: [['Thời gian', 'Thường O(n³)'], ['Bộ nhớ', 'O(n²)']] },
        when: ['Thao tác gộp / xóa phần tử kề nhau, ảnh hưởng tới hàng xóm.', 'Palindrome: dãy con palindrome dài nhất, cắt ít nhất thành các palindrome.', 'n ≤ ~500.'],
        pitfalls: ['Duyệt l, r sai thứ tự → dùng ô chưa tính; hãy duyệt theo độ dài.', 'Bóng bay nổ: nghĩ "quả nổ đầu tiên" thì các bài con không độc lập — phải nghĩ "quả nổ cuối cùng".'],
        code: `def max_coins(nums):                      # Burst Balloons
    a = [1] + nums + [1]
    n = len(a)
    dp = [[0] * n for _ in range(n)]      # dp[l][r]: xét các quả trong khoảng mở (l, r)
    for length in range(2, n):
        for l in range(n - length):
            r = l + length
            for k in range(l + 1, r):     # k là quả nổ CUỐI CÙNG trong (l, r)
                dp[l][r] = max(dp[l][r], dp[l][k] + a[l] * a[k] * a[r] + dp[k][r])
    return dp[0][n - 1]

def matrix_chain(dims):                   # ma trận i có kích thước dims[i] × dims[i+1]
    n = len(dims) - 1
    dp = [[0] * n for _ in range(n)]
    for length in range(2, n + 1):
        for i in range(n - length + 1):
            j = i + length - 1
            dp[i][j] = min(dp[i][k] + dp[k + 1][j] + dims[i] * dims[k + 1] * dims[j + 1]
                           for k in range(i, j))
    return dp[0][n - 1]`,
        practice: [['Burst Balloons', 'burst-balloons'], ['Minimum Score Triangulation of Polygon', 'minimum-score-triangulation-of-polygon'], ['Longest Palindromic Subsequence', 'longest-palindromic-subsequence'], ['Minimum Cost to Merge Stones', 'minimum-cost-to-merge-stones'], ['Palindrome Partitioning II', 'palindrome-partitioning-ii']],
        related: ['dp-intro', 'lcs', 'palindrome']
    });

    T({
        id: 'bitmask-dp', cat: 'dp', level: 3,
        title: 'QHĐ bitmask', en: 'Bitmask DP',
        tags: ['bitmask', 'qhđ trạng thái', 'tsp', 'người du lịch', 'tập con', 'traveling salesman'],
        summary: 'Dùng một số nguyên n bit làm trạng thái "tập đã chọn" — giải các bài NP-khó với n ≤ ~20 trong O(2ⁿ · n²).',
        idea: 'Người du lịch (TSP): <code>dp[mask][v]</code> = chi phí nhỏ nhất đi qua đúng các đỉnh trong mask và đang đứng ở v. Chuyển tới u chưa có trong mask: <code>dp[mask | 1&lt;&lt;u][u] = min(dp[mask][v] + d[v][u])</code>. Thay vì n! hoán vị, chỉ còn 2ⁿ · n trạng thái. Mẹo duyệt mọi tập con của mask: <code>sub = (sub − 1) &amp; mask</code>.',
        cx: { rows: [['TSP', 'O(2ⁿ · n²) thời gian, O(2ⁿ · n) bộ nhớ']] },
        when: ['n ≤ 20 và trạng thái cần nhớ "những phần tử nào đã dùng".', 'Phân công n người – n việc, phủ tập, ghép cặp trên đồ thị nhỏ.'],
        pitfalls: ['2ⁿ · n với n = 25 đã ~8·10⁸ — cân nhắc kỹ.', 'Độ ưu tiên toán tử bit trong điều kiện.'],
        code: `def tsp(d):                               # d: ma trận khoảng cách n×n
    n = len(d)
    INF = float("inf")
    dp = [[INF] * n for _ in range(1 << n)]
    dp[1][0] = 0                          # xuất phát tại 0, mask = {0}
    for mask in range(1 << n):
        for v in range(n):
            if dp[mask][v] == INF or not (mask >> v) & 1:
                continue
            for u in range(n):
                if not (mask >> u) & 1:
                    nm = mask | (1 << u)
                    dp[nm][u] = min(dp[nm][u], dp[mask][v] + d[v][u])
    full = (1 << n) - 1
    return min(dp[full][v] + d[v][0] for v in range(n))`,
        practice: [['Shortest Path Visiting All Nodes', 'shortest-path-visiting-all-nodes'], ['Find the Shortest Superstring', 'find-the-shortest-superstring'], ['Partition to K Equal Sum Subsets', 'partition-to-k-equal-sum-subsets'], ['Minimum Number of Work Sessions to Finish the Tasks', 'minimum-number-of-work-sessions-to-finish-the-tasks']],
        related: ['bit-manipulation', 'p-np', 'subsets-permutations']
    });

    T({
        id: 'tree-dp', cat: 'dp', level: 3,
        title: 'QHĐ trên cây', en: 'Tree DP',
        tags: ['qhđ trên cây', 'tree dp', 'house robber iii', 'đường kính cây', 'rerooting'],
        summary: 'Tính đáp án cho mỗi cây con từ đáp án của các con (duyệt hậu thứ tự) — mỗi nút thường có vài trạng thái.',
        idea: 'Chọn gốc, DFS và tính dp[u] sau khi đã có dp của mọi con. Ví dụ "kẻ trộm trên cây": dp[u] = (lấy u, không lấy u); lấy u thì các con phải "không lấy", không lấy u thì mỗi con chọn phương án tốt hơn. Kỹ thuật nâng cao: <b>rerooting</b> — tính đáp án cho mọi gốc trong O(n) bằng hai lần DFS (dưới lên, rồi trên xuống).',
        cx: { rows: [['Thời gian', 'O(n)'], ['Bộ nhớ', 'O(n)']] },
        when: ['Tập độc lập lớn nhất, phủ đỉnh nhỏ nhất trên cây.', 'Đường kính cây, đường đi có tổng lớn nhất.', 'Tổng khoảng cách từ mỗi nút tới mọi nút (rerooting).'],
        pitfalls: ['Cây cho dạng đồ thị vô hướng → phải truyền tham số cha để khỏi đi ngược.', 'Đệ quy sâu với cây dạng đường thẳng (10⁵ nút).'],
        code: `def rob_tree(root):                       # House Robber III
    def dfs(node):                        # trả về (lấy node, không lấy node)
        if not node:
            return 0, 0
        lt, ls = dfs(node.left)
        rt, rs = dfs(node.right)
        take = node.val + ls + rs         # lấy node → các con không được lấy
        skip = max(lt, ls) + max(rt, rs)
        return take, skip
    return max(dfs(root))

def tree_diameter(n, adj):                # số cạnh trên đường đi dài nhất
    best = 0
    def dfs(u, parent):
        nonlocal best
        top1 = top2 = 0                   # hai nhánh sâu nhất
        for v in adj[u]:
            if v != parent:
                d = dfs(v, u) + 1
                if d > top1:
                    top1, top2 = d, top1
                elif d > top2:
                    top2 = d
        best = max(best, top1 + top2)
        return top1
    dfs(0, -1)
    return best`,
        practice: [['House Robber III', 'house-robber-iii'], ['Binary Tree Maximum Path Sum', 'binary-tree-maximum-path-sum'], ['Diameter of Binary Tree', 'diameter-of-binary-tree'], ['Binary Tree Cameras', 'binary-tree-cameras'], ['Sum of Distances in Tree', 'sum-of-distances-in-tree']],
        related: ['binary-tree', 'dfs', 'dp-intro', 'lca']
    });

    T({
        id: 'digit-dp', cat: 'dp', level: 3,
        title: 'QHĐ chữ số', en: 'Digit DP',
        tags: ['qhđ chữ số', 'digit dp', 'đếm số', 'tight', 'chữ số'],
        summary: 'Đếm các số trong [0, N] thỏa một tính chất về chữ số bằng cách dựng số từng chữ một, kèm cờ "còn bị chặn bởi N".',
        idea: 'Trạng thái: (vị trí, cờ <b>tight</b> — các chữ số đã chọn có đang trùng tiền tố của N không, cùng thông tin cần nhớ như tổng chữ số / chữ số trước / tập chữ số đã dùng). Nếu tight, chữ số tiếp theo tối đa bằng chữ số tương ứng của N; ngược lại được chọn tự do 0–9. Đếm trên [L, R] = f(R) − f(L − 1).',
        cx: { rows: [['Thời gian', 'O(số chữ số × số trạng thái × 10)']] },
        when: ['"Có bao nhiêu số ≤ N có tổng chữ số chia hết cho k / không có hai chữ số giống nhau / chứa chữ số 1…".', 'N lên tới 10¹⁸ — không thể duyệt từng số.'],
        pitfalls: ['Quên xử lý số 0 đứng đầu (leading zero) khi tính chất phụ thuộc vào chữ số "thật".', 'Ghi nhớ sai khi đưa/không đưa tight vào khóa.'],
        code: `from functools import lru_cache

def count_digit_sum_divisible(N, k):      # số x trong [1, N] có tổng chữ số chia hết cho k
    digits = list(map(int, str(N)))

    @lru_cache(maxsize=None)
    def go(pos, tight, s):
        if pos == len(digits):
            return 1 if s % k == 0 else 0
        limit = digits[pos] if tight else 9
        total = 0
        for d in range(limit + 1):
            total += go(pos + 1, tight and d == limit, (s + d) % k)
        return total

    return go(0, True, 0) - 1             # trừ số 0

print(count_digit_sum_divisible(100, 5))  # 19`,
        practice: [['Numbers At Most N Given Digit Set', 'numbers-at-most-n-given-digit-set'], ['Count Special Integers', 'count-special-integers'], ['Number of Digit One', 'number-of-digit-one'], ['Numbers With Repeated Digits', 'numbers-with-repeated-digits']],
        related: ['dp-intro', 'recursion']
    });
})();
