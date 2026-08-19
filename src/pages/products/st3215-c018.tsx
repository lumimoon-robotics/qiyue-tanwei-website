import React from 'react';
import ProductPage from '@site/src/components/ProductPage';

export default function C018() {
  return (
    <ProductPage
      title="ST3215 C018"
      description="ST3215 C018 — 标准型智能总线舵机，15kg·cm"
      category="舵机产品"
      categoryTo="/docs/servos/overview"
      accent="#f59e0b"
      tagline="标准型智能总线舵机"
      intro="15kg·cm 扭矩与 0.15s/60° 速度的平衡之选，RS485 总线多机通信，实时回传位置、速度、扭矩、温度，适用于通用机器人关节。"
      illustration="servo"
      keySpecs={[
        {label: '扭矩', value: '15 kg·cm'},
        {label: '速度', value: '0.15 s/60°'},
        {label: '精度', value: '0.3°'},
        {label: '重量', value: '85g'},
      ]}
      highlights={[
        {icon: '⚙️', title: '扭矩速度均衡', desc: '兼顾扭矩与响应速度，通用关节的理想选择。'},
        {icon: '🔌', title: 'RS485 总线', desc: '单总线最多 254 节点，简化布线。'},
        {icon: '📊', title: '完整反馈', desc: '实时回传位置、速度、扭矩、温度四项数据。'},
        {icon: '⚡', title: '宽压兼容', desc: '6V-12V 宽压供电，兼容 2S-3S 锂电池。'},
      ]}
      specs={[
        {label: '扭矩', value: '15 kg·cm'},
        {label: '速度', value: '0.15 s/60°'},
        {label: '精度', value: '0.3°'},
        {label: '电压', value: '6V - 12V'},
        {label: '通信', value: 'RS485 总线'},
        {label: '重量', value: '85g'},
      ]}
      docsUrl="/docs/servos/st3215-c018"
      docsLabel="查看教程"
      related={[
        {name: 'ST3215 C001', desc: '高扭矩型，20kg·cm，重载关节', to: '/products/st3215-c001'},
        {name: 'ST3215 C044', desc: '高速型，0.10s/60°，快速分拣', to: '/products/st3215-c044'},
        {name: 'SCS0009', desc: '微型舵机，5kg·cm，精密微型应用', to: '/products/scs0009'},
      ]}
    />
  );
}
