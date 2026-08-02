import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function C001() {
  return (
    <Layout title="ST3215 C001" description="ST3215 C001 — 高扭矩智能舵机，20kg·cm">
      <main className="container margin-vert--lg" style={{maxWidth: 800}}>
        <span style={{fontSize: '0.75rem', fontWeight: 700, color: '#f59e0b', textTransform: 'uppercase', letterSpacing: '0.12em'}}>舵机产品</span>
        <h1 style={{fontSize: '2.25rem', fontWeight: 900, letterSpacing: '-0.03em', marginTop: '0.5rem'}}>ST3215 C001</h1>
        <p style={{fontSize: '1.05rem', color: '#64748b', lineHeight: 1.7}}>高扭矩型，20kg·cm 输出，适合重载关节应用。</p>
        <h2 style={{marginTop: '2.5rem', fontSize: '1.4rem', fontWeight: 700}}>技术规格</h2>
        <table><tbody>
          <tr><td>扭矩</td><td>20 kg·cm</td></tr>
          <tr><td>速度</td><td>0.12 s/60°</td></tr>
          <tr><td>精度</td><td>0.2°</td></tr>
          <tr><td>电压</td><td>6V - 12V</td></tr>
          <tr><td>通信</td><td>RS485 总线</td></tr>
          <tr><td>重量</td><td>95g</td></tr>
        </tbody></table>
        <div style={{textAlign: 'right', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid #e2e8f0'}}>
          <Link to="/docs/servos/st3215-c001" className="button button--primary">📖 查看教程 →</Link>
        </div>
      </main>
    </Layout>
  );
}
