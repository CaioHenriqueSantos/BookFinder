
import { useContext, useState } from "react"
import "./Header.css"
import Context from "../../context/Context"
function Header() {

  const [inputSearch, setInputSearch] = useState("")
  const { data, setData } = useContext(Context)

  const handleClickSearch = async (event) => {
    event.preventDefault()
    const req = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=livro ${inputSearch}`)
    const res = await req.json()
    setData(res.results)
  }

  return (
    <header >
      <div className="topnav">
        <form>
          <div className="search-container">
            <input
              type="text"
              id="input-search"
              placeholder="Buscar"
              value={inputSearch}
              onChange={({ target }) => setInputSearch(target.value)} />
            <button type="submit" onClick={(event) => handleClickSearch(event)} className="search-button">
              <i className="bi bi-search"></i>
            </button>
          </div>
        </form>
        <i className="bi bi-heart heart-icon"></i>
      </div>
    </header >
  )
}

export default Header