/*
  The wordmark as a mask, so it takes the current text color and sits on any
  ground without the white box the PNG carries.
*/
const mask = "url(/assets/logo-mask.png) center / contain no-repeat";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span
      role="img"
      aria-label="Advanced Sign & Banner"
      className={`block aspect-[1131/270] bg-current ${className}`}
      style={{ mask, WebkitMask: mask }}
    />
  );
}
