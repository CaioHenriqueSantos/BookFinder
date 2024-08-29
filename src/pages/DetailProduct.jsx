import { useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import { useContext } from "react"
import Context from "../context/Context"


function DetailProduct() {

  const { detail } = useContext(Context)
  const params = useParams();
  // const currentBook = 
  console.log(detail);

  return (
    <>
      <Header />
      <h1>{detail.title}</h1>
    </>
  )
}

export default DetailProduct