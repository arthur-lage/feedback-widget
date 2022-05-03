import { Popover } from "@headlessui/react";
import { ChatTeardropDots } from "phosphor-react";

export function Widget() {
  return (
    <Popover className="absolute right-5 bottom-5">
      <Popover.Panel>Xainiro</Popover.Panel>

      <Popover.Button className="transition-all duration-200 ease-linear group flex items-center bg-brand-500 hover:bg-brand-700 rounded-full px-3 h-12 text-white">
        <ChatTeardropDots className="w-6 h-6" />

        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-[375ms] ease-linear">
          <span className="pl-2"></span>
          Feedback
        </span>
      </Popover.Button>
    </Popover>
  );
}
