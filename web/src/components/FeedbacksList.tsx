import { useEffect, useState } from "react";
import { useUser } from "../hooks/useUser";
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
    <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col items-center">
      <span className="mb-8 text-center w-full text-2xl font-medium font-[Ubuntu] tracking-wide uppercase text-zinc-800 dark:text-zinc-100">
        Feedbacks
      </span>
      <div className="gap-4 flex flex-col w-full min-w-[50vw] max-w-[50vw] max-h-[287.5px] overflow-y-scroll scrollbar-thumb-brand-500 dark:scrollbar-thumb-brand-500 scrollbar-thin">
        {feedbacks.map((feedback) => (
          <div
            className="flex flex-col gap-2 hover:bg-zinc-800 p-4 rounded-md"
            key={feedback.id}
          >
            <span className="font-medium font-[Ubuntu] tracking-wide">
              Type: <span className="font-normal">{feedback.type}</span>
            </span>
            <span className="font-medium font-[Ubuntu] tracking-wide">
              Comment: <span className="font-normal">{feedback.comment}</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
