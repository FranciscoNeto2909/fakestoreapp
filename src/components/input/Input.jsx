import { useRef } from "react";

export default function Input({ handleChange, value, error, field, type, difPassword }) {
    const inputRef = useRef(null);

    if (error === true) {
        inputRef.current.focus();
    }
    return (
        <div className="register-inputs">
            <label htmlFor={field} className={`${error && "label-error"} register-label`}>{field}</label>
            <input ref={inputRef} type={type} id={field} placeholder={field} autoComplete="none" onChange={e => handleChange(e.target.value)} value={value} className={`${error && "input-error"} register-input`} />
            {error && value === "" &&
                <p className="register-error">Campo obrigatorio</p>
            }
            {error && type === "email" && value !== "" &&
                <p className="register-error">Digite um email valido!</p>
            }
            {error && type === "password" && value !== "" &&
                <p className="register-error">Deve ter numeros, letras maiúsculas e minúsculas!</p>
            }
            {difPassword &&
                <p className="register-error">As senhas não coincidem</p>
            }
        </div>
    )
}