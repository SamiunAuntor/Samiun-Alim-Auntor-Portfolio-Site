import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters.").max(80),
  email: z.string().trim().email("Email must be valid."),
  subject: z.string().trim().min(3, "Subject must be at least 3 characters.").max(120),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters.")
    .max(3000, "Message must be at most 3000 characters.")
});

export type ContactPayload = z.infer<typeof contactSchema>;
