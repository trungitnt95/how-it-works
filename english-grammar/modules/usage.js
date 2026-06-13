// Usage deep dives: when to use each grammar point, what to avoid, and what to compare it with.
const grammarUsageDeepDiveData = {
    'present-simple': {
        category: 'tenses', cefr: 'A1', title: 'Present Simple',
        uses: [
            'Thói quen, lịch sinh hoạt, hành động lặp lại: I walk to school every day.',
            'Sự thật chung, chân lý, định nghĩa: Water boils at 100°C.',
            'Trạng thái ổn định với stative verbs: She knows the answer.',
            'Lịch trình cố định/timetable, kể cả tương lai: The train leaves at 7.',
            'Hướng dẫn, quy trình, công thức: First, you press this button.',
            'Tường thuật thể thao, bình luận trực tiếp, headline báo chí: City win the final.',
            'Kể chuyện sinh động theo kiểu historical/narrative present: He walks in and says nothing.'
        ],
        avoid: [
            'Không dùng cho việc đang xảy ra ngay lúc nói nếu muốn nhấn quá trình: dùng present continuous.',
            'Không quên -s/-es với he/she/it.',
            'Không dùng do/does trong câu khẳng định thường.'
        ],
        compare: [
            'Present simple = thói quen/sự thật; present continuous = đang diễn ra/tạm thời.',
            'Present simple cho timetable tương lai; will cho dự đoán/quyết định tức thời.'
        ]
    },
    'present-continuous': {
        category: 'tenses', cefr: 'A2', title: 'Present Continuous',
        uses: [
            'Hành động đang diễn ra đúng lúc nói: I am reading now.',
            'Hành động đang diễn ra quanh giai đoạn hiện tại: I am taking a night class this month.',
            'Tình huống tạm thời khác với thói quen lâu dài: She is living with her aunt this week.',
            'Xu hướng/thay đổi đang phát triển: Prices are rising.',
            'Kế hoạch đã sắp xếp trong tương lai gần: We are meeting at 6.',
            'Phàn nàn với always/constantly: He is always interrupting me.',
            'Hành vi tạm thời với be: You are being unfair.'
        ],
        avoid: [
            'Không dùng máy móc với stative verbs như know, own, believe, need.',
            'Không dùng cho thói quen ổn định nếu không có sắc thái tạm thời hoặc phàn nàn.',
            'Không quên auxiliary am/is/are.'
        ],
        compare: [
            'Present continuous = tạm thời/đang phát triển; present simple = ổn định/lặp lại.',
            'Present continuous future = arrangement; going to = intention/evidence.'
        ]
    },
    'past-simple': {
        category: 'tenses', cefr: 'A2', title: 'Past Simple',
        uses: [
            'Hành động đã kết thúc ở quá khứ với mốc đóng: I met her yesterday.',
            'Chuỗi hành động nối tiếp trong kể chuyện: He entered, sat down, and smiled.',
            'Trạng thái quá khứ không còn đúng hoặc không nhấn hiện tại: I lived there in 2018.',
            'Thói quen quá khứ khi có ngữ cảnh rõ: We often played outside as children.',
            'Câu hỏi/phủ định về quá khứ với did: Did you call her?',
            'Mốc lịch sử/sự kiện đã hoàn tất: The war ended in 1945.',
            'Polite distance trong câu hỏi/lời đề nghị: Did you want to see me?'
        ],
        avoid: [
            'Không dùng present perfect với mốc thời gian đã đóng: yesterday, last year, in 2020.',
            'Sau did/didn’t, động từ chính quay về bare infinitive.',
            'Không dùng past simple nếu trọng tâm là kết quả còn nối với hiện tại.'
        ],
        compare: [
            'Past simple = thời điểm quá khứ đã đóng; present perfect = liên hệ hiện tại.',
            'Past simple kể sự kiện chính; past continuous tạo bối cảnh.'
        ]
    },
    'past-continuous': {
        category: 'tenses', cefr: 'B1', title: 'Past Continuous',
        uses: [
            'Hành động đang diễn ra tại một mốc quá khứ: At 8, I was cooking.',
            'Bối cảnh nền cho hành động ngắn chen vào: I was cooking when she called.',
            'Hai hành động kéo dài song song: While I was cooking, he was cleaning.',
            'Mô tả cảnh mở đầu truyện: Rain was falling and people were running.',
            'Hành động tạm thời trong quá khứ: I was staying with friends that week.',
            'Phàn nàn về thói quen quá khứ với always: He was always losing things.',
            'Câu lịch sự/gián tiếp hơn: I was wondering if you could help.'
        ],
        avoid: [
            'Không dùng cho hành động ngắn nối tiếp nhau; dùng past simple.',
            'Không dùng với nhiều stative verbs nếu không có nghĩa đặc biệt.',
            'Không quên was/were.'
        ],
        compare: [
            'Past continuous = nền/quá trình; past simple = sự kiện hoàn tất.',
            'While thường đi với quá trình; when thường đánh dấu sự kiện chen vào.'
        ]
    },
    'present-perfect': {
        category: 'tenses', cefr: 'B1', title: 'Present Perfect',
        uses: [
            'Kinh nghiệm đời sống, không nêu mốc cụ thể: I have been to Japan.',
            'Kết quả quá khứ còn ảnh hưởng hiện tại: I have lost my key.',
            'Hành động bắt đầu quá khứ kéo dài tới nay: She has lived here for years.',
            'Việc vừa xảy ra với just/already/yet: I have just finished.',
            'Khoảng thời gian chưa kết thúc: I have worked a lot today.',
            'Số lần/độ hoàn thành tới hiện tại: He has read three chapters.',
            'Tin tức mới trước khi đi vào chi tiết quá khứ: The government has announced a plan.'
        ],
        avoid: [
            'Không dùng với mốc quá khứ đã đóng: yesterday, last night, in 2019.',
            'Không lẫn since + mốc với for + khoảng thời gian.',
            'Không dùng V2 sau have/has; cần V3.'
        ],
        compare: [
            'Present perfect = kết quả/kinh nghiệm đến hiện tại; past simple = thời điểm đã đóng.',
            'Present perfect nhấn kết quả; present perfect continuous nhấn quá trình/thời lượng.'
        ]
    },
    'present-perfect-continuous': {
        category: 'tenses', cefr: 'B2', title: 'Present Perfect Continuous',
        uses: [
            'Nhấn thời lượng từ quá khứ đến hiện tại: I have been studying for hours.',
            'Nhấn quá trình vừa xảy ra gây dấu hiệu hiện tại: You look tired. Have you been running?',
            'Hành động lặp lại gần đây: She has been calling me all week.',
            'Tình huống tạm thời kéo dài đến nay: I have been staying at a hotel.',
            'Than phiền về việc kéo dài: Someone has been using my laptop.',
            'Giải thích nguyên nhân hiện tại bằng quá trình trước đó.',
            'Nhấn effort, persistence, irritation hoặc ongoing activity.'
        ],
        avoid: [
            'Không dùng với stative verbs thông thường như know, own, believe.',
            'Nếu nhấn số lượng hoàn tất, dùng present perfect simple.',
            'Không bỏ been.'
        ],
        compare: [
            'I have written three emails = kết quả/số lượng.',
            'I have been writing emails = quá trình/thời lượng.'
        ]
    },
    'past-perfect': {
        category: 'tenses', cefr: 'B2', title: 'Past Perfect',
        uses: [
            'Hành động xảy ra trước một mốc quá khứ khác: The film had started when we arrived.',
            'Giải thích bối cảnh trước sự kiện chính trong kể chuyện.',
            'Reported speech khi lùi present perfect/past simple.',
            'Conditional type 3: If I had known, I would have called.',
            'Wish/if only về quá khứ: I wish I had studied harder.',
            'Nhấn sự hoàn tất trước deadline quá khứ: She had finished by noon.',
            'Dùng với by the time, before, already, never...before trong khung quá khứ.'
        ],
        avoid: [
            'Không dùng had + V3 cho mọi câu quá khứ.',
            'Nếu trình tự đã quá rõ và không cần nhấn trước-sau, past simple có thể đủ.',
            'Không dùng past perfect cho hành động xảy ra sau mốc đang xét.'
        ],
        compare: [
            'Past perfect = trước một mốc quá khứ; present perfect = trước hiện tại và còn liên quan.',
            'Past perfect simple nhấn kết quả/thứ tự; past perfect continuous nhấn quá trình trước mốc.'
        ]
    },
    'past-perfect-continuous': {
        category: 'tenses', cefr: 'B2', title: 'Past Perfect Continuous',
        uses: [
            'Nhấn thời lượng kéo dài trước một mốc quá khứ: They had been waiting for hours.',
            'Giải thích trạng thái ở quá khứ bằng quá trình trước đó: Her eyes were red because she had been crying.',
            'Nói về hoạt động tạm thời kéo dài trước khi bị cắt ngang.',
            'Kể chuyện với backstory có quá trình dài.',
            'Dùng với for/since/before/by the time trong khung quá khứ.',
            'Nhấn effort hoặc frustration trước một kết quả quá khứ.',
            'So sánh một quá trình cũ với một sự kiện xảy ra sau đó.'
        ],
        avoid: [
            'Không dùng nếu chỉ cần nhấn việc đã hoàn tất; dùng past perfect.',
            'Không dùng thường với stative verbs.',
            'Không quên had been + V-ing.'
        ],
        compare: [
            'She had written the report = report đã xong.',
            'She had been writing the report = quá trình viết kéo dài trước mốc.'
        ]
    },
    'future-simple': {
        category: 'tenses', cefr: 'A2', title: 'Future Simple',
        uses: [
            'Quyết định ngay lúc nói: I’ll answer the phone.',
            'Lời hứa, cam kết: I will never forget this.',
            'Dự đoán dựa trên ý kiến/niềm tin: I think it will rain.',
            'Đề nghị/giúp đỡ: I’ll carry that for you.',
            'Từ chối/quyết tâm với won’t: I won’t do it again.',
            'Mệnh đề chính trong điều kiện loại 1: If it rains, we will stay home.',
            'Lời đe dọa/cảnh báo/cam đoan: You’ll regret this.'
        ],
        avoid: [
            'Không dùng will trong time clause sau when/until/as soon as nếu nói tương lai.',
            'Không dùng will cho kế hoạch đã sắp xếp nếu present continuous tự nhiên hơn.',
            'Không nhầm will với be going to khi có dấu hiệu hiện tại rõ.'
        ],
        compare: [
            'Will = quyết định tức thời/dự đoán; going to = dự định/dấu hiệu.',
            'Present continuous = arrangement; present simple = timetable.'
        ]
    },
    'future-continuous': {
        category: 'tenses', cefr: 'B2', title: 'Future Continuous',
        uses: [
            'Hành động sẽ đang diễn ra tại một mốc tương lai: At 8, I’ll be flying.',
            'Kế hoạch/schedule như bối cảnh tương lai: I’ll be working all day tomorrow.',
            'Hỏi lịch sự về kế hoạch người khác: Will you be using the car?',
            'Dự đoán việc đang diễn ra ở hiện tại/tương lai: She’ll be sleeping now.',
            'Nhấn một hoạt động tự nhiên xảy ra theo lịch, ít áp lực hơn will.',
            'Mô tả timeline trong kế hoạch, dự án, hành trình.',
            'Tránh nghe như yêu cầu trực tiếp khi hỏi thông tin.'
        ],
        avoid: [
            'Không dùng nếu chỉ cần nói sự kiện sẽ xảy ra một lần.',
            'Không dùng cho trạng thái không có quá trình rõ.',
            'Không quên be trong will be V-ing.'
        ],
        compare: [
            'Will you use the car? có thể nghe như yêu cầu/quyết định.',
            'Will you be using the car? hỏi lịch trình mềm hơn.'
        ]
    },
    'future-perfect': {
        category: 'tenses', cefr: 'B2', title: 'Future Perfect',
        uses: [
            'Việc sẽ hoàn tất trước một mốc tương lai: I’ll have finished by 5.',
            'Deadline, milestone, project timeline: By June, we’ll have launched.',
            'Dự đoán kết quả đã hoàn thành ở tương lai: They’ll have arrived by now.',
            'Nhấn thành tựu tích lũy đến một thời điểm tương lai.',
            'Dùng với by, by the time, before + mốc tương lai.',
            'So sánh trạng thái trước và sau một deadline.',
            'Diễn đạt trong planning/reporting chuyên nghiệp.'
        ],
        avoid: [
            'Không dùng nếu không có mốc tương lai làm chuẩn.',
            'Không dùng để nhấn quá trình kéo dài; dùng future perfect continuous.',
            'Không dùng will trong mệnh đề thời gian: by the time he arrives.'
        ],
        compare: [
            'I will finish by 5 = lời hứa/kế hoạch.',
            'I will have finished by 5 = đến 5 giờ việc đã xong.'
        ]
    },
    'future-perfect-continuous': {
        category: 'tenses', cefr: 'C1', title: 'Future Perfect Continuous',
        uses: [
            'Nhấn quá trình sẽ kéo dài bao lâu đến một mốc tương lai.',
            'Dùng với by + mốc tương lai + for + khoảng thời gian.',
            'Mô tả tenure/experience: By May, I’ll have been working here for ten years.',
            'Nhấn effort, endurance, accumulated time.',
            'Dự đoán nguyên nhân trạng thái ở tương lai.',
            'Lập kế hoạch dài hạn, timeline nghề nghiệp/dự án.',
            'Cho thấy sự liên tục thay vì chỉ kết quả hoàn tất.'
        ],
        avoid: [
            'Không dùng nếu trọng tâm là việc xong hay chưa.',
            'Không dùng thường với stative verbs.',
            'Không bỏ been.'
        ],
        compare: [
            'Future perfect = sẽ đã xong.',
            'Future perfect continuous = sẽ đã đang kéo dài được bao lâu.'
        ]
    },
    'near-future': {
        category: 'tenses', cefr: 'A2', title: 'Near Future',
        uses: [
            'Be going to cho dự định đã có trước.',
            'Be going to cho dự đoán dựa trên dấu hiệu hiện tại.',
            'Present continuous cho kế hoạch đã sắp xếp cụ thể.',
            'Present simple cho lịch trình cố định.',
            'Be about to cho việc sắp xảy ra ngay.',
            'Be due to cho lịch dự kiến chính thức.',
            'Be to + V cho kế hoạch/mệnh lệnh trang trọng.'
        ],
        avoid: [
            'Không dùng will cho mọi ý tương lai.',
            'Không dùng present continuous nếu chưa có arrangement.',
            'Không dùng going to cho quyết định vừa nảy ra nếu will tự nhiên hơn.'
        ],
        compare: [
            'I’m going to meet him = tôi có dự định.',
            'I’m meeting him = đã sắp xếp lịch/hẹn.'
        ]
    },
    'sequence-of-tenses': {
        category: 'tenses', cefr: 'C1', title: 'Sequence of Tenses',
        uses: [
            'Phối hợp thì trong reported speech.',
            'Giữ/chuyển thì trong noun clauses sau verbs of thinking/saying.',
            'Tương lai nhìn từ quá khứ với would/was going to.',
            'Giữ hiện tại cho chân lý, định nghĩa, sự thật còn đúng.',
            'Dùng past perfect để đánh dấu sự kiện xảy ra trước trong khung quá khứ.',
            'Phối hợp time clauses với main clauses.',
            'Đọc và viết câu nhiều tầng mà không lạc mốc thời gian.'
        ],
        avoid: [
            'Không lùi thì máy móc với chân lý hoặc sự thật vẫn đúng.',
            'Không dùng will trong time clause chỉ tương lai.',
            'Không trộn mốc hiện tại và quá khứ nếu không có lý do rõ.'
        ],
        compare: [
            'Backshift trong reported speech là lựa chọn theo reporting frame.',
            'Time clause có quy tắc riêng: I’ll call when I arrive.'
        ]
    },
    'articles-determiners': {
        category: 'foundations', cefr: 'A1', title: 'Articles & Determiners',
        uses: [
            'A/an khi giới thiệu một danh từ đếm được số ít chưa xác định.',
            'The khi người nghe biết rõ đối tượng hoặc đã nhắc trước.',
            'The cho thực thể duy nhất trong ngữ cảnh: the sun, the manager.',
            'Zero article cho plural/uncountable nouns khi nói chung.',
            'Determiners sở hữu/chỉ định/lượng hóa: my, this, some, each.',
            'Institutional zero article: go to school, be in prison.',
            'Generic reference: a tiger / the tiger / tigers.'
        ],
        avoid: [
            'Không dùng a/an với uncountable nouns.',
            'Không đặt hai central determiners cùng lúc: the my book.',
            'Không dịch “cái/sự” từ tiếng Việt thành the mọi lúc.'
        ],
        compare: [
            'A book = một quyển chưa xác định; the book = quyển đã xác định.',
            'Children need sleep = trẻ em nói chung; the children = nhóm trẻ cụ thể.'
        ]
    },
    'countable-uncountable': {
        category: 'foundations', cefr: 'A2', title: 'Countable vs Uncountable',
        uses: [
            'Quyết định có dùng a/an được không.',
            'Quyết định dùng many/few hay much/little.',
            'Quyết định verb số ít hay số nhiều.',
            'Chọn đơn vị đo cho uncountable nouns: a piece of advice.',
            'Phân biệt nghĩa khi một từ vừa countable vừa uncountable.',
            'Viết academic nouns chính xác: evidence, research, data.',
            'Tránh plural sai với advice/information/equipment.'
        ],
        avoid: [
            'Không thêm -s cho advice, information, furniture, equipment.',
            'Không dùng many với uncountable nouns.',
            'Không dùng a/an trực tiếp trước uncountable noun.'
        ],
        compare: [
            'A paper = bài báo/tờ báo; paper = giấy.',
            'A coffee = một ly cà phê; coffee = cà phê nói chung.'
        ]
    },
    'quantifiers': {
        category: 'foundations', cefr: 'A2', title: 'Quantifiers',
        uses: [
            'Many/few/several/a number of cho countable plural.',
            'Much/little/a great deal of cho uncountable.',
            'Some/any/no/all/most/enough cho nhiều loại noun.',
            'A few/a little để nói “có một ít” theo hướng tích cực.',
            'Few/little để nói “ít đến mức không đủ” theo hướng tiêu cực.',
            'Each/every để nhìn từng cá thể hoặc cả nhóm.',
            'Most vs most of để phân biệt general và specific group.'
        ],
        avoid: [
            'Không dùng much trong câu khẳng định đời thường nếu a lot of tự nhiên hơn.',
            'Không nhầm a number of với the number of.',
            'Không dùng every với plural noun.'
        ],
        compare: [
            'Few friends = gần như không có bạn; a few friends = có vài người bạn.',
            'Most people = người ta nói chung; most of the people = nhóm cụ thể.'
        ]
    },
    'subject-verb-agreement': {
        category: 'foundations', cefr: 'B1', title: 'Subject-Verb Agreement',
        uses: [
            'Chia verb theo head noun của subject, không theo noun gần nhất.',
            'Each/every/either/neither dùng verb số ít.',
            'A number of + plural verb; the number of + singular verb.',
            'Either/or, neither/nor thường hòa theo noun gần nhất.',
            'Amounts/time/distance có thể dùng singular: Ten years is long.',
            'Collective nouns tùy BrE/AmE và ý nghĩa tập thể/cá thể.',
            'Singular they dùng plural verb.'
        ],
        avoid: [
            'Không chia theo cụm giới từ chen giữa.',
            'Không quên -s trong present simple số ít.',
            'Không áp dụng máy móc hình thức số nhiều như news/economics.'
        ],
        compare: [
            'The list of items is; the items are.',
            'The team is winning; BrE có thể The team are arguing.'
        ]
    },
    'prepositions': {
        category: 'mistakes', cefr: 'A2', title: 'Prepositions',
        uses: [
            'Time: at 7, on Monday, in June, by Friday, until tomorrow.',
            'Place: at a point, on a surface, in an enclosed/large area.',
            'Movement: to, into, onto, across, through, along.',
            'Cause/means/agent: because of, by, with.',
            'Fixed adjective/verb/noun patterns: interested in, depend on, reason for.',
            'Preposition stranding in speech: Who are you talking to?',
            'Preposition + which/whom in formal relative clauses.'
        ],
        avoid: [
            'Không dịch từng giới từ từ tiếng Việt.',
            'Sau preposition dùng noun/V-ing, không dùng bare verb.',
            'Không dùng to sau discuss/enter/reach nếu không có nghĩa khác.'
        ],
        compare: [
            'At = điểm; on = bề mặt/ngày; in = không gian/khoảng rộng.',
            'Arrive at station/airport; arrive in city/country.'
        ]
    },
    'question-forms': {
        category: 'patterns', cefr: 'A2', title: 'Question Forms',
        uses: [
            'Yes/no questions với auxiliary/be/modal đứng trước subject.',
            'Wh-questions hỏi object/context: Where did she go?',
            'Subject questions không dùng do-support: Who called you?',
            'Negative questions thể hiện kỳ vọng/ngạc nhiên: Don’t you like it?',
            'Choice questions: Tea or coffee?',
            'Embedded questions để lịch sự: Could you tell me where it is?',
            'Tag questions để xác nhận hoặc giữ tương tác.'
        ],
        avoid: [
            'Không đảo trong embedded questions.',
            'Sau do/does/did, main verb về bare infinitive.',
            'Không thêm do nếu wh-word là subject.'
        ],
        compare: [
            'Who did you call? = bạn gọi ai.',
            'Who called you? = ai gọi bạn.'
        ]
    },
    'negatives': {
        category: 'patterns', cefr: 'A2', title: 'Negatives',
        uses: [
            'Not sau auxiliary/be/modal: is not, do not, cannot.',
            'No + noun để phủ định mạnh: no time, no reason.',
            'Never cho “không bao giờ” hoặc kinh nghiệm bằng present perfect.',
            'Nobody/nothing/nowhere làm subject/object phủ định.',
            'Hardly/barely/rarely/scarcely mang nghĩa gần phủ định.',
            'Transferred negation: I don’t think he will come.',
            'Negative fronting tạo inversion trang trọng.'
        ],
        avoid: [
            'Tránh double negative trong standard English.',
            'Không dùng no và not any lẫn lộn nếu không hiểu sắc thái.',
            'Không quên do-support với lexical verbs.'
        ],
        compare: [
            'I have no money = mạnh/gọn.',
            'I don’t have any money = trung tính hơn.'
        ]
    },
    'relative-clauses': {
        category: 'patterns', cefr: 'B2', title: 'Relative Clauses',
        uses: [
            'Defining relative clauses để xác định danh từ.',
            'Non-defining clauses để thêm thông tin phụ.',
            'Who/whom cho người, which cho vật, that cho defining clauses.',
            'Whose cho sở hữu của người hoặc vật.',
            'Where/when/why cho place/time/reason khi phù hợp.',
            'Quantifier + of whom/which: many of whom, none of which.',
            'Sentential which quay lại cả mệnh đề trước.'
        ],
        avoid: [
            'Không dùng that trong non-defining clauses.',
            'Không thêm đại từ thừa: the man who he called.',
            'Không dùng where nếu thật ra cần which + preposition.'
        ],
        compare: [
            'The students who passed celebrated = chỉ nhóm passed.',
            'The students, who passed, celebrated = tất cả đều passed.'
        ]
    },
    'reported-speech': {
        category: 'patterns', cefr: 'B2', title: 'Reported Speech',
        uses: [
            'Tường thuật statements với say/tell + that-clause.',
            'Tường thuật yes/no questions với if/whether.',
            'Tường thuật wh-questions với wh + statement order.',
            'Tường thuật commands/requests với ask/tell + object + to V.',
            'Lùi thì khi reporting verb ở quá khứ: present simple → past simple, will → would, can → could, may → might.',
            'Đổi pronouns/time/place/demonstratives theo góc nhìn người tường thuật.',
            'Giữ thì nếu nói sự thật chung, chân lý, định nghĩa hoặc điều vẫn đúng.',
            'Có thể lùi cả present perfect continuous, future continuous, future perfect khi cần.'
        ],
        avoid: [
            'Không giữ trật tự câu hỏi trong reported questions.',
            'Không dùng say someone; dùng tell someone.',
            'Không lùi thì máy móc với chân lý, lịch trình cố định hay định nghĩa.',
            'Không quên đổi here/this/today/yesterday/tomorrow theo mốc tham chiếu phù hợp.'
        ],
        compare: [
            'She said, “I’m tired.” → She said she was tired.',
            '“Where are you?” → He asked where I was.',
            '“I will have finished it by Friday.” → She said she would have finished it by Friday.',
            '“I am going to leave now.” → He said he was going to leave then.'
        ]
    },
    'modal-verbs': {
        category: 'structures', cefr: 'B1', title: 'Modal Verbs',
        uses: [
            'Ability: can/could/be able to.',
            'Permission: can/may/could.',
            'Possibility/probability: may/might/could/must/can’t.',
            'Obligation: must/have to/need to.',
            'Advice/expectation: should/ought to/had better.',
            'Requests/offers: can/could/would/will.',
            'Past speculation/regret with modal perfect.'
        ],
        avoid: [
            'Không thêm -s sau modal.',
            'Không dùng to sau modal thường: can go, must leave.',
            'Không nhầm mustn’t với don’t have to.'
        ],
        compare: [
            'Mustn’t = cấm; don’t have to = không cần.',
            'Must be = suy đoán mạnh; may/might be = khả năng yếu hơn.'
        ]
    },
    'conditionals': {
        category: 'structures', cefr: 'B2', title: 'Conditionals',
        uses: [
            'Zero conditional cho sự thật/quy luật: If water freezes, it expands.',
            'First conditional cho khả năng thật tương lai.',
            'Second conditional cho giả định hiện tại/tương lai ít thật.',
            'Third conditional cho giả định trái quá khứ.',
            'Mixed conditionals nối nguyên nhân quá khứ với kết quả hiện tại hoặc ngược lại.',
            'Unless/provided/as long as cho điều kiện biến thể.',
            'Inversion conditionals trong văn trang trọng.'
        ],
        avoid: [
            'Không dùng will trong if-clause loại 1 trừ khi will mang nghĩa willingness.',
            'Không trộn type 2 và type 3 nếu không phải mixed conditional có chủ ý.',
            'Không dùng unless nếu nghĩa không thật sự là if not.'
        ],
        compare: [
            'If I had money, I would travel = hiện tại giả định.',
            'If I had had money, I would have travelled = quá khứ tiếc nuối.'
        ]
    },
    'passive-voice': {
        category: 'structures', cefr: 'B2', title: 'Passive Voice',
        uses: [
            'Khi người làm không biết hoặc không quan trọng.',
            'Khi muốn nhấn object/result hơn agent.',
            'Academic/scientific/process writing.',
            'News/reporting khi agent chưa rõ hoặc cần khách quan.',
            'Formal notices/rules: Smoking is prohibited.',
            'Các thì phổ biến ở bị động: present simple, past simple, present continuous, present perfect, future simple.',
            'Modal passive: must be completed, can be seen.',
            'Get-passive khi muốn nhấn sự việc xảy ra hoặc kết quả bất ngờ: He got injured.',
            'Causative passive-like: have something done.'
        ],
        avoid: [
            'Không dùng bị động nếu câu chủ động rõ hơn và agent quan trọng.',
            'Không quên be + V3.',
            'Không dùng passive với intransitive verbs.',
            'Không cố ép mọi câu có hai mệnh đề hoặc động từ trạng thái vào bị động.'
        ],
        compare: [
            'They built the bridge = nhấn người xây.',
            'The bridge was built = nhấn cây cầu/việc hoàn thành.',
            'She gave me a book = chủ động tự nhiên; I was given a book = nhấn người nhận.',
            'He got hurt = get-passive, mang sắc thái tự nhiên/biến cố hơn was hurt.'
        ]
    },
    'gerunds-infinitives': {
        category: 'mistakes', cefr: 'B2', title: 'Gerunds & Infinitives',
        uses: [
            'Gerund làm subject/object: Swimming is relaxing.',
            'Sau prepositions: interested in learning.',
            'Sau verbs cố định: enjoy, avoid, finish, suggest + V-ing.',
            'To-infinitive cho mục đích: I came to help.',
            'Sau verbs cố định: decide, hope, plan, promise + to V.',
            'Object + to V sau ask/tell/advise/allow/encourage.',
            'Bare infinitive sau modals, make/let, perception verbs.'
        ],
        avoid: [
            'Không dùng to V sau enjoy/avoid/suggest.',
            'Không dùng bare verb sau preposition.',
            'Không quên meaning change: stop doing vs stop to do.'
        ],
        compare: [
            'Remember to call = nhớ phải gọi.',
            'Remember calling = nhớ đã gọi.'
        ]
    },
    'noun-clauses': {
        category: 'structures', cefr: 'B2', title: 'Noun Clauses',
        uses: [
            'Làm subject: What she said matters.',
            'Làm object sau verbs of thinking/saying: I know that he left.',
            'Làm complement sau be: The problem is that we are late.',
            'Làm object của giới từ: We talked about whether we should leave.',
            'Embedded questions: I wonder where he lives.',
            'Whether/if clauses cho lựa chọn hoặc nghi vấn.',
            'That-clauses sau adjectives và nouns trừu tượng: I’m sure that..., the fact that...',
            'Academic stance và extraposition: It is clear that...'
        ],
        avoid: [
            'Không đảo như direct question trong noun clause.',
            'Không dùng if sau preposition; dùng whether.',
            'Không bỏ that nếu câu có thể mơ hồ trong formal writing.',
            'Không nhầm noun clause với relative clause: noun clause làm chức năng danh từ, không bổ nghĩa cho một noun trước đó.'
        ],
        compare: [
            'Where does he live? = câu hỏi trực tiếp.',
            'I know where he lives = noun clause.',
            'The house where I live = relative clause.'
        ]
    },
    'inversion': {
        category: 'structures', cefr: 'C1', title: 'Inversion',
        uses: [
            'Sau negative adverbials: Never have I seen...',
            'Sau only + time/condition phrase: Only then did I understand.',
            'Hardly/scarcely/no sooner cho trình tự sự kiện trang trọng.',
            'So/such đầu câu để nhấn mức độ.',
            'Conditional inversion: Had I known...',
            'Locative/directional inversion trong văn kể: Into the room walked...',
            'Fronted complement trong văn phong trang trọng/literary.'
        ],
        avoid: [
            'Không đảo mọi câu chỉ để nghe nâng cao.',
            'Không quên auxiliary trong inversion.',
            'Không dùng inversion quá dày trong văn đời thường.'
        ],
        compare: [
            'I had never seen this = trung tính.',
            'Never had I seen this = nhấn mạnh/trang trọng.'
        ]
    },
    'participle-clauses': {
        category: 'structures', cefr: 'C1', title: 'Participle Clauses',
        uses: [
            'Rút gọn adverbial clauses khi chủ thể trùng.',
            'Diễn tả simultaneous action: Walking home, I saw her.',
            'Diễn tả reason: Feeling tired, he left early.',
            'Diễn tả passive/reduced relative: Built in 1920, the house...',
            'Having + V3 cho hành động xảy ra trước.',
            'Nén thông tin trong academic/professional writing.',
            'Tạo nhịp văn mượt hơn khi không làm mơ hồ subject.'
        ],
        avoid: [
            'Tránh dangling modifier: Walking home, the rain started.',
            'Không rút gọn nếu subject hai mệnh đề khác nhau.',
            'Không dùng quá nhiều làm câu nặng.'
        ],
        compare: [
            'Because he was tired, he left = rõ, đầy đủ.',
            'Feeling tired, he left = gọn, viết hơn.'
        ]
    },
    'academic-style-grammar': {
        category: 'structures', cefr: 'C1', title: 'Academic Grammar',
        uses: [
            'Nominalization để nén lập luận: the analysis of...',
            'Passive voice khi agent không quan trọng.',
            'Hedges để tránh overclaim: may, tends to, appears to.',
            'Noun complement clauses: the claim that...',
            'Complex noun phrases để nén thông tin.',
            'Cohesive devices để nối lập luận.',
            'Impersonal structures: It is likely that...'
        ],
        avoid: [
            'Không danh hóa quá mức làm câu nặng.',
            'Không khẳng định tuyệt đối nếu bằng chứng chưa đủ.',
            'Không dùng spoken grammar trong formal essay.'
        ],
        compare: [
            'We found that... = trực tiếp.',
            'The findings suggest that... = học thuật, khách quan hơn.'
        ]
    },
    'grammar-registers': {
        category: 'structures', cefr: 'C2', title: 'Register Control',
        uses: [
            'Chọn formal/informal theo quan hệ và mục đích.',
            'Email công việc cần lịch sự, rõ, ít slang.',
            'Academic writing cần hedging, nominalization, precision.',
            'Spoken English dùng ellipsis, chunks, discourse markers.',
            'Legal/formal prose dùng shall, hereby, inversion, archaisms.',
            'BrE/AmE khác ở agreement, prepositions, subjunctive, vocabulary.',
            'Chuyển register khi cùng một ý xuất hiện trong nói, email, essay.'
        ],
        avoid: [
            'Không bê spoken grammar vào essay.',
            'Không dùng cấu trúc pháp lý/cổ trong hội thoại thường.',
            'Không trộn BrE/AmE bừa bãi trong cùng văn bản chính thức.'
        ],
        compare: [
            'Give me the file = trực tiếp.',
            'Could you send me the file? = lịch sự hơn.',
            'I would appreciate it if you could send the file = formal.'
        ]
    },
    'punctuation-deep': {
        category: 'mistakes', cefr: 'B1', title: 'Punctuation',
        uses: [
            'Comma sau introductory clause/phrase dài.',
            'Comma trước FANBOYS nối hai independent clauses.',
            'Comma cho non-defining clauses và apposition.',
            'Semicolon nối hai independent clauses rất gần ý.',
            'Colon giới thiệu danh sách/giải thích.',
            'Dash tạo chêm xen mạnh hoặc đổi nhịp.',
            'Apostrophe cho possession và contractions.'
        ],
        avoid: [
            'Tránh comma splice.',
            'Không tách subject và verb bằng comma nếu không có chêm xen.',
            'Không dùng apostrophe cho plural thường.'
        ],
        compare: [
            'I came, I saw = comma splice.',
            'I came; I saw = đúng nếu muốn nối hai mệnh đề độc lập.'
        ]
    }
};

Object.assign(grammarUsageDeepDiveData, {
    'sentence-order': {
        category: 'foundations', cefr: 'A1', title: 'Sentence Order',
        uses: [
            'Dùng S + V + O làm khung mặc định cho câu trần thuật.',
            'Đặt manner-place-time ở cuối khi câu có nhiều thông tin phụ.',
            'Đưa thông tin cũ/nhẹ lên trước, thông tin mới/nặng ra sau.',
            'Đảo trật tự chỉ khi dùng question, inversion, fronting hoặc cấu trúc nhấn mạnh.',
            'Dùng khung câu để sửa câu dịch từng chữ từ tiếng Việt.'
        ],
        avoid: [
            'Không đặt object trước verb trong câu thường.',
            'Không để trạng từ chen giữa verb và object nếu không có lý do rõ.',
            'Không nhầm trật tự câu hỏi với trật tự noun clause.'
        ],
        compare: ['English word order cố định hơn tiếng Việt; ý nghĩa phụ thuộc nhiều vào vị trí.']
    },
    'parts-of-speech': {
        category: 'foundations', cefr: 'A1', title: 'Parts of Speech',
        uses: [
            'Xác định từ đang làm subject, verb, object, modifier hay connector.',
            'Chọn word form đúng trong bài điền từ.',
            'Biết vị trí nào cần noun, adjective, adverb hoặc verb.',
            'Phân biệt function words với content words khi nghe/nói.',
            'Học word families theo cụm: decide, decision, decisive, decisively.'
        ],
        avoid: [
            'Không dựa vào nghĩa tiếng Việt để chọn từ loại.',
            'Không nghĩ một từ chỉ có một từ loại.',
            'Không xem -ly luôn là adverb.'
        ],
        compare: ['A successful plan cần adjective; plan successfully cần adverb.']
    },
    'pronouns-possessives': {
        category: 'foundations', cefr: 'A1', title: 'Pronouns & Possessives',
        uses: [
            'Tránh lặp noun khi antecedent đã rõ.',
            'Dùng subject pronouns làm chủ ngữ và object pronouns làm tân ngữ.',
            'Dùng possessive determiners trước noun: my book.',
            'Dùng possessive pronouns độc lập: This book is mine.',
            'Dùng reflexives khi subject và object là cùng một người/vật.',
            'Dùng singular they khi giới tính không rõ hoặc muốn trung tính.'
        ],
        avoid: [
            'Không dùng pronoun khi antecedent mơ hồ.',
            'Không viết your’s, her’s, their’s.',
            'Không dùng myself thay cho I/me nếu không có chức năng phản thân/nhấn mạnh.'
        ],
        compare: ['My đứng trước noun; mine đứng một mình.']
    },
    'adjectives-adverbs': {
        category: 'foundations', cefr: 'A2', title: 'Adjectives & Adverbs',
        uses: [
            'Adjective bổ nghĩa noun: a careful driver.',
            'Adjective sau linking verbs: She looks tired.',
            'Adverb bổ nghĩa verb: She drives carefully.',
            'Adverb bổ nghĩa adjective/adverb khác: very useful, extremely slowly.',
            'Frequency adverbs mô tả thói quen: often, usually, rarely.',
            'Stance adverbs thể hiện thái độ người nói: frankly, probably, unfortunately.'
        ],
        avoid: [
            'Không dùng adverb sau linking verb khi cần subject complement.',
            'Không đặt only/almost/even xa phần nó bổ nghĩa.',
            'Không nhồi quá nhiều adjectives trước noun.'
        ],
        compare: ['Hard = chăm chỉ/mạnh; hardly = hầu như không.']
    },
    'phrases-vs-clauses': {
        category: 'foundations', cefr: 'B1', title: 'Phrases vs Clauses',
        uses: [
            'Phrase dùng như một khối chức năng trong câu nhưng không có finite verb đầy đủ.',
            'Clause có subject + finite verb và có thể làm main/subordinate clause.',
            'Dùng noun phrases để nén thông tin quanh danh từ.',
            'Dùng adverbial clauses để thêm điều kiện, thời gian, nguyên nhân.',
            'Dùng hiểu biết này để tránh sentence fragments.'
        ],
        avoid: [
            'Không để dependent clause đứng một mình trong formal writing.',
            'Không rút gọn clause nếu subject bị mơ hồ.',
            'Không gọi mọi cụm dài là clause nếu không có finite verb.'
        ],
        compare: ['Because of rain = phrase; because it rained = clause.']
    },
    'sentence-types': {
        category: 'foundations', cefr: 'A2', title: 'Sentence Types',
        uses: [
            'Statement để trình bày thông tin.',
            'Question để hỏi hoặc yêu cầu gián tiếp.',
            'Imperative để hướng dẫn, ra lệnh, yêu cầu.',
            'Exclamation để nhấn cảm xúc.',
            'Simple/compound/complex sentences để điều khiển nhịp writing.',
            'Compound-complex khi cần nối nhiều quan hệ logic trong một câu.'
        ],
        avoid: [
            'Không kéo nhiều independent clauses bằng dấu phẩy.',
            'Không viết câu quá dài nếu quan hệ logic không rõ.',
            'Không dùng exclamation trong academic writing trừ khi có chủ ý đặc biệt.'
        ],
        compare: ['Simple sentence không đồng nghĩa với câu ngắn; nó chỉ có một independent clause.']
    },
    'verbs-overview': {
        category: 'foundations', cefr: 'A1', title: 'Verb System',
        uses: [
            'Main verbs mang nghĩa hành động/trạng thái chính.',
            'Auxiliary verbs tạo tense, aspect, voice, question, negative.',
            'Transitive verbs cần object.',
            'Intransitive verbs tự đủ nghĩa.',
            'Linking verbs nối subject với complement.',
            'Ditransitive verbs nhận indirect và direct object.'
        ],
        avoid: [
            'Không dùng adverb sau linking verbs nếu cần adjective.',
            'Không bỏ object của transitive verb khi nghĩa chưa đủ.',
            'Không dùng auxiliary như main verb nếu không hiểu chức năng.'
        ],
        compare: ['She looks carefully = cô ấy nhìn cẩn thận; She looks careful = cô ấy trông cẩn thận.']
    },
    'nouns-plurals': {
        category: 'foundations', cefr: 'A1', title: 'Nouns & Plurals',
        uses: [
            'Chọn singular/plural để chia verb và determiner.',
            'Dùng plural count nouns cho nghĩa chung: Books are useful.',
            'Dùng singular count nouns với a/an/the/this/each.',
            'Học irregular plurals như child-children, tooth-teeth.',
            'Dùng plural-only nouns đúng: scissors, trousers, clothes.',
            'Phân biệt collective nouns theo nghĩa tập thể/cá thể.'
        ],
        avoid: [
            'Không thêm -s vào uncountable nouns.',
            'Không dùng singular count noun trần trụi: I bought book.',
            'Không nhầm people với persons/peoples trong ngữ cảnh thường.'
        ],
        compare: ['A fish/two fish có thể zero plural; fishes dùng khi nói nhiều loài cá.']
    },
    'numerals': {
        category: 'foundations', cefr: 'A2', title: 'Numerals',
        uses: [
            'Cardinal numbers cho số lượng.',
            'Ordinal numbers cho thứ tự, ngày tháng, xếp hạng.',
            'Fractions, decimals, percentages trong data/academic writing.',
            'Compound adjectives với số: a five-year plan.',
            'Hundred/thousand không thêm -s khi có số cụ thể.',
            'Hundreds/thousands of khi lượng không xác định.'
        ],
        avoid: [
            'Không viết two hundreds people.',
            'Không thêm -s trong five-year-old khi làm adjective.',
            'Không đọc decimal bằng comma trong English.'
        ],
        compare: ['Two hundred people; hundreds of people.']
    },
    'word-formation': {
        category: 'foundations', cefr: 'B1', title: 'Word Formation',
        uses: [
            'Tạo noun bằng -tion, -ment, -ness, -ity.',
            'Tạo adjective bằng -ful, -less, -ous, -ive, -able.',
            'Tạo verb bằng -ize, -ify, -en, -ate.',
            'Tạo negative bằng un-, in-/im-/il-/ir-, dis-, non-.',
            'Dùng conversion khi một noun thành verb: email, text, Google.',
            'Dùng compounds để nén nghĩa: climate-change policy.'
        ],
        avoid: [
            'Không dùng suffix theo cảm tính nếu từ không tồn tại.',
            'Không nhầm economic và economical.',
            'Không biến mọi adverb thành -ly nếu từ là irregular.'
        ],
        compare: ['Success là noun, successful là adjective, successfully là adverb.']
    },
    'demonstratives-deep': {
        category: 'foundations', cefr: 'A2', title: 'Demonstratives',
        uses: [
            'This/these cho gần người nói hoặc gần trong diễn ngôn.',
            'That/those cho xa người nói hoặc quay lại ý vừa nói.',
            'Dùng trước noun: this book, those ideas.',
            'Dùng độc lập như pronoun: This is useful.',
            'Dùng this để giới thiệu điều sắp nói: Listen to this.',
            'Dùng that để đánh giá toàn bộ tình huống trước đó.'
        ],
        avoid: [
            'Không dùng this/these sai số ít-số nhiều.',
            'Không dùng demonstrative mơ hồ trong formal writing.',
            'Không nhầm that relative pronoun với demonstrative that.'
        ],
        compare: ['This points forward/near; that often points backward/far.']
    },
    'anaphoric-reference': {
        category: 'foundations', cefr: 'C1', title: 'Pronoun Reference',
        uses: [
            'Dùng pronoun quay lại antecedent đã rõ.',
            'Dùng cataphoric reference để tạo nhịp văn: When she arrived, Mary smiled.',
            'Dùng generic you/they/one khi nói chung.',
            'Dùng singular they cho người chưa rõ giới.',
            'Dùng repeated noun thay pronoun nếu câu có nguy cơ mơ hồ.'
        ],
        avoid: [
            'Không để hai antecedents cùng có thể là he/she/it.',
            'Không dùng it/this mơ hồ sau cả một đoạn dài.',
            'Không để pronoun quá xa antecedent trong writing khó.'
        ],
        compare: ['This/that có thể quay lại cả ý; he/she/it thường cần noun cụ thể.']
    },
    'collocations-pairs': {
        category: 'foundations', cefr: 'B1', title: 'Collocations',
        uses: [
            'Học verb + noun: make a decision, take responsibility.',
            'Học adjective + noun: heavy traffic, strong coffee.',
            'Học adverb + adjective: highly likely, deeply concerned.',
            'Học verb + preposition: depend on, apologize for.',
            'Dùng collocations để writing nghe tự nhiên hơn.',
            'Dùng chunks thay vì dịch từng từ.'
        ],
        avoid: [
            'Không nói do a decision, make homework.',
            'Không thay một từ đồng nghĩa vào collocation nếu chưa chắc.',
            'Không học vocabulary rời mà bỏ pattern đi kèm.'
        ],
        compare: ['Strong coffee nhưng heavy rain; powerful coffee nghe không tự nhiên.']
    },
    'auxiliary-system': {
        category: 'foundations', cefr: 'A1', title: 'Auxiliary System',
        uses: [
            'Be tạo continuous và passive.',
            'Have tạo perfect tenses.',
            'Do tạo question/negative/emphasis khi không có auxiliary khác.',
            'Modals thêm nghĩa khả năng, nghĩa vụ, suy đoán.',
            'Auxiliary hỗ trợ short answers và ellipsis.',
            'Auxiliary đảo lên trước subject trong questions/inversion.'
        ],
        avoid: [
            'Không dùng do với be như main verb: Do you are? sai.',
            'Không quên auxiliary trong negative/question.',
            'Không chia main verb sau do/does/did.'
        ],
        compare: ['She works; Does she work? She does not work.']
    },
    'conjunctions': {
        category: 'patterns', cefr: 'B1', title: 'Conjunctions',
        uses: [
            'Coordinating conjunctions nối phần ngang hàng: and, but, or, so.',
            'Subordinating conjunctions tạo clause phụ: because, although, if, when.',
            'Correlative pairs tạo cấu trúc song song: both…and, either…or.',
            'Dùng although/while/whereas cho nhượng bộ hoặc đối chiếu.',
            'Dùng because/since/as cho nguyên nhân với sắc thái khác nhau.',
            'Dùng so that/in order that cho mục đích.'
        ],
        avoid: [
            'Không dùng although và but cùng một quan hệ.',
            'Không nối hai clauses độc lập chỉ bằng comma.',
            'Không phá parallel structure sau correlative conjunctions.'
        ],
        compare: ['Because + clause; because of + noun/V-ing.']
    },
    'comparisons': {
        category: 'patterns', cefr: 'B1', title: 'Comparisons',
        uses: [
            'Comparative để so hai đối tượng hoặc hai trạng thái.',
            'Superlative để chọn cực trị trong một nhóm.',
            'As...as để so ngang bằng.',
            'Not as/so...as để nói kém hơn.',
            'Less/least để giảm mức độ.',
            'The more..., the more... cho quan hệ tăng giảm song hành.',
            'Dùng that/those để tránh so sánh lệch đối tượng.'
        ],
        avoid: [
            'Không dùng double comparative: more easier.',
            'Không so sánh người/vật với thuộc tính của người/vật khác.',
            'Không quên the trước superlative khi cần.'
        ],
        compare: ['My salary is higher than yours, không phải higher than you.']
    },
    'imperatives-requests': {
        category: 'patterns', cefr: 'A2', title: 'Imperatives & Requests',
        uses: [
            'Imperative cho hướng dẫn: Click Save.',
            'Imperative cho mệnh lệnh/cảnh báo: Don’t move.',
            'Please + imperative cho yêu cầu lịch sự cơ bản.',
            'Let’s + V cho đề nghị cùng làm.',
            'Could/Would you...? cho request lịch sự.',
            'Would you mind + V-ing cho request rất lịch sự.'
        ],
        avoid: [
            'Không dùng imperative trần trong email nếu dễ nghe cộc.',
            'Không dùng would you mind + to V.',
            'Không quên don’t trong negative imperative.'
        ],
        compare: ['Open the window = trực tiếp; Could you open the window? = lịch sự hơn.']
    },
    'parallel-structure': {
        category: 'patterns', cefr: 'B2', title: 'Parallel Structure',
        uses: [
            'Dùng trong lists: reading, writing, and speaking.',
            'Dùng sau both…and, either…or, not only…but also.',
            'Dùng trong comparisons với than/as.',
            'Dùng trong headings, bullet lists, thesis statements.',
            'Dùng để câu cân bằng và dễ đọc hơn.'
        ],
        avoid: [
            'Không trộn V-ing, to V, noun phrase trong cùng list nếu không có lý do.',
            'Không để not only và but also nối hai thành phần khác cấp.',
            'Không phá parallelism trong formal writing.'
        ],
        compare: ['She likes reading and to write sai nhịp; reading and writing song song.']
    },
    'tag-questions': {
        category: 'patterns', cefr: 'B1', title: 'Tag Questions',
        uses: [
            'Xác nhận thông tin: You’re coming, aren’t you?',
            'Giữ tương tác trong conversation.',
            'Rising intonation để hỏi thật.',
            'Falling intonation để kỳ vọng đồng ý.',
            'Dùng same auxiliary/modal với main clause.',
            'Special tags: I am..., aren’t I?; Let’s..., shall we?'
        ],
        avoid: [
            'Không dùng positive tag sau positive statement thông thường.',
            'Không quên đổi polarity.',
            'Không dùng sai auxiliary.'
        ],
        compare: ['You are tired, aren’t you?; You aren’t tired, are you?']
    },
    'embedded-questions': {
        category: 'patterns', cefr: 'B2', title: 'Embedded Questions',
        uses: [
            'Làm câu hỏi lịch sự hơn: Could you tell me...?',
            'Làm noun clause sau know/wonder/ask.',
            'Dùng if/whether cho yes/no questions.',
            'Dùng wh + statement order cho wh-questions.',
            'Dùng trong writing khi đặt vấn đề nghiên cứu.',
            'Dùng sau phrases như I’m not sure, Do you know...?'
        ],
        avoid: [
            'Không đảo subject-auxiliary trong embedded question.',
            'Không dùng question mark nếu whole sentence không phải question.',
            'Không dùng if sau preposition.'
        ],
        compare: ['Where is he? → I wonder where he is.']
    },
    'hedges-boosters': {
        category: 'patterns', cefr: 'C1', title: 'Hedges & Boosters',
        uses: [
            'Hedges giảm độ tuyệt đối: may, might, appears to, tends to.',
            'Boosters tăng sức khẳng định: clearly, definitely, undoubtedly.',
            'Academic writing dùng hedges để tránh overclaim.',
            'Business communication dùng hedges để góp ý mềm hơn.',
            'Argument writing dùng boosters khi bằng chứng đủ mạnh.'
        ],
        avoid: [
            'Không hedge quá nhiều khiến câu mờ.',
            'Không booster khi evidence yếu.',
            'Không dùng obviously nếu có thể xúc phạm người đọc/nghe.'
        ],
        compare: ['This proves... mạnh hơn This suggests... rất nhiều.']
    },
    'politeness-indirectness': {
        category: 'patterns', cefr: 'C1', title: 'Politeness & Indirectness',
        uses: [
            'Dùng modal past: could/would/might để mềm hơn.',
            'Dùng embedded questions cho yêu cầu lịch sự.',
            'Dùng I was wondering/I wanted to ask trong email.',
            'Dùng downtoners: just, a bit, possibly.',
            'Dùng indirect refusal: I’m afraid..., I’m not sure...',
            'Điều chỉnh mức trực tiếp theo quan hệ quyền lực/khoảng cách.'
        ],
        avoid: [
            'Không quá trực tiếp trong bối cảnh công việc nếu không phù hợp.',
            'Không quá vòng vo khiến yêu cầu mơ hồ.',
            'Không dùng please để cứu một câu vốn quá cộc.'
        ],
        compare: ['Send it now; Could you send it today?; I’d appreciate it if you could send it today.']
    },
    'discourse-markers': {
        category: 'patterns', cefr: 'B1', title: 'Discourse Markers',
        uses: [
            'Nối thêm ý: moreover, furthermore, also.',
            'Đối lập: however, nevertheless, on the other hand.',
            'Kết quả: therefore, as a result, consequently.',
            'Ví dụ: for example, for instance.',
            'Chuyển chủ đề trong speaking: anyway, by the way.',
            'Tổ chức lập luận: first, next, finally, in conclusion.'
        ],
        avoid: [
            'Không dùng however như but nếu punctuation sai.',
            'Không lặp một marker liên tục.',
            'Không dùng marker formal trong chat thân mật nếu không cần.'
        ],
        compare: ['But nối clause; however thường nối câu/ý với punctuation riêng.']
    },
    'phrasal-verbs': {
        category: 'structures', cefr: 'B1', title: 'Phrasal Verbs',
        uses: [
            'Dùng trong spoken/informal English rất thường xuyên.',
            'Một số thay thế verb formal: continue → carry on.',
            'Separable phrasal verbs cho phép object ở giữa: turn it off.',
            'Inseparable giữ particle sau verb: look after it.',
            'Three-word verbs: look forward to, get along with.',
            'Học nghĩa theo context vì particle không luôn suy được.'
        ],
        avoid: [
            'Không tách inseparable phrasal verbs.',
            'Không đặt pronoun object sau particle với separable verbs: turn off it sai.',
            'Không dùng phrasal verbs quá informal trong academic writing nếu có lựa chọn formal hơn.'
        ],
        compare: ['Put off = postpone; put on = wear/start wearing; put up with = tolerate.']
    },
    'verb-patterns': {
        category: 'structures', cefr: 'B1', title: 'Verb Patterns',
        uses: [
            'V + V-ing sau enjoy, avoid, finish, suggest.',
            'V + to V sau decide, hope, plan, promise.',
            'V + object + to V sau ask, tell, advise, allow.',
            'V + object + bare V sau make/let/perception verbs.',
            'That-clauses sau think, believe, suggest, insist.',
            'Meaning-change verbs: stop, remember, forget, try, regret.'
        ],
        avoid: [
            'Không suy pattern chỉ từ nghĩa tiếng Việt.',
            'Không dùng suggest someone to do trong chuẩn thông thường.',
            'Không bỏ object khi verb cần object control.'
        ],
        compare: ['Try to open = cố mở; try opening = thử cách mở.']
    },
    'causatives': {
        category: 'structures', cefr: 'B2', title: 'Causatives',
        uses: [
            'Make + O + V cho ép buộc.',
            'Let + O + V cho cho phép.',
            'Have + O + V cho giao việc/nhờ ai làm.',
            'Get + O + to V cho thuyết phục/nhờ được.',
            'Have/get + O + V3 cho thuê/nhờ dịch vụ.',
            'Dùng khi chủ ngữ không trực tiếp thực hiện hành động.'
        ],
        avoid: [
            'Không dùng to sau make/let ở active voice.',
            'Trong passive của make cần to: was made to apologize.',
            'Không nhầm have something done với tự làm.'
        ],
        compare: ['I cut my hair = tôi tự cắt; I had my hair cut = tôi đi cắt tóc.']
    },
    'wish-if-only': {
        category: 'structures', cefr: 'B2', title: 'Wish / If Only',
        uses: [
            'Wish + past cho điều trái hiện tại.',
            'Wish + past perfect cho tiếc nuối quá khứ.',
            'Wish + would cho mong thay đổi/thói quen gây khó chịu.',
            'If only mạnh cảm xúc hơn wish.',
            'Were dùng trang trọng cho giả định.',
            'Dùng trong regret, complaint, unreal desire.'
        ],
        avoid: [
            'Không dùng wish + will cho hy vọng thực tế; dùng hope.',
            'Không dùng would khi chủ ngữ wish và chủ ngữ clause là cùng người cho hành động tự kiểm soát.',
            'Không quên lùi thì để tạo unreality.'
        ],
        compare: ['I hope I pass = hy vọng thật; I wish I passed = hiện tại không pass/khó xảy ra.']
    },
    'mixed-conditionals': {
        category: 'structures', cefr: 'C1', title: 'Mixed Conditionals',
        uses: [
            'Quá khứ giả định → kết quả hiện tại: If I had studied, I would know it now.',
            'Hiện tại giả định → kết quả quá khứ: If I were more careful, I wouldn’t have made that mistake.',
            'Dùng để nối nguyên nhân và hậu quả ở hai mốc thời gian khác nhau.',
            'Rất hữu ích trong regret/explanation/argument.',
            'Dùng khi type 2 hoặc type 3 riêng lẻ không đủ nghĩa.'
        ],
        avoid: [
            'Không trộn thì nếu quan hệ thời gian không rõ.',
            'Không gọi mọi conditional dài là mixed.',
            'Không quên would have + V3 cho kết quả quá khứ.'
        ],
        compare: ['Type 3: quá khứ → quá khứ; mixed: quá khứ → hiện tại hoặc hiện tại → quá khứ.']
    },
    'cleft-sentences': {
        category: 'structures', cefr: 'C1', title: 'Cleft Sentences',
        uses: [
            'It-cleft để nhấn một thành phần: It was John who called.',
            'What-cleft để nhấn thông tin mới: What I need is time.',
            'All-cleft để thu hẹp trọng tâm: All I want is a chance.',
            'Dùng trong correction/contrast: It wasn’t money that mattered.',
            'Dùng để điều khiển focus trong speaking và writing.'
        ],
        avoid: [
            'Không dùng cleft nếu câu thường đã rõ và gọn hơn.',
            'Không nhầm it-cleft với dummy it.',
            'Không để agreement sai sau cleft complement.'
        ],
        compare: ['John called Mary = trung tính; It was John who called Mary = nhấn John.']
    },
    'subjunctive': {
        category: 'structures', cefr: 'C1', title: 'Subjunctive',
        uses: [
            'That + subject + bare verb sau demand, insist, suggest, recommend.',
            'Sau adjectives: essential, vital, important, necessary.',
            'Fixed formulas: God save the King, so be it, come what may.',
            'Were-subjunctive trong unreal condition: If I were you.',
            'Formal/legal/AmE style dùng subjunctive nhiều hơn.',
            'BrE có thể dùng should + V.'
        ],
        avoid: [
            'Không thêm -s trong mandative subjunctive: he go.',
            'Không dùng indicative nếu style/formality yêu cầu subjunctive.',
            'Không lạm dụng archaic formulas trong văn thường.'
        ],
        compare: ['They insisted that he leave (subjunctive); They insisted that he left (khẳng định việc đã xảy ra).']
    },
    'modal-perfect': {
        category: 'structures', cefr: 'C1', title: 'Modal Perfect',
        uses: [
            'Must have + V3 cho suy đoán mạnh về quá khứ.',
            'Might/may/could have + V3 cho khả năng quá khứ.',
            'Can’t/couldn’t have + V3 cho phủ định suy đoán mạnh.',
            'Should/ought to have + V3 cho tiếc nuối/lời trách.',
            'Needn’t have + V3 cho việc đã làm nhưng không cần.',
            'Would have + V3 trong conditionals.'
        ],
        avoid: [
            'Không dùng mustn’t have cho suy đoán phủ định; dùng can’t have.',
            'Không dùng should have cho nghĩa đã làm chắc chắn.',
            'Không quên have + V3 sau modal.'
        ],
        compare: ['You didn’t need to go = có thể đã không đi; You needn’t have gone = đã đi nhưng không cần.']
    },
    'direct-indirect-objects': {
        category: 'structures', cefr: 'B1', title: 'Direct & Indirect Objects',
        uses: [
            'Direct object nhận hành động: She wrote a letter.',
            'Indirect object nhận lợi ích/đích đến: She gave me a letter.',
            'Ditransitive pattern: V + IO + DO.',
            'Prepositional alternative: V + DO + to/for + object.',
            'Dùng to khi chuyển giao: give/send/show.',
            'Dùng for khi làm vì lợi ích ai: buy/make/cook.'
        ],
        avoid: [
            'Không dùng two-object pattern với mọi verb.',
            'Không nhầm explain me the problem; dùng explain the problem to me.',
            'Không bỏ direct object nếu verb cần nó.'
        ],
        compare: ['She bought me a gift = She bought a gift for me.']
    },
    'fronting': {
        category: 'structures', cefr: 'C1', title: 'Fronting',
        uses: [
            'Đưa object/complement/adverbial lên đầu để nhấn mạnh.',
            'Tạo mạch văn bằng cách đặt old information trước.',
            'Locative fronting trong mô tả: On the wall hung a portrait.',
            'Contrastive fronting: This part I understand; that part I don’t.',
            'Văn kể/chính luận dùng để tạo nhịp.'
        ],
        avoid: [
            'Không front mọi thứ khiến câu kịch tính giả.',
            'Không đảo sai khi object fronting không cần inversion.',
            'Không dùng nếu câu thường rõ hơn.'
        ],
        compare: ['I understand this part = trung tính; This part, I understand = nhấn/đối lập.']
    },
    'clause-system': {
        category: 'structures', cefr: 'C2', title: 'Clause System',
        uses: [
            'Matrix clause là khung chính của câu.',
            'Finite subordinate clauses thêm content, relative, adverbial relations.',
            'Non-finite clauses nén thông tin.',
            'Verbless clauses dùng trong instruction/condensed style.',
            'Clause chaining xây lập luận dài.',
            'Hiểu clause system để parse legal/academic sentences.'
        ],
        avoid: [
            'Không để subordinate clause không có main clause trong formal writing.',
            'Không xâu quá nhiều clauses nếu reference mơ hồ.',
            'Không rút gọn clause khi mất chủ thể logic.'
        ],
        compare: ['Because he was ready = finite clause; When ready = verbless clause.']
    },
    'spoken-grammar': {
        category: 'patterns', cefr: 'C2', title: 'Spoken Grammar',
        uses: [
            'Ellipsis khi thông tin đã rõ: Want some?',
            'Headers/tails để quản lý topic: That guy, he never sleeps.',
            'Discourse markers để giữ lượt nói: well, you know, I mean.',
            'Vague language: kind of, sort of, and stuff.',
            'Repairs/restarts khi tự sửa lời nói.',
            'Tags và short responses để duy trì tương tác.'
        ],
        avoid: [
            'Không bê nguyên spoken grammar vào essay.',
            'Không xem spoken grammar là sai; nó chỉ thuộc register khác.',
            'Không lạm dụng fillers trong speaking formal.'
        ],
        compare: ['Formal writing cần complete clauses; conversation thường chấp nhận ellipsis.']
    },
    'modifier-errors': {
        category: 'mistakes', cefr: 'B2', title: 'Modifier Errors',
        uses: [
            'Đặt modifier gần từ/cụm nó bổ nghĩa.',
            'Dùng participle modifiers khi subject logic rõ.',
            'Dùng only/almost/just ngay trước phần được giới hạn.',
            'Dùng commas cho nonessential modifiers.',
            'Rà dangling/misplaced modifiers trong proofreading.'
        ],
        avoid: [
            'Không để opening participle gắn nhầm subject.',
            'Không đặt only quá xa focus.',
            'Không để relative clause bổ nghĩa sai noun gần nhất.'
        ],
        compare: ['Only she said he lied khác She only said he lied.']
    },
    'fragments-runons': {
        category: 'mistakes', cefr: 'B1', title: 'Fragments & Run-ons',
        uses: [
            'Nhận diện fragment thiếu main clause.',
            'Nhận diện run-on khi hai independent clauses dính nhau.',
            'Sửa bằng period, semicolon, FANBOYS, hoặc subordination.',
            'Dùng fragment có chủ ý trong advertising/fiction, không phải academic writing.',
            'Dùng punctuation để thể hiện quan hệ logic rõ.'
        ],
        avoid: [
            'Không nối hai câu độc lập chỉ bằng comma.',
            'Không để because/although clause đứng một mình trong formal writing.',
            'Không kéo câu dài mà không xác định main verb.'
        ],
        compare: ['Although he was tired. = fragment; Although he was tired, he worked. = complete.']
    },
    'apostrophe-rules': {
        category: 'mistakes', cefr: 'A2', title: 'Apostrophes',
        uses: [
            'Possession singular: the student’s book.',
            'Possession plural ending in s: the students’ books.',
            'Irregular plural possession: children’s toys.',
            'Contractions: don’t, it’s, she’s.',
            'Shared vs separate possession: John and Mary’s house vs John’s and Mary’s houses.'
        ],
        avoid: [
            'Không dùng apostrophe cho plural thường.',
            'Không nhầm its với it’s.',
            'Không viết your’s/her’s/their’s.'
        ],
        compare: ['The dog’s tail = một con chó; the dogs’ tails = nhiều con chó.']
    },
    'numbers-dates': {
        category: 'mistakes', cefr: 'A2', title: 'Numbers & Dates',
        uses: [
            'Cardinal cho số lượng, ordinal cho thứ tự/ngày.',
            'BrE dates: 5 May; AmE dates: May 5.',
            'Fractions: one third, two thirds.',
            'Decimals đọc bằng point.',
            'Percent không thêm s sau số.',
            'Years đọc theo nhóm: nineteen ninety-nine, twenty twenty-six.'
        ],
        avoid: [
            'Không dùng comma để đọc decimal trong English.',
            'Không thêm s vào percent sau số.',
            'Không quên hyphen trong compound adjectives: a two-hour meeting.'
        ],
        compare: ['In 2026 = năm; on 25 April 2026 = ngày cụ thể.']
    },
    'word-stress': {
        category: 'pronunciation', cefr: 'B1', title: 'Word Stress',
        uses: [
            'Nhấn đúng syllable để người nghe nhận ra từ.',
            'Nhận biết noun/verb stress shift: PREsent vs preSENT.',
            'Dùng suffix patterns để đoán stress.',
            'Compound nouns thường stress trước.',
            'Stress giúp nghe nhanh trong connected speech.'
        ],
        avoid: [
            'Không stress đều mọi syllables.',
            'Không áp dụng một quy tắc stress cho mọi suffix.',
            'Không bỏ qua stress khi học word family.'
        ],
        compare: ['REcord là noun; reCORD là verb.']
    },
    'sentence-stress': {
        category: 'pronunciation', cefr: 'B2', title: 'Sentence Stress',
        uses: [
            'Stress content words: nouns, main verbs, adjectives, adverbs.',
            'Reduce function words: articles, prepositions, auxiliaries.',
            'Contrastive stress để sửa/đối lập thông tin.',
            'Focus stress đặt vào thông tin mới.',
            'Giữ nhịp stress-timed của tiếng Anh.'
        ],
        avoid: [
            'Không đọc mọi từ mạnh như nhau.',
            'Không stress function words trừ khi cần đối lập.',
            'Không bỏ qua weak forms khi luyện listening.'
        ],
        compare: ['I wanted the RED one, not the BLUE one.']
    },
    'intonation-patterns': {
        category: 'pronunciation', cefr: 'B2', title: 'Intonation',
        uses: [
            'Falling tone cho statement/wh-question hoàn tất.',
            'Rising tone cho yes/no question hoặc uncertainty.',
            'Fall-rise cho reservation, contrast, politeness.',
            'List intonation: lên ở các mục chưa cuối, xuống ở mục cuối.',
            'Tag question intonation đổi nghĩa xác nhận/hỏi thật.'
        ],
        avoid: [
            'Không dùng rising tone ở mọi câu hỏi.',
            'Không bỏ intonation khi nói câu lịch sự.',
            'Không dùng flat intonation nếu muốn nghe tự nhiên.'
        ],
        compare: ['You’re coming, aren’t you↘ = kỳ vọng đồng ý; aren’t you↗ = hỏi thật.']
    }
});

Object.assign(grammarUsageDeepDiveData, {
    'will-vs-going-to': {
        category: 'tenses', cefr: 'A2', title: 'Will vs Going To',
        uses: [
            'Will cho quyết định ngay lúc nói, lời hứa, đề nghị, dự đoán chủ quan.',
            'Going to cho dự định đã có trước.',
            'Going to cho dự đoán dựa trên dấu hiệu hiện tại.',
            'Will thường đi với I think, probably, maybe khi dự đoán.',
            'Going to thường dùng khi người nói đã thấy bằng chứng: Look at those clouds.'
        ],
        avoid: ['Không dùng will cho mọi câu tương lai.', 'Không dùng going to cho lời hứa/quyết định tức thời nếu will tự nhiên hơn.'],
        compare: ['I’ll help you = quyết định ngay; I’m going to help him = đã có dự định.']
    },
    'stative-verbs': {
        category: 'tenses', cefr: 'B1', title: 'Stative vs Dynamic Verbs',
        uses: [
            'Dùng simple tenses cho trạng thái nhận thức, cảm xúc, sở hữu: know, love, own.',
            'Dùng continuous khi verb đổi sang nghĩa hành động: I’m thinking, I’m seeing the doctor.',
            'Dùng be + V-ing để nhấn hành vi tạm thời: You’re being rude.',
            'Dùng stative awareness để chọn present simple/present perfect thay vì continuous.',
            'Nhận diện quảng cáo/khẩu ngữ cố ý dùng continuous cho cảm xúc: I’m loving it.'
        ],
        avoid: ['Không viết I am knowing.', 'Không cấm continuous tuyệt đối nếu verb đã đổi nghĩa.'],
        compare: ['I think you’re right = opinion; I’m thinking about it = considering.']
    },
    'semi-modals': {
        category: 'tenses', cefr: 'B2', title: 'Semi-modals',
        uses: [
            'Had better cho lời khuyên có hàm ý hậu quả.',
            'Would rather + V cho sở thích của chính subject.',
            'Would rather + S + past cho mong người khác làm khác đi.',
            'Needn’t cho không cần làm; needn’t have cho đã làm nhưng không cần.',
            'Dare/need dạng modal trong câu hỏi/phủ định trang trọng hoặc cố định.'
        ],
        avoid: ['Không viết you hadn’t better.', 'Không dùng to sau had better/would rather.'],
        compare: ['Should nhẹ hơn had better; had better nghe như cảnh báo.']
    },
    'narrative-present': {
        category: 'tenses', cefr: 'C1', title: 'Narrative Present',
        uses: [
            'Kể chuyện quá khứ cho sống động.',
            'Tóm tắt phim, sách, kịch bằng present simple.',
            'Headline/tường thuật báo chí để tạo cảm giác mới.',
            'Bình luận thể thao/trực tiếp.',
            'Kể chuyện hài hoặc anecdotes trong speaking.'
        ],
        avoid: ['Không chuyển lung tung giữa past và present nếu không có chủ ý.', 'Không dùng trong academic history writing thông thường.'],
        compare: ['Past narrative kể sự kiện đã qua; narrative present kéo người nghe vào cảnh.']
    },
    'have-got': {
        category: 'tenses', cefr: 'A1', title: 'Have / Have Got',
        uses: [
            'Have got cho possession trong BrE/informal speech.',
            'Have cho possession, experience, action, obligation tùy pattern.',
            'Have to cho nghĩa vụ bên ngoài.',
            'Have got to cho nghĩa vụ informal.',
            'Have không phải lúc nào cũng là stative: have lunch, have a meeting.'
        ],
        avoid: ['Không dùng got trong mọi nghĩa của have.', 'Không viết Do you have got...?'],
        compare: ['I have a car = AmE/neutral; I’ve got a car = BrE/informal.']
    },
    'used-to': {
        category: 'tenses', cefr: 'B1', title: 'Used To / Be Used To',
        uses: [
            'Used to + V cho thói quen/trạng thái quá khứ không còn đúng.',
            'Be used to + noun/V-ing cho đã quen với.',
            'Get used to + noun/V-ing cho quá trình trở nên quen.',
            'Would + V có thể nói thói quen quá khứ, nhưng không dùng cho trạng thái.',
            'Dùng trong contrast giữa past life và present life.'
        ],
        avoid: ['Không viết be used to do khi nghĩa là quen.', 'Không dùng used to cho thói quen hiện tại.'],
        compare: ['I used to wake early = từng; I am used to waking early = đã quen.']
    },
    'time-prepositions-deep': {
        category: 'tenses', cefr: 'B2', title: 'Time Prepositions',
        uses: [
            'For + khoảng thời gian, since + mốc bắt đầu.',
            'By + deadline, until + kéo dài đến mốc.',
            'During + noun, while + clause.',
            'In + khoảng thời gian để nói sau bao lâu: in two hours.',
            'On time = đúng giờ; in time = kịp lúc.'
        ],
        avoid: ['Không dùng during + clause.', 'Không nhầm by và until.'],
        compare: ['Finish by Friday = xong trước/thứ Sáu; work until Friday = làm đến thứ Sáu.']
    },
    'adverbial-time-clauses': {
        category: 'patterns', cefr: 'B1', title: 'Time Clauses',
        uses: [
            'Dùng when/before/after/until/as soon as để đặt mốc thời gian.',
            'Nói tương lai bằng present tense trong time clause.',
            'Since + simple past đi với present perfect ở main clause.',
            'By the time thường kéo perfect tenses.',
            'While/as nhấn hai việc cùng diễn ra hoặc nền bối cảnh.'
        ],
        avoid: ['Không dùng will trong time clause tương lai chuẩn.', 'Không nhầm while với during.'],
        compare: ['I’ll call when I arrive, không phải when I will arrive.']
    },
    'result-structures': {
        category: 'patterns', cefr: 'B1', title: 'Result Structures',
        uses: [
            'So + adj/adv + that cho kết quả từ mức độ.',
            'Such + noun phrase + that cho kết quả từ một sự vật/sự việc.',
            'Too + adj/adv + to V cho quá... không thể.',
            'Adj/adv + enough + to V cho đủ... để.',
            'Enough + noun khi enough bổ nghĩa danh từ.'
        ],
        avoid: ['Không đặt enough trước adjective.', 'Không dùng so trước noun phrase thường nếu cần such.'],
        compare: ['So difficult that...; such a difficult test that...']
    },
    'relative-pronouns-adverbs': {
        category: 'patterns', cefr: 'A2', title: 'Relative Pronouns & Adverbs',
        uses: [
            'Chọn đúng từ quan hệ cơ bản: who, whom, whose, which, that, where, when, why.',
            'Who/whom dùng cho người; whose dùng cho sở hữu.',
            'Which/that dùng cho vật; where/when/why dùng cho nơi chốn, thời gian, lý do.',
            'Mức này chỉ nhận diện từ đúng trong câu ngắn hoặc câu mẫu đơn giản.',
            'Ở văn trang trọng, có thể gặp preposition + which/whom.'
        ],
        avoid: [
            'Không nhầm mục này với Relative Clauses, nơi bạn phải ghép hai câu thành một câu hoàn chỉnh.',
            'Không dùng that sau dấu phẩy trong mệnh đề không xác định.',
            'Không chọn where/when/why chỉ vì câu có chỗ trống.'
        ],
        compare: [
            'Relative Pronouns & Adverbs = chọn từ đúng.',
            'Relative Clauses = dùng từ đó để ghép câu và bổ nghĩa cho danh từ.'
        ]
    },
    'yes-no-questions': {
        category: 'patterns', cefr: 'A1', title: 'Yes/No Questions',
        uses: [
            'Hỏi xác nhận bằng auxiliary/be/modal + subject.',
            'Dùng do-support khi không có auxiliary.',
            'Dùng negative yes/no questions để thể hiện kỳ vọng/ngạc nhiên.',
            'Dùng short answers với đúng auxiliary.',
            'Dùng rising intonation trong speaking.'
        ],
        avoid: ['Không dùng do với be/modal.', 'Không chia main verb sau do/does/did.'],
        compare: ['Are you ready? Do you agree? Can you come?']
    },
    'wh-questions': {
        category: 'patterns', cefr: 'A1', title: 'Wh-Questions',
        uses: [
            'What/which hỏi vật/lựa chọn.',
            'Who/whom hỏi người.',
            'Whose hỏi sở hữu.',
            'Where/when/why/how hỏi bối cảnh.',
            'How + adj/adv hỏi mức độ.',
            'Subject wh-question không cần do-support.'
        ],
        avoid: ['Không dùng did nếu wh-word là subject.', 'Không để preposition thiếu nếu verb cần.'],
        compare: ['Who did you meet? vs Who met you?']
    },
    'negation-patterns': {
        category: 'patterns', cefr: 'B2', title: 'Negation Patterns',
        uses: [
            'Not phủ định verb phrase sau auxiliary.',
            'No + noun phủ định mạnh.',
            'None/nobody/nothing làm pronoun phủ định.',
            'Hardly/barely/scarcely mang nghĩa gần như không.',
            'Transferred negation với think/believe/suppose.',
            'Negative adverbials đầu câu tạo inversion.'
        ],
        avoid: ['Không dùng double negative trong standard English.', 'Không quên polarity trong tag questions.'],
        compare: ['I don’t think he’ll come tự nhiên hơn I think he won’t come trong nhiều ngữ cảnh.']
    },
    'information-flow': {
        category: 'patterns', cefr: 'C1', title: 'Information Flow',
        uses: [
            'Đặt known information trước, new information sau.',
            'Dùng end-weight để đưa cụm dài ra cuối.',
            'Dùng dummy it/there để mở câu nhẹ hơn.',
            'Dùng passive/fronting/cleft để điều khiển focus.',
            'Dùng trong academic writing để câu dài vẫn dễ đọc.'
        ],
        avoid: ['Không đặt subject quá dài ở đầu nếu làm câu nặng.', 'Không front thông tin mới khi người đọc chưa có anchor.'],
        compare: ['It is important to check the data nhẹ hơn To check the data is important.']
    },
    'substitution-ellipsis': {
        category: 'patterns', cefr: 'C1', title: 'Substitution & Ellipsis',
        uses: [
            'Dùng do/so/one/ones để tránh lặp.',
            'Ellipsis trong câu trả lời ngắn: Want some?',
            'Gapping trong cấu trúc song song.',
            'So/neither inversion cho agreement: So do I, Neither did she.',
            'Dùng trong speaking và writing để câu gọn hơn.'
        ],
        avoid: ['Không bỏ phần khiến câu mơ hồ.', 'Không dùng ellipsis informal trong essay trang trọng.'],
        compare: ['I like coffee and she does too = does thay likes coffee.']
    },
    'comparative-correlatives': {
        category: 'patterns', cefr: 'B2', title: 'The More... The More...',
        uses: [
            'Diễn tả hai mức độ tăng/giảm song hành.',
            'Dùng comparative ở cả hai vế.',
            'Dùng với adjective, adverb, noun phrase hoặc clause.',
            'Hợp với lập luận nguyên nhân-hệ quả.',
            'Có thể dùng the less..., the more... để đảo chiều.'
        ],
        avoid: ['Không bỏ the ở hai vế.', 'Không dùng base adjective thay comparative.'],
        compare: ['The more you practice, the better you become.']
    },
    'exclamatory-sentences': {
        category: 'patterns', cefr: 'B1', title: 'Exclamatory Sentences',
        uses: [
            'What + noun phrase để cảm thán: What a day!',
            'How + adjective/adverb để cảm thán: How beautiful!',
            'Dùng trong speech, narrative, informal writing.',
            'Dùng intonation mạnh để thể hiện cảm xúc.',
            'Có thể dùng so/such trong cảm thán informal.'
        ],
        avoid: ['Không lạm dụng dấu chấm than trong formal writing.', 'Không nhầm What beautiful với How beautiful nếu không có noun.'],
        compare: ['What a beautiful day!; How beautiful the day is!']
    },
    'do-emphasis': {
        category: 'structures', cefr: 'B2', title: 'Emphatic Do',
        uses: [
            'Nhấn mạnh câu khẳng định: I do agree.',
            'Phản bác phủ định/nghi ngờ: She does know.',
            'Làm imperative thân thiện/trang trọng hơn: Do come in.',
            'Đối lập hai ý: He doesn’t sing, but he does dance.',
            'Dùng trong speech với stress trên do/does/did.'
        ],
        avoid: ['Không dùng do-emphasis nếu không có lý do nhấn mạnh.', 'Không quên main verb bare sau do.'],
        compare: ['I agree = trung tính; I do agree = nhấn mạnh/đối lập.']
    },
    'causative-have-get': {
        category: 'structures', cefr: 'B2', title: 'Have/Get Something Done',
        uses: [
            'Have/get + object + V3 khi thuê/nhờ dịch vụ.',
            'Diễn tả chuyện không may xảy đến: had my wallet stolen.',
            'Get thường informal hơn have.',
            'Dùng cho sửa chữa, cắt tóc, kiểm tra, thiết kế.',
            'Dùng khi kết quả quan trọng hơn người làm.'
        ],
        avoid: ['Không nhầm với tự làm hành động.', 'Không dùng V-ing/V bare sau object trong mẫu passive causative.'],
        compare: ['I repaired my phone = tự sửa; I had my phone repaired = nhờ/sửa dịch vụ.']
    },
    'inversion-negative': {
        category: 'structures', cefr: 'C1', title: 'Negative Inversion',
        uses: [
            'Sau never, rarely, seldom, little.',
            'Sau hardly/scarcely...when, no sooner...than.',
            'Sau not only, not until, only after/when.',
            'Trong formal writing, speeches, literary style.',
            'Dùng để nhấn mạnh giới hạn/phủ định.'
        ],
        avoid: ['Không đảo ở subordinate clause sai vị trí.', 'Không quên auxiliary.'],
        compare: ['Only after she left did I understand; đảo ở main clause.']
    },
    'complex-inversion': {
        category: 'structures', cefr: 'C2', title: 'Complex Inversion',
        uses: [
            'Locative inversion sau cụm địa điểm/hướng.',
            'Dùng khi subject là noun phrase dài.',
            'Tạo hiệu ứng mô tả cảnh trong narrative.',
            'Dùng với verbs of position/movement: stood, came, lay, hung.',
            'Dùng trong literary/journalistic prose.'
        ],
        avoid: ['Không dùng tự nhiên với pronoun subject ngắn.', 'Không lạm dụng trong conversation.'],
        compare: ['On the wall hung a painting tự nhiên hơn On the wall hung it.']
    },
    'reduced-relatives': {
        category: 'structures', cefr: 'C1', title: 'Reduced Relatives',
        uses: [
            'V-ing reduction cho active meaning: students applying late.',
            'V3 reduction cho passive meaning: documents submitted yesterday.',
            'To-infinitive reduction sau ordinal/superlative/only.',
            'Dùng để nén noun phrases.',
            'Hay gặp trong academic/professional writing.'
        ],
        avoid: ['Không rút gọn nếu tense/modality cần rõ.', 'Không tạo ambiguity về active/passive.'],
        compare: ['The man who lives next door → the man living next door.']
    },
    'reducing-adverbial-clauses': {
        category: 'structures', cefr: 'C1', title: 'Reduced Adverbial Clauses',
        uses: [
            'Rút gọn when/while/after/before clauses khi subject trùng.',
            'When in doubt, ask dùng verbless clause.',
            'V-ing cho active/simultaneous reason/time.',
            'V3 cho passive condition/time.',
            'Having V3 cho anterior action.'
        ],
        avoid: ['Không rút gọn khi subjects khác nhau.', 'Không rút quá mức làm mất nghĩa thời gian/điều kiện.'],
        compare: ['After he finished → After finishing / Having finished.']
    },
    'archaisms-modern-grammar': {
        category: 'structures', cefr: 'C2', title: 'Archaisms & Literary Grammar',
        uses: [
            'Nhận diện trong literature, law, speeches, idioms.',
            'Lest + subjunctive/should trong văn trang trọng.',
            'Fixed formulas: be that as it may, come what may, so be it.',
            'Dùng để hiểu văn cổ/trang trọng hơn là bắt chước hằng ngày.',
            'Tạo giọng hùng biện hoặc literary nếu dùng đúng chỗ.'
        ],
        avoid: ['Không lạm dụng khiến văn giả cổ.', 'Không dùng trong email đời thường trừ khi cố ý.'],
        compare: ['Lest = so that...not / in case trong văn hiện đại.']
    },
    'apposition': {
        category: 'foundations', cefr: 'B2', title: 'Apposition',
        uses: [
            'Thêm noun phrase giải thích noun trước đó.',
            'Restrictive apposition không dùng comma: my brother Tom.',
            'Non-restrictive apposition dùng comma: Tom, my brother, ...',
            'Dùng trong journalism: Tim Cook, CEO of Apple, ...',
            'Dùng để nén định nghĩa trong academic writing.'
        ],
        avoid: ['Không đặt comma nếu apposition là thông tin bắt buộc.', 'Không nhầm apposition với relative clause.'],
        compare: ['The poet Robert Frost = xác định; Robert Frost, the poet, = thêm thông tin.']
    },
    'gender-neutral-grammar': {
        category: 'foundations', cefr: 'C1', title: 'Gender-neutral Grammar',
        uses: [
            'Singular they khi giới tính không rõ/không muốn nhấn giới.',
            'Viết lại plural để tránh he/she nặng nề.',
            'Dùng job titles trung tính: chair, police officer.',
            'Theo pronouns người khác tự dùng.',
            'Dùng trong workplace, academic, policy writing hiện đại.'
        ],
        avoid: ['Không mặc định he cho generic person.', 'Không lạm dụng he/she nếu câu có thể viết tự nhiên hơn.'],
        compare: ['Each student should bring their book hiện đại và tự nhiên.']
    },
    'semantic-prosody': {
        category: 'foundations', cefr: 'C2', title: 'Semantic Prosody',
        uses: [
            'Nhận màu nghĩa do từ hay đi với ngữ cảnh tốt/xấu.',
            'Chọn verb/noun collocation đúng sắc thái.',
            'Tránh câu đúng từ điển nhưng lệch cảm giác.',
            'Dùng trong advanced writing để tone tinh hơn.',
            'Đọc báo/academic prose chính xác hơn.'
        ],
        avoid: ['Không dùng cause với kết quả tích cực nếu bring about tự nhiên hơn.', 'Không xem synonym là hoán đổi tự do.'],
        compare: ['Cause problems tự nhiên; bring about improvements tự nhiên hơn cause improvements.']
    },
    'dummy-it': {
        category: 'foundations', cefr: 'A2', title: 'Dummy It',
        uses: [
            'Nói thời tiết/thời gian/khoảng cách: It is raining.',
            'Extraposition: It is important to...',
            'Anticipatory it với that-clause/to-infinitive.',
            'Cleft sentences: It was John who...',
            'Dùng để đầu câu nhẹ hơn khi subject thật quá dài.'
        ],
        avoid: ['Không tìm antecedent cụ thể cho dummy it.', 'Không nhầm dummy it với pronoun it.'],
        compare: ['It is hard to explain nhẹ hơn To explain this is hard.']
    },
    'existential-there': {
        category: 'foundations', cefr: 'A1', title: 'There Is / There Are',
        uses: [
            'Giới thiệu sự tồn tại của thông tin mới.',
            'There is + singular/uncountable; there are + plural.',
            'Dùng với quantifiers: there are many reasons.',
            'Dùng trong descriptions, reports, problem statements.',
            'Giúp tránh subject nặng ở đầu câu.'
        ],
        avoid: ['Không dùng there have với nghĩa tồn tại cơ bản.', 'Không chia verb theo there; chia theo noun thật.'],
        compare: ['A problem exists formal hơn; There is a problem tự nhiên hơn.']
    },
    'reflexive-reciprocal': {
        category: 'foundations', cefr: 'B1', title: 'Reflexive & Reciprocal Pronouns',
        uses: [
            'Reflexive khi subject và object cùng entity: She hurt herself.',
            'Reflexive để nhấn mạnh: I did it myself.',
            'By myself = alone/without help.',
            'Each other/one another cho quan hệ qua lại.',
            'Dùng sau một số fixed expressions: enjoy yourself, help yourself.'
        ],
        avoid: ['Không dùng myself thay I/me để nghe formal.', 'Không dùng reflexive khi object khác subject.'],
        compare: ['They looked at themselves = mỗi người nhìn chính mình; each other = nhìn nhau.']
    },
    'compound-nouns-possessives': {
        category: 'foundations', cefr: 'B1', title: 'Compound Nouns & Possessives',
        uses: [
            'Compound nouns nén classifier trước head noun: coffee cup.',
            'Plural thường rơi vào head noun: toothbrushes.',
            'Hyphenated compounds có plural đặc biệt: mothers-in-law.',
            'Possessive -s cho người/nhóm/tổ chức/thời gian.',
            'Of-phrase thường dùng cho vật/khái niệm dài.'
        ],
        avoid: ['Không plural hóa classifier thường: cars park sai.', 'Không nhầm plural s với possessive s.'],
        compare: ['A car park = bãi đỗ xe; a cars park sai.']
    },
    'distributives': {
        category: 'foundations', cefr: 'B1', title: 'Distributives',
        uses: [
            'Each nhấn từng cá thể riêng.',
            'Every nhìn toàn bộ nhóm theo từng thành viên.',
            'Either cho một trong hai; neither cho không cái nào trong hai.',
            'Both cho cả hai; all cho toàn bộ từ ba trở lên.',
            'Each/every đi với singular noun và singular verb.'
        ],
        avoid: ['Không dùng every of.', 'Không dùng neither với more than two nếu cần none.'],
        compare: ['Each student = từng em; every student = tất cả các em trong nhóm.']
    },
    'indefinite-pronouns': {
        category: 'foundations', cefr: 'B1', title: 'Indefinite Pronouns',
        uses: [
            'Someone/anyone/no one/everyone cho người không xác định.',
            'Something/anything/nothing/everything cho vật/ý.',
            'Some- trong câu khẳng định/offer; any- trong question/negative.',
            'No- mang nghĩa phủ định mạnh.',
            'Thường đi với singular verb, nhưng singular they cho pronoun reference.'
        ],
        avoid: ['Không dùng double negative với no one/nothing.', 'Không dùng plural verb sau everyone trong chuẩn cơ bản.'],
        compare: ['I don’t know anything = standard; I know nothing = nhấn mạnh.']
    },
    'phrasal-prepositions': {
        category: 'foundations', cefr: 'B1', title: 'Phrasal Prepositions',
        uses: [
            'Because of/due to/owing to cho nguyên nhân + noun/V-ing.',
            'In spite of/despite cho nhượng bộ + noun/V-ing.',
            'According to cho nguồn thông tin.',
            'In addition to/besides cho thêm ý.',
            'As a result of cho kết quả từ nguyên nhân.'
        ],
        avoid: ['Không dùng because of + clause.', 'Không dùng despite of.'],
        compare: ['Although it rained; despite the rain.']
    },
    'prepositional-phrases': {
        category: 'foundations', cefr: 'B1', title: 'Prepositional Phrases',
        uses: [
            'Làm modifier cho noun: the book on the table.',
            'Làm adverbial cho place/time/manner.',
            'Làm complement sau verb/adjective/noun.',
            'Dùng phrase stacks trong academic writing.',
            'Dùng để tạo end-weight hoặc postmodifier.'
        ],
        avoid: ['Không xếp quá nhiều PP gây mơ hồ.', 'Không quên preposition cố định sau verb/adjective.'],
        compare: ['Interested in music = complement; read in the room = adverbial.']
    },
    'adjective-order': {
        category: 'foundations', cefr: 'B2', title: 'Adjective Order',
        uses: [
            'Opinion-size-age-shape-color-origin-material-purpose trước noun.',
            'Dùng khi có nhiều adjectives cùng bổ nghĩa một noun.',
            'Native-like order giúp noun phrase tự nhiên hơn.',
            'Purpose/classifier thường sát noun nhất: running shoes.',
            'Comma giữa coordinate adjectives khi đổi thứ tự được.'
        ],
        avoid: ['Không nhồi quá nhiều adjectives.', 'Không đặt classifier xa head noun.'],
        compare: ['A beautiful old Italian car tự nhiên hơn an Italian old beautiful car.']
    },
    'spelling-rules': {
        category: 'mistakes', cefr: 'A2', title: 'Spelling Rules',
        uses: [
            'Thêm -s/-es cho plural và third person.',
            'Y → ies sau consonant + y.',
            'Drop final -e trước -ing.',
            'Double final consonant trong CVC stressed cases.',
            'IE → Y trước -ing: lie → lying.',
            'Dùng spelling rules để viết tense/forms đúng.'
        ],
        avoid: ['Không nhân đôi w/x/y thường.', 'Không bỏ e trong see → seeing.'],
        compare: ['Plan → planned nhưng open → opened vì stress khác.']
    },
    'punctuation-capitalization': {
        category: 'mistakes', cefr: 'A2', title: 'Punctuation & Capitalization',
        uses: [
            'Capital letters cho đầu câu, I, proper nouns.',
            'Comma cho lists, introductory clauses, nonessential information.',
            'Period cho câu hoàn chỉnh.',
            'Question mark cho direct questions.',
            'Capitalization cho days, months, languages, nationalities.'
        ],
        avoid: ['Không viết hoa seasons/môn học chung nếu không phải language/proper noun.', 'Không dùng comma thay period giữa hai câu độc lập.'],
        compare: ['english sai khi là ngôn ngữ; English đúng.']
    },
    'capitalization-rules': {
        category: 'mistakes', cefr: 'A2', title: 'Capitalization',
        uses: [
            'Viết hoa proper nouns, I, days/months/holidays.',
            'Viết hoa languages, nationalities, religions.',
            'Title Case cho tiêu đề theo style guide.',
            'Viết hoa chức danh khi đi với tên riêng.',
            'Viết hoa regions khi là tên vùng văn hóa/chính trị.'
        ],
        avoid: ['Không viết hoa president khi dùng chung.', 'Không viết hoa seasons trừ tên riêng/nhân hóa.'],
        compare: ['the president; President Lincoln.']
    },
    'pronoun-reference': {
        category: 'mistakes', cefr: 'B2', title: 'Pronoun Reference',
        uses: [
            'Dùng pronoun khi antecedent rõ.',
            'Lặp noun nếu có hai antecedents cùng khả năng.',
            'Dùng this/that + noun để tránh demonstrative mơ hồ.',
            'Kiểm tra agreement về số/người.',
            'Dùng singular they phù hợp ngữ cảnh hiện đại.'
        ],
        avoid: ['Không để it/they/she không rõ chỉ ai/cái gì.', 'Không đổi số giữa antecedent và pronoun vô lý.'],
        compare: ['This problem, not just this, rõ hơn trong formal writing.']
    },
    'ipa-overview': {
        category: 'pronunciation', cefr: 'A1', title: 'IPA Overview',
        uses: [
            'Dùng IPA để biết âm thật khi spelling đánh lừa.',
            'Phân biệt vowel/consonant symbols.',
            'Học minimal pairs: ship/sheep, bet/bat.',
            'Tra pronunciation của từ mới.',
            'Kết hợp IPA với stress và connected speech.'
        ],
        avoid: ['Không đọc tiếng Anh theo chữ cái tiếng Việt.', 'Không học IPA tách rời ví dụ âm thanh.'],
        compare: ['ea có thể là /iː/ trong sea, /e/ trong head, /eɪ/ trong break.']
    },
    'ipa-vowels': {
        category: 'pronunciation', cefr: 'A2', title: 'IPA Vowels',
        uses: [
            'Phân biệt long/short vowels: /iː/ vs /ɪ/.',
            'Phân biệt monophthongs và diphthongs.',
            'Nhận schwa /ə/ trong weak syllables.',
            'Luyện minimal pairs để tránh đổi nghĩa.',
            'Hiểu khác biệt BrE/AmE ở một số vowels.'
        ],
        avoid: ['Không kéo dài mọi vowel như nhau.', 'Không bỏ schwa trong unstressed syllables.'],
        compare: ['ship /ʃɪp/ khác sheep /ʃiːp/.']
    },
    'ipa-consonants': {
        category: 'pronunciation', cefr: 'A2', title: 'IPA Consonants',
        uses: [
            'Phân biệt voiced/voiceless pairs: /p-b/, /t-d/, /s-z/.',
            'Luyện /θ/ và /ð/ cho think/this.',
            'Nhận final consonants để chia -s/-ed đúng.',
            'Luyện clusters: spring, texts.',
            'Dùng IPA để phát âm từ khó/chưa quen.'
        ],
        avoid: ['Không bỏ final consonants.', 'Không thay /θ/ bằng /t/ nếu muốn rõ nghĩa.'],
        compare: ['think /θɪŋk/ khác sink /sɪŋk/.']
    },
    'stress-schwa': {
        category: 'pronunciation', cefr: 'B1', title: 'Stress & Schwa',
        uses: [
            'Schwa xuất hiện trong unstressed syllables.',
            'Function words thường có weak forms.',
            'Word stress quyết định vowel reduction.',
            'Sentence stress giúp nghe/nói tự nhiên.',
            'Schwa giúp nói nhanh mà không đọc từng chữ cứng.'
        ],
        avoid: ['Không phát âm mọi vowel đầy đủ như spelling.', 'Không stress function words trừ khi contrast.'],
        compare: ['to /tuː/ khi nhấn, /tə/ trong weak form.']
    },
    'connected-speech': {
        category: 'pronunciation', cefr: 'C1', title: 'Connected Speech',
        uses: [
            'Linking nối phụ âm-nguyên âm giữa các từ.',
            'Assimilation làm âm gần nhau biến đổi.',
            'Elision bỏ âm trong cụm nhanh.',
            'Weak forms cho auxiliaries/prepositions/articles.',
            'Chunking giúp nghe theo cụm ý.'
        ],
        avoid: ['Không kỳ vọng người bản ngữ phát âm từng từ như từ điển.', 'Không luyện listening chỉ bằng isolated words.'],
        compare: ['want to thường thành wanna trong informal speech, nhưng không viết trong formal text.']
    }
});

Object.assign(grammarUsageDeepDiveData, {
    'quantifiers-deep': {
        category: 'foundations', cefr: 'A2', title: 'Quantifiers Deep Dive',
        uses: [
            'Chọn quantifier theo countable/uncountable noun.',
            'Phân biệt few/a few và little/a little theo sắc thái đủ hay không đủ.',
            'Dùng some/any/no trong câu khẳng định, phủ định, hỏi, offer/request.',
            'Dùng each/every/all/both/either/neither để phân phối trong nhóm.',
            'Dùng most/most of, all/all of theo mức độ cụ thể của noun phrase.',
            'Kiểm tra agreement sau quantifier phrases.'
        ],
        avoid: [
            'Không dùng many với uncountable nouns.',
            'Không dùng much trong câu khẳng định đời thường khi a lot of tự nhiên hơn.',
            'Không nhầm a number of với the number of.'
        ],
        compare: [
            'A few people = có vài người; few people = ít đến mức gần như không đủ.',
            'Most students = học sinh nói chung; most of the students = nhóm học sinh cụ thể.'
        ]
    },
    'fragments-run-ons': {
        category: 'mistakes', cefr: 'B1', title: 'Fragments & Run-ons',
        uses: [
            'Nhận diện sentence fragment khi thiếu subject, finite verb hoặc main clause.',
            'Nhận diện run-on khi hai independent clauses dính nhau không dấu/từ nối.',
            'Nhận diện comma splice khi chỉ dùng dấu phẩy nối hai câu độc lập.',
            'Sửa bằng period, semicolon, FANBOYS + comma hoặc subordinating conjunction.',
            'Dùng fragment có chủ ý trong slogan/fiction, nhưng tránh trong formal writing.'
        ],
        avoid: [
            'Không để because/although/when clause đứng một mình trong bài viết chuẩn.',
            'Không nối hai independent clauses bằng mỗi dấu phẩy.',
            'Không kéo câu dài chỉ bằng and/and/and nếu logic không rõ.'
        ],
        compare: [
            'I was tired, I slept = comma splice.',
            'I was tired, so I slept / I was tired. I slept = đúng.'
        ]
    }
});

function renderGrammarUsageDeepDive(entry) {
    const list = (items = []) => items.map(item => `<li>${item}</li>`).join('');
    return `
        <section class="usage-deep-dive">
            <h3>🧭 Khi nào dùng</h3>
            <ul>${list(entry.uses)}</ul>
            ${entry.avoid && entry.avoid.length ? `<h4>Tránh dùng sai</h4><ul>${list(entry.avoid)}</ul>` : ''}
            ${entry.compare && entry.compare.length ? `<h4>So sánh nhanh</h4><ul>${list(entry.compare)}</ul>` : ''}
        </section>
    `;
}

(function patchGrammarUsageDeepDives() {
    const targets = [];
    if (typeof grammarFoundationsData !== 'undefined') targets.push(grammarFoundationsData);
    if (typeof grammarTensesData !== 'undefined') targets.push(grammarTensesData);
    if (typeof grammarPronunciationData !== 'undefined') targets.push(grammarPronunciationData);
    if (typeof grammarPatternsData !== 'undefined') targets.push(grammarPatternsData);
    if (typeof grammarStructuresData !== 'undefined') targets.push(grammarStructuresData);
    if (typeof grammarMistakesData !== 'undefined') targets.push(grammarMistakesData);
    if (typeof grammarSupplementsData !== 'undefined') targets.push(grammarSupplementsData);
    if (typeof grammarExtrasData !== 'undefined') targets.push(grammarExtrasData);
    if (typeof grammarComprehensiveData !== 'undefined') targets.push(grammarComprehensiveData);

    targets.forEach(group => {
        Object.entries(grammarUsageDeepDiveData).forEach(([id, usage]) => {
            const component = group[id];
            if (!component || String(component.detail || '').includes('usage-deep-dive')) return;
            component.detail = `${component.detail || component.simple || ''}${renderGrammarUsageDeepDive(usage)}`;
        });
    });
})();
