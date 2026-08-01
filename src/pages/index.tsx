import {type ReactNode, useEffect, useRef, useState} from 'react';
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
    id: 'so-arm101',
    title: 'SO-ARM101',
    subtitle: '桌面级开源机械臂',
    desc: '6+1 自由度轻量机械臂，全开源 CAD 与 SDK。支持 ROS2 / Python，15 分钟上手，赋能机器人教育科研。',
    specs: ['6+1 DoF', '500g 负载', '±0.5mm 精度', 'ROS2/Python'],
    to: '/docs/so-arm101/overview',
    gradient: 'from-blue-950 via-blue-900 to-indigo-950',
    accent: '#3b82f6',
  },
  {
    id: 'lekiwi',
    title: 'Lekiwi',
    subtitle: '全向移动底盘平台',
    desc: '麦克纳姆轮全向移动，SLAM 自主导航，50kg 负载。模块化上装接口，一底多用，灵活扩展。',
    specs: ['全向移动', '50kg 负载', 'SLAM 导航', '8h 续航'],
    to: '/docs/lekiwi/overview',
    gradient: 'from-emerald-950 via-teal-900 to-cyan-950',
    accent: '#10b981',
  },
  {
    id: 'xlerobot',
    title: 'Xlerobot',
    subtitle: 'AI 家务机器人',
    desc: '双臂协作 + 端侧 AI，自然语言指令驱动。模仿学习框架加持，让机器人真正理解家庭环境。',
    specs: ['双臂 14 DoF', '端侧 AI', '模仿学习', '语音交互'],
    to: '/docs/xlerobot/overview',
    gradient: 'from-violet-950 via-purple-900 to-fuchsia-950',
    accent: '#8b5cf6',
  },
  {
    id: 'amazinghand',
    title: 'AmazingHand',
    subtitle: '五指触觉灵巧手',
    desc: '16 自由度仿生灵巧手，120 个触觉单元，力控精度 ±0.1N。兼容主流机械臂，即插即用。',
    specs: ['16 DoF', '120 触觉点', '±0.1N 力控', 'CAN/RS485'],
    to: '/docs/amazinghand/overview',
    gradient: 'from-orange-950 via-red-900 to-rose-950',
    accent: '#f97316',
  },
];

const advantages = [
  {icon: '📐', title: '全栈开源', desc: 'CAD 设计、PCB 文件、固件源码、SDK 全部按 Apache 2.0 协议开放，无任何闭源组件。'},
  {icon: '🧩', title: '模块化设计', desc: '各产品间接口标准化，底盘可搭载机械臂，灵巧手可即插即换，自由组合你的机器人方案。'},
  {icon: '📖', title: '教育生态', desc: '从零基础入门到高级科研，配套完整课程体系、实验手册、视频教程与在线社区支持。'},
  {icon: '🚀', title: '产业就绪', desc: '工业级制造工艺，通过严苛可靠性测试，已服务 50+ 高校实验室与 20+ 企业客户。'},
  {icon: '🤖', title: 'AI 原生', desc: '深度集成 PyTorch、ROS2、MoveIt，内置模仿学习与 Sim-to-Real 工具链，加速具身智能研发。'},
  {icon: '🌍', title: '全球社区', desc: '连接 5000+ 开发者，GitHub 累计 2000+ Stars，活跃的 Discord 技术交流社区。'},
];

const scenarios = [
  {icon: '🎓', title: '高校教育', desc: '机器人学、运动控制、机器视觉课程实验平台'},
  {icon: '🔬', title: '科研实验', desc: '具身智能、灵巧操作、Sim-to-Real 前沿研究'},
  {icon: '🏭', title: '轻量产线', desc: '3C 电子装配、实验室自动化、物料分拣搬运'},
  {icon: '🏠', title: '家庭服务', desc: '物品整理、桌面清洁、衣物折叠等日常家务'},
  {icon: '🏥', title: '医疗辅助', desc: '康复训练、手术辅助器械操作、药品递送'},
  {icon: '🛒', title: '商业应用', desc: '零售货架补货、仓库理货、餐厅传菜服务'},
];

const techs = [
  'ROS2 Humble', 'Python 3.10+', 'C++17', 'PyTorch', 'MoveIt 2',
  'Gazebo', 'Docker', 'Linux', 'CAN Bus', 'SLAM Toolbox',
  'Cartographer', 'Nav2', 'TensorRT', 'ONNX', 'gRPC',
];

/* ================================================================
   SVG 产品插图组件
   ================================================================ */
function ProductIllustration({id}: {id: string}) {
  switch (id) {
    case 'so-arm101':
      return (
        <svg viewBox="0 0 180 140" className={styles.prodIllus}>
          {/* 底座 */}
          <rect x="70" y="105" width="40" height="20" rx="4" fill="rgba(255,255,255,0.15)"/>
          {/* 旋转台 */}
          <ellipse cx="90" cy="105" rx="30" ry="8" fill="rgba(255,255,255,0.2)"/>
          {/* 关节 1 支柱 */}
          <rect x="84" y="75" width="12" height="30" rx="3" fill="rgba(255,255,255,0.25)"/>
          <circle cx="90" cy="75" r="6" fill="rgba(255,255,255,0.3)"/>
          {/* 大臂 */}
          <line x1="90" y1="75" x2="70" y2="42" stroke="rgba(255,255,255,0.35)" strokeWidth="8" strokeLinecap="round"/>
          <circle cx="70" cy="42" r="5" fill="rgba(255,255,255,0.3)"/>
          {/* 小臂 */}
          <line x1="70" y1="42" x2="95" y2="18" stroke="rgba(255,255,255,0.35)" strokeWidth="6" strokeLinecap="round"/>
          <circle cx="95" cy="18" r="4" fill="rgba(255,255,255,0.3)"/>
          {/* 末端夹爪 */}
          <line x1="95" y1="18" x2="110" y2="8" stroke="rgba(255,255,255,0.4)" strokeWidth="4" strokeLinecap="round"/>
          <circle cx="110" cy="6" r="3" fill="#60a5fa"/>
          {/* 地面投影 */}
          <ellipse cx="90" cy="128" rx="35" ry="6" fill="rgba(255,255,255,0.06)"/>
        </svg>
      );
    case 'lekiwi':
      return (
        <svg viewBox="0 0 180 140" className={styles.prodIllus}>
          {/* 车身 */}
          <rect x="40" y="55" width="100" height="55" rx="10" fill="rgba(255,255,255,0.15)"/>
          {/* 上装平台 */}
          <rect x="48" y="45" width="84" height="15" rx="5" fill="rgba(255,255,255,0.2)"/>
          {/* 4 个麦克纳姆轮 */}
          {[[55,108],[105,108],[55,90],[105,90]].map(([cx,cy],i) => (
            <g key={i}>
              <circle cx={cx} cy={cy} r="10" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2"/>
              <circle cx={cx} cy={cy} r="5" fill="rgba(255,255,255,0.2)"/>
              {[0,45,90,135].map(a => (
                <line key={a} x1={cx-3} y1={cy} x2={cx+3} y2={cy}
                  stroke="rgba(255,255,255,0.2)" strokeWidth="1.5"
                  transform={`rotate(${a},${cx},${cy})`}/>
              ))}
            </g>
          ))}
          {/* 激光雷达 */}
          <circle cx="90" cy="42" r="8" fill="rgba(255,255,255,0.2)"/>
          <circle cx="90" cy="42" r="4" fill="#34d399"/>
          {/* 地面投影 */}
          <ellipse cx="90" cy="122" rx="55" ry="6" fill="rgba(255,255,255,0.05)"/>
        </svg>
      );
    case 'xlerobot':
      return (
        <svg viewBox="0 0 180 140" className={styles.prodIllus}>
          {/* 身体 */}
          <rect x="65" y="55" width="50" height="60" rx="12" fill="rgba(255,255,255,0.15)"/>
          {/* 屏幕/面部 */}
          <rect x="72" y="62" width="36" height="24" rx="6" fill="rgba(255,255,255,0.2)"/>
          <circle cx="82" cy="74" r="4" fill="#c084fc"/>
          <circle cx="98" cy="74" r="4" fill="#c084fc"/>
          {/* 双臂 */}
          <line x1="65" y1="70" x2="40" y2="45" stroke="rgba(255,255,255,0.3)" strokeWidth="7" strokeLinecap="round"/>
          <line x1="115" y1="70" x2="140" y2="45" stroke="rgba(255,255,255,0.3)" strokeWidth="7" strokeLinecap="round"/>
          {/* 夹爪 */}
          <circle cx="40" cy="43" r="5" fill="rgba(255,255,255,0.25)"/>
          <circle cx="140" cy="43" r="5" fill="rgba(255,255,255,0.25)"/>
          {/* 底盘 */}
          <rect x="50" y="112" width="80" height="15" rx="6" fill="rgba(255,255,255,0.12)"/>
          {/* 轮子 */}
          <circle cx="58" cy="120" r="6" fill="rgba(255,255,255,0.2)"/>
          <circle cx="122" cy="120" r="6" fill="rgba(255,255,255,0.2)"/>
          {/* 地面投影 */}
          <ellipse cx="90" cy="132" rx="45" ry="5" fill="rgba(255,255,255,0.05)"/>
        </svg>
      );
    case 'amazinghand':
      return (
        <svg viewBox="0 0 180 140" className={styles.prodIllus}>
          {/* 手腕 */}
          <rect x="72" y="105" width="36" height="20" rx="5" fill="rgba(255,255,255,0.18)"/>
          {/* 手掌 */}
          <rect x="68" y="78" width="44" height="30" rx="8" fill="rgba(255,255,255,0.2)"/>
          {/* 五指 */}
          {[[-15,-30],[-5,-38],[5,-40],[15,-38],[25,-30]].map(([dx,dy],i) => {
            const baseX = 90 + dx * 0.3;
            const baseY = 78;
            const tipX = 90 + dx;
            const tipY = 78 + dy;
            return (
              <g key={i}>
                <line x1={baseX} y1={baseY} x2={tipX} y2={tipY}
                  stroke="rgba(255,255,255,0.3)" strokeWidth="6" strokeLinecap="round"/>
                <circle cx={tipX} cy={tipY-3} r="4.5" fill="rgba(251, 146, 60, 0.5)"/>
              </g>
            );
          })}
          {/* 触觉点示意 */}
          <circle cx="80" cy="52" r="1" fill="rgba(255,255,255,0.4)"/>
          <circle cx="90" cy="42" r="1" fill="rgba(255,255,255,0.4)"/>
          <circle cx="100" cy="52" r="1" fill="rgba(255,255,255,0.4)"/>
        </svg>
      );
    default:
      return null;
  }
}

/* ================================================================
   Hero — 大标题 + 渐变词 + 产品视觉区
   ================================================================ */
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
            <span className={styles.heroChip}>开源机器人平台</span>
            <h1 className={styles.heroH1}>
              探微知著
              <span className={styles.heroH1Grad}>启智未来</span>
            </h1>
            <p className={styles.heroP}>
              为开发者打造的模块化开源机器人生态 —— 从机械臂到灵巧手，从底盘到整机，
              用开放技术加速具身智能的每一步创新。
            </p>
            <div className={styles.heroBtns}>
              <Link to="/docs/intro" className={styles.btnFill}>快速入门 →</Link>
              <Link to="https://github.com/lumimoon-robotics" className={styles.btnStroke}>GitHub</Link>
            </div>
          </div>
          <div className={styles.heroVisual}>
            {/* 展示 4 个产品的小缩略图排列 */}
            <div className={styles.heroProductGrid}>
              {products.map((p) => (
                <Link key={p.id} to={p.to} className={styles.heroProductItem}
                  style={{'--accent': p.accent} as React.CSSProperties}>
                  <div className={clsx(styles.heroProductBg, `bg-gradient-to-br ${p.gradient}`)}>
                    <ProductIllustration id={p.id} />
                  </div>
                  <span className={styles.heroProductLabel}>{p.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

/* ================================================================
   滚动技术标签跑马灯
   ================================================================ */
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

/* ================================================================
   产品展示
   ================================================================ */
function Products() {
  return (
    <section className={styles.sec} id="products">
      <div className="container">
        <div className={styles.secHead}>
          <span className={styles.secChip}>核心产品</span>
          <h2 className={styles.secH2}>用开源构建<span className={styles.secH2Accent}>智能机器人</span></h2>
          <p className={styles.secP}>全链路开源，从硬件到软件，从仿真到真机，开箱即用。</p>
        </div>

        <div className={styles.productGrid}>
          {products.map((p) => (
            <Link key={p.id} to={p.to} className={styles.prodCard}>
              <div className={clsx(styles.prodCardMedia, `bg-gradient-to-br ${p.gradient}`)}>
                <ProductIllustration id={p.id} />
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

/* ================================================================
   优势亮点
   ================================================================ */
function Advantages() {
  return (
    <section className={clsx(styles.sec, styles.secAlt)}>
      <div className="container">
        <div className={styles.secHead}>
          <h2 className={styles.secH2}>为什么选择<span className={styles.secH2Accent}>启月探微</span></h2>
          <p className={styles.secP}>不仅仅是开源硬件 —— 我们提供从工具链到社区的一站式机器人开发体验。</p>
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

/* ================================================================
   应用场景
   ================================================================ */
function Scenarios() {
  return (
    <section className={styles.sec}>
      <div className="container">
        <div className={styles.secHead}>
          <span className={styles.secChip}>应用场景</span>
          <h2 className={styles.secH2}>从课堂到产线<span className={styles.secH2Accent}>全场景覆盖</span></h2>
          <p className={styles.secP}>我们的产品已在多个领域实现落地应用。</p>
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

/* ================================================================
   统计数据
   ================================================================ */
const metrics = [
  {value: '4', unit: '款', label: '核心产品线'},
  {value: '50', unit: '+', label: '高校实验室用户'},
  {value: '2000', unit: '+', label: 'GitHub Stars'},
  {value: '100', unit: '%', label: '开源协议'},
];

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

/* ================================================================
   CTA
   ================================================================ */
function Cta() {
  return (
    <section className={styles.cta}>
      <div className={styles.ctaGlow} />
      <div className="container">
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaH2}>准备好开启机器人开发了吗？</h2>
          <p className={styles.ctaP}>无论你是高校研究者、创业团队还是个人开发者，都能在这里找到合适的工具与伙伴。</p>
          <div className={styles.ctaBtns}>
            <Link to="/docs/intro" className={styles.btnFill}>📖 开始探索</Link>
            <Link to="/about" className={styles.btnStrokeLight}>关于我们</Link>
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
      <Hero />
      <main>
        <Marquee />
        <Products />
        <Advantages />
        <Metrics />
        <Scenarios />
        <Cta />
      </main>
    </Layout>
  );
}
