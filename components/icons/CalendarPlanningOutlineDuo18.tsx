import type { SVGProps } from "react";

export type CalendarPlanningOutlineDuo18Props = SVGProps<SVGSVGElement> & {
  strokeWidth?: number | string;
  duoOpacity?: number | string;
};

export function CalendarPlanningOutlineDuo18({
  strokeWidth = 1.5,
  duoOpacity = 0.2,
  ...props
}: CalendarPlanningOutlineDuo18Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18" {...props}><path d="M2.25 4.75C2.25 3.64543 3.14543 2.75 4.25 2.75H13.75C14.8546 2.75 15.75 3.64543 15.75 4.75V6.25H2.25V4.75Z" fill="currentColor" data-color="color-2" data-stroke="none" opacity={duoOpacity}></path> <path d="M5.75 2.75V0.75" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" fill="none"></path> <path d="M12.25 2.75V0.75" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" fill="none"></path> <path d="M13.75 2.75H4.25C3.14543 2.75 2.25 3.64543 2.25 4.75V13.25C2.25 14.3546 3.14543 15.25 4.25 15.25H13.75C14.8546 15.25 15.75 14.3546 15.75 13.25V4.75C15.75 3.64543 14.8546 2.75 13.75 2.75Z" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" fill="none"></path> <path d="M2.25 6.25H15.75" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" fill="none"></path> <path d="M4.75 9.25H8" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" fill="none"></path> <path d="M12.75 9.25H13.25" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" fill="none"></path> <path d="M7.75 12.25H12.25" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" fill="none"></path></svg>
  );
}
