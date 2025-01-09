import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slices/userSlice';
import cardsSlice from './slices/cardsSlice';
import transactionsSlice from './slices/transactionsSlice';
import chartsSlice from './slices/chartsSlice';

const store = configureStore({
  reducer: {
    user: userSlice,
    cards: cardsSlice,
    transactions: transactionsSlice,
    charts: chartsSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
