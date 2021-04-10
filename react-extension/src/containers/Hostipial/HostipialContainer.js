import React, { useEffect, useState } from "react"
import GetApi from "../../assets/api/GetApi"
import Hostpial from "../../components/Hostpial"
import ReactLoading from "react-loading"
import Skeleton from "react-loading-skeleton"

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
      setLoading(true)
    })
  }, [])

  return (
    <div>
      {loading ? (
        <Hostpial api={api} />
      ) : (
        <div className="loading">
          <Skeleton width={600} height={40} />
          <Skeleton width={600} height={39} delay={3} />
          <Skeleton width={600} height={207} delay={5} />
        </div>
      )}
    </div>
  )
}

export default HostipialContainer
