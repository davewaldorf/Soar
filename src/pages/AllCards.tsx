import React from "react";
import SectionCard from "../components/SectionCard/SectionCard";
import CardsList from "../features/cards/CardsList";

const AllCardsPage: React.FC = () => {
  return (
    <SectionCard title="All Cards" noBackground>
      <CardsList showAll />
    </SectionCard>
  );
};

export default AllCardsPage;
