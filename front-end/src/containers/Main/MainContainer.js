import React, { useCallback, useEffect, useState } from "react"
import GetApi from "../../assets/api/GetApi"
import City from "components/City/City"
import "../../util/util.scss"
import ReactLoading from "react-loading"

const CITY_COUNT = 19
let all = []

const MainContainer = () => {
  const [index, setIndex] = useState(18)
  const [corona, setCorona] = useState([])

  const changeIndex = useCallback((e) => {
    if (e === "0") {
      setIndex(18)
    } else if (e === "18") {
      setIndex(0)
    } else {
      setIndex(e)
    }
  }, [])

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
      setCorona(all)
    }
  }, [])

  useEffect(() => {
    getApi().then((response) => {
      cityInformation(response)
    })
  }, [])

  return (
    <div>
      {corona.length >= 19 ? (
        <City corona={corona} index={index} changeIndex={changeIndex} />
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
