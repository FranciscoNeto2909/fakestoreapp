import { useSelector } from "react-redux"
import "./profile.css"

export default function Profile() {
    const user = useSelector(data => data.user.user)

    return (
        <div className="profile">
            <div className="profile-container">
                <h1 className="profile-title">Dados do usuario</h1>
                <div className="profile-data">
                    <div className="profile-data-text">
                        <span>Name: {user.name}</span>
                    </div>
                    <div className="profile-data-text">
                        <span>Email: {user.email}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}