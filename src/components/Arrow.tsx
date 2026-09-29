export default function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`arrow shrink-0 ${className}`}
      width="20"
      height="10"
      viewBox="0 0 20 10"
      fill="none"
      aria-hidden="true"
    >
      <path d="M0 5h18M14 1l4 4-4 4" stroke="currentColor" strokeWidth="1.75" />
    </svg>
  );
}
