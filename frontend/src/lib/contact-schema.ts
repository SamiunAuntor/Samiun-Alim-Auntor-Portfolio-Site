import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(80),
  email: z.string().trim().email("Please enter a valid email address."),
  subject: z.string().trim().min(3, "Please enter a subject.").max(120),
  message: z
    .string()
    .trim()
    .min(10, "Please share a bit more detail.")
    .max(3000, "Please keep the message under 3000 characters.")
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
