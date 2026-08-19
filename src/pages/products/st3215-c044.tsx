import React from 'react';
import ProductPage from '@site/src/components/ProductPage';

export default function C044() {
  return (
    <ProductPage
      title="ST3215 C044"
      description="ST3215 C044 — 高速型智能总线舵机，0.10s/60°"
      category="舵机产品"
      categoryTo="/docs/servos/overview"
      accent="#f59e0b"
      tagline="高速型智能总线舵机"
      intro="0.10s/60° 优化转速响应，适合快速分拣与动态控制场景；RS485 总线多机通信，闭环控制 + 完整状态反馈。"
      illustration="servo"
      keySpecs={[
        {label: '速度', value: '0.10 s/60°'},
        {label: '扭矩', value: '10 kg·cm'},
        {label: '精度', value: '0.2°'},
        {label: '重量', value: '78g'},
      ]}
      highlights={[
        {icon: '⚡', title: '高速响应', desc: '0.10s/60° 转速，适合快速分拣与动态控制。'},
        {icon: '🔌', title: 'RS485 总线', desc: '单总线最多 254 节点，简化布线。'},
        {icon: '📊', title: '完整反馈', desc: '实时回传位置、速度、扭矩、温度。'},
        {icon: '⚡', title: '宽压兼容', desc: '6V-12V 宽压供电，兼容 2S-3S 锂电池。'},
      ]}
      specs={[
        {label: '扭矩', value: '10 kg·cm'},
        {label: '速度', value: '0.10 s/60°'},
        {label: '精度', value: '0.2°'},
        {label: '电压', value: '6V - 12V'},
        {label: '通信', value: 'RS485 总线'},
        {label: '重量', value: '78g'},
      ]}
      docsUrl="/docs/servos/st3215-c044"
      docsLabel="查看教程"
      related={[
        {name: 'ST3215 C018', desc: '标准型，扭矩速度均衡', to: '/products/st3215-c018'},
        {name: 'ST3215 C046', desc: '高精度型，±0.15° 精密定位', to: '/products/st3215-c046'},
        {name: 'SCS0009', desc: '微型舵机，5kg·cm', to: '/products/scs0009'},
      ]}
    />
  );
}
