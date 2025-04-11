type SearchProps = {
    onChange: (value: string) => void
  }

const Search = ( { onChange }: SearchProps ) => { 
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value)
    }
    return (
        <>
            <input type="text" placeholder="Digite um usuário do Git" onChange={handleInputChange} />
        </> 
    )
};

export { Search }