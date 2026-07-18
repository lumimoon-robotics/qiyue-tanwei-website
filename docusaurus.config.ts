import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: '启月探微',
  tagline: '探微知著 · 启智未来 — 开源机器人技术与智能硬件平台',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://lumimoon.cn',
  baseUrl: '/',

  organizationName: 'lumimoon-robotics',
  projectName: 'qiyue-tanwei-website',

  onBrokenLinks: 'warn',

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/lumimoon-robotics/qiyue-tanwei-website/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: '启月探微',
      logo: {
        alt: '启月探微 Logo',
        src: 'img/logo.svg',
      },
      items: [
        {to: '/', label: '首页', position: 'left'},
        {
          type: 'dropdown',
          label: '产品',
          position: 'left',
          items: [
            {
              label: 'SO-ARM101 机械臂',
              to: '/docs/so-arm101/overview',
            },
            {
              label: 'Lekiwi 底盘',
              to: '/docs/lekiwi/overview',
            },
            {
              label: 'Xlerobot 家务机器人',
              to: '/docs/xlerobot/overview',
            },
            {
              label: 'AmazingHand 灵巧手',
              to: '/docs/amazinghand/overview',
            },
          ],
        },
        {
          type: 'docSidebar',
          sidebarId: 'productSidebar',
          position: 'left',
          label: '文档',
        },
        {to: '/about', label: '关于我们', position: 'left'},
        {
          href: 'https://github.com/lumimoon-robotics',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '产品',
          items: [
            {label: 'SO-ARM101 机械臂', to: '/docs/so-arm101/overview'},
            {label: 'Lekiwi 底盘', to: '/docs/lekiwi/overview'},
            {label: 'Xlerobot 家务机器人', to: '/docs/xlerobot/overview'},
            {label: 'AmazingHand 灵巧手', to: '/docs/amazinghand/overview'},
          ],
        },
        {
          title: '资源',
          items: [
            {label: '文档中心', to: '/docs/intro'},
            {label: 'GitHub', href: 'https://github.com/lumimoon-robotics'},
            {label: '开源硬件', href: 'https://github.com/lumimoon-robotics'},
          ],
        },
        {
          title: '关于',
          items: [
            {label: '关于我们', to: '/about'},
            {label: '联系我们', to: '/about#contact'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} 启月探微. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['python', 'bash', 'yaml', 'json'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
