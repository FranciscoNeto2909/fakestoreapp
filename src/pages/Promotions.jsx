import { useEffect } from "react"
import { useState } from "react"
import { useSelector } from "react-redux"
import ProductsCard from "../components/productsCard/ProductsCard"

export default function Promotions() {
    const [randomNums, setRandomNums] = useState([])
    const products = useSelector(data => data.products.products)

    function handleGenerateRandomNums() {
        let arr = [];
        while (arr.length < 6) {
            const random = Math.floor(Math.random() * 10);
            const existNum = arr.filter(num => num === random);
            if (existNum.length === 0) {
                arr.push(random);
            }
        }
        setRandomNums(arr);
    }

    useEffect(() => {
        handleGenerateRandomNums()
    }, [])

    return (
        <div>
            <div className="promotions-cards">
                {randomNums.length === 6 &&
                    randomNums.map((num, i) => (
                        <ProductsCard promotion={true} prod={products[num]} i={i} />
                    ))
                }
            </div>
        </div>
    )
}