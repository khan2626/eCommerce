import axios from "axios";
import React, { useEffect, useState } from "react";

export default function ListProducts() {

    const [allProducts, setAllProducts] = useState([])

    const getAllProducts = async ()=> {
        try {
            const resp = await axios.get('https://ubestclothing.onrender.com/products',{
                Accept: 'Application/json'
            })
            if(resp.data.success) {
                setAllProducts(resp.data.products)
            }

        } catch(error) {
            console.error(error)
        }
    }

    const deleteProduct = async (id) => {
        try {
            const resp = await axios.delete(`https://ubestclothing.onrender.com/products/${id}`);
        if (resp.data.success) {
            setAllProducts(allProducts.filter(product => product.id !== id));
            alert(resp.data.message)
        } else {
            alert('Failed to delete product')
        }
        } catch(error) {
            console.error(error.message)
            alert('an error occured while deleting product')
        }
    }

    useEffect(()=>{
        getAllProducts()
    },[])

    return (
        <div className="place-content-center max-w-auto sm:max-w-5xl mx-auto mt-8 p-2 sm:p-5 bg-gray-300 shadow-lg rounded-lg">
            <h2 className="text-center text-2xl font-bold pb-3">List of all Products</h2>
            <div className="gap-7 place-content-center w-full">
            <div className="flex justify-between gap-9 sm:gap-[100px] font-bold mb-1">
                <p className="">product</p>
                <p>Name</p>
                <p>Price</p>
                <p>Del</p>
            </div>
            <hr />
            <div className="">
            <hr />
            <div className="">
            {allProducts.map((product, i)=>{
                    return <div key={i} className="flex justify-between py-5 border-2 rounded-lg hover:bg-slate-400">
                        <img className="w-16 h-16 object-contain" src={product.image} alt="" />
                        <p className="w-11 mr-3">{product.name}</p>
                        <p className="w-15">${product.newPrice}</p>
                        <ion-icon name="close-outline" style={{ fontSize: '30px' }} onClick={()=>deleteProduct(product.id)}></ion-icon>
                    </div>
                })}
                <hr />
            </div>
            <hr />
                
          
            </div>
           
            </div>
            
        </div>
    )
}