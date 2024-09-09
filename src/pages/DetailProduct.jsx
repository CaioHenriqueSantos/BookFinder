import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import { useContext, useEffect } from "react"
import Context from "../context/Context"
import Loading from "../components/Loading/Loading";

function DetailProduct() {

  const { setDetail, detail, setFavorites, favorites } = useContext(Context)
  const params = useParams();
  const navigate = useNavigate();
  // const currentBook = 
  console.log(params);

  useEffect(() => {
    const fetchApi = async () => {
      const req = await fetch(`https://api.mercadolibre.com/items/${params.book}`)
      const res = await req.json()
      setDetail(res)
    }
    fetchApi()
  }, [])

  const handleClick = () => {
    setFavorites([...favorites, detail])
    navigate("/favorites")
  }

  return (
    <>
      <Header />
      {!detail ? <Loading /> : <h1>{detail.title}</h1>}
      <button
        onClick={handleClick}
      >Favoritar</button>
    </>
  )
}

export default DetailProduct