// ==================== DESIGN PATTERNS APP - MAIN CONTROLLER ====================
// Requires: modules/patterns-data.js (loads `patterns` object)

// Level texts
const levelTexts = {
    beginner: '🌱 Người Mới',
    intermediate: '🌿 Trung Cấp',
    advanced: '🌳 Nâng Cao'
};

// Current state
let currentLevel = localStorage.getItem('designPatternLevel') || null;
let bookmarkedPatterns = JSON.parse(localStorage.getItem('bookmarkedPatterns') || '[]');

// DOM Elements
const levelOverlay = document.getElementById('levelOverlay');
const levelBadge = document.getElementById('levelBadge');
const patternModal = document.getElementById('patternModal');
const closeModalBtn = document.getElementById('closeModal');
const changeLevelBtn = document.getElementById('changeLevelBtn');
const filterBtns = document.querySelectorAll('.filter-btn');
const categorySections = document.querySelectorAll('.category-section');

// ==================== INITIALIZATION ====================

function init() {
    if (!currentLevel) {
        showLevelSelection();
    } else {
        levelOverlay.classList.add('hidden');
        levelBadge.textContent = levelTexts[currentLevel];
    }
    
    renderPatterns();
    setupEventListeners();
}

// Show level selection
function showLevelSelection() {
    levelOverlay.classList.remove('hidden');
}

// ==================== EVENT LISTENERS ====================

function setupEventListeners() {
    // Level selection
    document.querySelectorAll('.level-card').forEach(card => {
        card.addEventListener('click', () => {
            const level = card.dataset.level;
            currentLevel = level;
            localStorage.setItem('designPatternLevel', level);
            levelOverlay.classList.add('hidden');
            levelBadge.textContent = levelTexts[level];
        });
    });
    
    // Change level button
    changeLevelBtn.addEventListener('click', showLevelSelection);
    
    // Close modal
    closeModalBtn.addEventListener('click', closeModal);
    patternModal.addEventListener('click', (e) => {
        if (e.target === patternModal) closeModal();
    });
    
    // Escape key to close modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });
    
    // Filter buttons
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filterPatterns(btn.dataset.category);
        });
    });
}

// ==================== RENDER PATTERNS ====================

function renderPatterns() {
    renderPatternCategory('creational', document.getElementById('creationalGrid'));
    renderPatternCategory('structural', document.getElementById('structuralGrid'));
    renderPatternCategory('behavioral', document.getElementById('behavioralGrid'));
}

function renderPatternCategory(category, container) {
    const categoryPatterns = patterns[category];
    container.innerHTML = categoryPatterns.map(pattern => createPatternCard(pattern, category)).join('');
    
    // Add click listeners
    container.querySelectorAll('.pattern-card').forEach(card => {
        card.addEventListener('click', () => {
            const patternId = card.dataset.patternId;
            openPatternModal(patternId, category);
        });
    });
}

function createPatternCard(pattern, category) {
    const difficultyText = {
        easy: '⭐ Dễ',
        medium: '⭐⭐ Trung bình',
        hard: '⭐⭐⭐ Khó'
    };
    
    return `
        <div class="pattern-card ${category}" data-pattern-id="${pattern.id}">
            <div class="card-header">
                <span class="card-icon">${pattern.icon}</span>
                <div class="card-title-section">
                    <h3 class="card-title">${pattern.name}</h3>
                    <span class="card-category ${category}">${category.charAt(0).toUpperCase() + category.slice(1)}</span>
                    <span class="difficulty-badge ${pattern.difficulty}">${difficultyText[pattern.difficulty]}</span>
                </div>
            </div>
            <p class="card-description">${pattern.shortDesc}</p>
            <div class="card-use-cases">
                <h4>Ứng dụng:</h4>
                <div class="use-case-list">
                    ${pattern.useCases.slice(0, 3).map(uc => `<span class="use-case">${uc}</span>`).join('')}
                </div>
            </div>
            <div class="card-footer">
                <button class="learn-btn">Tìm hiểu →</button>
            </div>
        </div>
    `;
}

// ==================== FILTER PATTERNS ====================

function filterPatterns(category) {
    categorySections.forEach(section => {
        if (category === 'all' || section.dataset.category === category) {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });
}

// ==================== PATTERN MODAL ====================

function openPatternModal(patternId, category) {
    const pattern = patterns[category].find(p => p.id === patternId);
    if (!pattern) return;
    
    const difficultyText = {
        easy: '⭐ Dễ',
        medium: '⭐⭐ Trung bình',
        hard: '⭐⭐⭐ Khó'
    };
    
    document.getElementById('modalIcon').textContent = pattern.icon;
    document.getElementById('modalTitle').textContent = pattern.name;
    document.getElementById('modalCategory').textContent = category.charAt(0).toUpperCase() + category.slice(1);
    document.getElementById('modalCategory').className = `card-category ${category}`;
    document.getElementById('modalDifficulty').textContent = difficultyText[pattern.difficulty];
    document.getElementById('modalDifficulty').className = `difficulty-badge ${pattern.difficulty}`;
    
    const modalBody = document.getElementById('modalBody');
    modalBody.innerHTML = generatePatternContent(pattern, category);
    
    // Setup tabs
    setupTabs();
    
    patternModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function generatePatternContent(pattern, category) {
    return `
        <!-- Real World Analogy -->
        <div class="modal-section">
            <div class="analogy-box">
                <h4>💡 Ví dụ thực tế</h4>
                <p>${pattern.realWorldAnalogy}</p>
            </div>
        </div>
        
        <!-- What is it -->
        <div class="modal-section">
            <h3>📖 Pattern là gì?</h3>
            <p>${pattern.shortDesc}</p>
        </div>
        
        <!-- Pros and Cons -->
        <div class="modal-section">
            <h3>⚖️ Ưu và nhược điểm</h3>
            <div class="pros-cons">
                <div class="pros">
                    <h4>✅ Ưu điểm</h4>
                    <ul>
                        ${pattern.pros.map(pro => `<li>${pro}</li>`).join('')}
                    </ul>
                </div>
                <div class="cons">
                    <h4>❌ Nhược điểm</h4>
                    <ul>
                        ${pattern.cons.map(con => `<li>${con}</li>`).join('')}
                    </ul>
                </div>
            </div>
        </div>
        
        <!-- Use Cases -->
        <div class="modal-section">
            <h3>🎯 Khi nào sử dụng?</h3>
            <ul>
                ${pattern.useCases.map(uc => `<li>${uc}</li>`).join('')}
            </ul>
        </div>
        
        <!-- Code Example -->
        <div class="modal-section">
            <h3>💻 Code Example (TypeScript)</h3>
            <div class="tab-container">
                <div class="tab-buttons">
                    <button class="tab-btn active" data-tab="typescript">TypeScript</button>
                    <button class="tab-btn" data-tab="explanation">Giải thích</button>
                </div>
                <div class="tab-content active" data-tab="typescript">
                    <div class="code-block">
                        <pre>${escapeHtml(pattern.codeExample)}</pre>
                    </div>
                </div>
                <div class="tab-content" data-tab="explanation">
                    <p>Code trên minh họa cách implement ${pattern.name} pattern trong TypeScript. 
                    Các thành phần chính bao gồm:</p>
                    <ul>
                        <li><strong>Interface:</strong> Định nghĩa contract cho các classes</li>
                        <li><strong>Concrete classes:</strong> Implement các interface</li>
                        <li><strong>Client code:</strong> Sử dụng pattern thông qua interface</li>
                    </ul>
                </div>
            </div>
        </div>
        
        <!-- Related Patterns -->
        <div class="modal-section">
            <h3>🔗 Patterns liên quan</h3>
            <p>Pattern này thường được sử dụng kết hợp với các patterns khác trong cùng nhóm ${category}.</p>
        </div>
        
        <!-- Quick Quiz -->
        <div class="modal-section">
            <h3>📝 Kiểm tra nhanh</h3>
            <div class="quiz-container">
                <p class="quiz-question">Khi nào nên sử dụng ${pattern.name} pattern?</p>
                <div class="quiz-options">
                    <div class="quiz-option" data-correct="true">${pattern.useCases[0]}</div>
                    <div class="quiz-option" data-correct="false">Khi muốn code phức tạp hơn</div>
                    <div class="quiz-option" data-correct="false">Khi có ít class trong project</div>
                </div>
                <div class="quiz-feedback"></div>
            </div>
        </div>
    `;
}

// ==================== TABS & QUIZ ====================

function setupTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tab = btn.dataset.tab;
            
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            btn.classList.add('active');
            document.querySelector(`.tab-content[data-tab="${tab}"]`).classList.add('active');
        });
    });
    
    // Quiz
    const quizOptions = document.querySelectorAll('.quiz-option');
    const quizFeedback = document.querySelector('.quiz-feedback');
    
    quizOptions.forEach(option => {
        option.addEventListener('click', () => {
            if (option.classList.contains('correct') || option.classList.contains('incorrect')) return;
            
            const isCorrect = option.dataset.correct === 'true';
            
            quizOptions.forEach(o => {
                if (o.dataset.correct === 'true') {
                    o.classList.add('correct');
                } else if (o === option) {
                    o.classList.add('incorrect');
                }
            });
            
            quizFeedback.classList.add('show');
            if (isCorrect) {
                quizFeedback.classList.add('correct');
                quizFeedback.textContent = '🎉 Chính xác! Bạn đã hiểu đúng về pattern này.';
            } else {
                quizFeedback.classList.add('incorrect');
                quizFeedback.textContent = '❌ Chưa đúng. Xem lại phần "Khi nào sử dụng" nhé!';
            }
        });
    });
}

// ==================== UTILITIES ====================

function closeModal() {
    patternModal.classList.remove('active');
    document.body.style.overflow = '';
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// ==================== INITIALIZE APP ====================

init();

console.log('Design Patterns app loaded successfully! 🎨');
