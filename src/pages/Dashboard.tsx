import React from "react";

import SectionCard from "../components/SectionCard/SectionCard";
import CardsList from "../features/cards/CardsList";
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

import WeeklyActivity from "../features/weeklyActivity/WeeklyActivity";
import ExpenseStatistics from "../features/expenseStats/ExpenseStatistics";
import QuickTransfer from "../features/quickTransfer/QuickTransfer";
import BalanceHistory from "../features/balanceHistory/BalanceHistory";
import useNavigate from "../hooks/useNavigate";

const Dashboard: React.FC = () => {
  const { goTo } = useNavigate();

  const handleSeeAllClick = () => {
    goTo("/cards");
  };

  return (
    <DashboardWrapper>
      <CardsSection>
        <SectionCard
          title="My Cards"
          showSeeAll
          noBackground
          onSeeAllClick={handleSeeAllClick}
        >
          <CardsList showAll={false} />
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
        <SectionCard title="Expense Statistics">
          <ExpenseStatistics />
        </SectionCard>
      </StatsSection>

      <TransferSection>
        <SectionCard title="Quick Transfer">
          <QuickTransfer />
        </SectionCard>
      </TransferSection>

      <HistorySection>
        <SectionCard title="Balance History">
          <BalanceHistory />
        </SectionCard>
      </HistorySection>
    </DashboardWrapper>
  );
};

export default Dashboard;
