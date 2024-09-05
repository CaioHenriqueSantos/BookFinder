import { useState } from 'react';
import Context from './Context';

function Provider({ children }) {

  const [data, setData] = useState(null)
  const [detail, setDetail] = useState(null)
  const [favorites, setFavorites] = useState([])

  const contextValue = {
    data,
    setData,
    detail,
    setDetail,
    favorites,
    setFavorites
  }

  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  )
}


export default Provider;