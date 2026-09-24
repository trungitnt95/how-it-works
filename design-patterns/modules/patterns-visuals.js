// ==================== DESIGN PATTERNS - VISUAL DATA ====================
// Dữ liệu hình ảnh cho từng pattern (key = id trong patterns-data.js):
//   nick        : biệt danh tiếng Việt dễ nhớ
//   glyph       : "công thức" emoji hiển thị trên thẻ
//   keyIdea     : ý tưởng cốt lõi trong 1 câu
//   problem     : { text, diagram } - chuyện gì xảy ra nếu KHÔNG dùng pattern
//   solution    : { text, diagram } - pattern gỡ rối thế nào
//   classDiagram: sơ đồ lớp UML (Mermaid)
//   sequence    : sơ đồ luồng chạy (Mermaid sequenceDiagram)
//   roles       : các vai trò trong pattern và class nào đóng vai đó (khớp code mẫu)
//   inTheWild   : gặp ở đâu trong thực tế
//   related     : pattern dễ nhầm / hay đi cùng, kèm điểm khác biệt
//   avoid       : khi nào KHÔNG nên dùng
// Flowchart dùng các class :::bad :::good :::core :::muted - app.js tự thêm classDef tương ứng.

const patternVisuals = {
    // ==================== CREATIONAL ====================
    'factory-method': {
        nick: 'Để lớp con quyết định tạo gì',
        glyph: '📦 ➜ 🏭 ➜ 🚚 | 🚢',
        keyIdea: 'Lớp cha viết quy trình chung và gọi một phương thức "tạo" trừu tượng; mỗi lớp con override phương thức đó để trả về sản phẩm của riêng mình.',
        problem: {
            text: 'Ban đầu app chỉ giao bằng xe tải nên <code>new Truck()</code> rải khắp nơi. Khi thêm tàu thủy (rồi máy bay…), bạn phải sửa mọi chỗ bằng if/else theo loại vận chuyển.',
            diagram: `flowchart LR
    P["📦 planDelivery()<br/>if type == 'road' ...<br/>else if type == 'sea' ...<br/>else if ..."]:::bad
    P -->|"new Truck()"| T["🚚 Truck"]
    P -->|"new Ship()"| S["🚢 Ship"]
    P -.->|"thêm loại mới = sửa code cũ"| A["✈️ Plane?"]:::muted`
        },
        solution: {
            text: 'Quy trình <code>planDelivery()</code> chỉ gọi <code>createTransport()</code>. Muốn thêm loại mới? Tạo thêm một lớp con — không đụng vào code cũ (Open/Closed).',
            diagram: `flowchart LR
    L["📦 Logistics<br/>planDelivery()<br/>→ createTransport()"]:::core
    L --> R["🛣️ RoadLogistics"]:::good
    L --> S["⚓ SeaLogistics"]:::good
    L -.-> A["✈️ AirLogistics<br/>(thêm mới)"]:::good
    R -->|"tạo"| T["🚚 Truck"]
    S -->|"tạo"| SH["🚢 Ship"]
    A -.->|"tạo"| PL["✈️ Plane"]`
        },
        classDiagram: `classDiagram
    direction LR
    class Logistics {
        <<abstract>>
        +planDelivery() void
        +createTransport()* Transport
    }
    class RoadLogistics {
        +createTransport() Transport
    }
    class SeaLogistics {
        +createTransport() Transport
    }
    class Transport {
        <<interface>>
        +deliver() void
    }
    class Truck {
        +deliver() void
    }
    class Ship {
        +deliver() void
    }
    Logistics <|-- RoadLogistics
    Logistics <|-- SeaLogistics
    Transport <|.. Truck
    Transport <|.. Ship
    Logistics ..> Transport : dùng
    RoadLogistics ..> Truck : tạo
    SeaLogistics ..> Ship : tạo
    style Logistics fill:#2a2350,stroke:#9b59b6`,
        sequence: `sequenceDiagram
    autonumber
    participant C as 👤 Client
    participant R as RoadLogistics
    participant T as Truck
    C->>R: planDelivery()
    R->>R: createTransport()
    R->>T: new Truck()
    R->>T: deliver()
    T-->>C: "Giao hàng bằng đường bộ"`,
        roles: [
            { role: 'Creator', cls: 'Logistics', desc: 'Chứa quy trình chung và khai báo factory method createTransport()' },
            { role: 'Concrete Creator', cls: 'RoadLogistics, SeaLogistics', desc: 'Override factory method để quyết định tạo sản phẩm nào' },
            { role: 'Product', cls: 'Transport', desc: 'Interface chung mà mọi sản phẩm phải tuân theo' },
            { role: 'Concrete Product', cls: 'Truck, Ship', desc: 'Sản phẩm thật được tạo ra' }
        ],
        inTheWild: ['document.createElement() tạo đúng loại thẻ HTML', 'Framework cho bạn override createXxx() để thay thành phần mặc định', 'Logger factory tạo ConsoleLogger / FileLogger theo cấu hình'],
        related: [
            { id: 'abstract-factory', note: 'Factory Method tạo MỘT sản phẩm qua kế thừa; Abstract Factory tạo cả HỌ sản phẩm qua một object factory.' },
            { id: 'template-method', note: 'Factory Method thường chính là một "bước" trong Template Method.' },
            { id: 'prototype', note: 'Prototype tạo bằng cách clone, không cần cây lớp con Creator.' }
        ],
        avoid: ['Chỉ có đúng một loại sản phẩm và gần như không đổi — một <code>new</code> đơn giản là đủ', 'Có thể truyền một hàm tạo (lambda) vào — trong TS/JS thường gọn hơn tạo cây lớp con']
    },

    'abstract-factory': {
        nick: 'Xưởng sản xuất theo bộ',
        glyph: '🏭 ➜ 🪑 🍽️ 💡 (cùng bộ)',
        keyIdea: 'Một interface factory có nhiều phương thức tạo (ghế, bàn…); mỗi factory cụ thể sản xuất trọn một bộ sản phẩm đồng phong cách.',
        problem: {
            text: 'Code gọi <code>new ModernChair()</code> chỗ này, <code>new VictorianTable()</code> chỗ kia → dễ lắp nhầm bộ (ghế hiện đại + bàn cổ điển). Thêm phong cách mới phải lục khắp code.',
            diagram: `flowchart LR
    C["👤 Client"]:::bad --> MC["🪑 ModernChair"]
    C --> VT["🍽️ VictorianTable"]
    C --> MS["💡 ModernLamp"]
    VT -.-|"❌ lệch bộ"| MC`
        },
        solution: {
            text: 'Client chỉ nhận một <code>FurnitureFactory</code>. Chọn factory một lần lúc khởi động → mọi sản phẩm tạo ra luôn cùng bộ.',
            diagram: `flowchart LR
    C["👤 Client<br/>chỉ biết FurnitureFactory"]:::core --> F{{"🏭 factory được chọn<br/>1 lần lúc khởi động"}}
    F --> M["✨ ModernFactory"]:::good
    F --> V["🏛️ VictorianFactory"]:::good
    M --> MC["🪑 ModernChair"]
    M --> MT["🍽️ ModernTable"]
    V --> VC["🪑 VictorianChair"]
    V --> VT["🍽️ VictorianTable"]`
        },
        classDiagram: `classDiagram
    class FurnitureFactory {
        <<interface>>
        +createChair() Chair
        +createTable() Table
    }
    class Chair {
        <<interface>>
        +sitOn() void
    }
    class Table {
        <<interface>>
        +putOn() void
    }
    Client --> FurnitureFactory
    FurnitureFactory <|.. ModernFurnitureFactory
    FurnitureFactory <|.. VictorianFurnitureFactory
    ModernFurnitureFactory ..> ModernChair : tạo
    ModernFurnitureFactory ..> ModernTable : tạo
    VictorianFurnitureFactory ..> VictorianChair : tạo
    VictorianFurnitureFactory ..> VictorianTable : tạo
    Chair <|.. ModernChair
    Chair <|.. VictorianChair
    Table <|.. ModernTable
    Table <|.. VictorianTable
    style FurnitureFactory fill:#2a2350,stroke:#9b59b6`,
        sequence: `sequenceDiagram
    autonumber
    participant C as 👤 furnishRoom()
    participant F as ModernFurnitureFactory
    participant CH as ModernChair
    participant T as ModernTable
    Note over C,F: factory được truyền vào từ bên ngoài
    C->>F: createChair()
    F-->>C: ModernChair
    C->>F: createTable()
    F-->>C: ModernTable
    C->>CH: sitOn()
    C->>T: putOn()`,
        roles: [
            { role: 'Abstract Factory', cls: 'FurnitureFactory', desc: 'Khai báo phương thức tạo cho từng loại sản phẩm trong bộ' },
            { role: 'Concrete Factory', cls: 'ModernFurnitureFactory, VictorianFurnitureFactory', desc: 'Tạo trọn bộ sản phẩm cùng một phong cách' },
            { role: 'Abstract Product', cls: 'Chair, Table', desc: 'Interface cho từng loại sản phẩm' },
            { role: 'Concrete Product', cls: 'ModernChair, VictorianTable…', desc: 'Sản phẩm cụ thể thuộc một họ' },
            { role: 'Client', cls: 'furnishRoom()', desc: 'Chỉ làm việc qua interface, không biết đang dùng họ nào' }
        ],
        inTheWild: ['Bộ UI đa nền tảng: WindowsButton + WindowsCheckbox vs MacButton + MacCheckbox', 'Theme sáng/tối tạo cả bộ component đồng bộ', 'Driver database: mỗi DB có bộ Connection + Command + Reader riêng'],
        related: [
            { id: 'factory-method', note: 'Mỗi phương thức createX() của Abstract Factory thường chính là một Factory Method.' },
            { id: 'builder', note: 'Builder lắp MỘT object phức tạp từng bước; Abstract Factory trả về ngay cả HỌ object.' },
            { id: 'singleton', note: 'Concrete Factory thường chỉ cần một instance.' }
        ],
        avoid: ['Chỉ có một họ sản phẩm duy nhất', 'Họ sản phẩm hay thêm loại mới (thêm Sofa là phải sửa MỌI factory)']
    },

    'builder': {
        nick: 'Lắp ráp từng bước',
        glyph: '🍞 ➜ 🥩 ➜ 🧀 ➜ 🍔',
        keyIdea: 'Tách việc lắp một object phức tạp thành các bước có tên (setX, setY…), gọi bước nào tùy ý, cuối cùng mới lấy thành phẩm bằng getResult().',
        problem: {
            text: 'Constructor "khổng lồ" <code>new Car(4, "V6", true, false, null, true, …)</code> — không ai nhớ tham số thứ 5 là gì, và phải truyền <code>null</code> cho các tùy chọn không dùng (telescoping constructor).',
            diagram: `flowchart LR
    C["👤 Client"]:::bad -->|"new Car(4, 'V6', true, false, null, true, ...)"| K["🚗 Car<br/>constructor 10 tham số"]:::bad
    K -.- Q["❓ tham số thứ 5 là gì?"]:::muted`
        },
        solution: {
            text: 'Mỗi tùy chọn là một bước có tên rõ ràng, bỏ qua bước không cần. Director (tùy chọn) gói sẵn các "công thức" hay dùng.',
            diagram: `flowchart LR
    C["👤 Client"] --> S1["setSeats(4)"]:::good --> S2["setEngine('V6')"]:::good --> S3["setGPS()"]:::good --> R["getResult()"]:::core --> K["🚗 Car hoàn chỉnh"]
    D["🧑‍🍳 Director<br/>công thức có sẵn"]:::muted -.-> S1`
        },
        classDiagram: `classDiagram
    direction LR
    class CarDirector {
        +constructSportsCar(builder) Car
    }
    class CarBuilder {
        <<interface>>
        +reset() void
        +setSeats(n) CarBuilder
        +setEngine(type) CarBuilder
        +setGPS() CarBuilder
        +getResult() Car
    }
    class SportsCarBuilder {
        -car: Car
        +setSeats(n) CarBuilder
        +getResult() Car
    }
    class Car {
        +seats: number
        +engine: string
        +gps: boolean
    }
    CarDirector --> CarBuilder : điều khiển
    CarBuilder <|.. SportsCarBuilder
    SportsCarBuilder --> Car : lắp ráp
    style CarBuilder fill:#2a2350,stroke:#9b59b6`,
        sequence: `sequenceDiagram
    autonumber
    participant C as 👤 Client
    participant B as SportsCarBuilder
    participant K as Car
    C->>B: new SportsCarBuilder()
    B->>K: new Car() — còn rỗng
    C->>B: setSeats(4)
    B->>K: seats = 4
    C->>B: setEngine("V6")
    B->>K: engine = "V6"
    C->>B: getResult()
    B-->>C: Car hoàn chỉnh
    B->>B: reset() cho lần sau`,
        roles: [
            { role: 'Builder', cls: 'CarBuilder', desc: 'Khai báo các bước lắp ráp' },
            { role: 'Concrete Builder', cls: 'SportsCarBuilder', desc: 'Thực hiện các bước và giữ sản phẩm đang lắp dở' },
            { role: 'Product', cls: 'Car', desc: 'Object phức tạp cần tạo' },
            { role: 'Director', cls: 'CarDirector', desc: 'Tùy chọn — gói sẵn "công thức" gọi các bước theo thứ tự' }
        ],
        inTheWild: ['Query builder: knex("users").where(...).orderBy(...).limit(10)', 'StringBuilder trong Java/C#', 'Tạo request HTTP: new Request.Builder().url(...).header(...).build()'],
        related: [
            { id: 'abstract-factory', note: 'Abstract Factory trả sản phẩm ngay; Builder cho lắp nhiều bước rồi mới lấy.' },
            { id: 'composite', note: 'Builder rất hợp để dựng cây Composite phức tạp.' },
            { id: 'factory-method', note: 'Factory Method tạo trong một lần gọi; Builder chia thành nhiều lần gọi.' }
        ],
        avoid: ['Object chỉ có 2–3 tham số — constructor thường là đủ', 'Trong TS, object tham số <code>{ seats, engine, gps }</code> có giá trị mặc định thường thay được Builder đơn giản']
    },

    'prototype': {
        nick: 'Nhân bản từ mẫu',
        glyph: '📄 ➜ 🖨️ ➜ 📄📄',
        keyIdea: 'Object tự biết clone chính nó (kể cả field private); client chỉ gọi clone() mà không cần biết class cụ thể.',
        problem: {
            text: 'Muốn copy một object, bạn phải biết class cụ thể của nó và chép từng field — nhưng field private thì không truy cập được, và code copy bị trói chặt vào class.',
            diagram: `flowchart LR
    C["👤 Client"]:::bad -->|"new Rectangle()<br/>copy.x = src.x<br/>copy.y = src.y ..."| R["▭ Rectangle"]
    C -.->|"❌ field private?"| P["🔒 private fields"]:::muted`
        },
        solution: {
            text: 'Đưa việc sao chép vào chính object: <code>original.clone()</code>. Client không cần biết đó là Rectangle hay Circle.',
            diagram: `flowchart LR
    C["👤 Client"] -->|"clone()"| O["📄 Bản gốc<br/>tự biết copy mình"]:::core
    O --> C1["📄 Bản sao 1"]:::good
    O --> C2["📄 Bản sao 2"]:::good`
        },
        classDiagram: `classDiagram
    class Prototype {
        <<interface>>
        +clone() Prototype
    }
    class Shape {
        +x: number
        +y: number
        +color: string
        +clone() Shape
    }
    class Rectangle {
        +width: number
        +height: number
        +clone() Rectangle
    }
    Client --> Prototype : clone()
    Prototype <|.. Shape
    Shape <|-- Rectangle
    note for Shape "clone() gọi new Shape(this)"
    style Prototype fill:#2a2350,stroke:#9b59b6`,
        sequence: `sequenceDiagram
    autonumber
    participant C as 👤 Client
    participant O as original: Rectangle
    participant K as copy: Rectangle
    C->>O: clone()
    O->>K: new Rectangle(this)
    K->>K: chép x, y, color, width, height
    O-->>C: copy
    Note over C,K: copy !== original nhưng cùng dữ liệu`,
        roles: [
            { role: 'Prototype', cls: 'Prototype', desc: 'Interface khai báo clone()' },
            { role: 'Concrete Prototype', cls: 'Shape, Rectangle', desc: 'Tự implement việc sao chép dữ liệu của mình' },
            { role: 'Client', cls: 'code dùng clone()', desc: 'Gọi clone() để có object mới mà không cần biết class' }
        ],
        inTheWild: ['Object.create(proto) và chuỗi prototype của JavaScript', 'structuredClone() / "Duplicate" slide trong PowerPoint', 'Game: sinh quái vật từ một mẫu đã cấu hình sẵn'],
        related: [
            { id: 'factory-method', note: 'Prototype không cần cây lớp con Creator, đổi lại phải implement clone() cẩn thận.' },
            { id: 'memento', note: 'Clone là một cách đơn giản để làm snapshot cho Memento.' },
            { id: 'flyweight', note: 'Prototype tạo bản sao độc lập; Flyweight chia sẻ đúng một bản.' }
        ],
        avoid: ['Object có tham chiếu vòng hoặc tài nguyên không copy được (socket, file handle)', 'Object đơn giản — <code>structuredClone()</code> hoặc spread <code>{...obj}</code> là đủ']
    },

    'singleton': {
        nick: 'Chỉ một bản duy nhất',
        glyph: '👥 ➜ 1️⃣',
        keyIdea: 'Constructor private + một phương thức static getInstance() luôn trả về cùng một object.',
        problem: {
            text: 'Mỗi module tự <code>new Database()</code> → mở hàng chục kết nối, cấu hình lệch nhau, tốn tài nguyên.',
            diagram: `flowchart LR
    A["📦 Module A"] -->|"new"| D1["🗄️ DB #1"]:::bad
    B["📦 Module B"] -->|"new"| D2["🗄️ DB #2"]:::bad
    C["📦 Module C"] -->|"new"| D3["🗄️ DB #3"]:::bad`
        },
        solution: {
            text: 'Chặn <code>new</code> từ bên ngoài, mọi nơi lấy chung một instance qua <code>getInstance()</code>.',
            diagram: `flowchart LR
    A["📦 Module A"] -->|"getInstance()"| D["🗄️ Database<br/>duy nhất"]:::good
    B["📦 Module B"] -->|"getInstance()"| D
    C["📦 Module C"] -->|"getInstance()"| D
    X["🚫 new Database()"]:::muted -.-x|"constructor private"| D`
        },
        classDiagram: `classDiagram
    class Database {
        -instance: Database$
        -connection: string
        -Database()
        +getInstance()$ Database
        +query(sql) void
    }
    Database --> Database : instance
    ModuleA ..> Database : getInstance()
    ModuleB ..> Database : getInstance()
    style Database fill:#2a2350,stroke:#9b59b6`,
        sequence: `sequenceDiagram
    autonumber
    participant A as 📦 Module A
    participant B as 📦 Module B
    participant D as Database (class)
    A->>D: getInstance()
    alt chưa có instance
        D->>D: instance = new Database()
    end
    D-->>A: instance
    B->>D: getInstance()
    D-->>B: instance (cùng object)
    Note over A,B: db1 === db2 → true`,
        roles: [
            { role: 'Singleton', cls: 'Database', desc: 'Giữ instance duy nhất trong field static, constructor private' },
            { role: 'Access point', cls: 'getInstance()', desc: 'Điểm truy cập toàn cục, tạo lười ở lần gọi đầu tiên' },
            { role: 'Client', cls: 'Module A, B…', desc: 'Luôn lấy instance qua getInstance(), không tự new' }
        ],
        inTheWild: ['Logger / Config dùng chung toàn app', 'Connection pool của database', 'Một ES module chỉ được đánh giá một lần — export một object là "singleton tự nhiên"'],
        related: [
            { id: 'facade', note: 'Facade thường chỉ cần một instance nên hay được làm Singleton.' },
            { id: 'flyweight', note: 'Flyweight có nhiều instance dùng chung theo key; Singleton chỉ đúng một.' },
            { id: 'abstract-factory', note: 'Concrete Factory thường là Singleton.' }
        ],
        avoid: ['Chỉ vì "tiện truy cập toàn cục" — đó là biến global trá hình, rất khó test', 'Khi có DI container: đăng ký scope singleton thay vì code cứng getInstance()']
    },

    // ==================== STRUCTURAL ====================
    'adapter': {
        nick: 'Củ chuyển đổi',
        glyph: '🔌 ➜ 🔄 ➜ 🔲',
        keyIdea: 'Bọc một object có interface "lệch" trong một lớp trung gian implement đúng interface client mong đợi, rồi dịch lời gọi sang.',
        problem: {
            text: 'App đang gọi <code>MediaPlayer.play(file)</code>. Thư viện mới lại có <code>playVLC()</code> / <code>playMP4()</code> — khác tên, khác cách gọi. Không sửa được thư viện, sửa cả app thì quá tốn.',
            diagram: `flowchart LR
    C["👤 App<br/>gọi play(file)"] -->|"play()"| X{{"❌ không khớp"}}:::bad
    X -.- L["📚 AdvancedMusicPlayer<br/>playVLC() / playMP4()"]:::muted`
        },
        solution: {
            text: 'Chen một <code>MediaAdapter</code> ở giữa: bên ngoài trông như <code>MediaPlayer</code>, bên trong gọi đúng hàm của thư viện.',
            diagram: `flowchart LR
    C["👤 App<br/>gọi play(file)"] -->|"play()"| A["🔄 MediaAdapter<br/>implements MediaPlayer"]:::good
    A -->|"playVLC() / playMP4()"| L["📚 AdvancedMusicPlayer"]:::core`
        },
        classDiagram: `classDiagram
    direction LR
    class MediaPlayer {
        <<interface>>
        +play(filename) void
    }
    class MediaAdapter {
        -advancedPlayer: AdvancedMusicPlayer
        +play(filename) void
    }
    class AdvancedMusicPlayer {
        +playVLC(filename) void
        +playMP4(filename) void
    }
    Client --> MediaPlayer
    MediaPlayer <|.. MediaAdapter
    MediaAdapter --> AdvancedMusicPlayer : bọc & dịch lời gọi
    style MediaAdapter fill:#2a2350,stroke:#9b59b6`,
        sequence: `sequenceDiagram
    autonumber
    participant C as 👤 Client
    participant A as MediaAdapter
    participant P as AdvancedMusicPlayer
    C->>A: play("movie.mp4")
    A->>A: kiểm tra đuôi file
    A->>P: playMP4("movie.mp4")
    P-->>C: 🎬 Playing MP4`,
        roles: [
            { role: 'Target', cls: 'MediaPlayer', desc: 'Interface mà client đang dùng' },
            { role: 'Adaptee', cls: 'AdvancedMusicPlayer', desc: 'Class có sẵn, hữu ích nhưng interface không khớp' },
            { role: 'Adapter', cls: 'MediaAdapter', desc: 'Implement Target, bên trong gọi Adaptee và chuyển đổi dữ liệu' },
            { role: 'Client', cls: 'code gọi player.play()', desc: 'Chỉ biết Target' }
        ],
        inTheWild: ['Bọc SDK thanh toán bên thứ 3 về một interface PaymentGateway chung', 'Chuyển XML của hệ thống cũ sang JSON cho service mới', 'Adapter của axios (XHR trên trình duyệt, http trên Node)'],
        related: [
            { id: 'facade', note: 'Adapter làm interface CŨ khớp với interface MONG MUỐN; Facade tạo interface MỚI gọn hơn cho cả hệ thống.' },
            { id: 'decorator', note: 'Decorator giữ nguyên interface và thêm tính năng; Adapter đổi interface.' },
            { id: 'proxy', note: 'Proxy giữ nguyên interface để kiểm soát truy cập.' },
            { id: 'bridge', note: 'Bridge được thiết kế từ đầu; Adapter chữa cháy cho code đã tồn tại.' }
        ],
        avoid: ['Bạn sở hữu cả hai phía và sửa được — đổi luôn interface cho khớp', 'Chỉ lệch tên một hàm — một hàm wrapper nhỏ là đủ']
    },

    'bridge': {
        nick: 'Cây cầu nối hai chiều',
        glyph: '📱🎛️ ═🌉═ 📺📻',
        keyIdea: 'Tách một class có 2 chiều biến đổi thành 2 cây phân cấp riêng (Abstraction và Implementation), nối với nhau bằng một tham chiếu.',
        problem: {
            text: 'Remote × Thiết bị bằng kế thừa: BasicRemoteTV, BasicRemoteRadio, AdvancedRemoteTV, AdvancedRemoteRadio… Số class = số remote × số thiết bị (bùng nổ).',
            diagram: `flowchart TB
    R["Remote"]:::core --> BT["BasicRemoteTV"]:::bad
    R --> BR["BasicRemoteRadio"]:::bad
    R --> AT["AdvancedRemoteTV"]:::bad
    R --> AR["AdvancedRemoteRadio"]:::bad
    R -.-> N["+ Speaker? → thêm 2 class nữa"]:::muted`
        },
        solution: {
            text: 'Hai cây phát triển độc lập, nối bằng field <code>device</code>. 2 remote + 3 thiết bị = 5 class thay vì 6, và thêm thiết bị mới chỉ là +1 class.',
            diagram: `flowchart LR
    subgraph A["Abstraction — điều khiển"]
        R["📱 Remote"]:::core
        AR["🎛️ AdvancedRemote"]
        R --- AR
    end
    subgraph I["Implementation — thiết bị"]
        D["🔌 Device"]:::core
        TV["📺 TV"]
        RA["📻 Radio"]
        D --- TV
        D --- RA
    end
    R ==>|"🌉 device"| D`
        },
        classDiagram: `classDiagram
    direction LR
    class Remote {
        #device: Device
        +togglePower() void
        +volumeUp() void
    }
    class AdvancedRemote {
        +mute() void
    }
    class Device {
        <<interface>>
        +isEnabled() boolean
        +enable() void
        +disable() void
        +getVolume() number
        +setVolume(p) void
    }
    Remote <|-- AdvancedRemote
    Remote o-- Device : bridge
    Device <|.. TV
    Device <|.. Radio
    style Remote fill:#2a2350,stroke:#9b59b6
    style Device fill:#2a2350,stroke:#9b59b6`,
        sequence: `sequenceDiagram
    autonumber
    participant C as 👤 Client
    participant R as AdvancedRemote
    participant D as TV (Device)
    C->>R: new AdvancedRemote(tv)
    C->>R: volumeUp()
    R->>D: getVolume()
    D-->>R: 30
    R->>D: setVolume(40)
    C->>R: mute()
    R->>D: setVolume(0)`,
        roles: [
            { role: 'Abstraction', cls: 'Remote', desc: 'Logic điều khiển cấp cao, giữ tham chiếu tới Implementation' },
            { role: 'Refined Abstraction', cls: 'AdvancedRemote', desc: 'Mở rộng abstraction mà không đụng tới thiết bị' },
            { role: 'Implementation', cls: 'Device', desc: 'Interface cho các thao tác cấp thấp' },
            { role: 'Concrete Implementation', cls: 'TV, Radio', desc: 'Thiết bị cụ thể' }
        ],
        inTheWild: ['JDBC / ORM: API truy vấn chung, bên dưới là driver MySQL, Postgres…', 'Thư viện vẽ: Shape (hình) × Renderer (Canvas, SVG, WebGL)', 'Thông báo: Notification (khẩn, thường) × Kênh gửi (Email, SMS)'],
        related: [
            { id: 'adapter', note: 'Adapter vá lỗi tương thích sau này; Bridge được thiết kế trước để hai phía phát triển độc lập.' },
            { id: 'strategy', note: 'Cấu trúc giống nhau, nhưng Strategy nhằm đổi thuật toán, Bridge nhằm tách 2 chiều phân cấp.' },
            { id: 'abstract-factory', note: 'Abstract Factory có thể tạo cặp Abstraction–Implementation tương thích.' }
        ],
        avoid: ['Class chỉ có một chiều biến đổi', 'Chỉ có 1 implementation và không có kế hoạch thêm']
    },

    'composite': {
        nick: 'Cây thư mục',
        glyph: '📁 ➜ 📁📄 ➜ 📄📄',
        keyIdea: 'Lá (leaf) và nhánh (composite) cùng implement một interface; nhánh gọi đệ quy xuống các con, nên client đối xử với cả cây như một object duy nhất.',
        problem: {
            text: 'Tính tổng giá một nhóm hình: client phải kiểm tra <code>if (x instanceof Group) … else if (x instanceof Circle) …</code> và tự viết đệ quy. Mỗi loại mới lại thêm một nhánh if.',
            diagram: `flowchart LR
    C["👤 Client<br/>if instanceof Group ...<br/>else if instanceof Circle ..."]:::bad --> G["🗂️ Group"]
    C --> CI["⚪ Circle"]
    C --> SQ["🟦 Square"]`
        },
        solution: {
            text: 'Client chỉ gọi <code>group.getPrice()</code>. Nhóm tự hỏi các con rồi cộng lại, con là nhóm thì lại hỏi tiếp xuống dưới.',
            diagram: `flowchart TB
    C["👤 Client<br/>group.getPrice()"] --> G["🗂️ CompositeGraphic<br/>= tổng các con"]:::core
    G --> C1["⚪ Circle 5"]:::good
    G --> C2["⚪ Circle 10"]:::good
    G --> G2["🗂️ Nhóm con"]:::core
    G2 --> S["🟦 Square 15"]:::good`
        },
        classDiagram: `classDiagram
    class Graphic {
        <<interface>>
        +draw() void
        +getPrice() number
    }
    class Circle {
        +getPrice() number
    }
    class Square {
        +getPrice() number
    }
    class CompositeGraphic {
        -children: Graphic[]
        +add(child) void
        +remove(child) void
        +getPrice() number
    }
    Graphic <|.. Circle
    Graphic <|.. Square
    Graphic <|.. CompositeGraphic
    CompositeGraphic o-- Graphic : children
    style CompositeGraphic fill:#2a2350,stroke:#9b59b6`,
        sequence: `sequenceDiagram
    autonumber
    participant C as 👤 Client
    participant G as group
    participant A as circle1
    participant B as circle2
    participant S as square
    C->>G: getPrice()
    G->>A: getPrice()
    A-->>G: 5
    G->>B: getPrice()
    B-->>G: 10
    G->>S: getPrice()
    S-->>G: 15
    G-->>C: 30`,
        roles: [
            { role: 'Component', cls: 'Graphic', desc: 'Interface chung cho cả lá và nhánh' },
            { role: 'Leaf', cls: 'Circle, Square', desc: 'Phần tử cuối, tự làm việc thật' },
            { role: 'Composite', cls: 'CompositeGraphic', desc: 'Chứa con, chuyển việc xuống từng con rồi gộp kết quả' },
            { role: 'Client', cls: 'code gọi getPrice()', desc: 'Làm việc với mọi thứ qua Component' }
        ],
        inTheWild: ['Cây DOM: element chứa element khác, gọi được chung một API', 'Cây component React / Vue', 'Menu nhiều cấp, sơ đồ tổ chức, thư mục & file'],
        related: [
            { id: 'decorator', note: 'Cả hai bọc object đệ quy; Decorator chỉ có 1 con và thêm tính năng, Composite có nhiều con và gộp kết quả.' },
            { id: 'iterator', note: 'Dùng Iterator để duyệt cây Composite.' },
            { id: 'visitor', note: 'Dùng Visitor để thêm thao tác mới trên cả cây.' },
            { id: 'interpreter', note: 'Cây biểu thức của Interpreter chính là một Composite.' }
        ],
        avoid: ['Dữ liệu không có dạng cây', 'Lá và nhánh khác nhau quá nhiều — ép chung interface làm API rối']
    },

    'decorator': {
        nick: 'Mặc thêm lớp áo',
        glyph: '☕ ➜ 🥛 ➜ 🍬 ➜ 🍦',
        keyIdea: 'Mỗi decorator implement cùng interface với object gốc, giữ tham chiếu tới object bên trong và thêm hành vi trước/sau khi chuyển lời gọi vào.',
        problem: {
            text: 'Kết hợp sữa, đường, kem bằng kế thừa: CoffeeMilk, CoffeeMilkSugar, CoffeeSugarWhip… Chỉ 3 tùy chọn đã có 2³ = 8 class.',
            diagram: `flowchart TB
    C["☕ Coffee"]:::core --> A["CoffeeMilk"]:::bad
    C --> B["CoffeeSugar"]:::bad
    C --> D["CoffeeMilkSugar"]:::bad
    C --> E["CoffeeMilkWhip"]:::bad
    C --> F["CoffeeMilkSugarWhip"]:::bad
    C -.-> G["… 2ⁿ class"]:::muted`
        },
        solution: {
            text: 'Mỗi tùy chọn là một lớp bọc, xếp chồng tùy ý lúc chạy. Gọi <code>getCost()</code> từ lớp ngoài cùng: 3 + 1 + 2 + 10 = 16.',
            diagram: `flowchart LR
    W["🍦 WhipDecorator<br/>+3"]:::good --> S["🍬 SugarDecorator<br/>+1"]:::good --> M["🥛 MilkDecorator<br/>+2"]:::good --> C["☕ SimpleCoffee<br/>10"]:::core`
        },
        classDiagram: `classDiagram
    class Coffee {
        <<interface>>
        +getCost() number
        +getDescription() string
    }
    class SimpleCoffee {
        +getCost() number
    }
    class CoffeeDecorator {
        <<abstract>>
        #coffee: Coffee
        +getCost() number
    }
    Coffee <|.. SimpleCoffee
    Coffee <|.. CoffeeDecorator
    CoffeeDecorator o-- Coffee : bọc
    CoffeeDecorator <|-- MilkDecorator
    CoffeeDecorator <|-- SugarDecorator
    CoffeeDecorator <|-- WhipDecorator
    style CoffeeDecorator fill:#2a2350,stroke:#9b59b6`,
        sequence: `sequenceDiagram
    autonumber
    participant C as 👤 Client
    participant W as Whip
    participant S as Sugar
    participant M as Milk
    participant K as SimpleCoffee
    C->>W: getCost()
    W->>S: getCost()
    S->>M: getCost()
    M->>K: getCost()
    K-->>M: 10
    M-->>S: 10 + 2
    S-->>W: 12 + 1
    W-->>C: 13 + 3 = 16`,
        roles: [
            { role: 'Component', cls: 'Coffee', desc: 'Interface chung cho object gốc và mọi lớp bọc' },
            { role: 'Concrete Component', cls: 'SimpleCoffee', desc: 'Object gốc được trang trí' },
            { role: 'Base Decorator', cls: 'CoffeeDecorator', desc: 'Giữ tham chiếu tới Component bên trong, mặc định chuyển lời gọi vào' },
            { role: 'Concrete Decorator', cls: 'MilkDecorator, SugarDecorator, WhipDecorator', desc: 'Thêm hành vi trước/sau khi gọi object bên trong' }
        ],
        inTheWild: ['Java I/O: new BufferedReader(new InputStreamReader(stream))', 'Bọc hàm fetch để thêm retry, log, cache', 'Higher-order component / middleware bọc handler'],
        related: [
            { id: 'proxy', note: 'Proxy tự quản lý object thật và nhằm KIỂM SOÁT; Decorator do client xếp chồng và nhằm THÊM tính năng.' },
            { id: 'adapter', note: 'Adapter đổi interface; Decorator giữ nguyên interface.' },
            { id: 'composite', note: 'Decorator giống Composite chỉ có đúng một con.' },
            { id: 'chain-of-responsibility', note: 'Chain có thể dừng giữa chừng; Decorator luôn gọi tiếp object bên trong.' },
            { id: 'strategy', note: 'Decorator đổi "lớp vỏ", Strategy đổi "ruột" (thuật toán bên trong).' }
        ],
        avoid: ['Cần gỡ một lớp ở giữa chồng, hoặc thứ tự lớp bọc gây khó hiểu', 'Chỉ có 1–2 biến thể cố định — subclass đơn giản hơn']
    },

    'facade': {
        nick: 'Quầy lễ tân',
        glyph: '🧳 ➜ 🛎️ ➜ 🧹🍽️🚕',
        keyIdea: 'Một class "mặt tiền" cung cấp vài phương thức đơn giản, bên trong tự điều phối nhiều class phức tạp của subsystem.',
        problem: {
            text: 'Muốn convert video, client phải tự gọi đúng thứ tự VideoFile → Codec → BitrateReader → AudioMixer… Nơi nào dùng cũng lặp lại chuỗi này và phụ thuộc chặt vào thư viện.',
            diagram: `flowchart LR
    C1["👤 Client A"]:::bad --> V["VideoFile"]
    C1 --> K["Codec"]
    C1 --> B["BitrateReader"]
    C1 --> M["AudioMixer"]
    C2["👤 Client B"]:::bad --> V
    C2 --> K
    C2 --> B
    C2 --> M`
        },
        solution: {
            text: 'Client chỉ gọi <code>converter.convert("movie", "mp4")</code>. Facade lo phần còn lại.',
            diagram: `flowchart LR
    C1["👤 Client A"] --> F["🛎️ VideoConverter<br/>convert(file, format)"]:::good
    C2["👤 Client B"] --> F
    F --> V["VideoFile"]:::muted
    F --> K["Codec"]:::muted
    F --> B["BitrateReader"]:::muted
    F --> M["AudioMixer"]:::muted`
        },
        classDiagram: `classDiagram
    direction LR
    class VideoConverter {
        +convert(filename, format) string
    }
    class Codec {
        +extract(file) void
    }
    class BitrateReader {
        +read(file)$ object
    }
    class AudioMixer {
        +fix(data) object
    }
    Client --> VideoConverter
    VideoConverter ..> VideoFile
    VideoConverter ..> Codec
    VideoConverter ..> BitrateReader
    VideoConverter ..> AudioMixer
    style VideoConverter fill:#2a2350,stroke:#9b59b6`,
        sequence: `sequenceDiagram
    autonumber
    participant C as 👤 Client
    participant F as VideoConverter
    participant K as Codec
    participant B as BitrateReader
    participant M as AudioMixer
    C->>F: convert("movie", "mp4")
    F->>K: extract(file)
    F->>B: read(file)
    B-->>F: data
    F->>M: fix(data)
    F-->>C: "movie.mp4"`,
        roles: [
            { role: 'Facade', cls: 'VideoConverter', desc: 'Cung cấp API đơn giản, biết cần gọi subsystem nào theo thứ tự nào' },
            { role: 'Subsystem classes', cls: 'VideoFile, Codec, BitrateReader, AudioMixer', desc: 'Làm việc thật, không hề biết Facade tồn tại' },
            { role: 'Client', cls: 'code gọi convert()', desc: 'Chỉ nói chuyện với Facade' }
        ],
        inTheWild: ['jQuery: $(".btn").hide() che đi sự lằng nhằng của DOM API', 'Service layer: OrderService.checkout() gọi kho, thanh toán, email', 'SDK cloud: một hàm upload() bọc cả multipart, retry, ký request'],
        related: [
            { id: 'adapter', note: 'Adapter bọc MỘT object để đổi interface; Facade bọc CẢ hệ thống để đơn giản hóa.' },
            { id: 'mediator', note: 'Facade chiều một (client → subsystem); Mediator điều phối giao tiếp HAI chiều giữa các thành phần.' },
            { id: 'singleton', note: 'Thường chỉ cần một Facade.' }
        ],
        avoid: ['Facade phình to thành "God object" biết mọi thứ — tách thành nhiều facade nhỏ', 'Client thường xuyên cần truy cập chi tiết bên trong subsystem']
    },

    'flyweight': {
        nick: 'Dùng chung phần nặng',
        glyph: '🌳🌳🌳… ➜ 🌲🌳 (2 kiểu)',
        keyIdea: 'Tách state thành phần dùng chung (intrinsic: hình, màu) lưu trong vài object flyweight, và phần riêng (extrinsic: tọa độ) giữ ở từng object nhỏ.',
        problem: {
            text: '10.000 cây, mỗi cây giữ riêng tên, màu và texture 2MB → khoảng 20GB RAM, dù thật ra chỉ có 2 kiểu cây.',
            diagram: `flowchart LR
    T1["🌳 Tree 1<br/>x, y + texture 2MB"]:::bad
    T2["🌳 Tree 2<br/>x, y + texture 2MB"]:::bad
    T3["🌳 Tree 10.000<br/>x, y + texture 2MB"]:::bad
    T1 ~~~ T2 ~~~ T3
    T3 --> R["💥 ~20GB RAM"]:::bad`
        },
        solution: {
            text: 'Mỗi cây chỉ giữ tọa độ + tham chiếu tới một <code>TreeType</code> dùng chung. <code>TreeFactory</code> đảm bảo mỗi kiểu chỉ tạo một lần.',
            diagram: `flowchart LR
    T1["🌳 Tree 1<br/>x, y"] --> O["🌳 TreeType Oak<br/>texture 2MB"]:::core
    T2["🌲 Tree 2<br/>x, y"] --> P["🌲 TreeType Pine<br/>texture 2MB"]:::core
    T3["🌳 Tree 3<br/>x, y"] --> O
    T4["🌲 … 10.000 cây"] --> P
    F["🏭 TreeFactory<br/>cache theo key"]:::good -.->|"trả bản có sẵn"| O
    F -.-> P`
        },
        classDiagram: `classDiagram
    direction LR
    class TreeType {
        +name: string
        +color: string
        +texture: string
        +draw(x, y) void
    }
    class TreeFactory {
        -treeTypes: Map
        +getTreeType(name, color, texture)$ TreeType
    }
    class Tree {
        -x: number
        -y: number
        -type: TreeType
        +draw() void
    }
    class Forest {
        -trees: Tree[]
        +plantTree(x, y, name) void
    }
    Forest o-- Tree
    Tree --> TreeType : dùng chung
    TreeFactory --> TreeType : cache
    Forest ..> TreeFactory
    style TreeType fill:#2a2350,stroke:#9b59b6`,
        sequence: `sequenceDiagram
    autonumber
    participant F as Forest
    participant TF as TreeFactory
    participant T as Tree
    F->>TF: getTreeType("Oak", ...)
    alt chưa có trong cache
        TF->>TF: new TreeType("Oak")
    else đã có
        TF->>TF: lấy bản đã cache
    end
    TF-->>F: oakType
    F->>T: new Tree(x, y, oakType)
    Note over F,T: 10.000 Tree nhưng chỉ 2 TreeType`,
        roles: [
            { role: 'Flyweight', cls: 'TreeType', desc: 'Giữ intrinsic state dùng chung, bất biến' },
            { role: 'Flyweight Factory', cls: 'TreeFactory', desc: 'Cache và trả về flyweight có sẵn thay vì tạo mới' },
            { role: 'Context', cls: 'Tree', desc: 'Giữ extrinsic state riêng (x, y) + tham chiếu tới flyweight' },
            { role: 'Client', cls: 'Forest', desc: 'Tạo context, lấy flyweight qua factory' }
        ],
        inTheWild: ['String interning: các chuỗi giống nhau dùng chung một vùng nhớ', 'Sprite sheet / texture dùng chung trong game', 'Font glyph trong trình soạn thảo: mỗi ký tự "a" dùng chung một glyph'],
        related: [
            { id: 'singleton', note: 'Singleton = đúng 1 instance; Flyweight = nhiều instance dùng chung theo key, và phải bất biến.' },
            { id: 'composite', note: 'Các lá giống nhau của cây Composite có thể là flyweight.' },
            { id: 'prototype', note: 'Prototype tạo bản sao độc lập; Flyweight chia sẻ đúng một bản.' }
        ],
        avoid: ['Số object không lớn — tối ưu sớm chỉ làm code khó hiểu', 'Phần "dùng chung" thật ra vẫn bị sửa đổi (không bất biến)']
    },

    'proxy': {
        nick: 'Người đại diện',
        glyph: '👤 ➜ 🖼️ ➜ 🎞️',
        keyIdea: 'Proxy implement cùng interface với object thật, đứng chắn phía trước để làm thêm việc (tải lười, kiểm tra quyền, cache, log) rồi mới chuyển lời gọi vào.',
        problem: {
            text: '<code>new RealVideo()</code> tải ngay 2GB từ đĩa dù người dùng chỉ lướt xem tên phim. Kiểm tra quyền, cache, log thì bị rải khắp nơi gọi video.',
            diagram: `flowchart LR
    C["👤 Danh sách phim"]:::bad -->|"new RealVideo() × 100"| V["🎞️ RealVideo<br/>tải 2GB ngay"]:::bad
    C -.->|"if (user.isPremium) ... rải khắp nơi"| Q["🔐 kiểm tra quyền"]:::muted`
        },
        solution: {
            text: 'Client cầm <code>VideoProxy</code> — trông y hệt video thật. Thông tin nhẹ thì trả ngay, chỉ khi <code>play()</code> mới tạo video thật.',
            diagram: `flowchart LR
    C["👤 Client"] -->|"getInfo() / play()"| P["🖼️ VideoProxy<br/>cùng interface Video"]:::good
    P -->|"chỉ khi play() lần đầu"| V["🎞️ RealVideo"]:::core
    P -.->|"getInfo() trả ngay"| C`
        },
        classDiagram: `classDiagram
    direction LR
    class Video {
        <<interface>>
        +play() void
        +getInfo() string
    }
    class RealVideo {
        -filename: string
        -loadFromDisk() void
        +play() void
        +getInfo() string
    }
    class VideoProxy {
        -realVideo: RealVideo
        -filename: string
        +play() void
        +getInfo() string
    }
    Client --> Video
    Video <|.. RealVideo
    Video <|.. VideoProxy
    VideoProxy --> RealVideo : tạo khi cần
    style VideoProxy fill:#2a2350,stroke:#9b59b6`,
        sequence: `sequenceDiagram
    autonumber
    participant C as 👤 Client
    participant P as VideoProxy
    participant R as RealVideo
    C->>P: getInfo()
    P-->>C: "movie.mp4" (không tải)
    C->>P: play()
    alt realVideo chưa có
        P->>R: new RealVideo() → loadFromDisk()
    end
    P->>R: play()
    R-->>C: ▶️ Playing`,
        roles: [
            { role: 'Subject', cls: 'Video', desc: 'Interface chung — client không phân biệt được proxy hay đồ thật' },
            { role: 'Real Subject', cls: 'RealVideo', desc: 'Object thật, nặng hoặc cần bảo vệ' },
            { role: 'Proxy', cls: 'VideoProxy, ProtectedVideoProxy', desc: 'Giữ tham chiếu tới Real Subject, thêm lazy-load / kiểm tra quyền / cache / log' },
            { role: 'Client', cls: 'code gọi video.play()', desc: 'Dùng Subject như bình thường' }
        ],
        inTheWild: ['Ảnh lazy-load: hiện khung giữ chỗ, cuộn tới mới tải ảnh thật', 'Object Proxy của JavaScript (reactivity của Vue 3)', 'Reverse proxy / CDN cache đứng trước server thật'],
        related: [
            { id: 'decorator', note: 'Cấu trúc gần giống; Proxy KIỂM SOÁT truy cập và thường tự quản lý object thật, Decorator do client xếp chồng để THÊM tính năng.' },
            { id: 'adapter', note: 'Adapter đưa ra interface KHÁC; Proxy giữ interface GIỐNG HỆT.' },
            { id: 'facade', note: 'Facade che cả hệ thống; Proxy đứng trước đúng một object.' }
        ],
        avoid: ['Object nhẹ, không cần kiểm soát — thêm tầng chỉ làm chậm và rối', 'Cần xếp chồng nhiều tính năng tùy ý — cân nhắc Decorator']
    },

    // ==================== BEHAVIORAL ====================
    'chain-of-responsibility': {
        nick: 'Chuyền tay nhau xử lý',
        glyph: '📝 ➜ 👨‍💼 ➜ 👩‍💼 ➜ 🧑‍⚖️',
        keyIdea: 'Mỗi handler giữ tham chiếu tới handler kế tiếp; nhận request thì tự xử lý nếu được, không thì chuyển tiếp cho người sau.',
        problem: {
            text: 'Một hàm <code>handle()</code> khổng lồ với chuỗi if/else: kiểm tra đăng nhập, rồi quyền, rồi validate, rồi cache… Muốn đổi thứ tự hay thêm bước là phải sửa đúng hàm này.',
            diagram: `flowchart LR
    R["📨 Request"] --> H["🧱 handle()<br/>if auth ... else if role ...<br/>else if validate ... else if cache ..."]:::bad`
        },
        solution: {
            text: 'Mỗi bước là một handler nhỏ, nối thành chuỗi. Handler nào xử lý được thì dừng, không thì chuyền tiếp.',
            diagram: `flowchart LR
    R["📨 'Nut'"] --> M["🐒 Monkey<br/>Banana?"]:::good
    M -->|"không phải → chuyền"| S["🐿️ Squirrel<br/>Nut?"]:::good
    S -.->|"không phải → chuyền"| D["🐕 Dog<br/>MeatBall?"]:::muted
    S ==>|"✅ xử lý & dừng"| OK["🥜 I'll eat the Nut"]:::core`
        },
        classDiagram: `classDiagram
    direction LR
    class Handler {
        <<interface>>
        +setNext(h) Handler
        +handle(request) string
    }
    class AbstractHandler {
        <<abstract>>
        -nextHandler: Handler
        +setNext(h) Handler
        +handle(request) string
    }
    Client --> Handler
    Handler <|.. AbstractHandler
    AbstractHandler o-- Handler : next
    AbstractHandler <|-- MonkeyHandler
    AbstractHandler <|-- SquirrelHandler
    AbstractHandler <|-- DogHandler
    style AbstractHandler fill:#2a2350,stroke:#9b59b6`,
        sequence: `sequenceDiagram
    autonumber
    participant C as 👤 Client
    participant M as Monkey
    participant S as Squirrel
    participant D as Dog
    C->>M: handle("Nut")
    M->>M: không phải Banana
    M->>S: handle("Nut")
    S-->>M: "Squirrel: I'll eat the Nut"
    M-->>C: kết quả
    Note over D: Dog không cần được gọi`,
        roles: [
            { role: 'Handler', cls: 'Handler', desc: 'Interface chung: handle() và setNext()' },
            { role: 'Base Handler', cls: 'AbstractHandler', desc: 'Lưu handler kế tiếp, mặc định chuyển tiếp' },
            { role: 'Concrete Handler', cls: 'MonkeyHandler, SquirrelHandler, DogHandler', desc: 'Quyết định tự xử lý hay chuyền tiếp' },
            { role: 'Client', cls: 'code lắp chuỗi', desc: 'Nối chuỗi và gửi request vào đầu chuỗi' }
        ],
        inTheWild: ['Middleware Express/Koa: app.use(auth).use(log).use(router)', 'Event bubbling trong DOM: sự kiện nổi từ con lên cha', 'Quy trình duyệt chi theo hạn mức: trưởng nhóm → trưởng phòng → giám đốc'],
        related: [
            { id: 'decorator', note: 'Decorator luôn gọi tiếp object bên trong; handler trong Chain có thể DỪNG chuỗi.' },
            { id: 'observer', note: 'Observer gửi cho TẤT CẢ người nghe; Chain dừng ở người ĐẦU TIÊN xử lý được.' },
            { id: 'command', note: 'Request đi qua chuỗi thường được đóng gói thành Command.' },
            { id: 'composite', note: 'Chain có thể đi từ lá lên cha trong cây Composite.' }
        ],
        avoid: ['Mọi request luôn phải qua đủ các bước cố định — một pipeline đơn giản rõ ràng hơn', 'Bắt buộc request phải được xử lý nhưng chuỗi không có handler mặc định ở cuối']
    },

    'command': {
        nick: 'Phiếu gọi món',
        glyph: '🧑 ➜ 🧾 ➜ 🤵 ➜ 👨‍🍳',
        keyIdea: 'Đóng gói một yêu cầu (ai làm, làm gì, tham số nào) thành object có execute()/undo(), nhờ đó có thể lưu, xếp hàng, ghi log và hoàn tác.',
        problem: {
            text: 'Nút bấm, phím tắt và menu đều gọi thẳng <code>editor.write()</code> → logic lặp lại, không có lịch sử nên không undo được, không xếp hàng hay ghi log được.',
            diagram: `flowchart LR
    B["🔘 Nút"] -->|"editor.write()"| E["📝 TextEditor"]:::bad
    K["⌨️ Phím tắt"] -->|"editor.write()"| E
    M["📋 Menu"] -->|"editor.write()"| E
    E -.- U["❓ Undo thế nào?"]:::muted`
        },
        solution: {
            text: 'Mỗi thao tác là một object <code>WriteCommand</code>. Invoker chạy nó, cất vào lịch sử → undo/redo chỉ là lấy command ra gọi <code>undo()</code>.',
            diagram: `flowchart LR
    B["🔘 Nút / ⌨️ Phím"] -->|"tạo"| C["🧾 WriteCommand<br/>execute() / undo()"]:::good
    C --> I["🤵 CommandManager<br/>history[]"]:::core
    I -->|"execute()"| E["📝 TextEditor"]
    I -.->|"undo() / redo()"| C`
        },
        classDiagram: `classDiagram
    direction LR
    class Command {
        <<interface>>
        +execute() void
        +undo() void
    }
    class WriteCommand {
        -editor: TextEditor
        -text: string
        +execute() void
        +undo() void
    }
    class TextEditor {
        +write(text) void
        +delete(length) void
    }
    class CommandManager {
        -history: Command[]
        -undone: Command[]
        +execute(cmd) void
        +undo() void
        +redo() void
    }
    Command <|.. WriteCommand
    WriteCommand --> TextEditor : receiver
    CommandManager o-- Command : history
    style Command fill:#2a2350,stroke:#9b59b6`,
        sequence: `sequenceDiagram
    autonumber
    participant C as 👤 Client
    participant M as CommandManager
    participant W as WriteCommand
    participant E as TextEditor
    C->>W: new WriteCommand(editor, "World!")
    C->>M: execute(cmd)
    M->>W: execute()
    W->>E: write("World!")
    M->>M: history.push(cmd)
    C->>M: undo()
    M->>W: undo()
    W->>E: delete(6)`,
        roles: [
            { role: 'Command', cls: 'Command', desc: 'Interface execute()/undo()' },
            { role: 'Concrete Command', cls: 'WriteCommand', desc: 'Lưu receiver + tham số, gọi receiver khi execute' },
            { role: 'Receiver', cls: 'TextEditor', desc: 'Object thật sự làm việc' },
            { role: 'Invoker', cls: 'CommandManager', desc: 'Kích hoạt command, lưu lịch sử để undo/redo' },
            { role: 'Client', cls: 'code tạo command', desc: 'Tạo command và gắn receiver cho nó' }
        ],
        inTheWild: ['Undo/Redo trong Photoshop, VS Code, Google Docs', 'Hàng đợi job (BullMQ, Sidekiq): mỗi job là một command', 'Redux: action là object mô tả "việc cần làm"'],
        related: [
            { id: 'strategy', note: 'Strategy: nhiều CÁCH làm cùng một việc. Command: đóng gói MỘT việc cần làm (undo được, xếp hàng được).' },
            { id: 'memento', note: 'Command có thể lưu Memento để undo chính xác.' },
            { id: 'chain-of-responsibility', note: 'Chain có thể chuyền Command qua các handler.' },
            { id: 'observer', note: 'Observer thông báo "đã xảy ra gì"; Command yêu cầu "hãy làm việc này".' }
        ],
        avoid: ['Thao tác đơn giản, không cần undo/queue/log — gọi hàm trực tiếp là đủ', 'Trong JS, một callback thuần có thể thay command khi không cần undo']
    },

    'iterator': {
        nick: 'Lộ trình tham quan',
        glyph: '🗂️ ➜ 1️⃣ ➜ 2️⃣ ➜ 3️⃣',
        keyIdea: 'Tách logic duyệt ra một object riêng (hasNext/next), nên collection giấu được cấu trúc bên trong và có thể có nhiều cách duyệt.',
        problem: {
            text: 'Client phải biết collection là mảng, cây hay linked list để viết vòng lặp phù hợp; muốn duyệt ngược hay theo chiều sâu lại phải nhét thêm logic vào collection.',
            diagram: `flowchart LR
    C["👤 Client"]:::bad -->|"for i < arr.length"| A["📚 Array"]
    C -->|"node = node.next"| L["🔗 LinkedList"]
    C -->|"đệ quy trái/phải"| T["🌳 Tree"]`
        },
        solution: {
            text: 'Client chỉ biết <code>while (it.hasNext()) it.next()</code>. Mỗi collection tự đưa ra iterator phù hợp.',
            diagram: `flowchart LR
    C["👤 Client<br/>while (it.hasNext())"] --> I["🧭 Iterator<br/>hasNext() / next()"]:::good
    I --> A["📚 Array"]:::muted
    I --> L["🔗 LinkedList"]:::muted
    I --> T["🌳 Tree"]:::muted`
        },
        classDiagram: `classDiagram
    direction LR
    class Iterator~T~ {
        <<interface>>
        +current() T
        +next() T
        +hasNext() boolean
        +reset() void
    }
    class Collection~T~ {
        <<interface>>
        +createIterator() Iterator
    }
    class ArrayIterator~T~ {
        -collection: T[]
        -position: number
    }
    class WordsCollection {
        -items: string[]
        +createIterator() Iterator
        +createReverseIterator() Iterator
    }
    Iterator <|.. ArrayIterator
    Collection <|.. WordsCollection
    WordsCollection ..> ArrayIterator : tạo
    style Iterator fill:#2a2350,stroke:#9b59b6`,
        sequence: `sequenceDiagram
    autonumber
    participant C as 👤 Client
    participant W as WordsCollection
    participant I as ArrayIterator
    C->>W: createIterator()
    W-->>C: iterator
    loop while hasNext()
        C->>I: hasNext()
        I-->>C: true
        C->>I: next()
        I-->>C: "First", "Second", ...
    end`,
        roles: [
            { role: 'Iterator', cls: 'Iterator', desc: 'Interface duyệt: next(), hasNext()' },
            { role: 'Concrete Iterator', cls: 'ArrayIterator', desc: 'Giữ vị trí hiện tại, biết cách đi tới phần tử kế' },
            { role: 'Collection', cls: 'Collection', desc: 'Khai báo createIterator()' },
            { role: 'Concrete Collection', cls: 'WordsCollection', desc: 'Trả về iterator phù hợp với cấu trúc của mình' }
        ],
        inTheWild: ['for...of và Symbol.iterator trong JavaScript', 'Generator function* sinh từng phần tử', 'Phân trang API: cursor → trang kế tiếp'],
        related: [
            { id: 'composite', note: 'Iterator hay dùng để duyệt cây Composite.' },
            { id: 'visitor', note: 'Iterator lo "đi đâu tiếp", Visitor lo "làm gì ở mỗi phần tử".' },
            { id: 'memento', note: 'Có thể lưu vị trí duyệt bằng Memento.' },
            { id: 'factory-method', note: 'createIterator() chính là một Factory Method.' }
        ],
        avoid: ['Collection đơn giản — JS/TS đã có sẵn for...of, Symbol.iterator và generator', 'Chỉ duyệt một kiểu duy nhất trên mảng']
    },

    'mediator': {
        nick: 'Đài điều phối',
        glyph: '✈️✈️ ⇄ 🗼 ⇄ ✈️✈️',
        keyIdea: 'Các thành phần không gọi nhau trực tiếp mà gửi mọi thông điệp qua một mediator; mediator quyết định ai cần nhận.',
        problem: {
            text: 'Mỗi user giữ danh sách mọi user khác và tự gửi tin cho từng người. N người → N×(N−1) liên kết; thêm hay bớt một người là sửa tất cả.',
            diagram: `flowchart LR
    J["🧑 John"]:::bad <--> A["👩 Jane"]:::bad
    J <--> B["🧔 Bob"]:::bad
    J <--> K["👧 Kim"]:::bad
    A <--> B
    A <--> K
    B <--> K`
        },
        solution: {
            text: 'Ai cũng chỉ biết <code>ChatRoom</code>. N người → N liên kết, logic "gửi cho ai" nằm ở một chỗ.',
            diagram: `flowchart LR
    J["🧑 John"] <--> R["🗼 ChatRoom"]:::good
    A["👩 Jane"] <--> R
    B["🧔 Bob"] <--> R
    K["👧 Kim"] <--> R`
        },
        classDiagram: `classDiagram
    direction LR
    class ChatMediator {
        <<interface>>
        +sendMessage(msg, sender) void
        +addUser(user) void
    }
    class ChatRoom {
        -users: User[]
        +sendMessage(msg, sender) void
        +addUser(user) void
    }
    class User {
        +name: string
        -mediator: ChatMediator
        +send(msg) void
        +receive(msg, from) void
    }
    ChatMediator <|.. ChatRoom
    User --> ChatMediator : chỉ biết mediator
    ChatRoom o-- User : users
    style ChatRoom fill:#2a2350,stroke:#9b59b6`,
        sequence: `sequenceDiagram
    autonumber
    participant J as 🧑 John
    participant R as ChatRoom
    participant A as 👩 Jane
    participant B as 🧔 Bob
    J->>R: sendMessage("Hello", john)
    R->>A: receive("Hello", "John")
    R->>B: receive("Hello", "John")
    Note over J,B: John không hề biết Jane và Bob`,
        roles: [
            { role: 'Mediator', cls: 'ChatMediator', desc: 'Interface giao tiếp mà các thành phần dùng' },
            { role: 'Concrete Mediator', cls: 'ChatRoom', desc: 'Chứa logic điều phối: ai nhận gì' },
            { role: 'Colleague', cls: 'User', desc: 'Thành phần chỉ biết mediator, không biết nhau' }
        ],
        inTheWild: ['Phòng chat, đài kiểm soát không lưu', 'Form phức tạp: chọn "Quốc gia" thì cập nhật "Tỉnh", bật/tắt nút Gửi', 'Event bus / message broker giữa các module'],
        related: [
            { id: 'observer', note: 'Observer: 1 nguồn phát → N người nghe, một chiều. Mediator: N ↔ N qua trung tâm, có logic điều phối.' },
            { id: 'facade', note: 'Subsystem không biết Facade tồn tại; còn ở Mediator, các thành phần chủ động nói chuyện với mediator.' },
            { id: 'command', note: 'Thông điệp gửi qua mediator có thể là Command.' }
        ],
        avoid: ['Chỉ 2–3 object tương tác đơn giản', 'Mediator bắt đầu ôm hết business logic → thành "God object"']
    },

    'memento': {
        nick: 'Lưu game',
        glyph: '🎮 ➜ 💾 ➜ ⏪',
        keyIdea: 'Chính object gốc (originator) tạo ra snapshot kín (memento) về trạng thái của mình; bên ngoài (caretaker) chỉ cất giữ, không đọc được bên trong.',
        problem: {
            text: 'Để làm undo, class History phải đọc thẳng các field private của Editor (content, cursor, selection…) → phá vỡ đóng gói; Editor đổi field là History hỏng theo.',
            diagram: `flowchart LR
    H["📚 History"]:::bad -->|"đọc editor.content<br/>editor.cursor<br/>editor.selection ..."| E["📝 Editor<br/>🔓 phải public hết"]:::bad`
        },
        solution: {
            text: 'Editor tự đóng gói trạng thái vào một memento; History chỉ cất và trả lại, không biết bên trong có gì.',
            diagram: `flowchart LR
    E["📝 Editor"]:::core -->|"save()"| M["💾 EditorMemento<br/>🔒 kín"]:::good
    M --> H["📚 History<br/>chỉ cất giữ"]
    H -->|"pop()"| E2["📝 editor.restore(m)"]:::core`
        },
        classDiagram: `classDiagram
    direction LR
    class Editor {
        -content: string
        -cursorPosition: number
        +type(text) void
        +save() EditorMemento
        +restore(m) void
    }
    class EditorMemento {
        -state: string
        -cursorPosition: number
        +getState() string
    }
    class History {
        -mementos: EditorMemento[]
        +push(m) void
        +pop() EditorMemento
    }
    Editor ..> EditorMemento : tạo & đọc
    History o-- EditorMemento : chỉ giữ
    style EditorMemento fill:#2a2350,stroke:#9b59b6`,
        sequence: `sequenceDiagram
    autonumber
    participant C as 👤 Client
    participant E as Editor
    participant H as History
    C->>E: type("Hello")
    C->>E: save()
    E-->>C: memento 💾
    C->>H: push(memento)
    C->>E: type(" World!")
    Note over C,E: người dùng bấm Undo
    C->>H: pop()
    H-->>C: memento 💾
    C->>E: restore(memento)
    E->>E: content = "Hello"`,
        roles: [
            { role: 'Originator', cls: 'Editor', desc: 'Tạo snapshot của chính mình và khôi phục từ snapshot' },
            { role: 'Memento', cls: 'EditorMemento', desc: 'Snapshot bất biến, giấu chi tiết bên trong' },
            { role: 'Caretaker', cls: 'History', desc: 'Cất giữ danh sách memento, không đọc/sửa nội dung' }
        ],
        inTheWild: ['Save/Load game', 'Ctrl+Z trong trình soạn thảo, "lịch sử phiên bản" của Google Docs', 'Time-travel debugging của Redux DevTools'],
        related: [
            { id: 'command', note: 'Command undo bằng thao tác ngược; Memento undo bằng cách khôi phục snapshot. Hay dùng chung.' },
            { id: 'prototype', note: 'Nếu state đơn giản, clone object (Prototype) có thể thay Memento.' },
            { id: 'iterator', note: 'Memento có thể lưu vị trí duyệt của Iterator.' }
        ],
        avoid: ['State lớn và lưu thường xuyên → tốn RAM; cân nhắc chỉ lưu phần thay đổi (diff)', 'Ngôn ngữ không hỗ trợ tốt việc giấu dữ liệu của memento']
    },

    'observer': {
        nick: 'Đăng ký nhận tin',
        glyph: '📰 ➜ 📧 📱 🔔',
        keyIdea: 'Subject giữ danh sách observer; khi có thay đổi, nó lặp qua danh sách và gọi update() — không cần biết observer cụ thể là ai.',
        problem: {
            text: 'NewsPublisher gọi thẳng <code>emailService.send()</code>, <code>smsService.send()</code>… Thêm kênh mới là sửa Publisher; hoặc các kênh phải liên tục hỏi (polling) "có tin mới chưa?".',
            diagram: `flowchart LR
    P["📰 NewsPublisher<br/>emailService.send()<br/>smsService.send()<br/>pushService.send()"]:::bad --> E["📧 Email"]
    P --> S["📱 SMS"]
    P --> N["🔔 Push"]
    P -.->|"thêm Slack = sửa Publisher"| SL["💬 Slack?"]:::muted`
        },
        solution: {
            text: 'Ai quan tâm thì tự <code>subscribe()</code>. Publisher chỉ lặp danh sách và gọi <code>update()</code>.',
            diagram: `flowchart LR
    X["🙋 subscribe() / unsubscribe()"]:::muted -.-> P["📰 NewsPublisher<br/>observers[]"]:::core
    P -->|"update(news)"| E["📧 EmailSubscriber"]:::good
    P -->|"update(news)"| S["📱 SMSSubscriber"]:::good
    P -->|"update(news)"| N["🔔 Observer bất kỳ"]:::good`
        },
        classDiagram: `classDiagram
    direction LR
    class Subject {
        <<interface>>
        +subscribe(o) void
        +unsubscribe(o) void
        +notify(msg) void
    }
    class NewsPublisher {
        -observers: Observer[]
        +publishNews(news) void
    }
    class Observer {
        <<interface>>
        +update(message) void
    }
    Subject <|.. NewsPublisher
    NewsPublisher o-- Observer : observers
    Observer <|.. EmailSubscriber
    Observer <|.. SMSSubscriber
    style NewsPublisher fill:#2a2350,stroke:#9b59b6`,
        sequence: `sequenceDiagram
    autonumber
    participant E as 📧 EmailSubscriber
    participant S as 📱 SMSSubscriber
    participant P as NewsPublisher
    E->>P: subscribe(email)
    S->>P: subscribe(sms)
    Note over P: Có tin mới!
    P->>P: publishNews("Breaking…")
    P->>E: update("Breaking…")
    P->>S: update("Breaking…")`,
        roles: [
            { role: 'Subject / Publisher', cls: 'NewsPublisher', desc: 'Giữ danh sách observer, gọi notify() khi state đổi' },
            { role: 'Observer', cls: 'Observer', desc: 'Interface update() chung' },
            { role: 'Concrete Observer', cls: 'EmailSubscriber, SMSSubscriber', desc: 'Phản ứng với thông báo theo cách riêng' },
            { role: 'Client', cls: 'code đăng ký', desc: 'Đăng ký/hủy đăng ký observer' }
        ],
        inTheWild: ['addEventListener("click", …) trong DOM', 'RxJS Observable, EventEmitter của Node.js', 'Webhook: hệ thống khác đăng ký URL để nhận sự kiện'],
        related: [
            { id: 'mediator', note: 'Observer: phát một chiều, ai nghe tự đăng ký. Mediator: trung tâm điều phối giao tiếp nhiều chiều.' },
            { id: 'chain-of-responsibility', note: 'Chain: một người xử lý rồi dừng. Observer: tất cả đều nhận.' },
            { id: 'command', note: 'Observer báo "đã xảy ra gì"; Command yêu cầu "hãy làm việc này".' }
        ],
        avoid: ['Chỉ có đúng 1 người nghe cố định — gọi trực tiếp rõ ràng hơn', 'Chuỗi observer kích hoạt lẫn nhau rất khó debug; quên unsubscribe gây rò rỉ bộ nhớ']
    },

    'state': {
        nick: 'Máy bán nước',
        glyph: '😴 ➜ 💰 ➜ 📦 ➜ 😴',
        keyIdea: 'Mỗi trạng thái là một class riêng implement cùng interface; context chuyển mọi hành vi cho object state hiện tại, và state tự đổi sang state khác khi cần.',
        problem: {
            text: 'Mỗi phương thức của VendingMachine là một <code>switch (this.state)</code> lớn. Thêm trạng thái "Hết hàng" là phải sửa mọi switch — rất dễ sót.',
            diagram: `flowchart LR
    I["insertMoney()<br/>switch(state)"]:::bad --> ST["idle / hasMoney /<br/>dispensing / soldOut?"]
    S["selectProduct()<br/>switch(state)"]:::bad --> ST
    D["dispense()<br/>switch(state)"]:::bad --> ST`
        },
        solution: {
            text: 'Mỗi trạng thái một class, tự biết phản ứng với từng nút và tự chuyển sang trạng thái kế tiếp.',
            diagram: `stateDiagram-v2
    direction LR
    [*] --> Idle
    Idle --> HasMoney : insertMoney()
    HasMoney --> Dispensing : selectProduct()
    Dispensing --> Idle : dispense()
    Idle --> Idle : selectProduct() → báo nhét tiền`
        },
        classDiagram: `classDiagram
    direction LR
    class VendingMachine {
        -state: State
        +setState(s) void
        +insertMoney() void
        +selectProduct() void
        +dispense() void
    }
    class State {
        <<interface>>
        +insertMoney(ctx) void
        +selectProduct(ctx) void
        +dispense(ctx) void
    }
    VendingMachine o-- State : state hiện tại
    State <|.. IdleState
    State <|.. HasMoneyState
    State <|.. DispensingState
    IdleState ..> HasMoneyState : chuyển sang
    style State fill:#2a2350,stroke:#9b59b6`,
        sequence: `sequenceDiagram
    autonumber
    participant C as 👤 Client
    participant M as VendingMachine
    participant I as IdleState
    participant H as HasMoneyState
    C->>M: insertMoney()
    M->>I: insertMoney(this)
    I->>M: setState(new HasMoneyState())
    C->>M: selectProduct()
    M->>H: selectProduct(this)
    H->>M: setState(new DispensingState())`,
        roles: [
            { role: 'Context', cls: 'VendingMachine', desc: 'Giữ state hiện tại, chuyển mọi hành vi cho nó' },
            { role: 'State', cls: 'State', desc: 'Interface chung cho mọi trạng thái' },
            { role: 'Concrete State', cls: 'IdleState, HasMoneyState, DispensingState', desc: 'Hành vi riêng của từng trạng thái + quyết định chuyển sang trạng thái nào' }
        ],
        inTheWild: ['Đơn hàng: Chờ thanh toán → Đã thanh toán → Đang giao → Hoàn tất', 'Trình phát nhạc: Playing / Paused / Stopped', 'Kết nối TCP, thư viện state machine như XState'],
        related: [
            { id: 'strategy', note: 'Cấu trúc gần giống. Strategy: client CHỦ ĐỘNG chọn, các strategy không biết nhau. State: các trạng thái TỰ chuyển đổi lẫn nhau.' },
            { id: 'flyweight', note: 'Các state không có dữ liệu riêng có thể dùng chung một instance.' },
            { id: 'memento', note: 'Có thể lưu state hiện tại bằng Memento.' }
        ],
        avoid: ['Chỉ 2–3 trạng thái và ít thay đổi — một enum + switch gọn hơn', 'Luật chuyển trạng thái cần cấu hình động — cân nhắc thư viện state machine']
    },

    'strategy': {
        nick: 'Đổi chiến lược',
        glyph: '🛒 ⇆ 💳 | 🅿️ | 🪙',
        keyIdea: 'Mỗi thuật toán là một class implement cùng interface; context giữ một tham chiếu và có thể đổi thuật toán ngay lúc chạy.',
        problem: {
            text: '<code>checkout()</code> chứa <code>if (method === "card") … else if (method === "paypal") … else if (method === "crypto") …</code>. Thêm phương thức mới là sửa ShoppingCart và test lại toàn bộ.',
            diagram: `flowchart LR
    S["🛒 ShoppingCart.checkout()<br/>if card ...<br/>else if paypal ...<br/>else if crypto ..."]:::bad
    S -.->|"thêm MoMo = sửa hàm này"| M["📱 MoMo?"]:::muted`
        },
        solution: {
            text: 'Giỏ hàng chỉ gọi <code>paymentStrategy.pay(total)</code>. Cắm strategy nào thì trả bằng cách đó.',
            diagram: `flowchart LR
    S["🛒 ShoppingCart<br/>paymentStrategy.pay(total)"]:::core --> P{{"🔌 PaymentStrategy"}}
    P -.-> A["💳 CreditCard"]:::good
    P -.-> B["🅿️ PayPal"]:::good
    P -.-> C["🪙 Crypto"]:::good`
        },
        classDiagram: `classDiagram
    direction LR
    class ShoppingCart {
        -items: Item[]
        -paymentStrategy: PaymentStrategy
        +setPaymentStrategy(s) void
        +checkout() void
    }
    class PaymentStrategy {
        <<interface>>
        +pay(amount) void
    }
    ShoppingCart o-- PaymentStrategy
    PaymentStrategy <|.. CreditCardPayment
    PaymentStrategy <|.. PayPalPayment
    PaymentStrategy <|.. CryptoPayment
    style PaymentStrategy fill:#2a2350,stroke:#9b59b6`,
        sequence: `sequenceDiagram
    autonumber
    participant C as 👤 Client
    participant S as ShoppingCart
    participant P as PayPalPayment
    C->>S: setPaymentStrategy(new PayPalPayment())
    C->>S: checkout()
    S->>S: total = 79
    S->>P: pay(79)
    P-->>C: "Paid 79$ using PayPal"`,
        roles: [
            { role: 'Context', cls: 'ShoppingCart', desc: 'Giữ strategy hiện tại và gọi nó, không biết chi tiết thuật toán' },
            { role: 'Strategy', cls: 'PaymentStrategy', desc: 'Interface chung cho mọi thuật toán' },
            { role: 'Concrete Strategy', cls: 'CreditCardPayment, PayPalPayment, CryptoPayment', desc: 'Một thuật toán cụ thể' },
            { role: 'Client', cls: 'code chọn strategy', desc: 'Chọn strategy phù hợp và gắn vào context' }
        ],
        inTheWild: ['array.sort((a, b) => …): hàm so sánh chính là strategy', 'Passport.js: LocalStrategy, GoogleStrategy, JwtStrategy', 'Tính phí ship theo hãng: GHN, GHTK, Viettel Post'],
        related: [
            { id: 'state', note: 'State tự chuyển đổi; Strategy do client chọn và các strategy độc lập nhau.' },
            { id: 'template-method', note: 'Template Method đổi từng BƯỚC bằng kế thừa; Strategy đổi CẢ thuật toán bằng composition, lúc chạy.' },
            { id: 'command', note: 'Command đóng gói một việc cần làm; Strategy đóng gói một cách làm.' },
            { id: 'bridge', note: 'Cấu trúc giống Bridge, nhưng mục đích là thay thuật toán.' }
        ],
        avoid: ['Chỉ 2 thuật toán gần như không đổi — một if là đủ', 'Trong TS/JS, truyền một hàm <code>(amount) => …</code> thường gọn hơn tạo cả cây class']
    },

    'template-method': {
        nick: 'Khung quy trình cố định',
        glyph: '1️⃣ ➜ 2️⃣✏️ ➜ 3️⃣ ➜ 4️⃣✏️',
        keyIdea: 'Lớp cha định nghĩa phương thức "khung" gọi các bước theo thứ tự cố định; lớp con chỉ override những bước được phép.',
        problem: {
            text: 'PDFDataMiner và CSVDataMiner copy-paste gần như y hệt quy trình mở → trích → phân tích → báo cáo → đóng. Sửa bước "phân tích" là phải sửa ở mọi nơi.',
            diagram: `flowchart LR
    P["📕 PDFDataMiner<br/>open → extract → parse<br/>→ analyze → report → close"]:::bad
    C["📗 CSVDataMiner<br/>open → extract → parse<br/>→ analyze → report → close"]:::bad
    P <-.->|"code trùng lặp"| C`
        },
        solution: {
            text: 'Khung <code>mine()</code> nằm ở lớp cha. Bước xanh (✏️) lớp con tự viết, bước tím dùng chung.',
            diagram: `flowchart LR
    O["openFile() ✏️"]:::good --> E["extractData() ✏️"]:::good --> P["parseData() ✏️"]:::good --> A["analyzeData()"]:::core --> R["sendReport()"]:::core --> C["closeFile() ✏️"]:::good`
        },
        classDiagram: `classDiagram
    class DataMiner {
        <<abstract>>
        +mine(path) void
        #analyzeData(data) string
        #sendReport(analysis) void
        #openFile(path)* any
        #extractData(file)* any
        #parseData(raw)* any[]
        #closeFile(file)* void
    }
    DataMiner <|-- PDFDataMiner
    DataMiner <|-- CSVDataMiner
    note for DataMiner "mine() = template method: gọi các bước theo thứ tự cố định"
    style DataMiner fill:#2a2350,stroke:#9b59b6`,
        sequence: `sequenceDiagram
    autonumber
    participant C as 👤 Client
    participant M as PDFDataMiner
    C->>M: mine("report.pdf")
    Note right of M: mine() viết ở lớp cha
    M->>M: openFile() — lớp con
    M->>M: extractData() — lớp con
    M->>M: parseData() — lớp con
    M->>M: analyzeData() — lớp cha
    M->>M: sendReport() — lớp cha
    M->>M: closeFile() — lớp con`,
        roles: [
            { role: 'Abstract Class', cls: 'DataMiner', desc: 'Chứa template method và các bước dùng chung' },
            { role: 'Template Method', cls: 'mine()', desc: 'Quy định thứ tự các bước, lớp con không được đổi' },
            { role: 'Concrete Class', cls: 'PDFDataMiner, CSVDataMiner', desc: 'Override các bước trừu tượng / hook' }
        ],
        inTheWild: ['Test framework: beforeEach → test → afterEach', 'Lifecycle của React class component: componentDidMount…', 'Quy trình xuất báo cáo: lấy dữ liệu → định dạng → gửi, chỉ đổi phần định dạng'],
        related: [
            { id: 'strategy', note: 'Template Method: kế thừa, đổi từng bước. Strategy: composition, đổi cả thuật toán lúc chạy.' },
            { id: 'factory-method', note: 'Factory Method thường là một bước bên trong Template Method.' }
        ],
        avoid: ['Các biến thể khác nhau cả ở THỨ TỰ bước, không chỉ ở nội dung', 'Cần đổi hành vi lúc runtime — dùng Strategy', 'Cây kế thừa đã quá sâu']
    },

    'visitor': {
        nick: 'Hướng dẫn viên đi thăm',
        glyph: '🧑‍🏫 ➜ 🖼️ 🗿 🏺',
        keyIdea: 'Đưa các thao tác mới ra một class Visitor có visitX() cho từng loại phần tử; phần tử chỉ cần accept(visitor) gọi đúng visitX (double dispatch).',
        problem: {
            text: 'Muốn thêm "tính diện tích", rồi "xuất XML", rồi "xuất JSON" cho Circle, Rectangle, CompoundShape… → mỗi lần lại sửa TẤT CẢ các class hình, trộn logic xuất file vào class hình học.',
            diagram: `flowchart TB
    C["⚪ Circle<br/>area() xml() json() ..."]:::bad
    R["▭ Rectangle<br/>area() xml() json() ..."]:::bad
    G["🗂️ Compound<br/>area() xml() json() ..."]:::bad
    N["+ thao tác mới = sửa mọi class"]:::muted
    C ~~~ N
    R ~~~ N
    G ~~~ N`
        },
        solution: {
            text: 'Các hình chỉ có <code>accept(visitor)</code>. Mỗi thao tác mới là một Visitor mới — không sửa class hình nào.',
            diagram: `flowchart LR
    V1["📐 AreaCalculator"]:::good -->|"visitCircle / visitRectangle"| E["⚪ ▭ 🗂️ các hình<br/>chỉ có accept(visitor)"]:::core
    V2["📤 XMLExporter"]:::good --> E
    V3["➕ JSONExporter<br/>thêm mới, không sửa hình"]:::good -.-> E`
        },
        classDiagram: `classDiagram
    class Visitor {
        <<interface>>
        +visitCircle(c) void
        +visitRectangle(r) void
        +visitCompound(cs) void
    }
    class Shape {
        <<interface>>
        +accept(v) void
    }
    Visitor <|.. AreaCalculator
    Visitor <|.. XMLExporter
    Shape <|.. Circle
    Shape <|.. Rectangle
    Shape <|.. CompoundShape
    CompoundShape o-- Shape : children
    Shape ..> Visitor : accept(v)
    style Visitor fill:#2a2350,stroke:#9b59b6`,
        sequence: `sequenceDiagram
    autonumber
    participant C as 👤 Client
    participant G as CompoundShape
    participant V as AreaCalculator
    participant R as Rectangle
    C->>G: accept(areaCalc)
    G->>V: visitCompound(this)
    V->>R: accept(this)
    R->>V: visitRectangle(this)
    V->>V: totalArea += 10 × 20
    C->>V: getArea()`,
        roles: [
            { role: 'Visitor', cls: 'Visitor', desc: 'Khai báo visitX() cho từng loại phần tử' },
            { role: 'Concrete Visitor', cls: 'AreaCalculator, XMLExporter', desc: 'Một thao tác cụ thể trên mọi loại phần tử' },
            { role: 'Element', cls: 'Shape', desc: 'Khai báo accept(visitor)' },
            { role: 'Concrete Element', cls: 'Circle, Rectangle, CompoundShape', desc: 'accept() gọi đúng visitor.visitX(this)' }
        ],
        inTheWild: ['Plugin Babel / rule ESLint duyệt cây AST', 'Trình biên dịch: kiểm tra kiểu, tối ưu, sinh code trên cùng một AST', 'Xuất báo cáo nhiều định dạng từ cùng một cấu trúc dữ liệu'],
        related: [
            { id: 'composite', note: 'Visitor thường dùng để thực hiện thao tác trên cả cây Composite.' },
            { id: 'iterator', note: 'Iterator quyết định thứ tự đi; Visitor quyết định làm gì ở mỗi nút.' },
            { id: 'interpreter', note: 'Visitor thêm thao tác mới (in, tối ưu) cho cây biểu thức của Interpreter.' }
        ],
        avoid: ['Cây class phần tử hay thêm loại mới — mỗi loại mới phải sửa MỌI Visitor', 'Ngôn ngữ có pattern matching / switch theo kiểu gọn hơn']
    },

    'interpreter': {
        nick: 'Cây biểu thức',
        glyph: '✖️ ➜ ➕(x, 3) · 2',
        keyIdea: 'Mỗi quy tắc ngữ pháp là một class có interpret(context); một câu lệnh được biểu diễn thành cây các object đó và tự tính đệ quy.',
        problem: {
            text: 'Người dùng nhập công thức "(x + 3) * 2". Một hàm khổng lồ xử lý chuỗi bằng regex và if/else lồng nhau → rất khó thêm phép chia, biến mới, hàm…',
            diagram: `flowchart LR
    S["📝 '(x + 3) * 2'"] --> F["🧱 evaluate(str)<br/>regex + if/else lồng nhau"]:::bad
    F -.->|"thêm phép / hàm mới?"| Q["😵"]:::muted`
        },
        solution: {
            text: 'Biểu thức thành cây object. Mỗi nút tự tính phần của mình: lá trả giá trị, nút cha kết hợp kết quả của con.',
            diagram: `flowchart TB
    M["✖️ MultiplyExpr → 16"]:::core --> A["➕ AddExpr → 8"]:::core
    M --> N2["NumberExpr(2)"]:::good
    A --> X["VariableExpr(x) → 5"]:::good
    A --> N3["NumberExpr(3)"]:::good`
        },
        classDiagram: `classDiagram
    class Expression {
        <<interface>>
        +interpret(context) number
    }
    class NumberExpr {
        -value: number
    }
    class VariableExpr {
        -name: string
    }
    class AddExpr {
        -left: Expression
        -right: Expression
    }
    class MultiplyExpr {
        -left: Expression
        -right: Expression
    }
    Expression <|.. NumberExpr
    Expression <|.. VariableExpr
    Expression <|.. AddExpr
    Expression <|.. MultiplyExpr
    AddExpr o-- Expression : left, right
    MultiplyExpr o-- Expression : left, right
    style Expression fill:#2a2350,stroke:#9b59b6`,
        sequence: `sequenceDiagram
    autonumber
    participant C as 👤 Client
    participant M as MultiplyExpr
    participant A as AddExpr
    participant L as Lá: x, 3, 2
    C->>M: interpret({x: 5})
    M->>A: interpret(ctx)
    A->>L: x → 5
    A->>L: 3 → 3
    A-->>M: 8
    M->>L: 2 → 2
    M-->>C: 16`,
        roles: [
            { role: 'Abstract Expression', cls: 'Expression', desc: 'Interface interpret(context)' },
            { role: 'Terminal Expression', cls: 'NumberExpr, VariableExpr', desc: 'Lá của cây — giá trị cơ bản' },
            { role: 'Non-terminal Expression', cls: 'AddExpr, MultiplyExpr', desc: 'Nút có con — kết hợp kết quả của các con' },
            { role: 'Context', cls: 'Map<string, number>', desc: 'Thông tin chung (giá trị biến) khi diễn giải' },
            { role: 'Client', cls: 'code dựng cây', desc: 'Dựng cây biểu thức (thường nhờ parser) rồi gọi interpret()' }
        ],
        inTheWild: ['Công thức trong Excel / Google Sheets', 'Engine regex, bộ lọc tìm kiếm "status:open AND label:bug"', 'Template engine, rule engine khuyến mãi'],
        related: [
            { id: 'composite', note: 'Cây biểu thức là một Composite; Interpreter thêm ý nghĩa "diễn giải" cho mỗi nút.' },
            { id: 'visitor', note: 'Dùng Visitor để thêm thao tác mới (in, tối ưu, kiểm tra kiểu) trên cây mà không sửa các Expression.' },
            { id: 'flyweight', note: 'Các lá giống nhau (số, biến) có thể dùng chung.' }
        ],
        avoid: ['Ngữ pháp lớn/phức tạp — dùng parser generator (ANTLR, PEG) hoặc thư viện có sẵn', 'Cần hiệu năng cao']
    }
};

// ==================== CÂY QUYẾT ĐỊNH: CHỌN PATTERN NÀO? ====================
// id node = id pattern (dấu "-" thay bằng "_") để app.js gắn click mở chi tiết.
const patternDecisionTrees = [
    {
        id: 'creational',
        label: '🏗️ Tạo object',
        question: 'Vấn đề nằm ở khâu TẠO object?',
        diagram: `flowchart LR
    Q{"Bạn cần tạo object<br/>theo kiểu nào?"}:::core
    Q -->|"Cả app chỉ được<br/>có đúng 1 bản"| singleton["1️⃣ Singleton"]
    Q -->|"Object nhiều tham số,<br/>lắp từng bước"| builder["👷 Builder"]
    Q -->|"Copy từ một object<br/>đã cấu hình sẵn"| prototype["🧬 Prototype"]
    Q -->|"Tạo cả BỘ sản phẩm<br/>phải đồng bộ với nhau"| abstract_factory["🏭 Abstract Factory"]
    Q -->|"Để lớp con quyết định<br/>tạo loại nào"| factory_method["🏭 Factory Method"]`
    },
    {
        id: 'structural',
        label: '🧱 Ghép cấu trúc',
        question: 'Vấn đề nằm ở cách GHÉP các object/class lại với nhau?',
        diagram: `flowchart LR
    Q{"Bạn đang gặp<br/>chuyện gì?"}:::core
    Q -->|"Interface không khớp<br/>với code đang có"| adapter["🔌 Adapter"]
    Q -->|"Hệ thống con quá rối,<br/>cần một cửa vào gọn"| facade["🏛️ Facade"]
    Q -->|"Thêm tính năng mà<br/>không sửa class gốc"| decorator["🎁 Decorator"]
    Q -->|"Kiểm soát truy cập,<br/>tải lười, cache"| proxy["🔒 Proxy"]
    Q -->|"Dữ liệu dạng cây,<br/>xử lý lá & nhánh như nhau"| composite["🌳 Composite"]
    Q -->|"2 chiều biến đổi,<br/>subclass bùng nổ"| bridge["🌉 Bridge"]
    Q -->|"Hàng triệu object giống nhau,<br/>tốn RAM"| flyweight["🪶 Flyweight"]`
    },
    {
        id: 'behavioral',
        label: '🎭 Hành vi & giao tiếp',
        question: 'Vấn đề nằm ở cách các object HÀNH XỬ và NÓI CHUYỆN với nhau?',
        diagram: `flowchart LR
    Q{"Bạn muốn<br/>điều gì?"}:::core
    Q -->|"Báo cho nhiều nơi<br/>khi có thay đổi"| observer["👁️ Observer"]
    Q -->|"Đổi thuật toán<br/>lúc đang chạy"| strategy["🎯 Strategy"]
    Q -->|"Hành vi đổi theo<br/>trạng thái hiện tại"| state["🚦 State"]
    Q -->|"Undo, xếp hàng,<br/>ghi log thao tác"| command["📜 Command"]
    Q -->|"Lưu & khôi phục<br/>snapshot"| memento["💾 Memento"]
    Q -->|"Chuyền request qua<br/>chuỗi người xử lý"| chain_of_responsibility["⛓️ Chain of Responsibility"]
    Q -->|"Nhiều object gọi nhau<br/>chằng chịt"| mediator["🎛️ Mediator"]
    Q -->|"Khung các bước cố định,<br/>vài bước tùy biến"| template_method["📋 Template Method"]
    Q -->|"Duyệt collection mà không<br/>lộ cấu trúc bên trong"| iterator["🔄 Iterator"]
    Q -->|"Thêm thao tác mới cho<br/>cấu trúc object ổn định"| visitor["🚶 Visitor"]
    Q -->|"Diễn giải biểu thức /<br/>ngôn ngữ nhỏ"| interpreter["🧮 Interpreter"]`
    }
];

// ==================== BẢNG SO SÁNH CÁC PATTERN DỄ NHẦM ====================
const patternComparisons = [
    {
        id: 'wrappers',
        title: '🎁 Bốn kiểu "bọc" object',
        ids: ['adapter', 'decorator', 'proxy', 'facade'],
        question: 'Cả bốn đều là một lớp đứng trước object khác. Hỏi: lớp bọc ĐỔI interface, GIỮ interface để thêm tính năng, GIỮ interface để kiểm soát, hay TẠO interface mới gọn hơn?',
        cols: ['Pattern', 'Interface đưa ra ngoài', 'Mục đích', 'Bọc cái gì'],
        rows: [
            ['adapter', 'Khác với object bên trong', 'Làm cho "vừa khít" với code đang có', 'Một object'],
            ['decorator', 'Giống hệt', 'Thêm tính năng, xếp chồng nhiều lớp', 'Một object (lồng nhiều lớp)'],
            ['proxy', 'Giống hệt', 'Kiểm soát: tải lười, quyền, cache, log', 'Một object'],
            ['facade', 'Mới, gọn hơn', 'Đơn giản hóa cả hệ thống', 'Nhiều object']
        ]
    },
    {
        id: 'creators',
        title: '🏗️ Bốn cách tạo object',
        ids: ['factory-method', 'abstract-factory', 'builder', 'prototype'],
        question: 'Hỏi: tạo MỘT sản phẩm hay cả BỘ? Tạo một phát hay TỪNG BƯỚC? Tạo mới hay COPY?',
        cols: ['Pattern', 'Tạo ra', 'Cơ chế', 'Dấu hiệu nhận biết'],
        rows: [
            ['factory-method', 'Một sản phẩm', 'Lớp con override hàm createX()', 'abstract createX() trong lớp cha'],
            ['abstract-factory', 'Cả họ sản phẩm đồng bộ', 'Object factory có nhiều createX()', 'createChair() + createTable() cùng interface'],
            ['builder', 'Một object phức tạp', 'Nhiều bước rồi getResult()', 'Chuỗi .setA().setB().build()'],
            ['prototype', 'Bản sao của object có sẵn', 'Object tự clone()', 'clone() trả về chính kiểu của mình']
        ]
    },
    {
        id: 'behaviors',
        title: '🔁 Đóng gói hành vi',
        ids: ['strategy', 'state', 'template-method', 'command'],
        question: 'Hỏi: AI quyết định đổi hành vi? Đổi CẢ thuật toán hay chỉ vài BƯỚC? Đóng gói "cách làm" hay "việc cần làm"?',
        cols: ['Pattern', 'Ai quyết định', 'Cơ chế', 'Câu hỏi nó trả lời'],
        rows: [
            ['strategy', 'Client chọn từ bên ngoài', 'Composition, đổi lúc chạy', '"Làm việc này THEO CÁCH NÀO?"'],
            ['state', 'Chính các state tự chuyển', 'Composition, state biết state kế', '"Đang ở trạng thái nào thì làm gì?"'],
            ['template-method', 'Lớp con, lúc viết code', 'Kế thừa, override vài bước', '"Bước nào trong quy trình được thay?"'],
            ['command', 'Người gửi yêu cầu', 'Yêu cầu thành object execute()/undo()', '"Làm VIỆC GÌ, có hoàn tác được không?"']
        ]
    },
    {
        id: 'messengers',
        title: '📨 Ai nhận thông điệp?',
        ids: ['observer', 'mediator', 'chain-of-responsibility'],
        question: 'Hỏi: gửi cho TẤT CẢ người đăng ký, gửi QUA trung tâm điều phối, hay chuyền tay cho tới khi CÓ NGƯỜI xử lý?',
        cols: ['Pattern', 'Hình dạng', 'Ai nhận', 'Người gửi biết người nhận?'],
        rows: [
            ['observer', '1 → N (phát sóng)', 'Tất cả người đã subscribe', 'Không, chỉ biết interface'],
            ['mediator', 'N ↔ trung tâm ↔ N', 'Do mediator quyết định', 'Không, chỉ biết mediator'],
            ['chain-of-responsibility', 'Chuỗi A → B → C', 'Người đầu tiên xử lý được', 'Chỉ biết mắt xích kế tiếp']
        ]
    },
    {
        id: 'trees',
        title: '🌳 Cấu trúc đệ quy & cây',
        ids: ['composite', 'decorator', 'interpreter', 'visitor'],
        question: 'Hỏi: mỗi nút có NHIỀU con hay MỘT? Mục đích là gộp kết quả, thêm tính năng, diễn giải ý nghĩa, hay thêm thao tác mới?',
        cols: ['Pattern', 'Số con mỗi nút', 'Mục đích', 'Thêm gì thì dễ'],
        rows: [
            ['composite', 'Nhiều', 'Xử lý lá & nhánh như nhau, gộp kết quả', 'Thêm loại nút mới'],
            ['decorator', 'Đúng một', 'Thêm tính năng từng lớp', 'Thêm lớp bọc mới'],
            ['interpreter', 'Tùy quy tắc ngữ pháp', 'Mỗi nút tự diễn giải ý nghĩa', 'Thêm quy tắc ngữ pháp mới'],
            ['visitor', '(đi thăm cây có sẵn)', 'Tách thao tác ra khỏi các nút', 'Thêm thao tác mới']
        ]
    }
];
