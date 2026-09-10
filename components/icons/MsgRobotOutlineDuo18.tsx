import type { SVGProps } from "react";

export type MsgRobotOutlineDuo18Props = SVGProps<SVGSVGElement> & {
  strokeWidth?: number | string;
  duoOpacity?: number | string;
};

export function MsgRobotOutlineDuo18({
  strokeWidth = 1.5,
  duoOpacity = 0.2,
  ...props
}: MsgRobotOutlineDuo18Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18" fill="none" {...props}>
      <path d="M7 14.25V12.25C7 9.9863 8.7793 8.1299 11.0127 8.0063C11.1348 6.8798 12.0918 6 13.25 6C14.1761 6 14.9736 6.5625 15.3184 7.3639C15.4048 7.5647 16.0909 7.4772 16.011 7.1698C15.2002 4.0524 12.3711 1.75 9 1.75C4.996 1.75 1.75 4.996 1.75 9C1.75 10.319 2.108 11.552 2.723 12.617C3.153 13.423 2.67 15.329 1.75 16.25C3 16.318 4.647 15.753 5.383 15.277C5.7192 15.4709 6.1964 15.7047 6.791 15.8948C6.9892 15.9582 7.2686 15.7696 7.2118 15.6039C7.0681 15.1848 7 14.7177 7 14.25Z" fill="currentColor" data-color="color-2" data-stroke="none" opacity={duoOpacity}></path>
      <path d="M15.9848 7.0501C15.1332 3.9931 12.3285 1.75 9 1.75C4.996 1.75 1.75 4.996 1.75 9C1.75 10.319 2.108 11.552 2.723 12.617C3.153 13.423 2.67 15.329 1.75 16.25C3 16.318 4.647 15.753 5.383 15.277C5.6631 15.4385 6.037 15.6302 6.4961 15.8006" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" fill="none"></path>
      <path d="M13.25 10.25V8.25" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" fill="none"></path>
      <path d="M11.25 16.25H15.25C16.3546 16.25 17.25 15.3546 17.25 14.25V12.25C17.25 11.1454 16.3546 10.25 15.25 10.25H11.25C10.1454 10.25 9.25 11.1454 9.25 12.25V14.25C9.25 15.3546 10.1454 16.25 11.25 16.25Z" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" fill="none"></path>
      <path d="M15.25 9.5H14V8.25C14 7.8359 13.6641 7.5 13.25 7.5C12.8359 7.5 12.5 7.8359 12.5 8.25V9.5H11.25C9.7334 9.5 8.5 10.7334 8.5 12.25V14.25C8.5 15.7666 9.7334 17 11.25 17H15.25C16.7666 17 18 15.7666 18 14.25V12.25C18 10.7334 16.7666 9.5 15.25 9.5ZM16.5 14.25C16.5 14.9395 15.9395 15.5 15.25 15.5H11.25C10.5605 15.5 10 14.9395 10 14.25V12.25C10 11.5605 10.5605 11 11.25 11H15.25C15.9395 11 16.5 11.5605 16.5 12.25V14.25Z" fill="currentColor"></path>
      <path d="M11.75 13.75C12.1642 13.75 12.5 13.4142 12.5 13C12.5 12.5858 12.1642 12.25 11.75 12.25C11.3358 12.25 11 12.5858 11 13C11 13.4142 11.3358 13.75 11.75 13.75Z" fill="currentColor"></path>
      <path d="M14.75 13.75C15.1642 13.75 15.5 13.4142 15.5 13C15.5 12.5858 15.1642 12.25 14.75 12.25C14.3358 12.25 14 12.5858 14 13C14 13.4142 14.3358 13.75 14.75 13.75Z" fill="currentColor"></path>
    </svg>
  );
}
