import { useCallback, useEffect, useRef, useState } from "react";

/*
  Drives a muted clip reel: plays one clip, advances when it ends, and exposes
  play/pause. Stays paused for visitors who prefer reduced motion or have asked
  the browser to save data.
*/
export default function useReel(count: number) {
  const ref = useRef<HTMLVideoElement>(null);
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const wantsPlay = useRef(true);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const saveData =
      (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData === true;
    if (reduced || saveData) wantsPlay.current = false;
  }, []);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const onEnded = () => setIndex((i) => (i + 1) % count);
    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    video.addEventListener("ended", onEnded);
    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onPause);
    video.load();
    if (wantsPlay.current) video.play().catch(() => {});
    return () => {
      video.removeEventListener("ended", onEnded);
      video.removeEventListener("play", onPlay);
      video.removeEventListener("pause", onPause);
    };
  }, [index, count]);

  const toggle = useCallback(() => {
    const video = ref.current;
    if (!video) return;
    if (video.paused) {
      wantsPlay.current = true;
      video.play().catch(() => {});
    } else {
      wantsPlay.current = false;
      video.pause();
    }
  }, []);

  return { ref, index, setIndex, playing, toggle };
}
