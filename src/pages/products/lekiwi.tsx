import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Lekiwi() {
  return (
    <Layout title="Lekiwi 底盘" description="Lekiwi — 全向移动模块化机器人底盘">
      <main className="container margin-vert--lg" style={{maxWidth: 800}}>
        <img src={useBaseUrl('img/lekiwi.png')} alt="Lekiwi" style={{width: '100%', maxHeight: 360, objectFit: 'contain', borderRadius: 12, marginBottom: '2rem'}} />
        <span style={{fontSize: '0.75rem', fontWeight: 700, color: '#6366f1', textTransform: 'uppercase', letterSpacing: '0.12em'}}>LeRobot 开源硬件</span>
        <h1 style={{fontSize: '2.25rem', fontWeight: 900, letterSpacing: '-0.03em', marginTop: '0.5rem'}}>Lekiwi 全向移动底盘</h1>
        <p style={{fontSize: '1.05rem', color: '#64748b', lineHeight: 1.7}}>麦克纳姆轮全向移动，SLAM 自主导航，50kg 负载，模块化上装接口。</p>

        <h2 style={{marginTop: '2.5rem', fontSize: '1.4rem', fontWeight: 700}}>技术规格</h2>
        <table><tbody>
          <tr><td>驱动方式</td><td>四轮独立麦克纳姆轮</td></tr>
          <tr><td>最大负载</td><td>50kg</td></tr>
          <tr><td>最大速度</td><td>1.5 m/s</td></tr>
          <tr><td>续航</td><td>8-12 小时</td></tr>
          <tr><td>主控</td><td>Raspberry Pi 5 / Jetson Orin NX</td></tr>
          <tr><td>软件</td><td>ROS2 Humble + Nav2</td></tr>
        </tbody></table>

        <h2 style={{marginTop: '2.5rem', fontSize: '1.4rem', fontWeight: 700}}>亮点</h2>
        <ul style={{lineHeight: 2}}>
          <li>全向移动：前行、横移、斜行、原地旋转</li>
          <li>SLAM 导航：Cartographer / SLAM Toolbox 自主建图</li>
          <li>模块化上装：标准快拆接口，一底多用</li>
          <li>长续航：8-12 小时标配电池</li>
        </ul>

        <div style={{textAlign: 'right', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid #e2e8f0'}}>
          <Link to="/docs/lerobot/lekiwi/bom" className="button button--primary">📖 查看教程 →</Link>
        </div>
      </main>
    </Layout>
  );
}
