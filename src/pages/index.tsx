import type {ReactNode} from 'react';
import {useEffect, useState} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

/* ================================================================
   产品数据
   ================================================================ */
const products = [
  {
    title: 'SO-ARM101',
    subtitle: '开源机械臂',
    tagline: '6+1 自由度 · ROS2 原生 · 教育科研',
    desc: '轻量级桌面机械臂，全开源 CAD 与 SDK，15 分钟快速上手',
    to: '/docs/so-arm101/overview',
    color: '#2563eb',
    gradient: 'linear-gradient(135deg, #1e3a5f 0%, #2563eb 100%)',
    icon: '🦾',
    stats: ['6+1 DoF', '500g 负载', '±0.5mm'],
  },
  {
    title: 'Lekiwi',
    subtitle: '全向移动底盘',
    tagline: '麦克纳姆轮 · SLAM 导航 · 50kg 负载',
    desc: '模块化机器人移动平台，一底多用，灵活扩展',
    to: '/docs/lekiwi/overview',
    color: '#059669',
    gradient: 'linear-gradient(135deg, #064e3b 0%, #059669 100%)',
    icon: '🔧',
    stats: ['全向移动', '50kg 负载', '8h 续航'],
  },
  {
    title: 'Xlerobot',
    subtitle: '家务机器人',
    tagline: 'AI 驱动 · 自主学习 · 全场景覆盖',
    desc: '端侧大模型 + 灵巧操作，让机器人真正理解家庭环境',
    to: '/docs/xlerobot/overview',
    color: '#7c3aed',
    gradient: 'linear-gradient(135deg, #3b0764 0%, #7c3aed 100%)',
    icon: '🤖',
    stats: ['双臂 14 DoF', 'AI 视觉', '模仿学习'],
  },
  {
    title: 'AmazingHand',
    subtitle: '触觉灵巧手',
    tagline: '16 自由度 · 触觉阵列 · 力控精度 0.1N',
    desc: '五指仿生灵巧手，120 个触觉单元，精密力反馈控制',
    to: '/docs/amazinghand/overview',
    color: '#dc2626',
    gradient: 'linear-gradient(135deg, #7f1d1d 0%, #dc2626 100%)',
    icon: '✋',
    stats: ['16 DoF', '120 触觉点', '±0.1N'],
  },
];

const highlights = [
  {icon: '📐', title: '全栈开源', desc: 'CAD / PCB / 固件 / SDK 全面开放，Apache 2.0 协议'},
  {icon: '🎓', title: '教育优先', desc: '从入门到精通，配套课程体系与实验手册'},
  {icon: '🚀', title: '产业落地', desc: '从实验室到产线，加速机器人技术商业化'},
  {icon: '🌍', title: '全球社区', desc: '连接全球开发者，共建具身智能开源生态'},
];

const stats = [
  {value: '4', unit: '款', label: '核心产品'},
  {value: '100', unit: '%', label: '开源'},
  {value: '15', unit: 'min', label: '快速上手'},
  {value: '∞', unit: '', label: '社区共创'},
];

/* ================================================================
   导航栏 Banner（模仿 Seeed Studio 顶部促销条）
   ================================================================ */
function TopBanner() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;
  return (
    <div className={styles.topBanner}>
      <span>🎉 启月探微全新官网上线 · 四款开源机器人产品正式发布</span>
      <button onClick={() => setVisible(false)} className={styles.topBannerClose}>✕</button>
    </div>
  );
}

/* ================================================================
   英雄区 — 大图 + 渐变 + CTA
   ================================================================ */
function HeroBanner() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.hero}>
      <div className={styles.heroBg}>
        <div className={styles.heroGrid} />
        <div className={styles.heroGlow1} />
        <div className={styles.heroGlow2} />
      </div>
      <div className="container">
        <div className={styles.heroInner}>
          <div className={styles.heroBadgeRow}>
            <span className={styles.heroBadge}>🔬 开源机器人平台</span>
            <span className={styles.heroBadgeOutline}>Apache 2.0</span>
          </div>
          <Heading as="h1" className={styles.heroTitle}>
            探微知著
            <span className={styles.heroTitleAccent}>启智未来</span>
          </Heading>
          <p className={styles.heroDesc}>
            为开发者打造的模块化开源机器人生态 ——
            从机械臂到灵巧手，从底盘到整机，
            <br />
            用开放技术加速具身智能的每一步创新
          </p>
          <div className={styles.heroActions}>
            <Link className={clsx('button', styles.btnPrimary)} to="/docs/intro">
              📖 快速入门
            </Link>
            <Link className={clsx('button', styles.btnGhost)} to="/docs/so-arm101/overview">
              浏览产品 →
            </Link>
            <Link className={clsx('button', styles.btnOutlineLight)} to="https://github.com/lumimoon-robotics" target="_blank">
              ⭐ GitHub
            </Link>
          </div>
          <div className={styles.heroStats}>
            {stats.map((s, i) => (
              <div key={i} className={styles.heroStatItem}>
                <span className={styles.heroStatValue}>{s.value}<small>{s.unit}</small></span>
                <span className={styles.heroStatLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

/* ================================================================
   产品卡片网格
   ================================================================ */
function ProductSection() {
  return (
    <section className={styles.products}>
      <div className="container">
        <div className={styles.sectionHeading}>
          <span className={styles.sectionTag}>核心产品</span>
          <Heading as="h2" className={styles.sectionTitle}>
            用开源技术<br /><span className={styles.sectionTitleAccent}>构建智能机器人世界</span>
          </Heading>
          <p className={styles.sectionDesc}>
            从硬件设计到软件栈，完整开源，开箱即用。每个产品都提供详细的装配指南、SDK 与教学资源。
          </p>
        </div>

        <div className={styles.productGrid}>
          {products.map((p, i) => (
            <Link key={i} to={p.to} className={styles.productCard}>
              <div className={styles.productCardMedia} style={{background: p.gradient}}>
                <span className={styles.productCardIcon}>{p.icon}</span>
                <div className={styles.productCardOverlay}>
                  <span className={styles.productCardBadge}>{p.subtitle}</span>
                </div>
              </div>
              <div className={styles.productCardBody}>
                <div className={styles.productCardHeader}>
                  <Heading as="h3" className={styles.productCardTitle}>{p.title}</Heading>
                  <span className={styles.productCardArrow}>→</span>
                </div>
                <p className={styles.productCardTagline}>{p.tagline}</p>
                <p className={styles.productCardDesc}>{p.desc}</p>
                <div className={styles.productCardStats}>
                  {p.stats.map((s, j) => (
                    <span key={j} className={styles.productCardStat}>{s}</span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   为什么选择我们 — 亮点
   ================================================================ */
function HighlightsSection() {
  return (
    <section className={styles.highlights}>
      <div className="container">
        <div className={styles.sectionHeading}>
          <Heading as="h2" className={styles.sectionTitle}>
            为什么选择<span className={styles.sectionTitleAccent}>启月探微</span>？
          </Heading>
        </div>
        <div className={styles.highlightGrid}>
          {highlights.map((h, i) => (
            <div key={i} className={styles.highlightCard}>
              <span className={styles.highlightIcon}>{h.icon}</span>
              <Heading as="h3" className={styles.highlightTitle}>{h.title}</Heading>
              <p className={styles.highlightDesc}>{h.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   技术栈展示
   ================================================================ */
const techStack = ['ROS2', 'Python', 'C++', 'PyTorch', 'MoveIt', 'Gazebo', 'Docker', 'Linux', 'CAN', 'SLAM'];

function TechSection() {
  return (
    <section className={styles.tech}>
      <div className="container">
        <div className={styles.sectionHeading}>
          <Heading as="h2" className={styles.sectionTitle}>
            兼容主流<span className={styles.sectionTitleAccent}>技术生态</span>
          </Heading>
          <p className={styles.sectionDesc}>
            无缝对接机器人开发最常用的工具链与框架
          </p>
        </div>
        <div className={styles.techGrid}>
          {techStack.map((t, i) => (
            <span key={i} className={styles.techBadge}>{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   底部 CTA
   ================================================================ */
function CtaSection() {
  return (
    <section className={styles.cta}>
      <div className={styles.ctaBg}>
        <div className={styles.ctaGlow} />
      </div>
      <div className="container">
        <div className={styles.ctaInner}>
          <Heading as="h2" className={styles.ctaTitle}>准备好开启机器人开发之旅了吗？</Heading>
          <p className={styles.ctaDesc}>
            浏览文档、下载 SDK、加入社区。从第一行代码到第一个 Demo，我们全程陪伴。
          </p>
          <div className={styles.ctaActions}>
            <Link className={clsx('button', styles.btnPrimary)} to="/docs/intro">📖 开始探索</Link>
            <Link className={clsx('button', styles.btnOutline)} to="/about">关于我们</Link>
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
      <TopBanner />
      <HeroBanner />
      <main>
        <ProductSection />
        <HighlightsSection />
        <TechSection />
        <CtaSection />
      </main>
    </Layout>
  );
}
