import Logo from "./components/Logo";
import NavItem from "./components/NavItem";
import NavList from "./components/NavList";
import { AddressBookOutlineDuo18 } from "./components/icons/AddressBookOutlineDuo18";
import { CalendarPlanningOutlineDuo18 } from "./components/icons/CalendarPlanningOutlineDuo18";
import { CircleDollarOutOutlineDuo18 } from "./components/icons/CircleDollarOutOutlineDuo18";
import { FilesContentOutlineDuo18 } from "./components/icons/FilesContentOutlineDuo18";
import { GridLayout5OutlineDuo18 } from "./components/icons/GridLayout5OutlineDuo18";
import { MagnifierOutline18 } from "./components/icons/MagnifierOutline18";
import { MegaphoneOutlineDuo18 } from "./components/icons/MegaphoneOutlineDuo18";
import { MsgRobotOutlineDuo18 } from "./components/icons/MsgRobotOutlineDuo18";
import { Msgs2OutlineDuo18 } from "./components/icons/Msgs2OutlineDuo18";
import { UserSettingsOutlineDuo18 } from "./components/icons/UserSettingsOutlineDuo18";

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

          <NavList className="mb-6">
            <button className="group h-8 flex items-center gap-2.5 w-full rounded-[10px] px-2.5 select-none light:bg-contrast-high/3 hover:bg-contrast-high/5 light:inset-ring-1 light:inset-ring-contrast-high/5 light:shadow-2xs light:shadow-white/20 light:inset-shadow-2xs light:inset-shadow-contrast-high/5 dark:shadow-[inset_0px_-1px_0px_rgba(248,247,247,0.15),inset_0px_0px_0px_1px_rgba(248,247,247,0.15)]">
              <MagnifierOutline18 className="text-contrast-medium group-hover:text-contrast-high" />
              <span className="text-contrast-low">Search</span>
            </button>

            <NavItem icon={<MsgRobotOutlineDuo18 duoOpacity={0.2} />}>
              Ask ShopWrk
            </NavItem>
          </NavList>

          <NavList label="Overview" className="mb-6">
            <NavItem selected icon={<GridLayout5OutlineDuo18 duoOpacity={0.2} />}>
              Dashboard
            </NavItem>

            <NavItem icon={<CalendarPlanningOutlineDuo18 duoOpacity={0.2} />}>
              Calendar
            </NavItem>
          </NavList>

          <NavList label="Customers" className="mb-6">
            <NavItem icon={<Msgs2OutlineDuo18 duoOpacity={0.2} />}>
              Conversations
            </NavItem>

            <NavItem icon={<AddressBookOutlineDuo18 duoOpacity={0.2} />}>
              Contacts
            </NavItem>

            <NavItem icon={<UserSettingsOutlineDuo18 duoOpacity={0.2} />}>
              CRM
            </NavItem>
          </NavList>

          <NavList label="Business" className="mb-6">
            <NavItem icon={<CircleDollarOutOutlineDuo18 duoOpacity={0.2} />}>
              Payments
            </NavItem>

            <NavItem icon={<FilesContentOutlineDuo18 duoOpacity={0.2} />}>
              Documents
            </NavItem>

            <NavItem icon={<MegaphoneOutlineDuo18 duoOpacity={0.2} />}>
              Marketing
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
