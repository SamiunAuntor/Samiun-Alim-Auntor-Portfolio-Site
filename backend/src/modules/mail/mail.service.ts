import nodemailer from "nodemailer";
import type SMTPTransport from "nodemailer/lib/smtp-transport/index.js";
import { env } from "../../config/env.js";

type SendMailInput = {
  to: string;
  subject: string;
  html: string;
  text: string;
  replyTo?: string;
};

let transporter: nodemailer.Transporter<SMTPTransport.SentMessageInfo> | null = null;

function getTransporter() {
  if (!transporter) {
    transporter = nodemailer.createTransport({
      host: env.SMTP_HOST,
      port: env.SMTP_PORT,
      secure: env.SMTP_SECURE,
      auth: {
        user: env.SMTP_USER,
        pass: env.SMTP_PASS
      }
    });
  }

  return transporter;
}

export async function sendMail({ to, subject, html, text, replyTo }: SendMailInput) {
  return getTransporter().sendMail({
    from: `"${env.MAIL_FROM_NAME}" <${env.MAIL_FROM_EMAIL}>`,
    to,
    subject,
    html,
    text,
    replyTo
  });
}
