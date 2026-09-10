import Logo from "./components/Logo";
import NavItem from "./components/NavItem";
import NavList from "./components/NavList";
import { CalendarPlanningOutlineDuo18 } from "./components/icons/CalendarPlanningOutlineDuo18";
import { GridLayout5OutlineDuo18 } from "./components/icons/GridLayout5OutlineDuo18";

export default function App() {
  return (
    <main className="h-screen p-2">
      <div className="grid grid-cols-[256px_1fr] h-full">
        {/* sidebar */}
        <aside className="pl-1 pr-3">
          <header className="pl-1.5 pt-[19px] flex items-center relative mb-[19px]">
            <Logo />

            <button className="size-8 rounded-[10px] flex absolute">

            </button>
          </header>

          <NavList label="Overview">
            <NavItem selected icon={<GridLayout5OutlineDuo18 duoOpacity={0.2} />}>
              Dashboard
            </NavItem>

            <NavItem icon={<CalendarPlanningOutlineDuo18 duoOpacity={0.2} />}>
              Calendar
            </NavItem>
          </NavList>
        </aside>

        {/* main container */}
        <div className="bg-background-dark rounded-2xl h-full p-4 overflow-auto light:shadow-[0px_1px_0px_rgba(0,0,0,0.04),0px_0px_0px_1px_rgba(0,0,0,0.05),0px_38px_15px_-8px_rgba(0,0,0,0.01),0px_21px_13px_-4px_rgba(0,0,0,0.02),0px_9px_9px_-2px_rgba(0,0,0,0.03),0px_2px_5px_-1px_rgba(0,0,0,0.04),inset_0px_0px_0px_1px_rgba(255,255,255,0.15),inset_0px_1px_0px_rgba(255,255,255,0.7)] dark:shadow-[0px_1px_0px_rgba(0,0,0,0.04),0px_0px_0px_1px_rgba(0,0,0,0.05),0px_38px_15px_-8px_rgba(0,0,0,0.01),0px_21px_13px_-4px_rgba(0,0,0,0.02),0px_9px_9px_-2px_rgba(0,0,0,0.03),0px_2px_5px_-1px_rgba(0,0,0,0.04),inset_0px_0px_0px_1px_rgba(255,255,255,0.07),inset_0px_1px_0px_rgba(255,255,255,0.08)]">
        </div>
      </div>
    </main>
  );
}