import { createSelector } from '@reduxjs/toolkit';
import { UserSchema } from '../../types/userSchema';
import { getUser } from '../getUser/getUser';

export const getError = createSelector(
    getUser,
    (user: UserSchema) => user.error,
);
