(function () {
    if (window.__HIW_CHAT_WIDGET_INITIALIZED__) {
        return;
    }

    window.__HIW_CHAT_WIDGET_INITIALIZED__ = true;

    const API_ENDPOINT = 'https://models.github.ai/inference/chat/completions';
    const API_VERSION = '2026-03-10';
    const DEFAULT_MODEL = 'gpt-4.1';
    const AVAILABLE_MODELS = [
        {
            label: 'gpt-4o',
            ids: ['openai/gpt-4o']
        },
        {
            label: 'gpt-4.1',
            ids: ['openai/gpt-4.1']
        },
        {
            label: 'gpt-5-mini',
            ids: ['openai/gpt-5-mini', 'openai/gpt-5-mini']
        }
    ];
    const STORAGE_KEYS = {
        token: 'hiw_copilot_token',
        model: 'hiw_copilot_model'
    };
    const MAX_PAGE_CONTEXT = 3600;
    const MAX_HISTORY_MESSAGES = 12;
    const state = {
        token: loadSetting(STORAGE_KEYS.token, ''),
        model: normalizeStoredModel(loadSetting(STORAGE_KEYS.model, DEFAULT_MODEL)),
        history: [],
        pending: false,
        pageContext: null,
        elements: {}
    };

    ensureWidgetStyles();

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init, { once: true });
    } else {
        init();
    }

    function init() {
        state.pageContext = getPageContext();
        mountWidget();
        syncModelControls();
        renderGreeting();
    }

    function ensureWidgetStyles() {
        if (document.getElementById('hiw-chat-widget-styles')) {
            return;
        }

        const script = getCurrentScript();

        if (!script || !script.src) {
            return;
        }

        const link = document.createElement('link');
        link.id = 'hiw-chat-widget-styles';
        link.rel = 'stylesheet';
        link.href = new URL('chat-widget.css', script.src).toString();
        document.head.appendChild(link);
    }

    function getCurrentScript() {
        if (document.currentScript) {
            return document.currentScript;
        }

        const candidates = Array.from(document.querySelectorAll('script[src]'));
        return candidates.reverse().find((script) => script.src.includes('chat-widget.js')) || null;
    }

    function mountWidget() {
        const container = document.createElement('div');
        container.className = 'hiw-chat-root';
        container.innerHTML = [
            '<button class="hiw-chat-launcher" type="button" aria-label="Mở trợ lý AI" aria-expanded="false">',
            '    <span class="hiw-chat-launcher-icon">AI</span>',
            '    <span class="hiw-chat-launcher-label">Hỏi trang này</span>',
            '</button>',
            '    <aside class="hiw-chat-panel" hidden>',
            '        <div class="hiw-chat-header">',
            '            <div class="hiw-chat-title-group">',
            '                <p class="hiw-chat-eyebrow">GitHub Models</p>',
            '                <h2 class="hiw-chat-title">Trợ lý theo ngữ cảnh trang</h2>',
            '            </div>',
            '            <div class="hiw-chat-header-right">',
            '                <label class="hiw-chat-model-picker" for="hiw-chat-model-select">',
            '                    <span>Model</span>',
            '                    <select id="hiw-chat-model-select"></select>',
            '                </label>',
            '                <div class="hiw-chat-actions">',
            '                    <button class="hiw-chat-icon-button" type="button" data-action="settings" aria-label="Cài đặt token">⚙</button>',
            '                    <button class="hiw-chat-icon-button" type="button" data-action="clear" aria-label="Xóa hội thoại">↺</button>',
            '                    <button class="hiw-chat-icon-button" type="button" data-action="close" aria-label="Đóng chat">✕</button>',
            '                </div>',
            '            </div>',
            '        </div>',
            '        <div class="hiw-chat-status hiw-chat-status-neutral"></div>',
            '        <div class="hiw-chat-messages" aria-live="polite"></div>',
            '        <form class="hiw-chat-compose">',
            '            <textarea class="hiw-chat-input" rows="1" placeholder="Hỏi về nội dung của trang này..."></textarea>',
            '            <button class="hiw-chat-send" type="submit">Gửi</button>',
            '        </form>',
            
            '    </aside>',
            '    <div class="hiw-chat-settings" hidden>',
            '        <div class="hiw-chat-settings-backdrop" data-action="close-settings"></div>',
            '        <div class="hiw-chat-settings-card" role="dialog" aria-modal="true" aria-labelledby="hiw-chat-settings-title">',
            '            <div class="hiw-chat-settings-head">',
            '                <div>',
            '                    <p class="hiw-chat-eyebrow">Cấu hình</p>',
            '                    <h3 id="hiw-chat-settings-title">GitHub Models Chat</h3>',
            '                </div>',
            '                <button class="hiw-chat-icon-button" type="button" data-action="close-settings" aria-label="Đóng cài đặt">✕</button>',
            '            </div>',
            '            <p class="hiw-chat-settings-message"></p>',
            '            <label class="hiw-chat-field">',
            '                <span>GitHub PAT</span>',
            '                <input class="hiw-chat-token-input" type="password" placeholder="ghp_... hoặc github_pat_..." autocomplete="off">',
            '            </label>',
            '            <label class="hiw-chat-field">',
            '                <span>Model mặc định</span>',
            '                <select class="hiw-chat-settings-model"></select>',
            '            </label>',
            '            <p class="hiw-chat-settings-note">PAT cần có quyền models:read. Nhãn model trong UI sẽ được map sang model ID GitHub Models tương ứng.</p>',
            '            <div class="hiw-chat-settings-actions">',
            '                <button class="hiw-chat-secondary-button" type="button" data-action="close-settings">Để sau</button>',
            '                <button class="hiw-chat-primary-button" type="button" data-action="save-settings">Lưu cấu hình</button>',
            '            </div>',
            '        </div>',
            '    </div>'
        ].join('\n');

        document.body.appendChild(container);

        state.elements.root = container;
        state.elements.launcher = container.querySelector('.hiw-chat-launcher');
        state.elements.panel = container.querySelector('.hiw-chat-panel');
        state.elements.messages = container.querySelector('.hiw-chat-messages');
        state.elements.form = container.querySelector('.hiw-chat-compose');
        state.elements.input = container.querySelector('.hiw-chat-input');
        state.elements.sendButton = container.querySelector('.hiw-chat-send');
        state.elements.status = container.querySelector('.hiw-chat-status');
        state.elements.modelSelect = container.querySelector('#hiw-chat-model-select');
        state.elements.settings = container.querySelector('.hiw-chat-settings');
        state.elements.settingsMessage = container.querySelector('.hiw-chat-settings-message');
        state.elements.tokenInput = container.querySelector('.hiw-chat-token-input');
        state.elements.settingsModel = container.querySelector('.hiw-chat-settings-model');

        populateModelSelect(state.elements.modelSelect, state.model);
        populateModelSelect(state.elements.settingsModel, state.model);

        state.elements.launcher.addEventListener('click', togglePanel);
        state.elements.form.addEventListener('submit', handleSubmit);
        state.elements.input.addEventListener('keydown', handleInputKeydown);
        state.elements.modelSelect.addEventListener('change', handleModelChange);
        state.elements.settingsModel.addEventListener('change', handleSettingsModelChange);
        container.addEventListener('click', handleContainerClick);
        autoResizeInput();
        state.elements.input.addEventListener('input', autoResizeInput);

        updateStatus([
            'Trang hiện tại: ' + state.pageContext.title,
            'Đang dùng model ' + state.model
        ].join(' • '), 'neutral');
    }

    function populateModelSelect(select, selectedModel) {
        select.innerHTML = '';

        AVAILABLE_MODELS.forEach((model) => {
            const option = document.createElement('option');
            option.value = model.label;
            option.textContent = model.label;
            option.selected = model.label === selectedModel;
            select.appendChild(option);
        });
    }

    function getModelConfig(modelLabel) {
        const normalizedLabel = normalizeStoredModel(modelLabel);
        return AVAILABLE_MODELS.find((model) => model.label === normalizedLabel) || AVAILABLE_MODELS[AVAILABLE_MODELS.length - 1];
    }

    function syncModelControls() {
        if (state.elements.modelSelect) {
            state.elements.modelSelect.value = state.model;
        }

        if (state.elements.settingsModel) {
            state.elements.settingsModel.value = state.model;
        }
    }

    function handleModelChange(event) {
        state.model = event.target.value || DEFAULT_MODEL;
        saveSetting(STORAGE_KEYS.model, state.model);
        syncModelControls();
        updateStatus('Đã chuyển sang model ' + state.model, 'neutral');
    }

    function handleSettingsModelChange(event) {
        state.model = event.target.value || DEFAULT_MODEL;
        saveSetting(STORAGE_KEYS.model, state.model);
        syncModelControls();
    }

    function handleContainerClick(event) {
        const action = event.target.getAttribute('data-action');

        if (!action) {
            return;
        }

        if (action === 'close') {
            closePanel();
            return;
        }

        if (action === 'settings') {
            openSettings({
                message: 'PAT được lưu trên thiết bị này và dùng để gọi GitHub Models API bằng quyền models:read.'
            });
            return;
        }

        if (action === 'clear') {
            clearConversation();
            return;
        }

        if (action === 'save-settings') {
            saveSettings();
            return;
        }

        if (action === 'close-settings') {
            closeSettings();
        }
    }

    function togglePanel() {
        const willOpen = state.elements.panel.hasAttribute('hidden');

        if (willOpen) {
            openPanel();
            return;
        }

        closePanel();
    }

    function openPanel() {
        state.elements.panel.removeAttribute('hidden');
        state.elements.launcher.setAttribute('aria-expanded', 'true');
        state.elements.root.classList.add('hiw-chat-open');

        if (!state.token) {
            openSettings({
                force: true,
                message: 'Bạn cần nhập GitHub PAT có quyền models:read trước khi gửi câu hỏi đầu tiên.'
            });
        }

        focusInputSoon();
    }

    function closePanel() {
        state.elements.panel.setAttribute('hidden', 'hidden');
        state.elements.launcher.setAttribute('aria-expanded', 'false');
        state.elements.root.classList.remove('hiw-chat-open');
    }

    function openSettings(options) {
        const config = options || {};
        state.elements.settings.removeAttribute('hidden');
        state.elements.settings.dataset.force = config.force ? 'true' : 'false';
        state.elements.settingsMessage.textContent = config.message || 'Nhập GitHub PAT và chọn model mặc định cho chat widget.';
        state.elements.tokenInput.value = state.token;
        syncModelControls();
        window.requestAnimationFrame(() => state.elements.tokenInput.focus());
    }

    function closeSettings() {
        if (state.elements.settings.dataset.force === 'true' && !state.token) {
            updateStatus('Chat chưa hoạt động vì chưa có GitHub PAT.', 'warning');
        }

        state.elements.settings.setAttribute('hidden', 'hidden');
        state.elements.settings.dataset.force = 'false';
        focusInputSoon();
    }

    function saveSettings() {
        const nextToken = state.elements.tokenInput.value.trim();
        const nextModel = state.elements.settingsModel.value || DEFAULT_MODEL;

        if (!nextToken) {
            state.elements.tokenInput.focus();
            updateStatus('GitHub PAT không được để trống.', 'error');
            return;
        }

        state.token = nextToken;
        state.model = nextModel;
        saveSetting(STORAGE_KEYS.token, nextToken);
        saveSetting(STORAGE_KEYS.model, nextModel);
        syncModelControls();
        closeSettings();
        openPanel();
        updateStatus('Đã lưu GitHub PAT và model ' + state.model + '.', 'success');
    }

    function clearConversation() {
        state.history = [];
        state.elements.messages.innerHTML = '';
        renderGreeting();
        updateStatus('Đã xóa hội thoại. Context trang vẫn được giữ nguyên.', 'neutral');
    }

    function renderGreeting() {
        appendMessage('assistant', [
            'Mình có thể hỗ trợ theo nội dung của trang này.',
            'Trang đang xem: ' + state.pageContext.title,
            'Bạn có thể đổi model ngay ở phía trên.',
            'Widget hiện dùng GitHub Models API với GitHub PAT có quyền models:read.'
        ].join('\n'));
    }

    function handleInputKeydown(event) {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            state.elements.form.requestSubmit();
        }
    }

    async function handleSubmit(event) {
        event.preventDefault();

        if (state.pending) {
            return;
        }

        const userMessage = state.elements.input.value.trim();

        if (!userMessage) {
            state.elements.input.focus();
            return;
        }

        if (!state.token) {
            openSettings({
                force: true,
                message: 'Cần GitHub PAT có quyền models:read để gửi câu hỏi.'
            });
            return;
        }

        openPanel();
        appendMessage('user', userMessage);
        state.history.push({ role: 'user', content: userMessage });
        state.history = state.history.slice(-MAX_HISTORY_MESSAGES);
        state.elements.input.value = '';
        autoResizeInput();

        const assistantMessage = createMessageElement('assistant');
        assistantMessage.content.textContent = 'Đang kết nối tới GitHub Models...';
        state.elements.messages.appendChild(assistantMessage.wrapper);
        scrollMessagesToBottom();

        setPending(true);
        updateStatus('Đang hỏi bằng ' + state.model + ' qua GitHub Models...', 'neutral');

        try {
            const assistantReply = await requestAssistantReply((chunkText) => {
                assistantMessage.content.textContent = chunkText || 'Đang chờ dữ liệu từ model...';
                scrollMessagesToBottom();
            });
            const assistantText = assistantReply.text;

            assistantMessage.content.textContent = assistantText || 'Không nhận được nội dung trả lời.';
            if (assistantText) {
                state.history.push({ role: 'assistant', content: assistantText });
                state.history = state.history.slice(-MAX_HISTORY_MESSAGES);
            }
            updateStatus('Đã trả lời bằng ' + state.model + ' qua ' + assistantReply.modelId + '.', 'success');
        } catch (error) {
            assistantMessage.wrapper.classList.add('hiw-chat-message-error');
            assistantMessage.content.textContent = formatRequestError(error);
            updateStatus(formatRequestError(error), 'error');
        } finally {
            setPending(false);
            focusInputSoon();
        }
    }

    async function requestAssistantReply(onUpdate) {
        const modelConfig = getModelConfig(state.model);
        let lastError = null;

        for (const modelId of modelConfig.ids) {
            try {
                const text = await sendInferenceRequest(modelId, onUpdate);
                return {
                    text,
                    modelId
                };
            } catch (error) {
                lastError = error;

                if (!isRetryableModelError(error)) {
                    throw error;
                }
            }
        }

        throw lastError || new Error('Không resolve được model đã chọn trên GitHub Models.');
    }

    async function sendInferenceRequest(modelId, onUpdate) {
        const response = await fetch(API_ENDPOINT, {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + state.token,
                'Content-Type': 'application/json',
                'Accept': 'application/vnd.github+json, text/event-stream, application/json',
                'X-GitHub-Api-Version': API_VERSION
            },
            body: JSON.stringify({
                model: modelId,
                messages: buildPayloadMessages(),
                stream: true
            })
        });

        if (!response.ok) {
            throw await createHttpError(response);
        }

        const contentType = (response.headers.get('content-type') || '').toLowerCase();

        if (contentType.includes('text/event-stream') && response.body) {
            return readEventStream(response.body, onUpdate);
        }

        if (contentType.includes('application/json')) {
            const data = await response.json();
            const text = extractTextFromPayload(data.choices && data.choices[0] ? data.choices[0].message && data.choices[0].message.content : data.message);
            onUpdate(text);
            return text;
        }

        const text = await response.text();
        onUpdate(text);
        return text;
    }

    function isRetryableModelError(error) {
        const message = error && error.message ? error.message.toLowerCase() : '';
        return Boolean(
            error &&
            [400, 404, 422].includes(error.status) &&
            /model|unsupported|not found|unknown|invalid/i.test(message)
        );
    }

    function buildPayloadMessages() {
        const systemPrompt = [
            'Bạn là trợ lý AI cho website kiến thức "How it works".',
            'Ưu tiên tuyệt đối nội dung của trang hiện tại khi trả lời.',
            'Nếu người dùng hỏi vượt quá context của trang, hãy nói rõ giới hạn đó trước khi bổ sung kiến thức chung.',
            'Trả lời bằng tiếng Việt, trừ khi người dùng chủ động dùng ngôn ngữ khác.',
            'Không bịa chi tiết không có trong context.',
            'Context trang hiện tại:',
            'URL: ' + state.pageContext.path,
            'Tiêu đề: ' + state.pageContext.title,
            'Headings: ' + (state.pageContext.headings || 'Không có'),
            'Nội dung trích xuất: ' + state.pageContext.content
        ].join('\n');

        return [{ role: 'system', content: systemPrompt }].concat(state.history);
    }

    async function readEventStream(stream, onUpdate) {
        const reader = stream.getReader();
        const decoder = new TextDecoder();
        let buffer = '';
        let fullText = '';

        while (true) {
            const chunk = await reader.read();

            if (chunk.done) {
                buffer += decoder.decode();
                buffer = normalizeEventBuffer(buffer);
                const finalParse = consumeEventBuffer(buffer, fullText, onUpdate);
                buffer = finalParse.buffer;
                fullText = finalParse.fullText;

                if (!finalParse.done && buffer.trim()) {
                    const trailingEvent = parseEventBlock(buffer.trim());

                    if (trailingEvent.text) {
                        fullText += trailingEvent.text;
                        onUpdate(fullText);
                    }
                }

                break;
            }

            buffer += decoder.decode(chunk.value, { stream: true });
            buffer = normalizeEventBuffer(buffer);
            const parsed = consumeEventBuffer(buffer, fullText, onUpdate);
            buffer = parsed.buffer;
            fullText = parsed.fullText;

            if (parsed.done) {
                break;
            }
        }

        return fullText;
    }

    function consumeEventBuffer(buffer, currentText, onUpdate) {
        let workingBuffer = buffer;
        let fullText = currentText;
        let done = false;
        let boundaryIndex = workingBuffer.indexOf('\n\n');

        while (boundaryIndex !== -1) {
            const rawEvent = workingBuffer.slice(0, boundaryIndex);
            workingBuffer = workingBuffer.slice(boundaryIndex + 2);
            const parsed = parseEventBlock(rawEvent);

            if (parsed.done) {
                done = true;
                break;
            }

            if (parsed.text) {
                fullText += parsed.text;
                onUpdate(fullText);
            }

            boundaryIndex = workingBuffer.indexOf('\n\n');
        }

        return {
            buffer: workingBuffer,
            fullText,
            done
        };
    }

    function normalizeEventBuffer(buffer) {
        return buffer.replace(/\r\n/g, '\n');
    }

    function parseEventBlock(block) {
        const dataLines = block
            .split('\n')
            .filter((line) => line.startsWith('data:'))
            .map((line) => line.slice(5).trim())
            .filter(Boolean);

        if (!dataLines.length) {
            return { text: '' };
        }

        const data = dataLines.join('\n');

        if (data === '[DONE]') {
            return { done: true, text: '' };
        }

        try {
            const payload = JSON.parse(data);
            const choice = payload.choices && payload.choices[0] ? payload.choices[0] : {};
            const delta = choice.delta ? choice.delta.content : '';
            const message = choice.message ? choice.message.content : '';
            return { text: extractTextFromPayload(delta || message) };
        } catch (error) {
            return { text: '' };
        }
    }

    async function createHttpError(response) {
        let payload;

        try {
            const contentType = (response.headers.get('content-type') || '').toLowerCase();
            payload = contentType.includes('application/json') ? await response.json() : await response.text();
        } catch (error) {
            payload = '';
        }

        const message = extractErrorMessage(response.status, payload);
        const error = new Error(message);
        error.status = response.status;
        return error;
    }

    function extractErrorMessage(status, payload) {
        const rawMessage = typeof payload === 'string'
            ? payload
            : payload && (payload.error && payload.error.message ? payload.error.message : payload.message);

        if (rawMessage && /personal access tokens are not supported for this endpoint/i.test(rawMessage)) {
            return 'Endpoint Copilot cũ không nhận PAT. Hãy tải lại trang để widget dùng GitHub Models endpoint với PAT có quyền models:read.';
        }

        if (status === 400 && rawMessage && /model/i.test(rawMessage)) {
            return 'Model ' + state.model + ' chưa được GitHub Models chấp nhận. Hãy thử gpt-4o hoặc gpt-4.1.';
        }

        if (status === 401 || status === 403) {
            return 'PAT không hợp lệ hoặc thiếu quyền models:read trên GitHub Models.';
        }

        if (status === 422) {
            return 'Request bị GitHub Models từ chối. Kiểm tra model hiện tại hoặc giới hạn input/output của tài khoản.';
        }

        if (status === 429) {
            return 'API đang bị rate limit. Hãy thử lại sau.';
        }

        if (rawMessage) {
            return String(rawMessage).trim();
        }

        return 'GitHub Models API trả về lỗi HTTP ' + status + '.';
    }

    function formatRequestError(error) {
        if (error instanceof TypeError) {
            return 'Không gọi được GitHub Models API từ trình duyệt. Nếu đây là lỗi CORS hoặc mạng, bạn sẽ cần một proxy mỏng ở server.';
        }

        return error && error.message ? error.message : 'Có lỗi xảy ra khi gửi câu hỏi.';
    }

    function createMessageElement(role) {
        const wrapper = document.createElement('article');
        wrapper.className = 'hiw-chat-message hiw-chat-message-' + role;

        const label = document.createElement('p');
        label.className = 'hiw-chat-message-label';
        label.textContent = role === 'user' ? 'Bạn' : 'Copilot';

        const content = document.createElement('div');
        content.className = 'hiw-chat-message-content';

        wrapper.appendChild(label);
        wrapper.appendChild(content);

        return { wrapper, content };
    }

    function appendMessage(role, content) {
        const message = createMessageElement(role);
        message.content.textContent = content;
        state.elements.messages.appendChild(message.wrapper);
        scrollMessagesToBottom();
        return message;
    }

    function updateStatus(message, tone) {
        const status = state.elements.status;
        status.textContent = message;
        status.className = 'hiw-chat-status hiw-chat-status-' + tone;
    }

    function setPending(isPending) {
        state.pending = isPending;
        state.elements.sendButton.disabled = isPending;
        state.elements.modelSelect.disabled = isPending;
        state.elements.input.disabled = isPending;
        state.elements.sendButton.textContent = isPending ? 'Đang gửi...' : 'Gửi';
    }

    function focusInputSoon() {
        window.requestAnimationFrame(() => {
            if (!state.elements.input.disabled) {
                state.elements.input.focus();
            }
        });
    }

    function autoResizeInput() {
        const input = state.elements.input;

        if (!input) {
            return;
        }

        input.style.height = 'auto';
        input.style.height = Math.min(input.scrollHeight, 160) + 'px';
    }

    function scrollMessagesToBottom() {
        state.elements.messages.scrollTop = state.elements.messages.scrollHeight;
    }

    function getPageContext() {
        const title = cleanText(
            (document.querySelector('h1') && document.querySelector('h1').textContent) || document.title || 'Trang hiện tại'
        );
        const headings = Array.from(document.querySelectorAll('h1, h2, h3'))
            .map((element) => cleanText(element.textContent))
            .filter(Boolean)
            .slice(0, 18)
            .join(' | ');
        const contentRoot = document.querySelector('main') || document.querySelector('article') || document.body;
        const content = cleanText(contentRoot.innerText || contentRoot.textContent || '').slice(0, MAX_PAGE_CONTEXT);

        return {
            title,
            headings,
            content,
            path: window.location.pathname
        };
    }

    function cleanText(text) {
        return String(text || '')
            .replace(/\s+/g, ' ')
            .trim();
    }

    function normalizeStoredModel(value) {
        const rawValue = String(value || '').trim().toLowerCase();

        if (!rawValue) {
            return DEFAULT_MODEL;
        }

        const matchedModel = AVAILABLE_MODELS.find((model) => {
            return model.label.toLowerCase() === rawValue || model.ids.some((id) => id.toLowerCase() === rawValue);
        });

        if (matchedModel) {
            return matchedModel.label;
        }

        if (rawValue === 'gpt-5-mini' || rawValue === 'gpt 5 mini') {
            return 'gpt-5-mini';
        }

        return DEFAULT_MODEL;
    }

    function extractTextFromPayload(payload) {
        if (typeof payload === 'string') {
            return payload;
        }

        if (Array.isArray(payload)) {
            return payload.map(extractTextFromPayload).join('');
        }

        if (payload && typeof payload === 'object') {
            if (typeof payload.text === 'string') {
                return payload.text;
            }

            if (typeof payload.content === 'string') {
                return payload.content;
            }
        }

        return '';
    }

    function loadSetting(key, fallbackValue) {
        try {
            return window.localStorage.getItem(key) || fallbackValue;
        } catch (error) {e
            return fallbackValue;
        }
    }

    function saveSetting(key, value) {
        try {
            window.localStorage.setItem(key, value);
        } catch (error) {
            updateStatus('Không thể lưu cấu hình vào localStorage trên trình duyệt này.', 'warning');
        }
    }
})();