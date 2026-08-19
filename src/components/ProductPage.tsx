import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {ProductIllustration} from './ProductIllustration';
import styles from './ProductPage.module.css';

export type KeySpec = {label: string; value: string};
export type Highlight = {icon: string; title: string; desc: string};
export type Spec = {label: string; value: string};
export type RelatedProduct = {name: string; desc: string; to: string};

export type ProductPageProps = {
  title: string;
  description: string;
  category: string;
  categoryTo: string;
  accent: string;
  tagline: string;
  intro: string;
  image?: string;
  illustration?: string;
  keySpecs: KeySpec[];
  highlights: Highlight[];
  specs: Spec[];
  docsUrl: string;
  docsLabel?: string;
  storeUrl?: string;
  related?: RelatedProduct[];
};

const STORE_URL = 'https://aozldimvsb4qk5ct-x1oeddvzwb01u.taobao.com/';

export default function ProductPage(props: ProductPageProps) {
  const {
    title,
    description,
    category,
    categoryTo,
    accent,
    tagline,
    intro,
    image,
    illustration,
    keySpecs,
    highlights,
    specs,
    docsUrl,
    docsLabel = '查看教程',
    storeUrl = STORE_URL,
    related,
  } = props;

  return (
    <Layout title={title} description={description}>
      <main className={styles.main}>
        {/* ===== Hero ===== */}
        <section className={styles.hero}>
          <div className={clsx('container', styles.heroInner)}>
            <div className={styles.heroText}>
              <Link to={categoryTo} className={styles.breadcrumb}>
                <span className={styles.breadcrumbAccent} style={{color: accent}}>
                  ●
                </span>
                {category}
              </Link>
              <h1 className={styles.title}>{title}</h1>
              <p className={styles.tagline}>{tagline}</p>
              <p className={styles.intro}>{intro}</p>
              <div className={styles.ctas}>
                <Link to={docsUrl} className={styles.btnPrimary} style={{'--accent': accent} as React.CSSProperties}>
                  📖 {docsLabel} →
                </Link>
                <Link to={storeUrl} className={styles.btnStore}>
                  🛒 前往购买
                </Link>
              </div>
            </div>

            <div className={styles.heroVisual}>
              <div
                className={clsx(
                  styles.heroVisualBg,
                  image ? styles.heroVisualBgPhoto : styles.heroVisualBgIllus,
                )}
                style={{'--accent': accent} as React.CSSProperties}>
                {image ? (
                  <img
                    src={useBaseUrl(image)}
                    alt={title}
                    className={styles.heroImg}
                  />
                ) : illustration ? (
                  <div className={styles.heroIllus}>
                    <ProductIllustration id={illustration} accent={accent} />
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </section>

        {/* ===== 关键规格 ===== */}
        <section className={styles.section}>
          <div className="container">
            <h2 className={styles.sectionTitle}>关键规格</h2>
            <div className={styles.keySpecGrid}>
              {keySpecs.map((s, i) => (
                <div key={i} className={styles.keySpecCard} style={{'--accent': accent} as React.CSSProperties}>
                  <span className={styles.keySpecValue}>{s.value}</span>
                  <span className={styles.keySpecLabel}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== 亮点 ===== */}
        <section className={clsx(styles.section, styles.sectionAlt)}>
          <div className="container">
            <h2 className={styles.sectionTitle}>产品亮点</h2>
            <div className={styles.highlightGrid}>
              {highlights.map((h, i) => (
                <div key={i} className={styles.highlightCard}>
                  <span className={styles.highlightIcon}>{h.icon}</span>
                  <h3 className={styles.highlightTitle}>{h.title}</h3>
                  <p className={styles.highlightDesc}>{h.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== 完整规格 ===== */}
        <section className={styles.section}>
          <div className={clsx('container', styles.specWrap)}>
            <h2 className={styles.sectionTitle}>完整技术规格</h2>
            <div className={styles.specTable}>
              {specs.map((s, i) => (
                <div key={i} className={styles.specRow}>
                  <span className={styles.specLabel}>{s.label}</span>
                  <span className={styles.specValue}>{s.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== 相关产品 ===== */}
        {related && related.length > 0 && (
          <section className={clsx(styles.section, styles.sectionAlt)}>
            <div className="container">
              <h2 className={styles.sectionTitle}>相关产品</h2>
              <div className={styles.relatedGrid}>
                {related.map((r, i) => (
                  <Link key={i} to={r.to} className={styles.relatedCard}>
                    <h3 className={styles.relatedName}>{r.name}</h3>
                    <p className={styles.relatedDesc}>{r.desc}</p>
                    <span className={styles.relatedMore} style={{color: accent}}>
                      了解更多 →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ===== 底部 CTA ===== */}
        <section className={styles.ctaBand}>
          <div className="container">
            <div className={styles.ctaBandInner}>
              <h2 className={styles.ctaBandTitle}>准备好上手了吗？</h2>
              <p className={styles.ctaBandDesc}>
                查看详细教程文档，或在淘宝店铺获取产品与技术支持。
              </p>
              <div className={styles.ctas}>
                <Link to={docsUrl} className={styles.btnPrimary} style={{'--accent': accent} as React.CSSProperties}>
                  📖 {docsLabel} →
                </Link>
                <Link to={storeUrl} className={styles.btnStore}>
                  🛒 前往购买
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
