import React from "react";
import Popular from '../components/popular/Popular'
import Hero from "../components/Hero/Hero";
import Offers from "../components/offers/Offers";
import NewCollections from "../components/newCollections/NewCollections";
import Newsletter from "../components/newsletter/Newsletter";

export default function Shop() {
    return (
        <div className="mx-4">
            <Hero />
            <Popular />
            <Offers />
            <NewCollections />
            <Newsletter />
        </div>
    )
}