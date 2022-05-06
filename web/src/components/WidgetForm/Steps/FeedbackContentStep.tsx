import { ArrowLeft } from "phosphor-react";
import { CloseButton } from "../../CloseButton";
import { FeedbackType, feedbackTypes } from "../WidgetForm";

import { ScreenshotButton } from "../ScreenshotButton";
import { FormEvent, useState } from "react";
import { api } from "../../../services/api";
import { Loading } from "../../Loading";

interface Props {
  feedbackType: FeedbackType;
  handleRestartFeedback: () => void;
  onFeedbackSent: () => void;
}

export function FeedbackContentStep({
  feedbackType,
  handleRestartFeedback,
  onFeedbackSent,
}: Props) {
  const [isSendingFeedback, setIsSendingFeedback] = useState<boolean>(false);
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [comment, setComment] = useState<string>("");

  const feedbackTypeInfo = feedbackTypes[feedbackType];

  function handleSetScreenshot(screenshot: string | null) {
    setScreenshot(screenshot);
  }

  function handleFormSubmit(e: FormEvent) {
    e.preventDefault();

    setIsSendingFeedback(true);

    api
      .post("/feedbacks", {
        type: feedbackType,
        comment,
        screenshot,
      })
      .then(() => {
        setIsSendingFeedback(false);

        onFeedbackSent();
      })
      .catch((err) => {
        setIsSendingFeedback(false);

        console.log(err);
      });
  }

  return (
    <>
      <header>
        <button
          onClick={handleRestartFeedback}
          type="button"
          className="absolute top-5 left-5 text-zinc-400 hover:text-zinc-100"
        >
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>

        <span className="text-xl leading-6 flex items-center gap-2">
          <img
            src={feedbackTypeInfo.image.source}
            alt={feedbackTypeInfo.image.alt}
            className="w-6 h-6"
          />
          {feedbackTypeInfo.title}
        </span>

        <CloseButton />
      </header>

      <form onSubmit={(e) => handleFormSubmit(e)} className="my-4 w-full">
        <textarea
          className="mobile:min-w-full focus:outline-none min-w-[304px] min-h-[112px] text-sm placeholder:text-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-1 focus:ring-brand-500 resize-none scrollbar scrollbar-zinc-700 scrollbar-track-transparent"
          placeholder="Conte com detalhes o que está acontecendo"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />

        <footer className="mt-2 gap-2 flex">
          <ScreenshotButton
            screenshot={screenshot}
            handleSetScreenshot={handleSetScreenshot}
          />

          <button
            type="submit"
            className="p-2 bg-brand-500 rounded-[4px] border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors focus:ring-offset-zinc-900 focus:ring-brand-500 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-brand-500"
            disabled={comment.length === 0 || isSendingFeedback}
          >
            {isSendingFeedback ? <Loading /> : <>Enviar feedback</>}
          </button>
        </footer>
      </form>
    </>
  );
}
