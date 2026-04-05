// English Grammar Foundations
const grammarFoundationsData = {
    'sentence-order': {
        icon: '🧱',
        title: 'Trật Tự Câu',
        category: 'foundations',
        level: 'beginner',
        connections: ['parts-of-speech', 'question-forms', 'subject-verb-agreement', 'negatives'],
        simple: `
            <h3>🧱 Câu tiếng Anh đi theo trật tự khá cố định</h3>
            <p>Trong câu trần thuật cơ bản, tiếng Anh thường ưu tiên mẫu <strong>Subject + Verb + Object</strong>, sau đó mới thêm thời gian, nơi chốn, cách thức.</p>
            <div class="formula-box">Lan + reads + English books + every night.</div>
            <div class="example-box">
                <strong>Ví dụ:</strong><br>
                • <em>I drink coffee in the morning.</em><br>
                • <em>They study at the library after class.</em>
            </div>
            <ul>
                <li><strong>Subject:</strong> ai/cái gì làm hành động</li>
                <li><strong>Verb:</strong> hành động hoặc trạng thái</li>
                <li><strong>Object / Complement:</strong> phần nhận tác động hoặc bổ nghĩa</li>
            </ul>
        `,
        detail: `
            <h3>📚 Khung câu phổ biến</h3>
            <table>
                <tr><th>Mẫu</th><th>Ý nghĩa</th><th>Ví dụ</th></tr>
                <tr><td>S + V</td><td>động từ không cần tân ngữ</td><td>The baby cried.</td></tr>
                <tr><td>S + V + O</td><td>động từ có tân ngữ</td><td>She opened the door.</td></tr>
                <tr><td>S + be + C</td><td>trạng thái / mô tả</td><td>He is tired.</td></tr>
                <tr><td>S + V + O + O</td><td>hai tân ngữ</td><td>They gave me a gift.</td></tr>
            </table>
            <h4>Quy tắc hữu ích</h4>
            <ul>
                <li>Tính từ đứng trước danh từ: <strong>a difficult exam</strong>.</li>
                <li>Trạng từ tần suất thường đứng trước động từ thường nhưng sau <em>be</em>: <em>She always arrives early.</em></li>
                <li>Thông tin phụ như thời gian, địa điểm thường đi cuối câu để giữ câu rõ nghĩa.</li>
            </ul>
        `,
        advanced: `
            <h3>🎯 Điểm nâng cao</h3>
            <ul>
                <li><strong>Đảo ngữ</strong> chỉ xuất hiện trong cấu trúc đặc biệt như <em>Never have I seen...</em>, <em>Only then did he understand.</em></li>
                <li><strong>Fronting</strong> có thể đưa một cụm lên đầu câu để nhấn mạnh, nhưng lõi ngữ pháp của câu vẫn phải rõ: <em>In the corner stood an old piano.</em></li>
                <li>Khi câu dài, hãy xác định lõi <strong>S + V</strong> trước rồi mới kiểm tra mệnh đề phụ, cụm giới từ và trạng từ.</li>
            </ul>
            <div class="tip-box">
                <strong>💡 Cách sửa nhanh:</strong> Nếu câu của bạn nghe "dịch từ tiếng Việt sang", hãy kiểm tra xem có đang đặt trạng từ, tính từ, hoặc cụm thời gian ở sai vị trí không.
            </div>
        `
    },
    'parts-of-speech': {
        icon: '🔤',
        title: 'Từ Loại',
        category: 'foundations',
        level: 'beginner',
        connections: ['sentence-order', 'articles-determiners', 'adjectives-adverbs', 'gerunds-infinitives'],
        simple: `
            <h3>🔤 Từ loại là vai trò của từ trong câu</h3>
            <p>Một từ có thể là <strong>danh từ, động từ, tính từ, trạng từ</strong>... và việc xác định đúng từ loại quyết định cách bạn đặt từ vào câu.</p>
            <div class="example-box">
                <strong>Ví dụ:</strong><br>
                • <em>beauty</em> = danh từ<br>
                • <em>beautiful</em> = tính từ<br>
                • <em>beautifully</em> = trạng từ
            </div>
            <ul>
                <li><strong>Noun:</strong> người, vật, ý tưởng</li>
                <li><strong>Verb:</strong> hành động, trạng thái</li>
                <li><strong>Adjective:</strong> miêu tả danh từ</li>
                <li><strong>Adverb:</strong> miêu tả động từ, tính từ, cả câu</li>
            </ul>
        `,
        detail: `
            <h3>📚 Các từ loại quan trọng nhất</h3>
            <table>
                <tr><th>Từ loại</th><th>Câu hỏi gợi ý</th><th>Ví dụ</th></tr>
                <tr><td>Noun</td><td>Ai? Cái gì?</td><td>student, freedom</td></tr>
                <tr><td>Verb</td><td>Làm gì? Trạng thái gì?</td><td>write, seem</td></tr>
                <tr><td>Adjective</td><td>Như thế nào?</td><td>careful, useful</td></tr>
                <tr><td>Adverb</td><td>Như thế nào / đến mức nào?</td><td>carefully, extremely</td></tr>
                <tr><td>Preposition</td><td>Quan hệ gì?</td><td>in, on, with</td></tr>
                <tr><td>Conjunction</td><td>Nối cái gì?</td><td>and, although, because</td></tr>
                <tr><td>Pronoun</td><td>Thay cho ai/cái gì?</td><td>he, they, which</td></tr>
            </table>
            <h4>Dấu hiệu hình thức</h4>
            <ul>
                <li>Đuôi <strong>-tion, -ment, -ness, -ity</strong> thường là danh từ.</li>
                <li>Đuôi <strong>-ful, -ous, -able, -ive</strong> thường là tính từ.</li>
                <li>Đuôi <strong>-ly</strong> thường là trạng từ, nhưng có ngoại lệ như <em>friendly</em>, <em>lovely</em>.</li>
            </ul>
        `,
        advanced: `
            <h3>🎯 Điều người học hay quên</h3>
            <ul>
                <li>Một từ có thể đổi từ loại theo ngữ cảnh: <em>book</em> là danh từ, nhưng <em>book a ticket</em> là động từ.</li>
                <li>Trong writing, sai từ loại là lỗi rất "đắt" vì câu vẫn có vẻ đúng nhưng dùng sai chức năng: <em>successfully plan</em> khác <em>successful plan</em>.</li>
                <li>Khi học từ vựng mới, nên học theo "gia đình từ": noun, verb, adjective, adverb.</li>
            </ul>
            <div class="warning-box">
                <strong>⚠️ Lỗi phổ biến:</strong> Dùng tính từ thay cho trạng từ, ví dụ <em>She speaks fluent</em> thay vì <em>fluently</em>.
            </div>
        `
    },
    'articles-determiners': {
        icon: '📰',
        title: 'Mạo Từ & Từ Hạn Định',
        category: 'foundations',
        level: 'beginner',
        connections: ['countable-uncountable', 'pronouns-possessives', 'quantifiers', 'subject-verb-agreement'],
        simple: `
            <h3>📰 A, an, the và "không dùng gì"</h3>
            <p>Mạo từ giúp người nghe biết bạn đang nói về <strong>một thứ bất kỳ</strong>, <strong>một thứ đã xác định</strong>, hay đang nói chung.</p>
            <div class="example-box">
                <strong>Ví dụ:</strong><br>
                • <em>I bought a book.</em> = một quyển sách bất kỳ<br>
                • <em>The book is on the table.</em> = quyển sách đã được xác định
            </div>
            <ul>
                <li><strong>a / an:</strong> danh từ đếm được số ít, chưa xác định</li>
                <li><strong>the:</strong> thứ đã xác định hoặc duy nhất</li>
                <li><strong>zero article:</strong> danh từ số nhiều/không đếm được khi nói chung chung</li>
            </ul>
        `,
        detail: `
            <h3>📚 Cách chọn nhanh</h3>
            <table>
                <tr><th>Trường hợp</th><th>Dùng gì</th><th>Ví dụ</th></tr>
                <tr><td>Lần đầu nhắc đến</td><td>a / an</td><td>a teacher, an apple</td></tr>
                <tr><td>Đã xác định</td><td>the</td><td>the teacher we met</td></tr>
                <tr><td>Nói chung chung</td><td>không dùng</td><td>Books are useful.</td></tr>
                <tr><td>Danh từ duy nhất</td><td>the</td><td>the sun, the internet</td></tr>
            </table>
            <h4>Từ hạn định khác</h4>
            <ul>
                <li><strong>this / that / these / those</strong> chỉ gần-xa hoặc đã biết trong ngữ cảnh.</li>
                <li><strong>my / your / our</strong> là possessive determiners.</li>
                <li><strong>some / any / each / every / much / many</strong> cũng là determiners.</li>
            </ul>
        `,
        advanced: `
            <h3>🎯 Các bẫy rất hay sai</h3>
            <ul>
                <li><strong>an</strong> đi theo âm đầu chứ không đi theo chữ cái đầu: <em>an hour</em>, <em>a university</em>.</li>
                <li>Nhiều cụm cố định không có mạo từ: <em>go to school</em>, <em>be at home</em>, <em>go to bed</em>.</li>
                <li>Khi nói về cả một nhóm loài hoặc khái niệm chung, có thể dùng số nhiều không mạo từ: <em>Computers have changed education.</em></li>
            </ul>
            <div class="tip-box">
                <strong>💡 Mẹo:</strong> Trước khi viết danh từ, hãy tự hỏi 3 câu: nó có đếm được không, số ít hay số nhiều, người đọc đã biết nó là gì chưa?
            </div>
        `
    },
    'pronouns-possessives': {
        icon: '🫱',
        title: 'Đại Từ & Sở Hữu',
        category: 'foundations',
        level: 'beginner',
        connections: ['parts-of-speech', 'articles-determiners', 'relative-clauses', 'question-forms'],
        simple: `
            <h3>🫱 Đại từ giúp tránh lặp lại danh từ</h3>
            <p>Thay vì lặp đi lặp lại một danh từ, tiếng Anh dùng đại từ như <strong>I, me, she, it, they, mine, myself</strong>.</p>
            <div class="example-box">
                <strong>Ví dụ:</strong><br>
                • <em>Anna has a laptop. She uses it every day.</em><br>
                • <em>This pen is mine.</em>
            </div>
            <ul>
                <li><strong>Subject pronouns:</strong> I, you, he, she, it, we, they</li>
                <li><strong>Object pronouns:</strong> me, him, her, us, them</li>
                <li><strong>Possessive forms:</strong> my/mine, your/yours...</li>
            </ul>
        `,
        detail: `
            <h3>📚 Các nhóm chính</h3>
            <table>
                <tr><th>Nhóm</th><th>Ví dụ</th><th>Chức năng</th></tr>
                <tr><td>Subject pronouns</td><td>I, she, they</td><td>làm chủ ngữ</td></tr>
                <tr><td>Object pronouns</td><td>me, her, them</td><td>làm tân ngữ</td></tr>
                <tr><td>Possessive adjectives</td><td>my, your, their</td><td>đứng trước danh từ</td></tr>
                <tr><td>Possessive pronouns</td><td>mine, yours, theirs</td><td>đứng một mình</td></tr>
                <tr><td>Reflexive pronouns</td><td>myself, yourself</td><td>phản thân, nhấn mạnh</td></tr>
            </table>
            <h4>Ví dụ đúng</h4>
            <ul>
                <li><em>This is my bag.</em> nhưng <em>This bag is mine.</em></li>
                <li><em>She taught herself English.</em></li>
                <li><em>John and I</em> thường tự nhiên hơn <em>me and John</em> ở vị trí chủ ngữ.</li>
            </ul>
        `,
        advanced: `
            <h3>🎯 Điểm cần tinh ý</h3>
            <ul>
                <li><strong>it</strong> có thể chỉ đồ vật, động vật, tình huống, thời tiết, thời gian: <em>It is raining.</em></li>
                <li><strong>one / ones</strong> giúp tránh lặp danh từ trong văn viết: <em>The red one is cheaper.</em></li>
                <li>Trong văn trang trọng, cần rõ pronoun reference để tránh câu mơ hồ: <em>When Anna met Mai, she smiled</em> là câu chưa đủ rõ.</li>
            </ul>
            <div class="warning-box">
                <strong>⚠️ Lỗi phổ biến:</strong> Nhầm <em>my</em> và <em>mine</em>, hoặc dùng đại từ không rõ đang thay cho ai/cái gì.
            </div>
        `
    },
    'adjectives-adverbs': {
        icon: '🎨',
        title: 'Tính Từ & Trạng Từ',
        category: 'foundations',
        level: 'intermediate',
        connections: ['parts-of-speech', 'comparisons', 'sentence-order', 'quantifiers'],
        simple: `
            <h3>🎨 Tính từ miêu tả danh từ, trạng từ miêu tả phần còn lại</h3>
            <p>Nếu muốn nói một chiếc xe đẹp, dùng tính từ. Nếu muốn nói lái đẹp/khéo, dùng trạng từ.</p>
            <div class="example-box">
                <strong>Ví dụ:</strong><br>
                • <em>a careful driver</em><br>
                • <em>She drives carefully.</em>
            </div>
            <ul>
                <li><strong>Adjective:</strong> đứng trước danh từ hoặc sau động từ nối</li>
                <li><strong>Adverb:</strong> thường bổ nghĩa cho động từ, tính từ, trạng từ khác</li>
            </ul>
        `,
        detail: `
            <h3>📚 Vị trí thường gặp</h3>
            <table>
                <tr><th>Loại</th><th>Vị trí</th><th>Ví dụ</th></tr>
                <tr><td>Adjective</td><td>trước noun / sau be, seem, become</td><td>a smart student, She is smart.</td></tr>
                <tr><td>Adverb of manner</td><td>sau động từ hoặc tân ngữ</td><td>He speaks clearly.</td></tr>
                <tr><td>Adverb of frequency</td><td>trước động từ thường / sau be</td><td>She often reads.</td></tr>
                <tr><td>Degree adverb</td><td>trước adjective/adverb</td><td>very useful, quite slowly</td></tr>
            </table>
            <h4>Thứ tự nhiều tính từ</h4>
            <p>Khi có nhiều tính từ, thứ tự phổ biến là: <strong>opinion - size - age - shape - color - origin - material - purpose</strong>.</p>
            <div class="formula-box">a lovely small old round brown French wooden table</div>
        `,
        advanced: `
            <h3>🎯 Chỗ hay sai</h3>
            <ul>
                <li>Nhiều tính từ sau động từ nối chứ không dùng trạng từ: <em>I feel bad</em>, không phải <em>badly</em> nếu ý là tâm trạng.</li>
                <li>Một số từ có 2 dạng và sắc thái khác nhau: <em>hard</em> và <em>hardly</em>, <em>late</em> và <em>lately</em>.</li>
                <li>Trong writing, dùng trạng từ quá nhiều có thể làm câu yếu; đôi khi đổi sang động từ mạnh sẽ tốt hơn.</li>
            </ul>
            <div class="tip-box">
                <strong>💡 Mẹo:</strong> Nếu từ đó đang miêu tả một danh từ, gần như chắc chắn bạn cần adjective; nếu miêu tả cách hành động xảy ra, thường cần adverb.
            </div>
        `
    },
    'phrases-vs-clauses': {
        icon: '🧬',
        title: 'Phrase vs Clause',
        category: 'foundations',
        level: 'intermediate',
        connections: ['sentence-order', 'noun-clauses', 'relative-clauses', 'fragments-run-ons'],
        simple: `
            <h3>🧬 Phrase không có đủ chủ-vị, clause thì có</h3>
            <p>Đây là phân biệt nền tảng để hiểu vì sao một cụm từ chưa thể tự đứng thành câu, còn một mệnh đề thì có thể hoặc gần như có thể.</p>
            <div class="example-box">
                <strong>Ví dụ:</strong><br>
                • <em>in the room</em> = phrase<br>
                • <em>because she was tired</em> = clause
            </div>
            <ul>
                <li><strong>Phrase:</strong> cụm từ không có cả subject lẫn finite verb</li>
                <li><strong>Clause:</strong> có cấu trúc chủ-vị</li>
            </ul>
        `,
        detail: `
            <h3>📚 Các loại phrase và clause</h3>
            <table>
                <tr><th>Loại</th><th>Ví dụ</th><th>Vai trò</th></tr>
                <tr><td>Noun phrase</td><td>the tall boy</td><td>làm chủ ngữ/tân ngữ</td></tr>
                <tr><td>Verb phrase</td><td>has been working</td><td>cụm động từ</td></tr>
                <tr><td>Prepositional phrase</td><td>on the desk</td><td>bổ nghĩa</td></tr>
                <tr><td>Independent clause</td><td>She smiled.</td><td>đứng thành câu</td></tr>
                <tr><td>Dependent clause</td><td>because she smiled</td><td>cần mệnh đề chính</td></tr>
            </table>
            <ul>
                <li>Nhiều lỗi fragment xảy ra khi người học nhầm dependent clause thành câu hoàn chỉnh.</li>
                <li>Hiểu phrase vs clause giúp bạn rút gọn câu đúng cách trong writing.</li>
            </ul>
        `,
        advanced: `
            <h3>🎯 Ứng dụng trong câu phức</h3>
            <ul>
                <li>Relative clauses, noun clauses, adverbial clauses đều là các dạng clause có chức năng khác nhau.</li>
                <li>Participle clauses và reduced relative clauses là các cách biến clause thành cấu trúc ngắn hơn.</li>
                <li>Khi phân tích câu dài, hãy khoanh từng clause để tìm mệnh đề chính và tránh rơi vào run-on hoặc fragment.</li>
            </ul>
            <div class="tip-box">
                <strong>💡 Mẹo:</strong> Nếu cụm đó không có finite verb, rất có thể nó chỉ là phrase và không thể tự đứng làm câu.
            </div>
        `
    },
    'sentence-types': {
        icon: '🏷️',
        title: 'Các Loại Câu',
        category: 'foundations',
        level: 'intermediate',
        connections: ['sentence-order', 'question-forms', 'imperatives-requests', 'fragments-run-ons'],
        simple: `
            <h3>🏷️ Tiếng Anh có nhiều loại câu theo chức năng và cấu trúc</h3>
            <p>Phân loại câu giúp bạn chọn đúng dấu câu, intonation, và cấu trúc ngữ pháp.</p>
            <div class="example-box">
                <strong>Theo chức năng:</strong><br>
                • Statement<br>
                • Question<br>
                • Command<br>
                • Exclamation
            </div>
        `,
        detail: `
            <h3>📚 Theo cấu trúc</h3>
            <table>
                <tr><th>Loại</th><th>Mô tả</th><th>Ví dụ</th></tr>
                <tr><td>Simple sentence</td><td>1 independent clause</td><td>She reads every night.</td></tr>
                <tr><td>Compound sentence</td><td>2 independent clauses</td><td>She reads, and he writes.</td></tr>
                <tr><td>Complex sentence</td><td>1 main + 1 dependent clause</td><td>She reads because she enjoys learning.</td></tr>
                <tr><td>Compound-complex</td><td>nhiều mệnh đề kết hợp</td><td>She reads, and he listens while they study.</td></tr>
            </table>
            <ul>
                <li>Simple sentence không có nghĩa là câu ngắn; nó chỉ có một mệnh đề độc lập.</li>
                <li>Complex sentence thường giúp writing mượt hơn nếu dùng đúng.</li>
            </ul>
        `,
        advanced: `
            <h3>🎯 Chiến lược viết tốt</h3>
            <ul>
                <li>Trộn nhiều loại câu tạo nhịp điệu tốt hơn trong writing.</li>
                <li>Quá nhiều simple sentences làm văn rời rạc; quá nhiều compound-complex sentences làm văn nặng.</li>
                <li>Việc chọn loại câu phù hợp quan trọng hơn việc cố viết câu thật dài.</li>
            </ul>
            <div class="warning-box">
                <strong>⚠️ Lỗi phổ biến:</strong> Ghép nhiều mệnh đề mà không kiểm soát dấu câu, khiến câu từ complex biến thành run-on.
            </div>
        `
    },
    'subject-verb-agreement': {
        icon: '⚖️',
        title: 'Chủ Ngữ - Động Từ',
        category: 'foundations',
        level: 'intermediate',
        connections: ['sentence-order', 'present-simple', 'countable-uncountable', 'quantifiers'],
        simple: `
            <h3>⚖️ Động từ phải khớp với chủ ngữ thật</h3>
            <p>Nếu chủ ngữ là số ít, động từ thường là số ít. Nếu chủ ngữ là số nhiều, động từ thường là số nhiều.</p>
            <div class="formula-box">She works. | They work.</div>
            <div class="example-box">
                <strong>Lưu ý:</strong> Trong câu <em>The list of items is long</em>, chủ ngữ thật là <strong>list</strong>, không phải <strong>items</strong>.
            </div>
        `,
        detail: `
            <h3>📚 Các mẫu hay xuất hiện</h3>
            <ul>
                <li><strong>Each / every / everyone / somebody / nobody</strong> đi với động từ số ít.</li>
                <li><strong>A number of</strong> đi với động từ số nhiều, nhưng <strong>the number of</strong> đi với số ít.</li>
                <li>Với <strong>either...or / neither...nor</strong>, động từ thường hòa hợp với chủ ngữ đứng gần nhất.</li>
            </ul>
            <table>
                <tr><th>Mẫu</th><th>Đúng</th></tr>
                <tr><td>Each student</td><td>Each student has a card.</td></tr>
                <tr><td>A number of students</td><td>A number of students are absent.</td></tr>
                <tr><td>The number of students</td><td>The number of students is increasing.</td></tr>
            </table>
        `,
        advanced: `
            <h3>🎯 Điểm khó trong bài thi</h3>
            <ul>
                <li>Tên môn học, tiêu đề sách, lĩnh vực học thuật dù nhìn như số nhiều vẫn thường dùng động từ số ít: <em>Economics is fascinating.</em></li>
                <li>Danh từ tập hợp như <em>team, family, committee</em> thường dùng số ít trong Anh-Mỹ chuẩn.</li>
                <li><strong>None</strong> có thể đi với số ít hoặc số nhiều tùy ý nghĩa, nhưng trong bài viết chính thức nên nhất quán.</li>
            </ul>
            <div class="warning-box">
                <strong>⚠️ Lỗi phổ biến:</strong> Thấy danh từ số nhiều ở gần động từ là chia theo ngay, thay vì xác định chủ ngữ trung tâm của cụm danh từ.
            </div>
        `
    }
};
