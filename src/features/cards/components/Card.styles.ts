import styled from "styled-components";

const CardWrapper = styled.div<{ isSelected: boolean; variant: "dashboard" | "allCards" }>`
  font-family: ${({ theme }) => theme.fonts.lato};
  background: ${({ isSelected, theme }) =>
    isSelected
      ? "linear-gradient(107.38deg, #5b5a6f 2.61%, #000000 101.2%)"
      : theme.colors.white};
  color: ${({ isSelected, theme }) =>
    isSelected ? theme.colors.white : theme.colors.black};
  border-radius: ${({ theme }) => theme.borderRadius.extraLarge};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  width: ${({ variant }) => (variant === "dashboard" ? "100%" : "400px")};
  min-height: ${({ variant }) => (variant === "dashboard" ? "240px" : "auto")};
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.large};
`;

const ChipIcon = styled.img<{ isSelected: boolean }>`
  width: 40px;
  height: auto;
  filter: ${({ isSelected }) => (isSelected ? "none" : "invert(1)")};
`;

const BalanceContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const BalanceLabel = styled.span`
  font-weight: ${({ theme }) => theme.typography.smallText.weight};
  font-size: ${({ theme }) => theme.typography.smallText.size};
  line-height: ${({ theme }) => theme.typography.smallText.lineHeight};
`;

const CardBalance = styled.h4`
  font-size: ${({ theme }) => theme.typography.h2.size};
  font-weight: ${({ theme }) => theme.typography.h2.weight};
  line-height: ${({ theme }) => theme.typography.h2.lineHeight};
`;

const CardMiddle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: ${({ theme }) => theme.spacing.large};
  gap: ${({ theme }) => theme.spacing.small};
  flex-grow: 1;
`;

const CardDetailCol = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardDetailLabel = styled.span`
  font-size: ${({ theme }) => theme.typography.smallText.size};
  font-weight: ${({ theme }) => theme.typography.smallText.weight};
  opacity: 0.7;
  text-transform: uppercase;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const CardDetailValue = styled.span`
  font-size: ${({ theme }) => theme.typography.b2.size};
  font-weight: ${({ theme }) => theme.typography.b2.weight};
  line-height: ${({ theme }) => theme.typography.b2.lineHeight};
`;

const CardFooter = styled.div`
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.15) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.large};
  flex-shrink: 0; 
`;

const CardNumber = styled.p`
  font-size: ${({ theme }) => theme.typography.b1.size};
  letter-spacing: 2px;
  margin: 0;
`;

const MastercardLogo = styled.img<{ isSelected: boolean }>`
  width: 44px;
  height: auto;
  filter: ${({ isSelected }) => (isSelected ? "none" : "invert(1)")};
`;

export {
  CardWrapper,
  CardHeader,
  ChipIcon,
  BalanceContainer,
  BalanceLabel,
  CardBalance,
  CardMiddle,
  CardDetailCol,
  CardDetailLabel,
  CardDetailValue,
  CardFooter,
  CardNumber,
  MastercardLogo,
};
