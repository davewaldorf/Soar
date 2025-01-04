import React, { useState } from "react";
import styled from "styled-components";
import Card from "./components/Card";
import { CardType } from "./api/fakeApi";

const CardsGrid = styled.div<{ showAll: boolean }>`
  display: flex;
  flex-wrap: ${({ showAll }) => (showAll ? "wrap" : "nowrap")};
  gap: 30px;
  overflow-x: ${({ showAll }) => (showAll ? "visible" : "auto")};
  overflow-y: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-wrap: wrap;
  }
`;

interface CardsListProps {
  showAll: boolean;
  cards: CardType[];
  onSeeAllClick?: () => void;
}

const CardsList: React.FC<CardsListProps> = ({ showAll, cards }) => {
  const [selectedCard, setSelectedCard] = useState<number | null>(1);

  const handleCardClick = (id: number) => {
    setSelectedCard(id);
  };

  return (
    <CardsGrid showAll={showAll}>
      {cards.slice(0, showAll ? cards.length : 2).map((card) => (
        <Card
          key={card.id}
          card={card}
          isSelected={card.id === selectedCard}
          onClick={() => handleCardClick(card.id)}
          variant={showAll ? "allCards" : "dashboard"} 
        />
      ))}
    </CardsGrid>
  );
};


export default CardsList;
