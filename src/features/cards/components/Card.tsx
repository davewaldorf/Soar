import React from "react";
import {
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
} from "./Card.styles";
import chipIcon from "../icons/chip.svg";
import mastercardLogo from "../icons/mastercard.svg";

import { CardType } from "../api/fakeApi";

export interface CardProps {
  card: CardType;
  isSelected: boolean;
  onClick: () => void;
  variant?: "dashboard" | "allCards";
}

const Card: React.FC<CardProps> = ({ card, isSelected, onClick, variant = "dashboard" }) => {
  return (
    <CardWrapper isSelected={isSelected} onClick={onClick} variant={variant}>
      <CardHeader>
        <BalanceContainer>
          <BalanceLabel>Balance</BalanceLabel>
          <CardBalance>{card.balance}</CardBalance>
        </BalanceContainer>
        <ChipIcon isSelected={isSelected} src={chipIcon} alt="Chip Icon" />
      </CardHeader>
      <CardMiddle>
        <CardDetailCol>
          <CardDetailLabel>Card Holder</CardDetailLabel>
          <CardDetailValue>{card.cardHolder}</CardDetailValue>
        </CardDetailCol>
        <CardDetailCol>
          <CardDetailLabel>Valid Thru</CardDetailLabel>
          <CardDetailValue>{card.validThru}</CardDetailValue>
        </CardDetailCol>
      </CardMiddle>
      <CardFooter>
        <CardNumber>{card.cardNumber}</CardNumber>
        <MastercardLogo
          isSelected={isSelected}
          src={mastercardLogo}
          alt="Mastercard Logo"
        />
      </CardFooter>
    </CardWrapper>
  );
};

export default Card;
