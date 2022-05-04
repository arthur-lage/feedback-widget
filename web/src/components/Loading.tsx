import { CircleNotch } from "phosphor-react";

export function Loading() {
  return (
    <div className="w-6 h-6 flex align-center overflow-hidden justify-center">
      <CircleNotch className="w-6 h-6 animate-spin" />
    </div>
  );
}
