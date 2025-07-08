# React Native Heatmap Documentation

📚 **Comprehensive documentation website for [@dt-workspace/react-native-heatmap](https://www.npmjs.com/package/@dt-workspace/react-native-heatmap)**

A modern, highly customizable React Native heatmap component library inspired by GitHub's contribution calendar.

## 🌐 Live Documentation

Visit the live documentation at: [react-native-heatmap-docs.vercel.app](https://react-native-heatmap-docs.vercel.app)

## 📖 What's Included

### 🚀 Getting Started
- **Installation Guide** - Complete setup instructions for all platforms
- **Quick Start** - Get up and running in minutes
- **Basic Examples** - Practical examples for common use cases
- **Troubleshooting** - Solutions for common issues
- **Migration Guide** - Upgrade between versions

### 📚 API Reference
- **Component Documentation** - Detailed prop references
- **TypeScript Definitions** - Complete type information
- **Utility Functions** - Helper function documentation

### 🎨 Layout Guides
- **Time-Based Layouts** - Daily, weekly, monthly, yearly views
- **Card Layout System** - Flexible card-based layouts
- **Traditional Layouts** - Calendar, grid, and compact views

### ⚡ Advanced Features
- **Animations** - Smooth transitions and effects
- **Gestures & Touch** - Interactive touch handling
- **Tooltips** - Customizable tooltip system
- **Theming** - Light/dark mode support
- **Performance** - Optimization techniques
- **Accessibility** - WCAG compliance features

### 💡 Examples & Use Cases
- **GitHub Contribution Calendar** - Recreation of GitHub's interface
- **Fitness Activity Tracker** - Health and fitness applications
- **Sales Performance Dashboard** - Business metrics visualization
- **Team Productivity Metrics** - Collaboration insights
- **IoT Sensor Data** - Real-time data visualization

## 🛠️ Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
git clone https://github.com/deepaktiwari09/react-native-heatmap-docs.git
cd react-native-heatmap-docs
npm install
```

### Development Server
```bash
npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build
```bash
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Type Checking
```bash
npm run typecheck
```

### Linting
```bash
npm run lint
npm run lint:fix
```

## 🚀 Deployment

The documentation is automatically deployed to Vercel when changes are pushed to the `master` branch.

### Manual Deployment
```bash
npm run build
npm run serve
```

## 📁 Project Structure

```
├── docs/                          # Documentation content
│   ├── getting-started/           # Getting started guides
│   ├── api/                       # API reference
│   ├── layouts/                   # Layout documentation
│   ├── advanced/                  # Advanced features
│   ├── examples/                  # Use case examples
│   ├── integration/              # Integration guides
│   └── community/                # Community resources
├── src/                          # Custom components and pages
│   ├── components/               # React components
│   ├── css/                      # Custom styling
│   └── pages/                    # Custom pages
├── static/                       # Static assets
├── docusaurus.config.ts         # Docusaurus configuration
├── sidebars.ts                  # Sidebar configuration
└── vercel.json                  # Vercel deployment config
```

## 🎨 Design System

The documentation uses a custom design system inspired by GitHub's contribution calendar:

- **Color Palette**: GitHub-style green heatmap colors
- **Typography**: Inter font family for modern readability
- **Components**: Custom styled components with heatmap themes
- **Responsive Design**: Mobile-first approach with desktop enhancements

## 🔧 Technologies Used

- **[Docusaurus v3](https://docusaurus.io/)** - Documentation framework
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[React](https://reactjs.org/)** - Component library
- **[Vercel](https://vercel.com/)** - Deployment platform
- **[GitHub Actions](https://github.com/features/actions)** - CI/CD pipeline

## 🤝 Contributing

We welcome contributions to improve the documentation! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/improve-docs`
3. **Make your changes**: Edit or add documentation
4. **Test locally**: Run `npm start` to test changes
5. **Submit a pull request**: Include a clear description of your changes

### Writing Guidelines

- Use clear, concise language
- Include code examples for all features
- Follow the existing structure and style
- Test all code examples before submitting
- Add proper frontmatter to new pages

## 📄 License

This documentation is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 🔗 Links

- **NPM Package**: [@dt-workspace/react-native-heatmap](https://www.npmjs.com/package/@dt-workspace/react-native-heatmap)
- **GitHub Repository**: [react-native-heatmap](https://github.com/dt-workspace/react-native-heatmap)
- **Documentation**: [react-native-heatmap-docs.vercel.app](https://react-native-heatmap-docs.vercel.app)
- **Issues**: [GitHub Issues](https://github.com/dt-workspace/react-native-heatmap/issues)

## 📊 Analytics

The documentation includes privacy-focused analytics to help us understand how developers use the library and improve the documentation experience.

---

**Built with ❤️ by the React Native Heatmap team**