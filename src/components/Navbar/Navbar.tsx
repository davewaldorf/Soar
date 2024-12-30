import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  padding: 10px;
  background-color:rgb(255, 255, 255);
  color: #fff;
  border-bottom: 1px solid #E6EFF5;
`;

const NavbarTitle = styled.h1`
  height: 40px;
  font-size: 20px;
  margin: 0;
`;

const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <NavbarTitle></NavbarTitle>
    </NavbarContainer>
  );
};

export default Navbar;
