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
  }
};
