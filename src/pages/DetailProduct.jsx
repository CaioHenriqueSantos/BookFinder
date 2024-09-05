import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import { useContext } from "react"
import Context from "../context/Context"

function DetailProduct() {

  const { detail, setFavorites, favorites } = useContext(Context)
  const params = useParams();
  const navigate = useNavigate();
  // const currentBook = 
  console.log(detail);

  const handleClick = () => {
    setFavorites([...favorites, detail])
    navigate("/favorites")
  }

  return (
    <>
      <Header />
      <h1>{detail.title}</h1>
      <button
        onClick={handleClick}
      >Favoritar</button>
    </>
  )
}

export default DetailProduct