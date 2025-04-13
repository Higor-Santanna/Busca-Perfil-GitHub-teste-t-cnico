import { Button } from "../components/button/button"
import { Search } from "../components/search/search"
import logo from "../assets/logo.png"
import carregamento from "../assets/carregamento.gif"
import { UserProps } from "../types/user"
import { useState } from "react"
import { getUser } from "../services/service"
import { User } from "../components/user/user"
import { Error } from "../components/error/error"
import "./home.css"

const Home = () => {
    const [ user, setUser ] = useState<UserProps | null>(null);
    const [inputValue, setInputValue] = useState("");
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false);
    
    const handleSearh = async () => {
        if(!inputValue || !inputValue.trim()){
            alert("O campo está vazio por favor digite algo!")
            return
        }
        setLoading(true)
        setError(false);
        setUser(null)
        try {
            const data = await getUser(inputValue)
            setUser(data)
        } catch { 
            setError(true)
        }
        setLoading(false)
    }

    return(
        <div className="DivHomeFather">
            <header>
                <img src={logo} alt="Logo do Github" />
                <h2>Perfil</h2>
                <h2>GitHub</h2>
            </header>

            <div>
                <Search onChange={setInputValue}/>
                <Button onClick={handleSearh}/>
            </div>

            {loading && <img src={carregamento}/>}
            {error && <Error />}
            {user && <User {...user}/>}
        </div>
    )
}

export { Home }