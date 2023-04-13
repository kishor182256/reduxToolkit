import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState, UserState } from './userTypes';
import { registerUser } from './userActions';

let initialState: UserState = {
  loading: false,
  error: null,
  registeredUser: null,
};



const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state,action: PayloadAction<any>) => {
        state.loading = true;
        state.error =action.payload;
        state.registeredUser = null;
      })
      .addCase(registerUser.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.registeredUser = action.payload;
      })
      .addCase(registerUser.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});




export default userSlice.reducer;
