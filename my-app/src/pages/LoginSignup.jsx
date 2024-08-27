import React, { useState } from "react";
import axios from 'axios';

export default function LoginSignup() {

    const [state, setState] = useState("Sign up")
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    })
    
   const changeHandler = (e)=>{
    setFormData({...formData, [e.target.name]: e.target.value})
   }

   const login = async ()=>{
    
    try {
        const resp = await axios.post('https://ubestclothing.onrender.com/user/login',formData,{
            headers: {
                Accept: 'application/json',
                "Content-Type": 'application/json'
            }
        })
        if (resp.data.success){
            localStorage.setItem('token', resp.data.token)
            setFormData({
                email: '',
                password: ''
            })
            window.location.replace('/')
        } else {
            alert(resp.data.errors)
            console.log(resp.data.errors)
        }
       
    } catch(errors){
        console.error(errors)
        //alert("Invalid Email or Password")
    }
   }

   const signup = async () => {
    try {
        const resp = await axios.post('https://ubestclothing.onrender.com/user/signup',formData,{
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        })
        if (resp.data.success){
            localStorage.setItem('token', resp.data.token)
            setFormData({
                name: '',
                email: '',
                password: ''
            })
            console.log("user registered")
            alert('registration successful')
            window.location.replace('/')
        } else {
            alert(resp.data.errors)
            console.log(resp.data.errors)
        }
        
    } catch(error) {
        console.error(error)
        alert(error)
    }
   }

    return (
        <div className="max-w-lg mt-2 mx-auto text-center p-6 bg-gray-300 shadow-md rounded-lg">
            <h1 className="font-bold">{state}</h1>
            <div className="flex flex-col  border-gray-600 border-3xl place-items-center ">
                {state === 'Sign up'?<input onChange={changeHandler} value={formData.name} name='name' type="text" placeholder="First Name      Last Name" className="bg-slate-100 py-3 mb-2" />:<></>}
                <input onChange={changeHandler} value={formData.email} name='email' type="email" placeholder="Email Address" className="bg-slate-100 py-3 mb-2" />
                <input onChange={changeHandler} value={formData.password} name='password' type="password" placeholder="Password" className="bg-slate-100 py-3 mb-2"/>
            </div>
            <button onClick={()=>{state === 'Sign up'?signup():login()}} className="rounded-2xl borde-2 bg-red-600 w-28 py-1">Continue</button>
            {state === 'Login'?<p className="">Don't have an account? <span onClick={()=>setState('Sign up')} className="cursor-pointer text-red-600">Click Here</span></p>
            :<p className="">Already have an account? <span onClick={()=>setState('Login')} className="cursor-pointer text-red-600">Sign In</span></p>}
            
            <div className="flex place-content-center gap-1">
                <input type="checkbox" name='' id="" />
                <p>By continuing, I agree to the terms of use & privacy.</p>
            </div>
        </div> 
    )
}