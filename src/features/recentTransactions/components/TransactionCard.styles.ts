import styled from "styled-components";

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between; 
  border-radius: ${({ theme }) => theme.borderRadius.large};
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: ${({ theme }) => theme.spacing.medium};
`;

const IconWrapper = styled.div<{ bgColor: string }>`
  width: 55px;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ bgColor }) => bgColor};
  border-radius: 50%;
`;

const Icon = styled.img`
  width: 22px;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;

  h4 {
    font-size: ${({ theme }) => theme.typography.b1.size};
    font-weight: ${({ theme }) => theme.typography.b1.weight};
    color: ${({ theme }) => theme.colors.black};
    margin: 0;
  }

  span {
    font-size: ${({ theme }) => theme.typography.smallText.size};
    color: ${({ theme }) => theme.colors.grayDark};
  }
`;

const Amount = styled.span<{ type: "credit" | "debit" }>`
  font-size: ${({ theme }) => theme.typography.b1.size};
  color: ${({ type, theme }) =>
    type === "credit" ? theme.colors.tertiary : theme.colors.danger};
`;

export { Card, ContentWrapper, IconWrapper, Icon, Description, Amount };
