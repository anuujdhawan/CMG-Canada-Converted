"use client";

import { useEffect, useRef } from "react";

export default function ScrollProgressBar() {
  const progressRef = useRef(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
      progressRef.current?.style.setProperty("--scroll-progress", String(Math.min(1, Math.max(0, progress))));
    };
    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={progressRef}
      aria-hidden
      style={{ "--scroll-progress": 0, boxShadow: "0 0 8px color-mix(in srgb, var(--brand-primary) 22%, transparent)", transform: "scaleX(var(--scroll-progress))" }}
      className="fixed top-0 inset-x-0 z-[60] h-[3px] origin-left bg-primary"
    />
  );
}
