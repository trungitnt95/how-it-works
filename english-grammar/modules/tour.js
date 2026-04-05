// Tour and learning guide for English Grammar
const tourSteps = {
    beginner: [
        { title: 'Chào mừng!', description: 'Bắt đầu với khung ngữ pháp cốt lõi để viết câu đúng và dễ hiểu.', target: null },
        { title: 'Trật tự câu', description: 'Học lõi S + V + O trước khi học bất kỳ cấu trúc phức nào.', target: '[data-component="sentence-order"]' },
        { title: 'Từ loại', description: 'Biết mỗi từ đang làm chức năng gì trong câu.', target: '[data-component="parts-of-speech"]' },
        { title: 'Mạo từ & đại từ', description: 'Hai nhóm nhỏ nhưng xuất hiện trong gần như mọi câu.', target: '[data-component="articles-determiners"]' },
        { title: 'IPA cơ bản', description: 'Đọc được phiên âm sẽ giúp bạn học từ vựng và phát âm bớt đoán mò.', target: '[data-component="ipa-overview"]' },
        { title: 'Hiện tại đơn & quá khứ đơn', description: 'Nắm hai thì nền tảng nhất trước khi mở rộng sang thì phức hơn.', target: '[data-component="present-simple"]' },
        { title: 'Câu hỏi & phủ định', description: 'Đừng chỉ thêm dấu hỏi hoặc chữ not, hãy học đúng trợ động từ.', target: '[data-component="question-forms"]' },
        { title: 'Giới từ & dấu câu', description: 'Những lỗi nhỏ này xuất hiện rất thường xuyên trong viết và nói.', target: '[data-component="prepositions"]' },
        { title: 'Hoàn thành', description: 'Bạn đã có nền tảng đủ tốt để đọc các cấu trúc trung cấp mà không bị rối.', target: null }
    ],
    intermediate: [
        { title: 'Lên cấp!', description: 'Bây giờ tập trung vào các vùng dễ nhầm nhất khi giao tiếp và làm bài viết.', target: null },
        { title: 'Tính từ & trạng từ', description: 'Phân biệt đúng hai nhóm này giúp câu tự nhiên hơn ngay lập tức.', target: '[data-component="adjectives-adverbs"]' },
        { title: 'Hệ thống 12 thì', description: 'Từ present continuous đến future perfect continuous, hãy học theo logic thời gian thay vì học rời.', target: '[data-component="present-continuous"]' },
        { title: 'Present Perfect', description: 'Kết nối quá khứ với hiện tại mà không lẫn với past simple.', target: '[data-component="present-perfect"]' },
        { title: 'Liên từ & so sánh', description: 'Đây là vùng giúp bạn nối ý và tăng độ linh hoạt của câu.', target: '[data-component="conjunctions"]' },
        { title: 'Modal Verbs', description: 'Chọn mức độ chắc chắn, lịch sự, bắt buộc và lời khuyên.', target: '[data-component="modal-verbs"]' },
        { title: 'IPA nguyên âm & phụ âm', description: 'Phân biệt các cặp âm dễ nhầm giúp phát âm chắc hơn nhiều.', target: '[data-component="ipa-vowels"]' },
        { title: 'Gerund, infinitive, quantifiers', description: 'Ba nhóm nhỏ nhưng gây rất nhiều lỗi trong bài thi.', target: '[data-component="gerunds-infinitives"]' },
        { title: 'Tiến bộ tốt', description: 'Bạn đã đi qua phần lớn các lỗi ngữ pháp trung cấp phổ biến nhất.', target: null }
    ],
    advanced: [
        { title: 'Nâng cao!', description: 'Giai đoạn này tập trung vào câu phức, giả định và writing học thuật.', target: null },
        { title: 'Các thì nâng cao', description: 'Past perfect continuous, future continuous, future perfect và future perfect continuous giúp hoàn thiện đủ bộ 12 thì.', target: '[data-component="past-perfect-continuous"]' },
        { title: 'Past Perfect & Reported Speech', description: 'Kiểm soát tốt trình tự thời gian và chuyển lời nói sang gián tiếp.', target: '[data-component="past-perfect"]' },
        { title: 'Mệnh đề quan hệ', description: 'Gộp nhiều câu đơn thành câu dài nhưng vẫn gọn và chính xác.', target: '[data-component="relative-clauses"]' },
        { title: 'Conditionals', description: 'Nắm chắc 4 loại điều kiện và cả mixed conditionals.', target: '[data-component="conditionals"]' },
        { title: 'Passive, noun clauses, causatives', description: 'Ba nhóm cấu trúc rất thường gặp trong viết trang trọng và học thuật.', target: '[data-component="passive-voice"]' },
        { title: 'Stress & Schwa', description: 'Nói tự nhiên hơn nhờ trọng âm từ, trọng âm câu và âm schwa.', target: '[data-component="stress-schwa"]' },
        { title: 'Wish / If only', description: 'Học cách diễn tả tiếc nuối và giả định trái thực tế.', target: '[data-component="wish-if-only"]' },
        { title: 'Fragments, run-ons, punctuation', description: 'Rà câu như người chấm bài để tránh lỗi cấu trúc và dấu câu.', target: '[data-component="fragments-run-ons"]' },
        { title: 'Master!', description: 'Bạn đã có một bản đồ ngữ pháp đủ rộng để tự học sâu hoặc luyện thi nghiêm túc.', target: null }
    ]
};

const quickTips = [
    { icon: '🧭', text: 'Muốn sửa câu nhanh, hãy tìm Subject và Verb trước rồi mới kiểm tra phần còn lại.' },
    { icon: '⏰', text: 'Chọn thì bằng câu hỏi: hành động lặp lại, đang diễn ra, đã kết thúc, hay còn ảnh hưởng tới hiện tại?' },
    { icon: '📰', text: 'Trước mỗi danh từ, tự hỏi: đếm được hay không, số ít hay số nhiều, xác định hay chưa.' },
    { icon: '❓', text: 'Có do/does/did rồi thì động từ chính quay về nguyên mẫu.' },
    { icon: '📍', text: 'Học giới từ theo cụm như interested in, depend on, good at thay vì học rời.' },
    { icon: '🔄', text: 'Gerund và infinitive nên học bằng ví dụ hoàn chỉnh, không chỉ học danh sách khô.' },
    { icon: '🧩', text: 'Khi câu dài, tách xem đâu là mệnh đề chính, đâu là mệnh đề phụ.' },
    { icon: '🗣️', text: 'Tra từ mới bằng IPA sẽ chính xác hơn rất nhiều so với việc đoán cách phát âm theo chữ cái.' },
    { icon: '✍️', text: 'Rà bài theo 3 lượt: verb forms, articles/quantifiers, rồi punctuation.' }
];

const englishGrammarChecklist = [
    'Xác định được Subject, Verb và Object trong một câu cơ bản',
    'Biết khi nào dùng a, an, the hoặc không dùng mạo từ',
    'Dùng đúng subject pronouns, object pronouns và possessive forms',
    'Phân biệt được singular/plural nouns, irregular plurals và các noun forms dễ nhầm',
    'Phân biệt được adjective và adverb trong câu',
    'Dùng đúng numerals: cardinal, ordinal, percentages, two hundred vs hundreds of',
    'Nắm được logic của đủ 12 thì tiếng Anh, không chỉ các thì cơ bản',
    'Phân biệt được will, be going to, present continuous và present simple khi nói về tương lai gần',
    'Phân biệt được Future Simple, Future Continuous, Future Perfect và Future Perfect Continuous',
    'Viết được câu hỏi đúng với do/does/did, to be hoặc modal verbs',
    'Không chia sai động từ khi chủ ngữ bị cụm danh từ dài che mất',
    'Hiểu sequence of tenses và không dùng future tense sai trong adverbial clauses of time',
    'Dùng được conjunctions, comparisons và relative clauses để nối ý',
    'Dùng đúng relative pronouns/adverbs và các cấu trúc kết quả như so/such/too/enough',
    'Phân biệt được 4 loại conditionals cơ bản và các trường hợp hay nhầm',
    'Hiểu cách dùng passive voice, reported speech và noun clauses',
    'Đọc được IPA cơ bản cho nguyên âm, phụ âm, trọng âm chính và schwa',
    'Sửa được lỗi giới từ, gerund/infinitive, countable/uncountable, quantifiers, fragments và punctuation trong bài viết của mình'
];
