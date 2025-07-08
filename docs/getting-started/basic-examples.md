---
sidebar_position: 3
---

# Basic Examples

This page provides practical examples to help you understand how to use React Native Heatmap in different scenarios.

## 1. Simple Daily Activity Tracker

Track daily activities with a minimalist design:

```tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Heatmap } from '@dt-workspace/react-native-heatmap';

const DailyActivityTracker = () => {
  const activityData = [
    { date: '2024-01-01', value: 2 },
    { date: '2024-01-02', value: 5 },
    { date: '2024-01-03', value: 1 },
    { date: '2024-01-04', value: 8 },
    { date: '2024-01-05', value: 3 },
    { date: '2024-01-06', value: 0 },
    { date: '2024-01-07', value: 4 },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daily Activity</Text>
      <Heatmap
        data={activityData}
        startDate={new Date('2024-01-01')}
        endDate={new Date('2024-01-31')}
        colorScheme="github"
        layout="calendar"
        cellSize={20}
        cellSpacing={2}
        showTooltip={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
```

## 2. Weekly Progress Heatmap

Show weekly progress with enhanced styling:

```tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Heatmap } from '@dt-workspace/react-native-heatmap';

const WeeklyProgress = () => {
  const weeklyData = [
    { date: '2024-01-01', value: 75 },  // 75% complete
    { date: '2024-01-02', value: 60 },  // 60% complete
    { date: '2024-01-03', value: 90 },  // 90% complete
    { date: '2024-01-04', value: 45 },  // 45% complete
    { date: '2024-01-05', value: 100 }, // 100% complete
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Weekly Progress (%)</Text>
      <Heatmap
        data={weeklyData}
        startDate={new Date('2024-01-01')}
        endDate={new Date('2024-01-07')}
        colorScheme="cool"
        layout="weekly"
        cellSize={35}
        cellSpacing={3}
        showTooltip={true}
        animated={true}
        animationType="scale"
        onCellPress={(date, value) => {
          console.log(`Progress on ${date}: ${value}%`);
        }}
      />
    </View>
  );
};
```

## 3. Monthly Habit Tracker

Track habits with different color schemes:

```tsx
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Heatmap } from '@dt-workspace/react-native-heatmap';

const HabitTracker = () => {
  const [selectedHabit, setSelectedHabit] = useState('water');

  const habits = {
    water: {
      data: [
        { date: '2024-01-01', value: 8 },  // 8 glasses
        { date: '2024-01-02', value: 6 },  // 6 glasses
        { date: '2024-01-03', value: 10 }, // 10 glasses
        { date: '2024-01-04', value: 7 },  // 7 glasses
        { date: '2024-01-05', value: 9 },  // 9 glasses
      ],
      colorScheme: 'cool',
      title: 'Water Intake (glasses)',
    },
    exercise: {
      data: [
        { date: '2024-01-01', value: 45 }, // 45 minutes
        { date: '2024-01-02', value: 30 }, // 30 minutes
        { date: '2024-01-03', value: 60 }, // 60 minutes
        { date: '2024-01-04', value: 0 },  // Rest day
        { date: '2024-01-05', value: 75 }, // 75 minutes
      ],
      colorScheme: 'heat',
      title: 'Exercise (minutes)',
    },
    reading: {
      data: [
        { date: '2024-01-01', value: 25 }, // 25 pages
        { date: '2024-01-02', value: 45 }, // 45 pages
        { date: '2024-01-03', value: 30 }, // 30 pages
        { date: '2024-01-04', value: 60 }, // 60 pages
        { date: '2024-01-05', value: 15 }, // 15 pages
      ],
      colorScheme: 'purple',
      title: 'Reading (pages)',
    },
  };

  const currentHabit = habits[selectedHabit];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Habit Tracker</Text>
      
      <View style={styles.buttonContainer}>
        {Object.keys(habits).map((habit) => (
          <TouchableOpacity
            key={habit}
            style={[
              styles.button,
              selectedHabit === habit && styles.activeButton,
            ]}
            onPress={() => setSelectedHabit(habit)}
          >
            <Text style={[
              styles.buttonText,
              selectedHabit === habit && styles.activeButtonText,
            ]}>
              {habit.charAt(0).toUpperCase() + habit.slice(1)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.subtitle}>{currentHabit.title}</Text>
      
      <Heatmap
        data={currentHabit.data}
        startDate={new Date('2024-01-01')}
        endDate={new Date('2024-01-31')}
        colorScheme={currentHabit.colorScheme}
        layout="monthly"
        cellSize={25}
        cellSpacing={2}
        showTooltip={true}
        animated={true}
        animationType="fade"
        animationDuration={300}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15,
    color: '#666',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 8,
    marginRight: 10,
  },
  activeButton: {
    backgroundColor: '#007AFF',
  },
  buttonText: {
    color: '#333',
  },
  activeButtonText: {
    color: 'white',
  },
});
```

## 4. Team Performance Dashboard

Visualize team performance with custom styling:

```tsx
import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Heatmap } from '@dt-workspace/react-native-heatmap';

const TeamPerformance = () => {
  const performanceData = [
    { date: '2024-01-01', value: 85 },  // 85% efficiency
    { date: '2024-01-02', value: 92 },  // 92% efficiency
    { date: '2024-01-03', value: 78 },  // 78% efficiency
    { date: '2024-01-04', value: 95 },  // 95% efficiency
    { date: '2024-01-05', value: 88 },  // 88% efficiency
  ];

  const taskCompletionData = [
    { date: '2024-01-01', value: 12 }, // 12 tasks completed
    { date: '2024-01-02', value: 15 }, // 15 tasks completed
    { date: '2024-01-03', value: 8 },  // 8 tasks completed
    { date: '2024-01-04', value: 18 }, // 18 tasks completed
    { date: '2024-01-05', value: 14 }, // 14 tasks completed
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Team Performance Dashboard</Text>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Team Efficiency (%)</Text>
        <Heatmap
          data={performanceData}
          startDate={new Date('2024-01-01')}
          endDate={new Date('2024-01-31')}
          colorScheme="gitlab"
          layout="weekly"
          cellSize={30}
          cellSpacing={2}
          showTooltip={true}
          animated={true}
          onCellPress={(date, value) => {
            console.log(`Efficiency on ${date}: ${value}%`);
          }}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Tasks Completed</Text>
        <Heatmap
          data={taskCompletionData}
          startDate={new Date('2024-01-01')}
          endDate={new Date('2024-01-31')}
          colorScheme="bitbucket"
          layout="weekly"
          cellSize={30}
          cellSpacing={2}
          showTooltip={true}
          animated={true}
          onCellPress={(date, value) => {
            console.log(`Tasks completed on ${date}: ${value}`);
          }}
        />
      </View>
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
    marginBottom: 30,
    textAlign: 'center',
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15,
    color: '#333',
  },
});
```

## 5. Compact Timeline View

Create a compact timeline for small spaces:

```tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Heatmap } from '@dt-workspace/react-native-heatmap';

const CompactTimeline = () => {
  const timelineData = [
    { date: '2024-01-01', value: 3 },
    { date: '2024-01-02', value: 7 },
    { date: '2024-01-03', value: 2 },
    { date: '2024-01-04', value: 9 },
    { date: '2024-01-05', value: 5 },
    { date: '2024-01-06', value: 1 },
    { date: '2024-01-07', value: 6 },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>This Week's Activity</Text>
      <Heatmap
        data={timelineData}
        startDate={new Date('2024-01-01')}
        endDate={new Date('2024-01-07')}
        colorScheme="github"
        layout="compact"
        cellSize={15}
        cellSpacing={1}
        showTooltip={true}
        animated={true}
        animationType="slide"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    margin: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
    color: '#333',
  },
});
```

## 6. Custom Color Scheme

Create a heatmap with custom colors:

```tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Heatmap } from '@dt-workspace/react-native-heatmap';

const CustomColorHeatmap = () => {
  const customData = [
    { date: '2024-01-01', value: 1 },
    { date: '2024-01-02', value: 2 },
    { date: '2024-01-03', value: 3 },
    { date: '2024-01-04', value: 4 },
    { date: '2024-01-05', value: 5 },
  ];

  const customColorScheme = {
    0: '#f0f0f0',    // Empty/no data
    1: '#ffebee',    // Light red
    2: '#ffcdd2',    // Medium-light red
    3: '#ef5350',    // Medium red
    4: '#d32f2f',    // Dark red
    5: '#b71c1c',    // Very dark red
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Custom Color Scheme</Text>
      <Heatmap
        data={customData}
        startDate={new Date('2024-01-01')}
        endDate={new Date('2024-01-31')}
        colorScheme={customColorScheme}
        layout="calendar"
        cellSize={25}
        cellSpacing={2}
        showTooltip={true}
        animated={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
});
```

## Common Patterns

### Data Generation Helper

```tsx
const generateSampleData = (startDate, endDate, maxValue = 10) => {
  const data = [];
  const start = new Date(startDate);
  const end = new Date(endDate);
  
  for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
    data.push({
      date: d.toISOString().split('T')[0],
      value: Math.floor(Math.random() * (maxValue + 1)),
    });
  }
  
  return data;
};
```

### Responsive Cell Sizing

```tsx
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const cellSize = Math.max(12, Math.min(25, width / 20)); // Responsive cell size
```

### Date Range Helpers

```tsx
const getDateRange = (months = 1) => {
  const end = new Date();
  const start = new Date();
  start.setMonth(start.getMonth() - months);
  return { start, end };
};
```

## Next Steps

- **Advanced Features**: Learn about [animations](../advanced/animations) and [gesture handling](../advanced/gestures-touch)
- **Layout Options**: Explore different [layout types](../layouts/time-based/daily-layout)
- **API Reference**: Check the complete [component API](../api/heatmap-component)
- **Real-world Examples**: See [practical use cases](../examples/github-contribution-calendar)