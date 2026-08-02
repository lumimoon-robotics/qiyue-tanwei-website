import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Lekiwi() {
  return (
    <Layout title="Lekiwi Chassis" description="Lekiwi — Omnidirectional modular robot chassis">
      <main className="container margin-vert--lg" style={{maxWidth: 800}}>
        <img src={useBaseUrl('img/lekiwi.png')} alt="Lekiwi" style={{width: '100%', maxHeight: 360, objectFit: 'contain', borderRadius: 12, marginBottom: '2rem'}} />
        <span style={{fontSize: '0.75rem', fontWeight: 700, color: '#6366f1', textTransform: 'uppercase', letterSpacing: '0.12em'}}>LeRobot Open Hardware</span>
        <h1 style={{fontSize: '2.25rem', fontWeight: 900, letterSpacing: '-0.03em', marginTop: '0.5rem'}}>Lekiwi Omnidirectional Chassis</h1>
        <p style={{fontSize: '1.05rem', color: '#64748b', lineHeight: 1.7}}>Mecanum wheel omnidirectional movement, SLAM autonomous navigation, 50kg payload, modular top plate interface.</p>

        <h2 style={{marginTop: '2.5rem', fontSize: '1.4rem', fontWeight: 700}}>Specifications</h2>
        <table><tbody>
          <tr><td>Drive</td><td>4× independent Mecanum wheels</td></tr>
          <tr><td>Max Payload</td><td>50kg</td></tr>
          <tr><td>Max Speed</td><td>1.5 m/s</td></tr>
          <tr><td>Battery Life</td><td>8-12 hours</td></tr>
          <tr><td>Controller</td><td>Raspberry Pi 5 / Jetson Orin NX</td></tr>
          <tr><td>Software</td><td>ROS2 Humble + Nav2</td></tr>
        </tbody></table>

        <h2 style={{marginTop: '2.5rem', fontSize: '1.4rem', fontWeight: 700}}>Highlights</h2>
        <ul style={{lineHeight: 2}}>
          <li>Omnidirectional: forward, strafe, diagonal, zero-radius turn</li>
          <li>SLAM: Cartographer / SLAM Toolbox autonomous mapping</li>
          <li>Modular: standard quick-swap top plate interface</li>
          <li>Long battery life: 8-12 hours standard</li>
        </ul>

        <div style={{textAlign: 'right', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid #e2e8f0'}}>
          <Link to="/docs/lerobot/lekiwi/bom" className="button button--primary">📖 View Tutorial →</Link>
        </div>
      </main>
    </Layout>
  );
}
