import express, { Request, Response } from "express";

import { PrismaFeedbackRepository } from "./repositories/prisma/prisma-feedbacks-repository";

import { NodemailerMailAdapter } from "./adapters/nodemailer/nodemailer-mail-adapter";

import { DeleteFeedbacksUseCase } from "./use-cases/delete-feedback-use-case";
import { SubmitFeedbackUseCase } from "./use-cases/submit-feedback-use-case";
import { GetFeedbacksUseCase } from "./use-cases/get-feedbacks-use-case";

export const routes = express.Router();

routes.get("/feedbacks", async (req: Request, res: Response) => {
  try {
    const feedbacksRepository = new PrismaFeedbackRepository();

    const getFeedbacksUseCase = new GetFeedbacksUseCase(feedbacksRepository);

    const feedbacks = await getFeedbacksUseCase.execute();

    return res.status(200).json(feedbacks);
  } catch (err: any) {
    console.log(err);

    return res.status(500).json({ message: err.message });
  }
});

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

routes.delete("/feedbacks", async (req: Request, res: Response) => {
  try {
    const prismaFeedbackRepository = new PrismaFeedbackRepository();

    const deleteFeedbacksUseCase = new DeleteFeedbacksUseCase(
      prismaFeedbackRepository
    );

    await deleteFeedbacksUseCase.execute();

    return res
      .status(200)
      .json({ message: "Feedbacks deletados com sucesso!" });
  } catch (err: any) {
    console.log(err);

    return res.status(500).json({ message: err.message });
  }
});
