import "./ListBooks.css"

function ListBooks({ data, moreItems }) {
  return (
    <>
      {data.slice(0, moreItems).map((e, index) => (
        <div className="book-card" key={index}>
          <img src={e.thumbnail} className="book-image-placeholder" alt={`Thumbnail do livro ${e.title}`} />
          <div className="book-info">
            <h2>{e.title}</h2>
            <p>{e.description}</p>
            <a href="#">Saiba Mais</a>
          </div>
        </div>
      ))}
    </>
  )
}

export default ListBooks