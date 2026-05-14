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
    const MAX_WORKER_HISTORY_MESSAGES = 12;
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
            systemPrompt: 'Bạn là trợ lý tạo câu hỏi học tiếng Anh ngắn, rõ ràng, phù hợp tự học. Ưu tiên giao tiếp đời sống hằng ngày và giải thích dễ hiểu bằng tiếng Việt khi phù hợp.',
            contents: ENGLISH_WORKER_CONTENTS,
            prompts: {
                theory: 'Tạo đúng 1 câu hỏi trắc nghiệm lý thuyết tiếng Anh với 4 lựa chọn. Câu hỏi và cả 4 đáp án đều phải viết bằng tiếng Việt, nội dung hỏi về ngữ pháp hoặc cách dùng tiếng Anh. Có thể giữ ví dụ tiếng Anh ngắn nếu thật sự cần. Trả về JSON duy nhất: {"question":"...","choices":["A","B","C","D"],"answerIndex":<số từ 0 đến 3>,"explanation":"..."}',
                exercise: 'Tạo đúng 1 bài tập trắc nghiệm ngữ pháp tiếng Anh với 4 lựa chọn. Mỗi lần hãy chọn ngẫu nhiên một chủ đề ngữ pháp khác nhau, ví dụ: các thì (tenses), câu điều kiện, so sánh, mạo từ, giới từ, câu bị động, danh động từ vs nguyên mẫu, đại từ quan hệ, trợ động từ, cấu trúc câu hỏi, tag questions, reported speech, modal verbs. Ưu tiên ngữ pháp thông dụng, hay gặp trong giao tiếp và viết hằng ngày. Không dùng ngữ pháp hiếm, học thuật, hoặc quá nâng cao. Giải thích ngắn gọn bằng tiếng Việt. Trả về JSON duy nhất: {"question":"...","choices":["A","B","C","D"],"answerIndex":<số từ 0 đến 3>,"explanation":"..."}',
                vocabulary: 'Tạo đúng 1 câu hỏi trắc nghiệm từ vựng tiếng Anh với 4 lựa chọn. Câu hỏi phải viết bằng tiếng Việt. Từ hoặc cụm từ cần hỏi là tiếng Anh thông dụng trong giao tiếp đời sống hằng ngày. Các lựa chọn trả lời là các từ/cụm từ tiếng Anh. Không dùng từ hiếm, học thuật, chuyên ngành, hoặc quá nâng cao. Trả về JSON duy nhất: {"question":"...","choices":["A","B","C","D"],"answerIndex":<số từ 0 đến 3>,"explanation":"..."}'
            },
            fallbacks: {
                theory: {
                    question: 'Trong tiếng Anh, khi nào thường dùng thì hiện tại đơn?',
                    choices: ['Diễn tả thói quen hoặc sự thật hiển nhiên', 'Diễn tả hành động đang xảy ra ngay lúc nói', 'Diễn tả hành động đã kết thúc trong quá khứ có mốc thời gian rõ', 'Diễn tả một kế hoạch đã hoàn thành từ lâu'],
                    answerIndex: 0,
                    explanation: 'Thì hiện tại đơn thường dùng cho thói quen, lịch trình, và sự thật hiển nhiên.'
                },
                exercise: {
                    question: 'Fill in the blank: I usually ___ coffee in the morning.',
                    choices: ['drink', 'drinks am', 'drinking is', 'to drank'],
                    answerIndex: 0,
                    explanation: 'Sau "usually" trong câu hiện tại đơn với chủ ngữ "I", dùng động từ nguyên mẫu "drink".'
                },
                vocabulary: {
                    question: 'Từ tiếng Anh nào có nghĩa là "đói"?',
                    choices: ['hungry', 'sleepy', 'thirsty', 'angry'],
                    answerIndex: 0,
                    explanation: '"Hungry" có nghĩa là "đói", là từ rất thông dụng trong giao tiếp hằng ngày.'
                }
            }
        },
        money: {
            systemPrompt: 'Bạn là trợ lý tạo bài tập ngắn về tiền và hệ thống tài chính. Câu hỏi phải thực tế, dễ hiểu, giải thích ngắn bằng tiếng Việt.',
            prompts: {
                exercise: 'Tạo đúng 1 bài tập trắc nghiệm ngẫu nhiên về chủ đề tiền, ngân hàng, lạm phát, lãi suất, đầu tư hoặc tài chính cá nhân với 4 lựa chọn. Trả về JSON duy nhất: {"question":"...","choices":["A","B","C","D"],"answerIndex":<số từ 0 đến 3>,"explanation":"..."}'
            },
            fallbacks: {
                exercise: {
                    question: 'Nếu lãi suất tăng mạnh, khoản nào thường chịu áp lực giảm giá trước?',
                    choices: ['Tài sản dùng đòn bẩy cao', 'Tiền mặt', 'Lương tháng đã nhận', 'Thuế đã nộp'],
                    answerIndex: 0,
                    explanation: 'Lãi suất tăng làm chi phí vốn cao hơn và giảm sức hấp dẫn của các tài sản phụ thuộc vào tín dụng rẻ.'
                }
            }
        }
    };

    const runtimeScript = document.currentScript || Array.from(document.querySelectorAll('script[src]')).reverse().find((script) => script.src.includes('worker-runtime.js'));
    const runtimeUrl = runtimeScript?.src ? new URL(runtimeScript.src, window.location.href) : new URL('./worker-runtime.js', window.location.href);
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
            choices: [`Ôn lại ý chính của ${subtitle || label}`, 'Bỏ qua ngữ cảnh và chọn ngẫu nhiên', 'Chỉ học thuộc đáp án mà không cần hiểu', 'Không cần xem giải thích sau khi làm'],
            answerIndex: 0,
            explanation: `Worker của chủ đề "${label}" được tạo để ôn nhanh các ý chính và hiểu lại ngữ cảnh của chủ đề.`
        };
    }

    function buildGenericExercisePrompt(label, subtitle) {
        return [
            `Tạo đúng 1 bài tập trắc nghiệm với 4 lựa chọn về chủ đề "${label}". Hãy tạo nội dung ngẫu nhiên để tránh lặp lại.`,
            subtitle ? `Bối cảnh ngắn: ${subtitle}.` : '',
            'Câu hỏi phải cụ thể, dễ hiểu, có thể học nhanh trong 1 lần đọc.',
            'Trả về JSON duy nhất: {"question":"...","choices":["A","B","C","D"],"answerIndex":<số từ 0 đến 3>,"explanation":"..."}'
        ].filter(Boolean).join(' ');
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

    function migrateJob(rawJob) {
        const rawWorkerType = rawJob?.workerType || String(rawJob?.id || '').split('-').slice(0, -1).join('-') || '';
        const workerType = resolveWorkerTypeId(rawWorkerType, rawJob?.id || '');
        const allowedContentIds = new Set((WORKER_TYPES[workerType]?.contents || DEFAULT_WORKER_CONTENTS).map((content) => content.id));
        const inferredContentId = rawJob?.contentId || rawJob?.type || 'exercise';
        const contentId = allowedContentIds.has(inferredContentId) ? inferredContentId : 'exercise';
        return {
            id: `${workerType}-${contentId}`,
            workerType,
            contentId,
            intervalMinutes: Math.max(1, Number(rawJob?.intervalMinutes || 30)),
            enabled: Boolean(rawJob?.enabled),
            conversationId: rawJob?.conversationId || createConversationId(),
            lastRunAt: Number(rawJob?.lastRunAt || 0)
        };
    }

    function getJobs() {
        const cfg = getWorkerConfig();
        if (!Array.isArray(cfg.jobs)) return [];
        const jobs = cfg.jobs.map(migrateJob);
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
            const data = JSON.parse(localStorage.getItem(getConversationHistoryKey(conversationId)) || '[]');
            return Array.isArray(data) ? data : [];
        } catch {
            return [];
        }
    }

    function saveConversationHistory(conversationId, history) {
        localStorage.setItem(getConversationHistoryKey(conversationId), JSON.stringify(history.slice(-MAX_WORKER_HISTORY_MESSAGES)));
    }

    function extractTextFromPayload(payload) {
        if (typeof payload === 'string') return payload;
        if (Array.isArray(payload)) return payload.map(extractTextFromPayload).join('');
        if (payload && typeof payload === 'object') {
            if (typeof payload.text === 'string') return payload.text;
            if (typeof payload.content === 'string') return payload.content;
        }
        return '';
    }

    function parseQuizPayload(rawText) {
        const cleaned = String(rawText || '').trim().replace(/^```json\s*/i, '').replace(/^```\s*/i, '').replace(/\s*```$/, '').trim();
        return JSON.parse(cleaned);
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
        const error = new Error(rawMessage || `GitHub Models API trả về lỗi HTTP ${response.status}.`);
        error.status = response.status;
        throw error;
    }

    function buildWorkerMessages(job, prompt, history) {
        const workerConfig = WORKER_TYPES[job.workerType] || WORKER_TYPES[getDefaultWorkerTypeId()];
        const content = getContentMeta(job.workerType, job.contentId);
        const systemPrompt = [
            workerConfig.systemPrompt,
            `Worker type: ${workerConfig.label}`,
            `Nội dung hiện tại: ${content?.label || job.contentId}`,
            'Không lặp lại nguyên xi câu hỏi gần nhất nếu history đã có. Hãy luôn luôn tạo câu hỏi mới ngẫu nhiên.',
            'Hãy xáo trộn vị trí đáp án đúng ngẫu nhiên, KHÔNG phải lúc nào cũng nằm ở vị trí đầu tiên. answerIndex phải là ngẫu nhiên từ 0 đến 3.',
            'Giải thích ngắn, rõ, hữu ích cho tự học.',
            'Chỉ trả về đúng JSON hợp lệ, không kèm markdown.'
        ].join('\n');
        return [{ role: 'system', content: systemPrompt }].concat(history).concat([{ role: 'user', content: prompt }]);
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
            await createHttpError(response);
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
        const correctIndex = Math.max(0, Math.min(3, Number(quiz.answerIndex) || 0));
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
        if (!token) return shuffleQuizChoices(getFallbackQuiz(job));
        const modelIds = getModelIds(getCopilotModel());
        const history = getConversationHistory(job.conversationId);
        const messages = buildWorkerMessages(job, prompt, history);
        let lastError = null;

        for (const modelId of modelIds) {
            try {
                const rawText = await sendWorkerRequest(modelId, token, messages);
                const quiz = parseQuizPayload(rawText);
                saveConversationHistory(job.conversationId, history.concat([{ role: 'user', content: prompt }, { role: 'assistant', content: rawText }]));
                return shuffleQuizChoices(quiz);
            } catch (error) {
                lastError = error;
            }
        }
        if (lastError) logRuntimeError(lastError);
        return shuffleQuizChoices(getFallbackQuiz(job));
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
        const intervalMs = Math.max(1, Number(job.intervalMinutes || 30)) * 60 * 1000;
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
        const quiz = await generateWorkerQuiz(job);
        const payload = buildWorkerNotificationPayload(job, quiz);
        const deliveryMode = await dispatchWorkerNotification(payload);
        await markJobRun(job.id, now);
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
