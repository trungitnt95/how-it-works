// English Grammar Tenses
const grammarTensesData = {
    'present-simple': {
        icon: '📅',
        title: 'Present Simple (Thì Hiện Tại Đơn) - Beginner',
        category: 'tenses',
        level: 'beginner',
        connections: ['subject-verb-agreement', 'question-forms', 'present-perfect', 'future-simple'],
        theory: {
            overview: 'Hiện tại đơn nói về điều <strong>ổn định, lặp lại hoặc luôn đúng</strong>: thói quen, sự thật, trạng thái và lịch trình cố định.',
            formula: [
                {
                    label: '(+) Khẳng định',
                    pattern: 'S + V(s/es) + O',
                    example: 'I work. · She works.',
                    note: 'thêm -s/-es khi chủ ngữ là he/she/it'
                },
                {
                    label: '(−) Phủ định',
                    pattern: 'S + do not / does not + V',
                    example: 'She does not work.',
                    note: 'V nguyên mẫu'
                },
                {
                    label: '(?) Nghi vấn',
                    pattern: 'Do / Does + S + V?',
                    example: 'Does she work?'
                },
                {
                    note: 'Sau do/does, động từ chính về nguyên mẫu vì do/does đã mang -s/-es.'
                }
            ],
            uses: [
                ['Thói quen, hành động lặp lại', '', 'I walk to school every day. I go to work at 8.'],
                ['Sự thật chung, chân lý, định nghĩa', '', 'Water boils at 100°C.'],
                ['Trạng thái ổn định với stative verbs', 'know, like, believe, belong…', 'She knows the answer.'],
                ['Lịch trình cố định (timetable), kể cả trong tương lai', '', 'The train leaves at 6 tomorrow.'],
                ['Hướng dẫn, quy trình, công thức', '', 'First, you press this button.'],
                ['Bình luận trực tiếp, tiêu đề báo', '', 'City win the final.'],
                ['Kể chuyện sinh động (historical / narrative present)', '', 'He walks in and says nothing.']
            ],
            signals: [
                'Trạng từ tần suất: <strong>always, usually, often, sometimes, never</strong>',
                'Cụm lặp lại: <strong>every day, on Mondays, twice a week</strong>'
            ],
            compare: [
                ['Present simple vs present continuous', 'thói quen / sự thật (ổn định) – đang diễn ra / tạm thời'],
                ['Present simple vs will cho tương lai', 'lịch trình cố định – dự đoán hoặc quyết định tức thời']
            ],
            mistakes: [
                ['She work here.', 'She works here.', 'Quên -s/-es với he/she/it.'],
                ['She does not works.', 'She does not work.', 'Sau does/do not, động từ về nguyên mẫu.'],
                [
                    'I do go to work every day. (câu khẳng định thường)',
                    'I go to work every day.',
                    'Không dùng do/does trong câu khẳng định thông thường.'
                ],
                ['Look! It rains.', 'Look! It is raining.', 'Việc đang diễn ra ngay lúc nói (nhấn quá trình) dùng hiện tại tiếp diễn.']
            ],
            tip: 'Tự hỏi: <strong>"Việc này có lặp lại hay là sự thật không?"</strong> – nếu có, nghĩ tới hiện tại đơn trước.'
        }
    },
    'present-continuous': {
        icon: '🎬',
        title: 'Present Continuous (Thì Hiện Tại Tiếp Diễn) - Intermediate',
        category: 'tenses',
        level: 'intermediate',
        connections: ['present-simple', 'future-simple', 'future-continuous', 'question-forms', 'negatives'],
        theory: {
            overview: 'Hiện tại tiếp diễn nói về việc <strong>đang diễn ra</strong> quanh thời điểm nói, hoặc điều <strong>tạm thời, đang thay đổi</strong>, hay <strong>kế hoạch đã sắp xếp</strong>.',
            formula: [
                {
                    pattern: 'S + am / is / are + V-ing',
                    note: 'không được bỏ trợ động từ am/is/are'
                }
            ],
            uses: [
                ['Đang diễn ra lúc nói', '', 'Listen! The baby is crying. I am studying right now.'],
                ['Đang diễn ra quanh giai đoạn hiện tại', '', 'I am taking a night class this month.'],
                [
                    'Tình huống tạm thời (khác thói quen lâu dài)',
                    '',
                    'I am living with my aunt this month. She is working from home this week.'
                ],
                ['Xu hướng, thay đổi dần', '', 'Prices are rising. The weather is getting hotter.'],
                ['Kế hoạch đã sắp xếp (arrangement) trong tương lai gần', '', 'We are meeting the client tomorrow.'],
                ['Phàn nàn với always / constantly', 'bực mình về hành vi lặp đi lặp lại', 'He is always interrupting me.'],
                ['Hành vi tạm thời với be', '', 'You are being unfair. He is being rude.']
            ],
            signals: [
                '<strong>now, right now, at the moment, today, this week</strong>',
                'Câu gây chú ý theo tình huống: <strong>Look! Listen!</strong>'
            ],
            compare: [
                ['Present continuous vs present simple', 'tạm thời / đang phát triển – ổn định / lặp lại'],
                [
                    'Tương lai: present continuous vs going to vs will',
                    'arrangement đã hẹn – ý định / có dấu hiệu – quyết định tức thời / dự đoán'
                ]
            ],
            mistakes: [
                [
                    'I am knowing the answer.',
                    'I know the answer.',
                    'Stative verbs (know, understand, want, need, love, own, believe) thường không dùng tiếp diễn.'
                ],
                [
                    'I am going to school every day.',
                    'I go to school every day.',
                    'Thói quen lâu dài dùng hiện tại đơn, trừ khi có sắc thái tạm thời hoặc phàn nàn.'
                ],
                ['She working now.', 'She is working now.', 'Không quên am/is/are.']
            ],
            advanced: [
                'Trong email và writing, hiện tại tiếp diễn thường dùng để nói xu hướng hiện tại: <em>More companies are adopting remote work.</em>'
            ]
        }
    },
    'past-simple': {
        icon: '🕰️',
        title: 'Past Simple (Thì Quá Khứ Đơn) - Beginner',
        category: 'tenses',
        level: 'beginner',
        connections: ['present-simple', 'past-continuous', 'present-perfect', 'question-forms'],
        theory: {
            overview: 'Quá khứ đơn nói về việc <strong>đã xảy ra và kết thúc</strong> trong quá khứ, thường gắn với một mốc thời gian đã đóng. Đây là "xương sống" khi kể chuyện.',
            formula: [
                {
                    label: '(+) Khẳng định',
                    pattern: 'S + V2 / V-ed + O',
                    note: 'V-ed với động từ có quy tắc, cột 2 với động từ bất quy tắc'
                },
                {
                    label: '(−) Phủ định',
                    pattern: 'S + did not + V',
                    note: 'V nguyên mẫu'
                },
                {
                    label: '(?) Nghi vấn',
                    pattern: 'Did + S + V?'
                }
            ],
            uses: [
                ['Hành động đã kết thúc ở mốc đã đóng', '', 'I visited Da Nang last summer. I met her yesterday.'],
                ['Chuỗi hành động nối tiếp khi kể chuyện', '', 'He entered, sat down, and opened his laptop.'],
                ['Trạng thái quá khứ không còn đúng', '', 'I lived there in 2018.'],
                ['Thói quen quá khứ khi ngữ cảnh rõ', '', 'We often played outside as children.'],
                ['Sự kiện lịch sử', '', 'The war ended in 1945.'],
                ['Khoảng cách lịch sự (polite distance)', 'làm câu hỏi/đề nghị mềm hơn dù nói về hiện tại', 'Did you want to see me?']
            ],
            signals: ['<strong>yesterday, ago, last night / week / year, in 2020</strong> (mốc đã đóng)'],
            compare: [
                ['Past simple vs present perfect', 'trả lời "khi nào" (mốc đã đóng) – nhấn kết quả/kinh nghiệm còn liên quan tới hiện tại'],
                ['Past simple vs past continuous', 'sự kiện chính, hoàn tất – phông nền, quá trình']
            ],
            mistakes: [
                ['I have seen him yesterday.', 'I saw him yesterday.', 'Mốc đã đóng (yesterday, last year, in 2020) đi với quá khứ đơn.'],
                [
                    'Did you went?',
                    'Did you go?',
                    'Sau did/didn’t, động từ chính về nguyên mẫu (bare infinitive) vì did đã mang thì quá khứ.'
                ],
                'Dùng quá khứ đơn khi trọng tâm là kết quả còn nối với hiện tại (nên dùng present perfect).'
            ],
            tip: 'Động từ bất quy tắc có V2/V3 riêng, không thêm -ed – hãy học theo nhóm: <em>go-went-gone, see-saw-seen</em>.'
        }
    },
    'past-continuous': {
        icon: '⏳',
        title: 'Past Continuous (Thì Quá Khứ Tiếp Diễn) - Intermediate',
        category: 'tenses',
        level: 'intermediate',
        connections: ['past-simple', 'past-perfect', 'question-forms', 'reported-speech'],
        theory: {
            overview: 'Quá khứ tiếp diễn tạo <strong>phông nền</strong> trong quá khứ: việc đang dở dang tại một mốc quá khứ, hoặc một hành động dài bị hành động khác chen vào.',
            formula: [
                {
                    pattern: 'S + was / were + V-ing',
                    note: 'was với I/he/she/it, were với you/we/they'
                }
            ],
            uses: [
                ['Đang diễn ra tại một mốc quá khứ', '', 'At 9 p.m. yesterday, they were driving home. She was sleeping at midnight.'],
                [
                    'Nền dài + hành động ngắn chen vào',
                    'hành động dài dùng quá khứ tiếp diễn, hành động chen vào dùng quá khứ đơn',
                    'We were having dinner when the lights went out.'
                ],
                ['Hai quá trình song song', '', 'While I was cooking, he was cleaning.'],
                [
                    'Mô tả cảnh mở đầu truyện',
                    'giúp câu chuyện có chiều sâu thay vì chỉ liệt kê hành động',
                    'Rain was falling and people were running.'
                ],
                ['Tình huống tạm thời trong quá khứ', '', 'I was staying with friends that week.'],
                ['Phàn nàn về thói quen quá khứ với always', '', 'He was always losing his keys.'],
                ['Lời đề nghị, nhờ vả lịch sự và gián tiếp hơn', '', 'I was wondering if you could help.']
            ],
            signals: [
                '<strong>while / as</strong> thường đi với hành động kéo dài; <strong>when</strong> thường đánh dấu sự kiện ngắn chen vào',
                'Mốc giờ quá khứ: <strong>at 9 p.m. yesterday, at that time</strong>'
            ],
            compare: [
                ['Past continuous vs past simple', 'nền / quá trình – sự kiện hoàn tất']
            ],
            mistakes: [
                [
                    'He was coming in, was sitting down and was leaving.',
                    'He came in, sat down and left.',
                    'Chuỗi hành động ngắn nối tiếp dùng quá khứ đơn.'
                ],
                'Dùng tiếp diễn với stative verbs khi không có nghĩa đặc biệt.',
                'Quên was/were.'
            ],
            tip: 'Kể "một việc <strong>đang</strong> diễn ra thì một việc khác xảy ra" → past continuous + past simple.'
        }
    },
    'present-perfect': {
        icon: '🔗',
        title: 'Present Perfect (Thì Hiện Tại Hoàn Thành) - Intermediate',
        category: 'tenses',
        level: 'intermediate',
        connections: ['present-simple', 'past-simple', 'past-perfect', 'modal-verbs'],
        theory: {
            overview: 'Hiện tại hoàn thành <strong>nối quá khứ với hiện tại</strong>: kết quả còn ảnh hưởng bây giờ, kinh nghiệm tính đến nay (không nêu thời điểm), hoặc việc kéo dài từ quá khứ tới hiện tại.',
            formula: [
                {
                    pattern: 'S + have / has + V3',
                    note: 'V3 là quá khứ phân từ; không dùng V2 sau have/has'
                }
            ],
            uses: [
                ['Kinh nghiệm, không nêu mốc', 'thường với ever / never', 'Have you ever tried sushi? She has visited Japan twice.'],
                [
                    'Kết quả quá khứ còn ảnh hưởng hiện tại',
                    '',
                    'I have lost my key. (bây giờ vẫn chưa có chìa khóa) / He has broken his leg.'
                ],
                ['Kéo dài từ quá khứ tới nay', '', 'We have lived here for five years.'],
                ['Việc vừa xảy ra', 'với just / already / yet', 'I have just finished the report.'],
                ['Khoảng thời gian chưa kết thúc', '', 'I have worked a lot today.'],
                ['Số lượng / mức độ hoàn thành tới hiện tại', '', 'He has read three chapters.'],
                [
                    'Mở đầu bản tin',
                    'đưa tin mới bằng present perfect, rồi kể chi tiết bằng past simple',
                    'The government has announced a plan. It said on Monday…'
                ]
            ],
            signals: [
                '<strong>already, yet, just, ever, never</strong>',
                '<strong>since</strong> + mốc thời gian (since 2020, since Monday); <strong>for</strong> + khoảng thời gian (for five years)',
                'Khoảng chưa kết thúc: <strong>today, this week</strong>'
            ],
            compare: [
                [
                    'Present perfect vs past simple',
                    '<em>I have seen that movie</em> (kinh nghiệm tới nay) – <em>I saw her last week</em> (mốc đã đóng)'
                ],
                [
                    'Present perfect vs present perfect continuous',
                    '<em>I have written 3 emails</em> (kết quả) – <em>I have been writing emails all morning</em> (quá trình)'
                ],
                [
                    'Anh-Anh vs Anh-Mỹ',
                    'Anh-Anh dùng thì này rộng hơn trong đời thường: <em>I have just eaten</em>; Anh-Mỹ thường chấp nhận <em>I just ate</em>'
                ]
            ],
            mistakes: [
                ['I have seen her yesterday.', 'I saw her yesterday.', 'Không dùng với mốc đã đóng (yesterday, last night, in 2019).'],
                ['I have lived here since five years.', 'I have lived here for five years.', 'since + mốc, for + khoảng.'],
                ['She has went home.', 'She has gone home.', 'Sau have/has cần V3.']
            ],
            tip: 'Tự hỏi: <strong>"Người nghe cần biết khi nào, hay cần biết kết quả bây giờ?"</strong> Khi nào → past simple; kết quả/kinh nghiệm → present perfect.'
        }
    },
    'present-perfect-continuous': {
        icon: '♾️',
        title: 'Present Perfect Continuous (Thì Hiện Tại Hoàn Thành Tiếp Diễn) - Advanced',
        category: 'tenses',
        level: 'advanced',
        connections: ['present-continuous', 'present-perfect', 'future-perfect', 'quantifiers'],
        theory: {
            overview: 'Hiện tại hoàn thành tiếp diễn nhấn <strong>quá trình và thời lượng</strong> của hành động bắt đầu trong quá khứ và kéo dài tới hiện tại (hoặc vừa mới dừng, để lại dấu hiệu).',
            formula: [
                {
                    pattern: 'S + have / has + been + V-ing',
                    note: 'không được bỏ "been"'
                }
            ],
            uses: [
                ['Nhấn đã kéo dài bao lâu', '', 'I have been studying for three hours. We have been waiting for a long time.'],
                [
                    'Giải thích dấu hiệu hiện tại bằng quá trình vừa qua',
                    '',
                    'You look tired. Have you been running? He is tired because he has been running.'
                ],
                ['Hành động lặp lại gần đây', '', 'She has been calling me all week.'],
                ['Tình huống tạm thời kéo dài đến nay', '', 'I have been staying at a hotel.'],
                ['Than phiền về việc kéo dài, để lại dấu vết', '', 'Someone has been using my laptop!']
            ],
            signals: [
                '<strong>for</strong> + khoảng thời gian, <strong>since</strong> + mốc: <em>I have been waiting for two hours / since 9 a.m.</em>',
                '<strong>all morning, all week, lately, recently</strong>'
            ],
            compare: [
                [
                    'Present perfect vs present perfect continuous',
                    '<em>I have written three emails</em> = kết quả/số lượng; <em>I have been writing emails</em> = quá trình/thời lượng'
                ]
            ],
            mistakes: [
                [
                    'I have been writing three emails.',
                    'I have written three emails.',
                    'Nhấn số lượng đã hoàn tất thì dùng present perfect đơn.'
                ],
                [
                    'I have been knowing her for years.',
                    'I have known her for years.',
                    'Stative verbs (know, own, believe) không dùng dạng này.'
                ],
                ['I have waiting for hours.', 'I have been waiting for hours.', 'Không bỏ been.']
            ],
            tip: 'Muốn người nghe cảm nhận <strong>"đã kéo dài bao lâu"</strong> → present perfect continuous.'
        }
    },
    'past-perfect': {
        icon: '🧭',
        title: 'Past Perfect (Thì Quá Khứ Hoàn Thành) - Advanced',
        category: 'tenses',
        level: 'advanced',
        connections: ['past-simple', 'past-continuous', 'reported-speech', 'conditionals'],
        theory: {
            overview: 'Quá khứ hoàn thành là <strong>"quá khứ của quá khứ"</strong>: diễn tả việc xảy ra <strong>trước</strong> một mốc hoặc một hành động khác trong quá khứ.',
            formula: [
                {
                    pattern: 'S + had + V3',
                    note: 'dùng cho mọi chủ ngữ'
                }
            ],
            uses: [
                ['Xảy ra trước một mốc/hành động quá khứ', '', 'When I arrived, the movie had started.'],
                ['Hoàn tất trước deadline quá khứ', '', 'She had finished the report before the meeting began. She had finished by noon.'],
                ['Lùi lại giải thích bối cảnh khi kể chuyện', 'rồi quay về past simple cho mạch chính', ''],
                ['Reported speech', 'lùi thì present perfect / past simple', 'He said he had lost it.'],
                ['Câu điều kiện loại 3', '', 'If I had known, I would have called.'],
                ['Wish / if only về quá khứ', '', 'I wish I had studied harder.']
            ],
            signals: ['<strong>by the time, before, after, already, never…before</strong> trong khung quá khứ'],
            compare: [
                ['Past perfect vs present perfect', 'mốc tham chiếu là một thời điểm quá khứ – mốc tham chiếu là hiện tại'],
                ['Past perfect vs past perfect continuous', 'nhấn kết quả / thứ tự – nhấn quá trình trước mốc'],
                [
                    'Khi nào không cần past perfect',
                    'khi từ nối đã làm rõ thứ tự: <em>After he left, I called her.</em> Past perfect nhấn rõ: <em>He had left before I called her.</em>'
                ]
            ],
            mistakes: [
                'Dùng <em>had + V3</em> cho mọi câu quá khứ – văn nặng và sai sắc thái. Chỉ dùng khi cần làm rõ hoặc nhấn thứ tự trước–sau.',
                'Dùng past perfect cho hành động xảy ra <strong>sau</strong> mốc quá khứ đang xét.'
            ]
        }
    },
    'past-perfect-continuous': {
        icon: '🔄',
        title: 'Past Perfect Continuous (Thì Quá Khứ Hoàn Thành Tiếp Diễn) - Advanced',
        category: 'tenses',
        level: 'advanced',
        connections: ['past-continuous', 'past-perfect', 'present-perfect-continuous', 'conditionals'],
        theory: {
            overview: 'Quá khứ hoàn thành tiếp diễn nhấn một <strong>quá trình kéo dài trước một mốc quá khứ</strong>: đến lúc đó, việc này đã diễn ra được bao lâu.',
            formula: [
                {
                    pattern: 'S + had been + V-ing',
                    note: 'không quên "been"'
                }
            ],
            uses: [
                [
                    'Nhấn thời lượng trước mốc quá khứ',
                    '',
                    'They had been waiting for two hours before the bus arrived. He had been working there for ten years before he moved.'
                ],
                [
                    'Giải thích trạng thái quá khứ bằng quá trình trước đó',
                    '',
                    'Her eyes were red because she had been crying. She was tired because she had been studying all night.'
                ],
                ['Backstory có quá trình dài khi kể chuyện', 'nhấn nỗ lực hoặc sự bực bội trước một kết quả quá khứ', '']
            ],
            signals: ['<strong>for, since</strong> (độ dài); <strong>before, by the time</strong> (mốc quá khứ)'],
            compare: [
                [
                    'Past perfect vs past perfect continuous',
                    '<em>She had written the report</em> = đã xong; <em>She had been writing the report</em> = nhấn quá trình viết trước mốc'
                ]
            ],
            mistakes: [
                'Dùng dạng này khi chỉ cần nói việc đã hoàn tất trước mốc – past perfect là đủ.',
                'Dùng với stative verbs (know, believe, own).'
            ],
            tip: 'Có một mốc quá khứ và muốn hỏi <strong>"trước mốc đó, việc này đã kéo dài bao lâu?"</strong> → past perfect continuous.'
        }
    },
    'future-simple': {
        icon: '🚀',
        title: 'Future Simple (Thì Tương Lai Đơn) - Intermediate',
        category: 'tenses',
        level: 'intermediate',
        connections: ['present-simple', 'present-continuous', 'future-continuous', 'modal-verbs', 'conditionals'],
        theory: {
            overview: 'Tương lai đơn với <strong>will</strong> là dạng tương lai trung tính cho quyết định tức thời, lời hứa, dự đoán, đề nghị và cam kết.',
            formula: [
                {
                    label: 'Khẳng định',
                    pattern: 'S + will + V',
                    note: 'V nguyên mẫu, dùng cho mọi chủ ngữ'
                },
                {
                    label: 'Phủ định',
                    pattern: 'S + will not (won’t) + V'
                }
            ],
            uses: [
                ['Quyết định ngay lúc nói', '', 'I’ll answer the phone. I will open the door.'],
                ['Lời hứa, cam kết', '', 'I will call you tonight. I will never forget this.'],
                [
                    'Dự đoán theo ý kiến / niềm tin',
                    'thường với trạng từ xác suất probably, certainly, definitely',
                    'I think it will rain. It will probably rain tomorrow.'
                ],
                ['Đề nghị giúp đỡ', '', 'I’ll carry that for you.'],
                ['Từ chối / quyết tâm với won’t', '', 'I won’t do it again.'],
                ['Mệnh đề chính của điều kiện loại 1', '', 'If it rains, we will stay home.'],
                ['Đe dọa, cảnh báo, cam đoan', '', 'You’ll regret this.']
            ],
            compare: [
                [
                    'Các dạng tương lai',
                    '<strong>will</strong> = quyết định tức thời / dự đoán; <strong>be going to</strong> = dự định / có dấu hiệu hiện tại; <strong>present continuous</strong> = kế hoạch đã hẹn (arrangement); <strong>present simple</strong> = lịch trình cố định (timetable)'
                ]
            ],
            mistakes: [
                [
                    'Call me when you will arrive.',
                    'Call me when you arrive.',
                    'Trong mệnh đề thời gian/điều kiện (when, until, as soon as, if) nói về tương lai, dùng hiện tại; will chỉ ở mệnh đề chính.'
                ],
                [
                    'I will meet the client at 6. (đã hẹn trước)',
                    'I am meeting the client at 6.',
                    'Kế hoạch đã sắp xếp tự nhiên hơn với hiện tại tiếp diễn.'
                ],
                'Dùng will khi có dấu hiệu hiện tại rõ – dùng going to: <em>Look at those clouds. It’s going to rain.</em>'
            ],
            tip: 'Đang quyết định ngay, hứa, hoặc dự đoán trung tính → <em>will</em> thường là lựa chọn đầu tiên.'
        }
    },
    'future-continuous': {
        icon: '🛰️',
        title: 'Future Continuous (Thì Tương Lai Tiếp Diễn) - Advanced',
        category: 'tenses',
        level: 'advanced',
        connections: ['future-simple', 'future-perfect', 'present-continuous', 'future-perfect-continuous'],
        theory: {
            overview: 'Tương lai tiếp diễn diễn tả việc <strong>sẽ đang diễn ra</strong> tại một mốc tương lai – đặt người nghe vào giữa một quá trình, không chỉ nói việc đó sẽ xảy ra.',
            formula: [
                {
                    pattern: 'S + will be + V-ing',
                    note: 'không quên "be"'
                }
            ],
            uses: [
                [
                    'Đang diễn ra tại một mốc tương lai',
                    '',
                    'At 8 p.m. tonight, I will be studying. This time next week, they will be flying to Tokyo.'
                ],
                [
                    'Kế hoạch / lịch như bối cảnh tương lai',
                    'mô tả timeline dự án, hành trình tự nhiên, ít áp lực hơn will',
                    'I’ll be working all day tomorrow.'
                ],
                ['Hỏi lịch sự về kế hoạch người khác', 'tránh nghe như yêu cầu trực tiếp', 'Will you be using the car tonight?'],
                ['Suy đoán việc có lẽ đang diễn ra bây giờ', '', 'She’ll be sleeping now.']
            ],
            compare: [
                [
                    'will + V vs will be + V-ing',
                    '<em>I will study</em> (sẽ học) – <em>At 8 p.m. I will be studying</em> (lúc 8 giờ tôi sẽ đang học)'
                ],
                [
                    'Will you use the car? vs Will you be using the car?',
                    'câu đầu có thể nghe như yêu cầu/quyết định; câu sau hỏi lịch trình mềm hơn'
                ]
            ],
            mistakes: [
                'Dùng khi chỉ nói một sự kiện sẽ xảy ra, không cần mốc đang diễn ra – future simple hoặc present continuous gọn hơn.',
                'Dùng cho trạng thái không có quá trình rõ.'
            ],
            tip: 'Câu chứa ý <strong>"đến lúc đó, việc này sẽ đang diễn ra"</strong> → future continuous.'
        }
    },
    'future-perfect': {
        icon: '🏁',
        title: 'Future Perfect (Thì Tương Lai Hoàn Thành) - Advanced',
        category: 'tenses',
        level: 'advanced',
        connections: ['future-simple', 'future-continuous', 'present-perfect', 'present-perfect-continuous', 'conditionals'],
        theory: {
            overview: 'Tương lai hoàn thành nói một việc <strong>sẽ hoàn tất trước một mốc tương lai</strong> – nhìn từ tương lai và xác nhận đến lúc đó việc đã xong. Luôn cần một mốc tương lai làm chuẩn.',
            formula: [
                {
                    pattern: 'S + will have + V3'
                }
            ],
            uses: [
                ['Hoàn tất trước mốc tương lai', '', 'By next June, I will have graduated. She will have finished the report by 5 p.m.'],
                ['Deadline, milestone, timeline dự án', '', 'By June, we’ll have launched.'],
                ['Suy luận việc chắc đã hoàn tất', '', 'They’ll have arrived by now.']
            ],
            signals: ['<strong>by, by the time, before, by next week</strong> + mốc tương lai'],
            compare: [
                [
                    'will + V vs will have + V3',
                    '<em>I will finish by 5</em> = lời hứa/kế hoạch; <em>I will have finished by 5</em> = đến 5 giờ việc đã xong'
                ],
                [
                    'Future perfect vs future perfect continuous',
                    'nhấn hoàn tất – nhấn thời lượng: <em>By July, I will have been working here for five years.</em>'
                ]
            ],
            mistakes: [
                [
                    'By the time he will arrive, we will have left.',
                    'By the time he arrives, we will have left.',
                    'Mệnh đề thời gian dùng hiện tại; future perfect nằm ở mệnh đề chính.'
                ],
                'Dùng future perfect chỉ vì câu có "by" dù ý không nói về sự hoàn tất trước mốc tương lai.',
                'Dùng khi không có mốc tương lai – câu nghe gượng và không cần thiết.'
            ]
        }
    },
    'future-perfect-continuous': {
        icon: '♻️',
        title: 'Future Perfect Continuous (Thì Tương Lai Hoàn Thành Tiếp Diễn) - Advanced',
        category: 'tenses',
        level: 'advanced',
        connections: ['future-continuous', 'future-perfect', 'present-perfect-continuous', 'quantifiers'],
        theory: {
            overview: 'Tương lai hoàn thành tiếp diễn nhấn <strong>thời lượng một quá trình sẽ kéo dài được tính đến một mốc tương lai</strong>. Thì hiếm nhưng hữu ích khi mô tả timeline dài, thâm niên, nỗ lực tích lũy.',
            formula: [
                {
                    pattern: 'S + will have been + V-ing',
                    note: 'không bỏ "been"'
                }
            ],
            uses: [
                ['Thời lượng tính đến mốc tương lai', '', 'At 10 p.m., she will have been studying for six hours.'],
                [
                    'Thâm niên, kinh nghiệm, nỗ lực tích lũy',
                    'nhấn sự liên tục thay vì chỉ kết quả',
                    'By May, I’ll have been working here for ten years.'
                ]
            ],
            signals: ['<strong>by</strong> + mốc tương lai + <strong>for</strong> + khoảng thời gian – "ứng viên rất mạnh"'],
            compare: [
                [
                    'Future perfect vs future perfect continuous',
                    '<em>By 6, I will have finished the task</em> (sẽ đã xong) – <em>By 6, I will have been working for three hours</em> (sẽ đã kéo dài bao lâu)'
                ]
            ],
            mistakes: ['Dùng khi trọng tâm là việc xong hay chưa – dùng future perfect.', 'Dùng với stative verbs.'],
            tip: 'Trong bài thi và writing, dùng đúng lúc cho thấy bạn hiểu sâu hệ thống thì – nhưng đừng cố nhét vào câu không cần thiết.'
        }
    }
};
