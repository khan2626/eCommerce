import React from "react";

const Items = (props) => {
    return (
       
        <div className="items-center ">
            <img src={props.image}  alt="images" className=" w-[110px] h-[150px] justify-between object-cover" />
            <p className="">{props.name}</p>
            <div className="">
                <div className="old-price line-through">${props.oldPrice}</div>
                <div className="new-price">${props.newPrice}</div>
            </div> 
           
        </div> 
    )
}

export default Items;