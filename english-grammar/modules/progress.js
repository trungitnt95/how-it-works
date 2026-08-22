// English Grammar - Progress & Spaced Repetition Store
// Lưu tiến độ học trong localStorage: chủ điểm đã thuộc, chủ điểm đánh dấu,
// lịch ôn theo hộp Leitner cho từng câu hỏi, streak và lịch sử luyện tập.
const grammarProgress = (function () {
    'use strict';

    const KEY = 'englishGrammarProgressV1';
    const DAY = 24 * 60 * 60 * 1000;
    // Hộp Leitner: sai → về hộp 1 (ôn ngay), đúng → lên hộp kế tiếp với khoảng cách xa dần.
    const INTERVALS = [0, 1, 3, 7, 21, 60];

    const empty = () => ({
        learned: {},
        bookmarks: {},
        srs: {},
        topicStats: {},
        sessions: [],
        streak: { count: 0, lastDay: null }
    });

    let data = load();

    function load() {
        try {
            const raw = localStorage.getItem(KEY);
            if (!raw) return empty();
            return Object.assign(empty(), JSON.parse(raw));
        } catch (error) {
            return empty();
        }
    }

    function save() {
        try {
            localStorage.setItem(KEY, JSON.stringify(data));
        } catch (error) {
            /* hết dung lượng hoặc chế độ riêng tư: bỏ qua, app vẫn chạy */
        }
    }

    function today() {
        const now = new Date();
        return `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
    }

    function toggle(bucket, id) {
        if (data[bucket][id]) {
            delete data[bucket][id];
        } else {
            data[bucket][id] = Date.now();
        }
        save();
        return Boolean(data[bucket][id]);
    }

    function recordAnswer(question, isCorrect) {
        const entry = data.srs[question.id] || { box: 0, due: 0, right: 0, wrong: 0 };

        if (isCorrect) {
            entry.right += 1;
            entry.box = Math.min(entry.box + 1, INTERVALS.length - 1);
        } else {
            entry.wrong += 1;
            entry.box = 0;
        }

        entry.due = Date.now() + INTERVALS[entry.box] * DAY;
        entry.seen = Date.now();
        data.srs[question.id] = entry;

        if (question.component) {
            const stat = data.topicStats[question.component] || { right: 0, wrong: 0 };
            stat[isCorrect ? 'right' : 'wrong'] += 1;
            data.topicStats[question.component] = stat;
        }

        save();
    }

    function finishSession(summary) {
        data.sessions.unshift(Object.assign({ at: Date.now() }, summary));
        data.sessions = data.sessions.slice(0, 30);

        const day = today();
        if (data.streak.lastDay !== day) {
            const yesterday = new Date(Date.now() - DAY);
            const yKey = `${yesterday.getFullYear()}-${yesterday.getMonth() + 1}-${yesterday.getDate()}`;
            data.streak.count = data.streak.lastDay === yKey ? data.streak.count + 1 : 1;
            data.streak.lastDay = day;
        }

        save();
        return data.streak.count;
    }

    return {
        isLearned: id => Boolean(data.learned[id]),
        isBookmarked: id => Boolean(data.bookmarks[id]),
        toggleLearned: id => toggle('learned', id),
        toggleBookmark: id => toggle('bookmarks', id),
        learnedCount: () => Object.keys(data.learned).length,
        bookmarkCount: () => Object.keys(data.bookmarks).length,
        recordAnswer,
        finishSession,
        getStreak: () => data.streak.count,
        getSessions: () => data.sessions.slice(),
        getTopicStat: component => data.topicStats[component] || null,

        // Câu đến hạn ôn (đã trả lời ít nhất một lần và tới ngày ôn lại).
        dueQuestions(bank) {
            const now = Date.now();
            return bank.filter(question => {
                const entry = data.srs[question.id];
                return entry && entry.due <= now;
            });
        },

        // Câu từng trả lời sai và chưa lên được hộp cao — ưu tiên ôn trước.
        weakQuestions(bank) {
            return bank.filter(question => {
                const entry = data.srs[question.id];
                return entry && entry.wrong > 0 && entry.box < 3;
            });
        },

        masteryOf(question) {
            const entry = data.srs[question.id];
            return entry ? entry.box : 0;
        },

        reset() {
            data = empty();
            save();
        }
    };
})();

if (typeof window !== 'undefined') {
    window.grammarProgress = grammarProgress;
}
