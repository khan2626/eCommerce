import React from "react";
import ubestLogo from '../Assets/ubestLogo.jpeg'
import { Icon } from "@iconify/react/dist/iconify.js";

export default function Footers() {
    return (
        <footer>
            
        <div className="py-4">
        <hr />
            <div className="flex items-center place-content-center">
                <h1 className="font-bold font-poppins">UBest</h1>
                <img src={ubestLogo} alt="logo" className="w-[75px] h-[50px] sm:w-[110px] sm:h[70]" />
            </div>
            <ul className="cursor-pointer flex gap-2 sm:gap-3 md:gap-5 lg:gap-8 place-content-center py-3">
                <li>
                    <p>Products</p>
                </li>
                <li>
                    <p>Offices</p>
                </li>
                <li>
                    <p>About</p>
                </li>
                <li>
                    <p>Contact</p>
                </li>
            </ul>
            <div className="flex gap-3 sm:gap-4 place-content-center cursor-pointer"> 
            <Icon icon="devicon:twitter" />
            <Icon icon="logos:whatsapp-icon" />
            <Icon icon="logos:facebook" />
            </div>
            <hr />
            <p className="text-center">Copyright@ 2024 - All Right Reserved.</p>
        </div>
        </footer>
    )
}
