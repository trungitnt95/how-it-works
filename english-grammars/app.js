// ==========================================
//  ENGLISH GRAMMAR - app.js
//  Data & interactivity
// ==========================================
'use strict';

// ==========================================
//  ACCORDION
// ==========================================
function initAccordions() {
    document.querySelectorAll('.accordion-header').forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            const isOpen = item.classList.contains('open');
            // Allow multiple open
            item.classList.toggle('open', !isOpen);
        });
    });
}

// ==========================================
//  ATLAS ACTIVE HIGHLIGHT
// ==========================================
function expandAccordionTarget(target) {
    if (target && target.classList.contains('accordion-item')) {
        target.classList.add('open');
    }
}

function initAtlasScroll() {
    const buttons = Array.from(document.querySelectorAll('.atlas-btn[data-target]'));
    const targets = buttons
        .map(button => document.getElementById(button.dataset.target))
        .filter(Boolean);

    if (!targets.length) return;

    const io = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                const id = e.target.id;
                buttons.forEach(b => {
                    b.classList.toggle('active', b.dataset.target === id);
                });
            }
        });
    }, { threshold: 0.3, rootMargin: '-110px 0px -55% 0px' });

    targets.forEach(target => io.observe(target));
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            expandAccordionTarget(document.getElementById(button.dataset.target));
        });
    });
}

function openHashTarget() {
    const hash = window.location.hash.replace('#', '');
    if (!hash) return;

    expandAccordionTarget(document.getElementById(hash));
}

function normalizeText(text) {
    return String(text || '')
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/đ/g, 'd')
        .replace(/Đ/g, 'D');
}

function hydrateCefrBadges(root = document) {
    const cefr = window.englishGrammarCefr;
    if (!cefr) return;

    root.querySelectorAll('.accordion-item').forEach(item => {
        const badge = item.querySelector('.acc-badge');
        const title = item.querySelector('.acc-title');
        if (!badge || !title) return;

        const legacyLevel = badge.classList.contains('badge-basic')
            ? 'basic'
            : badge.classList.contains('badge-mid')
                ? 'mid'
                : badge.classList.contains('badge-adv')
                    ? 'adv'
                    : badge.classList.contains('badge-mem')
                        ? 'mem'
                        : 'mid';

        const meta = cefr.resolveAccordion(`${title.textContent} ${badge.textContent}`, legacyLevel, item.id);
        badge.classList.remove('badge-basic', 'badge-mid', 'badge-adv', 'badge-mem', 'badge-a1', 'badge-a2', 'badge-b1', 'badge-b2', 'badge-c1', 'badge-c2');
        badge.classList.add(meta.badgeClass);
        badge.textContent = meta.label;
        badge.title = `${meta.label} · ${meta.name}`;
        item.dataset.cefr = meta.code;
    });
}

const COMPREHENSIVE_SECTION_META = {
    foundations: { icon: '🧱', title: 'Nền tảng & từ loại' },
    tenses: { icon: '⏰', title: 'Thì, thể & động từ' },
    patterns: { icon: '🧩', title: 'Mẫu câu & mạch ý' },
    structures: { icon: '🏗️', title: 'Cấu trúc nâng cao' },
    mistakes: { icon: '⚠️', title: 'Cơ khí câu & lỗi thường gặp' },
    pronunciation: { icon: '🗣️', title: 'Phát âm & ngữ điệu' }
};

function getComprehensiveTopics() {
        if (typeof grammarComprehensiveData === 'undefined') return [];
        return Object.entries(grammarComprehensiveData).map(([id, component]) => ({ id, component }));
}

function injectMasterySection(root = document) {
        const main = root.querySelector('main');
        const atlas = root.querySelector('#atlas');
        const cefr = window.englishGrammarCefr;
        if (!main || root.querySelector('#complete-grammar-coverage')) return;

        const topics = getComprehensiveTopics()
                .map(entry => ({
                        ...entry,
                        meta: cefr ? cefr.resolveComponent(entry.id, entry.component) : { label: 'C2', badgeClass: 'badge-c2', name: 'Mastery' }
                }));

        if (!topics.length) return;

        const grouped = topics.reduce((acc, topic) => {
                const category = topic.component.category || 'structures';
                if (!acc[category]) acc[category] = [];
                acc[category].push(topic);
                return acc;
        }, {});

        const section = document.createElement('section');
        section.className = 'grammar-section';
        section.id = 'complete-grammar-coverage';
        section.innerHTML = `
                <div class="section-header">
                    <span class="section-icon">🗺️</span>
                    <h2 class="section-title">Complete Grammar Coverage</h2>
                    <span class="section-sub">Các chủ điểm bổ sung từ A1 đến C2 để phủ kín hệ thống ngữ pháp tiếng Anh</span>
                </div>
                ${Object.entries(COMPREHENSIVE_SECTION_META).map(([category, group]) => {
                        const items = grouped[category] || [];
                        if (!items.length) return '';
                        return `
                        <div class="coverage-subsection">
                            <h3>${group.icon} ${group.title}</h3>
                            ${items.map(({ id, component, meta }) => `
                                <div class="accordion-item" id="coverage-${id}">
                                    <div class="accordion-header">
                                        <span class="acc-badge ${meta.badgeClass}">${meta.label}</span>
                                        <span class="acc-title">${component.title}</span>
                                        <span class="acc-en">${meta.label} · ${meta.name}</span>
                                        <span class="acc-arrow">▼</span>
                                    </div>
                                    <div class="accordion-body"><div class="acc-content">
                                        ${component.simple || ''}
                                        ${component.detail || ''}
                                        ${component.advanced || ''}
                                    </div></div>
                                </div>
                            `).join('')}
                        </div>
                        `;
                }).join('')}
        `;

        const anchor = main.querySelector('#memory-tables');
        main.insertBefore(section, anchor || null);

        if (atlas && !atlas.querySelector('[data-target="complete-grammar-coverage"]')) {
                const link = document.createElement('a');
                link.className = 'atlas-btn special';
                link.href = '#complete-grammar-coverage';
                link.dataset.target = 'complete-grammar-coverage';
                link.textContent = '🗺️ Complete Coverage';
                const before = atlas.querySelector('[data-target="memory-tables"]');
                atlas.insertBefore(link, before || null);
        }
}

function getRoteMemoryTopics() {
        if (typeof grammarMemoryBank === 'undefined' || !Array.isArray(grammarMemoryBank)) return [];
        return grammarMemoryBank;
}

function injectRoteMemorySection(root = document) {
        const main = root.querySelector('main');
        const atlas = root.querySelector('#atlas');
        const topics = getRoteMemoryTopics();
        if (!main || !topics.length || root.querySelector('#rote-memory-bank')) return;

        const section = document.createElement('section');
        section.className = 'grammar-section';
        section.id = 'rote-memory-bank';
        section.innerHTML = `
                <div class="section-header">
                    <span class="section-icon">🧠</span>
                    <h2 class="section-title">Rote Memory Bank</h2>
                    <span class="section-sub">Những cụm, ngoại lệ và pattern không thể suy bằng một quy tắc duy nhất</span>
                </div>
                ${topics.map((group, index) => `
                    <div class="accordion-item" id="rote-memory-${index + 1}">
                        <div class="accordion-header">
                            <span class="acc-badge badge-mem">MEM</span>
                            <span class="acc-title">${group.title}</span>
                            <span class="acc-en">${group.note || 'Cần học thuộc theo cụm'}</span>
                            <span class="acc-arrow">▼</span>
                        </div>
                        <div class="accordion-body"><div class="acc-content">
                            ${group.note ? `<p>${group.note}</p>` : ''}
                            <ul>${(group.items || []).map(item => `<li>${item}</li>`).join('')}</ul>
                        </div></div>
                    </div>
                `).join('')}
        `;

        const memoryTables = main.querySelector('#memory-tables');
        const irregular = main.querySelector('#irregular');
        if (memoryTables && memoryTables.nextSibling) {
                main.insertBefore(section, memoryTables.nextSibling);
        } else {
                main.insertBefore(section, irregular || null);
        }

        if (atlas && !atlas.querySelector('[data-target="rote-memory-bank"]')) {
                const link = document.createElement('a');
                link.className = 'atlas-btn special';
                link.href = '#rote-memory-bank';
                link.dataset.target = 'rote-memory-bank';
                link.textContent = '🧠 Rote Memory';
                const before = atlas.querySelector('[data-target="ipa"]') || atlas.querySelector('[data-target="irregular"]');
                atlas.insertBefore(link, before || null);
        }
}

const MLH_USAGE_ID_MAP = {
    't-simple-present': 'present-simple',
    't-present-cont': 'present-continuous',
    't-present-perf': 'present-perfect',
    't-present-perf-cont': 'present-perfect-continuous',
    't-simple-past': 'past-simple',
    't-past-cont': 'past-continuous',
    't-past-perf': 'past-perfect',
    't-past-perf-cont': 'past-perfect-continuous',
    't-simple-future': 'future-simple',
    't-be-going-to': 'near-future',
    't-future-cont': 'future-continuous',
    't-future-perf': 'future-perfect',
    't-future-perf-cont': 'future-perfect-continuous',
    'ex-countable': 'countable-uncountable',
    'ex-quantifiers': 'quantifiers-deep',
    'ex-demonstratives': 'demonstratives-deep',
    'ex-anaphoric': 'anaphoric-reference',
    'ex-gender-neutral': 'gender-neutral-grammar',
    'ex-apposition': 'apposition',
    'ex-stative': 'stative-verbs',
    'ex-will-going': 'will-vs-going-to',
    'ex-semi-modals': 'semi-modals',
    'ex-narrative-present': 'narrative-present',
    'ex-sequence-tenses': 'sequence-of-tenses',
    'ex-yes-no': 'yes-no-questions',
    'ex-wh': 'wh-questions',
    'ex-embedded': 'embedded-questions',
    'ex-negation': 'negation-patterns',
    'ex-hedges': 'hedges-boosters',
    'ex-politeness': 'politeness-indirectness',
    'ex-info-flow': 'information-flow',
    'ex-fronting': 'fronting',
    'ex-complex-inversion': 'complex-inversion',
    'ex-do-emphasis': 'do-emphasis',
    'ex-causative-have-get': 'causative-have-get',
    'ex-archaisms': 'archaisms-modern-grammar',
    'ex-spoken-grammar': 'spoken-grammar',
    'ex-word-stress': 'word-stress',
    'ex-sentence-stress': 'sentence-stress',
    'ex-intonation': 'intonation-patterns'
};

const MLH_USAGE_TITLE_RULES = [
    [/điều kiện|conditional/i, 'conditionals'],
    [/wish|if only/i, 'wish-if-only'],
    [/mục đích|to \/ in order|so as to/i, 'infinitive-purposes'],
    [/kết quả|so … that|such … that|too … to|enough/i, 'result-structures'],
    [/can \/ could|may \/ might|must \/ have to|should|ought/i, 'modal-verbs'],
    [/bị động|passive/i, 'passive-voice'],
    [/tường thuật|reported|lùi thì/i, 'reported-speech'],
    [/quan hệ|relative/i, 'relative-clauses'],
    [/to-infinitive|v-ing|gerund/i, 'gerunds-infinitives'],
    [/make \/ let \/ have \/ help/i, 'causatives'],
    [/so sánh|comparative|superlative/i, 'comparisons'],
    [/mạo từ|a \/ an|the/i, 'articles-determiners'],
    [/giới từ|preposition|at \/ on \/ in|for \/ since/i, 'prepositions'],
    [/there is|there are/i, 'existential-there'],
    [/dummy/i, 'dummy-it'],
    [/reflexive|reciprocal/i, 'reflexive-reciprocal'],
    [/compound nouns|possessives/i, 'compound-nouns-possessives'],
    [/both \/ either|neither|all/i, 'distributives'],
    [/indefinite pronouns/i, 'indefinite-pronouns'],
    [/phrasal prepositions/i, 'phrasal-prepositions'],
    [/trật tự tính từ/i, 'adjective-order'],
    [/chính tả/i, 'spelling-rules'],
    [/tag questions/i, 'tag-questions'],
    [/discourse markers|linking words/i, 'discourse-markers'],
    [/câu cảm thán/i, 'exclamatory-sentences'],
    [/substitution|ellipsis/i, 'substitution-ellipsis'],
    [/the more/i, 'comparative-correlatives'],
    [/inversion sau negative/i, 'inversion-negative'],
    [/phrasal verbs/i, 'phrasal-verbs'],
    [/verb patterns/i, 'verb-patterns'],
    [/mixed/i, 'mixed-conditionals'],
    [/cleft/i, 'cleft-sentences'],
    [/reduced relative/i, 'reduced-relatives'],
    [/reducing adverbial/i, 'reducing-adverbial-clauses'],
    [/subjunctive/i, 'subjunctive'],
    [/academic/i, 'academic-style-grammar'],
    [/register|brE|amE/i, 'grammar-registers'],
    [/punctuation|dấu câu/i, 'punctuation-deep'],
    [/ipa overview/i, 'ipa-overview'],
    [/nguyên âm|vowels/i, 'ipa-vowels'],
    [/phụ âm|consonants/i, 'ipa-consonants'],
    [/connected speech|weak forms/i, 'connected-speech']
];

function resolveUsageIdForAccordion(item) {
    if (!item) return '';
    if (MLH_USAGE_ID_MAP[item.id]) return MLH_USAGE_ID_MAP[item.id];
    const title = item.querySelector('.acc-title')?.textContent || '';
    const subtitle = item.querySelector('.acc-en')?.textContent || '';
    const text = `${title} ${subtitle}`;
    const rule = MLH_USAGE_TITLE_RULES.find(([pattern]) => pattern.test(text));
    return rule ? rule[1] : '';
}

function mergeUsageIntoExistingAccordions(root = document) {
    if (typeof grammarUsageDeepDiveData === 'undefined' || typeof renderGrammarUsageDeepDive !== 'function') return;

    root.querySelectorAll('.accordion-item').forEach(item => {
        if (item.querySelector('.usage-deep-dive')) return;
        const usageId = resolveUsageIdForAccordion(item);
        const usage = grammarUsageDeepDiveData[usageId];
        const content = item.querySelector('.acc-content');
        if (!usage || !content) return;
        content.insertAdjacentHTML('beforeend', renderGrammarUsageDeepDive(usage));
    });
}

function filterGrammarContent(query = '') {
    const normalizedQuery = normalizeText(query.trim());
    document.querySelectorAll('.grammar-section').forEach(section => {
        const items = Array.from(section.querySelectorAll('.accordion-item'));
        if (!items.length) return;

        let visibleItems = 0;
        items.forEach(item => {
            const text = normalizeText(item.textContent);
            const matched = !normalizedQuery || text.includes(normalizedQuery);
            item.style.display = matched ? '' : 'none';
            if (matched && normalizedQuery) {
                item.classList.add('open');
            }
            if (matched) visibleItems += 1;
        });

        section.style.display = visibleItems > 0 ? '' : 'none';
    });
}

function initGrammarSearch() {
    const input = document.getElementById('mlh-search');
    const clearBtn = document.getElementById('mlh-search-clear');
    if (!input) return;

    input.addEventListener('input', () => filterGrammarContent(input.value));

    if (clearBtn) {
        clearBtn.addEventListener('click', () => {
            input.value = '';
            filterGrammarContent('');
            input.focus();
        });
    }
}

// ==========================================
//  SCROLL TO TOP
// ==========================================
function initScrollTop() {
    const btn = document.getElementById('scrollTop');
    window.addEventListener('scroll', () => {
        btn.classList.toggle('visible', window.scrollY > 400);
    });
}

// ==========================================
//  IRREGULAR VERBS  — search + filter
// ==========================================
const IRREGULAR_VERBS = [
    // A
    ["arise","arose","arisen","nảy sinh, xuất hiện"],
    ["awake","awoke","awoken","thức dậy"],
    // B
    ["be (am/is/are)","was/were","been","là, ở tại"],
    ["beat","beat","beaten","đánh, đập"],
    ["become","became","become","trở thành"],
    ["begin","began","begun","bắt đầu"],
    ["bend","bent","bent","uốn cong"],
    ["bite","bit","bitten","cắn"],
    ["bleed","bled","bled","chảy máu"],
    ["blow","blew","blown","thổi"],
    ["break","broke","broken","vỡ, gãy"],
    ["breed","bred","bred","gây giống, nuôi dưỡng"],
    ["bring","brought","brought","mang lại"],
    ["build","built","built","xây dựng"],
    ["burn","burnt/burned","burnt/burned","đốt cháy"],
    ["buy","bought","bought","mua"],
    // C
    ["catch","caught","caught","bắt, lấy"],
    ["choose","chose","chosen","chọn lựa"],
    ["come","came","come","đến"],
    ["cost","cost","cost","có giá, tốn"],
    ["cut","cut","cut","cắt"],
    // D
    ["deal","dealt","dealt","đối phó, giao dịch"],
    ["dig","dug","dug","đào"],
    ["do","did","done","làm, thực hiện"],
    ["draw","drew","drawn","vẽ, kéo"],
    ["dream","dreamt/dreamed","dreamt/dreamed","mơ"],
    ["drink","drank","drunk","uống"],
    ["drive","drove","driven","lái xe"],
    // E
    ["eat","ate","eaten","ăn"],
    // F
    ["fall","fell","fallen","ngã, rơi"],
    ["feed","fed","fed","cho ăn"],
    ["feel","felt","felt","cảm thấy"],
    ["fight","fought","fought","chiến đấu"],
    ["find","found","found","tìm thấy"],
    ["flee","fled","fled","chạy trốn"],
    ["fly","flew","flown","bay"],
    ["forbid","forbade","forbidden","cấm"],
    ["forget","forgot","forgotten","quên"],
    ["freeze","froze","frozen","đóng băng"],
    // G
    ["get","got","got/gotten","được, nhận"],
    ["give","gave","given","cho, tặng"],
    ["go","went","gone","đi"],
    ["grow","grew","grown","trồng, lớn lên"],
    // H
    ["hang","hung","hung","treo"],
    ["have","had","had","có, ăn/uống"],
    ["hear","heard","heard","nghe"],
    ["hide","hid","hidden","trốn, giấu"],
    ["hit","hit","hit","đánh, đập"],
    ["hold","held","held","giữ"],
    ["hurt","hurt","hurt","làm đau"],
    // K
    ["keep","kept","kept","giữ"],
    ["know","knew","known","biết"],
    // L
    ["lay","laid","laid","đặt, đẻ trứng"],
    ["lead","led","led","dẫn đầu, lãnh đạo"],
    ["learn","learnt/learned","learnt/learned","học"],
    ["leave","left","left","rời đi, để lại"],
    ["lend","lent","lent","cho mượn"],
    ["let","let","let","để, cho phép"],
    ["lie","lay","lain","nằm"],
    ["lose","lost","lost","mất, thua"],
    // M
    ["make","made","made","làm, tạo ra"],
    ["mean","meant","meant","có nghĩa là"],
    ["meet","met","met","gặp gỡ"],
    ["mistake","mistook","mistaken","nhầm lẫn"],
    // P
    ["pay","paid","paid","trả, thanh toán"],
    ["put","put","put","đặt, để"],
    // R
    ["read","read","read","đọc (đọc /rɛd/)"],
    ["ride","rode","ridden","cưỡi, đi"],
    ["ring","rang","rung","reo, gọi điện"],
    ["rise","rose","risen","mọc lên, tăng"],
    ["run","ran","run","chạy"],
    // S
    ["say","said","said","nói"],
    ["see","saw","seen","thấy"],
    ["seek","sought","sought","tìm kiếm"],
    ["sell","sold","sold","bán"],
    ["send","sent","sent","gửi"],
    ["set","set","set","đặt, mặt trời lặn"],
    ["shake","shook","shaken","lắc"],
    ["shoot","shot","shot","bắn"],
    ["show","showed","shown/showed","chỉ, trình bày"],
    ["shrink","shrank","shrunk","co lại"],
    ["shut","shut","shut","đóng cửa"],
    ["sing","sang","sung","hát"],
    ["sink","sank","sunk","chìm"],
    ["sit","sat","sat","ngồi"],
    ["sleep","slept","slept","ngủ"],
    ["speak","spoke","spoken","nói"],
    ["spend","spent","spent","chi tiêu, trải qua"],
    ["stand","stood","stood","đứng"],
    ["steal","stole","stolen","ăn trộm"],
    ["stick","stuck","stuck","dán, bám"],
    ["strike","struck","struck/stricken","đánh, tấn công"],
    ["swear","swore","sworn","thề, chửi"],
    ["sweep","swept","swept","quét"],
    ["swim","swam","swum","bơi"],
    // T
    ["take","took","taken","lấy, mang đi"],
    ["teach","taught","taught","dạy"],
    ["tear","tore","torn","xé"],
    ["tell","told","told","kể, bảo"],
    ["think","thought","thought","nghĩ"],
    ["throw","threw","thrown","ném"],
    // U
    ["understand","understood","understood","hiểu"],
    // W
    ["wake","woke","woken","thức dậy"],
    ["wear","wore","worn","mặc"],
    ["win","won","won","thắng"],
    ["write","wrote","written","viết"],
];

function renderIrregularVerbs(filter='') {
    const tbody = document.getElementById('irrTbody');
    if (!tbody) return;
    tbody.innerHTML = IRREGULAR_VERBS
        .filter(v => {
            if (!filter) return true;
            const q = filter.toLowerCase();
            return v[0].includes(q) || v[1].includes(q) || v[2].includes(q) || v[3].includes(q);
        })
        .map(v => `<tr>
            <td>${v[0]}</td>
            <td>${v[1]}</td>
            <td>${v[2]}</td>
            <td>${v[3]}</td>
        </tr>`).join('');
}

function initIrregularVerbs() {
    renderIrregularVerbs();
    const search = document.getElementById('irr-search');
    if (search) {
        search.addEventListener('input', () => renderIrregularVerbs(search.value.trim()));
    }
}

// ==========================================
//  INIT
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    injectMasterySection();
    injectRoteMemorySection();
    mergeUsageIntoExistingAccordions();
    hydrateCefrBadges();
    initAccordions();
    initAtlasScroll();
    initScrollTop();
    initIrregularVerbs();
    initGrammarSearch();
    openHashTarget();
});

window.addEventListener('hashchange', openHashTarget);
