import React, { useEffect, useState } from "react";

import SectionCard from "../components/SectionCard/SectionCard";
import CardsList from "../features/cards/CardsList";
import { CardType } from "../features/cards/api/fakeApi";
import { fetchCards } from "../features/cards/api/fakeApi";
import {
  DashboardWrapper,
  CardsSection,
  RecentActivitySection,
  ActivitySection,
  StatsSection,
  TransferSection,
  HistorySection,
} from "../features/dashboard/Dashboard.styles";

import RecentTransactions from "../features/recentTransactions/RecentTransactions";

import useNavigate from "../hooks/useNavigate";
import WeeklyActivity from "../features/weeklyActivity/WeeklyActivity";

const Dashboard: React.FC = () => {
  const [cards, setCards] = useState<CardType[]>([]);
  const { goTo } = useNavigate();

  useEffect(() => {
    fetchCards().then(setCards);
  }, []);

  const handleSeeAllCards = () => {
    goTo("/cards");
  };

  return (
    <DashboardWrapper>
      <CardsSection>
        <SectionCard
          title="My Cards"
          showSeeAll
          onSeeAllClick={handleSeeAllCards}
          noBackground
        >
          <CardsList showAll={false} cards={cards} />
        </SectionCard>
      </CardsSection>

      <RecentActivitySection>
        <SectionCard title="Recent Activity">
          <RecentTransactions />
        </SectionCard>
      </RecentActivitySection>

      <ActivitySection>
        <SectionCard title="Weekly Activity">
          <WeeklyActivity />
        </SectionCard>
      </ActivitySection>

      <StatsSection>
        <SectionCard title="Stats">Stats</SectionCard>
      </StatsSection>

      <TransferSection>
        <SectionCard title="Transfer">Transfer</SectionCard>
      </TransferSection>

      <HistorySection>
        <SectionCard title="History">History</SectionCard>
      </HistorySection>
    </DashboardWrapper>
  );
};

export default Dashboard;
