import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Transaction, fetchRecentTransactions } from '../../features/recentTransactions/api/fakeApi';
import { toast } from 'react-toastify';

interface TransactionsState {
  transactions: Transaction[];
  loading: boolean;
  error: string | null;
}

const initialTransactionsState: TransactionsState = {
  transactions: [],
  loading: false,
  error: null,
};

export const fetchTransactionsThunk = createAsyncThunk<Transaction[]>(
  'transactions/fetchRecentTransactions',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchRecentTransactions();
      return response;
    } catch {
      return rejectWithValue(toast.error('Failed to fetch transactions'));
    }
  }
);


const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: initialTransactionsState,
  reducers: {
    setTransactions(state, action: PayloadAction<Transaction[]>) {
      state.transactions = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTransactionsThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTransactionsThunk.fulfilled, (state, action) => {
        state.transactions = action.payload;
        state.loading = false;
      })
      .addCase(fetchTransactionsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setTransactions } = transactionsSlice.actions;
export default transactionsSlice.reducer;
