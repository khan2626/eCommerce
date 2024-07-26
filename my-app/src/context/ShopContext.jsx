import React, { createContext, useState } from "react";
import allProducts from '../components/Assets/allProducts';

export const shopContext = createContext([])

const getDefaultCart = () => {
    let cart = {};

    for (let i = 0; i < allProducts.length+1; i++) {
        cart[i] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {

    const [cartItems, setCartItems] = useState(getDefaultCart())
    
    
    const addCartItem = (itemId)=> {
        setCartItems((prev)=>({...prev, [itemId]:prev[itemId]+1}))
        // console.log(cartItems)
    }
    const removeCartItem = (itemId)=> {
        setCartItems((prev)=>({...prev, [itemId]:prev[itemId]-1}))
    }

    const cartTotalAmount = ()=> {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = allProducts.find((product)=>product.id === Number(item))
                totalAmount += itemInfo.newPrice * cartItems[item];
                
            } 
        
        }
        return totalAmount;
    }

    const cartQty = ()=> {
        let totalItem = 0;
        for (const item in cartItems) {
            if(cartItems[item] > 0) {
                totalItem += cartItems[item]; 
            }
        }
        return totalItem;
    }

    const contextValue = { cartQty, cartTotalAmount, allProducts, cartItems, addCartItem, removeCartItem }

    return (
        <shopContext.Provider value={contextValue}>
            {props.children}
        </shopContext.Provider>
    )
}

export default ShopContextProvider;
