interface LogoMarkProps {
  /** Controls height in px; width scales proportionally (ratio ~1.4:1) */
  size?: number;
  className?: string;
}

/**
 * MJG editorial monogram.
 * Frame: thin sharp border.  Left: bold italic M.  Right: stacked J / G in mono.  Accent: orange square dot.
 */
export default function LogoMark({ size = 36, className }: LogoMarkProps) {
  const w = Math.round(size * 1.38);
  const h = size;

  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 46 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="MJG"
      role="img"
      className={className}
    >
      {/* Outer editorial frame */}
      <rect x="0.5" y="0.5" width="45" height="33" stroke="currentColor" strokeWidth="0.75" />

      {/* M — Cormorant Garamond, bold italic, dominant left half */}
      <text
        x="4"
        y="25"
        fontFamily="'Cormorant Garamond', Georgia, serif"
        fontSize="23"
        fontWeight="700"
        fontStyle="italic"
        fill="currentColor"
      >
        M
      </text>

      {/* Thin vertical rule — divides M from JG */}
      <line x1="27" y1="5" x2="27" y2="29" stroke="currentColor" strokeWidth="0.6" opacity="0.25" />

      {/* J — small mono, upper right */}
      <text
        x="31"
        y="17"
        fontFamily="'Fira Code', 'Courier New', monospace"
        fontSize="8"
        fontWeight="500"
        fill="currentColor"
        opacity="0.65"
      >
        J
      </text>

      {/* G — small mono, lower right */}
      <text
        x="31"
        y="27"
        fontFamily="'Fira Code', 'Courier New', monospace"
        fontSize="8"
        fontWeight="500"
        fill="currentColor"
        opacity="0.65"
      >
        G
      </text>

      {/* Orange accent square — signature mark (no radius, editorial) */}
      <rect x="39" y="24" width="3.5" height="3.5" fill="#FF6B35" />
    </svg>
  );
}
