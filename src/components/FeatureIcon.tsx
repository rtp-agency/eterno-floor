import type { JSX } from 'react';

const s = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

const icons: JSX.Element[] = [
  // 0 — underfloor heating
  <g key="0">
    <path {...s} d="M3 15c1.4 0 1.4-2 2.8-2s1.4 2 2.8 2 1.4-2 2.8-2 1.4 2 2.8 2 1.4-2 2.8-2 1.4 2 2.8 2" />
    <path {...s} d="M6 10V6M12 10V6M18 10V6" />
    <path {...s} d="M4.5 8.5 6 6l1.5 2.5M10.5 8.5 12 6l1.5 2.5M16.5 8.5 18 6l1.5 2.5" />
    <path {...s} d="M3 19h18" />
  </g>,
  // 1 — maximum strength (kettlebell)
  <g key="1">
    <path {...s} d="M9 8.5a3 3 0 1 1 6 0" />
    <path {...s} d="M8.5 8.5h7l1.2 2A6 6 0 1 1 7.3 10.5z" />
    <path {...s} d="M10.5 14.5h3" />
  </g>,
  // 2 — easy to clean (spray)
  <g key="2">
    <path {...s} d="M9 9h4v9a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1z" />
    <path {...s} d="M9 9V6h4v3" />
    <path {...s} d="M13 6h3M16 6v2" />
    <path {...s} d="M18.5 5.5v.01M20 8v.01M18.5 10.5v.01" />
  </g>,
  // 3 — scratch resistant (shield)
  <g key="3">
    <path {...s} d="M12 3.5 19 6v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" />
    <path {...s} d="M9.5 9.5 15 15M14.5 9l1.5 1.5M8 12.5l1.5 1.5" />
  </g>,
  // 4 — pet friendly (paw)
  <g key="4">
    <circle cx="8" cy="8.5" r="1.6" fill="currentColor" stroke="none" />
    <circle cx="12" cy="7" r="1.6" fill="currentColor" stroke="none" />
    <circle cx="16" cy="8.5" r="1.6" fill="currentColor" stroke="none" />
    <path fill="currentColor" stroke="none" d="M12 11c2.5 0 4.5 1.8 4.5 3.9 0 1.6-1.4 2.1-2.6 2.1-1 0-1.3-.4-1.9-.4s-.9.4-1.9.4c-1.2 0-2.6-.5-2.6-2.1C7.5 12.8 9.5 11 12 11z" />
  </g>,
  // 5 — fade resistant (sun)
  <g key="5">
    <circle {...s} cx="12" cy="12" r="4" />
    <path {...s} d="M12 3v2.5M12 18.5V21M3 12h2.5M18.5 12H21M5.6 5.6l1.8 1.8M16.6 16.6l1.8 1.8M18.4 5.6l-1.8 1.8M7.4 16.6l-1.8 1.8" />
  </g>,
  // 6 — 100% waterproof (drop)
  <g key="6">
    <path {...s} d="M12 3.5c3 3.6 5.5 6.4 5.5 9.4A5.5 5.5 0 0 1 6.5 12.9c0-3 2.5-5.8 5.5-9.4z" />
    <path {...s} d="M9.5 13a2.5 2.5 0 0 0 2.5 2.5" />
  </g>,
  // 7 — sound insulation (muted speaker)
  <g key="7">
    <path {...s} d="M4 9.5h3l4-3.5v12l-4-3.5H4z" />
    <path {...s} d="M15.5 9.5 20 14M20 9.5 15.5 14" />
  </g>,
  // 8 — click installation (interlocking planks)
  <g key="8">
    <path {...s} d="M3 8h7v3H8v2h2v3H3z" />
    <path {...s} d="M21 16h-7v-3h2v-2h-2V8h7z" />
  </g>,
  // 9 — eco friendly (leaf)
  <g key="9">
    <path {...s} d="M5 19c0-7 5-12 14-12 0 9-5 14-12 14-2 0-2-2-2-2z" />
    <path {...s} d="M9 15c2.5-2.5 5-3.5 8-4" />
  </g>,
];

export function FeatureIcon({ index, className }: { index: number; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="28" height="28" className={className} aria-hidden="true">
      {icons[index] ?? null}
    </svg>
  );
}
