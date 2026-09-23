"use client";

/** Experimental LUMORA adaptation of official 21st component 5219. */
const loaderStyles = `
.lumora-ai-loader { color: #fff; user-select: none; width: 180px; height: 180px; display: flex; align-items: center; justify-content: center; position: relative; font-family: Arial, Helvetica, sans-serif; font-size: 13px; font-weight: 300; letter-spacing: .12em; }
.lumora-ai-loader__sphere { aspect-ratio: 1; z-index: 0; width: 100%; position: absolute; inset: 0; border-radius: 50%; background: radial-gradient(circle at 35% 24%, rgba(255,255,255,.23), transparent 14%), radial-gradient(circle at 58% 67%, rgba(71,30,236,.22), transparent 58%); animation: 5.2s linear infinite lumora-ai-rotate; }
@keyframes lumora-ai-rotate { 0%,100% { transform: rotate(90deg); box-shadow: inset 0 10px 22px #ffffff, inset 0 23px 33px #ad5fff, inset 0 64px 72px #471eec, 0 0 44px rgba(124,60,255,.22); } 50% { transform: rotate(270deg); box-shadow: inset 0 10px 22px #ffffff, inset 0 22px 27px #7c3cff, inset 0 58px 68px #311e80, 0 0 40px rgba(124,60,255,.16); } }
.lumora-ai-loader__letter { position: relative; z-index: 1; display: inline-block; opacity: .54; animation: 5.2s ease-in-out infinite lumora-ai-letter; }
@keyframes lumora-ai-letter { 0%,100% { opacity: .54; transform: translateY(0); } 20% { opacity: 1; transform: translateY(-1px); } 40% { opacity: .72; transform: translateY(0); } }
.lumora-ai-loader[data-hold="true"] .lumora-ai-loader__sphere { animation-duration: 14s; opacity: .72; }
.lumora-ai-loader[data-hold="true"] .lumora-ai-loader__letter { animation-duration: 14s; opacity: .72; }
@media (prefers-reduced-motion: reduce) { .lumora-ai-loader__sphere { animation: none !important; transform: rotate(90deg); box-shadow: inset 0 10px 22px #ffffff, inset 0 23px 33px #ad5fff, inset 0 64px 72px #471eec, 0 0 44px rgba(124,60,255,.22); } .lumora-ai-loader__letter { animation: none !important; opacity: .72; } }
`;

export function LumoraAiLoader({ hold = false }: { hold?: boolean }) {
  return <><style>{loaderStyles}</style><div className="lumora-ai-loader" data-hold={hold} aria-label="LUMORA loading" role="status">{"LUMORA".split("").map((char, index) => <span key={char + index} className="lumora-ai-loader__letter" style={{ animationDelay: `${index * 0.1}s` }}>{char}</span>)}<div className="lumora-ai-loader__sphere" /></div></>;
}
