import { FeedbacksRepository } from "../repositories/feedbacks-repository";

export class GetFeedbacksUseCase {
  constructor(private feedbacksRepository: FeedbacksRepository) {}

  async execute() {
    if (this.feedbacksRepository.get) {
      const feedbacks = await this.feedbacksRepository.get();

      return feedbacks;
    }
  }
}
