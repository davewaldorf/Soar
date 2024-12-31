import React, { useState } from "react";
import { NavbarContainer, Container, SearchBar, IconButton, Title } from "./Navbar.styles";

import { icons } from "./icons";
import { routes } from "../../../routes/routes";
import useNavigate from "../../../hooks/useNavigate"; 

import Avatar from "../../Avatar/Avatar";

const Navbar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { goTo } = useNavigate(); 

  const currentRoute = routes.find((route) => window.location.pathname === route.path);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    console.log('Search Query:', e.target.value);
  };

  return (
    <NavbarContainer>
      {/* Left Section */}
      <Container>
        {currentRoute && <Title>{currentRoute.name}</Title>}
      </Container>

      {/* Right Section */}
      <Container>
        <SearchBar>
          <IconButton>
            <img src={icons.searchIcon} alt="Search" />
          </IconButton>
          <input
            type="text"
            placeholder="Search for something"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </SearchBar>

        {/* Settings Icon */}
        <IconButton onClick={() => goTo('/settings')}>
          <img src={icons.settingsIcon} alt="Settings" />
        </IconButton>

        {/* Notification Icon */}
        <IconButton onClick={() => goTo('/notifications')}>
          <img src={icons.notificationIcon} alt="Notifications" />
        </IconButton>

        {/* Avatar */}
        <Avatar src={icons.userAvatar} alt="User Avatar" size={50} />
      </Container>
    </NavbarContainer>
  );
};

export default Navbar;
