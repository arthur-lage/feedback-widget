import { CircleNotch } from "phosphor-react";

type Props = {
  color?: string
}

export function Loading({ color = "text-white" }: Props) {
  return (
    <div className="w-6 h-6 flex align-center overflow-hidden justify-center">
      <CircleNotch className={`w-6 h-6 animate-spin ${color}`} />
    </div>
  );
}
