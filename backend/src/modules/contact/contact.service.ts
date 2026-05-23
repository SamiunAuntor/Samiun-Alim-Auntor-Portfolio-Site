import { env } from "../../config/env.js";
import { AppError } from "../../shared/errors/app-error.js";
import { sendMail } from "../mail/mail.service.js";
import { buildContactEmail } from "./contact.template.js";
import type { ContactPayload } from "./contact.validation.js";

export async function deliverContactMessage(payload: ContactPayload) {
  const message = buildContactEmail(payload);

  try {
    const result = await sendMail({
      to: env.CONTACT_TO_EMAIL,
      subject: message.subject,
      html: message.html,
      text: message.text,
      replyTo: payload.email
    });

    return {
      accepted: true,
      messageId: result.messageId
    };
  } catch (error) {
    console.error("Contact email delivery failed.", error);
    throw new AppError(502, "Unable to send your message right now. Please try again later.");
  }
}
