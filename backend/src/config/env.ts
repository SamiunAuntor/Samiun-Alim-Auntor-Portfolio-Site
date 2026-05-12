import { config } from "dotenv";
import { z } from "zod";

config();

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  PORT: z.coerce.number().int().positive().default(5000),
  FRONTEND_ORIGIN: z
    .string()
    .default("http://localhost:3000")
    .transform((value) =>
      value
        .split(",")
        .map((origin) => origin.trim())
        .filter(Boolean)
    )
    .pipe(z.array(z.string().url()).min(1)),
  SMTP_HOST: z.string().min(1, "SMTP_HOST is required."),
  SMTP_PORT: z.coerce.number().int().positive(),
  SMTP_SECURE: z
    .enum(["true", "false"])
    .default("true")
    .transform((value) => value === "true"),
  SMTP_USER: z.string().min(1, "SMTP_USER is required."),
  SMTP_PASS: z.string().min(1, "SMTP_PASS is required."),
  MAIL_FROM_NAME: z.string().min(1, "MAIL_FROM_NAME is required."),
  MAIL_FROM_EMAIL: z.string().email("MAIL_FROM_EMAIL must be a valid email address."),
  CONTACT_TO_EMAIL: z.string().email("CONTACT_TO_EMAIL must be a valid email address.")
});

const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
  throw new Error(
    `Invalid environment configuration:\n${JSON.stringify(parsedEnv.error.flatten().fieldErrors, null, 2)}`
  );
}

export const env = parsedEnv.data;
