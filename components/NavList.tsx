import { Children, useId, type ReactNode } from "react";

type NavListProps = {
  children: ReactNode;
  label?: ReactNode;
  className?: string;
};

export default function NavList({ children, label, className }: NavListProps) {
  const labelId = useId();

  return (
    <nav aria-labelledby={label ? labelId : undefined} className={className}>
      {label ? (
        <p id={labelId} className="px-2.5 mb-2 text-sm text-contrast-low leading-none select-none">
          {label}
        </p>
      ) : null}
      <ul className="flex flex-col gap-0.5">
        {Children.map(children, (child) => (
          <li>{child}</li>
        ))}
      </ul>
    </nav>
  );
}
