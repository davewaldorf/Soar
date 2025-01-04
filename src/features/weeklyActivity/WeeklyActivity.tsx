import React, { useEffect, useState } from "react";
import styled from "styled-components";
import WeeklyActivityChart from "./components/WeeklyActivityChart";
import { fetchWeeklyActivity, WeeklyActivityData } from "./api/fakeApi";

const WeeklyActivityWrapper = styled.div` 
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
