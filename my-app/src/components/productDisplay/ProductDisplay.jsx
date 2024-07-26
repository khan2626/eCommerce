import React, { useContext } from "react";
import { shopContext } from "../../context/ShopContext";


export default function ProductDisplay(props) {
    const {product} = props;
    const {addCartItem} = useContext(shopContext)

    return (
        <div className="">
            <div className="text-center">
                <div className="flex place-content-center">
                <img src={product.image} alt="product" />
                </div>
                <p className="font-bold">{product.name}</p>
                <div className="flex gap-2 place-content-center cursor-pointer" onClick={((e)=> console.log(e.target.color))} >
                <ion-icon name="star" color="white"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                </div> 
                <p className="line-through ">Old Price = ${product.oldPrice}</p>
                <p>New Price = ${product.newPrice}</p>
                
            </div>
            <div className="text-center">
                <h1 className="font-bold mt-3">Select Size</h1>
                <div className="flex gap-5 place-content-center cursor-pointer">
                    <div className="bg-white border-r-white border-2 w-6 cursor-pointer">S</div>
                    <div className="bg-white border-r-white border-2 w-6 cursor-pointer">M</div>
                    <div className="bg-white border-r-white border-2 w-6 cursor-pointer">L</div>
                    <div className="bg-white border-r-white border-2 w-6 cursor-pointer">XL</div>
                    <div className="bg-white border-r-white border-2 w-8 cursor-pointer">XXL</div>
                </div>
                <button onClick={()=>addCartItem(product.id)} className="py-2 mt-2 text-center border-2 w-36 bg-red-600">ADD TO CART</button>
            </div>
            
        </div>
    )
}