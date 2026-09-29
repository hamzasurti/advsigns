import { brailleCells } from "../content/signs";

interface BrailleProps {
  text: string;
  /* Dot diameter in px. Cell spacing scales from it. */
  size?: number;
  className?: string;
}

const col = (d: number) => (d > 3 ? 1 : 0);
const row = (d: number) => (d - 1) % 3;

/* Decorative braille. Always pair it with the same words in print nearby. */
export default function Braille({ text, size = 8, className = "" }: BrailleProps) {
  const cells = brailleCells(text);
  const pitch = size * 2.1;
  const cellW = pitch * 2.6;
  const w = cells.length * cellW - pitch * 0.6;
  const h = pitch * 2 + size;

  return (
    <svg
      className={className}
      width={w}
      height={h}
      viewBox={`0 0 ${w} ${h}`}
      fill="currentColor"
      aria-hidden="true"
    >
      {cells.map((cell, i) =>
        cell.dots.map((d) => (
          <circle
            key={`${i}-${d}`}
            cx={i * cellW + col(d) * pitch + size / 2}
            cy={row(d) * pitch + size / 2}
            r={size / 2}
          />
        ))
      )}
    </svg>
  );
}
