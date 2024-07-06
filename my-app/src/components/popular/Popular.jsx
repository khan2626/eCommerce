import React from "react";
import womenPopular from '../Assets/womenPopular';
import Items from "../Items/Items";


export default function Shop() {
    return (
        <div>
            <h1 className="text-center font-bold text-2xl">POPULAR IN WOMEN</h1>
            <hr />
            <div className="flex items-center justify-between w-200px">
                {womenPopular.map((item, i) => {
                    return <Items key={i} name={item.name} image={item.image} oldPrice={item.oldPrice} newPrice={item.newPrice} />
                })}
            </div>
        </div>
    )
}