import { CloseButton } from "../../CloseButton";
import { FeedbackType, feedbackTypes } from "../WidgetForm";

interface Props {
  onFeedbackTypeChanged: (feedbackType: FeedbackType) => void;
}

export function FeedbackTypeStep({ onFeedbackTypeChanged }: Props) {
  return (
    <>
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>

        <CloseButton />
      </header>
      <div className="flex w-full py-8 gap-2">
        {Object.entries(feedbackTypes).map(([key, value]) => (
          <button
            className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
            onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
            key={key}
          >
            <img src={value.image.source} alt={value.image.alt} />
            <span className="xsm:text-sm">{value.title}</span>
          </button>
        ))}
      </div>
    </>
  );
}
