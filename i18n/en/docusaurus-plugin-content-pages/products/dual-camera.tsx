import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function DualCamera() {
  return (
    <Layout title="Dual Camera" description="Dual Camera — Stereo vision, depth estimation & SLAM">
      <main className="container margin-vert--lg" style={{maxWidth: 800}}>
        <span style={{fontSize: '0.75rem', fontWeight: 700, color: '#10b981', textTransform: 'uppercase', letterSpacing: '0.12em'}}>Camera Products</span>
        <h1 style={{fontSize: '2.25rem', fontWeight: 900, letterSpacing: '-0.03em', marginTop: '0.5rem'}}>Dual Camera</h1>
        <p style={{fontSize: '1.05rem', color: '#64748b', lineHeight: 1.7}}>Stereo vision module providing real-time depth maps and point clouds, suitable for SLAM and 3D reconstruction.</p>

        <h2 style={{marginTop: '2.5rem', fontSize: '1.4rem', fontWeight: 700}}>Technical Specifications</h2>
        <table><tbody>
          <tr><td>Sensor</td><td>2× 1/2.8" CMOS</td></tr>
          <tr><td>Resolution</td><td>2× 1920×1080 @ 30fps</td></tr>
          <tr><td>Baseline</td><td>65mm</td></tr>
          <tr><td>Depth Range</td><td>0.3m ~ 10m</td></tr>
          <tr><td>Weight</td><td>120g</td></tr>
          <tr><td>Interface</td><td>USB 3.0 Type-C</td></tr>
        </tbody></table>

        <h2 style={{marginTop: '2.5rem', fontSize: '1.4rem', fontWeight: 700}}>Highlights</h2>
        <ul style={{lineHeight: 2}}>
          <li>Real-time depth estimation, 30fps depth map output</li>
          <li>65mm baseline, human-eye-like stereo layout</li>
          <li>Comes with calibration tools for one-click stereo calibration</li>
          <li>Suitable for SLAM, 3D reconstruction, depth-guided grasping</li>
        </ul>

        <div style={{textAlign: 'right', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid #e2e8f0'}}>
          <Link to="/docs/cameras/dual/overview" className="button button--primary">📖 View Tutorial →</Link>
        </div>
      </main>
    </Layout>
  );
}
