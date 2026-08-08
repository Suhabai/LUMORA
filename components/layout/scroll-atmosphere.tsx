"use client";

import { useEffect } from "react";

export function ScrollAtmosphere() {
  useEffect(() => {
    let ticking = false;

    function update() {
      const scrollY = window.scrollY;
      const vh = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight - vh;
      const progress = docHeight > 0 ? Math.min(scrollY / docHeight, 1) : 0;

      // Hero fade: 1 when at top, 0 when scrolled past one viewport
      const heroFade = 1 - Math.min(scrollY / vh, 1);

      document.documentElement.style.setProperty(
        "--scroll-progress",
        String(progress)
      );
      document.documentElement.style.setProperty(
        "--hero-fade",
        String(heroFade)
      );

      ticking = false;
    }

    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    }

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
