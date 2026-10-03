// Render a topic's structured theory into the single "Lý thuyết" tab.
// Every topic follows one outline so each point is taught exactly once:
//   overview → formula → tables → uses → sections → signals → compare → mistakes → advanced → tip
// Shape of component.theory (every key optional except overview):
//   overview: 'html'                              – 1–2 câu: là gì, dùng khi nào
//   formula: [{ label?, pattern?, example?, note? }, ...] – mỗi hàng một công thức; pattern là công thức thuần
//                                                   (S + V + O…), example/note nằm riêng bên dưới. Chuỗi thường
//                                                   vẫn được chấp nhận và hiển thị như ghi chú.
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
    const esc = text => String(text).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    // Highlight grammar slots (S, V, O, V-ing, adj…) so the sentence frame stands out in a pattern.
    const SLOT = /(?<![\w-])(V\(s\/es\)|V-ing|V-ed|V2|V3|IO|DO|AUX|Aux|adj|adv|S|O|C|N|V)(?![\w(])/g;
    // Words never break mid-token (e.g. "adj-est"); lines wrap only at spaces.
    const pattern = text => esc(text).split(' ')
        .map(word => `<span class="nb">${word.replace(SLOT, '<span class="slot">$1</span>')}</span>`).join(' ');
    const formulaRow = row => {
        if (typeof row === 'string') return `<div class="formula-row"><div class="formula-remark">${row}</div></div>`;
        return `<div class="formula-row">
            ${row.label ? `<div class="formula-label">${row.label}</div>` : ''}
            ${row.pattern ? `<code class="formula-pattern">${pattern(row.pattern)}</code>` : ''}
            ${row.example ? `<div class="formula-example">${row.example}</div>` : ''}
            ${row.note ? `<div class="formula-remark">${row.note}</div>` : ''}
        </div>`;
    };
    const PATTERN_COLUMN = /^(Công thức|Mẫu|Cấu trúc)$/i;
    const table = tb => `
        ${tb.title ? `<h4>${tb.title}</h4>` : ''}
        <table><thead><tr>${tb.head.map(cell => `<th>${cell}</th>`).join('')}</tr></thead>
        <tbody>${tb.rows.map(row => `<tr>${row.map((cell, i) =>
            PATTERN_COLUMN.test(tb.head[i]) && !/[<&]/.test(cell)
                ? `<td><code class="formula-pattern inline">${pattern(cell)}</code></td>`
                : `<td>${cell}</td>`).join('')}</tr>`).join('')}</tbody></table>
        ${tb.note ? `<p class="theory-note">${tb.note}</p>` : ''}`;
    const use = ([label, desc, example]) =>
        `<strong>${label}</strong>${desc ? ` – ${desc}` : ''}${example ? `<br><em>${example}</em>` : ''}`;
    const pair = item => Array.isArray(item) ? `<strong>${item[0]}</strong>: ${item[1]}` : item;
    const mistake = item => Array.isArray(item)
        ? `<span class="theory-wrong">✗ ${item[0]}</span> → <span class="theory-right">✓ ${item[1]}</span>${item[2] ? `<br><small>${item[2]}</small>` : ''}`
        : item;

    const out = [h3('🎯 Tổng quan'), `<p>${t.overview}</p>`];
    if (t.formula && t.formula.length) out.push(h3('🧮 Công thức'), `<div class="formula-list">${t.formula.map(formulaRow).join('')}</div>`);
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
