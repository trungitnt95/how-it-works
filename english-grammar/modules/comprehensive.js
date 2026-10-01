// Bổ sung toàn diện các chủ điểm còn thiếu để phủ trọn chương trình ngữ pháp
// (CEFR A1 → C2). Schema: { icon, title, category, level, connections, simple, detail, advanced }
const grammarComprehensiveData = {

    /* ========== FOUNDATIONS ========== */

    'countable-uncountable': {
        icon: '🔢', title: 'Countable vs Uncountable (Danh Từ Đếm Được và Không Đếm Được) - Beginner', category: 'foundations', level: 'beginner',
        connections: ['nouns-plurals', 'quantifiers', 'articles-determiners'],
        theory: {
            overview: '<strong>Danh từ đếm được</strong> có số ít và số nhiều (<em>a book, two books</em>). <strong>Danh từ không đếm được</strong> không có số nhiều và không đi với a/an (<em>water, music, advice</em>). Xác định sai loại kéo theo sai cả mạo từ, lượng từ và động từ.',
            tables: [
                {
                    title: 'Lượng từ theo loại danh từ',
                    head: ['Loại', 'Lượng từ', 'Ví dụ'],
                    rows: [
                        ['Đếm được', 'many, few, a few, several, a number of', '<em>many ideas, a few books</em>'],
                        ['Không đếm được', 'much, little, a little, a great deal of', '<em>much water, a little time</em>'],
                        ['Cả hai', 'some, any, all, most, no, plenty of, a lot of, enough', '<em>some apples, some milk</em>']
                    ]
                },
                {
                    title: 'Đơn vị để "đếm" danh từ không đếm được',
                    head: ['Đơn vị', 'Ví dụ'],
                    rows: [
                        ['a piece of', 'advice, news, information, furniture, evidence – <em>two pieces of advice</em>'],
                        ['a glass / cup / slice of', 'water, coffee, bread'],
                        ['a bit / sheet / kilo of', 'luck, paper, rice']
                    ]
                }
            ],
            uses: [
                [
                    'Luôn không đếm được (người Việt hay nhầm)',
                    'advice, information, news, furniture, luggage, equipment, homework, traffic, money, bread',
                    ''
                ],
                ['Chia động từ số ít', '', 'The information is useful. The news is good.'],
                [
                    'Danh từ học thuật',
                    'evidence, research, data (thường) không đếm được',
                    'more research, a piece of evidence (không nói researches)'
                ]
            ],
            compare: [
                ['a paper vs paper', 'một bài báo / tờ báo – giấy'],
                ['a coffee vs coffee', 'một ly (<em>Two coffees, please</em>) – cà phê nói chung'],
                ['a glass vs glass', 'cái cốc – thủy tinh'],
                ['a chicken vs chicken', 'con gà – thịt gà'],
                ['a hair vs hair', 'một sợi (<em>a hair in the soup</em>) – tóc nói chung']
            ],
            mistakes: [
                ['an advice, advices', 'a piece of advice, some advice', ''],
                ['many money, an information', 'a lot of money, some information', 'Không dùng many hoặc a/an với danh từ không đếm được.'],
                ['The furniture are new.', 'The furniture is new.', 'Danh từ không đếm được chia số ít.']
            ]
        }
    },

    'quantifiers-deep': {
        icon: '📊', title: 'Quantifiers (Định Lượng) - Beginner', category: 'foundations', level: 'beginner',
        connections: ['countable-uncountable', 'articles-determiners', 'distributives'],
        theory: {
            overview: 'Định lượng cho biết "bao nhiêu" của một danh từ và phải khớp loại danh từ. Chủ điểm này đi sâu vào sắc thái (few / a few), phạm vi (most / most of) và cách chia động từ sau lượng từ.',
            formula: [
                'Chỉ đếm được: many, few, a few, several, a number of – <em>many books, several reasons</em>',
                'Chỉ không đếm được: much, little, a little, a great deal of – <em>much time, a great deal of money</em>',
                'Cả hai: some, any, all, most, no, plenty of, a lot of, enough – <em>a lot of books / a lot of money</em>'
            ],
            uses: [
                [
                    'few / little vs a few / a little',
                    'ít, gần như không có (tiêu cực) – một vài, đủ dùng (tích cực)',
                    'I have few friends (cô đơn) / I have a few friends (đủ vui).'
                ],
                [
                    'most vs most of',
                    'most + N: nói chung; most of + the/my/this + N: nhóm cụ thể',
                    'Most students like music. / Most of the students in my class like music.'
                ],
                [
                    'some / any / no',
                    'some: khẳng định, lời mời; any: phủ định, câu hỏi; no: phủ định mạnh',
                    'I have some. / I don’t have any. / Would you like some tea? / There is no time.'
                ],
                ['much trong câu khẳng định', 'ít tự nhiên; dùng a lot of', 'I have a lot of money. / I don’t have much money.']
            ],
            tables: [
                {
                    title: 'Chia động từ sau lượng từ',
                    head: ['Cụm', 'Động từ'],
                    rows: [
                        ['a number of + N số nhiều', 'số nhiều: <em>a number of students are</em>'],
                        ['the number of + N số nhiều', 'số ít: <em>the number of students is</em>'],
                        ['each / every + N', 'luôn số ít'],
                        [
                            'both / few / many of + N số nhiều',
                            'số nhiều: <em>Many of the students are present. Both of them are right.</em>'
                        ],
                        ['none of + N số nhiều', 'số ít hoặc số nhiều (trang trọng: số ít)']
                    ]
                }
            ],
            mistakes: [
                ['many water', 'much water / a lot of water', ''],
                'Nhầm a number of với the number of.'
            ]
        }
    },

    'demonstratives-deep': {
        icon: '👉', title: 'Demonstratives (Từ Chỉ Định) - Beginner', category: 'foundations', level: 'beginner',
        connections: ['pronouns-possessives', 'articles-determiners', 'anaphoric-reference'],
        theory: {
            overview: 'Từ chỉ định <strong>this / that / these / those</strong> phân theo hai tiêu chí: <strong>khoảng cách</strong> (gần – xa) và <strong>số lượng</strong> (ít – nhiều). Khoảng cách có thể là không gian, thời gian hoặc trong diễn ngôn.',
            tables: [
                {
                    head: ['', 'Gần', 'Xa'],
                    rows: [
                        ['Số ít', 'this', 'that'],
                        ['Số nhiều', 'these', 'those']
                    ]
                }
            ],
            uses: [
                ['Định ngữ (trước danh từ)', '', 'this book, those people'],
                ['Đại từ độc lập (thay danh từ)', '', 'This is mine. That was great.'],
                [
                    'Khoảng cách thời gian, cảm xúc',
                    'this = gần hiện tại; that = đã qua; those days = ngày xưa, xa, hoài niệm',
                    'this morning (sáng nay) / that morning (sáng hôm đó) / In those days, we had no phones.'
                ],
                [
                    'Trong diễn ngôn',
                    '<em>that</em> quay lại điều vừa nói; <em>this</em> giới thiệu điều sắp nói',
                    'He was rude. That made me angry. / Listen to this: …'
                ],
                ['Điện thoại', 'this cho mình, that cho người đầu dây bên kia', 'This is John (speaking). — Who’s that?']
            ],
            compare: [
                ['that chỉ định vs that quan hệ', '<em>That is mine</em> – <em>the book that I read</em>']
            ],
            mistakes: [
                ['this books', 'these books', 'Khớp số ít / số nhiều.'],
                'Dùng this / that mơ hồ trong văn trang trọng – cần antecedent rõ (xem Pronoun Reference).'
            ]
        }
    },

    'anaphoric-reference': {
        icon: '🔗', title: 'Anaphoric Reference (Tham Chiếu Đại Từ) - Intermediate', category: 'foundations', level: 'intermediate',
        connections: ['pronouns-possessives', 'pronoun-reference', 'demonstratives-deep'],
        theory: {
            overview: 'Mỗi đại từ cần một <strong>antecedent</strong> (danh từ nó thay thế) rõ ràng và khớp số. <em>John saw Mary. He waved at her.</em> – John, Mary là antecedent.',
            tables: [
                {
                    head: ['Kiểu tham chiếu', 'Mô tả', 'Ví dụ'],
                    rows: [
                        ['Anaphoric', 'danh từ trước, đại từ quay lại sau', '<em>John said he was tired.</em>'],
                        [
                            'Cataphoric',
                            'đại từ trước, danh từ thật đến sau – tạo chờ đợi, hợp mở đầu truyện',
                            '<em>When she arrived, Mary smiled.</em>'
                        ],
                        ['Generic', 'không nêu cụ thể người làm / nguồn nói', '<em>They say… You never know. It seems…</em>'],
                        [
                            'Singular they',
                            'giới tính chưa biết hoặc không muốn nhấn',
                            '<em>If anyone calls, tell them I’ll ring back.</em>'
                        ]
                    ]
                }
            ],
            sections: [
                {
                    title: '⚠️ 4 vấn đề tham chiếu phổ biến',
                    items: [
                        ['Mơ hồ', 'hai antecedent đều hợp lý: <em>She told her friend she was sick.</em> (ai bệnh?) → viết lại câu'],
                        ['Antecedent quá xa', 'đại từ cách danh từ quá xa khiến người đọc lạc'],
                        [
                            'Không khớp số',
                            '<em>Each student should bring their book</em> nay được chấp nhận rộng rãi (singular they); văn pháp lý cũ vẫn thích <em>his or her</em>'
                        ],
                        ['Không có antecedent', '<em>In the article, it says…</em> ✗ → <em>The article says…</em> ✓']
                    ]
                }
            ],
            compare: [
                ['this / that vs he / she / it', 'this/that có thể quay lại cả một ý; he/she/it thường cần danh từ cụ thể']
            ],
            tip: 'Nếu đại từ (kể cả cataphoric hay generic) khiến người đọc phải dừng lại đoán nghĩa, <strong>lặp lại danh từ</strong> – rõ ràng quan trọng hơn tránh lặp từ.'
        }
    },

    'apposition': {
        icon: '🪢', title: 'Apposition (Đồng Vị Ngữ) - Intermediate', category: 'foundations', level: 'intermediate',
        connections: ['relative-clauses', 'punctuation-deep'],
        theory: {
            overview: 'Đồng vị ngữ là <strong>hai cụm danh từ đứng cạnh nhau cùng chỉ một đối tượng</strong>: <em>My brother Tom is here. Robert Frost, the famous poet, wrote…</em>',
            tables: [
                {
                    head: ['Loại', 'Dấu phẩy', 'Ví dụ'],
                    rows: [
                        [
                            'Restrictive – thông tin bắt buộc để xác định',
                            'không',
                            '<em>The poet Robert Frost</em> (có nhiều nhà thơ); <em>my brother Tom</em>'
                        ],
                        ['Non-restrictive – thông tin thêm', 'có', '<em>Robert Frost, the poet, …; Tom, my brother, …</em>']
                    ],
                    note: 'Quy tắc dấu phẩy giống mệnh đề quan hệ.'
                }
            ],
            uses: [
                [
                    'Báo chí, học thuật',
                    'giới thiệu người / khái niệm gọn gàng, nén thông tin',
                    'Tim Cook, CEO of Apple, said… Bill Gates, founder of Microsoft, …'
                ],
                ['of + danh từ riêng', '', 'the city of Paris'],
                ['Nominalizing apposition', 'cụm to V giải thích nội dung của danh từ', 'His ambition, to become a doctor, was clear.']
            ],
            compare: [
                [
                    'Đồng vị ngữ vs mệnh đề quan hệ',
                    'đồng vị ngữ là cụm danh từ, không có động từ chia thì: <em>Tom, my brother</em> vs <em>Tom, who is my brother</em>'
                ]
            ],
            mistakes: ['Thêm dấu phẩy khi đồng vị ngữ là thông tin bắt buộc.']
        }
    },

    'gender-neutral-grammar': {
        icon: '🧑', title: 'Gender-neutral Grammar (Ngữ Pháp Trung Tính Giới) - Advanced', category: 'foundations', level: 'advanced',
        connections: ['anaphoric-reference', 'pronouns-possessives', 'grammar-registers'],
        theory: {
            overview: 'Tiếng Anh hiện đại ưu tiên cách diễn đạt <strong>không mặc định giới tính</strong>, nhất là trong email công việc, tài liệu công ty, văn bản chính sách và văn học thuật.',
            tables: [
                {
                    head: ['Chiến lược', 'Cách cũ', 'Tự nhiên hơn'],
                    rows: [
                        [
                            'Singular they',
                            'Each employee must submit his or her form.',
                            'Each employee must submit their form. <em>If a student has a question, they should ask the teacher.</em>'
                        ],
                        ['Viết lại ở số nhiều', 'Each customer should check his receipt.', 'Customers should check their receipts.'],
                        [
                            'Danh từ nghề nghiệp trung tính',
                            'chairman, fireman, policeman, stewardess',
                            'chair / chairperson, firefighter, police officer, flight attendant'
                        ]
                    ]
                }
            ],
            uses: [
                ['Singular they + động từ số nhiều', '', 'Someone left their umbrella. They were in a hurry.'],
                [
                    'Đại từ phản thân',
                    '<em>themself</em> có xuất hiện, nhưng <em>themselves</em> an toàn hơn trong kỳ thi và tài liệu chuẩn',
                    ''
                ],
                ['Tôn trọng cách tự xưng', 'khi một người đã nêu rõ đại từ họ dùng, dùng đúng đại từ đó', '']
            ],
            mistakes: [
                'Mặc định dùng <em>he</em> cho một người bất kỳ.',
                'Lặp công thức <em>he or she / he/she</em> ở mọi câu làm văn nặng nề, kém tự nhiên.'
            ]
        }
    },

    'word-formation': {
        icon: '🧬', title: 'Word Formation (Cấu Tạo Từ) - Intermediate', category: 'foundations', level: 'intermediate',
        connections: ['parts-of-speech', 'spelling-rules', 'collocations-pairs'],
        theory: {
            overview: 'Tiếng Anh tạo từ mới bằng 4 cách: <strong>tiền tố, hậu tố, ghép từ, chuyển loại</strong>. Nắm cấu tạo từ giúp chọn đúng dạng từ (word form) – phần hay mất điểm dù đã hiểu nghĩa: <em>success (n) – succeed (v) – successful (adj) – successfully (adv)</em>.',
            formula: ['un + happy + ness → unhappiness · modern + ize → modernize · black + board → blackboard · email (n) → to email (v)'],
            tables: [
                {
                    title: 'Tiền tố (prefix)',
                    head: ['Nhóm nghĩa', 'Tiền tố', 'Ví dụ'],
                    rows: [
                        [
                            'Phủ định',
                            'un-, in-/im-/il-/ir-, dis-, non-, mis-',
                            'unhappy, impossible, illegal, irregular, dislike, non-stop, misunderstand'
                        ],
                        ['Số', 'mono-, bi-, tri-, multi-', 'bilingual, multinational'],
                        ['Mức độ', 'over-, under-, super-, hyper-', 'overwork, underpaid'],
                        ['Thời gian', 'pre- (trước), post- (sau), re- (lại)', 'preview, postwar, rewrite'],
                        ['Vị trí', 'sub-, inter-, trans-, ex-', 'subway, international']
                    ]
                },
                {
                    title: 'Hậu tố (suffix) – đổi từ loại',
                    head: ['Tạo ra', 'Hậu tố', 'Ví dụ'],
                    rows: [
                        [
                            'Danh từ',
                            '-tion, -ment, -ness, -ity, -er/-or, -ist, -ism',
                            'education, development, happiness, ability, teacher, artist'
                        ],
                        ['Động từ', '-ize, -ify, -en, -ate', 'modernize, simplify, widen, activate'],
                        [
                            'Tính từ',
                            '-able, -ful, -less, -ous, -ive, -ish, -al',
                            'readable, useful, careless, famous, active, childish, natural'
                        ],
                        ['Trạng từ', '-ly, -ward(s), -wise', 'quickly, backwards']
                    ]
                },
                {
                    title: 'Đoán dạng từ bằng vị trí',
                    head: ['Vị trí', 'Thường cần', 'Ví dụ'],
                    rows: [
                        ['Sau mạo từ', 'danh từ / tính từ + danh từ', 'a decision, an effective plan'],
                        ['Sau linking verb (be, seem, become)', 'tính từ', 'seems useful'],
                        ['Sau trợ động từ', 'động từ', 'has improved'],
                        ['Bổ nghĩa động từ', 'trạng từ', 'worked efficiently']
                    ]
                }
            ],
            uses: [
                [
                    'Ghép từ (compound)',
                    'viết liền, có gạch nối hoặc viết rời; số + N gạch nối bỏ s',
                    'firefighter, mother-in-law, high school; a five-year-old boy; climate-change policy'
                ],
                ['Chuyển loại (conversion)', 'dùng từ ở từ loại mới mà không thêm phụ tố', 'to email, to Google, to text'],
                [
                    'Đổi trọng âm (stress shift)',
                    'nhiều cặp 2 âm tiết: danh từ nhấn âm đầu, động từ nhấn âm sau',
                    'PREsent (n) – preSENT (v)'
                ]
            ],
            mistakes: [
                'Tự tạo từ không tồn tại bằng cách ghép phụ tố theo cảm tính.',
                ['economic (tiết kiệm)', 'economical', '<em>economic</em> = thuộc kinh tế; <em>economical</em> = tiết kiệm.'],
                'Nghĩ cứ có -ly là trạng từ: <em>friendly, lively, costly</em> là tính từ.'
            ]
        }
    },

    'collocations-pairs': {
        icon: '🤝', title: 'Collocations & Confusing Pairs (Kết Hợp Từ & Cặp Từ Dễ Nhầm) - Intermediate', category: 'foundations', level: 'intermediate',
        connections: ['word-formation', 'phrasal-verbs', 'verb-patterns'],
        theory: {
            overview: '<strong>Collocation</strong> là sự kết hợp từ tự nhiên, quen dùng (<em>make a decision, heavy traffic, strong coffee</em>). Học theo cụm (chunk) giúp nói và viết tự nhiên hơn học từng từ lẻ; không thay từ đồng nghĩa vào collocation tùy ý.',
            tables: [
                {
                    title: 'make vs do',
                    head: ['make (tạo ra, sản sinh)', 'do (công việc, nhiệm vụ)'],
                    rows: [
                        [
                            'a decision, a mistake, noise, an effort, money, coffee, dinner, the bed, friends, a plan',
                            'homework, the laundry, the dishes, business, exercise, the shopping, a favor, your best'
                        ]
                    ]
                },
                {
                    title: 'Cặp từ dễ nhầm',
                    head: ['Cặp', 'Phân biệt', 'Ví dụ'],
                    rows: [
                        ['its / it’s', 'sở hữu / it is, it has', '<em>The dog wagged its tail. It’s raining.</em>'],
                        ['than / then', 'so sánh / sau đó', '<em>better than</em>'],
                        [
                            'affect / effect',
                            'thường là động từ / thường là danh từ',
                            '<em>The weather affects my mood. The weather has an effect on my mood.</em>'
                        ],
                        ['lose / loose', 'mất, thua / lỏng', '<em>lose money, a loose shirt</em>'],
                        ['between / among', '2 đối tượng / 3+ đối tượng', '<em>between you and me, among us all</em>'],
                        ['fewer / less', '+ đếm được / + không đếm được', '<em>fewer books, less water</em>']
                    ]
                }
            ],
            uses: [
                ['Adj + N', '', 'heavy traffic, strong coffee, heavy rain'],
                [
                    'Adv + Adj (trạng từ + tính từ)',
                    'hay gặp trong văn viết',
                    'highly recommended, highly likely, deeply sorry, fully aware'
                ],
                ['V + Adv', '', 'rain heavily, work hard'],
                ['V + giới từ cố định', '', 'depend on, listen to, wait for, agree with, apologize for, complain about'],
                ['V + N (idiom)', '', 'take a chance, break a record, set an example, raise concerns']
            ],
            sections: [
                {
                    title: '🗂️ Collocation theo chủ đề',
                    items: [
                        ['Writing học thuật', 'conduct research, draw a conclusion, reach a consensus, pose a threat, play a crucial role'],
                        ['Công việc', 'meet a deadline, take responsibility, gain experience, launch a project, hold a meeting'],
                        ['Đời sống', 'make friends, catch a bus, have a nap, get dressed, pay by card'],
                        ['Vấn đề xã hội', 'raise awareness, tackle poverty, reduce emissions, break the law']
                    ]
                }
            ],
            mistakes: [
                ['do a decision, make homework', 'make a decision, do homework', ''],
                ['powerful coffee', 'strong coffee', 'Không thay từ đồng nghĩa vào collocation nếu chưa chắc.']
            ],
            tip: 'Học nguyên chunk: nhớ <em>take responsibility for</em>, không chỉ nhớ <em>responsibility</em>.'
        }
    },

    'semantic-prosody': {
        icon: '🌫️', title: 'Semantic Prosody (Sắc Thái Ngữ Nghĩa) - Advanced', category: 'foundations', level: 'advanced',
        connections: ['collocations-pairs', 'phrasal-verbs', 'grammar-registers'],
        theory: {
            overview: '<strong>Semantic prosody</strong> là "màu cảm xúc" một từ mang theo vì nó thường xuất hiện trong ngữ cảnh tích cực, tiêu cực hoặc trung tính. Hai từ gần nghĩa trong từ điển vẫn có thể cho cảm giác rất khác.',
            tables: [
                {
                    head: ['Từ / cụm', 'Prosody thường gặp', 'Ví dụ'],
                    rows: [
                        ['cause', 'tiêu cực', '<em>cause damage, cause problems, cause harm, cause concern</em>'],
                        ['set in', 'tiêu cực', '<em>decay set in, panic set in</em>'],
                        ['bent on', 'thường tiêu cực', '<em>bent on revenge, bent on destroying</em>'],
                        ['provide', 'tích cực / trung tính', '<em>provide support, provide evidence</em>'],
                        ['commitment to', 'tích cực', '<em>a commitment to quality, equality, reform</em>'],
                        ['spark', 'tích cực / trung tính', '<em>spark interest, spark debate</em>']
                    ]
                }
            ],
            uses: [
                [
                    'Chọn đúng sắc thái trong writing',
                    'giọng văn tinh hơn, đọc báo / học thuật chính xác hơn',
                    'trigger concern, pose a threat, deliver benefits'
                ]
            ],
            compare: [
                [
                    'cause improvements vs bring about improvements',
                    'đúng từ điển nhưng lệch sắc thái vì cause hay đi với điều xấu – tự nhiên'
                ]
            ],
            mistakes: ['Xem từ đồng nghĩa là hoán đổi tự do.'],
            advanced: [
                'Prosody không tuyệt đối 100%, nhưng nếu một từ lặp lại nhiều trong ngữ cảnh xấu / tốt, người bản ngữ sẽ cảm nhận được màu đó.'
            ]
        }
    },

    'auxiliary-system': {
        icon: '🛠️', title: 'Auxiliary System (Hệ Thống Trợ Động Từ) - Beginner', category: 'foundations', level: 'beginner',
        connections: ['question-forms', 'negatives', 'present-perfect', 'passive-voice'],
        theory: {
            overview: 'Trợ động từ <strong>be, have, do</strong> (và modal) là khung kỹ thuật của câu: tạo thì, bị động, câu hỏi, phủ định, nhấn mạnh, câu trả lời ngắn. Hiểu hệ thống này nối các mảng tưởng rời rạc (câu hỏi, phủ định, thì, bị động, tỉnh lược) thành một.',
            formula: ['be + V-ing / V3 · have + V3 · do + V nguyên mẫu · modal + V nguyên mẫu'],
            tables: [
                {
                    head: ['Trợ động từ', 'Chức năng', 'Ví dụ'],
                    rows: [
                        ['be', 'thì tiếp diễn, bị động', '<em>She is working. It was built.</em>'],
                        ['have', 'thì hoàn thành', '<em>They have left. She had finished.</em>'],
                        [
                            'do',
                            'câu hỏi, phủ định, nhấn mạnh – khi không có trợ động từ khác (do-support)',
                            '<em>Did she call? She didn’t call. I do agree.</em>'
                        ],
                        ['modal', 'khả năng, nghĩa vụ, suy đoán', '<em>can, must, should, might…</em>']
                    ]
                }
            ],
            sections: [
                {
                    title: '🔑 NICE properties – dấu hiệu nhận ra trợ động từ',
                    items: [
                        ['Negation', 'nhận not trực tiếp: <em>cannot, isn’t, haven’t</em>'],
                        ['Inversion', 'đảo lên trước chủ ngữ khi hỏi: <em>Has she arrived?</em>'],
                        ['Code', 'thay cả cụm động từ trong trả lời ngắn / tỉnh lược: <em>Yes, I do. She can swim and I can too.</em>'],
                        ['Emphasis', 'nhấn mạnh: <em>I do want to help.</em>']
                    ]
                }
            ],
            compare: [
                ['She works → Does she work? → She does not work.', 'không có trợ động từ thì dùng do; động từ chính về nguyên mẫu']
            ],
            mistakes: [
                ['Do you are ready?', 'Are you ready?', 'be tự đảo lên, không cần do.'],
                ['Does she works?', 'Does she work?', 'Không chia động từ chính sau do/does/did.']
            ]
        }
    },

    'verb-types-transitivity': {
        icon: '⚙️', title: 'Verb Types & Transitivity (Loại Động Từ & Ngoại Động/Nội Động) - Intermediate', category: 'foundations', level: 'intermediate',
        connections: ['verbs-overview', 'direct-indirect-objects', 'sentence-patterns-complements', 'verb-complementation'],
        theory: {
            overview: 'Mỗi động từ có <strong>valency</strong> – số thành phần nó cần để câu đủ nghĩa: <em>sleep</em> cần 0 tân ngữ, <em>open</em> cần 1, <em>give</em> thường cần 2.',
            tables: [
                {
                    head: ['Loại', 'Mẫu', 'Ví dụ'],
                    rows: [
                        ['Intransitive', 'S + V', '<em>The child laughed. The baby slept.</em>'],
                        ['Transitive', 'S + V + O', '<em>She wrote a letter.</em>'],
                        ['Ditransitive', 'S + V + IO + DO', '<em>They sent us an email.</em>'],
                        ['Linking', 'S + V + bổ ngữ chủ ngữ (không phải tân ngữ)', '<em>The soup tastes good.</em>'],
                        ['Complex transitive', 'S + V + O + bổ ngữ tân ngữ', '<em>They elected him president.</em> (president mô tả him)']
                    ]
                }
            ],
            uses: [
                ['Ambitransitive', 'dùng được cả có và không có tân ngữ', 'She opened the door. / The door opened.'],
                ['Đổi nghĩa khi đổi transitivity', '', 'run a company (điều hành) vs run fast (chạy)']
            ],
            advanced: [
                'Trong ngữ pháp học thuật, transitivity còn phản ánh cách mệnh đề mã hóa người tham gia và trách nhiệm: <em>The glass broke</em> (không nêu ai) vs <em>She broke the glass</em> (nêu người chịu trách nhiệm).'
            ]
        }
    },

    'sentence-patterns-complements': {
        icon: '🧱', title: 'Basic Sentence Patterns & Complements (Mẫu Câu Cơ Bản & Bổ Ngữ) - Beginner', category: 'foundations', level: 'beginner',
        connections: ['sentence-order', 'verb-types-transitivity', 'subject-complement-object-complement'],
        theory: {
            overview: 'Nắm chắc <strong>5 mẫu câu nền</strong> là kiểm tra được gần như mọi câu tiếng Anh cơ bản. Mấu chốt là phân biệt <strong>tân ngữ</strong>, <strong>bổ ngữ</strong> và <strong>modifier</strong>.',
            tables: [
                {
                    head: ['Mẫu', 'Ví dụ', 'Điểm nhớ'],
                    rows: [
                        ['S + V', '<em>Birds fly.</em>', 'động từ tự đủ nghĩa'],
                        ['S + V + O', '<em>She likes music.</em>', 'tân ngữ nhận hành động'],
                        ['S + V + C', '<em>He became a doctor.</em>', 'bổ ngữ chủ ngữ – mô tả chủ ngữ'],
                        ['S + V + IO + DO', '<em>She gave me advice.</em>', 'người nhận (IO) + vật được nhận (DO)'],
                        ['S + V + O + C', '<em>They made him angry.</em>', 'bổ ngữ tân ngữ – angry mô tả him']
                    ]
                }
            ],
            compare: [
                [
                    'Complement vs modifier',
                    'complement cần để đủ nghĩa (<em>depend on you, aware of this</em>); modifier thêm thông tin, bỏ được (<em>yesterday, in the room, very quickly</em>)'
                ]
            ],
            tip: 'Biết phần nào là bắt buộc giúp không bỏ sót thành phần cần thiết và đọc câu dài chính xác hơn.'
        }
    },

    'subject-complement-object-complement': {
        icon: '🎯', title: 'Subject & Object Complements (Bổ Ngữ Chủ Ngữ & Bổ Ngữ Tân Ngữ) - Intermediate', category: 'structures', level: 'intermediate',
        connections: ['sentence-patterns-complements', 'verbs-overview', 'adjectives-adverbs'],
        theory: {
            overview: 'Bổ ngữ hoàn tất nghĩa cho chủ ngữ hoặc tân ngữ. <strong>Subject complement</strong> mô tả chủ ngữ, đứng sau linking verb: <em>She is kind. He became a teacher.</em> <strong>Object complement</strong> mô tả tân ngữ, đứng sau tân ngữ: <em>They painted the wall blue. We consider him reliable.</em>',
            tables: [
                {
                    head: ['Loại', 'Đi sau', 'Dạng / ví dụ'],
                    rows: [
                        [
                            'Subject complement',
                            'linking verbs: be, become, seem, appear, look, sound, smell, taste, feel, remain, grow, turn',
                            'tính từ, cụm danh từ, cụm giới từ: <em>She is ready / a doctor / in trouble. The milk turned sour.</em>'
                        ],
                        [
                            'Object complement',
                            'make, keep, find, call, consider, elect, paint, leave',
                            'V + O + C: <em>They elected her president. leave the door open, keep me informed, find it difficult</em>'
                        ]
                    ]
                }
            ],
            compare: [
                ['make someone do vs make someone happy', 'V nguyên mẫu (cấu trúc sai khiến) – object complement']
            ],
            mistakes: [
                ['The soup tastes well.', 'The soup tastes good.', 'Sau linking verb dùng tính từ làm bổ ngữ, không dùng trạng từ.']
            ]
        }
    },

    'adjective-complements': {
        icon: '🎨', title: 'Adjective Complements (Bổ Ngữ Của Tính Từ) - Intermediate', category: 'structures', level: 'intermediate',
        connections: ['adjectives-adverbs', 'prepositional-phrases', 'noun-clauses', 'gerunds-infinitives'],
        theory: {
            overview: 'Nhiều tính từ cần phần bổ sung phía sau để đủ nghĩa: <strong>giới từ, to V</strong> hoặc <strong>that-clause</strong>. <em>afraid of spiders · ready to leave · aware that this matters</em>',
            tables: [
                {
                    head: ['Mẫu', 'Ví dụ'],
                    rows: [
                        [
                            'Adj + giới từ + N / V-ing',
                            '<em>interested in music, interested in learning; responsible for, capable of, keen on, aware of</em>'
                        ],
                        ['Adj + to V', '<em>ready to start, likely to fail, easy to understand, eager to help</em>'],
                        ['Adj + that-clause', '<em>sure that he is right, aware that it changed</em>'],
                        ['It + be + adj + that / to (extraposition)', '<em>It is important that we act.</em>']
                    ]
                }
            ],
            uses: [
                [
                    'Tough movement',
                    'chủ ngữ bề mặt thực ra là tân ngữ của động từ phía sau',
                    'This book is easy to read. (= đọc cuốn sách này thì dễ)'
                ],
                ['Extraposition ↔ S + be + adj + to V', '', 'It is likely that she will win. = She is likely to win.']
            ],
            mistakes: [
                ['interested in learn', 'interested in learning', 'Sau giới từ dùng V-ing.']
            ],
            tip: 'Mỗi tính từ có pattern riêng – học theo cụm: <em>responsible for, capable of, keen on, eager to, aware of / that</em>.'
        }
    },

    'adverb-types-position': {
        icon: '🧭', title: 'Adverb Types & Position (Loại Trạng Từ & Vị Trí) - Intermediate', category: 'patterns', level: 'intermediate',
        connections: ['adjectives-adverbs', 'adverb-placement-focus', 'sentence-stress'],
        theory: {
            overview: 'Trạng từ không chỉ là "một cách…": chúng chỉ <strong>cách thức, nơi chốn, thời gian, tần suất, mức độ, thái độ</strong> và <strong>liên kết ý</strong>. Mỗi loại có vị trí ưa dùng riêng. <em>carefully · here · yesterday · often · very · frankly · however</em>',
            tables: [
                {
                    head: ['Loại', 'Vị trí', 'Ví dụ'],
                    rows: [
                        ['Manner (cách thức)', 'cuối câu hoặc sau tân ngữ', '<em>She spoke clearly.</em>'],
                        ['Frequency (tần suất)', 'trước động từ thường, sau be', '<em>She often reads. She is often late.</em>'],
                        ['Degree (mức độ)', 'trước tính từ / trạng từ', '<em>very good, quite slowly</em>'],
                        ['Stance (thái độ)', 'đầu hoặc giữa câu', '<em>Frankly, I disagree.</em>'],
                        ['Linking (liên kết)', 'đầu hoặc giữa câu', '<em>However, this failed.</em>']
                    ]
                }
            ],
            uses: [
                ['Thứ tự cuối câu', 'manner + place + time', 'She sang beautifully at the concert last night.'],
                ['Đưa trạng ngữ lên đầu', 'đóng khung bối cảnh (framing) hoặc tạo đối lập', 'Last night, she sang beautifully.'],
                ['Focusing adverbs', 'only, even, just, almost – đặt sát phần được nhấn, vì vị trí đổi phạm vi nghĩa', '']
            ]
        }
    },

    'preposition-system': {
        icon: '📍', title: 'Preposition System (Hệ Thống Giới Từ) - Intermediate', category: 'foundations', level: 'intermediate',
        connections: ['prepositions', 'prepositional-phrases', 'phrasal-prepositions', 'time-prepositions-deep'],
        theory: {
            overview: 'Giới từ không chỉ là in / on / at: chúng tạo quan hệ về <strong>nơi chốn, thời gian, hướng, nguyên nhân, phương tiện, tác nhân, chủ đề</strong>. <em>at the station · in June · by train · because of rain · with care · about grammar</em>',
            tables: [
                {
                    head: ['Nhóm', 'Giới từ', 'Ví dụ'],
                    rows: [
                        ['Nơi chốn', 'at, in, on, under, between', '<em>at the station</em>'],
                        [
                            'Thời gian (mốc / khoảng)',
                            'at, on, in, by, until, since, for',
                            '<em>at 5, on Monday, in June, by Friday, until noon, since 2020, for two days</em>'
                        ],
                        [
                            'Hướng, đường đi',
                            'to, into, onto, through, across',
                            '<em>walk into the room, go across the street, through the tunnel</em>'
                        ],
                        ['Nguyên nhân', 'because of, due to, from', '<em>because of rain</em>'],
                        ['Phương tiện, tác nhân, công cụ', 'by, with', '<em>by train, written by Tom, cut with a knife</em>']
                    ]
                }
            ],
            compare: [
                [
                    'Complement vs adjunct',
                    'cụm giới từ bắt buộc (<em>depend on you, interested in music</em>) – thêm thông tin, bỏ được (<em>She read in the library</em>)'
                ],
                [
                    'Who are you talking to? vs To whom are you speaking?',
                    'giới từ cuối câu tự nhiên trong văn nói – đưa giới từ lên đầu trang trọng hơn'
                ]
            ]
        }
    },

    'infinitive-purposes': {
        icon: '🎯', title: 'Infinitive of Purpose & Result (Động Từ Nguyên Mẫu Chỉ Mục Đích & Kết Quả) - Beginner', category: 'patterns', level: 'beginner',
        connections: ['gerunds-infinitives', 'result-structures', 'verb-patterns'],
        theory: {
            overview: '<strong>to + V</strong> thường nói <strong>mục đích</strong> – trả lời câu hỏi "để làm gì?": <em>I went to the shop to buy milk. She called me to ask for help.</em>',
            tables: [
                {
                    head: ['Dạng', 'Ví dụ'],
                    rows: [
                        ['in order to / so as to – cùng nghĩa, trang trọng hơn', '<em>She left early in order to catch the train.</em>'],
                        ['Phủ định: in order not to / so as not to + V', '<em>She whispered so as not to wake the baby.</em>'],
                        ['too + adj + to V (quá… để)', '<em>too tired to work</em>'],
                        ['adj + enough + to V (đủ… để)', '<em>old enough to vote</em>']
                    ]
                }
            ],
            compare: [
                [
                    'Mục đích vs kết quả',
                    '<em>He worked hard to pass the exam</em> (mục đích) – <em>He lived to see his grandchildren grow up</em> (kết quả cuối cùng, result infinitive)'
                ]
            ],
            mistakes: [
                ['I came for to help.', 'I came to help. / I came for help.', 'for + danh từ hoặc to + V, không ghép "for to".']
            ]
        }
    },

    'participle-adjectives': {
        icon: '🪶', title: '-ing / -ed Participial Adjectives (Tính Từ Đuôi -ing / -ed) - Intermediate', category: 'foundations', level: 'intermediate',
        connections: ['adjectives-adverbs', 'participle-clauses', 'passive-voice'],
        theory: {
            overview: 'Tính từ đuôi <strong>-ing</strong> mô tả thứ <strong>gây ra</strong> cảm xúc; đuôi <strong>-ed</strong> mô tả người / vật <strong>cảm thấy</strong> cảm xúc. <em>The movie is boring. I am bored.</em>',
            tables: [
                {
                    head: ['-ing (gây ra)', '-ed (cảm thấy)'],
                    rows: [
                        ['interesting', 'interested'],
                        ['exciting', 'excited'],
                        ['confusing', 'confused'],
                        ['frightening', 'frightened'],
                        ['disappointing', 'disappointed'],
                        ['shocking', 'shocked']
                    ]
                }
            ],
            uses: [
                [
                    'Ngoài cảm xúc',
                    '-ing: chủ động / đang diễn ra; -ed / V3: bị động / kết quả',
                    'a developing country, a falling leaf / a broken window, a written report'
                ]
            ],
            mistakes: [
                ['I am boring in class.', 'I am bored in class.', 'Người cảm thấy chán → -ed.']
            ],
            advanced: ['Một số dạng cố định không theo quy tắc -ing / -ed, cần học riêng: <em>a learned professor, a beloved friend</em>.']
        }
    },

    /* ========== TENSES ========== */

    'stative-verbs': {
        icon: '⛰️', title: 'Stative vs Dynamic Verbs (Động Từ Trạng Thái và Động Từ Hành Động) - Intermediate', category: 'tenses', level: 'intermediate',
        connections: ['present-continuous', 'present-perfect-continuous'],
        theory: {
            overview: '<strong>Stative verbs</strong> mô tả trạng thái tĩnh, không "đang diễn ra", nên thường <strong>không dùng dạng tiếp diễn</strong>: <em>I love this song</em> (không phải <em>I am loving</em>). <strong>Dynamic verbs</strong> mô tả hành động và dùng tiếp diễn bình thường.',
            tables: [
                {
                    title: '4 nhóm stative',
                    head: ['Nhóm', 'Động từ'],
                    rows: [
                        ['Cảm xúc, suy nghĩ', 'love, like, hate, want, need, prefer, believe, know, understand, remember, forget, mean'],
                        [
                            'Sở hữu, tồn tại',
                            'have (sở hữu), own, possess, belong, contain, consist, exist – <em>The box contains books. This belongs to me.</em>'
                        ],
                        ['Giác quan', 'see, hear, smell, taste, feel'],
                        ['Đo lường, đánh giá', 'seem, appear, look, sound, weigh, cost, measure']
                    ]
                }
            ],
            sections: [
                {
                    title: '🔄 Khi stative verb dùng được ở tiếp diễn (đổi nghĩa)',
                    table: {
                        head: ['Động từ', 'Nghĩa trạng thái', 'Nghĩa hành động (tiếp diễn)'],
                        rows: [
                            ['have', 'sở hữu – <em>I have a car.</em>', 'ăn uống, trải nghiệm – <em>I’m having lunch.</em>'],
                            ['think', 'cho rằng – <em>I think you’re right.</em>', 'đang cân nhắc – <em>I’m thinking about it.</em>'],
                            ['see', 'nhìn, hiểu – <em>I see the point.</em>', 'gặp, có hẹn – <em>I’m seeing the dentist tomorrow.</em>'],
                            [
                                'taste / smell / feel',
                                'có vị / mùi – <em>The soup tastes great.</em>',
                                'nếm / ngửi / sờ – <em>I’m tasting the soup.</em>'
                            ],
                            ['be', 'bản chất – <em>He is rude.</em>', 'hành vi tạm thời – <em>He is being rude. You’re being silly.</em>']
                        ]
                    }
                }
            ],
            mistakes: [
                ['I am knowing the answer. I’m understanding now.', 'I know the answer. I understand now.', ''],
                'Cấm tiếp diễn tuyệt đối – khi động từ đổi sang nghĩa hành động thì dùng được.'
            ],
            advanced: [
                'Tiếp diễn với stative verb (<em>I’m loving this course</em>) báo hiệu tính tạm thời hoặc cảm xúc mạnh – tự nhiên trong khẩu ngữ, quảng cáo, nhưng không phải mẫu an toàn cho bài thi cơ bản.'
            ]
        }
    },

    'will-vs-going-to': {
        icon: '🎯', title: 'Will vs Be Going To (Will và Be Going To) - Beginner', category: 'tenses', level: 'beginner',
        connections: ['future-simple', 'near-future', 'future-continuous'],
        theory: {
            overview: 'Hai cách nói tương lai phổ biến nhất: <strong>will</strong> cho quyết định ngay lúc nói, dự đoán theo ý kiến, lời hứa, đề nghị; <strong>be going to</strong> cho kế hoạch đã quyết trước và dự đoán có dấu hiệu hiện tại.',
            tables: [
                {
                    head: ['Tình huống', 'Dùng', 'Ví dụ'],
                    rows: [
                        ['Quyết định tức thì', 'will', '<em>The phone rings → I’ll get it!</em>'],
                        ['Kế hoạch có từ trước', 'going to', '<em>I’m going to study abroad next year.</em>'],
                        ['Dự đoán có dấu hiệu', 'going to', '<em>Look at the clouds! It’s going to rain.</em>'],
                        ['Dự đoán theo ý kiến (I think, probably, maybe)', 'will', '<em>I think it will be sunny tomorrow.</em>'],
                        ['Lời hứa', 'will', '<em>I will always love you.</em>'],
                        ['Đề nghị, yêu cầu', 'will', '<em>Will you help me?</em>']
                    ]
                }
            ],
            compare: [
                ['I’ll help you vs I’m going to help him', 'quyết định ngay lúc nói – dự định đã có sẵn']
            ],
            sections: [
                {
                    title: '➕ Các cách nói tương lai khác',
                    items: [
                        ['present continuous', 'kế hoạch đã sắp xếp: <em>I’m meeting her at 5 p.m.</em>'],
                        ['present simple', 'lịch trình: <em>The train leaves at 7.</em>'],
                        ['be about to + V', 'sắp xảy ra ngay: <em>The film is about to start.</em>'],
                        ['be due to + V', 'dự kiến theo lịch: <em>The plane is due to land at 8.</em>'],
                        ['be to + V', 'trang trọng, kế hoạch / mệnh lệnh: <em>The President is to visit Hanoi.</em>']
                    ]
                }
            ],
            mistakes: ['Dùng will cho mọi câu tương lai; dùng going to cho lời hứa / quyết định tức thì khi will tự nhiên hơn.']
        }
    },

    'narrative-present': {
        icon: '📖', title: 'Narrative / Historical Present (Hiện Tại Lịch Sử / Kể Chuyện) - Advanced', category: 'tenses', level: 'advanced',
        connections: ['present-simple', 'sequence-of-tenses'],
        theory: {
            overview: 'Hiện tại kể chuyện (historical / narrative present) dùng <strong>hiện tại đơn để kể chuyện quá khứ</strong>, kéo người nghe vào cảnh như đang xảy ra trước mắt: <em>So I walk in, and he says…</em>',
            uses: [
                ['Tiêu đề tin tức', '', 'President signs new law.'],
                ['Tóm tắt phim, sách, kịch', '', 'Romeo meets Juliet at the ball.'],
                ['Kể chuyện hài, giai thoại', '', 'So I walk in, and he says…'],
                ['Hướng dẫn từng bước', '', 'First, you open the file…'],
                ['Bình luận thể thao trực tiếp', '', 'Messi passes to Suárez, who shoots and scores!'],
                ['Văn học', 'tạo cảm giác "đang xảy ra"', '']
            ],
            mistakes: [
                'Chuyển lung tung giữa quá khứ và hiện tại – chuyển thì phải có chủ ý và nhất quán trong cùng đoạn.',
                'Dùng narrative present khi viết học thuật về lịch sử – dùng thì quá khứ.'
            ]
        }
    },

    'semi-modals': {
        icon: '🎚️', title: 'Semi-modals (Bán Khuyết Thiếu) - Intermediate', category: 'tenses', level: 'intermediate',
        connections: ['modal-verbs', 'modal-perfect', 'used-to'],
        theory: {
            overview: 'Bán khuyết thiếu hoạt động gần giống modal: <strong>had better</strong> (tốt hơn nên – cảnh báo), <strong>would rather</strong> (thà… hơn – sở thích), <strong>need</strong> và <strong>dare</strong> dạng modal. Sau had better / would rather dùng V nguyên mẫu không to.',
            tables: [
                {
                    head: ['Cấu trúc', 'Nghĩa', 'Ví dụ'],
                    rows: [
                        [
                            'had better + V',
                            'tốt hơn nên – mạnh hơn should, ngụ ý hậu quả',
                            '<em>You’d better leave now (or you’ll be late).</em>'
                        ],
                        ['had better not + V', 'phủ định', '<em>You’d better not be late.</em>'],
                        ['would rather + V', 'chính chủ ngữ thích / muốn làm', '<em>I’d rather stay home tonight.</em>'],
                        ['would rather + S + V quá khứ', 'muốn người khác làm khác đi', '<em>I’d rather you didn’t smoke here.</em>'],
                        ['would rather + S + had V3', 'tiếc nuối quá khứ', '<em>I’d rather you had told me earlier.</em>'],
                        ['needn’t + V', 'không cần làm', '<em>You needn’t come early.</em> = You don’t need to come early.'],
                        ['needn’t have + V3', 'đã làm nhưng không cần', '<em>You needn’t have brought a gift.</em>'],
                        ['dare (modal)', 'dám – câu hỏi / phủ định trang trọng, cụm cố định', '<em>Dare she ask? How dare you!</em>']
                    ]
                }
            ],
            uses: [
                ['need dạng modal', 'chỉ trong câu hỏi và phủ định; câu khẳng định dùng need to + V', 'Need I…? / You need to come early.']
            ],
            compare: [
                ['should vs had better', 'should nhẹ hơn; had better nghe như cảnh báo']
            ],
            mistakes: [
                ['You hadn’t better go.', 'You’d better not go.', 'not đặt sau better.'],
                ['I’d rather to stay.', 'I’d rather stay.', 'Không dùng to sau had better / would rather.']
            ]
        }
    },

    /* ========== PATTERNS ========== */

    'yes-no-questions': {
        icon: '❔', title: 'Yes/No Questions (Câu Hỏi Yes/No) - Beginner', category: 'patterns', level: 'beginner',
        connections: ['wh-questions', 'embedded-questions', 'tag-questions'],
        theory: {
            overview: 'Câu hỏi Yes/No đảo <strong>trợ động từ / be / modal</strong> lên trước chủ ngữ; nếu câu không có chúng thì dùng <strong>do / does / did</strong> (do-support). Trong văn nói thường <strong>lên giọng</strong> ở cuối câu.',
            formula: [
                'Aux / Be / Modal + S + V? – <em>Are you tired? Can you swim?</em>',
                'Do / Does / Did + S + V nguyên mẫu? – <em>Do you like coffee?</em>'
            ],
            uses: [
                [
                    'Trả lời ngắn',
                    'Yes / No + đại từ + trợ động từ tương ứng',
                    'Do you…? — Yes, I do. / Are they…? — No, they aren’t. / Have you…? — No, I haven’t.'
                ],
                [
                    'Câu hỏi phủ định',
                    'kỳ vọng câu trả lời "có", ngạc nhiên hoặc phê phán nhẹ',
                    'Don’t you like it? Aren’t you cold? Haven’t you finished yet?'
                ],
                [
                    'Hỏi kinh nghiệm với ever',
                    'đã bao giờ … chưa',
                    'Have you ever been to Paris? — Yes, I have / No, I haven’t / No, never.'
                ]
            ],
            mistakes: [
                ['Do you are ready?', 'Are you ready?', 'be và modal tự đảo lên, không cần do.'],
                ['Like you coffee?', 'Do you like coffee?', ''],
                ['Does she likes it?', 'Does she like it?', 'Không chia động từ chính sau do/does/did.']
            ]
        }
    },

    'wh-questions': {
        icon: '❓', title: 'Wh-Questions (Câu Hỏi Wh) - Beginner', category: 'patterns', level: 'beginner',
        connections: ['yes-no-questions', 'embedded-questions', 'question-forms'],
        theory: {
            overview: 'Câu hỏi Wh- mở đầu bằng từ để hỏi. Nếu từ để hỏi hỏi <strong>tân ngữ / ngữ cảnh</strong> thì đảo trợ động từ; nếu nó là <strong>chủ ngữ</strong> thì không dùng do/did.',
            formula: [
                'Wh + Aux + S + V? – <em>What did you eat? Where do you live?</em>',
                'Wh (= chủ ngữ) + V? – <em>Who broke it?</em> (không phải Who did break it?)'
            ],
            tables: [
                {
                    head: ['Từ', 'Hỏi về', 'Ví dụ'],
                    rows: [
                        ['Who / Whom', 'người – chủ ngữ / tân ngữ (whom trang trọng)', '<em>Who called? Whom did you see?</em>'],
                        ['Whose', 'sở hữu', '<em>Whose book is this?</em>'],
                        ['What', 'vật, sự việc – hỏi chung', '<em>What is this?</em>'],
                        ['Which', 'chọn trong số giới hạn', '<em>Which color do you prefer, red or blue?</em>'],
                        [
                            'Where / When / Why / How',
                            'nơi chốn / thời gian / lý do / cách thức',
                            '<em>Where do you live? When did it happen? Why are you late? How did you do it?</em>'
                        ],
                        ['How + adj / adv', 'mức độ, tần suất', '<em>How tall is he? How often do you exercise?</em>'],
                        ['How much / How many', 'không đếm được / đếm được', '<em>How much money? How many students?</em>']
                    ]
                }
            ],
            compare: [
                ['Who did you meet? vs Who met you?', 'hỏi tân ngữ – hỏi chủ ngữ'],
                [
                    'Giới từ trong câu hỏi',
                    'văn nói để cuối câu (<em>Who are you talking to? What are you looking at?</em>); trang trọng đưa lên đầu (<em>To whom are you talking?</em>)'
                ]
            ],
            mistakes: ['Dùng did khi wh-word là chủ ngữ.', 'Bỏ sót giới từ mà động từ cần (look at, talk to).']
        }
    },

    'embedded-questions': {
        icon: '📦', title: 'Embedded / Indirect Questions (Câu Hỏi Gián Tiếp) - Intermediate', category: 'patterns', level: 'intermediate',
        connections: ['wh-questions', 'reported-speech', 'noun-clauses'],
        theory: {
            overview: 'Câu hỏi gián tiếp là câu hỏi nằm bên trong một câu khác. Nó <strong>giữ trật tự S + V</strong> – không đảo, không do/does/did. Mục đích chính: làm câu hỏi <strong>lịch sự, mềm hơn</strong>.',
            formula: [
                'Yes/No → if / whether + S + V – <em>I wonder if she will come.</em>',
                'Wh- → wh-word + S + V – <em>Do you know where he lives?</em>'
            ],
            uses: [
                ['Cụm dẫn thường gặp', 'ask, wonder, want to know, Can you tell me, Do you know, I’m not sure', ''],
                [
                    'Làm mềm câu hỏi trực tiếp',
                    '',
                    'Where is the toilet? → Could you tell me where the toilet is? / What time is it? → Do you know what time it is? / How much is this? → Would you mind telling me how much this is?'
                ],
                ['Đặt vấn đề trong writing', '', 'This study examines whether…']
            ],
            compare: [
                [
                    'Dấu chấm hỏi',
                    'chỉ dùng khi cả câu là câu hỏi; cả câu là câu trần thuật thì dùng dấu chấm: <em>Could you tell me where he is?</em> vs <em>I wonder where he is.</em>'
                ]
            ],
            mistakes: [
                ['Could you tell me where is the bank?', 'Could you tell me where the bank is?', 'Không đảo trong câu hỏi gián tiếp.'],
                ['It depends on if he agrees.', 'It depends on whether he agrees.', 'Sau giới từ dùng whether.']
            ]
        }
    },

    'hedges-boosters': {
        icon: '🎚️', title: 'Hedges & Boosters (Từ Giảm Nhẹ & Từ Nhấn Mạnh) - Advanced', category: 'patterns', level: 'advanced',
        connections: ['discourse-markers', 'academic-style-grammar', 'politeness-indirectness'],
        theory: {
            overview: '<strong>Hedges</strong> làm mềm phát ngôn, thể hiện sự thận trọng; <strong>boosters</strong> tăng sức khẳng định. <em>He is probably right</em> vs <em>He is absolutely right.</em>',
            tables: [
                {
                    head: ['Loại', 'Từ / cụm', 'Tác dụng'],
                    rows: [
                        [
                            'Hedges',
                            'perhaps, probably, may, might, somewhat, rather, relatively, tend to, seem to, appear to',
                            'giảm độ tuyệt đối: <em>It is somewhat difficult to measure.</em>'
                        ],
                        [
                            'Boosters',
                            'clearly, definitely, certainly, indeed, undoubtedly, extremely, highly',
                            'nhấn chắc chắn: <em>This clearly shows a trend.</em>'
                        ]
                    ]
                }
            ],
            uses: [
                [
                    'Văn học thuật ưa hedges',
                    'tránh overclaim khi bằng chứng chưa đủ mạnh – hedge không phải yếu đuối mà là hiểu giới hạn của dữ liệu',
                    'This may suggest… (thay vì This proves…)'
                ],
                ['Booster đi cùng bằng chứng chắc', '', 'The results clearly indicate…'],
                [
                    'Góp ý trong công việc',
                    'might, perhaps, a bit, I think làm lời góp ý mềm mỏng',
                    'Maybe we could look at this a bit more?'
                ]
            ],
            compare: [
                ['This proves… vs This suggests…', 'khẳng định mạnh – thận trọng hơn rất nhiều']
            ],
            mistakes: [
                ['It seems somewhat rather likely…', 'It seems likely…', 'Quá nhiều hedge làm câu mờ; một hedge phù hợp là đủ.'],
                'Dùng booster khi bằng chứng yếu.',
                'Dùng <em>obviously</em> khi có thể khiến người đọc thấy bị coi thường.'
            ]
        }
    },

    'politeness-indirectness': {
        icon: '🙏', title: 'Politeness & Indirectness (Sự Lịch Sự & Gián Tiếp) - Advanced', category: 'patterns', level: 'advanced',
        connections: ['embedded-questions', 'hedges-boosters', 'modal-verbs'],
        theory: {
            overview: 'Tiếng Anh cần đúng ngữ pháp và cả đúng <strong>mức độ trực tiếp</strong>. Cùng một yêu cầu, đổi cấu trúc là đổi sắc thái – độ lịch sự nằm chủ yếu ở <strong>cấu trúc câu</strong>, không chỉ ở chữ <em>please</em>.',
            tables: [
                {
                    title: 'Thang mức độ',
                    head: ['Mức', 'Ví dụ'],
                    rows: [
                        ['Trực tiếp', '<em>Open the window. Send it now.</em>'],
                        ['Trung tính', '<em>Can you open the window?</em>'],
                        ['Lịch sự', '<em>Could you open the window, please? Could you send it today?</em>'],
                        ['Rất mềm', '<em>I was wondering if you could open the window. I’d appreciate it if you could send it today.</em>']
                    ]
                }
            ],
            sections: [
                {
                    title: '🪶 Cách làm câu mềm hơn',
                    items: [
                        ['Modal quá khứ', 'could, would, might tạo "khoảng cách" lịch sự so với can, will'],
                        ['Câu hỏi gián tiếp', '<em>Could you tell me…? Do you happen to know…?</em>'],
                        ['Quá khứ tiếp diễn / ý định quá khứ', '<em>I was wondering if… I wanted to ask whether…</em>'],
                        ['Downtoners', 'a bit, just, possibly làm nhẹ yêu cầu hoặc lời góp ý: <em>Could you just check this for me?</em>'],
                        ['Would you mind + V-ing', '<em>Would you mind closing the door?</em>'],
                        ['Từ chối gián tiếp (giữ thể diện)', '<em>I’m afraid… I’m not sure that’s possible. I’d rather not.</em>']
                    ]
                }
            ],
            mistakes: [
                ['Send it now, please.', 'Could you send it today?', '<em>please</em> không "cứu" được một câu vốn quá cộc.'],
                'Quá thẳng trong email hay môi trường công việc.',
                'Quá vòng vo khiến yêu cầu mơ hồ.'
            ],
            tip: 'Chọn mức lịch sự theo <strong>quan hệ, vai trò và bối cảnh</strong> (quyền lực, khoảng cách giữa hai bên).'
        }
    },

    'negation-patterns': {
        icon: '🚫', title: 'Negation Patterns (Các Mẫu Phủ Định) - Intermediate', category: 'patterns', level: 'intermediate',
        connections: ['negatives', 'inversion-negative', 'indefinite-pronouns'],
        theory: {
            overview: 'Các mẫu phủ định ngoài <em>not</em>: phủ định mạnh với <strong>no</strong>, đại từ phủ định (<strong>nobody, nothing, never…</strong>), từ gần phủ định (<strong>hardly, scarcely, barely</strong>) và phủ định chuyển (<strong>I don’t think…</strong>). Câu chuẩn chỉ dùng một yếu tố phủ định.',
            tables: [
                {
                    head: ['Mẫu', 'Đặc điểm', 'Ví dụ'],
                    rows: [
                        ['not sau aux / be / modal', '', '<em>don’t, isn’t, can’t, haven’t</em>'],
                        ['no + N', 'mạnh hơn not any', '<em>I have no money / I don’t have any money. There’s no time.</em>'],
                        ['none, nobody, nothing, never, nowhere', 'đi với động từ khẳng định', '<em>Nobody came. I know nothing.</em>'],
                        [
                            'hardly, scarcely, barely',
                            'gần như không; tag khẳng định',
                            '<em>I hardly ever go out. You hardly know him, do you?</em>'
                        ],
                        [
                            'Transferred negation',
                            'think, believe, suppose, expect, imagine, feel',
                            '<em>I don’t think she will come.</em> (tự nhiên hơn <em>I think she won’t come</em>)'
                        ],
                        [
                            'Trạng ngữ phủ định đầu câu (Never, Rarely, Not only…)',
                            'đảo trợ động từ lên trước chủ ngữ',
                            '<em>Never have I seen such a thing.</em>'
                        ]
                    ]
                }
            ],
            mistakes: [
                ['Nobody didn’t come.', 'Nobody came.', ''],
                ['I don’t know nothing.', 'I don’t know anything. / I know nothing.', 'Tránh phủ định kép.'],
                ['I haven’t never been there.', 'I have never been there. / I haven’t ever been there.', ''],
                'Quên đổi polarity trong câu hỏi đuôi.'
            ]
        }
    },

    'information-flow': {
        icon: '➡️', title: 'Information Flow & End-weight (Dòng Thông Tin & Nguyên Tắc Trọng Lượng Cuối Câu) - Advanced', category: 'patterns', level: 'advanced',
        connections: ['anaphoric-reference', 'fronting', 'dummy-it'],
        theory: {
            overview: 'Tiếng Anh thích đặt phần <strong>ngắn, quen, dễ xử lý trước</strong> và phần <strong>dài, mới, nặng ở cuối</strong> câu (end-weight). Đi cùng là end-focus: điểm nhấn thông tin nằm ở cuối câu. <em>It is important to understand the risks of the plan</em> dễ đọc hơn <em>To understand the risks of the plan is important.</em>',
            tables: [
                {
                    title: 'Cách tạo end-weight',
                    head: ['Cách', 'Ví dụ', 'Tác dụng'],
                    rows: [
                        ['Extraposition với it', '<em>It was surprising that nobody complained.</em>', 'đẩy mệnh đề dài ra cuối'],
                        ['Existential there', '<em>There are several reasons why this fails.</em>', 'giới thiệu thông tin mới mượt hơn'],
                        [
                            'Bị động / sắp xếp lại',
                            '<em>The proposal was rejected by the committee we had contacted earlier.</em>',
                            'giữ đầu câu gọn và quen'
                        ],
                        ['Fronting, cleft', '', 'điều khiển tiêu điểm']
                    ]
                }
            ],
            compare: [
                ['End-weight vs end-focus', 'giúp câu dễ xử lý – đặt điểm nhấn ở cuối câu; hai nguyên tắc thường đi cùng nhau']
            ],
            mistakes: [
                'Để chủ ngữ quá dài ở đầu câu – dời phần nặng ra cuối bằng <em>it</em> hoặc <em>there</em>.',
                'Đưa thông tin mới lên đầu khi người đọc chưa có "điểm neo" – thông tin quen trước làm cầu nối cho thông tin mới.'
            ],
            advanced: ['Văn học thuật thường mở câu bằng một khung gọn rồi mới bung phần giải thích dài, nên câu dài vẫn dễ đọc.']
        }
    },

    /* ========== STRUCTURES ========== */

    'inversion-negative': {
        icon: '🔄', title: 'Inversion after Negative Adverbials (Đảo Ngữ Sau Trạng Từ Phủ Định) - Advanced', category: 'structures', level: 'advanced',
        connections: ['inversion', 'mixed-conditionals', 'fronting'],
        theory: {
            overview: 'Khi đưa trạng từ / cụm phủ định lên đầu câu, trợ động từ đảo lên trước chủ ngữ giống câu hỏi. Mang tính <strong>trang trọng, văn học, diễn văn</strong> – không dùng trong văn nói thường.',
            formula: ['Trạng từ phủ định + AUX + S + V – <em>Never have I seen such beauty.</em>'],
            tables: [
                {
                    head: ['Mở đầu', 'Ví dụ'],
                    rows: [
                        ['Never / Rarely / Seldom', '<em>Rarely do we see this.</em>'],
                        ['Hardly / Scarcely … when', '<em>Hardly had I sat down when the phone rang.</em>'],
                        ['No sooner … than', '<em>No sooner had he arrived than she left.</em>'],
                        ['Little (= hoàn toàn không)', '<em>Little did I know that…</em> = tôi hoàn toàn không hề biết rằng…'],
                        [
                            'On no account / Under no circumstances / In no way (= tuyệt đối không)',
                            '<em>Under no circumstances should you open this door.</em>'
                        ],
                        [
                            'Not until / Only when / Only after + mệnh đề',
                            'đảo ở <strong>mệnh đề chính</strong>: <em>Only after she left did I realize the truth.</em>'
                        ],
                        ['Not only … but also', 'chỉ đảo vế đầu: <em>Not only is he kind, but he is also rich.</em>']
                    ]
                }
            ],
            mistakes: [
                ['Only after did she leave I realized.', 'Only after she left did I realize.', 'Đảo ở mệnh đề chính, không ở mệnh đề phụ.'],
                ['Hardly I had arrived…', 'Hardly had I arrived…', 'Không quên trợ động từ.']
            ]
        }
    },

    'fronting': {
        icon: '⬆️', title: 'Fronting (Đưa Lên Đầu Câu) - Advanced', category: 'structures', level: 'advanced',
        connections: ['inversion-negative', 'cleft-sentences', 'do-emphasis'],
        theory: {
            overview: 'Fronting là đưa <strong>tân ngữ, bổ ngữ hoặc trạng ngữ</strong> lên đầu câu để nhấn mạnh, tạo đối lập hoặc tạo mạch văn: <em>That book, I have already read.</em>',
            tables: [
                {
                    head: ['Dạng', 'Đảo ngữ?', 'Ví dụ'],
                    rows: [
                        ['Object fronting', 'không – giữ trật tự thường', '<em>This part, I don’t understand.</em>'],
                        ['Locative inversion (nơi chốn)', 'có', '<em>On the wall hung a painting. In the corner stood an old man.</em>'],
                        [
                            'Complement fronting (be / seem)',
                            'có',
                            '<em>So tired was she that she fell asleep. Such was his fame that…</em>'
                        ]
                    ]
                }
            ],
            uses: [
                ['Tạo mạch văn (cohesion)', 'đặt thông tin cũ, vừa nhắc lên đầu câu để nối ý', ''],
                ['Đối lập', '', 'This part I understand; that part I don’t.'],
                ['Giữ chủ ngữ dài ở cuối', 'với locative inversion, nhịp câu tự nhiên hơn', ''],
                ['Văn phong', 'văn học, báo chí, diễn văn – tạo nhịp, bất ngờ, kịch tính', '']
            ],
            compare: [
                ['I understand this part vs This part, I understand', 'trung tính – nhấn / đối lập'],
                [
                    'Fronting vs cleft',
                    'fronting chỉ đưa thành phần lên đầu; cleft dùng <em>It is X that…</em>: <em>It was this part that I didn’t understand.</em>'
                ]
            ],
            mistakes: [
                'Đảo trợ động từ khi object fronting không cần đảo.',
                'Front mọi thứ khiến câu kịch tính giả, kém rõ – nếu câu thường rõ hơn thì không cần.'
            ]
        }
    },

    'complex-inversion': {
        icon: '🌀', title: 'Complex Inversion (Đảo Ngữ Phức Tạp) - Advanced', category: 'structures', level: 'advanced',
        connections: ['fronting', 'inversion-negative', 'information-flow'],
        theory: {
            overview: 'Khi cụm <strong>địa điểm, phương hướng, chuyển động</strong> đứng đầu câu, động từ có thể đứng trước chủ ngữ (locative inversion). Người đọc thấy bối cảnh trước, rồi nhân vật / vật thể xuất hiện sau – điều khiển "nhịp nhìn" trong văn mô tả và kể chuyện.',
            tables: [
                {
                    head: ['Yếu tố đầu câu', 'Động từ hay gặp', 'Ví dụ'],
                    rows: [
                        [
                            'Into / out of / down / up + nơi chốn',
                            'come, go, walk, run, roll',
                            '<em>Into the room walked the man we had been waiting for. Down the hill rolled the cart.</em>'
                        ],
                        [
                            'On / in / at + nơi chốn',
                            'stand, sit, lie, hang, remain',
                            '<em>On the wall hung a portrait of her grandfather.</em>'
                        ],
                        ['Such / So + bổ ngữ', 'be, seem – sắc thái trang trọng', '<em>Such was his fame that…</em>']
                    ]
                }
            ],
            mistakes: [
                [
                    'On the wall hung it.',
                    'It hung on the wall.',
                    'Tự nhiên nhất khi chủ ngữ là cụm danh từ đầy đủ, thường dài – không dùng với đại từ ngắn.'
                ],
                'Dùng trong hội thoại thường ngày – người bản ngữ chọn trật tự thường: <em>The man walked into the room.</em> Dùng sai chỗ dễ nghe "dịch văn" hoặc quá kịch tính.'
            ]
        }
    },

    'archaisms-modern-grammar': {
        icon: '🏛️', title: 'Archaisms & Literary Grammar (Ngữ Pháp Cổ & Ngữ Pháp Văn Chương) - Advanced', category: 'structures', level: 'advanced',
        connections: ['subjunctive', 'grammar-registers', 'complex-inversion'],
        theory: {
            overview: 'Một số cấu trúc nghe cổ, trang trọng hoặc mang màu văn chương vẫn xuất hiện trong <strong>luật, văn học, diễn văn và thành ngữ cố định</strong>. Người học cần <strong>nhận diện và hiểu</strong> trước, hạn chế chủ động dùng.',
            tables: [
                {
                    head: ['Mẫu', 'Nghĩa', 'Ghi chú'],
                    rows: [
                        [
                            'lest + mệnh đề',
                            'để khỏi, kẻo',
                            'đi với should hoặc V nguyên mẫu: <em>Lest anyone (should) forget, …</em>; văn hiện đại thay bằng so that … not / in case'
                        ],
                        ['be that as it may', 'dù vậy đi nữa', 'nhượng bộ trang trọng: <em>Be that as it may, we must continue.</em>'],
                        ['come what may', 'dù chuyện gì xảy ra', 'cụm cố định'],
                        ['so be it', 'đành vậy, cứ thế đi', 'giọng chấp nhận hoặc thách thức']
                    ]
                }
            ],
            uses: [
                ['Giọng hùng biện, văn chương', 'dùng đúng chỗ tạo màu trang trọng', '']
            ],
            mistakes: ['Lạm dụng khiến văn phong giả cổ; dùng trong email đời thường khi không có chủ ý.']
        }
    },

    'do-emphasis': {
        icon: '💪', title: 'Emphatic Do (Do/Does/Did Nhấn Mạnh) - Intermediate', category: 'structures', level: 'intermediate',
        connections: ['cleft-sentences', 'auxiliary-system', 'question-forms'],
        theory: {
            overview: '<strong>Emphatic do</strong>: thêm do / does / did trước động từ nguyên mẫu để khẳng định mạnh, đáp lại nghi ngờ, tạo đối lập hoặc mời mọc thân thiện. Trong văn nói, do / does / did được <strong>nhấn trọng âm</strong>.',
            formula: ['S + do / does / did + V nguyên mẫu – <em>I do agree. She does know. He did try.</em>'],
            uses: [
                ['Đáp lại nghi ngờ, phản bác', '', '"You don’t love me." — "I DO love you!"'],
                ['Mời mọc, mệnh lệnh thân thiện', '', 'Do come in! Do sit down! Do tell me more.'],
                ['Đối lập hai ý', '', 'She doesn’t sing well, but she does dance beautifully.'],
                [
                    'Văn viết trang trọng',
                    'lịch sự nhưng nhấn quan điểm',
                    'I do believe you are mistaken. The report does highlight several issues.'
                ]
            ],
            compare: [
                ['I agree vs I do agree', 'trung tính – nhấn mạnh / đối lập']
            ],
            mistakes: [
                ['She does knows.', 'She does know.', 'Sau do/does/did dùng V nguyên mẫu.'],
                'Dùng khi không có lý do – chỉ dùng khi thật sự cần nhấn mạnh hoặc đối lập.'
            ]
        }
    },

    'causative-have-get': {
        icon: '🔧', title: 'Causative (Câu Sai Khiến Với Have/Get) - Intermediate', category: 'structures', level: 'intermediate',
        connections: ['passive-voice', 'verb-patterns', 'modal-verbs'],
        theory: {
            overview: 'Câu sai khiến với <strong>have / get</strong>: nhờ, giao việc, thuyết phục ai làm, hoặc có việc được làm cho mình (dịch vụ). Dùng khi kết quả quan trọng hơn người làm. (Tổng quan cả nhóm make / let / have / get: xem Causatives.)',
            tables: [
                {
                    head: ['Mẫu', 'Nghĩa', 'Ví dụ'],
                    rows: [
                        ['have + O + V', 'nhờ, giao việc', '<em>I had John fix my car.</em>'],
                        ['get + O + to V', 'thuyết phục', '<em>I got him to fix it.</em>'],
                        [
                            'have / get + O + V3',
                            'nhờ / thuê làm cho mình',
                            '<em>I had my car repaired. I had my hair cut. I’ll get my hair cut tomorrow.</em>'
                        ],
                        ['have / get + O + V3', 'gặp chuyện xui', '<em>I had my car stolen. I had my wallet stolen.</em>'],
                        ['make / let + O + V', 'bắt / cho phép', '<em>She made me cry. Let me go.</em>'],
                        ['help + O + (to) V', 'giúp', '<em>He helped me (to) finish.</em>']
                    ]
                }
            ],
            sections: [
                {
                    title: '🔄 Bị động',
                    items: [
                        ['make', 'be made <strong>to</strong> + V: <em>She was made to apologize.</em>'],
                        ['let', 'không có bị động trực tiếp – dùng be allowed to: <em>They let us in → We were allowed to go in.</em>']
                    ]
                }
            ],
            compare: [
                ['I repaired my phone vs I had my phone repaired', 'tự sửa – nhờ / dịch vụ sửa'],
                [
                    'have vs get + O + V3',
                    'have trang trọng hơn (<em>I had the report checked</em>); get thân mật hơn (<em>I got it checked</em>)'
                ]
            ],
            mistakes: [
                ['I had my car repair.', 'I had my car repaired.', 'Mẫu này dùng V3 sau tân ngữ, không dùng V nguyên mẫu hay V-ing.']
            ]
        }
    },

    /* ========== MISTAKES & MECHANICS ========== */

    'punctuation-deep': {
        icon: '✏️', title: 'Punctuation Rules (Quy Tắc Dấu Câu) - Beginner', category: 'mistakes', level: 'beginner',
        connections: ['punctuation-capitalization', 'fragments-runons', 'apostrophe-rules'],
        theory: {
            overview: 'Dấu câu giúp người đọc thấy đúng cấu trúc và nhịp câu. Chủ điểm này đi sâu vào <strong>dấu phẩy, chấm phẩy, hai chấm và gạch ngang dài</strong>.',
            tables: [
                {
                    title: 'Dấu phẩy',
                    head: ['Dùng khi', 'Ví dụ'],
                    rows: [
                        ['Liệt kê 3+ mục (dấu phẩy trước and cuối = Oxford comma, tùy chọn)', '<em>red, white, and blue</em>'],
                        ['Sau trạng ngữ / mệnh đề đứng đầu câu', '<em>When I arrived, the meeting had started.</em>'],
                        [
                            'Trước FANBOYS nối hai mệnh đề độc lập (không cần khi nối hai từ)',
                            '<em>I came, and I saw.</em> nhưng <em>bread and butter</em>'
                        ],
                        [
                            'Bao mệnh đề không xác định, đồng vị ngữ, phần chêm',
                            '<em>My brother, who lives in NY, … Bill Gates, founder of Microsoft, said… The book, however, was great.</em>'
                        ]
                    ]
                }
            ],
            sections: [
                {
                    title: '➗ Chấm phẩy, hai chấm, gạch ngang',
                    items: [
                        ['; (semicolon)', 'nối hai mệnh đề độc lập rất gần ý: <em>I came; I saw; I conquered.</em>'],
                        [': (colon)', 'giới thiệu danh sách, giải thích, trích dẫn: <em>I need three things: pen, paper, ink.</em>'],
                        ['— (dash)', 'chêm xen mạnh hoặc đổi nhịp: <em>She told me—and I believed her—that he was guilty.</em>'],
                        [
                            'however nối hai mệnh đề',
                            '<em>I was tired; however, I worked.</em> hoặc <em>I was tired. However, I worked.</em>'
                        ]
                    ]
                }
            ],
            mistakes: [
                ['I came, I saw.', 'I came; I saw. / I came, and I saw.', 'Comma splice: hai mệnh đề độc lập nối chỉ bằng dấu phẩy.'],
                ['I came I saw.', 'I came. I saw.', 'Run-on: viết liền không dấu.'],
                [
                    'The man in the red coat, is my uncle.',
                    'The man in the red coat is my uncle.',
                    'Không đặt dấu phẩy giữa chủ ngữ và động từ khi không có phần chêm.'
                ],
                'Dùng apostrophe để tạo số nhiều thông thường.'
            ],
            tip: 'Sửa comma splice / run-on: thêm dấu chấm, thêm chấm phẩy, thêm liên từ, hoặc đổi một vế thành mệnh đề phụ.'
        }
    },

    'apostrophe-rules': {
        icon: '✒️', title: 'Apostrophe (Dấu Phẩy Trên) - Beginner', category: 'mistakes', level: 'beginner',
        connections: ['punctuation-deep', 'compound-nouns-possessives'],
        theory: {
            overview: 'Dấu nháy đơn (apostrophe) có ba chức năng: <strong>sở hữu số ít</strong> (<em>John’s car</em>), <strong>sở hữu số nhiều</strong> (<em>the boys’ room</em>) và <strong>viết tắt</strong> (<em>don’t, it’s, ’90s, o’clock</em>).',
            tables: [
                {
                    head: ['Trường hợp', 'Quy tắc', 'Ví dụ'],
                    rows: [
                        ['Danh từ số ít', '+ \'s', '<em>the dog’s tail, the student’s book</em>'],
                        ['Số nhiều có s', '+ \'', '<em>the boys’ room, the students’ books, the dogs’ tails</em>'],
                        ['Số nhiều bất quy tắc', '+ \'s', '<em>the children’s toys, men’s shoes</em>'],
                        [
                            'Tên riêng tận cùng s',
                            '\'s hoặc \' – cả hai đều được, chọn một và nhất quán',
                            '<em>James’s book / James’ book</em>'
                        ],
                        ['Sở hữu chung', '\'s ở tên cuối', '<em>John and Mary’s house</em> (chung một nhà)'],
                        ['Sở hữu riêng', '\'s ở mỗi tên', '<em>John’s and Mary’s houses</em> (mỗi người một nhà)'],
                        ['Viết tắt \'s', 'is hoặc has theo ngữ cảnh', '<em>He’s tired</em> (is) / <em>He’s finished</em> (has)']
                    ]
                }
            ],
            mistakes: [
                ['it’s car', 'its car', '<em>its</em> = sở hữu; <em>it’s</em> = it is / it has.'],
                ['who’s book', 'whose book', '<em>whose</em> = của ai; <em>who’s</em> = who is / who has.'],
                ['your’s, her’s, their’s', 'yours, hers, theirs', ''],
                ['Apple’s $1', 'Apples $1', 'Số nhiều thông thường chỉ thêm s, không dùng apostrophe ("greengrocer’s apostrophe").']
            ]
        }
    },

    'capitalization-rules': {
        icon: '🔠', title: 'Capitalization Rules (Quy Tắc Viết Hoa) - Beginner', category: 'mistakes', level: 'beginner',
        connections: ['punctuation-deep'],
        theory: {
            overview: 'Viết hoa: <strong>đầu câu, đại từ I, tên riêng</strong> (người, địa danh, công ty, thương hiệu), <strong>quốc tịch, ngôn ngữ, tôn giáo</strong>, <strong>ngày trong tuần, tháng, ngày lễ</strong>, và các từ chính trong tiêu đề.',
            tables: [
                {
                    head: ['Viết hoa', 'Không viết hoa'],
                    rows: [
                        ['Monday, January, Christmas', 'spring, summer, fall/autumn, winter (trừ khi nhân hóa)'],
                        ['Vietnamese, English, Buddhism', 'math, history, biology (môn học chung – trừ ngôn ngữ)'],
                        ['President Lincoln (chức danh + tên)', 'the president (chức danh chung)'],
                        ['the South (tên vùng)', 'drive north (hướng)']
                    ]
                }
            ],
            sections: [
                {
                    title: '📰 Title Case',
                    items: [
                        'Viết hoa từ đầu, từ cuối và mọi từ chính (danh, động, tính, trạng từ, đại từ).',
                        'Không viết hoa (trừ khi đứng đầu / cuối): a, an, the, liên từ ngắn (and, but, or), giới từ ngắn (in, on, of): <em>The Lord of the Rings; How to Win Friends and Influence People</em>.'
                    ]
                }
            ]
        }
    },

    'numbers-dates': {
        icon: '🔢', title: 'Numbers & Dates (Số Đếm, Số Thứ Tự & Ngày Tháng) - Beginner', category: 'mistakes', level: 'beginner',
        connections: ['numerals'],
        theory: {
            overview: 'Cách viết và đọc <strong>số đếm, số thứ tự, phân số, thập phân, phần trăm, ngày tháng, năm, giờ</strong> – nhiều điểm khác tiếng Việt và khác nhau giữa Anh-Anh, Anh-Mỹ.',
            tables: [
                {
                    head: ['Loại', 'Viết / đọc'],
                    rows: [
                        [
                            'Số đếm / số thứ tự',
                            'one, twenty-one, one hundred / first (1st), second (2nd), third (3rd), twenty-first (21st)'
                        ],
                        [
                            'Phân số',
                            'tử số là số đếm, mẫu số là số thứ tự (thêm s khi tử > 1): 1/2 = a half, 1/3 = a third, 3/4 = three-quarters, 2/5 = two-fifths'
                        ],
                        ['Thập phân', 'đọc bằng point: 0.5 = point five, 3.14 = three point one four'],
                        ['Phần trăm', '25% = twenty-five percent (không thêm s)'],
                        ['Năm', '1999 = nineteen ninety-nine; 2024 = twenty twenty-four / two thousand and twenty-four'],
                        ['Thập kỷ, tuổi', 'the 1990s / the ’90s = the nineties; in his twenties = khoảng 20–29 tuổi'],
                        ['Giờ', '7:30 = half past seven / seven thirty'],
                        ['Số điện thoại', 'đọc từng chữ số, 0 có thể đọc "oh": 555-1234 = five-five-five, one-two-three-four'],
                        ['Phép tính', '2 + 3 = 5 → Two plus three equals five']
                    ]
                },
                {
                    title: 'Ngày tháng',
                    head: ['Biến thể', 'Viết', 'Đọc'],
                    rows: [
                        ['Anh-Anh', '5(th) May 2024', 'the fifth of May'],
                        ['Anh-Mỹ', 'May 5(th), 2024', 'May fifth']
                    ]
                }
            ],
            compare: [
                ['in 2026 vs on 25 April 2026', 'in + năm; on + ngày cụ thể']
            ],
            mistakes: [
                ['3,5 (đọc "three comma five")', '3.5 (three point five)', ''],
                ['a two-hours meeting, a 5-years-old', 'a two-hour meeting, a 5-year-old', 'Tính từ ghép với số không thêm s.']
            ]
        }
    },

    'fragments-runons': {
        icon: '⚠️', title: 'Fragments, Run-ons & Comma Splice (Câu Thiếu, Câu Dính & Lỗi Dấu Phẩy) - Intermediate', category: 'mistakes', level: 'intermediate',
        connections: ['punctuation-deep', 'sentence-types', 'parallel-structure'],
        theory: {
            overview: 'Ba lỗi cấu trúc câu cốt lõi: <strong>fragment</strong> (thiếu chủ ngữ, động từ hoặc mệnh đề chính), <strong>run-on</strong> (hai mệnh đề viết liền không dấu, không từ nối) và <strong>comma splice</strong> (hai mệnh đề nối chỉ bằng dấu phẩy). (Xem thêm Fragments & Run-ons.)',
            tables: [
                {
                    head: ['Lỗi', 'Ví dụ sai', 'Sửa'],
                    rows: [
                        [
                            'Fragment',
                            '<em>Walking down the street.</em> / <em>Although he was tired.</em>',
                            '<em>Although he was tired, he worked.</em> (câu hoàn chỉnh)'
                        ],
                        ['Run-on', '<em>I came I saw.</em>', 'xem 4 cách sửa bên dưới'],
                        ['Comma splice', '<em>I came, I saw.</em>', 'xem 4 cách sửa bên dưới']
                    ]
                }
            ],
            sections: [
                {
                    title: '🛠️ 4 cách sửa run-on / comma splice',
                    items: [
                        'Dấu chấm: <em>I came. I saw.</em>',
                        'Chấm phẩy: <em>I came; I saw.</em>',
                        'Dấu phẩy + FANBOYS (for, and, nor, but, or, yet, so): <em>I came, and I saw.</em>',
                        'Đổi một vế thành mệnh đề phụ: <em>When I came, I saw.</em>'
                    ]
                }
            ],
            uses: [
                [
                    'Fragment có chủ ý',
                    'tạo nhịp, nhấn mạnh trong quảng cáo, văn học, báo chí – không dùng trong văn học thuật',
                    'Best service. Lowest price. Anywhere. / And then? Silence.'
                ]
            ],
            mistakes: ['Để mệnh đề because / although đứng một mình trong văn trang trọng.', 'Kéo câu dài mà không xác định được động từ chính.']
        }
    },

    /* ========== PRONUNCIATION ========== */

    'word-stress': {
        icon: '🎯', title: 'Word Stress (Trọng Âm Từ) - Intermediate', category: 'pronunciation', level: 'intermediate',
        connections: ['ipa-overview', 'sentence-stress', 'stress-schwa'],
        theory: {
            overview: 'Trọng âm từ giúp người nghe nhận ra từ và phân biệt từ loại (<em>REcord</em> n / <em>reCORD</em> v). Các quy tắc dưới đây là <strong>xu hướng chung</strong>, có ngoại lệ.',
            tables: [
                {
                    title: 'Theo từ loại (2 âm tiết)',
                    head: ['Loại', 'Trọng âm', 'Ví dụ'],
                    rows: [
                        ['Danh từ / tính từ', 'âm tiết đầu', 'TAble, HAPpy'],
                        ['Động từ', 'âm tiết cuối', 'deCIDE, beGIN'],
                        ['Cặp danh – động cùng chữ', 'đổi trọng âm', 'PREsent (n) / preSENT (v); CONduct / conDUCT; REcord / reCORD']
                    ]
                },
                {
                    title: 'Theo hậu tố',
                    head: ['Hậu tố', 'Trọng âm', 'Ví dụ'],
                    rows: [
                        ['-tion, -sion, -ic, -ical, -ity', 'âm tiết ngay trước hậu tố', 'naTION, ecoNOmic, cuRIosity'],
                        ['-ate, -ize, -fy (động từ)', 'lùi khoảng hai âm tiết từ cuối', 'COMmunicate, ORganize, IDentify'],
                        ['-ee, -eer, -ese, -oo, -oon', 'rơi vào chính hậu tố', 'employEE, engiNEER, ChiNESE'],
                        ['-ous, -ful, -ly, -ness, -ment', 'không đổi trọng âm gốc', 'HAPpy → HAPpiness']
                    ]
                },
                {
                    title: 'Từ ghép – "Nouns stress first, adjectives stress last"',
                    head: ['Loại', 'Ví dụ'],
                    rows: [
                        ['Danh từ ghép: nhấn trước', 'BLACKboard, GREENhouse, COFfee shop, CREDit card'],
                        ['Tính từ ghép: nhấn sau', 'good-LOOKing, well-KNOWN, old-FASHioned']
                    ]
                }
            ],
            mistakes: ['Nhấn đều mọi âm tiết.', 'Áp một quy tắc cho mọi hậu tố.', 'Học họ từ mà bỏ qua trọng âm thay đổi theo từ loại.']
        }
    },

    'sentence-stress': {
        icon: '📢', title: 'Sentence Stress (Trọng Âm Câu) - Intermediate', category: 'pronunciation', level: 'intermediate',
        connections: ['word-stress', 'connected-speech', 'intonation-patterns'],
        theory: {
            overview: 'Trong câu, <strong>content words</strong> (danh từ, động từ chính, tính từ, trạng từ) được nhấn; <strong>function words</strong> (a, the, and, of, is, can…) đọc yếu, thường thành schwa /ə/. Tiếng Anh <strong>stress-timed</strong>: nhịp đều giữa các trọng âm, từ chức năng bị nén. <em>I WANT to GO to the BEACH toMORrow.</em>',
            tables: [
                {
                    title: 'Weak forms',
                    head: ['Từ', 'Mạnh', 'Yếu'],
                    rows: [
                        ['a', '/eɪ/', '/ə/'],
                        ['the', '/ðiː/', '/ðə/ trước phụ âm (<em>the book</em>); /ði/ trước nguyên âm (<em>the apple</em>)'],
                        ['and', '/ænd/', '/ən/, /n/'],
                        ['of', '/ɒv/', '/əv/, /v/'],
                        ['to / for', '/tuː/ / /fɔː/', '/tə/ / /fə/'],
                        ['can', '/kæn/', '/kən/'],
                        ['have (trợ động từ)', '/hæv/', '/həv/, /əv/ – <em>I should have gone</em> → /ʃəd əv/']
                    ]
                }
            ],
            uses: [
                ['Focus stress', 'nhấn vào thông tin mới', 'Who broke it? — JOHN broke it. / What did John do? — John BROKE it.'],
                [
                    'Contrastive stress',
                    'sửa hoặc đối lập thông tin; lúc này từ chức năng cũng có thể được nhấn',
                    'I want THIS one, not THAT one. I wanted the RED one, not the BLUE one.'
                ]
            ],
            mistakes: ['Đọc mọi từ mạnh như nhau – câu nghe máy móc và khó hiểu.', 'Bỏ qua weak forms khi luyện nghe.']
        }
    },

    'intonation-patterns': {
        icon: '🎵', title: 'Intonation (Ngữ Điệu) - Intermediate', category: 'pronunciation', level: 'intermediate',
        connections: ['sentence-stress', 'tag-questions', 'question-forms'],
        theory: {
            overview: 'Ngữ điệu mang nghĩa: cùng một từ, lên hay xuống giọng có thể đổi hẳn ý. Ba mẫu chính: <strong>xuống ↘</strong>, <strong>lên ↗</strong> và <strong>xuống-lên ↘↗</strong>.',
            tables: [
                {
                    head: ['Mẫu', 'Dùng cho', 'Ví dụ'],
                    rows: [
                        [
                            'Falling ↘',
                            'câu trần thuật, mệnh lệnh, câu hỏi Wh-, kết thúc dứt khoát',
                            '<em>She lives in Hanoi↘. Where do you live↘?</em>'
                        ],
                        ['Rising ↗', 'câu hỏi Yes/No, liệt kê chưa hết, lịch sự nhẹ', '<em>Are you ready↗?</em>'],
                        ['Fall-rise ↘↗', 'nghi ngờ, do dự, tế nhị, ám chỉ, lịch sự', '<em>"Yes…" ↘↗</em> = ngập ngừng']
                    ]
                }
            ],
            uses: [
                ['Liệt kê', 'lên ở các mục đầu, xuống ở mục cuối', 'apples↗, oranges↗, and bananas↘'],
                ['Câu hỏi lựa chọn', 'lên ở phương án đầu, xuống ở cuối – báo hiệu chỉ có hai lựa chọn', 'Tea↗ or coffee↘?'],
                ['Câu hỏi đuôi', '↘ = kỳ vọng đồng ý; ↗ = hỏi thật', 'You’re tired, aren’t you↘? / aren’t you↗?'],
                ['Một từ, nhiều nghĩa', '', '"Yes." ↘ đồng ý dứt khoát / "Yes?" ↗ "có chuyện gì?" / "YES!" cao ↗↘ phấn khích']
            ],
            compare: [
                ['Anh-Anh vs Anh-Mỹ', 'BrE lên xuống rõ hơn; AmE phẳng hơn (khác biệt chung, không tuyệt đối)']
            ],
            mistakes: ['Lên giọng ở mọi câu hỏi – câu hỏi Wh- thường xuống giọng.', 'Nói phẳng đều, kể cả khi cần lịch sự.']
        }
    },

    /* ========== C2 MASTERY SYSTEMS ========== */

    'determiner-system': {
        icon: '🧩', title: 'Determiner System (Hệ Thống Từ Hạn Định) - Advanced', category: 'foundations', level: 'advanced', cefr: 'C2',
        connections: ['articles-determiners', 'quantifiers-deep', 'demonstratives-deep', 'advanced-article-system'],
        theory: {
            overview: 'Determiner là "cửa vào" của cụm danh từ: cho biết danh từ được hiểu thế nào – xác định hay không, bao nhiêu, của ai, gần hay xa. Chúng xếp theo <strong>3 lớp</strong> với trật tự cố định.',
            formula: [
                'Pre-determiner + Central determiner + Post-determiner + Adjective(s) + Noun',
                '<em>all + the + three + important + meetings; all my old friends; such a difficult question</em>'
            ],
            tables: [
                {
                    head: ['Lớp', 'Ví dụ', 'Vai trò'],
                    rows: [
                        [
                            'Pre-determiner',
                            'all, both, half, double, such, what',
                            'đứng ngoài cùng, thêm sắc thái lượng hoặc nhấn mạnh; có thể đứng trước mạo từ: <em>all the time, both the answers, half a loaf, half an hour</em>'
                        ],
                        ['Central determiner', 'a/an, the, this, my, each, every, some, any, no', 'lớp trung tâm – chỉ chọn một'],
                        ['Post-determiner', 'one, two, first, many, several, few', 'số lượng, thứ tự: <em>many books, several ideas</em>']
                    ]
                }
            ],
            uses: [
                ['Zero determiner khái quát', '', 'Books can change lives. (khác The books on the table…)'],
                ['each vs every', 'each nhìn từng cá thể; every nhìn cả tập hợp như một chuỗi', ''],
                ['so + adj + a + N', 'rất trang trọng', 'so difficult a question']
            ],
            mistakes: [
                ['the my book', 'my book / the book', 'Không dùng hai central determiners.'],
                ['my all books', 'all my books', 'Pre-determiner đứng trước central determiner.'],
                ['both those two options', 'both options / those two options', 'Thừa.']
            ],
            advanced: ['Văn pháp lý, học thuật, báo chí dùng determiner để nén nghĩa rất mạnh – nhận ra hệ này giúp tách nhanh các cụm danh từ dài.']
        }
    },

    'advanced-article-system': {
        icon: '🅰️', title: 'Advanced Article System (Hệ Thống Mạo Từ Nâng Cao) - Advanced', category: 'foundations', level: 'advanced', cefr: 'C2',
        connections: ['articles-determiners', 'determiner-system', 'noun-phrase-architecture', 'grammar-registers'],
        theory: {
            overview: 'Ở trình độ cao, mạo từ phản ánh cách người nói <strong>đóng khung</strong> thực thể: mới hay đã biết, đại diện cho cả loại hay một trường hợp, duy nhất trong thế giới hay trong ngữ cảnh.',
            tables: [
                {
                    title: 'Khái quát về một loài',
                    head: ['Cách', 'Sắc thái'],
                    rows: [
                        ['<em>A tiger is a dangerous animal.</em>', 'một cá thể đại diện'],
                        ['<em>The tiger is a dangerous animal.</em>', 'cả loài, kiểu khoa học'],
                        ['<em>Tigers are dangerous animals.</em>', 'khái quát bằng số nhiều']
                    ]
                },
                {
                    title: 'Những vùng hay nhầm',
                    head: ['Kiểu', 'Ví dụ', 'Ý nghĩa'],
                    rows: [
                        [
                            'Lần đầu / lần sau',
                            '<em>I saw a dog. The dog was wet.</em>',
                            'a/an khi người nghe chưa biết; the khi đã xác định'
                        ],
                        [
                            'Duy nhất trong ngữ cảnh',
                            '<em>the sun, the kitchen, the manager</em>',
                            'người nghe hiểu ngay là cái nào dù chưa nhắc'
                        ],
                        [
                            'Zero kiểu institutional',
                            '<em>go to school, be in prison, at university</em>',
                            'nhấn chức năng xã hội, không phải tòa nhà'
                        ],
                        [
                            'Danh từ trừu tượng',
                            '<em>Life is short. / The life he led was difficult.</em>',
                            'zero khi khái quát; the khi được giới hạn'
                        ]
                    ]
                },
                {
                    title: 'Tên địa lý',
                    head: ['Dùng the', 'Không dùng the'],
                    rows: [
                        [
                            'quốc gia số nhiều / có Kingdom, sa mạc, đại dương, dãy núi: <em>the Netherlands, the UK, the Sahara, the Pacific, the Alps</em>',
                            '<em>France, Asia, Mount Everest, Lake Victoria</em>'
                        ]
                    ]
                }
            ],
            uses: [
                ['Zero article', 'khái quát, thể chế, khối lượng nói chung', 'Justice matters. Children need sleep.'],
                ['The tạo "shared knowledge"', 'coi như người đọc đã biết', 'The problem is… The answer lies in…'],
                ['Headline báo chí', 'thường lược mạo từ cho gọn', 'President visits Hanoi.']
            ],
            advanced: ['Ở C2, mạo từ phải đi cùng việc kiểm soát diễn ngôn, không chỉ nhớ quy tắc tách rời.']
        }
    },

    'noun-phrase-architecture': {
        icon: '🏗️', title: 'Noun Phrase Architecture (Cấu Trúc Cụm Danh Từ) - Advanced', category: 'foundations', level: 'advanced', cefr: 'C2',
        connections: ['determiner-system', 'advanced-article-system', 'advanced-relative-clauses', 'apposition'],
        theory: {
            overview: 'Cụm danh từ là một hệ nhiều tầng quanh <strong>head noun</strong>: determiner, premodifier, classifier, complement và postmodifier. Văn học thuật và báo chí nén rất nhiều ý vào cụm danh từ thay vì nhiều câu ngắn.',
            formula: [
                'Determiner + Premodifier(s) + Head noun + Complement / Postmodifier',
                '<em>the + recent international + trade agreement + between the two states</em>'
            ],
            tables: [
                {
                    head: ['Tầng', 'Ví dụ', 'Chức năng'],
                    rows: [
                        ['Determiner', 'the, this, several', 'cách người nghe tiếp cận danh từ'],
                        ['Premodifier', '<em>a complex ethical issue</em>', 'đặc điểm trước head noun'],
                        [
                            'Noun classifier',
                            '<em>language policy debate, trade agreement, climate policy</em>',
                            'danh từ đứng trước làm phân loại, nén thông tin'
                        ],
                        ['Complement', '<em>the decision to leave</em>', 'hoàn chỉnh nghĩa của danh từ'],
                        ['Postmodifier', '<em>the report that was leaked yesterday</em>', 'bổ sung / giới hạn nghĩa sau danh từ']
                    ]
                }
            ],
            sections: [
                {
                    title: '➡️ Các dạng postmodifier',
                    items: [
                        ['Cụm giới từ', '<em>the man in the blue coat</em>'],
                        ['Mệnh đề quan hệ', '<em>the book that changed my mind</em>'],
                        ['Non-finite clause', '<em>students wishing to apply</em>'],
                        ['Đồng vị ngữ / complement', '<em>the fact that…, the idea of…</em>']
                    ]
                }
            ],
            mistakes: [
                'Dồn quá nhiều bổ ngữ phía trước head noun – tiếng Anh tốt cân bằng premodification và postmodification.',
                'Chồng chất chuỗi danh từ khó đọc – chuyển một phần sang mệnh đề hoặc dùng end-weight.'
            ],
            tip: 'Đọc nhanh văn khó: <strong>tìm head noun trước</strong>, rồi mới tách các tầng bổ nghĩa xung quanh.'
        }
    },

    'adverb-placement-focus': {
        icon: '🎯', title: 'Adverb Placement & Focus (Vị Trí Trạng Từ & Trọng Tâm) - Advanced', category: 'patterns', level: 'advanced', cefr: 'C2',
        connections: ['adjectives-adverbs', 'information-flow', 'fronting', 'hedges-boosters'],
        theory: {
            overview: 'Ở trình độ cao, vị trí trạng từ <strong>điều khiển tiêu điểm</strong> của câu, đặc biệt với <em>only, even, just, almost, already, still, too</em>. Đổi chỗ trạng từ là đổi điểm nhấn: <em>Only John apologized. / John only apologized. / John apologized only after the meeting.</em>',
            tables: [
                {
                    head: ['Vị trí', 'Loại thường gặp', 'Ví dụ'],
                    rows: [
                        ['Đầu câu', 'linking, stance, framing', '<em>Frankly, I disagree. However, …</em>'],
                        ['Giữa câu', 'tần suất, khả năng, focusing', '<em>She often forgets. He has already left.</em>'],
                        [
                            'Cuối câu',
                            'cách thức, nơi chốn, thời gian (manner, place, time)',
                            '<em>She spoke quietly in the hallway yesterday.</em>'
                        ]
                    ]
                }
            ],
            sections: [
                {
                    title: '📍 Vị trí giữa câu (mid position)',
                    items: [
                        'Không có trợ động từ: trước động từ chính – <em>She probably knows.</em>',
                        'Có be: sau be – <em>She is probably ready.</em>',
                        'Có trợ động từ: sau trợ động từ đầu tiên – <em>She has probably forgotten.</em>'
                    ]
                }
            ],
            compare: [
                ['I almost told everyone vs I told almost everyone', 'suýt kể – kể gần hết'],
                ['I only asked for help vs I asked only for help', 'phạm vi của only khác nhau'],
                ['Even John passed', 'even đưa yếu tố bất ngờ vào điểm nhấn: ngay cả John cũng đỗ']
            ],
            advanced: ['Ở C2, vị trí trạng từ gắn trực tiếp với thiết kế diễn ngôn, không chỉ là một quy tắc vị trí cứng.']
        }
    },

    'advanced-adverbial-clauses': {
        icon: '🪜', title: 'Advanced Adverbial Clauses (Mệnh Đề Trạng Ngữ Nâng Cao) - Advanced', category: 'patterns', level: 'advanced', cefr: 'C2',
        connections: ['conjunctions', 'conditionals', 'participle-clauses', 'sequence-of-tenses'],
        theory: {
            overview: 'Ở trình độ cao, mệnh đề trạng ngữ vượt khỏi because / when / if: cần xử lý tốt quan hệ <strong>điều kiện, nhượng bộ, cách thức, mức độ</strong> và khung thời gian tinh tế, với connector đúng register.',
            tables: [
                {
                    head: ['Nhóm', 'Connector', 'Ví dụ'],
                    rows: [
                        [
                            'Điều kiện có ràng buộc',
                            'provided (that), providing (that), as long as, unless',
                            '<em>We will support the plan provided that the budget is revised.</em>'
                        ],
                        [
                            'Nhượng bộ, đối chiếu',
                            'although, even though, while, whereas, much as',
                            '<em>Much as I admire her, I cannot agree.</em>'
                        ],
                        ['Cách thức, so sánh giả định', 'as if, as though, as', '<em>He talks as if he knew everything.</em>'],
                        [
                            'Giới hạn mức độ đúng',
                            'insofar as, to the extent that',
                            '<em>Insofar as the data are reliable, the claim stands.</em>'
                        ],
                        [
                            'Thời gian tinh tế',
                            'the moment, by the time, once, now that',
                            '<em>The moment she arrived, we started. Now that you’re here, …</em>'
                        ]
                    ]
                }
            ],
            uses: [
                [
                    'Register',
                    '<em>much as, insofar as</em> trang trọng hơn although – chọn connector đúng register là khác biệt giữa B2 và C2',
                    ''
                ],
                ['Rút gọn khi chủ ngữ trùng', '', 'When (you are) in doubt, ask.'],
                ['Dấu phẩy', 'không phải mệnh đề đứng đầu nào cũng cần dấu phẩy y hệt nhau; tùy độ dài và mức gắn kết', '']
            ],
            mistakes: ['Dịch connector từ tiếng Việt khiến câu lệch sắc thái – đây là nơi rất dễ tạo "câu dịch".']
        }
    },

    'noun-complement-clauses': {
        icon: '📦', title: 'Noun Complement Clauses (Mệnh Đề Bổ Ngữ Danh Từ) - Advanced', category: 'structures', level: 'advanced', cefr: 'C2',
        connections: ['noun-clauses', 'apposition', 'academic-style-grammar', 'advanced-relative-clauses'],
        theory: {
            overview: '<strong>Noun complement clause</strong> hoàn tất nghĩa cho một danh từ trừu tượng (fact, idea, claim, possibility, decision…). Khác noun clause (làm chức năng danh từ trong câu), nó gắn vào một danh từ đứng trước: <em>the idea that grammar shapes thought.</em>',
            tables: [
                {
                    head: ['Danh từ', 'Bổ ngữ đi cùng', 'Ví dụ'],
                    rows: [
                        ['fact, claim, belief, assumption', 'that-clause', '<em>the claim that the data were manipulated</em>'],
                        ['question, issue, uncertainty', 'whether / wh-clause', '<em>the question whether we should proceed</em>'],
                        [
                            'decision, attempt, plan, ability, tendency',
                            'to V',
                            '<em>their decision to withdraw; the decision to postpone the launch</em>'
                        ],
                        ['possibility, chance, risk', 'of + V-ing / that-clause', '<em>the possibility of being ignored</em>']
                    ]
                }
            ],
            compare: [
                [
                    'the claim that he was lying vs the claim that shocked everyone',
                    'that-clause là <strong>nội dung</strong> của claim – that là đại từ quan hệ, mệnh đề <strong>mô tả</strong> claim. Hình thức giống nhau, chức năng khác hẳn'
                ]
            ],
            advanced: [
                'Phổ biến trong văn học thuật vì danh hóa cả một mệnh đề để nén lập luận: <em>the assumption that…, the possibility that…, the tendency to…</em>'
            ]
        }
    },

    'advanced-relative-clauses': {
        icon: '🧬', title: 'Advanced Relative Clauses (Mệnh Đề Quan Hệ Nâng Cao) - Advanced', category: 'structures', level: 'advanced', cefr: 'C2',
        connections: ['relative-clauses', 'reduced-relatives', 'noun-phrase-architecture', 'punctuation-deep'],
        theory: {
            overview: 'Ở trình độ C2, mệnh đề quan hệ không dừng ở who / which / that: cần đọc và viết được <strong>giới từ + đại từ quan hệ, quantifier + of whom/which, sentential which, mệnh đề rút gọn, whose cho vật</strong>.',
            tables: [
                {
                    head: ['Biến thể', 'Ví dụ'],
                    rows: [
                        [
                            'Giới từ + which / whom (trang trọng)',
                            '<em>the proposal to which they objected; the company for which she works</em> (văn nói: <em>the proposal they objected to</em>)'
                        ],
                        [
                            'Quantifier + of whom / which',
                            '<em>the students, many of whom were exhausted, left early; three of whom; none of which</em>'
                        ],
                        [
                            'Sentential which (sentential relative)',
                            '<em>He resigned, which surprised everyone.</em> (which = việc anh ta từ chức)'
                        ],
                        ['Rút gọn', '<em>students applying late; documents submitted yesterday</em>'],
                        ['whose cho vật', '<em>a company whose reputation was damaged</em>']
                    ]
                }
            ],
            compare: [
                ['Restrictive vs non-restrictive', 'xác định danh từ – thêm bình luận / thông tin nền; dấu phẩy đổi chức năng thông tin']
            ],
            mistakes: [
                [
                    'My car, that I bought last year, …',
                    'My car, which I bought last year, …',
                    'Không dùng that sau dấu phẩy – lỗi phổ biến kể cả ở người học trình cao.'
                ],
                'Nối quá nhiều mệnh đề quan hệ thành tầng – chuyển sang đồng vị ngữ hoặc noun complement clause.'
            ]
        }
    },

    'verb-complementation': {
        icon: '🎛️', title: 'Verb Complementation (Bổ Ngữ Của Động Từ) - Advanced', category: 'patterns', level: 'advanced', cefr: 'C2',
        connections: ['gerunds-infinitives', 'causative-have-get', 'subjunctive', 'noun-clauses'],
        theory: {
            overview: 'Verb complementation là hệ thống bổ ngữ đi sau từng động từ: to V, V-ing, V nguyên mẫu, that-clause, wh-clause, O + to V, O + phân từ… Ở C2 cần hiểu <strong>vì sao</strong> mỗi kiểu biểu hiện một quan hệ nghĩa khác nhau. <em>She agreed to leave. She enjoyed reading. We saw him cross the street. They expected him to win.</em>',
            tables: [
                {
                    head: ['Kiểu', 'Ví dụ', 'Lưu ý'],
                    rows: [
                        [
                            'Control verbs',
                            '<em>try to leave, promise to help</em>',
                            'chủ thể của to V hiểu từ mệnh đề chính: <em>She tried to leave</em> – she rời đi'
                        ],
                        [
                            'Raising verbs',
                            '<em>seem to know, appear to be</em>',
                            'chủ ngữ không "làm" hành động seem: <em>He seems to know</em> = <em>It seems that he knows</em>'
                        ],
                        ['Object control', '<em>persuade him to stay</em>', 'tân ngữ (him) là chủ thể của to V'],
                        [
                            'Tri giác / sai khiến',
                            '<em>see him leave / see him leaving / have it repaired</em>',
                            'V nguyên mẫu, V-ing hoặc V3 tùy nghĩa'
                        ],
                        ['Chỉ nhận mệnh đề', '<em>admit that…, wonder whether…</em>', 'không nhận to V']
                    ]
                }
            ],
            sections: [
                {
                    title: '🔀 Đổi bổ ngữ = đổi nghĩa',
                    items: [
                        '<em>remember to do / remember doing</em>',
                        '<em>stop to smoke / stop smoking</em>',
                        '<em>try to open / try opening</em>',
                        '<em>regret to inform / regret telling</em>'
                    ]
                }
            ],
            mistakes: [
                [
                    'suggest to go',
                    'suggest going / suggest that we go',
                    'Ở C2, lỗi thường không còn là lỗi thì mà là chọn sai kiểu bổ ngữ sau động từ.'
                ]
            ]
        }
    },

    'clause-system': {
        icon: '🗺️', title: 'Clause System (Hệ Thống Mệnh Đề) - Advanced', category: 'structures', level: 'advanced', cefr: 'C2',
        connections: ['sentence-types', 'noun-clauses', 'advanced-adverbial-clauses', 'information-flow'],
        theory: {
            overview: 'Ở trình độ rất cao, hãy nhìn câu như một hệ: <strong>matrix clause</strong> (mệnh đề chính, khung của câu) cùng các mệnh đề phụ – finite, non-finite, verbless, nominal, relative, adverbial. Hiểu hệ này giúp phân tích câu dài trong luật, học thuật, báo chí, văn chương.',
            formula: ['Matrix clause + subordinate clause(s) + (non-finite / verbless clause)'],
            tables: [
                {
                    head: ['Loại', 'Ví dụ', 'Chức năng'],
                    rows: [
                        ['Finite', '<em>because he was tired</em>', 'có thì / tình thái rõ'],
                        [
                            'Non-finite (to V, V-ing)',
                            '<em>to finish on time; Having finished early, she left.</em>',
                            'nén thông tin, tránh lặp chủ ngữ'
                        ],
                        ['Verbless', '<em>When ready, press start.</em>', 'cực kỳ nén, hay gặp trong hướng dẫn'],
                        ['Nominal', '<em>What she said shocked me.</em>', 'làm chủ ngữ / tân ngữ / bổ ngữ'],
                        ['Relative', '<em>the book that changed me</em>', 'mở rộng cụm danh từ'],
                        ['Adverbial', '<em>although he agreed</em>', 'điều chỉnh cả mệnh đề chính']
                    ]
                }
            ],
            compare: [
                ['Because he was ready vs When ready', 'finite clause – verbless clause']
            ],
            mistakes: [
                'Để mệnh đề phụ không có mệnh đề chính trong văn trang trọng.',
                'Xâu quá nhiều mệnh đề khiến tham chiếu mơ hồ.',
                'Rút gọn khi làm mất chủ thể logic.'
            ],
            advanced: [
                'Chất lượng câu dài nằm ở việc mỗi mệnh đề có chức năng rõ và tải thông tin hợp lý; C2 biết khi nào nên tách câu để tránh quá tải.',
                'Nối mệnh đề tốt phối hợp subordination, nominalization và end-weight; khi hiểu clause system, các hiện tượng rời rạc (đảo ngữ, rút gọn, extraposition) khớp lại thành một hệ thống.'
            ]
        }
    },

    'advanced-agreement': {
        icon: '⚖️', title: 'Advanced Agreement & Concord (Sự Hòa Hợp Nâng Cao) - Advanced', category: 'foundations', level: 'advanced', cefr: 'C2',
        connections: ['subject-verb-agreement', 'gender-neutral-grammar', 'grammar-registers', 'determiner-system'],
        theory: {
            overview: 'Ở trình độ cao, hòa hợp chủ – vị không chỉ theo hình thức số ít / số nhiều mà còn theo <strong>nghĩa</strong> (notional agreement), <strong>vị trí gần</strong> (proximity), danh từ tập hợp, singular they và khác biệt BrE / AmE.',
            tables: [
                {
                    head: ['Cấu trúc', 'Xu hướng', 'Ví dụ'],
                    rows: [
                        ['Số lượng, thời gian, khoảng cách', 'số ít (hòa hợp theo nghĩa)', '<em>Ten years is a long time.</em>'],
                        ['Tên tác phẩm, tên riêng trích dẫn', 'số ít', '<em>"The Grapes of Wrath" is a classic novel.</em>'],
                        ['More than one + N số ít', 'số ít', '<em>More than one student has failed.</em>'],
                        ['One of + N số nhiều', 'số ít (cả hai mẫu này đều chia số ít)', '<em>One of the students is absent.</em>'],
                        ['A number of / The number of', 'số nhiều / số ít', ''],
                        [
                            'Either … or / neither … nor',
                            'theo danh từ gần nhất',
                            '<em>Either the teachers or the principal is responsible.</em>'
                        ],
                        ['None of + N số nhiều', 'số ít hoặc số nhiều tùy style', ''],
                        [
                            'Danh từ tập hợp',
                            'BrE linh hoạt với số nhiều; AmE thiên số ít',
                            '<em>The team are arguing among themselves</em> (BrE) / <em>The team is winning</em> (AmE)'
                        ],
                        ['Singular they', 'động từ số nhiều; nay là chuẩn tự nhiên', '<em>Someone left their phone.</em>']
                    ]
                }
            ],
            advanced: [
                'Với các "vùng xám" (none, danh từ tập hợp), văn pháp lý, học thuật bảo thủ và style guide từng tổ chức có thể chọn khác nhau. Mức C2 là chọn cách vừa đúng ngữ pháp vừa phù hợp register, style guide và người đọc – đồng thời đọc hiểu được các phong cách cũ hơn.'
            ]
        }
    },

    'spoken-grammar': {
        icon: '🗣️', title: 'Spoken Grammar (Ngữ Pháp Khẩu Ngữ) - Advanced', category: 'patterns', level: 'advanced', cefr: 'C2',
        connections: ['connected-speech', 'tag-questions', 'politeness-indirectness', 'information-flow'],
        theory: {
            overview: 'Ngữ pháp khẩu ngữ <strong>có quy tắc riêng</strong>, không phải bản viết bị rút ngắn hay "sai" – nó thuộc một register khác. Hiểu nó giúp nghe người bản ngữ tốt hơn nhiều, vì họ không nói theo câu textbook hoàn chỉnh.',
            tables: [
                {
                    head: ['Hiện tượng', 'Mô tả', 'Ví dụ'],
                    rows: [
                        ['Ellipsis', 'bỏ phần đã rõ', '<em>(Have you) seen John? (Do you) want some? Looks good to me.</em>'],
                        [
                            'Header',
                            'nêu chủ đề trước rồi mới đến mệnh đề chính',
                            '<em>That book, I haven’t finished it yet. That guy next door, he never sleeps.</em>'
                        ],
                        ['Tail', 'xác định lại đối tượng ở cuối câu', '<em>She’s lovely, your sister.</em>'],
                        ['Discourse markers', 'giữ lượt nói, điều hướng', '<em>well, you know, I mean, actually, right</em>'],
                        ['Vague language', 'làm lời nói mềm, tự nhiên', '<em>kind of, sort of, and stuff like that</em>'],
                        ['Repair and restart', 'tự điều chỉnh giữa chừng', '<em>I was going to… well, maybe not.</em>'],
                        ['Tags, short responses', 'duy trì tương tác', '<em>Nice day, isn’t it?</em>']
                    ]
                }
            ],
            compare: [
                ['Formal writing vs conversation', 'cần mệnh đề đầy đủ – chấp nhận ellipsis']
            ],
            mistakes: ['Bê nguyên spoken grammar vào essay.', 'Lạm dụng từ đệm (fillers) khi nói trang trọng.'],
            tip: 'Dùng spoken grammar khi nói để tự nhiên, và biết rút nó ra khi viết học thuật hoặc chuyên nghiệp.'
        }
    }
};
