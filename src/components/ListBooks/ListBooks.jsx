import "./ListBooks.css"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import Context from "../../context/Context"

function ListBooks({ data, moreItems }) {

  const navigate = useNavigate()
  const { setDetail } = useContext(Context)

  const handelClick = (e) => {
    setDetail(e)
    navigate(`/product/${e.id}`)
  }

  return (
    <>
      {data.slice(0, moreItems).map((e, index) => (
        <div className="book-card" key={index}>
          <img src={e.thumbnail} className="book-image-placeholder" alt={`Thumbnail do livro ${e.title}`} />
          <div className="book-info">
            <h2>{e.title}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae...</p>
            <a onClick={() => handelClick(e)} >Saiba Mais</a>
          </div>
        </div>
      ))}
    </>
  )
}

export default ListBooks