import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

/* ---------- 产品卡片数据 ---------- */
const products = [
  {
    title: 'SO-ARM101 机械臂',
    tagline: '高精度 | 6+1 自由度 | 开源设计',
    description:
      '一款面向教育与科研的轻量级开源机械臂，支持 ROS2 与 Python SDK，提供完整的 CAD 设计文件与装配指南，让机器人开发触手可及。',
    to: '/docs/so-arm101/overview',
    gradient: 'linear-gradient(135deg, #1a5276 0%, #2c3e50 100%)',
    icon: '🦾',
  },
  {
    title: 'Lekiwi 底盘',
    tagline: '全向移动 | 高负载 | 模块化',
    description:
      '灵活的全向移动机器人底盘，兼容多种上装载荷，支持 SLAM 自主导航，是物流配送与服务机器人开发的理想基础平台。',
    to: '/docs/lekiwi/overview',
    gradient: 'linear-gradient(135deg, #0e6655 0%, #1a5276 100%)',
    icon: '🔧',
  },
  {
    title: 'Xlerobot 家务机器人',
    tagline: 'AI 驱动 | 自主学习 | 全场景覆盖',
    description:
      '集成视觉感知与灵巧操作的家用服务机器人，可完成物品整理、桌面清洁、衣物折叠等日常家务任务，让智能走进千家万户。',
    to: '/docs/xlerobot/overview',
    gradient: 'linear-gradient(135deg, #2c3e50 0%, #8e44ad 100%)',
    icon: '🤖',
  },
  {
    title: 'AmazingHand 灵巧手',
    tagline: '多自由度 | 触觉反馈 | 精密抓取',
    description:
      '模拟人手结构的五指灵巧手，内置高精度力传感器与触觉阵列，适用于精密装配、医疗辅助、人机交互等前沿场景。',
    to: '/docs/amazinghand/overview',
    gradient: 'linear-gradient(135deg, #c0392b 0%, #e67e22 100%)',
    icon: '✋',
  },
];

/* ---------- 公司亮点 ---------- */
const highlights = [
  {
    title: '🔬 开源开放',
    description: '硬件设计、软件代码、装配文档全面开源，拥抱社区共创。',
  },
  {
    title: '🎓 赋能教育',
    description: '面向高校与科研机构，提供从入门到精通的完整教学体系。',
  },
  {
    title: '🤝 产业落地',
    description: '从实验室到产线，加速机器人技术产业化进程。',
  },
  {
    title: '🌐 全球社区',
    description: '连接全球开发者和创客，共建智能机器人生态。',
  },
];

/* ================================================================
   英雄区
   ================================================================ */
function HeroBanner() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className={clsx('container', styles.heroContainer)}>
        <div className={styles.heroContent}>
          <span className={styles.heroBadge}>开源机器人平台</span>
          <Heading as="h1" className={styles.heroTitle}>
            {siteConfig.title}
          </Heading>
          <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
          <div className={styles.heroCta}>
            <Link
              className="button button--primary button--lg"
              to="/docs/intro">
              📖 快速入门
            </Link>
            <Link
              className="button button--outline button--lg"
              to="https://github.com/qiyue-robotics"
              target="_blank">
              ⭐ GitHub
            </Link>
          </div>
        </div>
        <div className={styles.heroVisual}>
          <div className={styles.heroOrb} />
          <div className={styles.heroOrbSecondary} />
          <div className={styles.heroOrbTertiary} />
        </div>
      </div>
    </header>
  );
}

/* ================================================================
   产品展示区
   ================================================================ */
function ProductSection() {
  return (
    <section className={styles.productSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>核心产品</span>
          <Heading as="h2" className={styles.sectionTitle}>
            用开源技术构建智能机器人世界
          </Heading>
          <p className={styles.sectionDesc}>
            从机械臂到灵巧手，从移动底盘到整机系统 ——
            为开发者提供完整的机器人解决方案
          </p>
        </div>

        <div className="row">
          {products.map((p, i) => (
            <div key={i} className="col col--6 margin-bottom--lg">
              <Link to={p.to} className={styles.productCard}>
                <div
                  className={styles.productCardGradient}
                  style={{background: p.gradient}}
                />
                <div className={styles.productCardBody}>
                  <span className={styles.productIcon}>{p.icon}</span>
                  <Heading as="h3" className={styles.productTitle}>
                    {p.title}
                  </Heading>
                  <span className={styles.productTagline}>{p.tagline}</span>
                  <p className={styles.productDesc}>{p.description}</p>
                  <span className={styles.productCta}>
                    了解更多 →
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   亮点区
   ================================================================ */
function HighlightsSection() {
  return (
    <section className={styles.highlightsSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2" className={styles.sectionTitle}>
            为什么选择启月探微？
          </Heading>
        </div>
        <div className="row">
          {highlights.map((h, i) => (
            <div key={i} className="col col--3 margin-bottom--lg">
              <div className={styles.highlightCard}>
                <Heading as="h3" className={styles.highlightTitle}>
                  {h.title}
                </Heading>
                <p className={styles.highlightDesc}>{h.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   CTA 区
   ================================================================ */
function CtaSection() {
  return (
    <section className={styles.ctaSection}>
      <div className="container">
        <div className={styles.ctaInner}>
          <Heading as="h2" className={styles.ctaTitle}>
            准备好开始了吗？
          </Heading>
          <p className={styles.ctaDesc}>
            浏览我们的文档，加入开发者社区，共同探索机器人技术的无限可能。
          </p>
          <div className={styles.ctaButtons}>
            <Link
              className="button button--primary button--lg"
              to="/docs/intro">
              📖 开始探索
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="/about">
              👥 关于我们
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   主页
   ================================================================ */
export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="启月探微 — 开源机器人技术与智能硬件平台，提供机械臂、移动底盘、家务机器人、灵巧手等产品与解决方案。">
      <HeroBanner />
      <main>
        <ProductSection />
        <HighlightsSection />
        <CtaSection />
      </main>
    </Layout>
  );
}
