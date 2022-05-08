import { MailAdapter } from "../adapters/mail-adapter";
import { FeedbacksRepository } from "../repositories/feedbacks-repository";

interface SubmitFeedbackUseCaseRequest {
  type: string;
  comment: string;
  screenshot?: string;
}

export class SubmitFeedbackUseCase {
  constructor(
    private feedbacksRepository: FeedbacksRepository,
    private mailAdapter: MailAdapter
  ) {}

  async execute(request: SubmitFeedbackUseCaseRequest) {
    const { type, comment, screenshot } = request;

    if (!type) {
      throw new Error("Type is required");
    }

    if (!comment) {
      throw new Error("Comment is required");
    }

    if (screenshot && !screenshot.startsWith("data:image/png;base64")) {
      throw new Error("Invalid screenshot format.");
    }

    if (this.feedbacksRepository.create) {
      await this.feedbacksRepository.create({
        type,
        comment,
        screenshot,
      });
    }

    await this.mailAdapter.sendMail({
      subject: "Novo feedback",
      body: [
        `<div style="display: flex; flex-direction: column; align-items: center;">`,
        `<span style="display: flex; align-items: center">`,
        `<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Mail</title><rect x="48" y="96" width="416" height="320" rx="40" ry="40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M112 160l144 112 144-112"/></svg>`,
        `<span style="font-size: 1.6rem; white-space: none; font-family: sans-serif; margin-left: 0.5rem">Feedbacks Widget</span>`,
        `</span>`,
        `<h2 style="font-family: sans-serif; font-size: 1.4rem; text-align: center; color: #111;">You have received a new feedback!</h2>`,
        `<span style="margin-top:1 rem; font-family: sans-serif; font-size: 1rem; color: #333">Feedback Type: ${type}</span>`,
        `<span style="margin-top: 1rem; font-family: sans-serif; font-size: 1rem; color: #333">Feedback: ${comment}</span>`,
        screenshot &&
          [
            `<a style="text-decoration: none" target="_blank" href="${screenshot}">`,
            `<img style="border-radius: 0.5rem; margin-top: 2rem" width="750" src="${screenshot}" alt="Feedback Screenshot"/>`,
            `</a>`,
          ].join("\n"),
        `</div>`,
      ].join("\n"),
    });
  }
}
