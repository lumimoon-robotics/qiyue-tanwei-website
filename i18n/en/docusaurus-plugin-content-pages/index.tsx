import {type ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from '@site/src/pages/index.module.css';

const categories = [
  {
    id: 'lerobot',
    title: 'LeRobot Open Hardware',
    subtitle: 'Embodied AI Research Platform',
    desc: 'SO-ARM101 arm + Lekiwi chassis + Xlerobot home robot. Full-stack open source, modular combination.',
    specs: ['SO-ARM101', 'Lekiwi', 'Xlerobot', 'ROS2/Python'],
    to: '/docs/lerobot/overview',
    gradient: 'from-indigo-950 via-blue-900 to-violet-950',
    accent: '#6366f1',
    icon: '🤖',
  },
  {
    id: 'cameras',
    title: 'Camera Products',
    subtitle: 'Robot Vision Modules',
    desc: 'Wrist camera + Fixed camera + Dual stereo camera covering end-effector guidance, scene perception, and depth estimation.',
    specs: ['1080P/2K', 'USB 3.0', 'ROS2-Native', 'Full SDK'],
    to: '/docs/cameras/overview',
    gradient: 'from-emerald-950 via-teal-900 to-cyan-950',
    accent: '#10b981',
    icon: '📷',
  },
  {
    id: 'servos',
    title: 'Servo Products',
    subtitle: 'Feetech ST3215 Smart Servo Series',
    desc: 'C018 / C001 / C044 / C046 / SCS0009 — from standard to high-precision, covering all joint requirements.',
    specs: ['RS485 Bus', '5-20kg·cm', '0.1° Precision', 'Full Feedback'],
    to: '/docs/servos/overview',
    gradient: 'from-amber-950 via-orange-900 to-red-950',
    accent: '#f59e0b',
    icon: '⚙️',
  },
];

const leRobotProducts = [
  {name: 'SO-ARM101', desc: 'Desktop Robotic Arm', img: 'img/so-arm101.png', to: '/docs/lerobot/so-arm101/overview'},
  {name: 'Lekiwi', desc: 'Omnidirectional Chassis', img: 'img/lekiwi.png', to: '/docs/lerobot/lekiwi/overview'},
  {name: 'Xlerobot', desc: 'AI Home Robot', img: 'img/xlerobot.png', to: '/docs/lerobot/xlerobot/overview'},
];

const advantages = [
  {icon: '📐', title: 'Fully Open Source', desc: 'CAD, PCB, firmware, and SDK all under Apache 2.0. No closed components.'},
  {icon: '🧩', title: 'Modular Design', desc: 'Standardized interfaces across products. Mix and match to build your ideal robot.'},
  {icon: '📖', title: 'Education Ecosystem', desc: 'Complete curriculum, lab manuals, video tutorials, and community support from beginner to advanced.'},
  {icon: '🚀', title: 'Industry-Ready', desc: 'Industrial-grade manufacturing. Trusted by 50+ university labs and 20+ enterprise customers.'},
  {icon: '🤖', title: 'AI Native', desc: 'Deep PyTorch, ROS2, MoveIt integration. Built-in imitation learning and Sim-to-Real toolchain.'},
  {icon: '🌍', title: 'Global Community', desc: '5,000+ developers, 2,000+ GitHub Stars, active Discord technical community.'},
];

const scenarios = [
  {icon: '🎓', title: 'Education', desc: 'Robotics, kinematics, and machine vision lab platforms'},
  {icon: '🔬', title: 'Research', desc: 'Embodied AI, dexterous manipulation, Sim-to-Real frontier research'},
  {icon: '🏭', title: 'Light Industry', desc: '3C electronics assembly, lab automation, material handling'},
  {icon: '🏠', title: 'Home Service', desc: 'Organization, cleaning, laundry folding, and daily chores'},
  {icon: '🏥', title: 'Medical Assistance', desc: 'Rehabilitation training, surgical tool handling, medication delivery'},
  {icon: '🛒', title: 'Commercial', desc: 'Retail shelf restocking, warehouse sorting, restaurant serving'},
];

const techs = [
  'ROS2 Humble', 'Python 3.10+', 'C++17', 'PyTorch', 'MoveIt 2',
  'Gazebo', 'Docker', 'Linux', 'CAN Bus', 'SLAM Toolbox',
  'Cartographer', 'Nav2', 'TensorRT', 'ONNX', 'gRPC',
];

const metrics = [
  {value: '3', unit: 'lines', label: 'Product Categories'},
  {value: '50', unit: '+', label: 'University Labs'},
  {value: '2000', unit: '+', label: 'GitHub Stars'},
  {value: '100', unit: '%', label: 'Open Source'},
];

/* ---- Hero ---- */
function Hero() {
  return (
    <header className={styles.hero}>
      <div className={styles.heroAmbient}>
        <div className={styles.heroGlow1} />
        <div className={styles.heroGlow2} />
        <div className={styles.heroGrid} />
      </div>
      <div className="container">
        <div className={styles.heroInner}>
          <div className={styles.heroText}>
            <span className={styles.heroChip}>Open Source Robotics</span>
            <h1 className={styles.heroH1}>
              Exploring the Micro
              <span className={styles.heroH1Grad}>Enlightening the Future</span>
            </h1>
            <p className={styles.heroP}>
              A modular open-source robotics ecosystem built for developers — from robotic arms to dexterous hands, from chassis to complete systems, accelerating every step of embodied AI innovation.
            </p>
            <div className={styles.heroBtns}>
              <Link to="/docs/intro" className={styles.btnFill}>Quick Start →</Link>
              <Link to="https://aozldimvsb4qk5ct-x1oeddvzwb01u.taobao.com/" className={styles.btnStore}>🛒 Store</Link>
              <Link to="https://github.com/lumimoon-robotics" className={styles.btnStroke}>GitHub</Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

/* ---- Marquee ---- */
function Marquee() {
  return (
    <div className={styles.marquee}>
      <div className={styles.marqueeTrack}>
        {[...techs, ...techs].map((t, i) => (
          <span key={i} className={styles.marqueeItem}>{t}</span>
        ))}
      </div>
    </div>
  );
}

/* ---- Showcase ---- */
function ProductsShowcase() {
  return (
    <section className={styles.showcase}>
      <div className="container">
        <div className={styles.showcaseGrid}>
          {leRobotProducts.map((p, i) => (
            <Link key={i} to={p.to} className={styles.showcaseCard}>
              <div className={styles.showcaseImgWrap}>
                <img src={useBaseUrl(p.img)} alt={p.name} className={styles.showcaseImg} />
              </div>
              <div className={styles.showcaseInfo}>
                <h3 className={styles.showcaseName}>{p.name}</h3>
                <p className={styles.showcaseDesc}>{p.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- Products ---- */
function Products() {
  return (
    <section className={styles.sec} id="products">
      <div className="container">
        <div className={styles.secHead}>
          <span className={styles.secChip}>Core Products</span>
          <h2 className={styles.secH2}>Building <span className={styles.secH2Accent}>Intelligent Robots</span> with Open Source</h2>
          <p className={styles.secP}>Full-stack open source — from hardware to software, from simulation to real robots.</p>
        </div>
        <div className={styles.productGrid}>
          {categories.map((p) => (
            <Link key={p.id} to={p.to} className={styles.prodCard}>
              <div className={clsx(styles.prodCardMedia, `bg-gradient-to-br ${p.gradient}`)}>
                <span style={{fontSize: '2.5rem'}}>{p.icon}</span>
              </div>
              <div className={styles.prodCardBody}>
                <span className={styles.prodCardSub}>{p.subtitle}</span>
                <h3 className={styles.prodCardTitle}>{p.title}</h3>
                <p className={styles.prodCardDesc}>{p.desc}</p>
                <div className={styles.prodCardSpecs}>
                  {p.specs.map((s, j) => (
                    <span key={j} className={styles.prodCardSpec}>{s}</span>
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

/* ---- Advantages ---- */
function Advantages() {
  return (
    <section className={clsx(styles.sec, styles.secAlt)}>
      <div className="container">
        <div className={styles.secHead}>
          <h2 className={styles.secH2}>Why <span className={styles.secH2Accent}>Qiyue Robotics</span>?</h2>
          <p className={styles.secP}>More than just open-source hardware — we provide a one-stop robotics development experience from toolchains to community.</p>
        </div>
        <div className={styles.advGrid}>
          {advantages.map((a, i) => (
            <div key={i} className={styles.advCard}>
              <span className={styles.advIcon}>{a.icon}</span>
              <h3 className={styles.advTitle}>{a.title}</h3>
              <p className={styles.advDesc}>{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- Scenarios ---- */
function Scenarios() {
  return (
    <section className={styles.sec}>
      <div className="container">
        <div className={styles.secHead}>
          <span className={styles.secChip}>Applications</span>
          <h2 className={styles.secH2}>From Classroom to <span className={styles.secH2Accent}>Production</span></h2>
          <p className={styles.secP}>Our products are deployed across multiple industries.</p>
        </div>
        <div className={styles.scGrid}>
          {scenarios.map((s, i) => (
            <div key={i} className={styles.scCard}>
              <span className={styles.scIcon}>{s.icon}</span>
              <h3 className={styles.scTitle}>{s.title}</h3>
              <p className={styles.scDesc}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- Metrics ---- */
function Metrics() {
  return (
    <section className={styles.metrics}>
      <div className="container">
        <div className={styles.metricsGrid}>
          {metrics.map((m, i) => (
            <div key={i} className={styles.metricItem}>
              <span className={styles.metricValue}>{m.value}<small>{m.unit}</small></span>
              <span className={styles.metricLabel}>{m.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- CTA ---- */
function Cta() {
  return (
    <section className={styles.cta}>
      <div className={styles.ctaGlow} />
      <div className="container">
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaH2}>Ready to Start Your Robotics Journey?</h2>
          <p className={styles.ctaP}>Whether you're a researcher, startup team, or individual developer — you'll find the right tools and partners here.</p>
          <div className={styles.ctaBtns}>
            <Link to="/docs/intro" className={styles.btnFill}>📖 Get Started</Link>
            <Link to="https://aozldimvsb4qk5ct-x1oeddvzwb01u.taobao.com/" className={styles.btnStore}>🛒 Store</Link>
            <Link to="/about" className={styles.btnStrokeLight}>About Us</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---- Page ---- */
export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Qiyue Robotics — Open-source robotics technology and intelligent hardware platform">
      <Hero />
      <main>
        <Marquee />
        <ProductsShowcase />
        <Products />
        <Advantages />
        <Metrics />
        <Scenarios />
        <Cta />
      </main>
    </Layout>
  );
}
