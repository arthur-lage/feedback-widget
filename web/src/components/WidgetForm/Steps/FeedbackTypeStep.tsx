import { CloseButton } from "../../CloseButton";
import { FeedbackType, feedbackTypes } from "../WidgetForm";

interface Props {
  onFeedbackTypeChanged: (feedbackType: FeedbackType) => void;
}

export function FeedbackTypeStep({ onFeedbackTypeChanged }: Props) {
  return (
    <>
      <header>
        <span className="text-xl leading-6 font-medium text-zinc-800 dark:text-zinc-100">Deixe seu feedback</span>

        <CloseButton />
      </header>
      <div className="flex w-full py-8 gap-2">
        {Object.entries(feedbackTypes).map(([key, value]) => (
          <button
            className="bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 transition-all ease-linear dark:hover:bg-zinc-700 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
            onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
            key={key}
          >
            <img src={value.image.source} alt={value.image.alt} />
            <span className="xsm:text-sm text-zinc-800 dark:text-zinc-100">
              {value.title}
            </span>
          </button>
        ))}
      </div>
    </>
  );
}
