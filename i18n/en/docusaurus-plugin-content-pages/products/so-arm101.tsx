import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function SoArm101() {
  return (
    <Layout title="SO-ARM101 Robotic Arm" description="SO-ARM101 — 6+1 DOF desktop open-source robotic arm">
      <main className="container margin-vert--lg" style={{maxWidth: 800}}>
        <img src={useBaseUrl('img/so-arm101.png')} alt="SO-ARM101" style={{width: '100%', maxHeight: 360, objectFit: 'contain', borderRadius: 12, marginBottom: '2rem'}} />
        <span style={{fontSize: '0.75rem', fontWeight: 700, color: '#6366f1', textTransform: 'uppercase', letterSpacing: '0.12em'}}>LeRobot Open Hardware</span>
        <h1 style={{fontSize: '2.25rem', fontWeight: 900, letterSpacing: '-0.03em', marginTop: '0.5rem'}}>SO-ARM101 Desktop Robotic Arm</h1>
        <p style={{fontSize: '1.05rem', color: '#64748b', lineHeight: 1.7}}>A lightweight open-source robotic arm for education and research. Fully open-source CAD & SDK, up and running in 15 minutes.</p>

        <h2 style={{marginTop: '2.5rem', fontSize: '1.4rem', fontWeight: 700}}>Specifications</h2>
        <table><tbody>
          <tr><td>DOF</td><td>6 + 1 (gripper)</td></tr>
          <tr><td>Payload</td><td>≥ 500g</td></tr>
          <tr><td>Reach</td><td>≥ 350mm</td></tr>
          <tr><td>Repeatability</td><td>±0.5mm</td></tr>
          <tr><td>Weight</td><td>~3.5kg</td></tr>
          <tr><td>Software</td><td>ROS2 Humble / Python 3.10+</td></tr>
        </tbody></table>

        <h2 style={{marginTop: '2.5rem', fontSize: '1.4rem', fontWeight: 700}}>Highlights</h2>
        <ul style={{lineHeight: 2}}>
          <li>Fully open-source CAD files and BOM</li>
          <li>Native ROS2 support with URDF + MoveIt</li>
          <li>Python SDK, up and running in 15 minutes</li>
          <li>Position/velocity/torque control modes</li>
        </ul>

        <div style={{textAlign: 'right', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid #e2e8f0'}}>
          <Link to="/docs/lerobot/so-arm101/quickstart" className="button button--primary">📖 View Tutorial →</Link>
        </div>
      </main>
    </Layout>
  );
}
