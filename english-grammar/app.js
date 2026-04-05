// English Grammar learning app
(function() {
    'use strict';

    const topicMap = Object.fromEntries(window.grammarTopics.map(topic => [topic.id, topic]));
    const trackMap = Object.fromEntries(window.grammarTracks.map(track => [track.id, track]));
    const levelOrder = ['beginner', 'intermediate', 'advanced'];
    const levelLabelMap = {
        beginner: '🌱 Người Mới',
        intermediate: '🌿 Trung Cấp',
        advanced: '🌳 Nâng Cao'
    };

    const storageKeys = {
        level: 'englishGrammarLevel',
        viewMode: 'englishGrammarViewMode',
        activeTrack: 'englishGrammarActiveTrack',
        completedTopics: 'englishGrammarCompletedTopics',
        practiceProgress: 'englishGrammarPracticeProgress'
    };

    const state = {
        currentLevel: localStorage.getItem(storageKeys.level) || '',
        viewMode: localStorage.getItem(storageKeys.viewMode) || 'learning',
        activeTrack: localStorage.getItem(storageKeys.activeTrack) || window.grammarTracks[0].id,
        selectedTopicId: null,
        searchQuery: '',
        irregularVerbQuery: '',
        referenceFocusId: null,
        learningFocusId: null,
        filters: {
            track: 'all',
            level: 'all',
            bookSection: 'all',
            pitfallFocus: 'all'
        },
        completedTopics: readJSON(storageKeys.completedTopics, {}),
        practiceProgress: readJSON(storageKeys.practiceProgress, {})
    };

    const elements = {
        body: document.body,
        levelOverlay: document.getElementById('levelOverlay'),
        levelBadge: document.getElementById('levelBadge'),
        heroStats: document.getElementById('heroStats'),
        progressBoard: document.getElementById('progressBoard'),
        trackNav: document.getElementById('trackNav'),
        tracksContainer: document.getElementById('tracksContainer'),
        atlasGrid: document.getElementById('atlasGrid'),
        referenceSearch: document.getElementById('referenceSearch'),
        trackFilter: document.getElementById('trackFilter'),
        levelFilter: document.getElementById('levelFilter'),
        bookFilter: document.getElementById('bookFilter'),
        pitfallFilter: document.getElementById('pitfallFilter'),
        referenceCount: document.getElementById('referenceCount'),
        referenceResults: document.getElementById('referenceResults'),
        coverageTableBody: document.getElementById('coverageTableBody'),
        pronunciationToolkit: document.getElementById('pronunciationToolkit'),
        pronunciationLinks: document.getElementById('pronunciationLinks'),
        irregularVerbSearch: document.getElementById('irregularVerbSearch'),
        irregularVerbCount: document.getElementById('irregularVerbCount'),
        irregularVerbsTableBody: document.getElementById('irregularVerbsTableBody'),
        infoPanel: document.getElementById('infoPanel'),
        panelBackdrop: document.getElementById('panelBackdrop'),
        panelBody: document.getElementById('panelBody')
    };

    function readJSON(key, fallback) {
        try {
            return JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback));
        } catch (error) {
            return fallback;
        }
    }

    function saveJSON(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    function normalizeText(value) {
        return String(value || '')
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/đ/g, 'd');
    }

    function levelIndex(level) {
        return levelOrder.indexOf(level);
    }

    function savePreferences() {
        if (state.currentLevel) {
            localStorage.setItem(storageKeys.level, state.currentLevel);
        }
        localStorage.setItem(storageKeys.viewMode, state.viewMode);
        localStorage.setItem(storageKeys.activeTrack, state.activeTrack);
    }

    function saveProgress() {
        saveJSON(storageKeys.completedTopics, state.completedTopics);
        saveJSON(storageKeys.practiceProgress, state.practiceProgress);
    }

    function getTopicsByTrack(trackId) {
        return window.grammarTopics
            .filter(topic => topic.track === trackId)
            .sort((left, right) => left.trackOrder - right.trackOrder);
    }

    function getVisibleTopics() {
        const query = normalizeText(state.searchQuery);

        return window.grammarTopics.filter(topic => {
            if (state.filters.track !== 'all' && topic.track !== state.filters.track) return false;
            if (state.filters.level !== 'all' && topic.level !== state.filters.level) return false;
            if (state.filters.bookSection !== 'all' && topic.bookSection !== state.filters.bookSection) return false;
            if (state.filters.pitfallFocus !== 'all' && topic.pitfallFocus !== state.filters.pitfallFocus) return false;

            if (!query) return true;

            const haystack = normalizeText([
                topic.title,
                topic.summary,
                topic.bookLabel,
                topic.bookSection,
                topic.pitfallFocus,
                topic.keywords.join(' '),
                topic.whenToUse.join(' '),
                topic.pitfalls.join(' ')
            ].join(' '));

            return haystack.includes(query);
        });
    }

    function isStretch(topic) {
        if (!state.currentLevel) return false;
        return levelIndex(topic.level) > levelIndex(state.currentLevel);
    }

    function getTrackProgress(trackId) {
        const topics = getTopicsByTrack(trackId);
        const done = topics.filter(topic => state.completedTopics[topic.id]).length;
        const practiceTotal = topics.reduce((sum, topic) => sum + topic.practice.length, 0);
        const practiceDone = topics.reduce((sum, topic) => {
            return sum + topic.practice.filter((item, index) => {
                return !!state.practiceProgress[getPracticeKey(topic.id, index)]?.done;
            }).length;
        }, 0);

        return {
            done,
            total: topics.length,
            practiceDone,
            practiceTotal
        };
    }

    function getPracticeKey(topicId, index) {
        return `${topicId}:${index}`;
    }

    function getNextFocusTopic() {
        const currentLevelIndex = Math.max(levelIndex(state.currentLevel), 0);
        const recommended = window.grammarTopics
            .filter(topic => levelIndex(topic.level) <= currentLevelIndex)
            .sort((left, right) => {
                if (left.track === right.track) return left.trackOrder - right.trackOrder;
                return window.grammarTracks.findIndex(track => track.id === left.track) - window.grammarTracks.findIndex(track => track.id === right.track);
            })
            .find(topic => !state.completedTopics[topic.id]);

        return recommended || window.grammarTopics.find(topic => !state.completedTopics[topic.id]) || null;
    }

    function renderHeroStats() {
        const totalPractice = window.grammarTopics.reduce((sum, topic) => sum + topic.practice.length, 0);
        const completedTopics = Object.values(state.completedTopics).filter(Boolean).length;
        const completedPractice = Object.values(state.practiceProgress).filter(item => item?.done).length;

        elements.heroStats.innerHTML = [
            { label: 'Track học', value: `${window.grammarTracks.length}` },
            { label: 'Bài học', value: `${window.grammarTopics.length}` },
            { label: 'Map từ sách', value: `${window.bookCoverage.length}` },
            { label: 'Tiến độ', value: `${completedTopics} bài / ${completedPractice}/${totalPractice} practice` }
        ].map(item => `
            <div class="stat-chip">
                <strong>${item.value}</strong>
                <span>${item.label}</span>
            </div>
        `).join('');
    }

    function renderProgressBoard() {
        const completedTopics = Object.values(state.completedTopics).filter(Boolean).length;
        const totalPractice = window.grammarTopics.reduce((sum, topic) => sum + topic.practice.length, 0);
        const completedPractice = Object.values(state.practiceProgress).filter(item => item?.done).length;
        const nextTopic = getNextFocusTopic();

        const cards = [
            {
                title: 'Cấp độ hiện tại',
                value: state.currentLevel ? levelLabelMap[state.currentLevel] : 'Chưa chọn',
                note: state.currentLevel ? 'Dùng để gợi ý lộ trình học.' : 'Chọn cấp độ để cá nhân hóa lộ trình.'
            },
            {
                title: 'Bài đã chốt',
                value: `${completedTopics}/${window.grammarTopics.length}`,
                note: 'Đánh dấu sau khi bạn hiểu checkpoint của bài.'
            },
            {
                title: 'Practice đã làm',
                value: `${completedPractice}/${totalPractice}`,
                note: 'Theo dõi riêng từng câu mini practice.'
            },
            {
                title: 'Bài nên học tiếp',
                value: nextTopic ? `${nextTopic.icon} ${nextTopic.title}` : 'Đã chốt hết',
                note: nextTopic ? `${trackMap[nextTopic.track].title} • ${nextTopic.bookLabel}` : 'Bạn có thể dùng tầng tra cứu để ôn lại.'
            }
        ];

        elements.progressBoard.innerHTML = cards.map(card => `
            <article class="progress-card">
                <h3>${card.title}</h3>
                <strong>${card.value}</strong>
                <p>${card.note}</p>
            </article>
        `).join('');
    }

    function renderTrackNav() {
        elements.trackNav.innerHTML = window.grammarTracks.map(track => {
            const progress = getTrackProgress(track.id);

            return `
                <button
                    class="track-pill ${track.id === state.activeTrack ? 'active' : ''}"
                    data-action="jump-track"
                    data-track-id="${track.id}"
                >
                    <span class="track-pill-icon">${track.icon}</span>
                    <span class="track-pill-copy">
                        <strong>${track.number}. ${track.title}</strong>
                        <small>${progress.done}/${progress.total} bài • ${progress.practiceDone}/${progress.practiceTotal} practice</small>
                    </span>
                </button>
            `;
        }).join('');
    }

    function renderLearningTracks() {
        elements.tracksContainer.innerHTML = window.grammarTracks.map(track => {
            const topics = getTopicsByTrack(track.id);
            const progress = getTrackProgress(track.id);

            return `
                <section class="track-section" id="track-${track.id}">
                    <div class="track-header">
                        <div>
                            <span class="track-number">${track.number}</span>
                            <h2>${track.icon} ${track.title}</h2>
                            <p>${track.summary}</p>
                        </div>
                        <div class="track-progress">
                            <strong>${progress.done}/${progress.total}</strong>
                            <span>bài đã chốt</span>
                            <small>${progress.practiceDone}/${progress.practiceTotal} practice đã làm</small>
                        </div>
                    </div>
                    <p class="track-goal">Mục tiêu: ${track.goal}</p>
                    <div class="lesson-grid">
                        ${topics.map(renderLessonCard).join('')}
                    </div>
                </section>
            `;
        }).join('');
    }

    function renderLessonCard(topic) {
        const stretch = isStretch(topic);
        const done = !!state.completedTopics[topic.id];

        return `
            <article
                class="lesson-card ${stretch ? 'stretch' : ''} ${done ? 'done' : ''} ${state.learningFocusId === topic.id ? 'spotlight' : ''}"
                data-action="open-topic"
                data-topic-id="${topic.id}"
            >
                <div class="lesson-top">
                    <div class="lesson-icon">${topic.icon}</div>
                    <div class="lesson-badges">
                        <span class="badge level ${topic.level}">${levelLabelMap[topic.level]}</span>
                        <span class="badge book">${topic.bookSection}</span>
                        <span class="badge pitfall">${topic.pitfallFocus}</span>
                    </div>
                </div>
                <h3>${topic.title}</h3>
                <p>${topic.summary}</p>
                <div class="lesson-meta">${topic.bookLabel}</div>
                <div class="lesson-footer">
                    <button class="ghost-btn" data-action="open-topic" data-topic-id="${topic.id}">Mở bài</button>
                    <button class="ghost-btn ${done ? 'success' : ''}" data-action="toggle-topic" data-topic-id="${topic.id}">
                        ${done ? 'Đã chốt' : 'Chốt bài'}
                    </button>
                </div>
                ${stretch ? '<div class="stretch-note">Nội dung này cao hơn level hiện tại của bạn, nhưng vẫn có thể mở để tra cứu.</div>' : ''}
            </article>
        `;
    }

    function renderAtlas() {
        elements.atlasGrid.innerHTML = window.referenceAtlas.map(card => `
            <article class="atlas-card ${card.accent}">
                <h3>${card.icon} ${card.title}</h3>
                <ul>
                    ${card.bullets.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </article>
        `).join('');
    }

    function populateReferenceFilters() {
        const bookSections = [...new Set(window.grammarTopics.map(topic => topic.bookSection))];
        const pitfallFocuses = [...new Set(window.grammarTopics.map(topic => topic.pitfallFocus))];

        elements.trackFilter.innerHTML = `
            <option value="all">Tất cả track</option>
            ${window.grammarTracks.map(track => `<option value="${track.id}">${track.title}</option>`).join('')}
        `;

        elements.levelFilter.innerHTML = `
            <option value="all">Tất cả level</option>
            ${levelOrder.map(level => `<option value="${level}">${levelLabelMap[level]}</option>`).join('')}
        `;

        elements.bookFilter.innerHTML = `
            <option value="all">Tất cả book section</option>
            ${bookSections.map(section => `<option value="${section}">${section}</option>`).join('')}
        `;

        elements.pitfallFilter.innerHTML = `
            <option value="all">Tất cả bẫy chính</option>
            ${pitfallFocuses.map(item => `<option value="${item}">${item}</option>`).join('')}
        `;

        elements.trackFilter.value = state.filters.track;
        elements.levelFilter.value = state.filters.level;
        elements.bookFilter.value = state.filters.bookSection;
        elements.pitfallFilter.value = state.filters.pitfallFocus;
    }

    function renderReferenceResults() {
        const topics = getVisibleTopics();

        elements.referenceCount.textContent = `${topics.length}/${window.grammarTopics.length} bài`;
        elements.referenceResults.innerHTML = topics.map(topic => `
            <article class="reference-topic ${state.referenceFocusId === topic.id ? 'spotlight' : ''}" data-reference-id="${topic.id}">
                <div class="reference-topic-head">
                    <div>
                        <span class="reference-track">${trackMap[topic.track].title}</span>
                        <h3>${topic.icon} ${topic.title}</h3>
                    </div>
                    <span class="badge level ${topic.level}">${levelLabelMap[topic.level]}</span>
                </div>
                <p>${topic.summary}</p>
                <div class="reference-lines">
                    <div><strong>Mục sách:</strong> ${topic.bookLabel}</div>
                    <div><strong>Book section:</strong> ${topic.bookSection}</div>
                    <div><strong>Bẫy chính:</strong> ${topic.pitfallFocus}</div>
                </div>
                <div class="reference-actions">
                    <button class="ghost-btn" data-action="open-topic" data-topic-id="${topic.id}">Mở bài</button>
                    <button class="ghost-btn" data-action="focus-learning" data-topic-id="${topic.id}">Đến track</button>
                </div>
            </article>
        `).join('');

        if (!topics.length) {
            elements.referenceResults.innerHTML = `
                <div class="empty-state">
                    <h3>Không có bài phù hợp bộ lọc hiện tại</h3>
                    <p>Thử xóa search hoặc đổi track/book section/pitfall filter.</p>
                </div>
            `;
        }
    }

    function renderCoverageTable() {
        elements.coverageTableBody.innerHTML = window.bookCoverage.map(item => {
            const topic = topicMap[item.topicId];
            const statusClass = topic ? '' : 'missing';

            return `
                <tr class="${statusClass}">
                    <td>${item.section}</td>
                    <td>${topic ? `${topic.icon} ${topic.title}` : 'Thiếu mapping'}</td>
                    <td>${topic ? trackMap[topic.track].title : '-'}</td>
                    <td>${item.evidence}</td>
                </tr>
            `;
        }).join('');
    }

    function renderPronunciationToolkit() {
        elements.pronunciationToolkit.innerHTML = window.ipaReference.map(block => `
            <article class="toolkit-card">
                <h3>${block.title}</h3>
                <table>
                    <tbody>
                        ${block.rows.map(row => `
                            <tr>
                                <th>${row[0]}</th>
                                <td>${row[1]}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </article>
        `).join('');

        const pronunciationTopics = getTopicsByTrack('pronunciation');
        elements.pronunciationLinks.innerHTML = pronunciationTopics.map(topic => `
            <button class="mini-link" data-action="open-topic" data-topic-id="${topic.id}">
                ${topic.icon} ${topic.title}
            </button>
        `).join('');
    }

    function renderIrregularVerbBank() {
        if (!Array.isArray(window.irregularVerbs)) return;

        const query = normalizeText(state.irregularVerbQuery);
        const filtered = window.irregularVerbs.filter(verb => {
            const haystack = normalizeText([
                verb.base,
                verb.past,
                verb.participle,
                verb.meaning
            ].join(' '));

            return !query || haystack.includes(query);
        });

        elements.irregularVerbsTableBody.innerHTML = filtered.map(verb => `
            <tr>
                <td><strong>${verb.base}</strong></td>
                <td>${verb.past}</td>
                <td>${verb.participle}</td>
                <td>${verb.meaning}</td>
            </tr>
        `).join('');

        elements.irregularVerbCount.textContent = `${filtered.length}/${window.irregularVerbs.length} động từ`;
    }

    function openTopic(topicId) {
        const topic = topicMap[topicId];
        if (!topic) return;

        state.selectedTopicId = topicId;
        const done = !!state.completedTopics[topicId];
        const relatedTopics = topic.connections
            .map(id => topicMap[id])
            .filter(Boolean);

        elements.infoPanel.classList.add('open');
        elements.panelBackdrop.classList.add('open');
        elements.panelBody.innerHTML = `
            <div class="panel-head">
                <div>
                    <span class="panel-kicker">${trackMap[topic.track].number} • ${trackMap[topic.track].title}</span>
                    <h2>${topic.icon} ${topic.title}</h2>
                    <p>${topic.summary}</p>
                </div>
                <div class="panel-badge-stack">
                    <span class="badge level ${topic.level}">${levelLabelMap[topic.level]}</span>
                    <span class="badge book">${topic.bookLabel}</span>
                    <span class="badge pitfall">${topic.pitfallFocus}</span>
                </div>
            </div>

            <div class="panel-action-row">
                <button class="ghost-btn" data-action="focus-reference" data-topic-id="${topic.id}">Xem trong tra cứu</button>
                <button class="ghost-btn" data-action="focus-learning" data-topic-id="${topic.id}">Đến track</button>
                <button class="ghost-btn ${done ? 'success' : ''}" data-action="toggle-topic" data-topic-id="${topic.id}">
                    ${done ? 'Bỏ chốt bài' : 'Đánh dấu đã chốt'}
                </button>
            </div>

            ${renderSection('Khi dùng', topic.whenToUse)}
            ${renderSection('Công thức / khung nhớ', topic.formula, 'formula')}
            ${renderSection('Dấu hiệu / ghi nhớ', topic.signals, 'signals')}
            ${renderExamples(topic.examples)}
            ${renderSection('Bẫy thường gặp', topic.pitfalls, 'pitfalls')}
            ${renderPractice(topic)}
            ${renderSection('Checkpoint', topic.checkpoint, 'checkpoint')}
            <section class="panel-section">
                <h3>Liên quan</h3>
                <div class="related-list">
                    ${relatedTopics.length
                        ? relatedTopics.map(item => `<button class="mini-link" data-action="open-topic" data-topic-id="${item.id}">${item.icon} ${item.title}</button>`).join('')
                        : '<p class="muted">Không có liên kết nội bộ cho bài này.</p>'}
                </div>
            </section>
        `;
    }

    function renderSection(title, items, styleClass) {
        return `
            <section class="panel-section ${styleClass ? `panel-section-${styleClass}` : ''}">
                <h3>${title}</h3>
                <ul>
                    ${items.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </section>
        `;
    }

    function renderExamples(examples) {
        return `
            <section class="panel-section">
                <h3>Ví dụ</h3>
                <div class="example-grid">
                    ${examples.map(example => `
                        <article class="example-card">
                            <strong>${example.en}</strong>
                            <p>${example.vi}</p>
                        </article>
                    `).join('')}
                </div>
            </section>
        `;
    }

    function renderPractice(topic) {
        return `
            <section class="panel-section panel-section-practice">
                <h3>Mini Practice</h3>
                <div class="practice-list">
                    ${topic.practice.map((item, index) => renderPracticeItem(topic, item, index)).join('')}
                </div>
            </section>
        `;
    }

    function renderPracticeItem(topic, item, index) {
        const key = getPracticeKey(topic.id, index);
        const progress = state.practiceProgress[key] || { revealed: false, done: false };

        return `
            <article class="practice-item ${progress.done ? 'done' : ''}">
                <div class="practice-item-head">
                    <strong>Câu ${index + 1}</strong>
                    <label class="practice-check">
                        <input type="checkbox" data-action="toggle-practice-done" data-practice-key="${key}" ${progress.done ? 'checked' : ''}>
                        <span>Đã làm</span>
                    </label>
                </div>
                <p>${item.prompt}</p>
                <div class="practice-actions">
                    <button class="ghost-btn" data-action="toggle-answer" data-practice-key="${key}">
                        ${progress.revealed ? 'Ẩn đáp án' : 'Xem đáp án'}
                    </button>
                </div>
                <div class="practice-answer ${progress.revealed ? 'open' : ''}">
                    <strong>Đáp án:</strong> ${item.answer}
                    <p>${item.explanation}</p>
                </div>
            </article>
        `;
    }

    function closePanel() {
        elements.infoPanel.classList.remove('open');
        elements.panelBackdrop.classList.remove('open');
    }

    function setViewMode(mode) {
        state.viewMode = mode;
        elements.body.dataset.viewMode = mode;
        savePreferences();
        updateModeButtons();
    }

    function updateModeButtons() {
        document.querySelectorAll('[data-view-mode]').forEach(button => {
            button.classList.toggle('active', button.dataset.viewMode === state.viewMode);
        });
    }

    function updateLevelUI() {
        elements.levelBadge.textContent = state.currentLevel ? levelLabelMap[state.currentLevel] : '📘 Chọn level';
        if (state.currentLevel) {
            elements.levelOverlay.style.display = 'none';
        }
    }

    function highlightReferenceCard(topicId) {
        state.referenceFocusId = topicId;
        renderReferenceResults();
        const node = document.querySelector(`[data-reference-id="${topicId}"]`);
        if (node) {
            node.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        window.setTimeout(() => {
            state.referenceFocusId = null;
            renderReferenceResults();
        }, 1800);
    }

    function highlightLearningCard(topicId) {
        state.learningFocusId = topicId;
        renderLearningTracks();
        const node = document.querySelector(`.lesson-card[data-topic-id="${topicId}"]`);
        if (node) {
            node.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        window.setTimeout(() => {
            state.learningFocusId = null;
            renderLearningTracks();
        }, 1800);
    }

    function focusReference(topicId) {
        state.searchQuery = '';
        state.filters = {
            track: 'all',
            level: 'all',
            bookSection: 'all',
            pitfallFocus: 'all'
        };
        elements.referenceSearch.value = '';
        populateReferenceFilters();
        setViewMode('reference');
        highlightReferenceCard(topicId);
    }

    function focusLearning(topicId) {
        const topic = topicMap[topicId];
        if (!topic) return;
        state.activeTrack = topic.track;
        savePreferences();
        renderTrackNav();
        setViewMode('learning');
        highlightLearningCard(topicId);
    }

    function toggleTopicDone(topicId) {
        state.completedTopics[topicId] = !state.completedTopics[topicId];
        saveProgress();
        renderAll(true);
    }

    function togglePracticeAnswer(key) {
        const current = state.practiceProgress[key] || { revealed: false, done: false };
        state.practiceProgress[key] = {
            ...current,
            revealed: !current.revealed
        };
        saveProgress();
        if (state.selectedTopicId) openTopic(state.selectedTopicId);
        renderProgressBoard();
        renderTrackNav();
    }

    function togglePracticeDone(key) {
        const current = state.practiceProgress[key] || { revealed: false, done: false };
        state.practiceProgress[key] = {
            ...current,
            done: !current.done
        };
        saveProgress();
        if (state.selectedTopicId) openTopic(state.selectedTopicId);
        renderProgressBoard();
        renderTrackNav();
        renderLearningTracks();
    }

    function handleDocumentClick(event) {
        const actionNode = event.target.closest('[data-action]');
        if (!actionNode) return;

        const { action, topicId, trackId, practiceKey } = actionNode.dataset;

        switch (action) {
            case 'select-level':
                state.currentLevel = actionNode.dataset.level;
                savePreferences();
                updateLevelUI();
                renderAll();
                break;
            case 'show-levels':
                elements.levelOverlay.style.display = 'flex';
                break;
            case 'set-view':
                setViewMode(actionNode.dataset.viewMode);
                break;
            case 'jump-track':
                state.activeTrack = trackId;
                savePreferences();
                renderTrackNav();
                setViewMode('learning');
                document.getElementById(`track-${trackId}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                break;
            case 'open-topic':
                openTopic(topicId);
                break;
            case 'toggle-topic':
                event.stopPropagation();
                toggleTopicDone(topicId);
                break;
            case 'focus-reference':
                focusReference(topicId);
                break;
            case 'focus-learning':
                focusLearning(topicId);
                openTopic(topicId);
                break;
            case 'toggle-answer':
                togglePracticeAnswer(practiceKey);
                break;
            case 'toggle-practice-done':
                togglePracticeDone(practiceKey);
                break;
            case 'close-panel':
                closePanel();
                break;
            case 'reset-progress':
                state.completedTopics = {};
                state.practiceProgress = {};
                saveProgress();
                renderAll(true);
                break;
            default:
                break;
        }
    }

    function bindInputs() {
        elements.referenceSearch.addEventListener('input', event => {
            state.searchQuery = event.target.value;
            renderReferenceResults();
        });

        elements.trackFilter.addEventListener('change', event => {
            state.filters.track = event.target.value;
            renderReferenceResults();
        });

        elements.levelFilter.addEventListener('change', event => {
            state.filters.level = event.target.value;
            renderReferenceResults();
        });

        elements.bookFilter.addEventListener('change', event => {
            state.filters.bookSection = event.target.value;
            renderReferenceResults();
        });

        elements.pitfallFilter.addEventListener('change', event => {
            state.filters.pitfallFocus = event.target.value;
            renderReferenceResults();
        });

        elements.irregularVerbSearch.addEventListener('input', event => {
            state.irregularVerbQuery = event.target.value;
            renderIrregularVerbBank();
        });

        document.addEventListener('click', handleDocumentClick);
        document.addEventListener('keydown', event => {
            if (event.key === 'Escape') closePanel();
        });
    }

    function renderAll(keepPanelOpen) {
        renderHeroStats();
        renderProgressBoard();
        renderTrackNav();
        renderLearningTracks();
        renderAtlas();
        populateReferenceFilters();
        renderReferenceResults();
        renderCoverageTable();
        renderPronunciationToolkit();
        renderIrregularVerbBank();
        updateLevelUI();
        setViewMode(state.viewMode);

        if (keepPanelOpen && state.selectedTopicId && topicMap[state.selectedTopicId]) {
            openTopic(state.selectedTopicId);
        }
    }

    function init() {
        updateModeButtons();
        bindInputs();
        renderAll();

        if (!state.currentLevel) {
            elements.levelOverlay.style.display = 'flex';
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
