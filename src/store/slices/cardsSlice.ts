import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Card } from '../types/cardsTypes';

interface CardsState {
  cards: Card[];
}

const initialCardsState: CardsState = {
  cards: [],
};

const cardsSlice = createSlice({
  name: 'cards',
  initialState: initialCardsState,
  reducers: {
    setCards(state, action: PayloadAction<Card[]>) {
      state.cards = action.payload;
    },
  },
});

export const { setCards } = cardsSlice.actions;
export default cardsSlice.reducer;
