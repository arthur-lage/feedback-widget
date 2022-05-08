import { DeleteFeedbacksUseCase } from "./delete-feedback-use-case";

const deleteFeedbackSpy = jest.fn();

const deleteFeedback = new DeleteFeedbacksUseCase({
  delete: deleteFeedbackSpy,
});

describe("Delete feedback", () => {
  it("should be able to delete a feedback", async () => {
    await expect(deleteFeedback.execute()).not.toThrow;

    expect(deleteFeedbackSpy).toHaveBeenCalled();
  });
});
