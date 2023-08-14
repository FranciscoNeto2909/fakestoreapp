import { useEffect, useState } from "react"
import { mask } from "remask"
import { setCep } from "../../services/slice"

import "./cepForm.css"
import { useDispatch } from "react-redux"

export default function CepForm({ setInsertingCep }) {
    const [newCep, setNewCep] = useState("")
    const [location, setLocation] = useState("")
    const dispatch = useDispatch()

    function handleChangeCep(e) {
        setNewCep(mask(`${e.target.value}`, ['99999999']))
    }

    async function handleGetCep() {
        if (newCep.length === 8) {
            const res = await fetch(`http://viacep.com.br/ws/${newCep}/json/`)
            const data = await res.json()
            setLocation(data.localidade)
        }
    }

    function handleSetCep() {
        dispatch(setCep({
            cep: newCep, location
        }))
        setInsertingCep(false)
    }

    useEffect(() => {
        handleGetCep()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [newCep])

    return (
        <dialog open className="cepForm">
            <div className="cepForm-container">
                <button className="cepForm-closebtn" onClick={() => setInsertingCep(false)}>x</button>
                <form className="cepForm-form">
                    <div className="cepForm-form-container">
                        <label className="cepForm-lbl" htmlFor="cep">Cep</label>
                        <input className="cepForm-inpt" autoComplete="none" id="cep" type="text" placeholder="99999999" value={newCep} onChange={handleChangeCep} />
                    </div>
                    {location &&
                        <>
                            <div>
                                <label className="cepForm-lbl" htmlFor="location">Localidade</label>
                                <p id="location" className="cepForm-location">{location}</p>
                            </div>
                            <button type="button" onClick={handleSetCep} className="cepForm-btn">Confirmar</button>
                        </>
                    }
                </form>
            </div>
        </dialog>
    )
}