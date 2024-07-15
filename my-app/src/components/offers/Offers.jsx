import React from "react";
import shoe from '../Assets/m_Oxford.jpg';


export default function Offers() {
    return (
        <div className="flex py-5 gap-3 sm:gap-11 rounded-lg justify-center bg-gradient-to-t  ">
            <div className="offers-left">
                <h1 className="font-bold text-3xl sm:text-4xl py-4">Exclusive</h1>
                <h1 className="font-bold text-3xl sm:text-4xl py-3">Offers For You</h1>
                <h1 className="py-3">ONLY ON BEST SELLERS PRODUCTS</h1>
                <button className="rounded-xl bg-red-600 text-white w-[150px] h-8">Check Now</button>        
            </div>
            <div className="">
                <img src={shoe} alt="shoe" className="w-[250px]" />
            </div>
        </div>
    )
}