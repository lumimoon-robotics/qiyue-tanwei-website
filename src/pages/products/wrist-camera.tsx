import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function WristCamera() {
  return (
    <Layout title="腕部相机" description="腕部相机 — 1080P轻量视觉模组，灵巧操作视觉引导">
      <main className="container margin-vert--lg" style={{maxWidth: 800}}>
        <span style={{fontSize: '0.75rem', fontWeight: 700, color: '#10b981', textTransform: 'uppercase', letterSpacing: '0.12em'}}>相机产品</span>
        <h1 style={{fontSize: '2.25rem', fontWeight: 900, letterSpacing: '-0.03em', marginTop: '0.5rem'}}>腕部相机</h1>
        <p style={{fontSize: '1.05rem', color: '#64748b', lineHeight: 1.7}}>超轻量末端集成相机，仅重35g，用于灵巧操作视觉引导。</p>

        <h2 style={{marginTop: '2.5rem', fontSize: '1.4rem', fontWeight: 700}}>技术规格</h2>
        <table><tbody>
          <tr><td>传感器</td><td>1/2.8" CMOS</td></tr>
          <tr><td>分辨率</td><td>1920×1080 @ 60fps</td></tr>
          <tr><td>视场角</td><td>90° × 60°</td></tr>
          <tr><td>重量</td><td>仅 35g</td></tr>
          <tr><td>对焦</td><td>8cm ~ ∞ 自动对焦</td></tr>
          <tr><td>接口</td><td>USB 3.0 Type-C</td></tr>
        </tbody></table>

        <h2 style={{marginTop: '2.5rem', fontSize: '1.4rem', fontWeight: 700}}>亮点</h2>
        <ul style={{lineHeight: 2}}>
          <li>仅重 35g，不影响机械臂末端负载</li>
          <li>60fps 高帧率，适配动态抓取场景</li>
          <li>8cm 近距离自动对焦</li>
          <li>标配 ROS2 sensor_msgs 驱动</li>
        </ul>

        <div style={{textAlign: 'right', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid #e2e8f0'}}>
          <Link to="/docs/cameras/wrist/overview" className="button button--primary">📖 查看教程 →</Link>
        </div>
      </main>
    </Layout>
  );
}
