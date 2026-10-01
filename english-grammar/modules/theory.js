// Render a topic's structured theory into the single "Lý thuyết" tab.
// Every topic follows one outline so each point is taught exactly once:
//   overview → formula → tables → uses → sections → signals → compare → mistakes → advanced → tip
// Shape of component.theory (every key optional except overview):
//   overview: 'html'                              – 1–2 câu: là gì, dùng khi nào
//   formulaTitle: 'Cấu trúc'                      – đổi tiêu đề mục công thức (mặc định "Công thức")
//   formula: ['line', ...]                        – mỗi dòng một công thức
//   tables: [{ title?, head: [...], rows: [[...]], note? }]
//   uses: [['Nhãn', 'giải thích', 'Example.'], ...] – giải thích/ví dụ có thể để ''
//   sections: [{ title: '🔤 ...', items: ['...'] }] – mục riêng của chủ điểm (quy tắc chính tả, bảng phụ...)
//   signals: ['...']                              – dấu hiệu nhận biết
//   compare: [['A vs B', 'khác nhau ở đâu'], ...]
//   mistakes: [['câu sai', 'câu đúng', 'vì sao'], ...] hoặc chuỗi
//   advanced: ['...']                             – sắc thái B2+ / C1+
//   tip: 'html' | ['html', ...]
function renderGrammarTheory(t) {
    if (!t) return '';
    const list = (items, tag = 'ul', cls = '') => `<${tag}${cls ? ` class="${cls}"` : ''}>${items.map(item => `<li>${item}</li>`).join('')}</${tag}>`;
    const h3 = title => `<h3>${title}</h3>`;
    const table = tb => `
        ${tb.title ? `<h4>${tb.title}</h4>` : ''}
        <table><thead><tr>${tb.head.map(cell => `<th>${cell}</th>`).join('')}</tr></thead>
        <tbody>${tb.rows.map(row => `<tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>`).join('')}</tbody></table>
        ${tb.note ? `<p class="theory-note">${tb.note}</p>` : ''}`;
    const use = ([label, desc, example]) =>
        `<strong>${label}</strong>${desc ? ` – ${desc}` : ''}${example ? `<br><em>${example}</em>` : ''}`;
    const pair = item => Array.isArray(item) ? `<strong>${item[0]}</strong>: ${item[1]}` : item;
    const mistake = item => Array.isArray(item)
        ? `<span class="theory-wrong">✗ ${item[0]}</span> → <span class="theory-right">✓ ${item[1]}</span>${item[2] ? `<br><small>${item[2]}</small>` : ''}`
        : item;

    const out = [h3('🎯 Tổng quan'), `<p>${t.overview}</p>`];
    if (t.formula && t.formula.length) out.push(h3(`🧮 ${t.formulaTitle || 'Công thức'}`), `<div class="formula-box">${t.formula.join('<br>')}</div>`);
    (t.tables || []).forEach(tb => out.push(table(tb)));
    if (t.uses && t.uses.length) out.push(h3('🧭 Cách dùng'), list(t.uses.map(use), 'ol', 'theory-uses'));
    (t.sections || []).forEach(sec => {
        out.push(h3(sec.title));
        if (sec.items) out.push(list(sec.items.map(pair)));
        if (sec.table) out.push(table(sec.table));
    });
    if (t.signals && t.signals.length) out.push(h3('🔎 Dấu hiệu nhận biết'), list(t.signals));
    if (t.compare && t.compare.length) out.push(h3('⚖️ So sánh nhanh'), list(t.compare.map(pair)));
    if (t.mistakes && t.mistakes.length) out.push(h3('⚠️ Lỗi thường gặp'), list(t.mistakes.map(mistake), 'ul', 'theory-mistakes'));
    if (t.advanced && t.advanced.length) out.push(h3('🚀 Nâng cao'), list(t.advanced));
    if (t.tip) out.push(`<div class="tip-box"><strong>💡 Mẹo:</strong> ${[].concat(t.tip).join('<br>')}</div>`);
    return `<div class="grammar-theory">${out.join('')}</div>`;
}

// Plain text of a topic's theory, for search indexes.
function grammarTheoryText(t) {
    return renderGrammarTheory(t).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}
