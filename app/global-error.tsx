"use client";

export default function GlobalError({ reset }: { reset: () => void }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: "#07070a", color: "#f7f5fb", fontFamily: "Arial, sans-serif" }}>
        <main
          style={{ minHeight: "100svh", display: "grid", placeItems: "center", padding: "2rem", textAlign: "center" }}
          aria-labelledby="global-error-heading"
        >
          <div style={{ maxWidth: "32rem" }}>
            <p style={{ color: "#b96cff", fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase" }}>
              LUMORA
            </p>
            <h1 id="global-error-heading" style={{ margin: "1.5rem 0 0", fontSize: "clamp(2.25rem, 8vw, 4.5rem)", fontWeight: 300, lineHeight: 1.05 }}>
              The experience is unavailable.
            </h1>
            <p style={{ margin: "1.5rem auto 0", color: "#aca7b6", fontSize: "1rem", lineHeight: 1.7 }}>
              Please try again. No technical details are exposed here.
            </p>
            <button
              type="button"
              onClick={reset}
              style={{ marginTop: "2.5rem", border: "1px solid rgba(185,108,255,0.55)", background: "transparent", color: "#f7f5fb", cursor: "pointer", font: "inherit", letterSpacing: "0.14em", padding: "0.75rem 1rem", textTransform: "uppercase" }}
            >
              Try again
            </button>
          </div>
        </main>
      </body>
    </html>
  );
}
