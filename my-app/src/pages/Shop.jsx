import React from "react";
import Popular from '../components/popular/Popular'
import Hero from "../components/Hero/Hero";
import Offers from "../components/offers/Offers";
import NewCollections from "../components/newCollections/NewCollections";


export default function Shop() {
    return (
        <div className="">
            <Hero />
            <Popular />
            <Offers />
            <NewCollections />
        </div>
    )
}