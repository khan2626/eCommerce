import React from "react";
import { Icon } from '@iconify/react';
import hero from '../Assets/suheyl-burak-p7I07kuPSyU-unsplash.jpg'

export default function Hero() {
    return (
        <>
        <div className="flex justify-between md:justify-center md:gap-8 lg:gap-11">
            <div className="">
            <h2 className="text-lg md:text-xl font-semi-bold mb-2">NEW ARRIVALS ONLY</h2>
 
                <div className="">
                    <div className="flex">
                    <p className="text-2xl md:text-4xl lg:text-6xl font-bold py-3">new</p>
                    <Icon icon="noto:waving-hand" width={60} />
                    </div>
                    <p className="text-3xl md:text-4xl lg:text-6xl font-bold  ">collections</p>
                    <p className="text-3xl md:text-4xl lg:text-6xl font-bold py-3 ">for everyone</p>
                    <button className="bg-red-600 justify-center text-white flex gap-2 rounded-xl border-2 px-1 sm:py-1 md:py-2 m:p-2 w-[90px] sm:w-48 md:w-48 h-8 md:h-12 text-[8px] sm:text-sm md:text-sm lg:text-base">Latest Collection<Icon icon="jam:arrow-right" width="25px" style={{color: "white"}} /></button>
                
                </div>
            </div>
            <div className="">
                    <img src={hero} alt="hero-image" className="w-[150px] sm:w-[200px] h-45 rounded-lg " />
                </div>
        </div>
        </>
    )
}