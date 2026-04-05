// English Grammar Pronunciation and IPA
const grammarPronunciationData = {
    'ipa-overview': {
        icon: '🔠',
        title: 'IPA Overview',
        category: 'pronunciation',
        level: 'beginner',
        connections: ['ipa-vowels', 'ipa-consonants', 'stress-schwa', 'parts-of-speech'],
        simple: `
            <h3>🔠 IPA là gì?</h3>
            <p><strong>IPA (International Phonetic Alphabet)</strong> là hệ ký hiệu phiên âm quốc tế dùng để ghi lại âm thật, không ghi theo cách đánh vần thông thường.</p>
            <div class="example-box">
                <strong>Ví dụ:</strong><br>
                • <em>cat</em> /kæt/<br>
                • <em>teacher</em> /ˈtiː.tʃə(r)/<br>
                • <em>enough</em> /ɪˈnʌf/
            </div>
            <ul>
                <li>Chữ viết và âm đọc trong tiếng Anh không khớp 1-1.</li>
                <li>IPA giúp bạn biết phải phát âm thật sự như thế nào.</li>
            </ul>
        `,
        detail: `
            <h3>📚 Cách đọc phiên âm</h3>
            <table>
                <tr><th>Ký hiệu</th><th>Ý nghĩa</th><th>Ví dụ</th></tr>
                <tr><td>/ /</td><td>phiên âm của từ</td><td>/bʊk/</td></tr>
                <tr><td>ˈ</td><td>trọng âm chính</td><td>/ˈprez.ənt/</td></tr>
                <tr><td>ˌ</td><td>trọng âm phụ</td><td>/ˌɪn.təˈnæʃ.ən.əl/</td></tr>
                <tr><td>:</td><td>âm dài</td><td>/i:/ trong <em>see</em></td></tr>
            </table>
            <h4>Tại sao IPA quan trọng</h4>
            <ul>
                <li>Giúp tra từ điển hiệu quả hơn.</li>
                <li>Giảm lệ thuộc vào cách đọc “đoán theo chữ cái”.</li>
                <li>Giúp phân biệt các cặp âm dễ nhầm như /ɪ/ và /i:/, /æ/ và /e/.</li>
            </ul>
        `,
        advanced: `
            <h3>🎯 Cách dùng IPA để tự học</h3>
            <ul>
                <li>Tra từ mới, đọc IPA trước rồi mới nghe audio.</li>
                <li>Đánh dấu các âm tiếng Việt không có tương đương gần đúng, ví dụ /θ/, /ð/, /ʒ/, /ə/.</li>
                <li>Kết hợp IPA với stress và connected speech để nói tự nhiên hơn, không chỉ “đọc đúng từng âm”.</li>
            </ul>
            <div class="tip-box">
                <strong>💡 Mẹo:</strong> Khi học một từ mới, hãy lưu theo bộ 3: nghĩa + IPA + một câu ví dụ.
            </div>
        `
    },
    'ipa-vowels': {
        icon: '🎵',
        title: 'Nguyên Âm IPA',
        category: 'pronunciation',
        level: 'intermediate',
        connections: ['ipa-overview', 'stress-schwa', 'comparisons', 'modifier-errors'],
        simple: `
            <h3>🎵 Nguyên âm là lõi của âm tiết</h3>
            <p>Trong tiếng Anh, nhiều lỗi phát âm đến từ việc đọc sai nguyên âm ngắn, dài và đôi.</p>
            <div class="example-box">
                <strong>Cặp dễ nhầm:</strong><br>
                • /ɪ/ <em>ship</em> vs /iː/ <em>sheep</em><br>
                • /e/ <em>men</em> vs /æ/ <em>man</em><br>
                • /ʊ/ <em>full</em> vs /uː/ <em>fool</em>
            </div>
        `,
        detail: `
            <h3>📚 Nhóm nguyên âm cơ bản</h3>
            <table>
                <tr><th>Âm</th><th>Ví dụ</th><th>Gợi ý</th></tr>
                <tr><td>/iː/</td><td>see, green</td><td>âm dài, môi kéo ngang</td></tr>
                <tr><td>/ɪ/</td><td>sit, big</td><td>ngắn hơn /iː/</td></tr>
                <tr><td>/e/</td><td>bed, head</td><td>miệng mở vừa</td></tr>
                <tr><td>/æ/</td><td>cat, black</td><td>miệng mở rộng hơn /e/</td></tr>
                <tr><td>/ʌ/</td><td>cup, luck</td><td>âm giữa, ngắn</td></tr>
                <tr><td>/ɑː/</td><td>car, heart</td><td>âm dài, mở sâu</td></tr>
                <tr><td>/ɒ/</td><td>hot, not</td><td>BrE điển hình</td></tr>
                <tr><td>/ɔː/</td><td>law, talk</td><td>môi tròn hơn</td></tr>
                <tr><td>/ʊ/</td><td>book, put</td><td>ngắn</td></tr>
                <tr><td>/uː/</td><td>food, blue</td><td>dài hơn /ʊ/</td></tr>
                <tr><td>/ɜː/</td><td>bird, learn</td><td>thường có r-coloring trong AmE</td></tr>
                <tr><td>/ə/</td><td>about, teacher</td><td>schwa, âm trung tính</td></tr>
            </table>
            <h4>Diphthongs</h4>
            <ul>
                <li><strong>/eɪ/</strong> day, name</li>
                <li><strong>/aɪ/</strong> time, my</li>
                <li><strong>/ɔɪ/</strong> boy, choice</li>
                <li><strong>/aʊ/</strong> now, house</li>
                <li><strong>/əʊ/</strong> go, home</li>
            </ul>
        `,
        advanced: `
            <h3>🎯 Cách luyện nguyên âm hiệu quả</h3>
            <ul>
                <li>Luyện theo cặp tối thiểu: <em>ship/sheep</em>, <em>full/fool</em>, <em>bad/bed</em>.</li>
                <li>Nghe và ghi lại chính mình để kiểm tra độ dài âm.</li>
                <li>Đừng cố đọc theo chữ cái; ví dụ <em>blood</em>, <em>food</em>, <em>good</em> có chữ giống nhau nhưng nguyên âm khác nhau.</li>
            </ul>
            <div class="warning-box">
                <strong>⚠️ Lỗi phổ biến:</strong> Đọc mọi nguyên âm theo thói quen tiếng Việt khiến các cặp âm tiếng Anh bị “gộp” lại thành một.
            </div>
        `
    },
    'ipa-consonants': {
        icon: '🔊',
        title: 'Phụ Âm IPA',
        category: 'pronunciation',
        level: 'intermediate',
        connections: ['ipa-overview', 'stress-schwa', 'pronoun-reference', 'sentence-order'],
        simple: `
            <h3>🔊 Phụ âm tiếng Anh có nhiều âm tiếng Việt không có</h3>
            <p>Đặc biệt khó với người Việt là các âm như <strong>/θ/, /ð/, /ʃ/, /ʒ/, /tʃ/, /dʒ/, /ŋ/</strong>.</p>
            <div class="example-box">
                <strong>Ví dụ:</strong><br>
                • <em>think</em> /θɪŋk/<br>
                • <em>this</em> /ðɪs/<br>
                • <em>vision</em> /ˈvɪʒ.ən/<br>
                • <em>sing</em> /sɪŋ/
            </div>
        `,
        detail: `
            <h3>📚 Nhóm phụ âm quan trọng</h3>
            <table>
                <tr><th>Âm</th><th>Ví dụ</th><th>Lưu ý</th></tr>
                <tr><td>/θ/</td><td>think, bath</td><td>đặt lưỡi giữa răng, vô thanh</td></tr>
                <tr><td>/ð/</td><td>this, mother</td><td>đặt lưỡi giữa răng, hữu thanh</td></tr>
                <tr><td>/ʃ/</td><td>she, nation</td><td>âm “sh”</td></tr>
                <tr><td>/ʒ/</td><td>vision, measure</td><td>âm mềm hơn /ʃ/</td></tr>
                <tr><td>/tʃ/</td><td>chair, teacher</td><td>âm “ch”</td></tr>
                <tr><td>/dʒ/</td><td>job, education</td><td>âm “j”</td></tr>
                <tr><td>/ŋ/</td><td>sing, long</td><td>âm cuối “ng”, không thêm /g/ nếu không có</td></tr>
                <tr><td>/r/</td><td>red</td><td>âm /r/ Anh-Mỹ khác “r” tiếng Việt</td></tr>
            </table>
            <h4>Phụ âm cuối rất quan trọng</h4>
            <ul>
                <li>Phụ âm cuối quyết định nghĩa: <em>rice</em> vs <em>rise</em>, <em>back</em> vs <em>bag</em>.</li>
                <li>Nhiều người Việt bỏ phụ âm cuối làm câu khó hiểu.</li>
            </ul>
        `,
        advanced: `
            <h3>🎯 Điểm cần luyện kỹ</h3>
            <ul>
                <li>Phân biệt hữu thanh và vô thanh: /s/ vs /z/, /t/ vs /d/, /f/ vs /v/.</li>
                <li>Luyện phụ âm cuối trong cụm từ chứ không chỉ trong từ đơn: <em>last time</em>, <em>worked hard</em>.</li>
                <li>Phát âm /ŋ/ không tự động kéo theo /g/: <em>sing</em> khác <em>finger</em>.</li>
            </ul>
            <div class="tip-box">
                <strong>💡 Mẹo:</strong> Nếu muốn nói rõ hơn ngay lập tức, hãy ưu tiên luyện phụ âm cuối và cặp /θ/ - /ð/ trước.
            </div>
        `
    },
    'stress-schwa': {
        icon: '⚡',
        title: 'Trọng Âm & Schwa',
        category: 'pronunciation',
        level: 'advanced',
        connections: ['ipa-overview', 'ipa-vowels', 'ipa-consonants', 'reported-speech'],
        simple: `
            <h3>⚡ Nói đúng âm chưa đủ, còn phải đúng trọng âm</h3>
            <p>Tiếng Anh là ngôn ngữ có nhịp theo trọng âm. Nếu trọng âm sai, người nghe vẫn khó hiểu dù từng âm riêng lẻ đúng.</p>
            <div class="example-box">
                <strong>Ví dụ:</strong><br>
                • <em>PREsent</em> /ˈprez.ənt/ = danh từ/động từ<br>
                • <em>preSENT</em> /prɪˈzent/ = động từ "trình bày"
            </div>
        `,
        detail: `
            <h3>📚 Schwa /ə/ và trọng âm từ</h3>
            <ul>
                <li><strong>/ə/</strong> là âm schwa, âm yếu và rất thường gặp trong âm tiết không mang trọng âm.</li>
                <li>Ví dụ: <em>about</em> /əˈbaʊt/, <em>teacher</em> /ˈtiː.tʃə(r)/, <em>banana</em> /bəˈnɑː.nə/</li>
                <li>Biết schwa giúp bạn nói tự nhiên hơn nhiều so với việc đọc mọi âm tiết mạnh như nhau.</li>
            </ul>
            <table>
                <tr><th>Loại</th><th>Ví dụ</th><th>Lưu ý</th></tr>
                <tr><td>Word stress</td><td>imPORtant</td><td>mỗi từ nhiều âm tiết thường có một trọng âm chính</td></tr>
                <tr><td>Sentence stress</td><td>I <strong>WANT</strong> to go.</td><td>nhấn từ thông tin, giảm từ chức năng</td></tr>
                <tr><td>Weak forms</td><td>to, of, can, and</td><td>thường đọc yếu trong câu nối tự nhiên</td></tr>
            </table>
        `,
        advanced: `
            <h3>🎯 Connected speech</h3>
            <ul>
                <li>Người bản ngữ thường nối âm: <em>pick it up</em> nghe gần như /pɪkɪtʌp/.</li>
                <li>Âm yếu xuất hiện trong từ chức năng như <em>to</em>, <em>for</em>, <em>of</em>, <em>and</em>.</li>
                <li>Khi nghe kém, nhiều khi vấn đề không phải từ vựng mà là bạn chưa quen weak forms và stress pattern.</li>
            </ul>
            <div class="warning-box">
                <strong>⚠️ Lỗi phổ biến:</strong> Đọc mọi âm tiết ngang nhau theo nhịp tiếng Việt, làm câu nghe cứng và khó bắt.
            </div>
        `
    }
};
