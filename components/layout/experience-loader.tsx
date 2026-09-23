"use client";

import { useEffect, useRef, useState } from "react";

type LoaderState = "darkness" | "emergence" | "active" | "compression" | "resolution" | "hold" | "handoff" | "reduced";

const MIN_VISIBLE_MS = 1100;
const HOLD_START_MS = 2600;
const MAX_COVER_MS = 8000;
const REDUCED_MIN_VISIBLE_MS = 150;
const HANDOFF_MS = 900;

/**
 * The production entry threshold. It is intentionally independent from the
 * Living Core and frozen Luminous Ring: this temporary sphere is loading UI,
 * not a brand mark.
 */
export function ExperienceLoader() {
  const [state, setState] = useState<LoaderState>("darkness");
  const [visible, setVisible] = useState(true);
  const hasHandedOff = useRef(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const startedAt = performance.now();
    const timers = new Set<number>();
    const application = document.getElementById("app-shell");

    const setApplicationInert = (inert: boolean) => {
      if (!application) return;
      application.inert = inert;
      if (inert) {
        application.setAttribute("aria-hidden", "true");
      } else {
        application.removeAttribute("aria-hidden");
      }
    };

    const clearTimers = () => {
      timers.forEach(window.clearTimeout);
      timers.clear();
    };

    const schedule = (callback: () => void, delay: number) => {
      let timer = 0;
      timer = window.setTimeout(() => {
        timers.delete(timer);
        callback();
      }, Math.max(0, delay));
      timers.add(timer);
    };

    const completeHandoff = () => {
      clearTimers();
      window.removeEventListener("load", onReady);
      setApplicationInert(false);
      setVisible(false);
    };

    const beginHandoff = () => {
      if (hasHandedOff.current) return;
      hasHandedOff.current = true;
      clearTimers();
      window.removeEventListener("load", onReady);
      setState("handoff");
      schedule(completeHandoff, reduced ? 180 : HANDOFF_MS);
    };

    const onReady = () => {
      if (hasHandedOff.current) return;
      const minimum = reduced ? REDUCED_MIN_VISIBLE_MS : MIN_VISIBLE_MS;
      const elapsed = performance.now() - startedAt;
      schedule(beginHandoff, elapsed < minimum ? minimum - elapsed : 0);
    };

    setApplicationInert(true);

    if (reduced) {
      schedule(() => setState("reduced"), 150);
      if (document.readyState === "complete") {
        onReady();
      } else {
        window.addEventListener("load", onReady, { once: true });
      }
    } else {
      schedule(() => setState("emergence"), 240);
      schedule(() => setState("active"), 630);
      schedule(() => setState("compression"), 1400);
      schedule(() => setState("resolution"), 1800);
      schedule(() => {
        if (!hasHandedOff.current) setState("hold");
      }, HOLD_START_MS);

      if (document.readyState === "complete") {
        onReady();
      } else {
        window.addEventListener("load", onReady, { once: true });
      }
    }

    schedule(beginHandoff, MAX_COVER_MS);

    return () => {
      clearTimers();
      window.removeEventListener("load", onReady);
      setApplicationInert(false);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className={`experience-loader experience-loader--${state}`} role="status" aria-label="LUMORA loading">
      <div className="experience-loader__void" />
      <div className="experience-loader__home" />
      <div className="experience-loader__presence" />
      <div className="experience-loader__liquid" aria-hidden="true">
        <span className="experience-loader__ribbon" />
      </div>
      <div className="experience-loader__sphere" aria-hidden="true" />
      <div className="experience-loader__letters" aria-hidden="true">
        {"LUMORA".split("").map((character, index) => (
          <span key={`${character}-${index}`} style={{ animationDelay: `${index * 0.1}s` }}>
            {character}
          </span>
        ))}
      </div>
      <div className="experience-loader__vignette" />
    </div>
  );
}
