// ==================== DESIGN PATTERNS - NGÂN HÀNG BÀI TẬP ====================
// Dùng cho cả hai chiều luyện tập:
//   ⬅️ Chiều ngược (Nhận diện): tình huống / đoạn code / code "có mùi" / hình minh họa → pattern nào?
//   ➡️ Chiều xuôi (Vận dụng):   pattern → chọn tình huống phù hợp, gán vai trò, sắp xếp luồng chạy, điền code.
//
// Mỗi pattern (key = id):
//   scenarios : tình huống thực tế mà pattern này là lời giải phù hợp nhất (không nêu tên pattern)
//   code      : đoạn code ÁP DỤNG pattern (khác ví dụ chính để không học vẹt)
//   smell     : { code, distractors } - code CHƯA dùng pattern; distractors là các đáp án sai chắc chắn
//   flow      : các bước luồng chạy theo đúng thứ tự (bám theo code mẫu của pattern)
//   blank     : { code, options, explain } - điền dòng còn thiếu, options[0] là đáp án đúng

const practiceBank = {
    'factory-method': {
        scenarios: [
            'Framework xuất báo cáo có lớp ReportExporter với hàm export() dùng chung (lấy dữ liệu → định dạng → lưu). Bạn muốn lớp con PdfExporter và ExcelExporter chỉ override một hàm để quyết định tạo "writer" nào.',
            'Lớp NotificationService có hàm notify() viết sẵn. Mỗi lớp con (EmailService, SmsService) override hàm createSender() để trả về đối tượng gửi phù hợp, còn notify() giữ nguyên.',
            'Game có lớp Level với hàm spawnWave() dùng chung; màn Sa mạc sinh bọ cạp, màn Băng sinh gấu tuyết. Mỗi lớp con Level chỉ override đúng một hàm "tạo quái".'
        ],
        code: `abstract class Dialog {
    render() {
        const button = this.createButton();
        button.onClick(() => this.close());
        button.draw();
    }
    protected abstract createButton(): Button;
    close() { /* ... */ }
}

class WindowsDialog extends Dialog {
    protected createButton(): Button {
        return new WindowsButton();
    }
}

class WebDialog extends Dialog {
    protected createButton(): Button {
        return new HtmlButton();
    }
}`,
        smell: {
            code: `class Logistics {
    planDelivery(type: string) {
        let transport;
        if (type === "road") transport = new Truck();
        else if (type === "sea") transport = new Ship();
        else if (type === "air") transport = new Plane();
        // mỗi loại mới lại thêm một else if ở đây...
        transport.deliver();
    }
}`,
            distractors: ['singleton', 'observer', 'decorator']
        },
        flow: [
            'Client gọi planDelivery() trên một RoadLogistics',
            'planDelivery() (viết ở lớp cha Logistics) gọi createTransport()',
            'RoadLogistics override createTransport() và trả về new Truck()',
            'planDelivery() gọi transport.deliver() qua interface Transport'
        ],
        blank: {
            code: `abstract class Logistics {
    abstract createTransport(): Transport;

    planDelivery() {
        /* ??? */
        transport.deliver();
    }
}`,
            options: ['const transport = this.createTransport();', 'const transport = new Truck();', 'const transport = Logistics.getInstance();', 'const transport = this.clone();'],
            explain: 'Lớp cha không được tự <code>new Truck()</code> — nó gọi factory method để lớp con quyết định tạo gì.'
        }
    },

    'abstract-factory': {
        scenarios: [
            'App có giao diện Sáng và Tối; mỗi giao diện gồm Button, Checkbox, Tooltip phải cùng tông màu. Bạn muốn chọn giao diện một lần lúc khởi động và mọi component tạo ra sau đó luôn cùng bộ.',
            'Phần mềm hỗ trợ nhiều CSDL: với MySQL cần trọn bộ Connection + Command + Transaction của MySQL, với PostgreSQL cần trọn bộ của PostgreSQL — tuyệt đối không trộn lẫn.',
            'Game có hai phe Elf và Orc. Khi người chơi chọn phe, hệ thống phải tạo lính, tháp canh và xe chiến đấu đúng phong cách của phe đó.'
        ],
        code: `interface UIKit {
    createButton(): Button;
    createCheckbox(): Checkbox;
}

class DarkKit implements UIKit {
    createButton() { return new DarkButton(); }
    createCheckbox() { return new DarkCheckbox(); }
}

class LightKit implements UIKit {
    createButton() { return new LightButton(); }
    createCheckbox() { return new LightCheckbox(); }
}

function buildSettingsPage(kit: UIKit) {
    const save = kit.createButton();
    const agree = kit.createCheckbox();
}`,
        smell: {
            code: `function buildForm(theme: string) {
    const button = theme === "dark" ? new DarkButton() : new LightButton();
    const input  = theme === "dark" ? new DarkInput()  : new LightInput();
    // Ai đó quên kiểm tra theme ở dòng này...
    const checkbox = new LightCheckbox();
}`,
            distractors: ['prototype', 'facade', 'iterator']
        },
        flow: [
            'Lúc khởi động, app chọn một Concrete Factory (vd: ModernFurnitureFactory)',
            'Factory được truyền vào client dưới dạng interface FurnitureFactory',
            'Client gọi createChair() và createTable() trên factory',
            'Nhận về ModernChair + ModernTable — luôn cùng một bộ',
            'Client dùng sản phẩm qua interface Chair, Table'
        ],
        blank: {
            code: `interface FurnitureFactory {
    createChair(): Chair;
    createTable(): Table;
}

class VictorianFurnitureFactory implements FurnitureFactory {
    createChair() { return new VictorianChair(); }
    /* ??? */
}`,
            options: ['createTable() { return new VictorianTable(); }', 'createTable() { return new ModernTable(); }', 'createSofa() { return new VictorianSofa(); }', 'clone() { return new VictorianFurnitureFactory(); }'],
            explain: 'Mỗi factory phải tạo đủ mọi sản phẩm trong interface, và tất cả phải CÙNG một họ (Victorian).'
        }
    },

    'builder': {
        scenarios: [
            'Bạn cần tạo câu truy vấn SQL gồm nhiều phần tùy chọn: select, where, join, orderBy, limit — gọi phần nào tùy trường hợp, cuối cùng mới sinh ra chuỗi SQL hoàn chỉnh.',
            'Class HttpRequest có 12 tham số (url, method, headers, timeout, retry, body…), phần lớn là tùy chọn. Constructor dài đến mức không ai nhớ thứ tự tham số.',
            'Ứng dụng xuất hồ sơ xin việc theo cùng các bước: thêm thông tin cá nhân → kinh nghiệm → kỹ năng; cùng quy trình đó có thể cho ra file PDF hoặc trang HTML.'
        ],
        code: `class PizzaBuilder {
    private pizza = new Pizza();
    size(s: string) { this.pizza.size = s; return this; }
    addTopping(t: string) { this.pizza.toppings.push(t); return this; }
    extraCrispy() { this.pizza.crispy = true; return this; }
    build(): Pizza { return this.pizza; }
}

const pizza = new PizzaBuilder()
    .size("L")
    .addTopping("cheese")
    .addTopping("mushroom")
    .extraCrispy()
    .build();`,
        smell: {
            code: `const user = new User(
    "An", "an@mail.com", null, null, true,
    false, "vi", null, 30, undefined, "UTC+7"
);
// Tham số thứ 7 là gì? Sao phải truyền null nhiều thế?`,
            distractors: ['prototype', 'singleton', 'facade']
        },
        flow: [
            'Client tạo một SportsCarBuilder (bên trong có một Car còn rỗng)',
            'Client gọi lần lượt setSeats(), setEngine(), setGPS()…',
            'Mỗi bước gán thuộc tính vào Car và trả về chính builder để gọi nối tiếp',
            'Client gọi getResult() để lấy Car hoàn chỉnh',
            'Builder reset() để sẵn sàng lắp chiếc xe tiếp theo'
        ],
        blank: {
            code: `class SportsCarBuilder implements CarBuilder {
    private car = new Car();

    setSeats(count: number): CarBuilder {
        this.car.seats = count;
        /* ??? */
    }
}`,
            options: ['return this;', 'return this.car;', 'return new Car();', 'this.reset();'],
            explain: 'Trả về chính builder thì mới gọi nối tiếp được: <code>.setSeats(4).setEngine("V6")</code>.'
        }
    },

    'prototype': {
        scenarios: [
            'Trong trình thiết kế slide, người dùng bấm "Nhân bản" một khối hình đã chỉnh màu, bóng đổ, font… Bạn muốn tạo bản sao mà không cần biết đó là loại hình gì.',
            'Game cần sinh hàng trăm quái vật giống một con mẫu đã cấu hình sẵn (máu, giáp, kỹ năng), chỉ khác vị trí. Tạo từ đầu mỗi con thì phải đọc lại cấu hình rất tốn công.',
            'Một object cấu hình được dựng rất tốn kém (đọc file, gọi API). Mỗi request cần một bản riêng để chỉnh sửa mà không ảnh hưởng tới bản gốc.'
        ],
        code: `class Monster {
    constructor(
        public hp: number,
        public skills: string[],
        public x = 0,
        public y = 0
    ) {}

    clone(): Monster {
        return new Monster(this.hp, [...this.skills], this.x, this.y);
    }
}

const template = new Monster(500, ["fire", "fly"]);
const m1 = template.clone(); m1.x = 10;
const m2 = template.clone(); m2.x = 50;`,
        smell: {
            code: `function duplicate(shape: Shape): Shape {
    if (shape instanceof Circle) {
        const c = new Circle();
        c.radius = shape.radius; c.color = shape.color;
        return c;
    } else if (shape instanceof Rectangle) {
        const r = new Rectangle();
        r.width = shape.width; /* ... */
        return r;
    }
    // Field private thì không chép được!
}`,
            distractors: ['builder', 'singleton', 'flyweight']
        },
        flow: [
            'Client giữ một object mẫu (original)',
            'Client gọi original.clone()',
            'clone() gọi constructor sao chép new Rectangle(this)',
            'Constructor chép từng field, kể cả field của lớp cha',
            'Client nhận bản sao độc lập và chỉ sửa phần khác biệt'
        ],
        blank: {
            code: `class Rectangle extends Shape {
    width = 0;
    height = 0;

    clone(): Rectangle {
        /* ??? */
    }
}`,
            options: ['return new Rectangle(this);', 'return this;', 'return Rectangle.getInstance();', 'return new Shape();'],
            explain: '<code>return this</code> chỉ trả lại chính object cũ, không phải bản sao; Prototype phải tạo object MỚI mang cùng dữ liệu.'
        }
    },

    'singleton': {
        scenarios: [
            'Ứng dụng cần một bộ ghi log duy nhất để mọi module ghi vào cùng một file theo đúng thứ tự; không ai được tự tạo logger thứ hai.',
            'Cấu hình đọc từ file .env chỉ nên đọc một lần khi khởi động, sau đó mọi nơi trong app lấy chung đúng object đó.',
            'Connection pool tới database phải là một và chỉ một trong toàn bộ tiến trình, để không mở vượt giới hạn số kết nối của server.'
        ],
        code: `class AppConfig {
    private static current?: AppConfig;
    private constructor(readonly env: Record<string, string>) {}

    static get(): AppConfig {
        if (!AppConfig.current) {
            AppConfig.current = new AppConfig(loadEnvFile());
        }
        return AppConfig.current;
    }
}

AppConfig.get().env.API_URL;`,
        smell: {
            code: `// order.ts
const db = new Database("postgres://...");
// user.ts
const db = new Database("postgres://...");
// report.ts
const db = new Database("postgres://...");
// → 3 connection pool, cấu hình có thể lệch nhau`,
            distractors: ['prototype', 'adapter', 'observer']
        },
        flow: [
            'Module A gọi Database.getInstance()',
            'getInstance() thấy chưa có instance → gọi constructor private tạo mới',
            'Instance được lưu vào field static',
            'Module B gọi getInstance() → nhận lại đúng instance đã lưu',
            'Mọi nơi dùng chung một object: db1 === db2'
        ],
        blank: {
            code: `class Database {
    private static instance: Database;
    private constructor() {}

    static getInstance(): Database {
        if (!Database.instance) {
            /* ??? */
        }
        return Database.instance;
    }
}`,
            options: ['Database.instance = new Database();', 'return new Database();', 'Database.instance = Database.instance.clone();', 'this.instance = Database;'],
            explain: 'Chỉ tạo khi chưa có và phải LƯU vào field static; <code>return new Database()</code> sẽ tạo object mới ở mỗi lần gọi.'
        }
    },

    'adapter': {
        scenarios: [
            'Hệ thống cũ trả dữ liệu dạng XML, còn thư viện biểu đồ mới chỉ nhận JSON. Bạn không được sửa cả hai bên, cần một lớp trung gian chuyển đổi.',
            'App đang gọi PaymentGateway.charge(amount). Nhà cung cấp mới có SDK với hàm makeTransaction(cents, currency). Bạn muốn dùng SDK mới mà không sửa những chỗ đang gọi charge().',
            'Code đang dùng interface Logger với hàm log(msg); công ty chuyển sang thư viện log mới chỉ có write(level, text). Cần để code cũ chạy tiếp với thư viện mới.'
        ],
        code: `interface Thermometer {
    getCelsius(): number;
}

class USWeatherSensor {             // thư viện bên thứ 3
    readFahrenheit(): number { return 98.6; }
}

class SensorToThermometer implements Thermometer {
    constructor(private sensor: USWeatherSensor) {}

    getCelsius(): number {
        return (this.sensor.readFahrenheit() - 32) * 5 / 9;
    }
}`,
        smell: {
            code: `// Rải khắp 30 file:
const f = usSensor.readFahrenheit();
const c = (f - 32) * 5 / 9;
showTemperature(c);
// Đổi sang cảm biến hãng khác → sửa lại cả 30 file`,
            distractors: ['decorator', 'composite', 'singleton']
        },
        flow: [
            'Client gọi play("movie.mp4") trên interface MediaPlayer',
            'Lời gọi thực chất đi vào MediaAdapter',
            'Adapter xem đuôi file để biết cần gọi hàm nào',
            'Adapter gọi advancedPlayer.playMP4(filename)',
            'Thư viện chạy, client không hề biết có sự chuyển đổi'
        ],
        blank: {
            code: `class MediaAdapter implements MediaPlayer {
    private advancedPlayer = new AdvancedMusicPlayer();

    play(filename: string) {
        if (filename.endsWith(".vlc")) {
            /* ??? */
        }
    }
}`,
            options: ['this.advancedPlayer.playVLC(filename);', 'this.play(filename);', 'super.play(filename);', 'return new MediaAdapter();'],
            explain: 'Adapter dịch lời gọi <code>play()</code> của client sang đúng hàm của thư viện (<code>playVLC</code>).'
        }
    },

    'bridge': {
        scenarios: [
            'Thư viện vẽ có nhiều hình (Tròn, Vuông, Tam giác) và nhiều cách vẽ (Canvas, SVG, WebGL). Kế thừa kiểu CircleCanvas, CircleSVG… làm số class nhân lên theo tích.',
            'Hệ thống có loại thông báo (Thường, Khẩn cấp) và kênh gửi (Email, SMS, Slack) cần phát triển độc lập; thêm một kênh mới không được kéo theo N class mới.',
            'App đa nền tảng: Window (cửa sổ thường, hộp thoại) phải chạy trên Windows, macOS, Linux. Bạn muốn tách "cửa sổ làm gì" khỏi "hệ điều hành vẽ thế nào" thành hai nhánh riêng.'
        ],
        code: `interface Renderer {
    drawCircle(x: number, y: number, r: number): void;
}
class CanvasRenderer implements Renderer { drawCircle() { /* canvas */ } }
class SvgRenderer implements Renderer { drawCircle() { /* svg */ } }

abstract class Shape {
    constructor(protected renderer: Renderer) {}
    abstract draw(): void;
}

class Circle extends Shape {
    constructor(renderer: Renderer, private r: number) { super(renderer); }
    draw() { this.renderer.drawCircle(0, 0, this.r); }
}

new Circle(new SvgRenderer(), 5).draw();`,
        smell: {
            code: `class BasicRemoteTV { /* ... */ }
class BasicRemoteRadio { /* ... */ }
class AdvancedRemoteTV { /* ... */ }
class AdvancedRemoteRadio { /* ... */ }
class VoiceRemoteTV { /* ... */ }
class VoiceRemoteRadio { /* ... */ }
// Thêm thiết bị "Speaker" → thêm 3 class nữa`,
            distractors: ['adapter', 'flyweight', 'singleton']
        },
        flow: [
            'Client tạo thiết bị: new TV()',
            'Client tạo remote và truyền thiết bị vào: new AdvancedRemote(tv)',
            'Client gọi remote.volumeUp()',
            'Remote (abstraction) gọi device.getVolume() rồi device.setVolume() qua interface Device',
            'TV (implementation) thực hiện thao tác cấp thấp'
        ],
        blank: {
            code: `class Remote {
    constructor(protected device: Device) {}

    togglePower() {
        if (this.device.isEnabled()) {
            /* ??? */
        } else {
            this.device.enable();
        }
    }
}`,
            options: ['this.device.disable();', 'new TV().disable();', 'this.disable();', 'super.togglePower();'],
            explain: 'Abstraction không tự làm việc cấp thấp và không new thiết bị cụ thể — nó ủy quyền qua tham chiếu <code>device</code> (cây cầu).'
        }
    },

    'composite': {
        scenarios: [
            'Menu website có mục đơn lẻ và mục chứa menu con nhiều cấp. Bạn muốn gọi render() trên menu gốc mà không phải kiểm tra từng mục là đơn hay nhóm.',
            'Tính tổng lương của một phòng ban gồm nhân viên và các phòng ban con. Bạn muốn gọi getSalary() như nhau cho cả nhân viên lẫn phòng ban.',
            'Trình vẽ cho phép gộp các hình thành nhóm, nhóm lại chứa nhóm khác. Di chuyển một nhóm phải di chuyển mọi thứ bên trong, bằng đúng lệnh move() như với một hình đơn.'
        ],
        code: `interface Employee {
    getSalary(): number;
}

class Developer implements Employee {
    constructor(private salary: number) {}
    getSalary() { return this.salary; }
}

class Department implements Employee {
    private members: Employee[] = [];
    add(e: Employee) { this.members.push(e); }
    getSalary() {
        return this.members.reduce((sum, m) => sum + m.getSalary(), 0);
    }
}`,
        smell: {
            code: `function totalSize(item: File | Folder): number {
    if (item instanceof File) return item.size;
    let sum = 0;
    for (const child of item.children) {
        if (child instanceof File) sum += child.size;
        else if (child instanceof Folder) sum += totalSize(child);
        else if (child instanceof Shortcut) sum += 0; // thêm loại mới...
    }
    return sum;
}`,
            distractors: ['facade', 'chain-of-responsibility', 'singleton']
        },
        flow: [
            'Client gọi group.getPrice() trên nút gốc',
            'CompositeGraphic lặp qua danh sách children',
            'Mỗi con tự trả lời getPrice() — lá trả giá của mình, nhánh lại đệ quy xuống',
            'Composite cộng dồn kết quả của các con',
            'Client nhận tổng mà không cần biết cấu trúc cây'
        ],
        blank: {
            code: `class CompositeGraphic implements Graphic {
    private children: Graphic[] = [];

    getPrice(): number {
        /* ??? */
    }
}`,
            options: ['return this.children.reduce((sum, c) => sum + c.getPrice(), 0);', 'return this.getPrice();', 'return this.children.length;', 'return 0;'],
            explain: 'Nhánh chuyển câu hỏi xuống từng con rồi gộp kết quả — con có thể lại là một nhánh (đệ quy).'
        }
    },

    'decorator': {
        scenarios: [
            'Bạn có hàm gửi dữ liệu cơ bản; người dùng có thể bật thêm tùy ý nén, mã hóa, ghi log theo mọi tổ hợp và thứ tự, mà không muốn tạo một class cho từng tổ hợp.',
            'Luồng đọc file có thể được bọc thêm lớp đệm (buffer), rồi lớp giải nén, rồi lớp giải mã — mỗi lớp vẫn là "một luồng đọc" có hàm read() như nhau.',
            'Quán trà sữa: ly trà cơ bản, khách thêm trân châu, thạch, kem cheese tùy ý; giá và mô tả tự cộng dồn theo từng món thêm vào.'
        ],
        code: `interface DataSource {
    write(data: string): void;
}

class FileSource implements DataSource {
    write(data: string) { /* ghi ra file */ }
}

class EncryptionLayer implements DataSource {
    constructor(private inner: DataSource) {}
    write(data: string) { this.inner.write(encrypt(data)); }
}

class CompressionLayer implements DataSource {
    constructor(private inner: DataSource) {}
    write(data: string) { this.inner.write(compress(data)); }
}

const source = new CompressionLayer(new EncryptionLayer(new FileSource()));`,
        smell: {
            code: `class Notifier {}
class SmsNotifier extends Notifier {}
class SlackNotifier extends Notifier {}
class SmsAndSlackNotifier extends Notifier {}
class SmsAndFacebookNotifier extends Notifier {}
class SlackAndFacebookNotifier extends Notifier {}
class SmsSlackFacebookNotifier extends Notifier {}
// mỗi kênh mới → số class gấp đôi`,
            distractors: ['adapter', 'singleton', 'prototype']
        },
        flow: [
            'Client tạo object gốc: new SimpleCoffee()',
            'Client bọc dần: MilkDecorator → SugarDecorator → WhipDecorator',
            'Client gọi getCost() trên lớp ngoài cùng',
            'Mỗi lớp gọi getCost() của lớp bên trong rồi cộng phần của mình',
            'Kết quả cộng dồn trả về client: 16'
        ],
        blank: {
            code: `class MilkDecorator extends CoffeeDecorator {
    getCost(): number {
        /* ??? */
    }
}`,
            options: ['return this.coffee.getCost() + 2;', 'return 2;', 'return new SimpleCoffee().getCost() + 2;', 'return this.getCost() + 2;'],
            explain: 'Decorator gọi object bên trong (<code>this.coffee</code>) rồi thêm phần của mình. <code>return 2</code> làm mất giá ly gốc, còn <code>this.getCost()</code> đệ quy vô hạn.'
        }
    },

    'facade': {
        scenarios: [
            'Để đặt một đơn hàng, code phải gọi kiểm tra kho, tính thuế, trừ tiền, tạo vận đơn, gửi email… theo đúng thứ tự. Bạn muốn controller chỉ cần gọi một hàm placeOrder().',
            'Thư viện xử lý ảnh có 20 class (decoder, resizer, color profile…). Đa số developer chỉ cần "tạo thumbnail 200×200", bạn muốn cho họ đúng một hàm đơn giản.',
            'Smart home có chế độ xem phim: tắt đèn, hạ rèm, bật máy chiếu, bật loa, chọn nguồn phát. Bạn muốn một nút movieMode() làm hết mọi việc đó.'
        ],
        code: `class HomeTheater {
    constructor(
        private lights: Lights,
        private projector: Projector,
        private amp: Amplifier,
        private player: StreamingPlayer
    ) {}

    watchMovie(title: string) {
        this.lights.dim(10);
        this.projector.on();
        this.amp.setVolume(5);
        this.player.play(title);
    }
}

new HomeTheater(lights, projector, amp, player).watchMovie("Inception");`,
        smell: {
            code: `// Controller A
const file = new VideoFile(name);
const codec = CodecFactory.extract(file);
const buffer = BitrateReader.read(file, codec);
const result = new AudioMixer().fix(buffer);
// Controller B, C, D... copy y hệt 4 dòng trên`,
            distractors: ['decorator', 'iterator', 'prototype']
        },
        flow: [
            'Client gọi converter.convert("movie", "mp4")',
            'Facade tạo VideoFile từ tên file',
            'Facade gọi Codec.extract() rồi BitrateReader.read()',
            'Facade gọi AudioMixer.fix() để xử lý âm thanh',
            'Facade trả kết quả "movie.mp4" cho client'
        ],
        blank: {
            code: `class OrderFacade {
    placeOrder(cart: Cart) {
        inventory.reserve(cart);
        /* ??? */
        shipping.createLabel(cart);
    }
}`,
            options: ['payment.charge(cart.total);', 'return new OrderFacade();', 'this.placeOrder(cart);', 'cart.accept(this);'],
            explain: 'Facade chỉ điều phối các subsystem theo thứ tự: giữ hàng → thanh toán → vận chuyển.'
        }
    },

    'flyweight': {
        scenarios: [
            'Trình soạn thảo hiển thị hàng triệu ký tự; nếu mỗi ký tự lưu riêng font, cỡ chữ, màu thì tốn RAM khủng khiếp, dù chỉ có vài chục kiểu định dạng khác nhau.',
            'Game bắn súng có 100.000 viên đạn trên màn hình; sprite và âm thanh của chúng giống hệt nhau, chỉ khác vị trí và hướng bay.',
            'Bản đồ hiển thị 50.000 điểm đánh dấu; chỉ có 5 loại icon, còn tọa độ của mỗi điểm là riêng.'
        ],
        code: `class Glyph {                     // phần dùng chung
    constructor(readonly char: string, readonly font: string) {}
}

class GlyphFactory {
    private static cache = new Map<string, Glyph>();
    static get(char: string, font: string): Glyph {
        const key = char + font;
        if (!this.cache.has(key)) this.cache.set(key, new Glyph(char, font));
        return this.cache.get(key)!;
    }
}

// mỗi ô trên trang chỉ lưu vị trí + tham chiếu tới glyph dùng chung
const cells = text.split("").map((ch, i) => ({ pos: i, glyph: GlyphFactory.get(ch, "Arial") }));`,
        smell: {
            code: `for (let i = 0; i < 100_000; i++) {
    bullets.push(new Bullet(
        x[i], y[i],
        loadSprite("bullet.png"),   // 500KB cho MỖI viên!
        loadSound("shot.wav")       // 200KB cho MỖI viên!
    ));
}`,
            distractors: ['prototype', 'builder', 'adapter']
        },
        flow: [
            'Forest gọi TreeFactory.getTreeType("Oak", …)',
            'Factory tìm trong cache theo key',
            'Chưa có thì tạo TreeType mới và lưu cache; có rồi thì trả bản cũ',
            'Forest tạo Tree nhẹ chỉ chứa (x, y) + tham chiếu TreeType',
            'Khi vẽ, Tree gọi type.draw(x, y) — truyền phần riêng vào phần dùng chung'
        ],
        blank: {
            code: `class TreeFactory {
    private static types = new Map<string, TreeType>();

    static getTreeType(name: string, color: string): TreeType {
        const key = name + "_" + color;
        if (!this.types.has(key)) {
            this.types.set(key, new TreeType(name, color));
        }
        /* ??? */
    }
}`,
            options: ['return this.types.get(key)!;', 'return new TreeType(name, color);', 'return this.types;', 'this.types.clear();'],
            explain: 'Luôn trả về bản đã cache; <code>new TreeType</code> ở mỗi lần gọi sẽ phá tan mục đích tiết kiệm RAM.'
        }
    },

    'proxy': {
        scenarios: [
            'Trang danh sách có 200 ảnh độ phân giải cao; bạn muốn hiện khung giữ chỗ trước, chỉ thật sự tải ảnh khi người dùng cuộn tới — mà code hiển thị vẫn gọi image.display() như bình thường.',
            'API tính toán rất chậm; bạn muốn đặt một object CÙNG interface đứng trước API thật, tự tạo API thật khi cần và lưu kết quả vào cache để lần sau trả ngay.',
            'Chỉ admin được gọi deleteUser() của UserService. Bạn muốn một object cùng interface đứng chắn trước service thật để kiểm tra quyền trước khi cho lời gọi đi qua.'
        ],
        code: `class WeatherApiProxy implements WeatherApi {
    private real?: RealWeatherApi;              // chưa tạo
    private cache = new Map<string, string>();

    async getForecast(city: string) {
        if (this.cache.has(city)) return this.cache.get(city)!;
        this.real ??= new RealWeatherApi();     // chỉ tạo khi thật sự cần
        const result = await this.real.getForecast(city);
        this.cache.set(city, result);
        return result;
    }
}`,
        smell: {
            code: `// Ở 15 chỗ khác nhau trong app:
if (!currentUser.isAdmin) throw new Error("Forbidden");
log(\`delete \${id}\`);
userService.deleteUser(id);`,
            distractors: ['adapter', 'composite', 'builder']
        },
        flow: [
            'Client gọi video.play() trên một Video (thật ra là VideoProxy)',
            'Proxy kiểm tra: realVideo đã được tạo chưa?',
            'Nếu chưa, proxy tạo RealVideo (lúc này mới tải từ đĩa)',
            'Proxy chuyển lời gọi: realVideo.play()',
            'Các lần sau proxy dùng lại realVideo đã tạo'
        ],
        blank: {
            code: `class VideoProxy implements Video {
    private realVideo: RealVideo | null = null;
    constructor(private filename: string) {}

    play() {
        if (!this.realVideo) {
            /* ??? */
        }
        this.realVideo.play();
    }
}`,
            options: ['this.realVideo = new RealVideo(this.filename);', 'return;', 'this.play();', 'this.realVideo = new VideoProxy(this.filename);'],
            explain: 'Proxy tạo object thật một cách lười — chỉ khi thực sự cần phát. Tạo VideoProxy lồng nhau thì không bao giờ chạm tới video thật.'
        }
    },

    'chain-of-responsibility': {
        scenarios: [
            'Web server: mỗi request lần lượt đi qua xác thực → giới hạn tốc độ → ghi log → router; bước nào thấy không hợp lệ thì trả lỗi và dừng luôn, không đi tiếp.',
            'Tổng đài hỗ trợ: câu hỏi đi từ chatbot → nhân viên cấp 1 → chuyên gia cấp 2; ai trả lời được thì dừng, không thì chuyển lên người kế tiếp.',
            'Duyệt đề xuất chi tiền: dưới 5 triệu trưởng nhóm duyệt, dưới 50 triệu trưởng phòng duyệt, còn lại giám đốc — thứ tự và số cấp có thể thay đổi sau này.'
        ],
        code: `abstract class Middleware {
    private next?: Middleware;
    linkWith(next: Middleware) { this.next = next; return next; }
    check(req: Request): boolean {
        return this.next ? this.next.check(req) : true;
    }
}

class AuthMiddleware extends Middleware {
    check(req: Request) {
        if (!req.token) return false;      // dừng tại đây
        return super.check(req);           // chuyền tiếp
    }
}

const chain = new AuthMiddleware();
chain.linkWith(new RateLimitMiddleware()).linkWith(new LogMiddleware());`,
        smell: {
            code: `function approve(amount: number) {
    if (amount <= 5_000_000) return teamLead.approve(amount);
    else if (amount <= 50_000_000) return manager.approve(amount);
    else if (amount <= 500_000_000) return director.approve(amount);
    else return board.approve(amount);
    // thêm/bớt/đổi thứ tự cấp duyệt → sửa hàm này
}`,
            distractors: ['observer', 'memento', 'flyweight']
        },
        flow: [
            'Client lắp chuỗi: monkey.setNext(squirrel).setNext(dog)',
            'Client gửi request vào đầu chuỗi: monkey.handle("Nut")',
            'Monkey không xử lý được → gọi super.handle() để chuyền cho Squirrel',
            'Squirrel xử lý được → trả kết quả, chuỗi dừng lại',
            'Kết quả trả ngược về client; Dog không hề được gọi'
        ],
        blank: {
            code: `class SquirrelHandler extends AbstractHandler {
    handle(request: string): string | null {
        if (request === "Nut") {
            return "Squirrel: I'll eat the Nut";
        }
        /* ??? */
    }
}`,
            options: ['return super.handle(request);', 'return null;', 'return this.handle(request);', 'throw new Error("Không xử lý được");'],
            explain: '<code>return null</code> làm đứt chuỗi — handler phía sau không bao giờ được hỏi. Phải chuyền tiếp cho mắt xích kế tiếp.'
        }
    },

    'command': {
        scenarios: [
            'Trình vẽ cần Undo/Redo cho mọi thao tác (vẽ, xóa, đổi màu) và cho phép ghi một chuỗi thao tác thành "macro" để chạy lại sau.',
            'Hệ thống gửi email hàng loạt: mỗi yêu cầu gửi được lưu vào hàng đợi, worker lấy ra chạy dần, lỗi thì thử lại, và mọi yêu cầu đều được ghi log.',
            'Remote nhà thông minh có các nút lập trình được: nút 1 gắn "bật đèn phòng khách", nút 2 gắn "mở cửa gara" — cái nút không cần biết thiết bị nào làm việc.'
        ],
        code: `interface Action {
    execute(): void;
    undo(): void;
}

class MoveShape implements Action {
    constructor(private shape: Shape, private dx: number, private dy: number) {}
    execute() { this.shape.moveBy(this.dx, this.dy); }
    undo() { this.shape.moveBy(-this.dx, -this.dy); }
}

const history: Action[] = [];
function run(a: Action) { a.execute(); history.push(a); }
function undoLast() { history.pop()?.undo(); }

run(new MoveShape(circle, 10, 0));
undoLast();`,
        smell: {
            code: `saveButton.onClick(() => editor.save());
menuSave.onClick(() => editor.save());
shortcut("Ctrl+S", () => editor.save());
// Yêu cầu mới: hoàn tác thao tác, xếp hàng khi offline,
// ghi log mọi thao tác... sửa ở đâu bây giờ?`,
            distractors: ['adapter', 'iterator', 'composite']
        },
        flow: [
            'Client tạo WriteCommand gắn với TextEditor (receiver) và nội dung cần ghi',
            'Client đưa command cho CommandManager (invoker)',
            'Invoker gọi command.execute() → editor.write()',
            'Invoker cất command vào history',
            'Khi Undo: invoker lấy command ra và gọi command.undo()'
        ],
        blank: {
            code: `class CommandManager {
    private history: Command[] = [];

    undo() {
        const command = this.history.pop();
        if (command) {
            /* ??? */
        }
    }
}`,
            options: ['command.undo();', 'command.execute();', 'this.history.push(command);', 'new TextEditor().delete(1);'],
            explain: 'Mỗi command tự biết cách hoàn tác chính nó; invoker chỉ việc lấy ra và gọi <code>undo()</code>.'
        }
    },

    'iterator': {
        scenarios: [
            'Thư viện của bạn lưu dữ liệu dạng cây nhị phân, nhưng muốn người dùng duyệt bằng một vòng lặp đơn giản (và chọn duyệt theo chiều rộng hay chiều sâu) mà không cần biết gì về node trái/phải.',
            'API trả dữ liệu theo trang (page 1, 2, 3…). Bạn muốn code phía client chỉ cần gọi next() liên tục như đọc một danh sách dài; việc gọi trang kế tiếp được giấu bên trong.',
            'Playlist cần hỗ trợ phát theo thứ tự, phát ngược và phát xáo trộn — mà class Playlist không phải phình to thêm logic duyệt.'
        ],
        code: `class Playlist {
    constructor(private songs: string[]) {}

    [Symbol.iterator]() {
        let i = 0;
        const songs = this.songs;
        return {
            next: () => i < songs.length
                ? { value: songs[i++], done: false }
                : { value: undefined, done: true }
        };
    }
}

for (const song of new Playlist(["A", "B", "C"])) {
    console.log(song);
}`,
        smell: {
            code: `// Client phải biết cấu trúc bên trong của từng collection
for (let i = 0; i < arrayList.items.length; i++) { /* ... */ }

let node = linkedList.head;
while (node) { /* ... */ node = node.next; }

function walk(n: TreeNode) { if (!n) return; walk(n.left); /* ... */ walk(n.right); }`,
            distractors: ['adapter', 'singleton', 'builder']
        },
        flow: [
            'Client gọi collection.createIterator()',
            'Collection trả về ArrayIterator bọc dữ liệu bên trong',
            'Client hỏi iterator.hasNext()',
            'Nếu còn, client gọi iterator.next() để lấy phần tử (vị trí tăng lên)',
            'Lặp lại cho tới khi hasNext() trả về false'
        ],
        blank: {
            code: `class ArrayIterator<T> implements Iterator<T> {
    private position = 0;
    constructor(private items: T[]) {}

    hasNext(): boolean {
        /* ??? */
    }
}`,
            options: ['return this.position < this.items.length;', 'return this.items.length > 0;', 'return this.position++ < this.items.length;', 'return true;'],
            explain: '<code>hasNext()</code> chỉ hỏi còn phần tử hay không và KHÔNG được thay đổi vị trí — tăng <code>position</code> là việc của <code>next()</code>.'
        }
    },

    'mediator': {
        scenarios: [
            'Form đăng ký: chọn "Quốc gia" thì danh sách "Tỉnh" đổi, tick "Doanh nghiệp" thì hiện ô "Mã số thuế", điền đủ thì nút Gửi mới sáng. Các ô đang tham chiếu và gọi nhau chằng chịt.',
            'Game nhiều người chơi: các đơn vị không nên tham chiếu trực tiếp lẫn nhau; mọi sự kiện (tấn công, liên minh) đi qua một bộ điều phối trung tâm, nơi quyết định ai bị ảnh hưởng.',
            'Chat nhóm: mỗi người gửi tin vào phòng, phòng quyết định chuyển cho ai (bỏ qua người bị chặn, người đã rời phòng); người dùng không giữ tham chiếu tới nhau.'
        ],
        code: `class CheckoutForm {                       // trung tâm điều phối
    constructor(
        private country: Select,
        private province: Select,
        private submit: Button
    ) {
        country.onChange = () => this.notify("country");
        province.onChange = () => this.notify("province");
    }

    notify(sender: string) {
        if (sender === "country") {
            this.province.setOptions(provincesOf(this.country.value));
        }
        this.submit.enabled = !!this.country.value && !!this.province.value;
    }
}`,
        smell: {
            code: `class CountrySelect {
    constructor(private province: ProvinceSelect, private submit: SubmitButton,
                private taxField: TaxField, private summary: Summary) {}
    onChange() {
        this.province.reload(this.value);
        this.submit.validate();
        this.taxField.toggle(this.value);
        this.summary.refresh();
    }
}
// ProvinceSelect, TaxField... cũng giữ tham chiếu tới tất cả những cái còn lại`,
            distractors: ['composite', 'singleton', 'prototype']
        },
        flow: [
            'John gọi send("Hello") — John chỉ biết ChatRoom',
            'User gọi mediator.sendMessage("Hello", john)',
            'ChatRoom lặp qua danh sách users',
            'ChatRoom bỏ qua người gửi, gọi receive() cho từng người còn lại',
            'Jane và Bob nhận tin mà không ai tham chiếu trực tiếp tới nhau'
        ],
        blank: {
            code: `class ChatRoom implements ChatMediator {
    private users: User[] = [];

    sendMessage(message: string, sender: User) {
        this.users.forEach(user => {
            if (user !== sender) {
                /* ??? */
            }
        });
    }
}`,
            options: ['user.receive(message, sender.name);', 'sender.send(message);', 'user.send(message);', 'this.sendMessage(message, user);'],
            explain: 'Gọi <code>send()</code> hay <code>sendMessage()</code> lần nữa sẽ tạo vòng lặp vô hạn; mediator chỉ phát tin tới người nhận.'
        }
    },

    'memento': {
        scenarios: [
            'Game cho lưu tiến trình ở checkpoint và tải lại khi thua, nhưng hệ thống lưu trữ không được đọc hay sửa trực tiếp các thuộc tính private của nhân vật.',
            'Form nhiều bước: khi người dùng bấm "Quay lại", form phải khôi phục đúng dữ liệu đã nhập ở bước trước từ một bản chụp do chính form tạo ra.',
            'Trình sửa ảnh chụp lại trạng thái của ảnh trước mỗi bộ lọc để khôi phục về đúng bản chụp đó; lớp History chỉ cất giữ, không biết cấu trúc bên trong của ảnh.'
        ],
        code: `class Game {
    private level = 1;
    private hp = 100;

    save(): GameSnapshot {
        return new GameSnapshot(this.level, this.hp);
    }
    load(s: GameSnapshot) {
        this.level = s.level;
        this.hp = s.hp;
    }
}

class GameSnapshot {
    constructor(readonly level: number, readonly hp: number) {}
}

const checkpoints: GameSnapshot[] = [];
checkpoints.push(game.save());
// ... thua trận
game.load(checkpoints[checkpoints.length - 1]);`,
        smell: {
            code: `class History {
    undo(editor: Editor) {
        // History phải biết và sửa trực tiếp mọi field của Editor
        editor.content = this.lastContent;
        editor.cursor = this.lastCursor;
        editor.selection = this.lastSelection;
        editor.scrollTop = this.lastScrollTop;
    }
}`,
            distractors: ['observer', 'iterator', 'adapter']
        },
        flow: [
            'editor.save() tạo EditorMemento chứa content và cursor hiện tại',
            'Client đưa memento cho History cất giữ (push)',
            'Editor tiếp tục bị thay đổi nội dung',
            'Khi Undo: History trả lại memento gần nhất (pop)',
            'editor.restore(memento) khôi phục trạng thái cũ'
        ],
        blank: {
            code: `class Editor {
    private content = "";
    private cursor = 0;

    save(): EditorMemento {
        /* ??? */
    }
}`,
            options: ['return new EditorMemento(this.content, this.cursor);', 'return this;', 'return new History();', 'return { editor: this } as any;'],
            explain: 'Memento phải là bản chụp dữ liệu tại thời điểm lưu; trả về <code>this</code> thì khi nội dung đổi, "bản lưu" cũng đổi theo.'
        }
    },

    'observer': {
        scenarios: [
            'Khi giá cổ phiếu thay đổi, biểu đồ, bảng giá và hệ thống cảnh báo đều phải cập nhật; sau này có thể thêm nơi nhận khác mà không sửa lớp giá cổ phiếu.',
            'Shop online: khi sản phẩm có hàng trở lại, mọi khách đã bấm "Báo cho tôi" đều nhận thông báo; khách có thể hủy đăng ký bất cứ lúc nào.',
            'Model dữ liệu thay đổi thì mọi view đang hiển thị model đó phải tự vẽ lại; model không cần biết có bao nhiêu view.'
        ],
        code: `class Stock {
    private listeners: ((price: number) => void)[] = [];

    onChange(fn: (price: number) => void) {
        this.listeners.push(fn);
        return () => { this.listeners = this.listeners.filter(l => l !== fn); };
    }

    setPrice(p: number) {
        this.listeners.forEach(fn => fn(p));
    }
}

const stop = stock.onChange(p => chart.redraw(p));
stock.onChange(p => { if (p < 10) alertUser(); });`,
        smell: {
            code: `class WeatherStation {
    setTemperature(t: number) {
        this.temp = t;
        phoneDisplay.update(t);
        webDashboard.update(t);
        smartFan.adjust(t);
        // thêm màn hình mới → phải sửa WeatherStation
    }
}`,
            distractors: ['chain-of-responsibility', 'memento', 'builder']
        },
        flow: [
            'Các subscriber gọi publisher.subscribe(this)',
            'Publisher lưu họ vào danh sách observers',
            'Có tin mới: publisher gọi notify(news)',
            'notify() lặp qua danh sách và gọi observer.update(news)',
            'Mỗi observer tự xử lý theo cách riêng (gửi email, gửi SMS…)'
        ],
        blank: {
            code: `class NewsPublisher implements Subject {
    private observers: Observer[] = [];

    notify(message: string) {
        /* ??? */
    }
}`,
            options: ['this.observers.forEach(o => o.update(message));', 'this.observers[0].update(message);', 'emailService.send(message);', 'this.observers = [];'],
            explain: 'Publisher không biết observer cụ thể là ai — nó gọi <code>update()</code> cho TẤT CẢ người đã đăng ký.'
        }
    },

    'state': {
        scenarios: [
            'Đơn hàng đi qua Chờ thanh toán → Đã thanh toán → Đang giao → Hoàn tất; cùng lệnh "Hủy" nhưng mỗi giai đoạn xử lý khác nhau, và chính giai đoạn hiện tại quyết định giai đoạn kế tiếp.',
            'Trình phát nhạc có nút Play/Pause: đang dừng thì bấm là phát, đang phát thì bấm là tạm dừng, đang tải thì bấm không có tác dụng. Code hiện đầy if (status === …).',
            'Nhân vật game có các tình trạng đứng yên, chạy, nhảy, bị choáng; phím "tấn công" cho kết quả khác nhau tùy tình trạng, và tình trạng tự chuyển sau mỗi hành động.'
        ],
        code: `interface PlayerState {
    pressPlay(p: MusicPlayer): void;
}

class Stopped implements PlayerState {
    pressPlay(p: MusicPlayer) { p.startMusic(); p.state = new Playing(); }
}

class Playing implements PlayerState {
    pressPlay(p: MusicPlayer) { p.pauseMusic(); p.state = new Paused(); }
}

class Paused implements PlayerState {
    pressPlay(p: MusicPlayer) { p.resumeMusic(); p.state = new Playing(); }
}

class MusicPlayer {
    state: PlayerState = new Stopped();
    pressPlay() { this.state.pressPlay(this); }
}`,
        smell: {
            code: `class Document {
    publish() {
        switch (this.status) {
            case "draft": this.status = "review"; break;
            case "review": if (user.isAdmin) this.status = "published"; break;
            case "published": break;
        }
    }
    edit()    { switch (this.status) { /* ... lại switch ... */ } }
    archive() { switch (this.status) { /* ... lại switch ... */ } }
}`,
            distractors: ['strategy', 'command', 'template-method']
        },
        flow: [
            'Client gọi machine.insertMoney()',
            'VendingMachine chuyển lời gọi cho state hiện tại: state.insertMoney(this)',
            'IdleState xử lý và gọi context.setState(new HasMoneyState())',
            'Client gọi machine.selectProduct() → lúc này do HasMoneyState xử lý',
            'HasMoneyState chuyển máy sang DispensingState'
        ],
        blank: {
            code: `class HasMoneyState implements State {
    selectProduct(context: VendingMachine) {
        console.log("Product selected");
        /* ??? */
    }
}`,
            options: ['context.setState(new DispensingState());', 'this.selectProduct(context);', 'context.setPaymentStrategy(new DispensingState());', 'return new HasMoneyState();'],
            explain: 'Trong State pattern, chính state hiện tại quyết định và chuyển context sang state kế tiếp.'
        }
    },

    'strategy': {
        scenarios: [
            'App bản đồ cho người dùng chọn cách tìm đường: đi bộ, xe máy, ô tô, xe buýt. Mỗi cách là một thuật toán, và người dùng đổi lựa chọn bất cứ lúc nào.',
            'Tính phí ship theo hãng (GHN, GHTK, Viettel Post): khách tự chọn hãng khi đặt hàng; thêm hãng mới không được sửa code giỏ hàng.',
            'Thư viện nén file cho phép người gọi truyền vào thuật toán nén (zip, gzip, brotli) tùy nhu cầu; code gọi nén không quan tâm thuật toán cụ thể.'
        ],
        code: `type SortStrategy = (a: Product, b: Product) => number;

const byPrice: SortStrategy = (a, b) => a.price - b.price;
const byRating: SortStrategy = (a, b) => b.rating - a.rating;

class ProductList {
    constructor(private items: Product[], private sorter: SortStrategy = byPrice) {}
    setSorter(s: SortStrategy) { this.sorter = s; }
    render() { return [...this.items].sort(this.sorter); }
}

list.setSorter(byRating);   // người dùng đổi cách sắp xếp`,
        smell: {
            code: `function calculateShipping(order: Order, carrier: string) {
    if (carrier === "ghn") { /* 20 dòng công thức GHN */ }
    else if (carrier === "ghtk") { /* 25 dòng công thức GHTK */ }
    else if (carrier === "viettel") { /* 30 dòng công thức Viettel */ }
    // thêm hãng mới → sửa hàm này, test lại tất cả
}`,
            distractors: ['state', 'observer', 'adapter']
        },
        flow: [
            'Client tạo ShoppingCart và thêm sản phẩm',
            'Client chọn cách trả: cart.setPaymentStrategy(new PayPalPayment(...))',
            'Client gọi cart.checkout()',
            'ShoppingCart tính tổng và gọi paymentStrategy.pay(total)',
            'PayPalPayment thực hiện thanh toán theo cách riêng của nó'
        ],
        blank: {
            code: `class ShoppingCart {
    private paymentStrategy: PaymentStrategy | null = null;

    checkout() {
        const total = this.getTotal();
        /* ??? */
    }
}`,
            options: ['this.paymentStrategy?.pay(total);', 'if (method === "card") payByCard(total);', 'this.setState(new PaidState());', 'new CreditCardPayment("1234", "123").pay(total);'],
            explain: 'Context không tự chọn hay tự new thuật toán cụ thể — nó gọi strategy đã được gắn vào từ bên ngoài.'
        }
    },

    'template-method': {
        scenarios: [
            'Các loại báo cáo (doanh thu, tồn kho, nhân sự) đều theo quy trình lấy dữ liệu → lọc → định dạng → gửi email; chỉ bước lấy dữ liệu và định dạng là khác. Bạn muốn khóa cứng thứ tự các bước ở lớp cha.',
            'Framework test luôn chạy: chuẩn bị (setUp) → chạy test → dọn dẹp (tearDown). Người viết test chỉ override setUp/tearDown, không được đổi thứ tự.',
            'Game có nhiều loại AI đối thủ; lượt chơi luôn là thu thập tài nguyên → xây công trình → tấn công, nhưng mỗi loại AI (lớp con) xây và tấn công theo cách riêng.'
        ],
        code: `abstract class Beverage {
    prepare() {                       // thứ tự cố định
        this.boilWater();
        this.brew();
        this.pourInCup();
        if (this.wantsCondiments()) this.addCondiments();
    }
    private boilWater() { console.log("Đun nước"); }
    private pourInCup() { console.log("Rót ra cốc"); }
    protected abstract brew(): void;
    protected abstract addCondiments(): void;
    protected wantsCondiments() { return true; }   // hook
}

class Tea extends Beverage {
    protected brew() { console.log("Ngâm trà"); }
    protected addCondiments() { console.log("Thêm chanh"); }
}`,
        smell: {
            code: `class PdfReport {
    generate() {
        const data = this.loadFromPdf();
        const rows = data.filter(r => r.active);   // giống hệt
        const html = this.renderPdf(rows);
        sendEmail(html);                           // giống hệt
    }
}
class ExcelReport {
    generate() {
        const data = this.loadFromExcel();
        const rows = data.filter(r => r.active);   // copy-paste
        const html = this.renderExcel(rows);
        sendEmail(html);                           // copy-paste
    }
}`,
            distractors: ['builder', 'observer', 'flyweight']
        },
        flow: [
            'Client gọi pdfMiner.mine("report.pdf") — hàm viết ở lớp cha',
            'mine() gọi openFile() — phần lớp con PDFDataMiner viết',
            'mine() gọi extractData() rồi parseData() (lớp con)',
            'mine() gọi analyzeData() và sendReport() (lớp cha dùng chung)',
            'mine() gọi closeFile() để kết thúc'
        ],
        blank: {
            code: `abstract class DataMiner {
    mine(path: string) {
        const file = this.openFile(path);
        const data = this.parseData(this.extractData(file));
        /* ??? */
        this.closeFile(file);
    }
}`,
            options: ['this.sendReport(this.analyzeData(data));', 'new PDFDataMiner().mine(path);', 'this.mine(path);', 'this.strategy.run(data);'],
            explain: 'Template method gọi các bước theo thứ tự cố định; bước phân tích + báo cáo dùng chung nằm ở lớp cha.'
        }
    },

    'visitor': {
        scenarios: [
            'Cây AST của trình biên dịch có ~20 loại node gần như không đổi. Bạn liên tục cần thêm thao tác mới: kiểm tra kiểu, tối ưu, in đẹp, sinh mã — không muốn sửa 20 class node mỗi lần.',
            'Hệ thống bảo hiểm có các loại khách (cá nhân, doanh nghiệp, nhà hàng). Marketing muốn thêm thao tác "gửi ưu đãi" với nội dung khác cho từng loại, mà không đụng vào các class khách hàng.',
            'Bản đồ gồm các loại node ổn định (thành phố, nhà máy, tượng đài). Cần xuất XML, rồi JSON, rồi tính thuế — mỗi thao tác xử lý mỗi loại node một kiểu.'
        ],
        code: `interface NodeVisitor {
    visitCity(c: City): void;
    visitFactory(f: Factory): void;
}

class City {
    accept(v: NodeVisitor) { v.visitCity(this); }
}
class Factory {
    accept(v: NodeVisitor) { v.visitFactory(this); }
}

class XmlExport implements NodeVisitor {
    visitCity(c: City) { /* <city .../> */ }
    visitFactory(f: Factory) { /* <factory .../> */ }
}

nodes.forEach(n => n.accept(new XmlExport()));`,
        smell: {
            code: `class Circle {
    area()   { /* ... */ }
    toXML()  { /* ... */ }
    toJSON() { /* ... */ }
    toSVG()  { /* ... */ }   // mỗi định dạng mới → sửa MỌI class hình
}
class Rectangle {
    area()   { /* ... */ }
    toXML()  { /* ... */ }
    toJSON() { /* ... */ }
    toSVG()  { /* ... */ }
}`,
            distractors: ['decorator', 'adapter', 'singleton']
        },
        flow: [
            'Client gọi compound.accept(areaCalc)',
            'CompoundShape gọi ngược visitor.visitCompound(this)',
            'Visitor duyệt các con và gọi child.accept(this)',
            'Rectangle.accept() gọi visitor.visitRectangle(this) — đúng hàm cho đúng loại',
            'Visitor cộng dồn diện tích, client đọc kết quả bằng getArea()'
        ],
        blank: {
            code: `class Rectangle implements Shape {
    constructor(public width: number, public height: number) {}

    accept(visitor: Visitor) {
        /* ??? */
    }
}`,
            options: ['visitor.visitRectangle(this);', 'visitor.visitCircle(this);', 'return this.width * this.height;', 'this.accept(visitor);'],
            explain: 'Đây là "double dispatch": phần tử gọi đúng hàm visitX dành cho kiểu của nó và truyền chính nó vào.'
        }
    },

    'interpreter': {
        scenarios: [
            'Người dùng nhập bộ lọc "giá > 100 AND (màu = đỏ OR màu = xanh)". Bạn biểu diễn mỗi phép so sánh, AND, OR thành một class có hàm evaluate() rồi ghép lại thành cây.',
            'Bảng tính cho phép gõ công thức "=SUM(A1:A5) * 2"; mỗi thành phần của công thức (số, ô, hàm, phép nhân) phải tự tính được giá trị của mình.',
            'Hệ thống khuyến mãi có ngôn ngữ luật nhỏ: "NẾU tổng > 500k VÀ khách VIP THÌ giảm 10%". Luật được lưu dạng chuỗi và cần được diễn giải lúc thanh toán.'
        ],
        code: `interface Rule {
    matches(order: Order): boolean;
}

class MinTotal implements Rule {
    constructor(private amount: number) {}
    matches(o: Order) { return o.total >= this.amount; }
}

class IsVip implements Rule {
    matches(o: Order) { return o.customer.vip; }
}

class And implements Rule {
    constructor(private a: Rule, private b: Rule) {}
    matches(o: Order) { return this.a.matches(o) && this.b.matches(o); }
}

const rule = new And(new MinTotal(500_000), new IsVip());
rule.matches(order);`,
        smell: {
            code: `function evaluate(expr: string, vars: Record<string, number>): number {
    // "(x + 3) * 2"
    const m = expr.match(/\\((\\w+) \\+ (\\d+)\\) \\* (\\d+)/);
    if (m) return (vars[m[1]] + +m[2]) * +m[3];
    const n = expr.match(/(\\w+) \\* (\\d+)/);
    if (n) return vars[n[1]] * +n[2];
    // mỗi dạng biểu thức mới → thêm một regex...
}`,
            distractors: ['strategy', 'facade', 'observer']
        },
        flow: [
            'Parser/Client dựng cây: MultiplyExpr(AddExpr(x, 3), 2)',
            'Client gọi root.interpret({ x: 5 })',
            'MultiplyExpr gọi interpret() của AddExpr (con trái)',
            'AddExpr lấy x → 5 và 3 → 3, trả về 8',
            'MultiplyExpr nhân 8 với kết quả của NumberExpr(2) → 16'
        ],
        blank: {
            code: `class AddExpr implements Expression {
    constructor(private left: Expression, private right: Expression) {}

    interpret(context: Map<string, number>): number {
        /* ??? */
    }
}`,
            options: ['return this.left.interpret(context) + this.right.interpret(context);', 'return this.left + this.right;', 'return context.get("x")! + 3;', 'return eval("left + right");'],
            explain: 'Nút không-lá kết hợp kết quả <code>interpret()</code> của các con; nó không cần biết con là số, biến hay một biểu thức khác.'
        }
    }
};

// Loại câu hỏi theo chiều & độ khó
const practiceTypes = {
    'r-scenario': { dir: 'reverse', level: 1, label: 'Tình huống → Pattern', icon: '🧩' },
    'r-picture': { dir: 'reverse', level: 1, label: 'Nhìn hình → Pattern', icon: '🖼️' },
    'r-code': { dir: 'reverse', level: 2, label: 'Đọc code → Pattern', icon: '💻' },
    'r-smell': { dir: 'reverse', level: 3, label: 'Code "có mùi" → Refactor bằng gì?', icon: '👃' },
    'f-scenario': { dir: 'forward', level: 1, label: 'Pattern → Tình huống phù hợp', icon: '🎯' },
    'f-order': { dir: 'forward', level: 1, label: 'Sắp xếp luồng chạy', icon: '🔢' },
    'f-role': { dir: 'forward', level: 2, label: 'Gán vai trò trong pattern', icon: '🎭' },
    'f-blank': { dir: 'forward', level: 3, label: 'Điền dòng code còn thiếu', icon: '✍️' }
};
