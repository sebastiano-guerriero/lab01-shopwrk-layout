import { useState } from "react";
import Logo from "./components/Logo";
import NavItem from "./components/NavItem";
import NavList from "./components/NavList";
import SidebarToggle from "./components/SidebarToggle";
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
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <main className="h-screen p-2">
      <div className="grid grid-cols-[auto_1fr] h-full">
        {/* sidebar */}
        <aside
          data-sidebar
          className="min-w-0 pl-1 pr-3 flex flex-col gap-6"
          data-sidebar-collapsed={sidebarCollapsed ? "" : undefined}
        >
          <header className="pl-1.5 pt-[19px] flex items-center relative pb-1">
            <Logo />
            <SidebarToggle
              collapsed={sidebarCollapsed}
              onClick={() => setSidebarCollapsed((collapsed) => !collapsed)}
            />
            <span data-divider className="absolute left-0 bottom-[-10px] w-full h-px bg-contrast-high/10"></span>
          </header>

          <NavList>
            <button
              data-sidebar-item
              className="group h-8 flex items-center gap-2.5 w-full rounded-[10px] px-2.5 select-none light:bg-contrast-high/3 hover:bg-contrast-high/5 light:inset-ring-1 light:inset-ring-contrast-high/5 light:shadow-2xs light:shadow-white/20 light:inset-shadow-2xs light:inset-shadow-contrast-high/5 dark:shadow-[inset_0px_-1px_0px_rgba(248,247,247,0.15),inset_0px_0px_0px_1px_rgba(248,247,247,0.15)]"
            >
              <MagnifierOutline18 className="text-contrast-medium group-hover:text-contrast-high shrink-0" />
              <span data-sidebar-fade className="text-contrast-low whitespace-nowrap">Search</span>
            </button>

            <NavItem icon={<MsgRobotOutlineDuo18 duoOpacity={0.2} />}>
              Ask ShopWrk
            </NavItem>
          </NavList>

          <NavList label="Overview">
            <NavItem selected icon={<GridLayout5OutlineDuo18 duoOpacity={0.2} />}>
              Dashboard
            </NavItem>

            <NavItem icon={<CalendarPlanningOutlineDuo18 duoOpacity={0.2} />}>
              Calendar
            </NavItem>
          </NavList>

          <NavList label="Customers">
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

          <NavList label="Business">
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
