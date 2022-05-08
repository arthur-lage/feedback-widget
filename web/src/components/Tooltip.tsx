type Props = {
  label: string;
  currentTooltip: string;
};

export function Tooltip({ label, currentTooltip }: Props) {
  //@ts-ignore
  return <div className={`tooltip ${currentTooltip}`} aria-label={label}></div>;
}
