// Phát âm bằng Web Speech API (window.speechSynthesis) — tích hợp sẵn trong
// mọi trình duyệt hiện đại trên Android/iOS/macOS/Windows, dùng engine TTS
// gốc của hệ điều hành (hoặc giọng "cloud" của Chrome nếu có mạng).
// Không cần thư viện hay dịch vụ ngoài.
//
// Một nút nổi 🔊 (đặt cạnh nút AI/Bài tập sẵn có) mở popup cho người dùng
// dán/gõ bất kỳ từ, câu, hay đoạn văn nào rồi bấm nghe — thay vì gắn icon
// loa rải rác khắp trang.
const grammarPronounce = (function () {
    'use strict';

    const supported = typeof window !== 'undefined' && 'speechSynthesis' in window;
    let voicesCache = null;
    let rate = 0.9;

    function loadVoices() {
        if (!supported) return [];
        const voices = window.speechSynthesis.getVoices();
        if (voices.length) voicesCache = voices;
        return voices;
    }

    if (supported) {
        loadVoices();
        // Trên Chrome, danh sách giọng đọc chỉ có sau khi tải xong bất đồng bộ.
        window.speechSynthesis.addEventListener('voiceschanged', loadVoices);
    }

    function pickVoice(lang) {
        const voices = voicesCache || loadVoices();
        if (!voices.length) return null;

        const exact = voices.find(v => v.lang === lang);
        if (exact) return exact;

        const prefix = lang.split('-')[0];
        return voices.find(v => v.lang && v.lang.startsWith(prefix)) || null;
    }

    function speak(text, options = {}) {
        if (!supported || !text || !text.trim()) return false;

        const lang = options.lang || 'en-US';
        window.speechSynthesis.cancel(); // ngắt câu đang đọc dở trước khi đọc câu mới

        const utterance = new SpeechSynthesisUtterance(text.trim());
        utterance.lang = lang;
        utterance.rate = options.rate || rate;
        utterance.pitch = 1;

        const voice = pickVoice(lang);
        if (voice) utterance.voice = voice;

        window.speechSynthesis.speak(utterance);
        return true;
    }

    function stop() {
        if (supported) window.speechSynthesis.cancel();
    }

    // ==================== NÚT NỔI + POPUP NHẬP VĂN BẢN ====================
    function buildWidget() {
        const launcher = document.createElement('button');
        launcher.type = 'button';
        launcher.className = 'pronounce-launcher';
        launcher.setAttribute('aria-label', 'Phát âm từ, câu hoặc đoạn văn');
        launcher.title = 'Phát âm từ, câu hoặc đoạn văn';
        launcher.innerHTML = '<span class="pronounce-launcher-icon">🔊</span>';

        const overlay = document.createElement('div');
        overlay.className = 'pronounce-overlay';
        overlay.hidden = true;
        overlay.innerHTML = `
            <div class="pronounce-modal" role="dialog" aria-modal="true" aria-labelledby="pronounceTitle">
                <button type="button" class="pronounce-close" aria-label="Đóng">×</button>
                <h3 id="pronounceTitle">🔊 Phát âm tiếng Anh</h3>
                <p class="pronounce-hint">Dán hoặc gõ một từ, một câu, hay cả đoạn văn bất kỳ rồi bấm Nghe. Nếu bạn vừa bôi đen văn bản trên trang, nội dung đó đã được điền sẵn.</p>
                <textarea class="pronounce-textarea" rows="4" placeholder="Ví dụ: I have been living here for three years."></textarea>
                <div class="pronounce-rate">
                    <span class="pronounce-rate-label">Tốc độ:</span>
                    <button type="button" class="pronounce-rate-btn" data-rate="0.6">🐢 Chậm</button>
                    <button type="button" class="pronounce-rate-btn active" data-rate="0.9">🚶 Vừa</button>
                    <button type="button" class="pronounce-rate-btn" data-rate="1.15">🏃 Nhanh</button>
                </div>
                <div class="pronounce-actions">
                    <button type="button" class="pronounce-play">▶ Nghe</button>
                    <button type="button" class="pronounce-stop">⏹ Dừng</button>
                </div>
                ${supported ? '' : '<p class="pronounce-unsupported">Trình duyệt này chưa hỗ trợ đọc chữ thành giọng nói (Web Speech API). Hãy thử Chrome, Safari hoặc Edge bản mới.</p>'}
            </div>
        `;

        document.body.appendChild(launcher);
        document.body.appendChild(overlay);

        const textarea = overlay.querySelector('.pronounce-textarea');
        const playBtn = overlay.querySelector('.pronounce-play');
        const stopBtn = overlay.querySelector('.pronounce-stop');
        const closeBtn = overlay.querySelector('.pronounce-close');
        const rateBtns = overlay.querySelectorAll('.pronounce-rate-btn');

        function openModal() {
            const selectedText = window.getSelection ? window.getSelection().toString().trim() : '';
            if (selectedText) textarea.value = selectedText;

            overlay.hidden = false;
            textarea.focus();
            if (selectedText) textarea.select();
        }

        function closeModal() {
            overlay.hidden = true;
            stop();
        }

        launcher.addEventListener('click', openModal);
        closeBtn.addEventListener('click', closeModal);
        overlay.addEventListener('click', event => {
            if (event.target === overlay) closeModal();
        });
        document.addEventListener('keydown', event => {
            if (event.key === 'Escape' && !overlay.hidden) closeModal();
        });

        rateBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                rate = Number(btn.dataset.rate);
                rateBtns.forEach(item => item.classList.toggle('active', item === btn));
            });
        });

        playBtn.addEventListener('click', () => speak(textarea.value));
        textarea.addEventListener('keydown', event => {
            if (event.key === 'Enter' && (event.metaKey || event.ctrlKey)) {
                event.preventDefault();
                speak(textarea.value);
            }
        });
        stopBtn.addEventListener('click', stop);
    }

    if (typeof document !== 'undefined') {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', buildWidget);
        } else {
            buildWidget();
        }
    }

    return { speak, stop, isSupported: () => supported };
})();

if (typeof window !== 'undefined') {
    window.grammarSpeak = grammarPronounce.speak;
    window.grammarPronounce = grammarPronounce;
}
