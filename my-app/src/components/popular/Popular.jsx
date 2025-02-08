import React, { useState, useEffect } from "react";
import Items from "../Items/Items";
import axios from "axios";


export default function Shop() {

    const [womenPopular, setWomenPopular] = useState([]);

    const getWomenPopular = async () => {
        const resp = await axios.get('https://ubestclothing.onrender.com/others/womenPopular',{
            headers: {
                Accept: 'application/json',
                "Content-Type": 'application/json'
                
            }
        })
        if (resp.data.success) {
            setWomenPopular(resp.data.womenPopular)
        }
    }

    useEffect(()=>{
        getWomenPopular()
    },[])

    return (
        <div>
            <h1 className="text-center py-3 font-bold text-2xl md:text-3xl lg:text:4xl">POPULAR IN WOMEN</h1>
            <hr />
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-cols-2 items-center justify-between text-wrap">
                {womenPopular.map((item, i) => {
                    return <Items key={i} name={item.name} image={item.image} oldPrice={item.oldPrice} newPrice={item.newPrice} id={item.id}/>
                })}
            </div>
        </div>
    )
}
