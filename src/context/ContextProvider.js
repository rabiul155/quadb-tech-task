import React, { createContext, useState } from 'react';

export const ShowsContext = createContext()

const ContextProvider = ({ children }) => {

    const [show, setShow] = useState({})
    const props = { show, setShow }
    return (

        <ShowsContext.Provider value={props}>
            {children}
        </ShowsContext.Provider>
    );
};

export default ContextProvider;