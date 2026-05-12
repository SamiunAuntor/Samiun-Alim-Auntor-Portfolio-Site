import { Router } from "express";
import rateLimit from "express-rate-limit";
import { submitContactMessage } from "./contact.controller.js";

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many contact attempts from this IP. Please try again in a little while."
  }
});

export const contactRouter = Router();

contactRouter.post("/", contactLimiter, submitContactMessage);
