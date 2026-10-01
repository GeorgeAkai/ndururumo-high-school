/**
 * Placeholder crest. Replace with the official school badge by dropping an
 * image into /public and swapping this component's markup for an <Image>.
 */
export function Crest({ className = "h-12 w-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 72" className={className} role="img" aria-label="Ndururumo High School crest">
      <path
        d="M32 2 60 10v24c0 17-12 29-28 36C16 63 4 51 4 34V10Z"
        fill="var(--color-brand-700)"
        stroke="var(--color-gold-500)"
        strokeWidth="3"
      />
      <path d="M12 46c6-6 12-9 20-9s14 3 20 9" fill="none" stroke="var(--color-gold-400)" strokeWidth="2" />
      <path d="M32 16v20M26 22c3 1 5 3 6 6 1-3 3-5 6-6" fill="none" stroke="var(--color-gold-300)" strokeWidth="2" strokeLinecap="round" />
      <text
        x="32"
        y="60"
        textAnchor="middle"
        fontFamily="Georgia, serif"
        fontSize="10"
        fontWeight="700"
        fill="var(--color-cream)"
        letterSpacing="1"
      >
        NHS
      </text>
    </svg>
  );
}
