import type { Request, Response } from "express";
import { queueContactMessage } from "./contact.service.js";
import { contactSchema } from "./contact.validation.js";

export function submitContactMessage(req: Request, res: Response) {
  const parsed = contactSchema.safeParse(req.body);

  if (!parsed.success) {
    return res.status(400).json({
      message: "Invalid contact form payload.",
      issues: parsed.error.flatten()
    });
  }

  const result = queueContactMessage(parsed.data);

  return res.status(202).json({
    message: "Contact request accepted. Mail service will be connected next.",
    data: result.payload
  });
}
