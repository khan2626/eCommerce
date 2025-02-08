import React from "react";
import { Link } from "react-router-dom";

const Items = (props) => {
    return (
        <div className="flex flex-col items-center justify-between border gap-2 lg:gap-4 border-gray-700 m-2 md:m-4 py-2 md:py-4 hover:opacity-50 transition duration-300 ease-in-out">
            <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image}  alt="product" className="w-[60px] h-[80px] md:w-[110px] md:h-[150px] justify-between object-contain" /></Link>
            <p className="">{props.name}</p>
            <div className="flex gap-3 md:gap-5 lg:gap-7">
                <div className="old-price line-through">${props.oldPrice}</div>
                <div className="new-price">${props.newPrice}</div>
            </div> 
           
        </div> 
    )
}

export default Items;