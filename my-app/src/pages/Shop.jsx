import React from "react";
import Popular from '../components/popular/Popular'
import Hero from "../components/Hero/Hero";
import Offers from "../components/offers/Offers";
import NewCollections from "../components/newCollections/NewCollections";
import Newsletter from "../components/newsletter/Newsletter";
import { useContext } from "react";
import { shopContext } from "../context/ShopContext";
import Loading from "../components/loading/Loading";

export default function Shop() {
    const { allProducts } = useContext(shopContext)
    return (
        <div className="mx-4">
            {allProducts && allProducts.length !== 0 ? 
            <div className="">
                <Hero />
                <Popular />
                <Offers />
                <NewCollections />
                <Newsletter /> 
            </div>
        : <Loading/>}
            
        </div>
    )
}