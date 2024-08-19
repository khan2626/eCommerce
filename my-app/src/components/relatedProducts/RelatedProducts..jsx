import React from "react";
import Items from "../Items/Items";


export default function RelatedProducts() {

    const [newCollections, setNewCollections] = useState([]);

    const getNewCollections = async () => {
        const resp = await axios.get('https://ubestclothing.onrender.com/others/newCollection',{
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
        <div >
            <h1 className="text-center text-lg sm:text-xl md:text-2xl font-bold py-3">Related Products</h1>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
            {newCollections.map((item,i)=>{
                return <Items key={i} name={item.name} image={item.image} oldPrice={item.oldPrice} newPrice={item.newPrice} id={item.id}/>
            })}
            </div>
        </div>
    )
}
