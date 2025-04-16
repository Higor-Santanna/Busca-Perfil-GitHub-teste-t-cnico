import "./search.css"

type SearchProps = {
    onChange: (value: string) => void;
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  }

const Search = ( { onChange, onKeyDown}: SearchProps ) => { 
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value)
    } 
    return (
        <>
            <input type="text" className="Search"  placeholder="Digite um usuário do Git" onChange={handleInputChange} onKeyDown={onKeyDown} />
        </> 
    )
};

export { Search }