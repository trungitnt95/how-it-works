// Vietnamese -> English translation practice per grammar topic.
// Keyed by the same component id used across foundations/tenses/patterns/
// structures/mistakes/enrichment/extras/comprehensive data files.
// Shape: { [componentId]: { instruction: string, items: [{ vi, en, point }] } }
const grammarViTranslateData = {
  "sentence-order": {
    "instruction": "Dịch các câu sau, chú ý đặt đúng trật tự Subject–Verb–Object, vị trí tính từ trước danh từ, vị trí trạng từ tần suất, và các cấu trúc đảo ngữ/fronting đặc biệt.",
    "items": [
      {
        "vi": "Cô ấy đọc sách mỗi tối.",
        "en": "She reads books every night.",
        "point": "trật tự S + V + O cơ bản"
      },
      {
        "vi": "Đứa bé đã khóc.",
        "en": "The baby cried.",
        "point": "trật tự S + V, không cần tân ngữ"
      },
      {
        "vi": "Họ đã tặng tôi một món quà.",
        "en": "They gave me a gift.",
        "point": "cấu trúc S + V + O + O"
      },
      {
        "vi": "Anh ấy mệt.",
        "en": "He is tired.",
        "point": "cấu trúc S + be + bổ ngữ"
      },
      {
        "vi": "Đây là một kỳ thi khó.",
        "en": "This is a difficult exam.",
        "point": "tính từ đứng trước danh từ"
      },
      {
        "vi": "Anh ấy thường xuyên đi làm muộn.",
        "en": "He often goes to work late.",
        "point": "trạng từ tần suất trước động từ thường"
      },
      {
        "vi": "Cô ấy luôn vui vẻ.",
        "en": "She is always cheerful.",
        "point": "trạng từ tần suất sau động từ be"
      },
      {
        "vi": "Tôi uống cà phê vào buổi sáng.",
        "en": "I drink coffee in the morning.",
        "point": "thông tin thời gian đặt cuối câu"
      },
      {
        "vi": "Tôi chưa bao giờ thấy điều gì như vậy.",
        "en": "Never have I seen anything like that.",
        "point": "đảo ngữ với Never"
      },
      {
        "vi": "Trong góc phòng có một cây đàn piano cũ.",
        "en": "In the corner stood an old piano.",
        "point": "fronting - đưa cụm trạng ngữ lên đầu câu"
      }
    ]
  },
  "parts-of-speech": {
    "instruction": "Dịch các câu sau, chú ý chọn đúng từ loại (danh từ, động từ, tính từ, trạng từ) phù hợp với vai trò của từ trong câu.",
    "items": [
      {
        "vi": "Sắc đẹp của cô ấy khiến mọi người ngạc nhiên.",
        "en": "Her beauty surprised everyone.",
        "point": "dùng danh từ (beauty)"
      },
      {
        "vi": "Cô ấy rất xinh đẹp.",
        "en": "She is beautiful.",
        "point": "dùng tính từ (beautiful)"
      },
      {
        "vi": "Cô ấy hát một cách tuyệt đẹp.",
        "en": "She sings beautifully.",
        "point": "dùng trạng từ (beautifully)"
      },
      {
        "vi": "Tôi cần đặt vé máy bay.",
        "en": "I need to book a flight.",
        "point": "một từ đổi từ loại theo ngữ cảnh (book = động từ)"
      },
      {
        "vi": "Cô ấy nói tiếng Anh trôi chảy.",
        "en": "She speaks English fluently.",
        "point": "dùng trạng từ chứ không dùng tính từ sau động từ"
      },
      {
        "vi": "Sự thành công của anh ấy khiến gia đình tự hào.",
        "en": "His success made his family proud.",
        "point": "danh từ đuôi khác -tion nhưng vẫn là danh từ trừu tượng"
      },
      {
        "vi": "Đây là một kế hoạch hữu ích.",
        "en": "This is a useful plan.",
        "point": "tính từ đuôi -ful bổ nghĩa danh từ"
      },
      {
        "vi": "Họ đã lên kế hoạch cho chuyến đi một cách thành công.",
        "en": "They planned the trip successfully.",
        "point": "trạng từ bổ nghĩa động từ (successfully) khác với tính từ"
      }
    ]
  },
  "articles-determiners": {
    "instruction": "Dịch các câu sau, chú ý chọn đúng a/an, the, hoặc không dùng mạo từ, cũng như các từ hạn định khác như this/that/my.",
    "items": [
      {
        "vi": "Tôi đã mua một quyển sách.",
        "en": "I bought a book.",
        "point": "a/an với danh từ đếm được, chưa xác định"
      },
      {
        "vi": "Quyển sách đang ở trên bàn.",
        "en": "The book is on the table.",
        "point": "the với danh từ đã xác định"
      },
      {
        "vi": "Sách rất hữu ích.",
        "en": "Books are useful.",
        "point": "không dùng mạo từ khi nói chung chung, số nhiều"
      },
      {
        "vi": "Mặt trời mọc ở phía đông.",
        "en": "The sun rises in the east.",
        "point": "the với danh từ duy nhất"
      },
      {
        "vi": "Tôi sẽ quay lại sau một giờ nữa.",
        "en": "I will be back in an hour.",
        "point": "an theo âm đầu, không theo chữ cái (an hour)"
      },
      {
        "vi": "Cô ấy học tại một trường đại học nổi tiếng.",
        "en": "She studies at a well-known university.",
        "point": "a theo âm đầu (a university)"
      },
      {
        "vi": "Trẻ con nên đi ngủ sớm.",
        "en": "Children should go to bed early.",
        "point": "cụm cố định không dùng mạo từ (go to bed)"
      },
      {
        "vi": "Con tôi đi học bằng xe buýt.",
        "en": "My child goes to school by bus.",
        "point": "cụm cố định không dùng mạo từ (go to school)"
      },
      {
        "vi": "Máy tính đã thay đổi nền giáo dục.",
        "en": "Computers have changed education.",
        "point": "số nhiều không mạo từ khi nói về cả một nhóm chung"
      },
      {
        "vi": "Đây là cuốn sổ của tôi.",
        "en": "This is my notebook.",
        "point": "possessive determiner (my) trước danh từ"
      },
      {
        "vi": "Những chiếc túi này rẻ hơn những chiếc kia.",
        "en": "These bags are cheaper than those.",
        "point": "determiner chỉ định this/that/these/those"
      }
    ]
  },
  "pronouns-possessives": {
    "instruction": "Dịch các câu sau, chú ý dùng đúng đại từ chủ ngữ, đại từ tân ngữ, sở hữu tính từ/sở hữu đại từ, và đại từ phản thân.",
    "items": [
      {
        "vi": "Anna có một cái laptop. Cô ấy dùng nó mỗi ngày.",
        "en": "Anna has a laptop. She uses it every day.",
        "point": "đại từ chủ ngữ và đại từ tân ngữ (she, it)"
      },
      {
        "vi": "Hãy giúp tôi với bài tập này.",
        "en": "Please help me with this homework.",
        "point": "đại từ tân ngữ (me)"
      },
      {
        "vi": "Đây là cái bút của tôi.",
        "en": "This is my pen.",
        "point": "possessive adjective (my) trước danh từ"
      },
      {
        "vi": "Cái bút này là của tôi.",
        "en": "This pen is mine.",
        "point": "possessive pronoun đứng một mình (mine)"
      },
      {
        "vi": "Cô ấy tự học tiếng Anh.",
        "en": "She taught herself English.",
        "point": "đại từ phản thân (herself)"
      },
      {
        "vi": "Trời đang mưa.",
        "en": "It is raining.",
        "point": "it dùng cho thời tiết"
      },
      {
        "vi": "Cái màu đỏ rẻ hơn.",
        "en": "The red one is cheaper.",
        "point": "one thay cho danh từ để tránh lặp"
      },
      {
        "vi": "John và tôi sẽ đi dự tiệc.",
        "en": "John and I will go to the party.",
        "point": "đại từ chủ ngữ I sau danh từ riêng (John and I)"
      },
      {
        "vi": "Khi Lan gặp Mai, Lan đã mỉm cười.",
        "en": "When Lan met Mai, Lan smiled.",
        "point": "tránh đại từ mơ hồ, nhắc lại danh từ cho rõ nghĩa"
      }
    ]
  },
  "adjectives-adverbs": {
    "instruction": "Dịch các câu sau, chú ý phân biệt khi nào dùng tính từ (miêu tả danh từ/sau động từ nối) và khi nào dùng trạng từ (miêu tả động từ, tính từ khác).",
    "items": [
      {
        "vi": "Anh ấy là một tài xế cẩn thận.",
        "en": "He is a careful driver.",
        "point": "tính từ đứng trước danh từ"
      },
      {
        "vi": "Cô ấy trông có vẻ cẩn thận.",
        "en": "She looks careful.",
        "point": "tính từ sau động từ nối look"
      },
      {
        "vi": "Cô ấy lái xe cẩn thận.",
        "en": "She drives carefully.",
        "point": "trạng từ chỉ cách thức sau động từ"
      },
      {
        "vi": "Cô ấy thường đọc sách.",
        "en": "She often reads.",
        "point": "trạng từ tần suất trước động từ thường"
      },
      {
        "vi": "Anh ấy nói khá chậm.",
        "en": "He speaks quite slowly.",
        "point": "trạng từ chỉ mức độ trước trạng từ khác"
      },
      {
        "vi": "Đó là một cái bàn gỗ tròn màu nâu cũ kỹ xinh xắn.",
        "en": "It is a lovely old round brown wooden table.",
        "point": "thứ tự nhiều tính từ (opinion-age-shape-color-material)"
      },
      {
        "vi": "Tôi cảm thấy tệ về chuyện đó.",
        "en": "I feel bad about that.",
        "point": "tính từ sau động từ nối feel, không dùng trạng từ"
      },
      {
        "vi": "Anh ấy làm việc rất chăm chỉ.",
        "en": "He works very hard.",
        "point": "hard là trạng từ chỉ cách thức, khác với hardly"
      },
      {
        "vi": "Gần đây tôi bận lắm.",
        "en": "I have been busy lately.",
        "point": "lately (gần đây) khác với late (muộn)"
      },
      {
        "vi": "Anh ấy giải thích rõ ràng.",
        "en": "He explains clearly.",
        "point": "trạng từ bổ nghĩa cho động từ"
      }
    ]
  },
  "phrases-vs-clauses": {
    "instruction": "Dịch các câu sau, chú ý phân biệt cụm từ (phrase, không có đủ chủ-vị) và mệnh đề (clause, có chủ-vị), kể cả dạng mệnh đề rút gọn.",
    "items": [
      {
        "vi": "Cô ấy đã mỉm cười.",
        "en": "She smiled.",
        "point": "independent clause đứng thành câu hoàn chỉnh"
      },
      {
        "vi": "Cô ấy đã nghỉ làm vì cô ấy bị ốm.",
        "en": "She stayed home from work because she was sick.",
        "point": "dependent clause (because) đi kèm mệnh đề chính"
      },
      {
        "vi": "Cuốn sách ở trên bàn.",
        "en": "The book is on the desk.",
        "point": "prepositional phrase (on the desk)"
      },
      {
        "vi": "Cậu bé cao đó là bạn tôi.",
        "en": "The tall boy is my friend.",
        "point": "noun phrase làm chủ ngữ"
      },
      {
        "vi": "Anh ấy đã làm việc này suốt cả buổi sáng.",
        "en": "He has been working on this all morning.",
        "point": "verb phrase (has been working)"
      },
      {
        "vi": "Khi trời mưa, chúng tôi ở trong nhà.",
        "en": "When it rains, we stay inside.",
        "point": "dependent clause không thể đứng một mình, cần mệnh đề chính"
      },
      {
        "vi": "Vì mệt, cô ấy đã đi ngủ sớm.",
        "en": "Feeling tired, she went to bed early.",
        "point": "participle clause rút gọn từ mệnh đề nguyên nhân"
      },
      {
        "vi": "Người đàn ông đang đứng ở cửa là chú tôi.",
        "en": "The man standing at the door is my uncle.",
        "point": "reduced relative clause thay cho who is standing"
      }
    ]
  },
  "sentence-types": {
    "instruction": "Dịch các câu sau, chú ý chọn đúng loại câu theo chức năng (statement/question/command/exclamation) và cấu trúc (simple/compound/complex/compound-complex).",
    "items": [
      {
        "vi": "Cô ấy đọc sách mỗi tối.",
        "en": "She reads every night.",
        "point": "simple sentence - statement"
      },
      {
        "vi": "Bạn có thích trà không?",
        "en": "Do you like tea?",
        "point": "question"
      },
      {
        "vi": "Hãy đóng cửa lại.",
        "en": "Close the door.",
        "point": "command"
      },
      {
        "vi": "Bức tranh này đẹp quá!",
        "en": "What a beautiful painting!",
        "point": "exclamation"
      },
      {
        "vi": "Cô ấy đọc sách, còn anh ấy viết bài.",
        "en": "She reads, and he writes.",
        "point": "compound sentence - hai mệnh đề độc lập nối bằng comma + and"
      },
      {
        "vi": "Cô ấy đọc sách vì cô ấy thích học hỏi.",
        "en": "She reads because she enjoys learning.",
        "point": "complex sentence với mệnh đề phụ because"
      },
      {
        "vi": "Mặc dù trời mưa, chúng tôi vẫn đi bộ.",
        "en": "Although it was raining, we went for a walk.",
        "point": "complex sentence với mệnh đề phụ although"
      },
      {
        "vi": "Cô ấy đọc sách, còn anh ấy nghe nhạc trong khi họ học bài.",
        "en": "She reads, and he listens while they study.",
        "point": "compound-complex sentence"
      },
      {
        "vi": "Trời đang mưa; chúng tôi vẫn quyết định ra ngoài.",
        "en": "It was raining; we still decided to go out.",
        "point": "nối hai mệnh đề độc lập bằng dấu chấm phẩy"
      }
    ]
  },
  "subject-verb-agreement": {
    "instruction": "Dịch các câu sau, chú ý chia động từ khớp đúng với chủ ngữ thật, kể cả các trường hợp đặc biệt như each/every, a number of, either...or, danh từ tập hợp.",
    "items": [
      {
        "vi": "Mỗi học sinh đều có một tấm thẻ.",
        "en": "Each student has a card.",
        "point": "each + động từ số ít"
      },
      {
        "vi": "Một số học sinh vắng mặt hôm nay.",
        "en": "A number of students are absent today.",
        "point": "a number of + động từ số nhiều"
      },
      {
        "vi": "Số lượng học sinh đang tăng lên.",
        "en": "The number of students is increasing.",
        "point": "the number of + động từ số ít"
      },
      {
        "vi": "Danh sách các món đồ thì dài.",
        "en": "The list of items is long.",
        "point": "chủ ngữ thật là danh từ trung tâm (list), không phải items"
      },
      {
        "vi": "Hoặc cô giáo hoặc các học sinh chịu trách nhiệm về việc này.",
        "en": "Either the teacher or the students are responsible for this.",
        "point": "either...or - động từ hòa hợp với chủ ngữ gần nhất"
      },
      {
        "vi": "Cả con mèo lẫn những con chó đều không thích tắm.",
        "en": "Neither the cat nor the dogs like bathing.",
        "point": "neither...nor - động từ hòa hợp với chủ ngữ gần nhất"
      },
      {
        "vi": "Môn kinh tế học rất thú vị.",
        "en": "Economics is fascinating.",
        "point": "tên môn học có -s vẫn dùng động từ số ít"
      },
      {
        "vi": "Đội của chúng tôi đang thắng trận đấu.",
        "en": "Our team is winning the match.",
        "point": "danh từ tập hợp (team) dùng số ít"
      },
      {
        "vi": "Mọi người đều biết câu trả lời.",
        "en": "Everyone knows the answer.",
        "point": "everyone + động từ số ít"
      },
      {
        "vi": "Không ai trong số họ đến muộn.",
        "en": "None of them was late.",
        "point": "none có thể đi với động từ số ít"
      }
    ]
  },
  "present-simple": {
    "instruction": "Dịch các câu sau sang thì hiện tại đơn, chú ý thêm -s/-es cho ngôi thứ ba số ít và dùng đúng do/does ở câu phủ định, nghi vấn.",
    "items": [
      {
        "vi": "Tôi đi làm lúc 8 giờ.",
        "en": "I go to work at 8.",
        "point": "thì hiện tại đơn - thói quen"
      },
      {
        "vi": "Nước sôi ở 100 độ C.",
        "en": "Water boils at 100°C.",
        "point": "thì hiện tại đơn - sự thật hiển nhiên"
      },
      {
        "vi": "Cô ấy làm việc ở ngân hàng.",
        "en": "She works at a bank.",
        "point": "thêm -s cho ngôi thứ ba số ít"
      },
      {
        "vi": "Anh ấy không thích cà phê.",
        "en": "He does not like coffee.",
        "point": "phủ định với does not"
      },
      {
        "vi": "Bạn có thích trà xanh không?",
        "en": "Do you like green tea?",
        "point": "câu hỏi với trợ động từ Do"
      },
      {
        "vi": "Tôi không bao giờ ăn sáng.",
        "en": "I never eat breakfast.",
        "point": "trạng từ tần suất never"
      },
      {
        "vi": "Chúng tôi học tiếng Anh mỗi ngày.",
        "en": "We study English every day.",
        "point": "dấu hiệu thời gian every day"
      },
      {
        "vi": "Cô ấy biết câu trả lời.",
        "en": "She knows the answer.",
        "point": "động từ trạng thái (know) ở hiện tại đơn"
      },
      {
        "vi": "Chuyến tàu khởi hành lúc 6 giờ ngày mai.",
        "en": "The train leaves at 6 tomorrow.",
        "point": "hiện tại đơn cho lịch trình cố định trong tương lai"
      },
      {
        "vi": "Cô ấy chơi tennis vào thứ Hai.",
        "en": "She plays tennis on Mondays.",
        "point": "dấu hiệu thời gian on Mondays"
      }
    ]
  },
  "present-continuous": {
    "instruction": "Dịch các câu sau sang thì hiện tại tiếp diễn, chú ý các trường hợp: đang diễn ra, tạm thời, đang thay đổi, kế hoạch gần, và phân biệt với hiện tại đơn.",
    "items": [
      {
        "vi": "Nghe kìa! Đứa bé đang khóc.",
        "en": "Listen! The baby is crying.",
        "point": "hành động đang diễn ra ngay lúc nói"
      },
      {
        "vi": "Tháng này tôi đang ở với dì.",
        "en": "I am living with my aunt this month.",
        "point": "tình huống tạm thời"
      },
      {
        "vi": "Thời tiết đang ngày càng nóng hơn.",
        "en": "The weather is getting hotter.",
        "point": "sự thay đổi dần dần"
      },
      {
        "vi": "Ngày mai chúng tôi sẽ gặp khách hàng.",
        "en": "We are meeting the client tomorrow.",
        "point": "kế hoạch gần trong tương lai"
      },
      {
        "vi": "Tôi đang học ngay bây giờ.",
        "en": "I am studying right now.",
        "point": "dấu hiệu thời gian right now"
      },
      {
        "vi": "Cô ấy hiện không xem TV.",
        "en": "She is not watching TV right now.",
        "point": "câu phủ định ở thì hiện tại tiếp diễn"
      },
      {
        "vi": "Bạn đang làm gì vậy?",
        "en": "What are you doing?",
        "point": "câu hỏi ở thì hiện tại tiếp diễn"
      },
      {
        "vi": "Anh ấy đang cư xử thô lỗ.",
        "en": "He is being rude.",
        "point": "be + adjective ở dạng tiếp diễn chỉ hành vi tạm thời"
      },
      {
        "vi": "Bình thường tôi đi làm bằng xe máy, nhưng tuần này tôi đi làm bằng xe buýt.",
        "en": "I usually go to work by motorbike, but this week I am going to work by bus.",
        "point": "đối chiếu hiện tại đơn (thói quen) và hiện tại tiếp diễn (tạm thời)"
      }
    ]
  },
  "past-simple": {
    "instruction": "Dịch các câu sau sang thì quá khứ đơn, chú ý động từ bất quy tắc, câu phủ định với did not, câu hỏi với did, và chuỗi hành động nối tiếp.",
    "items": [
      {
        "vi": "Tôi đã đến Đà Nẵng vào mùa hè trước.",
        "en": "I visited Da Nang last summer.",
        "point": "quá khứ đơn với mốc thời gian rõ ràng"
      },
      {
        "vi": "Cô ấy đã không gọi tôi hôm qua.",
        "en": "She did not call me yesterday.",
        "point": "phủ định với did not"
      },
      {
        "vi": "Bạn có đi dự tiệc tối qua không?",
        "en": "Did you go to the party last night?",
        "point": "câu hỏi với did"
      },
      {
        "vi": "Anh ấy đã nhìn thấy tôi ở siêu thị.",
        "en": "He saw me at the supermarket.",
        "point": "động từ bất quy tắc (see - saw)"
      },
      {
        "vi": "Anh ấy bước vào, ngồi xuống, và mở laptop.",
        "en": "He entered, sat down, and opened his laptop.",
        "point": "chuỗi hành động nối tiếp trong quá khứ"
      },
      {
        "vi": "Tôi đã chuyển đến đây hai năm trước.",
        "en": "I moved here two years ago.",
        "point": "dấu hiệu thời gian ago"
      },
      {
        "vi": "Cô ấy tốt nghiệp đại học năm 2020.",
        "en": "She graduated from university in 2020.",
        "point": "dấu hiệu thời gian in + năm"
      },
      {
        "vi": "Bạn đã mua cái gì ở chợ?",
        "en": "What did you buy at the market?",
        "point": "câu hỏi Wh- với did, động từ về nguyên mẫu"
      },
      {
        "vi": "Tôi đã gặp anh ấy hôm qua.",
        "en": "I saw him yesterday.",
        "point": "dùng quá khứ đơn chứ không phải hiện tại hoàn thành khi có mốc thời gian đóng"
      }
    ]
  },
  "past-continuous": {
    "instruction": "Dịch các câu sau sang thì quá khứ tiếp diễn, chú ý các trường hợp: hành động đang diễn ra tại một thời điểm, bối cảnh bị chen ngang, hai hành động song song, và thói quen khó chịu với always.",
    "items": [
      {
        "vi": "Lúc nửa đêm cô ấy đang ngủ.",
        "en": "She was sleeping at midnight.",
        "point": "hành động đang diễn ra tại một thời điểm cụ thể"
      },
      {
        "vi": "Tôi đang đọc sách thì cô ấy gọi điện.",
        "en": "I was reading when she called.",
        "point": "hành động dài bị hành động ngắn chen vào (when)"
      },
      {
        "vi": "Chúng tôi đang ăn tối thì mất điện.",
        "en": "We were having dinner when the lights went out.",
        "point": "bối cảnh + hành động chen vào"
      },
      {
        "vi": "Trong khi tôi đang nấu ăn, anh ấy đang dọn dẹp.",
        "en": "While I was cooking, he was cleaning.",
        "point": "hai hành động song song với while"
      },
      {
        "vi": "Lúc 9 giờ tối qua, họ đang lái xe về nhà.",
        "en": "At 9 p.m. yesterday, they were driving home.",
        "point": "hành động đang diễn ra tại mốc thời gian quá khứ"
      },
      {
        "vi": "Anh ấy lúc nào cũng làm mất chìa khóa.",
        "en": "He was always losing his keys.",
        "point": "thói quen gây khó chịu trong quá khứ với always"
      },
      {
        "vi": "Bạn đang làm gì lúc 8 giờ tối qua?",
        "en": "What were you doing at 8 p.m. yesterday?",
        "point": "câu hỏi ở thì quá khứ tiếp diễn"
      },
      {
        "vi": "Cô ấy không đang xem TV khi tôi đến.",
        "en": "She was not watching TV when I arrived.",
        "point": "câu phủ định ở thì quá khứ tiếp diễn"
      }
    ]
  },
  "present-perfect": {
    "instruction": "Dịch các câu sau sang thì hiện tại hoàn thành, chú ý kinh nghiệm, kết quả liên quan đến hiện tại, khoảng thời gian với for/since, và khi nào nên dùng quá khứ đơn thay vì hiện tại hoàn thành.",
    "items": [
      {
        "vi": "Bạn đã bao giờ ăn sushi chưa?",
        "en": "Have you ever tried sushi?",
        "point": "kinh nghiệm với ever"
      },
      {
        "vi": "Anh ấy đã bị gãy chân.",
        "en": "He has broken his leg.",
        "point": "kết quả còn liên quan đến hiện tại"
      },
      {
        "vi": "Chúng tôi đã sống ở đây được năm năm.",
        "en": "We have lived here for five years.",
        "point": "khoảng thời gian với for"
      },
      {
        "vi": "Cô ấy đã làm việc ở đây từ năm 2022.",
        "en": "She has worked here since 2022.",
        "point": "mốc thời gian bắt đầu với since"
      },
      {
        "vi": "Tôi vừa mới hoàn thành báo cáo.",
        "en": "I have just finished the report.",
        "point": "việc vừa xảy ra với just"
      },
      {
        "vi": "Tôi đã ăn tối rồi.",
        "en": "I have already had dinner.",
        "point": "dấu hiệu already"
      },
      {
        "vi": "Bạn đã làm xong bài tập chưa?",
        "en": "Have you finished your homework yet?",
        "point": "dấu hiệu yet trong câu hỏi"
      },
      {
        "vi": "Tôi chưa bao giờ đến Nhật Bản.",
        "en": "I have never been to Japan.",
        "point": "dấu hiệu never"
      },
      {
        "vi": "Tôi đã gặp cô ấy tuần trước.",
        "en": "I saw her last week.",
        "point": "dùng quá khứ đơn vì có mốc thời gian đã đóng (last week)"
      },
      {
        "vi": "Tôi làm mất chìa khóa của tôi rồi.",
        "en": "I have lost my key.",
        "point": "kết quả hiện tại vẫn còn (chưa tìm lại được)"
      }
    ]
  },
  "present-perfect-continuous": {
    "instruction": "Dịch các câu sau sang thì hiện tại hoàn thành tiếp diễn, chú ý nhấn mạnh quá trình/thời lượng và phân biệt với hiện tại hoàn thành thường (nhấn kết quả).",
    "items": [
      {
        "vi": "Tôi đã học được ba tiếng rồi.",
        "en": "I have been studying for three hours.",
        "point": "nhấn thời lượng với for"
      },
      {
        "vi": "Cô ấy đã làm việc ở đây từ năm 2022.",
        "en": "She has been working here since 2022.",
        "point": "nhấn quá trình với since"
      },
      {
        "vi": "Chúng tôi đã chờ rất lâu rồi.",
        "en": "We have been waiting for a long time.",
        "point": "nhấn thời lượng kéo dài"
      },
      {
        "vi": "Anh ấy mệt vì anh ấy đã chạy bộ.",
        "en": "He is tired because he has been running.",
        "point": "giải thích nguyên nhân hiện tại bằng quá trình vừa diễn ra"
      },
      {
        "vi": "Tôi đã viết xong ba email.",
        "en": "I have written three emails.",
        "point": "nhấn kết quả/số lượng nên dùng present perfect thường, không dùng continuous"
      },
      {
        "vi": "Bạn đã làm việc đó bao lâu rồi?",
        "en": "How long have you been doing that?",
        "point": "câu hỏi how long với hiện tại hoàn thành tiếp diễn"
      },
      {
        "vi": "Trời đã mưa suốt cả ngày.",
        "en": "It has been raining all day.",
        "point": "nhấn quá trình kéo dài suốt một khoảng thời gian"
      }
    ]
  },
  "past-perfect": {
    "instruction": "Dịch các câu sau sang thì quá khứ hoàn thành, chú ý dùng had + V3 cho hành động xảy ra trước một hành động/mốc khác trong quá khứ.",
    "items": [
      {
        "vi": "Khi tôi đến, bộ phim đã bắt đầu rồi.",
        "en": "When I arrived, the movie had started.",
        "point": "hành động xảy ra trước một hành động khác trong quá khứ"
      },
      {
        "vi": "Cô ấy đã hoàn thành báo cáo trước khi cuộc họp bắt đầu.",
        "en": "She had finished the report before the meeting began.",
        "point": "quá khứ hoàn thành với before"
      },
      {
        "vi": "Anh ấy nói rằng anh ấy đã ăn tối rồi.",
        "en": "He said that he had already had dinner.",
        "point": "quá khứ hoàn thành trong câu tường thuật"
      },
      {
        "vi": "Nếu tôi biết sớm hơn, tôi đã giúp bạn rồi.",
        "en": "If I had known earlier, I would have helped you.",
        "point": "quá khứ hoàn thành trong câu điều kiện loại 3"
      },
      {
        "vi": "Anh ấy đã rời đi trước khi tôi gọi cô ấy.",
        "en": "He had left before I called her.",
        "point": "nhấn rõ hành động nào xảy ra trước"
      },
      {
        "vi": "Cô ấy chưa từng đến Paris trước khi cô ấy chuyển tới Pháp.",
        "en": "She had never been to Paris before she moved to France.",
        "point": "phủ định never với quá khứ hoàn thành"
      },
      {
        "vi": "Bạn đã ăn gì trước khi đến đây chưa?",
        "en": "Had you eaten anything before you arrived?",
        "point": "câu hỏi ở thì quá khứ hoàn thành"
      }
    ]
  },
  "past-perfect-continuous": {
    "instruction": "Dịch các câu sau sang thì quá khứ hoàn thành tiếp diễn, chú ý nhấn mạnh quá trình kéo dài trước một mốc/hành động khác trong quá khứ.",
    "items": [
      {
        "vi": "Anh ấy đã làm việc ở đó được mười năm trước khi anh ấy chuyển đi.",
        "en": "He had been working there for ten years before he moved.",
        "point": "nhấn thời lượng trước mốc quá khứ"
      },
      {
        "vi": "Mắt cô ấy đỏ vì cô ấy đã khóc.",
        "en": "Her eyes were red because she had been crying.",
        "point": "giải thích nguyên nhân của trạng thái quá khứ"
      },
      {
        "vi": "Họ đã chờ được hai tiếng trước khi xe buýt đến.",
        "en": "They had been waiting for two hours before the bus arrived.",
        "point": "quá trình kéo dài trước khi hành động khác xảy ra"
      },
      {
        "vi": "Cô ấy mệt vì cô ấy đã học suốt đêm.",
        "en": "She was tired because she had been studying all night.",
        "point": "nhấn quá trình kéo dài gây ra trạng thái quá khứ"
      },
      {
        "vi": "Anh ấy đã sống ở đó từ năm 2010 trước khi anh ấy nghỉ hưu.",
        "en": "He had been living there since 2010 before he retired.",
        "point": "mốc bắt đầu với since trước một mốc quá khứ khác"
      },
      {
        "vi": "Bạn đã làm việc đó bao lâu trước khi bạn nghỉ việc?",
        "en": "How long had you been working on that before you quit?",
        "point": "câu hỏi how long ở thì quá khứ hoàn thành tiếp diễn"
      }
    ]
  },
  "future-simple": {
    "instruction": "Dịch các câu sau sang thì tương lai đơn với will, chú ý quyết định tức thời, lời hứa, dự đoán, và việc dùng thì hiện tại (không dùng will) trong mệnh đề thời gian/điều kiện.",
    "items": [
      {
        "vi": "Tôi sẽ giúp bạn.",
        "en": "I will help you.",
        "point": "quyết định tức thời tại thời điểm nói"
      },
      {
        "vi": "Tôi sẽ không bao giờ làm điều đó nữa.",
        "en": "I will never do that again.",
        "point": "lời hứa/cam kết"
      },
      {
        "vi": "Có lẽ trời sẽ mưa vào ngày mai.",
        "en": "It will probably rain tomorrow.",
        "point": "dự đoán với trạng từ xác suất probably"
      },
      {
        "vi": "Để tôi mở cửa cho.",
        "en": "I will open the door.",
        "point": "đề nghị/quyết định ngay lúc nói"
      },
      {
        "vi": "Con người sẽ sống lâu hơn trong tương lai.",
        "en": "People will live longer in the future.",
        "point": "dự đoán trung tính về tương lai"
      },
      {
        "vi": "Gọi cho tôi khi bạn đến nơi nhé.",
        "en": "Call me when you arrive.",
        "point": "dùng hiện tại đơn, không dùng will, trong mệnh đề thời gian"
      },
      {
        "vi": "Nếu trời mưa, chúng tôi sẽ ở nhà.",
        "en": "If it rains, we will stay home.",
        "point": "mệnh đề if dùng hiện tại đơn, mệnh đề chính dùng will"
      },
      {
        "vi": "Anh ấy chắc chắn sẽ đến muộn.",
        "en": "He will certainly be late.",
        "point": "trạng từ chắc chắn certainly với will"
      },
      {
        "vi": "Ồ, điện thoại đang reo kìa, để tôi nghe.",
        "en": "Oh, the phone's ringing, I'll answer it.",
        "point": "quyết định bộc phát tại thời điểm nói (will, không phải going to)"
      }
    ]
  },
  "future-continuous": {
    "instruction": "Dịch các câu sau sang thì tương lai tiếp diễn, chú ý nhấn mạnh một hành động sẽ đang diễn ra tại một thời điểm cụ thể trong tương lai.",
    "items": [
      {
        "vi": "Lúc 8 giờ tối nay, tôi sẽ đang học bài.",
        "en": "At 8 p.m. tonight, I will be studying.",
        "point": "hành động đang diễn ra tại một mốc tương lai"
      },
      {
        "vi": "Giờ này tuần sau, họ sẽ đang bay đến Tokyo.",
        "en": "This time next week, they will be flying to Tokyo.",
        "point": "hành động đang diễn ra tại một mốc tương lai xa hơn"
      },
      {
        "vi": "Vào buổi trưa, cô ấy sẽ đang ăn trưa.",
        "en": "At noon, she will be having lunch.",
        "point": "quá trình đang diễn ra tại mốc tương lai"
      },
      {
        "vi": "Tôi sẽ làm việc cả ngày mai.",
        "en": "I will be working all day tomorrow.",
        "point": "kế hoạch như bối cảnh kéo dài trong tương lai"
      },
      {
        "vi": "Tối nay bạn có định dùng xe không?",
        "en": "Will you be using the car tonight?",
        "point": "câu hỏi lịch sự về kế hoạch của người khác"
      },
      {
        "vi": "Tôi sẽ hoàn thành việc đó vào ngày mai.",
        "en": "I will finish it tomorrow.",
        "point": "đối chiếu với future simple - chỉ nhấn việc sẽ xảy ra, không nhấn quá trình"
      }
    ]
  },
  "future-perfect": {
    "instruction": "Dịch các câu sau sang thì tương lai hoàn thành, chú ý diễn tả một việc sẽ hoàn tất trước một mốc thời gian trong tương lai (by, by the time, before).",
    "items": [
      {
        "vi": "Đến tháng Sáu năm sau, tôi sẽ đã tốt nghiệp.",
        "en": "By next June, I will have graduated.",
        "point": "hoàn tất trước mốc tương lai với by"
      },
      {
        "vi": "Cô ấy sẽ hoàn thành báo cáo trước 5 giờ chiều.",
        "en": "She will have finished the report by 5 p.m.",
        "point": "hoàn tất trước một giờ cụ thể trong tương lai"
      },
      {
        "vi": "Đến khi bạn về đến nhà, tôi sẽ đã nấu xong bữa tối.",
        "en": "By the time you get home, I will have cooked dinner.",
        "point": "hoàn tất trước mốc với by the time"
      },
      {
        "vi": "Chúng tôi sẽ đã hoàn thành dự án trước khi kỳ nghỉ bắt đầu.",
        "en": "We will have finished the project before the holiday starts.",
        "point": "hoàn tất trước mốc với before"
      },
      {
        "vi": "Đến lúc đó, họ đã dọn nhà xong chưa?",
        "en": "Will they have moved out by then?",
        "point": "câu hỏi ở thì tương lai hoàn thành"
      },
      {
        "vi": "Tôi sẽ làm xong việc đó vào ngày mai.",
        "en": "I will finish it tomorrow.",
        "point": "đối chiếu với future simple - không có mốc hoàn tất nên không cần future perfect"
      }
    ]
  },
  "future-perfect-continuous": {
    "instruction": "Dịch các câu sau sang thì tương lai hoàn thành tiếp diễn, chú ý nhấn mạnh thời lượng của một quá trình tính đến một mốc trong tương lai.",
    "items": [
      {
        "vi": "Đến tháng sau, tôi sẽ đã làm việc ở đây được năm năm.",
        "en": "By next month, I will have been working here for five years.",
        "point": "nhấn thời lượng tính đến mốc tương lai (by + for)"
      },
      {
        "vi": "Lúc 10 giờ tối, cô ấy sẽ đã học được sáu tiếng.",
        "en": "At 10 p.m., she will have been studying for six hours.",
        "point": "thời lượng kéo dài đến một mốc giờ cụ thể"
      },
      {
        "vi": "Đến 6 giờ, tôi sẽ đã hoàn thành công việc.",
        "en": "By 6, I will have finished the task.",
        "point": "đối chiếu với future perfect - nhấn sự hoàn tất, không nhấn thời lượng"
      },
      {
        "vi": "Đến 6 giờ, tôi sẽ đã làm việc được ba tiếng.",
        "en": "By 6, I will have been working for three hours.",
        "point": "future perfect continuous - nhấn thời lượng của quá trình"
      },
      {
        "vi": "Đến khi bạn tốt nghiệp, bạn sẽ đã học tiếng Anh được mười năm.",
        "en": "By the time you graduate, you will have been learning English for ten years.",
        "point": "thời lượng tính đến mốc với by the time"
      },
      {
        "vi": "Đến lúc đó, bạn sẽ đã làm việc ở công ty được bao lâu?",
        "en": "How long will you have been working at the company by then?",
        "point": "câu hỏi how long ở thì tương lai hoàn thành tiếp diễn"
      }
    ]
  },
  "question-forms": {
    "instruction": "Dịch các câu sau, chú ý chọn đúng trợ động từ (do/does/did/is/are/can) và trật tự từ cho từng kiểu câu hỏi, kể cả câu hỏi gián tiếp và câu hỏi đuôi.",
    "items": [
      {
        "vi": "Bạn có thích cà phê không?",
        "en": "Do you like coffee?",
        "point": "Yes/No question với do"
      },
      {
        "vi": "Cô ấy có đang bận không?",
        "en": "Is she busy right now?",
        "point": "Yes/No question với to be"
      },
      {
        "vi": "Anh ấy đã đi đâu vậy?",
        "en": "Where did he go?",
        "point": "Wh-question với did, tránh chia thì hai lần"
      },
      {
        "vi": "Bạn có thể giúp tôi được không?",
        "en": "Can you help me?",
        "point": "Yes/No question với modal verb"
      },
      {
        "vi": "Ai đã gọi điện cho bạn?",
        "en": "Who called you?",
        "point": "Subject question, không cần do-support"
      },
      {
        "vi": "Điều gì đã xảy ra ở đó?",
        "en": "What happened there?",
        "point": "Subject question, không cần do-support"
      },
      {
        "vi": "Bạn có thể cho tôi biết ga tàu ở đâu không?",
        "en": "Could you tell me where the station is?",
        "point": "Câu hỏi gián tiếp, không đảo trật tự"
      },
      {
        "vi": "Bạn đã sẵn sàng rồi, phải không?",
        "en": "You're ready, aren't you?",
        "point": "Câu hỏi đuôi (tag question)"
      },
      {
        "vi": "Cô ấy đã mua gì ở chợ?",
        "en": "What did she buy at the market?",
        "point": "Wh-question với did, động từ chính giữ nguyên mẫu"
      }
    ]
  },
  "negatives": {
    "instruction": "Dịch các câu phủ định sau, chọn đúng vị trí và dạng của 'not' theo từng loại động từ, và tránh dùng phủ định kép.",
    "items": [
      {
        "vi": "Anh ấy không làm việc ở đây.",
        "en": "He does not work here.",
        "point": "Phủ định động từ thường ở hiện tại (does not)"
      },
      {
        "vi": "Chúng tôi đã không gặp cô ấy hôm qua.",
        "en": "We did not see her yesterday.",
        "point": "Phủ định động từ thường ở quá khứ (did not)"
      },
      {
        "vi": "Tôi không bận vào lúc này.",
        "en": "I am not busy right now.",
        "point": "Phủ định với to be (be + not)"
      },
      {
        "vi": "Bạn không nên lo lắng quá nhiều.",
        "en": "You should not worry too much.",
        "point": "Phủ định với modal verb (modal + not)"
      },
      {
        "vi": "Tôi không biết gì về chuyện đó cả.",
        "en": "I don't know anything about that.",
        "point": "Tránh phủ định kép, dùng anything thay vì nothing"
      },
      {
        "vi": "Không phải tất cả học sinh đều thích môn toán.",
        "en": "Not all students like math.",
        "point": "Phủ định bộ phận (not all... khác all... not)"
      },
      {
        "vi": "Anh ấy chẳng bao giờ đến muộn cả.",
        "en": "He is never late.",
        "point": "Từ phủ định never thay cho not"
      },
      {
        "vi": "Không ai gọi điện cho tôi cả.",
        "en": "Nobody called me.",
        "point": "Từ phủ định nobody, chỉ dùng một yếu tố phủ định"
      },
      {
        "vi": "Họ không thể bơi được.",
        "en": "They cannot swim.",
        "point": "Phủ định với modal verb cannot"
      },
      {
        "vi": "Cô ấy hiếm khi đến muộn.",
        "en": "She hardly ever arrives late.",
        "point": "Phủ định nhẹ với hardly"
      }
    ]
  },
  "conjunctions": {
    "instruction": "Dịch các câu sau, chọn đúng liên từ coordinating hoặc subordinating phù hợp với quan hệ ý nghĩa (thêm ý, đối lập, nguyên nhân, kết quả) và đặt dấu phẩy đúng chỗ.",
    "items": [
      {
        "vi": "Tôi mệt nhưng tôi vẫn hoàn thành báo cáo.",
        "en": "I was tired, but I finished the report.",
        "point": "Coordinating conjunction 'but' (đối lập)"
      },
      {
        "vi": "Cô ấy ở nhà vì trời mưa.",
        "en": "She stayed home because it was raining.",
        "point": "Subordinating conjunction 'because' (nguyên nhân)"
      },
      {
        "vi": "Dù đến muộn, anh ấy vẫn tham gia cuộc họp.",
        "en": "Although he was late, he still joined the meeting.",
        "point": "Subordinating conjunction 'although' đứng đầu câu, có dấu phẩy"
      },
      {
        "vi": "Tôi sẽ gọi cho bạn hoặc gửi email cho bạn.",
        "en": "I will call you or email you.",
        "point": "Coordinating conjunction 'or'"
      },
      {
        "vi": "Cô ấy thích đọc sách, viết lách và nói chuyện.",
        "en": "She likes reading, writing, and speaking.",
        "point": "Liên từ 'and' nối danh sách song song"
      },
      {
        "vi": "Vì trời đã tối, chúng tôi quyết định về nhà.",
        "en": "Since it was already dark, we decided to go home.",
        "point": "Subordinating conjunction 'since' (sắc thái văn viết)"
      },
      {
        "vi": "Trời mưa to, vì vậy chúng tôi hủy chuyến đi.",
        "en": "It rained heavily, so we cancelled the trip.",
        "point": "Coordinating conjunction 'so' (kết quả)"
      },
      {
        "vi": "Anh ấy không giàu, tuy nhiên anh ấy rất hạnh phúc.",
        "en": "He is not rich; however, he is very happy.",
        "point": "Connector 'however' trong văn học thuật"
      },
      {
        "vi": "Khi tôi đến, cô ấy đã rời đi rồi.",
        "en": "When I arrived, she had already left.",
        "point": "Subordinating conjunction 'when'"
      }
    ]
  },
  "comparisons": {
    "instruction": "Dịch các câu so sánh sau, chọn đúng công thức cho từng loại: comparative, superlative, ngang bằng, kém hơn, fewer/less, và so sánh tăng dần.",
    "items": [
      {
        "vi": "Cô ấy cao hơn tôi.",
        "en": "She is taller than me.",
        "point": "So sánh hơn với tính từ ngắn (-er than)"
      },
      {
        "vi": "Cuốn sách này thú vị hơn cuốn kia.",
        "en": "This book is more interesting than that one.",
        "point": "So sánh hơn với tính từ dài (more... than)"
      },
      {
        "vi": "Anh ấy lái xe cẩn thận hơn anh trai mình.",
        "en": "He drives more carefully than his brother.",
        "point": "So sánh hơn với trạng từ (more... than)"
      },
      {
        "vi": "Cô ấy là người chạy nhanh nhất đội.",
        "en": "She is the fastest runner in the team.",
        "point": "So sánh nhất với tính từ ngắn (the -est)"
      },
      {
        "vi": "Đây là khách sạn đắt nhất thành phố.",
        "en": "This is the most expensive hotel in the city.",
        "point": "So sánh nhất với tính từ dài (the most)"
      },
      {
        "vi": "Anh ấy cao bằng bố mình.",
        "en": "He is as tall as his father.",
        "point": "So sánh ngang bằng (as... as)"
      },
      {
        "vi": "Cái túi này không nặng bằng cái kia.",
        "en": "This bag is not as heavy as that one.",
        "point": "So sánh kém hơn (not as/so... as)"
      },
      {
        "vi": "Tôi có ít sách hơn bạn.",
        "en": "I have fewer books than you.",
        "point": "Fewer với danh từ đếm được"
      },
      {
        "vi": "Chúng ta cần ít nước hơn.",
        "en": "We need less water.",
        "point": "Less với danh từ không đếm được"
      },
      {
        "vi": "Bạn càng luyện tập nhiều, bạn càng giỏi hơn.",
        "en": "The more you practice, the better you get.",
        "point": "So sánh tăng dần (the more..., the more...)"
      },
      {
        "vi": "Chiếc điện thoại này giống hệt điện thoại của tôi.",
        "en": "This phone is the same as mine.",
        "point": "Cấu trúc giống nhau (the same as)"
      },
      {
        "vi": "Kỳ thi này không khó bằng kỳ thi trước.",
        "en": "This exam is not as difficult as the last one.",
        "point": "So sánh kém hơn (not as... as)"
      }
    ]
  },
  "imperatives-requests": {
    "instruction": "Dịch các câu sau bằng đúng dạng imperative (ẩn chủ ngữ, dùng động từ nguyên mẫu), chú ý dạng phủ định, đề nghị cùng làm và mức độ lịch sự.",
    "items": [
      {
        "vi": "Mở cửa sổ ra.",
        "en": "Open the window.",
        "point": "Mệnh lệnh trực tiếp (V + ...)"
      },
      {
        "vi": "Đừng chạm vào cái đó.",
        "en": "Don't touch that.",
        "point": "Mệnh lệnh phủ định (Don't + V)"
      },
      {
        "vi": "Làm ơn ngồi xuống.",
        "en": "Please sit down.",
        "point": "Yêu cầu lịch sự (Please + V)"
      },
      {
        "vi": "Chúng ta bắt đầu ngay bây giờ nhé.",
        "en": "Let's start now.",
        "point": "Đề nghị cùng làm (Let's + V)"
      },
      {
        "vi": "Đừng cãi nhau nữa.",
        "en": "Let's not argue anymore.",
        "point": "Phủ định của đề nghị cùng làm (Let's not + V)"
      },
      {
        "vi": "Cẩn thận với cái ly đó.",
        "en": "Be careful with the glass.",
        "point": "Lời nhắc/cảnh báo (Be careful...)"
      },
      {
        "vi": "Bạn có thể mở giúp tôi file đó được không?",
        "en": "Could you open the file?",
        "point": "Chuyển imperative thành request lịch sự (could)"
      },
      {
        "vi": "Mời bạn dùng bữa.",
        "en": "Enjoy your meal.",
        "point": "Imperative cố định trong giao tiếp"
      },
      {
        "vi": "Xin mời ngồi.",
        "en": "Have a seat.",
        "point": "Imperative cố định trong giao tiếp"
      }
    ]
  },
  "relative-clauses": {
    "instruction": "Dịch các câu sau bằng mệnh đề quan hệ đúng đại từ (who/which/that/whose/where), phân biệt mệnh đề xác định và không xác định.",
    "items": [
      {
        "vi": "Người đàn ông đã gọi cho bạn là sếp của tôi.",
        "en": "The man who called you is my boss.",
        "point": "Đại từ quan hệ who (chỉ người)"
      },
      {
        "vi": "Cuốn sách mà tôi mua rất hữu ích.",
        "en": "The book that I bought is useful.",
        "point": "Đại từ quan hệ that (mệnh đề xác định)"
      },
      {
        "vi": "Học sinh nào học mỗi ngày sẽ tiến bộ nhanh hơn.",
        "en": "Students who study daily improve faster.",
        "point": "Mệnh đề xác định, không dấu phẩy"
      },
      {
        "vi": "Laptop của tôi, mà tôi mua năm ngoái, vẫn chạy tốt.",
        "en": "My laptop, which I bought last year, still works well.",
        "point": "Mệnh đề không xác định (which), có dấu phẩy"
      },
      {
        "vi": "Cô gái có anh trai sống ở nước ngoài là bạn tôi.",
        "en": "The girl whose brother lives abroad is my friend.",
        "point": "Đại từ quan hệ sở hữu whose"
      },
      {
        "vi": "Bộ phim mà chúng tôi đã xem rất hay.",
        "en": "The movie we watched was great.",
        "point": "Lược bỏ đại từ quan hệ làm tân ngữ"
      },
      {
        "vi": "Công ty mà tôi làm việc nằm ở trung tâm thành phố.",
        "en": "The company I work for is located downtown.",
        "point": "Giới từ đứng cuối mệnh đề quan hệ"
      },
      {
        "vi": "Đây là ngôi nhà nơi tôi lớn lên.",
        "en": "This is the house where I grew up.",
        "point": "Đại từ quan hệ chỉ nơi chốn (where)"
      }
    ]
  },
  "reported-speech": {
    "instruction": "Dịch các câu tường thuật sau, lùi thì đúng theo reporting verb, đổi đại từ/mốc thời gian, và chọn đúng cấu trúc cho câu hỏi, mệnh lệnh, lời hứa, trừ khi câu gốc là chân lý.",
    "items": [
      {
        "vi": "Cô ấy nói rằng cô ấy mệt.",
        "en": "She said that she was tired.",
        "point": "Lùi thì present simple sang past simple"
      },
      {
        "vi": "Anh ấy nói rằng anh ấy đang làm việc.",
        "en": "He said that he was working.",
        "point": "Lùi thì present continuous sang past continuous"
      },
      {
        "vi": "Cô ấy nói rằng cô ấy đã hoàn thành công việc rồi.",
        "en": "She said that she had finished the work.",
        "point": "Lùi thì present perfect sang past perfect"
      },
      {
        "vi": "Anh ấy nói rằng anh ấy sẽ gọi cho tôi.",
        "en": "He said that he would call me.",
        "point": "Lùi will sang would"
      },
      {
        "vi": "Cô ấy hỏi liệu tôi có thể giúp cô ấy không.",
        "en": "She asked if I could help her.",
        "point": "Câu hỏi yes/no dùng if, lùi can sang could"
      },
      {
        "vi": "Anh ấy hỏi tôi đang ở đâu.",
        "en": "He asked where I was.",
        "point": "Câu hỏi wh- tường thuật, không đảo trật tự"
      },
      {
        "vi": "Anh ấy bảo tôi ngồi xuống.",
        "en": "He told me to sit down.",
        "point": "Tường thuật mệnh lệnh (tell + O + to V)"
      },
      {
        "vi": "Cô giáo nói rằng trái đất quay quanh mặt trời.",
        "en": "The teacher said that the Earth revolves around the Sun.",
        "point": "Không lùi thì với chân lý khoa học"
      },
      {
        "vi": "Cô ấy nói cô ấy mệt.",
        "en": "She says she is tired.",
        "point": "Không lùi thì khi reporting verb ở hiện tại"
      },
      {
        "vi": "Anh ấy hứa rằng anh ấy sẽ gọi.",
        "en": "He promised that he would call.",
        "point": "Tường thuật lời hứa (promise)"
      },
      {
        "vi": "Cô ấy đề nghị giúp tôi.",
        "en": "She offered to help me.",
        "point": "Tường thuật lời đề nghị (offer to V)"
      },
      {
        "vi": "Anh ấy nói rằng anh ấy phải hoàn thành báo cáo.",
        "en": "He said that he had to finish the report.",
        "point": "Lùi must (nghĩa vụ) sang had to"
      }
    ]
  },
  "parallel-structure": {
    "instruction": "Dịch các câu sau, giữ các phần liệt kê hoặc nối bằng cặp liên từ ở cùng một dạng ngữ pháp (noun/noun, V-ing/V-ing, to V/to V).",
    "items": [
      {
        "vi": "Trong túi có sách, bút và vở.",
        "en": "The bag contains books, pens, and notebooks.",
        "point": "Danh sách song song noun + noun + noun"
      },
      {
        "vi": "Cô ấy thích đọc sách, viết lách và nói chuyện.",
        "en": "She likes reading, writing, and speaking.",
        "point": "Danh sách song song V-ing + V-ing + V-ing"
      },
      {
        "vi": "Mục tiêu của tôi là học, luyện tập và cải thiện.",
        "en": "My goal is to learn, to practice, and to improve.",
        "point": "Danh sách song song to V + to V + to V"
      },
      {
        "vi": "Sản phẩm này vừa hiệu quả vừa hợp túi tiền.",
        "en": "The product is both efficient and affordable.",
        "point": "Cấu trúc song song both... and..."
      },
      {
        "vi": "Chúng ta có thể gặp nhau hôm nay hoặc ngày mai.",
        "en": "We can meet either today or tomorrow.",
        "point": "Cấu trúc song song either... or..."
      },
      {
        "vi": "Căn phòng đó không lớn cũng không đắt tiền.",
        "en": "The room is neither big nor expensive.",
        "point": "Cấu trúc song song neither... nor..."
      },
      {
        "vi": "Giải pháp này không chỉ tiết kiệm thời gian mà còn giảm chi phí.",
        "en": "The solution not only saved time but also reduced cost.",
        "point": "Cấu trúc song song not only... but also..."
      },
      {
        "vi": "Cô ấy thích đọc sách hơn là xem TV.",
        "en": "She is more interested in reading than in watching TV.",
        "point": "Cấu trúc song song sau than"
      },
      {
        "vi": "Anh ấy dành thời gian chạy bộ, bơi lội và đạp xe.",
        "en": "He spends time running, swimming, and cycling.",
        "point": "Danh sách song song V-ing + V-ing + V-ing"
      }
    ]
  },
  "modal-verbs": {
    "instruction": "Dịch các câu sau, chọn đúng modal verb thể hiện đúng sắc thái (khả năng, lời khuyên, nghĩa vụ, suy đoán), kể cả các perfect modal như must have/should have/can't have.",
    "items": [
      {
        "vi": "Cô ấy có thể nói ba thứ tiếng.",
        "en": "She can speak three languages.",
        "point": "Modal 'can' chỉ khả năng"
      },
      {
        "vi": "Bạn có thể giúp tôi một chút được không?",
        "en": "Could you help me for a moment?",
        "point": "Modal 'could' xin phép/yêu cầu lịch sự"
      },
      {
        "vi": "Trời có thể sẽ mưa chiều nay.",
        "en": "It might rain this afternoon.",
        "point": "Modal 'might' chỉ khả năng có thể xảy ra"
      },
      {
        "vi": "Bạn phải đội mũ bảo hiểm khi đi xe máy.",
        "en": "You must wear a helmet when riding a motorbike.",
        "point": "Modal 'must' chỉ bắt buộc"
      },
      {
        "vi": "Bạn nên ngủ sớm hơn.",
        "en": "You should sleep earlier.",
        "point": "Modal 'should' chỉ lời khuyên"
      },
      {
        "vi": "Bạn có muốn uống trà không?",
        "en": "Would you like some tea?",
        "point": "Modal 'would' trong lời mời lịch sự"
      },
      {
        "vi": "Anh ấy chắc hẳn đã quên mất cuộc hẹn.",
        "en": "He must have forgotten the appointment.",
        "point": "Modal verb chỉ suy đoán ở quá khứ (must have + V3)"
      },
      {
        "vi": "Lẽ ra bạn nên gọi cho tôi trước.",
        "en": "You should have called me earlier.",
        "point": "Should have + V3 diễn tả điều đáng lẽ nên làm"
      },
      {
        "vi": "Cô ấy chắc chắn đã không nhìn thấy tin nhắn đó.",
        "en": "She can't have seen that message.",
        "point": "Can't have + V3 chỉ điều gần như chắc chắn không xảy ra"
      },
      {
        "vi": "Chúng tôi phải hoàn thành báo cáo trước thứ Sáu.",
        "en": "We have to finish the report before Friday.",
        "point": "Modal 'have to' chỉ bắt buộc"
      }
    ]
  },
  "conditionals": {
    "instruction": "Dịch các câu điều kiện sau, chọn đúng loại (zero/first/second/third/mixed), chú ý cách dùng unless, were, và đảo ngữ bỏ if.",
    "items": [
      {
        "vi": "Nếu trời mưa, chúng tôi sẽ ở nhà.",
        "en": "If it rains, we will stay home.",
        "point": "Câu điều kiện loại 1 (khả năng thật ở tương lai)"
      },
      {
        "vi": "Nước sôi ở 100 độ C nếu áp suất bình thường.",
        "en": "Water boils at 100 degrees Celsius if the pressure is normal.",
        "point": "Câu điều kiện loại 0 (sự thật hiển nhiên)"
      },
      {
        "vi": "Nếu tôi có nhiều thời gian hơn, tôi sẽ học tiếng Tây Ban Nha.",
        "en": "If I had more time, I would learn Spanish.",
        "point": "Câu điều kiện loại 2 (giả định hiện tại)"
      },
      {
        "vi": "Nếu tôi học chăm hơn, tôi đã đỗ kỳ thi đó rồi.",
        "en": "If I had studied harder, I would have passed the exam.",
        "point": "Câu điều kiện loại 3 (giả định trái với quá khứ)"
      },
      {
        "vi": "Nếu tôi học chăm hơn hồi đó, giờ tôi đã có một công việc tốt hơn.",
        "en": "If I had studied harder, I would have a better job now.",
        "point": "Câu điều kiện hỗn hợp (mixed conditional)"
      },
      {
        "vi": "Trừ khi bạn khẩn trương lên, bạn sẽ lỡ chuyến bay.",
        "en": "Unless you hurry, you will miss the flight.",
        "point": "Dùng unless thay cho if... not"
      },
      {
        "vi": "Nếu tôi là bạn, tôi sẽ nhận lời đề nghị đó.",
        "en": "If I were you, I would accept that offer.",
        "point": "Dùng were cho mọi ngôi trong câu giả định"
      },
      {
        "vi": "Nếu tôi biết trước điều đó, tôi đã hành động khác rồi.",
        "en": "Had I known that, I would have acted differently.",
        "point": "Đảo ngữ bỏ if trong câu điều kiện loại 3"
      },
      {
        "vi": "Nếu bạn gặp anh ấy, hãy chuyển lời chào của tôi nhé.",
        "en": "If you see him, give him my regards.",
        "point": "Không dùng will sau if ở điều kiện loại 1"
      }
    ]
  },
  "passive-voice": {
    "instruction": "Dịch các câu sau sang thể bị động, chia đúng 'be' theo thì và dùng đúng dạng nâng cao (modal passive, get-passive, hai tân ngữ, giới từ cố định).",
    "items": [
      {
        "vi": "Xe hơi được sản xuất ở Nhật Bản.",
        "en": "Cars are made in Japan.",
        "point": "Câu bị động thì hiện tại đơn"
      },
      {
        "vi": "Cây cầu được xây vào năm 2010.",
        "en": "The bridge was built in 2010.",
        "point": "Câu bị động thì quá khứ đơn"
      },
      {
        "vi": "Con đường đang được sửa chữa.",
        "en": "The road is being repaired.",
        "point": "Câu bị động thì hiện tại tiếp diễn"
      },
      {
        "vi": "Chiếc xe đạp của tôi đã bị đánh cắp.",
        "en": "My bike has been stolen.",
        "point": "Câu bị động thì hiện tại hoàn thành"
      },
      {
        "vi": "Kết quả sẽ được công bố vào ngày mai.",
        "en": "The results will be announced tomorrow.",
        "point": "Câu bị động thì tương lai đơn"
      },
      {
        "vi": "Vấn đề này có thể được giải quyết.",
        "en": "The problem can be solved.",
        "point": "Câu bị động với modal verb"
      },
      {
        "vi": "Anh ấy bị thương trong vụ tai nạn.",
        "en": "He got injured in the accident.",
        "point": "Get-passive"
      },
      {
        "vi": "Tôi được tặng một lá thư.",
        "en": "I was given a letter.",
        "point": "Câu bị động với động từ có hai tân ngữ"
      },
      {
        "vi": "Anh ấy bị người khác cười nhạo.",
        "en": "He was laughed at.",
        "point": "Câu bị động giữ nguyên giới từ cố định"
      },
      {
        "vi": "Báo cáo phải được hoàn thành trước thứ Hai.",
        "en": "The report must be completed before Monday.",
        "point": "Câu bị động với modal passive (must be)"
      },
      {
        "vi": "Ví của tôi đã bị mất cắp.",
        "en": "My wallet was stolen.",
        "point": "Câu bị động không nêu tác nhân (by agent)"
      }
    ]
  },
  "noun-clauses": {
    "instruction": "Dịch các câu sau bằng mệnh đề danh từ (that/whether/wh-), giữ trật tự câu trần thuật bên trong mệnh đề, không đảo trợ động từ.",
    "items": [
      {
        "vi": "Tôi tin rằng anh ấy trung thực.",
        "en": "I believe that he is honest.",
        "point": "Mệnh đề danh từ với that làm tân ngữ"
      },
      {
        "vi": "Tôi không biết liệu cô ấy có đến hay không.",
        "en": "I don't know whether she will come.",
        "point": "Mệnh đề danh từ với whether"
      },
      {
        "vi": "Hãy nói cho tôi biết bạn cần gì.",
        "en": "Tell me what you need.",
        "point": "Mệnh đề danh từ với wh-word, giữ trật tự trần thuật"
      },
      {
        "vi": "Rõ ràng là anh ấy đúng.",
        "en": "It is clear that he is right.",
        "point": "Cấu trúc extraposition (It + be + adj + that-clause)"
      },
      {
        "vi": "Tôi tự hỏi anh ấy đang ở đâu.",
        "en": "I wonder where he is.",
        "point": "Mệnh đề danh từ, không đảo trợ động từ"
      },
      {
        "vi": "Điều quan trọng nhất là sự kiên trì.",
        "en": "What matters most is consistency.",
        "point": "Mệnh đề danh từ làm chủ ngữ của câu"
      },
      {
        "vi": "Tôi không chắc liệu cô ấy có đồng ý hay không.",
        "en": "I'm not sure whether she agrees or not.",
        "point": "Whether đi với or not"
      },
      {
        "vi": "Vấn đề là chúng ta đã đến muộn.",
        "en": "The problem is that we are late.",
        "point": "Mệnh đề danh từ làm bổ ngữ sau is"
      }
    ]
  },
  "causatives": {
    "instruction": "Dịch các câu sau bằng đúng cấu trúc causative (make/let/have + O + V, get + O + to V, have/get + O + V3), phân biệt ép buộc, cho phép và nhờ dịch vụ.",
    "items": [
      {
        "vi": "Giáo viên bắt chúng tôi ở lại.",
        "en": "The teacher made us stay.",
        "point": "Causative make + O + V (ép buộc)"
      },
      {
        "vi": "Họ cho phép anh ấy về sớm.",
        "en": "They let him leave early.",
        "point": "Causative let + O + V (cho phép)"
      },
      {
        "vi": "Tôi sẽ nhờ Tom kiểm tra việc đó.",
        "en": "I'll have Tom check it.",
        "point": "Causative have + O + V (nhờ ai làm)"
      },
      {
        "vi": "Cô ấy đã thuyết phục được anh ấy xin lỗi.",
        "en": "She got him to apologize.",
        "point": "Causative get + O + to V (thuyết phục)"
      },
      {
        "vi": "Chúng tôi đã mang xe đi rửa.",
        "en": "We had the car washed.",
        "point": "Causative have + O + V3 (thuê/nhờ làm)"
      },
      {
        "vi": "Tôi vừa mới đi cắt tóc xong.",
        "en": "I just got my hair cut.",
        "point": "Causative get + O + V3 (nhờ dịch vụ)"
      },
      {
        "vi": "Anh ấy bị bắt phải xin lỗi.",
        "en": "He was made to apologize.",
        "point": "Dạng bị động của make (be made to + V)"
      },
      {
        "vi": "Sếp của tôi bắt tôi viết lại báo cáo.",
        "en": "My boss made me rewrite the report.",
        "point": "Causative make + O + V (ép buộc)"
      },
      {
        "vi": "Tôi đã cho sửa laptop hôm qua.",
        "en": "I had my laptop repaired yesterday.",
        "point": "Causative have + O + V3 (nhờ sửa chữa)"
      }
    ]
  },
  "wish-if-only": {
    "instruction": "Dịch các câu ước và tiếc nuối sau, chọn đúng thì sau wish/if only (past simple, past perfect, would) tùy thời điểm và sắc thái mong muốn.",
    "items": [
      {
        "vi": "Tôi ước tôi có nhiều thời gian rảnh hơn.",
        "en": "I wish I had more free time.",
        "point": "Wish + past simple (mong khác đi ở hiện tại)"
      },
      {
        "vi": "Cô ấy ước rằng cô ấy đã gọi cho anh ấy.",
        "en": "She wishes she had called him.",
        "point": "Wish + past perfect (tiếc nuối về quá khứ)"
      },
      {
        "vi": "Tôi ước trời ngừng mưa.",
        "en": "I wish it would stop raining.",
        "point": "Wish + would (mong điều thay đổi/than phiền)"
      },
      {
        "vi": "Giá như tôi đã học chăm hơn.",
        "en": "If only I had studied harder.",
        "point": "If only + past perfect (tiếc nuối quá khứ, mạnh hơn wish)"
      },
      {
        "vi": "Tôi ước tôi cao hơn.",
        "en": "I wish I were taller.",
        "point": "Dùng were thay was trong câu giả định trang trọng"
      },
      {
        "vi": "Giá như tôi có thể bay được.",
        "en": "If only I could fly.",
        "point": "If only + could (mong ước không có thật)"
      },
      {
        "vi": "Tôi ước bạn đừng nói to như vậy.",
        "en": "I wish you wouldn't talk so loudly.",
        "point": "Wish + would ở dạng phủ định (than phiền)"
      }
    ]
  },
  "inversion": {
    "instruction": "Dịch các câu sau bằng cấu trúc đảo ngữ (negative adverbial, only, điều kiện đảo, so/such) để tạo sắc thái nhấn mạnh, trang trọng.",
    "items": [
      {
        "vi": "Tôi chưa bao giờ thấy một cảnh đẹp như vậy.",
        "en": "Never have I seen such a beautiful view.",
        "point": "Đảo ngữ với trạng từ phủ định đầu câu (Never)"
      },
      {
        "vi": "Chúng ta hiếm khi thấy điều này.",
        "en": "Rarely do we see this.",
        "point": "Đảo ngữ với trạng từ phủ định đầu câu (Rarely)"
      },
      {
        "vi": "Chỉ sau cuộc họp cô ấy mới trả lời.",
        "en": "Only after the meeting did she reply.",
        "point": "Đảo ngữ với Only + phrase đầu câu"
      },
      {
        "vi": "Nếu tôi biết trước, tôi đã hành động rồi.",
        "en": "Had I known, I would have acted.",
        "point": "Đảo ngữ trong câu điều kiện (bỏ if)"
      },
      {
        "vi": "Bài thi khó đến nỗi không ai làm xong.",
        "en": "So difficult was the exam that no one finished it.",
        "point": "Đảo ngữ với so... that"
      },
      {
        "vi": "Chỉ khi đó anh ấy mới hiểu ra vấn đề.",
        "en": "Only then did he understand the problem.",
        "point": "Đảo ngữ với Only then"
      },
      {
        "vi": "Không những cô ấy thông minh mà còn rất chăm chỉ.",
        "en": "Not only is she smart, but she is also hardworking.",
        "point": "Đảo ngữ với Not only... but also..."
      }
    ]
  },
  "participle-clauses": {
    "instruction": "Dịch các câu sau bằng mệnh đề rút gọn dùng V-ing, V3 hoặc having + V3, đảm bảo chủ thể của mệnh đề chính khớp với hành động được rút gọn.",
    "items": [
      {
        "vi": "Đang đi bộ trên phố, tôi gặp một người bạn cũ.",
        "en": "Walking down the street, I saw an old friend.",
        "point": "Present participle rút gọn mệnh đề thời gian"
      },
      {
        "vi": "Được xây vào năm 1920, ngôi nhà vẫn trông rất thanh lịch.",
        "en": "Built in 1920, the house still looks elegant.",
        "point": "Past participle rút gọn mệnh đề bị động"
      },
      {
        "vi": "Đứng cạnh cửa, anh ấy mỉm cười.",
        "en": "Standing by the door, he smiled.",
        "point": "Present participle mô tả hành động đồng thời"
      },
      {
        "vi": "Bị sốc trước tin tức đó, cô ấy im lặng không nói gì.",
        "en": "Shocked by the news, she stayed silent.",
        "point": "Past participle rút gọn mệnh đề nguyên nhân"
      },
      {
        "vi": "Sau khi hoàn thành biểu mẫu, anh ấy đã nộp nó.",
        "en": "Having completed the form, he submitted it.",
        "point": "Perfect participle (having + V3) nhấn hành động xảy ra trước"
      },
      {
        "vi": "Những sinh viên đang du học nước ngoài thường nhớ nhà.",
        "en": "Students studying abroad often miss home.",
        "point": "Present participle rút gọn mệnh đề quan hệ"
      },
      {
        "vi": "Bản báo cáo được Linh chuẩn bị rất chi tiết.",
        "en": "The report prepared by Linh is very detailed.",
        "point": "Past participle rút gọn mệnh đề quan hệ bị động"
      },
      {
        "vi": "Sau khi hoàn thành công việc, cô ấy rời văn phòng.",
        "en": "Having finished the task, she left the office.",
        "point": "Perfect participle gắn đúng chủ thể, tránh dangling modifier"
      }
    ]
  },
  "prepositions": {
    "instruction": "Dịch các câu sau, chọn đúng giới từ thời gian (at/on/in), nơi chốn, chuyển động (to/into/onto), collocation cố định, và lưu ý một số động từ không cần giới từ.",
    "items": [
      {
        "vi": "Chúng ta gặp nhau lúc 7 giờ nhé.",
        "en": "Let's meet at 7 o'clock.",
        "point": "Giới từ at với giờ giấc"
      },
      {
        "vi": "Tôi có một cuộc hẹn vào thứ Hai.",
        "en": "I have an appointment on Monday.",
        "point": "Giới từ on với ngày trong tuần"
      },
      {
        "vi": "Cô ấy sinh vào tháng Sáu.",
        "en": "She was born in June.",
        "point": "Giới từ in với tháng"
      },
      {
        "vi": "Anh ấy bước vào phòng.",
        "en": "He walked into the room.",
        "point": "Giới từ into chỉ chuyển động"
      },
      {
        "vi": "Tôi rất quan tâm đến âm nhạc.",
        "en": "I am interested in music.",
        "point": "Collocation cố định interested in"
      },
      {
        "vi": "Cô ấy giỏi giải quyết vấn đề.",
        "en": "She is good at solving problems.",
        "point": "Collocation cố định good at"
      },
      {
        "vi": "Chúng tôi đã thảo luận về kế hoạch đó.",
        "en": "We discussed the plan.",
        "point": "Động từ discuss không cần giới từ about"
      },
      {
        "vi": "Anh ấy đã kết hôn với một bác sĩ.",
        "en": "He married a doctor.",
        "point": "Động từ marry không cần giới từ with"
      },
      {
        "vi": "Chúng tôi đã đến đúng giờ.",
        "en": "We arrived on time.",
        "point": "Cụm cố định on time"
      },
      {
        "vi": "Chuyến tàu đến kịp giờ trong gang tấc.",
        "en": "The train arrived just in time.",
        "point": "Cụm cố định in time"
      },
      {
        "vi": "Cô ấy làm việc vào ban đêm.",
        "en": "She works at night.",
        "point": "Cụm cố định at night"
      },
      {
        "vi": "Bạn đang nói chuyện với ai vậy?",
        "en": "Who are you talking to?",
        "point": "Giới từ đứng cuối câu hỏi trong văn nói"
      }
    ]
  },
  "gerunds-infinitives": {
    "instruction": "Dịch các câu sau, chọn đúng dạng V-ing hay to V theo động từ đi trước, chú ý các động từ đổi nghĩa như stop/remember/try.",
    "items": [
      {
        "vi": "Tôi thích đọc sách vào buổi tối.",
        "en": "I enjoy reading in the evening.",
        "point": "Verb + V-ing (enjoy)"
      },
      {
        "vi": "Cô ấy muốn học ở nước ngoài.",
        "en": "She wants to study abroad.",
        "point": "Verb + to V (want)"
      },
      {
        "vi": "Bố mẹ khuyên tôi nên tiết kiệm tiền.",
        "en": "My parents advised me to save money.",
        "point": "Verb + object + to V (advise)"
      },
      {
        "vi": "Anh ấy đã bỏ hút thuốc.",
        "en": "He stopped smoking.",
        "point": "Stop + V-ing (dừng hẳn việc đang làm)"
      },
      {
        "vi": "Anh ấy dừng lại để hút thuốc.",
        "en": "He stopped to smoke.",
        "point": "Stop + to V (dừng lại nhằm mục đích khác)"
      },
      {
        "vi": "Tôi nhớ là đã khóa cửa rồi.",
        "en": "I remember locking the door.",
        "point": "Remember + V-ing (nhớ việc đã làm)"
      },
      {
        "vi": "Đừng quên gửi email đó nhé.",
        "en": "Remember to send that email.",
        "point": "Remember + to V (nhớ để làm việc sắp tới)"
      },
      {
        "vi": "Tôi rất vui được giúp bạn.",
        "en": "I am happy to help you.",
        "point": "Adjective + to V"
      },
      {
        "vi": "Anh ấy tiếp tục làm việc dù đã muộn.",
        "en": "He kept working even though it was late.",
        "point": "Verb + V-ing (keep)"
      },
      {
        "vi": "Cô ấy đề nghị nghỉ giải lao một chút.",
        "en": "She suggested taking a short break.",
        "point": "Verb + V-ing (suggest)"
      },
      {
        "vi": "Anh ấy đã cố mở cánh cửa bị kẹt nhưng không được.",
        "en": "He tried opening the stuck door but it didn't work.",
        "point": "Try + V-ing (thử một cách làm)"
      }
    ]
  },
  "quantifiers": {
    "instruction": "Dịch các câu sau, chọn đúng lượng từ theo danh từ đếm được hay không đếm được (many/much, a few/few, a little/little) và ngữ cảnh khẳng định/phủ định/câu hỏi.",
    "items": [
      {
        "vi": "Cô ấy có rất nhiều sách.",
        "en": "She has many books.",
        "point": "Many với danh từ đếm được số nhiều"
      },
      {
        "vi": "Chúng tôi không có nhiều thời gian.",
        "en": "We don't have much time.",
        "point": "Much với danh từ không đếm được trong câu phủ định"
      },
      {
        "vi": "Tôi có vài người bạn thân.",
        "en": "I have a few close friends.",
        "point": "A few (ít nhưng đủ, sắc thái tích cực)"
      },
      {
        "vi": "Rất ít người biết về điều đó.",
        "en": "Few people know about that.",
        "point": "Few (rất ít, sắc thái tiêu cực)"
      },
      {
        "vi": "Vẫn còn một ít nước trong chai.",
        "en": "There is a little water left in the bottle.",
        "point": "A little (ít nhưng đủ, sắc thái tích cực)"
      },
      {
        "vi": "Chúng tôi có rất ít thời gian để hoàn thành việc này.",
        "en": "We have little time to finish this.",
        "point": "Little (rất ít, sắc thái tiêu cực)"
      },
      {
        "vi": "Tôi có vài câu hỏi muốn hỏi bạn.",
        "en": "I have some questions for you.",
        "point": "Some trong câu khẳng định"
      },
      {
        "vi": "Bạn có tiền lẻ nào không?",
        "en": "Do you have any change?",
        "point": "Any trong câu hỏi"
      },
      {
        "vi": "Anh ấy không có người bạn nào ở đây cả.",
        "en": "He doesn't have any friends here.",
        "point": "Any trong câu phủ định"
      },
      {
        "vi": "Chúng tôi có rất nhiều bài tập về nhà.",
        "en": "We have a lot of homework.",
        "point": "A lot of với danh từ không đếm được"
      },
      {
        "vi": "Bạn có muốn dùng chút cà phê không?",
        "en": "Would you like some coffee?",
        "point": "Some trong lời mời/đề nghị"
      }
    ]
  },
  "fragments-run-ons": {
    "instruction": "Dịch các câu sau thành câu hoàn chỉnh, tránh để mệnh đề phụ đứng một mình (fragment) và nối hai mệnh đề độc lập đúng cách (dấu phẩy + liên từ, dấu chấm phẩy, hoặc câu riêng).",
    "items": [
      {
        "vi": "Vì tôi mệt, tôi đã về nhà.",
        "en": "Because I was tired, I went home.",
        "point": "Mệnh đề phụ gắn với mệnh đề chính, tránh fragment"
      },
      {
        "vi": "Tôi mệt, vì vậy tôi về nhà.",
        "en": "I was tired, so I went home.",
        "point": "Nối hai mệnh đề độc lập bằng dấu phẩy + so"
      },
      {
        "vi": "Tôi mệt. Tôi về nhà.",
        "en": "I was tired. I went home.",
        "point": "Tách thành hai câu riêng để tránh run-on"
      },
      {
        "vi": "Trời đang mưa; chúng tôi vẫn ở trong nhà.",
        "en": "It was raining; we stayed indoors.",
        "point": "Nối hai mệnh đề độc lập bằng dấu chấm phẩy"
      },
      {
        "vi": "Mặc dù trời mưa, chúng tôi vẫn ra ngoài.",
        "en": "Although it was raining, we still went out.",
        "point": "Mệnh đề phụ đứng đầu câu có mệnh đề chính đi kèm"
      },
      {
        "vi": "Cô ấy học chăm chỉ vì cô ấy muốn đỗ kỳ thi.",
        "en": "She studied hard because she wanted to pass the exam.",
        "point": "Câu hoàn chỉnh gồm mệnh đề chính và mệnh đề phụ"
      },
      {
        "vi": "Chúng tôi đã hoàn thành dự án đúng hạn; mọi người đều vui.",
        "en": "We finished the project on time; everyone was happy.",
        "point": "Tránh comma splice bằng dấu chấm phẩy"
      }
    ]
  },
  "punctuation-capitalization": {
    "instruction": "Dịch các câu sau, viết hoa đúng chỗ (tên riêng, ngôn ngữ) và dùng đúng dấu câu: phẩy sau mệnh đề mở đầu, nháy đơn sở hữu, hai chấm, chấm phẩy.",
    "items": [
      {
        "vi": "Tên tôi là Linh.",
        "en": "My name is Linh.",
        "point": "Viết hoa tên riêng"
      },
      {
        "vi": "Tôi đang học tiếng Anh.",
        "en": "I am studying English.",
        "point": "Viết hoa tên ngôn ngữ"
      },
      {
        "vi": "Sau giờ học, chúng tôi đi uống cà phê.",
        "en": "After class, we went for coffee.",
        "point": "Dấu phẩy sau cụm mở đầu câu"
      },
      {
        "vi": "Đây là cuốn sách của Lan.",
        "en": "This is Lan's book.",
        "point": "Dấu nháy đơn chỉ sở hữu số ít"
      },
      {
        "vi": "Dự án của các sinh viên rất ấn tượng.",
        "en": "The students' projects are impressive.",
        "point": "Dấu nháy đơn chỉ sở hữu số nhiều"
      },
      {
        "vi": "Mặc dù trời đã tối, chúng tôi vẫn tiếp tục làm việc.",
        "en": "Although it was late, we kept working.",
        "point": "Dấu phẩy sau mệnh đề phụ đứng đầu câu"
      },
      {
        "vi": "Tôi cần mua ba thứ: sữa, trứng và bánh mì.",
        "en": "I need to buy three things: milk, eggs, and bread.",
        "point": "Dấu hai chấm mở danh sách"
      },
      {
        "vi": "Con mèo đang liếm lông của nó.",
        "en": "The cat is licking its fur.",
        "point": "Its chỉ sở hữu, không có dấu nháy đơn"
      },
      {
        "vi": "Đã đến giờ rồi.",
        "en": "It's time.",
        "point": "It's là dạng viết tắt của it is"
      }
    ]
  },
  "modifier-errors": {
    "instruction": "Dịch các câu sau, đặt đúng vị trí trạng từ (only/almost) theo đúng nghĩa tiếng Việt, và gắn mệnh đề rút gọn đầu câu với đúng chủ thể để tránh dangling modifier.",
    "items": [
      {
        "vi": "Anh ấy chỉ ăn rau vào cuối tuần (không ăn thứ gì khác).",
        "en": "He eats only vegetables on weekends.",
        "point": "Vị trí only bổ nghĩa cho tân ngữ"
      },
      {
        "vi": "Chỉ vào cuối tuần anh ấy mới ăn rau.",
        "en": "He only eats vegetables on weekends.",
        "point": "Vị trí only bổ nghĩa cho thời gian"
      },
      {
        "vi": "Cô ấy suýt nữa đã lái xe đưa con đi học hôm đó (nhưng cuối cùng không làm).",
        "en": "She almost drove her kids to school that day.",
        "point": "Vị trí almost chỉ việc suýt xảy ra"
      },
      {
        "vi": "Cô ấy lái xe đưa con đi học gần như mỗi ngày.",
        "en": "She drove her kids to school almost every day.",
        "point": "Vị trí almost bổ nghĩa cho tần suất"
      },
      {
        "vi": "Trong lúc đi bộ tới chỗ làm, tôi thấy trời bắt đầu mưa.",
        "en": "Walking to work, I saw the rain start.",
        "point": "Sửa dangling modifier bằng chủ thể rõ ràng"
      },
      {
        "vi": "Bị sốc trước kết quả, cô ấy không nói lời nào.",
        "en": "Shocked by the results, she said nothing.",
        "point": "Participle clause gắn đúng chủ thể"
      },
      {
        "vi": "Sau khi hoàn thành bài tập, anh ấy đã nộp bài cho giáo viên.",
        "en": "After finishing the homework, he submitted it to the teacher.",
        "point": "Mệnh đề rút gọn đầu câu khớp đúng chủ ngữ chính"
      }
    ]
  },
  "pronoun-reference": {
    "instruction": "Dịch các câu sau sao cho đại từ (he/she/this/it) chỉ rõ đúng một đối tượng, tránh mơ hồ bằng cách lặp lại danh từ hoặc thêm danh từ sau this.",
    "items": [
      {
        "vi": "Mai nói với Linh: 'Cậu đến muộn rồi đấy.'",
        "en": "Mai told Linh, \"You are late.\"",
        "point": "Dùng lời dẫn trực tiếp để tránh mơ hồ he/she"
      },
      {
        "vi": "Xu hướng này cho thấy một vấn đề.",
        "en": "This trend shows a problem.",
        "point": "Thêm danh từ sau this để rõ nghĩa"
      },
      {
        "vi": "Việc cắt giảm chi phí là điều quan trọng.",
        "en": "Reducing costs is important.",
        "point": "Thay it mơ hồ bằng chủ ngữ cụ thể"
      },
      {
        "vi": "Phát hiện này rất đáng chú ý.",
        "en": "This finding is remarkable.",
        "point": "Thêm danh từ sau this để rõ nghĩa"
      },
      {
        "vi": "Khi Nam gặp Long, Nam cảm thấy rất lo lắng.",
        "en": "When Nam met Long, Nam felt very nervous.",
        "point": "Lặp lại danh từ thay vì dùng đại từ mơ hồ"
      },
      {
        "vi": "Vấn đề này cần được giải quyết ngay.",
        "en": "This issue needs to be solved immediately.",
        "point": "Thêm danh từ sau this để rõ nghĩa"
      },
      {
        "vi": "Xe của tôi bị hỏng, vì vậy tôi phải đi bộ đến công ty.",
        "en": "My car broke down, so I had to walk to the office.",
        "point": "Đại từ it/this chỉ rõ một đối tượng duy nhất"
      }
    ]
  },
  "verbs-overview": {
    "instruction": "Khi dịch, hãy xác định động từ là nội động từ, ngoại động từ hay động từ nối để chọn đúng tân ngữ/bổ ngữ và tránh dùng nhầm trạng từ sau linking verb.",
    "items": [
      {
        "vi": "Cô ấy đã viết một lá thư cho mẹ.",
        "en": "She wrote a letter to her mother.",
        "point": "transitive verb cần tân ngữ"
      },
      {
        "vi": "Em bé đã khóc suốt cả đêm.",
        "en": "The baby cried all night.",
        "point": "intransitive verb không cần tân ngữ"
      },
      {
        "vi": "Món súp này có vị rất ngon.",
        "en": "This soup tastes very good.",
        "point": "linking verb + adjective, không dùng adverb"
      },
      {
        "vi": "Anh ấy trông có vẻ mệt mỏi.",
        "en": "He looks tired.",
        "point": "linking verb look + adjective"
      },
      {
        "vi": "Cánh cửa đột nhiên tự mở ra.",
        "en": "The door suddenly opened.",
        "point": "động từ open dùng như nội động từ"
      },
      {
        "vi": "Anh ấy đã gửi cho tôi một email.",
        "en": "He sent me an email.",
        "point": "động từ hai tân ngữ S+V+IO+DO"
      },
      {
        "vi": "Bạn có thể đưa cho tôi cuốn sách đó không?",
        "en": "Can you give me that book?",
        "point": "cấu trúc give + tân ngữ gián tiếp + trực tiếp"
      },
      {
        "vi": "Cô ấy đã cải thiện kỹ năng viết của mình.",
        "en": "She has improved her writing skills.",
        "point": "trợ động từ have + động từ chính"
      },
      {
        "vi": "Ý tưởng đó nghe không hay lắm.",
        "en": "That idea doesn't sound very good.",
        "point": "phủ định với linking verb sound + adjective"
      }
    ]
  },
  "nouns-plurals": {
    "instruction": "Chú ý dịch đúng dạng số nhiều của danh từ (đều, bất quy tắc, giữ nguyên) và chia động từ phù hợp với số ít/số nhiều.",
    "items": [
      {
        "vi": "Tôi có hai cuốn sách trên bàn.",
        "en": "I have two books on the table.",
        "point": "số nhiều thêm -s"
      },
      {
        "vi": "Có nhiều thành phố đẹp ở Việt Nam.",
        "en": "There are many beautiful cities in Vietnam.",
        "point": "danh từ tận cùng y đổi thành ies"
      },
      {
        "vi": "Những chiếc lá đang rơi ngoài vườn.",
        "en": "The leaves are falling in the garden.",
        "point": "leaf đổi thành leaves"
      },
      {
        "vi": "Hai đứa trẻ đang chơi trong công viên.",
        "en": "Two children are playing in the park.",
        "point": "số nhiều bất quy tắc child → children"
      },
      {
        "vi": "Nha sĩ vừa nhổ một chiếc răng của tôi.",
        "en": "The dentist pulled out one of my teeth.",
        "point": "số nhiều bất quy tắc tooth → teeth"
      },
      {
        "vi": "Có bao nhiêu con cừu trong trang trại?",
        "en": "How many sheep are there on the farm?",
        "point": "danh từ giữ nguyên dạng số nhiều"
      },
      {
        "vi": "Chiếc quần jean của tôi bị rách rồi.",
        "en": "My jeans are torn.",
        "point": "danh từ luôn ở dạng số nhiều"
      },
      {
        "vi": "Một số sinh viên đã đến muộn.",
        "en": "A number of students were late.",
        "point": "a number of + động từ số nhiều"
      },
      {
        "vi": "Số lượng nhân viên đang tăng lên.",
        "en": "The number of employees is increasing.",
        "point": "the number of + động từ số ít"
      },
      {
        "vi": "Tin tức hôm nay thật đáng buồn.",
        "en": "The news today is very sad.",
        "point": "news trông giống số nhiều nhưng đi với động từ số ít"
      },
      {
        "vi": "Rất nhiều người đã tham dự buổi lễ.",
        "en": "Many people attended the ceremony.",
        "point": "people là số nhiều của person"
      }
    ]
  },
  "numerals": {
    "instruction": "Hãy dùng đúng số đếm, số thứ tự, phân số, tỷ lệ phần trăm và các cụm số ghép theo đúng quy tắc tiếng Anh.",
    "items": [
      {
        "vi": "Có hai trăm sinh viên trong hội trường.",
        "en": "There are two hundred students in the hall.",
        "point": "hundred không thêm s khi có số cụ thể"
      },
      {
        "vi": "Hàng trăm người đã xem buổi biểu diễn.",
        "en": "Hundreds of people watched the performance.",
        "point": "hundreds of + danh từ số nhiều"
      },
      {
        "vi": "Đây là lần thứ ba tôi đến Hà Nội.",
        "en": "This is the third time I have come to Hanoi.",
        "point": "số thứ tự ordinal number"
      },
      {
        "vi": "Cuộc họp sẽ diễn ra vào ngày 21 tháng 5.",
        "en": "The meeting will take place on May 21st.",
        "point": "dùng ordinal number khi đọc ngày tháng"
      },
      {
        "vi": "Hai phần ba lớp học đã hoàn thành bài tập.",
        "en": "Two thirds of the class have finished the assignment.",
        "point": "cách đọc phân số two thirds"
      },
      {
        "vi": "25 phần trăm sinh viên đạt điểm giỏi.",
        "en": "25 percent of the students are excellent.",
        "point": "động từ chia theo danh từ sau of trong cụm percent"
      },
      {
        "vi": "Giá đã giảm mười phần trăm.",
        "en": "The price has dropped by ten percent.",
        "point": "percent không thêm s sau số"
      },
      {
        "vi": "Đó là một cậu bé mười tuổi.",
        "en": "He is a ten-year-old boy.",
        "point": "tính từ ghép chỉ tuổi giữ dạng số ít"
      },
      {
        "vi": "Chúng tôi đã có một chuyến đi một ngày đến biển.",
        "en": "We had a one-day trip to the beach.",
        "point": "cụm số ghép danh từ giữ dạng số ít"
      }
    ]
  },
  "near-future": {
    "instruction": "Chọn đúng cấu trúc diễn tả tương lai gần (be going to, hiện tại tiếp diễn, hiện tại đơn hoặc will) tùy vào ý định, kế hoạch, lịch trình hay quyết định tức thì.",
    "items": [
      {
        "vi": "Nhìn kìa, trời sắp mưa rồi.",
        "en": "Look, it's going to rain.",
        "point": "be going to cho dự đoán có bằng chứng"
      },
      {
        "vi": "Cô ấy dự định đi du học vào năm sau.",
        "en": "She is going to study abroad next year.",
        "point": "be going to cho ý định đã có từ trước"
      },
      {
        "vi": "Chúng tôi sẽ gặp khách hàng vào ngày mai.",
        "en": "We are meeting the client tomorrow.",
        "point": "hiện tại tiếp diễn cho kế hoạch đã sắp xếp"
      },
      {
        "vi": "Bộ phim bắt đầu lúc 8 giờ.",
        "en": "The film starts at 8.",
        "point": "hiện tại đơn cho lịch trình cố định"
      },
      {
        "vi": "Tàu rời ga lúc 6 giờ 30.",
        "en": "The train leaves at 6:30.",
        "point": "hiện tại đơn cho thời gian biểu"
      },
      {
        "vi": "Điện thoại đang reo kìa, tôi sẽ trả lời.",
        "en": "The phone's ringing, I'll answer it.",
        "point": "will cho quyết định tức thì"
      },
      {
        "vi": "Tôi sẽ giúp bạn mang cái đó.",
        "en": "I'll carry that for you.",
        "point": "will cho lời đề nghị"
      },
      {
        "vi": "Bạn có định đi du học tiếng Anh không?",
        "en": "Are you going to study English abroad?",
        "point": "câu hỏi với be going to"
      }
    ]
  },
  "sequence-of-tenses": {
    "instruction": "Chú ý phối hợp thì giữa mệnh đề chính và mệnh đề phụ, đặc biệt là quy tắc lùi thì (backshift) và trường hợp giữ nguyên hiện tại khi nói về chân lý.",
    "items": [
      {
        "vi": "Tôi biết rằng anh ấy sống ở đây.",
        "en": "I know that he lives here.",
        "point": "mệnh đề chính hiện tại giữ thì linh hoạt"
      },
      {
        "vi": "Cô ấy nói rằng cô ấy mệt.",
        "en": "She said that she was tired.",
        "point": "mệnh đề chính quá khứ kéo mệnh đề phụ lùi về quá khứ"
      },
      {
        "vi": "Anh ấy nói rằng anh ấy sẽ gọi cho tôi.",
        "en": "He said that he would call me.",
        "point": "backshift will thành would"
      },
      {
        "vi": "Cô ấy nói rằng cô ấy đã hoàn thành công việc.",
        "en": "She said that she had finished the work.",
        "point": "backshift have done thành had done"
      },
      {
        "vi": "Giáo viên của tôi nói rằng mặt trời mọc ở hướng đông.",
        "en": "My teacher said that the sun rises in the East.",
        "point": "chân lý hiển nhiên giữ nguyên thì hiện tại"
      },
      {
        "vi": "Giáo sư giải thích rằng nước sôi ở 100 độ C.",
        "en": "The professor explained that water boils at 100°C.",
        "point": "sự thật khoa học không lùi thì dù reporting verb ở quá khứ"
      },
      {
        "vi": "Tôi biết rằng anh ấy sẽ gọi khi anh ấy đến.",
        "en": "I knew that he would call when he arrived.",
        "point": "would cho tương lai nhìn từ quá khứ, time clause vẫn dùng quá khứ đơn"
      },
      {
        "vi": "Cô ấy nói rằng cô ấy đã nhận ra dữ liệu chưa đầy đủ.",
        "en": "She said that she had realized that the data were incomplete.",
        "point": "lùi thì nhiều tầng trong câu phức"
      },
      {
        "vi": "Anh ấy nói rằng anh ấy không thích cà phê.",
        "en": "He said that he didn't like coffee.",
        "point": "backshift phủ định don't thành didn't"
      }
    ]
  },
  "adverbial-time-clauses": {
    "instruction": "Trong mệnh đề trạng ngữ chỉ thời gian (when, before, until, as soon as...), không dùng will dù câu mang nghĩa tương lai.",
    "items": [
      {
        "vi": "Tôi sẽ gọi cho bạn khi tôi đến.",
        "en": "I'll call you when I arrive.",
        "point": "time clause với when dùng hiện tại đơn thay vì will"
      },
      {
        "vi": "Hãy hoàn thành việc này trước khi bạn ra ngoài.",
        "en": "Finish this before you go out.",
        "point": "mệnh đề thời gian với before dùng hiện tại đơn"
      },
      {
        "vi": "Hãy ở đây cho đến khi tôi quay lại.",
        "en": "Stay here until I return.",
        "point": "until + hiện tại đơn dù ý nghĩa tương lai"
      },
      {
        "vi": "Tôi sẽ gửi email cho bạn ngay khi tôi xong việc.",
        "en": "I'll email you as soon as I finish.",
        "point": "as soon as + hiện tại đơn cho tương lai"
      },
      {
        "vi": "Cô ấy đã sống ở đây kể từ khi cô ấy tốt nghiệp.",
        "en": "She has lived here since she graduated.",
        "point": "since + mệnh đề chính ở present perfect"
      },
      {
        "vi": "Tôi ngủ quên trong khi đang xem phim.",
        "en": "I fell asleep while I was watching a film.",
        "point": "while nhấn mạnh hành động kéo dài, đi với mệnh đề"
      },
      {
        "vi": "Điện thoại của anh ấy đổ chuông trong suốt cuộc họp.",
        "en": "His phone rang during the meeting.",
        "point": "during là giới từ, đi với danh từ không phải mệnh đề"
      },
      {
        "vi": "Đến lúc chúng tôi tới nơi thì bộ phim đã bắt đầu.",
        "en": "By the time we arrived, the film had already started.",
        "point": "by the time + perfect tense nhấn hành động hoàn tất trước mốc khác"
      },
      {
        "vi": "Tôi vừa mới ra khỏi nhà thì trời đổ mưa.",
        "en": "No sooner had I left the house than it started to rain.",
        "point": "đảo ngữ với no sooner...than"
      },
      {
        "vi": "Ngay khi bạn ký hợp đồng, chúng ta có thể bắt đầu.",
        "en": "Once you sign the contract, we can start.",
        "point": "once + hiện tại đơn nghĩa ngay khi"
      }
    ]
  },
  "relative-pronouns-adverbs": {
    "instruction": "Chọn đúng đại từ/trạng từ quan hệ (who, whom, whose, which, that, where, when, why) dựa vào danh từ đứng trước.",
    "items": [
      {
        "vi": "Người đàn ông đã gọi cho tôi là chú của tôi.",
        "en": "The man who called me is my uncle.",
        "point": "who cho người làm chủ ngữ"
      },
      {
        "vi": "Cô gái mà tôi đã gặp hôm qua rất thân thiện.",
        "en": "The girl whom I met yesterday was very friendly.",
        "point": "whom cho người làm tân ngữ, trang trọng"
      },
      {
        "vi": "Người viết cuốn sách đó có tác phẩm đoạt giải.",
        "en": "The writer whose book won the prize is famous.",
        "point": "whose chỉ sở hữu"
      },
      {
        "vi": "Chiếc xe mà anh ấy mua rất đắt.",
        "en": "The car which he bought is very expensive.",
        "point": "which cho vật"
      },
      {
        "vi": "Bài hát mà tôi thích đang phát trên radio.",
        "en": "The song that I like is playing on the radio.",
        "point": "that cho người hoặc vật trong mệnh đề xác định"
      },
      {
        "vi": "Ngôi nhà nơi tôi sinh ra vẫn còn đó.",
        "en": "The house where I was born is still there.",
        "point": "where cho nơi chốn"
      },
      {
        "vi": "Tôi vẫn nhớ ngày mà chúng tôi gặp nhau lần đầu.",
        "en": "I still remember the day when we first met.",
        "point": "when cho thời gian"
      },
      {
        "vi": "Lý do tại sao tôi gọi rất quan trọng.",
        "en": "The reason why I called is important.",
        "point": "why cho lý do"
      },
      {
        "vi": "Đó là một công ty có lợi nhuận đã giảm.",
        "en": "That is a company whose profits fell.",
        "point": "whose dùng cho cả vật trong văn viết"
      }
    ]
  },
  "result-structures": {
    "instruction": "Dùng đúng cấu trúc chỉ kết quả (so...that, such...that, too...to, enough) tùy vào từ loại đi kèm.",
    "items": [
      {
        "vi": "Trời lạnh đến mức chúng tôi phải ở trong nhà.",
        "en": "It was so cold that we stayed inside.",
        "point": "so + adj + that + mệnh đề"
      },
      {
        "vi": "Đó là một căn phòng ồn đến mức không ai ngủ được.",
        "en": "It was such a noisy room that nobody could sleep.",
        "point": "such + a/an + adj + noun + that"
      },
      {
        "vi": "Cô ấy quá mệt để lái xe.",
        "en": "She was too tired to drive.",
        "point": "too + adj + to V"
      },
      {
        "vi": "Căn phòng đủ rộng để chứa năm mươi người.",
        "en": "The room was large enough to hold fifty people.",
        "point": "adj + enough + to V"
      },
      {
        "vi": "Chúng tôi không có đủ thời gian để hoàn thành dự án.",
        "en": "We didn't have enough time to finish the project.",
        "point": "enough + danh từ"
      },
      {
        "vi": "Bài luận của anh ấy có quá nhiều lỗi đến mức giáo viên phải đọc lại.",
        "en": "There were so many mistakes in his essay that the teacher had to read it again.",
        "point": "so many + danh từ đếm được số nhiều"
      },
      {
        "vi": "Có quá nhiều tiếng ồn đến mức tôi không thể tập trung.",
        "en": "There was so much noise that I couldn't concentrate.",
        "point": "so much + danh từ không đếm được"
      },
      {
        "vi": "Anh ấy không đủ khỏe để nâng cái hộp đó.",
        "en": "He wasn't strong enough to lift that box.",
        "point": "not...enough to tương đương too weak to"
      },
      {
        "vi": "Cô ấy chạy nhanh đến mức không ai đuổi kịp.",
        "en": "She ran so fast that nobody could catch up with her.",
        "point": "so + adverb + that"
      },
      {
        "vi": "Đó là những vấn đề nghiêm trọng đến mức chính phủ phải hành động.",
        "en": "They were such serious problems that the government had to act.",
        "point": "such + adj + danh từ số nhiều + that"
      }
    ]
  },
  "existential-there": {
    "instruction": "Dùng cấu trúc There is/are để diễn tả sự tồn tại, chia đúng theo thì và theo danh từ số ít/số nhiều.",
    "items": [
      {
        "vi": "Có một cuốn sách trên bàn.",
        "en": "There is a book on the table.",
        "point": "There is + danh từ số ít"
      },
      {
        "vi": "Có nhiều sinh viên trong lớp học.",
        "en": "There are many students in the classroom.",
        "point": "There are + danh từ số nhiều"
      },
      {
        "vi": "Đã có một tai nạn trên đường hôm qua.",
        "en": "There was an accident on the road yesterday.",
        "point": "There was cho quá khứ số ít"
      },
      {
        "vi": "Đã có nhiều thay đổi trong công ty năm nay.",
        "en": "There have been many changes in the company this year.",
        "point": "There have been ở hiện tại hoàn thành số nhiều"
      },
      {
        "vi": "Có chỗ ngồi nào còn trống không?",
        "en": "Are there any seats left?",
        "point": "câu hỏi Are there...?"
      },
      {
        "vi": "Không có đủ ghế cho mọi người.",
        "en": "There aren't enough chairs for everyone.",
        "point": "phủ định There aren't"
      },
      {
        "vi": "Không còn vé nào cả.",
        "en": "There are no tickets left.",
        "point": "There are no + danh từ số nhiều dù mang nghĩa phủ định"
      },
      {
        "vi": "Trên bàn có một cây bút và hai cuốn sách.",
        "en": "There is a pen and two books on the desk.",
        "point": "chia theo danh từ đầu tiên khi liệt kê hỗn hợp"
      },
      {
        "vi": "Có một con mèo ở trong vườn.",
        "en": "There is a cat in the garden.",
        "point": "phân biệt There is (tồn tại) với It is"
      },
      {
        "vi": "Chắc chắn phải có một lý do cho việc này.",
        "en": "There must be a reason for this.",
        "point": "There + modal + be"
      }
    ]
  },
  "dummy-it": {
    "instruction": "Dùng It làm chủ ngữ giả khi nói về thời tiết, thời gian, khoảng cách hoặc đưa ra đánh giá, phân biệt với There is.",
    "items": [
      {
        "vi": "Trời đang mưa.",
        "en": "It is raining.",
        "point": "it giả cho thời tiết"
      },
      {
        "vi": "Bây giờ là 7 giờ.",
        "en": "It is 7 o'clock.",
        "point": "it giả cho thời gian"
      },
      {
        "vi": "Từ đây đến đó khoảng 5 km.",
        "en": "It is 5 km from here.",
        "point": "it giả cho khoảng cách"
      },
      {
        "vi": "Học tiếng Anh là điều quan trọng.",
        "en": "It is important to study English.",
        "point": "it giả + adjective + to-V"
      },
      {
        "vi": "Điều cần thiết là tất cả thành viên phải tham dự.",
        "en": "It is essential that all members attend.",
        "point": "it giả + that-clause đưa cụm dài ra sau"
      },
      {
        "vi": "Có vẻ như anh ấy bị trễ.",
        "en": "It seems that he's late.",
        "point": "it + seem/appear + that"
      },
      {
        "vi": "Học tiếng Nhật rất khó.",
        "en": "It is difficult to learn Japanese.",
        "point": "chủ ngữ giả thay cho to-V làm chủ ngữ thật"
      },
      {
        "vi": "Tôi thấy khó để dậy sớm.",
        "en": "I find it hard to wake up early.",
        "point": "it làm tân ngữ giả"
      },
      {
        "vi": "Hôm nay là thứ Hai.",
        "en": "It is Monday.",
        "point": "it giả cho ngày trong tuần"
      },
      {
        "vi": "Có một cuốn sách trên bàn.",
        "en": "There is a book on the table.",
        "point": "dùng There is chứ không phải It is khi diễn tả sự tồn tại"
      }
    ]
  },
  "reflexive-reciprocal": {
    "instruction": "Phân biệt đại từ phản thân (myself, himself...) dùng khi chủ ngữ và tân ngữ trùng nhau với đại từ tương hỗ (each other, one another) dùng khi hai bên tác động qua lại.",
    "items": [
      {
        "vi": "Cô ấy đã tự giới thiệu bản thân mình.",
        "en": "She introduced herself.",
        "point": "tân ngữ phản thân"
      },
      {
        "vi": "Tôi đã tự cắt vào tay mình khi đang nấu ăn.",
        "en": "I cut myself while cooking.",
        "point": "reflexive pronoun làm tân ngữ"
      },
      {
        "vi": "Chính tôi tự làm chiếc bánh này.",
        "en": "I made the cake myself.",
        "point": "reflexive nhấn mạnh chính mình làm"
      },
      {
        "vi": "Anh ấy sống một mình.",
        "en": "He lives by himself.",
        "point": "by + reflexive nghĩa \"một mình\""
      },
      {
        "vi": "Họ yêu nhau.",
        "en": "They love each other.",
        "point": "reciprocal pronoun each other"
      },
      {
        "vi": "Các học sinh đã giúp đỡ lẫn nhau.",
        "en": "The students helped one another.",
        "point": "one another cho nhóm nhiều người"
      },
      {
        "vi": "Họ đọc bài luận của nhau.",
        "en": "They read each other's essays.",
        "point": "sở hữu cách each other's"
      },
      {
        "vi": "Tôi cạo râu mỗi sáng.",
        "en": "I shave every morning.",
        "point": "không dùng reflexive sau động từ sinh hoạt hằng ngày"
      },
      {
        "vi": "Cô ấy để chiếc túi bên cạnh mình.",
        "en": "She put the bag next to her.",
        "point": "dùng object pronoun sau giới từ vị trí, không dùng reflexive"
      },
      {
        "vi": "Họ tự trách bản thân mình vì sai lầm đó.",
        "en": "They blamed themselves for that mistake.",
        "point": "phân biệt reflexive (tự trách mình) với reciprocal"
      }
    ]
  },
  "compound-nouns-possessives": {
    "instruction": "Chọn đúng cách diễn tả sở hữu bằng 's, of hay danh từ ghép (N+N) tùy đối tượng là người hay vật.",
    "items": [
      {
        "vi": "Đây là chiếc túi của Mary.",
        "en": "This is Mary's bag.",
        "point": "sở hữu cách 's cho người"
      },
      {
        "vi": "Đây là sách của các học sinh.",
        "en": "These are the students' books.",
        "point": "sở hữu cách s' cho danh từ số nhiều tận cùng s"
      },
      {
        "vi": "Mái nhà của ngôi nhà đã bị hỏng.",
        "en": "The roof of the house was damaged.",
        "point": "dùng of cho vật"
      },
      {
        "vi": "Đó là một cửa hàng giày.",
        "en": "That is a shoe shop.",
        "point": "danh từ đầu trong compound noun giữ số ít"
      },
      {
        "vi": "Có nhiều bàn chải đánh răng trong ngăn kéo.",
        "en": "There are many toothbrushes in the drawer.",
        "point": "số nhiều thêm vào danh từ cuối trong compound noun"
      },
      {
        "vi": "Anh ấy là một người bạn của tôi.",
        "en": "He is a friend of mine.",
        "point": "double genitive a friend of mine"
      },
      {
        "vi": "Đây là chương trình của Tom và Jerry.",
        "en": "This is Tom and Jerry's show.",
        "point": "sở hữu chung cho hai người"
      },
      {
        "vi": "Đây là xe của Tom và xe của Jerry.",
        "en": "These are Tom's and Jerry's cars.",
        "point": "sở hữu riêng, mỗi người một vật"
      },
      {
        "vi": "Đó là một chuyến đi bộ mười phút.",
        "en": "It's a ten-minute walk.",
        "point": "cụm đo lường ghép gạch nối không thêm s"
      },
      {
        "vi": "Con mèo đang liếm bộ lông của nó.",
        "en": "The cat is licking its fur.",
        "point": "its là sở hữu cách của it, không có dấu nháy đơn"
      },
      {
        "vi": "Tin tức hôm nay thật đáng lo ngại.",
        "en": "Today's news is worrying.",
        "point": "'s cho danh từ chỉ thời gian"
      }
    ]
  },
  "distributives": {
    "instruction": "Dùng đúng both/either/neither/all theo số lượng đối tượng (2 hay từ 3 trở lên) và chia động từ tương ứng.",
    "items": [
      {
        "vi": "Cả hai cuốn sách đều hữu ích.",
        "en": "Both books are useful.",
        "point": "both + danh từ số nhiều"
      },
      {
        "vi": "Ngày nào trong hai ngày đó cũng được với tôi.",
        "en": "Either day works for me.",
        "point": "either + danh từ số ít"
      },
      {
        "vi": "Không câu trả lời nào trong hai câu đó đúng cả.",
        "en": "Neither answer is correct.",
        "point": "neither + danh từ số ít, động từ số ít"
      },
      {
        "vi": "Tất cả học sinh đều đã đậu.",
        "en": "All students passed.",
        "point": "all + danh từ số nhiều"
      },
      {
        "vi": "Cả cô ấy và anh trai cô ấy đều thích âm nhạc.",
        "en": "Both she and her brother like music.",
        "point": "cặp tương hỗ both...and"
      },
      {
        "vi": "Không cái nào trong hai cái này là của tôi cả.",
        "en": "Neither of these is mine.",
        "point": "neither of + the/pronoun"
      },
      {
        "vi": "Tôi thích cà phê. Tôi cũng vậy.",
        "en": "I love coffee. — So do I.",
        "point": "so + trợ động từ + S cho câu trả lời đồng tình"
      },
      {
        "vi": "Tôi không uống rượu. Tôi cũng không.",
        "en": "I don't drink. — Neither do I.",
        "point": "neither + trợ động từ + S cho câu trả lời phủ định"
      },
      {
        "vi": "Hoặc bạn hoặc bạn của bạn đang giữ chìa khóa.",
        "en": "Either you or your friend has the key.",
        "point": "either...or chia động từ theo chủ ngữ gần nhất"
      },
      {
        "vi": "Tôi không thích cái nào trong hai cái cả.",
        "en": "I don't like either.",
        "point": "tránh phủ định kép với neither"
      },
      {
        "vi": "Chúng tôi đều đồng ý.",
        "en": "We both agree.",
        "point": "both đứng giữa câu, sau chủ ngữ trước động từ thường"
      }
    ]
  },
  "indefinite-pronouns": {
    "instruction": "Dùng đúng các đại từ bất định (someone, anything, nobody...) và ghi nhớ chúng luôn đi với động từ số ít.",
    "items": [
      {
        "vi": "Có ai đó đang ở cửa.",
        "en": "Someone is at the door.",
        "point": "someone + động từ số ít"
      },
      {
        "vi": "Có gì để ăn không?",
        "en": "Is there anything to eat?",
        "point": "anything trong câu hỏi"
      },
      {
        "vi": "Không ai biết câu trả lời.",
        "en": "Nobody knows the answer.",
        "point": "nobody + động từ số ít"
      },
      {
        "vi": "Ai đó đã để quên túi của họ.",
        "en": "Someone left their bag.",
        "point": "dùng they/their để thay cho đại từ bất định"
      },
      {
        "vi": "Tôi thích cái màu đỏ hơn.",
        "en": "I prefer the red one.",
        "point": "one thay cho danh từ đếm được đã nhắc"
      },
      {
        "vi": "Hãy ăn thêm một cái bánh quy nữa đi.",
        "en": "Have another cookie.",
        "point": "another thêm một cái chưa xác định"
      },
      {
        "vi": "Mỗi học sinh nhận được một phần quà riêng.",
        "en": "Each student receives their own gift.",
        "point": "each nhấn mạnh từng cá nhân"
      },
      {
        "vi": "Bạn có muốn uống chút trà không?",
        "en": "Would you like some tea?",
        "point": "dùng some trong câu hỏi mời/đề nghị"
      },
      {
        "vi": "Bất kỳ học sinh nào cũng có thể đăng ký.",
        "en": "Any student can apply.",
        "point": "any trong câu khẳng định nghĩa bất kỳ"
      },
      {
        "vi": "Tôi không có ý tưởng gì cả.",
        "en": "I have no idea.",
        "point": "no = not any"
      },
      {
        "vi": "Có điều gì đó kỳ lạ đang xảy ra.",
        "en": "Something strange is happening.",
        "point": "tính từ đứng sau đại từ bất định"
      },
      {
        "vi": "Tôi không biết gì cả.",
        "en": "I don't know anything.",
        "point": "tránh phủ định kép với đại từ bất định"
      }
    ]
  },
  "phrasal-prepositions": {
    "instruction": "Dùng đúng cụm giới từ chỉ vị trí, lý do, tương phản hay mục đích, phân biệt với liên từ tương đương đi kèm mệnh đề.",
    "items": [
      {
        "vi": "Có một cái cây phía trước ngôi nhà.",
        "en": "There is a tree in front of the house.",
        "point": "cụm giới từ vị trí in front of"
      },
      {
        "vi": "Con mèo đang nằm trên nóc tủ.",
        "en": "The cat is on top of the wardrobe.",
        "point": "cụm giới từ on top of"
      },
      {
        "vi": "Chúng tôi ở nhà vì trời mưa.",
        "en": "We stayed home because of the rain.",
        "point": "because of + danh từ"
      },
      {
        "vi": "Chúng tôi ở nhà vì trời đã mưa.",
        "en": "We stayed home because it rained.",
        "point": "because + mệnh đề"
      },
      {
        "vi": "Theo báo cáo, doanh số đã tăng.",
        "en": "According to the report, sales went up.",
        "point": "cụm tham chiếu according to"
      },
      {
        "vi": "Mặc dù giá cao, chúng tôi vẫn mua nó.",
        "en": "Despite the cost, we bought it.",
        "point": "despite + danh từ"
      },
      {
        "vi": "Mặc dù nó đắt, chúng tôi vẫn mua nó.",
        "en": "Although it was expensive, we bought it.",
        "point": "although + mệnh đề"
      },
      {
        "vi": "Cô ấy rời sớm để kịp chuyến xe buýt.",
        "en": "She left early in order to catch the bus.",
        "point": "in order to + động từ nguyên mẫu chỉ mục đích"
      },
      {
        "vi": "Việc chậm trễ là do tắc đường.",
        "en": "The delay was due to traffic.",
        "point": "due to đứng sau động từ be"
      },
      {
        "vi": "Nhờ có sự giúp đỡ của bạn, tôi đã hoàn thành đúng hạn.",
        "en": "Thanks to your help, I finished on time.",
        "point": "thanks to + danh từ chỉ nguyên nhân tích cực"
      }
    ]
  },
  "adjective-order": {
    "instruction": "Sắp xếp đúng trật tự các tính từ đứng trước danh từ theo quy tắc Opinion - Size - Age - Shape - Colour - Origin - Material - Purpose.",
    "items": [
      {
        "vi": "Đó là một đôi bốt cưỡi ngựa da Ý màu đen tròn cũ nhỏ xinh.",
        "en": "It's a lovely little old round black Italian leather riding boot.",
        "point": "trật tự tính từ đầy đủ OSASCOMP"
      },
      {
        "vi": "Đó là một cái bàn gỗ trắng mới to đẹp.",
        "en": "It's a beautiful big new white wooden table.",
        "point": "trật tự opinion-size-age-colour-material"
      },
      {
        "vi": "Cô ấy có một con chó nhỏ dễ thương.",
        "en": "She has a lovely little dog.",
        "point": "opinion đứng trước size"
      },
      {
        "vi": "Anh ấy mua một cái bàn tròn cũ to.",
        "en": "He bought a big old round table.",
        "point": "size-age-shape đúng thứ tự"
      },
      {
        "vi": "Anh ấy có một chiếc áo khoác da Pháp màu nâu.",
        "en": "He has a brown French leather jacket.",
        "point": "colour-origin-material đúng thứ tự"
      },
      {
        "vi": "Anh ấy là một người du khách mệt mỏi và đói bụng.",
        "en": "He was a tired, hungry traveller.",
        "point": "dấu phẩy ngăn cách hai tính từ cùng nhóm"
      },
      {
        "vi": "Cô ấy mua một cái túi ngủ mới.",
        "en": "She bought a new sleeping bag.",
        "point": "tính từ chỉ mục đích đứng sát danh từ nhất"
      },
      {
        "vi": "Anh ấy có một đôi giày da đi bộ đường dài.",
        "en": "He has leather hiking boots.",
        "point": "material đứng trước purpose"
      }
    ]
  },
  "spelling-rules": {
    "instruction": "Chú ý quy tắc chính tả khi thêm -s/-ed/-ing/-er/-est: bỏ e câm, đổi y thành i, gấp đôi phụ âm cuối đúng trường hợp.",
    "items": [
      {
        "vi": "Cô ấy đang làm bánh trong bếp.",
        "en": "She is making a cake in the kitchen.",
        "point": "bỏ e câm trước -ing"
      },
      {
        "vi": "Bông hoa đó đang héo dần.",
        "en": "The flower is dying.",
        "point": "ie đổi thành y trước -ing"
      },
      {
        "vi": "Cô ấy đã học bài rất chăm chỉ tối qua.",
        "en": "She studied very hard last night.",
        "point": "phụ âm + y đổi thành i trước -ed"
      },
      {
        "vi": "Bọn trẻ đang chơi ngoài sân.",
        "en": "The children are playing in the yard.",
        "point": "nguyên âm + y giữ nguyên trước -ing"
      },
      {
        "vi": "Anh ấy đã dừng xe đột ngột.",
        "en": "He stopped the car suddenly.",
        "point": "gấp đôi phụ âm cuối trong từ một âm tiết"
      },
      {
        "vi": "Có ba chiếc xe buýt đang đợi ở bến.",
        "en": "There are three buses waiting at the stop.",
        "point": "thêm -es cho danh từ tận cùng s"
      },
      {
        "vi": "Anh ấy đã mua hai con dao mới.",
        "en": "He bought two new knives.",
        "point": "knife đổi thành knives"
      },
      {
        "vi": "Anh ấy đã thích công việc mới ngay lập tức.",
        "en": "He preferred the new job immediately.",
        "point": "gấp đôi phụ âm khi trọng âm rơi vào âm cuối"
      },
      {
        "vi": "Cô ấy đã đến thăm bà của mình vào cuối tuần.",
        "en": "She visited her grandmother at the weekend.",
        "point": "không gấp đôi phụ âm khi trọng âm không ở âm cuối"
      },
      {
        "vi": "Cô ấy hạnh phúc hơn bây giờ.",
        "en": "She is happier now.",
        "point": "y đổi thành i trước -er"
      },
      {
        "vi": "Mọi người đã hoảng loạn khi nghe tin đó.",
        "en": "Everyone panicked when they heard the news.",
        "point": "từ tận cùng c thêm k trước -ed"
      },
      {
        "vi": "Có nhiều con chuột trong nhà kho.",
        "en": "There are many mice in the barn.",
        "point": "số nhiều bất quy tắc mouse → mice"
      }
    ]
  },
  "have-got": {
    "instruction": "Diễn tả sở hữu bằng have hoặc have got, chú ý cách phủ định, nghi vấn và phân biệt have to với have got to.",
    "items": [
      {
        "vi": "Cô ấy có mái tóc dài.",
        "en": "She has long hair.",
        "point": "have diễn tả sở hữu, đặc điểm"
      },
      {
        "vi": "Tôi bị đau đầu.",
        "en": "I've got a headache.",
        "point": "have got mang nghĩa sở hữu/bệnh tật, văn nói Anh-Anh"
      },
      {
        "vi": "Tôi không có con chó nào.",
        "en": "I don't have a dog.",
        "point": "phủ định don't have"
      },
      {
        "vi": "Tôi không có con chó nào cả.",
        "en": "I haven't got a dog.",
        "point": "phủ định haven't got"
      },
      {
        "vi": "Bạn có xe hơi không?",
        "en": "Do you have a car?",
        "point": "câu hỏi do you have"
      },
      {
        "vi": "Bạn có con chó không?",
        "en": "Have you got a dog?",
        "point": "câu hỏi have you got"
      },
      {
        "vi": "Ngày trước tôi có một con mèo.",
        "en": "I had a cat before.",
        "point": "quá khứ chỉ dùng had, không dùng had got"
      },
      {
        "vi": "Tôi ăn sáng lúc 7 giờ.",
        "en": "I have breakfast at 7.",
        "point": "have got không dùng cho hành động như ăn/uống"
      },
      {
        "vi": "Tôi phải làm việc vào các ngày thứ Bảy.",
        "en": "I have to work on Saturdays.",
        "point": "have to cho nghĩa vụ lặp lại, chung"
      },
      {
        "vi": "Tôi phải đi ngay bây giờ!",
        "en": "I've got to go now!",
        "point": "have got to cho nghĩa vụ ngay lúc nói"
      },
      {
        "vi": "Bạn không cần phải trả lời câu hỏi đó.",
        "en": "You don't have to answer that question.",
        "point": "don't have to nghĩa là không cần, khác mustn't"
      }
    ]
  },
  "used-to": {
    "instruction": "Phân biệt used to (thói quen quá khứ đã chấm dứt) với be used to và get used to (đã quen/đang dần quen với điều gì).",
    "items": [
      {
        "vi": "Trước đây tôi hút thuốc.",
        "en": "I used to smoke.",
        "point": "used to + V cho thói quen quá khứ không còn"
      },
      {
        "vi": "Tôi đã quen dậy sớm rồi.",
        "en": "I am used to getting up early.",
        "point": "be used to + V-ing đã quen"
      },
      {
        "vi": "Tôi đang dần quen với cái lạnh.",
        "en": "I'm getting used to the cold.",
        "point": "get used to + V-ing đang dần quen"
      },
      {
        "vi": "Trước đây tôi không thích cà phê.",
        "en": "I didn't use to like coffee.",
        "point": "phủ định didn't use to"
      },
      {
        "vi": "Tôi chưa quen với thức ăn cay.",
        "en": "I am not used to spicy food.",
        "point": "phủ định am/is not used to + N"
      },
      {
        "vi": "Trước đây bạn có sống ở đó không?",
        "en": "Did you use to live there?",
        "point": "câu hỏi did you use to"
      },
      {
        "vi": "Bạn đã quen với việc lái xe bên trái chưa?",
        "en": "Are you used to driving on the left?",
        "point": "câu hỏi are you used to + V-ing"
      },
      {
        "vi": "Trước đây tôi sống ở Huế.",
        "en": "I used to live in Hue.",
        "point": "used to cho trạng thái ở quá khứ"
      },
      {
        "vi": "Mỗi mùa hè chúng tôi thường đến thăm bà.",
        "en": "Every summer we would visit Grandma.",
        "point": "would cho hành động lặp lại trong quá khứ, không dùng cho trạng thái"
      },
      {
        "vi": "Cô ấy đang dần quen với công việc mới.",
        "en": "She is getting used to her new job.",
        "point": "get used to + danh từ"
      }
    ]
  },
  "time-prepositions-deep": {
    "instruction": "Dùng đúng for, since, during, while, by, until theo đúng bản chất thời gian mà mỗi từ diễn tả.",
    "items": [
      {
        "vi": "Tôi đã sống ở đây được năm năm.",
        "en": "I've lived here for five years.",
        "point": "for + khoảng thời gian với present perfect"
      },
      {
        "vi": "Tôi đã sống ở đây từ năm 2019.",
        "en": "I've lived here since 2019.",
        "point": "since + mốc thời gian bắt đầu"
      },
      {
        "vi": "Điện thoại của anh ấy đổ chuông trong suốt bộ phim.",
        "en": "His phone rang during the film.",
        "point": "during + danh từ"
      },
      {
        "vi": "Điện thoại của anh ấy đổ chuông trong khi tôi đang xem.",
        "en": "His phone rang while I was watching.",
        "point": "while + mệnh đề"
      },
      {
        "vi": "Hãy nộp báo cáo trước thứ Sáu.",
        "en": "Submit the report by Friday.",
        "point": "by + hạn chót"
      },
      {
        "vi": "Tôi sẽ đợi cho đến thứ Sáu.",
        "en": "I'll wait until Friday.",
        "point": "until diễn tả kéo dài đến một thời điểm"
      },
      {
        "vi": "Chúng tôi sẽ hoàn thành trong vòng 2 giờ.",
        "en": "We will finish within 2 hours.",
        "point": "within nghĩa không quá một khoảng thời gian"
      },
      {
        "vi": "Anh ấy đã rời đi hai ngày trước.",
        "en": "He left two days ago.",
        "point": "ago tính từ hiện tại"
      },
      {
        "vi": "Anh ấy đã rời đi hai ngày trước khi cô ấy đến.",
        "en": "He left two days before she arrived.",
        "point": "before tính từ một mốc khác, không phải hiện tại"
      },
      {
        "vi": "Tôi sẽ hoàn thành công việc trước 5 giờ chiều.",
        "en": "I'll have finished by 5pm.",
        "point": "by + thì tương lai hoàn thành"
      },
      {
        "vi": "Anh ấy đã không đến cho đến 8 giờ.",
        "en": "He didn't come until 8.",
        "point": "until với hành động một lần phải ở dạng phủ định"
      }
    ]
  },
  "tag-questions": {
    "instruction": "Lập đúng câu hỏi đuôi: đảo cực (khẳng định - phủ định) và chọn đúng trợ động từ tương ứng với mệnh đề chính.",
    "items": [
      {
        "vi": "Trời nóng, phải không?",
        "en": "It's hot, isn't it?",
        "point": "câu với be, tag phủ định"
      },
      {
        "vi": "Bạn có thể bơi, phải không?",
        "en": "You can swim, can't you?",
        "point": "tag lặp lại modal verb"
      },
      {
        "vi": "Anh ấy chơi piano, phải không?",
        "en": "He plays piano, doesn't he?",
        "point": "thêm does khi câu chính không có trợ động từ"
      },
      {
        "vi": "Cô ấy không hút thuốc, phải không?",
        "en": "She doesn't smoke, does she?",
        "point": "câu phủ định đi với tag khẳng định"
      },
      {
        "vi": "Họ đã về nhà rồi, phải không?",
        "en": "They went home, didn't they?",
        "point": "tag với did cho quá khứ đơn"
      },
      {
        "vi": "Tôi đúng, phải không?",
        "en": "I'm right, aren't I?",
        "point": "I am dùng tag aren't I"
      },
      {
        "vi": "Chúng ta đi thôi, được không?",
        "en": "Let's go, shall we?",
        "point": "Let's dùng tag shall we"
      },
      {
        "vi": "Mở cửa ra giúp tôi nhé?",
        "en": "Open the door, will you?",
        "point": "câu mệnh lệnh dùng tag will you"
      },
      {
        "vi": "Anh ấy chẳng bao giờ nói dối, phải không?",
        "en": "He never lies, does he?",
        "point": "từ phủ định nghĩa (never) đi với tag khẳng định"
      },
      {
        "vi": "Tôi nghĩ anh ấy đúng, phải không?",
        "en": "I think he is right, isn't he?",
        "point": "tag chia theo mệnh đề chính khi có \"I think\""
      }
    ]
  },
  "discourse-markers": {
    "instruction": "Dùng đúng từ nối/discourse marker (however, therefore, for example...) để liên kết ý giữa các câu, chú ý dấu câu đi kèm.",
    "items": [
      {
        "vi": "Giá thì cao. Hơn nữa, chất lượng cũng không tốt.",
        "en": "The price is high. Moreover, the quality is not good.",
        "point": "discourse marker bổ sung ý - moreover"
      },
      {
        "vi": "Giá thì cao. Tuy nhiên, chất lượng rất tuyệt vời.",
        "en": "The price is high. However, the quality is excellent.",
        "point": "discourse marker tương phản - however"
      },
      {
        "vi": "Anh ấy học chăm chỉ. Kết quả là, anh ấy đã đậu.",
        "en": "He studied hard. As a result, he passed.",
        "point": "discourse marker nêu kết quả - as a result"
      },
      {
        "vi": "Có nhiều loại trái cây, ví dụ như táo và chuối.",
        "en": "There are many kinds of fruit, for example apples and bananas.",
        "point": "discourse marker đưa ví dụ - for example"
      },
      {
        "vi": "Tóm lại, kế hoạch này rất khả thi.",
        "en": "In short, this plan is feasible.",
        "point": "discourse marker tóm tắt - in short"
      },
      {
        "vi": "Đầu tiên, hãy bật máy tính lên. Sau đó, mở ứng dụng.",
        "en": "First, turn on the computer. Then, open the app.",
        "point": "discourse marker trình tự - first, then"
      },
      {
        "vi": "Anh ấy đã bị sa thải, nói cách khác, anh ấy mất việc.",
        "en": "He was fired; in other words, he lost his job.",
        "point": "discourse marker diễn đạt lại - in other words"
      },
      {
        "vi": "Thực ra, cô ấy chưa từng đến đó.",
        "en": "In fact, she has never been there.",
        "point": "discourse marker nhấn mạnh - in fact"
      },
      {
        "vi": "Tôi mệt. Tuy nhiên, tôi vẫn làm việc.",
        "en": "I was tired. However, I worked.",
        "point": "however đứng đầu câu mới với dấu chấm, không nối trực tiếp như but"
      },
      {
        "vi": "Kết quả, tuy nhiên, đã rất rõ ràng.",
        "en": "The result, however, was clear.",
        "point": "discourse marker ở giữa câu ngăn bằng dấu phẩy"
      },
      {
        "vi": "Cô ấy thông minh. Thêm vào đó, cô ấy rất chăm chỉ.",
        "en": "She is intelligent. In addition, she is very hardworking.",
        "point": "discourse marker bổ sung - in addition"
      }
    ]
  },
  "exclamatory-sentences": {
    "instruction": "Dùng đúng cấu trúc câu cảm thán với What (a/an) + N hoặc How + adj/adv để diễn tả cảm xúc.",
    "items": [
      {
        "vi": "Đúng là một ý tưởng tuyệt vời!",
        "en": "What a great idea!",
        "point": "What a/an + adj + danh từ số ít đếm được"
      },
      {
        "vi": "Thời tiết đẹp quá!",
        "en": "What nice weather!",
        "point": "What + adj + danh từ không đếm được, không có a/an"
      },
      {
        "vi": "Đúng là những bông hoa đẹp!",
        "en": "What lovely flowers these are!",
        "point": "What + adj + danh từ số nhiều"
      },
      {
        "vi": "Thú vị quá!",
        "en": "How interesting!",
        "point": "How + adjective"
      },
      {
        "vi": "Anh ấy chạy nhanh thật!",
        "en": "How fast he runs!",
        "point": "How + adverb + S + V"
      },
      {
        "vi": "Đó là một ngày thật đẹp!",
        "en": "It's such a nice day!",
        "point": "such nhấn mạnh cảm thán"
      },
      {
        "vi": "Anh ấy tốt bụng quá!",
        "en": "He's so kind!",
        "point": "so nhấn mạnh cảm thán"
      },
      {
        "vi": "Tôi chưa bao giờ thấy vẻ đẹp như vậy!",
        "en": "Never have I seen such beauty!",
        "point": "đảo ngữ never + trợ động từ trong câu cảm thán"
      },
      {
        "vi": "Giá mà tôi đã biết điều đó!",
        "en": "If only I had known!",
        "point": "If only diễn tả cảm thán tiếc nuối"
      },
      {
        "vi": "Trời ơi, thật là vất vả!",
        "en": "Boy, that was tough!",
        "point": "thán từ kèm câu trần thuật"
      }
    ]
  },
  "substitution-ellipsis": {
    "instruction": "Dịch các câu sau, chú ý dùng so/not, do, one(s), that/those hoặc lược bỏ phần đã nhắc để tránh lặp từ như tiếng Anh tự nhiên hay làm.",
    "items": [
      {
        "vi": "Trời sẽ mưa à? — Tôi nghĩ vậy.",
        "en": "Will it rain? — I think so.",
        "point": "so thay cho mệnh đề sau think"
      },
      {
        "vi": "Cậu ấy có đến không? — Tôi e là không.",
        "en": "Is he coming? — I'm afraid not.",
        "point": "not thay cho mệnh đề phủ định sau afraid"
      },
      {
        "vi": "Cô ấy chạy nhanh hơn tôi.",
        "en": "She runs faster than I do.",
        "point": "do thay cho động từ + bổ ngữ"
      },
      {
        "vi": "Anh thích đôi giày nào? — Đôi màu đen.",
        "en": "Which shoes do you like? — The black ones.",
        "point": "one/ones thay danh từ đếm được"
      },
      {
        "vi": "Khí hậu Hà Nội mát hơn khí hậu Sài Gòn.",
        "en": "The climate of Hanoi is cooler than that of Saigon.",
        "point": "that/those thay danh từ trong văn trang trọng"
      },
      {
        "vi": "Cô ấy mua một quyển sách và một cây bút.",
        "en": "She bought a book and a pen.",
        "point": "ellipsis sau and: lược chủ ngữ và động từ lặp"
      },
      {
        "vi": "Bạn có muốn đi xem phim không? — Tôi rất muốn.",
        "en": "Do you want to go to the movies? — I'd love to.",
        "point": "ellipsis sau to-infinitive: to thay cho cả cụm động từ"
      },
      {
        "vi": "Cô ấy cao hơn anh trai mình.",
        "en": "She's taller than her brother is.",
        "point": "ellipsis trong câu so sánh: lược động từ lặp"
      },
      {
        "vi": "Tôi rất mệt. — Tôi cũng vậy.",
        "en": "I'm tired. — So am I.",
        "point": "So + trợ động từ + S: đồng tình ở câu khẳng định"
      },
      {
        "vi": "Tôi không biết câu trả lời. — Tôi cũng không.",
        "en": "I don't know the answer. — Neither do I.",
        "point": "Neither/Nor + trợ động từ + S: đồng tình ở câu phủ định"
      }
    ]
  },
  "comparative-correlatives": {
    "instruction": "Dịch các câu sau bằng cấu trúc 'The + so sánh..., the + so sánh...' (càng...càng...), chú ý dạng tính từ ngắn/dài, trạng từ và danh từ.",
    "items": [
      {
        "vi": "Bạn học càng chăm, điểm càng cao.",
        "en": "The harder you study, the better you score.",
        "point": "tính từ/trạng từ ngắn: the + adj-er, the + adj-er"
      },
      {
        "vi": "Món hàng càng đắt, chất lượng càng sang trọng.",
        "en": "The more expensive the item, the more luxurious the quality.",
        "point": "tính từ dài: the more + adj"
      },
      {
        "vi": "Bạn lái xe càng nhanh, tai nạn càng dễ xảy ra.",
        "en": "The faster you drive, the more likely an accident is.",
        "point": "trạng từ ngắn: the + adv-er"
      },
      {
        "vi": "Anh ấy càng có nhiều tiền, anh ấy càng có nhiều bạn.",
        "en": "The more money he has, the more friends he gets.",
        "point": "danh từ: the more + N, the more + N"
      },
      {
        "vi": "Càng sớm càng tốt.",
        "en": "The sooner, the better.",
        "point": "lược động từ be trong văn nói thân mật"
      },
      {
        "vi": "Tôi càng già đi, tôi càng khôn ngoan hơn.",
        "en": "The older I get, the wiser I become.",
        "point": "công thức cơ bản: The + comparative + S + V, the + comparative + S + V"
      },
      {
        "vi": "Bạn đọc càng nhiều mà không tập trung, bạn hiểu càng ít.",
        "en": "The more you read without focusing, the less you understand.",
        "point": "the more...the less: hai vế đối lập nhau"
      },
      {
        "vi": "Càng nhiều người tham gia, buổi tiệc càng vui.",
        "en": "The more people join, the merrier the party gets.",
        "point": "danh từ số nhiều kết hợp the + adj-er ở vế sau"
      }
    ]
  },
  "phrasal-verbs": {
    "instruction": "Dịch các câu sau bằng phrasal verb phù hợp, chú ý loại nội động/ngoại động, vị trí tân ngữ (đặc biệt khi là đại từ) và các cụm ba từ không được tách rời.",
    "items": [
      {
        "vi": "Máy bay cất cánh lúc 7 giờ sáng.",
        "en": "The plane took off at 7 a.m.",
        "point": "phrasal verb nội động (intransitive): take off"
      },
      {
        "vi": "Làm ơn tắt đèn giúp tôi.",
        "en": "Please turn the light off.",
        "point": "ngoại động tách được: tân ngữ danh từ đặt giữa hoặc cuối"
      },
      {
        "vi": "Làm ơn tắt nó đi.",
        "en": "Please turn it off.",
        "point": "ngoại động tách được: đại từ tân ngữ bắt buộc đứng giữa"
      },
      {
        "vi": "Ai sẽ chăm sóc bọn trẻ tối nay?",
        "en": "Who will look after the kids tonight?",
        "point": "ngoại động không tách được (inseparable): look after"
      },
      {
        "vi": "Tôi luôn mong chờ kỳ nghỉ hè.",
        "en": "I always look forward to the summer holiday.",
        "point": "phrasal verb 3 từ (V+adv+prep): không chèn tân ngữ vào giữa"
      },
      {
        "vi": "Xe của anh ấy bị hỏng giữa đường.",
        "en": "His car broke down on the way.",
        "point": "nghĩa thành ngữ khác xa nghĩa đen: break down"
      },
      {
        "vi": "Cô ấy đã từ bỏ việc học tiếng Pháp.",
        "en": "She gave up learning French.",
        "point": "phrasal verb + V-ing: give up (từ bỏ)"
      },
      {
        "vi": "Đừng trì hoãn cuộc họp nữa.",
        "en": "Don't put off the meeting anymore.",
        "point": "particle 'off' mang nghĩa hoãn/hủy: put off"
      },
      {
        "vi": "Chúng tôi đã hết thời gian rồi.",
        "en": "We ran out of time.",
        "point": "particle 'out' mang nghĩa hết/cạn: run out of"
      },
      {
        "vi": "Cô ấy đã nghĩ ra một giải pháp mới.",
        "en": "She came up with a new solution.",
        "point": "phrasal verb 3 từ: come up with"
      },
      {
        "vi": "Trong một báo cáo chính thức, ta nên dùng 'postpone' thay vì 'put off'.",
        "en": "In an official report, we should use 'postpone' instead of 'put off'.",
        "point": "văn trang trọng thay phrasal verb bằng động từ gốc Latin"
      },
      {
        "vi": "Bạn có hợp với đồng nghiệp mới không?",
        "en": "Do you get along with your new colleague?",
        "point": "phrasal verb 3 từ chủ đề quan hệ: get along with"
      }
    ]
  },
  "verb-patterns": {
    "instruction": "Dịch các câu sau, chọn đúng cấu trúc theo sau mỗi động từ (to-V, V-ing, O+to-V, O+V nguyên mẫu, that-clause, wh-clause...) vì mỗi động từ 'đòi' một mẫu riêng.",
    "items": [
      {
        "vi": "Cô ấy quyết định rời đi sớm.",
        "en": "She decided to leave early.",
        "point": "V + to-V: decide"
      },
      {
        "vi": "Tôi tránh ăn đồ ngọt.",
        "en": "I avoid eating sugar.",
        "point": "V + V-ing: avoid"
      },
      {
        "vi": "Anh ấy bảo tôi đợi ở đây.",
        "en": "He told me to wait here.",
        "point": "V + O + to-V: tell"
      },
      {
        "vi": "Mẹ để tôi đi chơi với bạn.",
        "en": "My mother let me go out with my friends.",
        "point": "V + O + V nguyên mẫu (bare) sau let"
      },
      {
        "vi": "Tôi thấy anh ấy rời khỏi tòa nhà.",
        "en": "I saw him leave the building.",
        "point": "V + O + V nguyên mẫu sau động từ tri giác (see)"
      },
      {
        "vi": "Tôi nghĩ rằng trời đã muộn rồi.",
        "en": "I think that it's late.",
        "point": "V + that-clause: think"
      },
      {
        "vi": "Tôi không biết phải làm gì.",
        "en": "I don't know what to do.",
        "point": "V + wh-clause: know what to do"
      },
      {
        "vi": "Tôi xem cô ấy như một người bạn.",
        "en": "I regard her as a friend.",
        "point": "V + O + as: regard"
      },
      {
        "vi": "Tôi nhớ đã khóa cửa rồi, không cần khóa lại đâu.",
        "en": "I remember locking the door.",
        "point": "remember + V-ing: nhớ đã làm (khác remember to do)"
      },
      {
        "vi": "Đừng quên gọi cho tôi vào tối nay nhé.",
        "en": "Don't forget to call me tonight.",
        "point": "forget + to-V: quên (sắp) phải làm"
      },
      {
        "vi": "Cái xe này cần được rửa rồi.",
        "en": "The car needs washing.",
        "point": "need + V-ing mang nghĩa bị động (= needs to be washed)"
      },
      {
        "vi": "Giáo viên đề nghị rằng chúng ta nên ôn lại bài trước khi thi.",
        "en": "The teacher suggested reviewing the lesson before the exam.",
        "point": "suggest + V-ing (không dùng suggest + to-V)"
      }
    ]
  },
  "mixed-conditionals": {
    "instruction": "Dịch các câu điều kiện sau, chú ý phân biệt các dạng mixed conditional (mốc thời gian khác nhau ở hai vế) và các cách đảo ngữ/thay 'if' trang trọng.",
    "items": [
      {
        "vi": "Nếu tôi học ngành y, giờ tôi đã là bác sĩ rồi.",
        "en": "If I had studied medicine, I would be a doctor now.",
        "point": "mixed conditional: điều kiện quá khứ – kết quả hiện tại"
      },
      {
        "vi": "Nếu cô ấy cẩn thận hơn, cô ấy đã không mắc lỗi đó.",
        "en": "If she were more careful, she wouldn't have made that mistake.",
        "point": "mixed conditional: tính cách hiện tại – kết quả quá khứ"
      },
      {
        "vi": "Nếu bạn cần giúp đỡ, hãy gọi cho tôi.",
        "en": "Should you need help, please call me.",
        "point": "inverted conditional loại 1 (trang trọng): Should + S + V thay If + hiện tại"
      },
      {
        "vi": "Nếu tôi ở vị trí của bạn, tôi sẽ chấp nhận lời đề nghị đó.",
        "en": "Were I in your shoes, I would accept the offer.",
        "point": "inverted conditional loại 2 (trang trọng): Were + S thay If + quá khứ"
      },
      {
        "vi": "Nếu tôi biết trước, tôi đã đến rồi.",
        "en": "Had I known, I would have come.",
        "point": "inverted conditional loại 3 (trang trọng): Had + S + V3 thay If + quá khứ hoàn thành"
      },
      {
        "vi": "Tôi sẽ không đi trừ khi bạn đi cùng.",
        "en": "I won't go unless you come with me.",
        "point": "unless = if not"
      },
      {
        "vi": "Bạn có thể dùng phòng họp miễn là bạn dọn dẹp sau đó.",
        "en": "You can use the meeting room provided that you clean up afterward.",
        "point": "provided/providing that: nhấn điều kiện bắt buộc"
      },
      {
        "vi": "Giả sử bạn trúng số, bạn sẽ làm gì?",
        "en": "Suppose you won the lottery, what would you do?",
        "point": "Suppose/Supposing mở câu giả định trong văn nói"
      },
      {
        "vi": "Nếu không có sự giúp đỡ của bạn, tôi đã thất bại rồi.",
        "en": "But for your help, I would have failed.",
        "point": "But for + N: nếu không có... (= if it hadn't been for)"
      },
      {
        "vi": "Hãy mang theo ô, nếu không bạn sẽ bị ướt.",
        "en": "Take an umbrella, otherwise you'll get wet.",
        "point": "otherwise: nếu không thì..."
      },
      {
        "vi": "Nếu công ty đầu tư vào công nghệ sớm hơn, bây giờ họ đã dẫn đầu thị trường.",
        "en": "If the company had invested in technology earlier, it would be leading the market now.",
        "point": "mixed conditional (quá khứ - hiện tại) trong ngữ cảnh kinh doanh"
      }
    ]
  },
  "cleft-sentences": {
    "instruction": "Dịch các câu sau bằng cấu trúc câu chẻ (It is/was...that/who... hoặc What...is/was...) để nhấn mạnh đúng thành phần được gạch chân trong nghĩa.",
    "items": [
      {
        "vi": "Chính John đã làm vỡ chiếc bình, chứ không phải ai khác.",
        "en": "It was John who broke the vase.",
        "point": "câu chẻ (it-cleft) nhấn mạnh chủ ngữ (người)"
      },
      {
        "vi": "Chính chiếc bình là thứ mà John đã làm vỡ, không phải cái ly.",
        "en": "It was the vase that John broke.",
        "point": "câu chẻ (it-cleft) nhấn mạnh tân ngữ (vật)"
      },
      {
        "vi": "Chính hôm qua John đã làm vỡ chiếc bình.",
        "en": "It was yesterday that John broke the vase.",
        "point": "câu chẻ (it-cleft) nhấn mạnh thời gian"
      },
      {
        "vi": "Chính tại Hà Nội mà tôi đã gặp cô ấy.",
        "en": "It was in Hanoi that I met her.",
        "point": "câu chẻ (it-cleft) nhấn mạnh nơi chốn"
      },
      {
        "vi": "Điều tôi cần là thêm thời gian.",
        "en": "What I need is more time.",
        "point": "câu chẻ giả (pseudo-cleft/wh-cleft) nhấn mạnh thông tin"
      },
      {
        "vi": "Tất cả những gì tôi muốn là sự bình yên.",
        "en": "All I want is peace.",
        "point": "câu chẻ dạng all-cleft nhấn tính duy nhất"
      },
      {
        "vi": "Thêm thời gian mới chính là điều tôi cần.",
        "en": "More time is what I need.",
        "point": "reverse pseudo-cleft: đặt thành phần nhấn mạnh lên đầu câu"
      },
      {
        "vi": "Điều tôi đã làm là gọi điện cho cô ấy.",
        "en": "What I did was call her.",
        "point": "pseudo-cleft với động từ nguyên mẫu không to sau was"
      },
      {
        "vi": "Không phải John làm vỡ nó đâu, mà là Mary.",
        "en": "It wasn't John who broke it – it was Mary.",
        "point": "câu chẻ phủ định dùng để sửa thông tin sai"
      },
      {
        "vi": "Chính vì trời mưa nên chúng tôi đã hủy chuyến đi.",
        "en": "It was because it was raining that we cancelled the trip.",
        "point": "câu chẻ (it-cleft) nhấn mạnh lý do"
      }
    ]
  },
  "reduced-relatives": {
    "instruction": "Dịch các câu sau bằng cách rút gọn mệnh đề quan hệ thành cụm phân từ (V-ing, V3, hoặc to-V) khi có thể, và đặt cụm rút gọn sát danh từ nó bổ nghĩa.",
    "items": [
      {
        "vi": "Người đàn ông đang đứng ở đằng kia là anh trai tôi.",
        "en": "The man standing over there is my brother.",
        "point": "rút gọn who+be+V-ing → V-ing (chủ động)"
      },
      {
        "vi": "Quyển sách được viết bởi ông ấy rất nổi tiếng.",
        "en": "The book written by him is very famous.",
        "point": "rút gọn who+be+V3 → V3 (bị động)"
      },
      {
        "vi": "Bất kỳ ai muốn tham gia đều được chào đón.",
        "en": "Anyone wanting to join is welcome.",
        "point": "rút gọn mệnh đề chủ động lặp động từ → V-ing"
      },
      {
        "vi": "Những học sinh vắng mặt hôm qua sẽ phải thi bù.",
        "en": "The students absent yesterday will have to take a make-up test.",
        "point": "rút gọn who+be+adj → tính từ trực tiếp"
      },
      {
        "vi": "Những người sống ở thành phố thường bận rộn hơn.",
        "en": "People living in cities are often busier.",
        "point": "rút gọn mệnh đề chủ động (live) → V-ing"
      },
      {
        "vi": "Ông ấy là người đầu tiên đặt chân lên mặt trăng.",
        "en": "He was the first man to land on the moon.",
        "point": "rút gọn who+can/should+V → to-V sau danh từ chỉ thứ tự"
      },
      {
        "vi": "Vừa đi bộ trên phố, tôi nhìn thấy tòa nhà đẹp đó.",
        "en": "Walking down the street, I saw that beautiful building.",
        "point": "phân từ rút gọn phải sát chủ ngữ logic, tránh dangling participle"
      },
      {
        "vi": "Những chiếc ghế được bán trong cửa hàng đó khá đắt.",
        "en": "The chairs sold in that shop are quite expensive.",
        "point": "rút gọn who/which+be+V3 → V3 (bị động) với danh từ số nhiều"
      }
    ]
  },
  "reducing-adverbial-clauses": {
    "instruction": "Dịch các câu sau bằng cách rút gọn mệnh đề trạng ngữ thành cụm V-ing, V3 hoặc Having + V3 khi hai mệnh đề có cùng chủ ngữ.",
    "items": [
      {
        "vi": "Trong khi đợi, tôi đọc báo.",
        "en": "While waiting, I read the news.",
        "point": "rút gọn while+S+V → while+V-ing (cùng chủ ngữ)"
      },
      {
        "vi": "Sau khi hoàn thành báo cáo, cô ấy đã gửi nó đi.",
        "en": "After finishing the report, she sent it.",
        "point": "rút gọn after+S+V → after+V-ing"
      },
      {
        "vi": "Vì sợ bị trễ, cô ấy đã rời đi sớm.",
        "en": "Afraid of being late, she left early.",
        "point": "rút gọn because/as+S+be+adj → cụm tính từ trực tiếp"
      },
      {
        "vi": "Được cảnh báo trước, anh ấy đã tránh được sai lầm đó.",
        "en": "Warned in advance, he avoided the mistake.",
        "point": "rút gọn because+S+be+V3 (bị động) → cụm V3"
      },
      {
        "vi": "Sau khi đã hoàn thành nhiệm vụ, anh ấy về nhà.",
        "en": "Having finished the task, he went home.",
        "point": "rút gọn after+S+had+V3 → Having + V3 (nhấn hành động hoàn tất trước)"
      },
      {
        "vi": "Khi được hỏi, cô ấy trả lời rất bình tĩnh.",
        "en": "When asked, she answered calmly.",
        "point": "rút gọn mệnh đề bị động: lược cả chủ ngữ và be"
      },
      {
        "vi": "Trước khi rời khỏi văn phòng, anh ấy đã tắt hết đèn.",
        "en": "Before leaving the office, he turned off all the lights.",
        "point": "rút gọn before+S+V → before+V-ing"
      },
      {
        "vi": "Đang lái xe về nhà, tôi bỗng thấy trời đổ mưa.",
        "en": "While driving home, I suddenly saw it start to rain.",
        "point": "tránh dangling participle: chủ ngữ mệnh đề rút gọn phải trùng chủ ngữ chính"
      }
    ]
  },
  "subjunctive": {
    "instruction": "Dịch các câu sau bằng thức giả định (subjunctive): động từ nguyên mẫu (bare V) sau that, kể cả với chủ ngữ số ít, theo sau các động từ/tính từ chỉ yêu cầu, đề nghị, quan trọng.",
    "items": [
      {
        "vi": "Tôi đề nghị rằng anh ấy nên đúng giờ.",
        "en": "I suggest that he be on time.",
        "point": "subjunctive: V nguyên mẫu sau suggest + that"
      },
      {
        "vi": "Điều cần thiết là cô ấy phải tham dự cuộc họp.",
        "en": "It is essential that she attend the meeting.",
        "point": "subjunctive sau it is + tính từ (essential) + that"
      },
      {
        "vi": "Bác sĩ khuyên anh ấy nên bỏ thuốc lá.",
        "en": "The doctor recommended that he stop smoking.",
        "point": "subjunctive sau recommend + that + S + V(bare)"
      },
      {
        "vi": "Nếu tôi là bạn, tôi sẽ không làm vậy.",
        "en": "If I were you, I wouldn't do that.",
        "point": "subjunctive quá khứ: luôn dùng 'were' cho mọi ngôi"
      },
      {
        "vi": "Dù thế nào đi nữa, chúng ta vẫn phải cố gắng.",
        "en": "Be that as it may, we still have to try.",
        "point": "cụm cố định mang tính subjunctive: Be that as it may"
      },
      {
        "vi": "Cầu Chúa phù hộ cho nữ hoàng!",
        "en": "God save the Queen!",
        "point": "cụm cố định subjunctive trong lời chúc/cầu nguyện"
      },
      {
        "vi": "Người quản lý yêu cầu rằng nhân viên không được rời khỏi vị trí.",
        "en": "The manager required that staff not leave their posts.",
        "point": "phủ định subjunctive: not + V nguyên mẫu (không dùng doesn't)"
      },
      {
        "vi": "Theo kiểu Anh-Anh, người ta thường nói: Tôi khăng khăng rằng anh ấy nên đi.",
        "en": "I insist that he should go.",
        "point": "subjunctive kiểu Anh-Anh dùng should + V"
      },
      {
        "vi": "Theo kiểu Anh-Mỹ, người ta nói: Tôi khăng khăng rằng anh ấy phải đi.",
        "en": "I insist that he go.",
        "point": "subjunctive kiểu Anh-Mỹ dùng V nguyên mẫu, không chia theo ngôi"
      },
      {
        "vi": "Điều quan trọng là mọi thành viên phải nộp báo cáo đúng hạn.",
        "en": "It is important that every member submit the report on time.",
        "point": "subjunctive sau tính từ important, chủ ngữ số ít vẫn dùng V nguyên mẫu"
      },
      {
        "vi": "Ủy ban yêu cầu rằng đề xuất phải được xem xét lại.",
        "en": "The committee demanded that the proposal be reconsidered.",
        "point": "subjunctive thể bị động: that + S + be + V3"
      }
    ]
  },
  "academic-style-grammar": {
    "instruction": "Dịch các câu sau theo văn phong học thuật: ưu tiên danh hóa (nominalization), gerund phrase làm chủ ngữ, và động từ trang trọng thay vì động từ thông thường.",
    "items": [
      {
        "vi": "Quyết định hành động đã được chính phủ đưa ra.",
        "en": "The decision to act was made by the government.",
        "point": "danh hóa (nominalization): decide → decision"
      },
      {
        "vi": "Việc cải thiện giao thông công cộng là điều cần thiết.",
        "en": "The improvement of public transport is essential.",
        "point": "danh hóa: improve → improvement"
      },
      {
        "vi": "Học tập ở nước ngoài đòi hỏi khả năng thích nghi.",
        "en": "Studying abroad requires adaptability.",
        "point": "gerund phrase làm chủ ngữ trong câu học thuật"
      },
      {
        "vi": "Tái chế nhiều hơn giúp giảm thiểu rác thải.",
        "en": "Recycling more reduces waste.",
        "point": "gerund subject làm chủ ngữ trong câu luận điểm (topic sentence)"
      },
      {
        "vi": "Một số yếu tố đã được xác định trong bài phân tích.",
        "en": "Several factors were identified in the analysis.",
        "point": "văn phong khách quan: cụm danh từ + bị động"
      },
      {
        "vi": "Các nhà nghiên cứu đã tiến hành một cuộc phân tích chi tiết.",
        "en": "The researchers conducted a detailed analysis.",
        "point": "động từ trang trọng học thuật: conduct an analysis (thay vì analyze)"
      },
      {
        "vi": "Nhóm nghiên cứu đã đưa ra một quan sát quan trọng.",
        "en": "The research team made an important observation.",
        "point": "động từ trang trọng học thuật: make an observation (thay vì notice)"
      },
      {
        "vi": "Cải thiện hệ thống giáo dục nên là ưu tiên hàng đầu.",
        "en": "Improving the education system should be the top priority.",
        "point": "ưu tiên gerund subject rõ ràng thay vì danh hóa nặng nề"
      },
      {
        "vi": "Nhiều nguyên nhân dẫn đến sự suy giảm này đã được thảo luận trong báo cáo.",
        "en": "Several causes of this decline have been discussed in the report.",
        "point": "danh hóa kết hợp bị động trong văn phong báo cáo học thuật"
      }
    ]
  },
  "grammar-registers": {
    "instruction": "Dịch các câu sau đúng theo ngữ cảnh được nêu trong ngoặc (Anh-Anh/Anh-Mỹ, trang trọng/thân mật) vì cùng một ý có thể dùng ngữ pháp khác nhau tùy vùng miền và văn phong.",
    "items": [
      {
        "vi": "Bạn có bút không? (theo kiểu Anh-Anh, văn nói)",
        "en": "Have you got a pen?",
        "point": "BrE: have got diễn tả sở hữu"
      },
      {
        "vi": "Bạn có bút không? (theo kiểu Anh-Mỹ)",
        "en": "Do you have a pen?",
        "point": "AmE: do you have diễn tả sở hữu"
      },
      {
        "vi": "Tôi vừa ăn xong. (theo kiểu Anh-Anh)",
        "en": "I've just eaten.",
        "point": "BrE: Present Perfect với just diễn tả việc vừa xảy ra"
      },
      {
        "vi": "Tôi vừa ăn xong. (theo kiểu Anh-Mỹ, khẩu ngữ)",
        "en": "I just ate.",
        "point": "AmE: Past Simple thay cho Present Perfect trong khẩu ngữ"
      },
      {
        "vi": "Chúng ta sẽ gặp nhau vào cuối tuần. (theo kiểu Anh-Anh)",
        "en": "We'll meet at the weekend.",
        "point": "BrE: giới từ 'at the weekend'"
      },
      {
        "vi": "Chúng ta sẽ gặp nhau vào cuối tuần. (theo kiểu Anh-Mỹ)",
        "en": "We'll meet on the weekend.",
        "point": "AmE: giới từ 'on the weekend'"
      },
      {
        "vi": "Đội bóng đang chơi rất hay. (theo kiểu Anh-Anh, danh từ tập thể số nhiều)",
        "en": "The team are playing well.",
        "point": "BrE: danh từ tập thể (team) chia số nhiều"
      },
      {
        "vi": "Đội bóng đang chơi rất hay. (theo kiểu Anh-Mỹ, danh từ tập thể số ít)",
        "en": "The team is playing well.",
        "point": "AmE: danh từ tập thể (team) chia số ít"
      },
      {
        "vi": "Trong bài luận học thuật, nên hoãn cuộc họp lại thay vì hủy đột ngột.",
        "en": "In an academic essay, postpone the meeting rather than cancelling it abruptly.",
        "point": "formal writing: dùng động từ Latin trang trọng thay phrasal verb"
      },
      {
        "vi": "Vì trời mưa, do đó chuyến đi bị hoãn lại. (văn phong trang trọng)",
        "en": "It rained; therefore, the trip was postponed.",
        "point": "formal: dùng 'therefore' thay cho 'so' trong văn viết"
      },
      {
        "vi": "Bọn trẻ đang chơi ngoài sân. (văn phong thân mật)",
        "en": "The kids are playing in the yard.",
        "point": "informal: dùng 'kids' thay cho 'children'"
      }
    ]
  },
  "prepositional-phrases": {
    "instruction": "Dịch các câu sau bằng đúng cụm giới từ cố định (không dịch từng chữ), chú ý phân biệt các cặp dễ nhầm như on time/in time, at the end/in the end.",
    "items": [
      {
        "vi": "Tôi đã lấy nhầm túi của bạn.",
        "en": "I took your bag by mistake.",
        "point": "cụm cố định cách thức: by mistake"
      },
      {
        "vi": "Cô ấy phá vỡ quy định một cách cố ý.",
        "en": "She broke the rule on purpose.",
        "point": "cụm cố định cách thức: on purpose"
      },
      {
        "vi": "Về lâu dài, tiết kiệm luôn có lợi.",
        "en": "In the long run, saving always pays off.",
        "point": "cụm cố định thời gian: in the long run"
      },
      {
        "vi": "Chuyến bay đã khởi hành đúng giờ.",
        "en": "The flight departed on time.",
        "point": "phân biệt: on time = đúng giờ theo lịch trình"
      },
      {
        "vi": "May mà chúng tôi đến kịp lúc để bắt xe buýt.",
        "en": "Luckily, we arrived in time to catch the bus.",
        "point": "phân biệt: in time = kịp lúc trước khi quá muộn"
      },
      {
        "vi": "Cuộc họp bị hoãn vì thời tiết xấu.",
        "en": "The meeting was postponed because of the bad weather.",
        "point": "because of + cụm danh từ (không dùng trực tiếp với mệnh đề đầy đủ)"
      },
      {
        "vi": "Kết quả của việc thiếu ngủ, năng suất làm việc giảm sút.",
        "en": "As a result of the lack of sleep, productivity declined.",
        "point": "cụm nguyên nhân-kết quả: as a result of + N"
      },
      {
        "vi": "Theo quan điểm của tôi, giáo dục trực tuyến sẽ ngày càng phổ biến.",
        "en": "In my opinion, online education will become more popular.",
        "point": "cụm quan điểm/thái độ: in my opinion"
      },
      {
        "vi": "Cuối cùng, họ cũng đã tìm ra giải pháp.",
        "en": "In the end, they found a solution.",
        "point": "phân biệt: in the end = cuối cùng, sau một quá trình"
      }
    ]
  },
  "modal-perfect": {
    "instruction": "Dịch các câu sau bằng cấu trúc modal + have + V3 (hoặc modal + have been + V-ing) để suy đoán, nuối tiếc hay chỉ trích về một việc đã xảy ra trong quá khứ.",
    "items": [
      {
        "vi": "Đường bị ướt. Chắc là trời đã mưa.",
        "en": "The road is wet. It must have rained.",
        "point": "must have V3: suy luận chắc chắn đã xảy ra"
      },
      {
        "vi": "Cô ấy không thể đã nhìn thấy tôi, vì tôi không có ở đó.",
        "en": "She can't have seen me. I wasn't there.",
        "point": "can't/couldn't have V3: chắc chắn không thể đã xảy ra"
      },
      {
        "vi": "Có thể anh ấy đã lỡ chuyến xe buýt.",
        "en": "He might have missed the bus.",
        "point": "may/might/could have V3: khả năng có thể đã xảy ra"
      },
      {
        "vi": "Đáng lẽ bạn nên nói với tôi sớm hơn.",
        "en": "You should have told me earlier.",
        "point": "should have V3: tiếc nuối/chỉ trích về việc đáng lẽ nên làm"
      },
      {
        "vi": "Đáng lẽ tôi không nên ăn nhiều như vậy.",
        "en": "I shouldn't have eaten so much.",
        "point": "shouldn't have V3: đáng lẽ không nên làm nhưng đã làm"
      },
      {
        "vi": "Bạn không cần phải nấu ăn đâu, chúng tôi đã ăn rồi.",
        "en": "You needn't have cooked – we had already eaten.",
        "point": "needn't have V3: không cần thiết nhưng vẫn đã làm"
      },
      {
        "vi": "Chúng tôi không cần phải mang theo thức ăn.",
        "en": "We didn't need to bring food.",
        "point": "didn't need to V: không cần và đã không làm"
      },
      {
        "vi": "Nếu tôi biết trước, tôi đã đến rồi.",
        "en": "I would have come if I had known.",
        "point": "would have V3: điều đã xảy ra trong điều kiện giả định khác"
      },
      {
        "vi": "Chắc là bạn đã đợi hàng giờ rồi!",
        "en": "You must have been waiting for hours!",
        "point": "modal perfect tiếp diễn: must have been + V-ing"
      },
      {
        "vi": "Đáng lẽ bạn nên lắng nghe kỹ hơn.",
        "en": "You should have been listening more carefully.",
        "point": "modal perfect tiếp diễn: should have been + V-ing"
      },
      {
        "vi": "Lúc đó có thể anh ấy đang làm việc.",
        "en": "He could have been working at that time.",
        "point": "modal perfect tiếp diễn: could have been + V-ing"
      }
    ]
  },
  "direct-indirect-objects": {
    "instruction": "Dịch các câu sau, chú ý chọn đúng giới từ to/for cho tân ngữ gián tiếp, và bắt buộc dùng dạng có giới từ khi tân ngữ trực tiếp là đại từ.",
    "items": [
      {
        "vi": "Cô ấy đưa tôi một quyển sách.",
        "en": "She gave me a book.",
        "point": "S+V+IO+DO: tân ngữ gián tiếp trước tân ngữ trực tiếp"
      },
      {
        "vi": "Cô ấy đưa quyển sách cho tôi.",
        "en": "She gave a book to me.",
        "point": "S+V+DO+to+IO: dùng giới từ 'to'"
      },
      {
        "vi": "Anh ấy mua cho tôi một món quà.",
        "en": "He bought me a present.",
        "point": "động từ đi với giới từ 'for' (buy) ở dạng IO+DO"
      },
      {
        "vi": "Anh ấy mua món quà đó cho tôi.",
        "en": "He bought that present for me.",
        "point": "S+V+DO+for+IO: dùng giới từ 'for'"
      },
      {
        "vi": "Tôi được tặng một quyển sách.",
        "en": "I was given a book.",
        "point": "câu bị động: tân ngữ gián tiếp làm chủ ngữ"
      },
      {
        "vi": "Một quyển sách đã được tặng cho tôi.",
        "en": "A book was given to me.",
        "point": "câu bị động: tân ngữ trực tiếp làm chủ ngữ, giữ giới từ to"
      },
      {
        "vi": "Hãy đưa nó cho tôi.",
        "en": "Give it to me.",
        "point": "khi tân ngữ trực tiếp là đại từ, bắt buộc dùng dạng có giới từ"
      },
      {
        "vi": "Cô ấy đã giải thích quy tắc đó cho tôi.",
        "en": "She explained the rule to me.",
        "point": "động từ không đảo được IO/DO (explain): chỉ dùng to+IO"
      },
      {
        "vi": "Giáo viên đã giới thiệu học sinh mới với cả lớp.",
        "en": "The teacher introduced the new student to the class.",
        "point": "động từ không đảo được IO/DO (introduce): chỉ dùng to+IO"
      }
    ]
  },
  "countable-uncountable": {
    "instruction": "Dịch các câu sau, chú ý phân biệt danh từ đếm được/không đếm được và chọn đúng đơn vị đếm, quantifier phù hợp.",
    "items": [
      {
        "vi": "Cô ấy cho tôi một lời khuyên hữu ích.",
        "en": "She gave me a useful piece of advice.",
        "point": "uncountable 'advice' cần đơn vị đếm 'a piece of'"
      },
      {
        "vi": "Tôi muốn một cốc nước lọc.",
        "en": "I'd like a glass of water.",
        "point": "đơn vị đếm 'a glass of' cho danh từ không đếm được"
      },
      {
        "vi": "Chúng tôi chỉ có rất ít đồ nội thất trong căn hộ.",
        "en": "We have very little furniture in the apartment.",
        "point": "furniture uncountable, dùng 'little' không 'few'"
      },
      {
        "vi": "Anh ấy có nhiều sách hơn tôi.",
        "en": "He has many more books than I do.",
        "point": "'many' + danh từ đếm được số nhiều"
      },
      {
        "vi": "Có rất nhiều giao thông trên đường vào giờ cao điểm.",
        "en": "There is a lot of traffic on the road at rush hour.",
        "point": "'traffic' uncountable, không có số nhiều"
      },
      {
        "vi": "Bạn có tin tức gì mới không?",
        "en": "Do you have any news?",
        "point": "'news' uncountable dù tận cùng bằng -s"
      },
      {
        "vi": "Tôi cần mua một tờ báo sáng nay.",
        "en": "I need to buy a paper this morning.",
        "point": "'a paper' (tờ báo, đếm được) khác 'paper' (giấy, không đếm được)"
      },
      {
        "vi": "Có một sợi tóc trong bát súp của tôi.",
        "en": "There's a hair in my soup.",
        "point": "'a hair' đếm được (một sợi) khác 'hair' không đếm được (tóc nói chung)"
      },
      {
        "vi": "Chúng tôi cần thêm thiết bị và hành lý cho chuyến đi.",
        "en": "We need more equipment and luggage for the trip.",
        "point": "equipment, luggage uncountable, không thêm 's'"
      },
      {
        "vi": "Anh ấy chỉ cần một chút may mắn để thắng.",
        "en": "He just needs a bit of luck to win.",
        "point": "đơn vị đếm 'a bit of' cho uncountable 'luck'"
      }
    ]
  },
  "quantifiers-deep": {
    "instruction": "Dịch các câu sau, chọn đúng định lượng (many/much, few/a few, little/a little, most/most of...) và chia động từ đúng theo quantifier.",
    "items": [
      {
        "vi": "Tôi có rất ít bạn bè ở thành phố này.",
        "en": "I have few friends in this city.",
        "point": "'few' mang nghĩa tiêu cực (gần như không có)"
      },
      {
        "vi": "Tôi có vài người bạn tốt, nên không thấy cô đơn.",
        "en": "I have a few good friends, so I don't feel lonely.",
        "point": "'a few' mang nghĩa tích cực (một vài, đủ)"
      },
      {
        "vi": "Chúng tôi còn rất ít thời gian trước khi chuyến bay cất cánh.",
        "en": "We have little time left before the flight takes off.",
        "point": "'little' nghĩa tiêu cực với danh từ không đếm được"
      },
      {
        "vi": "Cho tôi xin một chút đường vào cà phê nhé.",
        "en": "Could you give me a little sugar in my coffee?",
        "point": "'a little' nghĩa tích cực với danh từ không đếm được"
      },
      {
        "vi": "Vài sinh viên đã nộp bài đúng hạn.",
        "en": "Several students submitted their assignments on time.",
        "point": "'several' + danh từ đếm được số nhiều"
      },
      {
        "vi": "Anh ấy chẳng có mấy tiền để tiêu trong kỳ nghỉ.",
        "en": "He has little money to spend on the holiday.",
        "point": "'little' với danh từ không đếm được (money)"
      },
      {
        "vi": "Hầu hết mọi người đều thích du lịch.",
        "en": "Most people like traveling.",
        "point": "'most + N' chung chung, không cần 'of the'"
      },
      {
        "vi": "Hầu hết những học sinh trong lớp này đều chăm chỉ.",
        "en": "Most of the students in this class are hardworking.",
        "point": "'most of the + N' khi nói cụ thể (có 'the')"
      },
      {
        "vi": "Một số sinh viên đang vắng mặt hôm nay.",
        "en": "A number of students are absent today.",
        "point": "'a number of + plural N' đi với động từ số nhiều"
      },
      {
        "vi": "Số lượng sinh viên vắng mặt hôm nay đang tăng lên.",
        "en": "The number of students absent today is increasing.",
        "point": "'the number of + plural N' đi với động từ số ít"
      },
      {
        "vi": "Mỗi nhân viên phải nộp báo cáo riêng của mình.",
        "en": "Each employee has to submit their own report.",
        "point": "'each + N' luôn đi với động từ số ít"
      },
      {
        "vi": "Không ai trong số các khách mời đến đúng giờ.",
        "en": "None of the guests arrived on time.",
        "point": "'none of + plural N' thường đi với động từ số nhiều trong văn nói"
      }
    ]
  },
  "demonstratives-deep": {
    "instruction": "Dịch các câu sau, chọn đúng this/that/these/those theo khoảng cách, số lượng và chức năng (định ngữ, đại từ, quy chiếu diễn ngôn).",
    "items": [
      {
        "vi": "Quyển sách này rất thú vị.",
        "en": "This book is very interesting.",
        "point": "'this' + danh từ số ít, vật ở gần"
      },
      {
        "vi": "Những người kia là đồng nghiệp cũ của tôi.",
        "en": "Those people are my former colleagues.",
        "point": "'those' + danh từ số nhiều, ở xa"
      },
      {
        "vi": "Cái này là của tôi, cái kia không phải.",
        "en": "This is mine, that isn't.",
        "point": "this/that dùng độc lập thay cho danh từ"
      },
      {
        "vi": "Sáng nay tôi đã chạy bộ trong công viên.",
        "en": "I went jogging in the park this morning.",
        "point": "'this morning' chỉ buổi sáng hôm nay"
      },
      {
        "vi": "Sáng hôm đó trời đã mưa rất to.",
        "en": "It rained heavily that morning.",
        "point": "'that morning' chỉ thời điểm trong quá khứ đã qua"
      },
      {
        "vi": "Những ngày xưa ấy chúng tôi thường chơi trên cánh đồng này.",
        "en": "Those days, we used to play in this field.",
        "point": "'those days' hoài niệm về quá khứ xa"
      },
      {
        "vi": "Anh ấy đã cư xử rất thô lỗ. Điều đó khiến tôi tức giận.",
        "en": "He was rude. That made me angry.",
        "point": "'that' quay lại nhắc điều vừa nói (discourse reference)"
      },
      {
        "vi": "Hãy nghe cái này: chúng ta sắp có một dự án mới.",
        "en": "Listen to this: we're about to start a new project.",
        "point": "'this' giới thiệu điều sắp nói"
      },
      {
        "vi": "Alo, tôi là John đây. Ai đang gọi vậy?",
        "en": "Hi, this is John. Who's that?",
        "point": "dùng 'this/that' khi nói chuyện điện thoại"
      }
    ]
  },
  "anaphoric-reference": {
    "instruction": "Dịch các câu sau, chọn đúng đại từ có antecedent rõ ràng, dùng singular they khi phù hợp và tránh đại từ mơ hồ hoặc thiếu chỗ dựa.",
    "items": [
      {
        "vi": "John nhìn thấy Mary. Anh ấy vẫy tay chào cô ấy.",
        "en": "John saw Mary. He waved at her.",
        "point": "đại từ 'he/her' khớp rõ ràng với antecedent"
      },
      {
        "vi": "Nếu ai đó gọi điện, hãy bảo họ rằng tôi sẽ gọi lại.",
        "en": "If anyone calls, tell them I'll call back.",
        "point": "singular they khi không rõ giới tính người được nói tới"
      },
      {
        "vi": "Mỗi học sinh nên mang theo sách của mình.",
        "en": "Each student should bring their book.",
        "point": "singular they thay cho 'his or her' sau 'each'"
      },
      {
        "vi": "Bài báo viết rằng nền kinh tế đang phục hồi.",
        "en": "The article says the economy is recovering.",
        "point": "tránh đại từ 'it' không có antecedent, lặp lại danh từ"
      },
      {
        "vi": "Khi cô ấy bước vào phòng, Mary đã mỉm cười với mọi người.",
        "en": "When she entered the room, Mary smiled at everyone.",
        "point": "cataphoric reference — đại từ đứng trước, danh từ thật đến sau"
      },
      {
        "vi": "Người ta nói rằng thời tiết năm nay sẽ rất lạnh.",
        "en": "They say the weather will be very cold this year.",
        "point": "generic reference 'they say' khi không nêu nguồn cụ thể"
      },
      {
        "vi": "Không bao giờ biết được chuyện gì sẽ xảy ra tiếp theo.",
        "en": "You never know what will happen next.",
        "point": "generic 'you' không chỉ người nghe cụ thể"
      },
      {
        "vi": "Có vẻ như trời sắp mưa.",
        "en": "It seems like it's going to rain.",
        "point": "'it seems' generic reference không có chủ thể cụ thể"
      },
      {
        "vi": "Ai đó đã để quên chiếc ô của họ ở đây; chắc họ đang vội.",
        "en": "Someone left their umbrella here; they must have been in a hurry.",
        "point": "singular they + động từ số nhiều sau 'someone'"
      },
      {
        "vi": "An nói với Bình rằng anh ấy sẽ đến muộn.",
        "en": "An told Binh that he would be late.",
        "point": "đại từ 'he' tham chiếu antecedent gần nhất, tránh mơ hồ"
      }
    ]
  },
  "apposition": {
    "instruction": "Dịch các câu sau, chú ý dùng đúng dấu phẩy cho đồng vị ngữ xác định (không phẩy) và không xác định (có phẩy).",
    "items": [
      {
        "vi": "Anh trai tôi, Tom, đang ở đây.",
        "en": "My brother, Tom, is here.",
        "point": "đồng vị ngữ không xác định (có phẩy), thông tin thêm"
      },
      {
        "vi": "Nhà thơ Robert Frost đã viết bài thơ này.",
        "en": "The poet Robert Frost wrote this poem.",
        "point": "đồng vị ngữ xác định (không phẩy), cần thiết để chỉ rõ ai"
      },
      {
        "vi": "Robert Frost, nhà thơ nổi tiếng, đã qua đời năm 1963.",
        "en": "Robert Frost, the famous poet, died in 1963.",
        "point": "đồng vị ngữ không xác định, có phẩy vì chỉ có một Robert Frost"
      },
      {
        "vi": "Thành phố Paris nổi tiếng với tháp Eiffel.",
        "en": "The city of Paris is famous for the Eiffel Tower.",
        "point": "cấu trúc 'the + N + of + danh từ riêng' (apposition)"
      },
      {
        "vi": "Ước mơ của anh ấy, trở thành bác sĩ, đã trở thành sự thật.",
        "en": "His ambition, to become a doctor, came true.",
        "point": "nominalizing apposition giải thích danh từ trừu tượng"
      },
      {
        "vi": "Bill Gates, người sáng lập Microsoft, đã phát biểu về công nghệ.",
        "en": "Bill Gates, founder of Microsoft, spoke about technology.",
        "point": "đồng vị ngữ kiểu báo chí giới thiệu nhân vật"
      },
      {
        "vi": "Con mèo của tôi, Milo, rất nghịch ngợm.",
        "en": "My cat, Milo, is very mischievous.",
        "point": "đồng vị ngữ không xác định vì chỉ có một con mèo"
      }
    ]
  },
  "gender-neutral-grammar": {
    "instruction": "Dịch các câu sau, dùng danh từ và đại từ trung tính về giới (singular they, chairperson, firefighter, police officer...) một cách tự nhiên.",
    "items": [
      {
        "vi": "Nếu một học sinh có câu hỏi, họ nên hỏi giáo viên.",
        "en": "If a student has a question, they should ask the teacher.",
        "point": "singular they trung tính về giới"
      },
      {
        "vi": "Chủ tọa cuộc họp đã khai mạc phiên họp.",
        "en": "The chairperson opened the meeting.",
        "point": "'chairperson' thay cho 'chairman'"
      },
      {
        "vi": "Lính cứu hỏa đã cứu được cả gia đình khỏi đám cháy.",
        "en": "The firefighter rescued the whole family from the fire.",
        "point": "'firefighter' thay cho 'fireman'"
      },
      {
        "vi": "Mỗi nhân viên phải nộp mẫu đơn của họ trước thứ Sáu.",
        "en": "Each employee must submit their form by Friday.",
        "point": "singular they thay cho 'his or her'"
      },
      {
        "vi": "Khách hàng nên kiểm tra hóa đơn của họ trước khi rời quầy.",
        "en": "Customers should check their receipts before leaving the counter.",
        "point": "viết lại số nhiều để tránh 'his' mặc định"
      },
      {
        "vi": "Tiếp viên hàng không đã chào đón hành khách.",
        "en": "The flight attendant greeted the passengers.",
        "point": "danh từ trung tính thay cho 'stewardess'"
      },
      {
        "vi": "Ai đó đã để quên áo khoác ở đây; chắc họ đang vội.",
        "en": "Someone left their coat here; they must have been in a hurry.",
        "point": "singular they + động từ số nhiều 'were'"
      },
      {
        "vi": "Cảnh sát đã giúp đỡ những người đi đường.",
        "en": "The police officer helped the pedestrians.",
        "point": "'police officer' thay cho 'policeman'"
      }
    ]
  },
  "word-formation": {
    "instruction": "Dịch các câu sau, chú ý chọn đúng tiền tố/hậu tố hoặc cách ghép từ, chuyển loại để tạo đúng từ loại cần dùng.",
    "items": [
      {
        "vi": "Cô ấy cảm thấy rất không hạnh phúc sau khi nghe tin đó.",
        "en": "She felt great unhappiness after hearing the news.",
        "point": "tiền tố phủ định 'un-' + hậu tố '-ness' tạo danh từ"
      },
      {
        "vi": "Công ty đã hiện đại hóa toàn bộ dây chuyền sản xuất.",
        "en": "The company modernized the entire production line.",
        "point": "hậu tố '-ize' biến tính từ thành động từ"
      },
      {
        "vi": "Anh ấy không đồng ý với quyết định của sếp.",
        "en": "He disagreed with his boss's decision.",
        "point": "tiền tố phủ định 'dis-' tạo động từ trái nghĩa"
      },
      {
        "vi": "Đây là món ăn không thể ăn được.",
        "en": "This dish is inedible.",
        "point": "tiền tố phủ định 'in-' với tính từ"
      },
      {
        "vi": "Anh ấy đã đọc sai thông tin trong hợp đồng.",
        "en": "He misread the information in the contract.",
        "point": "tiền tố 'mis-' nghĩa 'sai, nhầm'"
      },
      {
        "vi": "Chúng ta cần đăng ký lại giấy phép mỗi năm.",
        "en": "We need to re-register the license every year.",
        "point": "tiền tố thời gian 're-' nghĩa 'lại'"
      },
      {
        "vi": "Đây là một dự án đa quốc gia rất phức tạp.",
        "en": "This is a very complex multinational project.",
        "point": "tiền tố số lượng 'multi-' chỉ nhiều"
      },
      {
        "vi": "Sự phát triển kinh tế đã tạo ra nhiều việc làm.",
        "en": "Economic development has created many jobs.",
        "point": "hậu tố '-ment' biến động từ thành danh từ"
      },
      {
        "vi": "Con đường này rất nguy hiểm vào ban đêm.",
        "en": "This road is very dangerous at night.",
        "point": "hậu tố '-ous' biến danh từ thành tính từ"
      },
      {
        "vi": "Cô ấy đã gửi email cho tôi sáng nay.",
        "en": "She emailed me this morning.",
        "point": "chuyển loại (conversion) từ danh từ 'email' sang động từ"
      },
      {
        "vi": "Đó là một cậu bé năm tuổi rất thông minh.",
        "en": "He is a very smart five-year-old boy.",
        "point": "cụm số + danh từ có gạch nối, không thêm 's'"
      },
      {
        "vi": "Mẹ chồng tôi sẽ đến thăm vào cuối tuần này.",
        "en": "My mother-in-law will visit this weekend.",
        "point": "danh từ ghép có gạch nối (hyphenated compound)"
      }
    ]
  },
  "collocations-pairs": {
    "instruction": "Dịch các câu sau, chú ý chọn đúng collocation (make/do, adv+adj, v+prep cố định...) và phân biệt các cặp từ dễ nhầm.",
    "items": [
      {
        "vi": "Tôi cần đưa ra một quyết định quan trọng.",
        "en": "I need to make an important decision.",
        "point": "collocation 'make a decision', không phải 'do'"
      },
      {
        "vi": "Con tôi đang làm bài tập về nhà.",
        "en": "My child is doing homework.",
        "point": "collocation 'do homework', không phải 'make'"
      },
      {
        "vi": "Anh ấy mất tiền vì bất cẩn.",
        "en": "He lost money because of carelessness.",
        "point": "'lose' (mất) không nhầm với 'loose' (lỏng)"
      },
      {
        "vi": "Có ít hơn năm học sinh dưới chuẩn năm nay.",
        "en": "There are fewer than five students below standard this year.",
        "point": "'fewer' + danh từ đếm được, không dùng 'less'"
      },
      {
        "vi": "Sự thay đổi này sẽ ảnh hưởng đến toàn bộ dự án.",
        "en": "This change will affect the whole project.",
        "point": "'affect' (động từ) khác 'effect' (danh từ)"
      },
      {
        "vi": "Hãy chia đều số bánh giữa hai đứa trẻ.",
        "en": "Please divide the cakes equally between the two children.",
        "point": "'between' dùng cho 2 đối tượng, 'among' cho 3+"
      },
      {
        "vi": "Ban giám đốc được khuyến khích mạnh mẽ nên tham dự cuộc họp này.",
        "en": "The directors are highly recommended to attend this meeting.",
        "point": "collocation trạng từ + tính từ 'highly recommended'"
      },
      {
        "vi": "Trời đã mưa rất to suốt cả buổi chiều.",
        "en": "It rained heavily all afternoon.",
        "point": "collocation động từ + trạng từ 'rain heavily'"
      },
      {
        "vi": "Thành công của dự án phụ thuộc vào sự hợp tác của cả đội.",
        "en": "The success of the project depends on the team's cooperation.",
        "point": "cụm cố định động từ + giới từ 'depend on'"
      },
      {
        "vi": "Cô ấy luôn hoàn thành công việc đúng thời hạn.",
        "en": "She always meets the deadline for her work.",
        "point": "collocation danh từ 'meet a deadline'"
      },
      {
        "vi": "Giao thông ùn tắc trên đường cao tốc sáng nay.",
        "en": "There was a traffic jam on the highway this morning.",
        "point": "collocation danh từ ghép 'traffic jam'"
      },
      {
        "vi": "Anh ấy đã lập một kỷ lục mới trong cuộc thi.",
        "en": "He broke a new record in the competition.",
        "point": "collocation động từ + danh từ 'break a record'"
      }
    ]
  },
  "semantic-prosody": {
    "instruction": "Dịch các câu sau, chọn từ có đúng sắc thái/semantic prosody (tích cực, tiêu cực hay trung tính) phù hợp ngữ cảnh.",
    "items": [
      {
        "vi": "Cơn bão đã gây ra thiệt hại nghiêm trọng cho thị trấn.",
        "en": "The storm caused severe damage to the town.",
        "point": "'cause' mang sắc thái tiêu cực (đi với điều xấu)"
      },
      {
        "vi": "Cuốn sách đã khơi dậy sự quan tâm của độc giả trẻ.",
        "en": "The book sparked interest among young readers.",
        "point": "'spark' mang sắc thái tích cực/trung tính"
      },
      {
        "vi": "Hắn ta quyết tâm trả thù bằng mọi giá.",
        "en": "He was bent on revenge at any cost.",
        "point": "'bent on' thường mang sắc thái tiêu cực"
      },
      {
        "vi": "Sự hoảng loạn bắt đầu lan tràn trong đám đông.",
        "en": "Panic began to set in among the crowd.",
        "point": "'set in' thường đi với điều tiêu cực"
      },
      {
        "vi": "Chương trình này cung cấp hỗ trợ cho các gia đình khó khăn.",
        "en": "This program provides support for struggling families.",
        "point": "'provide' mang sắc thái tích cực/trung tính"
      },
      {
        "vi": "Công ty đã cam kết mạnh mẽ với chất lượng sản phẩm.",
        "en": "The company has a strong commitment to quality.",
        "point": "'commitment to' mang sắc thái tích cực"
      },
      {
        "vi": "Ô nhiễm đang đặt ra một mối đe dọa lớn cho sức khỏe cộng đồng.",
        "en": "Pollution is posing a major threat to public health.",
        "point": "chọn đúng prosody 'pose a threat' thay vì 'cause a threat'"
      },
      {
        "vi": "Chính sách mới đã mang lại những cải thiện đáng kể.",
        "en": "The new policy has brought about significant improvements.",
        "point": "dùng 'bring about improvements' tự nhiên hơn 'cause improvements'"
      }
    ]
  },
  "auxiliary-system": {
    "instruction": "Dịch các câu sau, dùng đúng trợ động từ be/have/do cho tiếp diễn, bị động, hoàn thành, câu hỏi, phủ định, nhấn mạnh và đảo ngữ.",
    "items": [
      {
        "vi": "Cô ấy đang làm việc trong văn phòng.",
        "en": "She is working in the office.",
        "point": "'be' + V-ing tạo thì tiếp diễn"
      },
      {
        "vi": "Ngôi nhà đó đã được xây dựng năm 1990.",
        "en": "The house was built in 1990.",
        "point": "'be' + V3 tạo câu bị động"
      },
      {
        "vi": "Họ đã rời đi rồi.",
        "en": "They have left.",
        "point": "'have' + V3 tạo thì hoàn thành"
      },
      {
        "vi": "Bạn có đồng ý không?",
        "en": "Do you agree?",
        "point": "'do-support' tạo câu hỏi khi không có trợ động từ khác"
      },
      {
        "vi": "Tôi không biết câu trả lời.",
        "en": "I don't know the answer.",
        "point": "'do-support' tạo câu phủ định"
      },
      {
        "vi": "Cô ấy có gọi điện không?",
        "en": "Did she call?",
        "point": "'do-support' ở thì quá khứ khi không có trợ động từ khác"
      },
      {
        "vi": "Tôi thật sự đồng ý với ý kiến đó.",
        "en": "I do agree with that opinion.",
        "point": "'do' nhấn mạnh (emphatic do)"
      },
      {
        "vi": "Cô ấy đã đến chưa?",
        "en": "Has she arrived?",
        "point": "đảo trợ động từ lên trước chủ ngữ trong câu hỏi (Inversion)"
      },
      {
        "vi": "Cô ấy bơi được, và tôi cũng vậy.",
        "en": "She can swim, and I can too.",
        "point": "trợ động từ thay thế cụm động từ phía sau (Code/ellipsis)"
      },
      {
        "vi": "Anh ấy không thể đến buổi họp.",
        "en": "He cannot come to the meeting.",
        "point": "trợ động từ nhận 'not' để phủ định (Negation)"
      }
    ]
  },
  "verb-types-transitivity": {
    "instruction": "Dịch các câu sau, chú ý cấu trúc nội động từ/ngoại động từ/song tân ngữ/động từ nối/động từ phức hợp phù hợp với từng động từ.",
    "items": [
      {
        "vi": "Em bé đã ngủ suốt buổi chiều.",
        "en": "The baby slept all afternoon.",
        "point": "nội động từ (intransitive) không cần tân ngữ"
      },
      {
        "vi": "Cô ấy đã viết một lá thư.",
        "en": "She wrote a letter.",
        "point": "ngoại động từ (transitive) cần một tân ngữ"
      },
      {
        "vi": "Họ đã gửi cho chúng tôi một email.",
        "en": "They sent us an email.",
        "point": "song tân ngữ (ditransitive) cần cả gián tiếp và trực tiếp"
      },
      {
        "vi": "Món súp này có vị rất ngon.",
        "en": "The soup tastes good.",
        "point": "động từ nối (linking verb) + bổ ngữ chủ ngữ (tính từ)"
      },
      {
        "vi": "Họ đã bầu anh ấy làm chủ tịch.",
        "en": "They elected him president.",
        "point": "động từ phức hợp (complex transitive) + bổ ngữ tân ngữ"
      },
      {
        "vi": "Cô ấy đã mở cửa sổ.",
        "en": "She opened the window.",
        "point": "'open' dùng như ngoại động từ (có tân ngữ)"
      },
      {
        "vi": "Cánh cửa tự động mở ra.",
        "en": "The door opened by itself.",
        "point": "'open' dùng như nội động từ (ambitransitive, không tân ngữ)"
      },
      {
        "vi": "Anh ấy điều hành một công ty lớn.",
        "en": "He runs a large company.",
        "point": "'run' đổi nghĩa khi có tân ngữ (điều hành, không phải chạy)"
      }
    ]
  },
  "sentence-patterns-complements": {
    "instruction": "Dịch các câu sau theo đúng 5 mẫu câu nền (S+V, S+V+O, S+V+C, S+V+IO+DO, S+V+O+C) và phân biệt complement với modifier.",
    "items": [
      {
        "vi": "Chim bay trên bầu trời.",
        "en": "Birds fly.",
        "point": "mẫu câu S + V (nội động từ tự đủ nghĩa)"
      },
      {
        "vi": "Cô ấy thích âm nhạc.",
        "en": "She likes music.",
        "point": "mẫu câu S + V + O"
      },
      {
        "vi": "Anh ấy đã trở thành bác sĩ.",
        "en": "He became a doctor.",
        "point": "mẫu câu S + V + C (bổ ngữ mô tả chủ ngữ)"
      },
      {
        "vi": "Cô ấy đã cho tôi một lời khuyên.",
        "en": "She gave me advice.",
        "point": "mẫu câu S + V + IO + DO"
      },
      {
        "vi": "Họ đã khiến anh ấy tức giận.",
        "en": "They made him angry.",
        "point": "mẫu câu S + V + O + C (bổ ngữ mô tả tân ngữ)"
      },
      {
        "vi": "Thành công của cô ấy phụ thuộc vào sự nỗ lực.",
        "en": "Her success depends on hard work.",
        "point": "complement bắt buộc ('depend on') để câu đủ nghĩa"
      },
      {
        "vi": "Hôm qua, tôi đã gặp anh ấy trong phòng.",
        "en": "Yesterday, I met him in the room.",
        "point": "modifier ('yesterday', 'in the room') là phần thêm, có thể bỏ"
      },
      {
        "vi": "Cô ấy rất ý thức được vấn đề này.",
        "en": "She is aware of this issue.",
        "point": "complement bắt buộc sau tính từ ('aware of')"
      }
    ]
  },
  "subject-complement-object-complement": {
    "instruction": "Dịch các câu sau, dùng đúng bổ ngữ chủ ngữ sau động từ nối hoặc bổ ngữ tân ngữ sau các động từ như make/keep/find/consider/paint.",
    "items": [
      {
        "vi": "Cô ấy rất tốt bụng.",
        "en": "She is kind.",
        "point": "bổ ngữ chủ ngữ là tính từ sau 'be'"
      },
      {
        "vi": "Anh ấy đã trở thành giáo viên.",
        "en": "He became a teacher.",
        "point": "bổ ngữ chủ ngữ là cụm danh từ sau 'become'"
      },
      {
        "vi": "Cô ấy có vẻ mệt mỏi.",
        "en": "She seems tired.",
        "point": "bổ ngữ chủ ngữ sau động từ nối 'seem'"
      },
      {
        "vi": "Món súp này có vị ngon.",
        "en": "The soup tastes good.",
        "point": "dùng tính từ 'good', không dùng trạng từ 'well', sau động từ nối 'taste'"
      },
      {
        "vi": "Họ đã sơn bức tường màu xanh.",
        "en": "They painted the wall blue.",
        "point": "bổ ngữ tân ngữ sau 'paint' mô tả tân ngữ"
      },
      {
        "vi": "Chúng tôi cho rằng anh ấy đáng tin cậy.",
        "en": "We consider him reliable.",
        "point": "bổ ngữ tân ngữ sau 'consider'"
      },
      {
        "vi": "Hãy để cửa mở.",
        "en": "Leave the door open.",
        "point": "cấu trúc object complement 'leave + O + adj'"
      },
      {
        "vi": "Hãy cho tôi biết tin tức mới nhé.",
        "en": "Keep me informed.",
        "point": "cấu trúc object complement 'keep + O + V3'"
      },
      {
        "vi": "Cô ấy thấy bài kiểm tra này khó.",
        "en": "She finds this test difficult.",
        "point": "cấu trúc object complement 'find + O + adj'"
      }
    ]
  },
  "adjective-complements": {
    "instruction": "Dịch các câu sau, chọn đúng phần bổ sung cho tính từ: giới từ, to-infinitive, mệnh đề that, hoặc cấu trúc 'It is + adj + that'.",
    "items": [
      {
        "vi": "Tôi rất quan tâm đến âm nhạc.",
        "en": "I am interested in music.",
        "point": "tính từ + giới từ + danh từ ('interested in')"
      },
      {
        "vi": "Cô ấy rất thích học ngôn ngữ mới.",
        "en": "She is interested in learning new languages.",
        "point": "tính từ + giới từ + V-ing ('interested in learning')"
      },
      {
        "vi": "Chúng tôi đã sẵn sàng để bắt đầu.",
        "en": "We are ready to start.",
        "point": "tính từ + to-infinitive ('ready to')"
      },
      {
        "vi": "Anh ấy chắc chắn rằng mình đúng.",
        "en": "He is sure that he is right.",
        "point": "tính từ + mệnh đề 'that' ('sure that')"
      },
      {
        "vi": "Điều quan trọng là chúng ta phải hành động ngay.",
        "en": "It is important that we act immediately.",
        "point": "cấu trúc 'It + be + adj + that-clause' (extraposition)"
      },
      {
        "vi": "Cuốn sách này dễ đọc.",
        "en": "This book is easy to read.",
        "point": "tough movement: chủ ngữ thực chất là tân ngữ của 'read'"
      },
      {
        "vi": "Có vẻ như cô ấy sẽ thắng cuộc thi.",
        "en": "She is likely to win the competition.",
        "point": "tương đương 'It is likely that she will win'"
      },
      {
        "vi": "Anh ấy chịu trách nhiệm cho dự án này.",
        "en": "He is responsible for this project.",
        "point": "cụm cố định tính từ + giới từ ('responsible for')"
      },
      {
        "vi": "Cô ấy rất háo hức được gặp bạn.",
        "en": "She is eager to meet you.",
        "point": "cụm cố định tính từ + to-infinitive ('eager to')"
      }
    ]
  },
  "adverb-types-position": {
    "instruction": "Dịch các câu sau, đặt đúng vị trí các loại trạng từ (cách thức, tần suất, mức độ, thái độ, liên kết, nhấn mạnh) theo quy tắc trật tự.",
    "items": [
      {
        "vi": "Cô ấy nói chuyện rất rõ ràng.",
        "en": "She spoke clearly.",
        "point": "trạng từ chỉ cách thức đứng cuối câu"
      },
      {
        "vi": "Cô ấy thường đọc sách vào buổi tối.",
        "en": "She often reads in the evening.",
        "point": "trạng từ tần suất đứng trước động từ chính"
      },
      {
        "vi": "Cô ấy thường xuyên đi trễ.",
        "en": "She is often late.",
        "point": "trạng từ tần suất đứng sau 'be'"
      },
      {
        "vi": "Bài kiểm tra này khá khó.",
        "en": "This test is quite difficult.",
        "point": "trạng từ chỉ mức độ đứng trước tính từ"
      },
      {
        "vi": "Thành thật mà nói, tôi không đồng ý.",
        "en": "Frankly, I disagree.",
        "point": "trạng từ thái độ (stance adverb) đứng đầu câu"
      },
      {
        "vi": "Tuy nhiên, kế hoạch đó đã thất bại.",
        "en": "However, the plan failed.",
        "point": "trạng từ liên kết (linking adverb) đứng đầu câu"
      },
      {
        "vi": "Cô ấy đã hát rất hay tại buổi hòa nhạc tối qua.",
        "en": "She sang beautifully at the concert last night.",
        "point": "thứ tự trạng từ cuối câu: cách thức + nơi chốn + thời gian"
      },
      {
        "vi": "Tối qua, cô ấy đã hát rất hay.",
        "en": "Last night, she sang beautifully.",
        "point": "đưa trạng từ thời gian lên đầu câu để tạo khung/nhấn mạnh"
      },
      {
        "vi": "Tôi chỉ ăn có một cái bánh thôi.",
        "en": "I ate only one cookie.",
        "point": "trạng từ nhấn mạnh 'only' đặt sát từ được nhấn"
      }
    ]
  },
  "preposition-system": {
    "instruction": "Dịch các câu sau, chọn đúng giới từ chỉ nơi chốn, thời gian, chuyển động, nguyên nhân, phương tiện phù hợp ngữ cảnh.",
    "items": [
      {
        "vi": "Cuốn sách ở trên bàn.",
        "en": "The book is on the table.",
        "point": "giới từ chỉ nơi chốn 'on'"
      },
      {
        "vi": "Chúng tôi sẽ gặp nhau vào tháng Sáu.",
        "en": "We will meet in June.",
        "point": "giới từ chỉ thời gian 'in' cho tháng"
      },
      {
        "vi": "Cửa hàng mở cửa cho đến chín giờ tối.",
        "en": "The shop is open until nine p.m.",
        "point": "giới từ thời gian 'until' chỉ mốc kết thúc"
      },
      {
        "vi": "Cô ấy đi vào phòng và đóng cửa lại.",
        "en": "She walked into the room and closed the door.",
        "point": "giới từ chỉ chuyển động 'into'"
      },
      {
        "vi": "Chuyến bay bị hoãn vì thời tiết xấu.",
        "en": "The flight was delayed because of bad weather.",
        "point": "giới từ chỉ nguyên nhân 'because of'"
      },
      {
        "vi": "Bức thư được viết bằng tay.",
        "en": "The letter was written by hand.",
        "point": "giới từ chỉ phương tiện 'by'"
      },
      {
        "vi": "Cô ấy đã cắt bánh bằng một con dao sắc.",
        "en": "She cut the cake with a sharp knife.",
        "point": "giới từ chỉ công cụ 'with'"
      },
      {
        "vi": "Thành công của anh ấy phụ thuộc vào sự chăm chỉ.",
        "en": "His success depends on hard work.",
        "point": "giới từ complement bắt buộc sau động từ 'depend on'"
      },
      {
        "vi": "Bạn đang nói chuyện với ai vậy?",
        "en": "Who are you talking to?",
        "point": "preposition stranding tự nhiên trong văn nói"
      }
    ]
  },
  "infinitive-purposes": {
    "instruction": "Dịch các câu sau, dùng đúng to-infinitive để diễn tả mục đích, kết quả, hoặc các cấu trúc too...to / enough to.",
    "items": [
      {
        "vi": "Tôi đến cửa hàng để mua sữa.",
        "en": "I went to the shop to buy milk.",
        "point": "to-V diễn tả mục đích"
      },
      {
        "vi": "Cô ấy đã tắt đèn để tiết kiệm điện.",
        "en": "She turned off the lights in order to save electricity.",
        "point": "'in order to' trang trọng hơn 'to'"
      },
      {
        "vi": "Anh ấy nói thầm để không đánh thức em bé.",
        "en": "He whispered so as not to wake the baby.",
        "point": "phủ định mục đích 'so as not to'"
      },
      {
        "vi": "Cô ấy quá mệt để làm việc.",
        "en": "She is too tired to work.",
        "point": "cấu trúc 'too + adj + to-V'"
      },
      {
        "vi": "Cậu bé đã đủ lớn để đi học một mình.",
        "en": "The boy is old enough to go to school alone.",
        "point": "cấu trúc 'adj + enough + to-V'"
      },
      {
        "vi": "Anh ấy đã học chăm chỉ để vượt qua kỳ thi.",
        "en": "He worked hard to pass the exam.",
        "point": "to-V diễn tả mục đích có chủ đích"
      },
      {
        "vi": "Ông đã sống đến khi nhìn thấy các cháu mình trưởng thành.",
        "en": "He lived to see his grandchildren grow up.",
        "point": "to-V diễn tả kết quả cuối cùng, không phải mục đích ban đầu"
      },
      {
        "vi": "Tôi đến đây để giúp đỡ.",
        "en": "I came to help.",
        "point": "không dùng 'for to', chỉ dùng 'to' đơn giản"
      }
    ]
  },
  "participle-adjectives": {
    "instruction": "Dịch các câu sau, chọn đúng tính từ dạng -ing (gây cảm xúc) hoặc -ed (nhận cảm xúc/kết quả) phù hợp.",
    "items": [
      {
        "vi": "Bộ phim này thật nhàm chán.",
        "en": "This movie is boring.",
        "point": "'-ing' mô tả vật/việc gây ra cảm giác"
      },
      {
        "vi": "Tôi cảm thấy chán vì bộ phim này.",
        "en": "I am bored by this movie.",
        "point": "'-ed' mô tả người nhận cảm giác"
      },
      {
        "vi": "Tin tức đó thật gây sốc.",
        "en": "The news was shocking.",
        "point": "'-ing' mô tả điều gây cảm xúc"
      },
      {
        "vi": "Chúng tôi đã rất sốc khi nghe tin đó.",
        "en": "We were shocked to hear the news.",
        "point": "'-ed' mô tả người trải qua cảm xúc"
      },
      {
        "vi": "Bài giảng này rất khó hiểu, làm tôi bối rối.",
        "en": "This lecture is confusing; it makes me confused.",
        "point": "cặp 'confusing' (gây bối rối) và 'confused' (bị bối rối)"
      },
      {
        "vi": "Đó là một đất nước đang phát triển.",
        "en": "It is a developing country.",
        "point": "'-ing' mang nghĩa chủ động/đang diễn ra"
      },
      {
        "vi": "Chiếc cửa sổ bị vỡ cần được sửa.",
        "en": "The broken window needs to be fixed.",
        "point": "'-ed/V3' mang nghĩa bị động/kết quả"
      },
      {
        "vi": "Anh ấy là một vị giáo sư uyên bác.",
        "en": "He is a learned professor.",
        "point": "cụm cố định bất quy tắc mang nghĩa đặc biệt (learned)"
      }
    ]
  },
  "stative-verbs": {
    "instruction": "Dịch các câu sau, chú ý các động từ trạng thái không chia tiếp diễn, và các trường hợp đặc biệt được dùng tiếp diễn với nghĩa khác.",
    "items": [
      {
        "vi": "Tôi yêu bài hát này.",
        "en": "I love this song.",
        "point": "stative verb 'love' không chia tiếp diễn"
      },
      {
        "vi": "Bây giờ tôi đã hiểu rồi.",
        "en": "I understand now.",
        "point": "stative verb 'understand' không dùng V-ing"
      },
      {
        "vi": "Ngôi nhà này thuộc về ông tôi.",
        "en": "This house belongs to my grandfather.",
        "point": "stative verb sở hữu 'belong' không chia tiếp diễn"
      },
      {
        "vi": "Tôi nghe thấy tiếng nhạc từ xa.",
        "en": "I hear music in the distance.",
        "point": "stative verb giác quan 'hear' không chia tiếp diễn"
      },
      {
        "vi": "Chiếc túi này nặng năm ký.",
        "en": "This bag weighs five kilos.",
        "point": "stative verb đo lường 'weigh' không chia tiếp diễn"
      },
      {
        "vi": "Tôi đang ăn trưa với đồng nghiệp.",
        "en": "I'm having lunch with my colleagues.",
        "point": "'have' dùng tiếp diễn khi mang nghĩa động 'ăn uống/trải nghiệm'"
      },
      {
        "vi": "Tôi đang cân nhắc về lời đề nghị đó.",
        "en": "I'm thinking about the offer.",
        "point": "'think' dùng tiếp diễn khi mang nghĩa 'đang suy nghĩ, cân nhắc'"
      },
      {
        "vi": "Tôi sẽ gặp nha sĩ vào ngày mai.",
        "en": "I'm seeing the dentist tomorrow.",
        "point": "'see' dùng tiếp diễn khi mang nghĩa 'hẹn gặp'"
      },
      {
        "vi": "Đầu bếp đang nếm thử món súp.",
        "en": "The chef is tasting the soup.",
        "point": "'taste' dùng tiếp diễn khi mang nghĩa hành động chủ động nếm"
      },
      {
        "vi": "Anh ấy đang cư xử rất ngớ ngẩn.",
        "en": "He is being silly.",
        "point": "'be' dùng tiếp diễn để phê bình hành vi tạm thời, không phải bản chất"
      },
      {
        "vi": "Món súp này có vị rất ngon.",
        "en": "This soup tastes great.",
        "point": "'taste' ở dạng thường mô tả trạng thái vị (stative)"
      }
    ]
  },
  "will-vs-going-to": {
    "instruction": "Dịch các câu sau, chọn đúng cách diễn đạt tương lai: will, be going to, hiện tại tiếp diễn, hiện tại đơn, be about to, be to, be due to.",
    "items": [
      {
        "vi": "Điện thoại đang reo — để tôi nghe máy!",
        "en": "The phone's ringing — I'll get it!",
        "point": "'will' cho quyết định tức thì lúc nói"
      },
      {
        "vi": "Tôi sẽ đi du học vào năm sau.",
        "en": "I'm going to study abroad next year.",
        "point": "'be going to' cho kế hoạch đã quyết định trước"
      },
      {
        "vi": "Nhìn những đám mây kia kìa! Trời sắp mưa rồi.",
        "en": "Look at those clouds! It's going to rain.",
        "point": "'be going to' cho dự đoán dựa trên dấu hiệu hiện tại"
      },
      {
        "vi": "Tôi nghĩ ngày mai trời sẽ nắng.",
        "en": "I think it will be sunny tomorrow.",
        "point": "'will' cho dự đoán dựa trên ý kiến"
      },
      {
        "vi": "Anh sẽ luôn yêu em.",
        "en": "I will always love you.",
        "point": "'will' diễn tả lời hứa"
      },
      {
        "vi": "Bạn giúp tôi được không?",
        "en": "Will you help me?",
        "point": "'will' dùng trong câu đề nghị/yêu cầu"
      },
      {
        "vi": "Tôi sẽ gặp cô ấy lúc năm giờ chiều.",
        "en": "I'm meeting her at 5 p.m.",
        "point": "hiện tại tiếp diễn cho kế hoạch chắc chắn, đã sắp xếp"
      },
      {
        "vi": "Chuyến tàu khởi hành lúc bảy giờ.",
        "en": "The train leaves at seven.",
        "point": "hiện tại đơn cho lịch trình cố định"
      },
      {
        "vi": "Bộ phim sắp bắt đầu rồi.",
        "en": "The film is about to start.",
        "point": "'be about to' cho việc sắp xảy ra ngay tức thì"
      },
      {
        "vi": "Tổng thống sẽ đến thăm Hà Nội.",
        "en": "The President is to visit Hanoi.",
        "point": "'be to' trang trọng cho kế hoạch/mệnh lệnh chính thức"
      },
      {
        "vi": "Máy bay dự kiến hạ cánh lúc tám giờ.",
        "en": "The plane is due to land at eight.",
        "point": "'be due to' cho việc dự kiến theo lịch trình"
      }
    ]
  },
  "narrative-present": {
    "instruction": "Dịch các câu sau bằng thì hiện tại đơn dùng để kể chuyện quá khứ, đúng với văn cảnh tin tức/kể chuyện/bình luận/hướng dẫn.",
    "items": [
      {
        "vi": "Tổng thống ký ban hành luật mới.",
        "en": "The President signs a new law.",
        "point": "hiện tại kể chuyện (narrative present) dùng trong tin tức"
      },
      {
        "vi": "Romeo gặp Juliet tại buổi vũ hội.",
        "en": "Romeo meets Juliet at the ball.",
        "point": "hiện tại đơn để tóm tắt nội dung phim/sách"
      },
      {
        "vi": "Thế là tôi bước vào, và anh ta nói...",
        "en": "So I walk in, and he says...",
        "point": "hiện tại kể chuyện dùng khi kể chuyện hài, tạo cảm giác sống động"
      },
      {
        "vi": "Đầu tiên, bạn mở tệp tin ra.",
        "en": "First, you open the file.",
        "point": "hiện tại đơn dùng trong hướng dẫn từng bước"
      },
      {
        "vi": "Messi chuyền bóng cho Suarez, người dứt điểm và ghi bàn!",
        "en": "Messi passes to Suarez, who shoots and scores!",
        "point": "hiện tại đơn trong bình luận thể thao trực tiếp"
      },
      {
        "vi": "Cô ấy bước vào phòng, nhìn quanh, rồi mỉm cười.",
        "en": "She walks into the room, looks around, then smiles.",
        "point": "chuỗi hiện tại đơn liên tiếp tạo cảm giác đang xảy ra trước mắt"
      },
      {
        "vi": "Chiến tranh đã kết thúc vào năm 1945.",
        "en": "The war ended in 1945.",
        "point": "văn học thuật dùng quá khứ cho sự kiện lịch sử, không dùng narrative present"
      }
    ]
  },
  "semi-modals": {
    "instruction": "Dịch các câu sau, dùng đúng các semi-modal had better, would rather, need, dare theo đúng cấu trúc và ngữ cảnh.",
    "items": [
      {
        "vi": "Bạn nên rời đi ngay bây giờ, không thì sẽ muộn.",
        "en": "You'd better leave now, or you'll be late.",
        "point": "'had better' cảnh báo hậu quả"
      },
      {
        "vi": "Bạn không nên nói với anh ấy chuyện đó.",
        "en": "You'd better not tell him about that.",
        "point": "phủ định 'had better' là 'had better not', không phải 'hadn't better'"
      },
      {
        "vi": "Tôi thà ở nhà tối nay hơn.",
        "en": "I'd rather stay home tonight.",
        "point": "'would rather + V' khi chính chủ ngữ làm"
      },
      {
        "vi": "Tôi thích là bạn đừng hút thuốc ở đây.",
        "en": "I'd rather you didn't smoke here.",
        "point": "'would rather + S + V quá khứ' khi người khác làm hành động"
      },
      {
        "vi": "Bạn không cần đến sớm đâu.",
        "en": "You needn't come early.",
        "point": "'needn't' như modal, tương đương 'don't need to'"
      },
      {
        "vi": "Bạn đã không cần mang quà đâu, nhưng bạn mang rồi.",
        "en": "You needn't have brought a gift.",
        "point": "'needn't have + V3' cho việc đã lỡ làm dù không cần thiết"
      },
      {
        "vi": "Cô ấy có dám hỏi ông chủ không?",
        "en": "Dare she ask the boss?",
        "point": "'dare' dùng như modal trong câu hỏi"
      },
      {
        "vi": "Sao anh dám nói với tôi như vậy!",
        "en": "How dare you speak to me like that!",
        "point": "'dare' như modal trong câu cảm thán phẫn nộ"
      },
      {
        "vi": "Tôi cần nộp báo cáo này trước thứ Sáu.",
        "en": "I need to submit this report by Friday.",
        "point": "'need' ở câu khẳng định dùng như động từ thường 'need to + V'"
      },
      {
        "vi": "Giá mà tôi đã học chăm hơn cho kỳ thi đó.",
        "en": "I would rather I had studied harder for that exam.",
        "point": "'would rather + S + had V3' diễn tả tiếc nuối quá khứ"
      }
    ]
  },
  "yes-no-questions": {
    "instruction": "Dịch các câu sau thành câu hỏi Yes/No đúng cấu trúc, kể cả câu hỏi phủ định và câu hỏi với 'ever', cùng câu trả lời ngắn.",
    "items": [
      {
        "vi": "Bạn có mệt không?",
        "en": "Are you tired?",
        "point": "câu hỏi Yes/No với 'be' đảo lên trước chủ ngữ"
      },
      {
        "vi": "Bạn có thích cà phê không?",
        "en": "Do you like coffee?",
        "point": "'do-support' cho động từ thường ở câu hỏi"
      },
      {
        "vi": "Bạn không thích nó à?",
        "en": "Don't you like it?",
        "point": "câu hỏi phủ định khi kỳ vọng câu trả lời 'có'"
      },
      {
        "vi": "Bạn không thấy lạnh à?",
        "en": "Aren't you cold?",
        "point": "câu hỏi phủ định thể hiện sự ngạc nhiên"
      },
      {
        "vi": "Bạn vẫn chưa xong à?",
        "en": "Haven't you finished yet?",
        "point": "câu hỏi phủ định mang ý phê phán nhẹ"
      },
      {
        "vi": "— Bạn có thích nhạc không? — Có, tôi thích.",
        "en": "— Do you like music? — Yes, I do.",
        "point": "câu trả lời ngắn dùng đúng trợ động từ tương ứng"
      },
      {
        "vi": "Bạn đã từng đến Paris chưa?",
        "en": "Have you ever been to Paris?",
        "point": "'ever' hỏi về kinh nghiệm với hiện tại hoàn thành"
      },
      {
        "vi": "Bạn có bao giờ gặp anh ấy chưa?",
        "en": "Did you ever meet him?",
        "point": "'ever' dùng với quá khứ đơn trong văn nói kiểu Mỹ"
      }
    ]
  },
  "wh-questions": {
    "instruction": "Dịch các câu sau thành câu hỏi Wh- đúng, phân biệt trường hợp Wh làm chủ ngữ (không đảo) và Wh hỏi về tân ngữ/hoàn cảnh (có đảo).",
    "items": [
      {
        "vi": "Bạn đã ăn gì?",
        "en": "What did you eat?",
        "point": "wh hỏi về tân ngữ: Wh + Aux + S + V"
      },
      {
        "vi": "Ai đã làm vỡ cái cốc?",
        "en": "Who broke the cup?",
        "point": "wh là chủ ngữ: Wh + V, không dùng do/did"
      },
      {
        "vi": "Bạn đã gặp ai?",
        "en": "Whom did you see?",
        "point": "'whom' hỏi về tân ngữ (trang trọng)"
      },
      {
        "vi": "Đây là sách của ai?",
        "en": "Whose book is this?",
        "point": "'whose' hỏi về sở hữu"
      },
      {
        "vi": "Bạn muốn màu nào?",
        "en": "Which color do you want?",
        "point": "'which' hỏi lựa chọn trong số các lựa chọn cụ thể"
      },
      {
        "vi": "Bạn sống ở đâu?",
        "en": "Where do you live?",
        "point": "'where' hỏi về nơi chốn"
      },
      {
        "vi": "Chuyện đó xảy ra khi nào?",
        "en": "When did it happen?",
        "point": "'when' hỏi về thời gian"
      },
      {
        "vi": "Sao bạn lại đến muộn?",
        "en": "Why are you late?",
        "point": "'why' hỏi về lý do"
      },
      {
        "vi": "Bạn đã làm việc đó như thế nào?",
        "en": "How did you do it?",
        "point": "'how' hỏi về cách thức"
      },
      {
        "vi": "Bạn đi làm bao lâu một lần?",
        "en": "How often do you go to work?",
        "point": "'how + adv' hỏi về mức độ/tần suất"
      },
      {
        "vi": "Bạn cần bao nhiêu tiền?",
        "en": "How much money do you need?",
        "point": "'how much' hỏi về số lượng không đếm được"
      },
      {
        "vi": "Bạn đang nói chuyện với ai vậy?",
        "en": "Who are you talking to?",
        "point": "giới từ đặt cuối câu trong văn nói thân mật"
      }
    ]
  },
  "embedded-questions": {
    "instruction": "Dịch các câu sau thành câu hỏi gián tiếp (embedded questions), giữ nguyên trật tự S trước V, không đảo ngữ.",
    "items": [
      {
        "vi": "Bạn có thể cho tôi biết ngân hàng ở đâu không?",
        "en": "Could you tell me where the bank is?",
        "point": "câu hỏi gián tiếp không đảo ngữ, giữ trật tự S trước V"
      },
      {
        "vi": "Tôi tự hỏi liệu cô ấy có đến không.",
        "en": "I wonder if she will come.",
        "point": "câu hỏi gián tiếp Yes/No dùng 'if'"
      },
      {
        "vi": "Tôi không chắc liệu anh ấy có đồng ý hay không.",
        "en": "I'm not sure whether he will agree.",
        "point": "câu hỏi gián tiếp Yes/No dùng 'whether'"
      },
      {
        "vi": "Bạn có biết anh ấy sống ở đâu không?",
        "en": "Do you know where he lives?",
        "point": "câu hỏi gián tiếp dạng wh, không đảo ngữ"
      },
      {
        "vi": "Tôi muốn biết tại sao cô ấy lại rời đi sớm như vậy.",
        "en": "I want to know why she left so early.",
        "point": "câu hỏi gián tiếp sau 'want to know'"
      },
      {
        "vi": "Bạn có thể cho tôi biết mấy giờ rồi không?",
        "en": "Do you know what time it is?",
        "point": "dùng câu hỏi gián tiếp để lịch sự hơn câu hỏi trực tiếp"
      },
      {
        "vi": "Bạn có phiền cho tôi biết cái này giá bao nhiêu không?",
        "en": "Would you mind telling me how much this is?",
        "point": "câu hỏi gián tiếp rất lịch sự với 'would you mind'"
      },
      {
        "vi": "Tôi tự hỏi cô ấy đã đi đâu.",
        "en": "I wonder where she went.",
        "point": "'wonder' + câu hỏi gián tiếp dạng wh"
      }
    ]
  },
  "hedges-boosters": {
    "instruction": "Dịch các câu sau, chọn đúng hedge (làm mềm) hoặc booster (nhấn mạnh) phù hợp mức độ chắc chắn của ý muốn diễn đạt.",
    "items": [
      {
        "vi": "Việc này có phần khó đo lường.",
        "en": "This is somewhat difficult to measure.",
        "point": "hedge 'somewhat' giảm mức độ tuyệt đối"
      },
      {
        "vi": "Điều này rõ ràng cho thấy một xu hướng.",
        "en": "This clearly shows a trend.",
        "point": "booster 'clearly' tăng sức khẳng định"
      },
      {
        "vi": "Anh ấy có lẽ đúng.",
        "en": "He is probably right.",
        "point": "hedge 'probably' thể hiện sự thận trọng"
      },
      {
        "vi": "Anh ấy hoàn toàn đúng.",
        "en": "He is absolutely right.",
        "point": "booster 'absolutely' khẳng định mạnh mẽ"
      },
      {
        "vi": "Kết quả này có thể cho thấy mối liên hệ giữa hai yếu tố.",
        "en": "This may suggest a link between the two factors.",
        "point": "hedge trong văn học thuật khi bằng chứng chưa đủ mạnh, tránh 'proves'"
      },
      {
        "vi": "Kết quả rõ ràng cho thấy một mối liên hệ chắc chắn giữa hai yếu tố.",
        "en": "The results clearly indicate a strong link between the two factors.",
        "point": "booster đi cùng bằng chứng chắc chắn"
      },
      {
        "vi": "Doanh số có xu hướng tăng vào mùa hè.",
        "en": "Sales tend to increase in summer.",
        "point": "hedge 'tend to' làm câu thận trọng hơn"
      },
      {
        "vi": "Bạn có thể muốn xem lại phần này một chút.",
        "en": "You might want to review this part a bit.",
        "point": "hedge làm góp ý trong công việc nghe mềm hơn"
      }
    ]
  },
  "politeness-indirectness": {
    "instruction": "Dịch các câu sau, chọn đúng mức độ lịch sự/gián tiếp (modal quá khứ, embedded question, downtoner, mở đầu mềm) phù hợp ngữ cảnh.",
    "items": [
      {
        "vi": "Mở cửa sổ ra.",
        "en": "Open the window.",
        "point": "yêu cầu trực tiếp (mệnh lệnh), khá thẳng"
      },
      {
        "vi": "Bạn mở cửa sổ giúp tôi được không?",
        "en": "Can you open the window?",
        "point": "yêu cầu trung tính với modal 'can'"
      },
      {
        "vi": "Bạn có thể mở cửa sổ giúp tôi được không ạ?",
        "en": "Could you open the window, please?",
        "point": "modal quá khứ 'could' nghe lịch sự hơn 'can'"
      },
      {
        "vi": "Tôi đang tự hỏi liệu bạn có thể mở cửa sổ giúp tôi không.",
        "en": "I was wondering if you could open the window.",
        "point": "thì quá khứ tiếp diễn 'was wondering' làm câu rất mềm"
      },
      {
        "vi": "Bạn có tình cờ biết giờ tàu chạy không?",
        "en": "Do you happen to know when the train leaves?",
        "point": "embedded question làm câu hỏi lịch sự hơn"
      },
      {
        "vi": "Bạn có phiền đóng cửa lại không?",
        "en": "Would you mind closing the door?",
        "point": "'would you mind' + V-ing để yêu cầu lịch sự"
      },
      {
        "vi": "E là tôi không thể giúp bạn việc đó.",
        "en": "I'm afraid I can't help you with that.",
        "point": "mở đầu mềm khi từ chối 'I'm afraid'"
      },
      {
        "vi": "Bạn có thể nói chậm lại một chút được không?",
        "en": "Could you speak a bit more slowly?",
        "point": "downtoner 'a bit' làm yêu cầu nhẹ nhàng hơn"
      },
      {
        "vi": "Tôi muốn hỏi liệu bạn có thể xem lại báo cáo giúp tôi không.",
        "en": "I wanted to ask whether you could review the report for me.",
        "point": "quá khứ ý định 'wanted to ask' làm yêu cầu lịch sự, gián tiếp"
      }
    ]
  },
  "negation-patterns": {
    "instruction": "Hãy chú ý chọn đúng cách phủ định: not...any hay no, các đại từ phủ định (never/nobody/nothing), hardly/scarcely, và tránh phủ định kép khi dịch.",
    "items": [
      {
        "vi": "Tôi không có tiền.",
        "en": "I don't have any money.",
        "point": "phủ định trung tính 'not any' sau trợ động từ"
      },
      {
        "vi": "Tôi chẳng có lấy một xu.",
        "en": "I have no money.",
        "point": "'no + N' phủ định mạnh hơn 'not any'"
      },
      {
        "vi": "Không ai gọi cho tôi cả.",
        "en": "Nobody called me.",
        "point": "đại từ phủ định 'nobody' đi với động từ khẳng định"
      },
      {
        "vi": "Tôi chưa từng thấy điều này trước đây.",
        "en": "I have never seen this before.",
        "point": "đại từ phủ định 'never' đi với động từ khẳng định"
      },
      {
        "vi": "Cô ấy hầu như không bao giờ đi trễ.",
        "en": "She hardly ever arrives late.",
        "point": "'hardly ever' nghĩa là 'almost never'"
      },
      {
        "vi": "Anh hầu như không biết gì về cô ấy, phải không?",
        "en": "You hardly know her, do you?",
        "point": "tag question dạng khẳng định 'do you' sau 'hardly'"
      },
      {
        "vi": "Tôi không nghĩ cô ấy sẽ đến.",
        "en": "I don't think she will come.",
        "point": "transferred negation - chuyển phủ định lên động từ chính"
      },
      {
        "vi": "Tôi tin rằng anh ấy sẽ không đồng ý.",
        "en": "I believe he won't agree.",
        "point": "phủ định ở mệnh đề phụ - đúng ngữ pháp nhưng ít tự nhiên hơn"
      },
      {
        "vi": "Tôi không biết gì cả.",
        "en": "I don't know anything.",
        "point": "tránh phủ định kép - dùng 'anything' sau 'don't', không dùng 'nothing'"
      }
    ]
  },
  "information-flow": {
    "instruction": "Khi dịch, hãy đặt phần thông tin dài/mới ở cuối câu bằng 'it', 'there' hoặc câu bị động thay vì để chủ ngữ quá dài đứng đầu câu (end-weight).",
    "items": [
      {
        "vi": "Hiểu rõ những rủi ro của kế hoạch này là điều quan trọng.",
        "en": "It is important to understand the risks of this plan.",
        "point": "extraposition với 'it' đẩy cụm to-infinitive dài ra cuối"
      },
      {
        "vi": "Thật bất ngờ là không ai phàn nàn cả.",
        "en": "It was surprising that nobody complained.",
        "point": "extraposition với 'it' đẩy mệnh đề 'that' ra cuối"
      },
      {
        "vi": "Có nhiều lý do khiến kế hoạch này thất bại.",
        "en": "There are several reasons why this plan fails.",
        "point": "existential 'there' giới thiệu thông tin mới mượt hơn"
      },
      {
        "vi": "Đề xuất đã bị ủy ban mà chúng tôi liên hệ trước đó bác bỏ.",
        "en": "The proposal was rejected by the committee we had contacted earlier.",
        "point": "dùng câu bị động để giữ đầu câu gọn, đẩy phần nặng ra sau"
      },
      {
        "vi": "Có một vấn đề lớn mà chúng ta cần giải quyết ngay.",
        "en": "There is a big problem that we need to solve right away.",
        "point": "existential 'there' cho thông tin mới, chủ ngữ dài để sau"
      },
      {
        "vi": "Đáng chú ý là có ba lý do chính đằng sau quyết định này.",
        "en": "Notably, there are three main reasons behind this decision.",
        "point": "mở đầu ngắn (cataphoric) rồi mới đưa phần nặng ra sau bằng 'there'"
      },
      {
        "vi": "Việc thuyết phục toàn bộ hội đồng thay đổi quyết định gần như là không thể.",
        "en": "It is almost impossible to persuade the whole board to change its decision.",
        "point": "giữ chủ ngữ dài ở cuối câu bằng 'it' thay vì đưa lên đầu"
      }
    ]
  },
  "inversion-negative": {
    "instruction": "Dịch các câu này sang tiếng Anh có đảo ngữ đúng khi trạng từ phủ định (Never, Hardly, No sooner, Not only, Only after, Little, Under no circumstances...) đứng đầu câu.",
    "items": [
      {
        "vi": "Tôi chưa bao giờ thấy điều gì đẹp đến thế.",
        "en": "Never have I seen anything so beautiful.",
        "point": "đảo ngữ với 'Never' đứng đầu câu"
      },
      {
        "vi": "Tôi hiếm khi ăn tối muộn như vậy.",
        "en": "Rarely do I have dinner so late.",
        "point": "đảo ngữ với 'Rarely' đứng đầu câu"
      },
      {
        "vi": "Cô ấy hiếm khi phàn nàn về công việc.",
        "en": "Seldom does she complain about her job.",
        "point": "đảo ngữ với 'Seldom' đứng đầu câu"
      },
      {
        "vi": "Tôi vừa mới ngồi xuống thì điện thoại reo.",
        "en": "Hardly had I sat down when the phone rang.",
        "point": "đảo ngữ 'Hardly...when' + mệnh đề"
      },
      {
        "vi": "Anh ấy vừa đến nơi thì cô ấy đã rời đi.",
        "en": "No sooner had he arrived than she left.",
        "point": "đảo ngữ 'No sooner...than' + mệnh đề"
      },
      {
        "vi": "Anh ấy không những tốt bụng mà còn giàu có.",
        "en": "Not only is he kind, but he is also rich.",
        "point": "đảo ngữ với 'Not only', vế thứ hai không đảo"
      },
      {
        "vi": "Mãi đến khi cô ấy rời đi, tôi mới nhận ra sự thật.",
        "en": "Only after she left did I realize the truth.",
        "point": "'Only after' + đảo ngữ ở mệnh đề chính"
      },
      {
        "vi": "Tôi không hề biết rằng mình đã sai.",
        "en": "Little did I know that I was wrong.",
        "point": "đảo ngữ với 'Little did I know'"
      },
      {
        "vi": "Trong bất kỳ trường hợp nào bạn cũng không được tiết lộ thông tin này.",
        "en": "Under no circumstances should you reveal this information.",
        "point": "đảo ngữ với 'Under no circumstances'"
      },
      {
        "vi": "Chúng tôi không thể chấp nhận đề nghị này bằng bất cứ cách nào.",
        "en": "In no way can we accept this proposal.",
        "point": "đảo ngữ với 'In no way'"
      },
      {
        "vi": "Chỉ khi đến muộn tôi mới hiểu tại sao mọi người lo lắng.",
        "en": "Only when I arrived late did I understand why everyone was worried.",
        "point": "'Only when' + đảo ngữ ở mệnh đề chính"
      }
    ]
  },
  "fronting": {
    "instruction": "Đưa đúng thành phần (tân ngữ, bổ ngữ, trạng ngữ chỉ nơi chốn) lên đầu câu tiếng Anh, chú ý câu nào cần đảo ngữ và câu nào không.",
    "items": [
      {
        "vi": "Cuốn sách đó, tôi đã đọc rồi.",
        "en": "That book, I have already read.",
        "point": "object fronting - không đảo ngữ"
      },
      {
        "vi": "Ở góc phòng đứng một ông già.",
        "en": "In the corner stood an old man.",
        "point": "locative inversion - đảo ngữ với trạng ngữ chỉ nơi chốn"
      },
      {
        "vi": "Cảnh đẹp đến nỗi chúng tôi đã ở lại.",
        "en": "So beautiful was the view that we stayed.",
        "point": "complement fronting 'So + adj + be' - có đảo ngữ"
      },
      {
        "vi": "Phần này thì tôi không hiểu.",
        "en": "This part, I don't understand.",
        "point": "object fronting - không đảo ngữ"
      },
      {
        "vi": "Trên tường treo một bức tranh.",
        "en": "On the wall hung a painting.",
        "point": "locative inversion với động từ 'hang'"
      },
      {
        "vi": "Cô ấy mệt đến nỗi ngủ thiếp đi.",
        "en": "So tired was she that she fell asleep.",
        "point": "complement fronting nhấn mạnh mức độ"
      },
      {
        "vi": "Danh tiếng của ông ấy lớn đến mức ai cũng biết.",
        "en": "Such was his fame that everyone knew him.",
        "point": "complement fronting với 'Such...that'"
      },
      {
        "vi": "Điều này, tôi hoàn toàn đồng ý.",
        "en": "This, I completely agree with.",
        "point": "object fronting tạo mạch văn (textual cohesion)"
      }
    ]
  },
  "complex-inversion": {
    "instruction": "Khi cụm từ chỉ nơi chốn/phương hướng đứng đầu câu, hãy đảo động từ lên trước chủ ngữ (nếu chủ ngữ là cụm danh từ đầy đủ) để tạo văn phong miêu tả tự nhiên.",
    "items": [
      {
        "vi": "Người đàn ông mà chúng tôi đang đợi bước vào phòng.",
        "en": "Into the room walked the man we had been waiting for.",
        "point": "đảo ngữ với cụm hướng 'into' + động từ chuyển động"
      },
      {
        "vi": "Chiếc xe đẩy lăn xuống đồi.",
        "en": "Down the hill rolled the cart.",
        "point": "đảo ngữ với cụm hướng 'down'"
      },
      {
        "vi": "Một bức chân dung của ông nội cô ấy treo trên tường.",
        "en": "On the wall hung a portrait of her grandfather.",
        "point": "đảo ngữ với cụm nơi chốn 'on' + động từ tĩnh 'hang'"
      },
      {
        "vi": "Một con mèo già nằm bên cạnh lò sưởi.",
        "en": "By the fireplace lay an old cat.",
        "point": "đảo ngữ với cụm nơi chốn + động từ tĩnh 'lie'"
      },
      {
        "vi": "Một đám đông lớn đứng trước cổng.",
        "en": "In front of the gate stood a large crowd.",
        "point": "đảo ngữ khi chủ ngữ là cụm danh từ đầy đủ, không phải đại từ"
      },
      {
        "vi": "Anh ấy bước vào phòng.",
        "en": "He walked into the room.",
        "point": "giữ trật tự thường (không đảo) khi chủ ngữ là đại từ ngắn"
      },
      {
        "vi": "Từ trong rừng bước ra một con hươu.",
        "en": "Out of the forest walked a deer.",
        "point": "đảo ngữ với cụm hướng 'out of' + động từ chuyển động"
      },
      {
        "vi": "Danh dự của gia tộc lớn đến nỗi không ai dám thách thức.",
        "en": "Such was the family's honor that no one dared challenge it.",
        "point": "complex inversion trang trọng với 'such...that'"
      }
    ]
  },
  "archaisms-modern-grammar": {
    "instruction": "Dịch các câu này bằng đúng cụm cổ/trang trọng cố định (lest, be that as it may, come what may, so be it) đang được nhắc đến.",
    "items": [
      {
        "vi": "Hãy cẩn thận kẻo bạn quên mất.",
        "en": "Be careful lest you forget.",
        "point": "'lest' + mệnh đề mang nghĩa 'để khỏi, kẻo'"
      },
      {
        "vi": "Dù thế nào đi nữa, chúng ta vẫn phải tiếp tục.",
        "en": "Be that as it may, we must continue.",
        "point": "cụm nhượng bộ trang trọng 'be that as it may'"
      },
      {
        "vi": "Dù chuyện gì xảy ra, tôi cũng sẽ hoàn thành nhiệm vụ.",
        "en": "Come what may, I will finish the task.",
        "point": "cụm cố định 'come what may'"
      },
      {
        "vi": "Nếu đó là quyết định của anh, thì đành vậy.",
        "en": "If that is your decision, so be it.",
        "point": "cụm chấp nhận 'so be it'"
      },
      {
        "vi": "Trong văn nói hàng ngày, người ta thường nói 'để khỏi bị trễ' thay vì dùng 'lest'.",
        "en": "In everyday speech, people usually say 'so that they won't be late' instead of using 'lest'.",
        "point": "thay 'lest' bằng 'so that...not' trong văn nói hiện đại"
      },
      {
        "vi": "Anh ấy khóa cửa kẻo có kẻ trộm vào.",
        "en": "He locked the door lest a thief should come in.",
        "point": "'lest' đi cùng 'should' mang sắc thái trang trọng"
      },
      {
        "vi": "Điều khoản pháp lý này được viết ra để tránh mọi tranh chấp trong tương lai.",
        "en": "This legal clause was written lest any dispute arise in the future.",
        "point": "'lest' dùng trong văn phong pháp lý trang trọng"
      }
    ]
  },
  "do-emphasis": {
    "instruction": "Dùng do/does/did để nhấn mạnh khẳng định, đáp lại nghi ngờ, ra mệnh lệnh lịch sự hoặc tạo đối lập khi dịch sang tiếng Anh.",
    "items": [
      {
        "vi": "\"Con không yêu mẹ đâu.\" \"Con CÓ yêu mẹ mà!\"",
        "en": "\"You don't love me.\" \"I DO love you!\"",
        "point": "emphatic 'do' đáp lại nghi ngờ"
      },
      {
        "vi": "Xin mời vào!",
        "en": "Do come in!",
        "point": "'do' nhấn mạnh trong câu mệnh lệnh lịch sự"
      },
      {
        "vi": "Làm ơn ngồi xuống đi!",
        "en": "Do sit down!",
        "point": "emphatic imperative với 'do'"
      },
      {
        "vi": "Cô ấy hát không hay, nhưng nhảy thì thực sự đẹp.",
        "en": "She doesn't sing well, but she does dance beautifully.",
        "point": "'does' nhấn mạnh sự đối lập"
      },
      {
        "vi": "Tôi thực sự tin rằng bạn đã nhầm.",
        "en": "I do believe you are mistaken.",
        "point": "'do' trong văn viết trang trọng, lịch sự hơn"
      },
      {
        "vi": "Báo cáo thực sự nêu bật một số vấn đề.",
        "en": "The report does highlight several issues.",
        "point": "'does' nhấn mạnh trong văn phong học thuật"
      },
      {
        "vi": "Hãy kể cho tôi nghe thêm đi.",
        "en": "Do tell me more.",
        "point": "emphatic 'do' trong câu mệnh lệnh"
      }
    ]
  },
  "causative-have-get": {
    "instruction": "Chọn đúng cấu trúc nhờ vả/sai khiến (have/get + O + V, make, let, help) và thể bị động tương ứng khi dịch.",
    "items": [
      {
        "vi": "Tôi đã nhờ John sửa xe cho tôi.",
        "en": "I had John fix my car.",
        "point": "'have + O + V nguyên mẫu' - nhờ ai đó làm"
      },
      {
        "vi": "Tôi đã thuyết phục được anh ấy sửa nó.",
        "en": "I got him to fix it.",
        "point": "'get + O + to-V' - thuyết phục ai làm"
      },
      {
        "vi": "Tôi vừa cắt tóc xong (nhờ thợ).",
        "en": "I had my hair cut.",
        "point": "'have + O + V3' - nhờ làm cho mình"
      },
      {
        "vi": "Cô ấy đã bắt tôi khóc.",
        "en": "She made me cry.",
        "point": "'make + O + V nguyên mẫu' - bắt buộc"
      },
      {
        "vi": "Hãy để tôi đi.",
        "en": "Let me go.",
        "point": "'let + O + V nguyên mẫu' - cho phép"
      },
      {
        "vi": "Anh ấy đã giúp tôi hoàn thành bài tập.",
        "en": "He helped me (to) finish the homework.",
        "point": "'help + O + (to)-V'"
      },
      {
        "vi": "Cô ấy đã bị bắt phải xin lỗi.",
        "en": "She was made to apologize.",
        "point": "thể bị động của 'make' cần thêm 'to'"
      },
      {
        "vi": "Tôi đã nhờ thợ sửa xe của mình.",
        "en": "I had my car repaired.",
        "point": "'have + O + V3' nghĩa nhờ làm (chủ động nhờ vả)"
      },
      {
        "vi": "Xe của tôi đã bị trộm mất.",
        "en": "I had my car stolen.",
        "point": "'have + O + V3' nghĩa bị tai nạn/mất mát"
      },
      {
        "vi": "Ngày mai tôi sẽ đi cắt tóc.",
        "en": "I'll get my hair cut tomorrow.",
        "point": "'get + O + V3' ở thì tương lai, ít trang trọng hơn 'have'"
      },
      {
        "vi": "Anh ấy không được phép rời khỏi phòng.",
        "en": "He wasn't allowed to leave the room.",
        "point": "'let' không có dạng bị động, dùng 'be allowed to'"
      }
    ]
  },
  "punctuation-deep": {
    "instruction": "Dịch đúng nội dung và tái hiện đúng dấu câu tiếng Anh (dấu phẩy, chấm phẩy, hai chấm, gạch ngang) theo đúng quy tắc đang được kiểm tra.",
    "items": [
      {
        "vi": "Tôi thích màu đỏ, trắng và xanh dương.",
        "en": "I like red, white, and blue.",
        "point": "dấu phẩy liệt kê 3 mục trở lên (Oxford comma)"
      },
      {
        "vi": "Khi tôi đến nơi, mọi người đã ở đó rồi.",
        "en": "When I arrived, everyone was already there.",
        "point": "dấu phẩy sau mệnh đề trạng ngữ đứng đầu câu"
      },
      {
        "vi": "Tôi đến, và tôi đã thấy điều đó.",
        "en": "I came, and I saw it.",
        "point": "dấu phẩy trước FANBOYS nối hai mệnh đề độc lập"
      },
      {
        "vi": "Anh trai tôi, người sống ở New York, sắp về thăm nhà.",
        "en": "My brother, who lives in New York, is coming home soon.",
        "point": "dấu phẩy bao quanh mệnh đề quan hệ không xác định"
      },
      {
        "vi": "Cuốn sách đó, tuy nhiên, lại rất hay.",
        "en": "The book, however, was great.",
        "point": "dấu phẩy chêm xen từ nối 'however'"
      },
      {
        "vi": "Bill Gates, người sáng lập Microsoft, đã nói như vậy.",
        "en": "Bill Gates, founder of Microsoft, said so.",
        "point": "dấu phẩy quanh apposition không xác định"
      },
      {
        "vi": "Tôi đến; tôi thấy; tôi chinh phục.",
        "en": "I came; I saw; I conquered.",
        "point": "dấu chấm phẩy nối các mệnh đề độc lập có liên quan"
      },
      {
        "vi": "Tôi cần ba thứ: bút, giấy và mực.",
        "en": "I need three things: a pen, paper, and ink.",
        "point": "dấu hai chấm giới thiệu danh sách liệt kê"
      },
      {
        "vi": "Cô ấy nói với tôi—và tôi đã tin cô ấy—rằng anh ta có tội.",
        "en": "She told me—and I believed her—that he was guilty.",
        "point": "dấu gạch ngang chêm xen mạnh"
      },
      {
        "vi": "Tôi đến. Tôi thấy.",
        "en": "I came. I saw.",
        "point": "sửa lỗi run-on bằng cách tách thành hai câu riêng"
      },
      {
        "vi": "Tuy nhiên, kế hoạch đã thay đổi.",
        "en": "However, the plan has changed.",
        "point": "dấu phẩy bắt buộc sau 'however' đứng đầu câu"
      }
    ]
  },
  "apostrophe-rules": {
    "instruction": "Chú ý dùng dấu nháy đơn (') đúng chỗ cho sở hữu cách và viết tắt, không dùng cho số nhiều thường hoặc đại từ sở hữu.",
    "items": [
      {
        "vi": "Cái đuôi của con chó.",
        "en": "The dog's tail.",
        "point": "sở hữu cách số ít + 's"
      },
      {
        "vi": "Phòng của các cậu bé.",
        "en": "The boys' room.",
        "point": "sở hữu cách số nhiều đã có 's' chỉ thêm dấu nháy"
      },
      {
        "vi": "Đồ chơi của bọn trẻ.",
        "en": "The children's toys.",
        "point": "sở hữu cách số nhiều bất quy tắc + 's"
      },
      {
        "vi": "Cuốn sách của James.",
        "en": "James's book.",
        "point": "sở hữu cách với tên riêng kết thúc bằng 's'"
      },
      {
        "vi": "Ngôi nhà chung của John và Mary.",
        "en": "John and Mary's house.",
        "point": "sở hữu chung - chỉ thêm 's' ở tên cuối"
      },
      {
        "vi": "Hai ngôi nhà riêng, một của John và một của Mary.",
        "en": "John's and Mary's houses.",
        "point": "sở hữu riêng - mỗi tên đều thêm 's'"
      },
      {
        "vi": "Xe của nó bị hỏng rồi.",
        "en": "Its car is broken.",
        "point": "'its' sở hữu không dùng dấu nháy, tránh nhầm với 'it's'"
      },
      {
        "vi": "Đây là cuốn sách của ai?",
        "en": "Whose book is this?",
        "point": "phân biệt 'whose' (sở hữu) với 'who's' (who is)"
      },
      {
        "vi": "Cuốn sách này là của cô ấy.",
        "en": "This book is hers.",
        "point": "đại từ sở hữu 'hers' không có dấu nháy"
      },
      {
        "vi": "Táo giá 1 đô la một quả.",
        "en": "Apples are $1 each.",
        "point": "không dùng dấu nháy cho danh từ số nhiều thường"
      },
      {
        "vi": "Anh ấy đã đến rồi.",
        "en": "He's already arrived.",
        "point": "''s' viết tắt của 'has' theo ngữ cảnh, không phải 'is'"
      }
    ]
  },
  "capitalization-rules": {
    "instruction": "Viết hoa đúng những từ cần viết hoa (đầu câu, tên riêng, ngày tháng, quốc tịch...) và không viết hoa những từ chung chung (mùa, hướng, môn học...).",
    "items": [
      {
        "vi": "Tôi thích đọc sách vào mùa đông.",
        "en": "I like reading books in winter.",
        "point": "không viết hoa tên mùa ('winter')"
      },
      {
        "vi": "Cô ấy nói: \"Tôi sẽ đến vào ngày mai.\"",
        "en": "She said, \"I will come tomorrow.\"",
        "point": "viết hoa chữ đầu câu trích dẫn trực tiếp"
      },
      {
        "vi": "Tôi là người Việt Nam và tôi nói tiếng Anh khá tốt.",
        "en": "I am Vietnamese, and I speak English quite well.",
        "point": "viết hoa quốc tịch và tên ngôn ngữ"
      },
      {
        "vi": "Chúng tôi sẽ gặp nhau vào thứ Hai, ngày đầu tháng Giêng.",
        "en": "We will meet on Monday, the first day of January.",
        "point": "viết hoa tên ngày trong tuần và tên tháng"
      },
      {
        "vi": "Tổng thống Biden sẽ phát biểu vào chiều nay.",
        "en": "President Biden will speak this afternoon.",
        "point": "viết hoa chức danh khi đứng trước tên riêng"
      },
      {
        "vi": "Vị tổng thống sẽ phát biểu vào chiều nay.",
        "en": "The president will speak this afternoon.",
        "point": "không viết hoa chức danh khi dùng chung chung"
      },
      {
        "vi": "Tôi giỏi môn toán nhưng yếu môn tiếng Pháp.",
        "en": "I am good at math but weak in French.",
        "point": "không viết hoa môn học chung, viết hoa tên ngôn ngữ"
      },
      {
        "vi": "Chúng tôi đang lái xe về phía nam.",
        "en": "We are driving south.",
        "point": "không viết hoa hướng khi chỉ phương hướng chung"
      },
      {
        "vi": "Cuốn tiểu thuyết 'Chúa tể những chiếc nhẫn' rất nổi tiếng.",
        "en": "The novel 'The Lord of the Rings' is very famous.",
        "point": "viết hoa từ chính theo Title Case, không viết hoa 'of the'"
      },
      {
        "vi": "Cô Lan làm việc ở công ty Apple.",
        "en": "Ms. Lan works at Apple.",
        "point": "viết hoa tên riêng của công ty/thương hiệu"
      },
      {
        "vi": "Miền Nam nước Mỹ nổi tiếng với ẩm thực đặc trưng.",
        "en": "The South is known for its distinctive cuisine.",
        "point": "viết hoa hướng khi chỉ một vùng miền cụ thể"
      }
    ]
  },
  "numbers-dates": {
    "instruction": "Viết đúng định dạng số đếm, số thứ tự, phân số, thập phân, phần trăm, ngày tháng và tuổi bằng tiếng Anh chuẩn.",
    "items": [
      {
        "vi": "Tôi có hai mươi mốt quyển sách.",
        "en": "I have twenty-one books.",
        "point": "viết số đếm (cardinal) dạng chữ"
      },
      {
        "vi": "Đây là lần thứ ba tôi đến đây.",
        "en": "This is the third time I have come here.",
        "point": "số thứ tự (ordinal) 'third'"
      },
      {
        "vi": "Tôi đã ăn hết một nửa chiếc bánh.",
        "en": "I ate half of the cake.",
        "point": "cách diễn đạt phân số 'a half'"
      },
      {
        "vi": "Ba phần tư số học sinh đã đồng ý.",
        "en": "Three-quarters of the students agreed.",
        "point": "cách viết phân số 'three-quarters'"
      },
      {
        "vi": "Nhiệt độ hôm nay là ba phẩy mười bốn độ.",
        "en": "Today's temperature is three point one four degrees.",
        "point": "đọc số thập phân bằng 'point', không phải 'comma'"
      },
      {
        "vi": "Chỉ có hai mươi lăm phần trăm là đúng.",
        "en": "Only twenty-five percent is correct.",
        "point": "cách nói phần trăm 'percent'"
      },
      {
        "vi": "Cuộc họp diễn ra vào ngày 5 tháng 5 năm 2024.",
        "en": "The meeting took place on May 5th, 2024.",
        "point": "định dạng ngày tháng kiểu Anh-Mỹ (tháng trước ngày)"
      },
      {
        "vi": "Anh ấy sinh năm 1999.",
        "en": "He was born in 1999.",
        "point": "cách viết/đọc năm dạng 'nineteen ninety-nine'"
      },
      {
        "vi": "Nhạc thập niên 90 vẫn còn rất phổ biến.",
        "en": "Music from the '90s is still very popular.",
        "point": "cách viết thập kỷ rút gọn ''90s'"
      },
      {
        "vi": "Cuộc họp bắt đầu lúc bảy giờ rưỡi.",
        "en": "The meeting starts at half past seven.",
        "point": "cách nói giờ 'half past'"
      },
      {
        "vi": "Cô ấy đang ở độ tuổi hai mươi mấy.",
        "en": "She is in her twenties.",
        "point": "cách diễn đạt độ tuổi bằng số nhiều thập kỷ"
      },
      {
        "vi": "Đó là một đứa bé năm tuổi.",
        "en": "That is a five-year-old child.",
        "point": "tính từ ghép chỉ tuổi không thêm 's'"
      }
    ]
  },
  "fragments-runons": {
    "instruction": "Dịch thành câu tiếng Anh hoàn chỉnh, nối hai mệnh đề độc lập đúng cách (dấu chấm, dấu chấm phẩy, FANBOYS, hoặc mệnh đề phụ thuộc) để tránh run-on/comma splice.",
    "items": [
      {
        "vi": "Tôi đã đến. Tôi đã thấy.",
        "en": "I came. I saw.",
        "point": "tách hai mệnh đề độc lập bằng dấu chấm (tránh run-on)"
      },
      {
        "vi": "Tôi đến và tôi đã thấy điều đó.",
        "en": "I came, and I saw it.",
        "point": "nối hai mệnh đề độc lập bằng FANBOYS + dấu phẩy"
      },
      {
        "vi": "Tôi đến; tôi đã thấy điều đó.",
        "en": "I came; I saw it.",
        "point": "nối hai mệnh đề độc lập bằng dấu chấm phẩy"
      },
      {
        "vi": "Khi tôi đến, tôi đã thấy điều đó.",
        "en": "When I came, I saw it.",
        "point": "đổi một mệnh đề thành mệnh đề phụ thuộc để tránh comma splice"
      },
      {
        "vi": "Dịch vụ tốt nhất. Giá thấp nhất. Ở khắp mọi nơi.",
        "en": "Best service. Lowest price. Anywhere.",
        "point": "fragment có chủ ý trong văn quảng cáo để tạo nhịp"
      },
      {
        "vi": "Trời mưa to, nhưng chúng tôi vẫn tiếp tục ra ngoài.",
        "en": "It was raining heavily, but we still went outside.",
        "point": "nối bằng FANBOYS 'but' để tránh comma splice"
      },
      {
        "vi": "Tôi không đến kịp giờ vì tắc đường.",
        "en": "I didn't arrive on time because there was a traffic jam.",
        "point": "dùng mệnh đề phụ thuộc 'because' để tránh run-on"
      },
      {
        "vi": "Cô ấy đang đi bộ trên phố thì trời bắt đầu mưa.",
        "en": "She was walking down the street when it started to rain.",
        "point": "câu hoàn chỉnh có đủ chủ ngữ và động từ, tránh fragment"
      }
    ]
  },
  "determiner-system": {
    "instruction": "Sắp xếp đúng thứ tự pre-determiner, central determiner và post-determiner trước danh từ khi dịch.",
    "items": [
      {
        "vi": "Tất cả những người bạn cũ của tôi đều đã đến.",
        "en": "All my old friends came.",
        "point": "pre-determiner 'all' + central determiner 'my'"
      },
      {
        "vi": "Cả hai lựa chọn đó đều không ổn.",
        "en": "Both those options are not good.",
        "point": "pre-determiner 'both' + central determiner 'those'"
      },
      {
        "vi": "Đó là một câu hỏi khó đến vậy.",
        "en": "It was such a difficult question.",
        "point": "pre-determiner 'such' + mạo từ 'a'"
      },
      {
        "vi": "Câu hỏi khó đến mức tôi không trả lời được.",
        "en": "It was so difficult a question that I couldn't answer it.",
        "point": "cấu trúc trang trọng 'so + adj + a + N'"
      },
      {
        "vi": "Sách có thể thay đổi cuộc đời.",
        "en": "Books can change lives.",
        "point": "zero determiner mang nghĩa khái quát (generic)"
      },
      {
        "vi": "Những quyển sách trên bàn là của tôi.",
        "en": "The books on the table are mine.",
        "point": "'the' chỉ vật cụ thể, đã xác định"
      },
      {
        "vi": "Chúng tôi mất cả nửa ổ bánh mì rồi.",
        "en": "We lost half a loaf of bread.",
        "point": "pre-determiner 'half' + central determiner 'a'"
      },
      {
        "vi": "Cả hai câu trả lời đều đúng.",
        "en": "Both the answers are correct.",
        "point": "pre-determiner 'both' + central determiner 'the'"
      },
      {
        "vi": "Mỗi học sinh phải tự nộp bài của mình.",
        "en": "Each student must submit their own paper.",
        "point": "'each' nhìn từng cá thể riêng lẻ"
      },
      {
        "vi": "Mọi học sinh đều phải tuân theo quy định.",
        "en": "Every student must follow the rules.",
        "point": "'every' nhìn cả tập hợp như một chuỗi"
      },
      {
        "vi": "Chúng tôi đã dành hết cả thời gian vào việc đó.",
        "en": "We spent all the time on that.",
        "point": "pre-determiner + central determiner 'all the time'"
      }
    ]
  },
  "advanced-article-system": {
    "instruction": "Chọn đúng mạo từ (a/an, the, hoặc zero article) theo đúng sắc thái nghĩa (đại diện, khái quát, đã xác định, thể chế...) khi dịch.",
    "items": [
      {
        "vi": "Hổ là loài động vật nguy hiểm (nói theo kiểu một con hổ bất kỳ, đại diện cho loài).",
        "en": "A tiger is a dangerous animal.",
        "point": "'a' chỉ một ví dụ đại diện cho cả loài"
      },
      {
        "vi": "Loài hổ, xét về mặt khoa học, là loài động vật nguy hiểm.",
        "en": "The tiger is a dangerous animal.",
        "point": "'the' + danh từ số ít chỉ cả loài theo cách khái quát khoa học"
      },
      {
        "vi": "Hổ nói chung là loài nguy hiểm.",
        "en": "Tigers are dangerous animals.",
        "point": "khái quát bằng danh từ số nhiều, không mạo từ"
      },
      {
        "vi": "Tôi nhìn thấy một con chó.",
        "en": "I saw a dog.",
        "point": "'a' dùng cho lần đề cập đầu tiên"
      },
      {
        "vi": "Con chó đó bị ướt.",
        "en": "The dog was wet.",
        "point": "'the' dùng cho lần đề cập thứ hai (đã xác định)"
      },
      {
        "vi": "Mặt trời rất sáng hôm nay.",
        "en": "The sun is very bright today.",
        "point": "'the' cho vật duy nhất trong ngữ cảnh"
      },
      {
        "vi": "Con tôi đang đi học.",
        "en": "My child goes to school.",
        "point": "mạo từ zero cho địa điểm mang tính thể chế (institutional)"
      },
      {
        "vi": "Cuộc sống thật ngắn ngủi.",
        "en": "Life is short.",
        "point": "danh từ trừu tượng không mạo từ mang nghĩa khái quát"
      },
      {
        "vi": "Cuộc đời mà ông ấy đã sống thật khó khăn.",
        "en": "The life he led was difficult.",
        "point": "'the' cho trường hợp cụ thể của danh từ trừu tượng"
      },
      {
        "vi": "Hà Lan là một đất nước xinh đẹp.",
        "en": "The Netherlands is a beautiful country.",
        "point": "mạo từ 'the' bắt buộc với một số tên địa lý"
      },
      {
        "vi": "Pháp là một đất nước xinh đẹp.",
        "en": "France is a beautiful country.",
        "point": "không dùng mạo từ với hầu hết tên quốc gia"
      },
      {
        "vi": "Công lý là điều quan trọng.",
        "en": "Justice matters.",
        "point": "zero article cho danh từ trừu tượng mang nghĩa khái quát"
      }
    ]
  },
  "noun-phrase-architecture": {
    "instruction": "Xây dựng cụm danh từ tiếng Anh đầy đủ các tầng determiner, premodifier, head noun và postmodifier phù hợp.",
    "items": [
      {
        "vi": "Hiệp định thương mại quốc tế gần đây giữa hai quốc gia.",
        "en": "The recent international trade agreement between the two states.",
        "point": "cụm danh từ đầy đủ determiner + premodifier + head + postmodifier"
      },
      {
        "vi": "Đây là một vấn đề đạo đức phức tạp.",
        "en": "This is a complex ethical issue.",
        "point": "premodifier (tính từ) đứng trước head noun"
      },
      {
        "vi": "Cuộc tranh luận về chính sách ngôn ngữ.",
        "en": "The language policy debate.",
        "point": "noun classifier - danh từ bổ nghĩa cho danh từ (noun+noun)"
      },
      {
        "vi": "Người đàn ông mặc áo khoác xanh.",
        "en": "The man in the blue coat.",
        "point": "postmodifier là cụm giới từ"
      },
      {
        "vi": "Cuốn sách đã thay đổi suy nghĩ của tôi.",
        "en": "The book that changed my mind.",
        "point": "postmodifier là mệnh đề quan hệ"
      },
      {
        "vi": "Những sinh viên muốn nộp đơn.",
        "en": "Students wishing to apply.",
        "point": "postmodifier là mệnh đề không hữu hạn (non-finite clause)"
      },
      {
        "vi": "Quyết định rời đi của cô ấy khiến mọi người bất ngờ.",
        "en": "Her decision to leave surprised everyone.",
        "point": "complement hoàn chỉnh nghĩa cho noun ('decision to leave')"
      },
      {
        "vi": "Bản báo cáo bị rò rỉ hôm qua đã gây tranh cãi.",
        "en": "The report that was leaked yesterday caused controversy.",
        "point": "postmodifier là mệnh đề quan hệ bị động"
      },
      {
        "vi": "Thay vì dồn quá nhiều tính từ lên trước danh từ, ta nên đưa phần giải thích ra sau.",
        "en": "Instead of piling too many adjectives before the noun, we should move the explanation after it.",
        "point": "cân bằng premodification và postmodification"
      }
    ]
  },
  "adverb-placement-focus": {
    "instruction": "Đặt trạng từ đúng vị trí (đầu, giữa, cuối câu) để tạo đúng trọng tâm (focus) mà câu tiếng Việt muốn nhấn mạnh.",
    "items": [
      {
        "vi": "Thành thật mà nói, tôi không đồng ý.",
        "en": "Frankly, I disagree.",
        "point": "trạng từ mở đầu câu (front position) thể hiện quan điểm"
      },
      {
        "vi": "Cô ấy thường xuyên quên việc.",
        "en": "She often forgets.",
        "point": "trạng từ tần suất ở vị trí giữa câu, trước động từ thường"
      },
      {
        "vi": "Anh ấy đã rời đi rồi.",
        "en": "He has already left.",
        "point": "trạng từ đứng sau trợ động từ đầu tiên (mid position)"
      },
      {
        "vi": "Cô ấy có lẽ đã sẵn sàng.",
        "en": "She is probably ready.",
        "point": "trạng từ đứng sau động từ 'be'"
      },
      {
        "vi": "Cô ấy nói chuyện nhẹ nhàng trong hành lang hôm qua.",
        "en": "She spoke quietly in the hallway yesterday.",
        "point": "trạng từ cách thức, nơi chốn, thời gian ở cuối câu (end position)"
      },
      {
        "vi": "Chỉ có John là đã xin lỗi.",
        "en": "Only John apologized.",
        "point": "'only' đứng trước danh từ được giới hạn, thay đổi trọng tâm câu"
      },
      {
        "vi": "John chỉ xin lỗi thôi, chứ không làm gì khác.",
        "en": "John only apologized.",
        "point": "'only' đứng trước động từ, giới hạn hành động"
      },
      {
        "vi": "John chỉ xin lỗi sau cuộc họp mà thôi.",
        "en": "John apologized only after the meeting.",
        "point": "'only' giới hạn cụm trạng ngữ thời gian"
      },
      {
        "vi": "Ngay cả John cũng đã đỗ.",
        "en": "Even John passed.",
        "point": "'even' đưa yếu tố bất ngờ vào trọng tâm câu"
      },
      {
        "vi": "Tôi suýt nữa đã kể cho tất cả mọi người.",
        "en": "I almost told everyone.",
        "point": "'almost' đứng trước động từ, khác nghĩa với đứng trước tân ngữ"
      }
    ]
  },
  "advanced-adverbial-clauses": {
    "instruction": "Dùng đúng liên từ trạng ngữ nâng cao (much as, provided that, insofar as, as if, the moment, now that...) phù hợp với sắc thái câu tiếng Việt.",
    "items": [
      {
        "vi": "Dù rất ngưỡng mộ cô ấy, tôi vẫn không thể đồng ý.",
        "en": "Much as I admire her, I cannot agree.",
        "point": "mệnh đề nhượng bộ trang trọng 'much as'"
      },
      {
        "vi": "Chúng tôi sẽ ủng hộ kế hoạch với điều kiện ngân sách được sửa lại.",
        "en": "We will support the plan provided that the budget is revised.",
        "point": "mệnh đề điều kiện 'provided that'"
      },
      {
        "vi": "Bạn có thể ở lại miễn là bạn giữ yên lặng.",
        "en": "You may stay as long as you keep quiet.",
        "point": "mệnh đề điều kiện 'as long as'"
      },
      {
        "vi": "Trong chừng mực dữ liệu đáng tin cậy, lập luận này vẫn đứng vững.",
        "en": "Insofar as the data are reliable, the claim stands.",
        "point": "mệnh đề chỉ mức độ 'insofar as'"
      },
      {
        "vi": "Dù trời mưa, chúng tôi vẫn đi picnic.",
        "en": "Although it was raining, we still went on the picnic.",
        "point": "mệnh đề nhượng bộ cơ bản 'although'"
      },
      {
        "vi": "Cô ấy cư xử như thể chẳng có chuyện gì xảy ra.",
        "en": "She behaved as if nothing had happened.",
        "point": "mệnh đề cách thức/so sánh giả định 'as if'"
      },
      {
        "vi": "Ngay khi cô ấy đến, chúng ta sẽ bắt đầu.",
        "en": "The moment she arrives, we will begin.",
        "point": "mệnh đề thời gian nâng cao 'the moment'"
      },
      {
        "vi": "Giờ đây mọi người đã biết sự thật, mọi chuyện sẽ khác.",
        "en": "Now that everyone knows the truth, things will be different.",
        "point": "mệnh đề thời gian/nguyên nhân 'now that'"
      },
      {
        "vi": "Khi còn nghi ngờ, cứ hỏi.",
        "en": "When in doubt, ask.",
        "point": "rút gọn mệnh đề trạng ngữ thành cụm khi chủ ngữ trùng"
      },
      {
        "vi": "Trong khi anh trai tôi thích thể thao, tôi lại thích đọc sách.",
        "en": "Whereas my brother likes sports, I like reading.",
        "point": "mệnh đề đối chiếu 'whereas'"
      }
    ]
  },
  "noun-complement-clauses": {
    "instruction": "Dùng đúng loại mệnh đề bổ nghĩa cho danh từ trừu tượng (that-clause, whether-clause, to-infinitive, of + V-ing) và phân biệt với mệnh đề quan hệ.",
    "items": [
      {
        "vi": "Ý tưởng rằng ngữ pháp định hình tư duy thật thú vị.",
        "en": "The idea that grammar shapes thought is fascinating.",
        "point": "noun complement clause 'that' bổ sung cho danh từ trừu tượng 'idea'"
      },
      {
        "vi": "Quyết định hoãn buổi ra mắt đã gây bất ngờ.",
        "en": "The decision to postpone the launch was surprising.",
        "point": "noun complement dạng to-infinitive sau 'decision'"
      },
      {
        "vi": "Câu hỏi liệu điều này có hợp pháp hay không vẫn còn bỏ ngỏ.",
        "en": "The question whether this is legal remains open.",
        "point": "noun complement dạng 'whether-clause' sau 'question'"
      },
      {
        "vi": "Khả năng bị phớt lờ khiến cô ấy lo lắng.",
        "en": "The possibility of being ignored worried her.",
        "point": "noun complement dạng 'of + V-ing' sau 'possibility'"
      },
      {
        "vi": "Lời buộc tội rằng dữ liệu đã bị thao túng đã gây chấn động.",
        "en": "The claim that the data were manipulated caused a stir.",
        "point": "noun complement 'that' bổ sung nội dung cho 'claim'"
      },
      {
        "vi": "Lời tuyên bố khiến mọi người sốc đã bị rút lại.",
        "en": "The claim that shocked everyone was withdrawn.",
        "point": "mệnh đề quan hệ 'that' mô tả 'claim' - khác với noun complement"
      },
      {
        "vi": "Xu hướng trì hoãn công việc là vấn đề phổ biến.",
        "en": "The tendency to procrastinate is a common problem.",
        "point": "noun complement dạng to-infinitive sau 'tendency'"
      },
      {
        "vi": "Giả định rằng thị trường sẽ phục hồi là quá lạc quan.",
        "en": "The assumption that the market will recover is too optimistic.",
        "point": "noun complement 'that' sau 'assumption'"
      }
    ]
  },
  "advanced-relative-clauses": {
    "instruction": "Dùng đúng dạng mệnh đề quan hệ nâng cao (giới từ + which/whom, quantifier + of whom/which, sentential relative, rút gọn, whose cho vật) khi dịch.",
    "items": [
      {
        "vi": "Công ty mà cô ấy làm việc cho rất nổi tiếng.",
        "en": "The company for which she works is very well-known.",
        "point": "giới từ + đại từ quan hệ (trang trọng) 'for which'"
      },
      {
        "vi": "Các sinh viên, nhiều người trong số đó đã kiệt sức, đã về sớm.",
        "en": "The students, many of whom were exhausted, left early.",
        "point": "lượng từ + 'of whom'"
      },
      {
        "vi": "Anh ấy đưa ra năm đề xuất, không cái nào trong số đó được chấp nhận.",
        "en": "He submitted five proposals, none of which was accepted.",
        "point": "lượng từ + 'of which'"
      },
      {
        "vi": "Anh ấy đã từ chức, điều đó khiến mọi người bất ngờ.",
        "en": "He resigned, which surprised everyone.",
        "point": "sentential relative 'which' chỉ cả mệnh đề trước"
      },
      {
        "vi": "Những sinh viên nộp đơn muộn sẽ không được xét.",
        "en": "Students applying late will not be considered.",
        "point": "rút gọn mệnh đề quan hệ chủ động (reduced relative)"
      },
      {
        "vi": "Các tài liệu được nộp hôm qua đã bị thất lạc.",
        "en": "The documents submitted yesterday were lost.",
        "point": "rút gọn mệnh đề quan hệ bị động (reduced relative)"
      },
      {
        "vi": "Một công ty mà danh tiếng của nó bị tổn hại sẽ khó lấy lại niềm tin.",
        "en": "A company whose reputation was damaged will find it hard to regain trust.",
        "point": "'whose' dùng cho vật, không chỉ cho người"
      },
      {
        "vi": "Anh trai tôi, người hiện đang sống ở New York, sẽ về thăm.",
        "en": "My brother, who currently lives in New York, will come to visit.",
        "point": "mệnh đề quan hệ không xác định (non-restrictive), không dùng 'that'"
      },
      {
        "vi": "Cuốn sách mà tôi đang đọc rất thú vị.",
        "en": "The book that I am reading is very interesting.",
        "point": "mệnh đề quan hệ xác định (restrictive) dùng 'that'"
      }
    ]
  },
  "verb-complementation": {
    "instruction": "Chọn đúng dạng bổ ngữ sau động từ (to-V, V-ing, bare V, that-clause, O + V...) — nhất là với các cặp động từ đổi nghĩa theo dạng bổ ngữ.",
    "items": [
      {
        "vi": "Cô ấy đã hứa sẽ giúp đỡ.",
        "en": "She promised to help.",
        "point": "control verb + to-infinitive"
      },
      {
        "vi": "Dường như anh ấy biết câu trả lời.",
        "en": "He seems to know the answer.",
        "point": "raising verb 'seem' + to-infinitive"
      },
      {
        "vi": "Chúng tôi đã thuyết phục anh ấy ở lại.",
        "en": "We persuaded him to stay.",
        "point": "object control verb + object + to-infinitive"
      },
      {
        "vi": "Chúng tôi thấy anh ta băng qua đường.",
        "en": "We saw him cross the street.",
        "point": "động từ tri giác + tân ngữ + động từ nguyên mẫu không 'to'"
      },
      {
        "vi": "Tôi đã nhờ sửa lại nó cho mình.",
        "en": "I had it repaired.",
        "point": "causative + V3"
      },
      {
        "vi": "Cô ấy thừa nhận rằng mình đã sai.",
        "en": "She admitted that she was wrong.",
        "point": "động từ chỉ nhận mệnh đề 'that', không nhận to-infinitive"
      },
      {
        "vi": "Hãy nhớ khóa cửa trước khi đi.",
        "en": "Remember to lock the door before you leave.",
        "point": "'remember to do' - nhớ để làm (việc chưa xảy ra)"
      },
      {
        "vi": "Tôi nhớ đã khóa cửa rồi.",
        "en": "I remember locking the door.",
        "point": "'remember doing' - nhớ đã làm (việc đã xảy ra)"
      },
      {
        "vi": "Anh ấy dừng lại để hút thuốc.",
        "en": "He stopped to smoke.",
        "point": "'stop to do' - dừng việc đang làm để làm việc khác"
      },
      {
        "vi": "Anh ấy đã bỏ hút thuốc.",
        "en": "He stopped smoking.",
        "point": "'stop doing' - ngừng hẳn việc đang làm"
      },
      {
        "vi": "Cô ấy đề nghị chúng ta nên đi ngay.",
        "en": "She suggested that we go right away.",
        "point": "'suggest' + mệnh đề 'that', không dùng to-infinitive"
      },
      {
        "vi": "Cô ấy đề nghị đi ngay.",
        "en": "She suggested going right away.",
        "point": "'suggest' + V-ing"
      }
    ]
  },
  "clause-system": {
    "instruction": "Dịch câu bằng đúng loại mệnh đề (hữu hạn, không hữu hạn, không động từ, danh từ, quan hệ, trạng ngữ) phù hợp với vai trò của nó trong câu.",
    "items": [
      {
        "vi": "Vì anh ấy mệt nên anh ấy đã về sớm.",
        "en": "Because he was tired, he went home early.",
        "point": "mệnh đề hữu hạn (finite clause) chỉ nguyên nhân"
      },
      {
        "vi": "Để hoàn thành đúng giờ, cô ấy đã làm việc suốt đêm.",
        "en": "To finish on time, she worked all night.",
        "point": "mệnh đề không hữu hạn (non-finite clause) với 'to'"
      },
      {
        "vi": "Đã hoàn thành sớm, anh ấy quyết định nghỉ ngơi.",
        "en": "Having finished early, he decided to rest.",
        "point": "mệnh đề không hữu hạn dạng 'having + V3'"
      },
      {
        "vi": "Khi đã sẵn sàng, hãy nhấn nút bắt đầu.",
        "en": "When ready, press start.",
        "point": "mệnh đề không có động từ (verbless clause)"
      },
      {
        "vi": "Điều cô ấy nói đã khiến tôi sốc.",
        "en": "What she said shocked me.",
        "point": "mệnh đề danh từ (nominal clause) làm chủ ngữ"
      },
      {
        "vi": "Cuốn sách đã thay đổi cuộc đời tôi vẫn nằm trên kệ.",
        "en": "The book that changed my life is still on the shelf.",
        "point": "mệnh đề quan hệ mở rộng cụm danh từ"
      },
      {
        "vi": "Mặc dù anh ấy đồng ý, tôi vẫn còn nghi ngờ.",
        "en": "Although he agreed, I still had doubts.",
        "point": "mệnh đề trạng ngữ điều chỉnh cả mệnh đề chính"
      },
      {
        "vi": "Bản báo cáo mà ủy ban đã xem xét kỹ lưỡng, thứ mà ai cũng công nhận là toàn diện, đã được thông qua.",
        "en": "The report, which the committee had reviewed carefully and which everyone agreed was thorough, was approved.",
        "point": "kết hợp nhiều mệnh đề phụ thuộc mà vẫn giữ mỗi mệnh đề rõ chức năng"
      }
    ]
  },
  "advanced-agreement": {
    "instruction": "Chọn đúng động từ số ít/số nhiều theo notional agreement, collective noun, either/or, hoặc các cấu trúc số lượng đặc biệt.",
    "items": [
      {
        "vi": "Đội đang thắng.",
        "en": "The team is winning.",
        "point": "notional agreement - động từ số ít khi coi đội là một khối thống nhất"
      },
      {
        "vi": "Đội đang cãi nhau với nhau.",
        "en": "The team are arguing among themselves.",
        "point": "động từ số nhiều (kiểu Anh-Anh) khi coi các thành viên là cá thể riêng"
      },
      {
        "vi": "Hoặc là các giáo viên hoặc là hiệu trưởng phải chịu trách nhiệm.",
        "en": "Either the teachers or the principal is responsible.",
        "point": "either/or - động từ hòa theo danh từ gần nhất"
      },
      {
        "vi": "Có người đã để quên điện thoại của họ.",
        "en": "Someone left their phone.",
        "point": "singular they cho đại từ không xác định giới tính"
      },
      {
        "vi": "Mười năm là một khoảng thời gian dài.",
        "en": "Ten years is a long time.",
        "point": "khoảng thời gian được coi là một đơn vị, đi với động từ số ít"
      },
      {
        "vi": "'Chùm nho phẫn nộ' là một tác phẩm kinh điển.",
        "en": "\"The Grapes of Wrath\" is a classic.",
        "point": "tên tác phẩm/tựa đề luôn đi với động từ số ít"
      },
      {
        "vi": "Một trong những cuốn sách đã bị mất.",
        "en": "One of the books has been lost.",
        "point": "'one of + danh từ số nhiều' đi với động từ số ít"
      },
      {
        "vi": "Có khá nhiều lỗi trong bài luận này.",
        "en": "A number of mistakes are in this essay.",
        "point": "'a number of + danh từ số nhiều' đi với động từ số nhiều"
      },
      {
        "vi": "Số lượng lỗi trong bài luận này đang tăng lên.",
        "en": "The number of mistakes in this essay is increasing.",
        "point": "'the number of + danh từ số nhiều' đi với động từ số ít"
      },
      {
        "vi": "Không có đề xuất nào trong số đó được chấp nhận.",
        "en": "None of the proposals were accepted.",
        "point": "'none of + danh từ số nhiều' đi với động từ số nhiều theo văn phong hiện đại"
      },
      {
        "vi": "Ủy ban đã ra thông báo mới.",
        "en": "The committee has issued a new notice.",
        "point": "collective noun đi với động từ số ít (thiên hướng Anh-Mỹ)"
      }
    ]
  },
  "spoken-grammar": {
    "instruction": "Dịch sang tiếng Anh nói tự nhiên với ellipsis, header, tail, discourse marker hoặc tag question phù hợp với văn phong hội thoại.",
    "items": [
      {
        "vi": "Gặp John chưa?",
        "en": "Seen John?",
        "point": "tỉnh lược (ellipsis) chủ ngữ và trợ động từ trong văn nói"
      },
      {
        "vi": "Uống chút gì không?",
        "en": "Want some?",
        "point": "tỉnh lược chủ ngữ 'you' và trợ động từ 'do' trong câu hỏi"
      },
      {
        "vi": "Cuốn sách đó thì tôi chưa đọc xong.",
        "en": "That book, I haven't finished it yet.",
        "point": "header - nêu chủ đề trước rồi mới đến mệnh đề chính"
      },
      {
        "vi": "Em gái cậu dễ thương thật đấy.",
        "en": "She's lovely, your sister.",
        "point": "tail - thêm phần xác định lại chủ ngữ ở cuối câu"
      },
      {
        "vi": "Trời đẹp nhỉ?",
        "en": "Nice day, isn't it?",
        "point": "tag question trong văn nói tự nhiên"
      },
      {
        "vi": "À thì, tôi cũng không chắc lắm.",
        "en": "Well, I'm not really sure.",
        "point": "discourse marker 'well' mở đầu câu nói"
      },
      {
        "vi": "Đại loại là chúng tôi xong việc rồi, kiểu vậy.",
        "en": "We're kind of finished, sort of.",
        "point": "vague language 'kind of / sort of' trong văn nói"
      },
      {
        "vi": "Tôi định... thôi, có lẽ không.",
        "en": "I was going to... well, maybe not.",
        "point": "repair/restart - tự sửa lại lời nói giữa chừng"
      },
      {
        "vi": "Trông cũng ổn đấy đối với tôi.",
        "en": "Looks good to me.",
        "point": "tỉnh lược chủ ngữ 'It' trong câu nói thân mật"
      }
    ]
  }
};
