import React from 'react';
import ProductPage from '@site/src/components/ProductPage';

export default function WristCamera() {
  return (
    <ProductPage
      title="腕部相机"
      description="腕部相机 — 1080P 超轻量末端视觉模组，35g，灵巧操作视觉引导"
      category="相机产品"
      categoryTo="/docs/cameras/overview"
      accent="#10b981"
      tagline="超轻量末端集成视觉模组"
      intro="仅重 35g，1080P 60fps 高帧率，8cm 近距离自动对焦，为灵巧操作与抓取提供末端视觉引导，标配 ROS2 驱动即插即用。"
      illustration="wrist-camera"
      keySpecs={[
        {label: '重量', value: '仅 35g'},
        {label: '分辨率', value: '1080P@60fps'},
        {label: '视场角', value: '90° × 60°'},
        {label: '接口', value: 'USB 3.0'},
      ]}
      highlights={[
        {icon: '🪶', title: '超轻设计', desc: '仅 35g，几乎不影响机械臂末端负载。'},
        {icon: '🎬', title: '高帧率', desc: '60fps 流畅画面，适配动态抓取场景。'},
        {icon: '🔍', title: '微距对焦', desc: '8cm 近距离自动对焦，看清操作细节。'},
        {icon: '🐍', title: 'ROS2 驱动', desc: '标配 sensor_msgs 驱动，开箱即用。'},
      ]}
      specs={[
        {label: '传感器', value: '1/2.8" CMOS'},
        {label: '分辨率', value: '1920×1080 @ 60fps'},
        {label: '视场角', value: '90° × 60°'},
        {label: '重量', value: '仅 35g'},
        {label: '对焦', value: '8cm ~ ∞ 自动对焦'},
        {label: '接口', value: 'USB 3.0 Type-C'},
      ]}
      docsUrl="/docs/cameras/wrist/overview"
      docsLabel="查看教程"
      related={[
        {name: 'SO-ARM101 机械臂', desc: '腕部相机的推荐搭载平台', to: '/products/so-arm101'},
        {name: '固定相机', desc: '2K 全局感知相机，覆盖工作区场景', to: '/products/fixed-camera'},
        {name: '双相机', desc: '双目立体视觉，提供实时深度图', to: '/products/dual-camera'},
      ]}
    />
  );
}
