// Sức Khỏe (Health) - Main App
(function () {
    'use strict';

    const SECTIONS = window.HEALTH_SECTIONS || [];
    const TOPICS = (window.HEALTH_TOPICS || []).slice();
    const IMAGES = window.HEALTH_IMAGES || {};
    const order = SECTIONS.map(s => s.id);
    TOPICS.sort((a, b) => (a.order || 0) - (b.order || 0));

    const $ = (id) => document.getElementById(id);
    const main = $('main');
    const sidebar = $('sidebar');
    const backdrop = $('backdrop');

    const DISCLAIMER = 'Nội dung nhằm mục đích giáo dục và nâng cao hiểu biết, không thay thế chẩn đoán, tư vấn hoặc điều trị của bác sĩ. ' +
        'Khi có triệu chứng bất thường, đang mang thai, đang dùng thuốc hoặc có bệnh nền, hãy hỏi ý kiến nhân viên y tế. ' +
        'Trường hợp khẩn cấp, gọi 115 ngay.';

    const esc = (s) => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
    const stripHtml = (h) => h.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ');
    const norm = (s) => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/đ/g, 'd');

    // ---------- Content rendering ----------
    function figureHtml(key, caption, usedKeys) {
        const im = IMAGES[key];
        if (!im) return '';
        usedKeys.add(key);
        const credit = `Ảnh: ${esc(im.author)} · ${esc(im.license)} · <a href="${esc(im.page)}" target="_blank" rel="noopener">Wikimedia Commons</a>`;
        return `<figure class="fig"><div class="imgwrap" data-full="${esc(im.url)}" data-cap="${esc(caption)}"><img src="${esc(im.url)}" alt="${esc(caption)}" loading="lazy" referrerpolicy="no-referrer"></div>` +
            `<figcaption>${esc(caption)}<span class="credit">${credit}</span></figcaption></figure>`;
    }

    function renderContent(html, usedKeys) {
        return html.replace(/\[\[img:([a-z0-9-]+)\|([^\]]*)\]\]/g, (_, key, cap) => figureHtml(key, cap, usedKeys));
    }

    function buildToc(container) {
        const hs = container.querySelectorAll('h2');
        if (hs.length < 3) return '';
        let li = '';
        hs.forEach((h, i) => { h.id = 'sec-' + (i + 1); li += `<li><a href="#" data-jump="sec-${i + 1}">${h.textContent}</a></li>`; });
        return `<div class="toc"><b>Nội dung bài</b><ol>${li}</ol></div>`;
    }

    // ---------- Views ----------
    function sectionOf(t) { return SECTIONS.find(s => s.id === t.section) || { title: '' }; }

    function renderNav(activeId) {
        let h = '';
        SECTIONS.forEach(s => {
            const items = TOPICS.filter(t => t.section === s.id);
            if (!items.length) return;
            h += `<div class="nav-section"><h4>${s.icon} ${esc(s.title)}</h4>`;
            items.forEach(t => {
                h += `<a class="nav-link${t.id === activeId ? ' active' : ''}" href="#/${t.id}"><span class="n">${t.order}</span><span>${esc(t.title)}</span></a>`;
            });
            h += '</div>';
        });
        sidebar.innerHTML = h;
    }

    function renderHome() {
        document.title = 'Sức Khỏe - How It Works';
        renderNav(null);
        let h = `<div class="hero"><h1>🩺 Sức Khỏe Cho Mọi Người</h1>
            <p>Kiến thức y khoa từ nền tảng đến nâng cao, viết cho người bình thường: hiểu cơ thể, biết chăm sóc bản thân, nhận ra dấu hiệu nguy hiểm, sơ cứu đúng cách và đọc hiểu kết quả khám. ${TOPICS.length} chủ đề, có hình minh họa từ Wikimedia Commons.</p></div>
            <div class="notice"><strong>Lưu ý quan trọng:</strong> ${DISCLAIMER}</div>
            <div class="emergency">
                <div class="em"><b>115</b><span>Cấp cứu y tế</span></div>
                <div class="em"><b>114</b><span>Cứu hỏa, cứu nạn cứu hộ</span></div>
                <div class="em"><b>113</b><span>Công an</span></div>
                <div class="em"><b>111</b><span>Tổng đài bảo vệ trẻ em</span></div>
            </div>`;
        SECTIONS.forEach(s => {
            const items = TOPICS.filter(t => t.section === s.id);
            if (!items.length) return;
            h += `<section class="home-section"><h2>${s.icon} ${esc(s.title)}</h2><div class="cards">`;
            items.forEach(t => {
                h += `<a class="card" href="#/${t.id}"><div class="ic">${t.icon}</div><h3>${t.order}. ${esc(t.title)}</h3><p>${esc(t.summary)}</p></a>`;
            });
            h += '</div></section>';
        });
        main.innerHTML = h;
    }

    function renderTopic(t) {
        document.title = t.title + ' - Sức Khỏe';
        renderNav(t.id);
        const used = new Set();
        const body = renderContent(t.html, used);
        const idx = TOPICS.indexOf(t);
        const prev = TOPICS[idx - 1], next = TOPICS[idx + 1];
        const sec = sectionOf(t);

        const tmp = document.createElement('div');
        tmp.innerHTML = body;
        const toc = buildToc(tmp);

        let credits = '';
        if (used.size) {
            credits = '<div class="credits"><h3>Nguồn ảnh (Wikimedia Commons)</h3><ul>' +
                [...used].map(k => { const im = IMAGES[k]; return `<li><a href="${esc(im.page)}" target="_blank" rel="noopener">${esc(im.title)}</a> — ${esc(im.author)}, ${esc(im.license)}</li>`; }).join('') +
                '</ul></div>';
        }
        const sources = (t.sources && t.sources.length)
            ? `<div class="sources"><h3>Nguồn tham khảo</h3><ul>${t.sources.map(s => `<li>${esc(s)}</li>`).join('')}</ul></div>` : '';

        main.innerHTML = `<article>
            <div class="crumb"><a href="#/">Trang chủ</a> › ${sec.icon || ''} ${esc(sec.title)}</div>
            <h1>${t.icon} ${t.order}. ${esc(t.title)}</h1>
            <p class="lead">${esc(t.summary)}</p>
            <div class="meta">Cập nhật: ${esc(t.updated || '09/2026')}</div>
            ${toc}
            <div class="content">${tmp.innerHTML}</div>
            <div class="notice"><strong>Lưu ý:</strong> ${DISCLAIMER}</div>
            ${sources}${credits}
            <div class="pager">
                ${prev ? `<a href="#/${prev.id}"><small>← Bài trước</small>${esc(prev.title)}</a>` : '<span></span>'}
                ${next ? `<a class="next" href="#/${next.id}"><small>Bài tiếp →</small>${esc(next.title)}</a>` : ''}
            </div></article>`;
    }

    const searchIndex = () => TOPICS.map(t => ({ t, text: norm([t.title, t.summary, (t.keywords || ''), stripHtml(t.html)].join(' ')) }));
    let cachedIndex = null;

    function renderSearch(q) {
        if (!cachedIndex) cachedIndex = searchIndex();
        const terms = norm(q).split(/\s+/).filter(Boolean);
        const hits = cachedIndex.filter(e => terms.every(w => e.text.includes(w)));
        let h = `<div class="results"><h2>Kết quả cho “${esc(q)}” (${hits.length})</h2>`;
        if (!hits.length) h += '<p>Không tìm thấy chủ đề phù hợp. Thử từ khóa khác, ví dụ: huyết áp, sốt, tiểu đường, sơ cứu.</p>';
        hits.forEach(({ t }) => { h += `<a class="result" href="#/${t.id}"><b>${t.icon} ${t.order}. ${esc(t.title)}</b><small>${esc(t.summary)}</small></a>`; });
        main.innerHTML = h + '</div>';
    }

    // ---------- Routing ----------
    function route() {
        closeMenu();
        const id = (location.hash.replace(/^#\/?/, '') || '').trim();
        const t = TOPICS.find(x => x.id === id);
        $('searchInput').value = '';
        if (t) renderTopic(t); else renderHome();
        window.scrollTo(0, 0);
        const active = sidebar.querySelector('.active');
        if (active) active.scrollIntoView({ block: 'center' });
    }

    function closeMenu() { sidebar.classList.remove('open'); backdrop.classList.remove('open'); }

    // ---------- Events ----------
    window.addEventListener('hashchange', route);
    $('menuBtn').addEventListener('click', () => { sidebar.classList.toggle('open'); backdrop.classList.toggle('open'); });
    backdrop.addEventListener('click', closeMenu);
    let timer;
    $('searchInput').addEventListener('input', (e) => {
        clearTimeout(timer);
        const v = e.target.value.trim();
        timer = setTimeout(() => { if (v.length >= 2) renderSearch(v); else if (!v) route(); }, 200);
    });

    // In-page TOC jump + lightbox (event delegation)
    main.addEventListener('click', (e) => {
        const jump = e.target.closest('[data-jump]');
        if (jump) { e.preventDefault(); const el = document.getElementById(jump.dataset.jump); if (el) el.scrollIntoView(); return; }
        const wrap = e.target.closest('.imgwrap');
        if (wrap) {
            $('lightboxImg').src = wrap.dataset.full;
            $('lightboxImg').alt = wrap.dataset.cap;
            $('lightboxCaption').textContent = wrap.dataset.cap;
            $('lightbox').classList.add('open');
        }
    });
    const lb = $('lightbox');
    lb.addEventListener('click', () => lb.classList.remove('open'));
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') lb.classList.remove('open'); });

    route();
})();
