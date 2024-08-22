import { useEffect, useState } from "react"
import { fetchApi } from "../services/fetchApi"
import Header from "../components/Header/Header"
import Loading from "../components/Loading/Loading"
import "./Home.css"

function Home() {
  const [data, setData] = useState(null)
  const [moreItems, setMoreItems] = useState(4)

  useEffect(() => {
    const getApi = async () => {
      const res = await fetchApi()
      setData(res.results)
    }
    getApi()
  }, [])

  const handleClickMore = () => {
    setMoreItems(moreItems + 4)
  }

  return (
    <>
      <Header />
      <div className="container">
        <h1 className="title">Livros</h1>
        <div>
          {!data ? (
            <Loading />
          ) : (
            data.slice(0, moreItems).map((e, index) => (
              <div className="book-card" key={index}>
                <img src={e.thumbnail} className="book-image-placeholder" alt={`Thumbnail do livro ${e.title}`} />
                <div className="book-info">
                  <h2>{e.title}</h2>
                  <p>{e.description}</p>
                  <a href="#">Saiba Mais</a>
                </div>
              </div>
            ))
          )}
          {moreItems >= 48 || !data ? null : <button onClick={handleClickMore}>Ver Mais</button>}
        </div>
      </div>
    </>
  )
}

export default Home
