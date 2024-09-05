
import { useContext } from "react"
import Context from "../context/Context"


function Favorite() {

  const { favorites } = useContext(Context)
  console.log(favorites)

  return (
    <>
      <div>
        <h1>{favorites[0].title}</h1>
        <h1>Favorite</h1>
      </div>
    </>
  )
}

export default Favorite