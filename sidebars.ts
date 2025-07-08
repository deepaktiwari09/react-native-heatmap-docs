import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * React Native Heatmap Documentation Sidebar Configuration
 * 
 * Comprehensive navigation structure for the documentation website
 * covering all aspects of the library including getting started,
 * API reference, layout guides, examples, and advanced features.
 */

const sidebars: SidebarsConfig = {
  // Main documentation sidebar
  tutorialSidebar: [
    'intro',
    
    // Getting Started Section
    {
      type: 'category',
      label: '🚀 Getting Started',
      collapsed: false,
      items: [
        'getting-started/installation',
        'getting-started/quick-start',
        'getting-started/basic-examples',
        'getting-started/troubleshooting',
        'getting-started/migration',
      ],
    },

    // Keep existing tutorial sections for now
    {
      type: 'category',
      label: 'Tutorial - Basics',
      items: [
        'tutorial-basics/create-a-document',
        'tutorial-basics/create-a-page',
        'tutorial-basics/create-a-blog-post',
        'tutorial-basics/markdown-features',
        'tutorial-basics/deploy-your-site',
        'tutorial-basics/congratulations',
      ],
    },
    {
      type: 'category',
      label: 'Tutorial - Extras',
      items: [
        'tutorial-extras/manage-docs-versions',
        'tutorial-extras/translate-your-site',
      ],
    },

    // TODO: Add more sections as we create the documentation files
    // API Reference Section
    /*{
      type: 'category',
      label: '📚 API Reference',
      collapsed: false,
      items: [
        'api/heatmap-component',
        'api/card-layout-component',
        'api/props-reference',
        'api/utility-functions',
        'api/type-definitions',
      ],
    },*/

    // Layout Guides Section
    /*{
      type: 'category',
      label: '🎨 Layout Guides',
      collapsed: true,
      items: [
        // Time-Based Layouts
        {
          type: 'category',
          label: '⏰ Time-Based Layouts',
          items: [
            'layouts/time-based/daily-layout',
            'layouts/time-based/weekly-layout',
            'layouts/time-based/monthly-layout',
            'layouts/time-based/yearly-layout',
            'layouts/time-based/custom-range-layout',
            'layouts/time-based/timeline-scroll-layout',
            'layouts/time-based/real-time-layout',
          ],
        },
        // Card Layout System
        {
          type: 'category',
          label: '🎴 Card Layout System',
          items: [
            'layouts/card-layout/overview',
            'layouts/card-layout/configuration',
          ],
        },
        // Traditional Layouts
        {
          type: 'category',
          label: '📅 Traditional Layouts',
          items: [
            'layouts/traditional/calendar-layout',
            'layouts/traditional/grid-layout',
            'layouts/traditional/compact-layout',
          ],
        },
      ],
    },*/

    // Advanced Features Section
    /*{
      type: 'category',
      label: '⚡ Advanced Features',
      collapsed: true,
      items: [
        'advanced/animations',
        'advanced/gestures-touch',
        'advanced/tooltips',
        'advanced/theming',
        'advanced/performance',
        'advanced/accessibility',
      ],
    },*/

    // Examples and Use Cases
    /*{
      type: 'category',
      label: '💡 Examples & Use Cases',
      collapsed: true,
      items: [
        'examples/github-contribution-calendar',
        'examples/fitness-activity-tracker',
        'examples/sales-performance-dashboard',
        'examples/project-timeline',
        'examples/team-productivity',
        'examples/iot-sensor-data',
      ],
    },*/

    // Integration Guides
    /*{
      type: 'category',
      label: '🔧 Integration Guides',
      collapsed: true,
      items: [
        'integration/react-native-cli',
        'integration/expo-projects',
        'integration/typescript-setup',
        'integration/state-management',
        'integration/backend-integration',
        'integration/testing-strategies',
      ],
    },*/

    // Community Section
    /*{
      type: 'category',
      label: '🤝 Community',
      collapsed: true,
      items: [
        'community/contributing',
        'community/showcase',
        'community/support',
      ],
    },*/
  ],
};

export default sidebars;
