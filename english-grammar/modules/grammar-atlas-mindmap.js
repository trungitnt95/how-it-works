// Grammar Atlas - Sơ đồ cây (flowchart) theo từng chủ điểm
// Mỗi key là nguồn Mermaid flowchart thô cho 1 card trong Grammar Atlas.
// app.js tìm mọi <pre class="mermaid" data-atlas-key="..."> và render bằng key tương ứng.
//
// Lưu ý: dùng flowchart (không dùng mindmap) vì mermaid mindmap ở bản đang
// dùng có bug ước lượng sai kích thước node (chữ bị cắt ở rìa), trong khi
// flowchart là pattern đã chạy ổn định ở real-estate/money/vietnam-state.

const grammarAtlasMindmaps = {
    tenses: `flowchart LR
    R["⏰ 12 Thì"]
    R --> S["Simple"]
    S --> S1["sự thật, thói quen,<br/>sự kiện hoàn tất"]
    S --> S2["V / V2 / will + V"]
    R --> CO["Continuous"]
    CO --> CO1["đang diễn ra,<br/>tạm thời, bối cảnh"]
    CO --> CO2["be + V-ing"]
    R --> P["Perfect"]
    P --> P1["hoàn tất trước mốc khác"]
    P --> P2["have/has/had + V3"]
    R --> PC["Perfect Continuous"]
    PC --> PC1["nhấn độ dài đến mốc"]
    PC --> PC2["have/has/had been + V-ing"]
    style S fill:#1f4b3f,stroke:#48c774,color:#eaf6f0
    style CO fill:#274a63,stroke:#5dade2,color:#e8f2f8
    style P fill:#5c4415,stroke:#f6b73c,color:#fdf3e0
    style PC fill:#5a2530,stroke:#f05d5e,color:#fbe9ec`,

    clauses: `flowchart LR
    R["🧩 Hệ Thống Mệnh Đề"]
    R --> I["Independent clause"]
    I --> I1["đứng một mình<br/>thành câu hoàn chỉnh"]
    R --> D["Dependent clause"]
    D --> D1["cần mệnh đề chính<br/>để hoàn thiện nghĩa"]
    R --> N["Noun clause"]
    N --> N1["đóng vai danh từ"]
    R --> RE["Relative clause"]
    RE --> RE1["bổ nghĩa cho danh từ"]
    R --> A["Adverbial clause"]
    A --> A1["thời gian, nguyên nhân,<br/>điều kiện, nhượng bộ"]
    style I fill:#1f4b3f,stroke:#48c774,color:#eaf6f0
    style D fill:#274a63,stroke:#5dade2,color:#e8f2f8
    style N fill:#5c4415,stroke:#f6b73c,color:#fdf3e0
    style RE fill:#5a2530,stroke:#f05d5e,color:#fbe9ec
    style A fill:#3a2b52,stroke:#a67ce0,color:#f1e9fb`,

    articles: `flowchart LR
    R["📰 Article + Quantifier"]
    R --> S["Countable singular"]
    S --> S1["a book"]
    S --> S2["a/an, the, this, each"]
    R --> PL["Countable plural"]
    PL --> PL1["books"]
    PL --> PL2["the, some, many, few"]
    R --> U["Uncountable"]
    U --> U1["water"]
    U --> U2["the, some, much, little"]
    style S fill:#1f4b3f,stroke:#48c774,color:#eaf6f0
    style PL fill:#274a63,stroke:#5dade2,color:#e8f2f8
    style U fill:#5c4415,stroke:#f6b73c,color:#fdf3e0`,

    formulas: `flowchart LR
    R["🏗️ Formula Builder"]
    R --> SO["Sentence Order"]
    SO --> SO1["Subject + Verb + Object<br/>+ Manner + Place + Time"]
    R --> QF["Question Forms"]
    QF --> QF1["Question word + Auxiliary<br/>+ Subject + Verb?"]
    R --> CD["Conditionals"]
    CD --> CD1["If + clause, main clause"]
    R --> RC["Relative Clauses"]
    RC --> RC1["Noun + relative clause"]
    style SO fill:#1f4b3f,stroke:#48c774,color:#eaf6f0
    style QF fill:#274a63,stroke:#5dade2,color:#e8f2f8
    style CD fill:#5c4415,stroke:#f6b73c,color:#fdf3e0
    style RC fill:#5a2530,stroke:#f05d5e,color:#fbe9ec`,

    verbs: `flowchart LR
    R["⚙️ Verb System"]
    R --> I["Intransitive"]
    I --> I1["S + V"]
    I --> I2["The baby cried."]
    R --> T["Transitive"]
    T --> T1["S + V + O"]
    T --> T2["She opened the window."]
    R --> L["Linking"]
    L --> L1["S + linking verb + C"]
    L --> L2["The soup tastes good."]
    style I fill:#1f4b3f,stroke:#48c774,color:#eaf6f0
    style T fill:#274a63,stroke:#5dade2,color:#e8f2f8
    style L fill:#5c4415,stroke:#f6b73c,color:#fdf3e0`,

    prepositions: `flowchart LR
    R["📍 Preposition Compass"]
    R --> T["Time"]
    T --> T1["at 7, on Monday, in June"]
    T --> T2["điểm nhỏ / ngày / khoảng rộng"]
    R --> P["Place"]
    P --> P1["at home, on the wall,<br/>in the room"]
    P --> P2["điểm / bề mặt /<br/>không gian bao quanh"]
    R --> M["Movement"]
    M --> M1["to school, into the hall,<br/>onto the stage"]
    M --> M2["hướng đi và chuyển động"]
    style T fill:#1f4b3f,stroke:#48c774,color:#eaf6f0
    style P fill:#274a63,stroke:#5dade2,color:#e8f2f8
    style M fill:#5c4415,stroke:#f6b73c,color:#fdf3e0`,

    irregular: `flowchart LR
    R["📚 Core Irregular Verbs"]
    R --> V1["go – went – gone"]
    R --> V2["see – saw – seen"]
    R --> V3["write – wrote – written"]
    R --> V4["take – took – taken"]
    R --> V5["do – did – done"]
    R --> V6["begin – began – begun"]
    style V1 fill:#1f4b3f,stroke:#48c774,color:#eaf6f0
    style V2 fill:#274a63,stroke:#5dade2,color:#e8f2f8
    style V3 fill:#5c4415,stroke:#f6b73c,color:#fdf3e0
    style V4 fill:#5a2530,stroke:#f05d5e,color:#fbe9ec
    style V5 fill:#3a2b52,stroke:#a67ce0,color:#f1e9fb
    style V6 fill:#2b2f33,stroke:#8f9ba3,color:#e6ebee`,

    traps: `flowchart LR
    R["🚨 High-Frequency Traps"]
    R --> T1["Did you went?<br/>→ Did you go?"]
    R --> T2["more easier<br/>→ easier"]
    R --> T3["an advice<br/>→ a piece of advice"]
    R --> T4["I don't know nothing<br/>→ I don't know anything"]
    R --> T5["I wish I will...<br/>→ I hope... / I wish + past"]
    style T1 fill:#5a2530,stroke:#f05d5e,color:#fbe9ec
    style T2 fill:#5a2530,stroke:#f05d5e,color:#fbe9ec
    style T3 fill:#5a2530,stroke:#f05d5e,color:#fbe9ec
    style T4 fill:#5a2530,stroke:#f05d5e,color:#fbe9ec
    style T5 fill:#5a2530,stroke:#f05d5e,color:#fbe9ec`,

    ipa: `flowchart LR
    R["🗣️ IPA Quick Chart"]
    R --> M["Monophthongs"]
    M --> M1["i: ɪ e æ ʌ ɑ:"]
    M --> M2["see, sit, bed, cat, cup, car"]
    R --> B["Back vowels"]
    B --> B1["ɒ ɔ: ʊ u: ɜ: ə"]
    B --> B2["hot, law, put, blue, bird, about"]
    R --> D["Diphthongs"]
    D --> D1["eɪ aɪ ɔɪ aʊ əʊ ɪə eə ʊə"]
    D --> D2["day, time, boy, now, go, here..."]
    R --> C["Consonants"]
    C --> C1["θ ð ʃ ʒ tʃ dʒ ŋ"]
    C --> C2["think, this, she, vision,<br/>chair, job, sing"]
    style M fill:#1f4b3f,stroke:#48c774,color:#eaf6f0
    style B fill:#274a63,stroke:#5dade2,color:#e8f2f8
    style D fill:#5c4415,stroke:#f6b73c,color:#fdf3e0
    style C fill:#5a2530,stroke:#f05d5e,color:#fbe9ec`
};
