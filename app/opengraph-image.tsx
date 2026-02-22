import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Kamronbek Juraev — React Native / React Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <div
            style={{
              fontSize: 64,
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: "-0.02em",
            }}
          >
            Kamronbek Juraev
          </div>
          <div
            style={{
              fontSize: 28,
              color: "#a0a0b0",
              letterSpacing: "0.05em",
            }}
          >
            React Native / React Developer
          </div>
          <div
            style={{
              marginTop: "24px",
              fontSize: 20,
              color: "#6366f1",
              letterSpacing: "0.1em",
            }}
          >
            kamuran.dev
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
