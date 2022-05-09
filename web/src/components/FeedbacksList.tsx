import { useEffect, useState } from "react";
import { api } from "../services/api";

type Feedback = {
  id: string;
  type: string;
  comment: string;
};

export function FeedbacksList() {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);

  useEffect(() => {
    api
      .get<Feedback[]>("/feedbacks")
      .then(({ data }) => {
        setFeedbacks(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="flex flex-col">
      {feedbacks.map((feedback) => (
        <div key={feedback.id}>
          <span>Type: {feedback.type}</span>
          <span>Comment: {feedback.comment}</span>
        </div>
      ))}
    </div>
  );
}
