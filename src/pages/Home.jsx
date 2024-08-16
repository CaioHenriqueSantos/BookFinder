import { useEffect, useState } from "react"
import { fetchApi } from "../services/fetchApi"

function Home() {

  const [data, setData] = useState([])

  useEffect(() => {
    const getApi = async () => {
      const res = await fetchApi()
      setData(res.results)
    }
    getApi()
  }, [])

  return (
    <>
      <div>
        {data.map((e, index) => (
          <div>
            <h1>{e.title}</h1>
          </div>
        ))}
      </div>
    </>
  )
}

export default Home