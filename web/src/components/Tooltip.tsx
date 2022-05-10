type Props = {
  label: string;
  currentTooltip: string;
};

export function Tooltip({ label, currentTooltip }: Props) {
  //@ts-ignore
  return (
    <div
      role="tooltip"
      className={`tooltip ${currentTooltip}`}
      aria-label={label}
    ></div>
  );
}
