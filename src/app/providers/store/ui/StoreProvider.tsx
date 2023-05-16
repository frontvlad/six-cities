import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from '../type/StateSchema';
import { createReduxStore } from '../config/storeConfig';

interface IStoreProviderProps {
    children?: ReactNode;
    initialState?: DeepPartial<StateSchema>;
}

const StoreProvider: React.FC<IStoreProviderProps> = ({ children, initialState }) => {
    const store = createReduxStore(initialState as StateSchema);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};

export { StoreProvider };
