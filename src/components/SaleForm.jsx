import { useState } from "react"
import { setProduct } from "../api"
import "./components.css"

export default function SaleForm() {

    const [title,setTitle] = useState("")
    const [price,setPrice] = useState("")
    const [desc,setDesc] = useState("")
    const [img,setImg] = useState("")
    const [category,setCategory] = useState("")

    function handlePostProduct(e) {
        e.preventDefault()
        const prod = {
            title,
            price,
            description:desc,
            image:img,
            category
        }
        setProduct(prod)
    }
    return(
        <form className="sale-form">
            <label htmlFor="" className="sale-form-lbl">Title</label>
            <input type="text" className="sale-form-input"  value={title}
                onChange={(e)=>setTitle(e.target.value)}/>
            
            <label htmlFor="" className="sale-form-lbl">Price</label>
            <input type="text" className="sale-form-input" value={price}
                onChange={(e)=>setPrice(e.target.value)}/>

            <label htmlFor="" className="sale-form-lbl">Description</label>
            <input type="text" className="sale-form-input" value={desc}
                onChange={(e)=>setDesc(e.target.value)}/>

            <label htmlFor="" className="sale-form-lbl">Image</label>
            <input type="text" className="sale-form-input" value={img}
                onChange={(e)=>setImg(e.target.value)}/>

            <label htmlFor="" className="sale-form-lbl">Category</label>
            <input type="text" className="sale-form-input" value={category}
                onChange={(e)=>setCategory(e.target.value)}/>

            <button onClick={handlePostProduct}>Enviar</button>
        </form>
    )
}