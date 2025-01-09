import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WeeklyActivity, ExpenseStat } from '../types/chartsTypes';

interface ChartsState {
  weeklyActivity: WeeklyActivity[];
  expenseStats: ExpenseStat[];
  balanceHistory: number[];
}

const initialChartsState: ChartsState = {
  weeklyActivity: [],
  expenseStats: [],
  balanceHistory: [],
};

const chartsSlice = createSlice({
  name: 'charts',
  initialState: initialChartsState,
  reducers: {
    setWeeklyActivity(state, action: PayloadAction<WeeklyActivity[]>) {
      state.weeklyActivity = action.payload;
    },
    setExpenseStats(state, action: PayloadAction<ExpenseStat[]>) {
      state.expenseStats = action.payload;
    },
    setBalanceHistory(state, action: PayloadAction<number[]>) {
      state.balanceHistory = action.payload;
    },
  },
});

export const { setWeeklyActivity, setExpenseStats, setBalanceHistory } = chartsSlice.actions;
export default chartsSlice.reducer;
