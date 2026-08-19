import React from 'react';

/**
 * 产品 SVG 插图组件
 * 用于没有实物照片的产品（相机、舵机）以及作为统一视觉语言的兜底。
 * 所有插图使用统一的 viewBox 与白色半透明描边风格，配合 accent 色点缀。
 */
export function ProductIllustration({
  id,
  accent = '#6366f1',
}: {
  id: string;
  accent?: string;
}) {
  const w = 'rgba(255,255,255,0.16)';
  const w2 = 'rgba(255,255,255,0.28)';
  const w3 = 'rgba(255,255,255,0.4)';

  switch (id) {
    case 'so-arm101':
      return (
        <svg viewBox="0 0 200 160" className="pp-illus" aria-hidden="true">
          <ellipse cx="100" cy="146" rx="52" ry="7" fill="rgba(255,255,255,0.06)" />
          <rect x="80" y="116" width="40" height="26" rx="5" fill={w} />
          <ellipse cx="100" cy="116" rx="34" ry="9" fill={w2} />
          <rect x="93" y="80" width="14" height="38" rx="4" fill={w2} />
          <circle cx="100" cy="80" r="7" fill={w3} />
          <line x1="100" y1="80" x2="74" y2="46" stroke={w3} strokeWidth="9" strokeLinecap="round" />
          <circle cx="74" cy="46" r="6" fill={w3} />
          <line x1="74" y1="46" x2="102" y2="18" stroke={w3} strokeWidth="7" strokeLinecap="round" />
          <circle cx="102" cy="18" r="5" fill={w3} />
          <line x1="102" y1="18" x2="120" y2="10" stroke={w3} strokeWidth="4" strokeLinecap="round" />
          <circle cx="122" cy="9" r="3.5" fill={accent} />
        </svg>
      );

    case 'lekiwi':
      return (
        <svg viewBox="0 0 200 160" className="pp-illus" aria-hidden="true">
          <ellipse cx="100" cy="140" rx="64" ry="7" fill="rgba(255,255,255,0.06)" />
          <rect x="44" y="62" width="112" height="60" rx="12" fill={w} />
          <rect x="52" y="50" width="96" height="16" rx="6" fill={w2} />
          {[
            [62, 122],
            [138, 122],
            [62, 94],
            [138, 94],
          ].map(([cx, cy], i) => (
            <g key={i}>
              <circle cx={cx} cy={cy} r="11" fill="none" stroke={w3} strokeWidth="2" />
              <circle cx={cx} cy={cy} r="5.5" fill={w2} />
              {[0, 45, 90, 135].map((a) => (
                <line
                  key={a}
                  x1={cx - 3}
                  y1={cy}
                  x2={cx + 3}
                  y2={cy}
                  stroke={w2}
                  strokeWidth="1.6"
                  transform={`rotate(${a},${cx},${cy})`}
                />
              ))}
            </g>
          ))}
          <circle cx="100" cy="46" r="9" fill={w2} />
          <circle cx="100" cy="46" r="4.5" fill={accent} />
        </svg>
      );

    case 'xlerobot':
      return (
        <svg viewBox="0 0 200 160" className="pp-illus" aria-hidden="true">
          <ellipse cx="100" cy="146" rx="50" ry="6" fill="rgba(255,255,255,0.06)" />
          <rect x="70" y="60" width="60" height="70" rx="14" fill={w} />
          <rect x="78" y="68" width="44" height="28" rx="7" fill={w2} />
          <circle cx="92" cy="82" r="5" fill={accent} />
          <circle cx="108" cy="82" r="5" fill={accent} />
          <line x1="70" y1="78" x2="40" y2="50" stroke={w3} strokeWidth="8" strokeLinecap="round" />
          <line x1="130" y1="78" x2="160" y2="50" stroke={w3} strokeWidth="8" strokeLinecap="round" />
          <circle cx="40" cy="48" r="6" fill={w2} />
          <circle cx="160" cy="48" r="6" fill={w2} />
          <rect x="56" y="126" width="88" height="16" rx="7" fill={w2} />
          <circle cx="66" cy="136" r="7" fill={w2} />
          <circle cx="134" cy="136" r="7" fill={w2} />
        </svg>
      );

    case 'amazinghand':
      return (
        <svg viewBox="0 0 200 160" className="pp-illus" aria-hidden="true">
          <ellipse cx="100" cy="146" rx="46" ry="6" fill="rgba(255,255,255,0.06)" />
          {/* 手掌 */}
          <rect x="70" y="70" width="60" height="66" rx="16" fill={w} />
          {/* 五根手指 */}
          {[
            [84, 66, 84, 34],
            [96, 62, 96, 28],
            [108, 62, 108, 30],
            [118, 66, 122, 40],
            [78, 70, 64, 48],
          ].map(([x1, y1, x2, y2], i) => (
            <g key={i}>
              <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={w2} strokeWidth="7" strokeLinecap="round" />
              <circle cx={x2} cy={y2} r="4" fill={accent} />
            </g>
          ))}
        </svg>
      );

    case 'wrist-camera':
      return (
        <svg viewBox="0 0 200 160" className="pp-illus" aria-hidden="true">
          <rect x="55" y="60" width="90" height="56" rx="10" fill={w} />
          <circle cx="100" cy="78" r="20" fill={w2} />
          <circle cx="100" cy="78" r="13" fill="rgba(255,255,255,0.1)" />
          <circle cx="100" cy="78" r="6" fill={accent} />
          <rect x="70" y="120" width="60" height="16" rx="5" fill={w2} />
          <circle cx="84" cy="128" r="2.5" fill={w3} />
          <circle cx="100" cy="128" r="2.5" fill={w3} />
          <circle cx="116" cy="128" r="2.5" fill={w3} />
        </svg>
      );

    case 'fixed-camera':
      return (
        <svg viewBox="0 0 200 160" className="pp-illus" aria-hidden="true">
          <line x1="100" y1="132" x2="100" y2="88" stroke={w2} strokeWidth="8" strokeLinecap="round" />
          <rect x="72" y="120" width="56" height="12" rx="5" fill={w2} />
          <rect x="50" y="48" width="100" height="62" rx="12" fill={w} />
          <circle cx="100" cy="70" r="24" fill={w2} />
          <circle cx="100" cy="70" r="16" fill="rgba(255,255,255,0.1)" />
          <circle cx="100" cy="70" r="7" fill={accent} />
          <rect x="62" y="114" width="76" height="12" rx="4" fill={w2} />
        </svg>
      );

    case 'dual-camera':
      return (
        <svg viewBox="0 0 200 160" className="pp-illus" aria-hidden="true">
          <rect x="42" y="52" width="116" height="60" rx="12" fill={w} />
          <circle cx="78" cy="72" r="18" fill={w2} />
          <circle cx="122" cy="72" r="18" fill={w2} />
          <circle cx="78" cy="72" r="11" fill="rgba(255,255,255,0.1)" />
          <circle cx="122" cy="72" r="11" fill="rgba(255,255,255,0.1)" />
          <circle cx="78" cy="72" r="5" fill={accent} />
          <circle cx="122" cy="72" r="5" fill={accent} />
          <rect x="62" y="118" width="76" height="14" rx="5" fill={w2} />
          <circle cx="80" cy="125" r="2.5" fill={w3} />
          <circle cx="100" cy="125" r="2.5" fill={w3} />
          <circle cx="120" cy="125" r="2.5" fill={w3} />
        </svg>
      );

    case 'servo':
      return (
        <svg viewBox="0 0 200 160" className="pp-illus" aria-hidden="true">
          <rect x="70" y="58" width="60" height="50" rx="8" fill={w} />
          <rect x="76" y="64" width="48" height="38" rx="5" fill={w2} />
          <circle cx="100" cy="83" r="10" fill="rgba(255,255,255,0.1)" />
          <circle cx="100" cy="83" r="5" fill={accent} />
          <line x1="100" y1="48" x2="100" y2="58" stroke={w3} strokeWidth="4" strokeLinecap="round" />
          <line x1="100" y1="108" x2="100" y2="120" stroke={w3} strokeWidth="4" strokeLinecap="round" />
          <line x1="70" y1="83" x2="54" y2="83" stroke={w2} strokeWidth="3" strokeLinecap="round" />
          <line x1="130" y1="83" x2="146" y2="83" stroke={w2} strokeWidth="3" strokeLinecap="round" />
        </svg>
      );

    case 'servo-mini':
      return (
        <svg viewBox="0 0 200 160" className="pp-illus" aria-hidden="true">
          <rect x="78" y="66" width="44" height="40" rx="7" fill={w} />
          <rect x="83" y="71" width="34" height="30" rx="4" fill={w2} />
          <circle cx="100" cy="86" r="8" fill="rgba(255,255,255,0.1)" />
          <circle cx="100" cy="86" r="4" fill={accent} />
          <line x1="100" y1="58" x2="100" y2="66" stroke={w3} strokeWidth="3" strokeLinecap="round" />
          <line x1="100" y1="106" x2="100" y2="114" stroke={w3} strokeWidth="3" strokeLinecap="round" />
          <line x1="78" y1="86" x2="66" y2="86" stroke={w2} strokeWidth="2.5" strokeLinecap="round" />
          <line x1="122" y1="86" x2="134" y2="86" stroke={w2} strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );

    default:
      return null;
  }
}
