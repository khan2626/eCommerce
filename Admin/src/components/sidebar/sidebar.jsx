import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {

    return (
      
        <div className="flex-col bg-slate-400 h-100% w-[110px] place-items-center box-border container px-2">
            <Link to={'/addProduct'}>
            <div className="text-center my-3 cursor-pointer">
                <p>Add Product</p>
                <ion-icon name="bag-add-outline" style={{ fontSize: '60px' }}  ></ion-icon>
            </div>
            </Link>
            <Link to={'/listProduct'}>
            <div className="text-center mt-7 cursor-pointer">
                <p>List Products</p>
                <ion-icon name="list-outline" style={{ fontSize: '60px' }} ></ion-icon> 
            </div>  
            </Link>
               
        </div>

    )
}