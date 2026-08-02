import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function DualCamera() {
  return (
    <Layout title="双相机" description="双相机 — 双目立体视觉，深度估计与SLAM">
      <main className="container margin-vert--lg" style={{maxWidth: 800}}>
        <span style={{fontSize: '0.75rem', fontWeight: 700, color: '#10b981', textTransform: 'uppercase', letterSpacing: '0.12em'}}>相机产品</span>
        <h1 style={{fontSize: '2.25rem', fontWeight: 900, letterSpacing: '-0.03em', marginTop: '0.5rem'}}>双相机</h1>
        <p style={{fontSize: '1.05rem', color: '#64748b', lineHeight: 1.7}}>双目立体视觉模组，提供实时深度图与点云，适用于 SLAM 与 3D 重建。</p>

        <h2 style={{marginTop: '2.5rem', fontSize: '1.4rem', fontWeight: 700}}>技术规格</h2>
        <table><tbody>
          <tr><td>传感器</td><td>2× 1/2.8" CMOS</td></tr>
          <tr><td>分辨率</td><td>2× 1920×1080 @ 30fps</td></tr>
          <tr><td>基线距离</td><td>65mm</td></tr>
          <tr><td>深度范围</td><td>0.3m ~ 10m</td></tr>
          <tr><td>重量</td><td>120g</td></tr>
          <tr><td>接口</td><td>USB 3.0 Type-C</td></tr>
        </tbody></table>

        <h2 style={{marginTop: '2.5rem', fontSize: '1.4rem', fontWeight: 700}}>亮点</h2>
        <ul style={{lineHeight: 2}}>
          <li>实时深度估计，30fps 深度图输出</li>
          <li>65mm 基线，类人眼双目布局</li>
          <li>配套标定工具，一键完成双目校准</li>
          <li>适用于 SLAM、3D 重建、深度引导抓取</li>
        </ul>

        <div style={{textAlign: 'right', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid #e2e8f0'}}>
          <Link to="/docs/cameras/dual/overview" className="button button--primary">📖 查看教程 →</Link>
        </div>
      </main>
    </Layout>
  );
}
