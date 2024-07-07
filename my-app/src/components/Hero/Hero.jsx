import React from "react";
import { Icon } from '@iconify/react';
import hero from '../Assets/suheyl-burak-p7I07kuPSyU-unsplash.jpg'

export default function Hero() {
    return (
        <>
        <div className="flex gap-20 justify-center ">
            <div className="">
            <h2 className="text-xl font-semi-Sbold mb-2">NEW ARRIVALS ONLY</h2>
 
                <div className="">
                    <div className="flex">
                    <p className="text-4xl font-bold ">new</p>
                    <Icon icon="noto:waving-hand" width={50} />
                    </div>
                    <p className="text-4xl font-bold  ">collections</p>
                    <p className="text-4xl font-bold  ">for everyone</p>
                    <button className=" flex rounded-lg border-2 p-2 w-48">Latest Collection<Icon icon="jam:arrow-right" width="25px" style={{color: "black"}} /></button>
                
                </div>
            </div>
            <div className="">
                    <img src={hero} alt="hero-image" className="w-[200px] h-45 rounded-lg " />
                </div>
        </div>
        </>
    )
}