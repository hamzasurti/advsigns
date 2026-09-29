import type { ReactNode } from "react";

interface SheetProps {
  children: ReactNode;
  ratio?: "wide" | "tall" | "upright" | "board";
  fig?: string;
  caption?: ReactNode;
  /* Dimension callouts drawn along the top and right edges. */
  width?: string;
  height?: string;
  draw?: boolean;
  className?: string;
}

/* A piece of work laid on the table: crop marks at the corners, optional dimensions. */
export default function Sheet({
  children,
  ratio = "wide",
  fig,
  caption,
  width,
  height,
  draw = false,
  className = "",
}: SheetProps) {
  const drawn = draw ? "draw" : "";
  return (
    <figure className={className}>
      <div className="grid grid-cols-[1fr_auto] gap-x-1">
        {width && (
          <div className={`dim label px-[14px] pb-1 ${drawn}`} aria-hidden="true">
            <span>{width}</span>
          </div>
        )}
        {width && <span />}
        <div className="crop min-w-0">
          <div className={`sheet-media ratio-${ratio}`}>{children}</div>
        </div>
        {height ? (
          <div className={`dim-v label py-[14px] ${drawn}`} aria-hidden="true">
            <span>{height}</span>
          </div>
        ) : (
          <span />
        )}
      </div>
      {(fig || caption) && (
        <figcaption className="mt-2 px-[14px] flex items-baseline gap-3 text-sm">
          {fig && <span className="label shrink-0">{fig}</span>}
          {caption && <span className="opacity-80">{caption}</span>}
        </figcaption>
      )}
    </figure>
  );
}
