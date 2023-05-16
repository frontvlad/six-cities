import { createSlice } from '@reduxjs/toolkit';
import { fetchCheckAuth } from '../api/fetchCheckAuth/fetchCheckAuth';
import { fetchLogin } from '../api/fetchLogin/fetchLogin';
import { AuthorizationStatus, CheckAuthorization } from '../const/const';

import { UserSchema } from '../types/userSchema';

const initialState: UserSchema = {
    isCheckAuthorization: CheckAuthorization.NO_CHECK,
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    user: {
        avatarUrl: '',
        email: '',
        id: null,
        isPro: null,
        name: '',
    },
    isLoading: false,
    error: null,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCheckAuth.fulfilled, (state, action) => {
            state.isCheckAuthorization = CheckAuthorization.CHECK;
            state.authorizationStatus = AuthorizationStatus.AUTH;
            state.user = action.payload;
            state.error = null;
            state.isLoading = false;
        });
        builder.addCase(fetchCheckAuth.pending, (state) => {
            state.error = undefined;
            state.isLoading = true;
        });
        builder.addCase(fetchCheckAuth.rejected, (state, action) => {
            if (action.payload === '401') {
                state.isCheckAuthorization = CheckAuthorization.CHECK;
                state.authorizationStatus = AuthorizationStatus.NO_AUTH;
                state.isLoading = false;
            } else {
                state.error = action.payload;
                state.isLoading = false;
            }
        });
        builder.addCase(fetchLogin.fulfilled, (state, action) => {
            state.authorizationStatus = AuthorizationStatus.AUTH;
            state.user = action.payload;
        });
    },
});

export const { reducer: userReducer } = userSlice;
