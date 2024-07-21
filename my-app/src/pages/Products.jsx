import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { shopContext } from "../context/ShopContext";
import ProductDisplay from "../components/productDisplay/ProductDisplay";


export default function Products() {
    const { allProducts } = useContext(shopContext);
    const { productId } = useParams();
    const product = allProducts.find((e)=> e.id === Number(productId));
    if (!product) {
        return <div className="">Product not found</div>
    }
    
    

    return (
        <div>
            <ProductDisplay product={product}/>
            
        </div>
    )
}