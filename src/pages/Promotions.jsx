import { useEffect } from "react"
import { useState } from "react"
import { useSelector } from "react-redux"
import Card from "../components/card/Card"
import Loader from "../components/Loader"

export default function Promotions() {
    const [randomNums, setRandomNums] = useState([])
    const { products, filteredCat } = useSelector(data => data.products)
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
            <div className="product-header">
                <div className="product-header-items">
                    <a className="product-header-item" href="/">Voltar</a>
                </div>
                <div className="product-header-items">
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                    <a className="product-header-item" href="#">Compartilhar</a>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                    <a className="product-header-item" href="#">vender</a>
                </div>
            </div>
            {loading ?
                <div className="promotions-cards">
                    {randomNums.length > 0 &&
                        randomNums.map((num, i) => {
                            const filteredProd = products[num]?.category === filteredCat
                            if (filteredCat === "") {
                                return <Card promotion={true} prod={products[num]} i={i} />
                            } else if (filteredProd) {
                                return <Card promotion={true} prod={products[num]} i={i} />
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