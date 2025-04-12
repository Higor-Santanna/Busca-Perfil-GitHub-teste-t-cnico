type ButtonProps = {
    onClick: () => void
}

const Button = ({ onClick }: ButtonProps) => {
    return(
        <>
            <button onClick={onClick}  aria-label="Buscar usuário">Burcar</button>
        </>
    )
};

export { Button }