import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function AmazingHand() {
  return (
    <Layout title="AmazingHand Dexterous Hand" description="AmazingHand — 16-DOF five-finger tactile dexterous hand">
      <main className="container margin-vert--lg" style={{maxWidth: 800}}>
        <img src={useBaseUrl('img/amazinghand.png')} alt="AmazingHand" style={{width: '100%', maxHeight: 360, objectFit: 'contain', borderRadius: 12, marginBottom: '2rem'}} />
        <span style={{fontSize: '0.75rem', fontWeight: 700, color: '#6366f1', textTransform: 'uppercase', letterSpacing: '0.12em'}}>LeRobot Open Hardware</span>
        <h1 style={{fontSize: '2.25rem', fontWeight: 900, letterSpacing: '-0.03em', marginTop: '0.5rem'}}>AmazingHand Dexterous Hand</h1>
        <p style={{fontSize: '1.05rem', color: '#64748b', lineHeight: 1.7}}>16-DOF biomimetic dexterous hand with 120 tactile units and ±0.1N force control precision.</p>

        <h2 style={{marginTop: '2.5rem', fontSize: '1.4rem', fontWeight: 700}}>Specifications</h2>
        <table><tbody>
          <tr><td>DOF</td><td>16 (thumb 4 + index 3 + middle 3 + ring 3 + pinky 3)</td></tr>
          <tr><td>Fingertip Force</td><td>0-15N</td></tr>
          <tr><td>Tactile Resolution</td><td>24 pts/fingertip (120 total)</td></tr>
          <tr><td>Force Precision</td><td>±0.1N</td></tr>
          <tr><td>Weight</td><td>~1.1kg</td></tr>
          <tr><td>Interface</td><td>CAN / RS485 / USB</td></tr>
        </tbody></table>

        <h2 style={{marginTop: '2.5rem', fontSize: '1.4rem', fontWeight: 700}}>Highlights</h2>
        <ul style={{lineHeight: 2}}>
          <li>5-finger 16-DOF human-like kinematics</li>
          <li>120 tactile units with real-time force feedback</li>
          <li>Compatible with SO-ARM101, UR, Kinova and more</li>
          <li>Fully open-source CAD + drivers + control algorithms</li>
        </ul>

        <div style={{textAlign: 'right', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid #e2e8f0'}}>
          <Link to="/docs/lerobot/amazinghand/overview" className="button button--primary">📖 View Tutorial →</Link>
        </div>
      </main>
    </Layout>
  );
}
