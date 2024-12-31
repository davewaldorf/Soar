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
import { icons } from "./icons";
import { routes } from "../../../routes/routes";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

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
          {routes.map((route) => (
            <SidebarItem key={route.path}>
              <SidebarLink
                to={route.path}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <SidebarBorder />
                <img src={icons[route.icon]} alt={`${route.name} Icon`} />
                {route.name}
              </SidebarLink>
            </SidebarItem>
          ))}
        </SidebarList>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
