import React, { useEffect, useState } from "react";
import SectionCard from "../components/SectionCard/SectionCard";
import CardsList from "../features/cards/CardsList";
import { CardType, fetchCards } from "../features/cards/api/fakeApi";

const AllCardsPage: React.FC = () => {
  const [cards, setCards] = useState<CardType[]>([]);

  useEffect(() => {
    fetchCards().then(setCards);
  }, []);

  return (
    <SectionCard title="All Cards" noBackground>
      <CardsList showAll cards={cards} />
    </SectionCard>
  );
};

export default AllCardsPage;
