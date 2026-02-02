// ==================== REGIME ROLES DATA ====================
// Định nghĩa vai trò các giai cấp/chủ thể trong mỗi chế độ
const regimeRoles = {
    'primitive-commune': {
        name: 'Công Xã Nguyên Thủy',
        icon: '🏕️',
        roles: [
            { id: 'elder', name: 'Người Già', icon: '👴', power: 30, description: 'Được kính trọng vì kinh nghiệm, truyền đạt tri thức' },
            { id: 'hunter', name: 'Thợ Săn', icon: '🏹', power: 25, description: 'Cung cấp thực phẩm, được coi trọng vì sức mạnh' },
            { id: 'gatherer', name: 'Người Hái Lượm', icon: '🧺', power: 25, description: 'Thu thập thực phẩm, thảo dược' },
            { id: 'shaman', name: 'Pháp Sư', icon: '🔮', power: 20, description: 'Kết nối thế giới tâm linh, chữa bệnh' }
        ],
        interactions: 'Tất cả bình đẳng, quyết định bằng đồng thuận'
    },
    'slavery-state': {
        name: 'Nhà Nước Chiếm Hữu Nô Lệ',
        icon: '⛓️',
        roles: [
            { id: 'pharaoh', name: 'Vua/Pharaoh', icon: '👑', power: 40, description: 'Quyền lực tối cao, được thần hóa' },
            { id: 'priest', name: 'Tăng Lữ', icon: '⛪', power: 20, description: 'Kiểm soát tôn giáo, hợp pháp hóa vua' },
            { id: 'noble', name: 'Quý Tộc/Chủ Nô', icon: '🏛️', power: 25, description: 'Sở hữu nô lệ, đất đai' },
            { id: 'soldier', name: 'Quân Đội', icon: '⚔️', power: 10, description: 'Bảo vệ và mở rộng lãnh thổ' },
            { id: 'slave', name: 'Nô Lệ', icon: '⛓️', power: 5, description: 'Không có quyền, bị coi như tài sản' }
        ],
        interactions: 'Chủ nô bóc lột nô lệ, vua kiểm soát tất cả'
    },
    'feudal-monarchy': {
        name: 'Quân Chủ Phong Kiến',
        icon: '👑',
        roles: [
            { id: 'king', name: 'Vua', icon: '👑', power: 25, description: 'Đứng đầu danh nghĩa, phụ thuộc lãnh chúa' },
            { id: 'church', name: 'Giáo Hội', icon: '⛪', power: 20, description: 'Quyền lực tinh thần, sở hữu đất đai' },
            { id: 'lord', name: 'Lãnh Chúa', icon: '🏰', power: 30, description: 'Quyền lực thực sự, có quân đội riêng' },
            { id: 'knight', name: 'Hiệp Sĩ', icon: '🛡️', power: 15, description: 'Chiến đấu đổi lấy đất' },
            { id: 'serf', name: 'Nông Nô', icon: '🌾', power: 10, description: 'Làm ruộng, bị gắn với đất' }
        ],
        interactions: 'Vua ban đất → Lãnh chúa cống nạp + quân đội. Lãnh chúa bảo vệ → Nông nô làm ruộng'
    },
    'absolute-monarchy': {
        name: 'Quân Chủ Chuyên Chế',
        icon: '🦁',
        roles: [
            { id: 'king', name: 'Vua', icon: '👑', power: 50, description: 'Quyền lực tuyệt đối, "Nhà nước là Trẫm"' },
            { id: 'court', name: 'Triều Thần', icon: '🎭', power: 15, description: 'Phục vụ vua, được ban đặc quyền' },
            { id: 'bureaucrat', name: 'Quan Liêu', icon: '📜', power: 15, description: 'Bộ máy hành chính của vua' },
            { id: 'army', name: 'Quân Đội Thường Trực', icon: '🎖️', power: 15, description: 'Quân đội của vua, không của lãnh chúa' },
            { id: 'peasant', name: 'Thường Dân', icon: '👥', power: 5, description: 'Đóng thuế, phục vụ' }
        ],
        interactions: 'Vua kiểm soát tất cả thông qua bộ máy quan liêu và quân đội'
    },
    'capitalism': {
        name: 'Chủ Nghĩa Tư Bản',
        icon: '🏭',
        roles: [
            { id: 'capitalist', name: 'Nhà Tư Bản', icon: '💰', power: 35, description: 'Sở hữu tư liệu sản xuất, thuê lao động' },
            { id: 'government', name: 'Chính Phủ', icon: '🏛️', power: 25, description: 'Bảo vệ quyền sở hữu, duy trì trật tự' },
            { id: 'worker', name: 'Công Nhân', icon: '👷', power: 15, description: 'Bán sức lao động, nhận lương' },
            { id: 'middleclass', name: 'Tầng Lớp Trung Lưu', icon: '👔', power: 15, description: 'Quản lý, chuyên gia, tiểu thương' },
            { id: 'consumer', name: 'Người Tiêu Dùng', icon: '🛒', power: 10, description: 'Mua hàng hóa, dịch vụ' }
        ],
        interactions: 'Tư bản thuê công nhân → Sản xuất hàng hóa → Bán cho người tiêu dùng → Lợi nhuận'
    },
    'socialism': {
        name: 'Chủ Nghĩa Xã Hội',
        icon: '🔴',
        roles: [
            { id: 'party', name: 'Đảng Cộng Sản', icon: '⭐', power: 40, description: 'Lãnh đạo nhà nước và xã hội' },
            { id: 'state', name: 'Nhà Nước', icon: '🏛️', power: 25, description: 'Sở hữu tư liệu sản xuất chính' },
            { id: 'worker', name: 'Công Nhân', icon: '👷', power: 20, description: 'Giai cấp lãnh đạo (lý thuyết)' },
            { id: 'peasant', name: 'Nông Dân', icon: '🌾', power: 10, description: 'Nông nghiệp tập thể hoặc hợp tác xã' },
            { id: 'intellectual', name: 'Trí Thức', icon: '📚', power: 5, description: 'Phục vụ xây dựng CNXH' }
        ],
        interactions: 'Đảng lãnh đạo → Nhà nước quản lý → Công nhân sản xuất → Phân phối theo lao động'
    },
    'democracy': {
        name: 'Dân Chủ Tự Do',
        icon: '🗳️',
        roles: [
            { id: 'citizen', name: 'Công Dân', icon: '🗳️', power: 30, description: 'Bỏ phiếu bầu cử, quyền tự do' },
            { id: 'parliament', name: 'Quốc Hội', icon: '🏛️', power: 25, description: 'Đại diện nhân dân, làm luật' },
            { id: 'executive', name: 'Chính Phủ', icon: '📋', power: 20, description: 'Thực thi pháp luật' },
            { id: 'judiciary', name: 'Tư Pháp', icon: '⚖️', power: 15, description: 'Xét xử, bảo vệ hiến pháp' },
            { id: 'media', name: 'Truyền Thông', icon: '📰', power: 10, description: 'Giám sát, thông tin' }
        ],
        interactions: 'Công dân bầu → Quốc hội làm luật → Chính phủ thực hiện → Tư pháp kiểm tra'
    },
    'authoritarianism': {
        name: 'Chế Độ Độc Tài',
        icon: '🔒',
        roles: [
            { id: 'dictator', name: 'Nhà Độc Tài', icon: '👤', power: 50, description: 'Quyền lực tập trung tuyệt đối' },
            { id: 'elite', name: 'Elite Cầm Quyền', icon: '💎', power: 20, description: 'Nhóm thân cận, hưởng lợi' },
            { id: 'military', name: 'Quân Đội/Công An', icon: '🎖️', power: 20, description: 'Đàn áp đối lập, duy trì trật tự' },
            { id: 'propaganda', name: 'Bộ Máy Tuyên Truyền', icon: '📺', power: 5, description: 'Kiểm soát thông tin' },
            { id: 'people', name: 'Nhân Dân', icon: '👥', power: 5, description: 'Bị kiểm soát, hạn chế tự do' }
        ],
        interactions: 'Độc tài kiểm soát → Elite hưởng lợi → Quân đội đàn áp → Nhân dân tuân theo'
    },
    'fascism': {
        name: 'Chủ Nghĩa Phát Xít',
        icon: '⚡',
        roles: [
            { id: 'fuhrer', name: 'Lãnh Tụ (Führer)', icon: '✋', power: 45, description: 'Quyền lực tuyệt đối, được sùng bái' },
            { id: 'party', name: 'Đảng Phát Xít', icon: '⚡', power: 20, description: 'Đảng duy nhất, kiểm soát mọi mặt' },
            { id: 'military', name: 'Quân Đội', icon: '🎖️', power: 20, description: 'Tôn vinh chiến tranh, bành trướng' },
            { id: 'capitalist', name: 'Tư Bản Lớn', icon: '🏭', power: 10, description: 'Hợp tác với chế độ' },
            { id: 'mass', name: 'Quần Chúng', icon: '👥', power: 5, description: 'Bị tuyên truyền, cuồng tín' }
        ],
        interactions: 'Lãnh tụ chỉ huy → Đảng tổ chức → Quân đội mở rộng → Quần chúng ủng hộ cuồng nhiệt'
    }
};
