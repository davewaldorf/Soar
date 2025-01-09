import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Transaction } from '../types/transactionsTypes';

interface TransactionsState {
  transactions: Transaction[];
}

const initialTransactionsState: TransactionsState = {
  transactions: [],
};

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: initialTransactionsState,
  reducers: {
    setTransactions(state, action: PayloadAction<Transaction[]>) {
      state.transactions = action.payload;
    },
  },
});

export const { setTransactions } = transactionsSlice.actions;
export default transactionsSlice.reducer;