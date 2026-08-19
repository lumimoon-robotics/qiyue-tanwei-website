import React from 'react';
import ProductPage from '@site/src/components/ProductPage';

export default function C001() {
  return (
    <ProductPage
      title="ST3215 C001"
      description="ST3215 C001 — 高扭矩智能总线舵机，20kg·cm"
      category="舵机产品"
      categoryTo="/docs/servos/overview"
      accent="#f59e0b"
      tagline="高扭矩型智能总线舵机"
      intro="20kg·cm 大扭矩输出，专为重载关节与足式机器人设计；RS485 总线多机通信，闭环控制 + 完整状态反馈。"
      illustration="servo"
      keySpecs={[
        {label: '扭矩', value: '20 kg·cm'},
        {label: '速度', value: '0.12 s/60°'},
        {label: '精度', value: '0.2°'},
        {label: '重量', value: '95g'},
      ]}
      highlights={[
        {icon: '💪', title: '大扭矩', desc: '20kg·cm 输出，胜任重载关节与足式机器人。'},
        {icon: '🔌', title: 'RS485 总线', desc: '单总线最多 254 节点，简化布线。'},
        {icon: '📊', title: '完整反馈', desc: '实时回传位置、速度、扭矩、温度。'},
        {icon: '⚡', title: '宽压兼容', desc: '6V-12V 宽压供电，兼容 2S-3S 锂电池。'},
      ]}
      specs={[
        {label: '扭矩', value: '20 kg·cm'},
        {label: '速度', value: '0.12 s/60°'},
        {label: '精度', value: '0.2°'},
        {label: '电压', value: '6V - 12V'},
        {label: '通信', value: 'RS485 总线'},
        {label: '重量', value: '95g'},
      ]}
      docsUrl="/docs/servos/st3215-c001"
      docsLabel="查看教程"
      related={[
        {name: 'ST3215 C018', desc: '标准型，扭矩速度均衡', to: '/products/st3215-c018'},
        {name: 'ST3215 C046', desc: '高精度型，±0.15° 精密定位', to: '/products/st3215-c046'},
        {name: 'SCS0009', desc: '微型舵机，5kg·cm', to: '/products/scs0009'},
      ]}
    />
  );
}
