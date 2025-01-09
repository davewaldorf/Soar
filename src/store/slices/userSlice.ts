import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserProfile } from '../types/userTypes';

interface UserState {
  profile: UserProfile;
}

const initialState: UserState = {
  profile: {
    name: '',
    username: '',
    email: '',
    dateOfBirth: '',
    presentAddress: '',
    permanentAddress: '',
    city: '',
    postalCode: '',
    country: '',
    profilePicture: '',
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUserProfile(state, action: PayloadAction<Partial<UserProfile>>) {
      state.profile = { ...state.profile, ...action.payload };
    },
  },
});

export const { updateUserProfile } = userSlice.actions;
export default userSlice.reducer;
