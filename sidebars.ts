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
            {
              type: 'category',
              label: '📚 完整教程',
              link: {type: 'doc', id: 'lerobot/so-arm101/tutorials'},
              items: [
                {
                  type: 'category',
                  label: '一、概述与简介',
                  items: [
                    'lerobot/so-arm101/tutorials/1-1-lerobot-intro',
                    'lerobot/so-arm101/tutorials/1-2-so101-intro',
                    'lerobot/so-arm101/tutorials/1-3-hardware-specs',
                  ],
                },
                {
                  type: 'category',
                  label: '二、硬件准备',
                  items: [
                    'lerobot/so-arm101/tutorials/2-1-bom',
                    'lerobot/so-arm101/tutorials/2-2-3d-printing',
                    'lerobot/so-arm101/tutorials/2-3-purchase',
                  ],
                },
                {
                  type: 'category',
                  label: '三、环境安装',
                  items: [
                    'lerobot/so-arm101/tutorials/3-1-mac-install',
                    'lerobot/so-arm101/tutorials/3-2-ubuntu-install',
                    'lerobot/so-arm101/tutorials/3-3-windows-install',
                  ],
                },
                {
                  type: 'category',
                  label: '四、组装与配置指南',
                  items: [
                    'lerobot/so-arm101/tutorials/4-1-unboxing',
                    'lerobot/so-arm101/tutorials/4-2-servo-prep',
                    'lerobot/so-arm101/tutorials/4-3-serial-port',
                    'lerobot/so-arm101/tutorials/4-4-servo-id',
                    'lerobot/so-arm101/tutorials/4-5-assemble-follower',
                    'lerobot/so-arm101/tutorials/4-6-assemble-leader',
                    'lerobot/so-arm101/tutorials/4-7-calibration',
                    'lerobot/so-arm101/tutorials/4-8-camera-setup',
                    'lerobot/so-arm101/tutorials/4-9-debug-verify',
                  ],
                },
                {
                  type: 'category',
                  label: '五、遥操作',
                  items: [
                    'lerobot/so-arm101/tutorials/5-1-basic-teleop',
                    'lerobot/so-arm101/tutorials/5-2-camera-teleop',
                  ],
                },
                {
                  type: 'category',
                  label: '六、数据集',
                  items: [
                    'lerobot/so-arm101/tutorials/6-1-data-collection',
                    'lerobot/so-arm101/tutorials/6-2-dataset-tools',
                    'lerobot/so-arm101/tutorials/6-3-huggingface',
                  ],
                },
                {
                  type: 'category',
                  label: '七、模型训练',
                  items: [
                    'lerobot/so-arm101/tutorials/7-1-training-overview',
                    'lerobot/so-arm101/tutorials/7-2-act',
                    'lerobot/so-arm101/tutorials/7-3-smolvla',
                    'lerobot/so-arm101/tutorials/7-4-diffusion-policy',
                    'lerobot/so-arm101/tutorials/7-5-pi0',
                    'lerobot/so-arm101/tutorials/7-6-cloud-gpu',
                  ],
                },
                {
                  type: 'category',
                  label: '八、模型推理与部署',
                  items: [
                    'lerobot/so-arm101/tutorials/8-1-inference-commands',
                    'lerobot/so-arm101/tutorials/8-2-command-summary',
                    'lerobot/so-arm101/tutorials/8-3-jetson-orin',
                    'lerobot/so-arm101/tutorials/8-4-gr00t-thor',
                  ],
                },
                {
                  type: 'category',
                  label: '九、进阶应用',
                  items: [
                    'lerobot/so-arm101/tutorials/9-1-xlerobot',
                    'lerobot/so-arm101/tutorials/9-2-lekiwi',
                  ],
                },
                {
                  type: 'category',
                  label: '十、故障排除',
                  items: [
                    'lerobot/so-arm101/tutorials/10-1-faq',
                  ],
                },
              ],
            },
            'lerobot/so-arm101/faq',
          ],
        },
        {
          type: 'category',
          label: '🔧 Lekiwi 底盘',
          link: {type: 'doc', id: 'lerobot/lekiwi/overview'},
          items: [
            'lerobot/lekiwi/overview',
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
        {
          type: 'category',
          label: '✋ AmazingHand 灵巧手',
          link: {type: 'doc', id: 'lerobot/amazinghand/overview'},
          items: [
            'lerobot/amazinghand/overview',
            'lerobot/amazinghand/quickstart',
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
        'cameras/sdk',
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
