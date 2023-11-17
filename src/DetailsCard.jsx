import { useState } from "react"
import { dummyData } from "./utils/dummyData"
import { useParams } from "react-router-dom"

const DetailsCard = () => {
    const { shoeId } = useParams()
    const shoe = shoeId - 1
    const [shoeDetails] = useState(dummyData)
    return (
        <div className="flex justify-center mt-14 w-[100vw]">
            <div className="flex gap-10 h-96 w-2/4">
                <img src={shoeDetails[shoe].imageUrl} alt="image" className="h-96 w-2/4 border border-black rounded-lg shadow-md" />
                <div className="flex flex-col font-mono w-80 justify-evenly">
                    <div className="flex justify-center flex-col gap-4 items-center">
                        <h3 className="font-extrabold text-xl" >{shoeDetails[shoe].name}</h3>
                        <p className="font-bold text-lg">₹{shoeDetails[shoe].price}</p>
                    </div>

                    <div className="flex flex-col gap-5">
                        <div className="flex flex-row gap-4 items-center">
                            <div className="border-black h-6 w-6 border-2 text-center rounded-full cursor-pointer">7</div>
                            <div className="border-black h-6 w-6 border-2 text-center rounded-full cursor-pointer">8</div>
                            <div className="border-black h-6 w-6 border-2 text-center rounded-full cursor-pointer">9</div>
                            <div className="border-black h-6 w-6 border-2 text-center rounded-full cursor-pointer">10</div>
                            <div className="border-black h-6 w-6 border-2 text-center rounded-full cursor-pointer">11</div>
                        </div>
                        <button className="mt-4 bg-gray-800 rounded-lg text-gray-100 h-10 hover:scale-105 duration-200 shadow-2xl">&#128722; ADD TO CART</button>
                        <button className=" bg-gray-100 rounded-lg text-gray-800 h-10 hover:scale-105 duration-200 shadow-2xl">🖤  ADD TO FAVOURITE </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default DetailsCard