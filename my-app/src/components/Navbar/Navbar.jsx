import React, { useContext, useState } from "react";
import { Icon } from '@iconify/react';
import logo from '../Assets/ubestLogo.jpeg';
import { Link } from "react-router-dom";
import { shopContext } from "../../context/ShopContext";

export default function Navbar() {
    const[menu, setMenu] = useState('shop');
    const { cartQty } = useContext(shopContext)

    return (
    
        <div className="justify-between w-auto font-poppin py-3 shrink-0 shadow-lg flex items-center px-2 sm:px-6 lg:px-8">
        <div className="flex ">
        <p className="font-bold text-[11] sm:text-3xl">UBest</p>
            <Link to="/"> <img src={logo} alt="logo" className="w-[65px] h-[50px] sm:w-[110px] sm:h[70]"></img></Link>
            
        </div>
        <div className="nav-links absolute md:static  min-h-[60vh] md:min-h-fit left-0 top-[-100%] w-full md:w-fit items-center py-4 sm:py-3">
        <ul className="flex bg-white sm:bg-white md:flex-row flex-col gap-5 md:gap-8 px-3 py-3 text-xl justify-between">
            <li onClick={()=>{setMenu('shop')}}><Link to='/'>Shop</Link>{(menu==='shop')?<hr className="border-2 border-red-600 w-12"/>:<></>}</li>
            <li onClick={()=>{setMenu('men')}}><Link to='/men'>Men</Link>{(menu==='men')?<hr className="border-2 border-red-600 w-12 "/>:<></>}</li>
            <li onClick={()=> {setMenu('women')}}><Link to='/women'>Women</Link>{(menu==='women')?<hr className="border-2 border-red-600 w-12"/>:<></>}</li>
            <li onClick={()=> {setMenu('kids')}}><Link to='/kids'>Kids</Link>{(menu==='kids')?<hr className="border-2 border-red-600 w-12"/>:<></>}</li>
        </ul>
        </div>
         <div className="flex">
            <Link to='loginsignup'><button className="rounded-lg border-2 p-2 w-12 sm:w-20 md:w-24 hover:bg-blue-400 text-xs sm:text-sm text-center">Login</button></Link>
            <Link to='cart'><Icon icon="bytesize:cart" width="auto" height="auto" style={{color: '#e01b24'}} /></Link>
            <div className="mb-4 pb-3 sm:pb-0 sm:mb-0 text-red-700">{cartQty()}</div>
            <div className="md:hidden text-3xl px-2 cursor-pointer"><ion-icon onClick={(e)=>{
                const navLinks = document.querySelector(".nav-links"); 
                e.target.name = e.target.name === "menu-outline" ? "close" : "menu-ouline" && e.target.name === "close" ? "menu-outline" : "close"; 
                navLinks.classList.toggle("top-[9%]") }} name="menu-outline"></ion-icon></div>
                
         </div>
       </div>  
    )
}

// //flex text-xs sm:text-auto gap-2 sm:gap-5 cursor-pointer

// import React, { useState } from "react";
// import { Icon } from '@iconify/react';
// import logo from '../Assets/ubestLogo.jpeg';
// import { Link } from "react-router-dom";

// export default function Navbar() {
//     const [menu, setMenu] = useState('shop');

//     const toggleMenu = () => {
//         const navLinks = document.querySelector(".nav-links");
//         navLinks.classList.toggle("top-[9%]");
//         navLinks.classList.toggle("top-[-100%]");
//     };

//     return (
//         <div className="justify-between w-auto font-poppin py-3 shrink-0 shadow-lg flex items-center px-2 sm:px-6 lg:px-8">
//             <div className="flex">
//                 <p className="font-bold text-[11] sm:text-3xl">UBest</p>
//                 <img src={logo} alt="logo" className="w-[65px] h-[50px] sm:w-[110px] sm:h[70]" />
//             </div>
//             <div className="nav-links absolute md:static min-h-[60vh] md:min-h-fit left-0 top-[-100%] w-full md:w-fit items-center py-4 sm:py-3 transition-all duration-500 ease-in-out">
//                 <ul className="flex bg-white sm:bg-white md:flex-row flex-col gap-5 md:gap-8 px-3 py-3 text-xl justify-between">
//                     <li onClick={() => { setMenu('shop') }}><Link to='/'>Shop</Link>{(menu === 'shop') ? <hr className="border-2 border-red-600 w-12" /> : <></>}</li>
//                     <li onClick={() => { setMenu('men') }}><Link to='/men'>Men</Link>{(menu === 'men') ? <hr className="border-2 border-red-600 w-12" /> : <></>}</li>
//                     <li onClick={() => { setMenu('women') }}><Link to='/women'>Women</Link>{(menu === 'women') ? <hr className="border-2 border-red-600 w-12" /> : <></>}</li>
//                     <li onClick={() => { setMenu('kids') }}><Link to='/kids'>Kids</Link>{(menu === 'kids') ? <hr className="border-2 border-red-600 w-12" /> : <></>}</li>
//                 </ul>
//             </div>
//             <div className="flex">
//                 <Link to='loginsignup'><button className="rounded-lg border-2 p-2 w-12 sm:w-20 md:w-24 hover:bg-blue-400 text-xs sm:text-sm text-center">Login</button></Link>
//                 <Link to='cart'><Icon icon="bytesize:cart" width="auto" height="auto" style={{ color: '#e01b24' }} /></Link>
//                 <div className="mb-4 pb-3 sm:pb-0 sm:mb-0 text-red-700">0</div>
//                 <div className="md:hidden text-3xl px-2 cursor-pointer">
//                     <ion-icon onClick={(e) => {
//                         toggleMenu();
//                         e.target.name = e.target.name === "menu-outline" ? "close" : "menu-outline";
//                     }} name="menu-outline"></ion-icon>
//                 </div>
//             </div>
//         </div>
//     );
// }
