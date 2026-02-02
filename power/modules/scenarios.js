// ==================== SCENARIOS DATA ====================
// Kịch bản theo chế độ với các bước là tác động của cá nhân/tổ chức
const scenariosData = [
    // ===== CHẾ ĐỘ PHONG KIẾN =====
    {
        id: 'feudal-daily',
        title: 'Một Ngày Trong Lãnh Địa Phong Kiến',
        icon: '🏰',
        regime: 'feudal-monarchy',
        category: 'feudal',
        description: 'Xem các giai cấp tương tác trong chế độ phong kiến',
        steps: [
            { 
                actor: { name: 'Lãnh Chúa', icon: '🏰' },
                action: 'thu tô',
                target: { name: 'Nông Nô', icon: '🌾' },
                narration: '🏰 Lãnh Chúa cử người đến thu tô từ Nông Nô - 30% thu hoạch',
                effect: 'Nông nô mất 30% thu hoạch, lãnh chúa tích lũy tài sản'
            },
            { 
                actor: { name: 'Nông Nô', icon: '🌾' },
                action: 'lao dịch',
                target: { name: 'Lãnh Chúa', icon: '🏰' },
                narration: '🌾 Nông Nô phải làm việc 3 ngày/tuần miễn phí trên đất Lãnh Chúa',
                effect: 'Lãnh chúa có lao động miễn phí, nông nô kiệt sức'
            },
            { 
                actor: { name: 'Giáo Hội', icon: '⛪' },
                action: 'thu thuế thập phân',
                target: { name: 'Nông Nô', icon: '🌾' },
                narration: '⛪ Giáo Hội thu thuế thập phân (10%) từ tất cả nông dân',
                effect: 'Giáo hội giàu có, nông dân nghèo hơn'
            },
            { 
                actor: { name: 'Lãnh Chúa', icon: '🏰' },
                action: 'cống nạp + quân đội',
                target: { name: 'Vua', icon: '👑' },
                narration: '🏰 Lãnh Chúa đóng góp quân đội và tiền cho Vua khi được triệu tập',
                effect: 'Vua có quân đội đánh trận, lãnh chúa thể hiện trung thành'
            },
            { 
                actor: { name: 'Vua', icon: '👑' },
                action: 'ban phong đất đai',
                target: { name: 'Lãnh Chúa', icon: '🏰' },
                narration: '👑 Vua ban thêm đất đai cho Lãnh Chúa có công',
                effect: 'Lãnh chúa mạnh hơn, vua có thêm người trung thành'
            }
        ]
    },
    {
        id: 'feudal-conflict',
        title: 'Xung Đột Vua - Giáo Hoàng',
        icon: '⚔️',
        regime: 'feudal-monarchy',
        category: 'feudal',
        description: 'Cuộc tranh giành quyền lực giữa thế quyền và thần quyền',
        steps: [
            { 
                actor: { name: 'Vua Henry IV', icon: '👑' },
                action: 'bổ nhiệm giám mục',
                target: { name: 'Giáo Hội', icon: '⛪' },
                narration: '👑 Vua Henry IV tự ý bổ nhiệm giám mục mà không hỏi Giáo Hoàng',
                effect: 'Vua kiểm soát giáo hội địa phương, có thêm quyền lực'
            },
            { 
                actor: { name: 'Giáo Hoàng Gregory VII', icon: '⛪' },
                action: 'rút phép thông công',
                target: { name: 'Vua Henry IV', icon: '👑' },
                narration: '⛪ Giáo Hoàng ra lệnh rút phép thông công - Vua bị khai trừ khỏi Giáo Hội!',
                effect: 'Vua mất tính hợp pháp, thần dân có quyền không tuân theo'
            },
            { 
                actor: { name: 'Lãnh Chúa Đức', icon: '🏰' },
                action: 'đe dọa nổi loạn',
                target: { name: 'Vua Henry IV', icon: '👑' },
                narration: '🏰 Các Lãnh Chúa nhân cơ hội đòi quyền lợi, đe dọa không công nhận Vua',
                effect: 'Vua bị cô lập, mất quyền lực thực tế'
            },
            { 
                actor: { name: 'Vua Henry IV', icon: '👑' },
                action: 'quỳ xin tha thứ',
                target: { name: 'Giáo Hoàng', icon: '⛪' },
                narration: '👑 Vua phải đến Canossa, quỳ 3 ngày trong tuyết xin Giáo Hoàng tha thứ (1077)',
                effect: 'Giáo Hoàng thể hiện quyền lực tối cao, vua bị sỉ nhục'
            }
        ]
    },

    // ===== CHẾ ĐỘ QUÂN CHỦ CHUYÊN CHẾ =====
    {
        id: 'absolute-france',
        title: 'Pháp Dưới Thời Louis XIV',
        icon: '🦁',
        regime: 'absolute-monarchy',
        category: 'modern',
        description: '"Nhà nước là Trẫm" - Đỉnh cao quân chủ chuyên chế',
        steps: [
            { 
                actor: { name: 'Louis XIV', icon: '👑' },
                action: 'xây Versailles',
                target: { name: 'Quý Tộc', icon: '🎭' },
                narration: '👑 Vua xây cung điện Versailles và BẮT BUỘC quý tộc phải đến sống ở đó',
                effect: 'Quý tộc rời lãnh địa, mất quyền lực địa phương, phụ thuộc vào vua'
            },
            { 
                actor: { name: 'Louis XIV', icon: '👑' },
                action: 'bổ nhiệm Intendant',
                target: { name: 'Các Tỉnh', icon: '🗺️' },
                narration: '👑 Vua cử quan liêu (Intendant) đến cai quản các tỉnh thay vì quý tộc',
                effect: 'Vua kiểm soát trực tiếp địa phương, quý tộc mất quyền'
            },
            { 
                actor: { name: 'Bộ Trưởng Colbert', icon: '📜' },
                action: 'thu thuế tập trung',
                target: { name: 'Thường Dân', icon: '👥' },
                narration: '📜 Bộ trưởng Colbert cải cách thuế - thu trực tiếp vào ngân khố hoàng gia',
                effect: 'Vua có tiền, xây quân đội thường trực'
            },
            { 
                actor: { name: 'Quân Đội Hoàng Gia', icon: '🎖️' },
                action: 'chiến tranh liên miên',
                target: { name: 'Các Nước Láng Giềng', icon: '🌍' },
                narration: '🎖️ Quân đội 400.000 người - lớn nhất châu Âu - liên tục chinh chiến',
                effect: 'Pháp bành trướng, nhưng ngân khố cạn kiệt'
            },
            { 
                actor: { name: 'Thường Dân', icon: '👥' },
                action: 'chịu thuế nặng',
                target: { name: 'Ngân Khố', icon: '💰' },
                narration: '👥 Nông dân và thị dân chịu thuế nặng nề để nuôi triều đình và quân đội',
                effect: 'Bất mãn tích tụ, gieo mầm cho cách mạng sau này'
            }
        ]
    },

    // ===== CÁCH MẠNG PHÁP =====
    {
        id: 'french-revolution',
        title: 'Cách Mạng Pháp 1789',
        icon: '🇫🇷',
        regime: 'absolute-monarchy',
        category: 'modern',
        description: 'Sự sụp đổ của quân chủ chuyên chế và khởi đầu kỷ nguyên mới',
        steps: [
            { 
                actor: { name: 'Ngân Khố Hoàng Gia', icon: '💰' },
                action: 'phá sản',
                target: { name: 'Vua Louis XVI', icon: '👑' },
                narration: '💰 Ngân khố trống rỗng sau chiến tranh. Vua phải triệu tập Hội Nghị 3 Đẳng Cấp',
                effect: 'Vua mất kiểm soát tình hình'
            },
            { 
                actor: { name: 'Đẳng Cấp Thứ Ba', icon: '👥' },
                action: 'đòi quyền',
                target: { name: 'Quý Tộc & Giáo Hội', icon: '🎭' },
                narration: '👥 Tư sản và thường dân đòi bỏ phiếu theo đầu người, không theo đẳng cấp',
                effect: '98% dân số đòi tiếng nói bình đẳng'
            },
            { 
                actor: { name: 'Quốc Hội Lập Hiến', icon: '🏛️' },
                action: 'tự tuyên bố thành lập',
                target: { name: 'Vua', icon: '👑' },
                narration: '🏛️ Đẳng cấp thứ ba tự thành lập Quốc Hội, thề không giải tán',
                effect: 'Quyền lực chuyển từ vua sang quốc hội'
            },
            { 
                actor: { name: 'Dân Paris', icon: '👥' },
                action: 'tấn công Bastille',
                target: { name: 'Chế Độ Cũ', icon: '🏰' },
                narration: '👥 Ngày 14/7/1789: Dân Paris tấn công ngục Bastille - biểu tượng chế độ cũ!',
                effect: 'Cách mạng bùng nổ, vua mất kiểm soát Paris'
            },
            { 
                actor: { name: 'Quốc Hội', icon: '🏛️' },
                action: 'bãi bỏ phong kiến',
                target: { name: 'Hệ Thống Cũ', icon: '⛓️' },
                narration: '🏛️ Quốc Hội bãi bỏ mọi đặc quyền phong kiến, tuyên bố Nhân Quyền',
                effect: 'Chế độ phong kiến sụp đổ về mặt pháp lý'
            },
            { 
                actor: { name: 'Cách Mạng', icon: '🔥' },
                action: 'xử tử',
                target: { name: 'Vua Louis XVI', icon: '👑' },
                narration: '⚔️ 1793: Vua Louis XVI bị xử tử bằng máy chém guillotine',
                effect: 'Chấm dứt 1000 năm quân chủ Pháp'
            }
        ]
    },

    // ===== CHỦ NGHĨA TƯ BẢN =====
    {
        id: 'capitalism-factory',
        title: 'Nhà Máy Thời Cách Mạng Công Nghiệp',
        icon: '🏭',
        regime: 'capitalism',
        category: 'modern',
        description: 'Quan hệ giữa tư bản và công nhân trong nhà máy',
        steps: [
            { 
                actor: { name: 'Nhà Tư Bản', icon: '💰' },
                action: 'đầu tư mở nhà máy',
                target: { name: 'Nền Kinh Tế', icon: '🏭' },
                narration: '💰 Nhà tư bản bỏ vốn mua máy móc, xây nhà máy dệt',
                effect: 'Tạo ra năng lực sản xuất mới'
            },
            { 
                actor: { name: 'Nông Dân Mất Đất', icon: '🌾' },
                action: 'di cư vào thành phố',
                target: { name: 'Nhà Máy', icon: '🏭' },
                narration: '🌾 Nông dân bị mất đất (enclosure) phải vào thành phố tìm việc',
                effect: 'Hình thành giai cấp công nhân'
            },
            { 
                actor: { name: 'Nhà Tư Bản', icon: '💰' },
                action: 'thuê với lương thấp',
                target: { name: 'Công Nhân', icon: '👷' },
                narration: '💰 Tư bản thuê công nhân 14-16 tiếng/ngày, kể cả trẻ em, lương rẻ mạt',
                effect: 'Công nhân bị bóc lột, tư bản tích lũy lợi nhuận'
            },
            { 
                actor: { name: 'Công Nhân', icon: '👷' },
                action: 'sản xuất hàng hóa',
                target: { name: 'Thị Trường', icon: '🛒' },
                narration: '👷 Công nhân vận hành máy móc, sản xuất vải với năng suất gấp 100 lần thủ công',
                effect: 'Hàng hóa dồi dào, giá rẻ hơn'
            },
            { 
                actor: { name: 'Nhà Tư Bản', icon: '💰' },
                action: 'bán và tái đầu tư',
                target: { name: 'Thị Trường', icon: '🌍' },
                narration: '💰 Bán hàng thu lợi nhuận → Tái đầu tư mở rộng → Thuê thêm công nhân',
                effect: 'Vòng xoáy tích lũy tư bản'
            },
            { 
                actor: { name: 'Công Nhân', icon: '👷' },
                action: 'đình công đòi quyền',
                target: { name: 'Nhà Tư Bản', icon: '💰' },
                narration: '👷 Công nhân tổ chức công đoàn, đình công đòi tăng lương, giảm giờ làm',
                effect: 'Mâu thuẫn giai cấp bùng phát'
            }
        ]
    },

    // ===== CHỦ NGHĨA XÃ HỘI LIÊN XÔ =====
    {
        id: 'soviet-system',
        title: 'Hệ Thống Xô Viết',
        icon: '☭',
        regime: 'socialism',
        category: 'modern',
        description: 'Cách vận hành của Liên Xô',
        steps: [
            { 
                actor: { name: 'Đảng Cộng Sản', icon: '⭐' },
                action: 'hoạch định kế hoạch 5 năm',
                target: { name: 'Nền Kinh Tế', icon: '📊' },
                narration: '⭐ Đảng đề ra kế hoạch 5 năm: Sản xuất bao nhiêu thép, lúa, máy móc...',
                effect: 'Nhà nước kiểm soát toàn bộ kinh tế'
            },
            { 
                actor: { name: 'Gosplan', icon: '📋' },
                action: 'phân bổ chỉ tiêu',
                target: { name: 'Các Nhà Máy', icon: '🏭' },
                narration: '📋 Ủy ban Kế hoạch (Gosplan) giao chỉ tiêu cho từng nhà máy quốc doanh',
                effect: 'Không có thị trường, không có cạnh tranh'
            },
            { 
                actor: { name: 'Nhà Máy Quốc Doanh', icon: '🏭' },
                action: 'sản xuất theo chỉ tiêu',
                target: { name: 'Nhà Nước', icon: '🏛️' },
                narration: '🏭 Nhà máy cố hoàn thành chỉ tiêu, đôi khi báo cáo sai để được khen',
                effect: 'Năng suất thấp, chất lượng kém, số liệu bị thổi phồng'
            },
            { 
                actor: { name: 'Nhà Nước', icon: '🏛️' },
                action: 'phân phối hàng hóa',
                target: { name: 'Nhân Dân', icon: '👥' },
                narration: '🏛️ Nhà nước phân phối hàng hóa qua tem phiếu, cửa hàng nhà nước',
                effect: 'Thiếu hàng tiêu dùng, xếp hàng dài'
            },
            { 
                actor: { name: 'KGB', icon: '🔒' },
                action: 'giám sát',
                target: { name: 'Xã Hội', icon: '👥' },
                narration: '🔒 Cơ quan an ninh KGB giám sát mọi hoạt động, đàn áp bất đồng',
                effect: 'Không có tự do ngôn luận, sợ hãi lan rộng'
            },
            { 
                actor: { name: 'Gorbachev', icon: '👤' },
                action: 'cải cách Glasnost/Perestroika',
                target: { name: 'Hệ Thống', icon: '⭐' },
                narration: '👤 1985: Gorbachev cải cách mở cửa (Glasnost) và tái cấu trúc (Perestroika)',
                effect: 'Hệ thống lung lay và sụp đổ 1991'
            }
        ]
    },

    // ===== CHẾ ĐỘ PHÁT XÍT =====
    {
        id: 'nazi-germany',
        title: 'Đức Quốc Xã',
        icon: '⚡',
        regime: 'fascism',
        category: 'modern',
        description: 'Cách Hitler và đảng Quốc Xã cai trị',
        steps: [
            { 
                actor: { name: 'Hitler', icon: '✋' },
                action: 'trở thành Thủ tướng',
                target: { name: 'Nước Đức', icon: '🇩🇪' },
                narration: '✋ 1933: Hitler được bổ nhiệm Thủ tướng một cách hợp pháp',
                effect: 'Phát xít lên nắm quyền qua bầu cử'
            },
            { 
                actor: { name: 'Đảng Quốc Xã', icon: '⚡' },
                action: 'đốt Reichstag',
                target: { name: 'Quốc Hội', icon: '🏛️' },
                narration: '⚡ Sau vụ cháy Reichstag, Hitler ban hành sắc lệnh khẩn cấp bãi bỏ quyền tự do',
                effect: 'Dân chủ bị hủy bỏ, độc tài bắt đầu'
            },
            { 
                actor: { name: 'SS & Gestapo', icon: '🔒' },
                action: 'đàn áp đối lập',
                target: { name: 'Cộng Sản, Do Thái, Đối Lập', icon: '⛓️' },
                narration: '🔒 Mật vụ Gestapo và SS bắt bớ, đưa vào trại tập trung',
                effect: 'Khủng bố nhà nước, mọi đối lập bị tiêu diệt'
            },
            { 
                actor: { name: 'Bộ Tuyên Truyền Goebbels', icon: '📺' },
                action: 'tuyên truyền',
                target: { name: 'Quần Chúng', icon: '👥' },
                narration: '📺 Radio, phim, báo chí ca ngợi Hitler, gieo rắc thù hận chủng tộc',
                effect: 'Quần chúng bị nhồi sọ, cuồng tín'
            },
            { 
                actor: { name: 'Quân Đội Đức', icon: '🎖️' },
                action: 'xâm lược',
                target: { name: 'Châu Âu', icon: '🌍' },
                narration: '🎖️ Wehrmacht xâm lược Ba Lan (1939), rồi cả châu Âu - Thế chiến II bắt đầu',
                effect: 'Chiến tranh thế giới, hàng chục triệu người chết'
            },
            { 
                actor: { name: 'Chế Độ Phát Xít', icon: '⚡' },
                action: 'Holocaust',
                target: { name: '6 Triệu Người Do Thái', icon: '✡️' },
                narration: '💀 Diệt chủng Holocaust - 6 triệu người Do Thái bị giết hại',
                effect: 'Tội ác chống loài người tàn bạo nhất lịch sử'
            }
        ]
    },

    // ===== DÂN CHỦ HIỆN ĐẠI =====
    {
        id: 'democracy-election',
        title: 'Một Chu Kỳ Bầu Cử Dân Chủ',
        icon: '🗳️',
        regime: 'democracy',
        category: 'contemporary',
        description: 'Cách quyền lực được trao và kiểm soát',
        steps: [
            { 
                actor: { name: 'Đảng Chính Trị', icon: '🏛️' },
                action: 'đề cử ứng viên',
                target: { name: 'Cử Tri', icon: '🗳️' },
                narration: '🏛️ Các đảng tổ chức bầu cử sơ bộ, chọn ứng viên tranh cử',
                effect: 'Cử tri có nhiều lựa chọn'
            },
            { 
                actor: { name: 'Ứng Viên', icon: '🎤' },
                action: 'vận động tranh cử',
                target: { name: 'Cử Tri', icon: '🗳️' },
                narration: '🎤 Ứng viên tranh luận, hứa hẹn chính sách, quyên tiền chiến dịch',
                effect: 'Cử tri được nghe nhiều quan điểm'
            },
            { 
                actor: { name: 'Truyền Thông', icon: '📰' },
                action: 'đưa tin, điều tra',
                target: { name: 'Ứng Viên', icon: '🎤' },
                narration: '📰 Báo chí điều tra, đưa tin, phơi bày scandal của các ứng viên',
                effect: 'Minh bạch thông tin, cử tri được biết sự thật'
            },
            { 
                actor: { name: 'Công Dân', icon: '🗳️' },
                action: 'bỏ phiếu',
                target: { name: 'Ứng Viên', icon: '🎤' },
                narration: '🗳️ Ngày bầu cử: Công dân đến phòng phiếu, bỏ phiếu kín',
                effect: 'Quyền lực được trao qua lá phiếu'
            },
            { 
                actor: { name: 'Chính Phủ Mới', icon: '🏛️' },
                action: 'cầm quyền',
                target: { name: 'Đất Nước', icon: '🌍' },
                narration: '🏛️ Ứng viên thắng cử nhậm chức, thành lập chính phủ',
                effect: 'Chuyển giao quyền lực hòa bình'
            },
            { 
                actor: { name: 'Phe Đối Lập & Truyền Thông', icon: '📰' },
                action: 'giám sát',
                target: { name: 'Chính Phủ', icon: '🏛️' },
                narration: '📰 Phe đối lập và báo chí theo dõi, phê phán chính phủ',
                effect: 'Quyền lực bị kiểm soát, ngăn lạm quyền'
            }
        ]
    },

    // ===== TOÀN CẦU HÓA =====
    {
        id: 'globalization-trade',
        title: 'Chuỗi Cung Ứng Toàn Cầu',
        icon: '🌐',
        regime: 'capitalism',
        category: 'contemporary',
        description: 'Ai được lợi, ai chịu thiệt trong toàn cầu hóa',
        steps: [
            { 
                actor: { name: 'Apple (Công ty Mỹ)', icon: '🍎' },
                action: 'thiết kế iPhone',
                target: { name: 'Thị Trường Toàn Cầu', icon: '🌍' },
                narration: '🍎 Apple thiết kế iPhone tại California với đội ngũ kỹ sư lương cao',
                effect: 'Giá trị gia tăng cao ở Mỹ'
            },
            { 
                actor: { name: 'Foxconn (Đài Loan)', icon: '🏭' },
                action: 'sản xuất tại Trung Quốc',
                target: { name: 'Công Nhân Trung Quốc', icon: '👷' },
                narration: '🏭 Foxconn thuê 1 triệu công nhân Trung Quốc lắp ráp với lương $2/giờ',
                effect: 'Công nhân TQ có việc làm nhưng lương thấp'
            },
            { 
                actor: { name: 'Mỏ Cobalt Congo', icon: '⛏️' },
                action: 'khai thác nguyên liệu',
                target: { name: 'Chuỗi Cung Ứng', icon: '🔗' },
                narration: '⛏️ Công nhân Congo khai thác Cobalt cho pin, kể cả lao động trẻ em',
                effect: 'Nước nghèo cung cấp nguyên liệu giá rẻ'
            },
            { 
                actor: { name: 'Apple', icon: '🍎' },
                action: 'bán iPhone $1000',
                target: { name: 'Người Tiêu Dùng', icon: '🛒' },
                narration: '🍎 iPhone giá $1000, chi phí sản xuất ~$400, lợi nhuận khổng lồ',
                effect: 'Cổ đông và lãnh đạo Apple giàu có'
            },
            { 
                actor: { name: 'Chính Phủ Các Nước', icon: '🏛️' },
                action: 'cạnh tranh thu hút đầu tư',
                target: { name: 'Công Ty Đa Quốc Gia', icon: '💰' },
                narration: '🏛️ Các nước giảm thuế, nới lỏng môi trường để thu hút nhà máy',
                effect: 'Chạy đua xuống đáy về thuế và môi trường'
            },
            { 
                actor: { name: 'Công Nhân Mỹ', icon: '👷' },
                action: 'mất việc',
                target: { name: 'Nền Kinh Tế Mỹ', icon: '🇺🇸' },
                narration: '👷 Nhà máy Mỹ đóng cửa, công nhân mất việc vì sản xuất chuyển ra nước ngoài',
                effect: 'Bất bình đẳng tăng, dân túy nổi lên'
            }
        ]
    }
];
