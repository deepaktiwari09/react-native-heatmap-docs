---
sidebar_position: 2
---

# Quick Start

Get up and running with React Native Heatmap in minutes. This guide will show you how to create your first heatmap with just a few lines of code.

## Basic Usage

Here's the simplest way to create a heatmap:

```tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Heatmap } from '@dt-workspace/react-native-heatmap';

const App = () => {
  const data = [
    { date: '2024-01-01', value: 3 },
    { date: '2024-01-02', value: 7 },
    { date: '2024-01-03', value: 1 },
    { date: '2024-01-04', value: 9 },
    { date: '2024-01-05', value: 2 },
  ];

  return (
    <View style={styles.container}>
      <Heatmap
        data={data}
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

## Step-by-Step Guide

### 1. Import the Component

```tsx
import { Heatmap } from '@dt-workspace/react-native-heatmap';
```

### 2. Prepare Your Data

The heatmap expects an array of objects with `date` and `value` properties:

```tsx
const data = [
  { date: '2024-01-01', value: 3 },
  { date: '2024-01-02', value: 7 },
  { date: '2024-01-03', value: 1 },
  // ... more data points
];
```

**Data Requirements:**
- **date**: ISO date string (YYYY-MM-DD format)
- **value**: Number representing the intensity (0 or higher)

### 3. Configure the Heatmap

```tsx
<Heatmap
  data={data}
  startDate={new Date('2024-01-01')}
  endDate={new Date('2024-01-31')}
  colorScheme="github"
/>
```

**Required Props:**
- `data`: Array of data points
- `startDate`: Start date for the heatmap
- `endDate`: End date for the heatmap

## Common Patterns

### GitHub-Style Contribution Calendar

```tsx
import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { Heatmap } from '@dt-workspace/react-native-heatmap';

const ContributionCalendar = () => {
  // Generate sample data for a year
  const generateYearData = () => {
    const data = [];
    const startDate = new Date('2024-01-01');
    const endDate = new Date('2024-12-31');
    
    for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
      data.push({
        date: d.toISOString().split('T')[0],
        value: Math.floor(Math.random() * 5), // Random commits (0-4)
      });
    }
    
    return data;
  };

  const data = generateYearData();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>My Contributions</Text>
      <Heatmap
        data={data}
        startDate={new Date('2024-01-01')}
        endDate={new Date('2024-12-31')}
        colorScheme="github"
        showTooltip={true}
        animated={true}
        cellSize={12}
        cellSpacing={3}
        onCellPress={(date, value) => {
          console.log(`Pressed: ${date} with value: ${value}`);
        }}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
```

### Fitness Activity Tracker

```tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Heatmap } from '@dt-workspace/react-native-heatmap';

const FitnessTracker = () => {
  const workoutData = [
    { date: '2024-01-01', value: 45 }, // 45 minutes
    { date: '2024-01-02', value: 60 }, // 1 hour
    { date: '2024-01-03', value: 30 }, // 30 minutes
    { date: '2024-01-04', value: 90 }, // 1.5 hours
    { date: '2024-01-05', value: 0 },  // Rest day
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Workout Minutes</Text>
      <Heatmap
        data={workoutData}
        startDate={new Date('2024-01-01')}
        endDate={new Date('2024-01-31')}
        colorScheme="heat"
        layout="weekly"
        showTooltip={true}
        tooltipDataTestID="workout-tooltip"
        cellSize={40}
        cellSpacing={2}
        onCellPress={(date, value) => {
          if (value > 0) {
            console.log(`Worked out for ${value} minutes on ${date}`);
          }
        }}
      />
    </View>
  );
};
```

### Sales Performance Dashboard

```tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Heatmap } from '@dt-workspace/react-native-heatmap';

const SalesDashboard = () => {
  const salesData = [
    { date: '2024-01-01', value: 12500 }, // $12,500
    { date: '2024-01-02', value: 8300 },  // $8,300
    { date: '2024-01-03', value: 15600 }, // $15,600
    { date: '2024-01-04', value: 9800 },  // $9,800
    { date: '2024-01-05', value: 22100 }, // $22,100
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daily Sales ($)</Text>
      <Heatmap
        data={salesData}
        startDate={new Date('2024-01-01')}
        endDate={new Date('2024-01-31')}
        colorScheme="cool"
        layout="monthly"
        showTooltip={true}
        cellSize={30}
        cellSpacing={2}
        onCellPress={(date, value) => {
          console.log(`Sales on ${date}: $${value.toLocaleString()}`);
        }}
      />
    </View>
  );
};
```

## Color Schemes

Try different built-in color schemes:

```tsx
// GitHub-style (default)
<Heatmap colorScheme="github" />

// Heat map colors
<Heatmap colorScheme="heat" />

// Cool blue tones
<Heatmap colorScheme="cool" />

// Purple gradient
<Heatmap colorScheme="purple" />

// GitLab-style
<Heatmap colorScheme="gitlab" />
```

## Adding Interactivity

### Touch Handlers

```tsx
<Heatmap
  data={data}
  startDate={startDate}
  endDate={endDate}
  colorScheme="github"
  onCellPress={(date, value) => {
    console.log(`Pressed: ${date} with value: ${value}`);
  }}
  onCellLongPress={(date, value) => {
    console.log(`Long pressed: ${date} with value: ${value}`);
  }}
/>
```

### Tooltips

```tsx
<Heatmap
  data={data}
  startDate={startDate}
  endDate={endDate}
  colorScheme="github"
  showTooltip={true}
  tooltipDataTestID="custom-tooltip"
/>
```

## Animations

Add smooth animations to your heatmap:

```tsx
<Heatmap
  data={data}
  startDate={startDate}
  endDate={endDate}
  colorScheme="github"
  animated={true}
  animationDuration={1000}
  animationType="fade"
  animationDelay={50} // Stagger effect
/>
```

## Next Steps

Now that you have a basic heatmap working, you can:

1. **Explore More Examples**: Check out [basic examples](./basic-examples) for more use cases
2. **Customize Appearance**: Learn about [theming and styling](../advanced/theming)
3. **Add Advanced Features**: Discover [animations](../advanced/animations) and [gestures](../advanced/gestures-touch)
4. **Choose Different Layouts**: Explore [time-based layouts](../layouts/time-based/daily-layout) for different visualization needs
5. **Review API Reference**: Check the complete [API documentation](../api/heatmap-component)

## Common Pitfalls

- **Date Format**: Always use ISO date strings (YYYY-MM-DD)
- **Data Coverage**: Ensure your data covers the date range between startDate and endDate
- **Performance**: For large datasets, consider using pagination or virtualization
- **Touch Areas**: Make sure cell sizes are appropriate for touch interactions (minimum 44x44 points on iOS)