import React from "react";
import { Link } from "react-router-dom";

const Items = (props) => {
    return (
        <div className="items-center ">
            <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image}  alt="product" className=" w-[110px] h-[150px] justify-between object-cover" /></Link>
            <p className="">{props.name}</p>
            <div className="">
                <div className="old-price line-through">${props.oldPrice}</div>
                <div className="new-price">${props.newPrice}</div>
            </div> 
           
        </div> 
    )
}

export default Items;