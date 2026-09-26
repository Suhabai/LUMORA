"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode, type RefObject } from "react";
import { usePathname } from "next/navigation";
import { readCurrentSonicSection, resolveSectionProfile, SONIC_SECTION_EVENT, type SectionProfile, type SonicSection } from "./sonic-section-profiles";

const AUDIO_URL = "/audio/lumora-dark-calm-still.wav";
const SIGNAL_NAMES = ["presence", "depth", "bloom", "air", "pressure"] as const;
type SignalName = (typeof SIGNAL_NAMES)[number];
type SoundStatus = "off" | "starting" | "on" | "unavailable";
type Signals = Record<SignalName, number>;

interface SonicControls {
  status: SoundStatus;
  availableHere: boolean;
  toggle: () => void;
}

const SonicContext = createContext<SonicControls | null>(null);
const emptySignals = (): Signals => ({ presence: 0, depth: 0, bloom: 0, air: 0, pressure: 0 });
const clamp = (value: number) => Math.max(0, Math.min(1, value));
const shape = (value: number) => {
  const bounded = clamp(value);
  return bounded * bounded * (3 - 2 * bounded);
};

export function useSonicControls() {
  return useContext(SonicContext);
}

/** One document-lifetime owner. The homepage environment is its only visual sink. */
export function SonicFoundation({ children, enabled }: { children: ReactNode; enabled: boolean }) {
  const pathname = usePathname();
  const availableHere = enabled && pathname === "/";
  const [status, setStatus] = useState<SoundStatus>("off");
  const environmentRef = useRef<HTMLDivElement>(null);
  const contextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const binsRef = useRef<Uint8Array<ArrayBuffer> | null>(null);
  const signalsRef = useRef<Signals>(emptySignals());
  const frameRef = useRef(0);
  const lastSampleRef = useRef(0);
  const activationRef = useRef(0);
  const activeRef = useRef(false);
  const sectionRef = useRef<SonicSection>("hero");
  const profileRef = useRef<SectionProfile>({ ...resolveSectionProfile("hero", false) });
  const targetProfileRef = useRef<SectionProfile>(resolveSectionProfile("hero", false));

  const publish = useCallback((signals: Signals) => {
    const style = environmentRef.current?.style;
    const profile = profileRef.current;
    if (style) {
      for (const key of SIGNAL_NAMES) {
        const gain = key === "bloom" ? profile.bloom : key === "pressure" ? profile.pressure : profile.energy;
        style.setProperty(`--sonic-${key}`, (signals[key] * gain).toFixed(4));
      }
      style.setProperty("--sonic-section-energy", profile.energy.toFixed(4));
      style.setProperty("--sonic-section-neutral", profile.neutral.toFixed(4));
    }
    document.documentElement.style.setProperty("--sonic-atmosphere", profile.atmosphere.toFixed(4));
    document.documentElement.style.setProperty("--sonic-coverage", profile.coverage.toFixed(4));
    const coreResponse = clamp((0.16 + signals.depth * 0.5 + signals.pressure * 0.34) * profile.core);
    // Hero keeps its normal ON response; deeper pressure settles into the environment.
    const coreLight = activeRef.current
      ? sectionRef.current === "hero" && coreResponse > 0.45
        ? 0.45 + (coreResponse - 0.45) * 0.32
        : coreResponse
      : 0;
    document.documentElement.style.setProperty("--sonic-core-light", coreLight.toFixed(4));
  }, []);

  const applySection = useCallback((section: SonicSection) => {
    sectionRef.current = section;
    targetProfileRef.current = resolveSectionProfile(section, window.innerWidth < 700);
    if (environmentRef.current) environmentRef.current.dataset.section = section;
    if (!activeRef.current) {
      profileRef.current = { ...targetProfileRef.current };
      publish(signalsRef.current);
    }
  }, [publish]);

  const stop = useCallback((nextStatus: SoundStatus = "off") => {
    activationRef.current += 1;
    activeRef.current = false;
    cancelAnimationFrame(frameRef.current);
    frameRef.current = 0;
    lastSampleRef.current = 0;
    const audio = audioRef.current;
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
    const context = contextRef.current;
    if (context?.state === "running") void context.suspend().catch(() => {});
    signalsRef.current = emptySignals();
    profileRef.current = { ...targetProfileRef.current };
    publish(signalsRef.current);
    setStatus(nextStatus);
  }, [publish]);

  const analyse = useCallback(function sample(time: number) {
    if (!activeRef.current || !analyserRef.current || !binsRef.current) return;
    const interval = window.innerWidth < 700 ? 1000 / 19 : 1000 / 30;
    const elapsed = time - lastSampleRef.current;
    if (elapsed >= interval) {
      lastSampleRef.current = time;
      const analyser = analyserRef.current;
      const bins = binsRef.current;
      try {
        analyser.getByteFrequencyData(bins);
      } catch {
        stop("unavailable");
        return;
      }
      const band = (first: number, last: number) => {
        let sum = 0;
        for (let i = first; i < last; i += 1) sum += bins[i];
        return sum / ((last - first) * 255);
      };
      const low = shape((band(1, 12) - 0.12) / 0.32);
      const mid = shape((band(12, 54) - 0.012) / 0.14);
      const high = shape((band(54, 128) - 0.008) / 0.11);
      const body = shape(low * 0.55 + mid * 0.35 + high * 0.1);
      const targets: Signals = {
        presence: clamp(0.08 + body * 0.92),
        depth: clamp(0.08 + low * 0.67 + body * 0.23),
        bloom: clamp(0.04 + body * 0.58 + mid * 0.28),
        air: clamp(0.035 + high * 0.55 + mid * 0.22),
        pressure: clamp(shape((low - 0.18) / 0.72) * 0.92),
      };
      const values = signalsRef.current;
      const sampleMs = Math.min(elapsed, 120);
      for (const key of SIGNAL_NAMES) {
        const rising = targets[key] > values[key];
        const attack = key === "pressure" || key === "depth" ? 330 : 230;
        const release = key === "depth" || key === "pressure" ? 1600 : 1100;
        values[key] += (targets[key] - values[key]) * (1 - Math.exp(-sampleMs / (rising ? attack : release)));
      }
      const profile = profileRef.current;
      const target = targetProfileRef.current;
      const handoff = 1 - Math.exp(-sampleMs / 850);
      for (const key of ["energy", "bloom", "pressure", "core", "neutral", "atmosphere", "coverage"] as const) {
        profile[key] += (target[key] - profile[key]) * handoff;
      }
      publish(values);
    }
    frameRef.current = requestAnimationFrame(sample);
  }, [publish, stop]);

  const start = useCallback(async () => {
    if (!enabled || pathname !== "/" || activeRef.current) return;
    const activation = ++activationRef.current;
    setStatus("starting");
    try {
      if (!contextRef.current) {
        const context = new AudioContext();
        try {
          const analyser = context.createAnalyser();
          analyser.fftSize = 512;
          analyser.smoothingTimeConstant = 0.88;
          const audio = new Audio(AUDIO_URL);
          audio.loop = true;
          audio.volume = 0.48;
          const source = context.createMediaElementSource(audio);
          source.connect(analyser);
          analyser.connect(context.destination);
          audio.onerror = () => stop("unavailable");
          contextRef.current = context;
          analyserRef.current = analyser;
          audioRef.current = audio;
          binsRef.current = new Uint8Array(analyser.frequencyBinCount);
        } catch (error) {
          void context.close().catch(() => {});
          throw error;
        }
      }
      const context = contextRef.current;
      const audio = audioRef.current;
      if (!context || !audio) throw new Error("Sonic graph unavailable");
      audio.currentTime = 0;
      // Both calls begin in the button gesture; no autoplay workaround or preload.
      const resumed = context.resume();
      const playing = audio.play();
      await Promise.all([resumed, playing]);
      if (activation !== activationRef.current || document.hidden || window.location.pathname !== "/") {
        audio.pause();
        return;
      }
      activeRef.current = true;
      lastSampleRef.current = 0;
      frameRef.current = requestAnimationFrame(analyse);
      setStatus("on");
    } catch {
      if (activation === activationRef.current) stop("unavailable");
    }
  }, [analyse, enabled, pathname, stop]);

  const toggle = useCallback(() => {
    if (status === "starting") return;
    if (status === "on") stop();
    else void start();
  }, [start, status, stop]);

  useEffect(() => {
    if (!availableHere) {
      sectionRef.current = "hero";
      profileRef.current = { ...resolveSectionProfile("hero", false) };
      targetProfileRef.current = resolveSectionProfile("hero", false);
      return;
    }
    const onSection = (event: Event) => applySection((event as CustomEvent<SonicSection>).detail);
    const onResize = () => applySection(sectionRef.current);
    window.addEventListener(SONIC_SECTION_EVENT, onSection);
    window.addEventListener("resize", onResize, { passive: true });
    const frame = requestAnimationFrame(() => applySection(readCurrentSonicSection()));
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener(SONIC_SECTION_EVENT, onSection);
      window.removeEventListener("resize", onResize);
    };
  }, [availableHere, applySection]);

  useEffect(() => {
    return () => {
      if (pathname === "/") stop();
    };
  }, [pathname, stop]);

  useEffect(() => {
    const onVisibility = () => {
      if (document.hidden) stop();
      else if (availableHere) applySection(readCurrentSonicSection());
    };
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, [applySection, availableHere, stop]);

  useEffect(() => () => {
    activationRef.current += 1;
    activeRef.current = false;
    cancelAnimationFrame(frameRef.current);
    audioRef.current?.pause();
    if (audioRef.current) audioRef.current.onerror = null;
    audioRef.current = null;
    analyserRef.current?.disconnect();
    analyserRef.current = null;
    binsRef.current = null;
    const context = contextRef.current;
    contextRef.current = null;
    if (context && context.state !== "closed") void context.close().catch(() => {});
    document.documentElement.style.removeProperty("--sonic-core-light");
    document.documentElement.style.removeProperty("--sonic-atmosphere");
    document.documentElement.style.removeProperty("--sonic-coverage");
  }, []);

  return (
    <SonicContext.Provider value={{ status, availableHere, toggle }}>
      {availableHere && <ReactiveEnvironment environmentRef={environmentRef} active={status === "on"} />}
      {children}
    </SonicContext.Provider>
  );
}

function ReactiveEnvironment({ environmentRef, active }: { environmentRef: RefObject<HTMLDivElement | null>; active: boolean }) {
  return (
    <div ref={environmentRef} className="sonic-environment" data-sound={active ? "on" : "off"} data-section="hero" aria-hidden="true">
      <div className="sonic-light sonic-light--left" />
      <div className="sonic-light sonic-light--right" />
    </div>
  );
}
