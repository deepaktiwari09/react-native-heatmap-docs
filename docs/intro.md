---
sidebar_position: 1
---

# React Native Heatmap

A modern, highly customizable React Native heatmap component library inspired by GitHub's contribution calendar. Perfect for visualizing activity data, progress tracking, and creating beautiful data representations in your React Native applications.

<div className="heatmap-demo"></div>

## ✨ Key Features

### 🎨 **Multiple Color Schemes**
- **10+ Built-in Schemes**: GitHub, GitLab, Bitbucket, Heat, Cool, Purple, Accessible, Sunset, Neon, and more
- **Custom Color Support**: Create your own color schemes with ease
- **Dynamic Theming**: Seamless light/dark mode integration

### 📊 **Flexible Layout System**
- **Time-Based Layouts**: Daily, Weekly, Monthly, Yearly, Custom Range, Timeline Scroll, Real-Time
- **Card Layout System**: Flexible card-based layout with configurable sections
- **Traditional Layouts**: Calendar, Grid, and Compact arrangements

### 🎬 **Advanced Features**
- **Smooth Animations**: Entry animations with fade, scale, slide effects and stagger timing
- **Gesture Support**: Pan, zoom, swipe with react-native-gesture-handler integration
- **Interactive Tooltips**: Customizable tooltips with auto-positioning
- **Touch Handlers**: onPress, onLongPress, onPressIn, onPressOut, onDoublePress
- **Haptic Feedback**: Native haptic feedback integration

### 🔧 **Developer Experience**
- **TypeScript First**: Complete type safety with comprehensive interfaces
- **React Native Optimized**: Built specifically for mobile performance
- **Extensive Documentation**: Comprehensive guides and examples
- **Easy Integration**: Works with Expo, React Native CLI, and popular state management solutions

## 📦 Installation

```bash
# Using npm
npm install @dt-workspace/react-native-heatmap react-native-svg

# Using yarn
yarn add @dt-workspace/react-native-heatmap react-native-svg

# Using pnpm
pnpm add @dt-workspace/react-native-heatmap react-native-svg
```

## 🚀 Quick Start

```tsx
import React from 'react';
import { View } from 'react-native';
import { Heatmap } from '@dt-workspace/react-native-heatmap';

const data = [
  { date: '2024-01-01', value: 3 },
  { date: '2024-01-02', value: 7 },
  { date: '2024-01-03', value: 1 },
  { date: '2024-01-04', value: 9 },
  { date: '2024-01-05', value: 2 },
];

const App = () => {
  return (
    <View style={{ padding: 20 }}>
      <Heatmap
        data={data}
        startDate={new Date('2024-01-01')}
        endDate={new Date('2024-12-31')}
        colorScheme="github"
        showTooltip={true}
        animated={true}
      />
    </View>
  );
};

export default App;
```

## 🎯 Use Cases

Perfect for building:
- **GitHub-style contribution calendars**
- **Fitness activity trackers**
- **Sales performance dashboards**
- **Project timeline visualizations**
- **Team productivity metrics**
- **IoT sensor data displays**

## 🔗 Quick Links

- [**Installation Guide**](./getting-started/installation) - Complete setup instructions
- [**API Reference**](./api/heatmap-component) - Component props and methods
- [**Layout Guides**](./layouts/time-based/daily-layout) - All available layouts
- [**Examples**](./examples/github-contribution-calendar) - Real-world implementations

## 💡 What's New in v1.2.0

- **7 New Time-Based Layouts** for comprehensive time visualization
- **CardLayout Component** with flexible section configuration
- **Enhanced Theming System** with light/dark mode support
- **Improved Performance** with better memory management
- **Extended Documentation** with interactive examples

---

Ready to get started? Head over to the [**Installation Guide**](./getting-started/installation) to begin building amazing heatmaps in your React Native app!