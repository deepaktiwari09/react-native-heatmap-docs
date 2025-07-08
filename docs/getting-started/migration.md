---
sidebar_position: 5
---

# Migration Guide

This guide helps you migrate between different versions of React Native Heatmap.

## v1.1.x to v1.2.x

### Overview

Version 1.2.x introduces significant enhancements:
- 7 new time-based layouts
- CardLayout component system
- Enhanced theming with light/dark mode support
- Improved performance and memory management
- Extended API with new props and methods

### Breaking Changes

#### 1. Layout Prop Changes

**Before (v1.1.x):**
```tsx
<Heatmap
  layout="calendar"
  weekStart={1} // Monday
/>
```

**After (v1.2.x):**
```tsx
<Heatmap
  layout="monthly" // Renamed from 'calendar'
  weekStartsOn={1} // Renamed prop
/>
```

#### 2. Color Scheme Updates

**Before (v1.1.x):**
```tsx
<Heatmap
  colorScheme="github"
  darkMode={true}
/>
```

**After (v1.2.x):**
```tsx
<Heatmap
  colorScheme="github"
  theme="dark" // Centralized theme prop
/>
```

#### 3. Animation API Changes

**Before (v1.1.x):**
```tsx
<Heatmap
  animated={true}
  animationConfig={{
    duration: 1000,
    type: 'fade',
  }}
/>
```

**After (v1.2.x):**
```tsx
<Heatmap
  animated={true}
  animationDuration={1000}
  animationType="fade"
  animationDelay={50} // New: stagger effect
/>
```

### New Features

#### 1. Time-Based Layouts

```tsx
// New layout options in v1.2.x
<Heatmap layout="daily" />      // 24-hour view
<Heatmap layout="weekly" />     // 7-day view
<Heatmap layout="monthly" />    // Calendar month
<Heatmap layout="yearly" />     // Full year
<Heatmap layout="customRange" /> // Custom date range
<Heatmap layout="timeline" />   // Scrollable timeline
<Heatmap layout="realtime" />   // Live data updates
```

#### 2. CardLayout System

```tsx
import { CardLayout } from '@dt-workspace/react-native-heatmap';

<CardLayout
  sections={[
    {
      title: 'Daily Activity',
      layout: 'daily',
      data: dailyData,
    },
    {
      title: 'Weekly Summary',
      layout: 'weekly',
      data: weeklyData,
    },
  ]}
  theme="light"
/>
```

#### 3. Enhanced Theming

```tsx
<Heatmap
  colorScheme="github"
  theme="auto" // Follows system theme
  customColors={{
    background: '#f8f9fa',
    text: '#24292e',
    border: '#e1e4e8',
  }}
/>
```

### Migration Steps

#### Step 1: Update Dependencies

```bash
npm install @dt-workspace/react-native-heatmap@^1.2.0
```

#### Step 2: Update Imports

```tsx
// No changes needed for basic imports
import { Heatmap } from '@dt-workspace/react-native-heatmap';

// New imports available
import { 
  Heatmap, 
  CardLayout, 
  HeatmapTheme, 
  LayoutType 
} from '@dt-workspace/react-native-heatmap';
```

#### Step 3: Update Component Usage

**Old Usage (v1.1.x):**
```tsx
<Heatmap
  data={data}
  startDate={startDate}
  endDate={endDate}
  colorScheme="github"
  layout="calendar"
  weekStart={1}
  darkMode={isDark}
  animated={true}
  animationConfig={{
    duration: 1000,
    type: 'fade',
  }}
  onCellPress={handlePress}
/>
```

**New Usage (v1.2.x):**
```tsx
<Heatmap
  data={data}
  startDate={startDate}
  endDate={endDate}
  colorScheme="github"
  layout="monthly" // Renamed
  weekStartsOn={1} // Renamed
  theme={isDark ? 'dark' : 'light'} // Centralized theme
  animated={true}
  animationDuration={1000} // Separated props
  animationType="fade"
  animationDelay={50} // New stagger effect
  onCellPress={handlePress}
/>
```

#### Step 4: Update Custom Color Schemes

**Before (v1.1.x):**
```tsx
const customScheme = {
  0: '#ebedf0',
  1: '#9be9a8',
  2: '#40c463',
  3: '#30a14e',
  4: '#216e39',
};
```

**After (v1.2.x):**
```tsx
const customScheme = {
  light: {
    0: '#ebedf0',
    1: '#9be9a8',
    2: '#40c463',
    3: '#30a14e',
    4: '#216e39',
  },
  dark: {
    0: '#161b22',
    1: '#0e4429',
    2: '#006d32',
    3: '#26a641',
    4: '#39d353',
  },
};
```

### Code Transformation Examples

#### Example 1: Basic Calendar

**Before:**
```tsx
const CalendarHeatmap = () => {
  const [isDark, setIsDark] = useState(false);
  
  return (
    <Heatmap
      data={data}
      startDate={new Date('2024-01-01')}
      endDate={new Date('2024-12-31')}
      colorScheme="github"
      layout="calendar"
      weekStart={0}
      darkMode={isDark}
      cellSize={12}
      cellSpacing={3}
      showTooltip={true}
      onCellPress={(date, value) => {
        console.log(`${date}: ${value}`);
      }}
    />
  );
};
```

**After:**
```tsx
const CalendarHeatmap = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  
  return (
    <Heatmap
      data={data}
      startDate={new Date('2024-01-01')}
      endDate={new Date('2024-12-31')}
      colorScheme="github"
      layout="yearly" // Better name for full year view
      weekStartsOn={0}
      theme={theme}
      cellSize={12}
      cellSpacing={3}
      showTooltip={true}
      onCellPress={(date, value) => {
        console.log(`${date}: ${value}`);
      }}
    />
  );
};
```

#### Example 2: Animated Heatmap

**Before:**
```tsx
<Heatmap
  data={data}
  startDate={startDate}
  endDate={endDate}
  colorScheme="heat"
  animated={true}
  animationConfig={{
    duration: 1500,
    type: 'scale',
    easing: 'ease-out',
  }}
/>
```

**After:**
```tsx
<Heatmap
  data={data}
  startDate={startDate}
  endDate={endDate}
  colorScheme="heat"
  animated={true}
  animationDuration={1500}
  animationType="scale"
  animationEasing="ease-out"
  animationDelay={100} // New: stagger effect
/>
```

### New CardLayout Migration

If you were building complex layouts manually, you can now use CardLayout:

**Before (Custom Implementation):**
```tsx
const Dashboard = () => {
  return (
    <ScrollView>
      <View style={styles.card}>
        <Text style={styles.title}>Daily Activity</Text>
        <Heatmap
          data={dailyData}
          layout="grid"
          cellSize={20}
        />
      </View>
      
      <View style={styles.card}>
        <Text style={styles.title}>Weekly Summary</Text>
        <Heatmap
          data={weeklyData}
          layout="calendar"
          cellSize={25}
        />
      </View>
    </ScrollView>
  );
};
```

**After (Using CardLayout):**
```tsx
import { CardLayout } from '@dt-workspace/react-native-heatmap';

const Dashboard = () => {
  return (
    <CardLayout
      sections={[
        {
          title: 'Daily Activity',
          layout: 'daily',
          data: dailyData,
          cellSize: 20,
        },
        {
          title: 'Weekly Summary',
          layout: 'weekly',
          data: weeklyData,
          cellSize: 25,
        },
      ]}
      theme="auto"
      style={styles.container}
    />
  );
};
```

### Performance Improvements

v1.2.x includes several performance optimizations:

1. **Better Memory Management:**
   - Automatic cleanup of unused components
   - Optimized re-renders with React.memo

2. **Improved Virtualization:**
   - Lazy loading for large datasets
   - Efficient scrolling for timeline layouts

3. **Animation Optimizations:**
   - Hardware acceleration enabled by default
   - Reduced animation overhead

### TypeScript Changes

#### Updated Type Definitions

**Before (v1.1.x):**
```tsx
interface HeatmapProps {
  layout?: 'calendar' | 'grid' | 'compact';
  weekStart?: number;
  darkMode?: boolean;
}
```

**After (v1.2.x):**
```tsx
interface HeatmapProps {
  layout?: 'daily' | 'weekly' | 'monthly' | 'yearly' | 'customRange' | 'timeline' | 'realtime' | 'grid' | 'compact';
  weekStartsOn?: number;
  theme?: 'light' | 'dark' | 'auto';
}
```

#### New Type Exports

```tsx
import { 
  HeatmapData,
  ColorScheme,
  LayoutType,
  ThemeType,
  AnimationType,
  CardLayoutSection,
} from '@dt-workspace/react-native-heatmap';
```

### Testing Migration

Update your tests to account for the new API:

**Before:**
```tsx
import { render } from '@testing-library/react-native';
import { Heatmap } from '@dt-workspace/react-native-heatmap';

test('renders heatmap', () => {
  const { getByTestId } = render(
    <Heatmap
      data={testData}
      startDate={new Date('2024-01-01')}
      endDate={new Date('2024-01-31')}
      layout="calendar"
      testID="heatmap"
    />
  );
  
  expect(getByTestId('heatmap')).toBeTruthy();
});
```

**After:**
```tsx
import { render } from '@testing-library/react-native';
import { Heatmap } from '@dt-workspace/react-native-heatmap';

test('renders heatmap', () => {
  const { getByTestId } = render(
    <Heatmap
      data={testData}
      startDate={new Date('2024-01-01')}
      endDate={new Date('2024-01-31')}
      layout="monthly" // Updated prop value
      testID="heatmap"
    />
  );
  
  expect(getByTestId('heatmap')).toBeTruthy();
});
```

### Migration Checklist

- [ ] Update package to v1.2.x
- [ ] Replace `layout="calendar"` with `layout="monthly"`
- [ ] Replace `weekStart` with `weekStartsOn`
- [ ] Replace `darkMode` with `theme`
- [ ] Update animation configuration
- [ ] Test all custom color schemes
- [ ] Update TypeScript types if using TypeScript
- [ ] Test touch interactions
- [ ] Update tests
- [ ] Review performance in your specific use case

### Common Migration Issues

1. **Layout not rendering:** Check if you're using the correct layout name
2. **Colors not updating:** Verify theme prop is correctly set
3. **Animations not working:** Check animation prop names
4. **TypeScript errors:** Update type imports

### Getting Help

If you encounter issues during migration:

1. Check the [troubleshooting guide](./troubleshooting)
2. Review the [API reference](../api/heatmap-component)
3. Look at [updated examples](../examples/github-contribution-calendar)
4. Create an issue on [GitHub](https://github.com/dt-workspace/react-native-heatmap/issues)

## v1.0.x to v1.1.x

### Key Changes

- Added animation support
- Introduced gesture handling
- Added tooltip system
- New color schemes
- Performance optimizations

### Migration Steps

1. **Update animations:**
```tsx
// Before
<Heatmap showAnimation={true} />

// After
<Heatmap animated={true} />
```

2. **Update gesture handling:**
```tsx
// Before
<Heatmap onPress={handlePress} />

// After
<Heatmap onCellPress={handlePress} />
```

3. **Update tooltips:**
```tsx
// Before
<Heatmap tooltip={true} />

// After
<Heatmap showTooltip={true} />
```