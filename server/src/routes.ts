import express, { Request, Response } from "express";
import { NodemailerMailAdapter } from "./adapters/nodemailer/nodemailer-mail-adapter";
import { prisma } from "./prisma";
import { PrismaFeedbackRepository } from "./repositories/prisma/prisma-feedbacks-repository";
import { SubmitFeedbackUseCase } from "./use-cases/submit-feedback-use-case";

export const routes = express.Router();

routes.post("/feedbacks", async (req: Request, res: Response) => {
  try {
    const { type, comment, screenshot } = req.body;

    const prismaFeedbackRepository = new PrismaFeedbackRepository();
    const nodemailerMailAdapter = new NodemailerMailAdapter();

    const submitFeedbackUseCase = new SubmitFeedbackUseCase(
      prismaFeedbackRepository,
      nodemailerMailAdapter
    );

    await submitFeedbackUseCase.execute({ type, comment, screenshot });

    return res.status(201).json({ message: "Feedback criado com sucesso!" });
  } catch (err: any) {
    console.log(err);

    return res.status(500).json({ message: err.message });
  }
});
