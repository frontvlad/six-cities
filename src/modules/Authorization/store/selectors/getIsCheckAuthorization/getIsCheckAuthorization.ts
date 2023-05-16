import { createSelector } from '@reduxjs/toolkit';
import { UserSchema } from '../../types/userSchema';
import { getUser } from '../getUser/getUser';

const getIsCheckAuthorization = createSelector(
    getUser,
    (user: UserSchema) => user.isCheckAuthorization,
);

export { getIsCheckAuthorization };
