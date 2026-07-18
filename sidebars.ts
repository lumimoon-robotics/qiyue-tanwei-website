import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  productSidebar: [
    'intro',
    {
      type: 'category',
      label: '🦾 SO-ARM101 机械臂',
      link: {type: 'doc', id: 'so-arm101/overview'},
      items: [
        'so-arm101/overview',
        'so-arm101/quickstart',
        'so-arm101/faq',
      ],
    },
    {
      type: 'category',
      label: '🔧 Lekiwi 底盘',
      link: {type: 'doc', id: 'lekiwi/overview'},
      items: [
        'lekiwi/overview',
        'lekiwi/quickstart',
      ],
    },
    {
      type: 'category',
      label: '🤖 Xlerobot 家务机器人',
      link: {type: 'doc', id: 'xlerobot/overview'},
      items: [
        'xlerobot/overview',
        'xlerobot/quickstart',
      ],
    },
    {
      type: 'category',
      label: '✋ AmazingHand 灵巧手',
      link: {type: 'doc', id: 'amazinghand/overview'},
      items: [
        'amazinghand/overview',
        'amazinghand/quickstart',
      ],
    },
  ],
};

export default sidebars;
