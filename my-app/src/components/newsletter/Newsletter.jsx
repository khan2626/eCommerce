import React, { useState } from "react";
import axios from "axios";


export default function Newsletter() {
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const handleEmail = async (e)=>{

        console.log(email)
        if (!email) {
            setMessage("Please enter a valid email.");
            return;
        }
        try {
            const response = await axios.post('https://ubestclothing.onrender.com/email/subscribe', {email})
            setMessage(response.data.message)
        } catch (error) {
            console.error("Error:", error);
            setMessage(error.response?.data?.error || "Something went wrong."); 
        }
    }


    return (
        <div className="text-center mx-0 place-content-center bg-gray-400 ">
            <hr />
            <h1 className="items-center py-2 font-bold text-2xl">Get Exclusive Offers on Your Mail</h1>
            <p>Subcribe to newsletter and stay updated</p>
            <div className="place-content-center py-1 flex">
                <input type="email" onChange={(e)=> setEmail(e.target.value)} placeholder="Enter Your Email" />
                <button onClick={handleEmail} className="rounded-xl border-2 w-24 bg-red-600  " >Subscribe</button>
                {message && <p className="mt-2 text-red-600">{message}</p>}
            </div>
        </div>
    )
}