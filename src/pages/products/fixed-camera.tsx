import React from 'react';
import ProductPage from '@site/src/components/ProductPage';

export default function FixedCamera() {
  return (
    <ProductPage
      title="固定相机"
      description="固定相机 — 2K 分辨率全局感知相机，120° 超广角"
      category="相机产品"
      categoryTo="/docs/cameras/overview"
      accent="#10b981"
      tagline="高分辨率全局感知相机"
      intro="2K 分辨率 + 120° 超广角，单相机即可覆盖大面积工作区；支持磁吸与标准螺孔多种安装方式，GigE 接口实现远距离传输。"
      illustration="fixed-camera"
      keySpecs={[
        {label: '分辨率', value: '2K@30fps'},
        {label: '视场角', value: '120° × 80°'},
        {label: '重量', value: '85g'},
        {label: '接口', value: 'USB3.0/GigE'},
      ]}
      highlights={[
        {icon: '🔭', title: '2K 清晰', desc: '2560×1440 高分辨率，清晰捕捉场景细节。'},
        {icon: '🌐', title: '超广角', desc: '120° 超广角，单相机覆盖大面积工作区。'},
        {icon: '🔧', title: '灵活安装', desc: '1/4" 标准螺孔 + 磁吸底座，部署灵活。'},
        {icon: '📡', title: 'GigE 远传', desc: '支持 GigE 接口，满足远距离稳定传输。'},
      ]}
      specs={[
        {label: '传感器', value: '1/2.3" CMOS'},
        {label: '分辨率', value: '2560×1440 @ 30fps'},
        {label: '视场角', value: '120° × 80°'},
        {label: '重量', value: '85g'},
        {label: '安装', value: '1/4" 标准螺孔 + 磁吸底座'},
        {label: '接口', value: 'USB 3.0 / GigE'},
      ]}
      docsUrl="/docs/cameras/fixed/overview"
      docsLabel="查看教程"
      related={[
        {name: 'Lekiwi 底盘', desc: '移动机器人场景感知的推荐搭配', to: '/products/lekiwi'},
        {name: '腕部相机', desc: '末端精细操作视觉引导', to: '/products/wrist-camera'},
        {name: '双相机', desc: '双目立体视觉，深度估计方案', to: '/products/dual-camera'},
      ]}
    />
  );
}
