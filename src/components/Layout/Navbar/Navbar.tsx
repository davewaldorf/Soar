import React, { useState } from "react";
import {
  NavbarContainer,
  TopRow,
  SearchBar,
  IconButton,
  Title,
  SearchIcon,
  EmptyNode,
} from "./Navbar.styles";
import { icons } from "./icons";
import { routes } from "../../../routes/routes";
import useNavigate from "../../../hooks/useNavigate";
import Avatar from "../../Avatar/Avatar";

const Navbar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { goTo } = useNavigate();

  const currentRoute = routes.find(
    (route) => window.location.pathname === route.path
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    console.log("Search Query:", e.target.value);
  };

  return (
    <NavbarContainer>
      {/* Top Row */}
      <TopRow>
        <EmptyNode></EmptyNode>
        <Title>{currentRoute ? currentRoute.name : ""}</Title>
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <IconButton onClick={() => goTo("/settings")}>
            <img src={icons.settingsIcon} alt="Settings" />
          </IconButton>
          <IconButton onClick={() => goTo("/notifications")}>
            <img src={icons.notificationIcon} alt="Notifications" />
          </IconButton>
          <Avatar src={icons.userAvatar} alt="User Avatar" size={60} />
        </div>
      </TopRow>

      {/* Search Bar */}

      <SearchBar>
        <SearchIcon src={icons.searchIcon} alt="Search" />
        <input
          type="text"
          placeholder="Search for something"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </SearchBar>
    </NavbarContainer>
  );
};

export default Navbar;
