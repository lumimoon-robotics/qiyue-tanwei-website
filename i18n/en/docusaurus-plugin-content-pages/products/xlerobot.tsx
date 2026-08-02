import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Xlerobot() {
  return (
    <Layout title="Xlerobot Home Robot" description="Xlerobot — AI-powered dual-arm service robot">
      <main className="container margin-vert--lg" style={{maxWidth: 800}}>
        <img src={useBaseUrl('img/xlerobot.png')} alt="Xlerobot" style={{width: '100%', maxHeight: 360, objectFit: 'contain', borderRadius: 12, marginBottom: '2rem'}} />
        <span style={{fontSize: '0.75rem', fontWeight: 700, color: '#6366f1', textTransform: 'uppercase', letterSpacing: '0.12em'}}>LeRobot Open Hardware</span>
        <h1 style={{fontSize: '2.25rem', fontWeight: 900, letterSpacing: '-0.03em', marginTop: '0.5rem'}}>Xlerobot Home Service Robot</h1>
        <p style={{fontSize: '1.05rem', color: '#64748b', lineHeight: 1.7}}>Dual-arm collaboration + on-device AI, natural language command driven, powered by imitation learning.</p>

        <h2 style={{marginTop: '2.5rem', fontSize: '1.4rem', fontWeight: 700}}>Specifications</h2>
        <table><tbody>
          <tr><td>DOF</td><td>Dual 7-DOF arms + 2-DOF waist (optional)</td></tr>
          <tr><td>Mobile Base</td><td>Lekiwi omnidirectional chassis</td></tr>
          <tr><td>Height</td><td>1.45m</td></tr>
          <tr><td>Weight</td><td>~45kg</td></tr>
          <tr><td>Battery Life</td><td>6-8 hours</td></tr>
          <tr><td>Compute</td><td>Jetson Orin / Qualcomm RB6</td></tr>
        </tbody></table>

        <h2 style={{marginTop: '2.5rem', fontSize: '1.4rem', fontWeight: 700}}>Highlights</h2>
        <ul style={{lineHeight: 2}}>
          <li>On-device AI inference for real-time scene understanding</li>
          <li>Vision-language model for natural language interaction</li>
          <li>Imitation learning framework — teach via teleoperation</li>
          <li>Collision detection + torque limiting for safe collaboration</li>
        </ul>

        <div style={{textAlign: 'right', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid #e2e8f0'}}>
          <Link to="/docs/lerobot/xlerobot/quickstart" className="button button--primary">📖 View Tutorial →</Link>
        </div>
      </main>
    </Layout>
  );
}
