import React, { createContext, useState, useEffect } from "react";
// import allProducts from '../components/Assets/allProducts';
import axios from 'axios'

export const shopContext = createContext([])





const getDefaultCart = () => {
    let cart = {};

    for (let i = 0; i < 300+1; i++) {
        cart[i] = 0;
    }
    return cart;
}


const ShopContextProvider = (props) => {

    const [cartItems, setCartItems] = useState(getDefaultCart())
    const [allProducts, setAllProducts] = useState([])
    useEffect(()=>{
        getAllProducts()
        getCartData()
    },[])

    const getAllProducts = async ()=>{
        try{
            const resp = await axios.get('http://localhost:5000/products',{
                headers: {
                    Accept: 'application/json',
                    "Content-Type": 'application/json'
                }
            })
            if (resp.data.success) {
                setAllProducts(resp.data.products)
                
                
            }
        } catch(error) {
            console.log(error)
        }
    }
    

    const getCartData = async ()=>{
        try{
            if(localStorage.getItem('token')){
                const resp = await axios.get('http://localhost:5000/cart/getCartData',{
                    headers: {
                        Accept: 'application/json',
                        "Content-Type": 'application/json',
                        'token': `${localStorage.getItem('token')}`
                    }
                })
                setCartItems(resp.data.userCartData)
            }
           
        } catch(error) {
            console.log(error)
        }
    }
    
    const addCartItem = (itemId)=> {
        setCartItems((prev)=>({...prev, [itemId]:prev[itemId]+1}))
        if (localStorage.getItem('token')) {
            const addCartItemToServer = async () => {
                await axios.post('http://localhost:5000/cart/addCartData',{'itemId': itemId}, {
                    headers: {
                        Accept: 'application/json',
                        "Content-Type": 'application/json',
                        'token': `${localStorage.getItem('token')}`
                    }
                    
                })
            }
            addCartItemToServer()
        }
        
    }


    const removeCartItem = (itemId)=> {
        setCartItems((prev)=>({...prev, [itemId]:prev[itemId]-1}))

        if (localStorage.getItem('token')) {
            const removeCartItemFromServer = async () => {
                await axios.post('http://localhost:5000/cart/removeCartData',{'itemId': itemId}, {
                    headers: {
                        Accept: 'application/json',
                        "Content-Type": 'application/json',
                        'token': `${localStorage.getItem('token')}`
                    }
                    
                })
            }
            removeCartItemFromServer()
        }
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
