// English Grammar Common Mistakes
const grammarMistakesData = {
    'prepositions': {
        icon: '📍',
        title: 'Prepositions (Giới Từ) - Beginner',
        category: 'mistakes',
        level: 'beginner',
        connections: ['articles-determiners', 'question-forms', 'countable-uncountable', 'sentence-order'],
        theory: {
            overview: 'Giới từ thể hiện <strong>thời gian, nơi chốn, hướng chuyển động</strong> và quan hệ giữa các thành phần. Giới từ tiếng Anh thường không trùng với tiếng Việt, nên cách an toàn nhất là học theo cụm.',
            tables: [
                {
                    head: ['Nhóm', 'at', 'on', 'in'],
                    rows: [
                        [
                            'Thời gian',
                            'giờ, thời điểm: <em>at 7 o’clock, at noon, at night</em>',
                            'ngày: <em>on Monday, on Friday</em>',
                            'tháng, năm, buổi: <em>in June, in 2026, in the morning</em>'
                        ],
                        [
                            'Nơi chốn',
                            'điểm: <em>at the station</em>',
                            'bề mặt: <em>on the wall</em>',
                            'không gian bao quanh: <em>in the room</em>'
                        ]
                    ]
                }
            ],
            uses: [
                [
                    'Chuyển động',
                    'to (hướng tới), into (vào trong), onto (lên trên), across, through, along',
                    'go to school, walk into the room, jump onto the table'
                ],
                ['arrive at vs arrive in', 'at + địa điểm cụ thể; in + thành phố / quốc gia', 'arrive at the airport / arrive in Hanoi'],
                ['by vs until (thời hạn)', 'by = hạn chót; until = kéo dài đến mốc', 'Finish it by Friday. I waited until 6 o’clock.'],
                ['Nguyên nhân, phương tiện, tác nhân', 'because of, by, with', ''],
                ['Collocation cố định', 'tính từ / động từ / danh từ + giới từ', 'interested in, good at, depend on, reason for'],
                ['Sau giới từ dùng danh từ hoặc V-ing', '', 'good at solving problems, interested in learning'],
                [
                    'Giới từ cuối câu hỏi / mệnh đề quan hệ (văn nói)',
                    'văn trang trọng dùng giới từ + which/whom',
                    'Who are you talking to?'
                ]
            ],
            sections: [
                {
                    title: '🧱 Cụm cố định nên học nguyên khối',
                    items: ['<em>at night</em> nhưng <em>in the morning</em>', '<em>on time</em> (đúng giờ) khác <em>in time</em> (kịp lúc)']
                }
            ],
            mistakes: [
                ['discuss about the plan', 'discuss the plan', 'Một số động từ không cần giới từ: discuss, enter, marry, reach.'],
                ['interested in learn', 'interested in learning', 'Sau giới từ không dùng động từ nguyên mẫu.'],
                'Dịch từng giới từ từ tiếng Việt sang.'
            ],
            tip: 'Học giới từ theo cụm (collocation) thay vì từng từ riêng lẻ.'
        }
    },
    'gerunds-infinitives': {
        icon: '🔄',
        title: 'Gerund & Infinitive (Danh Động Từ & Động Từ Nguyên Mẫu) - Intermediate',
        category: 'mistakes',
        level: 'intermediate',
        connections: ['parts-of-speech', 'modal-verbs', 'conjunctions', 'causatives'],
        theory: {
            overview: 'Sau một số động từ phải dùng <strong>V-ing (gerund)</strong>, sau số khác phải dùng <strong>to V</strong>, và một số nhóm dùng <strong>V nguyên mẫu không to</strong>. Gerund là danh động từ, hoạt động như danh từ (làm chủ ngữ, tân ngữ).',
            tables: [
                {
                    head: ['Mẫu', 'Dùng sau', 'Ví dụ'],
                    rows: [
                        [
                            'V-ing',
                            'enjoy, avoid, finish, keep, suggest; sau giới từ; làm chủ ngữ',
                            '<em>I enjoy reading. I suggest taking a break. Swimming is relaxing. interested in learning</em>'
                        ],
                        [
                            'to V',
                            'want, decide, hope, plan, promise; sau tính từ; chỉ mục đích',
                            '<em>She wants to study abroad. happy to help, easy to understand. I came to help.</em>'
                        ],
                        ['O + to V', 'ask, tell, advise, encourage, allow', '<em>She asked me to wait.</em>'],
                        [
                            'V nguyên mẫu (bare)',
                            'modal, make / let, động từ tri giác',
                            '<em>You must go. Let me help. I saw him leave.</em>'
                        ]
                    ]
                }
            ],
            sections: [
                {
                    title: '🔀 Động từ đổi nghĩa theo V-ing / to V',
                    items: [
                        ['stop', '<em>stop smoking</em> = bỏ, ngừng hút thuốc; <em>stop to smoke</em> = dừng việc khác lại để hút thuốc'],
                        ['remember / forget', '<em>remember to call</em> = nhớ phải gọi; <em>remember calling</em> = nhớ đã gọi'],
                        ['try', '<em>try to do</em> = cố gắng làm; <em>try doing</em> = thử làm xem sao'],
                        ['regret', '<em>regret to tell</em> = lấy làm tiếc phải báo; <em>regret telling</em> = hối hận vì đã nói']
                    ]
                }
            ],
            mistakes: [
                ['I enjoy to read.', 'I enjoy reading.', 'enjoy / avoid / suggest + V-ing.'],
                ['good at solve problems', 'good at solving problems', 'Sau giới từ dùng V-ing.']
            ],
            tip: 'Học theo cụm và cả câu ví dụ: <em>avoid doing, decide to do, be interested in doing</em>. Chi tiết: Verb Patterns.'
        }
    },
    'quantifiers': {
        icon: '🧮',
        title: 'Quantifiers (Lượng Từ) - Intermediate',
        category: 'mistakes',
        level: 'intermediate',
        connections: ['countable-uncountable', 'articles-determiners', 'subject-verb-agreement', 'comparisons'],
        theory: {
            overview: 'Lượng từ (<strong>some, any, much, many, few, little, a lot of…</strong>) nói về số lượng và phải khớp loại danh từ. Bước đầu tiên luôn là xác định danh từ <strong>đếm được hay không đếm được</strong>.',
            tables: [
                {
                    head: ['Lượng từ', 'Dùng với', 'Sắc thái / ví dụ'],
                    rows: [
                        ['many, several, a number of', 'đếm được số nhiều', '<em>many books</em>'],
                        [
                            'much, a great deal of',
                            'không đếm được',
                            'thường trong phủ định / câu hỏi: <em>How much time? There isn’t much time.</em>'
                        ],
                        [
                            'a lot of / lots of',
                            'cả hai loại',
                            '<em>a lot of books, a lot of water</em> – tự nhiên hơn much trong câu khẳng định'
                        ],
                        [
                            'a few / few',
                            'đếm được số nhiều',
                            '<em>a few friends</em> = có vài người (tích cực); <em>few friends</em> = gần như không có (tiêu cực)'
                        ],
                        [
                            'a little / little',
                            'không đếm được',
                            '<em>There is still a little hope</em> (tích cực); <em>We have little time left</em> (tiêu cực)'
                        ],
                        [
                            'some / any',
                            'cả hai loại',
                            'some: khẳng định, lời mời / đề nghị (<em>Would you like some coffee?</em>); any: phủ định, câu hỏi thường'
                        ],
                        ['each / every', 'danh từ số ít + động từ số ít', '<em>every student is…</em>']
                    ]
                }
            ],
            compare: [
                ['most people vs most of the people', 'người ta nói chung – một nhóm cụ thể']
            ],
            mistakes: [
                ['every students', 'every student', 'every/each đi với danh từ số ít.'],
                [
                    'I have much friends.',
                    'I have a lot of friends / many friends.',
                    'much dùng cho không đếm được, và ít tự nhiên trong câu khẳng định đời thường.'
                ],
                'Nhầm <em>a number of</em> (số nhiều) với <em>the number of</em> (số ít).'
            ],
            advanced: [
                'Trong writing, chọn đúng lượng từ giúp mô tả dữ liệu chính xác: <em>a few</em> vs <em>few</em>, <em>most</em> vs <em>most of</em> thay đổi rõ ý nghĩa.'
            ]
        }
    },
    'fragments-run-ons': {
        icon: '🧵',
        title: 'Fragments & Run-ons (Câu Thiếu & Câu Dính) - Advanced',
        category: 'mistakes',
        level: 'advanced',
        connections: ['sentence-order', 'conjunctions', 'punctuation-capitalization', 'noun-clauses'],
        theory: {
            overview: 'Một câu hoàn chỉnh cần <strong>ít nhất một mệnh đề độc lập</strong>. Thiếu mệnh đề độc lập → <strong>fragment</strong> (câu thiếu); nối hai mệnh đề độc lập sai cách → <strong>run-on / comma splice</strong> (câu dính).',
            tables: [
                {
                    head: ['Lỗi', 'Ví dụ sai', 'Mô tả'],
                    rows: [
                        ['Fragment', '<em>Because I was tired.</em>', 'thiếu chủ ngữ, động từ chia thì hoặc mệnh đề chính'],
                        ['Run-on', '<em>I was tired I went home.</em>', 'hai mệnh đề độc lập dính liền, không dấu, không từ nối'],
                        ['Comma splice', '<em>I was tired, I slept.</em>', 'nối hai mệnh đề độc lập chỉ bằng dấu phẩy']
                    ]
                }
            ],
            uses: [
                ['Sửa fragment', 'ghép với mệnh đề chính hoặc bổ sung chủ–vị', 'Because I was tired, I went home.'],
                [
                    'Sửa run-on / comma splice',
                    'dấu chấm, chấm phẩy, dấu phẩy + FANBOYS, hoặc liên từ phụ thuộc',
                    'I was tired. I went home. / I was tired; I went home. / I was tired, so I went home.'
                ],
                ['Fragment có chủ ý', 'chấp nhận trong slogan, quảng cáo, văn học – không dùng trong formal writing', '']
            ],
            mistakes: [
                'Thêm <em>because, although, when</em> vào đầu câu rồi quên mệnh đề chính.',
                'Sửa comma splice bằng cách… thêm một dấu phẩy nữa.',
                'Kéo câu dài bằng <em>and… and… and…</em> khi quan hệ logic giữa các ý không rõ.'
            ],
            advanced: [
                'Trong IELTS/TOEFL và academic writing, fragment và comma splice là <strong>lỗi cấu trúc</strong> nghiêm trọng. Câu dài để "trông học thuật" mà nối sai mệnh đề vẫn bị trừ điểm – câu tốt cần logic rõ, không cần dài.'
            ]
        }
    },
    'punctuation-capitalization': {
        icon: '✍️',
        title: 'Punctuation & Capitalization (Dấu Câu & Viết Hoa) - Beginner',
        category: 'mistakes',
        level: 'beginner',
        connections: ['conjunctions', 'fragments-run-ons', 'reported-speech', 'relative-clauses'],
        theory: {
            overview: 'Dấu câu và viết hoa là phần nhỏ nhưng ảnh hưởng mạnh tới độ rõ ràng: nhiều câu đúng ngữ pháp vẫn khó đọc vì dấu câu, viết hoa không chuẩn.',
            tables: [
                {
                    head: ['Dấu', 'Chức năng', 'Ví dụ'],
                    rows: [
                        ['.', 'kết thúc câu hoàn chỉnh', '<em>My name is Linh.</em>'],
                        [
                            ',',
                            'tách danh sách, sau mệnh đề/cụm mở đầu, quanh thông tin phụ',
                            '<em>After class, we went for coffee. Although it was late, we kept working.</em>'
                        ],
                        [';', 'nối hai mệnh đề độc lập có quan hệ gần', '<em>It was late; we went home.</em>'],
                        [':', 'mở danh sách, giải thích', '<em>I need three things: pen, paper, ink.</em>'],
                        ['?', 'câu hỏi trực tiếp', ''],
                        ['’ (apostrophe)', 'sở hữu', '<em>Lan’s book, students’ projects</em>']
                    ]
                }
            ],
            sections: [
                {
                    title: '🔠 Viết hoa',
                    items: [
                        'Viết hoa: đầu câu, <em>I</em>, tên riêng, quốc gia, <strong>ngôn ngữ</strong>, quốc tịch, ngày trong tuần, tháng, ngày lễ.',
                        'Thường không viết hoa: mùa và môn học chung – <em>I study math and English in spring.</em>'
                    ]
                }
            ],
            mistakes: [
                [
                    'It was late, we went home.',
                    'It was late. We went home. / It was late; we went home.',
                    'Dùng dấu phẩy thay dấu chấm giữa hai câu độc lập (comma splice).'
                ],
                ['english', 'English', 'Ngôn ngữ luôn viết hoa.'],
                ['The dog wagged it’s tail.', 'The dog wagged its tail.', '<em>it’s</em> = it is; <em>its</em> = của nó.'],
                'Quá nhiều dấu phẩy trong câu ngắn, hoặc bỏ hẳn dấu phẩy ở câu dài có mệnh đề phụ.'
            ],
            tip: 'Khi rà bài, kiểm tra <strong>riêng một lượt</strong> chỉ cho dấu câu. Chi tiết: Punctuation, Apostrophe, Capitalization.'
        }
    },
    'modifier-errors': {
        icon: '🎯',
        title: 'Misplaced Modifiers (Bổ Ngữ Đặt Sai Vị Trí) - Advanced',
        category: 'mistakes',
        level: 'advanced',
        connections: ['adjectives-adverbs', 'participle-clauses', 'sentence-order', 'pronoun-reference'],
        theory: {
            overview: 'Modifier là phần bổ nghĩa. Đặt sai chỗ, nó bám vào sai từ và có thể <strong>làm câu đổi nghĩa</strong> hoặc trở nên buồn cười. Trong academic writing, đây là lỗi <strong>logic</strong>, không chỉ là lỗi văn phong.',
            tables: [
                {
                    head: ['Lỗi', 'Sai', 'Sửa'],
                    rows: [
                        [
                            'Misplaced modifier – đặt cạnh sai thành phần',
                            '<em>She almost drove her kids to school every day.</em> (= suýt lái)',
                            '<em>She drove her kids to school almost every day.</em>'
                        ],
                        [
                            'Dangling modifier – không có chủ thể hợp lý',
                            '<em>Walking to work, the rain started.</em> (mưa không đi bộ)',
                            '<em>Walking to work, I got caught in the rain.</em>'
                        ]
                    ]
                }
            ],
            uses: [
                ['Đặt modifier sát từ nó bổ nghĩa', 'và đảm bảo cụm mở đầu khớp với chủ ngữ', ''],
                [
                    'only, almost, nearly, just',
                    'đặc biệt nhạy với vị trí – đặt ngay trước phần được giới hạn',
                    'Only she said he lied (chỉ mình cô ấy nói) ≠ She only said he lied (cô ấy chỉ nói)'
                ],
                ['Dấu phẩy cho modifier không thiết yếu', '', '']
            ],
            mistakes: ['Để participle mở đầu gắn nhầm chủ ngữ.', 'Để mệnh đề quan hệ bổ nghĩa nhầm cho danh từ đứng gần nhất.'],
            tip: 'Khi proofreading, rà riêng các cụm mở đầu, participle clause và trạng từ tiêu điểm (only, almost, just).'
        }
    },
    'pronoun-reference': {
        icon: '🧷',
        title: 'Pronoun Reference (Sự Tham Chiếu Đại Từ) - Advanced',
        category: 'mistakes',
        level: 'advanced',
        connections: ['pronouns-possessives', 'relative-clauses', 'reported-speech', 'modifier-errors'],
        theory: {
            overview: 'Đại từ (<em>he, she, it, they, this, that</em>) phải chỉ <strong>rõ một đối tượng</strong>. Nếu người đọc không biết nó chỉ ai/cái gì, câu mơ hồ: <em>When Nam met Long, he was nervous.</em> – ai nervous?',
            tables: [
                {
                    head: ['Kiểu mơ hồ', 'Ví dụ', 'Cách sửa'],
                    rows: [
                        [
                            'Hai đối tượng cùng loại ở gần nhau',
                            '<em>Mai told Linh she was late.</em>',
                            '<em>Mai told Linh, "You are late."</em>'
                        ],
                        ['this / that đứng một mình', '<em>This shows a problem.</em>', '<em>This trend shows a problem.</em>'],
                        ['Broad it – chỉ cả một ý dài', '<em>It is important.</em>', '<em>Reducing costs is important.</em>']
                    ]
                }
            ],
            uses: [
                ['Lặp lại danh từ', 'khi có hai antecedent cùng khả năng – rõ hơn dùng đại từ', ''],
                ['this / that + danh từ', 'trong academic writing', 'this issue, this pattern, this finding'],
                [
                    'Khớp số và ngôi',
                    'giữa đại từ và antecedent; singular they phù hợp ngữ cảnh hiện đại',
                    'Every student should bring their book.'
                ]
            ],
            tip: 'Viết xong đại từ, hỏi: <strong>"Người đọc lần đầu có biết ngay nó chỉ ai / cái gì không?"</strong>'
        }
    }
};
