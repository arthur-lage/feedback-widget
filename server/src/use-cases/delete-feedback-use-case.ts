import { FeedbacksRepository } from "../repositories/feedbacks-repository";

export class DeleteFeedbacksUseCase {
  constructor(private feedbacksRepository: FeedbacksRepository) {}

  async execute() {
    await this.feedbacksRepository.delete();
  }
}
