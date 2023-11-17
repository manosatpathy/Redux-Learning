import { useEffect, useState } from "react"
import { dummyData } from "./utils/dummyData"
import { Link } from "react-router-dom";


const ShoeCard = () => {
    const [productData, SetProductData] = useState(null);
    useEffect(() => {
        setData()
    }, [])

    const setData = () => {
        SetProductData(dummyData)
    }

    return productData === null ? <h1>Loading..</h1> : (
        <div className="flex h-[100vh] w-full flex-wrap gap-5 bg-gray-50 items-center pl-12 ">
            {productData.map((shoe) => {
                return <Link to={"/shoe/" + shoe.id} key={shoe.id}> <div className="flex cursor-pointer flex-col hover:shadow-2xl hover:scale-105  gap-3 h-72 w-56 transition-all duration-200 ">
                    <img src={shoe.imageUrl} alt="image" className="h-56 w-full" />
                    <div className="flex flex-col justify-start font-mono pl-4">
                        <h3 className="font-sans" >{shoe.name}</h3>
                        <p>MRP: ₹{shoe.price}</p>
                    </div>
                </div> </Link>
            })}
        </div>
    )
}

export default ShoeCard