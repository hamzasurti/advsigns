import type { ReactNode } from "react";

interface SectionHeadProps {
  no: string;
  label: string;
  title: string;
  children?: ReactNode;
  className?: string;
}

export default function SectionHead({ no, label, title, children, className = "" }: SectionHeadProps) {
  return (
    <div className={`animate-on-scroll ${className}`}>
      <p className="label flex items-center gap-3" data-no={no}>
        <span className="inline-block w-8 h-[2px] bg-current" aria-hidden="true" />
        <span>{label}</span>
      </p>
      <h2 className="display display-2 mt-5">{title}</h2>
      {children && <div className="lead measure mt-5 opacity-85">{children}</div>}
    </div>
  );
}
