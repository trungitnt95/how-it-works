// English Grammar learning tracks and book-aligned reference data
(function() {
    const ex = (en, vi) => ({ en, vi });
    const q = (prompt, answer, explanation) => ({ prompt, answer, explanation });

    window.grammarTracks = [
        {
            id: 'foundations',
            number: 'Track 1',
            icon: '🧱',
            title: 'Nền tảng câu',
            summary: 'Dựng câu đúng lõi trước khi đi sang thì, mệnh đề và cấu trúc khó.',
            goal: 'Viết được câu rõ Subject, Verb, Object và không lẫn vai trò từ.'
        },
        {
            id: 'tenses',
            number: 'Track 2',
            icon: '⏰',
            title: '12 thì + Near Future',
            summary: 'Học hệ thì theo logic mốc thời gian, hoàn tất, kéo dài và dự định gần.',
            goal: 'Chọn đúng thì theo bối cảnh thay vì học mẹo rời rạc.'
        },
        {
            id: 'noun-system',
            number: 'Track 3',
            icon: '📚',
            title: 'Danh từ, đại từ, mạo từ, số từ',
            summary: 'Nhóm kiến thức kéo theo nhiều lỗi dây chuyền nhất trong viết và nói.',
            goal: 'Nhìn danh từ là biết article, quantifier và verb đi kèm.'
        },
        {
            id: 'word-classes',
            number: 'Track 4',
            icon: '🎨',
            title: 'Tính từ, trạng từ, so sánh, word form',
            summary: 'Sửa câu tự nhiên hơn bằng đúng từ loại và đúng mức độ nhấn nghĩa.',
            goal: 'Không còn nhầm adjective/adverb và chọn đúng dạng từ theo vị trí.'
        },
        {
            id: 'clauses',
            number: 'Track 5',
            icon: '🧩',
            title: 'Liên từ, mệnh đề, câu phức',
            summary: 'Biến nhiều câu ngắn thành câu dài rõ logic, đúng linker và đúng quan hệ ý.',
            goal: 'Nối ý mượt bằng conjunctions, clauses và relative structures.'
        },
        {
            id: 'advanced',
            number: 'Track 6',
            icon: '🏗️',
            title: 'Cấu trúc nâng cao và sửa lỗi',
            summary: 'Nhóm cấu trúc hay gặp trong thi cử, writing và phần chữa lỗi câu.',
            goal: 'Kiểm soát modal, conditionals, passive và các lỗi sửa câu điển hình.'
        },
        {
            id: 'pronunciation',
            number: 'Track 7',
            icon: '🗣️',
            title: 'IPA + công cụ tra cứu',
            summary: 'Đọc phiên âm, sửa âm khó và dùng bảng động từ để học chắc hơn.',
            goal: 'Không còn đoán mò cách phát âm và dạng động từ cơ bản.'
        }
    ];

    window.referenceAtlas = [
        {
            icon: '🧭',
            title: 'Tense Compass',
            accent: 'ink',
            bullets: [
                'Simple: sự thật, thói quen, quyết định, sự kiện hoàn tất.',
                'Continuous: hành động đang diễn ra, tạm thời, có bối cảnh thời điểm.',
                'Perfect: hoàn tất trước một mốc và thường còn liên hệ tới mốc đó.',
                'Perfect Continuous: nhấn độ dài của hành động kéo tới mốc.'
            ]
        },
        {
            icon: '🪢',
            title: 'Clause Builder',
            accent: 'blue',
            bullets: [
                'Independent clause đứng được một mình thành câu.',
                'Noun clause đóng vai trò danh từ.',
                'Relative clause bổ nghĩa cho danh từ đứng trước.',
                'Adverbial clause cho thời gian, nguyên nhân, điều kiện, kết quả.'
            ]
        },
        {
            icon: '📰',
            title: 'Noun System Map',
            accent: 'amber',
            bullets: [
                'Đếm được số ít: thường phải có determiner.',
                'Đếm được số nhiều: kiểm tra plural form và verb agreement.',
                'Không đếm được: tránh thêm -s và chọn quantifier phù hợp.',
                'Article, pronoun và numeral đều bám vào cách bạn nhìn danh từ.'
            ]
        },
        {
            icon: '🛠️',
            title: 'Editing Rescue',
            accent: 'rust',
            bullets: [
                'Rà theo thứ tự: verb forms -> noun/article -> linker -> punctuation.',
                'Tách mệnh đề chính trước rồi mới sửa clause phụ.',
                'Nếu câu quá dài, kiểm tra fragment, run-on và modifier.',
                'Sai nhỏ lặp lại thường đến từ một nhóm lỗi, không phải từng câu riêng lẻ.'
            ]
        }
    ];

    window.ipaReference = [
        {
            title: 'Nguyên âm ngắn và dài',
            rows: [
                ['/i:/ vs /ɪ/', 'sheep vs ship'],
                ['/u:/ vs /ʊ/', 'food vs good'],
                ['/ɑ:/ vs /ʌ/', 'car vs cup'],
                ['/ɔ:/ vs /ɒ/', 'law vs hot']
            ]
        },
        {
            title: 'Âm dễ nhầm với người Việt',
            rows: [
                ['/θ/ vs /t/', 'think vs tink'],
                ['/ð/ vs /d/', 'this vs dis'],
                ['/ʃ/ vs /s/', 'she vs see'],
                ['/tʃ/ vs /tr/', 'cheap vs trip']
            ]
        },
        {
            title: 'Trọng âm và schwa',
            rows: [
                ['Danh từ 2 âm tiết', 'thường nhấn âm 1: TAble, DOCtor'],
                ['Động từ 2 âm tiết', 'thường nhấn âm 2: reLAX, arRIVE'],
                ['Schwa /ə/', 'âm yếu trong about, support, teacher'],
                ['Sentence stress', 'nhấn content words mạnh hơn function words']
            ]
        }
    ];

    window.bookCoverage = [
        { section: '1. The Simple Present Tense', topicId: 'present-simple', evidence: 'TOC pages 5-6' },
        { section: '2. The Present Continuous Tense', topicId: 'present-continuous', evidence: 'TOC pages 6-7' },
        { section: '3. The Present Perfect Tense', topicId: 'present-perfect', evidence: 'TOC pages 6-7' },
        { section: '4. The Present Perfect Continuous Tense', topicId: 'present-perfect-continuous', evidence: 'TOC pages 6-7' },
        { section: '5. The Simple Past Tense', topicId: 'past-simple', evidence: 'TOC pages 8-9' },
        { section: '6. The Past Continuous Tense', topicId: 'past-continuous', evidence: 'TOC pages 8-9' },
        { section: '7. The Past Perfect Tense', topicId: 'past-perfect', evidence: 'TOC pages 8-9' },
        { section: '8. The Past Perfect Continuous Tense', topicId: 'past-perfect-continuous', evidence: 'TOC pages 10-11' },
        { section: '9. The Simple Future Tense', topicId: 'future-simple', evidence: 'TOC pages 10-11' },
        { section: '10. Near Future', topicId: 'near-future', evidence: 'TOC pages 10-11' },
        { section: '11. The Future Continuous Tense', topicId: 'future-continuous', evidence: 'TOC pages 10-11' },
        { section: '12. The Future Perfect Tense', topicId: 'future-perfect', evidence: 'TOC pages 10-11' },
        { section: '13. The Future Perfect Continuous Tense', topicId: 'future-perfect-continuous', evidence: 'TOC pages 10-11' },
        { section: 'Sequence of Tenses', topicId: 'sequence-of-tenses', evidence: 'pages 18-21' },
        { section: 'Adverbial Clause of Time', topicId: 'adverbial-time-clauses', evidence: 'page 19 sample' },
        { section: 'Nouns and Plural Forms', topicId: 'nouns-plurals', evidence: 'page 40 sample' },
        { section: 'Subject and Verb Agreement', topicId: 'subject-verb-agreement', evidence: 'page 40 sample' },
        { section: 'Relative Pronouns / Relative Adverbs', topicId: 'relative-pronouns-adverbs', evidence: 'pages 54-55 sample' },
        { section: 'Adverbs and Inversion after Adverbs', topicId: 'adverbs', evidence: 'page 50 sample' },
        { section: 'Numerals', topicId: 'numerals', evidence: 'page 60 sample' },
        { section: 'Articles', topicId: 'articles', evidence: 'pages 134-135 sample' },
        { section: 'Conjunctions', topicId: 'conjunctions', evidence: 'answer key pages 100-110 OCR' },
        { section: 'Phrases and Clauses of Result', topicId: 'result-structures', evidence: 'pages 20-21 sample' },
        { section: 'Word Form', topicId: 'word-form', evidence: 'answer key pages 100-110 OCR' },
        { section: 'Pronouns', topicId: 'pronouns', evidence: 'book scope alignment' },
        { section: 'Adjectives', topicId: 'adjectives', evidence: 'book scope alignment' }
    ];

    window.grammarTopics = [
        {
            id: 'sentence-order',
            title: 'Trật Tự Câu',
            icon: '🧱',
            level: 'beginner',
            track: 'foundations',
            trackOrder: 1,
            bookSection: 'Hệ câu nền',
            bookLabel: 'Câu cơ bản và khung S + V + O',
            pitfallFocus: 'Trợ động từ',
            keywords: ['sentence order', 'subject verb object', 'word order', 'trật tự câu'],
            summary: 'Câu tiếng Anh ưu tiên lõi Subject + Verb rồi mới đến object, manner, place, time.',
            whenToUse: [
                'Dùng để dựng câu mới từ đầu mà không dịch từng chữ từ tiếng Việt.',
                'Dùng khi câu dài bị rối và bạn cần tìm lại lõi chính.',
                'Dùng như khung sửa nhanh trước khi kiểm tra thì hoặc liên từ.'
            ],
            formula: [
                'Khung phổ biến: Subject + Verb + Object + Manner + Place + Time.',
                'Với động từ nối: Subject + be/linking verb + Complement.',
                'Nếu là câu hỏi, trợ động từ thường đứng trước Subject.'
            ],
            signals: [
                'Trạng từ tần suất thường đứng trước động từ thường nhưng sau be.',
                'Thông tin phụ như nơi chốn, thời gian thường đi sau lõi câu.',
                'Khi đưa cụm lên đầu câu để nhấn, lõi ngữ pháp phía sau vẫn phải đầy đủ.'
            ],
            examples: [
                ex('Lan reads English books at the library every evening.', 'Lan đọc sách tiếng Anh ở thư viện vào mỗi buổi tối.'),
                ex('In the corner stood an old piano.', 'Ở góc phòng có một cây đàn piano cũ đứng đó.')
            ],
            pitfalls: [
                'Đặt thời gian hoặc nơi chốn chen giữa Subject và Verb làm câu nghe rất “dịch”.',
                'Quên rằng tiếng Anh cần verb rõ ràng; chỉ ghép cụm danh từ với trạng từ là chưa thành câu.'
            ],
            practice: [
                q('Sắp xếp lại: every day / coffee / drinks / she / at work', 'She drinks coffee at work every day.', 'Giữ lõi Subject + Verb + Object trước, rồi thêm time.'),
                q('Điền phần còn thiếu: My brother ____ very tired after class.', 'is', 'Với linking verb be, complement đứng sau.')
            ],
            connections: ['question-negative-forms', 'subject-verb-agreement', 'phrases-vs-clauses'],
            checkpoint: [
                'Tôi tìm được Subject và Verb chính trong một câu.',
                'Tôi biết đưa thông tin phụ xuống sau lõi câu.'
            ]
        },
        {
            id: 'parts-of-speech',
            title: 'Từ Loại',
            icon: '🔤',
            level: 'beginner',
            track: 'foundations',
            trackOrder: 2,
            bookSection: 'Hệ câu nền',
            bookLabel: 'Word classes / Parts of speech',
            pitfallFocus: 'Từ loại',
            keywords: ['parts of speech', 'noun verb adjective adverb', 'word class'],
            summary: 'Muốn đặt từ đúng chỗ, bạn phải biết từ đó đang làm chức năng danh từ, động từ, tính từ hay trạng từ.',
            whenToUse: [
                'Dùng khi sửa lỗi word form hoặc adjective/adverb.',
                'Dùng khi đoán từ cần điền trong bài tập viết lại câu.',
                'Dùng để học từ theo “gia đình từ” thay vì học rời từng mặt chữ.'
            ],
            formula: [
                'Noun trả lời ai/cái gì.',
                'Verb trả lời làm gì / ở trạng thái nào.',
                'Adjective bổ nghĩa cho noun; adverb bổ nghĩa cho verb, adjective hoặc cả câu.'
            ],
            signals: [
                'Đuôi -tion, -ment, -ness thường là noun.',
                'Đuôi -ful, -ous, -able, -ive thường là adjective.',
                'Đuôi -ly thường là adverb nhưng có ngoại lệ như friendly, lovely.'
            ],
            examples: [
                ex('beauty -> beautiful -> beautifully', 'beauty là noun, beautiful là adjective, beautifully là adverb.'),
                ex('The plan was successful, and they executed it successfully.', 'successful bổ nghĩa cho plan; successfully bổ nghĩa cho executed.')
            ],
            pitfalls: [
                'Thấy từ có -ly rồi mặc định là adverb sẽ sai với lively, lonely, friendly.',
                'Trong writing, câu nghe “gần đúng” nhưng vẫn sai nếu sai từ loại đúng vị trí.'
            ],
            practice: [
                q('Điền dạng đúng: She gave a very ____ presentation. (impress)', 'impressive', 'Trước noun presentation cần adjective.'),
                q('Điền dạng đúng: The team worked ____ to finish on time. (careful)', 'carefully', 'Bổ nghĩa cho worked nên dùng adverb.')
            ],
            connections: ['word-form', 'adjectives', 'adverbs'],
            checkpoint: [
                'Tôi xác định được từ cần là noun, adjective hay adverb theo vị trí.',
                'Tôi học từ mới theo cặp/cụm thay vì chỉ học một dạng.'
            ]
        },
        {
            id: 'question-negative-forms',
            title: 'Câu Hỏi & Phủ Định',
            icon: '❓',
            level: 'beginner',
            track: 'foundations',
            trackOrder: 3,
            bookSection: 'Hệ câu nền',
            bookLabel: 'Interrogative and negative forms',
            pitfallFocus: 'Trợ động từ',
            keywords: ['questions', 'negatives', 'do does did', 'auxiliary'],
            summary: 'Đừng chỉ thêm dấu hỏi hay chữ not; hãy chọn đúng trợ động từ theo be, do hoặc modal.',
            whenToUse: [
                'Dùng khi đổi câu khẳng định sang hỏi hoặc phủ định.',
                'Dùng khi viết câu với hiện tại đơn, quá khứ đơn, be hoặc modal verbs.',
                'Dùng khi kiểm tra lỗi “Did you went?” hoặc “She not like”.'
            ],
            formula: [
                'Be: be + subject + complement? / subject + be not + complement.',
                'Verb thường: Do/Does/Did + subject + V? / subject + do not + V.',
                'Modal: modal + subject + V? / subject + modal not + V.'
            ],
            signals: [
                'Có be thì không mượn do/does/did.',
                'Có modal thì verb sau luôn là bare infinitive.',
                'Sau does/did, động từ chính quay về nguyên mẫu.'
            ],
            examples: [
                ex('Does she like tea?', 'Cô ấy có thích trà không?'),
                ex('They cannot join us today.', 'Hôm nay họ không thể tham gia cùng chúng ta.')
            ],
            pitfalls: [
                'Dùng double marking: Did you went, Does she likes.',
                'Thêm not sai vị trí trong câu có be hoặc modal.'
            ],
            practice: [
                q('Đổi sang câu hỏi: He works on Saturdays.', 'Does he work on Saturdays?', 'Hiện tại đơn với he dùng does, verb về work.'),
                q('Đổi sang phủ định: They are ready.', 'They are not ready.', 'Có be thì thêm not ngay sau be.')
            ],
            connections: ['present-simple', 'past-simple', 'modal-verbs'],
            checkpoint: [
                'Tôi biết khi nào dùng be, do/does/did hoặc modal để hỏi/phủ định.',
                'Tôi không còn chia verb hai lần trong một câu hỏi.'
            ]
        },
        {
            id: 'subject-verb-agreement',
            title: 'Subject-Verb Agreement',
            icon: '⚖️',
            level: 'intermediate',
            track: 'foundations',
            trackOrder: 4,
            bookSection: 'Hệ câu nền',
            bookLabel: 'Subject and Verb Agreement',
            pitfallFocus: 'Chia động từ',
            keywords: ['subject verb agreement', 'singular plural', 'agreement'],
            summary: 'Verb phải khớp với chủ ngữ thật, không khớp với từ đứng gần nó nhất.',
            whenToUse: [
                'Dùng khi chủ ngữ dài, có of-phrase, relative clause hoặc cụm chen giữa.',
                'Dùng khi gặp either/or, neither/nor, each, every, a number of.',
                'Dùng khi noun số nhiều trông như số ít hoặc ngược lại.'
            ],
            formula: [
                'Tìm head noun của subject trước rồi mới chia verb.',
                'Each/every + singular noun thường đi với singular verb.',
                'Either...or / neither...nor thường chia theo danh từ gần verb nhất.'
            ],
            signals: [
                'The list of items is... vì head noun là list.',
                'A number of students are... nhưng The number of students is...',
                'News, mathematics, politics thường có hình thức số nhiều nhưng hay dùng verb số ít trong nghĩa môn học/tin tức.'
            ],
            examples: [
                ex('The quality of the answers is improving.', 'Chất lượng câu trả lời đang cải thiện.'),
                ex('Neither the teacher nor the students were ready.', 'Cả giáo viên lẫn học sinh đều chưa sẵn sàng.')
            ],
            pitfalls: [
                'Để noun gần verb đánh lừa, nhất là trong cụm of hoặc mệnh đề quan hệ.',
                'Nhìn thấy -s là mặc định plural, trong khi news và mathematics thường không như vậy.'
            ],
            practice: [
                q('Điền verb đúng: The list of books ____ on the desk. (be)', 'is', 'Head noun là list, không phải books.'),
                q('Điền verb đúng: A number of students ____ absent today. (be)', 'are', 'A number of + plural noun dùng plural verb.')
            ],
            connections: ['present-simple', 'nouns-plurals', 'articles'],
            checkpoint: [
                'Tôi biết bỏ qua cụm chen giữa để tìm chủ ngữ thật.',
                'Tôi phân biệt được a number of và the number of.'
            ]
        },
        {
            id: 'phrases-vs-clauses',
            title: 'Phrase vs Clause',
            icon: '🧬',
            level: 'intermediate',
            track: 'foundations',
            trackOrder: 5,
            bookSection: 'Hệ câu nền',
            bookLabel: 'Phrase, clause and sentence core',
            pitfallFocus: 'Liên từ & mệnh đề',
            keywords: ['phrase', 'clause', 'independent clause', 'dependent clause'],
            summary: 'Phrase không có cặp subject-verb hoàn chỉnh; clause thì có.',
            whenToUse: [
                'Dùng khi phân tích câu dài để biết đâu là phần chính, đâu là phần phụ.',
                'Dùng khi sửa fragment hoặc chọn liên từ cho đúng.',
                'Dùng để hiểu vì sao một cụm chưa đủ thành câu hoàn chỉnh.'
            ],
            formula: [
                'Phrase: một nhóm từ không có cặp subject-verb hoàn chỉnh.',
                'Independent clause: có subject + verb và đứng một mình được.',
                'Dependent clause: có subject + verb nhưng cần clause chính.'
            ],
            signals: [
                'Because she was late là clause phụ; after the meeting là phrase.',
                'Relative clause thường bắt đầu bằng who, which, that, where, when.',
                'Noun clause có thể đứng ở vị trí subject hoặc object.'
            ],
            examples: [
                ex('After the meeting, we sent the report.', 'After the meeting là phrase; we sent the report là independent clause.'),
                ex('Because she was tired, she went home early.', 'Because she was tired là dependent clause.')
            ],
            pitfalls: [
                'Nhầm phrase với clause rồi gắn sai dấu phẩy hoặc sai liên từ.',
                'Viết dependent clause xong tưởng đã đủ thành câu.'
            ],
            practice: [
                q('Xác định loại: "when the class ended"', 'dependent clause', 'Có subject + verb nhưng cần mệnh đề chính để hoàn chỉnh.'),
                q('Xác định loại: "in the morning"', 'phrase', 'Không có cặp subject-verb hoàn chỉnh.')
            ],
            connections: ['conjunctions', 'adverbial-time-clauses', 'sentence-repair'],
            checkpoint: [
                'Tôi nhìn câu dài và nhận ra đâu là clause chính.',
                'Tôi phân biệt được phrase với dependent clause.'
            ]
        },
        {
            id: 'present-simple',
            title: 'Present Simple',
            icon: '📅',
            level: 'beginner',
            track: 'tenses',
            trackOrder: 1,
            bookSection: 'Hệ thì',
            bookLabel: '1. The Simple Present Tense',
            pitfallFocus: 'Mốc thời gian',
            keywords: ['present simple', 'habit', 'fact', 's/es'],
            summary: 'Dùng cho thói quen, sự thật, lịch trình cố định và trạng thái ổn định.',
            whenToUse: [
                'Nói về thói quen lặp lại.',
                'Nói về sự thật, chân lý, quy tắc chung.',
                'Nói về lịch trình cố định như giờ tàu, giờ học.'
            ],
            formula: [
                'Khẳng định: I/You/We/They + V; He/She/It + V(s/es).',
                'Phủ định: do/does not + V.',
                'Nghi vấn: Do/Does + subject + V?'
            ],
            signals: [
                'always, usually, often, sometimes, never',
                'every day, on Mondays, twice a week',
                'stative verbs như know, like, believe, belong'
            ],
            examples: [
                ex('She goes to work by bus every day.', 'Cô ấy đi làm bằng xe buýt mỗi ngày.'),
                ex('The train leaves at 6 tomorrow morning.', 'Tàu rời ga lúc 6 giờ sáng mai.')
            ],
            pitfalls: [
                'Quên thêm -s/-es với ngôi thứ ba số ít.',
                'Dùng hiện tại tiếp diễn cho thói quen lâu dài mà không có ngữ cảnh đặc biệt.'
            ],
            practice: [
                q('Điền dạng đúng: My father ____ coffee every morning. (drink)', 'drinks', 'Ngôi thứ ba số ít ở hiện tại đơn thêm -s.'),
                q('Sửa lỗi: Does she likes English?', 'Does she like English?', 'Sau does, động từ quay về nguyên mẫu.')
            ],
            connections: ['present-continuous', 'subject-verb-agreement', 'question-negative-forms'],
            checkpoint: [
                'Tôi phân biệt được thói quen/sự thật với việc đang diễn ra.',
                'Tôi không quên -s/-es và không chia hai lần sau does.'
            ]
        },
        {
            id: 'present-continuous',
            title: 'Present Continuous',
            icon: '🎬',
            level: 'intermediate',
            track: 'tenses',
            trackOrder: 2,
            bookSection: 'Hệ thì',
            bookLabel: '2. The Present Continuous Tense',
            pitfallFocus: 'Mốc thời gian',
            keywords: ['present continuous', 'am is are v-ing', 'now'],
            summary: 'Dùng cho hành động đang diễn ra quanh thời điểm nói, tình huống tạm thời và kế hoạch gần.',
            whenToUse: [
                'Việc đang diễn ra ngay lúc nói hoặc quanh hiện tại.',
                'Tình huống tạm thời, thay đổi dần, xu hướng hiện tại.',
                'Kế hoạch gần đã sắp xếp.'
            ],
            formula: [
                'Khẳng định: subject + am/is/are + V-ing.',
                'Phủ định: subject + am/is/are not + V-ing.',
                'Nghi vấn: Am/Is/Are + subject + V-ing?'
            ],
            signals: [
                'now, right now, at the moment',
                'today, this week, these days',
                'look, listen, currently'
            ],
            examples: [
                ex('I am studying for my exam this week.', 'Tuần này tôi đang ôn thi.'),
                ex('We are meeting the client tomorrow afternoon.', 'Chiều mai chúng tôi sẽ gặp khách hàng.')
            ],
            pitfalls: [
                'Dùng với stative verbs như know, understand, belong trong ngữ cảnh bình thường.',
                'Nhầm với present simple khi nói thói quen lâu dài.'
            ],
            practice: [
                q('Điền dạng đúng: Listen! The baby ____ . (cry)', 'is crying', 'Có tín hiệu listen và hành động đang diễn ra.'),
                q('Sửa lỗi: I am knowing the answer.', 'I know the answer.', 'know là stative verb, thường không dùng tiếp diễn.')
            ],
            connections: ['present-simple', 'near-future', 'present-perfect'],
            checkpoint: [
                'Tôi nhận ra tín hiệu “đang diễn ra” và “tạm thời”.',
                'Tôi tránh dùng tiếp diễn với stative verbs quen thuộc.'
            ]
        },
        {
            id: 'present-perfect',
            title: 'Present Perfect',
            icon: '🔗',
            level: 'intermediate',
            track: 'tenses',
            trackOrder: 3,
            bookSection: 'Hệ thì',
            bookLabel: '3. The Present Perfect Tense',
            pitfallFocus: 'Mốc thời gian',
            keywords: ['present perfect', 'have has v3', 'since for already yet'],
            summary: 'Dùng khi hành động đã xảy ra nhưng còn liên hệ tới hiện tại hoặc khi không muốn nêu rõ thời điểm quá khứ.',
            whenToUse: [
                'Kinh nghiệm cho tới hiện tại.',
                'Việc vừa hoàn tất và kết quả còn hiện rõ.',
                'Trạng thái/hành động bắt đầu trong quá khứ và kéo tới hiện tại.'
            ],
            formula: [
                'Khẳng định: subject + have/has + V3.',
                'Phủ định: subject + have/has not + V3.',
                'Nghi vấn: Have/Has + subject + V3?'
            ],
            signals: [
                'already, just, yet, recently, lately',
                'ever, never',
                'since, for, so far, up to now'
            ],
            examples: [
                ex('She has just finished her homework.', 'Cô ấy vừa mới xong bài tập.'),
                ex('They have lived here for ten years.', 'Họ đã sống ở đây được mười năm.')
            ],
            pitfalls: [
                'Dùng với mốc thời gian đã đóng như yesterday, last year.',
                'Nhầm với past simple khi kể chuỗi sự kiện đã kết thúc.'
            ],
            practice: [
                q('Điền dạng đúng: I ____ this movie three times. (see)', 'have seen', 'Kinh nghiệm tới hiện tại, không có mốc thời gian đóng.'),
                q('Sửa lỗi: She has visited Hue last summer.', 'She visited Hue last summer.', 'last summer là mốc quá khứ đã đóng, dùng past simple.')
            ],
            connections: ['past-simple', 'present-perfect-continuous', 'sequence-of-tenses'],
            checkpoint: [
                'Tôi biết khi nào phải tránh present perfect vì có mốc quá khứ đóng.',
                'Tôi dùng since/for đúng với trạng thái kéo dài.'
            ]
        },
        {
            id: 'present-perfect-continuous',
            title: 'Present Perfect Continuous',
            icon: '♾️',
            level: 'advanced',
            track: 'tenses',
            trackOrder: 4,
            bookSection: 'Hệ thì',
            bookLabel: '4. The Present Perfect Continuous Tense',
            pitfallFocus: 'Mốc thời gian',
            keywords: ['present perfect continuous', 'have been v-ing', 'since for'],
            summary: 'Nhấn độ dài hoặc tính liên tục của hành động bắt đầu trong quá khứ và còn kéo tới hiện tại.',
            whenToUse: [
                'Nhấn quá trình kéo dài tới hiện tại.',
                'Nói về nguyên nhân tạo ra kết quả hiện tại.',
                'Diễn tả hành động lặp đi lặp lại trong một khoảng dài.'
            ],
            formula: [
                'Khẳng định: subject + have/has been + V-ing.',
                'Phủ định: subject + have/has not been + V-ing.',
                'Nghi vấn: Have/Has + subject + been + V-ing?'
            ],
            signals: [
                'since, for',
                'all day, all morning',
                'how long'
            ],
            examples: [
                ex('I have been studying English for five years.', 'Tôi đã học tiếng Anh được năm năm.'),
                ex('She is tired because she has been working all day.', 'Cô ấy mệt vì đã làm việc cả ngày.')
            ],
            pitfalls: [
                'Dùng với stative verbs như know, believe, own trong nghĩa thông thường.',
                'Nhầm với present perfect khi trọng tâm thực ra là kết quả chứ không phải quá trình.'
            ],
            practice: [
                q('Điền dạng đúng: They ____ in this city since 2019. (live)', 'have been living', 'Nhấn quá trình kéo dài tới hiện tại.'),
                q('Chọn dạng phù hợp: I (have read / have been reading) this book, so my eyes are tired.', 'have been reading', 'Kết quả mệt mắt đến từ quá trình đọc kéo dài.')
            ],
            connections: ['present-perfect', 'past-perfect-continuous', 'sequence-of-tenses'],
            checkpoint: [
                'Tôi biết khi nào cần nhấn quá trình thay vì kết quả.',
                'Tôi dùng how long, since, for hợp với thì này.'
            ]
        },
        {
            id: 'past-simple',
            title: 'Past Simple',
            icon: '🕰️',
            level: 'beginner',
            track: 'tenses',
            trackOrder: 5,
            bookSection: 'Hệ thì',
            bookLabel: '5. The Simple Past Tense',
            pitfallFocus: 'Mốc thời gian',
            keywords: ['past simple', 'v2', 'did', 'yesterday'],
            summary: 'Dùng cho hành động đã xảy ra và kết thúc trong quá khứ, thường có mốc thời gian rõ.',
            whenToUse: [
                'Sự kiện đã kết thúc trong quá khứ.',
                'Kể chuyện theo chuỗi hành động nối tiếp.',
                'Thói quen trong quá khứ đã chấm dứt.'
            ],
            formula: [
                'Khẳng định: subject + V2/V-ed.',
                'Phủ định: subject + did not + V.',
                'Nghi vấn: Did + subject + V?'
            ],
            signals: [
                'yesterday, ago, last week, in 2019',
                'when + past event',
                'chuỗi kể chuyện, narrative sequence'
            ],
            examples: [
                ex('We visited Hue last summer.', 'Mùa hè năm ngoái chúng tôi đã đến Huế.'),
                ex('He entered the room, sat down, and opened his laptop.', 'Anh ấy bước vào phòng, ngồi xuống và mở laptop.')
            ],
            pitfalls: [
                'Sau did/didn’t lại chia verb ở quá khứ.',
                'Dùng present perfect dù câu có mốc quá khứ đóng.'
            ],
            practice: [
                q('Điền dạng đúng: She ____ me yesterday. (call)', 'called', 'Có mốc yesterday nên dùng past simple.'),
                q('Sửa lỗi: Did you saw him?', 'Did you see him?', 'Sau did, verb về nguyên mẫu.')
            ],
            connections: ['present-perfect', 'past-continuous', 'question-negative-forms'],
            checkpoint: [
                'Tôi không còn chia sai sau did.',
                'Tôi biết dùng past simple cho mốc quá khứ đã đóng.'
            ]
        },
        {
            id: 'past-continuous',
            title: 'Past Continuous',
            icon: '⏳',
            level: 'intermediate',
            track: 'tenses',
            trackOrder: 6,
            bookSection: 'Hệ thì',
            bookLabel: '6. The Past Continuous Tense',
            pitfallFocus: 'Mốc thời gian',
            keywords: ['past continuous', 'was were v-ing', 'while when'],
            summary: 'Dùng để tạo bối cảnh trong quá khứ hoặc diễn tả hành động đang diễn ra tại một thời điểm quá khứ.',
            whenToUse: [
                'Hành động đang diễn ra tại một mốc quá khứ.',
                'Hai hành động song song trong quá khứ.',
                'Hành động dài bị một hành động ngắn chen vào.'
            ],
            formula: [
                'Khẳng định: subject + was/were + V-ing.',
                'Phủ định: subject + was/were not + V-ing.',
                'Nghi vấn: Was/Were + subject + V-ing?'
            ],
            signals: [
                'at 8 p.m. yesterday',
                'while, as',
                'when + past simple interrupting event'
            ],
            examples: [
                ex('I was doing my homework at 9 last night.', 'Tôi đang làm bài tập lúc 9 giờ tối qua.'),
                ex('While we were crossing the street, it started to rain.', 'Trong lúc chúng tôi đang băng qua đường, trời bắt đầu mưa.')
            ],
            pitfalls: [
                'Dùng past continuous cho hành động ngắn chen vào thay vì hành động dài làm nền.',
                'Quên rằng while/as thường đi rất tự nhiên với continuous.'
            ],
            practice: [
                q('Điền dạng đúng: When I called, she ____ dinner. (cook)', 'was cooking', 'Hành động đang diễn ra bị cuộc gọi chen vào.'),
                q('Chọn dạng đúng: While they (watched / were watching) TV, the lights went out.', 'were watching', 'while tạo bối cảnh kéo dài.')
            ],
            connections: ['past-simple', 'past-perfect', 'adverbial-time-clauses'],
            checkpoint: [
                'Tôi biết hành động nào là nền dài, hành động nào là điểm chen vào.',
                'Tôi dùng while/when đúng logic hơn.'
            ]
        },
        {
            id: 'past-perfect',
            title: 'Past Perfect',
            icon: '🧭',
            level: 'advanced',
            track: 'tenses',
            trackOrder: 7,
            bookSection: 'Hệ thì',
            bookLabel: '7. The Past Perfect Tense',
            pitfallFocus: 'Mốc thời gian',
            keywords: ['past perfect', 'had v3', 'before after by the time'],
            summary: 'Dùng để nói hành động đã hoàn tất trước một mốc hoặc một hành động khác trong quá khứ.',
            whenToUse: [
                'Có hai mốc quá khứ và cần nhấn mốc nào xảy ra trước.',
                'Kể chuyện theo trình tự sâu hơn.',
                'Đi sau by the time, before, after khi cần làm rõ trình tự.'
            ],
            formula: [
                'Khẳng định: subject + had + V3.',
                'Phủ định: subject + had not + V3.',
                'Nghi vấn: Had + subject + V3?'
            ],
            signals: [
                'before, after, by the time',
                'already, just, never trong bối cảnh quá khứ',
                'một mốc quá khứ khác làm điểm neo'
            ],
            examples: [
                ex('By the time I arrived, the film had started.', 'Lúc tôi đến, bộ phim đã bắt đầu rồi.'),
                ex('She was nervous because she had never flown before.', 'Cô ấy lo vì trước đó chưa từng đi máy bay.')
            ],
            pitfalls: [
                'Lạm dụng past perfect dù trình tự đã quá rõ hoặc chỉ có một mốc quá khứ.',
                'Dùng sai khi thực ra chỉ cần past simple cho chuỗi kể chuyện đơn giản.'
            ],
            practice: [
                q('Điền dạng đúng: After he ____ his homework, he went out. (finish)', 'had finished', 'Hành động hoàn tất trước một hành động quá khứ khác.'),
                q('Chọn dạng đúng: When we got to the station, the train (left / had left).', 'had left', 'Tàu rời trước thời điểm chúng tôi tới.')
            ],
            connections: ['past-simple', 'past-perfect-continuous', 'sequence-of-tenses'],
            checkpoint: [
                'Tôi dùng past perfect để làm rõ mốc “xảy ra trước”.',
                'Tôi không lạm dụng thì này khi câu đã rõ trình tự.'
            ]
        },
        {
            id: 'past-perfect-continuous',
            title: 'Past Perfect Continuous',
            icon: '🔄',
            level: 'advanced',
            track: 'tenses',
            trackOrder: 8,
            bookSection: 'Hệ thì',
            bookLabel: '8. The Past Perfect Continuous Tense',
            pitfallFocus: 'Mốc thời gian',
            keywords: ['past perfect continuous', 'had been v-ing'],
            summary: 'Dùng để nhấn một hành động kéo dài cho tới trước một mốc quá khứ khác.',
            whenToUse: [
                'Nhấn độ dài của quá trình trước một mốc quá khứ.',
                'Giải thích nguyên nhân của trạng thái trong quá khứ.',
                'So sánh với past perfect khi muốn nhấn quá trình chứ không chỉ kết quả.'
            ],
            formula: [
                'Khẳng định: subject + had been + V-ing.',
                'Phủ định: subject + had not been + V-ing.',
                'Nghi vấn: Had + subject + been + V-ing?'
            ],
            signals: [
                'for, since trong bối cảnh quá khứ',
                'before, when, by the time',
                'trạng thái quá khứ có nguyên nhân rõ'
            ],
            examples: [
                ex('They had been waiting for two hours before the bus arrived.', 'Họ đã đợi hai tiếng trước khi xe buýt tới.'),
                ex('Her eyes were red because she had been crying.', 'Mắt cô ấy đỏ vì trước đó đã khóc.')
            ],
            pitfalls: [
                'Chọn past perfect dù trọng tâm là quá trình kéo dài.',
                'Dùng với stative verbs như know, own trong nghĩa thông thường.'
            ],
            practice: [
                q('Điền dạng đúng: He was tired because he ____ all morning. (work)', 'had been working', 'Mệt là kết quả của quá trình kéo dài trước đó.'),
                q('Chọn dạng đúng: Before they moved, they (had lived / had been living) there for ten years.', 'had been living', 'Nhấn khoảng thời gian kéo dài mười năm.')
            ],
            connections: ['present-perfect-continuous', 'past-perfect', 'sequence-of-tenses'],
            checkpoint: [
                'Tôi biết khi nào cần nhấn độ dài trước một mốc quá khứ.',
                'Tôi phân biệt được past perfect với past perfect continuous.'
            ]
        },
        {
            id: 'future-simple',
            title: 'Future Simple',
            icon: '🚀',
            level: 'intermediate',
            track: 'tenses',
            trackOrder: 9,
            bookSection: 'Hệ thì',
            bookLabel: '9. The Simple Future Tense',
            pitfallFocus: 'Mốc thời gian',
            keywords: ['future simple', 'will', 'simple future'],
            summary: 'Dùng cho quyết định tức thời, lời hứa, dự đoán và tương lai không có kế hoạch sẵn.',
            whenToUse: [
                'Quyết định đưa ra ngay lúc nói.',
                'Lời hứa, đề nghị, đe dọa, hứa hẹn.',
                'Dự đoán hoặc tương lai chung chung.'
            ],
            formula: [
                'Khẳng định: subject + will + V.',
                'Phủ định: subject + will not + V.',
                'Nghi vấn: Will + subject + V?'
            ],
            signals: [
                'I think, probably, maybe',
                'I will help, I will call',
                'tomorrow, next week khi chưa nhấn kế hoạch sẵn'
            ],
            examples: [
                ex('I will open the window.', 'Tôi sẽ mở cửa sổ.'),
                ex('I think it will rain tonight.', 'Tôi nghĩ tối nay trời sẽ mưa.')
            ],
            pitfalls: [
                'Dùng will trong mệnh đề thời gian sau when, before, until.',
                'Nhầm future simple với near future hoặc present continuous khi đã có kế hoạch sẵn.'
            ],
            practice: [
                q('Chọn dạng đúng: I think she ____ the exam. (pass)', 'will pass', 'Dự đoán dùng will.'),
                q('Sửa lỗi: I will call you when I will arrive.', 'I will call you when I arrive.', 'Sau when trong mệnh đề thời gian không dùng future form.')
            ],
            connections: ['near-future', 'future-continuous', 'adverbial-time-clauses'],
            checkpoint: [
                'Tôi dùng will cho quyết định và dự đoán tức thời.',
                'Tôi tránh future form trong mệnh đề thời gian.'
            ]
        },
        {
            id: 'near-future',
            title: 'Near Future',
            icon: '🎯',
            level: 'intermediate',
            track: 'tenses',
            trackOrder: 10,
            bookSection: 'Hệ thì',
            bookLabel: '10. Near Future',
            pitfallFocus: 'Mốc thời gian',
            keywords: ['near future', 'be going to', 'about to', 'present continuous future'],
            summary: 'Trong sách tách riêng tương lai gần: be going to cho dự định/dấu hiệu, và present continuous cho kế hoạch đã chốt.',
            whenToUse: [
                'Dự định đã có từ trước.',
                'Dự đoán dựa trên dấu hiệu hiện tại.',
                'Kế hoạch rất gần đã sắp xếp, đặc biệt với present continuous.'
            ],
            formula: [
                'be going to + V cho dự định hoặc dấu hiệu rõ.',
                'be about to + V cho việc sắp xảy ra ngay.',
                'present continuous có thể diễn tả lịch hẹn/kế hoạch gần.'
            ],
            signals: [
                'look at those clouds',
                'tonight, this afternoon, next week với kế hoạch rõ',
                'already planned, arranged'
            ],
            examples: [
                ex('We are going to move next month.', 'Tháng sau chúng tôi sẽ chuyển nhà.'),
                ex('The train is about to leave.', 'Tàu sắp rời ga.')
            ],
            pitfalls: [
                'Dùng will cho dự định đã có từ trước làm mất sắc thái tự nhiên.',
                'Nhầm be going to với present continuous dù câu cần nhấn lịch hẹn đã chốt.'
            ],
            practice: [
                q('Chọn dạng phù hợp: Look at the sky! It ____ . (rain)', 'is going to rain', 'Có dấu hiệu hiện tại nên dùng be going to.'),
                q('Điền dạng đúng: We ____ the dentist at 3 p.m. tomorrow. (see)', 'are seeing', 'Lịch hẹn đã chốt nên present continuous tự nhiên.')
            ],
            connections: ['future-simple', 'present-continuous', 'future-continuous'],
            checkpoint: [
                'Tôi phân biệt được will, be going to và present continuous ở tương lai.',
                'Tôi nhớ Near Future là phần riêng cần học, không bỏ sót.'
            ]
        },
        {
            id: 'future-continuous',
            title: 'Future Continuous',
            icon: '🛰️',
            level: 'advanced',
            track: 'tenses',
            trackOrder: 11,
            bookSection: 'Hệ thì',
            bookLabel: '11. The Future Continuous Tense',
            pitfallFocus: 'Mốc thời gian',
            keywords: ['future continuous', 'will be v-ing'],
            summary: 'Dùng cho hành động sẽ đang diễn ra tại một thời điểm trong tương lai.',
            whenToUse: [
                'Tạo bối cảnh tại một mốc tương lai.',
                'Nói về việc sẽ đang diễn ra như một phần của lịch trình.',
                'Hỏi về kế hoạch của người khác theo cách lịch sự hơn.'
            ],
            formula: [
                'Khẳng định: subject + will be + V-ing.',
                'Phủ định: subject + will not be + V-ing.',
                'Nghi vấn: Will + subject + be + V-ing?'
            ],
            signals: [
                'this time tomorrow/next week',
                'at 8 p.m. tonight/tomorrow',
                'when + present clause + future continuous in main clause'
            ],
            examples: [
                ex('This time tomorrow, I will be flying to Da Nang.', 'Giờ này ngày mai tôi sẽ đang bay tới Đà Nẵng.'),
                ex('Will you be using your laptop this evening?', 'Tối nay bạn có đang dùng laptop không?')
            ],
            pitfalls: [
                'Dùng future simple khi cần nhấn “đang diễn ra tại mốc tương lai”.',
                'Nhầm với near future dù câu không nhấn kế hoạch mà nhấn bối cảnh.'
            ],
            practice: [
                q('Điền dạng đúng: At 9 p.m. tonight, we ____ dinner with our clients. (have)', 'will be having', 'Nhấn hành động đang diễn ra tại một mốc tương lai.'),
                q('Chọn dạng phù hợp: This time next week, she (will work / will be working) in Singapore.', 'will be working', 'Có mốc this time next week nên dùng continuous.')
            ],
            connections: ['future-simple', 'future-perfect', 'near-future'],
            checkpoint: [
                'Tôi nhận ra khi nào tương lai cần bối cảnh “đang diễn ra”.',
                'Tôi dùng future continuous khi hỏi kế hoạch lịch sự hơn.'
            ]
        },
        {
            id: 'future-perfect',
            title: 'Future Perfect',
            icon: '🏁',
            level: 'advanced',
            track: 'tenses',
            trackOrder: 12,
            bookSection: 'Hệ thì',
            bookLabel: '12. The Future Perfect Tense',
            pitfallFocus: 'Mốc thời gian',
            keywords: ['future perfect', 'will have v3', 'by the time'],
            summary: 'Dùng cho hành động sẽ hoàn tất trước một mốc hoặc một hành động khác trong tương lai.',
            whenToUse: [
                'Nói về việc hoàn tất trước một deadline tương lai.',
                'Khi có by, by the time, before + mốc tương lai.',
                'Nói về thành quả đạt được trước một mốc.'
            ],
            formula: [
                'Khẳng định: subject + will have + V3.',
                'Phủ định: subject + will not have + V3.',
                'Nghi vấn: Will + subject + have + V3?'
            ],
            signals: [
                'by Friday, by next year',
                'by the time + present clause',
                'before + future point'
            ],
            examples: [
                ex('By noon, I will have finished the report.', 'Trước trưa tôi sẽ hoàn thành xong báo cáo.'),
                ex('By the time you arrive, they will have left.', 'Lúc bạn tới thì họ sẽ rời đi rồi.')
            ],
            pitfalls: [
                'Dùng simple future dù câu nhấn “hoàn tất trước mốc”.',
                'Cho future form vào mệnh đề thời gian sau by the time/when.'
            ],
            practice: [
                q('Điền dạng đúng: By next month, she ____ her thesis. (complete)', 'will have completed', 'Có mốc hoàn tất by next month.'),
                q('Sửa lỗi: By the time he will arrive, we will have eaten.', 'By the time he arrives, we will have eaten.', 'Mệnh đề thời gian dùng present form.')
            ],
            connections: ['future-continuous', 'future-perfect-continuous', 'adverbial-time-clauses'],
            checkpoint: [
                'Tôi dùng future perfect khi cần ý “xong trước”.',
                'Tôi tránh future form trong mệnh đề thời gian.'
            ]
        },
        {
            id: 'future-perfect-continuous',
            title: 'Future Perfect Continuous',
            icon: '♻️',
            level: 'advanced',
            track: 'tenses',
            trackOrder: 13,
            bookSection: 'Hệ thì',
            bookLabel: '13. The Future Perfect Continuous Tense',
            pitfallFocus: 'Mốc thời gian',
            keywords: ['future perfect continuous', 'will have been v-ing'],
            summary: 'Dùng để nhấn độ dài của hành động sẽ kéo tới trước một mốc tương lai.',
            whenToUse: [
                'Nhấn số giờ/tháng/năm của quá trình tới một mốc tương lai.',
                'Khi muốn nói “lúc đó tôi sẽ đã làm việc ở đây được 10 năm”.',
                'So sánh với future perfect khi trọng tâm là duration.'
            ],
            formula: [
                'Khẳng định: subject + will have been + V-ing.',
                'Phủ định: subject + will not have been + V-ing.',
                'Nghi vấn: Will + subject + have been + V-ing?'
            ],
            signals: [
                'for + duration + by + future point',
                'by next month/year',
                'how long ... by then'
            ],
            examples: [
                ex('By June, I will have been working here for five years.', 'Đến tháng Sáu tôi sẽ làm ở đây được năm năm.'),
                ex('Next month, they will have been living in Hanoi for a decade.', 'Tháng sau họ sẽ sống ở Hà Nội tròn mười năm.')
            ],
            pitfalls: [
                'Dùng future perfect dù trọng tâm là độ dài.',
                'Dùng với stative verb trong nghĩa không phù hợp.'
            ],
            practice: [
                q('Điền dạng đúng: By next March, we ____ this project for a full year. (run)', 'will have been running', 'Nhấn quá trình kéo dài tới mốc tương lai.'),
                q('Chọn dạng đúng: By 2028, she (will have taught / will have been teaching) here for 20 years.', 'will have been teaching', 'Có for 20 years nên nhấn duration.')
            ],
            connections: ['future-perfect', 'present-perfect-continuous', 'past-perfect-continuous'],
            checkpoint: [
                'Tôi phân biệt được future perfect với future perfect continuous.',
                'Tôi dùng thì này khi có duration kéo tới mốc tương lai.'
            ]
        },
        {
            id: 'sequence-of-tenses',
            title: 'Sequence of Tenses',
            icon: '🪜',
            level: 'advanced',
            track: 'tenses',
            trackOrder: 14,
            bookSection: 'Hệ thì',
            bookLabel: 'Sequence of Tenses',
            pitfallFocus: 'Liên từ & mệnh đề',
            keywords: ['sequence of tenses', 'tense harmony', 'reported speech', 'adverbial time'],
            summary: 'Sự phối hợp thì giúp main clause và subordinate clause ăn khớp về thời gian và logic.',
            whenToUse: [
                'Khi một câu có nhiều mệnh đề phụ thuộc nhau.',
                'Khi đổi câu trực tiếp sang reported speech.',
                'Khi dùng mệnh đề thời gian hoặc noun clause phụ thuộc câu chính.'
            ],
            formula: [
                'Main clause ở hiện tại thường cho subordinate clause linh hoạt theo nghĩa thực.',
                'Main clause ở quá khứ thường kéo subordinate clause lùi về quá khứ nếu ý nghĩa cũng lùi.',
                'Mệnh đề thời gian hướng tới tương lai thường dùng present form, không dùng future form.'
            ],
            signals: [
                'said that, knew that, wondered whether',
                'when, before, after, until, as soon as',
                'if the statement is still true, tense backshift có thể không cần'
            ],
            examples: [
                ex('She said that she was tired.', 'Cô ấy nói rằng cô ấy mệt.'),
                ex('I will call you when I finish the report.', 'Tôi sẽ gọi cho bạn khi tôi làm xong báo cáo.')
            ],
            pitfalls: [
                'Backshift máy móc cả khi sự thật vẫn còn đúng.',
                'Dùng will trong adverbial clause of time.'
            ],
            practice: [
                q('Sửa lỗi: He said that the sun was rising in the East.', 'He said that the sun rises in the East.', 'Sự thật hiển nhiên vẫn giữ hiện tại đơn.'),
                q('Sửa lỗi: We will start when he will arrive.', 'We will start when he arrives.', 'Sau when chỉ dùng present form.')
            ],
            connections: ['reported-passive-causative', 'adverbial-time-clauses', 'present-perfect'],
            checkpoint: [
                'Tôi không còn backshift máy móc mọi mệnh đề.',
                'Tôi nhớ quy tắc đặc biệt của mệnh đề thời gian.'
            ]
        },
        {
            id: 'nouns-plurals',
            title: 'Nouns & Plural Forms',
            icon: '📦',
            level: 'beginner',
            track: 'noun-system',
            trackOrder: 1,
            bookSection: 'Danh từ - đại từ - mạo từ',
            bookLabel: 'Nouns and plural forms',
            pitfallFocus: 'Danh từ & article',
            keywords: ['nouns', 'plural forms', 'irregular plural', 'count noun'],
            summary: 'Muốn article, numeral và verb đúng thì phải nhìn đúng loại noun và plural form trước.',
            whenToUse: [
                'Khi chọn singular hay plural noun.',
                'Khi dùng irregular plural hoặc noun không có dạng số nhiều quen thuộc.',
                'Khi kiểm tra noun sau số lượng, quantifier hoặc article.'
            ],
            formula: [
                'Regular plural: thêm -s/-es.',
                'Irregular plural: man -> men, child -> children, mouse -> mice.',
                'Một số noun không đổi: sheep, deer; một số thường không đếm được.'
            ],
            signals: [
                'Danh từ sau one/each/every thường ở singular.',
                'Sau many/few/several thường là plural noun.',
                'Danh từ tập hợp và danh từ không đếm được cần kiểm tra nghĩa trước khi chia.'
            ],
            examples: [
                ex('Two children were playing outside.', 'Hai đứa trẻ đang chơi ở ngoài.'),
                ex('The furniture in this room is expensive.', 'Đồ nội thất trong phòng này đắt.')
            ],
            pitfalls: [
                'Tự động thêm -s vào uncountable nouns như furniture, information, advice.',
                'Quên plural bất quy tắc sau numeral hoặc quantifier.'
            ],
            practice: [
                q('Điền dạng đúng: Three ____ were waiting outside. (person)', 'people', 'person có plural bất quy tắc là people.'),
                q('Sửa lỗi: Many furnitures were damaged.', 'Much furniture was damaged. / Many pieces of furniture were damaged.', 'furniture là uncountable noun.')
            ],
            connections: ['countable-uncountable', 'articles', 'subject-verb-agreement'],
            checkpoint: [
                'Tôi biết noun nào thêm -s bình thường, noun nào bất quy tắc.',
                'Tôi không thêm -s bừa vào uncountable nouns.'
            ]
        },
        {
            id: 'countable-uncountable',
            title: 'Countable, Uncountable & Quantifiers',
            icon: '🧮',
            level: 'intermediate',
            track: 'noun-system',
            trackOrder: 2,
            bookSection: 'Danh từ - đại từ - mạo từ',
            bookLabel: 'Countable / Uncountable nouns and quantifiers',
            pitfallFocus: 'Danh từ & article',
            keywords: ['countable', 'uncountable', 'quantifiers', 'many much few little'],
            summary: 'Sai countable/uncountable thường kéo theo sai luôn article, numeral, quantifier và subject-verb agreement.',
            whenToUse: [
                'Khi chọn much/many, few/little, a lot of, some/any.',
                'Khi noun có thể vừa countable vừa uncountable theo nghĩa.',
                'Khi cần nói số lượng với uncountable nouns.'
            ],
            formula: [
                'Countable plural: many, few, a few, several.',
                'Uncountable: much, little, a little.',
                'Both: some, any, a lot of, lots of, plenty of.'
            ],
            signals: [
                'Advice, luggage, information, homework thường là uncountable.',
                'Paper, chicken, experience có thể đổi loại theo nghĩa.',
                'A piece of, a bottle of, a bit of giúp đếm uncountable nouns.'
            ],
            examples: [
                ex('We have little time, so let us begin.', 'Chúng ta có ít thời gian, nên bắt đầu thôi.'),
                ex('She has a lot of experience in marketing.', 'Cô ấy có nhiều kinh nghiệm trong marketing.')
            ],
            pitfalls: [
                'Nhầm few với a few, little với a little.',
                'Dùng many với uncountable noun hoặc much với plural countable noun trong câu thông thường.'
            ],
            practice: [
                q('Chọn từ đúng: There are (much / many) students in the hall.', 'many', 'students là countable plural noun.'),
                q('Sửa lỗi: I need an advice.', 'I need some advice. / I need a piece of advice.', 'advice là uncountable noun.')
            ],
            connections: ['nouns-plurals', 'articles', 'numerals'],
            checkpoint: [
                'Tôi chọn đúng much/many và few/little.',
                'Tôi biết cách “đếm” uncountable nouns bằng unit nouns.'
            ]
        },
        {
            id: 'pronouns',
            title: 'Pronouns',
            icon: '🫱',
            level: 'beginner',
            track: 'noun-system',
            trackOrder: 3,
            bookSection: 'Danh từ - đại từ - mạo từ',
            bookLabel: 'Pronouns',
            pitfallFocus: 'Danh từ & article',
            keywords: ['pronouns', 'subject pronoun', 'object pronoun', 'possessive'],
            summary: 'Pronouns giúp tránh lặp noun, nhưng phải chọn đúng vai trò subject, object, possessive hay reflexive.',
            whenToUse: [
                'Thay noun đã biết để câu gọn hơn.',
                'Thể hiện sở hữu hoặc tự tác động.',
                'Dùng one/ones, another, other, others khi thay noun.'
            ],
            formula: [
                'Subject pronouns: I, you, he, she, it, we, they.',
                'Object pronouns: me, you, him, her, it, us, them.',
                'Possessive forms: my/mine, your/yours, their/theirs.'
            ],
            signals: [
                'Sau preposition hoặc verb thường dùng object pronoun.',
                'Trước noun dùng possessive determiner; đứng một mình dùng possessive pronoun.',
                'Reflexive pronouns dùng khi subject và object là cùng một người/vật.'
            ],
            examples: [
                ex('I saw Mary, and I gave her the file.', 'Tôi gặp Mary và đưa cho cô ấy tập tin.'),
                ex('This seat is mine, and that one is yours.', 'Ghế này là của tôi, còn ghế kia là của bạn.')
            ],
            pitfalls: [
                'Dùng I thay vì me sau preposition hoặc verb.',
                'Nhầm my với mine, their với theirs.'
            ],
            practice: [
                q('Điền đại từ đúng: The teacher spoke to Lan and ____.', 'me', 'Sau preposition to dùng object pronoun.'),
                q('Điền dạng đúng: This notebook is ____ , not yours. (I)', 'mine', 'Đứng một mình sau be dùng possessive pronoun.')
            ],
            connections: ['articles', 'relative-pronouns-adverbs', 'sentence-repair'],
            checkpoint: [
                'Tôi phân biệt được subject pronoun, object pronoun và possessive forms.',
                'Tôi không còn viết “between you and I”.'
            ]
        },
        {
            id: 'articles',
            title: 'Articles',
            icon: '📰',
            level: 'beginner',
            track: 'noun-system',
            trackOrder: 4,
            bookSection: 'Danh từ - đại từ - mạo từ',
            bookLabel: 'Articles',
            pitfallFocus: 'Danh từ & article',
            keywords: ['articles', 'a an the', 'zero article'],
            summary: 'A/an, the và zero article không chỉ là mẹo; chúng phản ánh mức độ xác định và loại noun.',
            whenToUse: [
                'Nhắc đến một vật bất kỳ lần đầu: a/an.',
                'Nhắc đến thứ đã xác định, duy nhất hoặc đã biết: the.',
                'Nói chung về plural nouns hoặc uncountable nouns: zero article.'
            ],
            formula: [
                'a/an + singular countable noun chưa xác định.',
                'the + noun đã xác định hoặc duy nhất trong ngữ cảnh.',
                'zero article với plural/uncountable nouns khi nói chung.'
            ],
            signals: [
                'an đi theo âm đầu là nguyên âm, không theo chữ cái đầu.',
                'the sun, the internet, the first chapter là các trường hợp điển hình.',
                'Tên bữa ăn, môn học, ngôn ngữ thường không có article trong nghĩa chung.'
            ],
            examples: [
                ex('I bought a book. The book is on the table.', 'Tôi mua một quyển sách. Quyển sách ấy đang ở trên bàn.'),
                ex('Water is essential, but the water in this bottle is warm.', 'Nước nói chung không có article; nước trong chai đã xác định nên dùng the.')
            ],
            pitfalls: [
                'Dùng a/an trước uncountable noun hoặc plural noun.',
                'Quên zero article khi nói chung chung hoặc với tên riêng không cần the.'
            ],
            practice: [
                q('Điền article: She is ____ honest person.', 'an', 'Chọn theo âm đầu /ɒ/, không theo chữ h.'),
                q('Điền article phù hợp: ____ books on this shelf are mine.', 'The', 'Đã xác định nhóm sách trên giá này.')
            ],
            connections: ['nouns-plurals', 'countable-uncountable', 'numerals'],
            checkpoint: [
                'Tôi biết nhìn noun trước rồi mới chọn article.',
                'Tôi phân biệt được khi nào dùng zero article.'
            ]
        },
        {
            id: 'numerals',
            title: 'Numerals',
            icon: '🔢',
            level: 'intermediate',
            track: 'noun-system',
            trackOrder: 5,
            bookSection: 'Danh từ - đại từ - mạo từ',
            bookLabel: 'Numerals',
            pitfallFocus: 'Danh từ & article',
            keywords: ['numerals', 'cardinal', 'ordinal', 'fractions', 'dozen hundred thousand'],
            summary: 'Numerals không chỉ là số đếm; chúng còn kéo theo singular/plural noun và cấu trúc đo lường.',
            whenToUse: [
                'Số đếm, số thứ tự, phân số, phần trăm, tuổi, giá tiền.',
                'Cụm hundred/thousand/million với và không với of.',
                'Nói ngày tháng, chapter, floor, rank.'
            ],
            formula: [
                'Cardinal numbers: one, two, three...',
                'Ordinal numbers: first, second, third...',
                'two hundred people nhưng hundreds of people.'
            ],
            signals: [
                'Sau numeral thường là singular unit noun trong hyphen adjective: a five-year plan.',
                'Sau fraction/percentage, verb agreement phụ thuộc noun theo sau of.',
                'First, second, third thường đi với the trong nhiều ngữ cảnh.'
            ],
            examples: [
                ex('There were two hundred guests at the event.', 'Có hai trăm khách tại sự kiện.'),
                ex('She lives on the third floor.', 'Cô ấy sống ở tầng ba.')
            ],
            pitfalls: [
                'Thêm -s sai vào hundred/thousand khi có số cụ thể phía trước.',
                'Quên noun chuyển về singular trong compound adjective như a ten-minute break.'
            ],
            practice: [
                q('Chọn dạng đúng: three (hundred / hundreds) students', 'hundred', 'Có số cụ thể đứng trước nên không thêm -s.'),
                q('Điền dạng đúng: We need a ____ report. (two pages)', 'two-page', 'Compound adjective trước noun dùng singular form.')
            ],
            connections: ['articles', 'nouns-plurals', 'countable-uncountable'],
            checkpoint: [
                'Tôi dùng đúng hundred/thousand và ordinal numbers.',
                'Tôi nhớ quy tắc singular trong compound adjective có số.'
            ]
        },
        {
            id: 'adjectives',
            title: 'Adjectives',
            icon: '🎨',
            level: 'intermediate',
            track: 'word-classes',
            trackOrder: 1,
            bookSection: 'Tính từ - trạng từ - word form',
            bookLabel: 'Adjectives',
            pitfallFocus: 'Từ loại',
            keywords: ['adjectives', 'position of adjectives', 'ed ing adjectives'],
            summary: 'Adjectives đứng đúng chỗ sẽ làm câu tự nhiên; đứng sai chỗ sẽ biến cả câu thành gượng.',
            whenToUse: [
                'Bổ nghĩa trực tiếp cho noun trước noun.',
                'Làm complement sau be, seem, look, become.',
                'Dùng -ed / -ing adjectives để diễn tả cảm xúc và tính chất.'
            ],
            formula: [
                'adjective + noun: a difficult exam',
                'linking verb + adjective: The exam was difficult.',
                '-ed adjective mô tả người cảm thấy; -ing adjective mô tả thứ gây cảm xúc.'
            ],
            signals: [
                'Opinion -> size -> age -> shape -> color -> origin -> material là thứ tự hay gặp.',
                'afraid, asleep, alive thường hay đứng sau linking verbs.',
                'interested/interesting, bored/boring là cặp cần học theo nghĩa.'
            ],
            examples: [
                ex('She bought a beautiful old wooden chair.', 'Cô ấy mua một chiếc ghế gỗ cũ đẹp.'),
                ex('I am interested in the course because it is interesting.', 'Tôi thấy khóa học thú vị vì bản thân nó thú vị.')
            ],
            pitfalls: [
                'Dùng -ing adjective thay cho cảm xúc của người hoặc ngược lại.',
                'Đẩy adjective ra sau noun như tiếng Việt trong câu thường.'
            ],
            practice: [
                q('Điền dạng đúng: The movie was so ____ that I fell asleep. (bore)', 'boring', 'Bộ phim gây cảm giác buồn chán nên dùng -ing adjective.'),
                q('Sắp xếp adjective: a / red / small / French / car', 'a small red French car', 'Theo thứ tự opinion-size-age-shape-color-origin-material.')
            ],
            connections: ['adverbs', 'comparisons', 'word-form'],
            checkpoint: [
                'Tôi không còn nhầm interested với interesting.',
                'Tôi biết adjective đứng trước noun hoặc sau linking verb.'
            ]
        },
        {
            id: 'adverbs',
            title: 'Adverbs',
            icon: '🌬️',
            level: 'intermediate',
            track: 'word-classes',
            trackOrder: 2,
            bookSection: 'Tính từ - trạng từ - word form',
            bookLabel: 'Adverbs and inversion after adverbs',
            pitfallFocus: 'Từ loại',
            keywords: ['adverbs', 'adverb position', 'inversion', 'never hardly rarely'],
            summary: 'Adverbs quyết định sắc thái và vị trí của chúng ảnh hưởng lớn tới độ tự nhiên của câu.',
            whenToUse: [
                'Miêu tả cách thức, tần suất, mức độ hoặc thái độ của cả câu.',
                'Điều chỉnh vị trí để nhấn mạnh trong văn viết.',
                'Gặp negative/limiting adverbs dẫn tới inversion.'
            ],
            formula: [
                'Adverb of manner thường đứng sau verb hoặc object.',
                'Adverb of frequency thường đứng trước main verb nhưng sau be.',
                'Never, rarely, seldom, hardly... khi đưa lên đầu câu thường kéo inversion.'
            ],
            signals: [
                'She always arrives early, but She is always late.',
                'Only then did he understand.',
                'Hardly had we started when it began to rain.'
            ],
            examples: [
                ex('She spoke clearly and confidently.', 'Cô ấy nói rõ ràng và tự tin.'),
                ex('Never have I seen such a crowded station.', 'Tôi chưa từng thấy nhà ga nào đông như vậy.')
            ],
            pitfalls: [
                'Đặt adverb sai vị trí làm đổi nghĩa hoặc làm câu cứng.',
                'Quên inversion khi fronting adverb mang nghĩa phủ định/hạn định.'
            ],
            practice: [
                q('Điền dạng đúng: He answered the question ____. (quick)', 'quickly', 'Bổ nghĩa cho answered nên dùng adverb.'),
                q('Sửa câu: Never I have seen such chaos.', 'Never have I seen such chaos.', 'Fronting adverb phủ định kéo inversion.')
            ],
            connections: ['adjectives', 'sequence-of-tenses', 'sentence-repair'],
            checkpoint: [
                'Tôi đặt đúng adverb of frequency và adverb of manner.',
                'Tôi nhớ inversion sau never, rarely, hardly, only then.'
            ]
        },
        {
            id: 'comparisons',
            title: 'Comparisons',
            icon: '📏',
            level: 'intermediate',
            track: 'word-classes',
            trackOrder: 3,
            bookSection: 'Tính từ - trạng từ - word form',
            bookLabel: 'Comparisons',
            pitfallFocus: 'Từ loại',
            keywords: ['comparisons', 'comparative', 'superlative', 'as as'],
            summary: 'So sánh là phần xuất hiện dày trong speaking và writing, nhưng lỗi double marking rất phổ biến.',
            whenToUse: [
                'So sánh hơn, nhất, ngang bằng.',
                'Mô tả xu hướng tăng giảm.',
                'Dùng less, least, much, far để điều chỉnh mức độ so sánh.'
            ],
            formula: [
                'Short adjective: adj-er / the adj-est.',
                'Long adjective: more / most + adjective.',
                'as + adjective/adverb + as cho so sánh ngang bằng.'
            ],
            signals: [
                'better, worse, farther/further là irregular forms.',
                'much/far/a lot + comparative để tăng mức độ.',
                'the + comparative, the + comparative cho ý “càng... càng...”.'
            ],
            examples: [
                ex('This task is easier than the last one.', 'Nhiệm vụ này dễ hơn nhiệm vụ trước.'),
                ex('The more you practise, the more confident you become.', 'Bạn càng luyện tập, bạn càng tự tin.')
            ],
            pitfalls: [
                'Double marking như more easier, most fastest.',
                'Quên than trong comparative clause hoặc dùng nhầm then/than.'
            ],
            practice: [
                q('Sửa lỗi: This lesson is more easier than that one.', 'This lesson is easier than that one.', 'Không dùng double marking với easier.'),
                q('Điền từ đúng: She is not as tall ____ her sister.', 'as', 'So sánh ngang bằng dùng as ... as.')
            ],
            connections: ['adjectives', 'adverbs', 'result-structures'],
            checkpoint: [
                'Tôi không viết more easier hay most fastest.',
                'Tôi dùng được comparative, superlative và as...as đúng ngữ cảnh.'
            ]
        },
        {
            id: 'word-form',
            title: 'Word Form',
            icon: '🪄',
            level: 'advanced',
            track: 'word-classes',
            trackOrder: 4,
            bookSection: 'Tính từ - trạng từ - word form',
            bookLabel: 'Word Form',
            pitfallFocus: 'Từ loại',
            keywords: ['word form', 'derive words', 'suffix', 'prefix', 'part of speech'],
            summary: 'Word form là kỹ năng đọc vị trí để suy ra dạng từ cần điền, rất quan trọng trong TOEIC/IELTS/viết học thuật.',
            whenToUse: [
                'Bài điền từ theo ngữ pháp hoặc từ vựng học thuật.',
                'Khi cần chuyển noun -> adjective -> adverb -> verb.',
                'Khi phải thêm tiền tố phủ định hoặc chọn đúng danh từ hóa.'
            ],
            formula: [
                'Đọc vị trí trước: trước noun thường cần adjective; sau article thường cần noun.',
                'Nhận họ từ: decide -> decision -> decisive -> decisively.',
                'Tiền tố thường gặp: un-, im-, dis-, mis-; hậu tố: -tion, -ment, -ity, -ness, -ive, -ly.'
            ],
            signals: [
                'The ____ of the plan impressed us. -> cần noun.',
                'They responded ____ to the crisis. -> cần adverb.',
                'A highly ____ solution. -> cần adjective.'
            ],
            examples: [
                ex('The company made a successful launch and grew successfully in Asia.', 'successful là adjective; successfully là adverb.'),
                ex('Her decision was logical, but the timing was unfortunate.', 'decision là noun; logical là adjective; unfortunate có prefix phủ định.')
            ],
            pitfalls: [
                'Chọn nghĩa đúng nhưng sai từ loại, khiến câu vẫn sai.',
                'Thêm prefix phủ định không phù hợp hoặc đổi nghĩa ngoài ý muốn.'
            ],
            practice: [
                q('Điền dạng đúng: The manager praised her ____ . (efficient)', 'efficiency', 'Sau her cần noun vì praise something.'),
                q('Điền dạng đúng: They reacted very ____ to the news. (calm)', 'calmly', 'Bổ nghĩa cho reacted nên dùng adverb.')
            ],
            connections: ['parts-of-speech', 'adjectives', 'adverbs'],
            checkpoint: [
                'Tôi nhìn vị trí và suy ra từ loại cần điền.',
                'Tôi học từ mới theo họ từ để làm word form nhanh hơn.'
            ]
        },
        {
            id: 'conjunctions',
            title: 'Conjunctions',
            icon: '🔗',
            level: 'intermediate',
            track: 'clauses',
            trackOrder: 1,
            bookSection: 'Liên từ - mệnh đề',
            bookLabel: 'Conjunctions',
            pitfallFocus: 'Liên từ & mệnh đề',
            keywords: ['conjunctions', 'coordinating', 'subordinating', 'because although while'],
            summary: 'Liên từ cho biết quan hệ ý: thêm ý, đối lập, nguyên nhân, điều kiện, thời gian hay kết quả.',
            whenToUse: [
                'Nối hai mệnh đề ngang hàng bằng and, but, or, so.',
                'Mở mệnh đề phụ bằng because, although, if, when, while.',
                'Tránh viết nhiều câu rời thiếu quan hệ logic.'
            ],
            formula: [
                'Coordinating conjunctions nối hai thành phần ngang hàng.',
                'Subordinating conjunctions mở dependent clause.',
                'Dấu phẩy thường cần khi clause phụ đứng trước clause chính.'
            ],
            signals: [
                'because chỉ nguyên nhân, although chỉ nhượng bộ, so chỉ kết quả',
                'while có thể là “trong khi” hoặc “mặc dù” tùy ngữ cảnh',
                'however, therefore là conjunctive adverbs, không hẳn là conjunctions thuần'
            ],
            examples: [
                ex('She stayed home because she was ill.', 'Cô ấy ở nhà vì bị ốm.'),
                ex('Although the task was hard, the team finished on time.', 'Dù nhiệm vụ khó, nhóm vẫn hoàn thành đúng hạn.')
            ],
            pitfalls: [
                'Dùng because và so cùng lúc trong một cấu trúc nhân quả đơn.',
                'Dùng however như conjunction thường mà quên dấu câu phù hợp.'
            ],
            practice: [
                q('Chọn liên từ đúng: ____ he was tired, he kept working. (Although / Because)', 'Although', 'Vế sau trái với kỳ vọng nên dùng although.'),
                q('Sửa lỗi: Because he was late, so he missed the bus.', 'Because he was late, he missed the bus. / He was late, so he missed the bus.', 'Không dùng because và so cùng chức năng trong một cấu trúc đơn.')
            ],
            connections: ['adverbial-time-clauses', 'result-structures', 'conditionals-wish'],
            checkpoint: [
                'Tôi chọn liên từ theo quan hệ logic thật sự của câu.',
                'Tôi phân biệt được conjunction với conjunctive adverb.'
            ]
        },
        {
            id: 'adverbial-time-clauses',
            title: 'Adverbial Clauses of Time',
            icon: '⏱️',
            level: 'advanced',
            track: 'clauses',
            trackOrder: 2,
            bookSection: 'Liên từ - mệnh đề',
            bookLabel: 'Adverbial Clause of Time',
            pitfallFocus: 'Liên từ & mệnh đề',
            keywords: ['adverbial clause of time', 'when before after until as soon as'],
            summary: 'Mệnh đề trạng ngữ chỉ thời gian là điểm dễ sai vì người học thường nhét future form vào sai chỗ.',
            whenToUse: [
                'Diễn tả trình tự sự việc bằng when, before, after, until, as soon as.',
                'Nói về lịch trình tương lai có mệnh đề thời gian.',
                'Kết nối main clause và time clause rõ ràng hơn.'
            ],
            formula: [
                'Main clause tương lai + time clause hiện tại: I will call when I arrive.',
                'after/before/by the time có thể phối hợp nhiều thì khác nhau để chỉ trình tự.',
                'Time clause có thể đứng trước hoặc sau main clause.'
            ],
            signals: [
                'when, while, before, after, as soon as, until, once',
                'mệnh đề phụ đi đầu thường có dấu phẩy',
                'future meaning nhưng verb trong time clause thường ở present form'
            ],
            examples: [
                ex('Please wait here until I come back.', 'Hãy đợi ở đây cho tới khi tôi quay lại.'),
                ex('As soon as she finishes the report, she will send it.', 'Ngay khi cô ấy xong báo cáo, cô ấy sẽ gửi nó.')
            ],
            pitfalls: [
                'Dùng will sau when, before, until trong time clause.',
                'Nhầm while với when hoặc until về nghĩa thời gian.'
            ],
            practice: [
                q('Sửa lỗi: I will text you when I will get home.', 'I will text you when I get home.', 'Time clause không dùng will.'),
                q('Điền từ đúng: Stay here ____ the doctor arrives.', 'until', 'until diễn tả kéo dài cho tới mốc bác sĩ đến.')
            ],
            connections: ['future-simple', 'sequence-of-tenses', 'past-perfect'],
            checkpoint: [
                'Tôi nhớ quy tắc present form trong time clause chỉ tương lai.',
                'Tôi phân biệt được when, while, until, as soon as.'
            ]
        },
        {
            id: 'result-structures',
            title: 'Phrases and Clauses of Result',
            icon: '💥',
            level: 'advanced',
            track: 'clauses',
            trackOrder: 3,
            bookSection: 'Liên từ - mệnh đề',
            bookLabel: 'Phrases and Clauses of Result',
            pitfallFocus: 'Liên từ & mệnh đề',
            keywords: ['result clauses', 'so that', 'such that', 'too to', 'enough to'],
            summary: 'Các cấu trúc kết quả như so...that, such...that, too...to, enough to giúp câu linh hoạt và rất hay có trong sách.',
            whenToUse: [
                'Diễn tả kết quả xảy ra vì mức độ nào đó.',
                'Viết lại câu giữa clause form và phrase form.',
                'Tăng độ linh hoạt trong writing và bài transformation.'
            ],
            formula: [
                'so + adjective/adverb + that + clause',
                'such + (a/an) + adjective + noun + that + clause',
                'too + adjective + to V / adjective + enough + to V'
            ],
            signals: [
                'so hot that, such a difficult task that',
                'too tired to continue',
                'old enough to drive'
            ],
            examples: [
                ex('The box was so heavy that I could not lift it.', 'Cái hộp nặng đến mức tôi không thể nhấc nó lên.'),
                ex('She was too tired to study.', 'Cô ấy quá mệt để học.')
            ],
            pitfalls: [
                'Nhầm so với such do không nhìn noun đi sau.',
                'Dùng enough sai vị trí; enough đứng sau adjective nhưng trước noun.'
            ],
            practice: [
                q('Điền cấu trúc đúng: It was ____ a difficult exam ____ many students failed.', 'such / that', 'Có adjective + noun nên dùng such ... that.'),
                q('Viết lại: He is very young. He cannot drive. -> He is ____.', 'too young to drive', 'Chuyển sang phrase of result với too...to.')
            ],
            connections: ['conjunctions', 'comparisons', 'sentence-repair'],
            checkpoint: [
                'Tôi phân biệt được so...that và such...that.',
                'Tôi dùng đúng too...to và enough to.'
            ]
        },
        {
            id: 'relative-pronouns-adverbs',
            title: 'Relative Pronouns & Adverbs',
            icon: '🪢',
            level: 'advanced',
            track: 'clauses',
            trackOrder: 4,
            bookSection: 'Liên từ - mệnh đề',
            bookLabel: 'Relative Pronouns / Relative Adverbs',
            pitfallFocus: 'Liên từ & mệnh đề',
            keywords: ['relative pronouns', 'relative adverbs', 'who which that where when'],
            summary: 'Relative clauses giúp gộp câu gọn hơn, nhưng chọn sai who/which/that/where/when sẽ làm câu lệch nghĩa.',
            whenToUse: [
                'Bổ nghĩa cho người, vật, nơi chốn, thời gian.',
                'Rút gọn hai câu có chung noun.',
                'Phân biệt defining và non-defining relative clauses.'
            ],
            formula: [
                'who/whom/that cho người; which/that cho vật.',
                'where cho nơi chốn, when cho thời gian, why cho reason.',
                'Non-defining clauses cần dấu phẩy và thường không dùng that.'
            ],
            signals: [
                'Nếu relative word làm object, đôi khi có thể lược bỏ trong defining clause.',
                'Preposition có thể đứng cuối hoặc trước whom/which trong văn trang trọng.',
                'Reason thường đi với why hoặc for which.'
            ],
            examples: [
                ex('The woman who helped me yesterday is my aunt.', 'Người phụ nữ đã giúp tôi hôm qua là dì tôi.'),
                ex('This is the café where we first met.', 'Đây là quán cà phê nơi chúng tôi gặp nhau lần đầu.')
            ],
            pitfalls: [
                'Dùng that trong non-defining clause có dấu phẩy.',
                'Nhầm where/when với which khi noun gợi ý nơi chốn hoặc thời gian.'
            ],
            practice: [
                q('Điền từ đúng: The house ____ was built in 1920 is now a museum.', 'which/that', 'Bổ nghĩa cho vật trong defining clause.'),
                q('Sửa lỗi: My brother, that lives in Hue, is a doctor.', 'My brother, who lives in Hue, is a doctor.', 'Non-defining clause dùng who, không dùng that.')
            ],
            connections: ['pronouns', 'phrases-vs-clauses', 'noun-clauses'],
            checkpoint: [
                'Tôi chọn đúng who/which/that/where/when.',
                'Tôi phân biệt được defining và non-defining clauses.'
            ]
        },
        {
            id: 'noun-clauses',
            title: 'Noun Clauses',
            icon: '🧠',
            level: 'advanced',
            track: 'clauses',
            trackOrder: 5,
            bookSection: 'Liên từ - mệnh đề',
            bookLabel: 'Noun Clauses',
            pitfallFocus: 'Liên từ & mệnh đề',
            keywords: ['noun clauses', 'that clause', 'whether if', 'embedded questions'],
            summary: 'Noun clause là mệnh đề nhưng hoạt động như danh từ: làm subject, object hoặc complement.',
            whenToUse: [
                'Sau động từ như know, think, believe, wonder, ask.',
                'Làm chủ ngữ hoặc bổ ngữ trong câu.',
                'Dùng câu hỏi gián tiếp và báo cáo thông tin.'
            ],
            formula: [
                'that + clause cho nội dung phát biểu.',
                'whether/if + clause cho lựa chọn hoặc nghi vấn yes/no.',
                'question word + subject + verb cho embedded question.'
            ],
            signals: [
                'I know that..., I wonder whether...',
                'What he said was surprising.',
                'Embedded question không đảo trợ động từ như câu hỏi trực tiếp.'
            ],
            examples: [
                ex('What she said surprised everyone.', 'Điều cô ấy nói làm mọi người ngạc nhiên.'),
                ex('I wonder where he lives.', 'Tôi thắc mắc anh ấy sống ở đâu.')
            ],
            pitfalls: [
                'Đảo ngữ trong embedded question như câu hỏi trực tiếp.',
                'Dùng if thay whether trong vị trí không phù hợp, nhất là sau preposition hoặc trước to V.'
            ],
            practice: [
                q('Sửa lỗi: I wonder where does he work.', 'I wonder where he works.', 'Embedded question giữ trật tự câu trần thuật.'),
                q('Điền từ đúng: She asked ____ we could finish on time.', 'whether/if', 'Mệnh đề nghi vấn yes/no dùng whether hoặc if.')
            ],
            connections: ['sequence-of-tenses', 'reported-passive-causative', 'relative-pronouns-adverbs'],
            checkpoint: [
                'Tôi không đảo ngữ sai trong embedded questions.',
                'Tôi dùng that/whether/question word đúng vai trò.'
            ]
        },
        {
            id: 'modal-verbs',
            title: 'Modal Verbs',
            icon: '🛠️',
            level: 'intermediate',
            track: 'advanced',
            trackOrder: 1,
            bookSection: 'Cấu trúc nâng cao',
            bookLabel: 'Modal verbs',
            pitfallFocus: 'Chia động từ',
            keywords: ['modal verbs', 'can could may might must should'],
            summary: 'Modal verbs thêm sắc thái khả năng, lời khuyên, nghĩa vụ, suy đoán và lịch sự.',
            whenToUse: [
                'Nói về ability, permission, advice, obligation, probability.',
                'Làm câu lịch sự hơn trong đề nghị và yêu cầu.',
                'Suy đoán về hiện tại hoặc quá khứ.'
            ],
            formula: [
                'modal + bare infinitive',
                'perfect modal: modal + have + V3',
                'be able to / have to là semi-modals quan trọng'
            ],
            signals: [
                'must = mạnh; should = lời khuyên',
                'might = khả năng thấp hơn may',
                'should have, must have, can’t have dùng cho suy đoán/quá khứ'
            ],
            examples: [
                ex('You should back up your files regularly.', 'Bạn nên sao lưu tệp thường xuyên.'),
                ex('He must have forgotten the meeting.', 'Chắc hẳn anh ấy đã quên cuộc họp.')
            ],
            pitfalls: [
                'Thêm to sau modal thường: can to go, must to finish.',
                'Không phân biệt được must have + V3 với had to + V.'
            ],
            practice: [
                q('Điền dạng đúng: You ____ wear a helmet when riding a motorbike. (must / should)', 'must', 'Đây là nghĩa vụ/bắt buộc, không chỉ lời khuyên.'),
                q('Điền dạng đúng: She is not answering. She ____ asleep. (may / should)', 'may be', 'Suy đoán khả năng dùng may be.')
            ],
            connections: ['question-negative-forms', 'conditionals-wish', 'reported-passive-causative'],
            checkpoint: [
                'Tôi biết modal + bare infinitive là khung cố định.',
                'Tôi phân biệt được advice, obligation và probability.'
            ]
        },
        {
            id: 'conditionals-wish',
            title: 'Conditionals & Wish',
            icon: '🌦️',
            level: 'advanced',
            track: 'advanced',
            trackOrder: 2,
            bookSection: 'Cấu trúc nâng cao',
            bookLabel: 'Conditionals and wish structures',
            pitfallFocus: 'Liên từ & mệnh đề',
            keywords: ['conditionals', 'wish', 'if only', 'mixed conditionals'],
            summary: 'Conditionals cho giả định và hệ quả; wish/if only cho tiếc nuối, mong điều trái thực tế.',
            whenToUse: [
                'Nói khả năng thật, giả định hiện tại/tương lai hoặc trái với quá khứ.',
                'Dùng wish/if only để diễn tả tiếc nuối hoặc mong muốn khó thật.',
                'Viết lại câu điều kiện và câu ước.'
            ],
            formula: [
                'Zero/First/Second/Third conditionals lần lượt bám vào fact, real future, unreal present, unreal past.',
                'Wish about present: wish + past simple; about past: wish + past perfect.',
                'If only có sắc thái mạnh hơn wish.'
            ],
            signals: [
                'If I were you...',
                'If I had known, I would have...',
                'I wish I knew / I wish I had studied harder'
            ],
            examples: [
                ex('If it rains, we will stay home.', 'Nếu trời mưa, chúng tôi sẽ ở nhà.'),
                ex('I wish I had listened more carefully.', 'Tôi ước mình đã nghe kỹ hơn.')
            ],
            pitfalls: [
                'Dùng will sau if trong first conditional chuẩn.',
                'Dùng wish + will để nói tiếc nuối hiện tại/quá khứ trong khi thường cần past form.'
            ],
            practice: [
                q('Sửa lỗi: If I will see him, I will tell him.', 'If I see him, I will tell him.', 'Mệnh đề if của first conditional dùng present form.'),
                q('Viết lại: I am not rich. -> I wish ____.', 'I were rich.', 'Wish về hiện tại trái thực tế dùng past simple; dạng trang trọng là were.')
            ],
            connections: ['conjunctions', 'modal-verbs', 'result-structures'],
            checkpoint: [
                'Tôi phân biệt được 4 loại conditionals cơ bản.',
                'Tôi dùng wish/if only đúng mốc thời gian.'
            ]
        },
        {
            id: 'reported-passive-causative',
            title: 'Passive, Reported Speech & Causatives',
            icon: '🏭',
            level: 'advanced',
            track: 'advanced',
            trackOrder: 3,
            bookSection: 'Cấu trúc nâng cao',
            bookLabel: 'Passive voice, reported speech and causatives',
            pitfallFocus: 'Cấu trúc viết',
            keywords: ['passive voice', 'reported speech', 'causative', 'have something done'],
            summary: 'Ba cấu trúc này thường xuất hiện cùng nhau trong phần viết lại câu và báo cáo thông tin.',
            whenToUse: [
                'Passive: nhấn hành động/kết quả thay vì tác nhân.',
                'Reported speech: chuyển lời nói, câu hỏi, mệnh lệnh sang gián tiếp.',
                'Causatives: diễn tả nhờ/thuê/sai khiến người khác làm việc gì.'
            ],
            formula: [
                'Passive: be + V3',
                'Reported speech thường lùi thì và đổi đại từ/thời gian khi cần.',
                'Causative: have/get + object + V3 hoặc have + person + bare infinitive'
            ],
            signals: [
                'The report was finished yesterday.',
                'She said that she was busy.',
                'I had my laptop repaired.'
            ],
            examples: [
                ex('The bridge was built in 2010.', 'Cây cầu được xây vào năm 2010.'),
                ex('He told me that he had finished the task.', 'Anh ấy nói với tôi rằng anh ấy đã xong nhiệm vụ.')
            ],
            pitfalls: [
                'Dùng sai tense của be trong passive hoặc quên đổi sang V3.',
                'Trong reported questions lại đảo ngữ như câu hỏi trực tiếp.'
            ],
            practice: [
                q('Đổi sang bị động: People speak English worldwide.', 'English is spoken worldwide.', 'Đưa object lên làm subject, chia be theo thì hiện tại, verb sang V3.'),
                q('Viết lại: The mechanic repaired my car. -> I ____.', 'had my car repaired by the mechanic.', 'Causative have + object + V3.')
            ],
            connections: ['sequence-of-tenses', 'noun-clauses', 'modal-verbs'],
            checkpoint: [
                'Tôi đổi được câu chủ động sang bị động đúng thì.',
                'Tôi nhớ embedded question trong reported speech không đảo ngữ.'
            ]
        },
        {
            id: 'gerunds-prepositions',
            title: 'Gerunds, Infinitives & Prepositions',
            icon: '🔄',
            level: 'intermediate',
            track: 'advanced',
            trackOrder: 4,
            bookSection: 'Cấu trúc nâng cao',
            bookLabel: 'Gerunds, infinitives and high-frequency prepositions',
            pitfallFocus: 'Chia động từ',
            keywords: ['gerund', 'infinitive', 'prepositions', 'verb patterns'],
            summary: 'Đây là nhóm lỗi điểm liệt: verb pattern và collocation sai sẽ làm câu nghe “gần đúng nhưng vẫn sai”.',
            whenToUse: [
                'Sau động từ chỉ đi với V-ing hoặc to V.',
                'Sau giới từ, adjective + preposition, verb + preposition.',
                'Khi viết lại câu với stop, remember, try, forget.'
            ],
            formula: [
                'Verb + V-ing: enjoy, avoid, finish, suggest...',
                'Verb + to V: want, decide, hope, plan...',
                'Sau preposition luôn là noun/pronoun/V-ing.'
            ],
            signals: [
                'interested in, good at, depend on',
                'stop smoking vs stop to smoke',
                'remember doing vs remember to do'
            ],
            examples: [
                ex('She enjoys reading before bed.', 'Cô ấy thích đọc trước khi ngủ.'),
                ex('They insisted on paying for dinner.', 'Họ khăng khăng trả tiền bữa tối.')
            ],
            pitfalls: [
                'Sau preposition lại dùng to V.',
                'Nhớ nghĩa đổi khi đổi từ V-ing sang to V với stop, remember, try, regret.'
            ],
            practice: [
                q('Điền dạng đúng: He apologized for ____ late. (be)', 'being', 'Sau for là preposition nên dùng V-ing.'),
                q('Chọn dạng đúng: I remembered (locking / to lock) the door, so I did not go back.', 'locking', 'remember doing = nhớ là mình đã làm rồi.')
            ],
            connections: ['conjunctions', 'modal-verbs', 'sentence-repair'],
            checkpoint: [
                'Tôi nhớ sau preposition luôn là noun/pronoun/V-ing.',
                'Tôi phân biệt được các verb pattern đổi nghĩa.'
            ]
        },
        {
            id: 'sentence-repair',
            title: 'Sentence Repair',
            icon: '🧵',
            level: 'advanced',
            track: 'advanced',
            trackOrder: 5,
            bookSection: 'Cấu trúc nâng cao',
            bookLabel: 'Fragments, run-ons, punctuation and modifier repair',
            pitfallFocus: 'Cấu trúc viết',
            keywords: ['sentence repair', 'fragments', 'run-ons', 'punctuation', 'modifier', 'pronoun reference'],
            summary: 'Đây là bài rà cuối: cắt câu thiếu, nối câu quá dài và sửa modifier/punctuation để câu sạch hoàn toàn.',
            whenToUse: [
                'Khi câu nghe dài nhưng không chắc đã đúng cấu trúc.',
                'Khi cần sửa fragment, run-on, comma splice, misplaced modifier.',
                'Khi kiểm tra pronoun reference và dấu câu trong writing.'
            ],
            formula: [
                'Fragment: thiếu subject, verb hoặc thiếu independent clause.',
                'Run-on/comma splice: hai independent clauses dính nhau sai cách.',
                'Modifier phải đứng gần từ nó bổ nghĩa; pronoun phải có antecedent rõ.'
            ],
            signals: [
                'Because the weather was bad. -> fragment',
                'She was late, she missed the bus. -> comma splice',
                'Walking to class, the rain soaked Minh. -> modifier đặt sai'
            ],
            examples: [
                ex('Because the data was incomplete, we delayed the report.', 'Mệnh đề because cần có main clause đi kèm.'),
                ex('Walking to class, Minh got soaked in the rain.', 'Modifier được đặt sát người thực hiện hành động.')
            ],
            pitfalls: [
                'Dùng dấu phẩy thay cho conjunction hoặc dấu chấm phẩy giữa hai independent clauses.',
                'Để pronoun it/they không rõ đang chỉ về noun nào.'
            ],
            practice: [
                q('Sửa câu: She was tired, she kept studying.', 'She was tired, but she kept studying. / She was tired; however, she kept studying.', 'Hai independent clauses cần conjunction hoặc dấu câu phù hợp.'),
                q('Sửa câu: Driving to work, the traffic jam annoyed me.', 'Driving to work, I was annoyed by the traffic jam. / As I was driving to work, the traffic jam annoyed me.', 'Modifier đầu câu phải bổ nghĩa cho chủ ngữ ngay sau nó.')
            ],
            connections: ['phrases-vs-clauses', 'conjunctions', 'pronouns'],
            checkpoint: [
                'Tôi tự rà được fragment, run-on và comma splice.',
                'Tôi đặt modifier và pronoun rõ nghĩa hơn.'
            ]
        },
        {
            id: 'ipa-overview',
            title: 'IPA Overview',
            icon: '🔠',
            level: 'beginner',
            track: 'pronunciation',
            trackOrder: 1,
            bookSection: 'IPA & công cụ',
            bookLabel: 'IPA overview',
            pitfallFocus: 'Phát âm',
            keywords: ['ipa', 'phonetic symbols', 'pronunciation'],
            summary: 'IPA là hệ thống ký hiệu âm thanh, giúp bạn nhìn từ và biết phải phát âm ra sao thay vì đoán theo chữ cái.',
            whenToUse: [
                'Tra từ mới trong từ điển.',
                'Phân biệt cách đọc giữa từ viết gần giống nhau.',
                'Ghi nhớ phát âm chuẩn cùng với stress.'
            ],
            formula: [
                'Ký hiệu nằm giữa hai dấu / /.',
                'Một chữ cái có thể cho nhiều âm; một âm có thể viết bằng nhiều cụm chữ.',
                'Muốn học phát âm chắc, hãy học từ theo âm chứ không chỉ theo spelling.'
            ],
            signals: [
                '/ɪ/ trong ship khác /i:/ trong sheep',
                '/ə/ là schwa, âm rất yếu',
                'Dấu ˈ cho biết primary stress'
            ],
            examples: [
                ex('ship /ʃɪp/ vs sheep /ʃiːp/', 'Khác nhau ở độ dài và chất lượng nguyên âm.'),
                ex('about /əˈbaʊt/', 'Âm đầu là schwa yếu, trọng âm rơi vào âm hai.')
            ],
            pitfalls: [
                'Nhìn chữ cái rồi đoán âm theo tiếng Việt.',
                'Bỏ qua stress dù từ điển đã cho sẵn.'
            ],
            practice: [
                q('Ký hiệu nào là âm schwa? (/ə/ /æ/ /ɒ/)', '/ə/', 'Schwa là âm yếu rất hay gặp trong âm không nhấn.'),
                q('Từ điển cho /ˈteɪ.bəl/. Trọng âm rơi vào âm tiết nào?', 'Âm tiết thứ nhất', 'Dấu ˈ đứng trước âm tiết được nhấn.')
            ],
            connections: ['ipa-vowels', 'ipa-consonants', 'stress-schwa'],
            checkpoint: [
                'Tôi đọc được ký hiệu IPA cơ bản trong từ điển.',
                'Tôi biết nhìn dấu stress và schwa.'
            ]
        },
        {
            id: 'ipa-vowels',
            title: 'IPA Vowels',
            icon: '🎵',
            level: 'intermediate',
            track: 'pronunciation',
            trackOrder: 2,
            bookSection: 'IPA & công cụ',
            bookLabel: 'IPA vowels',
            pitfallFocus: 'Phát âm',
            keywords: ['ipa vowels', 'monophthong', 'diphthong', 'minimal pairs'],
            summary: 'Nguyên âm là vùng người Việt dễ nhầm nhất vì tiếng Anh phân biệt độ dài, vị trí lưỡi và cả âm đôi.',
            whenToUse: [
                'Phân biệt minimal pairs.',
                'Sửa phát âm các từ quen thuộc nhưng hay đọc theo chữ.',
                'Luyện nghe vì nguyên âm sai làm đổi nghĩa rất mạnh.'
            ],
            formula: [
                'Monophthongs: /i:/ /ɪ/ /e/ /æ/ /ʌ/ /ɑ:/ /ɒ/ /ɔ:/ /ʊ/ /u:/ /ɜ:/ /ə/',
                'Diphthongs: /eɪ/ /aɪ/ /ɔɪ/ /aʊ/ /əʊ/ /ɪə/ /eə/ /ʊə/',
                'Luôn học theo cặp dễ nhầm thay vì học rời.'
            ],
            signals: [
                '/i:/ dài hơn /ɪ/',
                '/æ/ mở rộng miệng hơn /e/',
                '/əʊ/ và /aʊ/ cần trượt âm, không phát một âm đơn'
            ],
            examples: [
                ex('leave /liːv/ vs live /lɪv/', 'Khác /i:/ và /ɪ/.'),
                ex('cat /kæt/ vs cut /kʌt/', 'Khác /æ/ và /ʌ/.')
            ],
            pitfalls: [
                'Đọc mọi nguyên âm theo chữ cái a, e, i, o, u.',
                'Không phân biệt nguyên âm dài-ngắn và diphthongs.'
            ],
            practice: [
                q('Cặp nào khác nhau ở /i:/ và /ɪ/?', 'sheep / ship', 'sheep có /i:/, ship có /ɪ/.'),
                q('Âm nào trong từ "face"?', '/eɪ/', 'face thường có âm đôi /eɪ/.')
            ],
            connections: ['ipa-overview', 'ipa-consonants', 'stress-schwa'],
            checkpoint: [
                'Tôi nhận ra các cặp nguyên âm dễ nhầm.',
                'Tôi biết tiếng Anh có cả nguyên âm đôi, không chỉ âm đơn.'
            ]
        },
        {
            id: 'ipa-consonants',
            title: 'IPA Consonants',
            icon: '🔊',
            level: 'intermediate',
            track: 'pronunciation',
            trackOrder: 3,
            bookSection: 'IPA & công cụ',
            bookLabel: 'IPA consonants',
            pitfallFocus: 'Phát âm',
            keywords: ['ipa consonants', 'th sound', 'final consonants', 'tʃ dʒ'],
            summary: 'Phụ âm khó nhất với người Việt thường là /θ/, /ð/, /ʃ/, /ʒ/, /tʃ/, /dʒ/ và phụ âm cuối.',
            whenToUse: [
                'Luyện phân biệt âm đầu và âm cuối dễ nuốt.',
                'Sửa lỗi think đọc thành tink, this đọc thành dis.',
                'Tăng độ rõ nghĩa trong speaking.'
            ],
            formula: [
                '/θ/ đặt lưỡi nhẹ giữa răng, không phải /t/.',
                '/ð/ là âm hữu thanh của /θ/.',
                'Phụ âm cuối phải được khép/giữ nhẹ, không nhất thiết bật mạnh nhưng không được bỏ hẳn.'
            ],
            signals: [
                'think, thank, theory có /θ/',
                'this, those, mother có /ð/',
                'watch /wɒtʃ/ vs wash /wɒʃ/ khác nhau rõ ở âm cuối'
            ],
            examples: [
                ex('think /θɪŋk/ vs sink /sɪŋk/', 'Âm đầu khác nhau hoàn toàn.'),
                ex('rice /raɪs/ vs rise /raɪz/', 'Phụ âm cuối làm đổi nghĩa.')
            ],
            pitfalls: [
                'Bỏ phụ âm cuối, làm từ bị nghe thành từ khác hoặc không nghe ra.',
                'Đổi /θ/ và /ð/ thành /t/ và /d/ hoàn toàn.'
            ],
            practice: [
                q('Từ nào có /ð/? (think / this / thin)', 'this', 'this có âm /ð/ hữu thanh.'),
                q('Âm cuối của "bags" là gì?', '/z/', 'Nhiều danh từ số nhiều phát âm đuôi là /z/.')
            ],
            connections: ['ipa-overview', 'ipa-vowels', 'past-simple'],
            checkpoint: [
                'Tôi không nuốt hoàn toàn phụ âm cuối nữa.',
                'Tôi phân biệt được /θ/ và /ð/.'
            ]
        },
        {
            id: 'stress-schwa',
            title: 'Stress & Schwa',
            icon: '⚡',
            level: 'advanced',
            track: 'pronunciation',
            trackOrder: 4,
            bookSection: 'IPA & công cụ',
            bookLabel: 'Word stress, sentence stress and schwa',
            pitfallFocus: 'Phát âm',
            keywords: ['stress', 'schwa', 'word stress', 'sentence stress'],
            summary: 'Trọng âm và schwa quyết định nhịp điệu tiếng Anh; phát đúng âm đơn mà sai stress thì câu vẫn rất “không Tây”.',
            whenToUse: [
                'Tra từ mới nhiều âm tiết.',
                'Luyện nói câu tự nhiên hơn bằng sentence stress.',
                'Nghe nối âm, giảm âm và nhận biết function words.'
            ],
            formula: [
                'Primary stress thường được đánh dấu bằng ˈ.',
                'Âm không nhấn hay rơi về schwa /ə/.',
                'Content words thường nhận stress mạnh hơn function words trong câu.'
            ],
            signals: [
                'PREsent (noun) vs preSENT (verb)',
                'PHOtograph -> phoTOGraphy -> photoGRAphic',
                'of, to, for, and thường yếu trong câu nói nhanh'
            ],
            examples: [
                ex('The PREsent was expensive, but they will preSENT it tomorrow.', 'Khác trọng âm thì khác từ loại/nghĩa.'),
                ex('I want to go to the market.', 'want, go, market thường mang stress mạnh hơn to, the.')
            ],
            pitfalls: [
                'Đọc mọi âm tiết mạnh như nhau.',
                'Không giảm function words, khiến câu nói cứng và khó nghe.'
            ],
            practice: [
                q('Từ nào nhấn âm hai? (TAble / arRIVE / DOCtor)', 'arRIVE', 'Động từ hai âm tiết thường hay nhấn âm hai.'),
                q('Âm yếu thường gặp trong about, support là gì?', '/ə/', 'Đó là schwa.')
            ],
            connections: ['ipa-overview', 'ipa-vowels', 'ipa-consonants'],
            checkpoint: [
                'Tôi biết nhìn từ điển để xác định stress.',
                'Tôi hiểu vì sao schwa làm tiếng Anh tự nhiên hơn.'
            ]
        }
    ];
})();
