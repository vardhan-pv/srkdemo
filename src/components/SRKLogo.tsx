/**
 * SRK INTERIORS — SVG LOGO
 * Refined vector logo — gold on dark, clean modern style.
 * Preserves the original SRK identity: home/roof icon + SRK INTERIORS text.
 */

interface SRKLogoProps {
  className?: string;
  variant?: "default" | "white" | "dark";
}

export default function SRKLogo({ className, variant = "default" }: SRKLogoProps) {
  const goldColor = "#C99A3D";
  const textColor = variant === "white" ? "#FFFFFF" : "#111111";
  const accentColor = variant === "white" ? "rgba(255,255,255,0.7)" : "#6b6b6b";

  return (
    <svg
      className={className}
      viewBox="0 0 220 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="SRK Interiors Logo"
    >
      {/* === HOUSE / ROOF ICON === */}
      <g transform="translate(0, 4)">
        {/* Roof triangle */}
        <polygon
          points="22,2 42,18 2,18"
          fill={goldColor}
          opacity="0.15"
        />
        <polyline
          points="22,2 42,18 2,18"
          fill="none"
          stroke={goldColor}
          strokeWidth="2"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        {/* House walls */}
        <rect
          x="8"
          y="18"
          width="28"
          height="20"
          rx="1"
          fill={goldColor}
          opacity="0.08"
          stroke={goldColor}
          strokeWidth="1.5"
        />
        {/* Door */}
        <rect
          x="18"
          y="26"
          width="8"
          height="12"
          rx="1"
          fill={goldColor}
          opacity="0.3"
        />
        {/* Window left */}
        <rect
          x="10"
          y="21"
          width="5"
          height="4"
          rx="0.5"
          fill={goldColor}
          opacity="0.5"
        />
        {/* Window right */}
        <rect
          x="29"
          y="21"
          width="5"
          height="4"
          rx="0.5"
          fill={goldColor}
          opacity="0.5"
        />
        {/* Chimney */}
        <rect
          x="30"
          y="8"
          width="4"
          height="8"
          rx="0.5"
          fill={goldColor}
          opacity="0.6"
        />
        {/* Gold accent dot at peak */}
        <circle cx="22" cy="2" r="2" fill={goldColor} />
      </g>

      {/* === TEXT: SRK === */}
      <text
        x="52"
        y="30"
        fontFamily="'Playfair Display', Georgia, serif"
        fontSize="26"
        fontWeight="700"
        fill={textColor}
        letterSpacing="-0.5"
      >
        SRK
      </text>

      {/* === DIVIDER LINE === */}
      <rect x="52" y="34" width="50" height="1" fill={goldColor} opacity="0.6" />

      {/* === TEXT: INTERIORS === */}
      <text
        x="52"
        y="46"
        fontFamily="'Inter', Arial, sans-serif"
        fontSize="10"
        fontWeight="500"
        fill={accentColor}
        letterSpacing="4"
      >
        INTERIORS
      </text>
    </svg>
  );
}
