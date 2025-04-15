import { UserProps } from "../../types/user"
import "./user.css"

const User = ({avatar_url, name, bio}: UserProps) => {
    return(
        <div className="User">
            <img src={avatar_url} alt="Imagem do usuário" className="ImageUser"/>
            <div className="DivNameBio">
                <h2>{name}</h2>
                <p>{bio}</p>
            </div>
        </div>
    )
}

export { User }