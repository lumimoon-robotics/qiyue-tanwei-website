import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  productSidebar: [
    'intro',
    {
      type: 'category',
      label: '🤖 LeRobot 开源硬件',
      link: {type: 'doc', id: 'lerobot/overview'},
      items: [
        {
          type: 'category',
          label: '🦾 SO-ARM101 机械臂',
          link: {type: 'doc', id: 'lerobot/so-arm101/overview'},
          items: [
            'lerobot/so-arm101/overview',
            'lerobot/so-arm101/quickstart',
            'lerobot/so-arm101/faq',
          ],
        },
        {
          type: 'category',
          label: '🔧 Lekiwi 底盘',
          link: {type: 'doc', id: 'lerobot/lekiwi/overview'},
          items: [
            'lerobot/lekiwi/overview',
            'lerobot/lekiwi/quickstart',
            'lerobot/lekiwi/bom',
            'lerobot/lekiwi/3d-printing',
            'lerobot/lekiwi/assembly',
            'lerobot/lekiwi/software-setup',
            'lerobot/lekiwi/motor-config',
            'lerobot/lekiwi/calibration',
            'lerobot/lekiwi/teleoperation',
            'lerobot/lekiwi/camera-setup',
            'lerobot/lekiwi/data-collection',
            'lerobot/lekiwi/visualization',
            'lerobot/lekiwi/training',
            'lerobot/lekiwi/troubleshooting',
          ],
        },
        {
          type: 'category',
          label: '🤖 Xlerobot 家务机器人',
          link: {type: 'doc', id: 'lerobot/xlerobot/overview'},
          items: [
            'lerobot/xlerobot/overview',
            'lerobot/xlerobot/quickstart',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '📷 相机产品',
      link: {type: 'doc', id: 'cameras/overview'},
      items: [
        'cameras/wrist/overview',
        'cameras/fixed/overview',
        'cameras/dual/overview',
      ],
    },
    {
      type: 'category',
      label: '⚙️ 舵机产品',
      link: {type: 'doc', id: 'servos/overview'},
      items: [
        'servos/st3215-c018',
        'servos/st3215-c001',
        'servos/st3215-c044',
        'servos/st3215-c046',
        'servos/scs0009',
      ],
    },
  ],
};

export default sidebars;
