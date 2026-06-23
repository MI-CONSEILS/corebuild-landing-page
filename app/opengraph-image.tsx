import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "CoreBuild — Premium materials from China, controlled by one partner.";

// ponytail: system fonts only — avoids shipping a font fetch into the OG render.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "96px",
          background: "linear-gradient(135deg, #1e1b17 0%, #5c403f 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif"
        }}
      >
        <div
          style={{
            fontSize: 26,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#cbb48a"
          }}
        >
          CoreBuild
        </div>
        <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.1, marginTop: 28 }}>
          Premium materials from China, controlled by one partner.
        </div>
        <div style={{ fontSize: 28, color: "#cfc6bd", marginTop: 32, maxWidth: 900 }}>
          One accountable partner for sourcing, quality control and logistics across
          Guangzhou&apos;s manufacturing network.
        </div>
      </div>
    ),
    size
  );
}
