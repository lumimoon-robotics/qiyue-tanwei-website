import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

export default function About(): ReactNode {
  return (
    <Layout title="关于我们" description="了解启月探微 — 开源机器人技术与智能硬件平台">
      {/* Hero */}
      <section className={styles.hero} style={{minHeight: 320}}>
        <div className={styles.heroAmbient}>
          <div className={styles.heroGlow1} />
          <div className={styles.heroGlow2} />
          <div className={styles.heroGrid} />
        </div>
        <div className="container">
          <div className={styles.heroText} style={{maxWidth: 640, margin: '0 auto', textAlign: 'center'}}>
            <span className={styles.heroChip} style={{marginLeft: 'auto', marginRight: 'auto', display: 'inline-block'}}>关于我们</span>
            <h1 className={styles.heroH1} style={{textAlign: 'center', fontSize: '2.75rem'}}>
              探微知著<span className={styles.heroH1Grad}>启智未来</span>
            </h1>
            <p className={styles.heroP} style={{maxWidth: 520, margin: '0 auto 0'}}>
              启月探微是一家专注于开源机器人技术研发与产业化的科技公司，
              致力于通过开放硬件与软件生态降低机器人开发门槛，
              加速智能机器人从实验室到实际应用的转化。
            </p>
          </div>
        </div>
      </section>

      {/* 愿景 */}
      <section className={styles.sec}>
        <div className="container" style={{maxWidth: 720}}>
          <h2 style={{fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.02em'}}>
            🎯 我们的使命
          </h2>
          <p style={{fontSize: '1rem', color: '#64748b', lineHeight: 1.8}}>
            以"探微知著，启智未来"为理念，我们坚信开源是推动机器人技术进步的最佳路径。
            通过开放硬件设计、软件代码与知识文档，让每一位开发者和创造者都能站在巨人的肩膀上，
            共同推动智能机器人生态的繁荣发展。
          </p>

          <h2 style={{fontSize: '1.5rem', fontWeight: 800, margin: '3rem 0 1rem', letterSpacing: '-0.02em'}}>
            📦 产品矩阵
          </h2>
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem'}}>
            {[
              {name: 'SO-ARM101 机械臂', desc: '6+1 自由度开源机械臂，面向教育科研', to: '/docs/so-arm101/overview', color: '#6366f1'},
              {name: 'Lekiwi 底盘', desc: '全向移动机器人底盘，模块化扩展设计', to: '/docs/lekiwi/overview', color: '#10b981'},
              {name: 'Xlerobot 家务机器人', desc: 'AI 驱动的家用服务机器人', to: '/docs/xlerobot/overview', color: '#8b5cf6'},
              {name: 'AmazingHand 灵巧手', desc: '五指触觉灵巧手，精密抓取操作', to: '/docs/amazinghand/overview', color: '#f97316'},
            ].map((p) => (
              <Link key={p.name} to={p.to} style={{
                display: 'block', padding: '1rem 1.25rem', borderRadius: 12,
                border: '1px solid #e2e8f0', borderLeft: `4px solid ${p.color}`,
                background: '#fafbfd', textDecoration: 'none', color: 'inherit',
                transition: 'box-shadow 0.2s',
              }}>
                <strong style={{color: '#0f172a'}}>{p.name}</strong>
                <p style={{margin: '0.25rem 0 0', fontSize: '0.85rem', color: '#64748b'}}>{p.desc}</p>
              </Link>
            ))}
          </div>

          <h2 id="contact" style={{fontSize: '1.5rem', fontWeight: 800, margin: '3rem 0 1rem', letterSpacing: '-0.02em'}}>
            📬 联系我们
          </h2>
          <p style={{fontSize: '1rem', color: '#64748b', lineHeight: 1.8}}>
            无论是技术咨询、商务合作还是社区贡献，我们都期待与您交流。
          </p>
          <ul style={{fontSize: '1rem', lineHeight: 2.2, color: '#334155', paddingLeft: '1.25rem'}}>
            <li>📧 邮箱：contact@lumimoon.cn</li>
            <li>💻 GitHub：<a href="https://github.com/lumimoon-robotics">github.com/lumimoon-robotics</a></li>
            <li>📖 文档中心：<a href="/docs/intro">启月探微文档中心</a></li>
          </ul>
        </div>
      </section>
    </Layout>
  );
}
