import { ArrowLeft, Camera } from "phosphor-react";
import { CloseButton } from "../../CloseButton";
import { FeedbackType, feedbackTypes } from "../WidgetForm";

interface Props {
  feedbackType: FeedbackType;
  handleRestartFeedback: () => void;
}

export function FeedbackContentStep({
  feedbackType,
  handleRestartFeedback,
}: Props) {
  const feedbackTypeInfo = feedbackTypes[feedbackType];

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

      <form className="my-4 w-full">
        <textarea
          className="focus:outline-none min-w-[304px] min-h-[112px] text-sm placeholder:text-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-1 focus:ring-brand-500 resize-none scrollbar scrollbar-zinc-700 scrollbar-track-transparent"
          placeholder="Conte com detalhes o que está acontecendo"
        />

        <footer className="mt-2 gap-2 flex">
          <button
            type="button"
            className="p-2 bg-zinc-600 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
          >
            <Camera className="w-6 h-6 text-zinc-100" />
          </button>

          <button
            type="submit"
            className="p-2 bg-brand-500 rounded-[4px] border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors focus:ring-offset-zinc-900 focus:ring-brand-500"
          >
            Enviar feedback
          </button>
        </footer>
      </form>
    </>
  );
}
