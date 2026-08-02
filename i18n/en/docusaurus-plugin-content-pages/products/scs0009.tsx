import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function SCS0009() {
  return (
    <Layout title="SCS0009" description="SCS0009 — Micro intelligent servo, 5kg·cm, high-speed response">
      <main className="container margin-vert--lg" style={{maxWidth: 800}}>
        <span style={{fontSize: '0.75rem', fontWeight: 700, color: '#f59e0b', textTransform: 'uppercase', letterSpacing: '0.12em'}}>Servo Products</span>
        <h1 style={{fontSize: '2.25rem', fontWeight: 900, letterSpacing: '-0.03em', marginTop: '0.5rem'}}>SCS0009</h1>
        <p style={{fontSize: '1.05rem', color: '#64748b', lineHeight: 1.7}}>Micro intelligent bus servo, ultra-lightweight with high-speed response, suitable for precision applications in tight spaces.</p>
        <h2 style={{marginTop: '2.5rem', fontSize: '1.4rem', fontWeight: 700}}>Technical Specifications</h2>
        <table><tbody>
          <tr><td>Torque</td><td>5 kg·cm</td></tr>
          <tr><td>Speed</td><td>0.08 s/60°</td></tr>
          <tr><td>Accuracy</td><td>0.1°</td></tr>
          <tr><td>Voltage</td><td>5V - 8.4V</td></tr>
          <tr><td>Communication</td><td>RS485 Bus</td></tr>
          <tr><td>Weight</td><td>32g</td></tr>
        </tbody></table>
        <div style={{textAlign: 'right', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid #e2e8f0'}}>
          <Link to="/docs/servos/scs0009" className="button button--primary">📖 View Tutorial →</Link>
        </div>
      </main>
    </Layout>
  );
}
