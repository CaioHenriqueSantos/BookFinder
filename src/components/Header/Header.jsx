
import { useEffect, useState } from "react"
import "./Header.css"

function Header() {

  const [inputSearch, setInputSearch] = useState("")
  const [data, setData] = useState()

  const handleClickSearch = async (event) => {
    event.preventDefault()
    const req = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${inputSearch}`)
    const res = await req.json()
    console.log(res);
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