// Design Patterns Data
const patterns = {
    creational: [
        {
            id: 'factory-method',
            name: 'Factory Method',
            icon: '🏭',
            difficulty: 'easy',
            shortDesc: 'Định nghĩa interface để tạo đối tượng, nhưng để subclass quyết định class nào được khởi tạo.',
            realWorldAnalogy: 'Giống như một công ty vận chuyển có thể sử dụng xe tải hoặc tàu thủy để giao hàng. Phương thức "giao hàng" không quan tâm loại phương tiện cụ thể.',
            useCases: ['Khi không biết trước loại đối tượng cần tạo', 'Khi muốn mở rộng thư viện/framework', 'Khi muốn tiết kiệm tài nguyên hệ thống'],
            pros: ['Tránh coupling chặt giữa creator và products', 'Single Responsibility Principle', 'Open/Closed Principle'],
            cons: ['Code có thể trở nên phức tạp hơn', 'Cần nhiều subclass mới'],
            codeExample: `// Interface Product
interface Transport {
    deliver(): void;
}

// Concrete Products
class Truck implements Transport {
    deliver() {
        console.log("Giao hàng bằng đường bộ");
    }
}

class Ship implements Transport {
    deliver() {
        console.log("Giao hàng bằng đường biển");
    }
}

// Creator với Factory Method
abstract class Logistics {
    // Factory Method
    abstract createTransport(): Transport;
    
    planDelivery() {
        const transport = this.createTransport();
        transport.deliver();
    }
}

// Concrete Creators
class RoadLogistics extends Logistics {
    createTransport(): Transport {
        return new Truck();
    }
}

class SeaLogistics extends Logistics {
    createTransport(): Transport {
        return new Ship();
    }
}

// Usage
const logistics = new RoadLogistics();
logistics.planDelivery(); // "Giao hàng bằng đường bộ"`,
            diagram: 'factory-method'
        },
        {
            id: 'abstract-factory',
            name: 'Abstract Factory',
            icon: '🏭',
            difficulty: 'medium',
            shortDesc: 'Cung cấp interface để tạo các họ đối tượng liên quan mà không cần chỉ định class cụ thể.',
            realWorldAnalogy: 'Như một cửa hàng nội thất bán các bộ sản phẩm theo phong cách: Modern, Victorian, Art Deco. Mỗi bộ gồm ghế, bàn, sofa cùng phong cách.',
            useCases: ['Khi code cần làm việc với nhiều họ sản phẩm', 'Khi muốn đảm bảo các sản phẩm tương thích', 'Khi muốn ẩn implementation'],
            pros: ['Đảm bảo sản phẩm cùng họ tương thích', 'Tránh coupling chặt', 'Single Responsibility & Open/Closed'],
            cons: ['Code phức tạp với nhiều interface', 'Khó thêm sản phẩm mới vào họ'],
            codeExample: `// Abstract Products
interface Chair { sitOn(): void; }
interface Table { putOn(): void; }

// Concrete Products - Modern Style
class ModernChair implements Chair {
    sitOn() { console.log("Ngồi trên ghế hiện đại"); }
}
class ModernTable implements Table {
    putOn() { console.log("Đặt đồ lên bàn hiện đại"); }
}

// Concrete Products - Victorian Style
class VictorianChair implements Chair {
    sitOn() { console.log("Ngồi trên ghế Victorian"); }
}
class VictorianTable implements Table {
    putOn() { console.log("Đặt đồ lên bàn Victorian"); }
}

// Abstract Factory
interface FurnitureFactory {
    createChair(): Chair;
    createTable(): Table;
}

// Concrete Factories
class ModernFurnitureFactory implements FurnitureFactory {
    createChair() { return new ModernChair(); }
    createTable() { return new ModernTable(); }
}

class VictorianFurnitureFactory implements FurnitureFactory {
    createChair() { return new VictorianChair(); }
    createTable() { return new VictorianTable(); }
}

// Usage
function furnishRoom(factory: FurnitureFactory) {
    const chair = factory.createChair();
    const table = factory.createTable();
    chair.sitOn();
    table.putOn();
}

furnishRoom(new ModernFurnitureFactory());`,
            diagram: 'abstract-factory'
        },
        {
            id: 'builder',
            name: 'Builder',
            icon: '👷',
            difficulty: 'medium',
            shortDesc: 'Tách việc xây dựng đối tượng phức tạp ra khỏi representation, cho phép tạo các representation khác nhau.',
            realWorldAnalogy: 'Như việc xây nhà: bạn có thể xây nhà gỗ, nhà gạch, hay nhà kính. Quy trình xây tương tự nhưng kết quả khác nhau.',
            useCases: ['Khi object có nhiều tham số', 'Khi cần tạo các biến thể khác nhau', 'Khi cần xây dựng Composite tree'],
            pros: ['Xây dựng step-by-step', 'Tái sử dụng code', 'Single Responsibility'],
            cons: ['Tăng độ phức tạp tổng thể', 'Cần tạo nhiều class mới'],
            codeExample: `class Car {
    seats: number = 0;
    engine: string = '';
    gps: boolean = false;
    sunroof: boolean = false;
}

// Builder Interface
interface CarBuilder {
    reset(): void;
    setSeats(count: number): CarBuilder;
    setEngine(type: string): CarBuilder;
    setGPS(): CarBuilder;
    setSunroof(): CarBuilder;
    getResult(): Car;
}

// Concrete Builder
class SportsCarBuilder implements CarBuilder {
    private car: Car = new Car();
    
    reset() { this.car = new Car(); }
    
    setSeats(count: number): CarBuilder {
        this.car.seats = count;
        return this;
    }
    
    setEngine(type: string): CarBuilder {
        this.car.engine = type;
        return this;
    }
    
    setGPS(): CarBuilder {
        this.car.gps = true;
        return this;
    }
    
    setSunroof(): CarBuilder {
        this.car.sunroof = true;
        return this;
    }
    
    getResult(): Car {
        const result = this.car;
        this.reset();
        return result;
    }
}

// Director (optional)
class CarDirector {
    constructSportsCar(builder: CarBuilder): Car {
        return builder
            .setSeats(2)
            .setEngine("V8")
            .setGPS()
            .setSunroof()
            .getResult();
    }
}

// Usage
const builder = new SportsCarBuilder();
const car = builder
    .setSeats(4)
    .setEngine("V6")
    .setGPS()
    .getResult();`,
            diagram: 'builder'
        },
        {
            id: 'prototype',
            name: 'Prototype',
            icon: '🧬',
            difficulty: 'easy',
            shortDesc: 'Tạo đối tượng mới bằng cách sao chép đối tượng đã có, thay vì tạo từ đầu.',
            realWorldAnalogy: 'Như việc photocopy tài liệu. Thay vì viết lại từ đầu, bạn copy bản gốc và chỉnh sửa những gì cần thiết.',
            useCases: ['Khi tạo object tốn nhiều tài nguyên', 'Khi muốn giảm số lượng subclass', 'Khi cần copy object runtime'],
            pros: ['Clone object mà không phụ thuộc class', 'Tránh initialization code lặp lại', 'Tạo object phức tạp dễ dàng hơn'],
            cons: ['Clone object có circular reference phức tạp', 'Deep clone có thể khó implement'],
            codeExample: `// Prototype Interface
interface Prototype {
    clone(): Prototype;
}

// Concrete Prototype
class Shape implements Prototype {
    x: number;
    y: number;
    color: string;
    
    constructor(source?: Shape) {
        if (source) {
            this.x = source.x;
            this.y = source.y;
            this.color = source.color;
        }
    }
    
    clone(): Shape {
        return new Shape(this);
    }
}

class Rectangle extends Shape {
    width: number;
    height: number;
    
    constructor(source?: Rectangle) {
        super(source);
        if (source) {
            this.width = source.width;
            this.height = source.height;
        }
    }
    
    clone(): Rectangle {
        return new Rectangle(this);
    }
}

// Usage
const original = new Rectangle();
original.x = 10;
original.y = 20;
original.width = 100;
original.height = 50;
original.color = "red";

const copy = original.clone();
console.log(copy.width); // 100
console.log(copy === original); // false`,
            diagram: 'prototype'
        },
        {
            id: 'singleton',
            name: 'Singleton',
            icon: '1️⃣',
            difficulty: 'easy',
            shortDesc: 'Đảm bảo một class chỉ có duy nhất một instance và cung cấp điểm truy cập toàn cục.',
            realWorldAnalogy: 'Như chính phủ của một quốc gia - chỉ có một, và mọi người đều biết cách tiếp cận.',
            useCases: ['Database connection', 'Logger', 'Configuration manager', 'Caching'],
            pros: ['Đảm bảo chỉ có một instance', 'Điểm truy cập toàn cục', 'Instance chỉ tạo khi cần'],
            cons: ['Vi phạm Single Responsibility', 'Khó test (mocking)', 'Có thể ẩn dependencies'],
            codeExample: `class Database {
    private static instance: Database;
    private connection: string;
    
    // Private constructor
    private constructor() {
        this.connection = "Connected to database";
    }
    
    // Static method để lấy instance
    static getInstance(): Database {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }
    
    query(sql: string) {
        console.log(\`Executing: \${sql}\`);
    }
}

// Usage
const db1 = Database.getInstance();
const db2 = Database.getInstance();

console.log(db1 === db2); // true - cùng một instance

db1.query("SELECT * FROM users");`,
            diagram: 'singleton'
        }
    ],
    structural: [
        {
            id: 'adapter',
            name: 'Adapter',
            icon: '🔌',
            difficulty: 'easy',
            shortDesc: 'Cho phép các interface không tương thích làm việc với nhau thông qua một lớp trung gian.',
            realWorldAnalogy: 'Như adapter sạc điện thoại khi đi nước ngoài - chuyển đổi ổ cắm châu Âu sang châu Á.',
            useCases: ['Tích hợp thư viện cũ với code mới', 'Làm việc với API bên thứ 3', 'Refactoring hệ thống legacy'],
            pros: ['Single Responsibility Principle', 'Open/Closed Principle', 'Tách business logic khỏi conversion'],
            cons: ['Tăng độ phức tạp', 'Đôi khi sửa service đơn giản hơn'],
            codeExample: `// Target Interface (mong muốn)
interface MediaPlayer {
    play(filename: string): void;
}

// Adaptee (cần adapt)
class AdvancedMusicPlayer {
    playVLC(filename: string) {
        console.log("Playing VLC: " + filename);
    }
    
    playMP4(filename: string) {
        console.log("Playing MP4: " + filename);
    }
}

// Adapter
class MediaAdapter implements MediaPlayer {
    private advancedPlayer: AdvancedMusicPlayer;
    
    constructor() {
        this.advancedPlayer = new AdvancedMusicPlayer();
    }
    
    play(filename: string) {
        if (filename.endsWith('.vlc')) {
            this.advancedPlayer.playVLC(filename);
        } else if (filename.endsWith('.mp4')) {
            this.advancedPlayer.playMP4(filename);
        }
    }
}

// Usage
const player: MediaPlayer = new MediaAdapter();
player.play("movie.mp4"); // Playing MP4: movie.mp4
player.play("song.vlc");  // Playing VLC: song.vlc`,
            diagram: 'adapter'
        },
        {
            id: 'bridge',
            name: 'Bridge',
            icon: '🌉',
            difficulty: 'hard',
            shortDesc: 'Tách abstraction ra khỏi implementation để cả hai có thể thay đổi độc lập.',
            realWorldAnalogy: 'Remote TV có thể điều khiển nhiều loại TV khác nhau. Remote (abstraction) và TV (implementation) phát triển độc lập.',
            useCases: ['Khi muốn chia class lớn thành hierarchies', 'Khi cần switch implementation runtime', 'Khi cần mở rộng theo nhiều chiều'],
            pros: ['Tách platform-specific code', 'Open/Closed Principle', 'Phát triển độc lập abstraction & implementation'],
            cons: ['Code phức tạp hơn', 'Khó áp dụng với class đơn giản'],
            codeExample: `// Implementation Interface
interface Device {
    isEnabled(): boolean;
    enable(): void;
    disable(): void;
    getVolume(): number;
    setVolume(percent: number): void;
}

// Concrete Implementations
class TV implements Device {
    private on = false;
    private volume = 30;
    
    isEnabled() { return this.on; }
    enable() { this.on = true; }
    disable() { this.on = false; }
    getVolume() { return this.volume; }
    setVolume(percent: number) { this.volume = percent; }
}

class Radio implements Device {
    private on = false;
    private volume = 20;
    
    isEnabled() { return this.on; }
    enable() { this.on = true; }
    disable() { this.on = false; }
    getVolume() { return this.volume; }
    setVolume(percent: number) { this.volume = percent; }
}

// Abstraction
class Remote {
    protected device: Device;
    
    constructor(device: Device) {
        this.device = device;
    }
    
    togglePower() {
        if (this.device.isEnabled()) {
            this.device.disable();
        } else {
            this.device.enable();
        }
    }
    
    volumeUp() {
        this.device.setVolume(this.device.getVolume() + 10);
    }
}

// Refined Abstraction
class AdvancedRemote extends Remote {
    mute() {
        this.device.setVolume(0);
    }
}

// Usage
const tv = new TV();
const remote = new AdvancedRemote(tv);
remote.togglePower();
remote.volumeUp();
remote.mute();`,
            diagram: 'bridge'
        },
        {
            id: 'composite',
            name: 'Composite',
            icon: '🌳',
            difficulty: 'medium',
            shortDesc: 'Cho phép gộp các đối tượng thành cấu trúc cây để xử lý như một đối tượng đơn lẻ.',
            realWorldAnalogy: 'Như hệ thống thư mục máy tính: folder có thể chứa files hoặc folders khác, nhưng đều có thể xem kích thước.',
            useCases: ['Khi có cấu trúc dạng cây', 'Khi muốn client xử lý đồng nhất leaf và composite', 'GUI components, file systems'],
            pros: ['Làm việc với cấu trúc phức tạp dễ dàng', 'Open/Closed - thêm component mới dễ', 'Đơn giản hóa client code'],
            cons: ['Khó restrict loại component', 'Thiết kế quá general có thể khó hiểu'],
            codeExample: `// Component
interface Graphic {
    draw(): void;
    getPrice(): number;
}

// Leaf
class Circle implements Graphic {
    constructor(private price: number) {}
    
    draw() { console.log("Drawing circle"); }
    getPrice() { return this.price; }
}

class Square implements Graphic {
    constructor(private price: number) {}
    
    draw() { console.log("Drawing square"); }
    getPrice() { return this.price; }
}

// Composite
class CompositeGraphic implements Graphic {
    private children: Graphic[] = [];
    
    add(child: Graphic) {
        this.children.push(child);
    }
    
    remove(child: Graphic) {
        const index = this.children.indexOf(child);
        if (index > -1) this.children.splice(index, 1);
    }
    
    draw() {
        console.log("Drawing composite:");
        this.children.forEach(child => child.draw());
    }
    
    getPrice(): number {
        return this.children.reduce(
            (sum, child) => sum + child.getPrice(), 0
        );
    }
}

// Usage
const circle1 = new Circle(5);
const circle2 = new Circle(10);
const square = new Square(15);

const group = new CompositeGraphic();
group.add(circle1);
group.add(circle2);
group.add(square);

group.draw();
console.log("Total price:", group.getPrice()); // 30`,
            diagram: 'composite'
        },
        {
            id: 'decorator',
            name: 'Decorator',
            icon: '🎁',
            difficulty: 'medium',
            shortDesc: 'Thêm behavior mới cho object bằng cách đặt nó vào wrapper objects đặc biệt.',
            realWorldAnalogy: 'Như mặc nhiều lớp áo: áo lót, áo sơ mi, áo khoác. Mỗi lớp thêm tính năng mới.',
            useCases: ['Thêm tính năng mà không sửa class gốc', 'Khi không thể dùng inheritance', 'Khi cần combine behaviors'],
            pros: ['Mở rộng behavior không cần subclass', 'Thêm/bỏ behavior runtime', 'Combine nhiều behavior'],
            cons: ['Khó remove wrapper cụ thể', 'Thứ tự decorator quan trọng', 'Code khởi tạo có thể xấu'],
            codeExample: `// Component Interface
interface Coffee {
    getCost(): number;
    getDescription(): string;
}

// Concrete Component
class SimpleCoffee implements Coffee {
    getCost() { return 10; }
    getDescription() { return "Simple coffee"; }
}

// Base Decorator
abstract class CoffeeDecorator implements Coffee {
    constructor(protected coffee: Coffee) {}
    
    getCost() { return this.coffee.getCost(); }
    getDescription() { return this.coffee.getDescription(); }
}

// Concrete Decorators
class MilkDecorator extends CoffeeDecorator {
    getCost() { return this.coffee.getCost() + 2; }
    getDescription() { 
        return this.coffee.getDescription() + ", milk"; 
    }
}

class SugarDecorator extends CoffeeDecorator {
    getCost() { return this.coffee.getCost() + 1; }
    getDescription() { 
        return this.coffee.getDescription() + ", sugar"; 
    }
}

class WhipDecorator extends CoffeeDecorator {
    getCost() { return this.coffee.getCost() + 3; }
    getDescription() { 
        return this.coffee.getDescription() + ", whip"; 
    }
}

// Usage
let coffee: Coffee = new SimpleCoffee();
coffee = new MilkDecorator(coffee);
coffee = new SugarDecorator(coffee);
coffee = new WhipDecorator(coffee);

console.log(coffee.getDescription()); 
// "Simple coffee, milk, sugar, whip"
console.log(coffee.getCost()); // 16`,
            diagram: 'decorator'
        },
        {
            id: 'facade',
            name: 'Facade',
            icon: '🏛️',
            difficulty: 'easy',
            shortDesc: 'Cung cấp interface đơn giản cho một hệ thống phức tạp gồm nhiều classes.',
            realWorldAnalogy: 'Như receptionist khách sạn: bạn chỉ cần nói yêu cầu, họ sẽ liên hệ các bộ phận liên quan.',
            useCases: ['Khi cần interface đơn giản cho hệ thống phức tạp', 'Khi muốn layer subsystem', 'Giảm coupling với thư viện'],
            pros: ['Cô lập code khỏi complexity', 'Giảm dependencies', 'Entry point rõ ràng'],
            cons: ['Có thể thành God Object', 'Ẩn quá nhiều chi tiết'],
            codeExample: `// Complex Subsystem Classes
class VideoFile {
    constructor(public filename: string) {}
}

class Codec {
    extract(file: VideoFile) {
        console.log("Extracting codec from " + file.filename);
    }
}

class BitrateReader {
    static read(file: VideoFile) {
        console.log("Reading bitrate...");
        return { bitrate: 1500 };
    }
}

class AudioMixer {
    fix(data: any) {
        console.log("Fixing audio...");
        return data;
    }
}

// Facade
class VideoConverter {
    convert(filename: string, format: string): string {
        console.log("VideoConverter: conversion started");
        
        const file = new VideoFile(filename);
        const codec = new Codec();
        codec.extract(file);
        
        const data = BitrateReader.read(file);
        const mixer = new AudioMixer();
        mixer.fix(data);
        
        console.log("VideoConverter: conversion completed");
        return \`\${filename}.\${format}\`;
    }
}

// Usage - Simple!
const converter = new VideoConverter();
const result = converter.convert("movie", "mp4");`,
            diagram: 'facade'
        },
        {
            id: 'flyweight',
            name: 'Flyweight',
            icon: '🪶',
            difficulty: 'hard',
            shortDesc: 'Tiết kiệm RAM bằng cách chia sẻ state chung giữa nhiều objects.',
            realWorldAnalogy: 'Như game với hàng triệu viên đạn: thay vì mỗi viên lưu texture riêng, tất cả share cùng texture.',
            useCases: ['Khi có rất nhiều objects tương tự', 'Khi bộ nhớ là vấn đề', 'Game objects, text editors'],
            pros: ['Tiết kiệm RAM đáng kể', 'Tối ưu performance', 'Centralized state management'],
            cons: ['Trading RAM cho CPU', 'Code phức tạp hơn', 'Khó debug'],
            codeExample: `// Flyweight - shared state
class TreeType {
    constructor(
        public name: string,
        public color: string,
        public texture: string
    ) {}
    
    draw(x: number, y: number) {
        console.log(\`Drawing \${this.name} tree at (\${x}, \${y})\`);
    }
}

// Flyweight Factory
class TreeFactory {
    private static treeTypes: Map<string, TreeType> = new Map();
    
    static getTreeType(name: string, color: string, texture: string): TreeType {
        const key = \`\${name}_\${color}_\${texture}\`;
        
        if (!this.treeTypes.has(key)) {
            console.log("Creating new TreeType: " + name);
            this.treeTypes.set(key, new TreeType(name, color, texture));
        }
        
        return this.treeTypes.get(key)!;
    }
}

// Context - unique state
class Tree {
    constructor(
        private x: number,
        private y: number,
        private type: TreeType
    ) {}
    
    draw() {
        this.type.draw(this.x, this.y);
    }
}

// Forest với hàng nghìn cây
class Forest {
    private trees: Tree[] = [];
    
    plantTree(x: number, y: number, name: string, color: string, texture: string) {
        const type = TreeFactory.getTreeType(name, color, texture);
        const tree = new Tree(x, y, type);
        this.trees.push(tree);
    }
    
    draw() {
        this.trees.forEach(tree => tree.draw());
    }
}

// Usage
const forest = new Forest();
// Tạo 1000 cây nhưng chỉ có vài TreeType objects
for (let i = 0; i < 1000; i++) {
    forest.plantTree(
        Math.random() * 1000,
        Math.random() * 1000,
        i % 2 === 0 ? "Oak" : "Pine",
        i % 2 === 0 ? "green" : "dark-green",
        "standard"
    );
}`,
            diagram: 'flyweight'
        },
        {
            id: 'proxy',
            name: 'Proxy',
            icon: '🔒',
            difficulty: 'medium',
            shortDesc: 'Cung cấp placeholder hoặc surrogate cho object khác để kiểm soát truy cập.',
            realWorldAnalogy: 'Như thẻ tín dụng là proxy cho tiền mặt - cùng interface nhưng thêm các kiểm soát.',
            useCases: ['Lazy initialization', 'Access control', 'Logging', 'Caching', 'Remote proxy'],
            pros: ['Control service object mà client không biết', 'Manage lifecycle', 'Hoạt động khi service unavailable'],
            cons: ['Response có thể delay', 'Code phức tạp hơn'],
            codeExample: `// Subject Interface
interface Video {
    play(): void;
    getInfo(): string;
}

// Real Subject
class RealVideo implements Video {
    private filename: string;
    
    constructor(filename: string) {
        this.filename = filename;
        this.loadFromDisk(); // Heavy operation
    }
    
    private loadFromDisk() {
        console.log("Loading video: " + this.filename);
    }
    
    play() {
        console.log("Playing: " + this.filename);
    }
    
    getInfo() {
        return this.filename;
    }
}

// Proxy - Lazy Loading
class VideoProxy implements Video {
    private realVideo: RealVideo | null = null;
    private filename: string;
    
    constructor(filename: string) {
        this.filename = filename;
    }
    
    play() {
        if (!this.realVideo) {
            this.realVideo = new RealVideo(this.filename);
        }
        this.realVideo.play();
    }
    
    getInfo() {
        return this.filename; // Không cần load video
    }
}

// Protection Proxy
class ProtectedVideoProxy implements Video {
    private video: Video;
    private userRole: string;
    
    constructor(video: Video, userRole: string) {
        this.video = video;
        this.userRole = userRole;
    }
    
    play() {
        if (this.userRole === 'admin' || this.userRole === 'premium') {
            this.video.play();
        } else {
            console.log("Access denied! Premium content.");
        }
    }
    
    getInfo() {
        return this.video.getInfo();
    }
}

// Usage
const video = new VideoProxy("movie.mp4");
console.log(video.getInfo()); // Không load video
video.play(); // Bây giờ mới load`,
            diagram: 'proxy'
        }
    ],
    behavioral: [
        {
            id: 'chain-of-responsibility',
            name: 'Chain of Responsibility',
            icon: '⛓️',
            difficulty: 'medium',
            shortDesc: 'Cho phép gửi request qua chuỗi handlers, mỗi handler quyết định xử lý hoặc chuyển tiếp.',
            realWorldAnalogy: 'Như quy trình duyệt đơn: nhân viên → trưởng phòng → giám đốc. Mỗi cấp có thể duyệt hoặc chuyển lên.',
            useCases: ['Khi nhiều objects có thể xử lý request', 'Khi không muốn specify handler cụ thể', 'Xử lý request theo thứ tự'],
            pros: ['Giảm coupling', 'Single Responsibility', 'Open/Closed Principle'],
            cons: ['Request có thể không được xử lý', 'Khó debug chuỗi dài'],
            codeExample: `interface Handler {
    setNext(handler: Handler): Handler;
    handle(request: string): string | null;
}

abstract class AbstractHandler implements Handler {
    private nextHandler: Handler | null = null;
    
    setNext(handler: Handler): Handler {
        this.nextHandler = handler;
        return handler;
    }
    
    handle(request: string): string | null {
        if (this.nextHandler) {
            return this.nextHandler.handle(request);
        }
        return null;
    }
}

class MonkeyHandler extends AbstractHandler {
    handle(request: string): string | null {
        if (request === "Banana") {
            return "Monkey: I'll eat the Banana";
        }
        return super.handle(request);
    }
}

class SquirrelHandler extends AbstractHandler {
    handle(request: string): string | null {
        if (request === "Nut") {
            return "Squirrel: I'll eat the Nut";
        }
        return super.handle(request);
    }
}

class DogHandler extends AbstractHandler {
    handle(request: string): string | null {
        if (request === "MeatBall") {
            return "Dog: I'll eat the MeatBall";
        }
        return super.handle(request);
    }
}

// Usage
const monkey = new MonkeyHandler();
const squirrel = new SquirrelHandler();
const dog = new DogHandler();

monkey.setNext(squirrel).setNext(dog);

const foods = ["Nut", "Banana", "MeatBall", "Coffee"];
foods.forEach(food => {
    const result = monkey.handle(food);
    console.log(result || \`\${food} was left untouched\`);
});`,
            diagram: 'chain-of-responsibility'
        },
        {
            id: 'command',
            name: 'Command',
            icon: '📜',
            difficulty: 'medium',
            shortDesc: 'Đóng gói request thành object, cho phép undo, queue, và log requests.',
            realWorldAnalogy: 'Như đặt món ở nhà hàng: bạn đưa order (command) cho bồi bàn, bồi bàn đưa cho bếp. Order có thể queue, undo.',
            useCases: ['Undo/Redo operations', 'Queue requests', 'Macro recording', 'Transaction systems'],
            pros: ['Decouple invoker và receiver', 'Undo/Redo dễ dàng', 'Compose commands phức tạp'],
            cons: ['Nhiều command classes', 'Code phức tạp hơn'],
            codeExample: `// Command Interface
interface Command {
    execute(): void;
    undo(): void;
}

// Receiver
class TextEditor {
    private text: string = "";
    
    write(text: string) {
        this.text += text;
    }
    
    delete(length: number) {
        this.text = this.text.slice(0, -length);
    }
    
    getText(): string {
        return this.text;
    }
}

// Concrete Commands
class WriteCommand implements Command {
    private editor: TextEditor;
    private text: string;
    
    constructor(editor: TextEditor, text: string) {
        this.editor = editor;
        this.text = text;
    }
    
    execute() {
        this.editor.write(this.text);
    }
    
    undo() {
        this.editor.delete(this.text.length);
    }
}

// Invoker
class CommandManager {
    private history: Command[] = [];
    private undone: Command[] = [];
    
    execute(command: Command) {
        command.execute();
        this.history.push(command);
        this.undone = [];
    }
    
    undo() {
        const command = this.history.pop();
        if (command) {
            command.undo();
            this.undone.push(command);
        }
    }
    
    redo() {
        const command = this.undone.pop();
        if (command) {
            command.execute();
            this.history.push(command);
        }
    }
}

// Usage
const editor = new TextEditor();
const manager = new CommandManager();

manager.execute(new WriteCommand(editor, "Hello "));
manager.execute(new WriteCommand(editor, "World!"));
console.log(editor.getText()); // "Hello World!"

manager.undo();
console.log(editor.getText()); // "Hello "

manager.redo();
console.log(editor.getText()); // "Hello World!"`,
            diagram: 'command'
        },
        {
            id: 'iterator',
            name: 'Iterator',
            icon: '🔄',
            difficulty: 'easy',
            shortDesc: 'Truy cập tuần tự các phần tử của collection mà không lộ cấu trúc bên trong.',
            realWorldAnalogy: 'Như đi bảo tàng: bạn follow một route định sẵn để xem hết các tác phẩm mà không cần biết layout bảo tàng.',
            useCases: ['Duyệt collections phức tạp', 'Ẩn implementation của collection', 'Nhiều cách duyệt khác nhau'],
            pros: ['Single Responsibility', 'Open/Closed', 'Parallel iteration'],
            cons: ['Overkill cho collections đơn giản', 'Có thể kém hiệu quả hơn direct access'],
            codeExample: `interface Iterator<T> {
    current(): T;
    next(): T;
    hasNext(): boolean;
    reset(): void;
}

interface Collection<T> {
    createIterator(): Iterator<T>;
}

// Concrete Iterator
class ArrayIterator<T> implements Iterator<T> {
    private collection: T[];
    private position: number = 0;
    
    constructor(collection: T[]) {
        this.collection = collection;
    }
    
    current(): T {
        return this.collection[this.position];
    }
    
    next(): T {
        const item = this.collection[this.position];
        this.position++;
        return item;
    }
    
    hasNext(): boolean {
        return this.position < this.collection.length;
    }
    
    reset(): void {
        this.position = 0;
    }
}

// Concrete Collection
class WordsCollection implements Collection<string> {
    private items: string[] = [];
    
    addItem(item: string) {
        this.items.push(item);
    }
    
    createIterator(): Iterator<string> {
        return new ArrayIterator(this.items);
    }
    
    // Reverse iterator
    createReverseIterator(): Iterator<string> {
        return new ArrayIterator([...this.items].reverse());
    }
}

// Usage
const collection = new WordsCollection();
collection.addItem("First");
collection.addItem("Second");
collection.addItem("Third");

const iterator = collection.createIterator();
while (iterator.hasNext()) {
    console.log(iterator.next());
}
// First, Second, Third

const reverseIterator = collection.createReverseIterator();
while (reverseIterator.hasNext()) {
    console.log(reverseIterator.next());
}
// Third, Second, First`,
            diagram: 'iterator'
        },
        {
            id: 'mediator',
            name: 'Mediator',
            icon: '🎛️',
            difficulty: 'medium',
            shortDesc: 'Giảm coupling bằng cách cho các objects giao tiếp qua một mediator thay vì trực tiếp.',
            realWorldAnalogy: 'Như đài kiểm soát không lưu: máy bay không nói chuyện trực tiếp với nhau mà qua đài điều khiển.',
            useCases: ['Khi objects giao tiếp phức tạp', 'Khi muốn tái sử dụng components', 'Chat rooms, form validation'],
            pros: ['Single Responsibility', 'Open/Closed', 'Giảm coupling'],
            cons: ['Mediator có thể thành God Object'],
            codeExample: `// Mediator Interface
interface ChatMediator {
    sendMessage(message: string, sender: User): void;
    addUser(user: User): void;
}

// Colleague
class User {
    constructor(
        public name: string,
        private mediator: ChatMediator
    ) {
        mediator.addUser(this);
    }
    
    send(message: string) {
        console.log(\`\${this.name} sends: \${message}\`);
        this.mediator.sendMessage(message, this);
    }
    
    receive(message: string, from: string) {
        console.log(\`\${this.name} received from \${from}: \${message}\`);
    }
}

// Concrete Mediator
class ChatRoom implements ChatMediator {
    private users: User[] = [];
    
    addUser(user: User) {
        this.users.push(user);
    }
    
    sendMessage(message: string, sender: User) {
        this.users.forEach(user => {
            if (user !== sender) {
                user.receive(message, sender.name);
            }
        });
    }
}

// Usage
const chatRoom = new ChatRoom();

const john = new User("John", chatRoom);
const jane = new User("Jane", chatRoom);
const bob = new User("Bob", chatRoom);

john.send("Hello everyone!");
// Jane received from John: Hello everyone!
// Bob received from John: Hello everyone!

jane.send("Hi John!");
// John received from Jane: Hi John!
// Bob received from Jane: Hi John!`,
            diagram: 'mediator'
        },
        {
            id: 'memento',
            name: 'Memento',
            icon: '💾',
            difficulty: 'medium',
            shortDesc: 'Lưu và restore state của object mà không vi phạm encapsulation.',
            realWorldAnalogy: 'Như save game: bạn có thể lưu trạng thái game và load lại bất cứ lúc nào.',
            useCases: ['Undo mechanism', 'Snapshots', 'Transaction rollback'],
            pros: ['Giữ encapsulation', 'Đơn giản hóa originator', 'Full state backup'],
            cons: ['Tốn RAM nếu save thường xuyên', 'Caretaker cần track lifecycle'],
            codeExample: `// Memento
class EditorMemento {
    constructor(
        private state: string,
        private cursorPosition: number
    ) {}
    
    getState(): string { return this.state; }
    getCursorPosition(): number { return this.cursorPosition; }
}

// Originator
class Editor {
    private content: string = "";
    private cursorPosition: number = 0;
    
    type(text: string) {
        this.content += text;
        this.cursorPosition = this.content.length;
    }
    
    delete(count: number) {
        this.content = this.content.slice(0, -count);
        this.cursorPosition = this.content.length;
    }
    
    getContent(): string {
        return this.content;
    }
    
    // Create memento
    save(): EditorMemento {
        return new EditorMemento(this.content, this.cursorPosition);
    }
    
    // Restore from memento
    restore(memento: EditorMemento) {
        this.content = memento.getState();
        this.cursorPosition = memento.getCursorPosition();
    }
}

// Caretaker
class History {
    private mementos: EditorMemento[] = [];
    
    push(memento: EditorMemento) {
        this.mementos.push(memento);
    }
    
    pop(): EditorMemento | undefined {
        return this.mementos.pop();
    }
}

// Usage
const editor = new Editor();
const history = new History();

editor.type("Hello");
history.push(editor.save());

editor.type(" World");
history.push(editor.save());

editor.type("!");
console.log(editor.getContent()); // "Hello World!"

editor.restore(history.pop()!);
console.log(editor.getContent()); // "Hello World"

editor.restore(history.pop()!);
console.log(editor.getContent()); // "Hello"`,
            diagram: 'memento'
        },
        {
            id: 'observer',
            name: 'Observer',
            icon: '👁️',
            difficulty: 'easy',
            shortDesc: 'Định nghĩa dependency một-nhiều để khi một object thay đổi, tất cả dependents được notify.',
            realWorldAnalogy: 'Như đăng ký newsletter: khi có bài mới, tất cả subscribers được thông báo.',
            useCases: ['Event systems', 'MVC pattern', 'Distributed event handling', 'Real-time updates'],
            pros: ['Open/Closed', 'Thiết lập relations runtime', 'Loose coupling'],
            cons: ['Subscribers notify random order', 'Memory leaks nếu không unsubscribe'],
            codeExample: `// Observer Interface
interface Observer {
    update(message: string): void;
}

// Subject Interface
interface Subject {
    subscribe(observer: Observer): void;
    unsubscribe(observer: Observer): void;
    notify(message: string): void;
}

// Concrete Subject
class NewsPublisher implements Subject {
    private observers: Observer[] = [];
    private latestNews: string = "";
    
    subscribe(observer: Observer) {
        this.observers.push(observer);
    }
    
    unsubscribe(observer: Observer) {
        const index = this.observers.indexOf(observer);
        if (index > -1) {
            this.observers.splice(index, 1);
        }
    }
    
    notify(message: string) {
        this.observers.forEach(observer => {
            observer.update(message);
        });
    }
    
    publishNews(news: string) {
        this.latestNews = news;
        this.notify(news);
    }
}

// Concrete Observers
class EmailSubscriber implements Observer {
    constructor(private email: string) {}
    
    update(message: string) {
        console.log(\`Email to \${this.email}: \${message}\`);
    }
}

class SMSSubscriber implements Observer {
    constructor(private phone: string) {}
    
    update(message: string) {
        console.log(\`SMS to \${this.phone}: \${message}\`);
    }
}

// Usage
const publisher = new NewsPublisher();

const email1 = new EmailSubscriber("john@email.com");
const email2 = new EmailSubscriber("jane@email.com");
const sms1 = new SMSSubscriber("+84123456789");

publisher.subscribe(email1);
publisher.subscribe(email2);
publisher.subscribe(sms1);

publisher.publishNews("Breaking: New Design Pattern discovered!");
// Email to john@email.com: Breaking: New Design Pattern discovered!
// Email to jane@email.com: Breaking: New Design Pattern discovered!
// SMS to +84123456789: Breaking: New Design Pattern discovered!

publisher.unsubscribe(email2);
publisher.publishNews("Update: Pattern confirmed!");`,
            diagram: 'observer'
        },
        {
            id: 'state',
            name: 'State',
            icon: '🚦',
            difficulty: 'medium',
            shortDesc: 'Cho phép object thay đổi behavior khi state thay đổi, như thể nó đổi class.',
            realWorldAnalogy: 'Như điện thoại: các nút có chức năng khác nhau tùy thuộc màn hình đang lock hay unlock.',
            useCases: ['Objects với nhiều states', 'State machines', 'Workflow engines'],
            pros: ['Single Responsibility', 'Open/Closed', 'Eliminate conditionals'],
            cons: ['Overkill cho ít states', 'States cần biết nhau'],
            codeExample: `// State Interface
interface State {
    insertMoney(context: VendingMachine): void;
    selectProduct(context: VendingMachine): void;
    dispense(context: VendingMachine): void;
}

// Context
class VendingMachine {
    private state: State;
    
    constructor() {
        this.state = new IdleState();
    }
    
    setState(state: State) {
        console.log(\`State changed to: \${state.constructor.name}\`);
        this.state = state;
    }
    
    insertMoney() { this.state.insertMoney(this); }
    selectProduct() { this.state.selectProduct(this); }
    dispense() { this.state.dispense(this); }
}

// Concrete States
class IdleState implements State {
    insertMoney(context: VendingMachine) {
        console.log("Money inserted");
        context.setState(new HasMoneyState());
    }
    
    selectProduct(context: VendingMachine) {
        console.log("Please insert money first");
    }
    
    dispense(context: VendingMachine) {
        console.log("Please insert money and select product");
    }
}

class HasMoneyState implements State {
    insertMoney(context: VendingMachine) {
        console.log("Money already inserted");
    }
    
    selectProduct(context: VendingMachine) {
        console.log("Product selected");
        context.setState(new DispensingState());
    }
    
    dispense(context: VendingMachine) {
        console.log("Please select a product first");
    }
}

class DispensingState implements State {
    insertMoney(context: VendingMachine) {
        console.log("Please wait, dispensing...");
    }
    
    selectProduct(context: VendingMachine) {
        console.log("Already dispensing");
    }
    
    dispense(context: VendingMachine) {
        console.log("Product dispensed!");
        context.setState(new IdleState());
    }
}

// Usage
const machine = new VendingMachine();
machine.selectProduct(); // Please insert money first
machine.insertMoney();   // Money inserted
machine.selectProduct(); // Product selected
machine.dispense();      // Product dispensed!`,
            diagram: 'state'
        },
        {
            id: 'strategy',
            name: 'Strategy',
            icon: '🎯',
            difficulty: 'easy',
            shortDesc: 'Định nghĩa họ algorithms, đóng gói mỗi cái và làm chúng có thể thay thế lẫn nhau.',
            realWorldAnalogy: 'Như các phương thức thanh toán: tiền mặt, thẻ, PayPal - khác nhau nhưng đều là "thanh toán".',
            useCases: ['Nhiều algorithms cho cùng task', 'Tránh conditional statements', 'Chọn algorithm runtime'],
            pros: ['Swap algorithms runtime', 'Isolation', 'Open/Closed', 'Composition over inheritance'],
            cons: ['Clients phải biết strategies', 'Overkill cho ít algorithms'],
            codeExample: `// Strategy Interface
interface PaymentStrategy {
    pay(amount: number): void;
}

// Concrete Strategies
class CreditCardPayment implements PaymentStrategy {
    constructor(
        private cardNumber: string,
        private cvv: string
    ) {}
    
    pay(amount: number) {
        console.log(\`Paid \${amount}$ using Credit Card \${this.cardNumber}\`);
    }
}

class PayPalPayment implements PaymentStrategy {
    constructor(private email: string) {}
    
    pay(amount: number) {
        console.log(\`Paid \${amount}$ using PayPal (\${this.email})\`);
    }
}

class CryptoPayment implements PaymentStrategy {
    constructor(private walletAddress: string) {}
    
    pay(amount: number) {
        console.log(\`Paid \${amount}$ in crypto to \${this.walletAddress}\`);
    }
}

// Context
class ShoppingCart {
    private items: { name: string; price: number }[] = [];
    private paymentStrategy: PaymentStrategy | null = null;
    
    addItem(name: string, price: number) {
        this.items.push({ name, price });
    }
    
    setPaymentStrategy(strategy: PaymentStrategy) {
        this.paymentStrategy = strategy;
    }
    
    checkout() {
        if (!this.paymentStrategy) {
            console.log("Please select a payment method");
            return;
        }
        
        const total = this.items.reduce((sum, item) => sum + item.price, 0);
        this.paymentStrategy.pay(total);
        this.items = [];
    }
}

// Usage
const cart = new ShoppingCart();
cart.addItem("Laptop", 999);
cart.addItem("Mouse", 49);

// Pay with credit card
cart.setPaymentStrategy(new CreditCardPayment("1234-5678", "123"));
cart.checkout(); // Paid 1048$ using Credit Card 1234-5678

// Or pay with PayPal
cart.addItem("Keyboard", 79);
cart.setPaymentStrategy(new PayPalPayment("user@email.com"));
cart.checkout(); // Paid 79$ using PayPal (user@email.com)`,
            diagram: 'strategy'
        },
        {
            id: 'template-method',
            name: 'Template Method',
            icon: '📋',
            difficulty: 'easy',
            shortDesc: 'Định nghĩa skeleton của algorithm trong base class, cho phép subclasses override các steps.',
            realWorldAnalogy: 'Như xây nhà: foundation → walls → roof luôn theo thứ tự, nhưng materials có thể khác.',
            useCases: ['Khi có algorithm với các steps cố định', 'Khi muốn control extension points', 'Framework design'],
            pros: ['Pull duplicate code vào base class', 'Allow subclasses to override', 'Control extension points'],
            cons: ['Bị giới hạn bởi skeleton', 'Khó maintain với nhiều steps'],
            codeExample: `// Abstract Template Class
abstract class DataMiner {
    // Template method
    mine(path: string): void {
        const file = this.openFile(path);
        const rawData = this.extractData(file);
        const data = this.parseData(rawData);
        const analysis = this.analyzeData(data);
        this.sendReport(analysis);
        this.closeFile(file);
    }
    
    // Common implementations
    protected analyzeData(data: any[]): string {
        return \`Analyzed \${data.length} records\`;
    }
    
    protected sendReport(analysis: string): void {
        console.log("Sending report:", analysis);
    }
    
    // Abstract methods - must be implemented
    protected abstract openFile(path: string): any;
    protected abstract extractData(file: any): any;
    protected abstract parseData(rawData: any): any[];
    protected abstract closeFile(file: any): void;
}

// Concrete Implementation - PDF
class PDFDataMiner extends DataMiner {
    protected openFile(path: string) {
        console.log("Opening PDF:", path);
        return { type: 'pdf', path };
    }
    
    protected extractData(file: any) {
        console.log("Extracting PDF data");
        return "raw pdf data";
    }
    
    protected parseData(rawData: any): any[] {
        console.log("Parsing PDF data");
        return [1, 2, 3, 4, 5];
    }
    
    protected closeFile(file: any) {
        console.log("Closing PDF file");
    }
}

// Concrete Implementation - CSV
class CSVDataMiner extends DataMiner {
    protected openFile(path: string) {
        console.log("Opening CSV:", path);
        return { type: 'csv', path };
    }
    
    protected extractData(file: any) {
        console.log("Reading CSV rows");
        return "row1,row2,row3";
    }
    
    protected parseData(rawData: any): any[] {
        console.log("Parsing CSV data");
        return rawData.split(',');
    }
    
    protected closeFile(file: any) {
        console.log("Closing CSV file");
    }
}

// Usage
const pdfMiner = new PDFDataMiner();
pdfMiner.mine("report.pdf");

const csvMiner = new CSVDataMiner();
csvMiner.mine("data.csv");`,
            diagram: 'template-method'
        },
        {
            id: 'visitor',
            name: 'Visitor',
            icon: '🚶',
            difficulty: 'hard',
            shortDesc: 'Thêm operations mới vào class hierarchy mà không sửa đổi các classes đó.',
            realWorldAnalogy: 'Như tour guide ở bảo tàng: mỗi loại tác phẩm (tranh, tượng) được giải thích khác nhau.',
            useCases: ['Thêm operations cho class hierarchy', 'Tách algorithms khỏi objects', 'Khi structure hiếm thay đổi'],
            pros: ['Open/Closed', 'Single Responsibility', 'Accumulate state khi visiting'],
            cons: ['Cần update visitors khi thêm element', 'Visitors có thể thiếu access to private'],
            codeExample: `// Visitor Interface
interface Visitor {
    visitCircle(circle: Circle): void;
    visitRectangle(rectangle: Rectangle): void;
    visitCompound(compound: CompoundShape): void;
}

// Element Interface
interface Shape {
    accept(visitor: Visitor): void;
}

// Concrete Elements
class Circle implements Shape {
    constructor(public radius: number) {}
    
    accept(visitor: Visitor) {
        visitor.visitCircle(this);
    }
}

class Rectangle implements Shape {
    constructor(public width: number, public height: number) {}
    
    accept(visitor: Visitor) {
        visitor.visitRectangle(this);
    }
}

class CompoundShape implements Shape {
    public children: Shape[] = [];
    
    add(shape: Shape) {
        this.children.push(shape);
    }
    
    accept(visitor: Visitor) {
        visitor.visitCompound(this);
    }
}

// Concrete Visitors
class AreaCalculator implements Visitor {
    private totalArea = 0;
    
    visitCircle(circle: Circle) {
        this.totalArea += Math.PI * circle.radius ** 2;
    }
    
    visitRectangle(rectangle: Rectangle) {
        this.totalArea += rectangle.width * rectangle.height;
    }
    
    visitCompound(compound: CompoundShape) {
        compound.children.forEach(child => child.accept(this));
    }
    
    getArea(): number {
        return this.totalArea;
    }
}

class XMLExporter implements Visitor {
    private result = "";
    
    visitCircle(circle: Circle) {
        this.result += \`<circle radius="\${circle.radius}"/>\n\`;
    }
    
    visitRectangle(rectangle: Rectangle) {
        this.result += \`<rect width="\${rectangle.width}" height="\${rectangle.height}"/>\n\`;
    }
    
    visitCompound(compound: CompoundShape) {
        this.result += "<compound>\n";
        compound.children.forEach(child => child.accept(this));
        this.result += "</compound>\n";
    }
    
    getXML(): string {
        return this.result;
    }
}

// Usage
const circle = new Circle(5);
const rect = new Rectangle(10, 20);
const compound = new CompoundShape();
compound.add(circle);
compound.add(rect);

const areaCalc = new AreaCalculator();
compound.accept(areaCalc);
console.log("Total area:", areaCalc.getArea());

const exporter = new XMLExporter();
compound.accept(exporter);
console.log(exporter.getXML());`,
            diagram: 'visitor'
        }
    ]
};

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

// Initialize
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

// Setup event listeners
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

// Render patterns
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

// Filter patterns
function filterPatterns(category) {
    categorySections.forEach(section => {
        if (category === 'all' || section.dataset.category === category) {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });
}

// Open pattern modal
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

// Setup tabs
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

// Close modal
function closeModal() {
    patternModal.classList.remove('active');
    document.body.style.overflow = '';
}

// Escape HTML
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Initialize app
init();
