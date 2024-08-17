import React, { useEffect, useState } from "react";
import Items from "../Items/Items";
import axios from 'axios';

 export default function NewCollections() {

    const [newCollections, setNewCollections] = useState([]);

    const getNewCollections = async () => {
        const resp = await axios.get('http://localhost:5000/others/newCollection',{
            headers: {
                Accept: 'application/json',
                "Content-Type": 'application/json'
                
            }
        })
        if (resp.data.success) {
            setNewCollections(resp.data.newCollection)
        }
    }

    useEffect(()=>{
        getNewCollections()
    },[])

    return (
        <div className="mb-10">
            <div>
                <h1 className="text-2xl font-bold text-center">NEW COLLECTIONS</h1>
                <hr />
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
                {newCollections.map((item, i) => {
                    return <Items key={i} name={item.name} image={item.image} oldPrice={item.oldPrice} newPrice={item.newPrice} id={item.id}/>
                })}
            </div>
       </div>
    )
 }

//  grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between h-[40px]