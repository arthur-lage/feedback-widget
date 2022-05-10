import { Popover } from "@headlessui/react";
import { ChatTeardropDots } from "phosphor-react";
import { WidgetForm } from "./WidgetForm/WidgetForm";

export function Widget() {
  return (
    <Popover className="absolute right-4 bottom-4 flex flex-col items-end md:right-6 md:bottom-6">
      <Popover.Panel>
        <WidgetForm />
      </Popover.Panel>

      <Popover.Button
        tabIndex={4}
        className="transition-all duration-200 ease-linear group flex items-center shadow-widget_button shadow-brand-500 bg-brand-500 hover:bg-brand-300 rounded-full px-3 h-12 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500"
      >
        <ChatTeardropDots className="w-6 h-6" />

        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-[375ms] ease-linear">
          <span className="pl-2"></span>
          Feedback
        </span>
      </Popover.Button>
    </Popover>
  );
}
