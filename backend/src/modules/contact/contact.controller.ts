import type { Request, Response } from "express";
import { deliverContactMessage } from "./contact.service.js";
import { contactSchema } from "./contact.validation.js";

export async function submitContactMessage(req: Request, res: Response) {
  const parsed = contactSchema.safeParse(req.body);

  if (!parsed.success) {
    return res.status(400).json({
      success: false,
      message: "Invalid contact form payload.",
      errors: parsed.error.flatten().fieldErrors
    });
  }

  const result = await deliverContactMessage(parsed.data);

  return res.status(201).json({
    success: true,
    message: "Your message was sent successfully.",
    data: result
  });
}
