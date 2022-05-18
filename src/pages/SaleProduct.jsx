import SaleForm from "../components/SaleForm"
import "./pages.css"
export default function SaleProduct() {
    return(
        <div className="page-container">
            <h2>wellcome to our sale area</h2>
            <p>Insert the data of your product and add to our store</p>
            <SaleForm/>
        </div>
    )
}