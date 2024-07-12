import React from "react";
import newCollections from "../Assets/newCollections";
import Items from "../Items/Items";

 export default function NewCollections() {
    return (
        <div className="">
            <div>
                <h1 className="text-2xl font-bold text-center">NEW COLLECTIONS</h1>
                <hr />
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-1 justify-between h-[40px] ">
                {newCollections.map((item, i) => {
                    return <Items key={i} name={item.name} image={item.image} oldPrice={item.oldPrice} newPrice={item.newPrice} />
                })}
            </div>
       </div>
    )
 }