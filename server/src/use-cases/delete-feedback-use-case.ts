import { FeedbacksRepository } from "../repositories/feedbacks-repository";

export class DeleteFeedbacksUseCase {
  constructor(private feedbacksRepository: FeedbacksRepository) {}

  async execute() {
    if (this.feedbacksRepository.delete) {
      await this.feedbacksRepository.delete();
    }
  }
}
