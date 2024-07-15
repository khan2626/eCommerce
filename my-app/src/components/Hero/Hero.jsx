import React from "react";
import { Icon } from '@iconify/react';
import hero from '../Assets/suheyl-burak-p7I07kuPSyU-unsplash.jpg'

export default function Hero() {
    return (
        <>
        <div className="flex gap-7 sm:gap-20 justify-center ">
            <div className="">
            <h2 className="text-xs md:text-xl font-semi-Sbold mb-2">NEW ARRIVALS ONLY</h2>
 
                <div className="">
                    <div className="flex">
                    <p className="text-sm sm:text-3xl md:text-4xl font-bold py-3">new</p>
                    <Icon icon="noto:waving-hand" width={50} />
                    </div>
                    <p className="text-sm sm:text-3xl md:text-4xl font-bold  ">collections</p>
                    <p className="text-sm sm:text-3xl md:text-4xl lg:text-4xl font-bold py-3 ">for everyone</p>
                    <button className="bg-red-600 justify-center text-white flex gap-2 rounded-xl border-2 px-1 sm:py-1 md:py-2 m:p-2 w-[90px] sm:w-48 md:w-48 h-8 md:h-12 text-[8px] sm:text-sm md:text-sm lg:text-base">Latest Collection<Icon icon="jam:arrow-right" width="25px" style={{color: "white"}} /></button>
                
                </div>
            </div>
            <div className="">
                    <img src={hero} alt="hero-image" className="w-[100px] sm:w-[200px] h-45 rounded-lg " />
                </div>
        </div>
        </>
    )
}