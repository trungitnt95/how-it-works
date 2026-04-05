// English Grammar Structures
const grammarStructuresData = {
    'modal-verbs': {
        icon: '🛠️',
        title: 'Modal Verbs',
        category: 'structures',
        level: 'intermediate',
        connections: ['question-forms', 'conditionals', 'present-perfect', 'future-simple'],
        simple: `
            <h3>🛠️ Modal verbs thêm sắc thái cho động từ</h3>
            <p>Các động từ như <strong>can, could, may, might, must, should</strong> cho biết khả năng, lời khuyên, nghĩa vụ hoặc suy đoán.</p>
            <div class="formula-box">modal + V nguyên mẫu</div>
            <div class="example-box">
                <strong>Ví dụ:</strong><br>
                • <em>You should rest more.</em><br>
                • <em>She can speak three languages.</em>
            </div>
        `,
        detail: `
            <h3>📚 Một số modal quan trọng</h3>
            <table>
                <tr><th>Modal</th><th>Ý nghĩa chính</th><th>Ví dụ</th></tr>
                <tr><td>can / could</td><td>khả năng, xin phép</td><td>Can you help me?</td></tr>
                <tr><td>may / might</td><td>khả năng có thể xảy ra</td><td>It might rain.</td></tr>
                <tr><td>must / have to</td><td>bắt buộc</td><td>You must wear a helmet.</td></tr>
                <tr><td>should / ought to</td><td>lời khuyên</td><td>You should sleep earlier.</td></tr>
                <tr><td>would</td><td>giả định, lịch sự</td><td>Would you like some tea?</td></tr>
            </table>
            <ul>
                <li>Modal không chia theo ngôi: <em>He can</em>, không phải <em>He cans</em>.</li>
                <li>Sau modal luôn là động từ nguyên mẫu không <em>to</em>.</li>
            </ul>
        `,
        advanced: `
            <h3>🎯 Sắc thái và perfect modals</h3>
            <ul>
                <li><strong>must</strong> mạnh hơn <strong>should</strong>; <strong>might</strong> yếu hơn <strong>may</strong>.</li>
                <li><strong>must have + V3</strong> dùng cho suy đoán về quá khứ: <em>He must have forgotten.</em></li>
                <li><strong>should have + V3</strong> diễn tả điều đáng lẽ nên làm nhưng đã không làm.</li>
                <li><strong>can't have + V3</strong> diễn tả điều gần như chắc chắn đã không xảy ra.</li>
            </ul>
            <div class="tip-box">
                <strong>💡 Mẹo:</strong> Khi chọn modal, đừng chỉ nghĩ nghĩa từ vựng; hãy chọn mức độ chắc chắn, lịch sự và bắt buộc mà bạn muốn thể hiện.
            </div>
        `
    },
    'conditionals': {
        icon: '🌦️',
        title: 'Conditionals',
        category: 'structures',
        level: 'advanced',
        connections: ['conjunctions', 'modal-verbs', 'future-simple', 'wish-if-only'],
        simple: `
            <h3>🌦️ Câu điều kiện nối điều kiện với kết quả</h3>
            <p>Đây là cấu trúc rất quan trọng trong giao tiếp, viết luận và bài thi.</p>
            <div class="example-box">
                <strong>Ví dụ:</strong><br>
                • <em>If it rains, we will stay home.</em><br>
                • <em>If I had more time, I would learn Spanish.</em>
            </div>
        `,
        detail: `
            <h3>📚 Bốn loại chính</h3>
            <table>
                <tr><th>Loại</th><th>Công thức</th><th>Ý nghĩa</th></tr>
                <tr><td>Zero</td><td>If + present, present</td><td>sự thật hiển nhiên</td></tr>
                <tr><td>First</td><td>If + present, will + V</td><td>khả năng thật ở tương lai</td></tr>
                <tr><td>Second</td><td>If + past, would + V</td><td>giả định hiện tại/tương lai</td></tr>
                <tr><td>Third</td><td>If + had + V3, would have + V3</td><td>giả định trái với quá khứ</td></tr>
            </table>
            <ul>
                <li>Sau <strong>if</strong> không dùng <em>will</em> trong cấu trúc chuẩn của loại 1.</li>
                <li>Loại 2 và 3 thường xuất hiện trong writing, suy luận và nói về tiếc nuối.</li>
            </ul>
        `,
        advanced: `
            <h3>🎯 Điểm nâng cao</h3>
            <ul>
                <li><strong>Mixed conditionals:</strong> kết hợp quá khứ với kết quả hiện tại, ví dụ <em>If I had studied harder, I would have a better job now.</em></li>
                <li><strong>Unless</strong> gần nghĩa với <em>if...not</em>, nhưng không thay thế máy móc trong mọi câu.</li>
                <li>Dùng <strong>were</strong> cho mọi ngôi trong văn trang trọng: <em>If I were you...</em></li>
                <li>Có thể đảo ngữ bỏ <em>if</em> trong văn trang trọng: <em>Had I known...</em>, <em>Were I to...</em></li>
            </ul>
            <div class="warning-box">
                <strong>⚠️ Lỗi phổ biến:</strong> Viết <em>If I will see him</em> thay vì <em>If I see him</em> trong điều kiện loại 1.
            </div>
        `
    },
    'passive-voice': {
        icon: '🏭',
        title: 'Passive Voice',
        category: 'structures',
        level: 'advanced',
        connections: ['subject-verb-agreement', 'relative-clauses', 'past-simple', 'causatives'],
        simple: `
            <h3>🏭 Bị động dùng khi muốn nhấn vào hành động hoặc kết quả</h3>
            <p>Thay vì nhấn ai làm, câu bị động nhấn điều gì đã xảy ra.</p>
            <div class="formula-box">S + be + V3</div>
            <div class="example-box">
                <strong>Ví dụ:</strong><br>
                • <em>The report was finished yesterday.</em><br>
                • <em>English is spoken worldwide.</em>
            </div>
        `,
        detail: `
            <h3>📚 Cách đổi chủ động sang bị động</h3>
            <ol>
                <li>Đưa tân ngữ của câu chủ động lên làm chủ ngữ mới</li>
                <li>Chia <strong>be</strong> theo thì của câu gốc</li>
                <li>Đổi động từ chính sang <strong>V3</strong></li>
            </ol>
            <table>
                <tr><th>Chủ động</th><th>Bị động</th></tr>
                <tr><td>People make cars in Japan.</td><td>Cars are made in Japan.</td></tr>
                <tr><td>They built the bridge in 2010.</td><td>The bridge was built in 2010.</td></tr>
                <tr><td>Someone has stolen my bike.</td><td>My bike has been stolen.</td></tr>
            </table>
        `,
        advanced: `
            <h3>🎯 Khi nào nên dùng</h3>
            <ul>
                <li>Khi người làm không quan trọng hoặc không biết: <em>My wallet was stolen.</em></li>
                <li>Trong văn học thuật, báo cáo và mô tả quy trình, bị động giúp câu khách quan hơn.</li>
                <li>Không nên lạm dụng, vì quá nhiều bị động làm văn bản nặng và thiếu năng lượng.</li>
                <li>Các dạng nâng cao gồm <strong>modal passive</strong> và <strong>passive infinitive/gerund</strong>: <em>must be completed</em>, <em>being watched</em>.</li>
            </ul>
            <div class="tip-box">
                <strong>💡 Mẹo:</strong> Nếu bạn vẫn muốn nêu tác nhân, thêm <em>by + agent</em>. Nếu tác nhân không quan trọng, bỏ hẳn phần đó đi.
            </div>
        `
    },
    'noun-clauses': {
        icon: '🧠',
        title: 'Noun Clauses',
        category: 'structures',
        level: 'advanced',
        connections: ['question-forms', 'reported-speech', 'relative-clauses', 'sentence-order'],
        simple: `
            <h3>🧠 Noun clause là một mệnh đề nhưng hoạt động như danh từ</h3>
            <p>Nó có thể làm chủ ngữ, tân ngữ hoặc bổ ngữ trong câu.</p>
            <div class="example-box">
                <strong>Ví dụ:</strong><br>
                • <em>What he said surprised me.</em><br>
                • <em>I know that she is busy.</em>
            </div>
            <ul>
                <li>Mở đầu bằng <strong>that, if, whether, wh- words</strong></li>
                <li>Bên trong noun clause giữ trật tự câu trần thuật bình thường</li>
            </ul>
        `,
        detail: `
            <h3>📚 Các kiểu noun clause</h3>
            <table>
                <tr><th>Loại</th><th>Mẫu</th><th>Ví dụ</th></tr>
                <tr><td>That-clause</td><td>that + clause</td><td>I believe that he is honest.</td></tr>
                <tr><td>Whether/if clause</td><td>whether/if + clause</td><td>I don't know whether she will come.</td></tr>
                <tr><td>Wh-clause</td><td>what/where/why/how + clause</td><td>Tell me what you need.</td></tr>
            </table>
            <h4>Điểm rất quan trọng</h4>
            <ul>
                <li>Trong noun clause, không đảo trợ động từ như câu hỏi trực tiếp: <em>I wonder where he is</em>, không phải <em>where is he</em>.</li>
                <li><strong>that</strong> đôi khi có thể lược bỏ ở vị trí tân ngữ trong văn nói.</li>
            </ul>
        `,
        advanced: `
            <h3>🎯 Ứng dụng trong writing</h3>
            <ul>
                <li>Noun clauses giúp câu văn học thuật đa dạng hơn: <em>What matters most is consistency.</em></li>
                <li><strong>whether</strong> trang trọng và rộng phạm vi hơn <strong>if</strong>, đặc biệt khi đi với <em>or not</em>.</li>
                <li>Noun clause thường xuất hiện sau các động từ tư duy, tri giác, thông báo: <em>know, think, believe, say, explain, wonder</em>.</li>
            </ul>
            <div class="warning-box">
                <strong>⚠️ Lỗi phổ biến:</strong> Giữ nguyên trật tự câu hỏi trong noun clause, tạo ra câu như <em>I don't know where is she</em>.
            </div>
        `
    },
    'causatives': {
        icon: '⚙️',
        title: 'Causatives',
        category: 'structures',
        level: 'advanced',
        connections: ['passive-voice', 'modal-verbs', 'gerunds-infinitives', 'sentence-order'],
        simple: `
            <h3>⚙️ Causative diễn tả việc khiến ai đó làm gì hoặc nhờ ai làm gì</h3>
            <p>Nhóm cấu trúc này rất thường gặp trong giao tiếp và writing nhưng người học hay bỏ sót.</p>
            <div class="example-box">
                <strong>Ví dụ:</strong><br>
                • <em>My boss made me rewrite the report.</em><br>
                • <em>I had my laptop repaired yesterday.</em>
            </div>
        `,
        detail: `
            <h3>📚 Các mẫu chính</h3>
            <table>
                <tr><th>Mẫu</th><th>Ý nghĩa</th><th>Ví dụ</th></tr>
                <tr><td>make + object + V</td><td>bắt/ép</td><td>The teacher made us stay.</td></tr>
                <tr><td>let + object + V</td><td>cho phép</td><td>They let him leave early.</td></tr>
                <tr><td>have + object + V</td><td>sắp xếp/nhờ ai làm</td><td>I'll have Tom check it.</td></tr>
                <tr><td>get + object + to V</td><td>thuyết phục/nhờ được ai làm</td><td>She got him to apologize.</td></tr>
                <tr><td>have/get + object + V3</td><td>thuê/nhờ làm một việc</td><td>We had the car washed.</td></tr>
            </table>
        `,
        advanced: `
            <h3>🎯 Phân biệt sắc thái</h3>
            <ul>
                <li><strong>make</strong> mạnh hơn, mang nghĩa ép buộc.</li>
                <li><strong>get</strong> thường nhấn việc thuyết phục hoặc đạt được kết quả.</li>
                <li><strong>have/get something done</strong> rất hay dùng khi đi sửa chữa, kiểm tra, thiết kế, cắt tóc.</li>
            </ul>
            <div class="tip-box">
                <strong>💡 Mẹo:</strong> Nếu bản thân không trực tiếp làm mà khiến hoặc nhờ người khác làm, hãy nghĩ tới causative trước.
            </div>
        `
    },
    'wish-if-only': {
        icon: '✨',
        title: 'Wish / If Only',
        category: 'structures',
        level: 'advanced',
        connections: ['conditionals', 'past-simple', 'past-perfect', 'modal-verbs'],
        simple: `
            <h3>✨ Wish và If only diễn tả mong ước hoặc tiếc nuối</h3>
            <p>Đây là nhóm cấu trúc gần với conditionals vì đều nói về điều không đúng với thực tế.</p>
            <div class="example-box">
                <strong>Ví dụ:</strong><br>
                • <em>I wish I were taller.</em><br>
                • <em>If only I had studied harder.</em>
            </div>
        `,
        detail: `
            <h3>📚 Ba cách dùng chính</h3>
            <table>
                <tr><th>Mẫu</th><th>Ý nghĩa</th><th>Ví dụ</th></tr>
                <tr><td>wish + past simple</td><td>mong khác đi ở hiện tại</td><td>I wish I had more free time.</td></tr>
                <tr><td>wish + past perfect</td><td>tiếc nuối về quá khứ</td><td>She wishes she had called him.</td></tr>
                <tr><td>wish + would</td><td>mong điều gì thay đổi trong tương lai / than phiền</td><td>I wish it would stop raining.</td></tr>
            </table>
            <ul>
                <li><strong>If only</strong> mạnh cảm xúc hơn <strong>wish</strong>.</li>
                <li>Trong văn trang trọng, <strong>were</strong> được ưa dùng hơn <strong>was</strong> ở câu giả định: <em>I wish I were...</em></li>
            </ul>
        `,
        advanced: `
            <h3>🎯 Sắc thái và giới hạn</h3>
            <ul>
                <li>Không dùng <strong>wish + will</strong> để nói đơn thuần về mong muốn bản thân làm điều gì; thay vào đó dùng <em>hope</em> hoặc cấu trúc khác nếu là khả năng thực.</li>
                <li><strong>would</strong> trong wish thường hàm ý bạn muốn hoàn cảnh hoặc người khác thay đổi hành vi.</li>
                <li>Cấu trúc này thường xuất hiện trong writing khi nói tiếc nuối, giả định, cảm xúc phản thực.</li>
            </ul>
            <div class="warning-box">
                <strong>⚠️ Lỗi phổ biến:</strong> Viết <em>I wish I will pass</em> thay vì dùng <em>I hope I will pass</em> nếu ý là hy vọng thực tế.
            </div>
        `
    },
    'inversion': {
        icon: '🔁',
        title: 'Inversion',
        category: 'structures',
        level: 'advanced',
        connections: ['question-forms', 'conditionals', 'parallel-structure', 'wish-if-only'],
        simple: `
            <h3>🔁 Inversion là đảo trật tự bình thường để nhấn mạnh hoặc tạo sắc thái trang trọng</h3>
            <p>Thay vì <em>I have never seen...</em>, ta có thể viết <em>Never have I seen...</em>.</p>
            <div class="example-box">
                <strong>Ví dụ:</strong><br>
                • <em>Never have I seen such a view.</em><br>
                • <em>Only then did he understand.</em>
            </div>
        `,
        detail: `
            <h3>📚 Một số mẫu phổ biến</h3>
            <table>
                <tr><th>Mẫu</th><th>Ví dụ</th></tr>
                <tr><td>Negative adverbials đầu câu</td><td>Rarely do we see this.</td></tr>
                <tr><td>Only + phrase/clause</td><td>Only after the meeting did she reply.</td></tr>
                <tr><td>Conditional inversion</td><td>Had I known, I would have acted.</td></tr>
                <tr><td>So/Such</td><td>So difficult was the exam that...</td></tr>
            </table>
            <ul>
                <li>Inversion thường mượn cơ chế đảo của câu hỏi nhưng không phải là câu hỏi.</li>
                <li>Hay gặp trong writing học thuật, văn trang trọng, headline, diễn văn.</li>
            </ul>
        `,
        advanced: `
            <h3>🎯 Khi nào nên dùng</h3>
            <ul>
                <li>Dùng để nhấn mạnh một cách có kiểm soát, không nên lạm dụng liên tục.</li>
                <li>Conditional inversion giúp câu viết ngắn và trang trọng hơn.</li>
                <li>Người học nên nắm mẫu cố định thay vì cố tự đảo mọi câu.</li>
            </ul>
            <div class="warning-box">
                <strong>⚠️ Lỗi phổ biến:</strong> Đảo sai phần trợ động từ hoặc cố tạo inversion ở những câu không thuộc mẫu cố định.
            </div>
        `
    },
    'participle-clauses': {
        icon: '🪶',
        title: 'Participle Clauses',
        category: 'structures',
        level: 'advanced',
        connections: ['phrases-vs-clauses', 'relative-clauses', 'passive-voice', 'modifier-errors'],
        simple: `
            <h3>🪶 Participle clauses giúp rút gọn câu</h3>
            <p>Thay vì dùng mệnh đề đầy đủ, bạn có thể rút gọn bằng <strong>V-ing</strong> hoặc <strong>V3</strong> trong một số trường hợp.</p>
            <div class="example-box">
                <strong>Ví dụ:</strong><br>
                • <em>Walking down the street, I saw an old friend.</em><br>
                • <em>Built in 1920, the house still looks elegant.</em>
            </div>
        `,
        detail: `
            <h3>📚 Các chức năng thường gặp</h3>
            <ul>
                <li>Rút gọn mệnh đề trạng ngữ chỉ thời gian, nguyên nhân, điều kiện.</li>
                <li>Rút gọn relative clause: <em>students studying abroad</em>, <em>the report prepared by Linh</em>.</li>
                <li>Dùng <strong>having + V3</strong> để nhấn hành động xảy ra trước: <em>Having finished the task, she left.</em></li>
            </ul>
            <table>
                <tr><th>Dạng</th><th>Ví dụ</th></tr>
                <tr><td>Present participle</td><td>Standing by the door, he smiled.</td></tr>
                <tr><td>Past participle</td><td>Shocked by the news, she stayed silent.</td></tr>
                <tr><td>Perfect participle</td><td>Having completed the form, he submitted it.</td></tr>
            </table>
        `,
        advanced: `
            <h3>🎯 Rủi ro lớn nhất</h3>
            <ul>
                <li>Participle clause phải gắn đúng với chủ thể mà nó bổ nghĩa.</li>
                <li>Nếu đặt sai, bạn sẽ tạo <strong>dangling modifier</strong>, khiến câu vừa buồn cười vừa sai.</li>
                <li>Đây là cấu trúc mạnh trong writing học thuật nhưng cần dùng chính xác về logic chủ thể.</li>
            </ul>
            <div class="tip-box">
                <strong>💡 Mẹo:</strong> Sau khi viết participle clause, hãy hỏi "ai là người đang doing / having done / being done việc này?"
            </div>
        `
    }
};
