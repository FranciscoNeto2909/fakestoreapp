import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Input from "../../components/input/Input"
import { logout, deleteUser, updateUser } from "../../services/userSlice"
import "./profile.css"
import { useNavigate } from "react-router-dom"
import { emailRegex, passwordRegex } from "../../regex/regex"

export default function Profile() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const user = useSelector(data => data.user.user)

    const [formVisib, setFormVisib] = useState(false)
    const [oldPassword, setOldPassword] = useState("")

    const [updatedData, setupdatedData] = useState({
        name: "",
        email: "",
        password: "",
    })

    const [errors, setErrors] = useState({
        name: false,
        email: false,
        password: false,
        oldPassword: false,
        difPassword: false,
        terms: false,
        accountExist: false
    })

    function handleChangeName(e) {
        setupdatedData({ ...updatedData, name: e })
    }

    function handleChangeEmail(e) {
        setupdatedData({ ...updatedData, email: e })
    }

    function handleChangeOldPassword(e) {
        setOldPassword(e)
    }

    function handleChangePassword(e) {
        setupdatedData({ ...updatedData, password: e })
    }

    function handleUpdateData(e) {
        e.preventDefault()
        if (updatedData.email !== "" && !emailRegex.test(updatedData.email)) {
            setErrors({ ...errors, email: true })
            setTimeout(() => {
                setErrors({ ...errors, email: false })
            }, 2000);
        } else if (oldPassword !== "" && !passwordRegex.test(oldPassword)) {
            setErrors({ ...errors, oldPassword: true })
            setTimeout(() => {
                setErrors({ ...errors, oldPassword: false })
            }, 2000);
        } else if (oldPassword !== "" && updatedData.password === "") {
            setErrors({ ...errors, password: true })
            setTimeout(() => {
                setErrors({ ...errors, password: false })
            }, 2000);
        } else if (updatedData.password !== "" && !passwordRegex.test(updatedData.password)) {
            setErrors({ ...errors, password: true })
            setTimeout(() => {
                setErrors({ ...errors, password: false })
            }, 2000);
        } else if (oldPassword === "" && updatedData.password !== "") {
            setErrors({ ...errors, oldPassword: true })
            setTimeout(() => {
                setErrors({ ...errors, oldPassword: false })
            }, 2000);
        }
        else if (oldPassword !== "" && oldPassword !== user.password) {
            setErrors({ ...errors, difPassword: true })
            setTimeout(() => {
                setErrors({ ...errors, difPassword: false })
            }, 2000);
        } else {
            setOldPassword("")
            setupdatedData({
                name: "",
                email: "",
                password: "",
            })
            dispatch(updateUser({
                name: updatedData.name !== "" ? updatedData.name : user.name,
                email: updatedData.email !== "" ? updatedData.email : user.email,
                password: updatedData.password !== "" ? updatedData.password : user.password,
            }))
            setFormVisib(false)
        }
    }

    function handleLogout() {
        dispatch(logout())
        navigate("/")
    }

    function handleDeleteAccount() {
        dispatch(deleteUser())
        navigate("/")
    }

    return (
        <div className="profile">
            <div className="profile-container">
                <h1 className="profile-title">Dados do usuario</h1>
                {!formVisib ?
                    <>
                        <div className="profile-data">
                            <div className="profile-data-text">
                                <span>Name: </span>
                                <span className="profile-data-name">{user.name}</span>
                            </div>
                            <div className="profile-data-text">
                                <span>Email: </span>
                                <span>{user.email}</span>
                            </div>
                        </div>
                        <div className="profile-updateData">
                            <button className="profile-updateBtn" onClick={() => setFormVisib(true)}>Atualizar dados</button>
                        </div>
                        <div className="profile-buttons">
                            <button className="profile-btn-logout" onClick={handleLogout}>Sair</button>
                            <button className="profile-btn-delete" onClick={handleDeleteAccount}>Excluir conta</button>
                        </div>
                    </> :
                    <form className="profile-form">
                        <Input field={"name"} error={errors.name} handleChange={handleChangeName} type={"text"} value={updatedData.name} />

                        <Input field={"email"} error={errors.email} handleChange={handleChangeEmail} type={"email"} value={updatedData.email} />

                        <Input field={"Old Password"} error={errors.oldPassword} difPassword={errors.difPassword} handleChange={handleChangeOldPassword} type={"password"} value={oldPassword} />

                        <Input field={"New Password"} error={errors.password} handleChange={handleChangePassword} type={"password"} value={updatedData.password} />
                        <div className="profile-form-buttons">
                            <button type="button" className="profile-form-btnCancel" onClick={() => setFormVisib(false)}>Cancelar</button>
                            <button type="button" className="profile-form-btnUpdate" onClick={handleUpdateData}>Atualizar</button>
                        </div>
                    </form>
                }
            </div>
        </div >
    )
}