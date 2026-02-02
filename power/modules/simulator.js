// ==================== SIMULATOR DATA ====================
const simulatorConfig = {
    title: 'Mô phỏng cán cân quyền lực',
    description: 'Điều chỉnh các yếu tố và xem xã hội thay đổi thế nào',
    factors: [
        { id: 'ruler', name: 'Quyền lực Vua/Lãnh đạo', color: '#ffd700', value: 50 },
        { id: 'nobles', name: 'Quyền lực Quý tộc/Élite', color: '#9b59b6', value: 30 },
        { id: 'people', name: 'Quyền lực Nhân dân', color: '#3498db', value: 10 },
        { id: 'military', name: 'Sức mạnh Quân đội', color: '#e74c3c', value: 50 }
    ]
};

// ==================== TIMELINE DATA ====================
const timelineData = [
    { date: 'Trước 10.000 TCN', title: 'Công xã nguyên thủy', desc: 'Loài người sống săn bắt hái lượm, bình đẳng', category: 'primitive' },
    { date: '10.000 - 3.000 TCN', title: 'Cách mạng nông nghiệp', desc: 'Định cư, tư hữu xuất hiện, bất bình đẳng', category: 'primitive' },
    { date: '3.000 TCN', title: 'Nhà nước đầu tiên', desc: 'Ai Cập, Lưỡng Hà - chế độ nô lệ', category: 'ancient' },
    { date: '500 TCN', title: 'Dân chủ Athens', desc: 'Thí nghiệm dân chủ đầu tiên', category: 'ancient' },
    { date: '27 TCN', title: 'Đế chế La Mã', desc: 'Augustus trở thành Hoàng đế', category: 'ancient' },
    { date: '476', title: 'Sụp đổ La Mã', desc: 'Châu Âu bước vào thời Trung Cổ', category: 'feudal' },
    { date: '800', title: 'Đế chế Charlemagne', desc: 'Phong kiến châu Âu hình thành', category: 'feudal' },
    { date: '1215', title: 'Magna Carta', desc: 'Hạn chế quyền lực vua Anh', category: 'feudal' },
    { date: '1453', title: 'Constantinople thất thủ', desc: 'Kết thúc thời Trung Cổ', category: 'feudal' },
    { date: '1789', title: 'Cách mạng Pháp', desc: 'Lật đổ quân chủ chuyên chế', category: 'modern' },
    { date: '1848', title: 'Tuyên ngôn Cộng sản', desc: 'Marx và Engels', category: 'modern' },
    { date: '1917', title: 'Cách mạng Nga', desc: 'Nhà nước XHCN đầu tiên', category: 'modern' },
    { date: '1922-1945', title: 'Phát xít', desc: 'Ý, Đức, Nhật', category: 'modern' },
    { date: '1945', title: 'Kết thúc WWII', desc: 'Liên Hợp Quốc thành lập', category: 'contemporary' },
    { date: '1945-1991', title: 'Chiến tranh Lạnh', desc: 'Mỹ vs Liên Xô', category: 'contemporary' },
    { date: '1991', title: 'Liên Xô sụp đổ', desc: 'Kết thúc Chiến tranh Lạnh', category: 'contemporary' },
    { date: '2000s', title: 'Toàn cầu hóa', desc: 'Internet, thương mại toàn cầu', category: 'contemporary' }
];
