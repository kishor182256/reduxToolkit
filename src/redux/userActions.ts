import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Login, User } from './userTypes';

export const registerUser = createAsyncThunk(
  'user/registerUser',
  async (user: User) => {
    try{
        const response = await axios.post('https://reqres.in/api/register', user);
       return response.data;
    }catch(err){
       return 'Only defined users succeed registration';
    }
  }
);


export const login = createAsyncThunk(
    'auth/login',
    async (auth: Login) => {
      try{
          const response = await axios.post('https://reqres.in/api/login', auth);
         return response.data;
      }catch(err){
         return 'Only defined users succeed registration';
      }
    }
  );