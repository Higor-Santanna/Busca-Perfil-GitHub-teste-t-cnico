import "./button.css"
type ButtonProps = {
    onClick: () => void
}

const Button = ({ onClick }: ButtonProps) => {
    return(
        <>
            <button onClick={onClick}  aria-label="Buscar usuário" className="Button">
                <i className="fa-solid fa-magnifying-glass"></i>
            </button>
        </>
    )
};

export { Button }