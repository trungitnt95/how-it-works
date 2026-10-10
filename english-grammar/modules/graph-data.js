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

// Loại liên kết: kiểu nét + màu. 'sym' là quan hệ hai chiều (mũi tên ở cả hai đầu).
const grammarGraphLinkTypes = {
    req: { label: 'Bắt buộc', hint: 'A luôn phải có B', color: '#f0883e', dash: '', width: 1.5, both: false },
    opt: { label: 'Tùy chọn', hint: 'A có thể có B', color: '#e3b341', dash: '6 4', width: 1.5, both: false },
    is: { label: 'Phân loại / vai trò', hint: 'A là một dạng hoặc làm vai trò B', color: '#56d4dd', dash: '1.5 4', width: 1.9, both: false },
    sym: { label: 'Đối xứng / so sánh', hint: 'A và B đi cùng hoặc đối chiếu nhau', color: '#bc8cff', dash: '', width: 1, both: true }
};

const grammarGraphData = {
    nodes: [
        // Sentence parts
        { id: 'sentence', label: 'Sentence', vi: 'Câu', cat: 'sentence', topic: 'sentence-order', desc: 'Đơn vị ngữ pháp hoàn chỉnh, thường gồm chủ ngữ và vị ngữ, xếp theo thứ tự Chủ – Động – Tân. Ví dụ: <em>Tom (S) eats (V) rice (O).</em>' },
        { id: 'subject', label: 'Subject', vi: 'Chủ ngữ', cat: 'sentence', topic: 'sentence-order', desc: 'Người/vật thực hiện hành động hoặc được nói tới. Ví dụ: <em><b>She</b> reads.</em>' },
        { id: 'predicate', label: 'Predicate', vi: 'Vị ngữ', cat: 'sentence', desc: 'Phần còn lại của câu, nói về chủ ngữ; luôn chứa động từ. Ví dụ: <em>She <b>reads books</b>.</em>' },
        { id: 'object', label: 'Object', vi: 'Tân ngữ', cat: 'sentence', topic: 'direct-indirect-objects', desc: 'Người/vật chịu tác động của động từ. Ví dụ: <em>She reads <b>books</b>.</em>' },
        { id: 'direct-object', label: 'Direct object', vi: 'Tân ngữ trực tiếp', cat: 'sentence', topic: 'direct-indirect-objects', desc: 'Trả lời “cái gì/ai?”. Ví dụ: <em>I gave <b>a gift</b> to Tom.</em>' },
        { id: 'indirect-object', label: 'Indirect object', vi: 'Tân ngữ gián tiếp', cat: 'sentence', topic: 'direct-indirect-objects', desc: 'Người nhận. Ví dụ: <em>I gave <b>Tom</b> a gift.</em>' },
        { id: 'complement', label: 'Complement', vi: 'Bổ ngữ', cat: 'sentence', topic: 'subject-complement-object-complement', desc: 'Bổ sung nghĩa cho chủ ngữ/tân ngữ, đi sau linking verb. Ví dụ: <em>She is <b>a doctor</b>.</em>' },
        { id: 'adverbial', label: 'Adverbial', vi: 'Trạng ngữ (thành phần câu)', cat: 'sentence', topic: 'adverb-types-position', desc: '<b>Chức năng</b> trong câu: cho biết thời gian, nơi chốn, cách thức, lý do. Có thể là trạng từ, cụm giới từ hoặc mệnh đề. Phân loại theo ý nghĩa ở bảng dưới (bấm vào ví dụ để mở bài liên quan). Ví dụ: <em>She reads <b>at night</b> / <b>yesterday</b> / <b>when it rained</b>.</em>', table: {head: ["Loại", "Trả lời", "Ví dụ (từ · cụm · mệnh đề)"], rows: [["Thời gian", [["When?", null], ["yesterday · at night · when it rained", "adverbial-time-clauses"]]], ["Nơi chốn", [["Where?", null], ["here · in the garden · where he lives", null]]], ["Cách thức", [["How?", null], ["slowly · with care · as she was told", null]]], ["Lý do / mục đích", [["Why?", null], ["therefore · for safety · because it rained", null]]], ["Điều kiện", [["On what condition?", null], ["otherwise · in that case · if it rains", "conditionals"]]], ["Nhượng bộ", [["Despite what?", null], ["still · in spite of the rain · although it rained", null]]]]} },
        { id: 'sentence-type', label: 'Sentence types', vi: 'Loại câu', cat: 'sentence', topic: 'sentence-types', desc: 'Phân loại theo <b>chức năng</b>: câu trần thuật, nghi vấn, mệnh lệnh, cảm thán. Phân loại theo <b>cấu trúc</b> (đếm mệnh đề): simple (1 mệnh đề độc lập), compound (≥ 2 mệnh đề độc lập), complex (1 chính + ≥ 1 phụ), compound-complex (≥ 2 độc lập + ≥ 1 phụ).' },
        { id: 'statement', label: 'Statement', vi: 'Câu trần thuật', cat: 'sentence', topic: 'sentence-types', desc: 'Cung cấp thông tin. Ví dụ: <em>She reads every night.</em>' },
        { id: 'exclamation', label: 'Exclamation', vi: 'Câu cảm thán', cat: 'sentence', topic: 'exclamatory-sentences', desc: 'Bộc lộ cảm xúc mạnh bằng What + cụm danh từ hoặc How + tính từ/trạng từ. Ví dụ: <em>What a great idea! How nice!</em>' },
        { id: 'question', label: 'Question', vi: 'Câu hỏi', cat: 'sentence', topic: 'question-forms', desc: 'Đảo trợ động từ lên trước chủ ngữ. Ví dụ: <em><b>Do</b> you like tea?</em>' },
        { id: 'negation', label: 'Negation', vi: 'Phủ định', cat: 'sentence', topic: 'negatives', desc: 'Dùng <em>not</em> sau trợ động từ. Ví dụ: <em>She does <b>not</b> like tea.</em>' },
        { id: 'imperative', label: 'Imperative', vi: 'Câu mệnh lệnh', cat: 'sentence', topic: 'imperatives-requests', desc: 'Không có chủ ngữ nói ra. Ví dụ: <em>Close the door.</em>' },
        { id: 'expletive', label: 'Dummy subject (it/there)', vi: 'Chủ ngữ giả', cat: 'sentence', topic: 'existential-there', desc: 'Lấp chỗ chủ ngữ khi không có chủ thể rõ. Ví dụ: <em><b>There</b> is a cat. <b>It</b> rains.</em>' },

        // Word classes
        { id: 'noun', label: 'Noun', vi: 'Danh từ', cat: 'wordclass', topic: 'parts-of-speech', desc: 'Chỉ người, vật, nơi chốn, ý niệm. Ví dụ: <em>teacher, city, love.</em>' },
        { id: 'pronoun', label: 'Pronoun', vi: 'Đại từ', cat: 'wordclass', topic: 'pronouns-possessives', desc: 'Thay thế danh từ. Ví dụ: <em>he, she, it, they, mine.</em>' },
        { id: 'verb', label: 'Verb', vi: 'Động từ', cat: 'wordclass', topic: 'verbs-overview', desc: 'Chỉ hành động hoặc trạng thái. Ví dụ: <em>run, be, seem.</em>' },
        { id: 'adjective', label: 'Adjective', vi: 'Tính từ', cat: 'wordclass', topic: 'adjectives-adverbs', desc: 'Bổ nghĩa cho danh từ. Ví dụ: <em>a <b>red</b> car.</em>' },
        { id: 'adverb', label: 'Adverb', vi: 'Trạng từ (từ loại)', cat: 'wordclass', topic: 'adjectives-adverbs', desc: '<b>Từ loại</b>: bổ nghĩa cho động từ, tính từ, trạng từ khác. Ví dụ: <em>She sings <b>well</b>.</em>' },
        { id: 'manner-adverb', label: 'Manner adverb', vi: 'Trạng từ cách thức', cat: 'wordclass', topic: 'adverb-types-position', desc: 'Cho biết hành động diễn ra thế nào; đứng cuối câu hoặc sau tân ngữ. Ví dụ: <em>She spoke <b>clearly</b>.</em>' },
        { id: 'frequency-adverb', label: 'Frequency adverb', vi: 'Trạng từ tần suất', cat: 'wordclass', topic: 'adverb-types-position', desc: 'Đứng trước động từ thường, sau be. Ví dụ: <em>She <b>often</b> reads. She is <b>often</b> late.</em>' },
        { id: 'degree-adverb', label: 'Degree adverb', vi: 'Trạng từ mức độ', cat: 'wordclass', topic: 'adverb-types-position', desc: 'Đứng trước tính từ hoặc trạng từ để chỉ mức độ. Ví dụ: <em><b>very</b> good, <b>quite</b> slowly.</em>' },
        { id: 'linking-adverb', label: 'Linking adverb', vi: 'Trạng từ liên kết', cat: 'wordclass', topic: 'adverb-types-position', desc: 'Nối ý giữa các câu, đứng đầu hoặc giữa câu. Ví dụ: <em><b>However</b>, this failed.</em>' },
        { id: 'preposition', label: 'Preposition', vi: 'Giới từ', cat: 'wordclass', topic: 'prepositions', desc: 'Nối danh từ/đại từ với phần còn lại của câu. Ví dụ: <em>in, on, at, by.</em>' },
        { id: 'conjunction', label: 'Conjunction', vi: 'Liên từ', cat: 'wordclass', topic: 'conjunctions', desc: 'Nối từ, cụm, mệnh đề. Ví dụ: <em>and, but, because.</em>' },
        { id: 'coordinating', label: 'Coordinating conjunction', vi: 'Liên từ đẳng lập', cat: 'wordclass', topic: 'conjunctions', desc: 'for, and, nor, but, or, yet, so (FANBOYS): nối hai phần ngang hàng. Ví dụ: <em>I was tired, <b>but</b> I finished.</em>' },
        { id: 'subordinating', label: 'Subordinating conjunction', vi: 'Liên từ phụ thuộc', cat: 'wordclass', topic: 'conjunctions', desc: 'because, although, if, when, while, since…: mở đầu mệnh đề phụ thuộc. Ví dụ: <em><b>Although</b> he was late, he joined.</em>' },
        { id: 'correlative', label: 'Correlative conjunction', vi: 'Liên từ tương quan', cat: 'wordclass', topic: 'conjunctions', desc: 'Cặp liên từ both…and, either…or, neither…nor, not only…but also; hai vế phải cùng dạng. Ví dụ: <em>She likes <b>both</b> reading <b>and</b> writing.</em>' },
        { id: 'determiner', label: 'Determiner', vi: 'Từ hạn định', cat: 'wordclass', topic: 'articles-determiners', desc: 'Đứng trước danh từ để xác định. Ví dụ: <em>the, a, this, my, some.</em>' },
        { id: 'article', label: 'Article', vi: 'Mạo từ', cat: 'wordclass', topic: 'articles-determiners', desc: 'Loại từ hạn định: <em>a, an, the.</em>' },
        { id: 'quantifier', label: 'Quantifier', vi: 'Từ chỉ số lượng', cat: 'wordclass', topic: 'quantifiers', desc: 'Chỉ lượng. Ví dụ: <em>much, many, few, a little.</em>' },
        { id: 'possessive', label: 'Possessive', vi: 'Sở hữu', cat: 'wordclass', topic: 'pronouns-possessives', desc: 'Chỉ sự sở hữu. Ví dụ: <em>my book, the book is mine.</em>' },
        { id: 'reflexive', label: 'Reflexive pronoun', vi: 'Đại từ phản thân / tương hỗ', cat: 'wordclass', topic: 'reflexive-reciprocal', desc: 'Hành động quay lại chính chủ ngữ, hoặc qua lại giữa các bên. Ví dụ: <em>She taught <b>herself</b>. They help <b>each other</b>.</em>' },
        { id: 'indefinite', label: 'Indefinite pronoun', vi: 'Đại từ bất định', cat: 'wordclass', topic: 'indefinite-pronouns', desc: 'Ghép some/any/no/every với one/body/thing/where; chia động từ số ít. Ví dụ: <em><b>Everyone</b> is here. I saw <b>nothing</b>.</em>' },
        { id: 'demonstrative', label: 'Demonstrative', vi: 'Từ chỉ định', cat: 'wordclass', topic: 'demonstratives-deep', desc: 'this/that/these/those, phân theo khoảng cách và số lượng. Ví dụ: <em><b>This</b> is mine. <b>Those</b> books are old.</em>' },
        { id: 'relative-pronoun', label: 'Relative pronoun', vi: 'Đại từ quan hệ', cat: 'wordclass', topic: 'relative-pronouns-adverbs', desc: 'Mở đầu mệnh đề quan hệ: who, whom, whose, which, that. Ví dụ: <em>the man <b>who</b> called.</em>' },
        { id: 'interrogative-pronoun', label: 'Interrogative pronoun', vi: 'Đại từ nghi vấn', cat: 'wordclass', topic: 'wh-questions', desc: 'Từ để hỏi who, what, which làm chủ ngữ hoặc tân ngữ. Ví dụ: <em><b>Who</b> called? <b>What</b> do you want?</em>' },
        { id: 'countable', label: 'Countable / Uncountable', vi: 'Đếm được / không đếm được', cat: 'wordclass', topic: 'countable-uncountable', desc: 'Quyết định dùng <em>many/much</em>, <em>a/an</em>. Ví dụ: <em>an apple; some water.</em>' },
        { id: 'comparison', label: 'Comparison', vi: 'So sánh', cat: 'wordclass', topic: 'comparisons', desc: 'Dạng so sánh của tính từ/trạng từ. Ví dụ: <em>taller, the tallest.</em>' },

        // Verb system
        { id: 'tense', label: 'Tense & Aspect', vi: 'Thì & thể (tiếp diễn/hoàn thành)', cat: 'verb', topic: 'present-simple', desc: '<b>Thì</b> cho biết thời điểm của hành động (hiện tại, quá khứ, tương lai); <b>thể</b> cho biết cách nhìn hành động (đơn giản, đang diễn ra, đã hoàn tất, đã hoàn tất và kéo dài). Bảng dưới là 4 thời × 4 thể; bấm vào ô để mở bài tương ứng. Hàng <em>Future in the past</em> (dùng <em>would</em>, thường gặp trong câu gián tiếp) chưa có bài riêng.', table: {head: ["", "Simple", "Continuous", "Perfect", "Perfect continuous"], rows: [["Present", [["I work", "present-simple"], ["I am working", "present-continuous"], ["I have worked", "present-perfect"], ["I have been working", "present-perfect-continuous"]]], ["Past", [["I worked", "past-simple"], ["I was working", "past-continuous"], ["I had worked", "past-perfect"], ["I had been working", "past-perfect-continuous"]]], ["Future", [["I will work", "future-simple"], ["I will be working", "future-continuous"], ["I will have worked", "future-perfect"], ["I will have been working", "future-perfect-continuous"]]], ["Future in the past", [["I would work", null], ["I would be working", null], ["I would have worked", null], ["I would have been working", null]]]]} },
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
        { id: 'verb-phrase', label: 'Verb phrase', vi: 'Cụm động từ (chức năng)', cat: 'clause', topic: 'phrases-vs-clauses', desc: 'Trợ động từ + động từ chính. Ví dụ: <em>has been waiting.</em>' },
        { id: 'prep-phrase', label: 'Prepositional phrase', vi: 'Cụm giới từ', cat: 'clause', topic: 'prepositional-phrases', desc: 'Giới từ + tân ngữ. Ví dụ: <em>in the garden.</em>' },
        { id: 'clause', label: 'Clause', vi: 'Mệnh đề', cat: 'clause', topic: 'phrases-vs-clauses', desc: 'Nhóm từ có chủ ngữ và động từ chia thì. Ví dụ: <em>because she left.</em>' },
        { id: 'independent', label: 'Independent clause', vi: 'Mệnh đề độc lập', cat: 'clause', topic: 'phrases-vs-clauses', desc: 'Đứng một mình thành câu. Ví dụ: <em>I stayed.</em>' },
        { id: 'dependent', label: 'Dependent clause', vi: 'Mệnh đề phụ thuộc', cat: 'clause', topic: 'phrases-vs-clauses', desc: 'Không đứng một mình. Ví dụ: <em>…although it was late.</em>' },
        { id: 'relative-clause', label: 'Relative clause', vi: 'Mệnh đề quan hệ', cat: 'clause', topic: 'relative-clauses', desc: 'Bổ nghĩa cho danh từ. Ví dụ: <em>the man <b>who called</b>.</em>' },
        { id: 'noun-clause', label: 'Noun clause', vi: 'Mệnh đề danh từ', cat: 'clause', topic: 'noun-clauses', desc: 'Mệnh đề đóng vai danh từ: làm chủ ngữ, tân ngữ, bổ ngữ hoặc tân ngữ của giới từ. Có 4 loại, khác nhau ở từ mở đầu (bấm vào mẫu để mở bài liên quan); trật tự bên trong luôn là S + V. Ví dụ: <em>I know <b>that he left</b>.</em>', table: {head: ["Loại", "Mẫu", "Ví dụ"], rows: [["That-clause", [["that + S + V", null], ["I believe that he is honest.", null]]], ["Whether / if", [["whether / if + S + V", "embedded-questions"], ["I don't know whether she will come.", null]]], ["Wh-clause", [["what / where / why / how + S + V", "embedded-questions"], ["Tell me what you need.", null]]], ["Extraposition (It giả)", [["It + be + adj + that-clause", "dummy-it"], ["It is clear that he is right.", null]]]]} },
        { id: 'adverbial-clause', label: 'Adverbial clause', vi: 'Mệnh đề trạng ngữ', cat: 'clause', topic: 'adverbial-time-clauses', desc: 'Chỉ thời gian, lý do, điều kiện. Ví dụ: <em><b>When it rained</b>, we left.</em>' },
        { id: 'reported-speech', label: 'Reported speech', vi: 'Câu tường thuật', cat: 'clause', topic: 'reported-speech', desc: 'Ví dụ: <em>She said (that) she was tired.</em>' },

        // Agreement & rules
        { id: 'sv-agreement', label: 'Subject–verb agreement', vi: 'Hòa hợp chủ–vị', cat: 'agreement', topic: 'subject-verb-agreement', desc: 'Động từ khớp số với chủ ngữ. Ví dụ: <em>He <b>runs</b>; they <b>run</b>.</em>' },
        { id: 'number', label: 'Number', vi: 'Số (ít/nhiều)', cat: 'agreement', topic: 'nouns-plurals', desc: 'Số ít hoặc số nhiều. Danh từ số nhiều thường thêm -s/-es. Ví dụ: <em>cat → cats, box → boxes.</em>' },
        { id: 'pronoun-reference', label: 'Pronoun reference', vi: 'Quy chiếu đại từ', cat: 'agreement', topic: 'pronoun-reference', desc: 'Đại từ phải rõ thay cho danh từ nào.' },
        { id: 'parallelism', label: 'Parallel structure', vi: 'Cấu trúc song song', cat: 'agreement', topic: 'parallel-structure', desc: 'Ví dụ: <em>She likes <b>reading</b>, <b>writing</b>, and <b>swimming</b>.</em>' }
    ],
    links: [
        ['adverb', 'manner-adverb', 'gồm', 'is'], ['adverb', 'frequency-adverb', 'gồm', 'is'], ['adverb', 'degree-adverb', 'gồm', 'is'], ['adverb', 'linking-adverb', 'gồm', 'is'],
        ['manner-adverb', 'verb', 'đứng sau', 'opt'], ['frequency-adverb', 'verb', 'đứng trước động từ thường, sau be', 'opt'], ['degree-adverb', 'adjective', 'bổ nghĩa', 'opt'],
        ['conjunction', 'linking-adverb', 'đối chiếu', 'sym'],

        ['statement', 'subject', 'cần', 'req'], ['statement', 'predicate', 'cần', 'req'], ['statement', 'negation', 'có dạng phủ định', 'opt'], ['exclamation', 'subject', 'có thể có', 'opt'], ['exclamation', 'verb', 'có thể có', 'opt'], ['exclamation', 'noun-phrase', 'khung What +', 'opt'], ['exclamation', 'adjective', 'khung How +', 'opt'], ['exclamation', 'adverb', 'khung How +', 'opt'],
        ['imperative', 'predicate', 'chỉ có', 'req'], ['imperative', 'verb', 'dùng V nguyên mẫu', 'req'], ['imperative', 'negation', 'phủ định bằng Don\'t', 'opt'], ['imperative', 'modal', 'đề nghị lịch sự', 'opt'],
        ['pronoun', 'reflexive', 'gồm', 'is'], ['pronoun', 'indefinite', 'gồm', 'is'], ['pronoun', 'demonstrative', 'gồm', 'is'], ['pronoun', 'relative-pronoun', 'gồm', 'is'], ['pronoun', 'interrogative-pronoun', 'gồm', 'is'],
        ['indefinite', 'sv-agreement', 'chia số ít', 'req'], ['indefinite', 'quantifier', 'ghép từ', 'opt'], ['demonstrative', 'determiner', 'cũng là', 'is'], ['question', 'interrogative-pronoun', 'có thể mở đầu bằng', 'opt'],

        
        ['sentence', 'sentence-type', 'phân loại', 'is'], ['sentence-type', 'question', 'gồm', 'is'], ['sentence-type', 'imperative', 'gồm', 'is'], ['sentence-type', 'statement', 'gồm', 'is'], ['sentence-type', 'exclamation', 'gồm', 'is'],
        ['question', 'auxiliary', 'đảo lên trước chủ ngữ', 'req'], ['question', 'subject', 'đứng sau trợ động từ', 'req'], ['question', 'verb', 'cần', 'req'], ['negation', 'auxiliary', 'dùng', 'req'], ['imperative', 'subject', 'ẩn (you)', 'opt'],
        ['expletive', 'subject', 'đóng vai', 'is'],

        ['subject', 'noun', 'là', 'is'], ['subject', 'pronoun', 'là', 'is'], ['subject', 'noun-phrase', 'là', 'is'], ['subject', 'noun-clause', 'là', 'is'],
        ['subject', 'verb', 'hòa hợp với', 'req'], ['subject', 'sv-agreement', 'quy tắc', 'req'], ['subject', 'gerund', 'là', 'is'],
        ['predicate', 'verb', 'chứa', 'req'], ['predicate', 'object', 'có thể có', 'opt'], ['predicate', 'complement', 'có thể có', 'opt'], ['predicate', 'adverbial', 'có thể có', 'opt'],
        ['object', 'direct-object', 'gồm', 'is'], ['object', 'indirect-object', 'gồm', 'is'], ['object', 'noun', 'là', 'is'], ['object', 'pronoun', 'là', 'is'],
        ['object', 'noun-phrase', 'là', 'is'], ['object', 'noun-clause', 'là', 'is'], ['object', 'gerund', 'là', 'is'],
        ['transitive', 'object', 'cần', 'req'], ['linking', 'complement', 'cần', 'req'],
        ['complement', 'adjective', 'là', 'is'], ['complement', 'noun', 'là', 'is'], ['complement', 'noun-phrase', 'là', 'is'], ['complement', 'noun-clause', 'là', 'is'],
        ['adverbial', 'adverb', 'là', 'is'], ['adverbial', 'prep-phrase', 'là', 'is'], ['adverbial', 'adverbial-clause', 'là', 'is'],

        ['noun', 'countable', 'phân loại', 'is'], ['noun', 'determiner', 'đi với', 'sym'], ['noun', 'adjective', 'được bổ nghĩa bởi', 'opt'],
        ['noun', 'noun-phrase', 'lõi của', 'req'], ['noun', 'number', 'có', 'req'], ['countable', 'quantifier', 'chọn', 'opt'], ['determiner', 'article', 'gồm', 'is'],
        ['determiner', 'quantifier', 'gồm', 'is'], ['determiner', 'possessive', 'gồm', 'is'],
        ['pronoun', 'noun', 'thay thế', 'req'], ['pronoun', 'possessive', 'có dạng', 'is'],
        ['pronoun', 'pronoun-reference', 'cần', 'req'],
        ['verb', 'tense', 'chia', 'req'], ['verb', 'transitive', 'gồm', 'is'], ['verb', 'intransitive', 'gồm', 'is'], ['verb', 'linking', 'gồm', 'is'], ['verb', 'stative', 'gồm', 'is'],
        ['verb', 'auxiliary', 'đi với', 'sym'], ['verb', 'modal', 'đi với', 'sym'], ['verb', 'verb-phrase', 'lõi của', 'req'], ['verb', 'adverb', 'được bổ nghĩa bởi', 'opt'],
        ['verb', 'phrasal-verb', 'tạo', 'opt'], ['verb', 'voice', 'có', 'req'], ['verb', 'mood', 'có', 'req'], ['verb', 'infinitive', 'dạng', 'is'], ['verb', 'gerund', 'dạng', 'is'], ['verb', 'participle', 'dạng', 'is'],
        ['adjective', 'adverb', 'chuyển thành', 'opt'], ['adjective', 'comparison', 'có', 'opt'], ['adverb', 'comparison', 'có', 'opt'],
        ['preposition', 'prep-phrase', 'tạo', 'opt'], ['preposition', 'noun', 'đi với', 'sym'], ['preposition', 'phrasal-verb', 'trong', 'opt'],
        ['preposition', 'noun-phrase', 'theo sau là', 'is'], ['preposition', 'noun-clause', 'theo sau là', 'is'], ['preposition', 'gerund', 'theo sau là', 'is'],
        ['conjunction', 'coordinating', 'gồm', 'is'], ['conjunction', 'subordinating', 'gồm', 'is'], ['conjunction', 'correlative', 'gồm', 'is'],
        ['coordinating', 'independent', 'nối', 'req'], ['subordinating', 'dependent', 'mở đầu', 'req'], ['subordinating', 'adverbial-clause', 'mở đầu', 'opt'], ['correlative', 'parallelism', 'đòi hỏi', 'req'],

        ['tense', 'auxiliary', 'tạo bởi', 'opt'], ['tense', 'participle', 'dùng', 'opt'], ['tense', 'stative', 'hạn chế', 'opt'],
        ['modal', 'auxiliary', 'là', 'is'], ['modal', 'infinitive', 'theo sau', 'req'], ['voice', 'auxiliary', 'dùng be', 'req'], ['voice', 'participle', 'dùng V3', 'req'], ['voice', 'transitive', 'cần', 'req'],
        ['mood', 'conditional', 'dùng trong', 'opt'], ['conditional', 'tense', 'phối hợp', 'req'], ['conditional', 'modal', 'dùng', 'opt'], ['conditional', 'adverbial-clause', 'là', 'is'],
        ['infinitive', 'gerund', 'đối chiếu', 'sym'], ['participle', 'adjective', 'làm', 'is'], ['gerund', 'noun', 'làm', 'is'],

        ['phrase', 'noun-phrase', 'gồm', 'is'], ['phrase', 'verb-phrase', 'gồm', 'is'], ['phrase', 'prep-phrase', 'gồm', 'is'], ['phrase', 'clause', 'khác', 'sym'],
        ['clause', 'subject', 'thường có', 'opt'], ['clause', 'verb', 'cần', 'req'], ['clause', 'independent', 'gồm', 'is'], ['clause', 'dependent', 'gồm', 'is'], ['sentence', 'clause', 'cấu tạo gồm ≥ 1', 'req'],
        ['dependent', 'relative-clause', 'gồm', 'is'], ['dependent', 'noun-clause', 'gồm', 'is'], ['dependent', 'adverbial-clause', 'gồm', 'is'],
        ['relative-clause', 'noun', 'bổ nghĩa', 'req'], ['relative-clause', 'relative-pronoun', 'mở đầu bằng', 'req'], ['noun-clause', 'reported-speech', 'dùng trong', 'opt'],
        ['reported-speech', 'tense', 'lùi thì', 'opt'], ['reported-speech', 'pronoun', 'đổi', 'opt'], ['noun-phrase', 'determiner', 'chứa', 'opt'], ['noun-phrase', 'adjective', 'chứa', 'opt'],

        ['sv-agreement', 'verb', 'ảnh hưởng', 'req'], ['sv-agreement', 'number', 'dựa vào', 'req'], ['sv-agreement', 'noun', 'với danh từ tập hợp', 'opt'],
        ['parallelism', 'comparison', 'áp dụng với than/as', 'opt']
    ]
};
