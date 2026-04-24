(function(global) {
    'use strict';

    const CEFR_ORDER = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
    const CEFR_META = {
        A1: { code: 'A1', className: 'a1', badgeClass: 'badge-a1', icon: '🌱', label: 'A1', name: 'Starter', description: 'Xây nền câu cơ bản, từ loại, thì và câu hỏi đơn.' },
        A2: { code: 'A2', className: 'a2', badgeClass: 'badge-a2', icon: '🌿', label: 'A2', name: 'Elementary', description: 'Mở rộng thời gian, so sánh, giới từ và các mẫu dùng hằng ngày.' },
        B1: { code: 'B1', className: 'b1', badgeClass: 'badge-b1', icon: '🧭', label: 'B1', name: 'Threshold', description: 'Dùng được trong giao tiếp quen thuộc, nối ý và kiểm soát lỗi phổ biến.' },
        B2: { code: 'B2', className: 'b2', badgeClass: 'badge-b2', icon: '🚀', label: 'B2', name: 'Upper-Intermediate', description: 'Làm chủ cấu trúc phức, câu bị động, reported speech và writing rõ ràng.' },
        C1: { code: 'C1', className: 'c1', badgeClass: 'badge-c1', icon: '🎯', label: 'C1', name: 'Advanced', description: 'Xử lý tốt câu phức, sắc thái ngữ dụng, văn học thuật và diễn đạt linh hoạt.' },
        C2: { code: 'C2', className: 'c2', badgeClass: 'badge-c2', icon: '👑', label: 'C2', name: 'Mastery', description: 'Các hệ thống ngữ pháp tinh, hiếm, giàu sắc thái và gần mức tham chiếu.' }
    };

    const LEGACY_TO_CEFR = {
        beginner: 'A2',
        intermediate: 'B1',
        advanced: 'C1',
        basic: 'A2',
        mid: 'B1',
        adv: 'C1',
        mem: 'B2'
    };

    const COMPONENT_OVERRIDES = {
        'sentence-order': 'A1',
        'parts-of-speech': 'A1',
        'articles-determiners': 'A1',
        'pronouns-possessives': 'A1',
        'present-simple': 'A1',
        'yes-no-questions': 'A1',
        'wh-questions': 'A1',
        'ipa-overview': 'A1',
        'existential-there': 'A1',
        'dummy-it': 'A2',
        'adjectives-adverbs': 'A2',
        'sentence-types': 'A2',
        'present-continuous': 'A2',
        'past-simple': 'A2',
        'future-simple': 'A2',
        'question-forms': 'A2',
        'prepositions': 'A2',
        'countable-uncountable': 'A2',
        'quantifiers': 'A2',
        'quantifiers-deep': 'A2',
        'demonstratives-deep': 'A2',
        'have-got': 'A1',
        'will-vs-going-to': 'A2',
        'capitalization-rules': 'A1',
        'apostrophe-rules': 'A2',
        'numbers-dates': 'A2',
        'punctuation-deep': 'A2',
        'subject-verb-agreement': 'B1',
        'comparisons': 'B1',
        'conjunctions': 'B1',
        'modal-verbs': 'B1',
        'present-perfect': 'B1',
        'past-continuous': 'B1',
        'present-perfect-continuous': 'B1',
        'tag-questions': 'B1',
        'discourse-markers': 'B1',
        'used-to': 'B1',
        'stative-verbs': 'B1',
        'direct-indirect-objects': 'B1',
        'phrasal-prepositions': 'B1',
        'prepositional-phrases': 'B1',
        'indefinite-pronouns': 'B1',
        'compound-nouns-possessives': 'B1',
        'reflexive-reciprocal': 'B1',
        'word-formation': 'B1',
        'word-stress': 'B1',
        'auxiliary-system': 'A1',
        'sentence-patterns-complements': 'A1',
        'infinitive-purposes': 'A2',
        'verb-types-transitivity': 'B1',
        'subject-complement-object-complement': 'B1',
        'adjective-complements': 'B1',
        'adverb-types-position': 'B1',
        'preposition-system': 'B1',
        'participle-adjectives': 'B1',
        'countable-vs-uncountable': 'A2',
        'relative-clauses': 'B2',
        'reported-speech': 'B2',
        'passive-voice': 'B2',
        'noun-clauses': 'B2',
        'conditionals': 'B2',
        'gerunds-infinitives': 'B2',
        'past-perfect': 'B2',
        'past-perfect-continuous': 'B2',
        'future-continuous': 'B2',
        'future-perfect': 'B2',
        'embedded-questions': 'B2',
        'negation-patterns': 'B2',
        'distributives': 'B2',
        'adjective-order': 'B2',
        'time-prepositions-deep': 'B2',
        'semi-modals': 'B2',
        'fragments-runons': 'B2',
        'sentence-stress': 'B2',
        'intonation-patterns': 'B2',
        'do-emphasis': 'B2',
        'causative-have-get': 'B2',
        'comparative-correlatives': 'B2',
        'wish-if-only': 'C1',
        'inversion': 'C1',
        'participle-clauses': 'C1',
        'parallel-structure': 'C1',
        'sequence-of-tenses': 'C1',
        'narrative-present': 'C1',
        'hedges-boosters': 'C1',
        'politeness-indirectness': 'C1',
        'substitution-ellipsis': 'C1',
        'information-flow': 'C1',
        'modal-perfect': 'C1',
        'academic-style-grammar': 'C1',
        'connected-speech': 'C1',
        'reduced-relatives': 'C1',
        'reducing-adverbial-clauses': 'C1',
        'subjunctive': 'C1',
        'anaphoric-reference': 'C1',
        'apposition': 'C1',
        'gender-neutral-grammar': 'C1',
        'cleft-sentences': 'C1',
        'determiner-system': 'C2',
        'advanced-article-system': 'C2',
        'noun-phrase-architecture': 'C2',
        'adverb-placement-focus': 'C2',
        'advanced-adverbial-clauses': 'C2',
        'noun-complement-clauses': 'C2',
        'advanced-relative-clauses': 'C2',
        'verb-complementation': 'C2',
        'clause-system': 'C2',
        'advanced-agreement': 'C2',
        'spoken-grammar': 'C2',
        'semantic-prosody': 'C2',
        'complex-inversion': 'C2',
        'archaisms-modern-grammar': 'C2',
        'grammar-registers': 'C2',
        'fronting': 'C2'
    };

    const TITLE_OVERRIDES = {
        'loai 0': 'A2',
        'loai 1': 'A2',
        'loai 2': 'B1',
        'loai 3': 'B2',
        'uoc tuong lai': 'B1',
        'uoc hien tai': 'B2',
        'uoc qua khu': 'C1',
        'muc dich': 'A2',
        'ket qua': 'B1',
        'thoi gian': 'A2',
        'vi tri': 'A2'
    };

    const KEYWORD_RULES = [
        { pattern: /(spoken grammar|verb complementation|control vs raising|advanced article|noun phrase|determiner system|adverb placement|noun complement clause|advanced relative|clause system|small clause|finite non finite|semantic prosody|archaism|complex inversion|mastery)/, level: 'C2' },
        { pattern: /(subjunctive|cleft|pseudo[- ]?cleft|mixed|inversion|nominalization|academic|reduced relative|reducing adverbial|participle clause|connected speech|modal perfect|narrative|sequence of tenses|hedges|politeness|information flow|ellipsis|fronting|register)/, level: 'C1' },
        { pattern: /(reported speech|relative clause|passive|conditionals?|embedded|indirect question|semi-modal|stative|future perfect|past perfect|gerund|infinitive|tag question|adjective order|countable|uncountable|quantifier|direct and indirect objects|word stress|sentence stress|intonation)/, level: 'B2' },
        { pattern: /(present perfect|modal verbs?|comparisons?|conjunctions?|used to|phrasal verbs?|verb patterns?|subject[- ]verb agreement|prepositional phrase|demonstratives|indefinite pronouns?|compound nouns?|reflexive|reciprocal)/, level: 'B1' },
        { pattern: /(present continuous|past simple|future simple|question forms?|prepositions?|adjectives?|adverbs?|there is|there are|dummy it|spelling|numbers|dates|capitalization|apostrophe|will vs be going to)/, level: 'A2' },
        { pattern: /(sentence order|parts of speech|articles?|pronouns?|yes\/no questions?|wh-questions|have got|ipa overview|be verb|basic)/, level: 'A1' }
    ];

    function normalizeText(text) {
        return String(text || '')
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/đ/g, 'd')
            .replace(/Đ/g, 'D')
            .replace(/[^a-z0-9]+/g, ' ')
            .trim();
    }

    function getMeta(code) {
        return CEFR_META[code] || CEFR_META.B1;
    }

    function getRank(code) {
        return CEFR_ORDER.indexOf(code);
    }

    function fromLegacy(level) {
        return LEGACY_TO_CEFR[normalizeText(level)] || 'B1';
    }

    function normalizeLevel(level) {
        const normalized = String(level || '').toUpperCase();
        if (CEFR_META[normalized]) return normalized;
        return fromLegacy(level);
    }

    function resolveTitle(title, legacyLevel, fallbackId) {
        const normalizedTitle = normalizeText(title);
        const normalizedId = normalizeText(fallbackId).replace(/ /g, '-');

        if (normalizedId && COMPONENT_OVERRIDES[normalizedId]) {
            return getMeta(COMPONENT_OVERRIDES[normalizedId]);
        }

        if (TITLE_OVERRIDES[normalizedTitle]) {
            return getMeta(TITLE_OVERRIDES[normalizedTitle]);
        }

        for (const rule of KEYWORD_RULES) {
            if (rule.pattern.test(normalizedTitle)) {
                return getMeta(rule.level);
            }
        }

        return getMeta(fromLegacy(legacyLevel));
    }

    function resolveComponent(id, component) {
        const normalizedId = normalizeText(id).replace(/ /g, '-');
        if (COMPONENT_OVERRIDES[normalizedId]) {
            return getMeta(COMPONENT_OVERRIDES[normalizedId]);
        }

        if (component && component.cefr) {
            return getMeta(normalizeLevel(component.cefr));
        }

        return resolveTitle(component && component.title, component && component.level, normalizedId);
    }

    function resolveAccordion(title, legacyLevel, fallbackId) {
        return resolveTitle([title, fallbackId].filter(Boolean).join(' '), legacyLevel, fallbackId);
    }

    global.englishGrammarCefr = {
        order: CEFR_ORDER,
        meta: CEFR_META,
        normalizeText,
        getMeta,
        getRank,
        normalizeLevel,
        fromLegacy,
        resolveTitle,
        resolveComponent,
        resolveAccordion
    };
})(window);
