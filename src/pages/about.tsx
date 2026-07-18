import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

export default function About(): ReactNode {
  return (
    <Layout title="关于我们" description="了解启月探微 — 开源机器人技术与智能硬件平台">
      <main className="container margin-vert--lg">
        <div className="row">
          <div className="col col--8 col--offset-2">
            {/* ---- 标题 ---- */}
            <Heading as="h1" style={{fontSize: '2.5rem', marginBottom: '1rem'}}>
              关于启月探微
            </Heading>
            <p style={{fontSize: '1.15rem', color: 'var(--ifm-color-emphasis-600)', lineHeight: 1.8}}>
              启月探微是一家专注于开源机器人技术研发与产业化的科技公司，致力于通过开源硬件与开放生态，
              降低机器人开发门槛，加速智能机器人从实验室到实际应用的转化。
            </p>

            {/* ---- 使命 ---- */}
            <Heading as="h2" style={{marginTop: '3rem'}}>
              🎯 我们的使命
            </Heading>
            <p style={{fontSize: '1.05rem', lineHeight: 1.8}}>
              以"探微知著，启智未来"为理念，我们坚信开源是推动机器人技术进步的最佳路径。
              通过开放硬件设计、软件代码与知识文档，让每一位开发者和创造者都能站在巨人的肩膀上，
              共同推动智能机器人生态的繁荣发展。
            </p>

            {/* ---- 产品矩阵 ---- */}
            <Heading as="h2" style={{marginTop: '3rem'}}>
              📦 产品矩阵
            </Heading>
            <div className="row margin-top--md">
              <div className="col col--6 margin-bottom--md">
                <div
                  style={{
                    borderLeft: '4px solid var(--ifm-color-primary)',
                    padding: '1rem 1.25rem',
                    background: 'var(--ifm-color-emphasis-100)',
                    borderRadius: '8px',
                  }}>
                  <strong>SO-ARM101 机械臂</strong>
                  <p style={{margin: '0.35rem 0 0', color: 'var(--ifm-color-emphasis-600)'}}>
                    6+1 自由度开源机械臂，面向教育科研
                  </p>
                </div>
              </div>
              <div className="col col--6 margin-bottom--md">
                <div
                  style={{
                    borderLeft: '4px solid #0e6655',
                    padding: '1rem 1.25rem',
                    background: 'var(--ifm-color-emphasis-100)',
                    borderRadius: '8px',
                  }}>
                  <strong>Lekiwi 底盘</strong>
                  <p style={{margin: '0.35rem 0 0', color: 'var(--ifm-color-emphasis-600)'}}>
                    全向移动机器人底盘，模块化扩展设计
                  </p>
                </div>
              </div>
              <div className="col col--6 margin-bottom--md">
                <div
                  style={{
                    borderLeft: '4px solid #8e44ad',
                    padding: '1rem 1.25rem',
                    background: 'var(--ifm-color-emphasis-100)',
                    borderRadius: '8px',
                  }}>
                  <strong>Xlerobot 家务机器人</strong>
                  <p style={{margin: '0.35rem 0 0', color: 'var(--ifm-color-emphasis-600)'}}>
                    AI 驱动的家用服务机器人
                  </p>
                </div>
              </div>
              <div className="col col--6 margin-bottom--md">
                <div
                  style={{
                    borderLeft: '4px solid #e67e22',
                    padding: '1rem 1.25rem',
                    background: 'var(--ifm-color-emphasis-100)',
                    borderRadius: '8px',
                  }}>
                  <strong>AmazingHand 灵巧手</strong>
                  <p style={{margin: '0.35rem 0 0', color: 'var(--ifm-color-emphasis-600)'}}>
                    五指触觉灵巧手，精密抓取操作
                  </p>
                </div>
              </div>
            </div>

            {/* ---- 联系我们 ---- */}
            <Heading as="h2" id="contact" style={{marginTop: '3rem'}}>
              📬 联系我们
            </Heading>
            <p style={{fontSize: '1.05rem', lineHeight: 1.8}}>
              无论是技术咨询、商务合作还是社区贡献，我们都期待与您交流。
            </p>
            <ul style={{fontSize: '1.05rem', lineHeight: 2}}>
              <li>📧 邮箱：contact@qiyue-robotics.com</li>
              <li>💻 GitHub：<a href="https://github.com/lumimoo-robotics">github.com/qiyue-robotics</a></li>
              <li>📖 文档中心：<a href="/docs/intro">启月探微文档中心</a></li>
            </ul>
          </div>
        </div>
      </main>
    </Layout>
  );
}
