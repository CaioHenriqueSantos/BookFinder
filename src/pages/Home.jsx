import { useContext, useEffect, useState } from "react"
import { fetchApi } from "../services/fetchApi"
import Header from "../components/Header/Header"
import Loading from "../components/Loading/Loading"
import "./Home.css"
import ListBooks from "../components/ListBooks/ListBooks"
import Context from "../context/Context"

function Home() {

  const { data, setData, style } = useContext(Context)
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
          {!data ? <Loading /> : <ListBooks data={data} moreItems={moreItems} />}
          {moreItems >= 48 || !data ? null : <button onClick={handleClickMore}>Ver Mais</button>}
        </div>s
      </div>
    </>
  )
}

export default Home
