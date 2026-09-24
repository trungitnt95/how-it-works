// Kho câu ví dụ: gom mọi câu tiếng Anh trong tab "Bài tập" của từng chủ điểm
// thành một bảng (chủ điểm | câu ví dụ | dịch nghĩa).
// Dữ liệu đọc trực tiếp từ các module có sẵn (không sao chép), gồm 3 nguồn
// theo đúng thứ tự hiển thị trong tab Bài tập:
//   1. grammarViTranslateData  – khối "Dịch câu" (đủ cặp Anh–Việt)
//   2. grammarExerciseBank     – khối "Câu hỏi trắc nghiệm" (điền đáp án đúng vào câu)
//   3. grammarPracticeData     – khối "Bài tập nhanh" (lấy câu đúng từ đề + đáp án)
(function (root) {
    'use strict';

    const CATEGORY_META = {
        foundations: { title: '🧱 Nền Tảng Câu Tiếng Anh', short: '🧱 Nền tảng' },
        tenses: { title: '⏰ Tất Cả 12 Thì', short: '⏰ 12 thì' },
        patterns: { title: '🧩 Mẫu Câu & Liên Kết Ý', short: '🧩 Mẫu câu' },
        structures: { title: '🏗️ Cấu Trúc Nâng Cao', short: '🏗️ Nâng cao' },
        mistakes: { title: '⚠️ Lỗi Phổ Biến', short: '⚠️ Lỗi hay gặp' },
        pronunciation: { title: '🗣️ IPA & Phát Âm', short: '🗣️ Phát âm' }
    };

    const SOURCE_META = {
        translate: { label: '🇻🇳→🇬🇧 Dịch câu', tag: 'Dịch câu' },
        quiz: { label: '📝 Trắc nghiệm', tag: 'Trắc nghiệm' },
        practice: { label: '🧪 Bài tập nhanh', tag: 'Bài tập nhanh' }
    };

    const VI_CHARS = /[àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]/i;
    const BLANK = /_{2,}(\s*\([^)]*\))?/g;
    const HINT_TAIL = /\s*\([^()]*\)\s*$/;
    // Đề hỏi tìm câu SAI → đáp án đúng của đề lại là một câu sai, không được đưa vào bảng.
    const ERROR_TARGET = /(mắc lỗi|bị lỗi|\bSAI\b|mơ hồ|QUÁ NHIỀU|fragment|run-on|comma splice)/i;
    const ERROR_TARGET_EXCEPT = /(KHÔNG mắc|tránh|sửa)/i;
    const INSTRUCTION = /^(make|rewrite|change|combine|turn|write|use|put|report|join|viết|sửa|đổi|chuyển|nối|dùng|điền|chọn|ghép)\b|nghĩa là gì\??$/i;
    const CORRECTION_INSTRUCTION = /^sửa\b|sửa lỗi/i;
    const NEGATION = /\b(not|no|never|none|nobody|nothing|neither)\b|n['’]t\b/i;

    function escapeHtml(text) {
        return String(text == null ? '' : text)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    function stripHtml(html) {
        return String(html == null ? '' : html)
            .replace(/<br\s*\/?>/gi, ' ')
            .replace(/<[^>]+>/g, '')
            .replace(/&nbsp;/g, ' ')
            .replace(/&amp;/g, '&')
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
            .replace(/&quot;/g, '"')
            .replace(/&#39;/g, "'")
            .replace(/\s+/g, ' ')
            .trim();
    }

    function normalize(text) {
        return String(text || '')
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/đ/g, 'd')
            .replace(/\s+/g, ' ')
            .trim();
    }

    // Từ mượn tiếng Pháp trong câu tiếng Anh (café...) không được coi là tiếng Việt.
    const LOANWORDS = /(?<!\p{L})(café|cafés|cliché|fiancée?|résumé|naïve|déjà|protégé|entrée)(?!\p{L})/giu;
    const hasVi = text => VI_CHARS.test(String(text || '').replace(LOANWORDS, ''));
    const countBlanks = text => (String(text).match(BLANK) || []).length;
    const wordCount = text => String(text).trim().split(/\s+/).filter(Boolean).length;

    function isEnglishSentence(text) {
        const value = String(text || '').trim();
        return !hasVi(value)
            && /^["'“‘(A-Z0-9]/.test(value)
            && wordCount(value) >= 2
            && /[.?!]["”’')]?$/.test(value)
            && !/(\.\.\.|…)$/.test(value)
            && !isFormula(value)
            && countBlanks(value) === 0;
    }

    // "Did + subject + use to + V?", "be used to + N" – công thức, không phải câu.
    function isFormula(text) {
        return /\s\+\s/.test(String(text || ''));
    }

    function stripHintTail(text) {
        let value = String(text).trim();
        while (HINT_TAIL.test(value)) value = value.replace(HINT_TAIL, '').trim();
        return value;
    }

    function capitalizeFirst(text) {
        return text.replace(/^(["'“‘(]?)([a-z])/, (_, lead, ch) => lead + ch.toUpperCase());
    }

    function cleanAnswer(text) {
        // "Ø (không mạo từ)", "is (kiểu Anh-Mỹ)" → bỏ phần ghi chú tiếng Việt trong ngoặc.
        let value = stripHtml(text);
        const tail = value.match(HINT_TAIL);
        const note = tail && hasVi(tail[0]) ? tail[0].trim().replace(/^\(|\)$/g, '') : '';
        if (note) value = value.replace(HINT_TAIL, '').trim();
        return { value, note };
    }

    // Điền đáp án vào chỗ trống. Trả về { text, html } hoặc null nếu không khớp số chỗ trống.
    function fillBlanks(template, answer) {
        const blanks = countBlanks(template);
        if (!blanks) return null;

        let parts = [answer];
        if (blanks > 1) {
            parts = answer.split(/\s+\/\s+/);
            if (parts.length !== blanks) parts = answer.split(/\s*,\s*/);
            if (parts.length !== blanks) return null;
        }

        // split với nhóm bắt (gợi ý trong ngoặc ngay sau chỗ trống) sinh thêm phần tử – chỉ giữ phần văn bản.
        const chunks = template.split(BLANK).filter((_, index) => index % 2 === 0);
        if (chunks.length !== blanks + 1) return null;

        const fills = parts.map(part => part.trim());
        // Từ nối/mạo từ hay lặp hợp lệ ("the more ... the better", "had had") – không coi là trùng.
        const keepWord = word => /^(a|an|the|had|that|and|or|of|to|in|on|at|for|by)$/.test(word);
        for (let index = 0; index < fills.length; index++) {
            const fill = fills[index];
            const fillWords = fill.toLowerCase().split(/\s+/);
            const multiWord = fillWords.length > 1;
            // Đáp án đã chứa sẵn từ đứng cạnh chỗ trống (đề giữ lại từ / đáp án đảo trật tự) → bỏ từ bị lặp:
            // "How long you (live) here?" + "have you lived", "She ___ knows." + "probably knows",
            // "It is essential ___ he arrive" + "that he should".
            const lastWordBefore = ((chunks[index].match(/\b([A-Za-z]+)\s*$/) || [])[1] || '').toLowerCase();
            if (multiWord && lastWordBefore && !keepWord(lastWordBefore) && fillWords.includes(lastWordBefore)) {
                chunks[index] = chunks[index].replace(/\b[A-Za-z]+\s*$/, '');
            }
            const firstWord = ((chunks[index + 1].match(/^\s*([A-Za-z]+)\b/) || [])[1] || '').toLowerCase();
            if (firstWord && !keepWord(firstWord)
                && (firstWord === fillWords[fillWords.length - 1] || (multiWord && fillWords.includes(firstWord)))) {
                chunks[index + 1] = chunks[index + 1].replace(/^\s*[A-Za-z]+\b/, '');
            }
            // "I ___ her" + "'m meeting" → "I'm meeting her"
            if (/^['’]/.test(fill)) chunks[index] = chunks[index].replace(/\s+$/, '');
        }

        let text = '';
        let html = '';
        chunks.forEach((chunk, index) => {
            text += chunk;
            html += escapeHtml(chunk);
            if (index < blanks) {
                const fill = fills[index];
                if (fill === 'Ø' || fill === '-' || fill === '') return;
                text += fill;
                html += `<mark>${escapeHtml(fill)}</mark>`;
            }
        });

        const tidy = value => value
            .replace(/\s{2,}/g, ' ')
            .replace(/\s+([,.;:!?])/g, '$1')
            .replace(/([?!])\1+/g, '$1')
            .trim();

        text = tidy(text);
        html = tidy(html);
        if ((text.match(/"/g) || []).length % 2) return null;
        if (/^\s*_/.test(template)) {
            // Chỗ trống đứng đầu câu: "___ students must study hard." + Ø → "Students must study hard."
            text = capitalizeFirst(text);
            html = html.replace(/^(<mark>)?([a-z])/, (_, mark, ch) => (mark || '') + ch.toUpperCase());
        }
        return { text, html };
    }

    function cleanTopicTitle(title) {
        return String(title || '').replace(/\s+-\s+(Beginner|Intermediate|Advanced)$/i, '').trim();
    }

    function cleanSectionTitle(title) {
        return stripHtml(title)
            .replace(/^Nhóm\s+\d+\s*:\s*/i, '')
            .replace(/^\d+\.\s*/, '')
            .replace(/^[^\p{L}\p{N}]+/u, '')
            .trim();
    }

    // ---------- Nguồn 2: câu hỏi trắc nghiệm ----------
    function isGenericPrompt(text) {
        return /^(Chọn|Điền)(\s+\S+){0,2}\s+đúng$/i.test(text) || /^Chọn đáp án đúng/i.test(text);
    }

    function quizSegment(question) {
        const unquote = value => value.trim().replace(/^["“]/, '').replace(/["”]$/, '').trim();

        if (question.includes('→')) {
            const after = question.slice(question.lastIndexOf('→') + 1).trim();
            if (countBlanks(after)) return { segment: unquote(after), rest: question.slice(0, question.lastIndexOf('→')) };
        }

        // "Chọn ...: "câu có ___." (gợi ý)" – lấy nguyên câu trong ngoặc kép sau dấu hai chấm (kể cả khi có ngoặc lồng).
        const colon = question.lastIndexOf(': ');
        if (colon > 0) {
            const after = stripHintTail(question.slice(colon + 2));
            if (/^["“]/.test(after) && /["”]$/.test(after) && countBlanks(after)) {
                // Ngoặc bên trong phải là từng cặp bao quanh chữ ("The Grapes of Wrath"); nếu là hội thoại
                // "A?" — "B ___." thì giữ nguyên cả hai lượt thoại kèm ngoặc kép.
                const inner = unquote(after);
                const pairsValid = Array.from(inner.matchAll(/["“]([^"”]*)["”]/g)).every(match => !/^\s|\s$/.test(match[1]));
                return { segment: pairsValid ? inner : after, rest: question.slice(0, colon) + question.slice(colon + 2 + after.length) };
            }
        }

        const quoted = Array.from(question.matchAll(/["“]([^"”]*)["”]/g));
        const withBlank = quoted.find(match => countBlanks(match[1]));
        if (withBlank) {
            return { segment: withBlank[1], rest: question.replace(withBlank[0], ' ') };
        }

        if (colon > 0 && countBlanks(question.slice(colon + 2))) {
            return { segment: question.slice(colon + 2), rest: question.slice(0, colon) };
        }

        return { segment: question, rest: '' };
    }

    function quizPoint(rest, hint) {
        const bits = [];
        const prefix = stripHtml(rest).replace(/\s+([?.!:,])/g, '$1').replace(/[\s:?]+$/, '').trim();
        if (prefix && hasVi(prefix) && !isGenericPrompt(prefix)) bits.push(prefix);
        if (hint) bits.push(hint);
        return bits.join(' · ');
    }

    function rowsFromQuiz(question) {
        const correct = question.options && question.options[question.correct];
        if (correct == null) return [];

        const prompt = stripHtml(question.question);
        const { value: answer, note } = cleanAnswer(correct);
        if (!answer || hasVi(answer)) return [];

        if (countBlanks(prompt)) {
            const { segment, rest } = quizSegment(prompt);
            let hint = '';
            let template = segment.trim();
            const tail = template.match(HINT_TAIL);
            if (tail && hasVi(tail[0])) hint = tail[0].trim().replace(/^\(|\)$/g, '');
            template = stripHintTail(template);
            const restTail = rest.match(HINT_TAIL);
            if (!hint && restTail && hasVi(restTail[0])) hint = restTail[0].trim().replace(/^\(|\)$/g, '');

            const filled = fillBlanks(template, answer);
            if (!filled || hasVi(filled.text)) return [];
            return [{ en: filled.text, enHtml: filled.html, vi: '', point: quizPoint(stripHintTail(rest), hint || note) }];
        }

        if (ERROR_TARGET.test(prompt) && !ERROR_TARGET_EXCEPT.test(prompt)) return [];
        if (!isEnglishSentence(answer)) return [];

        const point = [prompt.replace(/[\s:]+$/, ''), note].filter(Boolean).join(' · ');
        return [{ en: answer, enHtml: escapeHtml(answer), vi: '', point }];
    }

    // ---------- Nguồn 3: bài tập nhanh ----------
    // "Write a sentence with this meaning: “Càng đọc nhiều...”" → chỉ giữ phần nghĩa tiếng Việt.
    function extractMeaning(text) {
        return String(text || '').replace(/^[A-Za-z][A-Za-z ,]*:\s*[“"](.+?)[”"]\.?$/, '$1').trim();
    }

    function parsePracticePrompt(html) {
        let rest = String(html || '');
        let label = '';
        let vi = '';
        let viMatchesAnswer = false;
        let instruction = '';

        const strong = rest.match(/^\s*<strong>([\s\S]*?)<\/strong>\s*(<br\s*\/?>)?/i);
        if (strong) {
            label = stripHtml(strong[1]).replace(/^\d+\.\s*/, '').replace(/[\s:]+$/, '').trim();
            rest = rest.slice(strong[0].length);
        }

        rest = rest.replace(/<em>([\s\S]*?)<\/em>/gi, (_, inner) => {
            const text = extractMeaning(stripHtml(inner).replace(/^Nghĩa\s*:\s*/i, ''));
            if (INSTRUCTION.test(text) || !hasVi(text)) instruction = instruction || text;
            else vi = vi || text;
            return ' ';
        });

        let main = stripHtml(rest);
        const slash = main.lastIndexOf(' / ');
        if (slash > 0) {
            const left = main.slice(0, slash).trim();
            const right = main.slice(slash + 3).trim();
            if (INSTRUCTION.test(right)) {
                instruction = instruction || right;
                main = left;
            } else if (hasVi(right) && !hasVi(left)) {
                // "I do not have enough money. / Tôi ước mình có đủ tiền." – nghĩa này là của câu đáp án.
                vi = right;
                viMatchesAnswer = true;
                main = left;
            }
        }

        return { label, vi, viMatchesAnswer, instruction, main };
    }

    function rowsFromPractice(promptHtml, answerHtml, sectionTitle) {
        const { label, vi, viMatchesAnswer, instruction, main } = parsePracticePrompt(promptHtml);
        const { value: answer } = cleanAnswer(answerHtml);
        const section = cleanSectionTitle(sectionTitle);
        if (!main || !answer) return [];

        const isCorrection = CORRECTION_INSTRUCTION.test(instruction) || /sửa/i.test(sectionTitle);

        // "think in “I think you are right”" + "opinion / believe" → ví dụ nghĩa của động từ.
        const usage = main.match(/^(\S+(?:\s\S+)?) in [“"](.+?)[”"]$/);
        if (usage && !hasVi(answer)) {
            const en = /[.?!]$/.test(usage[2]) ? usage[2] : `${usage[2]}.`;
            return [{ en, enHtml: escapeHtml(en), vi: '', point: `${usage[1]} = ${answer}` }];
        }

        // Đề là câu tiếng Việt, đáp án là câu tiếng Anh (dịch câu).
        if (hasVi(main) && !countBlanks(main)) {
            return isEnglishSentence(answer) ? [{ en: answer, enHtml: escapeHtml(answer), vi: extractMeaning(main), point: label || section }] : [];
        }

        // Đáp án là cả câu hoàn chỉnh (viết lại, sửa lỗi, hoàn thành câu).
        if (isEnglishSentence(answer)) {
            const typeChanged = NEGATION.test(answer) !== NEGATION.test(main)
                || /\?["”]?$/.test(answer) !== /\?["”]?$/.test(main)
                || /!["”]?$/.test(answer) !== /!["”]?$/.test(main);
            const point = label || [section, instruction].filter(Boolean).join(' · ');

            if (viMatchesAnswer) {
                return [{ en: answer, enHtml: escapeHtml(answer), vi, point }];
            }
            if (vi && typeChanged && !countBlanks(main) && !isCorrection && isEnglishSentence(main)) {
                // Bản dịch mô tả câu gốc (vd. "Make it negative") → giữ câu gốc kèm nghĩa, câu đích không kèm nghĩa.
                return [
                    { en: main, enHtml: escapeHtml(main), vi, point },
                    { en: answer, enHtml: escapeHtml(answer), vi: '', point }
                ];
            }
            return [{ en: answer, enHtml: escapeHtml(answer), vi: typeChanged ? '' : vi, point }];
        }

        if (hasVi(answer)) {
            // Đáp án là nhãn tiếng Việt: câu đề là ví dụ đúng (nhận diện) hoặc cụm từ cần thuộc (flashcard).
            if (isEnglishSentence(main)) {
                const phrase = instruction.match(/^(.+?)\s+nghĩa là gì\??$/i);
                const point = label || (phrase ? `${phrase[1]} = ${answer}` : [section, answer].filter(Boolean).join(': '));
                return [{ en: main, enHtml: escapeHtml(main), vi, point }];
            }
            if (!hasVi(main) && !countBlanks(main) && wordCount(main) <= 6) {
                return [{ en: main, enHtml: escapeHtml(main), vi: answer, point: section }];
            }
            return [];
        }

        // Điền vào chỗ trống.
        if (countBlanks(main)) {
            const filled = fillBlanks(stripHintTail(main), answer);
            if (!filled || hasVi(filled.text)) return [];
            return [{ en: filled.text, enHtml: filled.html, vi, point: label || section }];
        }

        // Gợi ý động từ nằm trong câu: "He stopped (smoke) because..." + "smoking",
        // "I (see) her before, but I (not meet) her..." + "have seen / did not meet".
        const inlineHints = main.match(/\([a-z][a-z\s']*\)/g) || [];
        if (inlineHints.length && !isFormula(answer) && answer.split(/\s+\/\s+/).every(part => wordCount(part) <= 4)) {
            const filled = fillBlanks(main.replace(/\([a-z][a-z\s']*\)/g, '___'), answer);
            if (filled && isEnglishSentence(filled.text)) {
                return [{ en: filled.text, enHtml: filled.html, vi, point: label || section }];
            }
            return [];
        }

        // Đáp án là nhãn / công thức tiếng Anh (Statement, linking, used to + V...): câu đề là ví dụ đúng.
        if (isEnglishSentence(main) && !isCorrection && (isFormula(answer) || (wordCount(answer) <= 6 && !/[.?!]$/.test(answer)))) {
            return [{ en: main, enHtml: escapeHtml(main), vi, point: joinLabel(label || section, answer) }];
        }

        return [];
    }

    // "Unless" + "Unless = if not" → "Unless = if not"; "Third conditional" + "Third conditional" → một lần.
    function joinLabel(label, answer) {
        if (!label) return answer;
        const a = normalize(answer);
        const l = normalize(label);
        if (a.includes(l)) return answer;
        if (l.includes(a)) return label;
        return `${label}: ${answer}`;
    }

    function practiceEntries(practice) {
        const entries = [];
        (practice.sections || []).forEach(section => {
            if (Array.isArray(section.items)) {
                section.items.forEach(item => entries.push([item.prompt || item.question || '', item.answer || '', section.title]));
            } else if (Array.isArray(section.questions)) {
                section.questions.forEach((question, index) => entries.push([question, (section.answers || [])[index] || '', section.title]));
            }
        });
        return entries;
    }

    // ---------- Ghép tất cả ----------
    function buildExampleRows(data) {
        const components = data.components || {};
        const translate = data.translate || {};
        const quiz = data.quiz || [];
        const practice = data.practice || {};
        const categoryOrder = Object.keys(CATEGORY_META);

        const quizByTopic = {};
        quiz.forEach(question => {
            (quizByTopic[question.component] = quizByTopic[question.component] || []).push(question);
        });

        const topics = Object.entries(components)
            .filter(([, component]) => categoryOrder.includes(component.category))
            .sort((a, b) => categoryOrder.indexOf(a[1].category) - categoryOrder.indexOf(b[1].category));

        const rows = [];
        topics.forEach(([id, component]) => {
            const seen = new Map();
            const push = (source, row) => {
                const key = normalize(row.en).replace(/[^a-z0-9]+/g, ' ').trim();
                if (!key) return;
                if (seen.has(key)) {
                    const existing = seen.get(key);
                    if (!existing.vi && row.vi) existing.vi = row.vi;
                    return;
                }
                const entry = {
                    topicId: id,
                    topicTitle: cleanTopicTitle(component.title),
                    topicIcon: component.icon || '📘',
                    category: component.category,
                    source,
                    en: row.en,
                    enHtml: row.enHtml,
                    vi: row.vi || '',
                    point: row.point || ''
                };
                seen.set(key, entry);
                rows.push(entry);
            };

            const translation = translate[id];
            if (translation && Array.isArray(translation.items)) {
                translation.items.forEach(item => {
                    const en = stripHtml(item.en);
                    if (en) push('translate', { en, enHtml: escapeHtml(en), vi: stripHtml(item.vi), point: stripHtml(item.point) });
                });
            }

            (quizByTopic[id] || []).forEach(question => rowsFromQuiz(question).forEach(row => push('quiz', row)));

            if (practice[id]) {
                practiceEntries(practice[id]).forEach(([prompt, answer, title]) => {
                    rowsFromPractice(prompt, answer, title).forEach(row => push('practice', row));
                });
            }
        });

        rows.forEach(row => {
            row.search = normalize([row.en, row.vi, row.point, row.topicTitle].join(' '));
        });
        return rows;
    }

    // sources: các biến dữ liệu của module (grammarFoundationsData, grammarViTranslateData...).
    function collectData(sources) {
        const components = Object.assign({},
            sources.grammarFoundationsData,
            sources.grammarTensesData,
            sources.grammarPronunciationData,
            sources.grammarPatternsData,
            sources.grammarStructuresData,
            sources.grammarMistakesData,
            sources.grammarSupplementsData,
            sources.grammarExtrasData,
            sources.grammarComprehensiveData
        );
        return {
            components,
            translate: sources.grammarViTranslateData || {},
            quiz: sources.grammarExerciseBank || [],
            practice: sources.grammarPracticeData || {}
        };
    }

    root.GrammarExamples = { buildExampleRows, collectData, CATEGORY_META, SOURCE_META };

    // ---------- Giao diện ----------
    if (typeof document === 'undefined') return;

    function initPage() {
        /* global grammarFoundationsData, grammarTensesData, grammarPronunciationData, grammarPatternsData,
           grammarStructuresData, grammarMistakesData, grammarSupplementsData, grammarExtrasData,
           grammarComprehensiveData, grammarViTranslateData, grammarExerciseBank, grammarPracticeData */
        const rows = buildExampleRows(collectData({
            grammarFoundationsData: typeof grammarFoundationsData !== 'undefined' ? grammarFoundationsData : undefined,
            grammarTensesData: typeof grammarTensesData !== 'undefined' ? grammarTensesData : undefined,
            grammarPronunciationData: typeof grammarPronunciationData !== 'undefined' ? grammarPronunciationData : undefined,
            grammarPatternsData: typeof grammarPatternsData !== 'undefined' ? grammarPatternsData : undefined,
            grammarStructuresData: typeof grammarStructuresData !== 'undefined' ? grammarStructuresData : undefined,
            grammarMistakesData: typeof grammarMistakesData !== 'undefined' ? grammarMistakesData : undefined,
            grammarSupplementsData: typeof grammarSupplementsData !== 'undefined' ? grammarSupplementsData : undefined,
            grammarExtrasData: typeof grammarExtrasData !== 'undefined' ? grammarExtrasData : undefined,
            grammarComprehensiveData: typeof grammarComprehensiveData !== 'undefined' ? grammarComprehensiveData : undefined,
            grammarViTranslateData: typeof grammarViTranslateData !== 'undefined' ? grammarViTranslateData : undefined,
            grammarExerciseBank: typeof grammarExerciseBank !== 'undefined' ? grammarExerciseBank : undefined,
            grammarPracticeData: typeof grammarPracticeData !== 'undefined' ? grammarPracticeData : undefined
        }));

        const el = id => document.getElementById(id);
        const elements = {
            search: el('exampleSearch'),
            clear: el('clearSearch'),
            categoryChips: el('categoryChips'),
            topicSelect: el('topicSelect'),
            sourceChips: el('sourceChips'),
            count: el('resultCount'),
            total: el('totalBadge'),
            tbody: el('examplesBody'),
            empty: el('emptyState'),
            back: el('backBtn')
        };

        const state = { query: '', category: 'all', topic: '', source: 'all' };

        const topicsInOrder = [];
        const topicSeen = new Set();
        rows.forEach(row => {
            if (topicSeen.has(row.topicId)) return;
            topicSeen.add(row.topicId);
            topicsInOrder.push(row);
        });

        elements.total.textContent = `${rows.length.toLocaleString('vi-VN')} câu · ${topicsInOrder.length} chủ điểm`;

        const countBy = (list, key) => list.reduce((acc, row) => {
            acc[row[key]] = (acc[row[key]] || 0) + 1;
            return acc;
        }, {});

        const categoryCounts = countBy(rows, 'category');
        elements.categoryChips.innerHTML = [
            `<button type="button" class="chip active" data-category="all">Tất cả <span>${rows.length}</span></button>`,
            ...Object.entries(CATEGORY_META)
                .filter(([key]) => categoryCounts[key])
                .map(([key, meta]) => `<button type="button" class="chip" data-category="${key}">${meta.short} <span>${categoryCounts[key]}</span></button>`)
        ].join('');

        const sourceCounts = countBy(rows, 'source');
        elements.sourceChips.innerHTML = [
            '<button type="button" class="chip active" data-source="all">Mọi nguồn</button>',
            ...Object.entries(SOURCE_META)
                .filter(([key]) => sourceCounts[key])
                .map(([key, meta]) => `<button type="button" class="chip" data-source="${key}">${meta.label} <span>${sourceCounts[key]}</span></button>`)
        ].join('');

        function renderTopicOptions() {
            const options = topicsInOrder.filter(row => state.category === 'all' || row.category === state.category);
            if (state.topic && !options.some(row => row.topicId === state.topic)) state.topic = '';
            elements.topicSelect.innerHTML = [
                `<option value="">Tất cả chủ điểm (${options.length})</option>`,
                ...options.map(row => `<option value="${escapeHtml(row.topicId)}"${row.topicId === state.topic ? ' selected' : ''}>${escapeHtml(row.topicIcon)} ${escapeHtml(row.topicTitle)}</option>`)
            ].join('');
        }

        function filteredRows() {
            const terms = normalize(state.query).split(' ').filter(Boolean);
            return rows.filter(row =>
                (state.category === 'all' || row.category === state.category)
                && (!state.topic || row.topicId === state.topic)
                && (state.source === 'all' || row.source === state.source)
                && terms.every(term => row.search.includes(term))
            );
        }

        function render() {
            const list = filteredRows();
            elements.count.textContent = `Hiển thị ${list.length.toLocaleString('vi-VN')} / ${rows.length.toLocaleString('vi-VN')} câu`;
            elements.empty.hidden = list.length > 0;

            const topicSizes = countBy(list, 'topicId');
            const categorySizes = countBy(list, 'category');
            let html = '';
            let lastCategory = null;
            let lastTopic = null;

            list.forEach(row => {
                if (row.category !== lastCategory) {
                    lastCategory = row.category;
                    const meta = CATEGORY_META[row.category];
                    html += `<tr class="category-row"><th colspan="3" scope="colgroup">${meta.title}<span class="category-count">${categorySizes[row.category]} câu</span></th></tr>`;
                }

                const startsTopic = row.topicId !== lastTopic;
                lastTopic = row.topicId;
                const topicCell = startsTopic
                    ? `<th class="col-topic" scope="rowgroup" rowspan="${topicSizes[row.topicId]}"><div class="topic-sticky"><span class="topic-icon">${escapeHtml(row.topicIcon)}</span><span class="topic-title">${escapeHtml(row.topicTitle)}</span><span class="topic-count">${topicSizes[row.topicId]} câu</span></div></th>`
                    : '';

                html += `<tr class="${startsTopic ? 'topic-start' : ''}">
                    ${topicCell}
                    <td class="col-en"><div class="en-text" lang="en">${row.enHtml}</div><div class="en-meta"><span class="source-tag source-${row.source}">${SOURCE_META[row.source].tag}</span>${row.point ? `<span class="en-point">${escapeHtml(row.point)}</span>` : ''}</div></td>
                    <td class="col-vi${row.vi ? '' : ' is-empty'}">${row.vi ? escapeHtml(row.vi) : '<span class="vi-missing" title="Đề bài không có bản dịch">—</span>'}</td>
                </tr>`;
            });

            elements.tbody.innerHTML = html;
        }

        let searchTimer = null;
        elements.search.addEventListener('input', () => {
            clearTimeout(searchTimer);
            searchTimer = setTimeout(() => {
                state.query = elements.search.value;
                render();
            }, 150);
        });

        elements.clear.addEventListener('click', () => {
            elements.search.value = '';
            state.query = '';
            render();
            elements.search.focus();
        });

        elements.categoryChips.addEventListener('click', event => {
            const chip = event.target.closest('[data-category]');
            if (!chip) return;
            state.category = chip.dataset.category;
            elements.categoryChips.querySelectorAll('.chip').forEach(item => item.classList.toggle('active', item === chip));
            renderTopicOptions();
            render();
        });

        elements.sourceChips.addEventListener('click', event => {
            const chip = event.target.closest('[data-source]');
            if (!chip) return;
            state.source = chip.dataset.source;
            elements.sourceChips.querySelectorAll('.chip').forEach(item => item.classList.toggle('active', item === chip));
            render();
        });

        elements.topicSelect.addEventListener('change', () => {
            state.topic = elements.topicSelect.value;
            render();
        });

        // Quay về trang ngữ pháp: nếu vừa đi từ đó sang thì dùng history.back() để giữ nguyên vị trí cuộn.
        elements.back.addEventListener('click', event => {
            try {
                const ref = document.referrer ? new URL(document.referrer) : null;
                if (ref && ref.origin === location.origin && /\/english-grammar(\/|\/english-grammar\.html)?$/.test(ref.pathname) && history.length > 1) {
                    event.preventDefault();
                    history.back();
                }
            } catch (error) { /* dùng href mặc định */ }
        });

        renderTopicOptions();
        render();
    }

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initPage);
    else initPage();
})(typeof window !== 'undefined' ? window : globalThis);
