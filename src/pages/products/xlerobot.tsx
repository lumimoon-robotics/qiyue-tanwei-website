import React from 'react';
import ProductPage from '@site/src/components/ProductPage';

export default function Xlerobot() {
  return (
    <ProductPage
      title="Xlerobot 家务机器人"
      description="Xlerobot — AI 驱动的双臂服务机器人，端侧推理 + 模仿学习"
      category="LeRobot 开源硬件"
      categoryTo="/docs/lerobot/overview"
      accent="#6366f1"
      tagline="AI 驱动的双臂服务机器人"
      intro="双臂协作 + 端侧 AI 推理，视觉-语言模型驱动自然语言交互，模仿学习框架通过遥操作示教快速部署新技能。"
      image="img/xlerobot.png"
      keySpecs={[
        {label: '双臂', value: '7 DoF × 2'},
        {label: '身高', value: '1.45m'},
        {label: '续航', value: '6-8h'},
        {label: '计算', value: 'Jetson Orin'},
      ]}
      highlights={[
        {icon: '🧠', title: '端侧 AI 推理', desc: '毫秒级场景理解，数据不出本地，保护隐私。'},
        {icon: '💬', title: '视觉-语言交互', desc: '视觉-语言模型驱动，自然语言指令即可操控。'},
        {icon: '🎓', title: '模仿学习', desc: '遥操作示教 + 模仿学习框架，快速部署新技能。'},
        {icon: '🛡️', title: '安全人机协作', desc: '碰撞检测 + 力矩限制，与人类安全共处。'},
      ]}
      specs={[
        {label: '自由度', value: '双臂各 7 DoF + 腰部 2 DoF（可选）'},
        {label: '移动平台', value: 'Lekiwi 全向底盘'},
        {label: '高度', value: '1.45m'},
        {label: '自重', value: '~45kg'},
        {label: '续航', value: '6-8 小时'},
        {label: '计算平台', value: 'Jetson Orin / 高通 RB6'},
      ]}
      docsUrl="/docs/lerobot/xlerobot/quickstart"
      docsLabel="查看教程"
      related={[
        {name: 'Lekiwi 底盘', desc: 'Xlerobot 的移动底座，提供全向移动能力', to: '/products/lekiwi'},
        {name: '双相机', desc: '双目立体视觉，为机器人提供深度感知', to: '/products/dual-camera'},
        {name: 'AmazingHand 灵巧手', desc: '16 自由度灵巧手，适配精细家务操作', to: '/products/amazinghand'},
      ]}
    />
  );
}
