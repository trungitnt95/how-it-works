// ==========================================
//  ENGLISH GRAMMAR - app-mlh.js
//  MLH Version init + Version Switcher
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

// ==========================================
//  SCROLL TO TOP
// ==========================================
function initScrollTop() {
    const btn = document.getElementById('scrollTop');
    if (!btn) return;
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
//  VERSION SWITCHER
// ==========================================
function initVersionSwitcher() {
    const btns = document.querySelectorAll('.ver-btn');
    const vAi  = document.getElementById('ver-ai');
    const vMlh = document.getElementById('ver-mlh');
    let mlhLoaded = false;

    const saved = localStorage.getItem('grammarVersion') || 'ai';
    switchVersion(saved);
    btns.forEach(btn => btn.addEventListener('click', () => switchVersion(btn.dataset.ver)));

    async function loadMLH() {
        if (mlhLoaded) return;
        try {
            const res  = await fetch('../english-grammars/index.html');
            const html = await res.text();
            const doc  = new DOMParser().parseFromString(html, 'text/html');
            // Remove the original script tag (app.js); we use app-mlh.js instead
            doc.body.querySelectorAll('script').forEach(s => s.remove());
            vMlh.innerHTML = doc.body.innerHTML;
            mlhLoaded = true;
            initAccordions();
            initAtlasScroll();
            initScrollTop();
            initIrregularVerbs();
            openHashTarget();
        } catch (e) {
            console.error('Failed to load MLH version:', e);
            vMlh.innerHTML = '<p style="padding:3rem;color:#f85149">Không thể tải nội dung. Vui lòng dùng HTTP server.</p>';
        }
    }

    function switchVersion(ver) {
        if (ver === 'mlh') loadMLH();
        vAi.style.display  = ver === 'ai'  ? '' : 'none';
        vMlh.style.display = ver === 'mlh' ? '' : 'none';
        btns.forEach(b => b.classList.toggle('active', b.dataset.ver === ver));
        localStorage.setItem('grammarVersion', ver);
    }
}

// ==========================================
//  INIT
// ==========================================
window.addEventListener('hashchange', openHashTarget);
document.addEventListener('DOMContentLoaded', initVersionSwitcher);
