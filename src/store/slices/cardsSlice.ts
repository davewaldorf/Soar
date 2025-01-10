import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { CardType, fetchCards } from '../../features/cards/api/fakeApi';

interface CardsState {
  cards: CardType[];
  loading: boolean;
}

const initialState: CardsState = {
  cards: [],
  loading: false,
};

export const fetchCardsThunk = createAsyncThunk<CardType[]>(
  'cards/fetchCards',
  async () => {
    const response = await fetchCards();
    return response;
  }
);

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCardsThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCardsThunk.fulfilled, (state, action) => {
        state.cards = action.payload;
        state.loading = false;
      })
      .addCase(fetchCardsThunk.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default cardsSlice.reducer;
