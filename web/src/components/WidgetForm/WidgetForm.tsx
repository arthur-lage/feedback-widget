import { useState } from "react";

import { CloseButton } from "../CloseButton";

import BugImageUrl from "../../assets/bug.svg";
import IdeaImageUrl from "../../assets/idea.svg";
import ThoughtImageUrl from "../../assets/thought.svg";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";

export const feedbackTypes = {
  bug: {
    title: "Problema",
    image: {
      source: BugImageUrl,
      alt: "Imagem de um inseto",
    },
  },
  idea: {
    title: "Ideia",
    image: {
      source: IdeaImageUrl,
      alt: "Imagem de uma lâmpada",
    },
  },
  other: {
    title: "Outro",
    image: {
      source: ThoughtImageUrl,
      alt: "Imagem de balão de pensamento",
    },
  },
};

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

  function handleRestartFeedback() {
    setFeedbackType(null);
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {!feedbackType ? (
        <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
      ) : (
        <FeedbackContentStep
          handleRestartFeedback={handleRestartFeedback}
          feedbackType={feedbackType}
        />
      )}

      <footer className="text-xs text-neutral-400">
        <span>
          Feito com ♥ pela{" "}
          <a
            className="underline underline-offset-2"
            href="https://rocketseat.com"
          >
            Rocketseat
          </a>
        </span>
      </footer>
    </div>
  );
}
