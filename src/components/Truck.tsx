import { useId } from "react";

const CAB = "M470 108h86l62 62v60H470z";

/* A box truck in elevation. `coverage` is how much of it the vinyl covers, from the tail forward. */
export default function Truck({ coverage, className = "" }: { coverage: number; className?: string }) {
  const id = useId();
  const pct = Math.round(coverage * 100);

  return (
    <svg
      viewBox="0 0 660 300"
      className={`w-full h-auto ${className}`}
      role="img"
      aria-label={`Box truck with vinyl covering ${pct} percent of the body`}
    >
      <defs>
        <clipPath id={`${id}-body`}>
          <rect x="20" y="40" width="440" height="190" />
          <path d={CAB} />
        </clipPath>
        <clipPath id={`${id}-cover`}>
          <rect className="vinyl" x="20" y="30" width="610" height="210" style={{ transform: `scaleX(${coverage})` }} />
        </clipPath>
      </defs>

      <g className="truck-bob">
        <rect x="20" y="40" width="440" height="190" fill="var(--color-paper)" />
        <path d={CAB} fill="var(--color-paper)" />

        <g clipPath={`url(#${id}-body)`}>
          <g clipPath={`url(#${id}-cover)`}>
            <rect x="20" y="40" width="610" height="190" fill="var(--color-mat)" />
            <path d="M300 230 490 40h130L430 230z" fill="var(--color-hivis)" />
            <path d="M262 230 452 40h18L280 230z" fill="var(--color-paper)" />
            <path d="M470 230l122-122h40L510 230z" fill="var(--color-hivis)" />
            <text
              x="42"
              y="150"
              fill="var(--color-paper)"
              style={{ font: "800 34px var(--font-display)", fontStretch: "125%", letterSpacing: "-1px" }}
            >
              YOUR NAME
            </text>
          </g>
        </g>

        <path d="M560 122h-8v44h52z" fill="var(--color-ink)" opacity="0.85" />
        <rect x="20" y="40" width="440" height="190" fill="none" stroke="var(--color-ink)" strokeWidth="3" />
        <path d={CAB} fill="none" stroke="var(--color-ink)" strokeWidth="3" />
        <path d="M14 232h610v14H14z" fill="var(--color-ink)" />
      </g>

      {[120, 360, 562].map((cx) => (
        <g key={cx}>
          <circle cx={cx} cy="254" r="38" fill="var(--color-ink)" />
          <g className="wheel">
            <circle cx={cx} cy="254" r="17" fill="var(--color-paper-3)" />
            <path d={`M${cx - 17} 254h34M${cx} 237v34`} stroke="var(--color-ink)" strokeWidth="3" />
          </g>
        </g>
      ))}
    </svg>
  );
}
