import React from 'react';
import { Link } from 'react-router';
import styled from 'styled-components';

const SidebarContainer = styled.aside`
  width: 200px;
  background-color: #343a40;
  color: #fff;
  height: 100vh;
  padding: 20px;
  box-sizing: border-box;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
`;

const SidebarList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SidebarItem = styled.li`
  margin-bottom: 10px;
`;

const SidebarLink = styled(Link)`
  color: #fff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Sidebar: React.FC = () => {
  return (
    <SidebarContainer>
      <SidebarList>
        <SidebarItem>
          <SidebarLink to="/">Dashboard</SidebarLink>
        </SidebarItem>
        <SidebarItem>
          <SidebarLink to="/settings">Settings</SidebarLink>
        </SidebarItem>
      </SidebarList>
    </SidebarContainer>
  );
};

export default Sidebar;
