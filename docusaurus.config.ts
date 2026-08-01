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
  baseUrl: '/qiyue-tanwei-website/',

  organizationName: 'lumimoon-robotics',
  projectName: 'qiyue-tanwei-website',

  onBrokenLinks: 'warn',
  onBrokenAnchors: 'warn',

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans', 'en'],
    localeConfigs: {
      'zh-Hans': {label: '简体中文', direction: 'ltr'},
      en: {label: 'English', direction: 'ltr'},
    },
  },

  markdown: {
    mermaid: true,
  },

  themes: ['@docusaurus/theme-mermaid'],

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
              label: '🤖 LeRobot 开源硬件',
              to: '/docs/lerobot/overview',
              children: [
                {label: 'SO-ARM101 机械臂', to: '/docs/lerobot/so-arm101/overview'},
                {label: 'Lekiwi 底盘', to: '/docs/lerobot/lekiwi/overview'},
                {label: 'Xlerobot 家务机器人', to: '/docs/lerobot/xlerobot/overview'},
              ],
            },
            {
              label: '📷 相机产品',
              to: '/docs/cameras/overview',
              children: [
                {label: '腕部相机', to: '/docs/cameras/wrist/overview'},
                {label: '固定相机', to: '/docs/cameras/fixed/overview'},
                {label: '双相机', to: '/docs/cameras/dual/overview'},
              ],
            },
            {
              label: '⚙️ 舵机产品',
              to: '/docs/servos/overview',
              children: [
                {label: 'ST3215 C018', to: '/docs/servos/st3215-c018'},
                {label: 'ST3215 C001', to: '/docs/servos/st3215-c001'},
                {label: 'ST3215 C044', to: '/docs/servos/st3215-c044'},
                {label: 'ST3215 C046', to: '/docs/servos/st3215-c046'},
                {label: 'SCS0009', to: '/docs/servos/scs0009'},
              ],
            },
          ],
        },
        {
          type: 'dropdown',
          label: '教程',
          position: 'left',
          items: [
            {
              label: '🤖 LeRobot 开源硬件',
              to: '/docs/lerobot/overview',
              children: [
                {label: 'SO-ARM101 机械臂', to: '/docs/lerobot/so-arm101/overview'},
                {label: 'Lekiwi 底盘', to: '/docs/lerobot/lekiwi/overview'},
                {label: 'Xlerobot 家务机器人', to: '/docs/lerobot/xlerobot/overview'},
              ],
            },
            {
              label: '📷 相机产品',
              to: '/docs/cameras/overview',
              children: [
                {label: '腕部相机', to: '/docs/cameras/wrist/overview'},
                {label: '固定相机', to: '/docs/cameras/fixed/overview'},
                {label: '双相机', to: '/docs/cameras/dual/overview'},
              ],
            },
            {
              label: '⚙️ 舵机产品',
              to: '/docs/servos/overview',
              children: [
                {label: 'ST3215 C018', to: '/docs/servos/st3215-c018'},
                {label: 'ST3215 C001', to: '/docs/servos/st3215-c001'},
                {label: 'ST3215 C044', to: '/docs/servos/st3215-c044'},
                {label: 'ST3215 C046', to: '/docs/servos/st3215-c046'},
                {label: 'SCS0009', to: '/docs/servos/scs0009'},
              ],
            },
          ],
        },
        {to: '/about', label: '关于我们', position: 'left'},
        {
          href: 'https://aozldimvsb4qk5ct-x1oeddvzwb01u.taobao.com/',
          label: '🛒 商店',
          position: 'right',
          className: 'navbar__link--store',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
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
            {label: 'LeRobot 开源硬件', to: '/docs/lerobot/overview'},
            {label: '相机产品', to: '/docs/cameras/overview'},
            {label: '舵机产品', to: '/docs/servos/overview'},
          ],
        },
        {
          title: '资源',
          items: [
            {label: '教程中心', to: '/docs/intro'},
            {label: '🛒 淘宝店铺', href: 'https://aozldimvsb4qk5ct-x1oeddvzwb01u.taobao.com/'},
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
