import { useState } from "react"
import Input from "../../components/input/Input"
import { login } from "../../services/userSlice"
import { useDispatch, useSelector } from "react-redux"
import "./login.css"
import { Link, useNavigate } from "react-router-dom"
import { emailRegex, passwordRegex } from "../../regex/regex"

export default function Login() {
    const dispatch = useDispatch()
    const user = useSelector(data => data.user.user)
    const navigate = useNavigate()
    const [errorMsg, setErrorMsg] = useState("")

    const [errors, setErrors] = useState({
        email: false,
        password: false,
        login: false,
        userNotFound: false
    })
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    })

    function handleChangeEmail(e) {
        setLoginData({ ...loginData, email: e })
    }

    function handleChangePassword(e) {
        setLoginData({ ...loginData, password: e })
    }

    async function handleLogin() {
        if (loginData.email === "") {
            setErrors({ ...errors, email: true })
            setTimeout(() => {
                setErrors({ ...errors, email: false })
            }, 2000);
        } else if (!emailRegex.test(loginData.email)) {
            setErrors({ ...errors, email: true })
            setTimeout(() => {
                setErrors({ ...errors, email: false })
            }, 2000);
        } else if (loginData.password === "") {
            setErrors({ ...errors, password: true })
            setTimeout(() => {
                setErrors({ ...errors, password: false })
            }, 2000);
        } else if (!passwordRegex.test(loginData.password)) {
            setErrors({ ...errors, password: true })
            setTimeout(() => {
                setErrors({ ...errors, password: false })
            }, 2000)
        } else if (user.email === "") {
            setErrors({ ...errors, login: true, userNotFound: true })
            setErrorMsg("User not found or nonexitent")
            setTimeout(() => {
                setErrors({ ...errors, login: false, userNotFound: false })
            }, 2000);
        } else if (user.email !== loginData.email || user.password !== loginData.password) {
            setErrors({ ...errors, login: true })
            setErrorMsg("Email or password invalid")
            setTimeout(() => {
                setErrors({ ...errors, login: false })
            }, 2000);
        }
        else {
            dispatch(login())
            localStorage.setItem("user", JSON.stringify({ ...user, isLogged: true }));
            navigate("/")
        }
    }

    return (
        <div className="login">
            <div className="login-container">
                <h1>Login with your account</h1>
                <form className="login-form">
                    <Input error={errors.email} field={"email"} value={loginData.email} handleChange={handleChangeEmail} type={"email"} />

                    <Input error={errors.password} field={"password"} value={loginData.password} handleChange={handleChangePassword} type={"password"} />
                    <div className="login-error-container">{errors.login && <p className="login-error-text">{errorMsg}</p>}</div>
                    <div className="login-inputs">
                        <button type="button" className={`login-btn`} onClick={handleLogin}>
                            Login
                        </button>
                    </div>
                </form>
                <div className="register-hasAccount">
                    <p>Not have an account?</p>
                    <Link to="/register" className={`${errors.userNotFound && "login-unexistentAccont-focus"}`}>create here</Link>
                </div>
            </div>
        </div>
    )
}