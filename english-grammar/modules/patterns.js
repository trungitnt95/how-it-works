// English Grammar Patterns
const grammarPatternsData = {
    'question-forms': {
        icon: '❓',
        title: 'Câu Hỏi',
        category: 'patterns',
        level: 'beginner',
        connections: ['sentence-order', 'present-simple', 'past-simple', 'negatives'],
        simple: `
            <h3>❓ Muốn hỏi đúng, phải có trợ động từ đúng</h3>
            <p>Tiếng Anh không chỉ thêm dấu hỏi. Bạn thường phải đảo <strong>auxiliary verb</strong> lên trước chủ ngữ.</p>
            <div class="formula-box">Do/Does/Did + S + V?</div>
            <div class="example-box">
                <strong>Ví dụ:</strong><br>
                • <em>Do you like coffee?</em><br>
                • <em>Where did she go?</em>
            </div>
        `,
        detail: `
            <h3>📚 Ba kiểu câu hỏi chính</h3>
            <ul>
                <li><strong>Yes/No question:</strong> bắt đầu bằng do, does, did, is, are, can...</li>
                <li><strong>Wh-question:</strong> what, where, when, why, who, how...</li>
                <li><strong>Subject question:</strong> khi từ để hỏi chính là chủ ngữ, không cần do/does/did: <em>Who called you?</em></li>
            </ul>
            <h4>Trình tự an toàn</h4>
            <ol>
                <li>Chọn đúng thì</li>
                <li>Chọn đúng trợ động từ</li>
                <li>Giữ động từ chính ở dạng nguyên mẫu nếu đã có do/does/did</li>
            </ol>
        `,
        advanced: `
            <h3>🎯 Điểm nâng cao</h3>
            <ul>
                <li><strong>Indirect questions:</strong> <em>Could you tell me where the station is?</em> không đảo như câu hỏi trực tiếp.</li>
                <li><strong>Tag questions:</strong> <em>You're ready, aren't you?</em></li>
                <li>Trong văn lịch sự, gián tiếp hóa câu hỏi làm giọng văn mềm hơn và tự nhiên hơn.</li>
            </ul>
            <div class="warning-box">
                <strong>⚠️ Lỗi phổ biến:</strong> Dùng hai lần chia thì, ví dụ <em>Where did she went?</em> thay vì <em>Where did she go?</em>
            </div>
        `
    },
    'negatives': {
        icon: '🚫',
        title: 'Câu Phủ Định',
        category: 'patterns',
        level: 'beginner',
        connections: ['question-forms', 'present-simple', 'present-continuous', 'fragments-run-ons'],
        simple: `
            <h3>🚫 Phủ định trong tiếng Anh cần đúng trợ động từ</h3>
            <p>Bạn không chỉ thêm "not" vào mọi nơi. Vị trí của <strong>not</strong> phụ thuộc vào động từ chính và thì của câu.</p>
            <div class="example-box">
                <strong>Ví dụ:</strong><br>
                • <em>I do not understand.</em><br>
                • <em>She is not ready.</em><br>
                • <em>They cannot swim.</em>
            </div>
        `,
        detail: `
            <h3>📚 Các mẫu phủ định cơ bản</h3>
            <table>
                <tr><th>Loại câu</th><th>Mẫu</th><th>Ví dụ</th></tr>
                <tr><td>Động từ thường hiện tại</td><td>do/does not + V</td><td>He does not work here.</td></tr>
                <tr><td>Động từ thường quá khứ</td><td>did not + V</td><td>We did not see her.</td></tr>
                <tr><td>To be</td><td>be + not</td><td>I am not busy.</td></tr>
                <tr><td>Modal verbs</td><td>modal + not + V</td><td>You should not worry.</td></tr>
            </table>
            <h4>Từ phủ định thường gặp</h4>
            <ul>
                <li><strong>not, never, no, nobody, nothing, nowhere, neither</strong></li>
                <li>Dùng một yếu tố phủ định mạnh là đủ trong câu chuẩn.</li>
            </ul>
        `,
        advanced: `
            <h3>🎯 Chỗ người học hay sai</h3>
            <ul>
                <li>Tiếng Anh chuẩn thường tránh <strong>double negative</strong>: <em>I don't know anything</em> tự nhiên hơn <em>I don't know nothing</em>.</li>
                <li><strong>Not all...</strong> khác nghĩa với <strong>All ... not</strong>; phủ định phạm vi là điểm rất quan trọng trong writing.</li>
                <li><strong>Hardly, barely, rarely, scarcely</strong> có sắc thái phủ định nhẹ và đôi khi kéo theo đảo ngữ trong văn trang trọng.</li>
            </ul>
            <div class="tip-box">
                <strong>💡 Mẹo:</strong> Nếu câu đã có <em>don't / isn't / can't</em>, các từ đi sau thường là <em>anything, anyone, anywhere</em> chứ không phải <em>nothing, nobody, nowhere</em>.
            </div>
        `
    },
    'conjunctions': {
        icon: '🔗',
        title: 'Liên Từ',
        category: 'patterns',
        level: 'intermediate',
        connections: ['sentence-order', 'relative-clauses', 'conditionals', 'reported-speech'],
        simple: `
            <h3>🔗 Liên từ giúp nối ý logic</h3>
            <p>Liên từ cho biết quan hệ giữa hai ý: thêm ý, đối lập, nguyên nhân, kết quả, điều kiện...</p>
            <div class="formula-box">Clause, coordinating conjunction + clause | subordinating conjunction + clause, clause</div>
            <div class="example-box">
                <strong>Ví dụ:</strong><br>
                • <em>I was tired, but I finished the report.</em><br>
                • <em>She stayed home because it was raining.</em><br>
                • <em>Although he was late, he still joined the meeting.</em>
            </div>
            <ul>
                <li><strong>and:</strong> thêm ý</li>
                <li><strong>but:</strong> đối lập</li>
                <li><strong>because:</strong> nguyên nhân</li>
                <li><strong>so:</strong> kết quả</li>
            </ul>
        `,
        detail: `
            <h3>📚 Hai nhóm chính</h3>
            <table>
                <tr><th>Nhóm</th><th>Ví dụ</th><th>Chức năng</th></tr>
                <tr><td>Coordinating</td><td>and, but, or, so, nor</td><td>Nối hai phần ngang hàng</td></tr>
                <tr><td>Subordinating</td><td>because, although, if, when, while, since</td><td>Tạo mệnh đề phụ thuộc</td></tr>
            </table>
            <h4>Quy tắc nhanh</h4>
            <ul>
                <li>Nếu nối hai mệnh đề độc lập bằng <strong>and/but/so</strong>, thường cần dấu phẩy.</li>
                <li>Với <strong>because/although/if/when</strong>, mệnh đề phụ có thể đứng trước hoặc sau.</li>
                <li>Giữ cấu trúc song song: <em>She likes reading, writing, and speaking.</em></li>
            </ul>
        `,
        advanced: `
            <h3>🎯 Chọn liên từ theo sắc thái</h3>
            <ul>
                <li><strong>because</strong> nhấn nguyên nhân trực tiếp, còn <strong>since / as</strong> thường nghe nhẹ hoặc văn viết hơn.</li>
                <li><strong>although</strong> và <strong>but</strong> không dùng cùng nhau trong một cấu trúc chuẩn.</li>
                <li>Trong writing học thuật, cần thêm các connectors như <em>however, therefore, whereas, moreover, nevertheless</em>.</li>
            </ul>
            <div class="tip-box">
                <strong>💡 Mẹo:</strong> Viết xong hãy hỏi "ý thứ hai đang bổ sung, phản bác, giải thích hay đặt điều kiện cho ý thứ nhất?" rồi mới chọn liên từ.
            </div>
        `
    },
    'comparisons': {
        icon: '📏',
        title: 'So Sánh',
        category: 'patterns',
        level: 'intermediate',
        connections: ['adjectives-adverbs', 'quantifiers', 'sentence-order', 'subject-verb-agreement'],
        simple: `
            <h3>📏 So sánh dùng để đối chiếu mức độ, số lượng hoặc chất lượng</h3>
            <p>Phần này nên học theo mẫu cấu trúc trước, rồi mới học ngoại lệ. Chỉ cần nắm đúng công thức là bạn sẽ viết câu so sánh chính xác hơn nhiều.</p>
            <div class="example-box">
                <strong>Ví dụ:</strong><br>
                • <em>This test is easier than the last one.</em><br>
                • <em>Mai is the most careful student in the class.</em>
            </div>
            <ul>
                <li><strong>Comparative:</strong> so sánh hơn</li>
                <li><strong>Superlative:</strong> so sánh nhất</li>
                <li><strong>Equality:</strong> ngang bằng với <em>as...as</em></li>
            </ul>
        `,
        detail: `
            <h3>📚 Công thức mẫu cho từng loại</h3>
            <table>
                <tr><th>Loại</th><th>Công thức</th><th>Ví dụ</th></tr>
                <tr><td>So sánh hơn với tính từ ngắn</td><td>S + be + adj-er + than + N/pronoun</td><td>She is taller than me.</td></tr>
                <tr><td>So sánh hơn với tính từ dài</td><td>S + be + more + adj + than + N/pronoun</td><td>This book is more interesting than that one.</td></tr>
                <tr><td>So sánh hơn với trạng từ</td><td>S + V + more/adv-er + than + N/pronoun</td><td>He drives more carefully than his brother.</td></tr>
                <tr><td>So sánh nhất với tính từ ngắn</td><td>S + be + the + adj-est + (in/of + group)</td><td>She is the fastest runner in the team.</td></tr>
                <tr><td>So sánh nhất với tính từ dài</td><td>S + be + the most + adj + (in/of + group)</td><td>This is the most expensive hotel in town.</td></tr>
                <tr><td>Ngang bằng</td><td>S + be + as + adj/adv + as + N/pronoun</td><td>He is as tall as his father.</td></tr>
                <tr><td>Kém hơn</td><td>S + be + not as/so + adj/adv + as + N/pronoun</td><td>This bag is not as heavy as that one.</td></tr>
                <tr><td>Danh từ đếm được</td><td>fewer + plural noun + than</td><td>I have fewer books than you.</td></tr>
                <tr><td>Danh từ không đếm được</td><td>less + uncountable noun + than</td><td>We need less water.</td></tr>
                <tr><td>So sánh tăng dần</td><td>the more + adj, the more + adj</td><td>The more you practice, the better you get.</td></tr>
                <tr><td>Giống / khác</td><td>the same as / different from / similar to</td><td>This phone is the same as mine.</td></tr>
            </table>
            <h4>Cấu trúc cần nhớ</h4>
            <ul>
                <li><strong>more + adj + than</strong> dùng với nhiều tính từ/trạng từ dài.</li>
                <li><strong>-er + than</strong> dùng với nhiều tính từ/trạng từ ngắn.</li>
                <li><strong>the + superlative</strong> thường đi với <em>in + nơi chốn</em> hoặc <em>of + nhóm</em>.</li>
                <li><strong>as + adj/adv + as</strong> là mẫu ngang bằng chuẩn.</li>
                <li><strong>fewer / less</strong> phân biệt theo danh từ đếm được và không đếm được.</li>
                <li><strong>much / far / a lot / a bit / a little</strong> có thể đứng trước comparative để tăng hoặc giảm mức độ.</li>
            </ul>
        `,
        advanced: `
            <h3>🎯 Mẹo học nhanh và lỗi cần tránh</h3>
            <ul>
                <li>Không dùng kép như <em>more easier</em>, <em>most fastest</em>, <em>more better</em>.</li>
                <li>Không quên <em>than</em> sau comparative và <em>the</em> trước superlative.</li>
                <li>Không dùng <em>fewer</em> với danh từ không đếm được, hoặc <em>less</em> với danh từ số nhiều đếm được.</li>
                <li><em>good / bad / far / little</em> là bất quy tắc, phải học thuộc mẫu.</li>
                <li>So sánh phải cùng loại đối tượng: người với người, vật với vật, số liệu với số liệu.</li>
            </ul>
            <div class="warning-box">
                <strong>⚠️ Lỗi phổ biến:</strong> Dùng sai mẫu như <em>as tall than</em>, <em>the most cheapest</em> hoặc <em>more taller</em>.
            </div>
        `
    },
    'imperatives-requests': {
        icon: '👉',
        title: 'Imperatives & Requests',
        category: 'patterns',
        level: 'beginner',
        connections: ['question-forms', 'modal-verbs', 'negatives', 'sentence-types'],
        simple: `
            <h3>👉 Imperatives dùng để ra lệnh, hướng dẫn, yêu cầu hoặc đề nghị</h3>
            <p>Chủ ngữ thường được ẩn đi. Bạn dùng dạng động từ nguyên mẫu để nói trực tiếp với người nghe.</p>
            <div class="example-box">
                <strong>Ví dụ:</strong><br>
                • <em>Open the window.</em><br>
                • <em>Please sit down.</em><br>
                • <em>Don't touch that.</em>
            </div>
            <div class="formula-box">V + ... | Don't + V + ... | Please + V + ... | Let's + V + ...</div>
        `,
        detail: `
            <h3>📚 Các mẫu chính</h3>
            <table>
                <tr><th>Mẫu</th><th>Công thức</th><th>Ví dụ</th></tr>
                <tr><td>Mệnh lệnh / hướng dẫn</td><td>V + ...</td><td>Open the window.</td></tr>
                <tr><td>Phủ định</td><td>Don't + V + ...</td><td>Don't touch that.</td></tr>
                <tr><td>Yêu cầu lịch sự</td><td>Please + V + ...</td><td>Please wait here.</td></tr>
                <tr><td>Đề nghị cùng làm</td><td>Let's + V + ...</td><td>Let's start now.</td></tr>
                <tr><td>Lời nhắc / cảnh báo</td><td>Be careful / Watch out / Mind...</td><td>Be careful with the glass.</td></tr>
            </table>
            <ul>
                <li>Trong giao tiếp lịch sự, yêu cầu thường đổi thành câu hỏi với <em>could, would, can</em>.</li>
                <li>Instructions, recipes, manuals dùng imperative rất nhiều.</li>
                <li>Với ngôi phủ định của lời đề nghị: <em>Let's not + V</em>.</li>
            </ul>
        `,
        advanced: `
            <h3>🎯 Mức độ lịch sự và biến thể</h3>
            <ul>
                <li><em>Open the file.</em> trực tiếp hơn <em>Could you open the file?</em></li>
                <li><strong>let's not</strong> dùng cho phủ định lời đề nghị chung: <em>Let's not argue now.</em></li>
                <li>Trong email công việc, imperative ngắn gọn vẫn dùng được nếu ngữ cảnh đủ lịch sự: <em>Please find the file attached.</em></li>
                <li>Một số câu như <em>Have a seat</em>, <em>Take a look</em>, <em>Enjoy your meal</em> là imperative cố định trong giao tiếp.</li>
            </ul>
            <div class="tip-box">
                <strong>💡 Mẹo:</strong> Nếu không chắc mức độ lịch sự, chuyển imperative thành request với <em>could/would</em>.
            </div>
        `
    },
    'relative-clauses': {
        icon: '🪢',
        title: 'Mệnh Đề Quan Hệ',
        category: 'patterns',
        level: 'advanced',
        connections: ['conjunctions', 'parts-of-speech', 'passive-voice', 'pronouns-possessives'],
        simple: `
            <h3>🪢 Mệnh đề quan hệ giúp gộp câu</h3>
            <p>Thay vì viết hai câu ngắn, bạn có thể dùng <strong>who, which, that, where, whose</strong> để nối lại.</p>
            <div class="example-box">
                <strong>Ví dụ:</strong><br>
                • <em>The man who called you is my boss.</em><br>
                • <em>The book that I bought is useful.</em>
            </div>
            <ul>
                <li><strong>who:</strong> người</li>
                <li><strong>which:</strong> vật/sự việc</li>
                <li><strong>that:</strong> thay cho who/which trong mệnh đề xác định</li>
            </ul>
        `,
        detail: `
            <h3>📚 Hai loại quan trọng</h3>
            <table>
                <tr><th>Loại</th><th>Chức năng</th><th>Dấu phẩy</th></tr>
                <tr><td>Defining clause</td><td>Giới hạn danh từ</td><td>Không có</td></tr>
                <tr><td>Non-defining clause</td><td>Thêm thông tin phụ</td><td>Có dấu phẩy</td></tr>
            </table>
            <h4>Ví dụ</h4>
            <ul>
                <li><em>Students who study daily improve faster.</em></li>
                <li><em>My laptop, which I bought last year, still works well.</em></li>
                <li><em>The girl whose brother lives abroad is my friend.</em></li>
            </ul>
        `,
        advanced: `
            <h3>🎯 Chỗ hay xuất hiện trong đề thi</h3>
            <ul>
                <li>Có thể lược bỏ đại từ quan hệ khi nó làm tân ngữ: <em>The movie (that) we watched</em>.</li>
                <li>Không dùng <strong>that</strong> trong mệnh đề không xác định sau dấu phẩy.</li>
                <li>Giới từ có thể đi cuối câu trong văn nói: <em>The company I work for</em>; văn trang trọng có thể đưa lên trước: <em>the company for which I work</em>.</li>
            </ul>
            <div class="warning-box">
                <strong>⚠️ Lỗi phổ biến:</strong> Chọn sai đại từ quan hệ hoặc thêm thừa đại từ chủ ngữ như <em>The man who he called</em>.
            </div>
        `
    },
    'reported-speech': {
        icon: '🗣️',
        title: 'Reported Speech',
        category: 'patterns',
        level: 'advanced',
        connections: ['question-forms', 'past-perfect', 'noun-clauses', 'pronouns-possessives'],
        simple: `
            <h3>🗣️ Reported speech dùng để tường thuật lại lời nói</h3>
            <p>Thay vì trích nguyên văn, bạn chuyển câu nói sang lời gián tiếp.</p>
            <div class="example-box">
                <strong>Ví dụ:</strong><br>
                • Direct: <em>She said, "I am tired."</em><br>
                • Reported: <em>She said that she was tired.</em>
            </div>
            <ul>
                <li>Thường đổi đại từ, trạng từ chỉ thời gian và nơi chốn theo góc nhìn người tường thuật.</li>
                <li>Thường lùi thì khi reporting verb ở quá khứ, nhưng không phải mọi trường hợp đều lùi.</li>
            </ul>
        `,
        detail: `
            <h3>📚 Các quy tắc đổi cơ bản</h3>
            <table>
                <tr><th>Direct</th><th>Reported</th><th>Ghi chú</th></tr>
                <tr><td>present simple</td><td>past simple</td><td>Thường lùi một bậc khi reporting verb ở quá khứ.</td></tr>
                <tr><td>present continuous</td><td>past continuous</td><td>Dùng khi hành động đang diễn ra tại thời điểm nói.</td></tr>
                <tr><td>present perfect</td><td>past perfect</td><td>Nhấn việc đã hoàn tất trước mốc tường thuật.</td></tr>
                <tr><td>present perfect continuous</td><td>past perfect continuous</td><td>Nhấn quá trình kéo dài trước mốc tường thuật.</td></tr>
                <tr><td>past continuous</td><td>past continuous / past perfect continuous</td><td>Tùy ngữ cảnh có thể giữ nguyên hoặc lùi để rõ quan hệ thời gian.</td></tr>
                <tr><td>past simple</td><td>past perfect</td><td>Dùng khi cần làm rõ hành động xảy ra trước một mốc quá khứ khác.</td></tr>
                <tr><td>future simple (will)</td><td>would</td><td>Cả future simple lẫn future-in-the-past đều thường đổi về would.</td></tr>
                <tr><td>future continuous (will be V-ing)</td><td>would be V-ing</td><td>Giữ ý đang diễn ra trong tương lai nhìn từ quá khứ.</td></tr>
                <tr><td>future perfect (will have V3)</td><td>would have V3</td><td>Diễn tả việc hoàn tất trước một mốc nhìn từ quá khứ.</td></tr>
                <tr><td>can</td><td>could</td><td>Khả năng / cho phép thường lùi thành could.</td></tr>
                <tr><td>may</td><td>might</td><td>Mức độ khả năng thường yếu đi một bậc.</td></tr>
                <tr><td>shall</td><td>should</td><td>Thường gặp trong lời đề nghị / dự đoán.</td></tr>
                <tr><td>must</td><td>had to / must</td><td>Obligation thường lùi thành had to; deduction đôi khi giữ must.</td></tr>
                <tr><td>am/is/are going to</td><td>was/were going to</td><td>Kế hoạch / dự định cũng có thể lùi.</td></tr>
            </table>
            <h4>Các thay đổi khác</h4>
            <ul>
                <li><strong>now → then</strong>, <strong>today → that day</strong>, <strong>tomorrow → the next day</strong>, <strong>yesterday → the day before</strong></li>
                <li><strong>here → there</strong>, <strong>this/these → that/those</strong>, <strong>ago → before/earlier</strong>, <strong>last week → the week before</strong></li>
                <li>Câu hỏi yes/no dùng <strong>if / whether</strong></li>
                <li>Mệnh lệnh dùng <strong>tell/ask + object + to V</strong></li>
                <li>Say + clause thường đổi thành <strong>say (that)</strong>; tell cần tân ngữ: <strong>tell someone (that)</strong></li>
            </ul>
        `,
        advanced: `
            <h3>🎯 Khi nào không cần lùi thì</h3>
            <ul>
                <li>Nếu phát biểu là chân lý, định nghĩa, quy luật khoa học hoặc sự thật vẫn còn đúng: <em>The teacher said that the Earth revolves around the Sun.</em></li>
                <li>Nếu reporting verb ở hiện tại, hiện tại hoàn thành hoặc tương lai, thường không cần backshift: <em>She says she is tired.</em></li>
                <li>Nếu ngữ cảnh vẫn giữ nguyên tính xác thực, một số lịch trình hoặc thông báo cố định có thể không lùi thì.</li>
                <li>Trong lời tường thuật chuẩn, hãy xử lý theo 4 lớp: reporting verb, verb tense, pronouns, time/place words.</li>
            </ul>
            <h4>Những mẫu hay gặp trong bài thi</h4>
            <ul>
                <li><strong>Statements:</strong> He said (that) he was busy.</li>
                <li><strong>Questions:</strong> She asked where I was.</li>
                <li><strong>Requests:</strong> He told me to sit down.</li>
                <li><strong>Offers/Promises:</strong> She offered to help; he promised that he would call.</li>
            </ul>
            <div class="tip-box">
                <strong>💡 Mẹo:</strong> Khi chuyển sang câu gián tiếp, hãy sửa theo thứ tự: nghĩa câu, đại từ, mốc thời gian/nơi chốn, rồi mới tới thì.
            </div>
        `
    },
    'parallel-structure': {
        icon: '🪞',
        title: 'Parallel Structure',
        category: 'patterns',
        level: 'advanced',
        connections: ['comparisons', 'conjunctions', 'gerunds-infinitives', 'fragments-run-ons'],
        simple: `
            <h3>🪞 Parallel structure là giữ các phần tương đương ở cùng một dạng ngữ pháp</h3>
            <p>Khi liệt kê hoặc nối ý, các phần phải cùng loại: noun với noun, verb với verb, adjective với adjective.</p>
            <div class="example-box">
                <strong>Đúng:</strong> <em>She likes reading, writing, and speaking.</em><br>
                <strong>Sai:</strong> <em>She likes reading, to write, and speaking.</em>
            </div>
            <div class="formula-box">noun + noun + noun | V-ing + V-ing + V-ing | to V + to V + to V</div>
        `,
        detail: `
            <h3>📚 Những nơi cần parallel structure</h3>
            <table>
                <tr><th>Vị trí</th><th>Mẫu song song</th><th>Ví dụ</th></tr>
                <tr><td>Danh sách</td><td>noun + noun + noun</td><td>books, pens, and notebooks</td></tr>
                <tr><td>Danh sách động từ</td><td>V-ing + V-ing + V-ing</td><td>reading, writing, and speaking</td></tr>
                <tr><td>Danh sách to-infinitive</td><td>to V + to V + to V</td><td>to learn, to practice, and to improve</td></tr>
                <tr><td>both...and</td><td>both + X + and + X</td><td>both efficient and affordable</td></tr>
                <tr><td>either...or</td><td>either + X + or + X</td><td>either today or tomorrow</td></tr>
                <tr><td>neither...nor</td><td>neither + X + nor + X</td><td>neither big nor expensive</td></tr>
                <tr><td>not only...but also</td><td>not only + X + but also + X</td><td>not only saved time but also reduced cost</td></tr>
                <tr><td>than/as</td><td>same form before and after</td><td>more interested in reading than in watching TV</td></tr>
            </table>
            <h4>Quy tắc nhanh</h4>
            <ul>
                <li>Chỉ cần thấy hai phần song song không cùng dạng, câu thường bị gãy nhịp ngay.</li>
                <li>Sau cặp liên kết, dạng ở vế sau phải khớp với vế trước.</li>
                <li>Trong writing, parallel structure giúp câu rõ và “đều” hơn.</li>
            </ul>
        `,
        advanced: `
            <h3>🎯 Tại sao quan trọng trong writing</h3>
            <ul>
                <li>Parallel structure làm câu văn trang trọng và thuyết phục hơn.</li>
                <li>Rất quan trọng trong thesis, bullet lists, slide, report và văn nghị luận.</li>
                <li>Nhiều câu không sai hoàn toàn về ngữ pháp nhưng vẫn bị đánh giá thấp vì thiếu tính song song.</li>
                <li>Trong sửa lỗi, chỉ cần đổi một vế cho cùng dạng với các vế còn lại là câu thường tự nhiên hơn ngay.</li>
            </ul>
            <div class="warning-box">
                <strong>⚠️ Lỗi phổ biến:</strong> Trộn noun, gerund, infinitive và adjective trong cùng một chuỗi liệt kê.
            </div>
        `
    }
};
