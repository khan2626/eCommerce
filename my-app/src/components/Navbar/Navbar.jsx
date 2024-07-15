import React, { useState } from "react";
import { Icon } from '@iconify/react';
import logo from '../Assets/ubestLogo.jpeg';
import { Link } from "react-router-dom";

export default function Navbar() {
    const[menu, setMenu] = useState('shop');

    return (
    
        <div className="w-auto font-poppin py-3 shrink-0 shadow-lg flex mx-0 items-center justify-between px-2 sm:px-6 lg:px-8">
        <div className="flex ">
        <p className="font-bold text-[11] sm:text-3xl">UBest</p>
            <img src={logo} alt="logo" className="w-[65px] h-[50px] sm:w-[110px] sm:h[70]"></img>
            
        </div>
        <ul className="flex text-xs sm:text-auto gap-2 sm:gap-5 cursor-pointer ">
            <li onClick={()=>{setMenu('shop')}}><Link to='/'>Shop</Link>{(menu==='shop')?<hr className="border-2 border-red-600"/>:<></>}</li>
            <li onClick={()=>{setMenu('men')}}><Link to='/men'>Men</Link>{(menu==='men')?<hr className="border-2 border-red-600"/>:<></>}</li>
            <li onClick={()=> {setMenu('women')}}><Link to='/women'>Women</Link>{(menu==='women')?<hr className="border-2 border-red-600"/>:<></>}</li>
            <li onClick={()=> {setMenu('kids')}}><Link to='/kids'>Kids</Link>{(menu==='kids')?<hr className="border-2 border-red-600"/>:<></>}</li>
        </ul>
         <div className="flex">
            <Link to='loginsignup'><button className="rounded-lg border-2 p-2 w-12 sm:w-20 md:w-24 hover:bg-blue-400 text-xs sm:text-sm text-center">Login</button></Link>
            <Link to='cart'><Icon icon="bytesize:cart" width="auto" height="auto" style={{color: '#e01b24'}} /></Link>
            <div className="mb-4 pb-3 sm:pb-0 sm:mb-0 text-red-700">0</div>
         </div>
       </div>  
    )
}

