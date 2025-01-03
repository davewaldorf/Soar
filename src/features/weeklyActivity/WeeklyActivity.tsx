import React, { useEffect, useState } from "react";
import styled from "styled-components";
import WeeklyActivityChart from "./components/WeeklyActivityChart";
import { fetchWeeklyActivity, WeeklyActivityData } from "./api/fakeApi";

const WeeklyActivityWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 18px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.extraLarge};
  box-shadow: ${({ theme }) => theme.shadows.medium};
  padding: 20px;
`;

const WeeklyActivity: React.FC = () => {
  const [weeklyActivity, setWeeklyActivity] = useState<WeeklyActivityData[]>([]);

  useEffect(() => {
    fetchWeeklyActivity().then(setWeeklyActivity);
  }, []);

  return (
    <WeeklyActivityWrapper>
      <WeeklyActivityChart data={weeklyActivity} />
    </WeeklyActivityWrapper>
  );
};

export default WeeklyActivity;
