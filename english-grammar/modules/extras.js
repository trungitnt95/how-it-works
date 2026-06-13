// Bổ sung các chủ điểm ngữ pháp còn thiếu để bao quát chương trình tiêu chuẩn
// (Murphy / Azar / Oxford). Tất cả component theo schema chung:
// { icon, title, category, level, connections, simple, detail, advanced }
const grammarExtrasData = {
    /* ========================= FOUNDATIONS ========================= */

    'existential-there': {
        icon: '📍',
        title: 'There is / There are',
        category: 'foundations',
        level: 'beginner',
        connections: ['subject-verb-agreement', 'sentence-order', 'quantifiers', 'dummy-it'],
        simple: `
            <h3>📍 "There" giới thiệu sự tồn tại</h3>
            <p>Khi muốn nói "có gì đó / có ai đó", tiếng Anh dùng cấu trúc <strong>There + be + N</strong>. "There" ở đây không có nghĩa "ở đó" mà chỉ là chủ ngữ giả.</p>
            <div class="formula-box">There is + danh từ số ít / không đếm được<br>There are + danh từ số nhiều</div>
            <div class="example-box">
                <strong>Ví dụ:</strong><br>
                • <em>There is a book on the table.</em><br>
                • <em>There are many students in the class.</em><br>
                • <em>There is some milk in the fridge.</em>
            </div>
        `,
        detail: `
            <h3>📚 Biến đổi theo thì và số</h3>
            <table>
                <tr><th>Thì</th><th>Số ít / Uncountable</th><th>Số nhiều</th></tr>
                <tr><td>Hiện tại</td><td>There is / There's</td><td>There are</td></tr>
                <tr><td>Quá khứ</td><td>There was</td><td>There were</td></tr>
                <tr><td>Hiện tại hoàn thành</td><td>There has been</td><td>There have been</td></tr>
                <tr><td>Tương lai</td><td>There will be</td><td>There will be</td></tr>
                <tr><td>Modal</td><td>There must / can / should be...</td><td>There must / can / should be...</td></tr>
            </table>
            <h4>Câu hỏi & phủ định</h4>
            <ul>
                <li><strong>Hỏi:</strong> <em>Is there a problem? / Are there any seats left?</em></li>
                <li><strong>Phủ định:</strong> <em>There isn't any sugar. / There aren't enough chairs.</em></li>
                <li><strong>Số lượng:</strong> <em>There are three reasons / There is no time.</em></li>
            </ul>
        `,
        advanced: `
            <h3>🎯 Quy tắc chia động từ theo danh từ liền sau</h3>
            <ul>
                <li>Liệt kê hỗn hợp → chia theo danh từ <strong>đầu tiên</strong>: <em>There is a pen and two books on the desk.</em></li>
                <li>Phủ định "no" + plural vẫn là <em>are</em>: <em>There are no tickets left.</em></li>
                <li>Khi mô tả "có tồn tại" trong văn viết học thuật, "there" giúp đưa thông tin mới ra cuối câu: <em>There exists a unique solution.</em></li>
                <li>Đừng nhầm "There is" (tồn tại) với "It is" (mô tả/đánh giá): ⚠️ <em>It is a book on the table</em> ❌ → <em>There is a book on the table</em> ✓</li>
            </ul>
            <div class="tip-box">
                <strong>💡 Mẹo:</strong> Nếu trong tiếng Việt câu bắt đầu bằng "Có..." → 90% trường hợp tiếng Anh dùng "There is/are".
            </div>
        `
    },

    'dummy-it': {
        icon: '💭',
        title: 'Dummy "It"',
        category: 'foundations',
        level: 'intermediate',
        connections: ['existential-there', 'sentence-order', 'noun-clauses', 'cleft-sentences'],
        simple: `
            <h3>💭 "It" làm chủ ngữ giả khi không có chủ thể thật</h3>
            <p>Tiếng Anh không thích câu thiếu chủ ngữ. Khi nói thời tiết, thời gian, khoảng cách, hoặc đánh giá, ta dùng <strong>It</strong> làm chủ ngữ "rỗng".</p>
            <div class="formula-box">It + be + (adj) + (to-V / that-clause)</div>
            <div class="example-box">
                <strong>Ví dụ:</strong><br>
                • <em>It is raining.</em> (thời tiết)<br>
                • <em>It is 7 o'clock.</em> (thời gian)<br>
                • <em>It is 5 km from here.</em> (khoảng cách)<br>
                • <em>It is important to study.</em> (đánh giá)
            </div>
        `,
        detail: `
            <h3>📚 Các kiểu dùng "It" giả</h3>
            <table>
                <tr><th>Mục đích</th><th>Mẫu</th><th>Ví dụ</th></tr>
                <tr><td>Thời tiết</td><td>It + be + adj/V-ing</td><td>It's sunny. It's snowing.</td></tr>
                <tr><td>Thời gian</td><td>It + be + time</td><td>It's half past three.</td></tr>
                <tr><td>Ngày/Mùa</td><td>It + be + date</td><td>It's Monday. It's spring.</td></tr>
                <tr><td>Khoảng cách</td><td>It + be + distance</td><td>It's 10 miles to town.</td></tr>
                <tr><td>Đánh giá</td><td>It + be + adj + to-V / that-clause</td><td>It's nice to meet you.</td></tr>
                <tr><td>Hoàn cảnh</td><td>It + seem/appear + that...</td><td>It seems that he's late.</td></tr>
            </table>
            <h4>Cấu trúc nâng giả + thực</h4>
            <ul>
                <li><strong>Chủ ngữ giả:</strong> <em>It is difficult to learn Japanese.</em> ↔ Chủ ngữ thật: <em>To learn Japanese is difficult.</em></li>
                <li><strong>Tân ngữ giả:</strong> <em>I find it hard to wake up early.</em></li>
            </ul>
        `,
        advanced: `
            <h3>🎯 Phân biệt "It" giả vs "It" thật</h3>
            <ul>
                <li><strong>It thật</strong> = đại từ thay cho danh từ đã nhắc: <em>I bought a phone. It is fast.</em></li>
                <li><strong>It giả</strong> = chỉ làm chủ ngữ ngữ pháp, không thay cho ai cả.</li>
                <li><strong>Cleft "It is X that..."</strong> dùng để nhấn mạnh: <em>It was John who broke the vase.</em> → xem <em>Cleft Sentences</em>.</li>
                <li>Trong văn viết, ưu tiên đưa cụm dài (to-V / that-clause) ra sau "it" để câu nhẹ hơn: <em>It is essential that all members attend.</em></li>
            </ul>
            <div class="warning-box">
                <strong>⚠️ Lỗi phổ biến:</strong> Dịch "Có..." thành <em>It is...</em>. Cấu trúc tồn tại phải dùng <strong>There is/are</strong>.
            </div>
        `
    },

    'reflexive-reciprocal': {
        icon: '🫂',
        title: 'Reflexive & Reciprocal Pronouns',
        category: 'foundations',
        level: 'intermediate',
        connections: ['pronouns-possessives', 'verbs-overview', 'parts-of-speech'],
        simple: `
            <h3>🫂 Đại từ phản thân & tương hỗ</h3>
            <p><strong>Reflexive</strong> dùng khi chủ ngữ và tân ngữ là cùng một người (myself, yourself...). <strong>Reciprocal</strong> dùng khi hai bên tác động qua lại (each other, one another).</p>
            <div class="formula-box">S + V + reflexive  |  S + V + each other / one another</div>
            <div class="example-box">
                <strong>Ví dụ:</strong><br>
                • <em>I cut myself while cooking.</em><br>
                • <em>They love each other.</em><br>
                • <em>The students helped one another.</em>
            </div>
        `,
        detail: `
            <h3>📚 Bộ đại từ phản thân</h3>
            <table>
                <tr><th>Số ít</th><th>Số nhiều</th></tr>
                <tr><td>myself, yourself</td><td>ourselves, yourselves</td></tr>
                <tr><td>himself, herself, itself, oneself</td><td>themselves</td></tr>
            </table>
            <h4>Ba vai trò chính</h4>
            <ul>
                <li><strong>Tân ngữ phản thân:</strong> <em>She introduced herself.</em></li>
                <li><strong>Nhấn mạnh:</strong> <em>I made the cake myself.</em> (chính tôi)</li>
                <li><strong>Sau giới từ chỉ "một mình":</strong> <em>by myself</em> = alone</li>
            </ul>
            <h4>Reciprocal: each other vs one another</h4>
            <ul>
                <li><strong>each other</strong> – truyền thống dùng cho 2 đối tượng</li>
                <li><strong>one another</strong> – truyền thống dùng cho 3+ đối tượng</li>
                <li>Hiện đại thường dùng thay thế nhau, không phân biệt nghiêm ngặt.</li>
                <li>Có sở hữu cách: <em>each other's books</em>, <em>one another's ideas</em>.</li>
            </ul>
        `,
        advanced: `
            <h3>🎯 Khi KHÔNG dùng reflexive</h3>
            <ul>
                <li>Sau các động từ vệ sinh / hằng ngày, tiếng Anh thường KHÔNG cần reflexive: <em>I wash / shave / dress every morning.</em> (không cần "myself").</li>
                <li>Sau giới từ chỉ vị trí, dùng <strong>object pronoun</strong>, không reflexive: <em>She put the bag next to her.</em> (không phải "herself").</li>
                <li>Phân biệt phản thân vs tương hỗ: <em>They blamed themselves</em> (mỗi người tự trách mình) vs <em>They blamed each other</em> (đổ lỗi qua lại).</li>
            </ul>
            <div class="tip-box">
                <strong>💡 Mẹo:</strong> Nếu hành động "tự làm cho chính mình" → reflexive; nếu "qua lại giữa các bên" → reciprocal.
            </div>
        `
    },

    'compound-nouns-possessives': {
        icon: '🏷️',
        title: 'Compound Nouns & Possessives',
        category: 'foundations',
        level: 'intermediate',
        connections: ['nouns-plurals', 'articles-determiners', 'pronouns-possessives'],
        simple: `
            <h3>🏷️ Danh từ ghép và sở hữu cách</h3>
            <p>Tiếng Anh có nhiều cách diễn tả "của ai/của cái gì": dùng <strong>'s</strong>, dùng <strong>of</strong>, hoặc ghép trực tiếp hai danh từ (compound noun).</p>
            <div class="formula-box">N's + N  |  N + of + N  |  N + N (compound)</div>
            <div class="example-box">
                <strong>Ví dụ:</strong><br>
                • <em>John's car</em> (sở hữu của người)<br>
                • <em>the leg of the table</em> (sở hữu của vật)<br>
                • <em>a coffee cup</em> (compound noun)
            </div>
        `,
        detail: `
            <h3>📚 Khi nào dùng 's, of, hay ghép?</h3>
            <table>
                <tr><th>Cấu trúc</th><th>Dùng cho</th><th>Ví dụ</th></tr>
                <tr><td>'s</td><td>người, động vật, thời gian, nhóm</td><td>Mary's bag, today's news, the team's win</td></tr>
                <tr><td>s' (số nhiều)</td><td>danh từ số nhiều tận cùng s</td><td>the students' books</td></tr>
                <tr><td>of</td><td>vật, khái niệm, mệnh đề dài</td><td>the roof of the house</td></tr>
                <tr><td>N + N</td><td>quan hệ phân loại, mục đích</td><td>a tooth brush, a bus stop</td></tr>
            </table>
            <h4>Quy tắc compound noun</h4>
            <ul>
                <li>Danh từ thứ nhất thường ở dạng <strong>số ít</strong>: <em>a shoe shop</em> (không phải "shoes shop"), <em>a five-year-old boy</em>.</li>
                <li>Số nhiều thường thêm vào danh từ <strong>cuối</strong>: <em>toothbrushes</em>, <em>bus stops</em>.</li>
                <li>Trọng âm thường rơi vào từ đầu: <strong>'COFFEE</strong> cup.</li>
            </ul>
        `,
        advanced: `
            <h3>🎯 Double genitive & nhóm sở hữu</h3>
            <ul>
                <li><strong>Double genitive:</strong> <em>a friend of mine / a colleague of John's</em> (= one of my friends / John's colleagues).</li>
                <li><strong>Sở hữu nhóm:</strong> <em>Tom and Jerry's show</em> (chung) vs <em>Tom's and Jerry's cars</em> (mỗi người một xe).</li>
                <li><strong>Đo lường, khoảng cách:</strong> <em>a ten-minute walk, a two-hour delay</em> (gạch nối, không "s").</li>
                <li>Tránh chuỗi 's quá dài: <em>my brother's friend's car</em> → đổi sang <em>the car of my brother's friend</em>.</li>
            </ul>
            <div class="warning-box">
                <strong>⚠️ Lỗi phổ biến:</strong> Viết <em>its'</em> ❌. Dạng sở hữu của "it" là <strong>its</strong> (không có dấu '). <em>It's</em> = It is.
            </div>
        `
    },

    'distributives': {
        icon: '🔢',
        title: 'Both / Either / Neither / All',
        category: 'foundations',
        level: 'intermediate',
        connections: ['quantifiers', 'pronouns-possessives', 'subject-verb-agreement', 'negatives'],
        simple: `
            <h3>🔢 Nhóm từ chỉ "cả hai / một trong hai / không cái nào"</h3>
            <p>Đây là các determiner/pronoun hay nhầm lẫn vì khác nhau ở số lượng và sắc thái.</p>
            <div class="formula-box">both = cả 2 (+) | either = 1 trong 2 | neither = 0 trong 2 | all = tất cả (3+)</div>
            <div class="example-box">
                • <em>Both books are useful.</em><br>
                • <em>Either day works for me.</em><br>
                • <em>Neither answer is correct.</em><br>
                • <em>All students passed.</em>
            </div>
        `,
        detail: `
            <h3>📚 Cấu trúc đầy đủ</h3>
            <table>
                <tr><th>Từ</th><th>Đi với</th><th>Động từ</th><th>Cặp tương hỗ</th></tr>
                <tr><td>both</td><td>N số nhiều / pronoun</td><td>plural</td><td>both ... and ...</td></tr>
                <tr><td>either</td><td>N số ít</td><td>singular</td><td>either ... or ...</td></tr>
                <tr><td>neither</td><td>N số ít</td><td>singular (formal)</td><td>neither ... nor ...</td></tr>
                <tr><td>all</td><td>N số nhiều / uncountable</td><td>theo danh từ</td><td>—</td></tr>
            </table>
            <h4>Vị trí với of</h4>
            <ul>
                <li><em>both of the boys</em> = <em>both boys</em></li>
                <li><em>either of these / neither of those</em> – luôn cần "of" trước đại từ/the.</li>
                <li><em>all of us / all of the students</em>; có thể bỏ "of" trước danh từ.</li>
            </ul>
        `,
        advanced: `
            <h3>🎯 Câu trả lời ngắn & ngữ điệu</h3>
            <ul>
                <li><strong>So / Neither + auxiliary + S:</strong> <em>I love coffee. — So do I.</em> / <em>I don't drink. — Neither do I.</em></li>
                <li>Trong văn nói, <em>none of them</em> thường đi với động từ số nhiều; văn viết trang trọng dùng số ít.</li>
                <li><strong>both / all</strong> đứng giữa: <em>We both agree. / They are all ready.</em> (sau be / trợ động từ).</li>
                <li><strong>Either ... or ...</strong> chia động từ theo chủ ngữ <strong>gần nhất</strong>: <em>Either you or your friend has the key.</em></li>
            </ul>
            <div class="tip-box">
                <strong>💡 Mẹo:</strong> "Neither" đã mang nghĩa phủ định → KHÔNG dùng "not" cùng nó. Sai: <em>I don't like neither.</em> Đúng: <em>I like neither.</em> hoặc <em>I don't like either.</em>
            </div>
        `
    },

    'indefinite-pronouns': {
        icon: '🎭',
        title: 'Indefinite Pronouns',
        category: 'foundations',
        level: 'intermediate',
        connections: ['quantifiers', 'pronouns-possessives', 'subject-verb-agreement', 'distributives'],
        simple: `
            <h3>🎭 Đại từ bất định: someone, anything, nobody...</h3>
            <p>Khi không cần (hoặc không biết) chính xác là ai/cái gì, ta dùng đại từ bất định. Chúng được ghép từ <strong>some / any / no / every</strong> + <strong>one / body / thing / where</strong>.</p>
            <div class="example-box">
                • <em>Someone is at the door.</em><br>
                • <em>Is there anything to eat?</em><br>
                • <em>Nobody knows the answer.</em><br>
                • <em>Everywhere was crowded.</em>
            </div>
        `,
        detail: `
            <h3>📚 Bảng tổng hợp</h3>
            <table>
                <tr><th></th><th>người</th><th>vật</th><th>nơi chốn</th></tr>
                <tr><td>some-</td><td>someone / somebody</td><td>something</td><td>somewhere</td></tr>
                <tr><td>any-</td><td>anyone / anybody</td><td>anything</td><td>anywhere</td></tr>
                <tr><td>no-</td><td>no one / nobody</td><td>nothing</td><td>nowhere</td></tr>
                <tr><td>every-</td><td>everyone / everybody</td><td>everything</td><td>everywhere</td></tr>
            </table>
            <h4>Quy tắc chia động từ</h4>
            <ul>
                <li>Tất cả đại từ bất định trên đều là <strong>số ít</strong>: <em>Everyone <u>is</u> here.</em></li>
                <li>Khi cần đại từ thay thế, văn nói dùng <strong>they/their</strong>: <em>Someone left their bag.</em></li>
            </ul>
            <h4>Khác: one, another, other(s), each, every</h4>
            <ul>
                <li><strong>one</strong> – thay danh từ đếm được số ít: <em>I prefer the red one.</em></li>
                <li><strong>another</strong> – thêm một (chưa xác định): <em>Have another cookie.</em></li>
                <li><strong>the other / others</strong> – cái còn lại / những cái còn lại.</li>
                <li><strong>each</strong> – từng cái (nhấn cá nhân) | <strong>every</strong> – mọi cái (nhấn tổng thể).</li>
            </ul>
        `,
        advanced: `
            <h3>🎯 some vs any: nguyên tắc nâng cao</h3>
            <ul>
                <li><strong>some</strong> mặc định cho khẳng định, nhưng dùng trong câu hỏi khi <em>mời / đề nghị / mong câu trả lời "yes"</em>: <em>Would you like some tea?</em></li>
                <li><strong>any</strong> trong khẳng định mang nghĩa <em>"bất kỳ cái nào"</em>: <em>Any student can apply.</em></li>
                <li><strong>no = not any:</strong> <em>I have no idea</em> = <em>I don't have any idea.</em></li>
                <li>Tính từ đứng SAU đại từ bất định: <em>something <u>strange</u>, someone <u>important</u>.</em></li>
            </ul>
            <div class="warning-box">
                <strong>⚠️ Tránh phủ định kép:</strong> <em>I don't know nothing</em> ❌ → <em>I don't know anything</em> ✓
            </div>
        `
    },

    'phrasal-prepositions': {
        icon: '📍',
        title: 'Phrasal Prepositions',
        category: 'foundations',
        level: 'intermediate',
        connections: ['prepositions', 'conjunctions', 'discourse-markers'],
        simple: `
            <h3>📍 Giới từ ghép & cụm giới từ</h3>
            <p>Ngoài giới từ đơn (in, on, at...), tiếng Anh dùng nhiều <strong>cụm giới từ</strong> gồm 2–3 từ để chỉ vị trí, lý do, mối quan hệ.</p>
            <div class="example-box">
                • <em>In front of the house there is a tree.</em><br>
                • <em>Because of the rain, we stayed home.</em><br>
                • <em>According to the report, sales went up.</em>
            </div>
        `,
        detail: `
            <h3>📚 Các cụm giới từ thông dụng</h3>
            <table>
                <tr><th>Nhóm</th><th>Cụm</th><th>Ví dụ</th></tr>
                <tr><td>Vị trí</td><td>in front of, next to, on top of, in the middle of, far from</td><td>The cat is on top of the wardrobe.</td></tr>
                <tr><td>Lý do</td><td>because of, due to, owing to, thanks to</td><td>The flight was cancelled due to fog.</td></tr>
                <tr><td>Tham chiếu</td><td>according to, in accordance with, with regard to</td><td>According to him, prices will fall.</td></tr>
                <tr><td>Tương phản</td><td>in spite of, despite, instead of, apart from</td><td>In spite of the cost, we bought it.</td></tr>
                <tr><td>Mục đích</td><td>in order to, so as to, for the sake of</td><td>She left early in order to catch the bus.</td></tr>
            </table>
        `,
        advanced: `
            <h3>🎯 Phân biệt cụm giới từ vs liên từ</h3>
            <ul>
                <li><strong>Because of</strong> + N | <strong>Because</strong> + clause: <em>because of the rain</em> vs <em>because it rained</em>.</li>
                <li><strong>Despite / In spite of</strong> + N/V-ing | <strong>Although / Though</strong> + clause.</li>
                <li><strong>Due to</strong> trong văn trang trọng đi sau be: <em>The delay was due to traffic.</em></li>
                <li>Sau cụm giới từ luôn là <strong>danh từ / V-ing</strong>, không phải mệnh đề.</li>
            </ul>
            <div class="tip-box">
                <strong>💡 Mẹo:</strong> Nếu sau "vì" trong tiếng Việt là một danh từ → dùng <em>because of / due to</em>; nếu là một mệnh đề → dùng <em>because</em>.
            </div>
        `
    },

    'adjective-order': {
        icon: '🎨',
        title: 'Trật Tự Tính Từ',
        category: 'foundations',
        level: 'intermediate',
        connections: ['adjectives-adverbs', 'comparisons', 'sentence-order'],
        simple: `
            <h3>🎨 Khi có nhiều tính từ trước danh từ, sắp xếp ra sao?</h3>
            <p>Tiếng Anh có một trật tự gần như cố định cho chuỗi tính từ. Sai trật tự nghe rất "lạ" với người bản xứ.</p>
            <div class="formula-box">Opinion → Size → Age → Shape → Colour → Origin → Material → Purpose → NOUN</div>
            <div class="example-box">
                • <em>a <u>lovely little old round black</u> Italian leather riding boot</em><br>
                • <em>a beautiful big new white wooden table</em>
            </div>
        `,
        detail: `
            <h3>📚 Bảng OSASCOMP chi tiết</h3>
            <table>
                <tr><th>Vị trí</th><th>Loại</th><th>Ví dụ</th></tr>
                <tr><td>1</td><td>Opinion (ý kiến)</td><td>nice, ugly, lovely, terrible</td></tr>
                <tr><td>2</td><td>Size (kích cỡ)</td><td>big, small, tiny, huge</td></tr>
                <tr><td>3</td><td>Age (tuổi)</td><td>old, young, new, ancient</td></tr>
                <tr><td>4</td><td>Shape (hình dạng)</td><td>round, square, flat</td></tr>
                <tr><td>5</td><td>Colour (màu)</td><td>red, blue, dark</td></tr>
                <tr><td>6</td><td>Origin (xuất xứ)</td><td>Vietnamese, French, Asian</td></tr>
                <tr><td>7</td><td>Material (chất liệu)</td><td>wooden, metal, silk</td></tr>
                <tr><td>8</td><td>Purpose (mục đích)</td><td>riding (boot), sleeping (bag)</td></tr>
            </table>
        `,
        advanced: `
            <h3>🎯 Quy tắc thực dụng</h3>
            <ul>
                <li>Hiếm khi dùng quá 3 tính từ liền nhau – nếu dài, hãy tách bằng dấu phẩy hoặc mệnh đề quan hệ.</li>
                <li>Tính từ cùng nhóm (cùng opinion, cùng colour) ngăn cách bằng <strong>dấu phẩy</strong> hoặc <strong>and</strong>: <em>a tired, hungry traveller</em>.</li>
                <li>Tính từ chỉ loại (nationality, material, purpose) sát danh từ nhất, không tách phẩy.</li>
                <li>Trong văn báo chí, opinion mạnh có thể đứng đầu để gây ấn tượng: <em>"Stunning new design"</em>.</li>
            </ul>
            <div class="tip-box">
                <strong>💡 Mẹo nhớ:</strong> "OSASCOMP" hay câu thơ <em>"Opinion - Size - Age - Shape - Colour - Origin - Material - Purpose"</em>.
            </div>
        `
    },

    'spelling-rules': {
        icon: '✏️',
        title: 'Quy Tắc Chính Tả',
        category: 'foundations',
        level: 'beginner',
        connections: ['present-simple', 'past-simple', 'present-continuous', 'nouns-plurals'],
        simple: `
            <h3>✏️ Quy tắc thêm -s, -ed, -ing, -er, -est</h3>
            <p>Khi chia động từ hoặc tạo dạng so sánh, tiếng Anh có quy tắc cụ thể về <strong>thêm e, gấp đôi phụ âm, đổi y → i</strong>. Nắm 5 nguyên tắc dưới đây sẽ tránh lỗi chính tả phổ biến nhất.</p>
        `,
        detail: `
            <h3>📚 5 nhóm quy tắc cốt lõi</h3>
            <table>
                <tr><th>Nguyên tắc</th><th>Ví dụ</th></tr>
                <tr><td>Tận cùng <strong>e</strong> câm → bỏ <em>e</em> trước -ing/-ed</td><td>make → making, love → loved</td></tr>
                <tr><td>Tận cùng <strong>ie</strong> → đổi <em>ie</em> thành <em>y</em> trước -ing</td><td>die → dying, lie → lying</td></tr>
                <tr><td>Tận cùng <strong>phụ âm + y</strong> → đổi <em>y</em> thành <em>i</em> trước -es/-ed/-er/-est</td><td>study → studies/studied, happy → happier</td></tr>
                <tr><td>Tận cùng <strong>nguyên âm + y</strong> → giữ nguyên</td><td>play → plays/played</td></tr>
                <tr><td>Một âm tiết, <strong>1 nguyên âm + 1 phụ âm</strong> cuối → gấp đôi phụ âm</td><td>stop → stopping, big → bigger</td></tr>
            </table>
            <h4>Số nhiều của danh từ</h4>
            <ul>
                <li>Tận cùng <strong>s, x, sh, ch, o</strong> → thêm <em>-es</em>: bus → buses, box → boxes, potato → potatoes.</li>
                <li>Tận cùng <strong>f / fe</strong> → đổi thành <em>v + es</em>: leaf → leaves, knife → knives.</li>
                <li>Bất quy tắc: man → men, child → children, foot → feet, mouse → mice...</li>
            </ul>
        `,
        advanced: `
            <h3>🎯 Trường hợp gấp đôi phụ âm trong từ nhiều âm tiết</h3>
            <ul>
                <li>Gấp đôi khi <strong>trọng âm rơi vào âm tiết cuối</strong>: be<u>GIN</u> → beginning, pre<u>FER</u> → preferred.</li>
                <li>Không gấp đôi nếu trọng âm KHÔNG ở âm cuối: <em>OPen → opening</em>, <em>VIsit → visited</em>.</li>
                <li>Anh-Anh: <em>travel → travelling</em> | Anh-Mỹ: <em>traveling</em>. Cả hai đều đúng theo chuẩn riêng.</li>
                <li>Từ tận cùng <strong>c</strong> thêm <em>k</em> trước -ing/-ed: panic → panicking, picnic → picnicked.</li>
            </ul>
            <div class="tip-box">
                <strong>💡 Cách kiểm tra:</strong> Đọc từ to lên – nếu trọng âm rơi cuối từ, gần như chắc chắn phải gấp đôi phụ âm.
            </div>
        `
    },

    /* ========================= TENSES / VERB SYSTEM ========================= */

    'have-got': {
        icon: '🤝',
        title: 'Have / Have got',
        category: 'tenses',
        level: 'beginner',
        connections: ['present-simple', 'present-perfect', 'modal-verbs'],
        simple: `
            <h3>🤝 Hai cách diễn đạt "có"</h3>
            <p><strong>Have</strong> và <strong>have got</strong> đều có nghĩa "có" (sở hữu, quan hệ, bệnh tật, đặc điểm). <em>Have got</em> phổ biến hơn ở Anh-Anh, văn nói; <em>have</em> chuẩn ở Anh-Mỹ và văn viết.</p>
            <div class="formula-box">I have a car. = I've got a car.</div>
            <div class="example-box">
                • <em>She has long hair. / She's got long hair.</em><br>
                • <em>I have a headache. / I've got a headache.</em>
            </div>
        `,
        detail: `
            <h3>📚 Câu hỏi & phủ định</h3>
            <table>
                <tr><th></th><th>have</th><th>have got</th></tr>
                <tr><td>Khẳng định</td><td>I have a dog.</td><td>I've got a dog.</td></tr>
                <tr><td>Phủ định</td><td>I don't have a dog.</td><td>I haven't got a dog.</td></tr>
                <tr><td>Câu hỏi</td><td>Do you have a dog?</td><td>Have you got a dog?</td></tr>
                <tr><td>Quá khứ</td><td>I had a dog. (don't use "had got")</td><td>—</td></tr>
            </table>
            <h4>Khi nào KHÔNG dùng have got</h4>
            <ul>
                <li>Diễn đạt hành động (eat, drink, take, do): <em>I have breakfast at 7.</em> ❌ <em>I've got breakfast at 7.</em></li>
                <li>Trong thì quá khứ: dùng <em>had</em>, không "had got".</li>
                <li>Trong văn viết trang trọng, học thuật.</li>
            </ul>
        `,
        advanced: `
            <h3>🎯 Have to vs have got to (nghĩa vụ)</h3>
            <ul>
                <li><strong>have to</strong> – nghĩa vụ chung, lặp lại: <em>I have to work on Saturdays.</em></li>
                <li><strong>have got to</strong> – nghĩa vụ ngay lúc này, văn nói: <em>I've got to go now!</em></li>
                <li>Trong quá khứ chỉ dùng <em>had to</em>: <em>I had to leave early.</em></li>
                <li>Phủ định khác nhau: <em>don't have to</em> = không cần phải; <em>mustn't</em> = cấm.</li>
            </ul>
        `
    },

    'used-to': {
        icon: '⏪',
        title: 'Used to / Be used to / Get used to',
        category: 'tenses',
        level: 'intermediate',
        connections: ['past-simple', 'gerunds-infinitives', 'modal-verbs'],
        simple: `
            <h3>⏪ Ba cấu trúc dễ nhầm: used to vs be/get used to</h3>
            <p>Cả ba đều liên quan tới "thói quen", nhưng nghĩa khác hẳn nhau.</p>
            <div class="formula-box">used to + V (thói quen quá khứ)<br>be used to + V-ing/N (đã quen rồi)<br>get used to + V-ing/N (đang/dần làm quen)</div>
            <div class="example-box">
                • <em>I used to smoke.</em> – trước đây hút, giờ không.<br>
                • <em>I am used to getting up early.</em> – đã quen.<br>
                • <em>I'm getting used to the cold.</em> – đang dần quen.
            </div>
        `,
        detail: `
            <h3>📚 So sánh chi tiết</h3>
            <table>
                <tr><th></th><th>used to + V</th><th>be used to + V-ing</th><th>get used to + V-ing</th></tr>
                <tr><td>Loại từ "used"</td><td>động từ khiếm khuyết</td><td>tính từ</td><td>tính từ + động từ get</td></tr>
                <tr><td>Nghĩa</td><td>thói quen / trạng thái QUÁ KHỨ, nay không còn</td><td>đã quen với điều gì đó</td><td>đang dần quen với điều gì đó</td></tr>
                <tr><td>Phủ định</td><td>didn't use to</td><td>am/is not used to</td><td>am/is not getting used to</td></tr>
                <tr><td>Câu hỏi</td><td>Did you use to ...?</td><td>Are you used to ...?</td><td>Are you getting used to ...?</td></tr>
            </table>
            <h4>Lưu ý chính tả</h4>
            <ul>
                <li>Trong câu hỏi/phủ định với <em>did</em>, viết là <strong>use to</strong> (không "d"): <em>Did you use to live there?</em></li>
                <li>Sau <em>be/get used</em> luôn là <strong>to + V-ing/N</strong>, "to" ở đây là giới từ.</li>
            </ul>
        `,
        advanced: `
            <h3>🎯 Phân biệt với would (thói quen quá khứ)</h3>
            <ul>
                <li><strong>used to</strong> dùng cho cả <em>hành động</em> lẫn <em>trạng thái</em>: <em>I used to live in Hue. / I used to play football.</em></li>
                <li><strong>would</strong> chỉ dùng cho <em>hành động lặp lại</em>, KHÔNG dùng cho trạng thái: <em>Every summer we would visit Grandma.</em> ❌ <em>I would live in Hue.</em></li>
                <li>Trong văn nói, người Anh có thể nói <em>I'm used to it</em> = "tôi quen rồi"; trả lời ngắn cho than phiền.</li>
            </ul>
            <div class="warning-box">
                <strong>⚠️ Lỗi:</strong> <em>I am used to wake up early.</em> ❌ → <em>I am used to waking up early.</em> ✓ ("to" + V-ing).
            </div>
        `
    },

    'time-prepositions-deep': {
        icon: '⏳',
        title: 'For / Since / During / While / By / Until',
        category: 'tenses',
        level: 'intermediate',
        connections: ['present-perfect', 'past-simple', 'past-continuous', 'prepositions'],
        simple: `
            <h3>⏳ Bộ giới từ thời gian dễ nhầm</h3>
            <p>Sáu từ này hay bị dùng sai vì tiếng Việt đều dịch là "trong/từ/đến". Nhớ ý nghĩa chính:</p>
            <div class="example-box">
                • <strong>for</strong> + <em>khoảng thời gian</em>: for 3 years<br>
                • <strong>since</strong> + <em>mốc bắt đầu</em>: since 2019<br>
                • <strong>during</strong> + <em>danh từ thời gian</em>: during the meeting<br>
                • <strong>while</strong> + <em>mệnh đề</em>: while I was reading<br>
                • <strong>by</strong> + <em>hạn cuối</em>: finish by Friday<br>
                • <strong>until / till</strong> + <em>tới khi nào</em>: wait until 5pm
            </div>
        `,
        detail: `
            <h3>📚 So sánh từng cặp dễ nhầm</h3>
            <table>
                <tr><th>Cặp</th><th>Khác nhau</th><th>Ví dụ</th></tr>
                <tr><td>for vs since</td><td>for + khoảng / since + mốc</td><td>for 5 years vs since 2020</td></tr>
                <tr><td>during vs while</td><td>during + N / while + clause</td><td>during the film vs while I watched</td></tr>
                <tr><td>by vs until</td><td>by = hạn chót | until = kéo dài đến</td><td>Submit by Friday. / I'll wait until Friday.</td></tr>
                <tr><td>in vs within</td><td>in = trong khoảng / within = không quá</td><td>in 2 hours vs within 2 hours</td></tr>
                <tr><td>ago vs before</td><td>ago = từ hiện tại / before = từ một mốc khác</td><td>2 days ago vs 2 days before he left</td></tr>
            </table>
        `,
        advanced: `
            <h3>🎯 Quy tắc kết hợp với thì</h3>
            <ul>
                <li><strong>for / since</strong> đặc biệt hợp với <em>Present Perfect</em>: <em>I've lived here for 5 years / since 2019.</em></li>
                <li><strong>during</strong> luôn theo sau bằng danh từ; nếu cần mệnh đề → đổi sang <strong>while</strong>.</li>
                <li><strong>by + thời điểm</strong> hợp với <em>Future Perfect</em>: <em>I'll have finished by 5pm.</em></li>
                <li><strong>until</strong> không dùng với hành động một lần: ❌ <em>He came until 8.</em> → <em>He didn't come until 8.</em></li>
            </ul>
        `
    },

    /* ========================= PATTERNS ========================= */

    'tag-questions': {
        icon: '❔',
        title: 'Tag Questions',
        category: 'patterns',
        level: 'intermediate',
        connections: ['question-forms', 'negatives', 'modal-verbs', 'subject-verb-agreement'],
        simple: `
            <h3>❔ Câu hỏi đuôi: "đúng không nhỉ?"</h3>
            <p>Là câu hỏi ngắn gắn vào cuối câu trần thuật để xác nhận thông tin hoặc khẳng định kỳ vọng.</p>
            <div class="formula-box">Câu khẳng định, trợ động từ phủ định + S?<br>Câu phủ định, trợ động từ khẳng định + S?</div>
            <div class="example-box">
                • <em>You're a doctor, aren't you?</em><br>
                • <em>She doesn't smoke, does she?</em><br>
                • <em>They went home, didn't they?</em>
            </div>
        `,
        detail: `
            <h3>📚 Quy tắc lập tag</h3>
            <table>
                <tr><th>Câu chính</th><th>Tag</th><th>Ví dụ</th></tr>
                <tr><td>be (am/is/are/was/were)</td><td>lặp lại be</td><td>It's hot, isn't it?</td></tr>
                <tr><td>trợ động từ (do/have/will...)</td><td>lặp lại trợ động từ</td><td>You can swim, can't you?</td></tr>
                <tr><td>không có trợ động từ</td><td>thêm do/does/did</td><td>He plays piano, doesn't he?</td></tr>
                <tr><td>I am ... (khẳng định)</td><td>aren't I?</td><td>I'm right, aren't I?</td></tr>
                <tr><td>Let's ...</td><td>shall we?</td><td>Let's go, shall we?</td></tr>
                <tr><td>Câu mệnh lệnh</td><td>will/won't/would you?</td><td>Open the door, will you?</td></tr>
            </table>
        `,
        advanced: `
            <h3>🎯 Ngữ điệu & sắc thái</h3>
            <ul>
                <li><strong>Tag xuống giọng ↘</strong> – muốn người nghe đồng ý, gần như khẳng định: <em>It's beautiful, isn't it? ↘</em></li>
                <li><strong>Tag lên giọng ↗</strong> – thật sự hỏi, chưa chắc: <em>You're going, aren't you? ↗</em></li>
                <li>Câu chứa từ phủ định nghĩa (never, hardly, no, nothing) → tag <strong>khẳng định</strong>: <em>He never lies, does he?</em></li>
                <li>Có một số mẫu đặc biệt: <em>I think he is, isn't he?</em> (chia tag theo mệnh đề chính is/isn't, không phải think).</li>
            </ul>
            <div class="tip-box">
                <strong>💡 Mẹo:</strong> "Khẳng – Phủ" hoặc "Phủ – Khẳng" – luôn đối ngược nhau.
            </div>
        `
    },

    'discourse-markers': {
        icon: '🔀',
        title: 'Linking Words & Discourse Markers',
        category: 'patterns',
        level: 'intermediate',
        connections: ['conjunctions', 'phrasal-prepositions', 'parallel-structure', 'result-structures'],
        simple: `
            <h3>🔀 Từ nối câu / liên kết ý cho văn viết</h3>
            <p>Discourse markers giúp văn bản mạch lạc, không khô. Khác với liên từ (and, but, so) nối <em>trong câu</em>, các từ này nối <em>giữa câu, giữa đoạn</em>.</p>
            <div class="example-box">
                • <em>The price is high. <strong>However</strong>, the quality is excellent.</em><br>
                • <em>He studies hard. <strong>As a result</strong>, he passed.</em><br>
                • <em>First, ... Second, ... Finally, ...</em>
            </div>
        `,
        detail: `
            <h3>📚 Phân nhóm theo mục đích</h3>
            <table>
                <tr><th>Quan hệ</th><th>Discourse markers</th></tr>
                <tr><td>Bổ sung</td><td>moreover, furthermore, in addition, besides, also, what's more</td></tr>
                <tr><td>Tương phản</td><td>however, nevertheless, nonetheless, on the other hand, in contrast, yet</td></tr>
                <tr><td>Nguyên nhân – kết quả</td><td>therefore, thus, hence, consequently, as a result, accordingly</td></tr>
                <tr><td>Ví dụ – cụ thể</td><td>for example, for instance, namely, in particular, such as</td></tr>
                <tr><td>Tóm tắt</td><td>in short, in summary, to sum up, overall, in conclusion</td></tr>
                <tr><td>Trình tự</td><td>first / firstly, then, next, after that, finally, eventually</td></tr>
                <tr><td>Diễn đạt lại</td><td>in other words, that is to say, i.e.</td></tr>
                <tr><td>Khẳng định mạnh</td><td>indeed, in fact, actually, certainly</td></tr>
            </table>
        `,
        advanced: `
            <h3>🎯 Quy tắc dấu câu & phong cách</h3>
            <ul>
                <li>Đa số discourse markers đứng đầu câu, sau đó dùng <strong>dấu phẩy</strong>: <em>However, the result was clear.</em></li>
                <li>Có thể đặt ở giữa câu, ngăn bằng phẩy: <em>The result, however, was clear.</em></li>
                <li>Văn nói thường dùng từ ngắn: <em>so, anyway, by the way, I mean, you know</em>.</li>
                <li>Tránh lạm dụng – mỗi đoạn chỉ cần 1–2 marker; nếu lạm dụng sẽ gây rối.</li>
            </ul>
            <div class="warning-box">
                <strong>⚠️ Lỗi phổ biến:</strong> Dùng <em>However</em> như liên từ: ❌ <em>I was tired however I worked.</em> Đúng: <em>I was tired. However, I worked.</em> hoặc <em>I was tired; however, I worked.</em>
            </div>
        `
    },

    'exclamatory-sentences': {
        icon: '😮',
        title: 'Câu Cảm Thán',
        category: 'patterns',
        level: 'intermediate',
        connections: ['question-forms', 'comparisons', 'sentence-types'],
        simple: `
            <h3>😮 Diễn tả cảm xúc với "What" và "How"</h3>
            <p>Câu cảm thán biểu lộ ngạc nhiên, vui mừng, ngưỡng mộ, tức giận. Hai khung phổ biến nhất:</p>
            <div class="formula-box">What (a/an) + (adj) + N (+ S + V)!<br>How + adj/adv (+ S + V)!</div>
            <div class="example-box">
                • <em>What a beautiful day!</em><br>
                • <em>What lovely flowers (these are)!</em><br>
                • <em>How interesting!</em><br>
                • <em>How fast he runs!</em>
            </div>
        `,
        detail: `
            <h3>📚 Phân biệt What vs How</h3>
            <table>
                <tr><th>Khung</th><th>Đi với</th><th>Ví dụ</th></tr>
                <tr><td>What + a/an + adj + N (số ít đếm được)</td><td>danh từ</td><td>What a great idea!</td></tr>
                <tr><td>What + adj + N (số nhiều / không đếm)</td><td>danh từ</td><td>What nice weather!</td></tr>
                <tr><td>How + adj/adv</td><td>tính/trạng từ</td><td>How wonderful!</td></tr>
                <tr><td>So / Such</td><td>nhấn mạnh</td><td>It's such a nice day! / He's so kind!</td></tr>
            </table>
        `,
        advanced: `
            <h3>🎯 Khung nâng cao</h3>
            <ul>
                <li><strong>Đảo ngữ với negative + auxiliary:</strong> <em>Never have I seen such beauty!</em></li>
                <li><strong>If only / I wish</strong> mang sắc thái cảm thán tiếc nuối: <em>If only I had known!</em></li>
                <li>Văn nói còn dùng <em>Boy! Wow! Oh dear!</em> kèm câu trần thuật: <em>Boy, that was tough!</em></li>
                <li>Trong văn viết trang trọng, hạn chế dấu chấm than – dùng tối đa 1 lần mỗi đoạn.</li>
            </ul>
        `
    },

    'substitution-ellipsis': {
        icon: '🔄',
        title: 'Substitution & Ellipsis',
        category: 'patterns',
        level: 'advanced',
        connections: ['negatives', 'parallel-structure', 'distributives', 'reported-speech'],
        simple: `
            <h3>🔄 Tránh lặp bằng "so / do / one"</h3>
            <p>Để câu gọn, tiếng Anh thay thế hoặc lược bỏ phần đã nhắc bằng các từ thay (substitution) hoặc bỏ trống (ellipsis).</p>
            <div class="example-box">
                • <em>Will it rain? — I think so.</em> (so = it will rain)<br>
                • <em>I love coffee. — I do too.</em> (do = love coffee)<br>
                • <em>Which shoes? — The black ones.</em> (ones = shoes)<br>
                • <em>I can swim and (I can) dive.</em> (lược bỏ I can)
            </div>
        `,
        detail: `
            <h3>📚 Substitution chính</h3>
            <ul>
                <li><strong>so / not</strong> sau think, hope, expect, suppose: <em>I hope so. / I'm afraid not.</em></li>
                <li><strong>do / does / did</strong> thay cho cả động từ + bổ ngữ: <em>She runs faster than I do.</em></li>
                <li><strong>one / ones</strong> thay danh từ đếm được: <em>I prefer the red one(s).</em></li>
                <li><strong>that / those</strong> trong văn trang trọng: <em>The climate of Hanoi is cooler than that of Saigon.</em></li>
            </ul>
            <h4>Ellipsis (lược)</h4>
            <ul>
                <li>Sau and/but/or: <em>She bought a book and (she bought) a pen.</em></li>
                <li>Sau to-infinitive: <em>I'd love to.</em> (to = đi)</li>
                <li>Trong câu so sánh: <em>She's taller than her brother (is).</em></li>
            </ul>
        `,
        advanced: `
            <h3>🎯 Cẩn thận với khung "so"</h3>
            <ul>
                <li><strong>So + auxiliary + S</strong> = "tôi cũng vậy" (khẳng định): <em>I'm tired. — So am I.</em></li>
                <li><strong>Neither / Nor + auxiliary + S</strong> = phủ định: <em>I don't know. — Neither do I.</em></li>
                <li><strong>S + auxiliary + so</strong> trong văn nói có thể chuyển thành: <em>I told you so</em> (tôi đã bảo mà).</li>
            </ul>
            <div class="tip-box">
                <strong>💡 Mẹo:</strong> Khi muốn không lặp, hỏi: cả cụm động từ → dùng "do"; danh từ đếm được → dùng "one(s)"; mệnh đề → dùng "so/not".
            </div>
        `
    },

    'comparative-correlatives': {
        icon: '📊',
        title: 'The + Comparative... The + Comparative',
        category: 'patterns',
        level: 'intermediate',
        connections: ['comparisons', 'parallel-structure', 'conditionals'],
        simple: `
            <h3>📊 "Càng... càng..."</h3>
            <p>Cấu trúc cho biết hai đại lượng thay đổi tỉ lệ với nhau.</p>
            <div class="formula-box">The + comparative + S + V, the + comparative + S + V</div>
            <div class="example-box">
                • <em>The harder you study, the better you score.</em><br>
                • <em>The more you read, the more you learn.</em><br>
                • <em>The older I get, the wiser I become.</em>
            </div>
        `,
        detail: `
            <h3>📚 Các biến thể</h3>
            <ul>
                <li><strong>Tính từ ngắn:</strong> the + adj-er — <em>The bigger, the better.</em></li>
                <li><strong>Tính từ dài:</strong> the more + adj — <em>The more expensive, the more luxurious.</em></li>
                <li><strong>Trạng từ:</strong> the + adv-er — <em>The faster you walk, the sooner you arrive.</em></li>
                <li><strong>Danh từ:</strong> the more + N — <em>The more money he has, the more friends he gets.</em></li>
                <li><strong>Lược động từ be</strong> ở văn nói: <em>The sooner, the better.</em></li>
            </ul>
        `,
        advanced: `
            <h3>🎯 Bẫy ngữ pháp</h3>
            <ul>
                <li>Đừng quên <strong>the</strong> ở cả hai vế.</li>
                <li>Sau "the more/less" thường có S + V: <em>The more I think about it, the less I understand.</em></li>
                <li>Trong văn nói, phần thứ hai có thể đảo: <em>The harder, the better.</em></li>
                <li>Có dấu phẩy ngăn cách hai vế.</li>
            </ul>
        `
    },

    /* ========================= STRUCTURES ========================= */

    'phrasal-verbs': {
        icon: '🧩',
        title: 'Phrasal Verbs',
        category: 'structures',
        level: 'intermediate',
        connections: ['verbs-overview', 'prepositions', 'gerunds-infinitives', 'word-formation'],
        simple: `
            <h3>🧩 Động từ + tiểu từ = nghĩa mới</h3>
            <p>Phrasal verb là động từ ghép với <strong>giới từ / trạng từ</strong> để tạo nghĩa mới. Nghĩa của cả cụm thường <strong>không thể đoán đơn giản từ từng từ riêng lẻ</strong>, nên phải học theo cụm và theo ngữ cảnh.</p>
            <div class="example-box">
                • <em>look</em> = nhìn, nhưng <em>look after</em> = chăm sóc, <em>look up</em> = tra cứu, <em>look for</em> = tìm.<br>
                • <em>give up</em> = từ bỏ, <em>put off</em> = trì hoãn, <em>take off</em> = cất cánh / cởi ra.
            </div>
        `,
        detail: `
            <h3>📚 4 loại phrasal verb</h3>
            <table>
                <tr><th>Loại</th><th>Đặc điểm</th><th>Ví dụ</th></tr>
                <tr><td>Intransitive</td><td>không có tân ngữ</td><td>break down, get up, take off (máy bay)</td></tr>
                <tr><td>Transitive separable</td><td>tân ngữ đặt giữa hoặc cuối; đại từ phải đặt giữa</td><td>turn the light off / turn it off (✓), turn off it (✗)</td></tr>
                <tr><td>Transitive inseparable</td><td>không tách rời được</td><td>look after the kids / look after them</td></tr>
                <tr><td>3 từ (V + adv + prep)</td><td>luôn đi liền nhau</td><td>look forward to, put up with, get along with</td></tr>
            </table>
            <h4>Nhớ thêm 2 điều quan trọng</h4>
            <ul>
                <li>Một phrasal verb có thể có <strong>nhiều nghĩa</strong>: <em>take off</em> = cất cánh / cởi áo / thành công nhanh.</li>
                <li>Nghĩa đen và nghĩa thành ngữ có thể khác xa nhau: <em>put off</em> không phải "đặt ra phía sau" mà là "trì hoãn".</li>
            </ul>
            <h4>Nhóm thông dụng nhất</h4>
            <ul>
                <li><strong>get</strong>: get up, get on, get along, get over, get rid of</li>
                <li><strong>take</strong>: take off, take after, take up, take care of</li>
                <li><strong>put</strong>: put on, put off, put up with, put away</li>
                <li><strong>turn</strong>: turn on/off, turn down, turn into, turn up</li>
                <li><strong>look</strong>: look up, look for, look after, look forward to</li>
                <li><strong>give</strong>: give up, give in, give back, give away</li>
                <li><strong>break</strong>: break down, break up, break out, break in</li>
                <li><strong>come</strong>: come across, come up with, come back, come over</li>
            </ul>
        `,
        advanced: `
            <h3>🎯 Học phrasal verb hiệu quả</h3>
            <ul>
                <li>Học theo <strong>nhóm tiểu từ</strong> (up/down/in/out) – mỗi tiểu từ thường mang sắc thái riêng: <em>up</em> = hoàn tất / tăng; <em>down</em> = giảm / ghi lại; <em>out</em> = phát ra / hết; <em>off</em> = tách / khởi đầu.</li>
                <li>Học theo <strong>câu</strong> chứ không học rời – tra cụm trong từ điển ví dụ.</li>
                <li>Với phrasal verb tách được, <strong>pronoun object</strong> phải đứng giữa: <em>turn it off</em>, <em>pick it up</em>.</li>
                <li>Văn trang trọng thường thay phrasal verb bằng động từ Latin: <em>put off</em> → <em>postpone</em>; <em>find out</em> → <em>discover</em>; <em>give up</em> → <em>abandon</em>.</li>
                <li>Một phrasal verb có thể có nhiều nghĩa: <em>take off</em> = cất cánh / cởi (áo) / nghỉ làm.</li>
                <li>Ba từ như <em>look forward to</em>, <em>put up with</em> phải giữ nguyên cụm, không chen tân ngữ vào giữa.</li>
            </ul>
            <h4>📚 Phân loại theo tiểu từ</h4>
            <table>
                <tr><th>Particle</th><th>Sắc thái thường gặp</th><th>Ví dụ</th></tr>
                <tr><td>up</td><td>hoàn tất, tăng, thu gom</td><td>finish up, use up, speed up, pick up</td></tr>
                <tr><td>out</td><td>lộ ra, hết, phân phát</td><td>find out, run out, hand out, carry out</td></tr>
                <tr><td>off</td><td>tách ra, hủy, khởi phát</td><td>take off, call off, cut off, set off</td></tr>
                <tr><td>down</td><td>giảm, ghi xuống, suy sụp</td><td>slow down, write down, break down</td></tr>
            </table>
            <h4>🧭 Theo chủ đề đời sống</h4>
            <ul>
                <li><strong>Công việc:</strong> carry out a task, follow up an email, take on a role, hand in a report.</li>
                <li><strong>Học tập:</strong> look up a word, go over notes, catch up on lessons, hand out worksheets.</li>
                <li><strong>Quan hệ:</strong> get along with, make up with, fall out with, look after.</li>
                <li><strong>Đời sống hằng ngày:</strong> wake up, set off, pick up, drop by, eat out.</li>
            </ul>
            <div class="tip-box">
                <strong>💡 Mẹo:</strong> Khi gặp phrasal verb mới, đoán nghĩa bằng cách kết hợp nghĩa gốc của động từ + ý nghĩa của tiểu từ trước khi tra từ điển.
            </div>
        `
    },

    'verb-patterns': {
        icon: '⚙️',
        title: 'Verb Patterns',
        category: 'structures',
        level: 'intermediate',
        connections: ['gerunds-infinitives', 'reported-speech', 'noun-clauses', 'causatives'],
        simple: `
            <h3>⚙️ Mỗi động từ "đòi" cấu trúc theo sau riêng</h3>
            <p>Một số động từ phải đi với <em>to-V</em>, một số đi với <em>V-ing</em>, một số đi với <em>that-clause</em>, hoặc <em>O + to-V</em>. Đây là phần khiến học sinh sai nhiều nhất.</p>
            <div class="example-box">
                • <em>I want <strong>to go</strong>.</em><br>
                • <em>I enjoy <strong>going</strong>.</em><br>
                • <em>I told her <strong>to go</strong>.</em><br>
                • <em>I think <strong>that he is right</strong>.</em>
            </div>
        `,
        detail: `
            <h3>📚 7 mẫu thường gặp</h3>
            <table>
                <tr><th>Mẫu</th><th>Ví dụ động từ</th><th>Câu</th></tr>
                <tr><td>V + to-V</td><td>want, decide, hope, plan, agree, refuse</td><td>She decided to leave.</td></tr>
                <tr><td>V + V-ing</td><td>enjoy, finish, avoid, mind, suggest, consider</td><td>I avoid eating sugar.</td></tr>
                <tr><td>V + O + to-V</td><td>tell, ask, want, allow, force, advise</td><td>He told me to wait.</td></tr>
                <tr><td>V + O + V (bare)</td><td>let, make, help, see, hear, watch (perception)</td><td>Let her go. / I saw him leave.</td></tr>
                <tr><td>V + that-clause</td><td>think, believe, say, know, hope, suggest</td><td>I think (that) it's late.</td></tr>
                <tr><td>V + wh-clause</td><td>know, ask, wonder, decide</td><td>I don't know what to do.</td></tr>
                <tr><td>V + O + as/to be</td><td>regard, consider, see</td><td>I regard her as a friend.</td></tr>
            </table>
        `,
        advanced: `
            <h3>🎯 Động từ đổi nghĩa khi đổi cấu trúc</h3>
            <ul>
                <li><strong>remember to do</strong> = nhớ phải làm | <strong>remember doing</strong> = nhớ đã làm.</li>
                <li><strong>forget to do</strong> = quên không làm | <strong>forget doing</strong> = quên rằng đã làm.</li>
                <li><strong>stop to do</strong> = dừng lại để làm | <strong>stop doing</strong> = ngừng làm.</li>
                <li><strong>try to do</strong> = cố gắng làm | <strong>try doing</strong> = thử làm xem sao.</li>
                <li><strong>regret to say</strong> = tiếc phải nói | <strong>regret saying</strong> = hối hận đã nói.</li>
                <li><strong>need to do</strong> (chủ động) | <strong>need doing</strong> (= need to be done): <em>The car needs washing.</em></li>
            </ul>
            <div class="warning-box">
                <strong>⚠️ Bẫy:</strong> <em>suggest + to V</em> ❌. Đúng: <em>suggest + V-ing</em> hoặc <em>suggest that S (should) V</em>.
            </div>
        `
    },

    'mixed-conditionals': {
        icon: '🌡️',
        title: 'Mixed & Inverted Conditionals',
        category: 'structures',
        level: 'advanced',
        connections: ['conditionals', 'inversion', 'wish-if-only', 'sequence-of-tenses'],
        simple: `
            <h3>🌡️ Khi điều kiện thuộc một thì, kết quả thuộc thì khác</h3>
            <p>Mixed conditional dùng khi điều kiện và kết quả nằm ở các mốc thời gian khác nhau (quá khứ ↔ hiện tại).</p>
            <div class="formula-box">If + S + had + V3, S + would + V (kết quả hiện tại)<br>If + S + V2, S + would have + V3 (kết quả quá khứ)</div>
            <div class="example-box">
                • <em>If I had studied medicine, I would be a doctor now.</em><br>
                • <em>If she were more careful, she wouldn't have made that mistake.</em>
            </div>
        `,
        detail: `
            <h3>📚 Bốn dạng nâng cao</h3>
            <table>
                <tr><th>Dạng</th><th>Cấu trúc</th><th>Nghĩa</th></tr>
                <tr><td>Mixed 3 → 2</td><td>If + had V3, would V</td><td>Quá khứ ảnh hưởng hiện tại</td></tr>
                <tr><td>Mixed 2 → 3</td><td>If + V2, would have V3</td><td>Tình trạng hiện tại đã ảnh hưởng quá khứ</td></tr>
                <tr><td>Inverted 1</td><td>Should + S + V, S + will + V</td><td>If + present (trang trọng)</td></tr>
                <tr><td>Inverted 2</td><td>Were + S + (to V), S + would + V</td><td>If + past (trang trọng)</td></tr>
                <tr><td>Inverted 3</td><td>Had + S + V3, S + would have V3</td><td>If + past perfect (trang trọng)</td></tr>
            </table>
            <h4>Ví dụ inverted</h4>
            <ul>
                <li><em>Should you need help, please call.</em></li>
                <li><em>Were I in your shoes, I would accept.</em></li>
                <li><em>Had I known, I would have come.</em></li>
            </ul>
        `,
        advanced: `
            <h3>🎯 Thay "if" bằng cấu trúc khác</h3>
            <ul>
                <li><strong>Unless</strong> = if not: <em>I won't go unless you come.</em></li>
                <li><strong>Provided / Providing (that), as long as, on condition that</strong>: nhấn điều kiện bắt buộc.</li>
                <li><strong>Suppose / Supposing / Imagine</strong> mở câu giả định, văn nói.</li>
                <li><strong>But for + N/V-ing</strong>: nếu không có... = if it weren't for / if it hadn't been for.</li>
                <li><strong>Otherwise</strong>: nếu không thì...</li>
            </ul>
            <div class="tip-box">
                <strong>💡 Mẹo:</strong> Inverted conditional thường thấy trong văn viết trang trọng, hợp đồng, văn học. Trong văn nói thường dùng "if".
            </div>
        `
    },

    'cleft-sentences': {
        icon: '🪞',
        title: 'Cleft & Pseudo-cleft Sentences',
        category: 'structures',
        level: 'advanced',
        connections: ['dummy-it', 'noun-clauses', 'inversion', 'parallel-structure'],
        simple: `
            <h3>🪞 Câu chẻ đôi để nhấn mạnh</h3>
            <p>Khi muốn nhấn mạnh một thành phần trong câu (chủ ngữ, tân ngữ, thời gian, lý do...), tiếng Anh "chẻ" câu thành 2 phần.</p>
            <div class="formula-box">It + be + X + that/who + ...<br>What + clause + be + X</div>
            <div class="example-box">
                Câu gốc: <em>John broke the vase yesterday.</em><br>
                • <em>It was John who broke the vase.</em> (nhấn John)<br>
                • <em>It was the vase that John broke.</em> (nhấn vase)<br>
                • <em>It was yesterday that John broke the vase.</em> (nhấn thời gian)<br>
                • <em>What John broke was the vase.</em> (pseudo-cleft)
            </div>
        `,
        detail: `
            <h3>📚 Hai khung chính</h3>
            <table>
                <tr><th>Khung</th><th>Vai trò</th><th>Ví dụ</th></tr>
                <tr><td>It-cleft: It + be + X + that-clause</td><td>nhấn người, vật, thời gian, nơi chốn, lý do</td><td>It is in Hanoi that I met her.</td></tr>
                <tr><td>Wh-cleft (pseudo): What... + be + X</td><td>nhấn hành động hoặc phần thông tin</td><td>What I need is more time.</td></tr>
                <tr><td>All-cleft: All + S + V + be + X</td><td>nhấn tính duy nhất / chỉ</td><td>All I want is peace.</td></tr>
                <tr><td>Reverse pseudo: X + be + what...</td><td>đặt X lên đầu</td><td>More time is what I need.</td></tr>
            </table>
        `,
        advanced: `
            <h3>🎯 Đại từ quan hệ trong it-cleft</h3>
            <ul>
                <li>Người: <strong>who / that</strong> – <em>It was Anna who/that called.</em></li>
                <li>Vật / thời gian / nơi chốn: <strong>that</strong> – <em>It was on Monday that we met.</em></li>
                <li>Khi nhấn vào danh từ làm tân ngữ, đại từ quan hệ có thể bỏ: <em>It was the book (that) I bought.</em></li>
                <li>Pseudo-cleft với <em>do</em> nhấn hành động: <em>What I did was call her.</em> (lưu ý dùng V-bare sau was).</li>
            </ul>
            <div class="tip-box">
                <strong>💡 Mẹo:</strong> Cleft đặc biệt hữu ích khi muốn <em>sửa thông tin sai</em>: "It wasn't John who broke it – it was Mary."
            </div>
        `
    },

    'reduced-relatives': {
        icon: '↙️',
        title: 'Reduced Relative Clauses',
        category: 'structures',
        level: 'advanced',
        connections: ['relative-clauses', 'participle-clauses', 'passive-voice', 'parallel-structure'],
        simple: `
            <h3>↙️ Rút gọn mệnh đề quan hệ cho gọn câu</h3>
            <p>Có thể bỏ đại từ quan hệ + động từ be để biến mệnh đề quan hệ thành cụm phân từ.</p>
            <div class="example-box">
                • <em>The man <strong>who is standing</strong> over there → The man <strong>standing</strong> over there.</em><br>
                • <em>The book <strong>which was written</strong> by him → The book <strong>written</strong> by him.</em><br>
                • <em>Anyone <strong>who wants</strong> to join → Anyone <strong>wanting</strong> to join.</em>
            </div>
        `,
        detail: `
            <h3>📚 Ba dạng rút gọn</h3>
            <table>
                <tr><th>Mệnh đề gốc</th><th>Rút thành</th><th>Ví dụ</th></tr>
                <tr><td>who/which + be + V-ing</td><td>V-ing (chủ động)</td><td>The man (who is) sitting next to me</td></tr>
                <tr><td>who/which + be + V3</td><td>V3 (bị động)</td><td>The book (which was) bought yesterday</td></tr>
                <tr><td>who/which + V (chủ động, lặp)</td><td>V-ing</td><td>People (who live) in cities → People living in cities</td></tr>
                <tr><td>who/which + be + adj/N</td><td>adj/N trực tiếp</td><td>The students (who were) absent...</td></tr>
                <tr><td>who/which + can/should + V</td><td>to-V</td><td>The first man (who) to land on the moon</td></tr>
            </table>
        `,
        advanced: `
            <h3>🎯 Cẩn thận với misplaced participle</h3>
            <ul>
                <li>Phân từ rút gọn phải đứng <strong>sát danh từ</strong> nó bổ nghĩa, nếu không sẽ gây hiểu sai.</li>
                <li>Sai: <em>Walking down the street, the building looked beautiful.</em> → "the building" không thể đi bộ.</li>
                <li>Sửa: <em>Walking down the street, I saw the beautiful building.</em></li>
                <li>Không rút gọn được khi mệnh đề quan hệ là <em>non-defining</em> chứa thông tin riêng biệt phụ thuộc vào ngữ cảnh.</li>
            </ul>
            <div class="tip-box">
                <strong>💡 Mẹo:</strong> Mệnh đề chủ động → V-ing; mệnh đề bị động → V3. Luôn kiểm tra lại nghĩa sau khi rút.
            </div>
        `
    },

    'reducing-adverbial-clauses': {
        icon: '🪶',
        title: 'Reducing Adverbial Clauses',
        category: 'structures',
        level: 'advanced',
        connections: ['adverbial-time-clauses', 'participle-clauses', 'reduced-relatives', 'sequence-of-tenses'],
        simple: `
            <h3>🪶 Rút gọn mệnh đề trạng ngữ để câu gọn và học thuật hơn</h3>
            <p>Khi <strong>chủ ngữ của hai mệnh đề giống nhau</strong>, ta có thể rút mệnh đề trạng ngữ thành cụm V-ing, V3 hoặc having + V3.</p>
            <div class="example-box">
                • <em>After she finished the report, she sent it.</em> → <em><strong>After finishing</strong> the report, she sent it.</em><br>
                • <em>Because he was warned in advance, he avoided the mistake.</em> → <em><strong>Warned</strong> in advance, he avoided the mistake.</em>
            </div>
        `,
        detail: `
            <h3>📚 4 kiểu rút gọn thường gặp</h3>
            <table>
                <tr><th>Mệnh đề gốc</th><th>Rút gọn</th><th>Ví dụ</th></tr>
                <tr><td>After/Before/When/While + S + V</td><td>after/before/when/while + V-ing</td><td>While waiting, I read the news.</td></tr>
                <tr><td>Because/As/Since + S + be + adj/V3</td><td>adj / V3 phrase</td><td>Afraid of being late, she left early.</td></tr>
                <tr><td>After + S + had + V3</td><td>Having + V3</td><td>Having finished the task, he went home.</td></tr>
                <tr><td>If + passive clause</td><td>if + V3 / when necessary omit be</td><td>When asked, she answered calmly.</td></tr>
            </table>
            <h4>Điều kiện bắt buộc</h4>
            <ul>
                <li>Hai mệnh đề phải có <strong>cùng chủ ngữ logic</strong>.</li>
                <li>Rút gọn giúp văn viết mượt hơn, đặc biệt trong essay và report.</li>
                <li>Không nên rút gọn nếu câu thành ra mơ hồ hoặc gượng.</li>
            </ul>
        `,
        advanced: `
            <h3>🎯 Lỗi hay gặp</h3>
            <ul>
                <li><strong>Dangling participle:</strong> <em>While driving home, the rain started.</em> ❌ vì "rain" không lái xe.</li>
                <li><strong>Having + V3</strong> chỉ dùng khi muốn nhấn hành động hoàn tất trước hành động chính.</li>
                <li>Trong văn học thuật, reduction làm câu trang trọng hơn; trong văn nói thường dùng mệnh đề đầy đủ cho rõ nghĩa.</li>
            </ul>
            <div class="tip-box">
                <strong>💡 Mẹo:</strong> Thử khôi phục lại mệnh đề đầy đủ. Nếu chủ ngữ hai vế không trùng nhau, đừng rút gọn.
            </div>
        `
    },

    'subjunctive': {
        icon: '🎼',
        title: 'Subjunctive Mood',
        category: 'structures',
        level: 'advanced',
        connections: ['noun-clauses', 'wish-if-only', 'conditionals', 'modal-verbs'],
        simple: `
            <h3>🎼 Thức giả định: bày tỏ yêu cầu / mong muốn / điều không thật</h3>
            <p>Subjunctive thường là <strong>V nguyên mẫu (bare V)</strong> sau các động từ/tính từ chỉ yêu cầu, đề nghị, quan trọng. Phổ biến hơn ở Anh-Mỹ.</p>
            <div class="formula-box">S + V (suggest/insist/...) + that + S + V(bare)<br>It is essential / vital / important + that + S + V(bare)</div>
            <div class="example-box">
                • <em>I suggest that he <strong>be</strong> on time.</em><br>
                • <em>It is essential that she <strong>attend</strong> the meeting.</em><br>
                • <em>The doctor recommended that he <strong>stop</strong> smoking.</em>
            </div>
        `,
        detail: `
            <h3>📚 Khi nào dùng subjunctive</h3>
            <table>
                <tr><th>Sau động từ</th><th>Sau tính từ</th></tr>
                <tr><td>suggest, recommend, insist, demand, request, propose, urge, require, advise, ask, order</td><td>essential, important, vital, necessary, crucial, imperative, advisable, desirable</td></tr>
            </table>
            <h4>Subjunctive trong cụm cố định</h4>
            <ul>
                <li><em>God save the Queen!</em></li>
                <li><em>Long live the king!</em></li>
                <li><em>Be that as it may...</em> (dù sao đi nữa)</li>
                <li><em>If I were you, ...</em> (subjunctive past – luôn dùng "were" cho mọi ngôi)</li>
            </ul>
        `,
        advanced: `
            <h3>🎯 Anh-Mỹ vs Anh-Anh</h3>
            <ul>
                <li>Anh-Mỹ giữ subjunctive nguyên gốc: <em>I insist that he go.</em></li>
                <li>Anh-Anh thường dùng <strong>should + V</strong>: <em>I insist that he should go.</em></li>
                <li>Cả hai đều đúng; chọn một phong cách và nhất quán.</li>
                <li>Phủ định subjunctive: <strong>not + V (bare)</strong>: <em>I suggest he not leave yet.</em> (không dùng "doesn't").</li>
                <li>Trong văn học thuật và công vụ, subjunctive xuất hiện nhiều sau <em>recommend / require / essential / imperative</em>.</li>
            </ul>
            <div class="warning-box">
                <strong>⚠️ Lỗi:</strong> <em>I suggest that he goes.</em> (không phải subjunctive). Đúng theo Anh-Mỹ: <em>I suggest that he go.</em>
            </div>
        `
    },

    'academic-style-grammar': {
        icon: '🎓',
        title: 'Academic Grammar: Nominalization & Gerund Subjects',
        category: 'structures',
        level: 'advanced',
        connections: ['subjunctive', 'verb-patterns', 'parallel-structure', 'grammar-registers'],
        simple: `
            <h3>🎓 Ngữ pháp học thuật ưu tiên danh hóa và cấu trúc trung tính</h3>
            <p>Academic writing thường biến động từ thành danh từ (<strong>nominalization</strong>) và dùng <strong>gerund phrase</strong> làm chủ ngữ để câu bớt mang tính hội thoại.</p>
            <div class="example-box">
                • <em>The government decided to act.</em> → <em><strong>The decision to act</strong> was made by the government.</em><br>
                • <em>People recycle more</em> → <em><strong>Recycling more</strong> reduces waste.</em>
            </div>
        `,
        detail: `
            <h3>📚 3 công cụ chính</h3>
            <table>
                <tr><th>Công cụ</th><th>Dạng</th><th>Ví dụ</th></tr>
                <tr><td>Nominalization</td><td>decide → decision, improve → improvement</td><td>The improvement of public transport is essential.</td></tr>
                <tr><td>Gerund subject</td><td>V-ing phrase làm chủ ngữ</td><td>Studying abroad requires adaptability.</td></tr>
                <tr><td>Objective tone</td><td>cụm danh từ + passive</td><td>Several factors were identified in the analysis.</td></tr>
            </table>
            <h4>Khi nào nên dùng</h4>
            <ul>
                <li><strong>Essay/report:</strong> cần văn phong trung tính, khách quan.</li>
                <li><strong>Topic sentence:</strong> dùng gerund subject để nêu luận điểm chung.</li>
                <li><strong>Academic paragraph:</strong> danh hóa giúp kết nối logic giữa các ý.</li>
            </ul>
        `,
        advanced: `
            <h3>🎯 Đừng danh hóa quá tay</h3>
            <ul>
                <li><em>The making of improvements in education</em> nghe nặng nề hơn <em>Improving education</em>.</li>
                <li>Văn học thuật tốt là <strong>rõ + chính xác</strong>, không phải cứ nhiều danh từ là hay.</li>
                <li><strong>Formal:</strong> conduct an analysis / make an observation. <strong>Less formal:</strong> analyze / notice.</li>
            </ul>
            <div class="tip-box">
                <strong>💡 Mẹo:</strong> Nếu cụm danh hóa làm câu dài và mờ chủ thể hành động, hãy cân nhắc quay về động từ chủ động.
            </div>
        `
    },

    'grammar-registers': {
        icon: '🎙️',
        title: 'Grammar Registers: BrE vs AmE, Formal vs Informal',
        category: 'structures',
        level: 'advanced',
        connections: ['have-got', 'subjunctive', 'phrasal-verbs', 'academic-style-grammar'],
        simple: `
            <h3>🎙️ Cùng một ý nhưng ngữ pháp đổi theo vùng miền và ngữ cảnh</h3>
            <p>Không phải cấu trúc nào đúng ngữ pháp cũng hợp mọi tình huống. Người học cần biết sự khác nhau giữa <strong>BrE vs AmE</strong> và <strong>formal vs informal</strong>.</p>
            <div class="example-box">
                • <em>Have you got a pen?</em> (BrE, spoken)<br>
                • <em>Do you have a pen?</em> (AmE, neutral)<br>
                • <em>Put off the meeting</em> (neutral/spoken) → <em>Postpone the meeting</em> (formal writing)
            </div>
        `,
        detail: `
            <h3>📚 BrE vs AmE</h3>
            <table>
                <tr><th>Ý</th><th>British English</th><th>American English</th></tr>
                <tr><td>Sở hữu</td><td>Have you got...?</td><td>Do you have...?</td></tr>
                <tr><td>Thời gian gần</td><td>I've just eaten.</td><td>I just ate.</td></tr>
                <tr><td>Cuối tuần</td><td>at the weekend</td><td>on the weekend</td></tr>
                <tr><td>Subjunctive</td><td>suggest that he should go</td><td>suggest that he go</td></tr>
                <tr><td>Tập thể</td><td>The team <strong>are</strong> playing well.</td><td>The team <strong>is</strong> playing well.</td></tr>
                <tr><td>Bệnh viện / đại học</td><td>in hospital / at university</td><td>in the hospital / in college</td></tr>
                <tr><td>Giới từ thời gian</td><td>Monday to Friday</td><td>Monday through Friday</td></tr>
                <tr><td>Needn't / don't need to</td><td>cả hai đều phổ biến</td><td>thường dùng don't need to hơn</td></tr>
            </table>
            <h4>Formal vs informal</h4>
            <ul>
                <li><strong>Formal writing:</strong> full clause, fewer contractions, Latin verbs, nominalization hợp lý.</li>
                <li><strong>Informal speech:</strong> contractions, phrasal verbs, ellipsis, lighter structure.</li>
                <li><strong>Examples:</strong> <em>children</em> vs <em>kids</em>; <em>obtain</em> vs <em>get</em>; <em>therefore</em> vs <em>so</em>.</li>
            </ul>
        `,
        advanced: `
            <h3>🎯 Chọn register đúng chỗ</h3>
            <ul>
                <li>Essay IELTS/academic report: ưu tiên <em>therefore, however, conduct research, demonstrate</em>.</li>
                <li>Speaking hằng ngày: tự nhiên hơn với <em>so, anyway, find out, get back, have got</em>.</li>
                <li><strong>BrE</strong> giữ Present Perfect mạnh hơn với <em>just, already, yet</em>, còn <strong>AmE</strong> linh hoạt hơn với Past Simple trong khẩu ngữ.</li>
                <li><strong>BrE vs AmE</strong> không chỉ là từ vựng; khác biệt còn nằm ở agreement, prepositions, và mức chấp nhận của một số cấu trúc như subjunctive.</li>
                <li>Đừng trộn quá nhiều formal grammar vào hội thoại đời thường nếu mục tiêu là nói tự nhiên.</li>
            </ul>
            <div class="tip-box">
                <strong>💡 Mẹo:</strong> Trước khi chọn cấu trúc, hãy hỏi: đây là <em>essay, email công việc, hay trò chuyện</em>? Và người đọc đang nghiêng về <em>BrE</em> hay <em>AmE</em>?
            </div>
        `
    },

    'prepositional-phrases': {
        icon: '🧭',
        title: 'Prepositional Phrases & Fixed Expressions',
        category: 'foundations',
        level: 'intermediate',
        connections: ['prepositions', 'collocations-pairs', 'discourse-markers'],
        simple: `
            <h3>🧭 Cụm giới từ cố định không nên dịch từng chữ</h3>
            <p>Nhiều cụm như <em>by mistake</em>, <em>on purpose</em>, <em>in the long run</em> hoạt động như một khối nghĩa hoàn chỉnh.</p>
            <div class="example-box">
                • <em>I took your bag <strong>by mistake</strong>.</em><br>
                • <em>She broke the rule <strong>on purpose</strong>.</em><br>
                • <em><strong>In the long run</strong>, saving wins.</em>
            </div>
        `,
        detail: `
            <h3>📚 Nhóm cụm nên học như bảng tra cứu</h3>
            <table>
                <tr><th>Nhóm</th><th>Cụm tiêu biểu</th></tr>
                <tr><td>Cách thức</td><td>by mistake, on purpose, by chance, in person, in private</td></tr>
                <tr><td>Thời gian</td><td>in the meantime, at first, in the long run, on time, in time</td></tr>
                <tr><td>Quan điểm / thái độ</td><td>in my opinion, by all means, at least, on the whole</td></tr>
                <tr><td>Nguyên nhân / kết quả</td><td>because of, due to, as a result of, in response to</td></tr>
            </table>
            <h4>Điểm cần nhớ</h4>
            <ul>
                <li><strong>because of / due to</strong> + noun phrase, không đi trực tiếp với clause đầy đủ.</li>
                <li><strong>on time</strong> = đúng giờ; <strong>in time</strong> = kịp lúc.</li>
                <li><strong>at the end</strong> = ở cuối vị trí/sự kiện; <strong>in the end</strong> = cuối cùng.</li>
            </ul>
        `,
        advanced: `
            <h3>🎯 Học như collocation, không học như công thức trống</h3>
            <ul>
                <li>Cụm giới từ cố định thường quyết định độ tự nhiên của speaking/writing nhiều hơn một quy tắc riêng lẻ.</li>
                <li>Trong essay, ưu tiên cụm chuyển ý rõ: <em>in contrast, in addition, in the long term, as a result</em>.</li>
                <li>Trong giao tiếp, cụm ngắn rất thường gặp: <em>at least, by the way, on purpose, in a hurry</em>.</li>
            </ul>
            <div class="tip-box">
                <strong>💡 Mẹo:</strong> Mỗi lần học giới từ mới, học luôn 2-3 cụm đi cùng nó thay vì chỉ học nghĩa từ điển.
            </div>
        `
    },

    'modal-perfect': {
        icon: '🔮',
        title: 'Modal Perfect (must have, could have...)',
        category: 'structures',
        level: 'advanced',
        connections: ['modal-verbs', 'past-simple', 'wish-if-only', 'conditionals'],
        simple: `
            <h3>🔮 Modal + have + V3: nói về QUÁ KHỨ</h3>
            <p>Cấu trúc <em>modal + have + V3</em> dùng khi suy đoán, nuối tiếc, chỉ trích về một việc đã diễn ra.</p>
            <div class="formula-box">modal + have + V3</div>
            <div class="example-box">
                • <em>You must have been tired.</em> (chắc chắn đã mệt)<br>
                • <em>I should have called her.</em> (đáng lẽ nên gọi)<br>
                • <em>He might have forgotten.</em> (có thể đã quên)
            </div>
        `,
        detail: `
            <h3>📚 Sắc thái từng modal</h3>
            <table>
                <tr><th>Cấu trúc</th><th>Nghĩa</th><th>Ví dụ</th></tr>
                <tr><td>must have V3</td><td>chắc chắn đã (suy luận)</td><td>The road is wet. It must have rained.</td></tr>
                <tr><td>can't / couldn't have V3</td><td>chắc chắn không thể đã</td><td>She can't have seen me. I wasn't there.</td></tr>
                <tr><td>may / might / could have V3</td><td>có thể đã (50/50)</td><td>He might have missed the bus.</td></tr>
                <tr><td>should / ought to have V3</td><td>đáng lẽ nên (tiếc nuối, chỉ trích)</td><td>You should have told me earlier.</td></tr>
                <tr><td>shouldn't have V3</td><td>đáng lẽ không nên</td><td>I shouldn't have eaten so much.</td></tr>
                <tr><td>needn't have V3</td><td>không cần phải, nhưng vẫn làm</td><td>You needn't have cooked – we ate already.</td></tr>
                <tr><td>didn't need to V</td><td>không cần phải, và đã không làm</td><td>We didn't need to bring food.</td></tr>
                <tr><td>would have V3</td><td>đã làm trong điều kiện khác</td><td>I would have come if I had known.</td></tr>
            </table>
        `,
        advanced: `
            <h3>🎯 Modal perfect dạng tiếp diễn</h3>
            <ul>
                <li><strong>must have been + V-ing</strong>: <em>You must have been waiting for hours!</em></li>
                <li><strong>should have been + V-ing</strong>: <em>You should have been listening.</em></li>
                <li><strong>could have been + V-ing</strong>: <em>He could have been working then.</em></li>
                <li>Trong văn nói nhanh, "have" thường nghe thành "of" – đây là lỗi chính tả phổ biến: ❌ <em>could of been</em> → ✓ <em>could have been</em>.</li>
            </ul>
            <div class="tip-box">
                <strong>💡 Mẹo:</strong> Phân biệt theo độ chắc: must (gần 100%) > should/ought (kỳ vọng) > may/might/could (có thể) > can't (không thể).
            </div>
        `
    },

    'direct-indirect-objects': {
        icon: '🎯',
        title: 'Direct & Indirect Objects',
        category: 'structures',
        level: 'intermediate',
        connections: ['verbs-overview', 'sentence-order', 'passive-voice', 'pronouns-possessives'],
        simple: `
            <h3>🎯 Một số động từ có 2 tân ngữ</h3>
            <p>Với các động từ "cho/đưa/gửi/bảo/dạy" (give, send, tell, teach, show, buy, make...), có thể đi kèm <strong>indirect object</strong> (người nhận) và <strong>direct object</strong> (vật).</p>
            <div class="formula-box">S + V + IO + DO  ↔  S + V + DO + to/for + IO</div>
            <div class="example-box">
                • <em>She gave <u>me</u> <u>a book</u>.</em><br>
                • <em>She gave <u>a book</u> <u>to me</u>.</em>
            </div>
        `,
        detail: `
            <h3>📚 Dùng "to" hay "for"?</h3>
            <table>
                <tr><th>Giới từ</th><th>Động từ điển hình</th></tr>
                <tr><td>to</td><td>give, send, tell, show, lend, offer, pass, write, teach, sell, throw</td></tr>
                <tr><td>for</td><td>buy, make, cook, get, find, build, choose, save, order</td></tr>
            </table>
            <h4>Bị động hai dạng</h4>
            <ul>
                <li>Chuyển IO làm chủ ngữ: <em>I was given a book.</em></li>
                <li>Chuyển DO làm chủ ngữ: <em>A book was given to me.</em></li>
                <li>Cả hai đều đúng nhưng câu đầu tự nhiên hơn trong văn nói.</li>
            </ul>
        `,
        advanced: `
            <h3>🎯 Bẫy trật tự khi dùng đại từ</h3>
            <ul>
                <li>Khi DO là <strong>đại từ</strong> (it, them, him...), bắt buộc dùng dạng có giới từ: <em>Give it to me</em> ✓ (không "Give me it" trong văn trang trọng).</li>
                <li>Một số động từ <strong>không</strong> đảo IO/DO được: explain, describe, suggest, mention, introduce, announce → chỉ dùng <em>to + IO</em>: <em>She explained the rule to me.</em> (không "She explained me the rule").</li>
                <li>Trong văn nói thân mật người Anh có thể nói <em>I'll send you it.</em>, người Mỹ thường tránh.</li>
            </ul>
            <div class="warning-box">
                <strong>⚠️ Lỗi điển hình:</strong> <em>She explained me the lesson.</em> ❌ → <em>She explained the lesson to me.</em> ✓
            </div>
        `
    },

    /* ========================= PRONUNCIATION ========================= */

    'connected-speech': {
        icon: '🌊',
        title: 'Connected Speech & Weak Forms',
        category: 'pronunciation',
        level: 'advanced',
        connections: ['stress-schwa', 'ipa-vowels', 'ipa-consonants', 'ipa-overview'],
        simple: `
            <h3>🌊 Vì sao người bản xứ nói nhanh khó nghe?</h3>
            <p>Trong nói liền câu, các từ "dính" vào nhau qua các hiện tượng <strong>linking, elision, assimilation, weak forms</strong>. Đây là chìa khoá để nghe hiểu tự nhiên.</p>
            <div class="example-box">
                • <em>an apple</em> → /ə'næpl/ (nối /n/ + /æ/)<br>
                • <em>fish and chips</em> → /'fɪʃn'tʃɪps/ (and → /n/)<br>
                • <em>I want to go</em> → /aɪ 'wɒnə ɡəʊ/ (want to → wanna)
            </div>
        `,
        detail: `
            <h3>📚 4 hiện tượng chính</h3>
            <table>
                <tr><th>Hiện tượng</th><th>Mô tả</th><th>Ví dụ</th></tr>
                <tr><td>Linking (catenation)</td><td>nối phụ âm cuối với nguyên âm đầu</td><td>turn off → /tɜːr nɒf/</td></tr>
                <tr><td>Intrusion</td><td>thêm /j/, /w/, /r/ giữa hai nguyên âm</td><td>I am → /aɪ jæm/</td></tr>
                <tr><td>Elision</td><td>nuốt âm</td><td>next day → /neks deɪ/, friendship → /'frenʃɪp/</td></tr>
                <tr><td>Assimilation</td><td>âm đổi gần với âm bên cạnh</td><td>good boy → /ɡʊb bɔɪ/, ten people → /tem 'piːpl/</td></tr>
            </table>
            <h4>Weak forms (dạng yếu)</h4>
            <ul>
                <li>Các từ ngữ pháp (a, an, the, and, but, of, to, for, can, do, have...) khi không nhấn sẽ chuyển thành <strong>schwa /ə/</strong>.</li>
                <li><em>cup of tea</em> → /'kʌp əv 'tiː/, <em>fish and chips</em> → /'fɪʃ ən 'tʃɪps/</li>
                <li><em>can</em> mạnh /kæn/, can yếu /kən/. Phủ định <em>can't</em> luôn mạnh /kɑːnt/.</li>
            </ul>
        `,
        advanced: `
            <h3>🎯 Intonation – ngữ điệu</h3>
            <ul>
                <li><strong>Falling tone ↘</strong>: câu trần thuật, câu hỏi Wh-, câu mệnh lệnh.</li>
                <li><strong>Rising tone ↗</strong>: câu hỏi yes/no, câu nghi vấn, liệt kê chưa hết.</li>
                <li><strong>Fall-rise ↘↗</strong>: nghi ngờ, gợi ý, lịch sự.</li>
                <li><strong>Rise-fall ↗↘</strong>: ngạc nhiên, mỉa mai.</li>
                <li>Trọng âm câu (sentence stress) rơi vào từ <em>nội dung</em> (noun, verb, adj, adv); từ ngữ pháp thường giảm âm.</li>
            </ul>
            <div class="tip-box">
                <strong>💡 Luyện tập:</strong> Nghe shadowing với podcast tốc độ chậm, đánh dấu chỗ nối/ nuốt âm và bắt chước theo. Đừng cố phát âm rời từng từ – tiếng Anh là chuỗi âm thanh liên tục.
            </div>
        `
    }
};
