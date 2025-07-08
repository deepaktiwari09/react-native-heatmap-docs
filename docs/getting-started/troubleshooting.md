---
sidebar_position: 4
---

# Troubleshooting

This guide helps you resolve common issues when using React Native Heatmap.

## Installation Issues

### Package Installation Errors

#### Error: Cannot resolve dependency
```bash
npm ERR! peer dep missing: react-native-svg@*, required by @dt-workspace/react-native-heatmap
```

**Solution:**
Install the required peer dependency:
```bash
npm install react-native-svg
```

#### Error: Metro bundler cannot resolve module
```bash
error: bundling failed: Error: Unable to resolve module `react-native-svg`
```

**Solution:**
1. Clear Metro cache:
```bash
npx react-native start --reset-cache
```

2. If using Expo, ensure you're using the correct installation command:
```bash
expo install react-native-svg
```

### iOS Build Issues

#### Error: CocoaPods installation failed
```bash
[!] CocoaPods could not find compatible versions for pod "RNSVGPath"
```

**Solution:**
1. Update CocoaPods:
```bash
cd ios && pod repo update && pod install
```

2. If the issue persists, try:
```bash
cd ios && pod deintegrate && pod install
```

#### Error: Xcode build failed with react-native-reanimated
```bash
Undefined symbol: _OBJC_CLASS_$_REAModule
```

**Solution:**
Add to your `babel.config.js`:
```javascript
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin', // Must be last
  ],
};
```

Then clean and rebuild:
```bash
cd ios && xcodebuild clean && cd .. && npx react-native run-ios
```

### Android Build Issues

#### Error: Android build failed with gesture handler
```bash
java.lang.UnsatisfiedLinkError: couldn't find DSO to load: libreactnativegesturehandler.so
```

**Solution:**
1. Add to `MainApplication.java`:
```java
import com.swmansion.gesturehandler.react.RNGestureHandlerPackage;

@Override
protected List<ReactPackage> getPackages() {
  return Arrays.<ReactPackage>asList(
    new MainReactPackage(),
    new RNGestureHandlerPackage() // Add this
  );
}
```

2. Clean and rebuild:
```bash
cd android && ./gradlew clean && cd .. && npx react-native run-android
```

## Runtime Issues

### Component Not Rendering

#### Heatmap appears blank or empty
```tsx
// This might not render anything
<Heatmap
  data={[]}
  startDate={new Date('2024-01-01')}
  endDate={new Date('2024-01-31')}
  colorScheme="github"
/>
```

**Solution:**
Ensure your data array has valid entries:
```tsx
const data = [
  { date: '2024-01-01', value: 1 },
  { date: '2024-01-02', value: 3 },
  // ... more data
];

<Heatmap
  data={data}
  startDate={new Date('2024-01-01')}
  endDate={new Date('2024-01-31')}
  colorScheme="github"
/>
```

#### Error: Invalid date format
```bash
Error: Invalid date value: "2024-1-1"
```

**Solution:**
Use proper ISO date format (YYYY-MM-DD):
```tsx
// Wrong
{ date: '2024-1-1', value: 1 }

// Correct
{ date: '2024-01-01', value: 1 }
```

### Performance Issues

#### Slow rendering with large datasets
```tsx
// This might be slow with thousands of data points
const data = generateYearData(); // 365+ items
```

**Solution:**
1. Use pagination for large datasets:
```tsx
const [currentMonth, setCurrentMonth] = useState(0);
const monthData = data.slice(currentMonth * 31, (currentMonth + 1) * 31);
```

2. Implement virtualization for very large datasets:
```tsx
// Consider using react-native-virtualized-view for massive datasets
```

#### Memory leaks with animations
```tsx
// Animations might cause memory issues if not properly managed
<Heatmap animated={true} animationDuration={10000} />
```

**Solution:**
Use reasonable animation durations and clean up properly:
```tsx
<Heatmap
  animated={true}
  animationDuration={1000} // Reasonable duration
  animationType="fade"
/>
```

### Touch and Gesture Issues

#### Touch events not working
```tsx
<Heatmap
  onCellPress={(date, value) => {
    console.log('This might not work'); // Not firing
  }}
/>
```

**Solution:**
1. Ensure cell size is adequate for touch:
```tsx
<Heatmap
  cellSize={20} // Minimum recommended size
  cellSpacing={2}
  onCellPress={(date, value) => {
    console.log(`Pressed: ${date}`);
  }}
/>
```

2. Check if gestures are properly configured:
```tsx
// Make sure react-native-gesture-handler is installed
// and properly configured if using advanced gestures
```

#### Gestures conflict with ScrollView
```tsx
<ScrollView>
  <Heatmap
    // Gestures might conflict with ScrollView
    onCellPress={handlePress}
  />
</ScrollView>
```

**Solution:**
Configure proper gesture handling:
```tsx
<ScrollView>
  <Heatmap
    onCellPress={handlePress}
    // Disable conflicting gestures if needed
    gestureEnabled={false}
  />
</ScrollView>
```

## TypeScript Issues

### Type Errors

#### Error: Property 'colorScheme' does not exist
```tsx
// TypeScript might not recognize custom color schemes
<Heatmap colorScheme="myCustomScheme" />
```

**Solution:**
Use proper types:
```tsx
import { Heatmap, ColorScheme } from '@dt-workspace/react-native-heatmap';

const customScheme: ColorScheme = {
  0: '#f0f0f0',
  1: '#c6e48b',
  2: '#7bc96f',
  3: '#239a3b',
  4: '#196127',
};

<Heatmap colorScheme={customScheme} />
```

#### Error: Type 'string' is not assignable to type 'Date'
```tsx
// This will cause a TypeScript error
<Heatmap
  startDate="2024-01-01" // Should be Date object
  endDate="2024-01-31"   // Should be Date object
/>
```

**Solution:**
Use Date objects:
```tsx
<Heatmap
  startDate={new Date('2024-01-01')}
  endDate={new Date('2024-01-31')}
/>
```

## Styling Issues

### Layout Problems

#### Heatmap overflows container
```tsx
<View style={{ width: 300 }}>
  <Heatmap
    cellSize={50} // Too large for container
    cellSpacing={5}
  />
</View>
```

**Solution:**
Calculate appropriate cell size:
```tsx
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const containerWidth = width - 40; // Account for padding
const cellSize = Math.floor(containerWidth / 8); // For weekly layout

<Heatmap
  cellSize={cellSize}
  cellSpacing={2}
/>
```

#### Inconsistent colors across themes
```tsx
// Colors might not adapt to dark/light themes
<Heatmap colorScheme="github" />
```

**Solution:**
Use theme-aware color schemes:
```tsx
import { useColorScheme } from 'react-native';

const MyComponent = () => {
  const colorScheme = useColorScheme();
  
  return (
    <Heatmap
      colorScheme={colorScheme === 'dark' ? 'github-dark' : 'github'}
    />
  );
};
```

## Common Mistakes

### 1. Incorrect Data Structure
```tsx
// Wrong - missing date property
const wrongData = [
  { day: '2024-01-01', count: 1 },
];

// Correct
const correctData = [
  { date: '2024-01-01', value: 1 },
];
```

### 2. Date Range Mismatch
```tsx
// Wrong - data outside date range
const data = [{ date: '2024-02-01', value: 1 }];

<Heatmap
  data={data}
  startDate={new Date('2024-01-01')}
  endDate={new Date('2024-01-31')} // Data is in February
/>
```

### 3. Missing Dependencies
```tsx
// This will fail if react-native-svg is not installed
import { Heatmap } from '@dt-workspace/react-native-heatmap';
```

## Debugging Tips

### 1. Enable Debug Mode
```tsx
<Heatmap
  data={data}
  startDate={startDate}
  endDate={endDate}
  colorScheme="github"
  debug={true} // Enable debug logging
/>
```

### 2. Check Data Validity
```tsx
const validateData = (data) => {
  return data.every(item => 
    item.date && 
    typeof item.date === 'string' && 
    item.date.match(/^\d{4}-\d{2}-\d{2}$/) &&
    typeof item.value === 'number' &&
    item.value >= 0
  );
};

console.log('Data is valid:', validateData(data));
```

### 3. Log Touch Events
```tsx
<Heatmap
  onCellPress={(date, value) => {
    console.log('Cell pressed:', { date, value });
  }}
  onCellLongPress={(date, value) => {
    console.log('Cell long pressed:', { date, value });
  }}
/>
```

## Getting Help

If you can't resolve an issue:

1. **Check the Console**: Look for error messages in the debugger
2. **Search Issues**: Check [GitHub issues](https://github.com/dt-workspace/react-native-heatmap/issues)
3. **Create Minimal Example**: Reproduce the issue with minimal code
4. **Report Bug**: Create a new issue with:
   - React Native version
   - Platform (iOS/Android)
   - Expo or CLI
   - Minimal reproduction code
   - Error messages

## Version Migration

### Upgrading from v1.1.x to v1.2.x

See the [migration guide](./migration) for detailed upgrade instructions.

### Breaking Changes

- Some prop names have changed
- New required peer dependencies
- Updated minimum React Native version

## Performance Optimization

### 1. Reduce Data Size
```tsx
// Instead of sending all data, send only visible range
const visibleData = data.filter(item => 
  item.date >= startDate && item.date <= endDate
);
```

### 2. Optimize Animations
```tsx
// Use shorter animation durations for better performance
<Heatmap
  animated={true}
  animationDuration={500} // Shorter duration
  animationType="fade"    // Simpler animation
/>
```

### 3. Debounce Touch Events
```tsx
const debouncedPress = useMemo(
  () => debounce((date, value) => {
    console.log('Pressed:', date, value);
  }, 100),
  []
);

<Heatmap onCellPress={debouncedPress} />
```