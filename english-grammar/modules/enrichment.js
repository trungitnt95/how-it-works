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
        level: 'advanced',
        connections: ['relative-clauses', 'pronouns-possessives', 'conjunctions', 'sentence-order'],
        simple: `
            <h3>🧷 Phần lõi của relative clause nằm ở đại từ và trạng từ quan hệ</h3>
            <p>Nếu chỉ nhớ chung chung "mệnh đề quan hệ" thì chưa đủ. Bài thi thường hỏi đúng vào việc chọn <strong>who, whom, whose, which, that, where, when, why</strong>.</p>
            <div class="formula-box">person → who/whom/whose | thing → which/that | place → where | time → when | reason → why</div>
            <div class="example-box">
                <strong>Ví dụ:</strong><br>
                • <em>The woman who helped me is a doctor.</em><br>
                • <em>The house where I was born is still there.</em>
            </div>
        `,
        detail: `
            <h3>📚 Chọn từ quan hệ đúng</h3>
            <table>
                <tr><th>Từ</th><th>Dùng cho</th><th>Ví dụ</th></tr>
                <tr><td>who / whom</td><td>người</td><td>the boy who called / the girl whom I met</td></tr>
                <tr><td>whose</td><td>sở hữu</td><td>the writer whose book won</td></tr>
                <tr><td>which</td><td>vật / mệnh đề</td><td>the car which he bought</td></tr>
                <tr><td>that</td><td>người hoặc vật</td><td>the song that I like</td></tr>
                <tr><td>where / when / why</td><td>nơi chốn / thời gian / lý do</td><td>the town where I grew up</td></tr>
            </table>
            <h4>Rút gọn nhanh</h4>
            <ul>
                <li>Có thể bỏ <strong>who/which/that</strong> khi nó làm tân ngữ trong mệnh đề xác định.</li>
                <li><strong>whom</strong> thường được thay bằng <strong>who</strong> trong văn nói hiện đại, nhưng đề thi vẫn hay kiểm tra.</li>
                <li><strong>why</strong> thường đi sau <em>reason</em>; <strong>where</strong> có thể đổi thành <em>in which</em>.</li>
            </ul>
        `,
        advanced: `
            <h3>🎯 Các lỗi đề thi rất thích</h3>
            <ul>
                <li>Không dùng <strong>that</strong> trong non-defining clauses có dấu phẩy.</li>
                <li><strong>whose</strong> có thể dùng cho cả vật trong văn viết: <em>a company whose profits fell</em>.</li>
                <li><strong>which</strong> đôi khi thay cho cả mệnh đề phía trước: <em>He missed the train, which annoyed his boss.</em></li>
            </ul>
            <div class="warning-box">
                <strong>⚠️ Lỗi phổ biến:</strong> Thấy nói về thời gian là dùng <em>when</em> trong mọi trường hợp, dù chỗ đó thật ra cần giới từ + which.
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
            <h3>🎯 Kết quả có nhiều cấu trúc rất hay lẫn</h3>
            <p>Phần này gộp các mẫu diễn tả kết quả như <strong>so ... that</strong>, <strong>such ... that</strong>, <strong>too ... to</strong>, <strong>enough to</strong>.</p>
            <div class="formula-box">so + adj/adv + that | such + noun phrase + that | too + adj/adv + to V | adj/adv + enough + to V</div>
            <div class="example-box">
                <strong>Ví dụ:</strong><br>
                • <em>It was so cold that we stayed inside.</em><br>
                • <em>She was too tired to drive.</em><br>
                • <em>The room was large enough to hold fifty people.</em>
            </div>
        `,
        detail: `
            <h3>📚 Mẫu dùng nhanh</h3>
            <table>
                <tr><th>Cấu trúc</th><th>Mẫu</th><th>Ví dụ</th></tr>
                <tr><td>so ... that</td><td>so + adj/adv + that</td><td>so difficult that I gave up</td></tr>
                <tr><td>such ... that</td><td>such + (a/an) + adj + noun + that</td><td>such a long meeting that...</td></tr>
                <tr><td>too ... to</td><td>too + adj/adv + to V</td><td>too weak to lift it</td></tr>
                <tr><td>adj/adv + enough</td><td>adj/adv + enough + to V</td><td>strong enough to continue</td></tr>
            </table>
            <h4>Điểm dễ lẫn</h4>
            <ul>
                <li><strong>so many/few + plural noun</strong></li>
                <li><strong>so much/little + uncountable noun</strong></li>
                <li><strong>enough</strong> đứng sau adjective/adverb nhưng đứng trước noun: <em>enough money</em>, <em>careful enough</em></li>
            </ul>
        `,
        advanced: `
            <h3>🎯 Chỗ đổi câu hay ra đề</h3>
            <ul>
                <li>Các câu <em>too ... to</em> có thể đổi sang <em>so ... that ... not</em> hoặc <em>not ... enough to</em> tùy nghĩa.</li>
                <li><strong>such</strong> đi với noun phrase, còn <strong>so</strong> đi trực tiếp với adjective/adverb.</li>
                <li>Đây là nhóm cấu trúc rất hay xuất hiện trong rewrite sentence và sentence transformation.</li>
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
        source: 'Bài word form theo mô thức thường gặp trong sách.',
        sections: [
            {
                title: 'Điền đúng từ loại',
                instruction: 'Dùng dạng đúng của từ trong ngoặc.',
                questions: [
                    'The plan was a complete ___. (fail)',
                    'Our new assistant works very ___. (careful)',
                    'They were impressed by the team’s ___. (creative)',
                    'This solution is not practical enough; it is highly ___. (effect)',
                    'The city has seen rapid ___. (develop)',
                    'Her presentation was clear and highly ___. (persuade)',
                    'The board will make a final ___ tomorrow. (decide)',
                    'This guide is especially ___ for self-study learners. (use)'
                ],
                answers: [
                    'failure',
                    'carefully',
                    'creativity',
                    'ineffective',
                    'development',
                    'persuasive',
                    'decision',
                    'useful'
                ]
            }
        ],
        checkpoint: [
            'Đoán từ loại trước bằng vị trí trong câu rồi mới chọn họ từ.',
            'Nhận ra các suffix thường gặp của noun, verb, adjective, adverb.',
            'Đề phòng negative prefixes như un-, in-, im-, dis-.'
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
        source: 'Bài luyện riêng cho relative pronouns và relative adverbs trong sách.',
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
            'Biết who/whom/whose dành cho người, which/that cho vật, where/when/why cho adverbs quan hệ.',
            'Không dùng that trong non-defining clauses có dấu phẩy.',
            'Nhận ra khi nào where/when/why có thể đổi thành preposition + which.'
        ]
    },
    'result-structures': {
        source: 'Biên tập từ phần rewrite sentence về so/such/too/enough trong sách.',
        sections: [
            {
                title: 'Hoàn thành cấu trúc kết quả',
                instruction: 'Điền so, such, too hoặc enough khi phù hợp.',
                questions: [
                    'It was ___ rotten meat that it had to be thrown away.',
                    'The water was ___ cold to swim in.',
                    'The room was large ___ to hold fifty people.',
                    'She spoke ___ quickly that no one could take notes.',
                    'They are ___ experienced engineers that the project feels safe.',
                    'He is ___ young to drive legally.',
                    'We had ___ few chairs that some guests had to stand.',
                    'It was ___ a useful checklist that the team adopted it immediately.'
                ],
                answers: [
                    'such',
                    'too',
                    'enough',
                    'so',
                    'such',
                    'too',
                    'so',
                    'such'
                ]
            }
        ],
        checkpoint: [
            'Phân biệt được so + adj/adv với such + noun phrase.',
            'Biết enough đứng sau adjective/adverb nhưng trước noun.',
            'Nhận ra các câu too...to có thể đổi sang not...enough to hoặc so...that...not.'
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
            'V + V-ing: enjoy, avoid, finish, keep, suggest',
            'V + to V: want, decide, hope, plan, promise',
            'V + object + to V: ask, tell, advise, allow, encourage',
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
        note: 'Nên học theo nhóm chức năng chứ không học rời nghĩa.',
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
        title: 'Phrasal Verbs Cốt Lõi',
        note: 'Cần học theo nghĩa và khả năng tách object.',
        items: [
            'look after, look for, look up, look forward to, give up',
            'put on, put off, take off, turn on/off, turn up/down',
            'bring up, find out, work out, carry on, get along with',
            'Separable: turn it off, put it on; inseparable: look after it, look forward to it'
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
