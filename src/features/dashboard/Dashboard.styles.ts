import styled from "styled-components";

export const DashboardWrapper = styled.div`
  display: grid;
  grid-template-areas:
    "cards cards recent"
    "activity activity stats"
    "transfer transfer history";
  grid-template-columns: 2fr 1fr 1fr;
  gap: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-areas:
      "cards"
      "recent"
      "activity"
      "stats"
      "transfer"
      "history";
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }
`;

export const CardsSection = styled.div`
  grid-area: cards;
`;

export const RecentActivitySection = styled.div`
  grid-area: recent;
`;

export const StatsSection = styled.div`
  grid-area: stats;
`;

export const ActivitySection = styled.div`
  grid-area: activity;
`;

export const TransferSection = styled.div`
  grid-area: transfer;
`;

export const HistorySection = styled.div`
  grid-area: history;
`;
