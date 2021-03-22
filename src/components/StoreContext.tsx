import React, {useContext} from 'react';
import {StoreContext} from "../store/store";

export const StoreProvider: React.FC = ({children}) => {
    const store = useContext(StoreContext);

    return (
        <StoreContext.Provider value={store}>
            {children}
        </StoreContext.Provider>
    );
};


