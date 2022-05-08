import { prisma } from "../../prisma";
import {
  Feedback,
  FeedbackCreateData,
  FeedbacksRepository,
} from "../feedbacks-repository";

export class PrismaFeedbackRepository implements FeedbacksRepository {
  async create({ type, comment, screenshot }: FeedbackCreateData) {
    try {
      await prisma.feedback.create({
        data: {
          type,
          comment,
          screenshot,
        },
      });
    } catch (err: any) {
      console.log(err);

      throw new Error(err.message);
    }
  }

  async delete() {
    try {
      await prisma.feedback.deleteMany({});
    } catch (err: any) {
      console.log(err);

      throw new Error(err.message);
    }
  }

  async get() {
    try {
      //@ts-ignore
      const feedbacks: Feedback[] = await prisma.feedback.findMany();

      return feedbacks;
    } catch (err: any) {
      console.log(err);

      throw new Error(err.message);
    }
  }
}
