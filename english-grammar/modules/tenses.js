// English Grammar Tenses
const grammarTensesData = {
    'present-simple': {
        icon: '📅',
        title: 'Present Simple',
        category: 'tenses',
        level: 'beginner',
        connections: ['subject-verb-agreement', 'question-forms', 'present-perfect', 'future-simple'],
        simple: `
            <h3>📅 Hiện tại đơn dùng cho thói quen và sự thật</h3>
            <p>Dùng khi nói về việc lặp lại thường xuyên, lịch trình, chân lý hoặc trạng thái ổn định.</p>
            <div class="formula-box">S + V(s/es) + O</div>
            <div class="example-box">
                <strong>Ví dụ:</strong><br>
                • <em>I go to work at 8.</em><br>
                • <em>Water boils at 100°C.</em>
            </div>
        `,
        detail: `
            <h3>📚 Công thức cơ bản</h3>
            <ul>
                <li><strong>Khẳng định:</strong> I/You/We/They work. She works.</li>
                <li><strong>Phủ định:</strong> do not / does not + V nguyên mẫu</li>
                <li><strong>Nghi vấn:</strong> Do/Does + S + V?</li>
            </ul>
            <h4>Dấu hiệu nhận biết</h4>
            <ul>
                <li><strong>always, usually, often, sometimes, never</strong></li>
                <li><strong>every day, on Mondays, twice a week</strong></li>
                <li>Thường dùng với các động từ trạng thái: <em>know, like, believe, belong</em></li>
            </ul>
        `,
        advanced: `
            <h3>🎯 Điểm dễ nhầm</h3>
            <ul>
                <li>Dùng cho lịch trình cố định trong tương lai: <em>The train leaves at 6 tomorrow.</em></li>
                <li>Đừng quên thêm <strong>-s/-es</strong> với chủ ngữ ngôi thứ ba số ít.</li>
                <li>Không dùng hiện tại tiếp diễn cho nhiều động từ trạng thái nếu không có chủ ý đặc biệt.</li>
            </ul>
            <div class="tip-box">
                <strong>💡 Mẹo:</strong> Nếu câu trả lời cho câu hỏi "việc này có lặp lại hay là sự thật không?" là có, hãy nghĩ tới hiện tại đơn trước.
            </div>
        `
    },
    'present-continuous': {
        icon: '🎬',
        title: 'Present Continuous',
        category: 'tenses',
        level: 'intermediate',
        connections: ['present-simple', 'future-simple', 'future-continuous', 'question-forms', 'negatives'],
        simple: `
            <h3>🎬 Hiện tại tiếp diễn nói về việc đang diễn ra hoặc tạm thời</h3>
            <p>Dùng khi hành động đang xảy ra quanh thời điểm nói, hoặc khi muốn nhấn tính tạm thời, thay đổi, hoặc kế hoạch gần.</p>
            <div class="formula-box">S + am/is/are + V-ing</div>
            <div class="example-box">
                <strong>Ví dụ:</strong><br>
                • <em>I am studying right now.</em><br>
                • <em>She is working from home this week.</em>
            </div>
        `,
        detail: `
            <h3>📚 Khi nào dùng</h3>
            <ul>
                <li><strong>Đang diễn ra:</strong> <em>Listen! The baby is crying.</em></li>
                <li><strong>Tạm thời:</strong> <em>I am living with my aunt this month.</em></li>
                <li><strong>Thay đổi dần:</strong> <em>The weather is getting hotter.</em></li>
                <li><strong>Kế hoạch gần:</strong> <em>We are meeting the client tomorrow.</em></li>
            </ul>
            <h4>Tín hiệu thường gặp</h4>
            <ul>
                <li><strong>now, right now, at the moment, today, this week</strong></li>
                <li>Các dấu hiệu tình huống như <strong>look!, listen!</strong></li>
            </ul>
        `,
        advanced: `
            <h3>🎯 Điều cần tránh</h3>
            <ul>
                <li>Nhiều <strong>stative verbs</strong> không tự nhiên ở dạng tiếp diễn: <em>know, understand, want, need, love</em>.</li>
                <li>Một số động từ đổi nghĩa nếu dùng tiếp diễn: <em>He is being rude</em> nhấn hành vi tạm thời.</li>
                <li>Trong email và writing, dùng hiện tại tiếp diễn để nói xu hướng hiện tại cũng rất phổ biến.</li>
            </ul>
            <div class="warning-box">
                <strong>⚠️ Lỗi phổ biến:</strong> Dùng hiện tại tiếp diễn cho thói quen lâu dài như <em>I am going to school every day</em> nếu không có chủ đích đặc biệt.
            </div>
        `
    },
    'past-simple': {
        icon: '🕰️',
        title: 'Past Simple',
        category: 'tenses',
        level: 'beginner',
        connections: ['present-simple', 'past-continuous', 'present-perfect', 'question-forms'],
        simple: `
            <h3>🕰️ Quá khứ đơn nói về việc đã kết thúc</h3>
            <p>Dùng khi hành động xảy ra và đã kết thúc trong quá khứ, thường gắn với mốc thời gian rõ ràng.</p>
            <div class="formula-box">S + V2/V-ed + O</div>
            <div class="example-box">
                <strong>Ví dụ:</strong><br>
                • <em>I visited Da Nang last summer.</em><br>
                • <em>She did not call me yesterday.</em>
            </div>
        `,
        detail: `
            <h3>📚 Công thức cần thuộc</h3>
            <ul>
                <li><strong>Khẳng định:</strong> dùng động từ quá khứ</li>
                <li><strong>Phủ định:</strong> did not + V nguyên mẫu</li>
                <li><strong>Câu hỏi:</strong> Did + S + V?</li>
            </ul>
            <h4>Từ khóa quen thuộc</h4>
            <ul>
                <li><strong>yesterday, ago, last night, in 2020</strong></li>
                <li>Kể chuyện theo trình tự cũng thường dùng quá khứ đơn.</li>
                <li>Dùng cho chuỗi hành động nối tiếp: <em>He entered, sat down, and opened his laptop.</em></li>
            </ul>
        `,
        advanced: `
            <h3>🎯 Chỗ hay mất điểm</h3>
            <ul>
                <li>Sau <strong>did / didn't</strong>, động từ quay về nguyên mẫu: <em>Did you go?</em> chứ không phải <em>Did you went?</em></li>
                <li>Động từ bất quy tắc phải học theo nhóm: <em>go-went-gone</em>, <em>see-saw-seen</em>.</li>
                <li>Khi kể chuyện, quá khứ đơn là xương sống; các thì khác chỉ thêm bối cảnh hoặc trình tự sâu hơn.</li>
            </ul>
            <div class="warning-box">
                <strong>⚠️ Lỗi phổ biến:</strong> Trộn quá khứ đơn với hiện tại hoàn thành dù câu có mốc thời gian đã đóng, ví dụ <em>I have seen him yesterday</em>.
            </div>
        `
    },
    'past-continuous': {
        icon: '⏳',
        title: 'Past Continuous',
        category: 'tenses',
        level: 'intermediate',
        connections: ['past-simple', 'past-perfect', 'question-forms', 'reported-speech'],
        simple: `
            <h3>⏳ Quá khứ tiếp diễn tạo bối cảnh trong quá khứ</h3>
            <p>Dùng khi một hành động đang diễn ra tại một thời điểm trong quá khứ, hoặc khi một hành động dài bị một hành động khác chen vào.</p>
            <div class="formula-box">S + was/were + V-ing</div>
            <div class="example-box">
                <strong>Ví dụ:</strong><br>
                • <em>I was reading when she called.</em><br>
                • <em>At 9 p.m. yesterday, they were driving home.</em>
            </div>
        `,
        detail: `
            <h3>📚 Cách dùng quan trọng</h3>
            <ul>
                <li><strong>Hành động đang diễn ra tại một thời điểm:</strong> <em>She was sleeping at midnight.</em></li>
                <li><strong>Bối cảnh + hành động chen vào:</strong> <em>We were having dinner when the lights went out.</em></li>
                <li><strong>Hai hành động song song:</strong> <em>While I was cooking, he was cleaning.</em></li>
            </ul>
            <h4>Từ nối quen thuộc</h4>
            <ul>
                <li><strong>when</strong> thường đi với hành động ngắn chen vào</li>
                <li><strong>while / as</strong> thường đi với hành động kéo dài</li>
            </ul>
        `,
        advanced: `
            <h3>🎯 Sắc thái kể chuyện</h3>
            <ul>
                <li>Quá khứ tiếp diễn giúp câu chuyện có chiều sâu hơn vì tạo "phông nền" thay vì chỉ liệt kê hành động.</li>
                <li>Có thể dùng để diễn tả thói quen gây khó chịu trong quá khứ nếu đi với <em>always</em>: <em>He was always losing his keys.</em></li>
                <li>Khi không có yếu tố kéo dài hoặc bối cảnh, nên quay về quá khứ đơn.</li>
            </ul>
            <div class="tip-box">
                <strong>💡 Mẹo:</strong> Nếu bạn đang kể "một việc đang diễn ra thì một việc khác xảy ra", gần như chắc chắn cần past continuous + past simple.
            </div>
        `
    },
    'present-perfect': {
        icon: '🔗',
        title: 'Present Perfect',
        category: 'tenses',
        level: 'intermediate',
        connections: ['present-simple', 'past-simple', 'past-perfect', 'modal-verbs'],
        simple: `
            <h3>🔗 Hiện tại hoàn thành nối quá khứ với hiện tại</h3>
            <p>Dùng khi kết quả còn liên quan tới hiện tại hoặc khi nói về kinh nghiệm mà không nêu thời điểm cụ thể.</p>
            <div class="formula-box">S + have/has + V3</div>
            <div class="example-box">
                <strong>Ví dụ:</strong><br>
                • <em>I have lost my key.</em> = bây giờ vẫn chưa có chìa khóa<br>
                • <em>She has visited Japan twice.</em>
            </div>
        `,
        detail: `
            <h3>📚 Khi nào dùng</h3>
            <ul>
                <li><strong>Kinh nghiệm:</strong> <em>Have you ever tried sushi?</em></li>
                <li><strong>Kết quả hiện tại:</strong> <em>He has broken his leg.</em></li>
                <li><strong>Từ quá khứ đến nay:</strong> <em>We have lived here for five years.</em></li>
                <li><strong>Việc vừa xảy ra:</strong> <em>I have just finished the report.</em></li>
            </ul>
            <h4>Tín hiệu thường gặp</h4>
            <ul>
                <li><strong>already, yet, just, ever, never</strong></li>
                <li><strong>since + mốc thời gian</strong>, <strong>for + khoảng thời gian</strong></li>
            </ul>
        `,
        advanced: `
            <h3>🎯 So sánh nhanh với quá khứ đơn</h3>
            <table>
                <tr><th>Thì</th><th>Trọng tâm</th><th>Ví dụ</th></tr>
                <tr><td>Past Simple</td><td>thời điểm đã kết thúc</td><td>I saw her last week.</td></tr>
                <tr><td>Present Perfect</td><td>kết quả/kinh nghiệm tới hiện tại</td><td>I have seen that movie.</td></tr>
            </table>
            <ul>
                <li>Nếu có mốc thời gian đã đóng như <strong>yesterday, in 2019, last year</strong>, ưu tiên quá khứ đơn.</li>
                <li>Nếu khoảng thời gian chưa kết thúc như <strong>today, this week</strong>, hiện tại hoàn thành có thể phù hợp.</li>
                <li>Trong Anh-Anh, hiện tại hoàn thành được dùng rộng hơn Anh-Mỹ ở một số ngữ cảnh đời thường.</li>
            </ul>
            <div class="tip-box">
                <strong>💡 Mẹo:</strong> Hãy hỏi "người nghe cần biết khi nào xảy ra, hay cần biết kết quả bây giờ?" để chọn thì.
            </div>
        `
    },
    'present-perfect-continuous': {
        icon: '♾️',
        title: 'Present Perfect Continuous',
        category: 'tenses',
        level: 'advanced',
        connections: ['present-continuous', 'present-perfect', 'future-perfect', 'quantifiers'],
        simple: `
            <h3>♾️ Hiện tại hoàn thành tiếp diễn nhấn thời lượng hoặc quá trình</h3>
            <p>Dùng khi hành động bắt đầu trong quá khứ, kéo dài đến hiện tại, và bạn muốn nhấn mạnh quá trình hoặc độ dài.</p>
            <div class="formula-box">S + have/has been + V-ing</div>
            <div class="example-box">
                <strong>Ví dụ:</strong><br>
                • <em>I have been studying for three hours.</em><br>
                • <em>She has been working here since 2022.</em>
            </div>
        `,
        detail: `
            <h3>📚 Khi nào dùng</h3>
            <ul>
                <li><strong>Nhấn độ dài:</strong> <em>We have been waiting for a long time.</em></li>
                <li><strong>Nhấn dấu hiệu hiện tại do quá trình vừa diễn ra:</strong> <em>He is tired because he has been running.</em></li>
                <li>Thường đi với <strong>for</strong> và <strong>since</strong>.</li>
            </ul>
            <h4>So với present perfect</h4>
            <ul>
                <li><strong>present perfect:</strong> nhấn kết quả</li>
                <li><strong>present perfect continuous:</strong> nhấn quá trình / thời lượng</li>
            </ul>
        `,
        advanced: `
            <h3>🎯 Chỗ dễ nhầm</h3>
            <ul>
                <li>Nhiều <strong>stative verbs</strong> không tự nhiên ở dạng này: <em>know, believe, own</em>.</li>
                <li>Nếu kết quả quan trọng hơn quá trình, thường quay về present perfect: <em>I have written three emails</em>.</li>
                <li>Trong speaking, thì này rất mạnh khi giải thích nguyên nhân hiện tại bằng quá trình vừa kéo dài.</li>
            </ul>
            <div class="tip-box">
                <strong>💡 Mẹo:</strong> Nếu bạn muốn người nghe cảm nhận "đã kéo dài bao lâu", hãy nghĩ đến present perfect continuous.
            </div>
        `
    },
    'past-perfect': {
        icon: '🧭',
        title: 'Past Perfect',
        category: 'tenses',
        level: 'advanced',
        connections: ['past-simple', 'past-continuous', 'reported-speech', 'conditionals'],
        simple: `
            <h3>🧭 Quá khứ hoàn thành diễn tả "quá khứ của quá khứ"</h3>
            <p>Dùng khi có hai hành động trong quá khứ và bạn muốn làm rõ hành động nào xảy ra trước.</p>
            <div class="formula-box">S + had + V3</div>
            <div class="example-box">
                <strong>Ví dụ:</strong><br>
                • <em>When I arrived, the movie had started.</em><br>
                • <em>She had finished the report before the meeting began.</em>
            </div>
        `,
        detail: `
            <h3>📚 Khi nào cần dùng</h3>
            <ul>
                <li>Khi trình tự thời gian không rõ nếu chỉ dùng quá khứ đơn.</li>
                <li>Trong reported speech sau động từ tường thuật ở quá khứ.</li>
                <li>Trong conditionals loại 3 để nói điều trái với quá khứ.</li>
            </ul>
            <h4>So sánh</h4>
            <table>
                <tr><th>Câu</th><th>Ý nghĩa</th></tr>
                <tr><td>After he left, I called her.</td><td>trình tự khá rõ nhờ từ nối</td></tr>
                <tr><td>He had left before I called her.</td><td>nhấn rõ hành động xảy ra trước</td></tr>
            </table>
        `,
        advanced: `
            <h3>🎯 Khi không cần past perfect</h3>
            <ul>
                <li>Nếu trình tự thời gian đã rõ nhờ <strong>before, after, then</strong>, đôi khi quá khứ đơn là đủ.</li>
                <li>Không nên lạm dụng mọi lúc có hai hành động quá khứ; dùng khi cần làm rõ hoặc nhấn thứ tự.</li>
                <li>Trong văn kể chuyện, past perfect thường dùng để lùi lại giải thích bối cảnh rồi quay về past simple.</li>
            </ul>
            <div class="warning-box">
                <strong>⚠️ Lỗi phổ biến:</strong> Dùng <em>had + V3</em> cho mọi câu quá khứ khiến văn nặng và sai sắc thái thời gian.
            </div>
        `
    },
    'past-perfect-continuous': {
        icon: '🔄',
        title: 'Past Perfect Continuous',
        category: 'tenses',
        level: 'advanced',
        connections: ['past-continuous', 'past-perfect', 'present-perfect-continuous', 'conditionals'],
        simple: `
            <h3>🔄 Quá khứ hoàn thành tiếp diễn nhấn quá trình kéo dài trước một mốc quá khứ</h3>
            <p>Dùng khi một hành động đã diễn ra liên tục trong một khoảng thời gian trước một thời điểm hoặc hành động khác trong quá khứ.</p>
            <div class="formula-box">S + had been + V-ing</div>
            <div class="example-box">
                <strong>Ví dụ:</strong><br>
                • <em>They had been waiting for two hours before the bus arrived.</em><br>
                • <em>She was tired because she had been studying all night.</em>
            </div>
        `,
        detail: `
            <h3>📚 Khi nào dùng</h3>
            <ul>
                <li><strong>Nhấn thời lượng trước mốc quá khứ:</strong> <em>He had been working there for ten years before he moved.</em></li>
                <li><strong>Giải thích nguyên nhân của trạng thái trong quá khứ:</strong> <em>Her eyes were red because she had been crying.</em></li>
                <li>Thường đi với <strong>for</strong>, <strong>since</strong>, <strong>before</strong>.</li>
            </ul>
            <h4>So sánh</h4>
            <ul>
                <li><strong>past perfect:</strong> nhấn kết quả hoặc thứ tự</li>
                <li><strong>past perfect continuous:</strong> nhấn quá trình và thời lượng</li>
            </ul>
        `,
        advanced: `
            <h3>🎯 Khi không cần dùng</h3>
            <ul>
                <li>Nếu không muốn nhấn quá trình hoặc độ dài, past perfect thường đủ.</li>
                <li>Nhiều stative verbs không tự nhiên ở dạng continuous: <em>know, believe, own</em>.</li>
                <li>Thì này rất hữu ích trong kể chuyện và writing khi bạn muốn cho thấy "điều gì đã kéo dài bao lâu trước khi..."</li>
            </ul>
            <div class="tip-box">
                <strong>💡 Mẹo:</strong> Nếu câu có một mốc quá khứ và bạn muốn hỏi “trước mốc đó, hành động này đã kéo dài bao lâu?”, hãy nghĩ tới past perfect continuous.
            </div>
        `
    },
    'future-simple': {
        icon: '🚀',
        title: 'Future Simple',
        category: 'tenses',
        level: 'intermediate',
        connections: ['present-simple', 'present-continuous', 'future-continuous', 'modal-verbs', 'conditionals'],
        simple: `
            <h3>🚀 Future simple với <em>will</em> dùng cho tương lai trung tính</h3>
            <p>Dùng cho quyết định tức thời, lời hứa, dự đoán, đề nghị hoặc cam kết về tương lai.</p>
            <div class="formula-box">S + will + V</div>
            <div class="example-box">
                <strong>Ví dụ:</strong><br>
                • <em>I will help you.</em> = quyết định ngay lúc nói<br>
                • <em>I will call you tonight.</em><br>
                • <em>It will probably rain tomorrow.</em>
            </div>
        `,
        detail: `
            <h3>📚 Khi nào dùng</h3>
            <table>
                <tr><th>Chức năng</th><th>Ví dụ</th></tr>
                <tr><td>quyết định tức thời</td><td>I will open the door.</td></tr>
                <tr><td>lời hứa / cam kết</td><td>I will never do that again.</td></tr>
                <tr><td>đề nghị</td><td>Will I carry that for you?</td></tr>
                <tr><td>dự đoán</td><td>People will live longer in the future.</td></tr>
            </table>
            <h4>So với các dạng tương lai khác</h4>
            <ul>
                <li><strong>be going to</strong> thường có kế hoạch trước hoặc dấu hiệu hiện tại.</li>
                <li><strong>present continuous</strong> thường chỉ kế hoạch đã sắp xếp.</li>
                <li><strong>present simple</strong> thường chỉ lịch trình cố định.</li>
            </ul>
        `,
        advanced: `
            <h3>🎯 Sắc thái cần nhớ</h3>
            <ul>
                <li><strong>will</strong> rất mạnh trong lời hứa, dự đoán chủ quan và quyết định ngay tại thời điểm nói.</li>
                <li>Có thể dùng với trạng từ xác suất như <em>probably, certainly, definitely</em>.</li>
                <li>Trong mệnh đề thời gian và điều kiện, dù nói về tương lai vẫn thường dùng hiện tại: <em>Call me when you arrive.</em></li>
            </ul>
            <div class="tip-box">
                <strong>💡 Mẹo:</strong> Nếu bạn đang quyết định ngay, hứa, hoặc dự đoán trung tính, <em>will</em> thường là lựa chọn đầu tiên.
            </div>
        `
    },
    'future-continuous': {
        icon: '🛰️',
        title: 'Future Continuous',
        category: 'tenses',
        level: 'advanced',
        connections: ['future-simple', 'future-perfect', 'present-continuous', 'future-perfect-continuous'],
        simple: `
            <h3>🛰️ Future continuous diễn tả việc sẽ đang diễn ra ở một thời điểm trong tương lai</h3>
            <p>Dùng khi muốn đặt người nghe vào giữa một quá trình ở tương lai, chứ không chỉ nói việc đó sẽ xảy ra.</p>
            <div class="formula-box">S + will be + V-ing</div>
            <div class="example-box">
                <strong>Ví dụ:</strong><br>
                • <em>At 8 p.m. tonight, I will be studying.</em><br>
                • <em>This time next week, they will be flying to Tokyo.</em>
            </div>
        `,
        detail: `
            <h3>📚 Khi nào dùng</h3>
            <ul>
                <li><strong>Hành động đang diễn ra tại một mốc tương lai:</strong> <em>At noon, she will be having lunch.</em></li>
                <li><strong>Kế hoạch như bối cảnh tương lai:</strong> <em>I will be working all day tomorrow.</em></li>
                <li><strong>Câu hỏi lịch sự:</strong> <em>Will you be using the car tonight?</em></li>
            </ul>
            <h4>So với future simple</h4>
            <ul>
                <li><strong>will + V:</strong> nhấn việc sẽ xảy ra</li>
                <li><strong>will be + V-ing:</strong> nhấn quá trình đang diễn ra tại một mốc tương lai</li>
            </ul>
        `,
        advanced: `
            <h3>🎯 Sắc thái sử dụng</h3>
            <ul>
                <li>Future continuous thường mềm hơn future simple khi hỏi kế hoạch người khác.</li>
                <li>Rất hữu ích trong writing mô tả timeline, schedule và projected activity.</li>
                <li>Nếu chỉ nói dự định đơn lẻ mà không cần mốc đang diễn ra, future simple hoặc present continuous thường gọn hơn.</li>
            </ul>
            <div class="tip-box">
                <strong>💡 Mẹo:</strong> Nếu câu chứa ý “đến lúc đó, việc này sẽ đang diễn ra”, hãy nghĩ tới future continuous.
            </div>
        `
    },
    'future-perfect': {
        icon: '🏁',
        title: 'Future Perfect',
        category: 'tenses',
        level: 'advanced',
        connections: ['future-simple', 'future-continuous', 'present-perfect', 'present-perfect-continuous', 'conditionals'],
        simple: `
            <h3>🏁 Future perfect nói một việc sẽ hoàn tất trước một mốc tương lai</h3>
            <p>Dùng khi bạn nhìn từ tương lai và xác nhận rằng đến thời điểm đó, việc gì đó đã xong.</p>
            <div class="formula-box">S + will have + V3</div>
            <div class="example-box">
                <strong>Ví dụ:</strong><br>
                • <em>By next June, I will have graduated.</em><br>
                • <em>She will have finished the report by 5 p.m.</em>
            </div>
        `,
        detail: `
            <h3>📚 Cách nhận diện</h3>
            <ul>
                <li>Đi với các mốc tương lai như <strong>by, by the time, before, by next week</strong>.</li>
                <li>Nhấn sự hoàn tất chứ không nhấn quá trình.</li>
                <li>Khác với simple future vì future perfect cần một mốc tương lai làm chuẩn so sánh.</li>
            </ul>
            <table>
                <tr><th>Thì</th><th>Ý nghĩa</th><th>Ví dụ</th></tr>
                <tr><td>will + V</td><td>sẽ làm</td><td>I will finish it tomorrow.</td></tr>
                <tr><td>will have + V3</td><td>sẽ đã làm xong trước mốc</td><td>I will have finished it by noon.</td></tr>
            </table>
        `,
        advanced: `
            <h3>🎯 Cấu trúc liên quan</h3>
            <ul>
                <li><strong>future perfect continuous</strong> sẽ nhấn thời lượng đến mốc tương lai: <em>By July, I will have been working here for five years.</em></li>
                <li>Future perfect rất hữu ích trong writing mô tả kế hoạch, lộ trình, deadline và dự đoán kết quả.</li>
                <li>Khi không có mốc tương lai rõ, future perfect thường nghe gượng và không cần thiết.</li>
            </ul>
            <div class="warning-box">
                <strong>⚠️ Lỗi phổ biến:</strong> Dùng future perfect chỉ vì câu có từ "by" dù ý không hề nói về sự hoàn tất trước một mốc tương lai.
            </div>
        `
    },
    'future-perfect-continuous': {
        icon: '♻️',
        title: 'Future Perfect Continuous',
        category: 'tenses',
        level: 'advanced',
        connections: ['future-continuous', 'future-perfect', 'present-perfect-continuous', 'quantifiers'],
        simple: `
            <h3>♻️ Future perfect continuous nhấn độ dài sẽ kéo tới một mốc tương lai</h3>
            <p>Dùng khi bạn muốn nói rằng đến một thời điểm trong tương lai, một quá trình sẽ đã kéo dài được bao lâu.</p>
            <div class="formula-box">S + will have been + V-ing</div>
            <div class="example-box">
                <strong>Ví dụ:</strong><br>
                • <em>By next month, I will have been working here for five years.</em><br>
                • <em>At 10 p.m., she will have been studying for six hours.</em>
            </div>
        `,
        detail: `
            <h3>📚 Khi nào dùng</h3>
            <ul>
                <li>Nhấn <strong>duration up to a future point</strong>.</li>
                <li>Thường đi với <strong>for + khoảng thời gian</strong> và mốc tương lai như <strong>by, by the time</strong>.</li>
                <li>Khác với future perfect vì nhấn quá trình kéo dài, không chỉ nhấn việc hoàn tất.</li>
            </ul>
            <h4>So sánh</h4>
            <ul>
                <li><strong>future perfect:</strong> By 6, I will have finished the task.</li>
                <li><strong>future perfect continuous:</strong> By 6, I will have been working for three hours.</li>
            </ul>
        `,
        advanced: `
            <h3>🎯 Thì hiếm nhưng hữu ích</h3>
            <ul>
                <li>Ít gặp hơn các thì khác trong giao tiếp thường ngày nhưng rất hữu ích khi mô tả timeline dài.</li>
                <li>Thường không dùng với stative verbs.</li>
                <li>Trong bài thi và writing, dùng đúng lúc sẽ cho thấy bạn hiểu sâu hệ thống thì, nhưng không nên cố nhét vào câu không cần thiết.</li>
            </ul>
            <div class="tip-box">
                <strong>💡 Mẹo:</strong> Nếu câu có cả mốc tương lai lẫn thời lượng kéo dài tới mốc đó, đây là ứng viên rất mạnh.
            </div>
        `
    }
};
