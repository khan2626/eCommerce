import React from "react";


export default function Sidebar() {

    return (
      
        <div className="flex-col bg-slate-400 h-[100vh] w-[110px] place-items-center ">
            <div className="text-center py-3 cursor-pointer">
                <p>Add Product</p>
                <ion-icon name="bag-add-outline" style={{ fontSize: '60px' }}  ></ion-icon>
            </div>
            <div className="text-center py-3 cursor-pointer">
                <p>Delete Product</p>
                <ion-icon name="trash-outline" style={{ fontSize: '60px' }} ></ion-icon>
            </div>
            <div className="text-center py-3 cursor-pointer">
                <p>List Products</p>
                <ion-icon name="list-outline" style={{ fontSize: '60px' }} ></ion-icon> 
            </div>
           
            
            
           
           
          
        </div>

    )
}