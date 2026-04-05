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
            <div class="example-box">
                <strong>Ví dụ:</strong><br>
                • <em>I was tired, but I finished the report.</em><br>
                • <em>She stayed home because it was raining.</em>
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
            <h3>📏 So sánh giúp đặt hai sự vật trên cùng một thang đo</h3>
            <p>Bạn dùng so sánh hơn, so sánh nhất, hoặc cấu trúc ngang bằng để nói về mức độ.</p>
            <div class="example-box">
                <strong>Ví dụ:</strong><br>
                • <em>This test is easier than the last one.</em><br>
                • <em>Mai is the most careful student in the class.</em>
            </div>
            <ul>
                <li><strong>-er / more:</strong> so sánh hơn</li>
                <li><strong>-est / most:</strong> so sánh nhất</li>
                <li><strong>as ... as:</strong> ngang bằng</li>
            </ul>
        `,
        detail: `
            <h3>📚 Quy tắc cơ bản</h3>
            <table>
                <tr><th>Loại từ</th><th>Comparative</th><th>Superlative</th></tr>
                <tr><td>Ngắn</td><td>small → smaller</td><td>smallest</td></tr>
                <tr><td>Dài</td><td>interesting → more interesting</td><td>most interesting</td></tr>
                <tr><td>Bất quy tắc</td><td>good → better</td><td>best</td></tr>
            </table>
            <h4>Cấu trúc quan trọng</h4>
            <ul>
                <li><strong>not as ... as</strong> để nói kém hơn</li>
                <li><strong>the more..., the more...</strong> cho quan hệ song hành</li>
                <li><strong>less / least</strong> dùng cho mọi tính từ để nói mức độ thấp hơn/thấp nhất</li>
            </ul>
        `,
        advanced: `
            <h3>🎯 Những lỗi rất thường gặp</h3>
            <ul>
                <li>Không dùng kép như <em>more easier</em> hoặc <em>most fastest</em>.</li>
                <li>So sánh cần cùng một nền tảng logic: <em>The salary of company A is higher than that of company B</em> tự nhiên hơn so với so sánh lệch đối tượng.</li>
                <li>Trong academic writing, so sánh thường đi cùng dữ liệu, biểu đồ, xu hướng và cần sự chính xác về đối tượng được so.</li>
            </ul>
            <div class="warning-box">
                <strong>⚠️ Lỗi phổ biến:</strong> Dùng sai đại từ thay thế trong phép so sánh khiến câu thành so táo với cam.
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
            <h3>👉 Imperatives dùng để ra lệnh, hướng dẫn, yêu cầu</h3>
            <p>Chủ ngữ thường được ẩn đi, vì người nghe mặc định là người nhận lệnh hoặc yêu cầu.</p>
            <div class="example-box">
                <strong>Ví dụ:</strong><br>
                • <em>Open the window.</em><br>
                • <em>Please sit down.</em><br>
                • <em>Don't touch that.</em>
            </div>
        `,
        detail: `
            <h3>📚 Các dạng thường gặp</h3>
            <table>
                <tr><th>Dạng</th><th>Ví dụ</th><th>Sắc thái</th></tr>
                <tr><td>Imperative trực tiếp</td><td>Close the door.</td><td>ra lệnh/hướng dẫn</td></tr>
                <tr><td>Please + imperative</td><td>Please wait here.</td><td>lịch sự hơn</td></tr>
                <tr><td>Negative imperative</td><td>Don't be late.</td><td>cấm/nhắc nhở</td></tr>
                <tr><td>Let's + V</td><td>Let's start now.</td><td>đề nghị cùng làm</td></tr>
            </table>
            <ul>
                <li>Trong giao tiếp lịch sự, yêu cầu thường đổi thành câu hỏi với <em>could, would, can</em>.</li>
                <li>Instructions, recipes, manuals dùng imperative rất nhiều.</li>
            </ul>
        `,
        advanced: `
            <h3>🎯 Mức độ lịch sự</h3>
            <ul>
                <li><em>Open the file.</em> trực tiếp hơn <em>Could you open the file?</em></li>
                <li><strong>let's not</strong> dùng cho phủ định lời đề nghị chung: <em>Let's not argue now.</em></li>
                <li>Trong email công việc, imperative ngắn gọn vẫn dùng được nếu ngữ cảnh đủ lịch sự: <em>Please find the file attached.</em></li>
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
                <li>Thường đổi đại từ theo người nói/người nghe</li>
                <li>Thường lùi thì khi động từ tường thuật ở quá khứ</li>
            </ul>
        `,
        detail: `
            <h3>📚 Các quy tắc đổi cơ bản</h3>
            <table>
                <tr><th>Direct</th><th>Reported</th></tr>
                <tr><td>present simple</td><td>past simple</td></tr>
                <tr><td>present continuous</td><td>past continuous</td></tr>
                <tr><td>present perfect</td><td>past perfect</td></tr>
                <tr><td>will</td><td>would</td></tr>
                <tr><td>can</td><td>could</td></tr>
            </table>
            <h4>Các thay đổi khác</h4>
            <ul>
                <li><strong>now → then</strong>, <strong>today → that day</strong>, <strong>tomorrow → the next day</strong></li>
                <li>Câu hỏi yes/no dùng <strong>if / whether</strong></li>
                <li>Mệnh lệnh dùng <strong>tell/ask + object + to V</strong></li>
            </ul>
        `,
        advanced: `
            <h3>🎯 Khi nào không cần lùi thì</h3>
            <ul>
                <li>Nếu phát biểu vẫn luôn đúng hoặc còn đúng ở hiện tại: <em>The teacher said that the Earth revolves around the Sun.</em></li>
                <li>Trong văn nói hiện đại, một số trường hợp không lùi thì để giữ tính gần gũi, nhưng trong bài thi chuẩn nên tuân quy tắc.</li>
                <li>Nên theo dõi đồng thời 3 thứ: thì, đại từ và thời gian tham chiếu.</li>
            </ul>
            <div class="tip-box">
                <strong>💡 Mẹo:</strong> Khi chuyển sang câu gián tiếp, hãy sửa theo thứ tự: người nói, thời điểm, rồi mới tới thì.
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
            <p>Nó làm câu cân bằng, rõ ràng và tự nhiên hơn, đặc biệt trong danh sách, so sánh, và cấu trúc ghép.</p>
            <div class="example-box">
                <strong>Đúng:</strong> <em>She likes reading, writing, and speaking.</em><br>
                <strong>Sai:</strong> <em>She likes reading, to write, and speaking.</em>
            </div>
        `,
        detail: `
            <h3>📚 Những nơi cần parallel structure</h3>
            <ul>
                <li>Danh sách với <strong>and / or</strong></li>
                <li>Cặp cấu trúc như <strong>both...and, either...or, neither...nor, not only...but also</strong></li>
                <li>So sánh với <strong>than / as</strong></li>
                <li>Các tiêu đề, thesis statement, mục tiêu viết học thuật</li>
            </ul>
            <table>
                <tr><th>Cấu trúc</th><th>Đúng</th></tr>
                <tr><td>both...and</td><td>both efficient and affordable</td></tr>
                <tr><td>not only...but also</td><td>not only reduced costs but also improved quality</td></tr>
                <tr><td>than</td><td>more interested in reading than in watching TV</td></tr>
            </table>
        `,
        advanced: `
            <h3>🎯 Tại sao quan trọng trong writing</h3>
            <ul>
                <li>Parallel structure làm câu văn trang trọng và thuyết phục hơn.</li>
                <li>Rất quan trọng trong thesis, bullet lists, slide, report và văn nghị luận.</li>
                <li>Nhiều câu không sai hoàn toàn về ngữ pháp nhưng vẫn bị đánh giá thấp vì thiếu tính song song.</li>
            </ul>
            <div class="warning-box">
                <strong>⚠️ Lỗi phổ biến:</strong> Trộn noun, gerund, infinitive và adjective trong cùng một chuỗi liệt kê.
            </div>
        `
    }
};
