import React from "react";

import {
  Card,
  ContentWrapper,
  IconWrapper,
  Icon,
  Description,
  Amount,
} from "./TransactionCard.styles";

import { Transaction } from "../api/fakeApi";
import { icons } from "../icons";

const TransactionCard: React.FC<{ transaction: Transaction }> = ({
  transaction,
}) => {
  const getIcon = () => {
    switch (transaction.description) {
      case "Deposit from my Card":
        return { icon: icons.depositIcon, bgColor: "#FFF5D9" };
      case "Deposit PayPal":
        return { icon: icons.paypalIcon, bgColor: "#E7EDFF" };
      default:
        return { icon: icons.dollarCircleIcon, bgColor: "#DCFAF8" };
    }
  };

  const { icon, bgColor } = getIcon();

  return (
    <Card>
      {/* Left-aligned content */}
      <ContentWrapper>
        <IconWrapper bgColor={bgColor}>
          <Icon src={icon} alt={transaction.description} />
        </IconWrapper>
        <Description>
          <h4>{transaction.description}</h4>
          <span>{transaction.date}</span>
        </Description>
      </ContentWrapper>

      {/* Right-aligned amount */}
      <Amount type={transaction.type}>{transaction.amount}</Amount>
    </Card>
  );
};

export default TransactionCard;
