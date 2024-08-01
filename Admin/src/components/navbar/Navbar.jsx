import React from "react";
import logo from '../../assets/ubestLogo.jpeg';

export default function Navbar() {

    return (
        <div className="mx-3 flex text-sm sm:text-lg">
            <p className="font-bold">UBest</p>
            <div>
                <img src={logo} alt="logo" className="w-[70px]" />
                <p className="text-red-400 text-xs text-center">Admin Panel</p>
            </div>
            
        </div>
    )
}
///home/khan/eCommerce/Admin/src/assets/ubestLogo.jpeg