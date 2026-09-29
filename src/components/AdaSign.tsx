import { brailleCells } from "../content/signs";

const ROOM = "158";

/*
  Elevation drawing of a room sign with the dimensions that decide whether it
  passes inspection. Values are from the 2010 ADA Standards, section 703.
*/
export default function AdaSign({ className = "" }: { className?: string }) {
  const cells = brailleCells(ROOM);
  const line = { stroke: "currentColor", strokeWidth: 1, fill: "none" } as const;

  return (
    <svg
      className={`w-full h-full ${className}`}
      viewBox="0 0 360 480"
      role="img"
      aria-label="Drawing of an ADA room sign. Raised characters between five eighths of an inch and two inches tall, Grade 2 braille directly below, mounted 48 to 60 inches above the floor."
    >
      {/* Wall and floor */}
      <path d="M24 440h312" {...line} strokeWidth={1.5} />
      {Array.from({ length: 20 }, (_, i) => (
        <path key={i} d={`M${32 + i * 16} 440l-8 10`} {...line} opacity={0.5} />
      ))}

      {/* Sign plate */}
      <rect x="108" y="92" width="168" height="168" fill="var(--color-paper)" />
      <text
        x="192"
        y="190"
        textAnchor="middle"
        fill="var(--color-ink)"
        style={{ font: "800 62px var(--font-display)", fontStretch: "125%", letterSpacing: "-1px" }}
      >
        {ROOM}
      </text>
      <g fill="var(--color-ink)">
        {cells.map((cell, i) =>
          cell.dots.map((d) => (
            <circle
              key={`${i}-${d}`}
              cx={152 + i * 22 + (d > 3 ? 8 : 0)}
              cy={216 + ((d - 1) % 3) * 8}
              r={2.6}
            />
          ))
        )}
      </g>

      {/* Character height */}
      <path d="M286 146h38M286 190h38M314 146v44" {...line} />
      <path d="M311 150l3-4 3 4M311 186l3 4 3-4" {...line} />
      <text x="330" y="136" className="ada-note" transform="rotate(90 330 136)">5/8 to 2 in.</text>

      {/* Braille */}
      <path d="M136 224H70" {...line} />
      <circle cx="136" cy="224" r="2.5" fill="currentColor" />
      <text x="24" y="218" className="ada-note">Grade 2</text>
      <text x="24" y="232" className="ada-note">braille</text>

      {/* Finish */}
      <path d="M252 104l28-38" {...line} />
      <circle cx="252" cy="104" r="2.5" fill="currentColor" />
      <text x="344" y="44" textAnchor="end" className="ada-note">Non-glare finish,</text>
      <text x="344" y="58" textAnchor="end" className="ada-note">contrasting field</text>

      {/* Mounting height */}
      <path d="M60 190v250M52 190h56M52 440h16" {...line} />
      <path d="M57 194l3-4 3 4M57 436l3 4 3-4" {...line} />
      <text x="46" y="330" className="ada-note" transform="rotate(-90 46 330)" textAnchor="middle">
        48 to 60 in. above floor
      </text>

      <text x="108" y="284" className="ada-note" opacity="0.75">Room sign, elevation</text>
    </svg>
  );
}
