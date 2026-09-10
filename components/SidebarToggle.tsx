export default function SidebarToggle() {
  return (
    <button
      data-sidebar-trigger
      aria-label="Toggle sidebar"
      className="group size-8 rounded-[10px] flex absolute right-0 top-4 hover:bg-contrast-high/5 dark:hover:bg-contrast-high/7"
    >
      <figure className="m-auto relative">
        <svg className="size-4.5 text-contrast-low group-hover:text-contrast-medium" width="18" height="18" viewBox="0 0 18 18">
          <rect x="1" y="2" width="16" height="14" rx="2.75" ry="2.75" strokeWidth="0" fill="currentColor" />
          <path d="m3.25,5.25h0" fill="none" stroke="var(--color-background-darker)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path data-sidebar-icon-line d="m3.25,7.75h2.5" pathLength={1} fill="none" stroke="var(--color-background-darker)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path data-sidebar-icon-line d="m3.25,10.25h2.5" pathLength={1} fill="none" stroke="var(--color-background-darker)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path data-sidebar-icon-line d="m3.25,12.75h2.5" pathLength={1} fill="none" stroke="var(--color-background-darker)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </svg>

        <span className="absolute w-[7.5px] h-[11px] bg-background-darker rounded-[1.25px] right-[2.5px] top-[3.5px] group-hover:w-[10px] transition-[width] duration-200 ease-out"></span>
      </figure>
    </button>
  );
}
