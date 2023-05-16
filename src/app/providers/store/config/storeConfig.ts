import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { userReducer } from 'modules/Authorization/store/slice/userSlice';
import { StateSchema } from '../type/StateSchema';

const createReduxStore = (initialState?: StateSchema) => {
    const rootReducers: ReducersMapObject<StateSchema> = {
        user: userReducer,
    };

    return configureStore<StateSchema>({
        reducer: rootReducers,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
};

export { createReduxStore };
