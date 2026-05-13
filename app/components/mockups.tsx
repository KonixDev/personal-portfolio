/* eslint-disable react/no-unknown-property */
import type { ReactNode } from "react";

type MockupProps = {
  accent: string;
  accentSoft: string;
};

/* ─────────── Commercy — checkout / cart scene ─────────── */
export function CommercyMockup({ accent, accentSoft }: MockupProps) {
  return (
    <svg viewBox="0 0 320 200" className="h-full w-full" aria-hidden>
      <rect width="320" height="200" fill="var(--color-card)" />
      <g transform="translate(20 18)">
        <rect width="48" height="6" rx="1" fill="var(--color-ink)" opacity="0.85" />
        <rect y="14" width="32" height="4" rx="1" fill="var(--color-muted)" opacity="0.5" />
      </g>
      <g transform="translate(20 50)">
        {[0, 1, 2].map((i) => (
          <g key={i} transform={`translate(${i * 96} 0)`}>
            <rect width="84" height="70" rx="2" fill={accentSoft} />
            <rect x="10" y="50" width="40" height="4" rx="1" fill="var(--color-ink)" opacity="0.85" />
            <rect x="10" y="58" width="22" height="3" rx="1" fill={accent} opacity="0.9" />
            <circle cx="64" cy="22" r="10" fill={accent} opacity="0.18" />
            <circle cx="64" cy="22" r="5" fill={accent} />
          </g>
        ))}
      </g>
      <g transform="translate(20 138)">
        <rect width="280" height="34" rx="2" fill="var(--color-paper-warm)" />
        <g transform="translate(14 12)">
          <rect width="10" height="10" rx="2" fill={accent} />
          <rect x="18" y="2" width="84" height="3" rx="1" fill="var(--color-ink)" opacity="0.85" />
          <rect x="18" y="9" width="56" height="3" rx="1" fill="var(--color-muted)" opacity="0.6" />
        </g>
        <g transform="translate(204 12)">
          <rect width="62" height="10" rx="5" fill={accent} />
          <text
            x="31"
            y="8"
            textAnchor="middle"
            fontFamily="ui-monospace, monospace"
            fontSize="6"
            fill="white"
            letterSpacing="0.12em"
          >
            CHECKOUT
          </text>
        </g>
      </g>
    </svg>
  );
}

/* ─────────── Trades — marketplace cards w/ rating ─────────── */
export function TradesMockup({ accent, accentSoft }: MockupProps) {
  return (
    <svg viewBox="0 0 320 200" className="h-full w-full" aria-hidden>
      <rect width="320" height="200" fill="var(--color-card)" />
      <g transform="translate(20 18)">
        <rect width="56" height="18" rx="9" fill={accentSoft} />
        <text
          x="28"
          y="12"
          textAnchor="middle"
          fontFamily="ui-monospace, monospace"
          fontSize="7"
          fill={accent}
          letterSpacing="0.12em"
        >
          PLOMERÍA
        </text>
        <rect x="64" width="46" height="18" rx="9" fill="none" stroke="var(--color-rule)" />
        <rect x="118" width="40" height="18" rx="9" fill="none" stroke="var(--color-rule)" />
      </g>
      {[
        { name: "M. Coll", rating: 4.9, dist: "1.2km" },
        { name: "A. Ríos", rating: 4.7, dist: "2.8km" },
      ].map((p, i) => (
        <g key={i} transform={`translate(20 ${52 + i * 64})`}>
          <rect width="280" height="54" rx="3" fill="var(--color-paper-2)" />
          <circle cx="32" cy="27" r="16" fill={accent} opacity="0.18" />
          <circle cx="32" cy="27" r="10" fill={accent} />
          <rect x="56" y="14" width="64" height="4" rx="1" fill="var(--color-ink)" opacity="0.85" />
          <rect x="56" y="24" width="42" height="3" rx="1" fill="var(--color-muted)" opacity="0.6" />
          <g transform="translate(56 32)">
            {[0, 1, 2, 3, 4].map((s) => (
              <polygon
                key={s}
                points="3,0 4,2 6,2 4.5,3.5 5,5.5 3,4.5 1,5.5 1.5,3.5 0,2 2,2"
                fill={s < Math.floor(p.rating) ? accent : "var(--color-rule)"}
                transform={`translate(${s * 7} 0)`}
              />
            ))}
            <text
              x="40"
              y="5"
              fontFamily="ui-monospace, monospace"
              fontSize="6"
              fill="var(--color-muted)"
            >
              {p.rating} · {p.dist}
            </text>
          </g>
          <rect x="220" y="18" width="48" height="18" rx="9" fill="var(--color-ink)" />
          <text
            x="244"
            y="30"
            textAnchor="middle"
            fontFamily="ui-monospace, monospace"
            fontSize="6"
            fill="var(--color-paper)"
            letterSpacing="0.1em"
          >
            CONTRATAR
          </text>
        </g>
      ))}
    </svg>
  );
}

/* ─────────── Pendi — kanban board ─────────── */
export function PendiMockup({ accent, accentSoft }: MockupProps) {
  const cols = [
    { label: "Backlog", count: 3, tones: [0.25, 0.4, 0.55] },
    { label: "Doing", count: 2, tones: [1, 0.7] },
    { label: "Done", count: 2, tones: [0.15, 0.2] },
  ];
  return (
    <svg viewBox="0 0 320 200" className="h-full w-full" aria-hidden>
      <rect width="320" height="200" fill="var(--color-card)" />
      <g transform="translate(16 16)">
        <rect width="68" height="14" rx="2" fill="var(--color-ink)" />
        <rect x="80" y="3" width="40" height="8" rx="1" fill="var(--color-muted)" opacity="0.3" />
      </g>
      {cols.map((col, ci) => (
        <g key={ci} transform={`translate(${16 + ci * 100} 42)`}>
          <rect width="88" height="148" rx="3" fill="var(--color-paper-2)" />
          <g transform="translate(10 10)">
            <text
              fontFamily="ui-monospace, monospace"
              fontSize="6.5"
              fill="var(--color-muted)"
              letterSpacing="0.12em"
              y="6"
            >
              {col.label.toUpperCase()}
            </text>
            <circle cx="62" cy="3" r="6" fill={ci === 1 ? accent : "var(--color-rule)"} />
            <text
              x="62"
              y="5.5"
              textAnchor="middle"
              fontFamily="ui-monospace, monospace"
              fontSize="6"
              fill={ci === 1 ? "white" : "var(--color-muted)"}
            >
              {col.count}
            </text>
          </g>
          {col.tones.map((opacity, ti) => (
            <g key={ti} transform={`translate(8 ${24 + ti * 32})`}>
              <rect width="72" height="26" rx="2" fill="var(--color-card)" />
              <rect x="6" y="6" width="40" height="3" rx="1" fill="var(--color-ink)" opacity="0.8" />
              <rect x="6" y="13" width="28" height="2" rx="1" fill="var(--color-muted)" opacity="0.5" />
              <rect
                x="6"
                y="19"
                width="14"
                height="3"
                rx="1.5"
                fill={accent}
                opacity={ci === 1 ? opacity : 0.5}
              />
              <circle cx="62" cy="20" r="4" fill={accentSoft} stroke={accent} strokeWidth="0.5" />
            </g>
          ))}
        </g>
      ))}
    </svg>
  );
}

/* ─────────── useDeploy — terminal + file tree ─────────── */
export function UseDeployMockup({ accent, accentSoft }: MockupProps) {
  const lines = [
    { indent: 0, text: "apps/", muted: false },
    { indent: 1, text: "├ server/", muted: false },
    { indent: 1, text: "└ client/", muted: false },
    { indent: 0, text: "packages/", muted: true },
  ];
  return (
    <svg viewBox="0 0 320 200" className="h-full w-full" aria-hidden>
      <rect width="320" height="200" fill="var(--color-card)" />
      <g transform="translate(16 16)">
        <rect width="112" height="168" rx="3" fill="var(--color-paper-2)" />
        <g transform="translate(10 12)">
          <text fontFamily="ui-monospace, monospace" fontSize="6.5" fill="var(--color-muted)" letterSpacing="0.12em">
            EXPLORER
          </text>
          {lines.map((line, i) => (
            <text
              key={i}
              y={20 + i * 12}
              x={line.indent * 8}
              fontFamily="ui-monospace, monospace"
              fontSize="7"
              fill={line.muted ? "var(--color-muted-soft)" : "var(--color-ink)"}
              opacity={line.muted ? 0.6 : 0.95}
            >
              {line.text}
            </text>
          ))}
          <rect y={20 + lines.length * 12} width="80" height="14" rx="2" fill={accentSoft} />
          <text
            x="6"
            y={20 + lines.length * 12 + 9}
            fontFamily="ui-monospace, monospace"
            fontSize="6.5"
            fill={accent}
          >
            ▸ landing.tsx
          </text>
        </g>
      </g>
      <g transform="translate(140 16)">
        <rect width="164" height="168" rx="3" fill="var(--color-ink)" />
        <g transform="translate(0 0)">
          <circle cx="10" cy="10" r="3" fill="#ff5f56" />
          <circle cx="20" cy="10" r="3" fill="#ffbd2e" />
          <circle cx="30" cy="10" r="3" fill="#27c93f" />
          <text
            x="82"
            y="13"
            textAnchor="middle"
            fontFamily="ui-monospace, monospace"
            fontSize="7"
            fill="var(--color-muted-soft)"
          >
            ~ useDeploy
          </text>
        </g>
        <g transform="translate(12 28)" fontFamily="ui-monospace, monospace" fontSize="7.5">
          <text y="0" fill="var(--color-muted-soft)">$ bun dev</text>
          <text y="14" fill={accent}>▸ next ready in 821ms</text>
          <text y="28" fill={accent}>▸ express on :4000</text>
          <text y="42" fill="var(--color-paper)" opacity="0.7">→ http://localhost:3000</text>
          <text y="56" fill="var(--color-muted-soft)">$ _</text>
          <rect x="14" y="51" width="6" height="9" fill={accent}>
            <animate attributeName="opacity" values="1;0;1" dur="1.1s" repeatCount="indefinite" />
          </rect>
        </g>
        <g transform="translate(12 100)">
          <rect width="140" height="56" rx="2" fill="#0d0d0d" stroke="#1f1f1f" />
          <g transform="translate(8 10)" fontFamily="ui-monospace, monospace" fontSize="6.5" fill="var(--color-muted-soft)">
            <text>{"// modules/iam"}</text>
            <text y="10" fill={accent}>export class User {`{`}</text>
            <text y="20" x="8" fill="var(--color-paper)">id: UserId</text>
            <text y="30" x="8" fill="var(--color-paper)">email: Email</text>
            <text y="40" fill={accent}>{`}`}</text>
          </g>
        </g>
      </g>
    </svg>
  );
}

/* ─────────── Studio mark — hero ornament ─────────── */
export function StudioMark() {
  const radius = 90;
  const text = "AGENCIA · STUDIO · EST 2026 · BUENOS AIRES · REMOTE · ";
  return (
    <svg viewBox="-110 -110 220 220" className="h-full w-full" aria-hidden>
      <defs>
        <path
          id="studio-mark-circle"
          d={`M 0,-${radius} A ${radius},${radius} 0 1,1 0,${radius} A ${radius},${radius} 0 1,1 0,-${radius}`}
          fill="none"
        />
      </defs>

      <g className="spin-slow">
        <circle cx="0" cy="0" r={radius} fill="none" stroke="var(--color-ink)" strokeWidth="0.4" opacity="0.5" />
        <text
          fill="var(--color-ink)"
          fontFamily="ui-monospace, monospace"
          fontSize="9"
          letterSpacing="0.32em"
        >
          <textPath href="#studio-mark-circle" startOffset="0">
            {text + text}
          </textPath>
        </text>
      </g>

      <g>
        <circle cx="0" cy="0" r="46" fill="var(--color-paper-warm)" opacity="0.85" />
        <circle cx="0" cy="0" r="46" fill="none" stroke="var(--color-ink)" strokeWidth="0.5" />

        {/* Geometric mark inside */}
        <g stroke="var(--color-ink)" strokeWidth="0.7" fill="none">
          <circle cx="0" cy="-10" r="14" />
          <circle cx="-9" cy="6" r="14" />
          <circle cx="9" cy="6" r="14" />
        </g>
        <circle cx="0" cy="0" r="3" fill="var(--color-accent)" />

        <text
          y="34"
          textAnchor="middle"
          fontFamily="ui-monospace, monospace"
          fontSize="6.5"
          fill="var(--color-muted)"
          letterSpacing="0.22em"
        >
          ★ EST 2026
        </text>
      </g>
    </svg>
  );
}

/* ─────────── Process icons ─────────── */
function IconFrame({ children }: { children: ReactNode }) {
  return (
    <svg viewBox="0 0 40 40" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden>
      {children}
    </svg>
  );
}

export function IconCall() {
  return (
    <IconFrame>
      <circle cx="20" cy="20" r="14" />
      <path d="M14 20q3 4 6 6" strokeLinecap="round" />
      <path d="M20 14q4 0 6 6" strokeLinecap="round" />
      <circle cx="20" cy="20" r="1.5" fill="currentColor" stroke="none" />
    </IconFrame>
  );
}
export function IconProposal() {
  return (
    <IconFrame>
      <rect x="9" y="6" width="22" height="28" rx="1.5" />
      <path d="M13 14h14M13 19h14M13 24h10" strokeLinecap="round" />
      <circle cx="28" cy="29" r="3" />
    </IconFrame>
  );
}
export function IconBuild() {
  return (
    <IconFrame>
      <path d="M8 30l8-8 4 4 12-12" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="6" y="28" width="6" height="6" />
      <rect x="14" y="20" width="6" height="6" />
      <rect x="22" y="20" width="6" height="6" />
      <rect x="30" y="12" width="6" height="6" />
    </IconFrame>
  );
}
export function IconHandoff() {
  return (
    <IconFrame>
      <path d="M6 20h22m0 0l-6-6m6 6l-6 6" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="30" y="10" width="6" height="20" rx="1" />
    </IconFrame>
  );
}
