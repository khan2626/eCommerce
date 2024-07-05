import React, { useState } from "react";
import { Icon } from '@iconify/react';
import logo from '../Assets/ubestLogo.jpeg';
import { Link } from "react-router-dom";

export default function Navbar() {
    const[menu, setMenu] = useState('shop');

    return (
    
        <div className="w-full font-poppin py-3 shrink-0 shadow-lg flex mx-auto items-center justify-between px-2 sm:px-6 lg:px-8">
        <div className="flex ">
        <p className="font-bold text-3xl">UBest</p>
            <img src={logo} alt="logo" style={{ width: 120, height: 70 }}></img>
            
        </div>
        <ul className="lg:flex md:flex hidden gap-3 sm:gap-5 cursor-pointer ">
            <li onClick={()=>{setMenu('shop')}}><Link to='/'>Shop</Link>{(menu==='shop')?<hr className="border-2 border-red-600"/>:<></>}</li>
            <li onClick={()=>{setMenu('men')}}><Link to='/men'>Men</Link>{(menu==='men')?<hr className="border-2 border-red-600"/>:<></>}</li>
            <li onClick={()=> {setMenu('women')}}><Link to='/women'>Women</Link>{(menu==='women')?<hr className="border-2 border-red-600"/>:<></>}</li>
            <li onClick={()=> {setMenu('kids')}}><Link to='/kids'>Kids</Link>{(menu==='kids')?<hr className="border-2 border-red-600"/>:<></>}</li>
        </ul>
         <div className="flex">
            <Link to='loginsignup'><button className="rounded-lg border-2 p-2 w-24 hover:bg-green-400">Login</button></Link>
            <Link to='cart'><Icon icon="bytesize:cart" width="49px" height="49px" style={{color: '#e01b24'}} /></Link>
            <div className=" text-red-700">0</div>
         </div>
       </div>  
    )
}

