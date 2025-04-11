import { Button } from "../components/button/button"
import { Search } from "../components/search/search"
import logo from "../assets/logo.png"
import { UserProps } from "../types/user"
import { useState } from "react"
import { getUser } from "../services/service"
import { User } from "../components/user/user"
import { Error } from "../components/error/error"

const Home = () => {
    const [ user, setUser ] = useState<UserProps | null>(null);
    const [inputValue, setInputValue] = useState("");
    const [error, setError] = useState(false)
    
    const handleSearh = async () => {
        setError(false);
        setUser(null)
        try {
            const data = await getUser(inputValue)
            console.log(data)
            setUser(data)
        } catch (error) {
            setError(true)
        }
    }

    return(
        <>
            <header>
                <img src={logo} alt="Logo do Github" />
                <h2>Perfil</h2>
                <h2>GitHub</h2>
            </header>

            <div>
                <Search onChange={setInputValue}/>
                <Button onClick={handleSearh}/>
            </div>

            {user && <User {...user}/>}
            {error && <Error />}
        </>
    )
}

export { Home }