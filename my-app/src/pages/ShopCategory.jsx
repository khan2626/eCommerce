import React, { useContext } from "react";
import { shopContext } from "../context/ShopContext";
import Items from "../components/Items/Items";

export default function ShopCategory(props) {
    const { allProducts } = useContext(shopContext);
    return (
        <div className="">
            <div className="flex place-content-center ">
                <img src={props.banner} alt="banner" className="w-[650px] h-[210px] mb-1  " />
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
                {allProducts && allProducts.length > 0 ? 
                allProducts.map((item,i)=>{
                    if (props.category === item.category) {
                        return (
                            <Items key={i} name={item.name} image={item.image} oldPrice={item.oldPrice} newPrice={item.newPrice} />
                        );
                    }
                    else {return null;}
                })
            : <p>products unavailable</p>}
            </div>
            <div className="flex place-content-center">
                <button className="rounded-full border-2 w-32 bg-red-600 ">Explore More</button>
            </div>
        </div>
    )
}

