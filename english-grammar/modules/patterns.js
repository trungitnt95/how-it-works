// English Grammar Patterns
const grammarPatternsData = {
    'question-forms': {
        icon: '❓',
        title: 'Question Forms (Câu Hỏi) - Beginner',
        category: 'patterns',
        level: 'beginner',
        connections: ['sentence-order', 'present-simple', 'past-simple', 'negatives'],
        theory: {
            overview: 'Tiếng Anh không chỉ thêm dấu hỏi: thường phải <strong>đảo trợ động từ</strong> (do/does/did, be, modal) lên trước chủ ngữ.',
            formula: [
                {
                    label: 'Yes/No',
                    pattern: 'Auxiliary / be / modal + S + V?',
                    example: 'Do you like coffee? · Is she ready? · Can you swim?'
                },
                {
                    label: 'Wh-',
                    pattern: 'Wh-word + auxiliary + S + V?',
                    example: 'Where did she go?'
                },
                {
                    label: 'Wh- là chủ ngữ',
                    pattern: 'Wh-word (= chủ ngữ) + V?',
                    example: 'Who called you?',
                    note: 'không dùng do'
                }
            ],
            uses: [
                ['Trình tự an toàn', 'chọn thì → chọn trợ động từ → động từ chính về nguyên mẫu', 'Where did she go?'],
                ['Negative question', 'thể hiện kỳ vọng hoặc ngạc nhiên', 'Don’t you like it?'],
                ['Choice question', 'đưa phương án để chọn', 'Tea or coffee?'],
                ['Embedded / indirect question', 'lịch sự hơn, giữ trật tự S + V', 'Could you tell me where the station is?'],
                ['Tag question', 'xác nhận thông tin, giữ tương tác, mời người nghe đồng ý', 'You’re ready, aren’t you?']
            ],
            compare: [
                ['Who did you call? vs Who called you?', 'hỏi tân ngữ (bạn gọi ai) – hỏi chủ ngữ (ai gọi bạn)']
            ],
            mistakes: [
                ['Where did she went?', 'Where did she go?', 'Chia thì hai lần; sau do/does/did động từ về nguyên mẫu.'],
                ['Who did call you?', 'Who called you?', 'Wh-word là chủ ngữ thì không thêm do.'],
                [
                    'Could you tell me where is the station?',
                    'Could you tell me where the station is?',
                    'Không đảo trong câu hỏi gián tiếp.'
                ]
            ]
        }
    },
    'negatives': {
        icon: '🚫',
        title: 'Negatives (Câu Phủ Định) - Beginner',
        category: 'patterns',
        level: 'beginner',
        connections: ['question-forms', 'present-simple', 'present-continuous', 'fragments-run-ons'],
        theory: {
            overview: 'Phủ định không phải thêm "not" ở đâu cũng được: vị trí của <strong>not</strong> phụ thuộc động từ chính và thì. Câu chuẩn chỉ cần <strong>một</strong> yếu tố phủ định.',
            tables: [
                {
                    head: ['Loại câu', 'Mẫu', 'Ví dụ'],
                    rows: [
                        [
                            'Động từ thường – hiện tại',
                            'do / does not + V nguyên mẫu',
                            '<em>I do not understand. He does not work here.</em>'
                        ],
                        ['Động từ thường – quá khứ', 'did not + V', '<em>We did not see her.</em>'],
                        ['To be', 'be + not', '<em>I am not busy. She is not ready.</em>'],
                        ['Modal', 'modal + not + V', '<em>You should not worry. They cannot swim.</em>']
                    ],
                    note: 'be và modal tự mang not, không cần do-support.'
                }
            ],
            uses: [
                ['no + noun', 'phủ định mạnh, gọn', 'no time, no reason, I have no money.'],
                ['never, nobody, nothing, nowhere, neither', 'tự mang nghĩa phủ định, không thêm not', 'Nobody came.'],
                [
                    'not + any-words',
                    'sau don’t / isn’t / can’t dùng anything, anyone, anywhere',
                    'I can’t find anyone. She didn’t go anywhere.'
                ],
                [
                    'hardly, barely, rarely, scarcely',
                    'gần phủ định; đầu câu có thể gây đảo ngữ trang trọng',
                    'I can hardly hear you. Rarely have I seen such beauty.'
                ],
                [
                    'Transferred negation',
                    'phủ định chuyển lên động từ think/believe',
                    'I don’t think he will come. (tự nhiên hơn I think he won’t come)'
                ]
            ],
            compare: [
                ['I have no money vs I don’t have any money', 'mạnh, gọn – trung tính hơn'],
                [
                    'Not all students passed vs All students did not pass',
                    'có người đỗ – dễ hiểu là không ai đỗ (phạm vi phủ định rất quan trọng trong writing)'
                ]
            ],
            mistakes: [
                ['I don’t know nothing.', 'I don’t know anything.', 'Phủ định kép không dùng trong tiếng Anh chuẩn.'],
                ['He not works here.', 'He does not work here.', 'Động từ thường cần do-support.']
            ]
        }
    },
    'conjunctions': {
        icon: '🔗',
        title: 'Conjunctions (Liên Từ) - Intermediate',
        category: 'patterns',
        level: 'intermediate',
        connections: ['sentence-order', 'relative-clauses', 'conditionals', 'reported-speech'],
        theory: {
            overview: 'Liên từ nối ý và cho biết <strong>quan hệ logic</strong> giữa chúng: thêm ý, đối lập, nguyên nhân, kết quả, điều kiện, mục đích…',
            formula: [
                {
                    label: 'Đẳng lập',
                    pattern: 'Clause, + coordinating conjunction + clause'
                },
                {
                    label: 'Phụ thuộc',
                    pattern: 'Subordinating conjunction + clause, + main clause',
                    note: 'hoặc main clause + subordinating clause'
                }
            ],
            tables: [
                {
                    head: ['Nhóm', 'Ví dụ', 'Chức năng'],
                    rows: [
                        ['Coordinating (FANBOYS)', 'for, and, nor, but, or, yet, so', 'nối hai phần ngang hàng về ngữ pháp'],
                        [
                            'Subordinating',
                            'because, although, if, when, while, since, as',
                            'tạo mệnh đề phụ thuộc; mệnh đề phụ đứng trước hoặc sau'
                        ],
                        ['Correlative', 'both…and, either…or, neither…nor, not only…but also', 'cặp đôi, đòi hỏi cấu trúc song song']
                    ]
                }
            ],
            uses: [
                [
                    'and / but / because / so',
                    'thêm ý / đối lập / nguyên nhân / kết quả',
                    'I was tired, but I finished the report. She stayed home because it was raining.'
                ],
                [
                    'although / while / whereas',
                    'nhượng bộ hoặc đối chiếu',
                    'Although he was late, he still joined the meeting. While some agree, others disagree.'
                ],
                ['because / since / as', '<em>because</em> nhấn nguyên nhân trực tiếp; <em>since / as</em> nhẹ hơn, thiên văn viết', ''],
                ['so that / in order that', 'mục đích', 'She spoke slowly so that everyone could understand.'],
                ['Correlative', 'hai vế cùng dạng', 'She likes both reading and writing.']
            ],
            compare: [
                ['because vs because of', 'because + mệnh đề; because of + danh từ / V-ing']
            ],
            mistakes: [
                [
                    'Although it rained, but we went out.',
                    'Although it rained, we went out. / It rained, but we went out.',
                    'although và but diễn tả cùng một quan hệ – chỉ chọn một.'
                ],
                [
                    'She studied hard, she passed.',
                    'She studied hard, and she passed.',
                    'Nối hai mệnh đề độc lập bằng and/but/so thì đặt dấu phẩy trước liên từ; chỉ dùng dấu phẩy là comma splice.'
                ],
                ['both reading and to write', 'both reading and writing', 'Không phá cấu trúc song song sau cặp correlative.']
            ],
            advanced: [
                'Writing học thuật cần thêm connectors như <em>however, therefore, whereas, moreover, nevertheless</em> (xem Discourse Markers).'
            ],
            tip: 'Tự hỏi: <strong>"Ý sau đang bổ sung, phản bác, giải thích hay đặt điều kiện cho ý trước?"</strong> rồi mới chọn liên từ.'
        }
    },
    'comparisons': {
        icon: '📏',
        title: 'Comparisons (So Sánh) - Intermediate',
        category: 'patterns',
        level: 'intermediate',
        connections: ['adjectives-adverbs', 'quantifiers', 'sentence-order', 'subject-verb-agreement'],
        theory: {
            overview: 'Cấu trúc so sánh dùng để đối chiếu mức độ, số lượng hoặc chất lượng: <strong>so sánh hơn, so sánh nhất, ngang bằng, kém hơn</strong>. Học công thức trước, rồi mới học ngoại lệ.',
            tables: [
                {
                    title: 'Công thức',
                    head: ['Loại', 'Công thức', 'Ví dụ'],
                    rows: [
                        ['Hơn – tính từ ngắn', 'adj-er + than', '<em>She is taller than me. This test is easier than the last one.</em>'],
                        ['Hơn – tính từ dài', 'more + adj + than', '<em>This book is more interesting than that one.</em>'],
                        ['Hơn – trạng từ', 'more + adv / adv-er + than', '<em>He drives more carefully than his brother.</em>'],
                        ['Nhất – ngắn', 'the + adj-est (+ in/of + nhóm)', '<em>She is the fastest runner in the team.</em>'],
                        [
                            'Nhất – dài',
                            'the most + adj (+ in/of + nhóm)',
                            '<em>This is the most expensive hotel in town. Mai is the most careful student in the class.</em>'
                        ],
                        ['Ngang bằng', 'as + adj/adv + as', '<em>He is as tall as his father.</em>'],
                        ['Kém hơn', 'not as / so + adj/adv + as', '<em>This bag is not as heavy as that one.</em>'],
                        ['Số lượng – đếm được', 'fewer + danh từ số nhiều + than', '<em>I have fewer books than you.</em>'],
                        ['Số lượng – không đếm được', 'less + danh từ không đếm được', '<em>We need less water.</em>'],
                        ['Càng… càng…', 'the + comparative, the + comparative', '<em>The more you practice, the better you get.</em>'],
                        ['Giống / khác', 'the same as / different from / similar to', '<em>This phone is the same as mine.</em>']
                    ]
                },
                {
                    title: 'Bất quy tắc (phải học thuộc)',
                    head: ['Gốc', 'Hơn', 'Nhất'],
                    rows: [
                        ['good / well', 'better', 'best'],
                        ['bad / badly', 'worse', 'worst'],
                        ['far', 'farther / further', 'farthest / furthest'],
                        ['little', 'less', 'least']
                    ]
                }
            ],
            uses: [
                [
                    'Tăng / giảm mức độ so sánh hơn',
                    'đặt <em>much, far, a lot, a bit, a little</em> trước comparative (không dùng <em>very</em>)',
                    'This road is far busier. It’s a bit cheaper.'
                ]
            ],
            mistakes: [
                ['more easier, most fastest, more better', 'easier, fastest, better', 'Double comparative: chỉ chọn một cách.'],
                ['as tall than', 'as tall as / taller than', 'Không trộn mẫu; không bỏ than/as.'],
                ['She is most careful student.', 'She is the most careful student.', 'Không quên the trước so sánh nhất.'],
                ['less books / fewer water', 'fewer books / less water', 'fewer + đếm được số nhiều; less + không đếm được.'],
                [
                    'My salary is higher than my brother.',
                    'My salary is higher than my brother’s.',
                    'So sánh phải cùng loại đối tượng: lương với lương.'
                ],
                'Quên <em>from</em> trong <em>different from</em>.'
            ]
        }
    },
    'imperatives-requests': {
        icon: '👉',
        title: 'Imperatives & Requests (Câu Mệnh Lệnh & Yêu Cầu) - Beginner',
        category: 'patterns',
        level: 'beginner',
        connections: ['question-forms', 'modal-verbs', 'negatives', 'sentence-types'],
        theory: {
            overview: 'Câu mệnh lệnh (imperative) <strong>ẩn chủ ngữ</strong> và dùng <strong>động từ nguyên mẫu</strong> để ra lệnh, hướng dẫn, yêu cầu, cảnh báo hoặc đề nghị.',
            tables: [
                {
                    head: ['Mẫu', 'Công thức', 'Ví dụ'],
                    rows: [
                        ['Mệnh lệnh / hướng dẫn', 'V + …', '<em>Open the window.</em>'],
                        ['Phủ định / cấm', 'Don’t + V', '<em>Don’t touch that.</em>'],
                        ['Lịch sự', 'Please + V', '<em>Please sit down. Please wait here.</em>'],
                        ['Đề nghị cùng làm (gồm người nói)', 'Let’s + V / Let’s not + V', '<em>Let’s start now. Let’s not argue now.</em>'],
                        ['Nhắc / cảnh báo', 'Be careful / Watch out / Mind…', '<em>Be careful with the glass. Mind the step.</em>']
                    ]
                }
            ],
            uses: [
                ['Instructions, recipes, manuals', 'hướng dẫn trực tiếp từng bước', 'Mix the flour and sugar.'],
                ['Request lịch sự hơn', 'đổi sang câu hỏi với could / would / can', 'Could you open the window, please?'],
                ['Imperative cố định, lịch sự', 'không mang tính ra lệnh cộc lốc', 'Have a seat. Take a look. Enjoy your meal.'],
                ['Email công việc', 'imperative ngắn vẫn dùng được khi ngữ cảnh đủ lịch sự', 'Please find the file attached.']
            ],
            compare: [
                ['Open the window vs Could you open the window?', 'trực tiếp – lịch sự hơn'],
                ['Let’s not leave now vs Don’t leave now', 'đề nghị chung không làm – cấm/nhắc người nghe']
            ],
            mistakes: [
                ['Would you mind to open the door?', 'Would you mind opening the door?', 'Sau would you mind dùng V-ing.'],
                ['Not touch that.', 'Don’t touch that.', 'Không quên don’t.'],
                'Dùng imperative trần trong email dễ nghe cộc.'
            ],
            tip: 'Không chắc mức độ lịch sự → chuyển imperative thành request với <em>could / would</em>.'
        }
    },
    'relative-clauses': {
        icon: '🪢',
        title: 'Relative Clauses (Mệnh Đề Quan Hệ) - Advanced',
        category: 'patterns',
        level: 'advanced',
        connections: ['conjunctions', 'parts-of-speech', 'passive-voice', 'pronouns-possessives'],
        theory: {
            overview: 'Mệnh đề quan hệ bổ nghĩa cho danh từ, giúp gộp hai câu ngắn thành một bằng <strong>who, whom, which, that, whose, where, when, why</strong>.',
            tables: [
                {
                    title: 'Đại từ / trạng từ quan hệ',
                    head: ['Từ', 'Dùng cho', 'Ví dụ'],
                    rows: [
                        ['who / whom', 'người (whom khi làm tân ngữ, trang trọng)', '<em>The man who called you is my boss.</em>'],
                        ['which', 'vật, sự việc', '<em>The book which I bought is useful.</em>'],
                        [
                            'that',
                            'thay who/which, <strong>chỉ trong mệnh đề xác định</strong>',
                            '<em>The book that I bought is useful.</em>'
                        ],
                        ['whose', 'sở hữu của người hoặc vật', '<em>The girl whose brother lives abroad is my friend.</em>'],
                        ['where / when / why', 'nơi chốn / thời gian / lý do', '<em>the city where I live</em>']
                    ]
                },
                {
                    title: 'Xác định vs không xác định',
                    head: ['Loại', 'Chức năng', 'Dấu phẩy', 'Ví dụ'],
                    rows: [
                        ['Defining', 'giới hạn danh từ', 'không', '<em>Students who study daily improve faster.</em>'],
                        ['Non-defining', 'thêm thông tin phụ', 'có', '<em>My laptop, which I bought last year, still works well.</em>']
                    ]
                }
            ],
            uses: [
                [
                    'Lược đại từ quan hệ',
                    'khi nó làm <strong>tân ngữ</strong> trong mệnh đề xác định; không lược khi nó là chủ ngữ',
                    'The movie (that) we watched was great.'
                ],
                [
                    'Vị trí giới từ',
                    'văn nói: giới từ cuối; trang trọng: giới từ + which/whom (không dùng giới từ + that)',
                    'the company I work for / the company for which I work'
                ],
                ['Quantifier + of whom / which', '', 'I have many friends, many of whom live abroad.'],
                ['Sentential which', 'quay lại cả mệnh đề trước', 'He passed the exam, which surprised everyone.']
            ],
            compare: [
                [
                    'The students who passed celebrated vs The students, who passed, celebrated',
                    'chỉ nhóm đỗ ăn mừng – tất cả đều đỗ (dấu phẩy đổi nghĩa)'
                ],
                [
                    'where vs which',
                    '<em>the city where I live</em> (live in: mệnh đề đủ) – <em>the city which I visited</em> (visit còn thiếu tân ngữ → không dùng where)'
                ]
            ],
            mistakes: [
                [
                    'My laptop, that I bought last year, …',
                    'My laptop, which I bought last year, …',
                    'Không dùng that trong mệnh đề không xác định.'
                ],
                ['The man who he called me …', 'The man who called me …', 'Không thêm đại từ thừa.']
            ]
        }
    },
    'reported-speech': {
        icon: '🗣️',
        title: 'Reported Speech (Câu Tường Thuật) - Advanced',
        category: 'patterns',
        level: 'advanced',
        connections: ['question-forms', 'past-perfect', 'noun-clauses', 'pronouns-possessives'],
        theory: {
            overview: 'Câu tường thuật chuyển lời nói trực tiếp thành gián tiếp. Khi động từ tường thuật ở quá khứ, thường phải đổi <strong>4 lớp</strong>: động từ tường thuật, thì, đại từ, từ chỉ thời gian/nơi chốn. Ví dụ: <em>She said, "I am tired."</em> → <em>She said that she was tired.</em>',
            tables: [
                {
                    title: 'Lùi thì (backshift)',
                    head: ['Trực tiếp', 'Tường thuật'],
                    rows: [
                        ['present simple / continuous', 'past simple / continuous'],
                        ['present perfect (continuous)', 'past perfect (continuous)'],
                        ['past simple', 'past perfect (khi cần rõ thứ tự)'],
                        ['past continuous', 'giữ nguyên hoặc past perfect continuous'],
                        ['will / will be V-ing / will have V3', 'would / would be V-ing / would have V3'],
                        ['am/is/are going to', 'was/were going to'],
                        ['can / may / shall', 'could / might / should'],
                        ['must', 'had to (bắt buộc); suy đoán có thể giữ must']
                    ]
                },
                {
                    title: 'Đổi từ chỉ thời gian, nơi chốn, chỉ định',
                    head: ['Trực tiếp', 'Tường thuật'],
                    rows: [
                        ['now / today', 'then / that day'],
                        ['tomorrow / yesterday', 'the next day / the day before'],
                        ['last week / ago', 'the week before / before, earlier'],
                        ['here / this / these', 'there / that / those']
                    ]
                }
            ],
            uses: [
                [
                    'Câu trần thuật',
                    'say (that) + mệnh đề; tell + tân ngữ người (that)',
                    'He said (that) he was busy. She told me she was busy.'
                ],
                ['Câu hỏi Yes/No', 'if / whether + S + V', 'He asked if I was ready.'],
                ['Câu hỏi Wh-', 'wh-word + trật tự S + V', '"Where are you?" → He asked where I was.'],
                ['Mệnh lệnh, yêu cầu', 'tell / ask + O + to V', 'He told me to sit down.'],
                ['Đề nghị, hứa', '', 'She offered to help. He promised that he would call.']
            ],
            sections: [
                {
                    title: '⏸️ Khi nào không cần lùi thì',
                    items: [
                        'Chân lý, định nghĩa, quy luật hoặc điều vẫn còn đúng: <em>The teacher said that the Earth revolves around the Sun.</em>',
                        'Động từ tường thuật ở hiện tại / hiện tại hoàn thành / tương lai: <em>She says she is tired.</em>',
                        'Lịch trình, thông báo cố định vẫn giữ nguyên tính xác thực.'
                    ]
                }
            ],
            mistakes: [
                ['She said me she was busy.', 'She told me she was busy.', 'Không dùng say + tân ngữ người.'],
                ['He asked where was I.', 'He asked where I was.', 'Không giữ trật tự câu hỏi.'],
                'Quên đổi here / this / today / yesterday / tomorrow theo mốc của người tường thuật.'
            ],
            tip: 'Sửa theo thứ tự: <strong>nghĩa câu → đại từ → thời gian / nơi chốn → thì</strong>.'
        }
    },
    'parallel-structure': {
        icon: '🪞',
        title: 'Parallel Structure (Cấu Trúc Song Song) - Advanced',
        category: 'patterns',
        level: 'advanced',
        connections: ['comparisons', 'conjunctions', 'gerunds-infinitives', 'fragments-run-ons'],
        theory: {
            overview: 'Cấu trúc song song là giữ các phần tương đương <strong>ở cùng một dạng ngữ pháp</strong>: danh từ với danh từ, V-ing với V-ing, to V với to V. <em>She likes reading, writing, and speaking.</em>',
            tables: [
                {
                    head: ['Vị trí', 'Mẫu', 'Ví dụ'],
                    rows: [
                        [
                            'Danh sách',
                            'N + N + N / V-ing + V-ing / to V + to V',
                            '<em>books, pens, and notebooks; to learn, to practice, and to improve</em>'
                        ],
                        [
                            'both…and / either…or / neither…nor',
                            'hai vế cùng dạng',
                            '<em>both efficient and affordable; either today or tomorrow; neither big nor expensive</em>'
                        ],
                        ['not only…but also', 'hai vế cùng dạng', '<em>not only saved time but also reduced cost</em>'],
                        ['than / as', 'hai vế so sánh cùng dạng', '<em>more interested in reading than in watching TV</em>']
                    ]
                }
            ],
            uses: [
                [
                    'Nơi đặc biệt quan trọng',
                    'thesis, bullet list, slide, heading, report, văn nghị luận – câu song song rõ, đều và thuyết phục hơn',
                    ''
                ]
            ],
            mistakes: [
                [
                    'She likes reading, to write, and speaking.',
                    'She likes reading, writing, and speaking.',
                    'Trộn nhiều dạng trong một danh sách.'
                ],
                'Để <em>not only</em> và <em>but also</em> nối hai thành phần khác cấp.',
                'Đổi một vế thành mệnh đề đầy đủ trong khi các vế khác chỉ là cụm từ.'
            ],
            advanced: ['Nhiều câu không sai ngữ pháp nhưng vẫn bị đánh giá thấp vì thiếu tính song song.'],
            tip: 'Sửa nhanh nhất: <strong>đổi một vế cho cùng dạng với các vế còn lại</strong>.'
        }
    }
};
