import axios from "axios";
const products = "https://fakestoreapi.com/products"
const categories = "https://fakestoreapi.com/products/categories"

export async function getProducts() {
    const res = await axios.get(products)
    return await res.data
}
export async function setProduct(prod) {
    await axios.post("https://fakestoreapi.com/products",prod)
    .then(prod => console.log(prod))
    .catch(err => console.error(err))
}

export async function getCategories() {
    await axios.get(categories)
    .then(cat => cat.data)
}
