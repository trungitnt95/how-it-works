// English Grammar Pronunciation and IPA
const grammarPronunciationData = {
    'ipa-overview': {
        icon: '🔠',
        title: 'IPA Overview (Tổng Quan Bảng Phiên Âm IPA) - Beginner',
        category: 'pronunciation',
        level: 'beginner',
        connections: ['ipa-vowels', 'ipa-consonants', 'stress-schwa', 'parts-of-speech'],
        theory: {
            overview: '<strong>IPA (International Phonetic Alphabet)</strong> là bảng ký hiệu ghi lại <strong>âm thật</strong> của từ, không theo chữ viết. Người học tiếng Anh cần IPA vì chữ viết và âm đọc không khớp 1-1: <em>ea</em> là /iː/ trong <em>sea</em>, /e/ trong <em>head</em>, /eɪ/ trong <em>break</em>.',
            tables: [
                {
                    title: 'Cách đọc ký hiệu phiên âm',
                    head: ['Ký hiệu', 'Ý nghĩa', 'Ví dụ'],
                    rows: [
                        ['/ /', 'phiên âm của từ', '<em>cat</em> /kæt/, <em>book</em> /bʊk/, <em>enough</em> /ɪˈnʌf/'],
                        ['ˈ (đặt cao, trước âm tiết)', 'trọng âm chính', '/ˈprez.ənt/'],
                        ['ˌ (đặt thấp)', 'trọng âm phụ', '/ˌɪn.təˈnæʃ.ən.əl/'],
                        ['ː', 'âm dài', '/iː/ trong <em>see</em> dài hơn /ɪ/ trong <em>sit</em>']
                    ]
                }
            ],
            uses: [
                ['Tra từ điển', 'biết âm thật khi chính tả "đánh lừa", không đọc đoán theo chữ cái', '<em>teacher</em> /ˈtiː.tʃə(r)/'],
                ['Phân biệt nguyên âm và phụ âm, các cặp dễ nhầm', 'minimal pairs', 'ship/sheep, bet/bat, /ɪ/–/iː/, /æ/–/e/'],
                ['Kết hợp với trọng âm và connected speech', 'để nói tự nhiên, không chỉ đọc đúng từng âm', '']
            ],
            mistakes: ['Đọc tiếng Anh theo cách đánh vần tiếng Việt.', 'Học IPA tách rời audio và ví dụ.'],
            advanced: ['Đánh dấu những âm tiếng Việt không có tương đương gần đúng để luyện riêng: <strong>/θ/, /ð/, /ʒ/, /ə/</strong>.'],
            tip: [
                'Tự học từ mới: <strong>đọc IPA trước, rồi nghe audio đối chiếu</strong>.',
                'Lưu từ theo bộ ba: <strong>nghĩa + IPA + một câu ví dụ</strong>.'
            ]
        }
    },
    'ipa-vowels': {
        icon: '🎵',
        title: 'IPA Vowels (Nguyên Âm IPA) - Intermediate',
        category: 'pronunciation',
        level: 'intermediate',
        connections: ['ipa-overview', 'stress-schwa', 'comparisons', 'modifier-errors'],
        theory: {
            overview: 'Nguyên âm là lõi của âm tiết. Nhiều lỗi phát âm đến từ việc không phân biệt nguyên âm <strong>ngắn – dài</strong> và <strong>nguyên âm đơn – nguyên âm đôi</strong>; độ dài hay độ mở miệng khác nhau có thể làm đổi nghĩa.',
            tables: [
                {
                    title: 'Nguyên âm đơn (monophthongs)',
                    head: ['Âm', 'Ví dụ', 'Gợi ý'],
                    rows: [
                        ['/iː/', 'see, green, sheep', 'dài, môi kéo ngang'],
                        ['/ɪ/', 'sit, big, ship', 'ngắn hơn /iː/'],
                        ['/e/', 'bed, head, men', 'miệng mở vừa'],
                        ['/æ/', 'cat, black, man, bad', 'mở rộng hơn /e/'],
                        ['/ʌ/', 'cup, luck', 'âm giữa, ngắn'],
                        ['/ɑː/', 'car, heart', 'dài, mở sâu'],
                        ['/ɒ/', 'hot, not', 'điển hình của Anh-Anh'],
                        ['/ɔː/', 'law, talk', 'môi tròn hơn'],
                        ['/ʊ/', 'book, put, full', 'ngắn'],
                        ['/uː/', 'food, blue, fool', 'dài hơn /ʊ/'],
                        ['/ɜː/', 'bird, learn', 'Anh-Mỹ thường có âm r'],
                        ['/ə/ (schwa)', 'about, teacher', 'âm yếu, trung tính, không nhấn']
                    ]
                },
                {
                    title: 'Nguyên âm đôi (diphthongs) – trượt từ âm này sang âm khác trong một âm tiết',
                    head: ['Âm', 'Ví dụ'],
                    rows: [
                        ['/eɪ/', 'day, name'],
                        ['/aɪ/', 'time, my'],
                        ['/ɔɪ/', 'boy, choice'],
                        ['/aʊ/', 'now, house'],
                        ['/əʊ/', 'go, home']
                    ]
                }
            ],
            compare: [
                ['/ɪ/ vs /iː/', 'ship /ʃɪp/ (ngắn) – sheep /ʃiːp/ (dài, môi kéo ngang)'],
                ['/e/ vs /æ/', 'men, bed (mở vừa) – man, bad (mở rộng hơn)'],
                ['/ʊ/ vs /uː/', 'full, book (ngắn) – fool, food (dài)']
            ],
            mistakes: [
                'Đọc theo thói quen tiếng Việt khiến các cặp âm bị "gộp" thành một: ship và sheep nghe như nhau.',
                'Kéo dài mọi nguyên âm như nhau.',
                'Bỏ schwa trong âm tiết không nhấn.',
                'Đọc theo chữ cái: <em>blood, food, good</em> cùng "oo" nhưng khác nguyên âm.'
            ],
            tip: 'Luyện theo <strong>cặp tối thiểu</strong> (ship/sheep, full/fool, bad/bed) và <strong>ghi âm</strong> chính mình để kiểm tra độ dài âm.'
        }
    },
    'ipa-consonants': {
        icon: '🔊',
        title: 'IPA Consonants (Phụ Âm IPA) - Intermediate',
        category: 'pronunciation',
        level: 'intermediate',
        connections: ['ipa-overview', 'stress-schwa', 'pronoun-reference', 'sentence-order'],
        theory: {
            overview: 'Tiếng Anh có nhiều phụ âm tiếng Việt không có, khó nhất là <strong>/θ/, /ð/, /ʃ/, /ʒ/, /tʃ/, /dʒ/, /ŋ/</strong>. Phụ âm cuối đặc biệt quan trọng vì nó quyết định nghĩa.',
            tables: [
                {
                    head: ['Âm', 'Ví dụ', 'Lưu ý'],
                    rows: [
                        ['/θ/', 'think, bath', 'lưỡi giữa răng, vô thanh'],
                        ['/ð/', 'this, mother', 'lưỡi giữa răng, hữu thanh'],
                        ['/ʃ/', 'she, nation', '"sh", vô thanh'],
                        ['/ʒ/', 'vision, measure', 'mềm hơn /ʃ/, hữu thanh'],
                        ['/tʃ/', 'chair, teacher', '"ch"'],
                        ['/dʒ/', 'job, education', '"j"'],
                        ['/ŋ/', 'sing, long', '"ng" cuối, không tự thêm /g/'],
                        ['/r/', 'red', 'khác "r" tiếng Việt']
                    ]
                }
            ],
            uses: [
                ['Cặp hữu thanh / vô thanh', '', '/p-b/, /t-d/, /s-z/, /f-v/'],
                ['Phụ âm cuối quyết định nghĩa', '', 'rice / rise, back / bag'],
                [
                    'Phụ âm cuối quyết định cách đọc -s / -ed',
                    'đuôi -s đọc /s/ hay /z/, -ed đọc /t/ hay /d/ tùy âm cuối hữu thanh/vô thanh',
                    ''
                ],
                ['Cụm phụ âm', '', 'spring, texts']
            ],
            compare: [
                ['think vs sink', '/θɪŋk/ – /sɪŋk/'],
                ['sing vs finger', '/sɪŋ/ không có /g/ – /ˈfɪŋ.ɡə/ có /g/']
            ],
            mistakes: ['Bỏ phụ âm cuối khiến câu khó hiểu.', 'Thay /θ/ bằng /t/ (think → "tink").'],
            tip: 'Muốn nói rõ hơn ngay: ưu tiên luyện <strong>phụ âm cuối</strong> (trong cụm từ: <em>last time, worked hard</em>) và cặp <strong>/θ/ – /ð/</strong>.'
        }
    },
    'stress-schwa': {
        icon: '⚡',
        title: 'Stress & Schwa (Trọng Âm & Schwa) - Advanced',
        category: 'pronunciation',
        level: 'advanced',
        connections: ['ipa-overview', 'ipa-vowels', 'ipa-consonants', 'reported-speech'],
        theory: {
            overview: 'Tiếng Anh có nhịp theo trọng âm (<strong>stress-timed</strong>): âm tiết nhấn nổi bật, âm tiết không nhấn bị rút gọn, thường thành <strong>schwa /ə/</strong>. Sai trọng âm thì người nghe vẫn khó hiểu dù từng âm đúng.',
            tables: [
                {
                    head: ['Hiện tượng', 'Ví dụ', 'Lưu ý'],
                    rows: [
                        [
                            'Word stress',
                            '<em>imPORtant</em>; <em>PREsent</em> /ˈprez.ənt/ (danh từ) – <em>preSENT</em> /prɪˈzent/ (động từ "trình bày")',
                            'mỗi từ nhiều âm tiết có một trọng âm chính; trọng âm quyết định nguyên âm nào bị rút gọn'
                        ],
                        [
                            'Schwa /ə/',
                            '<em>about</em> /əˈbaʊt/, <em>teacher</em> /ˈtiː.tʃə(r)/, <em>banana</em> /bəˈnɑː.nə/',
                            'âm yếu trong âm tiết không nhấn'
                        ],
                        ['Sentence stress', '<em>I WANT to GO.</em>', 'nhấn từ mang thông tin (content words), giảm từ chức năng'],
                        ['Weak forms', '<em>to</em> /tuː/ khi nhấn → /tə/; <em>of, for, and, can</em>', 'từ chức năng thường đọc yếu']
                    ]
                }
            ],
            uses: [
                ['Nhấn từ chức năng khi đối lập', '', 'I CAN do it. (phản bác)'],
                [
                    'Nối âm (connected speech)',
                    'nghe kém nhiều khi không phải do thiếu từ vựng mà do chưa quen weak forms và nhịp trọng âm',
                    'pick it up nghe gần như /pɪkɪtʌp/'
                ]
            ],
            mistakes: [
                'Đọc mọi âm tiết ngang nhau theo nhịp tiếng Việt – câu nghe cứng và khó bắt.',
                'Phát âm đầy đủ mọi nguyên âm theo chữ viết.',
                'Nhấn từ chức năng khi không có ý đối lập.'
            ]
        }
    }
};
