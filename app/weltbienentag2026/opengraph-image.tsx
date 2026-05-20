import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Bienen-Fakten zum Weltbienentag";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex" }}>
      <img
        src="https://mentionbee.ai/bienen-fakten.png"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </div>,
  );
}
