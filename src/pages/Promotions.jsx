import { useEffect } from "react"
import { useState } from "react"
import { useSelector } from "react-redux"
import ProductsCard from "../components/productsCard/ProductsCard"
import Loader from "../components/Loader"

export default function Promotions() {
    const [randomNums, setRandomNums] = useState([])
    const { products, filter } = useSelector(data => data.products)
    const [loading, setLoading] = useState(false)

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

    function handleLoading() {
        setTimeout(() => {
            setLoading(true)
        }, 1000);
    }

    useEffect(() => {
        handleGenerateRandomNums()
    }, [])

    useEffect(() => {
        handleLoading()
    }, [])

    return (
        <div>
            {loading ?
                <div className="promotions-cards">
                    {randomNums.length > 0 &&
                        randomNums.map((num, i) => {
                            const filteredProd = products[num]?.category === filter
                            if (filter === "") {
                                return <ProductsCard promotion={true} prod={products[num]} i={i} />
                            } else if (filteredProd) {
                                return <ProductsCard promotion={true} prod={products[num]} i={i} />
                            } else {
                                return false
                            }
                        })
                    }
                </div> :
                <Loader />
            }
        </div>
    )
}