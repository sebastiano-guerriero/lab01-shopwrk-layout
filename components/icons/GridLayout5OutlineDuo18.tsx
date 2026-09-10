import type { SVGProps } from "react";

export type GridLayout5OutlineDuo18Props = SVGProps<SVGSVGElement> & {
  strokeWidth?: number | string;
  duoOpacity?: number | string;
};

export function GridLayout5OutlineDuo18({
  strokeWidth = 1.5,
  duoOpacity = 0.2,
  ...props
}: GridLayout5OutlineDuo18Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18" {...props}><path d="M2.75 11.75V14.25C2.75 14.8023 3.19772 15.25 3.75 15.25H14.25C14.8023 15.25 15.25 14.8023 15.25 14.25V11.75C15.25 11.1977 14.8023 10.75 14.25 10.75H3.75C3.19772 10.75 2.75 11.1977 2.75 11.75Z" fill="currentColor" data-color="color-2" data-stroke="none" opacity={duoOpacity}></path> <path d="M15.25 6.25V3.75C15.25 3.19772 14.8023 2.75 14.25 2.75H11.75C11.1977 2.75 10.75 3.19772 10.75 3.75V6.25C10.75 6.80228 11.1977 7.25 11.75 7.25H14.25C14.8023 7.25 15.25 6.80228 15.25 6.25Z" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" fill="none"></path> <path d="M7.25 6.25V3.75C7.25 3.19772 6.80228 2.75 6.25 2.75H3.75C3.19772 2.75 2.75 3.19772 2.75 3.75V6.25C2.75 6.80228 3.19772 7.25 3.75 7.25H6.25C6.80228 7.25 7.25 6.80228 7.25 6.25Z" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" fill="none"></path> <path d="M2.75 11.75V14.25C2.75 14.8023 3.19772 15.25 3.75 15.25H14.25C14.8023 15.25 15.25 14.8023 15.25 14.25V11.75C15.25 11.1977 14.8023 10.75 14.25 10.75H3.75C3.19772 10.75 2.75 11.1977 2.75 11.75Z" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" fill="none"></path></svg>
  );
}
