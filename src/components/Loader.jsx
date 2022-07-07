import "./components.css"

export default function Loader(){
    return(
    <div className="loader">
        <div className="loader-item "></div>
        <div className="loader-item loader-item--secund"></div>
        <div className="loader-item loader-item--third"></div>
    </div>
    )
}