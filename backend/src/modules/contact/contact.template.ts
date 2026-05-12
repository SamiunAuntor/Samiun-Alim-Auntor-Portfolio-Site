import type { ContactPayload } from "./contact.validation.js";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function formatSubmittedAt(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Asia/Dhaka"
  }).format(date);
}

export function buildContactEmail(payload: ContactPayload) {
  const escapedName = escapeHtml(payload.name);
  const escapedEmail = escapeHtml(payload.email);
  const escapedSubject = escapeHtml(payload.subject);
  const escapedMessage = escapeHtml(payload.message).replaceAll("\n", "<br />");
  const submittedAt = new Date();
  const submittedAtLabel = formatSubmittedAt(submittedAt);
  const submittedAtIso = submittedAt.toISOString();
  const previewText = escapeHtml(
    `${payload.name} reached out through your portfolio contact form.`
  );
  const replyMailTo = `mailto:${encodeURIComponent(payload.email)}?subject=${encodeURIComponent(
    `Re: ${payload.subject}`
  )}`;

  return {
    subject: `Portfolio Contact: ${payload.subject}`,
    text: [
      "New portfolio contact message",
      "",
      `Name: ${payload.name}`,
      `Email: ${payload.email}`,
      `Subject: ${payload.subject}`,
      `Submitted At: ${submittedAtIso}`,
      "",
      payload.message
    ].join("\n"),
    html: `
      <!DOCTYPE html>
      <html lang="en" xmlns="http://www.w3.org/1999/xhtml">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <title>Portfolio Contact Message</title>
          <style>
            body,
            table,
            td,
            a {
              -webkit-text-size-adjust: 100%;
              -ms-text-size-adjust: 100%;
            }

            table,
            td {
              mso-table-lspace: 0pt;
              mso-table-rspace: 0pt;
            }

            img {
              border: 0;
              height: auto;
              line-height: 100%;
              outline: none;
              text-decoration: none;
              -ms-interpolation-mode: bicubic;
            }

            table {
              border-collapse: collapse !important;
            }

            body {
              margin: 0 !important;
              padding: 0 !important;
              width: 100% !important;
              height: 100% !important;
              background-color: #edf2f7;
            }

            @media screen and (max-width: 640px) {
              .shell {
                width: 100% !important;
              }

              .shell-padding {
                padding-left: 18px !important;
                padding-right: 18px !important;
              }

              .card-padding {
                padding: 22px !important;
              }

              .headline {
                font-size: 24px !important;
                line-height: 32px !important;
              }

              .stack-column,
              .stack-column td {
                display: block !important;
                width: 100% !important;
              }

              .field-gap {
                padding-bottom: 12px !important;
              }
            }
          </style>
        </head>
        <body style="margin:0; padding:0; background-color:#edf2f7;">
          <div
            style="display:none; max-height:0; overflow:hidden; opacity:0; mso-hide:all;"
          >
            ${previewText}
          </div>

          <table
            role="presentation"
            cellpadding="0"
            cellspacing="0"
            border="0"
            width="100%"
            style="background-color:#edf2f7;"
          >
            <tr>
              <td align="center" class="shell-padding" style="padding:32px 16px;">
                <table
                  role="presentation"
                  cellpadding="0"
                  cellspacing="0"
                  border="0"
                  width="640"
                  class="shell"
                  style="width:100%; max-width:640px;"
                >
                  <tr>
                    <td
                      style="padding:0 0 14px 0; font-family:Segoe UI, Arial, sans-serif; font-size:12px; line-height:18px; letter-spacing:0.18em; text-transform:uppercase; color:#0f766e; text-align:left;"
                    >
                      Portfolio Contact Notification
                    </td>
                  </tr>

                  <tr>
                    <td
                      style="border-radius:28px; overflow:hidden; background:linear-gradient(180deg,#0f172a 0%,#020617 100%); box-shadow:0 24px 70px rgba(15,23,42,0.16);"
                    >
                      <table
                        role="presentation"
                        cellpadding="0"
                        cellspacing="0"
                        border="0"
                        width="100%"
                      >
                        <tr>
                          <td style="height:6px; background:linear-gradient(90deg,#22d3ee 0%,#38bdf8 50%,#0ea5e9 100%);"></td>
                        </tr>
                        <tr>
                          <td class="card-padding" style="padding:32px;">
                            <table
                              role="presentation"
                              cellpadding="0"
                              cellspacing="0"
                              border="0"
                              width="100%"
                            >
                              <tr>
                                <td
                                  style="font-family:Segoe UI, Arial, sans-serif; font-size:30px; line-height:38px; font-weight:700; color:#f8fafc; padding:0 0 10px 0;"
                                  class="headline"
                                >
                                  Someone just contacted you.
                                </td>
                              </tr>
                              <tr>
                                <td
                                  style="font-family:Segoe UI, Arial, sans-serif; font-size:15px; line-height:26px; color:#cbd5e1; padding:0 0 24px 0;"
                                >
                                  A new message was submitted through your portfolio contact form.
                                  The sender details and message are included below in a format
                                  designed to stay readable across phone, tablet, and desktop mail
                                  clients.
                                </td>
                              </tr>

                              <tr>
                                <td style="padding:0 0 24px 0;">
                                  <table
                                    role="presentation"
                                    cellpadding="0"
                                    cellspacing="0"
                                    border="0"
                                    width="100%"
                                    style="background-color:#0f172a; border:1px solid rgba(148,163,184,0.16); border-radius:22px;"
                                  >
                                    <tr>
                                      <td style="padding:22px;">
                                        <table
                                          role="presentation"
                                          cellpadding="0"
                                          cellspacing="0"
                                          border="0"
                                          width="100%"
                                        >
                                          <tr>
                                            <td
                                              class="stack-column field-gap"
                                              width="50%"
                                              valign="top"
                                              style="padding:0 10px 14px 0;"
                                            >
                                              <div
                                                style="font-family:Segoe UI, Arial, sans-serif; font-size:11px; line-height:16px; letter-spacing:0.16em; text-transform:uppercase; color:#67e8f9; padding-bottom:8px;"
                                              >
                                                Name
                                              </div>
                                              <div
                                                style="font-family:Segoe UI, Arial, sans-serif; font-size:16px; line-height:24px; font-weight:600; color:#f8fafc;"
                                              >
                                                ${escapedName}
                                              </div>
                                            </td>
                                            <td
                                              class="stack-column field-gap"
                                              width="50%"
                                              valign="top"
                                              style="padding:0 0 14px 10px;"
                                            >
                                              <div
                                                style="font-family:Segoe UI, Arial, sans-serif; font-size:11px; line-height:16px; letter-spacing:0.16em; text-transform:uppercase; color:#67e8f9; padding-bottom:8px;"
                                              >
                                                Email
                                              </div>
                                              <div
                                                style="font-family:Segoe UI, Arial, sans-serif; font-size:16px; line-height:24px; font-weight:600; color:#f8fafc; word-break:break-word;"
                                              >
                                                ${escapedEmail}
                                              </div>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td
                                              class="stack-column field-gap"
                                              width="50%"
                                              valign="top"
                                              style="padding:0 10px 0 0;"
                                            >
                                              <div
                                                style="font-family:Segoe UI, Arial, sans-serif; font-size:11px; line-height:16px; letter-spacing:0.16em; text-transform:uppercase; color:#67e8f9; padding-bottom:8px;"
                                              >
                                                Subject
                                              </div>
                                              <div
                                                style="font-family:Segoe UI, Arial, sans-serif; font-size:15px; line-height:24px; color:#e2e8f0;"
                                              >
                                                ${escapedSubject}
                                              </div>
                                            </td>
                                            <td
                                              class="stack-column"
                                              width="50%"
                                              valign="top"
                                              style="padding:0 0 0 10px;"
                                            >
                                              <div
                                                style="font-family:Segoe UI, Arial, sans-serif; font-size:11px; line-height:16px; letter-spacing:0.16em; text-transform:uppercase; color:#67e8f9; padding-bottom:8px;"
                                              >
                                                Submitted
                                              </div>
                                              <div
                                                style="font-family:Segoe UI, Arial, sans-serif; font-size:15px; line-height:24px; color:#e2e8f0;"
                                              >
                                                ${submittedAtLabel}
                                              </div>
                                            </td>
                                          </tr>
                                        </table>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>

                              <tr>
                                <td style="padding:0 0 24px 0;">
                                  <table
                                    role="presentation"
                                    cellpadding="0"
                                    cellspacing="0"
                                    border="0"
                                    width="100%"
                                    style="background-color:#f8fafc; border-radius:22px;"
                                  >
                                    <tr>
                                      <td style="padding:24px;">
                                        <div
                                          style="font-family:Segoe UI, Arial, sans-serif; font-size:11px; line-height:16px; letter-spacing:0.16em; text-transform:uppercase; color:#0891b2; padding-bottom:10px;"
                                        >
                                          Message
                                        </div>
                                        <div
                                          style="font-family:Segoe UI, Arial, sans-serif; font-size:16px; line-height:30px; color:#0f172a;"
                                        >
                                          ${escapedMessage}
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>

                              <tr>
                                <td style="padding:0 0 18px 0;">
                                  <table
                                    role="presentation"
                                    cellpadding="0"
                                    cellspacing="0"
                                    border="0"
                                  >
                                    <tr>
                                      <td
                                        style="border-radius:999px; background:linear-gradient(90deg,#22d3ee 0%,#38bdf8 100%);"
                                      >
                                        <a
                                          href="${replyMailTo}"
                                          style="display:inline-block; padding:14px 22px; font-family:Segoe UI, Arial, sans-serif; font-size:14px; line-height:20px; font-weight:700; color:#082f49; text-decoration:none;"
                                        >
                                          Reply to ${escapedName}
                                        </a>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>

                              <tr>
                                <td
                                  style="font-family:Segoe UI, Arial, sans-serif; font-size:13px; line-height:22px; color:#94a3b8;"
                                >
                                  This email was generated by your portfolio contact form. If you
                                  need the raw timestamp for debugging or record-keeping, use
                                  <span style="color:#e2e8f0;"> ${submittedAtIso}</span>.
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
      </html>
    `
  };
}
