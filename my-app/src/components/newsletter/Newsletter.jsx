import React from "react";


export default function Newsletter() {
    return (
        <div className="text-center mx-0 place-content-center bg-gray-400 ">
            <hr />
            <h1 className="items-center py-2 font-bold text-2xl">Get Exclusive Offers on Your Mail</h1>
            <p>Subcribe to newsletter and stay updated</p>
            <div className="place-content-center py-1 flex">
                <input type="email" placeholder="Enter Your Email" />
                <button className="rounded-xl border-2 w-24 bg-red-600  " >Subscribe</button>
            </div>
        </div>
    )
}