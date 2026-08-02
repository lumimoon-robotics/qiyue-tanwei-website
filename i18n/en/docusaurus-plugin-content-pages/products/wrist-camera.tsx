import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function WristCamera() {
  return (
    <Layout title="Wrist Camera" description="Wrist Camera — 1080P lightweight vision module for dexterous manipulation">
      <main className="container margin-vert--lg" style={{maxWidth: 800}}>
        <span style={{fontSize: '0.75rem', fontWeight: 700, color: '#10b981', textTransform: 'uppercase', letterSpacing: '0.12em'}}>Camera Products</span>
        <h1 style={{fontSize: '2.25rem', fontWeight: 900, letterSpacing: '-0.03em', marginTop: '0.5rem'}}>Wrist Camera</h1>
        <p style={{fontSize: '1.05rem', color: '#64748b', lineHeight: 1.7}}>Ultra-lightweight end-effector integrated camera, only 35g, designed for visual guidance in dexterous manipulation.</p>

        <h2 style={{marginTop: '2.5rem', fontSize: '1.4rem', fontWeight: 700}}>Technical Specifications</h2>
        <table><tbody>
          <tr><td>Sensor</td><td>1/2.8" CMOS</td></tr>
          <tr><td>Resolution</td><td>1920×1080 @ 60fps</td></tr>
          <tr><td>FOV</td><td>90° × 60°</td></tr>
          <tr><td>Weight</td><td>35g only</td></tr>
          <tr><td>Focus</td><td>8cm ~ ∞ Autofocus</td></tr>
          <tr><td>Interface</td><td>USB 3.0 Type-C</td></tr>
        </tbody></table>

        <h2 style={{marginTop: '2.5rem', fontSize: '1.4rem', fontWeight: 700}}>Highlights</h2>
        <ul style={{lineHeight: 2}}>
          <li>Only 35g, no impact on arm end-effector payload</li>
          <li>60fps high frame rate, suitable for dynamic grasping scenarios</li>
          <li>8cm close-range autofocus</li>
          <li>Standard ROS2 sensor_msgs driver included</li>
        </ul>

        <div style={{textAlign: 'right', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid #e2e8f0'}}>
          <Link to="/docs/cameras/wrist/overview" className="button button--primary">📖 View Tutorial →</Link>
        </div>
      </main>
    </Layout>
  );
}
