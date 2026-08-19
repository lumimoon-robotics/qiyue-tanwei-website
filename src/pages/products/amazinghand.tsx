import React from 'react';
import ProductPage from '@site/src/components/ProductPage';

export default function AmazingHand() {
  return (
    <ProductPage
      title="AmazingHand 灵巧手"
      description="AmazingHand — 五指触觉灵巧手，16 自由度，120 触觉单元"
      category="LeRobot 开源硬件"
      categoryTo="/docs/lerobot/overview"
      accent="#6366f1"
      tagline="五指触觉灵巧手 · 16 自由度"
      intro="5 指 16 自由度仿人手运动学，120 个触觉单元实时力反馈，力控精度 ±0.1N，兼容 SO-ARM101、UR、Kinova 等主流机械臂。"
      image="img/amazinghand.png"
      keySpecs={[
        {label: '自由度', value: '16'},
        {label: '触觉单元', value: '120 个'},
        {label: '力控精度', value: '±0.1N'},
        {label: '自重', value: '~1.1kg'},
      ]}
      highlights={[
        {icon: '✋', title: '仿人运动学', desc: '5 指 16 自由度，拇指 4 自由度，复现人手灵活抓取。'},
        {icon: '🖐️', title: '触觉反馈', desc: '120 个触觉单元实时反馈，实现精细力控操作。'},
        {icon: '🔌', title: '即插即用', desc: 'CAN / RS485 / USB 多接口，兼容主流机械臂。'},
        {icon: '📐', title: '全开源', desc: 'CAD + 驱动 + 控制算法全部开源，二次开发自由。'},
      ]}
      specs={[
        {label: '自由度', value: '16（拇指4 + 食指3 + 中指3 + 无名指3 + 小指3）'},
        {label: '指尖力范围', value: '0-15N'},
        {label: '触觉分辨率', value: '24 点/指尖（共 120 个触觉单元）'},
        {label: '力控精度', value: '±0.1N'},
        {label: '自重', value: '~1.1kg'},
        {label: '通信接口', value: 'CAN / RS485 / USB'},
      ]}
      docsUrl="/docs/lerobot/amazinghand/overview"
      docsLabel="查看教程"
      related={[
        {name: 'SO-ARM101 机械臂', desc: 'AmazingHand 的推荐搭载平台', to: '/products/so-arm101'},
        {name: 'Xlerobot 家务机器人', desc: '双臂服务机器人，适配精细家务操作', to: '/products/xlerobot'},
        {name: 'ST3215 C046', desc: '高精度舵机，可用于灵巧手关节驱动', to: '/products/st3215-c046'},
      ]}
    />
  );
}
