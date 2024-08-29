import { useState } from 'react';
import Context from './Context';

function Provider({ children }) {

  const [data, setData] = useState(null)

  const contextValue = {
    data,
    setData
  }

  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  )
}


export default Provider;