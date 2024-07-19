import React, { createContext } from "react";
import allProducts from '../components/Assets/allProducts';

export const shopContext = createContext([])

const ShopContextProvider = (props) => {
    const contextValue = { allProducts }

    return (
        <shopContext.Provider value={contextValue}>
            {props.children}
        </shopContext.Provider>
    )
}

export default ShopContextProvider;
