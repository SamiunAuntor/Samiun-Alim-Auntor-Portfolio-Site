import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background:
            "radial-gradient(circle at top, rgba(125,211,252,0.34), rgba(15,23,42,0.98))",
          border: "2px solid rgba(226,232,240,0.18)",
          borderRadius: "9999px",
          color: "#f8fafc",
          display: "flex",
          fontFamily: "Segoe UI, sans-serif",
          fontSize: 28,
          fontWeight: 700,
          height: "100%",
          justifyContent: "center",
          letterSpacing: "0.08em",
          width: "100%"
        }}
      >
        S
      </div>
    ),
    size
  );
}
