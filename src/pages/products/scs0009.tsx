import React from 'react';
import ProductPage from '@site/src/components/ProductPage';

export default function SCS0009() {
  return (
    <ProductPage
      title="SCS0009"
      description="SCS0009 — 微型智能总线舵机，5kg·cm，高速响应"
      category="舵机产品"
      categoryTo="/docs/servos/overview"
      accent="#f59e0b"
      tagline="微型高速智能总线舵机"
      intro="极致轻量与高速响应，仅重 32g，0.08s/60° 转速，适合空间严苛的精密应用，如微型手指关节与云台。"
      illustration="servo-mini"
      keySpecs={[
        {label: '重量', value: '32g'},
        {label: '速度', value: '0.08 s/60°'},
        {label: '精度', value: '0.1°'},
        {label: '扭矩', value: '5 kg·cm'},
      ]}
      highlights={[
        {icon: '🪶', title: '极致轻量', desc: '仅 32g，适合空间严苛的精密微型应用。'},
        {icon: '⚡', title: '高速响应', desc: '0.08s/60° 转速，快速到位。'},
        {icon: '🔌', title: 'RS485 总线', desc: '单总线多机通信，简化布线。'},
        {icon: '📊', title: '完整反馈', desc: '实时回传位置、速度、扭矩、温度。'},
      ]}
      specs={[
        {label: '扭矩', value: '5 kg·cm'},
        {label: '速度', value: '0.08 s/60°'},
        {label: '精度', value: '0.1°'},
        {label: '电压', value: '5V - 8.4V'},
        {label: '通信', value: 'RS485 总线'},
        {label: '重量', value: '32g'},
      ]}
      docsUrl="/docs/servos/scs0009"
      docsLabel="查看教程"
      related={[
        {name: 'ST3215 C046', desc: '高精度型，±0.15° 精密定位', to: '/products/st3215-c046'},
        {name: 'ST3215 C044', desc: '高速型，0.10s/60°', to: '/products/st3215-c044'},
        {name: 'ST3215 C018', desc: '标准型，扭矩速度均衡', to: '/products/st3215-c018'},
      ]}
    />
  );
}
