# How It Works

An interactive web application that explains how different systems work through visual demonstrations and interactive components.

## Features

- **Interactive Learning**: Choose different strategies and see how they affect various components in real-time
- **Visual Flow Diagrams**: Clear representation of relationships between different system components
- **Multiple Topics**: Expandable framework to add new "how it works" topics

## Current Topics

### How Money Works
Explore the flow of money through the economy with four main components:

- **🏛️ Government**: Choose between balanced budget, economic stimulus, or austerity measures
- **🏢 Business**: Select growth mode, conservative approach, or aggressive expansion
- **👨‍👩‍👧‍👦 Family**: Pick saving mode, spending mode, or investing mode
- **🏦 Bank**: Adjust between moderate lending, tight credit, or loose credit

Each strategy choice affects other components in the system, demonstrating the interconnected nature of economic systems.

## Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, or Edge)
- No build tools or dependencies required!

### Running the Application

1. Clone this repository:
   ```bash
   git clone https://github.com/trungnd6/how-it-works.git
   cd how-it-works
   ```

2. Open `index.html` in your web browser:
   - Double-click the file, or
   - Run a local server (optional):
     ```bash
     python -m http.server 8000
     # or
     npx serve
     ```
   - Navigate to `http://localhost:8000`

3. Click on "How Money Works" to start exploring!

## How to Use

1. **Start at the homepage** - Browse available topics
2. **Select a topic** - Click on "How Money Works" to dive in
3. **Choose strategies** - Use the dropdown menus to select different strategies for each component
4. **Observe impacts** - Watch how your choices affect all components in real-time
5. **Read the summary** - Check the economic impact summary at the bottom to understand the overall effects

## Project Structure

```
how-it-works/
├── index.html          # Homepage with topic list
├── money.html          # Money flow interactive page
├── styles.css          # Shared styles for all pages
├── script.js           # Homepage navigation logic
├── money-flow.js       # Money flow simulation logic
└── README.md           # This file
```

## Technology Stack

- **HTML5**: Structure and content
- **CSS3**: Styling with gradients, transitions, and responsive design
- **Vanilla JavaScript**: Interactive logic without external dependencies

## Future Topics

The application is designed to easily accommodate new topics:
- How Electricity Works
- How The Internet Works
- How Supply Chains Work
- And more...

## Contributing

Feel free to contribute by:
1. Adding new topics
2. Improving existing simulations
3. Enhancing the UI/UX
4. Fixing bugs

## License

This project is open source and available for educational purposes.