import cors from "cors";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import { contactRouter } from "./modules/contact/contact.route.js";

export function createApp() {
  const app = express();

  app.use(helmet());
  app.use(
    cors({
      origin: process.env.FRONTEND_ORIGIN ?? "http://localhost:3000"
    })
  );
  app.use(express.json());
  app.use(morgan("dev"));

  app.get("/health", (_req, res) => {
    res.json({ ok: true, service: "portfolio-backend" });
  });

  app.use("/api/contact", contactRouter);

  return app;
}
