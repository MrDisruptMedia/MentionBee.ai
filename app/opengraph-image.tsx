import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "MentionBee – Wirst du von KI empfohlen?";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#1A1A2E",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Logo + Name */}
        <div style={{ display: "flex", alignItems: "center", marginBottom: "48px" }}>
          <div
            style={{
              fontSize: "52px",
              marginRight: "16px",
            }}
          >
            🐝
          </div>
          <div
            style={{
              fontSize: "48px",
              fontWeight: "bold",
              color: "#FFFFFF",
            }}
          >
            Mention<span style={{ color: "#FFC400" }}>Bee</span>
            <span style={{ color: "#FFC400", fontSize: "32px" }}>.ai</span>
          </div>
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: "72px",
            fontWeight: "bold",
            color: "#FFFFFF",
            lineHeight: 1.1,
            marginBottom: "32px",
            maxWidth: "900px",
          }}
        >
          Wirst du von{" "}
          <span style={{ color: "#FFC400" }}>KI empfohlen?</span>
        </div>

        {/* Subline */}
        <div
          style={{
            fontSize: "32px",
            color: "#9CA3AF",
            maxWidth: "800px",
            lineHeight: 1.4,
            marginBottom: "48px",
          }}
        >
          AI Visibility Reports für smarte Marken im DACH-Raum
        </div>

        {/* 3 Pills */}
        <div style={{ display: "flex", gap: "16px" }}>
          {["ChatGPT", "Perplexity", "Gemini", "Claude"].map((ai) => (
            <div
              key={ai}
              style={{
                background: "#FFC40022",
                border: "1px solid #FFC40044",
                borderRadius: "999px",
                padding: "8px 24px",
                color: "#FFC400",
                fontSize: "24px",
                fontWeight: "600",
              }}
            >
              {ai}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size },
  );
}
