// Health page of the shared concept graph; the engine lives in ../shared/graph-engine.js.
const HEALTH_AREA_ANCHORS = {
    heart: [-640, -180], metabolic: [-140, 330], organs: [470, 400], cancer: [560, -300], mind: [-30, -560], bone: [-740, 450]
};
const healthAreaOf = new Map();
healthGraphStages.filter(st => HEALTH_AREA_ANCHORS[st.id]).forEach(st =>
    st.nodes.forEach(id => { if (!healthAreaOf.has(id)) healthAreaOf.set(id, st.id); }));

KnowledgeGraph.init({
    cats: healthGraphCategories,
    types: healthGraphLinkTypes,
    stages: healthGraphStages,
    evidence: healthGraphEvidence,
    nodes: healthGraphData.nodes,
    links: healthGraphData.links,
    groupNeighbors: true,
    depth: 1,   // most nodes here are hubs (e.g. hypertension has 22 links), so start with direct neighbours only
    // ~90 nodes only read well as clusters: every node is pulled towards the medical area (entry point) it first appears in
    anchors: node => HEALTH_AREA_ANCHORS[healthAreaOf.get(node.id)],
    layout: { charge: -1500, distance: 110, linkStrength: 0.08, collide: 22, anchor: 0.16 },
    topicUrl: id => `health.html#/${encodeURIComponent(id)}`,
    text: {
        unit: 'nút',
        lesson: 'Đọc bài chi tiết →',
        facts: 'Con số cần nhớ',
        helpItems: [
            'Rê chuột (hoặc chạm) vào một nút để làm nổi các nút liên quan; nhấn để xem mô tả, con số cần nhớ và mở bài học.',
            'Mũi tên <em>A → B</em> đọc là “A [nhãn] B”. Màu và kiểu nét cho biết loại liên kết; bấm vào một loại ở bảng bên dưới để ẩn hoặc hiện.',
            '<em>Làm tăng nguy cơ</em> là liên quan thống kê, không chắc chắn sẽ xảy ra; chỉ <em>Dẫn tới</em> dùng cho cơ chế trực tiếp hoặc nguyên nhân đã biết. Dấu <em>~</em> cạnh một liên kết nghĩa là bằng chứng chủ yếu là nghiên cứu quan sát.',
            'Chọn một <em>lối vào</em> ở nút 🔍 để xem một khu vực kèm các yếu tố ăn uống, vận động, giấc ngủ tác động lên nó. <em>Độ sâu</em> giới hạn số bước quanh nút đang chọn.',
            'Kéo để di chuyển, cuộn hoặc chụm hai ngón để phóng to; <em>Đặt lại</em> để về bố cục ban đầu.'
        ],
        stageTitle: 'Lối vào',
        stageHint: 'Mỗi lối vào làm nổi một khu vực cùng các yếu tố ăn uống, vận động, giấc ngủ tác động lên nó. Chọn ở nút 🔍.',
        stageCols: ['Khu vực', 'Gồm'],
        helpFooter: `Dữ liệu cập nhật ${healthGraphUpdated}, dựa trên nội dung các bài và hướng dẫn 2025–2026 (xem nguồn trong từng bài). Hướng dẫn y khoa thay đổi theo thời gian.`
    }
});
