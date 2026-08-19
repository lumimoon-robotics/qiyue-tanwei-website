import React from 'react';
import ProductPage from '@site/src/components/ProductPage';

export default function SoArm101() {
  return (
    <ProductPage
      title="SO-ARM101 桌面机械臂"
      description="SO-ARM101 — 6+1 自由度桌面级开源机械臂，全开源 CAD 与 SDK"
      category="LeRobot 开源硬件"
      categoryTo="/docs/lerobot/overview"
      accent="#6366f1"
      tagline="面向教育与科研的轻量级开源机械臂"
      intro="6+1 自由度设计，全开源 CAD 与 SDK，15 分钟快速上手。支持位置、速度、力矩三种控制模式，是机器人入门与具身智能科研的理想平台。"
      image="img/so-arm101.png"
      keySpecs={[
        {label: '自由度', value: '6 + 1'},
        {label: '有效载荷', value: '≥ 500g'},
        {label: '重复精度', value: '±0.5mm'},
        {label: '自重', value: '~3.5kg'},
      ]}
      highlights={[
        {icon: '📐', title: '全开源设计', desc: 'CAD 设计文件、BOM 清单、PCB 图纸全部按 Apache 2.0 协议开放。'},
        {icon: '🤖', title: 'ROS2 原生', desc: '提供 URDF 模型与 MoveIt 配置，无缝接入 Gazebo 仿真。'},
        {icon: '🐍', title: 'Python SDK', desc: '简洁的 Python 接口，15 分钟快速上手第一个控制 Demo。'},
        {icon: '🎛️', title: '三模式控制', desc: '支持位置、速度、力矩三种控制模式，满足不同研究需求。'},
      ]}
      specs={[
        {label: '自由度', value: '6 + 1（夹爪）'},
        {label: '有效载荷', value: '≥ 500g'},
        {label: '工作半径', value: '≥ 350mm'},
        {label: '重复定位精度', value: '±0.5mm'},
        {label: '自重', value: '~3.5kg'},
        {label: '软件平台', value: 'ROS2 Humble / Python 3.10+'},
      ]}
      docsUrl="/docs/lerobot/so-arm101/quickstart"
      docsLabel="查看教程"
      related={[
        {name: 'AmazingHand 灵巧手', desc: '五指触觉灵巧手，可搭载于 SO-ARM101 末端', to: '/products/amazinghand'},
        {name: 'Lekiwi 底盘', desc: '全向移动底盘，可与机械臂组合为移动操作平台', to: '/products/lekiwi'},
        {name: '腕部相机', desc: '35g 超轻末端相机，为抓取提供视觉引导', to: '/products/wrist-camera'},
      ]}
    />
  );
}
