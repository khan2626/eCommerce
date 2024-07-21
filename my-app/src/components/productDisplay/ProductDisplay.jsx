import React from "react";


export default function ProductDisplay(props) {
    const {product} = props;
    return (
        <div className="">
            <div className="text-center">
                <div className="flex place-content-center">
                <img src={product.image} alt="product" />
                </div>
                <p>{product.name}</p>
                <p className="line-through ">Old Price = ${product.oldPrice}</p>
                <p>New Price = ${product.newPrice}</p>
                <button className="py-2 mt-2 text-center border-2 w-36 bg-red-600">Add to cart</button>
            </div>
            
        </div>
    )
}