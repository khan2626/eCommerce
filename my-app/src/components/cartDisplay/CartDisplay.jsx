import React, { useContext } from "react";
import { shopContext } from "../../context/ShopContext";

export default function CartDisplay() {

    const {cartItems, cartTotalAmount, removeCartItem, allProducts} = useContext(shopContext)

    return (
        <div className="w-auto mx-auto">
            <div className="flex justify-between text-[13px]">
                <p className="px-1">Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Qty</p>
                <p>Sum</p>
                <p>Del</p>
            </div>
            <div className="">
            <hr />
            {allProducts.map((product)=>{
                if (cartItems[product.id] > 0) {
                    return (
                        <div>
                        <div className="flex justify-between">
                <img className="w-10 h-10" src={product.image} alt="" />
                <p className="w-12">{product.name}</p>
                <p>${product.newPrice} </p>
                <p>{cartItems[product.id]} </p>
                <p>{product.newPrice * cartItems[product.id]} </p>
                <ion-icon onClick={()=>{removeCartItem(product.id)}} name="close-circle-outline"></ion-icon>
                
            </div>
            <hr />
            </div>
            
                    )
                }
                return null;
            })}
            <div className="font-bold">
                <h1>Total Price</h1>
                <p>${cartTotalAmount()}</p>
            </div>
            <hr />
            <button className="border-2 bg-red-600">Submit</button>
            </div>
           
            
        </div>
    )
}