import { useEffect } from "react";

export default function useScrollAnimation() {
  useEffect(() => {
    const root = document.documentElement;
    // Mark JS as ready so the CSS only hides reveal targets when scripting works.
    // Without JS the elements stay visible (no blank sections).
    root.classList.add("js-ready");

    const elements = document.querySelectorAll(".animate-on-scroll");

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      elements.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}
