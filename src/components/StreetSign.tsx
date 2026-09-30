/*
  Elevation drawing of a street-name blade and a regulatory panel on one post,
  the way the City of Los Angeles mounts them. The blade carries the shop's own
  block of Nordhoff St. Sizes follow the drawing, not the code: a 9 in. blade
  with 6 in. capitals, a 12 x 18 in. regulatory panel, both on a 2 in. post.
*/
export default function StreetSign({ className = "" }: { className?: string }) {
  const line = { stroke: "currentColor", strokeWidth: 1, fill: "none" } as const;

  return (
    <svg
      className={`w-full h-full ${className}`}
      viewBox="0 0 360 480"
      role="img"
      aria-label="Drawing of a street-name blade reading Nordhoff St, block 21300, above a speed limit panel on one post."
    >
      {/* Ground */}
      <path d="M24 440h312" {...line} strokeWidth={1.5} />
      {Array.from({ length: 20 }, (_, i) => (
        <path key={i} d={`M${32 + i * 16} 440l-8 10`} {...line} opacity={0.5} />
      ))}

      {/* Post */}
      <rect x="176" y="60" width="8" height="380" fill="var(--color-paper)" opacity="0.9" />
      <path d="M180 60v380" {...line} opacity={0.35} />

      {/* Blade: blue, white border, white lettering */}
      <g transform="translate(40 76)">
        <rect width="280" height="66" className="blade-blue" />
        <rect x="4" y="4" width="272" height="58" {...line} stroke="var(--color-paper)" strokeWidth={2} />
        <text x="16" y="46" fill="var(--color-paper)" className="blade-text" fontSize="28">NORDHOFF ST</text>
        <text x="262" y="30" fill="var(--color-paper)" textAnchor="end" className="blade-text" fontSize="12">21300</text>
      </g>
      {/* Bracket */}
      <rect x="172" y="142" width="16" height="10" fill="var(--color-paper)" opacity="0.9" />

      {/* Regulatory panel */}
      <g transform="translate(120 172)">
        <rect width="120" height="180" fill="var(--color-paper)" />
        <rect x="5" y="5" width="110" height="170" {...line} stroke="var(--color-ink)" strokeWidth={3} />
        <text x="60" y="44" textAnchor="middle" fill="var(--color-ink)" className="blade-text" fontSize="20">SPEED</text>
        <text x="60" y="68" textAnchor="middle" fill="var(--color-ink)" className="blade-text" fontSize="20">LIMIT</text>
        <text x="60" y="152" textAnchor="middle" fill="var(--color-ink)" className="blade-text" fontSize="84">35</text>
      </g>

      {/* Dimensions */}
      <g {...line} opacity={0.7}>
        <path d="M332 76v66M326 76h12M326 142h12" />
        <path d="M120 372h120M120 366v12M240 366v12" />
        <path d="M28 172v180M22 172h12M22 352h12" />
      </g>
      <g fill="currentColor" className="label" style={{ fontSize: 10 }}>
        <text x="340" y="113">9 in.</text>
        <text x="180" y="392" textAnchor="middle">12 in.</text>
        <text x="16" y="266" textAnchor="middle" transform="rotate(-90 16 266)">18 in.</text>
      </g>
    </svg>
  );
}
