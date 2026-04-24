// Tour and learning guide for English Grammar
const tourSteps = {
    A1: [
        { title: 'A1 · Khởi động', description: 'Bắt đầu với khung câu tối thiểu: ai làm gì, khi nào và hỏi ra sao.', target: null },
        { title: 'Trật tự câu', description: 'Nắm lõi Subject + Verb trước khi học bất kỳ cấu trúc dài nào.', target: '[data-component="sentence-order"]' },
        { title: 'Từ loại', description: 'Biết một từ đang là noun, verb hay adjective sẽ giúp sửa lỗi nhanh hơn.', target: '[data-component="parts-of-speech"]' },
        { title: 'Mạo từ, đại từ', description: 'A/an/the và pronouns là phần nền xuất hiện gần như ở mọi câu.', target: '[data-component="articles-determiners"]' },
        { title: 'Hiện tại đơn', description: 'Dùng cho thói quen, sự thật và lịch trình nền tảng.', target: '[data-component="present-simple"]' },
        { title: 'Yes/No và Wh questions', description: 'Học đặt câu hỏi từ trợ động từ thay vì chỉ thêm dấu hỏi.', target: '[data-component="yes-no-questions"]' },
        { title: 'There is / There are', description: 'Đây là một trong những cấu trúc giao tiếp nhập môn quan trọng nhất.', target: '[data-component="existential-there"]' },
        { title: 'IPA mở đầu', description: 'Đọc được IPA cơ bản giúp học từ vựng chính xác hơn từ đầu.', target: '[data-component="ipa-overview"]' }
    ],
    A2: [
        { title: 'A2 · Mở rộng giao tiếp', description: 'Tầng này tập trung vào thời gian, so sánh và các mẫu rất hay dùng ngoài đời.', target: null },
        { title: 'Present continuous và past simple', description: 'Bạn cần phân biệt rõ điều đang diễn ra và điều đã xảy ra xong.', target: '[data-component="present-continuous"]' },
        { title: 'Future đơn và be going to', description: 'Bắt đầu dùng tương lai tự nhiên hơn thay vì chỉ dùng will cho mọi thứ.', target: '[data-component="will-vs-going-to"]' },
        { title: 'So sánh', description: 'Comparative và superlative là lõi của diễn đạt mô tả.', target: '[data-component="comparisons"]' },
        { title: 'Giới từ & quantifiers', description: 'Đây là vùng lỗi rất hay gặp khi người học bắt đầu viết nhiều hơn.', target: '[data-component="prepositions"]' },
        { title: 'Countable / Uncountable', description: 'Loại danh từ sẽ quyết định article, verb và quantifier đi cùng.', target: '[data-component="countable-uncountable"]' },
        { title: 'Chính tả và dấu câu cơ bản', description: 'Giữ câu sạch ngay từ đầu sẽ giúp lên B1-B2 dễ hơn nhiều.', target: '[data-component="spelling-rules"]' }
    ],
    B1: [
        { title: 'B1 · Dùng được độc lập', description: 'B1 là giai đoạn bạn phải viết và nói mượt hơn, không chỉ đúng từng câu rời.', target: null },
        { title: 'Present perfect', description: 'Đây là điểm chuyển quan trọng từ A2 lên ngữ pháp giao tiếp thật sự.', target: '[data-component="present-perfect"]' },
        { title: 'Modal verbs', description: 'Chọn được mức độ lịch sự, chắc chắn, bắt buộc là dấu hiệu lên trình rõ rệt.', target: '[data-component="modal-verbs"]' },
        { title: 'Subject-verb agreement', description: 'B1 cần kiểm soát chia động từ tốt hơn trong câu dài hơn.', target: '[data-component="subject-verb-agreement"]' },
        { title: 'Tag questions và used to', description: 'Hai nhóm rất hay dùng trong nói tự nhiên và kể thói quen quá khứ.', target: '[data-component="tag-questions"]' },
        { title: 'Distributives và pronouns', description: 'Both/either/neither/all và pronoun reference giúp câu gọn nhưng rõ nghĩa.', target: '[data-component="distributives"]' },
        { title: 'Word stress', description: 'B1 bắt đầu cần phát âm có trọng tâm hơn, không chỉ đọc từng từ rời.', target: '[data-component="word-stress"]' }
    ],
    B2: [
        { title: 'B2 · Viết và nói chắc tay', description: 'Tầng này tập trung vào câu phức, chuyển ý, câu bị động và cấu trúc hay gặp trong bài luận.', target: null },
        { title: 'Passive voice', description: 'Bạn cần dùng bị động linh hoạt trong writing và đọc hiểu.', target: '[data-component="passive-voice"]' },
        { title: 'Reported speech và noun clauses', description: 'B2 phải kiểm soát được truyền đạt lời nói và mệnh đề làm danh từ.', target: '[data-component="reported-speech"]' },
        { title: 'Conditionals và sequence of tenses', description: 'Đây là vùng quyết định độ chính xác của các câu dài có logic thời gian.', target: '[data-component="conditionals"]' },
        { title: 'Relative clauses', description: 'Mệnh đề quan hệ giúp gộp câu mà vẫn chặt chẽ.', target: '[data-component="relative-clauses"]' },
        { title: 'Phrasal verbs và verb patterns', description: 'Muốn nghe tự nhiên hơn và đọc nhanh hơn, bạn phải vào được vùng này.', target: '[data-component="phrasal-verbs"]' },
        { title: 'Sentence stress & intonation', description: 'B2 không chỉ đúng câu mà còn cần nhịp câu nghe tự nhiên hơn.', target: '[data-component="sentence-stress"]' }
    ],
    C1: [
        { title: 'C1 · Linh hoạt & học thuật', description: 'C1 là lúc ngữ pháp không còn chỉ là đúng sai, mà là lựa chọn sắc thái và nhịp văn.', target: null },
        { title: 'Inversion và emphasis', description: 'Đây là lớp cấu trúc làm văn trang trọng, nhấn mạnh và giàu nhịp hơn.', target: '[data-component="inversion"]' },
        { title: 'Reduced relatives & participle clauses', description: 'C1 cần rút gọn mệnh đề để câu dài mà vẫn gọn.', target: '[data-component="reduced-relatives"]' },
        { title: 'Subjunctive và modal perfect', description: 'Hai hệ thống này rất quan trọng trong writing nâng cao và sắc thái đánh giá.', target: '[data-component="subjunctive"]' },
        { title: 'Academic grammar', description: 'Danh hóa, end-weight và grammar of argumentation bắt đầu rất quan trọng.', target: '[data-component="academic-style-grammar"]' },
        { title: 'Connected speech', description: 'C1 speaking/listening cần xử lý tốt nối âm, weak forms và nhịp nói.', target: '[data-component="connected-speech"]' },
        { title: 'Sequence of tenses', description: 'Khi câu nhiều tầng hơn, logic thời gian phải rất chắc.', target: '[data-component="sequence-of-tenses"]' }
    ],
    C2: [
        { title: 'C2 · Làm chủ hệ thống', description: 'C2 đòi hỏi bạn hiểu những tầng ngữ pháp hiếm, tinh và giàu sắc thái hơn mức bài thi thông thường.', target: null },
        { title: 'Grammar registers', description: 'Biết chuyển giữa formal, informal, BrE và AmE là dấu hiệu của mức làm chủ.', target: '[data-component="grammar-registers"]' },
        { title: 'Semantic prosody', description: 'Bạn không chỉ chọn từ đúng, mà còn chọn từ hợp sắc thái collocation của nó.', target: '[data-component="semantic-prosody"]' },
        { title: 'Determiner & article system', description: 'Làm chủ hệ determiner và article là bước cần thiết để đọc các noun phrase dày và chính xác.', target: '[data-component="determiner-system"]' },
        { title: 'Clause system & complementation', description: 'Đây là phần gắn các mảnh rời rạc thành một hệ câu thực sự ở mức C2.', target: '[data-component="clause-system"]' },
        { title: 'Spoken grammar', description: 'Muốn thật sự biết ngữ pháp tiếng Anh, bạn phải hiểu ngữ pháp của hội thoại tự nhiên, không chỉ văn viết.', target: '[data-component="spoken-grammar"]' },
        { title: 'Fronting và complex inversion', description: 'Đây là vùng cấu trúc gần mức tham chiếu và thường xuất hiện trong văn giàu phong cách.', target: '[data-component="fronting"]' },
        { title: 'Archaisms & literary grammar', description: 'Hiểu được các mẫu hiếm giúp đọc văn pháp lý, văn học và diễn văn sâu hơn.', target: '[data-component="archaisms-modern-grammar"]' }
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
    'Phân biệt được transitive, intransitive và linking verbs trong các mẫu câu cơ bản',
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
    'Sửa được lỗi giới từ, gerund/infinitive, countable/uncountable, quantifiers, fragments và punctuation trong bài viết của mình',
    'Phân biệt được register: formal, informal, BrE và AmE khi chọn cấu trúc',
    'Dùng được reduced clauses, inversion, cleft, subjunctive và modal perfect đúng ngữ cảnh',
    'Hiểu được semantic prosody, discourse markers và information flow trong writing nâng cao',
    'Nắm được hệ determiner, article, noun phrase, clause system và spoken grammar ở mức C1-C2'
];
