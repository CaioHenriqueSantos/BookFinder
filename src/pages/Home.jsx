import { useEffect, useState } from "react"
import { fetchApi } from "../services/fetchApi"
import "./Home.css"

function Home() {

  const [data, setData] = useState([])
  const [moreItems, setMoreItems] = useState(4)

  useEffect(() => {
    const getApi = async () => {
      const res = await fetchApi()
      setData(res.results)
      console.log(res)
    }
    getApi()
  }, [])

  const handleClickMore = () => {
    setMoreItems(moreItems + 4)
  }

  return (
    <>
      <header>
        <div className="topnav">
          <input type="text" placeholder="Buscar" />
          <i class="bi bi-heart heart-icon"></i>
        </div>
      </header>
      <div className="container">
        <h1 className="title">Livros</h1>
        <div>
          {data.slice(0, moreItems).map((e, index) => (
            <div className="book-card">
              <img src={e.thumbnail} className="book-image-placeholder" />
              <div className="book-info">
                <h2>{e.title}</h2>
                <p>{e.description}</p>
                <a href="#">Saiba Mais</a>
              </div>
            </div>
          ))}
          <button onClick={handleClickMore}>Ver Mais</button>
        </div>
      </div>
    </>
  )
}

export default Home