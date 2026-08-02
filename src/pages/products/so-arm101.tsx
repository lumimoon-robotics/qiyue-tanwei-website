import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function SoArm101() {
  return (
    <Layout title="SO-ARM101 机械臂" description="SO-ARM101 — 6+1自由度桌面级开源机械臂">
      <main className="container margin-vert--lg" style={{maxWidth: 800}}>
        <img src={useBaseUrl('img/so-arm101.png')} alt="SO-ARM101" style={{width: '100%', maxHeight: 360, objectFit: 'contain', borderRadius: 12, marginBottom: '2rem'}} />
        <span style={{fontSize: '0.75rem', fontWeight: 700, color: '#6366f1', textTransform: 'uppercase', letterSpacing: '0.12em'}}>LeRobot 开源硬件</span>
        <h1 style={{fontSize: '2.25rem', fontWeight: 900, letterSpacing: '-0.03em', marginTop: '0.5rem'}}>SO-ARM101 桌面机械臂</h1>
        <p style={{fontSize: '1.05rem', color: '#64748b', lineHeight: 1.7}}>面向教育与科研的轻量级开源机械臂，全开源 CAD 与 SDK，15 分钟快速上手。</p>

        <h2 style={{marginTop: '2.5rem', fontSize: '1.4rem', fontWeight: 700}}>技术规格</h2>
        <table><tbody>
          <tr><td>自由度</td><td>6 + 1（夹爪）</td></tr>
          <tr><td>有效载荷</td><td>≥ 500g</td></tr>
          <tr><td>工作半径</td><td>≥ 350mm</td></tr>
          <tr><td>重复定位精度</td><td>±0.5mm</td></tr>
          <tr><td>自重</td><td>~3.5kg</td></tr>
          <tr><td>软件平台</td><td>ROS2 Humble / Python 3.10+</td></tr>
        </tbody></table>

        <h2 style={{marginTop: '2.5rem', fontSize: '1.4rem', fontWeight: 700}}>亮点</h2>
        <ul style={{lineHeight: 2}}>
          <li>全开源 CAD 设计文件与 BOM 清单</li>
          <li>ROS2 原生支持，提供 URDF 模型与 MoveIt 配置</li>
          <li>Python SDK，15 分钟快速上手</li>
          <li>支持位置/速度/力矩三种控制模式</li>
        </ul>

        <div style={{textAlign: 'right', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid #e2e8f0'}}>
          <Link to="/docs/lerobot/so-arm101/quickstart" className="button button--primary">📖 查看教程 →</Link>
        </div>
      </main>
    </Layout>
  );
}
