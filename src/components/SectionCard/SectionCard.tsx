import React from "react";
import styled from "styled-components";

interface SectionCardProps {
  title: string; 
  children: React.ReactNode;
  showSeeAll?: boolean; 
  onSeeAllClick?: () => void; 
  noBackground?: boolean;
}

const SectionWrapper = styled.div`
  margin-bottom: 40px; /* Spacing between sections */
`;

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

const SeeAllButton = styled.button`
  background: none;
  border: none;
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const CardWrapper = styled.div<{ noBackground: boolean }>`
  background: ${({ theme, noBackground }) =>
    noBackground ? "none" : theme.colors.background};
  border-radius: 15px;
  box-shadow: ${({ noBackground }) =>
    noBackground ? "none" : "0 4px 10px rgba(0, 0, 0, 0.05)"};
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
