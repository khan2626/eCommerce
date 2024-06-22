import React from "react";
import './Navbar.css';
import { Icon } from '@iconify/react';
import logo from '../Assets/ubestLogo.jpeg';

export default function Navbar() {
    return (
       <div className="navbar">
        <div className="nav-logo">
        <p>UBest</p>
            <img src={logo} alt="logo" style={{ width: 110, height: 60 }}></img>
            
        </div>
        <ul className="nav-menu">
            <li >Shop <hr/></li>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
        </ul>
         <div className="login-cart">
            <button>Login</button>
            <Icon icon="bytesize:cart" width="49px" height="49px" style={{color: '#e01b24'}} />
            <div className="cart-count">0</div>
         </div>
         
       </div>  
    )
}