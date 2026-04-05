// English Grammar Common Mistakes
const grammarMistakesData = {
    'prepositions': {
        icon: '📍',
        title: 'Giới Từ',
        category: 'mistakes',
        level: 'beginner',
        connections: ['articles-determiners', 'question-forms', 'countable-uncountable', 'sentence-order'],
        simple: `
            <h3>📍 Giới từ nhỏ nhưng sai rất dễ mất điểm</h3>
            <p>Giới từ thể hiện thời gian, vị trí, hướng đi và quan hệ giữa các thành phần trong câu.</p>
            <div class="formula-box">at + point | on + day/surface | in + month/year/space | to/into/onto + movement</div>
            <div class="example-box">
                <strong>Ví dụ cơ bản:</strong><br>
                • <em>at 7 o'clock</em><br>
                • <em>on Monday</em><br>
                • <em>in June</em><br>
                • <em>go to school</em> / <em>walk into the room</em>
            </div>
            <ul>
                <li><strong>at:</strong> điểm nhỏ, giờ giấc</li>
                <li><strong>on:</strong> ngày, bề mặt</li>
                <li><strong>in:</strong> tháng, năm, không gian bao quanh</li>
            </ul>
        `,
        detail: `
            <h3>📚 Khung dễ nhớ</h3>
            <table>
                <tr><th>Nhóm</th><th>Ví dụ</th></tr>
                <tr><td>Time</td><td>at noon, on Friday, in 2026</td></tr>
                <tr><td>Place</td><td>at the station, on the wall, in the room</td></tr>
                <tr><td>Movement</td><td>to school, into the room, onto the table</td></tr>
            </table>
            <h4>Điểm quan trọng</h4>
            <ul>
                <li>Nhiều giới từ đi theo collocation: <em>interested in</em>, <em>good at</em>, <em>depend on</em>.</li>
                <li>Không phải lúc nào tiếng Việt có giới từ thì tiếng Anh cũng giống hệt.</li>
                <li>Một số động từ không đi với giới từ mà người học hay thêm thừa: <em>discuss</em>, <em>enter</em>, <em>marry</em>.</li>
                <li>Cụm thời gian cố định rất nên học nguyên khối: <em>at night</em>, <em>in the morning</em>, <em>on time</em>, <em>in time</em>.</li>
            </ul>
        `,
        advanced: `
            <h3>🎯 Cách học hiệu quả</h3>
            <ul>
                <li>Học giới từ theo cụm từ thay vì học từng từ riêng lẻ.</li>
                <li>Phân biệt <strong>in time</strong> và <strong>on time</strong>, <strong>at night</strong> nhưng <strong>in the morning</strong>.</li>
                <li>Trong văn nói, giới từ thường ở cuối câu hỏi hoặc mệnh đề quan hệ: <em>Who are you talking to?</em></li>
            </ul>
            <div class="warning-box">
                <strong>⚠️ Lỗi phổ biến:</strong> Dịch từng chữ từ tiếng Việt sang, ví dụ <em>discuss about</em> dù <em>discuss</em> đã không cần <em>about</em>.
            </div>
        `
    },
    'gerunds-infinitives': {
        icon: '🔄',
        title: 'Gerund & Infinitive',
        category: 'mistakes',
        level: 'intermediate',
        connections: ['parts-of-speech', 'modal-verbs', 'conjunctions', 'causatives'],
        simple: `
            <h3>🔄 Sau một số động từ là V-ing, số khác là to + V</h3>
            <p>Đây là nhóm lỗi cực phổ biến vì nhiều động từ có mẫu theo sau cố định.</p>
            <div class="example-box">
                <strong>Ví dụ:</strong><br>
                • <em>I enjoy reading.</em><br>
                • <em>She wants to study abroad.</em>
            </div>
        `,
        detail: `
            <h3>📚 Một số nhóm rất thường gặp</h3>
            <table>
                <tr><th>Mẫu</th><th>Động từ quen thuộc</th></tr>
                <tr><td>Verb + V-ing</td><td>enjoy, avoid, finish, keep, suggest</td></tr>
                <tr><td>Verb + to V</td><td>want, decide, hope, plan, promise</td></tr>
                <tr><td>Verb + object + to V</td><td>ask, tell, advise, encourage, allow</td></tr>
            </table>
            <h4>Các động từ đổi nghĩa</h4>
            <ul>
                <li><strong>stop smoking</strong> = dừng việc hút thuốc</li>
                <li><strong>stop to smoke</strong> = dừng lại để hút thuốc</li>
                <li><strong>remember doing</strong> khác <strong>remember to do</strong></li>
                <li><strong>try doing</strong> khác <strong>try to do</strong></li>
            </ul>
        `,
        advanced: `
            <h3>🎯 Quy tắc mở rộng</h3>
            <ul>
                <li>Sau giới từ luôn ưu tiên <strong>V-ing</strong>: <em>good at solving problems</em>.</li>
                <li>Sau tính từ thường gặp <strong>to V</strong>: <em>happy to help</em>, <em>easy to understand</em>.</li>
                <li>Khi ghi nhớ mẫu, hãy học cả câu ví dụ thay vì thuộc danh sách rời.</li>
            </ul>
            <div class="tip-box">
                <strong>💡 Mẹo:</strong> Tạo flashcard theo cụm như <em>avoid doing</em>, <em>decide to do</em>, <em>be interested in doing</em>.
            </div>
        `
    },
    'countable-uncountable': {
        icon: '📦',
        title: 'Countable / Uncountable',
        category: 'mistakes',
        level: 'intermediate',
        connections: ['articles-determiners', 'subject-verb-agreement', 'quantifiers', 'prepositions'],
        simple: `
            <h3>📦 Danh từ đếm được và không đếm được ảnh hưởng cả mạo từ lẫn động từ</h3>
            <p>Nếu xác định sai loại danh từ, bạn rất dễ sai <strong>a/an, many/much, is/are</strong>.</p>
            <div class="example-box">
                <strong>Ví dụ:</strong><br>
                • <em>a book / many books</em><br>
                • <em>some water / much water</em>
            </div>
        `,
        detail: `
            <h3>📚 Cách dùng quen thuộc</h3>
            <table>
                <tr><th>Loại</th><th>Lượng từ thường dùng</th><th>Ví dụ</th></tr>
                <tr><td>Countable</td><td>many, a few, several</td><td>many ideas</td></tr>
                <tr><td>Uncountable</td><td>much, a little, a piece of</td><td>a piece of advice</td></tr>
            </table>
            <h4>Một số danh từ hay nhầm là không đếm được</h4>
            <ul>
                <li><strong>information, advice, furniture, homework, luggage, equipment</strong></li>
                <li>Không nói <em>an advice</em>; nói <em>a piece of advice</em>.</li>
            </ul>
        `,
        advanced: `
            <h3>🎯 Danh từ đổi nghĩa khi đổi loại</h3>
            <ul>
                <li><strong>chicken</strong> có thể là thịt gà (không đếm được) hoặc con gà (đếm được).</li>
                <li><strong>paper</strong> có thể là giấy hoặc một bài báo/tờ báo tùy ngữ cảnh.</li>
                <li>Trong bài thi, chọn sai countable/uncountable kéo theo sai cả article, verb, quantifier.</li>
            </ul>
            <div class="warning-box">
                <strong>⚠️ Lỗi phổ biến:</strong> Dùng <em>many money</em>, <em>an information</em>, hoặc chia động từ số nhiều cho danh từ không đếm được.
            </div>
        `
    },
    'quantifiers': {
        icon: '🧮',
        title: 'Quantifiers',
        category: 'mistakes',
        level: 'intermediate',
        connections: ['countable-uncountable', 'articles-determiners', 'subject-verb-agreement', 'comparisons'],
        simple: `
            <h3>🧮 Quantifiers nói về số lượng nhưng phải khớp loại danh từ</h3>
            <p>Nhóm này gồm các từ như <strong>some, any, much, many, few, little, a lot of</strong>.</p>
            <div class="example-box">
                <strong>Ví dụ:</strong><br>
                • <em>many books</em><br>
                • <em>much time</em><br>
                • <em>a few friends</em><br>
                • <em>a little water</em>
            </div>
        `,
        detail: `
            <h3>📚 Cách phân biệt nhanh</h3>
            <table>
                <tr><th>Quantifier</th><th>Dùng với</th><th>Sắc thái</th></tr>
                <tr><td>many</td><td>countable plural</td><td>trung tính</td></tr>
                <tr><td>much</td><td>uncountable</td><td>thường trong phủ định/câu hỏi</td></tr>
                <tr><td>a few</td><td>countable plural</td><td>ít nhưng đủ / tích cực</td></tr>
                <tr><td>few</td><td>countable plural</td><td>rất ít / hơi tiêu cực</td></tr>
                <tr><td>a little</td><td>uncountable</td><td>ít nhưng đủ / tích cực</td></tr>
                <tr><td>little</td><td>uncountable</td><td>rất ít / hơi tiêu cực</td></tr>
            </table>
            <ul>
                <li><strong>some</strong> thường trong câu khẳng định, <strong>any</strong> thường trong phủ định và câu hỏi.</li>
                <li><strong>a lot of / lots of</strong> dùng được cho cả countable lẫn uncountable.</li>
            </ul>
        `,
        advanced: `
            <h3>🎯 Điểm tinh tế</h3>
            <ul>
                <li><strong>some</strong> vẫn có thể dùng trong câu hỏi khi đưa lời mời hoặc đề nghị: <em>Would you like some coffee?</em></li>
                <li><strong>much</strong> ít tự nhiên trong câu khẳng định đời thường; người bản ngữ hay dùng <em>a lot of</em>.</li>
                <li>Trong writing, chọn đúng quantifier giúp câu chính xác hơn nhiều khi mô tả dữ liệu và xu hướng.</li>
            </ul>
            <div class="tip-box">
                <strong>💡 Mẹo:</strong> Hãy xác định danh từ là countable hay uncountable trước, rồi mới chọn quantifier.
            </div>
        `
    },
    'fragments-run-ons': {
        icon: '🧵',
        title: 'Fragments & Run-ons',
        category: 'mistakes',
        level: 'advanced',
        connections: ['sentence-order', 'conjunctions', 'punctuation-capitalization', 'noun-clauses'],
        simple: `
            <h3>🧵 Nhiều câu sai không vì từ vựng, mà vì chưa thành "câu hoàn chỉnh"</h3>
            <p>Một câu hoàn chỉnh cần ít nhất một <strong>independent clause</strong>. Nếu thiếu hoặc nối sai, bạn sẽ tạo ra fragment hoặc run-on.</p>
            <div class="example-box">
                <strong>Ví dụ sai:</strong><br>
                • <em>Because I was tired.</em> = fragment<br>
                • <em>I was tired I went home.</em> = run-on
            </div>
        `,
        detail: `
            <h3>📚 Hai lỗi lớn</h3>
            <table>
                <tr><th>Lỗi</th><th>Mô tả</th><th>Cách sửa</th></tr>
                <tr><td>Fragment</td><td>mệnh đề chưa hoàn chỉnh</td><td>ghép với mệnh đề chính hoặc bổ sung chủ-vị</td></tr>
                <tr><td>Run-on / comma splice</td><td>nối hai mệnh đề độc lập sai cách</td><td>dùng dấu chấm, dấu chấm phẩy, hoặc conjunction</td></tr>
            </table>
            <h4>Ví dụ sửa</h4>
            <ul>
                <li><em>Because I was tired, I went home.</em></li>
                <li><em>I was tired, so I went home.</em></li>
                <li><em>I was tired. I went home.</em></li>
            </ul>
        `,
        advanced: `
            <h3>🎯 Tại sao lỗi này quan trọng</h3>
            <ul>
                <li>Trong IELTS/TOEFL hoặc academic writing, câu fragment và comma splice bị coi là lỗi cấu trúc nghiêm trọng.</li>
                <li>Nhiều người viết câu dài để "trông học thuật" nhưng lại nối sai mệnh đề.</li>
                <li>Câu tốt không cần dài; nó cần có quan hệ logic rõ và dấu câu đúng.</li>
            </ul>
            <div class="warning-box">
                <strong>⚠️ Lỗi phổ biến:</strong> Thêm <em>because, although, when</em> vào đầu câu rồi quên mệnh đề chính, khiến câu bị treo.
            </div>
        `
    },
    'punctuation-capitalization': {
        icon: '✍️',
        title: 'Dấu Câu & Viết Hoa',
        category: 'mistakes',
        level: 'beginner',
        connections: ['conjunctions', 'fragments-run-ons', 'reported-speech', 'relative-clauses'],
        simple: `
            <h3>✍️ Dấu câu và viết hoa là phần nhỏ nhưng ảnh hưởng mạnh tới độ rõ ràng</h3>
            <p>Nhiều câu không sai ngữ pháp lõi nhưng vẫn kém tự nhiên hoặc khó đọc vì dấu câu và viết hoa không chuẩn.</p>
            <div class="example-box">
                <strong>Ví dụ:</strong><br>
                • <em>My name is Linh.</em><br>
                • <em>After class, we went for coffee.</em>
            </div>
        `,
        detail: `
            <h3>📚 Các quy tắc cần nhớ</h3>
            <ul>
                <li>Viết hoa đầu câu, tên riêng, quốc gia, ngôn ngữ, ngày lễ.</li>
                <li>Dùng dấu phẩy sau mệnh đề phụ đứng đầu: <em>Although it was late, we kept working.</em></li>
                <li>Dùng dấu nháy đơn cho sở hữu: <em>Lan's book</em>, <em>students' projects</em>.</li>
                <li>Dấu hai chấm và chấm phẩy có chức năng riêng, không thay ngẫu nhiên cho dấu phẩy.</li>
            </ul>
            <table>
                <tr><th>Dấu</th><th>Chức năng cơ bản</th></tr>
                <tr><td>.</td><td>kết thúc câu hoàn chỉnh</td></tr>
                <tr><td>,</td><td>ngắt nhẹ, tách thành phần</td></tr>
                <tr><td>;</td><td>nối hai mệnh đề độc lập có quan hệ gần</td></tr>
                <tr><td>:</td><td>mở danh sách, giải thích</td></tr>
            </table>
        `,
        advanced: `
            <h3>🎯 Những lỗi rất hay gặp</h3>
            <ul>
                <li>Viết hoa sai ở tên môn học, quốc tịch, ngôn ngữ: <em>English</em> viết hoa, nhưng <em>math</em> thường không viết hoa nếu dùng chung chung.</li>
                <li>Nhầm <strong>it's</strong> và <strong>its</strong>.</li>
                <li>Dùng quá nhiều dấu phẩy trong câu ngắn hoặc bỏ hoàn toàn dấu phẩy ở câu dài có mệnh đề phụ.</li>
            </ul>
            <div class="tip-box">
                <strong>💡 Mẹo:</strong> Khi rà bài, hãy kiểm tra riêng một lượt cho punctuation thay vì sửa chung với ngữ pháp và từ vựng.
            </div>
        `
    },
    'modifier-errors': {
        icon: '🎯',
        title: 'Misplaced Modifiers',
        category: 'mistakes',
        level: 'advanced',
        connections: ['adjectives-adverbs', 'participle-clauses', 'sentence-order', 'pronoun-reference'],
        simple: `
            <h3>🎯 Modifier đặt sai chỗ có thể làm câu đổi nghĩa hoàn toàn</h3>
            <p>Modifier là phần bổ nghĩa. Nếu đặt sai, nó sẽ bám vào sai từ hoặc làm câu trở nên buồn cười.</p>
            <div class="example-box">
                <strong>Ví dụ:</strong><br>
                • <em>She almost drove her kids to school every day.</em><br>
                Câu này nghĩa là "suýt lái", không phải "gần như ngày nào cũng lái".<br>
                Tự nhiên hơn: <em>She drove her kids to school almost every day.</em>
            </div>
        `,
        detail: `
            <h3>📚 Các lỗi thường gặp</h3>
            <ul>
                <li><strong>Misplaced modifier:</strong> đặt modifier cạnh sai thành phần.</li>
                <li><strong>Dangling modifier:</strong> modifier không có đối tượng rõ để bám vào.</li>
                <li>Trạng từ như <strong>only, almost, nearly, just</strong> đặc biệt nhạy cảm với vị trí.</li>
            </ul>
            <table>
                <tr><th>Lỗi</th><th>Sai</th><th>Tốt hơn</th></tr>
                <tr><td>Only placement</td><td>He only eats vegetables on weekends.</td><td>Tùy ý nghĩa cần đặt lại only</td></tr>
                <tr><td>Dangling</td><td>Walking to work, the rain started.</td><td>Walking to work, I saw the rain start.</td></tr>
            </table>
        `,
        advanced: `
            <h3>🎯 Vì sao đây là lỗi nghiêm trọng</h3>
            <ul>
                <li>Nó không chỉ làm câu kém tự nhiên mà còn làm nghĩa sai.</li>
                <li>Trong academic writing, dangling modifiers bị xem là lỗi logic chứ không chỉ là lỗi văn phong.</li>
                <li>Các participle clauses, introductory phrases và adverbs of focus là nơi dễ mắc nhất.</li>
            </ul>
            <div class="warning-box">
                <strong>⚠️ Lỗi phổ biến:</strong> Viết một cụm mở đầu nhưng chủ ngữ thật của câu lại không phải người/vật thực hiện hành động trong cụm đó.
            </div>
        `
    },
    'pronoun-reference': {
        icon: '🧷',
        title: 'Pronoun Reference',
        category: 'mistakes',
        level: 'advanced',
        connections: ['pronouns-possessives', 'relative-clauses', 'reported-speech', 'modifier-errors'],
        simple: `
            <h3>🧷 Pronoun reference là việc đại từ phải chỉ đúng và rõ đối tượng</h3>
            <p>Nếu người đọc không biết <em>he, she, it, they, this, that</em> đang chỉ ai/cái gì, câu sẽ mơ hồ.</p>
            <div class="example-box">
                <strong>Ví dụ mơ hồ:</strong><br>
                <em>When Nam met Long, he was nervous.</em><br>
                Không rõ ai đang nervous.
            </div>
        `,
        detail: `
            <h3>📚 Các dạng mơ hồ phổ biến</h3>
            <ul>
                <li>Hai người / hai vật cùng giới hoặc cùng loại xuất hiện gần nhau.</li>
                <li>Dùng <strong>this, that, it</strong> mà không có antecedent rõ.</li>
                <li>Dùng pronoun để chỉ cả một ý dài nhưng không nhắc lại rõ ràng.</li>
            </ul>
            <table>
                <tr><th>Kiểu</th><th>Ví dụ</th><th>Cách sửa</th></tr>
                <tr><td>Ambiguous he/she</td><td>Mai told Linh she was late.</td><td>Mai told Linh, "You are late."</td></tr>
                <tr><td>Unclear this</td><td>This shows a problem.</td><td>This trend shows a problem.</td></tr>
                <tr><td>Broad it</td><td>It is important.</td><td>Reducing costs is important.</td></tr>
            </table>
        `,
        advanced: `
            <h3>🎯 Cách viết rõ hơn</h3>
            <ul>
                <li>Khi có nguy cơ mơ hồ, lặp lại danh từ sẽ tốt hơn dùng pronoun.</li>
                <li>Trong academic writing, tránh dùng <strong>this</strong> đứng một mình; hãy thêm danh từ như <em>this issue, this pattern, this finding</em>.</li>
                <li>Pronoun reference rõ ràng giúp câu ngắn mà vẫn chính xác, nhất là trong đoạn nhiều nhân vật hoặc nhiều biến.</li>
            </ul>
            <div class="tip-box">
                <strong>💡 Mẹo:</strong> Sau khi viết pronoun, hãy hỏi "người đọc lần đầu có biết ngay nó chỉ ai/cái gì không?"
            </div>
        `
    }
};
