import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function FixedCamera() {
  return (
    <Layout title="固定相机" description="固定相机 — 2K分辨率全局感知相机">
      <main className="container margin-vert--lg" style={{maxWidth: 800}}>
        <span style={{fontSize: '0.75rem', fontWeight: 700, color: '#10b981', textTransform: 'uppercase', letterSpacing: '0.12em'}}>相机产品</span>
        <h1 style={{fontSize: '2.25rem', fontWeight: 900, letterSpacing: '-0.03em', marginTop: '0.5rem'}}>固定相机</h1>
        <p style={{fontSize: '1.05rem', color: '#64748b', lineHeight: 1.7}}>高分辨率全局感知相机，120°超广角，适合工作区场景理解。</p>

        <h2 style={{marginTop: '2.5rem', fontSize: '1.4rem', fontWeight: 700}}>技术规格</h2>
        <table><tbody>
          <tr><td>传感器</td><td>1/2.3" CMOS</td></tr>
          <tr><td>分辨率</td><td>2560×1440 @ 30fps</td></tr>
          <tr><td>视场角</td><td>120° × 80°</td></tr>
          <tr><td>重量</td><td>85g</td></tr>
          <tr><td>安装</td><td>1/4" 标准螺孔 + 磁吸底座</td></tr>
          <tr><td>接口</td><td>USB 3.0 / GigE</td></tr>
        </tbody></table>

        <h2 style={{marginTop: '2.5rem', fontSize: '1.4rem', fontWeight: 700}}>亮点</h2>
        <ul style={{lineHeight: 2}}>
          <li>2K 分辨率，清晰捕捉场景细节</li>
          <li>120° 超广角，单相机覆盖大面积工作区</li>
          <li>多种安装方式，灵活部署</li>
          <li>支持 GigE 远距离传输</li>
        </ul>

        <div style={{textAlign: 'right', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid #e2e8f0'}}>
          <Link to="/docs/cameras/fixed/overview" className="button button--primary">📖 查看教程 →</Link>
        </div>
      </main>
    </Layout>
  );
}
