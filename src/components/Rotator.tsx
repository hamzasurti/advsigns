import { useEffect, useState } from "react";

const moves = () => typeof window !== "undefined" && !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* One word at a time from a list, swapped every few seconds. Readers who
   asked for less motion, and screen readers, get the plain word instead. */
export default function Rotator({ words, plain, every = 2600 }: { words: string[]; plain: string; every?: number }) {
  const [i, setI] = useState(0);
  const [moving] = useState(moves);

  useEffect(() => {
    if (!moving) return;
    const id = setInterval(() => {
      if (!document.hidden) setI((n) => (n + 1) % words.length);
    }, every);
    return () => clearInterval(id);
  }, [moving, words.length, every]);

  if (!moving) return <>{plain}</>;
  return (
    <>
      <span className="sr-only">{plain}</span>
      <span key={i} className="swap inline-block" aria-hidden="true">{words[i]}</span>
    </>
  );
}
