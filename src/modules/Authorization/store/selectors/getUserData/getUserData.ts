import { createSelector } from '@reduxjs/toolkit';
import { UserSchema } from '../../types/userSchema';
import { getUser } from '../getUser/getUser';

export const getUserData = createSelector(
    getUser,
    (user: UserSchema) => user.user,
);
