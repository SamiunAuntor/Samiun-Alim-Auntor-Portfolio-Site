export function GET() {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <rect width="64" height="64" rx="18" fill="#020617"/>
    <circle cx="32" cy="32" r="24" fill="#0f172a" stroke="#38bdf8" stroke-opacity="0.45" stroke-width="2"/>
    <text x="32" y="41" text-anchor="middle" font-family="Arial, sans-serif" font-size="28" font-weight="700" fill="#f8fafc">S</text>
  </svg>`;

  return new Response(svg, {
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "public, max-age=86400"
    }
  });
}
