import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from '@site/src/pages/index.module.css';

export default function About(): ReactNode {
  return (
    <Layout title="About Us" description="About Qiyue Robotics — Open-Source Robotics Technology Platform">
      <section className={styles.hero} style={{minHeight: 320}}>
        <div className={styles.heroAmbient}>
          <div className={styles.heroGlow1} />
          <div className={styles.heroGlow2} />
          <div className={styles.heroGrid} />
        </div>
        <div className="container">
          <div className={styles.heroText} style={{maxWidth: 640, margin: '0 auto', textAlign: 'center'}}>
            <span className={styles.heroChip} style={{marginLeft: 'auto', marginRight: 'auto', display: 'inline-block'}}>About Us</span>
            <h1 className={styles.heroH1} style={{textAlign: 'center', fontSize: '2.75rem'}}>
              Exploring the Micro<span className={styles.heroH1Grad}>Enlightening the Future</span>
            </h1>
            <p className={styles.heroP} style={{maxWidth: 520, margin: '0 auto 0'}}>
              Qiyue Robotics is a technology company focused on open-source robotics R&D and industrialization,
              dedicated to lowering the barrier to robot development through open hardware and software ecosystems.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.sec}>
        <div className="container" style={{maxWidth: 720}}>
          <h2 style={{fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.02em'}}>
            🎯 Our Mission
          </h2>
          <p style={{fontSize: '1rem', color: '#64748b', lineHeight: 1.8}}>
            Guided by the principle of "Exploring the Micro to Enlighten the Future", we believe open source
            is the best path to advancing robotics technology. By opening hardware designs, software code,
            and knowledge documentation, we enable every developer and creator to stand on the shoulders of giants.
          </p>

          <h2 style={{fontSize: '1.5rem', fontWeight: 800, margin: '3rem 0 1rem', letterSpacing: '-0.02em'}}>
            📦 Product Matrix
          </h2>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem'}}>
            {[
              {name: 'LeRobot Open Hardware', desc: 'SO-ARM101 · Lekiwi · Xlerobot — Embodied AI hardware', to: '/docs/lerobot/overview', color: '#6366f1'},
              {name: 'Camera Products', desc: 'Wrist · Fixed · Dual — Robot vision modules', to: '/docs/cameras/overview', color: '#10b981'},
              {name: 'Servo Products', desc: 'ST3215 Series — Smart bus servos', to: '/docs/servos/overview', color: '#f59e0b'},
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
            📬 Contact Us
          </h2>
          <p style={{fontSize: '1rem', color: '#64748b', lineHeight: 1.8}}>
            Whether it's a technical inquiry, business collaboration, or community contribution — we'd love to hear from you.
          </p>
          <ul style={{fontSize: '1rem', lineHeight: 2.2, color: '#334155', paddingLeft: '1.25rem'}}>
            <li>📧 Email: contact@lumimoon.cn</li>
            <li>💻 GitHub: <a href="https://github.com/lumimoon-robotics">github.com/lumimoon-robotics</a></li>
            <li>📖 Docs: <a href="/docs/intro">Qiyue Robotics Docs</a></li>
          </ul>
        </div>
      </section>
    </Layout>
  );
}
