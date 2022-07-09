import "./components.css"
import { useSelector } from "react-redux"
export default function Message() {
    const msg = useSelector(data => data.app.message)
    return(
        <div className="message-container">
            <h3 className="message">{msg}</h3>
        </div>
    )
}