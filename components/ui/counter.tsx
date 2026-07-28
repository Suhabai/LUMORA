"use client";

import { useEffect, useRef, useState } from "react";

type CounterProps = {
  target: number;
  suffix?: string;
};

export function Counter({ target, suffix = "" }: CounterProps) {
  const [value, setValue] = useState("0");
  const ref = useRef<HTMLDivElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    function run() {
      const start = performance.now();
      const duration = 2000;

      function tick(now: number) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(`${Math.round(eased * target)}${suffix}`);
        if (progress < 1) requestAnimationFrame(tick);
      }

      requestAnimationFrame(tick);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animated.current) {
            animated.current = true;
            run();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, suffix]);

  return (
    <div ref={ref} className="text-[2rem] font-bold text-accent leading-none tracking-tight">
      {value}
    </div>
  );
}
