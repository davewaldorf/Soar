export interface WeeklyActivityData {
  day: string;
  deposit: number;
  withdraw: number;
}

const mockWeeklyActivityData: WeeklyActivityData[] = [
  { day: "Sat", deposit: 400, withdraw: 200 },
  { day: "Sun", deposit: 300, withdraw: 100 },
  { day: "Mon", deposit: 450, withdraw: 300 },
  { day: "Tue", deposit: 500, withdraw: 400 },
  { day: "Wed", deposit: 200, withdraw: 100 },
  { day: "Thu", deposit: 350, withdraw: 200 },
  { day: "Fri", deposit: 300, withdraw: 250 },
];

export const fetchWeeklyActivity = (): Promise<WeeklyActivityData[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockWeeklyActivityData), 200); 
  });
};
