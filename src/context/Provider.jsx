import { useState } from 'react';
import Context from './Context';

function Provider({ children }) {

  const [data, setData] = useState(null)
  const [detail, setDetail] = useState(null)

  const contextValue = {
    data,
    setData,
    detail,
    setDetail
  }

  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  )
}


export default Provider;