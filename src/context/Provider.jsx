import { useEffect, useState } from 'react';
import Context from './Context';

function Provider({ children }) {

  const [data, setData] = useState(null)
  const [detail, setDetail] = useState(null)
  const [favorites, setFavorites] = useState([])
  const [style, setStyle] = useState("")

  useEffect(() => {
    const ls = JSON.parse(localStorage.getItem('favoriteBooks'));

    if (ls) {
      setFavorites(ls)
    }

    if (ls.length > 0) {
      setStyle("setcolor")
    }

  }, [])

  useEffect(() => {
    localStorage.setItem('favoriteBooks', JSON.stringify(favorites))

    if (favorites.length > 0) {
      setStyle("setcolor")
    } else {
      setStyle("")
    }

  }, [favorites])

  const contextValue = {
    data,
    setData,
    detail,
    setDetail,
    favorites,
    setFavorites,
    style,
    setStyle
  }

  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  )
}


export default Provider;