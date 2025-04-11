type ButtonProps = {
    onClick: () => void
}

const Button = ({ onClick }: ButtonProps) => {
    return(
        <>
            <button onClick={onClick}>Burcar</button>
        </>
    )
};

export { Button }