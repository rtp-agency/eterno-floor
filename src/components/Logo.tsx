export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <span className={`logo${compact ? ' logo--compact' : ''}`} aria-label="ETERNO design">
      <span className="logo__name">ETERNO</span>
      <span className="logo__sub">design</span>
    </span>
  );
}
