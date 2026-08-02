import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function FixedCamera() {
  return (
    <Layout title="Fixed Camera" description="Fixed Camera — 2K resolution global perception camera">
      <main className="container margin-vert--lg" style={{maxWidth: 800}}>
        <span style={{fontSize: '0.75rem', fontWeight: 700, color: '#10b981', textTransform: 'uppercase', letterSpacing: '0.12em'}}>Camera Products</span>
        <h1 style={{fontSize: '2.25rem', fontWeight: 900, letterSpacing: '-0.03em', marginTop: '0.5rem'}}>Fixed Camera</h1>
        <p style={{fontSize: '1.05rem', color: '#64748b', lineHeight: 1.7}}>High-resolution global perception camera with 120° ultra-wide angle, ideal for workspace scene understanding.</p>

        <h2 style={{marginTop: '2.5rem', fontSize: '1.4rem', fontWeight: 700}}>Technical Specifications</h2>
        <table><tbody>
          <tr><td>Sensor</td><td>1/2.3" CMOS</td></tr>
          <tr><td>Resolution</td><td>2560×1440 @ 30fps</td></tr>
          <tr><td>FOV</td><td>120° × 80°</td></tr>
          <tr><td>Weight</td><td>85g</td></tr>
          <tr><td>Mounting</td><td>1/4" standard threaded hole + magnetic base</td></tr>
          <tr><td>Interface</td><td>USB 3.0 / GigE</td></tr>
        </tbody></table>

        <h2 style={{marginTop: '2.5rem', fontSize: '1.4rem', fontWeight: 700}}>Highlights</h2>
        <ul style={{lineHeight: 2}}>
          <li>2K resolution, captures scene details with clarity</li>
          <li>120° ultra-wide angle, single camera covers large workspace area</li>
          <li>Multiple mounting options for flexible deployment</li>
          <li>GigE support for long-distance transmission</li>
        </ul>

        <div style={{textAlign: 'right', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid #e2e8f0'}}>
          <Link to="/docs/cameras/fixed/overview" className="button button--primary">📖 View Tutorial →</Link>
        </div>
      </main>
    </Layout>
  );
}
