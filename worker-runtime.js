(function () {
    if (window.__HIW_WORKER_RUNTIME_INITIALIZED__) {
        return;
    }
    window.__HIW_WORKER_RUNTIME_INITIALIZED__ = true;

    const WORKER_CONFIG_KEY = 'backgroundWorkerJobsConfig';
    const WORKER_HISTORY_KEY_PREFIX = 'backgroundWorkerConversation';
    const CUSTOM_PROMPTS_KEY = 'hiwWorkerCustomPrompts';
    const COPILOT_STORAGE_KEYS = { token: 'hiw_copilot_token', model: 'hiw_copilot_model' };
    const GITHUB_MODELS_ENDPOINT = 'https://models.github.ai/inference/chat/completions';
    const GITHUB_API_VERSION = '2026-03-10';
    const DEFAULT_COPILOT_MODEL = 'gpt-4.1';
    const AVAILABLE_MODELS = [
        { label: 'gpt-4o', ids: ['openai/gpt-4o'] },
        { label: 'gpt-4.1', ids: ['openai/gpt-4.1'] },
        { label: 'gpt-5-mini', ids: ['openai/gpt-5-mini'] }
    ];
    const DEFAULT_WORKER_CONTENTS = [
        { id: 'exercise', label: 'Bài tập', description: 'Tạo 1 câu trắc nghiệm ôn nhanh theo chủ đề đã chọn.' }
    ];
    const ENGLISH_WORKER_CONTENTS = [
        { id: 'theory', label: 'Lý thuyết', description: 'Câu hỏi khái niệm và cấu trúc ngữ pháp bằng tiếng Việt.' },
        { id: 'exercise', label: 'Bài tập', description: 'Điền từ, chọn đáp án, luyện phản xạ tiếng Anh.' },
        { id: 'vocabulary', label: 'Từ vựng', description: 'Hỏi nghĩa và dùng từ tiếng Anh thông dụng trong đời sống.' }
    ];
    const TOPIC_SPECS = [
        { id: 'vietnamese-grammar', label: 'Ngữ Pháp Tiếng Việt', subtitle: 'Hiểu cấu trúc tiếng Việt từ tiếng, từ đến câu' },
        { id: 'vietnam-state', label: 'Bộ Máy Nhà Nước Việt Nam', subtitle: 'Hiểu hệ thống và chức năng từng cơ quan' },
        { id: 'money', label: 'Tiền', subtitle: 'Hiểu hết về tiền tệ và hệ thống tài chính' },
        { id: 'power', label: 'Quyền Lực', subtitle: 'Hiểu hết về quyền lực và các hình thái xã hội' },
        { id: 'decision', label: 'Quyết Định', subtitle: 'Hiểu hết về đưa ra quyết định' },
        { id: 'game-theory', label: 'Lý Thuyết Trò Chơi', subtitle: 'Tư duy chiến lược khi nhiều bên cùng ra quyết định' },
        { id: 'trading', label: 'Trading', subtitle: 'Hiểu hết về giao dịch tài chính' },
        { id: 'psychology', label: 'Tâm Lý', subtitle: 'Hiểu hết về các kiểu người và lòng người' },
        { id: 'fengshui', label: 'Phong Thủy', subtitle: 'Hiểu hết về phong thủy và năng lượng' },
        { id: 'marketing', label: 'Marketing', subtitle: 'Từ 4P đến Digital Marketing, Growth Hacking' },
        { id: 'sales', label: 'Sales', subtitle: 'Từ tâm lý bán hàng đến chốt deal chuyên nghiệp' },
        { id: 'affiliate', label: 'Affiliate Marketing', subtitle: 'Từ cơ chế hoa hồng đến xây dựng thu nhập thụ động' },
        { id: 'business', label: 'Kinh Doanh', subtitle: 'Từ ý tưởng đến vận hành — hiểu toàn bộ cơ chế doanh nghiệp' },
        { id: 'reverse-thinking', label: 'Tư Duy Ngược', subtitle: 'Nghĩ ngược để tránh sai lầm — từ Munger đến Stoicism' },
        { id: 'philosophy', label: 'Triết Học Mác-Lênin', subtitle: 'Môn học nền tảng cho sinh viên Việt Nam' },
        { id: 'earning-models', label: 'Cách Kiếm Tiền', subtitle: 'Từ cổ đại đến AI — hệ thống mọi mô hình kiếm tiền' },
        { id: 'design-patterns', label: 'Design Patterns', subtitle: 'Hiểu hết về các mẫu thiết kế phần mềm' },
        { id: 'beauty', label: 'Làm Đẹp', subtitle: 'Hiểu hết về chăm sóc da, trang điểm và làm đẹp' },
        { id: 'management', label: 'Quản Lý', subtitle: 'Hiểu hết về quản lý và lãnh đạo' },
        { id: 'ai-for-everyone', label: 'AI', subtitle: 'AI cho mọi người và developer' },
        { id: 'practical-math', label: 'Toán Học Thực Tế', subtitle: 'Toán học ứng dụng trong đời sống hàng ngày' },
        { id: 'english-grammar', label: 'Ngữ Pháp Tiếng Anh', subtitle: 'Hiểu câu tiếng Anh từ nền tảng đến cấu trúc nâng cao' },
        { id: 'solution-architect', label: 'Kiến Trúc Hệ Thống', subtitle: 'Hiểu hết về thiết kế kiến trúc phần mềm' },
        { id: 'probability', label: 'Xác Suất Thống Kê', subtitle: 'Hiểu hết về xác suất và thống kê' },
        { id: 'problem-solving', label: 'Giải Quyết Vấn Đề', subtitle: 'Hiểu hết về kỹ năng giải quyết vấn đề' },
        { id: 'quality-management', label: 'Quản Lý Chất Lượng', subtitle: 'Hiểu hết về hệ thống quản lý chất lượng' },
        { id: 'how-world-works', label: 'Thế Giới Vận Hành', subtitle: 'Hiểu hết về cách thế giới hoạt động' }
    ];
    const WORKER_TYPE_ALIASES = { english: 'english-grammar' };
    const WORKER_TYPE_OVERRIDES = {
        'english-grammar': {
            systemPrompt: 'Bạn là chuyên gia tạo bài tập ngữ pháp tiếng Anh. Mỗi câu hỏi phải thực tế, dùng từ thường gặp, và giải thích bằng tiếng Việt dễ hiểu.',
            contents: ENGLISH_WORKER_CONTENTS,
            prompts: {
                theory: 'Tạo 1 câu hỏi lý thuyết ngữ pháp tiếng Anh chất lượng cao. Câu hỏi và đáp án viết bằng tiếng Việt, hỏi về kiến thức ngữ pháp. Đáp án sai phải là lỗi PHỔ BIẾN. Ví dụ tiếng Anh nếu cần phải ngắn rõ ràng. Trả về JSON: {"question":"...","choices":["A","B","C","D"],"answerIndex":<0-3>,"explanation":"Giải thích tại sao đáp án đó đúng..."}',
                exercise: 'Tạo 1 BÀI TẬP NGỮPHÁP tiếng Anh thực tế với 4 lựa chọn. Chọn ngữ pháp khác biệt: tenses, conditionals, comparatives, articles, prepositions, passive voice, gerunds vs infinitives, relative pronouns, modal verbs, question tags, reported speech. Từ thông dụng, tình huống có thực, câu tự nhiên. Giải thích tại sao và chỉ ra quy tắc. Trả về JSON: {"question":"...","choices":["A","B","C","D"],"answerIndex":<0-3>,"explanation":"..."}',
                vocabulary: 'Tạo 1 CÂU HỎI TỪ VỰNG tiếng Anh với 4 lựa chọn. Câu hỏi bằng tiếng Việt, từ/cụm từ hỏi = tiếng Anh thông dụng. Lựa chọn = từ tiếng Anh khác nhau. Đáp án sai gây nhầm lẫn (homophone, similar meaning). Giải thích cách dùng. Trả về JSON: {"question":"...","choices":["A","B","C","D"],"answerIndex":<0-3>,"explanation":"..."}'
            },
            fallbacks: {
                theory: {
                    question: 'Câu "I have been working here for 5 years" sử dụng thì gì?',
                    choices: ['Hiện tại hoàn thành đơn', 'Hiện tại hoàn thành tiếp diễn', 'Hiện tại tiếp diễn', 'Quá khứ hoàn thành'],
                    answerIndex: 1,
                    explanation: 'Dùng HIỆN TẠI HOÀN THÀNH TIẾP DIỄN: hành động từ quá khứ, kéo dài đến hiện tại, vẫn tiếp tục ("for 5 years" = khoảng thời gian).'
                },
                exercise: {
                    question: 'If you ___ earlier, you wouldn\'t have missed the train.',
                    choices: ['leave', 'left', 'had left', 'would leave'],
                    answerIndex: 2,
                    explanation: 'CÂU ĐIỀU KIỆN LOẠI 3: "had left" (quá khứ hoàn thành) trong IF clause để diễn tả điều không có thực trong quá khứ.'
                },
                vocabulary: {
                    question: 'Từ tiếng Anh nào có nghĩa là "chì chóe, lắp bắp"?',
                    choices: ['stutter', 'whisper', 'mutter', 'yell'],
                    answerIndex: 0,
                    explanation: '"Stutter" = nói lắp bắp. "Whisper" = nói thầm, "mutter" = lầm bầm, "yell" = hét.'
                }
            }
        },
        money: {
            systemPrompt: 'Bạn là chuyên gia tạo bài tập về tiền tệ và tài chính. Mỗi câu hỏi thực tế, liên quan đến cuộc sống, giải thích rõ lý do. Tránh quá học thuật.',
            prompts: {
                exercise: 'Tạo 1 BÀI TẬP trắc nghiệm với 4 lựa chọn về tiền bạc tài chính. TRÁNH LẶP LẠI. Chọn khía cạnh KHÁC BIỆT: lần này KHÁI NIỆM, lần khác ÁP DỤNG, lần khác CHIẾN LƯỢC. Tình huống tự nhiên, đáp án sai phải rõ ràng. Trả về JSON: {"question":"...","choices":["A","B","C","D"],"answerIndex":<0-3>,"explanation":"Giải thích lý do..."}'
            },
            fallbacks: {
                exercise: {
                    question: 'Khi lạm phát tăng cao, nhóm nào CHỊU LỖ NHẤT trước?',
                    choices: ['Người có lương cố định', 'Người có tài sản bất động sản', 'Chủ doanh nghiệp có đòn bẩy', 'Người gửi tiền tiết kiệm'],
                    answerIndex: 0,
                    explanation: 'Lạm phát tăng = chi tiêu tốn tiền hơn, lương CỐ ĐỊNH không thay đổi nên sức mua GIẢM. Tài sản bất động sản và doanh nghiệp có thể TĂNG GIÁ theo lạm phát.'
                }
            }
        }
    };

    const runtimeScript = document.currentScript || Array.from(document.querySelectorAll('script[src]')).reverse().find((script) => script.src.includes('worker-runtime.js'));
    const runtimeUrl = runtimeScript?.src ? new URL(runtimeScript.src, window.location.href) : new URL('./worker-runtime.js', window.location.href);
    const MIN_JOB_INTERVAL_MINUTES = 5;
    const RUNTIME_LEASE_KEY = 'hiwWorkerRuntimeLease';
    const runtimeTabId = `tab_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
    const RUNTIME_LEASE_MS = 45000;
    let backgroundTimer = null;
    let runtimeLeaseHeartbeat = null;
    let serviceWorkerRegistrationPromise = null;

    ensureStyles();
    const toastStack = ensureToastStack();

    const WORKER_TYPES = Object.fromEntries(TOPIC_SPECS.map((topic) => {
        const override = WORKER_TYPE_OVERRIDES[topic.id] || {};
        const contents = override.contents || DEFAULT_WORKER_CONTENTS;
        return [topic.id, {
            label: topic.label,
            notificationTitle: 'How It Works',
            systemPrompt: override.systemPrompt || `Bạn là trợ lý tạo bài tập ngắn, rõ ràng, đúng trọng tâm cho chủ đề "${topic.label}".`,
            contents,
            prompts: override.prompts || { exercise: buildGenericExercisePrompt(topic.label, topic.subtitle) },
            fallbacks: override.fallbacks || { exercise: buildGenericFallback(topic.label, topic.subtitle) }
        }];
    }));

    startRuntime();

    function ensureStyles() {
        if (document.getElementById('hiw-worker-runtime-styles')) return;
        const style = document.createElement('style');
        style.id = 'hiw-worker-runtime-styles';
        style.textContent = `
            .hiw-worker-toast-stack {
                position: fixed;
                right: 1rem;
                top: 1rem;
                z-index: 10000;
                display: flex;
                flex-direction: column;
                gap: 0.75rem;
                max-width: min(420px, calc(100vw - 2rem));
            }
            .hiw-worker-toast {
                border-radius: 14px;
                padding: 0.95rem 1rem;
                background: rgba(8,16,34,0.94);
                border: 1px solid rgba(255,255,255,0.12);
                box-shadow: 0 16px 40px rgba(0,0,0,0.35);
                color: #fff;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            }
            .hiw-worker-toast strong { display: block; margin-bottom: 0.45rem; }
            .hiw-worker-toast p {
                font-size: 0.9rem;
                line-height: 1.45;
                color: rgba(255,255,255,0.86);
                white-space: pre-line;
                margin: 0;
            }
            .hiw-worker-toast-actions {
                display: flex;
                gap: 0.5rem;
                margin-top: 0.75rem;
                flex-wrap: wrap;
            }
            .hiw-worker-toast-actions button {
                border: none;
                border-radius: 999px;
                padding: 0.45rem 0.8rem;
                cursor: pointer;
                background: rgba(255,255,255,0.12);
                color: #fff;
            }
        `;
        document.head.appendChild(style);
    }

    function ensureToastStack() {
        let stack = document.getElementById('hiwWorkerRuntimeToastStack');
        if (!stack) {
            stack = document.createElement('div');
            stack.id = 'hiwWorkerRuntimeToastStack';
            stack.className = 'hiw-worker-toast-stack';
            stack.setAttribute('aria-live', 'polite');
            document.body.appendChild(stack);
        }
        return stack;
    }

    function startRuntime() {
        ensureServiceWorkerRegistration().catch(() => {});
        startBackgroundWorker();
        window.addEventListener('beforeunload', releaseRuntimeLeadership);
        document.addEventListener('visibilitychange', () => {
            if (document.visibilityState === 'visible' && maintainRuntimeLeadership()) {
                runAllEnabledJobs().catch(logRuntimeError);
            }
        });
        window.addEventListener('storage', (event) => {
            if (event.key === WORKER_CONFIG_KEY && maintainRuntimeLeadership()) {
                startBackgroundWorker();
            }
        });
    }

    function buildGenericFallback(label, subtitle) {
        return {
            question: `Trong chủ đề "${label}", mục tiêu của bài tập nhanh là gì?`,
            choices: ['Bỏ qua ngữ cảnh và chọn ngẫu nhiên', `Ôn lại ý chính của ${subtitle || label}`, 'Chỉ học thuộc đáp án mà không cần hiểu', 'Không cần xem giải thích sau khi làm'],
            answerIndex: 1,
            explanation: `Worker của chủ đề "${label}" được tạo để ôn nhanh các ý chính và hiểu lại ngữ cảnh của chủ đề.`
        };
    }

    function randomAnswerIndex() {
        return Math.floor(Math.random() * 4);
    }

    function resolveAnswerIndex(answerIndex) {
        const parsedIndex = Number(answerIndex);
        if (Number.isInteger(parsedIndex) && parsedIndex >= 0 && parsedIndex <= 3) return parsedIndex;
        return randomAnswerIndex();
    }

    function normalizeIntervalMinutes(value) {
        return Math.max(MIN_JOB_INTERVAL_MINUTES, Number(value || 30));
    }

    function buildGenericExercisePrompt(label, subtitle) {
        return [
            `Tạo đúng 1 bài tập trắc nghiệm chất lượng cao với 4 lựa chọn về chủ đề "${label}".`,
            subtitle ? `Bối cảnh: ${subtitle}` : '',
            'YÊUQ CẦU CHẤT LƯỢNG:',
            '• Câu hỏi phải CỤTH, THỰC TẾ, không mơ hồ',
            '• Tránh câu hỏi quá dễ hoặc quá khó - độ khó vừa phải',
            '• 4 lựa chọn phải XA NHAU, không nhầm lẫn',
            '• Đáp án sai phải hợp lý (không là "không cái nào cả")',
            '• Giải thích phải CHỨNG MINH rõ tại sao đáp án đó đúng',
            'TRÁNH LẶP LẠI:',
            '• Chọn các khía cạnh KHÁC BIỆT so với câu cũ',
            '• Nếu câu cũ hỏi về ĐẠI THƯ, hãy hỏi về ÁP DỤNG hoặc PHÂN TÍCH',
            '• Đa dạng hóa các loại câu hỏi, không lặp cùng pattern',
            'ĐỊNH DẠNG:',
            'Trả về JSON duy nhất: {"question":"...","choices":["A","B","C","D"],"answerIndex":<số từ 0 đến 3>,"explanation":"..."}'
        ].filter(Boolean).join('\n');
    }

    function logRuntime(message) {
        console.info('[HIW Worker]', message);
    }

    function logRuntimeError(error) {
        console.error('[HIW Worker]', error);
    }

    function getWorkerConfig() {
        try { return JSON.parse(localStorage.getItem(WORKER_CONFIG_KEY) || '{}'); } catch { return {}; }
    }

    function createConversationId() {
        return `conv_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
    }

    function loadLocalSetting(key, fallback = '') {
        try { return window.localStorage.getItem(key) || fallback; } catch { return fallback; }
    }

    function normalizeStoredModel(value) {
        const rawValue = String(value || '').trim().toLowerCase();
        if (!rawValue) return DEFAULT_COPILOT_MODEL;
        const matchedModel = AVAILABLE_MODELS.find((model) => model.label.toLowerCase() === rawValue || model.ids.some((id) => id.toLowerCase() === rawValue));
        return matchedModel ? matchedModel.label : DEFAULT_COPILOT_MODEL;
    }

    function getCopilotToken() { return loadLocalSetting(COPILOT_STORAGE_KEYS.token, ''); }
    function getCopilotModel() { return normalizeStoredModel(loadLocalSetting(COPILOT_STORAGE_KEYS.model, DEFAULT_COPILOT_MODEL)); }

    function getModelIds(modelLabel) {
        const normalized = normalizeStoredModel(modelLabel);
        return (AVAILABLE_MODELS.find((model) => model.label === normalized) || AVAILABLE_MODELS[1]).ids;
    }

    function getDefaultWorkerTypeId() {
        return TOPIC_SPECS[0]?.id || 'money';
    }

    function resolveWorkerTypeId(rawWorkerType, rawJobId) {
        const aliasedWorkerType = WORKER_TYPE_ALIASES[rawWorkerType] || rawWorkerType;
        if (WORKER_TYPES[aliasedWorkerType]) return aliasedWorkerType;
        const jobId = String(rawJobId || '');
        const fromId = Object.keys(WORKER_TYPES).find((typeId) => jobId === typeId || jobId.startsWith(typeId + '-'));
        if (fromId) return fromId;
        const fallbackLegacy = WORKER_TYPE_ALIASES[jobId.split('-').slice(0, -1).join('-')];
        if (fallbackLegacy && WORKER_TYPES[fallbackLegacy]) return fallbackLegacy;
        return String(jobId || '').startsWith('money-') ? 'money' : getDefaultWorkerTypeId();
    }

    function getDefaultContentId(workerType) {
        return (WORKER_TYPES[workerType]?.contents || DEFAULT_WORKER_CONTENTS)[0]?.id || 'exercise';
    }

    function migrateJob(rawJob) {
        const rawJobId = String(rawJob?.id || '');
        const rawWorkerType = rawJob?.workerType || rawJobId.split('-').slice(0, -1).join('-') || '';
        const workerType = resolveWorkerTypeId(rawWorkerType, rawJobId);
        const allowedContentIds = new Set((WORKER_TYPES[workerType]?.contents || DEFAULT_WORKER_CONTENTS).map((content) => content.id));
        const inferredFromId = Array.from(allowedContentIds).find((contentId) => rawJobId.endsWith(`-${contentId}`));
        const defaultContentId = getDefaultContentId(workerType);
        const inferredContentId = rawJob?.contentId || rawJob?.type || inferredFromId || defaultContentId;
        const contentId = allowedContentIds.has(inferredContentId) ? inferredContentId : defaultContentId;
        return {
            id: `${workerType}-${contentId}`,
            workerType,
            contentId,
            intervalMinutes: normalizeIntervalMinutes(rawJob?.intervalMinutes),
            enabled: Boolean(rawJob?.enabled),
            conversationId: rawJob?.conversationId || createConversationId(),
            lastRunAt: Number(rawJob?.lastRunAt || 0)
        };
    }

    function getJobs() {
        const cfg = getWorkerConfig();
        if (!Array.isArray(cfg.jobs)) return [];
        const migratedJobs = cfg.jobs.map(migrateJob);
        const dedupedById = new Map();
        for (const job of migratedJobs) {
            const existing = dedupedById.get(job.id);
            if (!existing) {
                dedupedById.set(job.id, job);
                continue;
            }
            dedupedById.set(job.id, {
                ...existing,
                ...job,
                enabled: Boolean(existing.enabled || job.enabled),
                intervalMinutes: normalizeIntervalMinutes(job.intervalMinutes || existing.intervalMinutes),
                lastRunAt: Math.max(Number(existing.lastRunAt || 0), Number(job.lastRunAt || 0)),
                conversationId: existing.conversationId || job.conversationId || createConversationId()
            });
        }
        const jobs = Array.from(dedupedById.values()).sort((a, b) => a.id.localeCompare(b.id));
        if (JSON.stringify(cfg.jobs) !== JSON.stringify(jobs)) {
            cfg.jobs = jobs;
            localStorage.setItem(WORKER_CONFIG_KEY, JSON.stringify(cfg));
        }
        return jobs;
    }

    function getContentMeta(workerType, contentId) {
        return WORKER_TYPES[workerType]?.contents.find((content) => content.id === contentId) || null;
    }

    function getNotificationSupportInfo() {
        const hasNotificationApi = typeof Notification !== 'undefined';
        const hasServiceWorkerApi = 'serviceWorker' in navigator;
        const secure = window.isSecureContext;
        const ios = isIOSFamily();
        const android = /Android/i.test(navigator.userAgent || '');
        const standalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
        return {
            hasNotificationApi,
            hasServiceWorkerApi,
            secure,
            ios,
            android,
            standalone,
            notificationPermission: hasNotificationApi ? Notification.permission : 'unsupported',
            maxActions: hasNotificationApi && typeof Notification.maxActions === 'number' ? Notification.maxActions : 0,
            canUsePersistentNotifications: secure && hasServiceWorkerApi && (!ios || standalone),
            canUseWindowNotifications: secure && hasNotificationApi && !ios && !android
        };
    }

    function isIOSFamily() {
        const ua = navigator.userAgent || '';
        const platform = navigator.platform || '';
        return /iPad|iPhone|iPod/.test(ua) || (platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    }

    async function requestNotificationPermission() {
        if (!('Notification' in window)) return false;
        if (Notification.permission === 'granted') return true;
        try {
            let result;
            if (Notification.requestPermission.length > 0) {
                result = await new Promise((resolve) => Notification.requestPermission(resolve));
            } else {
                result = await Notification.requestPermission();
            }
            return result === 'granted';
        } catch {
            return false;
        }
    }

    function getNotificationIconUrl() {
        return new URL('pwa-icon.svg', runtimeUrl).toString();
    }

    function getServiceWorkerUrl() {
        return new URL('home-quiz-worker.js', runtimeUrl).toString();
    }

    function showWorkerToast(title, body, actions) {
        const toast = document.createElement('section');
        toast.className = 'hiw-worker-toast';
        toast.innerHTML = `<strong>${escapeHtml(title)}</strong><p>${escapeHtml(body)}</p><div class="hiw-worker-toast-actions"></div>`;
        const actionContainer = toast.querySelector('.hiw-worker-toast-actions');
        (actions || []).forEach((action) => {
            const button = document.createElement('button');
            button.type = 'button';
            button.textContent = action.label;
            button.addEventListener('click', () => {
                action.onClick();
                if (!action.keepOpen) toast.remove();
            });
            actionContainer.appendChild(button);
        });
        const closeButton = document.createElement('button');
        closeButton.type = 'button';
        closeButton.textContent = 'Đóng';
        closeButton.addEventListener('click', () => toast.remove());
        actionContainer.appendChild(closeButton);
        toastStack.prepend(toast);
        window.setTimeout(() => toast.remove(), 25000);
    }

    function escapeHtml(text) {
        return String(text || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
    }

    function getConversationHistoryKey(conversationId) {
        return `${WORKER_HISTORY_KEY_PREFIX}:${conversationId}`;
    }

    function getConversationHistory(conversationId) {
        try {
            const data = JSON.parse(localStorage.getItem(getConversationHistoryKey(conversationId)) || 'null');
            if (typeof data === 'string') return data;
            if (data && typeof data.lastAssistant === 'string') return data.lastAssistant;
            if (data && Array.isArray(data.quizHistory)) return data.quizHistory;
            if (Array.isArray(data)) {
                for (let i = data.length - 1; i >= 0; i--) {
                    if (data[i]?.role === 'assistant' && typeof data[i].content === 'string') return data[i].content;
                }
            }
            return '';
        } catch {
            return '';
        }
    }

    function savePastQuizzes(conversationId, newQuizJson) {
        try {
            const key = getConversationHistoryKey(conversationId);
            const stored = localStorage.getItem(key);
            let history = [];
            if (stored) {
                try {
                    const data = JSON.parse(stored);
                    if (Array.isArray(data.quizHistory)) history = data.quizHistory.slice();
                } catch {}
            }
            history.push(newQuizJson);
            history = history.slice(-8);
            localStorage.setItem(key, JSON.stringify({ quizHistory: history, lastAssistant: newQuizJson }));
        } catch {}
    }

    function saveConversationHistory(conversationId, assistantContent) {
        savePastQuizzes(conversationId, assistantContent);
    }

    function buildLastQuizHint(historyData) {
        if (!historyData) return '';
        const history = Array.isArray(historyData) ? historyData : [historyData];
        const recentQuizzes = history.slice(-5);
        try {
            const topics = [];
            const questions = [];
            for (const item of recentQuizzes) {
                try {
                    const quiz = typeof item === 'string' ? parseQuizPayload(item) : item;
                    if (quiz?.question) {
                        questions.push(String(quiz.question).slice(0, 150));
                        if (quiz.choices?.[quiz.answerIndex]) {
                            topics.push(String(quiz.choices[quiz.answerIndex]).slice(0, 80));
                        }
                    }
                } catch {}
            }
            const recent = questions.slice(-2).join(' | ');
            const uniqueTopics = [...new Set(topics)].slice(-3).join(', ');
            return [
                recent ? `CÂU HỎI GẦN ĐÂY: ${recent}` : '',
                uniqueTopics ? `CHỦĐỀ ĐÃ HỎI: ${uniqueTopics}` : '',
                '→ KHÔNG được lặp lại! Chọn khía cạnh KHÁC BIỆT, chủ đề MỚI, cấp độ KHÁC!'
            ].filter(Boolean).join(' | ');
        } catch {}
        return '';
    }

    function extractTextFromPayload(payload) {
        if (typeof payload === 'string') return payload.trim();
        if (Array.isArray(payload)) {
            const text = payload.map(extractTextFromPayload).join('');
            return text.trim();
        }
        if (payload && typeof payload === 'object') {
            if (typeof payload.text === 'string') return payload.text.trim();
            if (typeof payload.content === 'string') return payload.content.trim();
        }
        return '';
    }

    function parseQuizPayload(rawText) {
        const cleaned = String(rawText || '').trim().replace(/^```json\s*/i, '').replace(/^```\s*/i, '').replace(/\s*```$/, '').trim();
        try {
            const parsed = JSON.parse(cleaned);
            if (!parsed.question || !Array.isArray(parsed.choices) || parsed.choices.length !== 4 || typeof parsed.answerIndex === 'undefined') {
                throw new Error('Invalid quiz structure: missing question, choices, or answerIndex');
            }
            return parsed;
        } catch (error) {
            console.error('[HIW Worker] Parse error. Raw text:', cleaned.slice(0, 200));
            throw new Error(`Invalid JSON response: ${error.message}`);
        }
    }

    async function createHttpError(response) {
        let payload;
        try {
            const contentType = (response.headers.get('content-type') || '').toLowerCase();
            payload = contentType.includes('application/json') ? await response.json() : await response.text();
        } catch {
            payload = '';
        }
        const rawMessage = typeof payload === 'string' ? payload : payload?.error?.message || payload?.message || '';
        return new Error(`GitHub Models API error: ${response.status} ${rawMessage}`);
    }

    function buildWorkerMessages(job, prompt, historyData) {
        const workerConfig = WORKER_TYPES[job.workerType] || WORKER_TYPES[getDefaultWorkerTypeId()];
        const content = getContentMeta(job.workerType, job.contentId);
        const lastQuizHint = buildLastQuizHint(historyData);
        const systemPrompt = [
            workerConfig.systemPrompt,
            '',
            '=== HƯỚNG DẪN ===',
            `Chủ đề: ${workerConfig.label}`,
            `Nội dung: ${content?.label || job.contentId}`,
            '',
            '=== NGUYÊN TẮC CHẤT LƯỢNG ===',
            '1. NGẪU NHIÊN & KHÁC BIỆT: Mỗi câu hỏi phải độc lập, không lặp lại pattern cũ',
            '2. ĐA DẠNG: Thay đổi loại câu, cấp độ khó, chủ đề con',
            '3. TÍNH XÁO TRỘN: answerIndex phải thực sự ngẫu nhiên (0, 1, 2, hoặc 3)',
            '4. CHẤT LƯỢNG GIẢI THÍCH: Phải chỉ ra TẠI SAO, không chỉ xác nhận',
            '',
            '=== TRÁNH LẶP LẠI ===',
            lastQuizHint || '(Đây là câu hỏi đầu tiên - không giới hạn)',
            '',
            '=== FORMAT XUẤT (QUAN TRỌNG) ===',
            'Trả về JSON CHÍNH XÁC, không kèm text hay markdown:',
            '{\"question\":\"Câu hỏi ở đây?\",\"choices\":[\"Lựa chọn 1\",\"Lựa chọn 2\",\"Lựa chọn 3\",\"Lựa chọn 4\"],\"answerIndex\":0,\"explanation\":\"Giải thích tại sao đáp án đó đúng\"}',
            '',
            'CHÚ Ý:',
            '- choices: Mảng 4 chuỗi, KHÔNG có chữ cái A/B/C/D ở trước',
            '- answerIndex: Số từ 0 đến 3 (vị trí của đáp án đúng)',
            '- Không thêm dấu backtick, không markdown, chỉ JSON thuần'
        ].filter(Boolean).join('\\n');
        return [{ role: 'system', content: systemPrompt }, { role: 'user', content: prompt }];
    }

    function getFallbackQuiz(job) {
        const workerConfig = WORKER_TYPES[job.workerType] || WORKER_TYPES[getDefaultWorkerTypeId()];
        return workerConfig.fallbacks[job.contentId] || workerConfig.fallbacks[workerConfig.contents[0].id];
    }

    async function sendWorkerRequest(modelId, token, messages) {
        const response = await fetch(GITHUB_MODELS_ENDPOINT, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/vnd.github+json, application/json',
                'X-GitHub-Api-Version': GITHUB_API_VERSION
            },
            body: JSON.stringify({ model: modelId, messages, stream: false })
        });
        if (!response.ok) {
            throw await createHttpError(response);
        }
        const data = await response.json();
        return extractTextFromPayload(data?.choices?.[0]?.message?.content || data?.message || '');
    }

    function getCustomPrompts() {
        try { return JSON.parse(localStorage.getItem(CUSTOM_PROMPTS_KEY) || '{}'); } catch { return {}; }
    }

    function getEffectivePrompt(workerType, contentId) {
        const key = `${workerType}:${contentId}`;
        const custom = getCustomPrompts()[key];
        if (custom !== undefined && custom !== '') return custom;
        const wc = WORKER_TYPES[workerType] || WORKER_TYPES[getDefaultWorkerTypeId()];
        return wc.prompts[contentId] || wc.prompts[wc.contents[0].id] || '';
    }

    function shuffleQuizChoices(quiz) {
        if (!quiz || !Array.isArray(quiz.choices) || quiz.choices.length !== 4) return quiz;
        const correctIndex = resolveAnswerIndex(quiz.answerIndex);
        const indices = [0, 1, 2, 3];
        for (let i = indices.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [indices[i], indices[j]] = [indices[j], indices[i]];
        }
        const shuffledChoices = indices.map((idx) => quiz.choices[idx]);
        const newAnswerIndex = indices.indexOf(correctIndex);
        return { ...quiz, choices: shuffledChoices, answerIndex: newAnswerIndex };
    }

    async function generateWorkerQuiz(job) {
        const workerConfig = WORKER_TYPES[job.workerType] || WORKER_TYPES[getDefaultWorkerTypeId()];
        const prompt = getEffectivePrompt(job.workerType, job.contentId);
        const token = getCopilotToken();
        if (!token) return { quiz: shuffleQuizChoices(getFallbackQuiz(job)), error: null };
        const modelIds = getModelIds(getCopilotModel());
        const historyData = getConversationHistory(job.conversationId);
        const messages = buildWorkerMessages(job, prompt, historyData);
        let lastError = null;

        for (const modelId of modelIds) {
            try {
                const rawText = await sendWorkerRequest(modelId, token, messages);
                const quiz = parseQuizPayload(rawText);
                savePastQuizzes(job.conversationId, rawText);
                return { quiz: shuffleQuizChoices(quiz), error: null };
            } catch (error) {
                lastError = error;
                console.warn(`[HIW Worker] Model ${modelId} failed, trying next model:`, error.message);
            }
        }
        if (lastError) {
            console.error(`[HIW Worker] Error generating quiz for job ${job.id}:`, lastError);
        }
        return { quiz: shuffleQuizChoices(getFallbackQuiz(job)), error: lastError };
    }

    function buildWorkerNotificationPayload(job, quiz) {
        const workerConfig = WORKER_TYPES[job.workerType] || WORKER_TYPES[getDefaultWorkerTypeId()];
        const content = getContentMeta(job.workerType, job.contentId);
        const topicLabel = workerConfig.label || job.workerType;
        const contentLabel = content?.label || job.contentId;
        return {
            title: 'How It Works',
            toastTitle: `${topicLabel} • ${contentLabel}`,
            body: `${quiz.question}\nA. ${quiz.choices[0]}\nB. ${quiz.choices[1]}\nC. ${quiz.choices[2]}\nD. ${quiz.choices[3]}`,
            answerTitle: 'How It Works',
            answerToastTitle: `${topicLabel} • Đáp án`,
            answerBody: `Đáp án đúng: ${String.fromCharCode(65 + quiz.answerIndex)}. ${quiz.choices[quiz.answerIndex]} | Giải thích: ${quiz.explanation}`
        };
    }

    function showAnswerToast(payload) {
        showWorkerToast(payload.answerToastTitle || payload.answerTitle, payload.answerBody, []);
    }

    async function ensureServiceWorkerRegistration() {
        if (!('serviceWorker' in navigator) || !window.isSecureContext) return null;
        if (!serviceWorkerRegistrationPromise) {
            serviceWorkerRegistrationPromise = navigator.serviceWorker.register(getServiceWorkerUrl(), {
                scope: new URL('.', runtimeUrl).pathname || './'
            }).catch((error) => {
                serviceWorkerRegistrationPromise = null;
                throw error;
            });
        }
        return serviceWorkerRegistrationPromise;
    }

    async function showPersistentWorkerNotification(payload, supportInfo) {
        if (!supportInfo.canUsePersistentNotifications) return false;
        const reg = await ensureServiceWorkerRegistration();
        if (!reg || typeof reg.showNotification !== 'function') return false;
        const notificationOptions = {
            body: payload.body,
            icon: getNotificationIconUrl(),
            badge: getNotificationIconUrl(),
            tag: payload.title,
            renotify: true,
            data: {
                answerNotification: {
                    title: payload.answerTitle,
                    body: payload.answerBody,
                    icon: getNotificationIconUrl(),
                    badge: getNotificationIconUrl()
                }
            }
        };
        if (supportInfo.maxActions > 0) {
            notificationOptions.actions = [{ action: 'show-answer', title: 'Xem đáp án + giải thích' }];
        }
        await reg.showNotification(payload.title, notificationOptions);
        return true;
    }

    function showWindowNotification(payload, supportInfo) {
        if (!supportInfo.canUseWindowNotifications || Notification.permission !== 'granted') return false;
        const notification = new Notification(payload.title, { body: payload.body, icon: getNotificationIconUrl(), tag: payload.title });
        notification.onclick = () => {
            window.focus();
            showAnswerToast(payload);
            notification.close();
        };
        return true;
    }

    async function dispatchWorkerNotification(payload) {
        const supportInfo = getNotificationSupportInfo();
        if (document.visibilityState === 'visible') {
            showWorkerToast(payload.toastTitle || payload.title, payload.body, [
                { label: 'Xem đáp án', onClick: () => showAnswerToast(payload), keepOpen: true }
            ]);
        }
        try {
            if (supportInfo.notificationPermission === 'granted') {
                if (await showPersistentWorkerNotification(payload, supportInfo)) return 'persistent';
                if (showWindowNotification(payload, supportInfo)) return 'window';
            }
        } catch (error) {
            logRuntimeError(error);
        }
        return 'toast';
    }

    async function markJobRun(jobId, timestamp) {
        const cfg = getWorkerConfig();
        cfg.jobs = getJobs().map((job) => job.id === jobId ? { ...job, lastRunAt: timestamp } : job);
        localStorage.setItem(WORKER_CONFIG_KEY, JSON.stringify(cfg));
    }

    function isJobDue(job, now) {
        const intervalMs = normalizeIntervalMinutes(job.intervalMinutes) * 60 * 1000;
        return !job.lastRunAt || now - job.lastRunAt >= intervalMs;
    }

    async function runWorkerJob(job, options = {}) {
        if (!job.enabled) return false;
        const now = Date.now();
        if (!options.force && !isJobDue(job, now)) return false;
        const supportInfo = getNotificationSupportInfo();
        if (supportInfo.hasNotificationApi && Notification.permission === 'default') {
            await requestNotificationPermission();
        }
        const result = await generateWorkerQuiz(job);
        const { quiz, error } = result;
        await markJobRun(job.id, now);
        if (error) {
            console.error(`[HIW Worker] Job ${job.id} failed with error, skipping notification`, error);
            return false;
        }
        const payload = buildWorkerNotificationPayload(job, quiz);
        const deliveryMode = await dispatchWorkerNotification(payload);
        logRuntime(`Ran ${job.id} via ${deliveryMode}`);
        return true;
    }

    async function runAllEnabledJobs(options = {}) {
        let count = 0;
        for (const job of getJobs().filter((job) => job.enabled)) {
            if (await runWorkerJob(job, options)) count += 1;
        }
        return count;
    }

    function getRuntimeLease() {
        try { return JSON.parse(localStorage.getItem(RUNTIME_LEASE_KEY) || 'null'); } catch { return null; }
    }

    function setRuntimeLease(lease) {
        localStorage.setItem(RUNTIME_LEASE_KEY, JSON.stringify(lease));
    }

    function isRuntimeLeaseActive(lease) {
        return Boolean(lease && lease.expiresAt && lease.expiresAt > Date.now());
    }

    function hasRuntimeLeadership() {
        const lease = getRuntimeLease();
        return Boolean(lease && lease.owner === runtimeTabId && isRuntimeLeaseActive(lease));
    }

    function acquireRuntimeLeadership() {
        const lease = getRuntimeLease();
        if (!isRuntimeLeaseActive(lease) || lease.owner === runtimeTabId) {
            setRuntimeLease({ owner: runtimeTabId, expiresAt: Date.now() + RUNTIME_LEASE_MS });
            return true;
        }
        return false;
    }

    function releaseRuntimeLeadership() {
        const lease = getRuntimeLease();
        if (lease && lease.owner === runtimeTabId) {
            localStorage.removeItem(RUNTIME_LEASE_KEY);
        }
    }

    function maintainRuntimeLeadership() {
        acquireRuntimeLeadership();
        return hasRuntimeLeadership();
    }

    function startBackgroundWorker() {
        if (backgroundTimer) clearInterval(backgroundTimer);
        if (runtimeLeaseHeartbeat) clearInterval(runtimeLeaseHeartbeat);
        const jobs = getJobs().filter((job) => job.enabled);
        if (!jobs.length) return;
        maintainRuntimeLeadership();
        runtimeLeaseHeartbeat = setInterval(() => {
            maintainRuntimeLeadership();
        }, 15000);
        backgroundTimer = setInterval(() => {
            if (maintainRuntimeLeadership()) {
                runAllEnabledJobs().catch(logRuntimeError);
            }
        }, 60000);
        if (hasRuntimeLeadership()) {
            runAllEnabledJobs().catch(logRuntimeError);
        }
    }
})();
