import { MoonStars, Sun } from "phosphor-react";
import { Tooltip } from "./Tooltip";

type Props = {
  isDarkMode: boolean;
  toggleTheme: () => void;
};

export function ThemeToggler({ isDarkMode, toggleTheme }: Props) {
  return (
    <div className="absolute top-4 right-4">
      <div
        className="has-tooltip cursor-pointer p-2 rounded-[8px] hover:rounded-[50%] transition-all duration-200 bg-brand-500 hover:bg-brand-300 dark:text-zinc-100"
        onClick={toggleTheme}
      >
        <Tooltip
          currentTooltip="theme-toggler"
          label={"Trocar entre tema claro/escuro"}
        />
        {isDarkMode ? <MoonStars size={32} /> : <Sun size={32} />}
      </div>
    </div>
  );
}
