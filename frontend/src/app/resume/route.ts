import { readFile } from "node:fs/promises";
import path from "node:path";

const resumeFileName = "Samiun-Alim-Auntor-Resume.pdf";

export async function GET() {
  const resumePath = path.join(process.cwd(), "public", "samiun-alim-auntor-resume.pdf");
  const resume = await readFile(resumePath);

  return new Response(new Uint8Array(resume), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${resumeFileName}"`,
      "Cache-Control": "public, max-age=31536000, immutable"
    }
  });
}
