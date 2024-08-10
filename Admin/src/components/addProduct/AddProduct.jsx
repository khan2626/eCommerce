import React, { useState, useRef } from "react";
import axios from 'axios';

export default function AddProducts() {

  // const imageRef = useRef('')

    const [image, setImage] = useState(false)
    const [product, setProduct] = useState({
        name: "",
        oldPrice: "",
        newPrice: "",
        category: "Women",
        image: ""
    });
    

    const changeHandler = (e) => {
        setProduct({...product, [e.target.name]: e.target.value})
    }

    const imageHandler = (e) => {
        setImage(e.target.files[0])
    }

    const addHandler = async ()=> {
        //console.log(product, image)
        const formData = new FormData()
        formData.append('image', image)
        try {
            const resp = await axios.post('http://localhost:5000/uploads',formData,{
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            console.log(resp.data.imageUrl)
            if(resp.data.success){
                product.image = resp.data.imageUrl
                
            } else {
                alert('failed to upload image')
            }
            
            const response = await axios.post('http://localhost:5000/products',product,{
                headers: {
                    'Content-Type': 'Application/json',
                    Accept: 'Application/json'
                }
            })
            if(response.data.success){
                console.log(response.data)
                alert(`${product.name} uploaded`)
                setProduct({
                  name: "",
                  oldPrice: "",
                  newPrice: "",
                  category: "Women",
                  image: "",
                })
                setImage(null)

            } else {
                alert('failed to upload product')
            }

        } catch(error) {
            console.error('error', error)
        }
        
    }
    

  return (
    <div className="max-w-lg  mt-2 mx-auto p-6 bg-gray-300 shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold text-center mb-6">Add Product</h2>
      
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Product Name</label>
        <input 
        name='name'
        value={product.name} 
        onChange={changeHandler}
          type="text" 
          placeholder="Type Here"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
        />
      </div>
      <div className="flex gap-2">
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Old Price(optional)</label>
        <input 
          name='oldPrice'
          type="text"
          value={product.oldPrice}
          onChange={changeHandler}
          placeholder="Type Here"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
        />
      </div>
      
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">New Price/Offer Price</label>
        <input
          name='newPrice'
          type="text"
          value={product.newPrice}
          onChange={changeHandler}
          placeholder="Type Here"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
        />
      </div>
      </div>
      
      
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Category</label>
        <select
          name="category"
          value={product.category}
          onChange={changeHandler}
          className="w-[130px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
        >
          <option value="women">Women</option>
          <option value="men">Men</option>
          <option value="kids">Kids</option>
        </select>
      </div>
      
      <div className="mb-6">
        
        <div className="flex items-center justify-center w-[130px] h-32 border-2 border-dashed border-white rounded-md cursor-pointer hover:border-blue-500 focus-within:border-blue-500 focus-within:ring focus-within:ring-blue-500">
            
        <label htmlFor="image-upload" className="block text-gray-700 font-medium mb-2">
            {image?<img src={URL.createObjectURL(image)} className="object-cover "></img>:<ion-icon name="cloud-upload-outline" style={{ fontSize: '80px' }} ></ion-icon>}
        </label>
          
          <input  onChange={imageHandler} type="file" name="image" id="image-upload" hidden />
        </div>
      </div>
      
      <button onClick={()=>{addHandler()}} className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
        ADD
      </button>
    </div>
  );
}



