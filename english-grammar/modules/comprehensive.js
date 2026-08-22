// Bổ sung toàn diện các chủ điểm còn thiếu để phủ trọn chương trình ngữ pháp
// (CEFR A1 → C2). Schema: { icon, title, category, level, connections, simple, detail, advanced }
const grammarComprehensiveData = {

    /* ========== FOUNDATIONS ========== */

    'countable-uncountable': {
        icon: '🔢', title: 'Countable vs Uncountable', category: 'foundations', level: 'beginner',
        connections: ['nouns-plurals', 'quantifiers', 'articles-determiners'],
        simple: `<h3>🔢 Đếm được vs Không đếm được</h3>
            <p><strong>Countable</strong>: có số ít/số nhiều (a book, two books).<br>
            <strong>Uncountable</strong>: chỉ số ít, không "a/an" (water, music, advice).</p>
            <div class="example-box">water, music, advice, news, information, furniture, luggage, bread, money, traffic — luôn số ít!</div>`,
        detail: `<h3>📚 Đơn vị đếm cho uncountable</h3>
            <ul><li>a piece of advice / news / information / furniture</li>
            <li>a glass of water, a cup of coffee, a slice of bread</li>
            <li>a bit of luck, a sheet of paper, a kilo of rice</li></ul>
            <h4>Quantifier hợp với mỗi loại</h4>
            <table><tr><th>Loại</th><th>Quantifiers</th></tr>
            <tr><td>Countable</td><td>many, few, a few, several, a number of</td></tr>
            <tr><td>Uncountable</td><td>much, little, a little, a great deal of</td></tr>
            <tr><td>Cả hai</td><td>some, any, all, most, no, plenty of, a lot of, enough</td></tr></table>`,
        advanced: `<h3>🎯 Bẫy phổ biến</h3>
            <ul><li><em>advice/information/news/furniture/luggage/equipment/homework/traffic</em> — KHÔNG có số nhiều.</li>
            <li>Một số từ vừa C vừa U với nghĩa khác: <em>a paper</em> (báo) vs <em>paper</em> (giấy); <em>a glass</em> (cái cốc) vs <em>glass</em> (thủy tinh); <em>a coffee</em> (1 ly) vs <em>coffee</em> (cà phê nói chung).</li>
            <li><em>Hair</em> uncountable khi nói chung; countable khi từng sợi: <em>a hair in the soup</em>.</li></ul>`
    },

    'quantifiers-deep': {
        icon: '📊', title: 'Quantifiers (Định Lượng)', category: 'foundations', level: 'beginner',
        connections: ['countable-uncountable', 'articles-determiners', 'distributives'],
        simple: `<h3>📊 Bộ định lượng</h3>
            <p>Định lượng cho biết "bao nhiêu" của một danh từ.</p>
            <div class="formula-box">
                Đếm được: many / few / a few / several / a number of<br>
                Không đếm: much / little / a little / a great deal of<br>
                Cả hai: some / any / all / most / no / plenty of / a lot of / enough
            </div>`,
        detail: `<h3>📚 Few vs A few — Little vs A little</h3>
            <ul><li><strong>few / little</strong> = ít (nghĩa <em>tiêu cực</em>: gần như không có)</li>
            <li><strong>a few / a little</strong> = một vài (nghĩa <em>tích cực</em>: có một chút)</li></ul>
            <div class="example-box">
                • <em>I have few friends</em> = tôi có rất ít bạn (cô đơn).<br>
                • <em>I have a few friends</em> = tôi có vài người bạn (đủ vui).
            </div>
            <h4>Most vs Most of</h4>
            <ul><li><em>most people</em> (chung chung)</li>
            <li><em>most of the people</em> (cụ thể, có "the/my/this")</li></ul>`,
        advanced: `<h3>🎯 Chia động từ với quantifier</h3>
            <table><tr><th>Cụm</th><th>Động từ</th></tr>
            <tr><td>a number of + plural N</td><td>plural V (a number of students <strong>are</strong>)</td></tr>
            <tr><td>the number of + plural N</td><td>singular V (the number of students <strong>is</strong>)</td></tr>
            <tr><td>none of + plural N</td><td>có thể singular hoặc plural (formal: singular)</td></tr>
            <tr><td>each / every + N</td><td>singular V luôn</td></tr>
            <tr><td>both / few / many of + N</td><td>plural V</td></tr></table>`
    },

    'demonstratives-deep': {
        icon: '👉', title: 'Demonstratives (This/That)', category: 'foundations', level: 'beginner',
        connections: ['pronouns-possessives', 'articles-determiners', 'anaphoric-reference'],
        simple: `<h3>👉 This / That / These / Those</h3>
            <p>Chỉ sự vật theo khoảng cách (gần/xa) và số lượng (ít/nhiều).</p>
            <table><tr><th></th><th>Gần</th><th>Xa</th></tr>
            <tr><td>Số ít</td><td>this</td><td>that</td></tr>
            <tr><td>Số nhiều</td><td>these</td><td>those</td></tr></table>`,
        detail: `<h3>📚 Hai chức năng</h3>
            <ul><li><strong>Định ngữ</strong> (đứng trước N): <em>this book, those people</em></li>
            <li><strong>Đại từ độc lập</strong> (thay N): <em>This is mine. That was great.</em></li></ul>
            <h4>Khoảng cách thời gian / cảm xúc</h4>
            <ul><li><em>this morning</em> = sáng nay (hôm nay)</li>
            <li><em>that morning</em> = sáng hôm đó (đã qua)</li>
            <li><em>those days</em> = ngày xưa (xa, hoài niệm)</li></ul>`,
        advanced: `<h3>🎯 Discourse use</h3>
            <ul><li><strong>that</strong> → quay lại điều vừa nói: <em>He was rude. That made me angry.</em></li>
            <li><strong>this</strong> → giới thiệu điều sắp nói: <em>Listen to this: ...</em></li>
            <li>Trên điện thoại: <em>This is John (speaking).</em> — Who's that?</li>
            <li>Trang trọng (văn viết) — tránh dùng <em>this/that</em> mơ hồ; phải có antecedent rõ ràng.</li></ul>`
    },

    'anaphoric-reference': {
        icon: '🔗', title: 'Tham Chiếu Đại Từ', category: 'foundations', level: 'intermediate',
        connections: ['pronouns-possessives', 'pronoun-reference', 'demonstratives-deep'],
        simple: `<h3>🔗 Đại từ và tiền tố (Antecedent)</h3>
            <p>Mỗi đại từ phải có <strong>antecedent</strong> (danh từ nó thay thế) rõ ràng và đồng nhất về số/giống.</p>
            <div class="example-box">
                ✓ John saw Mary. <strong>He</strong> waved at <strong>her</strong>.<br>
                ❌ She told her friend she was sick. (ai bệnh?)
            </div>`,
        detail: `<h3>📚 4 vấn đề phổ biến</h3>
            <ol><li><strong>Mơ hồ:</strong> hai antecedent có thể hợp lý → đổi câu.</li>
            <li><strong>Antecedent xa:</strong> đại từ cách quá xa N → người đọc lạc.</li>
            <li><strong>Không khớp số:</strong> <em>Each student should bring their book</em> — nay được chấp nhận rộng rãi như <em>singular they</em>; một số văn bản pháp lý cũ vẫn thích <em>his or her</em>.</li>
            <li><strong>Không có antecedent:</strong> <em>In the article, it says...</em> ❌ → <em>The article says...</em> ✓</li></ol>`,
        advanced: `<h3>🎯 Anaphoric, Cataphoric & Generic Reference</h3>
            <ul><li><strong>Anaphoric</strong>: danh từ xuất hiện trước, đại từ quay lại nó — <em>John said <strong>he</strong> was tired.</em></li>
            <li><strong>Cataphoric</strong>: đại từ xuất hiện trước, danh từ thật đến sau — <em>When <strong>she</strong> arrived, Mary smiled.</em> Cách này tạo chờ đợi, hợp với mở đầu truyện hoặc văn giàu nhịp điệu.</li>
            <li><strong>Generic reference</strong>: <em>They say...</em>, <em>You never know.</em>, <em>It seems...</em> dùng khi không nêu cụ thể người làm/nguồn nói.</li>
            <li><strong>Singular they</strong>: tự nhiên nhất khi giới tính chưa biết hoặc không muốn nhấn giới tính — <em>If anyone calls, tell them I'll ring back.</em></li></ul>
            <p><strong>Nguyên tắc:</strong> nếu cataphoric reference hoặc generic pronoun làm người đọc phải dừng lại đoán nghĩa, hãy lặp lại danh từ thay vì cố dùng đại từ.</p>`
    },

    'apposition': {
        icon: '🪢', title: 'Apposition (Đồng Vị Ngữ)', category: 'foundations', level: 'intermediate',
        connections: ['relative-clauses', 'punctuation-deep'],
        simple: `<h3>🪢 Đồng vị ngữ</h3>
            <p>Hai cụm danh từ đứng cạnh nhau cùng chỉ một đối tượng.</p>
            <div class="example-box">
                • My brother <strong>Tom</strong> is here.<br>
                • Robert Frost, <strong>the famous poet</strong>, wrote...
            </div>`,
        detail: `<h3>📚 Hai loại</h3>
            <ul><li><strong>Restrictive</strong> (không phẩy) — bắt buộc để xác định: <em>The poet Robert Frost</em> (có nhiều nhà thơ).</li>
            <li><strong>Non-restrictive</strong> (có phẩy) — thông tin thêm: <em>Robert Frost, the poet, ...</em> (chỉ có 1 RF).</li></ul>
            <p>Quy tắc dấu phẩy giống mệnh đề quan hệ.</p>`,
        advanced: `<h3>🎯 Cấu trúc cao cấp</h3>
            <ul><li><em>The city of Paris</em> (apposition của + danh từ riêng).</li>
            <li>Nominalizing apposition: <em>His ambition, to become a doctor, was clear.</em></li>
            <li>Trong văn báo chí: <em>Bill Gates, founder of Microsoft, said...</em></li></ul>`
    },

    'gender-neutral-grammar': {
        icon: '🧑', title: 'Gender-neutral Grammar', category: 'foundations', level: 'advanced',
        connections: ['anaphoric-reference', 'pronouns-possessives', 'grammar-registers'],
        simple: `<h3>🧑 Ngữ pháp trung tính về giới</h3>
            <p>Tiếng Anh hiện đại ưu tiên cách diễn đạt <strong>không mặc định giới tính</strong>, nhất là trong email công việc, tài liệu công ty và văn học thuật.</p>
            <div class="example-box">
                • <em>If a student has a question, <strong>they</strong> should ask the teacher.</em><br>
                • <em>chairperson / chair</em> thay cho <em>chairman</em><br>
                • <em>firefighter</em> thay cho <em>fireman</em>
            </div>`,
        detail: `<h3>📚 3 chiến lược tự nhiên nhất</h3>
            <table><tr><th>Chiến lược</th><th>Ví dụ cũ</th><th>Phiên bản tự nhiên hơn</th></tr>
            <tr><td>Singular they</td><td>Each employee must submit <em>his or her</em> form.</td><td>Each employee must submit <em>their</em> form.</td></tr>
            <tr><td>Viết lại số nhiều</td><td>Each customer should check <em>his</em> receipt.</td><td>Customers should check <em>their</em> receipts.</td></tr>
            <tr><td>Dùng danh từ trung tính</td><td>policeman, stewardess</td><td>police officer, flight attendant</td></tr></table>`,
        advanced: `<h3>🎯 Lưu ý dùng thật chính xác</h3>
            <ul><li><strong>Singular they + plural verb</strong>: <em>Someone left their umbrella. They <strong>were</strong> in a hurry.</em></li>
            <li><strong>Reflexive</strong>: <em>themself</em> có xuất hiện, nhưng <em>themselves</em> vẫn an toàn hơn trong đa số kỳ thi và tài liệu chuẩn.</li>
            <li>Đừng biến mọi câu thành công thức nặng nề kiểu <em>he/she</em> nếu mục tiêu là viết tự nhiên, hiện đại.</li>
            <li>Khi chủ thể đã tự xưng rõ pronouns, hãy theo đúng cách họ dùng.</li></ul>`
    },

    'word-formation': {
        icon: '🧬', title: 'Cấu Tạo Từ', category: 'foundations', level: 'intermediate',
        connections: ['parts-of-speech', 'spelling-rules', 'collocations-pairs'],
        simple: `<h3>🧬 Prefix + Root + Suffix</h3>
            <p>Tiếng Anh tạo từ mới qua 4 cách: <strong>tiền tố, hậu tố, ghép từ, chuyển loại</strong>.</p>
            <div class="example-box">
                un + happy + ness → unhappiness<br>
                modern + ize → modernize<br>
                black + board → blackboard<br>
                email (n) → to email (v)
            </div>`,
        detail: `<h3>📚 Prefixes phổ biến</h3>
            <ul><li><strong>Phủ định:</strong> un-, in-/im-/il-/ir-, dis-, non-, mis-</li>
            <li><strong>Số:</strong> mono-, bi-, tri-, multi-</li>
            <li><strong>Mức độ:</strong> over-, under-, super-, hyper-</li>
            <li><strong>Thời gian:</strong> pre-, post-, re-</li>
            <li><strong>Vị trí:</strong> sub-, inter-, trans-, ex-</li></ul>
            <h4>Suffixes — đổi từ loại</h4>
            <ul><li>→ N: -tion, -ment, -ness, -ity, -er/-or, -ist, -ism</li>
            <li>→ V: -ize, -ify, -en, -ate</li>
            <li>→ Adj: -able, -ful, -less, -ous, -ive, -ish, -al</li>
            <li>→ Adv: -ly, -ward(s), -wise</li></ul>`,
        advanced: `<h3>🎯 Compounding & Conversion</h3>
            <ul><li><strong>Compound 3 dạng vết:</strong> closed (firefighter), hyphenated (mother-in-law), open (high school).</li>
            <li><strong>Số đếm + N hyphen:</strong> a five-year-old boy (số nhiều mất "s").</li>
            <li><strong>Conversion N→V:</strong> to email, to Google, to text, to friend.</li>
            <li><strong>Stress shift:</strong> PREsent (n) vs preSENT (v).</li></ul>`
    },

    'collocations-pairs': {
        icon: '🤝', title: 'Collocations & Confusing Pairs', category: 'foundations', level: 'intermediate',
        connections: ['word-formation', 'phrasal-verbs', 'verb-patterns'],
        simple: `<h3>🤝 Từ thường đi đôi</h3>
            <p>Collocations là sự kết hợp tự nhiên giữa các từ. Học theo cụm sẽ tự nhiên hơn học từng từ.</p>
            <div class="example-box">
                make a decision (KHÔNG do a decision)<br>
                do homework (KHÔNG make homework)<br>
                heavy traffic, strong coffee, fast food
            </div>`,
        detail: `<h3>📚 Make vs Do (bẫy lớn)</h3>
            <ul><li><strong>make</strong>: a decision, mistake, noise, effort, money, coffee, dinner, bed, friends, plan</li>
            <li><strong>do</strong>: homework, laundry, dishes, business, exercise, shopping, a favor, your best</li></ul>
            <h4>Confusing pairs</h4>
            <table><tr><th>Sai</th><th>Đúng</th><th>Ghi chú</th></tr>
            <tr><td>it's car</td><td>its car</td><td>its = sở hữu</td></tr>
            <tr><td>then better</td><td>than better</td><td>than = so sánh</td></tr>
            <tr><td>affect (n)</td><td>effect (n)</td><td>affect = v, effect = n</td></tr>
            <tr><td>loose money</td><td>lose money</td><td>lose = mất, loose = lỏng</td></tr>
            <tr><td>between us all</td><td>among us all</td><td>between (2), among (3+)</td></tr>
            <tr><td>less books</td><td>fewer books</td><td>fewer + đếm được</td></tr></table>`,
        advanced: `<h3>🎯 Patterns nâng cao</h3>
            <ul><li><strong>Adv + Adj</strong>: highly recommended, deeply sorry, fully aware, well aware</li>
            <li><strong>V + Adv</strong>: rain heavily, work hard, study deeply</li>
            <li><strong>V + Prep fixed</strong>: depend on, listen to, look at, wait for, agree with, apologize for, complain about</li>
            <li><strong>N + N</strong>: traffic jam, climate change, business plan</li>
            <li><strong>Idiom dạng V + N</strong>: take a chance, break a record, set an example, raise concerns</li></ul>
            <h4>📚 Collocations theo chủ đề</h4>
            <table><tr><th>Chủ đề</th><th>Cụm nên học</th></tr>
            <tr><td>Writing học thuật</td><td>conduct research, draw a conclusion, reach a consensus, pose a threat, play a crucial role</td></tr>
            <tr><td>Công việc</td><td>meet a deadline, take responsibility, gain experience, launch a project, hold a meeting</td></tr>
            <tr><td>Speaking hằng ngày</td><td>make friends, catch a bus, have a nap, get dressed, pay by card</td></tr>
            <tr><td>Vấn đề xã hội</td><td>raise awareness, tackle poverty, reduce emissions, break the law, bear responsibility</td></tr></table>
            <p><strong>Chiến lược học:</strong> học theo <em>chunk</em> hoàn chỉnh thay vì học từng từ lẻ. Ví dụ nhớ luôn <em>take responsibility for</em>, không chỉ nhớ mỗi <em>responsibility</em>.</p>`
    },

    'semantic-prosody': {
        icon: '🌫️', title: 'Semantic Prosody', category: 'foundations', level: 'advanced',
        connections: ['collocations-pairs', 'phrasal-verbs', 'grammar-registers'],
        simple: `<h3>🌫️ Nghĩa hàm ẩn do từ hay đi kèm</h3>
            <p><strong>Semantic prosody</strong> là "màu cảm xúc" mà một từ có được vì nó thường đi với ngữ cảnh tích cực, tiêu cực hoặc trung tính.</p>
            <div class="example-box">
                • <em>cause</em> thường đi với điều xấu: <em>cause damage / cause problems</em><br>
                • <em>spark</em> thường đi với điều tích cực hoặc trung tính: <em>spark interest / spark debate</em><br>
                • <em>be bent on</em> thường mang sắc thái tiêu cực: <em>bent on revenge</em>
            </div>`,
        detail: `<h3>📚 Một số mẫu rất hay gặp</h3>
            <table><tr><th>Từ / cụm</th><th>Prosody thường gặp</th><th>Ví dụ</th></tr>
            <tr><td>cause</td><td>tiêu cực</td><td>cause harm, cause concern, cause disruption</td></tr>
            <tr><td>set in</td><td>tiêu cực</td><td>decay set in, panic set in</td></tr>
            <tr><td>provide</td><td>tích cực / trung tính</td><td>provide support, provide evidence</td></tr>
            <tr><td>commitment to</td><td>tích cực</td><td>a commitment to quality, equality, reform</td></tr>
            <tr><td>bent on</td><td>thường tiêu cực</td><td>bent on destroying, bent on revenge</td></tr></table>`,
        advanced: `<h3>🎯 Vì sao người học cần biết</h3>
            <ul><li>Hai từ gần nghĩa trong từ điển vẫn có thể cho cảm giác rất khác trong thực tế.</li>
            <li>Semantic prosody giúp tránh các câu "đúng từ điển nhưng sai sắc thái", ví dụ <em>cause improvements</em> nghe kém tự nhiên hơn <em>bring about improvements</em>.</li>
            <li>Trong writing, chọn đúng prosody giúp giọng văn tinh hơn: <em>trigger concern</em>, <em>pose a threat</em>, <em>deliver benefits</em>.</li>
            <li>Prosody không tuyệt đối 100%, nhưng nếu một từ cứ lặp đi lặp lại trong ngữ cảnh xấu/tốt thì người bản ngữ sẽ cảm nhận được màu đó.</li></ul>`
    },

    'auxiliary-system': {
        icon: '🛠️', title: 'Auxiliary System (Be / Do / Have)', category: 'foundations', level: 'beginner',
        connections: ['question-forms', 'negatives', 'present-perfect', 'passive-voice'],
        simple: `<h3>🛠️ Trợ động từ là khung kỹ thuật của câu</h3>
            <p><strong>Be, do, have</strong> giúp tiếng Anh tạo câu hỏi, phủ định, thì hoàn thành, tiếp diễn, bị động và nhấn mạnh.</p>
            <div class="formula-box">
                Be + V-ing / V3<br>
                Have + V3<br>
                Do + bare verb
            </div>`,
        detail: `<h3>📚 Vai trò chính</h3>
            <table><tr><th>Auxiliary</th><th>Chức năng</th><th>Ví dụ</th></tr>
            <tr><td>be</td><td>continuous / passive</td><td>She is working. / It was built.</td></tr>
            <tr><td>have</td><td>perfect</td><td>They have left.</td></tr>
            <tr><td>do</td><td>question / negative / emphasis</td><td>Do you agree? / I don't know. / I do agree.</td></tr>
            <tr><td>modal</td><td>modality</td><td>can, must, should, might...</td></tr></table>
            <p><strong>Do-support</strong> xuất hiện khi câu không có be, modal hoặc auxiliary khác: <em>Did she call?</em>, <em>She didn't call.</em></p>`,
        advanced: `<h3>🎯 NICE properties</h3>
            <ul><li><strong>Negation:</strong> auxiliaries nhận <em>not</em>: <em>cannot, isn't, haven't</em>.</li>
            <li><strong>Inversion:</strong> auxiliaries đảo lên trước chủ ngữ trong câu hỏi: <em>Has she arrived?</em></li>
            <li><strong>Code:</strong> thay thế phần verb phrase: <em>She can swim and I can too.</em></li>
            <li><strong>Emphasis:</strong> nhấn mạnh bằng aux: <em>I do want to help.</em></li>
            <li>Hiểu auxiliary system giúp nối các mảng tưởng rời rạc như question, negation, tense, passive và ellipsis thành một hệ thống.</li></ul>`
    },

    'verb-types-transitivity': {
        icon: '⚙️', title: 'Verb Types & Transitivity', category: 'foundations', level: 'intermediate',
        connections: ['verbs-overview', 'direct-indirect-objects', 'sentence-patterns-complements', 'verb-complementation'],
        simple: `<h3>⚙️ Động từ quyết định câu cần gì phía sau</h3>
            <p>Mỗi động từ có <strong>valency</strong>: nó cần không, một, hai hay nhiều thành phần để câu đủ nghĩa.</p>
            <div class="example-box">
                • <em>Sleep</em> không cần object: The baby slept.<br>
                • <em>Open</em> cần object: She opened the door.<br>
                • <em>Give</em> thường cần hai object: He gave me a key.
            </div>`,
        detail: `<h3>📚 Các loại verb chính</h3>
            <table><tr><th>Loại</th><th>Mẫu</th><th>Ví dụ</th></tr>
            <tr><td>Intransitive</td><td>S + V</td><td>The child laughed.</td></tr>
            <tr><td>Transitive</td><td>S + V + O</td><td>She wrote a letter.</td></tr>
            <tr><td>Ditransitive</td><td>S + V + IO + DO</td><td>They sent us an email.</td></tr>
            <tr><td>Linking</td><td>S + V + subject complement</td><td>The soup tastes good.</td></tr>
            <tr><td>Complex transitive</td><td>S + V + O + object complement</td><td>They elected him president.</td></tr></table>`,
        advanced: `<h3>🎯 Ambitransitive verbs</h3>
            <ul><li>Nhiều verb dùng được cả transitive và intransitive: <em>She opened the door</em> / <em>The door opened</em>.</li>
            <li>Một số verb đổi nghĩa khi đổi transitivity: <em>run a company</em> khác <em>run fast</em>.</li>
            <li>Trong academic grammar, transitivity không chỉ là "có object hay không" mà là cách clause mã hóa participant, action, process và responsibility.</li></ul>`
    },

    'sentence-patterns-complements': {
        icon: '🧱', title: 'Basic Sentence Patterns & Complements', category: 'foundations', level: 'beginner',
        connections: ['sentence-order', 'verb-types-transitivity', 'subject-complement-object-complement'],
        simple: `<h3>🧱 5 mẫu câu nền</h3>
            <p>Nếu nắm chắc 5 mẫu này, bạn có thể kiểm tra gần như mọi câu tiếng Anh cơ bản.</p>
            <div class="formula-box">
                S + V<br>S + V + O<br>S + V + C<br>S + V + IO + DO<br>S + V + O + C
            </div>`,
        detail: `<h3>📚 Ví dụ từng mẫu</h3>
            <table><tr><th>Mẫu</th><th>Ví dụ</th><th>Điểm nhớ</th></tr>
            <tr><td>S + V</td><td>Birds fly.</td><td>verb tự đủ nghĩa</td></tr>
            <tr><td>S + V + O</td><td>She likes music.</td><td>object nhận hành động</td></tr>
            <tr><td>S + V + C</td><td>He became a doctor.</td><td>complement mô tả subject</td></tr>
            <tr><td>S + V + IO + DO</td><td>She gave me advice.</td><td>ai nhận + nhận cái gì</td></tr>
            <tr><td>S + V + O + C</td><td>They made him angry.</td><td>complement mô tả object</td></tr></table>`,
        advanced: `<h3>🎯 Complement không phải modifier</h3>
            <ul><li><strong>Complement</strong> là phần verb hoặc noun/adj cần để đủ nghĩa: <em>depend on you</em>, <em>aware of this</em>.</li>
            <li><strong>Modifier</strong> là phần thêm thông tin và thường bỏ được: <em>yesterday, in the room, very quickly</em>.</li>
            <li>Phân biệt complement/modifier giúp tránh câu thiếu thành phần và giúp đọc câu dài chính xác hơn.</li></ul>`
    },

    'subject-complement-object-complement': {
        icon: '🎯', title: 'Subject & Object Complements', category: 'structures', level: 'intermediate',
        connections: ['sentence-patterns-complements', 'verbs-overview', 'adjectives-adverbs'],
        simple: `<h3>🎯 Complement hoàn tất nghĩa cho subject hoặc object</h3>
            <p><strong>Subject complement</strong> nói thêm chủ ngữ sau linking verb. <strong>Object complement</strong> nói thêm object sau động từ.</p>
            <div class="example-box">
                • She is <strong>kind</strong>. / He became <strong>a teacher</strong>.<br>
                • They painted the wall <strong>blue</strong>.<br>
                • We consider him <strong>reliable</strong>.
            </div>`,
        detail: `<h3>📚 Linking verbs và object complement</h3>
            <ul><li>Linking verbs: <em>be, become, seem, appear, look, sound, smell, taste, feel, remain, grow, turn</em>.</li>
            <li>Subject complement có thể là adjective, noun phrase hoặc prepositional phrase: <em>She is ready / a doctor / in trouble</em>.</li>
            <li>Object complement thường đi sau verbs như <em>make, keep, find, call, consider, elect, paint</em>.</li></ul>`,
        advanced: `<h3>🎯 Lỗi hay gặp</h3>
            <ul><li>Sau linking verb dùng adjective, không dùng adverb: <em>The soup tastes good</em>, không phải <em>well</em> nếu nói vị.</li>
            <li><em>Make someone do</em> khác <em>make someone happy</em>: một bên là bare infinitive, một bên là object complement.</li>
            <li>Object complement giải thích các cấu trúc như <em>leave the door open</em>, <em>keep me informed</em>, <em>find it difficult</em>.</li></ul>`
    },

    'adjective-complements': {
        icon: '🎨', title: 'Adjective Complements', category: 'structures', level: 'intermediate',
        connections: ['adjectives-adverbs', 'prepositional-phrases', 'noun-clauses', 'gerunds-infinitives'],
        simple: `<h3>🎨 Nhiều tính từ cần phần bổ sung phía sau</h3>
            <p>Không chỉ nói <em>afraid</em>, <em>interested</em>, <em>ready</em>; nhiều adjective cần preposition, infinitive hoặc clause để đủ nghĩa.</p>
            <div class="example-box">
                afraid of spiders · ready to leave · aware that this matters
            </div>`,
        detail: `<h3>📚 Các mẫu chính</h3>
            <table><tr><th>Mẫu</th><th>Ví dụ</th></tr>
            <tr><td>Adj + preposition + noun/V-ing</td><td>interested in music / interested in learning</td></tr>
            <tr><td>Adj + to-infinitive</td><td>ready to start, likely to fail, easy to understand</td></tr>
            <tr><td>Adj + that-clause</td><td>sure that he is right, aware that it changed</td></tr>
            <tr><td>It + be + adj + clause</td><td>It is important that we act.</td></tr></table>`,
        advanced: `<h3>🎯 Tough movement và extraposition</h3>
            <ul><li><em>This book is easy to read</em> nghĩa là "read this book", dù subject không tự làm hành động.</li>
            <li><em>It is likely that she will win</em> có thể tương ứng với <em>She is likely to win</em>.</li>
            <li>Mỗi adjective có pattern riêng: <em>responsible for</em>, <em>capable of</em>, <em>keen on</em>, <em>eager to</em>, <em>aware of/that</em>.</li></ul>`
    },

    'adverb-types-position': {
        icon: '🧭', title: 'Adverb Types & Position', category: 'patterns', level: 'intermediate',
        connections: ['adjectives-adverbs', 'adverb-placement-focus', 'sentence-stress'],
        simple: `<h3>🧭 Trạng từ có nhiều loại, không chỉ "một cách..."</h3>
            <p>Adverbs có thể chỉ cách thức, nơi chốn, thời gian, tần suất, mức độ, thái độ và liên kết ý.</p>
            <div class="example-box">
                carefully · here · yesterday · often · very · frankly · however
            </div>`,
        detail: `<h3>📚 Vị trí thường gặp</h3>
            <table><tr><th>Loại</th><th>Vị trí thường dùng</th><th>Ví dụ</th></tr>
            <tr><td>Manner</td><td>cuối câu</td><td>She spoke clearly.</td></tr>
            <tr><td>Frequency</td><td>trước verb chính, sau be</td><td>She often reads. / She is often late.</td></tr>
            <tr><td>Degree</td><td>trước adj/adv</td><td>very good, quite slowly</td></tr>
            <tr><td>Stance</td><td>đầu câu / giữa câu</td><td>Frankly, I disagree.</td></tr>
            <tr><td>Linking</td><td>đầu câu hoặc giữa câu</td><td>However, this failed.</td></tr></table>`,
        advanced: `<h3>🎯 Order cuối câu</h3>
            <ul><li>Thứ tự mặc định: <strong>manner + place + time</strong>: <em>She sang beautifully at the concert last night.</em></li>
            <li>Đưa adverb lên đầu thường để framing hoặc contrast: <em>Last night, she sang beautifully.</em></li>
            <li>Focusing adverbs như <em>only, even, just, almost</em> phải đặt sát phần được nhấn để tránh đổi nghĩa.</li></ul>`
    },

    'preposition-system': {
        icon: '📍', title: 'Preposition System', category: 'foundations', level: 'intermediate',
        connections: ['prepositions', 'prepositional-phrases', 'phrasal-prepositions', 'time-prepositions-deep'],
        simple: `<h3>📍 Giới từ tạo quan hệ giữa các ý</h3>
            <p>Prepositions không chỉ là <em>in/on/at</em>; chúng tạo quan hệ về thời gian, nơi chốn, hướng, nguyên nhân, phương tiện, chủ đề và ngoại lệ.</p>
            <div class="example-box">
                at the station · in June · by train · because of rain · with care · about grammar
            </div>`,
        detail: `<h3>📚 Nhóm quan hệ chính</h3>
            <table><tr><th>Nhóm</th><th>Ví dụ</th><th>Gợi nghĩa</th></tr>
            <tr><td>Place</td><td>at, in, on, under, between</td><td>vị trí</td></tr>
            <tr><td>Time</td><td>at, on, in, by, until, since, for</td><td>mốc/khoảng thời gian</td></tr>
            <tr><td>Movement</td><td>to, into, onto, through, across</td><td>hướng và đường đi</td></tr>
            <tr><td>Cause/Reason</td><td>because of, due to, from</td><td>nguyên nhân</td></tr>
            <tr><td>Means/Agent</td><td>by, with</td><td>phương tiện/tác nhân/công cụ</td></tr></table>`,
        advanced: `<h3>🎯 Complement hay adjunct</h3>
            <ul><li>Một số prepositional phrases là complement bắt buộc: <em>depend on you</em>, <em>interested in music</em>.</li>
            <li>Một số chỉ là adjunct thêm thông tin: <em>She read in the library</em>.</li>
            <li>Preposition stranding tự nhiên trong văn nói: <em>Who are you talking to?</em>; fronting trang trọng hơn: <em>To whom are you speaking?</em></li></ul>`
    },

    'infinitive-purposes': {
        icon: '🎯', title: 'Infinitive of Purpose & Result', category: 'patterns', level: 'beginner',
        connections: ['gerunds-infinitives', 'result-structures', 'verb-patterns'],
        simple: `<h3>🎯 To-V thường nói mục đích</h3>
            <p>Dùng <strong>to + V</strong> để trả lời "để làm gì".</p>
            <div class="example-box">
                I went to the shop <strong>to buy</strong> milk.<br>
                She called me <strong>to ask</strong> for help.
            </div>`,
        detail: `<h3>📚 Các biến thể</h3>
            <ul><li><strong>in order to / so as to</strong>: trang trọng hơn <em>to</em>.</li>
            <li>Phủ định: <em>in order not to</em>, <em>so as not to</em>: <em>She whispered so as not to wake the baby.</em></li>
            <li><strong>too + adj + to-V</strong>: quá... để: <em>too tired to work</em>.</li>
            <li><strong>adj + enough + to-V</strong>: đủ... để: <em>old enough to vote</em>.</li></ul>`,
        advanced: `<h3>🎯 Purpose vs result</h3>
            <ul><li><em>He worked hard to pass the exam</em> = mục đích.</li>
            <li><em>He lived to see his grandchildren grow up</em> = kết quả cuối cùng trong đời.</li>
            <li>Không dùng <em>for to</em>: ❌ <em>I came for to help</em> → ✓ <em>I came to help</em>.</li></ul>`
    },

    'participle-adjectives': {
        icon: '🪶', title: '-ing / -ed Participial Adjectives', category: 'foundations', level: 'intermediate',
        connections: ['adjectives-adverbs', 'participle-clauses', 'passive-voice'],
        simple: `<h3>🪶 Boring hay bored?</h3>
            <p><strong>-ing</strong> mô tả thứ gây cảm xúc. <strong>-ed</strong> mô tả người/vật nhận cảm xúc.</p>
            <div class="example-box">
                The movie is boring. I am bored.<br>
                The news was shocking. We were shocked.
            </div>`,
        detail: `<h3>📚 Cặp thường gặp</h3>
            <table><tr><th>-ing</th><th>-ed</th></tr>
            <tr><td>interesting</td><td>interested</td></tr>
            <tr><td>exciting</td><td>excited</td></tr>
            <tr><td>confusing</td><td>confused</td></tr>
            <tr><td>frightening</td><td>frightened</td></tr>
            <tr><td>disappointing</td><td>disappointed</td></tr></table>`,
        advanced: `<h3>🎯 Liên hệ với voice và aspect</h3>
            <ul><li><strong>-ing</strong> thường có nghĩa active/causing: <em>a developing country</em>, <em>a falling leaf</em>.</li>
            <li><strong>-ed/V3</strong> thường có nghĩa passive/result: <em>a broken window</em>, <em>a written report</em>.</li>
            <li>Một số từ cố định không đối xứng hoàn toàn: <em>learned professor</em>, <em>beloved friend</em>.</li></ul>`
    },

    /* ========== TENSES ========== */

    'stative-verbs': {
        icon: '⛰️', title: 'Stative vs Dynamic Verbs', category: 'tenses', level: 'intermediate',
        connections: ['present-continuous', 'present-perfect-continuous'],
        simple: `<h3>⛰️ Động từ trạng thái — KHÔNG dùng V-ing</h3>
            <p>Một số động từ mô tả trạng thái tĩnh, không thể "đang xảy ra".</p>
            <div class="example-box">
                ❌ I am loving this song. → ✓ I love this song.<br>
                ❌ I'm understanding now. → ✓ I understand now.
            </div>`,
        detail: `<h3>📚 4 nhóm stative</h3>
            <ul><li><strong>Cảm xúc/suy nghĩ:</strong> love, like, hate, want, need, prefer, believe, know, understand, remember, forget, mean</li>
            <li><strong>Sở hữu/tồn tại:</strong> have (sở hữu), own, possess, belong, contain, consist, exist</li>
            <li><strong>Giác quan:</strong> see, hear, smell, taste, feel</li>
            <li><strong>Đo lường/đánh giá:</strong> seem, appear, look, sound, weigh, cost, measure</li></ul>`,
        advanced: `<h3>🎯 Khi stative verb lại dùng được ở tiếp diễn</h3>
            <table><tr><th>Verb</th><th>Stative</th><th>Dynamic / special meaning</th></tr>
            <tr><td>have</td><td>sở hữu — I have a car</td><td>trải nghiệm / ăn uống — I'm having lunch</td></tr>
            <tr><td>think</td><td>cho rằng — I think you're right</td><td>đang cân nhắc — I'm thinking about it</td></tr>
            <tr><td>see</td><td>nhìn / hiểu — I see the point</td><td>gặp ai / hẹn — I'm seeing the dentist tomorrow</td></tr>
            <tr><td>taste / smell / feel</td><td>có vị / mùi / cảm giác — The soup tastes great</td><td>hành động nếm / ngửi / sờ — I'm tasting the soup</td></tr>
            <tr><td>be</td><td>bản chất — He is rude</td><td>hành vi tạm thời — He is being rude</td></tr></table>
            <ul><li><strong>Continuous</strong> thường báo hiệu tính <strong>tạm thời, đang phát triển, hoặc sắc thái cảm xúc</strong>, chứ không chỉ đơn giản là "đúng/sai".</li>
            <li><em>You're being silly</em> phê bình hành vi lúc này, không kết luận con người đó luôn như vậy.</li>
            <li><em>I'm loving this course</em>, <em>We're really enjoying this</em> có thể nghe tự nhiên trong khẩu ngữ/quảng cáo để tăng cảm xúc, nhưng không phải mẫu an toàn nhất cho bài thi ngữ pháp cơ bản.</li></ul>`
    },

    'will-vs-going-to': {
        icon: '🎯', title: 'Will vs Be Going To', category: 'tenses', level: 'beginner',
        connections: ['future-simple', 'near-future', 'future-continuous'],
        simple: `<h3>🎯 Hai cách nói tương lai</h3>
            <ul><li><strong>will</strong> → quyết định ngay lúc nói, dự đoán dựa trên ý kiến, hứa hẹn.</li>
            <li><strong>be going to</strong> → kế hoạch đã quyết trước, dự đoán từ dấu hiệu hiện tại.</li></ul>`,
        detail: `<h3>📚 So sánh tình huống</h3>
            <table><tr><th>Tình huống</th><th>Dùng</th><th>Ví dụ</th></tr>
            <tr><td>Quyết định tức thì</td><td>will</td><td>The phone rings → I'll get it!</td></tr>
            <tr><td>Kế hoạch trước</td><td>going to</td><td>I'm going to study abroad next year.</td></tr>
            <tr><td>Dự đoán có dấu hiệu</td><td>going to</td><td>Look at clouds! It's going to rain.</td></tr>
            <tr><td>Dự đoán ý kiến</td><td>will</td><td>I think it will be sunny tomorrow.</td></tr>
            <tr><td>Lời hứa</td><td>will</td><td>I will always love you.</td></tr>
            <tr><td>Đề nghị/yêu cầu</td><td>will</td><td>Will you help me?</td></tr></table>`,
        advanced: `<h3>🎯 4 cách nói tương lai khác</h3>
            <ul><li><strong>Present Continuous</strong> → kế hoạch chắc chắn, có sắp xếp: <em>I'm meeting her at 5pm.</em></li>
            <li><strong>Present Simple</strong> → lịch trình cố định: <em>The train leaves at 7.</em></li>
            <li><strong>be about to + V</strong> → sắp ngay tức thì: <em>The film is about to start.</em></li>
            <li><strong>be to + V</strong> → trang trọng, kế hoạch hoặc mệnh lệnh: <em>The President is to visit Hanoi.</em></li>
            <li><strong>be due to + V</strong> → dự kiến theo lịch: <em>The plane is due to land at 8.</em></li></ul>`
    },

    'narrative-present': {
        icon: '📖', title: 'Narrative / Historical Present', category: 'tenses', level: 'advanced',
        connections: ['present-simple', 'sequence-of-tenses'],
        simple: `<h3>📖 Hiện tại kể chuyện quá khứ</h3>
            <p>Dùng Present Simple để kể chuyện quá khứ giúp tăng độ sống động — phổ biến trong báo chí, tóm tắt phim, kể chuyện hài.</p>`,
        detail: `<h3>📚 Khi nào</h3>
            <ul><li><strong>Tin tức:</strong> "President signs new law." (thay vì signed)</li>
            <li><strong>Tóm tắt phim/sách:</strong> "Romeo meets Juliet at the ball."</li>
            <li><strong>Kể chuyện hài:</strong> "So I walk in, and he says..."</li>
            <li><strong>Hướng dẫn từng bước:</strong> "First, you open the file..."</li>
            <li><strong>Bình luận thể thao trực tiếp:</strong> "Messi passes to Suarez, who shoots and scores!"</li></ul>`,
        advanced: `<h3>🎯 Lưu ý</h3>
            <ul><li>Trong văn học, dùng Present để tạo cảm giác "đang xảy ra" trước mắt độc giả.</li>
            <li>Có thể chuyển qua lại giữa Present và Past — nhưng cần nhất quán trong cùng đoạn.</li>
            <li>Trong văn học thuật, KHÔNG dùng narrative present cho lịch sử (dùng Past).</li></ul>`
    },

    'semi-modals': {
        icon: '🎚️', title: 'Semi-modals (had better, would rather)', category: 'tenses', level: 'intermediate',
        connections: ['modal-verbs', 'modal-perfect', 'used-to'],
        simple: `<h3>🎚️ 4 semi-modal cốt lõi</h3>
            <ul><li><strong>had better + V</strong> → tốt hơn nên (cảnh báo)</li>
            <li><strong>would rather + V</strong> → thà... hơn (sở thích)</li>
            <li><strong>need (như modal)</strong> → cần (needn't / Need I?)</li>
            <li><strong>dare (như modal)</strong> → dám (Dare you ask?)</li></ul>`,
        detail: `<h3>📚 Cấu trúc</h3>
            <ul><li>You'd <strong>better</strong> leave now (or you'll be late).</li>
            <li>I'd <strong>rather</strong> stay home tonight.</li>
            <li>I'd rather <strong>you didn't smoke</strong> here. (would rather + S + V quá khứ)</li>
            <li>You <strong>needn't</strong> come early. = You don't need to come early.</li>
            <li>You <strong>needn't have</strong> brought a gift. (lỡ làm rồi)</li>
            <li><strong>Dare</strong> she ask? / How dare you!</li></ul>`,
        advanced: `<h3>🎯 So sánh nâng cao</h3>
            <ul><li><strong>had better</strong> mạnh hơn <em>should</em>, có hàm ý cảnh báo hậu quả.</li>
            <li>Phủ định: <em>You'd better not...</em> (KHÔNG "You hadn't better").</li>
            <li><strong>would rather + V (bare)</strong>: chính chủ ngữ làm.<br>
            <strong>would rather + S + V (past)</strong>: chủ ngữ khác làm.<br>
            <strong>would rather + S + had V3</strong>: tiếc nuối quá khứ.</li>
            <li><em>need</em> như modal chỉ dùng trong câu hỏi/phủ định; câu khẳng định dùng <em>need to + V</em>.</li></ul>`
    },

    /* ========== PATTERNS ========== */

    'yes-no-questions': {
        icon: '❔', title: 'Yes/No Questions', category: 'patterns', level: 'beginner',
        connections: ['wh-questions', 'embedded-questions', 'tag-questions'],
        simple: `<h3>❔ Câu hỏi có/không</h3>
            <div class="formula-box">Aux/Be + Subject + Verb ?</div>
            <ul><li>Are you tired? — Yes, I am.</li>
            <li>Can you swim? — Yes, I can.</li>
            <li>Do you like coffee? — No, I don't. (do-support)</li></ul>`,
        detail: `<h3>📚 Câu hỏi phủ định</h3>
            <p>Đặt câu hỏi phủ định khi <strong>kỳ vọng đáp án "có"</strong> hoặc <strong>thể hiện ngạc nhiên</strong>.</p>
            <ul><li><em>Don't you like it?</em> — kỳ vọng có thích.</li>
            <li><em>Aren't you cold?</em> — ngạc nhiên vì không cảm thấy lạnh.</li>
            <li><em>Haven't you finished yet?</em> — phê phán nhẹ.</li></ul>
            <h4>Trả lời ngắn (Short answers)</h4>
            <p>Dùng aux/be tương ứng:<br>
            • Do you...? — Yes, I do. / No, I don't.<br>
            • Are they...? — Yes, they are. / No, they aren't.<br>
            • Have you...? — Yes, I have. / No, I haven't.</p>`,
        advanced: `<h3>🎯 Question với "ever / never"</h3>
            <ul><li>Have you <strong>ever</strong> been to Paris? (kinh nghiệm bao giờ chưa)</li>
            <li>Did you <strong>ever</strong> meet him? (Mỹ, văn nói)</li></ul>
            <p>Trả lời "Have you ever?": Yes, I have / No, I haven't / No, never.</p>`
    },

    'wh-questions': {
        icon: '❓', title: 'Wh-Questions', category: 'patterns', level: 'beginner',
        connections: ['yes-no-questions', 'embedded-questions', 'question-forms'],
        simple: `<h3>❓ Wh-Questions</h3>
            <ul><li><strong>Hỏi về tân ngữ/ngữ cảnh</strong>: Wh + Aux + S + V? — <em>What did you eat?</em></li>
            <li><strong>Wh là chủ ngữ</strong>: Wh + V? — <em>Who broke it?</em> (KHÔNG do/did)</li></ul>`,
        detail: `<h3>📚 Bộ Wh đầy đủ</h3>
            <table><tr><th>Wh</th><th>Hỏi về</th><th>Ví dụ</th></tr>
            <tr><td>Who</td><td>người (chủ ngữ)</td><td>Who called?</td></tr>
            <tr><td>Whom</td><td>người (tân ngữ - trang trọng)</td><td>Whom did you see?</td></tr>
            <tr><td>Whose</td><td>của ai</td><td>Whose book is this?</td></tr>
            <tr><td>What</td><td>vật, sự việc</td><td>What is this?</td></tr>
            <tr><td>Which</td><td>cái nào (lựa chọn)</td><td>Which color?</td></tr>
            <tr><td>Where</td><td>nơi</td><td>Where do you live?</td></tr>
            <tr><td>When</td><td>thời gian</td><td>When did it happen?</td></tr>
            <tr><td>Why</td><td>lý do</td><td>Why are you late?</td></tr>
            <tr><td>How</td><td>cách thức</td><td>How did you do it?</td></tr>
            <tr><td>How + adj/adv</td><td>mức độ</td><td>How tall? How often?</td></tr>
            <tr><td>How much/many</td><td>số lượng</td><td>How much money?</td></tr></table>`,
        advanced: `<h3>🎯 Vị trí giới từ</h3>
            <ul><li>Văn nói: <em>Who are you talking <strong>to</strong>?</em></li>
            <li>Văn trang trọng: <em><strong>To whom</strong> are you talking?</em></li>
            <li>Câu hỏi modal-có-prep: <em>What are you looking <strong>at</strong>?</em></li></ul>`
    },

    'embedded-questions': {
        icon: '📦', title: 'Embedded / Indirect Questions', category: 'patterns', level: 'intermediate',
        connections: ['wh-questions', 'reported-speech', 'noun-clauses'],
        simple: `<h3>📦 Câu hỏi gián tiếp</h3>
            <p>Câu hỏi nằm bên trong một câu khác — <strong>KHÔNG đảo ngữ</strong>, không do/does/did.</p>
            <div class="example-box">
                ✓ Could you tell me where the bank <strong>is</strong>?<br>
                ❌ Could you tell me where <strong>is</strong> the bank?
            </div>`,
        detail: `<h3>📚 2 dạng</h3>
            <ul><li><strong>Yes/No</strong> → if / whether + S + V<br>
            <em>I wonder if she will come.</em></li>
            <li><strong>Wh</strong> → wh + S + V<br>
            <em>Do you know where he lives?</em></li></ul>
            <h4>Reporting verbs phổ biến</h4>
            <p>ask, wonder, want to know, can you tell me, do you know, I'm not sure</p>`,
        advanced: `<h3>🎯 Lịch sự bằng embedded</h3>
            <p>Câu hỏi trực tiếp đôi khi cộc lốc; embedded mềm hơn:</p>
            <ul><li>Where is the toilet? → <em>Could you tell me where the toilet is?</em></li>
            <li>What time is it? → <em>Do you know what time it is?</em></li>
            <li>How much is this? → <em>Would you mind telling me how much this is?</em></li></ul>`
    },

    'hedges-boosters': {
        icon: '🎚️', title: 'Hedges & Boosters', category: 'patterns', level: 'advanced',
        connections: ['discourse-markers', 'academic-style-grammar', 'politeness-indirectness'],
        simple: `<h3>🎚️ Làm mềm hoặc làm mạnh phát ngôn</h3>
            <p><strong>Hedges</strong> giúp nói thận trọng, mở đường cho ngoại lệ. <strong>Boosters</strong> giúp khẳng định mạnh hơn khi cần nhấn chắc chắn.</p>
            <div class="example-box">
                • <em>It is <strong>somewhat</strong> difficult to measure.</em><br>
                • <em>This <strong>clearly</strong> shows a trend.</em><br>
                • <em>He is <strong>probably</strong> right.</em> vs <em>He is <strong>absolutely</strong> right.</em>
            </div>`,
        detail: `<h3>📚 Hai nhóm chức năng</h3>
            <table><tr><th>Loại</th><th>Từ/cụm thường gặp</th><th>Tác dụng</th></tr>
            <tr><td>Hedges</td><td>perhaps, probably, somewhat, rather, relatively, tend to, seem to, appear to</td><td>giảm độ tuyệt đối, tăng tính thận trọng</td></tr>
            <tr><td>Boosters</td><td>clearly, definitely, certainly, indeed, undoubtedly, extremely, highly</td><td>tăng sức khẳng định và nhấn mạnh</td></tr></table>
            <p><strong>Academic writing</strong> thường thích hedges hơn câu quá tuyệt đối: <em>This may suggest...</em> tự nhiên hơn <em>This proves...</em> nếu bằng chứng chưa đủ mạnh.</p>`,
        advanced: `<h3>🎯 Dùng đúng sắc thái</h3>
            <ul><li><strong>Hedge</strong> không phải yếu đuối; nó cho thấy người viết hiểu giới hạn của dữ liệu và tránh overclaim.</li>
            <li><strong>Booster</strong> nên đi cùng bằng chứng chắc: <em>The results clearly indicate...</em></li>
            <li>Trộn nhiều hedge trong một câu sẽ làm câu mờ: <em>It seems somewhat rather likely...</em> nghe nặng và thiếu quyết đoán.</li>
            <li>Trong giao tiếp công việc, hedges như <em>might, perhaps, a bit, I think</em> giúp câu góp ý nghe mềm hơn.</li></ul>`
    },

    'politeness-indirectness': {
        icon: '🙏', title: 'Politeness & Indirectness', category: 'patterns', level: 'advanced',
        connections: ['embedded-questions', 'hedges-boosters', 'modal-verbs'],
        simple: `<h3>🙏 Lịch sự thường đi qua gián tiếp</h3>
            <p>Tiếng Anh không chỉ đúng ngữ pháp mà còn cần đúng <strong>mức độ trực tiếp</strong>. Cùng một yêu cầu, đổi cấu trúc sẽ đổi sắc thái.</p>
            <div class="example-box">
                • Direct: <em>Open the window.</em><br>
                • Neutral: <em>Can you open the window?</em><br>
                • Polite: <em>Could you open the window, please?</em><br>
                • Very soft: <em>I was wondering if you could open the window.</em>
            </div>`,
        detail: `<h3>📚 4 cách làm câu mềm hơn</h3>
            <ol><li><strong>Modal past</strong>: <em>could, would, might</em> nghe mềm hơn <em>can, will</em>.</li>
            <li><strong>Embedded question</strong>: <em>Could you tell me...?</em>, <em>Do you happen to know...?</em></li>
            <li><strong>Past progressive / past intention</strong>: <em>I was wondering if...</em>, <em>I wanted to ask whether...</em></li>
            <li><strong>Downtoners</strong>: <em>a bit, just, possibly</em> khi góp ý hoặc yêu cầu.</li></ol>`,
        advanced: `<h3>🎯 Pragmatics: đúng ngữ pháp chưa đủ</h3>
            <ul><li><em>Close the door.</em> đúng ngữ pháp nhưng có thể quá thẳng trong email hay môi trường công việc.</li>
            <li><em>Would you mind closing the door?</em> lịch sự, nhưng sau <em>mind</em> phải dùng V-ing.</li>
            <li>Khi từ chối, người bản ngữ hay dùng mở đầu mềm: <em>I'm afraid...</em>, <em>I'm not sure that's possible.</em>, <em>I'd rather not.</em></li>
            <li>Quá nhiều gián tiếp cũng có thể làm câu mơ hồ; hãy chọn mức lịch sự theo quan hệ, vai trò và bối cảnh.</li></ul>`
    },

    'negation-patterns': {
        icon: '🚫', title: 'Negation Patterns', category: 'patterns', level: 'intermediate',
        connections: ['negatives', 'inversion-negative', 'indefinite-pronouns'],
        simple: `<h3>🚫 Các cách phủ định</h3>
            <ul><li><strong>not</strong> sau aux/be: don't, isn't, can't, haven't</li>
            <li><strong>no + N</strong> mạnh hơn: <em>I have no idea.</em></li>
            <li><strong>none/nobody/nothing/never/nowhere</strong>: đại từ phủ định + V khẳng định</li>
            <li><strong>hardly/scarcely/barely</strong>: gần như không (= almost not)</li></ul>`,
        detail: `<h3>📚 No vs Not any</h3>
            <table><tr><th>Mạnh</th><th>Trung tính</th></tr>
            <tr><td>I have no money.</td><td>I don't have any money.</td></tr>
            <tr><td>There's no time.</td><td>There isn't any time.</td></tr></table>
            <h4>Hardly = phủ định</h4>
            <ul><li><em>I hardly ever go out.</em> (= almost never)</li>
            <li>Tag question theo phủ định: <em>You hardly know him, <strong>do you?</strong></em></li></ul>`,
        advanced: `<h3>🎯 Phạm vi phủ định (Scope)</h3>
            <ul><li><em>I don't think she will come.</em> ✓ (transferred negation — chuẩn)</li>
            <li><em>I think she won't come.</em> (đúng ngữ pháp nhưng ít tự nhiên)</li>
            <li>Áp dụng với: think, believe, suppose, expect, imagine, feel.</li></ul>
            <h4>Double negative — TRÁNH</h4>
            <p>❌ I don't know nothing → ✓ I don't know anything / I know nothing.<br>
            ❌ I haven't never → ✓ I have never / I haven't ever.</p>`
    },

    'information-flow': {
        icon: '➡️', title: 'Information Flow & End-weight', category: 'patterns', level: 'advanced',
        connections: ['anaphoric-reference', 'fronting', 'dummy-it'],
        simple: `<h3>➡️ Đặt thông tin nhẹ trước, nặng sau</h3>
            <p>Tiếng Anh thường thích đưa phần <strong>ngắn, quen, dễ xử lý</strong> lên trước và để phần <strong>dài, mới, nặng</strong> ở cuối câu. Đây là quy tắc <strong>end-weight</strong>.</p>
            <div class="example-box">
                • Better: <em>It is important <strong>to understand the risks of the plan</strong>.</em><br>
                • Heavy-first: <em><strong>To understand the risks of the plan</strong> is important.</em>
            </div>`,
        detail: `<h3>📚 3 cách tiếng Anh tạo end-weight</h3>
            <table><tr><th>Cách</th><th>Ví dụ</th><th>Tác dụng</th></tr>
            <tr><td>Extraposition với it</td><td>It was surprising that nobody complained.</td><td>đẩy mệnh đề dài ra cuối</td></tr>
            <tr><td>Existential there</td><td>There are several reasons why this fails.</td><td>giới thiệu thông tin mới mượt hơn</td></tr>
            <tr><td>Passive / re-ordering</td><td>The proposal was rejected by the committee we had contacted earlier.</td><td>giữ đầu câu gọn và quen</td></tr></table>`,
        advanced: `<h3>🎯 End-weight đi cùng end-focus</h3>
            <ul><li><strong>End-weight</strong> giúp câu dễ xử lý; <strong>end-focus</strong> đặt điểm nhấn ở cuối câu.</li>
            <li>Văn học thuật thường ưa câu bắt đầu bằng khung gọn rồi mới bung phần giải thích dài.</li>
            <li>Đừng front mọi thứ lên đầu câu; nếu chủ ngữ quá dài, tiếng Anh thường thích giữ nó ở cuối bằng <em>it</em> hoặc <em>there</em>.</li>
            <li>Cataphoric openings và end-weight thường đi cùng nhau: phần nhỏ mở câu, phần nặng mang thông tin chính đến sau.</li></ul>`
    },

    /* ========== STRUCTURES ========== */

    'inversion-negative': {
        icon: '🔄', title: 'Inversion sau Negative Adverbials', category: 'structures', level: 'advanced',
        connections: ['inversion', 'mixed-conditionals', 'fronting'],
        simple: `<h3>🔄 Đảo ngữ sau trạng từ phủ định</h3>
            <div class="formula-box">NEG ADV + AUX + Subject + Verb</div>
            <p>Khi đưa trạng từ phủ định lên đầu câu, đảo ngữ giống câu hỏi.</p>
            <div class="example-box">
                Never have I seen such beauty.<br>
                Hardly had I arrived when it started raining.
            </div>`,
        detail: `<h3>📚 Bộ trạng từ phủ định</h3>
            <ul><li><strong>Never / Rarely / Seldom</strong> have I...</li>
            <li><strong>Hardly / Scarcely ... when</strong> + clause</li>
            <li><strong>No sooner ... than</strong> + clause</li>
            <li><strong>Not only ... but also</strong></li>
            <li><strong>Not until / Only when / Only after</strong> + clause + đảo ngữ</li>
            <li><strong>Little</strong> did I know that...</li>
            <li><strong>On no account / Under no circumstances</strong></li>
            <li><strong>In no way</strong></li></ul>`,
        advanced: `<h3>🎯 Mẫu phức tạp</h3>
            <ul><li><em>Hardly had I sat down <strong>when</strong> the phone rang.</em> (when + clause thường)</li>
            <li><em>No sooner had he arrived <strong>than</strong> she left.</em> (than)</li>
            <li><em>Only after she left <strong>did I realize</strong> the truth.</em> (đảo ngữ ở mệnh đề chính)</li>
            <li><em>Not only is he kind, <strong>but he is also rich</strong>.</em> (vế 2 không đảo)</li></ul>
            <p><strong>Văn phong:</strong> Inversion mang tính trang trọng/văn học — không dùng trong văn nói thường.</p>`
    },

    'fronting': {
        icon: '⬆️', title: 'Fronting (Đưa Lên Đầu Câu)', category: 'structures', level: 'advanced',
        connections: ['inversion-negative', 'cleft-sentences', 'do-emphasis'],
        simple: `<h3>⬆️ Đưa lên đầu câu để nhấn mạnh</h3>
            <p>Đưa <strong>tân ngữ / bổ ngữ / trạng ngữ</strong> ra đầu câu để nhấn mạnh hoặc tạo mạch.</p>
            <div class="example-box">
                That book, I have already read.<br>
                In the corner stood an old man.<br>
                So beautiful was the view that we stayed.
            </div>`,
        detail: `<h3>📚 3 dạng fronting</h3>
            <ul><li><strong>Object fronting</strong> (không đảo): <em>This part, I don't understand.</em></li>
            <li><strong>Locative inversion</strong> (đảo): <em>On the wall hung a painting.</em></li>
            <li><strong>Complement fronting</strong> (đảo với be/seem): <em>Such was his fame that...</em></li></ul>
            <h4>So + adj + be</h4>
            <p><em>So tired was she that she fell asleep.</em><br>
            <em>So expensive was the car that no one bought it.</em></p>`,
        advanced: `<h3>🎯 Khi nào fronting tự nhiên</h3>
            <ul><li>Văn học, văn báo chí, diễn văn chính trị.</li>
            <li>Tạo mạch (textual cohesion) — tham chiếu đến điều vừa nói.</li>
            <li>Tạo bất ngờ hoặc kịch tính.</li>
            <li>Với <strong>locative inversion</strong>, fronting còn giúp giữ một <strong>chủ ngữ dài</strong> ở cuối câu cho nhịp tự nhiên hơn.</li></ul>
            <p><strong>Phân biệt với cleft</strong>: Cleft dùng "It is X that..."; fronting đơn giản đưa thành phần lên đầu.</p>`
    },

    'complex-inversion': {
        icon: '🌀', title: 'Complex Inversion', category: 'structures', level: 'advanced',
        connections: ['fronting', 'inversion-negative', 'information-flow'],
        simple: `<h3>🌀 Đảo ngữ với cụm chỉ hướng / địa điểm</h3>
            <p>Khi cụm <strong>địa điểm, phương hướng, chuyển động</strong> đứng đầu câu, động từ có thể đứng trước chủ ngữ để tạo nhịp văn tự nhiên hoặc giàu hình ảnh.</p>
            <div class="example-box">
                • <em>Into the room walked the man we had been waiting for.</em><br>
                • <em>Down the hill rolled the cart.</em><br>
                • <em>On the wall hung a portrait of her grandfather.</em>
            </div>`,
        detail: `<h3>📚 Khi nào dùng được</h3>
            <table><tr><th>Yếu tố đầu câu</th><th>Động từ hay gặp</th><th>Lưu ý</th></tr>
            <tr><td>Into / out of / down / up + place</td><td>come, go, walk, run, roll</td><td>phổ biến trong kể chuyện</td></tr>
            <tr><td>On / in / at + place</td><td>stand, sit, lie, hang, remain</td><td>miêu tả cảnh / bố cục không gian</td></tr>
            <tr><td>Such / so + complement</td><td>be, seem</td><td>mang sắc thái trang trọng</td></tr></table>
            <p><strong>Hạn chế:</strong> dạng này tự nhiên nhất khi chủ ngữ là <strong>noun phrase đầy đủ</strong>, không phải đại từ ngắn như <em>he, she, they</em>.</p>`,
        advanced: `<h3>🎯 Vì sao đây là "complex" inversion</h3>
            <ul><li>Không chỉ đảo để nhấn mạnh, mà còn để điều khiển <strong>nhịp nhìn</strong>: người đọc thấy bối cảnh trước, rồi nhân vật/vật thể xuất hiện sau.</li>
            <li>Rất hay gặp trong văn kể chuyện, mô tả, và đôi lúc trong báo chí giàu phong cách.</li>
            <li>Trong hội thoại đời thường, người bản ngữ thường chọn trật tự thường: <em>The man walked into the room.</em></li>
            <li>Nếu dùng sai chỗ, câu dễ nghe "dịch văn" hoặc quá kịch tính.</li></ul>`
    },

    'archaisms-modern-grammar': {
        icon: '🏛️', title: 'Archaisms & Literary Grammar', category: 'structures', level: 'advanced',
        connections: ['subjunctive', 'grammar-registers', 'complex-inversion'],
        simple: `<h3>🏛️ Các cấu trúc cổ / văn chương còn gặp ngày nay</h3>
            <p>Một số dạng ngữ pháp nghe cổ, trang trọng hoặc mang màu văn chương vẫn xuất hiện trong luật, văn học, diễn văn và thành ngữ cố định.</p>
            <div class="example-box">
                • <em>Lest anyone forget, ...</em><br>
                • <em>Be that as it may, we must continue.</em><br>
                • <em>Come what may.</em><br>
                • <em>So be it.</em>
            </div>`,
        detail: `<h3>📚 Một số mẫu cần nhận diện</h3>
            <table><tr><th>Mẫu</th><th>Nghĩa</th><th>Ghi chú</th></tr>
            <tr><td>lest + clause</td><td>để khỏi, kẻo</td><td>thường đi với <em>should</em> hoặc bare subjunctive</td></tr>
            <tr><td>be that as it may</td><td>dù vậy đi nữa</td><td>nhượng bộ trang trọng</td></tr>
            <tr><td>come what may</td><td>dù chuyện gì xảy ra</td><td>cụm cố định</td></tr>
            <tr><td>so be it</td><td>đành vậy, cứ thế đi</td><td>giọng chấp nhận / thách thức</td></tr></table>`,
        advanced: `<h3>🎯 Cách dùng hiện đại</h3>
            <ul><li><em>Lest</em> chủ yếu còn trong văn pháp lý, báo chí trang trọng hoặc văn chương; hội thoại thường thay bằng <em>so that ... not</em> hoặc <em>in case</em>.</li>
            <li>Những cụm như <em>be that as it may</em> mang màu sắc lập luận, nhượng bộ hoặc hùng biện, không hợp cho email đời thường.</li>
            <li>Người học cần <strong>nhận diện và hiểu</strong> trước khi cố chủ động dùng; lạm dụng sẽ làm văn phong giả cổ.</li></ul>`
    },

    'do-emphasis': {
        icon: '💪', title: 'Do/Does/Did Nhấn Mạnh', category: 'structures', level: 'intermediate',
        connections: ['cleft-sentences', 'auxiliary-system', 'question-forms'],
        simple: `<h3>💪 Emphatic do</h3>
            <div class="formula-box">S + do/does/did + V (bare)</div>
            <p>Dùng để khẳng định mạnh, đáp lại nghi ngờ, hoặc làm mệnh lệnh lịch sự hơn.</p>`,
        detail: `<h3>📚 3 chức năng</h3>
            <ul><li><strong>Đáp lại nghi ngờ:</strong> "You don't love me." — "I <strong>DO</strong> love you!"</li>
            <li><strong>Mệnh lệnh nhấn mạnh:</strong> Do come in! / Do sit down! / Do tell me more.</li>
            <li><strong>Đối lập:</strong> She doesn't sing well, but she <strong>does</strong> dance beautifully.</li></ul>
            <p>Trong văn nói, từ "do/does/did" được nhấn trọng âm.</p>`,
        advanced: `<h3>🎯 Dùng trong văn viết trang trọng</h3>
            <ul><li><em>I do believe you are mistaken.</em> (lịch sự hơn "I believe...")</li>
            <li><em>The report does highlight several issues.</em> (báo cáo nhấn mạnh)</li>
            <li>Tránh lạm dụng — chỉ khi muốn nhấn rõ hoặc đối lập.</li></ul>`
    },

    'causative-have-get': {
        icon: '🔧', title: 'Causative (Have/Get Something Done)', category: 'structures', level: 'intermediate',
        connections: ['passive-voice', 'verb-patterns', 'modal-verbs'],
        simple: `<h3>🔧 Câu nhờ vả / sai khiến</h3>
            <ul><li><strong>have + O + V (bare)</strong>: nhờ ai đó làm — <em>I had John fix my car.</em></li>
            <li><strong>get + O + to-V</strong>: thuyết phục — <em>I got him to fix it.</em></li>
            <li><strong>have/get + O + V3</strong>: nhờ làm cho mình — <em>I had my hair cut.</em></li></ul>`,
        detail: `<h3>📚 Make / Let / Help</h3>
            <ul><li><strong>make + O + V (bare)</strong>: bắt buộc — <em>She made me cry.</em></li>
            <li><strong>let + O + V (bare)</strong>: cho phép — <em>Let me go.</em></li>
            <li><strong>help + O + (to)-V</strong>: giúp — <em>He helped me (to) finish.</em></li></ul>
            <h4>Bị động</h4>
            <ul><li><em>She <strong>was made to</strong> apologize.</em> (cần "to" trong bị động!)</li>
            <li>Make → made to. Let không có bị động → dùng "be allowed to".</li></ul>`,
        advanced: `<h3>🎯 Have/Get + V3 — kép nghĩa</h3>
            <ul><li><strong>Nhờ làm</strong>: I had my car repaired (chủ động nhờ thợ).</li>
            <li><strong>Bị tai nạn</strong>: I had my car stolen (xui — bị mất xe).</li>
            <li><em>get</em> hơi không trang trọng hơn <em>have</em>; văn viết formal nên dùng <em>have</em>.</li>
            <li>Thì tương lai: <em>I'll get my hair cut tomorrow.</em></li></ul>`
    },

    /* ========== MISTAKES & MECHANICS ========== */

    'punctuation-deep': {
        icon: '✏️', title: 'Quy Tắc Dấu Câu', category: 'mistakes', level: 'beginner',
        connections: ['punctuation-capitalization', 'fragments-runons', 'apostrophe-rules'],
        simple: `<h3>✏️ Comma, semicolon, colon, dash</h3>
            <p>Dấu câu giúp người đọc hiểu đúng cấu trúc và nhịp.</p>
            <div class="example-box">
                Liệt kê: red, white, and blue<br>
                Sau trạng ngữ đầu: When I arrived, ...<br>
                Trước FANBOYS nối 2 mệnh đề: I came, and I saw.
            </div>`,
        detail: `<h3>📚 Comma rules</h3>
            <ol><li>Liệt kê 3+ items: <em>red, white, and blue</em> (Oxford comma tùy chọn).</li>
            <li>Sau mệnh đề trạng ngữ đầu câu: <em>When I arrived, ...</em></li>
            <li>Trước FANBOYS (For/And/Nor/But/Or/Yet/So) nối 2 mệnh đề độc lập.</li>
            <li>Mệnh đề quan hệ <strong>không xác định</strong>: <em>My brother, who lives in NY, ...</em></li>
            <li>Bao chêm xen: <em>The book, however, was great.</em></li>
            <li>Apposition không xác định: <em>Bill Gates, founder of Microsoft, said...</em></li></ol>
            <h4>Semicolon (;), Colon (:), Dash (—)</h4>
            <ul><li><strong>;</strong> nối 2 mệnh đề độc lập có liên quan: <em>I came; I saw; I conquered.</em></li>
            <li><strong>:</strong> giới thiệu liệt kê, giải thích, trích dẫn: <em>I need three things: pen, paper, ink.</em></li>
            <li><strong>—</strong> chêm xen mạnh: <em>She told me—and I believed her—that he was guilty.</em></li></ul>`,
        advanced: `<h3>🎯 Lỗi phổ biến</h3>
            <ul><li><strong>Comma splice</strong>: 2 mệnh đề độc lập nối bằng MỖI dấu phẩy. ❌ <em>I came, I saw.</em></li>
            <li><strong>Run-on</strong>: viết liền không dấu. ❌ <em>I came I saw.</em></li>
            <li><strong>Sửa</strong>: thêm chấm / thêm ; / thêm liên từ / đổi 1 thành mệnh đề phụ.</li>
            <li><em>However, ...</em> luôn có dấu phẩy sau. <em>; however, ...</em> hoặc dấu chấm trước.</li></ul>`
    },

    'apostrophe-rules': {
        icon: '✒️', title: 'Apostrophe (Dấu Phẩy Trên)', category: 'mistakes', level: 'beginner',
        connections: ['punctuation-deep', 'compound-nouns-possessives'],
        simple: `<h3>✒️ 3 chức năng</h3>
            <ol><li><strong>Sở hữu</strong>: John's car / the children's toys</li>
            <li><strong>Số nhiều sở hữu</strong>: the boys' room (đã có "s")</li>
            <li><strong>Viết tắt</strong>: don't, it's, '90s, o'clock</li></ol>`,
        detail: `<h3>📚 Quy tắc cụ thể</h3>
            <ul><li>N số ít + 's: <em>the dog's tail</em></li>
            <li>N số nhiều có "s" + ': <em>the boys' room</em></li>
            <li>N số nhiều bất quy tắc + 's: <em>the children's toys</em></li>
            <li>Tên riêng kết thúc bằng "s": James's book HOẶC James' book (cả hai chấp nhận)</li>
            <li>Sở hữu chung: <em>John and Mary's house</em> (chung nhà)</li>
            <li>Sở hữu riêng: <em>John's and Mary's houses</em> (mỗi người 1 nhà)</li></ul>`,
        advanced: `<h3>🎯 Bẫy lớn nhất</h3>
            <ul><li>❌ <em>it's car</em> → ✓ <em>its car</em> (its = sở hữu)</li>
            <li>❌ <em>who's book</em> → ✓ <em>whose book</em></li>
            <li>❌ <em>your's / her's / their's</em> → ✓ <em>yours / hers / theirs</em></li>
            <li>❌ <em>apple's $1</em> (số nhiều) → ✓ <em>apples $1</em></li>
            <li>'s viết tắt: <em>he's</em> = he is HOẶC he has (theo ngữ cảnh).</li></ul>`
    },

    'capitalization-rules': {
        icon: '🔠', title: 'Quy Tắc Viết Hoa', category: 'mistakes', level: 'beginner',
        connections: ['punctuation-deep'],
        simple: `<h3>🔠 Khi nào viết hoa</h3>
            <ul><li>Đầu câu, đầu trích dẫn trực tiếp.</li>
            <li>Đại từ <strong>I</strong> luôn viết hoa.</li>
            <li>Tên riêng: người, địa danh, công ty, thương hiệu.</li>
            <li>Quốc tịch, ngôn ngữ, tôn giáo: Vietnamese, English, Buddhism.</li>
            <li>Ngày trong tuần, tháng, ngày lễ: Monday, January, Christmas.</li>
            <li>Tiêu đề: viết hoa từ chính (Title Case).</li></ul>`,
        detail: `<h3>📚 Title Case</h3>
            <p>Viết hoa: từ đầu, từ cuối, và mọi từ chính (N, V, Adj, Adv, đại từ).<br>
            <strong>Không</strong> viết hoa: a/an/the, liên từ ngắn (and/but/or), giới từ ngắn (in/on/of).</p>
            <ul><li>✓ <em>The Lord of the Rings</em></li>
            <li>✓ <em>How to Win Friends and Influence People</em></li></ul>`,
        advanced: `<h3>🎯 KHÔNG viết hoa</h3>
            <ul><li>Mùa: spring, summer, fall/autumn, winter (trừ khi nhân hóa).</li>
            <li>Hướng: north, south, east, west (trừ khi là vùng: <em>the South</em>).</li>
            <li>Môn học chung: math, history, biology (trừ ngôn ngữ: English, French).</li>
            <li>Chức danh chung: <em>the president</em> (nhưng <em>President Biden</em>).</li></ul>`
    },

    'numbers-dates': {
        icon: '🔢', title: 'Số Đếm, Số Thứ Tự & Ngày Tháng', category: 'mistakes', level: 'beginner',
        connections: ['numerals'],
        simple: `<h3>🔢 Cardinal vs Ordinal</h3>
            <ul><li><strong>Cardinal</strong>: one, two, three, twenty-one, one hundred</li>
            <li><strong>Ordinal</strong>: first (1st), second (2nd), third (3rd), fourth (4th), twenty-first (21st)</li></ul>`,
        detail: `<h3>📚 Phân số, thập phân, phần trăm</h3>
            <ul><li><strong>Phân số</strong>: 1/2 = a half / one half; 1/3 = a third; 3/4 = three-quarters; 2/5 = two-fifths</li>
            <li><strong>Thập phân</strong>: 0.5 = "point five" (KHÔNG "comma five"); 3.14 = "three point one four"</li>
            <li><strong>Phần trăm</strong>: 25% = twenty-five percent</li></ul>
            <h4>Ngày tháng năm</h4>
            <table><tr><th>Phong cách</th><th>Viết</th><th>Đọc</th></tr>
            <tr><td>Anh-Anh</td><td>5(th) May 2024</td><td>the fifth of May twenty twenty-four</td></tr>
            <tr><td>Anh-Mỹ</td><td>May 5(th), 2024</td><td>May fifth, twenty twenty-four</td></tr></table>
            <h4>Đọc năm</h4>
            <ul><li>1999 = "nineteen ninety-nine"</li>
            <li>2024 = "twenty twenty-four" / "two thousand and twenty-four"</li>
            <li>Thập kỷ: the 1990s / the '90s = "the nineties"</li></ul>`,
        advanced: `<h3>🎯 Khác</h3>
            <ul><li><strong>Giờ</strong>: 7:30 = half past seven / seven thirty.</li>
            <li><strong>Tuổi</strong>: in his twenties / a 5-year-old (compound adj không có "s").</li>
            <li><strong>Số nhiều của số</strong>: hundreds of people / in the 1980s.</li>
            <li><strong>Phép tính</strong>: 2 + 3 = 5 → "Two plus three equals five" / "Two and three is five".</li>
            <li><strong>Số điện thoại</strong>: đọc từng chữ số: 555-1234 = "five-five-five, one-two-three-four" (đôi khi 0 = "oh").</li></ul>`
    },

    'fragments-runons': {
        icon: '⚠️', title: 'Fragments, Run-ons & Comma Splice', category: 'mistakes', level: 'intermediate',
        connections: ['punctuation-deep', 'sentence-types', 'parallel-structure'],
        simple: `<h3>⚠️ 3 lỗi cấu trúc câu cốt lõi</h3>
            <ul><li><strong>Fragment</strong> (mảnh câu): thiếu chủ ngữ hoặc động từ. ❌ <em>Walking down the street.</em></li>
            <li><strong>Run-on</strong>: 2 mệnh đề viết liền không dấu/từ nối. ❌ <em>I came I saw.</em></li>
            <li><strong>Comma splice</strong>: 2 mệnh đề nối bằng MỖI dấu phẩy. ❌ <em>I came, I saw.</em></li></ul>`,
        detail: `<h3>📚 4 cách sửa run-on / comma splice</h3>
            <ol><li>Thêm chấm: <em>I came. I saw.</em></li>
            <li>Thêm dấu chấm phẩy: <em>I came; I saw.</em></li>
            <li>Thêm FANBOYS + comma: <em>I came, and I saw.</em></li>
            <li>Đổi 1 thành mệnh đề phụ: <em>When I came, I saw.</em></li></ol>`,
        advanced: `<h3>🎯 Fragment có chủ ý</h3>
            <p>Trong văn học, quảng cáo, văn báo chí — fragment được dùng để tạo nhịp/nhấn:</p>
            <ul><li><em>Best service. Lowest price. Anywhere.</em> (quảng cáo)</li>
            <li><em>And then? Silence.</em> (văn học)</li></ul>
            <p>Trong văn học thuật, KHÔNG dùng fragment.</p>`
    },

    /* ========== PRONUNCIATION ========== */

    'word-stress': {
        icon: '🎯', title: 'Word Stress (Trọng Âm Từ)', category: 'pronunciation', level: 'intermediate',
        connections: ['ipa-overview', 'sentence-stress', 'stress-schwa'],
        simple: `<h3>🎯 Quy tắc đánh dấu trọng âm</h3>
            <ul><li>N/Adj 2 âm tiết → trọng âm thường ở âm <strong>đầu</strong>: TAble, HAPpy.</li>
            <li>V 2 âm tiết → thường ở âm <strong>cuối</strong>: deCIDE, beGIN.</li>
            <li>Cặp danh-động giống nhau: PREsent (n) vs preSENT (v); CONduct (n) vs conDUCT (v).</li></ul>`,
        detail: `<h3>📚 Quy tắc theo hậu tố</h3>
            <table><tr><th>Suffix</th><th>Trọng âm</th><th>Ví dụ</th></tr>
            <tr><td>-tion / -sion / -ic / -ical / -ity</td><td>âm tiết ngay TRƯỚC</td><td>naTION, ecoNOmic, cuRIosity</td></tr>
            <tr><td>-ate / -ize / -fy / -ary (verb)</td><td>lùi 2 âm tiết</td><td>COMmunicate, ORganize, IDentify</td></tr>
            <tr><td>-ee / -eer / -ese / -oo / -oon</td><td>RƠI vào hậu tố</td><td>employEE, engiNEER, ChiNESE</td></tr>
            <tr><td>-ous / -ful / -ly / -ness / -ment</td><td>KHÔNG đổi trọng âm gốc</td><td>HAPpy → HAPpiness</td></tr></table>`,
        advanced: `<h3>🎯 Compound stress</h3>
            <ul><li><strong>Compound noun</strong>: trọng âm trước — BLACKboard, GREENhouse, COFfee shop, CREDit card.</li>
            <li><strong>Compound adj</strong>: trọng âm sau — good-LOOKing, well-KNOWN, old-FASHioned.</li>
            <li>Câu tục ngữ: <em>Nouns stress first, adjectives stress last.</em></li></ul>`
    },

    'sentence-stress': {
        icon: '📢', title: 'Sentence Stress', category: 'pronunciation', level: 'intermediate',
        connections: ['word-stress', 'connected-speech', 'intonation-patterns'],
        simple: `<h3>📢 Trọng âm câu</h3>
            <ul><li><strong>Content words</strong> (N, V chính, Adj, Adv) → nhấn mạnh.</li>
            <li><strong>Function words</strong> (a/the/and/of/is/can) → yếu, schwa /ə/.</li></ul>
            <div class="example-box">
                <strong>I WANT to GO to the BEACH toMORrow.</strong><br>
                (chữ in HOA = nhấn)
            </div>`,
        detail: `<h3>📚 Bộ weak forms</h3>
            <table><tr><th>Strong</th><th>Weak</th></tr>
            <tr><td>a /eɪ/</td><td>/ə/</td></tr>
            <tr><td>the /ðiː/</td><td>/ðə/ (trước phụ âm) / /ði/ (trước nguyên âm)</td></tr>
            <tr><td>and /ænd/</td><td>/ən/ /n/</td></tr>
            <tr><td>of /ɒv/</td><td>/əv/ /v/</td></tr>
            <tr><td>to /tuː/</td><td>/tə/</td></tr>
            <tr><td>for /fɔː/</td><td>/fə/</td></tr>
            <tr><td>can /kæn/</td><td>/kən/</td></tr>
            <tr><td>have /hæv/</td><td>/həv/ /əv/ (auxiliary)</td></tr></table>`,
        advanced: `<h3>🎯 Contrastive & focus stress</h3>
            <ul><li><strong>Contrastive</strong>: <em>I want THIS one, not THAT one.</em></li>
            <li><strong>Focus (new info)</strong>: stress đặt ở thông tin mới của câu.<br>
            — Who broke it? — <em>JOHN broke it.</em><br>
            — What did John do? — <em>John BROKE it.</em></li>
            <li>Tiếng Anh là stress-timed → giữ nhịp đều giữa các stress, function words được nén.</li></ul>`
    },

    'intonation-patterns': {
        icon: '🎵', title: 'Intonation (Ngữ Điệu)', category: 'pronunciation', level: 'intermediate',
        connections: ['sentence-stress', 'tag-questions', 'question-forms'],
        simple: `<h3>🎵 3 mẫu ngữ điệu chính</h3>
            <ul><li><strong>Falling ↘</strong>: trần thuật, mệnh lệnh, wh-question, kết thúc dứt khoát.</li>
            <li><strong>Rising ↗</strong>: yes/no question, liệt kê chưa hết, lịch sự nhẹ.</li>
            <li><strong>Fall-rise ↘↗</strong>: nghi ngờ, do dự, tế nhị, ám chỉ.</li></ul>`,
        detail: `<h3>📚 Áp dụng theo loại câu</h3>
            <ul><li>Trần thuật: <em>She lives in Hanoi↘.</em></li>
            <li>Yes/No: <em>Are you ready↗?</em></li>
            <li>Wh: <em>Where do you live↘?</em></li>
            <li>Liệt kê: <em>apples↗, oranges↗, and bananas↘.</em></li>
            <li>Tag question: <em>You're tired↘, aren't you↘?</em> (kỳ vọng đồng ý)<br>
            <em>You're tired↘, aren't you↗?</em> (thật sự hỏi)</li>
            <li>Choice: <em>Tea↗ or coffee↘?</em></li></ul>`,
        advanced: `<h3>🎯 Ngữ điệu mang ý nghĩa</h3>
            <ul><li><em>"Yes."</em> ↘ = đồng ý dứt khoát.</li>
            <li><em>"Yes?"</em> ↗ = "có chuyện gì?"</li>
            <li><em>"YES!"</em> ↗↘ cao = phấn khích.</li>
            <li><em>"Yes..."</em> ↘↗ = ngập ngừng/nghi ngờ.</li></ul>
            <p><strong>British vs American</strong>: Anh-Anh có ngữ điệu lên xuống rõ hơn; Anh-Mỹ phẳng hơn.</p>`
    },

    /* ========== C2 MASTERY SYSTEMS ========== */

    'determiner-system': {
        icon: '🧩', title: 'Determiner System', category: 'foundations', level: 'advanced', cefr: 'C2',
        connections: ['articles-determiners', 'quantifiers-deep', 'demonstratives-deep', 'advanced-article-system'],
        simple: `<h3>🧩 Hệ determiner là "cửa vào" của noun phrase</h3>
            <p>Determiner đứng trước danh từ để cho biết người nghe phải hiểu danh từ đó theo cách nào: <strong>xác định hay không, số lượng bao nhiêu, thuộc về ai, gần hay xa, khái quát hay cụ thể</strong>.</p>
            <div class="formula-box">
                Pre-determiner + Central determiner + Post-determiner + Adjective(s) + Noun<br>
                all + the + three + important + meetings
            </div>
            <div class="example-box">
                • all my old friends<br>
                • both those two options (thường tránh vì thừa)<br>
                • such a difficult question
            </div>`,
        detail: `<h3>📚 3 lớp determiner</h3>
            <table><tr><th>Lớp</th><th>Ví dụ</th><th>Vai trò</th></tr>
            <tr><td>Pre-determiner</td><td>all, both, half, double, such, what</td><td>đứng ngoài cùng, thường thêm sắc thái lượng hoặc nhấn mạnh</td></tr>
            <tr><td>Central determiner</td><td>a/an, the, this, my, each, every, some, any, no</td><td>lớp trung tâm, thường chỉ chọn một</td></tr>
            <tr><td>Post-determiner</td><td>one, two, first, many, several, few</td><td>số lượng, thứ tự, lượng cụ thể hơn</td></tr></table>
            <h4>Quy tắc đồng xuất hiện</h4>
            <ul><li>Không đi hai central determiners cùng lúc: <em>the my book</em> ❌</li>
            <li><em>all my books</em> ✓ nhưng <em>my all books</em> ❌</li>
            <li><em>such a day</em> ✓, <em>so difficult a question</em> ✓ nhưng rất trang trọng</li>
            <li><em>many books</em>, <em>much water</em>, <em>several ideas</em> là post-determiner theo nghĩa lượng.</li></ul>`,
        advanced: `<h3>🎯 Các điểm C2 cần phân biệt</h3>
            <ul><li><strong>Generic zero determiner</strong>: <em>Books can change lives</em> khác với <em>The books on the table...</em>.</li>
            <li><strong>Predeterminer + article</strong>: <em>all the time</em>, <em>both the answers</em>, <em>half a loaf</em>.</li>
            <li><strong>Distributive nuance</strong>: <em>each</em> nhìn từng cá thể; <em>every</em> nhìn cả tập hợp như một chuỗi.</li>
            <li><strong>Register</strong>: văn pháp lý, học thuật và báo chí thường tận dụng determiner để nén nghĩa rất mạnh, nên hiểu hệ này là chìa khóa đọc các noun phrase dài.</li></ul>`
    },

    'advanced-article-system': {
        icon: '🅰️', title: 'Advanced Article System', category: 'foundations', level: 'advanced', cefr: 'C2',
        connections: ['articles-determiners', 'determiner-system', 'noun-phrase-architecture', 'grammar-registers'],
        simple: `<h3>🅰️ Article không chỉ là a/an/the</h3>
            <p>Ở mức cao, article phản ánh cách người nói đóng khung thực thể: <strong>mới hay đã biết, đại diện cho cả loại hay chỉ một trường hợp, duy nhất hay chỉ tình huống</strong>.</p>
            <div class="example-box">
                • <em>A tiger</em> is a dangerous animal. (một ví dụ đại diện)<br>
                • <em>The tiger</em> is a dangerous animal. (cả loài, kiểu khoa học/khái quát có xác định)<br>
                • <em>Tigers</em> are dangerous animals. (khái quát bằng số nhiều)
            </div>`,
        detail: `<h3>📚 Những vùng hay gây nhầm</h3>
            <table><tr><th>Kiểu dùng</th><th>Ví dụ</th><th>Ý nghĩa</th></tr>
            <tr><td>First mention</td><td>I saw <em>a</em> dog.</td><td>người nghe chưa biết con nào</td></tr>
            <tr><td>Second mention</td><td><em>The</em> dog was wet.</td><td>nay đã xác định</td></tr>
            <tr><td>Unique in context</td><td>the sun, the kitchen, the manager</td><td>duy nhất theo thế giới hoặc ngữ cảnh</td></tr>
            <tr><td>Institutional zero article</td><td>go to school, be in prison, at university</td><td>nhấn chức năng xã hội, không phải tòa nhà</td></tr>
            <tr><td>Abstract/mass noun</td><td>Life is short / The life he led was difficult</td><td>khái quát vs trường hợp cụ thể</td></tr></table>
            <h4>Geographical articles</h4>
            <ul><li><em>the Netherlands, the UK, the Sahara, the Pacific, the Alps</em></li>
            <li>Nhưng: <em>France, Asia, Mount Everest, Lake Victoria</em></li></ul>`,
        advanced: `<h3>🎯 Article và sắc thái diễn ngôn</h3>
            <ul><li><strong>Zero article</strong> thường cho cảm giác khái quát, thể chế hoặc khối lượng nói chung: <em>Justice matters</em>, <em>Children need sleep</em>.</li>
            <li><strong>The</strong> có thể tạo hiệu ứng "shared knowledge": <em>the problem is...</em>, <em>the answer lies in...</em></li>
            <li><strong>Stylistic shifts</strong>: báo chí có thể bỏ article ở headline; văn nói có thể thêm <em>the</em> để chỉ một thực thể đã nổi bật trong ngữ cảnh dù chưa nhắc trước đó.</li>
            <li>Ở C2, article phải đi cùng discourse control, không chỉ nhớ quy tắc cô lập.</li></ul>`
    },

    'noun-phrase-architecture': {
        icon: '🏗️', title: 'Noun Phrase Architecture', category: 'foundations', level: 'advanced', cefr: 'C2',
        connections: ['determiner-system', 'advanced-article-system', 'advanced-relative-clauses', 'apposition'],
        simple: `<h3>🏗️ Noun phrase là một hệ nhiều tầng</h3>
            <p>Một noun phrase mạnh có thể nén cả một mảng thông tin vào quanh <strong>head noun</strong>: determiner, premodifier, classifier, complement và postmodifier.</p>
            <div class="formula-box">
                Determiner + Premodifier(s) + Head noun + Complement/Postmodifier<br>
                the + recent international + trade agreement + between the two states
            </div>`,
        detail: `<h3>📚 Các tầng thường gặp</h3>
            <table><tr><th>Tầng</th><th>Ví dụ</th><th>Chức năng</th></tr>
            <tr><td>Determiner</td><td>the, this, several</td><td>xác định cách người nghe tiếp cận noun</td></tr>
            <tr><td>Premodifier</td><td>a complex ethical issue</td><td>thêm đặc điểm trước head noun</td></tr>
            <tr><td>Noun classifier</td><td>language policy debate</td><td>nén thông tin kiểu danh từ + danh từ</td></tr>
            <tr><td>Complement</td><td>the decision <em>to leave</em></td><td>hoàn chỉnh nghĩa của noun</td></tr>
            <tr><td>Postmodifier</td><td>the report <em>that was leaked yesterday</em></td><td>bổ sung/giới hạn nghĩa sau noun</td></tr></table>
            <h4>Các dạng postmodification</h4>
            <ul><li>Prepositional phrase: <em>the man in the blue coat</em></li>
            <li>Relative clause: <em>the book that changed my mind</em></li>
            <li>Non-finite clause: <em>students wishing to apply</em></li>
            <li>Apposition: <em>the fact that..., the idea of...</em></li></ul>`,
        advanced: `<h3>🎯 Vì sao C2 cần học kiến trúc noun phrase</h3>
            <ul><li>Văn học thuật và báo chí nén cực nhiều ý vào noun phrase thay vì dùng nhiều câu ngắn.</li>
            <li>Người học thường tạo noun phrase quá nặng phía trước; tiếng Anh tốt sẽ cân bằng giữa premodification và postmodification.</li>
            <li>Nếu cụm quá dài, nên chuyển một phần sang clause hoặc dùng end-weight thay vì nhồi liên tiếp nhiều danh từ.</li>
            <li>Đọc nhanh văn khó phụ thuộc rất nhiều vào khả năng tìm head noun và tách modifier.</li></ul>`
    },

    'adverb-placement-focus': {
        icon: '🎯', title: 'Adverb Placement & Focus', category: 'patterns', level: 'advanced', cefr: 'C2',
        connections: ['adjectives-adverbs', 'information-flow', 'fronting', 'hedges-boosters'],
        simple: `<h3>🎯 Đổi chỗ trạng từ là đổi điểm nhấn</h3>
            <p>Ở mức cao, trạng từ không chỉ trả lời "khi nào / thế nào" mà còn điều khiển <strong>focus</strong> của câu, đặc biệt với <em>only, even, just, almost, already, still, too</em>.</p>
            <div class="example-box">
                • Only <strong>John</strong> apologized.<br>
                • John only <strong>apologized</strong>.<br>
                • John apologized only <strong>after the meeting</strong>.
            </div>`,
        detail: `<h3>📚 Ba vị trí chính</h3>
            <table><tr><th>Vị trí</th><th>Loại thường gặp</th><th>Ví dụ</th></tr>
            <tr><td>Front position</td><td>linking adverbs, stance, framing</td><td><em>Frankly,</em> I disagree.</td></tr>
            <tr><td>Mid position</td><td>frequency, probability, focusing adverbs</td><td>She <em>often</em> forgets. / He has <em>already</em> left.</td></tr>
            <tr><td>End position</td><td>manner, place, time</td><td>She spoke quietly in the hallway yesterday.</td></tr></table>
            <h4>Mid position với auxiliaries</h4>
            <ul><li>Before lexical verb: <em>She probably knows.</em></li>
            <li>After be: <em>She is probably ready.</em></li>
            <li>After first auxiliary: <em>She has probably forgotten.</em></li></ul>`,
        advanced: `<h3>🎯 Focusing adverbs và nghĩa</h3>
            <ul><li><strong>only</strong> phải đặt sát phần được giới hạn: <em>I only asked for help</em> khác <em>I asked only for help</em>.</li>
            <li><strong>even</strong> đưa yếu tố bất ngờ vào điểm nhấn: <em>Even John passed</em>.</li>
            <li><strong>almost</strong> dễ gây hiểu sai nếu đặt lỏng: <em>I almost told everyone</em> ≠ <em>I told almost everyone</em>.</li>
            <li>Ở C2, adverb placement gắn trực tiếp với discourse design, không thể chỉ học như một quy tắc vị trí cứng.</li></ul>`
    },

    'advanced-adverbial-clauses': {
        icon: '🪜', title: 'Advanced Adverbial Clauses', category: 'patterns', level: 'advanced', cefr: 'C2',
        connections: ['conjunctions', 'conditionals', 'participle-clauses', 'sequence-of-tenses'],
        simple: `<h3>🪜 Adverbial clause ở mức cao vượt khỏi because/when/if</h3>
            <p>Người học C2 cần xử lý tốt mệnh đề trạng ngữ chỉ <strong>nhượng bộ, điều kiện, mức độ, đối chiếu, cách thức, giả định và lập luận</strong>.</p>
            <div class="example-box">
                • <em>Much as</em> I admire her, I cannot agree.<br>
                • We will support the plan <em>provided that</em> the budget is revised.<br>
                • <em>Insofar as</em> the data are reliable, the claim stands.
            </div>`,
        detail: `<h3>📚 Một số connector nâng cao</h3>
            <table><tr><th>Nhóm</th><th>Mẫu</th><th>Gợi nghĩa</th></tr>
            <tr><td>Điều kiện</td><td>provided (that), providing (that), as long as, unless</td><td>điều kiện có ràng buộc rõ</td></tr>
            <tr><td>Nhượng bộ</td><td>although, even though, while, whereas, much as</td><td>nhượng bộ, đối chiếu</td></tr>
            <tr><td>Cách thức / so sánh</td><td>as if, as though, as</td><td>so sánh giả định hoặc phương thức</td></tr>
            <tr><td>Mức độ</td><td>insofar as, to the extent that</td><td>giới hạn mức độ đúng</td></tr>
            <tr><td>Thời gian phức</td><td>the moment, by the time, once, now that</td><td>khung thời gian tinh hơn</td></tr></table>`,
        advanced: `<h3>🎯 Mức C2 nằm ở kiểm soát register và reduction</h3>
            <ul><li><strong>Much as...</strong> và <strong>insofar as...</strong> nghe trang trọng hơn <em>although</em>.</li>
            <li>Nhiều adverbial clauses có thể rút gọn thành phrase nếu chủ ngữ trùng: <em>When in doubt, ask.</em></li>
            <li>Không phải mọi clause đứng đầu đều cần dấu phẩy y hệt nhau; punctuation còn tùy độ dài và mức gắn kết.</li>
            <li>Adverbial clauses là nơi rất dễ tạo câu dịch từ tiếng Việt; kiểm soát connector đúng sắc thái là khác biệt lớn giữa B2 và C2.</li></ul>`
    },

    'noun-complement-clauses': {
        icon: '📦', title: 'Noun Complement Clauses', category: 'structures', level: 'advanced', cefr: 'C2',
        connections: ['noun-clauses', 'apposition', 'academic-style-grammar', 'advanced-relative-clauses'],
        simple: `<h3>📦 Có những noun cần một clause để hoàn tất nghĩa</h3>
            <p>Khác với noun clause làm chức năng danh từ, <strong>noun complement clause</strong> bổ sung cho một danh từ trừu tượng như <em>fact, idea, claim, possibility, decision</em>.</p>
            <div class="example-box">
                • the idea <em>that grammar shapes thought</em><br>
                • the decision <em>to postpone the launch</em><br>
                • the question <em>whether this is legal</em>
            </div>`,
        detail: `<h3>📚 Các mẫu chính</h3>
            <table><tr><th>Noun</th><th>Complement hay đi cùng</th><th>Ví dụ</th></tr>
            <tr><td>fact, claim, belief, assumption</td><td>that-clause</td><td>the claim that the data were manipulated</td></tr>
            <tr><td>question, issue, uncertainty</td><td>whether / wh-clause</td><td>the question whether we should proceed</td></tr>
            <tr><td>decision, attempt, plan, ability</td><td>to-infinitive clause</td><td>their decision to withdraw</td></tr>
            <tr><td>possibility, chance, risk</td><td>of + V-ing / that-clause</td><td>the possibility of being ignored</td></tr></table>
            <p>Noun complement thường rất hay gặp trong academic prose vì nó giúp danh hóa cả một mệnh đề rồi đặt nó làm subject/object của câu lớn hơn.</p>`,
        advanced: `<h3>🎯 Phân biệt với relative clause</h3>
            <ul><li><em>the claim that he was lying</em>: <strong>that-clause là nội dung của claim</strong>.</li>
            <li><em>the claim that shocked everyone</em>: <strong>that</strong> ở đây là đại từ quan hệ, mệnh đề mô tả claim.</li>
            <li>Sự phân biệt này rất quan trọng trong parsing văn học thuật, vì hình thức nhìn bề ngoài có thể giống nhau nhưng chức năng hoàn toàn khác.</li>
            <li>C2 writing thường dùng noun complement để nén lập luận: <em>the assumption that..., the possibility that..., the tendency to...</em></li></ul>`
    },

    'advanced-relative-clauses': {
        icon: '🧬', title: 'Advanced Relative Clauses', category: 'structures', level: 'advanced', cefr: 'C2',
        connections: ['relative-clauses', 'reduced-relatives', 'noun-phrase-architecture', 'punctuation-deep'],
        simple: `<h3>🧬 Relative clauses ở C2 không dừng ở who/which/that</h3>
            <p>Bạn cần đọc và viết được các biến thể như <strong>preposition fronting, sentential relatives, reduced relatives, quantifier + of whom/which</strong>.</p>
            <div class="example-box">
                • the proposal <em>to which</em> they objected<br>
                • the students, <em>many of whom</em> were exhausted, left early<br>
                • He resigned, <em>which</em> surprised everyone.
            </div>`,
        detail: `<h3>📚 Các vùng quan trọng</h3>
            <ul><li><strong>Preposition + relative pronoun</strong>: <em>the company for which she works</em> (formal).</li>
            <li><strong>Quantifier + of whom/which</strong>: <em>three of whom</em>, <em>none of which</em>.</li>
            <li><strong>Sentential relative</strong>: <em>which</em> quay lại cả mệnh đề trước.</li>
            <li><strong>Reduced relative</strong>: <em>students applying late</em>, <em>documents submitted yesterday</em>.</li>
            <li><strong>Whose</strong> với vật cũng dùng được: <em>a company whose reputation was damaged</em>.</li></ul>`,
        advanced: `<h3>🎯 Kiểm soát sắc thái và tải thông tin</h3>
            <ul><li>Relative clause restrictive giúp xác định danh từ; non-restrictive thêm bình luận hoặc thông tin nền.</li>
            <li>Quá nhiều relative clauses nối tầng dễ làm câu nặng; C2 nằm ở chỗ biết khi nào chuyển sang apposition hoặc noun complement clause.</li>
            <li><em>That</em> không đi trong non-restrictive clause; đây là lỗi rất phổ biến dù người học trình cao.</li>
            <li>Trong prose nâng cao, relative system là công cụ để nén thông tin mà vẫn giữ tracking rõ cho người đọc.</li></ul>`
    },

    'verb-complementation': {
        icon: '🎛️', title: 'Verb Complementation', category: 'patterns', level: 'advanced', cefr: 'C2',
        connections: ['gerunds-infinitives', 'causative-have-get', 'subjunctive', 'noun-clauses'],
        simple: `<h3>🎛️ Mỗi verb mở ra một kiểu bổ ngữ khác nhau</h3>
            <p>Verb complementation là hệ xem sau động từ nên đi <strong>to-infinitive, V-ing, bare infinitive, that-clause, wh-clause, object + infinitive, object + participle</strong> hay kiểu nào khác.</p>
            <div class="example-box">
                • She <em>agreed to leave</em>.<br>
                • She <em>enjoyed reading</em>.<br>
                • We <em>saw him cross</em> the street.<br>
                • They <em>expected him to win</em>.
            </div>`,
        detail: `<h3>📚 Những nhóm khó nhất</h3>
            <table><tr><th>Kiểu</th><th>Ví dụ</th><th>Lưu ý</th></tr>
            <tr><td>Control verbs</td><td>try to leave / promise to help</td><td>chủ thể của infinitive được hiểu từ một participant trong mệnh đề chính</td></tr>
            <tr><td>Raising verbs</td><td>seem to know / appear to be</td><td>chủ ngữ không phải người "làm" về nghĩa</td></tr>
            <tr><td>Object control</td><td>persuade him to stay</td><td>object là chủ thể ngữ nghĩa của infinitive</td></tr>
            <tr><td>Perception / causative</td><td>see him leave / have it repaired</td><td>bare infinitive, V-ing hoặc V3 tùy ý nghĩa</td></tr>
            <tr><td>Clause complements</td><td>admit that..., wonder whether...</td><td>nhiều verb chỉ nhận clause, không nhận to-infinitive</td></tr></table>
            <h4>Meaning change verbs</h4>
            <ul><li><em>remember to do</em> vs <em>remember doing</em></li>
            <li><em>stop to smoke</em> vs <em>stop smoking</em></li>
            <li><em>try to open</em> vs <em>try opening</em></li>
            <li><em>regret to inform</em> vs <em>regret telling</em></li></ul>`,
        advanced: `<h3>🎯 Từ B2 lên C2 khác nhau ở đâu</h3>
            <ul><li>B2 thường học danh sách verb + V-ing / to-V. C2 phải hiểu <strong>vì sao</strong> mỗi kiểu biểu hiện quan hệ ngữ nghĩa khác nhau.</li>
            <li>Control vs raising là vùng quan trọng để đọc ngôn ngữ học, logic câu và một số cấu trúc học thuật khó.</li>
            <li>Verb complementation cũng giải thích vì sao một số câu nghe sai dù từ vựng có vẻ đúng: *<em>suggest to go</em> ❌, <em>suggest going</em> ✓, <em>suggest that we go</em> ✓.</li>
            <li>Nhiều lỗi C2 không còn là lỗi thì, mà là lỗi chọn sai kiểu bổ ngữ sau động từ.</li></ul>`
    },

    'clause-system': {
        icon: '🗺️', title: 'Clause System', category: 'structures', level: 'advanced', cefr: 'C2',
        connections: ['sentence-types', 'noun-clauses', 'advanced-adverbial-clauses', 'information-flow'],
        simple: `<h3>🗺️ Câu là mạng của nhiều loại clause</h3>
            <p>Ở mức rất cao, cần nhìn câu như một hệ gồm <strong>matrix clause</strong> và các clause phụ thuộc: nominal, relative, adverbial, non-finite, verbless.</p>
            <div class="formula-box">
                Matrix clause + subordinate clause(s) + optional non-finite / verbless clause(s)
            </div>`,
        detail: `<h3>📚 Những loại clause cốt lõi</h3>
            <table><tr><th>Loại</th><th>Ví dụ</th><th>Chức năng</th></tr>
            <tr><td>Finite clause</td><td>because he was tired</td><td>có tense / modality rõ</td></tr>
            <tr><td>Non-finite clause</td><td>to finish on time / having finished early</td><td>nén thông tin, tránh lặp subject</td></tr>
            <tr><td>Verbless clause</td><td>When ready, press start.</td><td>cực kỳ nén, hay gặp trong hướng dẫn</td></tr>
            <tr><td>Nominal clause</td><td>What she said shocked me.</td><td>làm subject/object/complement</td></tr>
            <tr><td>Relative clause</td><td>the book that changed me</td><td>mở rộng noun phrase</td></tr>
            <tr><td>Adverbial clause</td><td>although he agreed</td><td>điều chỉnh cả clause chính</td></tr></table>
            <p>Hiểu clause system giúp bạn parse những câu dài trong luật, học thuật, báo chí và văn chương mà không bị lạc cấu trúc.</p>`,
        advanced: `<h3>🎯 Mức làm chủ của clause system</h3>
            <ul><li>Không phải câu dài nào cũng tốt; chất lượng nằm ở việc mỗi clause có chức năng rõ, tải thông tin hợp lý và không mơ hồ reference.</li>
            <li>Clause chaining tốt thường phối hợp subordination, nominalization và end-weight để người đọc xử lý dần.</li>
            <li>C2 không chỉ viết được câu dài, mà biết khi nào nên tách câu để tránh overload.</li>
            <li>Khi đã hiểu clause system, nhiều hiện tượng rời rạc như inversion, reduction, extraposition sẽ khớp lại thành một hệ thống.</li></ul>`
    },

    'advanced-agreement': {
        icon: '⚖️', title: 'Advanced Agreement & Concord', category: 'foundations', level: 'advanced', cefr: 'C2',
        connections: ['subject-verb-agreement', 'gender-neutral-grammar', 'grammar-registers', 'determiner-system'],
        simple: `<h3>⚖️ Agreement không chỉ là singular vs plural</h3>
            <p>Ở mức cao, concord còn liên quan đến <strong>notional agreement, proximity, coordinated subjects, collective nouns, singular they</strong> và khác biệt BrE/AmE.</p>
            <div class="example-box">
                • The team <em>is</em> winning. / The team <em>are</em> arguing among themselves.<br>
                • Either the teachers or the principal <em>is</em> responsible.<br>
                • Someone left their phone.
            </div>`,
        detail: `<h3>📚 Các trường hợp không thẳng tay theo hình thức</h3>
            <ul><li><strong>Notional agreement</strong>: nghĩa tập thể/quy ước quyết định verb, không chỉ hình thức số.</li>
            <li><strong>Collective nouns</strong>: BrE linh hoạt hơn với plural verb; AmE thường thiên singular.</li>
            <li><strong>Amounts / time / distance</strong>: <em>Ten years is a long time.</em></li>
            <li><strong>Titles and quoted names</strong>: <em>"The Grapes of Wrath" is...</em></li>
            <li><strong>Either/or, neither/nor</strong>: thường để verb hòa theo noun gần nhất trong usage hiện đại.</li></ul>
            <table><tr><th>Cấu trúc</th><th>Xu hướng</th></tr>
            <tr><td>More than one + singular noun</td><td>singular verb</td></tr>
            <tr><td>One of + plural noun</td><td>singular verb</td></tr>
            <tr><td>A number of + plural noun</td><td>plural verb</td></tr>
            <tr><td>The number of + plural noun</td><td>singular verb</td></tr>
            <tr><td>None of + plural noun</td><td>singular hoặc plural tùy style</td></tr></table>`,
        advanced: `<h3>🎯 Concord là nơi grammar gặp register</h3>
            <ul><li>Văn bản pháp lý, học thuật bảo thủ và style guide của từng tổ chức có thể chọn khác nhau ở những vùng xám như <em>none</em> hay collective nouns.</li>
            <li><strong>Singular they</strong> nay là chuẩn tự nhiên trong phần lớn ngữ cảnh hiện đại, nhưng bạn vẫn cần đọc hiểu và nhận diện các phong cách cũ hơn.</li>
            <li>Mức C2 nằm ở chỗ biết lựa chọn nào vừa đúng ngữ pháp vừa phù hợp giọng văn và cộng đồng diễn ngôn đang viết cho.</li></ul>`
    },

    'spoken-grammar': {
        icon: '🗣️', title: 'Spoken Grammar', category: 'patterns', level: 'advanced', cefr: 'C2',
        connections: ['connected-speech', 'tag-questions', 'politeness-indirectness', 'information-flow'],
        simple: `<h3>🗣️ Spoken grammar có quy tắc riêng</h3>
            <p>Ngữ pháp nói tự nhiên không phải bản viết bị rút ngắn. Nó có các hiện tượng riêng như <strong>ellipsis, headers, tails, vague language, discourse markers, repairs</strong>.</p>
            <div class="example-box">
                • Nice day, <em>isn't it?</em><br>
                • That guy next door, <em>he never sleeps</em>.<br>
                • Looks good to me.<br>
                • Sort of / kind of / and stuff like that.
            </div>`,
        detail: `<h3>📚 Những hiện tượng rất thường gặp</h3>
            <ul><li><strong>Ellipsis</strong>: bỏ phần đã rõ. <em>Seen John?</em> / <em>Want some?</em></li>
            <li><strong>Headers</strong>: nêu topic trước rồi mới đến clause chính. <em>That book, I haven't finished it yet.</em></li>
            <li><strong>Tails</strong>: thêm phần xác định lại ở cuối. <em>She's lovely, your sister.</em></li>
            <li><strong>Discourse markers</strong>: <em>well, you know, I mean, actually, right</em>.</li>
            <li><strong>Repair and restart</strong>: <em>I was going to... well, maybe not.</em></li></ul>
            <p>Spoken grammar cũng bao gồm tag questions, vague expressions, chunks và stance markers để giữ tương tác.</p>`,
        advanced: `<h3>🎯 Nói tự nhiên nhưng không bê vào essay</h3>
            <ul><li>Nhiều mẫu spoken grammar cực tự nhiên trong hội thoại nhưng không phù hợp cho formal writing.</li>
            <li>Hiểu spoken grammar giúp nghe thật tốt hơn nhiều, vì người bản ngữ không nói theo các câu textbook hoàn chỉnh.</li>
            <li>Ở C2, bạn cần chuyển register linh hoạt: dùng spoken grammar khi nói để tự nhiên, nhưng biết rút nó ra khi viết học thuật hoặc chuyên nghiệp.</li>
            <li>Đây là vùng rất quan trọng nếu mục tiêu là "biết hoàn toàn ngữ pháp" chứ không chỉ làm bài tập điền câu.</li></ul>`
    }
};
