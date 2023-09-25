/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { createUser } from "../../services/userSlice"
import Input from "../../components/input/Input"
import "./register.css"
import { emailRegex, passwordRegex } from "../../regex/regex"

export default function Register() {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const user = useSelector(data => data.user.user)
    const [aceptTerms, setAceptTerms] = useState(false)
    const [rpPassword, setRpPassword] = useState("")
    const [registerData, setRegisterData] = useState({
        name: "",
        email: "",
        password: "",
        isLogged: false
    })

    const [errors, setErrors] = useState({
        name: false,
        email: false,
        password: false,
        rpPassword: false,
        difPassword: false,
        terms: false,
        accountExist: false
    })

    function handleChangeName(e) {
        setRegisterData({ ...registerData, name: e })
    }

    function handleChangeEmail(e) {
        setRegisterData({ ...registerData, email: e })
    }
    function handleChangePassword(e) {
        setRegisterData({ ...registerData, password: e })
    }
    function handleChangeRpPassword(e) {
        setRpPassword(e)
    }


    function handleCreateAccount(e) {
        e.preventDefault()
        if (registerData.name === "") {
            setErrors({ ...errors, name: true })
            setTimeout(() => {
                setErrors({ ...errors, name: false })
            }, 2000);
        } else if (registerData.email === "") {
            setErrors({ ...errors, email: true })
            setTimeout(() => {
                setErrors({ ...errors, email: false })
            }, 2000);
        } else if (!emailRegex.test(registerData.email)) {
            setErrors({ ...errors, email: true })
            setTimeout(() => {
                setErrors({ ...errors, email: false })
            }, 2000);
        } else if (registerData.password === "") {
            setErrors({ ...errors, password: true })
            setTimeout(() => {
                setErrors({ ...errors, password: false })
            }, 2000);
        } else if (!passwordRegex.test(registerData.password)) {
            setErrors({ ...errors, password: true })
            setTimeout(() => {
                setErrors({ ...errors, password: false })
            }, 2000);
        } else if (rpPassword === "") {
            setErrors({ ...errors, rpPassword: true })
            setTimeout(() => {
                setErrors({ ...errors, rpPassword: false })
            }, 2000);
        } else if (!passwordRegex.test(rpPassword)) {
            setErrors({ ...errors, rpPassword: true })
            setTimeout(() => {
                setErrors({ ...errors, rpPassword: false })
            }, 2000);
        } else if (registerData.password !== rpPassword) {
            setErrors({ ...errors, difPassword: true })
            setTimeout(() => {
                setErrors({ ...errors, difPassword: false })
            }, 2000);
        } else if (!aceptTerms) {
            setErrors({ ...errors, terms: true })
            setTimeout(() => {
                setErrors({ ...errors, terms: false })
            }, 2000);
        } else if (user.email === registerData.email) {
            setErrors({ ...errors, accountExist: true })
            setTimeout(() => {
                setErrors({ ...errors, accountExist: false })
            }, 2000);
        }
        else {
            localStorage.setItem("user", JSON.stringify({ ...registerData, isLogged: true }));
            dispatch(createUser({ ...registerData, isLogged: true }))
            navigate("/")
        }
    }


    return (
        <div className="register">
            <div className="register-container">
                <h1>Create your account</h1>
                <form className="register-form">
                    <Input error={errors.name} field={"name"} value={registerData.name} handleChange={handleChangeName} type={"text"} />

                    <Input error={errors.email} field={"email"} value={registerData.email} handleChange={handleChangeEmail} type={"email"} />

                    <Input error={errors.password} field={"password"} value={registerData.password} handleChange={handleChangePassword} type={"password"} />

                    <Input error={errors.rpPassword} field={"repeat password"} value={rpPassword} handleChange={handleChangeRpPassword} type={"password"} difPassword={errors.difPassword} />

                    <div className="register-inputs checkbox-input">
                        <input type="checkbox" value={aceptTerms} onClick={() => setAceptTerms(!aceptTerms)} />
                        <p className={`${errors.terms && "register-terms-error"} register-terms`}>Accept our <a href="" className={`${errors.terms && "register-terms-error"}`}>Terms and Conditions</a></p>
                    </div>
                    <div className="register-hasAccount">{errors.accountExist && <p className="register-hasAccount-text">Conta já existente faça login para acessar seus dados</p>}</div>
                    <div className="register-inputs">
                        <button className={`${aceptTerms === false && "register-btnDisabled"} register-btn`} onClick={handleCreateAccount}>
                            Create Account
                        </button>
                    </div>
                </form>
                <div className="register-hasAccount">
                    <p >Alredy have an account?</p>
                    <Link className={`${errors.accountExist && "register-hasAccount-focus"}`} to="/login">
                        Log in here
                    </Link>
                </div>
            </div>
        </div>
    )
}