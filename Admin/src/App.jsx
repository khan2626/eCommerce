import React from "react"
import Sidebar from "./components/sidebar/sidebar"
import { Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"

import ListProducts from "./components/listProduct/ListProduct"
import AddProducts from "./components/addProduct/AddProduct"


function App() {
  
  return (
   <div className="font-poppins">
    <Navbar />
    <div className="flex gap-2 w-auto">
    <Sidebar />

    <Routes className='flex justify-between'>
      <Route path='/listProduct' element={<ListProducts/>} />
      <Route path='/addProduct' element={<AddProducts/>} />
    </Routes>
    </div>
    

   </div>
  )
}

export default App
