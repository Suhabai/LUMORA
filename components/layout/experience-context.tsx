"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import type { ExperiencePhase, CoreEvent } from "@/components/core/core-types";

interface ExperienceContextValue {
  phase: ExperiencePhase;
  event: CoreEvent;
  setPhase: (phase: ExperiencePhase) => void;
  setEvent: (event: CoreEvent) => void;
}

const ExperienceContext = createContext<ExperienceContextValue>({
  phase: "entry",
  event: "core-awaken",
  setPhase: () => {},
  setEvent: () => {},
});

export function useExperience() {
  return useContext(ExperienceContext);
}

export function ExperienceProvider({ children }: { children: ReactNode }) {
  const [phase, setPhaseState] = useState<ExperiencePhase>("entry");
  const [event, setEventState] = useState<CoreEvent>("core-awaken");

  const setPhase = useCallback((p: ExperiencePhase) => {
    setPhaseState(p);
  }, []);

  const setEvent = useCallback((e: CoreEvent) => {
    setEventState(e);
  }, []);

  return (
    <ExperienceContext.Provider value={{ phase, event, setPhase, setEvent }}>
      {children}
    </ExperienceContext.Provider>
  );
}
