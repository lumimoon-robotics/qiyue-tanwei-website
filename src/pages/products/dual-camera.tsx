import React from 'react';
import ProductPage from '@site/src/components/ProductPage';

export default function DualCamera() {
  return (
    <ProductPage
      title="双相机"
      description="双相机 — 双目立体视觉模组，实时深度图与点云，SLAM 与 3D 重建"
      category="相机产品"
      categoryTo="/docs/cameras/overview"
      accent="#10b981"
      tagline="双目立体视觉模组"
      intro="65mm 类人眼基线，实时 30fps 深度图与点云输出，配套标定工具一键完成双目校准，适用于 SLAM、3D 重建与深度引导抓取。"
      illustration="dual-camera"
      keySpecs={[
        {label: '基线距离', value: '65mm'},
        {label: '深度范围', value: '0.3-10m'},
        {label: '深度帧率', value: '30fps'},
        {label: '重量', value: '120g'},
      ]}
      highlights={[
        {icon: '👁️', title: '实时深度', desc: '30fps 深度图输出，实时感知三维环境。'},
        {icon: '📏', title: '类人眼基线', desc: '65mm 基线，模拟人眼双目布局。'},
        {icon: '🎯', title: '一键标定', desc: '配套标定工具，快速完成双目校准。'},
        {icon: '🗺️', title: 'SLAM 就绪', desc: '适配 SLAM、3D 重建与深度引导抓取。'},
      ]}
      specs={[
        {label: '传感器', value: '2× 1/2.8" CMOS'},
        {label: '分辨率', value: '2× 1920×1080 @ 30fps'},
        {label: '基线距离', value: '65mm'},
        {label: '深度范围', value: '0.3m ~ 10m'},
        {label: '重量', value: '120g'},
        {label: '接口', value: 'USB 3.0 Type-C'},
      ]}
      docsUrl="/docs/cameras/dual/overview"
      docsLabel="查看教程"
      related={[
        {name: 'Xlerobot 家务机器人', desc: '双目视觉为家务机器人提供深度感知', to: '/products/xlerobot'},
        {name: '固定相机', desc: '2K 全局感知相机，广角场景覆盖', to: '/products/fixed-camera'},
        {name: '腕部相机', desc: '末端精细操作视觉引导', to: '/products/wrist-camera'},
      ]}
    />
  );
}
