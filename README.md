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
