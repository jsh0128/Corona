import GetApi from "assets/api/GetApi"
import Hostpial from "components/Hostpial/Hostpial"
import React, { useEffect } from "react"

const HostipialContainer = () => {
  const getApi = async () => {
    const data = await GetApi.getHostpial()
    return data
  }

  useEffect(() => {
    getApi().then((response) => {
      console.log(response)
    })
  }, [])

  return (
    <div>
      <Hostpial />
    </div>
  )
}

export default HostipialContainer
