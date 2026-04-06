import { grammarAtlasData } from "./modules/book-data.js";

const sourceNote = document.getElementById("sourceNote");
const moduleCount = document.getElementById("moduleCount");
const exerciseCount = document.getElementById("exerciseCount");
const appendixCount = document.getElementById("appendixCount");
const atlasGrid = document.getElementById("atlasGrid");
const sectionsRoot = document.getElementById("sectionsRoot");
const appendixGrid = document.getElementById("appendixGrid");
const searchInput = document.getElementById("searchInput");
const expandAnswersBtn = document.getElementById("expandAnswersBtn");
const collapseAnswersBtn = document.getElementById("collapseAnswersBtn");

sourceNote.textContent = grammarAtlasData.sourceNote;
moduleCount.textContent = grammarAtlasData.sections.length;
exerciseCount.textContent = grammarAtlasData.sections.reduce((sum, section) => sum + section.exercises.length, 0);
appendixCount.textContent = grammarAtlasData.appendices.length;

function renderAtlasCard(section) {
    return `
        <a class="atlas-card" href="#${section.id}" data-id="${section.id}" data-search="${section.searchText}">
            <div class="page-chip">${section.pageRange}</div>
            <h3>${section.icon} ${section.title}</h3>
            <p>${section.summary}</p>
            <div class="exercise-count">${section.exercises.length} bài tập</div>
        </a>
    `;
}

function renderExample(example) {
    return `
        <article class="example-card">
            <strong>${example.en}</strong>
            <p class="example-note">${example.vi}</p>
            <p class="example-note"><em>Nguồn gợi nhớ: ${example.source}</em></p>
        </article>
    `;
}

function renderSection(section) {
    const answers = section.exercises.map((exercise, index) => `<li><strong>${index + 1}.</strong> ${exercise.answer}</li>`).join("");
    const sourceMap = section.sourceMap.map((item) => `<li><strong>${item.label}</strong>: ${item.pages}</li>`).join("");
    const theoryBlocks = section.theoryBlocks.map((block) => `
        <article class="surface-block">
            <h4>${block.title}</h4>
            <ul class="bullet-list">
                ${block.points.map((point) => `<li>${point}</li>`).join("")}
            </ul>
        </article>
    `).join("");
    const pitfalls = section.pitfalls.map((item) => `<li>${item}</li>`).join("");
    const memorize = section.memorize.map((item) => `<li>${item}</li>`).join("");
    const tags = section.tags.map((item) => `<span class="tag">${item}</span>`).join("");
    const exercises = section.exercises.map((exercise, index) => `
        <li class="exercise-item"><strong>${index + 1}.</strong> ${exercise.prompt}</li>
    `).join("");

    return `
        <article class="section-card" id="${section.id}" data-search="${section.searchText}">
            <header class="section-header">
                <p class="section-kicker">${section.pageRange}</p>
                <div class="section-title-row">
                    <div>
                        <h3>${section.icon} ${section.title}</h3>
                        <p class="section-intro">${section.intro}</p>
                    </div>
                    <div class="section-tags">${tags}</div>
                </div>
            </header>

            <div class="section-grid">
                <div class="section-column">
                    <section class="surface-block">
                        <h4>Bản đồ trang trong sách</h4>
                        <ul class="source-list">${sourceMap}</ul>
                    </section>

                    ${theoryBlocks}

                    <section class="surface-block">
                        <h4>Những gì nên học thuộc</h4>
                        <ul class="bullet-list">${memorize}</ul>
                    </section>
                </div>

                <div class="section-column">
                    <section class="surface-block">
                        <h4>Ví dụ trọng tâm</h4>
                        <div class="example-list">
                            ${section.examples.map(renderExample).join("")}
                        </div>
                    </section>

                    <section class="surface-block">
                        <h4>Lỗi / nhầm lẫn thường gặp</h4>
                        <ul class="bullet-list">${pitfalls}</ul>
                    </section>

                    <section class="surface-block">
                        <h4>10 bài tập luyện nhanh</h4>
                        <ol class="exercise-list">${exercises}</ol>
                        <details class="answers-box">
                            <summary>Xem đáp án</summary>
                            <ol class="answer-list">${answers}</ol>
                        </details>
                    </section>
                </div>
            </div>
        </article>
    `;
}

function renderAppendixCard(item) {
    return `
        <article class="appendix-card" data-search="${`${item.title} ${item.tags.join(" ")}`.toLowerCase()}">
            <div class="appendix-tags">${item.tags.map((tag) => `<span class="appendix-tag">${tag}</span>`).join("")}</div>
            <h3>${item.title}</h3>
            <div class="appendix-body">${item.contentHtml}</div>
        </article>
    `;
}

atlasGrid.innerHTML = grammarAtlasData.sections.map(renderAtlasCard).join("");
sectionsRoot.innerHTML = grammarAtlasData.sections.map(renderSection).join("");
appendixGrid.innerHTML = grammarAtlasData.appendices.map(renderAppendixCard).join("");

function setAllAnswers(open) {
    document.querySelectorAll(".answers-box").forEach((details) => {
        details.open = open;
    });
}

expandAnswersBtn.addEventListener("click", () => setAllAnswers(true));
collapseAnswersBtn.addEventListener("click", () => setAllAnswers(false));

searchInput.addEventListener("input", (event) => {
    const normalize = (value) => value
        .toLowerCase()
        .normalize("NFD")
        .replace(/\p{Diacritic}/gu, "");
    const term = normalize(event.target.value.trim());
    document.querySelectorAll("[data-search]").forEach((node) => {
        const haystack = normalize(node.dataset.search || "");
        node.classList.toggle("hidden", term && !haystack.includes(term));
    });
});

const atlasCards = [...document.querySelectorAll(".atlas-card")];
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            return;
        }
        atlasCards.forEach((card) => card.classList.toggle("active", card.dataset.id === entry.target.id));
    });
}, {
    rootMargin: "-20% 0px -60% 0px",
    threshold: 0.1
});

document.querySelectorAll(".section-card").forEach((section) => observer.observe(section));
