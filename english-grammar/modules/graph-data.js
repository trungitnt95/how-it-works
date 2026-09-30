// Concept-level graph for graph.html.
// node: { id, label, vi, cat, desc (Vietnamese + English example), topic? (lesson id in modules/*.js) }
// link: [source, target, label]
const grammarGraphCategories = {
    sentence: { label: 'Thành phần câu', color: '#58a6ff' },
    wordclass: { label: 'Từ loại', color: '#3fb950' },
    verb: { label: 'Hệ thống động từ', color: '#f6b73c' },
    clause: { label: 'Cụm từ & mệnh đề', color: '#a67ce0' },
    agreement: { label: 'Hòa hợp & quy tắc', color: '#f05d5e' }
};

const grammarGraphData = {
    nodes: [
        // Sentence parts
        { id: 'sentence', label: 'Sentence', vi: 'Câu', cat: 'sentence', topic: 'sentence-order', desc: 'Đơn vị ngữ pháp hoàn chỉnh, thường gồm chủ ngữ và vị ngữ. Ví dụ: <em>Birds fly.</em>' },
        { id: 'subject', label: 'Subject', vi: 'Chủ ngữ', cat: 'sentence', topic: 'sentence-order', desc: 'Người/vật thực hiện hành động hoặc được nói tới. Ví dụ: <em><b>She</b> reads.</em>' },
        { id: 'predicate', label: 'Predicate', vi: 'Vị ngữ', cat: 'sentence', desc: 'Phần còn lại của câu, nói về chủ ngữ; luôn chứa động từ. Ví dụ: <em>She <b>reads books</b>.</em>' },
        { id: 'object', label: 'Object', vi: 'Tân ngữ', cat: 'sentence', topic: 'direct-indirect-objects', desc: 'Người/vật chịu tác động của động từ. Ví dụ: <em>She reads <b>books</b>.</em>' },
        { id: 'direct-object', label: 'Direct object', vi: 'Tân ngữ trực tiếp', cat: 'sentence', topic: 'direct-indirect-objects', desc: 'Trả lời “cái gì/ai?”. Ví dụ: <em>I gave <b>a gift</b> to Tom.</em>' },
        { id: 'indirect-object', label: 'Indirect object', vi: 'Tân ngữ gián tiếp', cat: 'sentence', topic: 'direct-indirect-objects', desc: 'Người nhận. Ví dụ: <em>I gave <b>Tom</b> a gift.</em>' },
        { id: 'complement', label: 'Complement', vi: 'Bổ ngữ', cat: 'sentence', topic: 'subject-complement-object-complement', desc: 'Bổ sung nghĩa cho chủ ngữ/tân ngữ, đi sau linking verb. Ví dụ: <em>She is <b>a doctor</b>.</em>' },
        { id: 'adverbial', label: 'Adverbial', vi: 'Trạng ngữ', cat: 'sentence', topic: 'adverb-types-position', desc: 'Cho biết thời gian, nơi chốn, cách thức, lý do. Ví dụ: <em>She reads <b>at night</b>.</em>' },
        { id: 'word-order', label: 'Word order (SVO)', vi: 'Trật tự từ', cat: 'sentence', topic: 'sentence-order', desc: 'Tiếng Anh thường theo thứ tự Chủ – Động – Tân. Ví dụ: <em>Tom (S) eats (V) rice (O).</em>' },
        { id: 'sentence-type', label: 'Sentence types', vi: 'Loại câu', cat: 'sentence', topic: 'sentence-types', desc: 'Câu trần thuật, nghi vấn, mệnh lệnh, cảm thán.' },
        { id: 'question', label: 'Question', vi: 'Câu hỏi', cat: 'sentence', topic: 'question-forms', desc: 'Đảo trợ động từ lên trước chủ ngữ. Ví dụ: <em><b>Do</b> you like tea?</em>' },
        { id: 'negation', label: 'Negation', vi: 'Phủ định', cat: 'sentence', topic: 'negatives', desc: 'Dùng <em>not</em> sau trợ động từ. Ví dụ: <em>She does <b>not</b> like tea.</em>' },
        { id: 'imperative', label: 'Imperative', vi: 'Câu mệnh lệnh', cat: 'sentence', topic: 'imperatives-requests', desc: 'Không có chủ ngữ nói ra. Ví dụ: <em>Close the door.</em>' },
        { id: 'expletive', label: 'Dummy subject (it/there)', vi: 'Chủ ngữ giả', cat: 'sentence', topic: 'existential-there', desc: 'Lấp chỗ chủ ngữ khi không có chủ thể rõ. Ví dụ: <em><b>There</b> is a cat. <b>It</b> rains.</em>' },

        // Word classes
        { id: 'noun', label: 'Noun', vi: 'Danh từ', cat: 'wordclass', topic: 'parts-of-speech', desc: 'Chỉ người, vật, nơi chốn, ý niệm. Ví dụ: <em>teacher, city, love.</em>' },
        { id: 'pronoun', label: 'Pronoun', vi: 'Đại từ', cat: 'wordclass', topic: 'pronouns-possessives', desc: 'Thay thế danh từ. Ví dụ: <em>he, she, it, they, mine.</em>' },
        { id: 'verb', label: 'Verb', vi: 'Động từ', cat: 'wordclass', topic: 'verbs-overview', desc: 'Chỉ hành động hoặc trạng thái. Ví dụ: <em>run, be, seem.</em>' },
        { id: 'adjective', label: 'Adjective', vi: 'Tính từ', cat: 'wordclass', topic: 'adjectives-adverbs', desc: 'Bổ nghĩa cho danh từ. Ví dụ: <em>a <b>red</b> car.</em>' },
        { id: 'adverb', label: 'Adverb', vi: 'Trạng từ', cat: 'wordclass', topic: 'adjectives-adverbs', desc: 'Bổ nghĩa cho động từ, tính từ, trạng từ khác. Ví dụ: <em>She sings <b>well</b>.</em>' },
        { id: 'preposition', label: 'Preposition', vi: 'Giới từ', cat: 'wordclass', topic: 'prepositions', desc: 'Nối danh từ/đại từ với phần còn lại của câu. Ví dụ: <em>in, on, at, by.</em>' },
        { id: 'conjunction', label: 'Conjunction', vi: 'Liên từ', cat: 'wordclass', topic: 'conjunctions', desc: 'Nối từ, cụm, mệnh đề. Ví dụ: <em>and, but, because.</em>' },
        { id: 'determiner', label: 'Determiner', vi: 'Từ hạn định', cat: 'wordclass', topic: 'articles-determiners', desc: 'Đứng trước danh từ để xác định. Ví dụ: <em>the, a, this, my, some.</em>' },
        { id: 'article', label: 'Article', vi: 'Mạo từ', cat: 'wordclass', topic: 'articles-determiners', desc: 'Loại từ hạn định: <em>a, an, the.</em>' },
        { id: 'quantifier', label: 'Quantifier', vi: 'Từ chỉ số lượng', cat: 'wordclass', topic: 'quantifiers', desc: 'Chỉ lượng. Ví dụ: <em>much, many, few, a little.</em>' },
        { id: 'possessive', label: 'Possessive', vi: 'Sở hữu', cat: 'wordclass', topic: 'pronouns-possessives', desc: 'Chỉ sự sở hữu. Ví dụ: <em>my book, the book is mine.</em>' },
        { id: 'countable', label: 'Countable / Uncountable', vi: 'Đếm được / không đếm được', cat: 'wordclass', topic: 'countable-uncountable', desc: 'Quyết định dùng <em>many/much</em>, <em>a/an</em>. Ví dụ: <em>an apple; some water.</em>' },
        { id: 'plural', label: 'Plural', vi: 'Số nhiều', cat: 'wordclass', topic: 'nouns-plurals', desc: 'Thường thêm -s/-es. Ví dụ: <em>cat → cats, box → boxes.</em>' },
        { id: 'comparison', label: 'Comparison', vi: 'So sánh', cat: 'wordclass', topic: 'comparisons', desc: 'Dạng so sánh của tính từ/trạng từ. Ví dụ: <em>taller, the tallest.</em>' },

        // Verb system
        { id: 'tense', label: 'Tense', vi: 'Thì', cat: 'verb', topic: 'present-simple', desc: 'Cho biết thời điểm của hành động. Ví dụ: <em>walks / walked / will walk.</em>' },
        { id: 'aspect', label: 'Aspect', vi: 'Thể (tiếp diễn/hoàn thành)', cat: 'verb', topic: 'present-perfect', desc: 'Cách nhìn hành động: đang diễn ra hay đã hoàn tất. Ví dụ: <em>is walking; has walked.</em>' },
        { id: 'auxiliary', label: 'Auxiliary verb', vi: 'Trợ động từ', cat: 'verb', topic: 'auxiliary-system', desc: 'Giúp tạo thì, câu hỏi, phủ định. Ví dụ: <em>do, have, be.</em>' },
        { id: 'modal', label: 'Modal verb', vi: 'Động từ khuyết thiếu', cat: 'verb', topic: 'modal-verbs', desc: 'Diễn tả khả năng, sự cho phép, bắt buộc. Ví dụ: <em>can, must, should.</em>' },
        { id: 'transitive', label: 'Transitive verb', vi: 'Ngoại động từ', cat: 'verb', topic: 'verb-types-transitivity', desc: 'Cần tân ngữ. Ví dụ: <em>She <b>opened</b> the door.</em>' },
        { id: 'intransitive', label: 'Intransitive verb', vi: 'Nội động từ', cat: 'verb', topic: 'verb-types-transitivity', desc: 'Không cần tân ngữ. Ví dụ: <em>He <b>slept</b>.</em>' },
        { id: 'linking', label: 'Linking verb', vi: 'Động từ nối', cat: 'verb', topic: 'subject-complement-object-complement', desc: 'Nối chủ ngữ với bổ ngữ. Ví dụ: <em>She <b>seems</b> happy.</em>' },
        { id: 'stative', label: 'Stative verb', vi: 'Động từ trạng thái', cat: 'verb', topic: 'stative-verbs', desc: 'Ít dùng thì tiếp diễn. Ví dụ: <em>know, love, own.</em>' },
        { id: 'voice', label: 'Voice (active/passive)', vi: 'Thể chủ động/bị động', cat: 'verb', topic: 'passive-voice', desc: 'Ví dụ: <em>Tom wrote it. → It was written by Tom.</em>' },
        { id: 'mood', label: 'Mood / Subjunctive', vi: 'Thức (giả định)', cat: 'verb', topic: 'subjunctive', desc: 'Diễn tả điều không có thật/mong muốn. Ví dụ: <em>If I <b>were</b> you…</em>' },
        { id: 'conditional', label: 'Conditional', vi: 'Câu điều kiện', cat: 'verb', topic: 'conditionals', desc: 'Ví dụ: <em>If it rains, I will stay home.</em>' },
        { id: 'infinitive', label: 'Infinitive', vi: 'Động từ nguyên mẫu', cat: 'verb', topic: 'gerunds-infinitives', desc: '<em>to + V</em>. Ví dụ: <em>I want <b>to go</b>.</em>' },
        { id: 'gerund', label: 'Gerund', vi: 'Danh động từ', cat: 'verb', topic: 'gerunds-infinitives', desc: 'V-ing dùng như danh từ. Ví dụ: <em><b>Swimming</b> is fun.</em>' },
        { id: 'participle', label: 'Participle', vi: 'Phân từ', cat: 'verb', topic: 'participle-clauses', desc: 'V-ing / V3 dùng như tính từ hoặc tạo thì. Ví dụ: <em>a <b>broken</b> window.</em>' },
        { id: 'phrasal-verb', label: 'Phrasal verb', vi: 'Cụm động từ', cat: 'verb', topic: 'phrasal-verbs', desc: 'Động từ + tiểu từ. Ví dụ: <em>give up, look after.</em>' },

        // Phrases & clauses
        { id: 'phrase', label: 'Phrase', vi: 'Cụm từ', cat: 'clause', topic: 'phrases-vs-clauses', desc: 'Nhóm từ không có cặp chủ–vị. Ví dụ: <em>the old house.</em>' },
        { id: 'noun-phrase', label: 'Noun phrase', vi: 'Cụm danh từ', cat: 'clause', topic: 'noun-phrase-architecture', desc: 'Danh từ + từ bổ nghĩa. Ví dụ: <em><b>the tall man in black</b>.</em>' },
        { id: 'verb-phrase', label: 'Verb phrase', vi: 'Cụm động từ (chức năng)', cat: 'clause', desc: 'Trợ động từ + động từ chính. Ví dụ: <em>has been waiting.</em>' },
        { id: 'prep-phrase', label: 'Prepositional phrase', vi: 'Cụm giới từ', cat: 'clause', topic: 'prepositional-phrases', desc: 'Giới từ + tân ngữ. Ví dụ: <em>in the garden.</em>' },
        { id: 'clause', label: 'Clause', vi: 'Mệnh đề', cat: 'clause', topic: 'phrases-vs-clauses', desc: 'Nhóm từ có chủ ngữ và động từ. Ví dụ: <em>because she left.</em>' },
        { id: 'independent', label: 'Independent clause', vi: 'Mệnh đề độc lập', cat: 'clause', topic: 'clause-system', desc: 'Đứng một mình thành câu. Ví dụ: <em>I stayed.</em>' },
        { id: 'dependent', label: 'Dependent clause', vi: 'Mệnh đề phụ thuộc', cat: 'clause', topic: 'clause-system', desc: 'Không đứng một mình. Ví dụ: <em>…although it was late.</em>' },
        { id: 'relative-clause', label: 'Relative clause', vi: 'Mệnh đề quan hệ', cat: 'clause', topic: 'relative-clauses', desc: 'Bổ nghĩa cho danh từ. Ví dụ: <em>the man <b>who called</b>.</em>' },
        { id: 'noun-clause', label: 'Noun clause', vi: 'Mệnh đề danh từ', cat: 'clause', topic: 'noun-clauses', desc: 'Làm chủ ngữ/tân ngữ. Ví dụ: <em>I know <b>that he left</b>.</em>' },
        { id: 'adverbial-clause', label: 'Adverbial clause', vi: 'Mệnh đề trạng ngữ', cat: 'clause', topic: 'adverbial-time-clauses', desc: 'Chỉ thời gian, lý do, điều kiện. Ví dụ: <em><b>When it rained</b>, we left.</em>' },
        { id: 'reported-speech', label: 'Reported speech', vi: 'Câu tường thuật', cat: 'clause', topic: 'reported-speech', desc: 'Ví dụ: <em>She said (that) she was tired.</em>' },

        // Agreement & rules
        { id: 'sv-agreement', label: 'Subject–verb agreement', vi: 'Hòa hợp chủ–vị', cat: 'agreement', topic: 'subject-verb-agreement', desc: 'Động từ khớp số với chủ ngữ. Ví dụ: <em>He <b>runs</b>; they <b>run</b>.</em>' },
        { id: 'person', label: 'Person', vi: 'Ngôi', cat: 'agreement', topic: 'pronouns-possessives', desc: 'Ngôi 1, 2, 3. Ví dụ: <em>I / you / he.</em>' },
        { id: 'number', label: 'Number', vi: 'Số (ít/nhiều)', cat: 'agreement', topic: 'nouns-plurals', desc: 'Số ít hoặc số nhiều.' },
        { id: 'case', label: 'Case', vi: 'Cách (chủ/tân/sở hữu)', cat: 'agreement', topic: 'pronouns-possessives', desc: 'Ví dụ: <em>I (chủ) – me (tân) – my (sở hữu).</em>' },
        { id: 'pronoun-reference', label: 'Pronoun reference', vi: 'Quy chiếu đại từ', cat: 'agreement', topic: 'pronoun-reference', desc: 'Đại từ phải rõ thay cho danh từ nào.' },
        { id: 'parallelism', label: 'Parallel structure', vi: 'Cấu trúc song song', cat: 'agreement', topic: 'parallel-structure', desc: 'Ví dụ: <em>She likes <b>reading</b>, <b>writing</b>, and <b>swimming</b>.</em>' }
    ],
    links: [
        ['sentence', 'subject', 'gồm'], ['sentence', 'predicate', 'gồm'], ['sentence', 'word-order', 'theo'],
        ['sentence', 'sentence-type', 'phân loại'], ['sentence-type', 'question', 'gồm'], ['sentence-type', 'imperative', 'gồm'],
        ['question', 'auxiliary', 'đảo'], ['negation', 'auxiliary', 'dùng'], ['imperative', 'subject', 'lược bỏ'],
        ['expletive', 'subject', 'đóng vai'], ['word-order', 'subject', 'S'], ['word-order', 'verb', 'V'], ['word-order', 'object', 'O'],

        ['subject', 'noun', 'là'], ['subject', 'pronoun', 'là'], ['subject', 'noun-phrase', 'là'], ['subject', 'noun-clause', 'là'],
        ['subject', 'verb', 'hòa hợp với'], ['subject', 'sv-agreement', 'quy tắc'], ['subject', 'gerund', 'là'],
        ['predicate', 'verb', 'chứa'], ['predicate', 'object', 'có thể có'], ['predicate', 'complement', 'có thể có'], ['predicate', 'adverbial', 'có thể có'],
        ['object', 'direct-object', 'gồm'], ['object', 'indirect-object', 'gồm'], ['object', 'noun', 'là'], ['object', 'pronoun', 'là'], ['object', 'case', 'ở cách tân'],
        ['transitive', 'object', 'cần'], ['intransitive', 'object', 'không có'], ['linking', 'complement', 'cần'],
        ['complement', 'adjective', 'là'], ['complement', 'noun', 'là'],
        ['adverbial', 'adverb', 'là'], ['adverbial', 'prep-phrase', 'là'], ['adverbial', 'adverbial-clause', 'là'],

        ['noun', 'plural', 'có'], ['noun', 'countable', 'phân loại'], ['noun', 'determiner', 'đi với'], ['noun', 'adjective', 'được bổ nghĩa bởi'],
        ['noun', 'noun-phrase', 'lõi của'], ['noun', 'number', 'có'], ['countable', 'quantifier', 'chọn'], ['determiner', 'article', 'gồm'],
        ['determiner', 'quantifier', 'gồm'], ['determiner', 'possessive', 'gồm'],
        ['pronoun', 'noun', 'thay thế'], ['pronoun', 'possessive', 'có dạng'], ['pronoun', 'person', 'có'], ['pronoun', 'case', 'có'],
        ['pronoun', 'pronoun-reference', 'cần'], ['possessive', 'case', 'là'],
        ['verb', 'tense', 'chia'], ['verb', 'transitive', 'gồm'], ['verb', 'intransitive', 'gồm'], ['verb', 'linking', 'gồm'], ['verb', 'stative', 'gồm'],
        ['verb', 'auxiliary', 'đi với'], ['verb', 'modal', 'đi với'], ['verb', 'verb-phrase', 'lõi của'], ['verb', 'adverb', 'được bổ nghĩa bởi'],
        ['verb', 'phrasal-verb', 'tạo'], ['verb', 'voice', 'có'], ['verb', 'mood', 'có'], ['verb', 'infinitive', 'dạng'], ['verb', 'gerund', 'dạng'], ['verb', 'participle', 'dạng'],
        ['adjective', 'adverb', 'chuyển thành'], ['adjective', 'comparison', 'có'], ['adverb', 'comparison', 'có'],
        ['preposition', 'prep-phrase', 'tạo'], ['preposition', 'noun', 'đi với'], ['preposition', 'phrasal-verb', 'trong'],
        ['conjunction', 'clause', 'nối'], ['conjunction', 'dependent', 'mở đầu'], ['conjunction', 'parallelism', 'đòi hỏi'],

        ['tense', 'aspect', 'kết hợp'], ['tense', 'auxiliary', 'tạo bởi'], ['aspect', 'auxiliary', 'tạo bởi'], ['aspect', 'participle', 'dùng'], ['aspect', 'stative', 'hạn chế'],
        ['modal', 'auxiliary', 'là'], ['modal', 'infinitive', 'theo sau'], ['voice', 'auxiliary', 'dùng be'], ['voice', 'participle', 'dùng V3'], ['voice', 'transitive', 'cần'],
        ['mood', 'conditional', 'dùng trong'], ['conditional', 'tense', 'phối hợp'], ['conditional', 'modal', 'dùng'], ['conditional', 'adverbial-clause', 'là'],
        ['infinitive', 'gerund', 'đối chiếu'], ['participle', 'adjective', 'làm'], ['gerund', 'noun', 'làm'],

        ['phrase', 'noun-phrase', 'gồm'], ['phrase', 'verb-phrase', 'gồm'], ['phrase', 'prep-phrase', 'gồm'], ['phrase', 'clause', 'khác'],
        ['clause', 'subject', 'cần'], ['clause', 'verb', 'cần'], ['clause', 'independent', 'gồm'], ['clause', 'dependent', 'gồm'], ['sentence', 'clause', 'gồm'],
        ['dependent', 'relative-clause', 'gồm'], ['dependent', 'noun-clause', 'gồm'], ['dependent', 'adverbial-clause', 'gồm'],
        ['relative-clause', 'noun', 'bổ nghĩa'], ['relative-clause', 'pronoun', 'dùng who/which'], ['noun-clause', 'reported-speech', 'dùng trong'],
        ['reported-speech', 'tense', 'lùi thì'], ['reported-speech', 'pronoun', 'đổi'], ['noun-phrase', 'determiner', 'chứa'], ['noun-phrase', 'adjective', 'chứa'],

        ['sv-agreement', 'verb', 'ảnh hưởng'], ['sv-agreement', 'number', 'dựa vào'], ['sv-agreement', 'person', 'dựa vào'], ['sv-agreement', 'noun', 'với danh từ tập hợp'],
        ['parallelism', 'gerund', 'ví dụ'], ['parallelism', 'infinitive', 'ví dụ']
    ]
};
