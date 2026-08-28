// Bất Động Sản - Main App
(function () {
    'use strict';

    const allTopics = Object.assign(
        {},
        typeof rePrinciplesData !== 'undefined' ? rePrinciplesData : {},
        typeof reValuationData !== 'undefined' ? reValuationData : {},
        typeof reLegalData !== 'undefined' ? reLegalData : {},
        typeof rePracticeData !== 'undefined' ? rePracticeData : {},
        typeof reMarketsData !== 'undefined' ? reMarketsData : {},
        typeof reCasesData !== 'undefined' ? reCasesData : {}
    );

    const diagrams = typeof reDiagrams !== 'undefined' ? reDiagrams : {};
    const tools = typeof reTools !== 'undefined' ? reTools : [];

    // Thứ tự hiển thị trong sidebar, kèm tiêu đề nhóm.
    const TABS = [
        {
            id: 'principles', icon: '🔄', label: 'Nguyên lý',
            groups: [
                { title: 'Cơ chế thị trường', ids: ['dat-khan-hiem', 'vi-tri', 'cung-cau-bds', 'cung-cham-tre', 'chu-ky-bds', 'tin-dung-gia-nha', 'don-bay', 'thanh-khoan', 'su-dung-vs-dau-co', 'lam-phat-bds', 'do-thi-hoa', 'ha-tang-quy-hoach', 'chi-phi-so-huu'] },
                { title: 'Định giá', ids: ['pp-so-sanh', 'pp-thu-nhap', 'pp-chi-phi', 'noi-dong-tien', 'cap-rate', 'price-to-income', 'rental-yield', 'tham-dinh-gia-nh'] }
            ]
        },
        {
            id: 'legal', icon: '📜', label: 'Pháp lý',
            groups: [
                { title: 'Sở hữu & giấy tờ', ids: ['so-huu-vs-su-dung', 'so-do-so-hong', 'luat-dat-dai-2024', 'thoi-han-su-dung', 'freehold-leasehold'] },
                { title: 'Giao dịch & rủi ro', ids: ['quy-hoach-thu-hoi', 'nha-hinh-thanh-tuong-lai', 'dat-coc-hop-dong', 'cong-chung-sang-ten', 'thue-phi-vn', 'tranh-chap'] }
            ]
        },
        {
            id: 'practice', icon: '🛠️', label: 'Thực chiến',
            groups: [
                { title: 'Mua nhà', ids: ['quy-trinh-mua-nha', 'checklist-phap-ly', 'xem-nha', 'dam-phan-gia', 'chi-phi-an'] },
                { title: 'Vay ngân hàng', ids: ['vay-ngan-hang', 'ltv-dti', 'lai-suat-tha-noi'] },
                { title: 'Đầu tư & bán', ids: ['phan-khuc-dau-tu', 'reit-gian-tiep', 'cho-thue-van-hanh', 'ban-nha', 'bay-lua-dao'] }
            ]
        },
        {
            id: 'markets', icon: '🌏', label: 'Thị trường',
            groups: [
                { title: '🇻🇳 Việt Nam', ids: ['vn-tong-quan', 'vn-phan-khuc', 'vn-sot-dat', 'vn-chinh-sach-tin-dung', 'vn-hn-hcm'] },
                { title: '🇺🇸 Mỹ', ids: ['us-tong-quan'] },
                { title: '🇯🇵 Nhật Bản', ids: ['jp-tong-quan', 'jp-akiya'] },
                { title: '🇨🇳 Trung Quốc', ids: ['cn-tong-quan'] },
                { title: '🇸🇬 Singapore', ids: ['sg-hdb', 'sg-absd'] },
                { title: '🇩🇪 Đức', ids: ['de-thue-nha'] },
                { title: '🇰🇷 Hàn Quốc', ids: ['kr-jeonse', 'kr-chinh-sach'] }
            ]
        },
        {
            id: 'cases', icon: '📉', label: 'Case study',
            groups: [
                { title: 'Khủng hoảng kinh điển', ids: ['jp-bubble-1991', 'us-2008', 'cn-nha-xay-do'] },
                { title: 'Việt Nam', ids: ['vn-2007-2013', 'vn-2021-2023'] },
                { title: 'Bài học rút ra', ids: ['hk-nha-o', 'mau-hinh-chung', 'tu-danh-gia'] }
            ]
        },
        { id: 'tools', icon: '🧮', label: 'Công cụ', groups: [] }
    ];

    const DEPTHS = [
        { key: 'simple', label: 'Đơn giản' },
        { key: 'detail', label: 'Chi tiết' },
        { key: 'advanced', label: 'Nâng cao' }
    ];

    const LS_TAB = 'realEstateTab';
    const LS_TOPIC = 'realEstateTopic';
    const LS_DEPTH = 'realEstateDepth';

    const state = { tab: 'principles', topic: null, depth: 'simple', filter: '' };

    const el = {};
    let mermaidReady = false;
    let mermaidSeq = 0;

    // ----- Tiện ích -----
    function store(key, value) {
        try { localStorage.setItem(key, value); } catch (e) { /* chế độ riêng tư */ }
    }
    function read(key) {
        try { return localStorage.getItem(key); } catch (e) { return null; }
    }

    // Bỏ dấu tiếng Việt để lọc không phân biệt dấu (cùng cách làm với ô tìm kiếm ở trang chủ)
    function normalize(s) {
        return String(s || '')
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/đ/g, 'd');
    }

    function tabById(id) {
        return TABS.find(t => t.id === id) || TABS[0];
    }

    function idsOfTab(tabId) {
        const tab = tabById(tabId);
        const ids = [];
        tab.groups.forEach(g => g.ids.forEach(id => { if (allTopics[id]) ids.push(id); }));
        return ids;
    }

    function tabOfTopic(topicId) {
        for (const tab of TABS) {
            for (const g of tab.groups) {
                if (g.ids.indexOf(topicId) !== -1) return tab.id;
            }
        }
        if (tools.some(t => t.id === topicId)) return 'tools';
        return null;
    }

    // Mục "Liên quan" có thể trỏ tới một chủ điểm hoặc một công cụ tính toán.
    function lookup(id) {
        if (allTopics[id]) return { icon: allTopics[id].icon, title: allTopics[id].title };
        const tool = tools.find(t => t.id === id);
        if (tool) return { icon: tool.icon, title: tool.title + ' (công cụ)' };
        return null;
    }

    // ----- Thanh tab -----
    function renderTabs() {
        el.tabBar.innerHTML = TABS.map(t => {
            const count = t.id === 'tools' ? tools.length : idsOfTab(t.id).length;
            return `<button class="re-tab${t.id === state.tab ? ' active' : ''}" data-tab="${t.id}">
                <span class="re-tab-icon">${t.icon}</span>
                <span class="re-tab-label">${t.label}</span>
                <span class="re-tab-count">${count}</span>
            </button>`;
        }).join('');
        el.tabBar.querySelectorAll('.re-tab').forEach(btn => {
            btn.addEventListener('click', () => selectTab(btn.dataset.tab));
        });
    }

    // ----- Sidebar -----
    function renderSidebar() {
        const tab = tabById(state.tab);
        const q = normalize(state.filter);

        if (state.tab === 'tools') {
            el.sidebar.innerHTML = `<div class="re-side-group"><h4>Công cụ tính toán</h4><ul>` +
                tools.map(t => `<li><button class="re-side-item${t.id === state.topic ? ' active' : ''}" data-topic="${t.id}">
                    <span class="re-side-icon">${t.icon}</span><span class="re-side-text">${t.title}</span></button></li>`).join('') +
                `</ul></div>`;
        } else {
            let html = '';
            let visible = 0;
            tab.groups.forEach(group => {
                const items = group.ids
                    .filter(id => allTopics[id])
                    .filter(id => !q || normalize(allTopics[id].title).indexOf(q) !== -1 || normalize(id).indexOf(q) !== -1);
                if (!items.length) return;
                visible += items.length;
                html += `<div class="re-side-group"><h4>${group.title}</h4><ul>` +
                    items.map(id => {
                        const c = allTopics[id];
                        return `<li><button class="re-side-item${id === state.topic ? ' active' : ''}" data-topic="${id}">
                            <span class="re-side-icon">${c.icon}</span><span class="re-side-text">${c.title}</span></button></li>`;
                    }).join('') +
                    `</ul></div>`;
            });
            el.sidebar.innerHTML = visible ? html : `<div class="re-side-empty">Không có chủ điểm nào khớp "${state.filter}"</div>`;
        }

        el.sidebar.querySelectorAll('.re-side-item').forEach(btn => {
            btn.addEventListener('click', () => selectTopic(btn.dataset.topic));
        });
    }

    // ----- Nội dung -----
    function availableDepths(topic) {
        return DEPTHS.filter(d => topic[d.key]);
    }

    function renderContent() {
        if (state.tab === 'tools') return renderTool();

        const topic = allTopics[state.topic];
        if (!topic) {
            el.content.innerHTML = `<div class="re-placeholder">
                <div class="re-placeholder-icon">🏘️</div>
                <h2>Chọn một chủ điểm ở danh sách bên trái</h2>
                <p>Mỗi chủ điểm có tối đa ba mức độ sâu: <strong>Đơn giản</strong> để nắm ý chính, <strong>Chi tiết</strong> để hiểu cơ chế, và <strong>Nâng cao</strong> cho phần phân tích kỹ hơn.</p>
            </div>`;
            return;
        }

        const depths = availableDepths(topic);
        if (!depths.some(d => d.key === state.depth)) {
            state.depth = depths.length ? depths[0].key : 'simple';
        }

        const depthBar = depths.length > 1
            ? `<div class="re-depth-tabs">` + depths.map(d =>
                `<button class="re-depth-btn${d.key === state.depth ? ' active' : ''}" data-depth="${d.key}">${d.label}</button>`
              ).join('') + `</div>`
            : '';

        const body = topic[state.depth] || topic.simple || '';

        const diagramSrc = topic.diagram && diagrams[topic.diagram];
        const diagramHtml = diagramSrc
            ? `<div class="re-diagram" id="reDiagram"><div class="re-diagram-title">📈 Sơ đồ</div><pre class="mermaid re-mermaid">${escapeHtml(diagramSrc)}</pre></div>`
            : '';

        const related = (topic.connections || []).map(id => ({ id: id, ref: lookup(id) })).filter(x => x.ref);
        const relatedHtml = related.length
            ? `<div class="re-related"><h4>📚 Liên quan</h4><div class="re-related-list">` +
              related.map(x => `<button class="re-related-btn" data-topic="${x.id}">${x.ref.icon} ${x.ref.title}</button>`).join('') +
              `</div></div>`
            : '';

        el.content.innerHTML = `
            <article class="re-article">
                <header class="re-article-head">
                    <span class="re-article-icon">${topic.icon}</span>
                    <h2>${topic.title}</h2>
                </header>
                ${depthBar}
                <div class="re-body">${body}</div>
                ${diagramHtml}
                ${relatedHtml}
            </article>`;

        el.content.querySelectorAll('.re-depth-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                state.depth = btn.dataset.depth;
                store(LS_DEPTH, state.depth);
                renderContent();
            });
        });
        el.content.querySelectorAll('.re-related-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = btn.dataset.topic;
                const tab = tabOfTopic(id);
                if (tab && tab !== state.tab) {
                    state.tab = tab;
                    store(LS_TAB, tab);
                    renderTabs();
                }
                selectTopic(id);
            });
        });

        dedupeHeading(topic.title);
        wrapTables();
        el.content.scrollTop = 0;
        runMermaid();
    }

    function renderTool() {
        const tool = tools.find(t => t.id === state.topic) || tools[0];
        if (!tool) {
            el.content.innerHTML = `<div class="re-placeholder"><p>Không tải được công cụ.</p></div>`;
            return;
        }
        state.topic = tool.id;
        el.content.innerHTML = `
            <article class="re-article">
                <header class="re-article-head">
                    <span class="re-article-icon">${tool.icon}</span>
                    <h2>${tool.title}</h2>
                </header>
                <div class="re-body"><p class="re-tool-intro">${tool.intro}</p></div>
                <div class="re-tool">${tool.html}</div>
            </article>`;
        el.content.scrollTop = 0;
        try {
            tool.init();
        } catch (e) {
            const box = el.content.querySelector('.re-tool');
            if (box) box.insertAdjacentHTML('beforeend', `<div class="warning-box">Không khởi tạo được công cụ này.</div>`);
        }
    }

    // Mức "Đơn giản" mở đầu bằng h3 trùng tiêu đề bài; bỏ đi để không hiện hai lần.
    function dedupeHeading(title) {
        const h = el.content.querySelector('.re-body > h3:first-child');
        if (!h) return;
        const strip = t => String(t).replace(/[^\p{L}\p{N}]+/gu, ' ').trim().toLowerCase();
        if (strip(h.textContent) === strip(title)) h.remove();
    }

    // Bảng rộng phải cuộn trong khung riêng, không được làm cả trang cuộn ngang.
    function wrapTables() {
        el.content.querySelectorAll('.re-body table').forEach(table => {
            if (table.parentElement && table.parentElement.classList.contains('table-scroll')) return;
            const wrap = document.createElement('div');
            wrap.className = 'table-scroll';
            table.parentNode.insertBefore(wrap, table);
            wrap.appendChild(table);
        });
    }

    function escapeHtml(s) {
        return String(s)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
    }

    // ----- Mermaid -----
    // Nội dung được chèn động nên không dùng startOnLoad; render thủ công sau mỗi lần đổi chủ điểm.
    function runMermaid() {
        const wrap = el.content.querySelector('.re-diagram');
        if (!wrap) return;
        const pre = wrap.querySelector('.re-mermaid');
        if (!pre) return;

        if (!window.mermaid || !window.mermaid.render) {
            wrap.remove();
            return;
        }
        if (!mermaidReady) {
            try {
                window.mermaid.initialize({
                    startOnLoad: false,
                    securityLevel: 'strict',
                    theme: 'dark',
                    themeVariables: {
                        background: '#141a20',
                        primaryColor: '#1d262d',
                        primaryTextColor: '#eef3f6',
                        primaryBorderColor: '#3d4a55',
                        lineColor: '#7f8f9c',
                        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                        fontSize: '14px'
                    },
                    flowchart: { curve: 'basis', htmlLabels: true, padding: 12 }
                });
                mermaidReady = true;
            } catch (e) {
                wrap.remove();
                return;
            }
        }

        const src = pre.textContent;
        const id = 're-mmd-' + (++mermaidSeq);
        Promise.resolve()
            .then(() => window.mermaid.render(id, src))
            .then(res => {
                if (!wrap.isConnected) return;
                pre.outerHTML = `<div class="re-mermaid-svg">${res.svg}</div>`;
            })
            .catch(() => { if (wrap.isConnected) wrap.remove(); });
    }

    // ----- Điều hướng -----
    function selectTab(tabId) {
        if (!tabById(tabId)) return;
        state.tab = tabId;
        store(LS_TAB, tabId);
        const ids = tabId === 'tools' ? tools.map(t => t.id) : idsOfTab(tabId);
        state.topic = ids.length ? ids[0] : null;
        state.filter = '';
        if (el.filter) el.filter.value = '';
        renderTabs();
        renderSidebar();
        renderContent();
        updateHash();
        closeMobileSidebar();
    }

    function selectTopic(topicId) {
        state.topic = topicId;
        store(LS_TOPIC, topicId);
        renderSidebar();
        renderContent();
        updateHash();
        closeMobileSidebar();
    }

    function updateHash() {
        const next = `#/${state.tab}/${state.topic || ''}`;
        if (location.hash !== next) {
            history.replaceState(null, '', next);
        }
    }

    function applyHash() {
        const m = /^#\/([a-z-]+)(?:\/([a-z0-9-]+))?$/i.exec(location.hash || '');
        if (!m) return false;
        const tabId = m[1];
        const topicId = m[2];
        if (!TABS.some(t => t.id === tabId)) return false;
        state.tab = tabId;
        const valid = tabId === 'tools' ? tools.some(t => t.id === topicId) : !!allTopics[topicId];
        const ids = tabId === 'tools' ? tools.map(t => t.id) : idsOfTab(tabId);
        state.topic = valid ? topicId : (ids[0] || null);
        return true;
    }

    // ----- Sidebar trên màn hình hẹp -----
    function openMobileSidebar() { document.body.classList.add('side-open'); }
    function closeMobileSidebar() { document.body.classList.remove('side-open'); }

    // ----- Khởi tạo -----
    function init() {
        el.tabBar = document.getElementById('reTabBar');
        el.sidebar = document.getElementById('reSidebar');
        el.content = document.getElementById('reContent');
        el.filter = document.getElementById('reFilter');
        el.sideToggle = document.getElementById('reSideToggle');
        el.backdrop = document.getElementById('reBackdrop');

        if (!el.tabBar || !el.sidebar || !el.content) return;

        const savedDepth = read(LS_DEPTH);
        if (savedDepth && DEPTHS.some(d => d.key === savedDepth)) state.depth = savedDepth;

        if (!applyHash()) {
            const savedTab = read(LS_TAB);
            if (savedTab && TABS.some(t => t.id === savedTab)) state.tab = savedTab;
            const savedTopic = read(LS_TOPIC);
            const ids = state.tab === 'tools' ? tools.map(t => t.id) : idsOfTab(state.tab);
            const savedBelongsHere = savedTopic && ids.indexOf(savedTopic) !== -1;
            state.topic = savedBelongsHere ? savedTopic : (ids[0] || null);
        }

        renderTabs();
        renderSidebar();
        renderContent();
        updateHash();

        if (el.filter) {
            el.filter.addEventListener('input', () => {
                state.filter = el.filter.value;
                renderSidebar();
            });
        }
        if (el.sideToggle) {
            el.sideToggle.addEventListener('click', () => {
                document.body.classList.toggle('side-open');
            });
        }
        if (el.backdrop) el.backdrop.addEventListener('click', closeMobileSidebar);

        window.addEventListener('hashchange', () => {
            if (applyHash()) {
                renderTabs();
                renderSidebar();
                renderContent();
            }
        });

        document.addEventListener('keydown', e => {
            if (e.key === 'Escape') closeMobileSidebar();
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
