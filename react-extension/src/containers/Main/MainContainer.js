import React, { useCallback, useEffect, useState } from "react"
import GetApi from "../../assets/api/GetApi"
import City from "../../components/City"
import "../../util/util.scss"
import ReactLoading from "react-loading"

const CITY_COUNT = 19
let all = []

const MainContainer = () => {
  const [index, setIndex] = useState(0)
  const [corona, setCorona] = useState([])

  const getApi = async () => {
    const data = await GetApi.getCity()
    return data.response.body.items
  }

  const cityInformation = useCallback((response) => {
    for (let i = 0; i < CITY_COUNT; i++) {
      let data = {
        area: response.item[i].gubun,
        check: response.item[i].defCnt,
        update: response.item[i].incDec,
        death: response.item[i].deathCnt,
      }
      all = [...all, data]
    }
    setCorona(all.reverse())
  }, [])

  useEffect(() => {
    getApi().then((response) => {
      cityInformation(response)
    })
  }, [])

  return (
    <div>
      {corona.length >= 19 ? (
        <City corona={corona} index={index} setIndex={setIndex} />
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

export default MainContainer
