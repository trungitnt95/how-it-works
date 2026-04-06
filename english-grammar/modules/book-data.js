export const grammarAtlasData = {
    sourceNote: "Sách gốc: “Ngữ Pháp Tiếng Anh” của Mai Lan Hương - Nguyễn Thanh Loan. Nội dung web được sắp xếp lại theo module để dễ học; số trang tham chiếu là số trang in trong sách, không phải số trang PDF scan.",
    sections: [
        {
            id: "tenses",
            icon: "⏱️",
            title: "Thì và phối hợp thì",
            pageRange: "tr. 5-24",
            summary: "12 thì cốt lõi, dấu hiệu nhận biết, và logic lùi thì trong mệnh đề phụ.",
            intro: "Đây là lõi của cả cuốn sách: hiểu giá trị từng thì trước, rồi mới gắn chúng vào mệnh đề thời gian và sequence of tenses.",
            tags: ["Simple", "Perfect", "Future", "Sequence"],
            searchText: "thi va phoi hop thi present simple present continuous perfect past future sequence of tenses trang 5 24",
            sourceMap: [
                { label: "Hiện tại đơn / tiếp diễn / hoàn thành / hoàn thành tiếp diễn", pages: "tr. 5-7" },
                { label: "Quá khứ đơn / tiếp diễn / hoàn thành", pages: "tr. 7-9" },
                { label: "Tương lai đơn, gần, tiếp diễn, hoàn thành", pages: "tr. 9-17" },
                { label: "Sequence of Tenses", pages: "tr. 18-24" }
            ],
            theoryBlocks: [
                {
                    title: "1. Hệ hiện tại",
                    points: [
                        "<strong>Present Simple</strong> dùng cho thói quen, sự thật hiển nhiên, lịch trình cố định và trạng thái bền.",
                        "<strong>Present Continuous</strong> dùng cho hành động đang diễn ra, kế hoạch đã sắp xếp, hoặc xu hướng tạm thời.",
                        "<strong>Present Perfect</strong> nối quá khứ với hiện tại: kinh nghiệm, kết quả còn hiệu lực, hoặc khoảng thời gian chưa kết thúc.",
                        "<strong>Present Perfect Continuous</strong> nhấn vào độ dài và tính liên tục của hành động."
                    ]
                },
                {
                    title: "2. Hệ quá khứ",
                    points: [
                        "<strong>Past Simple</strong> chốt một hành động đã xong trong quá khứ có mốc thời gian rõ.",
                        "<strong>Past Continuous</strong> làm nền cho một hành động khác chen vào, hoặc mô tả bối cảnh đang diễn ra.",
                        "<strong>Past Perfect</strong> dùng cho hành động xảy ra trước một mốc quá khứ khác.",
                        "Khi có hai hành động quá khứ, đừng mặc định cái nào cũng là past simple; phải xét hành động nào đến trước."
                    ]
                },
                {
                    title: "3. Hệ tương lai",
                    points: [
                        "<strong>Will + V</strong> cho quyết định tại lúc nói, dự đoán, lời hứa, đề nghị.",
                        "<strong>Be going to</strong> cho dự định đã có trước hoặc dấu hiệu hiện tại dẫn tới dự đoán.",
                        "<strong>Future Continuous</strong> nhấn vào quá trình sẽ đang diễn ra tại một thời điểm tương lai.",
                        "<strong>Future Perfect</strong> diễn tả việc sẽ hoàn tất trước một mốc tương lai."
                    ]
                },
                {
                    title: "4. Sequence of Tenses",
                    points: [
                        "Nếu mệnh đề chính ở hiện tại, mệnh đề phụ giữ thì theo nghĩa thực của nó.",
                        "Nếu mệnh đề chính ở quá khứ, mệnh đề phụ thường lùi thì: present -> past, past -> past perfect, will -> would.",
                        "Không dùng thì tương lai trong mệnh đề thời gian mở đầu bằng <em>when, while, before, after, until, as soon as</em>; dùng hiện tại để nói tương lai.",
                        "Những chân lý hiển nhiên và sự thật vẫn đúng có thể không lùi thì."
                    ]
                }
            ],
            examples: [
                { en: "The sun rises in the East.", vi: "Hiện tại đơn cho chân lý hiển nhiên.", source: "tr. 5" },
                { en: "Mary has lived in this house for ten years.", vi: "Hiện tại hoàn thành nối quá khứ với hiện tại.", source: "tr. 6-7" },
                { en: "This time tomorrow, I will be flying to Da Nang.", vi: "Tương lai tiếp diễn mô tả hành động đang diễn ra tại một mốc tương lai.", source: "tr. 9-17" },
                { en: "He said that he was busy then.", vi: "Lùi thì khi mệnh đề chính ở quá khứ.", source: "tr. 18-24" }
            ],
            pitfalls: [
                "Dùng <em>will</em> sau <em>when / until / before / as soon as</em> là lỗi rất hay gặp; trong mệnh đề thời gian phải dùng hiện tại.",
                "Nhầm <em>since</em> với <em>for</em>: <em>since</em> đi với mốc bắt đầu, <em>for</em> đi với khoảng thời gian.",
                "Nhiều người dùng present perfect với mốc thời gian đã đóng như <em>yesterday, last week</em>; khi đó phải quay về past simple.",
                "Các động từ trạng thái như <em>know, like, want, believe</em> thường không dùng ở thì tiếp diễn.",
                "Khi lùi thì, đừng quên đổi cả trạng từ chỉ thời gian như <em>now -> then</em>, <em>tomorrow -> the next day</em> khi cần."
            ],
            memorize: [
                "Present Simple: always, usually, often, every day, sometimes.",
                "Present Perfect: since, for, already, just, yet, ever, never, so far, up to now.",
                "Past Simple: yesterday, ago, last week, in 2019, then.",
                "Future markers: tomorrow, next week, soon, in two days, by + mốc tương lai.",
                "Mệnh đề thời gian tương lai: <em>When he comes, I will call you</em> chứ không phải <em>when he will come</em>."
            ],
            exercises: [
                { prompt: "Water (boil) at 100°C.", answer: "boils" },
                { prompt: "Listen! Someone (knock) at the door.", answer: "is knocking" },
                { prompt: "I (live) in Ho Chi Minh City since 2021.", answer: "have lived" },
                { prompt: "By the time we arrived, the film (start).", answer: "had started" },
                { prompt: "This time tomorrow, I (fly) to Da Nang.", answer: "will be flying" },
                { prompt: "She says she (need) more time.", answer: "needs" },
                { prompt: "He said he (need) more time.", answer: "needed" },
                { prompt: "Call me when the train (arrive).", answer: "arrives" },
                { prompt: "I think it (rain) tomorrow.", answer: "will rain" },
                { prompt: "They (study) when I came into the room.", answer: "were studying" }
            ]
        },
        {
            id: "conditionals-unreal",
            icon: "🧭",
            title: "Điều kiện và giả định",
            pageRange: "tr. 25-31, 44-45",
            summary: "Conditional sentences, wish/if only, as if/as though, it's time và would rather.",
            intro: "Phần này gom các cấu trúc không thật hoặc bán giả định. Học theo logic thời gian: hiện tại không thật, quá khứ không thật, và mong ước.",
            tags: ["If-clause", "Wish", "Would rather", "Subjunctive"],
            searchText: "dieu kien va gia dinh if clause conditionals wish if only as if as though would rather it's time subjunctive trang 25 31 44 45",
            sourceMap: [
                { label: "Conditional types I, II, III và unless", pages: "tr. 25-27" },
                { label: "Wish / If only", pages: "tr. 28-31" },
                { label: "As if / As though, It's time, Would rather", pages: "tr. 44-45" }
            ],
            theoryBlocks: [
                {
                    title: "1. Câu điều kiện",
                    points: [
                        "<strong>Type I</strong>: điều có thể xảy ra thật trong hiện tại hoặc tương lai. Mẫu: <em>If + present, will/can/may + V</em>.",
                        "<strong>Type II</strong>: điều không thật ở hiện tại. Mẫu: <em>If + past simple, would/could + V</em>.",
                        "<strong>Type III</strong>: điều không thật trong quá khứ. Mẫu: <em>If + past perfect, would/could have + V3</em>.",
                        "<strong>Unless</strong> mang nghĩa phủ định của <em>if</em>, nhưng không đi kèm thêm <em>not</em>."
                    ]
                },
                {
                    title: "2. Wish / If only",
                    points: [
                        "Wish ở hiện tại dùng <em>past simple</em>: mong điều hiện tại khác đi.",
                        "Wish ở quá khứ dùng <em>past perfect</em>: tiếc một điều đã xảy ra.",
                        "Wish ở tương lai thường dùng <em>would</em> khi muốn người khác thay đổi hành vi.",
                        "<em>If only</em> sắc thái mạnh hơn <em>wish</em> nhưng khung ngữ pháp giữ nguyên."
                    ]
                },
                {
                    title: "3. Các mệnh đề giả định khác",
                    points: [
                        "<strong>As if / As though</strong> dùng <em>past simple</em> hoặc <em>past perfect</em> để diễn tả điều trái thực tế.",
                        "<strong>It's time / It's high time</strong> theo sau bởi <em>past simple</em> dù ý nghĩa hướng về hiện tại.",
                        "<strong>Would rather</strong> + bare infinitive khi cùng chủ ngữ; <em>would rather + S + past simple</em> khi khác chủ ngữ.",
                        "Trong văn phong học thuật, <em>were</em> vẫn là lựa chọn an toàn nhất cho giả định: <em>If I were you</em>."
                    ]
                }
            ],
            examples: [
                { en: "If I were you, I would accept the offer.", vi: "Type II cho lời khuyên gián tiếp.", source: "tr. 25-27" },
                { en: "If she had studied harder, she would have passed the exam.", vi: "Type III cho điều nuối tiếc trong quá khứ.", source: "tr. 25-27" },
                { en: "I wish I knew the answer now.", vi: "Wish hiện tại dùng past simple.", source: "tr. 28-31" },
                { en: "He talks as if he were the manager.", vi: "As if cho tình huống không thật.", source: "tr. 44-45" }
            ],
            pitfalls: [
                "Sau <em>if</em> trong câu điều kiện thường không dùng <em>will</em>; hãy để tương lai ở mệnh đề chính.",
                "Nhiều người học viết <em>If I was you</em>; trong bối cảnh giả định, <em>were</em> là lựa chọn đúng và an toàn hơn.",
                "<em>Wish</em> không phải là <em>hope</em>. Nếu điều còn có khả năng xảy ra thật, thường phải dùng <em>hope</em> thay vì <em>wish</em>.",
                "<em>Unless</em> đã mang nghĩa phủ định, nên tránh kiểu <em>unless you don't...</em>.",
                "Với <em>would rather + someone else</em>, động từ sau chủ ngữ thứ hai phải lùi về past simple: <em>I'd rather you called first</em>."
            ],
            memorize: [
                "Type I: thật hoặc mở; Type II: hiện tại không thật; Type III: quá khứ không thật.",
                "Wish now -> past simple; wish about the past -> past perfect; wish about behaviour -> would.",
                "It's time we went home.",
                "As if / as though + past simple hoặc past perfect.",
                "Would rather + V / would rather + S + past simple."
            ],
            exercises: [
                { prompt: "If you heat ice, it (melt).", answer: "melts" },
                { prompt: "If it rains tomorrow, we (stay) at home.", answer: "will stay" },
                { prompt: "If I were you, I (take) the job.", answer: "would take" },
                { prompt: "If she had studied harder, she (pass) the exam.", answer: "would have passed" },
                { prompt: "I wish I (know) the answer now.", answer: "knew" },
                { prompt: "I wish I (not say) that yesterday.", answer: "had not said" },
                { prompt: "It's time we (go) home.", answer: "went" },
                { prompt: "He talks as if he (be) the boss.", answer: "were" },
                { prompt: "I'd rather you (call) me before coming.", answer: "called" },
                { prompt: "Unless you hurry, you (miss) the bus.", answer: "will miss" }
            ]
        },
        {
            id: "clause-links",
            icon: "🔗",
            title: "Mệnh đề chỉ mục đích, kết quả, lý do, nhượng bộ",
            pageRange: "tr. 30-43",
            summary: "Nhóm mệnh đề và cụm từ nối logic giữa hai ý: purpose, result, reason, concession.",
            intro: "Học nhóm này theo trục logic câu: vì sao, để làm gì, kết quả là gì, và dù có trở ngại gì thì điều chính vẫn xảy ra.",
            tags: ["Purpose", "Result", "Reason", "Concession"],
            searchText: "menh de chi muc dich ket qua ly do nhuong bo purpose result reason concession because although despite so that in order to trang 30 43",
            sourceMap: [
                { label: "Purpose: to / in order to / so that", pages: "tr. 30-33" },
                { label: "Result: too / enough / so ... that / such ... that", pages: "tr. 34-37" },
                { label: "Reason: because / because of / due to / since / as", pages: "tr. 38-39" },
                { label: "Concession: although / though / even though / despite / in spite of", pages: "tr. 40-43" }
            ],
            theoryBlocks: [
                {
                    title: "1. Chỉ mục đích",
                    points: [
                        "<strong>to / in order to / so as to + V</strong> khi cùng chủ ngữ.",
                        "<strong>so that / in order that + clause</strong> khi cần một chủ ngữ thứ hai hoặc cần nhấn vào khả năng.",
                        "<strong>for + noun</strong> dùng khi mục đích được đóng gói thành cụm danh từ.",
                        "Cần tránh lạm dụng <em>so that</em> khi chỉ cần <em>to V</em> là đủ."
                    ]
                },
                {
                    title: "2. Chỉ kết quả",
                    points: [
                        "<strong>too + adj/adv + to V</strong> mang sắc thái không thể.",
                        "<strong>adj/adv + enough + to V</strong> mang sắc thái đủ khả năng.",
                        "<strong>so + adj/adv + that</strong> và <strong>such + (a/an) + adj + noun + that</strong> dùng để nối sang kết quả.",
                        "Với danh từ số lượng, sách nhấn mạnh các mẫu <em>so many, so few, so much, so little</em>."
                    ]
                },
                {
                    title: "3. Chỉ lý do và nhượng bộ",
                    points: [
                        "<strong>because + clause</strong>; <strong>because of / due to + noun phrase</strong>.",
                        "<strong>since / as</strong> thường dùng khi lý do đã khá rõ trong ngữ cảnh.",
                        "<strong>although / though / even though + clause</strong> đi với mệnh đề đầy đủ.",
                        "<strong>despite / in spite of + noun / V-ing</strong> không đi thẳng với một clause trần."
                    ]
                }
            ],
            examples: [
                { en: "She studies hard so that she can pass the test.", vi: "Mệnh đề mục đích với chủ ngữ và trợ động từ rõ ràng.", source: "tr. 30-33" },
                { en: "It was so dark that I couldn't see anything.", vi: "Mẫu kết quả kinh điển của sách.", source: "tr. 34-37" },
                { en: "He stayed home because of the heavy rain.", vi: "Because of + noun phrase.", source: "tr. 38-39" },
                { en: "Although she was nervous, she answered well.", vi: "Nhượng bộ nhưng ý chính vẫn giữ nguyên.", source: "tr. 40-43" }
            ],
            pitfalls: [
                "Dùng <em>because of</em> rồi theo sau bằng một clause đầy đủ là sai; sau nó phải là noun phrase hoặc V-ing.",
                "Nhầm <em>too</em> và <em>enough</em>: <em>too</em> mang nghĩa vượt quá mức, <em>enough</em> là đủ.",
                "<em>Despite</em> và <em>in spite of</em> không đi thẳng với <em>she was tired</em>; phải đổi sang <em>despite being tired</em> hoặc <em>despite her tiredness</em>.",
                "<em>So</em> đứng một mình thường là liên từ; <em>so that</em> mới là cụm nối sang mệnh đề kết quả hoặc mục đích.",
                "Với <em>such</em>, đừng quên danh từ đi kèm: <em>such a nice day</em>."
            ],
            memorize: [
                "Cùng chủ ngữ -> ưu tiên <em>to / in order to / so as to</em>.",
                "Mệnh đề đầy đủ -> dùng <em>so that / because / although</em>.",
                "Noun phrase / V-ing -> dùng <em>because of / despite / in spite of</em>.",
                "Mẫu cần thuộc: <em>too ... to</em>, <em>adj enough to</em>, <em>so ... that</em>, <em>such ... that</em>."
            ],
            exercises: [
                { prompt: "She studies hard so that she (can/pass) the test.", answer: "can pass" },
                { prompt: "We left early in order (avoid) traffic.", answer: "to avoid" },
                { prompt: "The box is too heavy for me (lift).", answer: "to lift" },
                { prompt: "He was tired because he (work) all night.", answer: "had worked / worked" },
                { prompt: "Despite (be) tired, he finished the report.", answer: "being" },
                { prompt: "It was such a cold day that we (stay) indoors.", answer: "stayed" },
                { prompt: "The tea was hot enough (drink).", answer: "to drink" },
                { prompt: "Because of the heavy rain, the match (be) cancelled.", answer: "was cancelled" },
                { prompt: "_____ she was nervous, she answered well. (although / because)", answer: "Although" },
                { prompt: "He spoke softly so as not (wake) the baby.", answer: "to wake" }
            ]
        },
        {
            id: "noun-relative-clauses",
            icon: "🏗️",
            title: "Noun Clauses và Relative Clauses",
            pageRange: "tr. 46-57",
            summary: "Mệnh đề làm danh từ và mệnh đề bổ nghĩa danh từ, kèm phần rút gọn.",
            intro: "Nếu muốn viết câu dài mà không lỏng cấu trúc, đây là nhóm phải nắm thật chắc: noun clause để đóng vai trò danh từ và relative clause để bổ nghĩa.",
            tags: ["That-clause", "Wh-clause", "Relative", "Reduction"],
            searchText: "noun clauses relative clauses that clause wh clause relative reduction who which whose where when why trang 46 57",
            sourceMap: [
                { label: "Noun clauses with that / whether / if / wh-", pages: "tr. 46-47" },
                { label: "Relative pronouns and relative adverbs", pages: "tr. 48-55" },
                { label: "Reduced relative clauses", pages: "tr. 56-57" }
            ],
            theoryBlocks: [
                {
                    title: "1. Noun clauses",
                    points: [
                        "Noun clause có thể làm chủ ngữ, tân ngữ, bổ ngữ hoặc đứng sau giới từ.",
                        "<strong>that-clause</strong> dùng cho nội dung được khẳng định; <strong>whether / if</strong> cho lựa chọn hoặc nghi vấn yes/no.",
                        "<strong>wh- clauses</strong> như <em>what, where, why, how</em> giữ vai trò thông tin chưa biết.",
                        "Trong noun clause, trật tự từ trở về trật tự khẳng định, không dùng đảo như câu hỏi."
                    ]
                },
                {
                    title: "2. Relative clauses",
                    points: [
                        "<strong>who / whom</strong> cho người; <strong>which</strong> cho vật; <strong>that</strong> linh hoạt trong defining clause.",
                        "<strong>whose</strong> chỉ sở hữu; <strong>where / when / why</strong> là relative adverbs cho nơi chốn, thời gian, lý do.",
                        "Defining clause không dùng dấu phẩy; non-defining clause bắt buộc có dấu phẩy và thường không dùng <em>that</em>.",
                        "Tân ngữ quan hệ trong defining clause có thể lược: <em>The book (that) you lent me</em>."
                    ]
                },
                {
                    title: "3. Rút gọn mệnh đề quan hệ",
                    points: [
                        "Nếu mệnh đề quan hệ chủ động, có thể rút bằng <strong>V-ing</strong>: <em>the man sitting next to you</em>.",
                        "Nếu bị động, có thể rút bằng <strong>V3</strong>: <em>the books written by To Hoai</em>.",
                        "Khi diễn tả mục đích hoặc thứ tự, có thể rút bằng <strong>to-infinitive</strong>: <em>the first person to arrive</em>.",
                        "Không phải mệnh đề nào cũng nên rút; ưu tiên sự rõ nghĩa trước."
                    ]
                }
            ],
            examples: [
                { en: "I don't know where she put the key.", vi: "Wh-clause làm tân ngữ cho động từ know.", source: "tr. 46-47" },
                { en: "The boy whose bicycle you borrowed yesterday is Tom.", vi: "Whose cho sở hữu.", source: "tr. 48-55" },
                { en: "Paris, which I visited last summer, was crowded.", vi: "Non-defining clause có dấu phẩy.", source: "tr. 48-55" },
                { en: "The man sitting next to you is my uncle.", vi: "Rút gọn relative clause bằng V-ing.", source: "tr. 56-57" }
            ],
            pitfalls: [
                "Trong noun clause, nhiều người vẫn giữ trật tự nghi vấn như <em>I don't know where is he</em>; phải sửa thành <em>where he is</em>.",
                "Dùng <em>that</em> trong non-defining relative clause là sai; hãy chuyển sang <em>which / who</em>.",
                "Quên dấu phẩy ở non-defining clause làm câu đổi nghĩa hoặc tối nghĩa.",
                "Nhầm <em>whose</em> với <em>who's</em>; một bên là đại từ quan hệ, một bên là viết tắt của <em>who is</em>.",
                "Relative pronoun chỉ được lược khi nó đóng vai trò tân ngữ, không phải chủ ngữ."
            ],
            memorize: [
                "Noun clause: that / whether / if / wh- + S + V.",
                "Defining: không phẩy; non-defining: có phẩy.",
                "Who/whom = người; which = vật; whose = sở hữu; where/when/why = trạng từ quan hệ.",
                "The first / the only / the best ... thường đi với <em>to V</em> trong reduced clause."
            ],
            exercises: [
                { prompt: "I don't know where he (live).", answer: "lives" },
                { prompt: "She asked whether I (be) busy.", answer: "was" },
                { prompt: "The man ___ lives next door is a doctor.", answer: "who" },
                { prompt: "The book ___ you lent me is excellent.", answer: "that / which" },
                { prompt: "This is the student ___ project won the prize.", answer: "whose" },
                { prompt: "Paris, ___ I visited last summer, was crowded.", answer: "which" },
                { prompt: "The girl ___ to Lan is my cousin. (talk)", answer: "talking" },
                { prompt: "Do you know the reason ___ she left early?", answer: "why" },
                { prompt: "The first person ___ arrive will get a seat.", answer: "to" },
                { prompt: "I don't know ___ she put the key.", answer: "where" }
            ]
        },
        {
            id: "quantity-style-emphasis",
            icon: "🧪",
            title: "Lượng từ, văn phong, nhấn mạnh",
            pageRange: "tr. 58-69",
            summary: "Some/any, much/many, few/little, đổi cấu trúc câu và các mẫu nhấn mạnh.",
            intro: "Đây là nhóm rất thực dụng cho phần viết lại câu: vừa cần phân biệt lượng từ, vừa phải chuyển linh hoạt giữa noun, verb, adjective, adverb và cấu trúc nhấn mạnh.",
            tags: ["Quantifiers", "Styles", "Emphasis", "Transformations"],
            searchText: "luong tu van phong nhan manh quantifiers styles emphasis transformations some any much many few little do does did it is was that who trang 58 69",
            sourceMap: [
                { label: "Expressions of quantity", pages: "tr. 58-61" },
                { label: "Styles (sentence transformations)", pages: "tr. 62-67" },
                { label: "Emphasis", pages: "tr. 68-69" }
            ],
            theoryBlocks: [
                {
                    title: "1. Lượng từ",
                    points: [
                        "<strong>some</strong> thường đi với câu khẳng định, nhưng vẫn dùng trong lời mời / lời đề nghị.",
                        "<strong>any</strong> thường đi với phủ định và nghi vấn, nhưng cũng dùng với nghĩa 'bất kỳ'.",
                        "<strong>many / few / a few</strong> cho danh từ đếm được số nhiều; <strong>much / little / a little</strong> cho không đếm được.",
                        "<strong>most</strong> đi với nghĩa chung; <strong>most of</strong> đi với nhóm xác định."
                    ]
                },
                {
                    title: "2. Styles - đổi cách diễn đạt",
                    points: [
                        "Sách đẩy mạnh việc đổi <strong>danh từ -> động từ</strong>, <strong>tính từ -> trạng từ</strong>, <strong>chủ động -> bị động</strong> và ngược lại.",
                        "Khi viết lại câu, phải theo dõi kỹ loại từ sau khi đổi: <em>decision -> decide</em>, <em>careful -> carefully</em>.",
                        "Đừng chỉ đổi từ; đôi khi cần đổi cả vị trí thành phần câu để giữ nghĩa tự nhiên.",
                        "Nhóm này rất gần phần word-form ở cuối sách, nên học cùng nhau sẽ hiệu quả hơn."
                    ]
                },
                {
                    title: "3. Nhấn mạnh",
                    points: [
                        "<strong>do / does / did + V</strong> dùng để nhấn mạnh động từ.",
                        "<strong>It is/was ... that/who ...</strong> dùng để kéo một thành phần ra làm tâm điểm.",
                        "Có thể nhấn mạnh bằng trạng từ hoặc bằng vị trí trong câu, nhưng phải giữ đúng thời và nghĩa.",
                        "Khi dùng cấu trúc nhấn mạnh, tránh lặp một thành phần không cần thiết."
                    ]
                }
            ],
            examples: [
                { en: "Would you like some more coffee?", vi: "Some vẫn dùng trong lời mời.", source: "tr. 58-61" },
                { en: "He made a decision to leave. -> He decided to leave.", vi: "Đổi noun sang verb để câu gọn hơn.", source: "tr. 62-67" },
                { en: "She is a careful driver. -> She drives carefully.", vi: "Đổi adjective sang adverb.", source: "tr. 62-67" },
                { en: "It was Lan that solved the puzzle.", vi: "Cấu trúc cleft sentence để nhấn mạnh thành phần.", source: "tr. 68-69" }
            ],
            pitfalls: [
                "Nhầm <em>few</em> với <em>a few</em> hoặc <em>little</em> với <em>a little</em>: không có <em>a</em> thường mang sắc thái thiếu hụt.",
                "Dùng <em>much</em> với danh từ đếm được số nhiều là sai; phải chuyển sang <em>many</em>.",
                "Khi viết lại câu bằng từ gợi ý, nhiều người đổi đúng từ nhưng sai loại từ sau đó, ví dụ để <em>careful</em> במקום <em>carefully</em>.",
                "Cấu trúc nhấn mạnh <em>It is/was ... that/who</em> phải giữ đúng thì của mệnh đề gốc.",
                "Đừng gắn thêm <em>that</em> vô cớ sau mọi câu nhấn mạnh động từ bằng <em>do/does/did</em>."
            ],
            memorize: [
                "some/any; much/many; little/a little; few/a few; most/most of.",
                "decision -> decide; explanation -> explain; careful -> carefully; strong -> strongly.",
                "do/does/did + bare infinitive để nhấn mạnh động từ.",
                "It is/was + phần muốn nhấn + that/who + phần còn lại."
            ],
            exercises: [
                { prompt: "We have only ___ time left. (little / a little)", answer: "a little" },
                { prompt: "___ students understood the last question, so the teacher explained it again. (Few / A few)", answer: "Few" },
                { prompt: "Would you like ___ tea?", answer: "some" },
                { prompt: "There isn't ___ sugar in the jar.", answer: "much" },
                { prompt: "___ my friends enjoy grammar drills.", answer: "Most of" },
                { prompt: "He made a decision to leave. -> He ___ to leave.", answer: "decided" },
                { prompt: "She is a careful driver. -> She drives ___.", answer: "carefully" },
                { prompt: "I ___ like this song. (emphatic auxiliary)", answer: "do" },
                { prompt: "The room was ___ noisy for us to study.", answer: "too" },
                { prompt: "It was ___ who solved the puzzle. (Lan / that)", answer: "Lan" }
            ]
        },
        {
            id: "nouns-pronouns",
            icon: "🧱",
            title: "Danh từ, hòa hợp chủ-vị, đại từ",
            pageRange: "tr. 70-85",
            summary: "Nouns, plural forms, subject-verb agreement, case, pronouns và determiners.",
            intro: "Phần này xử lý những lỗi nền tảng rất hay gặp trong bài thi: số ít/số nhiều, danh từ đếm được/không đếm được, agreement và chọn đúng đại từ.",
            tags: ["Nouns", "Agreement", "Pronouns", "Determiners"],
            searchText: "danh tu hoa hop chu vi dai tu nouns subject verb agreement pronouns determiners plural possessive its another other the other trang 70 85",
            sourceMap: [
                { label: "Nouns: classification and plural forms", pages: "tr. 70-73" },
                { label: "Subject-Verb Agreement and case of nouns", pages: "tr. 74-77" },
                { label: "Personal, possessive, reflexive, demonstrative pronouns", pages: "tr. 78-81" },
                { label: "Determiners and quantity words", pages: "tr. 82-85" }
            ],
            theoryBlocks: [
                {
                    title: "1. Danh từ và số nhiều",
                    points: [
                        "Phân biệt rõ <strong>countable</strong>, <strong>uncountable</strong>, <strong>collective</strong>, <strong>abstract</strong> nouns.",
                        "Các mẫu số nhiều bất quy tắc như <em>man -> men, child -> children, tooth -> teeth</em> phải học thuộc.",
                        "Danh từ ghép có quy tắc lên số nhiều khác nhau: <em>brother-in-law -> brothers-in-law</em>.",
                        "Sở hữu cách <em>'s</em> thường cho người; với vật vô tri đôi khi nên chuyển sang <em>of</em>."
                    ]
                },
                {
                    title: "2. Hòa hợp chủ-vị",
                    points: [
                        "<strong>each, every, either, neither</strong> thường kéo động từ số ít.",
                        "<strong>a number of + plural noun</strong> đi với động từ số nhiều; <strong>the number of + plural noun</strong> đi với số ít.",
                        "<strong>none</strong>, <strong>all</strong>, <strong>some</strong> lấy số ít hay số nhiều tùy danh từ theo sau.",
                        "Tin tức, môn học, một số danh từ kết thúc bằng -s như <em>news, mathematics</em> vẫn có thể là số ít."
                    ]
                },
                {
                    title: "3. Đại từ và từ hạn định",
                    points: [
                        "Phân biệt <strong>subject pronouns</strong>, <strong>object pronouns</strong>, <strong>possessive pronouns</strong>, <strong>reflexive pronouns</strong>.",
                        "<strong>this / that / these / those</strong> vừa có thể là pronouns vừa có thể là determiners.",
                        "Nhóm <strong>another / other / the other / others / the others</strong> phải học theo logic 'một cái khác / phần còn lại / những cái khác'.",
                        "Đừng nhầm <em>its</em> (sở hữu) với <em>it's</em> (it is)."
                    ]
                }
            ],
            examples: [
                { en: "The news is surprising.", vi: "Danh từ có -s nhưng đi với động từ số ít.", source: "tr. 74-77" },
                { en: "A number of students are absent today.", vi: "A number of đi với số nhiều.", source: "tr. 74-77" },
                { en: "John bought himself a new car.", vi: "Reflexive pronoun khi chủ ngữ và tân ngữ cùng người.", source: "tr. 80-81" },
                { en: "I need another pen. This one doesn't work.", vi: "Another = một cái khác nữa.", source: "tr. 82-85" }
            ],
            pitfalls: [
                "Viết <em>informations</em>, <em>advices</em>, <em>homeworks</em> là lỗi phổ biến vì đây là uncountable nouns.",
                "Nhầm <em>a number of</em> và <em>the number of</em> dẫn đến chia sai động từ.",
                "Dùng <em>its</em> và <em>it's</em> lẫn lộn là lỗi cơ bản nhưng rất mất điểm.",
                "Quên đổi sang dạng bất quy tắc số nhiều như <em>children, men, mice</em>.",
                "Nhầm <em>another</em>, <em>other</em>, <em>the other</em>, <em>others</em> vì không xác định rõ còn lại bao nhiêu đối tượng."
            ],
            memorize: [
                "Irregular plurals: man/men, woman/women, child/children, foot/feet, tooth/teeth, mouse/mice.",
                "each/every/either/neither + singular noun + singular verb.",
                "a number of + plural noun + plural verb; the number of + plural noun + singular verb.",
                "my/mine, your/yours, our/ours, their/theirs; itself/himself/themselves.",
                "another = thêm một; the other = cái còn lại; others = những cái khác."
            ],
            exercises: [
                { prompt: "The news (is / are) surprising.", answer: "is" },
                { prompt: "One of my friends (has / have) moved abroad.", answer: "has" },
                { prompt: "A number of students (is / are) absent today.", answer: "are" },
                { prompt: "The number of applicants (is / are) increasing.", answer: "is" },
                { prompt: "My brother and I did it by ___.", answer: "ourselves" },
                { prompt: "This book is mine; that one is ___.", answer: "yours" },
                { prompt: "Neither answer (is / are) correct.", answer: "is" },
                { prompt: "I bought two ___ of bread.", answer: "loaves" },
                { prompt: "The company changed ___ policy yesterday.", answer: "its" },
                { prompt: "I need ___ pen. This one doesn't work.", answer: "another" }
            ]
        },
        {
            id: "adjectives-adverbs",
            icon: "🎯",
            title: "Tính từ và trạng từ",
            pageRange: "tr. 86-97",
            summary: "Vị trí, trật tự, -ing/-ed adjectives, adverbs of manner/time/place/frequency/degree và đảo ngữ.",
            intro: "Nếu muốn câu vừa đúng vừa tự nhiên, phải kiểm soát được adjective và adverb. Phần này cũng xử lý những cặp gây nhiễu mạnh như hard/hardly hay late/lately.",
            tags: ["Adjectives", "Adverbs", "Inversion", "Word order"],
            searchText: "tinh tu trang tu adjectives adverbs inversion hard hardly late lately adjective order ing ed trang 86 97",
            sourceMap: [
                { label: "Classification, position and order of adjectives", pages: "tr. 86-91" },
                { label: "Forms, kinds and functions of adverbs", pages: "tr. 92-95" },
                { label: "Inversion after negative adverbs / restrictive adverbs", pages: "tr. 95-97" }
            ],
            theoryBlocks: [
                {
                    title: "1. Tính từ",
                    points: [
                        "Adjective có thể đứng trước danh từ, sau linking verbs, hoặc làm object complement.",
                        "Trật tự tính từ thường đi từ đánh giá -> kích thước -> tuổi -> hình dạng -> màu -> nguồn gốc -> chất liệu -> danh từ.",
                        "Cặp <strong>-ing / -ed</strong> phải hiểu theo nghĩa: <em>interesting</em> mô tả vật gây cảm giác, <em>interested</em> mô tả người nhận cảm giác.",
                        "Một số từ nhìn như adverb nhưng thực ra là adjective sau linking verbs: <em>feel bad, look happy, seem tired</em>."
                    ]
                },
                {
                    title: "2. Trạng từ",
                    points: [
                        "Adverb được chia theo nghĩa: manner, time, place, frequency, degree, interrogative.",
                        "Trạng từ chỉ tần suất như <em>always, often, never, sometimes</em> thường đứng trước động từ thường nhưng sau <em>be</em>.",
                        "Sau động từ thường, thường cần adverb; sau linking verbs, cần adjective.",
                        "Một số adverb có nghĩa khác hẳn adjective tương ứng: <em>hard / hardly, late / lately, near / nearly</em>."
                    ]
                },
                {
                    title: "3. Đảo ngữ",
                    points: [
                        "Sau các trạng từ phủ định hoặc hạn định như <em>never, seldom, hardly, no sooner, only then</em>, có thể xuất hiện đảo trợ động từ.",
                        "Đảo ngữ thường gặp trong văn viết trang trọng và bài thi viết lại câu.",
                        "Muốn đảo đúng, phải xác định trợ động từ phù hợp với thì của câu gốc.",
                        "Đừng lạm dụng đảo ngữ trong giao tiếp thông thường."
                    ]
                }
            ],
            examples: [
                { en: "She bought a beautiful old French table.", vi: "Trật tự tính từ trước danh từ.", source: "tr. 86-91" },
                { en: "The lecture was boring, so the students looked bored.", vi: "Phân biệt -ing và -ed.", source: "tr. 90-91" },
                { en: "He speaks English fluently.", vi: "Adverb bổ nghĩa cho động từ.", source: "tr. 92-95" },
                { en: "Never have I seen such a mess.", vi: "Đảo ngữ sau trạng từ phủ định.", source: "tr. 95-97" }
            ],
            pitfalls: [
                "Viết <em>He speaks English fluent</em> là sai vì sau động từ thường cần adverb.",
                "Ngược lại, viết <em>She feels happily</em> cũng sai vì sau linking verb phải dùng adjective: <em>happy</em>.",
                "Nhầm <em>hard</em> với <em>hardly</em>: <em>hardly</em> nghĩa là 'hầu như không'.",
                "Nhầm <em>late</em> với <em>lately</em>: <em>lately</em> nghĩa là 'gần đây'.",
                "Quên đảo trợ động từ sau <em>never, seldom, no sooner, only after...</em> là lỗi thường gặp ở bài rewrite."
            ],
            memorize: [
                "Linking verbs + adjective: be, seem, appear, feel, look, sound, smell, taste, become, get.",
                "Adverb of frequency: before main verb, after be.",
                "-ing = gây cảm giác; -ed = cảm thấy.",
                "Never / Seldom / Hardly / No sooner -> đảo trợ động từ.",
                "hard/hardly, late/lately, near/nearly là nhóm dễ bẫy nhất."
            ],
            exercises: [
                { prompt: "She speaks English very ___.", answer: "fluently" },
                { prompt: "I felt ___ after the long trip.", answer: "tired" },
                { prompt: "This movie is really ___.", answer: "interesting" },
                { prompt: "He arrived ___, so the meeting had already started.", answer: "late" },
                { prompt: "The soup tastes ___.", answer: "good" },
                { prompt: "The exam was so ___ that many students panicked.", answer: "difficult" },
                { prompt: "She was ___ by the ending of the story.", answer: "surprised" },
                { prompt: "He ran ___ to catch the bus.", answer: "quickly" },
                { prompt: "I have ___ seen such a mess.", answer: "never" },
                { prompt: "Under no circumstances ___ you open this door.", answer: "should" }
            ]
        },
        {
            id: "comparison-verbs",
            icon: "⚙️",
            title: "So sánh và hình thức động từ",
            pageRange: "tr. 98-109",
            summary: "Comparisons, kinds of verbs, bare/to-infinitive, gerund và participles.",
            intro: "Cụm này nối hai mảng thường dính với nhau trong bài thi: cấu trúc so sánh và lựa chọn đúng hình thức động từ sau từng pattern.",
            tags: ["Comparatives", "Gerund", "Infinitive", "Participles"],
            searchText: "so sanh dong tu gerund infinitive participle comparison verbs transitive intransitive linking trang 98 109",
            sourceMap: [
                { label: "Equal / comparative / superlative / double comparison", pages: "tr. 98-102" },
                { label: "Kinds of verbs and forms of verbs", pages: "tr. 103-105" },
                { label: "Uses of infinitives, gerunds and participles", pages: "tr. 104-109" }
            ],
            theoryBlocks: [
                {
                    title: "1. So sánh",
                    points: [
                        "<strong>as ... as</strong> cho so sánh bằng; <strong>comparative + than</strong> cho so sánh hơn; <strong>the + superlative</strong> cho bậc nhất.",
                        "Có thể dùng <strong>more / less</strong> với adjective dài và adverb dài.",
                        "<strong>the more ..., the more ...</strong> và <strong>more and more ...</strong> là hai mẫu sách nhấn rất kỹ.",
                        "Một số hình bất quy tắc phải học thuộc: <em>good/better/best, bad/worse/worst, far/further/furthest</em>."
                    ]
                },
                {
                    title: "2. Phân loại động từ",
                    points: [
                        "<strong>Transitive verbs</strong> cần tân ngữ; <strong>intransitive verbs</strong> không cần tân ngữ; <strong>linking verbs</strong> nối sang bổ ngữ.",
                        "Nhìn đúng loại động từ giúp tránh lỗi gắn nhầm object hoặc chọn sai adjective/adverb.",
                        "Một số động từ có thể đổi vai trò theo ngữ cảnh nên phải nhìn cả cấu trúc câu.",
                        "Phần này là cầu nối sang gerund, infinitive, participles và phần voice/style."
                    ]
                },
                {
                    title: "3. Infinitive, gerund, participle",
                    points: [
                        "Sau modal verbs, make, let, see/hear/watch trong vài cấu trúc, sách dùng <strong>bare infinitive</strong>.",
                        "Sau nhiều động từ như <em>want, decide, plan, promise</em> dùng <strong>to-infinitive</strong>.",
                        "Sau nhiều động từ như <em>enjoy, avoid, keep, finish, mind</em> dùng <strong>V-ing</strong>.",
                        "Present participle (V-ing) và past participle (V3) còn dùng như tính từ hoặc để rút gọn mệnh đề."
                    ]
                }
            ],
            examples: [
                { en: "This chair is more comfortable than that one.", vi: "So sánh hơn với adjective dài.", source: "tr. 98-102" },
                { en: "The more you read, the more you notice the patterns.", vi: "Double comparison.", source: "tr. 98-102" },
                { en: "She made me tell the truth.", vi: "Make + bare infinitive.", source: "tr. 103-105" },
                { en: "The books written by To Hoai are widely read.", vi: "Past participle dùng như adjective / reduced clause.", source: "tr. 104-109" }
            ],
            pitfalls: [
                "Viết <em>more easier</em> hoặc <em>more better</em> là sai vì đã nhân đôi dấu hiệu so sánh.",
                "Sau <em>enjoy</em>, <em>avoid</em>, <em>mind</em> phải dùng V-ing chứ không dùng to-infinitive.",
                "Sau <em>decide</em>, <em>promise</em>, <em>hope</em> lại thường phải dùng to-infinitive.",
                "Nhầm <em>remember to do</em> (nhớ sẽ làm) với <em>remember doing</em> (nhớ đã làm).",
                "Sau linking verbs phải là adjective: <em>seems happy</em>, không phải <em>seems happily</em>."
            ],
            memorize: [
                "good/better/best; bad/worse/worst; far/farther/further; little/less/least.",
                "the more ..., the more ...; more and more ...",
                "want/need/plan/decide + to V; enjoy/avoid/finish/keep + V-ing.",
                "make/let + bare infinitive; be made + to-infinitive.",
                "V-ing = chủ động / đang diễn ra; V3 = bị động / đã hoàn tất."
            ],
            exercises: [
                { prompt: "This test is ___ than the last one.", answer: "easier" },
                { prompt: "Lan is the ___ student in the group.", answer: "most diligent" },
                { prompt: "The sooner we start, the ___ we finish.", answer: "earlier" },
                { prompt: "He stopped ___ because he was tired.", answer: "working" },
                { prompt: "Remember ___ the window before you leave.", answer: "to close" },
                { prompt: "I enjoy ___ early in the morning.", answer: "running" },
                { prompt: "She made me ___ the truth.", answer: "tell" },
                { prompt: "The book ___ by To Hoai is famous.", answer: "written" },
                { prompt: "He seems ___ happy today.", answer: "very / quite / extremely" },
                { prompt: "I need a chair ___ on.", answer: "to sit" }
            ]
        },
        {
            id: "modals-numerals",
            icon: "📏",
            title: "Modal verbs và numerals",
            pageRange: "tr. 110-115",
            summary: "Khả năng, lời khuyên, nghĩa vụ, suy luận bằng modal verbs; đọc số, ngày tháng, phân số.",
            intro: "Phần ngắn nhưng rất hay ra đề. Phải tách rõ nghĩa của modal trong hiện tại và modal perfect trong quá khứ, rồi chuyển nhanh sang cách đọc số.",
            tags: ["Modals", "Modal perfect", "Dates", "Fractions"],
            searchText: "modal verbs numerals dates fractions must should could may might have to numbers trang 110 115",
            sourceMap: [
                { label: "Could / May / Might / Should / Must / Have to", pages: "tr. 110-111" },
                { label: "Modal perfect: could/may/might have, should have, must have", pages: "tr. 110-113" },
                { label: "Numerals, dates, fractions, percentages", pages: "tr. 114-115" }
            ],
            theoryBlocks: [
                {
                    title: "1. Nghĩa cơ bản của modal verbs",
                    points: [
                        "<strong>can / could</strong> cho khả năng hoặc sự cho phép ở mức khác nhau.",
                        "<strong>may / might</strong> cho khả năng có thể xảy ra; <strong>might</strong> thường yếu hơn.",
                        "<strong>should</strong> cho lời khuyên hoặc kỳ vọng; <strong>must</strong> cho nghĩa vụ mạnh hoặc suy luận mạnh.",
                        "<strong>have to</strong> gần nghĩa với <em>must</em> nhưng nhấn vào yêu cầu khách quan / bên ngoài."
                    ]
                },
                {
                    title: "2. Modal perfect",
                    points: [
                        "<strong>must have + V3</strong> cho suy luận mạnh về quá khứ.",
                        "<strong>should have + V3</strong> cho điều nên làm nhưng đã không làm.",
                        "<strong>could/may/might have + V3</strong> cho khả năng hoặc giả thiết trong quá khứ.",
                        "Đừng lẫn modal perfect với perfect tense thông thường; modal luôn đứng trước <em>have</em>."
                    ]
                },
                {
                    title: "3. Numerals",
                    points: [
                        "Học cách đọc số đếm, số thứ tự, năm, ngày tháng, số thập phân, phân số, phần trăm.",
                        "Với hàng trăm/hàng nghìn, tiếng Anh thường không thêm -s khi là số đếm chính xác: <em>two hundred</em>, không phải <em>two hundreds</em>.",
                        "Ngày tháng có thể đọc theo kiểu Anh-Anh hoặc Anh-Mỹ, nhưng phải thống nhất.",
                        "Phân số thường dùng số thứ tự ở mẫu số: <em>one half, two thirds, five eighths</em>."
                    ]
                }
            ],
            examples: [
                { en: "You must wear a helmet here.", vi: "Nghĩa vụ mạnh.", source: "tr. 110-111" },
                { en: "She must have missed the train.", vi: "Suy luận mạnh về quá khứ.", source: "tr. 110-113" },
                { en: "3/4 = three quarters.", vi: "Cách đọc phân số cơ bản.", source: "tr. 114-115" },
                { en: "1998 = nineteen ninety-eight.", vi: "Cách đọc năm phổ biến.", source: "tr. 114-115" }
            ],
            pitfalls: [
                "Sau modal verb là bare infinitive, không thêm <em>to</em>: <em>must go</em>, không phải <em>must to go</em>.",
                "Phân biệt <em>mustn't</em> (cấm) và <em>don't have to</em> (không cần).",
                "Nhiều người bỏ qua sắc thái xác suất giữa <em>may</em> và <em>might</em>.",
                "Dùng <em>should have + V3</em> để tiếc nuối quá khứ, không phải để nói lời khuyên ở hiện tại.",
                "Với số đếm chính xác, không thêm -s vào <em>hundred, thousand, million</em>."
            ],
            memorize: [
                "must = obligation / strong deduction; should = advice / expectation; have to = external necessity.",
                "must have / should have / might have + V3.",
                "one half, one quarter, three quarters, two thirds.",
                "Ngày: the fifth of July / July fifth; năm: nineteen ninety-eight."
            ],
            exercises: [
                { prompt: "You ___ wear a helmet when riding a motorbike.", answer: "must / have to" },
                { prompt: "He looks pale. He ___ be tired.", answer: "must" },
                { prompt: "You ___ smoke here.", answer: "mustn't" },
                { prompt: "We ___ have taken a taxi; the bus was too slow.", answer: "should" },
                { prompt: "She ___ have forgotten our meeting; her phone is off.", answer: "might / may" },
                { prompt: "My birthday is on the ___ of July.", answer: "fifth" },
                { prompt: "3/4 is read as ___.", answer: "three quarters" },
                { prompt: "1998 is read as ___.", answer: "nineteen ninety-eight" },
                { prompt: "There are two ___ people in the hall.", answer: "hundred" },
                { prompt: "I ___ finish this tonight; it's a deadline.", answer: "have to / must" }
            ]
        },
        {
            id: "prepositions-conjunctions",
            icon: "🗺️",
            title: "Giới từ và liên từ",
            pageRange: "tr. 116-131",
            summary: "Prepositions of time/place/movement, cụm cố định, conjunctions điều phối và phụ thuộc.",
            intro: "Đây là nhóm phải học bằng cụm. Chỉ học nghĩa từ điển của từng giới từ là chưa đủ; phải học luôn collocation và cấu trúc thường đi cùng.",
            tags: ["Prepositions", "Conjunctions", "Time/Place", "Collocations"],
            searchText: "gioi tu lien tu prepositions conjunctions at in on into by with despite because of although either or neither nor trang 116 131",
            sourceMap: [
                { label: "Forms and kinds of prepositions", pages: "tr. 116-125" },
                { label: "Core uses: at / in / on / by / to / into / with", pages: "tr. 126-129" },
                { label: "Conjunctions: coordinating, subordinating, correlative", pages: "tr. 130-131" }
            ],
            theoryBlocks: [
                {
                    title: "1. Giới từ",
                    points: [
                        "<strong>at</strong> cho điểm nhỏ hoặc thời điểm cụ thể; <strong>in</strong> cho khoảng, không gian lớn, tháng/năm; <strong>on</strong> cho bề mặt và ngày cụ thể.",
                        "<strong>to</strong> chỉ hướng tới; <strong>into</strong> nhấn vào sự đi vào bên trong; <strong>by</strong> cho phương tiện / tác nhân bị động; <strong>with</strong> cho công cụ hoặc cùng với.",
                        "Phải học theo cụm: <em>good at, interested in, depend on, wait for, familiar with</em>.",
                        "Giới từ thường đi cùng danh từ, tính từ, động từ theo pattern khá cố định."
                    ]
                },
                {
                    title: "2. Liên từ",
                    points: [
                        "<strong>Coordinating conjunctions</strong>: and, but, or, so, for, nor, yet.",
                        "<strong>Subordinating conjunctions</strong>: because, although, when, if, unless, while, before, after...",
                        "<strong>Correlative conjunctions</strong>: either ... or, neither ... nor, not only ... but also, both ... and.",
                        "Liên từ không chỉ nối câu; nó điều khiển cả quan hệ logic và, nhiều khi, luôn cả dạng động từ theo sau."
                    ]
                },
                {
                    title: "3. Phân biệt theo cấu trúc",
                    points: [
                        "<strong>because</strong> đi với clause, còn <strong>because of</strong> đi với noun phrase.",
                        "<strong>although</strong> đi với clause, còn <strong>despite / in spite of</strong> đi với noun phrase hoặc V-ing.",
                        "<strong>between</strong> thường cho hai đối tượng hoặc các đối tượng tách rạch ròi; <strong>among</strong> cho tập hợp.",
                        "Khi dùng correlative conjunctions, phải giữ song song về mặt ngữ pháp."
                    ]
                }
            ],
            examples: [
                { en: "The meeting starts at 8:30 on Monday in June.", vi: "Một câu gom cả at + thời điểm, on + ngày, in + tháng.", source: "tr. 116-125" },
                { en: "The letter was written by Mary with a blue pen.", vi: "By là tác nhân, with là công cụ.", source: "tr. 118-125" },
                { en: "I'll call you as soon as I get home.", vi: "Liên từ thời gian và quy tắc không dùng will trong mệnh đề phụ.", source: "tr. 130-131" },
                { en: "Neither Lan nor Minh was late.", vi: "Correlative conjunction cần giữ cấu trúc song song.", source: "tr. 130-131" }
            ],
            pitfalls: [
                "Nhầm <em>in Monday</em> hoặc <em>on 8 p.m.</em>; phải học cặp at/in/on theo từng lớp nghĩa.",
                "Dùng <em>because of</em> trước một clause hoặc <em>although</em> trước noun phrase là sai cấu trúc.",
                "Nhầm <em>by</em> và <em>with</em> trong câu bị động: <em>written by Mary</em> nhưng <em>with a pen</em>.",
                "Sau <em>as soon as / when / before / after / until</em> khi nói tương lai, mệnh đề phụ không dùng will.",
                "Trong <em>either ... or / neither ... nor</em>, phần sau phải song song loại từ và cấu trúc."
            ],
            memorize: [
                "at = điểm nhỏ / thời điểm chính xác; on = bề mặt / ngày; in = không gian lớn / tháng / năm / buổi.",
                "between vs among; by vs with; to vs into.",
                "good at, interested in, afraid of, different from, responsible for, depend on.",
                "because + clause; because of + noun phrase.",
                "although + clause; despite / in spite of + noun phrase / V-ing."
            ],
            exercises: [
                { prompt: "The meeting starts ___ 8:30.", answer: "at" },
                { prompt: "I left my keys ___ the table.", answer: "on" },
                { prompt: "We travelled ___ bus.", answer: "by" },
                { prompt: "She has lived here ___ 2019.", answer: "since" },
                { prompt: "He stayed home because ___ the rain.", answer: "of" },
                { prompt: "We waited ___ the bus stop for 20 minutes.", answer: "at" },
                { prompt: "I'll call you as soon as I ___ home.", answer: "get" },
                { prompt: "Neither Lan ___ Minh was late.", answer: "nor" },
                { prompt: "He was tired, ___ he finished the work.", answer: "but" },
                { prompt: "This pen is different ___ that one.", answer: "from" }
            ]
        },
        {
            id: "articles-word-study",
            icon: "📚",
            title: "Mạo từ, word study, word form",
            pageRange: "tr. 132-155",
            summary: "Articles a/an/the/zero, cách thành lập từ và nhận biết loại từ trong câu.",
            intro: "Đây là phần rất hợp để đưa lên web vì sách gốc rải thành nhiều bảng. Gom lại thành một module giúp tra cứu nhanh hơn khi làm bài word form hoặc article.",
            tags: ["Articles", "Word study", "Word form", "Suffixes"],
            searchText: "mao tu word study word form articles a an the zero article suffix prefix noun adjective adverb verb trang 132 155",
            sourceMap: [
                { label: "Articles: a / an / the / zero article", pages: "tr. 132-135" },
                { label: "Word study: noun / adjective / verb / adverb formations", pages: "tr. 136-140" },
                { label: "Word forms in sentence positions", pages: "tr. 141-155" }
            ],
            theoryBlocks: [
                {
                    title: "1. Mạo từ",
                    points: [
                        "<strong>a / an</strong> dùng với danh từ số ít đếm được chưa xác định; chọn theo âm đầu chứ không theo chữ cái đầu.",
                        "<strong>the</strong> dùng cho đối tượng đã xác định, duy nhất, được nhắc lại hoặc nhóm đặc thù.",
                        "<strong>zero article</strong> thường gặp với bữa ăn, ngôn ngữ, môn học, phương tiện, khái niệm chung hoặc danh từ số nhiều không xác định.",
                        "Tên riêng có thể có hoặc không có <em>the</em> tùy nhóm: <em>the Pacific</em>, nhưng <em>Vietnam</em> không có <em>the</em>."
                    ]
                },
                {
                    title: "2. Word study - cách thành lập từ",
                    points: [
                        "Sách gom khá nhiều hậu tố: danh từ như <em>-tion, -ment, -er, -or, -ness, -ity</em>; tính từ như <em>-ful, -less, -ous, -able, -al, -ive</em>; trạng từ như <em>-ly</em>.",
                        "Tiền tố quan trọng gồm <em>un-, in-, im-, il-, ir-, dis-, super-, sub-, over-, under-</em>.",
                        "Không phải cứ thêm hậu tố là xong; phải kiểm tra chính tả và biến âm: <em>happy -> happiness</em>, <em>decide -> decision</em>.",
                        "Một số từ đổi hoàn toàn loại từ và nghĩa: <em>strong -> strength</em>, <em>long -> length</em>, <em>wide -> width</em>."
                    ]
                },
                {
                    title: "3. Word form theo vị trí trong câu",
                    points: [
                        "Sau mạo từ, sở hữu cách, lượng từ thường cần danh từ hoặc adjective + noun.",
                        "Sau linking verbs thường cần adjective; sau động từ thường thường cần adverb.",
                        "Sau giới từ cần noun phrase hoặc gerund, không dùng bare adjective trừ khi nó nằm trong một noun phrase đầy đủ.",
                        "Khi làm bài word form, phải đọc cả câu để xác định loại từ, số ít/số nhiều và sắc thái nghĩa dương/âm."
                    ]
                }
            ],
            examples: [
                { en: "I saw an owl near the old temple.", vi: "An chọn theo âm nguyên âm đầu của <em>owl</em>.", source: "tr. 132-135" },
                { en: "We usually have breakfast at 7.", vi: "Bữa ăn thường dùng zero article.", source: "tr. 132-135" },
                { en: "Their latest achievement was impressive.", vi: "Achievement là danh từ tạo bởi hậu tố -ment.", source: "tr. 136-140" },
                { en: "She explained the idea very clearly.", vi: "Sau động từ <em>explained</em> là adverb bổ nghĩa.", source: "tr. 141-155" }
            ],
            pitfalls: [
                "Chọn <em>a</em> hay <em>an</em> theo chữ cái đầu là sai mẹo; phải chọn theo âm đầu thực tế: <em>an hour</em>, <em>a university</em>.",
                "Dùng <em>the</em> quá nhiều với danh từ chung số nhiều khi đang nói khái quát là lỗi phổ biến.",
                "Ở bài word form, nhiều người xác định đúng loại từ nhưng quên dạng số ít/số nhiều hoặc sắc thái nghĩa phủ định.",
                "Sau giới từ phải là noun phrase hoặc V-ing, nên các dạng như <em>interested in improve</em> là sai.",
                "Đừng nhầm adjective và adverb sau linking verbs: <em>The result was satisfactory</em>, không phải <em>satisfactorily</em>."
            ],
            memorize: [
                "a / an = chưa xác định; the = đã xác định / duy nhất; zero article = khái quát, bữa ăn, ngôn ngữ, môn học, danh từ không xác định.",
                "Noun suffixes: -tion, -ment, -ness, -ity, -er, -or.",
                "Adjective suffixes: -ful, -less, -ous, -able, -al, -ive.",
                "Adverb suffix: -ly; nhưng nhớ ngoại lệ như <em>fast, hard, late</em>.",
                "Sau article / possessive / quantifier -> thường chờ noun; sau link verb -> adjective; sau main verb -> adverb."
            ],
            exercises: [
                { prompt: "I saw ___ owl in the garden last night.", answer: "an" },
                { prompt: "___ Pacific Ocean is enormous.", answer: "The" },
                { prompt: "We usually have ___ breakfast at 7.", answer: "zero article / no article" },
                { prompt: "She wants to become ___ engineer.", answer: "an" },
                { prompt: "His explanation was very ___. (logic)", answer: "logical" },
                { prompt: "They celebrated their latest ___. (achieve)", answer: "achievement" },
                { prompt: "This tool is highly ___. (use)", answer: "useful" },
                { prompt: "The city grows ___. (rapid)", answer: "rapidly" },
                { prompt: "We were impressed by her ___. (kind)", answer: "kindness" },
                { prompt: "Vietnamese is my ___ language. (nation)", answer: "national" }
            ]
        }
    ],
    appendices: [
        {
            title: "IPA phiên âm cơ bản",
            tags: ["Pronunciation", "Must Memorize"],
            contentHtml: `
                <p>Học nhóm âm tối thiểu trước rồi gắn mỗi âm với một từ khóa. Khi ôn phát âm, hãy đối chiếu cả khẩu hình lẫn ví dụ.</p>
                <table>
                    <thead>
                        <tr><th>Nhóm</th><th>Âm</th><th>Ví dụ nhanh</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>Nguyên âm đơn</td><td><code>/iː/ /ɪ/ /e/ /æ/ /ʌ/ /ɑː/ /ɒ/ /ɔː/ /ʊ/ /uː/ /ɜː/ /ə/</code></td><td>sheep, ship, bed, cat, cup, car, hot, law, book, food, bird, about</td></tr>
                        <tr><td>Nguyên âm đôi</td><td><code>/eɪ/ /aɪ/ /ɔɪ/ /aʊ/ /oʊ/ /ɪə/ /eə/ /ʊə/</code></td><td>day, my, boy, now, go, here, hair, tour</td></tr>
                        <tr><td>Âm phụ âm dễ nhầm</td><td><code>/θ/ /ð/ /ʃ/ /ʒ/ /tʃ/ /dʒ/ /ŋ/</code></td><td>think, this, she, vision, chair, job, sing</td></tr>
                    </tbody>
                </table>
                <p><strong>Mẹo ôn:</strong> tách riêng các cặp tối thiểu như <code>ship/sheep</code>, <code>full/fool</code>, <code>think/this</code>, <code>fan/van</code>.</p>
            `
        },
        {
            title: "Bảng động từ bất quy tắc thông dụng",
            tags: ["Irregular Verbs", "Lookup"],
            contentHtml: `
                <table>
                    <thead>
                        <tr><th>V1</th><th>V2</th><th>V3</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>be</td><td>was/were</td><td>been</td></tr>
                        <tr><td>begin</td><td>began</td><td>begun</td></tr>
                        <tr><td>break</td><td>broke</td><td>broken</td></tr>
                        <tr><td>bring</td><td>brought</td><td>brought</td></tr>
                        <tr><td>buy</td><td>bought</td><td>bought</td></tr>
                        <tr><td>choose</td><td>chose</td><td>chosen</td></tr>
                        <tr><td>come</td><td>came</td><td>come</td></tr>
                        <tr><td>do</td><td>did</td><td>done</td></tr>
                        <tr><td>drink</td><td>drank</td><td>drunk</td></tr>
                        <tr><td>drive</td><td>drove</td><td>driven</td></tr>
                        <tr><td>eat</td><td>ate</td><td>eaten</td></tr>
                        <tr><td>find</td><td>found</td><td>found</td></tr>
                        <tr><td>forget</td><td>forgot</td><td>forgotten</td></tr>
                        <tr><td>get</td><td>got</td><td>got / gotten</td></tr>
                        <tr><td>give</td><td>gave</td><td>given</td></tr>
                        <tr><td>go</td><td>went</td><td>gone</td></tr>
                        <tr><td>have</td><td>had</td><td>had</td></tr>
                        <tr><td>know</td><td>knew</td><td>known</td></tr>
                        <tr><td>leave</td><td>left</td><td>left</td></tr>
                        <tr><td>make</td><td>made</td><td>made</td></tr>
                        <tr><td>meet</td><td>met</td><td>met</td></tr>
                        <tr><td>read</td><td>read</td><td>read</td></tr>
                        <tr><td>run</td><td>ran</td><td>run</td></tr>
                        <tr><td>say</td><td>said</td><td>said</td></tr>
                        <tr><td>see</td><td>saw</td><td>seen</td></tr>
                        <tr><td>sing</td><td>sang</td><td>sung</td></tr>
                        <tr><td>speak</td><td>spoke</td><td>spoken</td></tr>
                        <tr><td>take</td><td>took</td><td>taken</td></tr>
                        <tr><td>write</td><td>wrote</td><td>written</td></tr>
                    </tbody>
                </table>
            `
        },
        {
            title: "Bảng tín hiệu thì cần nhớ",
            tags: ["Tense Signals", "Exam Speed"],
            contentHtml: `
                <table>
                    <thead>
                        <tr><th>Thì / cấu trúc</th><th>Tín hiệu thường gặp</th><th>Ghi nhớ nhanh</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>Present Simple</td><td>always, usually, often, every day</td><td>thói quen, sự thật, lịch trình</td></tr>
                        <tr><td>Present Continuous</td><td>now, right now, at the moment</td><td>đang diễn ra hoặc đã sắp xếp</td></tr>
                        <tr><td>Present Perfect</td><td>since, for, already, just, yet, so far</td><td>quá khứ nối hiện tại</td></tr>
                        <tr><td>Past Simple</td><td>yesterday, ago, last week, in 2020</td><td>mốc quá khứ đã đóng</td></tr>
                        <tr><td>Past Perfect</td><td>before, after, by the time, already</td><td>quá khứ xảy ra trước quá khứ khác</td></tr>
                        <tr><td>Future</td><td>tomorrow, next week, soon, by + future time</td><td>ý định, dự đoán, hoàn tất tương lai</td></tr>
                        <tr><td>Time clauses</td><td>when, before, after, until, as soon as</td><td>mệnh đề phụ không dùng will</td></tr>
                    </tbody>
                </table>
            `
        },
        {
            title: "Suffix / prefix bank cho word form",
            tags: ["Word Form", "Cheat Sheet"],
            contentHtml: `
                <table>
                    <thead>
                        <tr><th>Loại từ</th><th>Hậu tố / tiền tố</th><th>Ví dụ</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>Danh từ</td><td><code>-tion</code>, <code>-ment</code>, <code>-ness</code>, <code>-ity</code>, <code>-er</code>, <code>-or</code></td><td>action, development, kindness, ability, teacher, actor</td></tr>
                        <tr><td>Tính từ</td><td><code>-ful</code>, <code>-less</code>, <code>-ous</code>, <code>-able</code>, <code>-al</code>, <code>-ive</code></td><td>helpful, careless, dangerous, readable, national, attractive</td></tr>
                        <tr><td>Trạng từ</td><td><code>-ly</code></td><td>carefully, rapidly, economically</td></tr>
                        <tr><td>Tiền tố phủ định</td><td><code>un-</code>, <code>in-</code>, <code>im-</code>, <code>il-</code>, <code>ir-</code>, <code>dis-</code></td><td>unhappy, inactive, impossible, illegal, irregular, dishonest</td></tr>
                    </tbody>
                </table>
                <p><strong>Quy tắc làm nhanh:</strong> xác định vị trí cần noun / adjective / adverb trước, rồi mới chọn họ từ phù hợp; cuối cùng kiểm tra xem cần nghĩa dương hay phủ định.</p>
            `
        }
    ]
};
