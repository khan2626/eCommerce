import React, { useState, useEffect } from "react";
import Items from "../Items/Items";
import axios from "axios";


export default function Shop() {

    const [womenPopular, setWomenPopular] = useState([]);

    const getWomenPopular = async () => {
        const resp = await axios.get('http://localhost:5000/others/womenPopular',{
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
            <h1 className="text-center font-bold text-2xl">POPULAR IN WOMEN</h1>
            <hr />
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-cols-1 items-center justify-between">
                {womenPopular.map((item, i) => {
                    return <Items key={i} name={item.name} image={item.image} oldPrice={item.oldPrice} newPrice={item.newPrice} id={item.id}/>
                })}
            </div>
        </div>
    )
}
