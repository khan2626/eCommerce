import React from "react"
import Sidebar from "./components/sidebar/sidebar"
import { Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"

function App() {
  
  return (
   <div className="font-poppins">
    <Navbar />
    <Sidebar />
    {/* Admin Panel
    <ion-icon name="cloud-upload-outline" style={{fontSize: '60px'}}></ion-icon>
    <ion-icon name="albums-outline"></ion-icon> */}
   </div>
  )
}

export default App
