import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Xlerobot() {
  return (
    <Layout title="Xlerobot 家务机器人" description="Xlerobot — AI驱动的双臂服务机器人">
      <main className="container margin-vert--lg" style={{maxWidth: 800}}>
        <img src={useBaseUrl('img/xlerobot.png')} alt="Xlerobot" style={{width: '100%', maxHeight: 360, objectFit: 'contain', borderRadius: 12, marginBottom: '2rem'}} />
        <span style={{fontSize: '0.75rem', fontWeight: 700, color: '#6366f1', textTransform: 'uppercase', letterSpacing: '0.12em'}}>LeRobot 开源硬件</span>
        <h1 style={{fontSize: '2.25rem', fontWeight: 900, letterSpacing: '-0.03em', marginTop: '0.5rem'}}>Xlerobot 家务机器人</h1>
        <p style={{fontSize: '1.05rem', color: '#64748b', lineHeight: 1.7}}>双臂协作 + 端侧 AI，自然语言指令驱动，模仿学习框架加持。</p>

        <h2 style={{marginTop: '2.5rem', fontSize: '1.4rem', fontWeight: 700}}>技术规格</h2>
        <table><tbody>
          <tr><td>自由度</td><td>双臂各 7 DoF + 腰部 2 DoF（可选）</td></tr>
          <tr><td>移动平台</td><td>Lekiwi 全向底盘</td></tr>
          <tr><td>高度</td><td>1.45m</td></tr>
          <tr><td>自重</td><td>~45kg</td></tr>
          <tr><td>续航</td><td>6-8 小时</td></tr>
          <tr><td>计算平台</td><td>Jetson Orin / 高通 RB6</td></tr>
        </tbody></table>

        <h2 style={{marginTop: '2.5rem', fontSize: '1.4rem', fontWeight: 700}}>亮点</h2>
        <ul style={{lineHeight: 2}}>
          <li>端侧 AI 推理，毫秒级场景理解</li>
          <li>视觉-语言模型驱动自然语言交互</li>
          <li>模仿学习框架，遥操作示教快速部署新技能</li>
          <li>碰撞检测 + 力矩限制，安全人机协作</li>
        </ul>

        <div style={{textAlign: 'right', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid #e2e8f0'}}>
          <Link to="/docs/lerobot/xlerobot/quickstart" className="button button--primary">📖 查看教程 →</Link>
        </div>
      </main>
    </Layout>
  );
}
