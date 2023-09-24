import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

export default function Sale() {
    const user = useSelector(data => data.user.user)
    return (
        <>
            {
                !user.isLogged ?
                    <div>
                        <h1>Crie uma conta primeiro</h1>
                        <p>Crie sua conta para vender seus produtos e salvar seus dados, receber descontos e promoções nas suas compras</p>
                        <div>
                            <Link to="/register">Criar minha conta</Link>
                            <div>
                                <p>Já tem uma conta ?</p>
                                <Link href="/login">Fazer login</Link>
                            </div>
                        </div>
                    </div>
                    :
                    <div>
                        Sale your products
                    </div>
            }
        </>
    )
}