import React, { useContext, useState } from "react";
import { shopContext } from "../../context/ShopContext";
import { Button } from "react-daisyui";

export default function ProductDisplay(props) {
    const {product} = props;
    const {addCartItem} = useContext(shopContext)
    const [selectedSize, setSelectedSize] = useState('null')
    const sizes = ["S", "M", "L", "XL", "XXL"]

    const selectSizeHandler = (size)=>{
        setSelectedSize(size)
    }

    return (
        <div className="">
            <div className="text-center">
                <div className="">
                    <div className=" flex gap-2 justify-center">
                        <img className="border-gray-700 border-2 h-[60px] p-2 md:h-[90px]" src={product.image} alt="product" />
                        <img className="border-gray-700 border-2 h-[60px] p-2 md:h-[90px]" src={product.image} alt="product" />
                        <img className="border-gray-700 border-2 h-[60px] p-2 md:h-[90px]" src={product.image} alt="product" />
                        <img className="border-gray-700 border-2 h-[60px] p-2 md:h-[90px]" src={product.image} alt="product" />
                    </div>
                    <div className="flex place-content-center py-5">
                        <img className="border-gray-700 border-2 p-2 md:p-4 lg:p-6 h-100" src={product.image} alt="product" />
                    </div>
                </div>
                
                <p className="font-bold">{product.name}</p>
                <div className="flex gap-2 place-content-center cursor-pointer" onClick={((e)=> console.log(e.target.color))} >
                    <ion-icon name="star" color="green"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                </div> 
                <div className="flex gap-4 justify-center">
                    <p className="line-through  ">${product.oldPrice}</p>
                    <p className="items-center">${product.newPrice}</p>
                </div>
                
            </div>
            <div className="text-center">
                <h1 className="font-bold mt-3">Select Size</h1>
                <div className="flex gap-5 place-content-center cursor-pointer">
                    {sizes.map((size)=>{
                        return(
                            <button className={`btn btn-sm ${selectedSize === size ? "bg-blue-700 text-white" : "bg-white text-black"}`} onClick={()=>selectSizeHandler(size)} >{size}</button>
                        )
                    })}
                </div>
                <Button onClick={()=>addCartItem(product.id)} className="py-2 mt-2 text-center border-2 w-36 bg-red-600">ADD TO CART</Button>
            
            </div>
            
        </div>
    )
}