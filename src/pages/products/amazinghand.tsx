import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function AmazingHand() {
  return (
    <Layout title="AmazingHand 灵巧手" description="AmazingHand — 五指触觉灵巧手，16自由度，120触觉单元">
      <main className="container margin-vert--lg" style={{maxWidth: 800}}>
        <img src={useBaseUrl('img/amazinghand.png')} alt="AmazingHand" style={{width: '100%', maxHeight: 360, objectFit: 'contain', borderRadius: 12, marginBottom: '2rem'}} />
        <span style={{fontSize: '0.75rem', fontWeight: 700, color: '#6366f1', textTransform: 'uppercase', letterSpacing: '0.12em'}}>LeRobot 开源硬件</span>
        <h1 style={{fontSize: '2.25rem', fontWeight: 900, letterSpacing: '-0.03em', marginTop: '0.5rem'}}>AmazingHand 灵巧手</h1>
        <p style={{fontSize: '1.05rem', color: '#64748b', lineHeight: 1.7}}>16 自由度仿生灵巧手，120 个触觉单元，力控精度 ±0.1N。</p>

        <h2 style={{marginTop: '2.5rem', fontSize: '1.4rem', fontWeight: 700}}>技术规格</h2>
        <table><tbody>
          <tr><td>自由度</td><td>16（拇指4+食指3+中指3+无名指3+小指3）</td></tr>
          <tr><td>指尖力范围</td><td>0-15N</td></tr>
          <tr><td>触觉分辨率</td><td>24点/指尖（共120个触觉单元）</td></tr>
          <tr><td>力控精度</td><td>±0.1N</td></tr>
          <tr><td>自重</td><td>~1.1kg</td></tr>
          <tr><td>通信接口</td><td>CAN / RS485 / USB</td></tr>
        </tbody></table>

        <h2 style={{marginTop: '2.5rem', fontSize: '1.4rem', fontWeight: 700}}>亮点</h2>
        <ul style={{lineHeight: 2}}>
          <li>5指16自由度仿人手运动学</li>
          <li>120个触觉单元实时力反馈</li>
          <li>兼容SO-ARM101、UR、Kinova等主流机械臂</li>
          <li>全开源CAD + 驱动 + 控制算法</li>
        </ul>

        <div style={{textAlign: 'right', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid #e2e8f0'}}>
          <Link to="/docs/lerobot/amazinghand/overview" className="button button--primary">📖 查看教程 →</Link>
        </div>
      </main>
    </Layout>
  );
}
