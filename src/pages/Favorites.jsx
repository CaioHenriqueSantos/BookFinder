
import { useContext, useEffect } from "react"
import Context from "../context/Context"
import Loading from "../components/Loading/Loading"
import Header from "../components/Header/Header"


function Favorite() {

  const { setFavorites, favorites } = useContext(Context)
  console.log(favorites)

  useEffect(() => {

  }, [])

  const handleClick = (e) => {
    const removeBook = favorites.filter((element) => element !== e);
    setFavorites(removeBook)
  }

  return (
    <>
      <div>
        <Header />
        <h1>Favorite</h1>
        {favorites.length === 0 ? <Loading /> : favorites.map((e, index) => (
          <div>
            <h1>{e.title}</h1>
            <button
              onClick={() => handleClick(e)}
            >Excluir</button>
          </div>
        ))}
      </div>
    </>
  )
}

export default Favorite