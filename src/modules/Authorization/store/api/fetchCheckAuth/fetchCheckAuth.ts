import { createAsyncThunk } from '@reduxjs/toolkit';
import { createAPI } from 'helpers/api/api';
import { UserData } from '../../types/userSchema';

const api = createAPI();

export const fetchCheckAuth = createAsyncThunk<UserData, undefined, {rejectValue: string }>(
    'users/fetchCheckAuth',
    async (_, { rejectWithValue }) => {
        try {
            const response = await api.get('https://6.react.pages.academy/six-cities/login');
            return response.data as UserData;
        } catch (err) {
            const { response } = err;

            if (response.status === 401) {
                return rejectWithValue(String(response.status));
            }
            return rejectWithValue(err);
        }
    },

);
