import { GetFeedbacksUseCase } from "./get-feedbacks-use-case";

const getFeedbacksSpy = jest.fn();

const getFeedbacks = new GetFeedbacksUseCase({ get: getFeedbacksSpy });

describe("Get feedbacks", () => {
  it("should be able to return all the feedbacks", async () => {
    await expect(getFeedbacks.execute()).resolves.not.toThrow;

    expect(getFeedbacksSpy).toHaveBeenCalled();
  });
});
