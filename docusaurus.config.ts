import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'React Native Heatmap',
  tagline: 'Modern, highly customizable React Native heatmap component library',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://react-native-heatmap-docs.vercel.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'deepaktiwari09', // Usually your GitHub org/user name.
  projectName: 'react-native-heatmap-docs', // Usually your repo name.

  onBrokenLinks: 'warn', // Temporarily set to warn while building documentation
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/deepaktiwari09/react-native-heatmap-docs/tree/main/',
        },
        blog: false, // Disable blog for now
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/react-native-heatmap-social-card.jpg',
    metadata: [
      {
        name: 'keywords',
        content: 'react-native, heatmap, calendar, visualization, github, contribution, chart, typescript, customizable, ios, android',
      },
      {
        name: 'description',
        content: 'A modern, highly customizable React Native heatmap component library inspired by GitHub\'s contribution calendar. Perfect for visualizing activity data and creating beautiful data representations.',
      },
      {
        property: 'og:title',
        content: 'React Native Heatmap - Modern Heatmap Component Library',
      },
      {
        property: 'og:description',
        content: 'A modern, highly customizable React Native heatmap component library inspired by GitHub\'s contribution calendar.',
      },
      {
        property: 'og:type',
        content: 'website',
      },
    ],
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'React Native Heatmap',
      logo: {
        alt: 'React Native Heatmap Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        /*{
          to: '/playground',
          label: 'Playground',
          position: 'left',
        },*/
        {
          href: 'https://www.npmjs.com/package/@dt-workspace/react-native-heatmap',
          label: 'NPM',
          position: 'right',
        },
        {
          href: 'https://github.com/dt-workspace/react-native-heatmap',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/intro',
            },
            /*{
              label: 'API Reference',
              to: '/docs/api/heatmap-component',
            },
            {
              label: 'Layout Guides',
              to: '/docs/layouts/time-based/daily-layout',
            },*/
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub Issues',
              href: 'https://github.com/dt-workspace/react-native-heatmap/issues',
            },
            {
              label: 'NPM Package',
              href: 'https://www.npmjs.com/package/@dt-workspace/react-native-heatmap',
            },
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/react-native-heatmap',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            /*{
              label: 'Playground',
              to: '/playground',
            },
            {
              label: 'Examples',
              to: '/docs/examples/github-contribution-calendar',
            },*/
            {
              label: 'GitHub Repository',
              href: 'https://github.com/dt-workspace/react-native-heatmap',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} @dt-workspace/react-native-heatmap. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'json', 'jsx', 'typescript', 'tsx'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
