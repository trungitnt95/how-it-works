// Extra grammar coverage, practice data, and memorization bank
const grammarSupplementsData = {
    'verbs-overview': {
        icon: '⚙️',
        title: 'Động Từ',
        category: 'foundations',
        level: 'beginner',
        connections: ['parts-of-speech', 'sentence-order', 'subject-verb-agreement', 'gerunds-infinitives'],
        simple: `
            <h3>⚙️ Động từ là lõi của câu tiếng Anh</h3>
            <p>Sau khi rà lại sách, đây là một chương nên có node riêng: sách tách riêng <strong>transitive verbs, intransitive verbs, linking verbs</strong> và vai trò của bổ ngữ/tân ngữ.</p>
            <div class="formula-box">S + V | S + V + O | S + linking verb + complement</div>
            <div class="example-box">
                <strong>Ví dụ:</strong><br>
                • <em>The baby cried.</em> = intransitive<br>
                • <em>She opened the window.</em> = transitive<br>
                • <em>The soup tastes good.</em> = linking verb
            </div>
            <ul>
                <li><strong>Transitive verb:</strong> cần tân ngữ</li>
                <li><strong>Intransitive verb:</strong> không cần tân ngữ</li>
                <li><strong>Linking verb:</strong> nối chủ ngữ với bổ ngữ</li>
            </ul>
        `,
        detail: `
            <h3>📚 Ba nhóm chính trong sách</h3>
            <table>
                <tr><th>Nhóm</th><th>Đặc điểm</th><th>Ví dụ</th></tr>
                <tr><td>Transitive</td><td>đi với object</td><td>build a house, write an email</td></tr>
                <tr><td>Intransitive</td><td>tự đủ nghĩa</td><td>arrive, sleep, smile</td></tr>
                <tr><td>Linking</td><td>đi với complement</td><td>be, seem, become, look, feel</td></tr>
            </table>
            <h4>Điểm hay gặp trong bài học</h4>
            <ul>
                <li>Một số động từ có thể vừa transitive vừa intransitive tùy ngữ cảnh: <em>open</em>, <em>change</em>, <em>move</em>.</li>
                <li>Linking verbs thường đi với <strong>adjective</strong> hoặc noun complement, không đi với adverb: <em>She looks tired</em>.</li>
                <li>Auxiliary verbs như <em>be, do, have</em> và modal verbs giúp tạo thì, phủ định, nghi vấn nhưng không phải lúc nào cũng là main verb.</li>
            </ul>
        `,
        advanced: `
            <h3>🎯 Chỗ dễ nhầm</h3>
            <ul>
                <li>Nhiều người thấy sau động từ là một từ miêu tả liền dùng adverb, trong khi linking verbs cần adjective: <em>The idea sounds good</em>.</li>
                <li>Động từ có hai tân ngữ như <em>give, send, tell</em> tạo mẫu <strong>S + V + indirect object + direct object</strong>.</li>
                <li>Khi học một động từ mới, nên học luôn nó thuộc nhóm nào và có đi với preposition/object/complement nào không.</li>
            </ul>
            <div class="tip-box">
                <strong>💡 Mẹo:</strong> Nếu câu nghe thiếu một "đối tượng bị tác động", hãy kiểm tra xem động từ đó có phải là transitive verb đang thiếu object hay không.
            </div>
        `
    },
    'nouns-plurals': {
        icon: '🧺',
        title: 'Danh Từ & Số Nhiều',
        category: 'foundations',
        level: 'beginner',
        connections: ['parts-of-speech', 'articles-determiners', 'countable-uncountable', 'subject-verb-agreement'],
        simple: `
            <h3>🧺 Danh từ là trung tâm của nhiều lỗi ngữ pháp</h3>
            <p>Bạn cần biết danh từ đang ở dạng <strong>số ít hay số nhiều</strong>, <strong>đếm được hay không đếm được</strong>, và có đang đi với lượng từ / mạo từ phù hợp hay không.</p>
            <div class="formula-box">one noun | two nouns | a number of + plural noun | the number of + plural noun</div>
            <div class="example-box">
                <strong>Ví dụ:</strong><br>
                • <em>one student</em> / <em>two students</em><br>
                • <em>a child</em> / <em>many children</em>
            </div>
            <ul>
                <li><strong>Regular plural:</strong> thêm <em>-s/-es</em></li>
                <li><strong>Irregular plural:</strong> phải học thuộc như <em>man → men</em></li>
                <li><strong>Zero plural:</strong> một số từ giữ nguyên như <em>sheep</em>, <em>deer</em></li>
            </ul>
        `,
        detail: `
            <h3>📚 Các mẫu đổi số nhiều quan trọng</h3>
            <table>
                <tr><th>Mẫu</th><th>Ví dụ</th><th>Ghi nhớ</th></tr>
                <tr><td>noun + s</td><td>book → books</td><td>mẫu phổ biến nhất</td></tr>
                <tr><td>noun + es</td><td>bus → buses, watch → watches</td><td>s, x, z, ch, sh</td></tr>
                <tr><td>y → ies</td><td>city → cities</td><td>khi trước <em>y</em> là phụ âm</td></tr>
                <tr><td>f/fe → ves</td><td>leaf → leaves</td><td>không áp dụng cho mọi từ</td></tr>
                <tr><td>irregular</td><td>tooth → teeth</td><td>không suy ra bằng quy tắc</td></tr>
            </table>
            <h4>Điểm hay đi kèm</h4>
            <ul>
                <li><strong>a number of + plural noun + plural verb</strong></li>
                <li><strong>the number of + plural noun + singular verb</strong></li>
                <li>Một số danh từ luôn số nhiều trong hình thức: <em>scissors, trousers, jeans</em>.</li>
            </ul>
        `,
        advanced: `
            <h3>🎯 Các bẫy trong bài thi</h3>
            <ul>
                <li><strong>news</strong>, <strong>mathematics</strong>, <strong>physics</strong> có hình thức giống số nhiều nhưng thường đi với động từ số ít.</li>
                <li><strong>people</strong> là số nhiều của <em>person</em> trong cách dùng thường gặp, nhưng <em>peoples</em> lại mang nghĩa các dân tộc.</li>
                <li>Compound nouns có cách đổi số nhiều khác nhau: <em>passers-by</em>, <em>mothers-in-law</em>.</li>
            </ul>
            <div class="warning-box">
                <strong>⚠️ Lỗi phổ biến:</strong> Thêm <em>s</em> máy móc vào mọi danh từ, hoặc quên đổi động từ theo số ít/số nhiều của danh từ.
            </div>
        `
    },
    numerals: {
        icon: '🔢',
        title: 'Numerals',
        category: 'foundations',
        level: 'intermediate',
        connections: ['articles-determiners', 'quantifiers', 'nouns-plurals', 'sentence-order'],
        simple: `
            <h3>🔢 Numerals không chỉ là đếm số</h3>
            <p>Sách có tách riêng phần <strong>cardinal numbers, ordinal numbers, dates, fractions, percentages</strong> vì đây là vùng lỗi rất thường gặp trong đọc, nói và viết.</p>
            <div class="formula-box">two hundred students | the third chapter | two thirds | 35 percent of students</div>
            <div class="example-box">
                <strong>Ví dụ:</strong><br>
                • <em>two hundred students</em><br>
                • <em>the third chapter</em><br>
                • <em>3.5 percent</em>
            </div>
            <ul>
                <li><strong>Cardinal:</strong> one, two, three...</li>
                <li><strong>Ordinal:</strong> first, second, third...</li>
                <li><strong>Fraction:</strong> one half, two thirds...</li>
            </ul>
        `,
        detail: `
            <h3>📚 Khung cần thuộc</h3>
            <table>
                <tr><th>Dạng</th><th>Mẫu</th><th>Ví dụ</th></tr>
                <tr><td>Hàng trăm/nghìn</td><td>two hundred / five thousand</td><td>không có <em>s</em> khi có số cụ thể</td></tr>
                <tr><td>Số lượng không cụ thể</td><td>hundreds of / dozens of</td><td>có <em>s</em> và đi với <em>of</em></td></tr>
                <tr><td>Ngày tháng</td><td>on 21st May / May 21st</td><td>dùng ordinal khi đọc ngày</td></tr>
                <tr><td>Tỷ lệ</td><td>25 percent of students</td><td>động từ phụ thuộc vào noun sau <em>of</em></td></tr>
            </table>
            <h4>Điểm hay nhầm</h4>
            <ul>
                <li><em>two hundred pages</em> nhưng <em>hundreds of pages</em></li>
                <li><em>a one-day trip</em> giữ nguyên dạng số ít khi làm tính từ ghép</li>
                <li><em>first, second, third</em> là các ordinal bất quy tắc phải nhớ riêng</li>
            </ul>
        `,
        advanced: `
            <h3>🎯 Chỗ dễ trượt điểm</h3>
            <ul>
                <li>Viết số trong academic writing cần thống nhất: cùng một đoạn không nên đổi qua lại bừa bãi giữa chữ và số.</li>
                <li><strong>percent</strong> trong tiếng Anh hiện đại không thêm <em>s</em> sau số: <em>10 percent</em>.</li>
                <li>Số đo và tuổi khi đứng trước danh từ thường thành tính từ ghép: <em>a ten-year-old boy</em>.</li>
            </ul>
            <div class="tip-box">
                <strong>💡 Mẹo:</strong> Hễ thấy số + danh từ, hãy kiểm tra ngay có đang dùng cụm đo lường, ordinal, hay số lượng không xác định.
            </div>
        `
    },
    'word-formation': {
        icon: '🧱',
        title: 'Word Form',
        category: 'foundations',
        level: 'intermediate',
        connections: ['parts-of-speech', 'adjectives-adverbs', 'comparisons', 'countable-uncountable'],
        simple: `
            <h3>🧱 Word form là phần dễ mất điểm dù hiểu nghĩa</h3>
            <p>Trong nhiều câu, đáp án không nằm ở từ vựng mà ở việc chọn đúng <strong>danh từ, động từ, tính từ hay trạng từ</strong> của cùng một họ từ.</p>
            <div class="formula-box">noun | verb | adjective | adverb</div>
            <div class="example-box">
                <strong>Ví dụ:</strong><br>
                • <em>success</em> / <em>succeed</em> / <em>successful</em> / <em>successfully</em><br>
                • <em>beauty</em> / <em>beautiful</em> / <em>beautifully</em>
            </div>
        `,
        detail: `
            <h3>📚 Cách đoán từ loại bằng vị trí</h3>
            <table>
                <tr><th>Vị trí</th><th>Thường cần</th><th>Ví dụ</th></tr>
                <tr><td>Sau mạo từ</td><td>danh từ / adjective + noun</td><td>a decision, an effective plan</td></tr>
                <tr><td>Sau động từ nối</td><td>adjective</td><td>seems useful</td></tr>
                <tr><td>Sau auxiliary</td><td>verb</td><td>has improved</td></tr>
                <tr><td>Bổ nghĩa động từ</td><td>adverb</td><td>worked efficiently</td></tr>
            </table>
            <h4>Đuôi từ thường gặp</h4>
            <ul>
                <li><strong>Nouns:</strong> -tion, -ment, -ness, -ity</li>
                <li><strong>Adjectives:</strong> -ful, -ive, -ous, -able</li>
                <li><strong>Adverbs:</strong> -ly</li>
                <li><strong>Verbs:</strong> -ize, -ify, -en</li>
            </ul>
        `,
        advanced: `
            <h3>🎯 Điểm cần cảnh giác</h3>
            <ul>
                <li>Không phải cứ có <em>-ly</em> là trạng từ: <em>friendly, lively, costly</em> là tính từ.</li>
                <li>Nhiều bài word form còn kiểm tra <strong>negative prefixes</strong> như <em>un-, in-, im-, dis-</em>.</li>
                <li>Nếu câu có chỗ trống sau một linking verb như <em>be, seem, become</em>, đáp án thường là adjective chứ không phải adverb.</li>
            </ul>
            <div class="warning-box">
                <strong>⚠️ Lỗi phổ biến:</strong> Biết nghĩa từ nhưng điền sai từ loại, khiến cả câu mất cấu trúc chuẩn.
            </div>
        `
    },
    'near-future': {
        icon: '🛫',
        title: 'Near Future',
        category: 'tenses',
        level: 'intermediate',
        connections: ['future-simple', 'present-continuous', 'present-simple', 'conditionals'],
        simple: `
            <h3>🛫 Tương lai gần không chỉ có <em>will</em></h3>
            <p>Trong sách, phần <strong>Near Future</strong> tách riêng vì người học rất hay lẫn <em>be going to</em>, <em>present continuous</em> và <em>will</em>.</p>
            <div class="formula-box">be going to + V / am-is-are + V-ing / present simple</div>
            <div class="example-box">
                <strong>Ví dụ:</strong><br>
                • <em>Look at the clouds. It is going to rain.</em><br>
                • <em>We are meeting the client tomorrow.</em><br>
                • <em>The train leaves at 6:30.</em>
            </div>
        `,
        detail: `
            <h3>📚 Cách chọn nhanh</h3>
            <table>
                <tr><th>Cấu trúc</th><th>Dùng khi</th><th>Ví dụ</th></tr>
                <tr><td>be going to</td><td>đã có ý định hoặc có dấu hiệu rõ</td><td>She is going to study abroad.</td></tr>
                <tr><td>present continuous</td><td>đã sắp xếp, đã lên kế hoạch</td><td>I am seeing the dentist on Friday.</td></tr>
                <tr><td>present simple</td><td>lịch trình, timetable</td><td>The film starts at 8.</td></tr>
                <tr><td>will</td><td>quyết định tức thì, dự đoán, lời hứa</td><td>I'll answer the phone.</td></tr>
            </table>
            <h4>Điểm sách nhấn mạnh</h4>
            <ul>
                <li><em>be going to</em> thường mang sắc thái dự định đã có trước.</li>
                <li><em>present continuous</em> hay đi với thời gian cụ thể: tomorrow, tonight, next Sunday...</li>
                <li>Không dùng mọi câu tương lai với <em>will</em>.</li>
            </ul>
        `,
        advanced: `
            <h3>🎯 Vùng dễ nhầm</h3>
            <ul>
                <li><em>I'm going to leave</em> và <em>I'm leaving</em> gần nhau, nhưng câu sau thường nghe như kế hoạch đã chốt hơn.</li>
                <li><em>will</em> tự nhiên hơn trong lời đề nghị, lời hứa, quyết định lúc nói: <em>I'll carry that for you.</em></li>
                <li>Trong mệnh đề thời gian sau <em>when, until, before</em>, phần tương lai gần vẫn thường quay về hiện tại đơn hoặc hiện tại hoàn thành thay vì <em>will</em>.</li>
            </ul>
            <div class="tip-box">
                <strong>💡 Mẹo:</strong> Hãy hỏi: đây là ý định có sẵn, lịch đã chốt, bằng chứng trước mắt, hay quyết định vừa nảy ra?
            </div>
        `
    },
    'sequence-of-tenses': {
        icon: '🧭',
        title: 'Sequence of Tenses',
        category: 'tenses',
        level: 'advanced',
        connections: ['reported-speech', 'past-perfect', 'adverbial-time-clauses', 'present-perfect'],
        simple: `
            <h3>🧭 Sequence of tenses là sự phối hợp thì trong câu phức</h3>
            <p>Khi một câu có mệnh đề chính và mệnh đề phụ, hai vế không phải lúc nào cũng chia thì độc lập. Sách dành riêng phần này vì đây là nguồn lỗi rất phổ biến trong reported speech và complex sentences.</p>
            <div class="formula-box">present main clause → flexible tense | past main clause → past / past perfect / would</div>
            <div class="example-box">
                <strong>Ví dụ:</strong><br>
                • <em>She said that she was tired.</em><br>
                • <em>I know that he lives here.</em>
            </div>
        `,
        detail: `
            <h3>📚 Quy tắc lõi</h3>
            <table>
                <tr><th>Main clause</th><th>Subordinate clause thường đi với</th></tr>
                <tr><td>Present tense</td><td>present, present perfect, future theo ngữ cảnh</td></tr>
                <tr><td>Past tense</td><td>past, past perfect, would / was-were going to</td></tr>
                <tr><td>Present perfect</td><td>thường theo ngữ cảnh hiện tại</td></tr>
            </table>
            <h4>Ngoại lệ cần nhớ</h4>
            <ul>
                <li>Nếu mệnh đề phụ là <strong>chân lý / sự thật hiển nhiên</strong>, ta có thể giữ hiện tại: <em>My teacher said that the sun rises in the East.</em></li>
                <li>Reported speech hay có hiện tượng <strong>backshift</strong>: <em>am/is → was</em>, <em>will → would</em>, <em>have done → had done</em>.</li>
                <li>Nếu ý vẫn còn đúng ở hiện tại, trong tiếng Anh hiện đại đôi khi có thể không lùi thì, nhưng trong bài thi chuẩn nên bám logic đề.</li>
            </ul>
        `,
        advanced: `
            <h3>🎯 Chỗ hay nhầm với mệnh đề thời gian</h3>
            <ul>
                <li>Sequence of tenses trong reported speech khác với quy tắc không dùng <em>will</em> ở mệnh đề thời gian.</li>
                <li>Đừng lùi thì máy móc nếu câu đang nói về chân lý, lịch trình cố định hoặc định nghĩa.</li>
                <li>Khi đọc câu dài, hãy xác định <strong>mốc thời gian gốc</strong> của người nói trước rồi mới chia thì các mệnh đề còn lại.</li>
            </ul>
            <h4>📚 Logic trong câu phức nhiều tầng</h4>
            <ul>
                <li><em>She said that she had realized that the data were incomplete.</em> → động từ tường thuật ở quá khứ kéo mệnh đề sau lùi theo từng lớp.</li>
                <li><em>The professor explained that water boils at 100°C.</em> → chân lý giữ hiện tại dù reporting verb ở quá khứ.</li>
                <li><em>I knew that he would call when he arrived.</em> → <em>would</em> cho tương lai nhìn từ quá khứ, nhưng mệnh đề thời gian vẫn là <em>arrived</em>, không dùng <em>would arrive</em>.</li>
            </ul>
            <h4>Khung quyết định nhanh</h4>
            <ol>
                <li>Xác định thời điểm gốc: hiện tại hay một mốc quá khứ.</li>
                <li>Kiểm tra mệnh đề phụ nói về sự thật chung hay một sự kiện lệ thuộc mốc gốc.</li>
                <li>Nếu là tương lai nhìn từ quá khứ, cân nhắc <em>would / was going to</em>.</li>
                <li>Nếu là time clause, áp quy tắc riêng của time clause trước.</li>
            </ol>
            <div class="warning-box">
                <strong>⚠️ Lỗi phổ biến:</strong> Thấy động từ chính ở quá khứ là lùi mọi thứ về quá khứ, kể cả chân lý hoặc sự kiện vẫn đang đúng.
            </div>
        `
    },
    'adverbial-time-clauses': {
        icon: '⏱️',
        title: 'Adverbial Clauses of Time',
        category: 'patterns',
        level: 'intermediate',
        connections: ['conjunctions', 'future-simple', 'sequence-of-tenses', 'present-perfect'],
        simple: `
            <h3>⏱️ Mệnh đề trạng ngữ chỉ thời gian có quy tắc thì riêng</h3>
            <p>Sau các liên từ như <strong>when, before, after, until, as soon as, once</strong>, tiếng Anh thường không dùng <em>will</em> dù ý nghĩa nói về tương lai.</p>
            <div class="formula-box">future main clause + present time clause | present perfect + since + simple past</div>
            <div class="example-box">
                <strong>Ví dụ:</strong><br>
                • <em>I'll call you when I arrive.</em><br>
                • <em>Wait here until she comes back.</em>
            </div>
        `,
        detail: `
            <h3>📚 Các liên từ thời gian quan trọng</h3>
            <table>
                <tr><th>Liên từ</th><th>Nghĩa</th><th>Ví dụ</th></tr>
                <tr><td>when</td><td>khi</td><td>Call me when you get home.</td></tr>
                <tr><td>before / after</td><td>trước / sau khi</td><td>Finish this before you go out.</td></tr>
                <tr><td>until / till</td><td>cho đến khi</td><td>Stay here until I return.</td></tr>
                <tr><td>as soon as / once</td><td>ngay khi</td><td>I'll email you as soon as I finish.</td></tr>
                <tr><td>since</td><td>kể từ khi</td><td>She has lived here since she graduated.</td></tr>
            </table>
            <h4>Quy tắc cần nhớ</h4>
            <ul>
                <li><strong>Main clause future</strong> + <strong>time clause present</strong></li>
                <li>Sau <strong>since</strong>, mệnh đề chính thường ở present perfect / present perfect continuous.</li>
                <li><strong>while</strong> nhấn hành động kéo dài; <strong>during</strong> là giới từ, không đi với mệnh đề.</li>
            </ul>
        `,
        advanced: `
            <h3>🎯 Biến thể nâng cao</h3>
            <ul>
                <li><strong>by the time</strong> thường kéo theo perfect tenses để nhấn một hành động hoàn tất trước mốc khác.</li>
                <li><strong>no sooner ... than</strong>, <strong>hardly/scarcely ... when</strong> thường dùng trong văn trang trọng và có đảo ngữ.</li>
                <li>Các time clauses rất hay đi cùng Near Future và Sequence of Tenses, nên cần nhìn cả cụm câu chứ không chia từng vế riêng lẻ.</li>
            </ul>
            <div class="tip-box">
                <strong>💡 Mẹo:</strong> Hễ gặp <em>when / before / after / until / as soon as</em>, hãy tự kiểm tra xem mình có vừa viết <em>will</em> sai chỗ không.
            </div>
        `
    },
    'relative-pronouns-adverbs': {
        icon: '🧷',
        title: 'Relative Pronouns & Adverbs',
        category: 'patterns',
        level: 'beginner',
        connections: ['relative-clauses', 'pronouns-possessives', 'conjunctions', 'sentence-order'],
        simple: `
            <h3>🧷 Đây là phần nhập môn để chọn từ quan hệ đúng</h3>
            <p>Mục này không dạy ghép câu dài. Nó chỉ giúp bạn nhận ra khi nào dùng <strong>who, whom, whose, which, that, where, when, why</strong> trong câu ngắn và câu mẫu cơ bản.</p>
            <div class="formula-box">person → who/whom/whose | thing → which/that | place → where | time → when | reason → why</div>
            <div class="example-box">
                <strong>Ví dụ:</strong><br>
                • <em>The man who called me is my uncle.</em><br>
                • <em>The house where I was born is still there.</em><br>
                • <em>The reason why I called is important.</em>
            </div>
        `,
        detail: `
            <h3>📚 Chọn từ nào trong tình huống nào</h3>
            <table>
                <tr><th>Từ</th><th>Dùng cho</th><th>Ví dụ</th></tr>
                <tr><td>who</td><td>người làm chủ ngữ</td><td>the man who called me</td></tr>
                <tr><td>whom</td><td>người làm tân ngữ, thường trang trọng hơn</td><td>the girl whom I met</td></tr>
                <tr><td>whose</td><td>sở hữu</td><td>the writer whose book won</td></tr>
                <tr><td>which</td><td>vật hoặc ý</td><td>the car which he bought</td></tr>
                <tr><td>that</td><td>người hoặc vật trong mệnh đề xác định</td><td>the song that I like</td></tr>
                <tr><td>where / when / why</td><td>nơi chốn / thời gian / lý do</td><td>the town where I grew up</td></tr>
            </table>
            <h4>Nhận diện nhanh</h4>
            <ul>
                <li>Nhìn danh từ ngay trước chỗ trống để biết đang nói về người, vật, nơi chốn, thời gian hay lý do.</li>
                <li><strong>where/when/why</strong> là cách rất thường gặp ở mức cơ bản.</li>
                <li>Mục này chỉ giúp chọn từ đúng; phần ghép câu đầy đủ nằm ở Relative Clauses.</li>
            </ul>
        `,
        advanced: `
            <h3>🎯 Điều cần tránh nhầm với Relative Clauses</h3>
            <ul>
                <li><strong>Relative Pronouns & Adverbs</strong> là phần chọn từ; <strong>Relative Clauses</strong> là phần ghép câu và bổ nghĩa cho danh từ.</li>
                <li>Trong writing trang trọng, <strong>whom</strong> và <strong>preposition + which</strong> vẫn hữu ích.</li>
                <li><strong>whose</strong> có thể dùng cho cả vật trong văn viết: <em>a company whose profits fell</em>.</li>
            </ul>
            <div class="warning-box">
                <strong>⚠️ Lỗi phổ biến:</strong> Học thuộc công thức rời rạc nhưng không biết từ nào dùng cho người, vật, nơi chốn hay thời gian.
            </div>
        `
    },
    'result-structures': {
        icon: '🎯',
        title: 'Phrases & Clauses of Result',
        category: 'patterns',
        level: 'intermediate',
        connections: ['conjunctions', 'comparisons', 'adjectives-adverbs', 'sentence-order'],
        simple: `
            <h3>🎯 Dùng để nói một việc dẫn đến kết quả</h3>
            <p>Phần này nên học theo công thức trước, vì mỗi mẫu có vị trí riêng và không thể thay bừa cho nhau.</p>
            <div class="formula-box">so + adj/adv + that + clause | such + (a/an) + adj + noun + that + clause | too + adj/adv + to V | adj/adv + enough + to V | enough + noun</div>
            <div class="example-box">
                <strong>Ví dụ:</strong><br>
                • <em>It was so cold that we stayed inside.</em><br>
                • <em>She was too tired to drive.</em><br>
                • <em>The room was large enough to hold fifty people.</em><br>
                • <em>It was such a noisy room that nobody could sleep.</em>
            </div>
        `,
        detail: `
            <h3>📚 Mẫu dùng nhanh</h3>
            <table>
                <tr><th>Cấu trúc</th><th>Công thức</th><th>Ví dụ</th></tr>
                <tr><td>so ... that</td><td>so + adj/adv + that + clause</td><td>so difficult that I gave up</td></tr>
                <tr><td>such ... that</td><td>such + (a/an) + adj + noun + that + clause</td><td>such a long meeting that we left early</td></tr>
                <tr><td>too ... to</td><td>too + adj/adv + to V</td><td>too weak to lift it</td></tr>
                <tr><td>adj/adv + enough</td><td>adj/adv + enough + to V</td><td>strong enough to continue</td></tr>
                <tr><td>enough + noun</td><td>enough + noun</td><td>enough time / enough money</td></tr>
            </table>
            <h4>Điểm dễ lẫn</h4>
            <ul>
                <li><strong>so</strong> đi với adjective/adverb; <strong>such</strong> đi với noun phrase.</li>
                <li><strong>too ... to</strong> mang nghĩa quá... đến mức không thể.</li>
                <li><strong>enough</strong> đứng sau adjective/adverb nhưng đứng trước noun.</li>
                <li><strong>so many/few</strong> đi với danh từ đếm được số nhiều; <strong>so much/little</strong> đi với danh từ không đếm được.</li>
            </ul>
        `,
        advanced: `
            <h3>🎯 Chỗ đổi câu hay ra đề</h3>
            <ul>
                <li>Các câu <em>too ... to</em> có thể đổi sang <em>so ... that ... not</em> hoặc <em>not ... enough to</em> tùy nghĩa.</li>
                <li><strong>such</strong> đi với noun phrase, còn <strong>so</strong> đi trực tiếp với adjective/adverb.</li>
                <li>Đây là nhóm cấu trúc rất hay xuất hiện trong rewrite sentence và sentence transformation.</li>
                <li>Đừng nhầm result với purpose: ở đây trọng tâm là hệ quả trực tiếp, không phải mục đích.</li>
            </ul>
            <div class="tip-box">
                <strong>💡 Mẹo:</strong> Trước khi chọn <em>so</em> hay <em>such</em>, hãy nhìn từ đứng ngay sau nó là adjective hay noun phrase.
            </div>
        `
    }
};

const grammarPracticeData = {
    'present-simple': {
        source: '18 cách dùng hiện tại đơn theo các trường hợp thường gặp nhất trong bài học.',
        sections: [
            {
                title: 'Nhận diện nhanh 18 trường hợp',
                instruction: 'Đọc ví dụ bên dưới và ghép với chức năng dùng hiện tại đơn tương ứng.',
                questions: [
                    '<strong>1. Sự thật hiển nhiên:</strong><br>The sun rises in the east.<br><em>Mặt trời mọc ở phía đông.</em>',
                    '<strong>2. Thói quen:</strong><br>I drink coffee every morning.<br><em>Tôi uống cà phê mỗi sáng.</em>',
                    '<strong>3. Lịch trình, sự kiện cố định:</strong><br>The train leaves at 8 o’clock.<br><em>Tàu rời đi lúc 8 giờ.</em>',
                    '<strong>4. Sự kiện hoàn tất / chân lý khoa học:</strong><br>Water boils at 100 degrees Celsius.<br><em>Nước sôi ở 100 độ C.</em>',
                    '<strong>5. Mô tả trạng thái:</strong><br>She likes chocolate.<br><em>Cô ấy thích socola.</em>',
                    '<strong>6. Ý kiến, cảm xúc:</strong><br>I think this movie is interesting.<br><em>Tôi nghĩ bộ phim này thú vị.</em>',
                    '<strong>7. Câu điều kiện loại 0:</strong><br>If you heat ice, it melts.<br><em>Nếu bạn làm nóng đá, nó sẽ tan chảy.</em>',
                    '<strong>8. Hành động lặp lại với tần suất:</strong><br>He usually goes to school by bike.<br><em>Anh ấy thường đi học bằng xe đạp.</em>',
                    '<strong>9. Hướng dẫn / chỉ dẫn:</strong><br>You add sugar, then stir well.<br><em>Bạn thêm đường, rồi khuấy đều.</em>',
                    '<strong>10. Miêu tả sự việc theo từng bước:</strong><br>First, you mix the flour with water.<br><em>Đầu tiên, bạn trộn bột với nước.</em>',
                    '<strong>11. Miêu tả tóm tắt sự việc, truyện, phim:</strong><br>In this movie, the hero saves the city.<br><em>Trong bộ phim này, người hùng cứu thành phố.</em>',
                    '<strong>12. Miêu tả đặc điểm, ngoại hình:</strong><br>She has long black hair.<br><em>Cô ấy có mái tóc dài màu đen.</em>',
                    '<strong>13. Miêu tả tính cách:</strong><br>He is very kind and helpful.<br><em>Anh ấy rất tử tế và hay giúp đỡ.</em>',
                    '<strong>14. Báo cáo khoa học / mẫu thí nghiệm:</strong><br>This solution changes color when you add acid.<br><em>Dung dịch này đổi màu khi thêm axit.</em>',
                    '<strong>15. Động từ trạng thái / sở hữu:</strong><br>He owns a bookstore.<br><em>Anh ấy sở hữu một tiệm sách.</em>',
                    '<strong>16. Sự kiện tương lai gần theo lịch trình cố định:</strong><br>The flight departs at 7 am tomorrow.<br><em>Chuyến bay khởi hành lúc 7 giờ sáng ngày mai.</em>',
                    '<strong>17. Tường thuật trong thể thao / truyền hình trực tiếp:</strong><br>He shoots, he scores!<br><em>Anh ấy sút bóng, ghi bàn!</em>',
                    '<strong>18. Lời nhận xét / đánh giá:</strong><br>This tastes delicious!<br><em>Món này ngon quá!</em>'
                ],
                answers: [
                    'Sự thật hiển nhiên',
                    'Thói quen',
                    'Lịch trình, sự kiện cố định',
                    'Sự kiện hoàn tất / chân lý khoa học',
                    'Mô tả trạng thái',
                    'Ý kiến, cảm xúc',
                    'Câu điều kiện loại 0',
                    'Hành động lặp lại với tần suất',
                    'Hướng dẫn / chỉ dẫn',
                    'Miêu tả sự việc theo từng bước',
                    'Miêu tả tóm tắt sự việc, truyện, phim',
                    'Miêu tả đặc điểm, ngoại hình',
                    'Miêu tả tính cách',
                    'Báo cáo khoa học / mẫu thí nghiệm',
                    'Động từ trạng thái / sở hữu',
                    'Sự kiện tương lai gần theo lịch trình cố định',
                    'Tường thuật trong thể thao / truyền hình trực tiếp',
                    'Lời nhận xét / đánh giá'
                ],
                explanations: [
                    'The sun rises in the east là chân lý chung, nên dùng present simple.',
                    'Every morning là tín hiệu của thói quen lặp lại.',
                    'Lịch tàu cố định thường dùng present simple thay vì will.',
                    'Đây là sự thật khoa học mang tính lặp lại.',
                    'Like là động từ trạng thái, diễn tả cảm xúc hoặc sở thích ổn định.',
                    'Think ở đây là ý kiến hiện tại của người nói.',
                    'Zero conditional dùng present simple ở cả hai mệnh đề để nói quy luật chung.',
                    'Usually cho biết hành động diễn ra lặp lại đều đặn.',
                    'You add sugar, then stir well là kiểu chỉ dẫn từng bước.',
                    'First cho thấy đây là một quy trình, không phải hành động đơn lẻ.',
                    'Khi tóm tắt nội dung phim/truyện, present simple tạo cảm giác thuật lại.',
                    'Has long black hair mô tả đặc điểm cơ thể, không phải hành động.',
                    'Be + adjective dùng để mô tả tính cách hoặc trạng thái.',
                    'Mô tả hiện tượng khoa học lặp lại theo điều kiện.',
                    'Own diễn tả trạng thái sở hữu ổn định.',
                    'Lịch bay đã cố định nên present simple được dùng cho tương lai.',
                    'Bình luận thể thao trực tiếp thường dùng present simple để tăng nhịp kể.',
                    'Taste ở đây là linking verb, nối chủ ngữ với tính từ delicious.'
                ]
            }
        ],
        checkpoint: [
            'Nhìn từ dấu hiệu ngữ cảnh để nhận ra hiện tại đơn, không chỉ nhìn vào thời gian hiện tại.',
            'Nhớ thêm -s/-es với ngôi thứ ba số ít trong câu khẳng định.',
            'Phân biệt hiện tại đơn với hiện tại tiếp diễn khi câu nói về thói quen, lịch trình hoặc sự thật.'
        ]
    },
    'future-perfect': {
        source: '10 ví dụ tiêu biểu cho future perfect với mốc tương lai và sự hoàn tất.',
        sections: [
            {
                title: 'Nhận diện future perfect',
                instruction: 'Đọc ví dụ bên dưới và xác định đây là thì future perfect: will have + V3.',
                questions: [
                    '<strong>1. Thời điểm cụ thể trong tương lai:</strong><br>I will have finished my homework by 8 p.m.<br><em>Tôi sẽ hoàn thành bài tập về nhà trước 8 giờ tối.</em>',
                    '<strong>2. Trước khi sự kiện khác xảy ra:</strong><br>She will have left before you arrive.<br><em>Cô ấy sẽ rời đi trước khi bạn đến.</em>',
                    '<strong>3. Đến một mốc, đạt được thành tích:</strong><br>By next year, they will have graduated from university.<br><em>Đến năm sau, họ sẽ tốt nghiệp đại học.</em>',
                    '<strong>4. Tích lũy kết quả trong quá khứ đến tương lai:</strong><br>By the end of this month, I will have saved enough money.<br><em>Đến cuối tháng này, tôi sẽ tiết kiệm đủ tiền.</em>',
                    '<strong>5. Hoàn thành số lượng / mục tiêu:</strong><br>By 2025, scientists will have discovered hundreds of new planets.<br><em>Đến năm 2025, các nhà khoa học sẽ phát hiện hàng trăm hành tinh mới.</em>',
                    '<strong>6. Kết thúc hành trình / trải nghiệm:</strong><br>We will have visited all the museums in the city by tomorrow.<br><em>Chúng tôi sẽ thăm tất cả các bảo tàng trong thành phố trước ngày mai.</em>',
                    '<strong>7. Dùng trong báo cáo, dự đoán kế hoạch:</strong><br>He will have completed the project by the deadline.<br><em>Anh ấy sẽ hoàn thành dự án trước hạn cuối.</em>',
                    '<strong>8. Miêu tả trong phong cách kể chuyện:</strong><br>By the time she gets home, the dinner will have been prepared.<br><em>Tới khi cô ấy về nhà, bữa tối sẽ được chuẩn bị xong.</em>',
                    '<strong>9. Ước lượng số lần / kinh nghiệm:</strong><br>By the end of the week, you will have asked me this question five times.<br><em>Đến cuối tuần, bạn sẽ hỏi tôi câu này năm lần rồi.</em>',
                    '<strong>10. Hành động nối tiếp trước một thời điểm:</strong><br>When you arrive, I will have finished my meeting.<br><em>Khi bạn đến, tôi sẽ kết thúc cuộc họp rồi.</em>'
                ],
                answers: [
                    'I will have finished my homework by 8 p.m.',
                    'She will have left before you arrive.',
                    'By next year, they will have graduated from university.',
                    'By the end of this month, I will have saved enough money.',
                    'By 2025, scientists will have discovered hundreds of new planets.',
                    'We will have visited all the museums in the city by tomorrow.',
                    'He will have completed the project by the deadline.',
                    'By the time she gets home, the dinner will have been prepared.',
                    'By the end of the week, you will have asked me this question five times.',
                    'When you arrive, I will have finished my meeting.'
                ],
                explanations: [
                    'By 8 p.m. là mốc hoàn tất trong tương lai, nên dùng will have + V3.',
                    'Before you arrive cho biết việc rời đi xảy ra trước một hành động khác.',
                    'By next year là mốc tương lai, nhấn việc tốt nghiệp đã xong trước lúc đó.',
                    'Câu này nhấn kết quả tích lũy tiền đến cuối tháng.',
                    'By 2025 đặt giới hạn thời gian cho việc phát hiện hành tinh.',
                    'We will have visited... cho thấy hành trình sẽ hoàn tất trước tomorrow.',
                    'By the deadline là ngữ cảnh rất điển hình của future perfect.',
                    'By the time she gets home đặt mốc để so sánh với sự hoàn tất trước đó.',
                    'Đây là cách ước lượng số lần lặp lại tính đến một mốc tương lai.',
                    'When you arrive là mốc sau, nên việc họp xong phải xảy ra trước.'
                ]
            },
            {
                title: 'Dạng phủ định',
                instruction: 'Chuyển các câu sang dạng phủ định với will not have + V3.',
                questions: [
                    'I will have finished my homework by 8 p.m.',
                    'She will have left before you arrive.',
                    'They will have graduated from university by next year.',
                    'We will have visited all the museums in the city by tomorrow.',
                    'He will have completed the project by the deadline.'
                ],
                answers: [
                    'I won’t have finished my homework by 8 p.m.',
                    'She won’t have left before you arrive.',
                    'They won’t have graduated from university by next year.',
                    'We won’t have visited all the museums in the city by tomorrow.',
                    'He won’t have completed the project by the deadline.'
                ],
                explanations: [
                    'Thêm won’t trước have và giữ V3 sau have.',
                    'Phủ định giữ nguyên mốc before you arrive nhưng đổi ý nghĩa sang chưa hoàn tất.',
                    'Cấu trúc phủ định future perfect vẫn là won’t have + V3.',
                    'Won’t have visited diễn tả việc chưa kịp hoàn tất trước mốc tomorrow.',
                    'Câu phủ định dùng để nói dự án chưa xong trước deadline.'
                ]
            },
            {
                title: 'Dạng nghi vấn',
                instruction: 'Đổi các câu sau sang dạng câu hỏi với Will + subject + have + V3?',
                questions: [
                    'I will have finished my homework by 8 p.m.',
                    'She will have left before you arrive.',
                    'They will have graduated from university by next year.',
                    'We will have visited all the museums in the city by tomorrow.',
                    'He will have completed the project by the deadline.'
                ],
                answers: [
                    'Will you have finished your homework by 8 p.m.?',
                    'Will she have left before you arrive?',
                    'Will they have graduated from university by next year?',
                    'Will we have visited all the museums in the city by tomorrow?',
                    'Will he have completed the project by the deadline?'
                ],
                explanations: [
                    'Đưa Will lên đầu câu để tạo câu hỏi yes/no.',
                    'Câu hỏi vẫn giữ before you arrive vì đó là mốc so sánh.',
                    'Mẫu hỏi chuẩn là Will + subject + have + V3?',
                    'Câu hỏi hỏi về khả năng hoàn tất trước mốc tomorrow.',
                    'Dạng hỏi này dùng khi muốn kiểm tra việc hoàn thành trước deadline.'
                ]
            }
        ],
        checkpoint: [
            'Dùng will have + V3 khi muốn nhấn việc sẽ hoàn tất trước một mốc tương lai.',
            'Các dấu hiệu rất hay gặp là by, before, by the time, when và by the end of...',
            'Không dùng future perfect nếu câu chỉ nói một hành động tương lai đơn giản mà không có mốc hoàn tất.'
        ]
    },
    'existential-there': {
        source: '24 câu luyện There is / There are · A1 bao phủ khẳng định, phủ định, câu hỏi, số ít/số nhiều, và quantifiers cơ bản.',
        sections: [
            {
                title: 'Nhóm 1: Chọn is hay are',
                instruction: 'Điền is hoặc are vào chỗ trống.',
                items: [
                    { prompt: 'There ___ a book on the table.<br><em>Nghĩa: Có một quyển sách trên bàn.</em>', answer: 'is', explanation: 'Book là danh từ số ít đếm được.' },
                    { prompt: 'There ___ three chairs in the room.<br><em>Nghĩa: Có ba cái ghế trong phòng.</em>', answer: 'are', explanation: 'Chairs là danh từ số nhiều.' },
                    { prompt: 'There ___ some milk in the fridge.<br><em>Nghĩa: Có một ít sữa trong tủ lạnh.</em>', answer: 'is', explanation: 'Milk là danh từ không đếm được.' },
                    { prompt: 'There ___ many students in the class.<br><em>Nghĩa: Có nhiều học sinh trong lớp.</em>', answer: 'are', explanation: 'Students là danh từ số nhiều đếm được.' },
                    { prompt: 'There ___ a pen and two notebooks on the desk.<br><em>Nghĩa: Có một cây bút và hai quyển vở trên bàn.</em>', answer: 'is', explanation: 'Chia theo danh từ đầu tiên: a pen.' },
                    { prompt: 'There ___ no time to wait.<br><em>Nghĩa: Không có thời gian để chờ.</em>', answer: 'is', explanation: 'Time là danh từ không đếm được.' },
                    { prompt: 'There ___ some apples in the basket.<br><em>Nghĩa: Có vài quả táo trong giỏ.</em>', answer: 'are', explanation: 'Apples là danh từ số nhiều.' },
                    { prompt: 'There ___ a big problem.<br><em>Nghĩa: Có một vấn đề lớn.</em>', answer: 'is', explanation: 'Problem là danh từ số ít.' }
                ]
            },
            {
                title: 'Nhóm 2: Câu hỏi và phủ định',
                instruction: 'Viết dạng câu hỏi hoặc phủ định cho there is/are.',
                items: [
                    { prompt: 'There is a cat in the garden. / Make it a question.<br><em>Nghĩa: Có một con mèo trong vườn.</em>', answer: 'Is there a cat in the garden?', explanation: 'Đưa is lên đầu câu để hỏi yes/no.' },
                    { prompt: 'There are many books on the shelf. / Make it a question.<br><em>Nghĩa: Có nhiều sách trên kệ.</em>', answer: 'Are there many books on the shelf?', explanation: 'Are there is the question form for plural nouns.' },
                    { prompt: 'There is some juice in the bottle. / Make it negative.<br><em>Nghĩa: Có một ít nước trái cây trong chai.</em>', answer: "There isn't any juice in the bottle.", explanation: 'Dùng isn\'t any để phủ định lượng không đếm được.' },
                    { prompt: 'There are two windows in the room. / Make it negative.<br><em>Nghĩa: Có hai cửa sổ trong phòng.</em>', answer: "There aren't two windows in the room.", explanation: 'Dùng aren\'t cho danh từ số nhiều.' },
                    { prompt: 'There is a problem. / Make it negative.<br><em>Nghĩa: Có một vấn đề.</em>', answer: "There isn't a problem.", explanation: 'There is becomes there isn\'t in the negative.' },
                    { prompt: 'There are chairs in the hall. / Make it a question.<br><em>Nghĩa: Có ghế trong hội trường.</em>', answer: 'Are there chairs in the hall?', explanation: 'Question form uses are there for plural nouns.' },
                    { prompt: 'There is a pen on the desk. / Make it negative.<br><em>Nghĩa: Có một cây bút trên bàn.</em>', answer: "There isn't a pen on the desk.", explanation: 'There is + not becomes there isn\'t.' },
                    { prompt: 'There are students outside. / Make it negative.<br><em>Nghĩa: Có học sinh ở bên ngoài.</em>', answer: "There aren't any students outside.", explanation: 'Any is common in negative plural statements.' }
                ]
            },
            {
                title: 'Nhóm 3: Viết lại và chọn đúng',
                instruction: 'Viết lại câu sao cho đúng với There is / There are.',
                items: [
                    { prompt: 'Có một quyển sách trên bàn.<br><em>Nghĩa: Write in English.</em>', answer: 'There is a book on the table.', explanation: 'A book is singular countable, so use there is.' },
                    { prompt: 'Có nhiều ghế trong lớp.<br><em>Nghĩa: Write in English.</em>', answer: 'There are many chairs in the class.', explanation: 'Chairs is plural, so use there are.' },
                    { prompt: 'Có một ít nước trong ly.<br><em>Nghĩa: Write in English.</em>', answer: 'There is some water in the glass.', explanation: 'Water is uncountable.' },
                    { prompt: 'Có vài học sinh trong thư viện.<br><em>Nghĩa: Write in English.</em>', answer: 'There are a few students in the library.', explanation: 'Students is plural; a few is a basic positive quantifier.' },
                    { prompt: 'There ___ a lot of food on the table.<br><em>Nghĩa: Có rất nhiều thức ăn trên bàn.</em>', answer: 'is', explanation: 'Food is uncountable.' },
                    { prompt: 'There ___ many people at the party.<br><em>Nghĩa: Có nhiều người ở bữa tiệc.</em>', answer: 'are', explanation: 'People is plural.' },
                    { prompt: 'There ___ no milk left.<br><em>Nghĩa: Không còn sữa.</em>', answer: 'is', explanation: 'Milk is uncountable, so use is with no.' },
                    { prompt: 'There ___ no tickets left.<br><em>Nghĩa: Không còn vé.</em>', answer: 'are', explanation: 'Tickets is plural, so use are with no.' }
                ]
            }
        ],
        checkpoint: [
            'There is dùng với danh từ số ít và danh từ không đếm được.',
            'There are dùng với danh từ số nhiều.',
            'Trong câu hỏi: Is there...? / Are there...?',
            'Trong câu phủ định: There isn\'t... / There aren\'t...'
        ]
    },
    'exclamatory-sentences': {
        source: '24 câu luyện Câu Cảm Thán B1 bao phủ What/How, noun phrase, adj/adv, rewrite và nhận diện sắc thái cảm xúc.',
        sections: [
            {
                title: 'Nhóm 1: Nhận diện cấu trúc',
                instruction: 'Xác định câu dùng What hay How, hoặc viết lại loại cấu trúc cảm thán.',
                items: [
                    { prompt: 'What a beautiful day!<br><em>Nghĩa: Thật là một ngày đẹp!</em>', answer: 'What + a/an + adj + noun', explanation: 'What đi với cụm danh từ số ít đếm được.' },
                    { prompt: 'How amazing!<br><em>Nghĩa: Thật tuyệt vời!</em>', answer: 'How + adjective', explanation: 'How đứng trước tính từ để nhấn cảm xúc.' },
                    { prompt: 'What lovely flowers these are!<br><em>Nghĩa: Những bông hoa này thật đẹp!</em>', answer: 'What + adjective + plural noun', explanation: 'What + adj + plural noun là mẫu cảm thán không cần a/an.' },
                    { prompt: 'How quickly he runs!<br><em>Nghĩa: Anh ấy chạy thật nhanh!</em>', answer: 'How + adverb', explanation: 'How có thể đi với trạng từ để nhấn tốc độ hoặc cách thức.' },
                    { prompt: 'What a great idea!<br><em>Nghĩa: Thật là một ý tưởng tuyệt vời!</em>', answer: 'What + a/an + adjective + noun', explanation: 'Idea là danh từ số ít đếm được nên cần a/an.' },
                    { prompt: 'How beautiful the garden is!<br><em>Nghĩa: Khu vườn đẹp làm sao!</em>', answer: 'How + adjective + clause', explanation: 'How + adj + S + V là mẫu cảm thán đầy đủ.' },
                    { prompt: 'What terrible weather!<br><em>Nghĩa: Thời tiết tệ quá!</em>', answer: 'What + adjective + uncountable noun', explanation: 'Weather là danh từ không đếm được, không có a/an.' },
                    { prompt: 'How fast time flies!<br><em>Nghĩa: Thời gian trôi nhanh quá!</em>', answer: 'How + adverb + clause', explanation: 'How + adv + clause là mẫu nhấn mức độ.' }
                ]
            },
            {
                title: 'Nhóm 2: Điền What hoặc How',
                instruction: 'Điền What hoặc How để hoàn thành câu cảm thán.',
                items: [
                    { prompt: '___ a lovely dress!<br><em>Nghĩa: Thật là một chiếc váy đẹp!</em>', answer: 'What', explanation: 'Trước a/an + noun phrase dùng What.' },
                    { prompt: '___ wonderful news!<br><em>Nghĩa: Thật là tin tuyệt vời!</em>', answer: 'What', explanation: 'News là danh từ không đếm được, dùng What.' },
                    { prompt: '___ kind she is!<br><em>Nghĩa: Cô ấy tử tế làm sao!</em>', answer: 'How', explanation: 'How đi với tính từ.' },
                    { prompt: '___ beautifully she sings!<br><em>Nghĩa: Cô ấy hát hay làm sao!</em>', answer: 'How', explanation: 'How đi với trạng từ beautifully.' },
                    { prompt: '___ an expensive restaurant!<br><em>Nghĩa: Thật là một nhà hàng đắt đỏ!</em>', answer: 'What', explanation: 'What + a/an + adj + noun là mẫu chuẩn.' },
                    { prompt: '___ interesting this book is!<br><em>Nghĩa: Quyển sách này thú vị làm sao!</em>', answer: 'How', explanation: 'How + adj + clause.' },
                    { prompt: '___ terrible traffic today!<br><em>Nghĩa: Hôm nay giao thông tệ quá!</em>', answer: 'What', explanation: 'Traffic là danh từ, nên dùng What.' },
                    { prompt: '___ carefully he works!<br><em>Nghĩa: Anh ấy làm việc cẩn thận làm sao!</em>', answer: 'How', explanation: 'How + adverb.' }
                ]
            },
            {
                title: 'Nhóm 3: Viết lại câu',
                instruction: 'Viết lại câu thường thành câu cảm thán hoặc ngược lại.',
                items: [
                    { prompt: 'The movie is very interesting.<br><em>Nghĩa: Bộ phim rất thú vị.</em>', answer: 'What an interesting movie!', explanation: 'Câu cảm thán với noun phrase số ít đếm được.' },
                    { prompt: 'She is very kind.<br><em>Nghĩa: Cô ấy rất tử tế.</em>', answer: 'How kind she is!', explanation: 'How + adj + clause là mẫu phù hợp.' },
                    { prompt: 'This soup is very hot.<br><em>Nghĩa: Món súp này rất nóng.</em>', answer: 'What hot soup!', explanation: 'Soup là danh từ không đếm được nên không có a/an.' },
                    { prompt: 'He runs very fast.<br><em>Nghĩa: Anh ấy chạy rất nhanh.</em>', answer: 'How fast he runs!', explanation: 'How + adverb + clause nhấn cách thức/tốc độ.' },
                    { prompt: 'The view is beautiful.<br><em>Nghĩa: Cảnh đẹp thật.</em>', answer: 'What a beautiful view!', explanation: 'View là danh từ số ít đếm được nên dùng a/an.' },
                    { prompt: 'The weather is awful.<br><em>Nghĩa: Thời tiết tệ quá.</em>', answer: 'What awful weather!', explanation: 'Weather là danh từ không đếm được.' },
                    { prompt: 'Your idea is amazing.<br><em>Nghĩa: Ý tưởng của bạn thật tuyệt.</em>', answer: 'What an amazing idea!', explanation: 'Idea là noun phrase số ít đếm được.' },
                    { prompt: 'She spoke very softly.<br><em>Nghĩa: Cô ấy nói rất nhỏ nhẹ.</em>', answer: 'How softly she spoke!', explanation: 'How + adverb + clause là cấu trúc cảm thán tự nhiên.' }
                ]
            }
        ],
        checkpoint: [
            'What thường đi với noun phrase; How thường đi với adjective/adverb.',
            'What a/an + adj + singular countable noun.',
            'What + adj + plural/uncountable noun.',
            'How + adj/adv + clause dùng khi muốn nhấn mức độ hoặc cách thức.'
        ]
    },
    'sentence-types': {
        source: 'Bài luyện Các Loại Câu · A2 tập trung vào nhận diện câu theo chức năng và theo cấu trúc câu.',
        sections: [
            {
                title: 'Nhận diện theo chức năng',
                instruction: 'Xác định mỗi câu là Statement, Question, Command hay Exclamation.',
                questions: [
                    'Please close the door.',
                    'Do you like this song?',
                    'She is very happy today.',
                    'What a lovely day it is!',
                    'Sit down and listen carefully.',
                    'Where are you from?',
                    'I do not understand this rule.',
                    'How quickly he ran!'
                ],
                answers: [
                    'Command',
                    'Question',
                    'Statement',
                    'Exclamation',
                    'Command',
                    'Question',
                    'Statement',
                    'Exclamation'
                ],
                explanations: [
                    'Please + verb là dạng yêu cầu / mệnh lệnh lịch sự.',
                    'Dấu hỏi và trợ động từ trước chủ ngữ cho thấy đây là question.',
                    'Câu kể thông tin là statement.',
                    'What a + noun phrase là exclamation.',
                    'Câu mệnh lệnh có verb mở đầu và không có chủ ngữ rõ.',
                    'Wh-question là câu hỏi.',
                    'Câu phủ định vẫn là statement nếu mục đích là trình bày thông tin.',
                    'How + adjective/adverb tạo câu cảm thán.'
                ]
            },
            {
                title: 'Nhận diện theo cấu trúc',
                instruction: 'Xác định câu là Simple, Compound hay Complex.',
                questions: [
                    'She reads every night.',
                    'She reads, and he writes.',
                    'She reads because she enjoys learning.',
                    'She reads, and he writes while they listen to music.',
                    'After dinner, we walked home.',
                    'I finished my homework, so I watched a movie.',
                    'The children played outside.',
                    'Although it was raining, we went out.'
                ],
                answers: [
                    'Simple',
                    'Compound',
                    'Complex',
                    'Compound-complex',
                    'Complex',
                    'Compound',
                    'Simple',
                    'Complex'
                ],
                explanations: [
                    'Một independent clause = simple sentence.',
                    'Hai independent clauses nối bằng and = compound sentence.',
                    'Có main clause + dependent clause = complex sentence.',
                    'Có ít nhất hai independent clauses và một dependent clause = compound-complex.',
                    'Mệnh đề trạng ngữ ở đầu câu làm câu trở thành complex.',
                    'Hai mệnh đề độc lập nối bằng so = compound.',
                    'Chỉ một mệnh đề độc lập = simple.',
                    'Although là mệnh đề phụ nên đây là complex.'
                ]
            },
            {
                title: 'Viết lại theo yêu cầu',
                instruction: 'Viết lại câu để đúng loại câu được yêu cầu.',
                questions: [
                    'She was tired. She went to bed early. / Rewrite as a complex sentence.',
                    'I was late. I still caught the bus. / Rewrite as a compound sentence.',
                    'Open the window. / Rewrite as a polite command.',
                    'Is he at home? / Rewrite as a statement.',
                    'What a beautiful painting it is! / Rewrite as a statement.',
                    'She studies hard because she wants to pass the exam. / Rewrite as two simple sentences.',
                    'The weather was bad, so we stayed home. / Rewrite as two simple sentences.',
                    'I love this song! / Rewrite as a statement.'
                ],
                answers: [
                    'Because she was tired, she went to bed early.',
                    'I was late, but I still caught the bus.',
                    'Please open the window.',
                    'He is at home.',
                    'It is a beautiful painting.',
                    'She studies hard. She wants to pass the exam.',
                    'The weather was bad. We stayed home.',
                    'I love this song.'
                ],
                explanations: [
                    'Because introduces a dependent clause, so the sentence becomes complex.',
                    'But nối hai independent clauses, so the sentence is compound.',
                    'Please makes the command more polite.',
                    'A statement ends with a period and gives information.',
                    'An exclamation can often be rewritten as a normal statement.',
                    'Two simple sentences each have one independent clause.',
                    'Split the compound sentence into two independent clauses.',
                    'The exclamation can be reduced to a plain statement.'
                ]
            }
        ],
        checkpoint: [
            'Statement, question, command, exclamation là 4 chức năng cơ bản.',
            'Simple/compound/complex/compound-complex là phân loại theo cấu trúc.',
            'Simple sentence không nhất thiết phải ngắn; nó chỉ có một independent clause.'
        ]
    },
    'verb-patterns': {
        source: '70 câu luyện Verb Patterns B1 bao phủ V-ing, to V, object + to V, bare V, preposition + V-ing, that/wh-clause và các verb đổi nghĩa.',
        sections: [
            {
                title: 'Nhóm 1: V-ing sau động từ',
                instruction: 'Điền dạng V-ing phù hợp sau động từ chính.',
                questions: [
                    'She enjoys ___ dinner for her family. (cook)',
                    'I avoid ___ coffee at night. (drink)',
                    'They finished ___ the room yesterday. (paint)',
                    'Would you mind ___ the window? (open)',
                    'He suggested ___ a taxi. (take)',
                    'We keep ___ every day. (practice)',
                    'She admitted ___ a mistake. (make)',
                    'He denied ___ the vase. (break)',
                    'I do not mind ___ early on weekends. (get up)',
                    'They considered ___ to another city. (move)'
                ],
                answers: [
                    'cooking',
                    'drinking',
                    'painting',
                    'opening',
                    'taking',
                    'practicing',
                    'making',
                    'breaking',
                    'getting up',
                    'moving'
                ],
                explanations: [
                    'Enjoy thường đi với V-ing.',
                    'Avoid luôn đi với V-ing.',
                    'Finish đi với V-ing.',
                    'Mind đi với V-ing.',
                    'Suggest đi với V-ing.',
                    'Keep đi với V-ing để nói hành động tiếp diễn.',
                    'Admit đi với V-ing.',
                    'Deny đi với V-ing.',
                    'Mind vẫn cần V-ing.',
                    'Consider đi với V-ing.'
                ]
            },
            {
                title: 'Nhóm 2: To V sau động từ',
                instruction: 'Điền to V phù hợp sau động từ chính.',
                questions: [
                    'I decided ___ for the job. (apply)',
                    'She hopes ___ abroad next year. (travel)',
                    'We plan ___ Hanoi in summer. (visit)',
                    'He promised ___ me. (help)',
                    'They refused ___ the question. (answer)',
                    'She managed ___ the work on time. (finish)',
                    'He learned ___ when he was a child. (swim)',
                    'We agreed ___ at 8. (meet)',
                    'I chose ___ home. (stay)',
                    'She offered ___ me to the station. (drive)'
                ],
                answers: [
                    'to apply',
                    'to travel',
                    'to visit',
                    'to help',
                    'to answer',
                    'to finish',
                    'to swim',
                    'to meet',
                    'to stay',
                    'to drive'
                ],
                explanations: [
                    'Decide đi với to V.',
                    'Hope đi với to V.',
                    'Plan đi với to V.',
                    'Promise đi với to V.',
                    'Refuse đi với to V.',
                    'Manage đi với to V.',
                    'Learn đi với to V.',
                    'Agree đi với to V.',
                    'Choose đi với to V.',
                    'Offer đi với to V.'
                ]
            },
            {
                title: 'Nhóm 3: Object + to V',
                instruction: 'Điền to V sau object đúng với động từ cho sẵn.',
                questions: [
                    'The teacher asked us ___ quiet. (be)',
                    'I told him ___ outside. (wait)',
                    'She advised me ___ a break. (take)',
                    'The school allowed students ___ phones in class. (use)',
                    'He encouraged her ___ the club. (join)',
                    'Please remind me ___ my mother. (call)',
                    'The doctor warned him ___ soda. (not drink)',
                    'They invited us ___ to the party. (come)',
                    'I persuaded my friend ___ with me. (go)',
                    'The storm forced us ___ the picnic. (cancel)'
                ],
                answers: [
                    'to be',
                    'to wait',
                    'to take',
                    'to use',
                    'to join',
                    'to call',
                    'not to drink',
                    'to come',
                    'to go',
                    'to cancel'
                ],
                explanations: [
                    'Ask + object + to V.',
                    'Tell + object + to V.',
                    'Advise + object + to V.',
                    'Allow + object + to V.',
                    'Encourage + object + to V.',
                    'Remind + object + to V.',
                    'Warn + object + not to V.',
                    'Invite + object + to V.',
                    'Persuade + object + to V.',
                    'Force + object + to V.'
                ]
            },
            {
                title: 'Nhóm 4: That-clause và wh-clause',
                instruction: 'Điền that hoặc wh-word phù hợp.',
                questions: [
                    'I think ___ he is right.',
                    'She said ___ she was tired.',
                    'I do not know ___ to do.',
                    'Can you tell me ___ she lives?',
                    'I wonder ___ the meeting will start.',
                    'He asked ___ you left early.',
                    'We know ___ this machine works.',
                    'They believe ___ he is honest.',
                    'I asked ___ called me last night.',
                    'She explained ___ to solve the problem.'
                ],
                answers: [
                    'that',
                    'that',
                    'what',
                    'where',
                    'when',
                    'why',
                    'how',
                    'that',
                    'who',
                    'how'
                ],
                explanations: [
                    'Think thường nhận that-clause.',
                    'Say thường nhận that-clause.',
                    'What giới thiệu wh-clause.',
                    'Where giới thiệu wh-clause về nơi chốn.',
                    'When giới thiệu wh-clause về thời gian.',
                    'Why giới thiệu wh-clause về lý do.',
                    'How giới thiệu cách thức.',
                    'Believe thường nhận that-clause.',
                    'Who là wh-word cho người.',
                    'How giới thiệu cách giải quyết.'
                ]
            },
            {
                title: 'Nhóm 5: Bare V và đổi nghĩa',
                instruction: 'Điền dạng đúng của động từ trong ngoặc.',
                questions: [
                    'My mother made me ___ my room. (clean)',
                    'The teacher let us ___ early. (leave)',
                    'The manager had the assistant ___ the email. (send)',
                    'I saw him ___ the street. (cross)',
                    'We heard her ___ in the hall. (sing)',
                    'They watched the children ___ football. (play)',
                    'I stopped ___ last year. (smoke)',
                    'I stopped ___ the phone. (answer)',
                    'She tried ___ the window. (open)',
                    'He regretted ___ those words. (say)'
                ],
                answers: [
                    'clean',
                    'leave',
                    'send',
                    'cross',
                    'sing',
                    'play',
                    'smoking',
                    'to answer',
                    'to open',
                    'saying'
                ],
                explanations: [
                    'Make + object + bare V.',
                    'Let + object + bare V.',
                    'Have + object + bare V trong causative.',
                    'See + object + bare V.',
                    'Hear + object + bare V.',
                    'Watch + object + bare V.',
                    'Stop doing = ngừng một thói quen.',
                    'Stop to do = dừng lại để làm việc khác.',
                    'Try to do = cố gắng làm.',
                    'Regret doing = hối tiếc về việc đã làm.'
                ]
            }
            ,
            {
                title: 'Nhóm 6: Verb + preposition + V-ing',
                instruction: 'Điền dạng V-ing đúng sau preposition cố định.',
                questions: [
                    'She insisted on ___ the truth. (tell)',
                    'He succeeded in ___ the exam. (pass)',
                    'They are thinking about ___ a new car. (buy)',
                    'I apologized for ___ late. (be)',
                    'We are looking forward to ___ you again. (see)',
                    'He prevented me from ___ the meeting. (attend)',
                    'She is interested in ___ architecture. (study)',
                    'They accused him of ___ the rules. (break)',
                    'I am tired of ___ the same mistake. (make)',
                    'He is good at ___ people. (understand)'
                ],
                answers: [
                    'telling',
                    'passing',
                    'buying',
                    'being',
                    'seeing',
                    'attending',
                    'studying',
                    'breaking',
                    'making',
                    'understanding'
                ],
                explanations: [
                    'Insist on đi với V-ing.',
                    'Succeed in đi với V-ing.',
                    'Think about đi với V-ing.',
                    'Apologize for đi với V-ing.',
                    'Look forward to đi với V-ing.',
                    'Prevent from đi với V-ing.',
                    'Interested in đi với V-ing.',
                    'Accuse of đi với V-ing.',
                    'Tired of đi với V-ing.',
                    'Good at đi với V-ing.'
                ]
            },
            {
                title: 'Nhóm 7: Sửa lỗi Verb Patterns',
                instruction: 'Viết lại câu cho đúng cấu trúc verb pattern.',
                questions: [
                    'I remember to lock the door yesterday.',
                    'She stopped smoke last year.',
                    'We tried opening the box when the key was lost.',
                    'He regretted to say that.',
                    'Please help me to carrying this.',
                    'I want that you come early.',
                    'They made him to apologize.',
                    'She let us to leave early.',
                    'The teacher suggested us to revise harder.',
                    'He succeeded to solve the problem.'
                ],
                answers: [
                    'I remember locking the door yesterday.',
                    'She stopped smoking last year.',
                    'We tried to open the box when the key was lost.',
                    'He regretted saying that.',
                    'Please help me carry this.',
                    'I want you to come early.',
                    'They made him apologize.',
                    'She let us leave early.',
                    'The teacher suggested that we revise harder.',
                    'He succeeded in solving the problem.'
                ],
                explanations: [
                    'Remember doing = nhớ đã làm.',
                    'Stop doing = ngừng làm.',
                    'Try to do = cố gắng làm.',
                    'Regret doing = hối tiếc vì đã làm.',
                    'Help có thể đi với bare V hoặc to V; bare V tự nhiên hơn.',
                    'Want + object + to V.',
                    'Make + object + bare V, không có to.',
                    'Let + object + bare V, không có to.',
                    'Suggest thường dùng that-clause hoặc V-ing.',
                    'Succeed in + V-ing.'
                ]
            }
        ],
        checkpoint: [
            'Verb patterns phải học theo từng nhóm verb, không suy bằng tiếng Việt.',
            'Một số verb đổi pattern có thể đổi cả nghĩa: stop doing / stop to do.',
            'That-clause và wh-clause thường dùng để báo nội dung, câu hỏi gián tiếp hoặc giải thích.',
            'Bare infinitive thường xuất hiện sau make, let, help, see, hear, watch, feel.',
            'V + preposition + V-ing là vùng rất hay sai: insist on, succeed in, look forward to, prevent from.'
        ]
    },
    'comparisons': {
        source: '60 câu luyện So Sánh B1 bao phủ comparative, superlative, as...as, less/fewer, irregular forms, rewrite/correction và modifiers.',
        sections: [
            {
                title: 'Nhóm 1: Dạng so sánh đúng',
                instruction: 'Điền dạng comparative hoặc superlative đúng của từ trong ngoặc.',
                questions: [
                    'This book is ___ than the last one. (interesting)',
                    'She is the ___ student in the class. (smart)',
                    'Today is ___ than yesterday. (cold)',
                    'This is the ___ restaurant in town. (good)',
                    'My bag is ___ than yours. (heavy)',
                    'He is the ___ runner on the team. (fast)',
                    'This exercise is ___ than the previous one. (easy)',
                    'They are the ___ people I know. (kind)',
                    'Her answer was ___ than mine. (bad)',
                    'That was the ___ movie of the year. (exciting)'
                ],
                answers: [
                    'more interesting',
                    'smartest',
                    'colder',
                    'best',
                    'heavier',
                    'fastest',
                    'easier',
                    'kindest',
                    'worse',
                    'most exciting'
                ],
                explanations: [
                    'Interesting is a long adjective, so use more.',
                    'Smart typically takes -est in B1 level patterns.',
                    'Short adjective colder uses -er.',
                    'Good is irregular: best.',
                    'Heavy ends in -y after consonant, so change y to i and add -er.',
                    'Fast is short, so fastest.',
                    'Easy changes y to i before -er.',
                    'Kind takes -est.',
                    'Bad is irregular: worse.',
                    'Exciting is long, so most exciting.'
                ]
            },
            {
                title: 'Nhóm 2: as...as / not as...as',
                instruction: 'Điền as phù hợp để hoàn thành cấu trúc so sánh ngang bằng.',
                questions: [
                    'My sister is ___ tall as my mother.',
                    'This hotel is not ___ expensive as the one we stayed in before.',
                    'He runs ___ fast as his brother.',
                    'The new job is not ___ easy as I expected.',
                    'She sings ___ beautifully as her teacher.',
                    'My phone is not ___ good as yours.',
                    'This road is ___ long as the old one.',
                    'The test was not ___ difficult as the practice test.',
                    'He is ___ patient as his father.',
                    'This task is not ___ simple as it looks.'
                ],
                answers: [
                    'as',
                    'as',
                    'as',
                    'as',
                    'as',
                    'as',
                    'as',
                    'as',
                    'as',
                    'as'
                ],
                explanations: [
                    'The pattern is as + adjective + as.',
                    'Not as + adjective + as expresses a lower degree.',
                    'Run is compared with as...as using adverb fast.',
                    'The second as is required in the full pattern.',
                    'Use as...as for equality in manner.',
                    'Good becomes as good as, not so good as in B1 formality.',
                    'The pattern keeps the same structure.',
                    'Not as...as is a common comparison of difficulty.',
                    'As patient as shows equality.',
                    'The comparison still needs as...as.'
                ]
            },
            {
                title: 'Nhóm 3: fewer, less, more, most',
                instruction: 'Chọn fewer, less, more hoặc most.',
                questions: [
                    'There are ___ students this year than last year.',
                    'We have ___ time than before.',
                    'She needs ___ money to buy the laptop.',
                    'This class has the ___ participants in the school.',
                    'I ate ___ cookies than my brother.',
                    'He drinks ___ water now.',
                    'The store sells ___ books than the library.',
                    'They made the ___ mistakes of all.',
                    'We should use ___ plastic if possible.',
                    'I have ___ homework today than yesterday.'
                ],
                answers: [
                    'fewer',
                    'less',
                    'more',
                    'most',
                    'fewer',
                    'less',
                    'more',
                    'fewest',
                    'less',
                    'more'
                ],
                explanations: [
                    'Fewer goes with countable plural nouns.',
                    'Less goes with uncountable nouns.',
                    'More is used for quantity with uncountable money.',
                    'Most is the superlative for quantity.',
                    'Cookies are countable, so fewer.',
                    'Water is uncountable, so less.',
                    'Books are countable, so more.',
                    'Fewest is the superlative for countable nouns.',
                    'Plastic is usually uncountable in this context.',
                    'Homework is uncountable, so more.'
                ]
            },
            {
                title: 'Nhóm 4: So sánh bất quy tắc và nâng cao',
                instruction: 'Điền dạng đúng của từ trong ngoặc.',
                questions: [
                    'Your plan is ___ than mine. (good)',
                    'This situation is ___ than before. (bad)',
                    'Hanoi is ___ than my hometown. (far)',
                    'This result is the ___ of all. (little)',
                    'He has ___ experience than his colleague. (much)',
                    'This road is the ___ route to the station. (far)',
                    'She is ___ at English than her brother. (good)',
                    'We need ___ help than we expected. (much)',
                    'His idea is ___ than yours. (bad)',
                    'That was the ___ day of my life. (good)'
                ],
                answers: [
                    'better',
                    'worse',
                    'farther',
                    'least',
                    'more',
                    'farthest',
                    'better',
                    'more',
                    'worse',
                    'best'
                ],
                explanations: [
                    'Good is irregular: better.',
                    'Bad is irregular: worse.',
                    'Far can be farther/further; farther is fine for physical distance.',
                    'Little is irregular: least.',
                    'Much becomes more in comparative form.',
                    'Farthest is superlative for physical distance.',
                    'Good at is compared with better at.',
                    'More help is the comparative of quantity.',
                    'Bad again becomes worse.',
                    'Best is the superlative of good.'
                ]
            },
            {
                title: 'Nhóm 5: Rewrite và sửa lỗi',
                instruction: 'Viết lại câu cho đúng hoặc sửa lỗi trong câu so sánh.',
                questions: [
                    'This car is more faster than that one.',
                    'She is as tall than her brother.',
                    'This is the most cheapest phone here.',
                    'I have less books than you.',
                    'He is more kinder than his friend.',
                    'The blue dress is not as pretty as the red one. / Rewrite with so...as.',
                    'This problem is easier than the previous problem. / Rewrite with comparative + than.',
                    'My house is biger than yours.',
                    'They are the happiest people I know. / Change to comparative.',
                    'We have the most time than them.'
                ],
                answers: [
                    'This car is faster than that one.',
                    'She is as tall as her brother.',
                    'This is the cheapest phone here.',
                    'I have fewer books than you.',
                    'He is kinder than his friend.',
                    'The blue dress is not so pretty as the red one.',
                    'This problem is easier than the previous one.',
                    'My house is bigger than yours.',
                    'They are happier than the people I know.',
                    'We have more time than them.'
                ],
                explanations: [
                    'Do not use more before faster.',
                    'The pattern is as + adjective + as, not as...than.',
                    'Do not stack most and cheapest.',
                    'Books are countable, so fewer.',
                    'Do not use more before kinder.',
                    'So...as can replace not as...as in this rewrite.',
                    'The second noun phrase can be shortened to previous one.',
                    'Big needs double g before -er.',
                    'Happiest changes to happier when comparing two groups.',
                    'Time is uncountable, so more.'
                ]
            },
            {
                title: 'Nhóm 6: same / different / modifiers',
                instruction: 'Điền cụm hoặc trạng từ phù hợp trước tính từ/trạng từ so sánh.',
                questions: [
                    'This phone is ___ the same as mine.',
                    'Their idea is ___ different from ours.',
                    'This road is ___ shorter than the old one.',
                    'Her bag is ___ heavier than mine.',
                    'My room is ___ cleaner than before.',
                    'The weather today is ___ better than yesterday.',
                    'His work is ___ more organized than mine.',
                    'That restaurant is ___ less expensive than this one.',
                    'Her answer is ___ more detailed than his.',
                    'This plan is ___ similar to the old one.'
                ],
                answers: [
                    'exactly',
                    'completely',
                    'much',
                    'a lot',
                    'a bit',
                    'far',
                    'much',
                    'far',
                    'a little',
                    'very'
                ],
                explanations: [
                    'Exactly the same as nhấn mức độ trùng khớp hoàn toàn.',
                    'Completely different from là mẫu rất tự nhiên.',
                    'Much thường đứng trước comparative để nhấn mạnh.',
                    'A lot cũng dùng trước comparative để nhấn mạnh.',
                    'A bit làm mức so sánh nhẹ hơn.',
                    'Far là modifier mạnh trước comparative.',
                    'Much + comparative là cách nhấn mức độ phổ biến.',
                    'Far + comparative làm câu mạnh hơn.',
                    'A little làm mức so sánh nhẹ hơn.',
                    'Very similar to là cụm chuẩn.'
                ]
            }
        ],
        checkpoint: [
            'Short adjectives usually take -er/-est; longer adjectives usually take more/most.',
            'As...as shows equality; not as/so...as shows a lower degree.',
            'Fewer goes with countable plural nouns; less goes with uncountable nouns.',
            'Irregular comparisons like good-better-best, bad-worse-worst, far-farther/further, little-less-least must be memorized.',
            'Avoid double comparatives and double superlatives.',
            'The same as / different from / similar to are fixed comparison patterns that need memorization.'
        ]
    },
    'comparative-correlatives': {
        source: '24 câu luyện The + Comparative... The + Comparative · B2 bao phủ nhận diện, hoàn thành cặp “càng... càng...”, và sửa lỗi viết lại.',
        sections: [
            {
                title: 'Nhóm 1: Hoàn thành câu',
                instruction: 'Điền câu hoàn chỉnh với the + comparative... the + comparative.',
                items: [
                    {
                        prompt: '___ you study, ___ you understand.<br><em>Nghĩa: Bạn học càng nhiều, bạn hiểu càng nhiều.</em>',
                        answer: 'The more you study, the more you understand.',
                        explanation: 'The more... the more... diễn tả hai vế tăng song song.'
                    },
                    {
                        prompt: '___ you work, ___ your results will be.<br><em>Nghĩa: Bạn làm việc càng chăm, kết quả càng tốt.</em>',
                        answer: 'The harder you work, the better your results will be.',
                        explanation: 'Harder and better are both comparative forms in the pattern.'
                    },
                    {
                        prompt: '___ we start, ___ we finish.<br><em>Nghĩa: Chúng ta bắt đầu càng sớm, chúng ta kết thúc càng sớm.</em>',
                        answer: 'The sooner we start, the sooner we finish.',
                        explanation: 'Sooner is the comparative of soon.'
                    },
                    {
                        prompt: '___ you worry, ___ you sleep.<br><em>Nghĩa: Bạn lo lắng càng ít, bạn ngủ càng ngon.</em>',
                        answer: 'The less you worry, the better you sleep.',
                        explanation: 'Less and better are a natural pair in this meaning.'
                    },
                    {
                        prompt: '___ he gets, ___ he becomes.<br><em>Nghĩa: Anh ấy càng lớn tuổi, anh ấy càng chín chắn.</em>',
                        answer: 'The older he gets, the wiser he becomes.',
                        explanation: 'Older and wiser are comparative adjectives linked by the correlative pattern.'
                    },
                    {
                        prompt: '___ you drive, ___ you are.<br><em>Nghĩa: Bạn lái xe càng cẩn thận, bạn càng an toàn.</em>',
                        answer: 'The more carefully you drive, the safer you are.',
                        explanation: 'Carefully becomes more carefully; safe becomes safer.'
                    },
                    {
                        prompt: '___ the task is, ___ it takes.<br><em>Nghĩa: Nhiệm vụ càng khó, nó càng mất nhiều thời gian.</em>',
                        answer: 'The more difficult the task is, the longer it takes.',
                        explanation: 'Difficult and long are both comparative in the two clauses.'
                    },
                    {
                        prompt: '___ you practice, ___ confident you become.<br><em>Nghĩa: Bạn luyện tập càng nhiều, bạn càng tự tin.</em>',
                        answer: 'The more you practice, the more confident you become.',
                        explanation: 'More confident is the comparative of degree here.'
                    }
                ]
            },
            {
                title: 'Nhóm 2: Điền cặp so sánh',
                instruction: 'Điền phần còn thiếu để hoàn thành cấu trúc “càng... càng...”.',
                items: [
                    {
                        prompt: 'The ___ you read, the more vocabulary you learn.<br><em>Nghĩa: Bạn đọc càng nhiều, bạn học được càng nhiều từ vựng.</em>',
                        answer: 'more',
                        explanation: 'The more... the more... is the standard correlative pair.'
                    },
                    {
                        prompt: 'The ___ the price, the more customers buy.<br><em>Nghĩa: Giá càng rẻ, khách hàng mua càng nhiều.</em>',
                        answer: 'lower',
                        explanation: 'Lower is the comparative of low.'
                    },
                    {
                        prompt: 'The ___ you arrive, the better seats you get.<br><em>Nghĩa: Bạn đến càng sớm, bạn càng có chỗ ngồi tốt hơn.</em>',
                        answer: 'earlier',
                        explanation: 'Earlier is the comparative of early.'
                    },
                    {
                        prompt: 'The ___ carefully you plan, the fewer mistakes you make.<br><em>Nghĩa: Bạn lập kế hoạch càng cẩn thận, bạn càng mắc ít lỗi hơn.</em>',
                        answer: 'more',
                        explanation: 'Carefully becomes more carefully in the correlative pattern.'
                    },
                    {
                        prompt: 'The ___ information you have, the better decisions you make.<br><em>Nghĩa: Bạn có càng nhiều thông tin, bạn đưa ra quyết định càng tốt.</em>',
                        answer: 'more',
                        explanation: 'More information is the natural quantity expression here.'
                    },
                    {
                        prompt: 'The ___ the weather gets, the less we want to go out.<br><em>Nghĩa: Thời tiết càng xấu, chúng tôi càng không muốn ra ngoài.</em>',
                        answer: 'worse',
                        explanation: 'Worse is the comparative of bad.'
                    },
                    {
                        prompt: 'The ___ you save, the more freedom you have later.<br><em>Nghĩa: Bạn tiết kiệm càng nhiều, sau này bạn càng có nhiều tự do hơn.</em>',
                        answer: 'more money',
                        explanation: 'More money is a common noun phrase in this pattern.'
                    },
                    {
                        prompt: 'The ___ you go, the colder it gets.<br><em>Nghĩa: Bạn đi càng xa, trời càng lạnh.</em>',
                        answer: 'further',
                        explanation: 'Further works naturally for distance here.'
                    }
                ]
            },
            {
                title: 'Nhóm 3: Sửa lỗi và viết lại',
                instruction: 'Sửa lỗi trong câu hoặc viết lại bằng cấu trúc The + Comparative... The + Comparative.',
                items: [
                    {
                        prompt: 'The more you study, more you understand.<br><em>Nghĩa: Bạn học càng nhiều, bạn hiểu càng nhiều.</em>',
                        answer: 'The more you study, the more you understand.',
                        explanation: 'The second the is required.'
                    },
                    {
                        prompt: 'The more faster you run, the better you feel.<br><em>Nghĩa: Bạn chạy càng nhanh, bạn càng thấy tốt hơn.</em>',
                        answer: 'The faster you run, the better you feel.',
                        explanation: 'Do not use more before faster.'
                    },
                    {
                        prompt: 'The more older I get, the wiser I become.<br><em>Nghĩa: Tôi càng lớn tuổi, tôi càng chín chắn.</em>',
                        answer: 'The older I get, the wiser I become.',
                        explanation: 'Older already is a comparative; do not add more.'
                    },
                    {
                        prompt: 'The much you practice, the better you will perform.<br><em>Nghĩa: Bạn luyện tập càng nhiều, bạn sẽ thể hiện càng tốt.</em>',
                        answer: 'The more you practice, the better you will perform.',
                        explanation: 'Much is not the correct comparative here; use more.'
                    },
                    {
                        prompt: 'The more carefully you work, the less mistakes you make.<br><em>Nghĩa: Bạn làm việc càng cẩn thận, bạn càng mắc ít lỗi.</em>',
                        answer: 'The more carefully you work, the fewer mistakes you make.',
                        explanation: 'Mistakes are countable plural, so use fewer.'
                    },
                    {
                        prompt: 'The less you sleep, the tired you feel.<br><em>Nghĩa: Bạn ngủ càng ít, bạn càng mệt.</em>',
                        answer: 'The less you sleep, the more tired you feel.',
                        explanation: 'More tired is the correct comparative of degree.'
                    },
                    {
                        prompt: 'The early you start, the sooner you finish.<br><em>Nghĩa: Bạn bắt đầu càng sớm, bạn kết thúc càng sớm.</em>',
                        answer: 'The earlier you start, the sooner you finish.',
                        explanation: 'Early becomes earlier in the comparative form.'
                    },
                    {
                        prompt: 'Write a sentence with this meaning: “Càng đọc nhiều, bạn càng học nhiều.”<br><em>Nghĩa: Viết lại theo cấu trúc so sánh tương quan.</em>',
                        answer: 'The more you read, the more you learn.',
                        explanation: 'This is the standard correlative structure for the meaning “càng... càng...”.'
                    }
                ]
            }
        ],
        checkpoint: [
            'Cả hai vế đều cần the + comparative.',
            'Có thể dùng more / less / fewer / better / worse / older / sooner tùy nghĩa.',
            'Dùng sai comparative kép như more faster hoặc more older là lỗi rất phổ biến.',
            'Trong vế sau, cấu trúc vẫn phải giữ song song và tự nhiên.'
        ]
    },
    'wish-if-only': {
        source: 'Bài luyện Wish / If only tập trung vào hiện tại trái thực tế, quá khứ tiếc nuối, than phiền / mong thay đổi, phủ định và chuyển đổi với conditionals.',
        sections: [
            {
                title: 'Chọn dạng wish đúng',
                instruction: 'Điền dạng đúng của động từ sau wish/if only.',
                questions: [
                    'I wish I ___ more free time. / Tôi ước mình có nhiều thời gian rảnh hơn.',
                    'She wishes she ___ taller. / Cô ấy ước mình cao hơn.',
                    'I wish I ___ harder for the exam. / Tôi ước mình đã học chăm hơn cho kỳ thi.',
                    'He wishes he ___ more carefully yesterday. / Anh ấy ước hôm qua mình đã lái xe cẩn thận hơn.',
                    'I wish it ___ raining. / Tôi ước trời ngừng mưa.',
                    'If only he ___ us what happened. / Giá như anh ấy nói cho chúng tôi biết chuyện gì đã xảy ra.',
                    'If only I ___ that decision last year. / Giá như năm ngoái tôi đã không đưa ra quyết định đó.',
                    'I wish my neighbors ___ so loudly at night. / Tôi ước hàng xóm của tôi đừng ồn ào vào ban đêm như vậy.'
                ],
                answers: [
                    'had',
                    'were',
                    'had studied',
                    'had driven',
                    'would stop',
                    'would tell',
                    'had not made',
                    'would not talk'
                ],
                explanations: [
                    'Wish về hiện tại thường dùng past simple để nói điều trái thực tế.',
                    'Were được dùng thay cho was trong giả định trang trọng.',
                    'Wish về quá khứ dùng past perfect: had studied.',
                    'Hành động đã xảy ra ở quá khứ nên dùng had driven.',
                    'Wish + would thường dùng cho điều muốn thay đổi hoặc than phiền.',
                    'If only có thể đi với would khi mong người khác thay đổi hành vi.',
                    'Wish về quá khứ dùng had + V3: had not made.',
                    'Would not talk diễn tả mong hành vi gây phiền chấm dứt.'
                ]
            },
            {
                title: 'Đổi câu theo đúng ý nghĩa',
                instruction: 'Viết lại câu với wish hoặc if only để giữ đúng nghĩa tiếng Việt.',
                questions: [
                    'I do not have enough money. / Tôi ước mình có đủ tiền.',
                    'He lost his passport yesterday. / Anh ấy ước hôm qua mình không làm mất hộ chiếu.',
                    'The weather is terrible. / Giá như thời tiết đẹp hơn.',
                    'She never listens to me. / Tôi ước cô ấy chịu lắng nghe tôi.',
                    'We did not arrive earlier. / Giá như chúng tôi đến sớm hơn.',
                    'It is impossible for me to travel this week. / Tôi ước mình có thể đi du lịch tuần này.'
                ],
                answers: [
                    'I wish I had enough money.',
                    'He wishes he had not lost his passport yesterday.',
                    'If only the weather were better.',
                    'I wish she would listen to me.',
                    'If only we had arrived earlier.',
                    'I wish I could travel this week.'
                ],
                explanations: [
                    'Điều trái thực tế ở hiện tại dùng wish + past simple.',
                    'Mất hộ chiếu là việc đã xảy ra xong nên dùng wish + past perfect.',
                    'If only thường mạnh hơn wish và rất hợp để than phiền về hiện tại.',
                    'Khi muốn người khác thay đổi hành vi, wish + would là tự nhiên.',
                    'Nếu thời điểm đã qua, phải dùng past perfect trong mệnh đề wish.',
                    'Với khả năng không có thật hiện tại, có thể dùng wish + could.'
                ]
            },
            {
                title: 'Phân biệt wish, if only và hope',
                instruction: 'Chọn từ phù hợp nhất: wish, if only hoặc hope.',
                questions: [
                    'I ___ I could speak English fluently one day.',
                    '___ I had brought my umbrella!',
                    'I ___ she stops calling me at midnight.',
                    'We ___ you have a great trip tomorrow.',
                    'I ___ I had not said that yesterday.',
                    '___ this traffic would move faster!'
                ],
                answers: [
                    'hope',
                    'If only',
                    'wish',
                    'hope',
                    'wish',
                    'If only'
                ],
                explanations: [
                    'Hope dùng cho hy vọng thực tế, có khả năng xảy ra.',
                    'If only mạnh cảm xúc và bày tỏ tiếc nuối rõ hơn wish.',
                    'Wish + would hợp khi than phiền / mong người khác đổi hành vi.',
                    'Hope dùng cho mong điều tốt trong tương lai.',
                    'Wish + past perfect dùng cho tiếc nuối về quá khứ.',
                    'If only rất tự nhiên trong câu than thở hoặc cảm thán.'
                ]
            },
            {
                title: 'Dạng phủ định',
                instruction: 'Điền dạng phủ định đúng sau wish/if only.',
                questions: [
                    'I wish I ___ have to work tomorrow. / Tôi ước ngày mai mình không phải đi làm.',
                    'She wishes he ___ smoke near her. / Cô ấy ước anh ấy đừng hút thuốc gần cô ấy.',
                    'I wish I ___ forgotten your birthday. / Tôi ước mình đã không quên sinh nhật bạn.',
                    'If only we ___ so late. / Giá như chúng ta không quá muộn.',
                    'They wish they ___ argued yesterday. / Họ ước hôm qua họ đã không cãi nhau.',
                    'I wish my boss ___ call me so late. / Tôi ước sếp đừng gọi cho tôi muộn thế.'
                ],
                answers: [
                    'didn’t',
                    'wouldn’t',
                    'hadn’t',
                    'weren’t',
                    'hadn’t',
                    'wouldn’t'
                ],
                explanations: [
                    'Wish về hiện tại trái thực tế thường dùng didn’t + bare verb sau wish.',
                    'Wish + wouldn’t dùng cho hành vi/ thói quen gây phiền mà bạn muốn dừng lại.',
                    'Quá khứ tiếc nuối dùng had not + V3.',
                    'If only + past simple để nói hiện tại trái thực tế, ở đây là weren’t so late.',
                    'Sau wish về quá khứ, dùng had not + bare form như một negative past perfect.',
                    'Wouldn’t diễn tả mong hành vi người khác thay đổi.'
                ]
            },
            {
                title: 'Chuyển đổi với conditionals',
                instruction: 'Viết lại câu để giữ nghĩa gần nhất giữa wish / if only và conditional.',
                questions: [
                    'If I had more free time, I would learn guitar. / Viết lại bằng wish.',
                    'If she had studied harder, she would have passed the exam. / Viết lại bằng wish.',
                    'If it stopped raining, we would go out. / Viết lại bằng wish.',
                    'I wish I were rich. / Viết lại bằng conditional.',
                    'I wish he would stop making noise. / Viết lại bằng conditional.',
                    'If only I had not said that. / Viết lại bằng conditional.'
                ],
                answers: [
                    'I wish I had more free time.',
                    'She wishes she had studied harder.',
                    'I wish it would stop raining.',
                    'If I were rich, I would buy a house.',
                    'If he stopped making noise, I would be grateful.',
                    'If I had not said that, I would feel better now.'
                ],
                explanations: [
                    'Conditional type 2 với tình huống trái thực tế hiện tại tương ứng với wish + past simple.',
                    'Conditional type 3 tương ứng với wish + past perfect.',
                    'Wish + would thường đi với mong thay đổi trong tương lai.',
                    'Câu conditional type 2 là cách diễn đạt song song với wish + adj/verb trái thực tế.',
                    'Dạng conditional có thể diễn đạt ý muốn thay đổi hành vi tương lai, dù sắc thái hơi khác.',
                    'Đây là dạng viết lại kiểm tra khả năng đổi từ regret sang conditional type 3.'
                ]
            }
        ],
        checkpoint: [
            'Wish + past simple: mong hiện tại khác đi.',
            'Wish + past perfect: tiếc nuối về quá khứ.',
            'Wish + would: mong sự việc hoặc hành vi thay đổi trong tương lai.',
            'If only mạnh cảm xúc hơn wish; hope dùng cho mong muốn thực tế.',
            'Wish/if only thường map rất gần với conditional type 2 và type 3.'
        ]
    },
    'causatives': {
        source: 'Bài luyện Causatives tập trung vào make/let/have/get, have/get something done và dạng bị động be made to / be allowed to.',
        sections: [
            {
                title: 'Chọn causative đúng',
                instruction: 'Điền make, let, have hoặc get ở dạng đúng.',
                questions: [
                    'The teacher ___ us stay after class. / Giáo viên bắt chúng tôi ở lại sau giờ học.',
                    'My parents ___ me go out tonight. / Bố mẹ cho tôi đi chơi tối nay.',
                    'I need to ___ my car checked this week. / Tôi cần mang xe đi kiểm tra tuần này.',
                    'She ___ her brother to drive her to school. / Cô ấy nhờ anh trai chở đến trường.',
                    'The manager ___ the staff work overtime. / Quản lý bắt nhân viên làm thêm giờ.',
                    'We ___ the house painted last month. / Chúng tôi đã thuê sơn nhà tháng trước.',
                    'Please ___ me open the window. / Làm ơn cho tôi mở cửa sổ.',
                    'He ___ his hair cut every month. / Anh ấy cắt tóc mỗi tháng.',
                    'They ___ the mechanic inspect the brakes. / Họ nhờ thợ máy kiểm tra phanh.',
                    'The guard ___ us enter the building. / Bảo vệ cho chúng tôi vào tòa nhà.'
                ],
                answers: [
                    'made',
                    'let',
                    'have',
                    'got',
                    'made',
                    'had',
                    'let',
                    'has',
                    'got',
                    'let'
                ],
                explanations: [
                    'Make + object + bare V diễn tả ép buộc.',
                    'Let + object + bare V diễn tả cho phép.',
                    'Have + object + V3 dùng khi nhờ làm dịch vụ.',
                    'Get + object + to V nhấn việc thuyết phục/nhờ được.',
                    'Made cho thấy mức ép buộc mạnh hơn have.',
                    'Had the house painted là causative passive: thuê người sơn nhà.',
                    'Let me open the window = cho phép tôi làm việc đó.',
                    'Has his hair cut là thói quen/đi dịch vụ cắt tóc.',
                    'Got the mechanic to inspect... nhấn việc nhờ thành công.',
                    'Let us enter = cho phép vào.'
                ]
            },
            {
                title: 'Viết lại với have/get something done',
                instruction: 'Viết lại câu theo mẫu have/get + object + V3.',
                questions: [
                    'I repaired my phone yesterday.',
                    'She is cleaning the air conditioner tomorrow.',
                    'We will service the car next week.',
                    'The dentist checked my teeth.',
                    'The tailor made my suit.',
                    'They will fix the roof before winter.'
                ],
                answers: [
                    'I had my phone repaired yesterday.',
                    'She is having the air conditioner cleaned tomorrow.',
                    'We will have the car serviced next week.',
                    'I had my teeth checked by the dentist.',
                    'I had my suit made by the tailor.',
                    'They will have the roof fixed before winter.'
                ],
                explanations: [
                    'Causative passive dùng khi người nói không trực tiếp sửa.',
                    'Be having + object + V3 diễn tả kế hoạch dịch vụ đã sắp xếp.',
                    'Will have + object + V3 nói về việc thuê hoặc nhờ làm trong tương lai.',
                    'Có thể thêm by + agent để rõ người thực hiện.',
                    'Have + object + V3 rất tự nhiên cho quần áo may đo.',
                    'Have the roof fixed là dạng nhờ dịch vụ sửa chữa.'
                ]
            },
            {
                title: 'Nâng cao: have/get something done',
                instruction: 'Viết lại câu sao cho đúng mẫu have/get + object + V3 và giữ đúng thì.',
                questions: [
                    'We need to translate the report into English before Monday.',
                    'She is asking someone to redesign her website.',
                    'He repaired the broken screen at the service center.',
                    'I will renew my passport next week.',
                    'They are cleaning the windows right now.',
                    'The company had someone deliver the package late yesterday.',
                    'Could you print these documents for me?',
                    'By Friday, we will finish installing the new software.',
                    'She had the mechanic check the brakes after the trip.',
                    'I have just asked the barber to cut my hair.'
                ],
                answers: [
                    'We need to have the report translated into English before Monday.',
                    'She is having her website redesigned.',
                    'He had the broken screen repaired at the service center.',
                    'I will have my passport renewed next week.',
                    'They are having the windows cleaned right now.',
                    'The company had the package delivered late yesterday.',
                    'Could you get these documents printed for me?',
                    'By Friday, we will have the new software installed.',
                    'She had the brakes checked after the trip.',
                    'I have just had my hair cut.'
                ],
                explanations: [
                    'Need to + have + object + V3 là dạng rất tự nhiên khi thuê dịch vụ.',
                    'Be having + object + V3 diễn tả việc đang sắp xếp / đang thực hiện dịch vụ.',
                    'Had + object + V3 dùng khi người nói không tự sửa mà nhờ dịch vụ.',
                    'Will have + object + V3 nói kế hoạch tương lai với một việc được sắp đặt.',
                    'Câu hiện tại tiếp diễn vẫn giữ được ý dịch vụ đang diễn ra.',
                    'Had the package delivered = thuê/nhờ giao hàng.',
                    'Get + object + V3 cũng dùng được trong văn nói khi nhờ ai làm.',
                    'Will have + object + V3 nhấn việc sẽ hoàn tất trước Friday.',
                    'Have + object + V3 phù hợp khi mang xe đi kiểm tra.',
                    'I have just had my hair cut = vừa đi cắt tóc xong.'
                ]
            },
            {
                title: 'Phân biệt make, let, have, get',
                instruction: 'Chọn verb phù hợp nhất: make, let, have hoặc get.',
                questions: [
                    'The boss ___ us work late yesterday.',
                    'My sister ___ me borrow her notes.',
                    'I ___ the electrician fix the lights.',
                    'The news ___ her cry.',
                    'We ___ the doctor call us back.',
                    'My parents ___ me stay out after 10 p.m.',
                    'He ___ his son clean the room every Sunday.',
                    'She ___ me to explain everything twice.'
                ],
                answers: [
                    'made',
                    'let',
                    'had',
                    'made',
                    'got',
                    'let',
                    'makes',
                    'got'
                ],
                explanations: [
                    'Make = ép buộc hoặc bắt làm.',
                    'Let = cho phép.',
                    'Have + object + bare V có thể dùng khi nhờ ai làm việc.',
                    'Make + object + bare V còn dùng cho phản ứng cảm xúc.',
                    'Get + object + to V nhấn việc thuyết phục hoặc nhờ được.',
                    'Let = cho phép làm điều gì.',
                    'Make + object + bare V cho nghĩa bắt buộc lặp lại.',
                    'Get + object + to V: thuyết phục ai đó làm gì.'
                ]
            },
            {
                title: 'Nâng cao: make / let trong câu khó',
                instruction: 'Điền make hoặc let đúng thì, chú ý phủ định và bị động.',
                questions: [
                    'The strict teacher ___ us rewrite the essay three times.',
                    'My boss ___ me leave early yesterday because I was sick.',
                    'The loud music ___ me unable to concentrate.',
                    'They never ___ the children play near the river.',
                    'The guard ___ us enter until we showed our ID cards.',
                    'The news of her success ___ her mother cry with joy.',
                    'Please ___ me explain what happened.',
                    'His parents ___ him stay up late on weekends.'
                ],
                answers: [
                    'made',
                    'let',
                    'made',
                    'let',
                    'let',
                    'made',
                    'let',
                    'let'
                ],
                explanations: [
                    'Make + object + bare V dùng khi ép buộc làm nhiều lần.',
                    'Let + object + bare V = cho phép.',
                    'Make + object + adjective / bare V có thể diễn tả khiến ai rơi vào trạng thái nào.',
                    'Never let = không bao giờ cho phép.',
                    'Until we showed our ID cards cho thấy điều kiện được phép vào.',
                    'Make + object + bare V cũng dùng cho phản ứng cảm xúc.',
                    'Please let me explain = cho phép tôi giải thích.',
                    'Let him stay up late = cho phép thức khuya.'
                ]
            },
            {
                title: 'Nâng cao: causatives trong câu đảo',
                instruction: 'Viết lại câu với cấu trúc đảo để nhấn mạnh.',
                questions: [
                    'I had never had my passport renewed so quickly before.',
                    'We had only then let the children go outside.',
                    'She had rarely been allowed to use the lab alone.',
                    'He had scarcely got the car repaired when it broke again.',
                    'The school had not until that day let the students use the gym.',
                    'I had never made anyone wait that long.'
                ],
                answers: [
                    'Never had I had my passport renewed so quickly before.',
                    'Only then had we let the children go outside.',
                    'Rarely had she been allowed to use the lab alone.',
                    'Scarcely had he got the car repaired when it broke again.',
                    'Not until that day had the school let the students use the gym.',
                    'Never had I made anyone wait that long.'
                ],
                explanations: [
                    'Đảo ngữ với never thường đứng đầu câu và đảo trợ động từ lên trước chủ ngữ.',
                    'Only then + đảo nhấn một mốc thời gian cụ thể.',
                    'Rarely + đảo rất hợp với cấu trúc bị động của let.',
                    'Scarcely...when là cặp đảo quen thuộc để nói sự việc xảy ra gần như ngay sau đó.',
                    'Not until + mốc thời gian thường kéo đảo ở mệnh đề chính.',
                    'Never + đảo nhấn mức độ cực đoan của hành động.'
                ]
            },
            {
                title: 'Nâng cao: causatives trong câu điều kiện',
                instruction: 'Điền dạng causative đúng trong mệnh đề điều kiện.',
                questions: [
                    'If the manager ___ us leave early, we will finish the report tonight.',
                    'If they had ___ the car repaired, they would not have missed the trip.',
                    'If my parents had ___ me study abroad, I would have accepted the offer.',
                    'If she ___ her hair cut tomorrow, she will look different at the party.',
                    'If the school had ___ the students rewrite the essay, they would have learned more.',
                    'If the mechanic had ___ the brakes checked, the accident might have been avoided.'
                ],
                answers: [
                    'lets',
                    'had',
                    'let',
                    'gets',
                    'made',
                    'had'
                ],
                explanations: [
                    'Câu điều kiện loại 1 cần present simple ở mệnh đề if: lets.',
                    'Had something done là mẫu causative passive trong past perfect.',
                    'Let + object + bare V diễn tả được cho phép trong quá khứ giả định.',
                    'Get + object + past participle dùng cho kế hoạch tương lai gần.',
                    'Made + object + bare V là ép buộc trong quá khứ.',
                    'Had the brakes checked là cách nói nhờ người khác kiểm tra phanh.'
                ]
            },
            {
                title: 'Nâng cao: causatives trong câu gián tiếp',
                instruction: 'Chuyển sang reported speech, giữ đúng nghĩa causative.',
                questions: [
                    'He said, "Have the report translated by Friday."',
                    'She said, "Let me use your laptop for a minute."',
                    'The coach said, "Make the players run one more lap."',
                    'My mother said, "Get your hair cut before the interview."',
                    'The director said, "Have the documents prepared immediately."',
                    'He said, "Let the children stay in the garden."'
                ],
                answers: [
                    'He told us to have the report translated by Friday.',
                    'She asked to be allowed to use the laptop for a minute.',
                    'The coach told them to make the players run one more lap.',
                    'My mother told me to get my hair cut before the interview.',
                    'The director told them to have the documents prepared immediately.',
                    'He told us to let the children stay in the garden.'
                ],
                explanations: [
                    'Reported speech của mệnh lệnh có thể giữ causative bằng động từ nguyên mẫu.',
                    'Be allowed to giữ nghĩa "được phép" rõ hơn trong câu này.',
                    'Tell + object + to V là cách báo lại mệnh lệnh trực tiếp.',
                    'Get + object + past participle vẫn giữ ý nhờ/dịch vụ.',
                    'Have the documents prepared là causative passive trong reported speech.',
                    'Let có thể giữ nghĩa cho phép trong lời tường thuật.'
                ]
            },
            {
                title: 'Chuyển sang dạng bị động phù hợp',
                instruction: 'Viết lại câu theo dạng passive causative hoặc be made to / be allowed to.',
                questions: [
                    'The teacher made the students stay.',
                    'They let us use the room.',
                    'The boss made her rewrite the report.',
                    'My parents let me use the car.',
                    'The guard made them leave the building.',
                    'The school let the children play outside.'
                ],
                answers: [
                    'The students were made to stay.',
                    'We were allowed to use the room.',
                    'She was made to rewrite the report.',
                    'I was allowed to use the car.',
                    'They were made to leave the building.',
                    'The children were allowed to play outside.'
                ],
                explanations: [
                    'Make trong bị động đổi thành be made to + V.',
                    'Let thường tương ứng với be allowed to + V trong bị động.',
                    'Passive causative giữ ý nghĩa bị bắt làm.',
                    'Ở bị động, người được phép làm gì = be allowed to.',
                    'Các câu ép buộc trong bị động thường cần to sau made.',
                    'Let chuyển sang be allowed to nghe tự nhiên hơn.'
                ]
            }
        ],
        checkpoint: [
            'Make = ép buộc; let = cho phép; have = nhờ/sắp xếp; get = thuyết phục/nhờ được.',
            'Have/get + object + V3 dùng cho dịch vụ, sửa chữa, chăm sóc, kiểm tra.',
            'Passive của make là be made to + V; passive gần nghĩa của let là be allowed to + V.',
            'Causatives thường cần nhìn xem chủ ngữ tự làm hay nhờ/người khác làm.'
        ]
    },
    'phrasal-verbs': {
        source: 'Bài luyện Phrasal Verbs B1 tập trung vào nghĩa cụm, vị trí tân ngữ và cách hiểu theo ngữ cảnh.',
        sections: [
            {
                title: 'Chọn phrasal verb đúng theo ngữ cảnh',
                instruction: 'Điền phrasal verb phù hợp nhất vào chỗ trống.',
                questions: [
                    'Please ___ the lights before you leave. / Hãy tắt đèn trước khi bạn rời đi.',
                    'I need to ___ this problem before the meeting. / Tôi cần giải quyết vấn đề này trước cuộc họp.',
                    'She decided to ___ smoking last year. / Cô ấy quyết định bỏ thuốc lá năm ngoái.',
                    'Can you ___ my bag for a minute? / Bạn trông giúp túi của tôi một lát được không?',
                    'The plane will ___ at 9:30. / Máy bay sẽ cất cánh lúc 9 giờ 30.',
                    'We had to ___ the meeting because the manager was sick. / Chúng tôi phải hoãn cuộc họp vì quản lý bị ốm.',
                    'I always ___ new words in the dictionary. / Tôi luôn tra từ mới trong từ điển.',
                    'He managed to ___ with his new classmates quickly. / Cậu ấy đã hòa đồng với bạn cùng lớp mới rất nhanh.',
                    'I do not know the answer yet, but I will ___ it later. / Tôi chưa biết đáp án, nhưng lát nữa tôi sẽ tìm ra.',
                    'Let us ___ with the presentation. / Hãy tiếp tục với bài thuyết trình.'
                ],
                answers: [
                    'turn off',
                    'work out',
                    'give up',
                    'look after',
                    'take off',
                    'put off',
                    'look up',
                    'get along',
                    'find out',
                    'carry on'
                ],
                explanations: [
                    'Turn off = tắt thiết bị hoặc nguồn điện.',
                    'Work out = giải quyết hoặc tìm ra một vấn đề.',
                    'Give up = bỏ, từ bỏ một thói quen hoặc việc đang làm.',
                    'Look after = trông nom, chăm sóc.',
                    'Take off = cất cánh.',
                    'Put off = hoãn, dời lại.',
                    'Look up = tra cứu thông tin.',
                    'Get along (with) = hòa hợp, hòa đồng.',
                    'Find out = phát hiện ra, tìm ra.',
                    'Carry on = tiếp tục.'
                ]
            },
            {
                title: 'Flashcard mở rộng: các cụm phải thuộc',
                instruction: 'Đọc nhanh từng cụm, che phần đáp án và tự nhắc lại nghĩa trước khi xem.',
                items: [
                    { prompt: 'wake up', answer: 'thức dậy', explanation: 'Dùng khi tỉnh giấc.' },
                    { prompt: 'get up', answer: 'ra khỏi giường / thức dậy', explanation: 'Nhấn hành động rời khỏi giường.' },
                    { prompt: 'go out', answer: 'đi ra ngoài', explanation: 'Rời khỏi nhà hoặc phòng.' },
                    { prompt: 'come back', answer: 'quay lại', explanation: 'Trở về nơi vừa rời đi.' },
                    { prompt: 'sit down', answer: 'ngồi xuống', explanation: 'Nhấn hành động chuyển sang tư thế ngồi.' },
                    { prompt: 'stand up', answer: 'đứng dậy', explanation: 'Nhấn hành động chuyển sang tư thế đứng.' },
                    { prompt: 'lie down', answer: 'nằm xuống', explanation: 'Thường dùng khi nghỉ ngơi hoặc ngủ.' },
                    { prompt: 'run out of', answer: 'hết / cạn', explanation: 'Dùng cho tiền, thời gian, nhiên liệu, đồ dùng...' },
                    { prompt: 'fill in', answer: 'điền vào', explanation: 'Điền thông tin vào chỗ trống.' },
                    { prompt: 'fill out', answer: 'điền đầy đủ', explanation: 'Hoàn thành một mẫu hoặc form.' },
                    { prompt: 'look up', answer: 'tra cứu', explanation: 'Tìm thông tin trong từ điển, internet...' },
                    { prompt: 'look over', answer: 'xem lại / kiểm tra nhanh', explanation: 'Đọc hoặc kiểm tra qua trước khi quyết định.' },
                    { prompt: 'hand in', answer: 'nộp', explanation: 'Nộp bài, nộp báo cáo, nộp giấy tờ.' },
                    { prompt: 'hand out', answer: 'phát', explanation: 'Phát tài liệu, phát tờ rơi, phát đề.' },
                    { prompt: 'go over', answer: 'ôn lại / xem kỹ', explanation: 'Rà soát nội dung hoặc học lại.' },
                    { prompt: 'catch up on', answer: 'bù đắp / cập nhật', explanation: 'Làm lại phần đã bỏ lỡ.' },
                    { prompt: 'work out', answer: 'giải quyết / tìm ra', explanation: 'Có thể cũng mang nghĩa tập luyện.' },
                    { prompt: 'carry out', answer: 'tiến hành / thực hiện', explanation: 'Thực hiện một kế hoạch, nhiệm vụ, nghiên cứu.' },
                    { prompt: 'set up', answer: 'thiết lập / dựng lên', explanation: 'Thiết lập hệ thống hoặc sắp đặt một thứ gì đó.' },
                    { prompt: 'find out', answer: 'phát hiện ra / tìm ra', explanation: 'Biết được thông tin sau quá trình tìm kiếm.' },
                    { prompt: 'give up', answer: 'từ bỏ', explanation: 'Ngừng cố gắng hoặc bỏ thói quen.' },
                    { prompt: 'put off', answer: 'hoãn / trì hoãn', explanation: 'Dời việc sang lúc khác.' },
                    { prompt: 'turn down', answer: 'từ chối / vặn nhỏ', explanation: 'Có thể là từ chối lời mời hoặc giảm âm lượng.' },
                    { prompt: 'calm down', answer: 'bình tĩnh lại', explanation: 'Trở nên ít kích động hơn.' }
                ]
            },
            {
                title: 'Đặt tân ngữ đúng vị trí',
                instruction: 'Viết lại câu sao cho object đứng đúng chỗ với phrasal verb.',
                questions: [
                    'She turned off the radio. / Viết lại để object đứng giữa verb và particle.',
                    'She turned off it. / Sửa câu này cho đúng.',
                    'He looked after the children. / Viết lại bằng đại từ object.',
                    'They put on their coats. / Viết lại với noun object đứng giữa.',
                    'She looked forward to the trip. / Viết lại với đại từ object.',
                    'He picked up the phone. / Viết lại bằng đại từ object.'
                ],
                answers: [
                    'She turned the radio off.',
                    'She turned it off.',
                    'He looked after them.',
                    'They put their coats on.',
                    'She looked forward to it.',
                    'He picked it up.'
                ],
                explanations: [
                    'Turn off là separable, nên noun object có thể đứng giữa hoặc sau particle.',
                    'Với pronoun object, không được để it sau particle: turn it off mới đúng.',
                    'Look after là inseparable, không tách object vào giữa được.',
                    'Put on là separable, noun object có thể chen vào giữa verb và particle.',
                    'Look forward to là three-word verb, phải giữ nguyên cụm look forward to it.',
                    'Pick up là separable, đại từ it phải đứng giữa.'
                ]
            },
            {
                title: 'Phân biệt nghĩa theo ngữ cảnh',
                instruction: 'Xác định nghĩa đúng của phrasal verb trong câu.',
                questions: [
                    'The plane took off at 8 a.m. / took off nghĩa là gì?',
                    'He took off his shoes before entering. / took off nghĩa là gì?',
                    'I work out three times a week. / work out nghĩa là gì?',
                    'We worked out the answer together. / work out nghĩa là gì?',
                    'She is putting on a coat. / put on nghĩa là gì?',
                    'He has put on weight recently. / put on nghĩa là gì?',
                    'I cannot put up with this noise. / put up with nghĩa là gì?',
                    'I am looking forward to the trip. / look forward to nghĩa là gì?'
                ],
                answers: [
                    'cất cánh',
                    'cởi ra',
                    'tập thể dục',
                    'giải ra / tìm ra',
                    'mặc vào / khoác vào',
                    'tăng lên / tăng cân',
                    'chịu đựng',
                    'mong đợi / háo hức chờ'
                ],
                explanations: [
                    'Take off có thể là cất cánh khi nói về máy bay.',
                    'Take off cũng có nghĩa là cởi quần áo hoặc giày dép.',
                    'Work out thường là tập thể dục hoặc rèn luyện.',
                    'Work out có thể nghĩa là giải quyết, tìm ra đáp án.',
                    'Put on = mặc vào, đội vào, đeo vào.',
                    'Put on weight = tăng cân.',
                    'Put up with = chịu đựng điều khó chịu.',
                    'Look forward to = mong chờ điều gì đó.'
                ]
            }
        ],
        checkpoint: [
            'Học phrasal verb theo cụm, không dịch từng từ riêng lẻ.',
            'Phân biệt separable, inseparable và three-word verbs trước khi làm bài.',
            'Nhớ rằng một phrasal verb có thể có nhiều nghĩa tùy ngữ cảnh.'
        ]
    },
    'verbs-overview': {
        source: 'Tổng hợp theo phần VERBS trong sách Mai Lan Hương.',
        sections: [
            {
                title: 'Nhận diện loại động từ',
                instruction: 'Xác định động từ chính trong câu là transitive, intransitive hay linking.',
                questions: [
                    'The baby cried for nearly an hour.',
                    'The referee blew his whistle.',
                    'My father is a doctor.',
                    'The children slept early after the trip.',
                    'She sent me a postcard.',
                    'The clouds look black.',
                    'Nobody knew where the old man lived.',
                    'The committee elected him president.'
                ],
                answers: [
                    'intransitive',
                    'transitive',
                    'linking',
                    'intransitive',
                    'transitive',
                    'linking',
                    'transitive',
                    'transitive + object complement'
                ]
            }
        ],
        checkpoint: [
            'Phân biệt được transitive, intransitive và linking verbs trong câu cơ bản.',
            'Biết linking verbs thường đi với adjective hoặc complement chứ không phải adverb.',
            'Khi học động từ mới, kiểm tra luôn nó có cần object hay preposition đi kèm không.'
        ]
    },
    'articles-determiners': {
        source: 'Biên tập theo phần articles/determiners trong sách Mai Lan Hương.',
        sections: [
            {
                title: 'Điền a, an, the hoặc Ø',
                instruction: 'Chọn mạo từ hoặc để trống khi cần.',
                questions: [
                    "Jason's father bought him ___ bicycle that he had wanted for his birthday.",
                    'Rita is studying ___ English and ___ math this semester.',
                    'Please give me ___ cup of ___ coffee with ___ cream and ___ sugar.',
                    'We went to ___ school yesterday, but we waited at ___ school gate for our teacher.',
                    '___ earth moves around ___ sun.',
                    'She wants to buy ___ umbrella and ___ pair of gloves.',
                    'I need ___ information you mentioned yesterday.',
                    '___ books on that shelf belong to ___ university library.'
                ],
                answers: [
                    'the',
                    'Ø / Ø',
                    'a / Ø / Ø / Ø',
                    'Ø / the',
                    'The / the',
                    'an / a',
                    'the',
                    'The / the'
                ]
            }
        ],
        checkpoint: [
            'Phân biệt được a/an với the theo mức độ xác định của danh từ.',
            'Không thêm article vào school, bed, church, home trong các cụm cố định thông dụng.',
            'Biết khi nào dùng zero article với plural nouns và uncountable nouns ở nghĩa chung.'
        ]
    },
    'reducing-adverbial-clauses': {
        source: 'Mini practice cho phần reduction trong văn viết học thuật.',
        sections: [
            {
                title: 'Rút gọn mệnh đề trạng ngữ',
                instruction: 'Viết lại câu bằng cụm rút gọn phù hợp.',
                questions: [
                    'After she finished the draft, she emailed it to her tutor.',
                    'Because he was warned in advance, he avoided the mistake.',
                    'While I was waiting for the bus, I reviewed my notes.',
                    'After they had completed the survey, they analyzed the data.'
                ],
                answers: [
                    'After finishing the draft, she emailed it to her tutor.',
                    'Warned in advance, he avoided the mistake.',
                    'While waiting for the bus, I reviewed my notes.',
                    'Having completed the survey, they analyzed the data.'
                ]
            }
        ],
        checkpoint: [
            'Chỉ rút gọn khi hai mệnh đề có cùng chủ ngữ logic.',
            'Biết khi nào dùng V-ing, V3 và having + V3.',
            'Tránh dangling participles.'
        ]
    },
    'prepositional-phrases': {
        source: 'Bài luyện cụm giới từ cố định và sắc thái nghĩa.',
        sections: [
            {
                title: 'Chọn cụm đúng theo nghĩa',
                instruction: 'Điền cụm phù hợp: by mistake, on purpose, on time, in time, in the long run.',
                questions: [
                    'I took your notebook ___ and only noticed later.',
                    'She arrived just ___ to catch the last train.',
                    'He didn\'t delete the file ___; it was an accident.',
                    'The meeting started exactly ___ at 9:00.',
                    '___, investing in skills pays off.'
                ],
                answers: [
                    'by mistake',
                    'in time',
                    'on purpose',
                    'on time',
                    'In the long run'
                ]
            }
        ],
        checkpoint: [
            'Phân biệt được on time với in time.',
            'Học cụm giới từ như một khối nghĩa hoàn chỉnh.',
            'Nhận ra cụm cố định hữu ích cho cả speaking và writing.'
        ]
    },
    'academic-style-grammar': {
        source: 'Bài luyện nominalization và gerund subject cho văn học thuật.',
        sections: [
            {
                title: 'Chọn cách viết học thuật hơn',
                instruction: 'So sánh hai cách diễn đạt và chọn cách phù hợp hơn cho essay/report.',
                questions: [
                    'The government decided to reform the system. / The government\'s decision to reform the system...',
                    'People recycle more. / Recycling more reduces waste.',
                    'They analyzed the data carefully. / A careful analysis of the data...'
                ],
                answers: [
                    'Dạng nominalization phù hợp hơn khi cần giọng văn học thuật và khách quan.',
                    'Gerund subject phù hợp hơn để nêu luận điểm chung.',
                    'Nominalization phù hợp hơn cho report, nhưng tránh lạm dụng nếu câu trở nên nặng.'
                ]
            }
        ],
        checkpoint: [
            'Biết dùng gerund phrase làm chủ ngữ để nêu luận điểm.',
            'Biết khi nào danh hóa giúp câu học thuật hơn.',
            'Không danh hóa quá mức làm câu khó đọc.'
        ]
    },
    'grammar-registers': {
        source: 'Bài luyện phân biệt ngữ pháp theo register và variety.',
        sections: [
            {
                title: 'BrE / AmE / formal / informal',
                instruction: 'Ghép cách diễn đạt với ngữ cảnh phù hợp nhất.',
                questions: [
                    'Have you got a minute? / Do you have a minute?',
                    'put off the meeting / postpone the meeting',
                    'I\'ve just eaten. / I just ate.',
                    'kids / children'
                ],
                answers: [
                    'BrE spoken / neutral AmE',
                    'neutral spoken / formal writing',
                    'BrE common / AmE common',
                    'informal / more formal-neutral'
                ]
            }
        ],
        checkpoint: [
            'Biết không phải cấu trúc nào đúng cũng hợp mọi ngữ cảnh.',
            'Nhận ra khác biệt BrE và AmE ở một số cấu trúc trọng điểm.',
            'Biết đổi từ informal sang formal khi viết essay hoặc email công việc.'
        ]
    },
    'pronouns-possessives': {
        source: 'Tổng hợp theo phần pronouns và possessive forms trong sách.',
        sections: [
            {
                title: 'Chọn đại từ hoặc dạng sở hữu đúng',
                instruction: 'Điền từ phù hợp.',
                questions: [
                    'Anna has a laptop. ___ uses it every day.',
                    'I invited Minh and Lan. I called ___ last night.',
                    'This is not my notebook. It is ___.',
                    'We did the project by ___.',
                    'The manager asked Hoa and ___ to stay after the meeting.',
                    'All students should bring ___ ID cards to the exam room.',
                    'Is that seat ___ or theirs?',
                    'I hurt ___ while moving the table.'
                ],
                answers: [
                    'She',
                    'them',
                    'mine',
                    'ourselves',
                    'me',
                    'their',
                    'yours',
                    'myself'
                ]
            }
        ],
        checkpoint: [
            'Phân biệt được subject pronouns, object pronouns, possessive determiners và possessive pronouns.',
            'Không nhầm my với mine, their với theirs, our với ours.',
            'Dùng reflexive pronouns đúng khi chủ ngữ và tân ngữ là cùng một đối tượng.'
        ]
    },
    'adjectives-adverbs': {
        source: 'Biên tập từ phần adjectives, adverbs và position trong sách.',
        sections: [
            {
                title: 'Chọn adjective hay adverb',
                instruction: 'Điền dạng đúng của từ trong ngoặc.',
                questions: [
                    'She is a very ___ driver. (careful)',
                    'She drives very ___. (careful)',
                    'The soup tastes ___. (good)',
                    'We arrived ___ because the road was empty. (early)',
                    'He is a ___ learner and asks smart questions. (quick)',
                    'They worked ___ to meet the deadline. (hard)',
                    'The instructions were ___ clear for a first draft. (surprising)',
                    'She looked ___ when she heard the result. (angry)'
                ],
                answers: [
                    'careful',
                    'carefully',
                    'good',
                    'early',
                    'quick',
                    'hard',
                    'surprisingly',
                    'angry'
                ]
            }
        ],
        checkpoint: [
            'Biết khi nào cần adjective sau linking verbs như be, seem, feel, look.',
            'Không nhầm hard với hardly, late với lately.',
            'Nhận ra trật tự cơ bản của nhiều adjectives khi đứng trước noun.'
        ]
    },
    conjunctions: {
        source: 'Bài luyện từ phần conjunctions và linking ideas trong sách.',
        sections: [
            {
                title: 'Chọn liên từ đúng',
                instruction: 'Điền although, because, so, unless, while, however, since hoặc whereas.',
                questions: [
                    '___ he was tired, he still finished the report.',
                    'We left early ___ the road was getting flooded.',
                    'The road was flooded, ___ we took a different route.',
                    'You cannot enter the lab ___ you wear protective glasses.',
                    'She was preparing the slides ___ I checked the figures.',
                    'The first design was elegant; ___, it was too expensive.',
                    '___ the server was down, the team worked offline for an hour.',
                    'Minh prefers short reports, ___ Lan likes very detailed summaries.'
                ],
                answers: [
                    'Although',
                    'because',
                    'so',
                    'unless',
                    'while',
                    'however',
                    'Since',
                    'whereas'
                ]
            }
        ],
        checkpoint: [
            'Phân biệt được coordinating conjunctions và subordinating conjunctions.',
            'Không ghép although với but trong cùng một cấu trúc chuẩn.',
            'Biết chọn liên từ theo đúng quan hệ: thêm ý, đối lập, nguyên nhân, kết quả, điều kiện.'
        ]
    },
    prepositions: {
        source: 'Tổng hợp từ phần prepositions và các collocations trong sách.',
        sections: [
            {
                title: 'Điền giới từ đúng',
                instruction: 'Điền at, in, on, to, for hoặc about.',
                questions: [
                    'The meeting starts ___ 8:30 a.m.',
                    'I am interested ___ environmental design.',
                    'Please do not talk ___ your phone during the lecture.',
                    'We will wait here ___ you until the rain stops.',
                    'The train arrived ___ the station ten minutes late.',
                    'She apologized ___ the delay in replying.',
                    'Our success depends ___ good planning.',
                    'The coach divided the class ___ three small groups.'
                ],
                answers: [
                    'at',
                    'in',
                    'on',
                    'for',
                    'at',
                    'for',
                    'on',
                    'into'
                ]
            }
        ],
        checkpoint: [
            'Học giới từ theo cụm thay vì học từng từ riêng rẽ.',
            'Phân biệt được in/on/at cho time và place.',
            'Nhận ra các động từ không cần about như discuss, enter, marry.'
        ]
    },
    'gerunds-infinitives': {
        source: 'Biên tập theo các nhóm verb patterns trong sách.',
        sections: [
            {
                title: 'Chọn V-ing hoặc to V',
                instruction: 'Điền dạng đúng của động từ trong ngoặc.',
                questions: [
                    'She enjoys (read) before bed.',
                    'We decided (leave) early to avoid the storm.',
                    'He stopped (smoke) because the room was full of children.',
                    'Please remember (lock) the back door tonight.',
                    'The guide suggested (take) a taxi after dark.',
                    'I hope (finish) this course by August.',
                    'He admitted (break) the glass panel.',
                    'They agreed (help) us with the redesign.'
                ],
                answers: [
                    'reading',
                    'to leave',
                    'smoking',
                    'to lock',
                    'taking',
                    'to finish',
                    'breaking',
                    'to help'
                ]
            }
        ],
        checkpoint: [
            'Nắm được các nhóm verb + V-ing, verb + to V và verb + object + to V.',
            'Biết các cặp đổi nghĩa như stop doing / stop to do, remember doing / remember to do.',
            'Sau prepositions phải quay về V-ing.'
        ]
    },
    'countable-uncountable': {
        source: 'Bài ngắn theo phần countable/uncountable nouns trong sách.',
        sections: [
            {
                title: 'Chọn danh từ hoặc lượng từ đúng',
                instruction: 'Điền từ/cụm từ thích hợp.',
                questions: [
                    'We need ___ information before making a decision.',
                    'There are too ___ chairs in this room.',
                    'She gave me ___ that changed my career.',
                    'How ___ luggage are you taking with you?',
                    'The lab bought three new ___ last month. (equipment)',
                    'Can you buy ___ on your way home? (bread)',
                    'Much ___ has been done on this topic. (research)',
                    'There are only a few ___ of water left in the fridge. (bottle)'
                ],
                answers: [
                    'some',
                    'many',
                    'a piece of advice',
                    'much',
                    'pieces of equipment',
                    'a loaf of bread',
                    'research',
                    'bottles'
                ]
            }
        ],
        checkpoint: [
            'Biết danh từ nào không đếm được và không đi trực tiếp với a/an.',
            'Dùng đúng piece/item/loaf/bottle khi cần đơn vị hóa uncountable nouns.',
            'Không kéo sai quantifier từ noun type.'
        ]
    },
    quantifiers: {
        source: 'Biên tập theo phần quantifiers và noun types trong sách.',
        sections: [
            {
                title: 'Chọn lượng từ đúng',
                instruction: 'Điền few, a few, little, a little, many hoặc much.',
                questions: [
                    'We have very ___ time, so let us begin now.',
                    'There are only ___ apples left in the basket.',
                    'A good coach needs ___ patience.',
                    'I still need ___ more minutes to finish this.',
                    '___ people understood the technical note, so we rewrote it.',
                    'Add ___ sugar if the sauce tastes too sour.',
                    'The report lists ___ reasons for the delay.',
                    'There is too ___ noise in this room to concentrate.'
                ],
                answers: [
                    'little',
                    'a few',
                    'much',
                    'a few',
                    'Few',
                    'a little',
                    'many',
                    'much'
                ]
            }
        ],
        checkpoint: [
            'Phân biệt được little với a little, few với a few theo sắc thái.',
            'Biết many đi với countable nouns còn much đi với uncountable nouns.',
            'Khi thấy quantifier, phải kiểm tra lại noun type ngay sau nó.'
        ]
    },
    'nouns-plurals': {
        source: 'Biên tập từ phần noun forms, plural nouns và singular nouns trong sách.',
        sections: [
            {
                title: 'Đổi sang dạng đúng',
                instruction: 'Điền dạng số ít/số nhiều hoặc động từ phù hợp.',
                questions: [
                    'One child, two ___.',
                    'One tooth, several ___.',
                    'That pair of scissors ___ on the desk. (be)',
                    'The news ___ surprising. (be)',
                    'One man, two ___.',
                    'One mouse, a group of ___.',
                    'The police ___ investigating the case. (be)',
                    'Several ___ were interviewed for the role. (woman)'
                ],
                answers: [
                    'children',
                    'teeth',
                    'is',
                    'is',
                    'men',
                    'mice',
                    'are',
                    'women'
                ]
            }
        ],
        checkpoint: [
            'Học thuộc irregular plurals thay vì cố suy bằng quy tắc.',
            'Biết các danh từ hình thức số nhiều nhưng ý nghĩa/sự hòa hợp có thể đặc biệt.',
            'Kiểm tra lại subject-verb agreement sau khi đổi singular/plural.'
        ]
    },
    numerals: {
        source: 'Bài luyện ngắn theo phần numerals trong sách.',
        sections: [
            {
                title: 'Dùng số đúng trong câu',
                instruction: 'Điền từ hoặc cụm từ phù hợp.',
                questions: [
                    'We need exactly two ___ volunteers for the event. (hundred / hundreds of)',
                    'This is the ___ time I have visited Hue. (three)',
                    'More than 35 ___ of the class chose the design track.',
                    'It was a ___-day workshop, so everyone stayed overnight. (two)',
                    'The meeting is on the ___ of May. (21)',
                    'The museum welcomed three ___ visitors last month. (thousand / thousands of)',
                    '___ of the students preferred the new schedule. (2/3)',
                    'Read the ___ chapter before doing the exercise. (five)'
                ],
                answers: [
                    'hundred',
                    'third',
                    'percent',
                    'two',
                    'twenty-first',
                    'thousand',
                    'Two thirds',
                    'fifth'
                ]
            }
        ],
        checkpoint: [
            'Phân biệt two hundred với hundreds of.',
            'Nắm được ordinal numbers bất quy tắc như first, second, third.',
            'Biết dùng percent, fractions và day/month formats đúng ngữ cảnh.'
        ]
    },
    'word-formation': {
        source: 'Bộ 100 câu word form mở rộng theo các mô thức thường gặp trong sách.',
        sections: [
            {
                title: '1. Từ gốc và từ loại cơ bản',
                instruction: 'Điền dạng đúng của từ trong ngoặc để hoàn thành câu.',
                items: [
                    {
                        prompt: `The plan was a complete ___. (fail)<br><em>Nghĩa: Kế hoạch đó là một thất bại hoàn toàn.</em>`,
                        answer: `failure`,
                        explanation: `Fail là động từ, failure là danh từ chỉ kết quả thất bại.`
                    },
                    {
                        prompt: `She is very ___. (care)<br><em>Nghĩa: Cô ấy rất cẩn thận.</em>`,
                        answer: `careful`,
                        explanation: `Sau be thường cần tính từ, nên dùng careful.`
                    },
                    {
                        prompt: `He spoke so ___. (care)<br><em>Nghĩa: Anh ấy nói rất cẩn thận.</em>`,
                        answer: `carefully`,
                        explanation: `Động từ spoke cần trạng từ bổ nghĩa, nên dùng carefully.`
                    },
                    {
                        prompt: `The design team is very ___. (create)<br><em>Nghĩa: Nhóm thiết kế rất sáng tạo.</em>`,
                        answer: `creative`,
                        explanation: `Create là động từ, creative là tính từ miêu tả người hoặc vật.`
                    },
                    {
                        prompt: `The new system is more ___. (effect)<br><em>Nghĩa: Hệ thống mới hiệu quả hơn.</em>`,
                        answer: `effective`,
                        explanation: `Đuôi -ive tạo tính từ, effective nghĩa là có hiệu quả.`
                    },
                    {
                        prompt: `The city has seen rapid ___. (develop)<br><em>Nghĩa: Thành phố đã phát triển nhanh chóng.</em>`,
                        answer: `development`,
                        explanation: `Develop là động từ, development là danh từ chỉ quá trình.`
                    },
                    {
                        prompt: `Her speech was very ___. (persuade)<br><em>Nghĩa: Bài phát biểu của cô ấy rất thuyết phục.</em>`,
                        answer: `persuasive`,
                        explanation: `Persuasive là tính từ dùng để tả lời nói hoặc hành động có sức thuyết phục.`
                    },
                    {
                        prompt: `The board will make a final ___. (decide)<br><em>Nghĩa: Ban quản trị sẽ đưa ra quyết định cuối cùng.</em>`,
                        answer: `decision`,
                        explanation: `Sau make a cần danh từ, nên dùng decision.`
                    },
                    {
                        prompt: `This guide is especially ___. (use)<br><em>Nghĩa: Hướng dẫn này đặc biệt hữu ích.</em>`,
                        answer: `useful`,
                        explanation: `Use + -ful tạo tính từ useful.`
                    },
                    {
                        prompt: `Their work led to great ___. (succeed)<br><em>Nghĩa: Công việc của họ dẫn tới thành công lớn.</em>`,
                        answer: `success`,
                        explanation: `Succeed là động từ, success là danh từ.`
                    },
                    {
                        prompt: `The weather is ___. (danger)<br><em>Nghĩa: Thời tiết nguy hiểm.</em>`,
                        answer: `dangerous`,
                        explanation: `Đuôi -ous tạo tính từ từ danh từ danger.`
                    },
                    {
                        prompt: `She was very ___. (help)<br><em>Nghĩa: Cô ấy rất hữu ích.</em>`,
                        answer: `helpful`,
                        explanation: `Help + -ful tạo tính từ helpful.`
                    },
                    {
                        prompt: `That is a very ___. (beauty)<br><em>Nghĩa: Đó là một nơi rất đẹp.</em>`,
                        answer: `beautiful`,
                        explanation: `Beauty là danh từ, beautiful là tính từ.`
                    },
                    {
                        prompt: `This is a __ culture. (nation)<br><em>Nghĩa: Đây là một nền văn hóa quốc gia.</em>`,
                        answer: `national`,
                        explanation: `Nation + -al tạo tính từ national.`
                    },
                    {
                        prompt: `He and his sister have a strong ___. (friend)<br><em>Nghĩa: Anh ấy và em gái có một tình bạn bền chặt.</em>`,
                        answer: `friendship`,
                        explanation: `Friend + -ship tạo danh từ friendship.`
                    },
                    {
                        prompt: `The workers showed great ___. (act)<br><em>Nghĩa: Những công nhân thể hiện sự chủ động lớn.</em>`,
                        answer: `activity`,
                        explanation: `Active + -ity tạo danh từ activity; câu này cần danh từ.`
                    },
                    {
                        prompt: `The report gave useful ___. (inform)<br><em>Nghĩa: Báo cáo cung cấp thông tin hữu ích.</em>`,
                        answer: `information`,
                        explanation: `Inform là động từ, information là danh từ không đếm được.`
                    },
                    {
                        prompt: `He is a very __ person. (logic)<br><em>Nghĩa: Anh ấy là người rất logic.</em>`,
                        answer: `logical`,
                        explanation: `Logic + -al tạo tính từ logical.`
                    },
                    {
                        prompt: `The new chair is very ___. (comfort)<br><em>Nghĩa: Chiếc ghế mới rất thoải mái.</em>`,
                        answer: `comfortable`,
                        explanation: `Comfort + -able tạo tính từ comfortable.`
                    },
                    {
                        prompt: `The company wants to stay ___. (power)<br><em>Nghĩa: Công ty muốn duy trì sức mạnh.</em>`,
                        answer: `powerful`,
                        explanation: `Power + -ful tạo tính từ powerful.`
                    }
                ]
            },
            {
                title: '2. Tiền tố và nghĩa phủ định',
                instruction: 'Điền từ có tiền tố phù hợp để hoàn thành câu.',
                items: [
                    {
                        prompt: `This rule is ___. (regular)<br><em>Nghĩa: Quy tắc này không đều đặn.</em>`,
                        answer: `irregular`,
                        explanation: `Tiền tố ir- tạo nghĩa phủ định của regular.`
                    },
                    {
                        prompt: `That action was ___. (legal)<br><em>Nghĩa: Hành động đó là bất hợp pháp.</em>`,
                        answer: `illegal`,
                        explanation: `Il- là dạng phủ định của legal.`
                    },
                    {
                        prompt: `It was very __ to interrupt them. (polite)<br><em>Nghĩa: Ngắt lời họ là rất bất lịch sự.</em>`,
                        answer: `impolite`,
                        explanation: `Im- thường đứng trước p/b/m để tạo nghĩa phủ định.`
                    },
                    {
                        prompt: `I ___ what he said. (believe)<br><em>Nghĩa: Tôi không tin điều anh ấy nói.</em>`,
                        answer: `disbelieve`,
                        explanation: `Dis- tạo nghĩa trái ngược hoặc phủ định.`
                    },
                    {
                        prompt: `Do not ___ with me on this point. (agree)<br><em>Nghĩa: Đừng bất đồng với tôi về điểm này.</em>`,
                        answer: `disagree`,
                        explanation: `Disagree là động từ phủ định của agree.`
                    },
                    {
                        prompt: `The thief tried to ___ from the police. (appear)<br><em>Nghĩa: Kẻ trộm cố biến mất khỏi cảnh sát.</em>`,
                        answer: `disappear`,
                        explanation: `Dis- mang nghĩa biến mất hoặc ngược lại với appear.`
                    },
                    {
                        prompt: `He may ___ the meaning of the question. (understand)<br><em>Nghĩa: Anh ấy có thể hiểu nhầm nghĩa của câu hỏi.</em>`,
                        answer: `misunderstand`,
                        explanation: `Mis- diễn tả hiểu sai hoặc làm sai.`
                    },
                    {
                        prompt: `Please ___ the box before moving it. (pack)<br><em>Nghĩa: Hãy mở thùng ra trước khi di chuyển nó.</em>`,
                        answer: `unpack`,
                        explanation: `Un- có nghĩa đảo ngược hành động.`
                    },
                    {
                        prompt: `You need to ___ the cable first. (connect)<br><em>Nghĩa: Bạn cần ngắt kết nối dây cáp trước.</em>`,
                        answer: `disconnect`,
                        explanation: `Dis- tạo nghĩa ngắt hoặc tách ra.`
                    },
                    {
                        prompt: `We will ___ the document tomorrow. (order)<br><em>Nghĩa: Chúng tôi sẽ sắp xếp lại tài liệu vào ngày mai.</em>`,
                        answer: `reorder`,
                        explanation: `Re- nghĩa là làm lại hoặc lại một lần nữa.`
                    },
                    {
                        prompt: `The company should not ___ the report data. (use)<br><em>Nghĩa: Công ty không nên dùng sai dữ liệu của báo cáo.</em>`,
                        answer: `misuse`,
                        explanation: `Mis- diễn tả dùng sai hoặc lạm dụng.`
                    },
                    {
                        prompt: `Do not ___ the facts. (trust)<br><em>Nghĩa: Đừng mất lòng tin vào sự thật.</em>`,
                        answer: `distrust`,
                        explanation: `Dis- tạo nghĩa không tin hoặc thiếu tin tưởng.`
                    },
                    {
                        prompt: `The shirt is too small; it is ___. (fit)<br><em>Nghĩa: Chiếc áo quá nhỏ, nó không vừa.</em>`,
                        answer: `unfit`,
                        explanation: `Un- tạo nghĩa không phù hợp hoặc không vừa.`
                    },
                    {
                        prompt: `The room was __ after the rain. (comfortable)<br><em>Nghĩa: Căn phòng trở nên không thoải mái sau cơn mưa.</em>`,
                        answer: `uncomfortable`,
                        explanation: `Un- làm tính từ mang nghĩa trái ngược.`
                    },
                    {
                        prompt: `The answer is ___. (possible)<br><em>Nghĩa: Câu trả lời là không thể.</em>`,
                        answer: `impossible`,
                        explanation: `Im- là tiền tố phủ định của possible.`
                    },
                    {
                        prompt: `This task is ___. (complete)<br><em>Nghĩa: Nhiệm vụ này chưa hoàn chỉnh.</em>`,
                        answer: `incomplete`,
                        explanation: `In- tạo nghĩa chưa đầy đủ hoặc không hoàn toàn.`
                    },
                    {
                        prompt: `He felt __ after the mistake. (responsible)<br><em>Nghĩa: Anh ấy cảm thấy vô trách nhiệm sau lỗi đó.</em>`,
                        answer: `irresponsible`,
                        explanation: `Ir- là dạng phủ định của responsible.`
                    },
                    {
                        prompt: `The child was too __ for the role. (mature)<br><em>Nghĩa: Đứa trẻ còn quá non nớt cho vai diễn đó.</em>`,
                        answer: `immature`,
                        explanation: `Im- tạo nghĩa chưa trưởng thành.`
                    },
                    {
                        prompt: `This is an __ email. (formal)<br><em>Nghĩa: Đây là một email không trang trọng.</em>`,
                        answer: `informal`,
                        explanation: `In- tạo nghĩa trái ngược của formal.`
                    },
                    {
                        prompt: `The mountain is __ from here. (visible)<br><em>Nghĩa: Ngọn núi không nhìn thấy từ đây.</em>`,
                        answer: `invisible`,
                        explanation: `In- tạo nghĩa không nhìn thấy được.`
                    }
                ]
            },
            {
                title: '3. Hậu tố tạo danh từ và tính từ',
                instruction: 'Dùng đúng hậu tố để tạo danh từ hoặc tính từ trong câu.',
                items: [
                    {
                        prompt: `The government announced a new ___. (organize)<br><em>Nghĩa: Chính phủ công bố một cuộc tổ chức mới.</em>`,
                        answer: `organization`,
                        explanation: `-ation / -tion thường tạo danh từ từ động từ.`
                    },
                    {
                        prompt: `The train caused a lot of ___. (move)<br><em>Nghĩa: Chuyến tàu gây ra nhiều chuyển động.</em>`,
                        answer: `movement`,
                        explanation: `-ment thường tạo danh từ chỉ kết quả hoặc quá trình.`
                    },
                    {
                        prompt: `Her speech showed great ___. (happy)<br><em>Nghĩa: Bài phát biểu của cô ấy thể hiện niềm hạnh phúc lớn.</em>`,
                        answer: `happiness`,
                        explanation: `-ness tạo danh từ từ tính từ.`
                    },
                    {
                        prompt: `The school is full of ___. (active)<br><em>Nghĩa: Ngôi trường đầy các hoạt động.</em>`,
                        answer: `activity`,
                        explanation: `-ity tạo danh từ từ tính từ hoặc gốc từ liên quan.`
                    },
                    {
                        prompt: `We need more ___. (inform)<br><em>Nghĩa: Chúng ta cần thêm thông tin.</em>`,
                        answer: `information`,
                        explanation: `Information là danh từ không đếm được rất thường gặp.`
                    },
                    {
                        prompt: `The scientist explained the ___. (create)<br><em>Nghĩa: Nhà khoa học giải thích sự sáng tạo.</em>`,
                        answer: `creation`,
                        explanation: `-tion tạo danh từ chỉ hành động hoặc kết quả.`
                    },
                    {
                        prompt: `His choice was based on ___. (educate)<br><em>Nghĩa: Quyết định của anh ấy dựa trên giáo dục.</em>`,
                        answer: `education`,
                        explanation: `-ation tạo danh từ như education.`
                    },
                    {
                        prompt: `She showed great ___. (kind)<br><em>Nghĩa: Cô ấy thể hiện lòng tốt lớn.</em>`,
                        answer: `kindness`,
                        explanation: `-ness tạo danh từ từ tính từ kind.`
                    },
                    {
                        prompt: `This tool has great ___. (use)<br><em>Nghĩa: Công cụ này rất hữu ích.</em>`,
                        answer: `usefulness`,
                        explanation: `Use + -ful + -ness tạo danh từ usefulness.`
                    },
                    {
                        prompt: `He made a ___ mistake. (care)<br><em>Nghĩa: Anh ấy mắc một lỗi bất cẩn.</em>`,
                        answer: `careless`,
                        explanation: `-less tạo tính từ mang nghĩa thiếu đi.`
                    },
                    {
                        prompt: `The boy felt ___. (hope)<br><em>Nghĩa: Cậu bé cảm thấy tuyệt vọng.</em>`,
                        answer: `hopeless`,
                        explanation: `Hope + -less tạo tính từ hopeless.`
                    },
                    {
                        prompt: `The team looked ___. (power)<br><em>Nghĩa: Đội trông yếu thế.</em>`,
                        answer: `powerless`,
                        explanation: `-less tạo nghĩa không có hoặc thiếu.`
                    },
                    {
                        prompt: `It was a very ___ afternoon. (peace)<br><em>Nghĩa: Đó là một buổi chiều rất yên bình.</em>`,
                        answer: `peaceful`,
                        explanation: `-ful tạo tính từ có nghĩa đầy hoặc mang tính chất đó.`
                    },
                    {
                        prompt: `That was a ___ story. (wonder)<br><em>Nghĩa: Đó là một câu chuyện tuyệt vời.</em>`,
                        answer: `wonderful`,
                        explanation: `Wonder + -ful tạo tính từ wonderful.`
                    },
                    {
                        prompt: `The road is ___. (danger)<br><em>Nghĩa: Con đường nguy hiểm.</em>`,
                        answer: `dangerous`,
                        explanation: `-ous thường tạo tính từ từ danh từ.`
                    },
                    {
                        prompt: `He is a very ___ actor. (fame)<br><em>Nghĩa: Anh ấy là một diễn viên rất nổi tiếng.</em>`,
                        answer: `famous`,
                        explanation: `Fame + -ous tạo tính từ famous.`
                    },
                    {
                        prompt: `That is a ___ suggestion. (reason)<br><em>Nghĩa: Đó là một gợi ý hợp lý.</em>`,
                        answer: `reasonable`,
                        explanation: `-able thường tạo tính từ chỉ khả năng hoặc mức độ phù hợp.`
                    },
                    {
                        prompt: `It was a ___ decision. (value)<br><em>Nghĩa: Đó là một quyết định có giá trị.</em>`,
                        answer: `valuable`,
                        explanation: `Value + -able tạo tính từ valuable.`
                    },
                    {
                        prompt: `She is in excellent ___. (health)<br><em>Nghĩa: Cô ấy đang có sức khỏe rất tốt.</em>`,
                        answer: `health`,
                        explanation: `Câu này cần danh từ sau in excellent.`
                    },
                    {
                        prompt: `He is very ___. (trust)<br><em>Nghĩa: Anh ấy rất đáng tin cậy.</em>`,
                        answer: `trustworthy`,
                        explanation: `-worthy tạo tính từ mang nghĩa đáng... / xứng đáng.`
                    }
                ]
            },
            {
                title: '4. Trạng từ và động từ phái sinh',
                instruction: 'Chọn đúng dạng trạng từ hoặc động từ được tạo từ từ gốc.',
                items: [
                    {
                        prompt: `She answered very ___. (careful)<br><em>Nghĩa: Cô ấy trả lời rất cẩn thận.</em>`,
                        answer: `carefully`,
                        explanation: `Adverb thường bổ nghĩa cho động từ.`
                    },
                    {
                        prompt: `He completed the task ___. (simple)<br><em>Nghĩa: Anh ấy hoàn thành nhiệm vụ một cách đơn giản.</em>`,
                        answer: `simply`,
                        explanation: `-ly là hậu tố trạng từ phổ biến.`
                    },
                    {
                        prompt: `The car moved ___. (quick)<br><em>Nghĩa: Chiếc xe di chuyển nhanh.</em>`,
                        answer: `quickly`,
                        explanation: `Quick là tính từ, quickly là trạng từ.`
                    },
                    {
                        prompt: `The rain fell ___. (heavy)<br><em>Nghĩa: Mưa rơi nặng hạt.</em>`,
                        answer: `heavily`,
                        explanation: `Heavily là trạng từ từ heavy.`
                    },
                    {
                        prompt: `She smiled ___. (happy)<br><em>Nghĩa: Cô ấy mỉm cười vui vẻ.</em>`,
                        answer: `happily`,
                        explanation: `Happy đổi sang trạng từ bằng -ly.`
                    },
                    {
                        prompt: `He won the race ___. (lucky)<br><em>Nghĩa: Anh ấy may mắn giành chiến thắng.</em>`,
                        answer: `luckily`,
                        explanation: `Luckily dùng để mở đầu hoặc bổ nghĩa cho mệnh đề.`
                    },
                    {
                        prompt: `___, the train arrived on time. (final)<br><em>Nghĩa: Cuối cùng, tàu cũng đến đúng giờ.</em>`,
                        answer: `Finally`,
                        explanation: `Finally dùng để chỉ kết thúc trình tự.`
                    },
                    {
                        prompt: `The children played ___. (noisy)<br><em>Nghĩa: Những đứa trẻ chơi rất ồn ào.</em>`,
                        answer: `noisily`,
                        explanation: `Noisy là tính từ, noisily là trạng từ.`
                    },
                    {
                        prompt: `The test was ___. (easy)<br><em>Nghĩa: Bài kiểm tra rất dễ.</em>`,
                        answer: `easy`,
                        explanation: `Sau be cần tính từ, nên dùng easy chứ không dùng easily.`
                    },
                    {
                        prompt: `He spoke ___. (bad)<br><em>Nghĩa: Anh ấy nói khá tệ.</em>`,
                        answer: `badly`,
                        explanation: `Badly là trạng từ của bad.`
                    },
                    {
                        prompt: `The engineer will ___ the old system. (modern)<br><em>Nghĩa: Kỹ sư sẽ hiện đại hóa hệ thống cũ.</em>`,
                        answer: `modernize`,
                        explanation: `-ize thường tạo động từ có nghĩa làm cho trở nên.`
                    },
                    {
                        prompt: `We need to ___ this paragraph. (simple)<br><em>Nghĩa: Chúng ta cần đơn giản hóa đoạn này.</em>`,
                        answer: `simplify`,
                        explanation: `-ify cũng tạo động từ nghĩa làm cho trở nên.`
                    },
                    {
                        prompt: `Please ___ the sentence for beginners. (deep)<br><em>Nghĩa: Hãy làm sâu hơn câu này cho người mới học.</em>`,
                        answer: `deepen`,
                        explanation: `-en thường tạo động từ từ tính từ.`
                    },
                    {
                        prompt: `We will ___ the road next year. (broad)<br><em>Nghĩa: Chúng ta sẽ mở rộng con đường vào năm sau.</em>`,
                        answer: `broaden`,
                        explanation: `Broaden là động từ từ broad.`
                    },
                    {
                        prompt: `The teacher will ___ the students. (weak)<br><em>Nghĩa: Giáo viên sẽ làm cho học sinh mạnh hơn.</em>`,
                        answer: `weaken`,
                        explanation: `Weaken là động từ trái nghĩa với strengthen.`
                    },
                    {
                        prompt: `You should ___ the pencil before writing. (sharp)<br><em>Nghĩa: Bạn nên làm sắc bút chì trước khi viết.</em>`,
                        answer: `sharpen`,
                        explanation: `-en tạo động từ chỉ làm cho trở nên.`
                    },
                    {
                        prompt: `The fertilizer can ___ the soil. (rich)<br><em>Nghĩa: Phân bón có thể làm đất màu mỡ hơn.</em>`,
                        answer: `enrich`,
                        explanation: `En- kết hợp với rich tạo động từ enrich.`
                    },
                    {
                        prompt: `The winter air will ___ the water. (hard)<br><em>Nghĩa: Không khí mùa đông sẽ làm nước cứng lại.</em>`,
                        answer: `harden`,
                        explanation: `-en là hậu tố tạo động từ.`
                    },
                    {
                        prompt: `We should ___ the rule before using it. (clear)<br><em>Nghĩa: Chúng ta nên làm rõ quy tắc trước khi dùng.</em>`,
                        answer: `clarify`,
                        explanation: `-ify tạo động từ nghĩa làm cho rõ hơn.`
                    },
                    {
                        prompt: `The water is going to ___ before it is used. (pure)<br><em>Nghĩa: Nước sẽ được lọc sạch trước khi dùng.</em>`,
                        answer: `purify`,
                        explanation: `-ify tạo động từ từ pure.`
                    }
                ]
            },
            {
                title: '5. Ghép từ và chuyển loại',
                instruction: 'Ghép các phần từ hoặc điền từ đúng theo ngữ cảnh.',
                items: [
                    {
                        prompt: `black + board = ?<br><em>Nghĩa: Ghép thành một từ.</em>`,
                        answer: `blackboard`,
                        explanation: `Compound word viết liền.`
                    },
                    {
                        prompt: `mother + in + law = ?<br><em>Nghĩa: Ghép thành một từ có gạch nối.</em>`,
                        answer: `mother-in-law`,
                        explanation: `Một số compound dùng dấu gạch nối.`
                    },
                    {
                        prompt: `high + school = ?<br><em>Nghĩa: Ghép thành cụm từ quen thuộc.</em>`,
                        answer: `high school`,
                        explanation: `Compound open viết tách nhưng là một khái niệm.`
                    },
                    {
                        prompt: `part + time = ?<br><em>Nghĩa: Ghép thành tính từ chỉ thời gian làm việc.</em>`,
                        answer: `part-time`,
                        explanation: `Dạng có gạch nối thường dùng trước danh từ.`
                    },
                    {
                        prompt: `one + way = ?<br><em>Nghĩa: Ghép thành tính từ chỉ một chiều.</em>`,
                        answer: `one-way`,
                        explanation: `Số + danh từ thường thành compound có gạch nối.`
                    },
                    {
                        prompt: `water + proof = ?<br><em>Nghĩa: Ghép thành tính từ chống nước.</em>`,
                        answer: `waterproof`,
                        explanation: `Closed compound viết liền.`
                    },
                    {
                        prompt: `news + paper = ?<br><em>Nghĩa: Ghép thành danh từ chỉ tờ báo.</em>`,
                        answer: `newspaper`,
                        explanation: `Hai danh từ ghép thành một từ mới.`
                    },
                    {
                        prompt: `class + room = ?<br><em>Nghĩa: Ghép thành danh từ chỉ phòng học.</em>`,
                        answer: `classroom`,
                        explanation: `Compound noun thường viết liền.`
                    },
                    {
                        prompt: `bed + room = ?<br><em>Nghĩa: Ghép thành danh từ chỉ phòng ngủ.</em>`,
                        answer: `bedroom`,
                        explanation: `Bed + room tạo bedroom.`
                    },
                    {
                        prompt: `home + work = ?<br><em>Nghĩa: Ghép thành danh từ chỉ bài tập về nhà.</em>`,
                        answer: `homework`,
                        explanation: `Homework là compound noun rất phổ biến.`
                    },
                    {
                        prompt: `child -> ___<br><em>Nghĩa: Điền danh từ chỉ thời thơ ấu.</em>`,
                        answer: `childhood`,
                        explanation: `-hood tạo danh từ chỉ giai đoạn hoặc trạng thái.`
                    },
                    {
                        prompt: `day -> ___<br><em>Nghĩa: Điền trạng từ nghĩa hằng ngày.</em>`,
                        answer: `daily`,
                        explanation: `-ly tạo trạng từ hoặc tính từ từ day.`
                    },
                    {
                        prompt: `week -> ___<br><em>Nghĩa: Điền trạng từ/tính từ nghĩa hằng tuần.</em>`,
                        answer: `weekly`,
                        explanation: `Weekly là dạng rất hay gặp trong lịch trình.`
                    },
                    {
                        prompt: `month -> ___<br><em>Nghĩa: Điền trạng từ/tính từ nghĩa hằng tháng.</em>`,
                        answer: `monthly`,
                        explanation: `Monthly là từ thông dụng trong lịch báo cáo.`
                    },
                    {
                        prompt: `year -> ___<br><em>Nghĩa: Điền trạng từ/tính từ nghĩa hằng năm.</em>`,
                        answer: `yearly`,
                        explanation: `Yearly là từ phái sinh rất phổ biến.`
                    },
                    {
                        prompt: `friend -> ___<br><em>Nghĩa: Điền tính từ nghĩa thân thiện.</em>`,
                        answer: `friendly`,
                        explanation: `-ly đôi khi tạo tính từ, không chỉ trạng từ.`
                    },
                    {
                        prompt: `science -> ___<br><em>Nghĩa: Điền tính từ nghĩa thuộc khoa học.</em>`,
                        answer: `scientific`,
                        explanation: `-ific tạo tính từ liên quan đến danh từ khoa học.`
                    },
                    {
                        prompt: `music -> ___<br><em>Nghĩa: Điền tính từ nghĩa thuộc âm nhạc.</em>`,
                        answer: `musical`,
                        explanation: `-al tạo tính từ rất thường gặp.`
                    },
                    {
                        prompt: `history -> ___<br><em>Nghĩa: Điền tính từ nghĩa thuộc lịch sử.</em>`,
                        answer: `historical`,
                        explanation: `-ical là hậu tố tính từ phổ biến.`
                    },
                    {
                        prompt: `nation -> ___<br><em>Nghĩa: Điền danh từ chỉ quốc tịch.</em>`,
                        answer: `nationality`,
                        explanation: `-ality tạo danh từ trừu tượng hoặc tên gọi người/thuộc tính.`
                    }
                ]
            }
        ],
        checkpoint: [
            'Đoán từ loại trước bằng vị trí trong câu rồi mới chọn họ từ.',
            'Nhận ra các suffix thường gặp của noun, verb, adjective, adverb.',
            'Phân biệt tiền tố phủ định với tiền tố mang nghĩa lặp lại, sai lệch hoặc đảo ngược.',
            'Nhớ rằng có từ vừa là tính từ vừa là trạng từ hoặc có nhiều nghĩa phái sinh khác nhau.',
            'Học theo họ từ và ngữ cảnh thay vì chỉ học một từ đơn lẻ.'
        ]
    },
    'near-future': {
        source: 'Biên tập theo phần Future Tenses và Near Future trong sách.',
        sections: [
            {
                title: 'Chọn cấu trúc tương lai phù hợp',
                instruction: 'Dùng will, be going to, present continuous hoặc present simple.',
                questions: [
                    'Look at those black clouds. It (rain).',
                    'We (meet) the design team at 9 a.m. tomorrow.',
                    'The train (leave) at 6:45 tomorrow morning.',
                    'I forgot my notebook at home. I (go) back and get it.',
                    'She has already booked the hotel. She (stay) near the river.',
                    'Do not call me at 8 tonight; I (take) the placement test then.',
                    'The conference (begin) on Monday, not Tuesday.',
                    'I am sure you (enjoy) the workshop.'
                ],
                answers: [
                    'is going to rain',
                    'are meeting',
                    'leaves',
                    'will go',
                    'is going to stay',
                    'am taking',
                    'begins',
                    'will enjoy'
                ],
                explanations: [
                    'Black clouds là dấu hiệu rõ ràng, nên dùng be going to để nói dự đoán có căn cứ.',
                    'Đã hẹn gặp vào 9 a.m. tomorrow, nên present continuous rất tự nhiên cho lịch đã xếp.',
                    'Train schedule là timetable cố định, nên present simple.',
                    'Forgot my notebook là quyết định tức thì, nên dùng will.',
                    'Already booked cho thấy kế hoạch đã có trước, nên be going to.',
                    'At 8 tonight là một lịch đã chốt, nên present continuous.',
                    'The conference begin on Monday là lịch cố định, nên present simple.',
                    'I am sure... là dự đoán / niềm tin, nên will.'
                ]
            }
        ],
        checkpoint: [
            'Phân biệt được will, be going to, present continuous và present simple khi nói về tương lai.',
            'Không dùng will cho mọi ý tương lai một cách máy móc.',
            'Nhận ra timetable khác với plan đã sắp xếp và quyết định tức thì.'
        ]
    },
    'passive-voice': {
        source: 'Bài luyện Passive Voice bao phủ be + V3, các thì phổ biến, câu hỏi, phủ định và by-agent.',
        sections: [
            {
                title: 'Nhận diện cấu trúc bị động',
                instruction: 'Đọc câu ví dụ và xác định kiểu bị động đang dùng.',
                items: [
                    {
                        prompt: '<strong>1. Present simple passive:</strong><br>The cake is made every morning.<br><em>Cái bánh được làm mỗi sáng.</em>',
                        answer: 'Present simple passive',
                        explanation: 'Be + V3 ở hiện tại đơn dùng cho hành động lặp lại hoặc sự thật chung.'
                    },
                    {
                        prompt: '<strong>2. Past simple passive:</strong><br>The window was broken last night.<br><em>Cửa sổ đã bị vỡ tối qua.</em>',
                        answer: 'Past simple passive',
                        explanation: 'Was/Were + V3 diễn tả việc bị động đã xảy ra và kết thúc trong quá khứ.'
                    },
                    {
                        prompt: '<strong>3. Present continuous passive:</strong><br>The room is being cleaned now.<br><em>Phòng đang được dọn bây giờ.</em>',
                        answer: 'Present continuous passive',
                        explanation: 'Be being + V3 dùng khi hành động bị động đang diễn ra ngay lúc nói.'
                    },
                    {
                        prompt: '<strong>4. Present perfect passive:</strong><br>The documents have been sent already.<br><em>Các tài liệu đã được gửi rồi.</em>',
                        answer: 'Present perfect passive',
                        explanation: 'Have/has been + V3 nhấn kết quả đã hoàn tất tính đến hiện tại.'
                    },
                    {
                        prompt: '<strong>5. Future passive:</strong><br>The bridge will be repaired tomorrow.<br><em>Cây cầu sẽ được sửa ngày mai.</em>',
                        answer: 'Future passive',
                        explanation: 'Will be + V3 là dạng bị động cho sự việc sẽ xảy ra trong tương lai.'
                    },
                    {
                        prompt: '<strong>6. Modal passive:</strong><br>The form should be signed today.<br><em>Mẫu đơn nên được ký hôm nay.</em>',
                        answer: 'Modal passive',
                        explanation: 'Modal + be + V3 là khung chuẩn cho bị động sau động từ khuyết thiếu.'
                    },
                    {
                        prompt: '<strong>7. Negative passive:</strong><br>The letters were not delivered.<br><em>Những lá thư đã không được giao.</em>',
                        answer: 'Negative passive',
                        explanation: 'Chỉ thêm not sau be, phần V3 giữ nguyên.'
                    },
                    {
                        prompt: '<strong>8. Passive question:</strong><br>Was the bridge built in 1990?<br><em>Cây cầu có được xây vào năm 1990 không?</em>',
                        answer: 'Passive question',
                        explanation: 'Đưa be lên đầu câu để tạo câu hỏi yes/no trong thể bị động.'
                    }
                ]
            },
            {
                title: 'Chuyển câu chủ động sang bị động',
                instruction: 'Viết lại câu sao cho tân ngữ của câu chủ động trở thành chủ ngữ ở câu bị động.',
                items: [
                    {
                        prompt: 'The chef bakes the bread every morning.',
                        answer: 'The bread is baked every morning by the chef.',
                        explanation: 'Hiện tại đơn chủ động đổi sang is/are + V3; by the chef là tác nhân.'
                    },
                    {
                        prompt: 'They built the bridge in 2010.',
                        answer: 'The bridge was built in 2010.',
                        explanation: 'Quá khứ đơn chủ động đổi sang was/were + V3.'
                    },
                    {
                        prompt: 'The company will launch the app next week.',
                        answer: 'The app will be launched next week.',
                        explanation: 'Tương lai đơn bị động dùng will be + V3.'
                    },
                    {
                        prompt: 'She has finished the report.',
                        answer: 'The report has been finished.',
                        explanation: 'Hiện tại hoàn thành bị động dùng has/have been + V3.'
                    },
                    {
                        prompt: 'The workers are repairing the road.',
                        answer: 'The road is being repaired.',
                        explanation: 'Hiện tại tiếp diễn bị động dùng is/are being + V3.'
                    },
                    {
                        prompt: 'People speak English in many countries.',
                        answer: 'English is spoken in many countries.',
                        explanation: 'Với câu mang nghĩa chung, chủ ngữ giả people thường bị lược khi đổi sang bị động.'
                    },
                    {
                        prompt: 'The manager gave me a letter.',
                        answer: 'I was given a letter by the manager.',
                        explanation: 'Câu có hai tân ngữ có thể đưa tân ngữ gián tiếp lên làm chủ ngữ bị động.'
                    },
                    {
                        prompt: 'They did not send the emails.',
                        answer: 'The emails were not sent.',
                        explanation: 'Phủ định bị động đặt not sau be.'
                    },
                    {
                        prompt: 'Someone should clean the classroom.',
                        answer: 'The classroom should be cleaned.',
                        explanation: 'Sau modal luôn là modal + be + V3.'
                    },
                    {
                        prompt: 'They are going to announce the results tomorrow.',
                        answer: 'The results are going to be announced tomorrow.',
                        explanation: 'Be going to cũng có thể chuyển sang bị động bằng be going to be + V3.'
                    }
                ]
            }
        ],
        checkpoint: [
            'Khung bị động cơ bản là be + V3; mỗi thì sẽ đổi phần be cho đúng thời gian.',
            'Nhìn xem câu chủ động có object nào để đẩy lên làm chủ ngữ bị động.',
            'Sau modal dùng modal + be + V3; sau be going to dùng be going to be + V3.'
        ]
    },
    'reported-speech': {
        source: 'Bài luyện Reported Speech bao phủ lùi thì, modal, câu hỏi/mệnh lệnh, đổi đại từ và các trường hợp không lùi thì.',
        sections: [
            {
                title: 'Lùi thì mở rộng trong câu kể',
                instruction: 'Đổi từ lời nói trực tiếp sang câu tường thuật phù hợp, bao gồm cả các thì hoàn thành và tương lai.',
                items: [
                    {
                        prompt: '<strong>1.</strong> "I am tired," she said.<br><em>Cô ấy nói: "Tôi mệt."</em>',
                        answer: 'She said (that) she was tired.',
                        explanation: 'Am/is/are thường lùi về was/were trong reported speech.'
                    },
                    {
                        prompt: '<strong>2.</strong> "I like coffee," he said.<br><em>Anh ấy nói: "Tôi thích cà phê."</em>',
                        answer: 'He said (that) he liked coffee.',
                        explanation: 'Present simple thường lùi sang past simple.'
                    },
                    {
                        prompt: '<strong>3.</strong> "I have finished the work," she said.<br><em>Cô ấy nói: "Tôi đã xong việc."</em>',
                        answer: 'She said (that) she had finished the work.',
                        explanation: 'Present perfect thường lùi sang past perfect.'
                    },
                    {
                        prompt: '<strong>4.</strong> "I have been waiting for an hour," she said.<br><em>Cô ấy nói: "Tôi đã đợi được một tiếng rồi."</em>',
                        answer: 'She said (that) she had been waiting for an hour.',
                        explanation: 'Present perfect continuous thường lùi sang past perfect continuous.'
                    },
                    {
                        prompt: '<strong>5.</strong> "I will call Anna tomorrow," Tom said.<br><em>Tom nói: "Tôi sẽ gọi Anna vào ngày mai."</em>',
                        answer: 'Tom said (that) he would call Anna the next day.',
                        explanation: 'Will đổi thành would; tomorrow đổi thành the next day.'
                    },
                    {
                        prompt: '<strong>6.</strong> "We are studying now," they said.<br><em>Họ nói: "Chúng tôi đang học bây giờ."</em>',
                        answer: 'They said (that) they were studying then.',
                        explanation: 'Now đổi thành then; am/is/are + V-ing lùi về was/were + V-ing.'
                    },
                    {
                        prompt: '<strong>7.</strong> "I saw her yesterday," he said.<br><em>Anh ấy nói: "Tôi đã gặp cô ấy hôm qua."</em>',
                        answer: 'He said (that) he had seen her the day before.',
                        explanation: 'Yesterday đổi thành the day before; past simple có thể lùi sang past perfect.'
                    },
                    {
                        prompt: '<strong>8.</strong> "The project will be completed next week," she said.<br><em>Cô ấy nói: "Dự án sẽ hoàn thành vào tuần sau."</em>',
                        answer: 'She said (that) the project would be completed the following week.',
                        explanation: 'Future passive trong reported speech thường lùi sang would be + V3.'
                    },
                    {
                        prompt: '<strong>9.</strong> "They will be traveling next week," he said.<br><em>Anh ấy nói: "Họ sẽ đang đi du lịch vào tuần tới."</em>',
                        answer: 'He said (that) they would be traveling the following week.',
                        explanation: 'Future continuous thường lùi thành would be + V-ing.'
                    },
                    {
                        prompt: '<strong>10.</strong> "She can swim," he said.<br><em>Anh ấy nói: "Cô ấy có thể bơi."</em>',
                        answer: 'He said (that) she could swim.',
                        explanation: 'Can thường đổi thành could trong câu tường thuật.'
                    },
                    {
                        prompt: '<strong>11.</strong> "It may rain tonight," they said.<br><em>Họ nói: "Tối nay có thể trời mưa."</em>',
                        answer: 'They said (that) it might rain that night.',
                        explanation: 'May thường đổi thành might; tonight đổi thành that night.'
                    },
                    {
                        prompt: '<strong>12.</strong> "You must wear a helmet," the officer said.<br><em>Viên cảnh sát nói: "Bạn phải đội mũ bảo hiểm."</em>',
                        answer: 'The officer said (that) I had to wear a helmet.',
                        explanation: 'Must về nghĩa bắt buộc thường đổi thành had to.'
                    }
                ]
            },
            {
                title: 'Câu hỏi, mệnh lệnh và lời nhờ',
                instruction: 'Xử lý yes/no questions, wh-questions, câu yêu cầu và các đại từ/trạng từ thay đổi theo ngữ cảnh.',
                items: [
                    {
                        prompt: '<strong>1.</strong> "Will you help me?" she asked.<br><em>Cô ấy hỏi: "Bạn sẽ giúp tôi chứ?"</em>',
                        answer: 'She asked if I would help her.',
                        explanation: 'Câu hỏi yes/no thường dùng if / whether trong câu tường thuật.'
                    },
                    {
                        prompt: '<strong>2.</strong> "Where do you live?" he asked.<br><em>Anh ấy hỏi: "Bạn sống ở đâu?"</em>',
                        answer: 'He asked where I lived.',
                        explanation: 'Wh-question giữ từ để hỏi và lùi thì của mệnh đề.'
                    },
                    {
                        prompt: '<strong>3.</strong> "Please open the window," the teacher said.<br><em>Giáo viên nói: "Làm ơn mở cửa sổ."</em>',
                        answer: 'The teacher told us to open the window.',
                        explanation: 'Lời yêu cầu thường đổi sang told/asked + object + to V.'
                    },
                    {
                        prompt: '<strong>4.</strong> "Don\'t be late," she said.<br><em>Cô ấy nói: "Đừng đến muộn."</em>',
                        answer: 'She told me not to be late.',
                        explanation: 'Câu phủ định mệnh lệnh dùng not to + V.'
                    },
                    {
                        prompt: '<strong>5.</strong> "Can I use your phone?" she asked.<br><em>Cô ấy hỏi: "Tôi có thể dùng điện thoại của bạn không?"</em>',
                        answer: 'She asked if she could use my phone.',
                        explanation: 'Can lùi thành could; your đổi theo người nghe / người được nhắc tới.'
                    },
                    {
                        prompt: '<strong>6.</strong> "What time does the train leave?" he asked.<br><em>Anh ấy hỏi: "Mấy giờ tàu chạy?"</em>',
                        answer: 'He asked what time the train left.',
                        explanation: 'Wh-question giữ cấu trúc câu tường thuật và đổi mốc thời gian theo ngữ cảnh.'
                    },
                    {
                        prompt: '<strong>7.</strong> "I must finish this today," he said.<br><em>Anh ấy nói: "Tôi phải xong việc này hôm nay."</em>',
                        answer: 'He said he had to finish that then.',
                        explanation: 'Must thường đổi thành had to; this/today đổi thành that/then.'
                    },
                    {
                        prompt: '<strong>8.</strong> "Bring me the report tomorrow," she said.<br><em>Cô ấy nói: "Mang cho tôi bản báo cáo vào ngày mai."</em>',
                        answer: 'She told me to bring her the report the next day.',
                        explanation: 'Mệnh lệnh khẳng định dùng told + object + to V; tomorrow đổi thành the next day.'
                    },
                    {
                        prompt: '<strong>9.</strong> "Could you pass me the salt?" he asked.<br><em>Anh ấy hỏi: "Bạn có thể đưa tôi lọ muối không?"</em>',
                        answer: 'He asked me to pass him the salt.',
                        explanation: 'Câu nhờ vả lịch sự có thể đổi sang asked + object + to V.'
                    },
                    {
                        prompt: '<strong>10.</strong> "I am here now," she said.<br><em>Cô ấy nói: "Tôi đang ở đây bây giờ."</em>',
                        answer: 'She said she was there then.',
                        explanation: 'Here đổi thành there; now đổi thành then.'
                    },
                    {
                        prompt: '<strong>11.</strong> "These files are mine," he said.<br><em>Anh ấy nói: "Những tập hồ sơ này là của tôi."</em>',
                        answer: 'He said those files were his.',
                        explanation: 'These đổi thành those; mine đổi thành his.'
                    },
                    {
                        prompt: '<strong>12.</strong> "I saw you here yesterday," she said.<br><em>Cô ấy nói: "Tôi đã thấy bạn ở đây hôm qua."</em>',
                        answer: 'She said she had seen me there the day before.',
                        explanation: 'Hôm qua và ở đây đều đổi theo góc nhìn mới: yesterday → the day before, here → there.'
                    }
                ]
            },
            {
                title: 'Trường hợp không lùi thì',
                instruction: 'Giữ hoặc xử lý theo ngữ cảnh khi câu nói là chân lý, lịch trình cố định hoặc reporting verb ở hiện tại.',
                items: [
                    {
                        prompt: '<strong>1.</strong> "The earth moves around the sun," the teacher said.<br><em>Cô giáo nói: "Trái đất quay quanh mặt trời."</em>',
                        answer: 'The teacher said (that) the earth moves around the sun.',
                        explanation: 'Chân lý khoa học vẫn đúng nên thường không lùi thì.'
                    },
                    {
                        prompt: '<strong>2.</strong> "The train leaves at 8," he said.<br><em>Anh ấy nói: "Tàu rời ga lúc 8 giờ."</em>',
                        answer: 'He said (that) the train leaves at 8.',
                        explanation: 'Lịch trình cố định/timetable có thể giữ present simple.'
                    },
                    {
                        prompt: '<strong>3.</strong> "I am a doctor," she said.<br><em>Cô ấy nói: "Tôi là bác sĩ."</em>',
                        answer: 'She said (that) she is a doctor.',
                        explanation: 'Nếu nghề nghiệp/trạng thái vẫn còn đúng, câu có thể giữ hiện tại.'
                    },
                    {
                        prompt: '<strong>4.</strong> "Water boils at 100 degrees Celsius," the student said.<br><em>Học sinh nói: "Nước sôi ở 100 độ C."</em>',
                        answer: 'The student said (that) water boils at 100 degrees Celsius.',
                        explanation: 'Định nghĩa/sự thật chung không cần lùi thì.'
                    },
                    {
                        prompt: '<strong>5.</strong> "I am busy," she says.<br><em>Cô ấy nói: "Tôi đang bận."</em>',
                        answer: 'She says she is busy.',
                        explanation: 'Khi reporting verb ở hiện tại (says), thường không backshift.'
                    },
                    {
                        prompt: '<strong>6.</strong> "I am a teacher," she said.<br><em>Cô ấy nói: "Tôi là giáo viên."</em>',
                        answer: 'She said (that) she is a teacher.',
                        explanation: 'Nghề nghiệp/trạng thái hiện tại còn đúng có thể giữ present simple.'
                    }
                ]
            }
        ],
        checkpoint: [
            'Theo dõi bốn lớp thay đổi: thì, đại từ, trạng từ chỉ thời gian/nơi chốn và từ chỉ định.',
            'Yes/no question thường dùng if hoặc whether; wh-question giữ từ để hỏi.',
            'Lời yêu cầu / mệnh lệnh thường dùng told/asked + object + to V hoặc not to V.',
            'Không lùi thì nếu câu là chân lý, định nghĩa, timetable cố định hoặc reporting verb ở hiện tại.'
        ]
    },
    'conditionals': {
        source: 'Bài luyện Conditionals bao phủ zero, first, second, third và các biến thể thường gặp.',
        sections: [
            {
                title: 'Nhận diện 4 loại câu điều kiện',
                instruction: 'Đọc câu, xác định loại câu điều kiện và lý do dùng thì đó.',
                items: [
                    {
                        prompt: '<strong>1. Zero conditional:</strong><br>If you heat ice, it melts.<br><em>Nếu bạn làm nóng đá, nó sẽ tan chảy.</em>',
                        answer: 'Zero conditional',
                        explanation: 'Cả hai mệnh đề dùng hiện tại đơn để nói quy luật / sự thật chung.'
                    },
                    {
                        prompt: '<strong>2. First conditional:</strong><br>If it rains, we will stay home.<br><em>Nếu trời mưa, chúng tôi sẽ ở nhà.</em>',
                        answer: 'First conditional',
                        explanation: 'If + hiện tại đơn, mệnh đề chính dùng will + V để nói khả năng thật ở tương lai.'
                    },
                    {
                        prompt: '<strong>3. Second conditional:</strong><br>If I had more time, I would learn Spanish.<br><em>Nếu tôi có nhiều thời gian hơn, tôi sẽ học tiếng Tây Ban Nha.</em>',
                        answer: 'Second conditional',
                        explanation: 'If + quá khứ đơn, would + V để nói giả định hiện tại / tương lai không thật.'
                    },
                    {
                        prompt: '<strong>4. Third conditional:</strong><br>If she had left earlier, she would have caught the train.<br><em>Nếu cô ấy đi sớm hơn, cô ấy đã kịp chuyến tàu.</em>',
                        answer: 'Third conditional',
                        explanation: 'If + had + V3, would have + V3 để nói điều trái với quá khứ.'
                    },
                    {
                        prompt: '<strong>5. Mixed conditional:</strong><br>If I had studied harder, I would have a better job now.<br><em>Nếu tôi học chăm hơn, bây giờ tôi đã có công việc tốt hơn.</em>',
                        answer: 'Mixed conditional',
                        explanation: 'Điều kiện ở quá khứ nhưng kết quả ở hiện tại.'
                    },
                    {
                        prompt: '<strong>6. Unless:</strong><br>We will not go unless you come with us.<br><em>Chúng tôi sẽ không đi nếu bạn không đi cùng.</em>',
                        answer: 'Unless = if not',
                        explanation: 'Unless diễn tả điều kiện phủ định, gần nghĩa với if...not.'
                    },
                    {
                        prompt: '<strong>7. Inversion:</strong><br>Had I known, I would have called you.<br><em>Nếu tôi biết thì tôi đã gọi cho bạn.</em>',
                        answer: 'Inverted third conditional',
                        explanation: 'Had I known = if I had known, dùng trong văn viết trang trọng.'
                    },
                    {
                        prompt: '<strong>8. Dạng đảo ngữ với were:</strong><br>Were I you, I would take the job.<br><em>Nếu tôi là bạn, tôi sẽ nhận công việc đó.</em>',
                        answer: 'Inverted second conditional',
                        explanation: 'Were I you = if I were you, thường dùng trong văn trang trọng.'
                    }
                ]
            }
        ],
        checkpoint: [
            'Zero: present + present.',
            'First: present + will.',
            'Second: past + would.',
            'Third: had + V3 + would have + V3.',
            'Unless thường tương đương if not nhưng không thay máy móc mọi trường hợp.'
        ]
    },
    'used-to': {
        source: 'Bài luyện Used to / Be used to / Get used to để phân biệt thói quen quá khứ và trạng thái quen dần.',
        sections: [
            {
                title: 'Phân biệt 3 cấu trúc chính',
                instruction: 'Đọc câu, xác định cấu trúc đúng và ý nghĩa của used.',
                items: [
                    {
                        prompt: '<strong>1. Thói quen trong quá khứ:</strong><br>I used to smoke.<br><em>Trước đây tôi từng hút thuốc.</em>',
                        answer: 'used to + V',
                        explanation: 'Diễn tả thói quen / trạng thái trong quá khứ nhưng bây giờ không còn.'
                    },
                    {
                        prompt: '<strong>2. Đã quen với việc gì:</strong><br>I am used to getting up early.<br><em>Tôi đã quen dậy sớm.</em>',
                        answer: 'be used to + V-ing / N',
                        explanation: 'Be used to nói về trạng thái đã quen, không phải thói quen quá khứ.'
                    },
                    {
                        prompt: '<strong>3. Đang làm quen:</strong><br>She is getting used to the cold weather.<br><em>Cô ấy đang dần quen với thời tiết lạnh.</em>',
                        answer: 'get used to + V-ing / N',
                        explanation: 'Get used to nhấn quá trình thích nghi / làm quen dần.'
                    },
                    {
                        prompt: '<strong>4. Phủ định used to:</strong><br>I did not use to like coffee.<br><em>Trước đây tôi không thích cà phê.</em>',
                        answer: 'did not use to + V',
                        explanation: 'Khi có did, động từ sau use dùng dạng nguyên mẫu use, không thêm d.'
                    },
                    {
                        prompt: '<strong>5. Câu hỏi used to:</strong><br>Did you use to live here?<br><em>Trước đây bạn có sống ở đây không?</em>',
                        answer: 'Did + subject + use to + V?',
                        explanation: 'Dạng hỏi dùng Did và use to, không phải used to sau did.'
                    },
                    {
                        prompt: '<strong>6. Phân biệt với would:</strong><br>Every summer, we would visit Grandma.<br><em>Mỗi mùa hè, chúng tôi thường đến thăm bà.</em>',
                        answer: 'would = thói quen lặp lại',
                        explanation: 'Would chỉ dùng cho hành động lặp lại trong quá khứ, không dùng cho trạng thái.'
                    },
                    {
                        prompt: '<strong>7. Không dùng would cho trạng thái:</strong><br>We used to live in Hue.<br><em>Chúng tôi từng sống ở Huế.</em>',
                        answer: 'used to + state',
                        explanation: 'Live là trạng thái trong quá khứ, nên dùng used to chứ không dùng would.'
                    },
                    {
                        prompt: '<strong>8. Be used to + danh từ:</strong><br>She is used to the noise.<br><em>Cô ấy đã quen với tiếng ồn.</em>',
                        answer: 'be used to + N',
                        explanation: 'Sau be used to có thể là danh từ hoặc V-ing; used là tính từ trong cấu trúc này.'
                    }
                ]
            }
        ],
        checkpoint: [
            'used to + V = thói quen / trạng thái quá khứ, nay không còn.',
            'be used to + N/V-ing = đã quen.',
            'get used to + N/V-ing = đang dần quen.',
            'Sau did phải dùng use, không dùng used.'
        ]
    },
    'present-perfect': {
        source: 'Biên tập từ các bài present perfect và past simple trong sách.',
        sections: [
            {
                title: 'Chia động từ đúng',
                instruction: 'Dùng Present Perfect hoặc Past Simple.',
                questions: [
                    'I (see) her before, but I (not meet) her last year.',
                    'Tom (never be) to Hanoi.',
                    'How long you (live) here?',
                    'She just (finish) the report.',
                    'We (know) each other since 2018.',
                    'I (not call) him yesterday.',
                    'They (already send) the files.',
                    'He (break) his leg, so he cannot play today.'
                ],
                answers: [
                    'have seen / did not meet',
                    'has never been',
                    'have you lived',
                    'has just finished',
                    'have known',
                    'did not call',
                    'have already sent',
                    'has broken'
                ]
            }
        ],
        checkpoint: [
            'Biết khi nào phải quay về past simple vì có mốc thời gian đã đóng.',
            'Dùng đúng since, for, just, already, yet, ever, never.',
            'Phân biệt được nhấn kết quả với nhấn thời điểm xảy ra.'
        ]
    },
    'sequence-of-tenses': {
        source: 'Biên tập theo nhóm bài Sequence of Tenses trong PDF.',
        sections: [
            {
                title: 'Phối hợp thì đúng',
                instruction: 'Chia động từ trong ngoặc.',
                questions: [
                    'She said that she (get) married soon.',
                    'He knew that I (come) the following week.',
                    'People have said that the sun (rise) in the East.',
                    'I did not know what time it (be), so I (turn) on the radio.',
                    'My teacher said that water (boil) at 100°C.',
                    'She told me that she (finish) the report before I arrived.',
                    'He says that he (look) for a job next week.',
                    'They believed that the police (capture) the thief soon.'
                ],
                answers: [
                    'would get married',
                    'would come',
                    'rises',
                    'was / turned',
                    'boils',
                    'had finished',
                    'will look',
                    'would capture'
                ]
            },
            {
                title: 'Phối hợp thì trong reported speech',
                instruction: 'Chia động từ theo mốc thời gian và quan hệ giữa các mệnh đề.',
                questions: [
                    'She said that she (be) tired.',
                    'The teacher explained that the earth (move) around the sun.',
                    'I knew that he (call) me when he arrived.',
                    'They realized that they (take) the wrong train.',
                    'He said that he (work) on the project since Monday.'
                ],
                answers: [
                    'was',
                    'moves',
                    'would call',
                    'had taken',
                    'had been working'
                ],
                explanations: [
                    'Mệnh đề tường thuật ở quá khứ nên be thường lùi thành was.',
                    'Chân lý hiển nhiên không lùi thì, nên dùng present simple.',
                    'Câu nói về hành động tương lai so với mốc quá khứ nên dùng would.',
                    'Hành động xảy ra trước một quá khứ khác nên dùng past perfect.',
                    'Hành động kéo dài trước một mốc quá khứ nên dùng past perfect continuous.'
                ]
            }
        ],
        checkpoint: [
            'Hiểu quy tắc backshift trong indirect speech và complex sentences.',
            'Không lùi thì máy móc khi mệnh đề phụ diễn tả chân lý hoặc sự thật hiển nhiên.',
            'Nhìn mốc thời gian của main clause trước rồi mới phối hợp các clause còn lại.'
        ]
    },
    'noun-clauses': {
        source: 'Bài luyện Noun Clauses B2 tập trung vào that-clause, whether/if, wh-clause và trật tự câu trần thuật trong mệnh đề danh từ.',
        sections: [
            {
                title: 'Chọn cấu trúc noun clause đúng',
                instruction: 'Điền that, if, whether hoặc wh-word phù hợp và giữ trật tự câu trần thuật.',
                items: [
                    {
                        prompt: 'I don\'t know ___ she will come.',
                        answer: 'whether / if',
                        explanation: 'Sau know có thể dùng whether/if cho một câu nghi vấn gián tiếp.'
                    },
                    {
                        prompt: 'She asked me ___ I was ready.',
                        answer: 'if / whether',
                        explanation: 'Yes/no question trong noun clause dùng if hoặc whether.'
                    },
                    {
                        prompt: 'Tell me ___ you need.',
                        answer: 'what',
                        explanation: 'Wh-clause giữ trật tự câu trần thuật: what you need.'
                    },
                    {
                        prompt: 'I wonder ___ he lives.',
                        answer: 'where',
                        explanation: 'Sau wonder, mệnh đề danh từ hỏi nơi chốn dùng where + statement order.'
                    },
                    {
                        prompt: 'The problem is ___ we are late.',
                        answer: 'that',
                        explanation: 'That-clause bổ sung ý cho bổ ngữ sau be.'
                    },
                    {
                        prompt: 'It is clear ___ he is right.',
                        answer: 'that',
                        explanation: 'Extraposition thường dùng it + be + adjective + that-clause.'
                    },
                    {
                        prompt: '___ he said surprised everyone.',
                        answer: 'What',
                        explanation: 'Wh-word làm chủ ngữ trong noun clause không cần đảo trợ động từ.'
                    },
                    {
                        prompt: 'I am sure ___ he is honest.',
                        answer: 'that',
                        explanation: 'That-clause sau adjective là mẫu rất phổ biến.'
                    },
                    {
                        prompt: 'We discussed ___ we should leave early.',
                        answer: 'whether',
                        explanation: 'Whether dùng tốt hơn if khi diễn tả lựa chọn / thảo luận.'
                    }
                ]
            },
            {
                title: 'Đổi câu hỏi trực tiếp thành noun clause',
                instruction: 'Viết lại câu để noun clause giữ trật tự câu trần thuật bình thường.',
                items: [
                    {
                        prompt: 'Where does he live?',
                        answer: 'I don\'t know where he lives.',
                        explanation: 'Câu gián tiếp giữ vị trí subject + verb, không đảo như câu hỏi trực tiếp.'
                    },
                    {
                        prompt: 'What time will the meeting start?',
                        answer: 'Tell me what time the meeting will start.',
                        explanation: 'Wh-clause làm object của tell.'
                    },
                    {
                        prompt: 'Will she come tomorrow?',
                        answer: 'I wonder whether she will come tomorrow.',
                        explanation: 'Yes/no question đổi sang whether clause.'
                    },
                    {
                        prompt: 'Why did he leave?',
                        answer: 'She asked why he left.',
                        explanation: 'Past simple trong câu hỏi trực tiếp thường chuyển sang trật tự câu trần thuật.'
                    },
                    {
                        prompt: 'Who wrote this note?',
                        answer: 'Do you know who wrote this note?',
                        explanation: 'Who là chủ ngữ trong noun clause nên không đảo.'
                    },
                    {
                        prompt: 'Are they ready?',
                        answer: 'I wonder whether they are ready.',
                        explanation: 'Whether dùng để nói nghi vấn / lựa chọn.'
                    },
                    {
                        prompt: 'How much does it cost?',
                        answer: 'Could you tell me how much it costs?',
                        explanation: 'Wh-question giữ câu trần thuật bình thường: it costs.'
                    },
                    {
                        prompt: 'Can you help me?',
                        answer: 'I asked whether you could help me.',
                        explanation: 'Can thường đổi thành could trong câu hỏi tường thuật / noun clause.'
                    }
                ]
            }
        ],
        checkpoint: [
            'That-clause thường làm chủ ngữ, tân ngữ hoặc bổ ngữ.',
            'Whether/if dùng cho yes/no content; whether hợp hơn khi có or not hoặc sau preposition.',
            'Wh-clause giữ trật tự câu trần thuật, không đảo trợ động từ như direct question.',
            'Khi wh-word là chủ ngữ, không dùng do-support: What happened?, Who called?'
        ]
    },
    'adverbial-time-clauses': {
        source: 'Biên tập theo phần adverbial clauses of time trong sách.',
        sections: [
            {
                title: 'Chia thì trong mệnh đề thời gian',
                instruction: 'Dùng dạng động từ đúng sau when, until, before, after, as soon as, since...',
                questions: [
                    'Wait here until you (see) her.',
                    'He will wait for you when you (get) back tomorrow.',
                    'Do not leave until she (arrive).',
                    'I will phone you as soon as I (finish) the meeting.',
                    'Before you (go) out, turn off the lights.',
                    'The manager will review the draft after she (return).',
                    'By the time we reach the station, the train (leave).',
                    'She has worked here since she (graduate).'
                ],
                answers: [
                    'see',
                    'get',
                    'arrives',
                    'finish',
                    'go',
                    'returns',
                    'will have left',
                    'graduated'
                ]
            }
        ],
        checkpoint: [
            'Không dùng will trong time clause sau when, until, before, after, as soon as...',
            'Biết since thường kéo mệnh đề chính về present perfect hoặc present perfect continuous.',
            'Nhận ra khi nào by the time kéo theo perfect tense ở main clause.'
        ]
    },
    'relative-clauses': {
        source: 'Biên tập từ phần combine sentences bằng relative clauses trong sách.',
        sections: [
            {
                title: 'Nối câu bằng mệnh đề quan hệ',
                instruction: 'Viết lại thành một câu dùng who, which, that, whose hoặc where.',
                questions: [
                    'The student is from China. He sits next to me.',
                    'I thanked the woman. This woman had helped me.',
                    'The picture was beautiful. She was looking at it.',
                    'The town is small. I grew up there.',
                    'The engineer designed the bridge. He is speaking today.',
                    'The report was late. It annoyed the whole team.',
                    'The writer won the prize. Her first novel was translated into six languages.',
                    'The restaurant is closing. We had dinner there last night.'
                ],
                answers: [
                    'The student who sits next to me is from China.',
                    'I thanked the woman who had helped me.',
                    'The picture which/that she was looking at was beautiful.',
                    'The town where I grew up is small.',
                    'The engineer who designed the bridge is speaking today.',
                    'The report which/that was late annoyed the whole team.',
                    'The writer whose first novel was translated into six languages won the prize.',
                    'The restaurant where we had dinner last night is closing.'
                ]
            },
            {
                title: 'Chọn đại từ / trạng từ quan hệ đúng',
                instruction: 'Điền who, whom, whose, which, that, where, when hoặc why khi phù hợp.',
                items: [
                    {
                        prompt: 'The scientist ___ discovered the vaccine is speaking today.',
                        answer: 'who / that',
                        explanation: 'Dùng who hoặc that cho người làm chủ ngữ trong mệnh đề quan hệ.'
                    },
                    {
                        prompt: 'The book ___ I bought yesterday is excellent.',
                        answer: 'which / that',
                        explanation: 'Dùng which hoặc that cho vật; ở vị trí tân ngữ còn có thể lược bỏ.'
                    },
                    {
                        prompt: 'The woman ___ bag was stolen reported it.',
                        answer: 'whose',
                        explanation: 'Whose diễn tả quan hệ sở hữu.'
                    },
                    {
                        prompt: 'The café ___ we met last week is closed.',
                        answer: 'where',
                        explanation: 'Where dùng cho địa điểm, tương đương at/in which trong văn trang trọng.'
                    },
                    {
                        prompt: 'Monday was the day ___ we arrived in Hanoi.',
                        answer: 'when',
                        explanation: 'When dùng cho thời gian.'
                    },
                    {
                        prompt: 'I do not know the reason ___ he left early.',
                        answer: 'why',
                        explanation: 'Why dùng sau reason để chỉ lý do.'
                    },
                    {
                        prompt: 'The house ___ we stayed was small.',
                        answer: 'where / in which',
                        explanation: 'Where là cách tự nhiên; in which là dạng trang trọng hơn.'
                    },
                    {
                        prompt: 'My sister, ___ lives in Da Nang, is a nurse.',
                        answer: 'who',
                        explanation: 'Mệnh đề không xác định vẫn dùng who/which/whose nhưng không dùng that.'
                    }
                ]
            },
            {
                title: 'Lược bỏ và dấu phẩy',
                instruction: 'Xác định khi nào có thể lược bỏ đại từ quan hệ và khi nào phải dùng dấu phẩy.',
                items: [
                    {
                        prompt: 'The movie (which/that) we watched last night was great.',
                        answer: 'which/that can be omitted',
                        explanation: 'Khi đại từ quan hệ làm tân ngữ, nó có thể được lược bỏ.'
                    },
                    {
                        prompt: 'The boy (whom/who/that) I met yesterday is my cousin.',
                        answer: 'whom/who/that can be omitted',
                        explanation: 'Đại từ quan hệ làm tân ngữ có thể bỏ trong mệnh đề xác định.'
                    },
                    {
                        prompt: 'The teacher who teaches us math is strict.',
                        answer: 'who cannot be omitted',
                        explanation: 'Who ở đây là chủ ngữ của mệnh đề quan hệ nên không thể lược bỏ.'
                    },
                    {
                        prompt: 'My brother, who lives in Hue, is a doctor.',
                        answer: 'non-defining relative clause',
                        explanation: 'Mệnh đề không xác định có dấu phẩy và không dùng that.'
                    },
                    {
                        prompt: 'The car whose engine is broken is mine.',
                        answer: 'whose',
                        explanation: 'Whose vẫn dùng bình thường dù là defining clause.'
                    },
                    {
                        prompt: 'The place where we first met was a café.',
                        answer: 'where',
                        explanation: 'Where thay cho at / in / on which trong nhiều ngữ cảnh địa điểm.'
                    }
                ]
            }
        ],
        checkpoint: [
            'Phân biệt được defining và non-defining relative clauses.',
            'Biết khi nào có thể lược bỏ who/which/that làm tân ngữ.',
            'Chọn đúng who/which/that/whose/where/when/why theo chức năng trong clause.',
            'Non-defining clauses có dấu phẩy và không dùng that.'
        ]
    },
    'relative-pronouns-adverbs': {
        source: 'Bài luyện nhận diện từ quan hệ cơ bản cho người học A2, tách riêng khỏi phần ghép câu ở Relative Clauses.',
        sections: [
            {
                title: 'Chọn từ quan hệ đúng',
                instruction: 'Điền who, whom, whose, which, that, where, when hoặc why.',
                questions: [
                    'The engineer ___ designed this bridge works in Da Nang.',
                    'The restaurant ___ we had dinner last night is closing.',
                    'Do you know the reason ___ she left so early?',
                    'The writer ___ novels won the prize is speaking today.',
                    'The year ___ we moved to Hue was unforgettable.',
                    'The application form ___ you sent yesterday has arrived.',
                    'The consultant ___ the manager recommended will join us tomorrow.',
                    'The city ___ I was born has changed a lot.'
                ],
                answers: [
                    'who',
                    'where',
                    'why',
                    'whose',
                    'when',
                    'which/that',
                    'whom/who',
                    'where'
                ]
            }
        ],
        checkpoint: [
            'Biết who/whom/whose dành cho người, which/that cho vật, where/when/why cho nơi chốn/thời gian/lý do.',
            'Mục này chỉ giúp chọn từ đúng; phần ghép câu đầy đủ nằm ở Relative Clauses.',
            'Không dùng that trong non-defining clauses có dấu phẩy.'
        ]
    },
    'result-structures': {
        source: '24 câu luyện Phrases & Clauses of Result bao phủ so...that, such...that, too...to, enough to và các mẫu đổi câu cơ bản.',
        sections: [
            {
                title: 'Nhóm 1: Điền cấu trúc đúng',
                instruction: 'Điền so, such, too hoặc enough khi phù hợp.',
                items: [
                    {
                        prompt: 'It was ___ cold that we stayed inside.<br><em>Nghĩa: Trời lạnh đến mức chúng tôi ở trong nhà.</em>',
                        answer: 'so',
                        explanation: 'So + adj + that + clause dùng khi mức độ gây ra kết quả trực tiếp.'
                    },
                    {
                        prompt: 'She was ___ tired to drive.<br><em>Nghĩa: Cô ấy quá mệt để lái xe.</em>',
                        answer: 'too',
                        explanation: 'Too + adj + to V mang nghĩa quá... đến mức không thể làm gì.'
                    },
                    {
                        prompt: 'The room was large ___ to hold fifty people.<br><em>Nghĩa: Căn phòng đủ lớn để chứa năm mươi người.</em>',
                        answer: 'enough',
                        explanation: 'Adj + enough + to V diễn tả đủ... để làm gì đó.'
                    },
                    {
                        prompt: 'It was ___ a noisy room that nobody could sleep.<br><em>Nghĩa: Đó là một căn phòng ồn đến mức không ai ngủ được.</em>',
                        answer: 'such',
                        explanation: 'Such + (a/an) + adj + noun + that + clause dùng với cụm danh từ.'
                    },
                    {
                        prompt: 'He spoke ___ quickly that everyone noticed him.<br><em>Nghĩa: Anh ấy nói nhanh đến mức mọi người đều chú ý.</em>',
                        answer: 'so',
                        explanation: 'So + adv + that + clause dùng với trạng từ.'
                    },
                    {
                        prompt: 'He is ___ young to work full-time.<br><em>Nghĩa: Anh ấy quá trẻ để làm việc toàn thời gian.</em>',
                        answer: 'too',
                        explanation: 'Too + adj + to V là mẫu quá... đến mức không thể.'
                    },
                    {
                        prompt: 'We had ___ little time that we skipped lunch.<br><em>Nghĩa: Chúng tôi có ít thời gian đến mức phải bỏ bữa trưa.</em>',
                        answer: 'so',
                        explanation: 'So + much/little + noun + that + clause diễn tả số lượng gây ra kết quả.'
                    },
                    {
                        prompt: 'Her bag was light ___ for a child to carry.<br><em>Nghĩa: Cái túi của cô ấy đủ nhẹ để một đứa trẻ mang.</em>',
                        answer: 'enough',
                        explanation: 'Enough đứng sau adjective, trước to V khi nói “đủ... để”.'
                    }
                ]
            },
            {
                title: 'Nhóm 2: Viết lại câu cho đúng',
                instruction: 'Viết lại câu sao cho nghĩa không đổi.',
                items: [
                    {
                        prompt: 'The film was very interesting. Everyone stayed to the end.<br><em>Nghĩa: Bộ phim rất thú vị. Mọi người ở lại đến cuối.</em>',
                        answer: 'The film was so interesting that everyone stayed to the end.',
                        explanation: 'So + adj + that + clause là cách nối hai ý thành nguyên nhân - kết quả.'
                    },
                    {
                        prompt: 'The box was very heavy. I couldn’t lift it.<br><em>Nghĩa: Chiếc hộp rất nặng. Tôi không thể nhấc nó lên.</em>',
                        answer: 'The box was too heavy for me to lift.',
                        explanation: 'Too + adj + to V diễn tả quá... đến mức không thể.'
                    },
                    {
                        prompt: 'The teacher spoke clearly. We understood everything.<br><em>Nghĩa: Giáo viên nói rõ ràng. Chúng tôi hiểu mọi thứ.</em>',
                        answer: 'The teacher spoke clearly enough for us to understand everything.',
                        explanation: 'Adj/adv + enough + to V nghĩa là đủ để làm gì đó.'
                    },
                    {
                        prompt: 'The story was very long. Some students got bored.<br><em>Nghĩa: Câu chuyện rất dài. Một số học sinh thấy chán.</em>',
                        answer: 'It was such a long story that some students got bored.',
                        explanation: 'Such + (a/an) + adj + noun + that + clause dùng với cụm danh từ.'
                    },
                    {
                        prompt: 'The rain was very heavy. We stayed at home.<br><em>Nghĩa: Trời mưa rất to. Chúng tôi ở nhà.</em>',
                        answer: 'It was so heavy that we stayed at home.',
                        explanation: 'So + adj + that + clause cho biết mức độ dẫn tới kết quả.'
                    },
                    {
                        prompt: 'The test was easy. We finished it quickly.<br><em>Nghĩa: Bài kiểm tra dễ. Chúng tôi làm xong nhanh.</em>',
                        answer: 'The test was easy enough for us to finish quickly.',
                        explanation: 'Enough đứng sau adjective và trước to V.'
                    },
                    {
                        prompt: 'The room was very small. We couldn’t fit in.<br><em>Nghĩa: Căn phòng rất nhỏ. Chúng tôi không thể vào vừa.</em>',
                        answer: 'The room was too small for us to fit in.',
                        explanation: 'Too...to mang nghĩa quá... đến mức không thể thực hiện hành động.'
                    },
                    {
                        prompt: 'The hotel was very expensive. We only booked one night.<br><em>Nghĩa: Khách sạn rất đắt. Chúng tôi chỉ đặt một đêm.</em>',
                        answer: 'It was such an expensive hotel that we only booked one night.',
                        explanation: 'Such + (a/an) + adj + noun + that + clause nhấn mạnh cụm danh từ.'
                    }
                ]
            },
            {
                title: 'Nhóm 3: Lượng từ và biến thể nâng cao',
                instruction: 'Điền so, such, too hoặc enough để hoàn chỉnh câu.',
                items: [
                    {
                        prompt: 'There were ___ many people that we waited outside.<br><em>Nghĩa: Có nhiều người đến mức chúng tôi phải chờ bên ngoài.</em>',
                        answer: 'so',
                        explanation: 'So many + plural noun + that + clause dùng với danh từ đếm được số nhiều.'
                    },
                    {
                        prompt: 'There were ___ few chairs that some guests stood.<br><em>Nghĩa: Có ít ghế đến mức một số khách phải đứng.</em>',
                        answer: 'so',
                        explanation: 'So few + plural noun + that + clause diễn tả số lượng quá ít.'
                    },
                    {
                        prompt: 'We had ___ much homework that we worked late.<br><em>Nghĩa: Chúng tôi có nhiều bài tập đến mức phải làm muộn.</em>',
                        answer: 'so',
                        explanation: 'So much + uncountable noun + that + clause dùng với danh từ không đếm được.'
                    },
                    {
                        prompt: 'She had ___ little money that she couldn’t buy the ticket.<br><em>Nghĩa: Cô ấy có ít tiền đến mức không thể mua vé.</em>',
                        answer: 'so',
                        explanation: 'So little + uncountable noun + that + clause diễn tả số lượng quá ít.'
                    },
                    {
                        prompt: 'He was careful ___ to notice the mistake.<br><em>Nghĩa: Anh ấy đủ cẩn thận để nhận ra lỗi sai.</em>',
                        answer: 'enough',
                        explanation: 'Careful enough to V = đủ cẩn thận để làm gì đó.'
                    },
                    {
                        prompt: 'The table was strong ___ for four adults to sit at.<br><em>Nghĩa: Chiếc bàn đủ chắc để bốn người lớn ngồi.</em>',
                        answer: 'enough',
                        explanation: 'Adj + enough + for someone + to V là mẫu rất hay gặp.'
                    },
                    {
                        prompt: 'It was ___ a short meeting that we finished before noon.<br><em>Nghĩa: Đó là một cuộc họp ngắn đến mức chúng tôi xong trước buổi trưa.</em>',
                        answer: 'such',
                        explanation: 'Such + a/an + adj + noun + that + clause nhấn mạnh một danh từ cụ thể.'
                    },
                    {
                        prompt: 'We had ___ money to pay for lunch.<br><em>Nghĩa: Chúng tôi có đủ tiền để trả bữa trưa.</em>',
                        answer: 'enough',
                        explanation: 'Enough + noun nghĩa là đủ số lượng cho nhu cầu đó.'
                    }
                ]
            }
        ],
        checkpoint: [
            'Phân biệt được so + adj/adv với such + noun phrase.',
            'Biết enough đứng sau adjective/adverb nhưng trước noun.',
            'Nhận ra các câu too...to có thể đổi sang not...enough to hoặc so...that...not.'
        ]
    },
    'imperatives-requests': {
        source: '8 câu luyện Imperatives & Requests bao phủ lệnh, yêu cầu, phủ định, đề nghị, lời nhắc và chuyển sang cách nói lịch sự hơn.',
        sections: [
            {
                title: 'Nhận diện và viết lại',
                instruction: 'Xác định loại câu hoặc viết lại theo yêu cầu lịch sự hơn.',
                items: [
                    { prompt: 'Open the window.<br><em>Nghĩa: Mở cửa sổ đi.</em>', answer: 'Imperative trực tiếp', explanation: 'Câu bắt đầu bằng động từ nguyên mẫu là mệnh lệnh/hướng dẫn trực tiếp.' },
                    { prompt: 'Please sit down.<br><em>Nghĩa: Làm ơn ngồi xuống.</em>', answer: 'Yêu cầu lịch sự', explanation: 'Please + verb làm câu mềm hơn và lịch sự hơn.' },
                    { prompt: "Don't touch that.<br><em>Nghĩa: Đừng chạm vào cái đó.</em>", answer: 'Negative imperative', explanation: "Don't + V dùng để cấm hoặc nhắc không làm gì." },
                    { prompt: "Let's start now.<br><em>Nghĩa: Chúng ta bắt đầu ngay nhé.</em>", answer: 'Đề nghị cùng làm', explanation: "Let's + V dùng khi mời gọi cả người nói và người nghe cùng thực hiện." },
                    { prompt: 'Could you open the file?<br><em>Nghĩa: Bạn có thể mở tệp không?</em>', answer: 'Request lịch sự', explanation: 'Could you... là dạng hỏi lịch sự hơn imperative.' },
                    { prompt: 'Watch out for the step.<br><em>Nghĩa: Cẩn thận bậc thềm.</em>', answer: 'Lời nhắc / cảnh báo', explanation: 'Watch out là mẫu warning rất phổ biến.' },
                    { prompt: 'Please find the file attached.<br><em>Nghĩa: Vui lòng tìm tệp đính kèm.</em>', answer: 'Email request', explanation: 'Please + imperative thường dùng nhiều trong email hoặc tin nhắn công việc.' },
                    { prompt: "Let's not argue now.<br><em>Nghĩa: Đừng cãi nhau bây giờ nhé.</em>", answer: 'Negative suggestion', explanation: "Let's not + V dùng để từ chối hoặc đề nghị tránh làm gì." }
                ]
            }
        ],
        checkpoint: [
            'Imperative dùng cho lệnh, hướng dẫn, cảnh báo và chỉ dẫn.',
            'Please, could you, would you giúp câu lịch sự hơn.',
            'Let\'s not là lời đề nghị phủ định, khác với don\'t.'
        ]
    },
    'tag-questions': {
        source: '8 câu luyện Tag Questions bao phủ be, do-support, modal, negative, I am, let\'s và imperative.',
        sections: [
            {
                title: 'Điền tag đúng',
                instruction: 'Điền câu hỏi đuôi phù hợp vào chỗ trống.',
                items: [
                    { prompt: 'You are ready, ___?<br><em>Nghĩa: Bạn đã sẵn sàng, đúng không?</em>', answer: "aren't you?", explanation: 'Câu khẳng định với be dùng tag phủ định.' },
                    { prompt: "She doesn't like tea, ___?<br><em>Nghĩa: Cô ấy không thích trà, đúng không?</em>", answer: 'does she?', explanation: 'Câu phủ định dùng tag khẳng định.' },
                    { prompt: 'They went home early, ___?<br><em>Nghĩa: Họ đã về nhà sớm, đúng không?</em>', answer: "didn't they?", explanation: 'Past simple dùng didn\'t trong tag.' },
                    { prompt: 'You can swim, ___?<br><em>Nghĩa: Bạn biết bơi, đúng không?</em>', answer: "can't you?", explanation: 'Modal can giữ nguyên trong tag và đổi polarity.' },
                    { prompt: 'I am late, ___?<br><em>Nghĩa: Tôi bị muộn, đúng không?</em>', answer: "aren't I?", explanation: 'I am... có tag đặc biệt là aren\'t I?' },
                    { prompt: "Let's go now, ___?<br><em>Nghĩa: Chúng ta đi ngay nhé?</em>", answer: 'shall we?', explanation: "Let's... thường đi với shall we?" },
                    { prompt: 'Open the door, ___?<br><em>Nghĩa: Mở cửa ra nhé?</em>', answer: 'will you?', explanation: 'Imperative thường dùng will you? để làm câu mềm hơn.' },
                    { prompt: 'He never lies, ___?<br><em>Nghĩa: Anh ấy không bao giờ nói dối, đúng không?</em>', answer: 'does he?', explanation: 'Từ phủ định nghĩa như never làm tag theo hướng khẳng định.' }
                ]
            }
        ],
        checkpoint: [
            'Tag luôn bám theo auxiliary của mệnh đề chính.',
            'Câu khẳng định đi với tag phủ định, câu phủ định đi với tag khẳng định.',
            'I am... dùng aren\'t I?; Let\'s... dùng shall we?'
        ]
    },
    'parallel-structure': {
        source: '8 câu luyện Parallel Structure bao phủ lists, paired conjunctions, comparisons và sửa lỗi song song.',
        sections: [
            {
                title: 'Chọn dạng song song đúng',
                instruction: 'Điền hoặc sửa thành dạng song song chuẩn.',
                items: [
                    { prompt: 'She likes ___, ___, and speaking.<br><em>Nghĩa: Cô ấy thích đọc, viết và nói.</em>', answer: 'reading, writing', explanation: 'Các phần trong list phải cùng dạng V-ing.' },
                    { prompt: 'He is both ___ and ___.<br><em>Nghĩa: Anh ấy vừa tốt bụng vừa hữu ích.</em>', answer: 'kind, helpful', explanation: 'Both...and cần hai thành phần cùng loại, ở đây là hai tính từ.' },
                    { prompt: 'We can either ___ or ___.<br><em>Nghĩa: Chúng ta có thể ở lại hoặc đi.</em>', answer: 'stay, leave', explanation: 'Either...or cần hai động từ cùng dạng.' },
                    { prompt: 'The bag is neither ___ nor ___.<br><em>Nghĩa: Cái túi không vừa cũng không đắt.</em>', answer: 'big, expensive', explanation: 'Neither...nor dùng hai tính từ song song.' },
                    { prompt: 'She not only saved time but also ___ money.<br><em>Nghĩa: Cô ấy không chỉ tiết kiệm thời gian mà còn tiền.</em>', answer: 'saved', explanation: 'Not only...but also phải giữ cùng cấu trúc động từ.' },
                    { prompt: 'He is more interested in ___ than in ___.<br><em>Nghĩa: Anh ấy thích đọc hơn xem TV.</em>', answer: 'reading, watching TV', explanation: 'Hai vế sau than phải cùng dạng gerund phrase.' },
                    { prompt: 'To succeed, you must ___, ___, and ___.<br><em>Nghĩa: Để thành công, bạn phải lập kế hoạch, luyện tập và kiên trì.</em>', answer: 'plan, practice, persist', explanation: 'Các động từ nguyên mẫu phải song song.' },
                    { prompt: 'Our goals are to ___, to ___, and to ___.<br><em>Nghĩa: Mục tiêu của chúng tôi là học, cải thiện và giúp đỡ.</em>', answer: 'learn, improve, help', explanation: 'Khi mở đầu bằng to, các vế sau cũng giữ to V.' }
                ]
            }
        ],
        checkpoint: [
            'Parallel structure giữ các phần ở cùng dạng ngữ pháp.',
            'Rất hay gặp trong lists và paired conjunctions.',
            'Chỉ cần một vế lệch dạng là câu nghe sai nhịp.'
        ]
    },
    'discourse-markers': {
        source: '8 câu luyện Linking Words & Discourse Markers bao phủ thêm ý, đối lập, nguyên nhân-kết quả, ví dụ, trình tự và chốt ý.',
        sections: [
            {
                title: 'Chọn từ nối phù hợp',
                instruction: 'Điền discourse marker phù hợp vào chỗ trống.',
                items: [
                    { prompt: 'The price is high. ___, the quality is excellent.<br><em>Nghĩa: Giá cao. Tuy nhiên, chất lượng rất tốt.</em>', answer: 'However', explanation: 'However dùng để tạo quan hệ đối lập.' },
                    { prompt: 'He studies hard. ___, he passed the exam.<br><em>Nghĩa: Cậu ấy học chăm. Kết quả là cậu ấy đậu kỳ thi.</em>', answer: 'As a result', explanation: 'As a result diễn tả kết quả trực tiếp.' },
                    { prompt: 'We need more time. ___, we should ask for help.<br><em>Nghĩa: Chúng ta cần thêm thời gian. Vì vậy, chúng ta nên nhờ giúp đỡ.</em>', answer: 'Therefore', explanation: 'Therefore là marker nguyên nhân-kết quả trong văn viết.' },
                    { prompt: 'She likes many sports, ___ football and tennis.<br><em>Nghĩa: Cô ấy thích nhiều môn thể thao, ví dụ như bóng đá và quần vợt.</em>', answer: 'for example', explanation: 'For example dùng để nêu ví dụ cụ thể.' },
                    { prompt: '___, we need to discuss the budget.<br><em>Nghĩa: Đầu tiên, chúng ta cần bàn về ngân sách.</em>', answer: 'First', explanation: 'First là marker trình tự mở đầu một chuỗi ý.' },
                    { prompt: 'The machine was new. ___, it broke down.<br><em>Nghĩa: Cái máy còn mới. Thế nhưng nó đã hỏng.</em>', answer: 'Nevertheless', explanation: 'Nevertheless nhấn sự tương phản mạnh hơn however.' },
                    { prompt: '___, let me summarize the main points.<br><em>Nghĩa: Cuối cùng, để tôi tóm tắt các ý chính.</em>', answer: 'Finally', explanation: 'Finally dùng để chốt chuỗi ý hoặc chuyển sang kết luận.' },
                    { prompt: 'I was tired. ___, I finished the work.<br><em>Nghĩa: Tôi rất mệt. Dù vậy, tôi vẫn hoàn thành công việc.</em>', answer: 'Nevertheless', explanation: 'Nevertheless thường đứng đầu câu và dùng với ý đối lập.' }
                ]
            }
        ],
        checkpoint: [
            'Discourse markers thường nối giữa câu hoặc giữa đoạn.',
            'However, therefore, as a result cần dấu phẩy rõ ràng.',
            'Đừng dùng discourse marker như liên từ trong cùng một mệnh đề nếu dấu câu không đúng.'
        ]
    },
    'present-continuous': {
        source: 'Bài luyện tổng hợp Present Continuous: đang xảy ra, tạm thời, thay đổi và kế hoạch gần.',
        sections: [
            {
                title: 'Nhận diện các cách dùng chính',
                instruction: 'Đọc câu ví dụ, ghép với cách dùng của present continuous và xem giải thích.',
                items: [
                    {
                        prompt: '<strong>1. Đang xảy ra lúc nói:</strong><br>I am reading now.<br><em>Tôi đang đọc sách lúc này.</em>',
                        answer: 'Hành động đang diễn ra',
                        explanation: 'now và am + V-ing cho thấy hành động xảy ra ngay thời điểm nói.'
                    },
                    {
                        prompt: '<strong>2. Tình huống tạm thời:</strong><br>She is living with her aunt this month.<br><em>Tháng này cô ấy đang ở với dì của mình.</em>',
                        answer: 'Tình huống tạm thời',
                        explanation: 'this month cho biết trạng thái chỉ kéo dài tạm thời, không phải sự thật lâu dài.'
                    },
                    {
                        prompt: '<strong>3. Xu hướng thay đổi:</strong><br>The price is rising fast.<br><em>Giá đang tăng nhanh.</em>',
                        answer: 'Sự thay đổi dần',
                        explanation: 'is rising diễn tả một quá trình thay đổi đang diễn ra.'
                    },
                    {
                        prompt: '<strong>4. Hành động lặp lại gây khó chịu:</strong><br>He is always losing his keys.<br><em>Anh ấy lúc nào cũng làm mất chìa khóa.</em>',
                        answer: 'Phàn nàn về việc lặp lại',
                        explanation: 'always + present continuous thường dùng để than phiền về thói quen gây bực.'
                    },
                    {
                        prompt: '<strong>5. Kế hoạch gần đã sắp xếp:</strong><br>We are meeting the client tomorrow.<br><em>Ngày mai chúng tôi sẽ gặp khách hàng.</em>',
                        answer: 'Kế hoạch gần',
                        explanation: 'Cấu trúc am/is/are + V-ing có thể nói lịch hẹn đã chốt trong tương lai gần.'
                    }
                ]
            }
        ],
        checkpoint: [
            'Present continuous thường đi với now, right now, at the moment, this week, tomorrow.',
            'Không dùng cho mọi ý tương lai; chỉ dùng khi có kế hoạch hoặc sắp xếp rõ.',
            'Động từ trạng thái thường không dùng ở dạng tiếp diễn trừ khi đổi nghĩa.'
        ]
    },
    'stative-verbs': {
        source: '100 câu luyện Stative vs Dynamic Verbs · B1 bao phủ nhận diện, sửa lỗi, đổi nghĩa và viết lại theo ngữ cảnh.',
        sections: [
            {
                title: 'Nhóm 1: Chọn simple hay continuous',
                instruction: 'Điền dạng đúng của động từ trong ngoặc.',
                items: [
                    { prompt: `I ___ (think) you are right.<br><em>Nghĩa: Tôi nghĩ là bạn đúng.</em>`, answer: `think`, explanation: `Think = opinion, nên dùng present simple.` },
                    { prompt: `I ___ (think) about the budget right now.<br><em>Nghĩa: Tôi đang nghĩ về ngân sách lúc này.</em>`, answer: `am thinking`, explanation: `Think = consider, nên dùng continuous.` },
                    { prompt: `She ___ (have) a car.<br><em>Nghĩa: Cô ấy có một chiếc xe.</em>`, answer: `has`, explanation: `Have = sở hữu, là stative.` },
                    { prompt: `We ___ (have) dinner at the moment.<br><em>Nghĩa: Chúng tôi đang ăn tối lúc này.</em>`, answer: `are having`, explanation: `Have = ăn uống/trải nghiệm, nên dùng continuous.` },
                    { prompt: `He ___ (see) the doctor tomorrow.<br><em>Nghĩa: Anh ấy sẽ gặp bác sĩ vào ngày mai.</em>`, answer: `is seeing`, explanation: `See = gặp / có lịch hẹn, là nghĩa hành động.` },
                    { prompt: `I ___ (see) your point now.<br><em>Nghĩa: Tôi hiểu ý bạn rồi.</em>`, answer: `see`, explanation: `See = hiểu / nhận ra, là stative.` },
                    { prompt: `This soup ___ (taste) delicious.<br><em>Nghĩa: Món súp này có vị ngon.</em>`, answer: `tastes`, explanation: `Taste = có vị, là stative.` },
                    { prompt: `The chef ___ (taste) the soup now.<br><em>Nghĩa: Đầu bếp đang nếm món súp.</em>`, answer: `is tasting`, explanation: `Taste = nếm thử, nên dùng continuous.` },
                    { prompt: `This flower ___ (smell) sweet.<br><em>Nghĩa: Bông hoa này có mùi thơm.</em>`, answer: `smells`, explanation: `Smell = có mùi, là stative.` },
                    { prompt: `The scientist ___ (smell) the gas sample.<br><em>Nghĩa: Nhà khoa học đang ngửi mẫu khí.</em>`, answer: `is smelling`, explanation: `Smell = ngửi chủ động, nên dùng continuous.` },
                    { prompt: `She ___ (feel) better now.<br><em>Nghĩa: Bây giờ cô ấy cảm thấy khá hơn.</em>`, answer: `is feeling`, explanation: `Feel = cảm nhận trạng thái tạm thời, có thể dùng continuous.` },
                    { prompt: `The fabric ___ (feel) soft.<br><em>Nghĩa: Chất vải này mềm.</em>`, answer: `feels`, explanation: `Feel = có cảm giác, là stative.` },
                    { prompt: `Your idea ___ (look) good.<br><em>Nghĩa: Ý tưởng của bạn có vẻ tốt.</em>`, answer: `looks`, explanation: `Look = có vẻ, là linking/stative.` },
                    { prompt: `She ___ (look) at the map now.<br><em>Nghĩa: Cô ấy đang nhìn vào bản đồ.</em>`, answer: `is looking`, explanation: `Look at = hành động nhìn, nên dùng continuous.` },
                    { prompt: `The actor ___ (appear) nervous.<br><em>Nghĩa: Diễn viên đó có vẻ lo lắng.</em>`, answer: `appears`, explanation: `Appear = có vẻ, là stative.` },
                    { prompt: `The band ___ (appear) on stage tonight.<br><em>Nghĩa: Ban nhạc sẽ biểu diễn trên sân khấu tối nay.</em>`, answer: `is appearing`, explanation: `Appear = xuất hiện / biểu diễn, là nghĩa động.` },
                    { prompt: `This bag ___ (weigh) five kilos.<br><em>Nghĩa: Cái túi này nặng năm ký.</em>`, answer: `weighs`, explanation: `Weigh = có trọng lượng, là stative.` },
                    { prompt: `The nurse ___ (weigh) the baby now.<br><em>Nghĩa: Y tá đang cân em bé.</em>`, answer: `is weighing`, explanation: `Weigh = cân đo, là hành động.` },
                    { prompt: `He ___ (own) a small cafe.<br><em>Nghĩa: Anh ấy sở hữu một quán cà phê nhỏ.</em>`, answer: `owns`, explanation: `Own = sở hữu, là stative.` },
                    { prompt: `The museum ___ (contain) many old paintings.<br><em>Nghĩa: Bảo tàng chứa nhiều bức tranh cũ.</em>`, answer: `contains`, explanation: `Contain = chứa đựng, là stative.` }
                ]
            },
            {
                title: 'Nhóm 2: Sửa lỗi sai',
                instruction: 'Viết lại câu cho đúng. Chú ý khi nào cần present simple và khi nào cần continuous.',
                items: [
                    { prompt: 'I am knowing the answer.<br><em>Nghĩa: Tôi biết câu trả lời.</em>', answer: 'I know the answer.', explanation: 'Know là stative verb, không dùng am knowing.' },
                    { prompt: 'She is owning a car.<br><em>Nghĩa: Cô ấy sở hữu một chiếc xe.</em>', answer: 'She owns a car.', explanation: 'Own diễn tả sở hữu, dùng present simple.' },
                    { prompt: 'We are believing you.<br><em>Nghĩa: Chúng tôi tin bạn.</em>', answer: 'We believe you.', explanation: 'Believe là stative verb, không dùng continuous.' },
                    { prompt: 'He is needing help.<br><em>Nghĩa: Anh ấy cần giúp đỡ.</em>', answer: 'He needs help.', explanation: 'Need là stative trong nghĩa cần.' },
                    { prompt: 'They are liking the movie.<br><em>Nghĩa: Họ thích bộ phim.</em>', answer: 'They like the movie.', explanation: 'Like là cảm xúc/sở thích ổn định.' },
                    { prompt: 'The soup is tasting delicious.<br><em>Nghĩa: Món súp này ngon.</em>', answer: 'The soup tastes delicious.', explanation: 'Taste = có vị, là stative.' },
                    { prompt: 'The flower is smelling nice.<br><em>Nghĩa: Bông hoa có mùi dễ chịu.</em>', answer: 'The flower smells nice.', explanation: 'Smell = có mùi, dùng simple.' },
                    { prompt: 'This book is belonging to me.<br><em>Nghĩa: Quyển sách này thuộc về tôi.</em>', answer: 'This book belongs to me.', explanation: 'Belong là stative verb.' },
                    { prompt: 'I am understanding the lesson.<br><em>Nghĩa: Tôi hiểu bài học.</em>', answer: 'I understand the lesson.', explanation: 'Understand không dùng continuous trong nghĩa hiểu.' },
                    { prompt: 'She is remembering your name.<br><em>Nghĩa: Cô ấy nhớ tên bạn.</em>', answer: 'She remembers your name.', explanation: 'Remember là stative khi nói về trí nhớ.' },
                    { prompt: 'He is having two sisters.<br><em>Nghĩa: Anh ấy có hai chị/em gái.</em>', answer: 'He has two sisters.', explanation: 'Have = sở hữu thì dùng simple.' },
                    { prompt: 'I am thinking you are right.<br><em>Nghĩa: Tôi nghĩ bạn đúng.</em>', answer: 'I think you are right.', explanation: 'Think = opinion, không dùng continuous.' },
                    { prompt: 'She is seeing the answer.<br><em>Nghĩa: Cô ấy thấy câu trả lời.</em>', answer: 'She sees the answer.', explanation: 'See = hiểu / nhận ra thì dùng simple.' },
                    { prompt: 'The manager is appearing busy.<br><em>Nghĩa: Người quản lý có vẻ bận.</em>', answer: 'The manager appears busy.', explanation: 'Appear = seem, là stative.' },
                    { prompt: 'The coat is fitting me perfectly.<br><em>Nghĩa: Chiếc áo vừa với tôi hoàn hảo.</em>', answer: 'The coat fits me perfectly.', explanation: 'Fit = vừa / hợp, thường dùng simple.' },
                    { prompt: 'I am hearing a strange noise.<br><em>Nghĩa: Tôi nghe thấy một tiếng động lạ.</em>', answer: 'I hear a strange noise.', explanation: 'Hear = nghe thấy, thường là stative trong câu này.' },
                    { prompt: 'He is preferring tea.<br><em>Nghĩa: Anh ấy thích trà hơn.</em>', answer: 'He prefers tea.', explanation: 'Prefer là stative verb.' },
                    { prompt: 'They are containing valuable data.<br><em>Nghĩa: Họ chứa dữ liệu quý giá.</em>', answer: 'They contain valuable data.', explanation: 'Contain là stative verb.' },
                    { prompt: 'This chair is weighing a lot.<br><em>Nghĩa: Cái ghế này nặng nhiều.</em>', answer: 'This chair weighs a lot.', explanation: 'Weigh = có trọng lượng, dùng simple.' },
                    { prompt: 'The water is feeling cold.<br><em>Nghĩa: Nước này lạnh.</em>', answer: 'The water feels cold.', explanation: 'Feel = có cảm giác, dùng simple.' }
                ]
            },
            {
                title: 'Nhóm 3: Phân loại nghĩa',
                instruction: 'Xác định động từ trong câu là stative hay dynamic.',
                items: [
                    { prompt: 'I think this plan will work.<br><em>Nghĩa: Tôi nghĩ kế hoạch này sẽ hiệu quả.</em>', answer: 'stative', explanation: 'Think = opinion.' },
                    { prompt: 'I am thinking about the plan.<br><em>Nghĩa: Tôi đang suy nghĩ về kế hoạch.</em>', answer: 'dynamic', explanation: 'Think = consider.' },
                    { prompt: 'She has two brothers.<br><em>Nghĩa: Cô ấy có hai anh/em trai.</em>', answer: 'stative', explanation: 'Have = sở hữu.' },
                    { prompt: 'We are having lunch now.<br><em>Nghĩa: Chúng tôi đang ăn trưa.</em>', answer: 'dynamic', explanation: 'Have = ăn uống.' },
                    { prompt: 'I see the problem clearly.<br><em>Nghĩa: Tôi hiểu rõ vấn đề.</em>', answer: 'stative', explanation: 'See = hiểu / nhận ra.' },
                    { prompt: 'She is seeing the doctor at 3 p.m.<br><em>Nghĩa: Cô ấy gặp bác sĩ lúc 3 giờ chiều.</em>', answer: 'dynamic', explanation: 'See = có cuộc hẹn / gặp.' },
                    { prompt: 'The room smells bad.<br><em>Nghĩa: Căn phòng có mùi khó chịu.</em>', answer: 'stative', explanation: 'Smell = có mùi.' },
                    { prompt: 'She is smelling the roses.<br><em>Nghĩa: Cô ấy đang ngửi hoa hồng.</em>', answer: 'dynamic', explanation: 'Smell = ngửi chủ động.' },
                    { prompt: 'The soup tastes salty.<br><em>Nghĩa: Món súp có vị mặn.</em>', answer: 'stative', explanation: 'Taste = có vị.' },
                    { prompt: 'The chef is tasting the soup.<br><em>Nghĩa: Đầu bếp đang nếm súp.</em>', answer: 'dynamic', explanation: 'Taste = nếm thử.' },
                    { prompt: 'You look tired.<br><em>Nghĩa: Bạn trông mệt.</em>', answer: 'stative', explanation: 'Look = có vẻ.' },
                    { prompt: 'She is looking for her keys.<br><em>Nghĩa: Cô ấy đang tìm chìa khóa.</em>', answer: 'dynamic', explanation: 'Look for = tìm kiếm.' },
                    { prompt: 'This box weighs ten kilos.<br><em>Nghĩa: Cái hộp nặng mười ký.</em>', answer: 'stative', explanation: 'Weigh = có trọng lượng.' },
                    { prompt: 'The nurse is weighing the baby.<br><em>Nghĩa: Y tá đang cân em bé.</em>', answer: 'dynamic', explanation: 'Weigh = cân đo.' },
                    { prompt: 'The actor appears calm.<br><em>Nghĩa: Diễn viên có vẻ bình tĩnh.</em>', answer: 'stative', explanation: 'Appear = seem.' },
                    { prompt: 'The band is appearing on TV tonight.<br><em>Nghĩa: Ban nhạc sẽ xuất hiện trên TV tối nay.</em>', answer: 'dynamic', explanation: 'Appear = xuất hiện / biểu diễn.' },
                    { prompt: 'He is being rude today.<br><em>Nghĩa: Hôm nay anh ấy đang cư xử thô lỗ.</em>', answer: 'dynamic', explanation: 'Be = hành vi tạm thời, không phải tính cách cố định.' },
                    { prompt: 'He is rude.<br><em>Nghĩa: Anh ấy thô lỗ.</em>', answer: 'stative', explanation: 'Be = trạng thái / bản chất.' },
                    { prompt: 'The museum contains many rare books.<br><em>Nghĩa: Bảo tàng chứa nhiều sách quý.</em>', answer: 'stative', explanation: 'Contain = chứa đựng.' },
                    { prompt: 'The tailor is fitting the jacket to me.<br><em>Nghĩa: Thợ may đang thử / chỉnh áo cho tôi.</em>', answer: 'dynamic', explanation: 'Fit ở đây là hành động đo chỉnh.' }
                ]
            },
            {
                title: 'Nhóm 4: Viết lại theo ngữ cảnh',
                instruction: 'Dựa vào nghĩa tiếng Việt, viết câu tiếng Anh đúng với stative hoặc dynamic verb.',
                items: [
                    { prompt: 'Tôi nghĩ anh ấy đúng.<br><em>Nghĩa: Write in English.</em>', answer: 'I think he is right.', explanation: 'Think = opinion nên dùng simple.' },
                    { prompt: 'Tôi đang nghĩ về kế hoạch.<br><em>Nghĩa: Write in English.</em>', answer: 'I am thinking about the plan.', explanation: 'Think = consider.' },
                    { prompt: 'Chúng tôi có một chiếc xe.<br><em>Nghĩa: Write in English.</em>', answer: 'We have a car.', explanation: 'Have = sở hữu.' },
                    { prompt: 'Chúng tôi đang ăn tối.<br><em>Nghĩa: Write in English.</em>', answer: 'We are having dinner.', explanation: 'Have = ăn uống.' },
                    { prompt: 'Tôi hiểu vấn đề.<br><em>Nghĩa: Write in English.</em>', answer: 'I see the problem.', explanation: 'See = hiểu / nhận ra.' },
                    { prompt: 'Tôi sẽ gặp bác sĩ ngày mai.<br><em>Nghĩa: Write in English.</em>', answer: 'I am seeing the doctor tomorrow.', explanation: 'See = have an appointment.' },
                    { prompt: 'Món súp này có vị ngon.<br><em>Nghĩa: Write in English.</em>', answer: 'This soup tastes delicious.', explanation: 'Taste = có vị.' },
                    { prompt: 'Đầu bếp đang nếm món súp.<br><em>Nghĩa: Write in English.</em>', answer: 'The chef is tasting the soup.', explanation: 'Taste = nếm thử.' },
                    { prompt: 'Cô ấy có vẻ mệt.<br><em>Nghĩa: Write in English.</em>', answer: 'She looks tired.', explanation: 'Look = có vẻ.' },
                    { prompt: 'Cô ấy đang nhìn vào bản đồ.<br><em>Nghĩa: Write in English.</em>', answer: 'She is looking at the map.', explanation: 'Look at = nhìn vào.' },
                    { prompt: 'Căn phòng này có mùi dễ chịu.<br><em>Nghĩa: Write in English.</em>', answer: 'The room smells nice.', explanation: 'Smell = có mùi.' },
                    { prompt: 'Tôi đang ngửi bông hoa.<br><em>Nghĩa: Write in English.</em>', answer: 'I am smelling the flower.', explanation: 'Smell = ngửi chủ động.' },
                    { prompt: 'Chiếc áo này vừa với tôi.<br><em>Nghĩa: Write in English.</em>', answer: 'This shirt fits me.', explanation: 'Fit = vừa / hợp.' },
                    { prompt: 'Người thợ may đang chỉnh áo cho tôi.<br><em>Nghĩa: Write in English.</em>', answer: 'The tailor is fitting the shirt for me.', explanation: 'Fit = chỉnh đo, là hành động.' },
                    { prompt: 'Anh ấy sở hữu một tiệm sách.<br><em>Nghĩa: Write in English.</em>', answer: 'He owns a bookstore.', explanation: 'Own = sở hữu.' },
                    { prompt: 'Anh ấy đang cư xử thô lỗ hôm nay.<br><em>Nghĩa: Write in English.</em>', answer: 'He is being rude today.', explanation: 'Be = hành vi tạm thời.' },
                    { prompt: 'Tôi nhớ tên của cô ấy.<br><em>Nghĩa: Write in English.</em>', answer: 'I remember her name.', explanation: 'Remember = trạng thái trí nhớ.' },
                    { prompt: 'Ban nhạc sẽ biểu diễn tối nay.<br><em>Nghĩa: Write in English.</em>', answer: 'The band is appearing tonight.', explanation: 'Appear = biểu diễn / xuất hiện.' },
                    { prompt: 'Chiếc hộp này nặng năm ký.<br><em>Nghĩa: Write in English.</em>', answer: 'This box weighs five kilos.', explanation: 'Weigh = có trọng lượng.' },
                    { prompt: 'Nước này lạnh.<br><em>Nghĩa: Write in English.</em>', answer: 'The water feels cold.', explanation: 'Feel = có cảm giác.' }
                ]
            },
            {
                title: 'Nhóm 5: Nghĩa đặc biệt và phân biệt nhanh',
                instruction: 'Chọn nghĩa đúng của động từ trong ngữ cảnh đã cho.',
                items: [
                    { prompt: 'think in “I think you are right”<br><em>Nghĩa: I think you are right.</em>', answer: 'opinion / believe', explanation: 'Think = cho rằng, không phải đang suy nghĩ.' },
                    { prompt: 'think in “I am thinking about it”<br><em>Nghĩa: I am thinking about it.</em>', answer: 'considering', explanation: 'Think = cân nhắc.' },
                    { prompt: 'have in “I have a car”<br><em>Nghĩa: I have a car.</em>', answer: 'possession', explanation: 'Have = sở hữu.' },
                    { prompt: 'have in “I am having lunch”<br><em>Nghĩa: I am having lunch.</em>', answer: 'eating', explanation: 'Have = ăn uống / trải nghiệm.' },
                    { prompt: 'see in “I see your point”<br><em>Nghĩa: I see your point.</em>', answer: 'understand', explanation: 'See = hiểu / nhận ra.' },
                    { prompt: 'see in “I am seeing the doctor”<br><em>Nghĩa: I am seeing the doctor.</em>', answer: 'meeting / having an appointment', explanation: 'See = gặp theo lịch hẹn.' },
                    { prompt: 'taste in “The soup tastes salty”<br><em>Nghĩa: The soup tastes salty.</em>', answer: 'has a taste', explanation: 'Taste = có vị.' },
                    { prompt: 'taste in “The chef is tasting the soup”<br><em>Nghĩa: The chef is tasting the soup.</em>', answer: 'sample / try', explanation: 'Taste = nếm thử.' },
                    { prompt: 'smell in “The room smells bad”<br><em>Nghĩa: The room smells bad.</em>', answer: 'gives off an odor', explanation: 'Smell = có mùi.' },
                    { prompt: 'smell in “She is smelling the flowers”<br><em>Nghĩa: She is smelling the flowers.</em>', answer: 'using the nose', explanation: 'Smell = ngửi.' },
                    { prompt: 'look in “You look tired”<br><em>Nghĩa: You look tired.</em>', answer: 'seem / appear', explanation: 'Look = trông có vẻ.' },
                    { prompt: 'look in “She is looking at the map”<br><em>Nghĩa: She is looking at the map.</em>', answer: 'directing the eyes', explanation: 'Look at = nhìn vào.' },
                    { prompt: 'feel in “I feel tired”<br><em>Nghĩa: I feel tired.</em>', answer: 'experience a feeling', explanation: 'Feel = cảm thấy.' },
                    { prompt: 'feel in “I am feeling the cloth”<br><em>Nghĩa: I am feeling the cloth.</em>', answer: 'touching / checking', explanation: 'Feel = sờ / cảm nhận bằng tay.' },
                    { prompt: 'appear in “He appears calm”<br><em>Nghĩa: He appears calm.</em>', answer: 'seems', explanation: 'Appear = có vẻ.' },
                    { prompt: 'appear in “The singer is appearing on stage”<br><em>Nghĩa: The singer is appearing on stage.</em>', answer: 'performing / showing up', explanation: 'Appear = xuất hiện / biểu diễn.' },
                    { prompt: 'weigh in “This bag weighs 5 kilos”<br><em>Nghĩa: This bag weighs 5 kilos.</em>', answer: 'has a weight of', explanation: 'Weigh = có trọng lượng.' },
                    { prompt: 'weigh in “The nurse is weighing the baby”<br><em>Nghĩa: The nurse is weighing the baby.</em>', answer: 'measuring weight', explanation: 'Weigh = cân đo.' },
                    { prompt: 'be in “He is rude”<br><em>Nghĩa: He is rude.</em>', answer: 'state / character', explanation: 'Be = trạng thái hoặc bản chất.' },
                    { prompt: 'be in “He is being rude”<br><em>Nghĩa: He is being rude.</em>', answer: 'temporary behavior', explanation: 'Be + being = hành vi tạm thời lúc nói.' }
                ]
            }
        ],
        checkpoint: [
            'Stative verbs thường không dùng continuous khi nói về trạng thái, suy nghĩ, cảm xúc hoặc sở hữu.',
            'Nhiều verb đổi nghĩa khi chuyển sang continuous: think, have, see, smell, taste, feel, look, appear, be.',
            'Nếu câu nói về hành động tạm thời, trải nghiệm, hoặc lịch hẹn, continuous có thể đúng.',
            'Khi làm bài, luôn hỏi: đây là trạng thái hay là hành động / quá trình?'
        ]
    },
    'semi-modals': {
        source: '60 câu luyện Semi-modals · B2 bao phủ had better, would rather, needn’t, needn’t have và dare trong ngữ cảnh thực tế.',
        sections: [
            {
                title: 'Nhóm 1: Chọn semi-modal phù hợp',
                instruction: 'Điền had better, would rather, needn’t, needn’t have hoặc dare vào chỗ trống.',
                items: [
                    { prompt: `You ___ leave now if you want to catch the train.<br><em>Nghĩa: Nếu muốn kịp tàu, bạn tốt hơn nên đi ngay bây giờ.</em>`, answer: `had better`, explanation: `Had better dùng để đưa ra lời khuyên có hàm ý hậu quả.` },
                    { prompt: `I ___ stay home tonight than go to the party.<br><em>Nghĩa: Tối nay tôi thà ở nhà hơn là đi tiệc.</em>`, answer: `would rather`, explanation: `Would rather diễn tả sở thích của chính người nói.` },
                    { prompt: `You ___ speak so loudly in the library.<br><em>Nghĩa: Bạn không cần nói to trong thư viện.</em>`, answer: `needn’t`, explanation: `Needn’t = không cần.` },
                    { prompt: `She ___ have bought that coat; it was on sale yesterday.<br><em>Nghĩa: Cô ấy lẽ ra không cần mua cái áo khoác đó.</em>`, answer: `needn’t have`, explanation: `Needn’t have + V3 = đã làm nhưng thật ra không cần.` },
                    { prompt: `How ___ you talk to me like that!<br><em>Nghĩa: Sao bạn dám nói với tôi như thế!</em>`, answer: `dare`, explanation: `How dare you! là mẫu cố định thể hiện sự phẫn nộ.` },
                    { prompt: `We ___ be late for the meeting.<br><em>Nghĩa: Chúng ta tốt hơn nên đừng đến muộn cuộc họp.</em>`, answer: `had better not`, explanation: `Had better not là dạng phủ định của had better.` },
                    { prompt: `I ___ drink coffee after 6 p.m.; it keeps me awake.<br><em>Nghĩa: Tôi thà không uống cà phê sau 6 giờ tối.</em>`, answer: `would rather not`, explanation: `Would rather not dùng khi người nói không thích làm việc gì.` },
                    { prompt: `You ___ call him right now; he is already sleeping.<br><em>Nghĩa: Bạn không cần gọi cho anh ấy ngay lúc này.</em>`, answer: `needn’t`, explanation: `Needn’t = không cần làm vì không có yêu cầu hay bắt buộc.` },
                    { prompt: `He ___ open the window; the room is already cool.<br><em>Nghĩa: Anh ấy không cần mở cửa sổ; phòng đã mát rồi.</em>`, answer: `needn’t`, explanation: `Needn’t dùng khi hành động là không cần thiết.` },
                    { prompt: `We ___ hurry; the movie starts in 30 minutes.<br><em>Nghĩa: Chúng ta tốt hơn nên nhanh lên; phim bắt đầu sau 30 phút.</em>`, answer: `had better`, explanation: `Had better nhấn lời khuyên mang tính cảnh báo nhẹ.` },
                    { prompt: `I ___ go to the beach than stay in the office all day.<br><em>Nghĩa: Tôi thà đi biển hơn là ngồi văn phòng cả ngày.</em>`, answer: `would rather`, explanation: `Would rather + V bare diễn tả lựa chọn của chính chủ ngữ.` },
                    { prompt: `The child ___ touch the stove.<br><em>Nghĩa: Đứa trẻ tốt hơn không nên chạm vào bếp.</em>`, answer: `had better not`, explanation: `Had better not + V là cảnh báo rõ ràng.` },
                    { prompt: `You ___ pay now if you want to avoid a fine.<br><em>Nghĩa: Bạn tốt hơn nên trả tiền ngay nếu muốn tránh phạt.</em>`, answer: `had better`, explanation: `Had better dùng khi có hậu quả nếu không làm.` },
                    { prompt: `I ___ read the report first; I already know the conclusion.<br><em>Nghĩa: Tôi không cần đọc báo cáo trước; tôi đã biết kết luận rồi.</em>`, answer: `needn’t`, explanation: `Needn’t = không bắt buộc phải làm.` },
                    { prompt: `He ___ have sent the email twice; one time was enough.<br><em>Nghĩa: Anh ấy lẽ ra không cần gửi email hai lần.</em>`, answer: `needn’t have`, explanation: `Needn’t have + V3 nhấn việc đã làm thừa.` }
                ]
            },
            {
                title: 'Nhóm 2: Viết lại câu với had better / would rather',
                instruction: 'Viết lại theo đúng nghĩa tiếng Việt.',
                items: [
                    { prompt: 'Bạn nên khóa cửa trước khi đi ngủ.<br><em>Nghĩa: Write in English.</em>', answer: 'You had better lock the door before going to bed.', explanation: 'Had better is used for strong advice.' },
                    { prompt: 'Tôi thà ở nhà tối nay.<br><em>Nghĩa: Write in English.</em>', answer: 'I would rather stay home tonight.', explanation: 'Would rather + V bare is used for the speaker’s preference.' },
                    { prompt: 'Tôi thà bạn đừng hút thuốc ở đây.<br><em>Nghĩa: Write in English.</em>', answer: 'I would rather you didn’t smoke here.', explanation: 'Would rather + S + past simple is used when the subject is someone else.' },
                    { prompt: 'Chúng tôi thà bạn đến sớm hơn.<br><em>Nghĩa: Write in English.</em>', answer: 'We would rather you came earlier.', explanation: 'Past form after would rather can express preference for another person.' },
                    { prompt: 'Tôi thà bạn đã nói sự thật.<br><em>Nghĩa: Write in English.</em>', answer: 'I would rather you had told the truth.', explanation: 'Would rather + S + had V3 is used for past regret.' },
                    { prompt: 'Bạn tốt hơn nên xin lỗi ngay bây giờ.<br><em>Nghĩa: Write in English.</em>', answer: 'You had better apologize right now.', explanation: 'Had better is a warning-like suggestion.' },
                    { prompt: 'Anh ấy thà đi bộ hơn là đi xe buýt.<br><em>Nghĩa: Write in English.</em>', answer: 'He would rather walk than take the bus.', explanation: 'Would rather + V bare ... than ... shows preference between two actions.' },
                    { prompt: 'Tôi thà bạn không kể chuyện này cho ai.<br><em>Nghĩa: Write in English.</em>', answer: 'I would rather you did not tell anyone about this.', explanation: 'The past form after would rather refers to another person’s action.' },
                    { prompt: 'Bạn nên kiểm tra lại email trước khi gửi.<br><em>Nghĩa: Write in English.</em>', answer: 'You had better check the email before sending it.', explanation: 'Had better fits advice with a consequence if ignored.' },
                    { prompt: 'Tôi thà uống trà hơn cà phê.<br><em>Nghĩa: Write in English.</em>', answer: 'I would rather drink tea than coffee.', explanation: 'Would rather + bare infinitive is the natural pattern.' },
                    { prompt: 'Bạn nên học ngay bây giờ nếu không muốn trượt kỳ thi.<br><em>Nghĩa: Write in English.</em>', answer: 'You had better study now if you do not want to fail the exam.', explanation: 'Had better can express urgent advice linked to a consequence.' },
                    { prompt: 'Tôi thà ở nhà hơn là ra ngoài khi trời mưa.<br><em>Nghĩa: Write in English.</em>', answer: 'I would rather stay at home than go out when it rains.', explanation: 'Use would rather + V bare for the speaker’s own preference.' },
                    { prompt: 'Cô ấy thà chúng ta bắt đầu sớm hơn.<br><em>Nghĩa: Write in English.</em>', answer: 'She would rather we started earlier.', explanation: 'When the subject is someone else, use past simple after would rather.' },
                    { prompt: 'Tôi thà bạn đã gọi cho tôi sớm hơn.<br><em>Nghĩa: Write in English.</em>', answer: 'I would rather you had called me earlier.', explanation: 'Past perfect after would rather shows regret about a past action.' },
                    { prompt: 'Bạn tốt hơn nên nói nhỏ hơn ở thư viện.<br><em>Nghĩa: Write in English.</em>', answer: 'You had better speak more quietly in the library.', explanation: 'Had better is appropriate for behavior with possible consequences.' }
                ]
            },
            {
                title: 'Nhóm 3: Chọn đúng mẫu would rather',
                instruction: 'Xác định mẫu đúng theo ngữ cảnh và điền câu hoàn chỉnh.',
                items: [
                    { prompt: 'I prefer tea to coffee.<br><em>Nghĩa: Tôi thích trà hơn cà phê.</em>', answer: 'I would rather drink tea than coffee.', explanation: 'Same subject + two choices -> would rather + V bare + than.' },
                    { prompt: 'He prefers staying in.<br><em>Nghĩa: Anh ấy thích ở nhà hơn.</em>', answer: 'He would rather stay in.', explanation: 'For the same subject, use would rather + bare infinitive.' },
                    { prompt: 'She wants us to leave now.<br><em>Nghĩa: Cô ấy muốn chúng ta rời đi ngay.</em>', answer: 'She would rather we left now.', explanation: 'Different subject -> past simple after would rather.' },
                    { prompt: 'I want him to stop talking.<br><em>Nghĩa: Tôi muốn anh ấy ngừng nói.</em>', answer: 'I would rather he stopped talking.', explanation: 'Use past simple with another subject to show preference.' },
                    { prompt: 'I regret that you did not come yesterday.<br><em>Nghĩa: Tôi tiếc là bạn đã không đến hôm qua.</em>', answer: 'I would rather you had come yesterday.', explanation: 'Past perfect after would rather shows regret about the past.' },
                    { prompt: 'We prefer to wait until tomorrow.<br><em>Nghĩa: Chúng tôi thích đợi đến ngày mai hơn.</em>', answer: 'We would rather wait until tomorrow.', explanation: 'Would rather + V bare works for the speaker’s own action.' },
                    { prompt: 'They prefer that the meeting starts earlier.<br><em>Nghĩa: Họ muốn cuộc họp bắt đầu sớm hơn.</em>', answer: 'They would rather the meeting started earlier.', explanation: 'Another subject requires past simple form.' },
                    { prompt: 'I do not want you to be late.<br><em>Nghĩa: Tôi không muốn bạn đến muộn.</em>', answer: 'I would rather you were on time.', explanation: 'Would rather + S + past can express a preference about another person.' },
                    { prompt: 'He prefers that I do not drive at night.<br><em>Nghĩa: Anh ấy thích tôi không lái xe ban đêm.</em>', answer: 'He would rather I did not drive at night.', explanation: 'Past simple after would rather is the standard pattern here.' },
                    { prompt: 'I prefer to stay quiet in meetings.<br><em>Nghĩa: Tôi thích im lặng trong các cuộc họp.</em>', answer: 'I would rather stay quiet in meetings.', explanation: 'Same subject -> bare infinitive.' },
                    { prompt: 'She prefers that her son studies abroad.<br><em>Nghĩa: Cô ấy muốn con trai mình học ở nước ngoài.</em>', answer: 'She would rather her son studied abroad.', explanation: 'Another subject -> past simple.' },
                    { prompt: 'I regret that I was not more careful.<br><em>Nghĩa: Tôi tiếc là mình đã không cẩn thận hơn.</em>', answer: 'I would rather I had been more careful.', explanation: 'Past regret -> would rather + had V3.' },
                    { prompt: 'He prefers to work alone.<br><em>Nghĩa: Anh ấy thích làm việc một mình.</em>', answer: 'He would rather work alone.', explanation: 'Would rather + V bare expresses the preference directly.' },
                    { prompt: 'I want you to sit down.<br><em>Nghĩa: Tôi muốn bạn ngồi xuống.</em>', answer: 'I would rather you sat down.', explanation: 'Past simple after would rather expresses preference for another person.' },
                    { prompt: 'They regret that they spent too much money.<br><em>Nghĩa: Họ tiếc là đã tiêu quá nhiều tiền.</em>', answer: 'They would rather they had not spent too much money.', explanation: 'Past perfect after would rather shows a past situation wished differently.' }
                ]
            },
            {
                title: 'Nhóm 4: Mixed challenge',
                instruction: 'Điền từ hoặc cụm từ phù hợp nhất: had better, would rather, needn’t, needn’t have, dare.',
                items: [
                    { prompt: `You ___ return the book today; the library is closed tomorrow.<br><em>Nghĩa: Bạn nên trả sách hôm nay; ngày mai thư viện đóng cửa.</em>`, answer: `had better`, explanation: `Had better is the strongest natural advice here.` },
                    { prompt: `I ___ sleep early than stay up late tonight.<br><em>Nghĩa: Tối nay tôi thà ngủ sớm hơn là thức khuya.</em>`, answer: `would rather`, explanation: `Would rather + V bare fits a personal preference.` },
                    { prompt: `You ___ worry; the results will come next week.<br><em>Nghĩa: Bạn không cần lo; kết quả sẽ có vào tuần tới.</em>`, answer: `needn’t`, explanation: `Needn’t means not necessary.` },
                    { prompt: `She ___ bought a new phone; her old one still works well.<br><em>Nghĩa: Cô ấy lẽ ra không cần mua điện thoại mới.</em>`, answer: `needn’t have`, explanation: `Needn’t have + V3 = did it unnecessarily.` },
                    { prompt: `___ I ask a question?<br><em>Nghĩa: Tôi dám hỏi một câu không?</em>`, answer: `Dare`, explanation: `Dare can function like a semi-modal in questions, though it is less common in everyday speech.` },
                    { prompt: `We ___ be rude to the guests.<br><em>Nghĩa: Chúng ta tốt hơn đừng cư xử thô lỗ với khách.</em>`, answer: `had better not`, explanation: `Had better not gives a warning against a bad action.` },
                    { prompt: `He ___ leave the office now; he already finished his work.<br><em>Nghĩa: Anh ấy không cần rời văn phòng bây giờ; anh ấy đã xong việc rồi.</em>`, answer: `needn’t`, explanation: `Needn’t shows the action is unnecessary.` },
                    { prompt: `I ___ tell her the truth than keep lying.<br><em>Nghĩa: Tôi thà nói thật với cô ấy hơn là tiếp tục nói dối.</em>`, answer: `would rather`, explanation: `Would rather expresses preference between alternatives.` },
                    { prompt: `They ___ have booked the hotel earlier; now it is full.<br><em>Nghĩa: Họ lẽ ra không cần đặt khách sạn sớm hơn; bây giờ nó đã kín chỗ.</em>`, answer: `needn’t have`, explanation: `Needn’t have + V3 keeps the focus on unnecessary past action.` },
                    { prompt: `You ___ speak so fast if you want me to understand.<br><em>Nghĩa: Bạn tốt hơn nên nói chậm hơn nếu muốn tôi hiểu.</em>`, answer: `had better not`, explanation: `Had better not can warn against a style of action that causes problems.` },
                    { prompt: `I ___ go home now; I am exhausted.<br><em>Nghĩa: Tôi thà về nhà ngay bây giờ; tôi kiệt sức rồi.</em>`, answer: `would rather`, explanation: `Would rather + V bare is natural for self-preference.` },
                    { prompt: `You ___ have cleaned the room already; it is still dirty.<br><em>Nghĩa: Bạn lẽ ra không cần dọn phòng trước; nó vẫn còn bẩn.</em>`, answer: `needn’t have`, explanation: `Needn’t have + V3 means the past action was unnecessary.` },
                    { prompt: `I ___ you do that without asking first.<br><em>Nghĩa: Tôi không dám để bạn làm vậy mà không hỏi trước.</em>`, answer: `dare not`, explanation: `Dare can behave like a semi-modal in negative forms.` },
                    { prompt: `She ___ miss the train; it is the last one tonight.<br><em>Nghĩa: Cô ấy tốt hơn không nên lỡ chuyến tàu; đó là chuyến cuối hôm nay.</em>`, answer: `had better not`, explanation: `Had better not is used when there may be a negative result.` },
                    { prompt: `We ___ attend the meeting if the manager is there.<br><em>Nghĩa: Chúng tôi không cần tham dự cuộc họp nếu quản lý có mặt.</em>`, answer: `needn’t`, explanation: `Needn’t means there is no obligation.` }
                ]
            }
        ],
        checkpoint: [
            'Had better = lời khuyên mạnh, thường kèm hàm ý hậu quả nếu không làm.',
            'Would rather + V bare dùng cho sở thích của chính chủ ngữ.',
            'Would rather + S + past simple dùng khi muốn người khác làm theo ý mình.',
            'Would rather + S + had V3 dùng cho tiếc nuối về quá khứ.',
            'Needn’t = không cần; needn’t have + V3 = đã làm nhưng không cần.',
            'Dare có thể xuất hiện trong câu hỏi/phủ định hoặc cấu trúc cảm thán.'
        ]
    },
    'modifier-errors': {
        source: '40 câu luyện Misplaced Modifiers · C1 bao phủ sửa lỗi vị trí modifier, dangling modifier và adverbs of focus.',
        sections: [
            {
                title: 'Nhóm 1: Sửa misplaced modifier',
                instruction: 'Viết lại câu để modifier bám đúng vào từ/cụm từ cần bổ nghĩa.',
                items: [
                    { prompt: `She almost drove her kids to school every day.<br><em>Nghĩa: Cô ấy gần như ngày nào cũng lái xe chở con đến trường.</em>`, answer: `She drove her kids to school almost every day.`, explanation: `Almost should modify every day, not drove.` },
                    { prompt: `He served sandwiches to the children on paper plates.<br><em>Nghĩa: Anh ấy dùng đĩa giấy để phục vụ bánh sandwich cho bọn trẻ.</em>`, answer: `He served sandwiches on paper plates to the children.`, explanation: `On paper plates should modify sandwiches, not children.` },
                    { prompt: `I saw a man with a telescope in the park.<br><em>Nghĩa: Tôi dùng kính thiên văn để nhìn thấy một người đàn ông trong công viên.</em>`, answer: `Using a telescope, I saw a man in the park.`, explanation: `Rewrite to make the instrument clearly belong to the speaker.` },
                    { prompt: `She found a wallet in the street with a red cover.<br><em>Nghĩa: Cô ấy tìm thấy một chiếc ví có bìa đỏ trên đường.</em>`, answer: `She found a wallet with a red cover in the street.`, explanation: `With a red cover should attach to wallet.` },
                    { prompt: `The teacher handed out the papers to the students wearing gloves.<br><em>Nghĩa: Cô giáo đeo găng tay khi phát bài cho học sinh.</em>`, answer: `Wearing gloves, the teacher handed out the papers to the students.`, explanation: `The modifier should describe the teacher, not the students.` },
                    { prompt: `We saw the boy riding our bikes.<br><em>Nghĩa: Chúng tôi thấy cậu bé đang đi xe đạp của chúng tôi.</em>`, answer: `We saw the boy riding a bike.`, explanation: `Our bikes wrongly suggests the boy owns them; the sentence should be clarified.` },
                    { prompt: `The man was arrested in the morning driving home.<br><em>Nghĩa: Người đàn ông bị bắt vào buổi sáng khi đang lái xe về nhà.</em>`, answer: `Driving home in the morning, the man was arrested.`, explanation: `Driving home must be placed near the actor who was driving.` },
                    { prompt: `They served pizza to the children in boxes.<br><em>Nghĩa: Họ phục vụ pizza trong hộp cho bọn trẻ.</em>`, answer: `They served pizza in boxes to the children.`, explanation: `In boxes should modify pizza.` },
                    { prompt: `The company will only hire engineers from Hanoi.<br><em>Nghĩa: Công ty sẽ chỉ tuyển kỹ sư từ Hà Nội.</em>`, answer: `The company will hire only engineers from Hanoi.`, explanation: `Only should modify engineers if that is the intended meaning.` },
                    { prompt: `He just told me that he was leaving.<br><em>Nghĩa: Anh ấy vừa nói với tôi rằng anh ấy sắp đi.</em>`, answer: `He told me just now that he was leaving.`, explanation: `Just may be ambiguous; move it to show recent time clearly.` }
                ]
            },
            {
                title: 'Nhóm 2: Vị trí của only / almost / nearly / just',
                instruction: 'Sắp xếp lại câu để nghĩa rõ ràng và tự nhiên hơn.',
                items: [
                    { prompt: `She only ate vegetables on weekends.<br><em>Nghĩa: Cô ấy chỉ ăn rau vào cuối tuần.</em>`, answer: `She ate vegetables only on weekends.`, explanation: `Only should be placed before the time phrase to limit when she ate vegetables.` },
                    { prompt: `I almost finished the report yesterday.<br><em>Nghĩa: Hôm qua tôi suýt nữa thì hoàn thành báo cáo.</em>`, answer: `I almost finished the report yesterday.`, explanation: `Almost correctly modifies finished here, meaning nearly completed.` },
                    { prompt: `He nearly works every day from home.<br><em>Nghĩa: Anh ấy gần như làm việc ở nhà mỗi ngày.</em>`, answer: `He works from home nearly every day.`, explanation: `Nearly should modify every day, not works.` },
                    { prompt: `We just meet the client in London.<br><em>Nghĩa: Chúng tôi vừa gặp khách hàng ở London.</em>`, answer: `We just met the client in London.`, explanation: `Just for recent past needs a past tense verb.` },
                    { prompt: `The company only will approve one project.<br><em>Nghĩa: Công ty chỉ phê duyệt một dự án.</em>`, answer: `The company will approve only one project.`, explanation: `Only should modify one project.` },
                    { prompt: `She nearly won the competition last year.<br><em>Nghĩa: Năm ngoái cô ấy suýt thắng cuộc thi.</em>`, answer: `She nearly won the competition last year.`, explanation: `Nearly correctly modifies won, meaning almost won.` },
                    { prompt: `I just saw her at the station.<br><em>Nghĩa: Tôi vừa thấy cô ấy ở nhà ga.</em>`, answer: `I just saw her at the station.`, explanation: `Just can mean recently and is fine before the verb here.` },
                    { prompt: `He only can speak English.<br><em>Nghĩa: Anh ấy chỉ có thể nói tiếng Anh.</em>`, answer: `He can only speak English.`, explanation: `Only should go with can to modify the whole verb phrase.` },
                    { prompt: `They almost are ready to leave.<br><em>Nghĩa: Họ gần như đã sẵn sàng để đi.</em>`, answer: `They are almost ready to leave.`, explanation: `Almost should modify ready.` },
                    { prompt: `We just have finished dinner.<br><em>Nghĩa: Chúng tôi vừa ăn tối xong.</em>`, answer: `We have just finished dinner.`, explanation: `Just normally comes after the auxiliary in present perfect.` }
                ]
            },
            {
                title: 'Nhóm 3: Sửa dangling modifiers',
                instruction: 'Viết lại câu để chủ ngữ logic xuất hiện rõ ràng.',
                items: [
                    { prompt: `Walking to school, the rain started.<br><em>Nghĩa: Khi đang đi học, trời bắt đầu mưa.</em>`, answer: `Walking to school, I was caught in the rain.`, explanation: `The subject walking must be the person, not the rain.` },
                    { prompt: `After reading the letter, the tears came to her eyes.<br><em>Nghĩa: Sau khi đọc lá thư, cô ấy rơi nước mắt.</em>`, answer: `After reading the letter, she had tears in her eyes.`, explanation: `The sentence needs a clear subject who read the letter.` },
                    { prompt: `To improve the results, a new method was introduced.<br><em>Nghĩa: Để cải thiện kết quả, một phương pháp mới đã được đưa ra.</em>`, answer: `To improve the results, we introduced a new method.`, explanation: `The actor who improves the results must be explicit.` },
                    { prompt: `Having studied hard, the exam was easy.<br><em>Nghĩa: Vì đã học chăm chỉ, bài thi thấy dễ.</em>`, answer: `Having studied hard, I found the exam easy.`, explanation: `The person who studied must be the subject of the clause.` },
                    { prompt: `While packing the bag, the phone rang.<br><em>Nghĩa: Khi đang đóng túi, điện thoại reo.</em>`, answer: `While I was packing the bag, the phone rang.`, explanation: `The person packing should be identified.` },
                    { prompt: `Covered in dust, the bookshelf looked old.<br><em>Nghĩa: Bị phủ bụi, giá sách trông cũ.</em>`, answer: `Covered in dust, the bookshelf looked old.`, explanation: `This one is actually correct because the bookshelf can be covered in dust.` },
                    { prompt: `After finishing the project, the presentation began.<br><em>Nghĩa: Sau khi hoàn thành dự án, bài thuyết trình bắt đầu.</em>`, answer: `After finishing the project, we began the presentation.`, explanation: `The finite action needs a human subject.` },
                    { prompt: `Driving through the city, the lights were beautiful.<br><em>Nghĩa: Khi lái xe qua thành phố, ánh đèn rất đẹp.</em>`, answer: `Driving through the city, we saw the beautiful lights.`, explanation: `The people driving must be the subject.` },
                    { prompt: `Before entering the room, the shoes were removed.<br><em>Nghĩa: Trước khi vào phòng, giày được cởi ra.</em>`, answer: `Before entering the room, we removed our shoes.`, explanation: `The people entering must remove the shoes.` },
                    { prompt: `Looking at the photograph, the memories came back.<br><em>Nghĩa: Nhìn bức ảnh, ký ức quay về.</em>`, answer: `Looking at the photograph, I remembered the memories.`, explanation: `A dangling modifier needs a clear subject who is looking.` }
                ]
            },
            {
                title: 'Nhóm 4: Mixed correction',
                instruction: 'Viết lại câu để nghĩa không còn mơ hồ.',
                items: [
                    { prompt: `She served the children cookies on a plate.<br><em>Nghĩa: Cô ấy phục vụ bánh quy cho lũ trẻ trên một cái đĩa.</em>`, answer: `She served cookies on a plate to the children.`, explanation: `On a plate should modify cookies.` },
                    { prompt: `I watched a movie with my sister in the evening.<br><em>Nghĩa: Tối hôm đó tôi xem phim với em gái.</em>`, answer: `In the evening, I watched a movie with my sister.`, explanation: `Move the time modifier to the front for clarity.` },
                    { prompt: `Only John called Mary yesterday.<br><em>Nghĩa: Chỉ John đã gọi Mary hôm qua.</em>`, answer: `Only John called Mary yesterday.`, explanation: `Only correctly modifies John here.` },
                    { prompt: `The detective found the man in the alley with a flashlight.<br><em>Nghĩa: Thám tử dùng đèn pin để tìm thấy người đàn ông trong con hẻm.</em>`, answer: `Using a flashlight, the detective found the man in the alley.`, explanation: `The flashlight belongs to the detective, not the man.` },
                    { prompt: `We almost saw the entire city from the hill.<br><em>Nghĩa: Chúng tôi suýt nhìn thấy toàn bộ thành phố từ trên đồi.</em>`, answer: `We almost saw the entire city from the hill.`, explanation: `Almost correctly modifies saw if the meaning is nearly succeeded.` },
                    { prompt: `The boy carried the basket wearing a blue shirt.<br><em>Nghĩa: Cậu bé mặc áo xanh và mang giỏ.</em>`, answer: `Wearing a blue shirt, the boy carried the basket.`, explanation: `The clothing modifier must attach to the boy.` },
                    { prompt: `Nearly all the students finished the test on time.<br><em>Nghĩa: Hầu như tất cả học sinh hoàn thành bài thi đúng giờ.</em>`, answer: `Nearly all the students finished the test on time.`, explanation: `Nearly all is correctly placed before the noun phrase.` },
                    { prompt: `He told me he had just arrived from Hanoi.<br><em>Nghĩa: Anh ấy nói với tôi là anh ấy vừa đến từ Hà Nội.</em>`, answer: `He told me he had just arrived from Hanoi.`, explanation: `Just correctly modifies arrived in the past perfect context.` },
                    { prompt: `I only want one thing from you: honesty.<br><em>Nghĩa: Tôi chỉ muốn một điều từ bạn: sự trung thực.</em>`, answer: `I only want one thing from you: honesty.`, explanation: `Only correctly modifies want one thing.` },
                    { prompt: `Running fast, the finish line was close.<br><em>Nghĩa: Chạy nhanh, vạch đích ở gần.</em>`, answer: `Running fast, I was close to the finish line.`, explanation: `The runner, not the finish line, must be the subject.` }
                ]
            }
        ],
        checkpoint: [
            'Modifier phải đứng gần từ/cụm từ nó bổ nghĩa.',
            'Only, almost, nearly, just dễ làm đổi nghĩa nếu đặt sai vị trí.',
            'Dangling modifier cần có chủ ngữ logic rõ ràng.',
            'Khi sửa câu, ưu tiên rõ nghĩa trước, rồi mới giữ nhịp câu.'
        ]
    },
    'past-simple': {
        source: 'Bài luyện Past Simple: sự việc đã hoàn tất, thói quen quá khứ và trình tự kể chuyện.',
        sections: [
            {
                title: 'Nhận diện các cách dùng chính',
                instruction: 'Đọc câu ví dụ, ghép với cách dùng của past simple và xem giải thích.',
                items: [
                    {
                        prompt: '<strong>1. Việc đã kết thúc:</strong><br>I visited Da Nang last summer.<br><em>Tôi đã đi Đà Nẵng vào mùa hè năm ngoái.</em>',
                        answer: 'Hành động đã hoàn tất trong quá khứ',
                        explanation: 'last summer là mốc thời gian đã đóng nên dùng past simple.'
                    },
                    {
                        prompt: '<strong>2. Thói quen trong quá khứ:</strong><br>When I was a child, I played outside every day.<br><em>Khi còn nhỏ, tôi chơi ngoài trời mỗi ngày.</em>',
                        answer: 'Thói quen quá khứ',
                        explanation: 'every day + bối cảnh quá khứ cho thấy hành động lặp lại trong quá khứ.'
                    },
                    {
                        prompt: '<strong>3. Trình tự hành động:</strong><br>She opened the door, walked in, and sat down.<br><em>Cô ấy mở cửa, đi vào rồi ngồi xuống.</em>',
                        answer: 'Chuỗi hành động nối tiếp',
                        explanation: 'Past simple rất hợp để kể các sự việc nối nhau theo trình tự.'
                    },
                    {
                        prompt: '<strong>4. Sự kiện lịch sử:</strong><br>The Titanic sank in 1912.<br><em>Con tàu Titanic chìm vào năm 1912.</em>',
                        answer: 'Sự kiện lịch sử / факт quá khứ',
                        explanation: '1912 là mốc quá khứ đã kết thúc, nên cần past simple.'
                    },
                    {
                        prompt: '<strong>5. Mốc thời gian rõ ràng:</strong><br>He finished the report at 5 p.m.<br><em>Anh ấy hoàn thành báo cáo lúc 5 giờ chiều.</em>',
                        answer: 'Hành động hoàn tất tại mốc quá khứ',
                        explanation: 'at 5 p.m. xác định chính xác thời điểm xảy ra trong quá khứ.'
                    }
                ]
            }
        ],
        checkpoint: [
            'Past simple dùng cho việc đã xong, mốc thời gian đã đóng hoặc kể chuyện quá khứ.',
            'Sau did / did not, động từ quay về nguyên mẫu.',
            'Nếu muốn nói hành động đang diễn ra trong quá khứ, dùng past continuous thay vì past simple.'
        ]
    },
    'past-continuous': {
        source: 'Bài luyện Past Continuous: hành động đang diễn ra, bối cảnh và hành động chen vào.',
        sections: [
            {
                title: 'Nhận diện các cách dùng chính',
                instruction: 'Đọc câu ví dụ, ghép với cách dùng của past continuous và xem giải thích.',
                items: [
                    {
                        prompt: '<strong>1. Đang diễn ra tại một thời điểm:</strong><br>I was studying at 9 p.m. yesterday.<br><em>Tối qua lúc 9 giờ, tôi đang học bài.</em>',
                        answer: 'Hành động đang diễn ra trong quá khứ',
                        explanation: 'at 9 p.m. yesterday là một thời điểm cụ thể trong quá khứ.'
                    },
                    {
                        prompt: '<strong>2. Hành động bị chen vào:</strong><br>She was cooking when I arrived.<br><em>Cô ấy đang nấu ăn thì tôi đến.</em>',
                        answer: 'Bối cảnh + hành động chen vào',
                        explanation: 'was cooking tạo nền, còn when I arrived là hành động ngắn chen vào.'
                    },
                    {
                        prompt: '<strong>3. Hai hành động song song:</strong><br>While they were watching TV, I was finishing my homework.<br><em>Trong lúc họ xem TV, tôi đang làm xong bài tập.</em>',
                        answer: 'Hai hành động song song',
                        explanation: 'while thường đi với hai hành động kéo dài xảy ra cùng lúc.'
                    },
                    {
                        prompt: '<strong>4. Tình huống tạm thời trong quá khứ:</strong><br>He was living in Hanoi at that time.<br><em>Lúc đó anh ấy đang sống ở Hà Nội.</em>',
                        answer: 'Tình huống tạm thời',
                        explanation: 'at that time cho thấy đây là trạng thái tạm thời ở quá khứ.'
                    },
                    {
                        prompt: '<strong>5. Thói quen gây khó chịu trong quá khứ:</strong><br>The baby was always crying at night.<br><em>Đứa bé lúc nào cũng khóc vào ban đêm.</em>',
                        answer: 'Thói quen gây phiền trong quá khứ',
                        explanation: 'always + past continuous dùng để nhấn sự lặp lại gây bực.'
                    }
                ]
            }
        ],
        checkpoint: [
            'Past continuous thường đi với when, while, at that time, all night, yesterday at...',
            'Dùng để tạo bối cảnh quá khứ hoặc mô tả hành động đang diễn ra.',
            'Nếu chỉ kể một hành động đã xong, dùng past simple sẽ tự nhiên hơn.'
        ]
    },
    'present-perfect-continuous': {
        source: 'Bài luyện Present Perfect Continuous: nhấn quá trình, thời lượng và dấu hiệu còn liên quan tới hiện tại.',
        sections: [
            {
                title: 'Nhận diện các cách dùng chính',
                instruction: 'Đọc câu ví dụ, ghép với cách dùng của present perfect continuous và xem giải thích.',
                items: [
                    {
                        prompt: '<strong>1. Nhấn thời lượng:</strong><br>I have been studying for three hours.<br><em>Tôi đã học suốt ba tiếng.</em>',
                        answer: 'Nhấn thời lượng của hành động',
                        explanation: 'for three hours cho thấy trọng tâm là hành động kéo dài bao lâu.'
                    },
                    {
                        prompt: '<strong>2. Kết quả hiện tại từ quá trình:</strong><br>She is tired because she has been working all day.<br><em>Cô ấy mệt vì đã làm việc cả ngày.</em>',
                        answer: 'Quá trình tạo ra kết quả hiện tại',
                        explanation: 'has been working giải thích nguyên nhân của trạng thái hiện tại là tired.'
                    },
                    {
                        prompt: '<strong>3. Hành động còn tiếp diễn đến hiện tại:</strong><br>It has been raining since morning.<br><em>Trời đã mưa từ sáng đến giờ.</em>',
                        answer: 'Hành động kéo dài đến hiện tại',
                        explanation: 'since morning cho thấy hành động bắt đầu ở quá khứ và còn kéo dài.'
                    },
                    {
                        prompt: '<strong>4. Chú ý vào quá trình:</strong><br>We have been waiting for you.<br><em>Chúng tôi đã chờ bạn.</em>',
                        answer: 'Nhấn vào quá trình chờ',
                        explanation: 'Câu này không nhấn kết quả mà nhấn việc chờ đã diễn ra trong một khoảng thời gian.'
                    },
                    {
                        prompt: '<strong>5. Dấu hiệu qua kết quả hiện tại:</strong><br>He has been running, so he is out of breath.<br><em>Anh ấy vừa chạy nên đang thở dốc.</em>',
                        answer: 'Hành động vừa diễn ra để lại dấu hiệu hiện tại',
                        explanation: 'Trạng thái out of breath cho thấy dấu vết của một quá trình vừa kéo dài.'
                    }
                ]
            }
        ],
        checkpoint: [
            'Present perfect continuous thường đi với for, since và các dấu hiệu kết quả hiện tại.',
            'Dùng khi trọng tâm là quá trình hoặc thời lượng, không chỉ là kết quả.',
            'Nhiều stative verbs không tự nhiên ở dạng continuous.'
        ]
    },
    'past-perfect': {
        source: 'Bài luyện Past Perfect: một việc đã xảy ra trước một mốc quá khứ khác.',
        sections: [
            {
                title: 'Nhận diện các cách dùng chính',
                instruction: 'Đọc câu ví dụ, ghép với cách dùng của past perfect và xem giải thích.',
                items: [
                    {
                        prompt: '<strong>1. Việc xảy ra trước một việc quá khứ khác:</strong><br>I had finished my work before I went out.<br><em>Tôi đã làm xong việc trước khi đi ra ngoài.</em>',
                        answer: 'Hành động xảy ra trước mốc quá khứ khác',
                        explanation: 'had finished xảy ra trước went out, nên dùng past perfect.'
                    },
                    {
                        prompt: '<strong>2. Hành động sớm hơn trong quá khứ:</strong><br>She had already left when I arrived.<br><em>Khi tôi đến thì cô ấy đã rời đi rồi.</em>',
                        answer: 'Hành động hoàn tất trước thời điểm khác',
                        explanation: 'already và when I arrived cho thấy hành động rời đi đã xong trước.'
                    },
                    {
                        prompt: '<strong>3. By the time / before:</strong><br>By the time the movie started, we had found our seats.<br><em>Trước khi phim bắt đầu, chúng tôi đã tìm xong chỗ ngồi.</em>',
                        answer: 'Mốc trước một sự kiện khác',
                        explanation: 'by the time the movie started là mốc so sánh để đặt một việc ở quá khứ trước đó.'
                    },
                    {
                        prompt: '<strong>4. Trong tường thuật gián tiếp:</strong><br>He said he had seen the document.<br><em>Anh ấy nói rằng anh ấy đã xem tài liệu.</em>',
                        answer: 'Lùi thì trong reported speech',
                        explanation: 'Động từ tường thuật ở quá khứ thường kéo hành động trước đó lùi về past perfect.'
                    },
                    {
                        prompt: '<strong>5. Kinh nghiệm trước một mốc quá khứ:</strong><br>I had never tried sushi before I moved to Japan.<br><em>Tôi chưa từng thử sushi trước khi chuyển đến Nhật.</em>',
                        answer: 'Kinh nghiệm trước một mốc quá khứ',
                        explanation: 'never tried đặt trải nghiệm ở một thời điểm trước mốc quá khứ moved.'
                    }
                ]
            }
        ],
        checkpoint: [
            'Past perfect rất hay đi với before, after, by the time, when, already, just, never.',
            'Dùng để sắp xếp thứ tự hai sự kiện trong quá khứ.',
            'Nếu không cần phân biệt thứ tự trước-sau, past simple thường đủ.'
        ]
    },
    'past-perfect-continuous': {
        source: 'Bài luyện Past Perfect Continuous: nhấn thời lượng của hành động đã diễn ra trước một mốc quá khứ.',
        sections: [
            {
                title: 'Nhận diện các cách dùng chính',
                instruction: 'Đọc câu ví dụ, ghép với cách dùng của past perfect continuous và xem giải thích.',
                items: [
                    {
                        prompt: '<strong>1. Nhấn thời lượng trước một mốc quá khứ:</strong><br>I had been studying for two hours before the power went out.<br><em>Tôi đã học được hai tiếng trước khi mất điện.</em>',
                        answer: 'Nhấn thời lượng trước quá khứ khác',
                        explanation: 'had been studying nhấn quá trình kéo dài trước sự kiện the power went out.'
                    },
                    {
                        prompt: '<strong>2. Nguyên nhân của trạng thái quá khứ:</strong><br>She was tired because she had been working all day.<br><em>Cô ấy mệt vì đã làm việc cả ngày.</em>',
                        answer: 'Quá trình trước đó gây ra kết quả',
                        explanation: 'Quá trình làm việc dài giải thích vì sao cô ấy mệt.'
                    },
                    {
                        prompt: '<strong>3. Kéo dài đến một mốc quá khứ:</strong><br>By the time they arrived, we had been waiting for an hour.<br><em>Khi họ đến, chúng tôi đã chờ được một tiếng.</em>',
                        answer: 'Hành động kéo dài đến trước mốc quá khứ',
                        explanation: 'for an hour cho thấy hành động chờ đã diễn ra liên tục trước khi họ đến.'
                    },
                    {
                        prompt: '<strong>4. Nhấn quá trình nhiều hơn kết quả:</strong><br>He had been driving for many hours when he stopped.<br><em>Anh ấy đã lái xe nhiều giờ trước khi dừng lại.</em>',
                        answer: 'Nhấn vào quá trình kéo dài',
                        explanation: 'Câu tập trung vào độ dài của việc lái xe chứ không chỉ việc đã lái.'
                    },
                    {
                        prompt: '<strong>5. Dấu vết còn lại:</strong><br>The ground was wet because it had been raining.<br><em>Mặt đất ướt vì trời đã mưa.</em>',
                        answer: 'Dấu hiệu của một quá trình đã diễn ra',
                        explanation: 'wet là kết quả còn lại của quá trình mưa trước đó.'
                    }
                ]
            }
        ],
        checkpoint: [
            'Past perfect continuous nhấn duration, not just completion.',
            'Thường đi với for, since và câu giải thích nguyên nhân kết quả.',
            'Nếu chỉ cần nói đã xong trước mốc quá khứ, past perfect thường gọn hơn.'
        ]
    },
    'future-simple': {
        source: 'Bài luyện Future Simple: dự đoán, quyết định tức thì, lời hứa và đề nghị.',
        sections: [
            {
                title: 'Nhận diện các cách dùng chính',
                instruction: 'Đọc câu ví dụ, ghép với cách dùng của future simple và xem giải thích.',
                items: [
                    {
                        prompt: '<strong>1. Dự đoán:</strong><br>I think it will rain tomorrow.<br><em>Tôi nghĩ ngày mai trời sẽ mưa.</em>',
                        answer: 'Dự đoán',
                        explanation: 'I think cho thấy người nói đang dự đoán về tương lai.'
                    },
                    {
                        prompt: '<strong>2. Quyết định tức thì:</strong><br>I will help you with that.<br><em>Tôi sẽ giúp bạn việc đó.</em>',
                        answer: 'Quyết định ngay lúc nói',
                        explanation: 'will dùng khi người nói quyết định ngay tại thời điểm nói.'
                    },
                    {
                        prompt: '<strong>3. Lời hứa:</strong><br>I will call you tonight.<br><em>Tối nay tôi sẽ gọi cho bạn.</em>',
                        answer: 'Lời hứa / cam kết',
                        explanation: 'Cấu trúc will + V thường dùng để hứa hoặc cam kết.'
                    },
                    {
                        prompt: '<strong>4. Đề nghị / yêu cầu lịch sự:</strong><br>Will you open the window?<br><em>Bạn mở cửa sổ giúp tôi được không?</em>',
                        answer: 'Đề nghị lịch sự',
                        explanation: 'Câu hỏi với will có thể dùng như lời yêu cầu hoặc đề nghị nhã nhặn.'
                    },
                    {
                        prompt: '<strong>5. Tương lai theo niềm tin:</strong><br>He will pass the test if he studies well.<br><em>Anh ấy sẽ đậu nếu học tốt.</em>',
                        answer: 'Niềm tin về tương lai',
                        explanation: 'will pass diễn tả một dự đoán dựa trên niềm tin của người nói.'
                    }
                ]
            }
        ],
        checkpoint: [
            'Future simple thường đi với will + V nguyên mẫu.',
            'Dùng cho prediction, decision, promise, offer, request.',
            'Nếu ý là kế hoạch đã sắp xếp, hãy cân nhắc present continuous hoặc be going to.'
        ]
    },
    'future-continuous': {
        source: 'Bài luyện Future Continuous: hành động đang diễn ra ở một thời điểm tương lai.',
        sections: [
            {
                title: 'Nhận diện các cách dùng chính',
                instruction: 'Đọc câu ví dụ, ghép với cách dùng của future continuous và xem giải thích.',
                items: [
                    {
                        prompt: '<strong>1. Đang diễn ra tại một thời điểm tương lai:</strong><br>At 8 p.m. tonight, I will be studying.<br><em>Tối nay lúc 8 giờ, tôi sẽ đang học.</em>',
                        answer: 'Hành động đang diễn ra ở tương lai',
                        explanation: 'at 8 p.m. tonight đặt hành động vào một thời điểm cụ thể trong tương lai.'
                    },
                    {
                        prompt: '<strong>2. Tình huống tạm thời ở tương lai:</strong><br>This time next week, she will be travelling to Da Lat.<br><em>Giờ này tuần sau, cô ấy sẽ đang đi Đà Lạt.</em>',
                        answer: 'Tình huống tạm thời',
                        explanation: 'This time next week nhấn một giai đoạn tương lai đang diễn ra.'
                    },
                    {
                        prompt: '<strong>3. Kế hoạch / sắp xếp tương lai:</strong><br>We will be staying at a hotel during the conference.<br><em>Chúng tôi sẽ ở khách sạn trong suốt hội nghị.</em>',
                        answer: 'Hoạt động kéo dài trong tương lai',
                        explanation: 'will be staying cho thấy một khoảng thời gian tương lai đang diễn ra.'
                    },
                    {
                        prompt: '<strong>4. Hỏi lịch trình tương lai:</strong><br>Will you be using the car tomorrow morning?<br><em>Sáng mai bạn có dùng xe không?</em>',
                        answer: 'Hỏi về một việc đang diễn ra ở tương lai',
                        explanation: 'Câu hỏi này hỏi về một thời điểm cụ thể trong tương lai, không phải ý định đơn lẻ.'
                    },
                    {
                        prompt: '<strong>5. Bối cảnh tương lai:</strong><br>When we arrive, the band will be playing.<br><em>Khi chúng tôi đến, ban nhạc sẽ đang biểu diễn.</em>',
                        answer: 'Bối cảnh xảy ra đồng thời',
                        explanation: 'will be playing tạo bối cảnh đang diễn ra khi một sự kiện khác xảy đến.'
                    }
                ]
            }
        ],
        checkpoint: [
            'Future continuous thường đi với at this time tomorrow, this time next week, when/by the time...',
            'Dùng để nhấn một hành động đang diễn ra ở một thời điểm tương lai.',
            'Không nhầm với future simple, vốn chỉ nói việc sẽ xảy ra hoặc quyết định tức thì.'
        ]
    },
    'future-perfect-continuous': {
        source: 'Bài luyện Future Perfect Continuous: nhấn thời lượng của quá trình kéo dài đến mốc tương lai.',
        sections: [
            {
                title: 'Nhận diện các cách dùng chính',
                instruction: 'Đọc câu ví dụ, ghép với cách dùng của future perfect continuous và xem giải thích.',
                items: [
                    {
                        prompt: '<strong>1. Nhấn thời lượng đến mốc tương lai:</strong><br>By July, I will have been working here for five years.<br><em>Đến tháng 7, tôi sẽ làm ở đây được 5 năm.</em>',
                        answer: 'Thời lượng kéo dài đến mốc tương lai',
                        explanation: 'for five years cho thấy trọng tâm là độ dài của quá trình trước mốc tương lai.'
                    },
                    {
                        prompt: '<strong>2. Quá trình dài trước một thời điểm:</strong><br>By the end of the day, she will have been studying for six hours.<br><em>Đến cuối ngày, cô ấy sẽ học được sáu tiếng.</em>',
                        answer: 'Nhấn vào thời lượng học',
                        explanation: 'Câu nhấn việc học kéo dài bao lâu tính đến cuối ngày.'
                    },
                    {
                        prompt: '<strong>3. Chờ đợi kéo dài đến tương lai:</strong><br>By the time you arrive, they will have been waiting for an hour.<br><em>Khi bạn đến, họ sẽ chờ được một tiếng.</em>',
                        answer: 'Quá trình kéo dài trước mốc tương lai',
                        explanation: 'will have been waiting cho thấy hành động chờ đã diễn ra liên tục trước thời điểm bạn tới.'
                    },
                    {
                        prompt: '<strong>4. Tác động đến trạng thái tương lai:</strong><br>He will be tired because he will have been running all morning.<br><em>Anh ấy sẽ mệt vì đã chạy cả buổi sáng.</em>',
                        answer: 'Quá trình kéo dài dẫn tới trạng thái tương lai',
                        explanation: 'all morning giải thích nguyên nhân của trạng thái tired ở tương lai.'
                    },
                    {
                        prompt: '<strong>5. Mốc dài hạn:</strong><br>Next month, we will have been living here for ten years.<br><em>Tháng sau, chúng tôi sẽ sống ở đây được 10 năm.</em>',
                        answer: 'Mốc dài hạn tính đến tương lai',
                        explanation: 'Câu dùng future perfect continuous để nhấn thời lượng sống ở đây đến tháng sau.'
                    }
                ]
            }
        ],
        checkpoint: [
            'Future perfect continuous nhấn duration up to a future point.',
            'Thường đi với for, by, by the time, next year, next month.',
            'Nếu chỉ cần nói việc sẽ xong trước mốc tương lai, future perfect gọn hơn.'
        ]
    }
};

const grammarMemoryBank = [
    {
        title: 'Plural Nouns Phải Học Thuộc',
        note: 'Không thể suy chắc bằng quy tắc thêm -s.',
        items: [
            'man → men, woman → women, child → children, person → people',
            'tooth → teeth, foot → feet, goose → geese, mouse → mice',
            'sheep → sheep, deer → deer, aircraft → aircraft'
        ]
    },
    {
        title: 'Danh Từ Không Đếm Được Hay Sai',
        note: 'Kéo theo sai article, quantifier và verb agreement nếu quên.',
        items: [
            'information, advice, furniture, equipment, luggage, homework',
            'traffic, research, news, knowledge, progress, work',
            'Cụm nên học thuộc: a piece of advice, a piece of information, an item of furniture'
        ]
    },
    {
        title: 'Articles Với Tên Riêng Và Cụm Cố Định',
        note: 'Sách nhấn mạnh đây là vùng cần ghi nhớ theo nhóm.',
        items: [
            'Dùng the: the United States, the Netherlands, the Pacific, the Alps',
            'Không dùng the: France, Vietnam, Europe, Lake Geneva, Mount Everest',
            'Cụm cố định: go to school, be at home, go to bed, go to church'
        ]
    },
    {
        title: 'Pronoun Pairs Cần Nhớ Theo Cặp',
        note: 'Dễ nhầm vì nghĩa gần nhau nhưng chức năng khác nhau.',
        items: [
            'my / mine, your / yours, our / ours, their / theirs',
            'I / me, he / him, she / her, we / us, they / them',
            'myself, yourself, himself, herself, ourselves, themselves'
        ]
    },
    {
        title: 'Adjective Order',
        note: 'Không phải lúc nào cũng suy tự nhiên được.',
        items: [
            'opinion - size - age - shape - color - origin - material - purpose',
            'a beautiful small old round brown French wooden table',
            'Khi câu đã dài, ưu tiên bớt adjective thay vì nhồi nhiều lớp'
        ]
    },
    {
        title: 'Comparatives Bất Quy Tắc',
        note: 'Không đi theo -er/-est hay more/most thông thường.',
        items: [
            'good/well → better → best',
            'bad/badly → worse → worst',
            'far → farther/further → farthest/furthest',
            'little → less → least; many/much → more → most'
        ]
    },
    {
        title: 'Verb Patterns Cần Flashcard',
        note: 'Không có quy tắc đủ chắc, nên học theo cụm.',
        items: [
            'V + V-ing: enjoy, avoid, finish, keep, suggest, mind, admit, deny',
            'V + to V: want, decide, hope, plan, promise, refuse, manage',
            'V + object + to V: ask, tell, advise, allow, encourage, remind, warn',
            'V + preposition + V-ing: insist on, succeed in, look forward to, prevent from',
            'Bare V after object: make, let, help, see, hear, watch, feel',
            'Cặp đổi nghĩa: stop doing / stop to do, remember doing / remember to do'
        ]
    },
    {
        title: 'Giới Từ Đi Theo Cụm',
        note: 'Học rời từng từ rất khó nhớ và dễ dịch từ tiếng Việt sang.',
        items: [
            'interested in, good at, depend on, belong to',
            'afraid of, proud of, responsible for, similar to',
            'arrive in/at, listen to, wait for, apologize for'
        ]
    },
    {
        title: 'Numerals Và Cách Đọc Ngày Tháng',
        note: 'Đây là nhóm quy tắc lẫn ngoại lệ nên cần nhớ theo mẫu.',
        items: [
            'two hundred students nhưng hundreds of students',
            'first, second, third, fifth, twelfth',
            'on 21st May / May 21st / two thirds / 35 percent'
        ]
    },
    {
        title: 'Tương Lai Gần Và Time Clauses',
        note: 'Hai phần này đi cùng nhau trong sách và rất hay bị trộn.',
        items: [
            'be going to = intention/evidence; present continuous = arrangement; present simple = timetable',
            'Sau when, until, before, after, as soon as: không dùng will trong time clause',
            'since + simple past; main clause thường ở present perfect hoặc present perfect continuous'
        ]
    },
    {
        title: 'Relative Pronouns Và Relative Adverbs',
        note: 'Mức nhập môn: chỉ để nhận diện từ quan hệ đúng, không phải bài ghép câu.',
        items: [
            'who/whom = người, whose = sở hữu',
            'which/that = vật hoặc mệnh đề, where = nơi chốn, when = thời gian, why = lý do',
            'Không dùng that trong non-defining clauses'
        ]
    },
    {
        title: 'Result Structures',
        note: 'Nhóm này thường ra trong rewrite sentence và cần thuộc dạng khung.',
        items: [
            'so + adj/adv + that',
            'such + (a/an) + adj + noun + that',
            'too + adj/adv + to V, adj/adv + enough + to V, enough + noun'
        ]
    },
    {
        title: 'Cụm Thời Gian Cố Định',
        note: 'Nên học như collocation thay vì cố suy luận từng chữ.',
        items: [
            'at night, in the morning, on Monday, at 7 o’clock',
            'in time / on time, at the weekend / on the weekend',
            'for two hours, since 2022, by Friday, until tomorrow'
        ]
    },
    {
        title: 'Stative Verbs Cần Nhận Diện Nhanh',
        note: 'Nhiều động từ có nghĩa trạng thái nên thường không dùng continuous.',
        items: [
            'know, understand, believe, remember, forget, realize, mean',
            'love, hate, like, prefer, want, need, wish',
            'own, belong, contain, consist, exist, seem, appear',
            'Các verb đổi nghĩa: think, have, see, taste, smell, feel, be'
        ]
    },
    {
        title: 'Verb + Preposition Fixed Patterns',
        note: 'Đây là vùng phải học như cụm hoàn chỉnh.',
        items: [
            'apologize to sb for sth, blame sb for sth, accuse sb of sth',
            'congratulate sb on sth, provide sb with sth, prevent sb from V-ing',
            'depend on, rely on, insist on, object to, succeed in, participate in',
            'arrive at a place nhỏ, arrive in a city/country'
        ]
    },
    {
        title: 'Adjective + Preposition Fixed Patterns',
        note: 'Không có quy tắc đủ chắc để suy từ nghĩa tiếng Việt.',
        items: [
            'good/bad/clever/skilful at; interested/successful/rich in',
            'afraid/aware/proud/capable/fond/jealous of',
            'responsible/famous/suitable/ready/sorry for',
            'similar/accustomed/addicted/contrary/grateful to',
            'pleased/satisfied/familiar/bored/angry with; worried/excited about'
        ]
    },
    {
        title: 'Noun + Preposition Fixed Patterns',
        note: 'Rất hay xuất hiện trong writing và academic English.',
        items: [
            'reason for, solution to, answer to, key to, access to',
            'increase/decrease/rise/fall in, effect/impact/influence on',
            'advantage/disadvantage of, demand/need for, relationship with/between',
            'evidence of/for, exception to, attitude to/towards'
        ]
    },
    {
        title: 'Phrasal Verbs - Daily Actions',
        note: 'Nhóm này xuất hiện rất thường xuyên trong giao tiếp hằng ngày.',
        items: [
            'wake up, get up, sit down, stand up, lie down',
            'go out, come back, come in, go back, come over',
            'run out of, fill in, fill out, hand in, hand out',
            'turn on, turn off, turn up, turn down, set off',
            'pick up, drop off, put away, clean up, take off',
            'take up, put on, put off, give up, calm down'
        ]
    },
    {
        title: 'Phrasal Verbs - Study & Work',
        note: 'Đây là nhóm rất hay gặp trong homework, project và workplace English.',
        items: [
            'look up, look over, go over, check out, find out',
            'hand in, hand out, fill out, fill in, write down',
            'carry out, set up, sort out, work out, figure out',
            'catch up on, follow up, bring up, point out, carry on',
            'take over, take on, turn in, get through, move on',
            'go through, make up, pay off, come up with, read through'
        ]
    },
    {
        title: 'Phrasal Verbs - Problems & Change',
        note: 'Nhóm này giúp bạn diễn tả vấn đề, phản ứng và thay đổi trạng thái.',
        items: [
            'give up, put off, turn down, break down, calm down',
            'break up, make up, bring up, blow up, mess up',
            'carry on, go on, move on, get over, sort out',
            'figure out, work out, run into, come across, deal with',
            'take off, take over, pick up, turn up, turn out',
            'run out of, cut down on, slow down, build up, wear off'
        ]
    },
    {
        title: 'Phrasal Verbs - People & Communication',
        note: 'Rất hữu ích khi nói về quan hệ, trao đổi và tương tác.',
        items: [
            'look after, look for, look forward to, get along with, get on with',
            'fall out with, make up with, keep in touch, call back, call off',
            'hang out, come over, drop by, chat up, check in',
            'talk over, bring up, point out, ask around, speak up',
            'run into, come across, get together, meet up, reach out',
            'hear from, get back to, fill in for, pass on, hand over'
        ]
    },
    {
        title: 'Phrasal Verbs - Movement & Result',
        note: 'Nhóm này giúp nói về di chuyển, khởi hành và kết quả.',
        items: [
            'set off, take off, get in, get out, get on',
            'get off, come in, go back, come back, move in',
            'move out, pass by, run past, drive off, pull over',
            'pick up, drop off, turn around, head out, check out',
            'go through, get over, carry out, carry through, turn out',
            'end up, come out, come through, break out, build up'
        ]
    },
    {
        title: 'Make / Do / Take / Have Collocations',
        note: 'Collocation sai làm câu nghe không tự nhiên dù đúng ngữ pháp bề mặt.',
        items: [
            'make a decision, make a mistake, make progress, make an effort',
            'do homework, do business, do research, do your best',
            'take a risk, take responsibility, take notes, take a break',
            'have breakfast, have a rest, have trouble, have an effect on'
        ]
    },
    {
        title: 'Give / Pay / Keep / Catch Collocations',
        note: 'Các verb phổ thông này tạo rất nhiều cụm cố định.',
        items: [
            'give advice, give a speech, give permission, give someone a hand',
            'pay attention, pay a fine, pay respect, pay by card',
            'keep calm, keep a promise, keep in touch, keep track of',
            'catch a bus, catch a cold, catch fire, catch someone’s attention'
        ]
    },
    {
        title: 'Verb Patterns: Bare Infinitive / V-ing / V3',
        note: 'Sau một số verb, dạng sau object phải nhớ riêng.',
        items: [
            'make/let/help + O + bare V: make him wait, let me go, help me do/to do',
            'see/hear/watch/feel + O + bare V = thấy toàn bộ hành động',
            'see/hear/watch/feel + O + V-ing = thấy hành động đang diễn ra',
            'have/get + O + V3: have my hair cut, get the car repaired'
        ]
    },
    {
        title: 'Reporting Verb Patterns',
        note: 'Không thể dùng mọi reporting verb theo cùng một cấu trúc.',
        items: [
            'say sth to sb; tell sb sth; explain sth to sb',
            'ask/tell/advise/allow/encourage/remind/warn sb to V',
            'suggest/recommend/admit/deny/avoid + V-ing hoặc that-clause',
            'apologize for V-ing; insist on V-ing; accuse sb of V-ing'
        ]
    },
    {
        title: 'Cặp Verb Dễ Nhầm',
        note: 'Phải học theo vai trò trong câu, không chỉ học nghĩa.',
        items: [
            'say + words / tell + person; speak to / talk to',
            'borrow from / lend to; bring here / take there',
            'rise = tự tăng, raise = làm tăng; lie-lay-lain vs lay-laid-laid',
            'sit-sat-sat vs set-set-set; fall-fell-fallen vs feel-felt-felt'
        ]
    },
    {
        title: 'Confusing Pairs Cần Thuộc',
        note: 'Các cặp này thường đúng chính tả nhưng sai nghĩa/chức năng.',
        items: [
            'its / it’s, your / you’re, whose / who’s, there / their / they’re',
            'affect (v) / effect (n), advice (n) / advise (v), practice (n) / practise (v BrE)',
            'fewer + countable / less + uncountable, between / among',
            'beside = bên cạnh, besides = ngoài ra; then = sau đó, than = so sánh'
        ]
    },
    {
        title: 'Fixed Article / Zero Article Expressions',
        note: 'Nhiều cụm article không nên dịch từng chữ.',
        items: [
            'go to school, go to bed, be in hospital/prison/church, at home',
            'by car/bus/train, on foot, by mistake, by chance, in fact',
            'have breakfast/lunch/dinner, play football, play the piano',
            'the same, the only, the first/last, the rich/the poor'
        ]
    },
    {
        title: 'Agreement Traps',
        note: 'Chủ ngữ thật thường bị che bởi cụm giới từ hoặc cụm chen giữa.',
        items: [
            'The number of students is; a number of students are',
            'Each/every/either/neither + singular verb',
            'Neither A nor B / either A or B: verb thường hòa theo noun gần nhất',
            'Ten years is a long time; five dollars is enough; the police are'
        ]
    },
    {
        title: 'Subjunctive & Fixed Formal Formulas',
        note: 'Các công thức này ít suy luận được nếu chưa từng gặp.',
        items: [
            'It is essential/important/vital that S + bare V',
            'suggest/recommend/insist/demand that S + bare V',
            'If I were you; as if/as though S + past/past perfect',
            'It is time S + past; lest S should V / lest S V'
        ]
    },
    {
        title: 'Linkers Có Pattern Riêng',
        note: 'Sai pattern sau linker là lỗi rất phổ biến trong writing.',
        items: [
            'although/even though + clause; despite/in spite of + noun/V-ing',
            'because + clause; because of/due to/owing to + noun/V-ing',
            'so that + clause; in order to/so as to + V',
            'therefore/however/moreover thường nối câu, không nối như conjunction thường'
        ]
    },
    {
        title: 'Preposition: Place & Movement',
        note: 'Một phần có quy tắc, nhưng nhiều cụm địa điểm vẫn phải nhớ.',
        items: [
            'at the door/station/airport, in the room/city/country, on the wall/floor/page',
            'go to, get into/out of, jump onto/off, walk across/through/along',
            'at work, at school, in class, on the bus/train/plane',
            'in the picture/photo, on the screen, at the top/bottom'
        ]
    },
    {
        title: 'Pronunciation: -s / -ed Endings',
        note: 'Đây là bảng học thuộc cho speaking và listening.',
        items: [
            '-s đọc /s/ sau âm vô thanh: cups, books, laughs',
            '-s đọc /z/ sau âm hữu thanh/nguyên âm: bags, plays, dreams',
            '-s đọc /ɪz/ sau sibilants: buses, watches, judges',
            '-ed đọc /t/ sau âm vô thanh, /d/ sau âm hữu thanh, /ɪd/ sau /t/ hoặc /d/'
        ]
    },
    {
        title: 'Weak Forms Cần Nghe Quen',
        note: 'Không thuộc weak forms thì nghe câu thật rất dễ hụt từ chức năng.',
        items: [
            'a /ə/, the /ðə/ hoặc /ði/, to /tə/, of /əv/',
            'and /ən/ hoặc /n/, for /fə/, from /frəm/, can /kən/',
            'have /həv/ khi là auxiliary, has /həz/, had /həd/',
            'should have → should’ve /ʃʊdəv/, could have → could’ve /kʊdəv/'
        ]
    },
    {
        title: 'Stress Suffixes Cần Nhớ',
        note: 'Trọng âm từ có nhóm quy tắc nhưng vẫn cần học theo hậu tố.',
        items: [
            '-tion/-sion/-ic/-ity: stress thường rơi ngay trước suffix',
            '-ee/-eer/-ese/-oo/-oon: stress thường rơi vào suffix',
            '-ous/-ful/-less/-ness/-ment/-ly: thường không đổi stress gốc',
            'Cặp N/V: PREsent vs preSENT, REcord vs reCORD, CONduct vs conDUCT'
        ]
    },
    {
        title: 'Irregular Adverbs & Meaning Shifts',
        note: 'Thêm -ly máy móc có thể đổi nghĩa hoặc tạo từ sai.',
        items: [
            'good → well; fast → fast; hard → hard; late → late',
            'hardly = gần như không, lately = gần đây, highly = rất/đánh giá cao',
            'near = gần, nearly = gần như; most = nhiều nhất, mostly = chủ yếu',
            'friendly/lively/lovely/costly là adjectives, không phải adverbs thường'
        ]
    },
    {
        title: 'Word Family Dễ Sai Từ Loại',
        note: 'Nên học theo họ từ để tránh điền đúng nghĩa nhưng sai grammar.',
        items: [
            'success / succeed / successful / successfully',
            'decision / decide / decisive / decisively',
            'effect / affect / effective / effectively',
            'comfort / comfortable / comfortably; economy / economic / economical / economically'
        ]
    }
];
