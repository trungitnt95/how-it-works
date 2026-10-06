# � How It Works - Hiểu Mọi Thứ Hoạt Động

An interactive web platform that visualizes how complex systems work through simple, engaging diagrams.

## 📚 Topics

### ✅ Available

#### 💰 [How Money Works](./money/)
Understand how money flows through the economy - from central banks to your wallet.
- 20 financial components
- 32 interactive scenarios
- 4 simulators (Money Multiplier, Compound Interest, Loan Calculator, Inflation)
- 3 difficulty levels (Beginner, Intermediate, Advanced)

#### 🩺 [Sức Khỏe](./health/)
Kiến thức y khoa cho người bình thường, từ cơ bản đến nâng cao, có hình minh họa từ Wikimedia Commons.
- 32 chủ đề: cơ thể người, chỉ số sức khỏe, dinh dưỡng, giấc ngủ, vận động, sơ cứu, thuốc, vaccine, bệnh truyền nhiễm
- Bệnh mạn tính (tim mạch, tiểu đường, ung thư, gan - thận - tiêu hóa, xương khớp, hô hấp), khám sức khỏe định kỳ
- Sức khỏe phụ nữ, nam giới, trẻ em, người cao tuổi, sức khỏe tình dục
- Đọc xét nghiệm, sức khỏe tinh thần, vi sinh đường ruột, chế độ ăn, thực phẩm chức năng, nhận diện tin y khoa sai lệch
- Ảnh nhúng trực tiếp từ Wikimedia Commons; mỗi ảnh ghi rõ tác giả và giấy phép; nội dung mang tính giáo dục, không thay thế tư vấn của bác sĩ

### 🔜 Coming Soon

- 🌐 **How Internet Works** - DNS, HTTP, Cloud, and networking
- 🫀 **How Body Works** - Circulatory, digestive, and nervous systems
- ⚡ **How Energy Works** - Power generation and distribution

## 🚀 How to Run

```bash
# Using Python
python -m http.server 8080

# Using Node.js
npx serve
```

Then open http://localhost:8080 in your browser.

## 📁 Project Structure

```
how-it-works/
├── index.html          # Home page - topic selection
├── money/              # Money flow visualization
│   ├── index.html      # Main HTML structure
│   ├── styles.css      # Styling and animations
│   └── app.js          # Interactive functionality
├── docs/               # Documentation and source materials
└── README.md           # This file
```

## 🎨 Technologies

- Pure HTML5, CSS3, JavaScript
- No external dependencies
- SVG for animated flow arrows
- CSS Grid and Flexbox for layout

## 📝 License

MIT License - Feel free to use and modify!

