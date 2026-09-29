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
      <p className="label flex items-center gap-3">
        <span className="bg-hivis text-ink px-2 py-1">{no}</span>
        <span>{label}</span>
      </p>
      <h2 className="display display-2 mt-5">{title}</h2>
      {children && <div className="lead measure mt-5 opacity-85">{children}</div>}
    </div>
  );
}
