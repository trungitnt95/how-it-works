// English Grammar Structures
const grammarStructuresData = {
    'modal-verbs': {
        icon: '🛠️',
        title: 'Modal Verbs (Động Từ Khuyết Thiếu) - Intermediate',
        category: 'structures',
        level: 'intermediate',
        connections: ['question-forms', 'conditionals', 'present-perfect', 'future-simple'],
        theory: {
            overview: 'Động từ khuyết thiếu (<strong>can, could, may, might, must, should, would…</strong>) thêm sắc thái cho động từ chính: khả năng, xin phép, lời khuyên, nghĩa vụ, suy đoán, lịch sự.',
            formula: [
                {
                    pattern: 'S + modal + V',
                    example: 'You should rest more. · She can speak three languages.',
                    note: 'V nguyên mẫu không to'
                },
                {
                    label: 'Lưu ý',
                    note: 'Modal không chia theo ngôi: <em>He can</em>, không phải <em>He cans</em>.'
                }
            ],
            tables: [
                {
                    head: ['Chức năng', 'Modal', 'Ví dụ'],
                    rows: [
                        ['Khả năng (ability)', 'can / could / be able to', '<em>She can speak three languages.</em>'],
                        ['Xin phép (permission)', 'can / could / may', '<em>Can I sit here? May I come in?</em>'],
                        ['Khả năng xảy ra (possibility)', 'may / might / could', '<em>It might rain.</em>'],
                        ['Bắt buộc (obligation)', 'must / have to / need to', '<em>You must wear a helmet.</em>'],
                        ['Lời khuyên', 'should / ought to / had better', '<em>You should sleep earlier.</em>'],
                        ['Đề nghị / yêu cầu lịch sự', 'can / could / would / will', '<em>Would you like some tea? Could you help me?</em>']
                    ]
                }
            ],
            uses: [
                [
                    'Suy đoán hiện tại theo mức độ chắc chắn',
                    '<strong>must</strong> (gần như chắc chắn) > <strong>may</strong> > <strong>might</strong>; <strong>can’t</strong> = gần như chắc chắn không',
                    'She must be at home. He can’t be serious.'
                ],
                [
                    'Modal perfect: suy đoán / tiếc nuối về quá khứ',
                    'modal + have + V3',
                    'He must have forgotten. (suy đoán) / You should have told me. (đáng lẽ nên) / She can’t have seen it. (gần như chắc chắn không)'
                ]
            ],
            compare: [
                ['mustn’t vs don’t have to', 'cấm – không cần: <em>You mustn’t smoke here. / You don’t have to come.</em>'],
                ['must vs should', 'must mạnh hơn should']
            ],
            mistakes: [
                ['He cans swim.', 'He can swim.', 'Không thêm -s sau modal.'],
                ['You must to leave.', 'You must leave.', 'Không dùng to sau modal thường.']
            ],
            tip: 'Chọn modal theo <strong>mức độ chắc chắn, lịch sự và bắt buộc</strong> muốn thể hiện, không chỉ theo nghĩa từ vựng. Chi tiết modal perfect ở chủ điểm Modal Perfect.'
        }
    },
    'conditionals': {
        icon: '🌦️',
        title: 'Conditionals (Câu Điều Kiện) - Advanced',
        category: 'structures',
        level: 'advanced',
        connections: ['conjunctions', 'modal-verbs', 'future-simple', 'wish-if-only'],
        theory: {
            overview: 'Câu điều kiện nối một <strong>điều kiện</strong> với <strong>kết quả</strong>. Mỗi loại khác nhau ở mức độ có thật và thời gian mà nó nói tới.',
            tables: [
                {
                    head: ['Loại', 'Công thức', 'Ý nghĩa', 'Ví dụ'],
                    rows: [
                        ['0', 'If + hiện tại, hiện tại', 'sự thật hiển nhiên, quy luật', '<em>If water freezes, it expands.</em>'],
                        ['1', 'If + hiện tại, will + V', 'khả năng thật ở tương lai', '<em>If it rains, we will stay home.</em>'],
                        [
                            '2',
                            'If + V2 (quá khứ), would + V',
                            'giả định trái hiện tại / khó xảy ra',
                            '<em>If I had more time, I would learn Spanish.</em>'
                        ],
                        [
                            '3',
                            'If + had V3, would have V3',
                            'giả định trái quá khứ, tiếc nuối',
                            '<em>If I had known, I would have called.</em>'
                        ],
                        [
                            'Mixed',
                            'If + had V3, would + V (hoặc ngược lại)',
                            'nguyên nhân quá khứ → kết quả hiện tại',
                            '<em>If I had studied harder, I would have a better job now.</em>'
                        ]
                    ]
                }
            ],
            uses: [
                ['were cho mọi ngôi', 'trong văn trang trọng', 'If I were you, I would accept.'],
                ['unless ≈ if…not', 'nhưng không thay thế máy móc', 'Unless you study, you will fail. ≈ If you don’t study…'],
                ['provided (that), as long as', 'điều kiện biến thể', 'You can go out as long as you finish your homework.'],
                [
                    'Đảo ngữ bỏ if (trang trọng)',
                    '<strong>Should</strong> = loại 1; <strong>Were … to</strong> = loại 2; <strong>Had</strong> = loại 3',
                    'Should you need help… / Were I to… / Had I known…'
                ]
            ],
            compare: [
                ['If I had money, I would travel vs If I had had money, I would have travelled', 'giả định hiện tại – tiếc nuối quá khứ']
            ],
            mistakes: [
                [
                    'If I will see him, I will tell him.',
                    'If I see him, I will tell him.',
                    'Không dùng will trong mệnh đề if loại 1 (trừ khi will mang nghĩa sẵn lòng).'
                ],
                'Trộn loại 2 và loại 3 khi không có chủ ý mixed conditional.',
                'Dùng unless khi nghĩa không thật sự là if not.'
            ],
            tip: 'Chi tiết mixed conditionals ở chủ điểm Mixed Conditionals.'
        }
    },
    'passive-voice': {
        icon: '🏭',
        title: 'Passive Voice (Câu Bị Động) - Advanced',
        category: 'structures',
        level: 'advanced',
        connections: ['subject-verb-agreement', 'relative-clauses', 'past-simple', 'causatives'],
        theory: {
            overview: 'Câu bị động nhấn <strong>đối tượng, kết quả hoặc quy trình</strong> thay vì người thực hiện. Dùng khi người làm không rõ, không quan trọng, hoặc cần giọng văn khách quan.',
            formula: [
                {
                    label: 'Công thức',
                    pattern: 'S + be (chia theo thì) + V3 (+ by agent)'
                },
                {
                    label: 'Cách chuyển',
                    note: 'tân ngữ lên làm chủ ngữ → chia <em>be</em> theo thì của câu gốc → động từ chính đổi thành V3'
                }
            ],
            tables: [
                {
                    head: ['Thì', 'Mẫu bị động', 'Chủ động → Bị động'],
                    rows: [
                        ['Present simple', 'am/is/are + V3', '<em>People make cars in Japan.</em> → <em>Cars are made in Japan.</em>'],
                        [
                            'Past simple',
                            'was/were + V3',
                            '<em>They built the bridge in 2010.</em> → <em>The bridge was built in 2010.</em>'
                        ],
                        [
                            'Present continuous',
                            'am/is/are being + V3',
                            '<em>They are repairing the road.</em> → <em>The road is being repaired.</em>'
                        ],
                        [
                            'Present perfect',
                            'have/has been + V3',
                            '<em>Someone has stolen my bike.</em> → <em>My bike has been stolen.</em>'
                        ],
                        ['Future simple', 'will be + V3', '<em>The results will be announced tomorrow.</em>'],
                        ['Modal', 'modal + be + V3', '<em>The problem can be solved. It must be completed.</em>']
                    ]
                }
            ],
            uses: [
                ['Người làm không rõ / không quan trọng', '', 'My wallet was stolen. English is spoken worldwide.'],
                ['Văn học thuật, khoa học, quy trình, bản tin', 'giúp câu khách quan', 'The samples were analysed.'],
                ['Thông báo, quy định', '', 'Smoking is prohibited.'],
                ['Động từ hai tân ngữ (give, send)', 'có hai cách bị động', 'I was given a letter. / A letter was given to me.'],
                ['Động từ có giới từ cố định', 'giữ nguyên giới từ', 'They laughed at him. → He was laughed at.'],
                ['Get-passive', 'nhấn biến cố / kết quả, thân mật hơn be-passive', 'He got injured. He got hurt.'],
                ['Passive infinitive / gerund', '', 'She hates being watched. It needs to be done.']
            ],
            compare: [
                ['They built the bridge vs The bridge was built', 'nhấn người xây – nhấn cây cầu / việc hoàn thành']
            ],
            mistakes: [
                [
                    'The train was arrived.',
                    'The train arrived.',
                    'Nội động từ (arrive, die, sleep, happen) không có tân ngữ nên không có bị động.'
                ],
                ['The report finished yesterday.', 'The report was finished yesterday.', 'Không quên be + V3.'],
                'Dùng bị động khi người thực hiện quan trọng, hoặc khi câu chủ động ngắn và rõ hơn.'
            ],
            tip: 'Muốn nêu tác nhân thì thêm <em>by + agent</em>; không quan trọng thì bỏ hẳn. Đừng lạm dụng – quá nhiều bị động làm văn nặng, thiếu năng lượng.'
        }
    },
    'noun-clauses': {
        icon: '🧠',
        title: 'Noun Clauses (Mệnh Đề Danh Từ) - Advanced',
        category: 'structures',
        level: 'advanced',
        connections: ['question-forms', 'reported-speech', 'relative-clauses', 'sentence-order'],
        theory: {
            overview: 'Mệnh đề danh từ là một mệnh đề <strong>đóng vai trò danh từ</strong>: làm chủ ngữ, tân ngữ, bổ ngữ hoặc tân ngữ của giới từ. Nó mở đầu bằng <strong>that, if, whether</strong> hoặc <strong>wh-words</strong>, và bên trong giữ trật tự câu trần thuật (S + V).',
            tables: [
                {
                    head: ['Loại', 'Mẫu', 'Ví dụ'],
                    rows: [
                        ['That-clause', 'that + S + V', '<em>I believe that he is honest.</em>'],
                        ['Whether / if-clause', 'whether / if + S + V', '<em>I don’t know whether she will come.</em>'],
                        ['Wh-clause', 'what / where / why / how + S + V', '<em>Tell me what you need.</em>'],
                        [
                            'Extraposition (It giả)',
                            'It + be + adj + that-clause',
                            '<em>It is clear that he is right.</em> (tự nhiên hơn <em>That he is right is clear.</em>)'
                        ]
                    ]
                }
            ],
            uses: [
                ['Chủ ngữ', '', 'What he said surprised me. What matters most is consistency.'],
                [
                    'Tân ngữ sau động từ tư duy / nói / tri giác',
                    'know, think, believe, say, explain, wonder',
                    'I know that she is busy. I wonder where he lives.'
                ],
                ['Bổ ngữ sau be', '', 'The problem is that we are late.'],
                ['Tân ngữ của giới từ', 'chỉ dùng whether, không dùng if', 'We talked about whether we should leave.'],
                ['Sau tính từ và danh từ trừu tượng', '', 'I’m sure that… / It is important that… / the fact that…']
            ],
            compare: [
                ['whether vs if', 'whether trang trọng hơn, dùng được sau giới từ và với <em>or not</em>; if thì không'],
                [
                    'Where does he live? / I know where he lives / the house where I live',
                    'câu hỏi trực tiếp – noun clause (làm chức năng danh từ) – relative clause (bổ nghĩa cho danh từ đứng trước)'
                ]
            ],
            mistakes: [
                ['I don’t know where is she.', 'I don’t know where she is.', 'Không đảo như câu hỏi trực tiếp.'],
                ['We talked about if we should leave.', 'We talked about whether we should leave.', 'Sau giới từ dùng whether.']
            ],
            advanced: [
                'Có thể lược <em>that</em> ở vị trí tân ngữ trong văn nói (<em>I think he left</em>), nhưng giữ lại trong formal writing nếu câu có thể mơ hồ.'
            ]
        }
    },
    'causatives': {
        icon: '⚙️',
        title: 'Causatives (Câu Sai Khiến) - Advanced',
        category: 'structures',
        level: 'advanced',
        connections: ['passive-voice', 'modal-verbs', 'gerunds-infinitives', 'sentence-order'],
        theory: {
            overview: 'Cấu trúc sai khiến dùng khi <strong>chủ ngữ không tự làm</strong> mà khiến, cho phép, thuyết phục hoặc thuê người khác làm. Có hai nhánh: <strong>make/let/have/get + người + làm</strong> và <strong>have/get + vật + V3</strong>.',
            tables: [
                {
                    head: ['Mẫu', 'Ý nghĩa', 'Ví dụ'],
                    rows: [
                        ['make + O + V', 'bắt, ép', '<em>My boss made me rewrite the report. The teacher made us stay.</em>'],
                        ['let + O + V', 'cho phép', '<em>They let him leave early.</em>'],
                        ['have + O + V', 'giao việc, nhờ ai làm', '<em>I’ll have Tom check it.</em>'],
                        ['get + O + to V', 'thuyết phục / nhờ được ai làm', '<em>She got him to apologize.</em>'],
                        [
                            'have / get + O + V3',
                            'thuê, nhờ làm một việc (dịch vụ)',
                            '<em>I had my laptop repaired yesterday. We had the car washed. I get my hair cut every month.</em>'
                        ]
                    ]
                }
            ],
            sections: [
                {
                    title: '🔄 Dạng bị động',
                    items: [
                        [
                            'make',
                            'be made <strong>to</strong> + V: <em>He was made to apologize.</em> (chủ động không có to, bị động phải có to)'
                        ],
                        [
                            'let',
                            'dùng be allowed to + V: <em>They let us use dictionaries.</em> → <em>We were allowed to use dictionaries.</em>'
                        ]
                    ]
                }
            ],
            compare: [
                ['make vs get', 'ép buộc – thuyết phục được: <em>She made him apologize / She got him to apologize</em>'],
                ['I cut my hair vs I had my hair cut', 'tự cắt – đi cắt tóc (người khác cắt)']
            ],
            mistakes: [
                ['The news made her to cry.', 'The news made her cry.', 'Không dùng to sau make/let ở thể chủ động.'],
                'Nhầm <em>make + O + V</em> với <em>have/get + O + V3</em>.'
            ],
            tip: 'Hay dùng khi sửa chữa, kiểm tra, thiết kế, cắt tóc. Tự hỏi: đang nói về <strong>một người được thuyết phục</strong> hay <strong>một dịch vụ được thuê</strong>?'
        }
    },
    'wish-if-only': {
        icon: '✨',
        title: 'Wish / If Only (Câu Ước) - Advanced',
        category: 'structures',
        level: 'advanced',
        connections: ['conditionals', 'past-simple', 'past-perfect', 'modal-verbs'],
        theory: {
            overview: '<strong>Wish</strong> và <strong>If only</strong> diễn tả mong ước hoặc tiếc nuối về điều <strong>trái thực tế</strong>. Giống câu điều kiện, chúng <strong>lùi thì</strong> để tạo nghĩa không có thật. <em>If only</em> cùng cấu trúc nhưng mạnh cảm xúc hơn.',
            tables: [
                {
                    head: ['Mẫu', 'Ý nghĩa', 'Ví dụ'],
                    rows: [
                        ['wish + quá khứ đơn', 'mong hiện tại khác đi', '<em>I wish I had more free time. I wish I were taller.</em>'],
                        [
                            'wish + quá khứ hoàn thành',
                            'tiếc nuối quá khứ',
                            '<em>She wishes she had called him. If only I had studied harder!</em>'
                        ],
                        [
                            'wish + would',
                            'mong người khác / hoàn cảnh thay đổi, than phiền',
                            '<em>I wish it would stop raining. I wish he would stop talking.</em>'
                        ]
                    ]
                }
            ],
            uses: [
                ['were cho mọi ngôi', 'được ưa dùng trong văn trang trọng', 'I wish I were taller.']
            ],
            compare: [
                ['hope vs wish', '<em>I hope I pass</em> (có thể xảy ra) – <em>I wish I passed</em> (trái thực tế)']
            ],
            mistakes: [
                ['I wish I will pass.', 'I hope I will pass.', 'Hy vọng có thật dùng hope, không dùng wish + will.'],
                [
                    'I wish I would be taller.',
                    'I wish I were taller. / I wish I could…',
                    'would ngụ ý mong người khác thay đổi; với việc của chính mình dùng could / were.'
                ],
                'Quên lùi thì sau wish.'
            ]
        }
    },
    'inversion': {
        icon: '🔁',
        title: 'Inversion (Đảo Ngữ) - Advanced',
        category: 'structures',
        level: 'advanced',
        connections: ['question-forms', 'conditionals', 'parallel-structure', 'wish-if-only'],
        theory: {
            overview: 'Đảo ngữ đảo trật tự bình thường để <strong>nhấn mạnh</strong> hoặc tạo giọng <strong>trang trọng</strong>. Nó mượn cơ chế đảo trợ động từ của câu hỏi nhưng không phải câu hỏi: <em>I have never seen…</em> → <em>Never have I seen such a view.</em>',
            tables: [
                {
                    head: ['Mẫu', 'Ví dụ'],
                    rows: [
                        ['Trạng ngữ phủ định đầu câu (never, rarely, seldom…)', '<em>Rarely do we see this.</em>'],
                        ['Only + cụm / mệnh đề', '<em>Only then did he understand. Only after the meeting did she reply.</em>'],
                        ['Hardly / scarcely / no sooner', '<em>No sooner had I arrived than it rained.</em>'],
                        ['So / Such đầu câu', '<em>So difficult was the exam that…</em>'],
                        ['Conditional inversion (gọn, trang trọng)', '<em>Had I known, I would have acted.</em> = If I had known'],
                        ['Nơi chốn / hướng (văn kể)', '<em>Into the room walked a tall man.</em>']
                    ]
                }
            ],
            uses: [
                ['Văn bản thường gặp', 'học thuật, trang trọng, headline, diễn văn', '']
            ],
            compare: [
                ['I had never seen this vs Never had I seen this', 'trung tính – nhấn mạnh, trang trọng']
            ],
            mistakes: [
                ['Never I have seen…', 'Never have I seen…', 'Đảo sai hoặc quên trợ động từ.'],
                'Tự đảo những câu không thuộc mẫu cố định; dùng đảo ngữ quá dày trong văn đời thường.'
            ],
            tip: 'Nắm các mẫu cố định thay vì cố tự đảo mọi câu. Chi tiết: Negative Inversion, Complex Inversion.'
        }
    },
    'participle-clauses': {
        icon: '🪶',
        title: 'Participle Clauses (Mệnh Đề Rút Gọn Bằng Phân Từ) - Advanced',
        category: 'structures',
        level: 'advanced',
        connections: ['phrases-vs-clauses', 'relative-clauses', 'passive-voice', 'modifier-errors'],
        theory: {
            overview: 'Mệnh đề phân từ rút gọn một mệnh đề đầy đủ bằng <strong>V-ing, V3</strong> hoặc <strong>having + V3</strong>. Điều kiện bắt buộc: <strong>chủ ngữ hai mệnh đề phải trùng nhau</strong>.',
            tables: [
                {
                    head: ['Dạng', 'Nghĩa', 'Ví dụ'],
                    rows: [
                        [
                            'V-ing (present participle)',
                            'chủ động; đồng thời hoặc lý do',
                            '<em>Walking down the street, I saw an old friend. Feeling tired, he left early.</em>'
                        ],
                        [
                            'V3 (past participle)',
                            'bị động hoặc kết quả',
                            '<em>Built in 1920, the house still looks elegant. Shocked by the news, she stayed silent.</em>'
                        ],
                        ['Having + V3 (perfect participle)', 'hành động xảy ra trước', '<em>Having finished the task, she left.</em>']
                    ]
                }
            ],
            uses: [
                ['Rút gọn mệnh đề trạng ngữ', 'thời gian, nguyên nhân, điều kiện', ''],
                ['Rút gọn mệnh đề quan hệ', 'V-ing (chủ động) hoặc V3 (bị động)', 'students studying abroad; the report prepared by Linh'],
                ['Nén thông tin trong writing học thuật', 'câu gọn và mượt hơn khi chủ thể rõ', '']
            ],
            compare: [
                ['Because he was tired, he left vs Feeling tired, he left', 'đầy đủ, rõ – gọn, thiên văn viết']
            ],
            mistakes: [
                [
                    'Walking home, the rain started.',
                    'Walking home, I got caught in the rain.',
                    'Dangling modifier: phân từ phải gắn đúng chủ thể.'
                ],
                'Rút gọn khi hai mệnh đề có chủ ngữ khác nhau.',
                'Dùng quá nhiều làm câu nặng.'
            ],
            tip: 'Viết xong hãy hỏi: <strong>"Ai là người thực hiện / chịu hành động này?"</strong>'
        }
    }
};
