import React from "react";

export default function Breadcrum(props) {
    const {product} = props
    return (
        <div className="flex gap-0 text-[11px] sm:text-lg sm:gap-2 items-center">
            <p>HOME</p>
            <ion-icon name="chevron-forward-outline"></ion-icon>
            <p>SHOP</p>
            <ion-icon name="chevron-forward-outline"></ion-icon>
            <p>{product.category}</p>
            <ion-icon name="chevron-forward-outline"></ion-icon>
            <p>{product.name}</p>
        </div>
    )
}