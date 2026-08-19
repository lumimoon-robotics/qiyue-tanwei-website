import React from 'react';
import ProductPage from '@site/src/components/ProductPage';

export default function C046() {
  return (
    <ProductPage
      title="ST3215 C046"
      description="ST3215 C046 — 高精度智能总线舵机，±0.15°"
      category="舵机产品"
      categoryTo="/docs/servos/overview"
      accent="#f59e0b"
      tagline="高精度型智能总线舵机"
      intro="±0.15° 控制精度，适合灵巧手、精密定位等对精度要求苛刻的场景；RS485 总线多机通信，闭环控制 + 完整状态反馈。"
      illustration="servo"
      keySpecs={[
        {label: '精度', value: '0.15°'},
        {label: '扭矩', value: '18 kg·cm'},
        {label: '速度', value: '0.13 s/60°'},
        {label: '重量', value: '90g'},
      ]}
      highlights={[
        {icon: '🎯', title: '高精度', desc: '±0.15° 控制精度，胜任灵巧手与精密定位。'},
        {icon: '🔌', title: 'RS485 总线', desc: '单总线最多 254 节点，简化布线。'},
        {icon: '📊', title: '完整反馈', desc: '实时回传位置、速度、扭矩、温度。'},
        {icon: '⚡', title: '宽压兼容', desc: '6V-12V 宽压供电，兼容 2S-3S 锂电池。'},
      ]}
      specs={[
        {label: '扭矩', value: '18 kg·cm'},
        {label: '速度', value: '0.13 s/60°'},
        {label: '精度', value: '0.15°'},
        {label: '电压', value: '6V - 12V'},
        {label: '通信', value: 'RS485 总线'},
        {label: '重量', value: '90g'},
      ]}
      docsUrl="/docs/servos/st3215-c046"
      docsLabel="查看教程"
      related={[
        {name: 'AmazingHand 灵巧手', desc: '灵巧手关节驱动的推荐舵机', to: '/products/amazinghand'},
        {name: 'ST3215 C018', desc: '标准型，扭矩速度均衡', to: '/products/st3215-c018'},
        {name: 'SCS0009', desc: '微型舵机，5kg·cm', to: '/products/scs0009'},
      ]}
    />
  );
}
