import React, { createContext } from "react";
import allProducts from '../components/Assets/allProducts';

export const shopContext = createContext(null)

export default function shopContextProvider(props) {
    contextValue = {allProducts}

    return (
        <shopContext.Provider value={contextValue}>
            {props.children}
        </shopContext.Provider>
    )
}
