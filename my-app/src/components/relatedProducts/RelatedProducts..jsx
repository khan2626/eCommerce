import React from "react";
import newCollections from '../Assets/newCollections';
import Items from "../Items/Items";


export default function RelatedProducts() {
    return (
        <div >
            <h1 className="text-center text-lg sm:text-xl md:text-2xl font-bold py-3">Related Products</h1>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
            {newCollections.map((item,i)=>{
                return <Items key={i} name={item.name} image={item.image} oldPrice={item.oldPrice} newPrice={item.newPrice} id={item.id}/>
            })}
            </div>
        </div>
    )
}
