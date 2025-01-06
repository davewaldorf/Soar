import React from "react";
import styled from "styled-components";
import { Link } from "react-router";

interface SectionCardProps {
  title: string; 
  children: React.ReactNode;
  showSeeAll?: boolean; 
  onSeeAllClick?: () => void; 
  noBackground?: boolean;
}

const SectionWrapper = styled.div``;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primaryDark};
`;

const SeeAllButton = styled.a`
  background: none;
  border: none;
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primaryDark};
  cursor: pointer;


  &:hover {
    text-decoration: underline;
  }
`;

const CardWrapper = styled.div<{ noBackground: boolean }>`
  background: ${({ theme, noBackground }) =>
    noBackground ? "none" : theme.colors.background};
  border-radius: 15px;
`;

const SectionCard: React.FC<SectionCardProps> = ({
  title,
  children,
  showSeeAll,
  onSeeAllClick,
  noBackground = false,
}) => {
  return (
    <SectionWrapper>
      {/* Title and See All Button */}
      <Header>
        <Title>{title}</Title>
        {showSeeAll && <SeeAllButton onClick={onSeeAllClick}>See All</SeeAllButton>}
      </Header>

      {/* Card Content */}
      <CardWrapper noBackground={noBackground}>{children}</CardWrapper>
    </SectionWrapper>
  );
};

export default SectionCard;
