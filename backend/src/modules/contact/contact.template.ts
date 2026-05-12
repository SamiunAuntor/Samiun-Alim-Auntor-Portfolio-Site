import type { ContactPayload } from "./contact.validation.js";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export function buildContactEmail(payload: ContactPayload) {
  const escapedName = escapeHtml(payload.name);
  const escapedEmail = escapeHtml(payload.email);
  const escapedSubject = escapeHtml(payload.subject);
  const escapedMessage = escapeHtml(payload.message).replaceAll("\n", "<br />");
  const submittedAt = new Date().toISOString();

  return {
    subject: `Portfolio Contact: ${payload.subject}`,
    text: [
      "New portfolio contact message",
      "",
      `Name: ${payload.name}`,
      `Email: ${payload.email}`,
      `Subject: ${payload.subject}`,
      `Submitted At: ${submittedAt}`,
      "",
      payload.message
    ].join("\n"),
    html: `
      <div style="font-family:Segoe UI,Arial,sans-serif;line-height:1.7;color:#0f172a;">
        <h2 style="margin:0 0 16px;">New portfolio contact message</h2>
        <p style="margin:0 0 8px;"><strong>Name:</strong> ${escapedName}</p>
        <p style="margin:0 0 8px;"><strong>Email:</strong> ${escapedEmail}</p>
        <p style="margin:0 0 8px;"><strong>Subject:</strong> ${escapedSubject}</p>
        <p style="margin:0 0 20px;"><strong>Submitted At:</strong> ${submittedAt}</p>
        <div style="padding:16px;border-radius:12px;background:#e2e8f0;color:#0f172a;">
          ${escapedMessage}
        </div>
      </div>
    `
  };
}
