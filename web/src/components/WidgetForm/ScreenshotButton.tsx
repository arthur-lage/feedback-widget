import html2canvas from "html2canvas";
import { Camera, Trash } from "phosphor-react";
import { useState } from "react";
import { Loading } from "../Loading";
import { Tooltip } from "../Tooltip";

type Props = {
  handleSetScreenshot: (screenshot: string | null) => void;
  screenshot: string | null;
};

export function ScreenshotButton({ screenshot, handleSetScreenshot }: Props) {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);

  async function handleTakeScreenshot() {
    setIsTakingScreenshot(true);

    const canvas = await html2canvas(document.querySelector("html")!);
    const base64image = canvas.toDataURL("image/png");

    handleSetScreenshot(base64image);
    setIsTakingScreenshot(false);
  }

  if (screenshot) {
    return (
      <button
        style={{
          backgroundImage: `url(${screenshot})`,
          backgroundPosition: "right bottom",
          backgroundSize: 100,
        }}
        title={screenshot !== null ? "Remover foto" : "Tirar foto da tela"}
        onClick={() => handleSetScreenshot(null)}
        className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end transition-colors ease-linear items-end text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-100"
      >
        <Trash weight="fill" />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleTakeScreenshot}
      className="has-tooltip p-2 rounded-md border-transparent dark:hover:bg-zinc-700 ease-linear transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-100 dark:focus:ring-offset-zinc-900 focus:ring-brand-500"
    >
      <Tooltip label="Capturar tela" />
      {isTakingScreenshot ? (
        <Loading color="text-zinc-800 dark:text-zinc-100" />
      ) : (
        <Camera className="w-6 h-6 text-zinc-800 dark:text-zinc-100" />
      )}
    </button>
  );
}
