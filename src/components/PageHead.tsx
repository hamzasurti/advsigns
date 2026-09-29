import type { ReactNode } from "react";

interface PageHeadProps {
  eyebrow: string;
  /* The page's <h1>, passed in so its text stays literal in the page file. */
  children: ReactNode;
  lead?: ReactNode;
  actions?: ReactNode;
  aside?: ReactNode;
  tone?: "paper" | "paper-2" | "mat";
}

export default function PageHead({ eyebrow, children, lead, actions, aside, tone = "paper" }: PageHeadProps) {
  const ground =
    tone === "mat" ? "mat on-mat" : tone === "paper-2" ? "on-paper bg-paper-2" : "on-paper bg-paper";
  const quiet = tone === "mat" ? "text-on-mat" : "text-ink-soft";

  return (
    <section className={ground}>
      <div className="wrap pt-[var(--s13)] pb-[var(--s13)]">
        <div className={aside ? "split-8-5 items-end" : ""}>
          <div>
            <p className={`label rise flex items-center gap-3 ${tone === "mat" ? "text-hivis" : "text-green"}`}>
              <span className="inline-block w-8 h-[2px] bg-current" aria-hidden="true" />
              {eyebrow}
            </p>
            <div className="rise rise-1 mt-6">{children}</div>
            {lead && <p className={`lead measure rise rise-2 mt-7 ${quiet}`}>{lead}</p>}
            {actions && <div className="rise rise-3 mt-8 flex flex-wrap gap-3">{actions}</div>}
          </div>
          {aside && <div className="rise rise-3">{aside}</div>}
        </div>
      </div>
    </section>
  );
}
