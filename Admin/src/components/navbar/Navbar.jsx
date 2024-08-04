import React from "react";
import logo from '../../assets/ubestLogo.jpeg';

export default function Navbar() {

    return (
        <div className="px-3 flex text-sm sm:text-lg justify-between bg-white w-auto shadow-md ">
            
            <div className="flex">
                <div>
                    <p className="font-bold">UBest</p>
                </div>
                <div>
                    <img src={logo} alt="logo" className="w-[70px] md:w-[100px]" />
                    <p className="text-red-400 text-xs text-center">Admin Panel</p>
                </div>
            </div>
            <div className="">
            <ion-icon name="person-circle-outline" style={{ fontSize: '40px' }} ></ion-icon>
            </div>
        </div>
    )
}
