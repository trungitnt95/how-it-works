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
  }
};
