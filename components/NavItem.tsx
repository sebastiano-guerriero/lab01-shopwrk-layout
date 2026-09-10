import type { ReactNode } from "react";

type NavItemProps = {
  icon: ReactNode;
  children: ReactNode;
  selected?: boolean;
};

export default function NavItem({ icon, children, selected = false }: NavItemProps) {
  return (
    <button
      aria-current={selected ? "page" : undefined}
      className={`h-8 flex items-center gap-2.5 w-full rounded-[10px] px-2.5 ${
        selected
          ? "bg-background text-contrast-high light:shadow-[0px_0px_0px_1px_rgba(0,0,0,0.03),0px_1px_0px_rgba(0,0,0,0.06),0px_5px_2px_rgba(0,0,0,0.01),0px_3px_2px_rgba(0,0,0,0.02),0px_1px_1px_rgba(0,0,0,0.04),0px_0px_1px_rgba(0,0,0,0.05),inset_0px_0px_0px_1px_rgba(255,255,255,0.15),inset_0px_1px_0px_rgba(255,255,255,0.7)] dark:shadow-[0px_0px_0px_1px_rgba(0,0,0,0.05),0px_1px_0px_rgba(0,0,0,0.06),0px_5px_2px_rgba(0,0,0,0.01),0px_3px_2px_rgba(0,0,0,0.02),0px_1px_1px_rgba(0,0,0,0.04),0px_0px_1px_rgba(0,0,0,0.05),inset_0px_0px_0px_1px_rgba(255,255,255,0.05),inset_0px_1px_0px_rgba(255,255,255,0.11)] dark:bg-linear-to-t dark:from-transparent dark:to-white/10"
     
          : "text-contrast-medium hover:bg-contrast-high/5 dark:hover:bg-contrast-high/7 hover:text-contrast-high"
      }`}
    >
      {icon}
      <span>{children}</span>
    </button>
  );
}