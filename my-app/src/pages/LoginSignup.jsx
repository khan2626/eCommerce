import React from "react";

export default function LoginSignup() {
    return (
        <div className=" text-center">
            <h1>Sign Up</h1>
            <div className="flex flex-col  border-gray-600 border-3xl place-items-center ">
                <input type="text" placeholder="First Name      Last Name" className="bg-slate-100 py-3 mb-2" />
                <input type="email" placeholder="Email Address" className="bg-slate-100 py-3 mb-2" />
                <input type="password" placeholder="Password" className="bg-slate-100 py-3 mb-2"/>
            </div>
            <button className="rounded-2xl borde-2 bg-red-600 w-28 py-1">Continue</button>
            <p className="">Already have an account? <span className="cursor-pointer">Sign In</span></p>
            <div className="flex place-content-center gap-1">
                <input type="checkbox" name='' id="" />
                <p>By continuing, I agree to the terms of use & privacy.</p>
            </div>
        </div> 
    )
}