// English Grammar Foundations
const grammarFoundationsData = {
    'sentence-order': {
        icon: '🧱',
        title: 'Sentence Order (Trật Tự Câu) - Beginner',
        category: 'foundations',
        level: 'beginner',
        connections: ['parts-of-speech', 'question-forms', 'subject-verb-agreement', 'negatives'],
        theory: {
            overview: 'Câu trần thuật tiếng Anh có trật tự khá cố định: <strong>Subject + Verb + Object</strong>, rồi mới đến thông tin phụ (cách thức, nơi chốn, thời gian). So với tiếng Việt, trật tự từ tiếng Anh cố định hơn và nghĩa phụ thuộc nhiều vào vị trí, nên dịch từng chữ rất dễ đặt sai chỗ.',
            formula: [
                {
                    label: 'Khung câu',
                    pattern: 'Subject + Verb + Object + (manner) + (place) + (time)',
                    example: 'Lan reads English books every night.'
                }
            ],
            tables: [
                {
                    title: 'Các khung câu cơ bản',
                    head: ['Mẫu', 'Khi nào', 'Ví dụ'],
                    rows: [
                        ['S + V', 'nội động từ, không cần tân ngữ (cry, arrive, sleep)', '<em>The baby cried.</em>'],
                        ['S + V + O', 'động từ cần tân ngữ', '<em>She opened the door.</em>'],
                        ['S + be + C', 'trạng thái / mô tả', '<em>He is tired.</em>'],
                        ['S + V + O + O', 'hai tân ngữ', '<em>They gave me a gift.</em>']
                    ]
                }
            ],
            uses: [
                ['Subject', 'ai / cái gì thực hiện hành động hoặc được nói tới', ''],
                ['Verb', 'hành động hoặc trạng thái', ''],
                ['Object / Complement', 'phần nhận tác động hoặc bổ nghĩa cho chủ ngữ', ''],
                [
                    'Thông tin phụ ở cuối câu',
                    'thời gian, nơi chốn đứng sau lõi S + V + O; thứ tự thường gặp là <strong>manner – place – time</strong>',
                    'They study at the library after class. / She sang beautifully at the concert last night.'
                ],
                ['Thông tin cũ trước, mới sau', 'đưa phần cũ/nhẹ lên trước, phần mới/dài ra cuối cho câu dễ đọc', ''],
                ['Tính từ trước danh từ', '', 'a difficult exam'],
                ['Trạng từ tần suất', 'đứng trước động từ thường nhưng sau <em>be</em>', 'She always arrives early. / She is always late.']
            ],
            mistakes: [
                [
                    'She speaks very well English.',
                    'She speaks English very well.',
                    'Động từ và tân ngữ thường đi liền nhau; không để trạng từ chen giữa.'
                ],
                ['English I study every day.', 'I study English every day.', 'Không đặt tân ngữ trước động từ trong câu thường.'],
                'Nhầm trật tự câu hỏi với trật tự noun clause: <em>I know where <strong>she lives</strong></em>, không phải <em>where does she live</em>.'
            ],
            advanced: [
                'Trật tự S + V chỉ đảo trong <strong>câu hỏi, đảo ngữ, fronting và cấu trúc nhấn mạnh</strong>: <em>Never have I seen…</em>, <em>Only then did he understand.</em>',
                '<strong>Fronting</strong> đưa một cụm lên đầu để nhấn mạnh nhưng lõi câu vẫn phải rõ: <em>In the corner stood an old piano.</em>',
                'Khi phân tích câu dài, bước đầu tiên là xác định lõi <strong>S + V</strong>, rồi mới xét mệnh đề phụ, cụm giới từ và trạng từ.'
            ],
            tip: 'Nếu câu nghe như "dịch từ tiếng Việt sang", hãy kiểm tra vị trí của trạng từ, tính từ và cụm thời gian trước tiên.'
        }
    },
    'parts-of-speech': {
        icon: '🔤',
        title: 'Parts of Speech (Từ Loại) - Beginner',
        category: 'foundations',
        level: 'beginner',
        connections: ['sentence-order', 'articles-determiners', 'adjectives-adverbs', 'gerunds-infinitives'],
        theory: {
            overview: 'Từ loại là <strong>vai trò của từ trong câu</strong>. Xác định đúng từ loại quyết định vị trí đặt từ và dạng từ (word form) cần chọn. Một từ có thể thuộc nhiều từ loại tùy ngữ cảnh.',
            tables: [
                {
                    title: 'Các từ loại chính',
                    head: ['Từ loại', 'Câu hỏi gợi ý / chức năng', 'Ví dụ'],
                    rows: [
                        ['Noun (danh từ)', 'Ai? Cái gì? – người, vật, ý tưởng', 'student, freedom'],
                        ['Verb (động từ)', 'Làm gì? Trạng thái gì?', 'write (hành động), seem (trạng thái)'],
                        ['Adjective (tính từ)', 'Như thế nào? – miêu tả danh từ', 'careful, useful'],
                        [
                            'Adverb (trạng từ)',
                            'Như thế nào / đến mức nào? – miêu tả động từ, tính từ, trạng từ, cả câu',
                            'carefully, extremely'
                        ],
                        ['Pronoun (đại từ)', 'thay cho danh từ đã nhắc', 'he, they, which'],
                        ['Preposition (giới từ)', 'nêu quan hệ (nơi chốn, thời gian…)', 'in, on, with'],
                        ['Conjunction (liên từ)', 'nối từ, cụm, mệnh đề', 'and, although, because']
                    ]
                }
            ],
            uses: [
                ['Xác định chức năng', 'từ đang làm subject, verb, object, modifier hay connector', ''],
                [
                    'Chọn word form trong bài điền từ',
                    'vị trí trước danh từ cần adjective, bổ nghĩa động từ cần adverb…',
                    'a successful plan / plan successfully'
                ],
                [
                    'Content words vs function words',
                    'danh/động/tính/trạng từ mang nghĩa chính; giới từ, mạo từ, trợ động từ làm khung ngữ pháp',
                    ''
                ],
                ['Học theo gia đình từ', 'học cả họ từ để không sai từ loại', 'decide – decision – decisive – decisively']
            ],
            sections: [
                {
                    title: '🔤 Dấu hiệu hình thức (hậu tố)',
                    items: [
                        ['Danh từ', '-tion, -ment, -ness, -ity: <em>information, movement, kindness, ability</em>'],
                        ['Tính từ', '-ful, -ous, -able, -ive: <em>useful, famous, readable, active</em>'],
                        ['Trạng từ', '-ly thường là trạng từ, nhưng có ngoại lệ là tính từ: <em>friendly, lovely, lonely</em>']
                    ]
                }
            ],
            mistakes: [
                ['She speaks fluent.', 'She speaks fluently.', 'Bổ nghĩa cho động từ cần trạng từ, không dùng tính từ.'],
                'Chọn từ loại theo nghĩa tiếng Việt thay vì theo vị trí trong câu.',
                'Nghĩ một từ chỉ có một từ loại: <em>book</em> là danh từ, nhưng <em>book a ticket</em> là động từ.'
            ],
            advanced: [
                'Trong writing, sai từ loại là lỗi "đắt" vì câu trông vẫn có vẻ đúng: <em>successfully plan</em> khác <em>successful plan</em>.'
            ],
            tip: 'Gặp từ mới, hãy ghi cả họ từ (noun, verb, adjective, adverb) thay vì một dạng duy nhất.'
        }
    },
    'articles-determiners': {
        icon: '📰',
        title: 'Articles & Determiners (Mạo Từ & Từ Hạn Định) - Beginner',
        category: 'foundations',
        level: 'beginner',
        connections: ['countable-uncountable', 'pronouns-possessives', 'quantifiers', 'subject-verb-agreement'],
        theory: {
            overview: 'Mạo từ cho người nghe biết bạn nói về <strong>một thứ bất kỳ</strong> (a/an), <strong>một thứ đã xác định</strong> (the) hay <strong>nói chung</strong> (không dùng mạo từ – zero article). Mạo từ là một nhóm trong họ <strong>determiners</strong> (từ hạn định) đứng trước danh từ.',
            formula: [
                {
                    label: 'a / an',
                    pattern: 'a / an + danh từ đếm được số ít',
                    note: 'chưa xác định'
                },
                {
                    label: 'the',
                    pattern: 'the + danh từ',
                    note: 'đã xác định hoặc duy nhất'
                },
                {
                    label: 'Zero article',
                    pattern: 'Ø + danh từ số nhiều / không đếm được',
                    note: 'khi nói chung'
                }
            ],
            tables: [
                {
                    title: 'Chọn nhanh',
                    head: ['Trường hợp', 'Dùng', 'Ví dụ'],
                    rows: [
                        ['Lần đầu nhắc đến', 'a / an', '<em>I bought a book.</em>'],
                        ['Đã xác định / đã nhắc trước', 'the', '<em>The book is on the table.</em>'],
                        ['Duy nhất trong ngữ cảnh', 'the', '<em>the sun, the internet, the manager</em>'],
                        ['Nói chung chung', 'Ø', '<em>Books are useful. Computers have changed education.</em>']
                    ]
                }
            ],
            uses: [
                ['a hay an', 'chọn theo <strong>âm đầu</strong>, không theo chữ cái đầu', 'an hour (/aʊ/), a university (/j/)'],
                [
                    'Zero article kiểu institutional',
                    'cụm cố định nhấn chức năng/hoạt động',
                    'go to school, be at home, go to bed, be in prison'
                ],
                ['Nói khái quát về một loài', 'ba cách đều được', 'A tiger is… / The tiger is… / Tigers are…'],
                [
                    'Các determiners khác',
                    'chỉ định <em>this/that/these/those</em>; sở hữu <em>my/your/our</em>; lượng hóa <em>some/any/each/every/much/many</em>',
                    ''
                ]
            ],
            compare: [
                ['a book vs the book', 'một quyển chưa xác định / quyển đã xác định'],
                ['Children need sleep vs The children need sleep', 'trẻ em nói chung / một nhóm trẻ cụ thể trong ngữ cảnh']
            ],
            mistakes: [
                ['an information', 'some information / a piece of information', 'Không dùng a/an với danh từ không đếm được.'],
                ['the my book', 'my book / the book', 'Không dùng hai central determiners (mạo từ, sở hữu, chỉ định) cùng lúc.'],
                'Dịch "cái/sự" của tiếng Việt thành <em>the</em> một cách máy móc.'
            ],
            tip: 'Trước khi viết danh từ, tự hỏi 3 câu: <strong>đếm được không? số ít hay số nhiều? người đọc đã biết nó là gì chưa?</strong> → quyết định a/an, the hay Ø.'
        }
    },
    'pronouns-possessives': {
        icon: '🫱',
        title: 'Pronouns & Possessives (Đại Từ & Sở Hữu) - Beginner',
        category: 'foundations',
        level: 'beginner',
        connections: ['parts-of-speech', 'articles-determiners', 'relative-clauses', 'question-forms'],
        theory: {
            overview: 'Đại từ thay cho danh từ đã nhắc để tránh lặp lại: <em>Anna has a laptop. She uses it every day.</em> Mỗi nhóm đại từ có một vị trí riêng: làm chủ ngữ, làm tân ngữ, đứng trước danh từ hay đứng một mình.',
            tables: [
                {
                    title: 'Các nhóm chính',
                    head: ['Nhóm', 'Dạng', 'Chức năng / ví dụ'],
                    rows: [
                        ['Subject pronouns', 'I, you, he, she, it, we, they', 'làm chủ ngữ, đứng trước động từ'],
                        [
                            'Object pronouns',
                            'me, you, him, her, it, us, them',
                            'làm tân ngữ, sau động từ/giới từ: <em>She told me. Look at them.</em>'
                        ],
                        ['Possessive determiners', 'my, your, his, her, its, our, their', 'đứng trước danh từ: <em>This is my bag.</em>'],
                        ['Possessive pronouns', 'mine, yours, his, hers, ours, theirs', 'đứng một mình: <em>This bag is mine.</em>'],
                        [
                            'Reflexive pronouns',
                            'myself, yourself, herself…',
                            'phản thân hoặc nhấn mạnh: <em>She taught herself English.</em>'
                        ]
                    ]
                }
            ],
            uses: [
                ['Reflexive', 'khi chủ ngữ và tân ngữ là cùng một người/vật, hoặc để nhấn mạnh', 'She taught herself English.'],
                [
                    'Singular they',
                    'khi không rõ giới tính hoặc muốn trung tính; vẫn đi với động từ số nhiều',
                    'Everyone should bring their own laptop.'
                ],
                ['it', 'chỉ đồ vật, động vật, tình huống, thời tiết, thời gian', 'It is raining. It is 5 o’clock.'],
                ['one / ones', 'thay danh từ đếm được đã nhắc để tránh lặp', 'The red one is cheaper. I prefer the blue ones.'],
                ['Chủ ngữ ghép', 'dùng subject pronoun và thường nêu người khác trước', 'John and I went to the market.']
            ],
            compare: [
                ['my vs mine', '<em>my</em> + danh từ; <em>mine</em> đứng một mình']
            ],
            mistakes: [
                ['your’s, her’s, their’s', 'yours, hers, theirs', 'Possessive pronouns không bao giờ có apostrophe (kể cả <em>its</em>).'],
                ['Me and John went…', 'John and I went…', 'Vị trí chủ ngữ cần subject pronoun.'],
                [
                    'Please send it to myself.',
                    'Please send it to me.',
                    'Không dùng myself thay cho I/me khi không phản thân hay nhấn mạnh.'
                ],
                'Dùng đại từ khi không rõ nó thay cho ai/cái gì (xem mục Nâng cao).'
            ],
            advanced: [
                'Pronoun reference phải rõ trong văn trang trọng: <em>When Anna met Mai, she smiled</em> mơ hồ vì <em>she</em> có thể là Anna hoặc Mai. Nếu mơ hồ, hãy lặp lại danh từ.'
            ]
        }
    },
    'adjectives-adverbs': {
        icon: '🎨',
        title: 'Adjectives & Adverbs (Tính Từ & Trạng Từ) - Intermediate',
        category: 'foundations',
        level: 'intermediate',
        connections: ['parts-of-speech', 'comparisons', 'sentence-order', 'quantifiers'],
        theory: {
            overview: '<strong>Tính từ</strong> miêu tả danh từ; <strong>trạng từ</strong> miêu tả động từ, tính từ, trạng từ khác hoặc cả câu. Nói chiếc xe đẹp thì dùng tính từ; nói lái khéo thì dùng trạng từ.',
            formula: [
                {
                    label: 'Tính từ trước danh từ',
                    pattern: 'adjective + noun',
                    example: 'a careful driver'
                },
                {
                    label: 'Sau động từ nối',
                    pattern: 'be / seem / look / feel / become + adjective',
                    example: 'She looks careful.'
                },
                {
                    label: 'Trạng từ',
                    pattern: 'verb (+ object) + adverb',
                    example: 'She drives carefully.'
                }
            ],
            tables: [
                {
                    title: 'Vị trí thường gặp',
                    head: ['Loại', 'Vị trí', 'Ví dụ'],
                    rows: [
                        ['Adjective', 'trước danh từ / sau động từ nối', '<em>a smart student; She is smart.</em>'],
                        ['Adverb of manner', 'sau động từ hoặc sau tân ngữ', '<em>He speaks clearly. She opened the door slowly.</em>'],
                        ['Adverb of frequency', 'trước động từ thường, sau be', '<em>She often reads. She is often late.</em>'],
                        ['Degree adverb', 'trước tính từ / trạng từ', '<em>very useful, quite slowly</em>']
                    ]
                }
            ],
            uses: [
                ['Bổ nghĩa danh từ → adjective', '', 'a careful driver'],
                ['Sau động từ nối → adjective', 'kể cả khi nói cảm giác, tâm trạng', 'She looks tired. I feel bad.'],
                ['Bổ nghĩa động từ → adverb', '', 'She drives carefully.'],
                ['Bổ nghĩa tính từ/trạng từ khác → adverb', '', 'very useful, extremely slowly'],
                ['Stance adverbs', 'thể hiện thái độ người nói về cả câu', 'Frankly, … / Unfortunately, we lost.']
            ],
            sections: [
                {
                    title: '🔢 Thứ tự nhiều tính từ',
                    items: [
                        '<strong>opinion – size – age – shape – color – origin – material – purpose</strong>: <em>a lovely small old round brown French wooden table</em>. Chi tiết ở chủ điểm Adjective Order.'
                    ]
                }
            ],
            compare: [
                ['hard vs hardly', 'chăm chỉ / mạnh – hầu như không'],
                ['late vs lately', 'muộn – gần đây']
            ],
            mistakes: [
                ['I feel badly.', 'I feel bad.', 'Sau động từ nối cần tính từ (bổ ngữ cho chủ ngữ).'],
                'Đặt <em>only / almost / even</em> xa từ mà nó bổ nghĩa.',
                'Nhồi quá nhiều tính từ trước một danh từ.'
            ],
            advanced: ['Lạm dụng trạng từ làm câu yếu; thường nên thay bằng động từ mạnh: <em>ran very quickly</em> → <em>sprinted</em>.'],
            tip: 'Từ đó miêu tả <strong>danh từ</strong> → tính từ; miêu tả <strong>cách hành động xảy ra</strong> → trạng từ.'
        }
    },
    'phrases-vs-clauses': {
        icon: '🧬',
        title: 'Phrase vs Clause (Cụm Từ và Mệnh Đề) - Intermediate',
        category: 'foundations',
        level: 'intermediate',
        connections: ['sentence-order', 'noun-clauses', 'relative-clauses', 'fragments-run-ons'],
        theory: {
            overview: '<strong>Clause</strong> (mệnh đề) có chủ ngữ + động từ chia thì (finite verb); <strong>phrase</strong> (cụm từ) thì không. Đây là nền tảng để biết cụm nào tự đứng thành câu được, và để tránh lỗi fragment/run-on.',
            tables: [
                {
                    title: 'Cụm từ (Phrase): không có động từ chia thì',
                    head: ['Loại', 'Ví dụ', 'Vai trò'],
                    rows: [
                        ['Noun phrase', '<em>the tall boy</em>', 'làm chủ ngữ / tân ngữ; nén thông tin quanh danh từ'],
                        ['Verb phrase', '<em>has been working</em>', 'cụm động từ'],
                        ['Prepositional phrase', '<em>on the desk, in the room</em>', 'bổ nghĩa']
                    ]
                },
                {
                    title: 'Mệnh đề (Clause): có chủ ngữ + động từ chia thì',
                    head: ['Loại', 'Ví dụ', 'Vai trò'],
                    rows: [
                        ['Independent clause', '<em>She smiled.</em>', 'tự đứng thành câu'],
                        ['Dependent clause', '<em>because she smiled</em>', 'cần mệnh đề chính']
                    ],
                    note: 'Mệnh đề phụ thuộc gồm 3 loại: relative, noun và adverbial clause (xem mục Cách dùng).'
                }
            ],
            uses: [
                ['Relative clause', 'bổ nghĩa cho danh từ', 'the man who called'],
                ['Noun clause', 'làm chủ ngữ/tân ngữ như một danh từ', 'I know that he left.'],
                ['Adverbial clause', 'thêm thời gian, điều kiện, nguyên nhân', 'because she was tired']
            ],
            compare: [
                ['because of rain vs because it rained', '<em>because of</em> + danh từ = phrase; <em>because</em> + S + V = clause']
            ],
            mistakes: [
                ['Because she was tired.', 'She left early because she was tired.', 'Mệnh đề phụ thuộc đứng một mình là fragment.'],
                'Gọi mọi cụm dài là clause dù không có finite verb.',
                'Rút gọn clause khi chủ ngữ bị mơ hồ.'
            ],
            advanced: [
                'Participle clause và reduced relative clause là cách rút clause đầy đủ thành cấu trúc ngắn hơn: <em>the report prepared by Linh</em> = <em>the report which was prepared by Linh</em>.',
                'Khi phân tích câu dài, khoanh từng clause để tìm mệnh đề chính.'
            ],
            tip: 'Không có động từ chia thì → rất có thể chỉ là phrase, không tự đứng làm câu.'
        }
    },
    'sentence-types': {
        icon: '🏷️',
        title: 'Sentence Types (Các Loại Câu) - Intermediate',
        category: 'foundations',
        level: 'intermediate',
        connections: ['sentence-order', 'question-forms', 'imperatives-requests', 'fragments-run-ons'],
        theory: {
            overview: 'Câu được phân loại theo hai cách: theo <strong>chức năng</strong> (câu dùng để làm gì) và theo <strong>cấu trúc</strong> (có bao nhiêu mệnh đề, loại nào). Biết loại câu giúp chọn đúng dấu câu, ngữ điệu và nhịp viết.',
            tables: [
                {
                    title: 'Theo chức năng',
                    head: ['Loại', 'Dùng để'],
                    rows: [
                        ['Statement', 'cung cấp thông tin'],
                        ['Question', 'hỏi thông tin, xác nhận, hoặc yêu cầu gián tiếp'],
                        ['Command', 'yêu cầu, chỉ dẫn, nhờ vả'],
                        ['Exclamation', 'bộc lộ cảm xúc mạnh']
                    ]
                },
                {
                    title: 'Theo cấu trúc',
                    head: ['Loại', 'Thành phần', 'Ví dụ'],
                    rows: [
                        ['Simple', '1 independent clause', '<em>She reads every night.</em>'],
                        ['Compound', '≥ 2 independent clauses', '<em>She reads, and he writes.</em>'],
                        ['Complex', '1 main + ≥ 1 dependent clause', '<em>She reads because she enjoys learning.</em>'],
                        ['Compound-complex', '≥ 2 independent + ≥ 1 dependent', '<em>She reads, and he listens while they study.</em>']
                    ]
                }
            ],
            uses: [
                [
                    'Phân loại theo cấu trúc',
                    'đếm số independent clause trước, rồi xem có dependent clause (because, although, when, if, since…) không',
                    ''
                ],
                [
                    'Nối hai mệnh đề độc lập',
                    'dấu phẩy + liên từ, chấm phẩy, hoặc tách thành hai câu',
                    'She reads, and he writes. / She reads; he writes.'
                ]
            ],
            compare: [
                ['Simple sentence vs câu ngắn', 'simple chỉ có một mệnh đề độc lập, có thể rất dài'],
                [
                    'Command vs imperative',
                    'command là chức năng; imperative là cấu trúc. <em>Could you close the door?</em> là command nhưng không ở dạng imperative'
                ]
            ],
            mistakes: [
                [
                    'She reads, he writes.',
                    'She reads, and he writes.',
                    'Nối hai mệnh đề độc lập chỉ bằng dấu phẩy là comma splice / run-on.'
                ],
                'Dùng câu cảm thán trong academic writing khi không có chủ ý.'
            ],
            advanced: [
                'Trộn nhiều loại câu để tạo nhịp: quá nhiều câu đơn làm văn rời rạc, quá nhiều câu compound-complex làm văn nặng. Chọn loại câu phù hợp quan trọng hơn viết câu thật dài.'
            ]
        }
    },
    'subject-verb-agreement': {
        icon: '⚖️',
        title: 'Subject-Verb Agreement (Sự Hòa Hợp Chủ Ngữ - Động Từ) - Intermediate',
        category: 'foundations',
        level: 'intermediate',
        connections: ['sentence-order', 'present-simple', 'countable-uncountable', 'quantifiers'],
        theory: {
            overview: 'Động từ phải khớp với <strong>danh từ trung tâm của chủ ngữ</strong>: chủ ngữ số ít → động từ số ít, số nhiều → số nhiều. Chủ ngữ thật không phải lúc nào cũng là danh từ đứng gần động từ nhất.',
            formula: [
                {
                    label: 'Hòa hợp',
                    pattern: 'S số ít + V(s/es) · S số nhiều + V',
                    example: 'She works. / They work.'
                },
                {
                    label: 'Chủ ngữ thật',
                    example: 'The list of items <strong>is</strong> long.',
                    note: 'chủ ngữ thật là <em>list</em>, không phải <em>items</em>'
                }
            ],
            tables: [
                {
                    title: 'Các mẫu hay gặp',
                    head: ['Chủ ngữ', 'Động từ', 'Ví dụ'],
                    rows: [
                        [
                            'each, every, everyone, somebody, nobody, either, neither',
                            'số ít',
                            '<em>Each student has a card. Everyone is here.</em>'
                        ],
                        ['a number of + N', 'số nhiều', '<em>A number of students are absent.</em>'],
                        ['the number of + N', 'số ít', '<em>The number of students is increasing.</em>'],
                        ['either…or / neither…nor', 'theo chủ ngữ gần nhất', '<em>Neither the teacher nor the students are present.</em>'],
                        [
                            'số tiền, thời gian, khoảng cách',
                            'số ít (một lượng tổng thể)',
                            '<em>Ten years is a long time. Ten dollars is too much.</em>'
                        ],
                        ['môn học / lĩnh vực / news', 'số ít', '<em>Economics is fascinating. The news is good.</em>'],
                        ['singular they', 'số nhiều', '<em>Someone called – they are waiting.</em>']
                    ]
                }
            ],
            compare: [
                [
                    'Danh từ tập hợp (team, family, committee)',
                    'AmE thường số ít: <em>The team is winning</em>; BrE có thể số nhiều khi nhấn các cá nhân: <em>The team are arguing</em>'
                ],
                ['None of…', 'số ít hoặc số nhiều đều được, nhưng phải nhất quán trong bài viết']
            ],
            mistakes: [
                [
                    'The list of items are long.',
                    'The list of items is long.',
                    'Cụm giới từ chen giữa (<em>of items, with her friends</em>) không quyết định dạng động từ.'
                ],
                ['He work here.', 'He works here.', 'Không quên -s ở hiện tại đơn với chủ ngữ số ít.'],
                'Chia số nhiều cho danh từ chỉ trông như số nhiều: <em>news, economics</em>.'
            ],
            tip: 'Gạch bỏ cụm giới từ và mệnh đề chen giữa, tìm danh từ trung tâm, rồi mới chia động từ.'
        }
    }
};
