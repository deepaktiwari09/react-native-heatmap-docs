---
sidebar_position: 1
---

# Installation

Get started with React Native Heatmap by installing the package and its dependencies.

## Prerequisites

Before installing, make sure you have:

- **Node.js** version 16.0 or above
- **React Native** version 0.70 or above (for CLI projects)
- **Expo SDK** version 48 or above (for Expo projects)

## Package Installation

Install the main package and its required peer dependency:

```bash
# Using npm
npm install @dt-workspace/react-native-heatmap react-native-svg

# Using yarn
yarn add @dt-workspace/react-native-heatmap react-native-svg

# Using pnpm
pnpm add @dt-workspace/react-native-heatmap react-native-svg
```

## Optional Dependencies

For enhanced features, install these optional peer dependencies:

### For Advanced Animations (Recommended)
```bash
# Using npm
npm install react-native-reanimated

# Using yarn
yarn add react-native-reanimated

# Using pnpm
pnpm add react-native-reanimated
```

### For Gesture Support (Recommended)
```bash
# Using npm
npm install react-native-gesture-handler

# Using yarn
yarn add react-native-gesture-handler

# Using pnpm
pnpm add react-native-gesture-handler
```

## Platform Setup

### React Native CLI Projects

#### iOS Setup
1. Navigate to your iOS directory and install CocoaPods:
```bash
cd ios && pod install
```

2. For react-native-reanimated, add this to your `babel.config.js`:
```javascript
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin', // This must be last
  ],
};
```

3. For react-native-gesture-handler, add to your `index.js`:
```javascript
import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
```

#### Android Setup
1. For react-native-gesture-handler, add to your `MainActivity.java`:
```java
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;

// In your MainActivity class
@Override
protected ReactRootView createRootView() {
    return new RNGestureHandlerEnabledRootView(this);
}
```

2. Clean and rebuild your Android project:
```bash
cd android && ./gradlew clean && cd .. && npx react-native run-android
```

### Expo Projects

#### Using Expo CLI
If you're using Expo, the installation is simpler:

```bash
# Install the main package
expo install @dt-workspace/react-native-heatmap react-native-svg

# Install optional dependencies
expo install react-native-reanimated react-native-gesture-handler
```

#### Using EAS Build
For EAS Build, make sure your `app.json` includes:

```json
{
  "expo": {
    "plugins": [
      "react-native-reanimated",
      "react-native-gesture-handler"
    ]
  }
}
```

## Verification

Test your installation by creating a simple heatmap:

```tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Heatmap } from '@dt-workspace/react-native-heatmap';

const testData = [
  { date: '2024-01-01', value: 1 },
  { date: '2024-01-02', value: 3 },
  { date: '2024-01-03', value: 2 },
];

const App = () => {
  return (
    <View style={styles.container}>
      <Heatmap
        data={testData}
        startDate={new Date('2024-01-01')}
        endDate={new Date('2024-01-31')}
        colorScheme="github"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});

export default App;
```

## Version Compatibility

| React Native Heatmap | React Native | Expo SDK | React Native Reanimated | React Native Gesture Handler |
|----------------------|--------------|----------|-------------------------|------------------------------|
| 1.2.x                | ≥ 0.70       | ≥ 48     | ≥ 3.0.0                | ≥ 2.0.0                     |
| 1.1.x                | ≥ 0.68       | ≥ 47     | ≥ 2.8.0                | ≥ 2.0.0                     |
| 1.0.x                | ≥ 0.66       | ≥ 46     | ≥ 2.5.0                | ≥ 1.10.0                    |

## TypeScript Support

The library includes comprehensive TypeScript definitions. No additional setup is required for TypeScript projects.

## Troubleshooting

### Common Issues

#### Metro bundler errors
If you encounter Metro bundler errors, try:
```bash
npx react-native start --reset-cache
```

#### iOS build errors
Clean your iOS build folder:
```bash
cd ios && xcodebuild clean && cd .. && npx react-native run-ios
```

#### Android build errors
Clean and rebuild:
```bash
cd android && ./gradlew clean && cd .. && npx react-native run-android
```

### Getting Help

If you encounter issues:

1. Check our [troubleshooting guide](./troubleshooting)
2. Search existing [GitHub issues](https://github.com/dt-workspace/react-native-heatmap/issues)
3. Create a new issue with a minimal reproduction example

## Next Steps

Now that you have React Native Heatmap installed, you can:

- Follow the [Quick Start guide](./quick-start) to create your first heatmap
- Explore [basic examples](./basic-examples) to understand common use cases
- Check out the [API reference](../api/heatmap-component) for detailed component documentation