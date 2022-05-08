type Props = {
  label: string;
};

export function Tooltip({ label }: Props) {
    //@ts-ignore
  return <div className={`tooltip`} aria-label={label}></div>;
}
