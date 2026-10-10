// Bổ sung các chủ điểm ngữ pháp còn thiếu để bao quát chương trình tiêu chuẩn
// (Murphy / Azar / Oxford). Tất cả component theo schema chung:
// { icon, title, category, level, connections, simple, detail, advanced }
const grammarExtrasData = {
    /* ========================= FOUNDATIONS ========================= */

    'existential-there': {
        icon: '📍',
        title: 'There is / There are (Câu Có Chủ Ngữ Giả There) - Beginner',
        category: 'foundations',
        level: 'beginner',
        connections: ['subject-verb-agreement', 'sentence-order', 'quantifiers', 'dummy-it'],
        theory: {
            overview: 'Muốn nói <strong>"có cái gì / ai đó"</strong> (sự tồn tại), tiếng Anh dùng <strong>There + be + N</strong>. <em>There</em> ở đây không có nghĩa "ở đó" mà là <strong>chủ ngữ giả</strong>; động từ chia theo danh từ thật đứng sau be.',
            formula: [
                {
                    label: 'Số ít / không đếm được',
                    pattern: 'There is + N',
                    example: 'There is a book on the table. · There is some milk in the fridge.'
                },
                {
                    label: 'Số nhiều',
                    pattern: 'There are + N số nhiều',
                    example: 'There are many students in the class.'
                }
            ],
            tables: [
                {
                    title: 'Biến đổi theo thì',
                    head: ['Thì', 'Số ít / không đếm được', 'Số nhiều'],
                    rows: [
                        ['Hiện tại', 'There is / There’s', 'There are'],
                        ['Quá khứ', 'There was', 'There were'],
                        ['Hiện tại hoàn thành', 'There has been an accident.', 'There have been many changes.'],
                        ['Tương lai', 'There will be', 'There will be'],
                        [
                            'Modal',
                            'There must / can / should be… – <em>There must be a mistake.</em>',
                            '<em>There should be more chairs.</em>'
                        ]
                    ]
                }
            ],
            uses: [
                [
                    'Câu hỏi và phủ định',
                    '',
                    'Is there a problem? Are there any seats left? There isn’t any sugar. There aren’t enough chairs.'
                ],
                ['Với lượng từ / số lượng', '', 'There are three reasons. There is no time. There are no tickets left.'],
                ['Liệt kê hỗn hợp', 'chia theo danh từ <strong>đầu tiên</strong> sau be', 'There is a pen and two books on the desk.'],
                [
                    'Báo cáo, học thuật',
                    'đưa thông tin mới ra cuối, tránh chủ ngữ nặng đầu câu',
                    'There exists a unique solution. There are many reasons for this.'
                ]
            ],
            compare: [
                ['There is vs It is', 'tồn tại – mô tả / đánh giá. <em>It is a book on the table</em> sai nếu ý là "có một quyển sách"'],
                ['There is a problem vs A problem exists', 'tự nhiên – trang trọng hơn']
            ],
            mistakes: [
                ['There have many people.', 'There are many people.', 'Nghĩa "có" (tồn tại) luôn dùng there + be.'],
                'Chia động từ theo <em>there</em> thay vì theo danh từ thật.'
            ],
            tip: 'Câu tiếng Việt bắt đầu bằng <strong>"Có…"</strong> → gần như luôn là There is / There are: "Có ba lý do…" → <em>There are three reasons…</em>'
        }
    },

    'dummy-it': {
        icon: '💭',
        title: 'Dummy "It" (Chủ Ngữ Giả It) - Intermediate',
        category: 'foundations',
        level: 'intermediate',
        connections: ['existential-there', 'sentence-order', 'noun-clauses', 'cleft-sentences'],
        theory: {
            overview: 'Tiếng Anh không để câu thiếu chủ ngữ. Khi không có chủ thể thật (thời tiết, thời gian, khoảng cách, đánh giá), ta dùng <strong>It giả</strong> – một chủ ngữ ngữ pháp "rỗng", không thay cho danh từ nào.',
            formula: [
                {
                    pattern: 'It + be + (adj) + (to V / that-clause)',
                    example: 'It is important to study.'
                }
            ],
            tables: [
                {
                    head: ['Mục đích', 'Mẫu', 'Ví dụ'],
                    rows: [
                        ['Thời tiết', 'It + be + adj / V-ing', '<em>It is raining. It’s sunny.</em>'],
                        ['Thời gian, ngày, mùa', 'It + be + time/date', '<em>It is 7 o’clock. It’s half past three. It’s Monday.</em>'],
                        ['Khoảng cách', 'It + be + distance', '<em>It is 5 km from here. It’s 10 miles to town.</em>'],
                        [
                            'Đánh giá (extraposition)',
                            'It + be + adj + to V / that-clause',
                            '<em>It is important to study. It’s nice to meet you.</em>'
                        ],
                        ['Nhận định', 'It + seem / appear + that…', '<em>It seems that he’s late.</em>']
                    ]
                }
            ],
            uses: [
                [
                    'Extraposition',
                    'đưa cụm dài ra sau, đầu câu nhẹ hơn – tự nhiên hơn nhiều so với để cụm dài làm chủ ngữ',
                    'It is difficult to learn Japanese. (≈ To learn Japanese is difficult.) It is essential that all members attend.'
                ],
                ['Tân ngữ giả', 'find / make / think + it + adj + to V', 'I find it hard to wake up early.'],
                ['Câu chẻ nhấn mạnh', 'It is/was X who/that… (xem Cleft Sentences)', 'It was John who broke the vase.']
            ],
            compare: [
                [
                    'It giả vs it thật',
                    'it thật thay cho danh từ đã nhắc (<em>I bought a phone. It is fast.</em>); it giả không thay cho gì (<em>It is raining.</em>)'
                ]
            ],
            mistakes: [
                [
                    'It is a good restaurant near here. (ý: có)',
                    'There is a good restaurant near here.',
                    'Dịch "Có…" thành It is; nghĩa tồn tại phải dùng There is/are.'
                ]
            ]
        }
    },

    'reflexive-reciprocal': {
        icon: '🫂',
        title: 'Reflexive & Reciprocal Pronouns (Đại Từ Phản Thân & Đại Từ Tương Hỗ) - Intermediate',
        category: 'foundations',
        level: 'intermediate',
        connections: ['pronouns-possessives', 'verbs-overview', 'parts-of-speech'],
        theory: {
            overview: '<strong>Đại từ phản thân</strong> (myself, yourself…) dùng khi hành động quay lại chính chủ ngữ. <strong>Đại từ tương hỗ</strong> (each other, one another) dùng khi các bên tác động qua lại.',
            formula: [
                {
                    label: 'Phản thân',
                    pattern: 'S + V + reflexive',
                    example: 'I cut myself while cooking.'
                },
                {
                    label: 'Tương hỗ',
                    pattern: 'S + V + each other / one another',
                    example: 'They love each other. · The students helped one another.'
                }
            ],
            tables: [
                {
                    head: ['Số ít', 'Số nhiều'],
                    rows: [
                        ['myself, yourself', 'ourselves, yourselves'],
                        ['himself, herself, itself, oneself', 'themselves']
                    ]
                }
            ],
            uses: [
                ['Tân ngữ phản thân', 'chủ ngữ và tân ngữ là một', 'She introduced herself. She hurt herself.'],
                ['Nhấn mạnh', '"chính tôi"', 'I made the cake myself.'],
                ['by + -self', 'một mình, không ai giúp', 'I live by myself.'],
                ['Cụm cố định', '', 'enjoy yourself, help yourself'],
                ['each other vs one another', 'truyền thống: 2 đối tượng / 3+ đối tượng; hiện đại dùng thay thế nhau', ''],
                ['Sở hữu cách của tương hỗ', '', 'They borrowed each other’s books. one another’s ideas']
            ],
            compare: [
                ['They blamed themselves vs They blamed each other', 'mỗi người tự trách mình – đổ lỗi qua lại'],
                ['They looked at themselves vs They looked at each other', 'mỗi người nhìn chính mình – nhìn nhau']
            ],
            mistakes: [
                [
                    'I wash myself and dress myself every morning.',
                    'I wash and dress every morning.',
                    'Động từ sinh hoạt hằng ngày (wash, shave, dress) thường không cần reflexive.'
                ],
                ['She put the bag next to herself.', 'She put the bag next to her.', 'Sau giới từ chỉ vị trí dùng đại từ tân ngữ.'],
                ['Please contact myself.', 'Please contact me.', 'Không dùng myself thay I/me cho "trang trọng".']
            ],
            tip: '"Tự làm cho chính mình" → reflexive; "qua lại giữa các bên" → reciprocal.'
        }
    },

    'compound-nouns-possessives': {
        icon: '🏷️',
        title: 'Compound Nouns & Possessives (Danh Từ Ghép & Sở Hữu Cách) - Intermediate',
        category: 'foundations',
        level: 'intermediate',
        connections: ['nouns-plurals', 'articles-determiners', 'pronouns-possessives'],
        theory: {
            overview: 'Có ba cách diễn tả "của ai / cái gì": <strong>N’s + N</strong> (John’s car), <strong>N + of + N</strong> (the leg of the table) và <strong>danh từ ghép N + N</strong> (a coffee cup).',
            tables: [
                {
                    head: ['Cấu trúc', 'Dùng cho', 'Ví dụ'],
                    rows: [
                        ['’s', 'người, động vật, thời gian, nhóm, tổ chức', '<em>Mary’s bag, today’s news, the team’s win</em>'],
                        ['s’', 'danh từ số nhiều tận cùng s', '<em>the students’ books</em>'],
                        ['of', 'vật, khái niệm, cụm danh từ dài', '<em>the roof of the house, the cause of the problem</em>'],
                        ['N + N (ghép)', 'quan hệ phân loại, mục đích', '<em>a toothbrush, a bus stop, a car park</em>']
                    ]
                }
            ],
            sections: [
                {
                    title: '🧩 Quy tắc danh từ ghép',
                    items: [
                        'Danh từ thứ nhất là classifier nên giữ <strong>số ít</strong>: <em>a shoe shop</em> (không phải shoes shop), <em>a car park</em>.',
                        'Số nhiều thêm vào <strong>danh từ cuối</strong> (head noun): <em>toothbrushes, bus stops</em>; từ ghép có gạch nối: <em>mothers-in-law</em>.',
                        'Trọng âm thường rơi vào từ đầu: <em>COFFEE cup</em>.',
                        'Cụm đo lường trước danh từ dùng gạch nối và số ít: <em>a ten-minute walk, a two-hour delay</em>.'
                    ]
                }
            ],
            uses: [
                ['Double genitive', '= one of my friends / John’s colleagues', 'a friend of mine, a colleague of John’s'],
                ['Sở hữu nhóm', 'chung một vật – mỗi người một vật', 'Tom and Jerry’s show / Tom’s and Jerry’s cars']
            ],
            mistakes: [
                ['its’ / it’s tail (sở hữu)', 'its tail', 'Sở hữu của it là <em>its</em>; <em>it’s</em> = it is.'],
                ['a cars park', 'a car park', 'Không số nhiều hóa classifier.'],
                ['my brother’s friend’s car', 'the car of my brother’s friend', 'Tránh chuỗi ’s lồng nhau quá dài – đổi sang of.']
            ]
        }
    },

    'distributives': {
        icon: '🔢',
        title: 'Both / Either / Neither / All (Từ Chỉ Số Lượng Phân Phối) - Intermediate',
        category: 'foundations',
        level: 'intermediate',
        connections: ['quantifiers', 'pronouns-possessives', 'subject-verb-agreement', 'negatives'],
        theory: {
            overview: 'Nhóm từ phân phối cho biết số lượng trong một nhóm: <strong>both</strong> (cả hai), <strong>either</strong> (một trong hai), <strong>neither</strong> (không cái nào trong hai), <strong>all</strong> (tất cả, từ 3 trở lên), <strong>each / every</strong> (từng / mọi).',
            tables: [
                {
                    head: ['Từ', 'Đi với', 'Động từ', 'Ví dụ'],
                    rows: [
                        ['both', 'danh từ số nhiều', 'số nhiều', '<em>Both books are useful.</em>'],
                        ['either', 'danh từ số ít', 'số ít', '<em>Either day works for me.</em>'],
                        ['neither', 'danh từ số ít', 'số ít (trang trọng)', '<em>Neither answer is correct.</em>'],
                        ['all', 'danh từ số nhiều / không đếm được', 'theo danh từ', '<em>All students passed.</em>'],
                        ['each / every', 'danh từ số ít', 'số ít', '<em>Each student has a card.</em>']
                    ]
                }
            ],
            uses: [
                [
                    'Có hoặc không có "of"',
                    'trước danh từ có thể bỏ of; trước <strong>đại từ</strong> bắt buộc có of',
                    'both of the boys = both boys; both of them, all of us, either of these'
                ],
                ['Vị trí giữa câu', 'both / all đứng trước động từ thường, sau be / trợ động từ', 'We both agree. They are all ready.'],
                ['Cặp tương hỗ', '', 'both … and, either … or, neither … nor'],
                ['So / Neither + trợ động từ + S', 'trả lời ngắn đồng tình', 'I love coffee. — So do I. / I don’t drink. — Neither do I.']
            ],
            compare: [
                ['each vs every', 'từng cá thể – cả nhóm theo từng thành viên'],
                [
                    'neither vs none',
                    'neither chỉ cho 2 đối tượng; từ 3 trở lên dùng none (văn nói none of them + số nhiều, văn trang trọng số ít)'
                ]
            ],
            mistakes: [
                ['every of the students', 'every student / each of the students', 'Không có "every of".'],
                ['I don’t like neither.', 'I like neither. / I don’t like either.', 'neither đã phủ định, không dùng thêm not.']
            ]
        }
    },

    'indefinite-pronouns': {
        icon: '🎭',
        title: 'Indefinite Pronouns (Đại Từ Bất Định) - Intermediate',
        category: 'foundations',
        level: 'intermediate',
        connections: ['quantifiers', 'pronouns-possessives', 'subject-verb-agreement', 'distributives'],
        theory: {
            overview: 'Đại từ bất định dùng khi không cần (hoặc không biết) chính xác ai / cái gì. Chúng ghép từ <strong>some / any / no / every</strong> + <strong>one / body / thing / where</strong> và đều chia động từ <strong>số ít</strong>.',
            tables: [
                {
                    head: ['', 'người', 'vật', 'nơi chốn'],
                    rows: [
                        ['some-', 'someone / somebody', 'something', 'somewhere'],
                        ['any-', 'anyone / anybody', 'anything', 'anywhere'],
                        ['no-', 'no one / nobody', 'nothing', 'nowhere'],
                        ['every-', 'everyone / everybody', 'everything', 'everywhere']
                    ]
                }
            ],
            uses: [
                ['Chia số ít', '', 'Everyone is here. Nobody knows the answer. Someone is at the door.'],
                [
                    'some- vs any-',
                    'some- trong khẳng định, lời mời, đề nghị; any- trong câu hỏi, phủ định',
                    'Would you like something to drink? Is there anything to eat?'
                ],
                ['any trong câu khẳng định', '= bất kỳ', 'Any student can apply.'],
                ['Đại từ thay thế', 'văn hiện đại dùng they / their', 'Someone left their bag.'],
                ['Tính từ đứng SAU', '', 'something strange, someone important, nothing new']
            ],
            sections: [
                {
                    title: '➕ one, another, the other, others',
                    items: [
                        ['one', 'thay danh từ đếm được số ít: <em>I prefer the red one.</em>'],
                        ['another', 'thêm một (chưa xác định): <em>Have another cookie.</em>'],
                        ['the other / the others', 'cái / những cái còn lại: <em>on one hand… on the other hand</em>'],
                        ['others', 'những cái / người khác: <em>Some like tea, others like coffee.</em>']
                    ]
                }
            ],
            compare: [
                ['I don’t know anything vs I know nothing', 'cùng nghĩa, câu sau nhấn mạnh hơn (no = not any)']
            ],
            mistakes: [
                ['I don’t know nothing.', 'I don’t know anything.', 'Tránh phủ định kép.']
            ]
        }
    },

    'phrasal-prepositions': {
        icon: '📍',
        title: 'Phrasal Prepositions (Cụm Giới Từ Kép) - Intermediate',
        category: 'foundations',
        level: 'intermediate',
        connections: ['prepositions', 'conjunctions', 'discourse-markers'],
        theory: {
            overview: 'Ngoài giới từ đơn, tiếng Anh có nhiều <strong>cụm giới từ</strong> 2–3 từ chỉ vị trí, nguyên nhân, tham chiếu, tương phản. Sau cụm giới từ luôn là <strong>danh từ / V-ing</strong>, không phải mệnh đề.',
            tables: [
                {
                    head: ['Nhóm', 'Cụm', 'Ví dụ'],
                    rows: [
                        [
                            'Vị trí',
                            'in front of, next to, on top of, in the middle of, far from',
                            '<em>The cat is on top of the wardrobe.</em>'
                        ],
                        [
                            'Nguyên nhân',
                            'because of, due to, owing to, thanks to, as a result of',
                            '<em>The flight was cancelled due to fog.</em>'
                        ],
                        [
                            'Tham chiếu, dẫn nguồn',
                            'according to, in accordance with, with regard to',
                            '<em>According to the report, sales went up.</em>'
                        ],
                        [
                            'Tương phản, loại trừ',
                            'in spite of, despite, instead of, apart from',
                            '<em>In spite of the cost, we bought it.</em>'
                        ],
                        ['Thêm ý', 'in addition to, besides', ''],
                        ['Mục đích', 'in order to, so as to, for the sake of', '<em>She left early in order to catch the bus.</em>']
                    ]
                }
            ],
            compare: [
                [
                    'because of vs because',
                    'because of + danh từ (<em>because of the rain</em>); because + mệnh đề (<em>because it rained</em>)'
                ],
                [
                    'despite / in spite of vs although / though',
                    '+ danh từ / V-ing (<em>despite the rain</em>) – + mệnh đề (<em>although it rained</em>)'
                ],
                [
                    'due to',
                    'văn trang trọng đặt sau động từ be: <em>The delay was due to traffic.</em>; because of / owing to linh hoạt hơn'
                ]
            ],
            mistakes: [
                ['because of it rained', 'because it rained / because of the rain', ''],
                ['despite of the rain', 'despite the rain / in spite of the rain', '']
            ],
            tip: 'Dịch "vì": sau "vì" là <strong>danh từ</strong> → because of / due to; là <strong>mệnh đề</strong> → because.'
        }
    },

    'adjective-order': {
        icon: '🎨',
        title: 'Adjective Order (Trật Tự Tính Từ) - Intermediate',
        category: 'foundations',
        level: 'intermediate',
        connections: ['adjectives-adverbs', 'comparisons', 'sentence-order'],
        theory: {
            overview: 'Khi nhiều tính từ đứng trước một danh từ, tiếng Anh có trật tự gần như cố định – <strong>OSASCOMP</strong>. Sai trật tự nghe rất "lạ" với người bản xứ.',
            formula: [
                {
                    label: 'Thứ tự',
                    pattern: 'Opinion → Size → Age → Shape → Colour → Origin → Material → Purpose → NOUN'
                },
                {
                    label: 'Ví dụ',
                    example: 'a beautiful big new white wooden table · a lovely little old round black Italian leather riding boot'
                }
            ],
            tables: [
                {
                    head: ['#', 'Loại', 'Ví dụ'],
                    rows: [
                        ['1', 'Opinion (ý kiến, chủ quan)', 'nice, ugly, lovely, terrible'],
                        ['2', 'Size', 'big, small, tiny, huge'],
                        ['3', 'Age', 'old, young, new, ancient'],
                        ['4', 'Shape', 'round, square, flat'],
                        ['5', 'Colour', 'red, blue, dark'],
                        ['6', 'Origin', 'Vietnamese, French, Asian'],
                        ['7', 'Material', 'wooden, metal, silk'],
                        ['8', 'Purpose / classifier – sát danh từ nhất', 'riding (boot), sleeping (bag), running (shoes)']
                    ]
                }
            ],
            uses: [
                ['Tính từ cùng nhóm (đổi thứ tự được)', 'ngăn bằng dấu phẩy hoặc and', 'a tired, hungry traveller'],
                ['Tính từ phân loại (origin, material, purpose)', 'đứng sát danh từ, không tách phẩy', 'a French wooden table']
            ],
            compare: [
                ['a beautiful old Italian car vs an Italian old beautiful car', 'tự nhiên – sai trật tự']
            ],
            mistakes: ['Nhồi quá nhiều tính từ – hiếm khi quá 3 tính từ liền nhau; nếu dài hãy tách bằng dấu phẩy hoặc mệnh đề quan hệ.'],
            advanced: ['Văn báo chí có thể đưa opinion mạnh lên đầu để gây ấn tượng: <em>"Stunning new design"</em>.'],
            tip: 'Nhớ chuỗi <strong>OSASCOMP</strong>.'
        }
    },

    'spelling-rules': {
        icon: '✏️',
        title: 'Spelling Rules (Quy Tắc Chính Tả) - Beginner',
        category: 'foundations',
        level: 'beginner',
        connections: ['present-simple', 'past-simple', 'present-continuous', 'nouns-plurals'],
        theory: {
            overview: 'Khi thêm <strong>-s, -ed, -ing, -er, -est</strong>, tiếng Anh có quy tắc cụ thể về bỏ e, đổi y → i, gấp đôi phụ âm. Nắm các nhóm dưới đây là tránh được phần lớn lỗi chính tả.',
            tables: [
                {
                    head: ['Quy tắc', 'Ví dụ'],
                    rows: [
                        [
                            'e câm cuối → bỏ e trước -ing / -ed',
                            'make → making, love → loved, write → writing (nhưng see → seeing: không phải e câm)'
                        ],
                        ['ie → y trước -ing', 'die → dying, lie → lying'],
                        ['phụ âm + y → i trước -es / -ed / -er / -est', 'study → studies / studied, happy → happier'],
                        ['nguyên âm + y → giữ nguyên', 'play → plays / played, enjoy → enjoyed'],
                        ['1 âm tiết, 1 nguyên âm + 1 phụ âm cuối (CVC) → gấp đôi phụ âm', 'stop → stopping, big → bigger, plan → planned'],
                        ['tận cùng c → thêm k trước -ing / -ed', 'panic → panicking / panicked, picnic → picnicked']
                    ]
                }
            ],
            sections: [
                {
                    title: '🔁 Gấp đôi phụ âm ở từ nhiều âm tiết',
                    items: [
                        'Chỉ gấp đôi khi <strong>trọng âm rơi vào âm tiết cuối</strong>: <em>beGIN → beginning, preFER → preferred</em>.',
                        'Không gấp đôi khi trọng âm không ở cuối: <em>OPen → opening, VIsit → visited</em>.',
                        'Không gấp đôi w, x, y: <em>fix → fixing, snow → snowing, play → playing</em>.',
                        'Anh-Anh (BrE) <em>travelling</em>, Anh-Mỹ (AmE) <em>traveling</em> – đều đúng, chọn một và nhất quán.'
                    ]
                },
                {
                    title: '📦 Số nhiều danh từ',
                    items: [
                        's, x, sh, ch → -es: <em>buses, boxes</em>; tận cùng o thường thêm -es: <em>potatoes, tomatoes, heroes</em> (nhưng <em>photos, pianos</em> chỉ thêm s).',
                        'f / fe → ves: <em>leaf → leaves, knife → knives</em>.',
                        'Bất quy tắc: <em>man → men, child → children, foot → feet, mouse → mice</em>.'
                    ]
                }
            ],
            tip: 'Đọc to từ lên – nếu trọng âm rơi cuối từ, gần như chắc chắn phải gấp đôi phụ âm.'
        }
    },

    /* ========================= TENSES / VERB SYSTEM ========================= */

    'have-got': {
        icon: '🤝',
        title: 'Have / Have got (Have và Have Got) - Beginner',
        category: 'tenses',
        level: 'beginner',
        connections: ['present-simple', 'present-perfect', 'modal-verbs'],
        theory: {
            overview: '<strong>Have</strong> và <strong>have got</strong> đều nghĩa là "có" (sở hữu, quan hệ, bệnh tật, đặc điểm). Khác biệt chủ yếu ở <strong>biến thể và văn phong</strong>: have got phổ biến ở Anh-Anh, văn nói; have chuẩn ở Anh-Mỹ và văn viết trang trọng.',
            tables: [
                {
                    head: ['', 'have (động từ thường)', 'have got'],
                    rows: [
                        ['Khẳng định', 'I have a dog. She has long hair.', 'I’ve got a dog. She’s got long hair.'],
                        ['Phủ định', 'I don’t have a dog.', 'I haven’t got a dog.'],
                        ['Câu hỏi', 'Do you have a dog?', 'Have you got a dog?'],
                        ['Quá khứ', 'I had a dog.', '— (không dùng "had got" cho sở hữu)']
                    ]
                }
            ],
            uses: [
                [
                    'Chỉ dùng have (không dùng have got)',
                    'nghĩa hành động: have breakfast, have a meeting, have lunch; thì quá khứ; văn trang trọng, học thuật',
                    'I have breakfast at 7.'
                ],
                [
                    'have to vs have got to (nghĩa vụ)',
                    'have to: nghĩa vụ chung, lặp lại; have got to: ngay lúc này, văn nói. Quá khứ chỉ dùng had to',
                    'I have to work on Saturdays. I’ve got to go now! I had to leave early.'
                ]
            ],
            compare: [
                [
                    'don’t have to vs mustn’t',
                    'không cần phải (tùy bạn) – bị cấm: <em>You don’t have to come. / You mustn’t smoke here.</em>'
                ]
            ],
            mistakes: [
                ['I’ve got breakfast at 7.', 'I have breakfast at 7.', 'have got không dùng cho nghĩa hành động.'],
                ['Do you have got a car?', 'Do you have a car? / Have you got a car?', 'Không trộn hai dạng.']
            ]
        }
    },

    'used-to': {
        icon: '⏪',
        title: 'Used to / Be used to / Get used to (Thói Quen Trong Quá Khứ & Sự Quen Thuộc) - Intermediate',
        category: 'tenses',
        level: 'intermediate',
        connections: ['past-simple', 'gerunds-infinitives', 'modal-verbs'],
        theory: {
            overview: 'Ba cấu trúc cùng liên quan đến "thói quen" nhưng nghĩa khác hẳn: <strong>used to + V</strong> (thói quen / trạng thái quá khứ, nay không còn), <strong>be used to + V-ing / N</strong> (đã quen), <strong>get used to + V-ing / N</strong> (đang dần quen).',
            tables: [
                {
                    head: ['', 'used to + V', 'be used to + V-ing', 'get used to + V-ing'],
                    rows: [
                        ['"used" là', 'động từ khiếm khuyết / trợ động từ', 'tính từ', 'tính từ + get'],
                        [
                            'Nghĩa',
                            'quá khứ, nay không còn: <em>I used to smoke.</em>',
                            'đã quen: <em>I am used to getting up early.</em>',
                            'đang dần quen: <em>I’m getting used to the cold.</em>'
                        ],
                        ['Phủ định', 'didn’t use to', 'am/is not used to', 'am/is not getting used to'],
                        ['Câu hỏi', 'Did you use to…?', 'Are you used to…?', 'Are you getting used to…?']
                    ],
                    note: 'Sau did viết <strong>use to</strong> (không có d). Sau be/get used, <strong>to là giới từ</strong> nên theo sau là V-ing hoặc danh từ.'
                }
            ],
            compare: [
                [
                    'used to vs would (thói quen quá khứ)',
                    'used to cho cả hành động và trạng thái (<em>I used to live in Hue</em>); would chỉ cho hành động lặp lại (<em>Every summer we would visit Grandma</em>; ✗ <em>I would live in Hue</em>)'
                ],
                ['I used to wake early vs I am used to waking early', 'từng dậy sớm – đã quen dậy sớm']
            ],
            mistakes: [
                ['I am used to wake up early.', 'I am used to waking up early.', 'to là giới từ → V-ing.'],
                [
                    'I used to get up early now.',
                    'I usually get up early.',
                    'used to chỉ nói quá khứ; thói quen hiện tại dùng hiện tại đơn.'
                ]
            ]
        }
    },

    'time-prepositions-deep': {
        icon: '⏳',
        title: 'For / Since / During / While / By / Until (Giới Từ Chỉ Thời Gian) - Intermediate',
        category: 'tenses',
        level: 'intermediate',
        connections: ['present-perfect', 'past-simple', 'past-continuous', 'prepositions'],
        theory: {
            overview: 'Sáu từ <strong>for, since, during, while, by, until</strong> hay bị dùng sai vì tiếng Việt đều dịch là "trong / từ / đến". Nhớ nghĩa chính và loại từ đi sau.',
            tables: [
                {
                    head: ['Từ', 'Đi với', 'Ví dụ'],
                    rows: [
                        ['for', 'khoảng thời gian', '<em>for 3 years</em>'],
                        ['since', 'mốc bắt đầu', '<em>since 2019</em>'],
                        ['during', 'danh từ', '<em>during the meeting</em>'],
                        ['while', 'mệnh đề', '<em>while I was reading</em>'],
                        ['by', 'hạn chót', '<em>finish by Friday</em>'],
                        ['until / till', 'kéo dài đến mốc', '<em>wait until 5 p.m.</em>']
                    ]
                }
            ],
            compare: [
                [
                    'for vs since',
                    '<em>for 5 years</em> – <em>since 2020</em>; đặc biệt hợp với hiện tại hoàn thành: <em>I’ve lived here for 5 years / since 2019.</em>'
                ],
                ['during vs while', '<em>during the film</em> – <em>while I watched</em>'],
                [
                    'by vs until',
                    '<em>Submit by Friday</em> (xong trước/đúng thứ Sáu) – <em>I’ll wait until Friday</em> (kéo dài đến thứ Sáu); by + thời điểm hợp với tương lai hoàn thành: <em>I’ll have finished by 5 p.m.</em>'
                ],
                ['in vs within', '<em>in 2 hours</em> (sau 2 tiếng) – <em>within 2 hours</em> (không quá 2 tiếng)'],
                ['ago vs before', '<em>2 days ago</em> (tính từ hiện tại) – <em>2 days before he left</em> (tính từ một mốc khác)'],
                ['on time vs in time', 'đúng giờ – kịp lúc']
            ],
            mistakes: [
                ['during I was sleeping', 'while I was sleeping', 'during không đi với mệnh đề.'],
                [
                    'He came until 8.',
                    'He didn’t come until 8.',
                    'until cần hành động kéo dài hoặc câu phủ định, không đi với hành động một lần.'
                ]
            ]
        }
    },

    /* ========================= PATTERNS ========================= */

    'tag-questions': {
        icon: '❔',
        title: 'Tag Questions (Câu Hỏi Đuôi) - Intermediate',
        category: 'patterns',
        level: 'intermediate',
        connections: ['question-forms', 'negatives', 'modal-verbs', 'subject-verb-agreement'],
        theory: {
            overview: 'Câu hỏi đuôi là câu hỏi ngắn gắn cuối câu trần thuật để <strong>xác nhận thông tin</strong>, giữ tương tác hoặc thể hiện kỳ vọng. Quy tắc cốt lõi: <strong>đảo polarity</strong> – câu khẳng định đi với tag phủ định và ngược lại.',
            formula: [
                {
                    label: 'Câu khẳng định',
                    pattern: 'Câu khẳng định, + trợ động từ phủ định + đại từ?',
                    example: 'You’re a doctor, aren’t you?'
                },
                {
                    label: 'Câu phủ định',
                    pattern: 'Câu phủ định, + trợ động từ khẳng định + đại từ?',
                    example: 'She doesn’t smoke, does she?'
                }
            ],
            tables: [
                {
                    head: ['Câu chính', 'Tag', 'Ví dụ'],
                    rows: [
                        ['be', 'lặp lại be, đổi polarity', '<em>It’s hot, isn’t it?</em>'],
                        ['trợ động từ / modal', 'lặp lại trợ động từ / modal', '<em>You can swim, can’t you?</em>'],
                        [
                            'không có trợ động từ',
                            'do / does / did theo thì',
                            '<em>He plays piano, doesn’t he? They went home, didn’t they?</em>'
                        ],
                        ['I am…', 'aren’t I?', '<em>I’m right, aren’t I?</em>'],
                        ['Let’s…', 'shall we?', '<em>Let’s go, shall we?</em>'],
                        [
                            'Mệnh lệnh',
                            'will you? / won’t you? / would you? – làm mềm mệnh lệnh',
                            '<em>Open the door, will you? Sit down, won’t you?</em>'
                        ]
                    ]
                }
            ],
            uses: [
                [
                    'Ba bước',
                    'xét khẳng định/phủ định → chọn trợ động từ của mệnh đề chính → đảo polarity; chủ ngữ trong tag là đại từ tương ứng',
                    ''
                ],
                ['Từ mang nghĩa phủ định', 'never, hardly, no, nothing → tag khẳng định', 'He never lies, does he?'],
                ['Với I think / I believe', 'tag bám theo mệnh đề nêu nội dung', 'I think he is honest, isn’t he?']
            ],
            compare: [
                [
                    'Ngữ điệu xuống ↘ vs lên ↗',
                    'mong người nghe đồng ý (<em>It’s beautiful, isn’t it? ↘</em>) – thật sự hỏi (<em>You’re going, aren’t you? ↗</em>)'
                ]
            ],
            mistakes: [
                ['You’re tired, are you?', 'You’re tired, aren’t you?', 'Quên đổi polarity.'],
                'Chọn sai trợ động từ, hoặc chia tag theo mệnh đề phụ.'
            ]
        }
    },

    'discourse-markers': {
        icon: '🔀',
        title: 'Linking Words & Discourse Markers (Từ Nối & Từ Liên Kết Diễn Ngôn) - Intermediate',
        category: 'patterns',
        level: 'intermediate',
        connections: ['conjunctions', 'phrasal-prepositions', 'parallel-structure', 'result-structures'],
        theory: {
            overview: 'Từ liên kết diễn ngôn giúp văn bản mạch lạc. Khác với liên từ (and, but, so) nối <strong>trong câu</strong>, chúng thường nối <strong>giữa các câu, các đoạn</strong> và có dấu câu riêng: <em>The price is high. However, the quality is excellent.</em>',
            tables: [
                {
                    head: ['Quan hệ', 'Discourse markers'],
                    rows: [
                        ['Bổ sung', 'moreover, furthermore, in addition, besides, also, what’s more'],
                        ['Tương phản', 'however, nevertheless, nonetheless, on the other hand, in contrast'],
                        [
                            'Kết quả',
                            'therefore, thus, hence, consequently, as a result, accordingly – <em>He studies hard. As a result, he passed.</em>'
                        ],
                        ['Ví dụ, cụ thể', 'for example, for instance, namely, in particular'],
                        ['Tóm tắt, kết luận', 'in short, in summary, to sum up, overall, in conclusion'],
                        ['Trình tự', 'first(ly), then, next, after that, finally, eventually'],
                        ['Diễn đạt lại', 'in other words, that is to say, i.e.'],
                        ['Nhấn mạnh', 'indeed, in fact, actually, certainly'],
                        ['Văn nói', 'so, anyway, by the way, I mean, you know – chuyển chủ đề, giữ nhịp hội thoại']
                    ]
                }
            ],
            sections: [
                {
                    title: '✒️ Vị trí và dấu câu của however',
                    items: [
                        'Đầu câu + phẩy: <em>However, the result was clear.</em>',
                        'Giữa hai phẩy: <em>The result, however, was clear.</em>',
                        'Sau chấm phẩy: <em>I was tired; however, I worked.</em>'
                    ]
                }
            ],
            compare: [
                ['but vs however', 'but là liên từ nối mệnh đề trong câu; however nối câu / ý với dấu câu riêng']
            ],
            mistakes: [
                ['I was tired however I worked.', 'I was tired. However, I worked.', 'Dùng however như liên từ.'],
                'Nhồi marker vào mọi câu hoặc lặp một marker liên tục – mỗi đoạn 1–2 marker là đủ.',
                'Dùng marker trang trọng trong chat thân mật khi không cần.'
            ]
        }
    },

    'exclamatory-sentences': {
        icon: '😮',
        title: 'Exclamatory Sentences (Câu Cảm Thán) - Intermediate',
        category: 'patterns',
        level: 'intermediate',
        connections: ['question-forms', 'comparisons', 'sentence-types'],
        theory: {
            overview: 'Câu cảm thán bộc lộ ngạc nhiên, vui mừng, ngưỡng mộ, tức giận. Hai khung phổ biến: <strong>What + cụm danh từ</strong> và <strong>How + tính từ / trạng từ</strong>.',
            formula: [
                {
                    label: 'What',
                    pattern: 'What (a/an) + (adj) + N (+ S + V)!',
                    example: 'What a beautiful day! · What lovely flowers (these are)!'
                },
                {
                    label: 'How',
                    pattern: 'How + adj/adv (+ S + V)!',
                    example: 'How interesting! · How fast he runs!'
                }
            ],
            tables: [
                {
                    head: ['Khung', 'Ví dụ'],
                    rows: [
                        ['What + a/an + adj + N đếm được số ít', '<em>What a great idea!</em>'],
                        ['What + adj + N số nhiều / không đếm được (không a/an)', '<em>What nice weather!</em>'],
                        ['How + adj / adv', '<em>How wonderful!</em>'],
                        ['so + adj; such + (a/an) + adj + N (văn nói)', '<em>He’s so kind! It’s such a nice day!</em>']
                    ]
                }
            ],
            uses: [
                [
                    'Câu cảm thán đầy đủ giữ trật tự S + V',
                    'giống câu trần thuật, không đảo như câu hỏi',
                    'How beautiful the day is! How fast he runs! (không phải How fast does he run!)'
                ]
            ],
            mistakes: [
                ['What beautiful!', 'How beautiful! / What a beautiful day!', 'What cần danh từ.'],
                'Lạm dụng dấu chấm than trong văn trang trọng – tối đa khoảng một lần mỗi đoạn.'
            ],
            advanced: [
                'Khung nâng cao: đảo ngữ (<em>Never have I seen such beauty!</em>), <em>If only / I wish</em> (<em>If only I had known!</em>), thán từ văn nói (<em>Boy, that was tough!</em>).'
            ]
        }
    },

    'substitution-ellipsis': {
        icon: '🔄',
        title: 'Substitution & Ellipsis (Phép Thế & Phép Tỉnh Lược) - Advanced',
        category: 'patterns',
        level: 'advanced',
        connections: ['negatives', 'parallel-structure', 'distributives', 'reported-speech'],
        theory: {
            overview: 'Để câu gọn và tránh lặp, tiếng Anh <strong>thay thế</strong> phần đã nhắc bằng từ khác (substitution: so, do, one…) hoặc <strong>lược bỏ</strong> hẳn (ellipsis).',
            tables: [
                {
                    title: 'Substitution – thay bằng từ khác',
                    head: ['Từ thay', 'Thay cho', 'Ví dụ'],
                    rows: [
                        [
                            'so / not (sau think, hope, expect, suppose, be afraid)',
                            'cả một mệnh đề',
                            '<em>Will it rain? — I think so. / I’m afraid not.</em>'
                        ],
                        ['do / does / did', 'động từ cùng bổ ngữ của nó', '<em>She runs faster than I do. I love coffee. — I do too.</em>'],
                        ['one / ones', 'danh từ đếm được', '<em>Which shoes? — The black ones. I prefer the red one.</em>'],
                        ['that / those (trang trọng)', 'danh từ đã nhắc', '<em>The climate of Hanoi is cooler than that of Saigon.</em>']
                    ]
                }
            ],
            uses: [
                ['Ellipsis sau and / but / or', '', 'I can swim and (I can) dive. She bought a book and (she bought) a pen.'],
                ['Ellipsis sau to-infinitive', '', 'Would you like to come? — I’d love to (come).'],
                ['Ellipsis trong so sánh', '', 'She’s taller than her brother (is).'],
                [
                    'Đồng tình ngắn',
                    'So + aux + S (khẳng định); Neither / Nor + aux + S (phủ định)',
                    'I’m tired. — So am I. / I don’t know. — Neither do I.'
                ]
            ],
            mistakes: [
                'Lược khi gây mơ hồ – nhất là trong essay, chỉ lược khi nghĩa vẫn rõ.',
                'Dùng ellipsis kiểu văn nói (<em>Want some?</em>) trong essay trang trọng.'
            ],
            tip: 'Cần thay <strong>cụm động từ</strong> → do; <strong>danh từ đếm được</strong> → one(s); <strong>mệnh đề</strong> → so / not.'
        }
    },

    'comparative-correlatives': {
        icon: '📊',
        title: 'The + Comparative... The + Comparative (Cấu Trúc So Sánh Kép) - Intermediate',
        category: 'patterns',
        level: 'intermediate',
        connections: ['comparisons', 'parallel-structure', 'conditionals'],
        theory: {
            overview: 'Cấu trúc so sánh kép <strong>"càng… càng…"</strong> cho biết hai đại lượng thay đổi tỉ lệ với nhau.',
            formula: [
                {
                    pattern: 'The + comparative + S + V, the + comparative + S + V',
                    example: 'The harder you study, the better you score. · The older I get, the wiser I become.'
                }
            ],
            tables: [
                {
                    head: ['Biến thể', 'Ví dụ'],
                    rows: [
                        ['Tính từ ngắn: the + adj-er', '<em>The bigger, the better.</em>'],
                        ['Tính từ dài: the more + adj', '<em>The more expensive, the more luxurious.</em>'],
                        ['Trạng từ: the + adv-er', '<em>The faster you walk, the sooner you arrive.</em>'],
                        ['Danh từ: the more + N', '<em>The more money he has, the more friends he gets.</em>'],
                        ['Đảo chiều: the less…, the more…', '<em>The more I think about it, the less I understand.</em>'],
                        ['Văn nói lược S + V', '<em>The sooner, the better.</em>']
                    ],
                    note: 'Hai vế ngăn cách bằng dấu phẩy.'
                }
            ],
            mistakes: [
                ['More you practice, better you become.', 'The more you practice, the better you become.', 'Không bỏ the ở hai vế.'],
                [
                    'The more you practice, the good you become.',
                    '… the better you become.',
                    'Dùng dạng so sánh hơn, không dùng tính từ nguyên dạng.'
                ]
            ]
        }
    },

    /* ========================= STRUCTURES ========================= */

    'phrasal-verbs': {
        icon: '🧩',
        title: 'Phrasal Verbs (Cụm Động Từ) - Intermediate',
        category: 'structures',
        level: 'intermediate',
        connections: ['verbs-overview', 'prepositions', 'gerunds-infinitives', 'word-formation'],
        theory: {
            overview: 'Phrasal verb là <strong>động từ + tiểu từ</strong> (giới từ / trạng từ) tạo nghĩa mới, thường không đoán được từ từng từ: <em>look</em> = nhìn, nhưng <em>look after</em> = chăm sóc, <em>look up</em> = tra cứu, <em>look for</em> = tìm. Một phrasal verb có thể có nhiều nghĩa: <em>take off</em> = cất cánh / cởi ra / thành công nhanh / nghỉ làm.',
            tables: [
                {
                    title: '4 loại phrasal verb',
                    head: ['Loại', 'Đặc điểm', 'Ví dụ'],
                    rows: [
                        ['Nội động', 'không có tân ngữ', '<em>break down, get up, take off (máy bay)</em>'],
                        [
                            'Tách được',
                            'tân ngữ danh từ ở giữa hoặc cuối; tân ngữ <strong>đại từ bắt buộc ở giữa</strong>',
                            '<em>turn the light off / turn off the light / turn it off</em> (✗ turn off it)'
                        ],
                        ['Không tách được', 'tiểu từ luôn đứng ngay sau động từ', '<em>look after the kids / look after them</em>'],
                        [
                            'Cụm 3 từ',
                            'luôn đi liền, không chen tân ngữ',
                            '<em>look forward to, put up with, get along with – I can’t put up with his behavior.</em>'
                        ]
                    ]
                }
            ],
            sections: [
                {
                    title: '🧲 Sắc thái của tiểu từ – giúp đoán nghĩa',
                    table: {
                        head: ['Tiểu từ', 'Sắc thái', 'Ví dụ'],
                        rows: [
                            ['up', 'hoàn tất, tăng, thu gom', 'finish up, use up, speed up, pick up'],
                            ['out', 'lộ ra, hết, phân phát', 'find out, run out, hand out, carry out'],
                            ['off', 'tách ra, hủy, khởi phát', 'take off, call off, cut off, set off'],
                            ['down', 'giảm, ghi xuống, suy sụp', 'slow down, write down, break down']
                        ]
                    }
                },
                {
                    title: '📚 Nhóm thông dụng theo động từ và chủ đề',
                    items: [
                        [
                            'get / take / put',
                            '<em>get up, get over, get rid of; take after, take up, take care of; put on, put off, put away</em>'
                        ],
                        [
                            'turn / look / give',
                            '<em>turn on/off, turn down, turn into; look up, look for, look after; give up, give in, give back, give away</em>'
                        ],
                        [
                            'break / come',
                            '<em>break down, break up, break out, break in; come across, come up with, come back, come over</em>'
                        ],
                        [
                            'Công việc, học tập',
                            '<em>carry out a task, follow up an email, take on a role, hand in a report, go over notes, catch up on lessons</em>'
                        ],
                        ['Quan hệ, đời sống', '<em>get along with, make up with, fall out with; wake up, set off, drop by, eat out</em>']
                    ]
                }
            ],
            compare: [
                [
                    'Phrasal verb vs động từ đơn trang trọng',
                    'văn nói dùng phrasal verb rất nhiều; văn học thuật thay bằng động từ đơn: <em>put off → postpone, find out → discover, give up → abandon, carry on → continue, put up with → tolerate</em>'
                ]
            ],
            mistakes: [
                ['turn off it', 'turn it off', 'Đại từ tân ngữ phải đứng giữa động từ và tiểu từ.'],
                ['look the kids after', 'look after the kids', 'Không tách phrasal verb không tách được.'],
                'Dịch từng chữ: <em>put off</em> không phải "đặt ra sau" mà là "trì hoãn".'
            ],
            tip: 'Gặp phrasal verb mới: kết hợp nghĩa gốc của động từ + sắc thái của tiểu từ để đoán trước, rồi mới tra; luôn học theo câu và ngữ cảnh.'
        }
    },

    'verb-patterns': {
        icon: '⚙️',
        title: 'Verb Patterns (Cấu Trúc Động Từ) - Intermediate',
        category: 'structures',
        level: 'intermediate',
        connections: ['gerunds-infinitives', 'reported-speech', 'noun-clauses', 'causatives'],
        theory: {
            overview: 'Mỗi động từ "đòi" một cấu trúc theo sau riêng: to V, V-ing, O + to V, O + V nguyên mẫu, that-clause… Không suy được từ nghĩa tiếng Việt, nên phải <strong>học pattern theo từng động từ</strong>.',
            tables: [
                {
                    head: ['Mẫu', 'Động từ điển hình', 'Ví dụ'],
                    rows: [
                        ['V + to V', 'want, decide, hope, plan, agree, refuse, promise', '<em>She decided to leave. I want to go.</em>'],
                        ['V + V-ing', 'enjoy, finish, avoid, mind, suggest, consider', '<em>I avoid eating sugar. I enjoy going.</em>'],
                        ['V + O + to V', 'tell, ask, want, allow, force, advise', '<em>He told me to wait. They allowed us to leave.</em>'],
                        ['V + O + V nguyên mẫu', 'let, make, help; see, hear, watch (tri giác)', '<em>Let her go. I saw him leave.</em>'],
                        [
                            'V + giới từ + V-ing',
                            'insist on, succeed in, think about, look forward to',
                            '<em>I look forward to hearing from you. She succeeded in passing.</em>'
                        ],
                        ['V + that-clause', 'think, believe, say, know, hope, suggest', '<em>I think (that) it’s late.</em>'],
                        ['V + wh-clause / wh + to V', 'know, ask, wonder, decide', '<em>I don’t know what to do.</em>'],
                        ['V + O + as / to be', 'regard, consider, see', '<em>I regard her as a friend.</em>']
                    ]
                }
            ],
            sections: [
                {
                    title: '🔀 Đổi cấu trúc = đổi nghĩa',
                    items: [
                        [
                            'remember / forget',
                            '<em>remember to do</em> = nhớ phải làm (chưa làm); <em>remember doing</em> = nhớ đã làm. forget tương tự'
                        ],
                        ['stop', '<em>stop to do</em> = dừng lại để làm; <em>stop doing</em> = ngừng làm'],
                        ['try', '<em>try to open</em> = cố mở; <em>try opening</em> = thử cách mở xem sao'],
                        ['regret', '<em>regret to say</em> = tiếc phải nói; <em>regret saying</em> = hối hận đã nói'],
                        ['need', '<em>need to do</em> (chủ động); <em>need doing</em> = need to be done: <em>The car needs washing.</em>']
                    ]
                }
            ],
            mistakes: [
                [
                    'I suggest to go / I suggest you to go.',
                    'I suggest going. / I suggest that you (should) go.',
                    'suggest + V-ing hoặc suggest that S (should) V.'
                ],
                'Bỏ tân ngữ khi động từ cần O + to V (tell, allow).',
                'Quên giới từ cố định trước V-ing (insist <strong>on</strong> doing).'
            ]
        }
    },

    'mixed-conditionals': {
        icon: '🌡️',
        title: 'Mixed & Inverted Conditionals (Câu Điều Kiện Hỗn Hợp & Đảo Ngữ) - Advanced',
        category: 'structures',
        level: 'advanced',
        connections: ['conditionals', 'inversion', 'wish-if-only', 'sequence-of-tenses'],
        theory: {
            overview: 'Câu điều kiện hỗn hợp dùng khi <strong>điều kiện và kết quả ở hai mốc thời gian khác nhau</strong> (quá khứ ↔ hiện tại) – khi loại 2 hay loại 3 riêng lẻ không đủ nghĩa. Chủ điểm này cũng gồm đảo ngữ điều kiện và các từ thay if.',
            tables: [
                {
                    head: ['Dạng', 'Công thức', 'Ví dụ'],
                    rows: [
                        [
                            'Mixed 3 → 2: quá khứ ảnh hưởng hiện tại',
                            'If + had V3, S + would + V',
                            '<em>If I had studied medicine, I would be a doctor now.</em>'
                        ],
                        [
                            'Mixed 2 → 3: tình trạng hiện tại ảnh hưởng quá khứ',
                            'If + V2 (were), S + would have + V3',
                            '<em>If she were more careful, she wouldn’t have made that mistake.</em>'
                        ],
                        ['Đảo ngữ loại 1', 'Should + S + V, S + will + V', '<em>Should you need help, please call.</em>'],
                        ['Đảo ngữ loại 2', 'Were + S + (to V), S + would + V', '<em>Were I in your shoes, I would accept.</em>'],
                        ['Đảo ngữ loại 3', 'Had + S + V3, S + would have V3', '<em>Had I known, I would have come.</em>']
                    ],
                    note: 'Đảo ngữ điều kiện thường gặp trong văn trang trọng, hợp đồng, văn học; văn nói dùng if.'
                }
            ],
            sections: [
                {
                    title: '🔁 Thay "if" bằng cấu trúc khác',
                    items: [
                        ['unless', '= if not (xem chủ điểm Conditionals để biết khi nào nên dùng): <em>I won’t go unless you come.</em>'],
                        [
                            'provided / providing (that), as long as, on condition that',
                            'nhấn điều kiện bắt buộc: <em>You can borrow it provided that you return it tomorrow.</em>'
                        ],
                        ['suppose / supposing / imagine', 'mở câu giả định: <em>Supposing you won the lottery, what would you do?</em>'],
                        [
                            'but for + N / V-ing',
                            'nếu không có… (= if it weren’t / hadn’t been for): <em>But for his help, I would have failed.</em>'
                        ],
                        ['otherwise', 'nếu không thì…']
                    ]
                }
            ],
            compare: [
                ['Loại 3 vs mixed', 'loại 3: quá khứ → quá khứ; mixed: đổi mốc giữa hai vế']
            ],
            mistakes: [
                'Gọi mọi câu điều kiện dài là mixed, hoặc trộn thì khi quan hệ thời gian không rõ.',
                'Quên <em>would have + V3</em> cho kết quả quá khứ.'
            ]
        }
    },

    'cleft-sentences': {
        icon: '🪞',
        title: 'Cleft & Pseudo-cleft Sentences (Câu Chẻ & Câu Chẻ Giả) - Advanced',
        category: 'structures',
        level: 'advanced',
        connections: ['dummy-it', 'noun-clauses', 'inversion', 'parallel-structure'],
        theory: {
            overview: 'Câu chẻ "chẻ" câu làm hai phần để <strong>nhấn mạnh một thành phần</strong> (người, vật, thời gian, nơi chốn, lý do, hành động). Từ câu gốc <em>John broke the vase yesterday</em>: <em>It was John who broke the vase.</em> / <em>It was the vase that John broke.</em> / <em>It was yesterday that John broke the vase.</em>',
            tables: [
                {
                    head: ['Khung', 'Nhấn', 'Ví dụ'],
                    rows: [
                        [
                            'It-cleft: It + be + X + that / who…',
                            'người, vật, thời gian, nơi chốn, lý do',
                            '<em>It is in Hanoi that I met her.</em>'
                        ],
                        [
                            'Wh-cleft (pseudo-cleft): What + clause + be + X',
                            'hành động hoặc thông tin mới',
                            '<em>What I need is more time. What John broke was the vase.</em>'
                        ],
                        ['All-cleft: All + S + V + be + X', 'thu hẹp: "chỉ…"', '<em>All I want is peace.</em>'],
                        ['Reverse pseudo-cleft: X + be + what…', 'đưa X lên đầu', '<em>More time is what I need.</em>']
                    ]
                }
            ],
            uses: [
                [
                    'who hay that trong it-cleft',
                    'người: who / that; còn lại: that. Có thể bỏ that khi nhấn tân ngữ',
                    'It was Anna who/that called. It was on Monday that we met. It was the book (that) I bought.'
                ],
                ['Pseudo-cleft nhấn hành động', 'What … did was + V nguyên mẫu', 'What I did was call her.'],
                ['Sửa thông tin sai, đối chiếu', '', 'It wasn’t John who broke it – it was Mary.']
            ],
            compare: [
                ['John called Mary vs It was John who called Mary', 'trung tính – nhấn John'],
                ['It-cleft vs dummy it', '<em>It was John who called</em> nhấn một thành phần; <em>It is raining</em> chỉ là chủ ngữ giả']
            ],
            mistakes: ['Dùng câu chẻ khi câu thường đã rõ và gọn hơn.', 'Sai hòa hợp động từ sau phần được nhấn.']
        }
    },

    'reduced-relatives': {
        icon: '↙️',
        title: 'Reduced Relative Clauses (Mệnh Đề Quan Hệ Rút Gọn) - Advanced',
        category: 'structures',
        level: 'advanced',
        connections: ['relative-clauses', 'participle-clauses', 'passive-voice', 'parallel-structure'],
        theory: {
            overview: 'Rút gọn mệnh đề quan hệ bằng cách <strong>bỏ đại từ quan hệ (+ be)</strong> và giữ cụm phân từ, tính từ hoặc to V. Giúp nén cụm danh từ, hay gặp trong văn học thuật và chuyên môn.',
            tables: [
                {
                    head: ['Mệnh đề gốc', 'Rút thành', 'Ví dụ'],
                    rows: [
                        ['who/which + be + V-ing', 'V-ing (chủ động)', '<em>The man (who is) standing over there</em>'],
                        [
                            'who/which + V (chủ động)',
                            'V-ing',
                            '<em>People (who live) in cities → people living in cities; anyone wanting to join</em>'
                        ],
                        [
                            'who/which + be + V3',
                            'V3 (bị động)',
                            '<em>The book (which was) written by him; documents submitted yesterday</em>'
                        ],
                        ['who/which + be + adj / N', 'giữ tính từ / danh từ', '<em>The students (who were) absent…</em>'],
                        [
                            'sau số thứ tự, so sánh nhất, only',
                            'to V',
                            '<em>the first man to land on the moon; the only person to know</em>'
                        ]
                    ]
                }
            ],
            mistakes: [
                'Rút gọn khi cần giữ rõ thì / tình thái, hoặc khi gây mơ hồ chủ động – bị động.',
                [
                    'Walking down the street, the building looked beautiful.',
                    'Walking down the street, I saw the beautiful building.',
                    'Cụm phân từ phải đứng sát và gắn đúng danh từ nó bổ nghĩa (tránh misplaced / dangling participle).'
                ]
            ],
            tip: 'Chủ động → V-ing; bị động → V3. Rút xong đọc lại để chắc nghĩa không đổi.'
        }
    },

    'reducing-adverbial-clauses': {
        icon: '🪶',
        title: 'Reducing Adverbial Clauses (Rút Gọn Mệnh Đề Trạng Ngữ) - Advanced',
        category: 'structures',
        level: 'advanced',
        connections: ['adverbial-time-clauses', 'participle-clauses', 'reduced-relatives', 'sequence-of-tenses'],
        theory: {
            overview: 'Khi <strong>hai mệnh đề có cùng chủ ngữ logic</strong>, có thể rút gọn mệnh đề trạng ngữ thành cụm V-ing, V3, having + V3 hoặc cụm không động từ – câu gọn và học thuật hơn.',
            tables: [
                {
                    head: ['Mệnh đề gốc', 'Rút gọn', 'Ví dụ'],
                    rows: [
                        [
                            'After / before / when / while + S + V (chủ động)',
                            'giữ liên từ + V-ing',
                            '<em>After she finished the report, she sent it.</em> → <em>After finishing the report, she sent it.</em> <em>While waiting, I read the news.</em>'
                        ],
                        [
                            'Because / as + S + be + adj / V3',
                            'cụm V3 / cụm tính từ',
                            '<em>Warned in advance, he avoided the mistake. Afraid of being late, she left early.</em>'
                        ],
                        [
                            'After + S + had + V3 (nhấn việc đã xong trước)',
                            'Having + V3',
                            '<em>Having finished the task, he went home.</em>'
                        ],
                        [
                            'when / if + S + be + …',
                            'cụm không động từ (verbless)',
                            '<em>When (you are) in doubt, ask. When asked, she answered calmly.</em>'
                        ]
                    ]
                }
            ],
            mistakes: [
                [
                    'While driving home, the rain started.',
                    'While I was driving home, the rain started.',
                    'Dangling participle: hai vế khác chủ ngữ thì không rút gọn.'
                ],
                'Rút quá mức làm mất nghĩa thời gian / điều kiện.'
            ],
            advanced: ['Hợp nhất với văn học thuật, essay, report; văn nói thường dùng mệnh đề đầy đủ cho rõ nghĩa.'],
            tip: 'Thử <strong>khôi phục mệnh đề đầy đủ</strong> – nếu chủ ngữ hai vế không trùng nhau, đừng rút gọn.'
        }
    },

    'subjunctive': {
        icon: '🎼',
        title: 'Subjunctive Mood (Thức Giả Định) - Advanced',
        category: 'structures',
        level: 'advanced',
        connections: ['noun-clauses', 'wish-if-only', 'conditionals', 'modal-verbs'],
        theory: {
            overview: 'Thức giả định (mandative subjunctive) dùng <strong>V nguyên mẫu cho mọi ngôi</strong> trong that-clause sau các động từ / tính từ chỉ yêu cầu, đề nghị, tầm quan trọng. Phổ biến ở Anh-Mỹ và văn trang trọng, pháp lý.',
            formula: [
                {
                    label: 'Sau động từ',
                    pattern: 'S + suggest / insist / … + that + S + V',
                    example: 'I suggest that he be on time. · The doctor recommended that he stop smoking.',
                    note: 'V nguyên mẫu cho mọi ngôi'
                },
                {
                    label: 'Sau tính từ',
                    pattern: 'It is essential / vital / important + that + S + V',
                    example: 'It is essential that she attend the meeting.'
                },
                {
                    label: 'Phủ định',
                    pattern: 'not + V',
                    example: 'I suggest he not leave yet.'
                }
            ],
            tables: [
                {
                    head: ['Sau động từ', 'Sau tính từ'],
                    rows: [
                        [
                            'suggest, recommend, insist, demand, request, propose, urge, require, advise, ask, order',
                            'essential, important, vital, necessary, crucial, imperative, advisable, desirable'
                        ]
                    ]
                }
            ],
            uses: [
                [
                    'Cụm cố định',
                    'không lạm dụng trong văn thường',
                    'God save the Queen! Long live the king! So be it. Come what may. Be that as it may…'
                ],
                ['Were-subjunctive', 'were cho mọi ngôi trong điều kiện không thật', 'If I were you, …']
            ],
            compare: [
                [
                    'Anh-Mỹ vs Anh-Anh',
                    'AmE giữ V nguyên mẫu: <em>I insist that he go</em>; BrE hay dùng should + V: <em>I insist that he should go</em>. Chọn một và nhất quán'
                ],
                ['They insisted that he leave vs They insisted that he left', 'yêu cầu anh ta phải đi – khẳng định anh ta đã đi']
            ],
            mistakes: [
                ['I suggest that he goes.', 'I suggest that he go.', 'Không thêm -s cho ngôi thứ ba.'],
                ['I suggest he doesn’t leave.', 'I suggest he not leave.', 'Không dùng do/does trong phủ định.']
            ]
        }
    },

    'academic-style-grammar': {
        icon: '🎓',
        title: 'Academic Grammar: Nominalization & Gerund Subjects (Danh Từ Hóa & Chủ Ngữ Danh Động Từ) - Advanced',
        category: 'structures',
        level: 'advanced',
        connections: ['subjunctive', 'verb-patterns', 'parallel-structure', 'grammar-registers'],
        theory: {
            overview: 'Ngữ pháp học thuật hướng tới giọng văn <strong>khách quan, chính xác, nén thông tin</strong>: danh hóa (nominalization), chủ ngữ là cụm V-ing, bị động, cấu trúc khách quan và hedging.',
            tables: [
                {
                    head: ['Công cụ', 'Cách làm', 'Ví dụ'],
                    rows: [
                        [
                            'Nominalization (danh hóa)',
                            'biến động từ / tính từ thành danh từ: decide → decision, improve → improvement',
                            '<em>The government decided to act.</em> → <em>The decision to act was made…</em> <em>The improvement of public transport is essential.</em>'
                        ],
                        [
                            'Gerund subject',
                            'cụm V-ing làm chủ ngữ, hợp câu chủ đề',
                            '<em>Recycling more reduces waste. Studying abroad requires adaptability.</em>'
                        ],
                        [
                            'Giọng trung tính',
                            'cụm danh từ + bị động khi tác nhân không quan trọng',
                            '<em>Several factors were identified in the analysis.</em>'
                        ],
                        [
                            'Hedging',
                            'may, tends to, appears to – tránh khẳng định tuyệt đối khi chưa đủ bằng chứng',
                            '<em>The results may indicate… Prices tend to rise…</em>'
                        ],
                        ['Cấu trúc khách quan', 'It is likely that…, the claim that…', '<em>It is likely that demand will grow.</em>']
                    ]
                }
            ],
            compare: [
                ['We found that… vs The findings suggest that…', 'trực tiếp – khách quan, học thuật hơn (danh hóa + hedge)'],
                ['conduct an analysis vs analyze', 'trang trọng hơn – ít trang trọng hơn']
            ],
            mistakes: [
                [
                    'The making of improvements in education…',
                    'Improving education…',
                    'Danh hóa quá tay làm câu nặng, mờ chủ thể hành động.'
                ],
                'Đưa ngữ pháp văn nói vào formal essay: contractions, ellipsis, từ lóng.'
            ],
            tip: 'Văn học thuật tốt là <strong>rõ + chính xác</strong>, không phải càng nhiều danh từ càng hay. Nếu cụm danh hóa làm câu dài và mờ, quay về động từ chủ động.'
        }
    },

    'grammar-registers': {
        icon: '🎙️',
        title: 'Grammar Registers: BrE vs AmE, Formal vs Informal (Văn Phong & Biến Thể Ngữ Pháp) - Advanced',
        category: 'structures',
        level: 'advanced',
        connections: ['have-got', 'subjunctive', 'phrasal-verbs', 'academic-style-grammar'],
        theory: {
            overview: 'Một cấu trúc đúng ngữ pháp chưa chắc hợp mọi tình huống. Ngữ pháp thay đổi theo <strong>biến thể</strong> (Anh-Anh / Anh-Mỹ) và <strong>văn phong</strong> (trang trọng / thân mật).',
            tables: [
                {
                    title: 'Anh-Anh vs Anh-Mỹ',
                    head: ['Ý', 'British English', 'American English'],
                    rows: [
                        ['Sở hữu', 'Have you got a pen?', 'Do you have a pen?'],
                        ['Vừa mới', 'I’ve just eaten. (present perfect mạnh với just/already/yet)', 'I just ate.'],
                        ['Cuối tuần', 'at the weekend', 'on the weekend'],
                        ['Subjunctive', 'suggest that he should go', 'suggest that he go'],
                        ['Danh từ tập hợp', 'The team are playing well.', 'The team is playing well.'],
                        ['Bệnh viện / đại học', 'in hospital, at university', 'in the hospital, in college'],
                        ['Khoảng thời gian', 'Monday to Friday', 'Monday through Friday']
                    ]
                },
                {
                    title: 'Trang trọng vs thân mật',
                    head: ['Formal writing', 'Informal speech'],
                    rows: [
                        [
                            'mệnh đề đầy đủ, ít rút gọn, động từ gốc Latin, danh hóa hợp lý, hedging',
                            'contractions, phrasal verbs, ellipsis, discourse markers ngắn'
                        ],
                        ['obtain, therefore, children, conduct research, demonstrate', 'get, so, kids, find out, get back, anyway']
                    ]
                }
            ],
            uses: [
                [
                    'Thang lịch sự khi yêu cầu',
                    'trực tiếp → lịch sự → trang trọng',
                    'Give me the file. → Could you send me the file? → I would appreciate it if you could send the file.'
                ],
                ['Văn bản pháp lý / trang trọng cao', 'shall, hereby, đảo ngữ, từ cổ – không dùng trong hội thoại thường', '']
            ],
            mistakes: [
                'Đưa ngữ pháp văn nói vào essay.',
                'Trộn BrE / AmE bừa bãi trong cùng một văn bản chính thức.',
                'Nhồi cấu trúc trang trọng vào hội thoại đời thường khi mục tiêu là nói tự nhiên.'
            ],
            tip: 'Trước khi chọn cấu trúc, hỏi: <strong>essay, email công việc hay trò chuyện?</strong> Người đọc nghiêng về <strong>BrE hay AmE</strong>?'
        }
    },

    'prepositional-phrases': {
        icon: '🧭',
        title: 'Prepositional Phrases & Fixed Expressions (Cụm Giới Từ & Thành Ngữ Cố Định) - Intermediate',
        category: 'foundations',
        level: 'intermediate',
        connections: ['prepositions', 'collocations-pairs', 'discourse-markers'],
        theory: {
            overview: 'Nhiều cụm giới từ cố định (<em>by mistake, on purpose, in the long run</em>) là <strong>một khối nghĩa</strong>, không dịch từng chữ. Trong câu, cụm giới từ có thể bổ nghĩa danh từ, làm trạng ngữ hoặc làm bổ ngữ.',
            tables: [
                {
                    head: ['Nhóm', 'Cụm tiêu biểu', 'Ví dụ'],
                    rows: [
                        [
                            'Cách thức',
                            'by mistake (vô tình), on purpose, by chance, in person, in private',
                            '<em>I took your bag by mistake. She broke the rule on purpose.</em>'
                        ],
                        [
                            'Thời gian',
                            'in the meantime (trong lúc đó), at first, in the long run (về lâu dài), on time, in time',
                            '<em>In the long run, saving wins.</em>'
                        ],
                        [
                            'Quan điểm, thái độ',
                            'in my opinion, by all means, at least, on the whole',
                            '<em>On the whole, the plan works.</em>'
                        ],
                        ['Nguyên nhân, kết quả', 'because of, due to, as a result of, in response to', '+ cụm danh từ, không + mệnh đề']
                    ]
                }
            ],
            uses: [
                ['Bổ nghĩa danh từ', '', 'the book on the table'],
                ['Trạng ngữ (nơi chốn, thời gian, cách thức)', '', 'read in the room'],
                ['Bổ ngữ sau động từ / tính từ / danh từ', '', 'interested in music']
            ],
            compare: [
                [
                    'at the end vs in the end',
                    'ở cuối (<em>at the end of the film</em>) – cuối cùng thì (<em>In the end, we decided to stay.</em>)'
                ],
                ['on time vs in time', 'đúng giờ – kịp lúc']
            ],
            mistakes: [
                [
                    'the report on the study of the effects of the policy on…',
                    'viết lại cho gọn',
                    'Xếp quá nhiều cụm giới từ liên tiếp làm mơ hồ phạm vi bổ nghĩa.'
                ],
                'Quên giới từ cố định sau động từ / tính từ.'
            ],
            tip: 'Mỗi giới từ mới, học luôn 2–3 cụm đi cùng như collocation: <em>at least, by the way, in a hurry</em>. Trong essay ưu tiên cụm chuyển ý rõ: <em>in contrast, in addition, in the long term, as a result</em>.'
        }
    },

    'modal-perfect': {
        icon: '🔮',
        title: 'Modal Perfect (Động Từ Khuyết Thiếu Hoàn Thành) - Advanced',
        category: 'structures',
        level: 'advanced',
        connections: ['modal-verbs', 'past-simple', 'wish-if-only', 'conditionals'],
        theory: {
            overview: '<strong>Modal + have + V3</strong> nói về <strong>quá khứ</strong>: suy đoán điều đã xảy ra, tiếc nuối, chỉ trích.',
            formula: [
                {
                    pattern: 'modal + have + V3',
                    example: 'You must have been tired. · I should have called her. · He might have forgotten.'
                },
                {
                    label: 'Dạng tiếp diễn',
                    pattern: 'modal + have been + V-ing',
                    example: 'You must have been waiting for hours!'
                }
            ],
            tables: [
                {
                    head: ['Cấu trúc', 'Nghĩa', 'Ví dụ'],
                    rows: [
                        ['must have V3', 'chắc chắn đã (suy luận)', '<em>The road is wet. It must have rained.</em>'],
                        ['can’t / couldn’t have V3', 'chắc chắn không thể đã', '<em>She can’t have seen me. I wasn’t there.</em>'],
                        ['may / might / could have V3', 'có thể đã (khoảng 50/50)', '<em>He might have missed the bus.</em>'],
                        ['should / ought to have V3', 'đáng lẽ nên (tiếc nuối, chỉ trích)', '<em>You should have told me earlier.</em>'],
                        ['shouldn’t have V3', 'đáng lẽ không nên', '<em>I shouldn’t have eaten so much.</em>'],
                        ['needn’t have V3', 'đã làm nhưng không cần', '<em>You needn’t have cooked – we ate already.</em>'],
                        ['would have V3', 'đã làm nếu điều kiện khác (câu điều kiện)', '<em>I would have come if I had known.</em>']
                    ]
                }
            ],
            compare: [
                ['needn’t have gone vs didn’t need to go', 'đã đi nhưng không cần – không cần đi (và có thể đã không đi)']
            ],
            mistakes: [
                ['He mustn’t have done it.', 'He can’t have done it.', 'Suy đoán phủ định chắc chắn dùng can’t have.'],
                ['could of been', 'could have been', 'Nói nhanh "have" nghe như "of" nhưng không được viết như vậy.'],
                'Quên <em>have + V3</em> sau modal.'
            ],
            tip: 'Độ chắc chắn: <strong>must</strong> (gần 100%) > <strong>should</strong> (kỳ vọng) > <strong>may / might / could</strong> (có thể) > <strong>can’t</strong> (gần như chắc chắn không).'
        }
    },

    'direct-indirect-objects': {
        icon: '🎯',
        title: 'Direct & Indirect Objects (Tân Ngữ Trực Tiếp & Gián Tiếp) - Intermediate',
        category: 'structures',
        level: 'intermediate',
        connections: ['verbs-overview', 'sentence-order', 'passive-voice', 'pronouns-possessives'],
        theory: {
            overview: 'Một số động từ (give, send, tell, show, buy, make…) có hai tân ngữ: <strong>tân ngữ gián tiếp</strong> (IO – người nhận / hưởng lợi) và <strong>tân ngữ trực tiếp</strong> (DO – vật nhận hành động): <em>She gave me (IO) a letter (DO).</em>',
            formula: [
                {
                    label: 'IO trước DO',
                    pattern: 'S + V + IO + DO',
                    example: 'She gave me a book.'
                },
                {
                    label: 'DO trước IO',
                    pattern: 'S + V + DO + to / for + IO',
                    example: 'She gave a book to me.'
                }
            ],
            tables: [
                {
                    head: ['Giới từ', 'Nghĩa', 'Động từ điển hình'],
                    rows: [
                        ['to', 'chuyển giao, đích đến', 'give, send, tell, show, lend, offer, pass, write, teach, sell, throw'],
                        [
                            'for',
                            'làm vì lợi ích ai',
                            'buy, make, cook, get, find, build, choose, save, order – <em>She bought me a gift = She bought a gift for me.</em>'
                        ]
                    ]
                }
            ],
            uses: [
                ['DO là đại từ', 'dùng dạng có giới từ', 'Give it to me. (<em>Give me it</em> chỉ gặp trong văn nói thân mật kiểu Anh)'],
                ['Hai cách bị động', 'IO làm chủ ngữ tự nhiên hơn trong văn nói', 'I was given a book. / A book was given to me.']
            ],
            mistakes: [
                [
                    'She explained me the lesson.',
                    'She explained the lesson to me.',
                    'explain, describe, suggest, mention, introduce, announce không dùng mẫu V + IO + DO.'
                ],
                'Dùng mẫu hai tân ngữ với mọi động từ.'
            ]
        }
    },

    /* ========================= PRONUNCIATION ========================= */

    'connected-speech': {
        icon: '🌊',
        title: 'Connected Speech & Weak Forms (Nối Âm & Dạng Yếu) - Advanced',
        category: 'pronunciation',
        level: 'advanced',
        connections: ['stress-schwa', 'ipa-vowels', 'ipa-consonants', 'ipa-overview'],
        theory: {
            overview: 'Khi nói liền câu, các từ "dính" vào nhau qua <strong>linking, elision, assimilation, weak forms</strong>. Tiếng Anh là chuỗi âm thanh liên tục, không phải các từ rời – hiểu điều này là chìa khóa để nghe hiểu tự nhiên.',
            tables: [
                {
                    head: ['Hiện tượng', 'Mô tả', 'Ví dụ'],
                    rows: [
                        [
                            'Linking (catenation)',
                            'nối phụ âm cuối với nguyên âm đầu từ sau',
                            '<em>turn off</em> → /tɜːr nɒf/, <em>an apple</em> → /əˈnæpl/'
                        ],
                        ['Intrusion', 'chèn /j/, /w/, /r/ giữa hai nguyên âm', '<em>I am</em> → /aɪ jæm/'],
                        ['Elision', 'nuốt (bỏ) một âm khi nói nhanh', '<em>next day</em> → /neks deɪ/, <em>friendship</em> → /ˈfrenʃɪp/'],
                        [
                            'Assimilation',
                            'một âm biến đổi cho gần âm bên cạnh',
                            '<em>good boy</em> → /ɡʊb bɔɪ/, <em>ten people</em> → /tem ˈpiːpl/'
                        ],
                        [
                            'Weak forms',
                            'từ ngữ pháp không nhấn chuyển thành schwa /ə/',
                            '<em>cup of tea</em> → /ˈkʌp əv ˈtiː/, <em>fish and chips</em> → /ˈfɪʃ ən ˈtʃɪps/'
                        ]
                    ]
                }
            ],
            uses: [
                ['can vs can’t', 'can thường yếu /kən/; can’t luôn mạnh /kɑːnt/ – phân biệt nhờ độ mạnh và nguyên âm', ''],
                ['wanna, gonna', 'chỉ trong văn nói thân mật, không viết trong văn bản trang trọng', 'I want to go → /aɪ ˈwɒnə ɡəʊ/'],
                [
                    'Ngữ điệu',
                    'xuống ↘: câu trần thuật, câu hỏi Wh-, mệnh lệnh; lên ↗: câu hỏi yes/no, liệt kê chưa hết; xuống-lên: nghi ngờ, gợi ý, lịch sự; lên-xuống: ngạc nhiên, mỉa mai',
                    ''
                ]
            ],
            mistakes: [
                'Kỳ vọng người bản ngữ phát âm từng từ như trong từ điển.',
                'Luyện nghe chỉ bằng từ đơn lẻ, không nghe theo cụm ý (chunking).'
            ],
            tip: '<strong>Shadowing</strong> với podcast tốc độ chậm: đánh dấu chỗ nối / nuốt âm rồi bắt chước theo.'
        }
    }
};
