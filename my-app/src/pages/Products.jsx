import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { shopContext } from "../context/ShopContext";
import ProductDisplay from "../components/productDisplay/ProductDisplay";
import Breadcrum from "../components/breadcrum/Breadcrum";
import Description from "../components/description/Description";
import RelatedProducts from "../components/relatedProducts/RelatedProducts.";


export default function Products() {
    const { allProducts } = useContext(shopContext);
    const { productId } = useParams();
    const product = allProducts.find((e)=> e.id === Number(productId));
    if (!product) {
        return <div className="">Product not found</div>
    }
    
    

    return (
        <div>
            <Breadcrum product={product}/>
            <ProductDisplay product={product}/>
            <Description />
            <RelatedProducts/>
        </div>
    )
}