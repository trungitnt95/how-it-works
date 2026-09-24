// Problem Solving - Practice engine
// 📝 Trắc nghiệm (psQuizBank) · 🎭 Tình huống nhiều bước (psCaseStudies) · ✍️ Tự luận (psExercises)
// + tab "Luyện tập" trong panel của từng concept. Tiến độ lưu qua PS.store (app.js).
const PSPractice = (() => {
    const TYPE_LABELS = { concept: '💡 Khái niệm', apply: '🧩 Áp dụng', tool: '🧰 Chọn công cụ', spot: '🚨 Nhận diện bẫy' };
    const KEYS = ['A', 'B', 'C', 'D', 'E', 'F'];
    const SCORE = {
        2: { cls: 'best', label: '✅ Tối ưu' },
        1: { cls: 'ok', label: '🟡 Tạm được' },
        0: { cls: 'bad', label: '❌ Chưa tốt' }
    };

    const P = {
        mode: 'quiz',
        cfg: { category: 'all', level: 'all', concept: 'all', type: 'all', only: 'all', count: '10' },
        quiz: null,        // { title, items: [{ id, order }], index, answers: {}, finished }
        caseRun: null,     // { id, step, picks: [], orders: [], finished }
        exerciseId: null,
        exFilter: 'all',
        exWarned: null,
        exResetArmed: false,
        resetArmed: false,
        cpOrders: {}
    };

    const quizById = {};
    const caseById = {};
    const exById = {};
    const countCache = {};
    let saveTimer = null;

    const data = () => PS.store.data;
    const concept = id => PS.concept(id) || { icon: '❔', title: id, level: 'beginner' };
    const qLevel = q => q.level || concept(q.concept).level || 'beginner';
    const qCategory = q => concept(q.concept).category;
    const choiceOrder = q => PS.shuffle(q.choices.map((_, i) => i));
    const body = () => document.getElementById('practiceBody');
    const refreshGlobal = () => { if (typeof psUpdateProgress === 'function') psUpdateProgress(); };

    // ======================= Số liệu =======================
    function countsFor(id) {
        if (!countCache[id]) {
            const quiz = psQuizBank.filter(q => q.concept === id).length;
            const exercises = psExercises.filter(e => e.concepts.includes(id)).length;
            const cases = psCaseStudies.filter(c => c.tools.includes(id)).length;
            countCache[id] = { quiz, exercises, cases, total: quiz + exercises + cases };
        }
        return countCache[id];
    }

    function getStats() {
        const quiz = data().quiz;
        const answeredQs = psQuizBank.filter(q => quiz[q.id]);
        const correct = answeredQs.filter(q => quiz[q.id].last === 1).length;
        const wrong = answeredQs.filter(q => quiz[q.id].last === 0).map(q => q.id);
        return {
            totalQuestions: psQuizBank.length,
            answered: answeredQs.length,
            correct,
            accuracy: answeredQs.length ? Math.round(correct / answeredQs.length * 100) : 0,
            wrong,
            totalCases: psCaseStudies.length,
            casesDone: psCaseStudies.filter(c => data().cases[c.id]).length,
            totalExercises: psExercises.length,
            exDone: psExercises.filter(e => (data().exercises[e.id] || {}).done).length,
            totalItems: psQuizBank.length + psCaseStudies.length + psExercises.length
        };
    }

    function recordAnswer(q, isCorrect) {
        const rec = data().quiz[q.id] || { a: 0, c: 0 };
        rec.a += 1;
        if (isCorrect) rec.c += 1;
        rec.last = isCorrect ? 1 : 0;
        rec.t = Date.now();
        data().quiz[q.id] = rec;
        PS.store.save();
        refreshGlobal();
    }

    // ======================= Khung khu luyện tập =======================
    function renderStats() {
        const st = getStats();
        const cats = Object.entries(PS_CATEGORIES).map(([cat, meta]) => {
            const qs = psQuizBank.filter(q => qCategory(q) === cat);
            const right = qs.filter(q => data().quiz[q.id] && data().quiz[q.id].last === 1).length;
            const pct = qs.length ? Math.round(right / qs.length * 100) : 0;
            return `
                <div class="mastery-row">
                    <span class="mastery-label">${meta.icon} ${meta.label}</span>
                    <div class="bar"><span style="width:${pct}%"></span></div>
                    <span class="mastery-num">${right}/${qs.length}</span>
                </div>`;
        }).join('');

        document.getElementById('practiceStats').innerHTML = `
            <div class="stat-tiles">
                <div class="stat"><span class="stat-num">${st.answered}<small>/${st.totalQuestions}</small></span><span class="stat-label">Câu trắc nghiệm đã làm</span></div>
                <div class="stat"><span class="stat-num">${st.answered ? st.accuracy + '%' : '—'}</span><span class="stat-label">Tỷ lệ đúng (lần gần nhất)</span></div>
                <div class="stat ${st.wrong.length ? 'warn' : ''}"><span class="stat-num">${st.wrong.length}</span><span class="stat-label">Câu cần ôn lại</span></div>
                <div class="stat"><span class="stat-num">${st.casesDone}<small>/${st.totalCases}</small></span><span class="stat-label">Tình huống đã làm</span></div>
                <div class="stat"><span class="stat-num">${st.exDone}<small>/${st.totalExercises}</small></span><span class="stat-label">Bài tự luận hoàn thành</span></div>
            </div>
            <details class="mastery">
                <summary>📊 Mức nắm vững theo nhóm <span class="muted">(số câu trả lời đúng ở lần gần nhất)</span></summary>
                ${cats}
                <div class="mastery-foot">
                    <button type="button" class="btn-link danger" data-act="reset-progress">${P.resetArmed ? '⚠️ Bấm lần nữa để xoá toàn bộ tiến độ luyện tập' : 'Xoá tiến độ luyện tập'}</button>
                </div>
            </details>
        `;
    }

    function renderModeMeta() {
        document.getElementById('modeQuizMeta').textContent = `${psQuizBank.length} câu`;
        document.getElementById('modeCasesMeta').textContent = `${psCaseStudies.length} tình huống`;
        document.getElementById('modeExercisesMeta').textContent = `${psExercises.length} bài`;
    }

    function syncModeButtons() {
        document.querySelectorAll('.mode-btn').forEach(b => {
            const on = b.dataset.mode === P.mode;
            b.classList.toggle('active', on);
            b.setAttribute('aria-selected', on);
        });
    }

    function setMode(mode) {
        flushExerciseAnswer();
        P.mode = mode;
        syncModeButtons();
        render();
    }

    // Đang làm bài → ẩn bớt khối thống kê trên màn hình nhỏ
    function syncSessionClass() {
        const inSession = (P.mode === 'quiz' && P.quiz && !P.quiz.finished)
            || (P.mode === 'cases' && P.caseRun && !P.caseRun.finished)
            || (P.mode === 'exercises' && !!P.exerciseId);
        document.getElementById('practiceView').classList.toggle('in-session', !!inSession);
    }

    function render() {
        const el = body();
        syncSessionClass();
        if (P.mode === 'quiz') {
            if (P.quiz && P.quiz.finished) renderQuizSummary(el);
            else if (P.quiz) renderQuizSession(el);
            else renderQuizSetup(el);
        } else if (P.mode === 'cases') {
            if (P.caseRun) renderCaseSession(el);
            else renderCaseList(el);
        } else {
            if (P.exerciseId) renderExercise(el);
            else renderExerciseList(el);
        }
    }

    // Đưa phần nội dung bài (không phải khối thống kê) lên đầu màn hình nếu đang bị cuộn qua / nằm dưới màn hình
    function scrollToPractice() {
        const topbar = document.getElementById('topbar');
        const offset = (topbar ? topbar.offsetHeight : 60) + 12;
        const target = document.getElementById('practiceView').classList.contains('in-session') ? body() : document.getElementById('practiceView');
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        const visibleTop = window.scrollY + offset;
        if (top < visibleTop - 4 || top > window.scrollY + window.innerHeight * 0.5) {
            window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
        }
    }

    // ======================= Thẻ câu hỏi (dùng chung) =======================
    function questionHtml(q, order, answered, opts = {}) {
        const c = concept(q.concept);
        const done = answered !== undefined && answered !== null;
        const isCorrect = done && answered === q.answer;
        const last = data().quiz[q.id];
        const lastTag = !done && opts.showLast && last
            ? `<span class="q-last ${last.last ? 'ok' : 'bad'}">Lần trước: ${last.last ? '✅ đúng' : '❌ sai'}</span>` : '';
        return `
            <div class="q-card ${done ? (isCorrect ? 'is-correct' : 'is-wrong') : ''}">
                <div class="q-meta">
                    ${opts.number ? `<span class="q-num">Câu ${opts.number}</span>` : ''}
                    <span class="q-type">${TYPE_LABELS[q.type] || ''}</span>
                    ${opts.compact ? '' : `<span class="q-concept">${c.icon} ${c.title}</span>`}
                    ${opts.compact ? '' : PS.levelBadge(qLevel(q))}
                    ${lastTag}
                </div>
                <div class="q-prompt">${q.q}</div>
                <div class="q-choices" role="group" aria-label="Các phương án trả lời">
                    ${order.map((orig, pos) => {
                        let cls = '';
                        if (done) cls = orig === q.answer ? 'correct' : (orig === answered ? 'wrong' : 'dim');
                        return `<button type="button" class="q-choice ${cls}" data-choice="${orig}" ${done ? 'disabled' : ''}>
                            <span class="q-key">${KEYS[pos]}</span><span class="q-text">${q.choices[orig]}</span>
                        </button>`;
                    }).join('')}
                </div>
                ${done ? `
                    <div class="q-feedback" role="status">
                        <div class="q-verdict">${isCorrect ? '✅ Chính xác!' : `❌ Chưa đúng — đáp án đúng là <strong>${KEYS[order.indexOf(q.answer)]}</strong>`}</div>
                        <div class="q-explain">${q.explain}</div>
                        ${opts.compact ? '' : `<button type="button" class="link-btn" data-open-concept="${q.concept}">📖 Xem lại lý thuyết: ${c.title}</button>`}
                    </div>` : ''}
            </div>`;
    }

    // ======================= 📝 Trắc nghiệm =======================
    function filterQuestions(cfg) {
        const quiz = data().quiz;
        return psQuizBank.filter(q => {
            if (cfg.category !== 'all' && qCategory(q) !== cfg.category) return false;
            if (cfg.level !== 'all' && qLevel(q) !== cfg.level) return false;
            if (cfg.concept !== 'all' && q.concept !== cfg.concept) return false;
            if (cfg.type !== 'all' && q.type !== cfg.type) return false;
            if (cfg.only === 'new' && quiz[q.id]) return false;
            if (cfg.only === 'wrong' && !(quiz[q.id] && quiz[q.id].last === 0)) return false;
            return true;
        });
    }

    function startQuiz(questions, title, count) {
        if (!questions.length) return;
        let picked = PS.shuffle(questions);
        const n = count === 'all' || !count ? picked.length : Math.min(parseInt(count, 10), picked.length);
        picked = picked.slice(0, n);
        P.quiz = {
            title,
            items: picked.map(q => ({ id: q.id, order: choiceOrder(q) })),
            index: 0,
            answers: {},
            finished: false
        };
        P.mode = 'quiz';
        syncModeButtons();
        render();
        scrollToPractice();
    }

    function conceptOptions(category) {
        const ids = PS.order.filter(id => (category === 'all' || PS.concept(id).category === category) && countsFor(id).quiz);
        return `<option value="all">Tất cả concept</option>` + ids.map(id => {
            const c = PS.concept(id);
            return `<option value="${id}" ${P.cfg.concept === id ? 'selected' : ''}>${c.icon} ${c.title} (${countsFor(id).quiz})</option>`;
        }).join('');
    }

    function masteryClass(id) {
        const qs = psQuizBank.filter(q => q.concept === id);
        const quiz = data().quiz;
        const done = qs.filter(q => quiz[q.id]).length;
        const right = qs.filter(q => quiz[q.id] && quiz[q.id].last === 1).length;
        if (!done) return { cls: 'm-none', text: 'Chưa làm' };
        if (right === qs.length) return { cls: 'm-full', text: `Nắm vững ${right}/${qs.length}` };
        return { cls: 'm-part', text: `Đúng ${right}/${qs.length}` };
    }

    function renderQuizSetup(el) {
        const cfg = P.cfg;
        const matched = filterQuestions(cfg).length;
        const st = getStats();
        const unanswered = psQuizBank.length - st.answered;
        const opt = (val, label, cur) => `<option value="${val}" ${cur === val ? 'selected' : ''}>${label}</option>`;

        el.innerHTML = `
            <div class="quick-starts">
                <button type="button" class="quick-btn" data-act="quick" data-quick="mixed"><span>🎲</span><strong>10 câu ngẫu nhiên</strong><small>Trộn mọi chủ đề</small></button>
                <button type="button" class="quick-btn" data-act="quick" data-quick="new" ${unanswered ? '' : 'disabled'}><span>🆕</span><strong>Câu chưa làm</strong><small>${unanswered} câu</small></button>
                <button type="button" class="quick-btn ${st.wrong.length ? 'warn' : ''}" data-act="quick" data-quick="wrong" ${st.wrong.length ? '' : 'disabled'}><span>🔁</span><strong>Ôn câu sai</strong><small>${st.wrong.length} câu</small></button>
                <button type="button" class="quick-btn" data-act="quick" data-quick="tool"><span>🧰</span><strong>Chọn công cụ</strong><small>Tình huống → công cụ nào?</small></button>
                <button type="button" class="quick-btn" data-act="quick" data-quick="spot"><span>🚨</span><strong>Nhận diện bẫy</strong><small>Đang mắc bẫy gì?</small></button>
            </div>

            <div class="setup-card">
                <h3>⚙️ Tự tạo bài kiểm tra</h3>
                <div class="setup-grid">
                    <label>Nhóm
                        <select data-cfg="category">
                            ${opt('all', 'Tất cả nhóm', cfg.category)}
                            ${Object.entries(PS_CATEGORIES).map(([k, c]) => opt(k, `${c.icon} ${c.label}`, cfg.category)).join('')}
                        </select>
                    </label>
                    <label>Concept
                        <select data-cfg="concept">${conceptOptions(cfg.category)}</select>
                    </label>
                    <label>Level
                        <select data-cfg="level">
                            ${opt('all', 'Mọi level', cfg.level)}
                            ${Object.entries(PS_LEVELS).map(([k, l]) => opt(k, `${l.icon} ${l.label}`, cfg.level)).join('')}
                        </select>
                    </label>
                    <label>Dạng câu
                        <select data-cfg="type">
                            ${opt('all', 'Mọi dạng', cfg.type)}
                            ${Object.entries(TYPE_LABELS).map(([k, l]) => opt(k, l, cfg.type)).join('')}
                        </select>
                    </label>
                    <label>Chọn câu
                        <select data-cfg="only">
                            ${opt('all', 'Tất cả', cfg.only)}
                            ${opt('new', 'Chỉ câu chưa làm', cfg.only)}
                            ${opt('wrong', 'Chỉ câu làm sai', cfg.only)}
                        </select>
                    </label>
                    <label>Số câu
                        <select data-cfg="count">
                            ${opt('5', '5 câu', cfg.count)}${opt('10', '10 câu', cfg.count)}${opt('20', '20 câu', cfg.count)}${opt('all', 'Tất cả', cfg.count)}
                        </select>
                    </label>
                </div>
                <div class="setup-foot">
                    <span class="${matched ? '' : 'warn-text'}">${matched ? `Có <strong>${matched}</strong> câu phù hợp` : 'Không có câu nào phù hợp — hãy nới bộ lọc'}</span>
                    <button type="button" class="btn-primary" data-act="start-quiz" ${matched ? '' : 'disabled'}>Bắt đầu →</button>
                </div>
            </div>

            <div class="mastery-map">
                <h3>🗺️ Bản đồ nắm vững theo concept</h3>
                <p class="muted">Bấm vào một concept để làm toàn bộ câu hỏi của nó. <span class="legend"><i class="m-none"></i>Chưa làm <i class="m-part"></i>Chưa vững <i class="m-full"></i>Nắm vững</span></p>
                ${Object.entries(PS_CATEGORIES).map(([cat, meta]) => `
                    <div class="mm-group">
                        <div class="mm-head">${meta.icon} ${meta.label}</div>
                        <div class="chip-row">
                            ${PS.order.filter(id => PS.concept(id).category === cat && countsFor(id).quiz).map(id => {
                                const m = masteryClass(id);
                                const c = PS.concept(id);
                                return `<button type="button" class="mm-chip ${m.cls}" data-act="quiz-concept" data-id="${id}" title="${m.text}">${c.icon} ${c.title}</button>`;
                            }).join('')}
                        </div>
                    </div>`).join('')}
            </div>
        `;
    }

    function renderQuizSession(el) {
        const s = P.quiz;
        const item = s.items[s.index];
        const q = quizById[item.id];
        const answered = s.answers[s.index];
        const answeredCount = Object.keys(s.answers).length;
        const correctCount = Object.entries(s.answers).filter(([i, a]) => a === quizById[s.items[i].id].answer).length;
        const isLast = s.index === s.items.length - 1;

        el.innerHTML = `
            <div class="session">
                <div class="session-top">
                    <button type="button" class="btn-ghost" data-act="quiz-quit">← Thoát</button>
                    <div class="session-progress">
                        <div class="bar"><span style="width:${answeredCount / s.items.length * 100}%"></span></div>
                        <span>Câu ${s.index + 1}/${s.items.length} · Đúng ${correctCount}/${answeredCount}</span>
                    </div>
                </div>
                <div class="session-title">${s.title}</div>
                ${questionHtml(q, item.order, answered, { number: s.index + 1 })}
                <div class="session-nav">
                    <button type="button" class="btn-ghost" data-act="quiz-prev" ${s.index === 0 ? 'disabled' : ''}>← Trước</button>
                    <div class="dots" aria-label="Danh sách câu">
                        ${s.items.map((it, i) => {
                            const a = s.answers[i];
                            let cls = a === undefined ? '' : (a === quizById[it.id].answer ? 'ok' : 'bad');
                            if (i === s.index) cls += ' current';
                            return `<button type="button" class="dot ${cls}" data-act="quiz-goto" data-i="${i}" aria-label="Câu ${i + 1}"></button>`;
                        }).join('')}
                    </div>
                    ${isLast
                        ? `<button type="button" class="btn-primary" data-act="quiz-finish">Xem kết quả</button>`
                        : `<button type="button" class="btn-primary" data-act="quiz-next">${answered === undefined ? 'Bỏ qua →' : 'Tiếp →'}</button>`}
                </div>
                <p class="kbd-hint">Phím tắt: <kbd>1</kbd>–<kbd>4</kbd> chọn đáp án · <kbd>Enter</kbd> câu tiếp · <kbd>←</kbd> câu trước</p>
            </div>
        `;
    }

    function answerQuiz(choice) {
        const s = P.quiz;
        if (!s || s.finished || s.answers[s.index] !== undefined) return;
        const q = quizById[s.items[s.index].id];
        s.answers[s.index] = choice;
        recordAnswer(q, choice === q.answer);
        renderStats();
        renderQuizSession(body());
    }

    function quizGo(i) {
        const s = P.quiz;
        if (!s) return;
        s.index = Math.max(0, Math.min(s.items.length - 1, i));
        renderQuizSession(body());
    }

    function quizNext() {
        const s = P.quiz;
        if (!s) return;
        if (s.index < s.items.length - 1) quizGo(s.index + 1);
        else finishQuiz();
    }

    function finishQuiz() {
        if (!P.quiz) return;
        P.quiz.finished = true;
        syncSessionClass();
        renderQuizSummary(body());
        scrollToPractice();
    }

    function renderQuizSummary(el) {
        const s = P.quiz;
        const total = s.items.length;
        let correct = 0, skipped = 0;
        const wrongItems = [];
        const byCat = {};
        s.items.forEach((it, i) => {
            const q = quizById[it.id];
            const a = s.answers[i];
            const cat = qCategory(q);
            byCat[cat] = byCat[cat] || { total: 0, correct: 0 };
            byCat[cat].total++;
            if (a === undefined) { skipped++; wrongItems.push({ q, a, order: it.order }); return; }
            if (a === q.answer) { correct++; byCat[cat].correct++; }
            else wrongItems.push({ q, a, order: it.order });
        });
        const pct = Math.round(correct / total * 100);
        const msg = pct >= 90 ? '🏆 Xuất sắc! Bạn nắm rất chắc phần này.'
            : pct >= 70 ? '👍 Tốt! Xem lại vài câu sai là vững.'
            : pct >= 50 ? '📚 Khá — nên đọc lại lý thuyết các concept còn yếu.'
            : '🌱 Mới bắt đầu — hãy đọc lý thuyết rồi làm lại nhé.';

        el.innerHTML = `
            <div class="session summary">
                <div class="summary-hero">
                    <div class="score-ring" style="--p:${pct}"><span>${pct}%</span></div>
                    <div>
                        <h3>${correct}/${total} câu đúng</h3>
                        <p>${msg}</p>
                        ${skipped ? `<p class="muted">Bỏ qua ${skipped} câu.</p>` : ''}
                    </div>
                </div>
                <div class="breakdown">
                    ${Object.entries(byCat).map(([cat, v]) => `
                        <div class="mastery-row">
                            <span class="mastery-label">${PS_CATEGORIES[cat].icon} ${PS_CATEGORIES[cat].label}</span>
                            <div class="bar"><span style="width:${v.correct / v.total * 100}%"></span></div>
                            <span class="mastery-num">${v.correct}/${v.total}</span>
                        </div>`).join('')}
                </div>
                ${wrongItems.length ? `
                    <h4>🔍 Câu cần xem lại</h4>
                    <ul class="review-list">
                        ${wrongItems.map(({ q, a, order }) => {
                            const text = PS.stripTags(q.q);
                            const short = text.length > 150 ? text.slice(0, 147) + '…' : text;
                            return `
                                <li>
                                    <p>${PS.escape(short)}</p>
                                    <div class="review-meta">
                                        ${a === undefined ? '<span class="tag bad">Bỏ qua</span>' : `<span class="tag bad">Bạn chọn ${KEYS[order.indexOf(a)]}</span>`}
                                        <span class="tag ok">Đúng: ${PS.escape(PS.stripTags(q.choices[q.answer]))}</span>
                                        ${PS.conceptChip(q.concept)}
                                    </div>
                                </li>`;
                        }).join('')}
                    </ul>` : '<p class="all-right">🎉 Không có câu sai nào!</p>'}
                <div class="summary-actions">
                    ${wrongItems.length ? '<button type="button" class="btn-primary" data-act="quiz-redo-wrong">🔁 Làm lại các câu sai</button>' : ''}
                    <button type="button" class="btn-ghost" data-act="quiz-redo">↻ Làm lại cả bài</button>
                    <button type="button" class="btn-ghost" data-act="quiz-quit">🆕 Bài mới</button>
                </div>
            </div>
        `;
    }

    // ======================= 🎭 Tình huống =======================
    function caseStatus(c) {
        const rec = data().cases[c.id];
        if (!rec) return '<span class="status todo">Chưa làm</span>';
        return `<span class="status done">✓ Điểm cao nhất ${rec.best}/${rec.max}</span>`;
    }

    function renderCaseList(el) {
        el.innerHTML = `
            <div class="section-intro">
                <h3>🎭 Tình huống nhiều bước</h3>
                <p>Mỗi tình huống gồm 4 bước ra quyết định, từ định nghĩa vấn đề tới triển khai. Chọn phương án bạn cho là tốt nhất ở mỗi bước và xem phản hồi. Điểm: <span class="opt-badge best">✅ Tối ưu = 2</span> <span class="opt-badge ok">🟡 Tạm được = 1</span> <span class="opt-badge bad">❌ Chưa tốt = 0</span></p>
            </div>
            <div class="card-grid">
                ${psCaseStudies.map(c => `
                    <button type="button" class="p-card" data-act="case-open" data-id="${c.id}">
                        <span class="p-card-icon" aria-hidden="true">${c.icon}</span>
                        <strong class="p-card-title">${c.title}</strong>
                        <span class="p-card-meta">${c.domain} · ${PS.levelBadge(c.level)} · ${c.steps.length} bước</span>
                        <span class="p-card-tags">${c.tools.slice(0, 4).map(id => `<span class="mini-tag">${concept(id).title}</span>`).join('')}</span>
                        ${caseStatus(c)}
                    </button>`).join('')}
            </div>
        `;
    }

    function startCase(id) {
        const c = caseById[id];
        if (!c) return;
        P.caseRun = {
            id,
            step: 0,
            picks: [],
            orders: c.steps.map(s => PS.shuffle(s.options.map((_, i) => i))),
            finished: false
        };
        P.mode = 'cases';
        syncModeButtons();
        render();
        scrollToPractice();
    }

    function renderCaseSession(el) {
        const run = P.caseRun;
        const c = caseById[run.id];
        if (run.finished) { renderCaseSummary(el); return; }

        const idx = run.step;
        const step = c.steps[idx];
        const pick = run.picks[idx];
        const answered = pick !== undefined;
        const bestScore = Math.max(...step.options.map(o => o.score));
        const bestOpt = step.options.find(o => o.score === bestScore);

        const history = c.steps.slice(0, idx).map((s, i) => {
            const o = s.options[run.picks[i]];
            return `
                <details class="case-history ${SCORE[o.score].cls}">
                    <summary>Bước ${i + 1} — ${s.title} <span class="opt-badge ${SCORE[o.score].cls}">${SCORE[o.score].label}</span></summary>
                    <p><strong>Bạn chọn:</strong> ${o.text}</p>
                    <p class="muted">${o.feedback}</p>
                </details>`;
        }).join('');

        let feedback = '';
        if (answered) {
            const o = step.options[pick];
            feedback = `
                <div class="case-feedback ${SCORE[o.score].cls}" role="status">
                    <div class="fb-verdict">${SCORE[o.score].label}</div>
                    <p>${o.feedback}</p>
                    ${o.score < bestScore ? `
                        <div class="fb-best">
                            <strong>💡 Phương án tốt nhất:</strong> ${bestOpt.text}
                            <p>${bestOpt.feedback}</p>
                        </div>` : ''}
                </div>
                <div class="case-next">
                    <button type="button" class="btn-primary" data-act="case-next">${idx < c.steps.length - 1 ? 'Bước tiếp →' : 'Xem tổng kết →'}</button>
                </div>`;
        }

        el.innerHTML = `
            <div class="session case-session">
                <div class="session-top">
                    <button type="button" class="btn-ghost" data-act="case-back">← Danh sách tình huống</button>
                    <span class="session-count">Bước ${idx + 1}/${c.steps.length}</span>
                </div>
                <div class="case-head">
                    <span class="case-icon" aria-hidden="true">${c.icon}</span>
                    <div>
                        <h3>${c.title}</h3>
                        <div class="p-card-meta">${c.domain} · ${PS.levelBadge(c.level)}</div>
                    </div>
                </div>
                <details class="case-situation" ${idx === 0 ? 'open' : ''}>
                    <summary>📋 Bối cảnh</summary>
                    ${c.situation}
                </details>
                <ol class="stepper">
                    ${c.steps.map((s, i) => {
                        let cls = '';
                        if (i < idx) cls = 'done ' + SCORE[s.options[run.picks[i]].score].cls;
                        else if (i === idx) cls = 'current';
                        return `<li class="${cls}"><span class="st-num">${i + 1}</span><span class="st-label">${s.title}</span></li>`;
                    }).join('')}
                </ol>
                ${history}
                <div class="case-step">
                    <h4>Bước ${idx + 1} — ${step.title}</h4>
                    ${step.context ? `<div class="case-context">${step.context}</div>` : ''}
                    <p class="case-question">${step.question}</p>
                    <div class="case-options">
                        ${run.orders[idx].map((oi, pos) => {
                            const o = step.options[oi];
                            let cls = '', badge = '';
                            if (answered) {
                                cls = oi === pick ? `picked ${SCORE[o.score].cls}` : 'dim';
                                badge = `<span class="opt-badge ${SCORE[o.score].cls}">${SCORE[o.score].label}</span>`;
                            }
                            return `<button type="button" class="case-opt ${cls}" data-opt="${oi}" ${answered ? 'disabled' : ''}>
                                <span class="q-key">${KEYS[pos]}</span><span class="q-text">${o.text}</span>${badge}
                            </button>`;
                        }).join('')}
                    </div>
                    ${feedback}
                </div>
                <p class="kbd-hint">Phím tắt: <kbd>1</kbd>–<kbd>4</kbd> chọn phương án · <kbd>Enter</kbd> bước tiếp</p>
            </div>
        `;
    }

    function pickCase(oi) {
        const run = P.caseRun;
        if (!run || run.finished || run.picks[run.step] !== undefined) return;
        run.picks[run.step] = oi;
        renderCaseSession(body());
    }

    function caseNext() {
        const run = P.caseRun;
        if (!run || run.picks[run.step] === undefined) return;
        const c = caseById[run.id];
        if (run.step < c.steps.length - 1) {
            run.step++;
        } else {
            run.finished = true;
            syncSessionClass();
            const score = run.picks.reduce((sum, oi, i) => sum + c.steps[i].options[oi].score, 0);
            const max = c.steps.reduce((sum, s) => sum + Math.max(...s.options.map(o => o.score)), 0);
            const prev = data().cases[c.id];
            data().cases[c.id] = { best: Math.max(score, prev ? prev.best : 0), last: score, max, t: Date.now() };
            PS.store.save();
            renderStats();
            refreshGlobal();
        }
        renderCaseSession(body());
        scrollToPractice();
    }

    function renderCaseSummary(el) {
        const run = P.caseRun;
        const c = caseById[run.id];
        const rec = data().cases[c.id];
        const score = rec.last;
        const pct = Math.round(score / rec.max * 100);
        const rating = pct >= 85 ? '🏆 Tư duy rất sắc bén!'
            : pct >= 60 ? '👍 Khá tốt — xem lại các bước chưa tối ưu.'
            : '📚 Hãy đọc lại các concept liên quan rồi thử lại.';
        el.innerHTML = `
            <div class="session summary">
                <div class="session-top">
                    <button type="button" class="btn-ghost" data-act="case-back">← Danh sách tình huống</button>
                </div>
                <div class="summary-hero">
                    <div class="score-ring" style="--p:${pct}"><span>${score}/${rec.max}</span></div>
                    <div>
                        <h3>${c.icon} ${c.title}</h3>
                        <p>${rating}</p>
                    </div>
                </div>
                <ol class="recap">
                    ${c.steps.map((s, i) => {
                        const o = s.options[run.picks[i]];
                        return `<li><strong>${s.title}:</strong> ${o.text} <span class="opt-badge ${SCORE[o.score].cls}">${SCORE[o.score].label}</span></li>`;
                    }).join('')}
                </ol>
                <div class="info-card"><h4>🧠 Tổng kết</h4>${c.debrief}</div>
                <div class="info-card"><h4>📌 Bài học rút ra</h4><ul class="bullet-list">${c.lessons.map(l => `<li>${l}</li>`).join('')}</ul></div>
                <div class="info-card"><h4>🔗 Concept được dùng</h4><div class="chip-row">${c.tools.map(id => PS.conceptChip(id)).join('')}</div></div>
                <div class="summary-actions">
                    <button type="button" class="btn-primary" data-act="case-restart">🔁 Làm lại tình huống</button>
                    <button type="button" class="btn-ghost" data-act="case-back">Chọn tình huống khác</button>
                </div>
            </div>
        `;
    }

    // ======================= ✍️ Tự luận =======================
    function exRecord(id) {
        if (!data().exercises[id]) data().exercises[id] = { answer: '', hints: 0, revealed: false, rubric: [], done: false };
        return data().exercises[id];
    }

    function exStatus(ex) {
        const rec = data().exercises[ex.id];
        if (rec && rec.done) {
            const got = (rec.rubric || []).filter(Boolean).length;
            return `<span class="status done">✓ Hoàn thành · tự chấm ${got}/${ex.rubric.length}</span>`;
        }
        if (rec && (rec.answer || '').trim()) return '<span class="status doing">✏️ Đang làm</span>';
        return '<span class="status todo">Chưa làm</span>';
    }

    function filteredExercises() {
        return psExercises.filter(ex => P.exFilter === 'all' || ex.level === P.exFilter);
    }

    function renderExerciseList(el) {
        const lvls = [['all', 'Tất cả']].concat(Object.entries(PS_LEVELS).map(([k, l]) => [k, `${l.icon} ${l.label}`]));
        const list = filteredExercises();
        el.innerHTML = `
            <div class="section-intro">
                <h3>✍️ Bài tập tự luận</h3>
                <p>Áp dụng công cụ vào tình huống thật: tự viết câu trả lời (được lưu tự động) → mở gợi ý nếu bí → so với đáp án mẫu → tự chấm theo tiêu chí. Tự làm trước khi xem đáp án giúp nhớ lâu hơn nhiều.</p>
                <div class="chip-row">
                    ${lvls.map(([k, label]) => `<button type="button" class="chip-btn ${P.exFilter === k ? 'active' : ''}" data-act="ex-filter" data-level="${k}">${label}</button>`).join('')}
                </div>
            </div>
            <div class="card-grid">
                ${list.map(ex => `
                    <button type="button" class="p-card" data-act="ex-open" data-id="${ex.id}">
                        <strong class="p-card-title">${ex.title}</strong>
                        <span class="p-card-meta">${PS.levelBadge(ex.level)} · ⏱️ ${ex.time}</span>
                        <span class="p-card-tags">${ex.concepts.map(id => `<span class="mini-tag">${concept(id).icon} ${concept(id).title}</span>`).join('')}</span>
                        ${exStatus(ex)}
                    </button>`).join('')}
            </div>
        `;
    }

    function flushExerciseAnswer() {
        clearTimeout(saveTimer);
        const ta = document.getElementById('exAnswer');
        if (ta && P.exerciseId && ta.dataset.ex === P.exerciseId) {
            exRecord(P.exerciseId).answer = ta.value;
            PS.store.save();
        }
    }

    function renderExercise(el) {
        const ex = exById[P.exerciseId];
        if (!ex) { P.exerciseId = null; renderExerciseList(el); return; }
        const rec = data().exercises[ex.id] || { answer: '', hints: 0, revealed: false, rubric: [], done: false };
        const shown = Math.min(rec.hints || 0, ex.hints.length);
        const list = filteredExercises();
        const pos = list.findIndex(e => e.id === ex.id);
        const prev = pos > 0 ? list[pos - 1] : null;
        const next = pos >= 0 && pos < list.length - 1 ? list[pos + 1] : null;
        const got = (rec.rubric || []).filter(Boolean).length;

        el.innerHTML = `
            <div class="session ex-view">
                <div class="session-top">
                    <button type="button" class="btn-ghost" data-act="ex-back">← Danh sách bài tự luận</button>
                    ${exStatus(ex)}
                </div>
                <div class="ex-head">
                    <h3>✍️ ${ex.title}</h3>
                    <div class="p-card-meta">${PS.levelBadge(ex.level)} · ⏱️ ${ex.time}</div>
                    <div class="chip-row">${ex.concepts.map(id => PS.conceptChip(id)).join('')}</div>
                </div>
                <div class="info-card ex-task"><h4>📝 Đề bài</h4>${ex.task}</div>

                <label for="exAnswer" class="ex-label">✍️ Bài làm của bạn <small id="exSaved" class="muted">Tự động lưu trên trình duyệt này</small></label>
                <textarea id="exAnswer" data-ex="${ex.id}" rows="10" placeholder="Viết câu trả lời của bạn ở đây…"></textarea>

                <div class="ex-hints">
                    ${ex.hints.slice(0, shown).map((h, i) => `<div class="hint-box"><strong>💡 Gợi ý ${i + 1}:</strong> ${h}</div>`).join('')}
                    ${shown < ex.hints.length ? `<button type="button" class="btn-ghost" data-act="ex-hint">💡 Xem gợi ý ${shown + 1}/${ex.hints.length}</button>` : ''}
                </div>

                ${!rec.revealed ? `
                    <div class="ex-actions">
                        <button type="button" class="btn-primary" data-act="ex-reveal">👀 Xem đáp án mẫu</button>
                        ${P.exWarned === ex.id ? '<span class="warn-text">Bạn chưa viết gì. Tự làm trước giúp nhớ lâu hơn — bấm lần nữa nếu vẫn muốn xem.</span>' : ''}
                    </div>` : `
                    <div class="info-card ex-sample"><h4>📋 Đáp án mẫu</h4>${ex.sample}<p class="muted">Đáp án mẫu chỉ là một cách làm tốt — bài của bạn có thể khác mà vẫn đạt nếu thoả các tiêu chí dưới đây.</p></div>
                    <div class="info-card ex-rubric">
                        <h4>🧾 Tự chấm theo tiêu chí</h4>
                        <ul class="check-list">
                            ${ex.rubric.map((r, i) => `<li><label><input type="checkbox" data-rubric="${i}" ${(rec.rubric || [])[i] ? 'checked' : ''}> <span>${r}</span></label></li>`).join('')}
                        </ul>
                        <div class="rubric-foot">
                            <span id="rubricScore" class="rubric-score">Đạt ${got}/${ex.rubric.length} tiêu chí</span>
                            <button type="button" class="${rec.done ? 'btn-ghost' : 'btn-primary'}" data-act="ex-done">${rec.done ? '↩︎ Bỏ đánh dấu hoàn thành' : '✓ Đánh dấu hoàn thành'}</button>
                        </div>
                    </div>`}

                <div class="ex-nav">
                    ${prev ? `<button type="button" class="btn-ghost" data-act="ex-open" data-id="${prev.id}">← ${prev.title}</button>` : '<span></span>'}
                    <button type="button" class="btn-link danger" data-act="ex-reset">${P.exResetArmed ? '⚠️ Bấm lần nữa để xoá bài làm' : 'Làm lại từ đầu'}</button>
                    ${next ? `<button type="button" class="btn-ghost" data-act="ex-open" data-id="${next.id}">${next.title} →</button>` : '<span></span>'}
                </div>
            </div>
        `;
        const ta = document.getElementById('exAnswer');
        ta.value = rec.answer || '';
    }

    function openExercise(id) {
        flushExerciseAnswer();
        P.exerciseId = id;
        P.exWarned = null;
        P.exResetArmed = false;
        P.mode = 'exercises';
        syncModeButtons();
        render();
        scrollToPractice();
    }

    // ======================= Tab Luyện tập trong panel concept =======================
    function cpSummaryHtml(id) {
        const qs = psQuizBank.filter(q => q.concept === id);
        const quiz = data().quiz;
        const right = qs.filter(q => quiz[q.id] && quiz[q.id].last === 1).length;
        return `
            <div class="progress-line">
                <div class="bar"><span style="width:${qs.length ? right / qs.length * 100 : 0}%"></span></div>
                <span>Nắm vững ${right}/${qs.length} câu trắc nghiệm</span>
            </div>`;
    }

    function renderConceptPractice(container, id) {
        const qs = psQuizBank.filter(q => q.concept === id);
        const exs = psExercises.filter(e => e.concepts.includes(id));
        const cases = psCaseStudies.filter(c => c.tools.includes(id));
        qs.forEach(q => { P.cpOrders[q.id] = choiceOrder(q); });

        if (!qs.length && !exs.length && !cases.length) {
            container.innerHTML = '<p class="muted">Concept này chưa có bài luyện tập riêng. Hãy thử khu Luyện tập tổng hợp.</p>';
            return;
        }

        container.innerHTML = `
            <div class="cp" data-concept="${id}">
                <div class="cp-summary">${cpSummaryHtml(id)}</div>
                ${qs.length ? `
                    <h3 class="c-sec-title">📝 Trắc nghiệm nhanh</h3>
                    <p class="muted">Chọn đáp án để xem giải thích ngay. Kết quả được tính vào tiến độ chung.</p>
                    ${qs.map((q, i) => `<div class="cp-q" data-qid="${q.id}" data-num="${i + 1}">${questionHtml(q, P.cpOrders[q.id], undefined, { compact: true, number: i + 1, showLast: true })}</div>`).join('')}
                    <button type="button" class="btn-primary block" data-practice-open="quiz:${id}">Làm thành bài kiểm tra (xáo trộn) →</button>` : ''}
                ${exs.length ? `
                    <h3 class="c-sec-title">✍️ Bài tự luận</h3>
                    <div class="cp-list">
                        ${exs.map(ex => `
                            <button type="button" class="cp-item" data-practice-open="exercise:${ex.id}">
                                <span class="cp-item-text"><strong>${ex.title}</strong><small>${PS_LEVELS[ex.level].icon} ${PS_LEVELS[ex.level].label} · ⏱️ ${ex.time}</small></span>
                                ${exStatus(ex)}
                            </button>`).join('')}
                    </div>` : ''}
                ${cases.length ? `
                    <h3 class="c-sec-title">🎭 Tình huống có dùng concept này</h3>
                    <div class="cp-list">
                        ${cases.map(c => `
                            <button type="button" class="cp-item" data-practice-open="case:${c.id}">
                                <span class="cp-item-text"><strong>${c.icon} ${c.title}</strong><small>${c.domain} · ${c.steps.length} bước</small></span>
                                ${caseStatus(c)}
                            </button>`).join('')}
                    </div>` : ''}
            </div>
        `;
    }

    // ======================= Mở từ nơi khác =======================
    function openFrom(kind, id) {
        flushExerciseAnswer();
        psSwitchView('practice');
        if (kind === 'quiz') {
            const qs = psQuizBank.filter(q => q.concept === id);
            startQuiz(qs, `Kiểm tra: ${concept(id).icon} ${concept(id).title}`, 'all');
        } else if (kind === 'case') {
            startCase(id);
        } else if (kind === 'exercise') {
            openExercise(id);
        }
        window.scrollTo({ top: 0 });
    }

    // ======================= Xử lý sự kiện =======================
    function handleAct(act, el) {
        switch (act) {
            // Trắc nghiệm
            case 'quick': {
                const kind = el.dataset.quick;
                if (kind === 'mixed') startQuiz(psQuizBank, '🎲 10 câu ngẫu nhiên', '10');
                if (kind === 'new') startQuiz(filterQuestions({ ...P.cfg, category: 'all', level: 'all', concept: 'all', type: 'all', only: 'new' }), '🆕 Câu chưa làm', '10');
                if (kind === 'wrong') startQuiz(filterQuestions({ ...P.cfg, category: 'all', level: 'all', concept: 'all', type: 'all', only: 'wrong' }), '🔁 Ôn câu sai', 'all');
                if (kind === 'tool') startQuiz(psQuizBank.filter(q => q.type === 'tool'), '🧰 Chọn đúng công cụ', '10');
                if (kind === 'spot') startQuiz(psQuizBank.filter(q => q.type === 'spot'), '🚨 Nhận diện bẫy', '10');
                break;
            }
            case 'start-quiz':
                startQuiz(filterQuestions(P.cfg), '⚙️ Bài kiểm tra tuỳ chọn', P.cfg.count);
                break;
            case 'quiz-concept': {
                const id = el.dataset.id;
                startQuiz(psQuizBank.filter(q => q.concept === id), `Kiểm tra: ${concept(id).icon} ${concept(id).title}`, 'all');
                break;
            }
            case 'quiz-prev': if (P.quiz) quizGo(P.quiz.index - 1); break;
            case 'quiz-next': quizNext(); break;
            case 'quiz-goto': quizGo(parseInt(el.dataset.i, 10)); break;
            case 'quiz-finish': finishQuiz(); break;
            case 'quiz-quit': P.quiz = null; render(); break;
            case 'quiz-redo': {
                const qs = P.quiz.items.map(it => quizById[it.id]);
                startQuiz(qs, P.quiz.title, 'all');
                break;
            }
            case 'quiz-redo-wrong': {
                const s = P.quiz;
                const qs = s.items.filter((it, i) => s.answers[i] !== quizById[it.id].answer).map(it => quizById[it.id]);
                startQuiz(qs, '🔁 Làm lại câu sai', 'all');
                break;
            }
            // Tình huống
            case 'case-open': startCase(el.dataset.id); break;
            case 'case-next': caseNext(); break;
            case 'case-back': P.caseRun = null; render(); break;
            case 'case-restart': startCase(P.caseRun.id); break;
            // Tự luận
            case 'ex-filter': P.exFilter = el.dataset.level; render(); break;
            case 'ex-open': openExercise(el.dataset.id); break;
            case 'ex-back': flushExerciseAnswer(); P.exerciseId = null; P.exResetArmed = false; render(); break;
            case 'ex-hint': {
                flushExerciseAnswer();
                const ex = exById[P.exerciseId];
                const rec = exRecord(ex.id);
                rec.hints = Math.min((rec.hints || 0) + 1, ex.hints.length);
                PS.store.save();
                renderExercise(body());
                break;
            }
            case 'ex-reveal': {
                flushExerciseAnswer();
                const rec = exRecord(P.exerciseId);
                if (!(rec.answer || '').trim() && P.exWarned !== P.exerciseId) {
                    P.exWarned = P.exerciseId;
                } else {
                    rec.revealed = true;
                    PS.store.save();
                }
                renderExercise(body());
                break;
            }
            case 'ex-done': {
                flushExerciseAnswer();
                const rec = exRecord(P.exerciseId);
                rec.done = !rec.done;
                PS.store.save();
                renderStats();
                refreshGlobal();
                renderExercise(body());
                break;
            }
            case 'ex-reset': {
                if (!P.exResetArmed) { P.exResetArmed = true; renderExercise(body()); break; }
                delete data().exercises[P.exerciseId];
                PS.store.save();
                P.exResetArmed = false;
                P.exWarned = null;
                renderStats();
                refreshGlobal();
                renderExercise(body());
                break;
            }
            // Tiến độ
            case 'reset-progress': {
                if (!P.resetArmed) { P.resetArmed = true; renderStats(); document.querySelector('.mastery').open = true; break; }
                PS.store.reset(['quiz', 'cases', 'exercises']);
                P.resetArmed = false;
                P.quiz = null;
                P.caseRun = null;
                renderStats();
                render();
                refreshGlobal();
                break;
            }
        }
    }

    function onKeydown(e) {
        if (PS.state.view !== 'practice' || e.metaKey || e.ctrlKey || e.altKey) return;
        const tag = (e.target.tagName || '').toLowerCase();
        if (['input', 'textarea', 'select'].includes(tag)) return;
        if (tag === 'button' && (e.key === 'Enter' || e.key === ' ')) return;

        const k = e.key.toLowerCase();
        let pos = -1;
        if (/^[1-6]$/.test(k)) pos = parseInt(k, 10) - 1;
        else if (/^[a-f]$/.test(k)) pos = k.charCodeAt(0) - 97;

        if (P.mode === 'quiz' && P.quiz && !P.quiz.finished) {
            const s = P.quiz;
            const item = s.items[s.index];
            if (pos >= 0 && item.order[pos] !== undefined && s.answers[s.index] === undefined) {
                e.preventDefault();
                answerQuiz(item.order[pos]);
            } else if ((e.key === 'Enter' || e.key === 'ArrowRight') && s.answers[s.index] !== undefined) {
                e.preventDefault();
                quizNext();
            } else if (e.key === 'ArrowLeft') {
                e.preventDefault();
                quizGo(s.index - 1);
            }
        } else if (P.mode === 'cases' && P.caseRun && !P.caseRun.finished) {
            const run = P.caseRun;
            const order = run.orders[run.step];
            if (pos >= 0 && order[pos] !== undefined && run.picks[run.step] === undefined) {
                e.preventDefault();
                pickCase(order[pos]);
            } else if (e.key === 'Enter' && run.picks[run.step] !== undefined) {
                e.preventDefault();
                caseNext();
            }
        }
    }

    function init() {
        psQuizBank.forEach(q => { quizById[q.id] = q; });
        psCaseStudies.forEach(c => { caseById[c.id] = c; });
        psExercises.forEach(e => { exById[e.id] = e; });

        renderModeMeta();

        document.getElementById('practiceModes').addEventListener('click', e => {
            const b = e.target.closest('.mode-btn');
            if (b) setMode(b.dataset.mode);
        });

        const pb = body();
        pb.addEventListener('click', e => {
            const act = e.target.closest('[data-act]');
            if (act && !act.disabled) { handleAct(act.dataset.act, act); return; }
            const choice = e.target.closest('.q-choice');
            if (choice && !choice.disabled && P.mode === 'quiz') { answerQuiz(parseInt(choice.dataset.choice, 10)); return; }
            const opt = e.target.closest('.case-opt');
            if (opt && !opt.disabled && P.mode === 'cases') pickCase(parseInt(opt.dataset.opt, 10));
        });
        pb.addEventListener('change', e => {
            const cfgKey = e.target.dataset.cfg;
            if (cfgKey) {
                P.cfg[cfgKey] = e.target.value;
                if (cfgKey === 'category') P.cfg.concept = 'all';
                renderQuizSetup(pb);
                return;
            }
            const r = e.target.dataset.rubric;
            if (r !== undefined && P.exerciseId) {
                const ex = exById[P.exerciseId];
                const rec = exRecord(ex.id);
                rec.rubric = rec.rubric || [];
                rec.rubric[parseInt(r, 10)] = e.target.checked;
                PS.store.save();
                const got = rec.rubric.filter(Boolean).length;
                const scoreEl = document.getElementById('rubricScore');
                if (scoreEl) scoreEl.textContent = `Đạt ${got}/${ex.rubric.length} tiêu chí`;
            }
        });
        pb.addEventListener('input', e => {
            if (e.target.id !== 'exAnswer') return;
            clearTimeout(saveTimer);
            const exId = e.target.dataset.ex;
            const value = e.target.value;
            saveTimer = setTimeout(() => {
                exRecord(exId).answer = value;
                PS.store.save();
                const saved = document.getElementById('exSaved');
                if (saved) saved.textContent = `Đã lưu lúc ${new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })}`;
            }, 400);
        });

        document.getElementById('practiceStats').addEventListener('click', e => {
            const act = e.target.closest('[data-act]');
            if (act) handleAct(act.dataset.act, act);
        });

        // Trắc nghiệm nhanh trong panel concept
        document.getElementById('panelContent').addEventListener('click', e => {
            const btn = e.target.closest('.cp-q .q-choice');
            if (!btn || btn.disabled) return;
            const wrap = btn.closest('.cp-q');
            const q = quizById[wrap.dataset.qid];
            const choice = parseInt(btn.dataset.choice, 10);
            recordAnswer(q, choice === q.answer);
            wrap.innerHTML = questionHtml(q, P.cpOrders[q.id], choice, { compact: true, number: wrap.dataset.num });
            const cp = wrap.closest('.cp');
            const sum = cp && cp.querySelector('.cp-summary');
            if (sum) sum.innerHTML = cpSummaryHtml(cp.dataset.concept);
        });

        // Mở bài luyện tập từ bất kỳ đâu
        document.addEventListener('click', e => {
            const el = e.target.closest('[data-practice-open]');
            if (!el) return;
            const [kind, id] = el.dataset.practiceOpen.split(':');
            openFrom(kind, id);
        });

        document.addEventListener('keydown', onKeydown);
        window.addEventListener('beforeunload', flushExerciseAnswer);
    }

    function onShow() {
        P.resetArmed = false;
        syncModeButtons();
        renderStats();
        render();
    }

    return { init, onShow, getStats, countsFor, renderConceptPractice };
})();
