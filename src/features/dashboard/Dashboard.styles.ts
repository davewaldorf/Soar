import styled from "styled-components";

export const DashboardWrapper = styled.div`
  display: grid;
  grid-template-areas:
    "cards cards recent"
    "activity stats stats"
    "transfer transfer history";
  gap: 20px;
  padding: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-areas:
      "cards"
      "recent"
      "activity"
      "stats"
      "transfer"
      "history";
  }
`;

export const CardsSection = styled.div`
  grid-area: cards;
`;

export const RecentActivitySection = styled.div`
  grid-area: recent;
`;

export const ActivitySection = styled.div`
  grid-area: activity;
`;

export const StatsSection = styled.div`
  grid-area: stats;
`;

export const TransferSection = styled.div`
  grid-area: transfer;
`;

export const HistorySection = styled.div`
  grid-area: history;
`;

