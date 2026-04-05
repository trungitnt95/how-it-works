// Extra grammar coverage, practice data, and memorization bank
const grammarSupplementsData = {
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
                ]
            }
        ],
        checkpoint: [
            'Phân biệt được will, be going to, present continuous và present simple khi nói về tương lai.',
            'Không dùng will cho mọi ý tương lai một cách máy móc.',
            'Nhận ra timetable khác với plan đã sắp xếp và quyết định tức thì.'
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
            }
        ],
        checkpoint: [
            'Phân biệt được defining và non-defining relative clauses.',
            'Biết khi nào có thể lược bỏ who/which/that làm tân ngữ.',
            'Chọn đúng who/which/that/whose/where theo chức năng trong clause.'
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
    }
];
