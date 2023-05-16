import { createAsyncThunk } from '@reduxjs/toolkit';
import { createAPI } from 'helpers/api/api';
import { UserData } from '../../types/userSchema';

const api = createAPI();

export interface ILogin {
    email: string,
    password: string
}

export const fetchLogin = createAsyncThunk<UserData, ILogin, {rejectValue: string }>(
    'users/fetchLogin',
    async ({ email, password }, { rejectWithValue }) => {
        try {
            const response = await api.post('/login', { email, password });
            return response.data as UserData;
        } catch (err) {
            return rejectWithValue(err);
        }
    },

);
