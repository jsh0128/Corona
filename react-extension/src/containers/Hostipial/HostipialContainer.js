import React, { useEffect, useState } from "react"
import GetApi from "../../assets/api/GetApi"
import Hostpial from "../../components/Hostpial"
import ReactLoading from "react-loading"

const HostipialContainer = () => {
  const [api, setApi] = useState([])
  const [loading, setLoading] = useState(false)

  const getApi = async () => {
    const data = await GetApi.getHostpial()
    return data.response.body.items.item
  }

  useEffect(() => {
    getApi().then((response) => {
      setApi(response)
      console.log(response)
      setLoading(true)
    })
  }, [])

  return (
    <div>
      {loading ? (
        <Hostpial api={api} />
      ) : (
        <div className="loading">
          <ReactLoading
            type={"cubes"}
            color={"#004CB8"}
            height={"10%"}
            width={"6%"}
          />
        </div>
      )}
    </div>
  )
}

export default HostipialContainer
