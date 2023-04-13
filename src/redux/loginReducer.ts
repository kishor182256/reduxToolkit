import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState } from './userTypes';
import { login } from './userActions';

const initialState: AuthState = {
    token: null,
    isLoading: false,
    error: null,
    auth:null
  };






export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(login.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      });
      builder.addCase(login.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.token = action.payload;
      });
      builder.addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message ?? 'An error occurred';
      });
    },
  });

export default authSlice.reducer;
