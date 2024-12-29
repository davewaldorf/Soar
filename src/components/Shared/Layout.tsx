import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import styled from 'styled-components';

interface LayoutProps {
  children: React.ReactNode;
}

const LayoutContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const ContentArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const PageContent = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #f5f5f5;
`;

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutContainer>
      <Sidebar />
      <ContentArea>
        <Navbar />
        <PageContent>{children}</PageContent>
      </ContentArea>
    </LayoutContainer>
  );
};

export default Layout;
