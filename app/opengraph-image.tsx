import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "LUMORA — A Cinematic Digital Experience";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#07070a",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle radial glow behind the core */}
        <div
          style={{
            position: "absolute",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(138,46,255,0.12) 0%, rgba(138,46,255,0.04) 40%, transparent 70%)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -55%)",
          }}
        />

        {/* Living Core ring */}
        <div
          style={{
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            border: "3px solid rgba(138,46,255,0.6)",
            boxShadow: "0 0 40px rgba(138,46,255,0.15), inset 0 0 30px rgba(138,46,255,0.05)",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Inner pulse dot */}
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: "#8a2eff",
              boxShadow: "0 0 12px rgba(138,46,255,0.5)",
            }}
          />
        </div>

        {/* LUMORA wordmark */}
        <div
          style={{
            marginTop: "40px",
            fontSize: "28px",
            fontFamily: "sans-serif",
            fontWeight: 300,
            letterSpacing: "0.35em",
            color: "rgba(255,255,255,0.85)",
            textTransform: "uppercase",
          }}
        >
          LUMORA
        </div>

        {/* Tagline */}
        <div
          style={{
            marginTop: "12px",
            fontSize: "13px",
            fontFamily: "sans-serif",
            fontWeight: 400,
            letterSpacing: "0.15em",
            color: "rgba(255,255,255,0.35)",
          }}
        >
          A Cinematic Digital Experience
        </div>
      </div>
    ),
    { ...size }
  );
}
