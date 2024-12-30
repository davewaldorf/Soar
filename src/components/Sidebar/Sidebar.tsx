import React, { useState } from "react";
import {
  SidebarContainer,
  SidebarHeader,
  SidebarLogo,
  SidebarTitle,
  SidebarList,
  SidebarItem,
  SidebarLink,
  SidebarBorder,
  SidebarOverlay,
  HamburgerButton,
} from "./Sidebar.styles";
import { icons, IconKeys } from "./icons";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems: { name: string; path: string; icon: IconKeys }[] = [
    { name: "Dashboard", path: "/", icon: "dashboardIcon" },
    { name: "Transactions", path: "/transactions", icon: "transactionsIcon" },
    { name: "Accounts", path: "/accounts", icon: "accountsIcon" },
    { name: "Investments", path: "/investments", icon: "investmentsIcon" },
    { name: "Credit Cards", path: "/credit-cards", icon: "creditCardsIcon" },
    { name: "Loans", path: "/loans", icon: "loansIcon" },
    { name: "Services", path: "/services", icon: "servicesIcon" },
    { name: "My Privileges", path: "/privileges", icon: "privilegesIcon" },
    { name: "Settings", path: "/settings", icon: "settingsIcon" },
  ];

  return (
    <>
      {/* Hamburger Button */}
      <HamburgerButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <img src={icons.hamburgerIcon} alt="Menu" />
      </HamburgerButton>

      {/* Sidebar Overlay */}
      <SidebarOverlay isOpen={isOpen} onClick={() => setIsOpen(false)} />

      {/* Sidebar */}
      <SidebarContainer isOpen={isOpen}>
        <SidebarHeader>
          <SidebarLogo src={icons.taskIcon} alt="Soar Task Logo" />
          <SidebarTitle>Soar Task</SidebarTitle>
        </SidebarHeader>

        <SidebarList>
          {menuItems.map((item) => (
            <SidebarItem key={item.path}>
              <SidebarLink
                to={item.path}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <SidebarBorder />
                <img src={icons[item.icon]} alt={`${item.name} Icon`} />
                {item.name}
              </SidebarLink>
            </SidebarItem>
          ))}
        </SidebarList>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
