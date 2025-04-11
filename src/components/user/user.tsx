import { UserProps } from "../../types/user"

const User = ({avatar_url, name, bio}: UserProps) => {
    return(
        <div>
            <img src={avatar_url} alt="Imagem do usuário" />
            <div>
                <h2>{name}</h2>
                <p>{bio}</p>
            </div>
        </div>
    )
}

export { User }