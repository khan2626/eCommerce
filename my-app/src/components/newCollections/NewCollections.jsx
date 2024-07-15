import React from "react";
import newCollections from "../Assets/newCollections";
import Items from "../Items/Items";

 export default function NewCollections() {
    return (
        <div className="mb-10">
            <div>
                <h1 className="text-2xl font-bold text-center">NEW COLLECTIONS</h1>
                <hr />
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
                {newCollections.map((item, i) => {
                    return <Items key={i} name={item.name} image={item.image} oldPrice={item.oldPrice} newPrice={item.newPrice} />
                })}
            </div>
       </div>
    )
 }

//  grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between h-[40px]