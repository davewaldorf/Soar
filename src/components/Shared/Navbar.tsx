import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border-bottom: 1px solid #0056b3;
`;

const NavbarTitle = styled.h1`
  font-size: 20px;
  margin: 0;
`;

const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <NavbarTitle>Financial Dashboard</NavbarTitle>
    </NavbarContainer>
  );
};

export default Navbar;
